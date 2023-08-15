"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("vue");require("../styles/index.css");const n=require("./button.js"),f=["type","autofocus","disabled"],m=t.defineComponent({name:"ELongButton"}),_=t.defineComponent({...m,props:n.Props,emits:n.Emits,setup(s,{emit:i}){const u=s,l=t.computed(()=>{const{type:e,size:o,round:a,plain:c,circle:d,disabled:p,loading:b}=u;return[{[`br-button--${e}`]:e,[`br-button--${o}`]:o,"is-disabled":p,"is-loading":b,"is-round":a,"is-plain":c,"is-circle":d}]});function r(e){i("click",e)}return(e,o)=>(t.openBlock(),t.createElementBlock("button",{class:t.normalizeClass(["br-button",t.unref(l)]),type:e.nativeType,autofocus:e.autoFocus,disabled:e.disabled||e.loading,onClick:r},[t.renderSlot(e.$slots,"default")],10,f))}});exports.default=_;
