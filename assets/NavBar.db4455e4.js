import{e as u,v as b,h,_ as p,o as n,b as l,d as t,F as N,m as A,t as x,k as C,G as B,H as w,r as i,c as m,w as s,g as r,a as T,I,n as L,p as $,q as j}from"./index.f4daf207.js";import{T as q}from"./Translations.6a3170fe.js";const F=u({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:a}=C(),e=b();return{title:h(()=>e.t("base.systemTitle")),handleClick:function(){a.$emit("click")}}}}),G={class:"side-action-container"},H={class:"action-list"};var z=p(F,[["render",function(a,e,g,f,k,_){return n(),l("div",G,[t("ul",H,[(n(),l(N,null,A(3,o=>t("li",{key:o,class:"action-item"}," Action "+x(o),1)),64))])])}],["__scopeId","data-v-285b295a"],["__file","/home/runner/work/vite-starter/vite-starter/src/components/Navigation/Side/SideAction.vue"]]);const D=u({name:"NavigationAvatar",components:{SwitchButton:B},setup(){const a=b();return{commandList:h(()=>[{label:a.t("login.signout"),icon:"switch-button",click:()=>{w.remove("token"),w.remove("name"),window.location.reload()}}]),handleCommand:e=>{e==null||e.click()}}}}),E=t("div",{style:{padding:"0 12px"}},[t("img",{src:"assets/navigation-avatar.d1925bd8.webp"})],-1),J={class:"navigation-avatar__dropdown-command"},K=u({name:"NavigationNavBar",components:{Translations:q,NavigationSideAction:z,NavigationAvatar:p(D,[["render",function(a,e,g,f,k,_){const o=i("el-icon"),c=i("el-dropdown-item"),d=i("el-dropdown-menu"),y=i("el-dropdown");return n(),m(y,{class:"navigation-avatar",trigger:"click"},{dropdown:s(()=>[r(d,null,{default:s(()=>[(n(!0),l(N,null,A(a.commandList,(v,S)=>(n(),m(c,{key:S,onClick:P=>a.handleCommand(v)},{default:s(()=>[t("div",J,[r(o,null,{default:s(()=>[(n(),m(T(v.icon)))]),_:2},1024),t("span",null,x(v.label),1)])]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[E]),_:1})}],["__file","/home/runner/work/vite-starter/vite-starter/src/components/Navigation/Avatar.vue"]])},props:{fixed:{type:Boolean,default:!0}}}),M={class:"navbar-header-box"},O=(a=>($("data-v-34e98aeb"),a=a(),j(),a))(()=>t("div",{style:{flex:"1"}},null,-1));var U=p(K,[["render",function(a,e,g,f,k,_){const o=i("NavigationSideAction"),c=i("NavigationAvatar"),d=i("Translations");return n(),l("div",null,[t("header",{class:L(["navigation-navbar-header-container",{"fixed-header":a.fixed}])},[t("div",M,[I(a.$slots,"default",{},void 0,!0),O,r(o),r(c),r(d,{dark:""})])],2)])}],["__scopeId","data-v-34e98aeb"],["__file","/home/runner/work/vite-starter/vite-starter/src/components/Navigation/NavBar.vue"]]);export{U as N};