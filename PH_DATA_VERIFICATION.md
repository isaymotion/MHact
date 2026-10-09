# Philippine data: verification log

Every figure in `phdata.js` was re-read in the cited source on **6 October 2026**. `Where` says where it appears. Re-verify before any formal use, and update this log when a figure changes.

Corrections made during verification (figures in an earlier unpublished draft that did not survive checking):
- Depression prevalence 1.1% and coverage 0.8% (GBD 2017 draft) were replaced by 1.4% and 1.0% from the peer-reviewed paper (GBD 2019 round).
- Suicide registered count 3,529 is the March 2021 preliminary PSA figure; the June 2021 PSA update is 4,420.
- Removed because they could not be re-verified: 2.65% budget share, 24.4% spousal violence, 11 million overseas workers, and news-quoted hotline call counts.
- Corrected the UPPI release title.

## Sources

- **K** (Peer-reviewed): Kemp CG, Concepcion T, Ahmed HU, Anwar N, Baingana F, Bennett IM, et al. Baseline situational analysis in Bangladesh, Jordan, Paraguay, the Philippines, Ukraine, and Zimbabwe for the WHO Special Initiative for Mental Health: Universal Health Coverage for Mental Health. PLoS ONE. 2022;17(3):e0265570. <https://doi.org/10.1371/journal.pone.0265570>
  - Peer-reviewed, open access. WHO Special Initiative assessment (data collected Dec 2019 to Mar 2020). Mostly public-sector counts.
- **W** (WHO brief (preliminary)): World Health Organization. Philippines: WHO Special Initiative for Mental Health Situational Assessment [brief report]. January 2020. <https://indico.un.org/event/33035/attachments/3509/10957/Philippines_brief_report__2020.01.19_Final.pdf>
  - WHO document dated January 2020, prepared before the final analysis. It contains internal inconsistencies, so only selected items are used.
- **U** (Survey release): University of the Philippines Population Institute (UPPI). Pinoy youth in worse mental shape today, nationwide survey indicates [2021 Young Adult Fertility and Sexuality Study, YAFS5]. Posted 10 October 2022. <https://www.uppi.upd.edu.ph/news/2022/pinoy-youth-in-worse-mental-health-shape-today>
  - Release by the survey investigators (UP Population Institute; study funded by the Department of Health).
- **P1** (Government statistics): Philippine Statistics Authority. Causes of Deaths in the Philippines (Preliminary): January to December 2020. Press release, 16 March 2021 (data as of 26 February 2021). <https://psa.gov.ph/system/files/vsd/Press_Release_Cause-of-Death-Statistics_January-2019-to-December-2020_signed.pdf>
  - Official registered-death statistics, preliminary. Counts are revised as late registrations are processed.
- **P2** (Government statistics): Philippine Statistics Authority. Causes of Deaths in the Philippines (Preliminary): January to December 2020 [updated release, data as of 17 June 2021]. <https://psa.gov.ph/content/causes-deaths-philippines-preliminary-january-december-2020>
  - Official registered-death statistics, updated preliminary release. Check for later PSA releases.
- **F** (News report): Philippine Daily Inquirer. 1 of 5 young Filipinos have considered suicide: UP survey. 11 October 2022. <https://newsinfo.inquirer.net/?p=1678021>
  - Secondary: news report of the UPPI findings. Used only for the sample size.
- **N** (News report): Inquirer Plus. Analyze this: Less than 1 mental health worker per 100K Filipinos. (Quoting WHO Mental Health Atlas 2020.) Published after October 2023. <https://plus.inquirer.net/?p=146975>
  - Secondary: a news feature quoting the WHO Mental Health Atlas 2020. Check the Atlas itself before quoting.
- **H** (News report): Philippine Daily Inquirer. Pandemic fuels suicidal thoughts in youth. 15 October 2022 (editor's note listing NCMH crisis hotlines). <https://newsinfo.inquirer.net/1680162/pandemic-fuels-suicidal-thoughts-in-youth/amp>
  - Secondary: news report listing crisis-line numbers as of its date. Numbers change.

## Figures

| ID | Figure | Value | Source | Where | Basis |
|---|---|---|---|---|---|
| b-mdd | Major depressive disorder: prevalence | 1.4% | K | Table 3 | Global Burden of Disease estimate (2019 round per the paper's methods) |
| b-sz | Schizophrenia: prevalence | 0.3% | K | Table 3 | GBD estimate |
| b-bp | Bipolar disorder: prevalence | 0.3% | K | Table 3 | GBD estimate |
| b-ep | Epilepsy: prevalence | 0.3% | K | Table 3 | GBD estimate |
| b-aud | Alcohol abuse (table label): prevalence | 0.8% | K | Table 3 | GBD estimate |
| b-dud | Drug abuse (table label): prevalence | 0.6% | K | Table 3 | GBD estimate |
| t-sz | Schizophrenia: share of estimated cases treated | 19.0% | K | Table 3 and Results text | 2019 treated counts / GBD 2019 estimate |
| t-bp | Bipolar disorder: share treated | 5.0% | K | Table 3 | 2019 treated counts / GBD 2019 estimate |
| t-mdd | Depression (MDD): share treated | 1.0% | K | Table 3 | 2019 treated counts / GBD 2019 estimate |
| t-ep | Epilepsy: share treated | 1.0% | K | Table 3 | 2019 treated counts / GBD 2019 estimate |
| t-al | Alcohol abuse: share treated | 1.0% | K | Table 3 | 2019 treated counts / GBD 2019 estimate |
| su-gbd17 | Suicide death rate, GBD 2017 estimate | 5.4 per 100,000 | W | Prevalence and Coverage table | GBD 2017 estimate |
| su-gbd19 | Suicide death rate, GBD estimate in the 2022 paper | 4.1 per 100,000 | K | Table 3 | GBD estimate |
| su-psa1 | Registered intentional self-harm deaths, 2020 (March 2021 release) | 3,529 | P1 | Press release text | PSA registered deaths, preliminary, data as of 26 Feb 2021 |
| su-psa2 | Registered intentional self-harm deaths, 2020 (June 2021 update) | 4,420 | P2 | Press release text | PSA registered deaths, preliminary, data as of 17 June 2021 |
| y-att | Ever tried to end their life, 2021 | 7.5% | U | Release, paragraph 4 | YAFS5 2021 national survey |
| y-ide | Ever considered ending their life, 2021 | Close to 1 in 5 | U | Release, paragraphs 1-3 | YAFS5 2021 |
| y-reach | Youth with suicidal thoughts who told no one | 6 in 10 | U | Release, paragraph 5 | YAFS5 2021 |
| y-peer | Whom ideators turned to | 25% friends or peers | U | Release, paragraph 5 | YAFS5 2021 |
| y-help | Sought professional help among those who acted on suicidal thoughts | 4% | U | Release, paragraph 5 | YAFS5 2021 |
| y-n | Survey sample | 10,949 youth | F | News report, paragraph 5 | YAFS5 2021 |
| w-psy | Psychiatrists | 548 (0.5 per 100,000) | K | Table 4 and Results text | 2019-2020 counts, population 106.7 million |
| w-neu | Neurologists | 483 (0.5 per 100,000) | K | Table 4 | As above |
| w-pn | Psychiatric nurses | 516 (0.5 per 100,000) | K | Table 4 | As above |
| w-psyc | Psychologists | 133 (0.1 per 100,000) | K | Table 4 | As above |
| w-sw | Mental health social workers | 1,241 (1.2 per 100,000) | K | Table 4 and Results text | As above |
| w-gen | Generalist doctors and nurses working in institutions | 40,775 doctors; 90,308 nurses | K | Table 4 | As above |
| f-hosp | Specialist mental hospitals | 4 | K | Table 4 | 2019-2020 counts |
| f-comm | Community-based outpatient facilities | 1,362 (1.3 per 100,000) | K | Table 4 and Results text | 2019-2020 counts |
| f-ground | What five visited facilities had on the ground | Large hospital vs municipal office | K | Table 5 | Early 2020 facility checklists |
| fin-pc | Public spending on mental health per capita | US$0.47 | K | Table 2 | Reported spending, c. 2019 |
| fin-share | Mental health share of the health budget | 2.56% | W | Overview, Strengths | WHO brief, January 2020 |
| fin-lgu | Who decides most health spending | Local government units | K | Cross-cutting themes | Assessment text |
| sys-irr | RA 11036 implementation timeline | IRR issued January 2019 | W | Policies and Plans | WHO brief |
| sys-mhgap | LGUs with at least one mhGAP-trained staff member | 1,134 LGUs | W | Services table (brief); Results (paper) | As of December 2019 |
| sys-med | Accredited medicine-access sites with medicines in stock | 103 of 133 (77%) | W | Medication summary | As of 2019-2020 |
| sys-barr | Barriers to care named by the WHO team | Cost, workforce, stigma | W | Overview, Challenges | WHO brief, challenges |
| c-rural | Rural population | 53% | K | Table 1 | UN and World Bank estimates cited by the paper |
| c-edu | Completed primary school | 72% | K | Table 1 | NDHS 2017, cited in the paper |
| c-gdp | GDP per capita | US$2,989 | K | Table 1 | World Bank, as cited |
| c-cyc | Cyclones each year | 19-20 (7-9 make landfall) | K | Results, socioeconomic context | Assessment text |
| h-1553 | NCMH crisis hotline | 1553 | H | Editor's note | As listed October 2022 |
| d-psy | How many psychiatrists? Three sources, three answers | About 240 to 551 | K | K Table 4; W services table; N | Compared across sources |
| d-cov | How many people with depression are treated? Two WHO figures | 1.0% vs 0.003% | K | K Table 3; W Prevalence and Coverage table | Compared across sources |
