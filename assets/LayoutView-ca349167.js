import{_ as c,e as r,r as t,o as _,b as k,g as e,w as o,d as a,t as N,c as $,I as B,v as y}from"./index-9a0bc429.js";import{N as S}from"./NavBar-634782ee.js";import"./Translations-b4f87518.js";const b=r({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),h={class:"go-back-container"},w={class:"go-back-title"};function L(n,l,u,d,p,m){const s=t("IconFont"),i=t("router-link");return _(),k("div",h,[e(i,{to:`/${n.$route.params.locale||""}`},{default:o(()=>[e(s,{icon:"iconarrow_left",class:"go-back-icon"}),a("h1",w,N(n.title),1)]),_:1},8,["to"])])}const G=c(b,[["render",L],["__scopeId","data-v-d6fb50e4"]]),I=r({name:"LayoutView",components:{NavigationNavBar:S,NavigationSideGoBack:G},setup(){return B(),y(),{}}}),V=a("ul",null,[a("li",null,"111"),a("li",null,"222"),a("li",null,"333")],-1);function x(n,l,u,d,p,m){const s=t("NavigationSideGoBack"),i=t("NavigationNavBar"),f=t("LayoutSection"),v=t("router-view"),g=t("LayoutArea");return _(),$(g,null,{top:o(()=>[e(i,{fixed:!1},{default:o(()=>[e(s,{title:n._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[e(f,{"has-divider":"",title:n._t("result.title")},{default:o(()=>[V]),_:1},8,["title"])]),content:o(()=>[e(v)]),_:1})}const D=c(I,[["render",x]]);export{D as default};
