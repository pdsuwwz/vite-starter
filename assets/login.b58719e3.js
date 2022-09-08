import{_ as L,e as S,T as C,u as x,J as A,K as R,f as d,D as T,v as U,h as $,U as P,z as V,r as l,o as B,b as D,d as o,t as E,g as u,w as v,B as j,V as q,H as h,j as N,k as z,p as M,q as O}from"./index.ee5db8bc.js";import H from"./ContainerLayout.85cbe320.js";import{T as J}from"./Translations.87352322.js";import"./lodash.288908f0.js";const K=S({name:"UserAccountLogin",components:{UserAccountContainerLayout:H,Promotion:C,Translations:J},setup(){const{proxy:e}=z(),m=x(),g=A(),_=R(),n=d(!0),a=d(""),s=d(""),c=T({email:"vite.admin@gmail.com",password:"123456"}),t=U(),p=$(()=>({title:t.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:n.value,size:"large"},text:t.t("login.signin"),on:{click(i){e.onSubmit(i)}}}],formConfig:[{attrs:{prop:"email",error:a.value,rules(){return[e.getRequiredRules({trigger:"change",message:t.t("login.plsemail")}),e.getValidatorRules("","blur",{type:"email",message:t.t("login.plscurrentemail")})]}},label:t.t("login.email"),prefixIcon:"user-tie",placeholder:t.t("login.plsemail")},{attrs:{prop:"password",error:s.value,rules(){return e.getRequiredRules({trigger:"change",message:t.t("login.plspwd")})}},link:{text:t.t("login.fgtpwd"),click(){}},type:"password",label:t.t("login.pwd"),prefixIcon:"lock",placeholder:t.t("login.plspwd")}]}));function r(i=!1){n.value=i}function w(i){n.value||i.validate(async b=>{if(!b)return;a.value="",s.value="",r(!0);const{error:k,data:f,msg:I}=await m.dispatch(q.getAction("login"),c);if(k){a.value=" ",s.value=I,r(!1);return}h.set("token",f.user.token),h.set("name",f.user.username),_.replace(`/${g.params.locale||""}`).then(()=>{e.$message({type:"success",message:"\u767B\u5F55\u6210\u529F"})}).catch(()=>{})})}return r(!0),P(()=>{V(()=>{r(!1)})}),{isLoading:n,inputErrorEmail:a,inputErrorPassword:s,formData:c,configLogin:p,setLoading:r,onSubmit:w}}}),y=e=>(M("data-v-fa3fa911"),e=e(),O(),e),F={class:"user-account-login"},G={class:"user-account-nav"},Q={class:"nav-left"},W=y(()=>o("div",{class:"nav-logo"},null,-1)),X=y(()=>o("div",{class:"nav-circle"},null,-1)),Y={class:"nav-title"},Z={class:"nav-right"},ee={class:"user-account-body"};function te(e,m,g,_,n,a){const s=l("Translations"),c=l("Promotion"),t=l("el-icon"),p=l("UserAccountContainerLayout");return B(),D("div",F,[o("div",G,[o("div",Q,[W,X,o("div",Y,E(e._t("base.systemTitle")),1)]),o("div",Z,[u(s)])]),o("div",ee,[u(p,j(e.configLogin,{"form-data":e.formData,onOnSubmit:e.onSubmit}),{titleIcon:v(()=>[N(` <img
          src="@/assets/images/vue.svg"
          alt=""
        > `),u(t,null,{default:v(()=>[u(c)]),_:1})]),_:1},16,["form-data","onOnSubmit"])])])}const re=L(K,[["render",te],["__scopeId","data-v-fa3fa911"],["__file","/home/runner/work/vite-starter/vite-starter/src/modules/UserAccount/pages/login.vue"]]);export{re as default};
