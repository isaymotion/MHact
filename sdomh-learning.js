// Release 2 interactive learning paths. Educational guidance, not clinical protocols.
window.SDOMH_LEARNING = {
 'urban-housing': [
  {prompt:'Mara reports worsening sleep and fears eviction. What is the best first move?',options:[
   {label:'Complete a person-centred clinical and safety assessment, then ask which practical pressures she wants help with first.',score:2,feedback:'Strong choice: assess clinical needs and safety while centring Mara’s priorities. Housing insecurity is important, but it should not replace assessment or her agency.'},
   {label:'Contact her landlord and relatives immediately to explain her diagnosis and request help.',score:0,feedback:'This risks breaching confidentiality and ignores Mara’s stated preference. Discuss options and obtain informed consent before involving others.'},
   {label:'Focus only on symptoms; housing is outside mental health care.',score:0,feedback:'A symptom assessment matters, but housing pressure can affect sleep, safety, and continuity. Explore feasible collaboration or referral with consent.'}]},
  {prompt:'Mara agrees to explore support. Which next step best balances practical help and autonomy?',options:[
   {label:'With her consent, map immediate housing and income concerns, identify verified local supports, and agree who will contact them.',score:2,feedback:'This turns the formulation into coordinated action while preserving choice and checking that services actually exist.'},
   {label:'Promise that social welfare will provide housing.',score:0,feedback:'Do not promise eligibility or availability. Verify local services and explain uncertainty transparently.'},
   {label:'Ask family to take over all decisions to reduce her stress.',score:0,feedback:'Stress does not remove decision-making rights. Offer support without displacing Mara’s preferences.'}]}
 ],
 'rural-access': [
  {prompt:'Ramon misses specialist follow-up because travel costs a day’s income. What should you explore first?',options:[
   {label:'Review current clinical needs and risk, then discuss local follow-up, travel barriers, privacy, and feasible referral options with Ramon.',score:2,feedback:'Good: combines clinical review with practical barriers and Ramon’s preference for local care where appropriate.'},
   {label:'Label him nonadherent and discharge him from specialist care.',score:0,feedback:'This blames the patient for access barriers and may worsen discontinuity.'},
   {label:'Switch all care to remote consultations without assessing suitability or privacy.',score:0,feedback:'Telehealth may help but requires clinical suitability, reliable access, privacy, and a safe escalation plan.'}]},
  {prompt:'The rural health unit may be able to share follow-up. What is the best next step?',options:[
   {label:'Agree on roles and information-sharing with Ramon’s consent, confirm referral capacity, and define escalation triggers.',score:2,feedback:'Shared care needs clear responsibilities, consent, realistic service capacity, and a plan for deterioration.'},
   {label:'Send the complete psychiatric record to the local clinic without discussing it.',score:0,feedback:'Share only appropriate information through lawful, consent-aware processes; explain who will see it.'},
   {label:'Tell Ramon to return to the city whenever symptoms worsen, with no local plan.',score:0,feedback:'This may be unrealistic. Establish practical local supports and clear urgent referral pathways.'}]}
 ],
 'ofw-separation': [
  {prompt:'An adolescent describes loneliness and conflict while a parent works abroad. What is the best first response?',options:[
   {label:'Speak with the adolescent privately as appropriate, assess safety and functioning, and ask whom they feel safe involving.',score:2,feedback:'This respects the adolescent’s voice while assessing clinical needs, safety, and supportive relationships.'},
   {label:'Assume the overseas parent is the cause and tell the adolescent to confront them.',score:0,feedback:'Avoid simplistic causal assumptions. Explore the young person’s experience and wider context.'},
   {label:'Invite the whole family into the first conversation without checking privacy or safety.',score:0,feedback:'Family work can help, but plan it with the young person and consider confidentiality, consent, and safety.'}]},
  {prompt:'The adolescent wants the overseas parent involved but worries about being blamed. What next?',options:[
   {label:'Plan a supported conversation with the adolescent’s agreement, clarify confidentiality limits, and identify a trusted adult locally.',score:2,feedback:'This supports connection while reducing the risk of blame and ensuring a local support option.'},
   {label:'Send the parent every detail of the clinical interview because they pay household expenses.',score:0,feedback:'Financial support does not automatically entitle someone to all confidential information.'},
   {label:'Exclude the parent from care in every circumstance.',score:0,feedback:'The adolescent has expressed a preference for involvement. Explore safe, appropriate participation with consent.'}]}
 ],
 'informal-work': [
  {prompt:'Joel stretches medication during weeks with low sales. How should the clinician respond?',options:[
   {label:'Ask nonjudgmentally what makes treatment hard to obtain, assess current symptoms and risk, and arrange a prescriber-led medication review.',score:2,feedback:'This avoids blame, checks clinical consequences, and addresses affordability without unsafe self-directed dose changes.'},
   {label:'Tell him that missed doses show he is not motivated to recover.',score:0,feedback:'This moralizes a material barrier and may damage engagement.'},
   {label:'Recommend that he halve the dose to make the supply last longer.',score:0,feedback:'Do not recommend unsupervised dose changes. A qualified prescriber should review safe options.'}]},
  {prompt:'Joel wants a sustainable plan that does not close his stall. What should the team do?',options:[
   {label:'Co-design an affordable plan, check medicine and assistance availability, and adjust appointment timing where feasible.',score:2,feedback:'The plan must be clinically sound and workable in the person’s real circumstances; verify benefits rather than assume eligibility.'},
   {label:'Refer him to an unverified assistance program and assume the problem is solved.',score:0,feedback:'Confirm program existence, eligibility, stock, and next steps; referral alone does not guarantee access.'},
   {label:'Require weekly in-person appointments during his busiest market hours.',score:0,feedback:'Consider clinical need and safety, but avoid unnecessary burdens that make care inaccessible.'}]}
 ],
 'disaster-displacement': [
  {prompt:'Nena is distressed after flooding, has two children with her, and left her medication behind. What comes first?',options:[
   {label:'Check immediate safety, urgent medical needs, shelter and family needs, then assess how to safely restore existing treatment.',score:2,feedback:'Practical safety and continuity needs come first. Distress after disaster is not automatically a mental disorder.'},
   {label:'Diagnose PTSD from poor sleep and start a detailed trauma interview immediately.',score:0,feedback:'These details alone are insufficient for diagnosis. Prioritize safety and avoid forcing detailed recounting.'},
   {label:'Tell her to wait until the evacuation period ends before seeking help.',score:0,feedback:'Do not delay urgent care or continuity planning; identify accessible services now.'}]},
  {prompt:'Nena is safe for now but overwhelmed. Which support is most appropriate?',options:[
   {label:'Offer practical support and psychological first aid, ask what she needs, and arrange follow-up or specialist assessment if indicated.',score:2,feedback:'This is humane, needs-led, and proportionate. Monitor symptoms, impairment, risk, and her preferences over time.'},
   {label:'Insist she attend a group debrief and describe the flood in detail.',score:0,feedback:'Do not force psychological debriefing or detailed disclosure. Offer choices and practical support.'},
   {label:'Focus only on emotional coping and ignore medicines, food, shelter, and family needs.',score:0,feedback:'Psychosocial support should be coordinated with essential practical and medical needs.'}]}
 ],
 'older-alone': [
  {prompt:'Pilar lives alone, has low mood, and values independence. What is the best approach?',options:[
   {label:'Assess mood, risk, physical health, cognition when indicated, hearing, mobility, and goals while speaking directly with Pilar.',score:2,feedback:'This avoids assumptions based on age or living situation and considers relevant clinical and access factors.'},
   {label:'Ask her niece to make decisions because Pilar is 76 and lives alone.',score:0,feedback:'Age and living alone do not establish incapacity. Involve others according to Pilar’s wishes and applicable consent rules.'},
   {label:'Assume her symptoms are normal ageing and offer no assessment.',score:0,feedback:'Low mood and functional change deserve appropriate assessment without presuming a diagnosis.'}]},
  {prompt:'Pilar wants help attending appointments but does not want relatives controlling her finances. What next?',options:[
   {label:'Ask which practical supports she would accept, improve communication access, and coordinate appointments or transport where available.',score:2,feedback:'This supports her stated goals and autonomy while addressing real barriers.'},
   {label:'Give relatives her full clinical record so they can coordinate care.',score:0,feedback:'Share information only through appropriate consent and lawful processes.'},
   {label:'Avoid discussing community supports because she lives alone by choice.',score:0,feedback:'Offer options without pressure. Living alone does not mean she wants no social connection or practical help.'}]}
 ],
 'school-bullying': [
  {prompt:'Miguel fears retaliation if he reports bullying. What should the clinician do first?',options:[
   {label:'Assess safety, mental health and self-harm risk as indicated, clarify confidentiality limits, and collaboratively plan safe support.',score:2,feedback:'This takes the report seriously, assesses risk, and avoids promising absolute secrecy.'},
   {label:'Immediately confront the classmates without Miguel’s knowledge.',score:0,feedback:'Unplanned action may increase retaliation risk. Plan with Miguel and appropriate safeguarding procedures.'},
   {label:'Tell him to ignore the bullying and attend school as usual.',score:0,feedback:'This minimizes harm and does not address safety or school responsibility.'}]},
  {prompt:'Miguel agrees to involve one trusted teacher. What should happen next?',options:[
   {label:'With appropriate consent and safeguarding, coordinate a specific anti-bullying and safety plan and agree how to monitor retaliation.',score:2,feedback:'A concrete plan should protect Miguel, define responsibilities, and include follow-up.'},
   {label:'Share every detail of his psychiatric interview with all school staff.',score:0,feedback:'Share only information needed for agreed support and safeguarding, through appropriate channels.'},
   {label:'Make school attendance the only outcome measure.',score:0,feedback:'Attendance matters, but safety, symptoms, functioning, trust, and Miguel’s own goals also matter.'}]}
 ],
 'indigenous-care': [
  {prompt:'A community member describes distress using concepts unfamiliar to the clinician. What is the best response?',options:[
   {label:'Ask what the experience means to the person, use an appropriate interpreter if needed, and explore their preferred sources of support.',score:2,feedback:'Cultural humility means curiosity without assumptions, while still assessing safety and clinical needs.'},
   {label:'Dismiss the explanation as superstition and proceed with a standard interview.',score:0,feedback:'This risks disrespect and disengagement. Explore meaning while maintaining clinical responsibility.'},
   {label:'Assume all members of the community share the same beliefs and treatment preferences.',score:0,feedback:'Indigenous communities are diverse; ask the individual rather than generalizing.'}]},
  {prompt:'The person is open to collaboration with a community support person. What next?',options:[
   {label:'Ask whom they want involved, obtain consent, clarify confidentiality, and agree how clinical and community supports can work together.',score:2,feedback:'This supports self-determination and respectful collaboration without replacing clinical care or assuming community consent.'},
   {label:'Contact community leaders without the person’s knowledge.',score:0,feedback:'Do not disclose identifiable information without an appropriate basis and discussion with the person.'},
   {label:'Require the person to abandon their preferred cultural supports before receiving care.',score:0,feedback:'Avoid imposing unnecessary barriers. Seek safe, collaborative care that respects the person’s values.'}]}
 ]
};
