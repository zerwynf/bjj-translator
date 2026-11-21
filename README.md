# BJJ Translator

Learn the Brazilian Portuguese language of jiu jitsu. A mobile-first web app with 203 BJJ terms across 9 categories.

## Features

- **Word of the Day**: a new term every day, the same for everyone
- **Search**: English or Portuguese, with or without accents ("braco" finds "Braço")
- **Browse by category**: horizontally scrolling filter chips
- **Term detail**: translation, pronunciation, description, example usage, and related terms
- **Cross-linking**: terms mentioned in a description link to their own pages

## Run it

No install needed. Open `index.html` in a browser.

## Project structure

```
index.html          Home: Word of the Day, search, browse
term.html           Term detail (term.html?id=guard)
css/styles.css      Design system: Warm Gold Accent palette, DM Sans, 4px spacing
js/app.js           Word of the Day, search, filtering, term detail rendering
data/terms.js       The term library (generated, don't edit by hand)
tools/build_terms.py  Regenerates data/terms.js from the term spreadsheet
```

## Updating the term library

1. Edit the terms in the Google Sheet, then download it as `.xlsx` (File → Download → Microsoft Excel).
2. Run:

   ```
   pip install openpyxl
   python tools/build_terms.py BJJ_Translator_Term_Library.xlsx data/terms.js
   ```

The script prints any "Related Terms" it couldn't match to a term in the library.

## Design

- Material Design 3 color roles with a Brazilian-flag-inspired Warm Gold Accent palette
- All text colors pass WCAG AA contrast (4.5:1 for body text)
- Designed in Figma, mobile-first at 390×844
