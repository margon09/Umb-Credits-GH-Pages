import{c as a,d as e}from"./index-CtR4jyxL.js";import{j as i}from"./query-DJ2Df_pl.js";import{r}from"./react-fVXvAP8Z.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],s=a("chevron-down",n);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],h=a("download",d),c=r.forwardRef((o,l)=>i.jsx("uui-table",{ref:l,...o})),x=e.section`
  width: 100%;
  margin: 0;
  height: 100%;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  overflow: hidden;
  background: ${({theme:o})=>o.mode==="dark"?o.colors.tableHeadBackground:o.colors.pageBackground};
  border: 1px solid ${({theme:o})=>o.colors.borderLight};
`,w=e.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px;
  background: ${({theme:o})=>o.colors.tableHeadBackground};
  border-bottom: 1px solid ${({theme:o})=>o.colors.borderLight};
`,f=e.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:o})=>o.colors.textPrimary};
  font-family: 'Lato', sans-serif;
`,g=e.button`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: none;
  background: none;
  color: ${({theme:o})=>o.colors.otherIcons};
  cursor: pointer;

  &:hover {
    color: ${({theme:o})=>o.colors.icon};
  }
  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.colors.focusRing};
    outline-offset: 2px;
  }
`,m=e.div`
  width: 100%;
  overflow-x: hidden;
`,k=e("uui-table-head")`
  background: ${({theme:o})=>o.colors.tableHeadBackground};
`,t=e.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 20px 30px;
  width: 100%;
  box-sizing: border-box;

  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,v=e(c)`
  width: 100%;
  max-width: 100%;

  --uui-table-column-gap: 0px;
  --uui-table-head-cell-padding: 0px;
  --uui-table-cell-padding: 0px;

  uui-table-cell {
    color: ${({theme:o})=>o.colors.tableColor};
    background-color: ${({theme:o})=>o.colors.tableCellBackground};
  }

  uui-table-head-cell,
  uui-table-cell {
    --uui-color-border: transparent;
  }

  &::part(head) {
    background: ${({theme:o})=>o.colors.tableHeadBackground};
  }
  &::part(head-cell) {
    color: ${({theme:o})=>o.colors.tableHeadColor};
    font-size: 16px;
    font-weight: 400;
  }

  uui-table-head::part(row),
  uui-table-row::part(row) {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 0;
    min-width: 0;
  }

  uui-table-head-cell::part(base),
  uui-table-cell::part(base) {
    padding: 0;
    min-width: 0;
    box-sizing: border-box;
  }

  uui-table-head-cell
    > ${t},
    uui-table-row
    uui-table-cell
    > ${t} {
    box-shadow: inset 0 -1px ${({theme:o})=>o.colors.borderLight};
  }

  uui-table-row:last-of-type uui-table-cell > ${t} {
    box-shadow: none;
  }
`,$=e.span`
  color: ${({theme:o})=>o.colors.tableHeadColor};
  font-size: 16px;
  font-weight: 400;

  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,y=e.strong`
  color: #1aa251;
  font-weight: 700;
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,H=e.a`
  color: #495cba;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;

  display: block;
  max-width: 100%;
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    opacity: 0.85;
  }
  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.colors.focusRing};
    outline-offset: 2px;
    text-decoration-thickness: 2px;
  }
`,C=e(s)`
  color: ${({theme:o})=>o.colors.tableHeadColor};
  flex-shrink: 0;
`,B=e.span`
  display: block;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;export{x as C,h as D,g as E,w as H,H as I,f as T,v as U,m as a,k as b,t as c,$ as d,C as e,y as f,B as g,s as h};
