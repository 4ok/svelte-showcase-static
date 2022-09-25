(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function E(){}const we=t=>t;function De(t,e){for(const n in e)t[n]=e[n];return t}function $e(t){return t()}function ce(){return Object.create(null)}function q(t){t.forEach($e)}function ke(t){return typeof t=="function"}function I(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let G;function ae(t,e){return G||(G=document.createElement("a")),G.href=e,t===G.href}function Pe(t){return Object.keys(t).length===0}function Ee(t,e,n,r){if(t){const s=Ce(t,e,n,r);return t[0](s)}}function Ce(t,e,n,r){return t[1]&&r?De(n.ctx.slice(),t[1](r(e))):n.ctx}function Le(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],i=Math.max(e.dirty.length,s.length);for(let o=0;o<i;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function ze(t,e,n,r,s,l){if(s){const i=Ce(e,n,r,l);t.p(i,s)}}function Te(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function We(t){let e=!1;return function(...n){e||(e=!0,t.call(this,...n))}}const Se=typeof window<"u";let Be=Se?()=>window.performance.now():()=>Date.now(),ie=Se?t=>requestAnimationFrame(t):E;const H=new Set;function Oe(t){H.forEach(e=>{e.c(t)||(H.delete(e),e.f())}),H.size!==0&&ie(Oe)}function Ue(t){let e;return H.size===0&&ie(Oe),{promise:new Promise(n=>{H.add(e={c:t,f:n})}),abort(){H.delete(e)}}}function w(t,e){t.appendChild(e)}function Ae(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ge(t){const e=b("style");return Ke(Ae(t),e),e.sheet}function Ke(t,e){return w(t.head||t,e),e.sheet}function $(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function re(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function L(){return M(" ")}function Ve(){return M("")}function se(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Je(t){return Array.from(t.childNodes)}function W(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Qe(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let K;function Xe(){if(K===void 0){K=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{K=!0}}return K}function Ye(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=b("iframe");r.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),r.setAttribute("aria-hidden","true"),r.tabIndex=-1;const s=Xe();let l;return s?(r.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=se(window,"message",i=>{i.source===r.contentWindow&&e()})):(r.src="about:blank",r.onload=()=>{l=se(r.contentWindow,"resize",e)}),w(t,r),()=>{(s||l&&r.contentWindow)&&l(),y(r)}}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function xe(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}const X=new Map;let Y=0;function Ze(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function et(t,e){const n={stylesheet:Ge(e),rules:{}};return X.set(t,n),n}function fe(t,e,n,r,s,l,i,o=0){const c=16.666/r;let a=`{
`;for(let f=0;f<=1;f+=c){const m=e+(n-e)*l(f);a+=f*100+`%{${i(m,1-m)}}
`}const _=a+`100% {${i(n,1-n)}}
}`,d=`__svelte_${Ze(_)}_${o}`,g=Ae(t),{stylesheet:p,rules:h}=X.get(g)||et(g,t);h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${_}`,p.cssRules.length));const u=t.style.animation||"";return t.style.animation=`${u?`${u}, `:""}${d} ${r}ms linear ${s}ms 1 both`,Y+=1,d}function tt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),Y-=s,Y||nt())}function nt(){ie(()=>{Y||(X.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&y(e)}),X.clear())})}let U;function B(t){U=t}function oe(){if(!U)throw new Error("Function called outside component initialization");return U}function Ie(t){oe().$$.on_mount.push(t)}function rt(t){oe().$$.on_destroy.push(t)}function st(){const t=oe();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=xe(e,n,{cancelable:r});return s.slice().forEach(i=>{i.call(t,l)}),!l.defaultPrevented}return!0}}function lt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const P=[],Z=[],J=[],de=[],je=Promise.resolve();let le=!1;function Fe(){le||(le=!0,je.then(Me))}function it(){return Fe(),je}function N(t){J.push(t)}const te=new Set;let V=0;function Me(){const t=U;do{for(;V<P.length;){const e=P[V];V++,B(e),ot(e.$$)}for(B(null),P.length=0,V=0;Z.length;)Z.pop()();for(let e=0;e<J.length;e+=1){const n=J[e];te.has(n)||(te.add(n),n())}J.length=0}while(P.length);for(;de.length;)de.pop()();le=!1,te.clear(),B(t)}function ot(t){if(t.fragment!==null){t.update(),q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let D;function ct(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function ne(t,e,n){t.dispatchEvent(xe(`${e?"intro":"outro"}${n}`))}const Q=new Set;let O;function at(){O={r:0,c:[],p:O}}function ut(){O.r||q(O.c),O=O.p}function C(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function z(t,e,n,r){if(t&&t.o){if(Q.has(t))return;Q.add(t),O.c.push(()=>{Q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const ft={duration:0};function me(t,e,n,r){let s=e(t,n),l=r?0:1,i=null,o=null,c=null;function a(){c&&tt(t,c)}function _(g,p){const h=g.b-l;return p*=Math.abs(h),{a:l,b:g.b,d:h,duration:p,start:g.start,end:g.start+p,group:g.group}}function d(g){const{delay:p=0,duration:h=300,easing:u=we,tick:f=E,css:m}=s||ft,k={start:Be()+p,b:g};g||(k.group=O,O.r+=1),i||o?o=k:(m&&(a(),c=fe(t,l,g,h,p,u,m)),g&&f(0,1),i=_(k,h),N(()=>ne(t,g,"start")),Ue(S=>{if(o&&S>o.start&&(i=_(o,h),o=null,ne(t,i.b,"start"),m&&(a(),c=fe(t,l,i.b,i.duration,0,u,s.css))),i){if(S>=i.end)f(l=i.b,1-l),ne(t,i.b,"end"),o||(i.b?a():--i.group.r||q(i.group.c)),i=null;else if(S>=i.start){const ee=S-i.start;l=i.a+i.d*u(ee/i.duration),f(l,1-l)}}return!!(i||o)}))}return{run(g){ke(s)?ct().then(()=>{s=s(),d(g)}):d(g)},end(){a(),i=o=null}}}function R(t){t&&t.c()}function A(t,e,n,r){const{fragment:s,on_mount:l,on_destroy:i,after_update:o}=t.$$;s&&s.m(e,n),r||N(()=>{const c=l.map($e).filter(ke);i?i.push(...c):q(c),t.$$.on_mount=[]}),o.forEach(N)}function x(t,e){const n=t.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){t.$$.dirty[0]===-1&&(P.push(t),Fe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(t,e,n,r,s,l,i,o=[-1]){const c=U;B(t);const a=t.$$={fragment:null,ctx:null,props:l,update:E,not_equal:s,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ce(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};i&&i(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(d,g,...p)=>{const h=p.length?p[0]:g;return a.ctx&&s(a.ctx[d],a.ctx[d]=h)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](h),_&&dt(t,d)),g}):[],a.update(),_=!0,q(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){const d=Je(e.target);a.fragment&&a.fragment.l(d),d.forEach(y)}else a.fragment&&a.fragment.c();e.intro&&C(t.$$.fragment),A(t,e.target,e.anchor,e.customElement),Me()}B(c)}class F{$destroy(){x(this,1),this.$destroy=E}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!Pe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function mt(t){let e;return{c(){e=b("header"),e.innerHTML='<div class="content svelte-akjr0b">Wisebits</div>',v(e,"class","header svelte-akjr0b")},m(n,r){$(n,e,r)},p:E,i:E,o:E,d(n){n&&y(e)}}}class _t extends F{constructor(e){super(),j(this,e,null,mt,I,{})}}function gt(t){let e,n;const r=t[1].default,s=Ee(r,t,t[0],null);return{c(){e=b("main"),s&&s.c(),v(e,"class","body svelte-i3kmlx")},m(l,i){$(l,e,i),s&&s.m(e,null),n=!0},p(l,[i]){s&&s.p&&(!n||i&1)&&ze(s,r,l,l[0],n?Le(r,l[0],i,null):Te(l[0]),null)},i(l){n||(C(s,l),n=!0)},o(l){z(s,l),n=!1},d(l){l&&y(e),s&&s.d(l)}}}function ht(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=l=>{"$$scope"in l&&n(0,s=l.$$scope)},[s,r]}class pt extends F{constructor(e){super(),j(this,e,ht,gt,I,{})}}function yt(t){let e;return{c(){e=b("footer"),e.textContent="\xA9 2022 Wisebits",v(e,"class","footer svelte-1fxzvx6")},m(n,r){$(n,e,r)},p:E,i:E,o:E,d(n){n&&y(e)}}}class vt extends F{constructor(e){super(),j(this,e,null,yt,I,{})}}function bt(t){let e;const n=t[0].default,r=Ee(n,t,t[1],null);return{c(){r&&r.c()},m(s,l){r&&r.m(s,l),e=!0},p(s,l){r&&r.p&&(!e||l&2)&&ze(r,n,s,s[1],e?Le(n,s[1],l,null):Te(s[1]),null)},i(s){e||(C(r,s),e=!0)},o(s){z(r,s),e=!1},d(s){r&&r.d(s)}}}function wt(t){let e,n,r,s,l,i,o;return n=new _t({}),s=new pt({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),i=new vt({}),{c(){e=b("div"),R(n.$$.fragment),r=L(),R(s.$$.fragment),l=L(),R(i.$$.fragment),v(e,"class","layout svelte-7d69n2")},m(c,a){$(c,e,a),A(n,e,null),w(e,r),A(s,e,null),w(e,l),A(i,e,null),o=!0},p(c,[a]){const _={};a&2&&(_.$$scope={dirty:a,ctx:c}),s.$set(_)},i(c){o||(C(n.$$.fragment,c),C(s.$$.fragment,c),C(i.$$.fragment,c),o=!0)},o(c){z(n.$$.fragment,c),z(s.$$.fragment,c),z(i.$$.fragment,c),o=!1},d(c){c&&y(e),x(n),x(s),x(i)}}}function $t(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=l=>{"$$scope"in l&&n(1,s=l.$$scope)},[r,s]}class kt extends F{constructor(e){super(),j(this,e,$t,wt,I,{})}}function _e(t,{delay:e=0,duration:n=400,easing:r=we}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:l=>`opacity: ${l*s}`}}function ge(t){let e,n;return{c(){e=b("div"),n=M(t[2]),v(e,"class","caption svelte-1v6j3g6")},m(r,s){$(r,e,s),w(e,n)},p(r,s){s&4&&W(n,r[2])},d(r){r&&y(e)}}}function Et(t){let e,n;return{c(){e=b("img"),v(e,"class","img svelte-1v6j3g6"),v(e,"loading","lazy"),ae(e.src,n=t[0])||v(e,"src",n),v(e,"alt",t[1])},m(r,s){$(r,e,s),t[6](e)},p(r,s){s&1&&!ae(e.src,n=r[0])&&v(e,"src",n),s&2&&v(e,"alt",r[1])},d(r){r&&y(e),t[6](null)}}}function Ct(t){let e;return{c(){e=b("div"),e.textContent="Image not found",v(e,"class","not-found svelte-1v6j3g6")},m(n,r){$(n,e,r)},p:E,d(n){n&&y(e)}}}function Lt(t){let e,n,r=!t[3]&&ge(t);function s(o,c){return o[4]?Ct:Et}let l=s(t),i=l(t);return{c(){e=b("div"),r&&r.c(),n=L(),i.c(),v(e,"class","wrapper svelte-1v6j3g6"),ue(e,"loading",t[3])},m(o,c){$(o,e,c),r&&r.m(e,null),w(e,n),i.m(e,null)},p(o,[c]){o[3]?r&&(r.d(1),r=null):r?r.p(o,c):(r=ge(o),r.c(),r.m(e,n)),l===(l=s(o))&&i?i.p(o,c):(i.d(1),i=l(o),i&&(i.c(),i.m(e,null))),c&8&&ue(e,"loading",o[3])},i:E,o:E,d(o){o&&y(e),r&&r.d(),i.d()}}}function zt(t,e,n){let{src:r}=e,{alt:s}=e,{caption:l}=e,i=!0,o=!1,c;const a=st();function _(){c.addEventListener("load",p),c.addEventListener("error",h)}function d(){c.removeEventListener("load",p),c.removeEventListener("error",h)}function g(){a("imageFinally"),d()}function p(){n(3,i=!1),g()}function h(){n(4,o=!0),n(3,i=!1),g()}Ie(()=>{r&&r.length?_():(n(4,o=!0),n(3,i=!1),g())});function u(f){Z[f?"unshift":"push"](()=>{c=f,n(5,c)})}return t.$$set=f=>{"src"in f&&n(0,r=f.src),"alt"in f&&n(1,s=f.alt),"caption"in f&&n(2,l=f.caption)},[r,s,l,i,o,c,u]}class Tt extends F{constructor(e){super(),j(this,e,zt,Lt,I,{src:0,alt:1,caption:2})}}const Re=["#e4d1d1","#b9b0b0","#d9ecd0","#f0efef","#c2d4dd","#b0aac0"];function he(t,e,n){const r=t.slice();return r[2]=e[n],r[4]=n,r}function pe(t){let e,n=t[2]+"",r,s;return{c(){e=b("div"),r=M(n),s=L(),v(e,"class","tag svelte-1qzb1fa"),Qe(e,"background",Re[t[4]%Ot])},m(l,i){$(l,e,i),w(e,r),w(e,s)},p(l,i){i&1&&n!==(n=l[2]+"")&&W(r,n)},d(l){l&&y(e)}}}function St(t){let e,n=t[0],r=[];for(let s=0;s<n.length;s+=1)r[s]=pe(he(t,n,s));return{c(){e=b("div");for(let s=0;s<r.length;s+=1)r[s].c();v(e,"class","tags svelte-1qzb1fa")},m(s,l){$(s,e,l);for(let i=0;i<r.length;i+=1)r[i].m(e,null)},p(s,[l]){if(l&1){n=s[0];let i;for(i=0;i<n.length;i+=1){const o=he(s,n,i);r[i]?r[i].p(o,l):(r[i]=pe(o),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},i:E,o:E,d(s){s&&y(e),re(r,s)}}}const Ot=Re.length;function At(t,e,n){let{tags:r}=e,s;return t.$$set=l=>{"tags"in l&&n(1,r=l.tags)},t.$$.update=()=>{t.$$.dirty&2&&n(0,s=r.split(",").map(l=>l.trim()))},[s,r]}class xt extends F{constructor(e){super(),j(this,e,At,St,I,{tags:1})}}function It(t){let e,n,r,s,l,i,o,c,a,_,d,g,p,h,u;return n=new Tt({props:{src:t[0].src,alt:t[1],caption:t[0].caption}}),n.$on("imageFinally",t[5]),h=new xt({props:{tags:t[4]}}),{c(){e=b("section"),R(n.$$.fragment),r=L(),s=b("div"),l=b("div"),i=M(t[2]),o=L(),c=b("h2"),a=M(t[1]),_=L(),d=b("div"),g=M(t[3]),p=L(),R(h.$$.fragment),v(l,"class","extra overflow svelte-izxm8c"),v(c,"class","title overflow svelte-izxm8c"),v(d,"class","desc overflow svelte-izxm8c"),v(s,"class","text"),v(e,"class","card svelte-izxm8c")},m(f,m){$(f,e,m),A(n,e,null),w(e,r),w(e,s),w(s,l),w(l,i),w(s,o),w(s,c),w(c,a),w(s,_),w(s,d),w(d,g),w(s,p),A(h,s,null),u=!0},p(f,[m]){const k={};m&1&&(k.src=f[0].src),m&2&&(k.alt=f[1]),m&1&&(k.caption=f[0].caption),n.$set(k),(!u||m&4)&&W(i,f[2]),(!u||m&2)&&W(a,f[1]),(!u||m&8)&&W(g,f[3]);const S={};m&16&&(S.tags=f[4]),h.$set(S)},i(f){u||(C(n.$$.fragment,f),C(h.$$.fragment,f),u=!0)},o(f){z(n.$$.fragment,f),z(h.$$.fragment,f),u=!1},d(f){f&&y(e),x(n),x(h)}}}function jt(t,e,n){let{image:r}=e,{title:s}=e,{extra:l}=e,{desc:i}=e,{tags:o}=e;function c(a){lt.call(this,t,a)}return t.$$set=a=>{"image"in a&&n(0,r=a.image),"title"in a&&n(1,s=a.title),"extra"in a&&n(2,l=a.extra),"desc"in a&&n(3,i=a.desc),"tags"in a&&n(4,o=a.tags)},[r,s,l,i,o,c]}class Ft extends F{constructor(e){super(),j(this,e,jt,It,I,{image:0,title:1,extra:2,desc:3,tags:4})}}const Mt="https://loremflickr.com/500/500/coffee bean",Rt="https://random-data-api.com/api/coffee/random_coffee";async function Ht(){const t=await fetch(Rt);if(!t.ok)throw new Error(t.statusText);const e=await t.json(),n=`${Mt}?${Date.now()}`;return{id:e.id,title:e.blend_name,extra:e.origin,desc:e.variety,tags:e.notes,image:{src:n,caption:e.intensifier}}}function Nt(t,e,n){const r=t.slice();return r[21]=e[n],r}function ye(t,e,n){const r=t.slice();r[24]=e[n],r[27]=n;const s=r[27]===r[0].length-1;return r[25]=s,r}function ve(t){let e,n,r,s;return{c(){e=b("button"),n=M("\uFF0B"),v(e,"class","add-new-card svelte-1r5dcv7"),v(e,"title","Add a new card"),e.disabled=t[3]},m(l,i){$(l,e,i),w(e,n),r||(s=se(e,"click",t[5],{once:!0}),r=!0)},p(l,i){i&8&&(e.disabled=l[3])},d(l){l&&y(e),r=!1,s()}}}function be(t){let e,n,r,s,l,i;n=new Ft({props:{title:t[24].title,extra:t[24].extra,desc:t[24].desc,tags:t[24].tags,image:t[24].image}}),n.$on("imageFinally",We(t[4]));let o=t[25]&&ve(t);return{c(){e=b("li"),R(n.$$.fragment),r=L(),o&&o.c(),s=L(),v(e,"class","item svelte-1r5dcv7")},m(c,a){$(c,e,a),A(n,e,null),w(e,r),o&&o.m(e,null),w(e,s),i=!0},p(c,a){const _={};a&1&&(_.title=c[24].title),a&1&&(_.extra=c[24].extra),a&1&&(_.desc=c[24].desc),a&1&&(_.tags=c[24].tags),a&1&&(_.image=c[24].image),n.$set(_),c[25]?o?o.p(c,a):(o=ve(c),o.c(),o.m(e,s)):o&&(o.d(1),o=null)},i(c){i||(C(n.$$.fragment,c),N(()=>{l||(l=me(e,_e,{},!0)),l.run(1)}),i=!0)},o(c){z(n.$$.fragment,c),l||(l=me(e,_e,{},!1)),l.run(0),i=!1},d(c){c&&y(e),x(n),o&&o.d(),c&&l&&l.end()}}}function qt(t){let e;return{c(){e=b("p"),e.textContent=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit deserunt soluta dolore quidem magnam architecto ipsa at molestiae pariatur esse rem debitis error asperiores, dolorem dolor? Repellat, sunt assumenda.
    `},m(n,r){$(n,e,r)},p:E,d(n){n&&y(e)}}}function Dt(t){let e,n,r,s,l,i,o,c,a,_=t[0],d=[];for(let u=0;u<_.length;u+=1)d[u]=be(ye(t,_,u));const g=u=>z(d[u],1,1,()=>{d[u]=null});let p=new Array(10).fill(void 0),h=[];for(let u=0;u<p.length;u+=1)h[u]=qt(Nt(t,p,u));return{c(){e=b("h1"),e.textContent="Showcase",n=L(),r=b("ul");for(let u=0;u<d.length;u+=1)d[u].c();l=L(),i=b("h2"),i.textContent="Lorem ipsum",o=L();for(let u=0;u<h.length;u+=1)h[u].c();c=Ve(),v(r,"class","showcase svelte-1r5dcv7"),N(()=>t[7].call(r))},m(u,f){$(u,e,f),$(u,n,f),$(u,r,f);for(let m=0;m<d.length;m+=1)d[m].m(r,null);t[6](r),s=Ye(r,t[7].bind(r)),$(u,l,f),$(u,i,f),$(u,o,f);for(let m=0;m<h.length;m+=1)h[m].m(u,f);$(u,c,f),a=!0},p(u,[f]){if(f&57){_=u[0];let m;for(m=0;m<_.length;m+=1){const k=ye(u,_,m);d[m]?(d[m].p(k,f),C(d[m],1)):(d[m]=be(k),d[m].c(),C(d[m],1),d[m].m(r,null))}for(at(),m=_.length;m<d.length;m+=1)g(m);ut()}},i(u){if(!a){for(let f=0;f<_.length;f+=1)C(d[f]);a=!0}},o(u){d=d.filter(Boolean);for(let f=0;f<d.length;f+=1)z(d[f]);a=!1},d(u){u&&y(e),u&&y(n),u&&y(r),re(d,u),t[6](null),s(),u&&y(l),u&&y(i),u&&y(o),re(h,u),u&&y(c)}}}function Pt(t,e,n){const s=document.documentElement;let l,i=0,o=0,c=0,a=0,_,d,g=!0,p=[];async function h(){const T=await Ht();p.push(T),n(0,p)}h();function u(){n(3,g=!1)}async function f(){if(g){k();return}n(3,g=!0),h(),k()}function m(){clearTimeout(_)}function k(){m(),_=setTimeout(f,3e4)}async function S(){await it(),a=l.querySelector(".card").offsetHeight+c}function ee(){const T=i+o-a;s.scroll({top:T,behavior:"smooth"})}function He(){new ResizeObserver(()=>{requestAnimationFrame(ee)}).observe(l)}Ie(()=>{const T=window.getComputedStyle(l).getPropertyValue("gap");c=parseInt(T,10)||0,i=l.offsetTop,He(),document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":{m();break}case"visible":{k();break}}})}),rt(()=>{clearTimeout(_),clearInterval(d)});function Ne(T){Z[T?"unshift":"push"](()=>{l=T,n(1,l)})}function qe(){o=this.offsetHeight,n(2,o)}return t.$$.update=()=>{t.$$.dirty&1&&p.length&&(S(),k())},[p,l,o,g,u,f,Ne,qe]}class Wt extends F{constructor(e){super(),j(this,e,Pt,Dt,I,{})}}function Bt(t){let e,n;return e=new Wt({}),{c(){R(e.$$.fragment)},m(r,s){A(e,r,s),n=!0},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){x(e,r)}}}function Ut(t){let e,n;return e=new kt({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment)},m(r,s){A(e,r,s),n=!0},p(r,[s]){const l={};s&1&&(l.$$scope={dirty:s,ctx:r}),e.$set(l)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){x(e,r)}}}class Gt extends F{constructor(e){super(),j(this,e,null,Ut,I,{})}}new Gt({target:document.getElementById("app")});
