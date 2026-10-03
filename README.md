# MH Act & SDoMH Trainer

Trainer web app for psychiatry residents: **RA 11036 (Philippine Mental Health Act of 2018)** and the **social determinants of mental health** (WHO & Calouste Gulbenkian Foundation, 2014), in clinical context.

**Features:** confidentiality decision tree and practice · Sec. 13 restraint checklist · life-course, multilevel and proportionate-universalism exercises · interventions library (24 WHO case studies) · community assessment worksheet · advance directive, representative and supporter form drafts · spot-the-violation scenarios · facility self-audit · rights and complaints module · drug-dependency case · the full Act by chapter (searchable, tap to expand) · 16 social determinants explained · quiz (18 Qs, by topic) · flashcards · 3 branching cases (ER, RHU, barangay) · capacity checker with chart note · 15-day IRB review tracker (Sec. 13c) · social risk screen with Z-code and referral mapping · Act reference map. Progress saves in the browser (localStorage). Works offline after first load. iPhone: Safari > Share > Add to Home Screen (uses `assets/apple-touch-icon.png`; iOS ignores SVG icons).

## Run
No build step. Open `index.html`, or serve the folder (`python3 -m http.server`).

## Deploy on GitHub Pages
Push this folder to a repo, then **Settings > Pages > Deploy from branch > main / root**.

## Edit content
All questions, cards, cases and references live in `data.js`.

## Sources
- RA 11036: https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/83255
- WHO & Calouste Gulbenkian Foundation (2014). *Social determinants of mental health.* Geneva: WHO.

Check content against the current IRR and your institution's policies. Cases are fictional. Not legal or clinical advice.

---
This app was created by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com


## Interface updates (October 2026)
- Persistent left sidebar navigation, grouped by learning, application, practice, and tools.
- Responsive mobile drawer navigation.
- Light/dark theme toggle; preference is saved in localStorage.
- Service worker cache version bumped to refresh updated interface assets.


### Cross-references and glossary (v7)
- Section and chapter references in learning modules link to the corresponding entry in **The Act** browser.
- Added searchable glossary terms from RA 11036 and WHO & Calouste Gulbenkian Foundation (2014), *Social Determinants of Mental Health*.
- Source badges distinguish Act sections from WHO report page references.


### Flashcards (v6)
Flashcards are split into RA 11036 and SDoMH decks, shuffled by default. Mark cards as “Got it” or “Missed answer”; missed cards collect in the Missed answers deck. Each deck can be reset independently. Flashcard content is limited to RA 11036 and WHO & Calouste Gulbenkian Foundation (2014), *Social Determinants of Mental Health*.
