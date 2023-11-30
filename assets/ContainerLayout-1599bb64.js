import{_ as V,e as x,r as a,o as l,b as p,d as i,c as k,A as C,L as P,t as c,g as d,w as u,M as q,i as E,F as $,z as A,x as F,m as b,k as I,N as D,O as N,Q as B,q as U}from"./index-1cd17762.js";import{l as O}from"./lodash-07546712.js";const j=x({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default(){return[]},required:!0},formData:{type:Object,default(){return{}},required:!0},formConfig:{type:Array,default(){return[]},required:!0}},emits:["on-submit"],setup(){const{proxy:e}=U(),n=E(!1);function g(){n.value=!n.value}function v(o){const s={},r=o.type==="password";return r?s.type=n.value?"text":"password":s.type="text",{clearable:!r,placeholder:o.placeholder,...s}}function h(o){return{rules:B(o.rules)?o.rules.call(e):"",...O.omit(o,["rules"])}}function w(o){const s={};return Object.keys(o).forEach(r=>{s[r]=o[r].bind(e.$parent,e.$refs.boxForm)}),s}function f(o){o.click.call(e.$parent,e.$refs.boxForm)}function m(){e.$emit("on-submit",e.$refs.boxForm)}return{showPassword:n,tooglePassword:g,getInputItemAttrs:v,getFormItemAttrs:h,getActionItemEvent:w,handleClickLink:f,onSubmit:m}}}),z={class:"user-account-container-layout"},K={class:"form-title"},H={class:"form-title-icon"},M={class:"form-title-text"},Q={class:"form-desc-text"},T={class:"form-custom-label"};function G(e,n,g,v,h,w){const f=a("IconFont"),m=a("el-link"),o=a("FontAwesomeIcon"),s=a("el-input"),r=a("el-form-item"),L=a("el-button"),S=a("el-form");return l(),p("div",z,[i("div",K,[i("div",H,[e.titleIcon?(l(),k(f,{key:0,icon:e.titleIcon},null,8,["icon"])):C("",!0),P(e.$slots,"titleIcon",{},void 0,!0)]),i("p",M,c(e.title),1),i("p",Q,c(e.desc),1)]),d(S,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:n[1]||(n[1]=q(t=>e.onSubmit(),["enter"]))},{default:u(()=>[(l(!0),p($,null,A(e.formConfig,(t,_)=>(l(),k(r,D(b({key:_},e.getFormItemAttrs(t.attrs))),{default:u(()=>[i("div",T,[i("p",null,c(t.label),1),t.link?(l(),k(m,{key:0,type:"primary",underline:!1,onClick:y=>e.handleClickLink(t.link)},{default:u(()=>[F(c(t.link.text),1)]),_:2},1032,["onClick"])):C("",!0)]),d(s,b({modelValue:e.formData[t.attrs.prop],"onUpdate:modelValue":y=>e.formData[t.attrs.prop]=y},e.getInputItemAttrs(t)),I({_:2},[t.prefixIcon?{name:"prefix",fn:u(()=>[d(o,{class:"input-icon-prefix",icon:t.prefixIcon},null,8,["icon"])]),key:"0"}:void 0,t.type==="password"?{name:"suffix",fn:u(()=>[d(o,{class:"input-icon-lock",icon:e.showPassword?"eye":"eye-slash",onClick:n[0]||(n[0]=y=>e.tooglePassword())},null,8,["icon"])]),key:"1"}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(l(!0),p($,null,A(e.actionList,(t,_)=>(l(),p("div",{key:`${_}-`,class:"submit-form-action-list"},[d(L,b(t.attrs,{class:"submit-form-action-button"},N(e.getActionItemEvent(t.on)||{})),{default:u(()=>[F(c(t.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}const W=V(j,[["render",G],["__scopeId","data-v-eca19e13"]]);export{W as default};