import{I as n,u as p,i as d,r as i,o as t,s,t as a,C as j,B as l,H as m,K as u,$ as b,a0 as y,k as f}from"./vendor.2a976ec2.js";import v from"./ProjectItem.e39c6c58.js";import{_}from"./index.58a4eceb.js";const I=n({name:"ProjectTableBody",components:{ProjectItem:v},setup(){const e=p();return{projectList:d(()=>e.state.Project.projectList)}}}),P={class:"project-table-body-container"},L={class:"project-table-body-container__inner"},g={key:0,class:"project-empty-box"},k=(e=>(b("data-v-7cce344c"),e=e(),y(),e))(()=>a("img",{src:"assets/project-empty.f8dbf7fc.svg",alt:"Empty"},null,-1));var $=_(I,[["render",function(e,x,B,h,C,E){const c=i("ProjectItem");return t(),s("div",P,[a("div",L,[(t(!0),s(j,null,l(e.projectList,(o,r)=>(t(),f(c,{key:r,dataset:o},null,8,["dataset"]))),128)),e.projectList.length?u("",!0):(t(),s("div",g,[k,a("span",null,m(e._t("base.empty")),1)]))])])}],["__scopeId","data-v-7cce344c"]]);export{$ as default};
