import{j as r}from"./query-DJ2Df_pl.js";import{r as h,d as z}from"./react-fVXvAP8Z.js";import{d as l}from"./index-CtR4jyxL.js";import"./i18n-kcDNZBP3.js";const N=l.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,I=l.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,B=l.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.textPrimary};
`,P=l.article`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 20px;
  align-items: center;
  padding: 24px;
  border-radius: 12px;
  background: ${({theme:t})=>t.colors.tableHeadBackground};
  border: 1px solid ${({theme:t})=>t.colors.borderLight};
`,D=l.div`
  width: 140px;
  height: 140px;
  border-radius: 16px;
  overflow: hidden;
  background: ${({theme:t})=>t.colors.sidebarBackground};
  display: grid;
  place-items: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,M=l.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 10px;
`,L=l.h1`
  margin: 0;
  font-weight: 800;
  line-height: 1.1;
  color: ${({theme:t})=>t.colors.textPrimary};
`,Y=l.p`
  margin: 0;
  max-width: 900px;
  color: ${({theme:t})=>t.colors.otherIcons};
  font-size: 12px;
`,G=l.div`
  margin-top: 8px;
`,K=l.div`
  padding: 24px;
  border-radius: 12px;
  background: ${({theme:t})=>t.colors.tableHeadBackground};
  border: 1px solid ${({theme:t})=>t.colors.borderLight};
  color: ${({theme:t})=>t.colors.otherIcons};
  font-size: 12px;

  strong {
    font-size: 14px;
    font-weight: 600;
    display: block;
    margin-bottom: 6px;
    color: ${({theme:t})=>t.colors.textPrimary};
  }
`,T="data:image/png;base64,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",Q={primary:"primary",secondary:"secondary",danger:"default",outline:"outline",ghost:"default",neutral:"default"},H=t=>t??"primary";function a(t,u,e){e==null||e===!1?t.removeAttribute(u):e===!0?t.setAttribute(u,""):t.setAttribute(u,String(e))}const R=h.forwardRef((t,u)=>{const{size:e="md",variant:k="primary",intent:E,icon:v,iconPosition:j="left",label:m="",onClick:f,className:J,...p}=t,w=h.useRef(null),A=h.useRef(null),x=h.useRef(null),i=h.useRef(null),c=h.useRef(null),y=()=>{const o=A.current;if(o){if(!x.current){const s=document.createElement("div");s.className="uui-slot",x.current=s,o.appendChild(s)}if(!i.current){const s=document.createElement("span");s.className="uui-txt",i.current=s}i.current.textContent=m??""}},O=()=>{const o=x.current;if(o){if(!v){c.current?.remove(),c.current=null,i.current&&!i.current.isConnected&&o.appendChild(i.current);return}c.current||(c.current=document.createElement("uui-icon"),c.current.className="uui-ic"),c.current.setAttribute("name",v),j==="left"?(c.current!==o.firstChild&&o.prepend(c.current),i.current&&i.current!==o.lastChild&&o.appendChild(i.current)):(i.current&&i.current!==o.firstChild&&o.prepend(i.current),c.current!==o.lastChild&&o.appendChild(c.current))}};return h.useLayoutEffect(()=>{const o=w.current;if(!o)return;const s=customElements.get("uui-button");if(!s)return;const n=new s;n.classList.add("uui-btn-host"),n.style.display="inline-block";const b=H(k),g=m??(typeof p["aria-label"]=="string"?p["aria-label"]:"");a(n,"data-size",e),a(n,"data-variant",b),a(n,"look",Q[b]),a(n,"color",E),a(n,"label",g),a(n,"aria-label",g);for(const[d,C]of Object.entries(p))a(n,d,C);return o.appendChild(n),A.current=n,y(),x.current&&!i.current.isConnected&&x.current.appendChild(i.current),O(),requestAnimationFrame(()=>a(n,"data-mounted","true")),typeof u=="function"?u(n):u&&(u.current=n),()=>{n.remove(),A.current=null,x.current=null,i.current=null,c.current=null,typeof u!="function"&&u&&(u.current=null)}},[u]),h.useEffect(()=>{const o=A.current;if(!o)return;const s=H(k),n=m??(typeof p["aria-label"]=="string"?p["aria-label"]:"");a(o,"data-size",e),a(o,"data-variant",s),a(o,"look",Q[s]),a(o,"color",E),a(o,"label",n),a(o,"aria-label",n);for(const[d,C]of Object.entries(p))a(o,d,C);y(),O();let b,g;return f&&(b=d=>f(d),g=d=>{(d.key==="Enter"||d.key===" ")&&f(d)},o.addEventListener("click",b,{capture:!0}),o.addEventListener("keydown",g,{capture:!0})),()=>{b&&o.removeEventListener("click",b,{capture:!0}),g&&o.removeEventListener("keydown",g,{capture:!0})}},[e,k,E,m,v,j,f,JSON.stringify(p)]),r.jsx("span",{ref:w,className:J})});R.displayName="UuiButtonBase";const F=l(R)`
  .uui-slot {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    font: inherit;
    color: inherit;
    pointer-events: none;
  }
  .uui-ic {
    display: inline-flex;
    line-height: 0;
  }

  /* HOST */
  .uui-btn-host {
    box-sizing: border-box;
    display: inline-block;
    background: transparent;
    border: 0;
    border-radius: 10px;

    /* disabling animations on 1st render; enables after [data-mounted] */
    transition: none;

    --uui-button-background-color: transparent;
    --uui-button-background-color-hover: transparent;
    --uui-button-border-color: transparent;
    --uui-button-border-color-hover: transparent;
    --uui-button-border-width: 0;
    --uui-button-transition: none;

    --uui-color-surface: transparent;
    --uui-color-surface-alt: transparent;
    --uui-button-box-shadow: none;

    --uui-button-font-weight: 500;

    --uui-button-contrast: ${({theme:t})=>t.colors.textWhite};
    --uui-button-contrast-hover: var(--uui-button-contrast);
    color: var(--uui-button-contrast);
  }

  .uui-btn-host[data-mounted='true'] {
    transition:
      background 0.3s ease-in-out,
      border-color 0.3s ease-in-out,
      color 0.3s ease-in-out;
  }

  .uui-btn-host:hover {
    color: var(--uui-button-contrast-hover);
  }

  /* Size and tokens */
  .uui-btn-host[data-size='sm'] {
    height: 32px;
    line-height: 32px;
    font-size: 0.875rem;
    border-radius: 10px;
    --uui-button-height: 32px;
    --uui-button-font-size: 0.875rem;
    --uui-button-border-radius: 10px;
  }
  .uui-btn-host[data-size='md'] {
    height: 48px;
    line-height: 48px;
    font-size: 1rem;
    border-radius: 10px;
    --uui-button-height: 48px;
    --uui-button-font-size: 1rem;
    --uui-button-border-radius: 10px;
  }
  .uui-btn-host[data-size='lg'] {
    height: 52px;
    line-height: 52px;
    font-size: 1.125rem;
    border-radius: 10px;
    --uui-button-height: 52px;
    --uui-button-font-size: 1.125rem;
    --uui-button-border-radius: 10px;
  }
  .uui-btn-host[data-size='xl'] {
    height: 56px;
    line-height: 56px;
    font-size: 1.25rem;
    border-radius: 10px;
    --uui-button-height: 56px;
    --uui-button-font-size: 1.25rem;
    --uui-button-border-radius: 10px;
  }

  /* PRIMARY */
  .uui-btn-host[data-variant='primary'] {
    background: ${({theme:t})=>t.colors.primaryButtonColor};
    border: 1px solid ${({theme:t})=>t.colors.primaryButtonColor};
    --uui-button-contrast: ${({theme:t})=>t.colors.textWhite};
    --uui-button-contrast-hover: ${({theme:t})=>t.colors.textWhite};
  }
  .uui-btn-host[data-variant='primary']:hover {
    background: ${({theme:t})=>t.colors.primaryButtonHover};
    border-color: ${({theme:t})=>t.colors.primaryButtonHover};
  }

  /* SECONDARY */
  .uui-btn-host[data-variant='secondary'] {
    background: ${({theme:t})=>t.colors.tableHeadColor};
    border: 1px solid ${({theme:t})=>t.colors.secondaryButtonColor};
    --uui-button-contrast: ${({theme:t})=>t.colors.textWhite};
    --uui-button-contrast-hover: ${({theme:t})=>t.colors.inputColor};
  }
  .uui-btn-host[data-variant='secondary']:hover {
    background: ${({theme:t})=>t.colors.secondaryButtonHover};
    border-color: ${({theme:t})=>t.colors.iconDisabled};
  }

  /* DANGER */
  .uui-btn-host[data-variant='danger'] {
    background: ${({theme:t})=>t.colors.statusDanger};
    border: 1px solid ${({theme:t})=>t.colors.statusDanger};
    --uui-button-contrast: ${({theme:t})=>t.colors.textWhite};
    --uui-button-contrast-hover: ${({theme:t})=>t.colors.textWhite};
  }
  .uui-btn-host[data-variant='danger']:hover {
    background: ${({theme:t})=>t.colors.dangerBgHover};
    border-color: ${({theme:t})=>t.colors.dangerBgHover};
  }

  /* OUTLINE */
  .uui-btn-host[data-variant='outline'] {
    background: transparent;
    border: 1px solid ${({theme:t})=>t.colors.btnBorder};
    --uui-button-contrast: ${({theme:t})=>t.colors.primaryButtonColor};
    --uui-button-contrast-hover: ${({theme:t})=>t.colors.primaryButtonColor};
  }
  .uui-btn-host[data-variant='outline']:hover {
    background: ${({theme:t})=>t.colors.outlineHoverBg};
    border-color: ${({theme:t})=>t.colors.btnBorder};
  }

  /* GHOST */
  .uui-btn-host[data-variant='ghost'] {
    background: transparent;
    border: 0;
    --uui-button-contrast: ${({theme:t})=>t.colors.primaryButtonColor};
    --uui-button-contrast-hover: ${({theme:t})=>t.colors.primaryButtonColor};
  }
  .uui-btn-host[data-variant='ghost']:hover {
    background: ${({theme:t})=>t.colors.ghostHoverBg};
  }

  /* NEUTRAL (logout / theme; 12px radius) */
  .uui-btn-host[data-variant='neutral'] {
    background: ${({theme:t})=>t.colors.collapseButtonBackground};
    border: 1px solid ${({theme:t})=>t.colors.iconDisabled};
    border-radius: 12px;
    --uui-button-border-radius: 12px;
    --uui-button-font-weight: 700;
    --uui-button-contrast: ${({theme:t})=>t.colors.textPrimary};
    --uui-button-contrast-hover: ${({theme:t})=>t.colors.textPrimary};
  }
  .uui-btn-host[data-variant='neutral']:hover {
    background: ${({theme:t})=>t.colors.collapseButtonHover};
    border-color: ${({theme:t})=>t.colors.borderLight};
  }

  /* Disabled */
  .uui-btn-host[disabled],
  .uui-btn-host[disabled]:hover {
    pointer-events: none;
    transition: none !important;

    background: ${({theme:t})=>t.colors.hoverBackground} !important;
    border-color: ${({theme:t})=>t.colors.borderLight} !important;

    --uui-button-contrast: ${({theme:t})=>t.colors.textDisabled} !important;
    --uui-button-contrast-hover: ${({theme:t})=>t.colors.textDisabled} !important;
    color: var(--uui-button-contrast) !important;

    --uui-button-background-color: transparent !important;
    --uui-button-background-color-hover: transparent !important;
    --uui-button-border-color: transparent !important;
    --uui-button-border-color-hover: transparent !important;
    --uui-color-surface: transparent !important;
    --uui-color-surface-alt: transparent !important;
    --uui-button-box-shadow: none !important;
  }
`,q=[{id:"toxic",name:"Toxic",logoUrl:T,description:"Some information aLorem ipsum dolor sit amet, consectetur adipiscing elit..."}];function S(){const t=z(),u=h.useCallback(e=>{localStorage.setItem("orgName",e.name),t("/organization/credits")},[t]);return r.jsxs(N,{children:[r.jsxs(I,{children:[r.jsx(B,{children:"My Organizations"}),q.map(e=>r.jsxs(P,{children:[r.jsx(D,{children:e.logoUrl?r.jsx("img",{src:e.logoUrl,alt:`${e.name} logo`}):r.jsx("span",{"aria-hidden":!0,children:"🧩"})}),r.jsxs(M,{children:[r.jsx(L,{children:e.name}),e.description&&r.jsx(Y,{children:e.description}),r.jsx(G,{children:r.jsx(F,{variant:"primary",look:"primary",size:"md",onClick:()=>u(e),label:"Visit organization"})})]})]},e.id))]}),r.jsxs(I,{children:[r.jsx(B,{children:"Organizations I have been invited to"}),r.jsxs(K,{children:[r.jsx("strong",{children:"No invitations"}),r.jsx("p",{children:"You have yet to be invited into an organization! If you believe this is an error, please contact the organization you’re supposed to be invited to."})]})]})]})}const X=()=>r.jsx(r.Fragment,{children:r.jsx(S,{})});export{X as default};
