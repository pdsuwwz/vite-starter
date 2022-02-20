import{T as S}from"./Translations.eff21ee8.js";import{_ as u}from"./index.01d19425.js";import{I as p,W as b,i as h,o as i,s as d,t as n,C as N,B as x,H as y,M as B,a3 as T,d as _,r as o,k as m,l as s,m as l,S as I,J as $,y as L,$ as j,a0 as H}from"./vendor.7004d99a.js";const J=p({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=B(),t=b();return{title:h(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),M={class:"side-action-container"},W={class:"action-list"};var q=u(J,[["render",function(a,t,f,g,k,w){return i(),d("div",M,[n("ul",W,[(i(),d(N,null,x(3,e=>n("li",{key:e,class:"action-item"}," Action "+y(e),1)),64))])])}],["__scopeId","data-v-70c1a9d2"]]);const z=p({name:"NavigationAvatar",components:{SwitchButton:T},setup(){const a=b();return{commandList:h(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{_.remove("token"),_.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),D=n("div",{style:{padding:"0 12px"}},[n("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),E={class:"navigation-avatar__dropdown-command"},F=p({name:"NavigationNavBar",components:{Translations:S,NavigationSideAction:q,NavigationAvatar:u(z,[["render",function(a,t,f,g,k,w){const e=o("el-icon"),r=o("el-dropdown-item"),c=o("el-dropdown-menu"),A=o("el-dropdown");return i(),m(A,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[l(c,null,{default:s(()=>[(i(!0),d(N,null,x(a.commandList,(v,C)=>(i(),m(r,{key:C,onClick:O=>a.handleCommand(v)},{default:s(()=>[n("div",E,[l(e,null,{default:s(()=>[(i(),m(I(v.icon)))]),_:2},1024),n("span",null,y(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[D]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),G={class:"navbar-header-box"},K=(a=>(j("data-v-18ef2163"),a=a(),H(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var U=u(F,[["render",function(a,t,f,g,k,w){const e=o("NavigationSideAction"),r=o("NavigationAvatar"),c=o("Translations");return i(),d("div",null,[n("header",{class:L(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",G,[$(a.$slots,"default",{},void 0,!0),K,l(e),l(r),l(c,{dark:""})])],2)])}],["__scopeId","data-v-18ef2163"]]);export{U as N};
