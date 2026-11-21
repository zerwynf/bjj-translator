/* =========================================================
   BJJ Translator — app logic
   Uses CATEGORIES and TERMS from data/terms.js.
   Each page calls one init function: BJJ.initHome() or BJJ.initTerm().
   ========================================================= */

const BJJ = (function () {
    "use strict";

    const HOME_STATE_KEY = "bjj-home-url";

    // Look up a term by its id.
    const termsById = new Map(TERMS.map((term) => [term.id, term]));

    // ---------- Helpers ----------

    // Lowercase and strip accents so "braco" finds "Braço".
    function normalize(text) {
        return (text || "")
            .normalize("NFD")
            .replace(/[̀-ͯ]/g, "")
            .toLowerCase()
            .trim();
    }

    function byEnglishName(a, b) {
        return a.english.localeCompare(b.english);
    }

    function termUrl(term) {
        return "term.html?id=" + encodeURIComponent(term.id);
    }

    function homeUrlForCategory(category) {
        return "index.html?category=" + encodeURIComponent(category);
    }

    // Remember the home page's filter/search so "back" returns to it.
    function saveHomeUrl(url) {
        try {
            sessionStorage.setItem(HOME_STATE_KEY, url);
        } catch (e) {
            /* storage can be unavailable (private mode, file://); that's fine */
        }
    }

    function loadHomeUrl() {
        try {
            return sessionStorage.getItem(HOME_STATE_KEY);
        } catch (e) {
            return null;
        }
    }

    // Find where a word in `text` starts with `query` (accent- and
    // case-insensitive). "leg" matches "legs" but not "Polegar".
    // Returns the whole matched word from the original text, or null.
    function findWordMatch(text, query) {
        const q = normalize(query);
        if (!q || !text) return null;

        // Fold the text one character at a time, remembering where each
        // folded character came from, so we can return the original word.
        let folded = "";
        const origin = [];
        for (let i = 0; i < text.length; i++) {
            const f = text[i].normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
            for (let j = 0; j < f.length; j++) {
                folded += f[j];
                origin.push(i);
            }
        }

        const isWordChar = (c) => /[a-z0-9]/.test(c);
        let from = 0;
        while (true) {
            const at = folded.indexOf(q, from);
            if (at === -1) return null;
            if (at === 0 || !isWordChar(folded[at - 1])) {
                const start = origin[at];
                let end = origin[at + q.length - 1] + 1;
                while (end < text.length && /[\p{L}\p{N}]/u.test(text[end])) end++;
                return text.slice(start, end);
            }
            from = at + 1;
        }
    }

    // Build one tappable term card. Used on both pages.
    // `mention` (optional) explains a match found only in the description.
    function createTermCard(term, mention) {
        const card = document.createElement("a");
        card.className = "term-card";
        card.href = termUrl(term);

        const info = document.createElement("div");
        info.className = "term-info";

        const english = document.createElement("span");
        english.className = "term-english";
        english.textContent = term.english;

        const portuguese = document.createElement("span");
        portuguese.className = "term-portuguese";
        portuguese.lang = "pt-BR";
        portuguese.textContent = term.portuguese;

        info.append(english, portuguese);

        if (mention) {
            const note = document.createElement("span");
            note.className = "term-mention";
            note.textContent = "Mentions “" + mention + "”";
            info.appendChild(note);
        }

        const chevron = document.createElement("span");
        chevron.className = "chevron";
        chevron.setAttribute("aria-hidden", "true");
        chevron.textContent = "›";

        card.append(info, chevron);
        return card;
    }

    // ---------- Word of the Day ----------

    // Same term for everyone all day; changes at local midnight.
    // A simple hash of the date picks the index, so consecutive days
    // don't just walk the list alphabetically.
    function getWordOfTheDay(date) {
        const key = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
        }
        // Commands like "Left" or "Here" make a weak word of the day,
        // so pick from the technique-focused categories.
        const pool = TERMS.filter((t) => t.category !== "Commands & Phrases");
        return pool[hash % pool.length];
    }

    function renderWordOfTheDay() {
        const term = getWordOfTheDay(new Date());
        document.getElementById("wotd-card").href = termUrl(term);
        const title = document.getElementById("wotd-title");
        title.textContent = normalize(term.portuguese) === normalize(term.english)
            ? term.portuguese
            : term.portuguese + " — " + term.english;
        document.getElementById("wotd-pronunciation").textContent = term.pronunciation;
    }

    // ---------- Home page ----------

    function initHome() {
        renderWordOfTheDay();

        const params = new URLSearchParams(window.location.search);
        const state = {
            category: CATEGORIES.includes(params.get("category")) ? params.get("category") : "All",
            query: params.get("q") || "",
        };

        const chipsEl = document.getElementById("filter-chips");
        const listEl = document.getElementById("term-list");
        const countEl = document.getElementById("result-count");
        const searchEl = document.getElementById("search-input");

        searchEl.value = state.query;

        // Build the chips: "All" plus each category.
        ["All"].concat(CATEGORIES).forEach((category) => {
            const chip = document.createElement("button");
            chip.type = "button";
            chip.className = "chip";
            chip.textContent = category;
            chip.dataset.category = category;
            chip.addEventListener("click", () => {
                state.category = category;
                update();
            });
            chipsEl.appendChild(chip);
        });

        searchEl.addEventListener("input", () => {
            state.query = searchEl.value;
            update();
        });

        // Visible ✕ so a remembered search is easy to spot and clear.
        const clearEl = document.getElementById("search-clear");
        clearEl.addEventListener("click", () => {
            searchEl.value = "";
            state.query = "";
            update();
            searchEl.focus();
        });

        // The keyboard's Search/Enter key closes the on-screen keyboard
        // so the results underneath are visible.
        searchEl.addEventListener("keydown", (event) => {
            if (event.key === "Enter") searchEl.blur();
        });

        // Search every term (ignoring the category) and note how each matched.
        // Returns [{ term, nameMatch, mention }], name matches first.
        function searchAll() {
            const q = normalize(state.query);
            if (!q) {
                return TERMS.slice().sort(byEnglishName)
                    .map((term) => ({ term: term, nameMatch: true, mention: null }));
            }
            const results = [];
            TERMS.forEach((term) => {
                if (findWordMatch(term.english, q) || findWordMatch(term.portuguese, q)) {
                    results.push({ term: term, nameMatch: true, mention: null });
                    return;
                }
                const mention = findWordMatch(term.description, q);
                if (mention) results.push({ term: term, nameMatch: false, mention: mention });
            });
            return results.sort((a, b) =>
                (a.nameMatch === b.nameMatch ? 0 : a.nameMatch ? -1 : 1) ||
                byEnglishName(a.term, b.term));
        }

        function inCategory(result) {
            return state.category === "All" || result.term.category === state.category;
        }

        function update() {
            // Highlight the selected chip.
            chipsEl.querySelectorAll(".chip").forEach((chip) => {
                const isActive = chip.dataset.category === state.category;
                chip.classList.toggle("active", isActive);
                chip.setAttribute("aria-pressed", String(isActive));
            });

            // Render the list.
            const all = searchAll();
            const results = all.filter(inCategory);
            listEl.replaceChildren(...results.map((r) => createTermCard(r.term, r.mention)));

            if (results.length === 0) {
                const empty = document.createElement("div");
                empty.className = "empty-state";
                const strong = document.createElement("strong");
                strong.textContent = "No terms found";
                const hint = document.createElement("span");
                hint.textContent =
                    state.category === "All"
                        ? "Try a different spelling, or search in English or Portuguese."
                        : "Nothing in " + state.category + " matches.";
                empty.append(strong, hint);
                listEl.appendChild(empty);
            }

            clearEl.hidden = !state.query;

            const query = state.query.trim();
            const countText = results.length + (results.length === 1 ? " term" : " terms") +
                (query ? " matching “" + query + "”" : "") +
                (state.category !== "All" ? " in " + state.category : "");
            countEl.replaceChildren(document.createTextNode(countText));

            // While a category is selected, say how many matches it hides
            // and offer to show them.
            const hidden = all.length - results.length;
            if (state.query.trim() && hidden > 0) {
                const more = document.createElement("button");
                more.type = "button";
                more.className = "link-button";
                more.textContent = "Show " + hidden + " more in all categories";
                more.addEventListener("click", () => {
                    state.category = "All";
                    update();
                });
                countEl.append(document.createTextNode(" · "), more);
            }

            // Keep the URL in sync so refresh/back keep the same view.
            const next = new URLSearchParams();
            if (state.category !== "All") next.set("category", state.category);
            if (state.query.trim()) next.set("q", state.query.trim());
            const url = "index.html" + (next.toString() ? "?" + next.toString() : "");
            try {
                history.replaceState(null, "", url);
            } catch (e) {
                /* some browsers block this when opening the file directly; not critical */
            }
            saveHomeUrl(url);
        }

        update();

        // Scroll the selected chip into view (e.g. arriving from a term page).
        const activeChip = chipsEl.querySelector(".chip.active");
        if (activeChip && state.category !== "All") {
            activeChip.scrollIntoView({ block: "nearest", inline: "center" });
        }
    }

    // ---------- Cross-linking (term detail) ----------

    // Words that are terms but too generic to link inside a sentence.
    const DO_NOT_LINK = new Set([
        "position", "training", "lock", "break", "lift", "block", "move", "open",
        "close", "push", "pull", "here", "near", "far", "fast", "slow", "sit",
        "stand", "jump", "hop", "shake", "bend", "grab", "rotate", "left", "right",
        "front", "forward", "bow", "match", "points", "escape", "transition", "flow",
        "body", "elevate", "straighten", "stretch", "drilling", "submission",
        // used in descriptions with a different meaning than the term:
        // "a striking technique" isn't a class, and falling and rolling isn't sparring
        "technique", "rolling",
    ]);

    // Build the list of phrases that should become links, longest first,
    // so "half guard" wins over "guard".
    const linkPhrases = (function () {
        const phrases = [];
        TERMS.forEach((term) => {
            if (term.category === "Commands & Phrases") return;
            if (/\(.*\)/.test(term.english)) return; // e.g. "Mount (score)"
            term.english.split("/").forEach((part) => {
                const phrase = part.trim();
                if (phrase.length < 3 || DO_NOT_LINK.has(phrase.toLowerCase())) return;
                phrases.push({ phrase: phrase, id: term.id });
            });
        });
        phrases.sort((a, b) => b.phrase.length - a.phrase.length);
        return phrases;
    })();

    function escapeRegExp(text) {
        return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    // Turn a description string into text + <a> nodes.
    // Each other term is linked once (first mention), and never the term itself.
    function linkifyDescription(text, currentId) {
        const used = new Set([currentId]);
        let segments = [{ text: text }];

        linkPhrases.forEach(({ phrase, id }) => {
            if (used.has(id)) return;
            const pattern = new RegExp("\\b(" + escapeRegExp(phrase) + ")(s|es)?\\b", "i");
            for (let i = 0; i < segments.length; i++) {
                const seg = segments[i];
                if (seg.id) continue; // already a link
                const match = pattern.exec(seg.text);
                if (!match) continue;
                const before = seg.text.slice(0, match.index);
                const after = seg.text.slice(match.index + match[0].length);
                segments.splice(i, 1,
                    { text: before },
                    { text: match[0], id: id },
                    { text: after }
                );
                used.add(id);
                break;
            }
        });

        const fragment = document.createDocumentFragment();
        segments.forEach((seg) => {
            if (!seg.text) return;
            if (seg.id) {
                const link = document.createElement("a");
                link.className = "term-link";
                link.href = termUrl(termsById.get(seg.id));
                link.textContent = seg.text;
                fragment.appendChild(link);
            } else {
                fragment.appendChild(document.createTextNode(seg.text));
            }
        });
        return fragment;
    }

    // ---------- Term detail page ----------

    function initTerm() {
        const id = new URLSearchParams(window.location.search).get("id");
        const term = termsById.get(id);

        const backLink = document.getElementById("back-link");
        backLink.href = loadHomeUrl() || "index.html";

        if (!term) {
            renderNotFound();
            return;
        }

        document.title = term.portuguese + " (" + term.english + ") — BJJ Translator";
        document.getElementById("page-category").textContent = term.category;

        const pt = document.getElementById("term-portuguese");
        pt.textContent = term.portuguese;
        pt.lang = "pt-BR";
        document.getElementById("term-english").textContent = term.english;

        const pron = document.getElementById("term-pronunciation");
        pron.textContent = term.pronunciation;
        pron.setAttribute("aria-label", "Pronunciation: " + term.pronunciation);

        const category = document.getElementById("term-category");
        category.textContent = term.category;
        category.href = homeUrlForCategory(term.category);

        document.getElementById("term-description")
            .replaceChildren(linkifyDescription(term.description, term.id));

        if (term.examplePt) {
            const usage = document.getElementById("term-usage-text");
            const ptSpan = document.createElement("span");
            ptSpan.lang = "pt-BR";
            ptSpan.textContent = "“" + term.examplePt + "”";
            usage.replaceChildren(ptSpan, document.createTextNode(term.exampleEn ? " — " + term.exampleEn : ""));
            document.getElementById("term-usage").hidden = false;
        }

        const related = term.related.map((rid) => termsById.get(rid)).filter(Boolean);
        if (related.length) {
            document.getElementById("related-list").replaceChildren(...related.map((t) => createTermCard(t)));
            document.getElementById("related-terms").hidden = false;
        }
    }

    function renderNotFound() {
        document.title = "Term not found — BJJ Translator";
        document.getElementById("page-category").textContent = "BJJ Translator";
        const main = document.getElementById("term-main");
        const wrap = document.createElement("section");
        wrap.className = "not-found";
        const h2 = document.createElement("h2");
        h2.textContent = "Term not found";
        const p = document.createElement("p");
        p.textContent = "That term isn't in the library. It may have been renamed.";
        const a = document.createElement("a");
        a.href = "index.html";
        a.textContent = "Browse all terms";
        wrap.append(h2, p, a);
        main.replaceChildren(wrap);
    }

    return { initHome: initHome, initTerm: initTerm, getWordOfTheDay: getWordOfTheDay };
})();
