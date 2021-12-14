import{T as S}from"./Translations.e6325463.js";import{_ as m}from"./index.44ceacde.js";import{I as u,W as _,i as b,o as e,s as l,t as n,C as h,B as x,H as N,M as T,a3 as B,d as y,r as i,k as p,l as s,m as d,S as j,J as I,y as $,$ as L,a0 as H}from"./vendor.0ea52794.js";const J=u({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=T(),t=_();return{title:b(()=>t.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),M={class:"side-action-container"},W={class:"action-list"};var q=m(J,[["render",function(a,t,f,g,k,w){return e(),l("div",M,[n("ul",W,[(e(),l(h,null,x(3,o=>n("li",{key:o,class:"action-item"}," Action "+N(o),1)),64))])])}],["__scopeId","data-v-70c1a9d2"]]);const z=u({name:"NavigationAvatar",components:{SwitchButton:B},setup(){const a=_();return{commandList:b(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{y.remove("token"),y.remove("name"),window.location.reload()}}]),handleCommand:t=>{t==null||t.click()}}}}),D=n("div",{style:{padding:"0 12px"}},[n("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),E={class:"navigation-avatar__dropdown-command"},F=u({name:"NavigationNavBar",components:{Translations:S,NavigationSideAction:q,NavigationAvatar:m(z,[["render",function(a,t,f,g,k,w){const o=i("el-icon"),r=i("el-dropdown-item"),c=i("el-dropdown-menu"),A=i("el-dropdown");return e(),p(A,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[d(c,null,{default:s(()=>[(e(!0),l(h,null,x(a.commandList,(v,C)=>(e(),p(r,{key:C,onClick:O=>a.handleCommand(v)},{default:s(()=>[n("div",E,[d(o,null,{default:s(()=>[(e(),p(j(v.icon)))]),_:2},1024),n("span",null,N(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[D]),_:1})}]])},props:{fixed:{type:Boolean,default:!0}}}),G={class:"navbar-header-box"},K=(a=>(L("data-v-18ef2163"),a=a(),H(),a))(()=>n("div",{style:{flex:"1"}},null,-1));var U=m(F,[["render",function(a,t,f,g,k,w){const o=i("NavigationSideAction"),r=i("NavigationAvatar"),c=i("Translations");return e(),l("div",null,[n("header",{class:$(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[n("div",G,[I(a.$slots,"default",{},void 0,!0),K,d(o),d(r),d(c,{dark:""})])],2)])}],["__scopeId","data-v-18ef2163"]]);export{U as N};
