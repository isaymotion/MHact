# MH Act & SDoMH Trainer

An offline-first educational web app for Philippine psychiatry residents covering Republic Act No. 11036 (Mental Health Act of 2018), rights-based clinical practice, and the social determinants of mental health (WHO & Calouste Gulbenkian Foundation, 2014).

## Included modules
- Full Act browser, linked section references, glossary and Act reference map.
- Confidentiality, consent, Section 13 safeguards, rights and complaints, facility audit, capacity and documentation tools.
- Quiz, RA 11036 and SDoMH flashcards, branching legal-practice cases, an 8-case Philippine SDoMH case library, 12 fictional Mental Health Act OSCE stations plus 7 integrated SDoMH OSCE stations with countdown timers, self-rating rubrics and viva prompts, community worksheet, social-risk screen and interventions library.
- SDoMH Intervention-Matching Tool with determinant-specific fictional scenarios, multilevel response options, formative feedback, scored practice and locally saved progress.
- Global search across legal sections, glossary, flashcards, quizzes, cases, interventions, determinants, the SDoMH Case Library, intervention matching and OSCE stations.
- Browser back/forward navigation, responsive keyboard-accessible mobile drawer, reduced-motion support and system-aware dark mode.
- Progress export/import as a JSON backup. Progress is stored locally in this browser; export a backup before clearing browser data or changing devices.
- Service-worker offline fallback with network-first updates for HTML, JavaScript and CSS.

## Philippine SDoMH Case Library (Release 2)
The case library contains eight fictional teaching cases: urban housing insecurity; rural service access; OFW family separation; informal employment and medication affordability; disaster displacement; older adults living alone; adolescent bullying and school exclusion; and culturally responsive care with an Indigenous community. Each case includes risk and protective factors at five determinant levels, a model formulation, discussion questions, and a rights/systems lens. Release 2 adds two sequential branching decisions per case with choice-specific feedback, a structured intervention-plan builder across all five levels plus follow-up measures, and locally saved completion tracking. Progress is included in the app’s JSON export/import. Cases are educational composites, not reports about real people or communities.

Roadmap: **Release 1** case library; **Release 2** interactive learning and intervention planning (included in this build); **Release 3** OSCE integration with timers, self-rating rubrics and viva prompts (included in this build); **Release 4** educator tools, printable case sheets, facilitator notes, OSCE handouts, and anonymized progress export (included in this build).


## SDoMH intervention matching (Release 2)
The intervention-matching tool includes six determinant scenarios: housing instability, unemployment/precarious work, food insecurity, social isolation, poor access to care, and stigma/discrimination. Each includes appropriate and inappropriate options across clinical, interpersonal, service, community and systems levels, rationale and role boundaries, formative feedback, and scored practice. Release 2 adds a multilevel plan builder: residents record patient priorities, identify the first priority, document feasibility constraints, prioritize selected interventions, assign leads/partners, specify timing, and define follow-up measures and contingency plans. Saved plans and scores are stored locally and included in JSON progress backup; educator CSV exports remain metadata-only and exclude free-text plans. Philippine examples include possible LGU/DSWD social welfare, PESO, RHU/primary-care, and community pathways; these are prompts to verify locally, not live referrals or guarantees of eligibility. The tool is an educational prototype, not a validated assessment instrument.

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

## SDoMH Intervention-Matching Tool (Release 4)
Release 1 provides six determinant banks with 36 intervention options; Release 2 adds feedback, scoring and multilevel planning; Release 3 connects the tool to all eight fictional Philippine SDoMH cases and adds resource-sensitive branching; Release 4 adds educator-facing printable intervention facilitator guides, a five-domain case-planner rubric, and progress-export rows for determinant matching and saved case plans. The CSV contains completion/score metadata only and intentionally excludes free-text plan content. A course code is pseudonymous, not guaranteed anonymous. Exports remain local to the browser and should be handled under institutional data-governance rules.

The intervention answer key is an educational aid. Multiple plans may be reasonable; appropriateness depends on clinical urgency, patient preferences, feasibility and verified local service availability. Rubrics and scores are not validated competency instruments.

## Sources and limitations
- Republic Act No. 11036: https://lawphil.net/statutes/repacts/ra2018/ra_11036_2018.html
- DOH *National Mental Health Strategic Plan 2019–2023*: https://doh.gov.ph/wp-content/uploads/2023/08/Mental-Health-Strategic-Plan.pdf
- WHO & Calouste Gulbenkian Foundation (2014), *Social determinants of mental health*.

The 2019–2023 strategic plan is identified by its actual period and is not represented as the current plan. OSCE stations, scoring prompts, and model responses are educational material, not validated national assessment tools or quotations from statute. Check the full Act, current implementing rules and regulations, local protocols, and authoritative sources before clinical or legal use. Fictional cases only. Not legal or clinical advice.

---
Created by Isabella Navarro, MD · Latest version October 2026 · SDoMH Intervention Matching Release 4 · isaymotion@gmail.com


### Intervention matching — Release 2
Release 2 adds a planning workflow after intervention matching. Learners can document patient priorities, choose the first priority, consider feasibility constraints, assign priority/timing/lead for selected appropriate interventions, and define follow-up measures and contingencies. Plans can be printed as a standalone planning sheet. The plan remains in local browser storage and is included in the JSON progress backup; free-text plan details are intentionally excluded from the educator CSV summary.


## Release 3 — Case-based SDoMH intervention planner

Release 3 adds a case-based planner connected to all eight fictional Philippine SDoMH cases. Residents can select interacting determinants, choose candidate responses from the intervention library, draft clinical and social actions, prioritize work, assign leads and timing, respond to resource/access constraints through branching guidance, record patient preferences and protective factors, define follow-up and contingencies, and complete a five-domain self-reflection rubric. Plans save locally in the browser and can be printed. No patient-identifying information should be entered. The self-rating is formative and not a validated competency measure.

The new navigation item is **Case-Based SDoMH Planner**. Service examples are illustrative; local availability, eligibility and protocols must be verified. Service worker cache version: `mh-trainer-v16`.

## Mental Health Act Decision Pathways — Release 1

Adds a foundation case-map library for four RA 11036 teaching scenarios:
- Patient declines recommended admission
- Family requests confidential information
- Restraint is being considered
- Discharge planning with limited family support

Each case includes a scenario, learning objectives, two decision points, plausible response options, model rationale, safeguards, scope caveats, and links that open the relevant numbered section inside **The Act**. This release is the reviewed content/framework phase; Release 2 is planned to make choices interactive with branch-specific feedback and progress tracking.

Legal content is an educational interpretation, not legal advice. Review against the full text of RA 11036, current implementing rules, other applicable law, and local institutional protocols before clinical teaching or use.


## Mental Health Act Decision Pathways — Release 2

Release 2 converts the four RA 11036 foundation case maps into interactive decision flows. Learners choose one response at each decision point, receive choice-specific feedback and relevant in-app Act-section links, see a branch-aware reminder before the next decision, and can review or change prior answers. Completion and formative scores are saved locally in the browser and included in the existing JSON progress backup. Learners can save and exit, continue an unfinished case, retry a case, and review the final decision-by-decision summary. The score adds one point for a preferred response, zero for incomplete, and subtracts one for an unsafe response; it is an educational aid, not a validated assessment instrument.

The four cases remain refusal of recommended admission, family request for confidential information, restraint considered, and discharge with limited family support. Legal links open the relevant section in “The Act.” Confirm statutory wording, current implementing rules, other applicable law, and local facility procedures before using the material clinically.


## Mental Health Act Decision Pathways — Release 3

Release 3 adds an advanced evolving-facts decision to each of the four RA 11036 pathways: refusal of admission, family requests for confidential information, restraint considered, and discharge with limited family support. These decisions focus on reassessment, documentation, consultation/escalation, monitoring, discontinuation of restrictive intervention when no longer justified, and realistic continuity planning.

The advanced decision feedback separately displays formative 0–2 ratings for clinical judgment, legal reasoning, and safeguards/procedure. These domain ratings apply to the advanced decision only and are not a validated competency instrument. Each response links to relevant sections in the app's “The Act” section. All legal explanations are educational summaries; verify the full RA 11036, current implementing rules, other applicable law, and local institutional protocols before clinical use.

Service-worker cache version: `mh-trainer-v21`.

## Release 4 — Mental Health Act pathway educator tools

Release 4 adds educator support for the four interactive Mental Health Act decision pathways:

- Printable facilitator guides for each pathway, including scenario, learning objectives, decision-by-decision choices and model rationales, section-number anchors, discussion prompts and case-specific cautions.
- Printable learner scoring sheets with space for decision notes and a four-domain formative rubric: clinical judgment, legal reasoning, safeguards/procedure, and communication/documentation.
- The anonymized educator CSV now includes per-pathway completion, decision count/net teaching score, and available advanced-decision domain score metadata. It excludes free-text responses and learner notes.
- Service-worker cache version: `mh-trainer-v22`.

These materials are formative teaching aids, not validated competency instruments or legal advice. Educators should verify statutory references against the complete RA 11036, current implementing rules, other applicable law, and institutional protocols before teaching or clinical application. Course codes are pseudonymous; exported files still require appropriate institutional data governance.

## Fixes in cache version `mh-trainer-v26`
Verified in headless Chromium (Playwright) over HTTP:
- **Act links:** every in-app section reference (learning tabs, glossary, search results, pathways, OSCE, reference map) now opens and highlights the correct section in The Act. The handler previously searched for stale element ids (`#lw`, `#act-sec-N`) and silently did nothing.
- **Act reference map:** the section column (e.g. 14-22) is now linked.
- **Back/forward:** one history stack. The in-app Back button now calls `history.back()`, so it no longer goes forward after the browser's Back button is used.
Known open items: see the review notes (answer-position bias in pathways, learning decisions and matching; first-install auto-reload; sub-views are not history entries).
