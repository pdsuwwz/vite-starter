import{_ as i,e as p,u as c,f as V,r as u,o as f,b as g,g as a,w as t}from"./index.72026ada.js";const h=p({name:"ProjectForm",props:{modelValue:{type:Object,default:()=>({})}},setup(e){c();const l=V(null);return{refForm:l,validateRules:async()=>new Promise(d=>{l.value.validate(s=>{d(!!s)})})}}}),w={class:"project-form-container"},j=i(h,[["render",function(e,l,d,s,_,b){const r=u("el-input"),m=u("el-form-item"),n=u("el-form");return f(),g("div",w,[a(n,{ref:"refForm",model:e.modelValue,"label-position":"right","label-width":"120px"},{default:t(()=>[a(m,{prop:"name",label:e._t("project.name"),rules:e.getRequiredRules({trigger:"change",message:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"})},{default:t(()=>[a(r,{modelValue:e.modelValue.name,"onUpdate:modelValue":l[0]||(l[0]=o=>e.modelValue.name=o),maxlength:"30","show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"},null,8,["modelValue"])]),_:1},8,["label","rules"]),a(m,{prop:"corpName",label:"\u516C\u53F8\u540D\u79F0",rules:e.getRequiredRules({trigger:"change",message:"\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0"})},{default:t(()=>[a(r,{modelValue:e.modelValue.corpName,"onUpdate:modelValue":l[1]||(l[1]=o=>e.modelValue.corpName=o),maxlength:"30","show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0"},null,8,["modelValue"])]),_:1},8,["rules"]),a(m,{prop:"notes",label:"\u5907\u6CE8"},{default:t(()=>[a(r,{modelValue:e.modelValue.notes,"onUpdate:modelValue":l[2]||(l[2]=o=>e.modelValue.notes=o),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",maxlength:"200",autosize:{minRows:2},"show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])}],["__scopeId","data-v-97be62a7"],["__file","/home/runner/work/vite-starter/vite-starter/src/modules/Project/components/ProjectForm.vue"]]);export{j as default};
