import{_ as i,R as n}from"./index.8bfa794a.js";import{I as c,u as v,g as d,i as u,r as l,o as p,k as f,l as w,t as m,H as b}from"./vendor.8a7e1ba7.js";const g=c({name:"ResultOverView",setup(){const t=v(),e=d(),a=u(()=>t.state.Result.overviewData);return async function(){const{error:s,data:o}=await t.dispatch(n.getAction("getResultOverview"),{projectId:e.params.projectId})}(),{overviewData:a}}}),j={style:{height:"100%",border:"1px solid"}};var R=i(g,[["render",function(t,e,a,s,o,x){const r=l("LayoutSection");return p(),f(r,{"flex-content":"",title:t.overviewData.title},{default:w(()=>[m("div",j,b(t.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-ea915b2c"]]);export{R as default};
