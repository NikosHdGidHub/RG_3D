import{Nr as e,Or as t,Sr as n,Tr as r,Ur as i,fr as a,gr as o,i as s,kr as c,l,n as u,o as d,r as f,s as p,t as m}from"./simulation-Bnem3D_K.js";var h=e=>e>=1e3?Math.round(e/10)/100+`k`:String(e),g=e=>e<=0?``:e<1e3?String(Math.floor(e)):e<1e4?(e/1e3).toFixed(1)+`k`:e<1e6?Math.round(e/1e3)+`k`:(e/1e6).toFixed(2)+`M`,_=e=>Math.floor(e).toLocaleString(`ru-RU`),v=e=>e<1e3?Math.round(e)+` м`:e<1e5?(e/1e3).toFixed(2)+` км`:Math.round(e/1e3)+` км`,y=e,ee=c,b=t;function x(e,t){let r=0;for(let i=1;i<t;i++)r+=n.upgradeCost(e,i);return r}function S(e,t){let r=0;for(let i=1;i<=t;i++)r+=n.cosmoUpgradeCost(e,i);return r}function C(e=``){let t={},n=[...y,...ee];for(let r of n){let n=document.getElementById(`${e}${r.key}`);n&&(t[r.key]=+n.value)}let r={};for(let t of b){if(t.special)continue;let n=document.getElementById(`${e}card-${t.id}`);r[t.id]=n?+n.value:0}let i=document.getElementById(`${e}forsage-lvl`),a=document.getElementById(`${e}throttle-select`),o=document.getElementById(`${e}nose-lift-enabled`)?.checked??!1,s=+document.getElementById(`${e}nose-angle`)?.value||45;return{upgrades:t,cards:r,opts:{forsageLevel:i?+i.value:0,boostThrottle:a?.value??`always`,noseLiftEnabled:o,noseLiftAngle:s}}}function w(e=``){let t;try{t=localStorage.getItem(i.key)}catch{return alert(`Не удалось прочитать localStorage`),!1}if(!t)return alert(`Сохранение не найдено (ключ "${i.key}").\nЗапустите игру хотя бы раз, чтобы оно появилось.`),!1;let n;try{n=JSON.parse(t)}catch{return alert(`Сохранение повреждено (не JSON)`),!1}if(!n||typeof n!=`object`)return alert(`Сохранение повреждено (пустой объект)`),!1;let o=n.upgrades;if(o&&typeof o==`object`){let t=o,n=[...y,...ee];for(let r of n){let n=t[r.key];if(typeof n!=`number`||!isFinite(n))continue;let i=`replaces`in r,a=r.maxLevel??(i?6:12),o=Math.max(+!i,Math.min(a,Math.floor(n))),s=document.getElementById(`${e}${r.key}`);s&&(s.value=String(o),s.dispatchEvent(new Event(`input`,{bubbles:!0})))}}let s=a.cardTypeLimit,c=n.cards&&typeof n.cards==`object`?n.cards:{},l=[];for(let t of b){if(t.special)continue;let n=document.getElementById(`${e}card-${t.id}`);if(!n)continue;let r=c[t.id],i=t.once?1:s;n.value=String(typeof r==`number`&&isFinite(r)&&r>0?Math.min(i,Math.floor(r)):0),l.push(n)}for(let e of l)e.dispatchEvent(new Event(`input`,{bubbles:!0}));let u=document.getElementById(`${e}forsage-lvl`);if(u){let e=c.forsage,t=r.forsage.levels.length;u.value=String(typeof e==`number`&&isFinite(e)&&e>0?Math.min(t,Math.floor(e)):0),u.dispatchEvent(new Event(`change`,{bubbles:!0}))}return!0}var T=e,E=c,te=t;function ne(e){let t=document.getElementById(`${e}upgrades-total`);if(t){let n=0;for(let t of T){let r=document.getElementById(`${e}${t.key}`);r&&(n+=x(t,+r.value))}t.textContent=n>0?_(n)+` 💰`:`—`}let n=document.getElementById(`${e}cosmo-total`);if(n){let t=0;for(let n of E){let r=document.getElementById(`${e}${n.key}`);r&&(t+=S(n,+r.value))}n.textContent=t>0?_(t)+` 🌌`:`—`}}function D(e,t=``,r=`all`){let i=document.getElementById(e);if(!i)return;i.innerHTML=``;let a=[],s=r===`all`||r===`base`,c=r===`all`||r===`cosmo`;if(s){for(let e of T){let r=e.maxLevel??12,s=o.initialUpgrades[e.key]??1;i.appendChild(re(e,t,a,{minLvl:1,maxLvl:r,initLvl:s,nextCostFn:t=>n.upgradeCost(e,t),totalCostFn:t=>x(e,t),unitIcon:`💰`}))}let e=document.createElement(`div`);e.className=`row total-row`,e.innerHTML=`
      <label>💎 Итого вложено (монеты)</label>
      <div style="text-align:right">
        <span class="total-val" id="${t}upgrades-total">—</span>
      </div>`,i.appendChild(e)}if(c&&E.length>0){if(r===`all`){let e=document.createElement(`div`);e.className=`section-title`,e.textContent=`🌌 Космо-улучшения`,i.appendChild(e)}for(let e of E){let r=e.maxLevel??6;i.appendChild(re(e,t,a,{minLvl:0,maxLvl:r,initLvl:0,nextCostFn:t=>n.cosmoUpgradeCost(e,t+1),totalCostFn:t=>S(e,t),unitIcon:`🌌`}))}let e=document.createElement(`div`);e.className=`row total-row`,e.innerHTML=`
      <label>🌌 Итого вложено (космо)</label>
      <div style="text-align:right">
        <span class="total-val" id="${t}cosmo-total">—</span>
      </div>`,i.appendChild(e)}for(let e of a)e()}function re(e,t,n,r){let{minLvl:i,maxLvl:a,initLvl:o,nextCostFn:s,totalCostFn:c,unitIcon:l}=r,u=document.createElement(`div`);u.className=`row`,u.innerHTML=`
    <label>${e.icon} ${e.name}</label>
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      <input type="range" id="${t}${e.key}" min="${i}" max="${a}" value="${o}" style="flex:1;min-width:120px">
      <span class="value" id="${t}${e.key}-val">${o}</span>
      <span class="next-cost" id="${t}${e.key}-next" title="Стоимость следующего уровня"></span>
      <span class="spent" id="${t}${e.key}-spent" title="Всего вложено в этот апгрейд"></span>
    </div>`;let d=u.querySelector(`input`),f=u.querySelector(`.value`),p=u.querySelector(`.next-cost`),m=u.querySelector(`.spent`),v=()=>{let e=+d.value;if(f.textContent=String(e),e>=a)p.textContent=`MAX`,p.classList.add(`maxed`),p.title=`Максимальный уровень`;else{let t=s(e);p.textContent=`→ ${h(t)} ${l}`,p.classList.remove(`maxed`),p.title=`Стоимость уровня ${e+1}: ${_(t)}`}let n=c(e);m.textContent=n>0?`Σ ${g(n)} ${l}`:``,m.title=`Всего вложено: ${_(n)}`,ne(t)};return d.addEventListener(`input`,v),n.push(v),u}function O(e){return e.once?1:a.cardTypeLimit}var k={};for(let e of te)e.special||(k[e.family]||(k[e.family]=[])).push(e);function A(e,t){let n=document.getElementById(`${t}card-${e.id}`);return n?Math.max(0,Math.floor(+n.value)||0):0}function ie(e,t){let n=0;for(let r of k[e]||[])n+=A(r,t);return n}function j(e,t){let n=O(e);if((k[e.family]||[]).length<2)return n;let r=ie(e.family,t)-A(e,t),i=a.cardTypeLimit-r;return Math.max(0,Math.min(n,i))}function ae(e,t){let n=document.getElementById(`${t}card-${e.id}`);if(!n)return;let r=j(e,t),i=Math.max(0,Math.floor(+n.value)||0),o=Math.min(i,r);o!==i&&(n.value=String(o)),n.max=String(r),n.disabled=r===0,n.classList.toggle(`at-max`,r>0&&o>=r),n.title=r===0?`Семейство «${e.family}» уже заняло лимит ${a.cardTypeLimit}`:e.once?`Разовая карточка — только 1 копия`:``}function oe(e,t){for(let n of k[e]||[])n.condition||document.getElementById(`${t}card-${n.id}`)&&ae(n,t)}function M(e){let t=document.getElementById(`${e}forsage-lvl`),n=document.getElementById(`${e}card-engine_forsage`);if(!t||!n)return;let r=+t.value>=1,i=Math.floor(+n.value)||0;r||(n.value=`0`),n.max=r?`1`:`0`,n.disabled=!r,n.classList.toggle(`at-max`,r&&(Math.floor(+n.value)||0)>=1),n.title=r?`Разовая карточка — только 1 копия`:`Требует способность «Форсаж»`,(Math.floor(+n.value)||0)!==i&&n.dispatchEvent(new Event(`input`,{bubbles:!0}))}function N(e,t=``){let n=document.getElementById(e);if(n){n.innerHTML=``;for(let e of te){if(e.special)continue;let r=document.createElement(`div`);r.className=`row`;let i=e.variant?`${e.name} · ${e.variant}`:e.name,a=O(e),o=e.once?`Разовая карточка — только 1 копия`:``;r.innerHTML=`
      <label>${e.icon} ${i}</label>
      <div style="display:flex;align-items:center;gap:12px">
        <input type="number" class="input-num" id="${t}card-${e.id}"
          min="0" max="${a}" value="0"
          data-family="${e.family}" title="${o}">
        <span class="hint">${e.desc_buff||``}${e.desc_debuff?` / `+e.desc_debuff:``}</span>
      </div>`,n.appendChild(r)}n.addEventListener(`input`,e=>{let n=e.target;if(!(n instanceof HTMLInputElement)||!n.id.startsWith(`${t}card-`))return;let r=n.dataset.family;if(!r)return;let i=(k[r]||[]).find(e=>`${t}card-${e.id}`===n.id);if(i&&i.condition){let e=+n.max||0;Math.floor(+n.value)>e&&(n.value=String(e))}else{if(i){let e=j(i,t);Math.floor(+n.value)>e&&(n.value=String(e))}oe(r,t)}})}}function P(e,t=``){let n=document.getElementById(e);if(!n)return;n.innerHTML=``;let r=document.createElement(`div`);r.className=`row`,r.innerHTML=`
    <label>🚀 Форсаж (уровень)</label>
    <select id="${t}forsage-lvl">
      <option value="0">0 — нет способности</option>
      <option value="1">1 — ×2 тяга, 3с, КД 60</option>
      <option value="2">2 — ×3 тяга, 4с, КД 45</option>
    </select>`,n.appendChild(r);let i=document.createElement(`div`);i.className=`row`,i.innerHTML=`
    <label>Стратегия PUSH</label>
    <select id="${t}throttle-select">${u.map(e=>`<option value="${e}">${m[e]||e}</option>`).join(``)}</select>`,n.appendChild(i);let a=document.createElement(`div`);a.className=`row`,a.innerHTML=`
    <label>Авто-подъём носа</label>
    <label class="check-label">
      <input type="checkbox" id="${t}nose-lift-enabled" checked>
      <span class="hint">Пока есть тяга — держать нос на угле N</span>
    </label>`,n.appendChild(a);let o=document.createElement(`div`);o.className=`row`,o.innerHTML=`
    <label>Угол подъёма</label>
    <div style="display:flex;align-items:center;gap:12px">
      <input type="range" id="${t}nose-angle" min="0" max="90" step="1" value="45" style="flex:1">
      <span class="value" id="${t}nose-angle-val">45°</span>
    </div>`,n.appendChild(o);let s=document.getElementById(`${t}forsage-lvl`);if(s){let e=()=>M(t);s.addEventListener(`input`,e),s.addEventListener(`change`,e)}M(t);let c=document.getElementById(`${t}nose-angle`),l=document.getElementById(`${t}nose-angle-val`),d=document.getElementById(`${t}nose-lift-enabled`);c&&l&&d&&(c.addEventListener(`input`,()=>{l.textContent=c.value+`°`}),d.addEventListener(`change`,()=>{c.disabled=!d.checked,l.style.opacity=d.checked?`1`:`0.3`}))}function F(e,t){let n=document.getElementById(e);if(!n)return;n.innerHTML=``;let r=document.createElement(`div`);r.id=`${e}-upg`,n.appendChild(r),D(`${e}-upg`,t);let i=document.createElement(`div`);i.id=`${e}-cards`,i.style.marginTop=`12px`,n.appendChild(i),N(`${e}-cards`,t);let a=document.createElement(`div`);a.id=`${e}-opts`,a.style.marginTop=`12px`,n.appendChild(a),P(`${e}-opts`,t)}var se=`summary-output`,ce=[`upgrades-base-inputs`,`upgrades-cosmo-inputs`,`cards-inputs`,`opts-inputs`];function le(e,t){let n=``;for(let r of p(e,t)){n+=`<div class="summary-section">`,n+=`<div class="summary-section-title">${r.title}</div>`;for(let e of r.rows)n+=l(e,`summary`);n+=`</div>`}return n}function I(){let e=document.getElementById(se);if(!e)return;let{upgrades:t,cards:n}=C(``);e.innerHTML=le(t,n)}var L=!1;function ue(){if(I(),L)return;L=!0;let e=()=>I();for(let t of ce){let n=document.getElementById(t);n&&(n.addEventListener(`input`,e),n.addEventListener(`change`,e))}}var R=null,de=class{size;workers=[];queue=[];pending=new Map;nextId=0;useFallback=!1;constructor(e){let t=typeof navigator<`u`&&navigator.hardwareConcurrency||2;this.size=Math.max(1,Math.min(e||t,4)),this._createWorkers(),this.workers.length===0&&(console.warn(`[optPool] воркеры недоступны — работаю на main thread`),this.useFallback=!0)}_createWorkers(){for(let e=0;e<this.size;e++){let t={busy:!1,id:e,worker:null};if(!this._spawn(t))break;this.workers.push(t)}}_spawn(e){try{let t=new Worker(new URL(new URL(`optWorker-CeQ5Sn09.js`,import.meta.url).href,``+import.meta.url),{type:`module`});return e.worker=t,t.onmessage=t=>this._onMessage(e,t),t.onerror=t=>this._onError(e,t),!0}catch(e){return console.warn(`[optPool] worker spawn failed`,e),!1}}_onMessage(e,t){let n=t.data||{},{type:r,requestId:i}=n,a=this.pending.get(i);if(a){if(r===`progress`){let e=n;a.onProgress?.(e.done,e.total,e.msg)}else{if(this.pending.delete(i),e.busy=!1,r===`result`){let e=n;a.resolve({bestDistance:e.bestDistance??0,bestStrategy:e.bestStrategy??``,bestAngle:e.bestAngle??0})}else if(r===`error`){let e=n;a.reject(Error(e.message||`worker error`))}this._pump()}}}_onError(e,t){console.error(`[optPool] worker error`,t);for(let[t,n]of this.pending)if(n.slot===e){this.pending.delete(t),n.reject(Error(`worker error`));break}e.busy=!1;try{e.worker?.terminate(),this._spawn(e)}catch{}this._pump()}_pump(){if(!this.useFallback)for(let e of this.workers){if(e.busy)continue;let t=this.queue.shift();if(!t)return;e.busy=!0,this.pending.set(t.id,{...t,slot:e}),e.worker?.postMessage({type:`findOptimum`,requestId:t.id,upgrades:t.upgrades,cards:t.cards,opts:t.opts})}}async _runInMainThread(e){let t=await f(e.upgrades,e.cards,e.opts,e.onProgress);return{bestDistance:t.best.distance,bestStrategy:t.best.strategy,bestAngle:t.best.angle}}findOptimum(e,t,n,r){return this.useFallback?this._runInMainThread({upgrades:e,cards:t,opts:n,onProgress:r}):new Promise((i,a)=>{let o=++this.nextId;this.queue.push({id:o,upgrades:e,cards:t,opts:n,onProgress:r,resolve:i,reject:a}),this._pump()})}};function z(){return R||=new de,R}var B=t,V=[{min:60,label:`Дизбаланс сильный бафф`,cls:`status-imbalance-strong`},{min:40,label:`Сильный бафф`,cls:`status-strong`},{min:25,label:`Идеальный баланс`,cls:`status-ideal`},{min:10,label:`Слабый бафф`,cls:`status-weak`},{min:-1/0,label:`Дизбаланс слабый бафф`,cls:`status-imbalance-weak`}];function fe(e){for(let t of V)if(e>=t.min)return t;return V[V.length-1]}var H={key:null,distance:0},U=!1,W=!1,G=0;function pe(){G++}function K(e){document.querySelectorAll(`.card-gain-btn, .calc-all-btn`).forEach(t=>{t.disabled=e})}function q(e,t,n){return JSON.stringify({upgrades:e,cards:t,forsageLevel:n.forsageLevel||0})}async function J(e,t,n,r){return(await z().findOptimum(e,t,n,r??void 0)).bestDistance}function Y(){if(W)return;let e=document.getElementById(`single-results`);e&&(W=!0,e.addEventListener(`click`,e=>{let t=e.target;if(!(t instanceof Element))return;let n=t.closest(`.card-gain-btn`);if(n){me(n);return}let r=t.closest(`.calc-all-btn`);r&&he(r)}))}async function me(e){if(U)return;U=!0;let t=e.textContent??``;K(!0);try{let{upgrades:t,cards:n,opts:r}=C(``),i=e.dataset.forsage===`1`,a=e.dataset.cardId,o=n,s=r;if(i)s={...r,forsageLevel:(r.forsageLevel||0)+1};else if(a)o={...n,[a]:(n[a]||0)+1};else return;let c=performance.now(),l=q(t,n,r),u;H.key===l?u=H.distance:(e.textContent=`⏳ База…`,u=await J(t,n,r,t=>{e.textContent=`⏳ База · ${t} · ${Math.round((performance.now()-c)/1e3)}с`}),H={key:l,distance:u});let d=performance.now();e.textContent=`⏳ С картой…`,X(e,await J(t,o,s,t=>{e.textContent=`⏳ С картой · ${t} · ${Math.round((performance.now()-d)/1e3)}с`}),u)}catch(n){console.error(`Не удалось посчитать прирост:`,n),e.isConnected&&(e.textContent=t,e.disabled=!1)}finally{U=!1,K(!1)}}async function he(e){if(U)return;U=!0;let t=++G,n=e.textContent??``;K(!0);try{let{upgrades:i,cards:o,opts:s}=C(``),c=z(),l=q(i,o,s),u=(async()=>{if(H.key===l)return H.distance;e.textContent=`⏳ База…`;let t=await J(i,o,s,null);return H={key:l,distance:t},t})(),d={};for(let e of B)e.special||(d[e.family]=(d[e.family]||0)+(o[e.id]||0));let f=[];for(let e of B){if(e.special)continue;let t=o[e.id]||0;(d[e.family]||0)>=a.cardTypeLimit||e.once&&t>=1||f.push({type:`card`,cardId:e.id,nextCards:{...o,[e.id]:t+1},nextOpts:s})}let p=s.forsageLevel||0;if(p<r.forsage.levels.length&&f.push({type:`forsage`,nextCards:o,nextOpts:{...s,forsageLevel:p+1}}),f.length===0){e.textContent=`— нечего считать —`,setTimeout(()=>{e.isConnected&&(e.textContent=n,e.disabled=!1)},1200);return}let m=0,h=f.length;e.textContent=`⏳ 0/${h}`;let g=f.map(n=>c.findOptimum(i,n.nextCards,n.nextOpts,void 0).then(async r=>{let i=await u;t===G&&(m++,e.textContent=`⏳ ${m}/${h}`,ge(n,r.bestDistance,i))}).catch(r=>{console.error(`[calcAll] task failed`,n,r),t===G&&(m++,e.textContent=`⏳ ${m}/${h} (ошибка)`)}));try{await u}catch(t){console.error(`[calcAll] base failed`,t),e.isConnected&&(e.textContent=`❌ Ошибка базового расчёта`);return}await Promise.all(g),t===G&&e.isConnected&&(e.textContent=`✅ Готово (${h})`,setTimeout(()=>{e.isConnected&&(e.textContent=n,e.disabled=!1)},1500))}catch(t){console.error(`[calcAll]`,t),e.isConnected&&(e.textContent=n,e.disabled=!1)}finally{U=!1,K(!1)}}function X(e,t,n){if(!e||!e.isConnected)return;let r=e.closest(`td`);if(!r)return;let i=t-n,a=n>0?i/n*100:0,o=i>=0?`+`:``,s=fe(a);r.innerHTML=`
    <span class="${s.cls}">${o}${v(i)}</span>
    <span class="${s.cls}" style="margin-left:6px">(${o}${a.toFixed(1)}%)</span>`,r.title=`Оптимум базы: ${v(n)} → с картой: ${v(t)} · ${s.label}`;let c=r.closest(`tr`),l=c&&c.querySelector(`.status-cell`);l&&(l.innerHTML=`<span class="${s.cls}">${s.label}</span>`,l.title=`Прирост: ${a.toFixed(1)}%`)}function ge(e,t,n){let r=e.type===`forsage`?`.card-gain-btn[data-forsage="1"]`:`.card-gain-btn[data-card-id="${e.cardId}"]`,i=document.querySelector(`#single-results ${r}`);i&&X(i,t,n)}Y();var Z=e=>e>=1e6?(e/1e6).toFixed(1)+`M`:e>=1e3?Math.round(e/1e3)+`к`:String(Math.round(e)),_e=e=>e<1e3?Math.round(e)+` м`:e<1e4?(e/1e3).toFixed(2)+` км`:Math.round(e/1e3)+` км`;function Q(e){let t=0,n=0,r=0;for(let i=0;i<e.length;i++){let[a,o]=e[i];a>t&&(t=a),o>n&&(n=o,r=i)}t<=0&&(t=1),n<=0&&(n=1),t*=1.05,n*=1.08;let i=e=>55+e/t*365,a=e=>20+(1-e/n)*220,o=e.map(([e,t])=>`${i(e).toFixed(1)},${a(t).toFixed(1)}`).join(` `),s=[];for(let e=0;e<=4;e++){let n=t*e/4,r=i(n);s.push(`<line x1="${r}" y1="20" x2="${r}" y2="240" stroke="rgba(255,255,255,0.06)"/>
      <text x="${r}" y="255" fill="rgba(255,255,255,0.45)" font-size="10" text-anchor="middle">${Z(n)}</text>`)}let c=[];for(let e=0;e<=4;e++){let t=n*e/4,r=a(t);c.push(`<line x1="55" y1="${r}" x2="420" y2="${r}" stroke="rgba(255,255,255,0.06)"/>
      <text x="49" y="${r+3}" fill="rgba(255,255,255,0.45)" font-size="10" text-anchor="end">${Z(t)}</text>`)}let l=e[0],u=e[e.length-1],d=e[r];return`<svg viewBox="0 0 440 280" class="chart-svg">
    ${s.join(``)}
    ${c.join(``)}
    <polyline points="${o}" fill="none" stroke="#ffd75e" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="${i(l[0])}" cy="${a(l[1])}" r="4" fill="#7dffa0"/>
    <circle cx="${i(u[0])}" cy="${a(u[1])}" r="4" fill="#ff7a7a"/>
    <circle cx="${i(d[0])}" cy="${a(d[1])}" r="4" fill="#ffd75e"/>
    <text x="${i(d[0])}" y="${a(d[1])-8}" fill="#ffd75e" font-size="10" font-weight="700" text-anchor="middle">${Z(d[1])}</text>
    <text x="237.5" y="272" fill="rgba(255,255,255,0.55)" font-size="11" text-anchor="middle">Дальность, м</text>
    <text x="14" y="130" fill="rgba(255,255,255,0.55)" font-size="11" text-anchor="middle" transform="rotate(-90 14 130)">Высота, м</text>
  </svg>`}function ve(e,t){let n=0;for(let t of e)t.distance>n&&(n=t.distance);n<=0&&(n=1),n*=1.08;let r=e=>55+e/90*365,i=e=>20+(1-e/n)*220,a=e.map(e=>`${r(e.angle).toFixed(1)},${i(e.distance).toFixed(1)}`).join(` `),o=[];for(let e=0;e<=90;e+=15){let t=r(e);o.push(`<line x1="${t}" y1="20" x2="${t}" y2="240" stroke="rgba(255,255,255,0.06)"/>
      <text x="${t}" y="255" fill="rgba(255,255,255,0.45)" font-size="10" text-anchor="middle">${e}°</text>`)}let s=[];for(let e=0;e<=4;e++){let t=n*e/4,r=i(t);s.push(`<line x1="55" y1="${r}" x2="420" y2="${r}" stroke="rgba(255,255,255,0.06)"/>
      <text x="49" y="${r+3}" fill="rgba(255,255,255,0.45)" font-size="10" text-anchor="end">${Z(t)}</text>`)}return`<svg viewBox="0 0 440 280" class="chart-svg">
    ${o.join(``)}
    ${s.join(``)}
    <polyline points="${a}" fill="none" stroke="#c38bff" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="${r(t.angle)}" cy="${i(t.distance)}" r="5" fill="#ffd75e"/>
    <text x="${r(t.angle)}" y="${i(t.distance)-10}" fill="#ffd75e" font-size="10" font-weight="700" text-anchor="middle">${t.angle}° · ${_e(t.distance)}</text>
    <text x="237.5" y="272" fill="rgba(255,255,255,0.55)" font-size="11" text-anchor="middle">Угол подъёма носа, °</text>
    <text x="14" y="130" fill="rgba(255,255,255,0.55)" font-size="11" text-anchor="middle" transform="rotate(-90 14 130)">Дальность, м</text>
  </svg>`}var ye=e,be=c,xe=t;function Se(e){return e.thrustUsed?e.boostEndAngle===null?`Тяга не отключалась`:`Угол в конце тяги: <b>${e.boostEndAngle.toFixed(0)}°</b>`:`Тяга не использовалась`}function Ce(e,t,r,i){pe();let a=document.getElementById(`single-results`);if(!a)return;let o=Se(e),s=e.maxTimeReached?`<br><span style="color:#ffb84d">⚠️ Полёт не завершился за ${e.time.toFixed(0)} с — результат обрезан</span>`:``,c=i.boostThrottle??`always`,l=m[c]||c;a.innerHTML=`
    <div class="result-box">
      <div class="result-item">
        <div class="result-value">${v(e.distance)}</div>
        <div class="result-label">Дальность</div>
      </div>
      <div class="result-item">
        <div class="result-value">${v(e.maxAltitude)}</div>
        <div class="result-label">Макс. высота</div>
      </div>
      <div class="result-item">
        <div class="result-value">${e.time.toFixed(1)} с</div>
        <div class="result-label">Время полёта</div>
      </div>
    </div>
    <div style="opacity:0.6;font-size:12px;margin-top:8px;text-align:center;line-height:1.6">
      PUSH: <b>${l}</b> ·
      Монет: <b style="color:#ffd75e">${Math.floor(e.distance)}</b> ·
      Макс. скорость: <b>${Math.round(e.maxSpeed)} м/с</b> ·
      Топливо сожжено: <b>${e.fuelUsed.toFixed(1)} с</b><br>
      ${o}${s}
    </div>`;let u=[];for(let a of ye){let o=t[a.key];if(o>=(a.maxLevel??12)){u.push(`<tr>
        <td>${a.icon} ${a.name}</td>
        <td class="num">${o}</td>
        <td class="num neutral">MAX</td>
        <td class="num neutral">—</td>
        <td class="num neutral">—</td>
      </tr>`);continue}let s=n.upgradeCost(a,o),c=d({...t,[a.key]:o+1},r,i).distance-e.distance,l=s>0?c/s*1e3:0,f=l>30?`good`:l>5?``:`bad`;u.push(`<tr>
      <td>${a.icon} ${a.name}</td>
      <td class="num">${o}</td>
      <td class="num">${h(s)}</td>
      <td class="num ${f}">${c>=0?`+`:``}${v(c)}</td>
      <td class="num ${f}">${l.toFixed(1)}</td>
    </tr>`)}a.innerHTML+=`
    <div class="section-title">Что купить дальше? (следующий уровень)</div>
    <table>
      <thead><tr>
        <th>Апгрейд</th>
        <th style="text-align:right">Ур.</th>
        <th style="text-align:right">Цена</th>
        <th style="text-align:right">Прирост</th>
        <th style="text-align:right">м / 1000💰</th>
      </tr></thead>
      <tbody>${u.join(``)}</tbody>
    </table>`;let f=[];for(let a of be){let o=t[a.key]||0;if(o>=(a.maxLevel??6)){f.push(`<tr>
      <td>${a.icon} ${a.name}</td>
      <td class="num">${o}</td>
      <td class="num neutral">MAX</td>
      <td class="num neutral">—</td>
      <td class="num neutral">—</td>
    </tr>`);continue}let s=n.cosmoUpgradeCost(a,o+1),c=d({...t,[a.key]:o+1},r,i).maxAltitude-e.maxAltitude,l=s>0?c/s*1e3:0,u=c>0?`good`:c<0?`bad`:``;f.push(`<tr>
    <td>${a.icon} ${a.name}</td>
    <td class="num">${o}</td>
    <td class="num">${h(s)}</td>
    <td class="num ${u}">${c>=0?`+`:``}${v(c)}</td>
    <td class="num ${u}">${l.toFixed(1)}</td>
  </tr>`)}a.innerHTML+=`
  <div class="section-title">🌌 Космо-улучшения (следующий уровень · прирост высоты)</div>
  <table>
    <thead><tr>
      <th>Улучшение</th>
      <th style="text-align:right">Ур.</th>
      <th style="text-align:right">Цена</th>
      <th style="text-align:right">Прирост высоты</th>
      <th style="text-align:right">м / 1000🌌</th>
    </tr></thead>
    <tbody>${f.join(``)}</tbody>
  </table>`,a.innerHTML+=we(e,t,r,i),Y();let p=document.getElementById(`charts-row`);p&&(p.style.display=`grid`,p.innerHTML=`
      <div class="chart-container">
        <div class="chart-title">✈️ Траектория полёта</div>
        ${Q(e.trajectory)}
      </div>`)}function we(e,t,n,i){let o=a.cardTypeLimit,s=[],c={};for(let e of xe)e.special||(c[e.family]=(c[e.family]||0)+(n[e.id]||0));for(let e of xe){if(e.special)continue;let t=n[e.id]||0,r=(c[e.family]||0)>=o,i=e.once&&t>=1,a=e.variant?`${e.name} · ${e.variant}`:e.name;r||i?s.push(`<tr>
        <td>${e.icon} ${a}</td>
        <td class="num">${t}</td>
        <td class="num neutral" style="text-align:right">MAX</td>
        <td class="num neutral status-cell">—</td>
      </tr>`):s.push(`<tr>
      <td>${e.icon} ${a}</td>
      <td class="num">${t}</td>
      <td class="num" style="text-align:right">
        <button class="mini-btn card-gain-btn" data-card-id="${e.id}"
          title="Сравнить оптимум текущего билда и билда с +1 этой карточкой. ~1–3 с.">
          🔍 Найти прирост
        </button>
      </td>
      <td class="num status-cell" title="Появится после расчёта">—</td>
    </tr>`)}let l=i.forsageLevel||0,u=r.forsage.levels.length;return l>=u?s.push(`<tr>
      <td>🚀 Форсаж</td>
      <td class="num">${l}/${u}</td>
      <td class="num neutral" style="text-align:right">MAX</td>
      <td class="num neutral status-cell">—</td>
    </tr>`):s.push(`<tr>
      <td>🚀 Форсаж</td>
      <td class="num">${l}/${u}</td>
      <td class="num" style="text-align:right">
        <button class="mini-btn card-gain-btn" data-forsage="1"
          title="Сравнить оптимум текущего билда и билда со следующим уровнем форсажа.">
          🔍 Найти прирост
        </button>
      </td>
      <td class="num status-cell" title="Появится после расчёта">—</td>
    </tr>`),`
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin:20px 0 10px">
    <div class="section-title" style="margin:0">Влияние карточек (+1 копия · прирост по оптимуму)</div>
    <button class="mini-btn calc-all-btn"
      title="Прогнать все карточки через оптимизацию в фоновом режиме (Web Workers). Займёт несколько секунд.">
      🚀 Просчитать всё
    </button>
  </div>
  <table>
    <thead><tr>
      <th>Карточка</th>
      <th style="text-align:right">Копий</th>
      <th style="text-align:right">Прирост (оптимум)</th>
      <th style="text-align:right">Статус</th>
    </tr></thead>
    <tbody>${s.join(``)}</tbody>
  </table>`}function Te(e){let{best:t,coarseResults:n,fineResults:r,noLift:i}=e,a=document.getElementById(`single-results`);if(!a)return;let o=t.distance-i.distance,s=i.distance>0?o/i.distance*100:0,c={};for(let e of n)(!c[e.strategy]||e.distance>c[e.strategy].distance)&&(c[e.strategy]=e);for(let e of r)(!c[e.strategy]||e.distance>c[e.strategy].distance)&&(c[e.strategy]=e);let l=Object.values(c).sort((e,t)=>t.distance-e.distance).map(e=>{let n=e.strategy===t.strategy;return`<tr class="${n?`winner`:``}">
        <td>${n?`🥇`:``} ${m[e.strategy]||e.strategy}</td>
        <td class="num">${e.angle}°</td>
        <td class="num ${n?`good`:``}">${v(e.distance)}</td>
      </tr>`}).join(``),u=[...n,...r].filter(e=>e.truncated).length,d=u>0?`<div style="color:#ffb84d;font-size:11px;margin-top:6px">⚠️ ${u} симуляций обрезаны по времени</div>`:``,f=m[t.strategy]||t.strategy;a.innerHTML=`
    <div class="opt-summary">
      <div class="big">🎯 Оптимум: ${t.angle}°</div>
      <div class="sub">
        Самое эффективное управление:
        <b style="color:#ffd75e">${f}</b>
      </div>
      <div class="sub">Дальность: <b style="color:#c38bff">${v(t.distance)}</b></div>
      <div class="sub">
        Без подъёма: ${v(i.distance)}
        · <span class="gain">${o>=0?`+`:``}${v(o)} (${s>0?`+`:``}${s.toFixed(1)}%)</span>
      </div>
      ${d}
    </div>

    <div class="result-box" style="margin-top:12px">
      <div class="result-item">
        <div class="result-value purple">${v(t.distance)}</div>
        <div class="result-label">Дальность (оптимум)</div>
      </div>
      <div class="result-item">
        <div class="result-value">${v(t.result.maxAltitude)}</div>
        <div class="result-label">Макс. высота</div>
      </div>
      <div class="result-item">
        <div class="result-value">${t.result.time.toFixed(1)} с</div>
        <div class="result-label">Время полёта</div>
      </div>
    </div>

    <div style="opacity:0.6;font-size:12px;margin-top:8px;text-align:center;line-height:1.6">
      Монет: <b style="color:#ffd75e">${Math.floor(t.distance)}</b> ·
      Макс. скорость: <b>${Math.round(t.result.maxSpeed)} м/с</b> ·
      Топливо сожжено: <b>${t.result.fuelUsed.toFixed(1)} с</b><br>
      ${Ee(t.result)}
    </div>

    <div class="section-title">Сравнение стратегий (лучший угол для каждой)</div>
    <table>
      <thead><tr>
        <th>Стратегия</th>
        <th style="text-align:right">Лучший угол</th>
        <th style="text-align:right">Дальность</th>
      </tr></thead>
      <tbody>${l}</tbody>
    </table>`;let p=[...n.filter(e=>e.strategy===t.strategy),...r].sort((e,t)=>e.angle-t.angle).map(e=>({angle:e.angle,distance:e.distance})),h=document.getElementById(`charts-row`);h&&(h.style.display=`grid`,h.innerHTML=`
      <div class="chart-container">
        <div class="chart-title">✈️ Траектория (оптимум ${t.angle}°, ${f})</div>
        ${Q(t.result.trajectory)}
      </div>
      <div class="chart-container">
        <div class="chart-title">📈 Дальность vs угол (${f})</div>
        ${ve(p,{angle:t.angle,distance:t.distance})}
      </div>`)}function Ee(e){return e.thrustUsed?e.boostEndAngle===null?`Тяга не отключалась`:`Угол в конце тяги: <b>${e.boostEndAngle.toFixed(0)}°</b>`:`Тяга не использовалась`}function De(e,t){let n=document.getElementById(`cmp-results`);if(!n)return;let r=t.distance-e.distance,i=e.distance>0?r/e.distance*100:0,a=Math.abs(i)<.5?`neutral`:r>0?`good`:`bad`;n.innerHTML=`
    <div class="result-box" style="grid-template-columns: repeat(3, 1fr)">
      <div class="result-item">
        <div class="result-value">${v(e.distance)}</div>
        <div class="result-label">A</div>
      </div>
      <div class="result-item">
        <div class="result-value">${v(t.distance)}</div>
        <div class="result-label">B</div>
      </div>
      <div class="result-item">
        <div class="result-value ${a}">${r>0?`+`:``}${v(r)}<br>
          <span style="font-size:18px">${i>0?`+`:``}${i.toFixed(1)}%</span>
        </div>
        <div class="result-label">B относительно A</div>
      </div>
    </div>
    <table style="margin-top:16px">
      <thead><tr><th></th><th style="text-align:right">A</th><th style="text-align:right">B</th></tr></thead>
      <tbody>
        <tr><td>Дальность</td><td class="num">${v(e.distance)}</td><td class="num">${v(t.distance)}</td></tr>
        <tr><td>Макс. высота</td><td class="num">${v(e.maxAltitude)}</td><td class="num">${v(t.maxAltitude)}</td></tr>
        <tr><td>Время полёта</td><td class="num">${e.time.toFixed(1)} с</td><td class="num">${t.time.toFixed(1)} с</td></tr>
        <tr><td>Макс. скорость</td><td class="num">${Math.round(e.maxSpeed)} м/с</td><td class="num">${Math.round(t.maxSpeed)} м/с</td></tr>
      </tbody>
    </table>`}var $=C;document.querySelectorAll(`.tab`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.tab`).forEach(e=>e.classList.remove(`active`)),document.querySelectorAll(`.tab-content`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.tab;t&&document.getElementById(t)?.classList.add(`active`)})}),D(`upgrades-base-inputs`,``,`base`),D(`upgrades-cosmo-inputs`,``,`cosmo`),N(`cards-inputs`),P(`opts-inputs`),F(`upA`,`A-`),F(`upB`,`B-`),ue(),document.getElementById(`sim-btn`).addEventListener(`click`,()=>{let{upgrades:e,cards:t,opts:n}=$(``);Ce(d(e,t,n),e,t,n)});async function Oe(e,t,n){let r=document.getElementById(t),i=document.getElementById(n),a=r.textContent??``;r.textContent=`⏳ 0…`,r.disabled=!0,i.disabled=!0,await new Promise(e=>setTimeout(e,20));try{let{upgrades:t,cards:n,opts:i}=$(``),a=performance.now();Te(await e(t,n,i,(e,t,n)=>{let i=Math.round((performance.now()-a)/1e3);r.textContent=`⏳ ${e}/${t} · ${i}с`,n&&(r.title=n)}))}finally{r.textContent=a,r.disabled=!1,i.disabled=!1,r.title=``}}document.getElementById(`opt-btn`).addEventListener(`click`,()=>Oe(f,`opt-btn`,`opt-exact-btn`)),document.getElementById(`opt-exact-btn`).addEventListener(`click`,()=>Oe(s,`opt-exact-btn`,`opt-btn`)),document.getElementById(`cmp-btn`).addEventListener(`click`,()=>{let e=$(`A-`),t=$(`B-`);De(d(e.upgrades,e.cards,e.opts),d(t.upgrades,t.cards,t.opts))}),document.getElementById(`load-save-btn`).addEventListener(`click`,()=>{w(``)}),document.querySelectorAll(`[data-load]`).forEach(e=>{e.addEventListener(`click`,()=>{w(e.dataset.load)})});