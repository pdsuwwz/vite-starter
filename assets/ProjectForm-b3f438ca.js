import{u as i}from"./vuex.esm-bundler-63c9ede5.js";import{ai as f,x as c,r as _,y as V,z as g,P as o,I as t,a7 as s}from"./_plugin-vue_export-helper-f90207f7.js";const h=c({name:"ProjectForm",props:{modelValue:{type:Object,default(){return{}}}},setup(e){i();const l=_(null);return{refForm:l,validateRules:async()=>new Promise(r=>{l.value.validate(d=>{r(!!d)})})}}}),w={class:"project-form-container"};function v(e,l,u,r,d,b){const n=s("el-input"),m=s("el-form-item"),p=s("el-form");return V(),g("div",w,[o(p,{ref:"refForm",model:e.modelValue,"label-position":"right","label-width":"120px"},{default:t(()=>[o(m,{prop:"name",label:e._t("project.name"),rules:e.getRequiredRules({trigger:"change",message:"请输入项目名称"})},{default:t(()=>[o(n,{modelValue:e.modelValue.name,"onUpdate:modelValue":l[0]||(l[0]=a=>e.modelValue.name=a),maxlength:"30","show-word-limit":"",placeholder:"请输入项目名称"},null,8,["modelValue"])]),_:1},8,["label","rules"]),o(m,{prop:"corpName",label:"公司名称",rules:e.getRequiredRules({trigger:"change",message:"请输入公司名称"})},{default:t(()=>[o(n,{modelValue:e.modelValue.corpName,"onUpdate:modelValue":l[1]||(l[1]=a=>e.modelValue.corpName=a),maxlength:"30","show-word-limit":"",placeholder:"请输入公司名称"},null,8,["modelValue"])]),_:1},8,["rules"]),o(m,{prop:"notes",label:"备注"},{default:t(()=>[o(n,{modelValue:e.modelValue.notes,"onUpdate:modelValue":l[2]||(l[2]=a=>e.modelValue.notes=a),type:"textarea",placeholder:"请输入备注",maxlength:"200",autosize:{minRows:2},"show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])}const y=f(h,[["render",v],["__scopeId","data-v-e48193d0"]]);export{y as default};