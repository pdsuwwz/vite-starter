import{_ as c,e as i,r as d,o as u,c as p,w as l,v,G as _,f,d as w,t as m,R as h}from"./index-yQ3wCjuW.js";const R=i({name:"ResultOverView",setup(){const e=v(),t=_(),o=f(()=>e.state.Result.overviewData);async function a(){const{error:s,data:n}=await e.dispatch(h.getAction("getResultOverview"),{projectId:t.params.projectId})}return a(),{overviewData:o}}}),g={style:{height:"100%",border:"1px solid"}};function y(e,t,o,a,s,n){const r=d("LayoutSection");return u(),p(r,{"flex-content":"",title:e.overviewData.title},{default:l(()=>[w("div",g,m(e.overviewData.content),1)]),_:1},8,["title"])}const x=c(R,[["render",y],["__scopeId","data-v-d7cd6ef9"]]);export{x as default};
