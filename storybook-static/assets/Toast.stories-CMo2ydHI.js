import{j as s,c as re}from"./utils-dI9RuKob.js";import{r as p}from"./index-CleY8y_P.js";import{A as te,m as ae,X as se}from"./proxy-DVRBIXS3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createLucideIcon-BBtjk-RZ.js";function ee(e){var t,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=ee(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function ne(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=ee(e))&&(a&&(a+=" "),a+=t);return a}const E=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,k=ne,oe=(e,t)=>r=>{var a;if((t==null?void 0:t.variants)==null)return k(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:f,defaultVariants:c}=t,v=Object.keys(f).map(n=>{const o=r==null?void 0:r[n],d=c==null?void 0:c[n];if(o===null)return null;const u=E(o)||E(d);return f[n][u]}),i=r&&Object.entries(r).reduce((n,o)=>{let[d,u]=o;return u===void 0||(n[d]=u),n},{}),N=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((n,o)=>{let{class:d,className:u,...m}=o;return Object.entries(m).every(S=>{let[A,V]=S;return Array.isArray(V)?V.includes({...c,...i}[A]):{...c,...i}[A]===V})?[...n,d,u]:n},[]);return k(e,v,N,r==null?void 0:r.class,r==null?void 0:r.className)},ie=oe("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 shadow-md transition-all",{variants:{variant:{default:"bg-background border-border",success:"bg-success-50 border-success-200",error:"bg-destructive-50 border-destructive-200",warning:"bg-warning-50 border-warning-200",info:"bg-primary-50 border-primary-200"}},defaultVariants:{variant:"default"}}),l=p.forwardRef(({className:e,variant:t,title:r,description:a,action:f,open:c=!0,duration:v=5e3,onClose:i,...N},n)=>{const[o,d]=p.useState(c);p.useEffect(()=>{d(c)},[c]),p.useEffect(()=>{if(!o)return;const m=setTimeout(()=>{d(!1),i==null||i()},v);return()=>clearTimeout(m)},[o,v,i]);const u=()=>{d(!1),i==null||i()};return p.useEffect(()=>{const m=S=>{S.key==="Escape"&&o&&u()};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[o]),s.jsx(te,{children:o&&s.jsxs(ae.div,{ref:n,role:"alert","aria-live":"polite",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.2},className:re(ie({variant:t}),e),...N,children:[s.jsxs("div",{className:"flex flex-col gap-1",children:[r&&s.jsx("div",{className:"text-sm font-semibold",children:r}),a&&s.jsx("div",{className:"text-sm opacity-90",children:a})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[f,s.jsx("button",{type:"button",onClick:u,"aria-label":"Close",className:"rounded-full p-1 transition-colors hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-ring",children:s.jsx(se,{className:"h-4 w-4"})})]})]})})});l.displayName="Toast";try{l.displayName="Toast",l.__docgenInfo={description:"",displayName:"Toast",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"React.ReactNode"}},open:{defaultValue:{value:"true"},description:"",name:"open",required:!1,type:{name:"boolean"}},duration:{defaultValue:{value:"5000"},description:"",name:"duration",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}}}}}catch{}const pe={title:"Design System/Feedback/Toast",component:l,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["default","success","error","warning","info"]},title:{control:"text"},description:{control:"text"},open:{control:"boolean"},duration:{control:"number"},onClose:{action:"closed"}},args:{title:"Toast Title",description:"This is a toast notification message.",open:!0,duration:5e3}},g={},y={args:{variant:"success",title:"Success!",description:"Your changes have been saved successfully."}},b={args:{variant:"error",title:"Error",description:"There was a problem processing your request."}},x={args:{variant:"warning",title:"Warning",description:"Your session will expire in 5 minutes."}},h={args:{variant:"info",title:"Information",description:"A new version is available. Please update."}},T={args:{title:"Update Available",description:"A new version is available for download.",action:s.jsx("button",{className:"px-3 py-1.5 text-sm bg-transparent hover:bg-background/10 rounded-md transition-colors",children:"Update"})}},w={render:()=>{const[e,t]=p.useState(!1);return s.jsxs("div",{className:"flex flex-col space-y-4",children:[s.jsx("button",{onClick:()=>t(!0),className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",children:"Show Toast"}),s.jsx(l,{title:"Controlled Toast",description:"This toast is controlled by state.",open:e,onClose:()=>t(!1)})]})}},j={render:()=>s.jsxs("div",{className:"flex flex-col space-y-4 w-96",children:[s.jsx(l,{variant:"default",title:"Default Toast",description:"This is a default toast notification."}),s.jsx(l,{variant:"success",title:"Success Toast",description:"Your action was completed successfully."}),s.jsx(l,{variant:"error",title:"Error Toast",description:"There was an error processing your request."}),s.jsx(l,{variant:"warning",title:"Warning Toast",description:"Please be aware of this important notice."}),s.jsx(l,{variant:"info",title:"Info Toast",description:"Here's some information you might find useful."})]}),parameters:{layout:"padded"}};var q,_,C;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(C=(_=g.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var O,W,I;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success!',
    description: 'Your changes have been saved successfully.'
  }
}`,...(I=(W=y.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var P,Y,D;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    description: 'There was a problem processing your request.'
  }
}`,...(D=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:D.source}}};var U,R,H;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'Your session will expire in 5 minutes.'
  }
}`,...(H=(R=x.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var K,L,F;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    description: 'A new version is available. Please update.'
  }
}`,...(F=(L=h.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var X,z,B;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    title: 'Update Available',
    description: 'A new version is available for download.',
    action: <button className="px-3 py-1.5 text-sm bg-transparent hover:bg-background/10 rounded-md transition-colors">
        Update
      </button>
  }
}`,...(B=(z=T.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var G,J,M;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex flex-col space-y-4">
        <button onClick={() => setOpen(true)} className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
          Show Toast
        </button>
        <Toast title="Controlled Toast" description="This toast is controlled by state." open={open} onClose={() => setOpen(false)} />
      </div>;
  }
}`,...(M=(J=w.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var Q,Z,$;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-96">
      <Toast variant="default" title="Default Toast" description="This is a default toast notification." />
      <Toast variant="success" title="Success Toast" description="Your action was completed successfully." />
      <Toast variant="error" title="Error Toast" description="There was an error processing your request." />
      <Toast variant="warning" title="Warning Toast" description="Please be aware of this important notice." />
      <Toast variant="info" title="Info Toast" description="Here's some information you might find useful." />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...($=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const fe=["Default","Success","Error","Warning","Info","WithAction","Controlled","AllVariants"];export{j as AllVariants,w as Controlled,g as Default,b as Error,h as Info,y as Success,x as Warning,T as WithAction,fe as __namedExportsOrder,pe as default};
