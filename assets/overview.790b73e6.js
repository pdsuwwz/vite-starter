import{_ as i,R as n}from"./index.d45e75be.js";import{I as d,u as c,g as v,i as u,r as l,o as p,k as f,l as w,t as m,H as b}from"./vendor.39ddbe5a.js";const g=d({name:"ResultOverView",setup(){const t=c(),e=v(),a=u(()=>t.state.Result.overviewData);return async function(){const{error:s,data:o}=await t.dispatch(n.getAction("getResultOverview"),{projectId:e.params.projectId})}(),{overviewData:a}}}),j={style:{height:"100%",border:"1px solid"}};var R=i(g,[["render",function(t,e,a,s,o,x){const r=l("LayoutSection");return p(),f(r,{"flex-content":"",title:t.overviewData.title},{default:w(()=>[m("div",j,b(t.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-ea915b2c"]]);export{R as default};
