import{_ as c,e as i,r as d,o as u,c as v,w as _,v as p,G as l,f,d as w,t as m,R as y}from"./index-505d3047.js";const g=i({name:"ResultOverView",setup(){const e=p(),t=l(),o=f(()=>e.state.Result.overviewData);async function s(){const{error:a,data:n}=await e.dispatch(y.getAction("getResultOverview"),{projectId:t.params.projectId})}return s(),{overviewData:o}}}),h={style:{height:"100%",border:"1px solid"}};function R(e,t,o,s,a,n){const r=d("LayoutSection");return u(),v(r,{"flex-content":"",title:e.overviewData.title},{default:_(()=>[w("div",h,m(e.overviewData.content),1)]),_:1},8,["title"])}const D=c(g,[["render",R],["__scopeId","data-v-d7cd6ef9"]]);export{D as default};
