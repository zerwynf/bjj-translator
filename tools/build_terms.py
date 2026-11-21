"""Generate data/terms.js from the term library spreadsheet."""
import json, re, sys, unicodedata
from openpyxl import load_workbook

SRC, OUT = sys.argv[1], sys.argv[2]

CATEGORIES = ["Positions", "Submissions", "Sweeps", "Takedowns", "Anatomy",
              "Concepts & Movements", "Commands & Phrases", "Competition", "Belt System"]

ALIASES = {
    "cross-face": "cross-face", "match": "match-fight", "shrimp": "shrimp-hip-escape",
    "sparring": "sparring-rolling", "tap": "tap", "stand-up": "technical-stand-up",
    "competition": "tournament", "movement": "shrimp-hip-escape", "belt": "white-belt",
    "promotion": "stripe", "instructor": "professor", "gi": "collar",
    "collar grip": "collar", "upa": "bridge", "mount escape": "bridge",
    "back mount": "back-control", "front headlock": "headlock",
    "choke defense": "chin", "knee shield": "shin", "deep half guard": "half-guard",
    "rules": "referee", "division": "weight-class", "grand master": "red-belt",
    "clinch": "body-lock-takedown", "judo": "hip-throw",
}


def slug(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-zA-Z0-9]+", "-", s).strip("-").lower()


ws = load_workbook(SRC).active
terms, seen = [], set()
for r in range(2, ws.max_row + 1):
    row = [(ws.cell(row=r, column=c).value or "").strip() for c in range(1, 9)]
    cat, en, pt, pron, desc, rel, ex_pt, ex_en = row
    if not en:
        continue
    assert cat in CATEGORIES, (cat, en)
    tid = base = slug(en)
    n = 2
    while tid in seen:
        tid, n = f"{base}-{n}", n + 1
    seen.add(tid)
    terms.append({
        "id": tid, "category": cat, "english": en, "portuguese": pt,
        "pronunciation": pron, "description": desc,
        "related": [x.strip() for x in rel.split(",") if x.strip()],
        "examplePt": ex_pt, "exampleEn": ex_en,
    })

by_name = {}
for t in terms:
    for k in (t["english"].lower(), re.sub(r"\s*\(.*?\)", "", t["english"]).lower(), t["portuguese"].lower()):
        by_name.setdefault(k, t["id"])

unresolved = set()
for t in terms:
    ids = []
    for name in t["related"]:
        k = name.lower()
        tid = (ALIASES.get(k) if ALIASES.get(k) in seen else None) or by_name.get(k) \
            or by_name.get(k.rstrip("s")) or by_name.get(k + " choke") or by_name.get(k + " guard")
        if not tid:
            unresolved.add(name)
        elif tid != t["id"] and tid not in ids:
            ids.append(tid)
    t["related"] = ids

with open(OUT, "w", encoding="utf-8") as f:
    f.write("// BJJ Translator term library, generated from the term spreadsheet.\n")
    f.write("// Each term's id is used in links, e.g. term.html?id=guard\n\n")
    f.write("const CATEGORIES = " + json.dumps(CATEGORIES, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("const TERMS = " + json.dumps(terms, ensure_ascii=False, indent=2) + ";\n")

print(len(terms), "terms written; unresolved related:", sorted(unresolved))
