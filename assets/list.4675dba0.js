import{J as f,W as j,i as T,r as n,o as p,s as k,m as l,l as r,t as m,I as w,$ as N,a0 as E,Z as I,O as y,w as b,V as F,M as x,k as V,a2 as H,H as P,u as M,T as A,P as B}from"./vendor.eb40d316.js";import{_ as g,c as R,P as v}from"./index.4850d032.js";import{N as U}from"./NavBar.682e035f.js";import D from"./ProjectForm.d7748543.js";import J from"./TableHeader.ee98bcb0.js";import K from"./TableBody.8ea7bc5e.js";import{l as O}from"./lodash.e6b7baaa.js";import"./Translations.af5abb4c.js";import"./ProjectItem.795852a5.js";const W=f({name:"NavigationSideLogo",setup(){const e=j();return{title:T(()=>e.t("base.systemTitle"))}}}),Z={class:"side-logo-container"},q=(e=>(N("data-v-26d1bd62"),e=e(),E(),e))(()=>m("img",{class:"side-logo-img",src:"assets/vue.20be1948.svg",alt:"\u5546\u6807"},null,-1)),z={class:"side-logo-title"};var G=g(W,[["render",function(e,t,c,o,a,d){const s=n("router-link");return p(),k("div",Z,[l(s,{to:`/${e.$route.params.locale||""}`},{default:r(()=>[q,m("h1",z,w(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-26d1bd62"]]);const Q=f({name:"SearchSelect",components:{Loading:I},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},fetch:{type:Function,default:()=>()=>{}}},emits:["update:modelValue","change","select"],setup(e){const{proxy:t}=x(),c=y(!1),o=y("");return b(()=>e.modelValue,a=>{o.value=a},{immediate:!0}),b(()=>o,O.exports.debounce(function(a){t.$emit("update:modelValue",a),t.$emit("change",a)},300)),{loading:c,searchValue:o}},methods:{keydown(e){e.keyCode===229&&(e.returnValue=!1,e.stopPropagation()),e.keyCode===32&&(e.returnValue=!1)},getExecText:e=>e.replace(new RegExp(/(<([^>]+)>)/,"gi"),""),handleSelect({value:e}){this.$emit("select",e)},async handleSearch(e,t){const c=e.toLowerCase().replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g),"\\$&");let o=[];if(!c)return void t(o);this.loading=!0,o=await this.fetch(c)||[],o.forEach(a=>{a.label=a.label.replace(new RegExp(c,"gi"),d=>`<span class="search-select-highlight">${d}</span>`)}),t(o),setTimeout(()=>{F(()=>{this.loading=!1})},200)}}}),X=["title","innerHTML"],Y=f({name:"SearchCorporation",components:{SearchSelect:g(Q,[["render",function(e,t,c,o,a,d){const s=n("loading"),u=n("el-icon"),h=n("IconFont"),S=n("el-autocomplete");return p(),V(S,P({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=i=>e.searchValue=i),modelModifiers:{trim:!0}},e.$attrs,{class:"search-input-container","popper-class":"search-select-container","trigger-on-focus":!1,"fetch-suggestions":e.handleSearch,placeholder:e.placeholder,onSelect:e.handleSelect,onKeydownCapture:t[1]||(t[1]=i=>e.keydown(i))}),H({default:r(({item:i})=>[m("span",{title:e.getExecText(i.label),innerHTML:i.label},null,8,X)]),_:2},[e.loading?{name:"suffix",fn:r(()=>[l(u,{class:"search-loading-icon"},{default:r(()=>[l(s)]),_:1})])}:{name:"suffix",fn:r(()=>[m("i",{class:"search-icon"},[l(h,{icon:"iconsearch"})])])}]),1040,["modelValue","fetch-suggestions","placeholder","onSelect"])}]])},emits:["select"],setup:()=>({searchValue:y("")}),methods:{handleFetchSearch:async e=>R.map(t=>({value:t,label:t})),handleSelectSearch(e){this.$emit("select",e)}}});var de=g(f({name:"ProjectList",components:{NavigationNavBar:U,NavigationSideLogo:G,ProjectTableHeader:J,ProjectTableBody:K,SearchCorporation:g(Y,[["render",function(e,t,c,o,a,d){const s=n("SearchSelect");return p(),V(s,P({modelValue:e.searchValue,"onUpdate:modelValue":t[0]||(t[0]=u=>e.searchValue=u),fetch:e.handleFetchSearch,placeholder:"\u641C\u7D22\u9879\u76EE","select-when-unmatched":"","highlight-first-item":""},e.$attrs,{onSelect:e.handleSelectSearch}),null,16,["modelValue","fetch","onSelect"])}]])},setup(){const{proxy:e}=x(),t=M(),c=j();function o(a){t.dispatch(v.getAction("getProjectList"),{kw:a})}return o(),{localeInject:c,handleCreateProject:function(){const a=B({name:"",corpName:"",notes:""});e.$ModalDialog({title:c.t("project.create"),top:"10vh",width:"50vw","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,renderComponent:{data:a,component:D},async onConfirm(d,s){if(!await d.validateRules())return Promise.reject(new Error("error"));s.fullLoading=!0;const{error:u,data:h}=await t.dispatch(v.getAction("createProject"),a);if(s.fullLoading=!1,u)return Promise.reject(new Error("error"));t.dispatch(v.getAction("getProjectList"))}})},handleSelectSearch:o}}}),[["render",function(e,t,c,o,a,d){const s=n("NavigationSideLogo"),u=n("NavigationNavBar"),h=n("IconFont"),S=n("el-button"),i=n("LayoutSection"),L=n("SearchCorporation"),_=n("ProjectTableHeader"),$=n("ProjectTableBody"),C=n("LayoutArea");return p(),V(C,null,{top:r(()=>[l(u,{fixed:!1},{default:r(()=>[l(s)]),_:1})]),side:r(()=>[l(i,{title:e.localeInject.t("project.manageTitle")},{default:r(()=>[l(S,{type:"primary",class:"create-action",onClick:t[0]||(t[0]=ee=>e.handleCreateProject())},{default:r(()=>[l(h,{icon:"iconestablish"}),A(" "+w(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:r(()=>[l(i,{"has-divider":"","flex-content":""},{head:r(()=>[l(L,{onSelect:e.handleSelectSearch},null,8,["onSelect"])]),default:r(()=>[l(_),l($)]),_:1})]),_:1})}],["__scopeId","data-v-1004cb80"]]);export{de as default};
