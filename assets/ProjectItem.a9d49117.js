import{_ as j,e as h,l as g,f as w,h as P,r as o,o as n,c as i,w as d,d as a,g as p,t as c,i as m,j as b,n as x,s as y,k}from"./index.f4daf207.js";const I=h({name:"ProjectItem",components:{Loading:g},props:{dataset:{type:Object,default:()=>({})}},setup(t){const{proxy:e}=k(),s=w(!1),r=P(()=>t.dataset.isPublished?"iconstop":"iconplay");return{isLoading:s,getActionIcon:r,handlePublish:async function(_){s.value||(s.value=!0,await y(300),s.value=!1,e.$message({message:"Successful!"}),t.dataset.isPublished=!t.dataset.isPublished)}}}}),L={class:"project-item-container"},$={style:{flex:"1","min-width":"0"}},A={class:"project-item__name"},C={class:"project-item__name-left"},T={class:"project-item__name-desc"},F={class:"project-item__name-desc__corpname"},N={class:"project-item__name-desc__corpname-maintext text_nowrap"},O={class:"project-item__name-desc__fullname text_nowrap"},S={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},q={class:"project-item-action__icon"},z={class:"project-item-action__status"};var G=j(I,[["render",function(t,e,s,r,_,B){const l=o("IconFont"),u=o("Tooltip"),f=o("Loading"),v=o("router-link");return n(),i(v,{to:`${t.$route.params.locale?"/"+t.$route.params.locale+"/":"/"}result/${t.dataset.id}/overview`},{default:d(()=>[a("ul",L,[a("li",$,[a("div",A,[a("div",C,[p(l,{icon:"iconfile"})]),a("div",T,[a("div",F,[a("span",N,c(t.dataset.corpName),1),a("span",{onClick:e[0]||(e[0]=m(()=>{},["prevent"]))},[t.dataset.notes?(n(),i(u,{key:0,content:t.dataset.notes},{default:d(()=>[p(l,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):b("v-if",!0)])]),a("p",O,c(t.dataset.name),1)])])]),a("li",S,c(t.dataset.createTime),1),a("li",{class:x(["project-item-action text_nowrap",{active:t.dataset.isPublished,loading:t.isLoading}]),onClick:e[1]||(e[1]=m(D=>t.handlePublish(t.dataset.id),["prevent"]))},[a("span",q,[t.isLoading?(n(),i(f,{key:1,class:"transform-rotate360"})):(n(),i(l,{key:0,icon:t.getActionIcon},null,8,["icon"]))]),a("span",z,c(t.dataset.isPublished?t._t("project.stop"):t._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-76fc3fac"],["__file","/home/runner/work/vite-starter/vite-starter/src/modules/Project/components/ProjectItem.vue"]]);export{G as default};