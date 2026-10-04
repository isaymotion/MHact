# Republic Act No. 11036 — source verification and transcription audit

**Status: Phase 1 started. The complete verbatim transcription is not yet complete.**

## Source hierarchy agreed for this project

1. **Primary source:** Official Gazette signed Act PDF, mirrored at Wikimedia Commons: https://upload.wikimedia.org/wikipedia/commons/e/e1/Republic_Act_No._11036_%2820180620-RA-11036-RRD%29.pdf
   - Wikimedia's file record identifies it as the Official Gazette PDF, signed June 20, 2018, and records 17 pages. Source record: https://commons.wikimedia.org/wiki/File:Republic_Act_No._11036_%2820180620-RA-11036-RRD%29.pdf
2. **Searchable cross-reference:** Supreme Court E-Library: https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/83255
3. **Comparison source:** Lawphil: https://lawphil.net/statutes/repacts/ra2018/ra_11036_2018.html
4. **Additional cross-check if a conflict remains:** Senate Legislative Reference Bureau: https://ldr.senate.gov.ph/legislative-issuance/republic-act-no-11036

## Method

- Transcribe the signed PDF page images as the authority for the enacted wording.
- Compare each section/subsection with the Supreme Court E-Library text and Lawphil.
- Record every meaningful difference, including punctuation or numbering when potentially meaningful.
- Classify each as: (A) website transcription error; (B) apparent OCR/extraction error; (C) formatting-only difference; (D) apparent typo in the signed document; or (E) unresolved.
- Do not silently correct a possible typo in the signed document. Preserve what the signed source shows and add a note to the audit.
- Do not use a website's OCR/text extraction as proof of what is printed in the signed PDF when the page image has not been inspected.

## Phase 2 — verbatim text implemented for Sections 1–3

Sections 1–3 in `law.js` have now been replaced with wording transcribed from the signed Official Gazette PDF (PDF image 1 for Section 1; PDF image 2 for Sections 2–3) and cross-checked against the Supreme Court E-Library and Senate LRB searchable text. The app’s existing chapter/section data shape and section IDs are unchanged. This is a limited completed batch, not a claim that the full Act is verbatim.

| Location | Previous implementation issue | Resolution in this batch | Status |
|---|---|---|---|
| Section 1 | Added a terminal period not visible in the signed source line | Removed the added period; retained the quoted title | Transcribed against signed PDF |
| Section 2, first paragraph | Entire opening declaration was omitted | Added: “The State affirms the basic right of all Filipinos to mental health as well as the fundamental rights of people who require mental health services.” | Transcribed against signed PDF |
| Section 2, second paragraph | Text was present but not fully verbatim and omitted exact full names of international instruments and RA 7277 | Restored full wording and paragraph order from signed source | Transcribed against signed PDF |
| Section 3 | Six objectives were shortened/paraphrased | Replaced with complete six objectives, including “effective and efficient,” “Filipino people,” and the concluding “and” in item (e) | Transcribed against signed PDF |

The searchable E-Library and Senate LRB text contain punctuation/spacing extraction artifacts in places, so these were used as cross-checks rather than copied as the primary text. See the source URLs in the hierarchy above.

## Phase 1 — first visual verification against the signed PDF

The user-provided signed PDF has been opened and rendered as page images. Its pages are scanned images with no embedded text layer, so OCR is being used only as an aid; the page image remains the authority. All 17 PDF page images have received a structural visual pass. This is not a line-by-line transcription audit; only selected passages and candidate discrepancies have been checked word-for-word against the images.

### Confirmed from page 1

| Location | Lawphil transcription / candidate issue | Reading visible on signed PDF | Classification | Status |
|---|---|---|---|---|
| Long title | The Lawphil title appears to omit “psychiatric, neurologic and” before “psychosocial health services” | “RIGHTS OF PERSONS UTILIZING PSYCHIATRIC, NEUROLOGIC AND PSYCHOSOCIAL HEALTH SERVICES” | Website transcription omission if the current Lawphil text is as extracted | **Confirmed against page 1** |
| Chapter I heading | `GENRAL PROVISIONS` | `GENERAL PROVISIONS` | Website transcription typo | **Confirmed against page 1** |

### Confirmed from page 2

| Location | Lawphil transcription / candidate issue | Reading visible on signed PDF | Classification | Status |
|---|---|---|---|---|
| Section 2, State policy paragraph | “mental health case is made available” | “mental health care is made available to the public” | Website transcription typo, subject to final exact-text comparison | **Confirmed against page 2** |
| Section 2, State policy paragraph | “mental health service are free” | “mental health services are free from coercion and accountable to the service users” | Website transcription typo, subject to final exact-text comparison | **Confirmed against page 2** |

### Confirmed from PDF image 3 (printed pages 4–5)

| Location | Candidate discrepancy | Reading visible on signed PDF | Classification | Status |
|---|---|---|---|---|
| Section 4(j), Mental Health | Lawphil candidate: “scopes adequately with the normal stresses of life” | “copes adequately with the normal stresses of life” | Website transcription typo if present in the current Lawphil text | **Resolved from signed PDF image** |
| Section 4(g), impairment or temporary loss of decision-making capacity | Definition continues across columns and includes four numbered abilities | The signed page visibly contains items (1)–(4), including understanding the condition, consequences of decisions/actions, treatment information and effective communication | OCR/layout risk; retain all four numbered items | **Visually checked; full transcription still pending** |

### Confirmed from PDF image 4 (printed pages 6–7)

| Location | Candidate discrepancy | Reading visible on signed PDF | Classification | Status |
|---|---|---|---|---|
| Section 4(l), Mental Health Facility | Lawphil candidate: “primary fucntion” | “primary function” | Website transcription typo if present in the current Lawphil text | **Resolved from signed PDF image** |
| Section 4(m)–(r) | Definitions may be affected by OCR column ordering | The page contains Mental Health Professional, Mental Health Service Provider, Mental Health Services, Mental Health Worker, Psychiatric or Neurologic Emergency, and Psychosocial Problem in that order | OCR/layout risk; maintain subsection lettering and complete wording | **Visually checked; full transcription still pending** |
| Chapter II / Section 5 | Section begins at the bottom of the right column | `CHAPTER II — RIGHTS OF SERVICE USERS AND OTHER STAKEHOLDERS`; Section 5 starts on printed page 7 and continues onto printed page 8 | Formatting/layout difference if flattened by a website | **Heading and transition visually checked** |

### Confirmed from PDF image 5 (printed pages 8–9)

| Location | What the signed page shows | Audit note | Status |
|---|---|---|---|
| Section 5, rights of service users | The enumerated rights continue from (a) through (l) across the two columns | Preserve every item and its exact sequence; column order can confuse OCR | **Visually checked; transcription pending** |
| Section 5(l), confidentiality | The provision lists numbered exceptions (1)–(5), with item (5) continuing at the bottom of printed page 9 | Preserve all five exceptions and the continuation across page boundaries | **Visually checked; transcription pending** |

### Confirmed from PDF image 6 (printed pages 10–11)

| Location | What the signed page shows | Audit note | Status |
|---|---|---|---|
| Section 5, rights of service users | The list continues with consent, participation in care planning, legal-age representative, private communication, legal services, clinical records, access to information, and complaint rights | Keep subsection letters (m)–(t) in sequence; several items continue across columns | **Visually checked; transcription pending** |
| Section 6, Rights of Family Members, Carers and Legal Representatives | Four enumerated rights appear on printed page 11 | Preserve the section heading and all four lettered rights | **Visually checked; transcription pending** |
| Section 7, Rights of Mental Health Professionals | The section begins on printed page 11, with lettered rights continuing onto the next page | Do not treat the page break as a section boundary | **Visually checked; transcription pending** |

### Confirmed from PDF image 7 (printed pages 12–13)

| Location | What the signed page shows | Audit note | Status |
|---|---|---|---|
| Section 7 | The remaining professional rights include policy/service-delivery participation, professional autonomy except in emergencies, and advocacy | Preserve subsection lettering and the final “and” where the list continues | **Visually checked; transcription pending** |
| Chapter III / Sections 8–10 | The page begins Chapter III, “TREATMENT AND CONSENT,” then Sections 8 (Informed Consent to Treatment), 9 (Advance Directive), and 10 (Legal Representative) | Section 10(a) functions list continues across the page boundary | **Headings and transitions visually checked** |
| Section 10(a)–(c) | The legal representative functions, declining an appointment, and failure to appoint are set out in separate subdivisions | Keep all numbered functions and the priority order for failure to appoint | **Visually checked; transcription pending** |

### Confirmed from PDF image 8 (printed pages 14–15)

| Location | What the signed page shows | Audit note | Status |
|---|---|---|---|
| Section 10(c) | The order of priority continues with items (2)–(5) | Preserve the continuation of the priority list from the previous page | **Visually checked; transcription pending** |
| Sections 11–12 | Supported Decision Making and Internal Review Board, including board composition and powers/functions | Keep the distinct board composition list and powers/functions list; don't flatten them into prose | **Visually checked; transcription pending** |
| Section 13, Exceptions to Informed Consent | The section lists safeguards/conditions (a)–(c), with the last condition continuing beyond the bottom of the image | Preserve all conditions and the continuation on the next page | **Visually checked; transcription pending** |

### Confirmed from PDF images 9–11 (printed pages 16–21)

| Location | What the signed page shows | Audit note | Status |
|---|---|---|---|
| Chapter IV / Sections 14–15 | “MENTAL HEALTH SERVICES”; Section 14 lists five quality principles (a)–(e); Section 15 addresses mental health services at the community level | Preserve the five-part list and the Section 15 paragraphs across the column/page layout | **Headings and structure visually checked; full transcription pending** |
| Sections 16–18 | Community-based Mental Health Care Facilities; Reportorial Requirements; Psychiatric, Psychosocial, and Neurologic Services in Regional, Provincial, and Tertiary Hospitals | Section 18 begins on printed page 17 and continues onto page 18 with items (a)–(f) | **Headings and transitions visually checked; full transcription pending** |
| Section 19 | Duties and Responsibilities of Mental Health Facilities | Items (a)–(d) appear on printed page 18; items (e)–(f) continue on printed page 19. Preserve the continuation and letter sequence | **Structure visually checked; full transcription pending** |
| Sections 20–22 | Drug Screening Services; Suicide Prevention; Public Awareness | All three headings are visible on printed page 19; Section 22 ends before Chapter V | **Headings visually checked; full transcription pending** |
| Chapter V / Sections 23–25 | Education and promotion of mental health in educational institutions and the workplace | Preserve Section 23(a)–(b), Section 24’s two paragraphs, and Section 25 as separate provisions | **Headings and structure visually checked; full transcription pending** |
| Chapter VI / Sections 26–28 | Capacity Building, Research and Development; Sections 26, 27, and 28 begin on printed page 21 | Section 28 continues below the bottom of printed page 21 and must be joined to the next scanned page | **Headings and transition visually checked; full transcription pending** |

### Still pending visual verification

| Location | Candidate discrepancy | Why it remains pending |
|---|---|---|
| Section 3(b) | Searchable text has garbled punctuation in places | Need compare the complete printed wording, including punctuation |
| Section 49 / final clauses | Searchable extracts show “This Act. shall”, “Official Gazelle”, and malformed date formatting | Need inspect the actual closing page image to distinguish printed text from OCR/extraction errors |

**Scope note:** This remains a partial verification pass, not a complete audit. No conclusion is being made yet about whether the signed document itself contains typographical errors.

## Current implementation state

- `law.js` still contains condensed summaries for several sections. It must **not** be described as a complete verbatim transcription yet.
- The app's offline chapter/section interface is retained as the target implementation.
- Once the PDF text is transcribed and audited, replace the condensed content while preserving section anchors, search, expand/collapse behavior, and offline caching.

## Remaining checklist

- [x] Complete a structural visual pass of all 17 signed-PDF page images, including signature/approval page. (This is not a line-by-line transcription audit.)
- [ ] Transcribe the complete Act without paraphrasing, preserving headings, section numbering, subsection letters, provisos, exceptions, penalties, and closing text. Sections 1–3 are complete in this batch; Sections 4–49 remain pending.
- [ ] Compare each section with the Supreme Court E-Library.
- [ ] Compare each section with Lawphil.
- [ ] Record every discrepancy with section/page, exact source readings, classification, and resolution.
- [x] Resolve the previously flagged Section 49 closing-text candidates against the signed PDF; flag any typo that appears in the signed source rather than silently repairing it.
- [ ] Replace condensed `law.js` summaries with the audited offline text.
- [ ] Run automated section-count, duplicate/missing-section, syntax, and ZIP-integrity checks.
- [ ] Test offline loading, search, expand/collapse, and section anchors in a browser.

### Confirmed from PDF images 12–17 (printed pages 22–33)

| Location | What the signed page shows | Audit note | Status |
|---|---|---|---|
| Chapter VI / Sections 27–28 | Research and Development continues into the next page; Section 28 is followed by Chapter VII | Preserve Section 28's continuation before the new chapter heading | **Headings and transitions visually checked; full transcription pending** |
| Chapter VII / Sections 29–31 | Duties and Responsibilities of the Department of Health; Department of Education; and Civil Service Commission | Keep each agency's duties in its own section and preserve lettered/numbered subitems | **Headings and structure visually checked; full transcription pending** |
| Chapter VIII / Sections 32–34 | Philippine Council for Mental Health, composition, and functions | Composition and function lists span columns/pages; preserve the complete membership and subparagraph order | **Headings and structure visually checked; full transcription pending** |
| Chapter IX / Sections 35–37 | Mental Health Financing; Implementing Rules and Regulations; Congressional Oversight Committee | Section 37 includes a multi-member committee composition list and continues onto printed page 29 | **Headings and structure visually checked; full transcription pending** |
| Chapter X / Sections 38–42 | Penalties and other provisions, including prohibited acts and the associated penalties | Section 38 contains multiple lettered prohibited acts; Section 39 contains penalty language; preserve every list item and penalty verbatim | **Headings and structure visually checked; full transcription pending** |
| Sections 43–49 | Separability, repealing, appropriation, implementing rules, transitory, effectivity, and closing provisions | The closing page contains signatures/approval marks; final effectivity sentence and approval date have been enlarged and visually checked | **Closing wording checked; full Act comparison pending** |

### Final-page check (PDF image 17; printed pages 32–33)

The final page image was enlarged and visually reviewed for the effectivity and approval lines. The signed image reads: **“This Act shall take effect fifteen (15) days after its publication in the Official Gazette or in at least two (2) newspapers of general circulation.”** The approval stamp reads **“Approved: JUN 20 2018.”**

| Candidate discrepancy | Signed PDF reading | Classification | Status |
|---|---|---|---|
| Lawphil searchable text: “This Act. shall” | “This Act shall” | Website transcription punctuation error | Confirmed against final-page image |
| Lawphil searchable text: “Official Gazelle” | “Official Gazette” | Website transcription error | Confirmed against final-page image |
| Approval date variants from OCR/searchable text | “Approved: JUN 20 2018” | OCR/extraction normalization risk | Confirmed against final-page image |

The signed PDF remains the authority. These final-page findings do not establish that the rest of the Act has been transcribed or compared line by line.

**Scope note:** All 17 PDF images have now received a structural visual pass. This does not mean every line of the Act has been transcribed and checked; the complete verbatim transcription and section-by-section E-Library/Lawphil comparison remain outstanding.

## Current implementation state

- `law.js` still contains condensed summaries for several sections. It must **not** be described as a complete verbatim transcription yet.
- The app's offline chapter/section interface is retained as the target implementation.
- Once the PDF text is transcribed and audited, replace the condensed content while preserving section anchors, search, expand/collapse behavior, and offline caching.

## Batch update: Section 4 expanded (2026-10-04)

Section 4 in `law.js` has been expanded from short paraphrased definitions to a full 22-item working transcription, preserving the (a)–(v) labels and the numbered tests in subsection (g). This batch was cross-checked against the Supreme Court E-Library searchable text and the Senate LRB searchable copy. It is **not yet certified verbatim against the signed PDF line by line**; the signed scan is two-column and the OCR output contains recognition errors, so the searchable copies remain cross-checks rather than authorities.

### Items explicitly left for signed-page resolution

| Location | Searchable-source issue / working-text treatment | Status |
|---|---|---|
| Section 4(a) | Searchable text reads “consistently abstain impairment and behavioral control,” which appears to lack punctuation between “abstain” and “impairment.” Working text currently inserts a comma for readability; verify the exact printed punctuation against the signed scan before calling verbatim. | Pending visual resolution |
| Section 4(e) | Searchable text has the unusual phrase “persons with decision-making impairment capacity.” Preserved as searchable text rather than silently rewriting the phrase. | Pending visual resolution |
| Section 4(f), (i), (k), (n), (u), (v) | Searchable versions contain punctuation/spacing and possible OCR artifacts (including quotation marks and compound words). The working text normalizes obvious spacing/punctuation in several places; compare against signed PDF before final approval. | Pending line-by-line comparison |
| Sections 1–3 | Remain the previous batch’s text; Section 3 punctuation still requires a complete printed-page comparison. | Partial verification only |

No discrepancy in this batch should be treated as resolved solely because a searchable website renders a more readable phrase. The signed Act remains the source of truth. The rest of Sections 5–49 are still condensed, and the chapter/section organization still requires a structural correction pass before release.

## Batch update: Sections 5–7 expanded (2026-10-04)

Sections 5, 6, and 7 in `law.js` have been expanded from abbreviated summaries to fuller working transcriptions. Section 5 preserves the complete (a)–(t) rights list and the five numbered confidentiality exceptions; Sections 6 and 7 preserve their (a)–(d) and (a)–(g) lists respectively. The searchable text was cross-checked against the Supreme Court E-Library and Senate LRB results, and the signed PDF scan pages showing Sections 5–7 were visually inspected for layout and key wording.

### Source and fidelity status

- **Signed PDF pages visually inspected:** printed pages 8–13 (PDF scan images 5–7), covering the latter portion of Section 5, Sections 6–7, and the transition to Chapter III.
- **Searchable cross-check:** Supreme Court E-Library and Senate LRB searchable text. Both have extraction/formatting artifacts in nearby content; these are cross-checks, not substitutes for the signed scan.
- **Not yet certified line-by-line:** exact punctuation, all typography, and every word in Sections 5–7 still require a final side-by-side transcription audit. The current text uses normalized punctuation where searchable text was malformed, so this batch is a working transcription, not a certified diplomatic transcription.

### Important structure issue found during validation

The current data contains 47 entries rather than 49 because Sections 47–49 remain combined as one `"47-49"` entry. The chapter/section grouping elsewhere in `law.js` also requires a separate audit against the signed Act. Do not treat successful JavaScript syntax checks as confirmation that the legal structure is correct.

### Checks performed

- `node --check law.js`: passed.
- `node --check app.js`: passed.
- Runtime data check: 10 chapter objects; 47 section entries including the combined `47-49` record; Sections 5, 6, and 7 each found; Section 5 has 20 lettered entries including the five numbered confidentiality exceptions; Section 6 has four lettered entries; Section 7 has seven lettered entries.
- Browser-level offline, search, navigation, and expand/collapse tests: still pending.

## Batch update: Sections 8–13 expanded (2026-10-04)

Sections 8–13 in `law.js` have been expanded from condensed summaries into fuller working transcriptions. The text was drafted from the signed Official Gazette scan images for printed pages 13–16 (scan images 7–9), with the Supreme Court E-Library and Lawphil searchable text used as cross-checks. OCR was used only as a reading aid; the scanned page image remains the primary source.

### Coverage in this batch

- Section 8: written informed consent, presumption of legal capacity, and children's right to express views.
- Section 9: advance directives and revocation.
- Section 10: legal representative functions, declining an appointment, and the ordered list when a service user fails to appoint a representative.
- Section 11: supported decision making and supporter authority.
- Section 12: internal review board creation, composition, and powers/functions.
- Section 13: safeguards and conditions for exceptions to informed consent, including review every fifteen (15) days and the external monitoring/audit requirement.

### Fidelity status and unresolved details

This is a **working transcription**, not a certified diplomatic transcription. The page images were visually checked for the relevant text and list structure, but exact punctuation, typography, and every word in Sections 8–13 have not yet been independently checked line by line against both searchable sources. The scan/OCR is particularly uncertain around some words in Section 12(a)(4) describing additional board members and the reference to rules and regulations; that clause should receive a final high-resolution visual check before this batch is described as fully verified. No claim is made that all of RA 11036 is complete.

### Checks performed

- `node --check law.js`: passed.
- `node --check app.js`: passed.
- Runtime data check: Sections 8, 9, 10, 11, 12, and 13 each appear once as distinct section entries; Section 10 contains subsections (a)–(c) and the five-person appointment order; Section 12 contains the four board-composition entries and four powers/functions; Section 13 contains safeguards (a)–(d).
- ZIP integrity check: pending at package creation.
- Browser-level offline, search, section navigation, and expand/collapse tests remain outstanding.


## Batch update: Sections 14–22 expanded (2026-10-04)

Sections 14–22 in `law.js` have been expanded from condensed summaries to fuller working transcriptions. The Supreme Court E-Library and Senate Legislative Reference Bureau searchable copies were used as cross-checks; the signed Official Gazette scan remains the primary source. OCR of scan image 9 visibly supports the text and list structure for Sections 14–18, including six distinct services under Section 18.

### Coverage

- Section 14: five service-quality requirements.
- Section 15: community-level services, DOH standards, and LGU/academic institution programs.
- Section 16: community-based facilities and required staffing/equipment/medicines.
- Section 17: quarterly LGU reportorial requirements and confidentiality.
- Section 18: six hospital service categories, with the drug-rehabilitation coordination clause kept as subsection (e) and referral system as (f), correcting an apparent duplicate-letter artifact in searchable extracts.
- Section 19: six duties of mental health facilities.
- Sections 20–22: drug screening, suicide prevention/hotlines, and public awareness.

### Fidelity status

This batch is a **working transcription, not a certified verbatim transcription**. Searchable source text and OCR include typos and formatting artifacts (for example, “current evidences” and inconsistent punctuation). Wording has been retained where it appears in searchable text unless an obvious extraction/label issue is contradicted by the scan structure. Exact punctuation, typography, and every word still require a line-by-line comparison with the signed scan and searchable sources.

### Checks performed

- `node --check law.js`: passed.
- `node --check app.js`: passed.
- Runtime data check: Sections 14–22 each appear exactly once; Section 18 has six separately labeled service categories (a)–(f); 10 chapter objects and 47 section entries remain because Sections 47–49 are still combined.
- ZIP integrity check: passed.
- Browser-level offline, search, navigation, and expand/collapse tests remain outstanding.

## Batch update: Sections 23–28 expanded (2026-10-04)

Sections 23–28 in `law.js` have been replaced with fuller working transcriptions, using the signed Official Gazette scan as the primary reference and the Supreme Court E-Library, Senate Legislative Reference Bureau, and Lawphil searchable copies as cross-checks. The signed scan image containing printed pages 20–21 was visually inspected for Sections 23–28; the continuation on printed page 22 was OCR-assisted and checked against the visible scan and searchable text.

### Coverage

- Section 23: integration of mental health into the educational system, with separate subsections (a) and (b).
- Section 24: mental health promotion in educational institutions, including the required complement of mental health professionals.
- Section 25: workplace mental health policies and programs.
- Section 26: capacity building, reorientation, and training.
- Section 27: capacity building of barangay health workers (BHWs).
- Section 28: research collaboration, ethical standards, informed consent, restrictions on recruitment incentives and harmful research, independent ethics committee approval, and research on nonmedical, traditional, or alternative practices.

### Fidelity status and source notes

This remains a working transcription, not a certified diplomatic transcription. The wording was expanded from the shortened summaries and cross-checked against the scan and searchable source text. Exact typography and punctuation still need a final line-by-line audit. OCR is imperfect, especially for punctuation and small words; searchable official/legal copies also contain obvious extraction artifacts. No questionable phrase has been treated as settled solely because an OCR result produced it.

### Checks performed

- `node --check law.js`: passed.
- `node --check app.js`: passed.
- Runtime check: Sections 23–28 each appear once as separate entries; Section 23 contains subsections (a) and (b); Section 28 includes all three paragraphs/paragraph groups visible across printed pages 21–22.
- ZIP integrity check: performed after packaging.
- Browser-level offline, search, navigation, and expand/collapse tests remain outstanding.

## Batch update: Sections 29–38 expanded (2026-10-04)

Sections 29–38 have been expanded from condensed summaries into fuller working transcriptions in `law.js`. The Supreme Court E-Library, Senate Legislative Reference Bureau, and Lawphil searchable copies were consulted as cross-checks. The signed Official Gazette scan remains the primary reference; this batch has not yet received a complete line-by-line audit against each scan.

### Coverage

- Section 29: National Center for Mental Health (NCMH) mandate.
- Section 30: all twelve listed DOH duties, from the national mental health program and facility regulation to human-rights training.
- Section 31: all four CHR duties, including the focal commissioner provision.
- Sections 32–33: CHR investigative-role limitation and complaint/investigation provisions.
- Sections 34–35: duties of DepEd/CHED/TESDA and DOLE/CSC.
- Section 36: DSWD referral, housing/support access, and community resilience duties.
- Section 37: all eight LGU duties.
- Section 38: upgrading local hospitals and health facilities, including provisos on geographic access and national government assistance.

### Fidelity status

This is a working transcription, not a certified verbatim reproduction. The text was drafted against the searchable E-Library and Lawphil/Senate versions and must still be compared word-for-word with the signed Official Gazette scan. OCR/searchable sources contain spelling, punctuation, and extraction artifacts; differences must be resolved against the signed scan rather than silently normalized. Some punctuation and spelling choices in this batch remain provisional.

### Checks performed

- `node --check law.js`: passed.
- `node --check app.js`: passed.
- Runtime data validation: Sections 29–38 each appear exactly once; Section 30 contains subsections (a)–(l), and Section 37 contains (a)–(h). Chapter count and entry count are reported by the validation script in the build check; browser-level offline, search, navigation, and expand/collapse tests remain outstanding.

## Batch update: Sections 39–49 expanded and separated (2026-10-04)

Sections 39–49 were expanded from condensed summaries and Section 47–49 were split into distinct entries. Chapter VIII is Sections 39–42 (Philippine Council for Mental Health); Chapter IX is Section 43 (Mental Health for Drug Dependents); Chapter X is Sections 44–49 (Miscellaneous Provisions). Searchable cross-checks consulted: Supreme Court E-Library, Senate Legislative Reference Bureau, and Lawphil. The signed Official Gazette scan remains the primary authority.

### Coverage

- Sections 39–40: Council mandate and eight duties/functions, including strategic planning, monitoring, policy implementation, interagency coordination, budgeting, and data gathering.
- Section 41: Council composition, government representatives, appointment process, and terms.
- Section 42: DOH Mental Health Division and Council secretariat.
- Section 43: examination for mental health conditions for persons availing of voluntary submission and persons charged under RA 9165.
- Section 44: penalty clause, four enumerated violations, penalties for juridical persons, deportation of alien offenders, and reservation of administrative/civil liability.
- Section 45: initial and succeeding-year appropriations.
- Section 46: IRR issuance within 120 days from effectivity.
- Sections 47, 48, and 49: separated separability, repealing, and effectivity clauses. Section 49 includes the approval/consolidation/signature text present in searchable reproductions.

### Fidelity status and source discrepancies

This is still a working transcription, not a certified verbatim reproduction. Section 44 statutory cross-references and the closing signature/approval block require final line-by-line confirmation against the signed scan. Searchable copies have conflicting OCR/transcription artifacts, including misnumbered references in Section 44, misspellings in Section 42, and OCR errors in Section 49. The current text uses the apparent statutory cross-references (Sections 4(c), 4(e), and 5(b)) and normalizes obvious OCR artifacts, but these choices must be confirmed against the signed page image before claiming verbatim fidelity. The law text remains subject to punctuation and typography review.

### Checks performed

- `node --check law.js`: passed.
- `node --check app.js`: passed.
- Runtime validation: 49 section entries; Sections 1–49 each occur exactly once; no missing or duplicate section numbers; Sections 47, 48, and 49 are separate entries.
- ZIP integrity check: performed after packaging.
- Browser-level offline, search, navigation, and expand/collapse tests remain outstanding.

## Full-Act verification pass — final sections (2026-10-04)

The signed Act scan was visually checked for Sections 39–49 (printed pages 28–33 / scan images covering the final statutory pages), with particular attention to statutory cross-references and the closing approval block.

### Corrections made
- Section 40(e): corrected “substance use disorder” to **“substance use disorders”**, matching the signed Act.
- Section 44(a): retained the signed Act's cross-reference to **Section 13** for the informed-consent exception.
- Section 44(b): corrected the cross-reference to **Section 4(c)** (confidentiality).
- Section 44(c): corrected the cross-reference to **Section 4(e)** (discrimination).
- Section 44(d): corrected the cross-reference to **Section 5(h)** (humane treatment / prohibited cruel, inhumane, harmful or degrading treatment).
- Section 49 closing legislative-history statement: corrected “was passed” to **“was finally passed”**, matching the signed Act.
- Section 49 retains the approval/signature block and the June 20, 2018 presidential approval statement shown on the signed copy.

### Source comparison note
The Supreme Court E-Library, Senate LRB, and Lawphil searchable reproductions contain OCR/transcription artifacts in Section 44, including incorrect section references. The signed scan was used as the controlling source for these corrections. Independent searchable reproductions also support the corrected Section 44 references, particularly Lawphil's Section 5(h) reference and the corresponding legal reproductions. The discrepancy is intentionally documented rather than silently treated as an error-free source. 

### Status
Sections 39–49 have now undergone a visual signed-scan verification pass. This does **not** certify Sections 1–38 as fully line-by-line verified; those earlier sections remain subject to the same final-Act visual audit. Browser-level testing remains separate from legal-text verification.

## Full-Act verification pass — Sections 1–38 (2026-10-04)

The signed Act scan was systematically visually reviewed for the statutory pages containing Sections 1–38 (printed pages 1–27 / scan images page-01 through page-14), using the signed PDF as the controlling source and searchable legal reproductions only as cross-checks. The review focused on wording, small words, statutory references, and punctuation where the scan was legible.

### Corrections made
- Section 3(b): removed the non-source comma in `effective, and efficient, national`; the signed scan reads **`effective, and efficient national`**. The current `law.js` now matches the signed scan.
- Section 4(a): removed the non-source comma in `inability to consistently abstain, impairment`; the signed scan reads **`inability to consistently abstain impairment and behavioral control`**. The current `law.js` matches the signed scan.
- Section 4(g): corrected `on the part of its service user` to **`on the part of a service user`**, matching the signed scan. The current `law.js` matches the signed scan.

### Visual verification notes
- Page 1: Act heading, Chapter I / General Provisions, and Section 1 reviewed.
- Pages 2–4: Sections 2–4 reviewed, including the Definitions entries (a)–(v). Section 4(g) was specifically rechecked at enlarged scale.
- Pages 5–6: Section 5 and the full rights provisions through Section 7 reviewed.
- Pages 7–8: Sections 8–13 reviewed, including the legal-representative hierarchy, supported decision-making, internal review board, and exceptions to informed consent.
- Pages 9–10: Sections 14–22 reviewed.
- Pages 11–12: Sections 23–30 reviewed.
- Pages 13–14: Sections 31–38 reviewed.
- Sections 39–49 had already received a separate signed-scan visual verification pass recorded above.

### Fidelity status
The statutory text in `law.js` has now undergone a full-Act page-level visual audit against the signed scan, with identified transcription discrepancies corrected and documented rather than silently normalized. This is still not a legal certification or guarantee against every typographic distinction in a scanned historical document; the signed scan remains the authority. Browser-level/offline application testing remains outstanding and the app should not yet be called complete.

### Checks performed
- `node --check law.js`: passed.
- `node --check app.js`: passed.
- Runtime validation: 10 chapters; 49 section entries; Sections 1–49 each occur exactly once; no missing or duplicate section numbers; Sections 47, 48, and 49 remain separate.


## Browser/runtime test status — 2026-10-04

A reliable browser-level test was attempted using the installed headless Chromium. The execution environment blocks `file:` and `data:` navigation and also rejects local HTTP navigation from Chromium, so the app could not be exercised in an actual browser context here. This is an environment limitation, not a passing test. The project therefore remains explicitly **browser-test pending**.

Static/runtime checks completed after the text update: `node --check law.js`, `node --check app.js`, complete 49-section data validation, referenced-script/assets validation, and ZIP integrity validation.
