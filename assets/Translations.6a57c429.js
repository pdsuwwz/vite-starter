var y=Object.defineProperty,H=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var m=(a,o,s)=>o in a?y(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,u=(a,o)=>{for(var s in o||(o={}))z.call(o,s)&&m(a,s,o[s]);if(p)for(var s of p(o))T.call(o,s)&&m(a,s,o[s]);return a},i=(a,o)=>H(a,M(o));import{_ as f,l as b}from"./index.7411ca20.js";import{I as g,o as n,s as k,y as h,a0 as j,a1 as A,t as l,g as N,h as S,u as U,M as V,r,k as L,l as c,m as C,B as q,S as D,H as E,C as F}from"./vendor.10b7acef.js";const G=g({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}}),J=[(a=>(j("data-v-75d1e641"),a=a(),A(),a))(()=>l("svg",{viewBox:"0 0 512 512"},[l("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),l("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1))];var Q=f(g({name:"TranslationsBox",components:{LogoIcon:f(G,[["render",function(a,o,s,d,e,v){return n(),k("span",{class:h(["locales-logo-icon",{"is-dark":a.dark}])},J,2)}],["__scopeId","data-v-75d1e641"]])},props:{dark:{type:Boolean,default:!1}},setup(){const a=N(),o=S(),s=U();return{localesList:V(b),handleChange:d=>{setTimeout(()=>{const{localeCode:e}=d;o.replace({params:i(u({},a.params),{locale:e})}),s.dispatch("UserAccount/setLanguage",{locale:e})})}}}}),[["render",function(a,o,s,d,e,v){const _=r("LogoIcon"),w=r("el-dropdown-item"),x=r("el-dropdown-menu"),B=r("el-dropdown");return n(),L(B,{class:h(["translations-box",{"is-dark":a.dark}]),trigger:"click",onCommand:a.handleChange},{dropdown:c(()=>[C(x,null,{default:c(()=>[(n(!0),k(F,null,q(a.localesList,(t,I)=>(n(),L(w,{key:I,command:t},{default:c(()=>[D(E(t.localeName),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:c(()=>[l("span",null,[C(_,{dark:a.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}]]);export{Q as T};
