// Release 1: fictional Philippine Social Determinants of Mental Health case library.
// Cases are educational composites, not reports of real people or communities.
window.SDOMH_CASES = [
  {
    id:'urban-housing', title:'Urban poverty and housing insecurity', setting:'Dense urban neighborhood · Metro Manila-inspired fictional setting', level:'Junior–Intermediate',
    presentation:'Mara, 27, seeks help for several months of low mood, poor sleep, reduced concentration, and missed work. She shares a crowded rented room with relatives and has received notice that the rent will increase. She worries about eviction and says she cannot discuss her distress at home because there is little privacy.',
    context:'Mara wants to keep working and remain close to her child’s school. She does not want a clinician to contact relatives or landlords without discussing it with her first.',
    determinants:[
      {level:'Individual',risk:'Depressive symptoms, fatigue, disrupted sleep, and limited private space for recovery.',protect:'Mara recognizes a change in her functioning, asks for help, and identifies goals that matter to her.'},
      {level:'Family and close relationships',risk:'Crowding and household financial strain may increase conflict and limit privacy.',protect:'A sibling has offered practical childcare help when asked.'},
      {level:'Community',risk:'Eviction pressure, insecure housing, noise, and long commutes make routines harder to maintain.',protect:'A nearby community health worker is known to the family and can explain local services if Mara agrees.'},
      {level:'Health and social service systems',risk:'Appointment schedules and transport costs may conflict with casual work; fragmented referrals can be difficult to navigate.',protect:'A primary-care clinic and social welfare office may be able to coordinate assessment and housing-related support.'},
      {level:'Structural',risk:'Low and unstable income, high housing costs, and limited affordable rental options constrain choices.',protect:'Housing assistance, tenant support, income protection, and accessible community mental health care can reduce exposure to ongoing stress.'}
    ],
    formulation:'The symptoms warrant a full clinical assessment, including risk, medical contributors, and the patient’s own account. Housing insecurity and crowding may be maintaining distress and interfering with sleep, privacy, and treatment access; they do not by themselves establish a diagnosis. A useful formulation connects symptoms with material pressures while preserving Mara’s agency and preferences.',
    questions:['What additional clinical information and immediate safety concerns would you assess?','Which housing, income, childcare, and treatment-access questions would you ask without making assumptions?','What could be addressed in the next week, and what requires coordinated or structural action?','How would you obtain consent before involving family or community services?'],
    rights:'Consider dignity, confidentiality, informed participation, access to appropriate care, and nondiscrimination under RA 11036. Verify the applicable provisions in the linked full Act before relying on a section number.'
  },
  {
    id:'rural-access', title:'Rural access to psychiatric services', setting:'Remote provincial municipality · fictional rural health catchment', level:'Junior–Intermediate',
    presentation:'Ramon, 41, has recurrent mood symptoms and has missed two specialist follow-ups. The nearest psychiatrist is several hours away by bus and jeepney. Travel costs mean he loses a day’s income, and public transport is unreliable during heavy rain. He worries that local people will learn why he is seeking care.',
    context:'Ramon prefers to receive routine care near home if safe and clinically appropriate. He is willing to discuss a shared plan with the rural health unit but wants to know who will have access to his information.',
    determinants:[
      {level:'Individual',risk:'Symptoms may recur between appointments; travel fatigue and lost wages add burden.',protect:'Ramon can describe early warning signs and is motivated to remain well.'},
      {level:'Family and close relationships',risk:'Relatives have limited ability to accompany him because of work and caregiving responsibilities.',protect:'A cousin can help with transport on some visits if Ramon requests it.'},
      {level:'Community',risk:'Geographic distance, transport gaps, weather, and stigma can delay care.',protect:'The rural health unit has staff who know local resources and can support follow-up.'},
      {level:'Health and social service systems',risk:'Specialist scarcity, referral delays, and unclear shared-care responsibilities can interrupt continuity.',protect:'With appropriate supervision, primary-care collaboration and teleconsultation where available may reduce unnecessary travel.'},
      {level:'Structural',risk:'Unequal distribution of mental health professionals and transport infrastructure disadvantages remote communities.',protect:'Workforce investment, decentralised services, reliable referral funding, and digital access designed for low-connectivity areas can improve equity.'}
    ],
    formulation:'Missed appointments should not automatically be interpreted as poor motivation. The care pathway imposes substantial time, cost, and privacy burdens. Clarify clinical stability and risk, then develop a feasible shared-care and escalation plan that does not assume specialist or internet access is always available.',
    questions:['How would you assess current symptoms, relapse risk, and urgency for specialist review?','What tasks are suitable for primary care with training, supervision, and clear escalation routes?','How could transport, scheduling, privacy, and connectivity be addressed?','What must be agreed about records, consent, and communication across services?'],
    rights:'Connect equitable access and continuity of care with RA 11036 and local service responsibilities. Confirm current service availability rather than assuming telepsychiatry or specialist support exists.'
  },
  {
    id:'ofw-separation', title:'OFW family separation and adolescent distress', setting:'Family household with a parent working overseas', level:'Junior–Intermediate',
    presentation:'Lea, 15, has become withdrawn, irritable, and frequently absent from school. Her mother works overseas and sends remittances; Lea lives with her father and grandmother. Video calls with her mother have become tense because conversations focus on grades and spending. Lea says she feels guilty for being unhappy when the family depends on the remittances.',
    context:'Lea wants to be heard without being labelled ungrateful. Her mother cares deeply and is concerned but may not understand what daily life is like at home.',
    determinants:[
      {level:'Individual',risk:'Low mood, guilt, disrupted routines, and possible school impairment require assessment.',protect:'Lea can name her feelings and identifies drawing and a close friend as helpful.'},
      {level:'Family and close relationships',risk:'Separation, mismatched expectations, caregiver strain, and conflict during calls may affect connection.',protect:'The overseas parent remains involved and provides material support; grandmother is a trusted adult.'},
      {level:'Community',risk:'Stigma around adolescent distress and pressure to appear successful may discourage disclosure.',protect:'A school counselor and supportive friend may offer connection if Lea agrees.'},
      {level:'Health and social service systems',risk:'Scheduling across time zones and uncertainty about confidentiality can complicate family-inclusive care.',protect:'With Lea’s participation and appropriate safeguards, planned family conversations and school support may be possible.'},
      {level:'Structural',risk:'Labor migration can separate families for long periods; work conditions and time-zone differences limit contact.',protect:'Family-friendly labor and social policies, accessible adolescent services, and affordable communication can support connection.'}
    ],
    formulation:'Avoid framing remittances as proof that family needs are met or treating distress as ingratitude. Assess symptoms, safety, functioning, family relationships, and Lea’s wishes. Family involvement should be planned with the adolescent, respecting confidentiality and its legal limits.',
    questions:['What would you assess privately with Lea before arranging family involvement?','How can the clinician acknowledge the parent’s care and Lea’s distress without blaming either?','What boundaries and confidentiality limits should be explained?','Which school and family supports might be useful with Lea’s agreement?'],
    rights:'Adolescent participation, age-appropriate communication, confidentiality, and safeguarding are central. Explain exceptions to confidentiality honestly and consult applicable law and local protocols.'
  },
  {
    id:'informal-work', title:'Informal employment and medication affordability', setting:'Public market and informal work', level:'Junior–Intermediate',
    presentation:'Joel, 36, sells food at a public market and has a chronic psychiatric condition that has been stable with treatment. During weeks with low sales, he stretches his medication supply and sometimes skips follow-up because he cannot afford transport and a day away from the stall. He fears being judged as “noncompliant.”',
    context:'Joel prioritizes keeping his stall open and supporting his household. He wants a plan that is affordable and does not jeopardize his livelihood.',
    determinants:[
      {level:'Individual',risk:'Medication interruption may increase relapse risk; fatigue and stress affect routines.',protect:'Joel understands his early warning signs and is engaged in shared decision-making.'},
      {level:'Family and close relationships',risk:'Household expenses and dependents increase the impact of variable earnings.',protect:'A family member can help monitor changes if Joel chooses to involve them.'},
      {level:'Community',risk:'Informal work often lacks paid leave and predictable income; the stall may be difficult to leave unattended.',protect:'Market peers may help cover brief breaks, if Joel trusts them.'},
      {level:'Health and social service systems',risk:'Medication cost, stock-outs, clinic hours, and transport expenses may disrupt continuity.',protect:'The care team can review an affordable evidence-based regimen, supply options, appointment timing, and available assistance.'},
      {level:'Structural',risk:'Limited social protection for informal workers and unstable earnings create recurring trade-offs between treatment and essentials.',protect:'Accessible benefits, affordable essential medicines, income support, and flexible clinic services can reduce repeated treatment interruptions.'}
    ],
    formulation:'Explore the exact pattern and reasons for missed doses without blame. Assess current symptoms and clinical risk, then discuss safe options with Joel; do not advise dose changes or rationing without a prescriber-led review. The plan should address both treatment and the practical costs of receiving it.',
    questions:['How would you ask about medication access in a nonjudgmental way?','What clinical review is needed after interruptions?','Which costs, clinic processes, or assistance pathways could be explored?','How can the team measure whether the plan is feasible for Joel’s working life?'],
    rights:'Link continuity and affordability discussions to access to care under RA 11036 and applicable health financing arrangements. Verify eligibility and availability of assistance locally; do not promise a benefit without confirmation.'
  },
  {
    id:'disaster-displacement', title:'Disaster displacement and psychosocial needs', setting:'Temporary evacuation center after a typhoon', level:'Junior–Intermediate',
    presentation:'Nena, 32, and her two children are staying in an evacuation center after flooding damaged their home. She has poor sleep, startles at heavy rain, and struggles to plan meals and childcare. Her regular medicines were left behind, and she worries that asking for help will take resources away from others.',
    context:'Nena’s immediate priorities are her children’s safety, locating relatives, and understanding whether she can access replacement medicines. She does not ask for a psychiatric diagnosis.',
    determinants:[
      {level:'Individual',risk:'Acute stress, sleep disruption, interrupted treatment, and caregiving burden may impair functioning.',protect:'Nena is actively problem-solving and can identify immediate priorities.'},
      {level:'Family and close relationships',risk:'Separation from relatives and responsibility for children increase strain.',protect:'Her children are with her and a relative has been contacted.'},
      {level:'Community',risk:'Crowding, limited privacy, disrupted routines, and uncertainty can intensify distress.',protect:'Community volunteers and other families may provide practical mutual support.'},
      {level:'Health and social service systems',risk:'Records and medication may be inaccessible; health, shelter, and social support can be fragmented.',protect:'Coordinated relief, primary care, mental health and psychosocial support, and clear referral pathways can restore continuity.'},
      {level:'Structural',risk:'Climate-related hazards, housing vulnerability, and unequal access to recovery resources shape exposure and recovery.',protect:'Risk-informed housing, inclusive disaster planning, social protection, and sustained recovery support reduce future harm.'}
    ],
    formulation:'First address safety, urgent medical needs, family reunification, shelter, food, and continuity of existing treatment. Distress after disaster is not automatically a mental disorder. Offer humane psychological first aid and assess further when symptoms, impairment, risk, or the person’s preferences indicate a need.',
    questions:['What practical and medical priorities come before detailed psychological exploration?','How would you respond to distress without pathologizing a normal response to loss?','How can continuity of existing medication be safely assessed and restored?','What signs would prompt urgent specialist assessment or safeguarding action?'],
    rights:'Consider dignity, access to appropriate care, privacy in crowded settings, nondiscrimination, and coordination with local disaster-response and social welfare systems.'
  },
  {
    id:'older-alone', title:'Older adult living alone', setting:'Small town or urban neighborhood', level:'Junior–Intermediate',
    presentation:'Aling Pilar, 76, lives alone after her spouse died. A neighbor brings her to a clinic because she has stopped attending a community group and says little feels worthwhile. She has difficulty hearing in crowded rooms and finds the steps to the clinic tiring. She values independence and does not want relatives to assume control of her finances.',
    context:'Pilar wants help with low mood and getting to appointments, but she wants decisions made with her, not for her.',
    determinants:[
      {level:'Individual',risk:'Bereavement, possible depressive symptoms, mobility limitations, and hearing difficulty warrant assessment.',protect:'Pilar expresses clear preferences, has life experience and coping skills, and is willing to discuss support.'},
      {level:'Family and close relationships',risk:'Relatives live far away and may not know how isolated she has become.',protect:'A niece calls weekly, and Pilar can choose what information to share.'},
      {level:'Community',risk:'Reduced social participation, inaccessible transport, and ageism can limit connection.',protect:'A trusted neighbor and senior citizens’ group may offer companionship and practical support.'},
      {level:'Health and social service systems',risk:'Sensory and mobility barriers may be mistaken for disengagement; fragmented appointments can be tiring.',protect:'Accessible communication, coordinated appointments, home visits where available, and consent-based support can improve access.'},
      {level:'Structural',risk:'Inadequate age-friendly infrastructure, limited income, and uneven community support can compound isolation.',protect:'Accessible public spaces, social protection, transport, and community programs support autonomy and participation.'}
    ],
    formulation:'Assess mood, suicide risk, grief, cognition when indicated, physical health, medication, hearing, mobility, and daily functioning. Living alone is not itself evidence of incapacity or poor quality of life. Support should strengthen Pilar’s chosen goals and preserve decision-making autonomy.',
    questions:['How would you distinguish bereavement-related distress from a possible depressive disorder while assessing safety?','What communication and mobility adjustments should be made during the interview?','How can social connection be offered without assuming that family should take over?','What would justify a home-based assessment or multidisciplinary review?'],
    rights:'Emphasize autonomy, informed participation, confidentiality, and nondiscrimination. Do not equate age, living alone, or a diagnosis with incapacity.'
  },
  {
    id:'school-bullying', title:'Adolescent facing bullying and school exclusion', setting:'Public secondary school', level:'Junior–Intermediate',
    presentation:'Miguel, 14, has frequent stomach aches before school, missed classes, and a recent drop in grades. He says classmates have repeatedly mocked him in group chats and in the corridor. He has not told school staff because he fears retaliation and worries his parents will confiscate his phone instead of helping.',
    context:'Miguel wants the bullying to stop and wants to feel safe returning to class. He is unsure what information the clinician would share with his parents or school.',
    determinants:[
      {level:'Individual',risk:'Anxiety, school avoidance, shame, and reduced functioning require assessment, including self-harm and suicide risk where indicated.',protect:'Miguel has sought help and can identify one peer he trusts.'},
      {level:'Family and close relationships',risk:'Fear of punishment may inhibit disclosure; parents may not understand online harassment.',protect:'A caregiver has noticed the absences and is willing to attend a meeting if Miguel feels safe.'},
      {level:'Community',risk:'Peer norms, digital harassment, unsafe corridors, and weak trust in reporting mechanisms can sustain bullying.',protect:'A supportive teacher and peer may help create a safer route through the school day.'},
      {level:'Health and social service systems',risk:'Poorly coordinated responses can expose the student to retaliation or blame.',protect:'With appropriate consent and safeguarding, school and health professionals can coordinate a clear safety and support plan.'},
      {level:'Structural',risk:'Discrimination, unequal power, limited school resources, and inconsistent implementation of protective policies shape risk.',protect:'Enforced anti-bullying policies, inclusive education, accessible counseling, and accountability can change the environment.'}
    ],
    formulation:'Take the report seriously, assess immediate safety and mental health, and ask what Miguel fears will happen if adults intervene. Do not promise absolute secrecy. Explain confidentiality and its limits in age-appropriate language, and plan any disclosure around safety, participation, and protection from retaliation.',
    questions:['What would you assess about immediate safety, self-harm, threats, and school attendance?','How would you explain confidentiality and its limits to Miguel?','What steps could reduce retaliation and avoid making the student responsible for stopping the bullying?','How could the student participate in deciding who is involved and what is shared?'],
    rights:'Apply child-sensitive, rights-based practice and relevant safeguarding and anti-bullying requirements. Confirm current legal and institutional procedures rather than relying on assumptions.'
  },
  {
    id:'indigenous-care', title:'Indigenous community and culturally responsive care', setting:'Fictional upland Indigenous community in the Philippines', level:'Intermediate–Senior',
    presentation:'A fictional Indigenous adult, Luma, is referred to a distant clinic for persistent distress, poor sleep, and reduced participation in daily activities. Luma describes the problem through family, community, and spiritual experiences that do not map neatly onto the clinician’s usual symptom checklist. Travel is costly, the interview language is not Luma’s strongest language, and there are concerns about how clinical information might be shared.',
    context:'Luma wants relief and asks whether a trusted support person can attend. The clinician has limited knowledge of the community and must not presume that all Indigenous people share the same beliefs or preferences.',
    determinants:[
      {level:'Individual',risk:'Distress and functional change need careful assessment; language mismatch may lead to misunderstanding.',protect:'Luma communicates clear goals and can identify preferred ways of receiving support.'},
      {level:'Family and close relationships',risk:'Family or community involvement may be helpful but could threaten privacy if assumed rather than requested.',protect:'Luma identifies a trusted support person and wants a say in who participates.'},
      {level:'Community',risk:'Geographic isolation, prior discrimination, and limited culturally safe services may reduce trust.',protect:'Community relationships, local knowledge, and trusted sources of support may be strengths if Luma chooses to involve them.'},
      {level:'Health and social service systems',risk:'Language barriers, culturally narrow assessments, and distant services can lead to misinterpretation or disengagement.',protect:'A qualified interpreter where appropriate, cultural consultation with consent, flexible service delivery, and reflective supervision can improve care.'},
      {level:'Structural',risk:'Historical and ongoing marginalization, discrimination, unequal resource distribution, and threats to community self-determination can shape health.',protect:'Rights-respecting policy, Indigenous participation in service design, equitable resources, and accountability for discrimination support better care.'}
    ],
    formulation:'Begin with curiosity and humility: ask what Luma calls the problem, what it means, what help has already been tried, and what outcomes matter. Do not automatically pathologize spiritual or cultural explanations or assume that a traditional practice is either harmful or sufficient. Assess symptoms, risk, physical health, and functioning while negotiating a plan with Luma.',
    questions:['What questions would help you understand Luma’s own explanatory model without leading or stereotyping?','How would you arrange language support and protect confidentiality?','When might community consultation be helpful, and what consent is needed first?','How can the service identify and address its own barriers rather than placing all responsibility on the patient?'],
    rights:'RA 11036 includes a culturally sensitive, rights-based approach to mental health care. Verify relevant provisions in the Lawphil full text and respect applicable Indigenous rights, local protocols, and the person’s own preferences.'
  }
];
