import{I as p,V as y,i as C,r as n,o as m,s as N,m as l,l as r,t as f,H as V,a0 as k,a1 as E,$ as I,M as j,w,U as B,L as x,k as b,a3 as F,G as L,u as H,S as M,O as A}from"./vendor.f3eb3fc2.js";import{_ as g,c as R,P as v}from"./index.d671b7e9.js";import{N as U}from"./NavBar.10048e49.js";import z from"./ProjectForm.bef58629.js";import D from"./TableHeader.159765a7.js";import G from"./TableBody.fd892337.js";import{l as K}from"./lodash.4a7aa4cc.js";import"./Translations.2af9bf39.js";import"./ProjectItem.a1b6b2d0.js";const O=p({name:"NavigationSideLogo",setup(){const e=y();return{title:C(()=>e.t("base.systemTitle"))}}}),q={class:"side-logo-container"},J=(e=>(k("data-v-1bc11fbf"),e=e(),E(),e))(()=>f("img",{class:"side-logo-img",src:"assets/vue.20be1948.svg",alt:"\u5546\u6807"},null,-1)),Q={class:"side-logo-title"};var W=g(O,[["render",function(e,t,c,o,a,d){const s=n("router-link");return m(),N("div",q,[l(s,{to:`/${e.$route.params.locale||""}`},{default:r(()=>[J,f("h1",Q,V(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-1bc11fbf"]]);const X=p({name:"SearchSelect",components:{Loading:I},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},fetch:{type:Function,default:()=>()=>{}}},emits:["update:modelValue","change","select"],setup(e){const{proxy:t}=x(),c=j(!1),o=j("");return w(()=>e.modelValue,a=>{o.value=a},{immediate:!0}),w(()=>o,K.exports.debounce(function(a){t.$emit("update:modelValue",a),t.$emit("change",a)},300)),{loading:c,searchValue:o}},methods:{keydown(e){e.keyCode===229&&(e.returnValue=!1,e.stopPropagation()),e.keyCode===32&&(e.returnValue=!1)},getExecText:e=>e.replace(new RegExp(/(<([^>]+)>)/,"gi"),""),handleSelect({value:e}){this.$emit("select",e)},async handleSearch(e,t){const c=e.toLowerCase().replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g),"\\$&");let o=[];if(!c)return void t(o);this.loading=!0,o=await this.fetch(c)||[],o.forEach(a=>{a.label=a.label.replace(new RegExp(c,"gi"),d=>`<span class="search-select-highlight">${d}</span>`)}),t(o),setTimeout(()=>{B(()=>{this.loading=!1})},200)}}}),Y=["title","innerHTML"],Z=p({name:"SearchCorporation",components:{SearchSelect:g(X,[["render",function(e,t,c,o,a,d){const s=n("loading"),u=n("el-icon"),h=n("IconFont"),S=n("el-autocomplete");return m(),b(S,L({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=i=>e.searchValue=i),modelModifiers:{trim:!0}},e.$attrs,{class:"search-input-container",size:"medium","popper-class":"search-select-container","trigger-on-focus":!1,"fetch-suggestions":e.handleSearch,placeholder:e.placeholder,onSelect:e.handleSelect,onKeydownCapture:t[1]||(t[1]=i=>e.keydown(i))}),F({default:r(({item:i})=>[f("span",{title:e.getExecText(i.label),innerHTML:i.label},null,8,Y)]),_:2},[e.loading?{name:"suffix",fn:r(()=>[l(u,{class:"search-loading-icon"},{default:r(()=>[l(s)]),_:1})])}:{name:"suffix",fn:r(()=>[f("i",{class:"search-icon"},[l(h,{icon:"iconsearch"})])])}]),1040,["modelValue","fetch-suggestions","placeholder","onSelect"])}]])},emits:["select"],setup:()=>({searchValue:j("")}),methods:{handleFetchSearch:async e=>R.map(t=>({value:t,label:t})),handleSelectSearch(e){this.$emit("select",e)}}});var de=g(p({name:"ProjectList",components:{NavigationNavBar:U,NavigationSideLogo:W,ProjectTableHeader:D,ProjectTableBody:G,SearchCorporation:g(Z,[["render",function(e,t,c,o,a,d){const s=n("SearchSelect");return m(),b(s,L({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=u=>e.searchValue=u),fetch:e.handleFetchSearch,placeholder:"\u641C\u7D22\u9879\u76EE","select-when-unmatched":"","highlight-first-item":""},e.$attrs,{onSelect:e.handleSelectSearch}),null,16,["modelValue","fetch","onSelect"])}]])},setup(){const{proxy:e}=x(),t=H(),c=y();function o(a){t.dispatch(v.getAction("getProjectList"),{kw:a})}return o(),{localeInject:c,handleCreateProject:function(){const a=A({name:"",corpName:"",notes:""});e.$ModalDialog({title:c.t("project.create"),top:"10vh",width:"50vw","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,renderComponent:{data:a,component:z},async onConfirm(d,s){if(!await d.validateRules())return Promise.reject(new Error("error"));s.fullLoading=!0;const{error:u,data:h}=await t.dispatch(v.getAction("createProject"),a);if(s.fullLoading=!1,u)return Promise.reject(new Error("error"));t.dispatch(v.getAction("getProjectList"))}})},handleSelectSearch:o}}}),[["render",function(e,t,c,o,a,d){const s=n("NavigationSideLogo"),u=n("NavigationNavBar"),h=n("IconFont"),S=n("el-button"),i=n("LayoutSection"),P=n("SearchCorporation"),T=n("ProjectTableHeader"),_=n("ProjectTableBody"),$=n("LayoutArea");return m(),b($,null,{top:r(()=>[l(u,{fixed:!1},{default:r(()=>[l(s)]),_:1})]),side:r(()=>[l(i,{title:e.localeInject.t("project.manageTitle")},{default:r(()=>[l(S,{type:"primary",class:"create-action",onClick:t[0]||(t[0]=ee=>e.handleCreateProject())},{default:r(()=>[l(h,{icon:"iconestablish"}),M(" "+V(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:r(()=>[l(i,{"has-divider":"","flex-content":""},{head:r(()=>[l(P,{onSelect:e.handleSelectSearch},null,8,["onSelect"])]),default:r(()=>[l(T),l(_)]),_:1})]),_:1})}],["__scopeId","data-v-02de9c7c"]]);export{de as default};
