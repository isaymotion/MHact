(()=>{const D=window.DATA,$=s=>document.querySelector(s),V=$("#view");
const store={get(){try{return JSON.parse(localStorage.getItem("mhTrainer")||"{}")}catch(e){return{}}},set(o){try{localStorage.setItem("mhTrainer",JSON.stringify(o))}catch(e){}}};
let S=Object.assign({quiz:{},known:[],cases:{}},store.get());const save=()=>store.set(S);
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const tabs={home,quiz,cards,cases,capacity,review,screen,ref};
const names={home:"Home",quiz:"Quiz",cards:"Flashcards",cases:"Cases",capacity:"Capacity",review:"15-day IRB",screen:"Social screen",ref:"Reference"};
$("#nav").innerHTML=Object.keys(names).map(k=>`<button data-k="${k}">${names[k]}</button>`).join("");
$("#nav").onclick=e=>{const k=e.target.dataset.k;if(k)go(k)};
function go(k){document.querySelectorAll("#nav button").forEach(b=>b.classList.toggle("on",b.dataset.k===k));tabs[k]();window.scrollTo(0,0);location.hash=k}

function home(){const q=Object.values(S.quiz),ans=q.length,ok=q.filter(x=>x).length,cs=Object.keys(S.cases).length;
V.innerHTML=`<h2>Rights-based care meets social action</h2><p class="mut">A trainer for psychiatry residents on RA 11036 (Mental Health Act of 2018) and the social determinants of mental health (WHO &amp; Gulbenkian, 2014), set in everyday Philippine practice.</p>
<div class="grid"><div class="card"><div class="stat">${ok}/${D.quiz.length}</div>quiz questions mastered</div><div class="card"><div class="stat">${S.known.length}/${D.cards.length}</div>flashcards known</div><div class="card"><div class="stat">${cs}/${D.cases.length}</div>cases completed</div></div>
<div class="card"><h3>Where to start</h3><p>Run a <b>case</b> to see the law and the social context together, drill with the <b>quiz</b>, then use the <b>capacity</b>, <b>15-day IRB</b> and <b>social screen</b> tools as bedside templates.</p><button class="btn" onclick="document.querySelector('[data-k=cases]').click()">Start a case</button> <button class="btn alt" id="rs">Reset progress</button></div>
<p class="note">Educational use only. Not legal advice. Check the current IRR and your institution's policies. Cases are fictional.</p>`;
$("#rs").onclick=()=>{if(confirm("Reset all saved progress?")){S={quiz:{},known:[],cases:{}};save();home()}}}

function quiz(){let topics=["All",...new Set(D.quiz.map(x=>x.t))];
V.innerHTML=`<h2>Quiz</h2><p>Topic: <select id="tp">${topics.map(t=>`<option>${t}</option>`).join("")}</select> <button class="btn" id="go">Start</button></p><div id="qa"></div>`;
$("#go").onclick=()=>{const t=$("#tp").value,L=shuffle(D.quiz.map((x,i)=>({...x,i})).filter(x=>t==="All"||x.t===t));let n=0,sc=0;
const show=()=>{if(n>=L.length){$("#qa").innerHTML=`<div class="card"><h3>Score: ${sc}/${L.length}</h3><button class="btn" id="again">Again</button></div>`;$("#again").onclick=()=>$("#go").click();return}
const x=L[n];$("#qa").innerHTML=`<div class="card"><div class="tag">${x.t} &middot; ${n+1}/${L.length}</div><div class="bar"><i style="width:${n/L.length*100}%"></i></div><h3 style="margin-top:12px">${esc(x.q)}</h3>${x.o.map((o,i)=>`<button class="opt" data-i="${i}">${esc(o)}</button>`).join("")}<div id="fb"></div></div>`;
document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{const i=+b.dataset.i,good=i===x.a;document.querySelectorAll(".opt").forEach(o=>{o.disabled=true;if(+o.dataset.i===x.a)o.classList.add("ok")});if(!good)b.classList.add("no");sc+=good;S.quiz[x.i]=good;save();
$("#fb").innerHTML=`<div class="fb">${esc(x.e)}</div><p><button class="btn" id="nx">${n+1<L.length?"Next":"Finish"}</button></p>`;$("#nx").onclick=()=>{n++;show()}})};show()}}

function cards(){let L=shuffle(D.cards.map((c,i)=>({c,i}))),n=0,flip=false;
const r=()=>{const x=L[n];V.innerHTML=`<h2>Flashcards</h2><div class="card fc" id="fc"><div>${flip?esc(x.c[1]):`<b>${esc(x.c[0])}</b><div class="note">tap to reveal</div>`}</div></div><p class="note">${n+1}/${L.length} &middot; ${S.known.length} known</p>
<button class="btn alt" id="pv">Back</button> <button class="btn alt" id="kn">${S.known.includes(x.i)?"Unmark known":"Mark known"}</button> <button class="btn" id="nx">Next</button>`;
$("#fc").onclick=()=>{flip=!flip;r()};$("#nx").onclick=()=>{n=(n+1)%L.length;flip=false;r()};$("#pv").onclick=()=>{n=(n-1+L.length)%L.length;flip=false;r()};
$("#kn").onclick=()=>{S.known=S.known.includes(x.i)?S.known.filter(k=>k!==x.i):[...S.known,x.i];save();r()}};r()}

function cases(){V.innerHTML=`<h2>Case simulator</h2>${D.cases.map((c,i)=>`<div class="card"><h3>${esc(c.title)} ${S.cases[i]!=null?`<span class="tag">done ${S.cases[i]}/${c.steps.length}</span>`:""}</h3><p class="mut">${esc(c.intro)}</p><button class="btn" data-c="${i}">Open case</button></div>`).join("")}`;
document.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>runCase(+b.dataset.c))}
function runCase(ci){const c=D.cases[ci];let n=0,good=0;
const step=()=>{if(n>=c.steps.length){S.cases[ci]=good;save();V.innerHTML=`<div class="card"><h3>${esc(c.title)}: first-try score ${good}/${c.steps.length}</h3><p>The legal answer is half the job. The social column is what prevents readmission.</p><button class="btn" id="bk">Back to cases</button></div>`;$("#bk").onclick=cases;return}
const s=c.steps[n],need=s.o.filter(o=>o[1]).length;let hit=0,first=true;
V.innerHTML=`<div class="card"><div class="tag">${esc(c.title)} &middot; step ${n+1}/${c.steps.length}</div><p class="mut">${esc(c.intro)}</p><h3>${esc(s.q)}${s.multi?" <span class='note'>(select all that apply)</span>":""}</h3>${s.o.map((o,i)=>`<button class="opt" data-i="${i}">${esc(o[0])}</button>`).join("")}<div id="fb"></div></div>`;
document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{const o=s.o[+b.dataset.i];if(b.disabled)return;b.disabled=true;b.classList.add(o[1]?"ok":"no");
if(first){first=false;if(!o[1])good-=0;else if(!s.multi)good++}
if(o[1])hit++;if(s.multi&&hit===need&&first===false&&!document.querySelector(".opt.no"))good++;
$("#fb").insertAdjacentHTML("beforeend",`<div class="fb">${esc(o[2])}</div>`);
if(hit>=need){$("#fb").insertAdjacentHTML("beforeend",`<p><button class="btn" id="nx">${n+1<c.steps.length?"Next step":"Finish"}</button></p>`);$("#nx").onclick=()=>{n++;step()}}})};step()}

function capacity(){const A=[["Understands information about the condition (Sec. 4g-1)","Can you tell me in your own words what is happening to you?"],["Understands consequences of decisions for self and others (4g-2)","What might happen if you take this medicine? If you don't?"],["Understands the proposed treatment: method, effects, side effects (4g-3)","What do you know about how it works and its side effects?"],["Can communicate consent or information about own condition (4g-4)","What have you decided? Offer interpreter or alternative communication."]];
V.innerHTML=`<h2>Capacity checker</h2><p class="mut">Decision-specific and time-limited. Tick what the person <b>can</b> do after supports are offered. Presumption of capacity applies (Sec. 8).</p><div class="card"><label>Decision being assessed: <input id="dc" placeholder="e.g. accept injectable medication" style="width:100%;padding:9px;margin:6px 0"></label>${A.map((a,i)=>`<label class="chk"><input type="checkbox" class="ab" data-i="${i}"><span><b>${a[0]}</b><br><span class="note">${a[1]}</span></span></label>`).join("")}<label class="chk"><input type="checkbox" id="sp"><span>Supports offered first (language, supporters per Sec. 11, communication aids)</span></label><div id="out"></div></div>`;
const upd=()=>{const n=[...document.querySelectorAll(".ab")].filter(x=>x.checked).length,imp=n<4;$("#out").innerHTML=`<div class="fb"><b>${imp?"Possible impairment or temporary loss of capacity for this decision":"Capacity present for this decision"}</b> (${n}/4 abilities).${imp?" If the person is unable on any of the four, document which, then reassess as they improve. Consent exceptions apply only under Sec. 13 safeguards.":" Respect the decision, record written consent (Sec. 8)."}${$("#sp").checked?"":"<br>Offer supports before concluding."}</div><p class="note">Chart note: Decision: ${esc($("#dc").value||"[ ]")}. Abilities met: ${n}/4. Supports offered: ${$("#sp").checked?"yes":"no"}. Reassess: [date].</p>`};
V.addEventListener("input",upd);upd()}

function review(){const f=d=>d.toLocaleDateString("en-PH",{weekday:"short",year:"numeric",month:"short",day:"numeric"});
V.innerHTML=`<h2>15-day IRB review tracker (Sec. 13c)</h2><div class="card"><p>Date the order was issued: <input type="date" id="od"></p><div id="rv"></div></div><p class="note">Reviews fall within 15 days of the order and every 15 days while treatment or restraint continues. Stop once the emergency or incapacity ends. Also check rights told within 24h (Sec. 5s).</p>`;
const o=$("#od");o.valueAsDate=new Date();const u=()=>{if(!o.value)return;const b=new Date(o.value+"T00:00:00");$("#rv").innerHTML=`<table><tr><th>Review</th><th>Due on or before</th></tr>${[15,30,45,60].map((d,i)=>`<tr><td>${i?"Repeat #"+i:"First review"}</td><td>${f(new Date(b.getTime()+d*864e5))}</td></tr>`).join("")}</table><p class="note">Rights explained by: ${new Date(b.getTime()+864e5).toLocaleDateString("en-PH")} (24h from admission).</p>`};o.oninput=u;u()}

function screen(){V.innerHTML=`<h2>Social risk screen</h2><p class="mut">Ask in every assessment (WHO multilevel framework). Tick positives to build a referral and coding list.</p><div class="card">${D.screen.map((s,i)=>`<label class="chk"><input type="checkbox" data-i="${i}"><span><b>${s.d}</b><br>${esc(s.ask)}</span></label>`).join("")}</div><div class="card"><h3>Plan</h3><div id="pl" class="mut">No risks ticked.</div></div><p class="note">Z-code families are ICD-10 style. Confirm exact codes in your coding system. Referral links are suggestions drawn from the Act.</p>`;
V.oninput=()=>{const p=[...document.querySelectorAll("[data-i]:checked")].map(x=>D.screen[+x.dataset.i]);$("#pl").innerHTML=p.length?`<table><tr><th>Domain</th><th>Document</th><th>Refer</th></tr>${p.map(s=>`<tr><td>${s.d}</td><td>${esc(s.z)}</td><td>${esc(s.r)}</td></tr>`).join("")}</table><p class="note">Name each action as reducing exposure or strengthening buffers.</p>`:"No risks ticked."}}

function ref(){V.innerHTML=`<h2>RA 11036 map</h2><div class="card"><table><tr><th>Sec.</th><th>Topic</th><th>Key points</th></tr>${D.ref.map(r=>`<tr><td>${r[0]}</td><td><b>${r[1]}</b></td><td>${esc(r[2])}</td></tr>`).join("")}</table></div><p class="note">Source text: <a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/83255" target="_blank" rel="noopener">RA 11036, Supreme Court E-Library</a>. WHO &amp; Calouste Gulbenkian Foundation (2014). <i>Social determinants of mental health.</i> Geneva: WHO. NCMH crisis line 1553 (verify numbers before distribution).</p>`}
go(Object.keys(names).includes(location.hash.slice(1))?location.hash.slice(1):"home");
if("serviceWorker"in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{})})();
