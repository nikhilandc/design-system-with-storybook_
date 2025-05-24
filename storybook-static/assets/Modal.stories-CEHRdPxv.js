import{j as e,c as W}from"./utils-dI9RuKob.js";import{r as t}from"./index-CleY8y_P.js";import{T as i}from"./Typography-5ESOfgHO.js";import{A as H,m as g,X as J}from"./proxy-DVRBIXS3.js";import{T as h}from"./TextInput-BMUr57Co.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createLucideIcon-BBtjk-RZ.js";const l=t.forwardRef(({className:n,open:a,onClose:o,title:r,description:s,size:q="md",hideCloseButton:A=!1,children:U,...B},L)=>{const x=t.useRef(null);t.useEffect(()=>{const d=$=>{$.key==="Escape"&&a&&o()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[a,o]),t.useEffect(()=>(a?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]);const F=d=>{x.current&&!x.current.contains(d.target)&&o()},R=()=>{switch(q){case"sm":return"max-w-sm";case"md":return"max-w-md";case"lg":return"max-w-lg";case"xl":return"max-w-xl";case"full":return"max-w-full mx-4";default:return"max-w-md"}};return e.jsx(H,{children:a&&e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center overflow-y-auto","aria-modal":"true",role:"dialog","aria-labelledby":r?"modal-title":void 0,"aria-describedby":s?"modal-description":void 0,onClick:F,children:[e.jsx(g.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"fixed inset-0 bg-black/40"}),e.jsxs(g.div,{ref:x,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{type:"spring",damping:20,stiffness:300},className:W("relative z-50 w-full rounded-lg bg-background p-6 shadow-lg",R(),n),...B,children:[!A&&e.jsx("button",{type:"button",onClick:o,className:"absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring","aria-label":"Close modal",children:e.jsx(J,{className:"h-4 w-4"})}),(r||s)&&e.jsxs("div",{className:"mb-6",children:[r&&e.jsx(i,{id:"modal-title",variant:"h4",className:"mb-2",children:r}),s&&e.jsx(i,{id:"modal-description",variant:"small",className:"text-muted-foreground",children:s})]}),U]})]})})});l.displayName="Modal";try{l.displayName="Modal",l.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},hideCloseButton:{defaultValue:{value:"false"},description:"",name:"hideCloseButton",required:!1,type:{name:"boolean"}}}}}catch{}const re={title:"Design System/Feedback/Modal",component:l,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{title:{control:"text"},description:{control:"text"},open:{control:"boolean"},onClose:{action:"closed"},size:{control:"select",options:["sm","md","lg","xl","full"]},hideCloseButton:{control:"boolean"}},args:{title:"Modal Title",description:"This is a modal dialog.",open:!0,size:"md",hideCloseButton:!1,children:e.jsx("div",{children:"Modal Content"})}},c={},m={args:{title:void 0,description:void 0,children:e.jsxs("div",{className:"text-center",children:[e.jsx(i,{variant:"h4",className:"mb-4",children:"Custom Modal Content"}),e.jsx(i,{variant:"p",className:"mb-6",children:"This modal doesn't use the built-in header and has its own styling."}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",children:"Confirm"})]})}},p={args:{title:"Delete Item",description:"Are you sure you want to delete this item? This action cannot be undone.",children:e.jsxs("div",{className:"flex justify-end space-x-2 mt-6",children:[e.jsx("button",{className:"px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors",children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors",children:"Delete"})]})}},u={args:{title:"Edit Profile",description:"Update your profile information.",size:"lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(h,{label:"Name",defaultValue:"John Doe"}),e.jsx(h,{label:"Email",defaultValue:"john@example.com"}),e.jsxs("div",{className:"flex justify-end space-x-2 mt-6",children:[e.jsx("button",{className:"px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors",children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",children:"Save Changes"})]})]})}},y={render:()=>{const[n,a]=t.useState("md"),[o,r]=t.useState(!1);return e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:["sm","md","lg","xl","full"].map(s=>e.jsx("button",{onClick:()=>{a(s),r(!0)},className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",children:s.charAt(0).toUpperCase()+s.slice(1)},s))}),e.jsxs(l,{title:`${n.toUpperCase()} Modal`,description:`This is a ${n} sized modal dialog.`,open:o,onClose:()=>r(!1),size:n,children:[e.jsx("div",{className:"py-4",children:e.jsxs(i,{variant:"p",children:["Modal content goes here. This modal is showing the ",n," size variant."]})}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{onClick:()=>r(!1),className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",children:"Close"})})]})]})}},f={render:()=>{const[n,a]=t.useState(!1),[o,r]=t.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>a(!0),className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",children:"Open First Modal"}),e.jsxs(l,{title:"Primary Modal",open:n,onClose:()=>a(!1),children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{variant:"p",children:"This is the primary modal."}),e.jsx("button",{onClick:()=>r(!0),className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",children:"Open Nested Modal"})]}),e.jsx(l,{title:"Secondary Modal",description:"This is a nested modal dialog.",open:o,onClose:()=>r(!1),size:"sm",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{variant:"p",children:"This is a nested modal."}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{onClick:()=>r(!1),className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",children:"Close"})})]})})]})]})}};var b,v,N;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(N=(v=c.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var j,C,T;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined,
    children: <div className="text-center">
        <Typography variant="h4" className="mb-4">Custom Modal Content</Typography>
        <Typography variant="p" className="mb-6">This modal doesn't use the built-in header and has its own styling.</Typography>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
          Confirm
        </button>
      </div>
  }
}`,...(T=(C=m.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var M,S,z;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Delete Item',
    description: 'Are you sure you want to delete this item? This action cannot be undone.',
    children: <div className="flex justify-end space-x-2 mt-6">
        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
          Cancel
        </button>
        <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors">
          Delete
        </button>
      </div>
  }
}`,...(z=(S=p.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var w,O,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Edit Profile',
    description: 'Update your profile information.',
    size: 'lg',
    children: <div className="space-y-4">
        <TextInput label="Name" defaultValue="John Doe" />
        <TextInput label="Email" defaultValue="john@example.com" />
        <div className="flex justify-end space-x-2 mt-6">
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
            Cancel
          </button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
  }
}`,...(k=(O=u.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var D,E,V;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
    const [open, setOpen] = useState(false);
    return <div className="flex flex-col space-y-4">
        <div className="flex flex-wrap gap-2">
          {['sm', 'md', 'lg', 'xl', 'full'].map(s => <button key={s} onClick={() => {
          setSize(s as typeof size);
          setOpen(true);
        }} className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>)}
        </div>
        
        <Modal title={\`\${size.toUpperCase()} Modal\`} description={\`This is a \${size} sized modal dialog.\`} open={open} onClose={() => setOpen(false)} size={size}>
          <div className="py-4">
            <Typography variant="p">
              Modal content goes here. This modal is showing the {size} size variant.
            </Typography>
          </div>
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)} className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Close
            </button>
          </div>
        </Modal>
      </div>;
  }
}`,...(V=(E=y.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var _,P,I;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [primaryOpen, setPrimaryOpen] = useState(false);
    const [secondaryOpen, setSecondaryOpen] = useState(false);
    return <div>
        <button onClick={() => setPrimaryOpen(true)} className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
          Open First Modal
        </button>
        
        <Modal title="Primary Modal" open={primaryOpen} onClose={() => setPrimaryOpen(false)}>
          <div className="space-y-4">
            <Typography variant="p">This is the primary modal.</Typography>
            <button onClick={() => setSecondaryOpen(true)} className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Open Nested Modal
            </button>
          </div>
          
          <Modal title="Secondary Modal" description="This is a nested modal dialog." open={secondaryOpen} onClose={() => setSecondaryOpen(false)} size="sm">
            <div className="space-y-4">
              <Typography variant="p">This is a nested modal.</Typography>
              <div className="flex justify-end">
                <button onClick={() => setSecondaryOpen(false)} className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Close
                </button>
              </div>
            </div>
          </Modal>
        </Modal>
      </div>;
  }
}`,...(I=(P=f.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const ae=["Default","WithoutHeader","ConfirmationDialog","FormInModal","DifferentSizes","NestedModals"];export{p as ConfirmationDialog,c as Default,y as DifferentSizes,u as FormInModal,f as NestedModals,m as WithoutHeader,ae as __namedExportsOrder,re as default};
