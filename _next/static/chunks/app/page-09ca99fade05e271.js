(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9578:function(e,t,n){Promise.resolve().then(n.bind(n,4116))},4116:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var l=n(7437);function r(e){let{text:t,isDisabled:n=!1,onTap:r}=e;return(0,l.jsx)("div",{className:"relative w-full",children:(0,l.jsxs)("div",{className:"bg-gray-900 text-white text-center font-bold uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150 \n          ".concat(n?" cursor-wait opacity-40 ":" cursor-pointer "),onClick:e=>{void 0!==r&&(e.preventDefault(),r())},children:[n&&(0,l.jsx)("i",{className:"fas fa-circle-notch animate-spin text-white mx-auto text-1xl mr-2"}),t]})})}var o=n(2265),i=n(5015);let a=["Init","End","Conditional","Action"],s={Init:"Ellipse",End:"Ellipse",Conditional:"Diamond",Action:void 0},d={Init:"lightgreen",End:"red",Conditional:"lightblue",Action:"yellow"};function c(e){let{onClose:t}=e,{workflowState:n,createStep:s}=(0,i.useAppContext)(),[d,c]=(0,o.useState)(),[u,x]=(0,o.useState)();return(0,l.jsxs)("div",{className:"flex justify-center items-center fixed top-0 left-0 right-0 inset-0 z-50 outline-none focus:outline-none bg-black h-screen bg-opacity-50",children:[(0,l.jsx)("div",{className:"flex justify-center items-center fixed top-0 left-0 right-0 inset-0 z-50 outline-none focus:outline-none bg-black h-screen bg-opacity-50",onClick:()=>t()}),(0,l.jsxs)("div",{className:"w-full sm:w-10/12 lg:w-6/12 xl:w-4/12 p-4 bg-slate-50 rounded-lg shadow-lg z-50 text-black",children:[(0,l.jsx)("h2",{className:"text-2xl font-semibold mb-2 pb-2 border-b",children:"New Node"}),a.filter(e=>"End"!==e&&"Init"!==e&&(d===e||!d)).map(e=>(0,l.jsx)("div",{className:"group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",onClick:()=>{c(e)},children:(0,l.jsx)("h2",{className:"text-xl font-semibold",children:e})},e)),d&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"w-full mt-4",children:(0,l.jsx)(p,{defaultValue:null!=u?u:"",onChange:e=>x(e),onSubmit:()=>{var e;s(d,null!==(e=null==u?void 0:u.trim())&&void 0!==e?e:""),t()}})}),(0,l.jsx)("div",{className:"w-full mt-4",children:(0,l.jsx)(r,{text:"Ok",isDisabled:!d||!u,onTap:()=>{var e;s(d,null!==(e=null==u?void 0:u.trim())&&void 0!==e?e:""),t()}})})]})]})]})}function u(e){var t;let{nodeName:n,onClose:s}=e,{workflowState:d,updateStep:c,removeStep:u}=(0,i.useAppContext)(),[x,m]=(0,o.useState)();return(0,o.useEffect)(()=>{let e=d.steps.filter(e=>e.name===n)[0];m(e)},[n,d.steps]),(0,l.jsxs)("div",{className:"flex justify-center items-center fixed top-0 left-0 right-0 inset-0 z-50 outline-none focus:outline-none bg-black h-screen bg-opacity-50",children:[(0,l.jsx)("div",{className:"flex justify-center items-center fixed top-0 left-0 right-0 inset-0 z-50 outline-none focus:outline-none bg-black h-screen bg-opacity-50",onClick:()=>s()}),(0,l.jsxs)("div",{className:"w-full sm:w-10/12 lg:w-6/12 xl:w-4/12 p-4 bg-slate-50 rounded-lg shadow-lg z-50 text-black",children:[(0,l.jsxs)("div",{className:"flex flex-row justify-between  mb-2 pb-2 border-b",children:[(0,l.jsx)("h2",{className:"text-2xl font-semibold",children:"Edit Node"}),(null==x?void 0:x.type)!=="Init"&&(null==x?void 0:x.type)!=="End"&&(0,l.jsx)("h2",{className:"text-lg hover:font-semibold cursor-pointer",onClick:()=>{u(x.name),s()},children:"remove"})]}),(null==x?void 0:x.type)!=="Init"&&(null==x?void 0:x.type)!=="End"&&(0,l.jsxs)("div",{className:"w-full py-2",children:[(0,l.jsx)("label",{className:"block uppercase text-slate-600 text-xs font-bold my-2",children:"Node type"}),(0,l.jsx)("div",{className:"w-full flex flex-row",children:a.filter(e=>"End"!==e&&"Init"!==e).map(e=>{let t=(null==x?void 0:x.type)===e;return(0,l.jsx)("div",{className:"w-full text-center rounded-lg ".concat(t?" border-gray-300 bg-emerald-400 dark:border-neutral-700 dark:bg-emerald-400 text-white ":" border border-transparent "," px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mx-1 cursor-pointer"),onClick:()=>{m({...x,type:e})},children:(0,l.jsx)("h2",{className:"text-xl font-semibold",children:e})},e)})})]}),(null==x?void 0:x.type)!=="Init"&&(null==x?void 0:x.type)!=="End"&&(0,l.jsx)("div",{className:"w-full mt-4",children:(0,l.jsx)(p,{defaultValue:null!==(t=null==x?void 0:x.name)&&void 0!==t?t:"",onChange:e=>m({...x,name:e.trim()}),onSubmit:()=>{}})}),(0,l.jsxs)("div",{className:"w-full mt-4 border-t border-b py-2",children:[(0,l.jsx)("label",{className:"block uppercase text-slate-600 text-xs font-bold my-2",children:"Connect to"}),(0,l.jsx)("div",{className:"w-full flex flex-wrap",children:d.steps.filter(e=>e.name!==n&&"Init"!==e.name).map(e=>{var t;let n=null==x?void 0:null===(t=x.next)||void 0===t?void 0:t.includes(e.name);return(0,l.jsx)("div",{className:"text-center rounded-lg ".concat(n?" border-gray-300 bg-emerald-400 dark:border-neutral-700 dark:bg-emerald-400 text-white ":" border border-transparent "," px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mx-1 cursor-pointer"),onClick:()=>{if(x){var t,n;let l=!(null===(t=x.next)||void 0===t?void 0:t.includes(e.name));l&&m({...x,next:[...null!==(n=x.next)&&void 0!==n?n:[],e.name]}),l||m({...x,next:x.next.filter(t=>t!==e.name)})}},children:(0,l.jsx)("h2",{className:"text-xl font-semibold",children:e.name})},e.name)})})]}),(0,l.jsx)("div",{className:"w-full mt-4",children:(0,l.jsx)(r,{text:"Save",onTap:()=>{x&&(c(n,x),s())}})})]})]})}function x(){let[e,t]=(0,o.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"fixed right-10 bottom-10 bg-gray-900 rounded-full flex text-center items-center justify-center hover:border-gray-300 hover:bg-gray-700 cursor-pointer z-10 w-12 h-12",onClick:()=>{t(!0)},children:(0,l.jsx)("span",{className:"text-3xl pb-1",children:"+"})}),e&&(0,l.jsx)(c,{onClose:()=>t(!1)})]})}function m(){let{resetWorkflow:e}=(0,i.useAppContext)();return(0,l.jsx)("div",{className:"fixed left-10 bottom-10 bg-gray-500 rounded-full flex text-center items-center justify-center hover:border-gray-300 hover:bg-gray-700 cursor-pointer z-10 h-12 cursor-pointer",onClick:()=>e(),children:(0,l.jsx)("span",{className:"px-4",children:"Clean Workflow"})})}function f(){return(0,l.jsxs)("div",{className:"z-10 w-full items-center justify-between font-mono text-sm lg:flex",children:[(0,l.jsxs)("p",{className:"fixed pt-4 left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-gradient-to-b from-zinc-800 pb-6 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-900 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",children:["Workflow\xa0",(0,l.jsx)("code",{className:"font-mono font-bold",children:"> code challenge"})]}),(0,l.jsx)("div",{className:"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",children:(0,l.jsxs)("div",{className:"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 mr-4",children:["By"," ","Darma"]})})]})}function p(e){let{defaultValue:t,isDisabled:n=!1,onChange:r,onSubmit:o}=e;return(0,l.jsxs)("div",{className:"relative w-full mb-3",children:[(0,l.jsx)("label",{className:"block uppercase text-slate-600 text-xs font-bold mb-2",children:"Name"}),(0,l.jsx)("input",{type:"text",disabled:n,autoFocus:!0,defaultValue:t,className:"".concat(n?"text-slate-400":"text-slate-600"," border-0 px-3 py-3 placeholder-slate-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"),placeholder:"Name",onChange:e=>{r(e.target.value)},onKeyUp:e=>{"Enter"===e.key&&t&&o(t)}})]})}var b=n(7556);function h(){let{workflowState:e}=(0,i.useAppContext)(),[t,n]=(0,o.useState)(),[r,a]=(0,o.useState)();return(0,o.useEffect)(()=>{try{var e=b.bx.make;let t=new b.S0("diagramWorkflow",{"undoManager.isEnabled":!0,ObjectSingleClicked:e=>{if(console.log("click",e.subject.part.data.key),"End"!==e.subject.part.data.key){let t=e.subject.part.data.key;a(t)}}});t.layout=e(b.KQ,{direction:90,layerSpacing:10,isRealtime:!0}),t.nodeTemplate=new b.NB("Auto",{alignment:b.z6.Center}).add(new b.bn("RoundedRectangle",{strokeWidth:0,fill:"white"}).bind("fill","color").bind("figure","fig")).add(new b.al({margin:8,stroke:"#333"}).bind("text","key")),n(t)}catch(e){}},[]),(0,o.useEffect)(()=>{t&&(t.model=new b.FJ(e.steps.map(e=>({key:e.name,color:d[e.type],fig:s[e.type]})),e.steps.filter(e=>e.next).map(e=>e.next.map(t=>({from:e.name,to:t})).flat()).flat()))},[e,t]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"diagramWorkflow",className:"z-5",style:{width:"100vw",height:"100vh",backgroundColor:"lightgray"}}),void 0!==r&&(0,l.jsx)(u,{nodeName:r,onClose:()=>a(void 0)})]})}function g(){return(0,l.jsxs)("main",{className:"flex min-h-screen flex-col items-start",children:[(0,l.jsx)(f,{}),(0,l.jsx)(h,{}),(0,l.jsx)(x,{}),(0,l.jsx)(m,{})]})}},5015:function(e,t,n){"use strict";n.r(t),n.d(t,{AppContext:function(){return i},default:function(){return s},useAppContext:function(){return a}});var l=n(7437),r=n(2265);class o extends Error{constructor(e){super(e)}}let i=(0,r.createContext)(void 0);function a(){let e=(0,r.useContext)(i);if(void 0===e)throw new o("You are trying to useAppContext outside App Provider.");return e}function s(e){let{children:t}=e,[n,o]=function(){let[e,t]=(0,r.useState)({steps:[],isLoading:!1});return(0,r.useEffect)(()=>{t(e=>({...e,steps:[{name:"Init",type:"Init",next:["Condition 1","Condition 2"]},{name:"Condition 1",type:"Conditional",next:["Action 1"]},{name:"Action 1",type:"Action",next:["Action 2"]},{name:"Action 2",type:"Action",next:["End"]},{name:"Condition 2",type:"Conditional",next:["Action 3"]},{name:"Action 3",type:"Action",next:["Condition 3","Condition 4"]},{name:"Condition 3",type:"Conditional",next:["End"]},{name:"Condition 4",type:"Conditional",next:["Action 4"]},{name:"Action 4",type:"Action",next:["End"]},{name:"End",type:"End"}]}))},[]),[e,{createStep:function(n,l){t(t=>({...t,steps:[...e.steps,{name:l,type:n}]}))},updateStep:function(n,l){let r=e.steps.map(e=>e.name===n?l:e),o=r.map(e=>{var t;return{...e,next:null===(t=e.next)||void 0===t?void 0:t.map(e=>e===n?l.name:e)}});t(e=>({...e,steps:o}))},removeStep:function(n){t(t=>({...t,steps:e.steps.filter(e=>e.name!==n)}))},resetWorkflow:function(){t(e=>({...e,steps:[{name:"Init",type:"Init",next:["Condition Example"]},{name:"Condition Example",type:"Conditional",next:["Action Example"]},{name:"Action Example",type:"Action",next:["End"]},{name:"End",type:"End"}]}))}}]}(),a={...o};return(0,l.jsx)(i.Provider,{value:{workflowState:n,...a},children:t})}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var l,o={},d=null,c=null;for(l in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,l)&&!s.hasOwnProperty(l)&&(o[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===o[l]&&(o[l]=t[l]);return{$$typeof:r,type:e,key:d,ref:c,props:o,_owner:a.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[220,971,864,744],function(){return e(e.s=9578)}),_N_E=e.O()}]);