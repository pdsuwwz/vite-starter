var b=Object.defineProperty,y=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var i=(a,o,s)=>o in a?b(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,m=(a,o)=>{for(var s in o||(o={}))z.call(o,s)&&i(a,s,o[s]);if(p)for(var s of p(o))A.call(o,s)&&i(a,s,o[s]);return a},u=(a,o)=>y(a,T(o));import{J as k,o as c,s as h,y as w,$ as H,a0 as M,t as n,g as D,h as J,u as N,O,r as e,k as f,l as r,m as g,B as U,I as V,C as $,D as j}from"./vendor.98e51a3c.js";import{_ as C,l as q}from"./index.bbe8253a.js";const E=k({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}}),F=[(a=>(H("data-v-191a8fb3"),a=a(),M(),a))(()=>n("svg",{viewBox:"0 0 512 512"},[n("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),n("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1))],G=k({name:"TranslationsBox",components:{LogoIcon:C(E,[["render",function(a,o,s,t,l,L){return c(),h("span",{class:w(["locales-logo-icon",{"is-dark":a.dark}])},F,2)}],["__scopeId","data-v-191a8fb3"]])},props:{dark:{type:Boolean,default:!1}},setup(){const a=D(),o=J(),s=N();return{localesList:O(q),handleChange:t=>{setTimeout(()=>{const{localeCode:l}=t;o.replace({params:u(m({},a.params),{locale:l})}),s.dispatch("UserAccount/setLanguage",{locale:l})})}}}}),K={class:"icon-outer"},P={class:"custom-dropdown-item"};var W=C(G,[["render",function(a,o,s,t,l,L){const v=e("LogoIcon"),_=e("el-dropdown-item"),x=e("el-dropdown-menu"),B=e("el-dropdown");return c(),f(B,{class:w(["translations-box",{"is-dark":a.dark}]),trigger:"click","popper-class":"translations-box",onCommand:a.handleChange},{dropdown:r(()=>[g(x,null,{default:r(()=>[(c(!0),h($,null,U(a.localesList,(d,I)=>(c(),f(_,{key:I,command:d},{default:r(()=>[n("span",P,V(d.localeName),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:r(()=>[n("span",K,[j(` Translations<el-icon class="el-icon--right">
        <ArrowDown />
      </el-icon> `),g(v,{dark:a.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}]]);export{W as T};