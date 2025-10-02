import{j as o}from"./query-DJ2Df_pl.js";import{r as d}from"./react-fVXvAP8Z.js";import{b as T}from"./CreditsPage-Bwy9BWTM.js";import{c as $,d as i,C as I,h as z,W as N}from"./index-CtR4jyxL.js";import{d as H,C as F,H as R,T as _,c as W,h as A,D as G}from"./PurchasedTable.styles-DFAhQoT-.js";import"./login_background_2-B25p5Ake.js";import"./i18n-kcDNZBP3.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],X=$("chevrons-left",O);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],V=$("chevrons-right",K),Y=d.forwardRef(({children:e,...u},h)=>o.jsx("uui-scroll-container",{ref:h,...u,children:e}));Y.displayName="UuiHScrollBase";const q=i(Y)`
  display: block;
  width: 100%;
  height: auto;

  .uui-scroll-container__scroll {
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .uui-scroll-container__scroll.can-pan-x {
    cursor: grab;
    touch-action: pan-x;
    overscroll-behavior-x: contain;
    overscroll-behavior-y: none;
  }

  .uui-scroll-container__scroll.is-dragging {
    cursor: grabbing;
  }
`,Q=i(F)`
  max-height: none;
  overflow: visible;
`,Z=i(R)``,ee=i(_)``,oe=i.button`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: none;
  background: none;
  color: ${({theme:e})=>e.colors.otherIcons};
  cursor: pointer;
  &:hover {
    color: ${({theme:e})=>e.colors.icon};
  }
  &:focus-visible {
    outline: 1px solid ${({theme:e})=>e.colors.focusRing};
  }
`,B=d.forwardRef((e,u)=>o.jsx("uui-table",{ref:u,...e}));B.displayName="UUITableBase";const k=i(W)`
  min-width: 0;
  padding: clamp(12px, 1.2vw, 18px) clamp(16px, 1.8vw, 26px);
`,te=H,ne=i("uui-table-head")`
  background: ${({theme:e})=>e.colors.tableHeadBackground};
  `,re=i(B)`
  width: 100%;
  max-width: 100%;

  --uui-table-column-gap: 0px;
  --uui-table-head-cell-padding: 0px;
  --uui-table-cell-padding: 0px;
  --tx-cell-max: 220px;

  uui-table-head-cell,
  uui-table-cell {
    --uui-color-border: transparent;
  }

  &::part(head) {
    background: ${({theme:e})=>e.colors.tableHeadBackground};
  }
  &::part(head-cell) {
    color: ${({theme:e})=>e.colors.tableHeadColor};
    font-size: 16px;
    font-weight: 400;
  }

  uui-table-cell {
    color: ${({theme:e})=>e.colors.tableColor};
    background-color: ${({theme:e})=>e.colors.tableCellBackground};
  }

  uui-table-head-cell::part(base),
  uui-table-cell::part(base) {
    padding: 0;
    min-width: 0;
    box-sizing: border-box;
  }

  uui-table-head::part(row),
  uui-table-row::part(row) {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    column-gap: 0;
    min-width: 0;
  }

  uui-table-head-cell
    > ${k},
    uui-table-row
    uui-table-cell
    > ${k} {
    box-shadow: inset 0 -1px ${({theme:e})=>e.colors.borderLight};
  }
  uui-table-row:last-of-type uui-table-cell > ${k} {
    box-shadow: none;
  }

  uui-table-head-cell[clip-text],
  uui-table-cell[clip-text] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 1439px) {
    min-width: 1200px;
    --tx-cell-max: none;
    uui-table-head::part(row),
    uui-table-row::part(row) {
      grid-template-columns: repeat(6, 200px);
    }
  }
`,ae=i.span`
  display: block;
  min-width: 0;
  max-width: var(--tx-cell-max);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ie=i.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  max-width: var(--tx-cell-max);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    color: ${({theme:e})=>e.colors.icon};
  }
`,le=i(A)`
  color: ${({theme:e})=>e.colors.tableHeadColor};
  flex-shrink: 0;
`,se=i.span`
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
  clip-path: inset(50%);
`,ce=i.div`
  display: grid;

  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: 'total pager size';

  align-items: center;
  padding: 14px 16px;
  background: ${({theme:e})=>e.colors.tableHeadBackground};
  border-top: 1px solid ${({theme:e})=>e.colors.borderLight};
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  gap: 8px;
  min-width: 0;

  .tx-total {
    grid-area: total;
    justify-self: start;
    min-width: 0;
  }
  .tx-pager {
    grid-area: pager;
    justify-self: center;
    min-width: 0;
  }
  .tx-size {
    grid-area: size;
    justify-self: end;
    min-width: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr auto;
    grid-template-areas:
      'total size'
      'pager pager';
    row-gap: 10px;
  }
`,de=i.span`
  padding-left: 8px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.textMuted};
  strong {
    color: ${({theme:e})=>e.colors.textPrimary};
    font-weight: 700;
  }
`,ue=i.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
`,pe=i.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,E=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 34px;
  height: 34px;
  margin: 0 4px;
  color: ${({theme:e})=>e.colors.textMuted};
`,U=i.button`
  min-width: 34px;
  height: 34px;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  background: ${({theme:e})=>e.colors.paginationBackground};
  color: ${({theme:e})=>e.colors.paginationColor};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  line-height: 0;

  svg {
    display: block;
    width: 16px;
    height: 16px;
    color: currentColor;
  }

  &.active,
  &[aria-current='page'] {
    background: ${({theme:e})=>e.colors.paginationActiveBackground};
    color: ${({theme:e})=>e.colors.paginationActiveColor};
    box-shadow: inset 0 0 0 1px
      ${({theme:e})=>e.colors.paginationActiveShadowColor};
    font-weight: 700;
  }

  &:hover {
    background: ${({theme:e})=>e.colors.paginationActiveHoverBackground};
    color: ${({theme:e})=>e.colors.paginationActiveHoverColor};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,j=[{key:"invoiceDate",label:"Invoice date",sortable:!0},{key:"product",label:"Product"},{key:"amount",label:"Amount"},{key:"period",label:"Period"},{key:"renewalDate",label:"Renewal Date",sortable:!0},{key:"comment",label:"Comment"}],me=i.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`,he=i.span`
  color: ${({theme:e})=>e.colors.textMuted};
  font-size: 14px;
`,ge=i.div`
  position: relative;
  display: inline-block; 
`,xe=i.button`
  height: 34px;
  padding: 0 32px 0 12px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  background: ${({theme:e})=>e.colors.pageBackground};
  color: ${({theme:e})=>e.colors.textPrimary};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;

  &:hover {
    background: ${({theme:e})=>e.colors.hoverBackground};
  }
  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px ${({theme:e})=>e.colors.focusRing};
  }
`,we=i.span`
  font-weight: 600;
`,fe=i.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.colors.iconNeutral};
  pointer-events: none;
`,ve=i.div`
  position: absolute;
  z-index: 20;

  ${({$placement:e})=>e==="down"?"top: calc(100% + 6px); transform-origin: top center;":"bottom: calc(100% + 6px); transform-origin: bottom center;"}

  left: 0;
  ${({$fit:e})=>e==="trigger"?`
        width: 100%;
        max-width: 100%;
      `:`
        width: max-content; 
        min-width: 100%;   
      `}

  border-radius: 12px;
  background: ${({theme:e})=>e.colors.flyoutBg};
  color: ${({theme:e})=>e.colors.flyoutText};
  border: 1px solid ${({theme:e})=>e.colors.flyoutBorder};
  box-shadow: ${({theme:e})=>e.colors.flyoutShadow};
  padding: 6px 0;
  max-height: ${({$maxHeight:e})=>e}px;
  overflow-y: auto;

  &:hover {
    background: ${({theme:e})=>e.colors.hoverBackground};
  }
`,be=i.div`
  height: 34px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${({theme:e})=>e.colors.hoverBackground};
  }
  &[aria-selected='true'],
  &[data-selected] {
    background: ${({theme:e})=>e.colors.inputBackground};
    font-weight: 700;
  }

  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px ${({theme:e})=>e.colors.focusRing};
  }
`;function De({value:e=10,onChange:u,options:h=[10,25,50],label:a="Items per page",placement:r="auto",maxMenuHeight:l=240,showLabel:w=!0,fit:f="trigger"}){const[x,p]=d.useState(!1),[m,b]=d.useState(e),[C,J]=d.useState("down"),v=d.useRef(null);d.useEffect(()=>b(e),[e]),d.useLayoutEffect(()=>{if(!x)return;function t(){if(r!=="auto"){J(r);return}if(!v.current)return;const c=v.current.getBoundingClientRect(),g=window.innerHeight-c.bottom,y=c.top,M=Math.min(h.length*36+12,l),S=g<M&&y>g;J(S?"up":"down")}t();const n=()=>t();return window.addEventListener("resize",n),window.addEventListener("scroll",n,!0),()=>{window.removeEventListener("resize",n),window.removeEventListener("scroll",n,!0)}},[x,r,h.length,l]),d.useEffect(()=>{function t(c){v.current&&(v.current.contains(c.target)||p(!1))}function n(c){c.key==="Escape"&&p(!1)}return document.addEventListener("mousedown",t),document.addEventListener("keydown",n),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("keydown",n)}},[]);function D(t){b(t),u?.(t),p(!1)}return o.jsxs(me,{children:[w&&o.jsx(he,{children:a}),o.jsxs(ge,{ref:v,children:[o.jsxs(xe,{type:"button","aria-haspopup":"listbox","aria-expanded":x,"aria-label":a,onClick:()=>p(t=>!t),children:[o.jsx(we,{children:m}),o.jsx(fe,{"aria-hidden":!0,children:o.jsx(A,{size:14})})]}),x&&o.jsx(ve,{role:"listbox","aria-label":a,$placement:C,$maxHeight:l,$fit:f,children:h.map(t=>o.jsx(be,{role:"option","aria-selected":t===m,onClick:()=>D(t),onKeyDown:n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),D(t))},tabIndex:0,"data-selected":t===m?"":void 0,children:t},t))})]})]})}const P=3;function ye({totalItems:e,pageSize:u,onPageSizeChange:h,currentPage:a,onPageChange:r}){const l=d.useMemo(()=>Math.max(1,Math.ceil(e/Math.max(1,u))),[e,u]),w=d.useMemo(()=>l<=P?1:Math.floor((a-1)/P)*P+1,[a,l]),f=Math.min(w+P-1,l),x=Array.from({length:f-w+1},(n,c)=>w+c),p=w>1,m=f<l,b=()=>r(1),C=()=>r(Math.max(1,a-1)),J=()=>r(Math.min(l,a+1)),v=()=>r(l),D=a<=1,t=a>=l;return o.jsxs(ce,{children:[o.jsx("div",{className:"tx-total",children:o.jsxs(de,{children:["Total Items: ",o.jsx("strong",{children:e})]})}),o.jsx("div",{className:"tx-pager","aria-label":"Transactions pagination",children:o.jsxs(ue,{children:[o.jsx(U,{className:"first",onClick:b,disabled:D,"aria-label":"First page",children:o.jsx(X,{size:16,"aria-hidden":!0})}),o.jsx(U,{onClick:C,disabled:D,"aria-label":"Previous page",children:o.jsx(I,{size:16,"aria-hidden":!0})}),o.jsxs(pe,{className:"numbers",children:[p&&o.jsx(E,{"aria-hidden":!0,children:"…"}),x.map(n=>o.jsx(U,{onClick:()=>r(n),"aria-current":n===a?"page":void 0,className:n===a?"active":void 0,children:n},n)),m&&o.jsx(E,{"aria-hidden":!0,children:"…"})]}),o.jsx(U,{onClick:J,disabled:t,"aria-label":"Next page",children:o.jsx(z,{size:16,"aria-hidden":!0})}),o.jsx(U,{className:"last",onClick:v,disabled:t,"aria-label":"Last page",children:o.jsx(V,{size:16,"aria-hidden":!0})})]})}),o.jsx("div",{className:"tx-size",children:o.jsx(De,{value:u,onChange:h,placement:"up",fit:"trigger"})})]})}function Je(e,{wheelToX:u=!0,spaceToDrag:h=!0}={}){d.useEffect(()=>{const a=e.current;if(!a)return;const r=a.querySelector(".uui-scroll-container__scroll")??a;let l=!1,w=!1,f=0,x=0,p=!1;const m=()=>{const s=p;p=r.scrollWidth-r.clientWidth>1,p!==s&&r.classList.toggle("can-pan-x",p)};m();const b=new ResizeObserver(m);b.observe(r);const C=new MutationObserver(m);C.observe(r,{childList:!0,subtree:!0,attributes:!0});const J=()=>{m()};r.addEventListener("scroll",J,{passive:!0});const v=s=>{s.code==="Space"&&(w=!0)},D=s=>{s.code==="Space"&&(w=!1)};h&&(window.addEventListener("keydown",v),window.addEventListener("keyup",D));const t=()=>{document.body.style.userSelect="none",document.documentElement.style.cursor="grabbing",r.classList.add("is-dragging")},n=()=>{document.body.style.userSelect="",document.documentElement.style.cursor="",r.classList.remove("is-dragging")},c=s=>{const L=s.pointerType==="touch";!p||!L&&h&&!w||s.button!==0&&!L||(l=!0,f=s.clientX,x=r.scrollLeft,r.setPointerCapture?.(s.pointerId),t(),s.preventDefault())},g=s=>{l&&(r.scrollLeft=x-(s.clientX-f),s.preventDefault())},y=s=>{l&&(l=!1,r.releasePointerCapture?.(s.pointerId),n())},M=s=>{if(!u||!p||Math.abs(s.deltaX)>Math.abs(s.deltaY))return;const L=s.composedPath?.()??[];!L.includes(r)&&!L.includes(a)||(r.scrollLeft+=s.deltaY,s.preventDefault())};a.addEventListener("pointerdown",c,{passive:!1}),window.addEventListener("pointermove",g,{passive:!1,capture:!0}),window.addEventListener("pointerup",y,{passive:!0,capture:!0}),window.addEventListener("pointercancel",y,{passive:!0,capture:!0}),a.addEventListener("wheel",M,{passive:!1});const S=()=>m();return window.addEventListener("resize",S),()=>{a.removeEventListener("pointerdown",c),window.removeEventListener("pointermove",g,{capture:!0}),window.removeEventListener("pointerup",y,{capture:!0}),window.removeEventListener("pointercancel",y,{capture:!0}),a.removeEventListener("wheel",M),window.removeEventListener("resize",S),r.removeEventListener("scroll",J),b.disconnect(),C.disconnect(),h&&(window.removeEventListener("keydown",v),window.removeEventListener("keyup",D)),n()}},[e,u,h])}function Ce({rows:e=[]}){const[u,h]=d.useState(null),[a,r]=d.useState("asc"),[l,w]=d.useState(10),[f,x]=d.useState(1),p=d.useMemo(()=>u?[...e].sort((t,n)=>{const c=new Date(t[u]).getTime(),g=new Date(n[u]).getTime();return a==="asc"?c-g:g-c}):e,[e,u,a]),m=d.useMemo(()=>Math.max(1,Math.ceil(p.length/Math.max(1,l))),[p.length,l]);d.useEffect(()=>{f>m&&x(m)},[m,f]),d.useEffect(()=>{x(1)},[l,u,a]);const b=(f-1)*l,C=p.slice(b,b+l),J=t=>{u===t?r(n=>n==="asc"?"desc":"asc"):(h(t),r("asc"))},v=(t,n)=>t[n],D=d.useRef(null);return Je(D,{wheelToX:!0,spaceToDrag:!0}),o.jsxs(Q,{as:T,padded:!1,children:[o.jsxs(Z,{children:[o.jsx(ee,{children:"Transactions"}),o.jsx(oe,{"aria-label":"Download CSV",className:"dl-top",children:o.jsx(G,{size:18,"aria-hidden":!0})})]}),o.jsxs(q,{ref:D,orientation:"horizontal",children:[o.jsx(se,{id:"transactions-desc","aria-hidden":!0,children:"Organization transactions with invoice date, product, amount, period, renewal date, and comment."}),o.jsxs(re,{"aria-label":"Transactions","aria-describedby":"transactions-desc",children:[j.map((t,n)=>o.jsx("uui-table-column",{},n)),o.jsx(ne,{children:j.map(t=>{const n=!!t.sortable,c=u===t.key;return o.jsx("uui-table-head-cell",{"clip-text":!0,sortable:n?"":void 0,order:c?a:"",onClick:()=>n&&J(t.key),style:{cursor:n?"pointer":"default"},title:t.label,children:o.jsxs(k,{as:"span",children:[o.jsx(te,{title:t.label,children:t.label}),n&&o.jsx(le,{size:14,"aria-hidden":!0,style:{transform:c&&a==="desc"?"rotate(180deg)":"none"}})]})},t.key)})}),C.map((t,n)=>o.jsx("uui-table-row",{children:j.map(c=>{const g=v(t,c.key),y=typeof g=="string"?g:String(g??""),M=c.key==="amount";return o.jsx("uui-table-cell",{"clip-text":!0,children:o.jsx(k,{children:M?o.jsxs(ie,{title:y,"aria-label":y,children:[o.jsx(N,{"aria-hidden":!0,focusable:"false"}),o.jsx("span",{children:g})]}):o.jsx(ae,{title:y,"aria-label":y,children:g})})},c.key)})},b+n))]})]}),o.jsx(ye,{totalItems:p.length,pageSize:l,onPageSizeChange:w,currentPage:f,onPageChange:x})]})}function $e(){const e=[{invoiceDate:"29 Jun, 2025",product:"Cloud Professional",amount:"700",period:"Monthly",renewalDate:"29 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"29 Jun, 2025",product:"Cloud Professional Additional Environment",amount:"105",period:"Monthly",renewalDate:"29 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"01 Jun, 2025",product:"Umbraco Engage Standard",amount:"4780",period:"Yearly",renewalDate:"01 Jun, 2025",comment:"For: flugger.dk - Period: 01-0"},{invoiceDate:"29 Jun, 2025",product:"Cloud Starter",amount:"700",period:"Monthly",renewalDate:"29 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"29 Jun, 2025",product:"Professional Support",amount:"700",period:"Yearly",renewalDate:"29 Jun, 2025",comment:"For: waao.dk - Period: 01-"},{invoiceDate:"30 Jun, 2025",product:"Cloud Professional",amount:"700",period:"Monthly",renewalDate:"30 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"30 Jun, 2025",product:"Cloud Starter",amount:"350",period:"Monthly",renewalDate:"30 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"28 Jun, 2025",product:"Cloud Professional Additional Environment",amount:"105",period:"Monthly",renewalDate:"28 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"28 Jun, 2025",product:"Umbraco Commerce Standard",amount:"990",period:"Monthly",renewalDate:"28 Jun, 2025",comment:"Commerce subscription - JULY"},{invoiceDate:"27 Jun, 2025",product:"Umbraco Engage Plus",amount:"8990",period:"Yearly",renewalDate:"27 Jun, 2025",comment:"For: giftsandmore.com - Annual license"},{invoiceDate:"27 Jun, 2025",product:"CDN Traffic Add-on",amount:"120",period:"Monthly",renewalDate:"27 Jun, 2025",comment:"100GB CDN traffic package"},{invoiceDate:"26 Jun, 2025",product:"Extra Storage 10GB",amount:"25",period:"Monthly",renewalDate:"26 Jun, 2025",comment:"Storage add-on"},{invoiceDate:"26 Jun, 2025",product:"Static IP Add-on",amount:"15",period:"Monthly",renewalDate:"26 Jun, 2025",comment:"Dedicated IP for project"},{invoiceDate:"25 Jun, 2025",product:"Dedicated Worker",amount:"280",period:"Monthly",renewalDate:"25 Jun, 2025",comment:"Background worker for API jobs"},{invoiceDate:"25 Jun, 2025",product:"Umbraco Forms Add-on",amount:"49",period:"Monthly",renewalDate:"25 Jun, 2025",comment:"Forms subscription - JULY"},{invoiceDate:"24 Jun, 2025",product:"Umbraco Deploy Add-on",amount:"69",period:"Monthly",renewalDate:"24 Jun, 2025",comment:"Deploy seats x3"},{invoiceDate:"24 Jun, 2025",product:"Cloud Professional",amount:"700",period:"Monthly",renewalDate:"24 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"23 Jun, 2025",product:"Cloud Professional Additional Environment",amount:"105",period:"Monthly",renewalDate:"23 Jun, 2025",comment:"Staging slot for website"},{invoiceDate:"23 Jun, 2025",product:"Professional Support",amount:"1800",period:"Yearly",renewalDate:"23 Jun, 2025",comment:"Silver plan - 10h SLA"},{invoiceDate:"22 Jun, 2025",product:"Umbraco Commerce Pro",amount:"1990",period:"Monthly",renewalDate:"22 Jun, 2025",comment:"Commerce Pro - JULY"},{invoiceDate:"22 Jun, 2025",product:"Cloud Starter",amount:"350",period:"Monthly",renewalDate:"22 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"21 Jun, 2025",product:"DXP Environment",amount:"3490",period:"Monthly",renewalDate:"21 Jun, 2025",comment:"DXP UAT environment"},{invoiceDate:"21 Jun, 2025",product:"Cloud Professional",amount:"700",period:"Monthly",renewalDate:"21 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"20 Jun, 2025",product:"Extra Storage 50GB",amount:"95",period:"Monthly",renewalDate:"20 Jun, 2025",comment:"Storage expansion"},{invoiceDate:"20 Jun, 2025",product:"Umbraco Heartcore Professional",amount:"1590",period:"Monthly",renewalDate:"20 Jun, 2025",comment:"Headless API - JULY"},{invoiceDate:"19 Jun, 2025",product:"Cloud Professional",amount:"700",period:"Monthly",renewalDate:"19 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"19 Jun, 2025",product:"Professional Support",amount:"4200",period:"Yearly",renewalDate:"19 Jun, 2025",comment:"Gold plan - 25h SLA"},{invoiceDate:"18 Jun, 2025",product:"Cloud Starter",amount:"350",period:"Monthly",renewalDate:"18 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"18 Jun, 2025",product:"CDN Traffic Add-on",amount:"240",period:"Monthly",renewalDate:"18 Jun, 2025",comment:"200GB CDN traffic package"},{invoiceDate:"17 Jun, 2025",product:"Static IP Add-on",amount:"15",period:"Monthly",renewalDate:"17 Jun, 2025",comment:"Dedicated IP for app"},{invoiceDate:"17 Jun, 2025",product:"Cloud Professional Additional Environment",amount:"105",period:"Monthly",renewalDate:"17 Jun, 2025",comment:"Extra environment - QA"},{invoiceDate:"16 Jun, 2025",product:"Umbraco Engage Standard",amount:"4780",period:"Yearly",renewalDate:"16 Jun, 2025",comment:"For: greenworld.io - Annual license"},{invoiceDate:"16 Jun, 2025",product:"Umbraco Forms Add-on",amount:"49",period:"Monthly",renewalDate:"16 Jun, 2025",comment:"Forms subscription - JULY"},{invoiceDate:"15 Jun, 2025",product:"Cloud Professional",amount:"700",period:"Monthly",renewalDate:"15 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"15 Jun, 2025",product:"Umbraco Commerce Standard",amount:"990",period:"Monthly",renewalDate:"15 Jun, 2025",comment:"Commerce subscription - JULY"},{invoiceDate:"14 Jun, 2025",product:"DXP Environment",amount:"3490",period:"Monthly",renewalDate:"14 Jun, 2025",comment:"DXP Preprod environment"},{invoiceDate:"14 Jun, 2025",product:"Cloud Starter",amount:"350",period:"Monthly",renewalDate:"14 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"13 Jun, 2025",product:"Extra Storage 10GB",amount:"25",period:"Monthly",renewalDate:"13 Jun, 2025",comment:"Storage add-on"},{invoiceDate:"13 Jun, 2025",product:"Umbraco Heartcore Business",amount:"2590",period:"Monthly",renewalDate:"13 Jun, 2025",comment:"Headless - Business tier"},{invoiceDate:"12 Jun, 2025",product:"Cloud Professional",amount:"700",period:"Monthly",renewalDate:"12 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"12 Jun, 2025",product:"Professional Support",amount:"900",period:"Yearly",renewalDate:"12 Jun, 2025",comment:"Bronze plan - 5h SLA"},{invoiceDate:"11 Jun, 2025",product:"Umbraco Deploy Add-on",amount:"69",period:"Monthly",renewalDate:"11 Jun, 2025",comment:"Deploy seats x1"},{invoiceDate:"11 Jun, 2025",product:"CDN Traffic Add-on",amount:"360",period:"Monthly",renewalDate:"11 Jun, 2025",comment:"300GB CDN traffic package"},{invoiceDate:"10 Jun, 2025",product:"Cloud Professional Additional Environment",amount:"105",period:"Monthly",renewalDate:"10 Jun, 2025",comment:"Temporary sandbox"},{invoiceDate:"10 Jun, 2025",product:"Cloud Starter",amount:"350",period:"Monthly",renewalDate:"10 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"09 Jun, 2025",product:"Umbraco Commerce Pro",amount:"1990",period:"Monthly",renewalDate:"09 Jun, 2025",comment:"Commerce Pro - JULY"},{invoiceDate:"09 Jun, 2025",product:"Static IP Add-on",amount:"15",period:"Monthly",renewalDate:"09 Jun, 2025",comment:"Dedicated IP for staging"},{invoiceDate:"08 Jun, 2025",product:"Cloud Professional",amount:"700",period:"Monthly",renewalDate:"08 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"08 Jun, 2025",product:"Umbraco Engage Standard",amount:"4780",period:"Yearly",renewalDate:"08 Jun, 2025",comment:"For: acmestore.co - Annual license"},{invoiceDate:"07 Jun, 2025",product:"Extra Storage 50GB",amount:"95",period:"Monthly",renewalDate:"07 Jun, 2025",comment:"Storage expansion"},{invoiceDate:"07 Jun, 2025",product:"Umbraco Forms Add-on",amount:"49",period:"Monthly",renewalDate:"07 Jun, 2025",comment:"Forms subscription - JULY"},{invoiceDate:"06 Jun, 2025",product:"Cloud Starter",amount:"350",period:"Monthly",renewalDate:"06 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"06 Jun, 2025",product:"DXP Environment",amount:"3490",period:"Monthly",renewalDate:"06 Jun, 2025",comment:"DXP Perf environment"},{invoiceDate:"05 Jun, 2025",product:"Cloud Professional",amount:"700",period:"Monthly",renewalDate:"05 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"05 Jun, 2025",product:"Professional Support",amount:"7000",period:"Yearly",renewalDate:"05 Jun, 2025",comment:"Platinum plan - 40h SLA"},{invoiceDate:"04 Jun, 2025",product:"Umbraco Heartcore Professional",amount:"1590",period:"Monthly",renewalDate:"04 Jun, 2025",comment:"Headless API - JULY"},{invoiceDate:"04 Jun, 2025",product:"Cloud Professional Additional Environment",amount:"105",period:"Monthly",renewalDate:"04 Jun, 2025",comment:"Extra environment - staging"},{invoiceDate:"03 Jun, 2025",product:"Umbraco Deploy Add-on",amount:"69",period:"Monthly",renewalDate:"03 Jun, 2025",comment:"Deploy seats x2"},{invoiceDate:"03 Jun, 2025",product:"CDN Traffic Add-on",amount:"120",period:"Monthly",renewalDate:"03 Jun, 2025",comment:"100GB CDN traffic package"},{invoiceDate:"02 Jun, 2025",product:"Cloud Starter",amount:"350",period:"Monthly",renewalDate:"02 Jun, 2025",comment:"Monthly Cloud Usage JULY"},{invoiceDate:"02 Jun, 2025",product:"Static IP Add-on",amount:"15",period:"Monthly",renewalDate:"02 Jun, 2025",comment:"Dedicated IP for prod"},{invoiceDate:"01 Jun, 2025",product:"Umbraco Engage Standard",amount:"4780",period:"Yearly",renewalDate:"01 Jun, 2025",comment:"For: finbank.eu - Annual license"},{invoiceDate:"01 Jun, 2025",product:"Cloud Professional",amount:"700",period:"Monthly",renewalDate:"01 Jun, 2025",comment:"Monthly Cloud Usage JULY"}];return o.jsx(Ce,{rows:e})}export{$e as default};
