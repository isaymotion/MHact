// Phase 1 scoring redesign: content layer. Loaded after the data files and before app.js.
// - Appends plausible distractors in the same register as the correct answers (existing indices/ids never change,
//   so saved progress stays valid).
// - Adds select-all quiz questions with varying numbers of correct answers.
// - Adds a "partly appropriate" tier (score 1) and a few second strong answers to the SDoMH decisions.
// Fictional scenarios; educational interpretations only. Check the Act, current IRR and local protocols.
(function () {
  const W = window, Q = W.DATA.quiz;

  /* ---------- Quiz: extra single-choice distractors (appended, so answer indices are unchanged) ---------- */
  const addQ = (i, opt) => Q[i].o.push(opt);
  addQ(0, "Presumed to lack capacity whenever a psychotic disorder is diagnosed");
  addQ(1, "Understanding the nature of the proposed treatment, including possible side effects");
  addQ(2, "Only when the patient is an inpatient");
  addQ(3, "Within 30 days, then every 30 days");
  addQ(4, "Strict accordance with approved guidelines that set clear criteria for starting and ending the intervention");
  addQ(5, "Non-minor children");
  addQ(6, "72 hours");
  addQ(7, "Witnessed by two relatives");
  addQ(8, "Only if the mother is informed first");
  addQ(9, "Five");
  addQ(10, "A fine of P10,000 to P200,000 only, with no imprisonment");
  addQ(11, "Sec. 15");
  addQ(12, "Only the number of beds occupied");
  addQ(13, "About 40% found a link, with no gradient");
  addQ(14, "Debt predicted disorder only before adjusting for income");
  addQ(15, "Higher spending in the richest regions");
  addQ(16, "About 5% antenatal, 8% postnatal");
  addQ(17, "The report limits its recommendations to children under five");

  /* ---------- Quiz: select-all questions (a = array of correct indices; variable number correct) ---------- */
  Q.push(
    { t: "Confidentiality", type: "multi",
      q: "Which of these are exceptions to confidentiality listed in Sec. 5(l)? Select all that apply.",
      o: ["Disclosure required by law or a court of competent jurisdiction", "The service user has expressed consent", "A life-threatening emergency where disclosure is necessary to prevent harm", "A spouse asks for the diagnosis while the patient has capacity and objects", "An employer asks whether the patient is fit to return", "A minor is reasonably believed to be a victim of child abuse"],
      a: [0, 1, 2, 5],
      e: "Sec. 5(l)(1)-(5) lists five exceptions: law or court order, the user's consent, a life-threatening emergency, suspected child abuse of a minor, and a case against a professional or worker (to the extent necessary). Relatives and employers have no automatic right of access." },
    { t: "Capacity", type: "multi",
      q: "Which of these are among the four inabilities that define impairment or temporary loss of decision-making capacity (Sec. 4g)? Select all that apply.",
      o: ["Understand information about the nature of a mental health condition", "Understand the consequences of one's decisions for one's own or others' life or health", "Understand the nature of the proposed treatment, including effects and side effects", "Effectively communicate consent or information about one's own condition", "Agree with the clinician's recommendation", "Hold a diagnosis of a psychotic disorder"],
      a: [0, 1, 2, 3],
      e: "Capacity is about understanding and communicating, assessed by a mental health professional. Disagreeing with advice or having a diagnosis is not itself impairment, and everyone is presumed to have legal capacity (Sec. 8)." },
    { t: "Involuntary care", type: "multi",
      q: "Which of these are required safeguards for treatment, restraint or confinement without consent under Sec. 13? Select all that apply.",
      o: ["Follow any advance directive unless doing so poses immediate risk of serious harm", "Only as necessary and only while the emergency or impairment lasts", "Order by the attending mental health professional with IRB review within 15 days, then every 15 days", "Written consent of a relative", "Prior approval by a court for every order", "Approved guidelines with clear criteria, full documentation and IRB audit"],
      a: [0, 1, 2, 5],
      e: "Sec. 13(a)-(d). Family agreement does not replace the safeguards, and the Act does not require a court order before each intervention." },
    { t: "Representation", type: "multi",
      q: "Who appears in the Act's default order of legal representatives when none was designated (Sec. 10c)? Select all that apply.",
      o: ["The spouse, unless permanently separated by a court decree or abandonment", "Non-minor children", "Either parent by mutual consent, if the user is a minor", "The user's eldest sibling", "The barangay captain", "The chief, administrator or medical director of the facility", "A person appointed by a court"],
      a: [0, 1, 2, 5, 6],
      e: "Sec. 10(c)(1)-(5). Siblings and barangay officials are not in the list." },
    { t: "Penalties", type: "multi",
      q: "Which of these acts does Sec. 44 penalize? Select all that apply.",
      o: ["Failure to secure informed consent outside the Sec. 13 exceptions", "Violation of confidentiality of information", "Discrimination against a person with a mental health condition", "Administering inhumane, cruel, degrading or harmful treatment not based on evidence", "Failing to explain rights within 24 hours of admission", "Not having a drug screening capability in a local facility"],
      a: [0, 1, 2, 3],
      e: "Sec. 44(a)-(d). The 24-hour rights information duty (Sec. 5s) and drug screening capability (Sec. 20) are duties under the Act but are not among the four penalized acts." },
    { t: "Supported decisions", type: "multi",
      q: "Which statements about supporters under Sec. 11 are true? Select all that apply.",
      o: ["A service user may designate up to three supporters", "The legal representative may be one of the supporters", "Supporters may be present at appointments and consultations", "Supporters may access the user's medical information", "Supporters make the final decision when the user disagrees"],
      a: [0, 1, 2, 3],
      e: "Sec. 11. Supported decision making assists a person who is not affected by impairment; the decision stays with the person." },
    { t: "Social determinants", type: "multi",
      q: "Which of these are linked to higher risk of common mental disorders in the WHO report? Select all that apply.",
      o: ["Low income or socioeconomic position", "Debt", "Unemployment and poor-quality work", "Low educational attainment", "Social isolation in older age", "Owning a mobile phone", "Month of birth"],
      a: [0, 1, 2, 3, 4],
      e: "WHO & Calouste Gulbenkian Foundation (2014) describes a gradient with income and links to debt, unemployment, low education and, for older people, social isolation." },
    { t: "Social determinants", type: "multi",
      q: "Which two ideas together make up proportionate universalism?",
      o: ["Actions are universal across the whole population", "Intensity is scaled to the level of disadvantage", "Services are limited to the poorest group", "Every group receives exactly the same intensity"],
      a: [0, 1],
      e: "WHO & Gulbenkian (2014), p. 39: focusing solely on the most disadvantaged will not flatten the social gradient; actions should be universal yet proportionate to need." },
    { t: "Rights", q: "Which right does Sec. 5(g) describe?",
      o: ["Access to psychosocial care and clinical treatment in the least restrictive environment and manner", "Access to clinical records unless disclosure would harm the user", "Information about rights within 24 hours of admission", "Participation in policy planning and research"],
      a: 0,
      e: "Sec. 5(g). Compare Sec. 5(r) (records), 5(s) (rights information) and 5(k) (participation)." }
  );

  /* ---------- Pathways: one plausible but flawed (partially appropriate) option per decision ---------- */
  const P = id => W.MHA_PATHWAYS.find(p => p.id === id).nodes;
  const addP = (id, n, choice) => P(id)[n].choices.push(choice);
  const adv = (c, l, s) => ({ clinical: c, legal: l, safeguards: s });

  addP("admission-refusal", 0, { rating: "incomplete", label: "Explain the recommendation clearly, accept the refusal if the patient appears to understand, and discharge with an outpatient appointment, without assessing immediate safety or decision-making capacity.", why: "Respecting a capacitous refusal is right, but the facts describe severe symptoms. The team still needs to assess immediate risk and capacity, explore alternatives and document before concluding.", refs: ["5", "8", "14"] });
  addP("admission-refusal", 1, { rating: "incomplete", label: "Document that an emergency exists and begin involuntary treatment, planning to check for an advance directive and notify the IRB once the patient has settled.", why: "Documenting the emergency is necessary, but the Sec. 13 safeguards shape how treatment is applied. Checking any advance directive and limiting scope and duration cannot wait until after the intervention starts, and the 15-day IRB review is a later step, not a substitute.", refs: ["9", "13", "19"] });
  addP("admission-refusal", 2, { rating: "incomplete", label: "Agree to the voluntary plan and arrange transport and follow-up, but skip a fresh risk and capacity reassessment because the patient now seems cooperative.", why: "Moving to a voluntary, less restrictive plan is right. Cooperation does not replace a current, documented assessment of risk and capacity or a safety plan with clear return precautions.", refs: ["5", "8", "14", "19"], assessment: adv(1, 1, 1) });

  addP("family-disclosure", 0, { rating: "incomplete", label: "Say you cannot discuss anything, end the call, and make no record of the request or of the family's concerns.", why: "Not disclosing is right, but families can offer useful information, which can be received without confirming anything. The request and your response should be documented.", refs: ["5", "6", "19"] });
  addP("family-disclosure", 1, { rating: "incomplete", label: "Contact the patient to ask for consent and disclose nothing meanwhile, even if you believe an emergency may exist and the patient cannot be reached.", why: "Seeking consent first respects autonomy. But Sec. 5(l)(3) permits necessary disclosure in a life-threatening emergency, so the team must assess whether the exception applies and, if so, disclose only what is needed.", refs: ["5"] });
  addP("family-disclosure", 2, { rating: "incomplete", label: "Tell the family how to reach emergency services if things worsen and thank them, without recording their information or asking the clinical team to review the concern.", why: "Safety information helps, but the family's concern is clinically relevant. It should be documented and assessed through appropriate channels without confirming protected details.", refs: ["5", "6", "19"], assessment: adv(1, 1, 1) });

  addP("restraint-considered", 0, { rating: "incomplete", label: "Attempt verbal de-escalation and offer oral medication, but skip assessment for medical causes and document later if restraint becomes necessary.", why: "De-escalation and offering medication are least restrictive steps. The team should also assess immediate risk and possible medical causes such as intoxication, delirium or pain, and keep contemporaneous records.", refs: ["5", "14", "19"] });
  addP("restraint-considered", 1, { rating: "incomplete", label: "Restrain only after the senior nurse agrees, record the nurse's approval in the chart, and review it at the end of the shift.", why: "Seeking senior agreement shows care, but Sec. 13(c) requires an order from the attending mental health professional, IRB review within 15 days then every 15 days, and approved guidelines with clear criteria. An end-of-shift review is not the statutory review.", refs: ["13", "19"] });
  addP("restraint-considered", 2, { rating: "incomplete", label: "Discontinue the restraint promptly and reassess, but defer documenting the change and monitoring until the next shift handover.", why: "Prompt discontinuation is right. Documentation and monitoring should be contemporaneous and full, as Sec. 13(d) requires.", refs: ["13", "19"], assessment: adv(1, 1, 0) });

  addP("discharge-limited-support", 0, { rating: "incomplete", label: "Arrange transport home and a medication supply, but leave discussion of follow-up until the first clinic visit.", why: "Practical arrangements help, but follow-up, medication access and the patient's concerns should be planned together before discharge.", refs: ["5", "14", "19"] });
  addP("discharge-limited-support", 1, { rating: "incomplete", label: "Book the first available appointment at a distant clinic without checking transport or cost, and record follow-up as arranged.", why: "An appointment on paper is not a workable plan if the patient cannot reach it. Check feasibility with the patient and document who will do what.", refs: ["5", "14", "19"] });
  addP("discharge-limited-support", 2, { rating: "incomplete", label: "Give the patient written details of alternative services and return precautions, but leave it to them to contact services without agreeing who will do what or by when.", why: "Information helps. With limited family support, the plan should be collaborative and specific about who contacts which service and when.", refs: ["5", "14", "19"], assessment: adv(1, 1, 1) });

  /* ---------- SDoMH decisions: a partly appropriate tier (score 1) and a few second strong answers ---------- */
  const L = W.SDOMH_LEARNING;
  const addL = (id, d, opt) => L[id][d].options.push(opt);
  const part = (label, feedback) => ({ label, score: 1, feedback });
  const strong = (label, feedback) => ({ label, score: 2, feedback });

  addL("urban-housing", 0, part("Contact the social worker first to start a housing application, then arrange a clinical assessment at the next visit.", "Practical help is valuable, but starting there before assessing safety and asking what Mara wants first risks overlooking clinical needs and her priorities. Assess and ask first, and involve others with consent."));
  addL("urban-housing", 1, part("Give Mara a list of housing and assistance contacts and encourage her to follow up on her own, without checking which are current or agreeing who does what.", "Information helps, but unverified lists with no shared plan often lead nowhere. Verify local options and agree roles and timing with her."));
  addL("rural-access", 0, part("Lengthen the interval between specialist visits while keeping the same medication, without asking about his current symptoms or risk.", "A longer interval may ease travel costs, but should follow a review of clinical needs and risk and a plan for what would prompt earlier contact."));
  addL("rural-access", 1, part("Ask the rural health unit to take over all follow-up and close the specialist file.", "Shared care can work well, but closing specialist follow-up before confirming capacity, roles and escalation triggers leaves no safety net."));
  addL("rural-access", 1, strong("Ask whether a phone or visit-based check-in suits Ramon, confirm privacy, agree what would prompt an in-person review, and check what the rural health unit can safely provide.", "Strong approach: remote or local follow-up can work when it is clinically suitable and private, with clear triggers and a realistic local role."));
  addL("ofw-separation", 0, part("Meet the adolescent and the caregiver together first so that everyone hears the same concerns, then offer a private conversation if needed.", "Involving the caregiver can help, but check privacy and safety first and offer the adolescent a private conversation early; honest confidentiality limits matter."));
  addL("ofw-separation", 1, part("Suggest the adolescent write a letter to the parent and send it through the family group chat.", "Contact with the parent may help, but a supported, planned conversation with clear confidentiality limits lowers the risk of blame or misunderstanding."));
  addL("informal-work", 0, part("Review the medication and reassure him that missing doses now and then is understandable, then continue the same plan.", "Empathy helps, but the clinician should also ask what makes treatment hard to obtain, assess symptoms and risk, and arrange prescriber-led adjustment rather than leaving the pattern unaddressed."));
  addL("informal-work", 1, part("Give Joel the clinic's financial assistance contact and let him arrange the rest, without adjusting appointment timing.", "A contact is useful, but a plan that fits his working hours and costs is more likely to work than leaving him to navigate alone."));
  addL("informal-work", 1, strong("Ask the prescriber whether lower-cost or longer-supply options are clinically appropriate, align appointment times with market days, and review progress after a short interval.", "Strong approach: it keeps treatment prescriber-led while reducing cost and lost income, with a defined review."));
  addL("disaster-displacement", 0, part("Give emergency food and shelter information first and arrange a mental health assessment once the family has settled in a few days.", "Practical needs matter, but safety, urgent medical needs and restoring her medication belong in the first step rather than being deferred."));
  addL("disaster-displacement", 1, part("Offer psychological first aid and a leaflet, and plan to check in only if she contacts the service.", "Supportive contact is right, but the plan should include practical needs and defined follow-up or specialist assessment if needed, not passive follow-up."));
  addL("disaster-displacement", 1, strong("Prioritise reconnecting Nena with her family and medication supply, and offer psychological first aid without pressing her to talk about the event.", "Strong approach: practical reconnection and calm support first, with follow-up arranged if distress persists."));
  addL("older-alone", 0, part("Arrange a home safety and functioning review by a community nurse first, and discuss mood afterwards if she raises it.", "Physical health and function matter, but the assessment should also address mood and risk directly while Pilar leads the discussion."));
  addL("older-alone", 1, part("Offer to arrange a volunteer who will manage her bills and appointments for her.", "Support may be welcome, but she has said she wants to keep control of her finances. Offer options and let her choose which help to accept."));
  addL("school-bullying", 0, part("Offer reassurance, agree to write a letter to the school describing his diagnosis, and wait to see whether the bullying stops.", "Describing a diagnosis to the school without a clear purpose and consent risks harm. Assess safety first, clarify confidentiality limits and plan collaboratively."));
  addL("school-bullying", 1, part("Ask the teacher to move Miguel to another class straight away to avoid the other students.", "A move may sometimes help, but a specific plan with Miguel's input, monitoring for retaliation and clear contacts is safer than a single unilateral change."));
  addL("school-bullying", 1, strong("Offer Miguel a say in who at school is told, what is shared and how reports are handled, and agree a way for him to flag any retaliation.", "Strong approach: it shares control with Miguel, limits disclosure and builds in monitoring."));
  addL("indigenous-care", 0, part("Ask a family member to translate and explain what the clinician should do, then proceed with the usual treatment plan.", "Family can help if the person wants it, but ask the person directly and use an appropriate interpreter rather than relying on relatives by default."));
  addL("indigenous-care", 1, part("Invite the community support person to join all clinical visits from now on.", "Collaboration is welcome, but confirm what the person wants shared, when and with whom rather than assuming continuous involvement."));

  /* ---------- Matching: same-register distractors plus extra appropriate options (ids are new and stable) ---------- */
  const M = id => W.SDOMH_MATCHING.find(m => m.id === id).options;
  const opt = (id, level, title, actor, fit, why) => ({ id, level, title, actor, fit, why });

  M("housing").push(
    opt("h7", "Service coordination", "Contact the landlord and relatives to explain the diagnosis and ask them to help keep the housing arrangement.", "Clinical team", false, "Disclosing the diagnosis without the patient's consent breaches confidentiality (Sec. 5l) and may worsen the housing situation."),
    opt("h8", "Practical access", "Give the patient a printed list of shelters and agencies and treat the housing issue as addressed once the list is handed over.", "Clinical team", false, "A list alone does not verify availability or eligibility, or arrange follow-up. Without a shared plan the barrier remains."),
    opt("h9", "Individual / practical", "Ask about safe storage and continuity of medication and records while the patient moves between homes, and agree how to reach them for follow-up.", "Clinical team with the patient", true, "Residential instability can disrupt medication, privacy and follow-up. A practical plan keeps care continuous."));
  M("unemployment").push(
    opt("u7", "Clinical documentation", "Write a certificate stating the patient is unfit for any work, without discussing the patient's goals or clinical findings.", "Psychiatrist", false, "Certificates should reflect clinical findings and the person's goals; blanket statements can harm employment prospects and misrepresent functioning."),
    opt("u8", "Service coordination", "Share the diagnosis with the former employer to ask for reinstatement.", "Clinical team", false, "Disclosure to an employer needs the patient's consent; breaching confidentiality may also harm rehiring prospects."),
    opt("u9", "Individual / practical", "Discuss the patient's goals about work and, where wanted, provide a factual letter about functioning or accommodations that the patient has agreed to share.", "Psychiatrist with the patient", true, "Keeps the patient in control of what is shared and links clinical findings to practical support."));
  M("food").push(
    opt("f7", "Practical access", "Schedule weekly visits to monitor weight and nutrition without checking whether the patient can afford the transport.", "Clinical team", false, "Frequent visits can add cost and lead to missed appointments for a patient who is already short of food."),
    opt("f8", "Service coordination", "Refer the patient to a food program and record 'food insecurity addressed' without confirming eligibility or whether the patient wants the referral.", "Clinical team", false, "A referral on paper is not an outcome. Confirm eligibility, consent and follow-through."));
  M("isolation").push(
    opt("s7", "Family", "Recommend moving into a relative's household, since living alone is the main risk.", "Clinical team", false, "Living alone is not itself the problem, and this overrides the person's stated wish to remain independent."),
    opt("s8", "Individual / clinical", "Start an antidepressant promptly on the basis of the loneliness described, deferring physical, hearing and cognitive assessment.", "Prescriber", false, "Loneliness may accompany depression, but assessment of physical health, sensory problems, cognition and risk should come first."),
    opt("s9", "Individual / person-centred", "Ask what the person values about living independently and agree a plan that supports that preference.", "Clinical team with the person", true, "Starting from the person's own priorities makes any support more acceptable and effective."));
  M("access").push(
    opt("a7", "Alternative modality", "Move the patient to monthly telephone reviews on the basis of distance alone, without checking privacy, reception or clinical stability.", "Clinical team", false, "Remote care can help, but only if it is clinically suitable, private and accessible."),
    opt("a8", "Service coordination", "Transfer the entire care plan to the nearest private clinic without discussing cost, continuity of medication or information-sharing with the patient.", "Clinical team", false, "Transfers need the patient's agreement, a feasibility check and agreed information-sharing."));
  M("discrimination").push(
    opt("d7", "Advocacy", "Report the employer or school to the authorities on the patient's behalf without asking whether the patient wants that step.", "Clinical team", false, "Whether and how to complain is the patient's decision. Offer information and options."),
    opt("d8", "Individual", "Advise the patient to hide the diagnosis from everyone to avoid stigma.", "Clinical team", false, "Choosing whom to tell is the patient's decision, and a blanket instruction to conceal can add isolation without addressing discrimination."),
    opt("d9", "Individual / rights", "With the patient's agreement, give factual information on rights and complaint routes under the Act (for example Sec. 5) and ask whether they would like help to use them.", "Clinical team with the patient", true, "Information that supports the patient's own choices addresses the environment without taking over."));
})();
