import{_ as $,e as L,r as s,o as r,b as f,d as i,c as y,j as v,I as S,t as u,f as m,w as c,N as q,g as D,F as x,m as I,D as g,B as b,A as j,O as P,Q as U,S as V,k as E}from"./index.b9fa08cf.js";import{l as O}from"./lodash.8edbe03c.js";const B=L({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default:()=>[],required:!0},formData:{type:Object,default:()=>({}),required:!0},formConfig:{type:Array,default:()=>[],required:!0}},emits:["on-submit"],setup(){const{proxy:e}=E(),n=D(!1);return{showPassword:n,tooglePassword:function(){n.value=!n.value},getInputItemAttrs:function(o){const a={},l=o.type==="password";return a.type=l?n.value?"text":"password":"text",{clearable:!l,placeholder:o.placeholder,...a}},getFormItemAttrs:function(o){return{rules:V(o.rules)?o.rules.call(e):"",...O.exports.omit(o,["rules"])}},getActionItemEvent:function(o){const a={};return Object.keys(o).forEach(l=>{a[l]=o[l].bind(e.$parent,e.$refs.boxForm)}),a},handleClickLink:function(o){o.click.call(e.$parent,e.$refs.boxForm)},onSubmit:function(){e.$emit("on-submit",e.$refs.boxForm)}}}}),K={class:"user-account-container-layout"},N={class:"form-title"},Q={class:"form-title-icon"},z={class:"form-title-text"},G={class:"form-desc-text"},H={class:"form-custom-label"},T=$(B,[["render",function(e,n,o,a,l,J){const w=s("IconFont"),A=s("el-link"),k=s("FontAwesomeIcon"),h=s("el-input"),_=s("el-form-item"),C=s("el-button"),F=s("el-form");return r(),f("div",K,[i("div",N,[i("div",Q,[e.titleIcon?(r(),y(w,{key:0,icon:e.titleIcon},null,8,["icon"])):v("v-if",!0),S(e.$slots,"titleIcon",{},void 0,!0)]),i("p",z,u(e.title),1),i("p",G,u(e.desc),1)]),m(F,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:n[1]||(n[1]=q(t=>e.onSubmit(),["enter"]))},{default:c(()=>[(r(!0),f(x,null,I(e.formConfig,(t,d)=>(r(),y(_,P(b({key:d},e.getFormItemAttrs(t.attrs))),{default:c(()=>[i("div",H,[i("p",null,u(t.label),1),t.link?(r(),y(A,{key:0,type:"primary",underline:!1,onClick:p=>e.handleClickLink(t.link)},{default:c(()=>[g(u(t.link.text),1)]),_:2},1032,["onClick"])):v("v-if",!0)]),m(h,b({modelValue:e.formData[t.attrs.prop],"onUpdate:modelValue":p=>e.formData[t.attrs.prop]=p},e.getInputItemAttrs(t)),j({_:2},[t.prefixIcon?{name:"prefix",fn:c(()=>[m(k,{class:"input-icon-prefix",icon:t.prefixIcon},null,8,["icon"])])}:void 0,t.type==="password"?{name:"suffix",fn:c(()=>[m(k,{class:"input-icon-lock",icon:e.showPassword?"eye":"eye-slash",onClick:n[0]||(n[0]=p=>e.tooglePassword())},null,8,["icon"])])}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(r(!0),f(x,null,I(e.actionList,(t,d)=>(r(),f("div",{key:`${d}-`,class:"submit-form-action-list"},[m(C,b(t.attrs,{class:"submit-form-action-button"},U(e.getActionItemEvent(t.on)||{})),{default:c(()=>[g(u(t.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}],["__scopeId","data-v-e8361b7a"],["__file","/home/runner/work/vite-starter/vite-starter/src/modules/UserAccount/components/ContainerLayout.vue"]]);export{T as default};