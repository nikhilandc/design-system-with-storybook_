import{j as e}from"./utils-dI9RuKob.js";import{r as B}from"./index-CleY8y_P.js";import{T as a}from"./TextInput-BMUr57Co.js";import{c as u}from"./createLucideIcon-BBtjk-RZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Typography-5ESOfgHO.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=u("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=u("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=u("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),Z={title:"Design System/Form/TextInput",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{control:"text"},error:{control:"text"},hint:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},isLoading:{control:"boolean"},type:{control:"select",options:["text","password","email","number","tel","url"]}},args:{label:"Email",placeholder:"Enter your email"}},r={},s={args:{hint:"We'll never share your email with anyone else."}},t={args:{error:"Please enter a valid email address.",value:"invalid-email"}},o={args:{disabled:!0,value:"disabled@example.com"}},l={args:{fullWidth:!0},parameters:{layout:"padded"}},n={args:{isLoading:!0,value:"loading@example.com"}},c={args:{leadingIcon:e.jsx(_,{className:"h-4 w-4"}),placeholder:"Search...",label:"Search"}},d={render:z=>{const[p,R]=B.useState(!1);return e.jsx(a,{...z,type:p?"text":"password",label:"Password",placeholder:"Enter your password",trailingIcon:e.jsx("button",{type:"button",onClick:()=>R(!p),className:"text-muted-foreground hover:text-foreground",children:p?e.jsx(G,{className:"h-4 w-4"}):e.jsx(J,{className:"h-4 w-4"})})})}},i={render:()=>e.jsxs("div",{className:"flex flex-col space-y-6",children:[e.jsx(a,{label:"Default",placeholder:"Default input"}),e.jsx(a,{label:"With value",value:"Input with value"}),e.jsx(a,{label:"With hint",placeholder:"Input with hint",hint:"This is a helpful hint"}),e.jsx(a,{label:"With error",value:"Invalid input",error:"This field has an error"}),e.jsx(a,{label:"Disabled",placeholder:"Disabled input",disabled:!0}),e.jsx(a,{label:"Loading",value:"Loading...",isLoading:!0}),e.jsx(a,{label:"With leading icon",placeholder:"Search...",leadingIcon:e.jsx(_,{className:"h-4 w-4"})})]}),parameters:{layout:"padded"}};var h,m,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,b,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    hint: 'We\\'ll never share your email with anyone else.'
  }
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,f,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    error: 'Please enter a valid email address.',
    value: 'invalid-email'
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var I,S,W;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'disabled@example.com'
  }
}`,...(W=(S=o.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var j,T,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(E=(T=l.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var L,P,D;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    value: 'loading@example.com'
  }
}`,...(D=(P=n.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var N,k,M;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    leadingIcon: <SearchIcon className="h-4 w-4" />,
    placeholder: 'Search...',
    label: 'Search'
  }
}`,...(M=(k=c.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var O,F,q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [showPassword, setShowPassword] = useState(false);
    return <TextInput {...args} type={showPassword ? 'text' : 'password'} label="Password" placeholder="Enter your password" trailingIcon={<button type="button" onClick={() => setShowPassword(!showPassword)} className="text-muted-foreground hover:text-foreground">
            {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
          </button>} />;
  }
}`,...(q=(F=d.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var A,C,H;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-6">
      <TextInput label="Default" placeholder="Default input" />
      <TextInput label="With value" value="Input with value" />
      <TextInput label="With hint" placeholder="Input with hint" hint="This is a helpful hint" />
      <TextInput label="With error" value="Invalid input" error="This field has an error" />
      <TextInput label="Disabled" placeholder="Disabled input" disabled />
      <TextInput label="Loading" value="Loading..." isLoading />
      <TextInput label="With leading icon" placeholder="Search..." leadingIcon={<SearchIcon className="h-4 w-4" />} />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(H=(C=i.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};const $=["Default","WithHint","WithError","Disabled","FullWidth","Loading","WithLeadingIcon","PasswordToggle","AllStates"];export{i as AllStates,r as Default,o as Disabled,l as FullWidth,n as Loading,d as PasswordToggle,t as WithError,s as WithHint,c as WithLeadingIcon,$ as __namedExportsOrder,Z as default};
