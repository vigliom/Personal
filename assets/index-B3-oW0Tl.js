(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Zo(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Z={},qt=[],it=()=>{},ji=()=>!1,fo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Xo=e=>e.startsWith("onUpdate:"),Se=Object.assign,er=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rl=Object.prototype.hasOwnProperty,q=(e,t)=>rl.call(e,t),R=Array.isArray,Jt=e=>Nn(e)==="[object Map]",Ei=e=>Nn(e)==="[object Set]",Pr=e=>Nn(e)==="[object Date]",V=e=>typeof e=="function",ae=e=>typeof e=="string",Ge=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",Ii=e=>(Q(e)||V(e))&&V(e.then)&&V(e.catch),Li=Object.prototype.toString,Nn=e=>Li.call(e),il=e=>Nn(e).slice(8,-1),Ni=e=>Nn(e)==="[object Object]",tr=e=>ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,dn=Zo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),po=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},sl=/-\w/g,He=po(e=>e.replace(sl,t=>t.slice(1).toUpperCase())),ll=/\B([A-Z])/g,Ft=po(e=>e.replace(ll,"-$1").toLowerCase()),ho=po(e=>e.charAt(0).toUpperCase()+e.slice(1)),wo=po(e=>e?`on${ho(e)}`:""),Tt=(e,t)=>!Object.is(e,t),xo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Mi=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},al=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Or;const mo=()=>Or||(Or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=ae(o)?fl(o):nr(o);if(r)for(const i in r)t[i]=r[i]}return t}else if(ae(e)||Q(e))return e}const ul=/;(?![^(]*\))/g,cl=/:([^]+)/,dl=/\/\*[^]*?\*\//g;function fl(e){const t={};return e.replace(dl,"").split(ul).forEach(n=>{if(n){const o=n.split(cl);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Vt(e){let t="";if(ae(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const o=Vt(e[n]);o&&(t+=o+" ")}else if(Q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const pl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hl=Zo(pl);function Di(e){return!!e||e===""}function ml(e,t){if(e.length!==t.length)return!1;let n=!0;for(let o=0;n&&o<e.length;o++)n=or(e[o],t[o]);return n}function or(e,t){if(e===t)return!0;let n=Pr(e),o=Pr(t);if(n||o)return n&&o?e.getTime()===t.getTime():!1;if(n=Ge(e),o=Ge(t),n||o)return e===t;if(n=R(e),o=R(t),n||o)return n&&o?ml(e,t):!1;if(n=Q(e),o=Q(t),n||o){if(!n||!o)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const s in e){const a=e.hasOwnProperty(s),l=t.hasOwnProperty(s);if(a&&!l||!a&&l||!or(e[s],t[s]))return!1}}return String(e)===String(t)}const Ri=e=>!!(e&&e.__v_isRef===!0),le=e=>ae(e)?e:e==null?"":R(e)||Q(e)&&(e.toString===Li||!V(e.toString))?Ri(e)?le(e.value):JSON.stringify(e,Vi,2):String(e),Vi=(e,t)=>Ri(t)?Vi(e,t.value):Jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r],i)=>(n[ko(o,i)+" =>"]=r,n),{})}:Ei(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ko(n))}:Ge(t)?ko(t):Q(t)&&!R(t)&&!Ni(t)?String(t):t,ko=(e,t="")=>{var n;return Ge(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Ee;class gl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ee,!t&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){++this._on===1&&(this.prevScope=Ee,Ee=this)}off(){this._on>0&&--this._on===0&&(Ee=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(this.effects.length=0,n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function bl(){return Ee}let ne;const Po=new WeakSet;class Fi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Po.has(this)&&(Po.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Tr(this),Ui(this);const t=ne,n=Ke;ne=this,Ke=!0;try{return this.fn()}finally{zi(this),ne=t,Ke=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)sr(t);this.deps=this.depsTail=void 0,Tr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Po.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Mo(this)&&this.run()}get dirty(){return Mo(this)}}let Bi=0,fn,pn;function Hi(e,t=!1){if(e.flags|=8,t){e.next=pn,pn=e;return}e.next=fn,fn=e}function rr(){Bi++}function ir(){if(--Bi>0)return;if(pn){let t=pn;for(pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;fn;){let t=fn;for(fn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function Ui(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function zi(e){let t,n=e.depsTail,o=n;for(;o;){const r=o.prevDep;o.version===-1?(o===n&&(n=r),sr(o),vl(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=r}e.deps=t,e.depsTail=n}function Mo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Wi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Wi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===vn)||(e.globalVersion=vn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Mo(e))))return;e.flags|=2;const t=e.dep,n=ne,o=Ke;ne=e,Ke=!0;try{Ui(e);const r=e.fn(e._value);(t.version===0||Tt(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ne=n,Ke=o,zi(e),e.flags&=-3}}function sr(e,t=!1){const{dep:n,prevSub:o,nextSub:r}=e;if(o&&(o.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=o,e.nextSub=void 0),n.subs===e&&(n.subs=o,!o&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)sr(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function vl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ke=!0;const Ki=[];function gt(){Ki.push(Ke),Ke=!1}function bt(){const e=Ki.pop();Ke=e===void 0?!0:e}function Tr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ne;ne=void 0;try{t()}finally{ne=n}}}let vn=0;class yl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!Ke||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new yl(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,Gi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=o)}return n}trigger(t){this.version++,vn++,this.notify(t)}notify(t){rr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ir()}}}function Gi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Gi(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Do=new WeakMap,Lt=Symbol(""),Ro=Symbol(""),yn=Symbol("");function be(e,t,n){if(Ke&&ne){let o=Do.get(e);o||Do.set(e,o=new Map);let r=o.get(n);r||(o.set(n,r=new lr),r.map=o,r.key=n),r.track()}}function ft(e,t,n,o,r,i){const s=Do.get(e);if(!s){vn++;return}const a=l=>{l&&l.trigger()};if(rr(),t==="clear")s.forEach(a);else{const l=R(e),c=l&&tr(n);if(l&&n==="length"){const u=Number(o);s.forEach((d,h)=>{(h==="length"||h===yn||!Ge(h)&&h>=u)&&a(d)})}else switch((n!==void 0||s.has(void 0))&&a(s.get(n)),c&&a(s.get(yn)),t){case"add":l?c&&a(s.get("length")):(a(s.get(Lt)),Jt(e)&&a(s.get(Ro)));break;case"delete":l||(a(s.get(Lt)),Jt(e)&&a(s.get(Ro)));break;case"set":Jt(e)&&a(s.get(Lt));break}}ir()}function zt(e){const t=G(e);return t===e?t:(be(t,"iterate",yn),Be(e)?t:t.map(qe))}function go(e){return be(e=G(e),"iterate",yn),e}function wt(e,t){return vt(e)?tn(Nt(e)?qe(t):t):qe(t)}const _l={__proto__:null,[Symbol.iterator](){return Oo(this,Symbol.iterator,e=>wt(this,e))},concat(...e){return zt(this).concat(...e.map(t=>R(t)?zt(t):t))},entries(){return Oo(this,"entries",e=>(e[1]=wt(this,e[1]),e))},every(e,t){return at(this,"every",e,t,void 0,arguments)},filter(e,t){return at(this,"filter",e,t,n=>n.map(o=>wt(this,o)),arguments)},find(e,t){return at(this,"find",e,t,n=>wt(this,n),arguments)},findIndex(e,t){return at(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return at(this,"findLast",e,t,n=>wt(this,n),arguments)},findLastIndex(e,t){return at(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return at(this,"forEach",e,t,void 0,arguments)},includes(...e){return To(this,"includes",e)},indexOf(...e){return To(this,"indexOf",e)},join(e){return zt(this).join(e)},lastIndexOf(...e){return To(this,"lastIndexOf",e)},map(e,t){return at(this,"map",e,t,void 0,arguments)},pop(){return sn(this,"pop")},push(...e){return sn(this,"push",e)},reduce(e,...t){return Cr(this,"reduce",e,t)},reduceRight(e,...t){return Cr(this,"reduceRight",e,t)},shift(){return sn(this,"shift")},some(e,t){return at(this,"some",e,t,void 0,arguments)},splice(...e){return sn(this,"splice",e)},toReversed(){return zt(this).toReversed()},toSorted(e){return zt(this).toSorted(e)},toSpliced(...e){return zt(this).toSpliced(...e)},unshift(...e){return sn(this,"unshift",e)},values(){return Oo(this,"values",e=>wt(this,e))}};function Oo(e,t,n){const o=go(e),r=o[t]();return o!==e&&!Be(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Sl=Array.prototype;function at(e,t,n,o,r,i){const s=go(e),a=s!==e&&!Be(e),l=s[t];if(l!==Sl[t]){const d=l.apply(e,i);return a?qe(d):d}let c=n;s!==e&&(a?c=function(d,h){return n.call(this,wt(e,d),h,e)}:n.length>2&&(c=function(d,h){return n.call(this,d,h,e)}));const u=l.call(s,c,o);return a&&r?r(u):u}function Cr(e,t,n,o){const r=go(e);let i=n;return r!==e&&(Be(e)?n.length>3&&(i=function(s,a,l){return n.call(this,s,a,l,e)}):i=function(s,a,l){return n.call(this,s,wt(e,a),l,e)}),r[t](i,...o)}function To(e,t,n){const o=G(e);be(o,"iterate",yn);const r=o[t](...n);return(r===-1||r===!1)&&cr(n[0])?(n[0]=G(n[0]),o[t](...n)):r}function sn(e,t,n=[]){gt(),rr();const o=G(e)[t].apply(e,n);return ir(),bt(),o}const $l=Zo("__proto__,__v_isRef,__isVue"),qi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ge));function wl(e){Ge(e)||(e=String(e));const t=G(this);return be(t,"has",e),t.hasOwnProperty(e)}class Ji{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return o===(r?i?Il:Xi:i?Zi:Qi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const s=R(t);if(!r){let l;if(s&&(l=_l[n]))return l;if(n==="hasOwnProperty")return wl}const a=Reflect.get(t,n,_e(t)?t:o);if((Ge(n)?qi.has(n):$l(n))||(r||be(t,"get",n),i))return a;if(_e(a)){const l=s&&tr(n)?a:a.value;return r&&Q(l)?to(l):l}return Q(a)?r?to(a):bo(a):a}}class Yi extends Ji{constructor(t=!1){super(!1,t)}set(t,n,o,r){let i=t[n];const s=R(t)&&tr(n);if(!this._isShallow){const c=vt(i);if(!Be(o)&&!vt(o)&&(i=G(i),o=G(o)),!s&&_e(i)&&!_e(o))return c||(i.value=o),!0}const a=s?Number(n)<t.length:q(t,n),l=Reflect.set(t,n,o,_e(t)?t:r);return t===G(r)&&(a?Tt(o,i)&&ft(t,"set",n,o):ft(t,"add",n,o)),l}deleteProperty(t,n){const o=q(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&o&&ft(t,"delete",n,void 0),r}has(t,n){const o=Reflect.has(t,n);return(!Ge(n)||!qi.has(n))&&be(t,"has",n),o}ownKeys(t){return be(t,"iterate",R(t)?"length":Lt),Reflect.ownKeys(t)}}class xl extends Ji{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const kl=new Yi,Pl=new xl,Ol=new Yi(!0);const Vo=e=>e,Hn=e=>Reflect.getPrototypeOf(e);function Tl(e,t,n){return function(...o){const r=this.__v_raw,i=G(r),s=Jt(i),a=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=r[e](...o),u=n?Vo:t?tn:qe;return!t&&be(i,"iterate",l?Ro:Lt),Se(Object.create(c),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}}})}}function Un(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Cl(e,t){const n={get(r){const i=this.__v_raw,s=G(i),a=G(r);e||(Tt(r,a)&&be(s,"get",r),be(s,"get",a));const{has:l}=Hn(s),c=t?Vo:e?tn:qe;if(l.call(s,r))return c(i.get(r));if(l.call(s,a))return c(i.get(a));i!==s&&i.get(r)},get size(){const r=this.__v_raw;return!e&&be(G(r),"iterate",Lt),r.size},has(r){const i=this.__v_raw,s=G(i),a=G(r);return e||(Tt(r,a)&&be(s,"has",r),be(s,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const s=this,a=s.__v_raw,l=G(a),c=t?Vo:e?tn:qe;return!e&&be(l,"iterate",Lt),a.forEach((u,d)=>r.call(i,c(u),c(d),s))}};return Se(n,e?{add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear")}:{add(r){!t&&!Be(r)&&!vt(r)&&(r=G(r));const i=G(this);return Hn(i).has.call(i,r)||(i.add(r),ft(i,"add",r,r)),this},set(r,i){!t&&!Be(i)&&!vt(i)&&(i=G(i));const s=G(this),{has:a,get:l}=Hn(s);let c=a.call(s,r);c||(r=G(r),c=a.call(s,r));const u=l.call(s,r);return s.set(r,i),c?Tt(i,u)&&ft(s,"set",r,i):ft(s,"add",r,i),this},delete(r){const i=G(this),{has:s,get:a}=Hn(i);let l=s.call(i,r);l||(r=G(r),l=s.call(i,r)),a&&a.call(i,r);const c=i.delete(r);return l&&ft(i,"delete",r,void 0),c},clear(){const r=G(this),i=r.size!==0,s=r.clear();return i&&ft(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Tl(r,e,t)}),n}function ar(e,t){const n=Cl(e,t);return(o,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(q(n,r)&&r in o?n:o,r,i)}const Al={get:ar(!1,!1)},jl={get:ar(!1,!0)},El={get:ar(!0,!1)};const Qi=new WeakMap,Zi=new WeakMap,Xi=new WeakMap,Il=new WeakMap;function Ll(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nl(e){return e.__v_skip||!Object.isExtensible(e)?0:Ll(il(e))}function bo(e){return vt(e)?e:ur(e,!1,kl,Al,Qi)}function Ml(e){return ur(e,!1,Ol,jl,Zi)}function to(e){return ur(e,!0,Pl,El,Xi)}function ur(e,t,n,o,r){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Nl(e);if(i===0)return e;const s=r.get(e);if(s)return s;const a=new Proxy(e,i===2?o:n);return r.set(e,a),a}function Nt(e){return vt(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function vt(e){return!!(e&&e.__v_isReadonly)}function Be(e){return!!(e&&e.__v_isShallow)}function cr(e){return e?!!e.__v_raw:!1}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Dl(e){return!q(e,"__v_skip")&&Object.isExtensible(e)&&Mi(e,"__v_skip",!0),e}const qe=e=>Q(e)?bo(e):e,tn=e=>Q(e)?to(e):e;function _e(e){return e?e.__v_isRef===!0:!1}function Jn(e){return Rl(e,!1)}function Rl(e,t){return _e(e)?e:new Vl(e,t)}class Vl{constructor(t,n){this.dep=new lr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:G(t),this._value=n?t:qe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||Be(t)||vt(t);t=o?t:G(t),Tt(t,n)&&(this._rawValue=t,this._value=o?t:qe(t),this.dep.trigger())}}function ht(e){return _e(e)?e.value:e}const Fl={get:(e,t,n)=>t==="__v_raw"?e:ht(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return _e(r)&&!_e(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function es(e){return Nt(e)?e:new Proxy(e,Fl)}class Bl{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new lr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return Hi(this,!0),!0}get value(){const t=this.dep.track();return Wi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Hl(e,t,n=!1){let o,r;return V(e)?o=e:(o=e.get,r=e.set),new Bl(o,r,n)}const zn={},no=new WeakMap;let It;function Ul(e,t=!1,n=It){if(n){let o=no.get(n);o||no.set(n,o=[]),o.push(e)}}function zl(e,t,n=Z){const{immediate:o,deep:r,once:i,scheduler:s,augmentJob:a,call:l}=n,c=b=>r?b:Be(b)||r===!1||r===0?pt(b,1):pt(b);let u,d,h,m,$=!1,w=!1;if(_e(e)?(d=()=>e.value,$=Be(e)):Nt(e)?(d=()=>c(e),$=!0):R(e)?(w=!0,$=e.some(b=>Nt(b)||Be(b)),d=()=>e.map(b=>{if(_e(b))return b.value;if(Nt(b))return c(b);if(V(b))return l?l(b,2):b()})):V(e)?t?d=l?()=>l(e,2):e:d=()=>{if(h){gt();try{h()}finally{bt()}}const b=It;It=u;try{return l?l(e,3,[m]):e(m)}finally{It=b}}:d=it,t&&r){const b=d,E=r===!0?1/0:r;d=()=>pt(b(),E)}const O=bl(),C=()=>{u.stop(),O&&O.active&&er(O.effects,u)};if(i&&t){const b=t;t=(...E)=>{b(...E),C()}}let A=w?new Array(e.length).fill(zn):zn;const L=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(t){const E=u.run();if(r||$||(w?E.some((ee,ie)=>Tt(ee,A[ie])):Tt(E,A))){h&&h();const ee=It;It=u;try{const ie=[E,A===zn?void 0:w&&A[0]===zn?[]:A,m];A=E,l?l(t,3,ie):t(...ie)}finally{It=ee}}}else u.run()};return a&&a(L),u=new Fi(d),u.scheduler=s?()=>s(L,!1):L,m=b=>Ul(b,!1,u),h=u.onStop=()=>{const b=no.get(u);if(b){if(l)l(b,4);else for(const E of b)E();no.delete(u)}},t?o?L(!0):A=u.run():s?s(L.bind(null,!0),!0):u.run(),C.pause=u.pause.bind(u),C.resume=u.resume.bind(u),C.stop=C,C}function pt(e,t=1/0,n){if(t<=0||!Q(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,_e(e))pt(e.value,t,n);else if(R(e))for(let o=0;o<e.length;o++)pt(e[o],t,n);else if(Ei(e)||Jt(e))e.forEach(o=>{pt(o,t,n)});else if(Ni(e)){for(const o in e)pt(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&pt(e[o],t,n)}return e}function Mn(e,t,n,o){try{return o?e(...o):e()}catch(r){vo(r,t,n)}}function lt(e,t,n,o){if(V(e)){const r=Mn(e,t,n,o);return r&&Ii(r)&&r.catch(i=>{vo(i,t,n)}),r}if(R(e)){const r=[];for(let i=0;i<e.length;i++)r.push(lt(e[i],t,n,o));return r}}function vo(e,t,n,o=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||Z;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,c)===!1)return}a=a.parent}if(i){gt(),Mn(i,null,10,[e,l,c]),bt();return}}Wl(e,n,r,o,s)}function Wl(e,t,n,o=!0,r=!1){if(r)throw e;console.error(e)}const xe=[];let tt=-1;const Yt=[];let xt=null,Wt=0;const ts=Promise.resolve();let oo=null;function ns(e){const t=oo||ts;return e?t.then(this?e.bind(this):e):t}function Kl(e){let t=tt+1,n=xe.length;for(;t<n;){const o=t+n>>>1,r=xe[o],i=_n(r);i<e||i===e&&r.flags&2?t=o+1:n=o}return t}function dr(e){if(!(e.flags&1)){const t=_n(e),n=xe[xe.length-1];!n||!(e.flags&2)&&t>=_n(n)?xe.push(e):xe.splice(Kl(t),0,e),e.flags|=1,os()}}function os(){oo||(oo=ts.then(is))}function Gl(e){R(e)?Yt.push(...e):xt&&e.id===-1?xt.splice(Wt+1,0,e):e.flags&1||(Yt.push(e),e.flags|=1),os()}function Ar(e,t,n=tt+1){for(;n<xe.length;n++){const o=xe[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;xe.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function rs(e){if(Yt.length){const t=[...new Set(Yt)].sort((n,o)=>_n(n)-_n(o));if(Yt.length=0,xt){xt.push(...t);return}for(xt=t,Wt=0;Wt<xt.length;Wt++){const n=xt[Wt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xt=null,Wt=0}}const _n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function is(e){try{for(tt=0;tt<xe.length;tt++){const t=xe[tt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tt<xe.length;tt++){const t=xe[tt];t&&(t.flags&=-2)}tt=-1,xe.length=0,rs(),oo=null,(xe.length||Yt.length)&&is()}}let me=null,ss=null;function ro(e){const t=me;return me=e,ss=e&&e.type.__scopeId||null,t}function Mt(e,t=me,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&Ur(-1);const i=ro(t);let s;try{s=e(...r)}finally{ro(i),o._d&&Ur(1)}return s};return o._n=!0,o._c=!0,o._d=!0,o}function ql(e,t){if(me===null)return e;const n=$o(me),o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,s,a,l=Z]=t[r];i&&(V(i)&&(i={mounted:i,updated:i}),i.deep&&pt(s),o.push({dir:i,instance:n,value:s,oldValue:void 0,arg:a,modifiers:l}))}return e}function jt(e,t,n,o){const r=e.dirs,i=t&&t.dirs;for(let s=0;s<r.length;s++){const a=r[s];i&&(a.oldValue=i[s].value);let l=a.dir[o];l&&(gt(),lt(l,n,8,[e.el,a,e,t]),bt())}}function Jl(e,t){if(ye){let n=ye.provides;const o=ye.parent&&ye.parent.provides;o===n&&(n=ye.provides=Object.create(o)),n[e]=t}}function Yn(e,t,n=!1){const o=lo();if(o||Xt){let r=Xt?Xt._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&V(t)?t.call(o&&o.proxy):t}}const Yl=Symbol.for("v-scx"),Ql=()=>Yn(Yl);function Pt(e,t,n){return ls(e,t,n)}function ls(e,t,n=Z){const{immediate:o,deep:r,flush:i,once:s}=n,a=Se({},n),l=t&&o||!t&&i!=="post";let c;if($n){if(i==="sync"){const m=Ql();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=it,m.resume=it,m.pause=it,m}}const u=ye;a.call=(m,$,w)=>lt(m,u,$,w);let d=!1;i==="post"?a.scheduler=m=>{je(m,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,$)=>{$?m():dr(m)}),a.augmentJob=m=>{t&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=zl(e,t,a);return $n&&(c?c.push(h):l&&h()),h}function Zl(e,t,n){const o=this.proxy,r=ae(e)?e.includes(".")?as(o,e):()=>o[e]:e.bind(o,o);let i;V(t)?i=t:(i=t.handler,n=t);const s=Dn(this),a=ls(r,i.bind(o),n);return s(),a}function as(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}const Xl=Symbol("_vte"),ea=e=>e.__isTeleport,ta=Symbol("_leaveCb");function fr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,fr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function na(){const e=lo();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function us(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function jr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const io=new WeakMap;function hn(e,t,n,o,r=!1){if(R(e)){e.forEach((w,O)=>hn(w,t&&(R(t)?t[O]:t),n,o,r));return}if(Qt(o)&&!r){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&hn(e,t,n,o.component.subTree);return}const i=o.shapeFlag&4?$o(o.component):o.el,s=r?null:i,{i:a,r:l}=e,c=t&&t.r,u=a.refs===Z?a.refs={}:a.refs,d=a.setupState,h=G(d),m=d===Z?ji:w=>jr(u,w)?!1:q(h,w),$=(w,O)=>!(O&&jr(u,O));if(c!=null&&c!==l){if(Er(t),ae(c))u[c]=null,m(c)&&(d[c]=null);else if(_e(c)){const w=t;$(c,w.k)&&(c.value=null),w.k&&(u[w.k]=null)}}if(V(l))Mn(l,a,12,[s,u]);else{const w=ae(l),O=_e(l);if(w||O){const C=()=>{if(e.f){const A=w?m(l)?d[l]:u[l]:$()||!e.k?l.value:u[e.k];if(r)R(A)&&er(A,i);else if(R(A))A.includes(i)||A.push(i);else if(w)u[l]=[i],m(l)&&(d[l]=u[l]);else{const L=[i];$(l,e.k)&&(l.value=L),e.k&&(u[e.k]=L)}}else w?(u[l]=s,m(l)&&(d[l]=s)):O&&($(l,e.k)&&(l.value=s),e.k&&(u[e.k]=s))};if(s){const A=()=>{C(),io.delete(e)};A.id=-1,io.set(e,A),je(A,n)}else Er(e),C()}}}function Er(e){const t=io.get(e);t&&(t.flags|=8,io.delete(e))}mo().requestIdleCallback;mo().cancelIdleCallback;const Qt=e=>!!e.type.__asyncLoader,cs=e=>e.type.__isKeepAlive;function oa(e,t){ds(e,"a",t)}function ra(e,t){ds(e,"da",t)}function ds(e,t,n=ye){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(yo(t,o,n),n){let r=n.parent;for(;r&&r.parent;)cs(r.parent.vnode)&&ia(o,t,n,r),r=r.parent}}function ia(e,t,n,o){const r=yo(t,e,o,!0);ps(()=>{er(o[t],r)},n)}function yo(e,t,n=ye,o=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{gt();const a=Dn(n),l=lt(t,n,e,s);return a(),bt(),l});return o?r.unshift(i):r.push(i),i}}const _t=e=>(t,n=ye)=>{(!$n||e==="sp")&&yo(e,(...o)=>t(...o),n)},sa=_t("bm"),fs=_t("m"),la=_t("bu"),aa=_t("u"),ua=_t("bum"),ps=_t("um"),ca=_t("sp"),da=_t("rtg"),fa=_t("rtc");function pa(e,t=ye){yo("ec",e,t)}const pr="components",ha="directives";function Ir(e,t){return hr(pr,e,!0,t)||e}const hs=Symbol.for("v-ndc");function ms(e){return ae(e)?hr(pr,e,!1)||e:e||hs}function ma(e){return hr(ha,e)}function hr(e,t,n=!0,o=!1){const r=me||ye;if(r){const i=r.type;if(e===pr){const a=Za(i,!1);if(a&&(a===t||a===He(t)||a===ho(He(t))))return i}const s=Lr(r[e]||i[e],t)||Lr(r.appContext[e],t);return!s&&o?i:s}}function Lr(e,t){return e&&(e[t]||e[He(t)]||e[ho(He(t))])}function Zt(e,t,n,o){let r;const i=n,s=R(e);if(s||ae(e)){const a=s&&Nt(e);let l=!1,c=!1;a&&(l=!Be(e),c=vt(e),e=go(e)),r=new Array(e.length);for(let u=0,d=e.length;u<d;u++)r[u]=t(l?c?tn(qe(e[u])):qe(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,i)}else if(Q(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,i));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=t(e[u],u,l,i)}}else r=[];return r}function We(e,t,n={},o,r){if(me.ce||me.parent&&Qt(me.parent)&&me.parent.ce){const c=Object.keys(n).length>0;return t!=="default"&&(n.name=t),D(),mt(ce,null,[ue("slot",n,o&&o())],c?-2:64)}let i=e[t];i&&i._c&&(i._d=!1),D();const s=i&&gs(i(n)),a=n.key||s&&s.key,l=mt(ce,{key:(a&&!Ge(a)?a:`_${t}`)+(!s&&o?"_fb":"")},s||(o?o():[]),s&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function gs(e){return e.some(t=>br(t)?!(t.type===yt||t.type===ce&&!gs(t.children)):!0)?e:null}const Fo=e=>e?Ms(e)?$o(e):Fo(e.parent):null,mn=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fo(e.parent),$root:e=>Fo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>vs(e),$forceUpdate:e=>e.f||(e.f=()=>{dr(e.update)}),$nextTick:e=>e.n||(e.n=ns.bind(e.proxy)),$watch:e=>Zl.bind(e)}),Co=(e,t)=>e!==Z&&!e.__isScriptSetup&&q(e,t),ga={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:r,props:i,accessCache:s,type:a,appContext:l}=e;if(t[0]!=="$"){const h=s[t];if(h!==void 0)switch(h){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Co(o,t))return s[t]=1,o[t];if(r!==Z&&q(r,t))return s[t]=2,r[t];if(q(i,t))return s[t]=3,i[t];if(n!==Z&&q(n,t))return s[t]=4,n[t];Bo&&(s[t]=0)}}const c=mn[t];let u,d;if(c)return t==="$attrs"&&be(e.attrs,"get",""),c(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==Z&&q(n,t))return s[t]=4,n[t];if(d=l.config.globalProperties,q(d,t))return d[t]},set({_:e},t,n){const{data:o,setupState:r,ctx:i}=e;return Co(r,t)?(r[t]=n,!0):o!==Z&&q(o,t)?(o[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,props:i,type:s}},a){let l;return!!(n[a]||e!==Z&&a[0]!=="$"&&q(e,a)||Co(t,a)||q(i,a)||q(o,a)||q(mn,a)||q(r.config.globalProperties,a)||(l=s.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Nr(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Bo=!0;function ba(e){const t=vs(e),n=e.proxy,o=e.ctx;Bo=!1,t.beforeCreate&&Mr(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:$,activated:w,deactivated:O,beforeDestroy:C,beforeUnmount:A,destroyed:L,unmounted:b,render:E,renderTracked:ee,renderTriggered:ie,errorCaptured:pe,serverPrefetch:Le,expose:$e,inheritAttrs:ke,components:Re,directives:Ve,filters:Fe}=t;if(c&&va(c,o,null),s)for(const K in s){const z=s[K];V(z)&&(o[K]=z.bind(n))}if(r){const K=r.call(n,n);Q(K)&&(e.data=bo(K))}if(Bo=!0,i)for(const K in i){const z=i[K],Pe=V(z)?z.bind(n,n):V(z.get)?z.get.bind(n,n):it,Oe=!V(z)&&V(z.set)?z.set.bind(n):it,de=Wo({get:Pe,set:Oe});Object.defineProperty(o,K,{enumerable:!0,configurable:!0,get:()=>de.value,set:fe=>de.value=fe})}if(a)for(const K in a)bs(a[K],o,n,K);if(l){const K=V(l)?l.call(n):l;Reflect.ownKeys(K).forEach(z=>{Jl(z,K[z])})}u&&Mr(u,e,"c");function se(K,z){R(z)?z.forEach(Pe=>K(Pe.bind(n))):z&&K(z.bind(n))}if(se(sa,d),se(fs,h),se(la,m),se(aa,$),se(oa,w),se(ra,O),se(pa,pe),se(fa,ee),se(da,ie),se(ua,A),se(ps,b),se(ca,Le),R($e))if($e.length){const K=e.exposed||(e.exposed={});$e.forEach(z=>{Object.defineProperty(K,z,{get:()=>n[z],set:Pe=>n[z]=Pe,enumerable:!0})})}else e.exposed||(e.exposed={});E&&e.render===it&&(e.render=E),ke!=null&&(e.inheritAttrs=ke),Re&&(e.components=Re),Ve&&(e.directives=Ve),Le&&us(e)}function va(e,t,n=it){R(e)&&(e=Ho(e));for(const o in e){const r=e[o];let i;Q(r)?"default"in r?i=Yn(r.from||o,r.default,!0):i=Yn(r.from||o):i=Yn(r),_e(i)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[o]=i}}function Mr(e,t,n){lt(R(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function bs(e,t,n,o){let r=o.includes(".")?as(n,o):()=>n[o];if(ae(e)){const i=t[e];V(i)&&Pt(r,i)}else if(V(e))Pt(r,e.bind(n));else if(Q(e))if(R(e))e.forEach(i=>bs(i,t,n,o));else{const i=V(e.handler)?e.handler.bind(n):t[e.handler];V(i)&&Pt(r,i,e)}}function vs(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,a=i.get(t);let l;return a?l=a:!r.length&&!n&&!o?l=t:(l={},r.length&&r.forEach(c=>so(l,c,s,!0)),so(l,t,s)),Q(t)&&i.set(t,l),l}function so(e,t,n,o=!1){const{mixins:r,extends:i}=t;i&&so(e,i,n,!0),r&&r.forEach(s=>so(e,s,n,!0));for(const s in t)if(!(o&&s==="expose")){const a=ya[s]||n&&n[s];e[s]=a?a(e[s],t[s]):t[s]}return e}const ya={data:Dr,props:Rr,emits:Rr,methods:un,computed:un,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:un,directives:un,watch:Sa,provide:Dr,inject:_a};function Dr(e,t){return t?e?function(){return Se(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function _a(e,t){return un(Ho(e),Ho(t))}function Ho(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?Se(Object.create(null),e,t):t}function Rr(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:Se(Object.create(null),Nr(e),Nr(t??{})):t}function Sa(e,t){if(!e)return t;if(!t)return e;const n=Se(Object.create(null),e);for(const o in t)n[o]=we(e[o],t[o]);return n}function ys(){return{app:null,config:{isNativeTag:ji,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $a=0;function wa(e,t){return function(o,r=null){V(o)||(o=Se({},o)),r!=null&&!Q(r)&&(r=null);const i=ys(),s=new WeakSet,a=[];let l=!1;const c=i.app={_uid:$a++,_component:o,_props:r,_container:null,_context:i,_instance:null,version:eu,get config(){return i.config},set config(u){},use(u,...d){return s.has(u)||(u&&V(u.install)?(s.add(u),u.install(c,...d)):V(u)&&(s.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,h){if(!l){const m=c._ceVNode||ue(o,r);return m.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),e(m,u,h),l=!0,c._container=u,u.__vue_app__=c,$o(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(lt(a,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=Xt;Xt=c;try{return u()}finally{Xt=d}}};return c}}let Xt=null;const xa=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${He(t)}Modifiers`]||e[`${Ft(t)}Modifiers`];function ka(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Z;let r=n;const i=t.startsWith("update:"),s=i&&xa(o,t.slice(7));s&&(s.trim&&(r=n.map(u=>ae(u)?u.trim():u)),s.number&&(r=n.map(al)));let a,l=o[a=wo(t)]||o[a=wo(He(t))];!l&&i&&(l=o[a=wo(Ft(t))]),l&&lt(l,e,6,r);const c=o[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,lt(c,e,6,r)}}const Pa=new WeakMap;function _s(e,t,n=!1){const o=n?Pa:t.emitsCache,r=o.get(e);if(r!==void 0)return r;const i=e.emits;let s={},a=!1;if(!V(e)){const l=c=>{const u=_s(c,t,!0);u&&(a=!0,Se(s,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(Q(e)&&o.set(e,null),null):(R(i)?i.forEach(l=>s[l]=null):Se(s,i),Q(e)&&o.set(e,s),s)}function _o(e,t){return!e||!fo(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Ft(t))||q(e,t))}function Vr(e){const{type:t,vnode:n,proxy:o,withProxy:r,propsOptions:[i],slots:s,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:m,ctx:$,inheritAttrs:w}=e,O=ro(e);let C,A;try{if(n.shapeFlag&4){const b=r||o,E=b;C=ot(c.call(E,b,u,d,m,h,$)),A=a}else{const b=t;C=ot(b.length>1?b(d,{attrs:a,slots:s,emit:l}):b(d,null)),A=t.props?a:Oa(a)}}catch(b){gn.length=0,vo(b,e,1),C=ue(yt)}let L=C;if(A&&w!==!1){const b=Object.keys(A),{shapeFlag:E}=L;b.length&&E&7&&(i&&b.some(Xo)&&(A=Ta(A,i)),L=nn(L,A,!1,!0))}return n.dirs&&(L=nn(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&fr(L,n.transition),C=L,ro(O),C}const Oa=e=>{let t;for(const n in e)(n==="class"||n==="style"||fo(n))&&((t||(t={}))[n]=e[n]);return t},Ta=(e,t)=>{const n={};for(const o in e)(!Xo(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Ca(e,t,n){const{props:o,children:r,component:i}=e,{props:s,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return o?Fr(o,s,c):!!s;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(Ss(s,o,h)&&!_o(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:o===s?!1:o?s?Fr(o,s,c):!0:!!s;return!1}function Fr(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(Ss(t,e,i)&&!_o(n,i))return!0}return!1}function Ss(e,t,n){const o=e[n],r=t[n];return n==="style"&&Q(o)&&Q(r)?!or(o,r):o!==r}function Aa({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const $s={},ws=()=>Object.create($s),xs=e=>Object.getPrototypeOf(e)===$s;function ja(e,t,n,o=!1){const r={},i=ws();e.propsDefaults=Object.create(null),ks(e,t,r,i);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);n?e.props=o?r:Ml(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Ea(e,t,n,o){const{props:r,attrs:i,vnode:{patchFlag:s}}=e,a=G(r),[l]=e.propsOptions;let c=!1;if((o||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(_o(e.emitsOptions,h))continue;const m=t[h];if(l)if(q(i,h))m!==i[h]&&(i[h]=m,c=!0);else{const $=He(h);r[$]=Uo(l,a,$,m,e,!1)}else m!==i[h]&&(i[h]=m,c=!0)}}}else{ks(e,t,r,i)&&(c=!0);let u;for(const d in a)(!t||!q(t,d)&&((u=Ft(d))===d||!q(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Uo(l,a,d,void 0,e,!0)):delete r[d]);if(i!==a)for(const d in i)(!t||!q(t,d))&&(delete i[d],c=!0)}c&&ft(e.attrs,"set","")}function ks(e,t,n,o){const[r,i]=e.propsOptions;let s=!1,a;if(t)for(let l in t){if(dn(l))continue;const c=t[l];let u;r&&q(r,u=He(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:_o(e.emitsOptions,l)||(!(l in o)||c!==o[l])&&(o[l]=c,s=!0)}if(i){const l=G(n),c=a||Z;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Uo(r,l,d,c[d],e,!q(c,d))}}return s}function Uo(e,t,n,o,r,i){const s=e[n];if(s!=null){const a=q(s,"default");if(a&&o===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&V(l)){const{propsDefaults:c}=r;if(n in c)o=c[n];else{const u=Dn(r);o=c[n]=l.call(null,t),u()}}else o=l;r.ce&&r.ce._setProp(n,o)}s[0]&&(i&&!a?o=!1:s[1]&&(o===""||o===Ft(n))&&(o=!0))}return o}const Ia=new WeakMap;function Ps(e,t,n=!1){const o=n?Ia:t.propsCache,r=o.get(e);if(r)return r;const i=e.props,s={},a=[];let l=!1;if(!V(e)){const u=d=>{l=!0;const[h,m]=Ps(d,t,!0);Se(s,h),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return Q(e)&&o.set(e,qt),qt;if(R(i))for(let u=0;u<i.length;u++){const d=He(i[u]);Br(d)&&(s[d]=Z)}else if(i)for(const u in i){const d=He(u);if(Br(d)){const h=i[u],m=s[d]=R(h)||V(h)?{type:h}:Se({},h),$=m.type;let w=!1,O=!0;if(R($))for(let C=0;C<$.length;++C){const A=$[C],L=V(A)&&A.name;if(L==="Boolean"){w=!0;break}else L==="String"&&(O=!1)}else w=V($)&&$.name==="Boolean";m[0]=w,m[1]=O,(w||q(m,"default"))&&a.push(d)}}const c=[s,a];return Q(e)&&o.set(e,c),c}function Br(e){return e[0]!=="$"&&!dn(e)}const mr=e=>e==="_"||e==="_ctx"||e==="$stable",gr=e=>R(e)?e.map(ot):[ot(e)],La=(e,t,n)=>{if(t._n)return t;const o=Mt((...r)=>gr(t(...r)),n);return o._c=!1,o},Os=(e,t,n)=>{const o=e._ctx;for(const r in e){if(mr(r))continue;const i=e[r];if(V(i))t[r]=La(r,i,o);else if(i!=null){const s=gr(i);t[r]=()=>s}}},Ts=(e,t)=>{const n=gr(t);e.slots.default=()=>n},Cs=(e,t,n)=>{for(const o in t)(n||!mr(o))&&(e[o]=t[o])},Na=(e,t,n)=>{const o=e.slots=ws();if(e.vnode.shapeFlag&32){const r=t._;r?(Cs(o,t,n),n&&Mi(o,"_",r,!0)):Os(t,o)}else t&&Ts(e,t)},Ma=(e,t,n)=>{const{vnode:o,slots:r}=e;let i=!0,s=Z;if(o.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Cs(r,t,n):(i=!t.$stable,Os(t,r)),s=t}else t&&(Ts(e,t),s={default:1});if(i)for(const a in r)!mr(a)&&s[a]==null&&delete r[a]},je=Ba;function Da(e){return Ra(e)}function Ra(e,t){const n=mo();n.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=it,insertStaticContent:$}=e,w=(f,p,g,S=null,v=null,y=null,P=void 0,k=null,x=!!p.dynamicChildren)=>{if(f===p)return;f&&!ln(f,p)&&(S=Ut(f),fe(f,v,y,!0),f=null),p.patchFlag===-2&&(x=!1,p.dynamicChildren=null);const{type:_,ref:N,shapeFlag:T}=p;switch(_){case So:O(f,p,g,S);break;case yt:C(f,p,g,S);break;case Qn:f==null&&A(p,g,S,P);break;case ce:Re(f,p,g,S,v,y,P,k,x);break;default:T&1?E(f,p,g,S,v,y,P,k,x):T&6?Ve(f,p,g,S,v,y,P,k,x):(T&64||T&128)&&_.process(f,p,g,S,v,y,P,k,x,At)}N!=null&&v?hn(N,f&&f.ref,y,p||f,!p):N==null&&f&&f.ref!=null&&hn(f.ref,null,y,f,!0)},O=(f,p,g,S)=>{if(f==null)o(p.el=a(p.children),g,S);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},C=(f,p,g,S)=>{f==null?o(p.el=l(p.children||""),g,S):p.el=f.el},A=(f,p,g,S)=>{[f.el,f.anchor]=$(f.children,p,g,S,f.el,f.anchor)},L=({el:f,anchor:p},g,S)=>{let v;for(;f&&f!==p;)v=h(f),o(f,g,S),f=v;o(p,g,S)},b=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),r(f),f=g;r(p)},E=(f,p,g,S,v,y,P,k,x)=>{if(p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),f==null)ee(p,g,S,v,y,P,k,x);else{const _=f.el&&f.el._isVueCE?f.el:null;try{_&&_._beginPatch(),Le(f,p,v,y,P,k,x)}finally{_&&_._endPatch()}}},ee=(f,p,g,S,v,y,P,k)=>{let x,_;const{props:N,shapeFlag:T,transition:I,dirs:M}=f;if(x=f.el=s(f.type,y,N&&N.is,N),T&8?u(x,f.children):T&16&&pe(f.children,x,null,S,v,Ao(f,y),P,k),M&&jt(f,null,S,"created"),ie(x,f,f.scopeId,P,S),N){for(const te in N)te!=="value"&&!dn(te)&&i(x,te,null,N[te],y,S);"value"in N&&i(x,"value",null,N.value,y),(_=N.onVnodeBeforeMount)&&Xe(_,S,f)}M&&jt(f,null,S,"beforeMount");const U=Va(v,I);U&&I.beforeEnter(x),o(x,p,g),((_=N&&N.onVnodeMounted)||U||M)&&je(()=>{_&&Xe(_,S,f),U&&I.enter(x),M&&jt(f,null,S,"mounted")},v)},ie=(f,p,g,S,v)=>{if(g&&m(f,g),S)for(let y=0;y<S.length;y++)m(f,S[y]);if(v){let y=v.subTree;if(p===y||Is(y.type)&&(y.ssContent===p||y.ssFallback===p)){const P=v.vnode;ie(f,P,P.scopeId,P.slotScopeIds,v.parent)}}},pe=(f,p,g,S,v,y,P,k,x=0)=>{for(let _=x;_<f.length;_++){const N=f[_]=k?dt(f[_]):ot(f[_]);w(null,N,p,g,S,v,y,P,k)}},Le=(f,p,g,S,v,y,P)=>{const k=p.el=f.el;let{patchFlag:x,dynamicChildren:_,dirs:N}=p;x|=f.patchFlag&16;const T=f.props||Z,I=p.props||Z;let M;if(g&&Et(g,!1),(M=I.onVnodeBeforeUpdate)&&Xe(M,g,p,f),N&&jt(p,f,g,"beforeUpdate"),g&&Et(g,!0),(T.innerHTML&&I.innerHTML==null||T.textContent&&I.textContent==null)&&u(k,""),_?$e(f.dynamicChildren,_,k,g,S,Ao(p,v),y):P||z(f,p,k,null,g,S,Ao(p,v),y,!1),x>0){if(x&16)ke(k,T,I,g,v);else if(x&2&&T.class!==I.class&&i(k,"class",null,I.class,v),x&4&&i(k,"style",T.style,I.style,v),x&8){const U=p.dynamicProps;for(let te=0;te<U.length;te++){const J=U[te],Te=T[J],Ce=I[J];(Ce!==Te||J==="value")&&i(k,J,Te,Ce,v,g)}}x&1&&f.children!==p.children&&u(k,p.children)}else!P&&_==null&&ke(k,T,I,g,v);((M=I.onVnodeUpdated)||N)&&je(()=>{M&&Xe(M,g,p,f),N&&jt(p,f,g,"updated")},S)},$e=(f,p,g,S,v,y,P)=>{for(let k=0;k<p.length;k++){const x=f[k],_=p[k],N=x.el&&(x.type===ce||!ln(x,_)||x.shapeFlag&198)?d(x.el):g;w(x,_,N,null,S,v,y,P,!0)}},ke=(f,p,g,S,v)=>{if(p!==g){if(p!==Z)for(const y in p)!dn(y)&&!(y in g)&&i(f,y,p[y],null,v,S);for(const y in g){if(dn(y))continue;const P=g[y],k=p[y];P!==k&&y!=="value"&&i(f,y,k,P,v,S)}"value"in g&&i(f,"value",p.value,g.value,v)}},Re=(f,p,g,S,v,y,P,k,x)=>{const _=p.el=f?f.el:a(""),N=p.anchor=f?f.anchor:a("");let{patchFlag:T,dynamicChildren:I,slotScopeIds:M}=p;M&&(k=k?k.concat(M):M),f==null?(o(_,g,S),o(N,g,S),pe(p.children||[],g,N,v,y,P,k,x)):T>0&&T&64&&I&&f.dynamicChildren&&f.dynamicChildren.length===I.length?($e(f.dynamicChildren,I,g,v,y,P,k),(p.key!=null||v&&p===v.subTree)&&As(f,p,!0)):z(f,p,g,N,v,y,P,k,x)},Ve=(f,p,g,S,v,y,P,k,x)=>{p.slotScopeIds=k,f==null?p.shapeFlag&512?v.ctx.activate(p,g,S,P,x):Fe(p,g,S,v,y,P,x):Je(f,p,x)},Fe=(f,p,g,S,v,y,P)=>{const k=f.component=Ga(f,S,v);if(cs(f)&&(k.ctx.renderer=At),qa(k,!1,P),k.asyncDep){if(v&&v.registerDep(k,se,P),!f.el){const x=k.subTree=ue(yt);C(null,x,p,g),f.placeholder=x.el}}else se(k,f,p,g,v,y,P)},Je=(f,p,g)=>{const S=p.component=f.component;if(Ca(f,p,g))if(S.asyncDep&&!S.asyncResolved){K(S,p,g);return}else S.next=p,S.update();else p.el=f.el,S.vnode=p},se=(f,p,g,S,v,y,P)=>{const k=()=>{if(f.isMounted){let{next:T,bu:I,u:M,parent:U,vnode:te}=f;{const Qe=js(f);if(Qe){T&&(T.el=te.el,K(f,T,P)),Qe.asyncDep.then(()=>{je(()=>{f.isUnmounted||_()},v)});return}}let J=T,Te;Et(f,!1),T?(T.el=te.el,K(f,T,P)):T=te,I&&xo(I),(Te=T.props&&T.props.onVnodeBeforeUpdate)&&Xe(Te,U,T,te),Et(f,!0);const Ce=Vr(f),Ye=f.subTree;f.subTree=Ce,w(Ye,Ce,d(Ye.el),Ut(Ye),f,v,y),T.el=Ce.el,J===null&&Aa(f,Ce.el),M&&je(M,v),(Te=T.props&&T.props.onVnodeUpdated)&&je(()=>Xe(Te,U,T,te),v)}else{let T;const{el:I,props:M}=p,{bm:U,m:te,parent:J,root:Te,type:Ce}=f,Ye=Qt(p);Et(f,!1),U&&xo(U),!Ye&&(T=M&&M.onVnodeBeforeMount)&&Xe(T,J,p),Et(f,!0);{Te.ce&&Te.ce._hasShadowRoot()&&Te.ce._injectChildStyle(Ce);const Qe=f.subTree=Vr(f);w(null,Qe,g,S,f,v,y),p.el=Qe.el}if(te&&je(te,v),!Ye&&(T=M&&M.onVnodeMounted)){const Qe=p;je(()=>Xe(T,J,Qe),v)}(p.shapeFlag&256||J&&Qt(J.vnode)&&J.vnode.shapeFlag&256)&&f.a&&je(f.a,v),f.isMounted=!0,p=g=S=null}};f.scope.on();const x=f.effect=new Fi(k);f.scope.off();const _=f.update=x.run.bind(x),N=f.job=x.runIfDirty.bind(x);N.i=f,N.id=f.uid,x.scheduler=()=>dr(N),Et(f,!0),_()},K=(f,p,g)=>{p.component=f;const S=f.vnode.props;f.vnode=p,f.next=null,Ea(f,p.props,S,g),Ma(f,p.children,g),gt(),Ar(f),bt()},z=(f,p,g,S,v,y,P,k,x=!1)=>{const _=f&&f.children,N=f?f.shapeFlag:0,T=p.children,{patchFlag:I,shapeFlag:M}=p;if(I>0){if(I&128){Oe(_,T,g,S,v,y,P,k,x);return}else if(I&256){Pe(_,T,g,S,v,y,P,k,x);return}}M&8?(N&16&&$t(_,v,y),T!==_&&u(g,T)):N&16?M&16?Oe(_,T,g,S,v,y,P,k,x):$t(_,v,y,!0):(N&8&&u(g,""),M&16&&pe(T,g,S,v,y,P,k,x))},Pe=(f,p,g,S,v,y,P,k,x)=>{f=f||qt,p=p||qt;const _=f.length,N=p.length,T=Math.min(_,N);let I;for(I=0;I<T;I++){const M=p[I]=x?dt(p[I]):ot(p[I]);w(f[I],M,g,null,v,y,P,k,x)}_>N?$t(f,v,y,!0,!1,T):pe(p,g,S,v,y,P,k,x,T)},Oe=(f,p,g,S,v,y,P,k,x)=>{let _=0;const N=p.length;let T=f.length-1,I=N-1;for(;_<=T&&_<=I;){const M=f[_],U=p[_]=x?dt(p[_]):ot(p[_]);if(ln(M,U))w(M,U,g,null,v,y,P,k,x);else break;_++}for(;_<=T&&_<=I;){const M=f[T],U=p[I]=x?dt(p[I]):ot(p[I]);if(ln(M,U))w(M,U,g,null,v,y,P,k,x);else break;T--,I--}if(_>T){if(_<=I){const M=I+1,U=M<N?p[M].el:S;for(;_<=I;)w(null,p[_]=x?dt(p[_]):ot(p[_]),g,U,v,y,P,k,x),_++}}else if(_>I)for(;_<=T;)fe(f[_],v,y,!0),_++;else{const M=_,U=_,te=new Map;for(_=U;_<=I;_++){const Ne=p[_]=x?dt(p[_]):ot(p[_]);Ne.key!=null&&te.set(Ne.key,_)}let J,Te=0;const Ce=I-U+1;let Ye=!1,Qe=0;const rn=new Array(Ce);for(_=0;_<Ce;_++)rn[_]=0;for(_=M;_<=T;_++){const Ne=f[_];if(Te>=Ce){fe(Ne,v,y,!0);continue}let Ze;if(Ne.key!=null)Ze=te.get(Ne.key);else for(J=U;J<=I;J++)if(rn[J-U]===0&&ln(Ne,p[J])){Ze=J;break}Ze===void 0?fe(Ne,v,y,!0):(rn[Ze-U]=_+1,Ze>=Qe?Qe=Ze:Ye=!0,w(Ne,p[Ze],g,null,v,y,P,k,x),Te++)}const wr=Ye?Fa(rn):qt;for(J=wr.length-1,_=Ce-1;_>=0;_--){const Ne=U+_,Ze=p[Ne],xr=p[Ne+1],kr=Ne+1<N?xr.el||Es(xr):S;rn[_]===0?w(null,Ze,g,kr,v,y,P,k,x):Ye&&(J<0||_!==wr[J]?de(Ze,g,kr,2):J--)}}},de=(f,p,g,S,v=null)=>{const{el:y,type:P,transition:k,children:x,shapeFlag:_}=f;if(_&6){de(f.component.subTree,p,g,S);return}if(_&128){f.suspense.move(p,g,S);return}if(_&64){P.move(f,p,g,At);return}if(P===ce){o(y,p,g);for(let T=0;T<x.length;T++)de(x[T],p,g,S);o(f.anchor,p,g);return}if(P===Qn){L(f,p,g);return}if(S!==2&&_&1&&k)if(S===0)k.beforeEnter(y),o(y,p,g),je(()=>k.enter(y),v);else{const{leave:T,delayLeave:I,afterLeave:M}=k,U=()=>{f.ctx.isUnmounted?r(y):o(y,p,g)},te=()=>{y._isLeaving&&y[ta](!0),T(y,()=>{U(),M&&M()})};I?I(y,U,te):te()}else o(y,p,g)},fe=(f,p,g,S=!1,v=!1)=>{const{type:y,props:P,ref:k,children:x,dynamicChildren:_,shapeFlag:N,patchFlag:T,dirs:I,cacheIndex:M}=f;if(T===-2&&(v=!1),k!=null&&(gt(),hn(k,null,g,f,!0),bt()),M!=null&&(p.renderCache[M]=void 0),N&256){p.ctx.deactivate(f);return}const U=N&1&&I,te=!Qt(f);let J;if(te&&(J=P&&P.onVnodeBeforeUnmount)&&Xe(J,p,f),N&6)Fn(f.component,g,S);else{if(N&128){f.suspense.unmount(g,S);return}U&&jt(f,null,p,"beforeUnmount"),N&64?f.type.remove(f,p,g,At,S):_&&!_.hasOnce&&(y!==ce||T>0&&T&64)?$t(_,p,g,!1,!0):(y===ce&&T&384||!v&&N&16)&&$t(x,p,g),S&&Ct(f)}(te&&(J=P&&P.onVnodeUnmounted)||U)&&je(()=>{J&&Xe(J,p,f),U&&jt(f,null,p,"unmounted")},g)},Ct=f=>{const{type:p,el:g,anchor:S,transition:v}=f;if(p===ce){St(g,S);return}if(p===Qn){b(f);return}const y=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:k}=v,x=()=>P(g,y);k?k(f.el,y,x):x()}else y()},St=(f,p)=>{let g;for(;f!==p;)g=h(f),r(f),f=g;r(p)},Fn=(f,p,g)=>{const{bum:S,scope:v,job:y,subTree:P,um:k,m:x,a:_}=f;Hr(x),Hr(_),S&&xo(S),v.stop(),y&&(y.flags|=8,fe(P,f,p,g)),k&&je(k,p),je(()=>{f.isUnmounted=!0},p)},$t=(f,p,g,S=!1,v=!1,y=0)=>{for(let P=y;P<f.length;P++)fe(f[P],p,g,S,v)},Ut=f=>{if(f.shapeFlag&6)return Ut(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=h(f.anchor||f.el),g=p&&p[Xl];return g?h(g):p};let on=!1;const Bn=(f,p,g)=>{let S;f==null?p._vnode&&(fe(p._vnode,null,null,!0),S=p._vnode.component):w(p._vnode||null,f,p,null,null,null,g),p._vnode=f,on||(on=!0,Ar(S),rs(),on=!1)},At={p:w,um:fe,m:de,r:Ct,mt:Fe,mc:pe,pc:z,pbc:$e,n:Ut,o:e};return{render:Bn,hydrate:void 0,createApp:wa(Bn)}}function Ao({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Et({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Va(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function As(e,t,n=!1){const o=e.children,r=t.children;if(R(o)&&R(r))for(let i=0;i<o.length;i++){const s=o[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=dt(r[i]),a.el=s.el),!n&&a.patchFlag!==-2&&As(s,a)),a.type===So&&(a.patchFlag===-1&&(a=r[i]=dt(a)),a.el=s.el),a.type===yt&&!a.el&&(a.el=s.el)}}function Fa(e){const t=e.slice(),n=[0];let o,r,i,s,a;const l=e.length;for(o=0;o<l;o++){const c=e[o];if(c!==0){if(r=n[n.length-1],e[r]<c){t[o]=r,n.push(o);continue}for(i=0,s=n.length-1;i<s;)a=i+s>>1,e[n[a]]<c?i=a+1:s=a;c<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}function js(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:js(t)}function Hr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Es(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Es(t.subTree):null}const Is=e=>e.__isSuspense;function Ba(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Gl(e)}const ce=Symbol.for("v-fgt"),So=Symbol.for("v-txt"),yt=Symbol.for("v-cmt"),Qn=Symbol.for("v-stc"),gn=[];let Me=null;function D(e=!1){gn.push(Me=e?null:[])}function Ha(){gn.pop(),Me=gn[gn.length-1]||null}let Sn=1;function Ur(e,t=!1){Sn+=e,e<0&&Me&&t&&(Me.hasOnce=!0)}function Ls(e){return e.dynamicChildren=Sn>0?Me||qt:null,Ha(),Sn>0&&Me&&Me.push(e),e}function H(e,t,n,o,r,i){return Ls(j(e,t,n,o,r,i,!0))}function mt(e,t,n,o,r){return Ls(ue(e,t,n,o,r,!0))}function br(e){return e?e.__v_isVNode===!0:!1}function ln(e,t){return e.type===t.type&&e.key===t.key}const Ns=({key:e})=>e??null,Zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ae(e)||_e(e)||V(e)?{i:me,r:e,k:t,f:!!n}:e:null);function j(e,t=null,n=null,o=0,r=null,i=e===ce?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ns(t),ref:t&&Zn(t),scopeId:ss,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:me};return a?(yr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ae(n)?8:16),Sn>0&&!s&&Me&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Me.push(l),l}const ue=Ua;function Ua(e,t=null,n=null,o=0,r=null,i=!1){if((!e||e===hs)&&(e=yt),br(e)){const a=nn(e,t,!0);return n&&yr(a,n),Sn>0&&!i&&Me&&(a.shapeFlag&6?Me[Me.indexOf(e)]=a:Me.push(a)),a.patchFlag=-2,a}if(Xa(e)&&(e=e.__vccOpts),t){t=za(t);let{class:a,style:l}=t;a&&!ae(a)&&(t.class=Vt(a)),Q(l)&&(cr(l)&&!R(l)&&(l=Se({},l)),t.style=nr(l))}const s=ae(e)?1:Is(e)?128:ea(e)?64:Q(e)?4:V(e)?2:0;return j(e,t,n,o,r,s,i,!0)}function za(e){return e?cr(e)||xs(e)?Se({},e):e:null}function nn(e,t,n=!1,o=!1){const{props:r,ref:i,patchFlag:s,children:a,transition:l}=e,c=t?X(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ns(c),ref:t&&t.ref?n&&i?R(i)?i.concat(Zn(t)):[i,Zn(t)]:Zn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ce?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&nn(e.ssContent),ssFallback:e.ssFallback&&nn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&o&&fr(u,l.clone(u)),u}function nt(e=" ",t=0){return ue(So,null,e,t)}function vr(e,t){const n=ue(Qn,null,e);return n.staticCount=t,n}function ve(e="",t=!1){return t?(D(),mt(yt,null,e)):ue(yt,null,e)}function ot(e){return e==null||typeof e=="boolean"?ue(yt):R(e)?ue(ce,null,e.slice()):br(e)?dt(e):ue(So,null,String(e))}function dt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:nn(e)}function yr(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),yr(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!xs(t)?t._ctx=me:r===3&&me&&(me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:me},n=32):(t=String(t),o&64?(n=16,t=[nt(t)]):n=8);e.children=t,e.shapeFlag|=n}function X(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Vt([t.class,o.class]));else if(r==="style")t.style=nr([t.style,o.style]);else if(fo(r)){const i=t[r],s=o[r];s&&i!==s&&!(R(i)&&i.includes(s))&&(t[r]=i?[].concat(i,s):s)}else r!==""&&(t[r]=o[r])}return t}function Xe(e,t,n,o=null){lt(e,t,7,[n,o])}const Wa=ys();let Ka=0;function Ga(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||Wa,i={uid:Ka++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ps(o,r),emitsOptions:_s(o,r),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:o.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ka.bind(null,i),e.ce&&e.ce(i),i}let ye=null;const lo=()=>ye||me;let ao,zo;{const e=mo(),t=(n,o)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(o),i=>{r.length>1?r.forEach(s=>s(i)):r[0](i)}};ao=t("__VUE_INSTANCE_SETTERS__",n=>ye=n),zo=t("__VUE_SSR_SETTERS__",n=>$n=n)}const Dn=e=>{const t=ye;return ao(e),e.scope.on(),()=>{e.scope.off(),ao(t)}},zr=()=>{ye&&ye.scope.off(),ao(null)};function Ms(e){return e.vnode.shapeFlag&4}let $n=!1;function qa(e,t=!1,n=!1){t&&zo(t);const{props:o,children:r}=e.vnode,i=Ms(e);ja(e,o,i,t),Na(e,r,n||t);const s=i?Ja(e,t):void 0;return t&&zo(!1),s}function Ja(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ga);const{setup:o}=n;if(o){gt();const r=e.setupContext=o.length>1?Qa(e):null,i=Dn(e),s=Mn(o,e,0,[e.props,r]),a=Ii(s);if(bt(),i(),(a||e.sp)&&!Qt(e)&&us(e),a){if(s.then(zr,zr),t)return s.then(l=>{Wr(e,l)}).catch(l=>{vo(l,e,0)});e.asyncDep=s}else Wr(e,s)}else Ds(e)}function Wr(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=es(t)),Ds(e)}function Ds(e,t,n){const o=e.type;e.render||(e.render=o.render||it);{const r=Dn(e);gt();try{ba(e)}finally{bt(),r()}}}const Ya={get(e,t){return be(e,"get",""),e[t]}};function Qa(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ya),slots:e.slots,emit:e.emit,expose:t}}function $o(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(es(Dl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mn)return mn[n](e)},has(t,n){return n in t||n in mn}})):e.proxy}function Za(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function Xa(e){return V(e)&&"__vccOpts"in e}const Wo=(e,t)=>Hl(e,t,$n),eu="3.5.28";let Ko;const Kr=typeof window<"u"&&window.trustedTypes;if(Kr)try{Ko=Kr.createPolicy("vue",{createHTML:e=>e})}catch{}const Rs=Ko?e=>Ko.createHTML(e):e=>e,tu="http://www.w3.org/2000/svg",nu="http://www.w3.org/1998/Math/MathML",ct=typeof document<"u"?document:null,Gr=ct&&ct.createElement("template"),ou={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t==="svg"?ct.createElementNS(tu,e):t==="mathml"?ct.createElementNS(nu,e):n?ct.createElement(e,{is:n}):ct.createElement(e);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>ct.createTextNode(e),createComment:e=>ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,r,i){const s=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Gr.innerHTML=Rs(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const a=Gr.content;if(o==="svg"||o==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ru=Symbol("_vtc");function iu(e,t,n){const o=e[ru];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const qr=Symbol("_vod"),su=Symbol("_vsh"),lu=Symbol(""),au=/(?:^|;)\s*display\s*:/;function uu(e,t,n){const o=e.style,r=ae(n);let i=!1;if(n&&!r){if(t)if(ae(t))for(const s of t.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&Xn(o,a,"")}else for(const s in t)n[s]==null&&Xn(o,s,"");for(const s in n)s==="display"&&(i=!0),Xn(o,s,n[s])}else if(r){if(t!==n){const s=o[lu];s&&(n+=";"+s),o.cssText=n,i=au.test(n)}}else t&&e.removeAttribute("style");qr in e&&(e[qr]=i?o.display:"",e[su]&&(o.display="none"))}const Jr=/\s*!important$/;function Xn(e,t,n){if(R(n))n.forEach(o=>Xn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=cu(e,t);Jr.test(n)?e.setProperty(Ft(o),n.replace(Jr,""),"important"):e[o]=n}}const Yr=["Webkit","Moz","ms"],jo={};function cu(e,t){const n=jo[t];if(n)return n;let o=He(t);if(o!=="filter"&&o in e)return jo[t]=o;o=ho(o);for(let r=0;r<Yr.length;r++){const i=Yr[r]+o;if(i in e)return jo[t]=i}return t}const Qr="http://www.w3.org/1999/xlink";function Zr(e,t,n,o,r,i=hl(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Qr,t.slice(6,t.length)):e.setAttributeNS(Qr,t,n):n==null||i&&!Di(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ge(n)?String(n):n)}function Xr(e,t,n,o,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Rs(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Di(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(r||t)}function du(e,t,n,o){e.addEventListener(t,n,o)}function fu(e,t,n,o){e.removeEventListener(t,n,o)}const ei=Symbol("_vei");function pu(e,t,n,o,r=null){const i=e[ei]||(e[ei]={}),s=i[t];if(o&&s)s.value=o;else{const[a,l]=hu(t);if(o){const c=i[t]=bu(o,r);du(e,a,c,l)}else s&&(fu(e,a,s,l),i[t]=void 0)}}const ti=/(?:Once|Passive|Capture)$/;function hu(e){let t;if(ti.test(e)){t={};let o;for(;o=e.match(ti);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ft(e.slice(2)),t]}let Eo=0;const mu=Promise.resolve(),gu=()=>Eo||(mu.then(()=>Eo=0),Eo=Date.now());function bu(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;lt(vu(o,n.value),t,5,[o])};return n.value=e,n.attached=gu(),n}function vu(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const ni=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,yu=(e,t,n,o,r,i)=>{const s=r==="svg";t==="class"?iu(e,o,s):t==="style"?uu(e,n,o):fo(t)?Xo(t)||pu(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_u(e,t,o,s))?(Xr(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Zr(e,t,o,s,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ae(o))?Xr(e,He(t),o,i,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Zr(e,t,o,s))};function _u(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&ni(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ni(t)&&ae(n)?!1:t in e}const Su=Se({patchProp:yu},ou);let oi;function $u(){return oi||(oi=Da(Su))}const wu=((...e)=>{const t=$u().createApp(...e),{mount:n}=t;return t.mount=o=>{const r=ku(o);if(!r)return;const i=t._component;!V(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=n(r,!1,xu(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t});function xu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ku(e){return ae(e)?document.querySelector(e):e}const Bt=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},Pu={class:"portfolio-header"},Ou={__name:"PortfolioHeader",setup(e){return(t,n)=>(D(),H("header",Pu,[...n[0]||(n[0]=[vr('<div class="header-content" data-v-32f6541e><img class="avatar-img" src="https://avatars.githubusercontent.com/u/51330275?v=4" alt="Jorge Pérez Ludeña avatar" data-v-32f6541e><div class="header-info" data-v-32f6541e><h1 class="name" data-v-32f6541e>Jorge Pérez Ludeña</h1><p class="subtitle" data-v-32f6541e>Full Stack Developer · Backend Oriented</p><div class="social-links" data-v-32f6541e><a href="https://github.com/vigliom" target="_blank" aria-label="GitHub" data-v-32f6541e><i class="pi pi-github" data-v-32f6541e></i></a><a href="https://www.linkedin.com/in/jorpelu/" target="_blank" aria-label="LinkedIn" data-v-32f6541e><i class="pi pi-linkedin" data-v-32f6541e></i></a><a href="mailto:jorgeperez96jpl@gmail.com" aria-label="Email" data-v-32f6541e><i class="pi pi-envelope" data-v-32f6541e></i></a></div></div><nav class="header-links" data-v-32f6541e><a href="#proyectos" data-v-32f6541e>Proyectos</a><a href="#trabajos" data-v-32f6541e>Experiencia</a><a href="#estudios" data-v-32f6541e>Formación</a><a href="#conocimientos" data-v-32f6541e>Skills</a></nav></div>',1)])]))}},Tu=Bt(Ou,[["__scopeId","data-v-32f6541e"]]);function en(...e){if(e){let t=[];for(let n=0;n<e.length;n++){let o=e[n];if(!o)continue;let r=typeof o;if(r==="string"||r==="number")t.push(o);else if(r==="object"){let i=Array.isArray(o)?[en(...o)]:Object.entries(o).map(([s,a])=>a?s:void 0);t=i.length?t.concat(i.filter(s=>!!s)):t}}return t.join(" ").trim()}}function Cu(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1}function Au(e,t){if(e&&t){let n=o=>{Cu(e,o)||(e.classList?e.classList.add(o):e.className+=" "+o)};[t].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(n))}}function Io(e,t){if(e&&t){let n=o=>{e.classList?e.classList.remove(o):e.className=e.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," ")};[t].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(n))}}function ri(e){return e?Math.abs(e.scrollLeft):0}function ju(e,t){return e instanceof HTMLElement?e.offsetWidth:0}function Eu(e){if(e){let t=e.parentNode;return t&&t instanceof ShadowRoot&&t.host&&(t=t.host),t}return null}function Iu(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&Eu(e))}function Rn(e){return typeof Element<"u"?e instanceof Element:e!==null&&typeof e=="object"&&e.nodeType===1&&typeof e.nodeName=="string"}function uo(e,t={}){if(Rn(e)){let n=(o,r)=>{var i,s;let a=(i=e?.$attrs)!=null&&i[o]?[(s=e?.$attrs)==null?void 0:s[o]]:[];return[r].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?n(o,c):Object.entries(c).map(([h,m])=>o==="style"&&(m||m===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${m}`:m?h:void 0);l=d.length?l.concat(d.filter(h=>!!h)):l}}return l},a)};Object.entries(t).forEach(([o,r])=>{if(r!=null){let i=o.match(/^on(.+)/);i?e.addEventListener(i[1].toLowerCase(),r):o==="p-bind"||o==="pBind"?uo(e,r):(r=o==="class"?[...new Set(n("class",r))].join(" ").trim():o==="style"?n("style",r).join(";").trim():r,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=r),e.setAttribute(o,r))}})}}function Lu(e,t={},...n){{let o=document.createElement(e);return uo(o,t),o.append(...n),o}}function Nu(e,t){return Rn(e)?e.matches(t)?e:e.querySelector(t):null}function Mu(e,t){if(Rn(e)){let n=e.getAttribute(t);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}function ii(e){if(e){let t=e.offsetHeight,n=getComputedStyle(e);return t-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),t}return 0}function Du(e){if(e){let t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||ri(document.documentElement)||ri(document.body)||0)}}return{top:"auto",left:"auto"}}function Ru(e,t){return e?e.offsetHeight:0}function si(e){if(e){let t=e.offsetWidth,n=getComputedStyle(e);return t-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),t}return 0}function Vu(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Fu(e,t="",n){Rn(e)&&n!==null&&n!==void 0&&e.setAttribute(t,n)}function Vs(){let e=new Map;return{on(t,n){let o=e.get(t);return o?o.push(n):o=[n],e.set(t,o),this},off(t,n){let o=e.get(t);return o&&o.splice(o.indexOf(n)>>>0,1),this},emit(t,n){let o=e.get(t);o&&o.forEach(r=>{r(n)})},clear(){e.clear()}}}var Bu=Object.defineProperty,li=Object.getOwnPropertySymbols,Hu=Object.prototype.hasOwnProperty,Uu=Object.prototype.propertyIsEnumerable,ai=(e,t,n)=>t in e?Bu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zu=(e,t)=>{for(var n in t||(t={}))Hu.call(t,n)&&ai(e,n,t[n]);if(li)for(var n of li(t))Uu.call(t,n)&&ai(e,n,t[n]);return e};function Ht(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function _r(e){return typeof e=="function"&&"call"in e&&"apply"in e}function re(e){return!Ht(e)}function st(e,t=!0){return e instanceof Object&&e.constructor===Object&&(t||Object.keys(e).length!==0)}function Fs(e={},t={}){let n=zu({},e);return Object.keys(t).forEach(o=>{let r=o;st(t[r])&&r in e&&st(e[r])?n[r]=Fs(e[r],t[r]):n[r]=t[r]}),n}function Wu(...e){return e.reduce((t,n,o)=>o===0?n:Fs(t,n),{})}function De(e,...t){return _r(e)?e(...t):e}function Ie(e,t=!0){return typeof e=="string"&&(t||e!=="")}function rt(e){return Ie(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function Sr(e,t="",n={}){let o=rt(t).split("."),r=o.shift();if(r){if(st(e)){let i=Object.keys(e).find(s=>rt(s)===r)||"";return Sr(De(e[i],n),o.join("."),n)}return}return De(e,n)}function Bs(e,t=!0){return Array.isArray(e)&&(t||e.length!==0)}function Ku(e){return re(e)&&!isNaN(e)}function Dt(e,t){if(t){let n=t.test(e);return t.lastIndex=0,n}return!1}function Gu(...e){return Wu(...e)}function bn(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function qu(e){return Ie(e,!1)?e[0].toUpperCase()+e.slice(1):e}function Hs(e){return Ie(e)?e.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():e}var Wn={};function Ju(e="pui_id_"){return Object.hasOwn(Wn,e)||(Wn[e]=0),Wn[e]++,`${e}${Wn[e]}`}var Yu=Object.defineProperty,Qu=Object.defineProperties,Zu=Object.getOwnPropertyDescriptors,co=Object.getOwnPropertySymbols,Us=Object.prototype.hasOwnProperty,zs=Object.prototype.propertyIsEnumerable,ui=(e,t,n)=>t in e?Yu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ze=(e,t)=>{for(var n in t||(t={}))Us.call(t,n)&&ui(e,n,t[n]);if(co)for(var n of co(t))zs.call(t,n)&&ui(e,n,t[n]);return e},Lo=(e,t)=>Qu(e,Zu(t)),ut=(e,t)=>{var n={};for(var o in e)Us.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&co)for(var o of co(e))t.indexOf(o)<0&&zs.call(e,o)&&(n[o]=e[o]);return n},Xu=Vs(),he=Xu,wn=/{([^}]*)}/g,Ws=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Ks=/var\([^)]+\)/g;function ci(e){return Ie(e)?e.replace(/[A-Z]/g,(t,n)=>n===0?t:"."+t.toLowerCase()).toLowerCase():e}function ec(e){return st(e)&&e.hasOwnProperty("$value")&&e.hasOwnProperty("$type")?e.$value:e}function tc(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Go(e="",t=""){return tc(`${Ie(e,!1)&&Ie(t,!1)?`${e}-`:e}${t}`)}function Gs(e="",t=""){return`--${Go(e,t)}`}function nc(e=""){let t=(e.match(/{/g)||[]).length,n=(e.match(/}/g)||[]).length;return(t+n)%2!==0}function qs(e,t="",n="",o=[],r){if(Ie(e)){let i=e.trim();if(nc(i))return;if(Dt(i,wn)){let s=i.replaceAll(wn,a=>{let l=a.replace(/{|}/g,"").split(".").filter(c=>!o.some(u=>Dt(c,u)));return`var(${Gs(n,Hs(l.join("-")))}${re(r)?`, ${r}`:""})`});return Dt(s.replace(Ks,"0"),Ws)?`calc(${s})`:s}return i}else if(Ku(e))return e}function oc(e,t,n){Ie(t,!1)&&e.push(`${t}:${n};`)}function Kt(e,t){return e?`${e}{${t}}`:""}function Js(e,t){if(e.indexOf("dt(")===-1)return e;function n(s,a){let l=[],c=0,u="",d=null,h=0;for(;c<=s.length;){let m=s[c];if((m==='"'||m==="'"||m==="`")&&s[c-1]!=="\\"&&(d=d===m?null:m),!d&&(m==="("&&h++,m===")"&&h--,(m===","||c===s.length)&&h===0)){let $=u.trim();$.startsWith("dt(")?l.push(Js($,a)):l.push(o($)),u="",c++;continue}m!==void 0&&(u+=m),c++}return l}function o(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let r=[],i=[];for(let s=0;s<e.length;s++)if(e[s]==="d"&&e.slice(s,s+3)==="dt(")i.push(s),s+=2;else if(e[s]===")"&&i.length>0){let a=i.pop();i.length===0&&r.push([a,s])}if(!r.length)return e;for(let s=r.length-1;s>=0;s--){let[a,l]=r[s],c=e.slice(a+3,l),u=n(c,t),d=t(...u);e=e.slice(0,a)+d+e.slice(l+1)}return e}var Rt=(...e)=>rc(Y.getTheme(),...e),rc=(e={},t,n,o)=>{if(t){let{variable:r,options:i}=Y.defaults||{},{prefix:s,transform:a}=e?.options||i||{},l=Dt(t,wn)?t:`{${t}}`;return o==="value"||Ht(o)&&a==="strict"?Y.getTokenValue(t):qs(l,void 0,s,[r.excludedKeyRegex],n)}return""};function Kn(e,...t){if(e instanceof Array){let n=e.reduce((o,r,i)=>{var s;return o+r+((s=De(t[i],{dt:Rt}))!=null?s:"")},"");return Js(n,Rt)}return De(e,{dt:Rt})}function ic(e,t={}){let n=Y.defaults.variable,{prefix:o=n.prefix,selector:r=n.selector,excludedKeyRegex:i=n.excludedKeyRegex}=t,s=[],a=[],l=[{node:e,path:o}];for(;l.length;){let{node:u,path:d}=l.pop();for(let h in u){let m=u[h],$=ec(m),w=Dt(h,i)?Go(d):Go(d,Hs(h));if(st($))l.push({node:$,path:w});else{let O=Gs(w),C=qs($,w,o,[i]);oc(a,O,C);let A=w;o&&A.startsWith(o+"-")&&(A=A.slice(o.length+1)),s.push(A.replace(/-/g,"."))}}}let c=a.join("");return{value:a,tokens:s,declarations:c,css:Kt(r,c)}}var Ue={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e},:host${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:e,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let t=Object.keys(this.rules).filter(n=>n!=="custom").map(n=>this.rules[n]);return[e].flat().map(n=>{var o;return(o=t.map(r=>r.resolve(n)).find(r=>r.matched))!=null?o:this.rules.custom.resolve(n)})}},_toVariables(e,t){return ic(e,{prefix:t?.prefix})},getCommon({name:e="",theme:t={},params:n,set:o,defaults:r}){var i,s,a,l,c,u,d;let{preset:h,options:m}=t,$,w,O,C,A,L,b;if(re(h)&&m.transform!=="strict"){let{primitive:E,semantic:ee,extend:ie}=h,pe=ee||{},{colorScheme:Le}=pe,$e=ut(pe,["colorScheme"]),ke=ie||{},{colorScheme:Re}=ke,Ve=ut(ke,["colorScheme"]),Fe=Le||{},{dark:Je}=Fe,se=ut(Fe,["dark"]),K=Re||{},{dark:z}=K,Pe=ut(K,["dark"]),Oe=re(E)?this._toVariables({primitive:E},m):{},de=re($e)?this._toVariables({semantic:$e},m):{},fe=re(se)?this._toVariables({light:se},m):{},Ct=re(Je)?this._toVariables({dark:Je},m):{},St=re(Ve)?this._toVariables({semantic:Ve},m):{},Fn=re(Pe)?this._toVariables({light:Pe},m):{},$t=re(z)?this._toVariables({dark:z},m):{},[Ut,on]=[(i=Oe.declarations)!=null?i:"",Oe.tokens],[Bn,At]=[(s=de.declarations)!=null?s:"",de.tokens||[]],[$r,f]=[(a=fe.declarations)!=null?a:"",fe.tokens||[]],[p,g]=[(l=Ct.declarations)!=null?l:"",Ct.tokens||[]],[S,v]=[(c=St.declarations)!=null?c:"",St.tokens||[]],[y,P]=[(u=Fn.declarations)!=null?u:"",Fn.tokens||[]],[k,x]=[(d=$t.declarations)!=null?d:"",$t.tokens||[]];$=this.transformCSS(e,Ut,"light","variable",m,o,r),w=on;let _=this.transformCSS(e,`${Bn}${$r}`,"light","variable",m,o,r),N=this.transformCSS(e,`${p}`,"dark","variable",m,o,r);O=`${_}${N}`,C=[...new Set([...At,...f,...g])];let T=this.transformCSS(e,`${S}${y}color-scheme:light`,"light","variable",m,o,r),I=this.transformCSS(e,`${k}color-scheme:dark`,"dark","variable",m,o,r);A=`${T}${I}`,L=[...new Set([...v,...P,...x])],b=De(h.css,{dt:Rt})}return{primitive:{css:$,tokens:w},semantic:{css:O,tokens:C},global:{css:A,tokens:L},style:b}},getPreset({name:e="",preset:t={},options:n,params:o,set:r,defaults:i,selector:s}){var a,l,c;let u,d,h;if(re(t)&&n.transform!=="strict"){let m=e.replace("-directive",""),$=t,{colorScheme:w,extend:O,css:C}=$,A=ut($,["colorScheme","extend","css"]),L=O||{},{colorScheme:b}=L,E=ut(L,["colorScheme"]),ee=w||{},{dark:ie}=ee,pe=ut(ee,["dark"]),Le=b||{},{dark:$e}=Le,ke=ut(Le,["dark"]),Re=re(A)?this._toVariables({[m]:ze(ze({},A),E)},n):{},Ve=re(pe)?this._toVariables({[m]:ze(ze({},pe),ke)},n):{},Fe=re(ie)?this._toVariables({[m]:ze(ze({},ie),$e)},n):{},[Je,se]=[(a=Re.declarations)!=null?a:"",Re.tokens||[]],[K,z]=[(l=Ve.declarations)!=null?l:"",Ve.tokens||[]],[Pe,Oe]=[(c=Fe.declarations)!=null?c:"",Fe.tokens||[]],de=this.transformCSS(m,`${Je}${K}`,"light","variable",n,r,i,s),fe=this.transformCSS(m,Pe,"dark","variable",n,r,i,s);u=`${de}${fe}`,d=[...new Set([...se,...z,...Oe])],h=De(C,{dt:Rt})}return{css:u,tokens:d,style:h}},getPresetC({name:e="",theme:t={},params:n,set:o,defaults:r}){var i;let{preset:s,options:a}=t,l=(i=s?.components)==null?void 0:i[e];return this.getPreset({name:e,preset:l,options:a,params:n,set:o,defaults:r})},getPresetD({name:e="",theme:t={},params:n,set:o,defaults:r}){var i,s;let a=e.replace("-directive",""),{preset:l,options:c}=t,u=((i=l?.components)==null?void 0:i[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:u,options:c,params:n,set:o,defaults:r})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,t){var n;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?t.options.darkModeSelector:(n=e.darkModeSelector)!=null?n:t.options.darkModeSelector):[]},getLayerOrder(e,t={},n,o){let{cssLayer:r}=t;return r?`@layer ${De(r.order||r.name||"primeui",n)}`:""},getCommonStyleSheet({name:e="",theme:t={},params:n,props:o={},set:r,defaults:i}){let s=this.getCommon({name:e,theme:t,params:n,set:r,defaults:i}),a=Object.entries(o).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(st(u)&&Object.hasOwn(u,"css")){let d=bn(u.css),h=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${h}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:t={},params:n,props:o={},set:r,defaults:i}){var s;let a={name:e,theme:t,params:n,set:r,defaults:i},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(o).reduce((u,[d,h])=>u.push(`${d}="${h}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${bn(l)}</style>`:""},createTokens(e={},t,n="",o="",r={}){let i=function(a,l={},c=[]){if(c.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};c.push(this.path),l.name=this.path,l.binding||(l.binding={});let u=this.value;if(typeof this.value=="string"&&wn.test(this.value)){let d=this.value.trim().replace(wn,h=>{var m;let $=h.slice(1,-1),w=this.tokens[$];if(!w)return console.warn(`Token not found for path: ${$}`),"__UNRESOLVED__";let O=w.computed(a,l,c);return Array.isArray(O)&&O.length===2?`light-dark(${O[0].value},${O[1].value})`:(m=O?.value)!=null?m:"__UNRESOLVED__"});u=Ws.test(d.replace(Ks,"0"))?`calc(${d})`:d}return Ht(l.binding)&&delete l.binding,c.pop(),{colorScheme:a,path:this.path,paths:l,value:u.includes("__UNRESOLVED__")?void 0:u}},s=(a,l,c)=>{Object.entries(a).forEach(([u,d])=>{let h=Dt(u,t.variable.excludedKeyRegex)?l:l?`${l}.${ci(u)}`:ci(u),m=c?`${c}.${u}`:u;st(d)?s(d,h,m):(r[h]||(r[h]={paths:[],computed:($,w={},O=[])=>{if(r[h].paths.length===1)return r[h].paths[0].computed(r[h].paths[0].scheme,w.binding,O);if($&&$!=="none")for(let C=0;C<r[h].paths.length;C++){let A=r[h].paths[C];if(A.scheme===$)return A.computed($,w.binding,O)}return r[h].paths.map(C=>C.computed(C.scheme,w[C.scheme],O))}}),r[h].paths.push({path:m,value:d,scheme:m.includes("colorScheme.light")?"light":m.includes("colorScheme.dark")?"dark":"none",computed:i,tokens:r}))})};return s(e,n,o),r},getTokenValue(e,t,n){var o;let r=(a=>a.split(".").filter(l=>!Dt(l.toLowerCase(),n.variable.excludedKeyRegex)).join("."))(t),i=t.includes("colorScheme.light")?"light":t.includes("colorScheme.dark")?"dark":void 0,s=[(o=e[r])==null?void 0:o.computed(i)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let c=l,{colorScheme:u}=c,d=ut(c,["colorScheme"]);return a[u]=d,a},void 0)},getSelectorRule(e,t,n,o){return n==="class"||n==="attr"?Kt(re(t)?`${e}${t},${e} ${t}`:e,o):Kt(e,Kt(t??":root,:host",o))},transformCSS(e,t,n,o,r={},i,s,a){if(re(t)){let{cssLayer:l}=r;if(o!=="style"){let c=this.getColorSchemeOption(r,s);t=n==="dark"?c.reduce((u,{type:d,selector:h})=>(re(h)&&(u+=h.includes("[CSS]")?h.replace("[CSS]",t):this.getSelectorRule(h,a,d,t)),u),""):Kt(a??":root,:host",t)}if(l){let c={name:"primeui"};st(l)&&(c.name=De(l.name,{name:e,type:o})),re(c.name)&&(t=Kt(`@layer ${c.name}`,t),i?.layerNames(c.name))}return t}return""}},Y={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:t}=e;t&&(this._theme=Lo(ze({},t),{options:ze(ze({},this.defaults.options),t.options)}),this._tokens=Ue.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),he.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=Lo(ze({},this.theme),{preset:e}),this._tokens=Ue.createTokens(e,this.defaults),this.clearLoadedStyleNames(),he.emit("preset:change",e),he.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=Lo(ze({},this.theme),{options:e}),this.clearLoadedStyleNames(),he.emit("options:change",e),he.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return Ue.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",t){return Ue.getCommon({name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",t){let n={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ue.getPresetC(n)},getDirective(e="",t){let n={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ue.getPresetD(n)},getCustomPreset(e="",t,n,o){let r={name:e,preset:t,options:this.options,selector:n,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Ue.getPreset(r)},getLayerOrderCSS(e=""){return Ue.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",t,n="style",o){return Ue.transformCSS(e,t,o,n,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",t,n={}){return Ue.getCommonStyleSheet({name:e,theme:this.theme,params:t,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,t,n={}){return Ue.getStyleSheet({name:e,theme:this.theme,params:t,props:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:t}){this._loadingStyles.size&&(this._loadingStyles.delete(t),he.emit(`theme:${t}:load`,e),!this._loadingStyles.size&&he.emit("theme:load"))}},kt={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(t){return this._loadedStyleNames.has(t)},setLoadedStyleName:function(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName:function(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}},sc=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: var(--px-mask-background, dt('mask.background'));
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter-active {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave-active {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: var(--px-mask-background, dt('mask.background'));
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: var(--px-mask-background, dt('mask.background'));
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;function xn(e){"@babel/helpers - typeof";return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xn(e)}function di(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function fi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?di(Object(n),!0).forEach(function(o){lc(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):di(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function lc(e,t,n){return(t=ac(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ac(e){var t=uc(e,"string");return xn(t)=="symbol"?t:t+""}function uc(e,t){if(xn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(xn(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function cc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;lo()&&lo().components?fs(e):t?e():ns(e)}var dc=0;function fc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Jn(!1),o=Jn(e),r=Jn(null),i=Vu()?window.document:void 0,s=t.document,a=s===void 0?i:s,l=t.immediate,c=l===void 0?!0:l,u=t.manual,d=u===void 0?!1:u,h=t.name,m=h===void 0?"style_".concat(++dc):h,$=t.id,w=$===void 0?void 0:$,O=t.media,C=O===void 0?void 0:O,A=t.nonce,L=A===void 0?void 0:A,b=t.first,E=b===void 0?!1:b,ee=t.onMounted,ie=ee===void 0?void 0:ee,pe=t.onUpdated,Le=pe===void 0?void 0:pe,$e=t.onLoad,ke=$e===void 0?void 0:$e,Re=t.props,Ve=Re===void 0?{}:Re,Fe=function(){},Je=function(z){var Pe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var Oe=fi(fi({},Ve),Pe),de=Oe.name||m,fe=Oe.id||w,Ct=Oe.nonce||L;r.value=a.querySelector('style[data-primevue-style-id="'.concat(de,'"]'))||a.getElementById(fe)||a.createElement("style"),r.value.isConnected||(o.value=z||e,uo(r.value,{type:"text/css",id:fe,media:C,nonce:Ct}),E?a.head.prepend(r.value):a.head.appendChild(r.value),Fu(r.value,"data-primevue-style-id",de),uo(r.value,Oe),r.value.onload=function(St){return ke?.(St,{name:de})},ie?.(de)),!n.value&&(Fe=Pt(o,function(St){r.value.textContent=St,Le?.(de)},{immediate:!0}),n.value=!0)}},se=function(){!a||!n.value||(Fe(),Iu(r.value)&&a.head.removeChild(r.value),n.value=!1,r.value=null)};return c&&!d&&cc(Je),{id:w,name:m,el:r,css:o,unload:se,load:Je,isLoaded:to(n)}}function kn(e){"@babel/helpers - typeof";return kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kn(e)}var pi,hi,mi,gi;function bi(e,t){return gc(e)||mc(e,t)||hc(e,t)||pc()}function pc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hc(e,t){if(e){if(typeof e=="string")return vi(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?vi(e,t):void 0}}function vi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function mc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,r,i,s,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(l=(o=i.call(n)).done)&&(a.push(o.value),a.length!==t);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}function gc(e){if(Array.isArray(e))return e}function yi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function No(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yi(Object(n),!0).forEach(function(o){bc(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yi(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function bc(e,t,n){return(t=vc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vc(e){var t=yc(e,"string");return kn(t)=="symbol"?t:t+""}function yc(e,t){if(kn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(kn(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Gn(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var _c=function(t){var n=t.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"),`;
}
`)},Sc={},$c={},oe={name:"base",css:_c,style:sc,classes:Sc,inlineStyles:$c,load:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(i){return i},r=o(Kn(pi||(pi=Gn(["",""])),t));return re(r)?fc(bn(r),No({name:this.name},n)):{}},loadCSS:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,t)},loadStyle:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.style,n,function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return Y.transformCSS(n.name||t.name,"".concat(r).concat(Kn(hi||(hi=Gn(["",""])),o)))})},getCommonTheme:function(t){return Y.getCommon(this.name,t)},getComponentTheme:function(t){return Y.getComponent(this.name,t)},getDirectiveTheme:function(t){return Y.getDirective(this.name,t)},getPresetTheme:function(t,n,o){return Y.getCustomPreset(this.name,t,n,o)},getLayerOrderThemeCSS:function(){return Y.getLayerOrderCSS(this.name)},getStyleSheet:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var o=De(this.css,{dt:Rt})||"",r=bn(Kn(mi||(mi=Gn(["","",""])),o,t)),i=Object.entries(n).reduce(function(s,a){var l=bi(a,2),c=l[0],u=l[1];return s.push("".concat(c,'="').concat(u,'"'))&&s},[]).join(" ");return re(r)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(r,"</style>"):""}return""},getCommonThemeStyleSheet:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Y.getCommonStyleSheet(this.name,t,n)},getThemeStyleSheet:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=[Y.getStyleSheet(this.name,t,n)];if(this.style){var r=this.name==="base"?"global-style":"".concat(this.name,"-style"),i=Kn(gi||(gi=Gn(["",""])),De(this.style,{dt:Rt})),s=bn(Y.transformCSS(r,i)),a=Object.entries(n).reduce(function(l,c){var u=bi(c,2),d=u[0],h=u[1];return l.push("".concat(d,'="').concat(h,'"'))&&l},[]).join(" ");re(s)&&o.push('<style type="text/css" data-primevue-style-id="'.concat(r,'" ').concat(a,">").concat(s,"</style>"))}return o.join("")},extend:function(t){return No(No({},this),{},{css:void 0,style:void 0},t)}};function wc(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pc",t=na();return"".concat(e).concat(t.replace("v-","").replaceAll("-","_"))}var _i=oe.extend({name:"common"});function Pn(e){"@babel/helpers - typeof";return Pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pn(e)}function xc(e){return Zs(e)||kc(e)||Qs(e)||Ys()}function kc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function an(e,t){return Zs(e)||Pc(e,t)||Qs(e,t)||Ys()}function Ys(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qs(e,t){if(e){if(typeof e=="string")return qo(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qo(e,t):void 0}}function qo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function Pc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,r,i,s,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=i.call(n)).done)&&(a.push(o.value),a.length!==t);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}function Zs(e){if(Array.isArray(e))return e}function Si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Si(Object(n),!0).forEach(function(o){cn(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Si(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function cn(e,t,n){return(t=Oc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oc(e){var t=Tc(e,"string");return Pn(t)=="symbol"?t:t+""}function Tc(e,t){if(Pn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(Pn(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Vn={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(t){he.off("theme:change",this._loadCoreStyles),t||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(t,n){var o=this;he.off("theme:change",this._themeScopedListener),t?(this._loadScopedThemeStyles(t),this._themeScopedListener=function(){return o._loadScopedThemeStyles(t)},this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,uid:void 0,$attrSelector:void 0,beforeCreate:function(){var t,n,o,r,i,s,a,l,c,u,d,h=(t=this.pt)===null||t===void 0?void 0:t._usept,m=h?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,$=h?(o=this.pt)===null||o===void 0||(o=o.value)===null||o===void 0?void 0:o[this.$.type.name]:this.pt;(r=$||m)===null||r===void 0||(r=r.hooks)===null||r===void 0||(i=r.onBeforeCreate)===null||i===void 0||i.call(r);var w=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,O=w?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,C=w?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(u=C||O)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(d=u.onBeforeCreate)===null||d===void 0||d.call(u),this.$attrSelector=wc(),this.uid=this.$attrs.id||this.$attrSelector.replace("pc","pv_id_")},created:function(){this._hook("onCreated")},beforeMount:function(){var t;this.rootEl=Nu(Rn(this.$el)?this.$el:(t=this.$el)===null||t===void 0?void 0:t.parentElement,"[".concat(this.$attrSelector,"]")),this.rootEl&&(this.rootEl.$pc=B({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(t){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(t)),o=this._useDefaultPT(this._getOptionValue,"hooks.".concat(t));n?.(),o?.()}},_mergeProps:function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return _r(t)?t.apply(void 0,o):X.apply(void 0,o)},_load:function(){kt.isStyleNameLoaded("base")||(oe.loadCSS(this.$styleOptions),this._loadGlobalStyles(),kt.setLoadedStyleName("base")),this._loadThemeStyles()},_loadStyles:function(){this._load(),this._themeChangeListener(this._load)},_loadCoreStyles:function(){var t,n;!kt.isStyleNameLoaded((t=this.$style)===null||t===void 0?void 0:t.name)&&(n=this.$style)!==null&&n!==void 0&&n.name&&(_i.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),kt.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);re(t)&&oe.load(t,B({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var t,n;if(!(this.isUnstyled||this.$theme==="none")){if(!Y.isStyleNameLoaded("common")){var o,r,i=((o=this.$style)===null||o===void 0||(r=o.getCommonTheme)===null||r===void 0?void 0:r.call(o))||{},s=i.primitive,a=i.semantic,l=i.global,c=i.style;oe.load(s?.css,B({name:"primitive-variables"},this.$styleOptions)),oe.load(a?.css,B({name:"semantic-variables"},this.$styleOptions)),oe.load(l?.css,B({name:"global-variables"},this.$styleOptions)),oe.loadStyle(B({name:"global-style"},this.$styleOptions),c),Y.setLoadedStyleName("common")}if(!Y.isStyleNameLoaded((t=this.$style)===null||t===void 0?void 0:t.name)&&(n=this.$style)!==null&&n!==void 0&&n.name){var u,d,h,m,$=((u=this.$style)===null||u===void 0||(d=u.getComponentTheme)===null||d===void 0?void 0:d.call(u))||{},w=$.css,O=$.style;(h=this.$style)===null||h===void 0||h.load(w,B({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(m=this.$style)===null||m===void 0||m.loadStyle(B({name:"".concat(this.$style.name,"-style")},this.$styleOptions),O),Y.setLoadedStyleName(this.$style.name)}if(!Y.isStyleNameLoaded("layer-order")){var C,A,L=(C=this.$style)===null||C===void 0||(A=C.getLayerOrderThemeCSS)===null||A===void 0?void 0:A.call(C);oe.load(L,B({name:"layer-order",first:!0},this.$styleOptions)),Y.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(t){var n,o,r,i=((n=this.$style)===null||n===void 0||(o=n.getPresetTheme)===null||o===void 0?void 0:o.call(n,t,"[".concat(this.$attrSelector,"]")))||{},s=i.css,a=(r=this.$style)===null||r===void 0?void 0:r.load(s,B({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var t;(t=this.scopedStyleEl)===null||t===void 0||(t=t.value)===null||t===void 0||t.remove()},_themeChangeListener:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};kt.clearLoadedStyleNames(),he.on("theme:change",t)},_removeThemeListeners:function(){he.off("theme:change",this._loadCoreStyles),he.off("theme:change",this._load),he.off("theme:change",this._themeScopedListener)},_getHostInstance:function(t){return t?this.$options.hostName?t.$.type.name===this.$options.hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0},_getPropValue:function(t){var n;return this[t]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[t])},_getOptionValue:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Sr(t,n,o)},_getPTValue:function(){var t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(o)&&!!r[o.split(".")[0]],a=this._getPropValue("ptOptions")||((t=this.$primevueConfig)===null||t===void 0?void 0:t.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,d=u===void 0?!1:u,h=i?s?this._useGlobalPT(this._getPTClassValue,o,r):this._useDefaultPT(this._getPTClassValue,o,r):void 0,m=s?void 0:this._getPTSelf(n,this._getPTClassValue,o,B(B({},r),{},{global:h||{}})),$=this._getPTDatasets(o);return c||!c&&m?d?this._mergeProps(d,h,m,$):B(B(B({},h),m),$):B(B({},m),$)},_getPTSelf:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return X(this._usePT.apply(this,[this._getPT(t,this.$name)].concat(o)),this._usePT.apply(this,[this.$_attrsPT].concat(o)))},_getPTDatasets:function(){var t,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r="data-pc-",i=o==="root"&&re((t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]);return o!=="transition"&&B(B({},o==="root"&&B(B(cn({},"".concat(r,"name"),rt(i?(n=this.pt)===null||n===void 0?void 0:n["data-pc-section"]:this.$.type.name)),i&&cn({},"".concat(r,"extend"),rt(this.$.type.name))),{},cn({},"".concat(this.$attrSelector),""))),{},cn({},"".concat(r,"section"),rt(o)))},_getPTClassValue:function(){var t=this._getOptionValue.apply(this,arguments);return Ie(t)||Bs(t)?{class:t}:t},_getPT:function(t){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=function(a){var l,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=r?r(a):a,d=rt(o),h=rt(n.$name);return(l=c?d!==h?u?.[d]:void 0:u?.[d])!==null&&l!==void 0?l:u};return t!=null&&t.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:i(t.originalValue),value:i(t.value)}:i(t,!0)},_usePT:function(t,n,o,r){var i=function(w){return n(w,o,r)};if(t!=null&&t.hasOwnProperty("_usept")){var s,a=t._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,d=u===void 0?!1:u,h=i(t.originalValue),m=i(t.value);return h===void 0&&m===void 0?void 0:Ie(m)?m:Ie(h)?h:c||!c&&m?d?this._mergeProps(d,h,m):B(B({},h),m):m}return i(t)},_useGlobalPT:function(t,n,o){return this._usePT(this.globalPT,t,n,o)},_useDefaultPT:function(t,n,o){return this._usePT(this.defaultPT,t,n,o)},ptm:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,t,B(B({},this.$params),n))},ptmi:function(){var t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=X(this.$_attrsWithoutPT,this.ptm(n,o));return r?.hasOwnProperty("id")&&((t=r.id)!==null&&t!==void 0||(r.id=this.$id)),r},ptmo:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(t,n,B({instance:this},o),!1)},cx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,t,B(B({},this.$params),n))},sx:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var r=this._getOptionValue(this.$style.inlineStyles,t,B(B({},this.$params),o)),i=this._getOptionValue(_i.inlineStyles,t,B(B({},this.$params),o));return[i,r]}}},computed:{globalPT:function(){var t,n=this;return this._getPT((t=this.$primevueConfig)===null||t===void 0?void 0:t.pt,void 0,function(o){return De(o,{instance:n})})},defaultPT:function(){var t,n=this;return this._getPT((t=this.$primevueConfig)===null||t===void 0?void 0:t.pt,void 0,function(o){return n._getOptionValue(o,n.$name,B({},n.$params))||De(o,B({},n.$params))})},isUnstyled:function(){var t;return this.unstyled!==void 0?this.unstyled:(t=this.$primevueConfig)===null||t===void 0?void 0:t.unstyled},$id:function(){return this.$attrs.id||this.uid},$inProps:function(){var t,n=Object.keys(((t=this.$.vnode)===null||t===void 0?void 0:t.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(o){var r=an(o,1),i=r[0];return n?.includes(i)}))},$theme:function(){var t;return(t=this.$primevueConfig)===null||t===void 0?void 0:t.theme},$style:function(){return B(B({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var t;return{nonce:(t=this.$primevueConfig)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce}},$primevueConfig:function(){var t;return(t=this.$primevue)===null||t===void 0?void 0:t.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var t=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:t,props:t?.$props,state:t?.$data,attrs:t?.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(t){var n=an(t,1),o=n[0];return o?.startsWith("pt:")}).reduce(function(t,n){var o=an(n,2),r=o[0],i=o[1],s=r.split(":"),a=xc(s),l=qo(a).slice(1);return l?.reduce(function(c,u,d,h){return!c[u]&&(c[u]=d===h.length-1?i:{}),c[u]},t),t},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(t){var n=an(t,1),o=n[0];return!(o!=null&&o.startsWith("pt:"))}).reduce(function(t,n){var o=an(n,2),r=o[0],i=o[1];return t[r]=i,t},{})}}},Cc=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Ac=oe.extend({name:"baseicon",css:Cc});function On(e){"@babel/helpers - typeof";return On=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},On(e)}function $i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function wi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$i(Object(n),!0).forEach(function(o){jc(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$i(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function jc(e,t,n){return(t=Ec(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ec(e){var t=Ic(e,"string");return On(t)=="symbol"?t:t+""}function Ic(e,t){if(On(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(On(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Lc={name:"BaseIcon",extends:Vn,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:Ac,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var t=Ht(this.label);return wi(wi({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:t?void 0:"img","aria-label":t?void 0:this.label,"aria-hidden":t})}}},Xs={name:"SpinnerIcon",extends:Lc};function Nc(e){return Vc(e)||Rc(e)||Dc(e)||Mc()}function Mc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dc(e,t){if(e){if(typeof e=="string")return Jo(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Jo(e,t):void 0}}function Rc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Vc(e){if(Array.isArray(e))return Jo(e)}function Jo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function Fc(e,t,n,o,r,i){return D(),H("svg",X({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Nc(t[0]||(t[0]=[j("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)])),16)}Xs.render=Fc;var Bc=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`,Hc={root:function(t){var n=t.props,o=t.instance;return["p-badge p-component",{"p-badge-circle":re(n.value)&&String(n.value).length===1,"p-badge-dot":Ht(n.value)&&!o.$slots.default,"p-badge-sm":n.size==="small","p-badge-lg":n.size==="large","p-badge-xl":n.size==="xlarge","p-badge-info":n.severity==="info","p-badge-success":n.severity==="success","p-badge-warn":n.severity==="warn","p-badge-danger":n.severity==="danger","p-badge-secondary":n.severity==="secondary","p-badge-contrast":n.severity==="contrast"}]}},Uc=oe.extend({name:"badge",style:Bc,classes:Hc}),zc={name:"BaseBadge",extends:Vn,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:Uc,provide:function(){return{$pcBadge:this,$parentInstance:this}}};function Tn(e){"@babel/helpers - typeof";return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tn(e)}function xi(e,t,n){return(t=Wc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wc(e){var t=Kc(e,"string");return Tn(t)=="symbol"?t:t+""}function Kc(e,t){if(Tn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(Tn(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var el={name:"Badge",extends:zc,inheritAttrs:!1,computed:{dataP:function(){return en(xi(xi({circle:this.value!=null&&String(this.value).length===1,empty:this.value==null&&!this.$slots.default},this.severity,this.severity),this.size,this.size))}}},Gc=["data-p"];function qc(e,t,n,o,r,i){return D(),H("span",X({class:e.cx("root"),"data-p":i.dataP},e.ptmi("root")),[We(e.$slots,"default",{},function(){return[nt(le(e.value),1)]})],16,Gc)}el.render=qc;var Ot=Vs();function Cn(e){"@babel/helpers - typeof";return Cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cn(e)}function ki(e,t){return Zc(e)||Qc(e,t)||Yc(e,t)||Jc()}function Jc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yc(e,t){if(e){if(typeof e=="string")return Pi(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pi(e,t):void 0}}function Pi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function Qc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o,r,i,s,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(l=(o=i.call(n)).done)&&(a.push(o.value),a.length!==t);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}function Zc(e){if(Array.isArray(e))return e}function Oi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oi(Object(n),!0).forEach(function(o){Yo(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oi(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Yo(e,t,n){return(t=Xc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xc(e){var t=ed(e,"string");return Cn(t)=="symbol"?t:t+""}function ed(e,t){if(Cn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(Cn(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var F={_getMeta:function(){return[st(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],De(st(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(t,n){var o,r,i;return(o=(t==null||(r=t.instance)===null||r===void 0?void 0:r.$primevue)||(n==null||(i=n.ctx)===null||i===void 0||(i=i.appContext)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.globalProperties)===null||i===void 0?void 0:i.$primevue))===null||o===void 0?void 0:o.config},_getOptionValue:Sr,_getPTValue:function(){var t,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var A=F._getOptionValue.apply(F,arguments);return Ie(A)||Bs(A)?{class:A}:A},c=((t=o.binding)===null||t===void 0||(t=t.value)===null||t===void 0?void 0:t.ptOptions)||((n=o.$primevueConfig)===null||n===void 0?void 0:n.ptOptions)||{},u=c.mergeSections,d=u===void 0?!0:u,h=c.mergeProps,m=h===void 0?!1:h,$=a?F._useDefaultPT(o,o.defaultPT(),l,i,s):void 0,w=F._usePT(o,F._getPT(r,o.$name),l,i,W(W({},s),{},{global:$||{}})),O=F._getPTDatasets(o,i);return d||!d&&w?m?F._mergeProps(o,m,$,w,O):W(W(W({},$),w),O):W(W({},w),O)},_getPTDatasets:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o="data-pc-";return W(W({},n==="root"&&Yo({},"".concat(o,"name"),rt(t.$name))),{},Yo({},"".concat(o,"section"),rt(n)))},_getPT:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,r=function(s){var a,l=o?o(s):s,c=rt(n);return(a=l?.[c])!==null&&a!==void 0?a:l};return t&&Object.hasOwn(t,"_usept")?{_usept:t._usept,originalValue:r(t.originalValue),value:r(t.value)}:r(t)},_usePT:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,s=function(O){return o(O,r,i)};if(n&&Object.hasOwn(n,"_usept")){var a,l=n._usept||((a=t.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},c=l.mergeSections,u=c===void 0?!0:c,d=l.mergeProps,h=d===void 0?!1:d,m=s(n.originalValue),$=s(n.value);return m===void 0&&$===void 0?void 0:Ie($)?$:Ie(m)?m:u||!u&&$?h?F._mergeProps(t,h,m,$):W(W({},m),$):$}return s(n)},_useDefaultPT:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return F._usePT(t,n,o,r,i)},_loadStyles:function(){var t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=F._getConfig(o,r),s={nonce:i==null||(t=i.csp)===null||t===void 0?void 0:t.nonce};F._loadCoreStyles(n,s),F._loadThemeStyles(n,s),F._loadScopedThemeStyles(n,s),F._removeThemeListeners(n),n.$loadStyles=function(){return F._loadThemeStyles(n,s)},F._themeChangeListener(n.$loadStyles)},_loadCoreStyles:function(){var t,n,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(!kt.isStyleNameLoaded((t=o.$style)===null||t===void 0?void 0:t.name)&&(n=o.$style)!==null&&n!==void 0&&n.name){var i;oe.loadCSS(r),(i=o.$style)===null||i===void 0||i.loadCSS(r),kt.setLoadedStyleName(o.$style.name)}},_loadThemeStyles:function(){var t,n,o,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!(r!=null&&r.isUnstyled()||(r==null||(t=r.theme)===null||t===void 0?void 0:t.call(r))==="none")){if(!Y.isStyleNameLoaded("common")){var s,a,l=((s=r.$style)===null||s===void 0||(a=s.getCommonTheme)===null||a===void 0?void 0:a.call(s))||{},c=l.primitive,u=l.semantic,d=l.global,h=l.style;oe.load(c?.css,W({name:"primitive-variables"},i)),oe.load(u?.css,W({name:"semantic-variables"},i)),oe.load(d?.css,W({name:"global-variables"},i)),oe.loadStyle(W({name:"global-style"},i),h),Y.setLoadedStyleName("common")}if(!Y.isStyleNameLoaded((n=r.$style)===null||n===void 0?void 0:n.name)&&(o=r.$style)!==null&&o!==void 0&&o.name){var m,$,w,O,C=((m=r.$style)===null||m===void 0||($=m.getDirectiveTheme)===null||$===void 0?void 0:$.call(m))||{},A=C.css,L=C.style;(w=r.$style)===null||w===void 0||w.load(A,W({name:"".concat(r.$style.name,"-variables")},i)),(O=r.$style)===null||O===void 0||O.loadStyle(W({name:"".concat(r.$style.name,"-style")},i),L),Y.setLoadedStyleName(r.$style.name)}if(!Y.isStyleNameLoaded("layer-order")){var b,E,ee=(b=r.$style)===null||b===void 0||(E=b.getLayerOrderThemeCSS)===null||E===void 0?void 0:E.call(b);oe.load(ee,W({name:"layer-order",first:!0},i)),Y.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,o=t.preset();if(o&&t.$attrSelector){var r,i,s,a=((r=t.$style)===null||r===void 0||(i=r.getPresetTheme)===null||i===void 0?void 0:i.call(r,o,"[".concat(t.$attrSelector,"]")))||{},l=a.css,c=(s=t.$style)===null||s===void 0?void 0:s.load(l,W({name:"".concat(t.$attrSelector,"-").concat(t.$style.name)},n));t.scopedStyleEl=c.el}},_themeChangeListener:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};kt.clearLoadedStyleNames(),he.on("theme:change",t)},_removeThemeListeners:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};he.off("theme:change",t.$loadStyles),t.$loadStyles=void 0},_hook:function(t,n,o,r,i,s){var a,l,c="on".concat(qu(n)),u=F._getConfig(r,i),d=o?.$instance,h=F._usePT(d,F._getPT(r==null||(a=r.value)===null||a===void 0?void 0:a.pt,t),F._getOptionValue,"hooks.".concat(c)),m=F._useDefaultPT(d,u==null||(l=u.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[t],F._getOptionValue,"hooks.".concat(c)),$={el:o,binding:r,vnode:i,prevVnode:s};h?.(d,$),m?.(d,$)},_mergeProps:function(){for(var t=arguments.length>1?arguments[1]:void 0,n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return _r(t)?t.apply(void 0,o):X.apply(void 0,o)},_extend:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=function(a,l,c,u,d){var h,m,$,w;l._$instances=l._$instances||{};var O=F._getConfig(c,u),C=l._$instances[t]||{},A=Ht(C)?W(W({},n),n?.methods):{};l._$instances[t]=W(W({},C),{},{$name:t,$host:l,$binding:c,$modifiers:c?.modifiers,$value:c?.value,$el:C.$el||l||void 0,$style:W({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},n?.style),$primevueConfig:O,$attrSelector:(h=l.$pd)===null||h===void 0||(h=h[t])===null||h===void 0?void 0:h.attrSelector,defaultPT:function(){return F._getPT(O?.pt,void 0,function(b){var E;return b==null||(E=b.directives)===null||E===void 0?void 0:E[t]})},isUnstyled:function(){var b,E;return((b=l._$instances[t])===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.unstyled)!==void 0?(E=l._$instances[t])===null||E===void 0||(E=E.$binding)===null||E===void 0||(E=E.value)===null||E===void 0?void 0:E.unstyled:O?.unstyled},theme:function(){var b;return(b=l._$instances[t])===null||b===void 0||(b=b.$primevueConfig)===null||b===void 0?void 0:b.theme},preset:function(){var b;return(b=l._$instances[t])===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.dt},ptm:function(){var b,E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",ee=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return F._getPTValue(l._$instances[t],(b=l._$instances[t])===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.pt,E,W({},ee))},ptmo:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",ee=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return F._getPTValue(l._$instances[t],b,E,ee,!1)},cx:function(){var b,E,ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",ie=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(b=l._$instances[t])!==null&&b!==void 0&&b.isUnstyled()?void 0:F._getOptionValue((E=l._$instances[t])===null||E===void 0||(E=E.$style)===null||E===void 0?void 0:E.classes,ee,W({},ie))},sx:function(){var b,E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",ee=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,ie=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return ee?F._getOptionValue((b=l._$instances[t])===null||b===void 0||(b=b.$style)===null||b===void 0?void 0:b.inlineStyles,E,W({},ie)):void 0}},A),l.$instance=l._$instances[t],(m=($=l.$instance)[a])===null||m===void 0||m.call($,l,c,u,d),l["$".concat(t)]=l.$instance,F._hook(t,a,l,c,u,d),l.$pd||(l.$pd={}),l.$pd[t]=W(W({},(w=l.$pd)===null||w===void 0?void 0:w[t]),{},{name:t,instance:l._$instances[t]})},r=function(a){var l,c,u,d=a._$instances[t],h=d?.watch,m=function(O){var C,A=O.newValue,L=O.oldValue;return h==null||(C=h.config)===null||C===void 0?void 0:C.call(d,A,L)},$=function(O){var C,A=O.newValue,L=O.oldValue;return h==null||(C=h["config.ripple"])===null||C===void 0?void 0:C.call(d,A,L)};d.$watchersCallback={config:m,"config.ripple":$},h==null||(l=h.config)===null||l===void 0||l.call(d,d?.$primevueConfig),Ot.on("config:change",m),h==null||(c=h["config.ripple"])===null||c===void 0||c.call(d,d==null||(u=d.$primevueConfig)===null||u===void 0?void 0:u.ripple),Ot.on("config:ripple:change",$)},i=function(a){var l=a._$instances[t].$watchersCallback;l&&(Ot.off("config:change",l.config),Ot.off("config:ripple:change",l["config.ripple"]),a._$instances[t].$watchersCallback=void 0)};return{created:function(a,l,c,u){a.$pd||(a.$pd={}),a.$pd[t]={name:t,attrSelector:Ju("pd")},o("created",a,l,c,u)},beforeMount:function(a,l,c,u){var d;F._loadStyles((d=a.$pd[t])===null||d===void 0?void 0:d.instance,l,c),o("beforeMount",a,l,c,u),r(a)},mounted:function(a,l,c,u){var d;F._loadStyles((d=a.$pd[t])===null||d===void 0?void 0:d.instance,l,c),o("mounted",a,l,c,u)},beforeUpdate:function(a,l,c,u){o("beforeUpdate",a,l,c,u)},updated:function(a,l,c,u){var d;F._loadStyles((d=a.$pd[t])===null||d===void 0?void 0:d.instance,l,c),o("updated",a,l,c,u)},beforeUnmount:function(a,l,c,u){var d;i(a),F._removeThemeListeners((d=a.$pd[t])===null||d===void 0?void 0:d.instance),o("beforeUnmount",a,l,c,u)},unmounted:function(a,l,c,u){var d;(d=a.$pd[t])===null||d===void 0||(d=d.instance)===null||d===void 0||(d=d.scopedStyleEl)===null||d===void 0||(d=d.value)===null||d===void 0||d.remove(),o("unmounted",a,l,c,u)}}},extend:function(){var t=F._getMeta.apply(F,arguments),n=ki(t,2),o=n[0],r=n[1];return W({extend:function(){var s=F._getMeta.apply(F,arguments),a=ki(s,2),l=a[0],c=a[1];return F.extend(l,W(W(W({},r),r?.methods),c))}},F._extend(o,r))}},td=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,nd={root:"p-ink"},od=oe.extend({name:"ripple-directive",style:td,classes:nd}),rd=F.extend({style:od});function An(e){"@babel/helpers - typeof";return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},An(e)}function id(e){return ud(e)||ad(e)||ld(e)||sd()}function sd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ld(e,t){if(e){if(typeof e=="string")return Qo(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Qo(e,t):void 0}}function ad(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ud(e){if(Array.isArray(e))return Qo(e)}function Qo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function Ti(e,t,n){return(t=cd(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cd(e){var t=dd(e,"string");return An(t)=="symbol"?t:t+""}function dd(e,t){if(An(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(An(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var fd=rd.extend("ripple",{watch:{"config.ripple":function(t){t?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(t){this.remove(t)},timeout:void 0,methods:{bindEvents:function(t){t.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(t){t.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(t){var n=this.getInk(t);n||(n=Lu("span",Ti(Ti({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root"))),t.appendChild(n),this.$el=n)},remove:function(t){var n=this.getInk(t);n&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(t),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(t){var n=this,o=t.currentTarget,r=this.getInk(o);if(!(!r||getComputedStyle(r,null).display==="none")){if(!this.isUnstyled()&&Io(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"),!ii(r)&&!si(r)){var i=Math.max(ju(o),Ru(o));r.style.height=i+"px",r.style.width=i+"px"}var s=Du(o),a=t.pageX-s.left+document.body.scrollTop-si(r)/2,l=t.pageY-s.top+document.body.scrollLeft-ii(r)/2;r.style.top=l+"px",r.style.left=a+"px",!this.isUnstyled()&&Au(r,"p-ink-active"),r.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){r&&(!n.isUnstyled()&&Io(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(t){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&Io(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(t){return t&&t.children?id(t.children).find(function(n){return Mu(n,"data-pc-name")==="ripple"}):void 0}}}),pd=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: " ";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;function jn(e){"@babel/helpers - typeof";return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn(e)}function et(e,t,n){return(t=hd(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hd(e){var t=md(e,"string");return jn(t)=="symbol"?t:t+""}function md(e,t){if(jn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(jn(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var gd={root:function(t){var n=t.instance,o=t.props;return["p-button p-component",et(et(et(et(et(et(et(et(et({"p-button-icon-only":n.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link||o.variant==="link"},"p-button-".concat(o.severity),o.severity),"p-button-raised",o.raised),"p-button-rounded",o.rounded),"p-button-text",o.text||o.variant==="text"),"p-button-outlined",o.outlined||o.variant==="outlined"),"p-button-sm",o.size==="small"),"p-button-lg",o.size==="large"),"p-button-plain",o.plain),"p-button-fluid",n.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(t){var n=t.props;return["p-button-icon",et({},"p-button-icon-".concat(n.iconPos),n.label)]},label:"p-button-label"},bd=oe.extend({name:"button",style:pd,classes:gd}),vd={name:"BaseButton",extends:Vn,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:bd,provide:function(){return{$pcButton:this,$parentInstance:this}}};function En(e){"@babel/helpers - typeof";return En=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},En(e)}function Ae(e,t,n){return(t=yd(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function yd(e){var t=_d(e,"string");return En(t)=="symbol"?t:t+""}function _d(e,t){if(En(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(En(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var eo={name:"Button",extends:vd,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return X(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return Ht(this.fluid)?!!this.$pcFluid:this.fluid},dataP:function(){return en(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae(Ae({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge),"loading",this.loading),"fluid",this.hasFluid),"rounded",this.rounded),"raised",this.raised),"outlined",this.outlined||this.variant==="outlined"),"text",this.text||this.variant==="text"),"link",this.link||this.variant==="link"),"vertical",(this.iconPos==="top"||this.iconPos==="bottom")&&this.label))},dataIconP:function(){return en(Ae(Ae({},this.iconPos,this.iconPos),this.size,this.size))},dataLabelP:function(){return en(Ae(Ae({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge))}},components:{SpinnerIcon:Xs,Badge:el},directives:{ripple:fd}},Sd=["data-p"],$d=["data-p"];function wd(e,t,n,o,r,i){var s=Ir("SpinnerIcon"),a=Ir("Badge"),l=ma("ripple");return e.asChild?We(e.$slots,"default",{key:1,class:Vt(e.cx("root")),a11yAttrs:i.a11yAttrs}):ql((D(),mt(ms(e.as),X({key:0,class:e.cx("root"),"data-p":i.dataP},i.attrs),{default:Mt(function(){return[We(e.$slots,"default",{},function(){return[e.loading?We(e.$slots,"loadingicon",X({key:0,class:[e.cx("loadingIcon"),e.cx("icon")]},e.ptm("loadingIcon")),function(){return[e.loadingIcon?(D(),H("span",X({key:0,class:[e.cx("loadingIcon"),e.cx("icon"),e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(D(),mt(s,X({key:1,class:[e.cx("loadingIcon"),e.cx("icon")],spin:""},e.ptm("loadingIcon")),null,16,["class"]))]}):We(e.$slots,"icon",X({key:1,class:[e.cx("icon")]},e.ptm("icon")),function(){return[e.icon?(D(),H("span",X({key:0,class:[e.cx("icon"),e.icon,e.iconClass],"data-p":i.dataIconP},e.ptm("icon")),null,16,Sd)):ve("",!0)]}),e.label?(D(),H("span",X({key:2,class:e.cx("label")},e.ptm("label"),{"data-p":i.dataLabelP}),le(e.label),17,$d)):ve("",!0),e.badge?(D(),mt(a,{key:3,value:e.badge,class:Vt(e.badgeClass),severity:e.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):ve("",!0)]})]}),_:3},16,["class","data-p"])),[[l]])}eo.render=wd;const xd={class:"presentation-section"},kd={class:"presentation-content"},Pd={class:"presentation-actions"},Od={__name:"PresentationSection",setup(e){function t(){window.location.href="mailto:jorgeperez96jpl@gmail.com"}function n(){window.open("https://www.linkedin.com/in/jorpelu/","_blank")}function o(){window.open("https://github.com/vigliom","_blank")}return(r,i)=>(D(),H("section",xd,[i[2]||(i[2]=j("div",{class:"presentation-bg"},null,-1)),j("div",kd,[i[0]||(i[0]=j("h2",{class:"presentation-title"},"¡Hola! Soy Jorge Pérez Ludeña",-1)),i[1]||(i[1]=j("p",{class:"presentation-bio"}," Full Stack Developer orientado a backend, apasionado por crear sistemas completos, eficientes y mantenibles. Me especializo en transformar problemas complejos en soluciones limpias y escalables, desde el diseño de APIs robustas hasta la entrega de interfaces intuitivas. Mi motivación es construir software que resuelva problemas reales de negocio y escale en el tiempo. ",-1)),j("div",Pd,[ue(ht(eo),{label:"Contactar",icon:"pi pi-envelope",class:"p-button-rounded p-button-outlined",onClick:t}),ue(ht(eo),{label:"LinkedIn",icon:"pi pi-linkedin",class:"p-button-rounded p-button-secondary",onClick:n}),ue(ht(eo),{label:"GitHub",icon:"pi pi-github",class:"p-button-rounded p-button-help",onClick:o})])])]))}},Td=Bt(Od,[["__scopeId","data-v-2bb732eb"]]),Ci=[{nombre:"Amparo & Company",titulo:"amparoandcompany.com",descripcion:"Landing page interactiva que conecta y monitoriza todos los servicios del ecosistema. Visualización tipo hub, matriz de servicios, indicadores de estado y modal de ecosistema completo.",url:"https://github.com/vigliom/amparoandcompany",preview:"https://www.amparoandcompany.com",stack:["HTML5","Tailwind CSS","JavaScript","SVG"],tipo:"ecosistema",badge:"Landing Hub",destacado:!0,logros:["Renderizado dinámico de servicios y conexiones SVG animadas","Ping automático y badges de estado en tiempo real","Diseño responsive y modular"],meta:"PWA-ready"},{nombre:"ValePorMil",titulo:"ValePorMil",descripcion:"Sistema completo para crear y gestionar vales digitales canjeables con integración de Google Calendar. Sistema de roles (admin/usuario) y persistencia client-side.",url:"https://github.com/vigliom/ValePorMil",preview:"https://canjearvales.amparoandcompany.com",stack:["Vue 3","Vite","JavaScript","localStorage","Google Calendar API"],tipo:"ecosistema",badge:"Vales Digitales",destacado:!1,logros:["Sistema de roles completo (admin/user) sin backend","Persistencia 100% client-side con localStorage","Integración bidireccional con Google Calendar","Generación dinámica de archivos .ics"],meta:"Client-side · PWA-ready"},{nombre:"La Cocina de Amparo",titulo:"La Cocina de Amparo",descripcion:"Aplicación web de recetas con panel de administración integrado, sistema de backup/restore automático y persistencia innovadora usando GitHub Gists API como base de datos.",url:"https://github.com/vigliom/LaCocinaDeAmparo",preview:"https://recetas.amparoandcompany.com",stack:["Vue 3","Express.js","Node.js","GitHub Gists API","Docker"],tipo:"ecosistema",badge:"Recetas Inteligente",destacado:!1,logros:["GitHub Gists como base de datos en producción","Panel Admin integrado con CRUD completo","Sistema de backup/restore con Base64","Deployment con Docker en Fly.io/Render"],meta:"SPA · Gists Storage"},{nombre:"Personalized Product Steps",titulo:"Personalized Product Steps",descripcion:"Generador de pasos personalizados para productos, con lógica dinámica y adaptable.",url:"https://github.com/vigliom/personalized-product-steps",preview:null,stack:["Vue","Node.js","MongoDB"],tipo:"proyecto",badge:null,destacado:!1,logros:[],meta:"Open Source"}],Cd={id:"proyectos"},Ad={class:"ecosystem-grid"},jd={class:"ecosystem-header"},Ed={class:"ecosystem-badge"},Id=["href"],Ld={class:"ecosystem-meta"},Nd={class:"meta-stack"},Md={class:"meta-type"},Dd={class:"ecosystem-desc"},Rd={key:0,class:"ecosystem-list"},Vd={class:"ecosystem-footer"},Fd=["href"],Bd=["href"],Hd={key:0,class:"projects-title",style:{"margin-top":"3.5rem"}},Ud={key:1,class:"projects-grid"},zd={class:"project-header"},Wd=["href"],Kd={class:"project-meta"},Gd={class:"meta-stack"},qd={class:"project-desc-custom"},Jd={class:"project-footer"},Yd=["href"],Qd=["href"],Zd={__name:"ProjectsSection",setup(e){const t=Wo(()=>Ci.filter(o=>o.tipo==="ecosistema")),n=Wo(()=>Ci.filter(o=>o.tipo!=="ecosistema"));return(o,r)=>(D(),H("section",Cd,[r[5]||(r[5]=j("h2",{class:"projects-title"},"🚀 Ecosistema Amparo & Company",-1)),r[6]||(r[6]=j("p",{class:"ecosystem-intro"},[nt(" Ecosistema digital modular en "),j("strong",null,"producción real"),nt(", con aplicaciones interconectadas, arquitectura robusta y enfoque en fiabilidad, seguridad y escalabilidad. ")],-1)),j("div",Ad,[(D(!0),H(ce,null,Zt(t.value,i=>(D(),H("div",{key:i.url,class:Vt(["ecosystem-card",{"main-hub":i.destacado}])},[j("div",jd,[j("span",Ed,le(i.badge),1),j("a",{href:i.preview||i.url,target:"_blank",rel:"noopener",class:"ecosystem-title"},le(i.titulo),9,Id)]),j("div",Ld,[j("span",Nd,le(i.stack.join(" + ")),1),r[0]||(r[0]=j("span",{class:"meta-dot"},"·",-1)),j("span",Md,le(i.meta),1)]),j("p",Dd,le(i.descripcion),1),i.logros.length>0?(D(),H("ul",Rd,[(D(!0),H(ce,null,Zt(i.logros,(s,a)=>(D(),H("li",{key:a},le(s),1))),128))])):ve("",!0),j("div",Vd,[i.preview?(D(),H("a",{key:0,href:i.preview,target:"_blank",rel:"noopener",class:"demo-btn-modern"},[...r[1]||(r[1]=[j("i",{class:"pi pi-desktop"},null,-1),nt(),j("span",null,"Ver demo",-1),nt(),j("i",{class:"pi pi-external-link external-link-icon"},null,-1)])],8,Fd)):ve("",!0),j("a",{href:i.url,target:"_blank",rel:"noopener",class:"github-btn-modern"},[...r[2]||(r[2]=[j("i",{class:"pi pi-github"},null,-1),nt(),j("span",null,"GitHub",-1),nt(),j("i",{class:"pi pi-external-link external-link-icon"},null,-1)])],8,Bd)])],2))),128))]),r[7]||(r[7]=vr('<div class="ecosystem-highlights" data-v-5c0c1471><div class="highlight-item" data-v-5c0c1471>🏗️ Arquitectura modular</div><div class="highlight-item" data-v-5c0c1471>🔄 Microservicios</div><div class="highlight-item" data-v-5c0c1471>🔐 Seguridad</div><div class="highlight-item" data-v-5c0c1471>📊 Monitoreo</div><div class="highlight-item" data-v-5c0c1471>🎨 UX consistente</div><div class="highlight-item" data-v-5c0c1471>🚀 Producción real</div></div>',1)),n.value.length>0?(D(),H("h2",Hd,"💼 Otros Proyectos Destacados")):ve("",!0),n.value.length>0?(D(),H("div",Ud,[(D(!0),H(ce,null,Zt(n.value,i=>(D(),H("div",{key:i.url,class:"project-card-custom"},[j("div",zd,[j("a",{href:i.preview||i.url,target:"_blank",rel:"noopener",class:"project-title-custom card-title-link"},le(i.nombre),9,Wd)]),j("div",Kd,[j("span",Gd,le(i.stack.join(" + ")),1)]),j("p",qd,le(i.descripcion),1),j("div",Jd,[i.preview?(D(),H("a",{key:0,href:i.preview,target:"_blank",rel:"noopener",class:"demo-btn-modern"},[...r[3]||(r[3]=[j("i",{class:"pi pi-desktop"},null,-1),j("span",null,"Ver demo",-1),j("i",{class:"pi pi-external-link external-link-icon"},null,-1)])],8,Yd)):ve("",!0),j("a",{href:i.url,target:"_blank",rel:"noopener",class:"github-btn-modern"},[...r[4]||(r[4]=[j("i",{class:"pi pi-github"},null,-1),j("span",null,"GitHub",-1),j("i",{class:"pi pi-external-link external-link-icon"},null,-1)])],8,Qd)])]))),128))])):ve("",!0)]))}},Xd=Bt(Zd,[["__scopeId","data-v-5c0c1471"]]),ef=[{empresa:"Farmatic by Consoft",puesto:"Programador informático",periodo:"junio 2023 - Presente",descripcion:"Desarrollo de software para el sector farmacéutico en Dénia, Comunidad Valenciana."},{empresa:"ALDI ESPAÑA",puesto:"2nd Assistant",periodo:"enero 2021 - julio 2023",descripcion:"Gestión de equipo y operaciones en tienda en Burjassot, Comunidad Valenciana."},{empresa:"ALDI ESPAÑA",puesto:"Vendedor",periodo:"junio 2018 - enero 2021",descripcion:"Atención al cliente y ventas en Dénia, Comunidad Valenciana."},{empresa:"Carrefour España",puesto:"Reponedor",periodo:"julio 2017 - septiembre 2017",descripcion:"Reposición de productos en Ondara, Comunidad Valenciana."}],tf={id:"trabajos"},nf={class:"exp-timeline"},of={class:"exp-content"},rf={class:"exp-header"},sf={class:"exp-puesto"},lf={class:"exp-periodo"},af={class:"exp-empresa"},uf={class:"exp-desc"},cf={__name:"ExperienceSection",setup(e){return(t,n)=>(D(),H("section",tf,[n[1]||(n[1]=j("h2",{class:"exp-title"},"Experiencia Laboral",-1)),j("div",nf,[(D(!0),H(ce,null,Zt(ht(ef),(o,r)=>(D(),H("div",{key:o.empresa+o.puesto+r,class:"exp-item"},[n[0]||(n[0]=j("div",{class:"exp-dot"},[j("i",{class:"pi pi-briefcase"})],-1)),j("div",of,[j("div",rf,[j("span",sf,le(o.puesto),1),j("span",lf,le(o.periodo),1)]),j("span",af,le(o.empresa),1),j("p",uf,le(o.descripcion),1)])]))),128))])]))}},df=Bt(cf,[["__scopeId","data-v-545de7d4"]]),ff=[{institucion:"IES La mar",titulo:"Ciclo Formativo de Grado Superior, Desarrollo de aplicaciones Multimedia",periodo:"2021 - 2023"}];var pf=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,hf={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},mf=oe.extend({name:"card",style:pf,classes:hf}),gf={name:"BaseCard",extends:Vn,style:mf,provide:function(){return{$pcCard:this,$parentInstance:this}}},tl={name:"Card",extends:gf,inheritAttrs:!1};function bf(e,t,n,o,r,i){return D(),H("div",X({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(D(),H("div",X({key:0,class:e.cx("header")},e.ptm("header")),[We(e.$slots,"header")],16)):ve("",!0),j("div",X({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(D(),H("div",X({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(D(),H("div",X({key:0,class:e.cx("title")},e.ptm("title")),[We(e.$slots,"title")],16)):ve("",!0),e.$slots.subtitle?(D(),H("div",X({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[We(e.$slots,"subtitle")],16)):ve("",!0)],16)):ve("",!0),j("div",X({class:e.cx("content")},e.ptm("content")),[We(e.$slots,"content")],16),e.$slots.footer?(D(),H("div",X({key:1,class:e.cx("footer")},e.ptm("footer")),[We(e.$slots,"footer")],16)):ve("",!0)],16)],16)}tl.render=bf;const vf={id:"estudios"},yf={class:"studies-list"},_f={class:"institucion"},Sf={class:"periodo"},$f={__name:"StudiesSection",setup(e){return(t,n)=>(D(),H("section",vf,[n[0]||(n[0]=j("h2",null,"Formación Académica",-1)),j("div",yf,[(D(!0),H(ce,null,Zt(ht(ff),o=>(D(),mt(ht(tl),{key:o.titulo,class:"study-card"},{title:Mt(()=>[nt(le(o.titulo),1)]),content:Mt(()=>[j("p",_f,le(o.institucion),1),j("p",Sf,le(o.periodo),1)]),_:2},1024))),128))])]))}},wf=Bt($f,[["__scopeId","data-v-c4909853"]]),xf=[{nombre:"JavaScript",nivel:"Avanzado"},{nombre:"Vue.js",nivel:"Avanzado"},{nombre:"React",nivel:"Intermedio"},{nombre:"PHP",nivel:"Avanzado"},{nombre:"C#",nivel:"Intermedio"},{nombre:".NET Core",nivel:"Intermedio"},{nombre:"Python",nivel:"Intermedio"},{nombre:"Java",nivel:"Básico"},{nombre:"Laravel",nivel:"Intermedio"},{nombre:"Spring Boot",nivel:"Básico"},{nombre:"MySQL",nivel:"Avanzado"},{nombre:"SQL Server",nivel:"Intermedio"},{nombre:"Redis",nivel:"Básico"},{nombre:"Docker",nivel:"Intermedio"},{nombre:"AWS",nivel:"Básico"},{nombre:"Azure",nivel:"Básico"},{nombre:"GitHub Actions",nivel:"Intermedio"},{nombre:"API REST",nivel:"Avanzado"},{nombre:"Clean Architecture",nivel:"Intermedio"},{nombre:"CI/CD",nivel:"Intermedio"}];var kf=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,Pf={root:function(t){var n=t.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Of=oe.extend({name:"tag",style:kf,classes:Pf}),Tf={name:"BaseTag",extends:Vn,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Of,provide:function(){return{$pcTag:this,$parentInstance:this}}};function In(e){"@babel/helpers - typeof";return In=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},In(e)}function Cf(e,t,n){return(t=Af(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Af(e){var t=jf(e,"string");return In(t)=="symbol"?t:t+""}function jf(e,t){if(In(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(In(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var nl={name:"Tag",extends:Tf,inheritAttrs:!1,computed:{dataP:function(){return en(Cf({rounded:this.rounded},this.severity,this.severity))}}},Ef=["data-p"];function If(e,t,n,o,r,i){return D(),H("span",X({class:e.cx("root"),"data-p":i.dataP},e.ptmi("root")),[e.$slots.icon?(D(),mt(ms(e.$slots.icon),X({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(D(),H("span",X({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):ve("",!0),e.value!=null||e.$slots.default?We(e.$slots,"default",{key:2},function(){return[j("span",X({class:e.cx("label")},e.ptm("label")),le(e.value),17)]}):ve("",!0)],16,Ef)}nl.render=If;const Lf={id:"conocimientos"},Nf={class:"skills-grid"},Mf={class:"nivel"},Df={__name:"SkillsSection",setup(e){function t(o){return o==="Avanzado"?"success":o==="Intermedio"?"info":"warning"}function n(o){return{JavaScript:"pi pi-code","Vue.js":"pi pi-desktop",React:"pi pi-bolt",PHP:"pi pi-server","C#":"pi pi-cog",Python:"pi pi-database",Java:"pi pi-mobile",MySQL:"pi pi-database","SQL Server":"pi pi-database",Docker:"pi pi-box",AWS:"pi pi-cloud",Azure:"pi pi-cloud","GitHub Actions":"pi pi-github","API REST":"pi pi-link",Laravel:"pi pi-server","Spring Boot":"pi pi-server",Redis:"pi pi-database","Clean Architecture":"pi pi-sitemap","CI/CD":"pi pi-sliders-h",".NET Core":"pi pi-cog"}[o]||""}return(o,r)=>(D(),H("section",Lf,[r[0]||(r[0]=j("h2",null,"Conocimientos y Skills",-1)),j("div",Nf,[(D(!0),H(ce,null,Zt(ht(xf),i=>(D(),mt(ht(nl),{key:i.nombre,value:i.nombre,severity:t(i.nivel),class:"skill-tag"},{icon:Mt(()=>[n(i.nombre)?(D(),H("i",{key:0,class:Vt(n(i.nombre)),style:{"margin-right":"0.5rem"}},null,2)):ve("",!0)]),default:Mt(()=>[nt(le(i.nombre),1)]),value:Mt(()=>[j("span",Mf,le(i.nivel),1)]),_:2},1032,["value","severity"]))),128))])]))}},Rf=Bt(Df,[["__scopeId","data-v-05a463a3"]]),Vf={__name:"App",setup(e){return(t,n)=>(D(),H(ce,null,[ue(Tu),j("main",null,[ue(Td),ue(Xd),ue(df),ue(wf),ue(Rf)]),n[0]||(n[0]=vr('<footer class="main-footer" data-v-3ecd2150><div class="footer-content" data-v-3ecd2150><span class="footer-brand" data-v-3ecd2150>Vigliom Solutions</span><span class="footer-separator" data-v-3ecd2150>·</span><span class="footer-copy" data-v-3ecd2150>© 2026</span><a href="https://github.com/vigliom" target="_blank" rel="noopener" class="footer-link" aria-label="GitHub" data-v-3ecd2150><i class="pi pi-github" data-v-3ecd2150></i></a><a href="https://www.linkedin.com/in/vigliom/" target="_blank" rel="noopener" class="footer-link" aria-label="LinkedIn" data-v-3ecd2150><i class="pi pi-linkedin" data-v-3ecd2150></i></a><a href="mailto:vigliom@gmail.com" class="footer-link" aria-label="Email" data-v-3ecd2150><i class="pi pi-envelope" data-v-3ecd2150></i></a></div></footer>',1))],64))}},Ff=Bt(Vf,[["__scopeId","data-v-3ecd2150"]]);var ge={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function Ln(e){"@babel/helpers - typeof";return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ln(e)}function Ai(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function qn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ai(Object(n),!0).forEach(function(o){Bf(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ai(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Bf(e,t,n){return(t=Hf(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hf(e){var t=Uf(e,"string");return Ln(t)=="symbol"?t:t+""}function Uf(e,t){if(Ln(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(Ln(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var zf={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[ge.STARTS_WITH,ge.CONTAINS,ge.NOT_CONTAINS,ge.ENDS_WITH,ge.EQUALS,ge.NOT_EQUALS],numeric:[ge.EQUALS,ge.NOT_EQUALS,ge.LESS_THAN,ge.LESS_THAN_OR_EQUAL_TO,ge.GREATER_THAN,ge.GREATER_THAN_OR_EQUAL_TO],date:[ge.DATE_IS,ge.DATE_IS_NOT,ge.DATE_BEFORE,ge.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},Wf=Symbol();function Kf(e,t){var n={config:bo(t)};return e.config.globalProperties.$primevue=n,e.provide(Wf,n),Gf(),qf(e,n),n}var Gt=[];function Gf(){he.clear(),Gt.forEach(function(e){return e?.()}),Gt=[]}function qf(e,t){var n=Jn(!1),o=function(){var c;if(((c=t.config)===null||c===void 0?void 0:c.theme)!=="none"&&!Y.isStyleNameLoaded("common")){var u,d,h=((u=oe.getCommonTheme)===null||u===void 0?void 0:u.call(oe))||{},m=h.primitive,$=h.semantic,w=h.global,O=h.style,C={nonce:(d=t.config)===null||d===void 0||(d=d.csp)===null||d===void 0?void 0:d.nonce};oe.load(m?.css,qn({name:"primitive-variables"},C)),oe.load($?.css,qn({name:"semantic-variables"},C)),oe.load(w?.css,qn({name:"global-variables"},C)),oe.loadStyle(qn({name:"global-style"},C),O),Y.setLoadedStyleName("common")}};he.on("theme:change",function(l){n.value||(e.config.globalProperties.$primevue.config.theme=l,n.value=!0)});var r=Pt(t.config,function(l,c){Ot.emit("config:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),i=Pt(function(){return t.config.ripple},function(l,c){Ot.emit("config:ripple:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0}),s=Pt(function(){return t.config.theme},function(l,c){n.value||Y.setTheme(l),t.config.unstyled||o(),n.value=!1,Ot.emit("config:theme:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!1}),a=Pt(function(){return t.config.unstyled},function(l,c){!l&&t.config.theme&&o(),Ot.emit("config:unstyled:change",{newValue:l,oldValue:c})},{immediate:!0,deep:!0});Gt.push(r),Gt.push(i),Gt.push(s),Gt.push(a)}var Jf={install:function(t,n){var o=Gu(zf,n);Kf(t,o)}};const ol=wu(Ff);ol.use(Jf,{ripple:!0,inputStyle:"outlined"});ol.mount("#app");
