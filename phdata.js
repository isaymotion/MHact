// Philippine data for the MH Act & SDoMH Trainer.
// Every figure below was re-read in its cited source on 6 October 2026. `loc` says where in the source it appears.
// Rule for editors: add a figure only with a source key (PHSRC), a basis (year/method) and a location. Quote the source and year with the number.
window.PHSRC = {
  K: { badge: "Peer-reviewed", short: "Kemp et al. 2022", year: 2022,
    tier: "Peer-reviewed, open access. WHO Special Initiative assessment (data collected Dec 2019 to Mar 2020). Mostly public-sector counts.",
    cite: "Kemp CG, Concepcion T, Ahmed HU, Anwar N, Baingana F, Bennett IM, et al. Baseline situational analysis in Bangladesh, Jordan, Paraguay, the Philippines, Ukraine, and Zimbabwe for the WHO Special Initiative for Mental Health: Universal Health Coverage for Mental Health. PLoS ONE. 2022;17(3):e0265570.",
    url: "https://doi.org/10.1371/journal.pone.0265570" },
  W: { badge: "WHO brief (preliminary)", short: "WHO brief Jan 2020", year: 2020,
    tier: "WHO document dated January 2020, prepared before the final analysis. It contains internal inconsistencies, so only selected items are used.",
    cite: "World Health Organization. Philippines: WHO Special Initiative for Mental Health Situational Assessment [brief report]. January 2020.",
    url: "https://indico.un.org/event/33035/attachments/3509/10957/Philippines_brief_report__2020.01.19_Final.pdf" },
  U: { badge: "Survey release", short: "UPPI 2022 (YAFS5)", year: 2022,
    tier: "Release by the survey investigators (UP Population Institute; study funded by the Department of Health).",
    cite: "University of the Philippines Population Institute (UPPI). Pinoy youth in worse mental shape today, nationwide survey indicates [2021 Young Adult Fertility and Sexuality Study, YAFS5]. Posted 10 October 2022.",
    url: "https://www.uppi.upd.edu.ph/news/2022/pinoy-youth-in-worse-mental-health-shape-today" },
  P1: { badge: "Government statistics", short: "PSA Mar 2021", year: 2021,
    tier: "Official registered-death statistics, preliminary. Counts are revised as late registrations are processed.",
    cite: "Philippine Statistics Authority. Causes of Deaths in the Philippines (Preliminary): January to December 2020. Press release, 16 March 2021 (data as of 26 February 2021).",
    url: "https://psa.gov.ph/system/files/vsd/Press_Release_Cause-of-Death-Statistics_January-2019-to-December-2020_signed.pdf" },
  P2: { badge: "Government statistics", short: "PSA Jun 2021 update", year: 2021,
    tier: "Official registered-death statistics, updated preliminary release. Check for later PSA releases.",
    cite: "Philippine Statistics Authority. Causes of Deaths in the Philippines (Preliminary): January to December 2020 [updated release, data as of 17 June 2021].",
    url: "https://psa.gov.ph/content/causes-deaths-philippines-preliminary-january-december-2020" },
  F: { badge: "News report", short: "Inquirer 2022", year: 2022,
    tier: "Secondary: news report of the UPPI findings. Used only for the sample size.",
    cite: "Philippine Daily Inquirer. 1 of 5 young Filipinos have considered suicide: UP survey. 11 October 2022.",
    url: "https://newsinfo.inquirer.net/?p=1678021" },
  N: { badge: "News report", short: "Inquirer Plus (WHO Atlas 2020)", year: 2023,
    tier: "Secondary: a news feature quoting the WHO Mental Health Atlas 2020. Check the Atlas itself before quoting.",
    cite: "Inquirer Plus. Analyze this: Less than 1 mental health worker per 100K Filipinos. (Quoting WHO Mental Health Atlas 2020.) Published after October 2023.",
    url: "https://plus.inquirer.net/?p=146975" },
  H: { badge: "News report", short: "Inquirer Oct 2022", year: 2022,
    tier: "Secondary: news report listing crisis-line numbers as of its date. Numbers change.",
    cite: "Philippine Daily Inquirer. Pandemic fuels suicidal thoughts in youth. 15 October 2022 (editor's note listing NCMH crisis hotlines).",
    url: "https://newsinfo.inquirer.net/1680162/pandemic-fuels-suicidal-thoughts-in-youth/amp" }
};

window.PHDATA = [
  // ---- Burden (GBD estimates tabulated by Kemp et al.) ----
  { id: "b-mdd", g: "Burden of disorders (GBD estimates)", label: "Major depressive disorder: prevalence", value: "1.4%", detail: "Female 1.6%, male 1.2%. Women have the higher prevalence.", basis: "Global Burden of Disease estimate (2019 round per the paper's methods)", loc: "Table 3", s: "K", act: "Sec. 14" },
  { id: "b-sz", g: "Burden of disorders (GBD estimates)", label: "Schizophrenia: prevalence", value: "0.3%", detail: "Female 0.3%.", basis: "GBD estimate", loc: "Table 3", s: "K" },
  { id: "b-bp", g: "Burden of disorders (GBD estimates)", label: "Bipolar disorder: prevalence", value: "0.3%", detail: "Female 0.3%, male 0.3%.", basis: "GBD estimate", loc: "Table 3", s: "K" },
  { id: "b-ep", g: "Burden of disorders (GBD estimates)", label: "Epilepsy: prevalence", value: "0.3%", detail: "", basis: "GBD estimate", loc: "Table 3", s: "K" },
  { id: "b-aud", g: "Burden of disorders (GBD estimates)", label: "Alcohol abuse (table label): prevalence", value: "0.8%", detail: "Female 0.3%, male 1.3%, ages 20-29 1.2%. Men carry the higher burden.", basis: "GBD estimate", loc: "Table 3", s: "K", act: "Secs. 20, 43" },
  { id: "b-dud", g: "Burden of disorders (GBD estimates)", label: "Drug abuse (table label): prevalence", value: "0.6%", detail: "Female 0.5%, male 0.7%, ages 20-29 1.6%. Treatment coverage was not reported.", basis: "GBD estimate", loc: "Table 3", s: "K", act: "Secs. 20, 43" },

  // ---- Treatment coverage ----
  { id: "t-sz", g: "Treatment coverage (rough estimates)", label: "Schizophrenia: share of estimated cases treated", value: "19.0%", cov: 19.0, detail: "Counts of patients treated in 2019 (routine health information systems, mainly public sector) divided by GBD estimates. Private-sector care is mostly not counted, so true coverage may be higher.", basis: "2019 treated counts / GBD 2019 estimate", loc: "Table 3 and Results text", s: "K", act: "Secs. 15, 16, 18, 38" },
  { id: "t-bp", g: "Treatment coverage (rough estimates)", label: "Bipolar disorder: share treated", value: "5.0%", cov: 5.0, detail: "Same method and limits as above.", basis: "2019 treated counts / GBD 2019 estimate", loc: "Table 3", s: "K" },
  { id: "t-mdd", g: "Treatment coverage (rough estimates)", label: "Depression (MDD): share treated", value: "1.0%", cov: 1.0, detail: "Same method and limits as above.", basis: "2019 treated counts / GBD 2019 estimate", loc: "Table 3", s: "K" },
  { id: "t-ep", g: "Treatment coverage (rough estimates)", label: "Epilepsy: share treated", value: "1.0%", cov: 1.0, detail: "Same method and limits as above.", basis: "2019 treated counts / GBD 2019 estimate", loc: "Table 3", s: "K" },
  { id: "t-al", g: "Treatment coverage (rough estimates)", label: "Alcohol abuse: share treated", value: "1.0%", cov: 1.0, detail: "Same method and limits as above.", basis: "2019 treated counts / GBD 2019 estimate", loc: "Table 3", s: "K" },

  // ---- Suicide: estimates that do not match ----
  { id: "su-gbd17", g: "Suicide: counts and rates that do not match", label: "Suicide death rate, GBD 2017 estimate", value: "5.4 per 100,000", detail: "About 5,570 deaths per year. Female 2.5, male 8.2 per 100,000.", basis: "GBD 2017 estimate", loc: "Prevalence and Coverage table", s: "W", act: "Sec. 21" },
  { id: "su-gbd19", g: "Suicide: counts and rates that do not match", label: "Suicide death rate, GBD estimate in the 2022 paper", value: "4.1 per 100,000", detail: "Female 1.5, male 6.5. Ages 15-19: 3.6; 20-29: 7.0; 70+: 4.0 per 100,000. The paper's methods describe GBD 2019 as the source.", basis: "GBD estimate", loc: "Table 3", s: "K", act: "Sec. 21" },
  { id: "su-psa1", g: "Suicide: counts and rates that do not match", label: "Registered intentional self-harm deaths, 2020 (March 2021 release)", value: "3,529", detail: "Up 25.7% from 2,808 in 2019. Ranked the 27th leading cause of death.", basis: "PSA registered deaths, preliminary, data as of 26 Feb 2021", loc: "Press release text", s: "P1", act: "Sec. 21" },
  { id: "su-psa2", g: "Suicide: counts and rates that do not match", label: "Registered intentional self-harm deaths, 2020 (June 2021 update)", value: "4,420", detail: "Up 57.3% from about 2,810 in 2019. Ranked 25th. About 900 more than the March count, because late registrations were processed. Always cite the release date, and check for the latest PSA release.", basis: "PSA registered deaths, preliminary, data as of 17 June 2021", loc: "Press release text", s: "P2", act: "Sec. 21" },

  // ---- Young people ----
  { id: "y-att", g: "Young people aged 15-24 (YAFS5)", label: "Ever tried to end their life, 2021", value: "7.5%", detail: "Almost 1.5 million youth, compared with 3% (more than 574,000) in 2013.", basis: "YAFS5 2021 national survey", loc: "Release, paragraph 4", s: "U", act: "Secs. 21, 24" },
  { id: "y-ide", g: "Young people aged 15-24 (YAFS5)", label: "Ever considered ending their life, 2021", value: "Close to 1 in 5", detail: "Suicide ideation and attempt both more than doubled between 2013 and 2021. Percentages among female youth are about twice those among male youth. This reverses the 2002-2013 trend.", basis: "YAFS5 2021", loc: "Release, paragraphs 1-3", s: "U" },
  { id: "y-reach", g: "Young people aged 15-24 (YAFS5)", label: "Youth with suicidal thoughts who told no one", value: "6 in 10", detail: "Six in 10 of those who ever thought of suicide did not reach out to anyone.", basis: "YAFS5 2021", loc: "Release, paragraph 5", s: "U" },
  { id: "y-peer", g: "Young people aged 15-24 (YAFS5)", label: "Whom ideators turned to", value: "25% friends or peers", detail: "Parents or guardians 7%, other relatives 5% (of those with suicide ideation).", basis: "YAFS5 2021", loc: "Release, paragraph 5", s: "U" },
  { id: "y-help", g: "Young people aged 15-24 (YAFS5)", label: "Sought professional help among those who acted on suicidal thoughts", value: "4%", detail: "Only about 1 in 10 young adults is aware of any suicide prevention program or service.", basis: "YAFS5 2021", loc: "Release, paragraph 5", s: "U", act: "Secs. 21, 22" },
  { id: "y-n", g: "Young people aged 15-24 (YAFS5)", label: "Survey sample", value: "10,949 youth", detail: "Randomly selected youth aged 15-24; the 2021 round was collected during the COVID-19 pandemic. Sample size as reported by the news source, not the release.", basis: "YAFS5 2021", loc: "News report, paragraph 5", s: "F" },

  // ---- Workforce ----
  { id: "w-psy", g: "Workforce (mostly public sector)", label: "Psychiatrists", value: "548 (0.5 per 100,000)", detail: "Almost all remaining specialists worked in Manila, leaving many provinces with no mental health specialists. The country trains many specialists but loses workers to high-income countries.", basis: "2019-2020 counts, population 106.7 million", loc: "Table 4 and Results text", s: "K", act: "Secs. 26, 27, 38" },
  { id: "w-neu", g: "Workforce (mostly public sector)", label: "Neurologists", value: "483 (0.5 per 100,000)", detail: "", basis: "As above", loc: "Table 4", s: "K" },
  { id: "w-pn", g: "Workforce (mostly public sector)", label: "Psychiatric nurses", value: "516 (0.5 per 100,000)", detail: "", basis: "As above", loc: "Table 4", s: "K" },
  { id: "w-psyc", g: "Workforce (mostly public sector)", label: "Psychologists", value: "133 (0.1 per 100,000)", detail: "", basis: "As above", loc: "Table 4", s: "K" },
  { id: "w-sw", g: "Workforce (mostly public sector)", label: "Mental health social workers", value: "1,241 (1.2 per 100,000)", detail: "Social workers in the health system were more plentiful here than in most comparison countries.", basis: "As above", loc: "Table 4 and Results text", s: "K", act: "Sec. 36" },
  { id: "w-gen", g: "Workforce (mostly public sector)", label: "Generalist doctors and nurses working in institutions", value: "40,775 doctors; 90,308 nurses", detail: "38.2 and 84.7 per 100,000. Counts are numbers in institutions. The base for task-sharing and mhGAP-style care.", basis: "As above", loc: "Table 4", s: "K", act: "Sec. 27" },

  // ---- Facilities ----
  { id: "f-hosp", g: "Facilities", label: "Specialist mental hospitals", value: "4", detail: "4,373 beds (4.1 per 100,000, per the table). Also 46 general-hospital psychiatric units, 63 residential care facilities and 29 hospital-based outpatient facilities.", basis: "2019-2020 counts", loc: "Table 4", s: "K", act: "Sec. 18" },
  { id: "f-comm", g: "Facilities", label: "Community-based outpatient facilities", value: "1,362 (1.3 per 100,000)", detail: "No child and adolescent specialty facilities were reported for the Philippines, and the paper states that all six countries lacked them.", basis: "2019-2020 counts", loc: "Table 4 and Results text", s: "K", act: "Secs. 16, 38" },
  { id: "f-ground", g: "Facilities", label: "What five visited facilities had on the ground", value: "Large hospital vs municipal office", detail: "The national mental hospital reported 68 psychiatrists, 409 psychiatric nurses and 4,200 beds. Two municipal health offices had no mental health specialists and only risperidone and phenytoin (one offered risperidone alone); a drug recovery clinic had no funding for medication. A convenience sample of five facilities, not representative.", basis: "Early 2020 facility checklists", loc: "Table 5", s: "K", act: "Secs. 15, 16" },

  // ---- Financing and system ----
  { id: "fin-pc", g: "Financing and system", label: "Public spending on mental health per capita", value: "US$0.47", detail: "Reported in both the peer-reviewed paper and the WHO brief.", basis: "Reported spending, c. 2019", loc: "Table 2", s: "K", act: "Sec. 45" },
  { id: "fin-share", g: "Financing and system", label: "Mental health share of the health budget", value: "2.56%", detail: "As stated in the WHO brief (listed as a strength). A later WHO analysis may give a slightly different figure.", basis: "WHO brief, January 2020", loc: "Overview, Strengths", s: "W", act: "Sec. 30(f)" },
  { id: "fin-lgu", g: "Financing and system", label: "Who decides most health spending", value: "Local government units", detail: "Decision-making for most healthcare spending moved from the national level to LGUs, which is why LGU mental health plans matter.", basis: "Assessment text", loc: "Cross-cutting themes", s: "K", act: "Sec. 37" },
  { id: "sys-irr", g: "Financing and system", label: "RA 11036 implementation timeline", value: "IRR issued January 2019", detail: "The Mental Health Act is 2018; implementing rules and regulations were issued January 2019. The National Mental Health Strategic Framework 2019-2023 was rolled out to all 17 regions.", basis: "WHO brief", loc: "Policies and Plans", s: "W", act: "Sec. 46" },
  { id: "sys-mhgap", g: "Financing and system", label: "LGUs with at least one mhGAP-trained staff member", value: "1,134 LGUs", detail: "As of December 2019, at least one mhGAP-trained provider could be consulted in each of the 80 provinces. The paper notes uptake and supervision after mhGAP training were limited.", basis: "As of December 2019", loc: "Services table (brief); Results (paper)", s: "W", act: "Secs. 15, 27" },
  { id: "sys-med", g: "Financing and system", label: "Accredited medicine-access sites with medicines in stock", value: "103 of 133 (77%)", detail: "Out-of-stock medicines in health centers were attributed to DOH IT capacity and manual reporting in many RHUs.", basis: "As of 2019-2020", loc: "Medication summary", s: "W", act: "Sec. 30" },
  { id: "sys-barr", g: "Financing and system", label: "Barriers to care named by the WHO team", value: "Cost, workforce, stigma", detail: "Lack of insurance coverage for outpatient services, a limited mental health workforce, and cultural factors including shame, stigma and collectivist beliefs that discourage use of care.", basis: "WHO brief, challenges", loc: "Overview, Challenges", s: "W", act: "Secs. 5, 30(f)" },

  // ---- Social context ----
  { id: "c-rural", g: "Social context", label: "Rural population", value: "53%", detail: "Context for access barriers. Under 14 years: 31%; over 65 years: 6%.", basis: "UN and World Bank estimates cited by the paper", loc: "Table 1", s: "K" },
  { id: "c-edu", g: "Social context", label: "Completed primary school", value: "72%", detail: "From the 2017 National Demographic and Health Survey, as cited. Literacy was reported as 98%.", basis: "NDHS 2017, cited in the paper", loc: "Table 1", s: "K" },
  { id: "c-gdp", g: "Social context", label: "GDP per capita", value: "US$2,989", detail: "Lower-middle-income country. Life expectancy at birth 71 years.", basis: "World Bank, as cited", loc: "Table 1", s: "K" },
  { id: "c-cyc", g: "Social context", label: "Cyclones each year", value: "19-20 (7-9 make landfall)", detail: "Rising sea level and repeated cyclones affect families. Relevant to disaster mental health and psychosocial support.", basis: "Assessment text", loc: "Results, socioeconomic context", s: "K", act: "Sec. 36" },

  // ---- Crisis line ----
  { id: "h-1553", g: "Crisis line", label: "NCMH crisis hotline", value: "1553", detail: "Luzon-wide landline, toll-free, as listed in an October 2022 report. Mobile numbers listed then may have changed, so verify the current numbers on the DOH and NCMH websites before printing or teaching them. Sec. 21 requires 24/7 hotlines.", basis: "As listed October 2022", loc: "Editor's note", s: "H", act: "Sec. 21" },

  // ---- Why numbers differ ----
  { id: "d-psy", g: "Why numbers differ", label: "How many psychiatrists? Three sources, three answers", value: "About 240 to 551", detail: "The 2022 paper counts 548 (0.5 per 100,000). The WHO January 2020 brief lists 551 (0.52 per 100,000) and 932 psychologists, where the paper counts 133. A news feature quoting the WHO Atlas 2020 reports over 240 psychiatrists and 1,821 mental health professionals in total. Differences come from year, public versus all sectors, and who is counted. State the source, year and scope.", basis: "Compared across sources", loc: "K Table 4; W services table; N", s: "K", also: ["W", "N"], act: "Sec. 17" },
  { id: "d-cov", g: "Why numbers differ", label: "How many people with depression are treated? Two WHO figures", value: "1.0% vs 0.003%", detail: "The 2022 paper reports 1.0% treatment coverage for MDD. The preliminary January 2020 brief lists 0.003% for the same indicator, and its table has internal inconsistencies. Prefer the peer-reviewed, later source, and say that coverage counts are rough and mostly public sector.", basis: "Compared across sources", loc: "K Table 3; W Prevalence and Coverage table", s: "K", also: ["W"] }
];

// Related Philippine data shown inside the Determinants tab (key = determinant name in sdoh.js).
window.PH_LINKS = {
  "Poverty and income": ["c-gdp", "c-rural", "fin-pc"],
  "Education": ["c-edu", "y-help"],
  "Gender and violence": ["b-mdd", "su-gbd19"],
  "Housing and built environment": ["c-cyc"],
  "Access to health care and services": ["t-mdd", "t-sz", "w-psy", "f-comm", "f-ground", "sys-barr"],
  "Alcohol and substance use": ["b-aud", "b-dud"],
  "Discrimination, stigma and human rights": ["sys-barr", "y-help", "y-reach"],
  "Conflict, disasters and displacement": ["c-cyc"],
  "Country-level policy and governance": ["fin-pc", "fin-share", "fin-lgu", "sys-mhgap"]
};

// Data-literacy questions (the Quiz tab supports select-all and shuffles every time).
window.DATA.quiz.push(
  { t: "Philippine data", q: "In the 2022 WHO Special Initiative paper, roughly what share of estimated schizophrenia cases in the Philippines were treated?",
    o: ["About 19%", "About 2%", "About 49%", "About 90%"], a: 0,
    e: "Kemp et al. (2022), Table 3: 19.0% for schizophrenia, versus 1.0% for depression and 5.0% for bipolar disorder. Treated counts come mainly from public-sector information systems divided by GBD estimates, so they are rough." },
  { t: "Philippine data", q: "YAFS5 (2021) found what percentage of youth aged 15-24 had ever tried to end their life?",
    o: ["3%", "7.5%", "15%", "25%"], a: 1,
    e: "UPPI (2022): 7.5%, almost 1.5 million, up from 3% in 2013. Close to 1 in 5 had considered it. Only 4% of those who acted sought professional help." },
  { t: "Philippine data", type: "multi", q: "Which are valid reasons why two sources can report different numbers for the same indicator? Select all that apply.",
    o: ["A different estimation round or year (for example GBD 2017 versus 2019)", "Registered counts are revised as late registrations arrive", "One source counts only public-sector services and another counts all sectors", "Whoever published later is always right", "Different definitions of who counts as a mental health worker"],
    a: [0, 1, 2, 4],
    e: "All four of these affect the Philippine figures in this app. Being later or official does not by itself make a figure correct, so always cite the source, year and scope." },
  { t: "Philippine data", q: "The PSA reported 3,529 registered intentional self-harm deaths for 2020 in March 2021 and 4,420 in June 2021. What is the best explanation and practice?",
    o: ["Preliminary counts rise as late registrations are processed; cite the release date and use the latest release", "The March figure was a calculation error and should be ignored", "The definition of suicide was widened between releases", "The date does not matter as long as the number is official"], a: 0,
    e: "PSA preliminary counts for 2020 rose from 3,529 (data as of 26 February 2021) to 4,420 (as of 17 June 2021). Cite the release date and check for newer PSA data." },
  { t: "Philippine data", q: "Which statement about psychiatrists in the Philippines is best supported by the WHO assessment?",
    o: ["About 548 psychiatrists (0.5 per 100,000), mostly in Manila, so many provinces have none", "More than 5,000 psychiatrists, evenly spread", "Psychiatrists work only at the National Center for Mental Health", "One psychiatrist per 10,000 people in every province"], a: 0,
    e: "Kemp et al. (2022), Table 4 and Results text. Other sources give different counts (for example 551 in the WHO brief), which is why the source and year matter." },
  { t: "Philippine data", q: "What public spending on mental health per capita did the WHO assessment report?",
    o: ["US$0.47", "US$4.70", "US$47", "US$0.047"], a: 0,
    e: "US$0.47 per capita appears in both the peer-reviewed paper and the WHO brief. The brief also lists mental health at 2.56% of the health budget." }
);
