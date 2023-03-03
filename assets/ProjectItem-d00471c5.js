import{w as p}from"./type-e4b589dd.js";import{l as j}from"./js.cookie-4e2855c5.js";import{a as g}from"./request-2e4d219f.js";import{ai as y,t as w,r as I,e as P,v as a,E as n,G as _,a7 as i,y as t,M as m,L as c,J as $,A as b,g as k}from"./_plugin-vue_export-helper-641f8b0e.js";const C=w({name:"ProjectItem",components:{Loading:j},props:{dataset:{type:Object,default(){return{}}}},setup(e){const{proxy:s}=k(),o=I(!1),l=P(()=>e.dataset.isPublished?"iconstop":"iconplay");async function d(u){o.value||(o.value=!0,await g(300),o.value=!1,s.$message({message:"Successful!"}),e.dataset.isPublished=!e.dataset.isPublished)}return{isLoading:o,getActionIcon:l,handlePublish:d}}}),L={class:"project-item-container"},N={style:{flex:"1","min-width":"0"}},A={class:"project-item__name"},B={class:"project-item__name-left"},T={class:"project-item__name-desc"},V={class:"project-item__name-desc__corpname"},F={class:"project-item__name-desc__corpname-maintext text_nowrap"},M={class:"project-item__name-desc__fullname text_nowrap"},S={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},z={class:"project-item-action__icon"},D={class:"project-item-action__status"};function E(e,s,o,l,d,u){const r=i("IconFont"),f=i("Tooltip"),h=i("Loading"),v=i("router-link");return a(),n(v,{to:`${e.$route.params.locale?"/"+e.$route.params.locale+"/":"/"}result/${e.dataset.id}/overview`},{default:_(()=>[t("ul",L,[t("li",N,[t("div",A,[t("div",B,[m(r,{icon:"iconfile"})]),t("div",T,[t("div",V,[t("span",F,c(e.dataset.corpName),1),t("span",{onClick:s[0]||(s[0]=p(()=>{},["prevent"]))},[e.dataset.notes?(a(),n(f,{key:0,content:e.dataset.notes},{default:_(()=>[m(r,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):$("",!0)])]),t("p",M,c(e.dataset.name),1)])])]),t("li",S,c(e.dataset.createTime),1),t("li",{class:b(["project-item-action text_nowrap",{active:e.dataset.isPublished,loading:e.isLoading}]),onClick:s[1]||(s[1]=p(G=>e.handlePublish(e.dataset.id),["prevent"]))},[t("span",z,[e.isLoading?(a(),n(h,{key:1,class:"transform-rotate360"})):(a(),n(r,{key:0,icon:e.getActionIcon},null,8,["icon"]))]),t("span",D,c(e.dataset.isPublished?e._t("project.stop"):e._t("project.publish")),1)],2)])]),_:1},8,["to"])}const K=y(C,[["render",E],["__scopeId","data-v-64cdcaec"]]);export{K as default};
