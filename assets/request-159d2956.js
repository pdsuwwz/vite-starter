import{S as qe,T as se,U as $e,V as Ve,P as ze}from"./js.cookie-736eca92.js";import{g as Je,h as We,j as Ke,k as Ge,l as Xe,m as Qe,n as Ze,o as Ye}from"./type-f8ec5bac.js";const et="modulepreload",tt=function(e,t){return new URL(e,t).href},ie={},R=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=tt(s,r),s in ie)return;ie[s]=!0;const i=s.endsWith(".css"),u=i?'[rel="stylesheet"]':"";if(!!r)for(let l=o.length-1;l>=0;l--){const p=o[l];if(p.href===s&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${u}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":et,i||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),i)return new Promise((l,p)=>{c.addEventListener("load",l),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},B=Object.assign({"../modules/Project/components/ProjectForm.vue":()=>R(()=>import("./ProjectForm-24df7e29.js"),["./ProjectForm-24df7e29.js","./vuex.esm-bundler-979f16ef.js","./_plugin-vue_export-helper-f1dda974.js","./ProjectForm-4381eb84.css"],import.meta.url),"../modules/Project/components/ProjectItem.vue":()=>R(()=>import("./ProjectItem-9f34bda1.js"),["./ProjectItem-9f34bda1.js","./type-f8ec5bac.js","./_plugin-vue_export-helper-f1dda974.js","./js.cookie-736eca92.js","./ProjectItem-83083327.css"],import.meta.url),"../modules/Project/components/TableBody.vue":()=>R(()=>import("./TableBody-76464a0a.js"),["./TableBody-76464a0a.js","./vuex.esm-bundler-979f16ef.js","./_plugin-vue_export-helper-f1dda974.js","./ProjectItem-9f34bda1.js","./type-f8ec5bac.js","./js.cookie-736eca92.js","./ProjectItem-83083327.css","./TableBody-19f54245.css"],import.meta.url),"../modules/Project/components/TableHeader.vue":()=>R(()=>import("./TableHeader-d1b355bc.js"),["./TableHeader-d1b355bc.js","./_plugin-vue_export-helper-f1dda974.js","./index-7eb0f0a6.js","./index-5c647c99.js","./TableHeader-357cd102.css"],import.meta.url),"../modules/Project/pages/list.vue":()=>R(()=>import("./list-ced7d675.js"),["./list-ced7d675.js","./vuex.esm-bundler-979f16ef.js","./_plugin-vue_export-helper-f1dda974.js","./index-8dc733dc.js","./mixin-70b7655c.js","./type-f8ec5bac.js","./index-5c647c99.js","./js.cookie-736eca92.js","./index-7eb0f0a6.js","./NavBar-bffdae38.js","./Translations-a53f235a.js","./Translations-86749db0.css","./NavBar-ebee815d.css","./ProjectForm-24df7e29.js","./ProjectForm-4381eb84.css","./TableHeader-d1b355bc.js","./TableHeader-357cd102.css","./TableBody-76464a0a.js","./ProjectItem-9f34bda1.js","./ProjectItem-83083327.css","./TableBody-19f54245.css","./lodash-e9f1b42e.js","./_commonjsHelpers-725317a4.js","./list-104928a4.css"],import.meta.url),"../modules/Result/components/index.vue":()=>R(()=>import("./index-cd362fa6.js"),["./index-cd362fa6.js","./_plugin-vue_export-helper-f1dda974.js","./index-e3b0c442.css"],import.meta.url),"../modules/Result/pages/overview.vue":()=>R(()=>import("./overview-600e23f8.js"),["./overview-600e23f8.js","./index-a16940ee.js","./mixin-70b7655c.js","./type-f8ec5bac.js","./_plugin-vue_export-helper-f1dda974.js","./index-5c647c99.js","./js.cookie-736eca92.js","./vuex.esm-bundler-979f16ef.js","./overview-eb3bc82a.css"],import.meta.url),"../modules/UserAccount/components/ContainerLayout.vue":()=>R(()=>import("./ContainerLayout-faf266a6.js"),["./ContainerLayout-faf266a6.js","./type-f8ec5bac.js","./_plugin-vue_export-helper-f1dda974.js","./lodash-e9f1b42e.js","./_commonjsHelpers-725317a4.js","./ContainerLayout-9f8e5ee8.css"],import.meta.url),"../modules/UserAccount/components/index.vue":()=>R(()=>import("./index-02d4542a.js"),["./index-02d4542a.js","./_plugin-vue_export-helper-f1dda974.js","./index-e3b0c442.css"],import.meta.url),"../modules/UserAccount/pages/login.vue":()=>R(()=>import("./login-0ccfe561.js"),["./login-0ccfe561.js","./js.cookie-736eca92.js","./_plugin-vue_export-helper-f1dda974.js","./ContainerLayout-faf266a6.js","./type-f8ec5bac.js","./lodash-e9f1b42e.js","./_commonjsHelpers-725317a4.js","./ContainerLayout-9f8e5ee8.css","./index-2970672b.js","./mixin-70b7655c.js","./index-5c647c99.js","./Translations-a53f235a.js","./vuex.esm-bundler-979f16ef.js","./Translations-86749db0.css","./index-7eb0f0a6.js","./login-1a8f8a01.css"],import.meta.url)}),ae=()=>R(()=>import("./index-b89cb0b3.js"),["./index-b89cb0b3.js","./_plugin-vue_export-helper-f1dda974.js"],import.meta.url),nt=()=>R(()=>import("./LayoutView-d62b4f24.js"),["./LayoutView-d62b4f24.js","./_plugin-vue_export-helper-f1dda974.js","./NavBar-bffdae38.js","./Translations-a53f235a.js","./js.cookie-736eca92.js","./vuex.esm-bundler-979f16ef.js","./Translations-86749db0.css","./index-7eb0f0a6.js","./index-5c647c99.js","./NavBar-ebee815d.css","./LayoutView-1c405cbf.css"],import.meta.url),rt=()=>R(()=>import("./LayoutArea-9343cec8.js"),["./LayoutArea-9343cec8.js","./_plugin-vue_export-helper-f1dda974.js","./LayoutArea-6dddb641.css"],import.meta.url),ot=[{path:"test-layout",title:"TestLayout",name:"布局测试",icon:"el-icon-s-promotion",meta:{title:"TestLayout"},component:rt},{path:"user",component:ae,name:"User",icon:"eye",meta:{title:"账户"},redirect:{name:"UserLogin"},children:[{path:"login",name:"UserLogin",component:B["../modules/UserAccount/pages/login.vue"],meta:{title:"登录"}}]},{path:"project",component:ae,name:"Project",icon:"eye",redirect:{name:"ProjectList"},children:[{path:"",name:"ProjectList",meta:{title:"项目列表"},component:B["../modules/Project/pages/list.vue"]},{path:"list",name:"ProjectList",component:B["../modules/Project/pages/list.vue"],meta:{title:"项目管理"}}]},{path:"result",redirect:{name:"ProjectList"}},{path:"result/:projectId",component:nt,name:"result",icon:"eye",redirect:{name:"ResultOverview"},children:[{path:"overview",name:"ResultOverview",component:B["../modules/Result/pages/overview.vue"],meta:{title:"总览"}}]}],st=()=>R(()=>import("./index-b89cb0b3.js"),["./index-b89cb0b3.js","./_plugin-vue_export-helper-f1dda974.js"],import.meta.url);function it(){let e="";return se.forEach((t,n)=>{const r=n!==se.length-1?"|":"";e=`${e}${t.localeCode}${r}`}),`(${e})`}const at=[{path:"/",name:"Root",redirect:"/project"},{path:`/:locale${it()}?`,component:st,beforeEnter(e,t,n){if(qe(e.params.locale)&&!Je(e.params.pathMatch)){n(`/${e.params.locale}/project`);return}n()},children:[{path:"",name:"LangRoot",redirect:{name:"Project"}},...ot]},{path:"/:pathMatch(.*)",name:"404",component:()=>R(()=>import("./404-fbbbfbc1.js"),["./404-fbbbfbc1.js","./_plugin-vue_export-helper-f1dda974.js"],import.meta.url)}],ct=$e(),ut=Ve({history:ct,routes:at});function be(e,t){return function(){return e.apply(t,arguments)}}const{toString:Oe}=Object.prototype,{getPrototypeOf:Z}=Object,Y=(e=>t=>{const n=Oe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>Y(t)===e),q=e=>t=>typeof t===e,{isArray:N}=Array,C=q("undefined");function lt(e){return e!==null&&!C(e)&&e.constructor!==null&&!C(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Se=A("ArrayBuffer");function ft(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Se(e.buffer),t}const dt=q("string"),g=q("function"),_e=q("number"),ee=e=>e!==null&&typeof e=="object",pt=e=>e===!0||e===!1,j=e=>{if(Y(e)!=="object")return!1;const t=Z(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},mt=A("Date"),ht=A("File"),yt=A("Blob"),Et=A("FileList"),wt=e=>ee(e)&&g(e.pipe),Rt=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Oe.call(e)===t||g(e.toString)&&e.toString()===t)},bt=A("URLSearchParams"),Ot=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),N(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let u;for(r=0;r<i;r++)u=s[r],t.call(null,e[u],u,e)}}function Ae(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Te=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ge=e=>!C(e)&&e!==Te;function K(){const{caseless:e}=ge(this)&&this||{},t={},n=(r,o)=>{const s=e&&Ae(t,o)||o;j(t[s])&&j(r)?t[s]=K(t[s],r):j(r)?t[s]=K({},r):N(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&D(arguments[r],n);return t}const St=(e,t,n,{allOwnKeys:r}={})=>(D(t,(o,s)=>{n&&g(o)?e[s]=be(o,n):e[s]=o},{allOwnKeys:r}),e),_t=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),At=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Tt=(e,t,n,r)=>{let o,s,i;const u={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&Z(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},gt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Pt=e=>{if(!e)return null;if(N(e))return e;let t=e.length;if(!_e(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},xt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Z(Uint8Array)),Nt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Lt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ct=A("HTMLFormElement"),Dt=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),ce=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ft=A("RegExp"),Pe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(o,s)=>{t(o,s,e)!==!1&&(r[s]=o)}),Object.defineProperties(e,r)},Ut=e=>{Pe(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Bt=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return N(e)?r(e):r(String(e).split(t)),n},jt=()=>{},kt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),vt=e=>{const t=new Array(10),n=(r,o)=>{if(ee(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=N(r)?[]:{};return D(r,(i,u)=>{const d=n(i,o+1);!C(d)&&(s[u]=d)}),t[o]=void 0,s}}return r};return n(e,0)},a={isArray:N,isArrayBuffer:Se,isBuffer:lt,isFormData:Rt,isArrayBufferView:ft,isString:dt,isNumber:_e,isBoolean:pt,isObject:ee,isPlainObject:j,isUndefined:C,isDate:mt,isFile:ht,isBlob:yt,isRegExp:Ft,isFunction:g,isStream:wt,isURLSearchParams:bt,isTypedArray:xt,isFileList:Et,forEach:D,merge:K,extend:St,trim:Ot,stripBOM:_t,inherits:At,toFlatObject:Tt,kindOf:Y,kindOfTest:A,endsWith:gt,toArray:Pt,forEachEntry:Nt,matchAll:Lt,isHTMLForm:Ct,hasOwnProperty:ce,hasOwnProp:ce,reduceDescriptors:Pe,freezeMethods:Ut,toObjectSet:Bt,toCamelCase:Dt,noop:jt,toFiniteNumber:kt,findKey:Ae,global:Te,isContextDefined:ge,toJSONObject:vt};function h(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xe=h.prototype,Ne={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ne[e]={value:e}});Object.defineProperties(h,Ne);Object.defineProperty(xe,"isAxiosError",{value:!0});h.from=(e,t,n,r,o,s)=>{const i=Object.create(xe);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),h.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var It=typeof self=="object"?self.FormData:window.FormData;const Ht=It;function G(e){return a.isPlainObject(e)||a.isArray(e)}function Le(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ue(e,t,n){return e?e.concat(t).map(function(o,s){return o=Le(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Mt(e){return a.isArray(e)&&!e.some(G)}const qt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $t(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function $(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(Ht||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,S){return!a.isUndefined(S[m])});const r=n.metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&$t(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,m,S){let b=f;if(f&&!S&&typeof f=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Mt(f)||a.isFileList(f)||a.endsWith(m,"[]")&&(b=a.toArray(f)))return m=Le(m),b.forEach(function(U,Me){!(a.isUndefined(U)||U===null)&&t.append(i===!0?ue([m],Me,s):i===null?m:m+"[]",c(U))}),!1}return G(f)?!0:(t.append(ue(S,m,s),c(f)),!1)}const p=[],w=Object.assign(qt,{defaultVisitor:l,convertValue:c,isVisitable:G});function y(f,m){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(f),a.forEach(f,function(b,P){(!(a.isUndefined(b)||b===null)&&o.call(t,b,a.isString(P)?P.trim():P,m,w))===!0&&y(b,m?m.concat(P):[P])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function le(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function te(e,t){this._pairs=[],e&&$(e,this,t)}const Ce=te.prototype;Ce.append=function(t,n){this._pairs.push([t,n])};Ce.toString=function(t){const n=t?function(r){return t.call(this,r,le)}:le;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Vt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function De(e,t,n){if(!t)return e;const r=n&&n.encode||Vt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new te(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class zt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fe=zt,Fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Jt=typeof URLSearchParams<"u"?URLSearchParams:te,Wt=FormData,Kt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Gt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:Jt,FormData:Wt,Blob},isStandardBrowserEnv:Kt,isStandardBrowserWebWorkerEnv:Gt,protocols:["http","https","file","blob","url","data"]};function Xt(e,t){return $(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Qt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Zt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Ue(e){function t(n,r,o,s){let i=n[s++];const u=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!u):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Zt(o[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Qt(r),o,n,0)}),n}return null}const Yt={"Content-Type":void 0};function en(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const V={transitional:Fe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Xt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return $(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),en(t)):t}],transformResponse:[function(t){const n=this.transitional||V.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?h.from(u,h.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){V.headers[t]={}});a.forEach(["post","put","patch"],function(t){V.headers[t]=a.merge(Yt)});const ne=V,tn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nn=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&tn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},de=Symbol("internals");function L(e){return e&&String(e).trim().toLowerCase()}function k(e){return e===!1||e==null?e:a.isArray(e)?e.map(k):String(e)}function rn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function on(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function pe(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function sn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function an(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(u,d,c){const l=L(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(o,l);(!p||o[p]===void 0||c===!0||c===void 0&&o[p]!==!1)&&(o[p||d]=k(u))}const i=(u,d)=>a.forEach(u,(c,l)=>s(c,l,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!on(t)?i(nn(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=L(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return rn(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=L(t),t){const r=a.findKey(this,t);return!!(r&&(!n||pe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=L(i),i){const u=a.findKey(r,i);u&&(!n||pe(r,r[u],u,n))&&(delete r[u],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=k(o),delete n[s];return}const u=t?sn(s):String(s).trim();u!==s&&delete n[s],n[u]=k(o),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[de]=this[de]={accessors:{}}).accessors,o=this.prototype;function s(i){const u=L(i);r[u]||(an(o,i),r[u]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(z.prototype);a.freezeMethods(z);const _=z;function J(e,t){const n=this||ne,r=t||n,o=_.from(r.headers);let s=r.data;return a.forEach(e,function(u){s=u.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Be(e){return!!(e&&e.__CANCEL__)}function F(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(F,h,{__CANCEL__:!0});const cn=null;function un(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ln=O.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function fn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function dn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function je(e,t){return e&&!fn(t)?dn(e,t):t}const pn=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const u=a.isString(i)?o(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function mn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function hn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),l=r[s];i||(i=c),n[o]=d,r[o]=c;let p=s,w=0;for(;p!==o;)w+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-i<t)return;const y=l&&c-l;return y?Math.round(w*1e3/y):void 0}}function me(e,t){let n=0;const r=hn(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,u=s-n,d=r(u),c=s<=i;n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:u,rate:d||void 0,estimated:d&&i&&c?(i-s)/d:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const yn=typeof XMLHttpRequest<"u",En=yn&&function(e){return new Promise(function(n,r){let o=e.data;const s=_.from(e.headers).normalize(),i=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(o)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv)&&s.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+f))}const l=je(e.baseURL,e.url);c.open(e.method.toUpperCase(),De(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=_.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};un(function(b){n(b),d()},function(b){r(b),d()},m),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){!c||(r(new h("Request aborted",h.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||Fe;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new h(f,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,c)),c=null},O.isStandardBrowserEnv){const y=(e.withCredentials||pn(l))&&e.xsrfCookieName&&ln.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(f,m){c.setRequestHeader(m,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",me(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",me(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=y=>{!c||(r(!y||y.type?new F(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const w=mn(l);if(w&&O.protocols.indexOf(w)===-1){r(new h("Unsupported protocol "+w+":",h.ERR_BAD_REQUEST,e));return}c.send(o||null)})},v={http:cn,xhr:En};a.forEach(v,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const wn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?v[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new h(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(v,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:v};function W(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new F(null,e)}function he(e){return W(e),e.headers=_.from(e.headers),e.data=J.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),wn.getAdapter(e.adapter||ne.adapter)(e).then(function(r){return W(e),r.data=J.call(e,e.transformResponse,r),r.headers=_.from(r.headers),r},function(r){return Be(r)||(W(e),r&&r.response&&(r.response.data=J.call(e,e.transformResponse,r.response),r.response.headers=_.from(r.response.headers))),Promise.reject(r)})}const ye=e=>e instanceof _?e.toJSON():e;function x(e,t){t=t||{};const n={};function r(c,l,p){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:p},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function o(c,l,p){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,l,p)}function s(c,l){if(!a.isUndefined(l))return r(void 0,l)}function i(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function u(c,l,p){if(p in t)return r(c,l);if(p in e)return r(void 0,c)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,l)=>o(ye(c),ye(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const p=d[l]||o,w=p(e[l],t[l],l);a.isUndefined(w)&&p!==u||(n[l]=w)}),n}const ke="1.2.6",re={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{re[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ee={};re.transitional=function(t,n,r){function o(s,i){return"[Axios v"+ke+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,u)=>{if(t===!1)throw new h(o(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!Ee[i]&&(Ee[i]=!0),t?t(s,i,u):!0}};function Rn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const u=e[s],d=u===void 0||i(u,s,e);if(d!==!0)throw new h("option "+s+" must be "+d,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+s,h.ERR_BAD_OPTION)}}const X={assertOptions:Rn,validators:re},T=X.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&X.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),o!==void 0&&X.assertOptions(o,{encode:T.function,serialize:T.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=_.concat(i,s);const u=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,u.unshift(m.fulfilled,m.rejected))});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let l,p=0,w;if(!d){const f=[he.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,c),w=f.length,l=Promise.resolve(n);p<w;)l=l.then(f[p++],f[p++]);return l}w=u.length;let y=n;for(p=0;p<w;){const f=u[p++],m=u[p++];try{y=f(y)}catch(S){m.call(this,S);break}}try{l=he.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,w=c.length;p<w;)l=l.then(c[p++],c[p++]);return l}getUri(t){t=x(this.defaults,t);const n=je(t.baseURL,t.url);return De(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(x(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,u){return this.request(x(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const I=H;class oe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(u=>{r.subscribe(u),s=u}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,u){r.reason||(r.reason=new F(s,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new oe(function(o){t=o}),cancel:t}}}const bn=oe;function On(e){return function(n){return e.apply(null,n)}}function Sn(e){return a.isObject(e)&&e.isAxiosError===!0}const Q={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Q).forEach(([e,t])=>{Q[t]=e});const _n=Q;function ve(e){const t=new I(e),n=be(I.prototype.request,t);return a.extend(n,I.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return ve(x(e,o))},n}const E=ve(ne);E.Axios=I;E.CanceledError=F;E.CancelToken=bn;E.isCancel=Be;E.VERSION=ke;E.toFormData=$;E.AxiosError=h;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=On;E.isAxiosError=Sn;E.mergeConfig=x;E.AxiosHeaders=_;E.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e);E.HttpStatusCode=_n;E.default=E;const An=E;function Tn(e){return Ye(e)?e:(e=e.replace(/[-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}function gn(e,t){t=t||{};const n=t.separator||"_",r=t.split||/(?=[A-Z])/;return e.split(r).join(n)}function Pn(e,t){return gn(e,t).toLowerCase()}function Ie(e,t){const n=t&&"process"in t?t.process:t;return typeof n!="function"?e:function(r,o){return n(r,e,o)}}function M(e,t,n){if(!We(t)||Ke(t)||Ge(t)||Xe(t)||Qe(t))return t;let r,o=0,s=0;if(Ze(t))for(r=[],s=t.length;o<s;o++)r.push(M(e,t[o],n));else{r={};for(const i in t)t.hasOwnProperty(i)&&(r[e(i,n)]=M(e,t[i],n))}return r}function we(e,t){return M(Ie(Tn,t),e)}function Re(e,t){return M(Ie(Pn,t),e,t)}function xn(e){ut.push(`/${e}`)}const Nn={200:"The server successfully returned the requested data.",201:"Create or modify data successfully.",202:"A request has entered the background queue (asynchronous task).",204:"Data deleted successfully.",206:"Successful range request.",400:"Bad error request, and the server did not create or modify the data.",401:"User does not have permission (invalid username, password, security token).",403:"User is authorized, but access is forbidden.",404:"The request sent is for a record that does not exist, and the server does not operate.",405:"Request denied.",406:"Requested format not available.",410:"The requested resource is permanently deleted and will no longer be available.",422:"When creating an object, a validation error occurrs.",500:"An error occurred in the server, please check the server.",502:"Bad Gateway Error.",503:"The server is temporarily unable to service your request due to maintenance downtime or capacity problems.",504:"Gateway Timeout."},He=An.create({baseURL:"http://api.test.xxx.xxx.com",timeout:15e3});He.interceptors.request.use(e=>{const t=ze.get("token");return e.data instanceof FormData||(e.data=Re(e.data)),e.params=Re(e.params),e.url==="/login"||(e.headers.Authorization=t),e},e=>Promise.reject(e));He.interceptors.response.use(e=>{const t=e.data;return Promise.resolve().then(()=>{Dn(e.headers,t)}),e.request.responseType==="blob"&&/json$/gi.test(e.headers["content-type"])?new Promise(n=>{const r=new FileReader;r.onload=()=>{e.data=JSON.parse(r.result),n(we(e.data))},r.readAsText(e.data)}):t instanceof Blob?{data:t,msg:"",error:0}:we(t)},e=>(e.config.redirect&&xn(e.config.redirect),e.response?{data:{},error:e.response.status,msg:Nn[e.response.status]||e.response.data.message}:{data:{},error:5e3,msg:"服务请求不可用，请重试或检查您的网络。"}));function Bn(e=0){return new Promise(t=>{setTimeout(()=>{t({})},e)})}function Ln(e){const t=[/filename\*=[^']+'\w*'"([^"]+)";?/i,/filename\*=[^']+'\w*'([^;]+);?/i,/filename="([^;]*);?"/i,/filename=([^;]*);?/i];let n;if(t.some(r=>(n=r.exec(e),n!==null)),n!==null&&n.length>1)try{return decodeURIComponent(n[1])}catch{}return null}function Cn(e,t="test-filename",n){const r=e instanceof Blob?e:new Blob([e],{type:n}),o=window.URL.createObjectURL(r),s=document.createElement("a");s.style.display="none",s.href=o,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s)}function Dn(e,t){const n=e["content-disposition"];if(n){let r="";r=Ln(n),r&&Cn(t,r,e["content-type"])}}export{Bn as a,ut as r,He as s};
