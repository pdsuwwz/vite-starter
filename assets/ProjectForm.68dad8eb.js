import{_ as i,e as f,u as c,f as _,r as m,o as V,b as g,g as l,w as a}from"./index.3511fe4e.js";const w=f({name:"ProjectForm",props:{modelValue:{type:Object,default(){return{}}}},setup(e){c();const o=_(null);return{refForm:o,validateRules:async()=>new Promise(r=>{o.value.validate(u=>{r(!!u)})})}}}),h={class:"project-form-container"};function v(e,o,d,r,u,b){const n=m("el-input"),s=m("el-form-item"),p=m("el-form");return V(),g("div",h,[l(p,{ref:"refForm",model:e.modelValue,"label-position":"right","label-width":"120px"},{default:a(()=>[l(s,{prop:"name",label:e._t("project.name"),rules:e.getRequiredRules({trigger:"change",message:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"})},{default:a(()=>[l(n,{modelValue:e.modelValue.name,"onUpdate:modelValue":o[0]||(o[0]=t=>e.modelValue.name=t),maxlength:"30","show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"},null,8,["modelValue"])]),_:1},8,["label","rules"]),l(s,{prop:"corpName",label:"\u516C\u53F8\u540D\u79F0",rules:e.getRequiredRules({trigger:"change",message:"\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0"})},{default:a(()=>[l(n,{modelValue:e.modelValue.corpName,"onUpdate:modelValue":o[1]||(o[1]=t=>e.modelValue.corpName=t),maxlength:"30","show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0"},null,8,["modelValue"])]),_:1},8,["rules"]),l(s,{prop:"notes",label:"\u5907\u6CE8"},{default:a(()=>[l(n,{modelValue:e.modelValue.notes,"onUpdate:modelValue":o[2]||(o[2]=t=>e.modelValue.notes=t),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",maxlength:"200",autosize:{minRows:2},"show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])}const R=i(w,[["render",v],["__scopeId","data-v-97be62a7"],["__file","/home/runner/work/vite-starter/vite-starter/src/modules/Project/components/ProjectForm.vue"]]);export{R as default};