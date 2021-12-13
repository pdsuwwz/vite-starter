import{T as S}from"./Translations.f9f3cfab.js";import{_ as m}from"./index.25ba9cd0.js";import{I as u,W as b,i as w,o as i,s as l,t as n,C as h,B as x,H as N,M as T,a4 as B,d as y,r as o,k as p,l as s,m as d,S as j,J as I,y as L,a0 as $,a1 as H}from"./vendor.538a2773.js";const J=u({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=T(),t=b();return{title:w(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),M={class:"side-action-container"},W={class:"action-list"};var q=m(J,[["render",function(a,t,f,g,k,_){return i(),l("div",M,[n("ul",W,[(i(),l(h,null,x(3,e=>n("li",{key:e,class:"action-item"}," Action "+N(e),1)),64))])])}],["__scopeId","data-v-70c1a9d2"]]);const z=u({name:"NavigationAvatar",components:{SwitchButton:B},setup(){const a=b();return{commandList:w(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{y.remove("token"),y.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),D=n("div",{style:{padding:"0 12px"}},[n("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),E={class:"navigation-avatar__dropdown-command"},F=u({name:"NavigationNavBar",components:{Translations:S,NavigationSideAction:q,NavigationAvatar:m(z,[["render",function(a,t,f,g,k,_){const e=o("el-icon"),r=o("el-dropdown-item"),c=o("el-dropdown-menu"),A=o("el-dropdown");return i(),p(A,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[d(c,null,{default:s(()=>[(i(!0),l(h,null,x(a.commandList,(v,C)=>(i(),p(r,{key:C,onClick:O=>a.handleCommand(v)},{default:s(()=>[n("div",E,[d(e,null,{default:s(()=>[(i(),p(j(v.icon)))]),_:2},1024),n("span",null,N(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[D]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),G={class:"navbar-header-box"},K=(a=>($("data-v-18ef2163"),a=a(),H(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var U=m(F,[["render",function(a,t,f,g,k,_){const e=o("NavigationSideAction"),r=o("NavigationAvatar"),c=o("Translations");return i(),l("div",null,[n("header",{class:L(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",G,[I(a.$slots,"default",{},void 0,!0),K,d(e),d(r),d(c,{dark:""})])],2)])}],["__scopeId","data-v-18ef2163"]]);export{U as N};
