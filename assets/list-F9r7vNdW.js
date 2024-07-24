import{_ as f,e as g,u as v,f as N,r as o,o as _,b as T,g as n,w as s,d as h,t as V,p as I,h as B,l as E,i as $,j as w,n as F,c as y,k as x,m as j,q as b,s as A,v as H,x as M,y as R,P as S}from"./index-oSxA9JSf.js";import{N as q}from"./NavBar-DeRHsMpp.js";import D from"./ProjectForm-NW1TBlUe.js";import z from"./TableHeader-CvTIoydv.js";import U from"./TableBody-CDarQBTb.js";import{l as K}from"./lodash-6LGmR31X.js";import"./Translations-BAfqqnOY.js";import"./ProjectItem-CdGgr6rn.js";const G="data:image/svg+xml,%3csvg%20viewBox='0%200%202500%202165.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m1538.7%200-288.7%20500-288.7-500h-961.3l1250%202165.1%201250-2165.1z'%20fill='%234dba87'/%3e%3cpath%20d='m1538.7%200-288.7%20500-288.7-500h-461.3l750%201299%20750-1299z'%20fill='%23435466'/%3e%3c/svg%3e",J=g({name:"NavigationSideLogo",setup(){const e=v();return{title:N(()=>e.t("base.systemTitle"))}}}),O=e=>(I("data-v-9ea8895b"),e=e(),B(),e),Q={class:"side-logo-container"},W=O(()=>h("img",{class:"side-logo-img",src:G,alt:"商标"},null,-1)),X={class:"side-logo-title"};function Y(e,t,r,a,c,l){const i=o("router-link");return _(),T("div",Q,[n(i,{to:`/${e.$route.params.locale||""}`},{default:s(()=>[W,h("h1",X,V(e.title),1)]),_:1},8,["to"])])}const Z=f(J,[["render",Y],["__scopeId","data-v-9ea8895b"]]),ee=g({name:"SearchSelect",components:{Loading:E},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},fetch:{type:Function,default(){return()=>{}}}},emits:["update:modelValue","change","select"],setup(e){const{proxy:t}=b(),r=$(!1),a=$("");return w(()=>e.modelValue,c=>{a.value=c},{immediate:!0}),w(()=>a,K.debounce(c=>{t.$emit("update:modelValue",c),t.$emit("change",c)},300)),{loading:r,searchValue:a}},methods:{keydown(e){e.keyCode===229&&(e.returnValue=!1,e.stopPropagation()),e.keyCode===32&&(e.returnValue=!1)},getExecText(e){return e.replace(new RegExp(/(<([^>]+)>)/,"gi"),"")},handleSelect({value:e}){this.$emit("select",e)},async handleSearch(e,t){const r=e.toLowerCase().replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g),"\\$&");let a=[];if(!r){t(a);return}this.loading=!0,a=await this.fetch(r)||[],a.forEach(l=>{l.label=l.label.replace(new RegExp(r,"gi"),i=>`<span class="search-select-highlight">${i}</span>`)}),t(a),setTimeout(()=>{F(()=>{this.loading=!1})},200)}}}),te={class:"search-icon"},oe=["title","innerHTML"];function ae(e,t,r,a,c,l){const i=o("loading"),p=o("el-icon"),m=o("IconFont"),u=o("el-autocomplete");return _(),y(u,j({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=d=>e.searchValue=d),modelModifiers:{trim:!0}},e.$attrs,{class:"search-input-container","popper-class":"search-select-container","trigger-on-focus":!1,"fetch-suggestions":e.handleSearch,placeholder:e.placeholder,onSelect:e.handleSelect,onKeydownCapture:t[1]||(t[1]=d=>e.keydown(d))}),x({default:s(({item:d})=>[h("span",{title:e.getExecText(d.label),innerHTML:d.label},null,8,oe)]),_:2},[e.loading?{name:"suffix",fn:s(()=>[n(p,{class:"search-loading-icon"},{default:s(()=>[n(i)]),_:1})]),key:"0"}:{name:"suffix",fn:s(()=>[h("i",te,[n(m,{icon:"iconsearch"})])]),key:"1"}]),1040,["modelValue","fetch-suggestions","placeholder","onSelect"])}const ne=f(ee,[["render",ae]]),se=g({name:"SearchCorporation",components:{SearchSelect:ne},emits:["select"],setup(){return{searchValue:$("")}},methods:{async handleFetchSearch(e){return A.map(t=>({value:t,label:t}))},handleSelectSearch(e){this.$emit("select",e)}}});function re(e,t,r,a,c,l){const i=o("SearchSelect");return _(),y(i,j({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=p=>e.searchValue=p),fetch:e.handleFetchSearch,placeholder:"搜索项目","select-when-unmatched":"","highlight-first-item":""},e.$attrs,{onSelect:e.handleSelectSearch}),null,16,["modelValue","fetch","onSelect"])}const ce=f(se,[["render",re]]),le=g({name:"ProjectList",components:{NavigationNavBar:q,NavigationSideLogo:Z,ProjectTableHeader:z,ProjectTableBody:U,SearchCorporation:ce},setup(){const{proxy:e}=b(),t=H(),r=v();function a(){const l=R({name:"",corpName:"",notes:""});e.$ModalDialog({title:r.t("project.create"),top:"10vh",width:"50vw","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,renderComponent:{data:l,component:D},async onConfirm(i,p){if(!await i.validateRules())return Promise.reject(new Error("error"));p.fullLoading=!0;const{error:u,data:d}=await t.dispatch(S.getAction("createProject"),l);if(p.fullLoading=!1,u)return Promise.reject(new Error("error"));t.dispatch(S.getAction("getProjectList"))}})}function c(l){t.dispatch(S.getAction("getProjectList"),{kw:l})}return c(),{localeInject:r,handleCreateProject:a,handleSelectSearch:c}}});function ie(e,t,r,a,c,l){const i=o("NavigationSideLogo"),p=o("NavigationNavBar"),m=o("IconFont"),u=o("el-button"),d=o("LayoutSection"),L=o("SearchCorporation"),P=o("ProjectTableHeader"),C=o("ProjectTableBody"),k=o("LayoutArea");return _(),y(k,null,{top:s(()=>[n(p,{fixed:!1},{default:s(()=>[n(i)]),_:1})]),side:s(()=>[n(d,{title:e.localeInject.t("project.manageTitle")},{default:s(()=>[n(u,{type:"primary",class:"create-action",onClick:t[0]||(t[0]=de=>e.handleCreateProject())},{default:s(()=>[n(m,{icon:"iconestablish"}),M(" "+V(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:s(()=>[n(d,{"has-divider":"","flex-content":""},{head:s(()=>[n(L,{onSelect:e.handleSelectSearch},null,8,["onSelect"])]),default:s(()=>[n(P),n(C)]),_:1})]),_:1})}const $e=f(le,[["render",ie],["__scopeId","data-v-c205bd4c"]]);export{$e as default};
