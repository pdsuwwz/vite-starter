import{_ as j,e as g,l as w,f as y,h as P,r as a,o as n,c as i,w as _,s as b,d as t,g as p,t as c,i as m,j as k,n as I,k as $}from"./index.ab0938bd.js";const C=g({name:"ProjectItem",components:{Loading:w},props:{dataset:{type:Object,default(){return{}}}},setup(e){const{proxy:s}=$(),o=y(!1),d=P(()=>e.dataset.isPublished?"iconstop":"iconplay");async function l(u){o.value||(o.value=!0,await b(300),o.value=!1,s.$message({message:"Successful!"}),e.dataset.isPublished=!e.dataset.isPublished)}return{isLoading:o,getActionIcon:d,handlePublish:l}}}),L={class:"project-item-container"},N={style:{flex:"1","min-width":"0"}},B={class:"project-item__name"},T={class:"project-item__name-left"},V={class:"project-item__name-desc"},A={class:"project-item__name-desc__corpname"},F={class:"project-item__name-desc__corpname-maintext text_nowrap"},S={class:"project-item__name-desc__fullname text_nowrap"},z={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},D={class:"project-item-action__icon"},M={class:"project-item-action__status"};function O(e,s,o,d,l,u){const r=a("IconFont"),f=a("Tooltip"),h=a("Loading"),v=a("router-link");return n(),i(v,{to:`${e.$route.params.locale?"/"+e.$route.params.locale+"/":"/"}result/${e.dataset.id}/overview`},{default:_(()=>[t("ul",L,[t("li",N,[t("div",B,[t("div",T,[p(r,{icon:"iconfile"})]),t("div",V,[t("div",A,[t("span",F,c(e.dataset.corpName),1),t("span",{onClick:s[0]||(s[0]=m(()=>{},["prevent"]))},[e.dataset.notes?(n(),i(f,{key:0,content:e.dataset.notes},{default:_(()=>[p(r,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):k("v-if",!0)])]),t("p",S,c(e.dataset.name),1)])])]),t("li",z,c(e.dataset.createTime),1),t("li",{class:I(["project-item-action text_nowrap",{active:e.dataset.isPublished,loading:e.isLoading}]),onClick:s[1]||(s[1]=m(q=>e.handlePublish(e.dataset.id),["prevent"]))},[t("span",D,[e.isLoading?(n(),i(h,{key:1,class:"transform-rotate360"})):(n(),i(r,{key:0,icon:e.getActionIcon},null,8,["icon"]))]),t("span",M,c(e.dataset.isPublished?e._t("project.stop"):e._t("project.publish")),1)],2)])]),_:1},8,["to"])}const G=j(C,[["render",O],["__scopeId","data-v-8133db6d"],["__file","/home/runner/work/vite-starter/vite-starter/src/modules/Project/components/ProjectItem.vue"]]);export{G as default};
