# MH Act & SDoMH Trainer

An offline-first educational web app for Philippine psychiatry residents covering Republic Act No. 11036 (Mental Health Act of 2018), rights-based clinical practice, and the social determinants of mental health (WHO & Calouste Gulbenkian Foundation, 2014).

## Included modules
- Full Act browser, linked section references, glossary and Act reference map.
- Confidentiality, consent, Section 13 safeguards, rights and complaints, facility audit, capacity and documentation tools.
- Quiz, RA 11036 and SDoMH flashcards, branching legal-practice cases, an 8-case Philippine SDoMH case library, 12 fictional Mental Health Act OSCE stations plus 7 integrated SDoMH OSCE stations with countdown timers, self-rating rubrics and viva prompts, community worksheet, social-risk screen and interventions library.
- Global search across legal sections, glossary, flashcards, quizzes, cases, interventions, determinants, the SDoMH Case Library and OSCE stations.
- Browser back/forward navigation, responsive keyboard-accessible mobile drawer, reduced-motion support and system-aware dark mode.
- Progress export/import as a JSON backup. Progress is stored locally in this browser; export a backup before clearing browser data or changing devices.
- Service-worker offline fallback with network-first updates for HTML, JavaScript and CSS.

## Philippine SDoMH Case Library (Release 2)
The case library contains eight fictional teaching cases: urban housing insecurity; rural service access; OFW family separation; informal employment and medication affordability; disaster displacement; older adults living alone; adolescent bullying and school exclusion; and culturally responsive care with an Indigenous community. Each case includes risk and protective factors at five determinant levels, a model formulation, discussion questions, and a rights/systems lens. Release 2 adds two sequential branching decisions per case with choice-specific feedback, a structured intervention-plan builder across all five levels plus follow-up measures, and locally saved completion tracking. Progress is included in the app’s JSON export/import. Cases are educational composites, not reports about real people or communities.

Roadmap: **Release 1** case library; **Release 2** interactive learning and intervention planning (included in this build); **Release 3** OSCE integration with timers, self-rating rubrics and viva prompts (included in this build); **Release 4** educator tools, printable case sheets, facilitator notes, OSCE handouts, and anonymized progress export (included in this build).

## OSCE integration (Release 3)
The OSCE area retains the 12 core Mental Health Act stations and adds seven structured stations adapted from fictional SDoMH cases: housing insecurity, rural access, OFW family separation, medication affordability, disaster displacement, adolescent bullying, and culturally responsive Indigenous care. Each added station has a timed candidate task, suggested action checklist, model reasoning, RA 11036 and historical DOH plan context, a four-item self-rating rubric, and viva questions. Countdown is optional and does not auto-submit. Self-ratings are reflective learning aids, not validated national assessment instruments. Station attempts and rubric scores are stored locally and included in progress export/import.

## Educator tools (Release 4)
The Educator tools section includes facilitator guidance for all eight fictional SDoMH cases (learning objectives, pre-brief, teaching points, common pitfalls and debrief prompts); printable case sheets with determinant maps, model formulation, discussion questions and rights/systems lens; candidate-facing or facilitator OSCE handouts; and a CSV progress export. The export contains case/station completion and score metadata, quiz/flashcard counts and an optional course-assigned code. It intentionally excludes free-text notes and intervention-plan responses. The app does not transmit this information to a server.

The CSV is a local per-browser export, not a roster, cloud dashboard or guaranteed de-identification service. A course code is pseudonymous rather than inherently anonymous; do not enter names, emails or patient information. Combine and store exports only under the institution’s data-governance rules.

## Run locally
No build step is required. Open `index.html`, or serve this folder with `python3 -m http.server`. Service-worker behavior requires HTTP/HTTPS.

## Deploy on GitHub Pages
Push the contents of this folder to the repository's publishing branch and configure **Settings → Pages → Deploy from a branch**. The app is designed to work from a repository subpath.

## Progress backup
Use **Export progress** in the sidebar to save `mh-trainer-progress.json`. On another browser or after restoring data, choose **Import progress** and select that file. Import replaces the currently stored progress after confirmation. The backup contains only app progress saved in this browser; it is not a server account or cloud sync. Do not store identifiable patient information in notes.

## Sources and limitations
- Republic Act No. 11036: https://lawphil.net/statutes/repacts/ra2018/ra_11036_2018.html
- DOH *National Mental Health Strategic Plan 2019–2023*: https://doh.gov.ph/wp-content/uploads/2023/08/Mental-Health-Strategic-Plan.pdf
- WHO & Calouste Gulbenkian Foundation (2014), *Social determinants of mental health*.

The 2019–2023 strategic plan is identified by its actual period and is not represented as the current plan. OSCE stations, scoring prompts, and model responses are educational material, not validated national assessment tools or quotations from statute. Check the full Act, current implementing rules and regulations, local protocols, and authoritative sources before clinical or legal use. Fictional cases only. Not legal or clinical advice.

---
Created by Isabella Navarro, MD · Latest version October 2026 · isaymotion@gmail.com
