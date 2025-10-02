const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["Umb-Credits-GH-Pages/assets/SpendingChart.container-CxY09nSi.js","Umb-Credits-GH-Pages/assets/query-DJ2Df_pl.js","Umb-Credits-GH-Pages/assets/react-fVXvAP8Z.js","Umb-Credits-GH-Pages/assets/index-CtR4jyxL.js","Umb-Credits-GH-Pages/assets/i18n-kcDNZBP3.js","Umb-Credits-GH-Pages/assets/index-DK5grVoZ.css","Umb-Credits-GH-Pages/assets/charts-licedpqZ.js","Umb-Credits-GH-Pages/assets/login_background_2-B25p5Ake.js","assets/PurchasedTable.container-RJ7XSr_V.js","Umb-Credits-GH-Pages/assets/PurchasedTable.styles-DFAhQoT-.js","Umb-Credits-GH-Pages/assets/TransactionsTable.container-CmJfV1YD.js"])))=>i.map(i=>d[i]);
import{d as i,W as j,m,u as b,l as $,f as y,a as w,O as v,H as k,_ as g}from"./index-CtR4jyxL.js";import{j as e}from"./query-DJ2Df_pl.js";import{B as _}from"./login_background_2-B25p5Ake.js";import{r as o}from"./react-fVXvAP8Z.js";const C=i.div`
  display: grid;
  gap: 16px;
`,T=i.div`
  display: grid;
`,S=i.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  align-items: stretch;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr;
    > * {
      min-width: 0;
    }
  }
`,R=i.div`
  display: grid;
`,z=i.div`
  height: 160px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background-color: #273a95;
  color: ${({theme:r})=>r.colors.textWhite};
  background-image:
    radial-gradient(
      100% 100% at 0% 0%,
      rgba(255, 255, 255, 0.06) 0%,
      rgba(255, 255, 255, 0) 60%
    ),
    url(${_});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
`,B=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  height: 100%; 
  padding: 39px 39px 39px 60px;
`,E=i.div`
  display: flex;
  align-items: center;
  gap: 16px; 
`,I=i.div`
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  color: ${({theme:r})=>r.colors.textWhite};
  svg {
    width: 64px;
    height: 64px;
  }
`,P=i.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: #82919b;
`,L=i.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,A=i.div`
  display: flex;
  align-items: center; 
  gap: 18px;
  line-height: 1;
  flex-wrap: wrap;
`,H=i.div`
  font-size: clamp(2rem, 3.8vw, 3rem);
  font-weight: 800;
  letter-spacing: 0.1px;
  line-height: 1.05;
  white-space: nowrap;
`,W=i.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 12px;
  background: rgba(10, 18, 54, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(2px);
  white-space: nowrap;
  font-size: 1rem;
  transform: translateY(1px);

  .muted {
    opacity: 0.8;
  }
  .num,
  .days {
    font-weight: 800;
    color: #fff;
  }
`;i.div`
  display: flex;
  align-items: center;
`;const F=i.div`
  font-size: 0.85rem;
  color: #82919b;
`;i.button`
  height: 38px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }
  &:focus-visible {
    outline: 2px solid ${({theme:r})=>r.colors.focusRing};
    outline-offset: 2px;
  }
`;function O({icon:r=e.jsx(j,{size:64,strokeWidth:2.5}),totalLabel:s="Total balance",totalFormatted:d,expiringAmountFormatted:a,expiringInLabel:l="credits expiring in",expiringDaysFormatted:c,subtitle:p="The credits are bought with Euro € currency"}){return e.jsx(z,{children:e.jsx(B,{children:e.jsxs(E,{children:[e.jsx(I,{"aria-hidden":"true",children:r}),e.jsxs(L,{children:[e.jsx(P,{children:s}),e.jsxs(A,{children:[e.jsx(H,{children:d}),e.jsxs(W,{children:[e.jsx("span",{className:"num",children:a}),e.jsx("span",{className:"muted",children:l}),e.jsx("span",{className:"days",children:c})]})]}),e.jsx(F,{children:p})]})]})})})}const D=m`
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
`,N=m`
  0%   { background-position: 200% 0; }
  100% { background-position:-200% 0; }
`,n=i.div`
  width: ${({$w:r="100%"})=>typeof r=="number"?`${r}px`:r};
  height: ${({$h:r=16})=>typeof r=="number"?`${r}px`:r};
  border-radius: ${({$r:r=8})=>typeof r=="number"?`${r}px`:r};

  background: linear-gradient(
    90deg,
    ${({theme:r})=>r.colors.skeleton.base} 0%,
    ${({theme:r})=>r.colors.skeleton.highlight} 50%,
    ${({theme:r})=>r.colors.skeleton.base} 100%
  );
  background-size: 200% 100%;
  animation: ${({$dir:r="ltr"})=>r==="rtl"?N:D}
    1.2s ease-in-out infinite;
`,t=i(n)`
  height: 12px;
  border-radius: 6px;
`,G=i(n)`
  border-radius: 9999px;
`,x=i.div`
  height: ${({$y:r=12})=>`${r}px`};
`,V=i.div`
  background: ${({theme:r})=>r.colors.pageBackground};
  border: 1px solid ${({theme:r})=>r.colors.borderLight};
  border-radius: 14px;
  padding: 16px;
  height: 158px;
  min-height: 158px;
  max-height: 158px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 64px 1fr;
  column-gap: 16px;
  align-items: center;
`;function M(){return e.jsxs(V,{children:[e.jsx(G,{$w:64,$h:64}),e.jsxs("div",{children:[e.jsx(t,{$w:140}),e.jsx(x,{$y:10}),e.jsx(t,{$w:260,$h:18}),e.jsx(x,{$y:10}),e.jsx(t,{$w:"60%"})]})]})}function U(){const{data:r,isLoading:s,isError:d}=b(v);if(s&&!r)return e.jsx(M,{});const a=$(r?.history),l=y(a?.currentBalance),c=w(a?.expiring),p="— days",u=s&&!a?"…":l,f=s&&!a?"…":c;return e.jsx(O,{totalFormatted:u,expiringAmountFormatted:f,expiringDaysFormatted:d?"—":p})}const Y=i.section`
  width: 100%;
  margin: 0;
  background: ${({theme:r})=>r.colors.pageBackground};
  border: 1px solid ${({theme:r})=>r.colors.borderLight};
  border-radius: 14px;

  padding: ${({$padded:r})=>r?"16px":"0"};

  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 320px;
  flex: 1 1 auto;
  overflow: auto;

  > h3 {
    margin: 0 0 12px;
    font-size: 1rem;
    font-weight: 700;
  }
`,q=i.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
`;function h({children:r,padded:s=!0}){return e.jsx(Y,{$padded:s,children:r})}function J(){return e.jsxs(h,{padded:!0,children:[e.jsx("h3",{children:"12 months spending forecast"}),e.jsx(q,{style:{height:320},children:e.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"1fr 24px",gap:12},children:[e.jsx(n,{$w:"100%",$h:"100%",$r:10}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gap:8},children:Array.from({length:12}).map((r,s)=>e.jsx(t,{},s))})]})})]})}function K(){return e.jsxs(h,{padded:!1,children:[e.jsxs("div",{style:{padding:16,borderBottom:"1px solid var(--border, rgba(0,0,0,.06))",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(t,{$w:160,$h:16}),e.jsx(n,{$w:28,$h:28,$r:8})]}),e.jsxs("div",{style:{padding:16},children:[Array.from({length:5}).map((r,s)=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:20,alignItems:"center",marginBottom:16},children:Array.from({length:4}).map((d,a)=>e.jsx(t,{$h:14},a))},s)),e.jsx(x,{$y:4})]})]})}function Q(){return e.jsxs(h,{padded:!1,children:[e.jsxs("div",{style:{padding:16,display:"grid",gridTemplateColumns:"1fr auto auto",gap:12,alignItems:"center"},children:[e.jsx(t,{$w:120}),e.jsx(n,{$w:220,$h:32,$r:8}),e.jsx(n,{$w:36,$h:32,$r:8})]}),e.jsx("div",{style:{padding:16},children:Array.from({length:6}).map((r,s)=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr 1fr 1fr 1fr 1fr",gap:20,alignItems:"center",padding:"10px 0"},children:[e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{$w:80}),e.jsx(t,{$w:90}),e.jsx(t,{$w:120}),e.jsx(t,{$w:140})]},s))}),e.jsxs("div",{style:{padding:16,display:"grid",gridTemplateColumns:"1fr auto",alignItems:"center"},children:[e.jsx(t,{$w:140}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{$w:32,$h:28,$r:6}),e.jsx(n,{$w:32,$h:28,$r:6}),e.jsx(n,{$w:32,$h:28,$r:6}),e.jsx(n,{$w:32,$h:28,$r:6}),e.jsx(n,{$w:60,$h:28,$r:6})]})]})]})}const X=o.lazy(()=>g(()=>import("./SpendingChart.container-CxY09nSi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),Z=o.lazy(()=>g(()=>import("./PurchasedTable.container-RJ7XSr_V.js"),__vite__mapDeps([8,1,2,9,3,4,5,7]))),ee=o.lazy(()=>g(()=>import("./TransactionsTable.container-CmJfV1YD.js"),__vite__mapDeps([10,1,2,3,4,5,9,7])));function re(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{canonical:location.href}),e.jsxs(C,{children:[e.jsx(T,{children:e.jsx(U,{})}),e.jsxs(S,{children:[e.jsx(o.Suspense,{fallback:e.jsx(J,{}),children:e.jsx(X,{})}),e.jsx(o.Suspense,{fallback:e.jsx(K,{}),children:e.jsx(Z,{})})]}),e.jsx(R,{children:e.jsx(o.Suspense,{fallback:e.jsx(Q,{}),children:e.jsx(ee,{})})})]})]})}const ae=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));export{Y as C,K as P,J as S,q as a,h as b,ae as c};
