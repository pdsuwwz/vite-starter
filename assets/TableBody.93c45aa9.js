import{J as n,u as p,i as l,r as i,o as s,s as e,t as a,C as d,B as m,I as j,D as f,$ as u,a0 as b,k as y}from"./vendor.bef36e6b.js";import v from"./ProjectItem.c6c21872.js";import{_}from"./index.deeee71a.js";const I=n({name:"ProjectTableBody",components:{ProjectItem:v},setup(){const t=p();return{projectList:l(()=>t.state.Project.projectList)}}}),P={class:"project-table-body-container"},L={class:"project-table-body-container__inner"},g={key:0,class:"project-empty-box"},k=(t=>(u("data-v-280de46e"),t=t(),b(),t))(()=>a("img",{src:"assets/project-empty.f8dbf7fc.svg",alt:"Empty"},null,-1));var $=_(I,[["render",function(t,x,B,h,C,D){const o=i("ProjectItem");return s(),e("div",P,[a("div",L,[(s(!0),e(d,null,m(t.projectList,(r,c)=>(s(),y(o,{key:c,dataset:r},null,8,["dataset"]))),128)),t.projectList.length?f("v-if",!0):(s(),e("div",g,[k,a("span",null,j(t._t("base.empty")),1)]))])])}],["__scopeId","data-v-280de46e"]]);export{$ as default};
