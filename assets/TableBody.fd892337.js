import{I as n,u as p,i as d,r as l,o as e,s,t as a,C as i,B as j,H as m,K as b,a0 as f,a1 as u,k as y}from"./vendor.f3eb3fc2.js";import v from"./ProjectItem.a1b6b2d0.js";import{_}from"./index.d671b7e9.js";const I=n({name:"ProjectTableBody",components:{ProjectItem:v},setup(){const t=p();return{projectList:d(()=>t.state.Project.projectList)}}}),P={class:"project-table-body-container"},L={class:"project-table-body-container__inner"},g={key:0,class:"project-empty-box"},k=(t=>(f("data-v-7cce344c"),t=t(),u(),t))(()=>a("img",{src:"assets/project-empty.f8dbf7fc.svg",alt:"Empty"},null,-1));var q=_(I,[["render",function(t,x,B,h,C,E){const o=l("ProjectItem");return e(),s("div",P,[a("div",L,[(e(!0),s(i,null,j(t.projectList,(c,r)=>(e(),y(o,{key:r,dataset:c},null,8,["dataset"]))),128)),t.projectList.length?b("",!0):(e(),s("div",g,[k,a("span",null,m(t._t("base.empty")),1)]))])])}],["__scopeId","data-v-7cce344c"]]);export{q as default};
