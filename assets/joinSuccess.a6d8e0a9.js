import{O as W,Y as X,_ as K,o as Q,c as Z,d as S,t as tt,i as R}from"./index.461c5154.js";var D={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(b,_){(function(x,m){b.exports=m()})(W,function(){return function(){var T={686:function(c,o,t){t.d(o,{default:function(){return J}});var u=t(279),f=t.n(u),l=t(370),h=t.n(l),y=t(817),g=t.n(y);function d(a){try{return document.execCommand(a)}catch{return!1}}var v=function(n){var e=g()(n);return d("cut"),e},p=v;function E(a){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=a,e}var M=function(n,e){var r=E(n);e.container.appendChild(r);var i=g()(r);return d("copy"),r.remove(),i},z=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=M(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=M(n.value,e):(r=g()(n),d("copy")),r},N=z;function A(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?A=function(e){return typeof e}:A=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(a)}var $=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,i=n.container,s=n.target,w=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(s!==void 0)if(s&&A(s)==="object"&&s.nodeType===1){if(r==="copy"&&s.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(s.hasAttribute("readonly")||s.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(w)return N(w,{container:i});if(s)return r==="cut"?p(s):N(s,{container:i})},I=$;function C(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(e){return typeof e}:C=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(a)}function B(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function P(a,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}function F(a,n,e){return n&&P(a.prototype,n),e&&P(a,e),a}function G(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),n&&L(a,n)}function L(a,n){return L=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},L(a,n)}function H(a){var n=q();return function(){var r=k(a),i;if(n){var s=k(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return U(this,i)}}function U(a,n){return n&&(C(n)==="object"||typeof n=="function")?n:Y(a)}function Y(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function q(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function k(a){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(a)}function j(a,n){var e="data-clipboard-".concat(a);if(!!n.hasAttribute(e))return n.getAttribute(e)}var V=function(a){G(e,a);var n=H(e);function e(r,i){var s;return B(this,e),s=n.call(this),s.resolveOptions(i),s.listenClick(r),s}return F(e,[{key:"resolveOptions",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof i.action=="function"?i.action:this.defaultAction,this.target=typeof i.target=="function"?i.target:this.defaultTarget,this.text=typeof i.text=="function"?i.text:this.defaultText,this.container=C(i.container)==="object"?i.container:document.body}},{key:"listenClick",value:function(i){var s=this;this.listener=h()(i,"click",function(w){return s.onClick(w)})}},{key:"onClick",value:function(i){var s=i.delegateTarget||i.currentTarget,w=this.action(s)||"copy",O=I({action:w,container:this.container,target:this.target(s),text:this.text(s)});this.emit(O?"success":"error",{action:w,text:O,trigger:s,clearSelection:function(){s&&s.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(i){return j("action",i)}},{key:"defaultTarget",value:function(i){var s=j("target",i);if(s)return document.querySelector(s)}},{key:"defaultText",value:function(i){return j("text",i)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return N(i,s)}},{key:"cut",value:function(i){return p(i)}},{key:"isSupported",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],s=typeof i=="string"?[i]:i,w=!!document.queryCommandSupported;return s.forEach(function(O){w=w&&!!document.queryCommandSupported(O)}),w}}]),e}(f()),J=V},828:function(c){var o=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function u(f,l){for(;f&&f.nodeType!==o;){if(typeof f.matches=="function"&&f.matches(l))return f;f=f.parentNode}}c.exports=u},438:function(c,o,t){var u=t(828);function f(y,g,d,v,p){var E=h.apply(this,arguments);return y.addEventListener(d,E,p),{destroy:function(){y.removeEventListener(d,E,p)}}}function l(y,g,d,v,p){return typeof y.addEventListener=="function"?f.apply(null,arguments):typeof d=="function"?f.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(E){return f(E,g,d,v,p)}))}function h(y,g,d,v){return function(p){p.delegateTarget=u(p.target,g),p.delegateTarget&&v.call(y,p)}}c.exports=l},879:function(c,o){o.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},o.nodeList=function(t){var u=Object.prototype.toString.call(t);return t!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in t&&(t.length===0||o.node(t[0]))},o.string=function(t){return typeof t=="string"||t instanceof String},o.fn=function(t){var u=Object.prototype.toString.call(t);return u==="[object Function]"}},370:function(c,o,t){var u=t(879),f=t(438);function l(d,v,p){if(!d&&!v&&!p)throw new Error("Missing required arguments");if(!u.string(v))throw new TypeError("Second argument must be a String");if(!u.fn(p))throw new TypeError("Third argument must be a Function");if(u.node(d))return h(d,v,p);if(u.nodeList(d))return y(d,v,p);if(u.string(d))return g(d,v,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function h(d,v,p){return d.addEventListener(v,p),{destroy:function(){d.removeEventListener(v,p)}}}function y(d,v,p){return Array.prototype.forEach.call(d,function(E){E.addEventListener(v,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(E){E.removeEventListener(v,p)})}}}function g(d,v,p){return f(document.body,d,v,p)}c.exports=l},817:function(c){function o(t){var u;if(t.nodeName==="SELECT")t.focus(),u=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var f=t.hasAttribute("readonly");f||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),f||t.removeAttribute("readonly"),u=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),h=document.createRange();h.selectNodeContents(t),l.removeAllRanges(),l.addRange(h),u=l.toString()}return u}c.exports=o},279:function(c){function o(){}o.prototype={on:function(t,u,f){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:u,ctx:f}),this},once:function(t,u,f){var l=this;function h(){l.off(t,h),u.apply(f,arguments)}return h._=u,this.on(t,h,f)},emit:function(t){var u=[].slice.call(arguments,1),f=((this.e||(this.e={}))[t]||[]).slice(),l=0,h=f.length;for(l;l<h;l++)f[l].fn.apply(f[l].ctx,u);return this},off:function(t,u){var f=this.e||(this.e={}),l=f[t],h=[];if(l&&u)for(var y=0,g=l.length;y<g;y++)l[y].fn!==u&&l[y].fn._!==u&&h.push(l[y]);return h.length?f[t]=h:delete f[t],this}},c.exports=o,c.exports.TinyEmitter=o}},x={};function m(c){if(x[c])return x[c].exports;var o=x[c]={exports:{}};return T[c](o,o.exports,m),o.exports}return function(){m.n=function(c){var o=c&&c.__esModule?function(){return c.default}:function(){return c};return m.d(o,{a:o}),o}}(),function(){m.d=function(c,o){for(var t in o)m.o(o,t)&&!m.o(c,t)&&Object.defineProperty(c,t,{enumerable:!0,get:o[t]})}}(),function(){m.o=function(c,o){return Object.prototype.hasOwnProperty.call(c,o)}}(),m(686)}().default})})(D);var et=X(D.exports),nt=b=>{const _=(b==null?void 0:b.appendToBody)===void 0?!0:b.appendToBody;return{toClipboard(T,x){return new Promise((m,c)=>{const o=document.createElement("button"),t=new et(o,{text:()=>T,action:()=>"copy",container:x!==void 0?x:document.body});t.on("success",u=>{t.destroy(),m(u)}),t.on("error",u=>{t.destroy(),c(u)}),_&&document.body.appendChild(o),o.click(),_&&document.body.removeChild(o)})}}};const rt={setup(){const{toClipboard:b}=nt();return{copy:async T=>{try{var x=await b(T);return x}catch(m){return console.error(m),!1}}}},data(){return{gymData:{name:"",id:0}}},mounted(){this.$route.query.params&&(this.gymData.name=JSON.parse(this.$route.query.params).fullName,this.gymData.id=this.$route.query.tenantId)},methods:{toMyGym(){this.$router.replace({path:"/myGym"})},invitatEmployee(){},finishInfo(){},invitatClick(){const b=`https://mp.tsporting.com/gymWechat/joinUs?sGN=${this.gymData.name}&sN=${this.$route.query.params.adminName}`;var _=this.copy(b);_?this.$toast("\u5DF2\u590D\u5236\u9080\u8BF7\u94FE\u63A5,\u5FEB\u53BB\u5206\u4EAB\u7ED9\u597D\u53CB\u5427"):this.$toast("\u590D\u5236\u5931\u8D25,\u8BF7\u91CD\u8BD5")}}},ot={class:"container"},it={class:"title"},at=S("view",{class:"mtCustom",style:{"--z":"30px"}},null,-1),ut={class:"subTitle"},ct=R("\u8BF7\u524D\u5F80"),st=R("\u67E5\u770B\u8BE6\u60C5"),ft=S("view",{class:"mtCustom",style:{"--z":"78px"}},null,-1);function lt(b,_,T,x,m,c){return Q(),Z("view",ot,[S("text",it,"\u606D\u559C\u60A8,"+tt(m.gymData.name)+"\u5065\u8EAB\u623F\u5165\u9A7B\u6210\u529F",1),at,S("text",ut,[ct,S("text",{class:"markTitle",onClick:_[0]||(_[0]=(...o)=>c.toMyGym&&c.toMyGym(...o))},"\u670D\u52A1\u53F7-\u6211\u7684\u5065\u8EAB\u623F"),st]),ft,S("view",{class:"invitation",onClick:_[1]||(_[1]=(...o)=>c.invitatClick&&c.invitatClick(...o))}," \u9080\u8BF7\u6211\u7684\u8FDE\u9501\u54C1\u724C\u5165\u9A7B ")])}var yt=K(rt,[["render",lt]]);export{yt as default};
