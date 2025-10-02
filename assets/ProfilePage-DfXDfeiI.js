import{j as r}from"./query-DJ2Df_pl.js";import{r as l}from"./react-fVXvAP8Z.js";import{d as t,e as f}from"./index-CtR4jyxL.js";import"./i18n-kcDNZBP3.js";const b=t.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 14px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.borderLight};
`,v=t.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,j=t.img`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  object-fit: cover;
`,y=t.div`
  font-size: 1.375rem;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.textPrimary};
  line-height: 1.2;
`,$=t.div`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.colors.textMuted};
`,k=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,g=t.button`
  height: 36px;
  // padding: 0 14px;
  border-radius: 10px;
  border: 1px solid
    ${({theme:e})=>e.colors.btnBorder||e.colors.borderLight};
  background: ${({theme:e})=>e.colors.collapseButtonBackground};
  color: ${({theme:e})=>e.colors.textPrimary};
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    background 160ms ease,
    border-color 160ms ease,
    filter 60ms ease;

  &:hover {
    background: #eef2f7;
    border-color: ${({theme:e})=>e.colors.borderLight};
    color: ${({theme:e})=>e.colors.brandBlue};
  }
  &:active {
    filter: brightness(0.98);
  }
`,C=t.div`
  display: flex;
  gap: 1rem;
`,w=t.form`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 0.3; // remove it later, when design is clear

  // Neutralize password-manager overlays
  & [data-lastpass-icon-root],
  & .lastpass-inline-icon,
  & [id^='__lpform_'],
  & #lpiframeoverlay {
    display: none !important;
  }
`,N=t.div`flex: 0.7;`,S=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,c=t.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,d=t.label`
  font-size: 0.8125rem;
  color: ${({theme:e})=>e.colors.textMuted};
`,F=t.span`
  color: ${({theme:e})=>e.colors.statusDanger||"#D22D56"};
  font-weight: 700;
`,m=t.input`
  height: 40px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.borderLight};
  background: ${({theme:e})=>e.colors.pillBg||"#f4f6fb"};
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.focusRing};
    background: ${({theme:e})=>e.colors.mainBackground};
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.textSubtle};
  }
`;function A(){const e=localStorage.getItem("userName")||"Ana Andreasen",a=localStorage.getItem("userEmail")||"ana@umbraco.dk",[n,s]=e.trim().split(" ").length===1?[e.trim(),""]:[e.trim().split(" ")[0],e.trim().split(" ").slice(1).join(" ")];return{avatarUrl:localStorage.getItem("userAvatar")||f,name:e,email:a,firstName:n,lastName:s,country:"Denmark"}}function L(){const e=A(),[a,n]=l.useState(e.firstName),[s,p]=l.useState(e.lastName),[i,x]=l.useState(e.country),u=()=>{alert("Change email (mock)")},h=()=>{alert("Change password (mock)")};return r.jsxs(r.Fragment,{children:[r.jsxs(b,{children:[r.jsxs(v,{children:[r.jsx(j,{src:e.avatarUrl,alt:e.name}),r.jsxs("div",{children:[r.jsx(y,{children:e.name}),r.jsx($,{children:e.email})]})]}),r.jsxs(k,{children:[r.jsx(g,{type:"button",onClick:u,children:"Change email"}),r.jsx(g,{type:"button",onClick:h,children:"Change password"})]})]}),r.jsxs(C,{children:[r.jsxs(w,{onSubmit:o=>{o.preventDefault(),alert(`Saved (mock): ${a} ${s}, ${i}`)},children:[r.jsxs(S,{children:[r.jsxs(c,{children:[r.jsx(d,{children:"Name"}),r.jsx(m,{value:a,onChange:o=>n(o.target.value),placeholder:"First name"})]}),r.jsxs(c,{children:[r.jsx(d,{children:"Lastname"}),r.jsx(m,{value:s,onChange:o=>p(o.target.value),placeholder:"Last name"})]})]}),r.jsxs(c,{style:{maxWidth:520},children:[r.jsxs(d,{children:["Country ",r.jsx(F,{children:"*"})]}),r.jsx(m,{value:i,onChange:o=>x(o.target.value),placeholder:"Country",required:!0})]})]}),r.jsx(N,{})]})]})}const D=()=>r.jsx(r.Fragment,{children:r.jsx(L,{})});export{D as default};
