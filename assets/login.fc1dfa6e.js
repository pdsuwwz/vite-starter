import k from"./ContainerLayout.c1ce95db.js";import{_,U as j}from"./index.90458705.js";import{T as I}from"./Translations.6eb44e28.js";import{I as R,a7 as S,u as T,g as A,h as C,O as m,P,W as U,i as E,a8 as O,V as $,r as c,o as q,s as D,t as s,H as V,m as u,l as b,G as z,M as G,d as y,$ as H,a0 as M}from"./vendor.e91de8e3.js";import"./lodash.a913dba1.js";const W=R({name:"UserAccountLogin",components:{UserAccountContainerLayout:k,Promotion:S,Translations:I},setup(){const{proxy:a}=G(),g=T(),p=A(),v=C(),o=m(!0),n=m(""),t=m(""),l=P({email:"vite.admin@gmail.com",password:"123456"}),e=U(),d=E(()=>({title:e.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:o.value,size:"large"},text:e.t("login.signin"),on:{click(r){a.onSubmit(r)}}}],formConfig:[{attrs:{prop:"email",error:n.value,rules:()=>[a.getRequiredRules({trigger:"change",message:e.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:e.t("login.plscurrentemail")})]},label:e.t("login.email"),prefixIcon:"user-tie",placeholder:e.t("login.plsemail")},{attrs:{prop:"password",error:t.value,rules:()=>a.getRequiredRules({trigger:"change",message:e.t("login.plspwd")})},link:{text:e.t("login.fgtpwd"),click(){}},type:"password",label:e.t("login.pwd"),prefixIcon:"lock",placeholder:e.t("login.plspwd")}]}));function i(r=!1){o.value=r}return i(!0),O(()=>{$(()=>{i(!1)})}),{isLoading:o,inputErrorEmail:n,inputErrorPassword:t,formData:l,configLogin:d,setLoading:i,onSubmit:function(r){o.value||r.validate(async w=>{if(!w)return;n.value="",t.value="",i(!0);const{error:L,data:f,msg:x}=await g.dispatch(j.getAction("login"),l);if(L)return n.value=" ",t.value=x,void i(!1);y.set("token",f.user.token),y.set("name",f.user.username),v.replace(`/${p.params.locale||""}`).then(()=>{a.$message({type:"success",message:"\u767B\u5F55\u6210\u529F"})}).catch(()=>{})})}}}}),h=a=>(H("data-v-06fe38ba"),a=a(),M(),a),B={class:"user-account-login"},F={class:"user-account-nav"},J={class:"nav-left"},K=h(()=>s("div",{class:"nav-logo"},null,-1)),N=h(()=>s("div",{class:"nav-circle"},null,-1)),Q={class:"nav-title"},X={class:"nav-right"},Y={class:"user-account-body"};var oa=_(W,[["render",function(a,g,p,v,o,n){const t=c("Translations"),l=c("Promotion"),e=c("el-icon"),d=c("UserAccountContainerLayout");return q(),D("div",B,[s("div",F,[s("div",J,[K,N,s("div",Q,V(a._t("base.systemTitle")),1)]),s("div",X,[u(t)])]),s("div",Y,[u(d,z(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:b(()=>[u(e,null,{default:b(()=>[u(l)]),_:1})]),_:1},16,["form-data","onOnSubmit"])])])}],["__scopeId","data-v-06fe38ba"]]);export{oa as default};
