const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["Umb-Credits-GH-Pages/assets/OrganizationsPage-Do5-jPZE.js","Umb-Credits-GH-Pages/assets/query-DJ2Df_pl.js","Umb-Credits-GH-Pages/assets/react-fVXvAP8Z.js","Umb-Credits-GH-Pages/assets/i18n-kcDNZBP3.js","Umb-Credits-GH-Pages/assets/CreditsPage-Bwy9BWTM.js","Umb-Credits-GH-Pages/assets/login_background_2-B25p5Ake.js","Umb-Credits-GH-Pages/assets/LoginPage-BB9ntQNG.js","Umb-Credits-GH-Pages/assets/LogoutPage-_s_u5zBw.js","Umb-Credits-GH-Pages/assets/ProfilePage-DfXDfeiI.js","Umb-Credits-GH-Pages/assets/CompanyPage-BRub7B0F.js","Umb-Credits-GH-Pages/assets/AccessUsersPage-Cf6cLfn0.js","Umb-Credits-GH-Pages/assets/AccessRolesPage-DenT9ZXN.js","Umb-Credits-GH-Pages/assets/AccessSettingsPage-Ddz0rIHU.js"])))=>i.map(i=>d[i]);
var N0=n=>{throw TypeError(n)};var Ps=(n,u,r)=>u.has(n)||N0("Cannot "+r);var K=(n,u,r)=>(Ps(n,u,"read from private field"),r?r.call(n):u.get(n)),se=(n,u,r)=>u.has(n)?N0("Cannot add the same private member more than once"):u instanceof WeakSet?u.add(n):u.set(n,r),Jt=(n,u,r,s)=>(Ps(n,u,"write to private field"),s?s.call(n,r):u.set(n,r),r),bl=(n,u,r)=>(Ps(n,u,"access private method"),r);import{j as x,u as Sp,Q as Wv,a as Pv}from"./query-DJ2Df_pl.js";import{i as At,B as Iv,a as tm,u as xl}from"./i18n-kcDNZBP3.js";import{a as em,c as lm,r as H,o as $e,N as ro,L as Ep,b as am,u as _n,d as Tc,e as Bc,f as nm,h as Ve,B as im}from"./react-fVXvAP8Z.js";(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))s(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function r(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(f){if(f.ep)return;f.ep=!0;const d=r(f);fetch(f.href,d)}})();const um="modulepreload",om=function(n){return"/"+n},R0={},tl=function(u,r,s){let f=Promise.resolve();if(r&&r.length>0){let b=function(T){return Promise.all(T.map(O=>Promise.resolve(O).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),E=p?.nonce||p?.getAttribute("nonce");f=b(r.map(T=>{if(T=om(T),T in R0)return;R0[T]=!0;const O=T.endsWith(".css"),C=O?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${T}"]${C}`))return;const _=document.createElement("link");if(_.rel=O?"stylesheet":um,O||(_.as="script"),_.crossOrigin="",_.href=T,E&&_.setAttribute("nonce",E),document.head.appendChild(_),O)return new Promise((L,U)=>{_.addEventListener("load",L),_.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${T}`)))})}))}function d(p){const E=new Event("vite:preloadError",{cancelable:!0});if(E.payload=p,window.dispatchEvent(E),!E.defaultPrevented)throw p}return f.then(p=>{for(const E of p||[])E.status==="rejected"&&d(E.reason);return u().catch(d)})},rm="404 — Page not found",sm="Check the URL or use the navigation.",cm="Breadcrumb",fm="Sign in – Umbraco",dm="Access your Umbraco account.",hm={notFoundTitle:rm,notFoundBody:sm,breadcrumb:cm,loginTitle:fm,loginDesc:dm},pm="Organization",gm="Organizations",vm="Profile",mm="Credits",bm="Company",ym="Access & Permissions",Am="Users",xm="Roles",Sm="Settings",Em="Dashboard",wm="Projects",zm="Project Builder",Tm="Marketing",Bm={organization:pm,organizations:gm,profile:vm,credits:mm,company:bm,access:ym,users:Am,roles:xm,settings:Sm,dashboard:Em,projects:wm,projectBuilder:zm,marketing:Tm},Mm="404 — Siden blev ikke fundet",Om="Kontrollér URL'en eller brug navigationen.",Dm="Brødkrummer",Cm="Log ind – Umbraco",_m="Få adgang til din Umbraco-konto.",Um={notFoundTitle:Mm,notFoundBody:Om,breadcrumb:Dm,loginTitle:Cm,loginDesc:_m},km="Organisation",Nm="Organisationer",Rm="Profil",jm="Kreditter",Hm="Virksomhed",Lm="Adgang og tilladelser",qm="Brugere",Qm="Roller",Vm="Indstillinger",$m="Dashboard",Gm="Projekter",Ym="Projektbygger",Xm="Marketing",Zm={organization:km,organizations:Nm,profile:Rm,credits:jm,company:Hm,access:Lm,users:qm,roles:Qm,settings:Vm,dashboard:$m,projects:Gm,projectBuilder:Ym,marketing:Xm},Km="Log out",Jm={system:"System",dark:"Dark",light:"Light"},Fm="Go to Profile",Wm="credit",Pm="credits",Im="{{amount}} {{unit}}",tb={logout:Km,theme:Jm,goToProfile:Fm,credits_one:Wm,credits_other:Pm,balanceAria:Im},eb="Log ud",lb={system:"System",dark:"Mørk",light:"Lys"},ab="Gå til profil",nb="kredit",ib="kreditter",ub="{{amount}} {{unit}}",ob={logout:eb,theme:lb,goToProfile:ab,credits_one:nb,credits_other:ib,balanceAria:ub},rb={order:["querystring","localStorage","navigator"],caches:["localStorage"],lookupQuerystring:"lang",convertDetectedLanguage:n=>n.split("-")[0]},sb={fallbackLng:"en",supportedLngs:["en","da"],ns:["common","menu","topbar"],defaultNS:"common",resources:{en:{common:hm,menu:Bm,topbar:tb},da:{common:Um,menu:Zm,topbar:ob}},interpolation:{escapeValue:!1},detection:rb};At.use(Iv).use(tm).init(sb);At.on("languageChanged",n=>{typeof document<"u"&&document.documentElement.setAttribute("lang",n)});var Is={exports:{}},Ci={},tc={exports:{}},ec={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function cb(){return j0||(j0=1,(function(n){function u(B,N){var Y=B.length;B.push(N);t:for(;0<Y;){var nt=Y-1>>>1,dt=B[nt];if(0<f(dt,N))B[nt]=N,B[Y]=dt,Y=nt;else break t}}function r(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var N=B[0],Y=B.pop();if(Y!==N){B[0]=Y;t:for(var nt=0,dt=B.length,Dt=dt>>>1;nt<Dt;){var ot=2*(nt+1)-1,ct=B[ot],Tt=ot+1,Pt=B[Tt];if(0>f(ct,Y))Tt<dt&&0>f(Pt,ct)?(B[nt]=Pt,B[Tt]=Y,nt=Tt):(B[nt]=ct,B[ot]=Y,nt=ot);else if(Tt<dt&&0>f(Pt,Y))B[nt]=Pt,B[Tt]=Y,nt=Tt;else break t}}return N}function f(B,N){var Y=B.sortIndex-N.sortIndex;return Y!==0?Y:B.id-N.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var p=Date,E=p.now();n.unstable_now=function(){return p.now()-E}}var b=[],T=[],O=1,C=null,_=3,L=!1,U=!1,k=!1,F=!1,W=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function Q(B){for(var N=r(T);N!==null;){if(N.callback===null)s(T);else if(N.startTime<=B)s(T),N.sortIndex=N.expirationTime,u(b,N);else break;N=r(T)}}function pt(B){if(k=!1,Q(B),!U)if(r(b)!==null)U=!0,tt||(tt=!0,ee());else{var N=r(T);N!==null&&He(pt,N.startTime-B)}}var tt=!1,J=-1,Lt=5,je=-1;function Ca(){return F?!0:!(n.unstable_now()-je<Lt)}function El(){if(F=!1,tt){var B=n.unstable_now();je=B;var N=!0;try{t:{U=!1,k&&(k=!1,V(J),J=-1),L=!0;var Y=_;try{e:{for(Q(B),C=r(b);C!==null&&!(C.expirationTime>B&&Ca());){var nt=C.callback;if(typeof nt=="function"){C.callback=null,_=C.priorityLevel;var dt=nt(C.expirationTime<=B);if(B=n.unstable_now(),typeof dt=="function"){C.callback=dt,Q(B),N=!0;break e}C===r(b)&&s(b),Q(B)}else s(b);C=r(b)}if(C!==null)N=!0;else{var Dt=r(T);Dt!==null&&He(pt,Dt.startTime-B),N=!1}}break t}finally{C=null,_=Y,L=!1}N=void 0}}finally{N?ee():tt=!1}}}var ee;if(typeof R=="function")ee=function(){R(El)};else if(typeof MessageChannel<"u"){var _a=new MessageChannel,ea=_a.port2;_a.port1.onmessage=El,ee=function(){ea.postMessage(null)}}else ee=function(){W(El,0)};function He(B,N){J=W(function(){B(n.unstable_now())},N)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_forceFrameRate=function(B){0>B||125<B||(Lt=0<B?Math.floor(1e3/B):5)},n.unstable_getCurrentPriorityLevel=function(){return _},n.unstable_next=function(B){switch(_){case 1:case 2:case 3:var N=3;break;default:N=_}var Y=_;_=N;try{return B()}finally{_=Y}},n.unstable_requestPaint=function(){F=!0},n.unstable_runWithPriority=function(B,N){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=_;_=B;try{return N()}finally{_=Y}},n.unstable_scheduleCallback=function(B,N,Y){var nt=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?nt+Y:nt):Y=nt,B){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=Y+dt,B={id:O++,callback:N,priorityLevel:B,startTime:Y,expirationTime:dt,sortIndex:-1},Y>nt?(B.sortIndex=Y,u(T,B),r(b)===null&&B===r(T)&&(k?(V(J),J=-1):k=!0,He(pt,Y-nt))):(B.sortIndex=dt,u(b,B),U||L||(U=!0,tt||(tt=!0,ee()))),B},n.unstable_shouldYield=Ca,n.unstable_wrapCallback=function(B){var N=_;return function(){var Y=_;_=N;try{return B.apply(this,arguments)}finally{_=Y}}}})(ec)),ec}var H0;function fb(){return H0||(H0=1,tc.exports=cb()),tc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function db(){if(L0)return Ci;L0=1;var n=fb(),u=em(),r=lm();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function p(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function E(t){if(d(t)!==t)throw Error(s(188))}function b(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(s(188));return e!==t?null:t}for(var l=t,a=e;;){var i=l.return;if(i===null)break;var o=i.alternate;if(o===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===l)return E(i),t;if(o===a)return E(i),e;o=o.sibling}throw Error(s(188))}if(l.return!==a.return)l=i,a=o;else{for(var c=!1,h=i.child;h;){if(h===l){c=!0,l=i,a=o;break}if(h===a){c=!0,a=i,l=o;break}h=h.sibling}if(!c){for(h=o.child;h;){if(h===l){c=!0,l=o,a=i;break}if(h===a){c=!0,a=o,l=i;break}h=h.sibling}if(!c)throw Error(s(189))}}if(l.alternate!==a)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?t:e}function T(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=T(t),e!==null)return e;t=t.sibling}return null}var O=Object.assign,C=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),R=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),je=Symbol.for("react.activity"),Ca=Symbol.for("react.memo_cache_sentinel"),El=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=El&&t[El]||t["@@iterator"],typeof t=="function"?t:null)}var _a=Symbol.for("react.client.reference");function ea(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===_a?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case F:return"Profiler";case k:return"StrictMode";case pt:return"Suspense";case tt:return"SuspenseList";case je:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case L:return"Portal";case R:return(t.displayName||"Context")+".Provider";case V:return(t._context.displayName||"Context")+".Consumer";case Q:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return e=t.displayName||null,e!==null?e:ea(t.type)||"Memo";case Lt:e=t._payload,t=t._init;try{return ea(t(e))}catch{}}return null}var He=Array.isArray,B=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},nt=[],dt=-1;function Dt(t){return{current:t}}function ot(t){0>dt||(t.current=nt[dt],nt[dt]=null,dt--)}function ct(t,e){dt++,nt[dt]=t.current,t.current=e}var Tt=Dt(null),Pt=Dt(null),le=Dt(null),el=Dt(null);function Xe(t,e){switch(ct(le,e),ct(Pt,t),ct(Tt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?s0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=s0(e),t=c0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ot(Tt),ct(Tt,t)}function ae(){ot(Tt),ot(Pt),ot(le)}function la(t){t.memoizedState!==null&&ct(el,t);var e=Tt.current,l=c0(e,t.type);e!==l&&(ct(Pt,t),ct(Tt,l))}function ll(t){Pt.current===t&&(ot(Tt),ot(Pt)),el.current===t&&(ot(el),Ti._currentValue=Y)}var Ee=Object.prototype.hasOwnProperty,Lo=n.unstable_scheduleCallback,qo=n.unstable_cancelCallback,O1=n.unstable_shouldYield,D1=n.unstable_requestPaint,Ze=n.unstable_now,C1=n.unstable_getCurrentPriorityLevel,Vc=n.unstable_ImmediatePriority,$c=n.unstable_UserBlockingPriority,Yi=n.unstable_NormalPriority,_1=n.unstable_LowPriority,Gc=n.unstable_IdlePriority,U1=n.log,k1=n.unstable_setDisableYieldValue,kn=null,ce=null;function wl(t){if(typeof U1=="function"&&k1(t),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(kn,t)}catch{}}var fe=Math.clz32?Math.clz32:j1,N1=Math.log,R1=Math.LN2;function j1(t){return t>>>=0,t===0?32:31-(N1(t)/R1|0)|0}var Xi=256,Zi=4194304;function aa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ki(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var i=0,o=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var h=a&134217727;return h!==0?(a=h&~o,a!==0?i=aa(a):(c&=h,c!==0?i=aa(c):l||(l=h&~t,l!==0&&(i=aa(l))))):(h=a&~o,h!==0?i=aa(h):c!==0?i=aa(c):l||(l=a&~t,l!==0&&(i=aa(l)))),i===0?0:e!==0&&e!==i&&(e&o)===0&&(o=i&-i,l=e&-e,o>=l||o===32&&(l&4194048)!==0)?e:i}function Nn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function H1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yc(){var t=Xi;return Xi<<=1,(Xi&4194048)===0&&(Xi=256),t}function Xc(){var t=Zi;return Zi<<=1,(Zi&62914560)===0&&(Zi=4194304),t}function Qo(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Rn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function L1(t,e,l,a,i,o){var c=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var h=t.entanglements,g=t.expirationTimes,A=t.hiddenUpdates;for(l=c&~l;0<l;){var z=31-fe(l),D=1<<z;h[z]=0,g[z]=-1;var S=A[z];if(S!==null)for(A[z]=null,z=0;z<S.length;z++){var w=S[z];w!==null&&(w.lane&=-536870913)}l&=~D}a!==0&&Zc(t,a,0),o!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=o&~(c&~e))}function Zc(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-fe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function Kc(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-fe(l),i=1<<a;i&e|t[a]&e&&(t[a]|=e),l&=~i}}function Vo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $o(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Jc(){var t=N.p;return t!==0?t:(t=window.event,t===void 0?32:O0(t.type))}function q1(t,e){var l=N.p;try{return N.p=t,e()}finally{N.p=l}}var zl=Math.random().toString(36).slice(2),Ft="__reactFiber$"+zl,ne="__reactProps$"+zl,Ua="__reactContainer$"+zl,Go="__reactEvents$"+zl,Q1="__reactListeners$"+zl,V1="__reactHandles$"+zl,Fc="__reactResources$"+zl,jn="__reactMarker$"+zl;function Yo(t){delete t[Ft],delete t[ne],delete t[Go],delete t[Q1],delete t[V1]}function ka(t){var e=t[Ft];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Ua]||l[Ft]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=p0(t);t!==null;){if(l=t[Ft])return l;t=p0(t)}return e}t=l,l=t.parentNode}return null}function Na(t){if(t=t[Ft]||t[Ua]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Hn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Ra(t){var e=t[Fc];return e||(e=t[Fc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function qt(t){t[jn]=!0}var Wc=new Set,Pc={};function na(t,e){ja(t,e),ja(t+"Capture",e)}function ja(t,e){for(Pc[t]=e,t=0;t<e.length;t++)Wc.add(e[t])}var $1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ic={},tf={};function G1(t){return Ee.call(tf,t)?!0:Ee.call(Ic,t)?!1:$1.test(t)?tf[t]=!0:(Ic[t]=!0,!1)}function Ji(t,e,l){if(G1(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Fi(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function al(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var Xo,ef;function Ha(t){if(Xo===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Xo=e&&e[1]||"",ef=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xo+t+ef}var Zo=!1;function Ko(t,e){if(!t||Zo)return"";Zo=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(w){var S=w}Reflect.construct(t,[],D)}else{try{D.call()}catch(w){S=w}t.call(D.prototype)}}else{try{throw Error()}catch(w){S=w}(D=t())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(w){if(w&&S&&typeof w.stack=="string")return[w.stack,S.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=a.DetermineComponentFrameRoot(),c=o[0],h=o[1];if(c&&h){var g=c.split(`
`),A=h.split(`
`);for(i=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;if(a===g.length||i===A.length)for(a=g.length-1,i=A.length-1;1<=a&&0<=i&&g[a]!==A[i];)i--;for(;1<=a&&0<=i;a--,i--)if(g[a]!==A[i]){if(a!==1||i!==1)do if(a--,i--,0>i||g[a]!==A[i]){var z=`
`+g[a].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=a&&0<=i);break}}}finally{Zo=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Ha(l):""}function Y1(t){switch(t.tag){case 26:case 27:case 5:return Ha(t.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 15:return Ko(t.type,!1);case 11:return Ko(t.type.render,!1);case 1:return Ko(t.type,!0);case 31:return Ha("Activity");default:return""}}function lf(t){try{var e="";do e+=Y1(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function we(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function af(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function X1(t){var e=af(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,o=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(c){a=""+c,o.call(this,c)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wi(t){t._valueTracker||(t._valueTracker=X1(t))}function nf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=af(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Pi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Z1=/[\n"\\]/g;function ze(t){return t.replace(Z1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Jo(t,e,l,a,i,o,c,h){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+we(e)):t.value!==""+we(e)&&(t.value=""+we(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?Fo(t,c,we(e)):l!=null?Fo(t,c,we(l)):a!=null&&t.removeAttribute("value"),i==null&&o!=null&&(t.defaultChecked=!!o),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.name=""+we(h):t.removeAttribute("name")}function uf(t,e,l,a,i,o,c,h){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||l!=null){if(!(o!=="submit"&&o!=="reset"||e!=null))return;l=l!=null?""+we(l):"",e=e!=null?""+we(e):l,h||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=h?t.checked:!!a,t.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c)}function Fo(t,e,l){e==="number"&&Pi(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function La(t,e,l,a){if(t=t.options,e){e={};for(var i=0;i<l.length;i++)e["$"+l[i]]=!0;for(l=0;l<t.length;l++)i=e.hasOwnProperty("$"+t[l].value),t[l].selected!==i&&(t[l].selected=i),i&&a&&(t[l].defaultSelected=!0)}else{for(l=""+we(l),e=null,i=0;i<t.length;i++){if(t[i].value===l){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function of(t,e,l){if(e!=null&&(e=""+we(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+we(l):""}function rf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(s(92));if(He(a)){if(1<a.length)throw Error(s(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=we(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function qa(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var K1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||K1.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function cf(t,e,l){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&l[i]!==a&&sf(t,i,a)}else for(var o in e)e.hasOwnProperty(o)&&sf(t,o,e[o])}function Wo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var J1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),F1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ii(t){return F1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Po=null;function Io(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qa=null,Va=null;function ff(t){var e=Na(t);if(e&&(t=e.stateNode)){var l=t[ne]||null;t:switch(t=e.stateNode,e.type){case"input":if(Jo(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ze(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var i=a[ne]||null;if(!i)throw Error(s(90));Jo(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&nf(a)}break t;case"textarea":of(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&La(t,!!l.multiple,e,!1)}}}var tr=!1;function df(t,e,l){if(tr)return t(e,l);tr=!0;try{var a=t(e);return a}finally{if(tr=!1,(Qa!==null||Va!==null)&&(Hu(),Qa&&(e=Qa,t=Va,Va=Qa=null,ff(e),t)))for(e=0;e<t.length;e++)ff(t[e])}}function Ln(t,e){var l=t.stateNode;if(l===null)return null;var a=l[ne]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(s(231,e,typeof l));return l}var nl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),er=!1;if(nl)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){er=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{er=!1}var Tl=null,lr=null,tu=null;function hf(){if(tu)return tu;var t,e=lr,l=e.length,a,i="value"in Tl?Tl.value:Tl.textContent,o=i.length;for(t=0;t<l&&e[t]===i[t];t++);var c=l-t;for(a=1;a<=c&&e[l-a]===i[o-a];a++);return tu=i.slice(t,1<a?1-a:void 0)}function eu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lu(){return!0}function pf(){return!1}function ie(t){function e(l,a,i,o,c){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=o,this.target=c,this.currentTarget=null;for(var h in t)t.hasOwnProperty(h)&&(l=t[h],this[h]=l?l(o):o[h]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?lu:pf,this.isPropagationStopped=pf,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=lu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=lu)},persist:function(){},isPersistent:lu}),e}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=ie(ia),Qn=O({},ia,{view:0,detail:0}),W1=ie(Qn),ar,nr,Vn,nu=O({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ur,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vn&&(Vn&&t.type==="mousemove"?(ar=t.screenX-Vn.screenX,nr=t.screenY-Vn.screenY):nr=ar=0,Vn=t),ar)},movementY:function(t){return"movementY"in t?t.movementY:nr}}),gf=ie(nu),P1=O({},nu,{dataTransfer:0}),I1=ie(P1),tg=O({},Qn,{relatedTarget:0}),ir=ie(tg),eg=O({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),lg=ie(eg),ag=O({},ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ng=ie(ag),ig=O({},ia,{data:0}),vf=ie(ig),ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rg[t])?!!e[t]:!1}function ur(){return sg}var cg=O({},Qn,{key:function(t){if(t.key){var e=ug[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=eu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?og[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ur,charCode:function(t){return t.type==="keypress"?eu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fg=ie(cg),dg=O({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mf=ie(dg),hg=O({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ur}),pg=ie(hg),gg=O({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),vg=ie(gg),mg=O({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bg=ie(mg),yg=O({},ia,{newState:0,oldState:0}),Ag=ie(yg),xg=[9,13,27,32],or=nl&&"CompositionEvent"in window,$n=null;nl&&"documentMode"in document&&($n=document.documentMode);var Sg=nl&&"TextEvent"in window&&!$n,bf=nl&&(!or||$n&&8<$n&&11>=$n),yf=" ",Af=!1;function xf(t,e){switch(t){case"keyup":return xg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $a=!1;function Eg(t,e){switch(t){case"compositionend":return Sf(e);case"keypress":return e.which!==32?null:(Af=!0,yf);case"textInput":return t=e.data,t===yf&&Af?null:t;default:return null}}function wg(t,e){if($a)return t==="compositionend"||!or&&xf(t,e)?(t=hf(),tu=lr=Tl=null,$a=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bf&&e.locale!=="ko"?null:e.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zg[t.type]:e==="textarea"}function wf(t,e,l,a){Qa?Va?Va.push(a):Va=[a]:Qa=a,e=Gu(e,"onChange"),0<e.length&&(l=new au("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Gn=null,Yn=null;function Tg(t){n0(t,0)}function iu(t){var e=Hn(t);if(nf(e))return t}function zf(t,e){if(t==="change")return e}var Tf=!1;if(nl){var rr;if(nl){var sr="oninput"in document;if(!sr){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),sr=typeof Bf.oninput=="function"}rr=sr}else rr=!1;Tf=rr&&(!document.documentMode||9<document.documentMode)}function Mf(){Gn&&(Gn.detachEvent("onpropertychange",Of),Yn=Gn=null)}function Of(t){if(t.propertyName==="value"&&iu(Yn)){var e=[];wf(e,Yn,t,Io(t)),df(Tg,e)}}function Bg(t,e,l){t==="focusin"?(Mf(),Gn=e,Yn=l,Gn.attachEvent("onpropertychange",Of)):t==="focusout"&&Mf()}function Mg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(Yn)}function Og(t,e){if(t==="click")return iu(e)}function Dg(t,e){if(t==="input"||t==="change")return iu(e)}function Cg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var de=typeof Object.is=="function"?Object.is:Cg;function Xn(t,e){if(de(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!Ee.call(e,i)||!de(t[i],e[i]))return!1}return!0}function Df(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cf(t,e){var l=Df(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Df(l)}}function _f(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_f(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Pi(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Pi(t.document)}return e}function cr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var _g=nl&&"documentMode"in document&&11>=document.documentMode,Ga=null,fr=null,Zn=null,dr=!1;function kf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;dr||Ga==null||Ga!==Pi(a)||(a=Ga,"selectionStart"in a&&cr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Zn&&Xn(Zn,a)||(Zn=a,a=Gu(fr,"onSelect"),0<a.length&&(e=new au("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ga)))}function ua(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Ya={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionrun:ua("Transition","TransitionRun"),transitionstart:ua("Transition","TransitionStart"),transitioncancel:ua("Transition","TransitionCancel"),transitionend:ua("Transition","TransitionEnd")},hr={},Nf={};nl&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function oa(t){if(hr[t])return hr[t];if(!Ya[t])return t;var e=Ya[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Nf)return hr[t]=e[l];return t}var Rf=oa("animationend"),jf=oa("animationiteration"),Hf=oa("animationstart"),Ug=oa("transitionrun"),kg=oa("transitionstart"),Ng=oa("transitioncancel"),Lf=oa("transitionend"),qf=new Map,pr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pr.push("scrollEnd");function Le(t,e){qf.set(t,e),na(e,[t])}var Qf=new WeakMap;function Te(t,e){if(typeof t=="object"&&t!==null){var l=Qf.get(t);return l!==void 0?l:(e={value:t,source:e,stack:lf(e)},Qf.set(t,e),e)}return{value:t,source:e,stack:lf(e)}}var Be=[],Xa=0,gr=0;function uu(){for(var t=Xa,e=gr=Xa=0;e<t;){var l=Be[e];Be[e++]=null;var a=Be[e];Be[e++]=null;var i=Be[e];Be[e++]=null;var o=Be[e];if(Be[e++]=null,a!==null&&i!==null){var c=a.pending;c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i}o!==0&&Vf(l,i,o)}}function ou(t,e,l,a){Be[Xa++]=t,Be[Xa++]=e,Be[Xa++]=l,Be[Xa++]=a,gr|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function vr(t,e,l,a){return ou(t,e,l,a),ru(t)}function Za(t,e){return ou(t,null,null,e),ru(t)}function Vf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var i=!1,o=t.return;o!==null;)o.childLanes|=l,a=o.alternate,a!==null&&(a.childLanes|=l),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(i=!0)),t=o,o=o.return;return t.tag===3?(o=t.stateNode,i&&e!==null&&(i=31-fe(l),t=o.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=l|536870912),o):null}function ru(t){if(50<bi)throw bi=0,Ss=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ka={};function Rg(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function he(t,e,l,a){return new Rg(t,e,l,a)}function mr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function il(t,e){var l=t.alternate;return l===null?(l=he(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function $f(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function su(t,e,l,a,i,o){var c=0;if(a=t,typeof t=="function")mr(t)&&(c=1);else if(typeof t=="string")c=Hv(t,l,Tt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case je:return t=he(31,l,e,i),t.elementType=je,t.lanes=o,t;case U:return ra(l.children,i,o,e);case k:c=8,i|=24;break;case F:return t=he(12,l,e,i|2),t.elementType=F,t.lanes=o,t;case pt:return t=he(13,l,e,i),t.elementType=pt,t.lanes=o,t;case tt:return t=he(19,l,e,i),t.elementType=tt,t.lanes=o,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W:case R:c=10;break t;case V:c=9;break t;case Q:c=11;break t;case J:c=14;break t;case Lt:c=16,a=null;break t}c=29,l=Error(s(130,t===null?"null":typeof t,"")),a=null}return e=he(c,l,e,i),e.elementType=t,e.type=a,e.lanes=o,e}function ra(t,e,l,a){return t=he(7,t,a,e),t.lanes=l,t}function br(t,e,l){return t=he(6,t,null,e),t.lanes=l,t}function yr(t,e,l){return e=he(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ja=[],Fa=0,cu=null,fu=0,Me=[],Oe=0,sa=null,ul=1,ol="";function ca(t,e){Ja[Fa++]=fu,Ja[Fa++]=cu,cu=t,fu=e}function Gf(t,e,l){Me[Oe++]=ul,Me[Oe++]=ol,Me[Oe++]=sa,sa=t;var a=ul;t=ol;var i=32-fe(a)-1;a&=~(1<<i),l+=1;var o=32-fe(e)+i;if(30<o){var c=i-i%5;o=(a&(1<<c)-1).toString(32),a>>=c,i-=c,ul=1<<32-fe(e)+i|l<<i|a,ol=o+t}else ul=1<<o|l<<i|a,ol=t}function Ar(t){t.return!==null&&(ca(t,1),Gf(t,1,0))}function xr(t){for(;t===cu;)cu=Ja[--Fa],Ja[Fa]=null,fu=Ja[--Fa],Ja[Fa]=null;for(;t===sa;)sa=Me[--Oe],Me[Oe]=null,ol=Me[--Oe],Me[Oe]=null,ul=Me[--Oe],Me[Oe]=null}var It=null,Bt=null,ft=!1,fa=null,Ke=!1,Sr=Error(s(519));function da(t){var e=Error(s(418,""));throw Fn(Te(e,t)),Sr}function Yf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Ft]=t,e[ne]=a,l){case"dialog":at("cancel",e),at("close",e);break;case"iframe":case"object":case"embed":at("load",e);break;case"video":case"audio":for(l=0;l<Ai.length;l++)at(Ai[l],e);break;case"source":at("error",e);break;case"img":case"image":case"link":at("error",e),at("load",e);break;case"details":at("toggle",e);break;case"input":at("invalid",e),uf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Wi(e);break;case"select":at("invalid",e);break;case"textarea":at("invalid",e),rf(e,a.value,a.defaultValue,a.children),Wi(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||r0(e.textContent,l)?(a.popover!=null&&(at("beforetoggle",e),at("toggle",e)),a.onScroll!=null&&at("scroll",e),a.onScrollEnd!=null&&at("scrollend",e),a.onClick!=null&&(e.onclick=Yu),e=!0):e=!1,e||da(t)}function Xf(t){for(It=t.return;It;)switch(It.tag){case 5:case 13:Ke=!1;return;case 27:case 3:Ke=!0;return;default:It=It.return}}function Kn(t){if(t!==It)return!1;if(!ft)return Xf(t),ft=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Hs(t.type,t.memoizedProps)),l=!l),l&&Bt&&da(t),Xf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){Bt=Qe(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}Bt=null}}else e===27?(e=Bt,Vl(t.type)?(t=Vs,Vs=null,Bt=t):Bt=e):Bt=It?Qe(t.stateNode.nextSibling):null;return!0}function Jn(){Bt=It=null,ft=!1}function Zf(){var t=fa;return t!==null&&(re===null?re=t:re.push.apply(re,t),fa=null),t}function Fn(t){fa===null?fa=[t]:fa.push(t)}var Er=Dt(null),ha=null,rl=null;function Bl(t,e,l){ct(Er,e._currentValue),e._currentValue=l}function sl(t){t._currentValue=Er.current,ot(Er)}function wr(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function zr(t,e,l,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){var c=i.child;o=o.firstContext;t:for(;o!==null;){var h=o;o=i;for(var g=0;g<e.length;g++)if(h.context===e[g]){o.lanes|=l,h=o.alternate,h!==null&&(h.lanes|=l),wr(o.return,l,t),a||(c=null);break t}o=h.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(s(341));c.lanes|=l,o=c.alternate,o!==null&&(o.lanes|=l),wr(c,l,t),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===t){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function Wn(t,e,l,a){t=null;for(var i=e,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(s(387));if(c=c.memoizedProps,c!==null){var h=i.type;de(i.pendingProps.value,c.value)||(t!==null?t.push(h):t=[h])}}else if(i===el.current){if(c=i.alternate,c===null)throw Error(s(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ti):t=[Ti])}i=i.return}t!==null&&zr(e,t,l,a),e.flags|=262144}function du(t){for(t=t.firstContext;t!==null;){if(!de(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pa(t){ha=t,rl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wt(t){return Kf(ha,t)}function hu(t,e){return ha===null&&pa(t),Kf(t,e)}function Kf(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},rl===null){if(t===null)throw Error(s(308));rl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else rl=rl.next=e;return l}var jg=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Hg=n.unstable_scheduleCallback,Lg=n.unstable_NormalPriority,jt={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tr(){return{controller:new jg,data:new Map,refCount:0}}function Pn(t){t.refCount--,t.refCount===0&&Hg(Lg,function(){t.controller.abort()})}var In=null,Br=0,Wa=0,Pa=null;function qg(t,e){if(In===null){var l=In=[];Br=0,Wa=Os(),Pa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Br++,e.then(Jf,Jf),e}function Jf(){if(--Br===0&&In!==null){Pa!==null&&(Pa.status="fulfilled");var t=In;In=null,Wa=0,Pa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Qg(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<l.length;i++)(0,l[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Ff=B.S;B.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&qg(t,e),Ff!==null&&Ff(t,e)};var ga=Dt(null);function Mr(){var t=ga.current;return t!==null?t:St.pooledCache}function pu(t,e){e===null?ct(ga,ga.current):ct(ga,e.pool)}function Wf(){var t=Mr();return t===null?null:{parent:jt._currentValue,pool:t}}var ti=Error(s(460)),Pf=Error(s(474)),gu=Error(s(542)),Or={then:function(){}};function If(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vu(){}function td(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(vu,vu),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ld(t),t;default:if(typeof e.status=="string")e.then(vu,vu);else{if(t=St,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ld(t),t}throw ei=e,ti}}var ei=null;function ed(){if(ei===null)throw Error(s(459));var t=ei;return ei=null,t}function ld(t){if(t===ti||t===gu)throw Error(s(483))}var Ml=!1;function Dr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ol(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Dl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(gt&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=ru(t),Vf(t,null,l),e}return ou(t,a,e,l),ru(t)}function li(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Kc(t,l)}}function _r(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,o=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};o===null?i=o=c:o=o.next=c,l=l.next}while(l!==null);o===null?i=o=e:o=o.next=e}else i=o=e;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Ur=!1;function ai(){if(Ur){var t=Pa;if(t!==null)throw t}}function ni(t,e,l,a){Ur=!1;var i=t.updateQueue;Ml=!1;var o=i.firstBaseUpdate,c=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var g=h,A=g.next;g.next=null,c===null?o=A:c.next=A,c=g;var z=t.alternate;z!==null&&(z=z.updateQueue,h=z.lastBaseUpdate,h!==c&&(h===null?z.firstBaseUpdate=A:h.next=A,z.lastBaseUpdate=g))}if(o!==null){var D=i.baseState;c=0,z=A=g=null,h=o;do{var S=h.lane&-536870913,w=S!==h.lane;if(w?(it&S)===S:(a&S)===S){S!==0&&S===Wa&&(Ur=!0),z!==null&&(z=z.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});t:{var Z=t,$=h;S=e;var yt=l;switch($.tag){case 1:if(Z=$.payload,typeof Z=="function"){D=Z.call(yt,D,S);break t}D=Z;break t;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=$.payload,S=typeof Z=="function"?Z.call(yt,D,S):Z,S==null)break t;D=O({},D,S);break t;case 2:Ml=!0}}S=h.callback,S!==null&&(t.flags|=64,w&&(t.flags|=8192),w=i.callbacks,w===null?i.callbacks=[S]:w.push(S))}else w={lane:S,tag:h.tag,payload:h.payload,callback:h.callback,next:null},z===null?(A=z=w,g=D):z=z.next=w,c|=S;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;w=h,h=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);z===null&&(g=D),i.baseState=g,i.firstBaseUpdate=A,i.lastBaseUpdate=z,o===null&&(i.shared.lanes=0),Hl|=c,t.lanes=c,t.memoizedState=D}}function ad(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function nd(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)ad(l[t],e)}var Ia=Dt(null),mu=Dt(0);function id(t,e){t=vl,ct(mu,t),ct(Ia,e),vl=t|e.baseLanes}function kr(){ct(mu,vl),ct(Ia,Ia.current)}function Nr(){vl=mu.current,ot(Ia),ot(mu)}var Cl=0,I=null,mt=null,Ut=null,bu=!1,tn=!1,va=!1,yu=0,ii=0,en=null,Vg=0;function Ct(){throw Error(s(321))}function Rr(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!de(t[l],e[l]))return!1;return!0}function jr(t,e,l,a,i,o){return Cl=o,I=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,B.H=t===null||t.memoizedState===null?Vd:$d,va=!1,o=l(a,i),va=!1,tn&&(o=od(e,l,a,i)),ud(t),o}function ud(t){B.H=zu;var e=mt!==null&&mt.next!==null;if(Cl=0,Ut=mt=I=null,bu=!1,ii=0,en=null,e)throw Error(s(300));t===null||Qt||(t=t.dependencies,t!==null&&du(t)&&(Qt=!0))}function od(t,e,l,a){I=t;var i=0;do{if(tn&&(en=null),ii=0,tn=!1,25<=i)throw Error(s(301));if(i+=1,Ut=mt=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}B.H=Jg,o=e(l,a)}while(tn);return o}function $g(){var t=B.H,e=t.useState()[0];return e=typeof e.then=="function"?ui(e):e,t=t.useState()[0],(mt!==null?mt.memoizedState:null)!==t&&(I.flags|=1024),e}function Hr(){var t=yu!==0;return yu=0,t}function Lr(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function qr(t){if(bu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}bu=!1}Cl=0,Ut=mt=I=null,tn=!1,ii=yu=0,en=null}function ue(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?I.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function kt(){if(mt===null){var t=I.alternate;t=t!==null?t.memoizedState:null}else t=mt.next;var e=Ut===null?I.memoizedState:Ut.next;if(e!==null)Ut=e,mt=t;else{if(t===null)throw I.alternate===null?Error(s(467)):Error(s(310));mt=t,t={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Ut===null?I.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Qr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ui(t){var e=ii;return ii+=1,en===null&&(en=[]),t=td(en,t,e),e=I,(Ut===null?e.memoizedState:Ut.next)===null&&(e=e.alternate,B.H=e===null||e.memoizedState===null?Vd:$d),t}function Au(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ui(t);if(t.$$typeof===R)return Wt(t)}throw Error(s(438,String(t)))}function Vr(t){var e=null,l=I.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=I.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Qr(),I.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Ca;return e.index++,l}function cl(t,e){return typeof e=="function"?e(t):e}function xu(t){var e=kt();return $r(e,mt,t)}function $r(t,e,l){var a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=l;var i=t.baseQueue,o=a.pending;if(o!==null){if(i!==null){var c=i.next;i.next=o.next,o.next=c}e.baseQueue=i=o,a.pending=null}if(o=t.baseState,i===null)t.memoizedState=o;else{e=i.next;var h=c=null,g=null,A=e,z=!1;do{var D=A.lane&-536870913;if(D!==A.lane?(it&D)===D:(Cl&D)===D){var S=A.revertLane;if(S===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),D===Wa&&(z=!0);else if((Cl&S)===S){A=A.next,S===Wa&&(z=!0);continue}else D={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},g===null?(h=g=D,c=o):g=g.next=D,I.lanes|=S,Hl|=S;D=A.action,va&&l(o,D),o=A.hasEagerState?A.eagerState:l(o,D)}else S={lane:D,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},g===null?(h=g=S,c=o):g=g.next=S,I.lanes|=D,Hl|=D;A=A.next}while(A!==null&&A!==e);if(g===null?c=o:g.next=h,!de(o,t.memoizedState)&&(Qt=!0,z&&(l=Pa,l!==null)))throw l;t.memoizedState=o,t.baseState=c,t.baseQueue=g,a.lastRenderedState=o}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Gr(t){var e=kt(),l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=t;var a=l.dispatch,i=l.pending,o=e.memoizedState;if(i!==null){l.pending=null;var c=i=i.next;do o=t(o,c.action),c=c.next;while(c!==i);de(o,e.memoizedState)||(Qt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),l.lastRenderedState=o}return[o,a]}function rd(t,e,l){var a=I,i=kt(),o=ft;if(o){if(l===void 0)throw Error(s(407));l=l()}else l=e();var c=!de((mt||i).memoizedState,l);c&&(i.memoizedState=l,Qt=!0),i=i.queue;var h=fd.bind(null,a,i,t);if(oi(2048,8,h,[t]),i.getSnapshot!==e||c||Ut!==null&&Ut.memoizedState.tag&1){if(a.flags|=2048,ln(9,Su(),cd.bind(null,a,i,l,e),null),St===null)throw Error(s(349));o||(Cl&124)!==0||sd(a,e,l)}return l}function sd(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=I.updateQueue,e===null?(e=Qr(),I.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function cd(t,e,l,a){e.value=l,e.getSnapshot=a,dd(e)&&hd(t)}function fd(t,e,l){return l(function(){dd(e)&&hd(t)})}function dd(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!de(t,l)}catch{return!0}}function hd(t){var e=Za(t,2);e!==null&&be(e,t,2)}function Yr(t){var e=ue();if(typeof t=="function"){var l=t;if(t=l(),va){wl(!0);try{l()}finally{wl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:t},e}function pd(t,e,l,a){return t.baseState=l,$r(t,mt,typeof a=="function"?a:cl)}function Gg(t,e,l,a,i){if(wu(t))throw Error(s(485));if(t=e.action,t!==null){var o={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){o.listeners.push(c)}};B.T!==null?l(!0):o.isTransition=!1,a(o),l=e.pending,l===null?(o.next=e.pending=o,gd(e,o)):(o.next=l.next,e.pending=l.next=o)}}function gd(t,e){var l=e.action,a=e.payload,i=t.state;if(e.isTransition){var o=B.T,c={};B.T=c;try{var h=l(i,a),g=B.S;g!==null&&g(c,h),vd(t,e,h)}catch(A){Xr(t,e,A)}finally{B.T=o}}else try{o=l(i,a),vd(t,e,o)}catch(A){Xr(t,e,A)}}function vd(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){md(t,e,a)},function(a){return Xr(t,e,a)}):md(t,e,l)}function md(t,e,l){e.status="fulfilled",e.value=l,bd(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,gd(t,l)))}function Xr(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,bd(e),e=e.next;while(e!==a)}t.action=null}function bd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function yd(t,e){return e}function Ad(t,e){if(ft){var l=St.formState;if(l!==null){t:{var a=I;if(ft){if(Bt){e:{for(var i=Bt,o=Ke;i.nodeType!==8;){if(!o){i=null;break e}if(i=Qe(i.nextSibling),i===null){i=null;break e}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){Bt=Qe(i.nextSibling),a=i.data==="F!";break t}}da(a)}a=!1}a&&(e=l[0])}}return l=ue(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yd,lastRenderedState:e},l.queue=a,l=Ld.bind(null,I,a),a.dispatch=l,a=Yr(!1),o=Wr.bind(null,I,!1,a.queue),a=ue(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,l=Gg.bind(null,I,i,o,l),i.dispatch=l,a.memoizedState=t,[e,l,!1]}function xd(t){var e=kt();return Sd(e,mt,t)}function Sd(t,e,l){if(e=$r(t,e,yd)[0],t=xu(cl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=ui(e)}catch(c){throw c===ti?gu:c}else a=e;e=kt();var i=e.queue,o=i.dispatch;return l!==e.memoizedState&&(I.flags|=2048,ln(9,Su(),Yg.bind(null,i,l),null)),[a,o,t]}function Yg(t,e){t.action=e}function Ed(t){var e=kt(),l=mt;if(l!==null)return Sd(e,l,t);kt(),e=e.memoizedState,l=kt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function ln(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=I.updateQueue,e===null&&(e=Qr(),I.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Su(){return{destroy:void 0,resource:void 0}}function wd(){return kt().memoizedState}function Eu(t,e,l,a){var i=ue();a=a===void 0?null:a,I.flags|=t,i.memoizedState=ln(1|e,Su(),l,a)}function oi(t,e,l,a){var i=kt();a=a===void 0?null:a;var o=i.memoizedState.inst;mt!==null&&a!==null&&Rr(a,mt.memoizedState.deps)?i.memoizedState=ln(e,o,l,a):(I.flags|=t,i.memoizedState=ln(1|e,o,l,a))}function zd(t,e){Eu(8390656,8,t,e)}function Td(t,e){oi(2048,8,t,e)}function Bd(t,e){return oi(4,2,t,e)}function Md(t,e){return oi(4,4,t,e)}function Od(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dd(t,e,l){l=l!=null?l.concat([t]):null,oi(4,4,Od.bind(null,e,t),l)}function Zr(){}function Cd(t,e){var l=kt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Rr(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function _d(t,e){var l=kt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Rr(e,a[1]))return a[0];if(a=t(),va){wl(!0);try{t()}finally{wl(!1)}}return l.memoizedState=[a,e],a}function Kr(t,e,l){return l===void 0||(Cl&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=Nh(),I.lanes|=t,Hl|=t,l)}function Ud(t,e,l,a){return de(l,e)?l:Ia.current!==null?(t=Kr(t,l,a),de(t,e)||(Qt=!0),t):(Cl&42)===0?(Qt=!0,t.memoizedState=l):(t=Nh(),I.lanes|=t,Hl|=t,e)}function kd(t,e,l,a,i){var o=N.p;N.p=o!==0&&8>o?o:8;var c=B.T,h={};B.T=h,Wr(t,!1,e,l);try{var g=i(),A=B.S;if(A!==null&&A(h,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var z=Qg(g,a);ri(t,e,z,me(t))}else ri(t,e,a,me(t))}catch(D){ri(t,e,{then:function(){},status:"rejected",reason:D},me())}finally{N.p=o,B.T=c}}function Xg(){}function Jr(t,e,l,a){if(t.tag!==5)throw Error(s(476));var i=Nd(t).queue;kd(t,i,e,Y,l===null?Xg:function(){return Rd(t),l(a)})}function Nd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:Y},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Rd(t){var e=Nd(t).next.queue;ri(t,e,{},me())}function Fr(){return Wt(Ti)}function jd(){return kt().memoizedState}function Hd(){return kt().memoizedState}function Zg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=me();t=Ol(l);var a=Dl(e,t,l);a!==null&&(be(a,e,l),li(a,e,l)),e={cache:Tr()},t.payload=e;return}e=e.return}}function Kg(t,e,l){var a=me();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},wu(t)?qd(e,l):(l=vr(t,e,l,a),l!==null&&(be(l,t,a),Qd(l,e,a)))}function Ld(t,e,l){var a=me();ri(t,e,l,a)}function ri(t,e,l,a){var i={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(wu(t))qd(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var c=e.lastRenderedState,h=o(c,l);if(i.hasEagerState=!0,i.eagerState=h,de(h,c))return ou(t,e,i,0),St===null&&uu(),!1}catch{}finally{}if(l=vr(t,e,i,a),l!==null)return be(l,t,a),Qd(l,e,a),!0}return!1}function Wr(t,e,l,a){if(a={lane:2,revertLane:Os(),action:a,hasEagerState:!1,eagerState:null,next:null},wu(t)){if(e)throw Error(s(479))}else e=vr(t,l,a,2),e!==null&&be(e,t,2)}function wu(t){var e=t.alternate;return t===I||e!==null&&e===I}function qd(t,e){tn=bu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Qd(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Kc(t,l)}}var zu={readContext:Wt,use:Au,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useInsertionEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useSyncExternalStore:Ct,useId:Ct,useHostTransitionStatus:Ct,useFormState:Ct,useActionState:Ct,useOptimistic:Ct,useMemoCache:Ct,useCacheRefresh:Ct},Vd={readContext:Wt,use:Au,useCallback:function(t,e){return ue().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:zd,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Eu(4194308,4,Od.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Eu(4194308,4,t,e)},useInsertionEffect:function(t,e){Eu(4,2,t,e)},useMemo:function(t,e){var l=ue();e=e===void 0?null:e;var a=t();if(va){wl(!0);try{t()}finally{wl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=ue();if(l!==void 0){var i=l(e);if(va){wl(!0);try{l(e)}finally{wl(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=Kg.bind(null,I,t),[a.memoizedState,t]},useRef:function(t){var e=ue();return t={current:t},e.memoizedState=t},useState:function(t){t=Yr(t);var e=t.queue,l=Ld.bind(null,I,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Zr,useDeferredValue:function(t,e){var l=ue();return Kr(l,t,e)},useTransition:function(){var t=Yr(!1);return t=kd.bind(null,I,t.queue,!0,!1),ue().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=I,i=ue();if(ft){if(l===void 0)throw Error(s(407));l=l()}else{if(l=e(),St===null)throw Error(s(349));(it&124)!==0||sd(a,e,l)}i.memoizedState=l;var o={value:l,getSnapshot:e};return i.queue=o,zd(fd.bind(null,a,o,t),[t]),a.flags|=2048,ln(9,Su(),cd.bind(null,a,o,l,e),null),l},useId:function(){var t=ue(),e=St.identifierPrefix;if(ft){var l=ol,a=ul;l=(a&~(1<<32-fe(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=yu++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=Vg++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Fr,useFormState:Ad,useActionState:Ad,useOptimistic:function(t){var e=ue();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Wr.bind(null,I,!0,l),l.dispatch=e,[t,e]},useMemoCache:Vr,useCacheRefresh:function(){return ue().memoizedState=Zg.bind(null,I)}},$d={readContext:Wt,use:Au,useCallback:Cd,useContext:Wt,useEffect:Td,useImperativeHandle:Dd,useInsertionEffect:Bd,useLayoutEffect:Md,useMemo:_d,useReducer:xu,useRef:wd,useState:function(){return xu(cl)},useDebugValue:Zr,useDeferredValue:function(t,e){var l=kt();return Ud(l,mt.memoizedState,t,e)},useTransition:function(){var t=xu(cl)[0],e=kt().memoizedState;return[typeof t=="boolean"?t:ui(t),e]},useSyncExternalStore:rd,useId:jd,useHostTransitionStatus:Fr,useFormState:xd,useActionState:xd,useOptimistic:function(t,e){var l=kt();return pd(l,mt,t,e)},useMemoCache:Vr,useCacheRefresh:Hd},Jg={readContext:Wt,use:Au,useCallback:Cd,useContext:Wt,useEffect:Td,useImperativeHandle:Dd,useInsertionEffect:Bd,useLayoutEffect:Md,useMemo:_d,useReducer:Gr,useRef:wd,useState:function(){return Gr(cl)},useDebugValue:Zr,useDeferredValue:function(t,e){var l=kt();return mt===null?Kr(l,t,e):Ud(l,mt.memoizedState,t,e)},useTransition:function(){var t=Gr(cl)[0],e=kt().memoizedState;return[typeof t=="boolean"?t:ui(t),e]},useSyncExternalStore:rd,useId:jd,useHostTransitionStatus:Fr,useFormState:Ed,useActionState:Ed,useOptimistic:function(t,e){var l=kt();return mt!==null?pd(l,mt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Vr,useCacheRefresh:Hd},an=null,si=0;function Tu(t){var e=si;return si+=1,an===null&&(an=[]),td(an,t,e)}function ci(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Bu(t,e){throw e.$$typeof===C?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Gd(t){var e=t._init;return e(t._payload)}function Yd(t){function e(m,v){if(t){var y=m.deletions;y===null?(m.deletions=[v],m.flags|=16):y.push(v)}}function l(m,v){if(!t)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function a(m){for(var v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(m,v){return m=il(m,v),m.index=0,m.sibling=null,m}function o(m,v,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<v?(m.flags|=67108866,v):y):(m.flags|=67108866,v)):(m.flags|=1048576,v)}function c(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function h(m,v,y,M){return v===null||v.tag!==6?(v=br(y,m.mode,M),v.return=m,v):(v=i(v,y),v.return=m,v)}function g(m,v,y,M){var j=y.type;return j===U?z(m,v,y.props.children,M,y.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Lt&&Gd(j)===v.type)?(v=i(v,y.props),ci(v,y),v.return=m,v):(v=su(y.type,y.key,y.props,null,m.mode,M),ci(v,y),v.return=m,v)}function A(m,v,y,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=yr(y,m.mode,M),v.return=m,v):(v=i(v,y.children||[]),v.return=m,v)}function z(m,v,y,M,j){return v===null||v.tag!==7?(v=ra(y,m.mode,M,j),v.return=m,v):(v=i(v,y),v.return=m,v)}function D(m,v,y){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=br(""+v,m.mode,y),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _:return y=su(v.type,v.key,v.props,null,m.mode,y),ci(y,v),y.return=m,y;case L:return v=yr(v,m.mode,y),v.return=m,v;case Lt:var M=v._init;return v=M(v._payload),D(m,v,y)}if(He(v)||ee(v))return v=ra(v,m.mode,y,null),v.return=m,v;if(typeof v.then=="function")return D(m,Tu(v),y);if(v.$$typeof===R)return D(m,hu(m,v),y);Bu(m,v)}return null}function S(m,v,y,M){var j=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return j!==null?null:h(m,v,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _:return y.key===j?g(m,v,y,M):null;case L:return y.key===j?A(m,v,y,M):null;case Lt:return j=y._init,y=j(y._payload),S(m,v,y,M)}if(He(y)||ee(y))return j!==null?null:z(m,v,y,M,null);if(typeof y.then=="function")return S(m,v,Tu(y),M);if(y.$$typeof===R)return S(m,v,hu(m,y),M);Bu(m,y)}return null}function w(m,v,y,M,j){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return m=m.get(y)||null,h(v,m,""+M,j);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case _:return m=m.get(M.key===null?y:M.key)||null,g(v,m,M,j);case L:return m=m.get(M.key===null?y:M.key)||null,A(v,m,M,j);case Lt:var et=M._init;return M=et(M._payload),w(m,v,y,M,j)}if(He(M)||ee(M))return m=m.get(y)||null,z(v,m,M,j,null);if(typeof M.then=="function")return w(m,v,y,Tu(M),j);if(M.$$typeof===R)return w(m,v,y,hu(v,M),j);Bu(v,M)}return null}function Z(m,v,y,M){for(var j=null,et=null,q=v,G=v=0,$t=null;q!==null&&G<y.length;G++){q.index>G?($t=q,q=null):$t=q.sibling;var rt=S(m,q,y[G],M);if(rt===null){q===null&&(q=$t);break}t&&q&&rt.alternate===null&&e(m,q),v=o(rt,v,G),et===null?j=rt:et.sibling=rt,et=rt,q=$t}if(G===y.length)return l(m,q),ft&&ca(m,G),j;if(q===null){for(;G<y.length;G++)q=D(m,y[G],M),q!==null&&(v=o(q,v,G),et===null?j=q:et.sibling=q,et=q);return ft&&ca(m,G),j}for(q=a(q);G<y.length;G++)$t=w(q,m,G,y[G],M),$t!==null&&(t&&$t.alternate!==null&&q.delete($t.key===null?G:$t.key),v=o($t,v,G),et===null?j=$t:et.sibling=$t,et=$t);return t&&q.forEach(function(Zl){return e(m,Zl)}),ft&&ca(m,G),j}function $(m,v,y,M){if(y==null)throw Error(s(151));for(var j=null,et=null,q=v,G=v=0,$t=null,rt=y.next();q!==null&&!rt.done;G++,rt=y.next()){q.index>G?($t=q,q=null):$t=q.sibling;var Zl=S(m,q,rt.value,M);if(Zl===null){q===null&&(q=$t);break}t&&q&&Zl.alternate===null&&e(m,q),v=o(Zl,v,G),et===null?j=Zl:et.sibling=Zl,et=Zl,q=$t}if(rt.done)return l(m,q),ft&&ca(m,G),j;if(q===null){for(;!rt.done;G++,rt=y.next())rt=D(m,rt.value,M),rt!==null&&(v=o(rt,v,G),et===null?j=rt:et.sibling=rt,et=rt);return ft&&ca(m,G),j}for(q=a(q);!rt.done;G++,rt=y.next())rt=w(q,m,G,rt.value,M),rt!==null&&(t&&rt.alternate!==null&&q.delete(rt.key===null?G:rt.key),v=o(rt,v,G),et===null?j=rt:et.sibling=rt,et=rt);return t&&q.forEach(function(Fv){return e(m,Fv)}),ft&&ca(m,G),j}function yt(m,v,y,M){if(typeof y=="object"&&y!==null&&y.type===U&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case _:t:{for(var j=y.key;v!==null;){if(v.key===j){if(j=y.type,j===U){if(v.tag===7){l(m,v.sibling),M=i(v,y.props.children),M.return=m,m=M;break t}}else if(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Lt&&Gd(j)===v.type){l(m,v.sibling),M=i(v,y.props),ci(M,y),M.return=m,m=M;break t}l(m,v);break}else e(m,v);v=v.sibling}y.type===U?(M=ra(y.props.children,m.mode,M,y.key),M.return=m,m=M):(M=su(y.type,y.key,y.props,null,m.mode,M),ci(M,y),M.return=m,m=M)}return c(m);case L:t:{for(j=y.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){l(m,v.sibling),M=i(v,y.children||[]),M.return=m,m=M;break t}else{l(m,v);break}else e(m,v);v=v.sibling}M=yr(y,m.mode,M),M.return=m,m=M}return c(m);case Lt:return j=y._init,y=j(y._payload),yt(m,v,y,M)}if(He(y))return Z(m,v,y,M);if(ee(y)){if(j=ee(y),typeof j!="function")throw Error(s(150));return y=j.call(y),$(m,v,y,M)}if(typeof y.then=="function")return yt(m,v,Tu(y),M);if(y.$$typeof===R)return yt(m,v,hu(m,y),M);Bu(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,v!==null&&v.tag===6?(l(m,v.sibling),M=i(v,y),M.return=m,m=M):(l(m,v),M=br(y,m.mode,M),M.return=m,m=M),c(m)):l(m,v)}return function(m,v,y,M){try{si=0;var j=yt(m,v,y,M);return an=null,j}catch(q){if(q===ti||q===gu)throw q;var et=he(29,q,null,m.mode);return et.lanes=M,et.return=m,et}finally{}}}var nn=Yd(!0),Xd=Yd(!1),De=Dt(null),Je=null;function _l(t){var e=t.alternate;ct(Ht,Ht.current&1),ct(De,t),Je===null&&(e===null||Ia.current!==null||e.memoizedState!==null)&&(Je=t)}function Zd(t){if(t.tag===22){if(ct(Ht,Ht.current),ct(De,t),Je===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Je=t)}}else Ul()}function Ul(){ct(Ht,Ht.current),ct(De,De.current)}function fl(t){ot(De),Je===t&&(Je=null),ot(Ht)}var Ht=Dt(0);function Mu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Qs(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Pr(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:O({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Ir={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=me(),i=Ol(a);i.payload=e,l!=null&&(i.callback=l),e=Dl(t,i,a),e!==null&&(be(e,t,a),li(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=me(),i=Ol(a);i.tag=1,i.payload=e,l!=null&&(i.callback=l),e=Dl(t,i,a),e!==null&&(be(e,t,a),li(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=me(),a=Ol(l);a.tag=2,e!=null&&(a.callback=e),e=Dl(t,a,l),e!==null&&(be(e,t,l),li(e,t,l))}};function Kd(t,e,l,a,i,o,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,o,c):e.prototype&&e.prototype.isPureReactComponent?!Xn(l,a)||!Xn(i,o):!0}function Jd(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Ir.enqueueReplaceState(e,e.state,null)}function ma(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=O({},l));for(var i in t)l[i]===void 0&&(l[i]=t[i])}return l}var Ou=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}};function Fd(t){Ou(t)}function Wd(t){}function Pd(t){Ou(t)}function Du(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Id(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ts(t,e,l){return l=Ol(l),l.tag=3,l.payload={element:null},l.callback=function(){Du(t,e)},l}function th(t){return t=Ol(t),t.tag=3,t}function eh(t,e,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var o=a.value;t.payload=function(){return i(o)},t.callback=function(){Id(e,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){Id(e,l,a),typeof i!="function"&&(Ll===null?Ll=new Set([this]):Ll.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function Fg(t,e,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Wn(e,l,i,!0),l=De.current,l!==null){switch(l.tag){case 13:return Je===null?ws():l.alternate===null&&Mt===0&&(Mt=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===Or?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Ts(t,a,i)),!1;case 22:return l.flags|=65536,a===Or?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Ts(t,a,i)),!1}throw Error(s(435,l.tag))}return Ts(t,a,i),ws(),!1}if(ft)return e=De.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==Sr&&(t=Error(s(422),{cause:a}),Fn(Te(t,l)))):(a!==Sr&&(e=Error(s(423),{cause:a}),Fn(Te(e,l))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=Te(a,l),i=ts(t.stateNode,a,i),_r(t,i),Mt!==4&&(Mt=2)),!1;var o=Error(s(520),{cause:a});if(o=Te(o,l),mi===null?mi=[o]:mi.push(o),Mt!==4&&(Mt=2),e===null)return!0;a=Te(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=i&-i,l.lanes|=t,t=ts(l.stateNode,a,t),_r(l,t),!1;case 1:if(e=l.type,o=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Ll===null||!Ll.has(o))))return l.flags|=65536,i&=-i,l.lanes|=i,i=th(i),eh(i,t,l,a),_r(l,i),!1}l=l.return}while(l!==null);return!1}var lh=Error(s(461)),Qt=!1;function Xt(t,e,l,a){e.child=t===null?Xd(e,null,l,a):nn(e,t.child,l,a)}function ah(t,e,l,a,i){l=l.render;var o=e.ref;if("ref"in a){var c={};for(var h in a)h!=="ref"&&(c[h]=a[h])}else c=a;return pa(e),a=jr(t,e,l,c,o,i),h=Hr(),t!==null&&!Qt?(Lr(t,e,i),dl(t,e,i)):(ft&&h&&Ar(e),e.flags|=1,Xt(t,e,a,i),e.child)}function nh(t,e,l,a,i){if(t===null){var o=l.type;return typeof o=="function"&&!mr(o)&&o.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=o,ih(t,e,o,a,i)):(t=su(l.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!rs(t,i)){var c=o.memoizedProps;if(l=l.compare,l=l!==null?l:Xn,l(c,a)&&t.ref===e.ref)return dl(t,e,i)}return e.flags|=1,t=il(o,a),t.ref=e.ref,t.return=e,e.child=t}function ih(t,e,l,a,i){if(t!==null){var o=t.memoizedProps;if(Xn(o,a)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=a=o,rs(t,i))(t.flags&131072)!==0&&(Qt=!0);else return e.lanes=t.lanes,dl(t,e,i)}return es(t,e,l,a,i)}function uh(t,e,l){var a=e.pendingProps,i=a.children,o=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=o!==null?o.baseLanes|l:l,t!==null){for(i=e.child=t.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;e.childLanes=o&~a}else e.childLanes=0,e.child=null;return oh(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&pu(e,o!==null?o.cachePool:null),o!==null?id(e,o):kr(),Zd(e);else return e.lanes=e.childLanes=536870912,oh(t,e,o!==null?o.baseLanes|l:l,l)}else o!==null?(pu(e,o.cachePool),id(e,o),Ul(),e.memoizedState=null):(t!==null&&pu(e,null),kr(),Ul());return Xt(t,e,i,l),e.child}function oh(t,e,l,a){var i=Mr();return i=i===null?null:{parent:jt._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&pu(e,null),kr(),Zd(e),t!==null&&Wn(t,e,a,!0),null}function Cu(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function es(t,e,l,a,i){return pa(e),l=jr(t,e,l,a,void 0,i),a=Hr(),t!==null&&!Qt?(Lr(t,e,i),dl(t,e,i)):(ft&&a&&Ar(e),e.flags|=1,Xt(t,e,l,i),e.child)}function rh(t,e,l,a,i,o){return pa(e),e.updateQueue=null,l=od(e,a,l,i),ud(t),a=Hr(),t!==null&&!Qt?(Lr(t,e,o),dl(t,e,o)):(ft&&a&&Ar(e),e.flags|=1,Xt(t,e,l,o),e.child)}function sh(t,e,l,a,i){if(pa(e),e.stateNode===null){var o=Ka,c=l.contextType;typeof c=="object"&&c!==null&&(o=Wt(c)),o=new l(a,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ir,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=a,o.state=e.memoizedState,o.refs={},Dr(e),c=l.contextType,o.context=typeof c=="object"&&c!==null?Wt(c):Ka,o.state=e.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(Pr(e,l,c,a),o.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(c=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),c!==o.state&&Ir.enqueueReplaceState(o,o.state,null),ni(e,a,o,i),ai(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){o=e.stateNode;var h=e.memoizedProps,g=ma(l,h);o.props=g;var A=o.context,z=l.contextType;c=Ka,typeof z=="object"&&z!==null&&(c=Wt(z));var D=l.getDerivedStateFromProps;z=typeof D=="function"||typeof o.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,z||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h||A!==c)&&Jd(e,o,a,c),Ml=!1;var S=e.memoizedState;o.state=S,ni(e,a,o,i),ai(),A=e.memoizedState,h||S!==A||Ml?(typeof D=="function"&&(Pr(e,l,D,a),A=e.memoizedState),(g=Ml||Kd(e,l,g,a,S,A,c))?(z||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=A),o.props=a,o.state=A,o.context=c,a=g):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{o=e.stateNode,Cr(t,e),c=e.memoizedProps,z=ma(l,c),o.props=z,D=e.pendingProps,S=o.context,A=l.contextType,g=Ka,typeof A=="object"&&A!==null&&(g=Wt(A)),h=l.getDerivedStateFromProps,(A=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==D||S!==g)&&Jd(e,o,a,g),Ml=!1,S=e.memoizedState,o.state=S,ni(e,a,o,i),ai();var w=e.memoizedState;c!==D||S!==w||Ml||t!==null&&t.dependencies!==null&&du(t.dependencies)?(typeof h=="function"&&(Pr(e,l,h,a),w=e.memoizedState),(z=Ml||Kd(e,l,z,a,S,w,g)||t!==null&&t.dependencies!==null&&du(t.dependencies))?(A||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,w,g),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,w,g)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=w),o.props=a,o.state=w,o.context=g,a=z):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),a=!1)}return o=a,Cu(t,e),a=(e.flags&128)!==0,o||a?(o=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&a?(e.child=nn(e,t.child,null,i),e.child=nn(e,null,l,i)):Xt(t,e,l,i),e.memoizedState=o.state,t=e.child):t=dl(t,e,i),t}function ch(t,e,l,a){return Jn(),e.flags|=256,Xt(t,e,l,a),e.child}var ls={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function as(t){return{baseLanes:t,cachePool:Wf()}}function ns(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ce),t}function fh(t,e,l){var a=e.pendingProps,i=!1,o=(e.flags&128)!==0,c;if((c=o)||(c=t!==null&&t.memoizedState===null?!1:(Ht.current&2)!==0),c&&(i=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(ft){if(i?_l(e):Ul(),ft){var h=Bt,g;if(g=h){t:{for(g=h,h=Ke;g.nodeType!==8;){if(!h){h=null;break t}if(g=Qe(g.nextSibling),g===null){h=null;break t}}h=g}h!==null?(e.memoizedState={dehydrated:h,treeContext:sa!==null?{id:ul,overflow:ol}:null,retryLane:536870912,hydrationErrors:null},g=he(18,null,null,0),g.stateNode=h,g.return=e,e.child=g,It=e,Bt=null,g=!0):g=!1}g||da(e)}if(h=e.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Qs(h)?e.lanes=32:e.lanes=536870912,null;fl(e)}return h=a.children,a=a.fallback,i?(Ul(),i=e.mode,h=_u({mode:"hidden",children:h},i),a=ra(a,i,l,null),h.return=e,a.return=e,h.sibling=a,e.child=h,i=e.child,i.memoizedState=as(l),i.childLanes=ns(t,c,l),e.memoizedState=ls,a):(_l(e),is(e,h))}if(g=t.memoizedState,g!==null&&(h=g.dehydrated,h!==null)){if(o)e.flags&256?(_l(e),e.flags&=-257,e=us(t,e,l)):e.memoizedState!==null?(Ul(),e.child=t.child,e.flags|=128,e=null):(Ul(),i=a.fallback,h=e.mode,a=_u({mode:"visible",children:a.children},h),i=ra(i,h,l,null),i.flags|=2,a.return=e,i.return=e,a.sibling=i,e.child=a,nn(e,t.child,null,l),a=e.child,a.memoizedState=as(l),a.childLanes=ns(t,c,l),e.memoizedState=ls,e=i);else if(_l(e),Qs(h)){if(c=h.nextSibling&&h.nextSibling.dataset,c)var A=c.dgst;c=A,a=Error(s(419)),a.stack="",a.digest=c,Fn({value:a,source:null,stack:null}),e=us(t,e,l)}else if(Qt||Wn(t,e,l,!1),c=(l&t.childLanes)!==0,Qt||c){if(c=St,c!==null&&(a=l&-l,a=(a&42)!==0?1:Vo(a),a=(a&(c.suspendedLanes|l))!==0?0:a,a!==0&&a!==g.retryLane))throw g.retryLane=a,Za(t,a),be(c,t,a),lh;h.data==="$?"||ws(),e=us(t,e,l)}else h.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=g.treeContext,Bt=Qe(h.nextSibling),It=e,ft=!0,fa=null,Ke=!1,t!==null&&(Me[Oe++]=ul,Me[Oe++]=ol,Me[Oe++]=sa,ul=t.id,ol=t.overflow,sa=e),e=is(e,a.children),e.flags|=4096);return e}return i?(Ul(),i=a.fallback,h=e.mode,g=t.child,A=g.sibling,a=il(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,A!==null?i=il(A,i):(i=ra(i,h,l,null),i.flags|=2),i.return=e,a.return=e,a.sibling=i,e.child=a,a=i,i=e.child,h=t.child.memoizedState,h===null?h=as(l):(g=h.cachePool,g!==null?(A=jt._currentValue,g=g.parent!==A?{parent:A,pool:A}:g):g=Wf(),h={baseLanes:h.baseLanes|l,cachePool:g}),i.memoizedState=h,i.childLanes=ns(t,c,l),e.memoizedState=ls,a):(_l(e),l=t.child,t=l.sibling,l=il(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=l,e.memoizedState=null,l)}function is(t,e){return e=_u({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function _u(t,e){return t=he(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function us(t,e,l){return nn(e,t.child,null,l),t=is(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dh(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),wr(t.return,e,l)}function os(t,e,l,a,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=l,o.tailMode=i)}function hh(t,e,l){var a=e.pendingProps,i=a.revealOrder,o=a.tail;if(Xt(t,e,a.children,l),a=Ht.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dh(t,l,e);else if(t.tag===19)dh(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(ct(Ht,a),i){case"forwards":for(l=e.child,i=null;l!==null;)t=l.alternate,t!==null&&Mu(t)===null&&(i=l),l=l.sibling;l=i,l===null?(i=e.child,e.child=null):(i=l.sibling,l.sibling=null),os(e,!1,i,l,o);break;case"backwards":for(l=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Mu(t)===null){e.child=i;break}t=i.sibling,i.sibling=l,l=i,i=t}os(e,!0,l,null,o);break;case"together":os(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Hl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Wn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,l=il(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=il(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function rs(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&du(t)))}function Wg(t,e,l){switch(e.tag){case 3:Xe(e,e.stateNode.containerInfo),Bl(e,jt,t.memoizedState.cache),Jn();break;case 27:case 5:la(e);break;case 4:Xe(e,e.stateNode.containerInfo);break;case 10:Bl(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(_l(e),e.flags|=128,null):(l&e.child.childLanes)!==0?fh(t,e,l):(_l(e),t=dl(t,e,l),t!==null?t.sibling:null);_l(e);break;case 19:var i=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Wn(t,e,l,!1),a=(l&e.childLanes)!==0),i){if(a)return hh(t,e,l);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ct(Ht,Ht.current),a)break;return null;case 22:case 23:return e.lanes=0,uh(t,e,l);case 24:Bl(e,jt,t.memoizedState.cache)}return dl(t,e,l)}function ph(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Qt=!0;else{if(!rs(t,l)&&(e.flags&128)===0)return Qt=!1,Wg(t,e,l);Qt=(t.flags&131072)!==0}else Qt=!1,ft&&(e.flags&1048576)!==0&&Gf(e,fu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,i=a._init;if(a=i(a._payload),e.type=a,typeof a=="function")mr(a)?(t=ma(a,t),e.tag=1,e=sh(null,e,a,t,l)):(e.tag=0,e=es(null,e,a,t,l));else{if(a!=null){if(i=a.$$typeof,i===Q){e.tag=11,e=ah(null,e,a,t,l);break t}else if(i===J){e.tag=14,e=nh(null,e,a,t,l);break t}}throw e=ea(a)||a,Error(s(306,e,""))}}return e;case 0:return es(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,i=ma(a,e.pendingProps),sh(t,e,a,i,l);case 3:t:{if(Xe(e,e.stateNode.containerInfo),t===null)throw Error(s(387));a=e.pendingProps;var o=e.memoizedState;i=o.element,Cr(t,e),ni(e,a,null,l);var c=e.memoizedState;if(a=c.cache,Bl(e,jt,a),a!==o.cache&&zr(e,[jt],l,!0),ai(),a=c.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=ch(t,e,a,l);break t}else if(a!==i){i=Te(Error(s(424)),e),Fn(i),e=ch(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Bt=Qe(t.firstChild),It=e,ft=!0,fa=null,Ke=!0,l=Xd(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Jn(),a===i){e=dl(t,e,l);break t}Xt(t,e,a,l)}e=e.child}return e;case 26:return Cu(t,e),t===null?(l=b0(e.type,null,e.pendingProps,null))?e.memoizedState=l:ft||(l=e.type,t=e.pendingProps,a=Xu(le.current).createElement(l),a[Ft]=e,a[ne]=t,Kt(a,l,t),qt(a),e.stateNode=a):e.memoizedState=b0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return la(e),t===null&&ft&&(a=e.stateNode=g0(e.type,e.pendingProps,le.current),It=e,Ke=!0,i=Bt,Vl(e.type)?(Vs=i,Bt=Qe(a.firstChild)):Bt=i),Xt(t,e,e.pendingProps.children,l),Cu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ft&&((i=a=Bt)&&(a=zv(a,e.type,e.pendingProps,Ke),a!==null?(e.stateNode=a,It=e,Bt=Qe(a.firstChild),Ke=!1,i=!0):i=!1),i||da(e)),la(e),i=e.type,o=e.pendingProps,c=t!==null?t.memoizedProps:null,a=o.children,Hs(i,o)?a=null:c!==null&&Hs(i,c)&&(e.flags|=32),e.memoizedState!==null&&(i=jr(t,e,$g,null,null,l),Ti._currentValue=i),Cu(t,e),Xt(t,e,a,l),e.child;case 6:return t===null&&ft&&((t=l=Bt)&&(l=Tv(l,e.pendingProps,Ke),l!==null?(e.stateNode=l,It=e,Bt=null,t=!0):t=!1),t||da(e)),null;case 13:return fh(t,e,l);case 4:return Xe(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=nn(e,null,a,l):Xt(t,e,a,l),e.child;case 11:return ah(t,e,e.type,e.pendingProps,l);case 7:return Xt(t,e,e.pendingProps,l),e.child;case 8:return Xt(t,e,e.pendingProps.children,l),e.child;case 12:return Xt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,Bl(e,e.type,a.value),Xt(t,e,a.children,l),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,pa(e),i=Wt(i),a=a(i),e.flags|=1,Xt(t,e,a,l),e.child;case 14:return nh(t,e,e.type,e.pendingProps,l);case 15:return ih(t,e,e.type,e.pendingProps,l);case 19:return hh(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=_u(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=il(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return uh(t,e,l);case 24:return pa(e),a=Wt(jt),t===null?(i=Mr(),i===null&&(i=St,o=Tr(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=l),i=o),e.memoizedState={parent:a,cache:i},Dr(e),Bl(e,jt,i)):((t.lanes&l)!==0&&(Cr(t,e),ni(e,null,null,l),ai()),i=t.memoizedState,o=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Bl(e,jt,a)):(a=o.cache,Bl(e,jt,a),a!==i.cache&&zr(e,[jt],l,!0))),Xt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function hl(t){t.flags|=4}function gh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!E0(e)){if(e=De.current,e!==null&&((it&4194048)===it?Je!==null:(it&62914560)!==it&&(it&536870912)===0||e!==Je))throw ei=Or,Pf;t.flags|=8192}}function Uu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Xc():536870912,t.lanes|=e,sn|=e)}function fi(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Pg(t,e,l){var a=e.pendingProps;switch(xr(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return zt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),sl(jt),ae(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Kn(e)?hl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Zf())),zt(e),null;case 26:return l=e.memoizedState,t===null?(hl(e),l!==null?(zt(e),gh(e,l)):(zt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(hl(e),zt(e),gh(e,l)):(zt(e),e.flags&=-16777217):(t.memoizedProps!==a&&hl(e),zt(e),e.flags&=-16777217),null;case 27:ll(e),l=le.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&hl(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return zt(e),null}t=Tt.current,Kn(e)?Yf(e):(t=g0(i,a,l),e.stateNode=t,hl(e))}return zt(e),null;case 5:if(ll(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&hl(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return zt(e),null}if(t=Tt.current,Kn(e))Yf(e);else{switch(i=Xu(le.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?i.createElement(l,{is:a.is}):i.createElement(l)}}t[Ft]=e,t[ne]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(Kt(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&hl(e)}}return zt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&hl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(s(166));if(t=le.current,Kn(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,i=It,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[Ft]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||r0(t.nodeValue,l)),t||da(e)}else t=Xu(t).createTextNode(a),t[Ft]=e,e.stateNode=t}return zt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Kn(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(s(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Ft]=e}else Jn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;zt(e),i=!1}else i=Zf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(fl(e),e):(fl(e),null)}if(fl(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var o=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==i&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),Uu(e,e.updateQueue),zt(e),null;case 4:return ae(),t===null&&Us(e.stateNode.containerInfo),zt(e),null;case 10:return sl(e.type),zt(e),null;case 19:if(ot(Ht),i=e.memoizedState,i===null)return zt(e),null;if(a=(e.flags&128)!==0,o=i.rendering,o===null)if(a)fi(i,!1);else{if(Mt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Mu(t),o!==null){for(e.flags|=128,fi(i,!1),t=o.updateQueue,e.updateQueue=t,Uu(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)$f(l,t),l=l.sibling;return ct(Ht,Ht.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ze()>Ru&&(e.flags|=128,a=!0,fi(i,!1),e.lanes=4194304)}else{if(!a)if(t=Mu(o),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Uu(e,t),fi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ft)return zt(e),null}else 2*Ze()-i.renderingStartTime>Ru&&l!==536870912&&(e.flags|=128,a=!0,fi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(t=i.last,t!==null?t.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ze(),e.sibling=null,t=Ht.current,ct(Ht,a?t&1|2:t&1),e):(zt(e),null);case 22:case 23:return fl(e),Nr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),l=e.updateQueue,l!==null&&Uu(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&ot(ga),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),sl(jt),zt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function Ig(t,e){switch(xr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sl(jt),ae(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ll(e),null;case 13:if(fl(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Jn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(Ht),null;case 4:return ae(),null;case 10:return sl(e.type),null;case 22:case 23:return fl(e),Nr(),t!==null&&ot(ga),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return sl(jt),null;case 25:return null;default:return null}}function vh(t,e){switch(xr(e),e.tag){case 3:sl(jt),ae();break;case 26:case 27:case 5:ll(e);break;case 4:ae();break;case 13:fl(e);break;case 19:ot(Ht);break;case 10:sl(e.type);break;case 22:case 23:fl(e),Nr(),t!==null&&ot(ga);break;case 24:sl(jt)}}function di(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){a=void 0;var o=l.create,c=l.inst;a=o(),c.destroy=a}l=l.next}while(l!==i)}}catch(h){xt(e,e.return,h)}}function kl(t,e,l){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var o=i.next;a=o;do{if((a.tag&t)===t){var c=a.inst,h=c.destroy;if(h!==void 0){c.destroy=void 0,i=e;var g=l,A=h;try{A()}catch(z){xt(i,g,z)}}}a=a.next}while(a!==o)}}catch(z){xt(e,e.return,z)}}function mh(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{nd(e,l)}catch(a){xt(t,t.return,a)}}}function bh(t,e,l){l.props=ma(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){xt(t,e,a)}}function hi(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(i){xt(t,e,i)}}function Fe(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){xt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){xt(t,e,i)}else l.current=null}function yh(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){xt(t,t.return,i)}}function ss(t,e,l){try{var a=t.stateNode;Av(a,t.type,l,e),a[ne]=e}catch(i){xt(t,t.return,i)}}function Ah(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Vl(t.type)||t.tag===4}function cs(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ah(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Vl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fs(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Yu));else if(a!==4&&(a===27&&Vl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(fs(t,e,l),t=t.sibling;t!==null;)fs(t,e,l),t=t.sibling}function ku(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Vl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(ku(t,e,l),t=t.sibling;t!==null;)ku(t,e,l),t=t.sibling}function xh(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Kt(e,a,l),e[Ft]=t,e[ne]=l}catch(o){xt(t,t.return,o)}}var pl=!1,_t=!1,ds=!1,Sh=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function tv(t,e){if(t=t.containerInfo,Rs=Pu,t=Uf(t),cr(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{l.nodeType,o.nodeType}catch{l=null;break t}var c=0,h=-1,g=-1,A=0,z=0,D=t,S=null;e:for(;;){for(var w;D!==l||i!==0&&D.nodeType!==3||(h=c+i),D!==o||a!==0&&D.nodeType!==3||(g=c+a),D.nodeType===3&&(c+=D.nodeValue.length),(w=D.firstChild)!==null;)S=D,D=w;for(;;){if(D===t)break e;if(S===l&&++A===i&&(h=c),S===o&&++z===a&&(g=c),(w=D.nextSibling)!==null)break;D=S,S=D.parentNode}D=w}l=h===-1||g===-1?null:{start:h,end:g}}else l=null}l=l||{start:0,end:0}}else l=null;for(js={focusedElem:t,selectionRange:l},Pu=!1,Vt=e;Vt!==null;)if(e=Vt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Vt=t;else for(;Vt!==null;){switch(e=Vt,o=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&o!==null){t=void 0,l=e,i=o.memoizedProps,o=o.memoizedState,a=l.stateNode;try{var Z=ma(l.type,i,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(Z,o),a.__reactInternalSnapshotBeforeUpdate=t}catch($){xt(l,l.return,$)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)qs(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Vt=t;break}Vt=e.return}}function Eh(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Nl(t,l),a&4&&di(5,l);break;case 1:if(Nl(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(c){xt(l,l.return,c)}else{var i=ma(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){xt(l,l.return,c)}}a&64&&mh(l),a&512&&hi(l,l.return);break;case 3:if(Nl(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{nd(t,e)}catch(c){xt(l,l.return,c)}}break;case 27:e===null&&a&4&&xh(l);case 26:case 5:Nl(t,l),e===null&&a&4&&yh(l),a&512&&hi(l,l.return);break;case 12:Nl(t,l);break;case 13:Nl(t,l),a&4&&Th(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=sv.bind(null,l),Bv(t,l))));break;case 22:if(a=l.memoizedState!==null||pl,!a){e=e!==null&&e.memoizedState!==null||_t,i=pl;var o=_t;pl=a,(_t=e)&&!o?Rl(t,l,(l.subtreeFlags&8772)!==0):Nl(t,l),pl=i,_t=o}break;case 30:break;default:Nl(t,l)}}function wh(t){var e=t.alternate;e!==null&&(t.alternate=null,wh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Yo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var wt=null,oe=!1;function gl(t,e,l){for(l=l.child;l!==null;)zh(t,e,l),l=l.sibling}function zh(t,e,l){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(kn,l)}catch{}switch(l.tag){case 26:_t||Fe(l,e),gl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:_t||Fe(l,e);var a=wt,i=oe;Vl(l.type)&&(wt=l.stateNode,oe=!1),gl(t,e,l),Si(l.stateNode),wt=a,oe=i;break;case 5:_t||Fe(l,e);case 6:if(a=wt,i=oe,wt=null,gl(t,e,l),wt=a,oe=i,wt!==null)if(oe)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(l.stateNode)}catch(o){xt(l,e,o)}else try{wt.removeChild(l.stateNode)}catch(o){xt(l,e,o)}break;case 18:wt!==null&&(oe?(t=wt,h0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Di(t)):h0(wt,l.stateNode));break;case 4:a=wt,i=oe,wt=l.stateNode.containerInfo,oe=!0,gl(t,e,l),wt=a,oe=i;break;case 0:case 11:case 14:case 15:_t||kl(2,l,e),_t||kl(4,l,e),gl(t,e,l);break;case 1:_t||(Fe(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&bh(l,e,a)),gl(t,e,l);break;case 21:gl(t,e,l);break;case 22:_t=(a=_t)||l.memoizedState!==null,gl(t,e,l),_t=a;break;default:gl(t,e,l)}}function Th(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Di(t)}catch(l){xt(e,e.return,l)}}function ev(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Sh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Sh),e;default:throw Error(s(435,t.tag))}}function hs(t,e){var l=ev(t);e.forEach(function(a){var i=cv.bind(null,t,a);l.has(a)||(l.add(a),a.then(i,i))})}function pe(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],o=t,c=e,h=c;t:for(;h!==null;){switch(h.tag){case 27:if(Vl(h.type)){wt=h.stateNode,oe=!1;break t}break;case 5:wt=h.stateNode,oe=!1;break t;case 3:case 4:wt=h.stateNode.containerInfo,oe=!0;break t}h=h.return}if(wt===null)throw Error(s(160));zh(o,c,i),wt=null,oe=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Bh(e,t),e=e.sibling}var qe=null;function Bh(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pe(e,t),ge(t),a&4&&(kl(3,t,t.return),di(3,t),kl(5,t,t.return));break;case 1:pe(e,t),ge(t),a&512&&(_t||l===null||Fe(l,l.return)),a&64&&pl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=qe;if(pe(e,t),ge(t),a&512&&(_t||l===null||Fe(l,l.return)),a&4){var o=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":o=i.getElementsByTagName("title")[0],(!o||o[jn]||o[Ft]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(a),i.head.insertBefore(o,i.querySelector("head > title"))),Kt(o,a,l),o[Ft]=t,qt(o),a=o;break t;case"link":var c=x0("link","href",i).get(a+(l.href||""));if(c){for(var h=0;h<c.length;h++)if(o=c[h],o.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&o.getAttribute("rel")===(l.rel==null?null:l.rel)&&o.getAttribute("title")===(l.title==null?null:l.title)&&o.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(h,1);break e}}o=i.createElement(a),Kt(o,a,l),i.head.appendChild(o);break;case"meta":if(c=x0("meta","content",i).get(a+(l.content||""))){for(h=0;h<c.length;h++)if(o=c[h],o.getAttribute("content")===(l.content==null?null:""+l.content)&&o.getAttribute("name")===(l.name==null?null:l.name)&&o.getAttribute("property")===(l.property==null?null:l.property)&&o.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&o.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(h,1);break e}}o=i.createElement(a),Kt(o,a,l),i.head.appendChild(o);break;default:throw Error(s(468,a))}o[Ft]=t,qt(o),a=o}t.stateNode=a}else S0(i,t.type,t.stateNode);else t.stateNode=A0(i,a,t.memoizedProps);else o!==a?(o===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):o.count--,a===null?S0(i,t.type,t.stateNode):A0(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&ss(t,t.memoizedProps,l.memoizedProps)}break;case 27:pe(e,t),ge(t),a&512&&(_t||l===null||Fe(l,l.return)),l!==null&&a&4&&ss(t,t.memoizedProps,l.memoizedProps);break;case 5:if(pe(e,t),ge(t),a&512&&(_t||l===null||Fe(l,l.return)),t.flags&32){i=t.stateNode;try{qa(i,"")}catch(w){xt(t,t.return,w)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,ss(t,i,l!==null?l.memoizedProps:i)),a&1024&&(ds=!0);break;case 6:if(pe(e,t),ge(t),a&4){if(t.stateNode===null)throw Error(s(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(w){xt(t,t.return,w)}}break;case 3:if(Ju=null,i=qe,qe=Zu(e.containerInfo),pe(e,t),qe=i,ge(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Di(e.containerInfo)}catch(w){xt(t,t.return,w)}ds&&(ds=!1,Mh(t));break;case 4:a=qe,qe=Zu(t.stateNode.containerInfo),pe(e,t),ge(t),qe=a;break;case 12:pe(e,t),ge(t);break;case 13:pe(e,t),ge(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(ys=Ze()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,hs(t,a)));break;case 22:i=t.memoizedState!==null;var g=l!==null&&l.memoizedState!==null,A=pl,z=_t;if(pl=A||i,_t=z||g,pe(e,t),_t=z,pl=A,ge(t),a&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(l===null||g||pl||_t||ba(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){g=l=e;try{if(o=g.stateNode,i)c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{h=g.stateNode;var D=g.memoizedProps.style,S=D!=null&&D.hasOwnProperty("display")?D.display:null;h.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(w){xt(g,g.return,w)}}}else if(e.tag===6){if(l===null){g=e;try{g.stateNode.nodeValue=i?"":g.memoizedProps}catch(w){xt(g,g.return,w)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,hs(t,l))));break;case 19:pe(e,t),ge(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,hs(t,a)));break;case 30:break;case 21:break;default:pe(e,t),ge(t)}}function ge(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Ah(a)){l=a;break}a=a.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var i=l.stateNode,o=cs(t);ku(t,o,i);break;case 5:var c=l.stateNode;l.flags&32&&(qa(c,""),l.flags&=-33);var h=cs(t);ku(t,h,c);break;case 3:case 4:var g=l.stateNode.containerInfo,A=cs(t);fs(t,A,g);break;default:throw Error(s(161))}}catch(z){xt(t,t.return,z)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Mh(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Mh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Nl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Eh(t,e.alternate,e),e=e.sibling}function ba(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:kl(4,e,e.return),ba(e);break;case 1:Fe(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&bh(e,e.return,l),ba(e);break;case 27:Si(e.stateNode);case 26:case 5:Fe(e,e.return),ba(e);break;case 22:e.memoizedState===null&&ba(e);break;case 30:ba(e);break;default:ba(e)}t=t.sibling}}function Rl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,o=e,c=o.flags;switch(o.tag){case 0:case 11:case 15:Rl(i,o,l),di(4,o);break;case 1:if(Rl(i,o,l),a=o,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(A){xt(a,a.return,A)}if(a=o,i=a.updateQueue,i!==null){var h=a.stateNode;try{var g=i.shared.hiddenCallbacks;if(g!==null)for(i.shared.hiddenCallbacks=null,i=0;i<g.length;i++)ad(g[i],h)}catch(A){xt(a,a.return,A)}}l&&c&64&&mh(o),hi(o,o.return);break;case 27:xh(o);case 26:case 5:Rl(i,o,l),l&&a===null&&c&4&&yh(o),hi(o,o.return);break;case 12:Rl(i,o,l);break;case 13:Rl(i,o,l),l&&c&4&&Th(i,o);break;case 22:o.memoizedState===null&&Rl(i,o,l),hi(o,o.return);break;case 30:break;default:Rl(i,o,l)}e=e.sibling}}function ps(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Pn(l))}function gs(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Pn(t))}function We(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Oh(t,e,l,a),e=e.sibling}function Oh(t,e,l,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:We(t,e,l,a),i&2048&&di(9,e);break;case 1:We(t,e,l,a);break;case 3:We(t,e,l,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Pn(t)));break;case 12:if(i&2048){We(t,e,l,a),t=e.stateNode;try{var o=e.memoizedProps,c=o.id,h=o.onPostCommit;typeof h=="function"&&h(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(g){xt(e,e.return,g)}}else We(t,e,l,a);break;case 13:We(t,e,l,a);break;case 23:break;case 22:o=e.stateNode,c=e.alternate,e.memoizedState!==null?o._visibility&2?We(t,e,l,a):pi(t,e):o._visibility&2?We(t,e,l,a):(o._visibility|=2,un(t,e,l,a,(e.subtreeFlags&10256)!==0)),i&2048&&ps(c,e);break;case 24:We(t,e,l,a),i&2048&&gs(e.alternate,e);break;default:We(t,e,l,a)}}function un(t,e,l,a,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var o=t,c=e,h=l,g=a,A=c.flags;switch(c.tag){case 0:case 11:case 15:un(o,c,h,g,i),di(8,c);break;case 23:break;case 22:var z=c.stateNode;c.memoizedState!==null?z._visibility&2?un(o,c,h,g,i):pi(o,c):(z._visibility|=2,un(o,c,h,g,i)),i&&A&2048&&ps(c.alternate,c);break;case 24:un(o,c,h,g,i),i&&A&2048&&gs(c.alternate,c);break;default:un(o,c,h,g,i)}e=e.sibling}}function pi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,i=a.flags;switch(a.tag){case 22:pi(l,a),i&2048&&ps(a.alternate,a);break;case 24:pi(l,a),i&2048&&gs(a.alternate,a);break;default:pi(l,a)}e=e.sibling}}var gi=8192;function on(t){if(t.subtreeFlags&gi)for(t=t.child;t!==null;)Dh(t),t=t.sibling}function Dh(t){switch(t.tag){case 26:on(t),t.flags&gi&&t.memoizedState!==null&&qv(qe,t.memoizedState,t.memoizedProps);break;case 5:on(t);break;case 3:case 4:var e=qe;qe=Zu(t.stateNode.containerInfo),on(t),qe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=gi,gi=16777216,on(t),gi=e):on(t));break;default:on(t)}}function Ch(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function vi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Vt=a,Uh(a,t)}Ch(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_h(t),t=t.sibling}function _h(t){switch(t.tag){case 0:case 11:case 15:vi(t),t.flags&2048&&kl(9,t,t.return);break;case 3:vi(t);break;case 12:vi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Nu(t)):vi(t);break;default:vi(t)}}function Nu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Vt=a,Uh(a,t)}Ch(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:kl(8,e,e.return),Nu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Nu(e));break;default:Nu(e)}t=t.sibling}}function Uh(t,e){for(;Vt!==null;){var l=Vt;switch(l.tag){case 0:case 11:case 15:kl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Pn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Vt=a;else t:for(l=t;Vt!==null;){a=Vt;var i=a.sibling,o=a.return;if(wh(a),a===l){Vt=null;break t}if(i!==null){i.return=o,Vt=i;break t}Vt=o}}}var lv={getCacheForType:function(t){var e=Wt(jt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},av=typeof WeakMap=="function"?WeakMap:Map,gt=0,St=null,lt=null,it=0,vt=0,ve=null,jl=!1,rn=!1,vs=!1,vl=0,Mt=0,Hl=0,ya=0,ms=0,Ce=0,sn=0,mi=null,re=null,bs=!1,ys=0,Ru=1/0,ju=null,Ll=null,Zt=0,ql=null,cn=null,fn=0,As=0,xs=null,kh=null,bi=0,Ss=null;function me(){if((gt&2)!==0&&it!==0)return it&-it;if(B.T!==null){var t=Wa;return t!==0?t:Os()}return Jc()}function Nh(){Ce===0&&(Ce=(it&536870912)===0||ft?Yc():536870912);var t=De.current;return t!==null&&(t.flags|=32),Ce}function be(t,e,l){(t===St&&(vt===2||vt===9)||t.cancelPendingCommit!==null)&&(dn(t,0),Ql(t,it,Ce,!1)),Rn(t,l),((gt&2)===0||t!==St)&&(t===St&&((gt&2)===0&&(ya|=l),Mt===4&&Ql(t,it,Ce,!1)),Pe(t))}function Rh(t,e,l){if((gt&6)!==0)throw Error(s(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||Nn(t,e),i=a?uv(t,e):zs(t,e,!0),o=a;do{if(i===0){rn&&!a&&Ql(t,e,0,!1);break}else{if(l=t.current.alternate,o&&!nv(l)){i=zs(t,e,!1),o=!1;continue}if(i===2){if(o=e,t.errorRecoveryDisabledLanes&o)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var h=t;i=mi;var g=h.current.memoizedState.isDehydrated;if(g&&(dn(h,c).flags|=256),c=zs(h,c,!1),c!==2){if(vs&&!g){h.errorRecoveryDisabledLanes|=o,ya|=o,i=4;break t}o=re,re=i,o!==null&&(re===null?re=o:re.push.apply(re,o))}i=c}if(o=!1,i!==2)continue}}if(i===1){dn(t,0),Ql(t,e,0,!0);break}t:{switch(a=t,o=i,o){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Ql(a,e,Ce,!jl);break t;case 2:re=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(i=ys+300-Ze(),10<i)){if(Ql(a,e,Ce,!jl),Ki(a,0,!0)!==0)break t;a.timeoutHandle=f0(jh.bind(null,a,l,re,ju,bs,e,Ce,ya,sn,jl,o,2,-0,0),i);break t}jh(a,l,re,ju,bs,e,Ce,ya,sn,jl,o,0,-0,0)}}break}while(!0);Pe(t)}function jh(t,e,l,a,i,o,c,h,g,A,z,D,S,w){if(t.timeoutHandle=-1,D=e.subtreeFlags,(D&8192||(D&16785408)===16785408)&&(zi={stylesheets:null,count:0,unsuspend:Lv},Dh(e),D=Qv(),D!==null)){t.cancelPendingCommit=D(Gh.bind(null,t,e,o,l,a,i,c,h,g,z,1,S,w)),Ql(t,o,c,!A);return}Gh(t,e,o,l,a,i,c,h,g)}function nv(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],o=i.getSnapshot;i=i.value;try{if(!de(o(),i))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ql(t,e,l,a){e&=~ms,e&=~ya,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var o=31-fe(i),c=1<<o;a[o]=-1,i&=~c}l!==0&&Zc(t,l,e)}function Hu(){return(gt&6)===0?(yi(0),!1):!0}function Es(){if(lt!==null){if(vt===0)var t=lt.return;else t=lt,rl=ha=null,qr(t),an=null,si=0,t=lt;for(;t!==null;)vh(t.alternate,t),t=t.return;lt=null}}function dn(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,Sv(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Es(),St=t,lt=l=il(t.current,null),it=e,vt=0,ve=null,jl=!1,rn=Nn(t,e),vs=!1,sn=Ce=ms=ya=Hl=Mt=0,re=mi=null,bs=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-fe(a),o=1<<i;e|=t[i],a&=~o}return vl=e,uu(),l}function Hh(t,e){I=null,B.H=zu,e===ti||e===gu?(e=ed(),vt=3):e===Pf?(e=ed(),vt=4):vt=e===lh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ve=e,lt===null&&(Mt=1,Du(t,Te(e,t.current)))}function Lh(){var t=B.H;return B.H=zu,t===null?zu:t}function qh(){var t=B.A;return B.A=lv,t}function ws(){Mt=4,jl||(it&4194048)!==it&&De.current!==null||(rn=!0),(Hl&134217727)===0&&(ya&134217727)===0||St===null||Ql(St,it,Ce,!1)}function zs(t,e,l){var a=gt;gt|=2;var i=Lh(),o=qh();(St!==t||it!==e)&&(ju=null,dn(t,e)),e=!1;var c=Mt;t:do try{if(vt!==0&&lt!==null){var h=lt,g=ve;switch(vt){case 8:Es(),c=6;break t;case 3:case 2:case 9:case 6:De.current===null&&(e=!0);var A=vt;if(vt=0,ve=null,hn(t,h,g,A),l&&rn){c=0;break t}break;default:A=vt,vt=0,ve=null,hn(t,h,g,A)}}iv(),c=Mt;break}catch(z){Hh(t,z)}while(!0);return e&&t.shellSuspendCounter++,rl=ha=null,gt=a,B.H=i,B.A=o,lt===null&&(St=null,it=0,uu()),c}function iv(){for(;lt!==null;)Qh(lt)}function uv(t,e){var l=gt;gt|=2;var a=Lh(),i=qh();St!==t||it!==e?(ju=null,Ru=Ze()+500,dn(t,e)):rn=Nn(t,e);t:do try{if(vt!==0&&lt!==null){e=lt;var o=ve;e:switch(vt){case 1:vt=0,ve=null,hn(t,e,o,1);break;case 2:case 9:if(If(o)){vt=0,ve=null,Vh(e);break}e=function(){vt!==2&&vt!==9||St!==t||(vt=7),Pe(t)},o.then(e,e);break t;case 3:vt=7;break t;case 4:vt=5;break t;case 7:If(o)?(vt=0,ve=null,Vh(e)):(vt=0,ve=null,hn(t,e,o,7));break;case 5:var c=null;switch(lt.tag){case 26:c=lt.memoizedState;case 5:case 27:var h=lt;if(!c||E0(c)){vt=0,ve=null;var g=h.sibling;if(g!==null)lt=g;else{var A=h.return;A!==null?(lt=A,Lu(A)):lt=null}break e}}vt=0,ve=null,hn(t,e,o,5);break;case 6:vt=0,ve=null,hn(t,e,o,6);break;case 8:Es(),Mt=6;break t;default:throw Error(s(462))}}ov();break}catch(z){Hh(t,z)}while(!0);return rl=ha=null,B.H=a,B.A=i,gt=l,lt!==null?0:(St=null,it=0,uu(),Mt)}function ov(){for(;lt!==null&&!O1();)Qh(lt)}function Qh(t){var e=ph(t.alternate,t,vl);t.memoizedProps=t.pendingProps,e===null?Lu(t):lt=e}function Vh(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=rh(l,e,e.pendingProps,e.type,void 0,it);break;case 11:e=rh(l,e,e.pendingProps,e.type.render,e.ref,it);break;case 5:qr(e);default:vh(l,e),e=lt=$f(e,vl),e=ph(l,e,vl)}t.memoizedProps=t.pendingProps,e===null?Lu(t):lt=e}function hn(t,e,l,a){rl=ha=null,qr(e),an=null,si=0;var i=e.return;try{if(Fg(t,i,e,l,it)){Mt=1,Du(t,Te(l,t.current)),lt=null;return}}catch(o){if(i!==null)throw lt=i,o;Mt=1,Du(t,Te(l,t.current)),lt=null;return}e.flags&32768?(ft||a===1?t=!0:rn||(it&536870912)!==0?t=!1:(jl=t=!0,(a===2||a===9||a===3||a===6)&&(a=De.current,a!==null&&a.tag===13&&(a.flags|=16384))),$h(e,t)):Lu(e)}function Lu(t){var e=t;do{if((e.flags&32768)!==0){$h(e,jl);return}t=e.return;var l=Pg(e.alternate,e,vl);if(l!==null){lt=l;return}if(e=e.sibling,e!==null){lt=e;return}lt=e=t}while(e!==null);Mt===0&&(Mt=5)}function $h(t,e){do{var l=Ig(t.alternate,t);if(l!==null){l.flags&=32767,lt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){lt=t;return}lt=t=l}while(t!==null);Mt=6,lt=null}function Gh(t,e,l,a,i,o,c,h,g){t.cancelPendingCommit=null;do qu();while(Zt!==0);if((gt&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(o=e.lanes|e.childLanes,o|=gr,L1(t,l,o,c,h,g),t===St&&(lt=St=null,it=0),cn=e,ql=t,fn=l,As=o,xs=i,kh=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fv(Yi,function(){return Jh(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=B.T,B.T=null,i=N.p,N.p=2,c=gt,gt|=4;try{tv(t,e,l)}finally{gt=c,N.p=i,B.T=a}}Zt=1,Yh(),Xh(),Zh()}}function Yh(){if(Zt===1){Zt=0;var t=ql,e=cn,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=B.T,B.T=null;var a=N.p;N.p=2;var i=gt;gt|=4;try{Bh(e,t);var o=js,c=Uf(t.containerInfo),h=o.focusedElem,g=o.selectionRange;if(c!==h&&h&&h.ownerDocument&&_f(h.ownerDocument.documentElement,h)){if(g!==null&&cr(h)){var A=g.start,z=g.end;if(z===void 0&&(z=A),"selectionStart"in h)h.selectionStart=A,h.selectionEnd=Math.min(z,h.value.length);else{var D=h.ownerDocument||document,S=D&&D.defaultView||window;if(S.getSelection){var w=S.getSelection(),Z=h.textContent.length,$=Math.min(g.start,Z),yt=g.end===void 0?$:Math.min(g.end,Z);!w.extend&&$>yt&&(c=yt,yt=$,$=c);var m=Cf(h,$),v=Cf(h,yt);if(m&&v&&(w.rangeCount!==1||w.anchorNode!==m.node||w.anchorOffset!==m.offset||w.focusNode!==v.node||w.focusOffset!==v.offset)){var y=D.createRange();y.setStart(m.node,m.offset),w.removeAllRanges(),$>yt?(w.addRange(y),w.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),w.addRange(y))}}}}for(D=[],w=h;w=w.parentNode;)w.nodeType===1&&D.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<D.length;h++){var M=D[h];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Pu=!!Rs,js=Rs=null}finally{gt=i,N.p=a,B.T=l}}t.current=e,Zt=2}}function Xh(){if(Zt===2){Zt=0;var t=ql,e=cn,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=B.T,B.T=null;var a=N.p;N.p=2;var i=gt;gt|=4;try{Eh(t,e.alternate,e)}finally{gt=i,N.p=a,B.T=l}}Zt=3}}function Zh(){if(Zt===4||Zt===3){Zt=0,D1();var t=ql,e=cn,l=fn,a=kh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Zt=5:(Zt=0,cn=ql=null,Kh(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Ll=null),$o(l),e=e.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(kn,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=B.T,i=N.p,N.p=2,B.T=null;try{for(var o=t.onRecoverableError,c=0;c<a.length;c++){var h=a[c];o(h.value,{componentStack:h.stack})}}finally{B.T=e,N.p=i}}(fn&3)!==0&&qu(),Pe(t),i=t.pendingLanes,(l&4194090)!==0&&(i&42)!==0?t===Ss?bi++:(bi=0,Ss=t):bi=0,yi(0)}}function Kh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Pn(e)))}function qu(t){return Yh(),Xh(),Zh(),Jh()}function Jh(){if(Zt!==5)return!1;var t=ql,e=As;As=0;var l=$o(fn),a=B.T,i=N.p;try{N.p=32>l?32:l,B.T=null,l=xs,xs=null;var o=ql,c=fn;if(Zt=0,cn=ql=null,fn=0,(gt&6)!==0)throw Error(s(331));var h=gt;if(gt|=4,_h(o.current),Oh(o,o.current,c,l),gt=h,yi(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(kn,o)}catch{}return!0}finally{N.p=i,B.T=a,Kh(t,e)}}function Fh(t,e,l){e=Te(l,e),e=ts(t.stateNode,e,2),t=Dl(t,e,2),t!==null&&(Rn(t,2),Pe(t))}function xt(t,e,l){if(t.tag===3)Fh(t,t,l);else for(;e!==null;){if(e.tag===3){Fh(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ll===null||!Ll.has(a))){t=Te(l,t),l=th(2),a=Dl(e,l,2),a!==null&&(eh(l,a,e,t),Rn(a,2),Pe(a));break}}e=e.return}}function Ts(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new av;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(l)||(vs=!0,i.add(l),t=rv.bind(null,t,e,l),e.then(t,t))}function rv(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,St===t&&(it&l)===l&&(Mt===4||Mt===3&&(it&62914560)===it&&300>Ze()-ys?(gt&2)===0&&dn(t,0):ms|=l,sn===it&&(sn=0)),Pe(t)}function Wh(t,e){e===0&&(e=Xc()),t=Za(t,e),t!==null&&(Rn(t,e),Pe(t))}function sv(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),Wh(t,l)}function cv(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(e),Wh(t,l)}function fv(t,e){return Lo(t,e)}var Qu=null,pn=null,Bs=!1,Vu=!1,Ms=!1,Aa=0;function Pe(t){t!==pn&&t.next===null&&(pn===null?Qu=pn=t:pn=pn.next=t),Vu=!0,Bs||(Bs=!0,hv())}function yi(t,e){if(!Ms&&Vu){Ms=!0;do for(var l=!1,a=Qu;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var o=0;else{var c=a.suspendedLanes,h=a.pingedLanes;o=(1<<31-fe(42|t)+1)-1,o&=i&~(c&~h),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(l=!0,e0(a,o))}else o=it,o=Ki(a,a===St?o:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(o&3)===0||Nn(a,o)||(l=!0,e0(a,o));a=a.next}while(l);Ms=!1}}function dv(){Ph()}function Ph(){Vu=Bs=!1;var t=0;Aa!==0&&(xv()&&(t=Aa),Aa=0);for(var e=Ze(),l=null,a=Qu;a!==null;){var i=a.next,o=Ih(a,e);o===0?(a.next=null,l===null?Qu=i:l.next=i,i===null&&(pn=l)):(l=a,(t!==0||(o&3)!==0)&&(Vu=!0)),a=i}yi(t)}function Ih(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var c=31-fe(o),h=1<<c,g=i[c];g===-1?((h&l)===0||(h&a)!==0)&&(i[c]=H1(h,e)):g<=e&&(t.expiredLanes|=h),o&=~h}if(e=St,l=it,l=Ki(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(vt===2||vt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&qo(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Nn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&qo(a),$o(l)){case 2:case 8:l=$c;break;case 32:l=Yi;break;case 268435456:l=Gc;break;default:l=Yi}return a=t0.bind(null,t),l=Lo(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&qo(a),t.callbackPriority=2,t.callbackNode=null,2}function t0(t,e){if(Zt!==0&&Zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(qu()&&t.callbackNode!==l)return null;var a=it;return a=Ki(t,t===St?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Rh(t,a,e),Ih(t,Ze()),t.callbackNode!=null&&t.callbackNode===l?t0.bind(null,t):null)}function e0(t,e){if(qu())return null;Rh(t,e,!0)}function hv(){Ev(function(){(gt&6)!==0?Lo(Vc,dv):Ph()})}function Os(){return Aa===0&&(Aa=Yc()),Aa}function l0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ii(""+t)}function a0(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function pv(t,e,l,a,i){if(e==="submit"&&l&&l.stateNode===i){var o=l0((i[ne]||null).action),c=a.submitter;c&&(e=(e=c[ne]||null)?l0(e.formAction):c.getAttribute("formAction"),e!==null&&(o=e,c=null));var h=new au("action","action",null,a,i);t.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Aa!==0){var g=c?a0(i,c):new FormData(i);Jr(l,{pending:!0,data:g,method:i.method,action:o},null,g)}}else typeof o=="function"&&(h.preventDefault(),g=c?a0(i,c):new FormData(i),Jr(l,{pending:!0,data:g,method:i.method,action:o},o,g))},currentTarget:i}]})}}for(var Ds=0;Ds<pr.length;Ds++){var Cs=pr[Ds],gv=Cs.toLowerCase(),vv=Cs[0].toUpperCase()+Cs.slice(1);Le(gv,"on"+vv)}Le(Rf,"onAnimationEnd"),Le(jf,"onAnimationIteration"),Le(Hf,"onAnimationStart"),Le("dblclick","onDoubleClick"),Le("focusin","onFocus"),Le("focusout","onBlur"),Le(Ug,"onTransitionRun"),Le(kg,"onTransitionStart"),Le(Ng,"onTransitionCancel"),Le(Lf,"onTransitionEnd"),ja("onMouseEnter",["mouseout","mouseover"]),ja("onMouseLeave",["mouseout","mouseover"]),ja("onPointerEnter",["pointerout","pointerover"]),ja("onPointerLeave",["pointerout","pointerover"]),na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),na("onBeforeInput",["compositionend","keypress","textInput","paste"]),na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ai));function n0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],i=a.event;a=a.listeners;t:{var o=void 0;if(e)for(var c=a.length-1;0<=c;c--){var h=a[c],g=h.instance,A=h.currentTarget;if(h=h.listener,g!==o&&i.isPropagationStopped())break t;o=h,i.currentTarget=A;try{o(i)}catch(z){Ou(z)}i.currentTarget=null,o=g}else for(c=0;c<a.length;c++){if(h=a[c],g=h.instance,A=h.currentTarget,h=h.listener,g!==o&&i.isPropagationStopped())break t;o=h,i.currentTarget=A;try{o(i)}catch(z){Ou(z)}i.currentTarget=null,o=g}}}}function at(t,e){var l=e[Go];l===void 0&&(l=e[Go]=new Set);var a=t+"__bubble";l.has(a)||(i0(e,t,2,!1),l.add(a))}function _s(t,e,l){var a=0;e&&(a|=4),i0(l,t,a,e)}var $u="_reactListening"+Math.random().toString(36).slice(2);function Us(t){if(!t[$u]){t[$u]=!0,Wc.forEach(function(l){l!=="selectionchange"&&(mv.has(l)||_s(l,!1,t),_s(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$u]||(e[$u]=!0,_s("selectionchange",!1,e))}}function i0(t,e,l,a){switch(O0(e)){case 2:var i=Gv;break;case 8:i=Yv;break;default:i=Zs}l=i.bind(null,e,l,t),i=void 0,!er||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,l,{capture:!0,passive:i}):t.addEventListener(e,l,!0):i!==void 0?t.addEventListener(e,l,{passive:i}):t.addEventListener(e,l,!1)}function ks(t,e,l,a,i){var o=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var h=a.stateNode.containerInfo;if(h===i)break;if(c===4)for(c=a.return;c!==null;){var g=c.tag;if((g===3||g===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;h!==null;){if(c=ka(h),c===null)return;if(g=c.tag,g===5||g===6||g===26||g===27){a=o=c;continue t}h=h.parentNode}}a=a.return}df(function(){var A=o,z=Io(l),D=[];t:{var S=qf.get(t);if(S!==void 0){var w=au,Z=t;switch(t){case"keypress":if(eu(l)===0)break t;case"keydown":case"keyup":w=fg;break;case"focusin":Z="focus",w=ir;break;case"focusout":Z="blur",w=ir;break;case"beforeblur":case"afterblur":w=ir;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=I1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=pg;break;case Rf:case jf:case Hf:w=lg;break;case Lf:w=vg;break;case"scroll":case"scrollend":w=W1;break;case"wheel":w=bg;break;case"copy":case"cut":case"paste":w=ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=mf;break;case"toggle":case"beforetoggle":w=Ag}var $=(e&4)!==0,yt=!$&&(t==="scroll"||t==="scrollend"),m=$?S!==null?S+"Capture":null:S;$=[];for(var v=A,y;v!==null;){var M=v;if(y=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||y===null||m===null||(M=Ln(v,m),M!=null&&$.push(xi(v,M,y))),yt)break;v=v.return}0<$.length&&(S=new w(S,Z,null,l,z),D.push({event:S,listeners:$}))}}if((e&7)===0){t:{if(S=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",S&&l!==Po&&(Z=l.relatedTarget||l.fromElement)&&(ka(Z)||Z[Ua]))break t;if((w||S)&&(S=z.window===z?z:(S=z.ownerDocument)?S.defaultView||S.parentWindow:window,w?(Z=l.relatedTarget||l.toElement,w=A,Z=Z?ka(Z):null,Z!==null&&(yt=d(Z),$=Z.tag,Z!==yt||$!==5&&$!==27&&$!==6)&&(Z=null)):(w=null,Z=A),w!==Z)){if($=gf,M="onMouseLeave",m="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&($=mf,M="onPointerLeave",m="onPointerEnter",v="pointer"),yt=w==null?S:Hn(w),y=Z==null?S:Hn(Z),S=new $(M,v+"leave",w,l,z),S.target=yt,S.relatedTarget=y,M=null,ka(z)===A&&($=new $(m,v+"enter",Z,l,z),$.target=y,$.relatedTarget=yt,M=$),yt=M,w&&Z)e:{for($=w,m=Z,v=0,y=$;y;y=gn(y))v++;for(y=0,M=m;M;M=gn(M))y++;for(;0<v-y;)$=gn($),v--;for(;0<y-v;)m=gn(m),y--;for(;v--;){if($===m||m!==null&&$===m.alternate)break e;$=gn($),m=gn(m)}$=null}else $=null;w!==null&&u0(D,S,w,$,!1),Z!==null&&yt!==null&&u0(D,yt,Z,$,!0)}}t:{if(S=A?Hn(A):window,w=S.nodeName&&S.nodeName.toLowerCase(),w==="select"||w==="input"&&S.type==="file")var j=zf;else if(Ef(S))if(Tf)j=Dg;else{j=Mg;var et=Bg}else w=S.nodeName,!w||w.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?A&&Wo(A.elementType)&&(j=zf):j=Og;if(j&&(j=j(t,A))){wf(D,j,l,z);break t}et&&et(t,S,A),t==="focusout"&&A&&S.type==="number"&&A.memoizedProps.value!=null&&Fo(S,"number",S.value)}switch(et=A?Hn(A):window,t){case"focusin":(Ef(et)||et.contentEditable==="true")&&(Ga=et,fr=A,Zn=null);break;case"focusout":Zn=fr=Ga=null;break;case"mousedown":dr=!0;break;case"contextmenu":case"mouseup":case"dragend":dr=!1,kf(D,l,z);break;case"selectionchange":if(_g)break;case"keydown":case"keyup":kf(D,l,z)}var q;if(or)t:{switch(t){case"compositionstart":var G="onCompositionStart";break t;case"compositionend":G="onCompositionEnd";break t;case"compositionupdate":G="onCompositionUpdate";break t}G=void 0}else $a?xf(t,l)&&(G="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(G="onCompositionStart");G&&(bf&&l.locale!=="ko"&&($a||G!=="onCompositionStart"?G==="onCompositionEnd"&&$a&&(q=hf()):(Tl=z,lr="value"in Tl?Tl.value:Tl.textContent,$a=!0)),et=Gu(A,G),0<et.length&&(G=new vf(G,t,null,l,z),D.push({event:G,listeners:et}),q?G.data=q:(q=Sf(l),q!==null&&(G.data=q)))),(q=Sg?Eg(t,l):wg(t,l))&&(G=Gu(A,"onBeforeInput"),0<G.length&&(et=new vf("onBeforeInput","beforeinput",null,l,z),D.push({event:et,listeners:G}),et.data=q)),pv(D,t,A,l,z)}n0(D,e)})}function xi(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Gu(t,e){for(var l=e+"Capture",a=[];t!==null;){var i=t,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=Ln(t,l),i!=null&&a.unshift(xi(t,i,o)),i=Ln(t,e),i!=null&&a.push(xi(t,i,o))),t.tag===3)return a;t=t.return}return[]}function gn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function u0(t,e,l,a,i){for(var o=e._reactName,c=[];l!==null&&l!==a;){var h=l,g=h.alternate,A=h.stateNode;if(h=h.tag,g!==null&&g===a)break;h!==5&&h!==26&&h!==27||A===null||(g=A,i?(A=Ln(l,o),A!=null&&c.unshift(xi(l,A,g))):i||(A=Ln(l,o),A!=null&&c.push(xi(l,A,g)))),l=l.return}c.length!==0&&t.push({event:e,listeners:c})}var bv=/\r\n?/g,yv=/\u0000|\uFFFD/g;function o0(t){return(typeof t=="string"?t:""+t).replace(bv,`
`).replace(yv,"")}function r0(t,e){return e=o0(e),o0(t)===e}function Yu(){}function bt(t,e,l,a,i,o){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||qa(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&qa(t,""+a);break;case"className":Fi(t,"class",a);break;case"tabIndex":Fi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Fi(t,l,a);break;case"style":cf(t,a,o);break;case"data":if(e!=="object"){Fi(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Ii(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(l==="formAction"?(e!=="input"&&bt(t,e,"name",i.name,i,null),bt(t,e,"formEncType",i.formEncType,i,null),bt(t,e,"formMethod",i.formMethod,i,null),bt(t,e,"formTarget",i.formTarget,i,null)):(bt(t,e,"encType",i.encType,i,null),bt(t,e,"method",i.method,i,null),bt(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Ii(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Yu);break;case"onScroll":a!=null&&at("scroll",t);break;case"onScrollEnd":a!=null&&at("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Ii(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":at("beforetoggle",t),at("toggle",t),Ji(t,"popover",a);break;case"xlinkActuate":al(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":al(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":al(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":al(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":al(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":al(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":al(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":al(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":al(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ji(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=J1.get(l)||l,Ji(t,l,a))}}function Ns(t,e,l,a,i,o){switch(l){case"style":cf(t,a,o);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(s(60));t.innerHTML=l}}break;case"children":typeof a=="string"?qa(t,a):(typeof a=="number"||typeof a=="bigint")&&qa(t,""+a);break;case"onScroll":a!=null&&at("scroll",t);break;case"onScrollEnd":a!=null&&at("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Yu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pc.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),e=l.slice(2,i?l.length-7:void 0),o=t[ne]||null,o=o!=null?o[l]:null,typeof o=="function"&&t.removeEventListener(e,o,i),typeof a=="function")){typeof o!="function"&&o!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,i);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Ji(t,l,a)}}}function Kt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":at("error",t),at("load",t);var a=!1,i=!1,o;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];if(c!=null)switch(o){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:bt(t,e,o,c,l,null)}}i&&bt(t,e,"srcSet",l.srcSet,l,null),a&&bt(t,e,"src",l.src,l,null);return;case"input":at("invalid",t);var h=o=c=i=null,g=null,A=null;for(a in l)if(l.hasOwnProperty(a)){var z=l[a];if(z!=null)switch(a){case"name":i=z;break;case"type":c=z;break;case"checked":g=z;break;case"defaultChecked":A=z;break;case"value":o=z;break;case"defaultValue":h=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,e));break;default:bt(t,e,a,z,l,null)}}uf(t,o,h,g,A,c,i,!1),Wi(t);return;case"select":at("invalid",t),a=c=o=null;for(i in l)if(l.hasOwnProperty(i)&&(h=l[i],h!=null))switch(i){case"value":o=h;break;case"defaultValue":c=h;break;case"multiple":a=h;default:bt(t,e,i,h,l,null)}e=o,l=c,t.multiple=!!a,e!=null?La(t,!!a,e,!1):l!=null&&La(t,!!a,l,!0);return;case"textarea":at("invalid",t),o=i=a=null;for(c in l)if(l.hasOwnProperty(c)&&(h=l[c],h!=null))switch(c){case"value":a=h;break;case"defaultValue":i=h;break;case"children":o=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:bt(t,e,c,h,l,null)}rf(t,a,i,o),Wi(t);return;case"option":for(g in l)if(l.hasOwnProperty(g)&&(a=l[g],a!=null))switch(g){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:bt(t,e,g,a,l,null)}return;case"dialog":at("beforetoggle",t),at("toggle",t),at("cancel",t),at("close",t);break;case"iframe":case"object":at("load",t);break;case"video":case"audio":for(a=0;a<Ai.length;a++)at(Ai[a],t);break;case"image":at("error",t),at("load",t);break;case"details":at("toggle",t);break;case"embed":case"source":case"link":at("error",t),at("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in l)if(l.hasOwnProperty(A)&&(a=l[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:bt(t,e,A,a,l,null)}return;default:if(Wo(e)){for(z in l)l.hasOwnProperty(z)&&(a=l[z],a!==void 0&&Ns(t,e,z,a,l,void 0));return}}for(h in l)l.hasOwnProperty(h)&&(a=l[h],a!=null&&bt(t,e,h,a,l,null))}function Av(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,c=null,h=null,g=null,A=null,z=null;for(w in l){var D=l[w];if(l.hasOwnProperty(w)&&D!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":g=D;default:a.hasOwnProperty(w)||bt(t,e,w,null,a,D)}}for(var S in a){var w=a[S];if(D=l[S],a.hasOwnProperty(S)&&(w!=null||D!=null))switch(S){case"type":o=w;break;case"name":i=w;break;case"checked":A=w;break;case"defaultChecked":z=w;break;case"value":c=w;break;case"defaultValue":h=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,e));break;default:w!==D&&bt(t,e,S,w,a,D)}}Jo(t,c,h,g,A,z,o,i);return;case"select":w=c=h=S=null;for(o in l)if(g=l[o],l.hasOwnProperty(o)&&g!=null)switch(o){case"value":break;case"multiple":w=g;default:a.hasOwnProperty(o)||bt(t,e,o,null,a,g)}for(i in a)if(o=a[i],g=l[i],a.hasOwnProperty(i)&&(o!=null||g!=null))switch(i){case"value":S=o;break;case"defaultValue":h=o;break;case"multiple":c=o;default:o!==g&&bt(t,e,i,o,a,g)}e=h,l=c,a=w,S!=null?La(t,!!l,S,!1):!!a!=!!l&&(e!=null?La(t,!!l,e,!0):La(t,!!l,l?[]:"",!1));return;case"textarea":w=S=null;for(h in l)if(i=l[h],l.hasOwnProperty(h)&&i!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:bt(t,e,h,null,a,i)}for(c in a)if(i=a[c],o=l[c],a.hasOwnProperty(c)&&(i!=null||o!=null))switch(c){case"value":S=i;break;case"defaultValue":w=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==o&&bt(t,e,c,i,a,o)}of(t,S,w);return;case"option":for(var Z in l)if(S=l[Z],l.hasOwnProperty(Z)&&S!=null&&!a.hasOwnProperty(Z))switch(Z){case"selected":t.selected=!1;break;default:bt(t,e,Z,null,a,S)}for(g in a)if(S=a[g],w=l[g],a.hasOwnProperty(g)&&S!==w&&(S!=null||w!=null))switch(g){case"selected":t.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:bt(t,e,g,S,a,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in l)S=l[$],l.hasOwnProperty($)&&S!=null&&!a.hasOwnProperty($)&&bt(t,e,$,null,a,S);for(A in a)if(S=a[A],w=l[A],a.hasOwnProperty(A)&&S!==w&&(S!=null||w!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(137,e));break;default:bt(t,e,A,S,a,w)}return;default:if(Wo(e)){for(var yt in l)S=l[yt],l.hasOwnProperty(yt)&&S!==void 0&&!a.hasOwnProperty(yt)&&Ns(t,e,yt,void 0,a,S);for(z in a)S=a[z],w=l[z],!a.hasOwnProperty(z)||S===w||S===void 0&&w===void 0||Ns(t,e,z,S,a,w);return}}for(var m in l)S=l[m],l.hasOwnProperty(m)&&S!=null&&!a.hasOwnProperty(m)&&bt(t,e,m,null,a,S);for(D in a)S=a[D],w=l[D],!a.hasOwnProperty(D)||S===w||S==null&&w==null||bt(t,e,D,S,a,w)}var Rs=null,js=null;function Xu(t){return t.nodeType===9?t:t.ownerDocument}function s0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Hs(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ls=null;function xv(){var t=window.event;return t&&t.type==="popstate"?t===Ls?!1:(Ls=t,!0):(Ls=null,!1)}var f0=typeof setTimeout=="function"?setTimeout:void 0,Sv=typeof clearTimeout=="function"?clearTimeout:void 0,d0=typeof Promise=="function"?Promise:void 0,Ev=typeof queueMicrotask=="function"?queueMicrotask:typeof d0<"u"?function(t){return d0.resolve(null).then(t).catch(wv)}:f0;function wv(t){setTimeout(function(){throw t})}function Vl(t){return t==="head"}function h0(t,e){var l=e,a=0,i=0;do{var o=l.nextSibling;if(t.removeChild(l),o&&o.nodeType===8)if(l=o.data,l==="/$"){if(0<a&&8>a){l=a;var c=t.ownerDocument;if(l&1&&Si(c.documentElement),l&2&&Si(c.body),l&4)for(l=c.head,Si(l),c=l.firstChild;c;){var h=c.nextSibling,g=c.nodeName;c[jn]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||l.removeChild(c),c=h}}if(i===0){t.removeChild(o),Di(e);return}i--}else l==="$"||l==="$?"||l==="$!"?i++:a=l.charCodeAt(0)-48;else a=0;l=o}while(l);Di(e)}function qs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":qs(l),Yo(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function zv(t,e,l,a){for(;t.nodeType===1;){var i=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[jn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=Qe(t.nextSibling),t===null)break}return null}function Tv(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Qe(t.nextSibling),t===null))return null;return t}function Qs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Bv(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Qe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Vs=null;function p0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function g0(t,e,l){switch(e=Xu(l),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Si(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Yo(t)}var _e=new Map,v0=new Set;function Zu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ml=N.d;N.d={f:Mv,r:Ov,D:Dv,C:Cv,L:_v,m:Uv,X:Nv,S:kv,M:Rv};function Mv(){var t=ml.f(),e=Hu();return t||e}function Ov(t){var e=Na(t);e!==null&&e.tag===5&&e.type==="form"?Rd(e):ml.r(t)}var vn=typeof document>"u"?null:document;function m0(t,e,l){var a=vn;if(a&&typeof e=="string"&&e){var i=ze(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),v0.has(i)||(v0.add(i),t={rel:t,crossOrigin:l,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),Kt(e,"link",t),qt(e),a.head.appendChild(e)))}}function Dv(t){ml.D(t),m0("dns-prefetch",t,null)}function Cv(t,e){ml.C(t,e),m0("preconnect",t,e)}function _v(t,e,l){ml.L(t,e,l);var a=vn;if(a&&t&&e){var i='link[rel="preload"][as="'+ze(e)+'"]';e==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+ze(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+ze(l.imageSizes)+'"]')):i+='[href="'+ze(t)+'"]';var o=i;switch(e){case"style":o=mn(t);break;case"script":o=bn(t)}_e.has(o)||(t=O({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),_e.set(o,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(Ei(o))||e==="script"&&a.querySelector(wi(o))||(e=a.createElement("link"),Kt(e,"link",t),qt(e),a.head.appendChild(e)))}}function Uv(t,e){ml.m(t,e);var l=vn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+ze(a)+'"][href="'+ze(t)+'"]',o=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=bn(t)}if(!_e.has(o)&&(t=O({rel:"modulepreload",href:t},e),_e.set(o,t),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(wi(o)))return}a=l.createElement("link"),Kt(a,"link",t),qt(a),l.head.appendChild(a)}}}function kv(t,e,l){ml.S(t,e,l);var a=vn;if(a&&t){var i=Ra(a).hoistableStyles,o=mn(t);e=e||"default";var c=i.get(o);if(!c){var h={loading:0,preload:null};if(c=a.querySelector(Ei(o)))h.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},l),(l=_e.get(o))&&$s(t,l);var g=c=a.createElement("link");qt(g),Kt(g,"link",t),g._p=new Promise(function(A,z){g.onload=A,g.onerror=z}),g.addEventListener("load",function(){h.loading|=1}),g.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Ku(c,e,a)}c={type:"stylesheet",instance:c,count:1,state:h},i.set(o,c)}}}function Nv(t,e){ml.X(t,e);var l=vn;if(l&&t){var a=Ra(l).hoistableScripts,i=bn(t),o=a.get(i);o||(o=l.querySelector(wi(i)),o||(t=O({src:t,async:!0},e),(e=_e.get(i))&&Gs(t,e),o=l.createElement("script"),qt(o),Kt(o,"link",t),l.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(i,o))}}function Rv(t,e){ml.M(t,e);var l=vn;if(l&&t){var a=Ra(l).hoistableScripts,i=bn(t),o=a.get(i);o||(o=l.querySelector(wi(i)),o||(t=O({src:t,async:!0,type:"module"},e),(e=_e.get(i))&&Gs(t,e),o=l.createElement("script"),qt(o),Kt(o,"link",t),l.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},a.set(i,o))}}function b0(t,e,l,a){var i=(i=le.current)?Zu(i):null;if(!i)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=mn(l.href),l=Ra(i).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=mn(l.href);var o=Ra(i).hoistableStyles,c=o.get(t);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,c),(o=i.querySelector(Ei(t)))&&!o._p&&(c.instance=o,c.state.loading=5),_e.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},_e.set(t,l),o||jv(i,t,l,c.state))),e&&a===null)throw Error(s(528,""));return c}if(e&&a!==null)throw Error(s(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=bn(l),l=Ra(i).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function mn(t){return'href="'+ze(t)+'"'}function Ei(t){return'link[rel="stylesheet"]['+t+"]"}function y0(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function jv(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Kt(e,"link",l),qt(e),t.head.appendChild(e))}function bn(t){return'[src="'+ze(t)+'"]'}function wi(t){return"script[async]"+t}function A0(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ze(l.href)+'"]');if(a)return e.instance=a,qt(a),a;var i=O({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),qt(a),Kt(a,"style",i),Ku(a,l.precedence,t),e.instance=a;case"stylesheet":i=mn(l.href);var o=t.querySelector(Ei(i));if(o)return e.state.loading|=4,e.instance=o,qt(o),o;a=y0(l),(i=_e.get(i))&&$s(a,i),o=(t.ownerDocument||t).createElement("link"),qt(o);var c=o;return c._p=new Promise(function(h,g){c.onload=h,c.onerror=g}),Kt(o,"link",a),e.state.loading|=4,Ku(o,l.precedence,t),e.instance=o;case"script":return o=bn(l.src),(i=t.querySelector(wi(o)))?(e.instance=i,qt(i),i):(a=l,(i=_e.get(o))&&(a=O({},l),Gs(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),qt(i),Kt(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Ku(a,l.precedence,t));return e.instance}function Ku(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,o=i,c=0;c<a.length;c++){var h=a[c];if(h.dataset.precedence===e)o=h;else if(o!==i)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function $s(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Gs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ju=null;function x0(t,e,l){if(Ju===null){var a=new Map,i=Ju=new Map;i.set(l,a)}else i=Ju,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),i=0;i<l.length;i++){var o=l[i];if(!(o[jn]||o[Ft]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var c=o.getAttribute(e)||"";c=t+c;var h=a.get(c);h?h.push(o):a.set(c,[o])}}return a}function S0(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Hv(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function E0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var zi=null;function Lv(){}function qv(t,e,l){if(zi===null)throw Error(s(475));var a=zi;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=mn(l.href),o=t.querySelector(Ei(i));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Fu.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=o,qt(o);return}o=t.ownerDocument||t,l=y0(l),(i=_e.get(i))&&$s(l,i),o=o.createElement("link"),qt(o);var c=o;c._p=new Promise(function(h,g){c.onload=h,c.onerror=g}),Kt(o,"link",l),e.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Fu.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Qv(){if(zi===null)throw Error(s(475));var t=zi;return t.stylesheets&&t.count===0&&Ys(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&Ys(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Fu(){if(this.count--,this.count===0){if(this.stylesheets)Ys(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Wu=null;function Ys(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wu=new Map,e.forEach(Vv,t),Wu=null,Fu.call(t))}function Vv(t,e){if(!(e.state.loading&4)){var l=Wu.get(t);if(l)var a=l.get(null);else{l=new Map,Wu.set(t,l);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var c=i[o];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}i=e.instance,c=i.getAttribute("data-precedence"),o=l.get(c)||a,o===a&&l.set(null,i),l.set(c,i),this.count++,a=Fu.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),o?o.parentNode.insertBefore(i,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Ti={$$typeof:R,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function $v(t,e,l,a,i,o,c,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.hiddenUpdates=Qo(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function w0(t,e,l,a,i,o,c,h,g,A,z,D){return t=new $v(t,e,l,c,h,g,A,D),e=1,o===!0&&(e|=24),o=he(3,null,null,e),t.current=o,o.stateNode=t,e=Tr(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:a,isDehydrated:l,cache:e},Dr(o),t}function z0(t){return t?(t=Ka,t):Ka}function T0(t,e,l,a,i,o){i=z0(i),a.context===null?a.context=i:a.pendingContext=i,a=Ol(e),a.payload={element:l},o=o===void 0?null:o,o!==null&&(a.callback=o),l=Dl(t,a,e),l!==null&&(be(l,t,e),li(l,t,e))}function B0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Xs(t,e){B0(t,e),(t=t.alternate)&&B0(t,e)}function M0(t){if(t.tag===13){var e=Za(t,67108864);e!==null&&be(e,t,67108864),Xs(t,67108864)}}var Pu=!0;function Gv(t,e,l,a){var i=B.T;B.T=null;var o=N.p;try{N.p=2,Zs(t,e,l,a)}finally{N.p=o,B.T=i}}function Yv(t,e,l,a){var i=B.T;B.T=null;var o=N.p;try{N.p=8,Zs(t,e,l,a)}finally{N.p=o,B.T=i}}function Zs(t,e,l,a){if(Pu){var i=Ks(a);if(i===null)ks(t,e,a,Iu,l),D0(t,a);else if(Zv(i,t,e,l,a))a.stopPropagation();else if(D0(t,a),e&4&&-1<Xv.indexOf(t)){for(;i!==null;){var o=Na(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var c=aa(o.pendingLanes);if(c!==0){var h=o;for(h.pendingLanes|=2,h.entangledLanes|=2;c;){var g=1<<31-fe(c);h.entanglements[1]|=g,c&=~g}Pe(o),(gt&6)===0&&(Ru=Ze()+500,yi(0))}}break;case 13:h=Za(o,2),h!==null&&be(h,o,2),Hu(),Xs(o,2)}if(o=Ks(a),o===null&&ks(t,e,a,Iu,l),o===i)break;i=o}i!==null&&a.stopPropagation()}else ks(t,e,a,null,l)}}function Ks(t){return t=Io(t),Js(t)}var Iu=null;function Js(t){if(Iu=null,t=ka(t),t!==null){var e=d(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=p(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Iu=t,null}function O0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(C1()){case Vc:return 2;case $c:return 8;case Yi:case _1:return 32;case Gc:return 268435456;default:return 32}default:return 32}}var Fs=!1,$l=null,Gl=null,Yl=null,Bi=new Map,Mi=new Map,Xl=[],Xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function D0(t,e){switch(t){case"focusin":case"focusout":$l=null;break;case"dragenter":case"dragleave":Gl=null;break;case"mouseover":case"mouseout":Yl=null;break;case"pointerover":case"pointerout":Bi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(e.pointerId)}}function Oi(t,e,l,a,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Na(e),e!==null&&M0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Zv(t,e,l,a,i){switch(e){case"focusin":return $l=Oi($l,t,e,l,a,i),!0;case"dragenter":return Gl=Oi(Gl,t,e,l,a,i),!0;case"mouseover":return Yl=Oi(Yl,t,e,l,a,i),!0;case"pointerover":var o=i.pointerId;return Bi.set(o,Oi(Bi.get(o)||null,t,e,l,a,i)),!0;case"gotpointercapture":return o=i.pointerId,Mi.set(o,Oi(Mi.get(o)||null,t,e,l,a,i)),!0}return!1}function C0(t){var e=ka(t.target);if(e!==null){var l=d(e);if(l!==null){if(e=l.tag,e===13){if(e=p(l),e!==null){t.blockedOn=e,q1(t.priority,function(){if(l.tag===13){var a=me();a=Vo(a);var i=Za(l,a);i!==null&&be(i,l,a),Xs(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function to(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Ks(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Po=a,l.target.dispatchEvent(a),Po=null}else return e=Na(l),e!==null&&M0(e),t.blockedOn=l,!1;e.shift()}return!0}function _0(t,e,l){to(t)&&l.delete(e)}function Kv(){Fs=!1,$l!==null&&to($l)&&($l=null),Gl!==null&&to(Gl)&&(Gl=null),Yl!==null&&to(Yl)&&(Yl=null),Bi.forEach(_0),Mi.forEach(_0)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,Fs||(Fs=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Kv)))}var lo=null;function U0(t){lo!==t&&(lo=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){lo===t&&(lo=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(Js(a||l)===null)continue;break}var o=Na(l);o!==null&&(t.splice(e,3),e-=3,Jr(o,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function Di(t){function e(g){return eo(g,t)}$l!==null&&eo($l,t),Gl!==null&&eo(Gl,t),Yl!==null&&eo(Yl,t),Bi.forEach(e),Mi.forEach(e);for(var l=0;l<Xl.length;l++){var a=Xl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Xl.length&&(l=Xl[0],l.blockedOn===null);)C0(l),l.blockedOn===null&&Xl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],o=l[a+1],c=i[ne]||null;if(typeof o=="function")c||U0(l);else if(c){var h=null;if(o&&o.hasAttribute("formAction")){if(i=o,c=o[ne]||null)h=c.formAction;else if(Js(i)!==null)continue}else h=c.action;typeof h=="function"?l[a+1]=h:(l.splice(a,3),a-=3),U0(l)}}}function Ws(t){this._internalRoot=t}ao.prototype.render=Ws.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var l=e.current,a=me();T0(l,a,t,e,null,null)},ao.prototype.unmount=Ws.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;T0(t.current,2,null,t,null,null),Hu(),e[Ua]=null}};function ao(t){this._internalRoot=t}ao.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jc();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Xl.length&&e!==0&&e<Xl[l].priority;l++);Xl.splice(l,0,t),l===0&&C0(t)}};var k0=u.version;if(k0!=="19.1.1")throw Error(s(527,k0,"19.1.1"));N.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=b(e),t=t!==null?T(t):null,t=t===null?null:t.stateNode,t};var Jv={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{kn=no.inject(Jv),ce=no}catch{}}return Ci.createRoot=function(t,e){if(!f(t))throw Error(s(299));var l=!1,a="",i=Fd,o=Wd,c=Pd,h=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(h=e.unstable_transitionCallbacks)),e=w0(t,1,!1,null,null,l,a,i,o,c,h,null),t[Ua]=e.current,Us(t),new Ws(e)},Ci.hydrateRoot=function(t,e,l){if(!f(t))throw Error(s(299));var a=!1,i="",o=Fd,c=Wd,h=Pd,g=null,A=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(o=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(h=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(g=l.unstable_transitionCallbacks),l.formState!==void 0&&(A=l.formState)),e=w0(t,1,!0,e,l??null,a,i,o,c,h,g,A),e.context=z0(null),l=e.current,a=me(),a=Vo(a),i=Ol(a),i.callback=null,Dl(l,i,a),l=a,e.current.lanes=l,Rn(e,l),Pe(e),t[Ua]=e.current,Us(t),new ao(e)},Ci.version="19.1.1",Ci}var q0;function hb(){if(q0)return Is.exports;q0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch{}}return n(),Is.exports=db(),Is.exports}var pb=hb(),Yt=function(){return Yt=Object.assign||function(u){for(var r,s=1,f=arguments.length;s<f;s++){r=arguments[s];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(u[d]=r[d])}return u},Yt.apply(this,arguments)};function wn(n,u,r){if(r||arguments.length===2)for(var s=0,f=u.length,d;s<f;s++)(d||!(s in u))&&(d||(d=Array.prototype.slice.call(u,0,s)),d[s]=u[s]);return n.concat(d||Array.prototype.slice.call(u))}var Et="-ms-",ki="-moz-",ht="-webkit-",wp="comm",Do="rule",Mc="decl",gb="@import",zp="@keyframes",vb="@layer",Tp=Math.abs,Oc=String.fromCharCode,rc=Object.assign;function mb(n,u){return Gt(n,0)^45?(((u<<2^Gt(n,0))<<2^Gt(n,1))<<2^Gt(n,2))<<2^Gt(n,3):0}function Bp(n){return n.trim()}function Al(n,u){return(n=u.exec(n))?n[0]:n}function P(n,u,r){return n.replace(u,r)}function so(n,u,r){return n.indexOf(u,r)}function Gt(n,u){return n.charCodeAt(u)|0}function zn(n,u,r){return n.slice(u,r)}function Ie(n){return n.length}function Mp(n){return n.length}function Ui(n,u){return u.push(n),n}function bb(n,u){return n.map(u).join("")}function Q0(n,u){return n.filter(function(r){return!Al(r,u)})}var Co=1,Tn=1,Op=0,ke=0,Nt=0,Un="";function _o(n,u,r,s,f,d,p,E){return{value:n,root:u,parent:r,type:s,props:f,children:d,line:Co,column:Tn,length:p,return:"",siblings:E}}function Kl(n,u){return rc(_o("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},u)}function yn(n){for(;n.root;)n=Kl(n.root,{children:[n]});Ui(n,n.siblings)}function yb(){return Nt}function Ab(){return Nt=ke>0?Gt(Un,--ke):0,Tn--,Nt===10&&(Tn=1,Co--),Nt}function Ge(){return Nt=ke<Op?Gt(Un,ke++):0,Tn++,Nt===10&&(Tn=1,Co++),Nt}function za(){return Gt(Un,ke)}function co(){return ke}function Uo(n,u){return zn(Un,n,u)}function sc(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xb(n){return Co=Tn=1,Op=Ie(Un=n),ke=0,[]}function Sb(n){return Un="",n}function lc(n){return Bp(Uo(ke-1,cc(n===91?n+2:n===40?n+1:n)))}function Eb(n){for(;(Nt=za())&&Nt<33;)Ge();return sc(n)>2||sc(Nt)>3?"":" "}function wb(n,u){for(;--u&&Ge()&&!(Nt<48||Nt>102||Nt>57&&Nt<65||Nt>70&&Nt<97););return Uo(n,co()+(u<6&&za()==32&&Ge()==32))}function cc(n){for(;Ge();)switch(Nt){case n:return ke;case 34:case 39:n!==34&&n!==39&&cc(Nt);break;case 40:n===41&&cc(n);break;case 92:Ge();break}return ke}function zb(n,u){for(;Ge()&&n+Nt!==57;)if(n+Nt===84&&za()===47)break;return"/*"+Uo(u,ke-1)+"*"+Oc(n===47?n:Ge())}function Tb(n){for(;!sc(za());)Ge();return Uo(n,ke)}function Bb(n){return Sb(fo("",null,null,null,[""],n=xb(n),0,[0],n))}function fo(n,u,r,s,f,d,p,E,b){for(var T=0,O=0,C=p,_=0,L=0,U=0,k=1,F=1,W=1,V=0,R="",Q=f,pt=d,tt=s,J=R;F;)switch(U=V,V=Ge()){case 40:if(U!=108&&Gt(J,C-1)==58){so(J+=P(lc(V),"&","&\f"),"&\f",Tp(T?E[T-1]:0))!=-1&&(W=-1);break}case 34:case 39:case 91:J+=lc(V);break;case 9:case 10:case 13:case 32:J+=Eb(U);break;case 92:J+=wb(co()-1,7);continue;case 47:switch(za()){case 42:case 47:Ui(Mb(zb(Ge(),co()),u,r,b),b);break;default:J+="/"}break;case 123*k:E[T++]=Ie(J)*W;case 125*k:case 59:case 0:switch(V){case 0:case 125:F=0;case 59+O:W==-1&&(J=P(J,/\f/g,"")),L>0&&Ie(J)-C&&Ui(L>32?$0(J+";",s,r,C-1,b):$0(P(J," ","")+";",s,r,C-2,b),b);break;case 59:J+=";";default:if(Ui(tt=V0(J,u,r,T,O,f,E,R,Q=[],pt=[],C,d),d),V===123)if(O===0)fo(J,u,tt,tt,Q,d,C,E,pt);else switch(_===99&&Gt(J,3)===110?100:_){case 100:case 108:case 109:case 115:fo(n,tt,tt,s&&Ui(V0(n,tt,tt,0,0,f,E,R,f,Q=[],C,pt),pt),f,pt,C,E,s?Q:pt);break;default:fo(J,tt,tt,tt,[""],pt,0,E,pt)}}T=O=L=0,k=W=1,R=J="",C=p;break;case 58:C=1+Ie(J),L=U;default:if(k<1){if(V==123)--k;else if(V==125&&k++==0&&Ab()==125)continue}switch(J+=Oc(V),V*k){case 38:W=O>0?1:(J+="\f",-1);break;case 44:E[T++]=(Ie(J)-1)*W,W=1;break;case 64:za()===45&&(J+=lc(Ge())),_=za(),O=C=Ie(R=J+=Tb(co())),V++;break;case 45:U===45&&Ie(J)==2&&(k=0)}}return d}function V0(n,u,r,s,f,d,p,E,b,T,O,C){for(var _=f-1,L=f===0?d:[""],U=Mp(L),k=0,F=0,W=0;k<s;++k)for(var V=0,R=zn(n,_+1,_=Tp(F=p[k])),Q=n;V<U;++V)(Q=Bp(F>0?L[V]+" "+R:P(R,/&\f/g,L[V])))&&(b[W++]=Q);return _o(n,u,r,f===0?Do:E,b,T,O,C)}function Mb(n,u,r,s){return _o(n,u,r,wp,Oc(yb()),zn(n,2,-2),0,s)}function $0(n,u,r,s,f){return _o(n,u,r,Mc,zn(n,0,s),zn(n,s+1,-1),s,f)}function Dp(n,u,r){switch(mb(n,u)){case 5103:return ht+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ht+n+n;case 4789:return ki+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ht+n+ki+n+Et+n+n;case 5936:switch(Gt(n,u+11)){case 114:return ht+n+Et+P(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ht+n+Et+P(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ht+n+Et+P(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ht+n+Et+n+n;case 6165:return ht+n+Et+"flex-"+n+n;case 5187:return ht+n+P(n,/(\w+).+(:[^]+)/,ht+"box-$1$2"+Et+"flex-$1$2")+n;case 5443:return ht+n+Et+"flex-item-"+P(n,/flex-|-self/g,"")+(Al(n,/flex-|baseline/)?"":Et+"grid-row-"+P(n,/flex-|-self/g,""))+n;case 4675:return ht+n+Et+"flex-line-pack"+P(n,/align-content|flex-|-self/g,"")+n;case 5548:return ht+n+Et+P(n,"shrink","negative")+n;case 5292:return ht+n+Et+P(n,"basis","preferred-size")+n;case 6060:return ht+"box-"+P(n,"-grow","")+ht+n+Et+P(n,"grow","positive")+n;case 4554:return ht+P(n,/([^-])(transform)/g,"$1"+ht+"$2")+n;case 6187:return P(P(P(n,/(zoom-|grab)/,ht+"$1"),/(image-set)/,ht+"$1"),n,"")+n;case 5495:case 3959:return P(n,/(image-set\([^]*)/,ht+"$1$`$1");case 4968:return P(P(n,/(.+:)(flex-)?(.*)/,ht+"box-pack:$3"+Et+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ht+n+n;case 4200:if(!Al(n,/flex-|baseline/))return Et+"grid-column-align"+zn(n,u)+n;break;case 2592:case 3360:return Et+P(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(s,f){return u=f,Al(s.props,/grid-\w+-end/)})?~so(n+(r=r[u].value),"span",0)?n:Et+P(n,"-start","")+n+Et+"grid-row-span:"+(~so(r,"span",0)?Al(r,/\d+/):+Al(r,/\d+/)-+Al(n,/\d+/))+";":Et+P(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(s){return Al(s.props,/grid-\w+-start/)})?n:Et+P(P(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return P(n,/(.+)-inline(.+)/,ht+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ie(n)-1-u>6)switch(Gt(n,u+1)){case 109:if(Gt(n,u+4)!==45)break;case 102:return P(n,/(.+:)(.+)-([^]+)/,"$1"+ht+"$2-$3$1"+ki+(Gt(n,u+3)==108?"$3":"$2-$3"))+n;case 115:return~so(n,"stretch",0)?Dp(P(n,"stretch","fill-available"),u,r)+n:n}break;case 5152:case 5920:return P(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,f,d,p,E,b,T){return Et+f+":"+d+T+(p?Et+f+"-span:"+(E?b:+b-+d)+T:"")+n});case 4949:if(Gt(n,u+6)===121)return P(n,":",":"+ht)+n;break;case 6444:switch(Gt(n,Gt(n,14)===45?18:11)){case 120:return P(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ht+(Gt(n,14)===45?"inline-":"")+"box$3$1"+ht+"$2$3$1"+Et+"$2box$3")+n;case 100:return P(n,":",":"+Et)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return P(n,"scroll-","scroll-snap-")+n}return n}function bo(n,u){for(var r="",s=0;s<n.length;s++)r+=u(n[s],s,n,u)||"";return r}function Ob(n,u,r,s){switch(n.type){case vb:if(n.children.length)break;case gb:case Mc:return n.return=n.return||n.value;case wp:return"";case zp:return n.return=n.value+"{"+bo(n.children,s)+"}";case Do:if(!Ie(n.value=n.props.join(",")))return""}return Ie(r=bo(n.children,s))?n.return=n.value+"{"+r+"}":""}function Db(n){var u=Mp(n);return function(r,s,f,d){for(var p="",E=0;E<u;E++)p+=n[E](r,s,f,d)||"";return p}}function Cb(n){return function(u){u.root||(u=u.return)&&n(u)}}function _b(n,u,r,s){if(n.length>-1&&!n.return)switch(n.type){case Mc:n.return=Dp(n.value,n.length,r);return;case zp:return bo([Kl(n,{value:P(n.value,"@","@"+ht)})],s);case Do:if(n.length)return bb(r=n.props,function(f){switch(Al(f,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yn(Kl(n,{props:[P(f,/:(read-\w+)/,":"+ki+"$1")]})),yn(Kl(n,{props:[f]})),rc(n,{props:Q0(r,s)});break;case"::placeholder":yn(Kl(n,{props:[P(f,/:(plac\w+)/,":"+ht+"input-$1")]})),yn(Kl(n,{props:[P(f,/:(plac\w+)/,":"+ki+"$1")]})),yn(Kl(n,{props:[P(f,/:(plac\w+)/,Et+"input-$1")]})),yn(Kl(n,{props:[f]})),rc(n,{props:Q0(r,s)});break}return""})}}var Ub={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ae={},Bn=typeof process<"u"&&Ae!==void 0&&(Ae.REACT_APP_SC_ATTR||Ae.SC_ATTR)||"data-styled",Cp="active",_p="data-styled-version",ko="6.1.19",Dc=`/*!sc*/
`,yo=typeof window<"u"&&typeof document<"u",kb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ae!==void 0&&Ae.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ae.REACT_APP_SC_DISABLE_SPEEDY!==""?Ae.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ae.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ae!==void 0&&Ae.SC_DISABLE_SPEEDY!==void 0&&Ae.SC_DISABLE_SPEEDY!==""&&Ae.SC_DISABLE_SPEEDY!=="false"&&Ae.SC_DISABLE_SPEEDY),Nb={},No=Object.freeze([]),Mn=Object.freeze({});function Up(n,u,r){return r===void 0&&(r=Mn),n.theme!==r.theme&&n.theme||u||r.theme}var kp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Rb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jb=/(^-|-$)/g;function G0(n){return n.replace(Rb,"-").replace(jb,"")}var Hb=/(a)(d)/gi,io=52,Y0=function(n){return String.fromCharCode(n+(n>25?39:97))};function fc(n){var u,r="";for(u=Math.abs(n);u>io;u=u/io|0)r=Y0(u%io)+r;return(Y0(u%io)+r).replace(Hb,"$1-$2")}var ac,Np=5381,En=function(n,u){for(var r=u.length;r;)n=33*n^u.charCodeAt(--r);return n},Rp=function(n){return En(Np,n)};function Cc(n){return fc(Rp(n)>>>0)}function Lb(n){return n.displayName||n.name||"Component"}function nc(n){return typeof n=="string"&&!0}var jp=typeof Symbol=="function"&&Symbol.for,Hp=jp?Symbol.for("react.memo"):60115,qb=jp?Symbol.for("react.forward_ref"):60112,Qb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$b=((ac={})[qb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ac[Hp]=Lp,ac);function X0(n){return("type"in(u=n)&&u.type.$$typeof)===Hp?Lp:"$$typeof"in n?$b[n.$$typeof]:Qb;var u}var Gb=Object.defineProperty,Yb=Object.getOwnPropertyNames,Z0=Object.getOwnPropertySymbols,Xb=Object.getOwnPropertyDescriptor,Zb=Object.getPrototypeOf,K0=Object.prototype;function qp(n,u,r){if(typeof u!="string"){if(K0){var s=Zb(u);s&&s!==K0&&qp(n,s,r)}var f=Yb(u);Z0&&(f=f.concat(Z0(u)));for(var d=X0(n),p=X0(u),E=0;E<f.length;++E){var b=f[E];if(!(b in Vb||r&&r[b]||p&&b in p||d&&b in d)){var T=Xb(u,b);try{Gb(n,b,T)}catch{}}}}return n}function Oa(n){return typeof n=="function"}function _c(n){return typeof n=="object"&&"styledComponentId"in n}function Ea(n,u){return n&&u?"".concat(n," ").concat(u):n||u||""}function Ao(n,u){if(n.length===0)return"";for(var r=n[0],s=1;s<n.length;s++)r+=n[s];return r}function Li(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function dc(n,u,r){if(r===void 0&&(r=!1),!r&&!Li(n)&&!Array.isArray(n))return u;if(Array.isArray(u))for(var s=0;s<u.length;s++)n[s]=dc(n[s],u[s]);else if(Li(u))for(var s in u)n[s]=dc(n[s],u[s]);return n}function Uc(n,u){Object.defineProperty(n,"toString",{value:u})}function Il(n){for(var u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var Kb=(function(){function n(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return n.prototype.indexOfGroup=function(u){for(var r=0,s=0;s<u;s++)r+=this.groupSizes[s];return r},n.prototype.insertRules=function(u,r){if(u>=this.groupSizes.length){for(var s=this.groupSizes,f=s.length,d=f;u>=d;)if((d<<=1)<0)throw Il(16,"".concat(u));this.groupSizes=new Uint32Array(d),this.groupSizes.set(s),this.length=d;for(var p=f;p<d;p++)this.groupSizes[p]=0}for(var E=this.indexOfGroup(u+1),b=(p=0,r.length);p<b;p++)this.tag.insertRule(E,r[p])&&(this.groupSizes[u]++,E++)},n.prototype.clearGroup=function(u){if(u<this.length){var r=this.groupSizes[u],s=this.indexOfGroup(u),f=s+r;this.groupSizes[u]=0;for(var d=s;d<f;d++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(u){var r="";if(u>=this.length||this.groupSizes[u]===0)return r;for(var s=this.groupSizes[u],f=this.indexOfGroup(u),d=f+s,p=f;p<d;p++)r+="".concat(this.tag.getRule(p)).concat(Dc);return r},n})(),ho=new Map,xo=new Map,po=1,uo=function(n){if(ho.has(n))return ho.get(n);for(;xo.has(po);)po++;var u=po++;return ho.set(n,u),xo.set(u,n),u},Jb=function(n,u){po=u+1,ho.set(n,u),xo.set(u,n)},Fb="style[".concat(Bn,"][").concat(_p,'="').concat(ko,'"]'),Wb=new RegExp("^".concat(Bn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Pb=function(n,u,r){for(var s,f=r.split(","),d=0,p=f.length;d<p;d++)(s=f[d])&&n.registerName(u,s)},Ib=function(n,u){for(var r,s=((r=u.textContent)!==null&&r!==void 0?r:"").split(Dc),f=[],d=0,p=s.length;d<p;d++){var E=s[d].trim();if(E){var b=E.match(Wb);if(b){var T=0|parseInt(b[1],10),O=b[2];T!==0&&(Jb(O,T),Pb(n,O,b[3]),n.getTag().insertRules(T,f)),f.length=0}else f.push(E)}}},J0=function(n){for(var u=document.querySelectorAll(Fb),r=0,s=u.length;r<s;r++){var f=u[r];f&&f.getAttribute(Bn)!==Cp&&(Ib(n,f),f.parentNode&&f.parentNode.removeChild(f))}};function ty(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Qp=function(n){var u=document.head,r=n||u,s=document.createElement("style"),f=(function(E){var b=Array.from(E.querySelectorAll("style[".concat(Bn,"]")));return b[b.length-1]})(r),d=f!==void 0?f.nextSibling:null;s.setAttribute(Bn,Cp),s.setAttribute(_p,ko);var p=ty();return p&&s.setAttribute("nonce",p),r.insertBefore(s,d),s},ey=(function(){function n(u){this.element=Qp(u),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,f=0,d=s.length;f<d;f++){var p=s[f];if(p.ownerNode===r)return p}throw Il(17)})(this.element),this.length=0}return n.prototype.insertRule=function(u,r){try{return this.sheet.insertRule(r,u),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},n.prototype.getRule=function(u){var r=this.sheet.cssRules[u];return r&&r.cssText?r.cssText:""},n})(),ly=(function(){function n(u){this.element=Qp(u),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(u,r){if(u<=this.length&&u>=0){var s=document.createTextNode(r);return this.element.insertBefore(s,this.nodes[u]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},n.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},n})(),ay=(function(){function n(u){this.rules=[],this.length=0}return n.prototype.insertRule=function(u,r){return u<=this.length&&(this.rules.splice(u,0,r),this.length++,!0)},n.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},n.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},n})(),F0=yo,ny={isServer:!yo,useCSSOMInjection:!kb},So=(function(){function n(u,r,s){u===void 0&&(u=Mn),r===void 0&&(r={});var f=this;this.options=Yt(Yt({},ny),u),this.gs=r,this.names=new Map(s),this.server=!!u.isServer,!this.server&&yo&&F0&&(F0=!1,J0(this)),Uc(this,function(){return(function(d){for(var p=d.getTag(),E=p.length,b="",T=function(C){var _=(function(W){return xo.get(W)})(C);if(_===void 0)return"continue";var L=d.names.get(_),U=p.getGroup(C);if(L===void 0||!L.size||U.length===0)return"continue";var k="".concat(Bn,".g").concat(C,'[id="').concat(_,'"]'),F="";L!==void 0&&L.forEach(function(W){W.length>0&&(F+="".concat(W,","))}),b+="".concat(U).concat(k,'{content:"').concat(F,'"}').concat(Dc)},O=0;O<E;O++)T(O);return b})(f)})}return n.registerId=function(u){return uo(u)},n.prototype.rehydrate=function(){!this.server&&yo&&J0(this)},n.prototype.reconstructWithOptions=function(u,r){return r===void 0&&(r=!0),new n(Yt(Yt({},this.options),u),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(u=(function(r){var s=r.useCSSOMInjection,f=r.target;return r.isServer?new ay(f):s?new ey(f):new ly(f)})(this.options),new Kb(u)));var u},n.prototype.hasNameForId=function(u,r){return this.names.has(u)&&this.names.get(u).has(r)},n.prototype.registerName=function(u,r){if(uo(u),this.names.has(u))this.names.get(u).add(r);else{var s=new Set;s.add(r),this.names.set(u,s)}},n.prototype.insertRules=function(u,r,s){this.registerName(u,r),this.getTag().insertRules(uo(u),s)},n.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},n.prototype.clearRules=function(u){this.getTag().clearGroup(uo(u)),this.clearNames(u)},n.prototype.clearTag=function(){this.tag=void 0},n})(),iy=/&/g,uy=/^\s*\/\/.*$/gm;function Vp(n,u){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(u," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(u," ")),r.props=r.props.map(function(s){return"".concat(u," ").concat(s)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Vp(r.children,u)),r})}function oy(n){var u,r,s,f=Mn,d=f.options,p=d===void 0?Mn:d,E=f.plugins,b=E===void 0?No:E,T=function(_,L,U){return U.startsWith(r)&&U.endsWith(r)&&U.replaceAll(r,"").length>0?".".concat(u):_},O=b.slice();O.push(function(_){_.type===Do&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(iy,r).replace(s,T))}),p.prefix&&O.push(_b),O.push(Ob);var C=function(_,L,U,k){L===void 0&&(L=""),U===void 0&&(U=""),k===void 0&&(k="&"),u=k,r=L,s=new RegExp("\\".concat(r,"\\b"),"g");var F=_.replace(uy,""),W=Bb(U||L?"".concat(U," ").concat(L," { ").concat(F," }"):F);p.namespace&&(W=Vp(W,p.namespace));var V=[];return bo(W,Db(O.concat(Cb(function(R){return V.push(R)})))),V};return C.hash=b.length?b.reduce(function(_,L){return L.name||Il(15),En(_,L.name)},Np).toString():"",C}var ry=new So,hc=oy(),$p=$e.createContext({shouldForwardProp:void 0,styleSheet:ry,stylis:hc});$p.Consumer;$e.createContext(void 0);function pc(){return H.useContext($p)}var Gp=(function(){function n(u,r){var s=this;this.inject=function(f,d){d===void 0&&(d=hc);var p=s.name+d.hash;f.hasNameForId(s.id,p)||f.insertRules(s.id,p,d(s.rules,p,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=r,Uc(this,function(){throw Il(12,String(s.name))})}return n.prototype.getName=function(u){return u===void 0&&(u=hc),this.name+u.hash},n})(),sy=function(n){return n>="A"&&n<="Z"};function W0(n){for(var u="",r=0;r<n.length;r++){var s=n[r];if(r===1&&s==="-"&&n[0]==="-")return n;sy(s)?u+="-"+s.toLowerCase():u+=s}return u.startsWith("ms-")?"-"+u:u}var Yp=function(n){return n==null||n===!1||n===""},Xp=function(n){var u,r,s=[];for(var f in n){var d=n[f];n.hasOwnProperty(f)&&!Yp(d)&&(Array.isArray(d)&&d.isCss||Oa(d)?s.push("".concat(W0(f),":"),d,";"):Li(d)?s.push.apply(s,wn(wn(["".concat(f," {")],Xp(d),!1),["}"],!1)):s.push("".concat(W0(f),": ").concat((u=f,(r=d)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||u in Ub||u.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return s};function Wl(n,u,r,s){if(Yp(n))return[];if(_c(n))return[".".concat(n.styledComponentId)];if(Oa(n)){if(!Oa(d=n)||d.prototype&&d.prototype.isReactComponent||!u)return[n];var f=n(u);return Wl(f,u,r,s)}var d;return n instanceof Gp?r?(n.inject(r,s),[n.getName(s)]):[n]:Li(n)?Xp(n):Array.isArray(n)?Array.prototype.concat.apply(No,n.map(function(p){return Wl(p,u,r,s)})):[n.toString()]}function Zp(n){for(var u=0;u<n.length;u+=1){var r=n[u];if(Oa(r)&&!_c(r))return!1}return!0}var cy=Rp(ko),fy=(function(){function n(u,r,s){this.rules=u,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Zp(u),this.componentId=r,this.baseHash=En(cy,r),this.baseStyle=s,So.registerId(r)}return n.prototype.generateAndInjectStyles=function(u,r,s){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,r,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))f=Ea(f,this.staticRulesId);else{var d=Ao(Wl(this.rules,u,r,s)),p=fc(En(this.baseHash,d)>>>0);if(!r.hasNameForId(this.componentId,p)){var E=s(d,".".concat(p),void 0,this.componentId);r.insertRules(this.componentId,p,E)}f=Ea(f,p),this.staticRulesId=p}else{for(var b=En(this.baseHash,s.hash),T="",O=0;O<this.rules.length;O++){var C=this.rules[O];if(typeof C=="string")T+=C;else if(C){var _=Ao(Wl(C,u,r,s));b=En(b,_+O),T+=_}}if(T){var L=fc(b>>>0);r.hasNameForId(this.componentId,L)||r.insertRules(this.componentId,L,s(T,".".concat(L),void 0,this.componentId)),f=Ea(f,L)}}return f},n})(),On=$e.createContext(void 0);On.Consumer;function u4(){var n=H.useContext(On);if(!n)throw Il(18);return n}function dy(n){var u=$e.useContext(On),r=H.useMemo(function(){return(function(s,f){if(!s)throw Il(14);if(Oa(s)){var d=s(f);return d}if(Array.isArray(s)||typeof s!="object")throw Il(8);return f?Yt(Yt({},f),s):s})(n.theme,u)},[n.theme,u]);return n.children?$e.createElement(On.Provider,{value:r},n.children):null}var ic={};function hy(n,u,r){var s=_c(n),f=n,d=!nc(n),p=u.attrs,E=p===void 0?No:p,b=u.componentId,T=b===void 0?(function(Q,pt){var tt=typeof Q!="string"?"sc":G0(Q);ic[tt]=(ic[tt]||0)+1;var J="".concat(tt,"-").concat(Cc(ko+tt+ic[tt]));return pt?"".concat(pt,"-").concat(J):J})(u.displayName,u.parentComponentId):b,O=u.displayName,C=O===void 0?(function(Q){return nc(Q)?"styled.".concat(Q):"Styled(".concat(Lb(Q),")")})(n):O,_=u.displayName&&u.componentId?"".concat(G0(u.displayName),"-").concat(u.componentId):u.componentId||T,L=s&&f.attrs?f.attrs.concat(E).filter(Boolean):E,U=u.shouldForwardProp;if(s&&f.shouldForwardProp){var k=f.shouldForwardProp;if(u.shouldForwardProp){var F=u.shouldForwardProp;U=function(Q,pt){return k(Q,pt)&&F(Q,pt)}}else U=k}var W=new fy(r,_,s?f.componentStyle:void 0);function V(Q,pt){return(function(tt,J,Lt){var je=tt.attrs,Ca=tt.componentStyle,El=tt.defaultProps,ee=tt.foldedComponentIds,_a=tt.styledComponentId,ea=tt.target,He=$e.useContext(On),B=pc(),N=tt.shouldForwardProp||B.shouldForwardProp,Y=Up(J,He,El)||Mn,nt=(function(Pt,le,el){for(var Xe,ae=Yt(Yt({},le),{className:void 0,theme:el}),la=0;la<Pt.length;la+=1){var ll=Oa(Xe=Pt[la])?Xe(ae):Xe;for(var Ee in ll)ae[Ee]=Ee==="className"?Ea(ae[Ee],ll[Ee]):Ee==="style"?Yt(Yt({},ae[Ee]),ll[Ee]):ll[Ee]}return le.className&&(ae.className=Ea(ae.className,le.className)),ae})(je,J,Y),dt=nt.as||ea,Dt={};for(var ot in nt)nt[ot]===void 0||ot[0]==="$"||ot==="as"||ot==="theme"&&nt.theme===Y||(ot==="forwardedAs"?Dt.as=nt.forwardedAs:N&&!N(ot,dt)||(Dt[ot]=nt[ot]));var ct=(function(Pt,le){var el=pc(),Xe=Pt.generateAndInjectStyles(le,el.styleSheet,el.stylis);return Xe})(Ca,nt),Tt=Ea(ee,_a);return ct&&(Tt+=" "+ct),nt.className&&(Tt+=" "+nt.className),Dt[nc(dt)&&!kp.has(dt)?"class":"className"]=Tt,Lt&&(Dt.ref=Lt),H.createElement(dt,Dt)})(R,Q,pt)}V.displayName=C;var R=$e.forwardRef(V);return R.attrs=L,R.componentStyle=W,R.displayName=C,R.shouldForwardProp=U,R.foldedComponentIds=s?Ea(f.foldedComponentIds,f.styledComponentId):"",R.styledComponentId=_,R.target=s?f.target:n,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Q){this._foldedDefaultProps=s?(function(pt){for(var tt=[],J=1;J<arguments.length;J++)tt[J-1]=arguments[J];for(var Lt=0,je=tt;Lt<je.length;Lt++)dc(pt,je[Lt],!0);return pt})({},f.defaultProps,Q):Q}}),Uc(R,function(){return".".concat(R.styledComponentId)}),d&&qp(R,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function P0(n,u){for(var r=[n[0]],s=0,f=u.length;s<f;s+=1)r.push(u[s],n[s+1]);return r}var I0=function(n){return Object.assign(n,{isCss:!0})};function Ro(n){for(var u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];if(Oa(n)||Li(n))return I0(Wl(P0(No,wn([n],u,!0))));var s=n;return u.length===0&&s.length===1&&typeof s[0]=="string"?Wl(s):I0(Wl(P0(s,u)))}function gc(n,u,r){if(r===void 0&&(r=Mn),!u)throw Il(1,u);var s=function(f){for(var d=[],p=1;p<arguments.length;p++)d[p-1]=arguments[p];return n(u,r,Ro.apply(void 0,wn([f],d,!1)))};return s.attrs=function(f){return gc(n,u,Yt(Yt({},r),{attrs:Array.prototype.concat(r.attrs,f).filter(Boolean)}))},s.withConfig=function(f){return gc(n,u,Yt(Yt({},r),f))},s}var Kp=function(n){return gc(hy,n)},X=Kp;kp.forEach(function(n){X[n]=Kp(n)});var py=(function(){function n(u,r){this.rules=u,this.componentId=r,this.isStatic=Zp(u),So.registerId(this.componentId+1)}return n.prototype.createStyles=function(u,r,s,f){var d=f(Ao(Wl(this.rules,r,s,f)),""),p=this.componentId+u;s.insertRules(p,p,d)},n.prototype.removeStyles=function(u,r){r.clearRules(this.componentId+u)},n.prototype.renderStyles=function(u,r,s,f){u>2&&So.registerId(this.componentId+u),this.removeStyles(u,s),this.createStyles(u,r,s,f)},n})();function Jp(n){for(var u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];var s=Ro.apply(void 0,wn([n],u,!1)),f="sc-global-".concat(Cc(JSON.stringify(s))),d=new py(s,f),p=function(b){var T=pc(),O=$e.useContext(On),C=$e.useRef(T.styleSheet.allocateGSInstance(f)).current;return T.styleSheet.server&&E(C,b,T.styleSheet,O,T.stylis),$e.useLayoutEffect(function(){if(!T.styleSheet.server)return E(C,b,T.styleSheet,O,T.stylis),function(){return d.removeStyles(C,T.styleSheet)}},[C,b,T.styleSheet,O,T.stylis]),null};function E(b,T,O,C,_){if(d.isStatic)d.renderStyles(b,Nb,O,_);else{var L=Yt(Yt({},T),{theme:Up(T,C,p.defaultProps)});d.renderStyles(b,L,O,_)}}return $e.memo(p)}function o4(n){for(var u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];var s=Ao(Ro.apply(void 0,wn([n],u,!1))),f=Cc(s);return new Gp(f,s)}const gy=X.div`
  display: flex;
  width: 100%;
  height: var(--app-vh, 100vh);
  min-height: var(--app-vh, 100vh);
  overflow: hidden;

  background: ${({theme:n})=>n.colors.mainBackground};
`,vy=X.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: ${({theme:n})=>n.colors.mainBackground};
`,my=X.div`
  display: flex;
  flex: 1;
  min-height: 0; 
  min-width: 0;
`,by=X.header`
  position: sticky;
  top: 0;
  z-index: 10;
  flex: 0 0 auto;
  justify-content: space-between;
  align-items: center;
  background: ${({theme:n})=>n.colors.topbarBackground};
  border-bottom: 1px solid ${({theme:n})=>n.colors.borderLight};
  box-sizing: border-box;
`,yy=X.main`
  flex: 1 1 auto;
  min-height: 0; 
  min-width: 0;
  box-sizing: border-box;
  padding: 0; 

  uui-scroll-container {
    display: block;
    width: 100%;
    height: 100%;
  }

  .uui-scroll-container__scroll {
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    scrollbar-width: thin;
    -ms-overflow-style: none;
  }
  .uui-scroll-container__scroll::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .page-slot {
    display: block;
    padding: 1.875rem;
    box-sizing: border-box;
    min-width: 0;
  }
`,Fp=X.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 20px; // NB! According to design it is 30px !!!
`,Wp=X.li`
  width: 100%;
  margin-bottom: 8px;
  text-align: center;
`,Ay=X.span`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.textPrimary};
  white-space: nowrap;
`,xy=X.span`
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  svg {
    width: 1rem;
    height: 1rem;
    transform: ${({$collapsed:n})=>n?"scale(1.5)":"scale(1)"};
    transform-origin: center;
    transition: transform 0.2s ease;
    color: ${({theme:n})=>n.colors.iconNeutral};
  }
`,Pp=X.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 19px;
  min-width: ${({$variant:n})=>n==="soon"?"auto":"19px"};
  padding: ${({$variant:n})=>n==="soon"?"0 6px":"0"};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  border-radius: ${({theme:n})=>n.radii?.badgeSmall??"6px"};
  border: 1px solid
    ${({theme:n,$variant:u})=>u==="soon"?n.colors.pillNeutralBorder:n.colors.statusDanger};
  background: ${({theme:n,$variant:u})=>u==="soon"?n.colors.pillNeutralBg:n.colors.statusDangerContrast};
  color: ${({theme:n,$variant:u})=>u==="soon"?n.colors.pillNeutralText:n.colors.statusDanger};
`,Ip=X.a`
  height: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.5rem 0;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({theme:n})=>n.colors.textPrimary};
  background: ${({$selected:n,theme:u})=>n?u.colors.activeBackground:"transparent"};
  &:hover {
    background: ${({theme:n})=>n.colors.hoverBackground};
  }
  &.active {
    color: ${({theme:n})=>n.colors.textActive};
  }
`,t1=X.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 12px;

  position: sticky;
  top: 50%;
  transform: translateY(-50%);
`,e1=X.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
`,Sy=X.aside`
  position: sticky;
  top: 0;
  height: var(--app-vh, 100vh);
  block-size: var(--app-vh, 100vh);

  width: ${({$collapsed:n})=>n?"64px":"220px"};
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${({theme:n})=>n.colors.sidebarBackground};
  border-right: 1px solid ${({theme:n})=>n.colors.borderLight};
  transition: width 160ms ease-out;
  z-index: 30;
`,Ey=X(e1)`
  padding: ${({$collapsed:n})=>n?"1.25rem 0.5rem":"1.25rem 1.25rem 1.25rem 1.875rem"};
`,wy=Fp,zy=Wp,Ty=t1,By=X(ro)`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: ${({$collapsed:n})=>n?"center":"flex-start"};
  gap: ${({$collapsed:n})=>n?"0":"10px"};
  padding: 0.5rem 0;
  padding-left: ${({$collapsed:n})=>n?"0":"10px"};
  height: 2.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({theme:n,$disabled:u})=>u?n.colors.textDisabled:n.colors.textPrimary};
  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
  transition:
    background 120ms ease-out,
    color 120ms ease-out;

  &:hover {
    background: ${({theme:n,$disabled:u})=>u?"transparent":n.colors.hoverBackground};
  }

  &.active {
    background: ${({theme:n})=>n.colors.activeBackground};
    color: ${({theme:n})=>n.colors.textActive};
  }

  .iconBox {
    width: 24px;
    height: 24px;
    display: grid;
    place-items: center;
    flex: 0 0 24px;
    line-height: 0;
    transform-origin: center;

    svg {
      width: 1rem;
      height: 1rem;
      transform: ${({$collapsed:n})=>n?"scale(1.5)":"scale(1)"};
      color: ${({theme:n,$disabled:u,$collapsed:r})=>u?n.colors.iconDisabled:r?n.colors.collapsedMainIcon:n.colors.iconNeutral};
      transition: none;
      display: block;
      flex-shrink: 0;
      pointer-events: none;
    }
  }

  ${({$collapsed:n,theme:u})=>n&&`
    &:hover .iconBox {
      background: ${u.colors.collapsedIconChipBg};        
      border-radius: 12px;
    }
    &:hover .iconBox svg {
      color: ${u.colors.collapsedMainIconHover};          
    }

    &.active .iconBox {
      background: ${u.colors.collapsedIconChipBg};
      border-radius: 12px;
      box-shadow: inset 0 0 0 1px ${u.colors.btnBorder};
    }
    &.active .iconBox svg {
      color: ${u.colors.collapsedMainIconHover};
    }
  `}

  .labelWrap {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    max-width: ${({$collapsed:n})=>n?"0":"260px"};
    opacity: ${({$collapsed:n})=>n?0:1};
    transition:
      max-width 160ms ease-out,
      opacity 120ms linear;
  }
`;/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Oy=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(u,r,s)=>s?s.toUpperCase():r.toLowerCase()),tp=n=>{const u=Oy(n);return u.charAt(0).toUpperCase()+u.slice(1)},l1=(...n)=>n.filter((u,r,s)=>!!u&&u.trim()!==""&&s.indexOf(u)===r).join(" ").trim(),Dy=n=>{for(const u in n)if(u.startsWith("aria-")||u==="role"||u==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=H.forwardRef(({color:n="currentColor",size:u=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:f="",children:d,iconNode:p,...E},b)=>H.createElement("svg",{ref:b,...Cy,width:u,height:u,stroke:n,strokeWidth:s?Number(r)*24/Number(u):r,className:l1("lucide",f),...!d&&!Dy(E)&&{"aria-hidden":"true"},...E},[...p.map(([T,O])=>H.createElement(T,O)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=(n,u)=>{const r=H.forwardRef(({className:s,...f},d)=>H.createElement(_y,{ref:d,iconNode:u,className:l1(`lucide-${My(tp(n))}`,`lucide-${n}`,s),...f}));return r.displayName=tp(n),r};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],ky=Ne("bell",Uy);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Ry=Ne("building-2",Ny);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],a1=Ne("building",jy);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ly=Ne("chevron-left",Hy);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],n1=Ne("chevron-right",qy);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Vy=Ne("file-text",Qy);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],Gy=Ne("key-round",$y);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Xy=Ne("monitor",Yy);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Ky=Ne("moon",Zy);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Fy=Ne("sun",Jy);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Py=Ne("user",Wy);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]],t2=Ne("wallet-cards",Iy),e2="data:image/png;base64,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",l2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOdSURBVHgBxVjdThNREJ6Z7QbRmNQYEyIkrgkQvaLeeWe5NSrrE0ifAH0C4AmkT0B5ArZovKW8Ad41LYlr0iYkelGvRMuecU6X/rpn225L+ZLC7p7ZM9+ZM2d+FmFMLDiuY80FLihaY4QsAqQh/Gk0mMEHBB9RnQR/LO/c93wYAziq4OLK600AeidvZGEMCMFTBJWvVz8VRpEfSmhh+VWWyNoXQQcmAINYjdXuMGJGQmnHTd+x1TYgvocpQjHv/W7SbsP3GjAqoYUnrkMBHyJCBq4B2lrqL65H+RdGklF8POkWJSVFvTd6m2ZBRkPrIJsPtU4wEdI+MwsyHVLiEvPaT3uftS9axxppH24AqIL12tnnkr7uWIiRtuGGoCSstK9bhLR1zFvFX/VPxhuQEOG7Mg9DyTDuhIG3bSGkLeNsTJv1ylGmVinek7tTGB+n+l09h93Et2YxyQL6rz7m8j863jA06lWvQyKRw3P3HV+CodHSkpJ0niSLwTVORnq7QjhyPLmbREcHQlor6vKT5GsSTQUuMausSUASY2c1F6nkUduyexfSXeQgCGmNEPARmAn5MBUEncXEWUiXMxTnFxK4OhayUoFRblpAhjQl8otJlBL75kEhBDFgxYljT1JQXMBDwqlYT6HV0cEKHaOgHCJSCL+M49yznYGVJCi2YNHlaJaWWpyQuWQcx67D6wCZKH3IqmvlMHFeIWMW5e8k+2JcOTK+6HtB4S6MCUTODzxZM8mKz5YoQPDAOBukl6TIb9/Wz7w9CRY5YXoS63t6TGS0bK1ytNN+vrjiZuLCzNyl5WEouHFsbG8kQ9erxfWoIZ1O4NZA2LiAhm8o4GP1SBKuV4rPUuE1HojmaEGZ4OHqxqHUvx8G698rxUP9Spept23+GNvTMeZDdW32qxvfIMacrZCvuNDEy+KP6peRTtyDlZcZm1MbEj50KxUXQnyxzuM+QkvLbpaJj2FEhB1ptHUkJzkDLfaQyTAnp7jQR6hFauXNHiNuwSzBLG32UacZ7UsdqSbtQLKqMCl8O9QJkYS0k9rUKjN9mAUZaRQHT+R/ydUve76QWr9WUuJ/V2T8wSErSr7xs9y4f/fpgTj5vITa5zBVMpyXbcoJmfOo4aGfYyS6SgPJumdzYDL4cvxztbJXihMa44OVECO1CQP5bSh0ClFUaB/roeIwJhxpm5qBfMoj5UoscnRN3q46dVzS5UyrgpCkbUue1D45zvz/AArwc9RbPm7fAAAAAElFTkSuQmCC",a2=X.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0 0.5rem 1.5rem;
  text-decoration: none;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
  pointer-events: ${({$disabled:n})=>n?"none":"auto"};

  img {
    width: ${({$collapsed:n})=>n?"30px":"36px"};
    height: auto;
    display: block;
  }

  span {
    font-family: 'Nunito Sans', Arial, sans-serif;
    font-size: 1.23rem;
    font-weight: 600;
    color: ${({theme:n})=>n.colors.logoText};
    letter-spacing: 0.05em;
    text-transform: lowercase;
    line-height: 1;
    position: relative;
    top: 1px;
    display: ${({$collapsed:n})=>n?"none":"inline"};
  }
`,i1="umbraco-theme-mode",u1=H.createContext(null);function o1(){const n=H.useContext(u1);if(!n)throw new Error("useThemeMode must be used within ThemeModeProvider");return n}function n2({collapsed:n,disabled:u}){const{effective:r}=o1(),s=n?30:36,f=u?"div":Ep,d=r==="dark"?e2:l2;return x.jsxs(a2,{as:f,to:u?void 0:"/",$collapsed:n,$disabled:u,"aria-disabled":u||void 0,...u?{role:"img",tabIndex:-1}:{},children:[x.jsx("img",{src:d,alt:"Umbraco logo",width:s,height:s,decoding:"async",draggable:!1}),!n&&x.jsx("span",{children:"umbraco"})]})}const i2=X.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 1px solid transparent;
  appearance: none;
  outline: none;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;
  
  background: ${({theme:n})=>n.colors.collapseButtonBackground};
  color: ${({theme:n})=>n.colors.collapseButtonIcon};
  transition:
  background 0.2s,
  box-shadow 0.2s;
  
  cursor: pointer;
  
  &:hover {
    background: ${({theme:n})=>n.colors.collapseButtonHover};
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:focus-visible {
    box-shadow: none;
  }

  svg {
    width: 18px;
    height: 18px;
    pointer-events: none;
  }
`;function r1({collapsed:n,onToggle:u}){return x.jsx(i2,{onClick:u,"aria-label":"Expand sidebar",children:n?x.jsx(n1,{}):x.jsx(Ly,{})})}const u2=X.span`
  position: relative;
  display: block; 
  width: 100%;
`,o2=X.div`
  position: absolute;
  z-index: 1000;
  max-width: 240px;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 12px;
  line-height: 1.2;
  white-space: nowrap;
  background: ${({theme:n})=>n.colors?.tooltipBg??"rgba(17, 24, 39, 0.95)"};
  color: ${({theme:n})=>n.colors?.tooltipText??"#fff"};
  border: 1px solid
    ${({theme:n})=>n.colors?.tooltipBorder??"rgba(255,255,255,0.12)"};
  box-shadow: ${({theme:n})=>n.colors.flyoutShadow};
  pointer-events: none;
  opacity: ${({$visible:n})=>n?1:0};
  transform: ${({$visible:n,$placement:u})=>n?"translate(0,0)":u==="top"?"translateY(4px)":u==="bottom"?"translateY(-4px)":u==="left"?"translateX(4px)":"translateX(-4px)"};
  transition:
    opacity 120ms ease-out,
    transform 120ms ease-out;

  ${({$placement:n})=>n==="top"?"bottom: calc(100% + 8px); left: 50%; transform-origin: bottom center; translate: -50% 0;":n==="bottom"?"top: calc(100% + 8px); left: 50%; transform-origin: top center; translate: -50% 0;":n==="left"?"right: calc(100% + 8px); top: 50%; transform-origin: center right; translate: 0 -50%;":"left: calc(100% + 8px); top: 50%; transform-origin: center left; translate: 0 -50%;"}
`,r2=X.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${({theme:n})=>n.colors?.tooltipBg??"rgba(17, 24, 39, 0.95)"};
  border: 1px solid
    ${({theme:n})=>n.colors?.tooltipBorder??"rgba(255,255,255,0.12)"};
  transform: rotate(45deg);
  ${({$placement:n})=>n==="top"?"top: 100%; left: 50%; translate: -50% -3px; border-top: 0; border-left: 0;":n==="bottom"?"bottom: 100%; left: 50%; translate: -50% 3px; border-bottom: 0; border-right: 0;":n==="left"?"left: 100%; top: 50%; translate: -3px -50%; border-left: 0; border-bottom: 0;":"right: 100%; top: 50%; translate: 3px -50%; border-right: 0; border-top: 0;"}
`;function vc({content:n,children:u,placement:r="right",disabled:s=!1,delay:f=120,gap:d=8,shiftX:p=0,shiftY:E=0}){const[b,T]=H.useState(!1),[O,C]=H.useState({}),_=H.useRef(null),L=H.useId(),U=H.useRef(null),k=()=>{const R=_.current;return R?(R.querySelector("[data-tooltip-anchor]")??R).getBoundingClientRect():null},F=()=>{const R=k();if(!R)return;const Q=pt=>Math.round(pt);switch(r){case"right":C({position:"fixed",top:Q(R.top+R.height/2+E),left:Q(R.right+d+p),transform:"translateY(-50%)"});break;case"left":C({position:"fixed",top:Q(R.top+R.height/2+E),left:Q(R.left-d+p),transform:"translate(-100%, -50%)"});break;case"top":C({position:"fixed",top:Q(R.top-d+E),left:Q(R.left+R.width/2+p),transform:"translate(-50%, -100%)"});break;case"bottom":C({position:"fixed",top:Q(R.bottom+d+E),left:Q(R.left+R.width/2+p),transform:"translate(-50%, 0)"});break}},W=()=>{s||(U.current&&window.clearTimeout(U.current),U.current=window.setTimeout(()=>{F(),T(!0)},f))},V=()=>{U.current&&window.clearTimeout(U.current),T(!1)};return H.useEffect(()=>{if(!b)return;const R=window.visualViewport,Q=()=>F();return window.addEventListener("scroll",Q,{passive:!0}),window.addEventListener("resize",Q,{passive:!0}),R?.addEventListener("resize",Q,{passive:!0}),R?.addEventListener("scroll",Q,{passive:!0}),()=>{window.removeEventListener("scroll",Q),window.removeEventListener("resize",Q),R?.removeEventListener("resize",Q),R?.removeEventListener("scroll",Q)}},[b,r,d,p,E]),x.jsxs(u2,{ref:_,onMouseEnter:W,onMouseLeave:V,onFocus:W,onBlur:V,"aria-describedby":b?L:void 0,children:[u,b&&am.createPortal(x.jsxs(o2,{id:L,role:"tooltip",$placement:r,$visible:b,"aria-hidden":!b,style:O,children:[n,x.jsx(r2,{$placement:r})]}),document.body)]})}const go=16,s2=8,ep=5,mc=15,c2=[{path:"/organization/credits",labelKey:"organization",icon:a1}],f2=[{path:"/",labelKey:"organizations",icon:a1,exact:!0},{path:"/profile",labelKey:"profile",icon:Py}],d2=n=>n==="/"||n==="/profile";function h2(){const{pathname:n}=_n(),{t:u}=xl("menu"),[r,s]=H.useState(!1),f=d2(n)?f2:c2;return x.jsxs(Sy,{$collapsed:r,children:[x.jsxs(Ey,{$collapsed:r,children:[x.jsx(n2,{collapsed:r}),x.jsx(wy,{children:f.map(({path:d,labelKey:p,icon:E,exact:b,badge:T,disabled:O})=>x.jsx(zy,{children:x.jsx(vc,{content:u(p),placement:"right",shiftY:mc,disabled:!r,children:x.jsxs(By,{to:d,end:b,$disabled:O,$collapsed:r,children:[x.jsx("span",{className:"iconBox",children:x.jsx(E,{size:go})}),x.jsx("span",{className:"labelWrap",children:x.jsx("span",{className:"label",children:u(p)})}),!r&&T&&x.jsx(Pp,{children:T})]})})},d))})]}),x.jsx(Ty,{children:x.jsx(r1,{collapsed:r,onToggle:()=>s(d=>!d)})})]})}const p2=X.header`
  // padding: 1.25rem 1.875rem;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`,g2=X.span`
  // margin-left: 0.5rem;
  color: ${({$active:n,theme:u})=>n?u.colors.textPrimary:u.colors.textMuted};
  font-weight: ${({$active:n})=>n?600:400};
  text-decoration: none;

  &[href] {
    cursor: pointer;
  }
  &[href]:hover,
  &[href]:focus-visible {
    color: ${({theme:n})=>n.colors.textPrimary};
    outline: none;
  }
`,v2=X.span`
  margin: 0 0.5rem;
  color: #bbb;
  color: ${({theme:n})=>n.colors.textSubtle};
`,m2=X.nav`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #888;
`,b2=X.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,y2=X.div`
  display: flex;
  align-items: center;
  background: ${({theme:n})=>n.colors.pillBg};
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1;
  color: ${({theme:n})=>n.colors.textPrimary};
  margin-right: 1rem;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 0.4rem;
  }
`,A2=X.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid transparent;
  background: transparent;
  padding: 0;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
    color: ${({theme:n})=>n.colors.textMuted};
  }
`,x2=X.div`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  border-left: 1px solid ${({theme:n})=>n.colors.borderLight};

  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  img {
    border-radius: 8px;
    margin-right: 0.75rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    line-height: 1.2;

    .name {
      font-weight: 600;
      color: ${({theme:n})=>n.colors.textPrimary};
    }

    .email {
      color: ${({theme:n})=>n.colors.textMuted};
      font-size: 0.75rem;
    }
  }

  &:hover .name {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:n})=>n.colors.focusRing};
    outline-offset: 2px;
  }
`,S2=X.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  border: 1px solid transparent;
  background: ${({theme:n})=>n.colors.collapseButtonBackground};
  color: ${({theme:n})=>n.colors.textPrimary};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${({theme:n})=>n.colors.collapseButtonHover};
  }
  &:focus-visible {
    outline: 2px solid ${({theme:n})=>n.colors.focusRing};
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;function E2({items:n}){const{t:u}=xl("common");return x.jsx(m2,{"aria-label":u("breadcrumb"),children:n.map((r,s)=>{const f=s===n.length-1,d=r.active??f,p=d?"span":Ep,E=d?{}:{to:r.to||"#"},b=d?{"aria-current":"page"}:{};return x.jsxs(g2,{as:p,$active:d,className:d?"active":"",...E,...b,children:[r.label,!f&&x.jsx(v2,{"aria-hidden":"true",children:"/"})]},`${r.label}-${s}`)})})}const w2="http://localhost:5000",z2="11111111-1111-1111-1111-111111111111";async function s1(n,u){const r=new Headers(u?.headers);r.set("Accept","application/json");const s=`${w2}${n}`,f=await fetch(s,{...u,headers:r});if(!f.ok){const d=await f.text();throw new Error(`GET ${n} failed: ${f.status} ${d}`)}return f.json()}const Eo={all:["payments"],balance:n=>[...Eo.all,"balance",n],spending:n=>[...Eo.all,"spending",n]};function T2(n){return s1(`/api/v1/partners/${n}/balance`)}function B2(n){return s1(`/api/v1/partners/${n}/spending`)}function M2(n){return Sp({queryKey:Eo.balance(n),queryFn:()=>T2(n)})}function r4(n){return Sp({queryKey:Eo.spending(n),queryFn:()=>B2(n)})}function O2(n){if(n?.length)return n.reduce((u,r)=>{const s=(r.year??0)*12+(r.month??0),f=(u.year??0)*12+(u.month??0);return s>f?r:u},n[0])}const c1=n=>{const u=(n??At.resolvedLanguage??(typeof navigator<"u"?navigator.language:"en")).toLowerCase();return u==="da"||u.startsWith("da-")?"da-DK":u==="en"||u.startsWith("en-")?"en-US":u};function f1(n,u,r={maximumFractionDigits:0}){return typeof n!="number"||!isFinite(n)?"—":new Intl.NumberFormat(c1(u),r).format(n)}function s4(n,u){return typeof n!="number"||!isFinite(n)?"—":`${f1(n,u)} EUR`}function c4(n,u,r){return!n||!u?"—":new Date(Date.UTC(n,u-1,1)).toLocaleDateString(c1(r),{month:"short",year:"numeric"})}const D2=H.memo(function(){const{t:u,i18n:r}=xl("topbar"),{data:s,isLoading:f,isError:d}=M2(z2),p=O2(s?.history),E=p?.currentBalance??0,b=H.useMemo(()=>f1(E,r.resolvedLanguage),[E,r.resolvedLanguage]),T=u("credits",{count:E}),O=d?"—":f&&!p?"…":`${b} ${T}`;return x.jsxs(y2,{"aria-live":"polite","aria-busy":f,children:[x.jsx(t2,{}),x.jsx("span",{children:O})]})}),C2=H.memo(function(){return x.jsx(A2,{role:"button",tabIndex:0,children:x.jsx(ky,{})})}),_2="data:image/jpeg;base64,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",U2=()=>{const{t:n}=xl("topbar"),u=Tc(),r=()=>u("/profile"),s=f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),r())};return x.jsxs(x2,{role:"button",tabIndex:0,onClick:r,onKeyDown:s,"aria-label":n("goToProfile"),children:[x.jsx("img",{src:_2,alt:"User avatar",width:36,height:36}),x.jsxs("div",{className:"info",children:[x.jsx("span",{className:"name",children:"Ana Andreasen"}),x.jsx("span",{className:"email",children:"ana@umbraco.dk"})]})]})},k2=X.button`
  display: inline-flex;
  align-items: center;
  max-height: 36px;

  padding: 10px 15px;
  border-radius: 12px;
  border: 1px solid ${({theme:n})=>n.colors.iconDisabled};
  background: ${({theme:n})=>n.colors.collapseButtonBackground};
  color: ${({theme:n})=>n.colors.textPrimary};
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1;

  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  transition:
    background 160ms ease,
    border-color 160ms ease,
    box-shadow 200ms ease,
    transform 60ms ease;

  &:hover {
    background: ${({theme:n})=>n.colors.collapseButtonHover};
    border-color: ${({theme:n})=>n.colors.borderLight};
  }

  &:active {
    transform: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    outline-offset: 2px;
  }
`,N2=X(S2)`
  gap: 8px;
  font-weight: 700;
  border-radius: 12px;
  border: 1px solid ${({theme:n})=>n.colors.iconDisabled};
  font-family: 'Lato', sans-serif;

  transition:
    background 160ms ease,
    border-color 160ms ease,
    box-shadow 200ms ease,
    transform 60ms ease;

  &:hover {
    border-color: ${({theme:n})=>n.colors.borderLight};
  }

  &:active {
    transform: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    outline-offset: 2px;
  }
`,R2=X.span`
  font-size: 1rem;
  line-height: 1;
`;function j2(){const{t:n}=xl("topbar"),{mode:u,effective:r,toggle:s}=o1(),f=u==="system"?Xy:r==="dark"?Ky:Fy,d=n(u==="system"?"theme.system":r==="dark"?"theme.dark":"theme.light");return x.jsxs(N2,{type:"button",onClick:s,"aria-label":n("theme.system"),children:[x.jsx(f,{width:16,height:16}),x.jsx(R2,{children:d})]})}function H2({isProfilePage:n}){const u=Tc(),{t:r}=xl("topbar");return n?x.jsxs(x.Fragment,{children:[x.jsx(j2,{}),x.jsx(k2,{type:"button",onClick:()=>u("/logout",{replace:!0}),children:x.jsx("span",{children:r("logout")})})]}):x.jsx(U2,{})}function L2({activePage:n,breadcrumbs:u}){const{pathname:r}=_n(),s=r==="/profile",f=localStorage.getItem("userName")||"Ana Andreasen",d=u&&u.length?u.map((p,E,b)=>({label:p.label,to:p.to,active:p.active??E===b.length-1})):[{label:f,active:!1},{label:n??"",active:!0}];return x.jsxs(p2,{children:[x.jsx(E2,{items:d}),x.jsxs("div",{className:"right",children:[!s&&x.jsxs(b2,{children:[x.jsx(D2,{}),x.jsx(C2,{})]}),x.jsx(H2,{isProfilePage:s})]})]})}const q2=X.aside`
  position: sticky;
  top: var(--top-offset, 0px);

  height: calc(var(--app-vh, 100vh) - var(--top-offset, 0px));
  block-size: calc(var(--app-vh, 100vh) - var(--top-offset, 0px));

  width: ${({$collapsed:n})=>n?"56px":"250px"};
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  overflow: visible;
  background: ${({theme:n})=>n.colors.sidebarBackground};
  border-right: 1px solid ${({theme:n})=>n.colors.borderLight};
  transition: width 160ms ease-out;
  z-index: 20;
`,Q2=X(e1)`
  padding: ${({$collapsed:n})=>n?"20px 8px":"20px"};
`,V2=X(Fp)`
  margin-top: 20px;
`,lp=Wp,ap=Ay,$2=Pp,G2=t1,np=X(xy)`
  line-height: 0;
  svg {
    width: 1rem;
    height: 1rem;
    transform: ${({$collapsed:n})=>n?"scale(1.25)":"scale(1)"};
    transform-origin: center;
    transition: none;
    display: block;
    flex-shrink: 0;
    pointer-events: none;
  }
`,Y2=X(Ip)`
  justify-content: ${({$collapsed:n})=>n?"center":"flex-start"};
  gap: ${({$collapsed:n})=>n?"0":"6px"};
  padding-left: ${({$collapsed:n})=>n?"0":"calc(10px + 24px + 10px)"};

  background: ${({theme:n})=>n.colors.sidebarBackground};

  &:hover {
    background: ${({theme:n})=>n.colors.hoverBackground};
  }

  .labelWrap {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    max-width: ${({$collapsed:n})=>n?"0":"260px"};
    opacity: ${({$collapsed:n})=>n?0:1};
    transition:
      max-width 160ms ease-out,
      opacity 120ms linear;
  }
`,X2=X(Ip).attrs({as:"button"})`
  justify-content: ${({$collapsed:n})=>n?"center":"flex-start"};
  gap: ${({$collapsed:n})=>n?"0":"6px"};
  padding-left: ${({$collapsed:n})=>n?"0":"10px"};
  border: none;
  cursor: pointer;
  background: ${({theme:n})=>n.colors.sidebarBackground};

  &:hover {
    background: ${({theme:n})=>n.colors.hoverBackground};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:n})=>n.colors.focusRing};
    outline-offset: -2px;
  }

  .labelWrap {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    max-width: ${({$collapsed:n})=>n?"0":"260px"};
    opacity: ${({$collapsed:n})=>n?0:1};
    transition:
      max-width 160ms ease-out,
      opacity 120ms linear;
  }
`,Z2=X.span`
  width: 24px;
  height: 24px;
  margin-right: ${({$collapsed:n})=>n?"0":"4px"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 16px;
    height: 16px;
    transform: ${({$open:n})=>n?"rotate(90deg)":"rotate(0deg)"};
    transition: none;
    color: ${({theme:n})=>n.colors.iconNeutral};
  }
`,K2=X.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 8px 0 12px;
  pointer-events: ${({$collapsed:n})=>n?"none":"auto"};
  background: ${({theme:n})=>n.colors.sidebarBackground};
`,J2=X.a`
  height: 32px;
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  padding-left: ${({$collapsed:n})=>n?"0":"calc(10px + 24px + 10px + 24px + 6px)"};
  border-radius: 6px;
  text-decoration: none;
  color: ${({theme:n})=>n.colors.textPrimary};
  font-size: 0.8125rem;
  font-weight: 500;

  background: ${({theme:n})=>n.colors.sidebarBackground};

  &:hover {
    background: ${({theme:n,$collapsed:u})=>u?"transparent":n.colors.hoverBackground};
  }
  &.active {
    color: ${({theme:n})=>n.colors.textActive};
    font-weight: 700;
  }
`,F2=X.span`
  position: relative;
  display: flex;
  align-items: center;
  overflow: visible;

  &:hover > div[data-flyout] {
    opacity: 1;
    transform: translateY(-50%) scale(1);
    pointer-events: auto;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    width: 14px;
    height: 320px;
    pointer-events: auto;
  }
`,W2=X.a`
  height: 34px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 8px;
  text-decoration: none;

  color: ${({theme:n})=>n.colors.textPrimary};
  font-size: 0.875rem;
  font-weight: 500;

  &:hover {
    background: ${({theme:n})=>n.colors.hoverBackground};
  }
  &.active {
    color: ${({theme:n})=>n.colors.textActive};
    background: ${({theme:n})=>n.colors.activeBackground};
    font-weight: 700;
  }
`,P2=X.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,I2=X.div`
  --size: 16px;
  --overlap: 1px;
  --halfDiag: calc(var(--size) * 0.6);

  position: absolute;
  top: 50%;
  left: calc(-1 * var(--halfDiag) + var(--overlap));
  transform: translateY(-50%) rotate(-45deg);
  transform-origin: center;
  width: var(--size);
  height: var(--size);
  z-index: 22;
  pointer-events: none;

  box-sizing: border-box;
  background: ${({theme:n})=>n.colors.flyoutBg};
  border-left: 1px solid ${({theme:n})=>n.colors.flyoutBorder};
  border-top: 1px solid ${({theme:n})=>n.colors.flyoutBorder};
  border-right: 0;
  border-bottom: 0;
`,tA=X.div`
  --gap: 8px;

  position: ${({$fixed:n})=>n?"fixed":"absolute"};
  top: ${({$top:n})=>n!=null?`${n}px`:"50%"};
  left: ${({$left:n})=>n!=null?`${n}px`:"calc(100% + var(--gap))"};

  transform: translateY(-50%) scale(${({$open:n})=>n?1:.98});
  opacity: ${({$open:n})=>n?1:0};
  pointer-events: ${({$open:n})=>n?"auto":"none"};

  transition:
    opacity 120ms ease-out,
    transform 120ms ease-out;

  z-index: 1000;

  min-width: 220px;
  max-width: 280px;
  padding: 8px 10px;
  border-radius: 12px;

  background: ${({theme:n})=>n.colors.flyoutBg};
  color: ${({theme:n})=>n.colors.flyoutText};
  border: 1px solid ${({theme:n})=>n.colors.flyoutBorder};
  box-shadow: ${({theme:n})=>n.colors.flyoutShadow};
  overflow: visible;
`,eA=X.span`
  display: inline-flex;
  align-items: stretch;
  width: 100%;
`;function ip(n){return n.startsWith("/organization/credits")?"credits":n.startsWith("/organization/company")?"company":n.startsWith("/organization/access")?"access":null}function lA(){const{pathname:n}=_n(),[u,r]=H.useState(null);H.useEffect(()=>{const d=ip(n);r(d==="access"?"access":null)},[n]);const s=H.useMemo(()=>ip(n),[n]);return{isOrg:n.startsWith("/organization"),open:u,setOpen:r,mainActive:s}}function aA(n,u=8){const[r,s]=H.useState(!1),[f,d]=H.useState({top:0,left:0}),p=H.useCallback(()=>{const T=n.current?.getBoundingClientRect();T&&d({top:Math.round(T.top+T.height/2),left:Math.round(T.right+u)})},[n,u]),E=H.useCallback(()=>{p(),s(!0)},[p]),b=H.useCallback(()=>s(!1),[]);return H.useEffect(()=>{if(!r)return;const T=window.visualViewport,O=()=>p();return window.addEventListener("scroll",O,{passive:!0}),window.addEventListener("resize",O,{passive:!0}),T?.addEventListener("resize",O,{passive:!0}),T?.addEventListener("scroll",O,{passive:!0}),()=>{window.removeEventListener("scroll",O),window.removeEventListener("resize",O),T?.removeEventListener("resize",O),T?.removeEventListener("scroll",O)}},[r,p]),{open:r,coords:f,show:E,hide:b,measure:p}}function nA(n=!1){const[u,r]=H.useState(n),s=H.useCallback(()=>r(f=>!f),[]);return{value:u,setValue:r,toggle:s}}const iA=[{key:"credits",labelKey:"credits",to:"/organization/credits",icon:Vy},{key:"company",labelKey:"company",to:"/organization/company",icon:Ry},{key:"access",labelKey:"access",icon:Gy,children:[{to:"/organization/access/users",labelKey:"users"},{to:"/organization/access/roles",labelKey:"roles"},{to:"/organization/access/settings",labelKey:"settings"}]}],uA=n=>n.key!=="access";function oA(){const{t:n}=xl("menu"),{isOrg:u,open:r,setOpen:s,mainActive:f}=lA(),{value:d,toggle:p}=nA(!1),E=H.useRef(null),b=aA(E,s2),T=()=>s(U=>U==="access"?null:"access"),O=()=>{b.open||b.show()},C=U=>{U.relatedTarget?.closest?.("[data-flyout]")||b.hide()},_=U=>{const k=f===U.key,F=x.jsxs(Y2,{as:ro,to:U.to,$selected:k,$collapsed:d,children:[x.jsx(np,{"data-tooltip-anchor":!0,$collapsed:d,children:x.jsx(U.icon,{size:go})}),x.jsx("span",{className:"labelWrap",children:x.jsx(ap,{children:n(U.labelKey)})}),U.badge&&!d?x.jsx($2,{children:U.badge}):null]});return x.jsx(lp,{children:d?x.jsx(vc,{content:n(U.labelKey),placement:"right",shiftX:ep,shiftY:mc,children:F}):F},U.key)},L=U=>{const k=r==="access",F=f==="access"||k,W=x.jsxs(X2,{type:"button",$selected:F,$collapsed:d,"aria-expanded":!d&&k,"aria-haspopup":d?"menu":void 0,onClick:d?void 0:T,children:[!d&&x.jsx(Z2,{$open:k,$collapsed:d,children:x.jsx(n1,{size:go})}),x.jsx(np,{"data-tooltip-anchor":!0,$collapsed:d,children:x.jsx(U.icon,{size:go})}),x.jsx("span",{className:"labelWrap",children:x.jsx(ap,{children:n(U.labelKey)})})]});return x.jsxs(H.Fragment,{children:[x.jsx(lp,{children:d?x.jsxs(F2,{onMouseEnter:O,onMouseLeave:C,children:[x.jsx(vc,{content:n(U.labelKey),placement:"right",shiftX:ep,shiftY:mc,children:x.jsx(eA,{ref:E,children:W})}),x.jsxs(tA,{"data-flyout":!0,$fixed:!0,$top:b.coords.top,$left:b.coords.left,$open:b.open,onMouseEnter:b.show,onMouseLeave:b.hide,children:[x.jsx(I2,{}),x.jsx(P2,{children:U.children.map(V=>x.jsx(W2,{as:ro,to:V.to,className:({isActive:R})=>R?"active":void 0,children:n(V.labelKey)},V.to))})]})]}):W}),!d&&k&&x.jsx(K2,{"aria-label":"Access & Permissions",children:U.children.map(V=>x.jsx(J2,{as:ro,to:V.to,className:({isActive:R})=>R?"active":void 0,children:n(V.labelKey)},V.to))})]},U.key)};return u?x.jsxs(q2,{$collapsed:d,children:[x.jsx(Q2,{$collapsed:d,children:x.jsx(V2,{children:iA.map(U=>uA(U)?_(U):L(U))})}),x.jsx(G2,{children:x.jsx(r1,{collapsed:d,onToggle:p})})]}):null}function rA(n){switch(n){case"users":return At.t("menu:users");case"roles":return At.t("menu:roles");case"settings":return At.t("menu:settings");default:return}}function sA(n){switch(n){case"credits":return At.t("menu:credits");case"company":return At.t("menu:company");case"access":return At.t("menu:access");default:return}}function cA(n){const u=(n.split("/")[1]||"").toLowerCase();return n.startsWith("/organization")||u==="dashboard"||u==="projects"||u==="project-builder"||u==="marketing"}function fA(n){return n.startsWith("/organization")}function dA(n,u){const r=n.replace(/\/+$/,"")||"/",s=r.split("/"),f=(s[1]||"").toLowerCase(),d=(s[2]||"").toLowerCase(),p=(s[3]||"").toLowerCase(),E=(typeof window<"u"?window.localStorage.getItem("userName"):null)||"Ana Andreasen";if(r==="/"||r==="/profile")return[{label:E,to:"/profile"},{label:At.t("menu:organizations"),active:!0}];if(r.startsWith("/organization/access")){const b=rA(p);return b?[{label:"Toxic",to:"/"},{label:At.t("menu:organization"),to:"/organization"},{label:At.t("menu:access"),to:"/organization/access"},{label:b,active:!0}]:[{label:"Toxic",to:"/"},{label:At.t("menu:organization"),to:"/organization"},{label:At.t("menu:access"),active:!0}]}if(r.startsWith("/organization")){const b=d||"credits",T=sA(b)??At.t("menu:credits"),O=b==="credits"?"/organization/credits":`/organization/${b}`;return[{label:"Toxic",to:"/"},{label:At.t("menu:organization"),to:"/organization"},{label:T,active:!0,to:O}]}if(cA(r)){let b=At.t("menu:dashboard"),T="/dashboard";switch(f){case"projects":b=At.t("menu:projects"),T="/projects";break;case"project-builder":b=At.t("menu:projectBuilder"),T="/project-builder";break;case"marketing":b=At.t("menu:marketing"),T="/marketing";break}return[{label:"Toxic",to:"/"},{label:b,active:!0,to:T}]}return[{label:"Toxic",active:!0,to:"/"}]}function hA(n){const u="/"+(n.split("/")[1]||"");return{"/":At.t("menu:organizations"),"/dashboard":At.t("menu:dashboard"),"/projects":At.t("menu:projects"),"/project-builder":At.t("menu:projectBuilder"),"/organization":At.t("menu:organization"),"/marketing":At.t("menu:marketing")}[u]||""}function pA(n,u=!0){H.useLayoutEffect(()=>{if(!u)return;const r=n.current;if(!r)return;const s=()=>{const p=r.getBoundingClientRect().height||0,E=window.visualViewport?.height??document.documentElement.clientHeight,b=document.documentElement;b.style.setProperty("--top-offset",`${p}px`),b.style.setProperty("--app-vh",`${E}px`)};s();const f=new ResizeObserver(s);f.observe(r);const d=window.visualViewport;return window.addEventListener("resize",s,{passive:!0}),d?.addEventListener("resize",s,{passive:!0}),d?.addEventListener("scroll",s,{passive:!0}),()=>{f.disconnect(),window.removeEventListener("resize",s),d?.removeEventListener("resize",s),d?.removeEventListener("scroll",s)}},[u,n])}function gA({description:n,robots:u,canonical:r}){return H.useEffect(()=>{const s=(d,p)=>{if(!p)return;let E=document.querySelector(`meta[name="${d}"]`);E||(E=document.createElement("meta"),E.name=d,document.head.appendChild(E)),E.content=p},f=(d,p)=>{if(!p)return;let E=document.querySelector(`link[rel="${d}"]`);E||(E=document.createElement("link"),E.rel=d,document.head.appendChild(E)),E.href=p};s("description",n),s("robots",u),f("canonical",r)},[n,u,r]),null}function vA({children:n}){const{pathname:u}=_n(),r=u==="/login",s=dA(u),f=hA(u),d=H.useRef(null);return pA(d,!r),r?x.jsx(x.Fragment,{children:n}):x.jsxs(x.Fragment,{children:[x.jsx(gA,{robots:"noindex,nofollow"}),x.jsxs(gy,{children:[x.jsx(h2,{}),x.jsxs(vy,{children:[x.jsx(by,{ref:d,children:x.jsx(L2,{activePage:f,breadcrumbs:s})}),x.jsxs(my,{children:[fA(u)&&x.jsx(oA,{}),x.jsx(yy,{children:x.jsx("uui-scroll-container",{orientation:"vertical",children:x.jsx("div",{className:"page-slot",slot:"",children:n})})})]})]})]})]})}function mA(n){H.useEffect(()=>{const u=document.head;let r=u.querySelector('meta[name="robots"]');r||(r=document.createElement("meta"),r.setAttribute("name","robots"),u.appendChild(r));const s=r.getAttribute("content")??"index,follow";return r.setAttribute("content",n),()=>r&&r.setAttribute("content",s)},[n])}function d1(){return localStorage.getItem("isAuthed")==="true"}function bA({children:n}){return mA("noindex,nofollow"),x.jsx(x.Fragment,{children:n})}function yl({children:n}){return d1()?x.jsx(bA,{children:n}):x.jsx(Bc,{to:"/login",replace:!0})}function yA({children:n}){return d1()?x.jsx(Bc,{to:"/",replace:!0}):x.jsx(x.Fragment,{children:n})}const AA=H.lazy(()=>tl(()=>import("./OrganizationsPage-Do5-jPZE.js"),__vite__mapDeps([0,1,2,3]))),xA=H.lazy(()=>tl(()=>import("./CreditsPage-Bwy9BWTM.js").then(n=>n.c),__vite__mapDeps([4,1,2,5]))),SA=H.lazy(()=>tl(()=>import("./LoginPage-BB9ntQNG.js"),__vite__mapDeps([6,1,2,5,3]))),EA=H.lazy(()=>tl(()=>import("./LogoutPage-_s_u5zBw.js"),__vite__mapDeps([7,1,2,3]))),wA=H.lazy(()=>tl(()=>import("./ProfilePage-DfXDfeiI.js"),__vite__mapDeps([8,1,2,3]))),zA=H.lazy(()=>tl(()=>import("./CompanyPage-BRub7B0F.js"),__vite__mapDeps([9,1,2]))),TA=H.lazy(()=>tl(()=>import("./AccessUsersPage-Cf6cLfn0.js"),__vite__mapDeps([10,1,2]))),BA=H.lazy(()=>tl(()=>import("./AccessRolesPage-DenT9ZXN.js"),__vite__mapDeps([11,1,2]))),MA=H.lazy(()=>tl(()=>import("./AccessSettingsPage-Ddz0rIHU.js"),__vite__mapDeps([12,1,2])));function OA(){const{t:n}=xl("common");return x.jsxs(nm,{children:[x.jsx(Ve,{path:"/login",element:x.jsx(yA,{children:x.jsx(SA,{})})}),x.jsx(Ve,{path:"/logout",element:x.jsx(EA,{})}),x.jsx(Ve,{path:"/",element:x.jsx(yl,{children:x.jsx(AA,{})})}),x.jsx(Ve,{path:"/profile",element:x.jsx(yl,{children:x.jsx(wA,{})})}),x.jsx(Ve,{path:"/organization",element:x.jsx(yl,{children:x.jsx(Bc,{to:"/organization/credits",replace:!0})})}),x.jsx(Ve,{path:"/organization/credits",element:x.jsx(yl,{children:x.jsx(xA,{})})}),x.jsx(Ve,{path:"/organization/company",element:x.jsx(yl,{children:x.jsx(zA,{})})}),x.jsx(Ve,{path:"/organization/access/users",element:x.jsx(yl,{children:x.jsx(TA,{})})}),x.jsx(Ve,{path:"/organization/access/roles",element:x.jsx(yl,{children:x.jsx(BA,{})})}),x.jsx(Ve,{path:"/organization/access/settings",element:x.jsx(yl,{children:x.jsx(MA,{})})}),x.jsx(Ve,{path:"*",element:x.jsx(yl,{children:x.jsx(x.Fragment,{children:x.jsxs("div",{style:{padding:"1rem"},children:[x.jsx("h2",{children:n("notFoundTitle")}),x.jsx("p",{children:n("notFoundBody")})]})})})})]})}function DA(n={}){const{cleanUrl:u=!0}=n,{search:r,pathname:s}=_n(),f=Tc();H.useEffect(()=>{const d=new URLSearchParams(r),p=d.get("lang")||d.get("lng");p&&(At.language!==p&&At.changeLanguage(p),u&&(d.delete("lang"),d.delete("lng"),f({pathname:s,search:d.toString()?`?${d}`:""},{replace:!0})))},[r,s,f])}function CA(){const{pathname:n}=_n(),{t:u}=xl(["common","menu"]),r=H.useMemo(()=>({"/":u("organizations",{ns:"common"}),"/organization/credits":u("credits",{ns:"menu"}),"/organization/company":u("company",{ns:"menu"}),"/organization/access/users":u("users",{ns:"menu"}),"/organization/access/roles":u("roles",{ns:"menu"}),"/organization/access/settings":u("settings",{ns:"menu"}),"/profile":u("profile",{ns:"menu"})})[n]??u("notFoundTitle",{ns:"common"}),[n,u]);return H.useEffect(()=>{document.title=`${r} – Umbraco`},[r]),null}function _A(){return H.useEffect(()=>{document.documentElement.setAttribute("data-mounted","true")},[]),DA(),x.jsxs(vA,{children:[x.jsx(CA,{}),x.jsx(OA,{})]})}var h1=function(n,u){return Object.defineProperty?Object.defineProperty(n,"raw",{value:u}):n.raw=u,n},p1=Ro(up||(up=h1([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));Jp(op||(op=h1(["",""],["",""])),p1);var up,op;const UA=Jp`
  ${p1}

  *, *::before, *::after { box-sizing: border-box; }

  :root { font-size: 1rem; }

  html, body, #root { height: 100%;}

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    line-height: 1.25;
    background: ${({theme:n})=>n.colors.mainBackground};
    overflow: hidden; 
  }

  body {
    font-family: 'Lato', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({theme:n})=>n.colors.textPrimary};
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: ${({theme:n})=>n.colors.textPrimary};
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: ${({theme:n})=>n.colors.textPrimary};
  }
`,ye=["599px","768px","1024px","1440px","1800px","2400px"],bc={mode:"light",borderRadius:"4px",boxShadow:"0 2px 4px 0 rgba(0, 0, 0, 0.5)",radii:{badgeSmall:"6px"},colors:{appBackground:"#f5f5f5",mainBackground:"#ffffff",pageBackground:"#ffffff",topbarBackground:"#ffffff",sidebarBackground:"#ffffff",textPrimary:"#272727",textActive:"#1a1a1a",textDisabled:"#bbb",textMuted:"#888",textSubtle:"#bbb",textWhite:"#ffffff",logoText:"#1b2559",brandBlue:"#1b2559",icon:"#5E6571",iconActive:"#1a1a1a",iconDisabled:"#ccc",iconNeutral:"#5E6571",otherIcons:"#818FA2",borderLight:"#e6e6e6",borderDark:"#333333",btnBorder:"#e1e7f0",hoverBackground:"#f3f3f5",activeBackground:"#fff5f5",focusRing:"rgba(27,37,89,.28)",collapseButtonBackground:"#f8f8f8",collapseButtonHover:"#ffeaea",collapseButtonIcon:"#1b2559",collapseButtonFocus:"rgba(27,37,89,.28)",collapseButtonBackgroundDark:"#2a2a2a",collapseButtonHoverDark:"#444",collapseButtonIconDark:"#fff",collapseButtonFocusDark:"rgba(255,255,255,.25)",collapsedMainIcon:"#1b2559",collapsedMainIconHover:"#1b2559",collapsedIconChipBg:"#E9EDF8",flyoutBg:"#f7f8fa",flyoutText:"#1b2559",flyoutBorder:"#e1e4ea",flyoutShadow:"0 4px 12px rgba(0,0,0,.08)",pillBg:"#f2f3f7",pillNeutralBg:"#F1F2F4",pillNeutralBorder:"#DDE1E1",pillNeutralText:"#777",statusDanger:"#D22D56",statusDangerContrast:"#FCE8EA",tooltipBg:"rgba(11, 29, 67, 0.98)",tooltipText:"#FFFFFF",tooltipBorder:"rgba(255,255,255,0.12)",tooltipShadow:"0 4px 12px rgba(0,0,0,.08)",inputBackground:"#ffffff",inputColor:"#272727",tableHeadBackground:"#F6F8FB",tableCellBackground:"#FFFFFF",tableColor:"#272727",tableHeadColor:"#5e6a97",primaryButtonColor:"#1b2559",primaryButtonHover:"#1f3085",secondaryButtonColor:"#f8f8f8",secondaryButtonHover:"#ffeaea",dangerBgHover:"#B91F48",outlineHoverBg:"#E9EDF8",ghostHoverBg:"#edeeee",paginationBackground:"#ffffff",paginationColor:"#272727",paginationActiveBackground:"#f2f3f7",paginationActiveColor:"#1b2559",paginationActiveShadowColor:"#e6e6e6",paginationActiveHoverBackground:"#edeeee",paginationActiveHoverColor:"#272727",chart:{grid:"#E9EDF6",axis:"#7A8194",areaTop:"rgba(30, 42, 116, 0.25)",areaBottom:"rgba(30, 42, 116, 0.04)",lineActual:"#24357C",lineForecast:"#24357C",dash:"8 8",badgeGold:"#CA9B2C",badgeSilver:"#7F8386",tooltipBg:"#FFFFFF",tooltipText:"#1F2A37",tooltipBorder:"#E6E9F2",badgeText:"#FFFFFF"},skeleton:{base:"#E3E8F1",highlight:"#F7F9FD"}},breakpoints:ye,mediaQueries:{phone:`@media screen and (max-width: ${ye[0]})`,miniTablet:`@media screen and (min-width: ${ye[0]}) and (max-width: ${ye[1]})`,tablet:`@media screen and (min-width: ${ye[1]}) and (max-width: ${ye[2]})`,laptop:`@media screen and (min-width: ${ye[2]}) and (max-width: ${ye[3]})`,desktop:`@media screen and (min-width: ${ye[3]}) and (max-width: ${ye[4]})`,wide:`@media screen and (min-width: ${ye[4]}) and (max-width: ${ye[5]})`,ultraWide:`@media screen and (min-width: ${ye[5]})`}},kA={...bc,mode:"dark",colors:{...bc.colors,appBackground:"#383B43",mainBackground:"#383B43",pageBackground:"#383B43",topbarBackground:"#23262D",sidebarBackground:"#23262D",textPrimary:"#e8eaed",textActive:"#ffffff",textDisabled:"#7a7f88",textMuted:"#bdc1c6",textSubtle:"#9aa0a6",textWhite:"#ffffff",logoText:"#ffffff",brandBlue:"#1b2559",icon:"#bdc1c6",iconActive:"#ffffff",iconDisabled:"#5f6368",iconNeutral:"#bdc1c6",borderLight:"#4A4E59",borderDark:"#5f6368",btnBorder:"#4A566F",hoverBackground:"#40444D",activeBackground:"rgba(138,180,248,.12)",focusRing:"rgba(138,180,248,.35)",collapseButtonBackground:"#3B475E",collapseButtonHover:"#475372",collapseButtonIcon:"#FFFFFF",collapseButtonFocus:"rgba(138,180,248,.35)",collapsedMainIcon:"#bdc6f0",collapsedMainIconHover:"#FFFFFF",collapsedIconChipBg:"#3B475E",flyoutBg:"#2B2F36",flyoutText:"#FFFFFF",flyoutBorder:"#3D4450",flyoutShadow:"0 12px 28px rgba(0,0,0,.30)",pillBg:"#3F444C",statusDanger:"#D22D56",statusDangerContrast:"rgba(210,45,86,0.10)",tooltipBg:"#2B2F36",tooltipText:"#FFFFFF",tooltipBorder:"#3D4450",tooltipShadow:"0 12px 28px rgba(0,0,0,.30)",inputBackground:"#edf5ff",inputColor:"#3D4450",tableHeadBackground:"#2B2F36",tableCellBackground:"#2B2F36",tableColor:"#d1d1d1",tableHeadColor:"#a7b1d7",primaryButtonColor:"#3b475e",primaryButtonHover:"#4a5873",secondaryButtonColor:"#f8f8f8",secondaryButtonHover:"#5d5d6d",dangerBgHover:"#E03A63",outlineHoverBg:"#3B475E",ghostHoverBg:"#40444D",paginationBackground:"#3b475e",paginationColor:"#848aab",paginationActiveBackground:"#4a5873",paginationActiveColor:"#ffffff",paginationActiveShadowColor:"#6f7cbb",paginationActiveHoverBackground:"#4a5873",paginationActiveHoverColor:"#FFFFFF",chart:{grid:"#4A4E59",axis:"#bdc1c6",areaTop:"rgba(138, 180, 248, 0.18)",areaBottom:"rgba(138, 180, 248, 0.06)",lineActual:"#aa6ed8",lineForecast:"#d9a7ff",dash:"8 8",badgeGold:"#E7B53A",badgeSilver:"#aab3bc",tooltipBg:"#2B2F36",tooltipText:"#FFFFFF",tooltipBorder:"#3D4450",badgeText:"#1F2A37"},skeleton:{base:"#40444D",highlight:"#4A4F59"}}};function NA(){return window.matchMedia?.("(prefers-color-scheme: dark)").matches??!1}function RA(){const n=localStorage.getItem(i1);return n==="light"||n==="dark"||n==="system"?n:"system"}function jA({children:n}){const[u,r]=H.useState(RA),[s,f]=H.useState(NA()),d=u==="system"?s?"dark":"light":u;H.useEffect(()=>{const b=window.matchMedia("(prefers-color-scheme: dark)"),T=O=>f(O.matches);return b.addEventListener("change",T),()=>b.removeEventListener("change",T)},[]),H.useEffect(()=>{localStorage.setItem(i1,u),document.documentElement.setAttribute("data-theme",d)},[u,d]),H.useEffect(()=>{const b=document.getElementById("app-favicon");b&&(b.href=d==="dark"?"/favicon_light.ico":"/favicon_dark.ico")},[d]);const p=d==="dark"?kA:bc,E=H.useMemo(()=>({mode:u,setMode:r,toggle:()=>r(b=>b==="dark"?"light":b==="light"?"dark":s?"light":"dark"),effective:d}),[u,s,d]);return x.jsx(u1.Provider,{value:E,children:x.jsx(dy,{theme:p,children:n})})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vo=globalThis,kc=vo.ShadowRoot&&(vo.ShadyCSS===void 0||vo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nc=Symbol(),rp=new WeakMap;let g1=class{constructor(u,r,s){if(this._$cssResult$=!0,s!==Nc)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=u,this.t=r}get styleSheet(){let u=this.o;const r=this.t;if(kc&&u===void 0){const s=r!==void 0&&r.length===1;s&&(u=rp.get(r)),u===void 0&&((this.o=u=new CSSStyleSheet).replaceSync(this.cssText),s&&rp.set(r,u))}return u}toString(){return this.cssText}};const $i=n=>new g1(typeof n=="string"?n:n+"",void 0,Nc),Re=(n,...u)=>{const r=n.length===1?n[0]:u.reduce(((s,f,d)=>s+(p=>{if(p._$cssResult$===!0)return p.cssText;if(typeof p=="number")return p;throw Error("Value passed to 'css' function must be a 'css' function result: "+p+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(f)+n[d+1]),n[0]);return new g1(r,n,Nc)},HA=(n,u)=>{if(kc)n.adoptedStyleSheets=u.map((r=>r instanceof CSSStyleSheet?r:r.styleSheet));else for(const r of u){const s=document.createElement("style"),f=vo.litNonce;f!==void 0&&s.setAttribute("nonce",f),s.textContent=r.cssText,n.appendChild(s)}},sp=kc?n=>n:n=>n instanceof CSSStyleSheet?(u=>{let r="";for(const s of u.cssRules)r+=s.cssText;return $i(r)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:LA,defineProperty:qA,getOwnPropertyDescriptor:QA,getOwnPropertyNames:VA,getOwnPropertySymbols:$A,getPrototypeOf:GA}=Object,Pl=globalThis,cp=Pl.trustedTypes,YA=cp?cp.emptyScript:"",XA=Pl.reactiveElementPolyfillSupport,Ni=(n,u)=>n,wo={toAttribute(n,u){switch(u){case Boolean:n=n?YA:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,u){let r=n;switch(u){case Boolean:r=n!==null;break;case Number:r=n===null?null:Number(n);break;case Object:case Array:try{r=JSON.parse(n)}catch{r=null}}return r}},Rc=(n,u)=>!LA(n,u),fp={attribute:!0,type:String,converter:wo,reflect:!1,useDefault:!1,hasChanged:Rc};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Pl.litPropertyMetadata??(Pl.litPropertyMetadata=new WeakMap);let Sn=class extends HTMLElement{static addInitializer(u){this._$Ei(),(this.l??(this.l=[])).push(u)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(u,r=fp){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(u)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(u,r),!r.noAccessor){const s=Symbol(),f=this.getPropertyDescriptor(u,s,r);f!==void 0&&qA(this.prototype,u,f)}}static getPropertyDescriptor(u,r,s){const{get:f,set:d}=QA(this.prototype,u)??{get(){return this[r]},set(p){this[r]=p}};return{get:f,set(p){const E=f?.call(this);d?.call(this,p),this.requestUpdate(u,E,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(u){return this.elementProperties.get(u)??fp}static _$Ei(){if(this.hasOwnProperty(Ni("elementProperties")))return;const u=GA(this);u.finalize(),u.l!==void 0&&(this.l=[...u.l]),this.elementProperties=new Map(u.elementProperties)}static finalize(){if(this.hasOwnProperty(Ni("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ni("properties"))){const r=this.properties,s=[...VA(r),...$A(r)];for(const f of s)this.createProperty(f,r[f])}const u=this[Symbol.metadata];if(u!==null){const r=litPropertyMetadata.get(u);if(r!==void 0)for(const[s,f]of r)this.elementProperties.set(s,f)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const f=this._$Eu(r,s);f!==void 0&&this._$Eh.set(f,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(u){const r=[];if(Array.isArray(u)){const s=new Set(u.flat(1/0).reverse());for(const f of s)r.unshift(sp(f))}else u!==void 0&&r.push(sp(u));return r}static _$Eu(u,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof u=="string"?u.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((u=>this.enableUpdating=u)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((u=>u(this)))}addController(u){(this._$EO??(this._$EO=new Set)).add(u),this.renderRoot!==void 0&&this.isConnected&&u.hostConnected?.()}removeController(u){this._$EO?.delete(u)}_$E_(){const u=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(u.set(s,this[s]),delete this[s]);u.size>0&&(this._$Ep=u)}createRenderRoot(){const u=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return HA(u,this.constructor.elementStyles),u}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach((u=>u.hostConnected?.()))}enableUpdating(u){}disconnectedCallback(){this._$EO?.forEach((u=>u.hostDisconnected?.()))}attributeChangedCallback(u,r,s){this._$AK(u,s)}_$ET(u,r){const s=this.constructor.elementProperties.get(u),f=this.constructor._$Eu(u,s);if(f!==void 0&&s.reflect===!0){const d=(s.converter?.toAttribute!==void 0?s.converter:wo).toAttribute(r,s.type);this._$Em=u,d==null?this.removeAttribute(f):this.setAttribute(f,d),this._$Em=null}}_$AK(u,r){const s=this.constructor,f=s._$Eh.get(u);if(f!==void 0&&this._$Em!==f){const d=s.getPropertyOptions(f),p=typeof d.converter=="function"?{fromAttribute:d.converter}:d.converter?.fromAttribute!==void 0?d.converter:wo;this._$Em=f;const E=p.fromAttribute(r,d.type);this[f]=E??this._$Ej?.get(f)??E,this._$Em=null}}requestUpdate(u,r,s){if(u!==void 0){const f=this.constructor,d=this[u];if(s??(s=f.getPropertyOptions(u)),!((s.hasChanged??Rc)(d,r)||s.useDefault&&s.reflect&&d===this._$Ej?.get(u)&&!this.hasAttribute(f._$Eu(u,s))))return;this.C(u,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(u,r,{useDefault:s,reflect:f,wrapped:d},p){s&&!(this._$Ej??(this._$Ej=new Map)).has(u)&&(this._$Ej.set(u,p??r??this[u]),d!==!0||p!==void 0)||(this._$AL.has(u)||(this.hasUpdated||s||(r=void 0),this._$AL.set(u,r)),f===!0&&this._$Em!==u&&(this._$Eq??(this._$Eq=new Set)).add(u))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const u=this.scheduleUpdate();return u!=null&&await u,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[f,d]of this._$Ep)this[f]=d;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[f,d]of s){const{wrapped:p}=d,E=this[f];p!==!0||this._$AL.has(f)||E===void 0||this.C(f,void 0,d,E)}}let u=!1;const r=this._$AL;try{u=this.shouldUpdate(r),u?(this.willUpdate(r),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(r)):this._$EM()}catch(s){throw u=!1,this._$EM(),s}u&&this._$AE(r)}willUpdate(u){}_$AE(u){this._$EO?.forEach((r=>r.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(u)),this.updated(u)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(u){return!0}update(u){this._$Eq&&(this._$Eq=this._$Eq.forEach((r=>this._$ET(r,this[r])))),this._$EM()}updated(u){}firstUpdated(u){}};Sn.elementStyles=[],Sn.shadowRootOptions={mode:"open"},Sn[Ni("elementProperties")]=new Map,Sn[Ni("finalized")]=new Map,XA?.({ReactiveElement:Sn}),(Pl.reactiveElementVersions??(Pl.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ri=globalThis,zo=Ri.trustedTypes,dp=zo?zo.createPolicy("lit-html",{createHTML:n=>n}):void 0,v1="$lit$",Fl=`lit$${Math.random().toFixed(9).slice(2)}$`,m1="?"+Fl,ZA=`<${m1}>`,Da=document,qi=()=>Da.createComment(""),Qi=n=>n===null||typeof n!="object"&&typeof n!="function",jc=Array.isArray,KA=n=>jc(n)||typeof n?.[Symbol.iterator]=="function",uc=`[ 	
\f\r]`,_i=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hp=/-->/g,pp=/>/g,xa=RegExp(`>|${uc}(?:([^\\s"'>=/]+)(${uc}*=${uc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gp=/'/g,vp=/"/g,b1=/^(?:script|style|textarea|title)$/i,y1=n=>(u,...r)=>({_$litType$:n,strings:u,values:r}),Ot=y1(1),st=y1(2),Dn=Symbol.for("lit-noChange"),Rt=Symbol.for("lit-nothing"),mp=new WeakMap,wa=Da.createTreeWalker(Da,129);function A1(n,u){if(!jc(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return dp!==void 0?dp.createHTML(u):u}const JA=(n,u)=>{const r=n.length-1,s=[];let f,d=u===2?"<svg>":u===3?"<math>":"",p=_i;for(let E=0;E<r;E++){const b=n[E];let T,O,C=-1,_=0;for(;_<b.length&&(p.lastIndex=_,O=p.exec(b),O!==null);)_=p.lastIndex,p===_i?O[1]==="!--"?p=hp:O[1]!==void 0?p=pp:O[2]!==void 0?(b1.test(O[2])&&(f=RegExp("</"+O[2],"g")),p=xa):O[3]!==void 0&&(p=xa):p===xa?O[0]===">"?(p=f??_i,C=-1):O[1]===void 0?C=-2:(C=p.lastIndex-O[2].length,T=O[1],p=O[3]===void 0?xa:O[3]==='"'?vp:gp):p===vp||p===gp?p=xa:p===hp||p===pp?p=_i:(p=xa,f=void 0);const L=p===xa&&n[E+1].startsWith("/>")?" ":"";d+=p===_i?b+ZA:C>=0?(s.push(T),b.slice(0,C)+v1+b.slice(C)+Fl+L):b+Fl+(C===-2?E:L)}return[A1(n,d+(n[r]||"<?>")+(u===2?"</svg>":u===3?"</math>":"")),s]};class Vi{constructor({strings:u,_$litType$:r},s){let f;this.parts=[];let d=0,p=0;const E=u.length-1,b=this.parts,[T,O]=JA(u,r);if(this.el=Vi.createElement(T,s),wa.currentNode=this.el.content,r===2||r===3){const C=this.el.content.firstChild;C.replaceWith(...C.childNodes)}for(;(f=wa.nextNode())!==null&&b.length<E;){if(f.nodeType===1){if(f.hasAttributes())for(const C of f.getAttributeNames())if(C.endsWith(v1)){const _=O[p++],L=f.getAttribute(C).split(Fl),U=/([.?@])?(.*)/.exec(_);b.push({type:1,index:d,name:U[2],strings:L,ctor:U[1]==="."?WA:U[1]==="?"?PA:U[1]==="@"?IA:jo}),f.removeAttribute(C)}else C.startsWith(Fl)&&(b.push({type:6,index:d}),f.removeAttribute(C));if(b1.test(f.tagName)){const C=f.textContent.split(Fl),_=C.length-1;if(_>0){f.textContent=zo?zo.emptyScript:"";for(let L=0;L<_;L++)f.append(C[L],qi()),wa.nextNode(),b.push({type:2,index:++d});f.append(C[_],qi())}}}else if(f.nodeType===8)if(f.data===m1)b.push({type:2,index:d});else{let C=-1;for(;(C=f.data.indexOf(Fl,C+1))!==-1;)b.push({type:7,index:d}),C+=Fl.length-1}d++}}static createElement(u,r){const s=Da.createElement("template");return s.innerHTML=u,s}}function Cn(n,u,r=n,s){if(u===Dn)return u;let f=s!==void 0?r._$Co?.[s]:r._$Cl;const d=Qi(u)?void 0:u._$litDirective$;return f?.constructor!==d&&(f?._$AO?.(!1),d===void 0?f=void 0:(f=new d(n),f._$AT(n,r,s)),s!==void 0?(r._$Co??(r._$Co=[]))[s]=f:r._$Cl=f),f!==void 0&&(u=Cn(n,f._$AS(n,u.values),f,s)),u}class FA{constructor(u,r){this._$AV=[],this._$AN=void 0,this._$AD=u,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(u){const{el:{content:r},parts:s}=this._$AD,f=(u?.creationScope??Da).importNode(r,!0);wa.currentNode=f;let d=wa.nextNode(),p=0,E=0,b=s[0];for(;b!==void 0;){if(p===b.index){let T;b.type===2?T=new Gi(d,d.nextSibling,this,u):b.type===1?T=new b.ctor(d,b.name,b.strings,this,u):b.type===6&&(T=new tx(d,this,u)),this._$AV.push(T),b=s[++E]}p!==b?.index&&(d=wa.nextNode(),p++)}return wa.currentNode=Da,f}p(u){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(u,s,r),r+=s.strings.length-2):s._$AI(u[r])),r++}}class Gi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(u,r,s,f){this.type=2,this._$AH=Rt,this._$AN=void 0,this._$AA=u,this._$AB=r,this._$AM=s,this.options=f,this._$Cv=f?.isConnected??!0}get parentNode(){let u=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&u?.nodeType===11&&(u=r.parentNode),u}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(u,r=this){u=Cn(this,u,r),Qi(u)?u===Rt||u==null||u===""?(this._$AH!==Rt&&this._$AR(),this._$AH=Rt):u!==this._$AH&&u!==Dn&&this._(u):u._$litType$!==void 0?this.$(u):u.nodeType!==void 0?this.T(u):KA(u)?this.k(u):this._(u)}O(u){return this._$AA.parentNode.insertBefore(u,this._$AB)}T(u){this._$AH!==u&&(this._$AR(),this._$AH=this.O(u))}_(u){this._$AH!==Rt&&Qi(this._$AH)?this._$AA.nextSibling.data=u:this.T(Da.createTextNode(u)),this._$AH=u}$(u){const{values:r,_$litType$:s}=u,f=typeof s=="number"?this._$AC(u):(s.el===void 0&&(s.el=Vi.createElement(A1(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===f)this._$AH.p(r);else{const d=new FA(f,this),p=d.u(this.options);d.p(r),this.T(p),this._$AH=d}}_$AC(u){let r=mp.get(u.strings);return r===void 0&&mp.set(u.strings,r=new Vi(u)),r}k(u){jc(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,f=0;for(const d of u)f===r.length?r.push(s=new Gi(this.O(qi()),this.O(qi()),this,this.options)):s=r[f],s._$AI(d),f++;f<r.length&&(this._$AR(s&&s._$AB.nextSibling,f),r.length=f)}_$AR(u=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);u!==this._$AB;){const s=u.nextSibling;u.remove(),u=s}}setConnected(u){this._$AM===void 0&&(this._$Cv=u,this._$AP?.(u))}}class jo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(u,r,s,f,d){this.type=1,this._$AH=Rt,this._$AN=void 0,this.element=u,this.name=r,this._$AM=f,this.options=d,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Rt}_$AI(u,r=this,s,f){const d=this.strings;let p=!1;if(d===void 0)u=Cn(this,u,r,0),p=!Qi(u)||u!==this._$AH&&u!==Dn,p&&(this._$AH=u);else{const E=u;let b,T;for(u=d[0],b=0;b<d.length-1;b++)T=Cn(this,E[s+b],r,b),T===Dn&&(T=this._$AH[b]),p||(p=!Qi(T)||T!==this._$AH[b]),T===Rt?u=Rt:u!==Rt&&(u+=(T??"")+d[b+1]),this._$AH[b]=T}p&&!f&&this.j(u)}j(u){u===Rt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,u??"")}}class WA extends jo{constructor(){super(...arguments),this.type=3}j(u){this.element[this.name]=u===Rt?void 0:u}}class PA extends jo{constructor(){super(...arguments),this.type=4}j(u){this.element.toggleAttribute(this.name,!!u&&u!==Rt)}}class IA extends jo{constructor(u,r,s,f,d){super(u,r,s,f,d),this.type=5}_$AI(u,r=this){if((u=Cn(this,u,r,0)??Rt)===Dn)return;const s=this._$AH,f=u===Rt&&s!==Rt||u.capture!==s.capture||u.once!==s.once||u.passive!==s.passive,d=u!==Rt&&(s===Rt||f);f&&this.element.removeEventListener(this.name,this,s),d&&this.element.addEventListener(this.name,this,u),this._$AH=u}handleEvent(u){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,u):this._$AH.handleEvent(u)}}class tx{constructor(u,r,s){this.element=u,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(u){Cn(this,u)}}const ex=Ri.litHtmlPolyfillSupport;ex?.(Vi,Gi),(Ri.litHtmlVersions??(Ri.litHtmlVersions=[])).push("3.3.1");const lx=(n,u,r)=>{const s=r?.renderBefore??u;let f=s._$litPart$;if(f===void 0){const d=r?.renderBefore??null;s._$litPart$=f=new Gi(u.insertBefore(qi(),d),d,void 0,r??{})}return f._$AI(n),f};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=globalThis;class Ue extends Sn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const u=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=u.firstChild),u}update(u){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(u),this._$Do=lx(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Dn}}Ue._$litElement$=!0,Ue.finalized=!0,ji.litElementHydrateSupport?.({LitElement:Ue});const ax=ji.litElementPolyfillSupport;ax?.({LitElement:Ue});(ji.litElementVersions??(ji.litElementVersions=[])).push("4.2.1");var nx=`.uui-h1,
.uui-h2,
.uui-h3,
.uui-h4,
.uui-h5,
.uui-a,
.uui-p,
.uui-p-lead,
.uui-small,
.uui-quoteblock,
.uui-ul,
.uui-ol,
.uui-text {
  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 21px;
  -webkit-font-smoothing: antialiased;
}

.uui-text h1,
.uui-h1.uui-h1 {
  font-size: var(--uui-type-h1-size,60px);
  line-height: var(--uui-size-layout-4,66px);
  font-weight: 300;
  margin-left: -5px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text p + h1,
.uui-text p + .uui-h1 {
  margin-top: var(--uui-size-layout-4,66px);
}

.uui-text h1.--no-top-margin,
.uui-text h1:first-child,
.uui-h1.--no-top-margin,
.uui-h1:first-child {
  margin-top: 0;
}

.uui-text h2,
.uui-h2.uui-h2 {
  font-size: var(--uui-type-h2-size,42px);
  line-height: var(--uui-size-layout-3,42px);
  font-weight: 300;
  margin-left: -3px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text p + h2,
.uui-text p + .uui-h2 {
  margin-top: var(--uui-size-layout-3,42px);
}

.uui-text h2.--no-top-margin,
.uui-text h2:first-child,
.uui-h2.--no-top-margin,
.uui-h2:first-child {
  margin-top: 0;
}

.uui-text h3,
.uui-h3.uui-h3 {
  font-size: var(--uui-type-h3-size,30px);
  line-height: var(--uui-size-large);
  font-weight: 300;
  margin-left: -2px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text h3.--no-top-margin,
.uui-text h3:first-child,
.uui-h3.--no-top-margin,
.uui-h3:first-child {
  margin-top: 0;
}

.uui-text h4,
.uui-h4.uui-h4 {
  font-size: var(--uui-type-h4-size,21px);
  line-height: 21px;
  font-weight: 400;
  margin-left: -1px;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-text h4.--no-top-margin,
.uui-text h4:first-child,
.uui-h4.--no-top-margin,
.uui-h4:first-child {
  margin-top: 0;
}

.uui-text h5,
.uui-h5.uui-h5 {
  font-size: var(--uui-type-h5-size,14px);
  line-height: inherit;
  font-weight: 700;
  margin-left: 0;
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: 0;
}

.uui-text h5.--no-top-margin,
.uui-text h5:first-child,
.uui-h5.--no-top-margin,
.uui-h5:first-child {
  margin-top: 0;
}

.uui-p,
.uui-text p {
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-p-lead,
.uui-text p.uui-lead {
  font-size: var(--uui-size-6,18px);
  line-height: var(--uui-size-8,24px);
}

.uui-a,
.uui-text a {
  color: var(--uui-color-interactive,#1b264f);
}

.uui-a:link,
.uui-a:active .uui-text a:link,
.uui-text a:active {
  color: var(--uui-color-interactive,#1b264f);
}

.uui-a:hover,
.uui-text a:hover {
  color: var(--uui-color-interactive-emphasis,#3544b1);
}

.uui-small,
.uui-text small {
  display: inline-block;
  font-size: var(--uui-type-small-size,12px);
  line-height: 18px;
}

.uui-quoteblock,
.uui-text blockquote {
  float: right;
  font-size: 14px;
  line-height: inherit;
  font-weight: 700;
  font-style: italic;
  margin-top: 0;
  margin-bottom: var(--uui-size-layout-1,24px);
  margin-right: -0.035em;
  max-width: 16em;
  quotes: '“' '”' '‘' '’';
}

.uui-quoteblock:before,
.uui-text blockquote:before {
  content: open-quote;
  margin-left: -0.4em;
  margin-right: 0.08em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
}

.uui-quoteblock:after,
.uui-text blockquote:after {
  content: close-quote;
  margin-left: 0.04em;
  margin-right: -0.4em;
  vertical-align: bottom;
  font-weight: 400;
  font-size: 2em;
  margin-bottom: -2px;
  display: inline-block;
}

.uui-ul,
.uui-text ul {
  list-style-type: square;
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}

.uui-ol,
.uui-text ol {
  padding-left: var(--uui-size-layout-1,24px);
  margin-top: var(--uui-size-layout-1,24px);
  margin-bottom: var(--uui-size-layout-1,24px);
}
`;$i(nx);function Sl(n,u){return r=>{if(n.indexOf("-")>0===!1)return;window.customElements.get(n)||window.customElements.define(n,r,u)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ix={attribute:!0,type:String,converter:wo,reflect:!1,hasChanged:Rc},ux=(n=ix,u,r)=>{const{kind:s,metadata:f}=r;let d=globalThis.litPropertyMetadata.get(f);if(d===void 0&&globalThis.litPropertyMetadata.set(f,d=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),d.set(r.name,n),s==="accessor"){const{name:p}=r;return{set(E){const b=u.get.call(this);u.set.call(this,E),this.requestUpdate(p,b,n)},init(E){return E!==void 0&&this.C(p,void 0,n,E),E}}}if(s==="setter"){const{name:p}=r;return function(E){const b=this[p];u.call(this,E),this.requestUpdate(p,b,n)}}throw Error("Unsupported decorator location: "+s)};function ut(n){return(u,r)=>typeof r=="object"?ux(n,u,r):((s,f,d)=>{const p=f.hasOwnProperty(d);return f.constructor.createProperty(d,s),p?Object.getOwnPropertyDescriptor(f,d):void 0})(n,u,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Hc(n){return ut({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lc=(n,u,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof u!="object"&&Object.defineProperty(n,u,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x1(n,u){return(r,s,f)=>{const d=p=>p.renderRoot?.querySelector(n)??null;return Lc(r,s,{get(){return d(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ox;function rx(n){return(u,r)=>Lc(u,r,{get(){return(this.renderRoot??ox??(ox=document.createDocumentFragment())).querySelectorAll(n)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function sx(n){return(u,r)=>{const{slot:s,selector:f}=n??{},d="slot"+(s?`[name=${s}]`:":not([name])");return Lc(u,r,{get(){const p=this.renderRoot?.querySelector(d),E=p?.assignedElements(n)??[];return f===void 0?E:E.filter((b=>b.matches(f)))}})}}var cx=Object.defineProperty,bp=(n,u,r,s)=>{for(var f=void 0,d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=p(u,r,f)||f);return f&&cx(u,r,f),f};const fx=(n,u)=>{class r extends u{constructor(){super(...arguments),this._labelSlotHasContent=!1}firstUpdated(f){super.firstUpdated(f),this.label}labelSlotChanged(f){this._labelSlotHasContent=f.target.assignedNodes({flatten:!0}).length>0}renderLabel(){return Ot`
        ${this._labelSlotHasContent===!1?Ot`<span class="label">${this.label}</span>`:""}
        <slot
          class="label"
          style=${this._labelSlotHasContent?"":"display: none"}
          name=${""}
          @slotchange=${this.labelSlotChanged}></slot>
      `}}return bp([ut({type:String})],r.prototype,"label"),bp([Hc()],r.prototype,"_labelSlotHasContent"),r};let dx=class extends Event{constructor(u,r={}){super(u,{...r}),this.detail=r.detail||{}}};var Ta;let oo=(Ta=class extends dx{constructor(u,r={}){super(u,{bubbles:!0,cancelable:!0,...r})}},Ta.SELECTED="selected",Ta.DESELECTED="deselected",Ta);var hx=Object.defineProperty,px=Object.getOwnPropertyDescriptor,yp=(n,u,r,s)=>{for(var f=s>1?void 0:s?px(u,r):u,d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=(s?p(u,r,f):p(f))||f);return s&&f&&hx(u,r,f),f};const gx=n=>{var r,s,f,d,S1,yc,E1;class u extends n{constructor(...C){super(...C);se(this,d);se(this,r);se(this,s);se(this,f);this._selectable=!1,this.deselectable=!0,this.selected=!1,Jt(this,r,this),Jt(this,s,_=>{_.code!=="Space"&&_.code!=="Enter"||_.composedPath().indexOf(K(this,r))===0&&K(this,f).call(this,_)}),Jt(this,f,_=>{if((this._selectable||this.deselectable&&this.selected)===!1)return;const U=_.composedPath();K(this,r)===this&&U.some(F=>{const W=F.tagName;return W==="A"||W==="BUTTON"||W==="INPUT"||W==="TEXTAREA"||W==="SELECT"})||U.indexOf(K(this,r))!==-1&&(_.type==="keydown"&&_.preventDefault(),bl(this,d,S1).call(this))}),this.addEventListener("click",K(this,f)),this.addEventListener("keydown",K(this,s))}get selectable(){return this._selectable}set selectable(C){const _=this._selectable;_!==C&&(this._selectable=C,K(this,r)===this&&K(this,r).setAttribute("tabindex",`${C?"0":"-1"}`),this.requestUpdate("selectable",_))}get selectableTarget(){return K(this,r)}set selectableTarget(C){const _=K(this,r);_.removeAttribute("tabindex"),_.removeEventListener("click",K(this,f)),_.removeEventListener("keydown",K(this,s)),Jt(this,r,C),K(this,r)===this&&K(this,r).setAttribute("tabindex",this._selectable?"0":"-1"),C.addEventListener("click",K(this,f)),C.addEventListener("keydown",K(this,s))}}return r=new WeakMap,s=new WeakMap,f=new WeakMap,d=new WeakSet,S1=function(){this.selectable&&(this.deselectable===!1?bl(this,d,yc).call(this):this.selected?bl(this,d,E1).call(this):bl(this,d,yc).call(this))},yc=function(){if(!this.selectable)return;const C=new oo(oo.SELECTED);this.dispatchEvent(C),!C.defaultPrevented&&(this.selected=!0)},E1=function(){if(!this.deselectable)return;const C=new oo(oo.DESELECTED);this.dispatchEvent(C),!C.defaultPrevented&&(this.selected=!1)},yp([ut({type:Boolean,reflect:!0})],u.prototype,"selectable",1),yp([ut({type:Boolean,reflect:!0})],u.prototype,"selected",2),u};var vx=Object.defineProperty,mx=Object.getOwnPropertyDescriptor,bx=(n,u,r,s)=>{for(var f=mx(u,r),d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=p(u,r,f)||f);return f&&vx(u,r,f),f};const yx=n=>{class u extends n{constructor(){super(...arguments),this._selectOnly=!1}get selectOnly(){return this._selectOnly}set selectOnly(s){const f=this._selectOnly;this._selectOnly=s,this.requestUpdate("selectOnly",f)}}return bx([ut({type:Boolean,reflect:!0,attribute:"select-only"})],u.prototype,"selectOnly"),u};let w1=class extends Event{constructor(u,r={}){super(u,{...r}),this.detail=r.detail||{}}};var Ba;let An=(Ba=class extends w1{constructor(u,r={}){super(u,{bubbles:!0,...r})}},Ba.VALID="valid",Ba.INVALID="invalid",Ba);var Ma;let g4=(Ma=class extends w1{constructor(u,r={}){super(u,{bubbles:!0,cancelable:!0,...r})}},Ma.SELECTED="selected",Ma.DESELECTED="deselected",Ma);var Ax=Object.defineProperty,xx=Object.getOwnPropertyDescriptor,Sa=(n,u,r,s)=>{for(var f=s>1?void 0:s?xx(u,r):u,d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=(s?p(u,r,f):p(f))||f);return s&&f&&Ax(u,r,f),f};const Sx=["customError","valueMissing","badInput","typeMismatch","patternMismatch","rangeOverflow","rangeUnderflow","stepMismatch","tooLong","tooShort"],Ex=(n,u)=>{var s,f,d,p,E,b,Ac,xc,C;const _=class _ extends n{constructor(...k){super(...k);se(this,b);se(this,s);se(this,f);se(this,d);se(this,p);se(this,E);se(this,C);this.name="",Jt(this,s,{}),this._pristine=!1,this.required=!1,this.requiredMessage="This field is required",this.error=!1,this.errorMessage="This field is invalid",Jt(this,f,u),Jt(this,d,null),Jt(this,p,[]),Jt(this,E,[]),Jt(this,C,()=>{this.pristine=!1}),this._internals=this.attachInternals(),this.pristine=!0,this.addValidator("valueMissing",()=>this.requiredMessage,()=>this.hasAttribute("required")&&this.hasValue()===!1),this.addValidator("customError",()=>this.errorMessage,()=>this.error),this.addEventListener("blur",()=>{this.pristine=!1,this.checkValidity()})}get value(){return K(this,f)}set value(k){const F=K(this,f);Jt(this,f,k),"ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype&&this._internals.setFormValue(K(this,f)??null),this.requestUpdate("value",F)}set pristine(k){this._pristine!==k&&(this._pristine=k,k?this.setAttribute("pristine",""):this.removeAttribute("pristine"),bl(this,b,xc).call(this))}get pristine(){return this._pristine}hasValue(){return this.value!==this.getDefaultValue()}focusFirstInvalidElement(){const k=K(this,E).find(F=>F.validity.valid===!1);k?"focusFirstInvalidElement"in k?k.focusFirstInvalidElement():k.focus():this.focus()}disconnectedCallback(){super.disconnectedCallback(),bl(this,b,Ac).call(this)}addValidator(k,F,W){const V={flagKey:k,getMessageMethod:F,checkMethod:W,weight:Sx.indexOf(k)};return K(this,p).push(V),K(this,p).sort((R,Q)=>R.weight>Q.weight?1:Q.weight>R.weight?-1:0),V}removeValidator(k){const F=K(this,p).indexOf(k);F!==-1&&K(this,p).splice(F,1)}addFormControlElement(k){K(this,E).push(k),k.addEventListener(An.INVALID,()=>{this._runValidators()}),k.addEventListener(An.VALID,()=>{this._runValidators()}),this._pristine===!1&&(k.checkValidity(),this._runValidators())}setCustomValidity(k){this._customValidityObject&&this.removeValidator(this._customValidityObject),k!=null&&k!==""&&(this._customValidityObject=this.addValidator("customError",()=>k,()=>!0)),this._runValidators()}_runValidators(){Jt(this,s,{});let k,F;K(this,p).some(V=>V.checkMethod()?(K(this,s)[V.flagKey]=!0,k=V.getMessageMethod(),!0):!1),k||K(this,E).some(V=>{let R;for(R in V.validity)if(R!=="valid"&&V.validity[R])return K(this,s)[R]=!0,k=V.validationMessage,F??(F=V),!0;return!1});const W=Object.values(K(this,s)).includes(!0);K(this,s).valid=!W,this._internals.setValidity(K(this,s),k,F??this.getFormElement()??void 0),bl(this,b,xc).call(this)}updated(k){super.updated(k),this._runValidators()}submit(){K(this,d)?.requestSubmit()}formAssociatedCallback(){bl(this,b,Ac).call(this),Jt(this,d,this._internals.form),K(this,d)&&(K(this,d).hasAttribute("submit-invalid")&&(this.pristine=!1),K(this,d).addEventListener("submit",K(this,C)))}formResetCallback(){this.pristine=!0,this.value=this.getInitialValue()??this.getDefaultValue()}getDefaultValue(){return u}getInitialValue(){return this.getAttribute("value")}checkValidity(){this.pristine=!1,this._runValidators();for(const k in K(this,E))if(K(this,E)[k].checkValidity()===!1)return!1;return this._internals?.checkValidity()}get validity(){return K(this,s)}get validationMessage(){return this._internals?.validationMessage}};s=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,E=new WeakMap,b=new WeakSet,Ac=function(){K(this,d)&&K(this,d).removeEventListener("submit",K(this,C))},xc=function(){this._pristine!==!0&&(K(this,s).valid?this.dispatchEvent(new An(An.VALID)):this.dispatchEvent(new An(An.INVALID)))},C=new WeakMap,_.formAssociated=!0;let r=_;return Sa([ut({type:String})],r.prototype,"name",2),Sa([ut()],r.prototype,"value",1),Sa([ut({type:Boolean,reflect:!0,attribute:"pristine"})],r.prototype,"pristine",1),Sa([ut({type:Boolean,reflect:!0})],r.prototype,"required",2),Sa([ut({type:String,attribute:"required-message"})],r.prototype,"requiredMessage",2),Sa([ut({type:Boolean,reflect:!0})],r.prototype,"error",2),Sa([ut({type:String,attribute:"error-message"})],r.prototype,"errorMessage",2),r},wx=(n,u,r)=>{let s=n;for(;s!==null;){const f=s instanceof HTMLElement&&s.hasAttribute(u)&&s.getAttribute(u)===r,d=s.querySelector(`[${u}="${r}"]`)!==null;if(f)return s;if(d)return s.querySelector(`[${u}="${r}"]`);s=s.parentElement||s.parentNode||s.host||null}return null};var zx=Object.defineProperty,Tx=(n,u,r,s)=>{for(var f=void 0,d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=p(u,r,f)||f);return f&&zx(u,r,f),f};const Bx=n=>{var r,s;class u extends n{constructor(...p){super(...p);se(this,r);se(this,s);Jt(this,r,!1),this._togglePopover=()=>{if(!this.popoverContainerElement)return;const E=wx(this,"id",this.popoverContainerElement);E&&(K(this,r)?E.hidePopover():E.showPopover())},Jt(this,s,E=>{requestAnimationFrame(()=>{Jt(this,r,E.detail.newState==="open")})}),this.addEventListener("uui-popover-before-toggle",K(this,s))}}return r=new WeakMap,s=new WeakMap,Tx([ut({type:String,attribute:"popovertarget"})],u.prototype,"popoverContainerElement"),u};var Mx=Object.getOwnPropertyDescriptor,Ox=(n,u,r,s)=>{for(var f=s>1?void 0:s?Mx(u,r):u,d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=p(f)||f);return f};let Sc=class extends Ue{connectedCallback(){super.connectedCallback(),this.setAttribute("role","table")}render(){return Ot`<slot></slot>`}};Sc.styles=[Re`
      :host {
        display: table;
        width: 100%;
        border-radius: var(--uui-border-radius,3px);
        background-color: var(--uui-color-surface,#fff);
        cursor: default;
      }
    `];Sc=Ox([Sl("uui-table")],Sc);var Dx=Object.defineProperty,Cx=Object.getOwnPropertyDescriptor,Ho=(n,u,r,s)=>{for(var f=s>1?void 0:s?Cx(u,r):u,d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=(s?p(u,r,f):p(f))||f);return s&&f&&Dx(u,r,f),f};let ta=class extends Ue{constructor(){super(...arguments),this.disableChildInteraction=!1,this.noPadding=!1,this.clipText=!1,this._observer=new ResizeObserver(()=>{this._detectOverflow()})}_detectOverflow(){this.scrollWidth>this.clientWidth?this.setAttribute("title",this.innerText):this.removeAttribute("title")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","cell")}disconnectedCallback(){super.disconnectedCallback(),this._observer.disconnect()}updated(n){super.updated(n),n.has("clipText")&&(this.clipText?(this._detectOverflow(),this._observer.observe(this)):this._observer.disconnect())}render(){return Ot` <slot @slotchange=${this._detectOverflow}></slot>`}};ta.styles=[Re`
      :host {
        position: relative;
        display: table-cell;
        height: var(--uui-table-cell-height, var(--uui-size-12,36px));
        padding: var(
          --uui-table-cell-padding,
          var(--uui-size-3,9px) var(--uui-size-5,15px)
        );
        border-top: 1px solid var(--uui-color-border,#d8d7d9);
        vertical-align: middle;
      }

      :host([clip-text]) {
        max-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        box-sizing: border-box;
      }

      :host([disable-child-interaction]) ::slotted(*) {
        pointer-events: none;
      }

      :host([disable-child-interaction])::after {
        content: '';
        position: absolute;
        inset: 0;
      }

      :host([no-padding]) {
        padding: 0;
      }
    `];Ho([ut({type:Boolean,reflect:!0,attribute:"disable-child-interaction"})],ta.prototype,"disableChildInteraction",2);Ho([ut({type:Boolean,reflect:!0,attribute:"no-padding"})],ta.prototype,"noPadding",2);Ho([ut({type:Boolean,reflect:!0,attribute:"clip-text"})],ta.prototype,"clipText",2);ta=Ho([Sl("uui-table-cell")],ta);var _x=Object.getOwnPropertyDescriptor,Ux=(n,u,r,s)=>{for(var f=s>1?void 0:s?_x(u,r):u,d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=p(f)||f);return f};let Ec=class extends Ue{};Ec.styles=[Re`
      :host {
        display: table-column;
      }
    `];Ec=Ux([Sl("uui-table-column")],Ec);var kx=Object.getOwnPropertyDescriptor,Nx=(n,u,r,s)=>{for(var f=s>1?void 0:s?kx(u,r):u,d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=p(f)||f);return f};let wc=class extends ta{connectedCallback(){super.connectedCallback(),this.setAttribute("role","columnheader")}};wc.styles=[...ta.styles,Re`
      :host {
        border-top: none;
      }
    `];wc=Nx([Sl("uui-table-head-cell")],wc);var Rx=Object.getOwnPropertyDescriptor,jx=(n,u,r,s)=>{for(var f=s>1?void 0:s?Rx(u,r):u,d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=p(f)||f);return f};let zc=class extends Ue{connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}render(){return Ot`<slot></slot>`}};zc.styles=[Re`
      :host {
        display: table-header-group;
        font-weight: bold;
      }
    `];zc=jx([Sl("uui-table-head")],zc);var Hx=Object.defineProperty,Lx=Object.getOwnPropertyDescriptor,z1=(n,u,r,s)=>{for(var f=s>1?void 0:s?Lx(u,r):u,d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=(s?p(u,r,f):p(f))||f);return s&&f&&Hx(u,r,f),f};let To=class extends yx(gx(Ue)){constructor(){super();let n=!1;this.addEventListener("blur",()=>{n===!1&&this.style.setProperty("--uui-show-focus-outline","1"),n=!1}),this.addEventListener("mousedown",()=>{this.style.setProperty("--uui-show-focus-outline","0"),n=!0}),this.addEventListener("mouseup",()=>{n=!1})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","row")}updated(n){n.has("selectOnly")&&this.updateChildSelectOnly()}updateChildSelectOnly(){this.slotCellNodes&&this.slotCellNodes.forEach(n=>{n.disableChildInteraction!==void 0&&(n.disableChildInteraction=this.selectOnly)})}render(){return Ot` <slot @slotchanged=${this.updateChildSelectOnly}></slot> `}};To.styles=[Re`
      :host {
        display: table-row;
        position: relative;
        outline-offset: -3px;
      }

      :host([selectable]) {
        cursor: pointer;
      }

      :host(:focus) {
        outline: calc(2px * var(--uui-show-focus-outline, 1)) solid
          var(--uui-color-focus,#3879ff);
      }
      :host([selected]) {
        outline: 2px solid
          var(--uui-table-row-color-selected, var(--uui-color-selected,#3544b1));
      }
      :host([selected]:focus) {
        outline-color: var(--uui-color-focus,#3879ff);
      }
    `];z1([sx({flatten:!0,selector:"uui-table-cell, [uui-table-cell], [role=cell]"})],To.prototype,"slotCellNodes",2);To=z1([Sl("uui-table-row")],To);var qx=Object.defineProperty,Qx=Object.getOwnPropertyDescriptor,T1=(n,u,r,s)=>{for(var f=s>1?void 0:s?Qx(u,r):u,d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=(s?p(u,r,f):p(f))||f);return s&&f&&qx(u,r,f),f};let Bo=class extends Ue{constructor(){super(...arguments),this.enforceScroll=!1}connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){return Ot`<slot></slot>`}};Bo.styles=[Re`
      :host {
        display: block;
        scrollbar-width: thin;
        scrollbar-color: var(--uui-color-disabled-contrast,#c4c4c4)
          var(--uui-color-surface,#fff);
        overflow-y: auto;
      }

      :host([enforce-scroll]) {
        overflow-y: scroll;
      }

      :host::-webkit-scrollbar {
        width: 6px;
        height: 6px; /* needed for horizontal scrollbar */
      }

      :host::-webkit-scrollbar-track {
        background: var(--uui-color-surface,#fff);
        border-radius: 3px;
      }
      :host::-webkit-scrollbar-thumb {
        background-color: var(--uui-color-disabled-contrast,#c4c4c4);
        border-radius: 3px;
      }
    `];T1([ut({type:Boolean,reflect:!0,attribute:"enforce-scroll"})],Bo.prototype,"enforceScroll",2);Bo=T1([Sl("uui-scroll-container")],Bo);const Hi=(n,u,r=`This element has to be present for ${n.nodeName} to work appropriate.`)=>{customElements.get(u)};class qc extends Event{constructor(u,r={}){super(u,{...r}),this.detail=r.detail||{}}}const Mo=class Mo extends qc{constructor(u,r={}){super(u,{bubbles:!0,...r})}};Mo.VALID="valid",Mo.INVALID="invalid";let Ap=Mo;const Oo=class Oo extends qc{constructor(u,r={}){super(u,{bubbles:!0,cancelable:!0,...r})}};Oo.SELECTED="selected",Oo.DESELECTED="deselected";let xp=Oo;const Qc=class Qc extends qc{constructor(u,r={}){super(u,{bubbles:!0,...r})}};Qc.CHANGE="change";let Jl=Qc;var Vx=Object.defineProperty,$x=Object.getOwnPropertyDescriptor,Se=(n,u,r,s)=>{for(var f=s>1?void 0:s?$x(u,r):u,d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=(s?p(u,r,f):p(f))||f);return s&&f&&Vx(u,r,f),f};const Gx=45,oc=(n,u,r)=>Math.min(Math.max(n,u),r),Yx=(n,u)=>Array.from({length:u-n+1},(r,s)=>n+s);let te=class extends Ue{constructor(){super(...arguments),this._observer=new ResizeObserver(this._calculateRange.bind(this)),this.label="",this.ariaLabel="",this.firstLabel="First",this.previousLabel="Previous",this.nextLabel="Next",this.lastLabel="Last",this._total=100,this._range=0,this._visiblePages=[],this._current=1}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","navigation"),this._visiblePages=this._generateVisiblePages(this.current),Hi(this,"uui-button"),Hi(this,"uui-button-group")}disconnectedCallback(){this._observer.disconnect()}firstUpdated(){this._observer.observe(this._pagesGroup),this.updateLabel(),this._calculateRange()}willUpdate(n){(n.has("current")||n.has("label"))&&this.updateLabel()}updateLabel(){this.ariaLabel=`${this.label||"Pagination navigation"}. Current page: ${this.current}.`}_calculateRange(){const n=this.offsetWidth,u=Array.from(this._navButtons).reduce((f,d)=>f+d.getBoundingClientRect().width,0),s=(n-u)/Gx/2;this._range=Math.max(1,Math.floor(s)),this._visiblePages=this._generateVisiblePages(this.current)}_generateVisiblePages(n){const u=n<this._range?1:n<this.total-this._range?n-this._range:this.total-this._range*2,r=n<=this._range?this._range*2+1:n<this.total-this._range?n+this._range:this.total;return Yx(oc(u,1,this.total),oc(r,1,this.total))}get total(){return this._total}set total(n){this._total=n,this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("total",n)}get current(){return this._current}set current(n){const u=this._current;this._current=oc(n,1,this.total),this._visiblePages=this._generateVisiblePages(this._current),this.requestUpdate("current",u)}goToNextPage(){this.current++,this.dispatchEvent(new Jl(Jl.CHANGE))}goToPreviousPage(){this.current--,this.dispatchEvent(new Jl(Jl.CHANGE))}goToPage(n){this.current=n,this.dispatchEvent(new Jl(Jl.CHANGE))}focusActivePage(){requestAnimationFrame(()=>{const n=this.renderRoot.querySelector(".active");n&&n.focus()})}renderFirst(){return Ot`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label=${this.firstLabel}
      ?disabled=${this._current===1}
      @click=${()=>this.goToPage(1)}></uui-button>`}renderPrevious(){return Ot`<uui-button
      compact
      look="outline"
      class="nav"
      role="listitem"
      label=${this.previousLabel}
      ?disabled=${this._current===1}
      @click=${this.goToPreviousPage}></uui-button>`}renderNext(){return Ot`<uui-button
      compact
      look="outline"
      role="listitem"
      class="nav"
      label=${this.nextLabel}
      ?disabled=${this._current===this.total}
      @click=${this.goToNextPage}></uui-button>`}renderLast(){return Ot`
      <uui-button
        compact
        look="outline"
        role="listitem"
        class="nav"
        label=${this.lastLabel}
        ?disabled=${this.total===this._current}
        @click=${()=>this.goToPage(this.total)}></uui-button>
    `}renderDots(){return Ot`<uui-button
      compact
      look="outline"
      role="listitem"
      tabindex="-1"
      class="dots"
      label="More pages"
      >...</uui-button
    > `}renderPage(n){return Ot`<uui-button
      compact
      look="outline"
      role="listitem"
      label="Go to page ${n}"
      class=${"page"+(n===this._current?" active":"")}
      tabindex=${n===this._current?"-1":""}
      @click=${()=>{n!==this._current&&(this.goToPage(n),this.focusActivePage())}}>
      ${n}
    </uui-button>`}renderNavigationLeft(){return Ot` ${this.renderFirst()} ${this.renderPrevious()}
    ${this._visiblePages.includes(1)?"":this.renderDots()}`}renderNavigationRight(){return Ot`${this._visiblePages.includes(this.total)?"":this.renderDots()}
    ${this.renderNext()} ${this.renderLast()}`}render(){return Ot`<uui-button-group role="list" id="pages">
      ${this.renderNavigationLeft()}
      ${this._visiblePages.map(n=>this.renderPage(n))}
      ${this.renderNavigationRight()}
    </uui-button-group>
    `}};te.styles=[Re`
      uui-button-group {
        width: 100%;
      }

      uui-button {
        --uui-button-border-color: var(--uui-color-border-standalone,#c2c2c2);
        --uui-button-border-color-hover: var(--uui-color-interactive-emphasis,#3544b1);
        --uui-button-border-color-disabled: var(--uui-color-border-standalone,#c2c2c2);
      }

      .page {
        min-width: 36px;
        max-width: 72px;
      }
      .page.active {
        --uui-button-background-color: var(--uui-color-current,#f5c1bc);
      }

      .nav {
        min-width: 72px;
      }

      .dots {
        pointer-events: none;
      }

      .active {
        pointer-events: none;
      }
    `];Se([rx("uui-button.nav")],te.prototype,"_navButtons",2);Se([x1("#pages")],te.prototype,"_pagesGroup",2);Se([ut()],te.prototype,"label",2);Se([ut({reflect:!0,attribute:"aria-label"})],te.prototype,"ariaLabel",2);Se([ut()],te.prototype,"firstLabel",2);Se([ut()],te.prototype,"previousLabel",2);Se([ut()],te.prototype,"nextLabel",2);Se([ut()],te.prototype,"lastLabel",2);Se([ut({type:Number})],te.prototype,"total",1);Se([Hc()],te.prototype,"_range",2);Se([Hc()],te.prototype,"_visiblePages",2);Se([ut({type:Number})],te.prototype,"current",1);te=Se([Sl("uui-pagination")],te);Re`
  @keyframes uui-blink {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`;$i("uui-blink 0.9s infinite both");Re`
  @keyframes pulse {
    0% {
      -webkit-transform: translate(-50%, -50%) scale(0.2);
      transform: translate(-50%, -50%) scale(0.2);
      opacity: 0.9;
    }
    80% {
      -webkit-transform: translate(-50%, -50%) scale(1.2);
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, -50%) scale(2.2);
      transform: translate(-50%, -50%) scale(2.2);
      opacity: 0;
    }
  }
`;$i("pulse 0.8s ease-in-out infinite both");const Xx=Re`
  @keyframes uui-horizontal-shake {
    10%,
    90% {
      transform: translateX(-1px);
    }

    20%,
    80% {
      transform: translateX(1px);
    }

    30%,
    50%,
    70% {
      transform: translateX(-2px);
    }

    40%,
    60% {
      transform: translateX(2px);
    }
  }
`,Zx=$i("uui-horizontal-shake 600ms ease backwards");st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>`;const Kx=st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" /><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" /><path d="M15 2v5h5" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /><path d="M2 10h20" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>`;st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h0" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></svg>`;const Jx=st`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xn=n=>n??Rt;var Fx=Object.defineProperty,Wx=Object.getOwnPropertyDescriptor,B1=n=>{throw TypeError(n)},Ye=(n,u,r,s)=>{for(var f=s>1?void 0:s?Wx(u,r):u,d=n.length-1,p;d>=0;d--)(p=n[d])&&(f=(s?p(u,r,f):p(f))||f);return s&&f&&Fx(u,r,f),f},M1=(n,u,r)=>u.has(n)||B1("Cannot "+r),Px=(n,u,r)=>(M1(n,u,"read from private field"),u.get(n)),Ix=(n,u,r)=>u.has(n)?B1("Cannot add the same private member more than once"):u instanceof WeakSet?u.add(n):u.set(n,r),t4=(n,u,r,s)=>(M1(n,u,"write to private field"),u.set(n,r),r),mo;let xe=class extends Ex(fx("",Bx(Ue))){constructor(){super(),this.type="button",this.disabled=!1,this.look="default",this.color="default",this.compact=!1,this.state=void 0,Ix(this,mo),this.addEventListener("click",this._onHostClick)}getFormElement(){return this._button}async focus(){await this.updateComplete,this._button.focus()}async blur(){await this.updateComplete,this._button.blur()}async click(){await this.updateComplete,this._button.click()}_onHostClick(n){if(this.disabled){n.preventDefault(),n.stopImmediatePropagation();return}if(this._internals?.form)switch(this.type){case"reset":this._internals.form.reset();break;case"button":break;default:this._internals.form.requestSubmit?this._internals.form.requestSubmit():this._internals.form.dispatchEvent(new SubmitEvent("submit"));break}this._togglePopover()}updated(n){super.updated(n),n.has("state")&&(clearTimeout(Px(this,mo)),(this.state==="success"||this.state==="failed")&&t4(this,mo,setTimeout(()=>this.state=void 0,2e3)))}renderState(){let n;switch(this.state){case"waiting":Hi(this,"uui-loader-circle"),n=Ot`<uui-loader-circle id="loader"></uui-loader-circle>`;break;case"success":Hi(this,"uui-icon"),n=Ot`<uui-icon
          name="check"
          .fallback=${Kx.strings[0]}></uui-icon>`;break;case"failed":Hi(this,"uui-icon"),n=Ot`<uui-icon
          name="wrong"
          .fallback=${Jx.strings[0]}></uui-icon>`;break;default:return Rt}return Ot`<div id="state">${n}</div>`}render(){return this.href?Ot`
          <a
            id="button"
            aria-label=${xn(this.label)}
            href=${xn(this.disabled?void 0:this.href)}
            target=${xn(this.target||void 0)}
            rel=${xn(this.rel||xn(this.target==="_blank"?"noopener noreferrer":void 0))}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </a>
        `:Ot`
          <button
            id="button"
            type=${this.type}
            ?disabled=${this.disabled}
            aria-label=${xn(this.label)}>
            ${this.renderState()} ${this.renderLabel()}
            <slot name="extra"></slot>
          </button>
        `}};mo=new WeakMap;xe.styles=[Xx,Re`
      :host {
        position: relative;
        display: inline-flex;
        margin-left: calc(var(--uui-button-merge-border-left, 0) * -1px);
        --uui-button-padding-left-factor: 3;
        --uui-button-padding-right-factor: 3;
        --uui-button-padding-top-factor: 1;
        --uui-button-padding-bottom-factor: 1;

        min-height: var(--uui-button-height, var(--uui-size-11,33px));
        max-height: 100%;
        cursor: pointer;

        text-align: center;
        font-size: var(--uui-button-font-size, inherit);
        font-weight: var(--uui-button-font-weight, 500);
        transition:
          background-color 80ms,
          border-color 80ms,
          color 80ms;
      }

      :host([compact]) {
        --uui-button-padding-left-factor: 1;
        --uui-button-padding-right-factor: 1;
        --uui-button-padding-top-factor: 0;
        --uui-button-padding-bottom-factor: 0;
      }

      .label {
        line-height: 1; /** needed to reset 'a > span' */
        transition: opacity 120ms;
        display: flex;
        gap: var(--uui-size-1,3px);
        align-items: center;
      }

      :host([state]:not([state=''])) .label {
        opacity: 0;
      }

      #state {
        position: absolute;
        opacity: 0;
        animation-name: fadeIn;
        animation-delay: 40ms;
        animation-duration: 360ms;
        animation-fill-mode: forwards;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        align-items: center;
      }

      #button {
        width: 100%;
        background-color: transparent;
        color: inherit;
        font-size: inherit;
        border-radius: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-align: inherit;
        border: none;
        cursor: inherit;

        display: inline-flex;
        align-items: center;
        justify-content: var(--uui-button-content-align, center);

        /* for anchor tag: */
        text-decoration: none;
        color: currentColor;
        line-height: inherit;

        border-width: var(--uui-button-border-width, 1px);
        border-style: solid;
        border-radius: var(
          --uui-button-border-radius,
          var(--uui-border-radius,3px)
        );
        cursor: pointer;

        padding: calc(var(--uui-size-2,6px) * var(--uui-button-padding-top-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-right-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-bottom-factor))
          calc(var(--uui-size-2,6px) * var(--uui-button-padding-left-factor));

        box-shadow: none;

        transition: var(--uui-button-transition, none);
      }

      #button:focus-visible {
        outline: 2px solid var(--color-emphasis);
      }

      button[disabled]:active,
      a:not([href]):active {
        animation: ${Zx};
      }

      /* ANIMATIONS */
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      #icon-check,
      #icon-wrong {
        display: grid;
        place-items: center;
        width: 1.5em;
      }

      #loader {
        font-size: 1.5em;
      }
      :host([look]:not([look=''])) #loader {
        color: inherit;
      }

      /* edge case for default color */
      :host(:not([color]):not([look='primary'])),
      :host([color='']:not([look='primary'])),
      :host([color='default']:not([look='primary'])) {
        --uui-button-contrast-hover: var(--uui-color-default-emphasis,#3544b1);
      }

      :host([color='warning'][look='outline']) #button,
      :host([color='warning'][look='placeholder']) #button {
        --uui-button-contrast-hover: var(--color-standalone);
      }

      /** Button color attribute: */
      #button {
        --color: var(--uui-color-default,#1b264f);
        --color-standalone: var(--uui-color-default-standalone,rgb(
    28,
    35,
    59
  ));
        --color-emphasis: var(--uui-color-default-emphasis,#3544b1);
        --color-contrast: var(--uui-color-default-contrast,#fff);
      }
      :host([color='positive']) #button {
        --color: var(--uui-color-positive,#0b8152);
        --color-standalone: var(--uui-color-positive-standalone,rgb(
    10,
    115,
    73
  ));
        --color-emphasis: var(--uui-color-positive-emphasis,rgb(
    13,
    155,
    98
  ));
        --color-contrast: var(--uui-color-positive-contrast,#fff);
      }
      :host([color='warning']) #button {
        --color: var(--uui-color-warning,#fbd142);
        --color-standalone: var(--uui-color-warning-standalone,#a17700);
        --color-emphasis: var(--uui-color-warning-emphasis,rgb(
    251,
    224,
    101
  ));
        --color-contrast: var(--uui-color-warning-contrast,#000);
      }
      :host([color='danger']) #button {
        --color: var(--uui-color-danger,#d42054);
        --color-standalone: var(--uui-color-danger-standalone,rgb(
    191,
    33,
    78
  ));
        --color-emphasis: var(--uui-color-danger-emphasis,rgb(
    226,
    60,
    107
  ));
        --color-contrast: var(--uui-color-danger-contrast,white);
      }
      :host([color='invalid']) #button {
        --color: var(--uui-color-invalid,#d42054);
        --color-standalone: var(--uui-color-invalid-standalone,rgb(
    191,
    33,
    78
  ));
        --color-emphasis: var(--uui-color-invalid-emphasis,rgb(
    226,
    60,
    107
  ));
        --color-contrast: var(--uui-color-invalid-contrast,white);
      }
      :host([disabled]) #button {
        --color: var(--uui-color-disabled,#f3f3f5);
        --color-standalone: var(--uui-color-disabled-contrast,#c4c4c4);
        --color-emphasis: var(--uui-color-disabled,#f3f3f5);
        --color-contrast: var(--uui-color-disabled-contrast,#c4c4c4);

        cursor: default;
      }

      /** Button look attribute: */
      /* DEFAULT */
      #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);
      }
      :host(:not([disabled]):hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, transparent);
      }

      /* PRIMARY */
      :host([look='primary']) #button {
        background-color: var(--uui-button-background-color, var(--color));
        color: var(--uui-button-contrast, var(--color-contrast));
        border-color: var(--uui-button-border-color, transparent);

        /* special for primary: */
        font-weight: var(--uui-button-font-weight, 700);
      }

      :host([look='primary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--color-emphasis)
        );
        color: var(--uui-button-contrast-hover, var(--color-contrast));
        border-color: var(--uui-button-border-color-hover, transparent);
      }

      /* special outline offset tof primary style so you can see the outline */
      :host([look='primary']) #button:focus-visible {
        outline-offset: 2px;
      }

      :host([look='primary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }
      /* SECONDARY */
      :host([look='secondary']) #button {
        background-color: var(
          --uui-button-background-color,
          var(--uui-color-surface-alt,#f3f3f5)
        );
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(--uui-button-border-color, transparent);

        /* special for secondary: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='secondary']:hover) #button {
        background-color: var(
          --uui-button-background-color-hover,
          var(--uui-color-surface-emphasis,rgb(
    250,
    250,
    250
  ))
        );
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover, transparent);
      }
      :host([look='secondary'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-contrast));
        border-color: var(--uui-button-border-color-disabled, var(--color));
      }

      /* OUTLINE */
      :host([look='outline']) #button {
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(
          --uui-button-border-color,
          var(--uui-color-border-standalone,#c2c2c2)
        );

        /* special for outline: */
        font-weight: var(--uui-button-font-weight, 700);
      }
      :host([look='outline']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover);
      }
      :host([look='outline'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          transparent
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }

      /* PLACEHOLDER */
      :host([look='placeholder']) #button {
        border-style: dashed;
        background-color: var(--uui-button-background-color, transparent);
        color: var(--uui-button-contrast, var(--color-standalone));
        border-color: var(
          --uui-button-border-color,
          var(--uui-color-border-standalone,#c2c2c2)
        );
      }
      :host([look='placeholder']:not([disabled]):hover) #button {
        background-color: var(--uui-button-background-color-hover, transparent);
        color: var(--uui-button-contrast-hover, var(--color-standalone));
        border-color: var(--uui-button-border-color-hover);
      }
      :host([look='placeholder'][disabled]) #button {
        background-color: var(
          --uui-button-background-color-disabled,
          var(--color)
        );
        color: var(--uui-button-contrast-disabled, var(--color-standalone));
        border-color: var(
          --uui-button-border-color-disabled,
          var(--color-standalone)
        );
      }
    `];Ye([ut({type:String,reflect:!0})],xe.prototype,"type",2);Ye([ut({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);Ye([ut({reflect:!0})],xe.prototype,"look",2);Ye([ut({reflect:!0})],xe.prototype,"color",2);Ye([ut({type:Boolean,reflect:!0})],xe.prototype,"compact",2);Ye([ut({type:String,reflect:!0})],xe.prototype,"state",2);Ye([ut({type:String})],xe.prototype,"href",2);Ye([ut({type:String})],xe.prototype,"target",2);Ye([ut({type:String})],xe.prototype,"rel",2);Ye([x1("#button")],xe.prototype,"_button",2);xe=Ye([Sl("uui-button")],xe);H.lazy(()=>tl(()=>import("./index-zioTSqyj.js"),[]).then(n=>({default:n.ReactQueryDevtools})));const e4=new Wv({defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:3e4,gcTime:5*6e4,retry:1}}});pb.createRoot(document.getElementById("root")).render(x.jsx(H.StrictMode,{children:x.jsx(H.Suspense,{fallback:null,children:x.jsx(im,{future:{v7_relativeSplatPath:!0,v7_startTransition:!0},children:x.jsxs(jA,{children:[x.jsx(UA,{}),x.jsxs(Pv,{client:e4,children:[x.jsx(_A,{}),!1]})]})})})}));export{Ly as C,gA as H,n2 as L,z2 as O,t2 as W,tl as _,f1 as a,mA as b,Ne as c,X as d,_2 as e,s4 as f,r4 as g,n1 as h,O2 as l,o4 as m,u4 as n,M2 as u,c4 as y};
