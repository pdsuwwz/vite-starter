import{J as j,Z as h,O as g,i as y,r as o,o as n,k as i,l as d,t as a,m as p,I as c,G as m,D as b,y as x,M as w}from"./vendor.3c1239b8.js";import{_ as P,s as k}from"./index.eaca0aae.js";const I=j({name:"ProjectItem",components:{Loading:h},props:{dataset:{type:Object,default:()=>({})}},setup(t){const{proxy:s}=w(),e=g(!1),r=y(()=>t.dataset.isPublished?"iconstop":"iconplay");return{isLoading:e,getActionIcon:r,handlePublish:async function(_){e.value||(e.value=!0,await k(300),e.value=!1,s.$message({message:"Successful!"}),t.dataset.isPublished=!t.dataset.isPublished)}}}}),L={class:"project-item-container"},$={style:{flex:"1","min-width":"0"}},A={class:"project-item__name"},C={class:"project-item__name-left"},O={class:"project-item__name-desc"},T={class:"project-item__name-desc__corpname"},D={class:"project-item__name-desc__corpname-maintext text_nowrap"},F={class:"project-item__name-desc__fullname text_nowrap"},G={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},J={class:"project-item-action__icon"},M={class:"project-item-action__status"};var z=P(I,[["render",function(t,s,e,r,_,N){const l=o("IconFont"),u=o("Tooltip"),f=o("Loading"),v=o("router-link");return n(),i(v,{to:`${t.$route.params.locale?"/"+t.$route.params.locale+"/":"/"}result/${t.dataset.id}/overview`},{default:d(()=>[a("ul",L,[a("li",$,[a("div",A,[a("div",C,[p(l,{icon:"iconfile"})]),a("div",O,[a("div",T,[a("span",D,c(t.dataset.corpName),1),a("span",{onClick:s[0]||(s[0]=m(()=>{},["prevent"]))},[t.dataset.notes?(n(),i(u,{key:0,content:t.dataset.notes},{default:d(()=>[p(l,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):b("v-if",!0)])]),a("p",F,c(t.dataset.name),1)])])]),a("li",G,c(t.dataset.createTime),1),a("li",{class:x(["project-item-action text_nowrap",{active:t.dataset.isPublished,loading:t.isLoading}]),onClick:s[1]||(s[1]=m(S=>t.handlePublish(t.dataset.id),["prevent"]))},[a("span",J,[t.isLoading?(n(),i(f,{key:1,class:"transform-rotate360"})):(n(),i(l,{key:0,icon:t.getActionIcon},null,8,["icon"]))]),a("span",M,c(t.dataset.isPublished?t._t("project.stop"):t._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-76fc3fac"]]);export{z as default};
