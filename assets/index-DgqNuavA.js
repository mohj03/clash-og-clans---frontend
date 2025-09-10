(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const w="http://79.76.40.113:8000/clash",x={THEME:`${w}/theme`,LIVE_CW:`${w}/live-cw`,CLAN_MEMBERS:`${w}/clan-members`,PLAYER_BASE:`${w}/player/`,LIVE_MONTHLY:`${w}/live-monthly`,MVP:`${w}/mvp`,ROMPIS:`${w}/rompis`,TOP10:`${w}/top10-month`,LOG_CW:`${w}/log-cwl`},C=["clanwar","clanwarleague","top10","nowar"],O=[{id:"clan",name:"Klanside",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9.602 16.79v-2.115a.75.75 0 0 1 .33-.625l1.5-1.071a.75.75 0 0 1 .838 0l1.5 1.07a.75.75 0 0 1 .33.626v2.114a.75.75 0 0 1-1.168.625l-1.002-.715a.75.75 0 0 0-.836 0l-1.002.715A.75.75 0 0 1 9.602 16.79Zm8.148-7.399a.75.75 0 0 1-1.06-1.06l-1.22-1.22a.75.75 0 0 1 0-1.06l1.22-1.22a.75.75 0 1 1 1.06 1.06l-1.22 1.22a.75.75 0 0 1 0 1.06l1.22 1.22a.75.75 0 0 1 0 1.06ZM6.25 9.391a.75.75 0 1 1 0-1.06l1.22-1.22a.75.75 0 0 1 1.06 0l1.22 1.22a.75.75 0 1 1-1.06 1.06l-1.22-1.22a.75.75 0 0 1 0-1.06l1.22-1.22a.75.75 0 1 1 1.06 1.06l-1.22 1.22a.75.75 0 0 1-1.06 0l-1.22-1.22Z"></path></svg>'},{id:"live",name:"Live Krig",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12.96 6.34a.75.75 0 0 1-1.06 0l-1.12-1.12a.75.75 0 0 1 1.06-1.06l1.12 1.12a.75.75 0 0 1 0 1.06ZM12 17.25a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v8.25a.75.75 0 0 1-.75.75Z M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-1.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"></path></svg>'},{id:"toplists",name:"Topplister",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M17.25 3.75a.75.75 0 0 0-1.5 0v1.5h-3v-1.5a.75.75 0 0 0-1.5 0v1.5H8.25v-1.5a.75.75 0 0 0-1.5 0v1.5H5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V8.25a3 3 0 0 0-3-3H17.25v-1.5Z M4.5 9.75h15V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18v-8.25Z"></path></svg>'},{id:"members",name:"Klanmedlemmer",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63l-6.75 3.5a.75.75 0 0 1-.671 0l-6.75-3.5a.75.75 0 0 1-.363-.63l-.001-.12v-.003ZM12.375 21.433 18.75 18v.003l.001.119a.75.75 0 0 1-.363.63l-6.75 3.5a.75.75 0 0 1-.671 0l-.222-.115a25.352 25.352 0 0 1-3.235-1.558.75.75 0 0 1-.22-.672v-1.127a.75.75 0 0 1 .432-.673l.01-.005.01-.005 6.75-3.5a.75.75 0 0 1 .671 0l6.75 3.5a.75.75 0 0 1 .363.63l.001.12v1.875a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5h1.5v-1.125l-6-3.125-6 3.125v1.125h1.5a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75v-1.875a.75.75 0 0 1 .363-.63l6.75-3.5a.75.75 0 0 1 .671 0Z"></path></svg>'},{id:"awards",name:"Kåringer",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M15.75 1.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V3.344l-2.232 2.232a.75.75 0 0 1-1.06 0L9.476 3.344v2.906a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75h7.5Zm-7.5 6h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5ZM3 13.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3 17.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM2.25 21a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z"></path></svg>'}],c={currentView:null,timers:{},lastUpdated:null,themeLockUntil:null,currentTheme:"light",clanMembers:[],warInfo:null,liveWarData:null,clanBadgeUrl:"https://i.ibb.co/RTspcR12/image.png"},o=e=>document.querySelector(e),S=e=>document.querySelectorAll(e),k={parseNonStandardISO:e=>{if(!e||typeof e!="string"||e.length<15)return null;try{const t=e.substring(0,4),s=e.substring(4,6),l=e.substring(6,8),a=e.substring(9,11),n=e.substring(11,13),r=e.substring(13,15);return`${t}-${s}-${l}T${a}:${n}:${r}.000Z`}catch(t){return console.error("Failed to parse date string:",e,t),null}},formatOslo:e=>{const t=k.parseNonStandardISO(e)||e,s=new Date(t);if(isNaN(s.getTime()))return"Ugyldig dato";try{return new Intl.DateTimeFormat("nb-NO",{dateStyle:"medium",timeStyle:"short",timeZone:"Europe/Oslo"}).format(s)}catch(l){return console.warn("Could not format date:",e,l),"Ugyldig dato"}},countdown:(e,t,s)=>{const l=k.parseNonStandardISO(e)||e,a=new Date(l).getTime();if(isNaN(a))return console.warn("Invalid target time for countdown:",e),s&&s(),null;const n=()=>{const d=new Date().getTime(),i=a-d;if(i<=0){clearInterval(r),s&&s();return}const m=Math.floor(i%(1e3*60*60*24)/(1e3*60*60)),p=Math.floor(i%(1e3*60*60)/(1e3*60)),v=Math.floor(i%(1e3*60)/1e3);t.textContent=`${String(m).padStart(2,"0")}:${String(p).padStart(2,"0")}:${String(v).padStart(2,"0")}`,t.classList.toggle("text-warning",i<12e4),t.classList.toggle("animate-pulse",i<12e4)},r=setInterval(n,1e3);return n(),r}},g={getRatingColor:e=>e===null?"text-slate-500":e>90?"text-green-500":e>80?"text-green-700":e>70?"text-yellow-500":e>60?"text-orange-600":e>40?"text-red-600":e>30?"text-amber-700":"text-amber-900",showView:e=>{S(".view").forEach(t=>t.classList.add("hidden")),o(`#view-${e}`)&&o(`#view-${e}`).classList.remove("hidden"),c.currentView=e,g.setActiveNav(e)},setActiveNav:e=>{S(".nav-link").forEach(t=>{t.classList.remove("active"),t.href.endsWith(`#/${e}`)&&t.classList.add("active")})},renderError:(e,t)=>{e.innerHTML=`<div class="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl text-center shadow-md">
                    <h3 class="font-bold text-lg">Oisann, noe gikk galt!</h3>
                    <p class="text-sm mt-2">${t}</p>
                    <button onclick="location.reload()" class="mt-4 bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition">Prøv igjen</button>
                </div>`},renderEmpty:(e,t,s)=>{e.innerHTML=`<div class="text-center py-12 bg-card border border-card rounded-2xl">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <h3 class="mt-2 text-lg font-medium text-theme">${t}</h3>
                    <p class="mt-1 text-sm text-theme-muted">${s}</p>
                </div>`}};async function u(e,t={},s=2,l=300){const{timeout:a=1e4}=t,n=new AbortController,r=setTimeout(()=>n.abort(),a);try{const d=await fetch(e,{...t,signal:n.signal});if(clearTimeout(r),!d.ok)throw new Error(`HTTP error! status: ${d.status}`);return c.lastUpdated=new Date,o("#last-updated").textContent=c.lastUpdated.toLocaleTimeString("nb-NO"),o("#live-indicator").classList.add("live-pulse","bg-green-500"),o("#live-indicator").classList.remove("bg-gray-500"),setTimeout(()=>{o("#live-indicator").classList.remove("live-pulse")},1e4),await d.json()}catch(d){if(clearTimeout(r),s>0)return await new Promise(i=>setTimeout(i,l)),u(e,t,s-1,l*2);throw console.error(`Failed to fetch ${e}:`,d),o("#live-indicator").classList.remove("bg-green-500","live-pulse"),o("#live-indicator").classList.add("bg-red-500"),d}}function L(e){document.documentElement.className="",C.includes(e)&&document.documentElement.classList.add(`theme-${e}`),c.currentTheme=e}function H(){const e=localStorage.getItem("themeOverride");return c.themeLockUntil=localStorage.getItem("layoutLockedUntil"),c.themeLockUntil&&new Date(c.themeLockUntil)>new Date&&(o("#theme-button").disabled=!0,o("#theme-lock-indicator").classList.remove("hidden")),o("#theme-button").addEventListener("click",()=>{const t=["light",...C],l=(t.indexOf(c.currentTheme)+1)%t.length,a=t[l];L(a),localStorage.setItem("themeOverride",a)}),e}function y(e,t="table-skeleton-template"){const s=o(`#${t}`);s&&(e.innerHTML="",e.appendChild(s.content.cloneNode(!0)))}async function _(e=!0){const t=o("#view-clan");e&&y(t);try{const[s,l,a]=await Promise.all([u(x.LOG_CW),u(x.CLAN_MEMBERS),u(x.THEME)]);c.warInfo=a.warInfo;let n='<p class="text-3xl font-bold text-theme-muted">VS</p>';c.warInfo&&c.warInfo.state==="inWar"&&(n=`
                        <div class="flex items-center justify-center gap-3">
                            <div class="relative flex h-3 w-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                            </div>
                            <p class="text-4xl font-bold text-theme-muted">VS</p>
                        </div>`);const r=`
                    <div class="bg-card border border-card rounded-2xl p-6 shadow-theme">
                        <h2 class="text-2xl font-bold text-theme mb-4">Siste Krig</h2>
                        <div class="flex items-center justify-between">
                            <div class="text-center">
                                <img src="${c.clanBadgeUrl}" alt="Uguwewe Badge" class="h-20 w-20 mx-auto rounded-xl mb-2">
                                <p class="font-semibold text-theme">Uguwewe</p>
                                <p class="text-2xl font-bold ${s.score.winner==="uguwewe"?"text-success":"text-theme"}">${s.score.uguwewewewughoa_stars} ★</p>
                            </div>
                            <div class="text-center">
                                ${n}
                                <p class="text-sm text-theme-muted">Endte: ${k.formatOslo(s.opponent.endTime)}</p>
                                <p class="mt-2 text-sm font-semibold">Vinner: <span class="text-accent">${s.score.winner}</span></p>
                            </div>
                            <div class="text-center">
                                <img src="${s.opponent.badge_url}" alt="${s.opponent.name} Badge" class="h-20 w-20 mx-auto rounded-xl mb-2">
                                <p class="font-semibold text-theme">${s.opponent.name}</p>
                                <p class="text-2xl font-bold ${s.score.winner!=="uguwewe"?"text-success":"text-theme"}">${s.score.opp_stars} ★</p>
                            </div>
                        </div>
                    </div>`,i=`
                    <div class="bg-card border border-card rounded-2xl shadow-theme overflow-hidden">
                        <div class="p-6">
                           <h2 class="text-2xl font-bold text-theme">Topp 10 Klanmedlemmer (Rating)</h2>
                        </div>
                        <div class="table-container">
                            <table class="min-w-full">
                                <thead class="bg-theme-muted/50 table-sticky-header">
                                    <tr>
                                        <th class="px-6 py-3 text-left text-xs font-semibold text-theme-muted uppercase tracking-wider">Navn</th>
                                        <th class="px-6 py-3 text-left text-xs font-semibold text-theme-muted uppercase tracking-wider">Rating</th>
                                        <th class="px-6 py-3 text-left text-xs font-semibold text-theme-muted uppercase tracking-wider">CW Stjerner</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-card">
                                    ${Object.entries(l).map(([h,f])=>({tag:h,...f})).sort((h,f)=>f.rating-h.rating).slice(0,10).map(h=>`
                                        <tr class="border-t border-card">
                                            <td class="px-6 py-4 whitespace-nowrap font-medium"><a href="#/player/${h.tag.substring(1)}" class="hover:underline text-accent font-semibold">${h.name}</a></td>
                                            <td class="px-6 py-4 whitespace-nowrap font-bold ${g.getRatingColor(h.rating)}">${h.rating}</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-theme">${h.sum_stars} ★</td>
                                        </tr>
                                    `).join("")}
                                </tbody>
                            </table>
                        </div>
                    </div>`,m=Object.values(l),p=m.length,v=p>0?(m.reduce((h,f)=>h+f.rating,0)/p).toFixed(1):0,$=m.reduce((h,f)=>(h[f.townhall]=(h[f.townhall]||0)+1,h),{}),T=p>0?Object.keys($).reduce((h,f)=>$[h]>$[f]?h:f):"N/A",b=`
                    <div class="bg-card border border-card rounded-2xl p-6 shadow-theme">
                        <h2 class="text-xl font-bold text-theme mb-4">Klanstatistikk</h2>
                        <div class="space-y-4 text-sm">
                            <div class="flex justify-between items-center">
                                <span class="text-theme-muted">Totalt antall medlemmer:</span>
                                <span class="font-bold text-theme">${p}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-theme-muted">Gjennomsnittlig rating:</span>
                                <span class="font-bold text-theme">${v}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-theme-muted">Vanligste Town Hall:</span>
                                <span class="font-bold text-theme">TH ${T}</span>
                            </div>
                        </div>
                    </div>`;t.innerHTML=`
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="lg:col-span-2 space-y-8">
                            ${r}
                            ${i}
                        </div>
                        <div class="space-y-8">
                           ${b}
                        </div>
                    </div>`}catch{g.renderError(t,"Kunne ikke laste klandata. Sjekk konsollen for detaljer.")}}function I(e){clearTimeout(c.timers.liveWar);const t=e.war_info.state;let s=0;t==="inWar"?(s=2e3+Math.random()*3e3,o("#live-indicator-container").classList.add("in-war")):(o("#live-indicator-container").classList.remove("in-war"),t==="preparation"&&(s=6e4+Math.random()*6e4)),s>0?c.timers.liveWar=setTimeout(()=>M(!1),s):console.log("War ended. Stopping polling for Live War.")}async function M(e=!0){const t=o("#view-live");e&&y(t);try{const s=await u(x.LIVE_CW);c.liveWarData=s;const{war_info:l}=s;if(!l)throw new Error("Mangler 'war_info' i responsen fra LIVE_CW.");if(e){let r="";l.state==="preparation"?r=`<div class="text-center">
                            <p class="text-sm uppercase tracking-wider text-theme-muted">Starter Om</p>
                            <span id="countdown-timer" class="text-2xl font-bold tabular-nums"></span>
                        </div>`:l.state==="inWar"?r=`<div class="text-center">
                            <div class="flex items-center justify-center gap-3">
                                <div class="relative flex h-3 w-3">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                                </div>
                                <p class="text-4xl font-bold text-theme-muted">VS</p>
                            </div>
                            <p class="text-sm uppercase tracking-wider text-theme-muted mt-1">Slutter Om</p>
                            <span id="countdown-timer" class="text-2xl font-bold tabular-nums"></span>
                        </div>`:r='<p class="text-xl font-bold text-accent">Krigen er ferdig</p>';const d=`
                    <div class="bg-card border border-card rounded-2xl p-6 shadow-theme mb-8">
                        <div class="flex items-center justify-around">
                             <div class="text-center">
                                <img src="${c.clanBadgeUrl}" alt="Uguwewe Badge" class="h-20 w-20 mx-auto rounded-xl mb-2">
                                <p class="text-xl font-semibold text-theme">Uguwewe</p>
                            </div>
                            ${r}
                            <div class="text-center">
                                <img src="${l.oppBadge}" alt="${l.oppName} Badge" class="h-20 w-20 mx-auto rounded-xl mb-2">
                                <p class="text-xl font-semibold text-theme">${l.oppName}</p>
                            </div>
                        </div>
                    </div>`,m=Object.entries(s).filter(([p])=>p.startsWith("#")).map(([p,v])=>({tag:p,...v})).map(p=>`
                        <div class="player-card bg-card border border-card rounded-2xl p-4 text-center space-y-2 flex flex-col justify-between shadow-theme hover:shadow-lg transition-shadow duration-300" data-tag="${p.tag}">
                            <a href="#/player/${p.tag.substring(1)}" class="player-name-link font-bold text-lg text-accent hover:underline truncate">${p.name}</a>
                            <p class="text-sm text-theme-muted pointer-events-none">TH ${p.townhallLevel}</p>
                            <div class="grid grid-cols-2 gap-2 text-sm pt-2 pointer-events-none">
                                <div><p class="font-semibold text-theme player-attacks">${p.attacksUsed} / 2</p><p class="text-xs text-theme-muted">Angrep</p></div>
                                <div><p class="font-semibold text-theme player-stars">${p.totalStars} ★</p><p class="text-xs text-theme-muted">Stjerner</p></div>
                            </div>
                            <div class="pt-2 pointer-events-none"><p class="font-bold text-lg text-theme player-score"></p><p class="text-xs text-theme-muted">Poeng</p></div>
                        </div>`).join("");t.innerHTML=d+`<div id="live-players-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">${m}</div>`}Object.entries(s).filter(([r])=>r.startsWith("#")).map(([r,d])=>({tag:r,...d})).forEach(r=>{const d=t.querySelector(`[data-tag="${r.tag}"]`);if(d){d.querySelector(".player-attacks").textContent=`${r.attacksUsed} / 2`,d.querySelector(".player-stars").textContent=`${r.totalStars} ★`;const i=l.warType==="cw"&&r.score.potentialBonus?`<span class="text-xs text-green-400"> (+${r.score.potentialBonus})</span>`:"";d.querySelector(".player-score").innerHTML=(r.score?r.score.points:"N/A")+i}}),clearInterval(c.timers.countdown);const n=t.querySelector("#countdown-timer");if(n){const r=l.state==="preparation"?l.startTime:l.endTime;c.timers.countdown=k.countdown(r,n,()=>M(!1))}I(s)}catch{g.renderEmpty(t,"Ingen aktiv krig funnet.","Sjekk tilbake senere eller se på Klansiden for siste resultater."),clearTimeout(c.timers.liveWar),o("#live-indicator-container").classList.remove("in-war")}}async function N(e=!0){const t=o("#view-toplists");e&&y(t);try{const s=await u(x.LIVE_MONTHLY),l=Object.entries(s).map(([a,n])=>({tag:a,...n})).sort((a,n)=>a.rank-n.rank);t.innerHTML=`
                <div class="bg-card border border-card rounded-2xl shadow-theme overflow-hidden">
                    <div class="p-6">
                       <h2 class="text-2xl font-bold text-theme">Live Månedlig Rangering</h2>
                       <p class="text-sm text-theme-muted mt-1">Oppdateres etter kriger, ikke under.</p>
                    </div>
                    <div class="table-container">
                        <table class="min-w-full">
                            <thead class="bg-theme-muted/50 table-sticky-header">
                                <tr>
                                    ${["#","Navn","Poeng","Bonus","Prosent","Endelig Poeng","Maks Poeng"].map(a=>`<th class="px-4 py-3 text-left text-xs font-semibold text-theme-muted uppercase tracking-wider">${a}</th>`).join("")}
                                </tr>
                            </thead>
                            <tbody class="bg-card">
                                ${l.map(a=>`
                                    <tr class="border-t border-card">
                                        <td class="px-4 py-4 whitespace-nowrap font-bold text-theme">${a.rank}</td>
                                        <td class="px-4 py-4 whitespace-nowrap font-medium text-accent"><a href="#/player/${a.tag.substring(1)}" class="hover:underline font-semibold">${a.name}</a></td>
                                        <td class="px-4 py-4 whitespace-nowrap text-theme">${a.monthly_points}</td>
                                        <td class="px-4 py-4 whitespace-nowrap text-green-500">+${a.monthly_possible_bonus}</td>
                                        <td class="px-4 py-4 whitespace-nowrap text-theme">${a.precent}</td>
                                        <td class="px-4 py-4 whitespace-nowrap font-bold text-success">${a.final_monthly_points}</td>
                                        <td class="px-4 py-4 whitespace-nowrap text-theme-muted">${a.monthly_max_points}</td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
                `}catch{g.renderError(t,"Kunne ikke laste topplister.")}}async function P(e=!0){const t=o("#view-members");e&&y(t);try{const s=await u(x.CLAN_MEMBERS),l=Object.entries(s).map(([a,n])=>({tag:a,...n})).sort((a,n)=>n.trophies-a.trophies);t.innerHTML=`
                <div class="bg-card border border-card rounded-2xl shadow-theme overflow-hidden">
                     <div class="p-6 flex justify-between items-center">
                       <h2 class="text-2xl font-bold text-theme">Klanmedlemmer</h2>
                     </div>
                     <div class="table-container">
                        <table class="min-w-full">
                            <thead class="bg-theme-muted/50 table-sticky-header">
                                <tr>
                                    ${["Liga","Navn","Rolle","Town Hall","CW Stjerner","Rating","Trofeer"].map(a=>`<th class="px-6 py-3 text-left text-xs font-semibold text-theme-muted uppercase tracking-wider">${a}</th>`).join("")}
                                </tr>
                            </thead>
                            <tbody class="bg-card">
                                ${l.map(a=>`
                                    <tr class="border-t border-card">
                                        <td class="px-6 py-4 whitespace-nowrap"><img src="${a.icon_url}" class="h-8 w-8 rounded-md"></td>
                                        <td class="px-6 py-4 whitespace-nowrap font-semibold text-accent"><a href="#/player/${a.tag.substring(1)}" class="hover:underline">${a.name}</a></td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm capitalize text-theme-muted">${a.role}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-theme">TH ${a.townhall}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-theme">${a.sum_stars} ★</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-bold ${g.getRatingColor(a.rating)}">${a.rating}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-theme">${a.trophies} 🏆</td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                     </div>
                </div>
                `}catch{g.renderError(t,"Kunne ikke laste medlemsliste.")}}async function A(e=!0){const t=o("#view-awards");e&&y(t);try{const[s,l,a]=await Promise.all([u(x.MVP),u(x.ROMPIS),u(x.TOP10)]),n=o("#generic-card-template").content.cloneNode(!0).firstElementChild;n.querySelector("h2").textContent=s.name||"N/A",n.querySelector("h3").textContent=s.headline||"",n.querySelector("p:nth-of-type(1)").textContent=s.comment||"",n.querySelector("p:nth-of-type(2)").textContent=s.info||"";const r=o("#generic-card-template").content.cloneNode(!0).firstElementChild;r.querySelector("h2").textContent=l.name||"N/A",r.querySelector("h3").textContent=l.headline||"",r.querySelector("p:nth-of-type(1)").textContent=l.comment||"",r.querySelector("p:nth-of-type(2)").textContent=l.info||"";const d=Object.entries(a).map(([m,p])=>({tag:m,...p})).sort((m,p)=>m.rank-p.rank),i=`
                <div class="bg-card border border-card rounded-2xl shadow-theme overflow-hidden h-full flex flex-col">
                     <div class="p-6">
                       <h2 class="text-2xl font-bold text-theme">Månedens Topp 10</h2>
                     </div>
                     <div class="table-container flex-grow">
                        <table class="min-w-full">
                            <thead class="bg-theme-muted/50 table-sticky-header">
                                <tr>
                                     ${["#","Navn","Poeng","Stjerner","Kommentar"].map(m=>`<th class="px-6 py-3 text-left text-xs font-semibold text-theme-muted uppercase tracking-wider">${m}</th>`).join("")}
                                </tr>
                            </thead>
                            <tbody class="bg-card">
                                 ${d.map(m=>`
                                    <tr class="border-t border-card">
                                        <td class="px-6 py-4 whitespace-nowrap font-bold text-theme">${m.rank}</td>
                                        <td class="px-6 py-4 whitespace-nowrap font-semibold text-accent"><a href="#/player/${m.tag.substring(1)}" class="hover:underline">${m.name}</a></td>
                                        <td class="px-6 py-4 whitespace-nowrap font-bold text-success">${m.points}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-theme">${m.stars} ★</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-theme-muted">${m.comment||""}</td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                     </div>
                </div>`;t.innerHTML=`
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="lg:col-span-1 space-y-8">
                           ${n.outerHTML}
                           ${r.outerHTML}
                        </div>
                        <div class="lg:col-span-2">
                           ${i}
                        </div>
                    </div>`}catch{g.renderError(t,"Kunne ikke laste kåringer.")}}async function U(e){const t=o("#view-player");y(t,"player-profile-skeleton-template");const s=e.startsWith("#")?e.substring(1):e,l=x.PLAYER_BASE+s;try{const a=await u(l),n=Object.keys(a)[0];if(!n)throw new Error("Invalid player response format.");const r=a[n],d=r.name||n;t.innerHTML=`
                <div class="max-w-4xl mx-auto space-y-6">
                    <div class="bg-card border border-card rounded-2xl p-6 text-center shadow-theme">
                        <h2 class="text-4xl font-bold text-theme">${d}</h2>
                        <p class="text-lg text-theme-muted">
                            Town Hall ${r.townhall||"N/A"} | 
                            <span class="${g.getRatingColor(r.player_rating)} font-bold">
                                Rating: ${r.player_rating||"N/A"}
                            </span>
                        </p>
                        ${r.name===null?'<p class="mt-2 text-sm text-warning">Spiller ikke funnet i klanen.</p>':""}
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="bg-card border border-card rounded-xl p-4 text-center">
                            <p class="text-2xl font-semibold text-theme">${parseFloat(r.avrg_stars).toFixed(2)} ★</p>
                            <p class="text-sm text-theme-muted">Snitt Stjerner</p>
                        </div>
                         <div class="bg-card border border-card rounded-xl p-4 text-center">
                            <p class="text-2xl font-semibold text-theme">${parseFloat(r.avrg_attacks_used).toFixed(2)}</p>
                            <p class="text-sm text-theme-muted">Snitt Angrep Brukt</p>
                        </div>
                        <div class="bg-card border border-card rounded-xl p-4 text-center">
                            <p class="text-2xl font-semibold text-theme">${r.sum_attacks_used}</p>
                            <p class="text-sm text-theme-muted">Totalt Angrep Brukt</p>
                        </div>
                        <div class="bg-card border border-card rounded-xl p-4 text-center">
                            <p class="text-2xl font-semibold text-theme">${r.wars_attended}</p>
                            <p class="text-sm text-theme-muted">Kriger Deltatt</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-card border border-card rounded-2xl p-6 text-center">
                             <p class="text-4xl font-bold text-success">${r.sum_points}</p>
                            <p class="text-md text-theme-muted">Totalt Poeng</p>
                        </div>
                        <div class="bg-card border border-card rounded-2xl p-6 text-center">
                             <p class="text-4xl font-bold text-amber-400">${r.sum_stars} ★</p>
                            <p class="text-md text-theme-muted">Totalt Stjerner</p>
                        </div>
                    </div>
                </div>
                `}catch(a){console.error("Error rendering player view:",a),g.renderError(t,`Kunne ikke finne spiller med tag #${s}.`)}}function E(){B();const e=window.location.hash||"#/",[t,s]=e.substring(2).split("/");if(t==="player"&&s)g.showView("player"),U(s);else{const l=O.find(n=>n.id===t)?t:"clan";g.showView(l);const a=(n,r,d=!0)=>{n(d),c.timers.viewPoller=setTimeout(()=>a(n,r,!1),r)};switch(l){case"clan":a(_,3e5+Math.random()*3e5);break;case"live":M();break;case"toplists":a(N,12e4+Math.random()*12e4);break;case"members":a(P,3e5+Math.random()*3e5);break;case"awards":a(A,3e5+Math.random()*3e5);break}}}function B(){Object.values(c.timers).forEach(e=>{clearInterval(e),clearTimeout(e)}),c.timers={},o("#live-indicator-container").classList.remove("in-war")}function V(){const e=O.map(t=>`
                <a href="#/${t.id}" class="nav-link flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-theme-muted transition-colors">
                    ${t.icon}
                    <span>${t.name}</span>
                </a>
            `).join("");o("#desktop-nav").innerHTML=e,o("#mobile-nav").innerHTML=e}function W(){const e=o("#search-input"),t=o("#search-suggestions");e.addEventListener("input",()=>{const s=e.value.toLowerCase();if(s.length<2){t.classList.add("hidden");return}const l=c.clanMembers.filter(a=>a.name.toLowerCase().includes(s));l.length>0?(t.innerHTML=l.slice(0,5).map(a=>`<a href="#/player/${a.tag.substring(1)}" class="block px-4 py-2 text-sm text-theme hover:bg-gray-100 dark:hover:bg-gray-700">${a.name}</a>`).join(""),t.classList.remove("hidden")):t.classList.add("hidden")}),document.addEventListener("click",s=>{e.contains(s.target)||t.classList.add("hidden")}),t.addEventListener("click",()=>{t.classList.add("hidden"),e.value=""})}async function j(){console.log("Polling for theme update...");try{const e=await u(x.THEME);c.warInfo=e.warInfo,(!c.themeLockUntil||new Date(c.themeLockUntil)<new Date)&&(c.themeLockUntil&&(localStorage.removeItem("layoutLockedUntil"),c.themeLockUntil=null,o("#theme-button").disabled=!1,o("#theme-lock-indicator").classList.add("hidden")),localStorage.getItem("themeOverride")||L(e.theme))}catch(e){console.error("Failed to poll for theme:",e)}finally{c.timers.themePoller=setTimeout(j,900*1e3)}}async function D(){V(),H();try{const e=await u(x.CLAN_MEMBERS);c.clanMembers=Object.entries(e).map(([i,m])=>({tag:i,...m})),W();try{const i=await u(x.LIVE_CW);i.war_info&&i.war_info.clanBadge&&(c.clanBadgeUrl=i.war_info.clanBadge,o("#sidebar-logo").src=c.clanBadgeUrl)}catch(i){console.warn("Could not fetch Live CW data on init, using fallback logo.",i)}const t=await u(x.THEME);c.warInfo=t.warInfo;let s="clan";if(t.warInfo&&t.warInfo.endTime){const i=k.parseNonStandardISO(t.warInfo.endTime);if(i&&new Date(i)>new Date){const m=new Date(i).toISOString();m!==localStorage.getItem("layoutLockedUntil")&&(localStorage.setItem("layoutLockedUntil",m),localStorage.removeItem("themeOverride"),window.location.reload())}}else localStorage.removeItem("layoutLockedUntil");const l=localStorage.getItem("themeOverride");if(l?L(l):c.themeLockUntil?L(t.theme||"nowar"):L("light"),!window.location.hash||window.location.hash==="#/"){switch(t.theme){case"clanwarleague":case"clanwar":s="live";break;case"top10":s="awards";break;case"noWar":default:s="clan";break}window.location.hash=`#/${s}`}o("#initial-loader").classList.add("hidden"),E(),j(),window.addEventListener("hashchange",E);const a=o("#mobile-menu"),n=o("#mobile-menu-overlay");o("#hamburger-btn").addEventListener("click",()=>{a.classList.remove("mobile-menu-closed"),a.classList.add("mobile-menu-open"),n.classList.remove("hidden")});const r=()=>{a.classList.remove("mobile-menu-open"),a.classList.add("mobile-menu-closed"),n.classList.add("hidden")};n.addEventListener("click",r),o("#mobile-nav").addEventListener("click",i=>{(i.target.tagName==="A"||i.target.closest("A"))&&r()});const d=o("#modal-container");o("#modal-close-btn").addEventListener("click",()=>d.classList.add("hidden")),d.addEventListener("click",i=>{i.target===d&&d.classList.add("hidden")}),o("#view-live").addEventListener("click",i=>{if(i.target.classList.contains("player-name-link"))return;const m=i.target.closest(".player-card");if(m){const p=m.dataset.tag,v=c.liveWarData[p];if(v){const $=o("#modal-title"),T=o("#modal-content");$.textContent=`Angrepsdetaljer for ${v.name}`,v.attacks&&v.attacks.length>0?T.innerHTML=v.attacks.map((b,h)=>`
                                <div class="p-3 bg-theme-muted rounded-lg">
                                    <h3 class="font-bold text-lg text-accent">Angrep ${h+1}</h3>
                                    <div class="mt-2 text-sm space-y-1">
                                        <p><strong class="text-theme-muted">Motstander:</strong> ${b.defenderName} (TH${b.defenderTownhall})</p>
                                        <p><strong class="text-theme-muted">Stjerner:</strong> ${"★".repeat(b.stars).padEnd(3,"☆")}</p>
                                        <p><strong class="text-theme-muted">Ødeleggelse:</strong> ${b.destructionPercentage}%</p>
                                        <p><strong class="text-theme-muted">Varighet:</strong> ${b.duration} sek</p>
                                    </div>
                                </div>
                                `).join(""):T.innerHTML='<p class="text-theme-muted">Ingen angrep registrert ennå.</p>',d.classList.remove("hidden")}}})}catch{o("#initial-loader").classList.add("hidden"),g.renderError(o("#main-content"),"Kunne ikke laste inn innledende konfigurasjon. Siden kan ikke vises.")}}document.addEventListener("DOMContentLoaded",D);
