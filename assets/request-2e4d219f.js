import{S as ze,T as ae,U as Je,V as We,P as Ke}from"./js.cookie-4e2855c5.js";import{g as Ge,h as Xe,j as Qe,k as Ze,l as Ye,m as et,n as tt,o as nt}from"./type-e4b589dd.js";const rt="modulepreload",st=function(e,t){return new URL(e,t).href},ce={},R=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=st(o,r),o in ce)return;ce[o]=!0;const i=o.endsWith(".css"),u=i?'[rel="stylesheet"]':"";if(!!r)for(let l=s.length-1;l>=0;l--){const p=s[l];if(p.href===o&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${u}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":rt,i||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),i)return new Promise((l,p)=>{c.addEventListener("load",l),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},B=Object.assign({"../modules/Project/components/ProjectForm.vue":()=>R(()=>import("./ProjectForm-7ef88085.js"),["./ProjectForm-7ef88085.js","./vuex.esm-bundler-c8671be2.js","./_plugin-vue_export-helper-641f8b0e.js","./ProjectForm-4381eb84.css"],import.meta.url),"../modules/Project/components/ProjectItem.vue":()=>R(()=>import("./ProjectItem-d00471c5.js"),["./ProjectItem-d00471c5.js","./type-e4b589dd.js","./_plugin-vue_export-helper-641f8b0e.js","./js.cookie-4e2855c5.js","./ProjectItem-83083327.css"],import.meta.url),"../modules/Project/components/TableBody.vue":()=>R(()=>import("./TableBody-afca21c5.js"),["./TableBody-afca21c5.js","./vuex.esm-bundler-c8671be2.js","./_plugin-vue_export-helper-641f8b0e.js","./ProjectItem-d00471c5.js","./type-e4b589dd.js","./js.cookie-4e2855c5.js","./ProjectItem-83083327.css","./TableBody-19f54245.css"],import.meta.url),"../modules/Project/components/TableHeader.vue":()=>R(()=>import("./TableHeader-3dba8767.js"),["./TableHeader-3dba8767.js","./_plugin-vue_export-helper-641f8b0e.js","./index-17ce14ed.js","./TableHeader-357cd102.css"],import.meta.url),"../modules/Project/pages/list.vue":()=>R(()=>import("./list-af467f5d.js"),["./list-af467f5d.js","./vuex.esm-bundler-c8671be2.js","./_plugin-vue_export-helper-641f8b0e.js","./index-616a329a.js","./mixin-067ef0d2.js","./type-e4b589dd.js","./js.cookie-4e2855c5.js","./index-17ce14ed.js","./NavBar-af8036f1.js","./Translations-bb0b8cf8.js","./Translations-86749db0.css","./NavBar-ebee815d.css","./ProjectForm-7ef88085.js","./ProjectForm-4381eb84.css","./TableHeader-3dba8767.js","./TableHeader-357cd102.css","./TableBody-afca21c5.js","./ProjectItem-d00471c5.js","./ProjectItem-83083327.css","./TableBody-19f54245.css","./lodash-e9f1b42e.js","./_commonjsHelpers-725317a4.js","./list-104928a4.css"],import.meta.url),"../modules/Result/components/index.vue":()=>R(()=>import("./index-2e18f145.js"),["./index-2e18f145.js","./_plugin-vue_export-helper-641f8b0e.js","./index-e3b0c442.css"],import.meta.url),"../modules/Result/pages/overview.vue":()=>R(()=>import("./overview-d3681188.js"),["./overview-d3681188.js","./index-6bdafb26.js","./mixin-067ef0d2.js","./type-e4b589dd.js","./_plugin-vue_export-helper-641f8b0e.js","./js.cookie-4e2855c5.js","./index-17ce14ed.js","./vuex.esm-bundler-c8671be2.js","./overview-eb3bc82a.css"],import.meta.url),"../modules/UserAccount/components/ContainerLayout.vue":()=>R(()=>import("./ContainerLayout-ee8ac1a2.js"),["./ContainerLayout-ee8ac1a2.js","./type-e4b589dd.js","./_plugin-vue_export-helper-641f8b0e.js","./lodash-e9f1b42e.js","./_commonjsHelpers-725317a4.js","./ContainerLayout-9f8e5ee8.css"],import.meta.url),"../modules/UserAccount/components/index.vue":()=>R(()=>import("./index-9da24df4.js"),["./index-9da24df4.js","./_plugin-vue_export-helper-641f8b0e.js","./index-e3b0c442.css"],import.meta.url),"../modules/UserAccount/pages/login.vue":()=>R(()=>import("./login-6b73c267.js"),["./login-6b73c267.js","./js.cookie-4e2855c5.js","./_plugin-vue_export-helper-641f8b0e.js","./ContainerLayout-ee8ac1a2.js","./type-e4b589dd.js","./lodash-e9f1b42e.js","./_commonjsHelpers-725317a4.js","./ContainerLayout-9f8e5ee8.css","./index-c9bcabbb.js","./mixin-067ef0d2.js","./index-17ce14ed.js","./Translations-bb0b8cf8.js","./vuex.esm-bundler-c8671be2.js","./Translations-86749db0.css","./login-1a8f8a01.css"],import.meta.url)}),ue=()=>R(()=>import("./index-12ac48b9.js"),["./index-12ac48b9.js","./_plugin-vue_export-helper-641f8b0e.js"],import.meta.url),ot=()=>R(()=>import("./LayoutView-bc339a2f.js"),["./LayoutView-bc339a2f.js","./_plugin-vue_export-helper-641f8b0e.js","./NavBar-af8036f1.js","./Translations-bb0b8cf8.js","./js.cookie-4e2855c5.js","./vuex.esm-bundler-c8671be2.js","./Translations-86749db0.css","./index-17ce14ed.js","./NavBar-ebee815d.css","./LayoutView-1c405cbf.css"],import.meta.url),it=()=>R(()=>import("./LayoutArea-11830fd1.js"),["./LayoutArea-11830fd1.js","./_plugin-vue_export-helper-641f8b0e.js","./LayoutArea-6dddb641.css"],import.meta.url),at=[{path:"test-layout",title:"TestLayout",name:"布局测试",icon:"el-icon-s-promotion",meta:{title:"TestLayout"},component:it},{path:"user",component:ue,name:"User",icon:"eye",meta:{title:"账户"},redirect:{name:"UserLogin"},children:[{path:"login",name:"UserLogin",component:B["../modules/UserAccount/pages/login.vue"],meta:{title:"登录"}}]},{path:"project",component:ue,name:"Project",icon:"eye",redirect:{name:"ProjectList"},children:[{path:"",name:"ProjectList",meta:{title:"项目列表"},component:B["../modules/Project/pages/list.vue"]},{path:"list",name:"ProjectList",component:B["../modules/Project/pages/list.vue"],meta:{title:"项目管理"}}]},{path:"result",redirect:{name:"ProjectList"}},{path:"result/:projectId",component:ot,name:"result",icon:"eye",redirect:{name:"ResultOverview"},children:[{path:"overview",name:"ResultOverview",component:B["../modules/Result/pages/overview.vue"],meta:{title:"总览"}}]}],ct=()=>R(()=>import("./index-12ac48b9.js"),["./index-12ac48b9.js","./_plugin-vue_export-helper-641f8b0e.js"],import.meta.url);function ut(){let e="";return ae.forEach((t,n)=>{const r=n!==ae.length-1?"|":"";e=`${e}${t.localeCode}${r}`}),`(${e})`}const lt=[{path:"/",name:"Root",redirect:"/project"},{path:`/:locale${ut()}?`,component:ct,beforeEnter(e,t,n){if(ze(e.params.locale)&&!Ge(e.params.pathMatch)){n(`/${e.params.locale}/project`);return}n()},children:[{path:"",name:"LangRoot",redirect:{name:"Project"}},...at]},{path:"/:pathMatch(.*)",name:"404",component:()=>R(()=>import("./404-3d4ac43f.js"),["./404-3d4ac43f.js","./_plugin-vue_export-helper-641f8b0e.js"],import.meta.url)}],ft=Je(),dt=We({history:ft,routes:lt});function Ae(e,t){return function(){return e.apply(t,arguments)}}const{toString:Se}=Object.prototype,{getPrototypeOf:ee}=Object,te=(e=>t=>{const n=Se.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_=e=>(e=e.toLowerCase(),t=>te(t)===e),q=e=>t=>typeof t===e,{isArray:L}=Array,C=q("undefined");function pt(e){return e!==null&&!C(e)&&e.constructor!==null&&!C(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _e=_("ArrayBuffer");function mt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_e(e.buffer),t}const ht=q("string"),g=q("function"),Te=q("number"),ne=e=>e!==null&&typeof e=="object",yt=e=>e===!0||e===!1,j=e=>{if(te(e)!=="object")return!1;const t=ee(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Et=_("Date"),wt=_("File"),Rt=_("Blob"),bt=_("FileList"),Ot=e=>ne(e)&&g(e.pipe),At=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Se.call(e)===t||g(e.toString)&&e.toString()===t)},St=_("URLSearchParams"),_t=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function ge(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Pe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),xe=e=>!C(e)&&e!==Pe;function X(){const{caseless:e}=xe(this)&&this||{},t={},n=(r,s)=>{const o=e&&ge(t,s)||s;j(t[o])&&j(r)?t[o]=X(t[o],r):j(r)?t[o]=X({},r):L(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&D(arguments[r],n);return t}const Tt=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,o)=>{n&&g(s)?e[o]=Ae(s,n):e[o]=s},{allOwnKeys:r}),e),gt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Pt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},xt=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&ee(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Lt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Nt=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Te(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ct=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ee(Uint8Array)),Dt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ut=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ft=_("HTMLFormElement"),Bt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),le=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),jt=_("RegExp"),Le=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},kt=e=>{Le(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},vt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return L(e)?r(e):r(String(e).split(t)),n},It=()=>{},Ht=(e,t)=>(e=+e,Number.isFinite(e)?e:t),J="abcdefghijklmnopqrstuvwxyz",fe="0123456789",Ne={DIGIT:fe,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+fe},Mt=(e=16,t=Ne.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function qt(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const $t=e=>{const t=new Array(10),n=(r,s)=>{if(ne(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=L(r)?[]:{};return D(r,(i,u)=>{const d=n(i,s+1);!C(d)&&(o[u]=d)}),t[s]=void 0,o}}return r};return n(e,0)},a={isArray:L,isArrayBuffer:_e,isBuffer:pt,isFormData:At,isArrayBufferView:mt,isString:ht,isNumber:Te,isBoolean:yt,isObject:ne,isPlainObject:j,isUndefined:C,isDate:Et,isFile:wt,isBlob:Rt,isRegExp:jt,isFunction:g,isStream:Ot,isURLSearchParams:St,isTypedArray:Ct,isFileList:bt,forEach:D,merge:X,extend:Tt,trim:_t,stripBOM:gt,inherits:Pt,toFlatObject:xt,kindOf:te,kindOfTest:_,endsWith:Lt,toArray:Nt,forEachEntry:Dt,matchAll:Ut,isHTMLForm:Ft,hasOwnProperty:le,hasOwnProp:le,reduceDescriptors:Le,freezeMethods:kt,toObjectSet:vt,toCamelCase:Bt,noop:It,toFiniteNumber:Ht,findKey:ge,global:Pe,isContextDefined:xe,ALPHABET:Ne,generateString:Mt,isSpecCompliantForm:qt,toJSONObject:$t};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ce=h.prototype,De={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{De[e]={value:e}});Object.defineProperties(h,De);Object.defineProperty(Ce,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,o)=>{const i=Object.create(Ce);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),h.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Vt=null;function Q(e){return a.isPlainObject(e)||a.isArray(e)}function Ue(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function de(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ue(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function zt(e){return a.isArray(e)&&!e.some(Q)}const Jt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,A){return!a.isUndefined(A[m])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,m,A){let b=f;if(f&&!A&&typeof f=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&zt(f)||(a.isFileList(f)||a.endsWith(m,"[]"))&&(b=a.toArray(f)))return m=Ue(m),b.forEach(function(F,Ve){!(a.isUndefined(F)||F===null)&&t.append(i===!0?de([m],Ve,o):i===null?m:m+"[]",c(F))}),!1}return Q(f)?!0:(t.append(de(A,m,o),c(f)),!1)}const p=[],w=Object.assign(Jt,{defaultVisitor:l,convertValue:c,isVisitable:Q});function y(f,m){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(f),a.forEach(f,function(b,P){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(P)?P.trim():P,m,w))===!0&&y(b,m?m.concat(P):[P])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function pe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function re(e,t){this._pairs=[],e&&$(e,this,t)}const Fe=re.prototype;Fe.append=function(t,n){this._pairs.push([t,n])};Fe.toString=function(t){const n=t?function(r){return t.call(this,r,pe)}:pe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Wt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Be(e,t,n){if(!t)return e;const r=n&&n.encode||Wt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Kt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const me=Kt,je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Gt=typeof URLSearchParams<"u"?URLSearchParams:re,Xt=typeof FormData<"u"?FormData:null,Qt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Zt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:Gt,FormData:Xt,Blob},isStandardBrowserEnv:Qt,isStandardBrowserWebWorkerEnv:Zt,protocols:["http","https","file","blob","url","data"]};function Yt(e,t){return $(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function en(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function tn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function ke(e){function t(n,r,s,o){let i=n[o++];const u=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=tn(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(en(r),s,n,0)}),n}return null}const nn={"Content-Type":void 0};function rn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const V={transitional:je,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Yt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return $(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),rn(t)):t}],transformResponse:[function(t){const n=this.transitional||V.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?h.from(u,h.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){V.headers[t]={}});a.forEach(["post","put","patch"],function(t){V.headers[t]=a.merge(nn)});const se=V,sn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),on=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&sn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},he=Symbol("internals");function N(e){return e&&String(e).trim().toLowerCase()}function k(e){return e===!1||e==null?e:a.isArray(e)?e.map(k):String(e)}function an(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function cn(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function W(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function un(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function ln(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,d,c){const l=N(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||d]=k(u))}const i=(u,d)=>a.forEach(u,(c,l)=>o(c,l,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!cn(t)?i(on(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=N(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return an(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=N(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||W(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=N(i),i){const u=a.findKey(r,i);u&&(!n||W(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||W(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=k(s),delete n[o];return}const u=t?un(o):String(o).trim();u!==o&&delete n[o],n[u]=k(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[he]=this[he]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=N(i);r[u]||(ln(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(z.prototype);a.freezeMethods(z);const S=z;function K(e,t){const n=this||se,r=t||n,s=S.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ve(e){return!!(e&&e.__CANCEL__)}function U(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(U,h,{__CANCEL__:!0});function fn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const dn=O.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function pn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function mn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!pn(t)?mn(e,t):t}const hn=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function yn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function En(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),l=r[o];i||(i=c),n[s]=d,r[s]=c;let p=o,w=0;for(;p!==s;)w+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const y=l&&c-l;return y?Math.round(w*1e3/y):void 0}}function ye(e,t){let n=0;const r=En(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,d=r(u),c=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:d||void 0,estimated:d&&i&&c?(i-o)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const wn=typeof XMLHttpRequest<"u",Rn=wn&&function(e){return new Promise(function(n,r){let s=e.data;const o=S.from(e.headers).normalize(),i=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+f))}const l=Ie(e.baseURL,e.url);c.open(e.method.toUpperCase(),Be(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=S.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};fn(function(b){n(b),d()},function(b){r(b),d()},m),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){!c||(r(new h("Request aborted",h.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||je;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new h(f,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,c)),c=null},O.isStandardBrowserEnv){const y=(e.withCredentials||hn(l))&&e.xsrfCookieName&&dn.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(f,m){c.setRequestHeader(m,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ye(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=y=>{!c||(r(!y||y.type?new U(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const w=yn(l);if(w&&O.protocols.indexOf(w)===-1){r(new h("Unsupported protocol "+w+":",h.ERR_BAD_REQUEST,e));return}c.send(s||null)})},v={http:Vt,xhr:Rn};a.forEach(v,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const bn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?v[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new h(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(v,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:v};function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new U(null,e)}function Ee(e){return G(e),e.headers=S.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),bn.getAdapter(e.adapter||se.adapter)(e).then(function(r){return G(e),r.data=K.call(e,e.transformResponse,r),r.headers=S.from(r.headers),r},function(r){return ve(r)||(G(e),r&&r.response&&(r.response.data=K.call(e,e.transformResponse,r.response),r.response.headers=S.from(r.response.headers))),Promise.reject(r)})}const we=e=>e instanceof S?e.toJSON():e;function x(e,t){t=t||{};const n={};function r(c,l,p){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:p},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(c,l,p){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,l,p)}function o(c,l){if(!a.isUndefined(l))return r(void 0,l)}function i(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function u(c,l,p){if(p in t)return r(c,l);if(p in e)return r(void 0,c)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,l)=>s(we(c),we(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const p=d[l]||s,w=p(e[l],t[l],l);a.isUndefined(w)&&p!==u||(n[l]=w)}),n}const He="1.3.3",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Re={};oe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+He+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new h(s(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!Re[i]&&(Re[i]=!0),t?t(o,i,u):!0}};function On(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],d=u===void 0||i(u,o,e);if(d!==!0)throw new h("option "+o+" must be "+d,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const Z={assertOptions:On,validators:oe},T=Z.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Z.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!==void 0&&Z.assertOptions(s,{encode:T.function,serialize:T.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=S.concat(i,o);const u=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,u.unshift(m.fulfilled,m.rejected))});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let l,p=0,w;if(!d){const f=[Ee.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,c),w=f.length,l=Promise.resolve(n);p<w;)l=l.then(f[p++],f[p++]);return l}w=u.length;let y=n;for(p=0;p<w;){const f=u[p++],m=u[p++];try{y=f(y)}catch(A){m.call(this,A);break}}try{l=Ee.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,w=c.length;p<w;)l=l.then(c[p++],c[p++]);return l}getUri(t){t=x(this.defaults,t);const n=Ie(t.baseURL,t.url);return Be(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(x(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(x(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const I=H;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new U(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}const An=ie;function Sn(e){return function(n){return e.apply(null,n)}}function _n(e){return a.isObject(e)&&e.isAxiosError===!0}const Y={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Y).forEach(([e,t])=>{Y[t]=e});const Tn=Y;function Me(e){const t=new I(e),n=Ae(I.prototype.request,t);return a.extend(n,I.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Me(x(e,s))},n}const E=Me(se);E.Axios=I;E.CanceledError=U;E.CancelToken=An;E.isCancel=ve;E.VERSION=He;E.toFormData=$;E.AxiosError=h;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Sn;E.isAxiosError=_n;E.mergeConfig=x;E.AxiosHeaders=S;E.formToJSON=e=>ke(a.isHTMLForm(e)?new FormData(e):e);E.HttpStatusCode=Tn;E.default=E;const gn=E;function Pn(e){return nt(e)?e:(e=e.replace(/[-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}function xn(e,t){t=t||{};const n=t.separator||"_",r=t.split||/(?=[A-Z])/;return e.split(r).join(n)}function Ln(e,t){return xn(e,t).toLowerCase()}function qe(e,t){const n=t&&"process"in t?t.process:t;return typeof n!="function"?e:function(r,s){return n(r,e,s)}}function M(e,t,n){if(!Xe(t)||Qe(t)||Ze(t)||Ye(t)||et(t))return t;let r,s=0,o=0;if(tt(t))for(r=[],o=t.length;s<o;s++)r.push(M(e,t[s],n));else{r={};for(const i in t)t.hasOwnProperty(i)&&(r[e(i,n)]=M(e,t[i],n))}return r}function be(e,t){return M(qe(Pn,t),e)}function Oe(e,t){return M(qe(Ln,t),e,t)}function Nn(e){dt.push(`/${e}`)}const Cn={200:"The server successfully returned the requested data.",201:"Create or modify data successfully.",202:"A request has entered the background queue (asynchronous task).",204:"Data deleted successfully.",206:"Successful range request.",400:"Bad error request, and the server did not create or modify the data.",401:"User does not have permission (invalid username, password, security token).",403:"User is authorized, but access is forbidden.",404:"The request sent is for a record that does not exist, and the server does not operate.",405:"Request denied.",406:"Requested format not available.",410:"The requested resource is permanently deleted and will no longer be available.",422:"When creating an object, a validation error occurrs.",500:"An error occurred in the server, please check the server.",502:"Bad Gateway Error.",503:"The server is temporarily unable to service your request due to maintenance downtime or capacity problems.",504:"Gateway Timeout."},$e=gn.create({baseURL:"http://api.test.xxx.xxx.com",timeout:15e3});$e.interceptors.request.use(e=>{const t=Ke.get("token");return e.data instanceof FormData||(e.data=Oe(e.data)),e.params=Oe(e.params),e.url==="/login"||(e.headers.Authorization=t),e},e=>Promise.reject(e));$e.interceptors.response.use(e=>{const t=e.data;return Promise.resolve().then(()=>{Fn(e.headers,t)}),e.request.responseType==="blob"&&/json$/gi.test(e.headers["content-type"])?new Promise(n=>{const r=new FileReader;r.onload=()=>{e.data=JSON.parse(r.result),n(be(e.data))},r.readAsText(e.data)}):t instanceof Blob?{data:t,msg:"",error:0}:be(t)},e=>(e.config.redirect&&Nn(e.config.redirect),e.response?{data:{},error:e.response.status,msg:Cn[e.response.status]||e.response.data.message}:{data:{},error:5e3,msg:"服务请求不可用，请重试或检查您的网络。"}));function kn(e=0){return new Promise(t=>{setTimeout(()=>{t({})},e)})}function Dn(e){const t=[/filename\*=[^']+'\w*'"([^"]+)";?/i,/filename\*=[^']+'\w*'([^;]+);?/i,/filename="([^;]*);?"/i,/filename=([^;]*);?/i];let n;if(t.some(r=>(n=r.exec(e),n!==null)),n!==null&&n.length>1)try{return decodeURIComponent(n[1])}catch{}return null}function Un(e,t="test-filename",n){const r=e instanceof Blob?e:new Blob([e],{type:n}),s=window.URL.createObjectURL(r),o=document.createElement("a");o.style.display="none",o.href=s,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o)}function Fn(e,t){const n=e["content-disposition"];if(n){let r="";r=Dn(n),r&&Un(t,r,e["content-type"])}}export{kn as a,dt as r,$e as s};
