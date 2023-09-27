(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9578:function(e,t,l){Promise.resolve().then(l.bind(l,1205))},1205:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return p}});var n=l(7437);function r(e){let{text:t,isDisabled:l=!1,onTap:r}=e;return(0,n.jsx)("div",{className:"relative w-full",children:(0,n.jsxs)("div",{className:"bg-gray-900 text-white text-center font-bold uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150 \n          ".concat(l?" cursor-wait opacity-40 ":" cursor-pointer "),onClick:e=>{void 0!==r&&(e.preventDefault(),r())},children:[l&&(0,n.jsx)("i",{className:"fas fa-circle-notch animate-spin text-white mx-auto text-1xl mr-2"}),t]})})}var a=l(2265),o=l(5015);let s=["Init","End","Conditional","Action"],i={Init:"Ellipse",End:"Ellipse",Conditional:"Diamond",Action:void 0},d={Init:"lightgreen",End:"red",Conditional:"lightblue",Action:"yellow"};function c(e){let{onClose:t}=e,{workflowState:l,createStep:i}=(0,o.useAppContext)(),[d,c]=(0,a.useState)(),[u,x]=(0,a.useState)();return(0,n.jsxs)("div",{className:"flex justify-center items-center fixed top-0 left-0 right-0 inset-0 z-50 outline-none focus:outline-none bg-black h-screen bg-opacity-50",children:[(0,n.jsx)("div",{className:"flex justify-center items-center fixed top-0 left-0 right-0 inset-0 z-50 outline-none focus:outline-none bg-black h-screen bg-opacity-50",onClick:()=>t()}),(0,n.jsxs)("div",{className:"w-full sm:w-10/12 lg:w-6/12 xl:w-4/12 p-4 bg-slate-50 rounded-lg shadow-lg z-50 text-black",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold mb-2 pb-2 border-b",children:"New Node"}),s.filter(e=>"End"!==e&&"Init"!==e&&(d===e||!d)).map(e=>(0,n.jsx)("div",{className:"group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",onClick:()=>{c(e)},children:(0,n.jsx)("h2",{className:"text-xl font-semibold",children:e})},e)),d&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"w-full mt-4",children:(0,n.jsx)(b,{defaultValue:null!=u?u:"",onChange:e=>x(e),onSubmit:()=>{var e;i(d,null!==(e=null==u?void 0:u.trim())&&void 0!==e?e:""),t()}})}),(0,n.jsx)("div",{className:"w-full mt-4",children:(0,n.jsx)(r,{text:"Ok",isDisabled:!d||!u,onTap:()=>{var e;i(d,null!==(e=null==u?void 0:u.trim())&&void 0!==e?e:""),t()}})})]})]})]})}function u(e){var t;let{nodeName:l,onClose:i}=e,{workflowState:d,updateStep:c,removeStep:u}=(0,o.useAppContext)(),[x,m]=(0,a.useState)();return(0,a.useEffect)(()=>{let e=d.steps.filter(e=>e.name===l)[0];m(e)},[l,d.steps]),(0,n.jsxs)("div",{className:"flex justify-center items-center fixed top-0 left-0 right-0 inset-0 z-50 outline-none focus:outline-none bg-black h-screen bg-opacity-50",children:[(0,n.jsx)("div",{className:"flex justify-center items-center fixed top-0 left-0 right-0 inset-0 z-50 outline-none focus:outline-none bg-black h-screen bg-opacity-50",onClick:()=>i()}),(0,n.jsxs)("div",{className:"w-full sm:w-10/12 lg:w-6/12 xl:w-4/12 p-4 bg-slate-50 rounded-lg shadow-lg z-50 text-black",children:[(0,n.jsxs)("div",{className:"flex flex-row justify-between  mb-2 pb-2 border-b",children:[(0,n.jsx)("h2",{className:"text-2xl font-semibold",children:"Edit Node"}),(null==x?void 0:x.type)!=="Init"&&(null==x?void 0:x.type)!=="End"&&(0,n.jsx)("h2",{className:"text-lg hover:font-semibold cursor-pointer",onClick:()=>{u(x.name),i()},children:"remove"})]}),(null==x?void 0:x.type)!=="Init"&&(null==x?void 0:x.type)!=="End"&&(0,n.jsxs)("div",{className:"w-full py-2",children:[(0,n.jsx)("label",{className:"block uppercase text-slate-600 text-xs font-bold my-2",children:"Node type"}),(0,n.jsx)("div",{className:"w-full flex flex-row",children:s.filter(e=>"End"!==e&&"Init"!==e).map(e=>{let t=(null==x?void 0:x.type)===e;return(0,n.jsx)("div",{className:"w-full text-center rounded-lg ".concat(t?" border-gray-300 bg-emerald-400 dark:border-neutral-700 dark:bg-emerald-400 text-white ":" border border-transparent "," px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mx-1 cursor-pointer"),onClick:()=>{m({...x,type:e})},children:(0,n.jsx)("h2",{className:"text-xl font-semibold",children:e})},e)})})]}),(null==x?void 0:x.type)!=="Init"&&(null==x?void 0:x.type)!=="End"&&(0,n.jsx)("div",{className:"w-full mt-4",children:(0,n.jsx)(b,{defaultValue:null!==(t=null==x?void 0:x.name)&&void 0!==t?t:"",onChange:e=>m({...x,name:e.trim()}),onSubmit:()=>{}})}),(0,n.jsxs)("div",{className:"w-full mt-4 border-t border-b py-2",children:[(0,n.jsx)("label",{className:"block uppercase text-slate-600 text-xs font-bold my-2",children:"Connect to"}),(0,n.jsx)("div",{className:"w-full flex flex-wrap",children:d.steps.filter(e=>e.name!==l&&"Init"!==e.name).map(e=>{var t;let l=null==x?void 0:null===(t=x.next)||void 0===t?void 0:t.includes(e.name);return(0,n.jsx)("div",{className:"text-center rounded-lg ".concat(l?" border-gray-300 bg-emerald-400 dark:border-neutral-700 dark:bg-emerald-400 text-white ":" border border-transparent "," px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mx-1 cursor-pointer"),onClick:()=>{if(x){var t,l;let n=!(null===(t=x.next)||void 0===t?void 0:t.includes(e.name));n&&m({...x,next:[...null!==(l=x.next)&&void 0!==l?l:[],e.name]}),n||m({...x,next:x.next.filter(t=>t!==e.name)})}},children:(0,n.jsx)("h2",{className:"text-xl font-semibold",children:e.name})},e.name)})})]}),(0,n.jsx)("div",{className:"w-full mt-4",children:(0,n.jsx)(r,{text:"Save",onTap:()=>{x&&(c(l,x),i())}})})]})]})}function x(){let[e,t]=(0,a.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"fixed right-10 bottom-20 lg:bottom-10 bg-gray-900 rounded-full flex text-center items-center justify-center hover:border-gray-300 hover:bg-gray-700 cursor-pointer z-10 w-12 h-12",onClick:()=>{t(!0)},children:(0,n.jsx)("span",{className:"text-3xl pb-1",children:"+"})}),e&&(0,n.jsx)(c,{onClose:()=>t(!1)})]})}function m(){let{resetWorkflow:e}=(0,o.useAppContext)();return(0,n.jsx)("div",{className:"fixed left-10 bottom-20 lg:bottom-10 bg-gray-500 rounded-full flex text-center items-center justify-center hover:border-gray-300 hover:bg-gray-700 cursor-pointer z-10 h-12 cursor-pointer",onClick:()=>e(),children:(0,n.jsx)("span",{className:"px-4",children:"Clean Workflow"})})}function f(){return(0,n.jsxs)("div",{className:"z-10 w-full items-center justify-between font-mono text-sm lg:flex",children:[(0,n.jsxs)("p",{className:"fixed pt-4 left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-gradient-to-b from-zinc-800 pb-6 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-900 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",children:["Workflow\xa0",(0,n.jsx)("code",{className:"font-mono font-bold",children:"> code challenge"})]}),(0,n.jsx)("div",{className:"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",children:(0,n.jsxs)("div",{className:"pointer-events-none flex place-items-center gap-2 p-8 pb-3 lg:pointer-events-auto lg:p-0 mr-4",children:["By"," ","Darma"]})})]})}function b(e){let{defaultValue:t,isDisabled:l=!1,onChange:r,onSubmit:a}=e;return(0,n.jsxs)("div",{className:"relative w-full mb-3",children:[(0,n.jsx)("label",{className:"block uppercase text-slate-600 text-xs font-bold mb-2",children:"Name"}),(0,n.jsx)("input",{type:"text",disabled:l,autoFocus:!0,defaultValue:t,className:"".concat(l?"text-slate-400":"text-slate-600"," border-0 px-3 py-3 placeholder-slate-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"),placeholder:"Name",onChange:e=>{r(e.target.value)},onKeyUp:e=>{"Enter"===e.key&&t&&a(t)}})]})}var h=l(7556);function g(){let{workflowState:e}=(0,o.useAppContext)(),[t,l]=(0,a.useState)(),[r,s]=(0,a.useState)();return(0,a.useEffect)(()=>{try{let e=h.bx.make,t=new h.S0("diagramWorkflow",{"undoManager.isEnabled":!0,ObjectSingleClicked:e=>{if("End"!==e.subject.part.data.key){let t=e.subject.part.data.key;s(t)}}});t.layout=e(h.KQ,{direction:90,layerSpacing:10,isRealtime:!0}),t.nodeTemplate=new h.NB("Auto",{alignment:h.z6.Center}).add(new h.bn("RoundedRectangle",{strokeWidth:0,fill:"white"}).bind("fill","color").bind("figure","fig")).add(new h.al({margin:8,stroke:"#333"}).bind("text","key")),l(t)}catch(e){}},[]),(0,a.useEffect)(()=>{t&&(t.model=new h.FJ(e.steps.map(e=>({key:e.name,color:d[e.type],fig:i[e.type]})),e.steps.filter(e=>e.next).map(e=>e.next.map(t=>({from:e.name,to:t})).flat()).flat()))},[e,t]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{id:"diagramWorkflow",className:"z-5",style:{width:"100vw",height:"100vh",backgroundColor:"lightgray"}}),void 0!==r&&(0,n.jsx)(u,{nodeName:r,onClose:()=>s(void 0)})]})}function p(){return(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-start",children:[(0,n.jsx)(f,{}),(0,n.jsx)(g,{}),(0,n.jsx)(x,{}),(0,n.jsx)(m,{})]})}}},function(e){e.O(0,[220,15,971,864,744],function(){return e(e.s=9578)}),_N_E=e.O()}]);