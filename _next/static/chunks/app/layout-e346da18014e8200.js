(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{299:function(e,t,o){Promise.resolve().then(o.t.bind(o,8877,23)),Promise.resolve().then(o.t.bind(o,3247,23)),Promise.resolve().then(o.bind(o,5925)),Promise.resolve().then(o.bind(o,5015))},5015:function(e,t,o){"use strict";o.r(t),o.d(t,{AppContext:function(){return s},default:function(){return c},useAppContext:function(){return l}});var n=o(7437),r=o(2265);class i extends Error{constructor(e){super(e)}}var a=o(5925);let s=(0,r.createContext)(void 0);function l(){let e=(0,r.useContext)(s);if(void 0===e)throw new i("You are trying to useAppContext outside App Provider.");return e}function c(e){let{children:t}=e,[o,i]=function(){let[e,t]=(0,r.useState)({steps:[],isLoading:!1});return(0,r.useEffect)(()=>{t(e=>({...e,steps:[{name:"Init",type:"Init",next:["Condition 1","Condition 2"]},{name:"Condition 1",type:"Conditional",next:["Action 1"]},{name:"Action 1",type:"Action",next:["Action 2"]},{name:"Action 2",type:"Action",next:["End"]},{name:"Condition 2",type:"Conditional",next:["Action 3"]},{name:"Action 3",type:"Action",next:["Condition 3","Condition 4"]},{name:"Condition 3",type:"Conditional",next:["End"]},{name:"Condition 4",type:"Conditional",next:["Action 4"]},{name:"Action 4",type:"Action",next:["End"]},{name:"End",type:"End"}]}))},[]),[e,{createStep:function(o,n){if(0===n.length){a.toast.error("The step name should not be empty");return}let r=function(t){let o=!e.steps.map(e=>e.name).includes(t.trim());return o}(n);r?t(t=>({...t,steps:[...e.steps,{name:n.trim(),type:o}]})):a.toast.error("The name should be unique in the workflow")},updateStep:function(o,n){try{let r=e.steps.map(e=>e.name===o?n:e),i=r.map(e=>{var t;return{...e,next:null===(t=e.next)||void 0===t?void 0:t.map(e=>e===o?n.name:e)}});t(e=>({...e,steps:i}))}catch(e){a.toast.error("Error! Unable to update.")}},removeStep:function(o){let n=function(){let t=e.steps.filter(e=>"Conditional"===e.type).length,o=e.steps.filter(e=>"Action"===e.type).length;return o>1&&t>1}();n?t(t=>({...t,steps:e.steps.filter(e=>e.name!==o)})):a.toast.error("The workflow should have at least one Conditional and one Action.")},removeLink:function(o,n){t(t=>({...t,steps:e.steps.map(e=>{if(e.name===o){var t;return{...e,next:null===(t=e.next)||void 0===t?void 0:t.filter(e=>e!==n)}}return e})}))},resetWorkflow:function(){t(e=>({...e,steps:[{name:"Init",type:"Init",next:["Condition Example"]},{name:"Condition Example",type:"Conditional",next:["Action Example"]},{name:"Action Example",type:"Action",next:["End"]},{name:"End",type:"End"}]}))}}]}(),l={...i};return(0,n.jsx)(s.Provider,{value:{workflowState:o,...l},children:t})}},8877:function(){},3247:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},622:function(e,t,o){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=o(2265),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,i={},c=null,d=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},7437:function(e,t,o){"use strict";e.exports=o(622)},5925:function(e,t,o){"use strict";let n,r;o.r(t),o.d(t,{CheckmarkIcon:function(){return Y},ErrorIcon:function(){return U},LoaderIcon:function(){return B},ToastBar:function(){return ee},ToastIcon:function(){return Z},Toaster:function(){return er},default:function(){return ei},resolveValue:function(){return _},toast:function(){return F},useToaster:function(){return H},useToasterStore:function(){return D}});var i,a=o(2265);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let o="",n="",r="";for(let i in e){let a=e[i];"@"==i[0]?"i"==i[1]?o=i+" "+a+";":n+="f"==i[1]?p(a,i):i+"{"+p(a,"k"==i[1]?"":t)+"}":"object"==typeof a?n+=p(a,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=a&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=p.p?p.p(i,a):i+":"+a+";")}return o+(t&&r?t+"{"+r+"}":r)+n},f={},m=e=>{if("object"==typeof e){let t="";for(let o in e)t+=o+m(e[o]);return t}return e},y=(e,t,o,n,r)=>{var i;let a=m(e),s=f[a]||(f[a]=(e=>{let t=0,o=11;for(;t<e.length;)o=101*o+e.charCodeAt(t++)>>>0;return"go"+o})(a));if(!f[s]){let t=a!==e?e:(e=>{let t,o,n=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?n.shift():t[3]?(o=t[3].replace(u," ").trim(),n.unshift(n[0][o]=n[0][o]||{})):n[0][t[1]]=t[2].replace(u," ").trim();return n[0]})(e);f[s]=p(r?{["@keyframes "+s]:t}:t,o?"":"."+s)}let l=o&&f.g?f.g:null;return o&&(f.g=f[s]),i=f[s],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=n?i+t.data:t.data+i),s},h=(e,t,o)=>e.reduce((e,n,r)=>{let i=t[r];if(i&&i.call){let e=i(o),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+n+(null==i?"":i)},"");function g(e){let t=this||{},o=e.call?e(t.p):e;return y(o.unshift?o.raw?h(o,[].slice.call(arguments,1),t.p):o.reduce((e,o)=>Object.assign(e,o&&o.call?o(t.p):o),{}):o,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let b,x,v,w=g.bind({k:1});function E(e,t){let o=this||{};return function(){let n=arguments;function r(i,a){let s=Object.assign({},i),l=s.className||r.className;o.p=Object.assign({theme:x&&x()},s),o.o=/ *go\d+/.test(l),s.className=g.apply(o,n)+(l?" "+l:""),t&&(s.ref=a);let c=e;return e[0]&&(c=s.as||e,delete s.as),v&&c[0]&&v(s),b(c,s)}return t?t(r):r}}var C=e=>"function"==typeof e,_=(e,t)=>C(e)?e(t):e,k=(n=0,()=>(++n).toString()),A=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},O=new Map,I=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),j({type:4,toastId:e})},1e3);O.set(e,t)},$=e=>{let t=O.get(e);t&&clearTimeout(t)},N=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&$(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:o}=t;return e.toasts.find(e=>e.id===o.id)?N(e,{type:1,toast:o}):N(e,{type:0,toast:o});case 3:let{toastId:n}=t;return n?I(n):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},P=[],T={toasts:[],pausedAt:void 0},j=e=>{T=N(T,e),P.forEach(e=>{e(T)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[t,o]=(0,a.useState)(T);(0,a.useEffect)(()=>(P.push(o),()=>{let e=P.indexOf(o);e>-1&&P.splice(e,1)}),[t]);let n=t.toasts.map(t=>{var o,n;return{...e,...e[t.type],...t,duration:t.duration||(null==(o=e[t.type])?void 0:o.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(n=e[t.type])?void 0:n.style,...t.style}}});return{...t,toasts:n}},z=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(null==o?void 0:o.id)||k()}),L=e=>(t,o)=>{let n=z(t,e,o);return j({type:2,toast:n}),n.id},F=(e,t)=>L("blank")(e,t);F.error=L("error"),F.success=L("success"),F.loading=L("loading"),F.custom=L("custom"),F.dismiss=e=>{j({type:3,toastId:e})},F.remove=e=>j({type:4,toastId:e}),F.promise=(e,t,o)=>{let n=F.loading(t.loading,{...o,...null==o?void 0:o.loading});return e.then(e=>(F.success(_(t.success,e),{id:n,...o,...null==o?void 0:o.success}),e)).catch(e=>{F.error(_(t.error,e),{id:n,...o,...null==o?void 0:o.error})}),e};var M=(e,t)=>{j({type:1,toast:{id:e,height:t}})},R=()=>{j({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:o}=D(e);(0,a.useEffect)(()=>{if(o)return;let e=Date.now(),n=t.map(t=>{if(t.duration===1/0)return;let o=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(o<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),o)});return()=>{n.forEach(e=>e&&clearTimeout(e))}},[t,o]);let n=(0,a.useCallback)(()=>{o&&j({type:6,time:Date.now()})},[o]),r=(0,a.useCallback)((e,o)=>{let{reverseOrder:n=!1,gutter:r=8,defaultPosition:i}=o||{},a=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),s=a.findIndex(t=>t.id===e.id),l=a.filter((e,t)=>t<s&&e.visible).length;return a.filter(e=>e.visible).slice(...n?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:R,endPause:n,calculateOffset:r}}},U=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
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
    background: ${e=>e.secondary||"#fff"};
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
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
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
  background: ${e=>e.primary||"#61d345"};
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
    border-color: ${e=>e.secondary||"#fff"};
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
`,Z=({toast:e})=>{let{icon:t,type:o,iconTheme:n}=e;return void 0!==t?"string"==typeof t?a.createElement(V,null,t):t:"blank"===o?null:a.createElement(W,null,a.createElement(B,{...n}),"loading"!==o&&a.createElement(q,null,"error"===o?a.createElement(U,{...n}):a.createElement(Y,{...n})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,J=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
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
`,X=(e,t)=>{let o=e.includes("top")?1:-1,[n,r]=A()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(o),J(o)];return{animation:t?`${w(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=a.memo(({toast:e,position:t,style:o,children:n})=>{let r=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},i=a.createElement(Z,{toast:e}),s=a.createElement(Q,{...e.ariaProps},_(e.message,e));return a.createElement(K,{className:e.className,style:{...r,...o,...e.style}},"function"==typeof n?n({icon:i,message:s}):a.createElement(a.Fragment,null,i,s))});i=a.createElement,p.p=void 0,b=i,x=void 0,v=void 0;var et=({id:e,className:t,style:o,onHeightUpdate:n,children:r})=>{let i=a.useCallback(t=>{if(t){let o=()=>{n(e,t.getBoundingClientRect().height)};o(),new MutationObserver(o).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return a.createElement("div",{ref:i,className:t,style:o},r)},eo=(e,t)=>{let o=e.includes("top"),n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:A()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...o?{top:0}:{bottom:0},...n}},en=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,er=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:n,children:r,containerStyle:i,containerClassName:s})=>{let{toasts:l,handlers:c}=H(o);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(o=>{let i=o.position||t,s=eo(i,c.calculateOffset(o,{reverseOrder:e,gutter:n,defaultPosition:t}));return a.createElement(et,{id:o.id,key:o.id,onHeightUpdate:c.updateHeight,className:o.visible?en:"",style:s},"custom"===o.type?_(o.message,o):r?r(o):a.createElement(ee,{toast:o,position:i}))}))},ei=F}},function(e){e.O(0,[971,864,744],function(){return e(e.s=299)}),_N_E=e.O()}]);