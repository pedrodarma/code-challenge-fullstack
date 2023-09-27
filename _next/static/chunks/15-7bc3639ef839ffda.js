"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15],{5015:function(t,e,o){o.r(e),o.d(e,{AppContext:function(){return s},default:function(){return c},useAppContext:function(){return l}});var r=o(7437),n=o(2265);class a extends Error{constructor(t){super(t)}}var i=o(5925);let s=(0,n.createContext)(void 0);function l(){let t=(0,n.useContext)(s);if(void 0===t)throw new a("You are trying to useAppContext outside App Provider.");return t}function c(t){let{children:e}=t,[o,a]=function(){let[t,e]=(0,n.useState)({steps:[],isLoading:!1});return(0,n.useEffect)(()=>{e(t=>({...t,steps:[{name:"Init",type:"Init",next:["Condition 1","Condition 2"]},{name:"Condition 1",type:"Conditional",next:["Action 1"]},{name:"Action 1",type:"Action",next:["Action 2"]},{name:"Action 2",type:"Action",next:["End"]},{name:"Condition 2",type:"Conditional",next:["Action 3"]},{name:"Action 3",type:"Action",next:["Condition 3","Condition 4"]},{name:"Condition 3",type:"Conditional",next:["End"]},{name:"Condition 4",type:"Conditional",next:["Action 4"]},{name:"Action 4",type:"Action",next:["End"]},{name:"End",type:"End"}]}))},[]),[t,{createStep:function(o,r){0===r.length&&i.toast.error("The step name should not be empty");let n=function(e){let o=!t.steps.map(t=>t.name).includes(e.trim());return o}(r);n?e(e=>({...e,steps:[...t.steps,{name:r.trim(),type:o}]})):i.toast.error("The name should be unique in the workflow")},updateStep:function(o,r){try{let n=t.steps.map(t=>t.name===o?r:t),a=n.map(t=>{var e;return{...t,next:null===(e=t.next)||void 0===e?void 0:e.map(t=>t===o?r.name:t)}});e(t=>({...t,steps:a}))}catch(t){i.toast.error("Error! Unable to update.")}},removeStep:function(o){let r=function(){let e=t.steps.filter(t=>"Conditional"===t.type).length,o=t.steps.filter(t=>"Action"===t.type).length;return o>1&&e>1}();r?e(e=>({...e,steps:t.steps.filter(t=>t.name!==o)})):i.toast.error("The workflow should have at least one Conditional and one Action.")},resetWorkflow:function(){e(t=>({...t,steps:[{name:"Init",type:"Init",next:["Condition Example"]},{name:"Condition Example",type:"Conditional",next:["Action Example"]},{name:"Action Example",type:"Action",next:["End"]},{name:"End",type:"End"}]}))}}]}(),l={...a};return(0,r.jsx)(s.Provider,{value:{workflowState:o,...l},children:e})}},622:function(t,e,o){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=o(2265),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,o){var r,a={},c=null,d=null;for(r in void 0!==o&&(c=""+o),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(d=e.ref),e)i.call(e,r)&&!l.hasOwnProperty(r)&&(a[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===a[r]&&(a[r]=e[r]);return{$$typeof:n,type:t,key:c,ref:d,props:a,_owner:s.current}}e.Fragment=a,e.jsx=c,e.jsxs=c},7437:function(t,e,o){t.exports=o(622)},5925:function(t,e,o){let r,n;o.r(e),o.d(e,{CheckmarkIcon:function(){return Y},ErrorIcon:function(){return U},LoaderIcon:function(){return B},ToastBar:function(){return tt},ToastIcon:function(){return Z},Toaster:function(){return tn},default:function(){return ta},resolveValue:function(){return A},toast:function(){return F},useToaster:function(){return H},useToasterStore:function(){return D}});var a,i=o(2265);let s={data:""},l=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(t,e)=>{let o="",r="",n="";for(let a in t){let i=t[a];"@"==a[0]?"i"==a[1]?o=a+" "+i+";":r+="f"==a[1]?p(i,a):a+"{"+p(i,"k"==a[1]?"":e)+"}":"object"==typeof i?r+=p(i,e?e.replace(/([^,])+/g,t=>a.replace(/(^:.*)|([^,])+/g,e=>/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e)):a):null!=i&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=p.p?p.p(a,i):a+":"+i+";")}return o+(e&&n?e+"{"+n+"}":n)+r},f={},m=t=>{if("object"==typeof t){let e="";for(let o in t)e+=o+m(t[o]);return e}return t},y=(t,e,o,r,n)=>{var a;let i=m(t),s=f[i]||(f[i]=(t=>{let e=0,o=11;for(;e<t.length;)o=101*o+t.charCodeAt(e++)>>>0;return"go"+o})(i));if(!f[s]){let e=i!==t?t:(t=>{let e,o,r=[{}];for(;e=c.exec(t.replace(d,""));)e[4]?r.shift():e[3]?(o=e[3].replace(u," ").trim(),r.unshift(r[0][o]=r[0][o]||{})):r[0][e[1]]=e[2].replace(u," ").trim();return r[0]})(t);f[s]=p(n?{["@keyframes "+s]:e}:e,o?"":"."+s)}let l=o&&f.g?f.g:null;return o&&(f.g=f[s]),a=f[s],l?e.data=e.data.replace(l,a):-1===e.data.indexOf(a)&&(e.data=r?a+e.data:e.data+a),s},h=(t,e,o)=>t.reduce((t,r,n)=>{let a=e[n];if(a&&a.call){let t=a(o),e=t&&t.props&&t.props.className||/^go/.test(t)&&t;a=e?"."+e:t&&"object"==typeof t?t.props?"":p(t,""):!1===t?"":t}return t+r+(null==a?"":a)},"");function g(t){let e=this||{},o=t.call?t(e.p):t;return y(o.unshift?o.raw?h(o,[].slice.call(arguments,1),e.p):o.reduce((t,o)=>Object.assign(t,o&&o.call?o(e.p):o),{}):o,l(e.target),e.g,e.o,e.k)}g.bind({g:1});let b,x,v,w=g.bind({k:1});function E(t,e){let o=this||{};return function(){let r=arguments;function n(a,i){let s=Object.assign({},a),l=s.className||n.className;o.p=Object.assign({theme:x&&x()},s),o.o=/ *go\d+/.test(l),s.className=g.apply(o,r)+(l?" "+l:""),e&&(s.ref=i);let c=t;return t[0]&&(c=s.as||t,delete s.as),v&&c[0]&&v(s),b(c,s)}return e?e(n):n}}var C=t=>"function"==typeof t,A=(t,e)=>C(t)?t(e):t,k=(r=0,()=>(++r).toString()),_=()=>{if(void 0===n&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n},O=new Map,$=t=>{if(O.has(t))return;let e=setTimeout(()=>{O.delete(t),P({type:4,toastId:t})},1e3);O.set(t,e)},I=t=>{let e=O.get(t);e&&clearTimeout(e)},T=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,20)};case 1:return e.toast.id&&I(e.toast.id),{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case 2:let{toast:o}=e;return t.toasts.find(t=>t.id===o.id)?T(t,{type:1,toast:o}):T(t,{type:0,toast:o});case 3:let{toastId:r}=e;return r?$(r):t.toasts.forEach(t=>{$(t.id)}),{...t,toasts:t.toasts.map(t=>t.id===r||void 0===r?{...t,visible:!1}:t)};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let n=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+n}))}}},j=[],N={toasts:[],pausedAt:void 0},P=t=>{N=T(N,t),j.forEach(t=>{t(N)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(t={})=>{let[e,o]=(0,i.useState)(N);(0,i.useEffect)(()=>(j.push(o),()=>{let t=j.indexOf(o);t>-1&&j.splice(t,1)}),[e]);let r=e.toasts.map(e=>{var o,r;return{...t,...t[e.type],...e,duration:e.duration||(null==(o=t[e.type])?void 0:o.duration)||(null==t?void 0:t.duration)||S[e.type],style:{...t.style,...null==(r=t[e.type])?void 0:r.style,...e.style}}});return{...e,toasts:r}},z=(t,e="blank",o)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...o,id:(null==o?void 0:o.id)||k()}),L=t=>(e,o)=>{let r=z(e,t,o);return P({type:2,toast:r}),r.id},F=(t,e)=>L("blank")(t,e);F.error=L("error"),F.success=L("success"),F.loading=L("loading"),F.custom=L("custom"),F.dismiss=t=>{P({type:3,toastId:t})},F.remove=t=>P({type:4,toastId:t}),F.promise=(t,e,o)=>{let r=F.loading(e.loading,{...o,...null==o?void 0:o.loading});return t.then(t=>(F.success(A(e.success,t),{id:r,...o,...null==o?void 0:o.success}),t)).catch(t=>{F.error(A(e.error,t),{id:r,...o,...null==o?void 0:o.error})}),t};var M=(t,e)=>{P({type:1,toast:{id:t,height:e}})},R=()=>{P({type:5,time:Date.now()})},H=t=>{let{toasts:e,pausedAt:o}=D(t);(0,i.useEffect)(()=>{if(o)return;let t=Date.now(),r=e.map(e=>{if(e.duration===1/0)return;let o=(e.duration||0)+e.pauseDuration-(t-e.createdAt);if(o<0){e.visible&&F.dismiss(e.id);return}return setTimeout(()=>F.dismiss(e.id),o)});return()=>{r.forEach(t=>t&&clearTimeout(t))}},[e,o]);let r=(0,i.useCallback)(()=>{o&&P({type:6,time:Date.now()})},[o]),n=(0,i.useCallback)((t,o)=>{let{reverseOrder:r=!1,gutter:n=8,defaultPosition:a}=o||{},i=e.filter(e=>(e.position||a)===(t.position||a)&&e.height),s=i.findIndex(e=>e.id===t.id),l=i.filter((t,e)=>e<s&&t.visible).length;return i.filter(t=>t.visible).slice(...r?[l+1]:[0,l]).reduce((t,e)=>t+(e.height||0)+n,0)},[e]);return{toasts:e,handlers:{updateHeight:M,startPause:R,endPause:r,calculateOffset:n}}},U=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,Y=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,q=E("div")`
  position: absolute;
`,W=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,V=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Z=({toast:t})=>{let{icon:e,type:o,iconTheme:r}=t;return void 0!==e?"string"==typeof e?i.createElement(V,null,e):e:"blank"===o?null:i.createElement(W,null,i.createElement(B,{...r}),"loading"!==o&&i.createElement(q,null,"error"===o?i.createElement(U,{...r}):i.createElement(Y,{...r})))},G=t=>`
0% {transform: translate3d(0,${-200*t}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,J=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*t}%,-1px) scale(.6); opacity:0;}
`,K=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(t,e)=>{let o=t.includes("top")?1:-1,[r,n]=_()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(o),J(o)];return{animation:e?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},tt=i.memo(({toast:t,position:e,style:o,children:r})=>{let n=t.height?X(t.position||e||"top-center",t.visible):{opacity:0},a=i.createElement(Z,{toast:t}),s=i.createElement(Q,{...t.ariaProps},A(t.message,t));return i.createElement(K,{className:t.className,style:{...n,...o,...t.style}},"function"==typeof r?r({icon:a,message:s}):i.createElement(i.Fragment,null,a,s))});a=i.createElement,p.p=void 0,b=a,x=void 0,v=void 0;var te=({id:t,className:e,style:o,onHeightUpdate:r,children:n})=>{let a=i.useCallback(e=>{if(e){let o=()=>{r(t,e.getBoundingClientRect().height)};o(),new MutationObserver(o).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return i.createElement("div",{ref:a,className:e,style:o},n)},to=(t,e)=>{let o=t.includes("top"),r=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(o?1:-1)}px)`,...o?{top:0}:{bottom:0},...r}},tr=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,tn=({reverseOrder:t,position:e="top-center",toastOptions:o,gutter:r,children:n,containerStyle:a,containerClassName:s})=>{let{toasts:l,handlers:c}=H(o);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(o=>{let a=o.position||e,s=to(a,c.calculateOffset(o,{reverseOrder:t,gutter:r,defaultPosition:e}));return i.createElement(te,{id:o.id,key:o.id,onHeightUpdate:c.updateHeight,className:o.visible?tr:"",style:s},"custom"===o.type?A(o.message,o):n?n(o):i.createElement(tt,{toast:o,position:a}))}))},ta=F}}]);