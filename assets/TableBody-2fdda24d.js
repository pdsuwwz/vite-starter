import{u as p}from"./vuex.esm-bundler-63c9ede5.js";import d from"./ProjectItem-1c101473.js";import{ai as i,x as _,e as m,y as t,z as o,A as s,F as l,a0 as u,O as f,L as j,H as y,aE as b,aF as h,a7 as v}from"./_plugin-vue_export-helper-f90207f7.js";import"./type-861d1de1.js";import"./js.cookie-05e0909e.js";import"./request-8ee43290.js";const L=""+new URL("project-empty-f8dbf7fc.svg",import.meta.url).href;const B=_({name:"ProjectTableBody",components:{ProjectItem:d},setup(){const e=p();return{projectList:m(()=>e.state.Project.projectList)}}}),I=e=>(b("data-v-f07fdab2"),e=e(),h(),e),g={class:"project-table-body-container"},P={class:"project-table-body-container__inner"},k={key:0,class:"project-empty-box"},S=I(()=>s("img",{src:L,alt:"Empty"},null,-1));function $(e,a,x,C,E,F){const r=v("ProjectItem");return t(),o("div",g,[s("div",P,[(t(!0),o(l,null,u(e.projectList,(c,n)=>(t(),y(r,{key:n,dataset:c},null,8,["dataset"]))),128)),e.projectList.length?j("",!0):(t(),o("div",k,[S,s("span",null,f(e._t("base.empty")),1)]))])])}const D=i(B,[["render",$],["__scopeId","data-v-f07fdab2"]]);export{D as default};