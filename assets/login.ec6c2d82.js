import k from"./ContainerLayout.893f5762.js";import{_,U as j}from"./index.c31c9be8.js";import{T as I}from"./Translations.88b8cccf.js";import{I as R,a7 as S,u as T,g as A,h as C,O as d,P,W as U,i as E,a8 as O,V as $,r as c,o as q,s as D,t as e,H as V,m as u,l as b,G as z,M as G,d as y,$ as H,a0 as M}from"./vendor.830da39f.js";import"./lodash.91495715.js";const W=R({name:"UserAccountLogin",components:{UserAccountContainerLayout:k,Promotion:S,Translations:I},setup(){const{proxy:a}=G(),g=T(),p=A(),v=C(),o=d(!0),n=d(""),t=d(""),l=P({email:"vite.admin@gmail.com",password:"123456"}),s=U(),m=E(()=>({title:s.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:o.value,size:"large"},text:s.t("login.signin"),on:{click(r){a.onSubmit(r)}}}],formConfig:[{attrs:{prop:"email",error:n.value,rules:()=>[a.getRequiredRules({trigger:"change",message:s.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:s.t("login.plscurrentemail")})]},label:s.t("login.email"),prefixIcon:"user-tie",placeholder:s.t("login.plsemail")},{attrs:{prop:"password",error:t.value,rules:()=>a.getRequiredRules({trigger:"change",message:s.t("login.plspwd")})},link:{text:s.t("login.fgtpwd"),click(){}},type:"password",label:s.t("login.pwd"),prefixIcon:"lock",placeholder:s.t("login.plspwd")}]}));function i(r=!1){o.value=r}return i(!0),O(()=>{$(()=>{i(!1)})}),{isLoading:o,inputErrorEmail:n,inputErrorPassword:t,formData:l,configLogin:m,setLoading:i,onSubmit:function(r){o.value||r.validate(async w=>{if(!w)return;n.value="",t.value="",i(!0);const{error:L,data:f,msg:x}=await g.dispatch(j.getAction("login"),l);if(L)return n.value=" ",t.value=x,void i(!1);y.set("token",f.user.token),y.set("name",f.user.username),v.replace(`/${p.params.locale||""}`).then(()=>{a.$message({type:"success",message:"\u767B\u5F55\u6210\u529F"})}).catch(()=>{})})}}}}),h=a=>(H("data-v-06fe38ba"),a=a(),M(),a),B={class:"user-account-login"},F={class:"user-account-nav"},J={class:"nav-left"},K=h(()=>e("div",{class:"nav-logo"},null,-1)),N=h(()=>e("div",{class:"nav-circle"},null,-1)),Q={class:"nav-title"},X={class:"nav-right"},Y={class:"user-account-body"};var oa=_(W,[["render",function(a,g,p,v,o,n){const t=c("Translations"),l=c("Promotion"),s=c("el-icon"),m=c("UserAccountContainerLayout");return q(),D("div",B,[e("div",F,[e("div",J,[K,N,e("div",Q,V(a._t("base.systemTitle")),1)]),e("div",X,[u(t)])]),e("div",Y,[u(m,z(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:b(()=>[u(s,null,{default:b(()=>[u(l)]),_:1})]),_:1},16,["form-data","onOnSubmit"])])])}],["__scopeId","data-v-06fe38ba"]]);export{oa as default};
