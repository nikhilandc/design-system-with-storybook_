import{j as e}from"./utils-dI9RuKob.js";import{T as a}from"./Typography-5ESOfgHO.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";const F={title:"Design System/Typography",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","large","small","caption","label"],description:"The typography variant to use"},size:{control:"select",options:["xs","sm","base","lg","xl","2xl","3xl","4xl","5xl","6xl"],description:"Override the default font size for the variant"},weight:{control:"select",options:["normal","medium","semibold","bold"],description:"Override the default font weight for the variant"},lineHeight:{control:"select",options:["none","tight","snug","normal","relaxed","loose"],description:"Override the default line height for the variant"},letterSpacing:{control:"select",options:["tighter","tight","normal","wide","wider","widest"],description:"Override the default letter spacing for the variant"},as:{control:"text",description:"Override the HTML element used"},truncate:{control:"boolean",description:"Whether to truncate overflow text with an ellipsis"},className:{control:"text",description:"Additional CSS classes to apply"},children:{control:"text",description:"The content to display"}},args:{children:"The quick brown fox jumps over the lazy dog"}},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"h1",children:"Heading 1"}),e.jsx(a,{variant:"h2",children:"Heading 2"}),e.jsx(a,{variant:"h3",children:"Heading 3"}),e.jsx(a,{variant:"h4",children:"Heading 4"}),e.jsx(a,{variant:"h5",children:"Heading 5"}),e.jsx(a,{variant:"h6",children:"Heading 6"})]})},t={render:()=>e.jsxs("div",{className:"space-y-4 max-w-lg",children:[e.jsx(a,{variant:"large",children:"This is a large paragraph with a longer text. The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx(a,{variant:"p",children:"This is a standard paragraph with a longer text. The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx(a,{variant:"small",children:"This is a small paragraph with a longer text. The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})},i={args:{variant:"caption",children:"This is a caption for an image or figure"}},o={args:{variant:"label",children:"Form Field Label"}},n={args:{variant:"p",size:"xl",weight:"bold",lineHeight:"tight",letterSpacing:"wide",className:"text-primary-600 italic",children:"Custom styled text with various overrides"}},s={args:{variant:"p",truncate:!0,className:"max-w-[200px]",children:"This is a very long text that should be truncated when it exceeds the container width"}},l={args:{variant:"p",as:"blockquote",className:"italic border-l-4 border-primary-500 pl-4",children:"This is rendered as a blockquote element instead of a paragraph"}};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var h,m,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-lg">
      <Typography variant="large">
        This is a large paragraph with a longer text. The quick brown fox jumps over the lazy dog. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography variant="p">
        This is a standard paragraph with a longer text. The quick brown fox jumps over the lazy dog. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography variant="small">
        This is a small paragraph with a longer text. The quick brown fox jumps over the lazy dog. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,y,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'caption',
    children: 'This is a caption for an image or figure'
  }
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,T,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'label',
    children: 'Form Field Label'
  }
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var w,f,j;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'p',
    size: 'xl',
    weight: 'bold',
    lineHeight: 'tight',
    letterSpacing: 'wide',
    className: 'text-primary-600 italic',
    children: 'Custom styled text with various overrides'
  }
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var H,q,S;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'p',
    truncate: true,
    className: 'max-w-[200px]',
    children: 'This is a very long text that should be truncated when it exceeds the container width'
  }
}`,...(S=(q=s.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var k,z,L;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'p',
    as: 'blockquote',
    className: 'italic border-l-4 border-primary-500 pl-4',
    children: 'This is rendered as a blockquote element instead of a paragraph'
  }
}`,...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const A=["Headings","Paragraph","Caption","Label","CustomStyling","Truncated","AsCustomElement"];export{l as AsCustomElement,i as Caption,n as CustomStyling,r as Headings,o as Label,t as Paragraph,s as Truncated,A as __namedExportsOrder,F as default};
