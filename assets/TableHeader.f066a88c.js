import{_ as c}from"./index.60c68653.js";import{I as i,W as d,i as l,o as a,s as r,C as m,B as p,a1 as j,H as u}from"./vendor.aa0fde38.js";const h=i({name:"ProjectTableHeader",setup(){const e=d(),s=l(()=>[{name:e.t("project.name")},{name:e.t("project.createDate"),width:"18%"},{name:e.t("project.state"),width:"19%"}]);return{localeInject:e,list:s,getHeadItem:function(t){return{width:t.width,flex:t.width?"initial":1}}}}}),f={class:"project-table-header-container"};var v=c(h,[["render",function(e,s,t,w,I,_){return a(),r("ul",f,[(a(!0),r(m,null,p(e.list,(n,o)=>(a(),r("li",{key:o,style:j(e.getHeadItem(n)),class:"project-table-header-container__head-item"},u(n.name),5))),128))])}],["__scopeId","data-v-a09676c6"]]);export{v as default};
