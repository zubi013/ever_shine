var Qe=e=>{throw TypeError(e)};var Ft=(e,t,n)=>t.has(e)||Qe("Cannot "+n);var v=(e,t,n)=>(Ft(e,t,"read from private field"),n?n.call(e):t.get(e)),P=(e,t,n)=>t.has(e)?Qe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{n as Ie,aQ as Vt,ak as O,g as C,_ as N,aH as Bt}from"./runtime.DvS8G5OX.js";import{s as qt}from"./utils.V2f6GdBC.js";import{o as Ze}from"./index-client.Bm-aL8S6.js";new URL("sveltekit-internal://");function zt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function Gt(e){return e.split("%25").map(decodeURI).join("%25")}function Mt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Ue({href:e}){return e.split("#")[0]}function Ht(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return l=>(n(l),i[s](l));t();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];r&&o.push("hash");for(const i of o)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}const Kt="/__data.json",Wt=".html__data.json";function Yt(e){return e.endsWith(".html")?e.replace(/\.html$/,Wt):e.replace(/\/$/,"")+Kt}function Jt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Xt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const pt=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&W.delete(je(e)),pt(e,t));const W=new Map;function Qt(e,t){const n=je(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&W.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Xt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,t)}function Zt(e,t,n){if(W.size>0){const r=je(e,n),a=W.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);W.delete(r)}}return window.fetch(t,n)}function je(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Jt(...a)}"]`}return r}const en=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function tn(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${rn(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return t.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Le(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=en.exec(c),[,h,y,u,g]=d;return t.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return Le(c)}).join("")}).join("")}/?$`),params:t}}function nn(e){return!/^\([^)]+\)$/.test(e)}function rn(e){return e.slice(1).split("/").filter(nn)}function an(e,t,n){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<t.length;s+=1){const c=t[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=t[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function on({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([s,[c,l,d]])=>{const{pattern:h,params:y}=tn(s),u={id:s,exec:g=>{const f=h.exec(g);if(f)return an(f,y,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function gt(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function et(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const V=[];function $e(e,t=Ie){let n=null;const r=new Set;function a(s){if(Vt(e,s)&&(e=s,n)){const c=!V.length;for(const l of r)l[1](),V.push(l,e);if(c){for(let l=0;l<V.length;l+=2)V[l][0](V[l+1]);V.length=0}}}function o(s){a(s(e))}function i(s,c=Ie){const l=[s,c];return r.add(l),r.size===1&&(n=t(a,o)||Ie),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:i}}function qn(e){let t;return qt(e,n=>t=n)(),t}var lt;const x=((lt=globalThis.__sveltekit_1izo1zx)==null?void 0:lt.base)??"";var ft;const sn=((ft=globalThis.__sveltekit_1izo1zx)==null?void 0:ft.assets)??x,cn="1737998569796",mt="sveltekit:snapshot",yt="sveltekit:scroll",_t="sveltekit:states",ln="sveltekit:pageurl",q="sveltekit:history",X="sveltekit:navigation",de={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ue=location.origin;function wt(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function De(){return{x:pageXOffset,y:pageYOffset}}function B(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const tt={...de,"":de.hover};function bt(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function vt(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=bt(e)}}function Oe(e,t,n){let r;try{r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,o=!r||!!a||be(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ue&&e.hasAttribute("download");return{url:r,external:o,target:a,download:i}}function he(e){let t=null,n=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=B(s,"preload-code")),a===null&&(a=B(s,"preload-data")),t===null&&(t=B(s,"keepfocus")),n===null&&(n=B(s,"noscroll")),o===null&&(o=B(s,"reload")),i===null&&(i=B(s,"replacestate")),s=bt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:tt[r??"off"],preload_data:tt[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(o),replace_state:c(i)}}function nt(e){const t=$e(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function o(i){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const kt={v:()=>{}};function fn(){const{set:e,subscribe:t}=$e(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${sn}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==cn;return i&&(e(!0),kt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function be(e,t,n){return e.origin!==ue||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function rt(e){const t=dn(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const un="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function dn(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=un.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const hn=-1,pn=-2,gn=-3,mn=-4,yn=-5,_n=-6;function wn(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(o,i=!1){if(o===hn)return;if(o===gn)return NaN;if(o===mn)return 1/0;if(o===yn)return-1/0;if(o===_n)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=t==null?void 0:t[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=rt(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=rt(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==pn&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const At=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...At];const bn=new Set([...At]);[...bn];function vn(e){return e.filter(t=>t!=null)}class ve{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class St{constructor(t,n){this.status=t,this.location=n}}class Fe extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const kn="x-sveltekit-invalidated",An="x-sveltekit-trailing-slash";function pe(e){return e instanceof ve||e instanceof Fe?e.status:500}function Sn(e){return e instanceof Fe?e.text:"Internal Error"}let U,Q,Te;const En=Ze.toString().includes("$$")||/function \w+\(\) \{\}/.test(Ze.toString());var te,ne,re,ae,oe,se,ie,ce,ut,le,dt,fe,ht;En?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Q={current:null},Te={current:!1}):(U=new(ut=class{constructor(){P(this,te,O({}));P(this,ne,O(null));P(this,re,O(null));P(this,ae,O({}));P(this,oe,O({id:null}));P(this,se,O({}));P(this,ie,O(-1));P(this,ce,O(new URL("https://example.com")))}get data(){return C(v(this,te))}set data(t){N(v(this,te),t)}get form(){return C(v(this,ne))}set form(t){N(v(this,ne),t)}get error(){return C(v(this,re))}set error(t){N(v(this,re),t)}get params(){return C(v(this,ae))}set params(t){N(v(this,ae),t)}get route(){return C(v(this,oe))}set route(t){N(v(this,oe),t)}get state(){return C(v(this,se))}set state(t){N(v(this,se),t)}get status(){return C(v(this,ie))}set status(t){N(v(this,ie),t)}get url(){return C(v(this,ce))}set url(t){N(v(this,ce),t)}},te=new WeakMap,ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ie=new WeakMap,ce=new WeakMap,ut),Q=new(dt=class{constructor(){P(this,le,O(null))}get current(){return C(v(this,le))}set current(t){N(v(this,le),t)}},le=new WeakMap,dt),Te=new(ht=class{constructor(){P(this,fe,O(!1))}get current(){return C(v(this,fe))}set current(t){N(v(this,fe),t)}},fe=new WeakMap,ht),kt.v=()=>Te.current=!0);function Et(e){Object.assign(U,e)}const Rn=new Set(["icon","shortcut icon","apple-touch-icon"]),F=gt(yt)??{},Z=gt(mt)??{},$={url:nt({}),page:nt({}),navigating:$e(null),updated:fn()};function Ve(e){F[e]=De()}function In(e,t){let n=e+1;for(;F[n];)delete F[n],n+=1;for(n=t+1;Z[n];)delete Z[n],n+=1}function G(e){return location.href=e.href,new Promise(()=>{})}async function Rt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(x||"/");e&&await e.update()}}function at(){}let ke,Ce,ge,j,Ne,A;const Be=[],me=[];let L=null;const It=new Set,Un=new Set,Y=new Set;let _={branch:[],error:null,url:null},qe=!1,ye=!1,ot=!0,ee=!1,H=!1,Ut=!1,ze=!1,Ge,I,T,M;const J=new Set;let xe;async function Hn(e,t,n){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),A=e,await((o=(a=e.hooks).init)==null?void 0:o.call(a)),ke=on(e),j=document.documentElement,Ne=t,Ce=e.nodes[0],ge=e.nodes[1],Ce(),ge(),I=(i=history.state)==null?void 0:i[q],T=(s=history.state)==null?void 0:s[X],I||(I=T=Date.now(),history.replaceState({...history.state,[q]:I,[X]:T},""));const r=F[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await jn(Ne,n):Cn(location.href,{replaceState:!0}),Nn()}async function Ln(){if(await(xe||(xe=Promise.resolve())),!xe)return;xe=null;const e=Se(_.url,!0);L=null;const t=M={},n=e&&await We(e);if(!(!n||t!==M)){if(n.type==="redirect")return Me(new URL(n.location,_.url).href,{},1,t);n.props.page&&Object.assign(U,n.props.page),_=n.state,Lt(),Ge.$set(n.props),Et(n.props.page)}}function Lt(){Be.length=0,ze=!1}function Tt(e){me.some(t=>t==null?void 0:t.snapshot)&&(Z[e]=me.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function xt(e){var t;(t=Z[e])==null||t.forEach((n,r)=>{var a,o;(o=(a=me[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function st(){Ve(I),et(yt,F),Tt(T),et(mt,Z)}async function Me(e,t,n,r){return K({type:"goto",url:wt(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(ze=!0)}})}async function Tn(e){if(e.id!==(L==null?void 0:L.id)){const t={};J.add(t),L={id:e.id,token:t,promise:We({...e,preload:t}).then(n=>(J.delete(t),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Pe(e){const t=ke.find(n=>n.exec(Ot(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n==null?void 0:n[1]()))}function Pt(e,t,n){var o;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,e.props.page),Ge=new A.root({target:t,props:{...e.props,stores:$,components:me},hydrate:n,sync:!1}),xt(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};Y.forEach(i=>i(a)),ye=!0}function _e({url:e,params:t,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(x&&(e.pathname===x||e.pathname===x+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=zt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:o},props:{constructors:vn(n).map(u=>u.node.component),page:Ye(U)}};i!==void 0&&(c.props.form=i);let l={},d=!U,h=0;for(let u=0;u<Math.max(n.length,_.branch.length);u+=1){const g=n[u],f=_.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==U.form||d)&&(c.props.page={error:a,params:t,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:U.data}),c}async function He({loader:e,parent:t,url:n,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const p of f){const{href:k}=new URL(p,n);c.dependencies.add(k)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:Ht(n,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)},A.hash),async fetch(f,p){let k;f instanceof Request?(k=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):k=f;const E=new URL(k,n);return s&&u(E.href),E.origin===n.origin&&(k=E.href.slice(n.origin.length)),ye?Zt(k,E.href,p):Qt(k,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),t()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function it(e,t,n,r,a,o){if(ze)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(Be.some(s=>s(new URL(i))))return!0;return!1}function Ke(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function xn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),o=t.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function ct({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:Ye(U),constructors:[]}}}async function We({id:e,invalidating:t,url:n,params:r,route:a,preload:o}){if((L==null?void 0:L.id)===e)return J.delete(L.token),L.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=_.url?e!==we(_.url):!1,y=_.route?a.id!==_.route.id:!1,u=xn(_.url,n);let g=!1;const f=l.map((m,w)=>{var D;const S=_.branch[w],R=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||it(g,y,h,u,(D=S.server)==null?void 0:D.uses,r));return R&&(g=!0),R});if(f.some(Boolean)){try{d=await jt(n,f)}catch(m){const w=await z(m,{url:n,params:r,route:{id:e}});return J.has(o)?ct({error:w,url:n,params:r,route:a}):Ae({status:pe(m),error:w,url:n,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let k=!1;const E=l.map(async(m,w)=>{var Ee;if(!m)return;const S=_.branch[w],R=p==null?void 0:p[w];if((!R||R.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!it(k,y,h,u,(Ee=S.universal)==null?void 0:Ee.uses,r))return S;if(k=!0,(R==null?void 0:R.type)==="error")throw R;return He({loader:m[1],url:n,params:r,route:a,parent:async()=>{var Xe;const Je={};for(let Re=0;Re<w;Re+=1)Object.assign(Je,(Xe=await E[Re])==null?void 0:Xe.data);return Je},server_data_node:Ke(R===void 0&&m[0]?{type:"skip"}:R??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of E)m.catch(()=>{});const b=[];for(let m=0;m<l.length;m+=1)if(l[m])try{b.push(await E[m])}catch(w){if(w instanceof St)return{type:"redirect",location:w.location};if(J.has(o))return ct({error:await z(w,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let S=pe(w),R;if(p!=null&&p.includes(w))S=w.status??S,R=w.error;else if(w instanceof ve)R=w.body;else{if(await $.updated.check())return await Rt(),await G(n);R=await z(w,{params:r,url:n,route:{id:a.id}})}const D=await Pn(m,b,i);return D?_e({url:n,params:r,branch:b.slice(0,D.idx).concat(D.node),status:S,error:R,route:a}):await Nt(n,{id:a.id},R,S)}else b.push(void 0);return _e({url:n,params:r,branch:b,status:200,error:null,route:a,form:t?void 0:null})}async function Pn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Ae({status:e,error:t,url:n,route:r}){const a={};let o=null;if(A.server_loads[0]===0)try{const l=await jt(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==ue||n.pathname!==location.pathname||qe)&&await G(n)}const s=await He({loader:Ce,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ke(o)}),c={node:await ge(),loader:ge,universal:null,server:null,data:null};return _e({url:n,params:a,branch:[s,c],status:e,error:t,route:null})}function Se(e,t){if(!e||be(e,x,A.hash))return;let n;try{if(n=A.hooks.reroute({url:new URL(e)})??e,typeof n=="string"){const a=new URL(e);A.hash?a.hash=n:a.pathname=n,n=a}}catch{return}const r=Ot(n);for(const a of ke){const o=a.exec(r);if(o)return{id:we(e),invalidating:t,route:a,params:Mt(o),url:e}}}function Ot(e){return Gt(A.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(x.length))||"/"}function we(e){return(A.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function Ct({url:e,type:t,intent:n,delta:r}){let a=!1;const o=Dt(_,n,e,t);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return ee||It.forEach(s=>s(i)),a?null:o}async function K({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=at,block:d=at}){const h=Se(t,!1),y=Ct({url:t,type:e,delta:n==null?void 0:n.delta,intent:h});if(!y){d();return}const u=I,g=T;l(),ee=!0,ye&&$.navigating.set(Q.current=y.navigation),M=c;let f=h&&await We(h);if(!f){if(be(t,x,A.hash))return await G(t);f=await Nt(t,{id:null},await z(new Fe(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(h==null?void 0:h.url)||t,M!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await Ae({status:500,error:await z(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Me(new URL(f.location,t).href,{},s+1,c),!1;else f.props.page.status>=400&&await $.updated.check()&&(await Rt(),await G(t));if(Lt(),Ve(u),Tt(g),f.props.page.url.pathname!==t.pathname&&(t.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const b=o?0:1,m={[q]:I+=b,[X]:T+=b,[_t]:i};(o?history.replaceState:history.pushState).call(history,m,"",t),o||In(I,T)}if(L=null,f.props.page.state=i,ye){_=f.state,f.props.page&&(f.props.page.url=t);const b=(await Promise.all(Array.from(Un,m=>m(y.navigation)))).filter(m=>typeof m=="function");if(b.length>0){let m=function(){b.forEach(w=>{Y.delete(w)})};b.push(m),b.forEach(w=>{Y.add(w)})}Ge.$set(f.props),Et(f.props.page),Ut=!0}else Pt(f,Ne,!1);const{activeElement:p}=document;await Bt();const k=n?n.scroll:a?De():null;if(ot){const b=t.hash&&document.getElementById(decodeURIComponent(A.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));k?scrollTo(k.x,k.y):b?b.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==p&&document.activeElement!==document.body;!r&&!E&&$n(),ot=!0,f.props.page&&Object.assign(U,f.props.page),ee=!1,e==="popstate"&&xt(T),y.fulfil(void 0),Y.forEach(b=>b(y.navigation)),$.navigating.set(Q.current=null)}async function Nt(e,t,n,r){return e.origin===ue&&e.pathname===location.pathname&&!qe?await Ae({status:r,error:n,url:e,route:t}):await G(e)}function On(){let e;j.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(o){o.defaultPrevented||r(o.composedPath()[0],1)}j.addEventListener("mousedown",t),j.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(Pe(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=vt(o,j);if(!s)return;const{url:c,external:l,download:d}=Oe(s,x,A.hash);if(l||d)return;const h=he(s),y=c&&we(_.url)===we(c);if(!h.reload&&!y)if(i<=h.preload_data){const u=Se(c,!1);u&&Tn(u)}else i<=h.preload_code&&Pe(c)}function a(){n.disconnect();for(const o of j.querySelectorAll("a")){const{url:i,external:s,download:c}=Oe(o,x,A.hash);if(s||c)continue;const l=he(o);l.reload||(l.preload_code===de.viewport&&n.observe(o),l.preload_code===de.eager&&Pe(i))}}Y.add(a),a()}function z(e,t){if(e instanceof ve)return e.body;const n=pe(e),r=Sn(e);return A.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Cn(e,t={}){return e=new URL(wt(e)),e.origin!==ue?Promise.reject(new Error("goto: invalid URL")):Me(e,t,0)}function Kn(e){{const{href:t}=new URL(e,location.href);Be.push(n=>n.href===t)}return Ln()}function Nn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(st(),!ee){const a=Dt(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};It.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&st()}),(t=navigator.connection)!=null&&t.saveData||On(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=vt(n.composedPath()[0],j);if(!r)return;const{url:a,external:o,target:i,download:s}=Oe(r,x,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=he(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=d===Ue(location);if(o||c.reload&&(!y||!h)){Ct({url:a,type:"link"})?ee=!0:n.preventDefault();return}if(h!==void 0&&y){const[,u]=_.url.href.split("#");if(u===h){if(n.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(H=!0,Ve(I),e(a),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),K({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(be(s,x,!1))return;const c=n.target,l=he(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),K({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){const a=n.state[q];if(M={},a===I)return;const o=F[a],i=n.state[_t]??{},s=new URL(n.state[ln]??location.href),c=n.state[X],l=Ue(location)===Ue(_.url);if(c===T&&(Ut||l)){i!==U.state&&(U.state=i),e(s),F[I]=De(),o&&scrollTo(o.x,o.y),I=a;return}const h=a-I;await K({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{I=a,T=c},block:()=>{history.go(-h)},nav_token:M})}else if(!H){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{H?(H=!1,history.replaceState({...history.state,[q]:++I,[X]:T},"",location.href)):A.hash&&_.url.hash===location.hash&&K({type:"goto",url:_.url})});for(const n of document.querySelectorAll("link"))Rn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(Q.current=null)});function e(n){_.url=U.url=n,$.page.set(Ye(U)),$.page.notify()}}async function jn(e,{status:t=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){qe=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Se(c,!1)||{});let l,d=!0;try{const h=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=$t(p.uses)),He({loader:A.nodes[g],url:c,params:a,route:o,parent:async()=>{const k={};for(let E=0;E<f;E+=1)Object.assign(k,(await h[E]).data);return k},server_data_node:Ke(p)})}),y=await Promise.all(h),u=ke.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=_e({url:c,params:a,branch:y,status:t,error:n,form:s,route:u??null})}catch(h){if(h instanceof St){await G(new URL(h.location,location.href));return}l=await Ae({status:pe(h),error:await z(h,{url:c,params:a,route:o}),url:c,route:o}),e.textContent="",d=!1}l.props.page&&(l.props.page.state={}),Pt(l,e,d)}async function jt(e,t){var a;const n=new URL(e);n.pathname=Yt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(An,"1"),n.searchParams.append(kn,t.map(o=>o?"1":"0").join(""));const r=await pt(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ve(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return wn(y,{...A.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const f=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=$t(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:k,error:E}=f,b=i.get(p);i.delete(p),E?b.reject(l(E)):b.fulfil(l(k))}}}})}function $t(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function $n(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function Dt(e,t,n,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((l=t==null?void 0:t.route)==null?void 0:l.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:o}}function Ye(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}export{Cn as a,x as b,Hn as c,qn as g,Kn as i,U as p,$ as s,Te as u};
