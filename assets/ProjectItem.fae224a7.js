import{I as v,M as f,i as b,r as c,o as i,k as l,l as d,v as a,m as p,H as o,D as m,K as h,z as x,t as g,L as y}from"./vendor.d47e90b9.js";import{_ as w,s as P}from"./index.3bbfb120.js";const k=v({name:"ProjectItem",props:{dataset:{type:Object,default:()=>({})}},setup(t){const{proxy:s}=y(),e=f(!1),r=b(()=>t.dataset.isPublished?"iconstop":"iconplay");return{isLoading:e,getActionIcon:r,handlePublish:async function(_){e.value||(e.value=!0,await P(300),e.value=!1,s.$message({message:"Successful!"}),t.dataset.isPublished=!t.dataset.isPublished)}}}}),I={class:"project-item-container"},$={style:{flex:"1","min-width":"0"}},L={class:"project-item__name"},C={class:"project-item__name-left"},A={class:"project-item__name-desc"},T={class:"project-item__name-desc__corpname"},z={class:"project-item__name-desc__corpname-maintext text_nowrap"},D={class:"project-item__name-desc__fullname text_nowrap"},F={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},H={class:"project-item-action__icon"},K={key:1,class:"el-icon-loading"},M={class:"project-item-action__status"};var B=w(k,[["render",function(t,s,e,r,_,N){const n=c("IconFont"),u=c("Tooltip"),j=c("router-link");return i(),l(j,{to:`${t.$route.params.locale?"/"+t.$route.params.locale+"/":"/"}result/${t.dataset.id}/overview`},{default:d(()=>[a("ul",I,[a("li",$,[a("div",L,[a("div",C,[p(n,{icon:"iconfile"})]),a("div",A,[a("div",T,[a("span",z,o(t.dataset.corpName),1),a("span",{onClick:s[0]||(s[0]=m(()=>{},["prevent"]))},[t.dataset.notes?(i(),l(u,{key:0,content:t.dataset.notes},{default:d(()=>[p(n,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):h("",!0)])]),a("p",D,o(t.dataset.name),1)])])]),a("li",F,o(t.dataset.createTime),1),a("li",{class:x(["project-item-action text_nowrap",{active:t.dataset.isPublished,loading:t.isLoading}]),onClick:s[1]||(s[1]=m(O=>t.handlePublish(t.dataset.id),["prevent"]))},[a("span",H,[t.isLoading?(i(),g("i",K)):(i(),l(n,{key:0,icon:t.getActionIcon},null,8,["icon"]))]),a("span",M,o(t.dataset.isPublished?t._t("project.stop"):t._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-4b8386c2"]]);export{B as default};
