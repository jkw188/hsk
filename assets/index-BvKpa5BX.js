(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function i(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=i(a);fetch(a.href,c)}})();function ac(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bu={exports:{}},ls={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf;function T0(){if(Rf)return ls;Rf=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,a,c){var g=null;if(c!==void 0&&(g=""+c),a.key!==void 0&&(g=""+a.key),"key"in a){c={};for(var m in a)m!=="key"&&(c[m]=a[m])}else c=a;return a=c.ref,{$$typeof:n,type:r,key:g,ref:a!==void 0?a:null,props:c}}return ls.Fragment=e,ls.jsx=i,ls.jsxs=i,ls}var Mf;function S0(){return Mf||(Mf=1,bu.exports=T0()),bu.exports}var L=S0(),Ru={exports:{}},at={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf;function _0(){if(Nf)return at;Nf=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),g=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),S=Symbol.iterator;function C(R){return R===null||typeof R!="object"?null:(R=S&&R[S]||R["@@iterator"],typeof R=="function"?R:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function U(R,F,$){this.props=R,this.context=F,this.refs=x,this.updater=$||A}U.prototype.isReactComponent={},U.prototype.setState=function(R,F){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,F,"setState")},U.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function Y(){}Y.prototype=U.prototype;function P(R,F,$){this.props=R,this.context=F,this.refs=x,this.updater=$||A}var J=P.prototype=new Y;J.constructor=P,M(J,U.prototype),J.isPureReactComponent=!0;var Q=Array.isArray;function V(){}var K={H:null,A:null,T:null,S:null},rt=Object.prototype.hasOwnProperty;function j(R,F,$){var et=$.ref;return{$$typeof:n,type:R,key:F,ref:et!==void 0?et:null,props:$}}function ut(R,F){return j(R.type,F,R.props)}function Tt(R){return typeof R=="object"&&R!==null&&R.$$typeof===n}function bt(R){var F={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function($){return F[$]})}var Nt=/\/+/g;function St(R,F){return typeof R=="object"&&R!==null&&R.key!=null?bt(""+R.key):F.toString(36)}function Rt(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(V,V):(R.status="pending",R.then(function(F){R.status==="pending"&&(R.status="fulfilled",R.value=F)},function(F){R.status==="pending"&&(R.status="rejected",R.reason=F)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function H(R,F,$,et,ct){var dt=typeof R;(dt==="undefined"||dt==="boolean")&&(R=null);var Mt=!1;if(R===null)Mt=!0;else switch(dt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(R.$$typeof){case n:case e:Mt=!0;break;case v:return Mt=R._init,H(Mt(R._payload),F,$,et,ct)}}if(Mt)return ct=ct(R),Mt=et===""?"."+St(R,0):et,Q(ct)?($="",Mt!=null&&($=Mt.replace(Nt,"$&/")+"/"),H(ct,F,$,"",function(mi){return mi})):ct!=null&&(Tt(ct)&&(ct=ut(ct,$+(ct.key==null||R&&R.key===ct.key?"":(""+ct.key).replace(Nt,"$&/")+"/")+Mt)),F.push(ct)),1;Mt=0;var le=et===""?".":et+":";if(Q(R))for(var Ot=0;Ot<R.length;Ot++)et=R[Ot],dt=le+St(et,Ot),Mt+=H(et,F,$,dt,ct);else if(Ot=C(R),typeof Ot=="function")for(R=Ot.call(R),Ot=0;!(et=R.next()).done;)et=et.value,dt=le+St(et,Ot++),Mt+=H(et,F,$,dt,ct);else if(dt==="object"){if(typeof R.then=="function")return H(Rt(R),F,$,et,ct);throw F=String(R),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function X(R,F,$){if(R==null)return R;var et=[],ct=0;return H(R,et,"","",function(dt){return F.call($,dt,ct++)}),et}function ot(R){if(R._status===-1){var F=R._result;F=F(),F.then(function($){(R._status===0||R._status===-1)&&(R._status=1,R._result=$)},function($){(R._status===0||R._status===-1)&&(R._status=2,R._result=$)}),R._status===-1&&(R._status=0,R._result=F)}if(R._status===1)return R._result.default;throw R._result}var _t=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},Lt={map:X,forEach:function(R,F,$){X(R,function(){F.apply(this,arguments)},$)},count:function(R){var F=0;return X(R,function(){F++}),F},toArray:function(R){return X(R,function(F){return F})||[]},only:function(R){if(!Tt(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return at.Activity=T,at.Children=Lt,at.Component=U,at.Fragment=i,at.Profiler=a,at.PureComponent=P,at.StrictMode=r,at.Suspense=y,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,at.__COMPILER_RUNTIME={__proto__:null,c:function(R){return K.H.useMemoCache(R)}},at.cache=function(R){return function(){return R.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(R,F,$){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var et=M({},R.props),ct=R.key;if(F!=null)for(dt in F.key!==void 0&&(ct=""+F.key),F)!rt.call(F,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&F.ref===void 0||(et[dt]=F[dt]);var dt=arguments.length-2;if(dt===1)et.children=$;else if(1<dt){for(var Mt=Array(dt),le=0;le<dt;le++)Mt[le]=arguments[le+2];et.children=Mt}return j(R.type,ct,et)},at.createContext=function(R){return R={$$typeof:g,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:c,_context:R},R},at.createElement=function(R,F,$){var et,ct={},dt=null;if(F!=null)for(et in F.key!==void 0&&(dt=""+F.key),F)rt.call(F,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(ct[et]=F[et]);var Mt=arguments.length-2;if(Mt===1)ct.children=$;else if(1<Mt){for(var le=Array(Mt),Ot=0;Ot<Mt;Ot++)le[Ot]=arguments[Ot+2];ct.children=le}if(R&&R.defaultProps)for(et in Mt=R.defaultProps,Mt)ct[et]===void 0&&(ct[et]=Mt[et]);return j(R,dt,ct)},at.createRef=function(){return{current:null}},at.forwardRef=function(R){return{$$typeof:m,render:R}},at.isValidElement=Tt,at.lazy=function(R){return{$$typeof:v,_payload:{_status:-1,_result:R},_init:ot}},at.memo=function(R,F){return{$$typeof:f,type:R,compare:F===void 0?null:F}},at.startTransition=function(R){var F=K.T,$={};K.T=$;try{var et=R(),ct=K.S;ct!==null&&ct($,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(V,_t)}catch(dt){_t(dt)}finally{F!==null&&$.types!==null&&(F.types=$.types),K.T=F}},at.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},at.use=function(R){return K.H.use(R)},at.useActionState=function(R,F,$){return K.H.useActionState(R,F,$)},at.useCallback=function(R,F){return K.H.useCallback(R,F)},at.useContext=function(R){return K.H.useContext(R)},at.useDebugValue=function(){},at.useDeferredValue=function(R,F){return K.H.useDeferredValue(R,F)},at.useEffect=function(R,F){return K.H.useEffect(R,F)},at.useEffectEvent=function(R){return K.H.useEffectEvent(R)},at.useId=function(){return K.H.useId()},at.useImperativeHandle=function(R,F,$){return K.H.useImperativeHandle(R,F,$)},at.useInsertionEffect=function(R,F){return K.H.useInsertionEffect(R,F)},at.useLayoutEffect=function(R,F){return K.H.useLayoutEffect(R,F)},at.useMemo=function(R,F){return K.H.useMemo(R,F)},at.useOptimistic=function(R,F){return K.H.useOptimistic(R,F)},at.useReducer=function(R,F,$){return K.H.useReducer(R,F,$)},at.useRef=function(R){return K.H.useRef(R)},at.useState=function(R){return K.H.useState(R)},at.useSyncExternalStore=function(R,F,$){return K.H.useSyncExternalStore(R,F,$)},at.useTransition=function(){return K.H.useTransition()},at.version="19.2.4",at}var If;function lc(){return If||(If=1,Ru.exports=_0()),Ru.exports}var q=lc();const zp=ac(q);var Mu={exports:{}},us={},Nu={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;function E0(){return Df||(Df=1,(function(n){function e(H,X){var ot=H.length;H.push(X);t:for(;0<ot;){var _t=ot-1>>>1,Lt=H[_t];if(0<a(Lt,X))H[_t]=X,H[ot]=Lt,ot=_t;else break t}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var X=H[0],ot=H.pop();if(ot!==X){H[0]=ot;t:for(var _t=0,Lt=H.length,R=Lt>>>1;_t<R;){var F=2*(_t+1)-1,$=H[F],et=F+1,ct=H[et];if(0>a($,ot))et<Lt&&0>a(ct,$)?(H[_t]=ct,H[et]=ot,_t=et):(H[_t]=$,H[F]=ot,_t=F);else if(et<Lt&&0>a(ct,ot))H[_t]=ct,H[et]=ot,_t=et;else break t}}return X}function a(H,X){var ot=H.sortIndex-X.sortIndex;return ot!==0?ot:H.id-X.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var g=Date,m=g.now();n.unstable_now=function(){return g.now()-m}}var y=[],f=[],v=1,T=null,S=3,C=!1,A=!1,M=!1,x=!1,U=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function J(H){for(var X=i(f);X!==null;){if(X.callback===null)r(f);else if(X.startTime<=H)r(f),X.sortIndex=X.expirationTime,e(y,X);else break;X=i(f)}}function Q(H){if(M=!1,J(H),!A)if(i(y)!==null)A=!0,V||(V=!0,bt());else{var X=i(f);X!==null&&Rt(Q,X.startTime-H)}}var V=!1,K=-1,rt=5,j=-1;function ut(){return x?!0:!(n.unstable_now()-j<rt)}function Tt(){if(x=!1,V){var H=n.unstable_now();j=H;var X=!0;try{t:{A=!1,M&&(M=!1,Y(K),K=-1),C=!0;var ot=S;try{e:{for(J(H),T=i(y);T!==null&&!(T.expirationTime>H&&ut());){var _t=T.callback;if(typeof _t=="function"){T.callback=null,S=T.priorityLevel;var Lt=_t(T.expirationTime<=H);if(H=n.unstable_now(),typeof Lt=="function"){T.callback=Lt,J(H),X=!0;break e}T===i(y)&&r(y),J(H)}else r(y);T=i(y)}if(T!==null)X=!0;else{var R=i(f);R!==null&&Rt(Q,R.startTime-H),X=!1}}break t}finally{T=null,S=ot,C=!1}X=void 0}}finally{X?bt():V=!1}}}var bt;if(typeof P=="function")bt=function(){P(Tt)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,St=Nt.port2;Nt.port1.onmessage=Tt,bt=function(){St.postMessage(null)}}else bt=function(){U(Tt,0)};function Rt(H,X){K=U(function(){H(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rt=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function(H){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var ot=S;S=X;try{return H()}finally{S=ot}},n.unstable_requestPaint=function(){x=!0},n.unstable_runWithPriority=function(H,X){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ot=S;S=H;try{return X()}finally{S=ot}},n.unstable_scheduleCallback=function(H,X,ot){var _t=n.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?_t+ot:_t):ot=_t,H){case 1:var Lt=-1;break;case 2:Lt=250;break;case 5:Lt=1073741823;break;case 4:Lt=1e4;break;default:Lt=5e3}return Lt=ot+Lt,H={id:v++,callback:X,priorityLevel:H,startTime:ot,expirationTime:Lt,sortIndex:-1},ot>_t?(H.sortIndex=ot,e(f,H),i(y)===null&&H===i(f)&&(M?(Y(K),K=-1):M=!0,Rt(Q,ot-_t))):(H.sortIndex=Lt,e(y,H),A||C||(A=!0,V||(V=!0,bt()))),H},n.unstable_shouldYield=ut,n.unstable_wrapCallback=function(H){var X=S;return function(){var ot=S;S=X;try{return H.apply(this,arguments)}finally{S=ot}}}})(Iu)),Iu}var kf;function C0(){return kf||(kf=1,Nu.exports=E0()),Nu.exports}var Du={exports:{}},ae={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function A0(){if(Uf)return ae;Uf=1;var n=lc();function e(y){var f="https://react.dev/errors/"+y;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)f+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},a=Symbol.for("react.portal");function c(y,f,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:y,containerInfo:f,implementation:v}}var g=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(y,f){if(y==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ae.createPortal=function(y,f){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(e(299));return c(y,f,null,v)},ae.flushSync=function(y){var f=g.T,v=r.p;try{if(g.T=null,r.p=2,y)return y()}finally{g.T=f,r.p=v,r.d.f()}},ae.preconnect=function(y,f){typeof y=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,r.d.C(y,f))},ae.prefetchDNS=function(y){typeof y=="string"&&r.d.D(y)},ae.preinit=function(y,f){if(typeof y=="string"&&f&&typeof f.as=="string"){var v=f.as,T=m(v,f.crossOrigin),S=typeof f.integrity=="string"?f.integrity:void 0,C=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;v==="style"?r.d.S(y,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:C}):v==="script"&&r.d.X(y,{crossOrigin:T,integrity:S,fetchPriority:C,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},ae.preinitModule=function(y,f){if(typeof y=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var v=m(f.as,f.crossOrigin);r.d.M(y,{crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&r.d.M(y)},ae.preload=function(y,f){if(typeof y=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var v=f.as,T=m(v,f.crossOrigin);r.d.L(y,v,{crossOrigin:T,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},ae.preloadModule=function(y,f){if(typeof y=="string")if(f){var v=m(f.as,f.crossOrigin);r.d.m(y,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else r.d.m(y)},ae.requestFormReset=function(y){r.d.r(y)},ae.unstable_batchedUpdates=function(y,f){return y(f)},ae.useFormState=function(y,f,v){return g.H.useFormState(y,f,v)},ae.useFormStatus=function(){return g.H.useHostTransitionStatus()},ae.version="19.2.4",ae}var zf;function w0(){if(zf)return Du.exports;zf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Du.exports=A0(),Du.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;function x0(){if(Lf)return us;Lf=1;var n=C0(),e=lc(),i=w0();function r(t){var o="https://react.dev/errors/"+t;if(1<arguments.length){o+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)o+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var o=t,s=t;if(t.alternate)for(;o.return;)o=o.return;else{t=o;do o=t,(o.flags&4098)!==0&&(s=o.return),t=o.return;while(t)}return o.tag===3?s:null}function g(t){if(t.tag===13){var o=t.memoizedState;if(o===null&&(t=t.alternate,t!==null&&(o=t.memoizedState)),o!==null)return o.dehydrated}return null}function m(t){if(t.tag===31){var o=t.memoizedState;if(o===null&&(t=t.alternate,t!==null&&(o=t.memoizedState)),o!==null)return o.dehydrated}return null}function y(t){if(c(t)!==t)throw Error(r(188))}function f(t){var o=t.alternate;if(!o){if(o=c(t),o===null)throw Error(r(188));return o!==t?null:t}for(var s=t,l=o;;){var d=s.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){s=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===s)return y(d),t;if(p===l)return y(d),o;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=d,l=p;else{for(var _=!1,E=d.child;E;){if(E===s){_=!0,s=d,l=p;break}if(E===l){_=!0,l=d,s=p;break}E=E.sibling}if(!_){for(E=p.child;E;){if(E===s){_=!0,s=p,l=d;break}if(E===l){_=!0,l=p,s=d;break}E=E.sibling}if(!_)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:o}function v(t){var o=t.tag;if(o===5||o===26||o===27||o===6)return t;for(t=t.child;t!==null;){if(o=v(t),o!==null)return o;t=t.sibling}return null}var T=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),P=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),ut=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function bt(t){return t===null||typeof t!="object"?null:(t=Tt&&t[Tt]||t["@@iterator"],typeof t=="function"?t:null)}var Nt=Symbol.for("react.client.reference");function St(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Nt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case U:return"Profiler";case x:return"StrictMode";case Q:return"Suspense";case V:return"SuspenseList";case j:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case P:return t.displayName||"Context";case Y:return(t._context.displayName||"Context")+".Consumer";case J:var o=t.render;return t=t.displayName,t||(t=o.displayName||o.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case K:return o=t.displayName||null,o!==null?o:St(t.type)||"Memo";case rt:o=t._payload,t=t._init;try{return St(t(o))}catch{}}return null}var Rt=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},_t=[],Lt=-1;function R(t){return{current:t}}function F(t){0>Lt||(t.current=_t[Lt],_t[Lt]=null,Lt--)}function $(t,o){Lt++,_t[Lt]=t.current,t.current=o}var et=R(null),ct=R(null),dt=R(null),Mt=R(null);function le(t,o){switch($(dt,o),$(ct,t),$(et,null),o.nodeType){case 9:case 11:t=(t=o.documentElement)&&(t=t.namespaceURI)?Qd(t):0;break;default:if(t=o.tagName,o=o.namespaceURI)o=Qd(o),t=Zd(o,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}F(et),$(et,t)}function Ot(){F(et),F(ct),F(dt)}function mi(t){t.memoizedState!==null&&$(Mt,t);var o=et.current,s=Zd(o,t.type);o!==s&&($(ct,t),$(et,s))}function Ts(t){ct.current===t&&(F(et),F(ct)),Mt.current===t&&(F(Mt),is._currentValue=ot)}var ua,xc;function jn(t){if(ua===void 0)try{throw Error()}catch(s){var o=s.stack.trim().match(/\n( *(at )?)/);ua=o&&o[1]||"",xc=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ua+t+xc}var ca=!1;function ha(t,o){if(!t||ca)return"";ca=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(o){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(z){var k=z}Reflect.construct(t,[],O)}else{try{O.call()}catch(z){k=z}t.call(O.prototype)}}else{try{throw Error()}catch(z){k=z}(O=t())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(z){if(z&&k&&typeof z.stack=="string")return[z.stack,k.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),_=p[0],E=p[1];if(_&&E){var w=_.split(`
`),D=E.split(`
`);for(d=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;d<D.length&&!D[d].includes("DetermineComponentFrameRoot");)d++;if(l===w.length||d===D.length)for(l=w.length-1,d=D.length-1;1<=l&&0<=d&&w[l]!==D[d];)d--;for(;1<=l&&0<=d;l--,d--)if(w[l]!==D[d]){if(l!==1||d!==1)do if(l--,d--,0>d||w[l]!==D[d]){var B=`
`+w[l].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=l&&0<=d);break}}}finally{ca=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?jn(s):""}function Qy(t,o){switch(t.tag){case 26:case 27:case 5:return jn(t.type);case 16:return jn("Lazy");case 13:return t.child!==o&&o!==null?jn("Suspense Fallback"):jn("Suspense");case 19:return jn("SuspenseList");case 0:case 15:return ha(t.type,!1);case 11:return ha(t.type.render,!1);case 1:return ha(t.type,!0);case 31:return jn("Activity");default:return""}}function bc(t){try{var o="",s=null;do o+=Qy(t,s),s=t,t=t.return;while(t);return o}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ga=Object.prototype.hasOwnProperty,da=n.unstable_scheduleCallback,fa=n.unstable_cancelCallback,Zy=n.unstable_shouldYield,$y=n.unstable_requestPaint,Te=n.unstable_now,jy=n.unstable_getCurrentPriorityLevel,Rc=n.unstable_ImmediatePriority,Mc=n.unstable_UserBlockingPriority,Ss=n.unstable_NormalPriority,tv=n.unstable_LowPriority,Nc=n.unstable_IdlePriority,ev=n.log,nv=n.unstable_setDisableYieldValue,pi=null,Se=null;function wn(t){if(typeof ev=="function"&&nv(t),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(pi,t)}catch{}}var _e=Math.clz32?Math.clz32:sv,ov=Math.log,iv=Math.LN2;function sv(t){return t>>>=0,t===0?32:31-(ov(t)/iv|0)|0}var _s=256,Es=262144,Cs=4194304;function to(t){var o=t&42;if(o!==0)return o;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function As(t,o,s){var l=t.pendingLanes;if(l===0)return 0;var d=0,p=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=l&134217727;return E!==0?(l=E&~p,l!==0?d=to(l):(_&=E,_!==0?d=to(_):s||(s=E&~t,s!==0&&(d=to(s))))):(E=l&~p,E!==0?d=to(E):_!==0?d=to(_):s||(s=l&~t,s!==0&&(d=to(s)))),d===0?0:o!==0&&o!==d&&(o&p)===0&&(p=d&-d,s=o&-o,p>=s||p===32&&(s&4194048)!==0)?o:d}function yi(t,o){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&o)===0}function rv(t,o){switch(t){case 1:case 2:case 4:case 8:case 64:return o+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ic(){var t=Cs;return Cs<<=1,(Cs&62914560)===0&&(Cs=4194304),t}function ma(t){for(var o=[],s=0;31>s;s++)o.push(t);return o}function vi(t,o){t.pendingLanes|=o,o!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function av(t,o,s,l,d,p){var _=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var E=t.entanglements,w=t.expirationTimes,D=t.hiddenUpdates;for(s=_&~s;0<s;){var B=31-_e(s),O=1<<B;E[B]=0,w[B]=-1;var k=D[B];if(k!==null)for(D[B]=null,B=0;B<k.length;B++){var z=k[B];z!==null&&(z.lane&=-536870913)}s&=~O}l!==0&&Dc(t,l,0),p!==0&&d===0&&t.tag!==0&&(t.suspendedLanes|=p&~(_&~o))}function Dc(t,o,s){t.pendingLanes|=o,t.suspendedLanes&=~o;var l=31-_e(o);t.entangledLanes|=o,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function kc(t,o){var s=t.entangledLanes|=o;for(t=t.entanglements;s;){var l=31-_e(s),d=1<<l;d&o|t[l]&o&&(t[l]|=o),s&=~d}}function Uc(t,o){var s=o&-o;return s=(s&42)!==0?1:pa(s),(s&(t.suspendedLanes|o))!==0?0:s}function pa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ya(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function zc(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:_f(t.type))}function Lc(t,o){var s=X.p;try{return X.p=t,o()}finally{X.p=s}}var xn=Math.random().toString(36).slice(2),ne="__reactFiber$"+xn,ge="__reactProps$"+xn,_o="__reactContainer$"+xn,va="__reactEvents$"+xn,lv="__reactListeners$"+xn,uv="__reactHandles$"+xn,Hc="__reactResources$"+xn,Ti="__reactMarker$"+xn;function Ta(t){delete t[ne],delete t[ge],delete t[va],delete t[lv],delete t[uv]}function Eo(t){var o=t[ne];if(o)return o;for(var s=t.parentNode;s;){if(o=s[_o]||s[ne]){if(s=o.alternate,o.child!==null||s!==null&&s.child!==null)for(t=sf(t);t!==null;){if(s=t[ne])return s;t=sf(t)}return o}t=s,s=t.parentNode}return null}function Co(t){if(t=t[ne]||t[_o]){var o=t.tag;if(o===5||o===6||o===13||o===31||o===26||o===27||o===3)return t}return null}function Si(t){var o=t.tag;if(o===5||o===26||o===27||o===6)return t.stateNode;throw Error(r(33))}function Ao(t){var o=t[Hc];return o||(o=t[Hc]={hoistableStyles:new Map,hoistableScripts:new Map}),o}function $t(t){t[Ti]=!0}var Bc=new Set,qc={};function eo(t,o){wo(t,o),wo(t+"Capture",o)}function wo(t,o){for(qc[t]=o,t=0;t<o.length;t++)Bc.add(o[t])}var cv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pc={},Gc={};function hv(t){return ga.call(Gc,t)?!0:ga.call(Pc,t)?!1:cv.test(t)?Gc[t]=!0:(Pc[t]=!0,!1)}function ws(t,o,s){if(hv(o))if(s===null)t.removeAttribute(o);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(o);return;case"boolean":var l=o.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(o);return}}t.setAttribute(o,""+s)}}function xs(t,o,s){if(s===null)t.removeAttribute(o);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(o);return}t.setAttribute(o,""+s)}}function en(t,o,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(o,s,""+l)}}function Ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vc(t){var o=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function gv(t,o,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,o);if(!t.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,p=l.set;return Object.defineProperty(t,o,{configurable:!0,get:function(){return d.call(this)},set:function(_){s=""+_,p.call(this,_)}}),Object.defineProperty(t,o,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(_){s=""+_},stopTracking:function(){t._valueTracker=null,delete t[o]}}}}function Sa(t){if(!t._valueTracker){var o=Vc(t)?"checked":"value";t._valueTracker=gv(t,o,""+t[o])}}function Oc(t){if(!t)return!1;var o=t._valueTracker;if(!o)return!0;var s=o.getValue(),l="";return t&&(l=Vc(t)?t.checked?"true":"false":t.value),t=l,t!==s?(o.setValue(t),!0):!1}function bs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var dv=/[\n"\\]/g;function Ie(t){return t.replace(dv,function(o){return"\\"+o.charCodeAt(0).toString(16)+" "})}function _a(t,o,s,l,d,p,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),o!=null?_==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+Ne(o)):t.value!==""+Ne(o)&&(t.value=""+Ne(o)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),o!=null?Ea(t,_,Ne(o)):s!=null?Ea(t,_,Ne(s)):l!=null&&t.removeAttribute("value"),d==null&&p!=null&&(t.defaultChecked=!!p),d!=null&&(t.checked=d&&typeof d!="function"&&typeof d!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Ne(E):t.removeAttribute("name")}function Fc(t,o,s,l,d,p,_,E){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),o!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||o!=null)){Sa(t);return}s=s!=null?""+Ne(s):"",o=o!=null?""+Ne(o):s,E||o===t.value||(t.value=o),t.defaultValue=o}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=E?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Sa(t)}function Ea(t,o,s){o==="number"&&bs(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function xo(t,o,s,l){if(t=t.options,o){o={};for(var d=0;d<s.length;d++)o["$"+s[d]]=!0;for(s=0;s<t.length;s++)d=o.hasOwnProperty("$"+t[s].value),t[s].selected!==d&&(t[s].selected=d),d&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Ne(s),o=null,d=0;d<t.length;d++){if(t[d].value===s){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}o!==null||t[d].disabled||(o=t[d])}o!==null&&(o.selected=!0)}}function Yc(t,o,s){if(o!=null&&(o=""+Ne(o),o!==t.value&&(t.value=o),s==null)){t.defaultValue!==o&&(t.defaultValue=o);return}t.defaultValue=s!=null?""+Ne(s):""}function Wc(t,o,s,l){if(o==null){if(l!=null){if(s!=null)throw Error(r(92));if(Rt(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),o=s}s=Ne(o),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Sa(t)}function bo(t,o){if(o){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=o;return}}t.textContent=o}var fv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jc(t,o,s){var l=o.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="":l?t.setProperty(o,s):typeof s!="number"||s===0||fv.has(o)?o==="float"?t.cssFloat=s:t[o]=(""+s).trim():t[o]=s+"px"}function Kc(t,o,s){if(o!=null&&typeof o!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||o!=null&&o.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var d in o)l=o[d],o.hasOwnProperty(d)&&s[d]!==l&&Jc(t,d,l)}else for(var p in o)o.hasOwnProperty(p)&&Jc(t,p,o[p])}function Ca(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rs(t){return pv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function nn(){}var Aa=null;function wa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ro=null,Mo=null;function Xc(t){var o=Co(t);if(o&&(t=o.stateNode)){var s=t[ge]||null;t:switch(t=o.stateNode,o.type){case"input":if(_a(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),o=s.name,s.type==="radio"&&o!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ie(""+o)+'"][type="radio"]'),o=0;o<s.length;o++){var l=s[o];if(l!==t&&l.form===t.form){var d=l[ge]||null;if(!d)throw Error(r(90));_a(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(o=0;o<s.length;o++)l=s[o],l.form===t.form&&Oc(l)}break t;case"textarea":Yc(t,s.value,s.defaultValue);break t;case"select":o=s.value,o!=null&&xo(t,!!s.multiple,o,!1)}}}var xa=!1;function Qc(t,o,s){if(xa)return t(o,s);xa=!0;try{var l=t(o);return l}finally{if(xa=!1,(Ro!==null||Mo!==null)&&(mr(),Ro&&(o=Ro,t=Mo,Mo=Ro=null,Xc(o),t)))for(o=0;o<t.length;o++)Xc(t[o])}}function _i(t,o){var s=t.stateNode;if(s===null)return null;var l=s[ge]||null;if(l===null)return null;s=l[o];t:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,o,typeof s));return s}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ba=!1;if(on)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){ba=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{ba=!1}var bn=null,Ra=null,Ms=null;function Zc(){if(Ms)return Ms;var t,o=Ra,s=o.length,l,d="value"in bn?bn.value:bn.textContent,p=d.length;for(t=0;t<s&&o[t]===d[t];t++);var _=s-t;for(l=1;l<=_&&o[s-l]===d[p-l];l++);return Ms=d.slice(t,1<l?1-l:void 0)}function Ns(t){var o=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&o===13&&(t=13)):t=o,t===10&&(t=13),32<=t||t===13?t:0}function Is(){return!0}function $c(){return!1}function de(t){function o(s,l,d,p,_){this._reactName=s,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(s=t[E],this[E]=s?s(p):p[E]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Is:$c,this.isPropagationStopped=$c,this}return T(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Is)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Is)},persist:function(){},isPersistent:Is}),o}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ds=de(no),Ci=T({},no,{view:0,detail:0}),yv=de(Ci),Ma,Na,Ai,ks=T({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Da,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ai&&(Ai&&t.type==="mousemove"?(Ma=t.screenX-Ai.screenX,Na=t.screenY-Ai.screenY):Na=Ma=0,Ai=t),Ma)},movementY:function(t){return"movementY"in t?t.movementY:Na}}),jc=de(ks),vv=T({},ks,{dataTransfer:0}),Tv=de(vv),Sv=T({},Ci,{relatedTarget:0}),Ia=de(Sv),_v=T({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=de(_v),Cv=T({},no,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Av=de(Cv),wv=T({},no,{data:0}),th=de(wv),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(t){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(t):(t=Rv[t])?!!o[t]:!1}function Da(){return Mv}var Nv=T({},Ci,{key:function(t){if(t.key){var o=xv[t.key]||t.key;if(o!=="Unidentified")return o}return t.type==="keypress"?(t=Ns(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Da,charCode:function(t){return t.type==="keypress"?Ns(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ns(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Iv=de(Nv),Dv=T({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=de(Dv),kv=T({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Da}),Uv=de(kv),zv=T({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=de(zv),Hv=T({},ks,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=de(Hv),qv=T({},no,{newState:0,oldState:0}),Pv=de(qv),Gv=[9,13,27,32],ka=on&&"CompositionEvent"in window,wi=null;on&&"documentMode"in document&&(wi=document.documentMode);var Vv=on&&"TextEvent"in window&&!wi,nh=on&&(!ka||wi&&8<wi&&11>=wi),oh=" ",ih=!1;function sh(t,o){switch(t){case"keyup":return Gv.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var No=!1;function Ov(t,o){switch(t){case"compositionend":return rh(o);case"keypress":return o.which!==32?null:(ih=!0,oh);case"textInput":return t=o.data,t===oh&&ih?null:t;default:return null}}function Fv(t,o){if(No)return t==="compositionend"||!ka&&sh(t,o)?(t=Zc(),Ms=Ra=bn=null,No=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return nh&&o.locale!=="ko"?null:o.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(t){var o=t&&t.nodeName&&t.nodeName.toLowerCase();return o==="input"?!!Yv[t.type]:o==="textarea"}function lh(t,o,s,l){Ro?Mo?Mo.push(l):Mo=[l]:Ro=l,o=Er(o,"onChange"),0<o.length&&(s=new Ds("onChange","change",null,s,l),t.push({event:s,listeners:o}))}var xi=null,bi=null;function Wv(t){Fd(t,0)}function Us(t){var o=Si(t);if(Oc(o))return t}function uh(t,o){if(t==="change")return o}var ch=!1;if(on){var Ua;if(on){var za="oninput"in document;if(!za){var hh=document.createElement("div");hh.setAttribute("oninput","return;"),za=typeof hh.oninput=="function"}Ua=za}else Ua=!1;ch=Ua&&(!document.documentMode||9<document.documentMode)}function gh(){xi&&(xi.detachEvent("onpropertychange",dh),bi=xi=null)}function dh(t){if(t.propertyName==="value"&&Us(bi)){var o=[];lh(o,bi,t,wa(t)),Qc(Wv,o)}}function Jv(t,o,s){t==="focusin"?(gh(),xi=o,bi=s,xi.attachEvent("onpropertychange",dh)):t==="focusout"&&gh()}function Kv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Us(bi)}function Xv(t,o){if(t==="click")return Us(o)}function Qv(t,o){if(t==="input"||t==="change")return Us(o)}function Zv(t,o){return t===o&&(t!==0||1/t===1/o)||t!==t&&o!==o}var Ee=typeof Object.is=="function"?Object.is:Zv;function Ri(t,o){if(Ee(t,o))return!0;if(typeof t!="object"||t===null||typeof o!="object"||o===null)return!1;var s=Object.keys(t),l=Object.keys(o);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var d=s[l];if(!ga.call(o,d)||!Ee(t[d],o[d]))return!1}return!0}function fh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mh(t,o){var s=fh(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=o&&l>=o)return{node:s,offset:o-t};t=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=fh(s)}}function ph(t,o){return t&&o?t===o?!0:t&&t.nodeType===3?!1:o&&o.nodeType===3?ph(t,o.parentNode):"contains"in t?t.contains(o):t.compareDocumentPosition?!!(t.compareDocumentPosition(o)&16):!1:!1}function yh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var o=bs(t.document);o instanceof t.HTMLIFrameElement;){try{var s=typeof o.contentWindow.location.href=="string"}catch{s=!1}if(s)t=o.contentWindow;else break;o=bs(t.document)}return o}function La(t){var o=t&&t.nodeName&&t.nodeName.toLowerCase();return o&&(o==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||o==="textarea"||t.contentEditable==="true")}var $v=on&&"documentMode"in document&&11>=document.documentMode,Io=null,Ha=null,Mi=null,Ba=!1;function vh(t,o,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ba||Io==null||Io!==bs(l)||(l=Io,"selectionStart"in l&&La(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Mi&&Ri(Mi,l)||(Mi=l,l=Er(Ha,"onSelect"),0<l.length&&(o=new Ds("onSelect","select",null,o,s),t.push({event:o,listeners:l}),o.target=Io)))}function oo(t,o){var s={};return s[t.toLowerCase()]=o.toLowerCase(),s["Webkit"+t]="webkit"+o,s["Moz"+t]="moz"+o,s}var Do={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionrun:oo("Transition","TransitionRun"),transitionstart:oo("Transition","TransitionStart"),transitioncancel:oo("Transition","TransitionCancel"),transitionend:oo("Transition","TransitionEnd")},qa={},Th={};on&&(Th=document.createElement("div").style,"AnimationEvent"in window||(delete Do.animationend.animation,delete Do.animationiteration.animation,delete Do.animationstart.animation),"TransitionEvent"in window||delete Do.transitionend.transition);function io(t){if(qa[t])return qa[t];if(!Do[t])return t;var o=Do[t],s;for(s in o)if(o.hasOwnProperty(s)&&s in Th)return qa[t]=o[s];return t}var Sh=io("animationend"),_h=io("animationiteration"),Eh=io("animationstart"),jv=io("transitionrun"),tT=io("transitionstart"),eT=io("transitioncancel"),Ch=io("transitionend"),Ah=new Map,Pa="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pa.push("scrollEnd");function Ve(t,o){Ah.set(t,o),eo(o,[t])}var zs=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var o=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(o))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},De=[],ko=0,Ga=0;function Ls(){for(var t=ko,o=Ga=ko=0;o<t;){var s=De[o];De[o++]=null;var l=De[o];De[o++]=null;var d=De[o];De[o++]=null;var p=De[o];if(De[o++]=null,l!==null&&d!==null){var _=l.pending;_===null?d.next=d:(d.next=_.next,_.next=d),l.pending=d}p!==0&&wh(s,d,p)}}function Hs(t,o,s,l){De[ko++]=t,De[ko++]=o,De[ko++]=s,De[ko++]=l,Ga|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Va(t,o,s,l){return Hs(t,o,s,l),Bs(t)}function so(t,o){return Hs(t,null,null,o),Bs(t)}function wh(t,o,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var d=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(d=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,d&&o!==null&&(d=31-_e(s),t=p.hiddenUpdates,l=t[d],l===null?t[d]=[o]:l.push(o),o.lane=s|536870912),p):null}function Bs(t){if(50<Zi)throw Zi=0,Zl=null,Error(r(185));for(var o=t.return;o!==null;)t=o,o=t.return;return t.tag===3?t.stateNode:null}var Uo={};function nT(t,o,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(t,o,s,l){return new nT(t,o,s,l)}function Oa(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sn(t,o){var s=t.alternate;return s===null?(s=Ce(t.tag,o,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=o,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,o=t.dependencies,s.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function xh(t,o){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=o,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,o=s.dependencies,t.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),t}function qs(t,o,s,l,d,p){var _=0;if(l=t,typeof t=="function")Oa(t)&&(_=1);else if(typeof t=="string")_=a0(t,s,et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case j:return t=Ce(31,s,o,d),t.elementType=j,t.lanes=p,t;case M:return ro(s.children,d,p,o);case x:_=8,d|=24;break;case U:return t=Ce(12,s,o,d|2),t.elementType=U,t.lanes=p,t;case Q:return t=Ce(13,s,o,d),t.elementType=Q,t.lanes=p,t;case V:return t=Ce(19,s,o,d),t.elementType=V,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:_=10;break t;case Y:_=9;break t;case J:_=11;break t;case K:_=14;break t;case rt:_=16,l=null;break t}_=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return o=Ce(_,s,o,d),o.elementType=t,o.type=l,o.lanes=p,o}function ro(t,o,s,l){return t=Ce(7,t,l,o),t.lanes=s,t}function Fa(t,o,s){return t=Ce(6,t,null,o),t.lanes=s,t}function bh(t){var o=Ce(18,null,null,0);return o.stateNode=t,o}function Ya(t,o,s){return o=Ce(4,t.children!==null?t.children:[],t.key,o),o.lanes=s,o.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},o}var Rh=new WeakMap;function ke(t,o){if(typeof t=="object"&&t!==null){var s=Rh.get(t);return s!==void 0?s:(o={value:t,source:o,stack:bc(o)},Rh.set(t,o),o)}return{value:t,source:o,stack:bc(o)}}var zo=[],Lo=0,Ps=null,Ni=0,Ue=[],ze=0,Rn=null,Xe=1,Qe="";function rn(t,o){zo[Lo++]=Ni,zo[Lo++]=Ps,Ps=t,Ni=o}function Mh(t,o,s){Ue[ze++]=Xe,Ue[ze++]=Qe,Ue[ze++]=Rn,Rn=t;var l=Xe;t=Qe;var d=32-_e(l)-1;l&=~(1<<d),s+=1;var p=32-_e(o)+d;if(30<p){var _=d-d%5;p=(l&(1<<_)-1).toString(32),l>>=_,d-=_,Xe=1<<32-_e(o)+d|s<<d|l,Qe=p+t}else Xe=1<<p|s<<d|l,Qe=t}function Wa(t){t.return!==null&&(rn(t,1),Mh(t,1,0))}function Ja(t){for(;t===Ps;)Ps=zo[--Lo],zo[Lo]=null,Ni=zo[--Lo],zo[Lo]=null;for(;t===Rn;)Rn=Ue[--ze],Ue[ze]=null,Qe=Ue[--ze],Ue[ze]=null,Xe=Ue[--ze],Ue[ze]=null}function Nh(t,o){Ue[ze++]=Xe,Ue[ze++]=Qe,Ue[ze++]=Rn,Xe=o.id,Qe=o.overflow,Rn=t}var oe=null,Bt=null,vt=!1,Mn=null,Le=!1,Ka=Error(r(519));function Nn(t){var o=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ii(ke(o,t)),Ka}function Ih(t){var o=t.stateNode,s=t.type,l=t.memoizedProps;switch(o[ne]=t,o[ge]=l,s){case"dialog":mt("cancel",o),mt("close",o);break;case"iframe":case"object":case"embed":mt("load",o);break;case"video":case"audio":for(s=0;s<ji.length;s++)mt(ji[s],o);break;case"source":mt("error",o);break;case"img":case"image":case"link":mt("error",o),mt("load",o);break;case"details":mt("toggle",o);break;case"input":mt("invalid",o),Fc(o,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":mt("invalid",o);break;case"textarea":mt("invalid",o),Wc(o,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||o.textContent===""+s||l.suppressHydrationWarning===!0||Kd(o.textContent,s)?(l.popover!=null&&(mt("beforetoggle",o),mt("toggle",o)),l.onScroll!=null&&mt("scroll",o),l.onScrollEnd!=null&&mt("scrollend",o),l.onClick!=null&&(o.onclick=nn),o=!0):o=!1,o||Nn(t,!0)}function Dh(t){for(oe=t.return;oe;)switch(oe.tag){case 5:case 31:case 13:Le=!1;return;case 27:case 3:Le=!0;return;default:oe=oe.return}}function Ho(t){if(t!==oe)return!1;if(!vt)return Dh(t),vt=!0,!1;var o=t.tag,s;if((s=o!==3&&o!==27)&&((s=o===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||gu(t.type,t.memoizedProps)),s=!s),s&&Bt&&Nn(t),Dh(t),o===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Bt=of(t)}else if(o===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Bt=of(t)}else o===27?(o=Bt,Fn(t.type)?(t=yu,yu=null,Bt=t):Bt=o):Bt=oe?Be(t.stateNode.nextSibling):null;return!0}function ao(){Bt=oe=null,vt=!1}function Xa(){var t=Mn;return t!==null&&(ye===null?ye=t:ye.push.apply(ye,t),Mn=null),t}function Ii(t){Mn===null?Mn=[t]:Mn.push(t)}var Qa=R(null),lo=null,an=null;function In(t,o,s){$(Qa,o._currentValue),o._currentValue=s}function ln(t){t._currentValue=Qa.current,F(Qa)}function Za(t,o,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&o)!==o?(t.childLanes|=o,l!==null&&(l.childLanes|=o)):l!==null&&(l.childLanes&o)!==o&&(l.childLanes|=o),t===s)break;t=t.return}}function $a(t,o,s,l){var d=t.child;for(d!==null&&(d.return=t);d!==null;){var p=d.dependencies;if(p!==null){var _=d.child;p=p.firstContext;t:for(;p!==null;){var E=p;p=d;for(var w=0;w<o.length;w++)if(E.context===o[w]){p.lanes|=s,E=p.alternate,E!==null&&(E.lanes|=s),Za(p.return,s,t),l||(_=null);break t}p=E.next}}else if(d.tag===18){if(_=d.return,_===null)throw Error(r(341));_.lanes|=s,p=_.alternate,p!==null&&(p.lanes|=s),Za(_,s,t),_=null}else _=d.child;if(_!==null)_.return=d;else for(_=d;_!==null;){if(_===t){_=null;break}if(d=_.sibling,d!==null){d.return=_.return,_=d;break}_=_.return}d=_}}function Bo(t,o,s,l){t=null;for(var d=o,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var _=d.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=d.type;Ee(d.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(d===Mt.current){if(_=d.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(t!==null?t.push(is):t=[is])}d=d.return}t!==null&&$a(o,t,s,l),o.flags|=262144}function Gs(t){for(t=t.firstContext;t!==null;){if(!Ee(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function uo(t){lo=t,an=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ie(t){return kh(lo,t)}function Vs(t,o){return lo===null&&uo(t),kh(t,o)}function kh(t,o){var s=o._currentValue;if(o={context:o,memoizedValue:s,next:null},an===null){if(t===null)throw Error(r(308));an=o,t.dependencies={lanes:0,firstContext:o},t.flags|=524288}else an=an.next=o;return s}var oT=typeof AbortController<"u"?AbortController:function(){var t=[],o=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){o.aborted=!0,t.forEach(function(s){return s()})}},iT=n.unstable_scheduleCallback,sT=n.unstable_NormalPriority,Wt={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ja(){return{controller:new oT,data:new Map,refCount:0}}function Di(t){t.refCount--,t.refCount===0&&iT(sT,function(){t.controller.abort()})}var ki=null,tl=0,qo=0,Po=null;function rT(t,o){if(ki===null){var s=ki=[];tl=0,qo=ou(),Po={status:"pending",value:void 0,then:function(l){s.push(l)}}}return tl++,o.then(Uh,Uh),o}function Uh(){if(--tl===0&&ki!==null){Po!==null&&(Po.status="fulfilled");var t=ki;ki=null,qo=0,Po=null;for(var o=0;o<t.length;o++)(0,t[o])()}}function aT(t,o){var s=[],l={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return t.then(function(){l.status="fulfilled",l.value=o;for(var d=0;d<s.length;d++)(0,s[d])(o)},function(d){for(l.status="rejected",l.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),l}var zh=H.S;H.S=function(t,o){vd=Te(),typeof o=="object"&&o!==null&&typeof o.then=="function"&&rT(t,o),zh!==null&&zh(t,o)};var co=R(null);function el(){var t=co.current;return t!==null?t:Ht.pooledCache}function Os(t,o){o===null?$(co,co.current):$(co,o.pool)}function Lh(){var t=el();return t===null?null:{parent:Wt._currentValue,pool:t}}var Go=Error(r(460)),nl=Error(r(474)),Fs=Error(r(542)),Ys={then:function(){}};function Hh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bh(t,o,s){switch(s=t[s],s===void 0?t.push(o):s!==o&&(o.then(nn,nn),o=s),o.status){case"fulfilled":return o.value;case"rejected":throw t=o.reason,Ph(t),t;default:if(typeof o.status=="string")o.then(nn,nn);else{if(t=Ht,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=o,t.status="pending",t.then(function(l){if(o.status==="pending"){var d=o;d.status="fulfilled",d.value=l}},function(l){if(o.status==="pending"){var d=o;d.status="rejected",d.reason=l}})}switch(o.status){case"fulfilled":return o.value;case"rejected":throw t=o.reason,Ph(t),t}throw go=o,Go}}function ho(t){try{var o=t._init;return o(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(go=s,Go):s}}var go=null;function qh(){if(go===null)throw Error(r(459));var t=go;return go=null,t}function Ph(t){if(t===Go||t===Fs)throw Error(r(483))}var Vo=null,Ui=0;function Ws(t){var o=Ui;return Ui+=1,Vo===null&&(Vo=[]),Bh(Vo,t,o)}function zi(t,o){o=o.props.ref,t.ref=o!==void 0?o:null}function Js(t,o){throw o.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(o),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":t)))}function Gh(t){function o(N,b){if(t){var I=N.deletions;I===null?(N.deletions=[b],N.flags|=16):I.push(b)}}function s(N,b){if(!t)return null;for(;b!==null;)o(N,b),b=b.sibling;return null}function l(N){for(var b=new Map;N!==null;)N.key!==null?b.set(N.key,N):b.set(N.index,N),N=N.sibling;return b}function d(N,b){return N=sn(N,b),N.index=0,N.sibling=null,N}function p(N,b,I){return N.index=I,t?(I=N.alternate,I!==null?(I=I.index,I<b?(N.flags|=67108866,b):I):(N.flags|=67108866,b)):(N.flags|=1048576,b)}function _(N){return t&&N.alternate===null&&(N.flags|=67108866),N}function E(N,b,I,G){return b===null||b.tag!==6?(b=Fa(I,N.mode,G),b.return=N,b):(b=d(b,I),b.return=N,b)}function w(N,b,I,G){var it=I.type;return it===M?B(N,b,I.props.children,G,I.key):b!==null&&(b.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===rt&&ho(it)===b.type)?(b=d(b,I.props),zi(b,I),b.return=N,b):(b=qs(I.type,I.key,I.props,null,N.mode,G),zi(b,I),b.return=N,b)}function D(N,b,I,G){return b===null||b.tag!==4||b.stateNode.containerInfo!==I.containerInfo||b.stateNode.implementation!==I.implementation?(b=Ya(I,N.mode,G),b.return=N,b):(b=d(b,I.children||[]),b.return=N,b)}function B(N,b,I,G,it){return b===null||b.tag!==7?(b=ro(I,N.mode,G,it),b.return=N,b):(b=d(b,I),b.return=N,b)}function O(N,b,I){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Fa(""+b,N.mode,I),b.return=N,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case C:return I=qs(b.type,b.key,b.props,null,N.mode,I),zi(I,b),I.return=N,I;case A:return b=Ya(b,N.mode,I),b.return=N,b;case rt:return b=ho(b),O(N,b,I)}if(Rt(b)||bt(b))return b=ro(b,N.mode,I,null),b.return=N,b;if(typeof b.then=="function")return O(N,Ws(b),I);if(b.$$typeof===P)return O(N,Vs(N,b),I);Js(N,b)}return null}function k(N,b,I,G){var it=b!==null?b.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return it!==null?null:E(N,b,""+I,G);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case C:return I.key===it?w(N,b,I,G):null;case A:return I.key===it?D(N,b,I,G):null;case rt:return I=ho(I),k(N,b,I,G)}if(Rt(I)||bt(I))return it!==null?null:B(N,b,I,G,null);if(typeof I.then=="function")return k(N,b,Ws(I),G);if(I.$$typeof===P)return k(N,b,Vs(N,I),G);Js(N,I)}return null}function z(N,b,I,G,it){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return N=N.get(I)||null,E(b,N,""+G,it);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case C:return N=N.get(G.key===null?I:G.key)||null,w(b,N,G,it);case A:return N=N.get(G.key===null?I:G.key)||null,D(b,N,G,it);case rt:return G=ho(G),z(N,b,I,G,it)}if(Rt(G)||bt(G))return N=N.get(I)||null,B(b,N,G,it,null);if(typeof G.then=="function")return z(N,b,I,Ws(G),it);if(G.$$typeof===P)return z(N,b,I,Vs(b,G),it);Js(b,G)}return null}function tt(N,b,I,G){for(var it=null,Et=null,nt=b,gt=b=0,yt=null;nt!==null&&gt<I.length;gt++){nt.index>gt?(yt=nt,nt=null):yt=nt.sibling;var Ct=k(N,nt,I[gt],G);if(Ct===null){nt===null&&(nt=yt);break}t&&nt&&Ct.alternate===null&&o(N,nt),b=p(Ct,b,gt),Et===null?it=Ct:Et.sibling=Ct,Et=Ct,nt=yt}if(gt===I.length)return s(N,nt),vt&&rn(N,gt),it;if(nt===null){for(;gt<I.length;gt++)nt=O(N,I[gt],G),nt!==null&&(b=p(nt,b,gt),Et===null?it=nt:Et.sibling=nt,Et=nt);return vt&&rn(N,gt),it}for(nt=l(nt);gt<I.length;gt++)yt=z(nt,N,gt,I[gt],G),yt!==null&&(t&&yt.alternate!==null&&nt.delete(yt.key===null?gt:yt.key),b=p(yt,b,gt),Et===null?it=yt:Et.sibling=yt,Et=yt);return t&&nt.forEach(function(Xn){return o(N,Xn)}),vt&&rn(N,gt),it}function st(N,b,I,G){if(I==null)throw Error(r(151));for(var it=null,Et=null,nt=b,gt=b=0,yt=null,Ct=I.next();nt!==null&&!Ct.done;gt++,Ct=I.next()){nt.index>gt?(yt=nt,nt=null):yt=nt.sibling;var Xn=k(N,nt,Ct.value,G);if(Xn===null){nt===null&&(nt=yt);break}t&&nt&&Xn.alternate===null&&o(N,nt),b=p(Xn,b,gt),Et===null?it=Xn:Et.sibling=Xn,Et=Xn,nt=yt}if(Ct.done)return s(N,nt),vt&&rn(N,gt),it;if(nt===null){for(;!Ct.done;gt++,Ct=I.next())Ct=O(N,Ct.value,G),Ct!==null&&(b=p(Ct,b,gt),Et===null?it=Ct:Et.sibling=Ct,Et=Ct);return vt&&rn(N,gt),it}for(nt=l(nt);!Ct.done;gt++,Ct=I.next())Ct=z(nt,N,gt,Ct.value,G),Ct!==null&&(t&&Ct.alternate!==null&&nt.delete(Ct.key===null?gt:Ct.key),b=p(Ct,b,gt),Et===null?it=Ct:Et.sibling=Ct,Et=Ct);return t&&nt.forEach(function(v0){return o(N,v0)}),vt&&rn(N,gt),it}function zt(N,b,I,G){if(typeof I=="object"&&I!==null&&I.type===M&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case C:t:{for(var it=I.key;b!==null;){if(b.key===it){if(it=I.type,it===M){if(b.tag===7){s(N,b.sibling),G=d(b,I.props.children),G.return=N,N=G;break t}}else if(b.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===rt&&ho(it)===b.type){s(N,b.sibling),G=d(b,I.props),zi(G,I),G.return=N,N=G;break t}s(N,b);break}else o(N,b);b=b.sibling}I.type===M?(G=ro(I.props.children,N.mode,G,I.key),G.return=N,N=G):(G=qs(I.type,I.key,I.props,null,N.mode,G),zi(G,I),G.return=N,N=G)}return _(N);case A:t:{for(it=I.key;b!==null;){if(b.key===it)if(b.tag===4&&b.stateNode.containerInfo===I.containerInfo&&b.stateNode.implementation===I.implementation){s(N,b.sibling),G=d(b,I.children||[]),G.return=N,N=G;break t}else{s(N,b);break}else o(N,b);b=b.sibling}G=Ya(I,N.mode,G),G.return=N,N=G}return _(N);case rt:return I=ho(I),zt(N,b,I,G)}if(Rt(I))return tt(N,b,I,G);if(bt(I)){if(it=bt(I),typeof it!="function")throw Error(r(150));return I=it.call(I),st(N,b,I,G)}if(typeof I.then=="function")return zt(N,b,Ws(I),G);if(I.$$typeof===P)return zt(N,b,Vs(N,I),G);Js(N,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,b!==null&&b.tag===6?(s(N,b.sibling),G=d(b,I),G.return=N,N=G):(s(N,b),G=Fa(I,N.mode,G),G.return=N,N=G),_(N)):s(N,b)}return function(N,b,I,G){try{Ui=0;var it=zt(N,b,I,G);return Vo=null,it}catch(nt){if(nt===Go||nt===Fs)throw nt;var Et=Ce(29,nt,null,N.mode);return Et.lanes=G,Et.return=N,Et}finally{}}}var fo=Gh(!0),Vh=Gh(!1),Dn=!1;function ol(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function il(t,o){t=t.updateQueue,o.updateQueue===t&&(o.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function kn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Un(t,o,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var d=l.pending;return d===null?o.next=o:(o.next=d.next,d.next=o),l.pending=o,o=Bs(t),wh(t,null,s),o}return Hs(t,l,o,s),Bs(t)}function Li(t,o,s){if(o=o.updateQueue,o!==null&&(o=o.shared,(s&4194048)!==0)){var l=o.lanes;l&=t.pendingLanes,s|=l,o.lanes=s,kc(t,s)}}function sl(t,o){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var d=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var _={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?d=p=_:p=p.next=_,s=s.next}while(s!==null);p===null?d=p=o:p=p.next=o}else d=p=o;s={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=o:t.next=o,s.lastBaseUpdate=o}var rl=!1;function Hi(){if(rl){var t=Po;if(t!==null)throw t}}function Bi(t,o,s,l){rl=!1;var d=t.updateQueue;Dn=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var w=E,D=w.next;w.next=null,_===null?p=D:_.next=D,_=w;var B=t.alternate;B!==null&&(B=B.updateQueue,E=B.lastBaseUpdate,E!==_&&(E===null?B.firstBaseUpdate=D:E.next=D,B.lastBaseUpdate=w))}if(p!==null){var O=d.baseState;_=0,B=D=w=null,E=p;do{var k=E.lane&-536870913,z=k!==E.lane;if(z?(pt&k)===k:(l&k)===k){k!==0&&k===qo&&(rl=!0),B!==null&&(B=B.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var tt=t,st=E;k=o;var zt=s;switch(st.tag){case 1:if(tt=st.payload,typeof tt=="function"){O=tt.call(zt,O,k);break t}O=tt;break t;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=st.payload,k=typeof tt=="function"?tt.call(zt,O,k):tt,k==null)break t;O=T({},O,k);break t;case 2:Dn=!0}}k=E.callback,k!==null&&(t.flags|=64,z&&(t.flags|=8192),z=d.callbacks,z===null?d.callbacks=[k]:z.push(k))}else z={lane:k,tag:E.tag,payload:E.payload,callback:E.callback,next:null},B===null?(D=B=z,w=O):B=B.next=z,_|=k;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;z=E,E=z.next,z.next=null,d.lastBaseUpdate=z,d.shared.pending=null}}while(!0);B===null&&(w=O),d.baseState=w,d.firstBaseUpdate=D,d.lastBaseUpdate=B,p===null&&(d.shared.lanes=0),qn|=_,t.lanes=_,t.memoizedState=O}}function Oh(t,o){if(typeof t!="function")throw Error(r(191,t));t.call(o)}function Fh(t,o){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Oh(s[t],o)}var Oo=R(null),Ks=R(0);function Yh(t,o){t=yn,$(Ks,t),$(Oo,o),yn=t|o.baseLanes}function al(){$(Ks,yn),$(Oo,Oo.current)}function ll(){yn=Ks.current,F(Oo),F(Ks)}var Ae=R(null),He=null;function zn(t){var o=t.alternate;$(Ft,Ft.current&1),$(Ae,t),He===null&&(o===null||Oo.current!==null||o.memoizedState!==null)&&(He=t)}function ul(t){$(Ft,Ft.current),$(Ae,t),He===null&&(He=t)}function Wh(t){t.tag===22?($(Ft,Ft.current),$(Ae,t),He===null&&(He=t)):Ln()}function Ln(){$(Ft,Ft.current),$(Ae,Ae.current)}function we(t){F(Ae),He===t&&(He=null),F(Ft)}var Ft=R(0);function Xs(t){for(var o=t;o!==null;){if(o.tag===13){var s=o.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||mu(s)||pu(s)))return o}else if(o.tag===19&&(o.memoizedProps.revealOrder==="forwards"||o.memoizedProps.revealOrder==="backwards"||o.memoizedProps.revealOrder==="unstable_legacy-backwards"||o.memoizedProps.revealOrder==="together")){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var un=0,ht=null,kt=null,Jt=null,Qs=!1,Fo=!1,mo=!1,Zs=0,qi=0,Yo=null,lT=0;function Gt(){throw Error(r(321))}function cl(t,o){if(o===null)return!1;for(var s=0;s<o.length&&s<t.length;s++)if(!Ee(t[s],o[s]))return!1;return!0}function hl(t,o,s,l,d,p){return un=p,ht=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,H.H=t===null||t.memoizedState===null?Mg:xl,mo=!1,p=s(l,d),mo=!1,Fo&&(p=Kh(o,s,l,d)),Jh(t),p}function Jh(t){H.H=Vi;var o=kt!==null&&kt.next!==null;if(un=0,Jt=kt=ht=null,Qs=!1,qi=0,Yo=null,o)throw Error(r(300));t===null||Kt||(t=t.dependencies,t!==null&&Gs(t)&&(Kt=!0))}function Kh(t,o,s,l){ht=t;var d=0;do{if(Fo&&(Yo=null),qi=0,Fo=!1,25<=d)throw Error(r(301));if(d+=1,Jt=kt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}H.H=Ng,p=o(s,l)}while(Fo);return p}function uT(){var t=H.H,o=t.useState()[0];return o=typeof o.then=="function"?Pi(o):o,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ht.flags|=1024),o}function gl(){var t=Zs!==0;return Zs=0,t}function dl(t,o,s){o.updateQueue=t.updateQueue,o.flags&=-2053,t.lanes&=~s}function fl(t){if(Qs){for(t=t.memoizedState;t!==null;){var o=t.queue;o!==null&&(o.pending=null),t=t.next}Qs=!1}un=0,Jt=kt=ht=null,Fo=!1,qi=Zs=0,Yo=null}function ue(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?ht.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Yt(){if(kt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var o=Jt===null?ht.memoizedState:Jt.next;if(o!==null)Jt=o,kt=t;else{if(t===null)throw ht.alternate===null?Error(r(467)):Error(r(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Jt===null?ht.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function $s(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pi(t){var o=qi;return qi+=1,Yo===null&&(Yo=[]),t=Bh(Yo,t,o),o=ht,(Jt===null?o.memoizedState:Jt.next)===null&&(o=o.alternate,H.H=o===null||o.memoizedState===null?Mg:xl),t}function js(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Pi(t);if(t.$$typeof===P)return ie(t)}throw Error(r(438,String(t)))}function ml(t){var o=null,s=ht.updateQueue;if(s!==null&&(o=s.memoCache),o==null){var l=ht.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(o={data:l.data.map(function(d){return d.slice()}),index:0})))}if(o==null&&(o={data:[],index:0}),s===null&&(s=$s(),ht.updateQueue=s),s.memoCache=o,s=o.data[o.index],s===void 0)for(s=o.data[o.index]=Array(t),l=0;l<t;l++)s[l]=ut;return o.index++,s}function cn(t,o){return typeof o=="function"?o(t):o}function tr(t){var o=Yt();return pl(o,kt,t)}function pl(t,o,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var d=t.baseQueue,p=l.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}o.baseQueue=d=p,l.pending=null}if(p=t.baseState,d===null)t.memoizedState=p;else{o=d.next;var E=_=null,w=null,D=o,B=!1;do{var O=D.lane&-536870913;if(O!==D.lane?(pt&O)===O:(un&O)===O){var k=D.revertLane;if(k===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),O===qo&&(B=!0);else if((un&k)===k){D=D.next,k===qo&&(B=!0);continue}else O={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},w===null?(E=w=O,_=p):w=w.next=O,ht.lanes|=k,qn|=k;O=D.action,mo&&s(p,O),p=D.hasEagerState?D.eagerState:s(p,O)}else k={lane:O,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},w===null?(E=w=k,_=p):w=w.next=k,ht.lanes|=O,qn|=O;D=D.next}while(D!==null&&D!==o);if(w===null?_=p:w.next=E,!Ee(p,t.memoizedState)&&(Kt=!0,B&&(s=Po,s!==null)))throw s;t.memoizedState=p,t.baseState=_,t.baseQueue=w,l.lastRenderedState=p}return d===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function yl(t){var o=Yt(),s=o.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,d=s.pending,p=o.memoizedState;if(d!==null){s.pending=null;var _=d=d.next;do p=t(p,_.action),_=_.next;while(_!==d);Ee(p,o.memoizedState)||(Kt=!0),o.memoizedState=p,o.baseQueue===null&&(o.baseState=p),s.lastRenderedState=p}return[p,l]}function Xh(t,o,s){var l=ht,d=Yt(),p=vt;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=o();var _=!Ee((kt||d).memoizedState,s);if(_&&(d.memoizedState=s,Kt=!0),d=d.queue,Sl($h.bind(null,l,d,t),[t]),d.getSnapshot!==o||_||Jt!==null&&Jt.memoizedState.tag&1){if(l.flags|=2048,Wo(9,{destroy:void 0},Zh.bind(null,l,d,s,o),null),Ht===null)throw Error(r(349));p||(un&127)!==0||Qh(l,o,s)}return s}function Qh(t,o,s){t.flags|=16384,t={getSnapshot:o,value:s},o=ht.updateQueue,o===null?(o=$s(),ht.updateQueue=o,o.stores=[t]):(s=o.stores,s===null?o.stores=[t]:s.push(t))}function Zh(t,o,s,l){o.value=s,o.getSnapshot=l,jh(o)&&tg(t)}function $h(t,o,s){return s(function(){jh(o)&&tg(t)})}function jh(t){var o=t.getSnapshot;t=t.value;try{var s=o();return!Ee(t,s)}catch{return!0}}function tg(t){var o=so(t,2);o!==null&&ve(o,t,2)}function vl(t){var o=ue();if(typeof t=="function"){var s=t;if(t=s(),mo){wn(!0);try{s()}finally{wn(!1)}}}return o.memoizedState=o.baseState=t,o.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:t},o}function eg(t,o,s,l){return t.baseState=s,pl(t,kt,typeof l=="function"?l:cn)}function cT(t,o,s,l,d){if(or(t))throw Error(r(485));if(t=o.action,t!==null){var p={payload:d,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){p.listeners.push(_)}};H.T!==null?s(!0):p.isTransition=!1,l(p),s=o.pending,s===null?(p.next=o.pending=p,ng(o,p)):(p.next=s.next,o.pending=s.next=p)}}function ng(t,o){var s=o.action,l=o.payload,d=t.state;if(o.isTransition){var p=H.T,_={};H.T=_;try{var E=s(d,l),w=H.S;w!==null&&w(_,E),og(t,o,E)}catch(D){Tl(t,o,D)}finally{p!==null&&_.types!==null&&(p.types=_.types),H.T=p}}else try{p=s(d,l),og(t,o,p)}catch(D){Tl(t,o,D)}}function og(t,o,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){ig(t,o,l)},function(l){return Tl(t,o,l)}):ig(t,o,s)}function ig(t,o,s){o.status="fulfilled",o.value=s,sg(o),t.state=s,o=t.pending,o!==null&&(s=o.next,s===o?t.pending=null:(s=s.next,o.next=s,ng(t,s)))}function Tl(t,o,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do o.status="rejected",o.reason=s,sg(o),o=o.next;while(o!==l)}t.action=null}function sg(t){t=t.listeners;for(var o=0;o<t.length;o++)(0,t[o])()}function rg(t,o){return o}function ag(t,o){if(vt){var s=Ht.formState;if(s!==null){t:{var l=ht;if(vt){if(Bt){e:{for(var d=Bt,p=Le;d.nodeType!==8;){if(!p){d=null;break e}if(d=Be(d.nextSibling),d===null){d=null;break e}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){Bt=Be(d.nextSibling),l=d.data==="F!";break t}}Nn(l)}l=!1}l&&(o=s[0])}}return s=ue(),s.memoizedState=s.baseState=o,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rg,lastRenderedState:o},s.queue=l,s=xg.bind(null,ht,l),l.dispatch=s,l=vl(!1),p=wl.bind(null,ht,!1,l.queue),l=ue(),d={state:o,dispatch:null,action:t,pending:null},l.queue=d,s=cT.bind(null,ht,d,p,s),d.dispatch=s,l.memoizedState=t,[o,s,!1]}function lg(t){var o=Yt();return ug(o,kt,t)}function ug(t,o,s){if(o=pl(t,o,rg)[0],t=tr(cn)[0],typeof o=="object"&&o!==null&&typeof o.then=="function")try{var l=Pi(o)}catch(_){throw _===Go?Fs:_}else l=o;o=Yt();var d=o.queue,p=d.dispatch;return s!==o.memoizedState&&(ht.flags|=2048,Wo(9,{destroy:void 0},hT.bind(null,d,s),null)),[l,p,t]}function hT(t,o){t.action=o}function cg(t){var o=Yt(),s=kt;if(s!==null)return ug(o,s,t);Yt(),o=o.memoizedState,s=Yt();var l=s.queue.dispatch;return s.memoizedState=t,[o,l,!1]}function Wo(t,o,s,l){return t={tag:t,create:s,deps:l,inst:o,next:null},o=ht.updateQueue,o===null&&(o=$s(),ht.updateQueue=o),s=o.lastEffect,s===null?o.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,o.lastEffect=t),t}function hg(){return Yt().memoizedState}function er(t,o,s,l){var d=ue();ht.flags|=t,d.memoizedState=Wo(1|o,{destroy:void 0},s,l===void 0?null:l)}function nr(t,o,s,l){var d=Yt();l=l===void 0?null:l;var p=d.memoizedState.inst;kt!==null&&l!==null&&cl(l,kt.memoizedState.deps)?d.memoizedState=Wo(o,p,s,l):(ht.flags|=t,d.memoizedState=Wo(1|o,p,s,l))}function gg(t,o){er(8390656,8,t,o)}function Sl(t,o){nr(2048,8,t,o)}function gT(t){ht.flags|=4;var o=ht.updateQueue;if(o===null)o=$s(),ht.updateQueue=o,o.events=[t];else{var s=o.events;s===null?o.events=[t]:s.push(t)}}function dg(t){var o=Yt().memoizedState;return gT({ref:o,nextImpl:t}),function(){if((xt&2)!==0)throw Error(r(440));return o.impl.apply(void 0,arguments)}}function fg(t,o){return nr(4,2,t,o)}function mg(t,o){return nr(4,4,t,o)}function pg(t,o){if(typeof o=="function"){t=t();var s=o(t);return function(){typeof s=="function"?s():o(null)}}if(o!=null)return t=t(),o.current=t,function(){o.current=null}}function yg(t,o,s){s=s!=null?s.concat([t]):null,nr(4,4,pg.bind(null,o,t),s)}function _l(){}function vg(t,o){var s=Yt();o=o===void 0?null:o;var l=s.memoizedState;return o!==null&&cl(o,l[1])?l[0]:(s.memoizedState=[t,o],t)}function Tg(t,o){var s=Yt();o=o===void 0?null:o;var l=s.memoizedState;if(o!==null&&cl(o,l[1]))return l[0];if(l=t(),mo){wn(!0);try{t()}finally{wn(!1)}}return s.memoizedState=[l,o],l}function El(t,o,s){return s===void 0||(un&1073741824)!==0&&(pt&261930)===0?t.memoizedState=o:(t.memoizedState=s,t=Sd(),ht.lanes|=t,qn|=t,s)}function Sg(t,o,s,l){return Ee(s,o)?s:Oo.current!==null?(t=El(t,s,l),Ee(t,o)||(Kt=!0),t):(un&42)===0||(un&1073741824)!==0&&(pt&261930)===0?(Kt=!0,t.memoizedState=s):(t=Sd(),ht.lanes|=t,qn|=t,o)}function _g(t,o,s,l,d){var p=X.p;X.p=p!==0&&8>p?p:8;var _=H.T,E={};H.T=E,wl(t,!1,o,s);try{var w=d(),D=H.S;if(D!==null&&D(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var B=aT(w,l);Gi(t,o,B,Re(t))}else Gi(t,o,l,Re(t))}catch(O){Gi(t,o,{then:function(){},status:"rejected",reason:O},Re())}finally{X.p=p,_!==null&&E.types!==null&&(_.types=E.types),H.T=_}}function dT(){}function Cl(t,o,s,l){if(t.tag!==5)throw Error(r(476));var d=Eg(t).queue;_g(t,d,o,ot,s===null?dT:function(){return Cg(t),s(l)})}function Eg(t){var o=t.memoizedState;if(o!==null)return o;o={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:ot},next:null};var s={};return o.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:s},next:null},t.memoizedState=o,t=t.alternate,t!==null&&(t.memoizedState=o),o}function Cg(t){var o=Eg(t);o.next===null&&(o=t.alternate.memoizedState),Gi(t,o.next.queue,{},Re())}function Al(){return ie(is)}function Ag(){return Yt().memoizedState}function wg(){return Yt().memoizedState}function fT(t){for(var o=t.return;o!==null;){switch(o.tag){case 24:case 3:var s=Re();t=kn(s);var l=Un(o,t,s);l!==null&&(ve(l,o,s),Li(l,o,s)),o={cache:ja()},t.payload=o;return}o=o.return}}function mT(t,o,s){var l=Re();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},or(t)?bg(o,s):(s=Va(t,o,s,l),s!==null&&(ve(s,t,l),Rg(s,o,l)))}function xg(t,o,s){var l=Re();Gi(t,o,s,l)}function Gi(t,o,s,l){var d={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(or(t))bg(o,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=o.lastRenderedReducer,p!==null))try{var _=o.lastRenderedState,E=p(_,s);if(d.hasEagerState=!0,d.eagerState=E,Ee(E,_))return Hs(t,o,d,0),Ht===null&&Ls(),!1}catch{}finally{}if(s=Va(t,o,d,l),s!==null)return ve(s,t,l),Rg(s,o,l),!0}return!1}function wl(t,o,s,l){if(l={lane:2,revertLane:ou(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},or(t)){if(o)throw Error(r(479))}else o=Va(t,s,l,2),o!==null&&ve(o,t,2)}function or(t){var o=t.alternate;return t===ht||o!==null&&o===ht}function bg(t,o){Fo=Qs=!0;var s=t.pending;s===null?o.next=o:(o.next=s.next,s.next=o),t.pending=o}function Rg(t,o,s){if((s&4194048)!==0){var l=o.lanes;l&=t.pendingLanes,s|=l,o.lanes=s,kc(t,s)}}var Vi={readContext:ie,use:js,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useLayoutEffect:Gt,useInsertionEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useSyncExternalStore:Gt,useId:Gt,useHostTransitionStatus:Gt,useFormState:Gt,useActionState:Gt,useOptimistic:Gt,useMemoCache:Gt,useCacheRefresh:Gt};Vi.useEffectEvent=Gt;var Mg={readContext:ie,use:js,useCallback:function(t,o){return ue().memoizedState=[t,o===void 0?null:o],t},useContext:ie,useEffect:gg,useImperativeHandle:function(t,o,s){s=s!=null?s.concat([t]):null,er(4194308,4,pg.bind(null,o,t),s)},useLayoutEffect:function(t,o){return er(4194308,4,t,o)},useInsertionEffect:function(t,o){er(4,2,t,o)},useMemo:function(t,o){var s=ue();o=o===void 0?null:o;var l=t();if(mo){wn(!0);try{t()}finally{wn(!1)}}return s.memoizedState=[l,o],l},useReducer:function(t,o,s){var l=ue();if(s!==void 0){var d=s(o);if(mo){wn(!0);try{s(o)}finally{wn(!1)}}}else d=o;return l.memoizedState=l.baseState=d,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:d},l.queue=t,t=t.dispatch=mT.bind(null,ht,t),[l.memoizedState,t]},useRef:function(t){var o=ue();return t={current:t},o.memoizedState=t},useState:function(t){t=vl(t);var o=t.queue,s=xg.bind(null,ht,o);return o.dispatch=s,[t.memoizedState,s]},useDebugValue:_l,useDeferredValue:function(t,o){var s=ue();return El(s,t,o)},useTransition:function(){var t=vl(!1);return t=_g.bind(null,ht,t.queue,!0,!1),ue().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,o,s){var l=ht,d=ue();if(vt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=o(),Ht===null)throw Error(r(349));(pt&127)!==0||Qh(l,o,s)}d.memoizedState=s;var p={value:s,getSnapshot:o};return d.queue=p,gg($h.bind(null,l,p,t),[t]),l.flags|=2048,Wo(9,{destroy:void 0},Zh.bind(null,l,p,s,o),null),s},useId:function(){var t=ue(),o=Ht.identifierPrefix;if(vt){var s=Qe,l=Xe;s=(l&~(1<<32-_e(l)-1)).toString(32)+s,o="_"+o+"R_"+s,s=Zs++,0<s&&(o+="H"+s.toString(32)),o+="_"}else s=lT++,o="_"+o+"r_"+s.toString(32)+"_";return t.memoizedState=o},useHostTransitionStatus:Al,useFormState:ag,useActionState:ag,useOptimistic:function(t){var o=ue();o.memoizedState=o.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return o.queue=s,o=wl.bind(null,ht,!0,s),s.dispatch=o,[t,o]},useMemoCache:ml,useCacheRefresh:function(){return ue().memoizedState=fT.bind(null,ht)},useEffectEvent:function(t){var o=ue(),s={impl:t};return o.memoizedState=s,function(){if((xt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},xl={readContext:ie,use:js,useCallback:vg,useContext:ie,useEffect:Sl,useImperativeHandle:yg,useInsertionEffect:fg,useLayoutEffect:mg,useMemo:Tg,useReducer:tr,useRef:hg,useState:function(){return tr(cn)},useDebugValue:_l,useDeferredValue:function(t,o){var s=Yt();return Sg(s,kt.memoizedState,t,o)},useTransition:function(){var t=tr(cn)[0],o=Yt().memoizedState;return[typeof t=="boolean"?t:Pi(t),o]},useSyncExternalStore:Xh,useId:Ag,useHostTransitionStatus:Al,useFormState:lg,useActionState:lg,useOptimistic:function(t,o){var s=Yt();return eg(s,kt,t,o)},useMemoCache:ml,useCacheRefresh:wg};xl.useEffectEvent=dg;var Ng={readContext:ie,use:js,useCallback:vg,useContext:ie,useEffect:Sl,useImperativeHandle:yg,useInsertionEffect:fg,useLayoutEffect:mg,useMemo:Tg,useReducer:yl,useRef:hg,useState:function(){return yl(cn)},useDebugValue:_l,useDeferredValue:function(t,o){var s=Yt();return kt===null?El(s,t,o):Sg(s,kt.memoizedState,t,o)},useTransition:function(){var t=yl(cn)[0],o=Yt().memoizedState;return[typeof t=="boolean"?t:Pi(t),o]},useSyncExternalStore:Xh,useId:Ag,useHostTransitionStatus:Al,useFormState:cg,useActionState:cg,useOptimistic:function(t,o){var s=Yt();return kt!==null?eg(s,kt,t,o):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:ml,useCacheRefresh:wg};Ng.useEffectEvent=dg;function bl(t,o,s,l){o=t.memoizedState,s=s(l,o),s=s==null?o:T({},o,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Rl={enqueueSetState:function(t,o,s){t=t._reactInternals;var l=Re(),d=kn(l);d.payload=o,s!=null&&(d.callback=s),o=Un(t,d,l),o!==null&&(ve(o,t,l),Li(o,t,l))},enqueueReplaceState:function(t,o,s){t=t._reactInternals;var l=Re(),d=kn(l);d.tag=1,d.payload=o,s!=null&&(d.callback=s),o=Un(t,d,l),o!==null&&(ve(o,t,l),Li(o,t,l))},enqueueForceUpdate:function(t,o){t=t._reactInternals;var s=Re(),l=kn(s);l.tag=2,o!=null&&(l.callback=o),o=Un(t,l,s),o!==null&&(ve(o,t,s),Li(o,t,s))}};function Ig(t,o,s,l,d,p,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,_):o.prototype&&o.prototype.isPureReactComponent?!Ri(s,l)||!Ri(d,p):!0}function Dg(t,o,s,l){t=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(s,l),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(s,l),o.state!==t&&Rl.enqueueReplaceState(o,o.state,null)}function po(t,o){var s=o;if("ref"in o){s={};for(var l in o)l!=="ref"&&(s[l]=o[l])}if(t=t.defaultProps){s===o&&(s=T({},s));for(var d in t)s[d]===void 0&&(s[d]=t[d])}return s}function kg(t){zs(t)}function Ug(t){console.error(t)}function zg(t){zs(t)}function ir(t,o){try{var s=t.onUncaughtError;s(o.value,{componentStack:o.stack})}catch(l){setTimeout(function(){throw l})}}function Lg(t,o,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:o.tag===1?o.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Ml(t,o,s){return s=kn(s),s.tag=3,s.payload={element:null},s.callback=function(){ir(t,o)},s}function Hg(t){return t=kn(t),t.tag=3,t}function Bg(t,o,s,l){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var p=l.value;t.payload=function(){return d(p)},t.callback=function(){Lg(o,s,l)}}var _=s.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Lg(o,s,l),typeof d!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function pT(t,o,s,l,d){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(o=s.alternate,o!==null&&Bo(o,s,d,!0),s=Ae.current,s!==null){switch(s.tag){case 31:case 13:return He===null?pr():s.alternate===null&&Vt===0&&(Vt=3),s.flags&=-257,s.flags|=65536,s.lanes=d,l===Ys?s.flags|=16384:(o=s.updateQueue,o===null?s.updateQueue=new Set([l]):o.add(l),tu(t,l,d)),!1;case 22:return s.flags|=65536,l===Ys?s.flags|=16384:(o=s.updateQueue,o===null?(o={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=o):(s=o.retryQueue,s===null?o.retryQueue=new Set([l]):s.add(l)),tu(t,l,d)),!1}throw Error(r(435,s.tag))}return tu(t,l,d),pr(),!1}if(vt)return o=Ae.current,o!==null?((o.flags&65536)===0&&(o.flags|=256),o.flags|=65536,o.lanes=d,l!==Ka&&(t=Error(r(422),{cause:l}),Ii(ke(t,s)))):(l!==Ka&&(o=Error(r(423),{cause:l}),Ii(ke(o,s))),t=t.current.alternate,t.flags|=65536,d&=-d,t.lanes|=d,l=ke(l,s),d=Ml(t.stateNode,l,d),sl(t,d),Vt!==4&&(Vt=2)),!1;var p=Error(r(520),{cause:l});if(p=ke(p,s),Qi===null?Qi=[p]:Qi.push(p),Vt!==4&&(Vt=2),o===null)return!0;l=ke(l,s),s=o;do{switch(s.tag){case 3:return s.flags|=65536,t=d&-d,s.lanes|=t,t=Ml(s.stateNode,l,t),sl(s,t),!1;case 1:if(o=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof o.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pn===null||!Pn.has(p))))return s.flags|=65536,d&=-d,s.lanes|=d,d=Hg(d),Bg(d,t,s,l),sl(s,d),!1}s=s.return}while(s!==null);return!1}var Nl=Error(r(461)),Kt=!1;function se(t,o,s,l){o.child=t===null?Vh(o,null,s,l):fo(o,t.child,s,l)}function qg(t,o,s,l,d){s=s.render;var p=o.ref;if("ref"in l){var _={};for(var E in l)E!=="ref"&&(_[E]=l[E])}else _=l;return uo(o),l=hl(t,o,s,_,p,d),E=gl(),t!==null&&!Kt?(dl(t,o,d),hn(t,o,d)):(vt&&E&&Wa(o),o.flags|=1,se(t,o,l,d),o.child)}function Pg(t,o,s,l,d){if(t===null){var p=s.type;return typeof p=="function"&&!Oa(p)&&p.defaultProps===void 0&&s.compare===null?(o.tag=15,o.type=p,Gg(t,o,p,l,d)):(t=qs(s.type,null,l,o,o.mode,d),t.ref=o.ref,t.return=o,o.child=t)}if(p=t.child,!Bl(t,d)){var _=p.memoizedProps;if(s=s.compare,s=s!==null?s:Ri,s(_,l)&&t.ref===o.ref)return hn(t,o,d)}return o.flags|=1,t=sn(p,l),t.ref=o.ref,t.return=o,o.child=t}function Gg(t,o,s,l,d){if(t!==null){var p=t.memoizedProps;if(Ri(p,l)&&t.ref===o.ref)if(Kt=!1,o.pendingProps=l=p,Bl(t,d))(t.flags&131072)!==0&&(Kt=!0);else return o.lanes=t.lanes,hn(t,o,d)}return Il(t,o,s,l,d)}function Vg(t,o,s,l){var d=l.children,p=t!==null?t.memoizedState:null;if(t===null&&o.stateNode===null&&(o.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((o.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=o.child=t.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~p}else l=0,o.child=null;return Og(t,o,p,s,l)}if((s&536870912)!==0)o.memoizedState={baseLanes:0,cachePool:null},t!==null&&Os(o,p!==null?p.cachePool:null),p!==null?Yh(o,p):al(),Wh(o);else return l=o.lanes=536870912,Og(t,o,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(Os(o,p.cachePool),Yh(o,p),Ln(),o.memoizedState=null):(t!==null&&Os(o,null),al(),Ln());return se(t,o,d,s),o.child}function Oi(t,o){return t!==null&&t.tag===22||o.stateNode!==null||(o.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.sibling}function Og(t,o,s,l,d){var p=el();return p=p===null?null:{parent:Wt._currentValue,pool:p},o.memoizedState={baseLanes:s,cachePool:p},t!==null&&Os(o,null),al(),Wh(o),t!==null&&Bo(t,o,l,!0),o.childLanes=d,null}function sr(t,o){return o=ar({mode:o.mode,children:o.children},t.mode),o.ref=t.ref,t.child=o,o.return=t,o}function Fg(t,o,s){return fo(o,t.child,null,s),t=sr(o,o.pendingProps),t.flags|=2,we(o),o.memoizedState=null,t}function yT(t,o,s){var l=o.pendingProps,d=(o.flags&128)!==0;if(o.flags&=-129,t===null){if(vt){if(l.mode==="hidden")return t=sr(o,l),o.lanes=536870912,Oi(null,t);if(ul(o),(t=Bt)?(t=nf(t,Le),t=t!==null&&t.data==="&"?t:null,t!==null&&(o.memoizedState={dehydrated:t,treeContext:Rn!==null?{id:Xe,overflow:Qe}:null,retryLane:536870912,hydrationErrors:null},s=bh(t),s.return=o,o.child=s,oe=o,Bt=null)):t=null,t===null)throw Nn(o);return o.lanes=536870912,null}return sr(o,l)}var p=t.memoizedState;if(p!==null){var _=p.dehydrated;if(ul(o),d)if(o.flags&256)o.flags&=-257,o=Fg(t,o,s);else if(o.memoizedState!==null)o.child=t.child,o.flags|=128,o=null;else throw Error(r(558));else if(Kt||Bo(t,o,s,!1),d=(s&t.childLanes)!==0,Kt||d){if(l=Ht,l!==null&&(_=Uc(l,s),_!==0&&_!==p.retryLane))throw p.retryLane=_,so(t,_),ve(l,t,_),Nl;pr(),o=Fg(t,o,s)}else t=p.treeContext,Bt=Be(_.nextSibling),oe=o,vt=!0,Mn=null,Le=!1,t!==null&&Nh(o,t),o=sr(o,l),o.flags|=4096;return o}return t=sn(t.child,{mode:l.mode,children:l.children}),t.ref=o.ref,o.child=t,t.return=o,t}function rr(t,o){var s=o.ref;if(s===null)t!==null&&t.ref!==null&&(o.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(o.flags|=4194816)}}function Il(t,o,s,l,d){return uo(o),s=hl(t,o,s,l,void 0,d),l=gl(),t!==null&&!Kt?(dl(t,o,d),hn(t,o,d)):(vt&&l&&Wa(o),o.flags|=1,se(t,o,s,d),o.child)}function Yg(t,o,s,l,d,p){return uo(o),o.updateQueue=null,s=Kh(o,l,s,d),Jh(t),l=gl(),t!==null&&!Kt?(dl(t,o,p),hn(t,o,p)):(vt&&l&&Wa(o),o.flags|=1,se(t,o,s,p),o.child)}function Wg(t,o,s,l,d){if(uo(o),o.stateNode===null){var p=Uo,_=s.contextType;typeof _=="object"&&_!==null&&(p=ie(_)),p=new s(l,p),o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Rl,o.stateNode=p,p._reactInternals=o,p=o.stateNode,p.props=l,p.state=o.memoizedState,p.refs={},ol(o),_=s.contextType,p.context=typeof _=="object"&&_!==null?ie(_):Uo,p.state=o.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(bl(o,s,_,l),p.state=o.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(_=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),_!==p.state&&Rl.enqueueReplaceState(p,p.state,null),Bi(o,l,p,d),Hi(),p.state=o.memoizedState),typeof p.componentDidMount=="function"&&(o.flags|=4194308),l=!0}else if(t===null){p=o.stateNode;var E=o.memoizedProps,w=po(s,E);p.props=w;var D=p.context,B=s.contextType;_=Uo,typeof B=="object"&&B!==null&&(_=ie(B));var O=s.getDerivedStateFromProps;B=typeof O=="function"||typeof p.getSnapshotBeforeUpdate=="function",E=o.pendingProps!==E,B||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E||D!==_)&&Dg(o,p,l,_),Dn=!1;var k=o.memoizedState;p.state=k,Bi(o,l,p,d),Hi(),D=o.memoizedState,E||k!==D||Dn?(typeof O=="function"&&(bl(o,s,O,l),D=o.memoizedState),(w=Dn||Ig(o,s,w,l,k,D,_))?(B||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(o.flags|=4194308)):(typeof p.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=l,o.memoizedState=D),p.props=l,p.state=D,p.context=_,l=w):(typeof p.componentDidMount=="function"&&(o.flags|=4194308),l=!1)}else{p=o.stateNode,il(t,o),_=o.memoizedProps,B=po(s,_),p.props=B,O=o.pendingProps,k=p.context,D=s.contextType,w=Uo,typeof D=="object"&&D!==null&&(w=ie(D)),E=s.getDerivedStateFromProps,(D=typeof E=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==O||k!==w)&&Dg(o,p,l,w),Dn=!1,k=o.memoizedState,p.state=k,Bi(o,l,p,d),Hi();var z=o.memoizedState;_!==O||k!==z||Dn||t!==null&&t.dependencies!==null&&Gs(t.dependencies)?(typeof E=="function"&&(bl(o,s,E,l),z=o.memoizedState),(B=Dn||Ig(o,s,B,l,k,z,w)||t!==null&&t.dependencies!==null&&Gs(t.dependencies))?(D||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,z,w),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,z,w)),typeof p.componentDidUpdate=="function"&&(o.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&k===t.memoizedState||(o.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&k===t.memoizedState||(o.flags|=1024),o.memoizedProps=l,o.memoizedState=z),p.props=l,p.state=z,p.context=w,l=B):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&k===t.memoizedState||(o.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&k===t.memoizedState||(o.flags|=1024),l=!1)}return p=l,rr(t,o),l=(o.flags&128)!==0,p||l?(p=o.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),o.flags|=1,t!==null&&l?(o.child=fo(o,t.child,null,d),o.child=fo(o,null,s,d)):se(t,o,s,d),o.memoizedState=p.state,t=o.child):t=hn(t,o,d),t}function Jg(t,o,s,l){return ao(),o.flags|=256,se(t,o,s,l),o.child}var Dl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kl(t){return{baseLanes:t,cachePool:Lh()}}function Ul(t,o,s){return t=t!==null?t.childLanes&~s:0,o&&(t|=be),t}function Kg(t,o,s){var l=o.pendingProps,d=!1,p=(o.flags&128)!==0,_;if((_=p)||(_=t!==null&&t.memoizedState===null?!1:(Ft.current&2)!==0),_&&(d=!0,o.flags&=-129),_=(o.flags&32)!==0,o.flags&=-33,t===null){if(vt){if(d?zn(o):Ln(),(t=Bt)?(t=nf(t,Le),t=t!==null&&t.data!=="&"?t:null,t!==null&&(o.memoizedState={dehydrated:t,treeContext:Rn!==null?{id:Xe,overflow:Qe}:null,retryLane:536870912,hydrationErrors:null},s=bh(t),s.return=o,o.child=s,oe=o,Bt=null)):t=null,t===null)throw Nn(o);return pu(t)?o.lanes=32:o.lanes=536870912,null}var E=l.children;return l=l.fallback,d?(Ln(),d=o.mode,E=ar({mode:"hidden",children:E},d),l=ro(l,d,s,null),E.return=o,l.return=o,E.sibling=l,o.child=E,l=o.child,l.memoizedState=kl(s),l.childLanes=Ul(t,_,s),o.memoizedState=Dl,Oi(null,l)):(zn(o),zl(o,E))}var w=t.memoizedState;if(w!==null&&(E=w.dehydrated,E!==null)){if(p)o.flags&256?(zn(o),o.flags&=-257,o=Ll(t,o,s)):o.memoizedState!==null?(Ln(),o.child=t.child,o.flags|=128,o=null):(Ln(),E=l.fallback,d=o.mode,l=ar({mode:"visible",children:l.children},d),E=ro(E,d,s,null),E.flags|=2,l.return=o,E.return=o,l.sibling=E,o.child=l,fo(o,t.child,null,s),l=o.child,l.memoizedState=kl(s),l.childLanes=Ul(t,_,s),o.memoizedState=Dl,o=Oi(null,l));else if(zn(o),pu(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var D=_.dgst;_=D,l=Error(r(419)),l.stack="",l.digest=_,Ii({value:l,source:null,stack:null}),o=Ll(t,o,s)}else if(Kt||Bo(t,o,s,!1),_=(s&t.childLanes)!==0,Kt||_){if(_=Ht,_!==null&&(l=Uc(_,s),l!==0&&l!==w.retryLane))throw w.retryLane=l,so(t,l),ve(_,t,l),Nl;mu(E)||pr(),o=Ll(t,o,s)}else mu(E)?(o.flags|=192,o.child=t.child,o=null):(t=w.treeContext,Bt=Be(E.nextSibling),oe=o,vt=!0,Mn=null,Le=!1,t!==null&&Nh(o,t),o=zl(o,l.children),o.flags|=4096);return o}return d?(Ln(),E=l.fallback,d=o.mode,w=t.child,D=w.sibling,l=sn(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,D!==null?E=sn(D,E):(E=ro(E,d,s,null),E.flags|=2),E.return=o,l.return=o,l.sibling=E,o.child=l,Oi(null,l),l=o.child,E=t.child.memoizedState,E===null?E=kl(s):(d=E.cachePool,d!==null?(w=Wt._currentValue,d=d.parent!==w?{parent:w,pool:w}:d):d=Lh(),E={baseLanes:E.baseLanes|s,cachePool:d}),l.memoizedState=E,l.childLanes=Ul(t,_,s),o.memoizedState=Dl,Oi(t.child,l)):(zn(o),s=t.child,t=s.sibling,s=sn(s,{mode:"visible",children:l.children}),s.return=o,s.sibling=null,t!==null&&(_=o.deletions,_===null?(o.deletions=[t],o.flags|=16):_.push(t)),o.child=s,o.memoizedState=null,s)}function zl(t,o){return o=ar({mode:"visible",children:o},t.mode),o.return=t,t.child=o}function ar(t,o){return t=Ce(22,t,null,o),t.lanes=0,t}function Ll(t,o,s){return fo(o,t.child,null,s),t=zl(o,o.pendingProps.children),t.flags|=2,o.memoizedState=null,t}function Xg(t,o,s){t.lanes|=o;var l=t.alternate;l!==null&&(l.lanes|=o),Za(t.return,o,s)}function Hl(t,o,s,l,d,p){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:d,treeForkCount:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=l,_.tail=s,_.tailMode=d,_.treeForkCount=p)}function Qg(t,o,s){var l=o.pendingProps,d=l.revealOrder,p=l.tail;l=l.children;var _=Ft.current,E=(_&2)!==0;if(E?(_=_&1|2,o.flags|=128):_&=1,$(Ft,_),se(t,o,l,s),l=vt?Ni:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=o.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,s,o);else if(t.tag===19)Xg(t,s,o);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===o)break t;for(;t.sibling===null;){if(t.return===null||t.return===o)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(d){case"forwards":for(s=o.child,d=null;s!==null;)t=s.alternate,t!==null&&Xs(t)===null&&(d=s),s=s.sibling;s=d,s===null?(d=o.child,o.child=null):(d=s.sibling,s.sibling=null),Hl(o,!1,d,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,d=o.child,o.child=null;d!==null;){if(t=d.alternate,t!==null&&Xs(t)===null){o.child=d;break}t=d.sibling,d.sibling=s,s=d,d=t}Hl(o,!0,s,null,p,l);break;case"together":Hl(o,!1,null,null,void 0,l);break;default:o.memoizedState=null}return o.child}function hn(t,o,s){if(t!==null&&(o.dependencies=t.dependencies),qn|=o.lanes,(s&o.childLanes)===0)if(t!==null){if(Bo(t,o,s,!1),(s&o.childLanes)===0)return null}else return null;if(t!==null&&o.child!==t.child)throw Error(r(153));if(o.child!==null){for(t=o.child,s=sn(t,t.pendingProps),o.child=s,s.return=o;t.sibling!==null;)t=t.sibling,s=s.sibling=sn(t,t.pendingProps),s.return=o;s.sibling=null}return o.child}function Bl(t,o){return(t.lanes&o)!==0?!0:(t=t.dependencies,!!(t!==null&&Gs(t)))}function vT(t,o,s){switch(o.tag){case 3:le(o,o.stateNode.containerInfo),In(o,Wt,t.memoizedState.cache),ao();break;case 27:case 5:mi(o);break;case 4:le(o,o.stateNode.containerInfo);break;case 10:In(o,o.type,o.memoizedProps.value);break;case 31:if(o.memoizedState!==null)return o.flags|=128,ul(o),null;break;case 13:var l=o.memoizedState;if(l!==null)return l.dehydrated!==null?(zn(o),o.flags|=128,null):(s&o.child.childLanes)!==0?Kg(t,o,s):(zn(o),t=hn(t,o,s),t!==null?t.sibling:null);zn(o);break;case 19:var d=(t.flags&128)!==0;if(l=(s&o.childLanes)!==0,l||(Bo(t,o,s,!1),l=(s&o.childLanes)!==0),d){if(l)return Qg(t,o,s);o.flags|=128}if(d=o.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$(Ft,Ft.current),l)break;return null;case 22:return o.lanes=0,Vg(t,o,s,o.pendingProps);case 24:In(o,Wt,t.memoizedState.cache)}return hn(t,o,s)}function Zg(t,o,s){if(t!==null)if(t.memoizedProps!==o.pendingProps)Kt=!0;else{if(!Bl(t,s)&&(o.flags&128)===0)return Kt=!1,vT(t,o,s);Kt=(t.flags&131072)!==0}else Kt=!1,vt&&(o.flags&1048576)!==0&&Mh(o,Ni,o.index);switch(o.lanes=0,o.tag){case 16:t:{var l=o.pendingProps;if(t=ho(o.elementType),o.type=t,typeof t=="function")Oa(t)?(l=po(t,l),o.tag=1,o=Wg(null,o,t,l,s)):(o.tag=0,o=Il(null,o,t,l,s));else{if(t!=null){var d=t.$$typeof;if(d===J){o.tag=11,o=qg(null,o,t,l,s);break t}else if(d===K){o.tag=14,o=Pg(null,o,t,l,s);break t}}throw o=St(t)||t,Error(r(306,o,""))}}return o;case 0:return Il(t,o,o.type,o.pendingProps,s);case 1:return l=o.type,d=po(l,o.pendingProps),Wg(t,o,l,d,s);case 3:t:{if(le(o,o.stateNode.containerInfo),t===null)throw Error(r(387));l=o.pendingProps;var p=o.memoizedState;d=p.element,il(t,o),Bi(o,l,null,s);var _=o.memoizedState;if(l=_.cache,In(o,Wt,l),l!==p.cache&&$a(o,[Wt],s,!0),Hi(),l=_.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:_.cache},o.updateQueue.baseState=p,o.memoizedState=p,o.flags&256){o=Jg(t,o,l,s);break t}else if(l!==d){d=ke(Error(r(424)),o),Ii(d),o=Jg(t,o,l,s);break t}else{switch(t=o.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Bt=Be(t.firstChild),oe=o,vt=!0,Mn=null,Le=!0,s=Vh(o,null,l,s),o.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ao(),l===d){o=hn(t,o,s);break t}se(t,o,l,s)}o=o.child}return o;case 26:return rr(t,o),t===null?(s=uf(o.type,null,o.pendingProps,null))?o.memoizedState=s:vt||(s=o.type,t=o.pendingProps,l=Cr(dt.current).createElement(s),l[ne]=o,l[ge]=t,re(l,s,t),$t(l),o.stateNode=l):o.memoizedState=uf(o.type,t.memoizedProps,o.pendingProps,t.memoizedState),null;case 27:return mi(o),t===null&&vt&&(l=o.stateNode=rf(o.type,o.pendingProps,dt.current),oe=o,Le=!0,d=Bt,Fn(o.type)?(yu=d,Bt=Be(l.firstChild)):Bt=d),se(t,o,o.pendingProps.children,s),rr(t,o),t===null&&(o.flags|=4194304),o.child;case 5:return t===null&&vt&&((d=l=Bt)&&(l=KT(l,o.type,o.pendingProps,Le),l!==null?(o.stateNode=l,oe=o,Bt=Be(l.firstChild),Le=!1,d=!0):d=!1),d||Nn(o)),mi(o),d=o.type,p=o.pendingProps,_=t!==null?t.memoizedProps:null,l=p.children,gu(d,p)?l=null:_!==null&&gu(d,_)&&(o.flags|=32),o.memoizedState!==null&&(d=hl(t,o,uT,null,null,s),is._currentValue=d),rr(t,o),se(t,o,l,s),o.child;case 6:return t===null&&vt&&((t=s=Bt)&&(s=XT(s,o.pendingProps,Le),s!==null?(o.stateNode=s,oe=o,Bt=null,t=!0):t=!1),t||Nn(o)),null;case 13:return Kg(t,o,s);case 4:return le(o,o.stateNode.containerInfo),l=o.pendingProps,t===null?o.child=fo(o,null,l,s):se(t,o,l,s),o.child;case 11:return qg(t,o,o.type,o.pendingProps,s);case 7:return se(t,o,o.pendingProps,s),o.child;case 8:return se(t,o,o.pendingProps.children,s),o.child;case 12:return se(t,o,o.pendingProps.children,s),o.child;case 10:return l=o.pendingProps,In(o,o.type,l.value),se(t,o,l.children,s),o.child;case 9:return d=o.type._context,l=o.pendingProps.children,uo(o),d=ie(d),l=l(d),o.flags|=1,se(t,o,l,s),o.child;case 14:return Pg(t,o,o.type,o.pendingProps,s);case 15:return Gg(t,o,o.type,o.pendingProps,s);case 19:return Qg(t,o,s);case 31:return yT(t,o,s);case 22:return Vg(t,o,s,o.pendingProps);case 24:return uo(o),l=ie(Wt),t===null?(d=el(),d===null&&(d=Ht,p=ja(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=s),d=p),o.memoizedState={parent:l,cache:d},ol(o),In(o,Wt,d)):((t.lanes&s)!==0&&(il(t,o),Bi(o,null,null,s),Hi()),d=t.memoizedState,p=o.memoizedState,d.parent!==l?(d={parent:l,cache:l},o.memoizedState=d,o.lanes===0&&(o.memoizedState=o.updateQueue.baseState=d),In(o,Wt,l)):(l=p.cache,In(o,Wt,l),l!==d.cache&&$a(o,[Wt],s,!0))),se(t,o,o.pendingProps.children,s),o.child;case 29:throw o.pendingProps}throw Error(r(156,o.tag))}function gn(t){t.flags|=4}function ql(t,o,s,l,d){if((o=(t.mode&32)!==0)&&(o=!1),o){if(t.flags|=16777216,(d&335544128)===d)if(t.stateNode.complete)t.flags|=8192;else if(Ad())t.flags|=8192;else throw go=Ys,nl}else t.flags&=-16777217}function $g(t,o){if(o.type!=="stylesheet"||(o.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ff(o))if(Ad())t.flags|=8192;else throw go=Ys,nl}function lr(t,o){o!==null&&(t.flags|=4),t.flags&16384&&(o=t.tag!==22?Ic():536870912,t.lanes|=o,Qo|=o)}function Fi(t,o){if(!vt)switch(t.tailMode){case"hidden":o=t.tail;for(var s=null;o!==null;)o.alternate!==null&&(s=o),o=o.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?o||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function qt(t){var o=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(o)for(var d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=s,o}function TT(t,o,s){var l=o.pendingProps;switch(Ja(o),o.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(o),null;case 1:return qt(o),null;case 3:return s=o.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),o.memoizedState.cache!==l&&(o.flags|=2048),ln(Wt),Ot(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ho(o)?gn(o):t===null||t.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Xa())),qt(o),null;case 26:var d=o.type,p=o.memoizedState;return t===null?(gn(o),p!==null?(qt(o),$g(o,p)):(qt(o),ql(o,d,null,l,s))):p?p!==t.memoizedState?(gn(o),qt(o),$g(o,p)):(qt(o),o.flags&=-16777217):(t=t.memoizedProps,t!==l&&gn(o),qt(o),ql(o,d,t,l,s)),null;case 27:if(Ts(o),s=dt.current,d=o.type,t!==null&&o.stateNode!=null)t.memoizedProps!==l&&gn(o);else{if(!l){if(o.stateNode===null)throw Error(r(166));return qt(o),null}t=et.current,Ho(o)?Ih(o):(t=rf(d,l,s),o.stateNode=t,gn(o))}return qt(o),null;case 5:if(Ts(o),d=o.type,t!==null&&o.stateNode!=null)t.memoizedProps!==l&&gn(o);else{if(!l){if(o.stateNode===null)throw Error(r(166));return qt(o),null}if(p=et.current,Ho(o))Ih(o);else{var _=Cr(dt.current);switch(p){case 1:p=_.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:p=_.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":p=_.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":p=_.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":p=_.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?_.createElement("select",{is:l.is}):_.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?_.createElement(d,{is:l.is}):_.createElement(d)}}p[ne]=o,p[ge]=l;t:for(_=o.child;_!==null;){if(_.tag===5||_.tag===6)p.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===o)break t;for(;_.sibling===null;){if(_.return===null||_.return===o)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}o.stateNode=p;t:switch(re(p,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&gn(o)}}return qt(o),ql(o,o.type,t===null?null:t.memoizedProps,o.pendingProps,s),null;case 6:if(t&&o.stateNode!=null)t.memoizedProps!==l&&gn(o);else{if(typeof l!="string"&&o.stateNode===null)throw Error(r(166));if(t=dt.current,Ho(o)){if(t=o.stateNode,s=o.memoizedProps,l=null,d=oe,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}t[ne]=o,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Kd(t.nodeValue,s)),t||Nn(o,!0)}else t=Cr(t).createTextNode(l),t[ne]=o,o.stateNode=t}return qt(o),null;case 31:if(s=o.memoizedState,t===null||t.memoizedState!==null){if(l=Ho(o),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=o.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ne]=o}else ao(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;qt(o),t=!1}else s=Xa(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return o.flags&256?(we(o),o):(we(o),null);if((o.flags&128)!==0)throw Error(r(558))}return qt(o),null;case 13:if(l=o.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(d=Ho(o),l!==null&&l.dehydrated!==null){if(t===null){if(!d)throw Error(r(318));if(d=o.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(r(317));d[ne]=o}else ao(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;qt(o),d=!1}else d=Xa(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=d),d=!0;if(!d)return o.flags&256?(we(o),o):(we(o),null)}return we(o),(o.flags&128)!==0?(o.lanes=s,o):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=o.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==d&&(l.flags|=2048)),s!==t&&s&&(o.child.flags|=8192),lr(o,o.updateQueue),qt(o),null);case 4:return Ot(),t===null&&au(o.stateNode.containerInfo),qt(o),null;case 10:return ln(o.type),qt(o),null;case 19:if(F(Ft),l=o.memoizedState,l===null)return qt(o),null;if(d=(o.flags&128)!==0,p=l.rendering,p===null)if(d)Fi(l,!1);else{if(Vt!==0||t!==null&&(t.flags&128)!==0)for(t=o.child;t!==null;){if(p=Xs(t),p!==null){for(o.flags|=128,Fi(l,!1),t=p.updateQueue,o.updateQueue=t,lr(o,t),o.subtreeFlags=0,t=s,s=o.child;s!==null;)xh(s,t),s=s.sibling;return $(Ft,Ft.current&1|2),vt&&rn(o,l.treeForkCount),o.child}t=t.sibling}l.tail!==null&&Te()>dr&&(o.flags|=128,d=!0,Fi(l,!1),o.lanes=4194304)}else{if(!d)if(t=Xs(p),t!==null){if(o.flags|=128,d=!0,t=t.updateQueue,o.updateQueue=t,lr(o,t),Fi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!vt)return qt(o),null}else 2*Te()-l.renderingStartTime>dr&&s!==536870912&&(o.flags|=128,d=!0,Fi(l,!1),o.lanes=4194304);l.isBackwards?(p.sibling=o.child,o.child=p):(t=l.last,t!==null?t.sibling=p:o.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Te(),t.sibling=null,s=Ft.current,$(Ft,d?s&1|2:s&1),vt&&rn(o,l.treeForkCount),t):(qt(o),null);case 22:case 23:return we(o),ll(),l=o.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(o.flags|=8192):l&&(o.flags|=8192),l?(s&536870912)!==0&&(o.flags&128)===0&&(qt(o),o.subtreeFlags&6&&(o.flags|=8192)):qt(o),s=o.updateQueue,s!==null&&lr(o,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(l=o.memoizedState.cachePool.pool),l!==s&&(o.flags|=2048),t!==null&&F(co),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),o.memoizedState.cache!==s&&(o.flags|=2048),ln(Wt),qt(o),null;case 25:return null;case 30:return null}throw Error(r(156,o.tag))}function ST(t,o){switch(Ja(o),o.tag){case 1:return t=o.flags,t&65536?(o.flags=t&-65537|128,o):null;case 3:return ln(Wt),Ot(),t=o.flags,(t&65536)!==0&&(t&128)===0?(o.flags=t&-65537|128,o):null;case 26:case 27:case 5:return Ts(o),null;case 31:if(o.memoizedState!==null){if(we(o),o.alternate===null)throw Error(r(340));ao()}return t=o.flags,t&65536?(o.flags=t&-65537|128,o):null;case 13:if(we(o),t=o.memoizedState,t!==null&&t.dehydrated!==null){if(o.alternate===null)throw Error(r(340));ao()}return t=o.flags,t&65536?(o.flags=t&-65537|128,o):null;case 19:return F(Ft),null;case 4:return Ot(),null;case 10:return ln(o.type),null;case 22:case 23:return we(o),ll(),t!==null&&F(co),t=o.flags,t&65536?(o.flags=t&-65537|128,o):null;case 24:return ln(Wt),null;case 25:return null;default:return null}}function jg(t,o){switch(Ja(o),o.tag){case 3:ln(Wt),Ot();break;case 26:case 27:case 5:Ts(o);break;case 4:Ot();break;case 31:o.memoizedState!==null&&we(o);break;case 13:we(o);break;case 19:F(Ft);break;case 10:ln(o.type);break;case 22:case 23:we(o),ll(),t!==null&&F(co);break;case 24:ln(Wt)}}function Yi(t,o){try{var s=o.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var d=l.next;s=d;do{if((s.tag&t)===t){l=void 0;var p=s.create,_=s.inst;l=p(),_.destroy=l}s=s.next}while(s!==d)}}catch(E){Dt(o,o.return,E)}}function Hn(t,o,s){try{var l=o.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var p=d.next;l=p;do{if((l.tag&t)===t){var _=l.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,d=o;var w=s,D=E;try{D()}catch(B){Dt(d,w,B)}}}l=l.next}while(l!==p)}}catch(B){Dt(o,o.return,B)}}function td(t){var o=t.updateQueue;if(o!==null){var s=t.stateNode;try{Fh(o,s)}catch(l){Dt(t,t.return,l)}}}function ed(t,o,s){s.props=po(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Dt(t,o,l)}}function Wi(t,o){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(d){Dt(t,o,d)}}function Ze(t,o){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(d){Dt(t,o,d)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){Dt(t,o,d)}else s.current=null}function nd(t){var o=t.type,s=t.memoizedProps,l=t.stateNode;try{t:switch(o){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(d){Dt(t,t.return,d)}}function Pl(t,o,s){try{var l=t.stateNode;VT(l,t.type,s,o),l[ge]=o}catch(d){Dt(t,t.return,d)}}function od(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fn(t.type)||t.tag===4}function Gl(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||od(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vl(t,o,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,o?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,o):(o=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,o.appendChild(t),s=s._reactRootContainer,s!=null||o.onclick!==null||(o.onclick=nn));else if(l!==4&&(l===27&&Fn(t.type)&&(s=t.stateNode,o=null),t=t.child,t!==null))for(Vl(t,o,s),t=t.sibling;t!==null;)Vl(t,o,s),t=t.sibling}function ur(t,o,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,o?s.insertBefore(t,o):s.appendChild(t);else if(l!==4&&(l===27&&Fn(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(ur(t,o,s),t=t.sibling;t!==null;)ur(t,o,s),t=t.sibling}function id(t){var o=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,d=o.attributes;d.length;)o.removeAttributeNode(d[0]);re(o,l,s),o[ne]=t,o[ge]=s}catch(p){Dt(t,t.return,p)}}var dn=!1,Xt=!1,Ol=!1,sd=typeof WeakSet=="function"?WeakSet:Set,jt=null;function _T(t,o){if(t=t.containerInfo,cu=Nr,t=yh(t),La(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break t}var _=0,E=-1,w=-1,D=0,B=0,O=t,k=null;e:for(;;){for(var z;O!==s||d!==0&&O.nodeType!==3||(E=_+d),O!==p||l!==0&&O.nodeType!==3||(w=_+l),O.nodeType===3&&(_+=O.nodeValue.length),(z=O.firstChild)!==null;)k=O,O=z;for(;;){if(O===t)break e;if(k===s&&++D===d&&(E=_),k===p&&++B===l&&(w=_),(z=O.nextSibling)!==null)break;O=k,k=O.parentNode}O=z}s=E===-1||w===-1?null:{start:E,end:w}}else s=null}s=s||{start:0,end:0}}else s=null;for(hu={focusedElem:t,selectionRange:s},Nr=!1,jt=o;jt!==null;)if(o=jt,t=o.child,(o.subtreeFlags&1028)!==0&&t!==null)t.return=o,jt=t;else for(;jt!==null;){switch(o=jt,p=o.alternate,t=o.flags,o.tag){case 0:if((t&4)!==0&&(t=o.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)d=t[s],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=o,d=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var tt=po(s.type,d);t=l.getSnapshotBeforeUpdate(tt,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(st){Dt(s,s.return,st)}}break;case 3:if((t&1024)!==0){if(t=o.stateNode.containerInfo,s=t.nodeType,s===9)fu(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":fu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=o.sibling,t!==null){t.return=o.return,jt=t;break}jt=o.return}}function rd(t,o,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:mn(t,s),l&4&&Yi(5,s);break;case 1:if(mn(t,s),l&4)if(t=s.stateNode,o===null)try{t.componentDidMount()}catch(_){Dt(s,s.return,_)}else{var d=po(s.type,o.memoizedProps);o=o.memoizedState;try{t.componentDidUpdate(d,o,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Dt(s,s.return,_)}}l&64&&td(s),l&512&&Wi(s,s.return);break;case 3:if(mn(t,s),l&64&&(t=s.updateQueue,t!==null)){if(o=null,s.child!==null)switch(s.child.tag){case 27:case 5:o=s.child.stateNode;break;case 1:o=s.child.stateNode}try{Fh(t,o)}catch(_){Dt(s,s.return,_)}}break;case 27:o===null&&l&4&&id(s);case 26:case 5:mn(t,s),o===null&&l&4&&nd(s),l&512&&Wi(s,s.return);break;case 12:mn(t,s);break;case 31:mn(t,s),l&4&&ud(t,s);break;case 13:mn(t,s),l&4&&cd(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=NT.bind(null,s),QT(t,s))));break;case 22:if(l=s.memoizedState!==null||dn,!l){o=o!==null&&o.memoizedState!==null||Xt,d=dn;var p=Xt;dn=l,(Xt=o)&&!p?pn(t,s,(s.subtreeFlags&8772)!==0):mn(t,s),dn=d,Xt=p}break;case 30:break;default:mn(t,s)}}function ad(t){var o=t.alternate;o!==null&&(t.alternate=null,ad(o)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(o=t.stateNode,o!==null&&Ta(o)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Pt=null,fe=!1;function fn(t,o,s){for(s=s.child;s!==null;)ld(t,o,s),s=s.sibling}function ld(t,o,s){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(pi,s)}catch{}switch(s.tag){case 26:Xt||Ze(s,o),fn(t,o,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Xt||Ze(s,o);var l=Pt,d=fe;Fn(s.type)&&(Pt=s.stateNode,fe=!1),fn(t,o,s),es(s.stateNode),Pt=l,fe=d;break;case 5:Xt||Ze(s,o);case 6:if(l=Pt,d=fe,Pt=null,fn(t,o,s),Pt=l,fe=d,Pt!==null)if(fe)try{(Pt.nodeType===9?Pt.body:Pt.nodeName==="HTML"?Pt.ownerDocument.body:Pt).removeChild(s.stateNode)}catch(p){Dt(s,o,p)}else try{Pt.removeChild(s.stateNode)}catch(p){Dt(s,o,p)}break;case 18:Pt!==null&&(fe?(t=Pt,tf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),ii(t)):tf(Pt,s.stateNode));break;case 4:l=Pt,d=fe,Pt=s.stateNode.containerInfo,fe=!0,fn(t,o,s),Pt=l,fe=d;break;case 0:case 11:case 14:case 15:Hn(2,s,o),Xt||Hn(4,s,o),fn(t,o,s);break;case 1:Xt||(Ze(s,o),l=s.stateNode,typeof l.componentWillUnmount=="function"&&ed(s,o,l)),fn(t,o,s);break;case 21:fn(t,o,s);break;case 22:Xt=(l=Xt)||s.memoizedState!==null,fn(t,o,s),Xt=l;break;default:fn(t,o,s)}}function ud(t,o){if(o.memoizedState===null&&(t=o.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ii(t)}catch(s){Dt(o,o.return,s)}}}function cd(t,o){if(o.memoizedState===null&&(t=o.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ii(t)}catch(s){Dt(o,o.return,s)}}function ET(t){switch(t.tag){case 31:case 13:case 19:var o=t.stateNode;return o===null&&(o=t.stateNode=new sd),o;case 22:return t=t.stateNode,o=t._retryCache,o===null&&(o=t._retryCache=new sd),o;default:throw Error(r(435,t.tag))}}function cr(t,o){var s=ET(t);o.forEach(function(l){if(!s.has(l)){s.add(l);var d=IT.bind(null,t,l);l.then(d,d)}})}function me(t,o){var s=o.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l],p=t,_=o,E=_;t:for(;E!==null;){switch(E.tag){case 27:if(Fn(E.type)){Pt=E.stateNode,fe=!1;break t}break;case 5:Pt=E.stateNode,fe=!1;break t;case 3:case 4:Pt=E.stateNode.containerInfo,fe=!0;break t}E=E.return}if(Pt===null)throw Error(r(160));ld(p,_,d),Pt=null,fe=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(o.subtreeFlags&13886)for(o=o.child;o!==null;)hd(o,t),o=o.sibling}var Oe=null;function hd(t,o){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:me(o,t),pe(t),l&4&&(Hn(3,t,t.return),Yi(3,t),Hn(5,t,t.return));break;case 1:me(o,t),pe(t),l&512&&(Xt||s===null||Ze(s,s.return)),l&64&&dn&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var d=Oe;if(me(o,t),pe(t),l&512&&(Xt||s===null||Ze(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){t:{l=t.type,s=t.memoizedProps,d=d.ownerDocument||d;e:switch(l){case"title":p=d.getElementsByTagName("title")[0],(!p||p[Ti]||p[ne]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(l),d.head.insertBefore(p,d.querySelector("head > title"))),re(p,l,s),p[ne]=t,$t(p),l=p;break t;case"link":var _=gf("link","href",d).get(l+(s.href||""));if(_){for(var E=0;E<_.length;E++)if(p=_[E],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){_.splice(E,1);break e}}p=d.createElement(l),re(p,l,s),d.head.appendChild(p);break;case"meta":if(_=gf("meta","content",d).get(l+(s.content||""))){for(E=0;E<_.length;E++)if(p=_[E],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){_.splice(E,1);break e}}p=d.createElement(l),re(p,l,s),d.head.appendChild(p);break;default:throw Error(r(468,l))}p[ne]=t,$t(p),l=p}t.stateNode=l}else df(d,t.type,t.stateNode);else t.stateNode=hf(d,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?df(d,t.type,t.stateNode):hf(d,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Pl(t,t.memoizedProps,s.memoizedProps)}break;case 27:me(o,t),pe(t),l&512&&(Xt||s===null||Ze(s,s.return)),s!==null&&l&4&&Pl(t,t.memoizedProps,s.memoizedProps);break;case 5:if(me(o,t),pe(t),l&512&&(Xt||s===null||Ze(s,s.return)),t.flags&32){d=t.stateNode;try{bo(d,"")}catch(tt){Dt(t,t.return,tt)}}l&4&&t.stateNode!=null&&(d=t.memoizedProps,Pl(t,d,s!==null?s.memoizedProps:d)),l&1024&&(Ol=!0);break;case 6:if(me(o,t),pe(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(tt){Dt(t,t.return,tt)}}break;case 3:if(xr=null,d=Oe,Oe=Ar(o.containerInfo),me(o,t),Oe=d,pe(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ii(o.containerInfo)}catch(tt){Dt(t,t.return,tt)}Ol&&(Ol=!1,gd(t));break;case 4:l=Oe,Oe=Ar(t.stateNode.containerInfo),me(o,t),pe(t),Oe=l;break;case 12:me(o,t),pe(t);break;case 31:me(o,t),pe(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,cr(t,l)));break;case 13:me(o,t),pe(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(gr=Te()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,cr(t,l)));break;case 22:d=t.memoizedState!==null;var w=s!==null&&s.memoizedState!==null,D=dn,B=Xt;if(dn=D||d,Xt=B||w,me(o,t),Xt=B,dn=D,pe(t),l&8192)t:for(o=t.stateNode,o._visibility=d?o._visibility&-2:o._visibility|1,d&&(s===null||w||dn||Xt||yo(t)),s=null,o=t;;){if(o.tag===5||o.tag===26){if(s===null){w=s=o;try{if(p=w.stateNode,d)_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=w.stateNode;var O=w.memoizedProps.style,k=O!=null&&O.hasOwnProperty("display")?O.display:null;E.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(tt){Dt(w,w.return,tt)}}}else if(o.tag===6){if(s===null){w=o;try{w.stateNode.nodeValue=d?"":w.memoizedProps}catch(tt){Dt(w,w.return,tt)}}}else if(o.tag===18){if(s===null){w=o;try{var z=w.stateNode;d?ef(z,!0):ef(w.stateNode,!1)}catch(tt){Dt(w,w.return,tt)}}}else if((o.tag!==22&&o.tag!==23||o.memoizedState===null||o===t)&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break t;for(;o.sibling===null;){if(o.return===null||o.return===t)break t;s===o&&(s=null),o=o.return}s===o&&(s=null),o.sibling.return=o.return,o=o.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,cr(t,s))));break;case 19:me(o,t),pe(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,cr(t,l)));break;case 30:break;case 21:break;default:me(o,t),pe(t)}}function pe(t){var o=t.flags;if(o&2){try{for(var s,l=t.return;l!==null;){if(od(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var d=s.stateNode,p=Gl(t);ur(t,p,d);break;case 5:var _=s.stateNode;s.flags&32&&(bo(_,""),s.flags&=-33);var E=Gl(t);ur(t,E,_);break;case 3:case 4:var w=s.stateNode.containerInfo,D=Gl(t);Vl(t,D,w);break;default:throw Error(r(161))}}catch(B){Dt(t,t.return,B)}t.flags&=-3}o&4096&&(t.flags&=-4097)}function gd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var o=t;gd(o),o.tag===5&&o.flags&1024&&o.stateNode.reset(),t=t.sibling}}function mn(t,o){if(o.subtreeFlags&8772)for(o=o.child;o!==null;)rd(t,o.alternate,o),o=o.sibling}function yo(t){for(t=t.child;t!==null;){var o=t;switch(o.tag){case 0:case 11:case 14:case 15:Hn(4,o,o.return),yo(o);break;case 1:Ze(o,o.return);var s=o.stateNode;typeof s.componentWillUnmount=="function"&&ed(o,o.return,s),yo(o);break;case 27:es(o.stateNode);case 26:case 5:Ze(o,o.return),yo(o);break;case 22:o.memoizedState===null&&yo(o);break;case 30:yo(o);break;default:yo(o)}t=t.sibling}}function pn(t,o,s){for(s=s&&(o.subtreeFlags&8772)!==0,o=o.child;o!==null;){var l=o.alternate,d=t,p=o,_=p.flags;switch(p.tag){case 0:case 11:case 15:pn(d,p,s),Yi(4,p);break;case 1:if(pn(d,p,s),l=p,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(D){Dt(l,l.return,D)}if(l=p,d=l.updateQueue,d!==null){var E=l.stateNode;try{var w=d.shared.hiddenCallbacks;if(w!==null)for(d.shared.hiddenCallbacks=null,d=0;d<w.length;d++)Oh(w[d],E)}catch(D){Dt(l,l.return,D)}}s&&_&64&&td(p),Wi(p,p.return);break;case 27:id(p);case 26:case 5:pn(d,p,s),s&&l===null&&_&4&&nd(p),Wi(p,p.return);break;case 12:pn(d,p,s);break;case 31:pn(d,p,s),s&&_&4&&ud(d,p);break;case 13:pn(d,p,s),s&&_&4&&cd(d,p);break;case 22:p.memoizedState===null&&pn(d,p,s),Wi(p,p.return);break;case 30:break;default:pn(d,p,s)}o=o.sibling}}function Fl(t,o){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(t=o.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Di(s))}function Yl(t,o){t=null,o.alternate!==null&&(t=o.alternate.memoizedState.cache),o=o.memoizedState.cache,o!==t&&(o.refCount++,t!=null&&Di(t))}function Fe(t,o,s,l){if(o.subtreeFlags&10256)for(o=o.child;o!==null;)dd(t,o,s,l),o=o.sibling}function dd(t,o,s,l){var d=o.flags;switch(o.tag){case 0:case 11:case 15:Fe(t,o,s,l),d&2048&&Yi(9,o);break;case 1:Fe(t,o,s,l);break;case 3:Fe(t,o,s,l),d&2048&&(t=null,o.alternate!==null&&(t=o.alternate.memoizedState.cache),o=o.memoizedState.cache,o!==t&&(o.refCount++,t!=null&&Di(t)));break;case 12:if(d&2048){Fe(t,o,s,l),t=o.stateNode;try{var p=o.memoizedProps,_=p.id,E=p.onPostCommit;typeof E=="function"&&E(_,o.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(w){Dt(o,o.return,w)}}else Fe(t,o,s,l);break;case 31:Fe(t,o,s,l);break;case 13:Fe(t,o,s,l);break;case 23:break;case 22:p=o.stateNode,_=o.alternate,o.memoizedState!==null?p._visibility&2?Fe(t,o,s,l):Ji(t,o):p._visibility&2?Fe(t,o,s,l):(p._visibility|=2,Jo(t,o,s,l,(o.subtreeFlags&10256)!==0||!1)),d&2048&&Fl(_,o);break;case 24:Fe(t,o,s,l),d&2048&&Yl(o.alternate,o);break;default:Fe(t,o,s,l)}}function Jo(t,o,s,l,d){for(d=d&&((o.subtreeFlags&10256)!==0||!1),o=o.child;o!==null;){var p=t,_=o,E=s,w=l,D=_.flags;switch(_.tag){case 0:case 11:case 15:Jo(p,_,E,w,d),Yi(8,_);break;case 23:break;case 22:var B=_.stateNode;_.memoizedState!==null?B._visibility&2?Jo(p,_,E,w,d):Ji(p,_):(B._visibility|=2,Jo(p,_,E,w,d)),d&&D&2048&&Fl(_.alternate,_);break;case 24:Jo(p,_,E,w,d),d&&D&2048&&Yl(_.alternate,_);break;default:Jo(p,_,E,w,d)}o=o.sibling}}function Ji(t,o){if(o.subtreeFlags&10256)for(o=o.child;o!==null;){var s=t,l=o,d=l.flags;switch(l.tag){case 22:Ji(s,l),d&2048&&Fl(l.alternate,l);break;case 24:Ji(s,l),d&2048&&Yl(l.alternate,l);break;default:Ji(s,l)}o=o.sibling}}var Ki=8192;function Ko(t,o,s){if(t.subtreeFlags&Ki)for(t=t.child;t!==null;)fd(t,o,s),t=t.sibling}function fd(t,o,s){switch(t.tag){case 26:Ko(t,o,s),t.flags&Ki&&t.memoizedState!==null&&l0(s,Oe,t.memoizedState,t.memoizedProps);break;case 5:Ko(t,o,s);break;case 3:case 4:var l=Oe;Oe=Ar(t.stateNode.containerInfo),Ko(t,o,s),Oe=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Ki,Ki=16777216,Ko(t,o,s),Ki=l):Ko(t,o,s));break;default:Ko(t,o,s)}}function md(t){var o=t.alternate;if(o!==null&&(t=o.child,t!==null)){o.child=null;do o=t.sibling,t.sibling=null,t=o;while(t!==null)}}function Xi(t){var o=t.deletions;if((t.flags&16)!==0){if(o!==null)for(var s=0;s<o.length;s++){var l=o[s];jt=l,yd(l,t)}md(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pd(t),t=t.sibling}function pd(t){switch(t.tag){case 0:case 11:case 15:Xi(t),t.flags&2048&&Hn(9,t,t.return);break;case 3:Xi(t);break;case 12:Xi(t);break;case 22:var o=t.stateNode;t.memoizedState!==null&&o._visibility&2&&(t.return===null||t.return.tag!==13)?(o._visibility&=-3,hr(t)):Xi(t);break;default:Xi(t)}}function hr(t){var o=t.deletions;if((t.flags&16)!==0){if(o!==null)for(var s=0;s<o.length;s++){var l=o[s];jt=l,yd(l,t)}md(t)}for(t=t.child;t!==null;){switch(o=t,o.tag){case 0:case 11:case 15:Hn(8,o,o.return),hr(o);break;case 22:s=o.stateNode,s._visibility&2&&(s._visibility&=-3,hr(o));break;default:hr(o)}t=t.sibling}}function yd(t,o){for(;jt!==null;){var s=jt;switch(s.tag){case 0:case 11:case 15:Hn(8,s,o);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Di(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,jt=l;else t:for(s=t;jt!==null;){l=jt;var d=l.sibling,p=l.return;if(ad(l),l===s){jt=null;break t}if(d!==null){d.return=p,jt=d;break t}jt=p}}}var CT={getCacheForType:function(t){var o=ie(Wt),s=o.data.get(t);return s===void 0&&(s=t(),o.data.set(t,s)),s},cacheSignal:function(){return ie(Wt).controller.signal}},AT=typeof WeakMap=="function"?WeakMap:Map,xt=0,Ht=null,ft=null,pt=0,It=0,xe=null,Bn=!1,Xo=!1,Wl=!1,yn=0,Vt=0,qn=0,vo=0,Jl=0,be=0,Qo=0,Qi=null,ye=null,Kl=!1,gr=0,vd=0,dr=1/0,fr=null,Pn=null,Qt=0,Gn=null,Zo=null,vn=0,Xl=0,Ql=null,Td=null,Zi=0,Zl=null;function Re(){return(xt&2)!==0&&pt!==0?pt&-pt:H.T!==null?ou():zc()}function Sd(){if(be===0)if((pt&536870912)===0||vt){var t=Es;Es<<=1,(Es&3932160)===0&&(Es=262144),be=t}else be=536870912;return t=Ae.current,t!==null&&(t.flags|=32),be}function ve(t,o,s){(t===Ht&&(It===2||It===9)||t.cancelPendingCommit!==null)&&($o(t,0),Vn(t,pt,be,!1)),vi(t,s),((xt&2)===0||t!==Ht)&&(t===Ht&&((xt&2)===0&&(vo|=s),Vt===4&&Vn(t,pt,be,!1)),$e(t))}function _d(t,o,s){if((xt&6)!==0)throw Error(r(327));var l=!s&&(o&127)===0&&(o&t.expiredLanes)===0||yi(t,o),d=l?bT(t,o):jl(t,o,!0),p=l;do{if(d===0){Xo&&!l&&Vn(t,o,0,!1);break}else{if(s=t.current.alternate,p&&!wT(s)){d=jl(t,o,!1),p=!1;continue}if(d===2){if(p=o,t.errorRecoveryDisabledLanes&p)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){o=_;t:{var E=t;d=Qi;var w=E.current.memoizedState.isDehydrated;if(w&&($o(E,_).flags|=256),_=jl(E,_,!1),_!==2){if(Wl&&!w){E.errorRecoveryDisabledLanes|=p,vo|=p,d=4;break t}p=ye,ye=d,p!==null&&(ye===null?ye=p:ye.push.apply(ye,p))}d=_}if(p=!1,d!==2)continue}}if(d===1){$o(t,0),Vn(t,o,0,!0);break}t:{switch(l=t,p=d,p){case 0:case 1:throw Error(r(345));case 4:if((o&4194048)!==o)break;case 6:Vn(l,o,be,!Bn);break t;case 2:ye=null;break;case 3:case 5:break;default:throw Error(r(329))}if((o&62914560)===o&&(d=gr+300-Te(),10<d)){if(Vn(l,o,be,!Bn),As(l,0,!0)!==0)break t;vn=o,l.timeoutHandle=$d(Ed.bind(null,l,s,ye,fr,Kl,o,be,vo,Qo,Bn,p,"Throttled",-0,0),d);break t}Ed(l,s,ye,fr,Kl,o,be,vo,Qo,Bn,p,null,-0,0)}}break}while(!0);$e(t)}function Ed(t,o,s,l,d,p,_,E,w,D,B,O,k,z){if(t.timeoutHandle=-1,O=o.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},fd(o,p,O);var tt=(p&62914560)===p?gr-Te():(p&4194048)===p?vd-Te():0;if(tt=u0(O,tt),tt!==null){vn=p,t.cancelPendingCommit=tt(Nd.bind(null,t,o,p,s,l,d,_,E,w,B,O,null,k,z)),Vn(t,p,_,!D);return}}Nd(t,o,p,s,l,d,_,E,w)}function wT(t){for(var o=t;;){var s=o.tag;if((s===0||s===11||s===15)&&o.flags&16384&&(s=o.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var d=s[l],p=d.getSnapshot;d=d.value;try{if(!Ee(p(),d))return!1}catch{return!1}}if(s=o.child,o.subtreeFlags&16384&&s!==null)s.return=o,o=s;else{if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Vn(t,o,s,l){o&=~Jl,o&=~vo,t.suspendedLanes|=o,t.pingedLanes&=~o,l&&(t.warmLanes|=o),l=t.expirationTimes;for(var d=o;0<d;){var p=31-_e(d),_=1<<p;l[p]=-1,d&=~_}s!==0&&Dc(t,s,o)}function mr(){return(xt&6)===0?($i(0),!1):!0}function $l(){if(ft!==null){if(It===0)var t=ft.return;else t=ft,an=lo=null,fl(t),Vo=null,Ui=0,t=ft;for(;t!==null;)jg(t.alternate,t),t=t.return;ft=null}}function $o(t,o){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,YT(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),vn=0,$l(),Ht=t,ft=s=sn(t.current,null),pt=o,It=0,xe=null,Bn=!1,Xo=yi(t,o),Wl=!1,Qo=be=Jl=vo=qn=Vt=0,ye=Qi=null,Kl=!1,(o&8)!==0&&(o|=o&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=o;0<l;){var d=31-_e(l),p=1<<d;o|=t[d],l&=~p}return yn=o,Ls(),s}function Cd(t,o){ht=null,H.H=Vi,o===Go||o===Fs?(o=qh(),It=3):o===nl?(o=qh(),It=4):It=o===Nl?8:o!==null&&typeof o=="object"&&typeof o.then=="function"?6:1,xe=o,ft===null&&(Vt=1,ir(t,ke(o,t.current)))}function Ad(){var t=Ae.current;return t===null?!0:(pt&4194048)===pt?He===null:(pt&62914560)===pt||(pt&536870912)!==0?t===He:!1}function wd(){var t=H.H;return H.H=Vi,t===null?Vi:t}function xd(){var t=H.A;return H.A=CT,t}function pr(){Vt=4,Bn||(pt&4194048)!==pt&&Ae.current!==null||(Xo=!0),(qn&134217727)===0&&(vo&134217727)===0||Ht===null||Vn(Ht,pt,be,!1)}function jl(t,o,s){var l=xt;xt|=2;var d=wd(),p=xd();(Ht!==t||pt!==o)&&(fr=null,$o(t,o)),o=!1;var _=Vt;t:do try{if(It!==0&&ft!==null){var E=ft,w=xe;switch(It){case 8:$l(),_=6;break t;case 3:case 2:case 9:case 6:Ae.current===null&&(o=!0);var D=It;if(It=0,xe=null,jo(t,E,w,D),s&&Xo){_=0;break t}break;default:D=It,It=0,xe=null,jo(t,E,w,D)}}xT(),_=Vt;break}catch(B){Cd(t,B)}while(!0);return o&&t.shellSuspendCounter++,an=lo=null,xt=l,H.H=d,H.A=p,ft===null&&(Ht=null,pt=0,Ls()),_}function xT(){for(;ft!==null;)bd(ft)}function bT(t,o){var s=xt;xt|=2;var l=wd(),d=xd();Ht!==t||pt!==o?(fr=null,dr=Te()+500,$o(t,o)):Xo=yi(t,o);t:do try{if(It!==0&&ft!==null){o=ft;var p=xe;e:switch(It){case 1:It=0,xe=null,jo(t,o,p,1);break;case 2:case 9:if(Hh(p)){It=0,xe=null,Rd(o);break}o=function(){It!==2&&It!==9||Ht!==t||(It=7),$e(t)},p.then(o,o);break t;case 3:It=7;break t;case 4:It=5;break t;case 7:Hh(p)?(It=0,xe=null,Rd(o)):(It=0,xe=null,jo(t,o,p,7));break;case 5:var _=null;switch(ft.tag){case 26:_=ft.memoizedState;case 5:case 27:var E=ft;if(_?ff(_):E.stateNode.complete){It=0,xe=null;var w=E.sibling;if(w!==null)ft=w;else{var D=E.return;D!==null?(ft=D,yr(D)):ft=null}break e}}It=0,xe=null,jo(t,o,p,5);break;case 6:It=0,xe=null,jo(t,o,p,6);break;case 8:$l(),Vt=6;break t;default:throw Error(r(462))}}RT();break}catch(B){Cd(t,B)}while(!0);return an=lo=null,H.H=l,H.A=d,xt=s,ft!==null?0:(Ht=null,pt=0,Ls(),Vt)}function RT(){for(;ft!==null&&!Zy();)bd(ft)}function bd(t){var o=Zg(t.alternate,t,yn);t.memoizedProps=t.pendingProps,o===null?yr(t):ft=o}function Rd(t){var o=t,s=o.alternate;switch(o.tag){case 15:case 0:o=Yg(s,o,o.pendingProps,o.type,void 0,pt);break;case 11:o=Yg(s,o,o.pendingProps,o.type.render,o.ref,pt);break;case 5:fl(o);default:jg(s,o),o=ft=xh(o,yn),o=Zg(s,o,yn)}t.memoizedProps=t.pendingProps,o===null?yr(t):ft=o}function jo(t,o,s,l){an=lo=null,fl(o),Vo=null,Ui=0;var d=o.return;try{if(pT(t,d,o,s,pt)){Vt=1,ir(t,ke(s,t.current)),ft=null;return}}catch(p){if(d!==null)throw ft=d,p;Vt=1,ir(t,ke(s,t.current)),ft=null;return}o.flags&32768?(vt||l===1?t=!0:Xo||(pt&536870912)!==0?t=!1:(Bn=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ae.current,l!==null&&l.tag===13&&(l.flags|=16384))),Md(o,t)):yr(o)}function yr(t){var o=t;do{if((o.flags&32768)!==0){Md(o,Bn);return}t=o.return;var s=TT(o.alternate,o,yn);if(s!==null){ft=s;return}if(o=o.sibling,o!==null){ft=o;return}ft=o=t}while(o!==null);Vt===0&&(Vt=5)}function Md(t,o){do{var s=ST(t.alternate,t);if(s!==null){s.flags&=32767,ft=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!o&&(t=t.sibling,t!==null)){ft=t;return}ft=t=s}while(t!==null);Vt=6,ft=null}function Nd(t,o,s,l,d,p,_,E,w){t.cancelPendingCommit=null;do vr();while(Qt!==0);if((xt&6)!==0)throw Error(r(327));if(o!==null){if(o===t.current)throw Error(r(177));if(p=o.lanes|o.childLanes,p|=Ga,av(t,s,p,_,E,w),t===Ht&&(ft=Ht=null,pt=0),Zo=o,Gn=t,vn=s,Xl=p,Ql=d,Td=l,(o.subtreeFlags&10256)!==0||(o.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,DT(Ss,function(){return zd(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(o.flags&13878)!==0,(o.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,d=X.p,X.p=2,_=xt,xt|=4;try{_T(t,o,s)}finally{xt=_,X.p=d,H.T=l}}Qt=1,Id(),Dd(),kd()}}function Id(){if(Qt===1){Qt=0;var t=Gn,o=Zo,s=(o.flags&13878)!==0;if((o.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var l=X.p;X.p=2;var d=xt;xt|=4;try{hd(o,t);var p=hu,_=yh(t.containerInfo),E=p.focusedElem,w=p.selectionRange;if(_!==E&&E&&E.ownerDocument&&ph(E.ownerDocument.documentElement,E)){if(w!==null&&La(E)){var D=w.start,B=w.end;if(B===void 0&&(B=D),"selectionStart"in E)E.selectionStart=D,E.selectionEnd=Math.min(B,E.value.length);else{var O=E.ownerDocument||document,k=O&&O.defaultView||window;if(k.getSelection){var z=k.getSelection(),tt=E.textContent.length,st=Math.min(w.start,tt),zt=w.end===void 0?st:Math.min(w.end,tt);!z.extend&&st>zt&&(_=zt,zt=st,st=_);var N=mh(E,st),b=mh(E,zt);if(N&&b&&(z.rangeCount!==1||z.anchorNode!==N.node||z.anchorOffset!==N.offset||z.focusNode!==b.node||z.focusOffset!==b.offset)){var I=O.createRange();I.setStart(N.node,N.offset),z.removeAllRanges(),st>zt?(z.addRange(I),z.extend(b.node,b.offset)):(I.setEnd(b.node,b.offset),z.addRange(I))}}}}for(O=[],z=E;z=z.parentNode;)z.nodeType===1&&O.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<O.length;E++){var G=O[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Nr=!!cu,hu=cu=null}finally{xt=d,X.p=l,H.T=s}}t.current=o,Qt=2}}function Dd(){if(Qt===2){Qt=0;var t=Gn,o=Zo,s=(o.flags&8772)!==0;if((o.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var l=X.p;X.p=2;var d=xt;xt|=4;try{rd(t,o.alternate,o)}finally{xt=d,X.p=l,H.T=s}}Qt=3}}function kd(){if(Qt===4||Qt===3){Qt=0,$y();var t=Gn,o=Zo,s=vn,l=Td;(o.subtreeFlags&10256)!==0||(o.flags&10256)!==0?Qt=5:(Qt=0,Zo=Gn=null,Ud(t,t.pendingLanes));var d=t.pendingLanes;if(d===0&&(Pn=null),ya(s),o=o.stateNode,Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(pi,o,void 0,(o.current.flags&128)===128)}catch{}if(l!==null){o=H.T,d=X.p,X.p=2,H.T=null;try{for(var p=t.onRecoverableError,_=0;_<l.length;_++){var E=l[_];p(E.value,{componentStack:E.stack})}}finally{H.T=o,X.p=d}}(vn&3)!==0&&vr(),$e(t),d=t.pendingLanes,(s&261930)!==0&&(d&42)!==0?t===Zl?Zi++:(Zi=0,Zl=t):Zi=0,$i(0)}}function Ud(t,o){(t.pooledCacheLanes&=o)===0&&(o=t.pooledCache,o!=null&&(t.pooledCache=null,Di(o)))}function vr(){return Id(),Dd(),kd(),zd()}function zd(){if(Qt!==5)return!1;var t=Gn,o=Xl;Xl=0;var s=ya(vn),l=H.T,d=X.p;try{X.p=32>s?32:s,H.T=null,s=Ql,Ql=null;var p=Gn,_=vn;if(Qt=0,Zo=Gn=null,vn=0,(xt&6)!==0)throw Error(r(331));var E=xt;if(xt|=4,pd(p.current),dd(p,p.current,_,s),xt=E,$i(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(pi,p)}catch{}return!0}finally{X.p=d,H.T=l,Ud(t,o)}}function Ld(t,o,s){o=ke(s,o),o=Ml(t.stateNode,o,2),t=Un(t,o,2),t!==null&&(vi(t,2),$e(t))}function Dt(t,o,s){if(t.tag===3)Ld(t,t,s);else for(;o!==null;){if(o.tag===3){Ld(o,t,s);break}else if(o.tag===1){var l=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Pn===null||!Pn.has(l))){t=ke(s,t),s=Hg(2),l=Un(o,s,2),l!==null&&(Bg(s,l,o,t),vi(l,2),$e(l));break}}o=o.return}}function tu(t,o,s){var l=t.pingCache;if(l===null){l=t.pingCache=new AT;var d=new Set;l.set(o,d)}else d=l.get(o),d===void 0&&(d=new Set,l.set(o,d));d.has(s)||(Wl=!0,d.add(s),t=MT.bind(null,t,o,s),o.then(t,t))}function MT(t,o,s){var l=t.pingCache;l!==null&&l.delete(o),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Ht===t&&(pt&s)===s&&(Vt===4||Vt===3&&(pt&62914560)===pt&&300>Te()-gr?(xt&2)===0&&$o(t,0):Jl|=s,Qo===pt&&(Qo=0)),$e(t)}function Hd(t,o){o===0&&(o=Ic()),t=so(t,o),t!==null&&(vi(t,o),$e(t))}function NT(t){var o=t.memoizedState,s=0;o!==null&&(s=o.retryLane),Hd(t,s)}function IT(t,o){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(s=d.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(o),Hd(t,s)}function DT(t,o){return da(t,o)}var Tr=null,ti=null,eu=!1,Sr=!1,nu=!1,On=0;function $e(t){t!==ti&&t.next===null&&(ti===null?Tr=ti=t:ti=ti.next=t),Sr=!0,eu||(eu=!0,UT())}function $i(t,o){if(!nu&&Sr){nu=!0;do for(var s=!1,l=Tr;l!==null;){if(t!==0){var d=l.pendingLanes;if(d===0)var p=0;else{var _=l.suspendedLanes,E=l.pingedLanes;p=(1<<31-_e(42|t)+1)-1,p&=d&~(_&~E),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Gd(l,p))}else p=pt,p=As(l,l===Ht?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||yi(l,p)||(s=!0,Gd(l,p));l=l.next}while(s);nu=!1}}function kT(){Bd()}function Bd(){Sr=eu=!1;var t=0;On!==0&&FT()&&(t=On);for(var o=Te(),s=null,l=Tr;l!==null;){var d=l.next,p=qd(l,o);p===0?(l.next=null,s===null?Tr=d:s.next=d,d===null&&(ti=s)):(s=l,(t!==0||(p&3)!==0)&&(Sr=!0)),l=d}Qt!==0&&Qt!==5||$i(t),On!==0&&(On=0)}function qd(t,o){for(var s=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var _=31-_e(p),E=1<<_,w=d[_];w===-1?((E&s)===0||(E&l)!==0)&&(d[_]=rv(E,o)):w<=o&&(t.expiredLanes|=E),p&=~E}if(o=Ht,s=pt,s=As(t,t===o?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===o&&(It===2||It===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&fa(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||yi(t,s)){if(o=s&-s,o===t.callbackPriority)return o;switch(l!==null&&fa(l),ya(s)){case 2:case 8:s=Mc;break;case 32:s=Ss;break;case 268435456:s=Nc;break;default:s=Ss}return l=Pd.bind(null,t),s=da(s,l),t.callbackPriority=o,t.callbackNode=s,o}return l!==null&&l!==null&&fa(l),t.callbackPriority=2,t.callbackNode=null,2}function Pd(t,o){if(Qt!==0&&Qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(vr()&&t.callbackNode!==s)return null;var l=pt;return l=As(t,t===Ht?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(_d(t,l,o),qd(t,Te()),t.callbackNode!=null&&t.callbackNode===s?Pd.bind(null,t):null)}function Gd(t,o){if(vr())return null;_d(t,o,!0)}function UT(){WT(function(){(xt&6)!==0?da(Rc,kT):Bd()})}function ou(){if(On===0){var t=qo;t===0&&(t=_s,_s<<=1,(_s&261888)===0&&(_s=256)),On=t}return On}function Vd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rs(""+t)}function Od(t,o){var s=o.ownerDocument.createElement("input");return s.name=o.name,s.value=o.value,t.id&&s.setAttribute("form",t.id),o.parentNode.insertBefore(s,o),t=new FormData(t),s.parentNode.removeChild(s),t}function zT(t,o,s,l,d){if(o==="submit"&&s&&s.stateNode===d){var p=Vd((d[ge]||null).action),_=l.submitter;_&&(o=(o=_[ge]||null)?Vd(o.formAction):_.getAttribute("formAction"),o!==null&&(p=o,_=null));var E=new Ds("action","action",null,l,d);t.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(On!==0){var w=_?Od(d,_):new FormData(d);Cl(s,{pending:!0,data:w,method:d.method,action:p},null,w)}}else typeof p=="function"&&(E.preventDefault(),w=_?Od(d,_):new FormData(d),Cl(s,{pending:!0,data:w,method:d.method,action:p},p,w))},currentTarget:d}]})}}for(var iu=0;iu<Pa.length;iu++){var su=Pa[iu],LT=su.toLowerCase(),HT=su[0].toUpperCase()+su.slice(1);Ve(LT,"on"+HT)}Ve(Sh,"onAnimationEnd"),Ve(_h,"onAnimationIteration"),Ve(Eh,"onAnimationStart"),Ve("dblclick","onDoubleClick"),Ve("focusin","onFocus"),Ve("focusout","onBlur"),Ve(jv,"onTransitionRun"),Ve(tT,"onTransitionStart"),Ve(eT,"onTransitionCancel"),Ve(Ch,"onTransitionEnd"),wo("onMouseEnter",["mouseout","mouseover"]),wo("onMouseLeave",["mouseout","mouseover"]),wo("onPointerEnter",["pointerout","pointerover"]),wo("onPointerLeave",["pointerout","pointerover"]),eo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),eo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),eo("onBeforeInput",["compositionend","keypress","textInput","paste"]),eo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),eo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),eo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ji));function Fd(t,o){o=(o&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],d=l.event;l=l.listeners;t:{var p=void 0;if(o)for(var _=l.length-1;0<=_;_--){var E=l[_],w=E.instance,D=E.currentTarget;if(E=E.listener,w!==p&&d.isPropagationStopped())break t;p=E,d.currentTarget=D;try{p(d)}catch(B){zs(B)}d.currentTarget=null,p=w}else for(_=0;_<l.length;_++){if(E=l[_],w=E.instance,D=E.currentTarget,E=E.listener,w!==p&&d.isPropagationStopped())break t;p=E,d.currentTarget=D;try{p(d)}catch(B){zs(B)}d.currentTarget=null,p=w}}}}function mt(t,o){var s=o[va];s===void 0&&(s=o[va]=new Set);var l=t+"__bubble";s.has(l)||(Yd(o,t,2,!1),s.add(l))}function ru(t,o,s){var l=0;o&&(l|=4),Yd(s,t,l,o)}var _r="_reactListening"+Math.random().toString(36).slice(2);function au(t){if(!t[_r]){t[_r]=!0,Bc.forEach(function(s){s!=="selectionchange"&&(BT.has(s)||ru(s,!1,t),ru(s,!0,t))});var o=t.nodeType===9?t:t.ownerDocument;o===null||o[_r]||(o[_r]=!0,ru("selectionchange",!1,o))}}function Yd(t,o,s,l){switch(_f(o)){case 2:var d=g0;break;case 8:d=d0;break;default:d=Eu}s=d.bind(null,o,s,t),d=void 0,!ba||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(o,s,{capture:!0,passive:d}):t.addEventListener(o,s,!0):d!==void 0?t.addEventListener(o,s,{passive:d}):t.addEventListener(o,s,!1)}function lu(t,o,s,l,d){var p=l;if((o&1)===0&&(o&2)===0&&l!==null)t:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var E=l.stateNode.containerInfo;if(E===d)break;if(_===4)for(_=l.return;_!==null;){var w=_.tag;if((w===3||w===4)&&_.stateNode.containerInfo===d)return;_=_.return}for(;E!==null;){if(_=Eo(E),_===null)return;if(w=_.tag,w===5||w===6||w===26||w===27){l=p=_;continue t}E=E.parentNode}}l=l.return}Qc(function(){var D=p,B=wa(s),O=[];t:{var k=Ah.get(t);if(k!==void 0){var z=Ds,tt=t;switch(t){case"keypress":if(Ns(s)===0)break t;case"keydown":case"keyup":z=Iv;break;case"focusin":tt="focus",z=Ia;break;case"focusout":tt="blur",z=Ia;break;case"beforeblur":case"afterblur":z=Ia;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Uv;break;case Sh:case _h:case Eh:z=Ev;break;case Ch:z=Lv;break;case"scroll":case"scrollend":z=yv;break;case"wheel":z=Bv;break;case"copy":case"cut":case"paste":z=Av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=eh;break;case"toggle":case"beforetoggle":z=Pv}var st=(o&4)!==0,zt=!st&&(t==="scroll"||t==="scrollend"),N=st?k!==null?k+"Capture":null:k;st=[];for(var b=D,I;b!==null;){var G=b;if(I=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||I===null||N===null||(G=_i(b,N),G!=null&&st.push(ts(b,G,I))),zt)break;b=b.return}0<st.length&&(k=new z(k,tt,null,s,B),O.push({event:k,listeners:st}))}}if((o&7)===0){t:{if(k=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",k&&s!==Aa&&(tt=s.relatedTarget||s.fromElement)&&(Eo(tt)||tt[_o]))break t;if((z||k)&&(k=B.window===B?B:(k=B.ownerDocument)?k.defaultView||k.parentWindow:window,z?(tt=s.relatedTarget||s.toElement,z=D,tt=tt?Eo(tt):null,tt!==null&&(zt=c(tt),st=tt.tag,tt!==zt||st!==5&&st!==27&&st!==6)&&(tt=null)):(z=null,tt=D),z!==tt)){if(st=jc,G="onMouseLeave",N="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(st=eh,G="onPointerLeave",N="onPointerEnter",b="pointer"),zt=z==null?k:Si(z),I=tt==null?k:Si(tt),k=new st(G,b+"leave",z,s,B),k.target=zt,k.relatedTarget=I,G=null,Eo(B)===D&&(st=new st(N,b+"enter",tt,s,B),st.target=I,st.relatedTarget=zt,G=st),zt=G,z&&tt)e:{for(st=qT,N=z,b=tt,I=0,G=N;G;G=st(G))I++;G=0;for(var it=b;it;it=st(it))G++;for(;0<I-G;)N=st(N),I--;for(;0<G-I;)b=st(b),G--;for(;I--;){if(N===b||b!==null&&N===b.alternate){st=N;break e}N=st(N),b=st(b)}st=null}else st=null;z!==null&&Wd(O,k,z,st,!1),tt!==null&&zt!==null&&Wd(O,zt,tt,st,!0)}}t:{if(k=D?Si(D):window,z=k.nodeName&&k.nodeName.toLowerCase(),z==="select"||z==="input"&&k.type==="file")var Et=uh;else if(ah(k))if(ch)Et=Qv;else{Et=Kv;var nt=Jv}else z=k.nodeName,!z||z.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?D&&Ca(D.elementType)&&(Et=uh):Et=Xv;if(Et&&(Et=Et(t,D))){lh(O,Et,s,B);break t}nt&&nt(t,k,D),t==="focusout"&&D&&k.type==="number"&&D.memoizedProps.value!=null&&Ea(k,"number",k.value)}switch(nt=D?Si(D):window,t){case"focusin":(ah(nt)||nt.contentEditable==="true")&&(Io=nt,Ha=D,Mi=null);break;case"focusout":Mi=Ha=Io=null;break;case"mousedown":Ba=!0;break;case"contextmenu":case"mouseup":case"dragend":Ba=!1,vh(O,s,B);break;case"selectionchange":if($v)break;case"keydown":case"keyup":vh(O,s,B)}var gt;if(ka)t:{switch(t){case"compositionstart":var yt="onCompositionStart";break t;case"compositionend":yt="onCompositionEnd";break t;case"compositionupdate":yt="onCompositionUpdate";break t}yt=void 0}else No?sh(t,s)&&(yt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(yt="onCompositionStart");yt&&(nh&&s.locale!=="ko"&&(No||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&No&&(gt=Zc()):(bn=B,Ra="value"in bn?bn.value:bn.textContent,No=!0)),nt=Er(D,yt),0<nt.length&&(yt=new th(yt,t,null,s,B),O.push({event:yt,listeners:nt}),gt?yt.data=gt:(gt=rh(s),gt!==null&&(yt.data=gt)))),(gt=Vv?Ov(t,s):Fv(t,s))&&(yt=Er(D,"onBeforeInput"),0<yt.length&&(nt=new th("onBeforeInput","beforeinput",null,s,B),O.push({event:nt,listeners:yt}),nt.data=gt)),zT(O,t,D,s,B)}Fd(O,o)})}function ts(t,o,s){return{instance:t,listener:o,currentTarget:s}}function Er(t,o){for(var s=o+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=_i(t,s),d!=null&&l.unshift(ts(t,d,p)),d=_i(t,o),d!=null&&l.push(ts(t,d,p))),t.tag===3)return l;t=t.return}return[]}function qT(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Wd(t,o,s,l,d){for(var p=o._reactName,_=[];s!==null&&s!==l;){var E=s,w=E.alternate,D=E.stateNode;if(E=E.tag,w!==null&&w===l)break;E!==5&&E!==26&&E!==27||D===null||(w=D,d?(D=_i(s,p),D!=null&&_.unshift(ts(s,D,w))):d||(D=_i(s,p),D!=null&&_.push(ts(s,D,w)))),s=s.return}_.length!==0&&t.push({event:o,listeners:_})}var PT=/\r\n?/g,GT=/\u0000|\uFFFD/g;function Jd(t){return(typeof t=="string"?t:""+t).replace(PT,`
`).replace(GT,"")}function Kd(t,o){return o=Jd(o),Jd(t)===o}function Ut(t,o,s,l,d,p){switch(s){case"children":typeof l=="string"?o==="body"||o==="textarea"&&l===""||bo(t,l):(typeof l=="number"||typeof l=="bigint")&&o!=="body"&&bo(t,""+l);break;case"className":xs(t,"class",l);break;case"tabIndex":xs(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":xs(t,s,l);break;case"style":Kc(t,l,p);break;case"data":if(o!=="object"){xs(t,"data",l);break}case"src":case"href":if(l===""&&(o!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Rs(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(o!=="input"&&Ut(t,o,"name",d.name,d,null),Ut(t,o,"formEncType",d.formEncType,d,null),Ut(t,o,"formMethod",d.formMethod,d,null),Ut(t,o,"formTarget",d.formTarget,d,null)):(Ut(t,o,"encType",d.encType,d,null),Ut(t,o,"method",d.method,d,null),Ut(t,o,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Rs(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=nn);break;case"onScroll":l!=null&&mt("scroll",t);break;case"onScrollEnd":l!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Rs(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":mt("beforetoggle",t),mt("toggle",t),ws(t,"popover",l);break;case"xlinkActuate":en(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":en(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":en(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":en(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":en(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":en(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":en(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":en(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":en(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ws(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=mv.get(s)||s,ws(t,s,l))}}function uu(t,o,s,l,d,p){switch(s){case"style":Kc(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?bo(t,l):(typeof l=="number"||typeof l=="bigint")&&bo(t,""+l);break;case"onScroll":l!=null&&mt("scroll",t);break;case"onScrollEnd":l!=null&&mt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qc.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),o=s.slice(2,d?s.length-7:void 0),p=t[ge]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(o,p,d),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(o,l,d);break t}s in t?t[s]=l:l===!0?t.setAttribute(s,""):ws(t,s,l)}}}function re(t,o,s){switch(o){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var l=!1,d=!1,p;for(p in s)if(s.hasOwnProperty(p)){var _=s[p];if(_!=null)switch(p){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,o));default:Ut(t,o,p,_,s,null)}}d&&Ut(t,o,"srcSet",s.srcSet,s,null),l&&Ut(t,o,"src",s.src,s,null);return;case"input":mt("invalid",t);var E=p=_=d=null,w=null,D=null;for(l in s)if(s.hasOwnProperty(l)){var B=s[l];if(B!=null)switch(l){case"name":d=B;break;case"type":_=B;break;case"checked":w=B;break;case"defaultChecked":D=B;break;case"value":p=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,o));break;default:Ut(t,o,l,B,s,null)}}Fc(t,p,E,w,D,_,d,!1);return;case"select":mt("invalid",t),l=_=p=null;for(d in s)if(s.hasOwnProperty(d)&&(E=s[d],E!=null))switch(d){case"value":p=E;break;case"defaultValue":_=E;break;case"multiple":l=E;default:Ut(t,o,d,E,s,null)}o=p,s=_,t.multiple=!!l,o!=null?xo(t,!!l,o,!1):s!=null&&xo(t,!!l,s,!0);return;case"textarea":mt("invalid",t),p=d=l=null;for(_ in s)if(s.hasOwnProperty(_)&&(E=s[_],E!=null))switch(_){case"value":l=E;break;case"defaultValue":d=E;break;case"children":p=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ut(t,o,_,E,s,null)}Wc(t,l,d,p);return;case"option":for(w in s)if(s.hasOwnProperty(w)&&(l=s[w],l!=null))switch(w){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ut(t,o,w,l,s,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(l=0;l<ji.length;l++)mt(ji[l],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in s)if(s.hasOwnProperty(D)&&(l=s[D],l!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,o));default:Ut(t,o,D,l,s,null)}return;default:if(Ca(o)){for(B in s)s.hasOwnProperty(B)&&(l=s[B],l!==void 0&&uu(t,o,B,l,s,void 0));return}}for(E in s)s.hasOwnProperty(E)&&(l=s[E],l!=null&&Ut(t,o,E,l,s,null))}function VT(t,o,s,l){switch(o){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,_=null,E=null,w=null,D=null,B=null;for(z in s){var O=s[z];if(s.hasOwnProperty(z)&&O!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":w=O;default:l.hasOwnProperty(z)||Ut(t,o,z,null,l,O)}}for(var k in l){var z=l[k];if(O=s[k],l.hasOwnProperty(k)&&(z!=null||O!=null))switch(k){case"type":p=z;break;case"name":d=z;break;case"checked":D=z;break;case"defaultChecked":B=z;break;case"value":_=z;break;case"defaultValue":E=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,o));break;default:z!==O&&Ut(t,o,k,z,l,O)}}_a(t,_,E,w,D,B,p,d);return;case"select":z=_=E=k=null;for(p in s)if(w=s[p],s.hasOwnProperty(p)&&w!=null)switch(p){case"value":break;case"multiple":z=w;default:l.hasOwnProperty(p)||Ut(t,o,p,null,l,w)}for(d in l)if(p=l[d],w=s[d],l.hasOwnProperty(d)&&(p!=null||w!=null))switch(d){case"value":k=p;break;case"defaultValue":E=p;break;case"multiple":_=p;default:p!==w&&Ut(t,o,d,p,l,w)}o=E,s=_,l=z,k!=null?xo(t,!!s,k,!1):!!l!=!!s&&(o!=null?xo(t,!!s,o,!0):xo(t,!!s,s?[]:"",!1));return;case"textarea":z=k=null;for(E in s)if(d=s[E],s.hasOwnProperty(E)&&d!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ut(t,o,E,null,l,d)}for(_ in l)if(d=l[_],p=s[_],l.hasOwnProperty(_)&&(d!=null||p!=null))switch(_){case"value":k=d;break;case"defaultValue":z=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:d!==p&&Ut(t,o,_,d,l,p)}Yc(t,k,z);return;case"option":for(var tt in s)if(k=s[tt],s.hasOwnProperty(tt)&&k!=null&&!l.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Ut(t,o,tt,null,l,k)}for(w in l)if(k=l[w],z=s[w],l.hasOwnProperty(w)&&k!==z&&(k!=null||z!=null))switch(w){case"selected":t.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Ut(t,o,w,k,l,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in s)k=s[st],s.hasOwnProperty(st)&&k!=null&&!l.hasOwnProperty(st)&&Ut(t,o,st,null,l,k);for(D in l)if(k=l[D],z=s[D],l.hasOwnProperty(D)&&k!==z&&(k!=null||z!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(137,o));break;default:Ut(t,o,D,k,l,z)}return;default:if(Ca(o)){for(var zt in s)k=s[zt],s.hasOwnProperty(zt)&&k!==void 0&&!l.hasOwnProperty(zt)&&uu(t,o,zt,void 0,l,k);for(B in l)k=l[B],z=s[B],!l.hasOwnProperty(B)||k===z||k===void 0&&z===void 0||uu(t,o,B,k,l,z);return}}for(var N in s)k=s[N],s.hasOwnProperty(N)&&k!=null&&!l.hasOwnProperty(N)&&Ut(t,o,N,null,l,k);for(O in l)k=l[O],z=s[O],!l.hasOwnProperty(O)||k===z||k==null&&z==null||Ut(t,o,O,k,l,z)}function Xd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function OT(){if(typeof performance.getEntriesByType=="function"){for(var t=0,o=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var d=s[l],p=d.transferSize,_=d.initiatorType,E=d.duration;if(p&&E&&Xd(_)){for(_=0,E=d.responseEnd,l+=1;l<s.length;l++){var w=s[l],D=w.startTime;if(D>E)break;var B=w.transferSize,O=w.initiatorType;B&&Xd(O)&&(w=w.responseEnd,_+=B*(w<E?1:(E-D)/(w-D)))}if(--l,o+=8*(p+_)/(d.duration/1e3),t++,10<t)break}}if(0<t)return o/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var cu=null,hu=null;function Cr(t){return t.nodeType===9?t:t.ownerDocument}function Qd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zd(t,o){if(t===0)switch(o){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&o==="foreignObject"?0:t}function gu(t,o){return t==="textarea"||t==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.children=="bigint"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var du=null;function FT(){var t=window.event;return t&&t.type==="popstate"?t===du?!1:(du=t,!0):(du=null,!1)}var $d=typeof setTimeout=="function"?setTimeout:void 0,YT=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,WT=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(t){return jd.resolve(null).then(t).catch(JT)}:$d;function JT(t){setTimeout(function(){throw t})}function Fn(t){return t==="head"}function tf(t,o){var s=o,l=0;do{var d=s.nextSibling;if(t.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(d),ii(o);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")es(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,es(s);for(var p=s.firstChild;p;){var _=p.nextSibling,E=p.nodeName;p[Ti]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=_}}else s==="body"&&es(t.ownerDocument.body);s=d}while(s);ii(o)}function ef(t,o){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?o?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(o?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function fu(t){var o=t.firstChild;for(o&&o.nodeType===10&&(o=o.nextSibling);o;){var s=o;switch(o=o.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":fu(s),Ta(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function KT(t,o,s,l){for(;t.nodeType===1;){var d=s;if(t.nodeName.toLowerCase()!==o.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ti])switch(o){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==d.rel||t.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||t.getAttribute("title")!==(d.title==null?null:d.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(d.src==null?null:d.src)||t.getAttribute("type")!==(d.type==null?null:d.type)||t.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(o==="input"&&t.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Be(t.nextSibling),t===null)break}return null}function XT(t,o,s){if(o==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Be(t.nextSibling),t===null))return null;return t}function nf(t,o){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!o||(t=Be(t.nextSibling),t===null))return null;return t}function mu(t){return t.data==="$?"||t.data==="$~"}function pu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function QT(t,o){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=o;else if(t.data!=="$?"||s.readyState!=="loading")o();else{var l=function(){o(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Be(t){for(;t!=null;t=t.nextSibling){var o=t.nodeType;if(o===1||o===3)break;if(o===8){if(o=t.data,o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"||o==="F!"||o==="F")break;if(o==="/$"||o==="/&")return null}}return t}var yu=null;function of(t){t=t.nextSibling;for(var o=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(o===0)return Be(t.nextSibling);o--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||o++}t=t.nextSibling}return null}function sf(t){t=t.previousSibling;for(var o=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(o===0)return t;o--}else s!=="/$"&&s!=="/&"||o++}t=t.previousSibling}return null}function rf(t,o,s){switch(o=Cr(s),t){case"html":if(t=o.documentElement,!t)throw Error(r(452));return t;case"head":if(t=o.head,!t)throw Error(r(453));return t;case"body":if(t=o.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function es(t){for(var o=t.attributes;o.length;)t.removeAttributeNode(o[0]);Ta(t)}var qe=new Map,af=new Set;function Ar(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Tn=X.d;X.d={f:ZT,r:$T,D:jT,C:t0,L:e0,m:n0,X:i0,S:o0,M:s0};function ZT(){var t=Tn.f(),o=mr();return t||o}function $T(t){var o=Co(t);o!==null&&o.tag===5&&o.type==="form"?Cg(o):Tn.r(t)}var ei=typeof document>"u"?null:document;function lf(t,o,s){var l=ei;if(l&&typeof o=="string"&&o){var d=Ie(o);d='link[rel="'+t+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),af.has(d)||(af.add(d),t={rel:t,crossOrigin:s,href:o},l.querySelector(d)===null&&(o=l.createElement("link"),re(o,"link",t),$t(o),l.head.appendChild(o)))}}function jT(t){Tn.D(t),lf("dns-prefetch",t,null)}function t0(t,o){Tn.C(t,o),lf("preconnect",t,o)}function e0(t,o,s){Tn.L(t,o,s);var l=ei;if(l&&t&&o){var d='link[rel="preload"][as="'+Ie(o)+'"]';o==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+Ie(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+Ie(s.imageSizes)+'"]')):d+='[href="'+Ie(t)+'"]';var p=d;switch(o){case"style":p=ni(t);break;case"script":p=oi(t)}qe.has(p)||(t=T({rel:"preload",href:o==="image"&&s&&s.imageSrcSet?void 0:t,as:o},s),qe.set(p,t),l.querySelector(d)!==null||o==="style"&&l.querySelector(ns(p))||o==="script"&&l.querySelector(os(p))||(o=l.createElement("link"),re(o,"link",t),$t(o),l.head.appendChild(o)))}}function n0(t,o){Tn.m(t,o);var s=ei;if(s&&t){var l=o&&typeof o.as=="string"?o.as:"script",d='link[rel="modulepreload"][as="'+Ie(l)+'"][href="'+Ie(t)+'"]',p=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=oi(t)}if(!qe.has(p)&&(t=T({rel:"modulepreload",href:t},o),qe.set(p,t),s.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(os(p)))return}l=s.createElement("link"),re(l,"link",t),$t(l),s.head.appendChild(l)}}}function o0(t,o,s){Tn.S(t,o,s);var l=ei;if(l&&t){var d=Ao(l).hoistableStyles,p=ni(t);o=o||"default";var _=d.get(p);if(!_){var E={loading:0,preload:null};if(_=l.querySelector(ns(p)))E.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":o},s),(s=qe.get(p))&&vu(t,s);var w=_=l.createElement("link");$t(w),re(w,"link",t),w._p=new Promise(function(D,B){w.onload=D,w.onerror=B}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,wr(_,o,l)}_={type:"stylesheet",instance:_,count:1,state:E},d.set(p,_)}}}function i0(t,o){Tn.X(t,o);var s=ei;if(s&&t){var l=Ao(s).hoistableScripts,d=oi(t),p=l.get(d);p||(p=s.querySelector(os(d)),p||(t=T({src:t,async:!0},o),(o=qe.get(d))&&Tu(t,o),p=s.createElement("script"),$t(p),re(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(d,p))}}function s0(t,o){Tn.M(t,o);var s=ei;if(s&&t){var l=Ao(s).hoistableScripts,d=oi(t),p=l.get(d);p||(p=s.querySelector(os(d)),p||(t=T({src:t,async:!0,type:"module"},o),(o=qe.get(d))&&Tu(t,o),p=s.createElement("script"),$t(p),re(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(d,p))}}function uf(t,o,s,l){var d=(d=dt.current)?Ar(d):null;if(!d)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(o=ni(s.href),s=Ao(d).hoistableStyles,l=s.get(o),l||(l={type:"style",instance:null,count:0,state:null},s.set(o,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=ni(s.href);var p=Ao(d).hoistableStyles,_=p.get(t);if(_||(d=d.ownerDocument||d,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,_),(p=d.querySelector(ns(t)))&&!p._p&&(_.instance=p,_.state.loading=5),qe.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},qe.set(t,s),p||r0(d,t,s,_.state))),o&&l===null)throw Error(r(528,""));return _}if(o&&l!==null)throw Error(r(529,""));return null;case"script":return o=s.async,s=s.src,typeof s=="string"&&o&&typeof o!="function"&&typeof o!="symbol"?(o=oi(s),s=Ao(d).hoistableScripts,l=s.get(o),l||(l={type:"script",instance:null,count:0,state:null},s.set(o,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ni(t){return'href="'+Ie(t)+'"'}function ns(t){return'link[rel="stylesheet"]['+t+"]"}function cf(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function r0(t,o,s,l){t.querySelector('link[rel="preload"][as="style"]['+o+"]")?l.loading=1:(o=t.createElement("link"),l.preload=o,o.addEventListener("load",function(){return l.loading|=1}),o.addEventListener("error",function(){return l.loading|=2}),re(o,"link",s),$t(o),t.head.appendChild(o))}function oi(t){return'[src="'+Ie(t)+'"]'}function os(t){return"script[async]"+t}function hf(t,o,s){if(o.count++,o.instance===null)switch(o.type){case"style":var l=t.querySelector('style[data-href~="'+Ie(s.href)+'"]');if(l)return o.instance=l,$t(l),l;var d=T({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),$t(l),re(l,"style",d),wr(l,s.precedence,t),o.instance=l;case"stylesheet":d=ni(s.href);var p=t.querySelector(ns(d));if(p)return o.state.loading|=4,o.instance=p,$t(p),p;l=cf(s),(d=qe.get(d))&&vu(l,d),p=(t.ownerDocument||t).createElement("link"),$t(p);var _=p;return _._p=new Promise(function(E,w){_.onload=E,_.onerror=w}),re(p,"link",l),o.state.loading|=4,wr(p,s.precedence,t),o.instance=p;case"script":return p=oi(s.src),(d=t.querySelector(os(p)))?(o.instance=d,$t(d),d):(l=s,(d=qe.get(p))&&(l=T({},s),Tu(l,d)),t=t.ownerDocument||t,d=t.createElement("script"),$t(d),re(d,"link",l),t.head.appendChild(d),o.instance=d);case"void":return null;default:throw Error(r(443,o.type))}else o.type==="stylesheet"&&(o.state.loading&4)===0&&(l=o.instance,o.state.loading|=4,wr(l,s.precedence,t));return o.instance}function wr(t,o,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,p=d,_=0;_<l.length;_++){var E=l[_];if(E.dataset.precedence===o)p=E;else if(p!==d)break}p?p.parentNode.insertBefore(t,p.nextSibling):(o=s.nodeType===9?s.head:s,o.insertBefore(t,o.firstChild))}function vu(t,o){t.crossOrigin==null&&(t.crossOrigin=o.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=o.referrerPolicy),t.title==null&&(t.title=o.title)}function Tu(t,o){t.crossOrigin==null&&(t.crossOrigin=o.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=o.referrerPolicy),t.integrity==null&&(t.integrity=o.integrity)}var xr=null;function gf(t,o,s){if(xr===null){var l=new Map,d=xr=new Map;d.set(s,l)}else d=xr,l=d.get(s),l||(l=new Map,d.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),d=0;d<s.length;d++){var p=s[d];if(!(p[Ti]||p[ne]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var _=p.getAttribute(o)||"";_=t+_;var E=l.get(_);E?E.push(p):l.set(_,[p])}}return l}function df(t,o,s){t=t.ownerDocument||t,t.head.insertBefore(s,o==="title"?t.querySelector("head > title"):null)}function a0(t,o,s){if(s===1||o.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof o.precedence!="string"||typeof o.href!="string"||o.href==="")break;return!0;case"link":if(typeof o.rel!="string"||typeof o.href!="string"||o.href===""||o.onLoad||o.onError)break;switch(o.rel){case"stylesheet":return t=o.disabled,typeof o.precedence=="string"&&t==null;default:return!0}case"script":if(o.async&&typeof o.async!="function"&&typeof o.async!="symbol"&&!o.onLoad&&!o.onError&&o.src&&typeof o.src=="string")return!0}return!1}function ff(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function l0(t,o,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=ni(l.href),p=o.querySelector(ns(d));if(p){o=p._p,o!==null&&typeof o=="object"&&typeof o.then=="function"&&(t.count++,t=br.bind(t),o.then(t,t)),s.state.loading|=4,s.instance=p,$t(p);return}p=o.ownerDocument||o,l=cf(l),(d=qe.get(d))&&vu(l,d),p=p.createElement("link"),$t(p);var _=p;_._p=new Promise(function(E,w){_.onload=E,_.onerror=w}),re(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,o),(o=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=br.bind(t),o.addEventListener("load",s),o.addEventListener("error",s))}}var Su=0;function u0(t,o){return t.stylesheets&&t.count===0&&Mr(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Mr(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+o);0<t.imgBytes&&Su===0&&(Su=62500*OT());var d=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Mr(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Su?50:800)+o);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function br(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mr(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Rr=null;function Mr(t,o){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Rr=new Map,o.forEach(c0,t),Rr=null,br.call(t))}function c0(t,o){if(!(o.state.loading&4)){var s=Rr.get(t);if(s)var l=s.get(null);else{s=new Map,Rr.set(t,s);for(var d=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var _=d[p];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(s.set(_.dataset.precedence,_),l=_)}l&&s.set(null,l)}d=o.instance,_=d.getAttribute("data-precedence"),p=s.get(_)||l,p===l&&s.set(null,d),s.set(_,d),this.count++,l=br.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),p?p.parentNode.insertBefore(d,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(d,t.firstChild)),o.state.loading|=4}}var is={$$typeof:P,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function h0(t,o,s,l,d,p,_,E,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ma(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.hiddenUpdates=ma(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function mf(t,o,s,l,d,p,_,E,w,D,B,O){return t=new h0(t,o,s,_,w,D,B,O,E),o=1,p===!0&&(o|=24),p=Ce(3,null,null,o),t.current=p,p.stateNode=t,o=ja(),o.refCount++,t.pooledCache=o,o.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:o},ol(p),t}function pf(t){return t?(t=Uo,t):Uo}function yf(t,o,s,l,d,p){d=pf(d),l.context===null?l.context=d:l.pendingContext=d,l=kn(o),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=Un(t,l,o),s!==null&&(ve(s,t,o),Li(s,t,o))}function vf(t,o){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<o?s:o}}function _u(t,o){vf(t,o),(t=t.alternate)&&vf(t,o)}function Tf(t){if(t.tag===13||t.tag===31){var o=so(t,67108864);o!==null&&ve(o,t,67108864),_u(t,67108864)}}function Sf(t){if(t.tag===13||t.tag===31){var o=Re();o=pa(o);var s=so(t,o);s!==null&&ve(s,t,o),_u(t,o)}}var Nr=!0;function g0(t,o,s,l){var d=H.T;H.T=null;var p=X.p;try{X.p=2,Eu(t,o,s,l)}finally{X.p=p,H.T=d}}function d0(t,o,s,l){var d=H.T;H.T=null;var p=X.p;try{X.p=8,Eu(t,o,s,l)}finally{X.p=p,H.T=d}}function Eu(t,o,s,l){if(Nr){var d=Cu(l);if(d===null)lu(t,o,l,Ir,s),Ef(t,l);else if(m0(d,t,o,s,l))l.stopPropagation();else if(Ef(t,l),o&4&&-1<f0.indexOf(t)){for(;d!==null;){var p=Co(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var _=to(p.pendingLanes);if(_!==0){var E=p;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var w=1<<31-_e(_);E.entanglements[1]|=w,_&=~w}$e(p),(xt&6)===0&&(dr=Te()+500,$i(0))}}break;case 31:case 13:E=so(p,2),E!==null&&ve(E,p,2),mr(),_u(p,2)}if(p=Cu(l),p===null&&lu(t,o,l,Ir,s),p===d)break;d=p}d!==null&&l.stopPropagation()}else lu(t,o,l,null,s)}}function Cu(t){return t=wa(t),Au(t)}var Ir=null;function Au(t){if(Ir=null,t=Eo(t),t!==null){var o=c(t);if(o===null)t=null;else{var s=o.tag;if(s===13){if(t=g(o),t!==null)return t;t=null}else if(s===31){if(t=m(o),t!==null)return t;t=null}else if(s===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;t=null}else o!==t&&(t=null)}}return Ir=t,null}function _f(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jy()){case Rc:return 2;case Mc:return 8;case Ss:case tv:return 32;case Nc:return 268435456;default:return 32}default:return 32}}var wu=!1,Yn=null,Wn=null,Jn=null,ss=new Map,rs=new Map,Kn=[],f0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ef(t,o){switch(t){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":ss.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":rs.delete(o.pointerId)}}function as(t,o,s,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:o,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},o!==null&&(o=Co(o),o!==null&&Tf(o)),t):(t.eventSystemFlags|=l,o=t.targetContainers,d!==null&&o.indexOf(d)===-1&&o.push(d),t)}function m0(t,o,s,l,d){switch(o){case"focusin":return Yn=as(Yn,t,o,s,l,d),!0;case"dragenter":return Wn=as(Wn,t,o,s,l,d),!0;case"mouseover":return Jn=as(Jn,t,o,s,l,d),!0;case"pointerover":var p=d.pointerId;return ss.set(p,as(ss.get(p)||null,t,o,s,l,d)),!0;case"gotpointercapture":return p=d.pointerId,rs.set(p,as(rs.get(p)||null,t,o,s,l,d)),!0}return!1}function Cf(t){var o=Eo(t.target);if(o!==null){var s=c(o);if(s!==null){if(o=s.tag,o===13){if(o=g(s),o!==null){t.blockedOn=o,Lc(t.priority,function(){Sf(s)});return}}else if(o===31){if(o=m(s),o!==null){t.blockedOn=o,Lc(t.priority,function(){Sf(s)});return}}else if(o===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dr(t){if(t.blockedOn!==null)return!1;for(var o=t.targetContainers;0<o.length;){var s=Cu(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Aa=l,s.target.dispatchEvent(l),Aa=null}else return o=Co(s),o!==null&&Tf(o),t.blockedOn=s,!1;o.shift()}return!0}function Af(t,o,s){Dr(t)&&s.delete(o)}function p0(){wu=!1,Yn!==null&&Dr(Yn)&&(Yn=null),Wn!==null&&Dr(Wn)&&(Wn=null),Jn!==null&&Dr(Jn)&&(Jn=null),ss.forEach(Af),rs.forEach(Af)}function kr(t,o){t.blockedOn===o&&(t.blockedOn=null,wu||(wu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,p0)))}var Ur=null;function wf(t){Ur!==t&&(Ur=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ur===t&&(Ur=null);for(var o=0;o<t.length;o+=3){var s=t[o],l=t[o+1],d=t[o+2];if(typeof l!="function"){if(Au(l||s)===null)continue;break}var p=Co(s);p!==null&&(t.splice(o,3),o-=3,Cl(p,{pending:!0,data:d,method:s.method,action:l},l,d))}}))}function ii(t){function o(w){return kr(w,t)}Yn!==null&&kr(Yn,t),Wn!==null&&kr(Wn,t),Jn!==null&&kr(Jn,t),ss.forEach(o),rs.forEach(o);for(var s=0;s<Kn.length;s++){var l=Kn[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Kn.length&&(s=Kn[0],s.blockedOn===null);)Cf(s),s.blockedOn===null&&Kn.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var d=s[l],p=s[l+1],_=d[ge]||null;if(typeof p=="function")_||wf(s);else if(_){var E=null;if(p&&p.hasAttribute("formAction")){if(d=p,_=p[ge]||null)E=_.formAction;else if(Au(d)!==null)continue}else E=_.action;typeof E=="function"?s[l+1]=E:(s.splice(l,3),l-=3),wf(s)}}}function xf(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(_){return d=_})},focusReset:"manual",scroll:"manual"})}function o(){d!==null&&(d(),d=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",o),navigation.addEventListener("navigateerror",o),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",o),navigation.removeEventListener("navigateerror",o),d!==null&&(d(),d=null)}}}function xu(t){this._internalRoot=t}zr.prototype.render=xu.prototype.render=function(t){var o=this._internalRoot;if(o===null)throw Error(r(409));var s=o.current,l=Re();yf(s,l,t,o,null,null)},zr.prototype.unmount=xu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var o=t.containerInfo;yf(t.current,2,null,t,null,null),mr(),o[_o]=null}};function zr(t){this._internalRoot=t}zr.prototype.unstable_scheduleHydration=function(t){if(t){var o=zc();t={blockedOn:null,target:t,priority:o};for(var s=0;s<Kn.length&&o!==0&&o<Kn[s].priority;s++);Kn.splice(s,0,t),s===0&&Cf(t)}};var bf=e.version;if(bf!=="19.2.4")throw Error(r(527,bf,"19.2.4"));X.findDOMNode=function(t){var o=t._reactInternals;if(o===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=f(o),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var y0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{pi=Lr.inject(y0),Se=Lr}catch{}}return us.createRoot=function(t,o){if(!a(t))throw Error(r(299));var s=!1,l="",d=kg,p=Ug,_=zg;return o!=null&&(o.unstable_strictMode===!0&&(s=!0),o.identifierPrefix!==void 0&&(l=o.identifierPrefix),o.onUncaughtError!==void 0&&(d=o.onUncaughtError),o.onCaughtError!==void 0&&(p=o.onCaughtError),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),o=mf(t,1,!1,null,null,s,l,null,d,p,_,xf),t[_o]=o.current,au(t),new xu(o)},us.hydrateRoot=function(t,o,s){if(!a(t))throw Error(r(299));var l=!1,d="",p=kg,_=Ug,E=zg,w=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(_=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.formState!==void 0&&(w=s.formState)),o=mf(t,1,!0,o,s??null,l,d,w,p,_,E,xf),o.context=pf(null),s=o.current,l=Re(),l=pa(l),d=kn(l),d.callback=null,Un(s,d,l),s=l,o.current.lanes=s,vi(o,s),$e(o),t[_o]=o.current,au(t),new zr(o)},us.version="19.2.4",us}var Hf;function b0(){if(Hf)return Mu.exports;Hf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Mu.exports=x0(),Mu.exports}var R0=b0();const M0=ac(R0);/**
 * react-router v7.13.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bf="popstate";function qf(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function N0(n={}){function e(a,c){let{pathname:g="/",search:m="",hash:y=""}=ui(a.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Fu("",{pathname:g,search:m,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(a,c){let g=a.document.querySelector("base"),m="";if(g&&g.getAttribute("href")){let y=a.location.href,f=y.indexOf("#");m=f===-1?y:y.slice(0,f)}return m+"#"+(typeof c=="string"?c:ms(c))}function r(a,c){Je(a.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return D0(e,i,r,n)}function Zt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Je(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function I0(){return Math.random().toString(36).substring(2,10)}function Pf(n,e){return{usr:n.state,key:n.key,idx:e,masked:n.unstable_mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function Fu(n,e,i=null,r,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?ui(e):e,state:i,key:e&&e.key||r||I0(),unstable_mask:a}}function ms({pathname:n="/",search:e="",hash:i=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function ui(n){let e={};if(n){let i=n.indexOf("#");i>=0&&(e.hash=n.substring(i),n=n.substring(0,i));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function D0(n,e,i,r={}){let{window:a=document.defaultView,v5Compat:c=!1}=r,g=a.history,m="POP",y=null,f=v();f==null&&(f=0,g.replaceState({...g.state,idx:f},""));function v(){return(g.state||{idx:null}).idx}function T(){m="POP";let x=v(),U=x==null?null:x-f;f=x,y&&y({action:m,location:M.location,delta:U})}function S(x,U){m="PUSH";let Y=qf(x)?x:Fu(M.location,x,U);i&&i(Y,x),f=v()+1;let P=Pf(Y,f),J=M.createHref(Y.unstable_mask||Y);try{g.pushState(P,"",J)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;a.location.assign(J)}c&&y&&y({action:m,location:M.location,delta:1})}function C(x,U){m="REPLACE";let Y=qf(x)?x:Fu(M.location,x,U);i&&i(Y,x),f=v();let P=Pf(Y,f),J=M.createHref(Y.unstable_mask||Y);g.replaceState(P,"",J),c&&y&&y({action:m,location:M.location,delta:0})}function A(x){return k0(x)}let M={get action(){return m},get location(){return n(a,g)},listen(x){if(y)throw new Error("A history only accepts one active listener");return a.addEventListener(Bf,T),y=x,()=>{a.removeEventListener(Bf,T),y=null}},createHref(x){return e(a,x)},createURL:A,encodeLocation(x){let U=A(x);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:S,replace:C,go(x){return g.go(x)}};return M}function k0(n,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Zt(i,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:ms(n);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Lp(n,e,i="/"){return U0(n,e,i,!1)}function U0(n,e,i,r){let a=typeof e=="string"?ui(e):e,c=Sn(a.pathname||"/",i);if(c==null)return null;let g=Hp(n);z0(g);let m=null;for(let y=0;m==null&&y<g.length;++y){let f=W0(c);m=F0(g[y],f,r)}return m}function Hp(n,e=[],i=[],r="",a=!1){let c=(g,m,y=a,f)=>{let v={relativePath:f===void 0?g.path||"":f,caseSensitive:g.caseSensitive===!0,childrenIndex:m,route:g};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&y)return;Zt(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let T=je([r,v.relativePath]),S=i.concat(v);g.children&&g.children.length>0&&(Zt(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),Hp(g.children,e,S,T,y)),!(g.path==null&&!g.index)&&e.push({path:T,score:V0(T,g.index),routesMeta:S})};return n.forEach((g,m)=>{var y;if(g.path===""||!((y=g.path)!=null&&y.includes("?")))c(g,m);else for(let f of Bp(g.path))c(g,m,!0,f)}),e}function Bp(n){let e=n.split("/");if(e.length===0)return[];let[i,...r]=e,a=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return a?[c,""]:[c];let g=Bp(r.join("/")),m=[];return m.push(...g.map(y=>y===""?c:[c,y].join("/"))),a&&m.push(...g),m.map(y=>n.startsWith("/")&&y===""?"/":y)}function z0(n){n.sort((e,i)=>e.score!==i.score?i.score-e.score:O0(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var L0=/^:[\w-]+$/,H0=3,B0=2,q0=1,P0=10,G0=-2,Gf=n=>n==="*";function V0(n,e){let i=n.split("/"),r=i.length;return i.some(Gf)&&(r+=G0),e&&(r+=B0),i.filter(a=>!Gf(a)).reduce((a,c)=>a+(L0.test(c)?H0:c===""?q0:P0),r)}function O0(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function F0(n,e,i=!1){let{routesMeta:r}=n,a={},c="/",g=[];for(let m=0;m<r.length;++m){let y=r[m],f=m===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",T=Wr({path:y.relativePath,caseSensitive:y.caseSensitive,end:f},v),S=y.route;if(!T&&f&&i&&!r[r.length-1].route.index&&(T=Wr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},v)),!T)return null;Object.assign(a,T.params),g.push({params:a,pathname:je([c,T.pathname]),pathnameBase:Q0(je([c,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(c=je([c,T.pathnameBase]))}return g}function Wr(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,r]=Y0(n.path,n.caseSensitive,n.end),a=e.match(i);if(!a)return null;let c=a[0],g=c.replace(/(.)\/+$/,"$1"),m=a.slice(1);return{params:r.reduce((f,{paramName:v,isOptional:T},S)=>{if(v==="*"){let A=m[S]||"";g=c.slice(0,c.length-A.length).replace(/(.)\/+$/,"$1")}const C=m[S];return T&&!C?f[v]=void 0:f[v]=(C||"").replace(/%2F/g,"/"),f},{}),pathname:c,pathnameBase:g,pattern:n}}function Y0(n,e=!1,i=!0){Je(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,m,y,f,v)=>{if(r.push({paramName:m,isOptional:y!=null}),y){let T=v.charAt(f+g.length);return T&&T!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function W0(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Je(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Sn(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=n.charAt(i);return r&&r!=="/"?null:n.slice(i)||"/"}var J0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function K0(n,e="/"){let{pathname:i,search:r="",hash:a=""}=typeof n=="string"?ui(n):n,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=Vf(i.substring(1),"/"):c=Vf(i,e)):c=e,{pathname:c,search:Z0(r),hash:$0(a)}}function Vf(n,e){let i=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?i.length>1&&i.pop():a!=="."&&i.push(a)}),i.length>1?i.join("/"):"/"}function ku(n,e,i,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function X0(n){return n.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function qp(n){let e=X0(n);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function uc(n,e,i,r=!1){let a;typeof n=="string"?a=ui(n):(a={...n},Zt(!a.pathname||!a.pathname.includes("?"),ku("?","pathname","search",a)),Zt(!a.pathname||!a.pathname.includes("#"),ku("#","pathname","hash",a)),Zt(!a.search||!a.search.includes("#"),ku("#","search","hash",a)));let c=n===""||a.pathname==="",g=c?"/":a.pathname,m;if(g==null)m=i;else{let T=e.length-1;if(!r&&g.startsWith("..")){let S=g.split("/");for(;S[0]==="..";)S.shift(),T-=1;a.pathname=S.join("/")}m=T>=0?e[T]:"/"}let y=K0(a,m),f=g&&g!=="/"&&g.endsWith("/"),v=(c||g===".")&&i.endsWith("/");return!y.pathname.endsWith("/")&&(f||v)&&(y.pathname+="/"),y}var je=n=>n.join("/").replace(/\/\/+/g,"/"),Q0=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Z0=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,$0=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,j0=class{constructor(n,e,i,r=!1){this.status=n,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function tS(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function eS(n){return n.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Pp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Gp(n,e){let i=n;if(typeof i!="string"||!J0.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,a=!1;if(Pp)try{let c=new URL(window.location.href),g=i.startsWith("//")?new URL(c.protocol+i):new URL(i),m=Sn(g.pathname,e);g.origin===c.origin&&m!=null?i=m+g.search+g.hash:a=!0}catch{Je(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:a,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Vp=["POST","PUT","PATCH","DELETE"];new Set(Vp);var nS=["GET",...Vp];new Set(nS);var ci=q.createContext(null);ci.displayName="DataRouter";var ta=q.createContext(null);ta.displayName="DataRouterState";var oS=q.createContext(!1),Op=q.createContext({isTransitioning:!1});Op.displayName="ViewTransition";var iS=q.createContext(new Map);iS.displayName="Fetchers";var sS=q.createContext(null);sS.displayName="Await";var Ge=q.createContext(null);Ge.displayName="Navigation";var ea=q.createContext(null);ea.displayName="Location";var En=q.createContext({outlet:null,matches:[],isDataRoute:!1});En.displayName="Route";var cc=q.createContext(null);cc.displayName="RouteError";var Fp="REACT_ROUTER_ERROR",rS="REDIRECT",aS="ROUTE_ERROR_RESPONSE";function lS(n){if(n.startsWith(`${Fp}:${rS}:{`))try{let e=JSON.parse(n.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function uS(n){if(n.startsWith(`${Fp}:${aS}:{`))try{let e=JSON.parse(n.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new j0(e.status,e.statusText,e.data)}catch{}}function cS(n,{relative:e}={}){Zt(ps(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=q.useContext(Ge),{hash:a,pathname:c,search:g}=ys(n,{relative:e}),m=c;return i!=="/"&&(m=c==="/"?i:je([i,c])),r.createHref({pathname:m,search:g,hash:a})}function ps(){return q.useContext(ea)!=null}function Zn(){return Zt(ps(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(ea).location}var Yp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Wp(n){q.useContext(Ge).static||q.useLayoutEffect(n)}function hS(){let{isDataRoute:n}=q.useContext(En);return n?AS():gS()}function gS(){Zt(ps(),"useNavigate() may be used only in the context of a <Router> component.");let n=q.useContext(ci),{basename:e,navigator:i}=q.useContext(Ge),{matches:r}=q.useContext(En),{pathname:a}=Zn(),c=JSON.stringify(qp(r)),g=q.useRef(!1);return Wp(()=>{g.current=!0}),q.useCallback((y,f={})=>{if(Je(g.current,Yp),!g.current)return;if(typeof y=="number"){i.go(y);return}let v=uc(y,JSON.parse(c),a,f.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:je([e,v.pathname])),(f.replace?i.replace:i.push)(v,f.state,f)},[e,i,c,a,n])}q.createContext(null);function ys(n,{relative:e}={}){let{matches:i}=q.useContext(En),{pathname:r}=Zn(),a=JSON.stringify(qp(i));return q.useMemo(()=>uc(n,JSON.parse(a),r,e==="path"),[n,a,r,e])}function dS(n,e,i){Zt(ps(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=q.useContext(Ge),{matches:a}=q.useContext(En),c=a[a.length-1],g=c?c.params:{},m=c?c.pathname:"/",y=c?c.pathnameBase:"/",f=c&&c.route;{let x=f&&f.path||"";Kp(m,!f||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let v=Zn(),T;T=v;let S=T.pathname||"/",C=S;if(y!=="/"){let x=y.replace(/^\//,"").split("/");C="/"+S.replace(/^\//,"").split("/").slice(x.length).join("/")}let A=Lp(n,{pathname:C});return Je(f||A!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Je(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),vS(A&&A.map(x=>Object.assign({},x,{params:Object.assign({},g,x.params),pathname:je([y,r.encodeLocation?r.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?y:je([y,r.encodeLocation?r.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),a,i)}function fS(){let n=CS(),e=tS(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},g=null;return console.error("Error handled by React Router default ErrorBoundary:",n),g=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:c},"ErrorBoundary")," or"," ",q.createElement("code",{style:c},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),i?q.createElement("pre",{style:a},i):null,g)}var mS=q.createElement(fS,null),Jp=class extends q.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const i=uS(n.digest);i&&(n=i)}let e=n!==void 0?q.createElement(En.Provider,{value:this.props.routeContext},q.createElement(cc.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?q.createElement(pS,{error:n},e):e}};Jp.contextType=oS;var Uu=new WeakMap;function pS({children:n,error:e}){let{basename:i}=q.useContext(Ge);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=lS(e.digest);if(r){let a=Uu.get(e);if(a)throw a;let c=Gp(r.location,i);if(Pp&&!Uu.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Uu.set(e,g),g}return q.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return n}function yS({routeContext:n,match:e,children:i}){let r=q.useContext(ci);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(En.Provider,{value:n},i)}function vS(n,e=[],i){let r=i==null?void 0:i.state;if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let a=n,c=r==null?void 0:r.errors;if(c!=null){let v=a.findIndex(T=>T.route.id&&(c==null?void 0:c[T.route.id])!==void 0);Zt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),a=a.slice(0,Math.min(a.length,v+1))}let g=!1,m=-1;if(i&&r){g=r.renderFallback;for(let v=0;v<a.length;v++){let T=a[v];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(m=v),T.route.id){let{loaderData:S,errors:C}=r,A=T.route.loader&&!S.hasOwnProperty(T.route.id)&&(!C||C[T.route.id]===void 0);if(T.route.lazy||A){i.isStatic&&(g=!0),m>=0?a=a.slice(0,m+1):a=[a[0]];break}}}}let y=i==null?void 0:i.onError,f=r&&y?(v,T)=>{var S,C;y(v,{location:r.location,params:((C=(S=r.matches)==null?void 0:S[0])==null?void 0:C.params)??{},unstable_pattern:eS(r.matches),errorInfo:T})}:void 0;return a.reduceRight((v,T,S)=>{let C,A=!1,M=null,x=null;r&&(C=c&&T.route.id?c[T.route.id]:void 0,M=T.route.errorElement||mS,g&&(m<0&&S===0?(Kp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,x=null):m===S&&(A=!0,x=T.route.hydrateFallbackElement||null)));let U=e.concat(a.slice(0,S+1)),Y=()=>{let P;return C?P=M:A?P=x:T.route.Component?P=q.createElement(T.route.Component,null):T.route.element?P=T.route.element:P=v,q.createElement(yS,{match:T,routeContext:{outlet:v,matches:U,isDataRoute:r!=null},children:P})};return r&&(T.route.ErrorBoundary||T.route.errorElement||S===0)?q.createElement(Jp,{location:r.location,revalidation:r.revalidation,component:M,error:C,children:Y(),routeContext:{outlet:null,matches:U,isDataRoute:!0},onError:f}):Y()},null)}function hc(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function TS(n){let e=q.useContext(ci);return Zt(e,hc(n)),e}function SS(n){let e=q.useContext(ta);return Zt(e,hc(n)),e}function _S(n){let e=q.useContext(En);return Zt(e,hc(n)),e}function gc(n){let e=_S(n),i=e.matches[e.matches.length-1];return Zt(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function ES(){return gc("useRouteId")}function CS(){var r;let n=q.useContext(cc),e=SS("useRouteError"),i=gc("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[i]}function AS(){let{router:n}=TS("useNavigate"),e=gc("useNavigate"),i=q.useRef(!1);return Wp(()=>{i.current=!0}),q.useCallback(async(a,c={})=>{Je(i.current,Yp),i.current&&(typeof a=="number"?await n.navigate(a):await n.navigate(a,{fromRouteId:e,...c}))},[n,e])}var Of={};function Kp(n,e,i){!e&&!Of[n]&&(Of[n]=!0,Je(!1,i))}q.memo(wS);function wS({routes:n,future:e,state:i,isStatic:r,onError:a}){return dS(n,void 0,{state:i,isStatic:r,onError:a})}function xS({basename:n="/",children:e=null,location:i,navigationType:r="POP",navigator:a,static:c=!1,unstable_useTransitions:g}){Zt(!ps(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=n.replace(/^\/*/,"/"),y=q.useMemo(()=>({basename:m,navigator:a,static:c,unstable_useTransitions:g,future:{}}),[m,a,c,g]);typeof i=="string"&&(i=ui(i));let{pathname:f="/",search:v="",hash:T="",state:S=null,key:C="default",unstable_mask:A}=i,M=q.useMemo(()=>{let x=Sn(f,m);return x==null?null:{location:{pathname:x,search:v,hash:T,state:S,key:C,unstable_mask:A},navigationType:r}},[m,f,v,T,S,C,r,A]);return Je(M!=null,`<Router basename="${m}"> is not able to match the URL "${f}${v}${T}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:q.createElement(Ge.Provider,{value:y},q.createElement(ea.Provider,{children:e,value:M}))}var Vr="get",Or="application/x-www-form-urlencoded";function na(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function bS(n){return na(n)&&n.tagName.toLowerCase()==="button"}function RS(n){return na(n)&&n.tagName.toLowerCase()==="form"}function MS(n){return na(n)&&n.tagName.toLowerCase()==="input"}function NS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function IS(n,e){return n.button===0&&(!e||e==="_self")&&!NS(n)}var Hr=null;function DS(){if(Hr===null)try{new FormData(document.createElement("form"),0),Hr=!1}catch{Hr=!0}return Hr}var kS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zu(n){return n!=null&&!kS.has(n)?(Je(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Or}"`),null):n}function US(n,e){let i,r,a,c,g;if(RS(n)){let m=n.getAttribute("action");r=m?Sn(m,e):null,i=n.getAttribute("method")||Vr,a=zu(n.getAttribute("enctype"))||Or,c=new FormData(n)}else if(bS(n)||MS(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=n.getAttribute("formaction")||m.getAttribute("action");if(r=y?Sn(y,e):null,i=n.getAttribute("formmethod")||m.getAttribute("method")||Vr,a=zu(n.getAttribute("formenctype"))||zu(m.getAttribute("enctype"))||Or,c=new FormData(m,n),!DS()){let{name:f,type:v,value:T}=n;if(v==="image"){let S=f?`${f}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else f&&c.append(f,T)}}else{if(na(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Vr,r=null,a=Or,g=n}return c&&a==="text/plain"&&(g=c,c=void 0),{action:r,method:i.toLowerCase(),encType:a,formData:c,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function dc(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function zS(n,e,i,r){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${r}`:a.pathname=`${a.pathname}.${r}`:a.pathname==="/"?a.pathname=`_root.${r}`:e&&Sn(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function LS(n,e){if(n.id in e)return e[n.id];try{let i=await import(n.module);return e[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function HS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function BS(n,e,i){let r=await Promise.all(n.map(async a=>{let c=e.routes[a.route.id];if(c){let g=await LS(c,i);return g.links?g.links():[]}return[]}));return VS(r.flat(1).filter(HS).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Ff(n,e,i,r,a,c){let g=(y,f)=>i[f]?y.route.id!==i[f].route.id:!0,m=(y,f)=>{var v;return i[f].pathname!==y.pathname||((v=i[f].route.path)==null?void 0:v.endsWith("*"))&&i[f].params["*"]!==y.params["*"]};return c==="assets"?e.filter((y,f)=>g(y,f)||m(y,f)):c==="data"?e.filter((y,f)=>{var T;let v=r.routes[y.route.id];if(!v||!v.hasLoader)return!1;if(g(y,f)||m(y,f))return!0;if(y.route.shouldRevalidate){let S=y.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=i[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function qS(n,e,{includeHydrateFallback:i}={}){return PS(n.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let c=[a.module];return a.clientActionModule&&(c=c.concat(a.clientActionModule)),a.clientLoaderModule&&(c=c.concat(a.clientLoaderModule)),i&&a.hydrateFallbackModule&&(c=c.concat(a.hydrateFallbackModule)),a.imports&&(c=c.concat(a.imports)),c}).flat(1))}function PS(n){return[...new Set(n)]}function GS(n){let e={},i=Object.keys(n).sort();for(let r of i)e[r]=n[r];return e}function VS(n,e){let i=new Set;return new Set(e),n.reduce((r,a)=>{let c=JSON.stringify(GS(a));return i.has(c)||(i.add(c),r.push({key:c,link:a})),r},[])}function Xp(){let n=q.useContext(ci);return dc(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function OS(){let n=q.useContext(ta);return dc(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var fc=q.createContext(void 0);fc.displayName="FrameworkContext";function Qp(){let n=q.useContext(fc);return dc(n,"You must render this element inside a <HydratedRouter> element"),n}function FS(n,e){let i=q.useContext(fc),[r,a]=q.useState(!1),[c,g]=q.useState(!1),{onFocus:m,onBlur:y,onMouseEnter:f,onMouseLeave:v,onTouchStart:T}=e,S=q.useRef(null);q.useEffect(()=>{if(n==="render"&&g(!0),n==="viewport"){let M=U=>{U.forEach(Y=>{g(Y.isIntersecting)})},x=new IntersectionObserver(M,{threshold:.5});return S.current&&x.observe(S.current),()=>{x.disconnect()}}},[n]),q.useEffect(()=>{if(r){let M=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(M)}}},[r]);let C=()=>{a(!0)},A=()=>{a(!1),g(!1)};return i?n!=="intent"?[c,S,{}]:[c,S,{onFocus:cs(m,C),onBlur:cs(y,A),onMouseEnter:cs(f,C),onMouseLeave:cs(v,A),onTouchStart:cs(T,C)}]:[!1,S,{}]}function cs(n,e){return i=>{n&&n(i),i.defaultPrevented||e(i)}}function YS({page:n,...e}){let{router:i}=Xp(),r=q.useMemo(()=>Lp(i.routes,n,i.basename),[i.routes,n,i.basename]);return r?q.createElement(JS,{page:n,matches:r,...e}):null}function WS(n){let{manifest:e,routeModules:i}=Qp(),[r,a]=q.useState([]);return q.useEffect(()=>{let c=!1;return BS(n,e,i).then(g=>{c||a(g)}),()=>{c=!0}},[n,e,i]),r}function JS({page:n,matches:e,...i}){let r=Zn(),{future:a,manifest:c,routeModules:g}=Qp(),{basename:m}=Xp(),{loaderData:y,matches:f}=OS(),v=q.useMemo(()=>Ff(n,e,f,c,r,"data"),[n,e,f,c,r]),T=q.useMemo(()=>Ff(n,e,f,c,r,"assets"),[n,e,f,c,r]),S=q.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let M=new Set,x=!1;if(e.forEach(Y=>{var J;let P=c.routes[Y.route.id];!P||!P.hasLoader||(!v.some(Q=>Q.route.id===Y.route.id)&&Y.route.id in y&&((J=g[Y.route.id])!=null&&J.shouldRevalidate)||P.hasClientLoader?x=!0:M.add(Y.route.id))}),M.size===0)return[];let U=zS(n,m,a.unstable_trailingSlashAwareDataRequests,"data");return x&&M.size>0&&U.searchParams.set("_routes",e.filter(Y=>M.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[U.pathname+U.search]},[m,a.unstable_trailingSlashAwareDataRequests,y,r,c,v,e,n,g]),C=q.useMemo(()=>qS(T,c),[T,c]),A=WS(T);return q.createElement(q.Fragment,null,S.map(M=>q.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),C.map(M=>q.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),A.map(({key:M,link:x})=>q.createElement("link",{key:M,nonce:i.nonce,...x,crossOrigin:x.crossOrigin??i.crossOrigin})))}function KS(...n){return e=>{n.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var XS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{XS&&(window.__reactRouterVersion="7.13.2")}catch{}function QS({basename:n,children:e,unstable_useTransitions:i,window:r}){let a=q.useRef();a.current==null&&(a.current=N0({window:r,v5Compat:!0}));let c=a.current,[g,m]=q.useState({action:c.action,location:c.location}),y=q.useCallback(f=>{i===!1?m(f):q.startTransition(()=>m(f))},[i]);return q.useLayoutEffect(()=>c.listen(y),[c,y]),q.createElement(xS,{basename:n,children:e,location:g.location,navigationType:g.action,navigator:c,unstable_useTransitions:i})}var Zp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$p=q.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:a,reloadDocument:c,replace:g,unstable_mask:m,state:y,target:f,to:v,preventScrollReset:T,viewTransition:S,unstable_defaultShouldRevalidate:C,...A},M){let{basename:x,navigator:U,unstable_useTransitions:Y}=q.useContext(Ge),P=typeof v=="string"&&Zp.test(v),J=Gp(v,x);v=J.to;let Q=cS(v,{relative:a}),V=Zn(),K=null;if(m){let Rt=uc(m,[],V.unstable_mask?V.unstable_mask.pathname:"/",!0);x!=="/"&&(Rt.pathname=Rt.pathname==="/"?x:je([x,Rt.pathname])),K=U.createHref(Rt)}let[rt,j,ut]=FS(r,A),Tt=t_(v,{replace:g,unstable_mask:m,state:y,target:f,preventScrollReset:T,relative:a,viewTransition:S,unstable_defaultShouldRevalidate:C,unstable_useTransitions:Y});function bt(Rt){e&&e(Rt),Rt.defaultPrevented||Tt(Rt)}let Nt=!(J.isExternal||c),St=q.createElement("a",{...A,...ut,href:(Nt?K:void 0)||J.absoluteURL||Q,onClick:Nt?bt:e,ref:KS(M,j),target:f,"data-discover":!P&&i==="render"?"true":void 0});return rt&&!P?q.createElement(q.Fragment,null,St,q.createElement(YS,{page:Q})):St});$p.displayName="Link";var ZS=q.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:a=!1,style:c,to:g,viewTransition:m,children:y,...f},v){let T=ys(g,{relative:f.relative}),S=Zn(),C=q.useContext(ta),{navigator:A,basename:M}=q.useContext(Ge),x=C!=null&&s_(T)&&m===!0,U=A.encodeLocation?A.encodeLocation(T).pathname:T.pathname,Y=S.pathname,P=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(Y=Y.toLowerCase(),P=P?P.toLowerCase():null,U=U.toLowerCase()),P&&M&&(P=Sn(P,M)||P);const J=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let Q=Y===U||!a&&Y.startsWith(U)&&Y.charAt(J)==="/",V=P!=null&&(P===U||!a&&P.startsWith(U)&&P.charAt(U.length)==="/"),K={isActive:Q,isPending:V,isTransitioning:x},rt=Q?e:void 0,j;typeof r=="function"?j=r(K):j=[r,Q?"active":null,V?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let ut=typeof c=="function"?c(K):c;return q.createElement($p,{...f,"aria-current":rt,className:j,ref:v,style:ut,to:g,viewTransition:m},typeof y=="function"?y(K):y)});ZS.displayName="NavLink";var $S=q.forwardRef(({discover:n="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:a,state:c,method:g=Vr,action:m,onSubmit:y,relative:f,preventScrollReset:v,viewTransition:T,unstable_defaultShouldRevalidate:S,...C},A)=>{let{unstable_useTransitions:M}=q.useContext(Ge),x=o_(),U=i_(m,{relative:f}),Y=g.toLowerCase()==="get"?"get":"post",P=typeof m=="string"&&Zp.test(m),J=Q=>{if(y&&y(Q),Q.defaultPrevented)return;Q.preventDefault();let V=Q.nativeEvent.submitter,K=(V==null?void 0:V.getAttribute("formmethod"))||g,rt=()=>x(V||Q.currentTarget,{fetcherKey:e,method:K,navigate:i,replace:a,state:c,relative:f,preventScrollReset:v,viewTransition:T,unstable_defaultShouldRevalidate:S});M&&i!==!1?q.startTransition(()=>rt()):rt()};return q.createElement("form",{ref:A,method:Y,action:U,onSubmit:r?y:J,...C,"data-discover":!P&&n==="render"?"true":void 0})});$S.displayName="Form";function jS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jp(n){let e=q.useContext(ci);return Zt(e,jS(n)),e}function t_(n,{target:e,replace:i,unstable_mask:r,state:a,preventScrollReset:c,relative:g,viewTransition:m,unstable_defaultShouldRevalidate:y,unstable_useTransitions:f}={}){let v=hS(),T=Zn(),S=ys(n,{relative:g});return q.useCallback(C=>{if(IS(C,e)){C.preventDefault();let A=i!==void 0?i:ms(T)===ms(S),M=()=>v(n,{replace:A,unstable_mask:r,state:a,preventScrollReset:c,relative:g,viewTransition:m,unstable_defaultShouldRevalidate:y});f?q.startTransition(()=>M()):M()}},[T,v,S,i,r,a,e,n,c,g,m,y,f])}var e_=0,n_=()=>`__${String(++e_)}__`;function o_(){let{router:n}=jp("useSubmit"),{basename:e}=q.useContext(Ge),i=ES(),r=n.fetch,a=n.navigate;return q.useCallback(async(c,g={})=>{let{action:m,method:y,encType:f,formData:v,body:T}=US(c,e);if(g.navigate===!1){let S=g.fetcherKey||n_();await r(S,i,g.action||m,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:v,body:T,formMethod:g.method||y,formEncType:g.encType||f,flushSync:g.flushSync})}else await a(g.action||m,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:v,body:T,formMethod:g.method||y,formEncType:g.encType||f,replace:g.replace,state:g.state,fromRouteId:i,flushSync:g.flushSync,viewTransition:g.viewTransition})},[r,a,e,i])}function i_(n,{relative:e}={}){let{basename:i}=q.useContext(Ge),r=q.useContext(En);Zt(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),c={...ys(n||".",{relative:e})},g=Zn();if(n==null){c.search=g.search;let m=new URLSearchParams(c.search),y=m.getAll("index");if(y.some(v=>v==="")){m.delete("index"),y.filter(T=>T).forEach(T=>m.append("index",T));let v=m.toString();c.search=v?`?${v}`:""}}return(!n||n===".")&&a.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:je([i,c.pathname])),ms(c)}function s_(n,{relative:e}={}){let i=q.useContext(Op);Zt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=jp("useViewTransitionState"),a=ys(n,{relative:e});if(!i.isTransitioning)return!1;let c=Sn(i.currentLocation.pathname,r)||i.currentLocation.pathname,g=Sn(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Wr(a.pathname,g)!=null||Wr(a.pathname,c)!=null}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=(...n)=>n.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=n=>{const e=a_(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=q.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:a="",children:c,iconNode:g,...m},y)=>q.createElement("svg",{ref:y,...l_,width:e,height:e,stroke:n,strokeWidth:r?Number(i)*24/Number(e):i,className:ty("lucide",a),...!c&&!u_(m)&&{"aria-hidden":"true"},...m},[...g.map(([f,v])=>q.createElement(f,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=(n,e)=>{const i=q.forwardRef(({className:r,...a},c)=>q.createElement(c_,{ref:c,iconNode:e,className:ty(`lucide-${r_(Yf(n))}`,`lucide-${n}`,r),...a}));return i.displayName=Yf(n),i};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],g_=tn("book-open",h_);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],mc=tn("chevron-right",d_);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],m_=tn("dumbbell",f_);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Lu=tn("file-text",p_);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],v_=tn("graduation-cap",y_);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],S_=tn("layout-dashboard",T_);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],E_=tn("loader-circle",__);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],A_=tn("send",C_);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ey=tn("sparkles",w_);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],b_=tn("x",x_);var wt=(n=>(n.HSK1="HSK 1",n.HSK2="HSK 2",n.HSK3="HSK 3",n.HSK4="HSK 4",n.HSK5="HSK 5",n.HSK6="HSK 6",n))(wt||{}),W=(n=>(n.GRAMMAR="Grammar",n.VOCABULARY="Vocabulary",n.EXERCISE="Exercise",n))(W||{});const R_={id:"hsk1-m1",level:wt.HSK1,title:"你好! Nǐ hǎo! (Lesson 1)",description:"Learn basic greetings, classroom expressions, Pinyin (initials, finals, tones), and basic Chinese character strokes.",lessons:[{id:"hsk1-l1-texts",title:"Texts & Pinyin",type:W.GRAMMAR,content:`
# Text 1: 你好! (Hello!)

<strong>A: 你好!</strong>
<em>Nǐ hǎo!</em>
(Chào anh!)

<strong>B: 你好!</strong>
<em>Nǐ hǎo!</em>
(Chào anh!)

---

# Text 2: 您好! (Hello - polite)

<strong>A: 您好!</strong>
<em>Nín hǎo!</em>
(Chào ông!)

<strong>B: 你们好!</strong>
<em>Nǐmen hǎo!</em>
(Chào anh chị!)

---

# Text 3: 对不起! (Sorry!)

<strong>A: 对不起!</strong>
<em>Duìbuqǐ!</em>
(Xin lỗi!)

<strong>B: 没关系!</strong>
<em>Méi guānxi!</em>
(Không sao đâu!)

---

# Pinyin: Initials and Finals (1)

<strong>声母 Thanh mẫu (1):</strong>
b, p, m, f, d, t, n, l, g, k, h, j, q, x

<strong>韵母 Vận mẫu (1):</strong>
i, u, ü, a, ia, ua, o, uo, e, ie, üe, ai, uai, ei, uei (ui), ao, iao, ou, iou (iu)

---

# Pinyin: Tones (四声)

汉语的基本声调有四个，分别是第一声(55)、第二声(35)、第三声(214)和第四声(51)。汉语的声调有区别意义的作用。
Tiếng Trung Quốc có bốn thanh cơ bản: thanh 1 (55), thanh 2 (35), thanh 3 (214) và thanh 4 (51). Thanh điệu của tiếng Trung Quốc đóng vai trò phân biệt nghĩa của từ.

* <strong>mā</strong> | 妈 | mẹ
* <strong>má</strong> | 麻 | cây gai
* <strong>mǎ</strong> | 马 | con ngựa
* <strong>mà</strong> | 骂 | mắng

<strong>朗读下列音节，注意声调的不同 (Đọc to các âm tiết sau, chú ý sự khác biệt giữa các thanh):</strong>
ā á ǎ à
ō ó ǒ ò
ē é ě è
ī í ǐ ì
ū ú ǔ ù
ǖ ǘ ǚ ǜ

---

# Pinyin: Syllables (汉语的音节)

汉语的音节一般由声母、韵母、声调三部分组成。一般来说，一个汉字对应一个音节。汉语的一个音节可以没有声母，但是一定要有韵母和声调。
Âm tiết của tiếng Trung Quốc thường được tạo thành bởi ba phần: thanh mẫu (phụ âm đầu), vận mẫu (vần) và thanh điệu. Nói chung, một chữ Trung Quốc tương ứng với một âm tiết. Một âm tiết có thể không có thanh mẫu nhưng bắt buộc phải có vận mẫu và thanh điệu.

| Thanh mẫu | Vận mẫu | Thanh điệu | Ví dụ |
| :---: | :---: | :---: | :--- |
| m | ao | 1 | <strong>māo</strong> (猫, mèo) |
| | ü | 2 | <strong>yú</strong> (鱼, cá) |
| j | ie | 3 | <strong>jiě</strong> (姐, chị) |
| | er | 4 | <strong>èr</strong> (二, hai) |

<em>注意：i和ü自成音节时，韵母前增加y，ü上的两点去掉；u自成音节时，韵母前增加w。
Chú ý: Khi âm tiết được tạo thành bởi vận mẫu i, ü thì y được thêm vào trước vận mẫu, hai dấu chấm trong ü được lược bỏ; khi âm tiết được tạo thành bởi vận mẫu u thì w được thêm vào trước vận mẫu.</em>

---

# Pinyin: 3rd Tone Sandhi (两个三声音节的连读变调)

当两个第三声音节连读时，第一个音节变为第二声，3+3变为2+3。比如“nǐ(你)”+“hǎo(好)”变为“níhǎo”。但是注音时，要标原调。
Sự biến đổi về thanh điệu khi hai âm tiết mang thanh 3 đi liền nhau: Khi hai âm tiết mang thanh 3 được đọc liền nhau, thanh điệu của âm tiết thứ nhất được chuyển thành thanh 2. Ví dụ: “nǐ”(你)+“hǎo” (好) được chuyển thành “ní hǎo”. Tuy nhiên, khi ghi dấu thanh điệu, ta phải ghi thanh ban đầu của âm tiết đó.

* nǐ (你) + hǎo (好) -> <strong>ní hǎo</strong>
* kě (可) + yǐ (以) -> <strong>ké yǐ</strong>
* fǔ (辅) + dǎo (导) -> <strong>fú dǎo</strong>

---

# Classroom Expressions (课堂用语)

* <strong>上课!</strong> (Shàng kè!) - Vào học đi!
* <strong>下课!</strong> (Xià kè!) - Đã hết giờ học rồi!
* <strong>现在休息!</strong> (Xiànzài xiūxi!) - Nghỉ giải lao nhé!
* <strong>看黑板!</strong> (Kàn hēibǎn!) - Hãy nhìn lên bảng!
* <strong>跟我读!</strong> (Gēn wǒ dú!) - Hãy đọc theo tôi!
`},{id:"hsk1-l1-vocab",title:"New Words & Pronunciation",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>你</strong> | nǐ | đt. | (số ít) anh, chị, bạn... |
| <strong>好</strong> | hǎo | tt. | khỏe, tốt |
| <strong>您</strong> | nín | đt. | (lịch sự) ông, bà, ngài... |
| <strong>你们</strong> | nǐmen | đt. | (số nhiều) các anh, các chị, các bạn... |
| <strong>对不起</strong> | duìbuqǐ | đgt. | xin lỗi |
| <strong>没关系</strong> | méi guānxi | | không sao đâu, không có vấn đề gì đâu |

---

# Pronunciation Practice (单音节词语 - Single Syllable)

* <strong>yī</strong> (clothing/jacket)
* <strong>wǔ</strong> (number 5)
* <strong>yú</strong> (fish)
* <strong>ěr</strong> (ear)
* <strong>bǐ</strong> (pen)
* <strong>māo</strong> (cat)
* <strong>dǎo</strong> (island)
* <strong>huā</strong> (flower)
* <strong>jī</strong> (chicken)
* <strong>qī</strong> (number 7)
* <strong>xié</strong> (shoes)
* <strong>xuě</strong> (snow)

---

# Pronunciation Practice (双音节词语 - Double Syllable)

* <strong>kāfēi</strong> (coffee)
* <strong>kělè</strong> (cola)
* <strong>kǎoyā</strong> (roast duck)
* <strong>huǒguō</strong> (hotpot)
* <strong>dìtú</strong> (map)
* <strong>fēijī</strong> (airplane)
* <strong>máobǐ</strong> (calligraphy brush)
* <strong>ěrjī</strong> (headphones)

---

# Pronunciation Practice (第三声音节的读音 - Tone 3 Sandhi)

朗读下列词语，注意第三声音节的读音 (Đọc to các từ sau, chú ý cách đọc các âm tiết mang thanh 3):
* <strong>nǐ hǎo</strong>
* <strong>kěyǐ</strong>
* <strong>fǔdǎo</strong>
* <strong>xiǎojiě</strong>
* <strong>kǒuyǔ</strong>
* <strong>yǔfǎ</strong>
* <strong>liǎojiě</strong>
* <strong>yǒuhǎo</strong>
* <strong>yǔsǎn</strong>
* <strong>shǒubiǎo</strong>
`},{id:"hsk1-l1-exercise",title:"Characters",type:W.EXERCISE,content:`
# Chinese Characters (汉字)

## 1. Strokes of Chinese Characters (汉字的笔画 - 1)

| Tên nét | Pinyin | Hướng viết | Chữ Hán (Ví dụ) |
| :--- | :--- | :--- | :--- |
| <strong>横 (ngang)</strong> | héng | Trái sang phải | <strong>yī</strong> (一 - một), <strong>èr</strong> (二 - hai) |
| <strong>竖 (sổ)</strong> | shù | Trên xuống dưới | <strong>shí</strong> (十 - mười), <strong>gōng</strong> (工 - công việc) |
| <strong>撇 (phẩy)</strong> | piě | Trên xuống trái | <strong>rén</strong> (人 - người), <strong>bā</strong> (八 - tám) |
| <strong>点 (chấm)</strong> | diǎn | Trên xuống phải | <strong>bù</strong> (不 - không), <strong>liù</strong> (六 - sáu) |
| <strong>捺 (mác)</strong> | nà | Trên xuống phải | <strong>dà</strong> (大 - lớn), <strong>tiān</strong> (天 - bầu trời) |

---

## 2. Single-Component Characters (认识独体字)

1.  <strong>一 (yī)</strong>
    “一”，是汉字的基本笔画，也可单独成为汉字表示数量“1”。
    (Nét ngang là nét cơ bản của chữ Hán. Nét ngang cũng chính là chữ "nhất", tức là số 1.)
2.  <strong>二 (èr)</strong>
    表示数量“2”。 (Số 2)
3.  <strong>三 (sān)</strong>
    表示数量“3”。 (Số 3)
4.  <strong>十 (shí)</strong>
    表示数量“10”。 (Số 10)
5.  <strong>八 (bā)</strong>
    表示数量“8”。 (Số 8)
6.  <strong>六 (liù)</strong>
    表示数量“6”。 (Số 6)
`}]},M_={id:"hsk1-l2-ni-jiao-shenme-mingzi",level:wt.HSK1,title:"Nǐ jiào shénme míngzi? 你叫什么名字? (Lesson 2)",description:"Learn how to ask for someone's name, identify professions (teacher/student), and state nationalities.",lessons:[{id:"hsk1-l2-texts",title:"Texts, Grammar & Phonetics",type:W.GRAMMAR,content:`
# Text 1: 在学校 Ở trường (At School)

**A: 你叫什么名字?**
*Nǐ jiào shénme míngzi?*
Cô tên gì?

**B: 我叫李月。**
*Wǒ jiào Lǐ Yuè.*
Tôi tên là Lý Nguyệt.

---

# Text 2: 在教室 Trong lớp học (In the Classroom)

**A: 你是老师吗?**
*Nǐ shì lǎoshī ma?*
Cô là cô giáo phải không?

**B: 我不是老师, 我是学生。**
*Wǒ bú shì lǎoshī, wǒ shì xuésheng.*
Không phải, tôi là học sinh.

---

# Text 3: 在学校 Ở trường (At School)

**A: 你是中国人吗?**
*Nǐ shì Zhōngguó rén ma?*
Bạn là người Trung Quốc phải không?

**B: 我不是中国人,我是美国人。**
*Wǒ bú shì Zhōngguó rén, wǒ shì Měiguó rén.*
Không phải, mình là người Mỹ.

---

# Grammar Notes / 注释

## 1. 疑问代词“什么” (Đại từ nghi vấn "什么")
疑问代词“什么”表示疑问,用在疑问句中可直接做宾语,或者与后接名词性成分一起做宾语。
Đại từ nghi vấn "什么" được dùng trong câu nghi vấn, có thể đứng một mình làm tân ngữ hoặc kết hợp với thành phần theo sau làm tân ngữ (thành phần theo sau phải có tính chất như danh từ). Ví dụ:

(1) 你叫什么名字? 
(2) 这 (zhè, đây) 是什么? 
(3) 这 (zhè, đây) 是什么书 (shū, sách)? 

## 2. “是”字句 (Câu có từ "是")
“是”字句是由“是”构成的判断句,用于表达人或事物等于什么或者属于什么。其否定形式是在“是”前加上否定副词“不”。
Câu có từ "是" là câu phán đoán, được dùng để chỉ người hay sự vật ngang bằng với/ thuộc về cái gì. Để có dạng phủ định, ta thêm phó từ phủ định "不" vào trước "是". Ví dụ:

| 主语 Chủ ngữ | (不)是 | 谓语 Vị ngữ (Danh từ/Cụm danh từ) | 
| :--- | :--- | :--- |
| 李月 | 是 | 老师。 | 
| 我 | 是 | 美国人。 | 
| 我 | 不是 | 老师。 | 

## 3. 用“吗”的疑问句 (Câu hỏi có từ "吗")
疑问助词“吗”表示疑问语气,用在陈述句句尾构成疑问句。
"吗" là trợ từ nghi vấn, được thêm vào cuối câu trần thuật để tạo câu hỏi. Ví dụ:

| 主语 Chủ ngữ | 动词 Động từ | 谓语 Vị ngữ (Danh từ/Cụm danh từ) | 吗? | 
| :--- | :--- | :--- | :--- |
| 你 | 是 | 美国人 | 吗? | 
| 你 | 是 | 中国人 | 吗? | 
| 你 | 是 | 老师 | 吗? | 

---

# Phonetics / 拼音

## 1. 发音辨析:声母j、q、x和z、c、s (Sự khác biệt trong cách phát âm: thanh mẫu j, q, x và z, c, s)

**j、q、x** 是舌面音,发j、q时舌面要与硬腭接触,j没有强烈的气流呼出,而q有强烈的气流呼出。发x时,舌面接近硬腭,但不要接触,始终保持一条缝隙。
j, q và x là âm mặt lưỡi. Khi phát âm j và q, mặt lưỡi phải tiếp xúc với ngạc (vòm miệng) cứng nhưng với j thì không có luồng hơi mạnh thoát ra còn với q thì có luồng hơi mạnh thoát ra. Khi phát âm x, mặt lưỡi nằm gần nhưng không tiếp xúc với ngạc cứng, nghĩa là giữa mặt lưỡi và ngạc cứng có khe hở.

| | | | | 
| :--- | :--- | :--- | :--- |
| xiūxi | jījí | jīqì | xiǎoqū | 
| xīngqī | xiāngjiāo | xìngqù | jìxù | 

**z、c、s** 是舌尖前音。发z、c时,舌尖前部与上齿背接触,然后马上打开形成缝隙,z没有强烈的气流通过,而c有明显的气流通过。发s时,舌尖前与上齿背始终不接触,保留缝隙使气流流出。
z, c và s là âm đầu lưỡi. Khi phát âm z và c, phần đầu lưỡi tiếp xúc với mặt trong của răng cửa hàm trên rồi lập tức mở ra tạo thành khe hở, nhưng với z thì không có luồng hơi mạnh thoát ra còn với c thì có luồng hơi rõ ràng thoát ra. Khi phát âm s, phần đầu lưỡi hoàn toàn không tiếp xúc với mặt trong của răng cửa hàm trên, giữa chúng có khe hở để luồng hơi thoát ra.

| | | | | 
| :--- | :--- | :--- | :--- |
| xǐ zǎo | dǎsǎo | sān cì | zìjǐ | 
| zuótiān | zǎoshang | cāochǎng | Hànzì | 

## 2. 发音辨析:韵母i、u、ü (Sự khác biệt trong cách phát âm: vận mẫu i, u, ü)
i和ü是发音位置相同、嘴唇形状不同的两个韵母,发i时嘴唇的形状是平的,而发ü时一定要圆唇。练习时可以先发i好,保持发音部位不动,然后把嘴唇圆起来就可以发出ü。
Khi phát âm i và ü, môi có hình dạng khác nhau dù hai vận mẫu này có vị trí phát âm giống nhau. i được phát âm với môi dẹt (không tròn), còn với ü thì bạn phải làm tròn môi. Khi luyện phát âm, bạn có thể phát âm i trước và giữ nguyên vị trí phát âm, sau đó làm tròn môi để phát âm ü.

u和ü都是圆唇音,但是发ü时的舌位在前,舌尖抵住下齿背,而u的舌位在后,舌尖不能和下齿背接触,舌头要尽力往后收才能发对。
u và ü đều là âm tròn môi, nhưng khi phát âm ü, lưỡi được đặt ở phía trước, đầu lưỡi áp chặt vào mặt trong của răng dưới; còn khi phát âm u, lưỡi được đặt ở phía sau, đầu lưỡi không tiếp xúc với mặt trong của răng dưới (để phát âm đúng, bạn phải cố thụt lưỡi về phía sau).

## 3. “不”的变调 (Sự biến đổi thanh điệu của "不")

**(1) “不”在第一、二、三声音节前不变调** (不 không thay đổi thanh điệu khi đứng trước âm tiết mang thanh 1, 2 hay 3)
| | | | | | | 
| :--- | :--- | :--- | :--- | :--- | :--- |
| bù chī | bù xíng | bù hǎo | bù hē | bù néng | bù xiǎng | 
| 不吃 | 不行 | 不好 | 不喝 | 不能 | 不想 | 
| không ăn | không được | không tốt | không uống | không thể | không muốn | 

**(2) “不”在第四声音节前变成第二声** (Khi đứng trước âm tiết mang thanh 4, 不 chuyển sang mang thanh 2)
| bú huì | bú shì | bú kàn | 
| :--- | :--- | :--- |
| 不会 | 不是 | 不看 | 
| không thể | không phải | không xem | 

## 4. 拼音规则(2):单韵母ü和ü开头的韵母跟j、q、x相拼的规则 (Các quy tắc ghép âm)
ü和ü开头的韵母跟声母j、q、x相拼的时候,ü上两点要省略,如写成ju、qu、xu;但是跟声母l、n相拼的时候,仍然要写成lü、nü。
Khi ü và vận mẫu bắt đầu bằng ü được ghép với thanh mẫu j, q, x thì hai dấu chấm phía trên của ü được lược bỏ (ju, qu, xu), khi được ghép với thanh mẫu l, n thì hai dấu chấm đó được giữ nguyên (lü, nü).

| ü | üe | üan | ün | 
| :--- | :--- | :--- | :--- |
| ju | jue | juan | jun | 
| qu | que | quan | qun | 
| xu | xue | xuan | xun | 

---

# Characters / 汉字

## 1. 汉字的笔画(3): ㇆, ㇃ (Các nét của chữ Hán)

| 笔画名称 Tên nét | 例字 Chữ Hán | 
| :--- | :--- |
| **横折钩** héngzhégōu (ngang gập móc) | 门 mén (cửa), 月 yuè (mặt trăng) | 
| **卧钩** wògōu (nằm móc) | 心 xīn (trái tim), 您 nín (lịch sự: ông, bà) | 

## 2. 认识独体字 (Làm quen với chữ đơn / chữ độc thể)
1. **月 (yuè)**: 表示月亮。 (chỉ mặt trăng)
2. **心 (xīn)**: 表示心脏。 (chỉ trái tim)
3. **中 (zhōng)**: 本义是飘扬的旗子,现在表示方位,意思是“中间”。 (có nghĩa gốc là lá cờ tung bay, ngày nay được dùng để chỉ vị trí, có nghĩa là ở giữa)
4. **人 (rén)**: 表示直立的人。 (chỉ người đang đứng thẳng)

## 3. 汉字的笔顺(1):先横后竖,先撇后捺 (Thứ tự nét viết trong chữ Hán 1)
* **先横后竖 (ngang trước sổ sau)**: 十 shí (mười), 工 gōng (công việc)
* **先撇后捺 (phẩy trước mác sau)**: 八 bā (tám), 人 rén (người)
`},{id:"hsk1-l2-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| **叫** | jiào | đgt. | tên (là) / to be called |
| **什么** | shénme | dt. | gì, cái gì / what |
| **名字** | míngzi | dt. | tên / name |
| **我** | wǒ | dt. | tôi, ta, mình... / I, me |
| **是** | shì | đgt. | là / to be |
| **老师** | lǎoshī | đt. | thầy cô giáo / teacher |
| **吗** | ma | trợ. | được dùng ở cuối câu hỏi / question particle |
| **学生** | xuésheng | dt. | học sinh / student |
| **人** | rén | dt. | người / person |

# Proper Nouns / Danh từ riêng

| Hanzi | Pinyin | Meaning |
| :--- | :--- | :--- |
| **李月** | Lǐ Yuè | Lý Nguyệt (tên người) |
| **中国** | Zhōngguó | Trung Quốc (China) |
| **美国** | Měiguó | nước Mỹ (USA) |
`},{id:"hsk1-l2-exercise",title:"Exercises & Application",type:W.EXERCISE,content:`
# Warm-up / 热身

**给下面的词语选择对应的图片 (Chọn hình tương ứng với các từ ngữ bên dưới)**

* **中国** (Zhōngguó)
* **美国** (Měiguó)
* **中国人** (Zhōngguó rén)
* **美国人** (Měiguó rén)
* **老师** (lǎoshī)
* **学生** (xuésheng)

*(Match with Images A-F: A teacher writing on a blackboard, a group of students standing together, a female professional, basketball player Michael Jordan, a diverse group of people, a happy family sitting outdoors)*

---

# Exercises / 练习

## 1. 分角色朗读课文
Đóng vai các nhân vật trong bài học và đọc to các câu đối thoại.

## 2. 根据实际情况回答问题 (Trả lời câu hỏi)
1. **你叫什么名字?** (Nǐ jiào shénme míngzi?)
2. **你是中国人吗?** (Nǐ shì Zhōngguó rén ma?)
3. **你是美国人吗?** (Nǐ shì Měiguó rén ma?)
4. **你是老师吗?** (Nǐ shì lǎoshī ma?)
5. **你是学生吗?** (Nǐ shì xuésheng ma?)

## 3. 用本课新学的语言点和词语描述图片 (Sử dụng từ ngữ trong bài để mô tả hình ảnh bên dưới)

1. *(Image: Michael Jordan playing basketball)*
   他叫乔丹(Michael Jordan), 他是 **______** 人。 (Tā jiào Qiáodān, tā shì ______ rén.)

2. *(Image: Yao Ming playing basketball)*
   他叫姚明(Diêu Minh), 他是 **______** 人。 (Tā jiào Yáo Míng, tā shì ______ rén.)

3. *(Image: A young boy studying)*
   我不是 **______**, 我是学生, 我是 **______** 人。 (Wǒ bú shì ______, wǒ shì xuésheng, wǒ shì ______ rén.)

4. *(Image: A teacher pointing at a blackboard)*
   我是 **______**, 我不是学生, 我是 **______** 人。 (Wǒ shì ______, wǒ bú shì xuésheng, wǒ shì ______ rén.)

---

# Application / 运用

## 1. 双人活动 (Hoạt động theo cặp)
两人一组,进行自我介绍。 (Ghép thành từng cặp, tự giới thiệu về bản thân.)

例如:
* **A:** 我叫李月,我是中国人,我是老师。 (Wǒ jiào Lǐ Yuè, wǒ shì Zhōngguó rén, wǒ shì lǎoshī.)
* **B:** 我叫大卫(David),我是美国人,我是学生。 (Wǒ jiào Dàwèi, wǒ shì Měiguó rén, wǒ shì xuésheng.)

## 2. 小组活动 (Hoạt động nhóm)
3~4人一组,用汉语互相询问名字和国籍,每组请一位同学报告情况。 (Lập nhóm từ 3 đến 4 người, hỏi tên và quốc tịch của nhau bằng tiếng Trung Quốc, sau đó cử một đại diện trình bày các thông vị này.)

| 姓名 Họ tên | 国籍 Quốc tịch | 
| :---: | :--- |
| 李月 Lǐ Yuè | 中国 Zhōngguó | 
| ... | ... |
`}]},N_={id:"hsk2-m1",level:wt.HSK2,title:"Travel & Plans (Lesson 1)",description:'Discuss travel plans, weather, and preferences using "yao" and "zui".',lessons:[{id:"hsk2-l1-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在学校 (At School)

<strong>A: 我要去北京旅游，你觉得什么时候去最好？</strong>
<em>Wǒ yào qù Běijīng lǚyóu, nǐ juéde shénme shíhou qù zuì hǎo?</em>
(I'm planning to travel to Beijing. When do you think is the best time to go?)

<strong>B: 九月去北京旅游最好。</strong>
<em>Jiǔ yuè qù Běijīng lǚyóu zuì hǎo.</em>
(September is the best time to visit Beijing.)

<strong>A: 为什么？</strong>
<em>Wèi shénme?</em>
(Why?)

<strong>B: 九月的北京天气不冷也不热。</strong>
<em>Jiǔ yuè de Běijīng tiānqì bù lěng yě bú rè.</em>
(Because it's neither cold nor hot in Beijing in September.)

---

# Text 2: 看照片 (Looking at Photos)

<strong>A: 你喜欢什么运动？</strong>
<em>Nǐ xǐhuan shénme yùndòng?</em>
(What sport do you like?)

<strong>B: 我最喜欢踢足球。</strong>
<em>Wǒ zuì xǐhuan tī zúqiú.</em>
(I like playing soccer the most.)

<strong>A: 下午我们一起去踢足球吧。</strong>
<em>Xiàwǔ wǒmen yìqǐ qù tī zúqiú ba.</em>
(Let's go play soccer together this afternoon.)

<strong>B: 好啊！</strong>
<em>Hǎo a!</em>
(Great!)

---

# Text 3: 在家里 (At Home)

<strong>A: 我们要不要买几个新的椅子？</strong>
<em>Wǒmen yào bu yào mǎi jǐ ge xīn de yǐzi?</em>
(Should we buy a few new chairs?)

<strong>B: 好啊。什么时候去买？</strong>
<em>Hǎo a. Shénme shíhou qù mǎi?</em>
(Okay. When shall we go buy them?)

<strong>A: 明天下午怎么样？</strong>
<em>Míngtiān xiàwǔ zěnmeyàng?</em>
(How about tomorrow afternoon?)
<strong>你明天几点能回来？</strong>
<em>Nǐ míngtiān jǐ diǎn néng huílai?</em>
(What time can you come back tomorrow?)

<strong>B: 三点多。</strong>
<em>Sān diǎn duō.</em>
(A little after three o'clock.)

---

# Text 4: 在家里 (At Home)

<strong>A: 桌子下面有个猫。</strong>
<em>Zhuōzi xiàmiàn yǒu ge māo.</em>
(There is a cat under the table.)

<strong>B: 那是我的猫，它叫花花。</strong>
<em>Nà shì wǒ de māo, tā jiào Huāhua.</em>
(That is my cat, its name is Huahua.)

<strong>A: 它很漂亮。</strong>
<em>Tā hěn piàoliang.</em>
(It is very beautiful.)

<strong>B: 是啊，我觉得它的眼睛最漂亮。</strong>
<em>Shì a, wǒ juéde tā de yǎnjing zuì piàoliang.</em>
(Yes, I think its eyes are the most beautiful.)

<strong>A: 它多大了？</strong>
<em>Tā duō dà le?</em>
(How old is it?)

<strong>B: 六个多月。</strong>
<em>Liù ge duō yuè.</em>
(More than six months.)

---

# Grammar Notes

## 1. The Auxiliary Verb 要 (yào)
Used before a verb to indicate a desire to do something.

| Subject | Auxiliary Verb (要) | Predicate |
| :--- | :---: | :--- |
| 王方 (Wáng Fāng) | <strong>要</strong> | 学习英语。 (study English) |
| 我 (Wǒ) | <strong>要</strong> | 吃米饭。 (eat rice) |
| 我们 (Wǒmen) | <strong>要不要</strong> | 买几个新的椅子？ (buy a few new chairs) |

<strong>Negation:</strong> The negative form is usually <strong>不想 (bù xiǎng)</strong>.

1. 小王要去，我不<strong>想</strong>去。 (Xiao Wang wants to go, I don't want to go.)
2. A: 你要吃米饭吗？ (Do you want to eat rice?)
   B: 我不<strong>想</strong>吃米饭。 (I don't want to eat rice.)
3. A: 我要去商店买椅子，你去吗？ (I'm going to the store to buy chairs, are you going?)
   B: 我不去，我不<strong>想</strong>买椅子。 (I'm not going, I don't want to buy chairs.)

## 2. The Adverb 最 (zuì)
Indicates the superlative degree (first among things of the same kind).

1. 大卫的汉语<strong>最</strong>好。 (David's Chinese is the best.)
2. 我<strong>最</strong>喜欢吃米饭。 (I like eating rice the most.)
3. 它的眼睛<strong>最</strong>漂亮。 (Its eyes are the most beautiful.)

## 3. Approximate Numbers: 几 (jǐ) and 多 (duō)

### Usage of 几 (jǐ)
"几" indicates a number less than 10 and is followed by a measure word.

| 几 | Measure Word | Noun |
| :---: | :---: | :---: |
| <strong>几</strong> | <strong>个</strong> | <strong>人</strong> |
| <strong>几</strong> | <strong>本</strong> | <strong>书</strong> |
| <strong>几</strong> | <strong>个</strong> | <strong>新的椅子</strong> |

1. 车上有几个人。 (There are a few people on the bus.)
2. 我想买几本书。 (I want to buy a few books.)
3. 我们要不要买几个新的椅子？ (Should we buy a few new chairs?)

*Note: "几" can also be used after "十" (e.g., 十几个人 - a dozen or so people) or before "十" (e.g., 几十个人 - dozens of people).*

### Usage of 多 (duō)
"多" is used with number-measure phrases.

<strong>Case A: Number &lt; 10</strong>
"多" is placed <strong>after</strong> the measure word.

| Number | Measure Word | 多 | Noun |
| :---: | :---: | :---: | :---: |
| <strong>三</strong> | <strong>个</strong> | <strong>多</strong> | <strong>星期</strong> |
| <strong>五</strong> | <strong>年</strong> | <strong>多</strong> | |
| <strong>六</strong> | <strong>个</strong> | <strong>多</strong> | <strong>月</strong> |

<strong>Case B: Integer &gt; 10</strong>
"多" is placed <strong>before</strong> the measure word. In this case, "多" and "几" are interchangeable.

| Number | 多 | Measure Word | Noun |
| :---: | :---: | :---: | :---: |
| <strong>十</strong> | <strong>多</strong> | <strong>个</strong> | <strong>月</strong> |
| <strong>二十</strong> | <strong>多</strong> | <strong>块</strong> | <strong>钱</strong> |
| <strong>八十</strong> | <strong>多</strong> | <strong>个</strong> | <strong>人</strong> |
`},{id:"hsk2-l1-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>旅游</strong> | lǚyóu | v. | to travel |
| <strong>觉得</strong> | juéde | v. | to think, to feel |
| <strong>最</strong> | zuì | adv. | most, to the greatest extent |
| <strong>为什么</strong> | wèi shénme | | why |
| <strong>也</strong> | yě | adv. | also, too |
| <strong>运动</strong> | yùndòng | n./v. | sport; to take physical exercise |
| <strong>踢足球</strong> | tī zúqiú | | to play soccer |
| <strong>一起</strong> | yìqǐ | adv. | together |
| <strong>要</strong> | yào | aux. | to want to, would like to |
| <strong>新</strong> | xīn | adj. | new |
| <strong>它</strong> | tā | pron. | it |
| <strong>眼睛</strong> | yǎnjing | n. | eye |
| <strong>花花</strong> | Huāhua | PN | Huahua (name of a cat) |
`},{id:"hsk2-l1-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>旅游</strong> (lǚyóu) - <em>Match with Image D (Tourists)</em>
2.  <strong>运动</strong> (yùndòng) - <em>Match with Image E (Exercising)</em>
3.  <strong>眼睛</strong> (yǎnjing) - <em>Match with Image C (Eye)</em>
4.  <strong>足球</strong> (zúqiú) - <em>Match with Image B (Soccer ball)</em>
5.  <strong>椅子</strong> (yǐzi) - <em>Match with Image F (Chair)</em>
6.  <strong>猫</strong> (māo) - <em>Match with Image A (Cat)</em>

<strong>Look at the pictures and talk about the best time to visit Beijing</strong>
*   March (三月) - <em>[Spring scene]</em>
*   June (六月) - <em>[Summer scene]</em>
*   September (九月) - <em>[Autumn scene]</em>
*   December (十二月) - <em>[Winter scene]</em>

---

# Comprehension Questions

<strong>Answer the questions based on the texts:</strong>

1.  <strong>什么时候去北京旅游最好？为什么？</strong>
    <em>Shénme shíhou qù Běijīng lǚyóu zuì hǎo? Wèi shénme?</em>
2.  <strong>他们下午要做什么？</strong>
    <em>Tāmen xiàwǔ yào zuò shénme?</em>
3.  <strong>他们想什么时候去买椅子？</strong>
    <em>Tāmen xiǎng shénme shíhou qù mǎi yǐzi?</em>
4.  <strong>花花在哪儿？</strong>
    <em>Huāhua zài nǎr?</em>
5.  <strong>花花多大了？</strong>
    <em>Huāhua duō dà le?</em>

---

# Application / Activity

<strong>1. Pair Work</strong>
Ask your partner about their likes and habits.
*   Example:
    *   A: 你最喜欢吃什么？最不喜欢吃什么？ (What do you like to eat most? What do you dislike most?)
    *   B: 我最... (I most...)
    *   A: 你最喜欢什么运动？ (What sport do you like most?)

<strong>2. Group Work</strong>
Interview 3-4 friends about where they want/don't want to travel and why.

| Name | Most Wanted/Unwanted Place | Reason |
| :--- | :--- | :--- |
| 小王 | 最想去北京 (Most want to go to Beijing) | 他想学汉语，想吃中国菜。 (He wants to learn Chinese and eat Chinese food.) |

---

# Phonetics: Stress in Disyllabic Words

<strong>(1) Medium-Heavy Structure</strong>
The second syllable is stressed and longer. Most disyllabic words follow this.
*   <strong>冰箱</strong> (bīngxiāng)
*   <strong>帮忙</strong> (bāngmáng)
*   <strong>旅游</strong> (lǚyóu)
*   <strong>开始</strong> (kāishǐ)

<strong>(2) Heavy-Light Structure</strong>
The first syllable is stressed and long; the second is light and short.
*   <strong>东西</strong> (dōngxi)
*   <strong>窗户</strong> (chuānghu)
*   <strong>时候</strong> (shíhou)
*   <strong>故事</strong> (gùshi)

---

# Characters

<strong>1. Strokes</strong>
*   <strong>横折提 (héngzhétí):</strong> e.g., 话 (huà), 说 (shuō)
*   <strong>横折折折钩 (héngzhézhézhégōu):</strong> e.g., 奶 (nǎi), 场 (chǎng)

<strong>2. Single Component Characters</strong>
*   <strong>为 (wéi):</strong> Originally meant "to do" (like a hand leading an elephant). Now usually "for/to".
*   <strong>也 (yě):</strong> Originally looked like a snake. Now an adverb "also".

<strong>3. Radicals</strong>
*   <strong>王</strong> (Jade radical): Related to jade. e.g., 现 (xiàn), 球 (qiú).
*   <strong>⻊</strong> (Foot radical): Related to feet. e.g., 跑 (pǎo), 踢 (tī).
`}]},I_={id:"hsk2-m2",level:wt.HSK2,title:"Daily Routine (Lesson 2)",description:"Talk about daily habits, getting up early, and health.",lessons:[{id:"hsk2-l2-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在运动场 (On the Playground)

<strong>A: 你很少生病，是不是喜欢运动？</strong>
<em>Nǐ hěn shǎo shēng bìng, shì bu shì xǐhuan yùndòng?</em>
(You rarely get sick, do you like sports?)

<strong>B: 是啊，我每天早上都要出去跑步。</strong>
<em>Shì a, wǒ měi tiān zǎoshang dōu yào chūqu pǎo bù.</em>
(Yes, I go out for a run every morning.)

<strong>A: 你每天几点起床？</strong>
<em>Nǐ měi tiān jǐ diǎn qǐ chuáng?</em>
(What time do you get up every day?)

<strong>B: 我每天六点起床。</strong>
<em>Wǒ měi tiān liù diǎn qǐ chuáng.</em>
(I get up at six every day.)

---

# Text 2: 在医院 (In the Hospital)

<strong>A: 吃药了吗？现在身体怎么样？</strong>
<em>Chī yào le ma? Xiànzài shēntǐ zěnmeyàng?</em>
(Did you take your medicine? How is your health now?)

<strong>B: 吃了。现在好多了。</strong>
<em>Chī le. Xiànzài hǎo duō le.</em>
(I took it. I feel much better now.)

<strong>A: 什么时候能出院？</strong>
<em>Shénme shíhou néng chū yuàn?</em>
(When can you leave the hospital?)

<strong>B: 医生说下个星期。</strong>
<em>Yīshēng shuō xià ge xīngqī.</em>
(The doctor said next week.)

---

# Text 3: 在操场 (On the Sports Field)

<strong>A: 大卫今年多大？</strong>
<em>Dàwèi jīnnián duō dà?</em>
(How old is David this year?)

<strong>B: 二十多岁。</strong>
<em>Èrshí duō suì.</em>
(Twenty-something.)

<strong>A: 他多高？</strong>
<em>Tā duō gāo?</em>
(How tall is he?)

<strong>B: 一米八几。</strong>
<em>Yī mǐ bā jǐ.</em>
(More than one meter eighty.)

<strong>A: 你怎么知道这么多啊？</strong>
<em>Nǐ zěnme zhīdào zhème duō a?</em>
(How do you know so much?)

<strong>B: 他是我同学。</strong>
<em>Tā shì wǒ tóngxué.</em>
(He is my classmate.)

---

# Text 4: 在房间 (In the Room)

<strong>A: 张老师星期六也不休息啊？</strong>
<em>Zhāng lǎoshī xīngqī liù yě bù xiūxi a?</em>
(Teacher Zhang doesn't rest on Saturdays either?)

<strong>B: 是啊，他这几天很忙，没有时间休息。</strong>
<em>Shì a, tā zhè jǐ tiān hěn máng, méiyǒu shíjiān xiūxi.</em>
(Yes, he is very busy these days, he has no time to rest.)

<strong>A: 那会很累吧？</strong>
<em>Nà huì hěn lèi ba?</em>
(That must be very tiring, right?)

<strong>B: 他每天回来都很累。</strong>
<em>Tā měi tiān huílai dōu hěn lèi.</em>
(He is very tired every day when he comes back.)

---

# Grammar Notes

## 1. The Question Structure "是不是"
Used to confirm a guess.
> Pattern: Statement + <strong>是不是</strong> + ...?

*   你很少生病，<strong>是不是</strong>喜欢运动？ (You rarely get sick, do you like sports?)
*   <strong>是不是</strong>明天爸爸休息？ (Is dad off tomorrow?)
*   我们星期一去北京，<strong>是不是</strong>？ (We are going to Beijing on Monday, right?)

## 2. The Pronoun "每" (Every)
Indicates each one of a group.
> Pattern: <strong>每</strong> + (Number) + Measure Word + Noun

*   山姆<strong>每</strong>年都去中国旅游。 (Sam travels to China every year.)
*   你<strong>每</strong>个星期六都工作吗？ (Do you work every Saturday?)
*   我<strong>每</strong>天六点起床。 (I get up at 6 o'clock every day.)

## 3. The Interrogative Pronoun "多" (How...)
Used before an adjective to ask about degree.

| Subject | 多 | Adjective |
| :--- | :---: | :--- |
| <strong>你</strong> | <strong>多</strong> | <strong>大？</strong> (How old are you?) |
| <strong>他</strong> | <strong>多</strong> | <strong>高？</strong> (How tall is he?) |

*   A: 你多大？ (How old are you?)
    B: 我16岁。 (I am 16.)
*   A: 他多高？ (How tall is he?)
    B: 一米八几。 (One meter eighty-something.)
`},{id:"hsk2-l2-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>生病</strong> | shēng bìng | v. | to get sick |
| <strong>每</strong> | měi | pron. | every, each |
| <strong>早上</strong> | zǎoshang | n. | morning |
| <strong>跑步</strong> | pǎo bù | v. | to run, to jog |
| <strong>起床</strong> | qǐ chuáng | v. | to get up |
| <strong>药</strong> | yào | n. | medicine |
| <strong>身体</strong> | shēntǐ | n. | body, health |
| <strong>出院</strong> | chū yuàn | v. | to leave hospital |
| <strong>出</strong> | chū | v. | to go out, exit |
| <strong>高</strong> | gāo | adj. | tall, high |
| <strong>米</strong> | mǐ | m. | meter |
| <strong>知道</strong> | zhīdào | v. | to know |
| <strong>休息</strong> | xiūxi | v. | to rest |
| <strong>忙</strong> | máng | adj. | busy |
| <strong>时间</strong> | shíjiān | n. | time |
`},{id:"hsk2-l2-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with their meanings</strong>

1.  <strong>起床</strong> (qǐ chuáng) - <em>To get up</em>
2.  <strong>跑步</strong> (pǎo bù) - <em>To run</em>
3.  <strong>吃药</strong> (chī yào) - <em>To take medicine</em>
4.  <strong>生病</strong> (shēng bìng) - <em>To get sick</em>
5.  <strong>休息</strong> (xiūxi) - <em>To rest</em>
6.  <strong>出院</strong> (chū yuàn) - <em>To be discharged from hospital</em>

---

# Comprehension Questions

1.  <strong>他为什么很少生病？</strong>
    <em>Tā wèi shénme hěn shǎo shēng bìng?</em>
    (Why does he rarely get sick?)
2.  <strong>他每天几点起床？</strong>
    <em>Tā měi tiān jǐ diǎn qǐ chuáng?</em>
    (What time does he get up every day?)
3.  <strong>她现在身体怎么样？</strong>
    <em>Tā xiànzài shēntǐ zěnmeyàng?</em>
    (How is her health now?)
4.  <strong>大卫今年多高？多大？</strong>
    <em>Dàwèi jīnnián duō gāo? Duō dà?</em>
    (How tall and how old is David this year?)
5.  <strong>张老师星期六休息吗？</strong>
    <em>Zhāng lǎoshī xīngqī liù xiūxi ma?</em>
    (Does Teacher Zhang rest on Saturday?)

---

# Phonetics: Stress in Trisyllabic Words

<strong>(1) Medium-Light-Heavy Structure</strong>
*   <strong>收音机</strong> (shōuyīnjī) - Radio
*   <strong>新加坡</strong> (Xīnjiāpō) - Singapore

<strong>(2) Medium-Heavy-Light Structure</strong>
*   <strong>胡萝卜</strong> (húluóbo) - Carrot
*   <strong>没关系</strong> (méiguānxi) - It doesn't matter

<strong>(3) Heavy-Light-Light Structure</strong>
*   <strong>什么的</strong> (shénmede) - etc.
*   <strong>怪不得</strong> (guàibude) - no wonder

---

# Characters

<strong>1. Strokes</strong>
*   <strong>横撇弯钩 (héng piě wān gōu):</strong> e.g., <strong>队</strong> (duì)
*   <strong>横折折撇 (héng zhé zhé piě):</strong> e.g., <strong>及</strong> (jí)

<strong>2. Single Component Characters</strong>
*   <strong>生 (shēng):</strong> birth, to grow.
*   <strong>高 (gāo):</strong> tall, high.

<strong>3. Radicals</strong>
*   <strong>⺮</strong> (Bamboo): <strong>篮</strong> (lán - basket), <strong>笔</strong> (bǐ - pen).
*   <strong>欠</strong> (Yawn/Lack): <strong>歌</strong> (gē - song), <strong>吹</strong> (chuī - blow).
`}]},D_={id:"hsk2-m3",level:wt.HSK2,title:"Colors & Possessions (Lesson 3)",description:'Describing objects by color and position. Using "de" for possession.',lessons:[{id:"hsk2-l3-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在房间 (In the room)

<strong>A: 这块手表是你的吗？</strong>
<em>Zhè kuài shǒubiǎo shì nǐ de ma?</em>
(Is this watch yours?)

<strong>B: 不是我的。是我爸爸的。</strong>
<em>Bú shì wǒ de. Shì wǒ bàba de.</em>
(No, it's not mine. It's my dad's.)

<strong>A: 多少钱买的？</strong>
<em>Duōshao qián mǎi de?</em>
(How much was it?)

<strong>B: 三千多块。</strong>
<em>Sānqiān duō kuài.</em>
(More than 3000 yuan.)

---

# Text 2: 在家里 (At home)

<strong>A: 这是今天早上的报纸吗？</strong>
<em>Zhè shì jīntiān zǎoshang de bàozhǐ ma?</em>
(Is this this morning's newspaper?)

<strong>B: 不是，是昨天的。</strong>
<em>Bú shì, shì zuótiān de.</em>
(No, it's yesterday's.)

<strong>A: 你听，是不是送报纸的来了？</strong>
<em>Nǐ tīng, shì bu shì sòng bàozhǐ de lái le?</em>
(Listen, is that the newspaper delivery person?)

<strong>B: 我看一下。不是，是送牛奶的。</strong>
<em>Wǒ kàn yíxià. Bú shì, shì sòng niúnǎi de.</em>
(Let me check. No, it's the milk delivery person.)

---

# Text 3: 在家里 (At home)

<strong>A: 这是谁的房间？</strong>
<em>Zhè shì shéi de fángjiān?</em>
(Whose room is this?)

<strong>B: 这是我和我丈夫的，旁边那个小的房间是我女儿的。</strong>
<em>Zhè shì wǒ hé wǒ zhàngfu de, pángbiān nàge xiǎo de fángjiān shì wǒ nǚ'ér de.</em>
(This is mine and my husband's. The small room next to it is my daughter's.)

<strong>A: 你女儿的房间真漂亮！都是粉色的。</strong>
<em>Nǐ nǚ'ér de fángjiān zhēn piàoliang! Dōu shì fěnsè de.</em>
(Your daughter's room is so pretty! It's all pink.)

<strong>B: 是啊，粉色是我女儿最喜欢的颜色。</strong>
<em>Shì a, fěnsè shì wǒ nǚ'ér zuì xǐhuan de yánsè.</em>
(Yes, pink is my daughter's favorite color.)

---

# Text 4: 在办公室 (In the office)

<strong>A: 你看见我的杯子了吗？</strong>
<em>Nǐ kànjiàn wǒ de bēizi le ma?</em>
(Have you seen my cup?)

<strong>B: 这里有几个杯子，哪个是你的？</strong>
<em>Zhèlǐ yǒu jǐ ge bēizi, nǎge shì nǐ de?</em>
(There are a few cups here, which one is yours?)

<strong>A: 左边那个红色的是我的。</strong>
<em>Zuǒbian nàge hóngsè de shì wǒ de.</em>
(The red one on the left is mine.)

<strong>B: 给你。</strong>
<em>Gěi nǐ.</em>
(Here you go.)

---

# Grammar Notes

## 1. The "的" Phrase
When pronouns, adjectives, or verbs are followed by "的", they form a phrase equivalent to a noun phrase with the head noun omitted.

1.  这本书不是我的。 (This book is not **mine**.) *[=我的书]*
2.  这个杯子是昨天买的。 (This cup is **the one bought yesterday**.) *[=昨天买的杯子]*
3.  这块手表是你的吗？ (Is this watch **yours**?) *[=你的手表]*

## 2. Usage of "一下" (yíxià)
Used after a verb to indicate a short action, similar to reduplicating the verb.

*   我<strong>看一下</strong>。 (Let me have a look.)
*   你<strong>休息一下</strong>吧。 (You should rest a bit.)
*   我<strong>问一下</strong>老师。 (Let me ask the teacher.)

## 3. Modal Adverb "真" (zhēn)
Used before adjectives to express an exclamation, meaning "really" or "indeed".

*   你<strong>真</strong>好！ (You are really good!)
*   今天天气<strong>真</strong>好！ (The weather is really good today!)
*   你女儿的房间<strong>真</strong>漂亮！ (Your daughter's room is really pretty!)
`},{id:"hsk2-l3-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>手表</strong> | shǒubiǎo | n. | watch |
| <strong>千</strong> | qiān | num. | thousand |
| <strong>报纸</strong> | bàozhǐ | n. | newspaper |
| <strong>送</strong> | sòng | v. | to send, to deliver |
| <strong>一下</strong> | yíxià | m. | once, a bit |
| <strong>牛奶</strong> | niúnǎi | n. | milk |
| <strong>房间</strong> | fángjiān | n. | room |
| <strong>丈夫</strong> | zhàngfu | n. | husband |
| <strong>旁边</strong> | pángbiān | n. | beside, side |
| <strong>真</strong> | zhēn | adv. | really, indeed |
| <strong>粉色</strong> | fěnsè | n. | pink color |
| <strong>粉</strong> | fěn | adj. | pink |
| <strong>颜色</strong> | yánsè | n. | color |
| <strong>左边</strong> | zuǒbian | n. | left side |
| <strong>红色</strong> | hóngsè | n. | red color |
| <strong>红</strong> | hóng | adj. | red |
`},{id:"hsk2-l3-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>手表</strong> (shǒubiǎo) - <em>Match with Image B (Watch)</em>
2.  <strong>报纸</strong> (bàozhǐ) - <em>Match with Image A (Newspaper rack)</em>
3.  <strong>牛奶</strong> (niúnǎi) - <em>Match with Image C (Milk)</em>
4.  <strong>房间</strong> (fángjiān) - <em>Match with Image E (Bedroom)</em>
5.  <strong>丈夫</strong> (zhàngfu) - <em>Match with Image F (Husband/Wife)</em>
6.  <strong>红色</strong> (hóngsè) - <em>Match with Image D (Red color)</em>

---

# Comprehension Questions

1.  <strong>爸爸的手表多少钱？</strong>
    <em>Bàba de shǒubiǎo duōshao qián?</em>
    (How much is Dad's watch?)
2.  <strong>送报纸的来了吗？</strong>
    <em>Sòng bàozhǐ de lái le ma?</em>
    (Did the newspaper delivery person come?)
3.  <strong>旁边那个小的房间是谁的？</strong>
    <em>Pángbiān nàge xiǎo de fángjiān shì shéi de?</em>
    (Whose is the small room on the side?)
4.  <strong>她女儿的房间怎么样？</strong>
    <em>Tā nǚ'ér de fángjiān zěnmeyàng?</em>
    (How is her daughter's room?)
5.  <strong>哪个杯子是她的？</strong>
    <em>Nǎge bēizi shì tā de?</em>
    (Which cup is hers?)

---

# Phonetics: Stress in Four-Syllable Words

<strong>(1) Without Neutral Tone</strong>
Stress is usually on the 4th syllable.
*   <strong>公共汽车</strong> (gōnggòng qìchē) - Bus
*   <strong>名胜古迹</strong> (míngshèng gǔjì) - Historical sites

<strong>(2) With Neutral Tone</strong>
Usually adjectives. Stress on the 4th syllable, 2nd is neutral.
*   <strong>哆哆嗦嗦</strong> (duōduosuōsuō) - Trembling
*   <strong>噼里啪啦</strong> (pīlipālā) - Crackling sound

---

# Characters

<strong>1. Strokes</strong>
*   <strong>横折斜钩 (héngzhéxiégōu):</strong> e.g., <strong>飞</strong> (fēi), <strong>风</strong> (fēng)
*   <strong>弯钩 (wāngōu):</strong> e.g., <strong>狗</strong> (gǒu), <strong>猫</strong> (māo)

<strong>2. Single Component Characters</strong>
*   <strong>手 (shǒu):</strong> Hand.
*   <strong>丈 (zhàng):</strong> Unit of length (originally an elder with a cane).
*   <strong>夫 (fū):</strong> Husband/Man.

<strong>3. Radicals</strong>
*   <strong>木</strong> (Wood): <strong>杯</strong> (bēi - cup), <strong>椅</strong> (yǐ - chair).
*   <strong>刂</strong> (Knife): <strong>别</strong> (bié - separate), <strong>到</strong> (dào - arrive).

---

# Activity: Describing Items

In pairs, put some items together (pens, books, cups) and ask each other to identify whose is whose based on color and position.

*   A: <strong>这个红色的杯子是你的吗？</strong> (Is this red cup yours?)
*   B: <strong>不是我的。</strong> (No, it's not mine.)
*   A: <strong>旁边粉色的杯子是你的吗？</strong> (Is the pink cup next to it yours?)
*   B: <strong>是我的。</strong> (Yes, it's mine.)
`}]},k_={id:"hsk2-m4",level:wt.HSK2,title:"Work & Introductions (Lesson 4)",description:'Talking about past events with "Shi...de", job introductions, and hobbies.',lessons:[{id:"hsk2-l4-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在教室 (In the classroom)

<strong>A: 生日快乐！这是送给你的！</strong>
<em>Shēngrì kuàilè! Zhè shì sòng gěi nǐ de!</em>
(Happy Birthday! This is for you!)

<strong>B: 是什么？是一本书吗？</strong>
<em>Shì shénme? Shì yì běn shū ma?</em>
(What is it? Is it a book?)

<strong>A: 对，这本书是我写的。</strong>
<em>Duì, zhè běn shū shì wǒ xiě de.</em>
(Yes, I wrote this book.)

<strong>B: 太谢谢你了！</strong>
<em>Tài xièxie nǐ le!</em>
(Thank you so much!)

---

# Text 2: 在家里 (At home)

<strong>A: 早上有你一个电话。</strong>
<em>Zǎoshang yǒu nǐ yí ge diànhuà.</em>
(You had a phone call this morning.)

<strong>B: 电话是谁打的？</strong>
<em>Diànhuà shì shéi dǎ de?</em>
(Who called?)

<strong>A: 不知道，是儿子接的。</strong>
<em>Bù zhīdào, shì érzi jiē de.</em>
(I don't know, our son answered it.)

<strong>B: 好，晚上我问一下儿子。</strong>
<em>Hǎo, wǎnshang wǒ wèn yíxià érzi.</em>
(Okay, I'll ask him this evening.)

---

# Text 3: 在运动场 (On the playground)

<strong>A: 你喜欢踢足球吗？</strong>
<em>Nǐ xǐhuan tī zúqiú ma?</em>
(Do you like playing soccer?)

<strong>B: 非常喜欢。</strong>
<em>Fēicháng xǐhuan.</em>
(I like it very much.)

<strong>A: 你是什么时候开始踢足球的？</strong>
<em>Nǐ shì shénme shíhou kāishǐ tī zúqiú de?</em>
(When did you start playing soccer?)

<strong>B: 我十一岁的时候开始踢足球，已经踢了十年了。</strong>
<em>Wǒ shíyī suì de shíhou kāishǐ tī zúqiú, yǐjīng tī le shí nián le.</em>
(I started playing soccer when I was eleven. I've been playing for ten years.)

---

# Text 4: 在公司 (In the company)

<strong>A: 你在这儿工作多长时间了？</strong>
<em>Nǐ zài zhèr gōngzuò duō cháng shíjiān le?</em>
(How long have you been working here?)

<strong>B: 已经两年多了，我是2011年来的。</strong>
<em>Yǐjīng liǎng nián duō le, wǒ shì èr líng yī yī nián lái de.</em>
(More than two years. I came in 2011.)

<strong>A: 你认识谢先生吗？</strong>
<em>Nǐ rènshi Xiè xiānsheng ma?</em>
(Do you know Mr. Xie?)

<strong>B: 认识，我们是大学同学，这个工作是他帮我介绍的。</strong>
<em>Rènshi, wǒmen shì dàxué tóngxué, zhège gōngzuò shì tā bāng wǒ jièshào de.</em>
(Yes, we were college classmates. He recommended this job to me.)

---

# Grammar Notes

## 1. The "是……的" Construction
Used to emphasize the agent of an action when the occurrence of the action is already known.

> Structure: Object + 是 + Agent + Verb + 的

*   这本书<strong>是</strong>我写<strong>的</strong>。 (I wrote this book.)
*   晚饭<strong>是</strong>妈妈做<strong>的</strong>。 (Mom cooked dinner.)
*   电话<strong>是</strong>谁打<strong>的</strong>？ (Who made the call?)

**Negation:** Add "不" before "是".
*   这个汉字<strong>不是</strong>大卫写<strong>的</strong>。 (David didn't write this character.)

## 2. Time Expression "……的时候" (When...)

> Structure: Time/Verb + 的时候

*   <strong>今天早上八点的时候</strong>我没在家。 (I wasn't home at 8 o'clock this morning.)
*   我<strong>十一岁的时候</strong>开始踢足球。 (I started playing soccer when I was eleven.)
*   我<strong>睡觉的时候</strong>，我妈妈在做饭。 (When I was sleeping, my mom was cooking.)

## 3. Adverb of Time "已经" (Already)
Indicates that an action is completed or has reached a certain degree.

*   王老师<strong>已经</strong>回家了。 (Teacher Wang has already gone home.)
*   我的身体<strong>已经</strong>好了。 (I am already well.)
*   <strong>已经</strong>踢了十年了。 (Have been playing for ten years already.)
`},{id:"hsk2-l4-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>生日</strong> | shēngrì | n. | birthday |
| <strong>快乐</strong> | kuàilè | adj. | happy, glad |
| <strong>给</strong> | gěi | prep. | to (after a verb) |
| <strong>接</strong> | jiē | v. | to receive, to take, to accept |
| <strong>晚上</strong> | wǎnshang | n. | evening, night |
| <strong>问</strong> | wèn | v. | to ask |
| <strong>非常</strong> | fēicháng | adv. | very, extremely |
| <strong>开始</strong> | kāishǐ | v. | to begin, to start |
| <strong>已经</strong> | yǐjīng | adv. | already |
| <strong>长</strong> | cháng | adj. | long |
| <strong>两</strong> | liǎng | num. | two |
| <strong>帮</strong> | bāng | v. | to help, to assist |
| <strong>介绍</strong> | jièshào | v. | to introduce, to recommend |
`},{id:"hsk2-l4-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>生日</strong> (shēngrì) - <em>Match with Image C (Birthday Cake)</em>
2.  <strong>晚上</strong> (wǎnshang) - <em>Match with Image F (Night city)</em>
3.  <strong>两个儿子</strong> (liǎng ge érzi) - <em>Match with Image E (Two boys)</em>
4.  <strong>电话</strong> (diànhuà) - <em>Match with Image D (Telephone)</em>
5.  <strong>看书</strong> (kàn shū) - <em>Match with Image A (Reading)</em>
6.  <strong>工作</strong> (gōngzuò) - <em>Match with Image B (Typing/Working)</em>

---

# Comprehension Questions

1.  <strong>这本书是谁写的？</strong>
    <em>Zhè běn shū shì shéi xiě de?</em>
    (Who wrote this book?)
2.  <strong>早上的电话是谁接的？</strong>
    <em>Zǎoshang de diànhuà shì shéi jiē de?</em>
    (Who answered the morning call?)
3.  <strong>他是什么时候开始踢足球的？</strong>
    <em>Tā shì shénme shíhou kāishǐ tī zúqiú de?</em>
    (When did he start playing soccer?)
4.  <strong>他在那儿工作多长时间了？</strong>
    <em>Tā zài nàr gōngzuò duō cháng shíjiān le?</em>
    (How long has he been working there?)
5.  <strong>工作是谁帮他介绍的？</strong>
    <em>Gōngzuò shì shéi bāng tā jièshào de?</em>
    (Who introduced the job to him?)

---

# Phonetics: Grammatical Stress (1)

**1. Stress on Predicate**
*   我 **学习** 汉语。 (Wǒ **xuéxí** Hànyǔ.)
*   他哥哥 **是** 一名医生。 (Tā gēge **shì** yì míng yīshēng.)

**2. Stress on Complement**
*   他们高兴得 **跳了** 起来。 (Tāmen gāoxìng de **tiàole** qilai.)
*   大卫打篮球打得 **非常** 好。 (Dàwèi dǎ lánqiú dǎ de **fēicháng** hǎo.)

---

# Characters

**1. Strokes**
*   <strong>竖提 (shùtí):</strong> e.g., 长 (cháng), 民 (mín)
*   <strong>竖折折钩 (shùzhézhégōu):</strong> e.g., 马 (mǎ), 写 (xiě)

**2. Single Component Characters**
*   <strong>两 (liǎng):</strong> Two.
*   <strong>乐 (lè/yuè):</strong> Happy / Music.
*   <strong>长 (cháng/zhǎng):</strong> Long / Elder.

**3. Radicals**
*   <strong>纟</strong> (Silk): 给 (gěi), 结 (jié).
*   <strong>忄</strong> (Heart): 忙 (máng), 快 (kuài).
`}]},U_={id:"hsk2-m5",level:wt.HSK2,title:"Shopping & Preferences (Lesson 5)",description:'Making choices with "Jiu", expressing opinions with "Hai" and "Youdianr".',lessons:[{id:"hsk2-l5-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在家里 (At home)

<strong>A: 晚上我们去饭馆吃饭，怎么样？</strong>
<em>Wǎnshang wǒmen qù fànguǎn chī fàn, zěnmeyàng?</em>
(How about we go to a restaurant for dinner tonight?)

<strong>B: 我不想去外面吃，我想在家吃。</strong>
<em>Wǒ bù xiǎng qù wàimiàn chī, wǒ xiǎng zài jiā chī.</em>
(I don't want to eat out, I want to eat at home.)

<strong>A: 那你准备做什么呢？</strong>
<em>Nà nǐ zhǔnbèi zuò shénme ne?</em>
(Then what are you planning to make?)

<strong>B: 就做你爱吃的鱼吧。</strong>
<em>Jiù zuò nǐ ài chī de yú ba.</em>
(Just make the fish you love to eat.)

---

# Text 2: 在商店 (In a store)

<strong>A: 帮我看一下这件衣服怎么样。</strong>
<em>Bāng wǒ kàn yíxià zhè jiàn yīfu zěnmeyàng.</em>
(Help me check out this piece of clothing, how is it?)

<strong>B: 颜色还可以，就是有点儿大。</strong>
<em>Yánsè hái kěyǐ, jiùshì yǒudiǎnr dà.</em>
(The color is okay, but it's a bit too big.)

<strong>A: 这件小的怎么样？</strong>
<em>Zhè jiàn xiǎo de zěnmeyàng?</em>
(How about this small one?)

<strong>B: 这件不错，就买这件吧。</strong>
<em>Zhè jiàn búcuò, jiù mǎi zhè jiàn ba.</em>
(This one is nice, just buy this one.)

---

# Text 3: 在教室 (In the classroom)

<strong>A: 今天去不去打球？</strong>
<em>Jīntiān qù bu qù dǎ qiú?</em>
(Are you going to play ball today?)

<strong>B: 这两天有点儿累，不去打球了。</strong>
<em>Zhè liǎng tiān yǒudiǎnr lèi, bú qù dǎ qiú le.</em>
(I've been a bit tired these couple of days, I'm not going to play ball.)

<strong>A: 你在做什么呢？是在想昨天的考试吗？</strong>
<em>Nǐ zài zuò shénme ne? Shì zài xiǎng zuótiān de kǎoshì ma?</em>
(What are you doing? Are you thinking about yesterday's exam?)

<strong>B: 是啊，我觉得听和说还可以，读和写不好，很多字我都不知道是什么意思。</strong>
<em>Shì a, wǒ juéde tīng hé shuō hái kěyǐ, dú hé xiě bù hǎo, hěn duō zì wǒ dōu bù zhīdào shì shénme yìsi.</em>
(Yes, I think my listening and speaking were okay, but reading and writing weren't good. I didn't know the meaning of many characters.)

---

# Text 4: 在公司 (In the company)

<strong>A: 休息一下吧，喝咖啡吗？</strong>
<em>Xiūxi yíxià ba, hē kāifēi ma?</em>
(Take a break, do you want some coffee?)

<strong>B: 不喝了，我已经喝两杯了。</strong>
<em>Bù hē le, wǒ yǐjīng hē liǎng bēi le.</em>
(No thanks, I've already had two cups.)

<strong>A: 是啊，咖啡喝多了对身体不好。</strong>
<em>Shì a, kāifēi hē duō le duì shēntǐ bù hǎo.</em>
(Yeah, drinking too much coffee is not good for your health.)

<strong>B: 以后我少喝一点儿，每天喝一杯。</strong>
<em>Yǐhòu wǒ shǎo hē yìdiǎnr, měi tiān hē yì bēi.</em>
(I'll drink less in the future, one cup a day.)

---

# Grammar Notes

## 1. The Adverb "就" (jiù)
"就 + Verb" connects to the previous context to signify a conclusion or resolution.

*   你不想去，<strong>就</strong>在家休息吧。 (If you don't want to go, then just rest at home.)
*   这儿的咖啡不错，<strong>就</strong>喝咖啡吧。 (The coffee here is not bad, so let's just drink coffee.)
*   <strong>就</strong>做你爱吃的鱼吧。 (Just make the fish you love to eat.)

*Note: In "颜色还可以，就是有点儿大", "就是" indicates a concession (but).*

## 2. The Tone Adverb "还" (hái)
"还 + Adjective" indicates something is passable or acceptable.

*   A: 你身体怎么样？ B: <strong>还</strong>好。 (A: How are you feeling? B: Okay.)
*   A: 这件衣服大吗？ B: <strong>还</strong>行，不太大。 (A: Is this shirt big? B: It's okay, not too big.)
*   我觉得听和说<strong>还</strong>可以。 (I think listening and speaking are okay.)

## 3. The Adverb of Degree "有点儿" (yǒudiǎnr)
"有点儿 + Adjective/Verb" usually expresses a negative impression or dissatisfaction.

*   今天天气<strong>有点儿</strong>冷。 (It's a bit cold today.)
*   我昨天<strong>有点儿</strong>累。 (I was a bit tired yesterday.)
*   (这件衣服) <strong>有点儿</strong>大。 (This piece of clothing is a bit big.)
`},{id:"hsk2-l5-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>外面</strong> | wàimiàn | n. | outside |
| <strong>准备</strong> | zhǔnbèi | v. | to intend, to plan |
| <strong>就</strong> | jiù | adv. | used for conclusion |
| <strong>鱼</strong> | yú | n. | fish |
| <strong>吧</strong> | ba | part. | used at end of sentence |
| <strong>件</strong> | jiàn | m. | piece (for clothes) |
| <strong>还</strong> | hái | adv. | passably, fairly |
| <strong>可以</strong> | kěyǐ | adj. | not bad |
| <strong>不错</strong> | búcuò | adj. | pretty good |
| <strong>考试</strong> | kǎoshì | n. | test, exam |
| <strong>意思</strong> | yìsi | n. | meaning |
| <strong>咖啡</strong> | kāifēi | n. | coffee |
| <strong>对</strong> | duì | prep. | to, for |
| <strong>以后</strong> | yǐhòu | n. | after, in the future |
`},{id:"hsk2-l5-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>鱼</strong> (yú) - <em>Match with Image F (Fish)</em>
2.  <strong>咖啡</strong> (kāifēi) - <em>Match with Image E (Coffee)</em>
3.  <strong>考试</strong> (kǎoshì) - <em>Match with Image A (Students taking exam)</em>
4.  <strong>衣服</strong> (yīfu) - <em>Match with Image D (Clothes)</em>
5.  <strong>打球</strong> (dǎ qiú) - <em>Match with Image B (Basketball)</em>
6.  <strong>休息</strong> (xiūxi) - <em>Match with Image C (Sleeping)</em>

---

# Comprehension Questions

1.  <strong>今天晚上他们在哪里吃饭？</strong>
    <em>Jīntiān wǎnshang tāmen zài nǎr chī fàn?</em>
    (Where are they eating tonight?)
2.  <strong>她觉得那件衣服怎么样？</strong>
    <em>Tā juéde nà jiàn yīfu zěnmeyàng?</em>
    (What does she think of that piece of clothing?)
3.  <strong>她今天为什么不去打球了？</strong>
    <em>Tā jīntiān wèi shénme bú qù dǎ qiú le?</em>
    (Why is she not going to play ball today?)
4.  <strong>她觉得昨天的考试怎么样？</strong>
    <em>Tā juéde zuótiān de kǎoshì zěnmeyàng?</em>
    (What does she think of yesterday's exam?)
5.  <strong>他为什么以后每天就喝一杯咖啡？</strong>
    <em>Tā wèi shénme yǐhòu měi tiān jiù hē yì bēi kāifēi?</em>
    (Why will he only drink one cup of coffee a day in the future?)

---

# Phonetics: Grammatical Stress (2)

**1. Stress on Attributive (Modifier)**
*   那是我 **妈妈** 做的中国菜。 (Nà shì wǒ **māma** zuò de Zhōngguó cài.)
*   我最喜欢 **红色** 的衣服。 (Wǒ zuì xǐhuan **hóngsè** de yīfu.)

**2. Stress on Adverbial**
*   你的杯子 **就** 在那儿。 (Nǐ de bēizi **jiù** zài nàr.)
*   大卫的狗 **飞一样** 地跑了过去。 (Dàwèi de gǒu **fēi yíyàng** de pǎole guoqu.)

---

# Characters

**1. Single Component Characters**
*   <strong>鱼 (yú):</strong> Fish. (Looks like a fish with head and body).
*   <strong>衣 (yī):</strong> Clothes. (Looks like ancient upper garment).

**2. Radicals**
*   <strong>子</strong> (Child): 孩 (hái - child), 孙 (sūn - grandson).
*   <strong>广</strong> (Shelter/Broad): 店 (diàn - shop), 床 (chuáng - bed).

---

# Culture: Chinese Table Etiquette

When dining together, Chinese people usually sit at a round table so everyone can face each other.

*   **Seating:** The host sits with the main guest to their right and the second most important guest to their left. The seat opposite the host (where food is served) is usually not for guests.
*   **Fish:** If there is a fish dish, the fish head should point towards the most important guest as a sign of respect.
`}]},z_={id:"hsk2-m6",level:wt.HSK2,title:"Reasons & Explanations (Lesson 6)",description:'Asking "Why" with Zenme, Cause & Effect with Yinwei/Suoyi.',lessons:[{id:"hsk2-l6-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在学校 (At school)

<strong>A: 你知道小王今天什么时候来学校吗？</strong>
<em>Nǐ zhīdào Xiǎo Wáng jīntiān shénme shíhou lái xuéxiào ma?</em>
(Do you know when Xiao Wang is coming to school today?)

<strong>B: 他已经来了。</strong>
<em>Tā yǐjīng lái le.</em>
(He has already arrived.)

<strong>A: 你怎么知道他来了？</strong>
<em>Nǐ zěnme zhīdào tā lái le?</em>
(How do you know he's here?)

<strong>B: 我在门外看见他的自行车了。</strong>
<em>Wǒ zài mén wài kànjiàn tā de zìxíngchē le.</em>
(I saw his bicycle outside the door.)

---

# Text 2: 在饭馆 (In a restaurant)

<strong>A: 今天的羊肉很好吃，你怎么不吃了？</strong>
<em>Jīntiān de yángròu hěn hǎochī, nǐ zěnme bù chī le?</em>
(The mutton today is delicious, why aren't you eating anymore?)

<strong>B: 这个星期天天都吃羊肉，不想吃了。</strong>
<em>Zhège xīngqī tiāntiān dōu chī yángròu, bù xiǎng chī le.</em>
(I've eaten mutton every day this week, I don't want to eat it anymore.)

<strong>A: 那你还想吃什么？</strong>
<em>Nà nǐ hái xiǎng chī shénme?</em>
(Then what else do you want to eat?)

<strong>B: 来一点儿面条吧。</strong>
<em>Lái yìdiǎnr miàntiáo ba.</em>
(Let's have some noodles.)

---

# Text 3: 在健身房 (In the gym)

<strong>A: 昨天你们怎么都没去打篮球？</strong>
<em>Zuótiān nǐmen zěnme dōu méi qù dǎ lánqiú?</em>
(Why didn't you guys go play basketball yesterday?)

<strong>B: 因为昨天下雨，所以我们都没去。我去游泳了。</strong>
<em>Yīnwèi zuótiān xià yǔ, suǒyǐ wǒmen dōu méi qù. Wǒ qù yóu yǒng le.</em>
(Because it rained yesterday, so none of us went. I went swimming.)

<strong>A: 你经常游泳吗？</strong>
<em>Nǐ jīngcháng yóu yǒng ma?</em>
(Do you swim often?)

<strong>B: 这个月我天天游泳，我现在七十公斤了。</strong>
<em>Zhège yuè wǒ tiāntiān yóu yǒng, wǒ xiànzài qīshí gōngjīn le.</em>
(I swim every day this month, I am now 70 kilograms.)

---

# Text 4: 在办公室 (In the office)

<strong>A: 这两天怎么没看见小张？</strong>
<em>Zhè liǎng tiān zěnme méi kànjiàn Xiǎo Zhāng?</em>
(Why haven't I seen Xiao Zhang these past two days?)

<strong>B: 他去北京了。</strong>
<em>Tā qù Běijīng le.</em>
(He went to Beijing.)

<strong>A: 去北京了？是去旅游吗？</strong>
<em>Qù Běijīng le? Shì qù lǚyóu ma?</em>
(Went to Beijing? Is it for travel?)

<strong>B: 不是，听说是去看他姐姐。</strong>
<em>Bú shì, tīngshuō shì qù kàn tā jiějie.</em>
(No, I heard he went to see his older sister.)

---

# Grammar Notes

## 1. The Interrogative Pronoun "怎么" (zěnme)
"怎么 + Verb/Adjective" is used to ask for the reason of an action or a state, often implying surprise or astonishment.

*   你<strong>怎么</strong>不高兴？ (Why are you unhappy?)
*   今天<strong>怎么</strong>这么热？ (Why is it so hot today?)
*   昨天你们<strong>怎么</strong>都没去打篮球？ (Why didn't you go play basketball yesterday?)

## 2. Reduplication of Measure Words
When a measure word is reduplicated, it means "every" or "each", emphasizing that every member in a group shares a certain characteristic. It is often followed by "都".

*   同学们<strong>个个</strong>都很高兴。 (Every student is very happy.)
*   这个商店的衣服<strong>件件</strong>都很漂亮。 (Every piece of clothing in this shop is beautiful.)
*   这个星期(我)<strong>天天</strong>都吃羊肉。 (I eat mutton every day this week.)

## 3. The Construction "因为……，所以……"
Connects two clauses in a causal relationship. The first clause states the cause, the second states the result.

*   <strong>因为</strong>她生病了，<strong>所以</strong>没去学校。 (Because she was sick, so she didn't go to school.)
*   <strong>因为</strong>他每天跑步，<strong>所以</strong>身体很好。 (Because he runs every day, so his health is good.)
*   <strong>因为</strong>昨天下雨，<strong>所以</strong>我们都没去。 (Because it rained yesterday, so we didn't go.)
`},{id:"hsk2-l6-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>门</strong> | mén | n. | door, gate |
| <strong>外</strong> | wài | n. | outer, outside |
| <strong>自行车</strong> | zìxíngchē | n. | bicycle |
| <strong>羊肉</strong> | yángròu | n. | mutton, lamb |
| <strong>好吃</strong> | hǎochī | adj. | delicious, tasty |
| <strong>面条</strong> | miàntiáo | n. | noodles |
| <strong>打篮球</strong> | dǎ lánqiú | v. | to play basketball |
| <strong>因为</strong> | yīnwèi | conj. | because, since |
| <strong>所以</strong> | suǒyǐ | conj. | so, therefore |
| <strong>游泳</strong> | yóu yǒng | v. | to swim |
| <strong>经常</strong> | jīngcháng | adv. | often, frequently |
| <strong>公斤</strong> | gōngjīn | m. | kilogram |
| <strong>姐姐</strong> | jiějie | n. | elder sister |
`},{id:"hsk2-l6-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>喝牛奶</strong> (hē niúnǎi) - <em>Match with Image B (Drinking milk)</em>
2.  <strong>起床</strong> (qǐ chuáng) - <em>Match with Image C (Waking up)</em>
3.  <strong>跑步</strong> (pǎo bù) - <em>Match with Image D (Running)</em>
4.  <strong>看报纸</strong> (kàn bàozhǐ) - <em>Match with Image A (Reading newspaper)</em>
5.  <strong>吃药</strong> (chī yào) - <em>Match with Image E (Taking medicine)</em>
6.  <strong>打篮球</strong> (dǎ lánqiú) - <em>Match with Image F (Playing basketball)</em>

---

# Comprehension Questions

1.  <strong>小王今天来学校了吗？</strong>
    <em>Xiǎo Wáng jīntiān lái xuéxiào le ma?</em>
    (Did Xiao Wang come to school today?)
2.  <strong>他看见小王了没有？</strong>
    <em>Tā kànjiàn Xiǎo Wáng le méiyǒu?</em>
    (Did he see Xiao Wang?)
3.  <strong>为什么他今天不想吃羊肉？</strong>
    <em>Wèi shénme tā jīntiān bù xiǎng chī yángròu?</em>
    (Why doesn't he want to eat mutton today?)
4.  <strong>为什么昨天他们都没去打篮球？</strong>
    <em>Wèi shénme zuótiān tāmen dōu méi qù dǎ lánqiú?</em>
    (Why didn't they go play basketball yesterday?)
5.  <strong>小张为什么去北京？</strong>
    <em>Xiǎo Zhāng wèi shénme qù Běijīng?</em>
    (Why did Xiao Zhang go to Beijing?)

---

# Phonetics: Logical Stress

In a sentence, information the speaker wants to emphasize is spoken with more stress. This is called logical stress.

*   <strong>谁</strong>在房间学习汉语呢？ (<strong>Who</strong> is studying Chinese in the room?)
    *   <strong>他</strong>在房间学习汉语呢。 (<strong>He</strong> is studying Chinese in the room.)
*   他在<strong>哪儿</strong>学习汉语呢？ (<strong>Where</strong> is he studying Chinese?)
    *   他在<strong>房间</strong>学习汉语呢。 (He is studying Chinese in the <strong>room</strong>.)

---

# Characters

**1. Single Component Characters**
*   <strong>门 (mén):</strong> Door.
*   <strong>羊 (yáng):</strong> Sheep/Goat.

**2. Radicals**
*   <strong>犭</strong> (Animal/Dog radical): <strong>猫</strong> (māo - cat), <strong>狗</strong> (gǒu - dog).
*   <strong>心</strong> (Heart radical): <strong>想</strong> (xiǎng - to think/miss), <strong>念</strong> (niàn - to read aloud/miss).
`}]},L_={id:"hsk2-m7",level:wt.HSK2,title:"Distance & Time (Lesson 7)",description:'Talking about distance with "Li", continuation with "Hai", and earliness with "Jiu".',lessons:[{id:"hsk2-l7-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在家里 (At home)

<strong>A: 大卫回来了吗？</strong>
<em>Dàwèi huílai le ma?</em>
(Has David come back?)

<strong>B: 没有，他还在教室学习呢。</strong>
<em>Méiyǒu, tā hái zài jiàoshì xuéxí ne.</em>
(No, he is still studying in the classroom.)

<strong>A: 已经9点多了，他怎么还在学习？</strong>
<em>Yǐjīng jiǔ diǎn duō le, tā zěnme hái zài xuéxí?</em>
(It's already past 9, why is he still studying?)

<strong>B: 明天有考试，他说今天要好好准备。</strong>
<em>Míngtiān yǒu kǎoshì, tā shuō jīntiān yào hǎohǎo zhǔnbèi.</em>
(There is an exam tomorrow, he said he needs to prepare well today.)

---

# Text 2: 去机场的路上 (On the way to the airport)

<strong>A: 你现在在哪儿呢？</strong>
<em>Nǐ xiànzài zài nǎr ne?</em>
(Where are you right now?)

<strong>B: 在去机场的路上。你已经到了吗？</strong>
<em>Zài qù jīchǎng de lùshang. Nǐ yǐjīng dàole ma?</em>
(On the way to the airport. Have you arrived already?)

<strong>A: 我下飞机了。你还有多长时间能到这儿？</strong>
<em>Wǒ xià fēijī le. Nǐ hái yǒu duō cháng shíjiān néng dào zhèr?</em>
(I got off the plane. How much longer until you arrive here?)

<strong>B: 二十分钟就到。</strong>
<em>Èrshí fēnzhōng jiù dào.</em>
(I'll be there in 20 minutes.)

---

# Text 3: 在健身房 (In the gym)

<strong>A: 你家离公司远吗？</strong>
<em>Nǐ jiā lí gōngsī yuǎn ma?</em>
(Is your home far from the company?)

<strong>B: 很远，坐公共汽车要一个多小时呢！</strong>
<em>Hěn yuǎn, zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne!</em>
(Very far, it takes more than an hour by bus!)

<strong>A: 坐公共汽车太慢了，你怎么不开车？</strong>
<em>Zuò gōnggòng qìchē tài màn le, nǐ zěnme bù kāi chē?</em>
(Taking the bus is too slow, why don't you drive?)

<strong>B: 开车也不快，路上车太多了！</strong>
<em>Kāi chē yě bú kuài, lùshang chē tài duō le!</em>
(Driving isn't fast either, there are too many cars on the road!)

---

# Text 4: 在路上 (On the road)

<strong>A: 今天晚上我们一起吃饭吧，给你过生日。</strong>
<em>Jīntiān wǎnshang wǒmen yìqǐ chī fàn ba, gěi nǐ guò shēngrì.</em>
(Let's have dinner together tonight to celebrate your birthday.)

<strong>B: 今天？离我的生日还有一个多星期呢！</strong>
<em>Jīntiān? Lí wǒ de shēngrì hái yǒu yí ge duō xīngqī ne!</em>
(Today? It's still more than a week away from my birthday!)

<strong>A: 下个星期我要去北京，今天过吧。</strong>
<em>Xià ge xīngqī wǒ yào qù Běijīng, jīntiān guò ba.</em>
(I'm going to Beijing next week, let's celebrate today.)

<strong>B: 好吧，离这儿不远有一个中国饭馆，走几分钟就到了。</strong>
<em>Hǎo ba, lí zhèr bù yuǎn yǒu yí ge Zhōngguó fànguǎn, zǒu jǐ fēnzhōng jiù dào le.</em>
(Okay, there is a Chinese restaurant not far from here, it takes just a few minutes to walk there.)

---

# Grammar Notes

## 1. The Tone Adverb "还" (hái) - (2)
Indicates the continuation of an action or a state. The negative form is "还没".

*   八点了，他<strong>还</strong>在睡觉。 (It's 8 o'clock, he is still sleeping.)
*   你怎么<strong>还没</strong>吃饭？ (Why haven't you eaten yet?)
*   他<strong>还</strong>在教室学习呢。 (He is still studying in the classroom.)

## 2. The Adverb of Time "就" (jiù)
Emphasizes that the speaker thinks an action happens early, quickly, or smoothly.

*   同学们七点半<strong>就</strong>来教室了。 (Classmates came to the classroom as early as 7:30.)
*   (我)二十分钟<strong>就</strong>到了。 (I arrived in just 20 minutes.)
*   我坐飞机一个半小时<strong>就</strong>到北京了。 (It took me only an hour and a half to fly to Beijing.)

## 3. The Verb "离" (lí)
Indicates distance from a place, time, or purpose.

*   我家<strong>离</strong>学校很远。 (My home is very far from school.)
*   学校<strong>离</strong>机场有20多公里。 (The school is more than 20km away from the airport.)
*   <strong>离</strong>我的生日还有一个多星期呢！ (It is still more than a week from my birthday!)

## 4. The Modal Particle "呢" (ne)
Used at the end of a declarative sentence to confirm a fact and convince the listener, often with an exaggerated tone.

*   八点上课，时间还早<strong>呢</strong>。 (Class starts at 8, it's still early.)
*   坐公共汽车要一个多小时<strong>呢</strong>！ (It takes more than an hour by bus!)
`},{id:"hsk2-l7-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>教室</strong> | jiàoshì | n. | classroom |
| <strong>机场</strong> | jīchǎng | n. | airport |
| <strong>路</strong> | lù | n. | road, path |
| <strong>离</strong> | lí | v. | to be away from |
| <strong>公司</strong> | gōngsī | n. | company, firm |
| <strong>远</strong> | yuǎn | adj. | far, distant |
| <strong>公共汽车</strong> | gōnggòng qìchē | n. | bus |
| <strong>小时</strong> | xiǎoshí | n. | hour |
| <strong>慢</strong> | màn | adj. | slow |
| <strong>快</strong> | kuài | adj. | fast, quick |
| <strong>过</strong> | guò | v. | to pass, to celebrate |
| <strong>走</strong> | zǒu | v. | to walk |
| <strong>到</strong> | dào | v. | to arrive |
`},{id:"hsk2-l7-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>考试</strong> (kǎoshì) - <em>Match with Image A (Classroom/Exam)</em>
2.  <strong>商店</strong> (shāngdiàn) - <em>Match with Image E (Shop)</em>
3.  <strong>机场</strong> (jīchǎng) - <em>Match with Image B (Airport/Plane)</em>
4.  <strong>路</strong> (lù) - <em>Match with Image D (Road)</em>
5.  <strong>教室</strong> (jiàoshì) - <em>Match with Image C (Studying)</em>
6.  <strong>时间</strong> (shíjiān) - <em>Match with Image F (Clocks)</em>

---

# Comprehension Questions

1.  <strong>大卫在哪儿学习呢？</strong>
    <em>Dàwèi zài nǎr xuéxí ne?</em>
    (Where is David studying?)
2.  <strong>九点多了，大卫为什么还不休息？</strong>
    <em>Jiǔ diǎn duō le, Dàwèi wèi shénme hái bù xiūxi?</em>
    (It's past 9, why is David not resting yet?)
3.  <strong>坐公共汽车一个小时能到公司吗？</strong>
    <em>Zuò gōnggòng qìchē yí ge xiǎoshí néng dào gōngsī ma?</em>
    (Can one arrive at the company in one hour by bus?)
4.  <strong>公司离家很远，她为什么不开车？</strong>
    <em>Gōngsī lí jiā hěn yuǎn, tā wèi shénme bù kāi chē?</em>
    (The company is far from home, why doesn't she drive?)
5.  <strong>今天不是她的生日，为什么她朋友要今天给她过生日？</strong>
    <em>Jīntiān bú shì tā de shēngrì, wèi shénme tā péngyou yào jīntiān gěi tā guò shēngrì?</em>
    (Today is not her birthday, why does her friend want to celebrate it today?)

---

# Phonetics: Basic Intonation

Chinese sentences generally have two basic intonations: rising and falling.
Questions often have a rising intonation, while declarative sentences have a falling intonation.

*   他姓张？ ↗ (Is his surname Zhang?)
*   他姓张。 ↘ (His surname is Zhang.)

---

# Characters

**1. Radicals**
*   <strong>彳</strong> (Double person): Related to walking. e.g., <strong>行</strong> (xíng - walk), <strong>往</strong> (wǎng - go towards).
*   <strong>攵</strong> (Tap/Strike): Related to hand actions/striking. e.g., <strong>放</strong> (fàng - put/release), <strong>收</strong> (shōu - receive).
`}]},H_={id:"hsk2-m8",level:wt.HSK2,title:"Suggestions & Future (Lesson 8)",description:'Asking opinions with "Hao ma", pivotal sentences with "Rang", and "Zai" for future.',lessons:[{id:"hsk2-l8-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在教室 (In the classroom)

<strong>A: 我们下午去看电影，好吗？</strong>
<em>Wǒmen xiàwǔ qù kàn diànyǐng, hǎo ma?</em>
(Let's go see a movie this afternoon, okay?)

<strong>B: 今天下午我没有时间，明天下午再去吧。</strong>
<em>Jīntiān xiàwǔ wǒ méiyǒu shíjiān, míngtiān xiàwǔ zài qù ba.</em>
(I don't have time this afternoon, let's go tomorrow afternoon instead.)

<strong>A: 你想看什么电影？</strong>
<em>Nǐ xiǎng kàn shénme diànyǐng?</em>
(What movie do you want to see?)

<strong>B: 让我想想再告诉你。</strong>
<em>Ràng wǒ xiǎngxiang zài gàosu nǐ.</em>
(Let me think about it and then tell you.)

---

# Text 2: 在宿舍 (In the dormitory)

<strong>A: 外边天气很好，我们出去运动运动吧！</strong>
<em>Wàibian tiānqì hěn hǎo, wǒmen chūqu yùndòng yùndòng ba!</em>
(The weather outside is very nice, let's go out and exercise a bit!)

<strong>B: 你等等我，好吗？王老师让我给大卫打个电话。</strong>
<em>Nǐ děngdeng wǒ, hǎo ma? Wáng lǎoshī ràng wǒ gěi Dàwèi dǎ ge diànhuà.</em>
(Wait for me a moment, okay? Teacher Wang asked me to call David.)

<strong>A: 回来再打吧。找大卫有什么事情吗？</strong>
<em>Huílai zài dǎ ba. Zhǎo Dàwèi yǒu shénme shìqing ma?</em>
(Call him when we get back. Is something the matter with David?)

<strong>B: 听说大卫病了，我想找时间去看看他。</strong>
<em>Tīngshuō Dàwèi bìng le, wǒ xiǎng zhǎo shíjiān qù kànkan tā.</em>
(I heard David is sick, I want to find a time to go visit him.)

---

# Text 3: 在宾馆的前台 (At the hotel reception)

<strong>A: 服务员，我房间的门打不开了。</strong>
<em>Fúwùyuán, wǒ fángjiān de mén dǎ bu kāi le.</em>
(Attendant, the door to my room won't open.)

<strong>B: 您住哪个房间？</strong>
<em>Nín zhù nǎge fángjiān?</em>
(Which room do you stay in?)

<strong>A: 317。</strong>
<em>Sān yāo qī.</em>
(317.)

<strong>B: 好的，我叫人去看看。</strong>
<em>Hǎo de, wǒ jiào rén qù kànkan.</em>
(Okay, I'll ask someone to go check.)

---

# Text 4: 在商店 (In a store)

<strong>A: 你看看这几件衣服怎么样。</strong>
<em>Nǐ kànkan zhè jǐ jiàn yīfu zěnmeyàng.</em>
(Take a look at these clothes, what do you think?)

<strong>B: 这件白的有点儿长，那件黑的有点儿贵。</strong>
<em>Zhè jiàn bái de yǒudiǎnr cháng, nà jiàn hēi de yǒudiǎnr guì.</em>
(This white one is a bit long, that black one is a bit expensive.)

<strong>A: 这件红的呢？这是今天新来的。</strong>
<em>Zhè jiàn hóng de ne? Zhè shì jīntiān xīn lái de.</em>
(What about this red one? This just arrived today.)

<strong>B: 让我再看看。</strong>
<em>Ràng wǒ zài kànkan.</em>
(Let me look at it again.)

---

# Grammar Notes

## 1. The Question Structure "……，好吗？"
Used to ask for another person's opinion or view.

*   我们一起去吃饭，<strong>好吗</strong>？ (Let's go eat together, okay?)
*   你明天下午给我打电话，<strong>好吗</strong>？ (Call me tomorrow afternoon, okay?)
*   我们下午去看电影，<strong>好吗</strong>？ (Let's go watch a movie this afternoon, okay?)

## 2. The Adverb "再" (zài)
Indicates the repetition or continuation of an action or state. It can also indicate an action will happen under certain circumstances.

*   你<strong>再</strong>看看这本书吧。 (Take another look at this book.)
*   你(明天)<strong>再</strong>给我打电话吧。 (Call me again tomorrow.)
*   (你)(让我想想)<strong>再</strong>告诉你。 (Let me think about it and then tell you.)

## 3. Pivotal Sentences
A pivotal sentence has a predicate consisting of two verbal phrases. The object of the first verb is the subject of the second verb. Common first verbs include "请", "让", "叫".

| Subject | Verb 1 | Object/Subject | Verb 2 |
| :--- | :---: | :---: | :--- |
| <strong>我</strong> | <strong>请</strong> | <strong>你</strong> | <strong>吃饭。</strong> (I invite you to eat.) |
| <strong>你</strong> | <strong>让</strong> | <strong>我</strong> | <strong>再想想。</strong> (You let me think again.) |
| <strong>我</strong> | <strong>叫</strong> | <strong>人</strong> | <strong>去看看。</strong> (I call someone to go check.) |

## 4. Reduplication of Verbs
Verbs are reduplicated to indicate short duration, small quantity, slight degree, or an attempt. The tone is relaxed and casual, often used in spoken language.

*   <strong>说说 / 说一说</strong> (shuōshuo / shuō yi shuō) - Speak a bit
*   <strong>看看 / 看一看</strong> (kànkan / kàn yi kàn) - Take a look
*   <strong>学习学习</strong> (xuéxí xuéxí) - Study a bit
*   <strong>准备准备</strong> (zhǔnbèi zhǔnbèi) - Prepare a bit
`},{id:"hsk2-l8-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>再</strong> | zài | adv. | again, once more |
| <strong>让</strong> | ràng | v. | to let, to allow |
| <strong>告诉</strong> | gàosu | v. | to tell |
| <strong>等</strong> | děng | v. | to wait |
| <strong>找</strong> | zhǎo | v. | to look for |
| <strong>事情</strong> | shìqing | n. | matter, thing, business |
| <strong>服务员</strong> | fúwùyuán | n. | waiter, waitress, attendant |
| <strong>白</strong> | bái | adj. | white |
| <strong>黑</strong> | hēi | adj. | black |
| <strong>贵</strong> | guì | adj. | expensive |
`},{id:"hsk2-l8-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>黑</strong> (hēi) - <em>Match with Image C (Black square)</em>
2.  <strong>天气</strong> (tiānqì) - <em>Match with Image D (Sky/Weather)</em>
3.  <strong>运动</strong> (yùndòng) - <em>Match with Image A (Jogging)</em>
4.  <strong>服务员</strong> (fúwùyuán) - <em>Match with Image F (Waiter)</em>
5.  <strong>等</strong> (děng) - <em>Match with Image B (Waiting)</em>
6.  <strong>白</strong> (bái) - <em>Match with Image E (White square)</em>

<strong>Antonyms</strong>
*   <strong>大 (Big)</strong> —— <strong>小 (Small)</strong>
*   <strong>多 (Many)</strong> —— <strong>少 (Few)</strong>
*   <strong>快 (Fast)</strong> —— <strong>慢 (Slow)</strong>
*   <strong>冷 (Cold)</strong> —— <strong>热 (Hot)</strong>
*   <strong>上 (Up)</strong> —— <strong>下 (Down)</strong>
*   <strong>黑 (Black)</strong> —— <strong>白 (White)</strong>

---

# Comprehension Questions

1.  <strong>他们为什么今天下午不去看电影？</strong>
    <em>Tāmen wèi shénme jīntiān xiàwǔ bú qù kàn diànyǐng?</em>
    (Why are they not going to the movie this afternoon?)
2.  <strong>王老师为什么让他给大卫打电话？</strong>
    <em>Wáng lǎoshī wèi shénme ràng tā gěi Dàwèi dǎ diànhuà?</em>
    (Why did Teacher Wang ask him to call David?)
3.  <strong>大卫怎么了？</strong>
    <em>Dàwèi zěnme le?</em>
    (What happened to David?)
4.  <strong>她为什么去找服务员？</strong>
    <em>Tā wèi shénme qù zhǎo fúwùyuán?</em>
    (Why did she go look for the attendant?)
5.  <strong>她为什么不喜欢那件黑的？</strong>
    <em>Tā wèi shénme bù xǐhuan nà jiàn hēi de?</em>
    (Why does she dislike that black one?)

---

# Phonetics: Intonation of Declarative Sentences

Chinese declarative sentences generally have a falling intonation.

*   我学习汉语。 ↘ (I study Chinese.)
*   他是我的老师。 ↘ (He is my teacher.)
*   外边天气很好。 ↘ (The weather outside is very good.)

---

# Characters

**1. Radicals**
*   <strong>又</strong> (Again/Right hand): e.g., <strong>欢</strong> (huān - happy), <strong>对</strong> (duì - correct).
*   <strong>巾</strong> (Towel/Cloth): e.g., <strong>帮</strong> (bāng - help), <strong>帽</strong> (mào - hat).
`}]},B_={id:"hsk2-m9",level:wt.HSK2,title:"Results & Outcomes (Lesson 9)",description:'Result complements, "Cong" for starting points, and Ordinal numbers "Di".',lessons:[{id:"hsk2-l9-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 打电话 (Calling on the phone)

<strong>A: 你好！请问张欢在吗？</strong>
<em>Nǐ hǎo! Qǐngwèn Zhāng Huān zài ma?</em>
(Hello! Is Zhang Huan there, please?)

<strong>B: 你打错了，我们这儿没有叫张欢的。</strong>
<em>Nǐ dǎcuò le, wǒmen zhèr méiyǒu jiào Zhāng Huān de.</em>
(You dialed the wrong number, there is no one called Zhang Huan here.)

<strong>A: 对不起。</strong>
<em>Duìbuqǐ.</em>
(I'm sorry.)

---

# Text 2: 在学校 (At school)

<strong>A: 您从几岁开始学习跳舞？</strong>
<em>Nín cóng jǐ suì kāishǐ xuéxí tiào wǔ?</em>
(At what age did you start learning to dance?)

<strong>B: 我第一次跳舞是在七岁的时候。</strong>
<em>Wǒ dì yī cì tiào wǔ shì zài qī suì de shíhou.</em>
(The first time I danced was when I was seven.)

<strong>A: 我女儿今年也七岁了。我希望她能跟您学跳舞，可以吗？</strong>
<em>Wǒ nǚ'ér jīnnián yě qī suì le. Wǒ xīwàng tā néng gēn nín xué tiào wǔ, kěyǐ ma?</em>
(My daughter is also seven this year. I hope she can learn to dance from you, may I?)

<strong>B: 没问题，非常欢迎。</strong>
<em>Méi wèntí, fēicháng huānyíng.</em>
(No problem, very welcome.)

---

# Text 3: 在家里 (At home)

<strong>A: 你知道吗？大卫找到工作了。</strong>
<em>Nǐ zhīdào ma? Dàwèi zhǎodào gōngzuò le.</em>
(Did you know? David found a job.)

<strong>B: 太好了！他从什么时候开始上班？</strong>
<em>Tài hǎo le! Tā cóng shénme shíhou kāishǐ shàng bān?</em>
(That's great! When does he start working?)

<strong>A: 从下个星期一开始。</strong>
<em>Cóng xià ge xīngqī yī kāishǐ.</em>
(Starting from next Monday.)

<strong>B: 这是他的第一个工作，希望他能喜欢。</strong>
<em>Zhè shì tā de dì yī ge gōngzuò, xīwàng tā néng xǐhuan.</em>
(This is his first job, I hope he will like it.)

---

# Text 4: 在教室 (In the classroom)

<strong>A: 昨天的考试怎么样？你都听懂了吗？</strong>
<em>Zuótiān de kǎoshì zěnmeyàng? Nǐ dōu tīngdǒng le ma?</em>
(How was yesterday's exam? Did you understand everything you heard?)

<strong>B: 听懂了。</strong>
<em>Tīngdǒng le.</em>
(I understood.)

<strong>A: 你都做完了没有？</strong>
<em>Nǐ dōu zuòwán le méiyǒu?</em>
(Did you finish everything?)

<strong>B: 题太多，我没做完。</strong>
<em>Tí tài duō, wǒ méi zuòwán.</em>
(There were too many questions, I didn't finish.)

---

# Grammar Notes

## 1. Result Complements
Some verbs or adjectives can be placed after a verb to indicate the result of an action. These are called result complements.

> <strong>Structure:</strong> Subject + Verb + Result Complement + Object

*   我<strong>看见</strong>你的女朋友了。 (I saw your girlfriend.)
*   我<strong>听懂</strong>今天的汉语课了。 (I understood today's Chinese lesson.)
*   大卫<strong>找到</strong>工作了。 (David has found a job.)

**Negation:** Use "没(有)" before the verb.
*   我<strong>没有看见</strong>你的女朋友。 (I didn't see your girlfriend.)
*   我<strong>没听懂</strong>他说的话。 (I didn't understand what he said.)

**Question:** Add "(了)没有" at the end.
*   你<strong>看见</strong>我的女朋友了没有？ (Did you see my girlfriend?)
*   你<strong>听懂</strong>他说的话没有？ (Did you understand what he said?)

## 2. The Preposition "从" (cóng)
Introduces the starting point of a period of time, a distance, a process, or a sequence. Often used with "到" (dào).

*   <strong>从</strong>北京<strong>到</strong>上海要坐几个小时的飞机？ (How many hours does it take to fly from Beijing to Shanghai?)
*   <strong>从</strong>下个星期一开始(上班)。 (Start working from next Monday.)

## 3. "第" (dì) Indicating Order
"第" is usually placed before a numeral-measure word phrase to indicate order (ordinal numbers).

*   <strong>第</strong>一本书 (The first book)
*   <strong>第</strong>二个工作 (The second job)
*   <strong>第</strong>一次跳舞 (The first time dancing)
`},{id:"hsk2-l9-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>错</strong> | cuò | adj. | wrong, incorrect |
| <strong>从</strong> | cóng | prep. | from |
| <strong>跳舞</strong> | tiào wǔ | v. | to dance |
| <strong>第一</strong> | dì yī | num. | first |
| <strong>希望</strong> | xīwàng | v. | to hope, to wish |
| <strong>问题</strong> | wèntí | n. | question, problem |
| <strong>欢迎</strong> | huānyíng | v. | to welcome |
| <strong>上班</strong> | shàng bān | v. | to go to work |
| <strong>懂</strong> | dǒng | v. | to understand |
| <strong>完</strong> | wán | v. | to finish, to end |
| <strong>题</strong> | tí | n. | question, problem |
`},{id:"hsk2-l9-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>上班</strong> (shàng bān) - <em>Match with Image C (Going to work)</em>
2.  <strong>唱歌</strong> (chàng gē) - <em>Match with Image A (Singing)</em>
3.  <strong>对错</strong> (duì cuò) - <em>Match with Image F (Check and Cross)</em>
4.  <strong>问题</strong> (wèntí) - <em>Match with Image E (Scratching head/Question mark)</em>
5.  <strong>第一</strong> (dì yī) - <em>Match with Image D (Number 1)</em>
6.  <strong>跳舞</strong> (tiào wǔ) - <em>Match with Image B (Dancing)</em>

---

# Comprehension Questions

1.  <strong>老师从几岁开始学跳舞？</strong>
    <em>Lǎoshī cóng jǐ suì kāishǐ xué tiào wǔ?</em>
    (At what age did the teacher start learning to dance?)
2.  <strong>老师想教她的女儿跳舞吗？</strong>
    <em>Lǎoshī xiǎng jiāo tā de nǚ'ér tiào wǔ ma?</em>
    (Does the teacher want to teach her daughter to dance?)
3.  <strong>大卫什么时候去工作？</strong>
    <em>Dàwèi shénme shíhou qù gōngzuò?</em>
    (When is David going to work?)
4.  <strong>这次考试她都听懂了吗？</strong>
    <em>Zhè cì kǎoshì tā dōu tīngdǒng le ma?</em>
    (Did she understand everything in this exam?)
5.  <strong>她考试为什么没做完？</strong>
    <em>Tā kǎoshì wèi shénme méi zuòwán?</em>
    (Why didn't she finish the exam?)

---

# Phonetics: Intonation of Yes-No Questions

Stress the predicate part, and use a rising intonation at the end of the sentence.

*   你明天去学校吗？ ↗ (Are you going to school tomorrow?)
*   他们都知道这件事吗？ ↗ (Do they all know about this?)
*   你都听懂了吗？ ↗ (Did you understand everything?)

---

# Characters

**1. Radicals**
*   <strong>土</strong> (Earth): e.g., <strong>块</strong> (kuài - piece/chunk), <strong>地</strong> (dì - ground/earth).
*   <strong>灬</strong> (Four dots/Fire): e.g., <strong>热</strong> (rè - hot), <strong>黑</strong> (hēi - black).
`}]},q_={id:"hsk2-m10",level:wt.HSK2,title:"Commands & Relations (Lesson 10)",description:'Imperatives with "Bie...le", Relationships with "Dui", Tea Culture.',lessons:[{id:"hsk2-l10-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在家里 (At home)

<strong>A: 不要看电视了，明天上午还有汉语课呢。</strong>
<em>Búyào kàn diànshì le, míngtiān shàngwǔ hái yǒu Hànyǔ kè ne.</em>
(Don't watch TV anymore, you have a Chinese class tomorrow morning.)

<strong>B: 看电视对学汉语有帮助。</strong>
<em>Kàn diànshì duì xué Hànyǔ yǒu bāngzhù.</em>
(Watching TV helps with learning Chinese.)

<strong>A: 明天的课你都准备好了吗？</strong>
<em>Míngtiān de kè nǐ dōu zhǔnbèi hǎo le ma?</em>
(Are you ready for tomorrow's lesson?)

<strong>B: 都准备好了。</strong>
<em>Dōu zhǔnbèi hǎo le.</em>
(I'm all ready.)

---

# Text 2: 在医院 (In the hospital)

<strong>A: 别看报纸了，医生说你要多休息。</strong>
<em>Bié kàn bàozhǐ le, yīshēng shuō nǐ yào duō xiūxi.</em>
(Stop reading the newspaper, the doctor said you need to rest more.)

<strong>B: 好，不看了。给我一杯茶吧。</strong>
<em>Hǎo, bú kàn le. Gěi wǒ yì bēi chá ba.</em>
(Okay, I'll stop reading. Give me a cup of tea.)

<strong>A: 医生说吃药后两个小时不要喝茶。</strong>
<em>Yīshēng shuō chī yào hòu liǎng ge xiǎoshí búyào hē chá.</em>
(The doctor said not to drink tea for two hours after taking medicine.)

<strong>B: 医生还说什么了？</strong>
<em>Yīshēng hái shuō shénme le?</em>
(What else did the doctor say?)

<strong>A: 医生让你听我的。</strong>
<em>Yīshēng ràng nǐ tīng wǒ de.</em>
(The doctor told you to listen to me.)

---

# Text 3: 在家里 (At home)

<strong>A: 你怎么买了这么多东西啊？</strong>
<em>Nǐ zěnme mǎile zhème duō dōngxi a?</em>
(Why did you buy so many things?)

<strong>B: 哥哥今天中午回来吃饭。</strong>
<em>Gēge jīntiān zhōngwǔ huílai chī fàn.</em>
(My older brother is coming back for lunch today.)

<strong>A: 我看看买什么了。羊肉，鸡蛋，面条，西瓜……真不少！妈妈呢？</strong>
<em>Wǒ kànkan mǎi shénme le. Yángròu, jīdàn, miàntiáo, xīguā…… zhēn bù shǎo! Māma ne?</em>
(Let me see what you bought. Mutton, eggs, noodles, watermelon... really quite a lot! Where is Mom?)

<strong>B: 正在准备午饭呢！</strong>
<em>Zhèngzài zhǔnbèi wǔfàn ne!</em>
(She is preparing lunch!)

---

# Text 4: 在家里 (At home)

<strong>A: 你在找什么？</strong>
<em>Nǐ zài zhǎo shénme?</em>
(What are you looking for?)

<strong>B: 你看见我的手机了吗？白色的。</strong>
<em>Nǐ kànjiàn wǒ de shǒujī le ma? Báisè de.</em>
(Have you seen my mobile phone? It's white.)

<strong>A: 别找了，手机在桌子上呢，电脑旁边。</strong>
<em>Bié zhǎo le, shǒujī zài zhuōzi shang ne, diànnǎo pángbiān.</em>
(Stop looking, the phone is on the table, next to the computer.)

<strong>B: 你看见我的衣服了吗？红色的那件。</strong>
<em>Nǐ kànjiàn wǒ de yīfu le ma? Hóngsè de nà jiàn.</em>
(Have you seen my clothes? That red piece.)

<strong>A: 那件衣服我帮你洗了，在外边呢。</strong>
<em>Nà jiàn yīfu wǒ bāng nǐ xǐ le, zài wàibian ne.</em>
(I washed that piece of clothing for you, it's outside.)

---

# Grammar Notes

## 1. Imperative Sentences: "不要……了" / "别……了"
Used to dissuade or prohibit someone from doing something.

> <strong>Pattern:</strong> 不要/别 + Verb (+ Object) + 了

*   <strong>不要</strong>看电视<strong>了</strong>。 (Don't watch TV anymore.)
*   <strong>别</strong>看书<strong>了</strong>。 (Stop reading books.)
*   <strong>别</strong>找<strong>了</strong>。 (Stop looking.)

## 2. The Preposition "对" (duì)
Used to indicate a relationship between people, or between people/things and things. It often introduces the target of an action or attitude.

> <strong>Structure:</strong> A + 对 + B + Verb/Adjective

*   跑步<strong>对</strong>身体很好。 (Running is good for the body.)
*   老师<strong>对</strong>学生非常好。 (The teacher is very good to the students.)
*   看电视<strong>对</strong>学汉语有帮助。 (Watching TV is helpful for learning Chinese.)

`},{id:"hsk2-l10-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>课</strong> | kè | n. | class, lesson |
| <strong>帮助</strong> | bāngzhù | v./n. | to help; help, assistance |
| <strong>别</strong> | bié | adv. | don't |
| <strong>哥哥</strong> | gēge | n. | elder brother |
| <strong>鸡蛋</strong> | jīdàn | n. | egg |
| <strong>西瓜</strong> | xīguā | n. | watermelon |
| <strong>正在</strong> | zhèngzài | adv. | in the process of |
| <strong>手机</strong> | shǒujī | n. | cell phone |
| <strong>洗</strong> | xǐ | v. | to wash |
`},{id:"hsk2-l10-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>西瓜</strong> (xīguā) - <em>Match with Image B (Watermelon)</em>
2.  <strong>鸡蛋</strong> (jīdàn) - <em>Match with Image A (Eggs)</em>
3.  <strong>休息</strong> (xiūxi) - <em>Match with Image C (Waking up/Stretching)</em>
4.  <strong>吃药</strong> (chī yào) - <em>Match with Image F (Taking medicine)</em>
5.  <strong>手机</strong> (shǒujī) - <em>Match with Image D (Cell phones)</em>
6.  <strong>准备午饭</strong> (zhǔnbèi wǔfàn) - <em>Match with Image E (Cooking)</em>

---

# Comprehension Questions

1.  <strong>孩子们正在做什么？</strong>
    <em>Háizimen zhèngzài zuò shénme?</em>
    (What are the children doing?)
2.  <strong>妈妈为什么不让他们看电视了？</strong>
    <em>Māma wèi shénme bú ràng tāmen kàn diànshì le?</em>
    (Why doesn't mom let them watch TV anymore?)
3.  <strong>吃药以后可以喝茶吗？</strong>
    <em>Chī yào yǐhòu kěyǐ hē chá ma?</em>
    (Can one drink tea after taking medicine?)
4.  <strong>他今天都买了什么东西？为什么买这么多？</strong>
    <em>Tā jīntiān dōu mǎile shénme dōngxi? Wèi shénme yào mǎi zhème duō?</em>
    (What did he buy today? Why did he buy so much?)
5.  <strong>你知道男的正在找什么吗？</strong>
    <em>Nǐ zhīdào nán de zhèngzài zhǎo shénme ma?</em>
    (Do you know what the man is looking for?)

---

# Phonetics: Intonation of Specific Questions

Stress the interrogative pronoun, and let the intonation fall gradually after the stress.

*   这是<strong>谁</strong>的笔？ ↘ (Whose pen is this?)
*   你们学校有<strong>多少</strong>学生？ ↘ (How many students are there in your school?)
*   你在<strong>找</strong>什么？ ↘ (What are you looking for?)

---

# Characters

**1. Radicals**
*   <strong>走</strong> (Walk/Run): e.g., <strong>超</strong> (chāo - exceed), <strong>起</strong> (qǐ - rise).
*   <strong>穴</strong> (Cave/Hole): e.g., <strong>空</strong> (kōng - empty), <strong>穿</strong> (chuān - pierce/wear).

---

# Culture: Chinese Tea Culture

Chinese people love drinking tea. Tea is not only delicious but also good for health. It can refresh the mind, resist aging, prevent diseases, and help with weight loss.

There are many types of Chinese tea, such as Black Tea (<strong>红茶</strong>), Green Tea (<strong>绿茶</strong>), Oolong Tea (<strong>青茶</strong>), and Scented Tea (<strong>花茶</strong>).

People choose different teas according to the season:
*   <strong>Spring:</strong> Scented Tea (Flower tea)
*   <strong>Summer:</strong> Green Tea
*   <strong>Autumn:</strong> Oolong Tea (Blue-green tea)
*   <strong>Winter:</strong> Black Tea (Red tea)
`}]},P_={id:"hsk2-m11",level:wt.HSK2,title:"Comparisons (Lesson 11)",description:'Comparing age, price, and attributes using "Bi" sentences.',lessons:[{id:"hsk2-l11-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在歌厅 (In a karaoke bar)

<strong>A: 王方，昨天和你一起唱歌的人是谁？</strong>
<em>Wáng Fāng, zuótiān hé nǐ yìqǐ chàng gē de rén shì shéi?</em>
(Wang Fang, who was the person singing with you yesterday?)

<strong>B: 一个朋友。</strong>
<em>Yí ge péngyou.</em>
(A friend.)

<strong>A: 什么朋友？是不是男朋友？</strong>
<em>Shénme péngyou? Shì bu shì nánpéngyou?</em>
(What kind of friend? Is it your boyfriend?)

<strong>B: 不是不是，我同学介绍的，昨天第一次见。</strong>
<em>Bú shì bú shì, wǒ tóngxué jièshào de, zuótiān dì yī cì jiàn.</em>
(No, no, introduced by my classmate, yesterday was the first time we met.)

---

# Text 2: 在宿舍 (In the dormitory)

<strong>A: 左边这个看报纸的女孩子是你姐姐吗？</strong>
<em>Zuǒbian zhège kàn bàozhǐ de nǚ háizi shì nǐ jiějie ma?</em>
(Is this girl reading the newspaper on the left your older sister?)

<strong>B: 是，右边写字的那个是我哥哥。</strong>
<em>Shì, yòubian xiě zì de nàge rén shì wǒ gēge.</em>
(Yes, the person writing on the right is my older brother.)

<strong>A: 你哥哥多大？</strong>
<em>Nǐ gēge duō dà?</em>
(How old is your brother?)

<strong>B: 二十五岁，他比我大三岁。</strong>
<em>Èrshíwǔ suì, tā bǐ wǒ dà sān suì.</em>
(25 years old, he is three years older than me.)

---

# Text 3: 在商店 (In a store)

<strong>A: 今天的西瓜怎么卖？</strong>
<em>Jīntiān de xīguā zěnme mài?</em>
(How much are the watermelons today?)

<strong>B: 三块五一斤。</strong>
<em>Sān kuài wǔ yì jīn.</em>
(3.5 yuan per jin.)

<strong>A: 比昨天便宜。</strong>
<em>Bǐ zuótiān piányi.</em>
(Cheaper than yesterday.)

<strong>B: 是，苹果也比昨天便宜一些。您来点儿吧。</strong>
<em>Shì, píngguǒ yě bǐ zuótiān piányi yìxiē. Nín lái diǎnr ba.</em>
(Yes, apples are also a bit cheaper than yesterday. Would you like some?)

---

# Text 4: 在学校 (At school)

<strong>A: 前边说话的那个人就是我的汉语老师。你可能不认识她。</strong>
<em>Qiánbian shuō huà de nàge rén jiù shì wǒ de Hànyǔ lǎoshī. Nǐ kěnéng bú rènshi tā.</em>
(The person speaking in the front is my Chinese teacher. You might not know her.)

<strong>B: 是新来的汉语老师吗？</strong>
<em>Shì xīn lái de Hànyǔ lǎoshī ma?</em>
(Is she the new Chinese teacher?)

<strong>A: 是去年来的，她姓王，28岁。</strong>
<em>Shì qùnián lái de, tā xìng Wáng, èrshíbā suì.</em>
(She came last year, her surname is Wang, 28 years old.)

<strong>B: 她比我们老师小两岁。</strong>
<em>Tā bǐ wǒmen lǎoshī xiǎo liǎng suì.</em>
(She is two years younger than our teacher.)

---

# Grammar Notes

## 1. Verbal Phrases as Attributives
When a verb or verb phrase is used as an attributive (modifier) for a noun, "的" must be added between them.

> Structure: Verb/Verb Phrase + 的 + Noun

*   <strong>新买</strong>的自行车 (The newly bought bicycle)
*   <strong>我妈妈做</strong>的饭 (The food my mom cooked)
*   <strong>和你一起唱歌</strong>的人 (The person singing with you)

## 2. Comparison using "比" (bǐ) - Part 1
Used to compare two entities. The predicate is usually an adjective.

> Structure: A + 比 + B + Adjective

*   哥哥<strong>比</strong>姐姐高。 (Older brother is taller than older sister.)
*   今天<strong>比</strong>昨天热。 (Today is hotter than yesterday.)

**Negation:** Use "没有" (méiyǒu).
> Structure: A + 没有 + B + Adjective

*   西瓜<strong>没有</strong>苹果便宜。 (Watermelons are not as cheap as apples.)

**Indicating Degree of Difference:**
*   Small difference: 一点儿 (yìdiǎnr), 一些 (yìxiē)
*   Large difference: 多 (duō), 得多 (de duō)
*   Specific difference: Number + Measure Word

*   苹果比昨天便宜<strong>一些</strong>。 (Apples are a bit cheaper than yesterday.)
*   今天比昨天热<strong>得多</strong>。 (Today is much hotter than yesterday.)
*   他比我大<strong>三岁</strong>。 (He is three years older than me.)

## 3. The Auxiliary Verb "可能" (kěnéng)
Indicates possibility or probability (maybe, perhaps). Can be placed before the verb or the subject.

*   他<strong>可能</strong>早就知道这件事情了。 (He probably knew about this matter long ago.)
*   <strong>可能</strong>我明天不来上课了。 (Maybe I won't come to class tomorrow.)
*   你<strong>可能</strong>不认识她。 (You might not know her.)
`},{id:"hsk2-l11-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>唱歌</strong> | chàng gē | v. | to sing |
| <strong>男</strong> | nán | adj. | male |
| <strong>女</strong> | nǚ | adj. | female |
| <strong>孩子</strong> | háizi | n. | child |
| <strong>右边</strong> | yòubian | n. | right side |
| <strong>比</strong> | bǐ | prep. | than |
| <strong>便宜</strong> | piányi | adj. | cheap |
| <strong>说话</strong> | shuō huà | v. | to speak, to talk |
| <strong>可能</strong> | kěnéng | aux. | maybe, perhaps |
| <strong>去年</strong> | qùnián | n. | last year |
| <strong>姓</strong> | xìng | v. | surname |
`},{id:"hsk2-l11-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>跳舞</strong> (tiào wǔ) - <em>Match with Image F (Dancing)</em>
2.  <strong>说话</strong> (shuō huà) - <em>Match with Image C (Whispering/Talking)</em>
3.  <strong>女</strong> (nǚ) - <em>Match with Image B (Woman)</em>
4.  <strong>孩子</strong> (háizi) - <em>Match with Image D (Children)</em>
5.  <strong>唱歌</strong> (chàng gē) - <em>Match with Image A (Singing)</em>
6.  <strong>男</strong> (nán) - <em>Match with Image E (Man)</em>

<strong>Antonyms</strong>
*   <strong>贵 (Expensive)</strong> —— <strong>便宜 (Cheap)</strong>
*   <strong>对 (Correct)</strong> —— <strong>错 (Wrong)</strong>
*   <strong>左 (Left)</strong> —— <strong>右 (Right)</strong>
*   <strong>来 (Come)</strong> —— <strong>去 (Go)</strong>
*   <strong>前 (Front)</strong> —— <strong>后 (Back)</strong>
*   <strong>里 (Inside)</strong> —— <strong>外 (Outside)</strong>

---

# Comprehension Questions

1.  <strong>昨天和王方一起唱歌的人是谁？</strong>
    <em>Zuótiān hé Wáng Fāng yìqǐ chàng gē de rén shì shéi?</em>
    (Who was the person singing with Wang Fang yesterday?)
2.  <strong>左边看报纸的女孩子是谁？</strong>
    <em>Zuǒbian kàn bàozhǐ de nǚ háizi shì shéi?</em>
    (Who is the girl reading the newspaper on the left?)
3.  <strong>她的哥哥25岁了，她多大了？</strong>
    <em>Tā de gēge èrshíwǔ suì le, tā duō dà le?</em>
    (Her brother is 25, how old is she?)
4.  <strong>昨天的西瓜可能卖多少钱？</strong>
    <em>Zuótiān de xīguā kěnéng mài duōshao qián?</em>
    (How much might the watermelon have been yesterday?)
5.  <strong>王老师是新老师吗？</strong>
    <em>Wáng lǎoshī shì xīn lǎoshī ma?</em>
    (Is Teacher Wang a new teacher?)

---

# Phonetics: Intonation of Affirmative-Negative Questions

Stress the affirmative part, lightly pronounce the negative part, and speak the overlapping part quickly. The intonation falls gradually after the stress.

*   明天你<strong>去</strong>不去银行？ ↘ (Are you going to the bank tomorrow?)
*   这件衣服你<strong>喜</strong>欢不喜欢？ ↘ (Do you like this piece of clothing?)
*   十一点多了，你<strong>睡</strong>不睡觉？ ↘ (It's past 11, are you going to sleep?)

---

# Characters

**1. Radicals**
*   <strong>疒</strong> (Sickness): e.g., <strong>病</strong> (bìng - sickness), <strong>疯</strong> (fēng - crazy).
*   <strong>冫</strong> (Ice/Two dots water): e.g., <strong>冷</strong> (lěng - cold), <strong>冰</strong> (bīng - ice).
`}]},G_={id:"hsk2-m12",level:wt.HSK2,title:"State & Degree (Lesson 12)",description:'Describing how actions are done with "De", Comparisons with "Bi" and "De".',lessons:[{id:"hsk2-l12-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在教室 (In the classroom)

<strong>A: 你每天早上几点起床？</strong>
<em>Nǐ měi tiān zǎoshang jǐ diǎn qǐ chuáng?</em>
(What time do you get up every morning?)

<strong>B: 六点多。</strong>
<em>Liù diǎn duō.</em>
(A little after six.)

<strong>A: 你比我早起一个小时。</strong>
<em>Nǐ bǐ wǒ zǎo qǐ yí ge xiǎoshí.</em>
(You get up an hour earlier than me.)

<strong>B: 我睡得也早，我每天晚上十点就睡觉。早睡早起身体好。</strong>
<em>Wǒ shuì de yě zǎo, wǒ měi tiān wǎnshang shí diǎn jiù shuì jiào. Zǎo shuì zǎo qǐ shēntǐ hǎo.</em>
(I also go to bed early, I go to sleep at ten every night. Early to bed and early to rise makes you healthy.)

---

# Text 2: 在朋友家 (At a friend's house)

<strong>A: 再来点儿米饭吧，你吃得太少了。</strong>
<em>Zài lái diǎnr mǐfàn ba, nǐ chī de tài shǎo le.</em>
(Have some more rice, you ate too little.)

<strong>B: 不少了，今天吃得很好，太谢谢你了。</strong>
<em>Bù shǎo le, jīntiān chī de hěn hǎo, tài xièxie nǐ le.</em>
(Not little, I ate very well today, thank you so much.)

<strong>A: 你做饭做得怎么样？</strong>
<em>Nǐ zuò fàn zuò de zěnmeyàng?</em>
(How is your cooking?)

<strong>B: 不怎么样，我妻子比我做得好。</strong>
<em>Bù zěnmeyàng, wǒ qīzi bǐ wǒ zuò de hǎo.</em>
(Not great, my wife cooks better than me.)

---

# Text 3: 在家门口 (Outside the house)

<strong>A: 下雪了，今天真冷。</strong>
<em>Xià xuě le, jīntiān zhēn lěng.</em>
(It's snowing, it's really cold today.)

<strong>B: 有零下10度吧？</strong>
<em>Yǒu líng xià shí dù ba?</em>
(Is it 10 degrees below zero?)

<strong>A: 是啊，你穿得太少了，我们进房间吧。</strong>
<em>Shì a, nǐ chuān de tài shǎo le, wǒmen jìn fángjiān ba.</em>
(Yes, you are wearing too little, let's go inside.)

<strong>B: 好吧。</strong>
<em>Hǎo ba.</em>
(Okay.)

---

# Text 4: 在家里 (At home)

<strong>A: 你在忙什么呢？</strong>
<em>Nǐ zài máng shénme ne?</em>
(What are you busy with?)

<strong>B: 我弟弟让我帮他找个房子，现在他家离公司有点儿远。</strong>
<em>Wǒ dìdi ràng wǒ bāng tā zhǎo ge fángzi, xiànzài tā jiā lí gōngsī yǒudiǎnr yuǎn.</em>
(My younger brother asked me to help him find a house, his home is a bit far from the company now.)

<strong>A: 住得远真的很累！</strong>
<em>Zhù de yuǎn zhēn de hěn lèi!</em>
(Living far away is really tiring!)

<strong>B: 是啊，他也希望能住得近一点儿。</strong>
<em>Shì a, tā yě xīwàng néng zhù de jìn yìdiǎnr.</em>
(Yeah, he also hopes to live a bit closer.)

---

# Grammar Notes

## 1. The Particle "得" (de) for State Complements
Used after a verb to introduce a complement describing the state or degree of the action.

> Structure: Verb + 得 + Adjective/Complement

*   他<strong>说得</strong>很好。 (He speaks very well.)
*   我<strong>起得</strong>很早。 (I get up very early.)

**With Objects:**
If the verb has an object, repeat the verb.
*   他(说)汉语**说得**很好。 (He speaks Chinese very well.)

**Negation:**
Place "不" after "得".
*   他**说得**不好。 (He doesn't speak well.)

**Questions:**
Use "Adj + 不 + Adj" form.
*   他**说得**好不好？ (Does he speak well?)

## 2. Comparison using "比" with State Complements
When comparing the degree of an action.

> Structure 1: A + 比 + B + Verb + 得 + Adjective
> Structure 2: A + Verb + 得 + 比 + B + Adjective

*   他**比**我**学得**好。 (He learns better than I do.)
*   我妻子**做得**比**我**好。 (My wife cooks better than me.)
`},{id:"hsk2-l12-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>穿</strong> | chuān | v. | to wear |
| <strong>得</strong> | de | part. | structural particle |
| <strong>妻子</strong> | qīzi | n. | wife |
| <strong>雪</strong> | xuě | n. | snow |
| <strong>零</strong> | líng | num. | zero |
| <strong>度</strong> | dù | n. | degree |
| <strong>进</strong> | jìn | v. | to enter |
| <strong>弟弟</strong> | dìdi | n. | younger brother |
| <strong>近</strong> | jìn | adj. | near, close |
`},{id:"hsk2-l12-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>妻子</strong> (qīzi) - <em>Match with Image B (Couple hugging)</em>
2.  <strong>睡觉</strong> (shuì jiào) - <em>Match with Image D (Woman sleeping)</em>
3.  <strong>房间</strong> (fángjiān) - <em>Match with Image A (Bedroom interior)</em>
4.  <strong>下雪</strong> (xià xuě) - <em>Match with Image E (Snowy scene)</em>
5.  <strong>起床</strong> (qǐ chuáng) - <em>Match with Image C (Waking up)</em>
6.  <strong>房子</strong> (fángzi) - <em>Match with Image F (House exterior)</em>

---

# Comprehension Questions

1.  <strong>她为什么每天晚上十点就睡觉？</strong>
    <em>Tā wèi shénme měi tiān wǎnshang shí diǎn jiù shuì jiào?</em>
    (Why does she go to sleep at 10 every night?)
2.  <strong>他们家谁做饭做得好？</strong>
    <em>Tāmen jiā shéi zuò fàn zuò de hǎo?</em>
    (Who cooks well in their family?)
3.  <strong>今天天气怎么样？</strong>
    <em>Jīntiān tiānqì zěnmeyàng?</em>
    (How is the weather today?)
4.  <strong>她这两天在忙什么呢？</strong>
    <em>Tā zhè liǎng tiān zài máng shénme ne?</em>
    (What is she busy with these days?)
5.  <strong>她弟弟为什么要找新的房子？</strong>
    <em>Tā dìdi wèi shénme yào zhǎo xīn de fángzi?</em>
    (Why does her younger brother want to find a new house?)

---

# Phonetics: Intonation of Alternative Questions

Stress the alternatives provided. The first part rises in intonation and is spoken relatively slowly, while the second part falls in intonation.

*   你喜欢吃米饭<strong>还是</strong>吃面条？ ↘ (Do you like rice or noodles?)
*   你想今天去<strong>还是</strong>明天去？ ↘ (Do you want to go today or tomorrow?)
*   你去学校是开车<strong>还是</strong>坐车？ ↘ (Do you drive or take a bus to school?)

---

# Characters

**1. Radicals**
*   <strong>止</strong> (Stop/Toe): e.g., <strong>趾</strong> (zhǐ - toe), <strong>步</strong> (bù - step).
*   <strong>门</strong> (Door/Frame): e.g., <strong>同</strong> (tóng - same), <strong>网</strong> (wǎng - net).
`}]},V_={id:"hsk2-m13",level:wt.HSK2,title:"Status & Direction (Lesson 13)",description:'Describing continuous states with "Zhe" and asking for directions.',lessons:[{id:"hsk2-l13-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在办公室 (In the office)

<strong>A: 门开着呢，请进。</strong>
<em>Mén kāi zhe ne, qǐng jìn.</em>
(The door is open, please come in.)

<strong>B: 请问，张先生在吗？</strong>
<em>Qǐngwèn, Zhāng xiānsheng zài ma?</em>
(Excuse me, is Mr. Zhang here?)

<strong>A: 他出去了。你下午再来吧。</strong>
<em>Tā chūqu le. Nǐ xiàwǔ zài lái ba.</em>
(He went out. Come back in the afternoon.)

<strong>B: 好的，谢谢！</strong>
<em>Hǎo de, xièxie!</em>
(Okay, thank you!)

---

# Text 2: 在办公室 (In the office)

<strong>A: 那个正在说话的女孩儿是谁？</strong>
<em>Nàge zhèngzài shuōhuà de nǚháir shì shéi?</em>
(Who is that girl who is talking?)

<strong>B: 我知道她的名字，她姓杨，叫杨笑笑，她姐姐是我同学。</strong>
<em>Wǒ zhīdào tā de míngzi, tā xìng Yáng, jiào Yáng Xiàoxiao, tā jiějie shì wǒ tóngxué.</em>
(I know her name, her surname is Yang, called Yang Xiaoxiao, her older sister is my classmate.)

<strong>A: 那个手里拿着铅笔的呢？</strong>
<em>Nàge shǒu li názhe qiānbǐ de ne?</em>
(What about the one holding a pencil in her hand?)

<strong>B: 我不认识。</strong>
<em>Wǒ bú rènshi.</em>
(I don't know her.)

---

# Text 3: 在运动场 (On the playground)

<strong>A: 听说你有女朋友了？我认识她吗？</strong>
<em>Tīngshuō nǐ yǒu nǚpéngyou le? Wǒ rènshi tā ma?</em>
(I heard you have a girlfriend? Do I know her?)

<strong>B: 就是我们班那个长着两个大眼睛，非常爱笑的女孩儿。</strong>
<em>Jiù shì wǒmen bān nàge zhǎngzhe liǎng ge dà yǎnjing, fēicháng ài xiào de nǚháir.</em>
(She is the girl in our class with two big eyes who loves to laugh.)

<strong>A: 她不是有男朋友吗？</strong>
<em>Tā bú shì yǒu nánpéngyou ma?</em>
(Doesn't she have a boyfriend?)

<strong>B: 那个已经是她的前男友了。</strong>
<em>Nàge yǐjīng shì tā de qián nányǒu le.</em>
(That one is already her ex-boyfriend.)

---

# Text 4: 在路上 (On the road)

<strong>A: 请问，这儿离新京宾馆远吗？</strong>
<em>Qǐngwèn, zhèr lí Xīnjīng Bīnguǎn yuǎn ma?</em>
(Excuse me, is Xinjing Hotel far from here?)

<strong>B: 不远，走路二十分钟就到。</strong>
<em>Bú yuǎn, zǒu lù èrshí fēnzhōng jiù dào.</em>
(Not far, it takes 20 minutes to walk there.)

<strong>A: 你能告诉我怎么走吗？</strong>
<em>Nǐ néng gàosu wǒ zěnme zǒu ma?</em>
(Can you tell me how to get there?)

<strong>B: 从这儿一直往前走，到了前面的路口再往右走。</strong>
<em>Cóng zhèr yìzhí wǎng qián zǒu, dàole qiánmiàn de lùkǒu zài wǎng yòu zǒu.</em>
(Walk straight ahead from here, and turn right when you reach the intersection ahead.)

---

# Grammar Notes

## 1. The Aspect Particle "着" (zhe)
Added to a verb to indicate the continuation of an action or a state.

> Structure: Verb + 着 (+ Object)

*   门<strong>开着</strong>。 (The door is open.)
*   他们<strong>穿</strong>着红色的衣服。 (They are wearing red clothes.)
*   她<strong>拿</strong>着铅笔。 (She is holding a pencil.)

**Negation:** Add "没" before the verb.
*   门**没开着**。 (The door is not open.)

## 2. The Rhetorical Question "不是……吗"
Used to remind someone of something or express confusion/dissatisfaction. Meaning "Isn't it true that...?"

*   **不是**说今天有雨**吗**？ (Didn't they say it would rain today?)
*   你**不是**北京人**吗**？ (Aren't you from Beijing?)
*   她**不是**有男朋友了**吗**？ (Doesn't she have a boyfriend?)

## 3. The Preposition "往" (wǎng)
Used to indicate direction.

> Structure: 往 + Direction + Verb

*   从这儿一直**往**前走。 (Walk straight forward from here.)
*   **往**左走是医院。 (Go left is the hospital.)
*   到了前面的路口再**往**右走。 (Turn right at the intersection ahead.)
`},{id:"hsk2-l13-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>着</strong> | zhe | part. | aspect particle |
| <strong>手</strong> | shǒu | n. | hand |
| <strong>拿</strong> | ná | v. | to hold, to take |
| <strong>铅笔</strong> | qiānbǐ | n. | pencil |
| <strong>班</strong> | bān | n. | class |
| <strong>长</strong> | zhǎng | v. | to grow, to develop |
| <strong>笑</strong> | xiào | v. | to smile, to laugh |
| <strong>宾馆</strong> | bīnguǎn | n. | hotel |
| <strong>一直</strong> | yìzhí | adv. | straight, all along |
| <strong>往</strong> | wǎng | prep. | towards |
| <strong>路口</strong> | lùkǒu | n. | intersection, crossing |
`},{id:"hsk2-l13-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>铅笔</strong> (qiānbǐ) - <em>Match with Image C (Pencil)</em>
2.  <strong>手</strong> (shǒu) - <em>Match with Image E (Hand holding something) or A (Holding hands)</em>
3.  <strong>宾馆</strong> (bīnguǎn) - <em>Match with Image F (Hotel room)</em>
4.  <strong>拿</strong> (ná) - <em>Match with Image E (Hand holding pepper)</em>
5.  <strong>眼睛</strong> (yǎnjing) - <em>Match with Image B (Eye)</em>
6.  <strong>路口</strong> (lùkǒu) - <em>Match with Image D (Intersection)</em>

---

# Comprehension Questions

1.  <strong>张先生去哪儿了？</strong>
    <em>Zhāng xiānsheng qù nǎr le?</em>
    (Where did Mr. Zhang go?)
2.  <strong>杨笑笑是谁？</strong>
    <em>Yáng Xiàoxiao shì shéi?</em>
    (Who is Yang Xiaoxiao?)
3.  <strong>他的女朋友是谁？</strong>
    <em>Tā de nǚpéngyou shì shéi?</em>
    (Who is his girlfriend?)
4.  <strong>“前男友”是什么意思？</strong>
    <em>“Qián nányǒu” shì shénme yìsi?</em>
    (What does "ex-boyfriend" mean?)
5.  <strong>去新京宾馆怎么走？</strong>
    <em>Qù Xīnjīng Bīnguǎn zěnme zǒu?</em>
    (How to get to Xinjing Hotel?)

---

# Phonetics: Intonation of Imperative Sentences

When the tone is euphemistic (gentle/polite), the pitch is relatively low. Rise slightly at the end of the first clause, and fall slowly at the end.

*   让 我们 休息 休息 吧。 ↘ (Let's take a rest.)
*   快点儿 下 课 吧。 ↘ (Let's finish class quickly.)
*   请 坐 吧。 ↘ (Please sit down.)

---

# Characters

**1. Radicals**
*   <strong>斤</strong> (Axe/Catty): e.g., <strong>新</strong> (xīn - new), <strong>所</strong> (suǒ - place).
*   <strong>页</strong> (Page/Head): e.g., <strong>颜</strong> (yán - face/color), <strong>须</strong> (xū - beard/must).
`}]},O_={id:"hsk2-m14",level:wt.HSK2,title:"Past Experiences (Lesson 14)",description:'Talking about past experiences with "Guo" and frequency.',lessons:[{id:"hsk2-l14-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在教室 (In the classroom)

<strong>A: 你看过那个电影没有？</strong>
<em>Nǐ kànguo nàge diànyǐng méiyǒu?</em>
(Have you seen that movie?)

<strong>B: 没看过，听说很有意思。</strong>
<em>Méi kànguo, tīngshuō hěn yǒu yìsi.</em>
(I haven't seen it, I heard it's very interesting.)

<strong>A: 那我们下个星期一起去看吧？</strong>
<em>Nà wǒmen xià ge xīngqī yìqǐ qù kàn ba?</em>
(Then let's go see it together next week?)

<strong>B: 可以，但是我女朋友也想去。</strong>
<em>Kěyǐ, dànshì wǒ nǚpéngyou yě xiǎng qù.</em>
(Sure, but my girlfriend wants to go too.)

---

# Text 2: 在办公室 (In the office)

<strong>A: 听说你去过中国，还想去吗？</strong>
<em>Tīngshuō nǐ qùguo Zhōngguó, hái xiǎng qù ma?</em>
(I heard you have been to China, do you still want to go?)

<strong>B: 我虽然去过好几次，但是还想再去玩儿玩儿。</strong>
<em>Wǒ suīrán qùguo hǎojǐ cì, dànshì hái xiǎng zài qù wánrwanr.</em>
(Although I have been there several times, I still want to go there to play again.)

<strong>A: 那我们一起去吧。</strong>
<em>Nà wǒmen yìqǐ qù ba.</em>
(Then let's go together.)

<strong>B: 好啊，到时候我给你打电话。</strong>
<em>Hǎo a, dào shíhou wǒ gěi nǐ dǎ diànhuà.</em>
(Okay, I will call you then.)

---

# Text 3: 在房间 (In the room)

<strong>A: 明天天气怎么样？</strong>
<em>Míngtiān tiānqì zěnmeyàng?</em>
(How is the weather tomorrow?)

<strong>B: 虽然是晴天，但是很冷。</strong>
<em>Suīrán shì qíngtiān, dànshì hěn lěng.</em>
(Although it is sunny, it is very cold.)

<strong>A: 那还能去跑步吗？</strong>
<em>Nà hái néng qù pǎo bù ma?</em>
(Then can we still go running?)

<strong>B: 可以，但是你自己去吧，我还有很多事情要做。</strong>
<em>Kěyǐ, dànshì nǐ zìjǐ qù ba, wǒ hái yǒu hěn duō shìqing yào zuò.</em>
(Yes, but you go by yourself, I still have a lot of things to do.)

---

# Text 4: 在商店 (In a store)

<strong>A: 你在这个商店买过东西没有？</strong>
<em>Nǐ zài zhège shāngdiàn mǎiguo dōngxi méiyǒu?</em>
(Have you bought anything in this store?)

<strong>B: 买过一次，这儿的东西还可以，就是不便宜。</strong>
<em>Mǎiguo yí cì, zhèr de dōngxi hái kěyǐ, jiùshi bù piányi.</em>
(I bought once, the things here are okay, just not cheap.)

<strong>A: 我喜欢这件衣服，但是觉得有点儿贵。</strong>
<em>Wǒ xǐhuan zhè jiàn yīfu, dànshì juéde yǒudiǎnr guì.</em>
(I like this piece of clothing, but I feel it is a bit expensive.)

<strong>B: 两百块还可以，喜欢就买吧。</strong>
<em>Liǎngbǎi kuài hái kěyǐ, xǐhuan jiù mǎi ba.</em>
(Two hundred yuan is okay, if you like it then buy it.)

---

# Grammar Notes

## 1. The Dynamic Particle "过" (guo)
Used after a verb to indicate a past experience that has not continued to the present.

> Structure: Verb + 过 + Object

*   他们<strong>来过</strong>我家。 (They have been to my house.)
*   我<strong>看过</strong>那个电影。 (I have seen that movie.)
*   我<strong>去过</strong>中国。 (I have been to China.)

**Negation:** Use "没(有)" before the verb.
*   我<strong>没(有)看过</strong>那个电影。 (I haven't seen that movie.)

**Question:** Add "没有" at the end.
*   你<strong>去过</strong>中国<strong>没有</strong>？ (Have you been to China?)

## 2. The Conjunction "虽然……，但是……"
Used to connect two clauses to express a transitional relationship (Although..., but...).

*   <strong>虽然</strong>外面很冷，<strong>但是</strong>房间里很热。 (Although it is cold outside, it is hot inside the room.)
*   <strong>虽然</strong>汉字很难，<strong>但是</strong>我很喜欢写汉字。 (Although Chinese characters are difficult, I like writing them.)

## 3. The Complement of Frequency "次" (cì)
Used to indicate the number of times an action has taken place.

> Structure: Verb + 过 + Number + 次 + Object

*   我们<strong>看过三次</strong>电影。 (We have watched movies three times.)

**Position with Objects:**
*   **Place Noun:** Can be before or after the object.
    *   我们<strong>去过三次</strong>北京。 / 我们<strong>去过北京</strong>三次。 (We have been to Beijing three times.)
*   **Personal Pronoun:** Must be after the object.
    *   我们<strong>找过他</strong>三次。 (We have looked for him three times.)
`},{id:"hsk2-l14-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>有意思</strong> | yǒu yìsi | adj. | interesting |
| <strong>但是</strong> | dànshì | conj. | but, still, yet |
| <strong>虽然</strong> | suīrán | conj. | although, though |
| <strong>次</strong> | cì | m. | time (measure word for frequency) |
| <strong>玩儿</strong> | wánr | v. | to play, to have fun |
| <strong>晴</strong> | qíng | adj. | sunny, fine, clear |
| <strong>百</strong> | bǎi | num. | hundred |
`},{id:"hsk2-l14-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>电影院</strong> (diànyǐngyuàn) - <em>Match with Image D (Cinema)</em>
2.  <strong>等</strong> (děng) - <em>Match with Image A (Waiting/Expecting context) or potentially unlisted image. Based on text: 5 is 'dǎ diànhuà' (Call), 6 is 'wánr' (Play). So 'děng' (Wait) is likely associated with A or unlisted context.</em>
3.  <strong>晴</strong> (qíng) - <em>Match with Image E (Clear Sky)</em>
4.  <strong>一百</strong> (yībǎi) - <em>Match with Image F (100)</em>
5.  <strong>打电话</strong> (dǎ diànhuà) - <em>Match with Image C (Dialing phone)</em>
6.  <strong>玩儿</strong> (wánr) - <em>Match with Image B (Playing)</em>

---

# Comprehension Questions

1.  <strong>他们看过那个电影吗？</strong>
    <em>Tāmen kànguo nàge diànyǐng ma?</em>
    (Have they seen that movie?)
2.  <strong>他们想几个人去看电影？</strong>
    <em>Tāmen xiǎng jǐ ge rén qù kàn diànyǐng?</em>
    (How many people do they want to go watch the movie?)
3.  <strong>他们想来中国做什么？</strong>
    <em>Tāmen xiǎng lái Zhōngguó zuò shénme?</em>
    (What do they want to do in China?)
4.  <strong>为什么她明天不能去跑步？</strong>
    <em>Wèi shénme tā míngtiān bù néng qù pǎo bù?</em>
    (Why can't she go running tomorrow?)
5.  <strong>女的觉得这个商店的东西怎么样？</strong>
    <em>Nǚde juéde zhège shāngdiàn de dōngxi zěnmeyàng?</em>
    (What does the woman think of the things in this shop?)

---

# Phonetics: Intonation of Exclamatory Sentences

Exclamatory sentences in Chinese generally have a falling intonation.

*   今天天气真好啊！ ↘ (The weather is so good today!)
*   这个汉字真难写啊！ ↘ (This character is so hard to write!)
*   这件衣服太漂亮了！ ↘ (This dress is so beautiful!)

---

# Characters

**1. Radicals**
*   <strong>⻗</strong> (Rain): e.g., <strong>雪</strong> (xuě - snow), <strong>雾</strong> (wù - fog).
*   <strong>贝</strong> (Shell): Related to money/valuables. e.g., <strong>财</strong> (cái - wealth), <strong>货</strong> (huò - goods).
`}]},F_={id:"hsk2-m15",level:wt.HSK2,title:"Future & Complaints (Lesson 15)",description:'Expressing future events with "Yao...le" and complaints with "Dou...le".',lessons:[{id:"hsk2-l15-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在朋友家 (At a friend's house)

<strong>A: 今天是12月20日，新年就要到了。</strong>
<em>Jīntiān shì shí'èr yuè èrshí rì, xīnnián jiù yào dào le.</em>
(Today is Dec 20, New Year is coming.)

<strong>B: 新年你准备做什么？</strong>
<em>Xīnnián nǐ zhǔnbèi zuò shénme?</em>
(What are you planning for New Year?)

<strong>A: 我想去北京旅游，北京很不错，我去过一次。</strong>
<em>Wǒ xiǎng qù Běijīng lǚyóu, Běijīng hěn búcuò, wǒ qùguo yí cì.</em>
(I want to travel to Beijing, it's great, I've been once.)

<strong>B: 你买票了吗？</strong>
<em>Nǐ mǎi piào le ma?</em>
(Have you bought tickets?)

<strong>A: 还没有呢，明天就去火车站买票。</strong>
<em>Hái méiyǒu ne, míngtiān jiù qù huǒchēzhàn mǎi piào.</em>
(Not yet, I'll go to the train station tomorrow to buy tickets.)

---

# Text 2: 在公司 (In the company)

<strong>A: 时间过得真快，新的一年快要到了！</strong>
<em>Shíjiān guò de zhēn kuài, xīn de yì nián kuàiyào dào le!</em>
(Time flies, the new year is coming soon!)

<strong>B: 是啊，谢谢大家这一年对我的帮助！</strong>
<em>Shì a, xièxie dàjiā zhè yì nián duì wǒ de bāngzhù!</em>
(Yes, thank you everyone for your help this year!)

<strong>C: 希望我们的公司明年更好！</strong>
<em>Xīwàng wǒmen de gōngsī míngnián gèng hǎo!</em>
(Hope our company gets better next year!)

---

# Text 3: 在车站 (At the station)

<strong>A: 你妹妹怎么还没来？都八点四十了！</strong>
<em>Nǐ mèimei zěnme hái méi lái? Dōu bā diǎn sìshí le!</em>
(Why hasn't your sister come yet? It's already 8:40!)

<strong>B: 我们再等她几分钟吧。</strong>
<em>Wǒmen zài děng tā jǐ fēnzhōng ba.</em>
(Let's wait a few more minutes.)

<strong>A: 都等她半个小时了！</strong>
<em>Dōu děng tā bàn ge xiǎoshí le!</em>
(We've waited half an hour!)

<strong>B: 她来了，我听见她说话了。</strong>
<em>Tā lái le, wǒ tīngjiàn tā shuō huà le.</em>
(She's here, I hear her speaking.)

---

# Text 4: 在咖啡馆门口 (Outside a coffee shop)

<strong>A: 天阴了，我要回去了。</strong>
<em>Tiān yīn le, wǒ yào huíqu le.</em>
(It's overcast, I'm going back.)

<strong>B: 好的。快要下雨了，你路上慢点儿。</strong>
<em>Hǎo de. Kuàiyào xià yǔ le, nǐ lùshang màndiǎnr.</em>
(Okay. It's about to rain, take it slow on the way.)

<strong>A: 没关系，我坐公共汽车。</strong>
<em>Méi guānxi, wǒ zuò gōnggòng qìchē.</em>
(It's fine, I'm taking the bus.)

<strong>B: 好的。再见。</strong>
<em>Hǎo de. Zàijiàn.</em>
(Okay. Bye.)

---

# Grammar Notes

## 1. The Structure "要……了"
Used to indicate that an action or situation is going to happen soon.

Forms:
*   <strong>快要……了</strong>
*   <strong>快……了</strong>
*   <strong>就要……了</strong>
*   <strong>要……了</strong>

Examples:
*   新的一年<strong>快要到</strong>了。 (The New Year is coming soon.)
*   火车<strong>快要来</strong>了。 (The train is coming soon.)
*   <strong>要下雨</strong>了。 (It's going to rain.)

**Note:** If there is a specific time adverbial in the sentence (e.g., "next month", "tomorrow"), only **就要……了** can be used.
*   **下个月**我们**就要**回国了。 (We are going back to our country next month.)
*   **明天**姐姐**就要**走了。 (Older sister is leaving tomorrow.)

## 2. The Structure "都……了"
"都……了" means "already". It often conveys a tone of emphasis or complaint/dissatisfaction about something being late or excessive.

*   <strong>都</strong>8点了，快点儿起床吧。 (It's already 8 o'clock, get up quickly.)
*   你<strong>都</strong>十岁了，可以自己洗衣服了。 (You are already ten years old, you can wash your own clothes.)
*   <strong>都</strong>等她半个小时了。 (We have already waited for her for half an hour.)
`},{id:"hsk2-l15-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>日</strong> | rì | n. | day, sun |
| <strong>新年</strong> | xīnnián | n. | New Year |
| <strong>票</strong> | piào | n. | ticket |
| <strong>火车站</strong> | huǒchēzhàn | n. | railway station |
| <strong>大家</strong> | dàjiā | pron. | everybody |
| <strong>更</strong> | gèng | adv. | more, to a greater extent |
| <strong>妹妹</strong> | mèimei | n. | younger sister |
| <strong>阴</strong> | yīn | adj. | overcast, cloudy |
`},{id:"hsk2-l15-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

<strong>Match the words with the corresponding images (Mental Exercise)</strong>

1.  <strong>新年</strong> (xīnnián) - <em>Match with Image D (Happy New Year)</em>
2.  <strong>票</strong> (piào) - <em>Match with Image A (Tickets/Passports)</em>
3.  <strong>旅游</strong> (lǚyóu) - <em>Match with Image E (Crowd with luggage/Travelers)</em>
4.  <strong>帮助</strong> (bāngzhù) - <em>Match with Image B (Helping up rock)</em>
5.  <strong>阴</strong> (yīn) - <em>Match with Image F (Cloudy sky)</em>
6.  <strong>火车站</strong> (huǒchēzhàn) - <em>Match with Image C (Train)</em>

---

# Comprehension Questions

1.  <strong>新年的时候他准备做什么？</strong>
    <em>Xīnnián de shíhou tā zhǔnbèi zuò shénme?</em>
    (What does he plan to do during New Year?)
2.  <strong>明天他有什么事要做？</strong>
    <em>Míngtiān tā yǒu shénme shì yào zuò?</em>
    (What does he have to do tomorrow?)
3.  <strong>他们两个人在等谁呢？</strong>
    <em>Tāmen liǎng ge rén zài děng shéi ne?</em>
    (Who are the two of them waiting for?)
4.  <strong>他们等的人来了没有？</strong>
    <em>Tāmen děng de rén láile méiyǒu?</em>
    (Did the person they are waiting for arrive?)
5.  <strong>外面的天气怎么样？</strong>
    <em>Wàimiàn de tiānqì zěnmeyàng?</em>
    (How is the weather outside?)

---

# Culture: Spring Festival (春节)

The **Spring Festival (Chūnjié)** is the Chinese New Year, the most important traditional festival in China. It is a time for family reunion. People travel home to be with their families (Chunyun).

Activities include:
*   Pasting couplets (贴对联)
*   Setting off firecrackers (放鞭炮)
*   Eating dumplings (吃饺子)
*   Watching the Spring Festival Gala (看春节联欢晚会)
*   Children receive lucky money (压岁钱) in red envelopes.

---

# Characters

**1. Radicals**
*   <strong>山</strong> (Mountain): e.g., <strong>岭</strong> (lǐng - ridge), <strong>峡</strong> (xiá - gorge).
*   <strong>大</strong> (Big/Man): e.g., <strong>天</strong> (tiān - sky/day), <strong>夫</strong> (fū - husband).
`}]},Y_={id:"hsk3-m1",level:wt.HSK3,title:"Travel & Weather",description:"Planning trips and talking about the weather.",lessons:[]},W_={id:"hsk1-m3",level:wt.HSK1,title:"谢谢你！(Thank you!)",description:"Learn how to express gratitude, say goodbye, and understand Chinese neutral tones, tone marking, and basic characters.",lessons:[{id:"hsk1-l3-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# 课文 (Texts)

## Text 1 (Audio 02-1)
<strong>A: 谢谢！</strong>
<em>Xièxie!</em>
(Cảm ơn!)

<strong>B: 不谢！</strong>
<em>Bú xiè!</em>
(Không cần cảm ơn đâu!)

---

## Text 2 (Audio 02-2)
<strong>A: 谢谢你！</strong>
<em>Xièxie nǐ!</em>
(Cảm ơn anh/cô!)

<strong>B: 不客气！</strong>
<em>Bú kèqi!</em>
(Đừng khách sáo!)

---

## Text 3 (Audio 02-3)
<strong>A: 再见！</strong>
<em>Zàijiàn!</em>
(Tạm biệt!)

<strong>B: 再见！</strong>
<em>Zàijiàn!</em>
(Tạm biệt!)

---

# 拼音 (Phonetics)

## 1. 汉语拼音的声母和韵母(2) (Thanh mẫu và vận mẫu trong cách ghép âm của tiếng Trung Quốc 2)

* **声母 Thanh mẫu (2):** zh, ch, sh, r, z, c, s
* **韵母 Vận mẫu (2):** ou, iou (iu), an, ian, uan, üan, en, in, uen (un), ün, ang, iang, uang, eng, ing, ueng, ong, iong

## 2. 汉语的轻声 (Thanh nhẹ trong tiếng Trung Quốc)
汉语中除了四声以外，还有一个读得又短又轻的声调，叫作“轻声”。
(Trong tiếng Trung Quốc, ngoài bốn thanh cơ bản còn có một thanh được phát âm vừa ngắn vừa nhẹ, thanh đó được gọi là thanh nhẹ.)
* **例如 (Ví dụ):** māma (妈妈), yéye (爷爷), nǎinai (奶奶), bàba (爸爸)

## 3. 拼音规则(1) (Các quy tắc ghép âm 1)

### (1) 标调法 (Cách ghi dấu thanh điệu)
汉语拼音的声调必须标注在元音字母上。当一个韵母含有两个或者两个以上元音字母时，调号标注在开口度较大的那个元音字母上。调号标注的主要元音顺序为 a、o、e、i、u、ü，但iu是个例外，iu是iou的省略形式，声调标注在u上。轻声音节不标声调。
(Trong phiên âm của tiếng Trung Quốc, dấu thanh điệu phải được ghi trên nguyên âm. Nếu vận mẫu có hai nguyên âm hoặc nhiều hơn, dấu thanh điệu được ghi trên nguyên âm đòi hỏi phải mở miệng rộng hơn khi phát âm. Trật tự của các nguyên âm chủ yếu khi ghi dấu thanh điệu là a, o, e, i, u, ü; nhưng iu là trường hợp ngoại lệ – iu là hình thức giản lược của iou, dấu thanh điệu được ghi trên u. Các âm tiết mang thanh nhẹ không có dấu thanh điệu.)

### (2) 省写 (Cách viết giản lược)
iou、uei、uen 前面加声母的时候，写成：iu、ui、un。例如niu、gui、lun。
(Khi thanh mẫu được thêm vào trước iou, uei, uen thì các vận mẫu này được viết giản lược thành: iu, ui, un. Ví dụ: niu, gui, lun.)
`},{id:"hsk1-l3-vocab",title:"New Words & Classroom Expressions",type:W.VOCABULARY,content:`
# 生词 (New Words)

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| **谢谢** | xièxie | đgt. | cảm ơn |
| **不** | bù | phó. | không cần, không, đừng |
| **不客气** | bú kèqi | | đừng khách sáo |
| **再见** | zàijiàn | đgt. | tạm biệt |

---

# 课堂用语 (Mẫu câu thường dùng trong lớp)

| Hanzi | Pinyin | Meaning (Audio 02-10) |
| :--- | :--- | :--- |
| **打开书。** | Dǎkāi shū. | Hãy mở sách ra. |
| **请大声读。** | Qǐng dà shēng dú. | Hãy đọc to lên. |
| **再读一遍。** | Zài dú yí biàn. | Hãy đọc lại lần nữa. |
| **一起读。** | Yìqǐ dú. | Hãy cùng đọc nào. |
| **有问题吗?** | Yǒu wèntí ma? | Có thắc mắc gì không? |
`},{id:"hsk1-l3-exercise",title:"Exercises & Characters",type:W.EXERCISE,content:`
# 练习 (Exercises)

## 1. 看图片，朗读下列单音节词语 (Audio 02-5)
*(Sau đây là các từ có một âm tiết. Hãy xem hình và đọc to những từ này.)*
* shān 山, zhōng 钟, yáng 羊, líng 零, cài 菜
* shǒu 手, xióng 熊, yún 云, xīng 星, yuán 圆
* rén 人, chuán 船, chuáng 床, chī 吃, rè 热

## 2. 看图片，朗读下列双音节词语 (Audio 02-6)
*(Sau đây là các từ có hai âm tiết. Hãy xem hình và đọc to những từ này.)*
* bīngxiāng (Tủ lạnh)
* jīdàn (Trứng gà)
* sījī (Tài xế)
* zúqiú (Bóng đá)
* jīchǎng (Sân bay)
* pá shān (Leo núi)
* shǒubiǎo (Đồng hồ đeo tay)
* xióngmāo (Gấu trúc)

## 3. 朗读下列音节，注意轻声的读法 (Audio 02-7)
*(Đọc to các âm tiết sau, chú ý cách phát âm thanh nhẹ.)*
* zhuōzi, fángzi, yǐzi, guìzi
* tāmen, rénmen, wǒmen, dìdi
* yīfu, érzi, xǐhuan, rènshi
* xiānsheng, péngyou, wǎnshang, piàoliang

## 4. 朗读下列音节，注意声调标注的位置 (Audio 02-8)
*(Đọc to các âm tiết sau, chú ý vị trí của các dấu thanh điệu.)*
* xuéxiào, bāng máng, lánqiú, nǚ'ér
* yóu yǒng, shǒubiǎo, zhōngyú, gōngsī
* shíjiān, shēntǐ, kǎoshì, guójiā
* bàozhǐ, hǎochī, xièxie, kèqi

## 5. 朗读下列音节，注意韵母省写的部分 (Audio 02-9)
*(Đọc to các âm tiết sau, chú ý các vận mẫu đã được viết giản lược.)*
* xiūxi, shuì jiào, lúnchuán, niúnǎi
* píjiǔ, ángguì, liúyán, kāi huì
* tǎolùn, zúqiú, Lúndūn, shīrùn
* cánkuì, shuǐguǒ, táozuì, shùnlì

---

# 汉字 (Chữ Hán)

## 1. 汉字的笔画(2) - Các nét của chữ Hán (2)

| 笔画名称 (Tên nét) | 例字 (Chữ Hán) |
| :--- | :--- |
| **横折 (héngzhé - ngang gập)** | **口** (kǒu - miệng), **日** (rì - mặt trời) |
| **竖折 (shùzhé - sổ gập)** | **山** (shān - núi), **出** (chū - ra) |
| **竖钩 (shùgōu - sổ móc)** | **丁** (dīng - can Đinh), **小** (xiǎo - nhỏ) |

## 2. 认识独体字 (Làm quen với chữ đơn / chữ độc thể)

1.  **口 (kǒu):** 本义是嘴巴，字形像人张开的嘴巴。
    *(Nghĩa gốc của 口 là miệng. Chữ này có hình dạng giống cái miệng mở to ra.)*
2.  **见 (jiàn):** 字形上边是“目”，下边是“人”，意思是“睁着眼睛看”。
    *(Phần phía trên của chữ 见 là 目 (con mắt), phần phía dưới là 人 (người). Chữ này có nghĩa là mở to mắt nhìn.)*
3.  **山 (shān):** 字形像起伏的山峰，意思是“山峰”。
    *(山 có nghĩa là núi. Chữ này có hình dạng giống đỉnh núi nhấp nhô.)*
4.  **小 (xiǎo):** 字形像细微的沙，现在意思与“大”相对。
    *(小 có hình dạng giống những hạt cát nhỏ. Ngày nay nó mang nghĩa là nhỏ, trái nghĩa với 大 (lớn).)*
5.  **不 (bù):** 原来表示一种工具，现在虚化为副词，表示否定。
    *(不 lúc đầu chỉ một loại công cụ, ngày nay nó trở thành từ có chức năng ngữ pháp là phó từ, mang nghĩa phủ định không.)*
`}]},J_={id:"hsk1-m4",level:wt.HSK1,title:"她是我的汉语老师 (Lesson 4)",description:"Learn how to ask about someone's identity and nationality using 谁, 哪, and 呢.",lessons:[{id:"hsk1-l4-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在教室 (Trong lớp học)

<strong>A: 她是谁？</strong>
<em>Tā shì shéi?</em>
(Cô ấy là ai vậy?)

<strong>B: 她是我的汉语老师，她叫李月。</strong>
<em>Tā shì wǒ de Hànyǔ lǎoshī, tā jiào Lǐ Yuè.</em>
(Đó là cô giáo dạy tôi tiếng Trung Quốc, cô tên là Lý Nguyệt.)

---

# Text 2: 在图书馆 (Ở thư viện)

<strong>A: 你是哪国人？</strong>
<em>Nǐ shì nǎ guó rén?</em>
(Anh là người nước nào vậy?)

<strong>B: 我是美国人。你呢？</strong>
<em>Wǒ shì Měiguó rén. Nǐ ne?</em>
(Tôi là người Mỹ, còn cô?)

<strong>A: 我是中国人。</strong>
<em>Wǒ shì Zhōngguó rén.</em>
(Tôi là người Trung Quốc.)

---

# Text 3: 看照片 (Xem ảnh)

<strong>A: 他是谁？</strong>
<em>Tā shì shéi?</em>
(Anh ấy là ai thế?)

<strong>B: 他是我同学。</strong>
<em>Tā shì wǒ tóngxué.</em>
(Đó là bạn cùng lớp của tôi.)

<strong>A: 她呢？她是你同学吗？</strong>
<em>Tā ne? Tā shì nǐ tóngxué ma?</em>
(Còn cô ấy? Cô ấy cũng là bạn cùng lớp của cô à?)

<strong>B: 她不是我同学，她是我朋友。</strong>
<em>Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.</em>
(Không phải, cô ấy là bạn tôi.)

---

# Grammar Notes (注释)

## 1. 疑问代词“谁”、“哪” (Đại từ nghi vấn 谁 và 哪)
疑问代词“谁”在疑问句中用来询问人。例如：
(Đại từ nghi vấn 谁 được dùng trong câu hỏi để yêu cầu cho biết thông tin về người nào đó. Ví dụ:)

| 主语 Chủ ngữ | 动词 Động từ | 宾语 Tân ngữ |
| :---: | :---: | :---: |
| 谁 | 是 | 李月？ |
| 她 | 是 | 谁？ |
| 他 | 是 | 谁？ |

疑问代词“哪”用在疑问句中的结构形式为：哪+量词/名词+名词。例如：
(Đại từ nghi vấn 哪 được dùng trong câu hỏi theo cấu trúc: 哪 + lượng từ/danh từ + danh từ. Ví dụ:)
(1) 哪本 (běn, lượng từ dùng cho sách) 书 (shū, sách)？
(2) 哪个 (gè, lượng từ chung) 人？
(3) 你是哪国人？

## 2. 结构助词“的” (Trợ từ kết cấu 的)
名词/代词+的+名词 表达一种所属关系。当“的”后的名词是亲属称谓或者指人的名词时，“的”可以省略。例如：
(Cấu trúc “danh từ/đại từ + 的 + danh từ” được dùng để chỉ quan hệ sở hữu. Khi danh từ đứng sau 的 là danh từ chỉ người hay chỉ cách xưng hô với người thân thì 的 có thể được lược bỏ. Ví dụ:)
(1) 李月是我的老师。
(2) 这 (zhè, đây) 是我的书 (shū, sách)。
(3) 她不是我同学，她是我朋友。

## 3. 疑问助词“呢” (1) (Trợ từ nghi vấn 呢 1)
疑问助词“呢”用在名词或代词后构成疑问句，用于询问上文提到的情况。常用的句式是：A………………。B呢？ 例如：
(Trợ từ nghi vấn 呢 được dùng sau danh từ hay đại từ để đặt câu hỏi nhằm yêu cầu cho biết thông tin về một đối tượng – thông tin này đã được đề cập trong câu trước đó. Mẫu câu thường gặp là: “A.......B呢?” (A... B thì sao?). Ví dụ:)
(1) 我不是老师，我是学生。你呢？
(2) 她叫李月。他呢？
(3) 我是美国人。你呢？
`},{id:"hsk1-l4-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| **她** | tā | đt. | cô ấy, bà ấy... |
| **谁** | shéi | đt. | ai |
| **的** | de | trợ. | được dùng sau định ngữ sở hữu |
| **汉语** | Hànyǔ | dt. | tiếng Trung Quốc |
| **哪** | nǎ | dt. | nào |
| **国** | guó | dt. | quốc gia, đất nước |
| **呢** | ne | trợ. | được dùng ở cuối câu hỏi |
| **他** | tā | đt. | anh ấy, ông ấy... |
| **同学** | tóngxué | dt. | bạn cùng lớp |
| **朋友** | péngyou | dt. | bạn |
`},{id:"hsk1-l4-exercise",title:"Exercises, Phonetics & Characters",type:W.EXERCISE,content:`
# Warm-up (热身)

**给下面的词语选择对应的图片 (Chọn hình tương ứng với các từ ngữ bên dưới.)**
* [Images A-F]

1. <strong>他</strong> (tā)
2. <strong>她</strong> (tā)
3. <strong>汉语老师</strong> (Hànyǔ lǎoshī)
4. <strong>朋友</strong> (péngyou)
5. <strong>同学</strong> (tóngxué)
6. <strong>中国朋友</strong> (Zhōngguó péngyou)

---

# Exercises (练习)

**1. 分角色朗读课文 (Đóng vai các nhân vật trong bài học và đọc to các câu đối thoại.)**

**2. 根据实际情况回答问题 (Trả lời câu hỏi.)**
1. 你是哪国人？ (Nǐ shì nǎ guó rén?)
2. 你叫什么名字？ (Nǐ jiào shénme míngzi?)
3. 你的汉语老师是哪国人？ (Nǐ de Hànyǔ lǎoshī shì nǎ guó rén?)
4. 你的汉语老师叫什么名字？ (Nǐ de Hànyǔ lǎoshī jiào shénme míngzi?)
5. 你的中国朋友是谁？ (Nǐ de Zhōngguó péngyou shì shéi?)

**3. 用本课新学的语言点和词语描述图片 (Sử dụng từ ngữ trong bài để mô tả hình ảnh bên dưới.)**
* [Image: Steve Jobs] <strong>他是乔布斯 (Steve Jobs)，他是 ______ 人。</strong> (Tā shì Qiáobùsī, tā shì ______ rén.)
* [Image: Li Na] <strong>她是李娜 (Li Na)，她是 ______ 人。</strong> (Tā shì Lǐ Nà, tā shì ______ rén.)
* [Image: Two girls drinking coffee] <strong>她叫玛丽 (Mary)，她不是我 ______，她是我 ______。</strong> (Tā jiào Mǎlì, tā bú shì wǒ ______, tā shì wǒ ______.)
* [Image: Group of friends talking] <strong>他叫大卫 (David)，他是我们的 ______。</strong> (Tā jiào Dàwèi, tā shì wǒmen de ______.)

---

# Phonetics (拼音)

**1. 发音辨析：声母zh、ch、sh、r (Sự khác biệt trong cách phát âm: thanh mẫu zh, ch, sh, r)**
zh、ch、sh、r是一组翘舌音，是由翘起的舌尖和硬腭前部配合而发音的。发zh、ch时，舌尖要先和硬腭接触，然后打开一条缝隙让气流通过，发zh时没有强烈的气流呼出，而发ch时呼出的气流很强。发sh时，舌尖不要与硬腭接触，要始终保持一条缝隙。与sh不同，在发r时声带要振动。
(zh, ch, sh, r là các âm uốn lưỡi, được phát âm với sự phối hợp giữa đầu lưỡi (được uốn cong) và phần trước của ngạc cứng. Khi phát âm zh và ch, đầu lưỡi tiếp xúc với ngạc cứng trước rồi mở ra khe hở, nhưng với zh thì không có luồng hơi mạnh thoát ra còn với ch thì luồng hơi được đẩy ra rất mạnh. Khi phát âm sh, đầu lưỡi không tiếp xúc với ngạc cứng, giữa chúng có khe hở. Khác với sh, khi phát âm r, dây thanh sẽ rung lên.)

*Nghe và luyện đọc theo phần ghi âm, chú ý sự khác biệt trong cách phát âm giữa các thanh mẫu:*
* zhīshi | chúshī | shēngrì | shàng chē
* rènshi | chángshí | shìshí | chāorén
* ránshāo | rènao | chū chāi | Chángchéng
* shǒushù | shāngchǎng | chāoshì | chōng zhí

**2. 发音辨析：前鼻音韵母n和后鼻音韵母ng (Sự khác biệt trong cách phát âm: vận mẫu âm mũi trước n và vận mẫu âm mũi sau ng)**
发前鼻音n[n]时舌尖要抵住上齿龈，而发后鼻音ng[ŋ]时，舌头的后部要拱起，舌根向后收缩，抵住软腭；发n[n]时上下齿相对，开口较小，而发ng[ŋ]时开口度较大。
(Khi phát âm n [n], đầu lưỡi áp vào lợi trên; khi phát âm ng [ŋ], phần sau của lưỡi cong vồng lên, lưỡi được uốn cong và thụt về sau, áp chặt vào ngạc mềm. Khi phát âm n [n], răng trên và răng dưới đối nhau, miệng mở hẹp; khi phát âm ng [ŋ], miệng mở rộng hơn.)

*Nghe và luyện đọc theo phần ghi âm:*
* an — ang
* ian — iang
* uan — uang
* en — eng
* in — ing
* uen — ueng

**3. “一”的变调 (Sự biến đổi thanh điệu của 一 yī)**
**(1) “一”在第一、二、三声音节前变成第四声 (Khi đứng trước âm tiết mang thanh 1, 2 và 3, 一 chuyển thành thanh 4.)**
* yì zhāng (một tờ)
* yì tiáo (một sợi)
* yì zhǒng (một loại)

**(2) “一”在第四声音节前变成第二声 (Khi đứng trước âm tiết mang thanh 4, 一 chuyển thành thanh 2.)**
* yídìng (chắc chắn)
* yí kuài (một miếng)

**(3) “一”单用或表示数字时不变调 (Khi được dùng riêng, chỉ con số thì 一 không thay đổi thanh điệu.)**
* dì yī (thứ nhất)
* yī èr sān (một, hai, ba)
* xīngqī yī (thứ hai)
* shíyī (mười một)
* bǎifēnzhī yī (một phần trăm)

**4. 拼音规则 (3)：y、w的用法 (Các quy tắc ghép âm 3: cách dùng y và w)**
以i、u、ü开头的韵母如果前面没有声母，在拼写时需要使用y或w，具体情况如下：
(Nếu âm bắt đầu bằng i, u hoặc ü (không có thanh mẫu) thì khi viết phiên âm, ta phải sử dụng y hoặc w.)

| 韵母 Vận mẫu | 写法 Cách viết |
| :--- | :--- |
| **Bắt đầu bằng i:** i, in, ing <br> ia, ie, iao, ian, iang, iong <br> iu | yi, yin, ying <br> ya, ye, yao, yan, yang, yong <br> you |
| **Bắt đầu bằng u:** u <br> ua, uo, uai, uan, uang, ueng <br> ui, un | wu <br> wa, wo, wai, wan, wang, weng <br> wei, wen |
| **Bắt đầu bằng ü:** ü, üe, üan, ün | yu, yue, yuan, yun |

*Nghe và luyện đọc theo phần ghi âm:*
yóu yǒng, qīngwā, guó wài, wǎnyàn, yǒuyì, yīnyuè, yuányīn, yǐngxīng, yīngxióng, wēixiǎn, yīntiān, yǔyán, wǎngwǎng, yéye, yíngyǎng, wǒmen

---

# Characters (汉字)

**1. 汉字的笔画 (4)：乚，乙 (Các nét của chữ Hán 4: 乚, 乙)**
| 笔画名称 Tên nét | 运笔方向 Hướng viết | 例字 Chữ Hán |
| :--- | :---: | :--- |
| **竖弯钩 shùwāngōu (sổ cong móc)** | 乚 | <strong>七</strong> qī (bảy), <strong>儿</strong> ér (con trai) |
| **横折弯钩 héngzhéwāngōu (ngang gập cong móc)** | 乙 | <strong>九</strong> jiǔ (chín), <strong>几</strong> jǐ (mấy) |

**2. 认识独体字 (Làm quen với chữ đơn/chữ độc thể)**
* **(1) “七”**，表示数量“7”。 (七 qī : số 7)
* **(2) “儿”**，本义是小孩。现在多指儿子。 (儿 ér : có nghĩa gốc là trẻ con, hiện nay thường được dùng để chỉ con trai.)
* **(3) “几”**，本义是小矮桌。 (几 jǐ : có nghĩa gốc là cái bàn nhỏ và thấp.)
* **(4) “九”**，表示数量“9”。 (九 jiǔ : số 9)

**3. 汉字的笔顺 (2)：从上到下，从左到右 (Thứ tự nét viết trong chữ Hán 2: từ trên xuống dưới, từ trái sang phải)**
| 笔顺 Thứ tự nét viết | 例字 Chữ Hán | 书写顺序 Thứ tự viết |
| :--- | :--- | :--- |
| **从上到下 (từ trên xuống dưới)** | <strong>二</strong> èr (hai), <strong>三</strong> sān (ba) | 二, 三 |
| **从左到右 (từ trái sang phải)** | <strong>几</strong> jǐ (mấy), <strong>八</strong> bā (tám) | 几, 八 |

---

# Application (运用)

**1. 双人活动 (Hoạt động theo cặp)**
两人一组，根据图片内容进行问答练习。 (Ghép thành từng cặp, luyện tập đặt câu hỏi và trả lời dựa theo các hình.)
* 例如：
    * A: 他/她是谁？ (Tā / Tā shì shéi?)
    * A: 他/她是哪国人？ (Tā / Tā shì nǎ guó rén?)
    * B: 他/她是……………… (Tā / Tā shì......)
    * B: 他/她是……………… (Tā / Tā shì......)

**2. 小组活动 (Hoạt động nhóm)**
3~4人一组，每人准备一张自己和同学或者朋友的合影，向同组成员介绍照片上的人物。
(Lập nhóm từ 3 đến 4 người. Mỗi người chuẩn bị một tấm ảnh của mình chụp chung với bạn bè/các bạn cùng lớp và giới thiệu với các thành viên trong nhóm về những người bạn có trong hình.)
* 例如：他/她是我同学/朋友，他/她叫………………，他/她是……………… (Tā / Tā shì wǒ tóngxué / péngyou, tā / tā jiào......, tā / tā shì......)
`}]},K_={id:"hsk1-m5",level:wt.HSK1,title:"她女儿今年二十岁 (Lesson 5)",description:'Learn to talk about family members, ask about age using "几" and "多大", and master the retroflex "er" sound.',lessons:[{id:"hsk1-l5-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在学校 (At School)

**A: 你家有几口人？**
*Nǐ jiā yǒu jǐ kǒu rén?*
(Nhà anh có mấy người vậy?)

**B: 我家有三口人。**
*Wǒ jiā yǒu sān kǒu rén.*
(Nhà tôi có ba người.)

---

# Text 2: 在办公室 (In the office)

**A: 你女儿几岁了？**
*Nǐ nǚ'ér jǐ suì le?*
(Con gái của cô mấy tuổi rồi?)

**B: 她今年四岁了。**
*Tā jīnnián sì suì le.*
(Năm nay cháu được bốn tuổi rồi.)

---

# Text 3: 在办公室 (In the office)

**A: 李老师多大了？**
*Lǐ lǎoshī duō dà le?*
(Cô Lý bao nhiêu tuổi rồi?)

**B: 她今年50岁了。**
*Tā jīnnián wǔshí suì le.*
(Năm nay cô ấy 50 tuổi rồi.)

**A: 她女儿呢？**
*Tā nǚ'ér ne?*
(Còn con gái cô ấy?)

**B: 她女儿今年20岁。**
*Tā nǚ'ér jīnnián èrshí suì.*
(Con gái cô ấy năm nay 20 tuổi.)

---

# Grammar Notes (Summary)

## 1. The Interrogative Pronoun "几" (jǐ)
Used to ask about numbers, usually when the expected answer is less than 10.
* **Structure:** Number + Measure Word + Noun.
* **Example:** 你家有几口人？

## 2. Asking about Age
* **For children (under 10):** "你今年几岁了？" (Nǐ jīnnián jǐ suì le?)
* **For peers/younger adults:** "你今年多大了？" (Nǐ jīnnián duō dà le?)
* **For elders (respectful):** "您今年多大年纪了？" (Nín jīnnián duō dà niánjì le?)

## 3. The Particle "了" (le)
Used at the end of a sentence to indicate a change of situation or the realization of a new state (e.g., reaching a certain age).
`},{id:"hsk1-l5-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning (Vietnamese) |
| :--- | :--- | :--- | :--- |
| **家** | jiā | n. | nhà |
| **有** | yǒu | v. | có |
| **口** | kǒu | m. | lượng từ (cho người trong gia đình) |
| **女儿** | nǚ'ér | n. | con gái |
| **几** | jǐ | pron. | mấy |
| **岁** | suì | m. | tuổi |
| **了** | le | part. | (trợ từ chỉ sự thay đổi) |
| **今年** | jīnnián | n. | năm nay |
| **多** | duō | adv. | bao nhiêu (chỉ mức độ) |
| **大** | dà | adj. | lớn, già |

## Supplementary Words (Family Members)

| Hanzi | Pinyin | Meaning (Vietnamese) |
| :--- | :--- | :--- |
| **爷爷** | yéye | ông nội |
| **奶奶** | nǎinai | bà nội |
| **爸爸** | bàba | cha |
| **妈妈** | māma | mẹ |
| **哥哥** | gēge | anh trai |
| **姐姐** | jiějie | chị gái |
| **弟弟** | dìdi | em trai |
| **妹妹** | mèimei | em gái |
`},{id:"hsk1-l5-exercise",title:"Exercises, Phonetics & Culture",type:W.EXERCISE,content:`
# Warm-up

**Match the words with the corresponding images:**
1. **六口人** (liù kǒu rén) - *Match with Image B (Family of six)*
2. **家** (jiā) - *Match with Image C (Family inside a house shape)*
3. **女儿** (nǚ'ér) - *Match with Image D (Young woman smiling)*
4. **学生** (xuésheng) - *Match with Image E (Student in classroom)*
5. **七十岁** (qīshí suì) - *Match with Image F (Older woman reading)*
6. **二十岁** (èrshí suì) - *Match with Image A (Young girl)*

---

# Phonetics

## 1. Er-hua (Retroflex Ending)
The sound "er" can combine with the preceding syllable.
* 小孩儿 (xiǎoháir) - child
* 小鸟儿 (xiǎo niǎor) - bird
* 饭馆儿 (fànguǎnr) - restaurant
* 香水儿 (xiāngshuǐr) - perfume

## 2. Initials & Finals
* **Aspiration Distinction:** b-p, d-t, g-k, j-q, z-c, zh-ch.
* **Differentiation Practice:**
  * bàng - pàng
  * dǔ - tǔ
  * jīqì - qīqǐ
  * zhuō - chē

## 3. Separation Mark (')
Used when a syllable starting with a, o, or e follows another to avoid confusion.
* **piāo** (float) vs **pí'ǎo** (fur coat)
* **xiān** (before) vs **Xī'ān** (Xi'an city)

---

# Characters

**1. Strokes**
* **横撇 (héngpiě):** e.g., 水 (shuǐ), 又 (yòu)
* **撇点 (piědiǎn):** e.g., 女 (nǚ), 好 (hǎo)

**2. Single-Component Characters**
* **水 (shuǐ):** Shaped like a mountain stream, representing flowing water.
* **女 (nǚ):** Shaped like a kneeling woman.
* **了 (le):** Originally representing a newborn baby; now a grammatical particle.
* **大 (dà):** Shaped like a person with arms and legs spread wide (big).

**3. Stroke Order Rules**
* **Outside before Inside:** e.g., 四 (sì), 国 (guó)
* **Center before Sides:** e.g., 小 (xiǎo), 水 (shuǐ)

---

# Culture: Asking about Age
In Chinese culture, age is not strictly private. However, the phrasing changes based on the person:
1. **Under 10:** 你今年几岁了？
2. **Peers/Younger:** 你今年多大了？
3. **Elders (Respectful):** 您今年多大年纪了？

---

# Application / Activity

**1. Pair Work**
Ask your partner about their family size and the ages of their family members.
* A: 你家有几口人？
* B: 我家有...
* A: 你妈妈今年多大了？
* B: 我妈妈今年...

**2. Group Work**
Introduce your family members using a photo.
* Example: "我家有...口人。这是我爸爸，他叫...，他今年...岁了。"
`}]},X_={id:"hsk1-m6",level:wt.HSK1,title:"我会说汉语 (Lesson 6)",description:'Learn to express abilities using "会", describe situations with adjective predicates, and ask about manners with "怎么".',lessons:[{id:"hsk1-l6-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在学校 (At School)

**A: 你会说汉语吗？**
*Nǐ huì shuō Hànyǔ ma?*
(Em có biết nói tiếng Trung Quốc không?)

**B: 我会说汉语。**
*Wǒ huì shuō Hànyǔ.*
(Em có biết.)

**A: 你妈妈会说汉语吗？**
*Nǐ māma huì shuō Hànyǔ ma?*
(Mẹ em biết nói tiếng Trung Quốc không?)

**B: 她不会说。**
*Tā bú huì shuō.*
(Mẹ em thì không.)

---

# Text 2: 在厨房 (In the kitchen)

**A: 中国菜好吃吗？**
*Zhōngguó cài hǎochī ma?*
(Món ăn Trung Quốc có ngon không?)

**B: 中国菜很好吃。**
*Zhōngguó cài hěn hǎochī.*
(Rất ngon.)

**A: 你会做中国菜吗？**
*Nǐ huì zuò Zhōngguó cài ma?*
(Anh có biết nấu món Trung Quốc không?)

**B: 我不会做。**
*Wǒ bú huì zuò.*
(Tôi không biết.)

---

# Text 3: 在图书馆 (At the library)

**A: 你会写汉字吗？**
*Nǐ huì xiě Hànzì ma?*
(Anh có biết viết chữ Hán không?)

**B: 我会写。**
*Wǒ huì xiě.*
(Tôi có biết.)

**A: 这个字怎么写？**
*Zhège zì zěnme xiě?*
(Vậy chữ này anh viết thế nào?)

**B: 对不起，这个字我会读，不会写。**
*Duìbuqǐ, zhège zì wǒ huì dú, bú huì xiě.*
(Xin lỗi, chữ này tôi biết đọc chứ không biết viết.)

---

# Grammar Notes

## 1. The Modal Verb 会 (huì)
The modal verb 会 is used before a verb to indicate acquiring an ability through learning. Its negative form is 不会.

| Subject | (不)会 | Verb |
| :--- | :---: | :--- |
| 我 | **会** | 写汉字。 |
| 我 | **不会** | 做中国菜。 |
| 你妈妈 | **会** | 说汉语吗？ |

## 2. Sentences with an Adjective Predicate
An adjective can be used in the structure "Subject + Adverb of degree + Adjective" to describe the nature or state of a person or thing. The adverb of degree is often 很. The negative form is "Subject + 不 + Adjective".

| Subject | Adverb / 不 | Adjective |
| :--- | :---: | :--- |
| 我 | **很** | 好。 |
| 我妈妈的汉语 | **不** | 好。 |
| 中国菜 | **很** | 好吃。 |

## 3. The Interrogative Pronoun 怎么 (zěnme)
The interrogative pronoun 怎么 is used before a verb to ask about the manner of an action.

1. 这个汉字**怎么**读？
2. 你的汉语名字**怎么**写？
3. 这个字**怎么**写？
`},{id:"hsk1-l6-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning (Vietnamese) |
| :--- | :--- | :--- | :--- |
| **会** | huì | aux. | biết |
| **说** | shuō | v. | nói |
| **妈妈** | māma | n. | mẹ |
| **菜** | cài | n. | món ăn, thức ăn |
| **很** | hěn | adv. | rất |
| **好吃** | hǎochī | adj. | ngon |
| **做** | zuò | v. | làm, nấu |
| **写** | xiě | v. | viết |
| **汉字** | Hànzì | n. | chữ Hán |
| **字** | zì | n. | chữ |
| **怎么** | zěnme | pron. | như thế nào |
| **读** | dú | v. | đọc |

## Supplementary Words

| Hanzi | Pinyin | Meaning |
| :--- | :--- | :--- |
| **英语** | Yīngyǔ | tiếng Anh |
| **法语** | Fǎyǔ | tiếng Pháp |
| **日语** | Rìyǔ | tiếng Nhật |
`},{id:"hsk1-l6-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up

**Match the words with the corresponding images:**
1. 妈妈 (māma) - *Match with Image F (A mother and a baby smiling)*
2. 汉字 (Hànzì) - *Match with Image A (Chinese calligraphy on paper)*
3. 中国菜 (Zhōngguó cài) - *Match with Image B (Chinese food (baozi and dishes))*
4. 说汉语 (shuō Hànyǔ) - *Match with Image C (Two people greeting each other)*
5. 写汉字 (xiě Hànzì) - *Match with Image D (A teacher writing Chinese characters)*
6. 做中国菜 (zuò Zhōngguó cài) - *Match with Image E (A woman cooking in a kitchen)*

---

# Exercises

**1. Role-play reading the texts (分角色朗读课文)**

**2. Answer the questions based on actual situations (根据实际情况回答问题):**
* 你会说汉语吗？ (Nǐ huì shuō Hànyǔ ma?)
* 你会写汉字吗？ (Nǐ huì xiě Hànzì ma?)
* 你会做中国菜吗？ (Nǐ huì zuò Zhōngguó cài ma?)
* 你有汉语名字吗？ (Nǐ yǒu Hànyǔ míngzi ma?)
* 你会写你的汉语名字吗？ (Nǐ huì xiě nǐ de Hànyǔ míngzi ma?)

**3. Describe the pictures using the newly learned language points and words:**
* [Image: People standing in a line smiling] 我们都会 ______。(Wǒmen dōu huì ______.)
* [Image: Couple looking at a roasted duck meal] 中国菜很 ______。(Zhōngguó cài hěn ______.)
* [Image: Chef preparing food] 他会做 ______。(Tā huì zuò ______.)
* [Image: Chinese calligraphy "床"] 这个汉字我会 ______，不会 ______。(Zhège Hànzì wǒ huì ______ , bú huì ______ .)

---

# Phonetics: Tone Collocation of Disyllabic Words (1)

**First tone + 1st/2nd/3rd/4th tones**
* 咖啡 (kāfēi)
* 公园 (gōngyuán)
* 机场 (jīchǎng)
* 车站 (chēzhàn)

*Note: In a syllable combination, the pronunciation of the 3rd tone is different from its isolated pronunciation (214). It becomes a low falling tone similar to 211, and the second half does not rise.*

**Listen and read after the recording (听录音并跟读，注意声调的搭配):**
jīntiān, jīnnián, jīngcǎi, chēpiào, gōngsī, gāngcái, cāochǎng, jīdàn, guā fēng, huānyíng, jīnglǐ, jīhuì, guānyú, kāishǐ, gāoxìng

---

# Characters

**1. Strokes of Chinese Characters (6)**
* **撇折 (piězhé - phẩy gập):** e.g., 么 (me), 东 (dōng)
* **斜钩 (xiégōu - nghiêng móc):** e.g., 我 (wǒ), 钱 (qián)
* **提 (tí - hất):** e.g., 我 (wǒ), 打 (dǎ)

**2. Single-Component Characters (独体字)**
* **东 (dōng):** The side where the sun rises, opposite to 西.
* **我 (wǒ):** Originally looked like a weapon with sharp teeth, now evolved into a pronoun (I/me).
* **西 (xī):** Originally looked like a bird's nest, now indicates direction (West), opposite to 东.

**3. Structure of Chinese Characters (1)**
There are basically two types of character structures:
* **Single-component structure (独体结构):** Characters made of only one part (e.g., 人 rén, 我 wǒ, 中 zhōng).
* **Compound structure (合体结构):** Characters made of two or more parts (e.g., 你 nǐ, 做 zuò).

---

# Application

**1. Pair Work (双人活动)**
Practice Q&A based on actual situations:
* A: 你会说汉语吗？ (Nǐ huì shuō Hànyǔ ma?)
* B: 我... (Wǒ...)
* A: 你会写汉字吗？ (Nǐ huì xiě Hànzì ma?)
* B: 我... (Wǒ...)
* A: 你的汉语名字叫什么？ (Nǐ de Hànyǔ míngzi jiào shénme?)
* B: ......
* A: 你会写你的汉语名字吗？ (Nǐ huì xiě nǐ de Hànyǔ míngzi ma?)
* B: ......

**2. Group Work (小组活动)**
Groups of 3-4. Ask each other about mastered language skills and record them.
| 姓名 (Name) | 英语 (English) | 法语 (French) | 汉语 (Chinese) | 日语 (Japanese) |
| :--- | :---: | :---: | :---: | :---: |
| 大卫 (David) | ☑ | ☑ | ☑ | X |
`}]},Q_={id:"hsk1-m7",level:wt.HSK1,title:"Jīntiān jǐ hào? 今天几号? (Lesson 7)",description:"Learn how to ask about dates, days of the week, and express intentions using the 'go + place + do something' structure.",lessons:[{id:"hsk1-l7-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在银行 (Ở ngân hàng)

**A: 请问，今天几号？**
*Qǐngwèn, jīntiān jǐ hào?*
(Xin hỏi hôm nay là ngày mấy?)

**B: 今天9月1号。**
*Jīntiān jiǔ yuè yī hào.*
(Ngày 1 tháng 9.)

**A: 今天星期几？**
*Jīntiān xīngqī jǐ?*
(Hôm nay là thứ mấy?)

**B: 星期三。**
*Xīngqī sān.*
(Thứ tư.)

---

# Text 2: 看日历 (Xem lịch)

**A: 昨天是几月几号？**
*Zuótiān shì jǐ yuè jǐ hào?*
(Hôm qua là ngày mấy tháng mấy?)

**B: 昨天是8月31号，星期二。**
*Zuótiān shì bā yuè sānshíyī hào, xīngqī èr.*
(Hôm qua là thứ ba, ngày 31 tháng 8.)

**A: 明天呢？**
*Míngtiān ne?*
(Còn ngày mai?)

**B: 明天是9月2号，星期四。**
*Míngtiān shì jiǔ yuè èr hào, xīngqī sì.*
(Ngày mai là thứ năm, ngày 2 tháng 9.)

---

# Text 3: 在咖啡馆儿 (Ở quán cà phê)

**A: 明天星期六，你去学校吗？**
*Míngtiān xīngqī liù, nǐ qù xuéxiào ma?*
(Ngày mai là thứ bảy, bạn có đến trường không?)

**B: 我去学校。**
*Wǒ qù xuéxiào.*
(Có, tôi đến trường.)

**A: 你去学校做什么？**
*Nǐ qù xuéxiào zuò shénme?*
(Bạn đến trường để làm gì?)

**B: 我去学校看书。**
*Wǒ qù xuéxiào kàn shū.*
(Để đọc sách.)

---

# Grammar Notes

## 1. 日期的表达(1): 月、日(rì)/号、星期
**Cách diễn tả ngày tháng (1): tháng, ngày, thứ**

汉语的日期表达方式遵循由大到小的原则，先说“月”，然后说“日/号”，最后说“星期”。口语一般常用“号”。
(Trong tiếng Trung Quốc, người ta nói về ngày tháng theo trình tự từ lớn đến nhỏ: 月 (tháng) -> 日/号 (ngày) -> 星期 (thứ). Trong văn nói thường dùng 号 thay cho 日.)

* **9月1号，星期三。** (Ngày 1 tháng 9, thứ tư.)
* **9月2号，星期四。** (Ngày 2 tháng 9, thứ năm.)
* **8月31号，星期二。** (Ngày 31 tháng 8, thứ ba.)

## 2. 名词谓语句 (Câu có vị ngữ là danh từ)
名词谓语句是谓语部分由名词性成分充当的句子，一般用于表达年龄、时间、日期等。
(Đây là kiểu câu có vị ngữ là thành phần mang đặc điểm của danh từ, thường được dùng để nói về tuổi tác, thời gian, ngày tháng...)

| 主语 (Chủ ngữ) | 谓语 (Vị ngữ) |
| :--- | :--- |
| 我的汉语老师 | 33岁。 |
| 明天 | 星期三。 |
| 今天 | 9月1号。 |

## 3. 连动句(1): 去 + 地方 + 做什么
**Câu liên động từ (1): 去 + nơi chốn + làm gì**

连动句的谓语部分由两个或者两个以上动词构成，后一个动作可以表示前一个动作的目的。第一个动词后表示地点的宾语有时可以省略。
(Trong câu liên động từ, vị ngữ có từ hai động từ trở lên, động từ đứng sau diễn tả mục đích của động từ đứng trước.)

| 主语 (Chủ ngữ) | 动词 1 (Động từ 1) | (地方 Nơi chốn) | 动词 2 (Động từ 2) |
| :--- | :--- | :--- | :--- |
| 我 | **去** | (中国) | **学习**汉语。 |
| 我们 | **去** | (中国饭馆儿) | **吃**中国菜。 |
| 我 | **去** | (学校) | **看**书。 |
`},{id:"hsk1-l7-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words (Từ mới)

| Hanzi | Pinyin | POS | Meaning |
| :--- | :--- | :--- | :--- |
| **请** | qǐng | v. | please; to invite |
| **问** | wèn | v. | to ask |
| **今天** | jīntiān | n. | today |
| **号** | hào | n. | date; number |
| **月** | yuè | n. | month; moon |
| **星期** | xīngqī | n. | week |
| **昨天** | zuótiān | n. | yesterday |
| **明天** | míngtiān | n. | tomorrow |
| **去** | qù | v. | to go |
| **学校** | xuéxiào | n. | school |
| **看** | kàn | v. | to look at; to watch; to read |
| **书** | shū | n. | book |

## Supplementary Word
| Hanzi | Pinyin | POS | Meaning |
| :--- | :--- | :--- | :--- |
| **生日** | shēngrì | n. | birthday |
`},{id:"hsk1-l7-exercise",title:"Exercises & Phonetics",type:W.EXERCISE,content:`
# Warm-up (热身)

**给下面的词语选择对应的图片 (Chọn hình tương ứng với các từ ngữ bên dưới)**

1. **学校** (xuéxiào) - *[Image A: A basketball court]*
2. **看书** (kàn shū) - *[Image B: A woman reading a book]*
3. **书** (shū) - *[Image E: A stack of books]*
4. **中国菜** (Zhōngguó cài) - *[Image D: A bowl of Mapo tofu]*
5. **25 号** (èrshíwǔ hào) - *[Image C: A calendar showing December 25]*
6. **5月** (yuè) - *[Image F: A flip clock showing the number 1]*

---

# Practice (练习)

## 1. Months and Weeks (朗读下列词语)

| 1 - 6 月 | 7 - 12 月 | 星期 (Weeks) |
| :--- | :--- | :--- |
| 一月 (Jan) | 七月 (Jul) | 星期一 (Mon) |
| 二月 (Feb) | 八月 (Aug) | 星期二 (Tue) |
| 三月 (Mar) | 九月 (Sep) | 星期三 (Wed) |
| 四月 (Apr) | 十月 (Oct) | 星期四 (Thu) |
| 五月 (May) | 十一月 (Nov) | 星期五 (Fri) |
| 六月 (Jun) | 十二月 (Dec) | 星期六 (Sat) |
| | | 星期日/天 (Sun) |

## 2. Comprehension Questions (回答问题)
1. 今天几月几号星期几? (Jīntiān jǐ yuè jǐ hào xīngqī jǐ?)
2. 明天几月几号星期几? (Míngtiān jǐ yuè jǐ hào xīngqī jǐ?)
3. 昨天几月几号星期几? (Zuótiān jǐ yuè jǐ hào xīngqī jǐ?)
4. 明天你去哪儿做什么? (Míngtiān nǐ qù nǎr zuò shénme?)
5. 星期日你去哪儿做什么? (Xīngqī rì nǐ qù nǎr zuò shénme?)

---

# Phonetics (拼音)

**双音节词语的声调搭配(2): 二声和各声调的搭配**
**Sự kết hợp thanh điệu (2): Thanh 2 + Thanh 1/2/3/4**

* **国家** (guójiā) / **楼房** (lóufáng) / **苹果** (píngguǒ) / **环境** (huánjìng)
* **昨天** (zuótiān) / **篮球** (lánqiú) / **啤酒** (píjiǔ) / **寒假** (hánjià)
* **明天** (míngtiān) / **明年** (míngnián) / **牛奶** (niúnǎi) / **牛肉** (niúròu)
* **年轻** (niánqīng) / **长城** (Chángchéng) / **游泳** (yóuyǒng) / **游戏** (yóuxì)

---

# Characters (汉字)

## 1. Single Component Characters (独体字)
* **四 (sì)**: Số 4.
* **五 (wǔ)**: Số 5.
* **书 (shū)**: Sách. (Originally meant dipping a brush in ink).

## 2. Structure (汉字结构)
* **左右结构 (Left-Right)**: 你 (nǐ), 好 (hǎo)
* **左中右结构 (Left-Middle-Right)**: 谢 (xiè), 树 (shù)

## 3. Radicals (汉字偏旁)
* **氵** (Sān diǎn shuǐ): Liên quan đến nước. Ví dụ: **汉** (Hàn), **没** (méi).
* **讠** (Yán zì páng): Liên quan đến ngôn ngữ/lời nói. Ví dụ: **语** (yǔ), **谁** (shéi).
`}]},Z_={id:"hsk1-m8",level:wt.HSK1,title:"我想喝茶 (Lesson 8)",description:"Learn how to express wants and intentions using 'xiǎng', ask about quantities using 'duōshao', and inquire about prices.",lessons:[{id:"hsk1-l8-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在饭馆儿 (Ở quán ăn / At a restaurant)

<strong>A: 你想喝什么？</strong>
<em>Nǐ xiǎng hē shénme?</em>
(Cô muốn uống gì? / What would you like to drink?)

<strong>B: 我想喝茶。</strong>
<em>Wǒ xiǎng hē chá.</em>
(Tôi muốn uống trà. / I want to drink tea.)

<strong>A: 你想吃什么？</strong>
<em>Nǐ xiǎng chī shénme?</em>
(Cô muốn dùng món gì? / What would you like to eat?)

<strong>B: 我想吃米饭。</strong>
<em>Wǒ xiǎng chī mǐfàn.</em>
(Tôi muốn ăn cơm. / I want to eat rice.)

---

# Text 2: 在客厅 (Trong phòng khách / In the living room)

<strong>A: 下午你想做什么？</strong>
<em>Xiàwǔ nǐ xiǎng zuò shénme?</em>
(Buổi chiều bạn muốn làm gì? / What do you want to do this afternoon?)

<strong>B: 下午我想去商店。</strong>
<em>Xiàwǔ wǒ xiǎng qù shāngdiàn.</em>
(Mình muốn đến cửa hàng. / I want to go to the store this afternoon.)

<strong>A: 你想买什么？</strong>
<em>Nǐ xiǎng mǎi shénme?</em>
(Bạn muốn mua gì vậy? / What do you want to buy?)

<strong>B: 我想买一个杯子。</strong>
<em>Wǒ xiǎng mǎi yí ge bēizi.</em>
(Mình muốn mua một cái ly. / I want to buy a cup.)

---

# Text 3: 在商店 (Ở cửa hàng / At a store)

<strong>A: 你好！这个杯子多少钱？</strong>
<em>Nǐ hǎo! Zhège bēizi duōshao qián?</em>
(Chào cô! Cái ly này bao nhiêu tiền? / Hello! How much is this cup?)

<strong>B: 28 块。</strong>
<em>Èrshíbā kuài.</em>
(28 đồng. / 28 RMB.)

<strong>A: 那个杯子多少钱？</strong>
<em>Nàge bēizi duōshao qián?</em>
(Còn cái ly đó? / What about that cup?)

<strong>B: 那个杯子18块钱。</strong>
<em>Nàge bēizi shíbā kuài qián.</em>
(Ly đó 18 đồng. / That cup is 18 RMB.)

---

# Grammar Notes

## 1. 能愿动词“想” (Động từ năng nguyện "想" / The Auxiliary Verb "xiǎng")
能愿动词“想”一般用在动词前表示一种希望或者打算。
(Động từ năng nguyện "想" thường được dùng trước động từ để diễn tả mong muốn hay dự định. / Used before a verb to indicate a desire or a plan.)

1. 我<strong>想</strong>学汉语。 (Wǒ xiǎng xué Hànyǔ. - I want to study Chinese.)
2. 明天我<strong>想</strong>去学校看书。 (Míngtiān wǒ xiǎng qù xuéxiào kàn shū. - I want to go to school to read books tomorrow.)
3. 我<strong>想</strong>买一个杯子。 (Wǒ xiǎng mǎi yí ge bēizi. - I want to buy a cup.)

## 2. 疑问代词“多少” (Đại từ nghi vấn "多少" / The Interrogative Pronoun "duōshao")
疑问代词“多少”用于询问十以上的数量，“多少”后边的量词可以省略。“多少”还用于询问价格，常用表达方式是“……多少钱？”。
(Đại từ nghi vấn "多少" được dùng để hỏi số lượng trên 10, lượng từ đứng sau "多少" có thể được lược bỏ. "多少" cũng được sử dụng để hỏi giá cả với cấu trúc thường gặp là: "……多少钱？". / Used to ask about numbers usually greater than 10. The measure word after it can be omitted. It is also used to ask for prices: "...duōshao qián?")

1. 你们学校有<strong>多少</strong>(个)学生？ (Nǐmen xuéxiào yǒu duōshao (ge) xuésheng? - How many students are in your school?)
2. 你有<strong>多少</strong>(个)汉语老师？ (Nǐ yǒu duōshao (ge) Hànyǔ lǎoshī? - How many Chinese teachers do you have?)
3. 这个杯子<strong>多少</strong>钱？ (Zhège bēizi duōshao qián? - How much is this cup?)

## 3. 量词“个”、“口” (Lượng từ "个" và "口" / The Measure Words "gè" and "kǒu")
“个”是汉语中最常见的一个量词，一般用于没有专用量词的名词前。
("个" là lượng từ thường gặp nhất trong tiếng Trung Quốc, thường được dùng trước những danh từ không có lượng từ riêng. / "gè" is the most common measure word, used before nouns without a specific measure word.)

1. 三<strong>个</strong>老师 (sān ge lǎoshī - three teachers)
2. 五<strong>个</strong>学生 (wǔ ge xuésheng - five students)
3. 一<strong>个</strong>杯子 (yí ge bēizi - one cup)

而“口”也是一个量词，一般用于描述家庭成员的人数。
("口" cũng là lượng từ, thường được dùng để nói về số lượng người trong gia đình. / "kǒu" is a measure word mainly used for the number of family members.)

1. 李老师家有六<strong>口</strong>人。 (Lǐ lǎoshī jiā yǒu liù kǒu rén. - Teacher Li has six people in his family.)
2. 你家有几<strong>口</strong>人？ (Nǐ jiā yǒu jǐ kǒu rén? - How many people are in your family?)
3. 我家有三<strong>口</strong>人。 (Wǒ jiā yǒu sān kǒu rén. - My family has three people.)

## 4. 钱数的表达 (Cách diễn đạt số tiền / Expression of money)
人民币的基本单位是“元”，口语中读作“块”。
(Đơn vị cơ bản của nhân dân tệ (tiền Trung Quốc) là "元" (yuán). Trong văn nói, "元" thường được thay bằng "块" (kuài). / The basic unit of RMB is "yuan", spoken as "kuai".)

* <strong>一元(块)</strong> (yī yuán/kuài - một đồng / 1 RMB)
* <strong>五元(块)</strong> (wǔ yuán/kuài - năm đồng / 5 RMB)
* <strong>十元(块)</strong> (shí yuán/kuài - mười đồng / 10 RMB)
* <strong>五十元(块)</strong> (wǔshí yuán/kuài - năm mươi đồng / 50 RMB)
* <strong>一百元(块)</strong> (yìbǎi yuán/kuài - một trăm đồng / 100 RMB)
`},{id:"hsk1-l8-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning (Vietnamese) | Meaning (English) |
| :--- | :--- | :--- | :--- | :--- |
| <strong>想</strong> | xiǎng | dtnn. / aux. | muốn | to want to, would like to |
| <strong>喝</strong> | hē | dgt. / v. | uống | to drink |
| <strong>茶</strong> | chá | dt. / n. | trà | tea |
| <strong>吃</strong> | chī | dgt. / v. | ăn | to eat |
| <strong>米饭</strong> | mǐfàn | dt. / n. | cơm | cooked rice |
| <strong>下午</strong> | xiàwǔ | dt. / n. | buổi chiều | afternoon |
| <strong>商店</strong> | shāngdiàn | dt. / n. | cửa hàng | store, shop |
| <strong>买</strong> | mǎi | dgt. / v. | mua | to buy |
| <strong>个</strong> | gè | lượng. / m. | cái | (a generic measure word) |
| <strong>杯子</strong> | bēizi | dt. / n. | ly, tách | cup, glass |
| <strong>这</strong> | zhè | đt. / pron. | đây, này | this |
| <strong>多少</strong> | duōshao | đt. / pron. | bao nhiêu | how much, how many |
| <strong>钱</strong> | qián | dt. / n. | tiền | money |
| <strong>块</strong> | kuài | lượng. / m. | đồng (đơn vị tiền) | (measure word for basic monetary unit) |
| <strong>那</strong> | nà | đt. / pron. | kia, đó | that |
`},{id:"hsk1-l8-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up (热身 / Phần khởi động)

<strong>给下面的词语选择对应的图片 (Chọn hình tương ứng với các từ ngữ bên dưới / Match the words with the corresponding images)</strong>
1. <strong>钱</strong> (qián) - tiền / money
2. <strong>茶</strong> (chá) - trà / tea
3. <strong>米饭</strong> (mǐfàn) - cơm / rice
4. <strong>中国菜</strong> (Zhōngguó cài) - món ăn Trung Quốc / Chinese food
5. <strong>杯子</strong> (bēizi) - ly, tách / cup
6. <strong>汉字</strong> (Hànzì) - chữ Hán / Chinese characters

---

# Exercises (练习 / Bài tập)

<strong>1. 分角色朗读课文</strong>
(Đóng vai các nhân vật trong bài học và đọc to các câu đối thoại / Role-play the texts and read aloud)

<strong>2. 根据实际情况回答问题 (Trả lời câu hỏi / Answer the questions based on your actual situation)</strong>
* 你想吃什么？ (Nǐ xiǎng chī shénme?)
* 你想喝什么？ (Nǐ xiǎng hē shénme?)
* 明天下午你想做什么？ (Míngtiān xiàwǔ nǐ xiǎng zuò shénme?)
* 你去哪个商店买杯子？ (Nǐ qù nǎge shāngdiàn mǎi bēizi?)
* 一个杯子多少钱？ (Yí ge bēizi duōshao qián?)

<strong>3. 用本课新学的语言点和词语描述图片 (Sử dụng từ ngữ trong bài để mô tả hình ảnh / Describe the pictures using newly learned language)</strong>
* 明天我想去买 ______。 (Míngtiān wǒ xiǎng qù mǎi ______.)
* 今天我想吃 ______。 (Jīntiān wǒ xiǎng chī ______.)
* 下午我想去看 ______。 (Xiàwǔ wǒ xiǎng qù kàn ______.)
* 你好，请问这个杯子 ______ ？ (Nǐ hǎo, qǐngwèn zhège bēizi ______?)

---

# Phonetics (拼音 / Phần ghép âm)

<strong>双音节词语的声调搭配(3)：三声和各声调的搭配</strong>
(Sự kết hợp thanh điệu của từ có hai âm tiết (3): thanh 3 + thanh 1/2/3/4)

听录音并跟读，注意声调的搭配 (Nghe và luyện đọc theo phần ghi âm, chú ý sự kết hợp của các thanh):
* shǒujī (手机), shǒuzhuó (手镯), shǒubiǎo (手表), shǒutào (手套)
* lǎoshī (老师), měi tiān (每天), hǎibiān (海边), yǐjīng (已经)
* lǎorén (老人), měi nián (每年), hǎimián (海绵), yǐqián (以前)
* yǔsǎn (雨伞), měihǎo (美好), xǐ zǎo (洗澡), yǒu yòng (有用)
* měilì (美丽), gǎnxiè (感谢), biǎoyǎn (表演), biǎoxiàn (表现)

---

# Characters (汉字 / Chữ Hán)

<strong>1. 认识独体字 (Làm quen với chữ đơn/độc thể / Single-component characters)</strong>
* <strong>少 (shǎo)</strong>: 意思是规模小，数量不多，与“多”相对。 (diễn tả số lượng không nhiều hay quy mô nhỏ, trái nghĩa với 多 / meaning small scale or few in number, opposite of 多.)
* <strong>个 (gè)</strong>: 本义是最小独立单位的人，指一个人。现在变为量词。 (ban đầu chỉ một cá nhân với nghĩa là đơn vị độc lập nhỏ nhất, ngày nay nó trở thành lượng từ / originally meant the smallest independent unit of a person, now used as a measure word.)

<strong>2. 汉字结构(3)：上下结构与上中下结构 (Kết cấu của chữ Hán: trên-dưới và trên-giữa-dưới / Top-bottom and Top-middle-bottom structure)</strong>
* <strong>上下结构 (kết cấu trên-dưới / Top-bottom)</strong>: 是 (shì - là), 爸 (bà - cha, bố)
* <strong>上中下结构 (kết cấu trên-giữa-dưới / Top-middle-bottom)</strong>: 茶 (chá - trà), 高 (gāo - cao)

<strong>3. 汉字偏旁“钅”和“口” (Các bộ của chữ Hán / Radicals)</strong>
* <strong>钅 (金字旁)</strong>: 一般和金属有关系。 (Bộ thường liên quan đến kim loại / Usually related to metal). 例字 (Ví dụ): 钟 (zhōng - đồng hồ), 钱 (qián - tiền)
* <strong>口 (口字旁)</strong>: 一般和嘴巴有关系。 (Bộ thường liên quan đến miệng / Usually related to the mouth). 例字 (Ví dụ): 吃 (chī - ăn), 喝 (hē - uống)

---

# Application (运用 / Phần vận dụng)

<strong>1. 双人活动 (Hoạt động theo cặp / Pair work)</strong>
两人一组，根据实际情况进行问答练习。 (Ghép thành từng cặp, luyện tập đặt câu hỏi và trả lời. / Work in pairs to practice asking and answering questions based on actual situations.)

例如 (Example):
(1)
A: 今天下午你想做什么？ (Jīntiān xiàwǔ nǐ xiǎng zuò shénme?)
B: ......
A: 明天你想做什么？ (Míngtiān nǐ xiǎng zuò shénme?)
B: ......

(2)
A: 你们班有多少个学生？ (Nǐmen bān yǒu duōshao ge xuésheng?)
B: ......
A: 你们学校有多少个老师？ (Nǐmen xuéxiào yǒu duōshao ge lǎoshī?)
B: ......

<strong>2. 小组活动 (Hoạt động nhóm / Group work)</strong>
3~4人一组，互相询问这个星期的计划并记录，每组请一位同学报告情况。
(Lập nhóm từ 3 đến 4 người, hỏi nhau và ghi lại kế hoạch tuần này, sau đó cử một đại diện trình bày. / Work in groups of 3-4, ask about each other's plans for this week, record them, and have one student report.)

| 姓名 (Họ tên) | 星期一 (Thứ 2) | 星期二 (Thứ 3) | 星期三 (Thứ 4) | 星期四 (Thứ 5) | 星期五 (Thứ 6) | 星期六 (Thứ 7) | 星期日 (CN) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 谢朋 (Xiè Péng) | 去学校 (qù xuéxiào) | 去商店 (qù shāngdiàn) | | | | | |
`}]},$_={id:"hsk1-m9",level:wt.HSK1,title:"我想喝茶 (Lesson 9)",description:"Expressing desires with 'xiǎng', asking about prices/quantities with 'duōshao', and using measure words 'gè' and 'kǒu'.",lessons:[{id:"hsk1-l9-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在饭馆儿 (Ở quán ăn)

**A: 你想喝什么?**
*Nǐ xiǎng hē shénme?*
(Cô muốn uống gì?)

**B: 我想喝茶。**
*Wǒ xiǎng hē chá.*
(Tôi muốn uống trà.)

**A: 你想吃什么?**
*Nǐ xiǎng chī shénme?*
(Cô muốn dùng món gì?)

**B: 我想吃米饭。**
*Wǒ xiǎng chī mǐfàn.*
(Tôi muốn ăn cơm.)

---

# Text 2: 在客厅 (Trong phòng khách)

**A: 下午你想做什么?**
*Xiàwǔ nǐ xiǎng zuò shénme?*
(Buổi chiều bạn muốn làm gì?)

**B: 下午我想去商店。**
*Xiàwǔ wǒ xiǎng qù shāngdiàn.*
(Buổi chiều mình muốn đến cửa hàng.)

**A: 你想买什么?**
*Nǐ xiǎng mǎi shénme?*
(Bạn muốn mua gì vậy?)

**B: 我想买一个杯子。**
*Wǒ xiǎng mǎi yí ge bēizi.*
(Mình muốn mua một cái ly.)

---

# Text 3: 在商店 (Ở cửa hàng)

**A: 你好!这个杯子多少钱?**
*Nǐ hǎo! Zhège bēizi duōshao qián?*
(Chào cô! Cái ly này bao nhiêu tiền?)

**B: 28 块。**
*Èrshíbā kuài.*
(28 đồng.)

**A: 那个杯子多少钱?**
*Nàge bēizi duōshao qián?*
(Còn cái ly đó?)

**B: 那个杯子18块钱。**
*Nàge bēizi shíbā kuài qián.*
(Ly đó 18 đồng.)

---

# Grammar Notes

## 1. 能愿动词“想” (Động từ năng nguyện "想")
Động từ năng nguyện 想 thường được dùng trước động từ để diễn tả mong muốn hay dự định. Ví dụ:
(1) 我想学汉语。 (Wǒ xiǎng xué Hànyǔ.)
(2) 明天我想去学校看书。 (Míngtiān wǒ xiǎng qù xuéxiào kànshū.)
(3) 我想买一个杯子。 (Wǒ xiǎng mǎi yí ge bēizi.)

## 2. 疑问代词“多少” (Đại từ nghi vấn "多少")
Đại từ nghi vấn 多少 được dùng để hỏi số lượng trên 10, lượng từ đứng sau 多少 có thể được lược bỏ. 多少 cũng được sử dụng để hỏi giá cả với cấu trúc thường gặp là: …………………多少钱?. Ví dụ:
(1) 你们学校有多少(个)学生? (Nǐmen xuéxiào yǒu duōshao (ge) xuésheng?)
(2) 你有多少(个)汉语老师? (Nǐ yǒu duōshao (ge) Hànyǔ lǎoshī?)
(3) 这个杯子多少钱? (Zhège bēizi duōshao qián?)

## 3. 量词“个”、“口” (Lượng từ "个" và "口")
"个" là lượng từ thường gặp nhất trong tiếng Trung Quốc, thường được dùng trước những danh từ không có lượng từ riêng. Ví dụ:
(1) 三个老师 (sān ge lǎoshī)
(2) 五个学生 (wǔ ge xuésheng)
(3) 一个杯子 (yí ge bēizi)

"口" cũng là lượng từ, thường được dùng để nói về số lượng người (xem bài 5). Ví dụ:
(1) 李老师家有六口人。 (Lǐ lǎoshī jiā yǒu liù kǒu rén.)
(2) 你家有几口人? (Nǐ jiā yǒu jǐ kǒu rén?)
(3) 我家有三口人。 (Wǒ jiā yǒu sān kǒu rén.)

## 4. 钱数的表达 (Cách diễn đạt số tiền)
Đơn vị cơ bản của nhân dân tệ (tiền Trung Quốc) là "元" (yuán). Trong văn nói, 元 thường được thay bằng "块" (kuài). Ví dụ:
* 一元(块) (yì yuán/kuài) - một đồng
* 五元(块) (wǔ yuán/kuài) - năm đồng
* 十元(块) (shí yuán/kuài) - mười đồng
* 五十元(块) (wǔshí yuán/kuài) - năm mươi đồng
* 一百元(块) (yìbǎi yuán/kuài) - một trăm đồng
`},{id:"hsk1-l9-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| **想** | xiǎng | dtnn. | muốn |
| **喝** | hē | dgt. | uống |
| **茶** | chá | dt. | trà |
| **吃** | chī | dgt. | ăn |
| **米饭** | mǐfàn | dt. | cơm |
| **下午** | xiàwǔ | dt. | buổi chiều |
| **商店** | shāngdiàn | dt. | cửa hàng |
| **买** | mǎi | dgt. | mua |
| **个** | gè | lượng. | cái |
| **杯子** | bēizi | dt. | ly, tách |
| **这** | zhè | đt. | đây, này |
| **多少** | duōshao | đt. | bao nhiêu |
| **钱** | qián | dt. | tiền |
| **块** | kuài | lượng. | đồng (đơn vị tiền tệ) |
| **那** | nà | đt. | kia, đó |
`},{id:"hsk1-l9-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# 热身 (Warm-up)

**给下面的词语选择对应的图片 (Chọn hình tương ứng với các từ ngữ bên dưới.)**

1. **钱** (qián) ______ [Image A-F]
2. **茶** (chá) ______ [Image A-F]
3. **米饭** (mǐfàn) ______ [Image A-F]
4. **中国菜** (Zhōngguó cài) ______ [Image A-F]
5. **杯子** (bēizi) ______ [Image A-F]
6. **汉字** (Hànzì) ______ [Image A-F]

---

# 练习 (Bài tập)

**1. 分角色朗读课文 (Đóng vai các nhân vật trong bài học và đọc to các câu đối thoại.)**

**2. 根据实际情况回答问题 (Trả lời câu hỏi.)**
* 你想吃什么? (Nǐ xiǎng chī shénme?)
* 你想喝什么? (Nǐ xiǎng hē shénme?)
* 明天下午你想做什么? (Míngtiān xiàwǔ nǐ xiǎng zuò shénme?)
* 你去哪个商店买杯子? (Nǐ qù nǎge shāngdiàn mǎi bēizi?)
* 一个杯子多少钱? (Yí ge bēizi duōshao qián?)

**3. 用本课新学的语言点和词语描述图片 (Sử dụng từ ngữ trong bài để mô tả hình ảnh bên dưới.)**
* 明天我想去买 ______ (Míngtiān wǒ xiǎng qù mǎi ______)
* 今天我想吃 ______ (Jīntiān wǒ xiǎng chī ______)
* 下午我想去看 ______ (Xiàwǔ wǒ xiǎng qù kàn ______)
* 你好，请问这个杯子 ______ ? (Nǐ hǎo, qǐngwèn zhège bēizi ______ ?)

---

# 拼音 (Phần ghép âm)

**1. 双音节词语的声调搭配(3)：三声和各声调的搭配 (Sự kết hợp thanh điệu của từ có hai âm tiết (3): thanh 3 + thanh 1/2/3/4)**
* shǒujī (手机)
* shǒuzhuó (手镯)
* shǒubiǎo (手表)
* shǒutào (手套)

**听录音并跟读，注意声调的搭配 08-4 (Nghe và luyện đọc theo phần ghi âm, chú ý sự kết hợp của các thanh.)**
* lǎoshī | měi tiān | hǎibiān | yǐjīng
* lǎorén | měi nián | hǎimián | yǐqián
* yǔsǎn | měihǎo | xǐ zǎo | yǒu yòng
* měilì | gǎnxiè | biǎoyǎn | biǎoxiàn

---

# 汉字 (Chữ Hán)

**1. 认识独体字 (Làm quen với chữ đơn/chữ độc thể)**
* **少** (shǎo): 意思是规模小，数量不多，与“多”相对。 (diễn tả số lượng không nhiều hay quy mô nhỏ, trái nghĩa với 多 - nhiều.)
* **个** (gè): 本义是最小独立单位的人，指一个人。现在变为量词。 (ban đầu chỉ một cá nhân với nghĩa là đơn vị độc lập nhỏ nhất, ngày nay nó trở thành lượng từ.)

**2. 汉字结构(3)：上下结构与上中下结构 (Kết cấu của chữ Hán (3): kết cấu trên-dưới và kết cấu trên-giữa-dưới)**
合体结构还包括上下结构和上中下结构。 (Kết cấu tổ hợp trong chữ Hán còn bao gồm kết cấu trên-dưới và kết cấu trên-giữa-dưới.)

| 结构 (Kết cấu) | 例字 (Chữ Hán) | 图解 (Hình minh họa) |
| :--- | :--- | :--- |
| **上下结构** (kết cấu trên-dưới) | 是 (shì - là) <br> 爸 (bà - cha, bố) | [是], [爸] |
| **上中下结构** (kết cấu trên-giữa-dưới) | 茶 (chá - trà) <br> 高 (gāo - cao) | [茶], [高] |

**3. 汉字偏旁“钅”和“口” (Các bộ của chữ Hán: 钅và 口)**

| 偏旁 (Các bộ) | 解释 (Chú thích) | 例字 (Chữ Hán) |
| :--- | :--- | :--- |
| **钅** (Kim) | 金字旁，一般和金属有关系。 (Bộ thường liên quan đến kim loại.) | 钟 (zhōng - đồng hồ), 钱 (qián - tiền) |
| **口** (Khẩu) | 口字旁，一般和嘴巴有关系。 (Bộ thường liên quan đến miệng.) | 吃 (chī - ăn), 喝 (hē - uống) |

---

# 运用 (Phần vận dụng)

**1. 双人活动 (Hoạt động theo cặp)**
两人一组，根据实际情况进行问答练习。 (Ghép thành từng cặp, luyện tập đặt câu hỏi và trả lời.)

*例如 (Ví dụ):*
(1)
A: 今天下午你想做什么? (Jīntiān xiàwǔ nǐ xiǎng zuò shénme?)
B: ......
A: 明天你想做什么? (Míngtiān nǐ xiǎng zuò shénme?)
B: ......

(2)
A: 你们班有多少个学生? (Nǐmen bān yǒu duōshao ge xuésheng?)
B: ......
A: 你们学校有多少个老师? (Nǐmen xuéxiào yǒu duōshao ge lǎoshī?)
B: ......

**2. 小组活动 (Hoạt động nhóm)**
3~4人一组，互相询问这个星期的计划并记录，每组请一位同学报告情况。 (Lập nhóm từ 3 đến 4 người, hỏi nhau và ghi lại kế hoạch tuần này, sau đó cử một đại diện trình bày kết quả trao đổi của nhóm.)

| 姓名 (Họ tên) | 星期一 (Thứ 2) | 星期二 (Thứ 3) | 星期三 (Thứ 4) | 星期四 (Thứ 5) | 星期五 (Thứ 6) | 星期六 (Thứ 7) | 星期日 (Chủ nhật) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 谢朋 (Xiè Péng) | 去学校 (qù xuéxiào) | 去商店 (qù shāngdiàn) | | | | | |
`}]},j_={id:"hsk1-m10",level:wt.HSK1,title:"我能坐这儿吗？ (Can I sit here?)",description:'Learn to express existence using "you", use the conjunction "he", modal verb "neng", and polite requests with "qing".',lessons:[{id:"hsk1-l10-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# 课文 1: 在办公室 (Trong văn phòng)

**A: 桌子上有什吗？**
*Zhuōzi shang yǒu shénme?*
(Trên bàn có gì vậy?)

**B: 桌子上有一个电脑和一本书。**
*Zhuōzi shang yǒu yi ge diànnǎo hé yì běn shū.*
(Có một chiếc máy vi tính và một quyển sách.)

**A: 杯子在哪儿？**
*Bēizi zài nǎr?*
(Vậy cái ly đâu?)

**B: 杯子在桌子里。**
*Bēizi zài zhuōzi li.*
(Ở trong bàn.)

---

# 课文 2: 在健身房 (Phòng tập thể dục)

**A: 前面那个人叫什么名字？**
*Qiánmiàn nàge rén jiào shénme míngzi?*
(Người ở phía trước tên gì vậy?)

**B: 她叫王方，在医院工作。**
*Tā jiào Wáng Fāng, zài yīyuàn gōngzuò.*
(Cô ấy tên là Vương Phương, làm việc ở bệnh viện.)

**A: 后面那个人呢？他叫什么名字？**
*Hòumiàn nàge rén ne? Tā jiào shénme míngzi?*
(Còn người ở phía sau? Anh ấy tên gì?)

**B: 他叫谢朋，在商店工作。**
*Tā jiào Xiè Péng, zài shāngdiàn gōngzuò.*
(Anh ấy tên Tạ Bằng, làm việc ở cửa hàng.)

---

# 课文 3: 在图书馆 (Ở thư viện)

**A: 这儿有人吗？**
*Zhèr yǒu rén ma?*
(Chỗ này có ai ngồi chưa?)

**B: 没有。**
*Méi yǒu.*
(Chưa.)

**A: 我能坐这儿吗？**
*Wǒ néng zuò zhèr ma?*
(Tôi có thể ngồi ở đây được không?)

**B: 请坐。**
*Qǐng zuò.*
(Được, xin mời.)

---

# Grammar Notes (注释)

## 1. “有”字句：表示存在 (Câu có từ 有: diễn tả sự tồn tại)
动词“有”可以用于表示存在的句子中，表示某个处所或者位置存在什么。
*(Động từ 有 có thể được dùng trong câu diễn tả sự tồn tại, để cho biết một người/vật đang ở vị trí hoặc địa điểm nào đó. Ví dụ:)*

| 处所/位置 (Từ chỉ vị trí) | 有 | 人/事物 (Người/Vật đang tồn tại) |
| :--- | :---: | :--- |
| 椅子下面 | **有** | 一只小狗。 |
| 学校里 | **有** | 一个商店。 |
| 桌子上 | **有** | 一个电脑和一本书。 |

**否定形式 (Dạng phủ định):** 使用“没有”。宾语前不能带数量定语。
1. 椅子下面**没有**小狗。
2. 学校里**没有**商店。
3. 桌子上**没有**电脑和书。

## 2. 连词“和” (Liên từ 和)
用于连接两个或者两个以上并列的成分，表示一种并列关系。
*(Liên từ 和 được dùng để nối hai (hoặc nhiều hơn) thành phần ngang nhau nhằm thể hiện quan hệ ngang cấp. Ví dụ:)*
1. 我有一个中国朋友**和**一个美国朋友。
2. 我家有三口人，爸爸、妈妈**和**我。
3. 桌子上有一个电脑**和**一本书。

## 3. 能愿动词“能” (Động từ năng nguyện 能)
一般用在动词前，表示一种能力或者可能。也常用于请求、希望获得许可。
*(Động từ năng nguyện 能 thường đứng trước động từ khác để diễn tả năng lực hay khả năng. Thường dùng trong câu hỏi 能......吗? để thỉnh cầu. Ví dụ:)*
1. 明天下午我**能**去商店。
2. 你**能**在这儿写你的名字吗？
3. 我**能**坐这儿吗？

## 4. 用“请”的祈使句 (Câu cầu khiến với 请)
动词“请”后加其他动词，委婉地表示建议、希望对方做某事。
*(Động từ 请 kết hợp với động từ đi sau tạo thành câu cầu khiến lịch sự. Ví dụ:)*
1. **请**写您的名字。
2. **请**喝茶。
3. **请**坐。
`},{id:"hsk1-l10-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words (词语)

| # | Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **桌子** | zhuōzi | dt. | bàn |
| 2 | **上** | shang | dt. | trên, phía trên |
| 3 | **电脑** | diànnǎo | dt. | máy vi tính |
| 4 | **和** | hé | liên. | và |
| 5 | **本** | běn | lượng. | quyển, cuốn |
| 6 | **里** | li | dt. | trong, bên trong |
| 7 | **前面** | qiánmiàn | dt. | phía trước |
| 8 | **后面** | hòumiàn | dt. | phía sau |
| 9 | **这儿** | zhèr | dt. | chỗ này, ở đây |
| 10 | **没有 (没)** | méiyǒu (méi) | phó. | không có |
| 11 | **能** | néng | đtnn. | có thể |
| 12 | **坐** | zuò | dgt. | ngồi |

## Proper Names (专有名词)
* **王方** (Wáng Fāng): Vương Phương
* **谢朋** (Xiè Péng): Tạ Bằng
`},{id:"hsk1-l10-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# Warm-up (热身)

**给下面的词语选择对应的图片 (Chọn hình tương ứng với các từ ngữ bên dưới)**

1. **工作** (gōngzuò) - *[Image F: People in an office]*
2. **桌子** (zhuōzi) - *[Image A: Wooden desk]*
3. **看书** (kàn shū) - *[Image C: Woman reading]*
4. **电脑** (diànnǎo) - *[Image D: Desktop computer]*
5. **坐** (zuò) - *[Image B: Man sitting]*
6. **爸爸和妈妈** (bàba hé māma) - *[Image E: Parents with baby]*

---

# Exercises (练习)

**1. 根据课文内容回答问题 (Trả lời câu hỏi theo nội dung bài học)**
1. 电脑在哪儿？ *(Diànnǎo zài nǎr?)*
2. 书在哪儿？ *(Shū zài nǎr?)*
3. 桌子里面有什么？ *(Zhuōzi lǐmiàn yǒu shénme?)*
4. 哪个人是王方？ *(Nǎge rén shì Wáng Fāng?)*
5. 哪个人是谢朋？ *(Nǎge rén shì Xiè Péng?)*

**2. 描述图片 (Mô tả hình ảnh)**
1. 桌子上 **有** 一本书 **和** 一个电脑。
2. 他在商店 **工作**。
3. 我能 **坐这儿** 吗？

**3. 选择适当的量词填空 (Điền lượng từ thích hợp)**
* 个 (gè) | 口 (kǒu) | 本 (běn) | 块 (kuài)
1. 我家有三 ______ 人。 (*口*)
2. 我买一 ______ 杯子。 (*个*)
3. 我有五 ______ 汉语书。 (*本*)
4. 椅子八十 ______ 钱。 (*块*)

---

# Pronunciation (语音)

## 1. 轻声音节的读法 (Cách đọc âm tiết mang thanh nhẹ)
Âm mang thanh nhẹ thay đổi theo độ cao của âm đứng trước nó.
* **第一声 + 轻声:** 桌子 (zhuōzi)
* **第二声 + 轻声:** 盘子 (pánzi)
* **第三声 + 轻声:** 椅子 (yǐzi)
* **第四声 + 轻声:** 裤子 (kùzi)

## 2. 叠音词 & 后缀 (Từ láy & Hậu tố)
* **爸爸** (bàba), **妈妈** (māma), **爷爷** (yéye), **奶奶** (nǎinai)
* **谢谢** (xièxie), **看看** (kànkan)
* **你们** (nǐmen), **桌子** (zhuōzi), **枕头** (zhěntou)

---

# Characters (汉字)

**1. 认识独体字 (Chữ độc thể)**
* **上** (shàng): Phía trên.
* **下** (xià): Phía dưới.
* **本** (běn): Gốc cây, cội nguồn.
* **末** (mò): Ngọn cây, thứ yếu.

**2. 汉字结构: 全包围结构 (Kết cấu bao quanh hoàn toàn)**
* **四** (sì): Bốn.
* **国** (guó): Đất nước.

**3. 汉字偏旁 (Bộ thủ)**
* **囗** (Bộ Vi): Bao vây. Ví dụ: **国**, **困**.
* **礻** (Bộ Thị): Thần linh, thờ cúng. Ví dụ: **祝**, **视**.

---

# Culture (文化)

**中国人姓名的特点 (Họ tên của người Trung Quốc)**
Họ tên người Trung Quốc: **Họ đứng trước, Tên đứng sau**.
Ví dụ: **李月** (Lǐ Yuè) - 李 (Họ), 月 (Tên).
* **Họ đơn (单姓):** 张 (Zhang), 王 (Wang), 李 (Li).
* **Họ kép (复姓):** 欧阳 (Ouyang), 诸葛 (Zhuge).
* **Xưng hô:** Họ + Nghề nghiệp (Ví dụ: **李老师** - Cô Lý, **王医生** - Bác sĩ Vương).
`}]},tE={id:"hsk1-m11",level:wt.HSK1,title:"现在几点? Xiànzài jǐ diǎn? (Lesson 11)",description:'Learn how to express time, use time words as adverbials, use the noun "qián" (before), and understand the function of the neutral tone.',lessons:[{id:"hsk1-l11-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在图书馆 (Ở thư viện)

<strong>A: 现在几点?</strong>
<em>Xiànzài jǐ diǎn?</em>
(Bây giờ là mấy giờ rồi?)

<strong>B: 现在十点十分。</strong>
<em>Xiànzài shí diǎn shí fēn.</em>
(10 giờ 10 phút.)

<strong>A: 中午几点吃饭?</strong>
<em>Zhōngwǔ jǐ diǎn chī fàn?</em>
(Mấy giờ thì ăn cơm trưa vậy?)

<strong>B: 十二点吃饭。</strong>
<em>Shí'èr diǎn chī fàn.</em>
(12 giờ.)

---

# Text 2: 在家 (Ở nhà)

<strong>A: 爸爸什么时候回家?</strong>
<em>Bàba shénme shíhou huí jiā?</em>
(Chừng nào cha mới về đến nhà?)

<strong>B: 下午五点。</strong>
<em>Xiàwǔ wǔ diǎn.</em>
(5 giờ chiều.)

<strong>A: 我们什么时候去看电影?</strong>
<em>Wǒmen shénme shíhou qù kàn diànyǐng?</em>
(Khi nào chúng ta đi xem phim?)

<strong>B: 六点三十分。</strong>
<em>Liù diǎn sānshí fēn.</em>
(6 giờ rưỡi.)

---

# Text 3: 在家 (Ở nhà)

<strong>A: 我星期一去北京。</strong>
<em>Wǒ xīngqī yī qù Běijīng.</em>
(Thứ hai anh sẽ đi Bắc Kinh.)

<strong>B: 你想在北京住几天?</strong>
<em>Nǐ xiǎng zài Běijīng zhù jǐ tiān?</em>
(Anh định ở Bắc Kinh mấy ngày?)

<strong>A: 住三天。</strong>
<em>Zhù sān tiān.</em>
(Ba ngày.)

<strong>B: 星期五前能回家吗?</strong>
<em>Xīngqī wǔ qián néng huí jiā ma?</em>
(Anh có thể về nhà trước thứ sáu được không?)

<strong>A: 能。</strong>
<em>Néng.</em>
(Chắc là được.)

---

# Grammar Notes

## 1. 时间的表达 (Cách diễn tả thời gian)
汉语表达时间的时候要用“点”、“分”，遵循由大到小的顺序。
(Để diễn tả thời gian, ta dùng 点 và 分 theo trình tự từ đơn vị lớn đến đơn vị nhỏ.)

用“点”来表示整点。例如：
(Để nói giờ chẵn, ta dùng 点. Ví dụ:)
* 9:00 -> <strong>九点</strong>
* 11:00 -> <strong>十一点</strong>
* 2:00 -> <strong>两点</strong> (liǎng diǎn)

<em>注意：在表达两点时，我们说两点(liǎng diǎn)，不说二点(èr diǎn)。
Chú ý: Khi nói 2 giờ, chúng ta dùng 两点 (liǎng diǎn) chứ không dùng 二点 (èr diǎn).</em>

当不是整点的时候要用到“分”，格式是“...点...分”。例如：
(Khi thời gian cần diễn tả không phải giờ chẵn thì ta dùng thêm 分 theo cấu trúc: 点 分. Ví dụ:)
* 5:30 -> <strong>五点三十分</strong>
* 11:10 -> <strong>十一点十分</strong>
* 2:05 -> <strong>两点零五分</strong> (liǎng diǎn líng wǔ fēn - 2 giờ lẻ 5 phút)

如果区分上午或者下午，一般格式是“上午...点(...分)，下午...点(...分)”。例如：
(Để phân biệt thời gian buổi sáng và thời gian buổi chiều, người ta thường dùng cấu trúc: 上午....点(....分) và 下午....点(....分). Ví dụ:)
* 8:00 sáng -> <strong>上午八点</strong>
* 3:10 chiều -> <strong>下午三点十分</strong>
* 5:25 chiều -> <strong>下午五点二十五分</strong>

## 2. 时间词做状语 (Từ chỉ thời gian làm trạng ngữ)
时间词在句子中做状语，经常出现在主语后边，也可以在主语前边。例如：
(Khi được dùng làm trạng ngữ trong câu, từ chỉ thời gian thường đứng sau chủ ngữ, đôi lúc nó cũng có thể đứng trước chủ ngữ. Ví dụ:)

| 主语 (Chủ ngữ) | 时间状语 (Trạng ngữ TG) | 谓语 (Vị ngữ) |
| :--- | :--- | :--- |
| 妈妈 | <strong>六点</strong> | 做饭。 |
| 李老师 | <strong>上午八点</strong> | 去学校。 |
| 我 | <strong>星期一</strong> | 去北京。 |

| 时间状语 (Trạng ngữ TG) | 主语 (Chủ ngữ) | 谓语 (Vị ngữ) |
| :--- | :--- | :--- |
| <strong>七点</strong> | 我 | 吃饭。 |
| <strong>中午十二点</strong> | 我们 | 回家。 |
| <strong>下午五点</strong> | 他们 | 去看电影。 |

## 3. 名词“前” (Danh từ 前)
名词“前”可以表示现在或者所说的某个时间以前的时间。例如：
(Danh từ 前 có thể được dùng để chỉ khoảng thời gian trước hiện tại hay trước thời điểm được đề cập đến trong câu. Ví dụ:)

1. 三天前、一个星期前、四点前、星期五前
2. A: 你什么时候去学校？ B: 八点前。
3. A: 你什么时候回北京？ B: 星期六前。
4. A: (你)星期五前能回家吗？ B: 能。
`},{id:"hsk1-l11-vocab",title:"New Words & Pronunciation",type:W.VOCABULARY,content:`
# New Words

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| <strong>现在</strong> | xiànzài | dt. | bây giờ, hiện tại |
| <strong>点</strong> | diǎn | lượng. | giờ |
| <strong>分</strong> | fēn | lượng. | phút |
| <strong>中午</strong> | zhōngwǔ | dt. | buổi trưa |
| <strong>吃饭</strong> | chī fàn | đgt. | ăn cơm |
| <strong>时候</strong> | shíhou | dt. | lúc, khi |
| <strong>回</strong> | huí | đgt. | về, trở về |
| <strong>我们</strong> | wǒmen | dt. | chúng ta |
| <strong>电影</strong> | diànyǐng | dt. | phim |
| <strong>住</strong> | zhù | đgt. | ở |
| <strong>前</strong> | qián | dt. | trước |

**Danh từ riêng:**
* <strong>北京</strong> | Běijīng | Bắc Kinh (thủ đô của Trung Quốc)

---

# Pronunciation (拼音)

## 轻声的功能 (Chức năng của thanh nhẹ)
汉语中轻声不仅是一种音变现象，而且还能区分词义。比如：东西，读作“dōngxī”指方向，读作“dōngxi”指物品。
(Thanh nhẹ không chỉ là hiện tượng biến đổi âm mà còn có chức năng phân biệt nghĩa của từ. Chẳng hạn, 东西 chỉ hướng đông và hướng tây khi được đọc là “dōngxī” nhưng lại mang nghĩa là đồ vật khi được đọc là “dōngxi".)

| Từ | Đọc thanh nhẹ | Đọc giữ nguyên thanh |
| :--- | :--- | :--- |
| <strong>老子</strong> | lǎozi: (từ lóng) bố, cha (dt.) | Lǎozi: Lão Tử (danh từ riêng, nhà tư tưởng TQ) |
| <strong>买卖</strong> | mǎimai: việc buôn bán (dt.) | mǎimài: mua và bán (đgt.) |
| <strong>大意</strong> | dàyi: lơ là (tt.) | dàyì: đại ý (dt.) |
`},{id:"hsk1-l11-exercise",title:"Exercises & Characters",type:W.EXERCISE,content:`
# Warm-up (热身)

**给下面的词语选择对应的时间 (Chọn hình tương ứng với các mốc thời gian bên dưới):**
* A: 10:10
* B: 2:00
* C: 3:05
* D: 12:00
* E: 6:30
* F: 9:45
* G: 15:00

---

# Comprehension (练习)

**1. 分角色朗读课文**
(Đóng vai các nhân vật trong bài học và đọc to các câu đối thoại.)

**2. 根据课文内容回答问题 (Trả lời câu hỏi theo nội dung bài học):**
1. 现在几点? (Xiànzài jǐ diǎn?)
2. 他们几点吃饭? (Tāmen jǐ diǎn chī fàn?)
3. 爸爸什么时候回家? (Bàba shénme shíhou huí jiā?)
4. 他们什么时候去看电影? (Tāmen shénme shíhou qù kàn diànyǐng?)
5. 他去哪儿? 什么时候能回家? (Tā qù nǎr? Shénme shíhou néng huí jiā?)

**3. 用本课新学的语言点和词语描述图片 (Sử dụng từ ngữ trong bài để mô tả hình ảnh):**
* [Image 1] 她 <strong>在学校</strong> (Tā zài xuéxiào)
* [Image 2] 王方中午 <strong>去商店</strong> (Wáng Fāng zhōngwǔ qù shāngdiàn)
* [Image 3] 他们很忙 (bận), 星期六 <strong>也工作</strong>。 (Tāmen hěn máng, xīngqī liù yě gōngzuò.)
* [Image 4] 她上午不喝茶, 下午 <strong>前喝茶</strong>。 (Tā shàngwǔ bù hē chá, xiàwǔ qián hē chá.)

---

# Characters (汉字)

## 1. 认识独体字 (Làm quen với chữ đơn/độc thể)

1. <strong>午 (wǔ - ngọ)</strong>
   “午”，表示一天中白天十一点到一点的一段时间。
   (Chỉ khoảng thời gian từ 11 giờ đến 13 giờ.)
2. <strong>电 (diàn - điện)</strong>
   “电”，本义是下雨时天上出现的锋利多齿的闪光，是一种物理现象，也是一种能源。
   (Ban đầu chỉ tia chớp ngoằn ngoèo xuất hiện trên bầu trời khi có mưa. Điện là hiện tượng vật lý và cũng là một loại năng lượng.)

## 2. 汉字偏旁“阝”和“亻” (Các bộ của chữ Hán: 阝 và 亻)

| 偏旁 (Bộ) | 解释 (Chú thích) | 例字 (Chữ Hán) |
| :---: | :--- | :--- |
| <strong>阝</strong> | 耳刀旁，一般跟地形、位置有关系。 (Bộ 阝 thường liên quan đến địa hình hay vị trí.) | <strong>院</strong> (yuàn - sân), <strong>阳</strong> (yáng - mặt trời) |
| <strong>亻</strong> | 单人旁，一般和人有关系。 (Bộ 亻 thường liên quan đến con người.) | <strong>你</strong> (nǐ - anh/chị/bạn), <strong>他</strong> (tā - anh ấy/ông ấy) |

---

# Application (运用)

**1. 双人活动 (Hoạt động theo cặp)**
两人一组，用“现在...点...分”说说下面的时间。
(Ghép thành từng cặp, sử dụng cấu trúc 现在...点...分 để nói về thời gian.)
* 例如 (Ví dụ):
  A: 现在几点? (Xiànzài jǐ diǎn?)
  B: 现在八点十八分。 (Xiànzài bā diǎn shíbā fēn.)
* Practice times: 03:30, 01:27, 11:23, 10:43, 04:15, 05:58, 12:27, 02:34, 07:45, 10:05.

**2. 小组活动 (Hoạt động nhóm)**
3~4人一组，互相询问并记录一日作息习惯，每组请一位同学报告情况。
(Lập nhóm từ 3 đến 4 người, hỏi và ghi lại thói quen làm việc, nghỉ ngơi trong ngày của nhau, sau đó cử một đại diện trình bày kết quả trao đổi của nhóm.)
* 例如 (Ví dụ):
  A: 你几点吃早饭? (Nǐ jǐ diǎn chī zǎofàn?)
  B: 我七点吃早饭。 (Wǒ qī diǎn chī zǎofàn.)

| 活动 (Hoạt động) | 小王 (Xiǎo Wáng) |
| :--- | :--- |
| 吃早饭 (chī zǎofàn) | 7:00 |
| 来学校 (lái xuéxiào) | 8:20 |
| 看书 (kàn shū) | 15:00 |
| 回家 (huí jiā) | 18:00前 (qián) |
| 看电视 (kàn diànshì) | 晚上20:00 (wǎnshang) |
`}]},eE={id:"hsk1-m12",level:wt.HSK1,title:"Míngtiān tiānqì zěnmeyàng? 明天天气怎么样？ (Lesson 12)",description:'Hỏi về thời tiết, tình trạng sức khỏe và cách sử dụng trợ động từ "会" để diễn tả khả năng xảy ra.',lessons:[{id:"hsk1-l12-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在路上 Trên đường (On the road)

**A: 昨天北京的天气怎么样？**
*Zuótiān Běijīng de tiānqì zěnmeyàng?*
(Hôm qua thời tiết ở Bắc Kinh thế nào?)

**B: 太热了。**
*Tài rè le.*
(Nóng lắm.)

**A: 明天呢？明天天气怎么样？**
*Míngtiān ne? Míngtiān tiānqì zěnmeyàng?*
(Còn ngày mai thì sao? Thời tiết thế nào?)

**B: 明天天气很好，不冷不热。**
*Míngtiān tiānqì hěn hǎo, bù lěng bú rè.*
(Ngày mai thời tiết rất đẹp, không lạnh cũng không nóng.)

---

# Text 2: 在健身房 Ở phòng tập thể dục (In the gym)

**A: 今天会下雨吗？**
*Jīntiān huì xià yǔ ma?*
(Hôm nay có mưa không nhỉ?)

**B: 今天不会下雨。**
*Jīntiān bú huì xià yǔ.*
(Hôm nay không mưa đâu.)

**A: 王小姐今天会来吗？**
*Wáng xiǎojiě jīntiān huì lái ma?*
(Hôm nay cô Vương có đến không nhỉ?)

**B: 不会来，天气太冷了。**
*Bú huì lái, tiānqì tài lěng le.*
(Cô ấy không đến đâu, trời lạnh quá mà.)

---

# Text 3: 在病房 Trong phòng bệnh (In the ward)

**A: 你身体怎么样？**
*Nǐ shēntǐ zěnmeyàng?*
(Sức khỏe của anh thế nào?)

**B: 我身体不太好。天气太热了，不爱吃饭。**
*Wǒ shēntǐ bú tài hǎo. Tiānqì tài rè le, bú ài chī fàn.*
(Tôi không được khỏe lắm. Trời nóng quá, tôi chẳng muốn ăn cơm.)

**A: 你多吃些水果，多喝水。**
*Nǐ duō chī xiē shuǐguǒ, duō hē shuǐ.*
(Anh hãy ăn thêm một ít trái cây và uống thêm nước nhé.)

**B: 谢谢你，医生。**
*Xièxie nǐ, yīshēng.*
(Cảm ơn bác sĩ.)

---

# Grammar Notes / 注释

## 1. 疑问代词“怎么样” (Đại từ nghi vấn 怎么样)
“怎么样”用来询问状况。
*zěnmeyàng* được dùng để hỏi tình hình/tình trạng.

1. 你的汉语**怎么样**？
2. 你妈妈身体**怎么样**？
3. 明天天气**怎么样**？

## 2. 主谓谓语句 (Câu có vị ngữ là kết cấu chủ-vị)
主谓谓语句中的谓语是一个主谓结构的短语。
Trong loại câu này, vị ngữ là một cụm từ có kết cấu chủ-vị.

| 主语 Chủ ngữ | 全句谓语 (主语 + 谓语) |
| :--- | :--- |
| 我 | 身体不太好。 |
| 明天 | 天气很好。 |
| 你 | 身体怎么样？ |

*Chú ý: Chủ ngữ trong kết cấu chủ vị (vị ngữ của cả câu) thường là một bộ phận thuộc chủ ngữ của cả câu hoặc có liên quan đến nó.*

## 3. 程度副词“太” (Phó từ chỉ mức độ 太)
副词“太”表示程度深的意义。用“太”的句尾常带“了”。否定句不用“了”。
Phó từ *tài* diễn tả mức độ cao hơn mức thông thường. Khi khẳng định thường dùng *le* ở cuối; phủ định không dùng *le*.

1. **太**热**了**。
2. 天气**太**冷**了**。
3. 我身体**不太**好。

## 4. 能愿动词“会” (2) (Động từ năng nguyện 会)
“会”在句中表示所说的情况有可能实现。
*huì* được dùng để diễn tả một tình huống có khả năng xảy ra.

1. A: 爸爸八点前**会**回家吗？ B: **会**。
2. A: 明天她**会**来吗？ B: 她**会**来。
3. A: 今天**会**下雨吗？ B: 今天不**会**下雨。
`},{id:"hsk1-l12-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words / 生词

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| **天气** | tiānqì | dt. | thời tiết / weather |
| **怎么样** | zěnmeyàng | đt. | như thế nào / how |
| **太** | tài | phó. | quá, lắm / too, extremely |
| **热** | rè | tt. | nóng / hot |
| **冷** | lěng | tt. | lạnh / cold |
| **下雨** | xià yǔ | | có mưa, đổ mưa / to rain |
| **下** | xià | đgt. | rơi (mưa, tuyết) / to fall |
| **雨** | yǔ | dt. | mưa / rain |
| **小姐** | xiǎojiě | dt. | cô / miss, young lady |
| **来** | lái | đgt. | đến, tới / to come |
| **身体** | shēntǐ | dt. | sức khỏe, cơ thể / health, body |
| **爱** | ài | đgt. | yêu, thích / to love, to like |
| **些** | xiē | lượng. | một ít, một vài / some, a few |
| **水果** | shuǐguǒ | dt. | trái cây / fruit |
| **水** | shuǐ | dt. | nước / water |
| **医生** | yīshēng | dt. | bác sĩ / doctor |
`},{id:"hsk1-l12-exercise",title:"Exercises & Phonetics",type:W.EXERCISE,content:`
# Warm-up / 热身

**Match the words with the corresponding images:**

1. **冷** (lěng) - *[Image C: A dog in winter clothes]*
2. **水** (shuǐ) - *[Image A: Three glasses of water]*
3. **热** (rè) - *[Image D: A dog under an umbrella]*
4. **水果** (shuǐguǒ) - *[Image F: Various colorful fruits]*
5. **下雨** (xià yǔ) - *[Image B: A person in a raincoat]*
6. **医生** (yīshēng) - *[Image E: A doctor smiling]*

---

# Exercises / 练习

## 1. Comprehension Questions
1. 昨天北京的天气怎么样？ (Zuótiān Běijīng de tiānqì zěnmeyàng?)
2. 明天天气怎么样？ (Míngtiān tiānqì zěnmeyàng?)
3. 今天会下雨吗？ (Jīntiān huì xià yǔ ma?)
4. 王小姐会来吗？ (Wáng Xiǎojiě huì lái ma?)
5. 他的身体怎么样？ (Tā de shēntǐ zěnmeyàng?)

## 2. Describe the pictures
* 妈妈 **______** 不太好。 (Māma ______ bú tài hǎo.)
* 明天天气很好，不会 **______**。 (Míngtiān tiānqì hěn hǎo, bú huì ______.)
* 王小姐爱吃 **______**，不爱吃饭。 (Wáng Xiǎojiě ài chī ______ , bú ài chī fàn.)
* 今天天气 **______**，你多喝水。 (Jīntiān tiānqì ______ , nǐ duō hē shuǐ.)

---

# Phonetics / 拼音
**Trisyllabic tone combinations (starting with tone 1):**

* **1+1+1**: 星期一 (xīngqī yī), 冰激凌 (bīngjīlíng)
* **1+1+2**: 星期五 (xīngqī wǔ)
* **1+2+3**: 吃苹果 (chī píngguǒ)
* **1+2+4**: 加拿大 (Jiānádà)
* **1+3+2**: 堆雪人 (duī xuěrén)
* **1+3+4**: 吃米饭 (chī mǐfàn)
* **1+4+2**: 机器人 (jīqìrén)

---

# Characters / 汉字

## 1. Single Component Characters
* **天 (tiān)**: Bầu trời (sky/day).
* **气 (qì)**: Khí (gas/air).
* **雨 (yǔ)**: Mưa (rain).

## 2. Radicals
* **女** (Nữ): Liên quan đến phụ nữ (姐 jiě, 妈 mā).
* **饣** (Thực): Liên quan đến thức ăn (饭 fàn, 饮 yǐn).
`}]},nE={id:"hsk1-m13",level:wt.HSK1,title:"他在学做中国菜呢 (He is learning to cook Chinese food)",description:"Learn to describe ongoing actions using 'zai...ne', use the interjection 'wei', read phone numbers, and use the particle 'ba'.",lessons:[{id:"hsk1-l13-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# 课文 (Texts)

## Text 1: 打电话 (Calling)
<strong>A: 喂, 你在做什么呢?</strong>
<em>Wèi, nǐ zài zuò shénme ne?</em>
(A lô, anh đang làm gì vậy?)

<strong>B: 我在看书呢。</strong>
<em>Wǒ zài kàn shū ne.</em>
(Tôi đang đọc sách.)

<strong>A: 大卫也在看书吗?</strong>
<em>Dàwèi yě zài kàn shū ma?</em>
(David cũng đang đọc sách à?)

<strong>B: 他没看书, 他在学做中国菜呢。</strong>
<em>Tā méi kàn shū, tā zài xué zuò Zhōngguó cài ne.</em>
(Không phải, anh ấy đang học nấu món ăn Trung Quốc.)

---

## Text 2: 在咖啡馆儿 (In the coffee shop)
<strong>A: 昨天上午你在做什么呢?</strong>
<em>Zuótiān shàngwǔ nǐ zài zuò shénme ne?</em>
(Chị làm gì vào sáng hôm qua vậy?)

<strong>B: 我在睡觉呢。你呢?</strong>
<em>Wǒ zài shuì jiào ne. Nǐ ne?</em>
(Tôi ngủ. Còn cô thì sao?)

<strong>A: 我在家看电视呢。你喜欢看电视吗?</strong>
<em>Wǒ zài jiā kàn diànshì ne. Nǐ xǐhuan kàn diànshì ma?</em>
(Tôi xem tivi ở nhà. Chị có thích xem tivi không?)

<strong>B: 我不喜欢看电视, 我喜欢看电影。</strong>
<em>Wǒ bù xǐhuan kàn diànshì, wǒ xǐhuan kàn diànyǐng.</em>
(Không, tôi thích xem phim.)

---

## Text 3: 在学校办公室 (In the school office)
<strong>A: 82304155, 这是李老师的电话吗?</strong>
<em>Bā èr sān líng sì yāo wǔ wǔ, zhè shì Lǐ lǎoshī de diànhuà ma?</em>
(82304155, đây là số điện thoại của cô Lý phải không?)

<strong>B: 不是。她的电话是 82304156。</strong>
<em>Bú shì. Tā de diànhuà shì bā èr sān líng sì yāo wǔ liù.</em>
(Không phải. Số của cô ấy là 82304156.)

<strong>A: 好, 我现在给她打电话。</strong>
<em>Hǎo, wǒ xiànzài gěi tā dǎ diànhuà.</em>
(Bây giờ tôi gọi điện cho cô ấy đây.)

<strong>B: 她在工作呢, 你下午打吧。</strong>
<em>Tā zài gōngzuò ne, nǐ xiàwǔ dǎ ba.</em>
(Cô ấy đang làm việc, buổi chiều anh hãy gọi.)

---

# 注释 (Notes)

## 1. 叹词“喂” (The Interjection "wèi")
Used to start a phone conversation.
- A: 喂, 李老师在家吗? (Hello, is Teacher Li home?)
- B: 她不在家, 去学校了。 (She's not home, went to school.)

## 2. “在……呢” (Action in Progress)
Indicates an ongoing action.
Structure: **Subject + 在 + Verb + Object + (呢)**

| 主语 (S) | 在 + 谓语 (V+O) | (呢) |
| :--- | :--- | :--- |
| 我 | 睡觉 | 呢 |
| 你 | 做什么 | 呢 |
| 小王 | 学习汉语 | |

**Negation:** Use **没(在) + Verb**, and **cannot** use 呢 at the end.
- 我没在看电视。 (I am not watching TV.)
- 他没看书。 (He isn't reading.)

## 3. 电话号码 (Phone Numbers)
Numbers are read digit by digit. Specifically, the digit **1** is read as **yāo** instead of yī.
- 82304156: bā èr sān líng sì **yāo** wǔ liù.

## 4. 语气助词“吧” (The Particle "ba")
Used at the end of an imperative sentence to express a suggestion or command, making the tone softer.
- 我们在家吃饭吧。 (Let's eat at home.)
- 你下午打吧。 (Call in the afternoon [suggested].)
`},{id:"hsk1-l13-vocab",title:"New Words",type:W.VOCABULARY,content:`
# 生词 (New Words)

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| **喂** | wèi | ct. | hello / hey |
| **也** | yě | phó. | also / too |
| **学习 (学)** | xuéxí (xué) | đgt. | to study / learn |
| **上午** | shàngwǔ | dt. | morning (before noon) |
| **睡觉** | shuì jiào | đgt. | to sleep |
| **电视** | diànshì | dt. | television |
| **喜欢** | xǐhuan | đgt. | to like |
| **给** | gěi | giới. | to / for (someone) |
| **打电话** | dǎ diànhuà | | to make a phone call |
| **吧** | ba | trợ. | (suggestion particle) |

## Danh từ riêng
| Hanzi | Pinyin | Meaning |
| :--- | :--- | :--- |
| **大卫** | Dàwèi | David |
`},{id:"hsk1-l13-exercise",title:"Exercises & Phonetics",type:W.EXERCISE,content:`
# 热身 (Warm-up)
Match the words with the images:
1. **看电视** (kàn diànshì) - [Image B: Watching soccer]
2. **打电话** (dǎ diànhuà) - [Image C: Talking on mobile]
3. **看书** (kàn shū) - [Image D: Reading book]
4. **做饭** (zuò fàn) - [Image E: Couple cooking]
5. **睡觉** (shuì jiào) - [Image A: Sleeping]
6. **学习** (xuéxí) - [Image F: Classroom]

---

# 练习 (Exercises)

## 1. 根据课文内容回答问题 (Answer based on texts)
1. 大卫在做什么呢? (Dàwèi zài zuò shénme ne?)
2. 昨天上午他在看书吗? (Zuótiān shàngwǔ tā zài kàn shū ma?)
3. 他们都喜欢看电视吗? (Tāmen dōu xǐhuan kàn diànshì ma?)
4. 李老师的电话号码是多少? (Lǐ lǎoshī de diànhuà hàomǎ shì duōshao?)
5. 李老师在做什么呢? (Lǐ lǎoshī zài zuò shénme ne?)

## 2. 拼音: 三音节词语的声调搭配(2) (Phonetics: 3-syllable Tone Combinations starting with Tone 2)
- 2+1+1: 研究生 (yánjiūshēng)
- 2+1+3: 图书馆 (túshūguǎn)
- 2+2+2: 韩国人 (Hánguó rén)
- 2+3+4: 牛仔裤 (niúzǎikù)
- 2+4+2: 服务员 (fúwùyuán)
- 2+4+3: 博物馆 (bówùguǎn)

---

# 汉字 (Characters)

## 1. 认识独体字 (Single Component Characters)
- **日 (rì):** Sun / Day. Originally a circle with a dot.
- **目 (mù):** Eye. Originally looked like an eye.
- **习 (xí):** To practice / habit. Originally meant birds flapping wings to learn flight.

## 2. 汉字偏旁 (Radicals)
- **日 (日字旁):** Related to time (e.g., 明, 时).
- **目 (目字旁):** Related to eyes (e.g., 眼, 睡).

---

# 运用 (Application)

## Group Activity: Phone Registry
Interview 3-4 friends and record their phone numbers. Remember to use "yāo" for 1.

| 姓名 (Name) | 电话 (Phone Number) |
| :--- | :--- |
| 小王 | 139-0135-1290 |
| ... | ... |
`}]},oE={id:"hsk1-m14",level:wt.HSK1,title:"她买了不少衣服 (Lesson 14)",description:"Learn how to use the particle 'le' for completed actions, the noun 'hou' for 'after', the modal particle 'a', and the adverb 'dou'.",lessons:[{id:"hsk1-l14-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# Text 1: 在宿舍 (Ký túc xá)

**A: 昨天上午你去哪儿了？** *Zuótiān shàngwǔ nǐ qù nǎr le?* (Sáng hôm qua bạn đi đâu vậy?)

**B: 我去商店买东西了。** *Wǒ qù shāngdiàn mǎi dōngxi le.* (Mình đến cửa hàng để mua đồ.)

**A: 你买什么了？** *Nǐ mǎi shénme le?* (Bạn mua gì vậy?)

**B: 我买了一点儿苹果。** *Wǒ mǎile yìdiǎnr píngguo.* (Mình mua một ít táo.)

---

# Text 2: 在公司 (Trong công ty)

**A: 你看见张先生了吗？** *Nǐ kànjiàn Zhāng xiānsheng le ma?* (Anh có thấy ông Trương không?)

**B: 看见了，他去学开车了。** *Kànjiàn le, tā qù xué kāi chē le.* (Có, ông ấy đi học lái xe rồi.)

**A: 他什么时候能回来？** *Tā shénme shíhou néng huílai?* (Khi nào ông ấy quay lại?)

**B: 40 分钟后回来。** *Sìshí fēnzhōng hòu huílai.* (40 phút nữa.)

---

# Text 3: 在商店门口 (Trước cửa hàng)

**A: 王方的衣服太漂亮了！** *Wáng Fāng de yīfu tài piàoliang le!* (Quần áo của Vương Phương đẹp quá!)

**B: 是啊，她买了不少衣服。** *Shì a, tā mǎile bùshǎo yīfu.* (Đúng vậy. Cô ấy mua nhiều quần áo lắm.)

**A: 你买什么了？** *Nǐ mǎi shénme le?* (Còn bạn mua những gì?)

**B: 我没买，这些都是王方的东西。** *Wǒ méi mǎi, zhèxiē dōu shì Wáng Fāng de dōngxi.* (Mình không mua gì cả, những thứ này đều là đồ của Vương Phương.)

---

# Grammar Notes (注释)

## 1. “了” 表发生或完成了 (Diễn tả sự việc đã xảy ra hay hoàn thành)
**A. 用于句尾 (Được dùng ở cuối câu):**
| 主语 (Chủ ngữ) | 谓语 (Vị ngữ) | 了 |
| :--- | :--- | :--- |
| 我 | 去商店 | **了**。 |
| 他 | 去学开车 | **了**。 |
| 你 | 买什么 | **了**？ |

**B. 用于动词后带宾语 (Đứng giữa động từ và tân ngữ):**
Trước tân ngữ thường phải có định ngữ (số lượng, tính từ, đại từ).
| 主语 (Chủ ngữ) | 动词 (Động từ) | 了 | 定语 (Định ngữ) | 宾语 (Tân ngữ) |
| :--- | :--- | :--- | :--- | :--- |
| 她 | 买 | **了** | 一点儿 | 苹果。 |
| 我 | 买 | **了** | 不少 | 衣服。 |
| 你 | 看见 | **了** | 几个 | 人？ |

**C. 否定形式 (Hình thức phủ định):**
Sử dụng **没 + 动词 (+ 宾语)**, bỏ "了".
* 她**没**去商店。
* 我**没**买。
* 我**没**看见张先生。

## 2. 名词 “后” (Danh từ 后)
Biểu thị thời gian sau thời điểm hiện tại hoặc sau thời điểm được đề cập.
1. 五点**后** | 40 分钟**后** | 星期三**后**
2. A: 你几点去工作？ B: 八点**后**。
3. A: 你什么时候回家？ B: 五点**后**。
4. A: 他什么时候能回来？ B: 40 分钟**后**回来。

## 3. 语气助词 “啊” (Trợ từ ngữ khí 啊)
Dùng ở cuối câu để tăng sắc thái biểu cảm. Phát âm biến đổi theo âm cuối của từ đứng trước.
* 是**啊** (Shì a).
* 好**啊** (Hǎo a).
* 王方的衣服太漂亮了！ 是**啊**，她买了不少衣服。

## 4. 副词 “都” (Phó từ 都)
Bao gồm toàn bộ. Đối tượng được tổng quát phải đặt trước “都”.
1. 我们**都**是中国人。
2. 他们**都**喜欢喝茶。
3. 这些**都**是王方的东西。
`},{id:"hsk1-l14-vocab",title:"New Words",type:W.VOCABULARY,content:`
# New Words (从词)

| Hanzi | Pinyin | POS | Meaning (Vietnamese) |
| :--- | :--- | :--- | :--- |
| **东西** | dōngxi | dt. | đồ, đồ đạc |
| **一点儿** | yìdiǎnr | sl. | một ít, một chút |
| **苹果** | píngguo | dt. | táo |
| **看见** | kànjiàn | đgt. | nhìn thấy |
| **先生** | xiānsheng | dt. | ông, ngài |
| **开** | kāi | đgt. | lái |
| **车** | chē | dt. | xe |
| **回来** | huílai | đgt. | quay về, trở lại |
| **分钟** | fēnzhōng | dt. | phút |
| **后** | hòu | dt. | sau |
| **衣服** | yīfu | dt. | quần áo |
| **漂亮** | piàoliang | tt. | đẹp |
| **啊** | a | trợ. | trợ từ ngữ khí |
| **少** | shǎo | tt. | ít |
| **不少** | bùshǎo | tt. | nhiều |
| **这些** | zhèxiē | dt. | những thứ này |
| **都** | dōu | phó. | đều |

# Proper Nouns (专有名词)

| Hanzi | Pinyin | Meaning |
| :--- | :--- | :--- |
| **张** | Zhāng | Trương (họ) |
| **王方** | Wáng Fāng | Vương Phương |
`},{id:"hsk1-l14-exercise",title:"Exercises, Phonetics & Characters",type:W.EXERCISE,content:`
# Warm-up (热身)

**给下面的词语选择对应的图片 (Chọn hình tương ứng với các từ ngữ bên dưới)**

1. **苹果** (píngguo) - *[Image of Apples]*
2. **车** (chē) - *[Image of Cars]*
3. **衣服** (yīfu) - *[Image of Clothes]*
4. **商店** (shāngdiàn) - **
5. **书店** (shūdiàn) - **
6. **英语书** (Yīngyǔ shū) - *[Image of English Books]*

---

# Comprehension Questions (根据课文内容回答问题)

1. 昨天上午她去哪儿了？ (Zuótiān shàngwǔ tā qù nǎr le?)
2. 她买什么了？ (Tā mǎi shénme le?)
3. 张先生什么时候能回来？ (Zhāng xiānsheng shénme shíhou néng huílai?)
4. 王方买什么了？ (Wáng Fāng mǎi shénme le?)
5. 王方的朋友买什么了？ (Wáng Fāng de péngyou mǎi shénme le?)

---

# Describe the Pictures (描述图片)

1. 妈妈去商店买了 **苹果**。 (Māma qù shāngdiàn mǎile píngguo.)
2. 她下午去学 **开车** 了。 (Tā xiàwǔ qù xué kāi chē le.)
3. 桌子上 **都** 是张先生的东西。 (Zhuōzi shang dōu shì Zhāng xiānsheng de dōngxi.)
4. 丽丽买了 **不少** 衣服。 (Lìlì mǎile bùshǎo yīfu.)

---

# Phonetics (拼音)

**三音节词语的声调搭配 (3)：三声音节开头**
* **3+1+1**: 洗衣机 (xǐyījī)
* **3+1+2**: 普通人 (pǔtōng rén)
* **3+1+3**: 总经理 (zǒngjīnglǐ)
* **3+1+4**: 火车票 (huǒchē piào)
* **3+2+1**: 史学家 (shǐxuéjiā)
* **3+2+4**: 美容院 (měiróngyuàn)
* **3+3+3**: 米老鼠 (Mǐlǎoshǔ)
* **3+4+4**: 打电话 (dǎ diànhuà)

---

# Characters (汉字)

**1. 认识独体字 (Làm quen với chữ đơn)**
* **开 (kāi)**: Hình dạng hai tay kéo chốt cửa. Nghĩa gốc: mở cửa. Nay: lái xe (开车), ra hoa (开花).
* **车 (chē)**: Hình dạng dụng cụ có bánh xe hai bên. Nay: phương tiện giao thông (taxi, tàu hỏa).
* **回 (huí)**: Hình dạng dòng nước uốn quanh. Nghĩa gốc: xoay tròn. Nay: về, trở về.

**2. 汉字偏旁 (Các bộ của chữ Hán)**
* **月 (Bộ Nguyệt)**: Liên quan đến thân thể, thịt (胖 - béo, 服 - quần áo).
* **扌 (Bộ Thủ)**: Liên quan đến hành động của tay (打 - đánh, 找 - tìm).

---

# Activities (运用)

**1. 双人活动 (Hoạt động theo cặp)**
Hỏi nhau về những thứ đã mua:
* A: 你去商店买什么了？
* B: 我买了苹果/衣服/书...

**2. 小组活动 (Hoạt động nhóm)**
Ghi lại hoạt động một ngày:
| 人名 (Tên) | 时间 (Thời gian) | 地方 (Địa điểm) | 做什么 (Hoạt động) |
| :--- | :--- | :--- | :--- |
| 小王 | 星期一上午 | 电影院 | 看了一个电影 |
`}]},iE={id:"hsk1-m15",level:wt.HSK1,title:"我是坐飞机来的 (Lesson 15)",description:"学习使用“是……的”句强调时间、地点、方式，以及日期的表达方法。",lessons:[{id:"hsk1-l15-texts",title:"课文与语法 (Texts & Grammar)",type:W.GRAMMAR,content:`
# 课文 1: 在餐桌旁 (Ở bàn ăn)

<strong>A: 你和李小姐是什么时候认识的？</strong>
<em>Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?</em>
(Cô và cô Lý quen nhau khi nào vậy?)

<strong>B: 我们是2011年9月认识的。</strong>
<em>Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.</em>
(Chúng tôi quen nhau vào tháng 9 năm 2011.)

<strong>A: 你们在哪儿认识 service 的？</strong>
<em>Nǐmen zài nǎr rènshi de?</em>
(Thế các cô quen nhau ở đâu?)

<strong>B: 我们是在学校认识的，她是我大学同学。</strong>
<em>Wǒmen shì zài xuéxiào rènshi de, tā shì wǒ dàxué tóngxué.</em>
(Ở trường. Cô ấy học chung lớp với tôi ở đại học.)

---

# 课文 2: 在饭店门口 (Trước khách sạn)

[Image of 出租车]

<strong>A: 你们是怎么来饭店的？</strong>
<em>Nǐmen shì zěnme lái fàndiàn de?</em>
(Anh chị đến khách sạn bằng cách nào?)

<strong>B: 我们是坐出租车来的。</strong>
<em>Wǒmen shì zuò chūzūchē lái de.</em>
(Chúng tôi đi taxi đến.)

<strong>A: 李先生呢？</strong>
<em>Lǐ xiānsheng ne?</em>
(Còn ông Lý thì sao?)

<strong>B: 他是和朋友一起开车来的。</strong>
<em>Tā shì hé péngyou yìqǐ kāi chē lái de.</em>
(Ông ấy và bạn cùng lái xe đến đây.)

---

# 课文 3: 在公司 (Trong công ty)



<strong>A: 很高兴认识您！李小姐。</strong>
<em>Hěn gāoxìng rènshi nín! Lǐ xiǎojiě.</em>
(Cô Lý, rất vui được biết cô.)

<strong>B: 认识你我也很高兴！</strong>
<em>Rènshi nǐ wǒ yě hěn gāoxìng!</em>
(Tôi cũng rất vui được biết anh!)

<strong>A: 听张先生说，您是坐飞机来北京的？</strong>
<em>Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái Běijīng de?</em>
(Nghe ông Trương nói cô đáp máy bay đến Bắc Kinh, phải vậy không?)

<strong>B: 是的。</strong>
<em>Shì de.</em>
(Đúng vậy.)

---

# 语法注释 (Grammar Notes)

## 1. “是……的”句：强调时间、地点、方式
(Câu có cấu trúc 是……的: nhấn mạnh thời gian, địa điểm, cách thức)

在已经知道事情发生的情况下，可以用“是……的”强调事情发生的时间、地点、方式等。肯定句和疑问句中的“是”字可以省略，否定句中不能省略。
(Nếu biết sự việc nào đó đã xảy ra, ta có thể dùng cấu trúc 是……的 để nhấn mạnh thời gian, địa điểm và cách thức sự việc ấy xảy ra. 是 có thể được lược bỏ trong câu khẳng định và câu hỏi nhưng không được lược bỏ trong câu phủ định.)

| 主语 (Chủ ngữ) | 是 | 时间/地点/方式 (T/Đ/C) | 动词 (Động từ) | 的 |
| :--- | :---: | :--- | :--- | :---: |
| 我 | 是 | 昨天 | 来的 | 。 |
| 这 | 是 | 在北京 | 买的 | 。 |
| 你们 | 是 | 怎么 | 来饭店 | 的？ |

**否定形式 (Câu phủ định):**
| 主语 (Chủ ngữ) | 不是 | 时间/地点/方式 (T/Đ/C) | 动词 (Động từ) | 的 |
| :--- | :---: | :--- | :--- | :---: |
| 我 | 不是 | 昨天 | 来的 | 。 |
| 这 | 不是 | 在北京 | 买的 | 。 |
| 我们 | 不是 | 坐出租车 | 来的 | 。 |

## 2. 日期的表达 (2)：年、月、日/号、星期
(Cách diễn tả ngày tháng (2): năm, tháng, ngày, thứ)

汉语中日期的写法和读法都是从大到小。年要分别读出每个数字，再加上“年”；月、日要读出整个数字，再加上“月”、“日/号”。
(Trong tiếng Trung Quốc, ngày tháng được đọc và viết theo trình tự từ đơn vị lớn đến đơn vị nhỏ. Khi đọc năm, ta phải đọc từng chữ số và thêm 年 phía sau. Khi đọc tháng và ngày, ta đọc cả con số rồi thêm 月 và 日/号 phía sau.)

* **2008年8月8号，星期五** -> *èr líng líng bā nián bā yuè bā hào, xīngqī wǔ*

1. 明天是2014年5月11号。
2. A: 今天几号？星期几？ B: 今天9月10号，星期三。
3. 我们是2011年9月认识的。
`},{id:"hsk1-l15-vocab",title:"生词 (New Words)",type:W.VOCABULARY,content:`
# 生词 (Từ mới)

| 汉字 (Hanzi) | 拼音 (Pinyin) | 词类 (POS) | 意义 (Meaning) |
| :--- | :--- | :---: | :--- |
| **认识** | rènshi | v. | quen, biết |
| **年** | nián | n. | năm |
| **大学** | dàxué | n. | đại học |
| **饭店** | fàndiàn | n. | khách sạn, nhà hàng |
| **出租车** | chūzūchē | n. | taxi |
| **一起** | yìqǐ | adv. | cùng |
| **高兴** | gāoxìng | adj. | vui, phấn khởi |
| **听** | tīng | v. | nghe |
| **飞机** | fēijī | n. | máy bay |
`},{id:"hsk1-l15-exercise",title:"练习与文化 (Exercises & Culture)",type:W.EXERCISE,content:`
# 热身 (Warm-up)

**给下面的词语选择对应的图片 (Chọn hình tương ứng với các từ ngữ bên dưới)**

1. **飞机** (fēijī) - 
2. **饭店** (fàndiàn) - 
3. **出租车** (chūzūchē) - [Image of 出租车]
4. **听** (tīng) - 
5. **大学** (dàxué) - 
6. **开车** (kāi chē) - 

---

# 综合练习 (Comprehension Questions)

**根据课文内容回答问题 (Trả lời câu hỏi theo nội dung bài học):**
1. 她们是什么时候认识的？ (Tāmen shì shénme shíhou rènshi de?)
2. 她们是在哪儿认识的？ (Tāmen shì zài nǎr rènshi de?)
3. 他们是怎么去饭店的？ (Tāmen shì zěnme qù fàndiàn de?)
4. 李先生是坐出租车去饭店的吗？ (Lǐ xiānsheng shì zuò chūzūchē qù fàndiàn de ma?)
5. 李小姐是怎么来北京的？ (Lǐ xiǎojiě shì zěnme lái Běijīng de?)

---

# 图片描述 (Describe Pictures)

1. 
   我们是在巴黎 (Paris) **认识** 的。
2. [Image of A classroom/office]
   我没看见李老师，她是什么时候 **来** 的？
3. 
   这些衣服不 是今天 **买** 的，是昨天买的。
4. 
   我们是一起 **走/开车** 来的，我不喜欢坐出租车。

---

# 拼音 (Phonetics)

**三音节词语的声调搭配(4)：四声音节开头**
* 4+1+1: **电冰箱** (diànbīngxiāng)
* 4+1+2: **麦当劳** (Màidāngláo)
* 4+1+3: **健身馆** (jiànshēnguǎn)
* 4+1+4: **办公室** (bàngōngshì)
* 4+4+4: **照相机** (zhàoxiàngjī), **电话卡** (diànhuàkǎ), **奥运会** (Àoyùnhuì)

---

# 汉字 (Characters)

**1. 认识独体字 (Làm quen với chữ đơn)**
* **年 (nián):** 年 có nghĩa gốc là chở thóc lúa đã thu hoạch về nhà, nay chỉ đơn vị thời gian.
* **出 (chū):** Chữ 出 là hình vẽ bàn chân rời đi, nay có nghĩa là ra, đi ra.
* **飞 (fēi):** Chữ 飞 là hình vẽ đôi cánh chim tung bay trên bầu trời, nay có nghĩa là bay trên trời.

**2. 汉字偏旁 (Radicals)**
* **艹 (草字头):** 一般和草木或者植物有关系 (Liên quan đến cỏ cây)。例：**茶** (chá), **菜** (cài)。
* **宀 (宝盖头):** 一般和房子有关系 (Liên quan đến nhà cửa)。例：**安** (ān), **家** (jiā)。

---

# 运用与文化 (Application & Culture)

### 文化：中国人经常使用的通信工具
在中国，常用的通信工具有电话机和手机两种。
* 电话机号码一般为 7-8 位。
* 手机号码为 11 位（格式 3-4-4，如 139-0107-8866）。
* **注意：** 号码中的“1”要读成“**yāo**”。

### 活动 (Activities)
1. **双人活动：** 询问对方物品的具体购买情况（时间、地点）。
2. **小组活动：** 互相询问并记录小组成员学会某项技能（如说汉语、做中国菜）的时间和地点。
`}]},Yu=[R_,M_,W_,J_,K_,X_,Q_,Z_,$_,j_,tE,eE,nE,oE,iE,N_,I_,D_,k_,U_,z_,L_,H_,B_,q_,P_,G_,V_,O_,F_,Y_],sE=({currentModuleId:n,onSelectModule:e,onGoHome:i})=>{const r=Yu.reduce((a,c)=>(a[c.level]||(a[c.level]=[]),a[c.level].push(c),a),{});return L.jsxs("div",{className:"w-64 bg-slate-900 text-slate-300 flex flex-col h-screen fixed left-0 top-0 overflow-y-auto border-r border-slate-800 z-10",children:[L.jsx("div",{className:"p-6 border-b border-slate-800 bg-slate-900 sticky top-0 z-20",children:L.jsxs("div",{onClick:i,className:"flex items-center gap-2 cursor-pointer hover:text-white transition-colors",children:[L.jsx("div",{className:"w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold font-serif",children:"中"}),L.jsx("h1",{className:"font-bold text-xl text-white tracking-tight",children:"HSK Mastery"})]})}),L.jsxs("nav",{className:"flex-1 p-4 space-y-6",children:[L.jsx("div",{className:"space-y-1",children:L.jsxs("button",{onClick:i,className:`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${n?"hover:bg-slate-800 text-slate-400 hover:text-white":"bg-red-600 text-white shadow-lg shadow-red-900/20"}`,children:[L.jsx(S_,{size:18}),L.jsx("span",{className:"font-medium",children:"Dashboard"})]})}),Object.entries(r).map(([a,c])=>L.jsxs("div",{children:[L.jsx("h3",{className:"text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3",children:a}),L.jsx("div",{className:"space-y-1",children:c.map(g=>L.jsxs("button",{onClick:()=>e(g),className:`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all group ${n===g.id?"bg-slate-800 text-white":"text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"}`,children:[L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsx(g_,{size:16,className:n===g.id?"text-red-500":"text-slate-600 group-hover:text-slate-500"}),L.jsx("span",{className:"truncate max-w-[120px]",children:g.title})]}),n===g.id&&L.jsx(mc,{size:14,className:"text-slate-500"})]},g.id))})]},a))]}),L.jsx("div",{className:"p-4 border-t border-slate-800",children:L.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 text-sm text-slate-500",children:[L.jsx(v_,{size:16}),L.jsxs("span",{children:["Study Streak: ",L.jsx("span",{className:"text-red-500 font-bold",children:"3 Days"})]})]})})]})},rE=({content:n})=>{const e=n.split(`
`),i=[],r=f=>f.split(/([\u4e00-\u9fff]+)/g).map((T,S)=>/[\u4e00-\u9fff]/.test(T)?L.jsx("span",{className:"zh-text text-[1.5em] leading-normal mx-0.5 align-baseline inline-block text-gray-900 font-medium",children:T},S):T),a=f=>f.split(/((?:<strong>.*?<\/strong>)|(?:<em>.*?<\/em>)|(?:\*\*.*?\*\*)|(?:__.*?__)|(?:\*.*?\*)|(?:_.*?_))/g).map((T,S)=>{if(T.startsWith("<strong>")&&T.endsWith("</strong>")||T.startsWith("**")&&T.endsWith("**")||T.startsWith("__")&&T.endsWith("__")){const C=T.startsWith("<strong>")?T.slice(8,-9):T.slice(2,-2);return L.jsx("strong",{className:"font-bold text-gray-900",children:r(C)},S)}if(T.startsWith("<em>")&&T.endsWith("</em>")||T.startsWith("*")&&T.endsWith("*")||T.startsWith("_")&&T.endsWith("_")){const C=T.startsWith("<em>")?T.slice(4,-5):T.slice(1,-1);return L.jsx("span",{className:"not-italic text-blue-600 font-medium tracking-wide px-0.5",children:r(C)},S)}return L.jsx(zp.Fragment,{children:r(T)},S)});let c=!1,g=[],m=[];const y=f=>{if(!c)return null;c=!1;const v=L.jsx("div",{className:"overflow-x-auto my-6 border border-gray-200 rounded-lg shadow-sm",children:L.jsxs("table",{className:"min-w-full divide-y divide-gray-200 bg-white text-sm",children:[L.jsx("thead",{className:"bg-gray-50",children:L.jsx("tr",{children:g.map((T,S)=>L.jsx("th",{className:"px-4 py-3 text-left font-medium text-gray-700 tracking-wider border-r border-gray-200 last:border-r-0",children:a(T.trim())},S))})}),L.jsx("tbody",{className:"divide-y divide-gray-200",children:m.map((T,S)=>L.jsx("tr",{className:S%2===0?"bg-white":"bg-gray-50",children:T.map((C,A)=>L.jsx("td",{className:"px-4 py-3 text-gray-700 border-r border-gray-200 last:border-r-0 whitespace-pre-wrap",children:a(C.trim())},A))},S))})]})},`table-${f}`);return g=[],m=[],v};return e.forEach((f,v)=>{const T=f.trim();if(T.startsWith("|")){c?T.includes("---")||m.push(T.split("|").filter(S=>S).map(S=>S.trim())):(c=!0,g=T.split("|").filter(S=>S).map(S=>S.trim()));return}else c&&i.push(y(v));T.startsWith("# ")?i.push(L.jsx("h1",{className:"text-3xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2",children:a(T.substring(2))},v)):T.startsWith("## ")?i.push(L.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mt-6 mb-3",children:a(T.substring(3))},v)):T.startsWith("### ")?i.push(L.jsx("h3",{className:"text-xl font-medium text-gray-800 mt-4 mb-2",children:a(T.substring(4))},v)):T.startsWith("> ")?i.push(L.jsx("div",{className:"border-l-4 border-red-500 bg-red-50 p-4 my-4 rounded-r italic text-gray-700",children:a(T.substring(2))},v)):T.startsWith("- ")||T.startsWith("* ")?i.push(L.jsx("li",{className:"ml-6 list-disc text-gray-700 mb-1 pl-1 marker:text-red-500",children:a(T.substring(2))},v)):/^\d+\.\s/.test(T)?i.push(L.jsxs("div",{className:"ml-6 flex gap-2 text-gray-700 mb-2",children:[L.jsx("span",{className:"font-semibold text-red-600",children:T.split(" ")[0]}),L.jsx("span",{children:a(T.substring(T.indexOf(" ")+1))})]},v)):T===""?i.push(L.jsx("div",{className:"h-2"},v)):i.push(L.jsx("p",{className:"text-gray-700 leading-relaxed mb-3",children:a(T)},v))}),c&&i.push(y(e.length)),L.jsx("div",{className:"markdown-content w-full max-w-none prose prose-red",children:i})};var hs={exports:{}},Hu={},Bu,Wf;function aE(){if(Wf)return Bu;Wf=1;function n(e,i){typeof i=="boolean"&&(i={forever:i}),this._originalTimeouts=JSON.parse(JSON.stringify(e)),this._timeouts=e,this._options=i||{},this._maxRetryTime=i&&i.maxRetryTime||1/0,this._fn=null,this._errors=[],this._attempts=1,this._operationTimeout=null,this._operationTimeoutCb=null,this._timeout=null,this._operationStart=null,this._timer=null,this._options.forever&&(this._cachedTimeouts=this._timeouts.slice(0))}return Bu=n,n.prototype.reset=function(){this._attempts=1,this._timeouts=this._originalTimeouts.slice(0)},n.prototype.stop=function(){this._timeout&&clearTimeout(this._timeout),this._timer&&clearTimeout(this._timer),this._timeouts=[],this._cachedTimeouts=null},n.prototype.retry=function(e){if(this._timeout&&clearTimeout(this._timeout),!e)return!1;var i=new Date().getTime();if(e&&i-this._operationStart>=this._maxRetryTime)return this._errors.push(e),this._errors.unshift(new Error("RetryOperation timeout occurred")),!1;this._errors.push(e);var r=this._timeouts.shift();if(r===void 0)if(this._cachedTimeouts)this._errors.splice(0,this._errors.length-1),r=this._cachedTimeouts.slice(-1);else return!1;var a=this;return this._timer=setTimeout(function(){a._attempts++,a._operationTimeoutCb&&(a._timeout=setTimeout(function(){a._operationTimeoutCb(a._attempts)},a._operationTimeout),a._options.unref&&a._timeout.unref()),a._fn(a._attempts)},r),this._options.unref&&this._timer.unref(),!0},n.prototype.attempt=function(e,i){this._fn=e,i&&(i.timeout&&(this._operationTimeout=i.timeout),i.cb&&(this._operationTimeoutCb=i.cb));var r=this;this._operationTimeoutCb&&(this._timeout=setTimeout(function(){r._operationTimeoutCb()},r._operationTimeout)),this._operationStart=new Date().getTime(),this._fn(this._attempts)},n.prototype.try=function(e){console.log("Using RetryOperation.try() is deprecated"),this.attempt(e)},n.prototype.start=function(e){console.log("Using RetryOperation.start() is deprecated"),this.attempt(e)},n.prototype.start=n.prototype.try,n.prototype.errors=function(){return this._errors},n.prototype.attempts=function(){return this._attempts},n.prototype.mainError=function(){if(this._errors.length===0)return null;for(var e={},i=null,r=0,a=0;a<this._errors.length;a++){var c=this._errors[a],g=c.message,m=(e[g]||0)+1;e[g]=m,m>=r&&(i=c,r=m)}return i},Bu}var Jf;function lE(){return Jf||(Jf=1,(function(n){var e=aE();n.operation=function(i){var r=n.timeouts(i);return new e(r,{forever:i&&(i.forever||i.retries===1/0),unref:i&&i.unref,maxRetryTime:i&&i.maxRetryTime})},n.timeouts=function(i){if(i instanceof Array)return[].concat(i);var r={retries:10,factor:2,minTimeout:1*1e3,maxTimeout:1/0,randomize:!1};for(var a in i)r[a]=i[a];if(r.minTimeout>r.maxTimeout)throw new Error("minTimeout is greater than maxTimeout");for(var c=[],g=0;g<r.retries;g++)c.push(this.createTimeout(g,r));return i&&i.forever&&!c.length&&c.push(this.createTimeout(g,r)),c.sort(function(m,y){return m-y}),c},n.createTimeout=function(i,r){var a=r.randomize?Math.random()+1:1,c=Math.round(a*Math.max(r.minTimeout,1)*Math.pow(r.factor,i));return c=Math.min(c,r.maxTimeout),c},n.wrap=function(i,r,a){if(r instanceof Array&&(a=r,r=null),!a){a=[];for(var c in i)typeof i[c]=="function"&&a.push(c)}for(var g=0;g<a.length;g++){var m=a[g],y=i[m];i[m]=(function(v){var T=n.operation(r),S=Array.prototype.slice.call(arguments,1),C=S.pop();S.push(function(A){T.retry(A)||(A&&(arguments[0]=T.mainError()),C.apply(this,arguments))}),T.attempt(function(){v.apply(i,S)})}).bind(i,y),i[m].options=r}}})(Hu)),Hu}var qu,Kf;function uE(){return Kf||(Kf=1,qu=lE()),qu}var Xf;function cE(){if(Xf)return hs.exports;Xf=1;const n=uE(),e=["Failed to fetch","NetworkError when attempting to fetch resource.","The Internet connection appears to be offline.","Network request failed"];class i extends Error{constructor(m){super(),m instanceof Error?(this.originalError=m,{message:m}=m):(this.originalError=new Error(m),this.originalError.stack=this.stack),this.name="AbortError",this.message=m}}const r=(g,m,y)=>{const f=y.retries-(m-1);return g.attemptNumber=m,g.retriesLeft=f,g},a=g=>e.includes(g),c=(g,m)=>new Promise((y,f)=>{m={onFailedAttempt:()=>{},retries:10,...m};const v=n.operation(m);v.attempt(async T=>{try{y(await g(T))}catch(S){if(!(S instanceof Error)){f(new TypeError(`Non-error was thrown: "${S}". You should only throw errors.`));return}if(S instanceof i)v.stop(),f(S.originalError);else if(S instanceof TypeError&&!a(S.message))v.stop(),f(S);else{r(S,T,m);try{await m.onFailedAttempt(S)}catch(C){f(C);return}v.retry(S)||f(v.mainError())}}})});return hs.exports=c,hs.exports.default=c,hs.exports.AbortError=i,hs.exports}var ny=cE();const hE=ac(ny);var gE={};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let dE,fE;function mE(){return{geminiUrl:dE,vertexUrl:fE}}function pE(n,e,i,r){var a,c;if(!(n!=null&&n.baseUrl)){const g=mE();return e?(a=g.vertexUrl)!==null&&a!==void 0?a:i:(c=g.geminiUrl)!==null&&c!==void 0?c:r}return n.baseUrl}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Cn{}function Z(n,e){const i=/\{([^}]+)\}/g;return n.replace(i,(r,a)=>{if(Object.prototype.hasOwnProperty.call(e,a)){const c=e[a];return c!=null?String(c):""}else throw new Error(`Key '${a}' not found in valueMap.`)})}function h(n,e,i){for(let c=0;c<e.length-1;c++){const g=e[c];if(g.endsWith("[]")){const m=g.slice(0,-2);if(!(m in n))if(Array.isArray(i))n[m]=Array.from({length:i.length},()=>({}));else throw new Error(`Value must be a list given an array path ${g}`);if(Array.isArray(n[m])){const y=n[m];if(Array.isArray(i))for(let f=0;f<y.length;f++){const v=y[f];h(v,e.slice(c+1),i[f])}else for(const f of y)h(f,e.slice(c+1),i)}return}else if(g.endsWith("[0]")){const m=g.slice(0,-3);m in n||(n[m]=[{}]);const y=n[m];h(y[0],e.slice(c+1),i);return}(!n[g]||typeof n[g]!="object")&&(n[g]={}),n=n[g]}const r=e[e.length-1],a=n[r];if(a!==void 0){if(!i||typeof i=="object"&&Object.keys(i).length===0||i===a)return;if(typeof a=="object"&&typeof i=="object"&&a!==null&&i!==null)Object.assign(a,i);else throw new Error(`Cannot set value for an existing key. Key: ${r}`)}else r==="_self"&&typeof i=="object"&&i!==null&&!Array.isArray(i)?Object.assign(n,i):n[r]=i}function u(n,e,i=void 0){try{if(e.length===1&&e[0]==="_self")return n;for(let r=0;r<e.length;r++){if(typeof n!="object"||n===null)return i;const a=e[r];if(a.endsWith("[]")){const c=a.slice(0,-2);if(c in n){const g=n[c];return Array.isArray(g)?g.map(m=>u(m,e.slice(r+1),i)):i}else return i}else n=n[a]}return n}catch(r){if(r instanceof TypeError)return i;throw r}}function yE(n,e){for(const[i,r]of Object.entries(e)){const a=i.split("."),c=r.split("."),g=new Set;let m=-1;for(let y=0;y<a.length;y++)if(a[y]==="*"){m=y;break}if(m!==-1&&c.length>m)for(let y=m;y<c.length;y++){const f=c[y];f!=="*"&&!f.endsWith("[]")&&!f.endsWith("[0]")&&g.add(f)}Wu(n,a,c,0,g)}}function Wu(n,e,i,r,a){if(r>=e.length||typeof n!="object"||n===null)return;const c=e[r];if(c.endsWith("[]")){const g=c.slice(0,-2),m=n;if(g in m&&Array.isArray(m[g]))for(const y of m[g])Wu(y,e,i,r+1,a)}else if(c==="*"){if(typeof n=="object"&&n!==null&&!Array.isArray(n)){const g=n,m=Object.keys(g).filter(f=>!f.startsWith("_")&&!a.has(f)),y={};for(const f of m)y[f]=g[f];for(const[f,v]of Object.entries(y)){const T=[];for(const S of i.slice(r))S==="*"?T.push(f):T.push(S);h(g,T,v)}for(const f of m)delete g[f]}}else{const g=n;c in g&&Wu(g[c],e,i,r+1,a)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function pc(n){if(typeof n!="string")throw new Error("fromImageBytes must be a string");return n}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function vE(n){const e={},i=u(n,["operationName"]);i!=null&&h(e,["operationName"],i);const r=u(n,["resourceName"]);return r!=null&&h(e,["_url","resourceName"],r),e}function TE(n){const e={},i=u(n,["name"]);i!=null&&h(e,["name"],i);const r=u(n,["metadata"]);r!=null&&h(e,["metadata"],r);const a=u(n,["done"]);a!=null&&h(e,["done"],a);const c=u(n,["error"]);c!=null&&h(e,["error"],c);const g=u(n,["response","generateVideoResponse"]);return g!=null&&h(e,["response"],_E(g)),e}function SE(n){const e={},i=u(n,["name"]);i!=null&&h(e,["name"],i);const r=u(n,["metadata"]);r!=null&&h(e,["metadata"],r);const a=u(n,["done"]);a!=null&&h(e,["done"],a);const c=u(n,["error"]);c!=null&&h(e,["error"],c);const g=u(n,["response"]);return g!=null&&h(e,["response"],EE(g)),e}function _E(n){const e={},i=u(n,["generatedSamples"]);if(i!=null){let c=i;Array.isArray(c)&&(c=c.map(g=>CE(g))),h(e,["generatedVideos"],c)}const r=u(n,["raiMediaFilteredCount"]);r!=null&&h(e,["raiMediaFilteredCount"],r);const a=u(n,["raiMediaFilteredReasons"]);return a!=null&&h(e,["raiMediaFilteredReasons"],a),e}function EE(n){const e={},i=u(n,["videos"]);if(i!=null){let c=i;Array.isArray(c)&&(c=c.map(g=>AE(g))),h(e,["generatedVideos"],c)}const r=u(n,["raiMediaFilteredCount"]);r!=null&&h(e,["raiMediaFilteredCount"],r);const a=u(n,["raiMediaFilteredReasons"]);return a!=null&&h(e,["raiMediaFilteredReasons"],a),e}function CE(n){const e={},i=u(n,["video"]);return i!=null&&h(e,["video"],NE(i)),e}function AE(n){const e={},i=u(n,["_self"]);return i!=null&&h(e,["video"],IE(i)),e}function wE(n){const e={},i=u(n,["operationName"]);return i!=null&&h(e,["_url","operationName"],i),e}function xE(n){const e={},i=u(n,["operationName"]);return i!=null&&h(e,["_url","operationName"],i),e}function bE(n){const e={},i=u(n,["name"]);i!=null&&h(e,["name"],i);const r=u(n,["metadata"]);r!=null&&h(e,["metadata"],r);const a=u(n,["done"]);a!=null&&h(e,["done"],a);const c=u(n,["error"]);c!=null&&h(e,["error"],c);const g=u(n,["response"]);return g!=null&&h(e,["response"],RE(g)),e}function RE(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["parent"]);r!=null&&h(e,["parent"],r);const a=u(n,["documentName"]);return a!=null&&h(e,["documentName"],a),e}function oy(n){const e={},i=u(n,["name"]);i!=null&&h(e,["name"],i);const r=u(n,["metadata"]);r!=null&&h(e,["metadata"],r);const a=u(n,["done"]);a!=null&&h(e,["done"],a);const c=u(n,["error"]);c!=null&&h(e,["error"],c);const g=u(n,["response"]);return g!=null&&h(e,["response"],ME(g)),e}function ME(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["parent"]);r!=null&&h(e,["parent"],r);const a=u(n,["documentName"]);return a!=null&&h(e,["documentName"],a),e}function NE(n){const e={},i=u(n,["uri"]);i!=null&&h(e,["uri"],i);const r=u(n,["encodedVideo"]);r!=null&&h(e,["videoBytes"],pc(r));const a=u(n,["encoding"]);return a!=null&&h(e,["mimeType"],a),e}function IE(n){const e={},i=u(n,["gcsUri"]);i!=null&&h(e,["uri"],i);const r=u(n,["bytesBase64Encoded"]);r!=null&&h(e,["videoBytes"],pc(r));const a=u(n,["mimeType"]);return a!=null&&h(e,["mimeType"],a),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Qf;(function(n){n.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",n.PYTHON="PYTHON"})(Qf||(Qf={}));var Zf;(function(n){n.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",n.OUTCOME_OK="OUTCOME_OK",n.OUTCOME_FAILED="OUTCOME_FAILED",n.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(Zf||(Zf={}));var $f;(function(n){n.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",n.SILENT="SILENT",n.WHEN_IDLE="WHEN_IDLE",n.INTERRUPT="INTERRUPT"})($f||($f={}));var Qn;(function(n){n.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",n.STRING="STRING",n.NUMBER="NUMBER",n.INTEGER="INTEGER",n.BOOLEAN="BOOLEAN",n.ARRAY="ARRAY",n.OBJECT="OBJECT",n.NULL="NULL"})(Qn||(Qn={}));var jf;(function(n){n.PHISH_BLOCK_THRESHOLD_UNSPECIFIED="PHISH_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_HIGH_AND_ABOVE="BLOCK_HIGH_AND_ABOVE",n.BLOCK_HIGHER_AND_ABOVE="BLOCK_HIGHER_AND_ABOVE",n.BLOCK_VERY_HIGH_AND_ABOVE="BLOCK_VERY_HIGH_AND_ABOVE",n.BLOCK_ONLY_EXTREMELY_HIGH="BLOCK_ONLY_EXTREMELY_HIGH"})(jf||(jf={}));var tm;(function(n){n.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",n.NO_AUTH="NO_AUTH",n.API_KEY_AUTH="API_KEY_AUTH",n.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",n.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",n.OAUTH="OAUTH",n.OIDC_AUTH="OIDC_AUTH"})(tm||(tm={}));var em;(function(n){n.HTTP_IN_UNSPECIFIED="HTTP_IN_UNSPECIFIED",n.HTTP_IN_QUERY="HTTP_IN_QUERY",n.HTTP_IN_HEADER="HTTP_IN_HEADER",n.HTTP_IN_PATH="HTTP_IN_PATH",n.HTTP_IN_BODY="HTTP_IN_BODY",n.HTTP_IN_COOKIE="HTTP_IN_COOKIE"})(em||(em={}));var nm;(function(n){n.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",n.SIMPLE_SEARCH="SIMPLE_SEARCH",n.ELASTIC_SEARCH="ELASTIC_SEARCH"})(nm||(nm={}));var om;(function(n){n.UNSPECIFIED="UNSPECIFIED",n.BLOCKING="BLOCKING",n.NON_BLOCKING="NON_BLOCKING"})(om||(om={}));var im;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.MODE_DYNAMIC="MODE_DYNAMIC"})(im||(im={}));var sm;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.AUTO="AUTO",n.ANY="ANY",n.NONE="NONE",n.VALIDATED="VALIDATED"})(sm||(sm={}));var rm;(function(n){n.THINKING_LEVEL_UNSPECIFIED="THINKING_LEVEL_UNSPECIFIED",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH",n.MINIMAL="MINIMAL"})(rm||(rm={}));var am;(function(n){n.DONT_ALLOW="DONT_ALLOW",n.ALLOW_ADULT="ALLOW_ADULT",n.ALLOW_ALL="ALLOW_ALL"})(am||(am={}));var lm;(function(n){n.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",n.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",n.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",n.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",n.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",n.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",n.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",n.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",n.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_JAILBREAK="HARM_CATEGORY_JAILBREAK"})(lm||(lm={}));var um;(function(n){n.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",n.SEVERITY="SEVERITY",n.PROBABILITY="PROBABILITY"})(um||(um={}));var cm;(function(n){n.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE",n.OFF="OFF"})(cm||(cm={}));var hm;(function(n){n.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",n.STOP="STOP",n.MAX_TOKENS="MAX_TOKENS",n.SAFETY="SAFETY",n.RECITATION="RECITATION",n.LANGUAGE="LANGUAGE",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.SPII="SPII",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.IMAGE_SAFETY="IMAGE_SAFETY",n.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL",n.IMAGE_PROHIBITED_CONTENT="IMAGE_PROHIBITED_CONTENT",n.NO_IMAGE="NO_IMAGE",n.IMAGE_RECITATION="IMAGE_RECITATION",n.IMAGE_OTHER="IMAGE_OTHER"})(hm||(hm={}));var gm;(function(n){n.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",n.NEGLIGIBLE="NEGLIGIBLE",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH"})(gm||(gm={}));var dm;(function(n){n.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",n.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",n.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",n.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",n.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(dm||(dm={}));var fm;(function(n){n.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",n.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",n.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",n.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",n.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(fm||(fm={}));var mm;(function(n){n.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",n.SAFETY="SAFETY",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.IMAGE_SAFETY="IMAGE_SAFETY",n.MODEL_ARMOR="MODEL_ARMOR",n.JAILBREAK="JAILBREAK"})(mm||(mm={}));var pm;(function(n){n.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",n.ON_DEMAND="ON_DEMAND",n.ON_DEMAND_PRIORITY="ON_DEMAND_PRIORITY",n.ON_DEMAND_FLEX="ON_DEMAND_FLEX",n.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(pm||(pm={}));var Jr;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.AUDIO="AUDIO"})(Jr||(Jr={}));var ym;(function(n){n.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",n.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",n.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",n.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(ym||(ym={}));var vm;(function(n){n.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",n.TUNING_MODE_FULL="TUNING_MODE_FULL",n.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(vm||(vm={}));var Tm;(function(n){n.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",n.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",n.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",n.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",n.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",n.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",n.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(Tm||(Tm={}));var Ju;(function(n){n.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",n.JOB_STATE_QUEUED="JOB_STATE_QUEUED",n.JOB_STATE_PENDING="JOB_STATE_PENDING",n.JOB_STATE_RUNNING="JOB_STATE_RUNNING",n.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",n.JOB_STATE_FAILED="JOB_STATE_FAILED",n.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",n.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",n.JOB_STATE_PAUSED="JOB_STATE_PAUSED",n.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",n.JOB_STATE_UPDATING="JOB_STATE_UPDATING",n.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(Ju||(Ju={}));var Sm;(function(n){n.TUNING_JOB_STATE_UNSPECIFIED="TUNING_JOB_STATE_UNSPECIFIED",n.TUNING_JOB_STATE_WAITING_FOR_QUOTA="TUNING_JOB_STATE_WAITING_FOR_QUOTA",n.TUNING_JOB_STATE_PROCESSING_DATASET="TUNING_JOB_STATE_PROCESSING_DATASET",n.TUNING_JOB_STATE_WAITING_FOR_CAPACITY="TUNING_JOB_STATE_WAITING_FOR_CAPACITY",n.TUNING_JOB_STATE_TUNING="TUNING_JOB_STATE_TUNING",n.TUNING_JOB_STATE_POST_PROCESSING="TUNING_JOB_STATE_POST_PROCESSING"})(Sm||(Sm={}));var _m;(function(n){n.AGGREGATION_METRIC_UNSPECIFIED="AGGREGATION_METRIC_UNSPECIFIED",n.AVERAGE="AVERAGE",n.MODE="MODE",n.STANDARD_DEVIATION="STANDARD_DEVIATION",n.VARIANCE="VARIANCE",n.MINIMUM="MINIMUM",n.MAXIMUM="MAXIMUM",n.MEDIAN="MEDIAN",n.PERCENTILE_P90="PERCENTILE_P90",n.PERCENTILE_P95="PERCENTILE_P95",n.PERCENTILE_P99="PERCENTILE_P99"})(_m||(_m={}));var Em;(function(n){n.PAIRWISE_CHOICE_UNSPECIFIED="PAIRWISE_CHOICE_UNSPECIFIED",n.BASELINE="BASELINE",n.CANDIDATE="CANDIDATE",n.TIE="TIE"})(Em||(Em={}));var Cm;(function(n){n.TUNING_TASK_UNSPECIFIED="TUNING_TASK_UNSPECIFIED",n.TUNING_TASK_I2V="TUNING_TASK_I2V",n.TUNING_TASK_T2V="TUNING_TASK_T2V",n.TUNING_TASK_R2V="TUNING_TASK_R2V"})(Cm||(Cm={}));var Am;(function(n){n.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",n.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",n.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",n.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH",n.MEDIA_RESOLUTION_ULTRA_HIGH="MEDIA_RESOLUTION_ULTRA_HIGH"})(Am||(Am={}));var wm;(function(n){n.TOOL_TYPE_UNSPECIFIED="TOOL_TYPE_UNSPECIFIED",n.GOOGLE_SEARCH_WEB="GOOGLE_SEARCH_WEB",n.GOOGLE_SEARCH_IMAGE="GOOGLE_SEARCH_IMAGE",n.URL_CONTEXT="URL_CONTEXT",n.GOOGLE_MAPS="GOOGLE_MAPS",n.FILE_SEARCH="FILE_SEARCH"})(wm||(wm={}));var Ku;(function(n){n.COLLECTION="COLLECTION"})(Ku||(Ku={}));var xm;(function(n){n.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",n.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",n.BALANCED="BALANCED",n.PRIORITIZE_COST="PRIORITIZE_COST"})(xm||(xm={}));var bm;(function(n){n.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",n.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(bm||(bm={}));var Rm;(function(n){n.PROMINENT_PEOPLE_UNSPECIFIED="PROMINENT_PEOPLE_UNSPECIFIED",n.ALLOW_PROMINENT_PEOPLE="ALLOW_PROMINENT_PEOPLE",n.BLOCK_PROMINENT_PEOPLE="BLOCK_PROMINENT_PEOPLE"})(Rm||(Rm={}));var Kr;(function(n){n.PREDICT="PREDICT",n.EMBED_CONTENT="EMBED_CONTENT"})(Kr||(Kr={}));var Mm;(function(n){n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE"})(Mm||(Mm={}));var Nm;(function(n){n.auto="auto",n.en="en",n.ja="ja",n.ko="ko",n.hi="hi",n.zh="zh",n.pt="pt",n.es="es"})(Nm||(Nm={}));var Im;(function(n){n.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",n.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",n.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",n.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",n.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(Im||(Im={}));var Dm;(function(n){n.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",n.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",n.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",n.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(Dm||(Dm={}));var km;(function(n){n.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",n.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",n.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",n.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(km||(km={}));var Um;(function(n){n.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",n.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",n.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",n.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",n.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",n.EDIT_MODE_STYLE="EDIT_MODE_STYLE",n.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",n.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(Um||(Um={}));var zm;(function(n){n.FOREGROUND="FOREGROUND",n.BACKGROUND="BACKGROUND",n.PROMPT="PROMPT",n.SEMANTIC="SEMANTIC",n.INTERACTIVE="INTERACTIVE"})(zm||(zm={}));var Lm;(function(n){n.ASSET="ASSET",n.STYLE="STYLE"})(Lm||(Lm={}));var Hm;(function(n){n.INSERT="INSERT",n.REMOVE="REMOVE",n.REMOVE_STATIC="REMOVE_STATIC",n.OUTPAINT="OUTPAINT"})(Hm||(Hm={}));var Bm;(function(n){n.OPTIMIZED="OPTIMIZED",n.LOSSLESS="LOSSLESS"})(Bm||(Bm={}));var qm;(function(n){n.SUPERVISED_FINE_TUNING="SUPERVISED_FINE_TUNING",n.PREFERENCE_TUNING="PREFERENCE_TUNING",n.DISTILLATION="DISTILLATION"})(qm||(qm={}));var Pm;(function(n){n.STATE_UNSPECIFIED="STATE_UNSPECIFIED",n.STATE_PENDING="STATE_PENDING",n.STATE_ACTIVE="STATE_ACTIVE",n.STATE_FAILED="STATE_FAILED"})(Pm||(Pm={}));var Gm;(function(n){n.STATE_UNSPECIFIED="STATE_UNSPECIFIED",n.PROCESSING="PROCESSING",n.ACTIVE="ACTIVE",n.FAILED="FAILED"})(Gm||(Gm={}));var Vm;(function(n){n.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",n.UPLOADED="UPLOADED",n.GENERATED="GENERATED",n.REGISTERED="REGISTERED"})(Vm||(Vm={}));var Om;(function(n){n.TURN_COMPLETE_REASON_UNSPECIFIED="TURN_COMPLETE_REASON_UNSPECIFIED",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.RESPONSE_REJECTED="RESPONSE_REJECTED",n.NEED_MORE_INPUT="NEED_MORE_INPUT"})(Om||(Om={}));var Fm;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.VIDEO="VIDEO",n.AUDIO="AUDIO",n.DOCUMENT="DOCUMENT"})(Fm||(Fm={}));var Ym;(function(n){n.VAD_SIGNAL_TYPE_UNSPECIFIED="VAD_SIGNAL_TYPE_UNSPECIFIED",n.VAD_SIGNAL_TYPE_SOS="VAD_SIGNAL_TYPE_SOS",n.VAD_SIGNAL_TYPE_EOS="VAD_SIGNAL_TYPE_EOS"})(Ym||(Ym={}));var Wm;(function(n){n.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",n.ACTIVITY_START="ACTIVITY_START",n.ACTIVITY_END="ACTIVITY_END"})(Wm||(Wm={}));var Jm;(function(n){n.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",n.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",n.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(Jm||(Jm={}));var Km;(function(n){n.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",n.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",n.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(Km||(Km={}));var Xm;(function(n){n.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",n.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",n.NO_INTERRUPTION="NO_INTERRUPTION"})(Xm||(Xm={}));var Qm;(function(n){n.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",n.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",n.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(Qm||(Qm={}));var Zm;(function(n){n.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",n.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",n.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",n.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",n.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",n.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",n.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",n.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",n.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",n.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",n.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",n.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",n.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(Zm||(Zm={}));var $m;(function(n){n.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",n.QUALITY="QUALITY",n.DIVERSITY="DIVERSITY",n.VOCALIZATION="VOCALIZATION"})($m||($m={}));var si;(function(n){n.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",n.PLAY="PLAY",n.PAUSE="PAUSE",n.STOP="STOP",n.RESET_CONTEXT="RESET_CONTEXT"})(si||(si={}));class Xu{constructor(e){const i={};for(const r of e.headers.entries())i[r[0]]=r[1];this.headers=i,this.responseInternal=e}json(){return this.responseInternal.json()}}class gs{get text(){var e,i,r,a,c,g,m,y;if(((a=(r=(i=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||i===void 0?void 0:i.content)===null||r===void 0?void 0:r.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning text from the first one.");let f="",v=!1;const T=[];for(const S of(y=(m=(g=(c=this.candidates)===null||c===void 0?void 0:c[0])===null||g===void 0?void 0:g.content)===null||m===void 0?void 0:m.parts)!==null&&y!==void 0?y:[]){for(const[C,A]of Object.entries(S))C!=="text"&&C!=="thought"&&C!=="thoughtSignature"&&(A!==null||A!==void 0)&&T.push(C);if(typeof S.text=="string"){if(typeof S.thought=="boolean"&&S.thought)continue;v=!0,f+=S.text}}return T.length>0&&console.warn(`there are non-text parts ${T} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),v?f:void 0}get data(){var e,i,r,a,c,g,m,y;if(((a=(r=(i=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||i===void 0?void 0:i.content)===null||r===void 0?void 0:r.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning data from the first one.");let f="";const v=[];for(const T of(y=(m=(g=(c=this.candidates)===null||c===void 0?void 0:c[0])===null||g===void 0?void 0:g.content)===null||m===void 0?void 0:m.parts)!==null&&y!==void 0?y:[]){for(const[S,C]of Object.entries(T))S!=="inlineData"&&(C!==null||C!==void 0)&&v.push(S);T.inlineData&&typeof T.inlineData.data=="string"&&(f+=atob(T.inlineData.data))}return v.length>0&&console.warn(`there are non-data parts ${v} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),f.length>0?btoa(f):void 0}get functionCalls(){var e,i,r,a,c,g,m,y;if(((a=(r=(i=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||i===void 0?void 0:i.content)===null||r===void 0?void 0:r.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning function calls from the first one.");const f=(y=(m=(g=(c=this.candidates)===null||c===void 0?void 0:c[0])===null||g===void 0?void 0:g.content)===null||m===void 0?void 0:m.parts)===null||y===void 0?void 0:y.filter(v=>v.functionCall).map(v=>v.functionCall).filter(v=>v!==void 0);if((f==null?void 0:f.length)!==0)return f}get executableCode(){var e,i,r,a,c,g,m,y,f;if(((a=(r=(i=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||i===void 0?void 0:i.content)===null||r===void 0?void 0:r.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning executable code from the first one.");const v=(y=(m=(g=(c=this.candidates)===null||c===void 0?void 0:c[0])===null||g===void 0?void 0:g.content)===null||m===void 0?void 0:m.parts)===null||y===void 0?void 0:y.filter(T=>T.executableCode).map(T=>T.executableCode).filter(T=>T!==void 0);if((v==null?void 0:v.length)!==0)return(f=v==null?void 0:v[0])===null||f===void 0?void 0:f.code}get codeExecutionResult(){var e,i,r,a,c,g,m,y,f;if(((a=(r=(i=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||i===void 0?void 0:i.content)===null||r===void 0?void 0:r.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning code execution result from the first one.");const v=(y=(m=(g=(c=this.candidates)===null||c===void 0?void 0:c[0])===null||g===void 0?void 0:g.content)===null||m===void 0?void 0:m.parts)===null||y===void 0?void 0:y.filter(T=>T.codeExecutionResult).map(T=>T.codeExecutionResult).filter(T=>T!==void 0);if((v==null?void 0:v.length)!==0)return(f=v==null?void 0:v[0])===null||f===void 0?void 0:f.output}}class jm{}class tp{}class DE{}class kE{}class UE{}class zE{}class ep{}class np{}class op{}class LE{}class Xr{_fromAPIResponse({apiResponse:e,_isVertexAI:i}){const r=new Xr;let a;const c=e;return i?a=SE(c):a=TE(c),Object.assign(r,a),r}}class ip{}class sp{}class rp{}class ap{}class HE{}class BE{}class qE{}class yc{_fromAPIResponse({apiResponse:e,_isVertexAI:i}){const r=new yc,c=bE(e);return Object.assign(r,c),r}}class PE{}class GE{}class VE{}class OE{}class lp{}class FE{get text(){var e,i,r;let a="",c=!1;const g=[];for(const m of(r=(i=(e=this.serverContent)===null||e===void 0?void 0:e.modelTurn)===null||i===void 0?void 0:i.parts)!==null&&r!==void 0?r:[]){for(const[y,f]of Object.entries(m))y!=="text"&&y!=="thought"&&f!==null&&g.push(y);if(typeof m.text=="string"){if(typeof m.thought=="boolean"&&m.thought)continue;c=!0,a+=m.text}}return g.length>0&&console.warn(`there are non-text parts ${g} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),c?a:void 0}get data(){var e,i,r;let a="";const c=[];for(const g of(r=(i=(e=this.serverContent)===null||e===void 0?void 0:e.modelTurn)===null||i===void 0?void 0:i.parts)!==null&&r!==void 0?r:[]){for(const[m,y]of Object.entries(g))m!=="inlineData"&&y!==null&&c.push(m);g.inlineData&&typeof g.inlineData.data=="string"&&(a+=atob(g.inlineData.data))}return c.length>0&&console.warn(`there are non-data parts ${c} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),a.length>0?btoa(a):void 0}}class YE{get audioChunk(){if(this.serverContent&&this.serverContent.audioChunks&&this.serverContent.audioChunks.length>0)return this.serverContent.audioChunks[0]}}class vc{_fromAPIResponse({apiResponse:e,_isVertexAI:i}){const r=new vc,c=oy(e);return Object.assign(r,c),r}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function At(n,e){if(!e||typeof e!="string")throw new Error("model is required and must be a string");if(e.includes("..")||e.includes("?")||e.includes("&"))throw new Error("invalid model parameter");if(n.isVertexAI()){if(e.startsWith("publishers/")||e.startsWith("projects/")||e.startsWith("models/"))return e;if(e.indexOf("/")>=0){const i=e.split("/",2);return`publishers/${i[0]}/models/${i[1]}`}else return`publishers/google/models/${e}`}else return e.startsWith("models/")||e.startsWith("tunedModels/")?e:`models/${e}`}function iy(n,e){const i=At(n,e);return i?i.startsWith("publishers/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/${i}`:i.startsWith("models/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/publishers/google/${i}`:i:""}function sy(n){return Array.isArray(n)?n.map(e=>Qr(e)):[Qr(n)]}function Qr(n){if(typeof n=="object"&&n!==null)return n;throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof n}`)}function ry(n){const e=Qr(n);if(e.mimeType&&e.mimeType.startsWith("image/"))return e;throw new Error(`Unsupported mime type: ${e.mimeType}`)}function ay(n){const e=Qr(n);if(e.mimeType&&e.mimeType.startsWith("audio/"))return e;throw new Error(`Unsupported mime type: ${e.mimeType}`)}function up(n){if(n==null)throw new Error("PartUnion is required");if(typeof n=="object")return n;if(typeof n=="string")return{text:n};throw new Error(`Unsupported part type: ${typeof n}`)}function ly(n){if(n==null||Array.isArray(n)&&n.length===0)throw new Error("PartListUnion is required");return Array.isArray(n)?n.map(e=>up(e)):[up(n)]}function Qu(n){return n!=null&&typeof n=="object"&&"parts"in n&&Array.isArray(n.parts)}function cp(n){return n!=null&&typeof n=="object"&&"functionCall"in n}function hp(n){return n!=null&&typeof n=="object"&&"functionResponse"in n}function te(n){if(n==null)throw new Error("ContentUnion is required");return Qu(n)?n:{role:"user",parts:ly(n)}}function Tc(n,e){if(!e)return[];if(n.isVertexAI()&&Array.isArray(e))return e.flatMap(i=>{const r=te(i);return r.parts&&r.parts.length>0&&r.parts[0].text!==void 0?[r.parts[0].text]:[]});if(n.isVertexAI()){const i=te(e);return i.parts&&i.parts.length>0&&i.parts[0].text!==void 0?[i.parts[0].text]:[]}return Array.isArray(e)?e.map(i=>te(i)):[te(e)]}function Me(n){if(n==null||Array.isArray(n)&&n.length===0)throw new Error("contents are required");if(!Array.isArray(n)){if(cp(n)||hp(n))throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");return[te(n)]}const e=[],i=[],r=Qu(n[0]);for(const a of n){const c=Qu(a);if(c!=r)throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");if(c)e.push(a);else{if(cp(a)||hp(a))throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");i.push(a)}}return r||e.push({role:"user",parts:ly(i)}),e}function WE(n,e){n.includes("null")&&(e.nullable=!0);const i=n.filter(r=>r!=="null");if(i.length===1)e.type=Object.values(Qn).includes(i[0].toUpperCase())?i[0].toUpperCase():Qn.TYPE_UNSPECIFIED;else{e.anyOf=[];for(const r of i)e.anyOf.push({type:Object.values(Qn).includes(r.toUpperCase())?r.toUpperCase():Qn.TYPE_UNSPECIFIED})}}function ai(n){const e={},i=["items"],r=["anyOf"],a=["properties"];if(n.type&&n.anyOf)throw new Error("type and anyOf cannot be both populated.");const c=n.anyOf;c!=null&&c.length==2&&(c[0].type==="null"?(e.nullable=!0,n=c[1]):c[1].type==="null"&&(e.nullable=!0,n=c[0])),n.type instanceof Array&&WE(n.type,e);for(const[g,m]of Object.entries(n))if(m!=null)if(g=="type"){if(m==="null")throw new Error("type: null can not be the only possible type for the field.");if(m instanceof Array)continue;e.type=Object.values(Qn).includes(m.toUpperCase())?m.toUpperCase():Qn.TYPE_UNSPECIFIED}else if(i.includes(g))e[g]=ai(m);else if(r.includes(g)){const y=[];for(const f of m){if(f.type=="null"){e.nullable=!0;continue}y.push(ai(f))}e[g]=y}else if(a.includes(g)){const y={};for(const[f,v]of Object.entries(m))y[f]=ai(v);e[g]=y}else{if(g==="additionalProperties")continue;e[g]=m}return e}function Sc(n){return ai(n)}function _c(n){if(typeof n=="object")return n;if(typeof n=="string")return{voiceConfig:{prebuiltVoiceConfig:{voiceName:n}}};throw new Error(`Unsupported speechConfig type: ${typeof n}`)}function Ec(n){if("multiSpeakerVoiceConfig"in n)throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");return n}function hi(n){if(n.functionDeclarations)for(const e of n.functionDeclarations)e.parameters&&(Object.keys(e.parameters).includes("$schema")?e.parametersJsonSchema||(e.parametersJsonSchema=e.parameters,delete e.parameters):e.parameters=ai(e.parameters)),e.response&&(Object.keys(e.response).includes("$schema")?e.responseJsonSchema||(e.responseJsonSchema=e.response,delete e.response):e.response=ai(e.response));return n}function gi(n){if(n==null)throw new Error("tools is required");if(!Array.isArray(n))throw new Error("tools is required and must be an array of Tools");const e=[];for(const i of n)e.push(i);return e}function JE(n,e,i,r=1){const a=!e.startsWith(`${i}/`)&&e.split("/").length===r;return n.isVertexAI()?e.startsWith("projects/")?e:e.startsWith("locations/")?`projects/${n.getProject()}/${e}`:e.startsWith(`${i}/`)?`projects/${n.getProject()}/locations/${n.getLocation()}/${e}`:a?`projects/${n.getProject()}/locations/${n.getLocation()}/${i}/${e}`:e:a?`${i}/${e}`:e}function An(n,e){if(typeof e!="string")throw new Error("name must be a string");return JE(n,e,"cachedContents")}function uy(n){switch(n){case"STATE_UNSPECIFIED":return"JOB_STATE_UNSPECIFIED";case"CREATING":return"JOB_STATE_RUNNING";case"ACTIVE":return"JOB_STATE_SUCCEEDED";case"FAILED":return"JOB_STATE_FAILED";default:return n}}function $n(n){return pc(n)}function KE(n){return n!=null&&typeof n=="object"&&"name"in n}function XE(n){return n!=null&&typeof n=="object"&&"video"in n}function QE(n){return n!=null&&typeof n=="object"&&"uri"in n}function cy(n){var e;let i;if(KE(n)&&(i=n.name),!(QE(n)&&(i=n.uri,i===void 0))&&!(XE(n)&&(i=(e=n.video)===null||e===void 0?void 0:e.uri,i===void 0))){if(typeof n=="string"&&(i=n),i===void 0)throw new Error("Could not extract file name from the provided input.");if(i.startsWith("https://")){const a=i.split("files/")[1].match(/[a-z0-9]+/);if(a===null)throw new Error(`Could not extract file name from URI ${i}`);i=a[0]}else i.startsWith("files/")&&(i=i.split("files/")[1]);return i}}function hy(n,e){let i;return n.isVertexAI()?i=e?"publishers/google/models":"models":i=e?"models":"tunedModels",i}function gy(n){for(const e of["models","tunedModels","publisherModels"])if(ZE(n,e))return n[e];return[]}function ZE(n,e){return n!==null&&typeof n=="object"&&e in n}function $E(n,e={}){const i=n,r={name:i.name,description:i.description,parametersJsonSchema:i.inputSchema};return i.outputSchema&&(r.responseJsonSchema=i.outputSchema),e.behavior&&(r.behavior=e.behavior),{functionDeclarations:[r]}}function jE(n,e={}){const i=[],r=new Set;for(const a of n){const c=a.name;if(r.has(c))throw new Error(`Duplicate function name ${c} found in MCP tools. Please ensure function names are unique.`);r.add(c);const g=$E(a,e);g.functionDeclarations&&i.push(...g.functionDeclarations)}return{functionDeclarations:i}}function dy(n,e){let i;if(typeof e=="string")if(n.isVertexAI())if(e.startsWith("gs://"))i={format:"jsonl",gcsUri:[e]};else if(e.startsWith("bq://"))i={format:"bigquery",bigqueryUri:e};else throw new Error(`Unsupported string source for Vertex AI: ${e}`);else if(e.startsWith("files/"))i={fileName:e};else throw new Error(`Unsupported string source for Gemini API: ${e}`);else if(Array.isArray(e)){if(n.isVertexAI())throw new Error("InlinedRequest[] is not supported in Vertex AI.");i={inlinedRequests:e}}else i=e;const r=[i.gcsUri,i.bigqueryUri].filter(Boolean).length,a=[i.inlinedRequests,i.fileName].filter(Boolean).length;if(n.isVertexAI()){if(a>0||r!==1)throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.")}else if(r>0||a!==1)throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");return i}function tC(n){if(typeof n!="string")return n;const e=n;if(e.startsWith("gs://"))return{format:"jsonl",gcsUri:e};if(e.startsWith("bq://"))return{format:"bigquery",bigqueryUri:e};throw new Error(`Unsupported destination: ${e}`)}function fy(n){if(typeof n!="object"||n===null)return{};const e=n,i=e.inlinedResponses;if(typeof i!="object"||i===null)return n;const a=i.inlinedResponses;if(!Array.isArray(a)||a.length===0)return n;let c=!1;for(const g of a){if(typeof g!="object"||g===null)continue;const y=g.response;if(typeof y!="object"||y===null)continue;if(y.embedding!==void 0){c=!0;break}}return c&&(e.inlinedEmbedContentResponses=e.inlinedResponses,delete e.inlinedResponses),n}function di(n,e){const i=e;if(!n.isVertexAI()){if(/batches\/[^/]+$/.test(i))return i.split("/").pop();throw new Error(`Invalid batch job name: ${i}.`)}if(/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(i))return i.split("/").pop();if(/^\d+$/.test(i))return i;throw new Error(`Invalid batch job name: ${i}.`)}function my(n){const e=n;return e==="BATCH_STATE_UNSPECIFIED"?"JOB_STATE_UNSPECIFIED":e==="BATCH_STATE_PENDING"?"JOB_STATE_PENDING":e==="BATCH_STATE_RUNNING"?"JOB_STATE_RUNNING":e==="BATCH_STATE_SUCCEEDED"?"JOB_STATE_SUCCEEDED":e==="BATCH_STATE_FAILED"?"JOB_STATE_FAILED":e==="BATCH_STATE_CANCELLED"?"JOB_STATE_CANCELLED":e==="BATCH_STATE_EXPIRED"?"JOB_STATE_EXPIRED":e}function eC(n){return n.includes("gemini")&&n!=="gemini-embedding-001"||n.includes("maas")}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function nC(n){const e={},i=u(n,["apiKey"]);if(i!=null&&h(e,["apiKey"],i),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return e}function oC(n){const e={},i=u(n,["responsesFile"]);i!=null&&h(e,["fileName"],i);const r=u(n,["inlinedResponses","inlinedResponses"]);if(r!=null){let c=r;Array.isArray(c)&&(c=c.map(g=>HC(g))),h(e,["inlinedResponses"],c)}const a=u(n,["inlinedEmbedContentResponses","inlinedResponses"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(e,["inlinedEmbedContentResponses"],c)}return e}function iC(n){const e={},i=u(n,["predictionsFormat"]);i!=null&&h(e,["format"],i);const r=u(n,["gcsDestination","outputUriPrefix"]);r!=null&&h(e,["gcsUri"],r);const a=u(n,["bigqueryDestination","outputUri"]);return a!=null&&h(e,["bigqueryUri"],a),e}function sC(n){const e={},i=u(n,["format"]);i!=null&&h(e,["predictionsFormat"],i);const r=u(n,["gcsUri"]);r!=null&&h(e,["gcsDestination","outputUriPrefix"],r);const a=u(n,["bigqueryUri"]);if(a!=null&&h(e,["bigqueryDestination","outputUri"],a),u(n,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(u(n,["inlinedResponses"])!==void 0)throw new Error("inlinedResponses parameter is not supported in Vertex AI.");if(u(n,["inlinedEmbedContentResponses"])!==void 0)throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");return e}function Fr(n){const e={},i=u(n,["name"]);i!=null&&h(e,["name"],i);const r=u(n,["metadata","displayName"]);r!=null&&h(e,["displayName"],r);const a=u(n,["metadata","state"]);a!=null&&h(e,["state"],my(a));const c=u(n,["metadata","createTime"]);c!=null&&h(e,["createTime"],c);const g=u(n,["metadata","endTime"]);g!=null&&h(e,["endTime"],g);const m=u(n,["metadata","updateTime"]);m!=null&&h(e,["updateTime"],m);const y=u(n,["metadata","model"]);y!=null&&h(e,["model"],y);const f=u(n,["metadata","output"]);return f!=null&&h(e,["dest"],oC(fy(f))),e}function Zu(n){const e={},i=u(n,["name"]);i!=null&&h(e,["name"],i);const r=u(n,["displayName"]);r!=null&&h(e,["displayName"],r);const a=u(n,["state"]);a!=null&&h(e,["state"],my(a));const c=u(n,["error"]);c!=null&&h(e,["error"],c);const g=u(n,["createTime"]);g!=null&&h(e,["createTime"],g);const m=u(n,["startTime"]);m!=null&&h(e,["startTime"],m);const y=u(n,["endTime"]);y!=null&&h(e,["endTime"],y);const f=u(n,["updateTime"]);f!=null&&h(e,["updateTime"],f);const v=u(n,["model"]);v!=null&&h(e,["model"],v);const T=u(n,["inputConfig"]);T!=null&&h(e,["src"],rC(T));const S=u(n,["outputConfig"]);S!=null&&h(e,["dest"],iC(fy(S)));const C=u(n,["completionStats"]);return C!=null&&h(e,["completionStats"],C),e}function rC(n){const e={},i=u(n,["instancesFormat"]);i!=null&&h(e,["format"],i);const r=u(n,["gcsSource","uris"]);r!=null&&h(e,["gcsUri"],r);const a=u(n,["bigquerySource","inputUri"]);return a!=null&&h(e,["bigqueryUri"],a),e}function aC(n,e){const i={};if(u(e,["format"])!==void 0)throw new Error("format parameter is not supported in Gemini API.");if(u(e,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(u(e,["bigqueryUri"])!==void 0)throw new Error("bigqueryUri parameter is not supported in Gemini API.");const r=u(e,["fileName"]);r!=null&&h(i,["fileName"],r);const a=u(e,["inlinedRequests"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>LC(n,g))),h(i,["requests","requests"],c)}return i}function lC(n){const e={},i=u(n,["format"]);i!=null&&h(e,["instancesFormat"],i);const r=u(n,["gcsUri"]);r!=null&&h(e,["gcsSource","uris"],r);const a=u(n,["bigqueryUri"]);if(a!=null&&h(e,["bigquerySource","inputUri"],a),u(n,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(u(n,["inlinedRequests"])!==void 0)throw new Error("inlinedRequests parameter is not supported in Vertex AI.");return e}function uC(n){const e={},i=u(n,["data"]);if(i!=null&&h(e,["data"],i),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const r=u(n,["mimeType"]);return r!=null&&h(e,["mimeType"],r),e}function cC(n,e){const i={},r=u(e,["name"]);return r!=null&&h(i,["_url","name"],di(n,r)),i}function hC(n,e){const i={},r=u(e,["name"]);return r!=null&&h(i,["_url","name"],di(n,r)),i}function gC(n){const e={},i=u(n,["content"]);i!=null&&h(e,["content"],i);const r=u(n,["citationMetadata"]);r!=null&&h(e,["citationMetadata"],dC(r));const a=u(n,["tokenCount"]);a!=null&&h(e,["tokenCount"],a);const c=u(n,["finishReason"]);c!=null&&h(e,["finishReason"],c);const g=u(n,["groundingMetadata"]);g!=null&&h(e,["groundingMetadata"],g);const m=u(n,["avgLogprobs"]);m!=null&&h(e,["avgLogprobs"],m);const y=u(n,["index"]);y!=null&&h(e,["index"],y);const f=u(n,["logprobsResult"]);f!=null&&h(e,["logprobsResult"],f);const v=u(n,["safetyRatings"]);if(v!=null){let S=v;Array.isArray(S)&&(S=S.map(C=>C)),h(e,["safetyRatings"],S)}const T=u(n,["urlContextMetadata"]);return T!=null&&h(e,["urlContextMetadata"],T),e}function dC(n){const e={},i=u(n,["citationSources"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(a=>a)),h(e,["citations"],r)}return e}function py(n){const e={},i=u(n,["parts"]);if(i!=null){let a=i;Array.isArray(a)&&(a=a.map(c=>FC(c))),h(e,["parts"],a)}const r=u(n,["role"]);return r!=null&&h(e,["role"],r),e}function fC(n,e){const i={},r=u(n,["displayName"]);if(e!==void 0&&r!=null&&h(e,["batch","displayName"],r),u(n,["dest"])!==void 0)throw new Error("dest parameter is not supported in Gemini API.");return i}function mC(n,e){const i={},r=u(n,["displayName"]);e!==void 0&&r!=null&&h(e,["displayName"],r);const a=u(n,["dest"]);return e!==void 0&&a!=null&&h(e,["outputConfig"],sC(tC(a))),i}function gp(n,e){const i={},r=u(e,["model"]);r!=null&&h(i,["_url","model"],At(n,r));const a=u(e,["src"]);a!=null&&h(i,["batch","inputConfig"],aC(n,dy(n,a)));const c=u(e,["config"]);return c!=null&&fC(c,i),i}function pC(n,e){const i={},r=u(e,["model"]);r!=null&&h(i,["model"],At(n,r));const a=u(e,["src"]);a!=null&&h(i,["inputConfig"],lC(dy(n,a)));const c=u(e,["config"]);return c!=null&&mC(c,i),i}function yC(n,e){const i={},r=u(n,["displayName"]);return e!==void 0&&r!=null&&h(e,["batch","displayName"],r),i}function vC(n,e){const i={},r=u(e,["model"]);r!=null&&h(i,["_url","model"],At(n,r));const a=u(e,["src"]);a!=null&&h(i,["batch","inputConfig"],wC(n,a));const c=u(e,["config"]);return c!=null&&yC(c,i),i}function TC(n,e){const i={},r=u(e,["name"]);return r!=null&&h(i,["_url","name"],di(n,r)),i}function SC(n,e){const i={},r=u(e,["name"]);return r!=null&&h(i,["_url","name"],di(n,r)),i}function _C(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["name"]);r!=null&&h(e,["name"],r);const a=u(n,["done"]);a!=null&&h(e,["done"],a);const c=u(n,["error"]);return c!=null&&h(e,["error"],c),e}function EC(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["name"]);r!=null&&h(e,["name"],r);const a=u(n,["done"]);a!=null&&h(e,["done"],a);const c=u(n,["error"]);return c!=null&&h(e,["error"],c),e}function CC(n,e){const i={},r=u(e,["contents"]);if(r!=null){let c=Tc(n,r);Array.isArray(c)&&(c=c.map(g=>g)),h(i,["requests[]","request","content"],c)}const a=u(e,["config"]);return a!=null&&(h(i,["_self"],AC(a,i)),yE(i,{"requests[].*":"requests[].request.*"})),i}function AC(n,e){const i={},r=u(n,["taskType"]);e!==void 0&&r!=null&&h(e,["requests[]","taskType"],r);const a=u(n,["title"]);e!==void 0&&a!=null&&h(e,["requests[]","title"],a);const c=u(n,["outputDimensionality"]);if(e!==void 0&&c!=null&&h(e,["requests[]","outputDimensionality"],c),u(n,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(u(n,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return i}function wC(n,e){const i={},r=u(e,["fileName"]);r!=null&&h(i,["file_name"],r);const a=u(e,["inlinedRequests"]);return a!=null&&h(i,["requests"],CC(n,a)),i}function xC(n){const e={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=u(n,["fileUri"]);i!=null&&h(e,["fileUri"],i);const r=u(n,["mimeType"]);return r!=null&&h(e,["mimeType"],r),e}function bC(n){const e={},i=u(n,["id"]);i!=null&&h(e,["id"],i);const r=u(n,["args"]);r!=null&&h(e,["args"],r);const a=u(n,["name"]);if(a!=null&&h(e,["name"],a),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function RC(n){const e={},i=u(n,["allowedFunctionNames"]);i!=null&&h(e,["allowedFunctionNames"],i);const r=u(n,["mode"]);if(r!=null&&h(e,["mode"],r),u(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return e}function MC(n,e,i){const r={},a=u(e,["systemInstruction"]);i!==void 0&&a!=null&&h(i,["systemInstruction"],py(te(a)));const c=u(e,["temperature"]);c!=null&&h(r,["temperature"],c);const g=u(e,["topP"]);g!=null&&h(r,["topP"],g);const m=u(e,["topK"]);m!=null&&h(r,["topK"],m);const y=u(e,["candidateCount"]);y!=null&&h(r,["candidateCount"],y);const f=u(e,["maxOutputTokens"]);f!=null&&h(r,["maxOutputTokens"],f);const v=u(e,["stopSequences"]);v!=null&&h(r,["stopSequences"],v);const T=u(e,["responseLogprobs"]);T!=null&&h(r,["responseLogprobs"],T);const S=u(e,["logprobs"]);S!=null&&h(r,["logprobs"],S);const C=u(e,["presencePenalty"]);C!=null&&h(r,["presencePenalty"],C);const A=u(e,["frequencyPenalty"]);A!=null&&h(r,["frequencyPenalty"],A);const M=u(e,["seed"]);M!=null&&h(r,["seed"],M);const x=u(e,["responseMimeType"]);x!=null&&h(r,["responseMimeType"],x);const U=u(e,["responseSchema"]);U!=null&&h(r,["responseSchema"],Sc(U));const Y=u(e,["responseJsonSchema"]);if(Y!=null&&h(r,["responseJsonSchema"],Y),u(e,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(u(e,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const P=u(e,["safetySettings"]);if(i!==void 0&&P!=null){let Nt=P;Array.isArray(Nt)&&(Nt=Nt.map(St=>YC(St))),h(i,["safetySettings"],Nt)}const J=u(e,["tools"]);if(i!==void 0&&J!=null){let Nt=gi(J);Array.isArray(Nt)&&(Nt=Nt.map(St=>JC(hi(St)))),h(i,["tools"],Nt)}const Q=u(e,["toolConfig"]);if(i!==void 0&&Q!=null&&h(i,["toolConfig"],WC(Q)),u(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const V=u(e,["cachedContent"]);i!==void 0&&V!=null&&h(i,["cachedContent"],An(n,V));const K=u(e,["responseModalities"]);K!=null&&h(r,["responseModalities"],K);const rt=u(e,["mediaResolution"]);rt!=null&&h(r,["mediaResolution"],rt);const j=u(e,["speechConfig"]);if(j!=null&&h(r,["speechConfig"],_c(j)),u(e,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const ut=u(e,["thinkingConfig"]);ut!=null&&h(r,["thinkingConfig"],ut);const Tt=u(e,["imageConfig"]);Tt!=null&&h(r,["imageConfig"],zC(Tt));const bt=u(e,["enableEnhancedCivicAnswers"]);if(bt!=null&&h(r,["enableEnhancedCivicAnswers"],bt),u(e,["modelArmorConfig"])!==void 0)throw new Error("modelArmorConfig parameter is not supported in Gemini API.");return r}function NC(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["candidates"]);if(r!=null){let y=r;Array.isArray(y)&&(y=y.map(f=>gC(f))),h(e,["candidates"],y)}const a=u(n,["modelVersion"]);a!=null&&h(e,["modelVersion"],a);const c=u(n,["promptFeedback"]);c!=null&&h(e,["promptFeedback"],c);const g=u(n,["responseId"]);g!=null&&h(e,["responseId"],g);const m=u(n,["usageMetadata"]);return m!=null&&h(e,["usageMetadata"],m),e}function IC(n,e){const i={},r=u(e,["name"]);return r!=null&&h(i,["_url","name"],di(n,r)),i}function DC(n,e){const i={},r=u(e,["name"]);return r!=null&&h(i,["_url","name"],di(n,r)),i}function kC(n){const e={},i=u(n,["authConfig"]);i!=null&&h(e,["authConfig"],nC(i));const r=u(n,["enableWidget"]);return r!=null&&h(e,["enableWidget"],r),e}function UC(n){const e={},i=u(n,["searchTypes"]);if(i!=null&&h(e,["searchTypes"],i),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const r=u(n,["timeRangeFilter"]);return r!=null&&h(e,["timeRangeFilter"],r),e}function zC(n){const e={},i=u(n,["aspectRatio"]);i!=null&&h(e,["aspectRatio"],i);const r=u(n,["imageSize"]);if(r!=null&&h(e,["imageSize"],r),u(n,["personGeneration"])!==void 0)throw new Error("personGeneration parameter is not supported in Gemini API.");if(u(n,["prominentPeople"])!==void 0)throw new Error("prominentPeople parameter is not supported in Gemini API.");if(u(n,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(u(n,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");if(u(n,["imageOutputOptions"])!==void 0)throw new Error("imageOutputOptions parameter is not supported in Gemini API.");return e}function LC(n,e){const i={},r=u(e,["model"]);r!=null&&h(i,["request","model"],At(n,r));const a=u(e,["contents"]);if(a!=null){let m=Me(a);Array.isArray(m)&&(m=m.map(y=>py(y))),h(i,["request","contents"],m)}const c=u(e,["metadata"]);c!=null&&h(i,["metadata"],c);const g=u(e,["config"]);return g!=null&&h(i,["request","generationConfig"],MC(n,g,u(i,["request"],{}))),i}function HC(n){const e={},i=u(n,["response"]);i!=null&&h(e,["response"],NC(i));const r=u(n,["metadata"]);r!=null&&h(e,["metadata"],r);const a=u(n,["error"]);return a!=null&&h(e,["error"],a),e}function BC(n,e){const i={},r=u(n,["pageSize"]);e!==void 0&&r!=null&&h(e,["_query","pageSize"],r);const a=u(n,["pageToken"]);if(e!==void 0&&a!=null&&h(e,["_query","pageToken"],a),u(n,["filter"])!==void 0)throw new Error("filter parameter is not supported in Gemini API.");return i}function qC(n,e){const i={},r=u(n,["pageSize"]);e!==void 0&&r!=null&&h(e,["_query","pageSize"],r);const a=u(n,["pageToken"]);e!==void 0&&a!=null&&h(e,["_query","pageToken"],a);const c=u(n,["filter"]);return e!==void 0&&c!=null&&h(e,["_query","filter"],c),i}function PC(n){const e={},i=u(n,["config"]);return i!=null&&BC(i,e),e}function GC(n){const e={},i=u(n,["config"]);return i!=null&&qC(i,e),e}function VC(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(e,["nextPageToken"],r);const a=u(n,["operations"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>Fr(g))),h(e,["batchJobs"],c)}return e}function OC(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(e,["nextPageToken"],r);const a=u(n,["batchPredictionJobs"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>Zu(g))),h(e,["batchJobs"],c)}return e}function FC(n){const e={},i=u(n,["mediaResolution"]);i!=null&&h(e,["mediaResolution"],i);const r=u(n,["codeExecutionResult"]);r!=null&&h(e,["codeExecutionResult"],r);const a=u(n,["executableCode"]);a!=null&&h(e,["executableCode"],a);const c=u(n,["fileData"]);c!=null&&h(e,["fileData"],xC(c));const g=u(n,["functionCall"]);g!=null&&h(e,["functionCall"],bC(g));const m=u(n,["functionResponse"]);m!=null&&h(e,["functionResponse"],m);const y=u(n,["inlineData"]);y!=null&&h(e,["inlineData"],uC(y));const f=u(n,["text"]);f!=null&&h(e,["text"],f);const v=u(n,["thought"]);v!=null&&h(e,["thought"],v);const T=u(n,["thoughtSignature"]);T!=null&&h(e,["thoughtSignature"],T);const S=u(n,["videoMetadata"]);S!=null&&h(e,["videoMetadata"],S);const C=u(n,["toolCall"]);C!=null&&h(e,["toolCall"],C);const A=u(n,["toolResponse"]);return A!=null&&h(e,["toolResponse"],A),e}function YC(n){const e={},i=u(n,["category"]);if(i!=null&&h(e,["category"],i),u(n,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const r=u(n,["threshold"]);return r!=null&&h(e,["threshold"],r),e}function WC(n){const e={},i=u(n,["retrievalConfig"]);i!=null&&h(e,["retrievalConfig"],i);const r=u(n,["functionCallingConfig"]);r!=null&&h(e,["functionCallingConfig"],RC(r));const a=u(n,["includeServerSideToolInvocations"]);return a!=null&&h(e,["includeServerSideToolInvocations"],a),e}function JC(n){const e={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=u(n,["computerUse"]);i!=null&&h(e,["computerUse"],i);const r=u(n,["fileSearch"]);r!=null&&h(e,["fileSearch"],r);const a=u(n,["googleSearch"]);a!=null&&h(e,["googleSearch"],UC(a));const c=u(n,["googleMaps"]);c!=null&&h(e,["googleMaps"],kC(c));const g=u(n,["codeExecution"]);if(g!=null&&h(e,["codeExecution"],g),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const m=u(n,["functionDeclarations"]);if(m!=null){let T=m;Array.isArray(T)&&(T=T.map(S=>S)),h(e,["functionDeclarations"],T)}const y=u(n,["googleSearchRetrieval"]);if(y!=null&&h(e,["googleSearchRetrieval"],y),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const f=u(n,["urlContext"]);f!=null&&h(e,["urlContext"],f);const v=u(n,["mcpServers"]);if(v!=null){let T=v;Array.isArray(T)&&(T=T.map(S=>S)),h(e,["mcpServers"],T)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var _n;(function(n){n.PAGED_ITEM_BATCH_JOBS="batchJobs",n.PAGED_ITEM_MODELS="models",n.PAGED_ITEM_TUNING_JOBS="tuningJobs",n.PAGED_ITEM_FILES="files",n.PAGED_ITEM_CACHED_CONTENTS="cachedContents",n.PAGED_ITEM_FILE_SEARCH_STORES="fileSearchStores",n.PAGED_ITEM_DOCUMENTS="documents"})(_n||(_n={}));class So{constructor(e,i,r,a){this.pageInternal=[],this.paramsInternal={},this.requestInternal=i,this.init(e,r,a)}init(e,i,r){var a,c;this.nameInternal=e,this.pageInternal=i[this.nameInternal]||[],this.sdkHttpResponseInternal=i==null?void 0:i.sdkHttpResponse,this.idxInternal=0;let g={config:{}};!r||Object.keys(r).length===0?g={config:{}}:typeof r=="object"?g=Object.assign({},r):g=r,g.config&&(g.config.pageToken=i.nextPageToken),this.paramsInternal=g,this.pageInternalSize=(c=(a=g.config)===null||a===void 0?void 0:a.pageSize)!==null&&c!==void 0?c:this.pageInternal.length}initNextPage(e){this.init(this.nameInternal,e,this.paramsInternal)}get page(){return this.pageInternal}get name(){return this.nameInternal}get pageSize(){return this.pageInternalSize}get sdkHttpResponse(){return this.sdkHttpResponseInternal}get params(){return this.paramsInternal}get pageLength(){return this.pageInternal.length}getItem(e){return this.pageInternal[e]}[Symbol.asyncIterator](){return{next:async()=>{if(this.idxInternal>=this.pageLength)if(this.hasNextPage())await this.nextPage();else return{value:void 0,done:!0};const e=this.getItem(this.idxInternal);return this.idxInternal+=1,{value:e,done:!1}},return:async()=>({value:void 0,done:!0})}}async nextPage(){if(!this.hasNextPage())throw new Error("No more pages to fetch.");const e=await this.requestInternal(this.params);return this.initNextPage(e),this.page}hasNextPage(){var e;return((e=this.params.config)===null||e===void 0?void 0:e.pageToken)!==void 0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class KC extends Cn{constructor(e){super(),this.apiClient=e,this.list=async(i={})=>new So(_n.PAGED_ITEM_BATCH_JOBS,r=>this.listInternal(r),await this.listInternal(i),i),this.create=async i=>(this.apiClient.isVertexAI()&&(i.config=this.formatDestination(i.src,i.config)),this.createInternal(i)),this.createEmbeddings=async i=>{if(console.warn("batches.createEmbeddings() is experimental and may change without notice."),this.apiClient.isVertexAI())throw new Error("Vertex AI does not support batches.createEmbeddings.");return this.createEmbeddingsInternal(i)}}createInlinedGenerateContentRequest(e){const i=gp(this.apiClient,e),r=i._url,a=Z("{model}:batchGenerateContent",r),m=i.batch.inputConfig.requests,y=m.requests,f=[];for(const v of y){const T=Object.assign({},v);if(T.systemInstruction){const S=T.systemInstruction;delete T.systemInstruction;const C=T.request;C.systemInstruction=S,T.request=C}f.push(T)}return m.requests=f,delete i.config,delete i._url,delete i._query,{path:a,body:i}}getGcsUri(e){if(typeof e=="string")return e.startsWith("gs://")?e:void 0;if(!Array.isArray(e)&&e.gcsUri&&e.gcsUri.length>0)return e.gcsUri[0]}getBigqueryUri(e){if(typeof e=="string")return e.startsWith("bq://")?e:void 0;if(!Array.isArray(e))return e.bigqueryUri}formatDestination(e,i){const r=i?Object.assign({},i):{},a=Date.now().toString();if(r.displayName||(r.displayName=`genaiBatchJob_${a}`),r.dest===void 0){const c=this.getGcsUri(e),g=this.getBigqueryUri(e);if(c)c.endsWith(".jsonl")?r.dest=`${c.slice(0,-6)}/dest`:r.dest=`${c}_dest_${a}`;else if(g)r.dest=`${g}_dest_${a}`;else throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.")}return r}async createInternal(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=pC(this.apiClient,e);return m=Z("batchPredictionJobs",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>Zu(v))}else{const f=gp(this.apiClient,e);return m=Z("{model}:batchGenerateContent",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>Fr(v))}}async createEmbeddingsInternal(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=vC(this.apiClient,e);return c=Z("{model}:asyncBatchEmbedContent",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>Fr(y))}}async get(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=DC(this.apiClient,e);return m=Z("batchPredictionJobs/{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>Zu(v))}else{const f=IC(this.apiClient,e);return m=Z("batches/{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>Fr(v))}}async cancel(e){var i,r,a,c;let g="",m={};if(this.apiClient.isVertexAI()){const y=hC(this.apiClient,e);g=Z("batchPredictionJobs/{name}:cancel",y._url),m=y._query,delete y._url,delete y._query,await this.apiClient.request({path:g,queryParams:m,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal})}else{const y=cC(this.apiClient,e);g=Z("batches/{name}:cancel",y._url),m=y._query,delete y._url,delete y._query,await this.apiClient.request({path:g,queryParams:m,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal})}}async listInternal(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=GC(e);return m=Z("batchPredictionJobs",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=OC(v),S=new lp;return Object.assign(S,T),S})}else{const f=PC(e);return m=Z("batches",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=VC(v),S=new lp;return Object.assign(S,T),S})}}async delete(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=SC(this.apiClient,e);return m=Z("batchPredictionJobs/{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>EC(v))}else{const f=TC(this.apiClient,e);return m=Z("batches/{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>_C(v))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function XC(n){const e={},i=u(n,["apiKey"]);if(i!=null&&h(e,["apiKey"],i),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return e}function QC(n){const e={},i=u(n,["data"]);if(i!=null&&h(e,["data"],i),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const r=u(n,["mimeType"]);return r!=null&&h(e,["mimeType"],r),e}function dp(n){const e={},i=u(n,["parts"]);if(i!=null){let a=i;Array.isArray(a)&&(a=a.map(c=>TA(c))),h(e,["parts"],a)}const r=u(n,["role"]);return r!=null&&h(e,["role"],r),e}function fp(n){const e={},i=u(n,["parts"]);if(i!=null){let a=i;Array.isArray(a)&&(a=a.map(c=>SA(c))),h(e,["parts"],a)}const r=u(n,["role"]);return r!=null&&h(e,["role"],r),e}function ZC(n,e){const i={},r=u(n,["ttl"]);e!==void 0&&r!=null&&h(e,["ttl"],r);const a=u(n,["expireTime"]);e!==void 0&&a!=null&&h(e,["expireTime"],a);const c=u(n,["displayName"]);e!==void 0&&c!=null&&h(e,["displayName"],c);const g=u(n,["contents"]);if(e!==void 0&&g!=null){let v=Me(g);Array.isArray(v)&&(v=v.map(T=>dp(T))),h(e,["contents"],v)}const m=u(n,["systemInstruction"]);e!==void 0&&m!=null&&h(e,["systemInstruction"],dp(te(m)));const y=u(n,["tools"]);if(e!==void 0&&y!=null){let v=y;Array.isArray(v)&&(v=v.map(T=>CA(T))),h(e,["tools"],v)}const f=u(n,["toolConfig"]);if(e!==void 0&&f!=null&&h(e,["toolConfig"],_A(f)),u(n,["kmsKeyName"])!==void 0)throw new Error("kmsKeyName parameter is not supported in Gemini API.");return i}function $C(n,e){const i={},r=u(n,["ttl"]);e!==void 0&&r!=null&&h(e,["ttl"],r);const a=u(n,["expireTime"]);e!==void 0&&a!=null&&h(e,["expireTime"],a);const c=u(n,["displayName"]);e!==void 0&&c!=null&&h(e,["displayName"],c);const g=u(n,["contents"]);if(e!==void 0&&g!=null){let T=Me(g);Array.isArray(T)&&(T=T.map(S=>fp(S))),h(e,["contents"],T)}const m=u(n,["systemInstruction"]);e!==void 0&&m!=null&&h(e,["systemInstruction"],fp(te(m)));const y=u(n,["tools"]);if(e!==void 0&&y!=null){let T=y;Array.isArray(T)&&(T=T.map(S=>AA(S))),h(e,["tools"],T)}const f=u(n,["toolConfig"]);e!==void 0&&f!=null&&h(e,["toolConfig"],EA(f));const v=u(n,["kmsKeyName"]);return e!==void 0&&v!=null&&h(e,["encryption_spec","kmsKeyName"],v),i}function jC(n,e){const i={},r=u(e,["model"]);r!=null&&h(i,["model"],iy(n,r));const a=u(e,["config"]);return a!=null&&ZC(a,i),i}function tA(n,e){const i={},r=u(e,["model"]);r!=null&&h(i,["model"],iy(n,r));const a=u(e,["config"]);return a!=null&&$C(a,i),i}function eA(n,e){const i={},r=u(e,["name"]);return r!=null&&h(i,["_url","name"],An(n,r)),i}function nA(n,e){const i={},r=u(e,["name"]);return r!=null&&h(i,["_url","name"],An(n,r)),i}function oA(n){const e={},i=u(n,["sdkHttpResponse"]);return i!=null&&h(e,["sdkHttpResponse"],i),e}function iA(n){const e={},i=u(n,["sdkHttpResponse"]);return i!=null&&h(e,["sdkHttpResponse"],i),e}function sA(n){const e={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=u(n,["fileUri"]);i!=null&&h(e,["fileUri"],i);const r=u(n,["mimeType"]);return r!=null&&h(e,["mimeType"],r),e}function rA(n){const e={},i=u(n,["id"]);i!=null&&h(e,["id"],i);const r=u(n,["args"]);r!=null&&h(e,["args"],r);const a=u(n,["name"]);if(a!=null&&h(e,["name"],a),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function aA(n){const e={},i=u(n,["allowedFunctionNames"]);i!=null&&h(e,["allowedFunctionNames"],i);const r=u(n,["mode"]);if(r!=null&&h(e,["mode"],r),u(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return e}function lA(n){const e={},i=u(n,["description"]);i!=null&&h(e,["description"],i);const r=u(n,["name"]);r!=null&&h(e,["name"],r);const a=u(n,["parameters"]);a!=null&&h(e,["parameters"],a);const c=u(n,["parametersJsonSchema"]);c!=null&&h(e,["parametersJsonSchema"],c);const g=u(n,["response"]);g!=null&&h(e,["response"],g);const m=u(n,["responseJsonSchema"]);if(m!=null&&h(e,["responseJsonSchema"],m),u(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return e}function uA(n,e){const i={},r=u(e,["name"]);return r!=null&&h(i,["_url","name"],An(n,r)),i}function cA(n,e){const i={},r=u(e,["name"]);return r!=null&&h(i,["_url","name"],An(n,r)),i}function hA(n){const e={},i=u(n,["authConfig"]);i!=null&&h(e,["authConfig"],XC(i));const r=u(n,["enableWidget"]);return r!=null&&h(e,["enableWidget"],r),e}function gA(n){const e={},i=u(n,["searchTypes"]);if(i!=null&&h(e,["searchTypes"],i),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const r=u(n,["timeRangeFilter"]);return r!=null&&h(e,["timeRangeFilter"],r),e}function dA(n,e){const i={},r=u(n,["pageSize"]);e!==void 0&&r!=null&&h(e,["_query","pageSize"],r);const a=u(n,["pageToken"]);return e!==void 0&&a!=null&&h(e,["_query","pageToken"],a),i}function fA(n,e){const i={},r=u(n,["pageSize"]);e!==void 0&&r!=null&&h(e,["_query","pageSize"],r);const a=u(n,["pageToken"]);return e!==void 0&&a!=null&&h(e,["_query","pageToken"],a),i}function mA(n){const e={},i=u(n,["config"]);return i!=null&&dA(i,e),e}function pA(n){const e={},i=u(n,["config"]);return i!=null&&fA(i,e),e}function yA(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(e,["nextPageToken"],r);const a=u(n,["cachedContents"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(e,["cachedContents"],c)}return e}function vA(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(e,["nextPageToken"],r);const a=u(n,["cachedContents"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(e,["cachedContents"],c)}return e}function TA(n){const e={},i=u(n,["mediaResolution"]);i!=null&&h(e,["mediaResolution"],i);const r=u(n,["codeExecutionResult"]);r!=null&&h(e,["codeExecutionResult"],r);const a=u(n,["executableCode"]);a!=null&&h(e,["executableCode"],a);const c=u(n,["fileData"]);c!=null&&h(e,["fileData"],sA(c));const g=u(n,["functionCall"]);g!=null&&h(e,["functionCall"],rA(g));const m=u(n,["functionResponse"]);m!=null&&h(e,["functionResponse"],m);const y=u(n,["inlineData"]);y!=null&&h(e,["inlineData"],QC(y));const f=u(n,["text"]);f!=null&&h(e,["text"],f);const v=u(n,["thought"]);v!=null&&h(e,["thought"],v);const T=u(n,["thoughtSignature"]);T!=null&&h(e,["thoughtSignature"],T);const S=u(n,["videoMetadata"]);S!=null&&h(e,["videoMetadata"],S);const C=u(n,["toolCall"]);C!=null&&h(e,["toolCall"],C);const A=u(n,["toolResponse"]);return A!=null&&h(e,["toolResponse"],A),e}function SA(n){const e={},i=u(n,["mediaResolution"]);i!=null&&h(e,["mediaResolution"],i);const r=u(n,["codeExecutionResult"]);r!=null&&h(e,["codeExecutionResult"],r);const a=u(n,["executableCode"]);a!=null&&h(e,["executableCode"],a);const c=u(n,["fileData"]);c!=null&&h(e,["fileData"],c);const g=u(n,["functionCall"]);g!=null&&h(e,["functionCall"],g);const m=u(n,["functionResponse"]);m!=null&&h(e,["functionResponse"],m);const y=u(n,["inlineData"]);y!=null&&h(e,["inlineData"],y);const f=u(n,["text"]);f!=null&&h(e,["text"],f);const v=u(n,["thought"]);v!=null&&h(e,["thought"],v);const T=u(n,["thoughtSignature"]);T!=null&&h(e,["thoughtSignature"],T);const S=u(n,["videoMetadata"]);if(S!=null&&h(e,["videoMetadata"],S),u(n,["toolCall"])!==void 0)throw new Error("toolCall parameter is not supported in Vertex AI.");if(u(n,["toolResponse"])!==void 0)throw new Error("toolResponse parameter is not supported in Vertex AI.");return e}function _A(n){const e={},i=u(n,["retrievalConfig"]);i!=null&&h(e,["retrievalConfig"],i);const r=u(n,["functionCallingConfig"]);r!=null&&h(e,["functionCallingConfig"],aA(r));const a=u(n,["includeServerSideToolInvocations"]);return a!=null&&h(e,["includeServerSideToolInvocations"],a),e}function EA(n){const e={},i=u(n,["retrievalConfig"]);i!=null&&h(e,["retrievalConfig"],i);const r=u(n,["functionCallingConfig"]);if(r!=null&&h(e,["functionCallingConfig"],r),u(n,["includeServerSideToolInvocations"])!==void 0)throw new Error("includeServerSideToolInvocations parameter is not supported in Vertex AI.");return e}function CA(n){const e={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=u(n,["computerUse"]);i!=null&&h(e,["computerUse"],i);const r=u(n,["fileSearch"]);r!=null&&h(e,["fileSearch"],r);const a=u(n,["googleSearch"]);a!=null&&h(e,["googleSearch"],gA(a));const c=u(n,["googleMaps"]);c!=null&&h(e,["googleMaps"],hA(c));const g=u(n,["codeExecution"]);if(g!=null&&h(e,["codeExecution"],g),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const m=u(n,["functionDeclarations"]);if(m!=null){let T=m;Array.isArray(T)&&(T=T.map(S=>S)),h(e,["functionDeclarations"],T)}const y=u(n,["googleSearchRetrieval"]);if(y!=null&&h(e,["googleSearchRetrieval"],y),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const f=u(n,["urlContext"]);f!=null&&h(e,["urlContext"],f);const v=u(n,["mcpServers"]);if(v!=null){let T=v;Array.isArray(T)&&(T=T.map(S=>S)),h(e,["mcpServers"],T)}return e}function AA(n){const e={},i=u(n,["retrieval"]);i!=null&&h(e,["retrieval"],i);const r=u(n,["computerUse"]);if(r!=null&&h(e,["computerUse"],r),u(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const a=u(n,["googleSearch"]);a!=null&&h(e,["googleSearch"],a);const c=u(n,["googleMaps"]);c!=null&&h(e,["googleMaps"],c);const g=u(n,["codeExecution"]);g!=null&&h(e,["codeExecution"],g);const m=u(n,["enterpriseWebSearch"]);m!=null&&h(e,["enterpriseWebSearch"],m);const y=u(n,["functionDeclarations"]);if(y!=null){let S=y;Array.isArray(S)&&(S=S.map(C=>lA(C))),h(e,["functionDeclarations"],S)}const f=u(n,["googleSearchRetrieval"]);f!=null&&h(e,["googleSearchRetrieval"],f);const v=u(n,["parallelAiSearch"]);v!=null&&h(e,["parallelAiSearch"],v);const T=u(n,["urlContext"]);if(T!=null&&h(e,["urlContext"],T),u(n,["mcpServers"])!==void 0)throw new Error("mcpServers parameter is not supported in Vertex AI.");return e}function wA(n,e){const i={},r=u(n,["ttl"]);e!==void 0&&r!=null&&h(e,["ttl"],r);const a=u(n,["expireTime"]);return e!==void 0&&a!=null&&h(e,["expireTime"],a),i}function xA(n,e){const i={},r=u(n,["ttl"]);e!==void 0&&r!=null&&h(e,["ttl"],r);const a=u(n,["expireTime"]);return e!==void 0&&a!=null&&h(e,["expireTime"],a),i}function bA(n,e){const i={},r=u(e,["name"]);r!=null&&h(i,["_url","name"],An(n,r));const a=u(e,["config"]);return a!=null&&wA(a,i),i}function RA(n,e){const i={},r=u(e,["name"]);r!=null&&h(i,["_url","name"],An(n,r));const a=u(e,["config"]);return a!=null&&xA(a,i),i}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class MA extends Cn{constructor(e){super(),this.apiClient=e,this.list=async(i={})=>new So(_n.PAGED_ITEM_CACHED_CONTENTS,r=>this.listInternal(r),await this.listInternal(i),i)}async create(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=tA(this.apiClient,e);return m=Z("cachedContents",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>v)}else{const f=jC(this.apiClient,e);return m=Z("cachedContents",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>v)}}async get(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=cA(this.apiClient,e);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>v)}else{const f=uA(this.apiClient,e);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>v)}}async delete(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=nA(this.apiClient,e);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=iA(v),S=new rp;return Object.assign(S,T),S})}else{const f=eA(this.apiClient,e);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=oA(v),S=new rp;return Object.assign(S,T),S})}}async update(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=RA(this.apiClient,e);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"PATCH",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>v)}else{const f=bA(this.apiClient,e);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"PATCH",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>v)}}async listInternal(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=pA(e);return m=Z("cachedContents",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=vA(v),S=new ap;return Object.assign(S,T),S})}else{const f=mA(e);return m=Z("cachedContents",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=yA(v),S=new ap;return Object.assign(S,T),S})}}}function Zr(n,e){var i={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(i[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(i[r[a]]=n[r[a]]);return i}function mp(n){var e=typeof Symbol=="function"&&Symbol.iterator,i=e&&n[e],r=0;if(i)return i.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function lt(n){return this instanceof lt?(this.v=n,this):new lt(n)}function Ye(n,e,i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=i.apply(n,e||[]),a,c=[];return a=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),m("next"),m("throw"),m("return",g),a[Symbol.asyncIterator]=function(){return this},a;function g(C){return function(A){return Promise.resolve(A).then(C,T)}}function m(C,A){r[C]&&(a[C]=function(M){return new Promise(function(x,U){c.push([C,M,x,U])>1||y(C,M)})},A&&(a[C]=A(a[C])))}function y(C,A){try{f(r[C](A))}catch(M){S(c[0][3],M)}}function f(C){C.value instanceof lt?Promise.resolve(C.value.v).then(v,T):S(c[0][2],C)}function v(C){y("next",C)}function T(C){y("throw",C)}function S(C,A){C(A),c.shift(),c.length&&y(c[0][0],c[0][1])}}function We(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],i;return e?e.call(n):(n=typeof mp=="function"?mp(n):n[Symbol.iterator](),i={},r("next"),r("throw"),r("return"),i[Symbol.asyncIterator]=function(){return this},i);function r(c){i[c]=n[c]&&function(g){return new Promise(function(m,y){g=n[c](g),a(m,y,g.done,g.value)})}}function a(c,g,m,y){Promise.resolve(y).then(function(f){c({value:f,done:m})},g)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function NA(n){var e;if(n.candidates==null||n.candidates.length===0)return!1;const i=(e=n.candidates[0])===null||e===void 0?void 0:e.content;return i===void 0?!1:yy(i)}function yy(n){if(n.parts===void 0||n.parts.length===0)return!1;for(const e of n.parts)if(e===void 0||Object.keys(e).length===0)return!1;return!0}function IA(n){if(n.length!==0){for(const e of n)if(e.role!=="user"&&e.role!=="model")throw new Error(`Role must be user or model, but got ${e.role}.`)}}function pp(n){if(n===void 0||n.length===0)return[];const e=[],i=n.length;let r=0;for(;r<i;)if(n[r].role==="user")e.push(n[r]),r++;else{const a=[];let c=!0;for(;r<i&&n[r].role==="model";)a.push(n[r]),c&&!yy(n[r])&&(c=!1),r++;c?e.push(...a):e.pop()}return e}class DA{constructor(e,i){this.modelsModule=e,this.apiClient=i}create(e){return new kA(this.apiClient,this.modelsModule,e.model,e.config,structuredClone(e.history))}}class kA{constructor(e,i,r,a={},c=[]){this.apiClient=e,this.modelsModule=i,this.model=r,this.config=a,this.history=c,this.sendPromise=Promise.resolve(),IA(c)}async sendMessage(e){var i;await this.sendPromise;const r=te(e.message),a=this.modelsModule.generateContent({model:this.model,contents:this.getHistory(!0).concat(r),config:(i=e.config)!==null&&i!==void 0?i:this.config});return this.sendPromise=(async()=>{var c,g,m;const y=await a,f=(g=(c=y.candidates)===null||c===void 0?void 0:c[0])===null||g===void 0?void 0:g.content,v=y.automaticFunctionCallingHistory,T=this.getHistory(!0).length;let S=[];v!=null&&(S=(m=v.slice(T))!==null&&m!==void 0?m:[]);const C=f?[f]:[];this.recordHistory(r,C,S)})(),await this.sendPromise.catch(()=>{this.sendPromise=Promise.resolve()}),a}async sendMessageStream(e){var i;await this.sendPromise;const r=te(e.message),a=this.modelsModule.generateContentStream({model:this.model,contents:this.getHistory(!0).concat(r),config:(i=e.config)!==null&&i!==void 0?i:this.config});this.sendPromise=a.then(()=>{}).catch(()=>{});const c=await a;return this.processStreamResponse(c,r)}getHistory(e=!1){const i=e?pp(this.history):this.history;return structuredClone(i)}processStreamResponse(e,i){return Ye(this,arguments,function*(){var a,c,g,m,y,f;const v=[];try{for(var T=!0,S=We(e),C;C=yield lt(S.next()),a=C.done,!a;T=!0){m=C.value,T=!1;const A=m;if(NA(A)){const M=(f=(y=A.candidates)===null||y===void 0?void 0:y[0])===null||f===void 0?void 0:f.content;M!==void 0&&v.push(M)}yield yield lt(A)}}catch(A){c={error:A}}finally{try{!T&&!a&&(g=S.return)&&(yield lt(g.call(S)))}finally{if(c)throw c.error}}this.recordHistory(i,v)})}recordHistory(e,i,r){let a=[];i.length>0&&i.every(c=>c.role!==void 0)?a=i:a.push({role:"model",parts:[]}),r&&r.length>0?this.history.push(...pp(r)):this.history.push(e),this.history.push(...a)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class oa extends Error{constructor(e){super(e.message),this.name="ApiError",this.status=e.status,Object.setPrototypeOf(this,oa.prototype)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function UA(n){const e={},i=u(n,["file"]);return i!=null&&h(e,["file"],i),e}function zA(n){const e={},i=u(n,["sdkHttpResponse"]);return i!=null&&h(e,["sdkHttpResponse"],i),e}function LA(n){const e={},i=u(n,["name"]);return i!=null&&h(e,["_url","file"],cy(i)),e}function HA(n){const e={},i=u(n,["sdkHttpResponse"]);return i!=null&&h(e,["sdkHttpResponse"],i),e}function BA(n){const e={},i=u(n,["name"]);return i!=null&&h(e,["_url","file"],cy(i)),e}function qA(n){const e={},i=u(n,["uris"]);return i!=null&&h(e,["uris"],i),e}function PA(n,e){const i={},r=u(n,["pageSize"]);e!==void 0&&r!=null&&h(e,["_query","pageSize"],r);const a=u(n,["pageToken"]);return e!==void 0&&a!=null&&h(e,["_query","pageToken"],a),i}function GA(n){const e={},i=u(n,["config"]);return i!=null&&PA(i,e),e}function VA(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(e,["nextPageToken"],r);const a=u(n,["files"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(e,["files"],c)}return e}function OA(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["files"]);if(r!=null){let a=r;Array.isArray(a)&&(a=a.map(c=>c)),h(e,["files"],a)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class FA extends Cn{constructor(e){super(),this.apiClient=e,this.list=async(i={})=>new So(_n.PAGED_ITEM_FILES,r=>this.listInternal(r),await this.listInternal(i),i)}async upload(e){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");return this.apiClient.uploadFile(e.file,e.config).then(i=>i)}async download(e){await this.apiClient.downloadFile(e)}async registerFiles(e){throw new Error("registerFiles is only supported in Node.js environments.")}async _registerFiles(e){return this.registerFilesInternal(e)}async listInternal(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=GA(e);return c=Z("files",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>{const f=VA(y),v=new PE;return Object.assign(v,f),v})}}async createInternal(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=UA(e);return c=Z("upload/v1beta/files",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=zA(y),v=new GE;return Object.assign(v,f),v})}}async get(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=BA(e);return c=Z("files/{file}",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>y)}}async delete(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=LA(e);return c=Z("files/{file}",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"DELETE",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>{const f=HA(y),v=new VE;return Object.assign(v,f),v})}}async registerFilesInternal(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=qA(e);return c=Z("files:register",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=OA(y),v=new OE;return Object.assign(v,f),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function yp(n){const e={};if(u(n,["languageCodes"])!==void 0)throw new Error("languageCodes parameter is not supported in Gemini API.");return e}function YA(n){const e={},i=u(n,["apiKey"]);if(i!=null&&h(e,["apiKey"],i),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return e}function Yr(n){const e={},i=u(n,["data"]);if(i!=null&&h(e,["data"],i),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const r=u(n,["mimeType"]);return r!=null&&h(e,["mimeType"],r),e}function WA(n){const e={},i=u(n,["parts"]);if(i!=null){let a=i;Array.isArray(a)&&(a=a.map(c=>uw(c))),h(e,["parts"],a)}const r=u(n,["role"]);return r!=null&&h(e,["role"],r),e}function JA(n){const e={},i=u(n,["parts"]);if(i!=null){let a=i;Array.isArray(a)&&(a=a.map(c=>cw(c))),h(e,["parts"],a)}const r=u(n,["role"]);return r!=null&&h(e,["role"],r),e}function KA(n){const e={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=u(n,["fileUri"]);i!=null&&h(e,["fileUri"],i);const r=u(n,["mimeType"]);return r!=null&&h(e,["mimeType"],r),e}function XA(n){const e={},i=u(n,["id"]);i!=null&&h(e,["id"],i);const r=u(n,["args"]);r!=null&&h(e,["args"],r);const a=u(n,["name"]);if(a!=null&&h(e,["name"],a),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function QA(n){const e={},i=u(n,["description"]);i!=null&&h(e,["description"],i);const r=u(n,["name"]);r!=null&&h(e,["name"],r);const a=u(n,["parameters"]);a!=null&&h(e,["parameters"],a);const c=u(n,["parametersJsonSchema"]);c!=null&&h(e,["parametersJsonSchema"],c);const g=u(n,["response"]);g!=null&&h(e,["response"],g);const m=u(n,["responseJsonSchema"]);if(m!=null&&h(e,["responseJsonSchema"],m),u(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return e}function ZA(n){const e={},i=u(n,["modelSelectionConfig"]);i!=null&&h(e,["modelConfig"],i);const r=u(n,["responseJsonSchema"]);r!=null&&h(e,["responseJsonSchema"],r);const a=u(n,["audioTimestamp"]);a!=null&&h(e,["audioTimestamp"],a);const c=u(n,["candidateCount"]);c!=null&&h(e,["candidateCount"],c);const g=u(n,["enableAffectiveDialog"]);g!=null&&h(e,["enableAffectiveDialog"],g);const m=u(n,["frequencyPenalty"]);m!=null&&h(e,["frequencyPenalty"],m);const y=u(n,["logprobs"]);y!=null&&h(e,["logprobs"],y);const f=u(n,["maxOutputTokens"]);f!=null&&h(e,["maxOutputTokens"],f);const v=u(n,["mediaResolution"]);v!=null&&h(e,["mediaResolution"],v);const T=u(n,["presencePenalty"]);T!=null&&h(e,["presencePenalty"],T);const S=u(n,["responseLogprobs"]);S!=null&&h(e,["responseLogprobs"],S);const C=u(n,["responseMimeType"]);C!=null&&h(e,["responseMimeType"],C);const A=u(n,["responseModalities"]);A!=null&&h(e,["responseModalities"],A);const M=u(n,["responseSchema"]);M!=null&&h(e,["responseSchema"],M);const x=u(n,["routingConfig"]);x!=null&&h(e,["routingConfig"],x);const U=u(n,["seed"]);U!=null&&h(e,["seed"],U);const Y=u(n,["speechConfig"]);Y!=null&&h(e,["speechConfig"],Y);const P=u(n,["stopSequences"]);P!=null&&h(e,["stopSequences"],P);const J=u(n,["temperature"]);J!=null&&h(e,["temperature"],J);const Q=u(n,["thinkingConfig"]);Q!=null&&h(e,["thinkingConfig"],Q);const V=u(n,["topK"]);V!=null&&h(e,["topK"],V);const K=u(n,["topP"]);if(K!=null&&h(e,["topP"],K),u(n,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return e}function $A(n){const e={},i=u(n,["authConfig"]);i!=null&&h(e,["authConfig"],YA(i));const r=u(n,["enableWidget"]);return r!=null&&h(e,["enableWidget"],r),e}function jA(n){const e={},i=u(n,["searchTypes"]);if(i!=null&&h(e,["searchTypes"],i),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const r=u(n,["timeRangeFilter"]);return r!=null&&h(e,["timeRangeFilter"],r),e}function tw(n,e){const i={},r=u(n,["generationConfig"]);e!==void 0&&r!=null&&h(e,["setup","generationConfig"],r);const a=u(n,["responseModalities"]);e!==void 0&&a!=null&&h(e,["setup","generationConfig","responseModalities"],a);const c=u(n,["temperature"]);e!==void 0&&c!=null&&h(e,["setup","generationConfig","temperature"],c);const g=u(n,["topP"]);e!==void 0&&g!=null&&h(e,["setup","generationConfig","topP"],g);const m=u(n,["topK"]);e!==void 0&&m!=null&&h(e,["setup","generationConfig","topK"],m);const y=u(n,["maxOutputTokens"]);e!==void 0&&y!=null&&h(e,["setup","generationConfig","maxOutputTokens"],y);const f=u(n,["mediaResolution"]);e!==void 0&&f!=null&&h(e,["setup","generationConfig","mediaResolution"],f);const v=u(n,["seed"]);e!==void 0&&v!=null&&h(e,["setup","generationConfig","seed"],v);const T=u(n,["speechConfig"]);e!==void 0&&T!=null&&h(e,["setup","generationConfig","speechConfig"],Ec(T));const S=u(n,["thinkingConfig"]);e!==void 0&&S!=null&&h(e,["setup","generationConfig","thinkingConfig"],S);const C=u(n,["enableAffectiveDialog"]);e!==void 0&&C!=null&&h(e,["setup","generationConfig","enableAffectiveDialog"],C);const A=u(n,["systemInstruction"]);e!==void 0&&A!=null&&h(e,["setup","systemInstruction"],WA(te(A)));const M=u(n,["tools"]);if(e!==void 0&&M!=null){let V=gi(M);Array.isArray(V)&&(V=V.map(K=>gw(hi(K)))),h(e,["setup","tools"],V)}const x=u(n,["sessionResumption"]);e!==void 0&&x!=null&&h(e,["setup","sessionResumption"],hw(x));const U=u(n,["inputAudioTranscription"]);e!==void 0&&U!=null&&h(e,["setup","inputAudioTranscription"],yp(U));const Y=u(n,["outputAudioTranscription"]);e!==void 0&&Y!=null&&h(e,["setup","outputAudioTranscription"],yp(Y));const P=u(n,["realtimeInputConfig"]);e!==void 0&&P!=null&&h(e,["setup","realtimeInputConfig"],P);const J=u(n,["contextWindowCompression"]);e!==void 0&&J!=null&&h(e,["setup","contextWindowCompression"],J);const Q=u(n,["proactivity"]);if(e!==void 0&&Q!=null&&h(e,["setup","proactivity"],Q),u(n,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return i}function ew(n,e){const i={},r=u(n,["generationConfig"]);e!==void 0&&r!=null&&h(e,["setup","generationConfig"],ZA(r));const a=u(n,["responseModalities"]);e!==void 0&&a!=null&&h(e,["setup","generationConfig","responseModalities"],a);const c=u(n,["temperature"]);e!==void 0&&c!=null&&h(e,["setup","generationConfig","temperature"],c);const g=u(n,["topP"]);e!==void 0&&g!=null&&h(e,["setup","generationConfig","topP"],g);const m=u(n,["topK"]);e!==void 0&&m!=null&&h(e,["setup","generationConfig","topK"],m);const y=u(n,["maxOutputTokens"]);e!==void 0&&y!=null&&h(e,["setup","generationConfig","maxOutputTokens"],y);const f=u(n,["mediaResolution"]);e!==void 0&&f!=null&&h(e,["setup","generationConfig","mediaResolution"],f);const v=u(n,["seed"]);e!==void 0&&v!=null&&h(e,["setup","generationConfig","seed"],v);const T=u(n,["speechConfig"]);e!==void 0&&T!=null&&h(e,["setup","generationConfig","speechConfig"],Ec(T));const S=u(n,["thinkingConfig"]);e!==void 0&&S!=null&&h(e,["setup","generationConfig","thinkingConfig"],S);const C=u(n,["enableAffectiveDialog"]);e!==void 0&&C!=null&&h(e,["setup","generationConfig","enableAffectiveDialog"],C);const A=u(n,["systemInstruction"]);e!==void 0&&A!=null&&h(e,["setup","systemInstruction"],JA(te(A)));const M=u(n,["tools"]);if(e!==void 0&&M!=null){let K=gi(M);Array.isArray(K)&&(K=K.map(rt=>dw(hi(rt)))),h(e,["setup","tools"],K)}const x=u(n,["sessionResumption"]);e!==void 0&&x!=null&&h(e,["setup","sessionResumption"],x);const U=u(n,["inputAudioTranscription"]);e!==void 0&&U!=null&&h(e,["setup","inputAudioTranscription"],U);const Y=u(n,["outputAudioTranscription"]);e!==void 0&&Y!=null&&h(e,["setup","outputAudioTranscription"],Y);const P=u(n,["realtimeInputConfig"]);e!==void 0&&P!=null&&h(e,["setup","realtimeInputConfig"],P);const J=u(n,["contextWindowCompression"]);e!==void 0&&J!=null&&h(e,["setup","contextWindowCompression"],J);const Q=u(n,["proactivity"]);e!==void 0&&Q!=null&&h(e,["setup","proactivity"],Q);const V=u(n,["explicitVadSignal"]);return e!==void 0&&V!=null&&h(e,["setup","explicitVadSignal"],V),i}function nw(n,e){const i={},r=u(e,["model"]);r!=null&&h(i,["setup","model"],At(n,r));const a=u(e,["config"]);return a!=null&&h(i,["config"],tw(a,i)),i}function ow(n,e){const i={},r=u(e,["model"]);r!=null&&h(i,["setup","model"],At(n,r));const a=u(e,["config"]);return a!=null&&h(i,["config"],ew(a,i)),i}function iw(n){const e={},i=u(n,["musicGenerationConfig"]);return i!=null&&h(e,["musicGenerationConfig"],i),e}function sw(n){const e={},i=u(n,["weightedPrompts"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(a=>a)),h(e,["weightedPrompts"],r)}return e}function rw(n){const e={},i=u(n,["media"]);if(i!=null){let f=sy(i);Array.isArray(f)&&(f=f.map(v=>Yr(v))),h(e,["mediaChunks"],f)}const r=u(n,["audio"]);r!=null&&h(e,["audio"],Yr(ay(r)));const a=u(n,["audioStreamEnd"]);a!=null&&h(e,["audioStreamEnd"],a);const c=u(n,["video"]);c!=null&&h(e,["video"],Yr(ry(c)));const g=u(n,["text"]);g!=null&&h(e,["text"],g);const m=u(n,["activityStart"]);m!=null&&h(e,["activityStart"],m);const y=u(n,["activityEnd"]);return y!=null&&h(e,["activityEnd"],y),e}function aw(n){const e={},i=u(n,["media"]);if(i!=null){let f=sy(i);Array.isArray(f)&&(f=f.map(v=>v)),h(e,["mediaChunks"],f)}const r=u(n,["audio"]);r!=null&&h(e,["audio"],ay(r));const a=u(n,["audioStreamEnd"]);a!=null&&h(e,["audioStreamEnd"],a);const c=u(n,["video"]);c!=null&&h(e,["video"],ry(c));const g=u(n,["text"]);g!=null&&h(e,["text"],g);const m=u(n,["activityStart"]);m!=null&&h(e,["activityStart"],m);const y=u(n,["activityEnd"]);return y!=null&&h(e,["activityEnd"],y),e}function lw(n){const e={},i=u(n,["setupComplete"]);i!=null&&h(e,["setupComplete"],i);const r=u(n,["serverContent"]);r!=null&&h(e,["serverContent"],r);const a=u(n,["toolCall"]);a!=null&&h(e,["toolCall"],a);const c=u(n,["toolCallCancellation"]);c!=null&&h(e,["toolCallCancellation"],c);const g=u(n,["usageMetadata"]);g!=null&&h(e,["usageMetadata"],fw(g));const m=u(n,["goAway"]);m!=null&&h(e,["goAway"],m);const y=u(n,["sessionResumptionUpdate"]);y!=null&&h(e,["sessionResumptionUpdate"],y);const f=u(n,["voiceActivityDetectionSignal"]);f!=null&&h(e,["voiceActivityDetectionSignal"],f);const v=u(n,["voiceActivity"]);return v!=null&&h(e,["voiceActivity"],mw(v)),e}function uw(n){const e={},i=u(n,["mediaResolution"]);i!=null&&h(e,["mediaResolution"],i);const r=u(n,["codeExecutionResult"]);r!=null&&h(e,["codeExecutionResult"],r);const a=u(n,["executableCode"]);a!=null&&h(e,["executableCode"],a);const c=u(n,["fileData"]);c!=null&&h(e,["fileData"],KA(c));const g=u(n,["functionCall"]);g!=null&&h(e,["functionCall"],XA(g));const m=u(n,["functionResponse"]);m!=null&&h(e,["functionResponse"],m);const y=u(n,["inlineData"]);y!=null&&h(e,["inlineData"],Yr(y));const f=u(n,["text"]);f!=null&&h(e,["text"],f);const v=u(n,["thought"]);v!=null&&h(e,["thought"],v);const T=u(n,["thoughtSignature"]);T!=null&&h(e,["thoughtSignature"],T);const S=u(n,["videoMetadata"]);S!=null&&h(e,["videoMetadata"],S);const C=u(n,["toolCall"]);C!=null&&h(e,["toolCall"],C);const A=u(n,["toolResponse"]);return A!=null&&h(e,["toolResponse"],A),e}function cw(n){const e={},i=u(n,["mediaResolution"]);i!=null&&h(e,["mediaResolution"],i);const r=u(n,["codeExecutionResult"]);r!=null&&h(e,["codeExecutionResult"],r);const a=u(n,["executableCode"]);a!=null&&h(e,["executableCode"],a);const c=u(n,["fileData"]);c!=null&&h(e,["fileData"],c);const g=u(n,["functionCall"]);g!=null&&h(e,["functionCall"],g);const m=u(n,["functionResponse"]);m!=null&&h(e,["functionResponse"],m);const y=u(n,["inlineData"]);y!=null&&h(e,["inlineData"],y);const f=u(n,["text"]);f!=null&&h(e,["text"],f);const v=u(n,["thought"]);v!=null&&h(e,["thought"],v);const T=u(n,["thoughtSignature"]);T!=null&&h(e,["thoughtSignature"],T);const S=u(n,["videoMetadata"]);if(S!=null&&h(e,["videoMetadata"],S),u(n,["toolCall"])!==void 0)throw new Error("toolCall parameter is not supported in Vertex AI.");if(u(n,["toolResponse"])!==void 0)throw new Error("toolResponse parameter is not supported in Vertex AI.");return e}function hw(n){const e={},i=u(n,["handle"]);if(i!=null&&h(e,["handle"],i),u(n,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return e}function gw(n){const e={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=u(n,["computerUse"]);i!=null&&h(e,["computerUse"],i);const r=u(n,["fileSearch"]);r!=null&&h(e,["fileSearch"],r);const a=u(n,["googleSearch"]);a!=null&&h(e,["googleSearch"],jA(a));const c=u(n,["googleMaps"]);c!=null&&h(e,["googleMaps"],$A(c));const g=u(n,["codeExecution"]);if(g!=null&&h(e,["codeExecution"],g),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const m=u(n,["functionDeclarations"]);if(m!=null){let T=m;Array.isArray(T)&&(T=T.map(S=>S)),h(e,["functionDeclarations"],T)}const y=u(n,["googleSearchRetrieval"]);if(y!=null&&h(e,["googleSearchRetrieval"],y),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const f=u(n,["urlContext"]);f!=null&&h(e,["urlContext"],f);const v=u(n,["mcpServers"]);if(v!=null){let T=v;Array.isArray(T)&&(T=T.map(S=>S)),h(e,["mcpServers"],T)}return e}function dw(n){const e={},i=u(n,["retrieval"]);i!=null&&h(e,["retrieval"],i);const r=u(n,["computerUse"]);if(r!=null&&h(e,["computerUse"],r),u(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const a=u(n,["googleSearch"]);a!=null&&h(e,["googleSearch"],a);const c=u(n,["googleMaps"]);c!=null&&h(e,["googleMaps"],c);const g=u(n,["codeExecution"]);g!=null&&h(e,["codeExecution"],g);const m=u(n,["enterpriseWebSearch"]);m!=null&&h(e,["enterpriseWebSearch"],m);const y=u(n,["functionDeclarations"]);if(y!=null){let S=y;Array.isArray(S)&&(S=S.map(C=>QA(C))),h(e,["functionDeclarations"],S)}const f=u(n,["googleSearchRetrieval"]);f!=null&&h(e,["googleSearchRetrieval"],f);const v=u(n,["parallelAiSearch"]);v!=null&&h(e,["parallelAiSearch"],v);const T=u(n,["urlContext"]);if(T!=null&&h(e,["urlContext"],T),u(n,["mcpServers"])!==void 0)throw new Error("mcpServers parameter is not supported in Vertex AI.");return e}function fw(n){const e={},i=u(n,["promptTokenCount"]);i!=null&&h(e,["promptTokenCount"],i);const r=u(n,["cachedContentTokenCount"]);r!=null&&h(e,["cachedContentTokenCount"],r);const a=u(n,["candidatesTokenCount"]);a!=null&&h(e,["responseTokenCount"],a);const c=u(n,["toolUsePromptTokenCount"]);c!=null&&h(e,["toolUsePromptTokenCount"],c);const g=u(n,["thoughtsTokenCount"]);g!=null&&h(e,["thoughtsTokenCount"],g);const m=u(n,["totalTokenCount"]);m!=null&&h(e,["totalTokenCount"],m);const y=u(n,["promptTokensDetails"]);if(y!=null){let C=y;Array.isArray(C)&&(C=C.map(A=>A)),h(e,["promptTokensDetails"],C)}const f=u(n,["cacheTokensDetails"]);if(f!=null){let C=f;Array.isArray(C)&&(C=C.map(A=>A)),h(e,["cacheTokensDetails"],C)}const v=u(n,["candidatesTokensDetails"]);if(v!=null){let C=v;Array.isArray(C)&&(C=C.map(A=>A)),h(e,["responseTokensDetails"],C)}const T=u(n,["toolUsePromptTokensDetails"]);if(T!=null){let C=T;Array.isArray(C)&&(C=C.map(A=>A)),h(e,["toolUsePromptTokensDetails"],C)}const S=u(n,["trafficType"]);return S!=null&&h(e,["trafficType"],S),e}function mw(n){const e={},i=u(n,["type"]);return i!=null&&h(e,["voiceActivityType"],i),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function pw(n,e){const i={},r=u(n,["apiKey"]);if(r!=null&&h(i,["apiKey"],r),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return i}function yw(n,e){const i={},r=u(n,["data"]);if(r!=null&&h(i,["data"],r),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const a=u(n,["mimeType"]);return a!=null&&h(i,["mimeType"],a),i}function vw(n,e){const i={},r=u(n,["content"]);r!=null&&h(i,["content"],r);const a=u(n,["citationMetadata"]);a!=null&&h(i,["citationMetadata"],Tw(a));const c=u(n,["tokenCount"]);c!=null&&h(i,["tokenCount"],c);const g=u(n,["finishReason"]);g!=null&&h(i,["finishReason"],g);const m=u(n,["groundingMetadata"]);m!=null&&h(i,["groundingMetadata"],m);const y=u(n,["avgLogprobs"]);y!=null&&h(i,["avgLogprobs"],y);const f=u(n,["index"]);f!=null&&h(i,["index"],f);const v=u(n,["logprobsResult"]);v!=null&&h(i,["logprobsResult"],v);const T=u(n,["safetyRatings"]);if(T!=null){let C=T;Array.isArray(C)&&(C=C.map(A=>A)),h(i,["safetyRatings"],C)}const S=u(n,["urlContextMetadata"]);return S!=null&&h(i,["urlContextMetadata"],S),i}function Tw(n,e){const i={},r=u(n,["citationSources"]);if(r!=null){let a=r;Array.isArray(a)&&(a=a.map(c=>c)),h(i,["citations"],a)}return i}function Sw(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["contents"]);if(c!=null){let g=Me(c);Array.isArray(g)&&(g=g.map(m=>fi(m))),h(r,["contents"],g)}return r}function _w(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["tokensInfo"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(i,["tokensInfo"],c)}return i}function Ew(n,e){const i={},r=u(n,["values"]);r!=null&&h(i,["values"],r);const a=u(n,["statistics"]);return a!=null&&h(i,["statistics"],Cw(a)),i}function Cw(n,e){const i={},r=u(n,["truncated"]);r!=null&&h(i,["truncated"],r);const a=u(n,["token_count"]);return a!=null&&h(i,["tokenCount"],a),i}function vs(n,e){const i={},r=u(n,["parts"]);if(r!=null){let c=r;Array.isArray(c)&&(c=c.map(g=>Dx(g))),h(i,["parts"],c)}const a=u(n,["role"]);return a!=null&&h(i,["role"],a),i}function fi(n,e){const i={},r=u(n,["parts"]);if(r!=null){let c=r;Array.isArray(c)&&(c=c.map(g=>kx(g))),h(i,["parts"],c)}const a=u(n,["role"]);return a!=null&&h(i,["role"],a),i}function Aw(n,e){const i={},r=u(n,["controlType"]);r!=null&&h(i,["controlType"],r);const a=u(n,["enableControlImageComputation"]);return a!=null&&h(i,["computeControl"],a),i}function ww(n,e){const i={};if(u(n,["systemInstruction"])!==void 0)throw new Error("systemInstruction parameter is not supported in Gemini API.");if(u(n,["tools"])!==void 0)throw new Error("tools parameter is not supported in Gemini API.");if(u(n,["generationConfig"])!==void 0)throw new Error("generationConfig parameter is not supported in Gemini API.");return i}function xw(n,e,i){const r={},a=u(n,["systemInstruction"]);e!==void 0&&a!=null&&h(e,["systemInstruction"],fi(te(a)));const c=u(n,["tools"]);if(e!==void 0&&c!=null){let m=c;Array.isArray(m)&&(m=m.map(y=>_y(y))),h(e,["tools"],m)}const g=u(n,["generationConfig"]);return e!==void 0&&g!=null&&h(e,["generationConfig"],yx(g)),r}function bw(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["contents"]);if(c!=null){let m=Me(c);Array.isArray(m)&&(m=m.map(y=>vs(y))),h(r,["contents"],m)}const g=u(e,["config"]);return g!=null&&ww(g),r}function Rw(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["contents"]);if(c!=null){let m=Me(c);Array.isArray(m)&&(m=m.map(y=>fi(y))),h(r,["contents"],m)}const g=u(e,["config"]);return g!=null&&xw(g,r),r}function Mw(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["totalTokens"]);a!=null&&h(i,["totalTokens"],a);const c=u(n,["cachedContentTokenCount"]);return c!=null&&h(i,["cachedContentTokenCount"],c),i}function Nw(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["totalTokens"]);return a!=null&&h(i,["totalTokens"],a),i}function Iw(n,e,i){const r={},a=u(e,["model"]);return a!=null&&h(r,["_url","name"],At(n,a)),r}function Dw(n,e,i){const r={},a=u(e,["model"]);return a!=null&&h(r,["_url","name"],At(n,a)),r}function kw(n,e){const i={},r=u(n,["sdkHttpResponse"]);return r!=null&&h(i,["sdkHttpResponse"],r),i}function Uw(n,e){const i={},r=u(n,["sdkHttpResponse"]);return r!=null&&h(i,["sdkHttpResponse"],r),i}function zw(n,e,i){const r={},a=u(n,["outputGcsUri"]);e!==void 0&&a!=null&&h(e,["parameters","storageUri"],a);const c=u(n,["negativePrompt"]);e!==void 0&&c!=null&&h(e,["parameters","negativePrompt"],c);const g=u(n,["numberOfImages"]);e!==void 0&&g!=null&&h(e,["parameters","sampleCount"],g);const m=u(n,["aspectRatio"]);e!==void 0&&m!=null&&h(e,["parameters","aspectRatio"],m);const y=u(n,["guidanceScale"]);e!==void 0&&y!=null&&h(e,["parameters","guidanceScale"],y);const f=u(n,["seed"]);e!==void 0&&f!=null&&h(e,["parameters","seed"],f);const v=u(n,["safetyFilterLevel"]);e!==void 0&&v!=null&&h(e,["parameters","safetySetting"],v);const T=u(n,["personGeneration"]);e!==void 0&&T!=null&&h(e,["parameters","personGeneration"],T);const S=u(n,["includeSafetyAttributes"]);e!==void 0&&S!=null&&h(e,["parameters","includeSafetyAttributes"],S);const C=u(n,["includeRaiReason"]);e!==void 0&&C!=null&&h(e,["parameters","includeRaiReason"],C);const A=u(n,["language"]);e!==void 0&&A!=null&&h(e,["parameters","language"],A);const M=u(n,["outputMimeType"]);e!==void 0&&M!=null&&h(e,["parameters","outputOptions","mimeType"],M);const x=u(n,["outputCompressionQuality"]);e!==void 0&&x!=null&&h(e,["parameters","outputOptions","compressionQuality"],x);const U=u(n,["addWatermark"]);e!==void 0&&U!=null&&h(e,["parameters","addWatermark"],U);const Y=u(n,["labels"]);e!==void 0&&Y!=null&&h(e,["labels"],Y);const P=u(n,["editMode"]);e!==void 0&&P!=null&&h(e,["parameters","editMode"],P);const J=u(n,["baseSteps"]);return e!==void 0&&J!=null&&h(e,["parameters","editConfig","baseSteps"],J),r}function Lw(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["prompt"]);c!=null&&h(r,["instances[0]","prompt"],c);const g=u(e,["referenceImages"]);if(g!=null){let y=g;Array.isArray(y)&&(y=y.map(f=>qx(f))),h(r,["instances[0]","referenceImages"],y)}const m=u(e,["config"]);return m!=null&&zw(m,r),r}function Hw(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["predictions"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>ia(g))),h(i,["generatedImages"],c)}return i}function Bw(n,e,i){const r={},a=u(n,["taskType"]);e!==void 0&&a!=null&&h(e,["requests[]","taskType"],a);const c=u(n,["title"]);e!==void 0&&c!=null&&h(e,["requests[]","title"],c);const g=u(n,["outputDimensionality"]);if(e!==void 0&&g!=null&&h(e,["requests[]","outputDimensionality"],g),u(n,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(u(n,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return r}function qw(n,e,i){const r={};let a=u(i,["embeddingApiType"]);if(a===void 0&&(a="PREDICT"),a==="PREDICT"){const f=u(n,["taskType"]);e!==void 0&&f!=null&&h(e,["instances[]","task_type"],f)}else if(a==="EMBED_CONTENT"){const f=u(n,["taskType"]);e!==void 0&&f!=null&&h(e,["taskType"],f)}let c=u(i,["embeddingApiType"]);if(c===void 0&&(c="PREDICT"),c==="PREDICT"){const f=u(n,["title"]);e!==void 0&&f!=null&&h(e,["instances[]","title"],f)}else if(c==="EMBED_CONTENT"){const f=u(n,["title"]);e!==void 0&&f!=null&&h(e,["title"],f)}let g=u(i,["embeddingApiType"]);if(g===void 0&&(g="PREDICT"),g==="PREDICT"){const f=u(n,["outputDimensionality"]);e!==void 0&&f!=null&&h(e,["parameters","outputDimensionality"],f)}else if(g==="EMBED_CONTENT"){const f=u(n,["outputDimensionality"]);e!==void 0&&f!=null&&h(e,["outputDimensionality"],f)}let m=u(i,["embeddingApiType"]);if(m===void 0&&(m="PREDICT"),m==="PREDICT"){const f=u(n,["mimeType"]);e!==void 0&&f!=null&&h(e,["instances[]","mimeType"],f)}let y=u(i,["embeddingApiType"]);if(y===void 0&&(y="PREDICT"),y==="PREDICT"){const f=u(n,["autoTruncate"]);e!==void 0&&f!=null&&h(e,["parameters","autoTruncate"],f)}else if(y==="EMBED_CONTENT"){const f=u(n,["autoTruncate"]);e!==void 0&&f!=null&&h(e,["autoTruncate"],f)}return r}function Pw(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["contents"]);if(c!=null){let f=Tc(n,c);Array.isArray(f)&&(f=f.map(v=>v)),h(r,["requests[]","content"],f)}const g=u(e,["content"]);g!=null&&vs(te(g));const m=u(e,["config"]);m!=null&&Bw(m,r);const y=u(e,["model"]);return y!==void 0&&h(r,["requests[]","model"],At(n,y)),r}function Gw(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));let c=u(i,["embeddingApiType"]);if(c===void 0&&(c="PREDICT"),c==="PREDICT"){const y=u(e,["contents"]);if(y!=null){let f=Tc(n,y);Array.isArray(f)&&(f=f.map(v=>v)),h(r,["instances[]","content"],f)}}let g=u(i,["embeddingApiType"]);if(g===void 0&&(g="PREDICT"),g==="EMBED_CONTENT"){const y=u(e,["content"]);y!=null&&h(r,["content"],fi(te(y)))}const m=u(e,["config"]);return m!=null&&qw(m,r,i),r}function Vw(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["embeddings"]);if(a!=null){let g=a;Array.isArray(g)&&(g=g.map(m=>m)),h(i,["embeddings"],g)}const c=u(n,["metadata"]);return c!=null&&h(i,["metadata"],c),i}function Ow(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["predictions[]","embeddings"]);if(a!=null){let g=a;Array.isArray(g)&&(g=g.map(m=>Ew(m))),h(i,["embeddings"],g)}const c=u(n,["metadata"]);if(c!=null&&h(i,["metadata"],c),e&&u(e,["embeddingApiType"])==="EMBED_CONTENT"){const g=u(n,["embedding"]),m=u(n,["usageMetadata"]),y=u(n,["truncated"]);if(g){const f={};m&&m.promptTokenCount&&(f.tokenCount=m.promptTokenCount),y&&(f.truncated=y),g.statistics=f,h(i,["embeddings"],[g])}}return i}function Fw(n,e){const i={},r=u(n,["endpoint"]);r!=null&&h(i,["name"],r);const a=u(n,["deployedModelId"]);return a!=null&&h(i,["deployedModelId"],a),i}function Yw(n,e){const i={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const r=u(n,["fileUri"]);r!=null&&h(i,["fileUri"],r);const a=u(n,["mimeType"]);return a!=null&&h(i,["mimeType"],a),i}function Ww(n,e){const i={},r=u(n,["id"]);r!=null&&h(i,["id"],r);const a=u(n,["args"]);a!=null&&h(i,["args"],a);const c=u(n,["name"]);if(c!=null&&h(i,["name"],c),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return i}function Jw(n,e){const i={},r=u(n,["allowedFunctionNames"]);r!=null&&h(i,["allowedFunctionNames"],r);const a=u(n,["mode"]);if(a!=null&&h(i,["mode"],a),u(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return i}function Kw(n,e){const i={},r=u(n,["description"]);r!=null&&h(i,["description"],r);const a=u(n,["name"]);a!=null&&h(i,["name"],a);const c=u(n,["parameters"]);c!=null&&h(i,["parameters"],c);const g=u(n,["parametersJsonSchema"]);g!=null&&h(i,["parametersJsonSchema"],g);const m=u(n,["response"]);m!=null&&h(i,["response"],m);const y=u(n,["responseJsonSchema"]);if(y!=null&&h(i,["responseJsonSchema"],y),u(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return i}function Xw(n,e,i,r){const a={},c=u(e,["systemInstruction"]);i!==void 0&&c!=null&&h(i,["systemInstruction"],vs(te(c)));const g=u(e,["temperature"]);g!=null&&h(a,["temperature"],g);const m=u(e,["topP"]);m!=null&&h(a,["topP"],m);const y=u(e,["topK"]);y!=null&&h(a,["topK"],y);const f=u(e,["candidateCount"]);f!=null&&h(a,["candidateCount"],f);const v=u(e,["maxOutputTokens"]);v!=null&&h(a,["maxOutputTokens"],v);const T=u(e,["stopSequences"]);T!=null&&h(a,["stopSequences"],T);const S=u(e,["responseLogprobs"]);S!=null&&h(a,["responseLogprobs"],S);const C=u(e,["logprobs"]);C!=null&&h(a,["logprobs"],C);const A=u(e,["presencePenalty"]);A!=null&&h(a,["presencePenalty"],A);const M=u(e,["frequencyPenalty"]);M!=null&&h(a,["frequencyPenalty"],M);const x=u(e,["seed"]);x!=null&&h(a,["seed"],x);const U=u(e,["responseMimeType"]);U!=null&&h(a,["responseMimeType"],U);const Y=u(e,["responseSchema"]);Y!=null&&h(a,["responseSchema"],Sc(Y));const P=u(e,["responseJsonSchema"]);if(P!=null&&h(a,["responseJsonSchema"],P),u(e,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(u(e,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const J=u(e,["safetySettings"]);if(i!==void 0&&J!=null){let St=J;Array.isArray(St)&&(St=St.map(Rt=>Px(Rt))),h(i,["safetySettings"],St)}const Q=u(e,["tools"]);if(i!==void 0&&Q!=null){let St=gi(Q);Array.isArray(St)&&(St=St.map(Rt=>Kx(hi(Rt)))),h(i,["tools"],St)}const V=u(e,["toolConfig"]);if(i!==void 0&&V!=null&&h(i,["toolConfig"],Wx(V)),u(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const K=u(e,["cachedContent"]);i!==void 0&&K!=null&&h(i,["cachedContent"],An(n,K));const rt=u(e,["responseModalities"]);rt!=null&&h(a,["responseModalities"],rt);const j=u(e,["mediaResolution"]);j!=null&&h(a,["mediaResolution"],j);const ut=u(e,["speechConfig"]);if(ut!=null&&h(a,["speechConfig"],_c(ut)),u(e,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const Tt=u(e,["thinkingConfig"]);Tt!=null&&h(a,["thinkingConfig"],Tt);const bt=u(e,["imageConfig"]);bt!=null&&h(a,["imageConfig"],Ex(bt));const Nt=u(e,["enableEnhancedCivicAnswers"]);if(Nt!=null&&h(a,["enableEnhancedCivicAnswers"],Nt),u(e,["modelArmorConfig"])!==void 0)throw new Error("modelArmorConfig parameter is not supported in Gemini API.");return a}function Qw(n,e,i,r){const a={},c=u(e,["systemInstruction"]);i!==void 0&&c!=null&&h(i,["systemInstruction"],fi(te(c)));const g=u(e,["temperature"]);g!=null&&h(a,["temperature"],g);const m=u(e,["topP"]);m!=null&&h(a,["topP"],m);const y=u(e,["topK"]);y!=null&&h(a,["topK"],y);const f=u(e,["candidateCount"]);f!=null&&h(a,["candidateCount"],f);const v=u(e,["maxOutputTokens"]);v!=null&&h(a,["maxOutputTokens"],v);const T=u(e,["stopSequences"]);T!=null&&h(a,["stopSequences"],T);const S=u(e,["responseLogprobs"]);S!=null&&h(a,["responseLogprobs"],S);const C=u(e,["logprobs"]);C!=null&&h(a,["logprobs"],C);const A=u(e,["presencePenalty"]);A!=null&&h(a,["presencePenalty"],A);const M=u(e,["frequencyPenalty"]);M!=null&&h(a,["frequencyPenalty"],M);const x=u(e,["seed"]);x!=null&&h(a,["seed"],x);const U=u(e,["responseMimeType"]);U!=null&&h(a,["responseMimeType"],U);const Y=u(e,["responseSchema"]);Y!=null&&h(a,["responseSchema"],Sc(Y));const P=u(e,["responseJsonSchema"]);P!=null&&h(a,["responseJsonSchema"],P);const J=u(e,["routingConfig"]);J!=null&&h(a,["routingConfig"],J);const Q=u(e,["modelSelectionConfig"]);Q!=null&&h(a,["modelConfig"],Q);const V=u(e,["safetySettings"]);if(i!==void 0&&V!=null){let ot=V;Array.isArray(ot)&&(ot=ot.map(_t=>_t)),h(i,["safetySettings"],ot)}const K=u(e,["tools"]);if(i!==void 0&&K!=null){let ot=gi(K);Array.isArray(ot)&&(ot=ot.map(_t=>_y(hi(_t)))),h(i,["tools"],ot)}const rt=u(e,["toolConfig"]);i!==void 0&&rt!=null&&h(i,["toolConfig"],Jx(rt));const j=u(e,["labels"]);i!==void 0&&j!=null&&h(i,["labels"],j);const ut=u(e,["cachedContent"]);i!==void 0&&ut!=null&&h(i,["cachedContent"],An(n,ut));const Tt=u(e,["responseModalities"]);Tt!=null&&h(a,["responseModalities"],Tt);const bt=u(e,["mediaResolution"]);bt!=null&&h(a,["mediaResolution"],bt);const Nt=u(e,["speechConfig"]);Nt!=null&&h(a,["speechConfig"],_c(Nt));const St=u(e,["audioTimestamp"]);St!=null&&h(a,["audioTimestamp"],St);const Rt=u(e,["thinkingConfig"]);Rt!=null&&h(a,["thinkingConfig"],Rt);const H=u(e,["imageConfig"]);if(H!=null&&h(a,["imageConfig"],Cx(H)),u(e,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");const X=u(e,["modelArmorConfig"]);return i!==void 0&&X!=null&&h(i,["modelArmorConfig"],X),a}function vp(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["contents"]);if(c!=null){let m=Me(c);Array.isArray(m)&&(m=m.map(y=>vs(y))),h(r,["contents"],m)}const g=u(e,["config"]);return g!=null&&h(r,["generationConfig"],Xw(n,g,r)),r}function Tp(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["contents"]);if(c!=null){let m=Me(c);Array.isArray(m)&&(m=m.map(y=>fi(y))),h(r,["contents"],m)}const g=u(e,["config"]);return g!=null&&h(r,["generationConfig"],Qw(n,g,r)),r}function Sp(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["candidates"]);if(a!=null){let f=a;Array.isArray(f)&&(f=f.map(v=>vw(v))),h(i,["candidates"],f)}const c=u(n,["modelVersion"]);c!=null&&h(i,["modelVersion"],c);const g=u(n,["promptFeedback"]);g!=null&&h(i,["promptFeedback"],g);const m=u(n,["responseId"]);m!=null&&h(i,["responseId"],m);const y=u(n,["usageMetadata"]);return y!=null&&h(i,["usageMetadata"],y),i}function _p(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["candidates"]);if(a!=null){let v=a;Array.isArray(v)&&(v=v.map(T=>T)),h(i,["candidates"],v)}const c=u(n,["createTime"]);c!=null&&h(i,["createTime"],c);const g=u(n,["modelVersion"]);g!=null&&h(i,["modelVersion"],g);const m=u(n,["promptFeedback"]);m!=null&&h(i,["promptFeedback"],m);const y=u(n,["responseId"]);y!=null&&h(i,["responseId"],y);const f=u(n,["usageMetadata"]);return f!=null&&h(i,["usageMetadata"],f),i}function Zw(n,e,i){const r={};if(u(n,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(u(n,["negativePrompt"])!==void 0)throw new Error("negativePrompt parameter is not supported in Gemini API.");const a=u(n,["numberOfImages"]);e!==void 0&&a!=null&&h(e,["parameters","sampleCount"],a);const c=u(n,["aspectRatio"]);e!==void 0&&c!=null&&h(e,["parameters","aspectRatio"],c);const g=u(n,["guidanceScale"]);if(e!==void 0&&g!=null&&h(e,["parameters","guidanceScale"],g),u(n,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const m=u(n,["safetyFilterLevel"]);e!==void 0&&m!=null&&h(e,["parameters","safetySetting"],m);const y=u(n,["personGeneration"]);e!==void 0&&y!=null&&h(e,["parameters","personGeneration"],y);const f=u(n,["includeSafetyAttributes"]);e!==void 0&&f!=null&&h(e,["parameters","includeSafetyAttributes"],f);const v=u(n,["includeRaiReason"]);e!==void 0&&v!=null&&h(e,["parameters","includeRaiReason"],v);const T=u(n,["language"]);e!==void 0&&T!=null&&h(e,["parameters","language"],T);const S=u(n,["outputMimeType"]);e!==void 0&&S!=null&&h(e,["parameters","outputOptions","mimeType"],S);const C=u(n,["outputCompressionQuality"]);if(e!==void 0&&C!=null&&h(e,["parameters","outputOptions","compressionQuality"],C),u(n,["addWatermark"])!==void 0)throw new Error("addWatermark parameter is not supported in Gemini API.");if(u(n,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const A=u(n,["imageSize"]);if(e!==void 0&&A!=null&&h(e,["parameters","sampleImageSize"],A),u(n,["enhancePrompt"])!==void 0)throw new Error("enhancePrompt parameter is not supported in Gemini API.");return r}function $w(n,e,i){const r={},a=u(n,["outputGcsUri"]);e!==void 0&&a!=null&&h(e,["parameters","storageUri"],a);const c=u(n,["negativePrompt"]);e!==void 0&&c!=null&&h(e,["parameters","negativePrompt"],c);const g=u(n,["numberOfImages"]);e!==void 0&&g!=null&&h(e,["parameters","sampleCount"],g);const m=u(n,["aspectRatio"]);e!==void 0&&m!=null&&h(e,["parameters","aspectRatio"],m);const y=u(n,["guidanceScale"]);e!==void 0&&y!=null&&h(e,["parameters","guidanceScale"],y);const f=u(n,["seed"]);e!==void 0&&f!=null&&h(e,["parameters","seed"],f);const v=u(n,["safetyFilterLevel"]);e!==void 0&&v!=null&&h(e,["parameters","safetySetting"],v);const T=u(n,["personGeneration"]);e!==void 0&&T!=null&&h(e,["parameters","personGeneration"],T);const S=u(n,["includeSafetyAttributes"]);e!==void 0&&S!=null&&h(e,["parameters","includeSafetyAttributes"],S);const C=u(n,["includeRaiReason"]);e!==void 0&&C!=null&&h(e,["parameters","includeRaiReason"],C);const A=u(n,["language"]);e!==void 0&&A!=null&&h(e,["parameters","language"],A);const M=u(n,["outputMimeType"]);e!==void 0&&M!=null&&h(e,["parameters","outputOptions","mimeType"],M);const x=u(n,["outputCompressionQuality"]);e!==void 0&&x!=null&&h(e,["parameters","outputOptions","compressionQuality"],x);const U=u(n,["addWatermark"]);e!==void 0&&U!=null&&h(e,["parameters","addWatermark"],U);const Y=u(n,["labels"]);e!==void 0&&Y!=null&&h(e,["labels"],Y);const P=u(n,["imageSize"]);e!==void 0&&P!=null&&h(e,["parameters","sampleImageSize"],P);const J=u(n,["enhancePrompt"]);return e!==void 0&&J!=null&&h(e,["parameters","enhancePrompt"],J),r}function jw(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["prompt"]);c!=null&&h(r,["instances[0]","prompt"],c);const g=u(e,["config"]);return g!=null&&Zw(g,r),r}function tx(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["prompt"]);c!=null&&h(r,["instances[0]","prompt"],c);const g=u(e,["config"]);return g!=null&&$w(g,r),r}function ex(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["predictions"]);if(a!=null){let g=a;Array.isArray(g)&&(g=g.map(m=>dx(m))),h(i,["generatedImages"],g)}const c=u(n,["positivePromptSafetyAttributes"]);return c!=null&&h(i,["positivePromptSafetyAttributes"],Ty(c)),i}function nx(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["predictions"]);if(a!=null){let g=a;Array.isArray(g)&&(g=g.map(m=>ia(m))),h(i,["generatedImages"],g)}const c=u(n,["positivePromptSafetyAttributes"]);return c!=null&&h(i,["positivePromptSafetyAttributes"],Sy(c)),i}function ox(n,e,i){const r={},a=u(n,["numberOfVideos"]);if(e!==void 0&&a!=null&&h(e,["parameters","sampleCount"],a),u(n,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(u(n,["fps"])!==void 0)throw new Error("fps parameter is not supported in Gemini API.");const c=u(n,["durationSeconds"]);if(e!==void 0&&c!=null&&h(e,["parameters","durationSeconds"],c),u(n,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const g=u(n,["aspectRatio"]);e!==void 0&&g!=null&&h(e,["parameters","aspectRatio"],g);const m=u(n,["resolution"]);e!==void 0&&m!=null&&h(e,["parameters","resolution"],m);const y=u(n,["personGeneration"]);if(e!==void 0&&y!=null&&h(e,["parameters","personGeneration"],y),u(n,["pubsubTopic"])!==void 0)throw new Error("pubsubTopic parameter is not supported in Gemini API.");const f=u(n,["negativePrompt"]);e!==void 0&&f!=null&&h(e,["parameters","negativePrompt"],f);const v=u(n,["enhancePrompt"]);if(e!==void 0&&v!=null&&h(e,["parameters","enhancePrompt"],v),u(n,["generateAudio"])!==void 0)throw new Error("generateAudio parameter is not supported in Gemini API.");const T=u(n,["lastFrame"]);e!==void 0&&T!=null&&h(e,["instances[0]","lastFrame"],sa(T));const S=u(n,["referenceImages"]);if(e!==void 0&&S!=null){let C=S;Array.isArray(C)&&(C=C.map(A=>ab(A))),h(e,["instances[0]","referenceImages"],C)}if(u(n,["mask"])!==void 0)throw new Error("mask parameter is not supported in Gemini API.");if(u(n,["compressionQuality"])!==void 0)throw new Error("compressionQuality parameter is not supported in Gemini API.");return r}function ix(n,e,i){const r={},a=u(n,["numberOfVideos"]);e!==void 0&&a!=null&&h(e,["parameters","sampleCount"],a);const c=u(n,["outputGcsUri"]);e!==void 0&&c!=null&&h(e,["parameters","storageUri"],c);const g=u(n,["fps"]);e!==void 0&&g!=null&&h(e,["parameters","fps"],g);const m=u(n,["durationSeconds"]);e!==void 0&&m!=null&&h(e,["parameters","durationSeconds"],m);const y=u(n,["seed"]);e!==void 0&&y!=null&&h(e,["parameters","seed"],y);const f=u(n,["aspectRatio"]);e!==void 0&&f!=null&&h(e,["parameters","aspectRatio"],f);const v=u(n,["resolution"]);e!==void 0&&v!=null&&h(e,["parameters","resolution"],v);const T=u(n,["personGeneration"]);e!==void 0&&T!=null&&h(e,["parameters","personGeneration"],T);const S=u(n,["pubsubTopic"]);e!==void 0&&S!=null&&h(e,["parameters","pubsubTopic"],S);const C=u(n,["negativePrompt"]);e!==void 0&&C!=null&&h(e,["parameters","negativePrompt"],C);const A=u(n,["enhancePrompt"]);e!==void 0&&A!=null&&h(e,["parameters","enhancePrompt"],A);const M=u(n,["generateAudio"]);e!==void 0&&M!=null&&h(e,["parameters","generateAudio"],M);const x=u(n,["lastFrame"]);e!==void 0&&x!=null&&h(e,["instances[0]","lastFrame"],Ke(x));const U=u(n,["referenceImages"]);if(e!==void 0&&U!=null){let J=U;Array.isArray(J)&&(J=J.map(Q=>lb(Q))),h(e,["instances[0]","referenceImages"],J)}const Y=u(n,["mask"]);e!==void 0&&Y!=null&&h(e,["instances[0]","mask"],rb(Y));const P=u(n,["compressionQuality"]);return e!==void 0&&P!=null&&h(e,["parameters","compressionQuality"],P),r}function sx(n,e){const i={},r=u(n,["name"]);r!=null&&h(i,["name"],r);const a=u(n,["metadata"]);a!=null&&h(i,["metadata"],a);const c=u(n,["done"]);c!=null&&h(i,["done"],c);const g=u(n,["error"]);g!=null&&h(i,["error"],g);const m=u(n,["response","generateVideoResponse"]);return m!=null&&h(i,["response"],ux(m)),i}function rx(n,e){const i={},r=u(n,["name"]);r!=null&&h(i,["name"],r);const a=u(n,["metadata"]);a!=null&&h(i,["metadata"],a);const c=u(n,["done"]);c!=null&&h(i,["done"],c);const g=u(n,["error"]);g!=null&&h(i,["error"],g);const m=u(n,["response"]);return m!=null&&h(i,["response"],cx(m)),i}function ax(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["prompt"]);c!=null&&h(r,["instances[0]","prompt"],c);const g=u(e,["image"]);g!=null&&h(r,["instances[0]","image"],sa(g));const m=u(e,["video"]);m!=null&&h(r,["instances[0]","video"],Ey(m));const y=u(e,["source"]);y!=null&&hx(y,r);const f=u(e,["config"]);return f!=null&&ox(f,r),r}function lx(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["prompt"]);c!=null&&h(r,["instances[0]","prompt"],c);const g=u(e,["image"]);g!=null&&h(r,["instances[0]","image"],Ke(g));const m=u(e,["video"]);m!=null&&h(r,["instances[0]","video"],Cy(m));const y=u(e,["source"]);y!=null&&gx(y,r);const f=u(e,["config"]);return f!=null&&ix(f,r),r}function ux(n,e){const i={},r=u(n,["generatedSamples"]);if(r!=null){let g=r;Array.isArray(g)&&(g=g.map(m=>mx(m))),h(i,["generatedVideos"],g)}const a=u(n,["raiMediaFilteredCount"]);a!=null&&h(i,["raiMediaFilteredCount"],a);const c=u(n,["raiMediaFilteredReasons"]);return c!=null&&h(i,["raiMediaFilteredReasons"],c),i}function cx(n,e){const i={},r=u(n,["videos"]);if(r!=null){let g=r;Array.isArray(g)&&(g=g.map(m=>px(m))),h(i,["generatedVideos"],g)}const a=u(n,["raiMediaFilteredCount"]);a!=null&&h(i,["raiMediaFilteredCount"],a);const c=u(n,["raiMediaFilteredReasons"]);return c!=null&&h(i,["raiMediaFilteredReasons"],c),i}function hx(n,e,i){const r={},a=u(n,["prompt"]);e!==void 0&&a!=null&&h(e,["instances[0]","prompt"],a);const c=u(n,["image"]);e!==void 0&&c!=null&&h(e,["instances[0]","image"],sa(c));const g=u(n,["video"]);return e!==void 0&&g!=null&&h(e,["instances[0]","video"],Ey(g)),r}function gx(n,e,i){const r={},a=u(n,["prompt"]);e!==void 0&&a!=null&&h(e,["instances[0]","prompt"],a);const c=u(n,["image"]);e!==void 0&&c!=null&&h(e,["instances[0]","image"],Ke(c));const g=u(n,["video"]);return e!==void 0&&g!=null&&h(e,["instances[0]","video"],Cy(g)),r}function dx(n,e){const i={},r=u(n,["_self"]);r!=null&&h(i,["image"],Ax(r));const a=u(n,["raiFilteredReason"]);a!=null&&h(i,["raiFilteredReason"],a);const c=u(n,["_self"]);return c!=null&&h(i,["safetyAttributes"],Ty(c)),i}function ia(n,e){const i={},r=u(n,["_self"]);r!=null&&h(i,["image"],vy(r));const a=u(n,["raiFilteredReason"]);a!=null&&h(i,["raiFilteredReason"],a);const c=u(n,["_self"]);c!=null&&h(i,["safetyAttributes"],Sy(c));const g=u(n,["prompt"]);return g!=null&&h(i,["enhancedPrompt"],g),i}function fx(n,e){const i={},r=u(n,["_self"]);r!=null&&h(i,["mask"],vy(r));const a=u(n,["labels"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(i,["labels"],c)}return i}function mx(n,e){const i={},r=u(n,["video"]);return r!=null&&h(i,["video"],ib(r)),i}function px(n,e){const i={},r=u(n,["_self"]);return r!=null&&h(i,["video"],sb(r)),i}function yx(n,e){const i={},r=u(n,["modelSelectionConfig"]);r!=null&&h(i,["modelConfig"],r);const a=u(n,["responseJsonSchema"]);a!=null&&h(i,["responseJsonSchema"],a);const c=u(n,["audioTimestamp"]);c!=null&&h(i,["audioTimestamp"],c);const g=u(n,["candidateCount"]);g!=null&&h(i,["candidateCount"],g);const m=u(n,["enableAffectiveDialog"]);m!=null&&h(i,["enableAffectiveDialog"],m);const y=u(n,["frequencyPenalty"]);y!=null&&h(i,["frequencyPenalty"],y);const f=u(n,["logprobs"]);f!=null&&h(i,["logprobs"],f);const v=u(n,["maxOutputTokens"]);v!=null&&h(i,["maxOutputTokens"],v);const T=u(n,["mediaResolution"]);T!=null&&h(i,["mediaResolution"],T);const S=u(n,["presencePenalty"]);S!=null&&h(i,["presencePenalty"],S);const C=u(n,["responseLogprobs"]);C!=null&&h(i,["responseLogprobs"],C);const A=u(n,["responseMimeType"]);A!=null&&h(i,["responseMimeType"],A);const M=u(n,["responseModalities"]);M!=null&&h(i,["responseModalities"],M);const x=u(n,["responseSchema"]);x!=null&&h(i,["responseSchema"],x);const U=u(n,["routingConfig"]);U!=null&&h(i,["routingConfig"],U);const Y=u(n,["seed"]);Y!=null&&h(i,["seed"],Y);const P=u(n,["speechConfig"]);P!=null&&h(i,["speechConfig"],P);const J=u(n,["stopSequences"]);J!=null&&h(i,["stopSequences"],J);const Q=u(n,["temperature"]);Q!=null&&h(i,["temperature"],Q);const V=u(n,["thinkingConfig"]);V!=null&&h(i,["thinkingConfig"],V);const K=u(n,["topK"]);K!=null&&h(i,["topK"],K);const rt=u(n,["topP"]);if(rt!=null&&h(i,["topP"],rt),u(n,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return i}function vx(n,e,i){const r={},a=u(e,["model"]);return a!=null&&h(r,["_url","name"],At(n,a)),r}function Tx(n,e,i){const r={},a=u(e,["model"]);return a!=null&&h(r,["_url","name"],At(n,a)),r}function Sx(n,e){const i={},r=u(n,["authConfig"]);r!=null&&h(i,["authConfig"],pw(r));const a=u(n,["enableWidget"]);return a!=null&&h(i,["enableWidget"],a),i}function _x(n,e){const i={},r=u(n,["searchTypes"]);if(r!=null&&h(i,["searchTypes"],r),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const a=u(n,["timeRangeFilter"]);return a!=null&&h(i,["timeRangeFilter"],a),i}function Ex(n,e){const i={},r=u(n,["aspectRatio"]);r!=null&&h(i,["aspectRatio"],r);const a=u(n,["imageSize"]);if(a!=null&&h(i,["imageSize"],a),u(n,["personGeneration"])!==void 0)throw new Error("personGeneration parameter is not supported in Gemini API.");if(u(n,["prominentPeople"])!==void 0)throw new Error("prominentPeople parameter is not supported in Gemini API.");if(u(n,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(u(n,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");if(u(n,["imageOutputOptions"])!==void 0)throw new Error("imageOutputOptions parameter is not supported in Gemini API.");return i}function Cx(n,e){const i={},r=u(n,["aspectRatio"]);r!=null&&h(i,["aspectRatio"],r);const a=u(n,["imageSize"]);a!=null&&h(i,["imageSize"],a);const c=u(n,["personGeneration"]);c!=null&&h(i,["personGeneration"],c);const g=u(n,["prominentPeople"]);g!=null&&h(i,["prominentPeople"],g);const m=u(n,["outputMimeType"]);m!=null&&h(i,["imageOutputOptions","mimeType"],m);const y=u(n,["outputCompressionQuality"]);y!=null&&h(i,["imageOutputOptions","compressionQuality"],y);const f=u(n,["imageOutputOptions"]);return f!=null&&h(i,["imageOutputOptions"],f),i}function Ax(n,e){const i={},r=u(n,["bytesBase64Encoded"]);r!=null&&h(i,["imageBytes"],$n(r));const a=u(n,["mimeType"]);return a!=null&&h(i,["mimeType"],a),i}function vy(n,e){const i={},r=u(n,["gcsUri"]);r!=null&&h(i,["gcsUri"],r);const a=u(n,["bytesBase64Encoded"]);a!=null&&h(i,["imageBytes"],$n(a));const c=u(n,["mimeType"]);return c!=null&&h(i,["mimeType"],c),i}function sa(n,e){const i={};if(u(n,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");const r=u(n,["imageBytes"]);r!=null&&h(i,["bytesBase64Encoded"],$n(r));const a=u(n,["mimeType"]);return a!=null&&h(i,["mimeType"],a),i}function Ke(n,e){const i={},r=u(n,["gcsUri"]);r!=null&&h(i,["gcsUri"],r);const a=u(n,["imageBytes"]);a!=null&&h(i,["bytesBase64Encoded"],$n(a));const c=u(n,["mimeType"]);return c!=null&&h(i,["mimeType"],c),i}function wx(n,e,i,r){const a={},c=u(e,["pageSize"]);i!==void 0&&c!=null&&h(i,["_query","pageSize"],c);const g=u(e,["pageToken"]);i!==void 0&&g!=null&&h(i,["_query","pageToken"],g);const m=u(e,["filter"]);i!==void 0&&m!=null&&h(i,["_query","filter"],m);const y=u(e,["queryBase"]);return i!==void 0&&y!=null&&h(i,["_url","models_url"],hy(n,y)),a}function xx(n,e,i,r){const a={},c=u(e,["pageSize"]);i!==void 0&&c!=null&&h(i,["_query","pageSize"],c);const g=u(e,["pageToken"]);i!==void 0&&g!=null&&h(i,["_query","pageToken"],g);const m=u(e,["filter"]);i!==void 0&&m!=null&&h(i,["_query","filter"],m);const y=u(e,["queryBase"]);return i!==void 0&&y!=null&&h(i,["_url","models_url"],hy(n,y)),a}function bx(n,e,i){const r={},a=u(e,["config"]);return a!=null&&wx(n,a,r),r}function Rx(n,e,i){const r={},a=u(e,["config"]);return a!=null&&xx(n,a,r),r}function Mx(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["nextPageToken"]);a!=null&&h(i,["nextPageToken"],a);const c=u(n,["_self"]);if(c!=null){let g=gy(c);Array.isArray(g)&&(g=g.map(m=>$u(m))),h(i,["models"],g)}return i}function Nx(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["nextPageToken"]);a!=null&&h(i,["nextPageToken"],a);const c=u(n,["_self"]);if(c!=null){let g=gy(c);Array.isArray(g)&&(g=g.map(m=>ju(m))),h(i,["models"],g)}return i}function Ix(n,e){const i={},r=u(n,["maskMode"]);r!=null&&h(i,["maskMode"],r);const a=u(n,["segmentationClasses"]);a!=null&&h(i,["maskClasses"],a);const c=u(n,["maskDilation"]);return c!=null&&h(i,["dilation"],c),i}function $u(n,e){const i={},r=u(n,["name"]);r!=null&&h(i,["name"],r);const a=u(n,["displayName"]);a!=null&&h(i,["displayName"],a);const c=u(n,["description"]);c!=null&&h(i,["description"],c);const g=u(n,["version"]);g!=null&&h(i,["version"],g);const m=u(n,["_self"]);m!=null&&h(i,["tunedModelInfo"],Xx(m));const y=u(n,["inputTokenLimit"]);y!=null&&h(i,["inputTokenLimit"],y);const f=u(n,["outputTokenLimit"]);f!=null&&h(i,["outputTokenLimit"],f);const v=u(n,["supportedGenerationMethods"]);v!=null&&h(i,["supportedActions"],v);const T=u(n,["temperature"]);T!=null&&h(i,["temperature"],T);const S=u(n,["maxTemperature"]);S!=null&&h(i,["maxTemperature"],S);const C=u(n,["topP"]);C!=null&&h(i,["topP"],C);const A=u(n,["topK"]);A!=null&&h(i,["topK"],A);const M=u(n,["thinking"]);return M!=null&&h(i,["thinking"],M),i}function ju(n,e){const i={},r=u(n,["name"]);r!=null&&h(i,["name"],r);const a=u(n,["displayName"]);a!=null&&h(i,["displayName"],a);const c=u(n,["description"]);c!=null&&h(i,["description"],c);const g=u(n,["versionId"]);g!=null&&h(i,["version"],g);const m=u(n,["deployedModels"]);if(m!=null){let S=m;Array.isArray(S)&&(S=S.map(C=>Fw(C))),h(i,["endpoints"],S)}const y=u(n,["labels"]);y!=null&&h(i,["labels"],y);const f=u(n,["_self"]);f!=null&&h(i,["tunedModelInfo"],Qx(f));const v=u(n,["defaultCheckpointId"]);v!=null&&h(i,["defaultCheckpointId"],v);const T=u(n,["checkpoints"]);if(T!=null){let S=T;Array.isArray(S)&&(S=S.map(C=>C)),h(i,["checkpoints"],S)}return i}function Dx(n,e){const i={},r=u(n,["mediaResolution"]);r!=null&&h(i,["mediaResolution"],r);const a=u(n,["codeExecutionResult"]);a!=null&&h(i,["codeExecutionResult"],a);const c=u(n,["executableCode"]);c!=null&&h(i,["executableCode"],c);const g=u(n,["fileData"]);g!=null&&h(i,["fileData"],Yw(g));const m=u(n,["functionCall"]);m!=null&&h(i,["functionCall"],Ww(m));const y=u(n,["functionResponse"]);y!=null&&h(i,["functionResponse"],y);const f=u(n,["inlineData"]);f!=null&&h(i,["inlineData"],yw(f));const v=u(n,["text"]);v!=null&&h(i,["text"],v);const T=u(n,["thought"]);T!=null&&h(i,["thought"],T);const S=u(n,["thoughtSignature"]);S!=null&&h(i,["thoughtSignature"],S);const C=u(n,["videoMetadata"]);C!=null&&h(i,["videoMetadata"],C);const A=u(n,["toolCall"]);A!=null&&h(i,["toolCall"],A);const M=u(n,["toolResponse"]);return M!=null&&h(i,["toolResponse"],M),i}function kx(n,e){const i={},r=u(n,["mediaResolution"]);r!=null&&h(i,["mediaResolution"],r);const a=u(n,["codeExecutionResult"]);a!=null&&h(i,["codeExecutionResult"],a);const c=u(n,["executableCode"]);c!=null&&h(i,["executableCode"],c);const g=u(n,["fileData"]);g!=null&&h(i,["fileData"],g);const m=u(n,["functionCall"]);m!=null&&h(i,["functionCall"],m);const y=u(n,["functionResponse"]);y!=null&&h(i,["functionResponse"],y);const f=u(n,["inlineData"]);f!=null&&h(i,["inlineData"],f);const v=u(n,["text"]);v!=null&&h(i,["text"],v);const T=u(n,["thought"]);T!=null&&h(i,["thought"],T);const S=u(n,["thoughtSignature"]);S!=null&&h(i,["thoughtSignature"],S);const C=u(n,["videoMetadata"]);if(C!=null&&h(i,["videoMetadata"],C),u(n,["toolCall"])!==void 0)throw new Error("toolCall parameter is not supported in Vertex AI.");if(u(n,["toolResponse"])!==void 0)throw new Error("toolResponse parameter is not supported in Vertex AI.");return i}function Ux(n,e){const i={},r=u(n,["productImage"]);return r!=null&&h(i,["image"],Ke(r)),i}function zx(n,e,i){const r={},a=u(n,["numberOfImages"]);e!==void 0&&a!=null&&h(e,["parameters","sampleCount"],a);const c=u(n,["baseSteps"]);e!==void 0&&c!=null&&h(e,["parameters","baseSteps"],c);const g=u(n,["outputGcsUri"]);e!==void 0&&g!=null&&h(e,["parameters","storageUri"],g);const m=u(n,["seed"]);e!==void 0&&m!=null&&h(e,["parameters","seed"],m);const y=u(n,["safetyFilterLevel"]);e!==void 0&&y!=null&&h(e,["parameters","safetySetting"],y);const f=u(n,["personGeneration"]);e!==void 0&&f!=null&&h(e,["parameters","personGeneration"],f);const v=u(n,["addWatermark"]);e!==void 0&&v!=null&&h(e,["parameters","addWatermark"],v);const T=u(n,["outputMimeType"]);e!==void 0&&T!=null&&h(e,["parameters","outputOptions","mimeType"],T);const S=u(n,["outputCompressionQuality"]);e!==void 0&&S!=null&&h(e,["parameters","outputOptions","compressionQuality"],S);const C=u(n,["enhancePrompt"]);e!==void 0&&C!=null&&h(e,["parameters","enhancePrompt"],C);const A=u(n,["labels"]);return e!==void 0&&A!=null&&h(e,["labels"],A),r}function Lx(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["source"]);c!=null&&Bx(c,r);const g=u(e,["config"]);return g!=null&&zx(g,r),r}function Hx(n,e){const i={},r=u(n,["predictions"]);if(r!=null){let a=r;Array.isArray(a)&&(a=a.map(c=>ia(c))),h(i,["generatedImages"],a)}return i}function Bx(n,e,i){const r={},a=u(n,["prompt"]);e!==void 0&&a!=null&&h(e,["instances[0]","prompt"],a);const c=u(n,["personImage"]);e!==void 0&&c!=null&&h(e,["instances[0]","personImage","image"],Ke(c));const g=u(n,["productImages"]);if(e!==void 0&&g!=null){let m=g;Array.isArray(m)&&(m=m.map(y=>Ux(y))),h(e,["instances[0]","productImages"],m)}return r}function qx(n,e){const i={},r=u(n,["referenceImage"]);r!=null&&h(i,["referenceImage"],Ke(r));const a=u(n,["referenceId"]);a!=null&&h(i,["referenceId"],a);const c=u(n,["referenceType"]);c!=null&&h(i,["referenceType"],c);const g=u(n,["maskImageConfig"]);g!=null&&h(i,["maskImageConfig"],Ix(g));const m=u(n,["controlImageConfig"]);m!=null&&h(i,["controlImageConfig"],Aw(m));const y=u(n,["styleImageConfig"]);y!=null&&h(i,["styleImageConfig"],y);const f=u(n,["subjectImageConfig"]);return f!=null&&h(i,["subjectImageConfig"],f),i}function Ty(n,e){const i={},r=u(n,["safetyAttributes","categories"]);r!=null&&h(i,["categories"],r);const a=u(n,["safetyAttributes","scores"]);a!=null&&h(i,["scores"],a);const c=u(n,["contentType"]);return c!=null&&h(i,["contentType"],c),i}function Sy(n,e){const i={},r=u(n,["safetyAttributes","categories"]);r!=null&&h(i,["categories"],r);const a=u(n,["safetyAttributes","scores"]);a!=null&&h(i,["scores"],a);const c=u(n,["contentType"]);return c!=null&&h(i,["contentType"],c),i}function Px(n,e){const i={},r=u(n,["category"]);if(r!=null&&h(i,["category"],r),u(n,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const a=u(n,["threshold"]);return a!=null&&h(i,["threshold"],a),i}function Gx(n,e){const i={},r=u(n,["image"]);return r!=null&&h(i,["image"],Ke(r)),i}function Vx(n,e,i){const r={},a=u(n,["mode"]);e!==void 0&&a!=null&&h(e,["parameters","mode"],a);const c=u(n,["maxPredictions"]);e!==void 0&&c!=null&&h(e,["parameters","maxPredictions"],c);const g=u(n,["confidenceThreshold"]);e!==void 0&&g!=null&&h(e,["parameters","confidenceThreshold"],g);const m=u(n,["maskDilation"]);e!==void 0&&m!=null&&h(e,["parameters","maskDilation"],m);const y=u(n,["binaryColorThreshold"]);e!==void 0&&y!=null&&h(e,["parameters","binaryColorThreshold"],y);const f=u(n,["labels"]);return e!==void 0&&f!=null&&h(e,["labels"],f),r}function Ox(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["source"]);c!=null&&Yx(c,r);const g=u(e,["config"]);return g!=null&&Vx(g,r),r}function Fx(n,e){const i={},r=u(n,["predictions"]);if(r!=null){let a=r;Array.isArray(a)&&(a=a.map(c=>fx(c))),h(i,["generatedMasks"],a)}return i}function Yx(n,e,i){const r={},a=u(n,["prompt"]);e!==void 0&&a!=null&&h(e,["instances[0]","prompt"],a);const c=u(n,["image"]);e!==void 0&&c!=null&&h(e,["instances[0]","image"],Ke(c));const g=u(n,["scribbleImage"]);return e!==void 0&&g!=null&&h(e,["instances[0]","scribble"],Gx(g)),r}function Wx(n,e){const i={},r=u(n,["retrievalConfig"]);r!=null&&h(i,["retrievalConfig"],r);const a=u(n,["functionCallingConfig"]);a!=null&&h(i,["functionCallingConfig"],Jw(a));const c=u(n,["includeServerSideToolInvocations"]);return c!=null&&h(i,["includeServerSideToolInvocations"],c),i}function Jx(n,e){const i={},r=u(n,["retrievalConfig"]);r!=null&&h(i,["retrievalConfig"],r);const a=u(n,["functionCallingConfig"]);if(a!=null&&h(i,["functionCallingConfig"],a),u(n,["includeServerSideToolInvocations"])!==void 0)throw new Error("includeServerSideToolInvocations parameter is not supported in Vertex AI.");return i}function Kx(n,e){const i={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const r=u(n,["computerUse"]);r!=null&&h(i,["computerUse"],r);const a=u(n,["fileSearch"]);a!=null&&h(i,["fileSearch"],a);const c=u(n,["googleSearch"]);c!=null&&h(i,["googleSearch"],_x(c));const g=u(n,["googleMaps"]);g!=null&&h(i,["googleMaps"],Sx(g));const m=u(n,["codeExecution"]);if(m!=null&&h(i,["codeExecution"],m),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const y=u(n,["functionDeclarations"]);if(y!=null){let S=y;Array.isArray(S)&&(S=S.map(C=>C)),h(i,["functionDeclarations"],S)}const f=u(n,["googleSearchRetrieval"]);if(f!=null&&h(i,["googleSearchRetrieval"],f),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const v=u(n,["urlContext"]);v!=null&&h(i,["urlContext"],v);const T=u(n,["mcpServers"]);if(T!=null){let S=T;Array.isArray(S)&&(S=S.map(C=>C)),h(i,["mcpServers"],S)}return i}function _y(n,e){const i={},r=u(n,["retrieval"]);r!=null&&h(i,["retrieval"],r);const a=u(n,["computerUse"]);if(a!=null&&h(i,["computerUse"],a),u(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const c=u(n,["googleSearch"]);c!=null&&h(i,["googleSearch"],c);const g=u(n,["googleMaps"]);g!=null&&h(i,["googleMaps"],g);const m=u(n,["codeExecution"]);m!=null&&h(i,["codeExecution"],m);const y=u(n,["enterpriseWebSearch"]);y!=null&&h(i,["enterpriseWebSearch"],y);const f=u(n,["functionDeclarations"]);if(f!=null){let C=f;Array.isArray(C)&&(C=C.map(A=>Kw(A))),h(i,["functionDeclarations"],C)}const v=u(n,["googleSearchRetrieval"]);v!=null&&h(i,["googleSearchRetrieval"],v);const T=u(n,["parallelAiSearch"]);T!=null&&h(i,["parallelAiSearch"],T);const S=u(n,["urlContext"]);if(S!=null&&h(i,["urlContext"],S),u(n,["mcpServers"])!==void 0)throw new Error("mcpServers parameter is not supported in Vertex AI.");return i}function Xx(n,e){const i={},r=u(n,["baseModel"]);r!=null&&h(i,["baseModel"],r);const a=u(n,["createTime"]);a!=null&&h(i,["createTime"],a);const c=u(n,["updateTime"]);return c!=null&&h(i,["updateTime"],c),i}function Qx(n,e){const i={},r=u(n,["labels","google-vertex-llm-tuning-base-model-id"]);r!=null&&h(i,["baseModel"],r);const a=u(n,["createTime"]);a!=null&&h(i,["createTime"],a);const c=u(n,["updateTime"]);return c!=null&&h(i,["updateTime"],c),i}function Zx(n,e,i){const r={},a=u(n,["displayName"]);e!==void 0&&a!=null&&h(e,["displayName"],a);const c=u(n,["description"]);e!==void 0&&c!=null&&h(e,["description"],c);const g=u(n,["defaultCheckpointId"]);return e!==void 0&&g!=null&&h(e,["defaultCheckpointId"],g),r}function $x(n,e,i){const r={},a=u(n,["displayName"]);e!==void 0&&a!=null&&h(e,["displayName"],a);const c=u(n,["description"]);e!==void 0&&c!=null&&h(e,["description"],c);const g=u(n,["defaultCheckpointId"]);return e!==void 0&&g!=null&&h(e,["defaultCheckpointId"],g),r}function jx(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","name"],At(n,a));const c=u(e,["config"]);return c!=null&&Zx(c,r),r}function tb(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["config"]);return c!=null&&$x(c,r),r}function eb(n,e,i){const r={},a=u(n,["outputGcsUri"]);e!==void 0&&a!=null&&h(e,["parameters","storageUri"],a);const c=u(n,["safetyFilterLevel"]);e!==void 0&&c!=null&&h(e,["parameters","safetySetting"],c);const g=u(n,["personGeneration"]);e!==void 0&&g!=null&&h(e,["parameters","personGeneration"],g);const m=u(n,["includeRaiReason"]);e!==void 0&&m!=null&&h(e,["parameters","includeRaiReason"],m);const y=u(n,["outputMimeType"]);e!==void 0&&y!=null&&h(e,["parameters","outputOptions","mimeType"],y);const f=u(n,["outputCompressionQuality"]);e!==void 0&&f!=null&&h(e,["parameters","outputOptions","compressionQuality"],f);const v=u(n,["enhanceInputImage"]);e!==void 0&&v!=null&&h(e,["parameters","upscaleConfig","enhanceInputImage"],v);const T=u(n,["imagePreservationFactor"]);e!==void 0&&T!=null&&h(e,["parameters","upscaleConfig","imagePreservationFactor"],T);const S=u(n,["labels"]);e!==void 0&&S!=null&&h(e,["labels"],S);const C=u(n,["numberOfImages"]);e!==void 0&&C!=null&&h(e,["parameters","sampleCount"],C);const A=u(n,["mode"]);return e!==void 0&&A!=null&&h(e,["parameters","mode"],A),r}function nb(n,e,i){const r={},a=u(e,["model"]);a!=null&&h(r,["_url","model"],At(n,a));const c=u(e,["image"]);c!=null&&h(r,["instances[0]","image"],Ke(c));const g=u(e,["upscaleFactor"]);g!=null&&h(r,["parameters","upscaleConfig","upscaleFactor"],g);const m=u(e,["config"]);return m!=null&&eb(m,r),r}function ob(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["predictions"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>ia(g))),h(i,["generatedImages"],c)}return i}function ib(n,e){const i={},r=u(n,["uri"]);r!=null&&h(i,["uri"],r);const a=u(n,["encodedVideo"]);a!=null&&h(i,["videoBytes"],$n(a));const c=u(n,["encoding"]);return c!=null&&h(i,["mimeType"],c),i}function sb(n,e){const i={},r=u(n,["gcsUri"]);r!=null&&h(i,["uri"],r);const a=u(n,["bytesBase64Encoded"]);a!=null&&h(i,["videoBytes"],$n(a));const c=u(n,["mimeType"]);return c!=null&&h(i,["mimeType"],c),i}function rb(n,e){const i={},r=u(n,["image"]);r!=null&&h(i,["_self"],Ke(r));const a=u(n,["maskMode"]);return a!=null&&h(i,["maskMode"],a),i}function ab(n,e){const i={},r=u(n,["image"]);r!=null&&h(i,["image"],sa(r));const a=u(n,["referenceType"]);return a!=null&&h(i,["referenceType"],a),i}function lb(n,e){const i={},r=u(n,["image"]);r!=null&&h(i,["image"],Ke(r));const a=u(n,["referenceType"]);return a!=null&&h(i,["referenceType"],a),i}function Ey(n,e){const i={},r=u(n,["uri"]);r!=null&&h(i,["uri"],r);const a=u(n,["videoBytes"]);a!=null&&h(i,["encodedVideo"],$n(a));const c=u(n,["mimeType"]);return c!=null&&h(i,["encoding"],c),i}function Cy(n,e){const i={},r=u(n,["uri"]);r!=null&&h(i,["gcsUri"],r);const a=u(n,["videoBytes"]);a!=null&&h(i,["bytesBase64Encoded"],$n(a));const c=u(n,["mimeType"]);return c!=null&&h(i,["mimeType"],c),i}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ub(n,e){const i={},r=u(n,["displayName"]);return e!==void 0&&r!=null&&h(e,["displayName"],r),i}function cb(n){const e={},i=u(n,["config"]);return i!=null&&ub(i,e),e}function hb(n,e){const i={},r=u(n,["force"]);return e!==void 0&&r!=null&&h(e,["_query","force"],r),i}function gb(n){const e={},i=u(n,["name"]);i!=null&&h(e,["_url","name"],i);const r=u(n,["config"]);return r!=null&&hb(r,e),e}function db(n){const e={},i=u(n,["name"]);return i!=null&&h(e,["_url","name"],i),e}function fb(n,e){const i={},r=u(n,["customMetadata"]);if(e!==void 0&&r!=null){let c=r;Array.isArray(c)&&(c=c.map(g=>g)),h(e,["customMetadata"],c)}const a=u(n,["chunkingConfig"]);return e!==void 0&&a!=null&&h(e,["chunkingConfig"],a),i}function mb(n){const e={},i=u(n,["name"]);i!=null&&h(e,["name"],i);const r=u(n,["metadata"]);r!=null&&h(e,["metadata"],r);const a=u(n,["done"]);a!=null&&h(e,["done"],a);const c=u(n,["error"]);c!=null&&h(e,["error"],c);const g=u(n,["response"]);return g!=null&&h(e,["response"],yb(g)),e}function pb(n){const e={},i=u(n,["fileSearchStoreName"]);i!=null&&h(e,["_url","file_search_store_name"],i);const r=u(n,["fileName"]);r!=null&&h(e,["fileName"],r);const a=u(n,["config"]);return a!=null&&fb(a,e),e}function yb(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["parent"]);r!=null&&h(e,["parent"],r);const a=u(n,["documentName"]);return a!=null&&h(e,["documentName"],a),e}function vb(n,e){const i={},r=u(n,["pageSize"]);e!==void 0&&r!=null&&h(e,["_query","pageSize"],r);const a=u(n,["pageToken"]);return e!==void 0&&a!=null&&h(e,["_query","pageToken"],a),i}function Tb(n){const e={},i=u(n,["config"]);return i!=null&&vb(i,e),e}function Sb(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(e,["nextPageToken"],r);const a=u(n,["fileSearchStores"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(e,["fileSearchStores"],c)}return e}function Ay(n,e){const i={},r=u(n,["mimeType"]);e!==void 0&&r!=null&&h(e,["mimeType"],r);const a=u(n,["displayName"]);e!==void 0&&a!=null&&h(e,["displayName"],a);const c=u(n,["customMetadata"]);if(e!==void 0&&c!=null){let m=c;Array.isArray(m)&&(m=m.map(y=>y)),h(e,["customMetadata"],m)}const g=u(n,["chunkingConfig"]);return e!==void 0&&g!=null&&h(e,["chunkingConfig"],g),i}function _b(n){const e={},i=u(n,["fileSearchStoreName"]);i!=null&&h(e,["_url","file_search_store_name"],i);const r=u(n,["config"]);return r!=null&&Ay(r,e),e}function Eb(n){const e={},i=u(n,["sdkHttpResponse"]);return i!=null&&h(e,["sdkHttpResponse"],i),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Cb="Content-Type",Ab="X-Server-Timeout",wb="User-Agent",tc="x-goog-api-client",xb="1.46.0",bb=`google-genai-sdk/${xb}`,Rb="v1beta1",Mb="v1beta",Nb=5,Ib=[408,429,500,502,503,504];class Db{constructor(e){var i,r,a;this.clientOptions=Object.assign({},e),this.customBaseUrl=(i=e.httpOptions)===null||i===void 0?void 0:i.baseUrl,this.clientOptions.vertexai&&(this.clientOptions.project&&this.clientOptions.location?this.clientOptions.apiKey=void 0:this.clientOptions.apiKey&&(this.clientOptions.project=void 0,this.clientOptions.location=void 0));const c={};if(this.clientOptions.vertexai){if(!this.clientOptions.location&&!this.clientOptions.apiKey&&!this.customBaseUrl&&(this.clientOptions.location="global"),!(this.clientOptions.project&&this.clientOptions.location||this.clientOptions.apiKey)&&!this.customBaseUrl)throw new Error("Authentication is not set up. Please provide either a project and location, or an API key, or a custom base URL.");const m=e.project&&e.location||!!e.apiKey;this.customBaseUrl&&!m?(c.baseUrl=this.customBaseUrl,this.clientOptions.project=void 0,this.clientOptions.location=void 0):this.clientOptions.apiKey||this.clientOptions.location==="global"?c.baseUrl="https://aiplatform.googleapis.com/":this.clientOptions.project&&this.clientOptions.location&&(c.baseUrl=`https://${this.clientOptions.location}-aiplatform.googleapis.com/`),c.apiVersion=(r=this.clientOptions.apiVersion)!==null&&r!==void 0?r:Rb}else this.clientOptions.apiKey||console.warn("API key should be set when using the Gemini API."),c.apiVersion=(a=this.clientOptions.apiVersion)!==null&&a!==void 0?a:Mb,c.baseUrl="https://generativelanguage.googleapis.com/";c.headers=this.getDefaultHeaders(),this.clientOptions.httpOptions=c,e.httpOptions&&(this.clientOptions.httpOptions=this.patchHttpOptions(c,e.httpOptions))}isVertexAI(){var e;return(e=this.clientOptions.vertexai)!==null&&e!==void 0?e:!1}getProject(){return this.clientOptions.project}getLocation(){return this.clientOptions.location}getCustomBaseUrl(){return this.customBaseUrl}async getAuthHeaders(){const e=new Headers;return await this.clientOptions.auth.addAuthHeaders(e),e}getApiVersion(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.apiVersion!==void 0)return this.clientOptions.httpOptions.apiVersion;throw new Error("API version is not set.")}getBaseUrl(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.baseUrl!==void 0)return this.clientOptions.httpOptions.baseUrl;throw new Error("Base URL is not set.")}getRequestUrl(){return this.getRequestUrlInternal(this.clientOptions.httpOptions)}getHeaders(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.headers!==void 0)return this.clientOptions.httpOptions.headers;throw new Error("Headers are not set.")}getRequestUrlInternal(e){if(!e||e.baseUrl===void 0||e.apiVersion===void 0)throw new Error("HTTP options are not correctly set.");const r=[e.baseUrl.endsWith("/")?e.baseUrl.slice(0,-1):e.baseUrl];return e.apiVersion&&e.apiVersion!==""&&r.push(e.apiVersion),r.join("/")}getBaseResourcePath(){return`projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`}getApiKey(){return this.clientOptions.apiKey}getWebsocketBaseUrl(){const e=this.getBaseUrl(),i=new URL(e);return i.protocol=i.protocol=="http:"?"ws":"wss",i.toString()}setBaseUrl(e){if(this.clientOptions.httpOptions)this.clientOptions.httpOptions.baseUrl=e;else throw new Error("HTTP options are not correctly set.")}constructUrl(e,i,r){const a=[this.getRequestUrlInternal(i)];return r&&a.push(this.getBaseResourcePath()),e!==""&&a.push(e),new URL(`${a.join("/")}`)}shouldPrependVertexProjectPath(e,i){return!(i.baseUrl&&i.baseUrlResourceScope===Ku.COLLECTION||this.clientOptions.apiKey||!this.clientOptions.vertexai||e.path.startsWith("projects/")||e.httpMethod==="GET"&&e.path.startsWith("publishers/google/models"))}async request(e){let i=this.clientOptions.httpOptions;e.httpOptions&&(i=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const r=this.shouldPrependVertexProjectPath(e,i),a=this.constructUrl(e.path,i,r);if(e.queryParams)for(const[g,m]of Object.entries(e.queryParams))a.searchParams.append(g,String(m));let c={};if(e.httpMethod==="GET"){if(e.body&&e.body!=="{}")throw new Error("Request body should be empty for GET request, but got non empty request body")}else c.body=e.body;return c=await this.includeExtraHttpOptionsToRequestInit(c,i,a.toString(),e.abortSignal),this.unaryApiCall(a,c,e.httpMethod)}patchHttpOptions(e,i){const r=JSON.parse(JSON.stringify(e));for(const[a,c]of Object.entries(i))typeof c=="object"?r[a]=Object.assign(Object.assign({},r[a]),c):c!==void 0&&(r[a]=c);return r}async requestStream(e){let i=this.clientOptions.httpOptions;e.httpOptions&&(i=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const r=this.shouldPrependVertexProjectPath(e,i),a=this.constructUrl(e.path,i,r);(!a.searchParams.has("alt")||a.searchParams.get("alt")!=="sse")&&a.searchParams.set("alt","sse");let c={};return c.body=e.body,c=await this.includeExtraHttpOptionsToRequestInit(c,i,a.toString(),e.abortSignal),this.streamApiCall(a,c,e.httpMethod)}async includeExtraHttpOptionsToRequestInit(e,i,r,a){if(i&&i.timeout||a){const c=new AbortController,g=c.signal;if(i.timeout&&(i==null?void 0:i.timeout)>0){const m=setTimeout(()=>c.abort(),i.timeout);m&&typeof m.unref=="function"&&m.unref()}a&&a.addEventListener("abort",()=>{c.abort()}),e.signal=g}return i&&i.extraBody!==null&&kb(e,i.extraBody),e.headers=await this.getHeadersInternal(i,r),e}async unaryApiCall(e,i,r){return this.apiCall(e.toString(),Object.assign(Object.assign({},i),{method:r})).then(async a=>(await Ep(a),new Xu(a))).catch(a=>{throw a instanceof Error?a:new Error(JSON.stringify(a))})}async streamApiCall(e,i,r){return this.apiCall(e.toString(),Object.assign(Object.assign({},i),{method:r})).then(async a=>(await Ep(a),this.processStreamResponse(a))).catch(a=>{throw a instanceof Error?a:new Error(JSON.stringify(a))})}processStreamResponse(e){return Ye(this,arguments,function*(){var r;const a=(r=e==null?void 0:e.body)===null||r===void 0?void 0:r.getReader(),c=new TextDecoder("utf-8");if(!a)throw new Error("Response body is empty");try{let g="";const m="data:",y=[`

`,"\r\r",`\r
\r
`];for(;;){const{done:f,value:v}=yield lt(a.read());if(f){if(g.trim().length>0)throw new Error("Incomplete JSON segment at the end");break}const T=c.decode(v,{stream:!0});try{const A=JSON.parse(T);if("error"in A){const M=JSON.parse(JSON.stringify(A.error)),x=M.status,U=M.code,Y=`got status: ${x}. ${JSON.stringify(A)}`;if(U>=400&&U<600)throw new oa({message:Y,status:U})}}catch(A){if(A.name==="ApiError")throw A}g+=T;let S=-1,C=0;for(;;){S=-1,C=0;for(const x of y){const U=g.indexOf(x);U!==-1&&(S===-1||U<S)&&(S=U,C=x.length)}if(S===-1)break;const A=g.substring(0,S);g=g.substring(S+C);const M=A.trim();if(M.startsWith(m)){const x=M.substring(m.length).trim();try{const U=new Response(x,{headers:e==null?void 0:e.headers,status:e==null?void 0:e.status,statusText:e==null?void 0:e.statusText});yield yield lt(new Xu(U))}catch(U){throw new Error(`exception parsing stream chunk ${x}. ${U}`)}}}}}finally{a.releaseLock()}})}async apiCall(e,i){var r;if(!this.clientOptions.httpOptions||!this.clientOptions.httpOptions.retryOptions)return fetch(e,i);const a=this.clientOptions.httpOptions.retryOptions;return hE(async()=>{const g=await fetch(e,i);if(g.ok)return g;throw Ib.includes(g.status)?new Error(`Retryable HTTP Error: ${g.statusText}`):new ny.AbortError(`Non-retryable exception ${g.statusText} sending request`)},{retries:((r=a.attempts)!==null&&r!==void 0?r:Nb)-1})}getDefaultHeaders(){const e={},i=bb+" "+this.clientOptions.userAgentExtra;return e[wb]=i,e[tc]=i,e[Cb]="application/json",e}async getHeadersInternal(e,i){const r=new Headers;if(e&&e.headers){for(const[a,c]of Object.entries(e.headers))r.append(a,c);e.timeout&&e.timeout>0&&r.append(Ab,String(Math.ceil(e.timeout/1e3)))}return await this.clientOptions.auth.addAuthHeaders(r,i),r}getFileName(e){var i;let r="";return typeof e=="string"&&(r=e.replace(/[/\\]+$/,""),r=(i=r.split(/[/\\]/).pop())!==null&&i!==void 0?i:""),r}async uploadFile(e,i){var r;const a={};i!=null&&(a.mimeType=i.mimeType,a.name=i.name,a.displayName=i.displayName),a.name&&!a.name.startsWith("files/")&&(a.name=`files/${a.name}`);const c=this.clientOptions.uploader,g=await c.stat(e);a.sizeBytes=String(g.size);const m=(r=i==null?void 0:i.mimeType)!==null&&r!==void 0?r:g.type;if(m===void 0||m==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");a.mimeType=m;const y={file:a},f=this.getFileName(e),v=Z("upload/v1beta/files",y._url),T=await this.fetchUploadUrl(v,a.sizeBytes,a.mimeType,f,y,i==null?void 0:i.httpOptions);return c.upload(e,T,this)}async uploadFileToFileSearchStore(e,i,r){var a;const c=this.clientOptions.uploader,g=await c.stat(i),m=String(g.size),y=(a=r==null?void 0:r.mimeType)!==null&&a!==void 0?a:g.type;if(y===void 0||y==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");const f=`upload/v1beta/${e}:uploadToFileSearchStore`,v=this.getFileName(i),T={};r!=null&&Ay(r,T);const S=await this.fetchUploadUrl(f,m,y,v,T,r==null?void 0:r.httpOptions);return c.uploadToFileSearchStore(i,S,this)}async downloadFile(e){await this.clientOptions.downloader.download(e,this)}async fetchUploadUrl(e,i,r,a,c,g){var m;let y={};g?y=g:y={apiVersion:"",headers:Object.assign({"Content-Type":"application/json","X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i}`,"X-Goog-Upload-Header-Content-Type":`${r}`},a?{"X-Goog-Upload-File-Name":a}:{})};const f=await this.request({path:e,body:JSON.stringify(c),httpMethod:"POST",httpOptions:y});if(!f||!(f!=null&&f.headers))throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");const v=(m=f==null?void 0:f.headers)===null||m===void 0?void 0:m["x-goog-upload-url"];if(v===void 0)throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");return v}}async function Ep(n){var e;if(n===void 0)throw new Error("response is undefined");if(!n.ok){const i=n.status;let r;!((e=n.headers.get("content-type"))===null||e===void 0)&&e.includes("application/json")?r=await n.json():r={error:{message:await n.text(),code:n.status,status:n.statusText}};const a=JSON.stringify(r);throw i>=400&&i<600?new oa({message:a,status:i}):new Error(a)}}function kb(n,e){if(!e||Object.keys(e).length===0)return;if(n.body instanceof Blob){console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");return}let i={};if(typeof n.body=="string"&&n.body.length>0)try{const c=JSON.parse(n.body);if(typeof c=="object"&&c!==null&&!Array.isArray(c))i=c;else{console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");return}}catch{console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");return}function r(c,g){const m=Object.assign({},c);for(const y in g)if(Object.prototype.hasOwnProperty.call(g,y)){const f=g[y],v=m[y];f&&typeof f=="object"&&!Array.isArray(f)&&v&&typeof v=="object"&&!Array.isArray(v)?m[y]=r(v,f):(v&&f&&typeof v!=typeof f&&console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${y}". Original type: ${typeof v}, New type: ${typeof f}. Overwriting.`),m[y]=f)}return m}const a=r(i,e);n.body=JSON.stringify(a)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ub="mcp_used/unknown";let zb=!1;function wy(n){for(const e of n)if(Lb(e)||typeof e=="object"&&"inputSchema"in e)return!0;return zb}function xy(n){var e;const i=(e=n[tc])!==null&&e!==void 0?e:"";n[tc]=(i+` ${Ub}`).trimStart()}function Lb(n){return n!==null&&typeof n=="object"&&n instanceof Cc}function Hb(n){return Ye(this,arguments,function*(i,r=100){let a,c=0;for(;c<r;){const g=yield lt(i.listTools({cursor:a}));for(const m of g.tools)yield yield lt(m),c++;if(!g.nextCursor)break;a=g.nextCursor}})}class Cc{constructor(e=[],i){this.mcpTools=[],this.functionNameToMcpClient={},this.mcpClients=e,this.config=i}static create(e,i){return new Cc(e,i)}async initialize(){var e,i,r,a;if(this.mcpTools.length>0)return;const c={},g=[];for(const v of this.mcpClients)try{for(var m=!0,y=(i=void 0,We(Hb(v))),f;f=await y.next(),e=f.done,!e;m=!0){a=f.value,m=!1;const T=a;g.push(T);const S=T.name;if(c[S])throw new Error(`Duplicate function name ${S} found in MCP tools. Please ensure function names are unique.`);c[S]=v}}catch(T){i={error:T}}finally{try{!m&&!e&&(r=y.return)&&await r.call(y)}finally{if(i)throw i.error}}this.mcpTools=g,this.functionNameToMcpClient=c}async tool(){return await this.initialize(),jE(this.mcpTools,this.config)}async callTool(e){await this.initialize();const i=[];for(const r of e)if(r.name in this.functionNameToMcpClient){const a=this.functionNameToMcpClient[r.name];let c;this.config.timeout&&(c={timeout:this.config.timeout});const g=await a.callTool({name:r.name,arguments:r.args},void 0,c);i.push({functionResponse:{name:r.name,response:g.isError?{error:g}:g}})}return i}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function Bb(n,e,i){const r=new YE;let a;i.data instanceof Blob?a=JSON.parse(await i.data.text()):a=JSON.parse(i.data),Object.assign(r,a),e(r)}class qb{constructor(e,i,r){this.apiClient=e,this.auth=i,this.webSocketFactory=r}async connect(e){var i,r;if(this.apiClient.isVertexAI())throw new Error("Live music is not supported for Vertex AI.");console.warn("Live music generation is experimental and may change in future versions.");const a=this.apiClient.getWebsocketBaseUrl(),c=this.apiClient.getApiVersion(),g=Vb(this.apiClient.getDefaultHeaders()),m=this.apiClient.getApiKey(),y=`${a}/ws/google.ai.generativelanguage.${c}.GenerativeService.BidiGenerateMusic?key=${m}`;let f=()=>{};const v=new Promise(P=>{f=P}),T=e.callbacks,S=function(){f({})},C=this.apiClient,A={onopen:S,onmessage:P=>{Bb(C,T.onmessage,P)},onerror:(i=T==null?void 0:T.onerror)!==null&&i!==void 0?i:function(P){},onclose:(r=T==null?void 0:T.onclose)!==null&&r!==void 0?r:function(P){}},M=this.webSocketFactory.create(y,Gb(g),A);M.connect(),await v;const Y={setup:{model:At(this.apiClient,e.model)}};return M.send(JSON.stringify(Y)),new Pb(M,this.apiClient)}}class Pb{constructor(e,i){this.conn=e,this.apiClient=i}async setWeightedPrompts(e){if(!e.weightedPrompts||Object.keys(e.weightedPrompts).length===0)throw new Error("Weighted prompts must be set and contain at least one entry.");const i=sw(e);this.conn.send(JSON.stringify({clientContent:i}))}async setMusicGenerationConfig(e){e.musicGenerationConfig||(e.musicGenerationConfig={});const i=iw(e);this.conn.send(JSON.stringify(i))}sendPlaybackControl(e){const i={playbackControl:e};this.conn.send(JSON.stringify(i))}play(){this.sendPlaybackControl(si.PLAY)}pause(){this.sendPlaybackControl(si.PAUSE)}stop(){this.sendPlaybackControl(si.STOP)}resetContext(){this.sendPlaybackControl(si.RESET_CONTEXT)}close(){this.conn.close()}}function Gb(n){const e={};return n.forEach((i,r)=>{e[r]=i}),e}function Vb(n){const e=new Headers;for(const[i,r]of Object.entries(n))e.append(i,r);return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ob="FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";async function Fb(n,e,i){const r=new FE;let a;i.data instanceof Blob?a=await i.data.text():i.data instanceof ArrayBuffer?a=new TextDecoder().decode(i.data):a=i.data;const c=JSON.parse(a);if(n.isVertexAI()){const g=lw(c);Object.assign(r,g)}else Object.assign(r,c);e(r)}class Yb{constructor(e,i,r){this.apiClient=e,this.auth=i,this.webSocketFactory=r,this.music=new qb(this.apiClient,this.auth,this.webSocketFactory)}async connect(e){var i,r,a,c,g,m;if(e.config&&e.config.httpOptions)throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");const y=this.apiClient.getWebsocketBaseUrl(),f=this.apiClient.getApiVersion();let v;const T=this.apiClient.getHeaders();e.config&&e.config.tools&&wy(e.config.tools)&&xy(T);const S=Xb(T);if(this.apiClient.isVertexAI()){const j=this.apiClient.getProject(),ut=this.apiClient.getLocation(),Tt=this.apiClient.getApiKey(),bt=!!j&&!!ut||!!Tt;this.apiClient.getCustomBaseUrl()&&!bt?v=y:(v=`${y}/ws/google.cloud.aiplatform.${f}.LlmBidiService/BidiGenerateContent`,await this.auth.addAuthHeaders(S,v))}else{const j=this.apiClient.getApiKey();let ut="BidiGenerateContent",Tt="key";j!=null&&j.startsWith("auth_tokens/")&&(console.warn("Warning: Ephemeral token support is experimental and may change in future versions."),f!=="v1alpha"&&console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."),ut="BidiGenerateContentConstrained",Tt="access_token"),v=`${y}/ws/google.ai.generativelanguage.${f}.GenerativeService.${ut}?${Tt}=${j}`}let C=()=>{};const A=new Promise(j=>{C=j}),M=e.callbacks,x=function(){var j;(j=M==null?void 0:M.onopen)===null||j===void 0||j.call(M),C({})},U=this.apiClient,Y={onopen:x,onmessage:j=>{Fb(U,M.onmessage,j)},onerror:(i=M==null?void 0:M.onerror)!==null&&i!==void 0?i:function(j){},onclose:(r=M==null?void 0:M.onclose)!==null&&r!==void 0?r:function(j){}},P=this.webSocketFactory.create(v,Kb(S),Y);P.connect(),await A;let J=At(this.apiClient,e.model);if(this.apiClient.isVertexAI()&&J.startsWith("publishers/")){const j=this.apiClient.getProject(),ut=this.apiClient.getLocation();j&&ut&&(J=`projects/${j}/locations/${ut}/`+J)}let Q={};this.apiClient.isVertexAI()&&((a=e.config)===null||a===void 0?void 0:a.responseModalities)===void 0&&(e.config===void 0?e.config={responseModalities:[Jr.AUDIO]}:e.config.responseModalities=[Jr.AUDIO]),!((c=e.config)===null||c===void 0)&&c.generationConfig&&console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");const V=(m=(g=e.config)===null||g===void 0?void 0:g.tools)!==null&&m!==void 0?m:[],K=[];for(const j of V)if(this.isCallableTool(j)){const ut=j;K.push(await ut.tool())}else K.push(j);K.length>0&&(e.config.tools=K);const rt={model:J,config:e.config,callbacks:e.callbacks};return this.apiClient.isVertexAI()?Q=ow(this.apiClient,rt):Q=nw(this.apiClient,rt),delete Q.config,P.send(JSON.stringify(Q)),new Jb(P,this.apiClient)}isCallableTool(e){return"callTool"in e&&typeof e.callTool=="function"}}const Wb={turnComplete:!0};class Jb{constructor(e,i){this.conn=e,this.apiClient=i}tLiveClientContent(e,i){if(i.turns!==null&&i.turns!==void 0){let r=[];try{r=Me(i.turns),e.isVertexAI()||(r=r.map(a=>vs(a)))}catch{throw new Error(`Failed to parse client content "turns", type: '${typeof i.turns}'`)}return{clientContent:{turns:r,turnComplete:i.turnComplete}}}return{clientContent:{turnComplete:i.turnComplete}}}tLiveClienttToolResponse(e,i){let r=[];if(i.functionResponses==null)throw new Error("functionResponses is required.");if(Array.isArray(i.functionResponses)?r=i.functionResponses:r=[i.functionResponses],r.length===0)throw new Error("functionResponses is required.");for(const c of r){if(typeof c!="object"||c===null||!("name"in c)||!("response"in c))throw new Error(`Could not parse function response, type '${typeof c}'.`);if(!e.isVertexAI()&&!("id"in c))throw new Error(Ob)}return{toolResponse:{functionResponses:r}}}sendClientContent(e){e=Object.assign(Object.assign({},Wb),e);const i=this.tLiveClientContent(this.apiClient,e);this.conn.send(JSON.stringify(i))}sendRealtimeInput(e){let i={};this.apiClient.isVertexAI()?i={realtimeInput:aw(e)}:i={realtimeInput:rw(e)},this.conn.send(JSON.stringify(i))}sendToolResponse(e){if(e.functionResponses==null)throw new Error("Tool response parameters are required.");const i=this.tLiveClienttToolResponse(this.apiClient,e);this.conn.send(JSON.stringify(i))}close(){this.conn.close()}}function Kb(n){const e={};return n.forEach((i,r)=>{e[r]=i}),e}function Xb(n){const e=new Headers;for(const[i,r]of Object.entries(n))e.append(i,r);return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Cp=10;function Ap(n){var e,i,r;if(!((e=n==null?void 0:n.automaticFunctionCalling)===null||e===void 0)&&e.disable)return!0;let a=!1;for(const g of(i=n==null?void 0:n.tools)!==null&&i!==void 0?i:[])if(li(g)){a=!0;break}if(!a)return!0;const c=(r=n==null?void 0:n.automaticFunctionCalling)===null||r===void 0?void 0:r.maximumRemoteCalls;return c&&(c<0||!Number.isInteger(c))||c==0?(console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:",c),!0):!1}function li(n){return"callTool"in n&&typeof n.callTool=="function"}function Qb(n){var e,i,r;return(r=(i=(e=n.config)===null||e===void 0?void 0:e.tools)===null||i===void 0?void 0:i.some(a=>li(a)))!==null&&r!==void 0?r:!1}function wp(n){var e;const i=[];return!((e=n==null?void 0:n.config)===null||e===void 0)&&e.tools&&n.config.tools.forEach((r,a)=>{if(li(r))return;const c=r;c.functionDeclarations&&c.functionDeclarations.length>0&&i.push(a)}),i}function xp(n){var e;return!(!((e=n==null?void 0:n.automaticFunctionCalling)===null||e===void 0)&&e.ignoreCallHistory)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Zb extends Cn{constructor(e){super(),this.apiClient=e,this.embedContent=async i=>{if(!this.apiClient.isVertexAI())return await this.embedContentInternal(i);if(i.model.includes("gemini")&&i.model!=="gemini-embedding-001"||i.model.includes("maas")){const a=Me(i.contents);if(a.length>1)throw new Error("The embedContent API for this model only supports one content at a time.");const c=Object.assign(Object.assign({},i),{content:a[0],embeddingApiType:Kr.EMBED_CONTENT});return await this.embedContentInternal(c)}else{const a=Object.assign(Object.assign({},i),{embeddingApiType:Kr.PREDICT});return await this.embedContentInternal(a)}},this.generateContent=async i=>{var r,a,c,g,m;const y=await this.processParamsMaybeAddMcpUsage(i);if(this.maybeMoveToResponseJsonSchem(i),!Qb(i)||Ap(i.config))return await this.generateContentInternal(y);const f=wp(i);if(f.length>0){const M=f.map(x=>`tools[${x}]`).join(", ");throw new Error(`Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations is not yet supported. Incompatible tools found at ${M}.`)}let v,T;const S=Me(y.contents),C=(c=(a=(r=y.config)===null||r===void 0?void 0:r.automaticFunctionCalling)===null||a===void 0?void 0:a.maximumRemoteCalls)!==null&&c!==void 0?c:Cp;let A=0;for(;A<C&&(v=await this.generateContentInternal(y),!(!v.functionCalls||v.functionCalls.length===0));){const M=v.candidates[0].content,x=[];for(const U of(m=(g=i.config)===null||g===void 0?void 0:g.tools)!==null&&m!==void 0?m:[])if(li(U)){const P=await U.callTool(v.functionCalls);x.push(...P)}A++,T={role:"user",parts:x},y.contents=Me(y.contents),y.contents.push(M),y.contents.push(T),xp(y.config)&&(S.push(M),S.push(T))}return xp(y.config)&&(v.automaticFunctionCallingHistory=S),v},this.generateContentStream=async i=>{var r,a,c,g,m;if(this.maybeMoveToResponseJsonSchem(i),Ap(i.config)){const T=await this.processParamsMaybeAddMcpUsage(i);return await this.generateContentStreamInternal(T)}const y=wp(i);if(y.length>0){const T=y.map(S=>`tools[${S}]`).join(", ");throw new Error(`Incompatible tools found at ${T}. Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations" is not yet supported.`)}const f=(c=(a=(r=i==null?void 0:i.config)===null||r===void 0?void 0:r.toolConfig)===null||a===void 0?void 0:a.functionCallingConfig)===null||c===void 0?void 0:c.streamFunctionCallArguments,v=(m=(g=i==null?void 0:i.config)===null||g===void 0?void 0:g.automaticFunctionCalling)===null||m===void 0?void 0:m.disable;if(f&&!v)throw new Error("Running in streaming mode with 'streamFunctionCallArguments' enabled, this feature is not compatible with automatic function calling (AFC). Please set 'config.automaticFunctionCalling.disable' to true to disable AFC or leave 'config.toolConfig.functionCallingConfig.streamFunctionCallArguments' to be undefined or set to false to disable streaming function call arguments feature.");return await this.processAfcStream(i)},this.generateImages=async i=>await this.generateImagesInternal(i).then(r=>{var a;let c;const g=[];if(r!=null&&r.generatedImages)for(const y of r.generatedImages)y&&(y!=null&&y.safetyAttributes)&&((a=y==null?void 0:y.safetyAttributes)===null||a===void 0?void 0:a.contentType)==="Positive Prompt"?c=y==null?void 0:y.safetyAttributes:g.push(y);let m;return c?m={generatedImages:g,positivePromptSafetyAttributes:c,sdkHttpResponse:r.sdkHttpResponse}:m={generatedImages:g,sdkHttpResponse:r.sdkHttpResponse},m}),this.list=async i=>{var r;const g={config:Object.assign(Object.assign({},{queryBase:!0}),i==null?void 0:i.config)};if(this.apiClient.isVertexAI()&&!g.config.queryBase){if(!((r=g.config)===null||r===void 0)&&r.filter)throw new Error("Filtering tuned models list for Vertex AI is not currently supported");g.config.filter="labels.tune-type:*"}return new So(_n.PAGED_ITEM_MODELS,m=>this.listInternal(m),await this.listInternal(g),g)},this.editImage=async i=>{const r={model:i.model,prompt:i.prompt,referenceImages:[],config:i.config};return i.referenceImages&&i.referenceImages&&(r.referenceImages=i.referenceImages.map(a=>a.toReferenceImageAPI())),await this.editImageInternal(r)},this.upscaleImage=async i=>{let r={numberOfImages:1,mode:"upscale"};i.config&&(r=Object.assign(Object.assign({},r),i.config));const a={model:i.model,image:i.image,upscaleFactor:i.upscaleFactor,config:r};return await this.upscaleImageInternal(a)},this.generateVideos=async i=>{var r,a,c,g,m,y;if((i.prompt||i.image||i.video)&&i.source)throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");return this.apiClient.isVertexAI()||(!((r=i.video)===null||r===void 0)&&r.uri&&(!((a=i.video)===null||a===void 0)&&a.videoBytes)?i.video={uri:i.video.uri,mimeType:i.video.mimeType}:!((g=(c=i.source)===null||c===void 0?void 0:c.video)===null||g===void 0)&&g.uri&&(!((y=(m=i.source)===null||m===void 0?void 0:m.video)===null||y===void 0)&&y.videoBytes)&&(i.source.video={uri:i.source.video.uri,mimeType:i.source.video.mimeType})),await this.generateVideosInternal(i)}}maybeMoveToResponseJsonSchem(e){e.config&&e.config.responseSchema&&(e.config.responseJsonSchema||Object.keys(e.config.responseSchema).includes("$schema")&&(e.config.responseJsonSchema=e.config.responseSchema,delete e.config.responseSchema))}async processParamsMaybeAddMcpUsage(e){var i,r,a;const c=(i=e.config)===null||i===void 0?void 0:i.tools;if(!c)return e;const g=await Promise.all(c.map(async y=>li(y)?await y.tool():y)),m={model:e.model,contents:e.contents,config:Object.assign(Object.assign({},e.config),{tools:g})};if(m.config.tools=g,e.config&&e.config.tools&&wy(e.config.tools)){const y=(a=(r=e.config.httpOptions)===null||r===void 0?void 0:r.headers)!==null&&a!==void 0?a:{};let f=Object.assign({},y);Object.keys(f).length===0&&(f=this.apiClient.getDefaultHeaders()),xy(f),m.config.httpOptions=Object.assign(Object.assign({},e.config.httpOptions),{headers:f})}return m}async initAfcToolsMap(e){var i,r,a;const c=new Map;for(const g of(r=(i=e.config)===null||i===void 0?void 0:i.tools)!==null&&r!==void 0?r:[])if(li(g)){const m=g,y=await m.tool();for(const f of(a=y.functionDeclarations)!==null&&a!==void 0?a:[]){if(!f.name)throw new Error("Function declaration name is required.");if(c.has(f.name))throw new Error(`Duplicate tool declaration name: ${f.name}`);c.set(f.name,m)}}return c}async processAfcStream(e){var i,r,a;const c=(a=(r=(i=e.config)===null||i===void 0?void 0:i.automaticFunctionCalling)===null||r===void 0?void 0:r.maximumRemoteCalls)!==null&&a!==void 0?a:Cp;let g=!1,m=0;const y=await this.initAfcToolsMap(e);return(function(f,v,T){return Ye(this,arguments,function*(){for(var S,C,A,M,x,U;m<c;){g&&(m++,g=!1);const Q=yield lt(f.processParamsMaybeAddMcpUsage(T)),V=yield lt(f.generateContentStreamInternal(Q)),K=[],rt=[];try{for(var Y=!0,P=(C=void 0,We(V)),J;J=yield lt(P.next()),S=J.done,!S;Y=!0){M=J.value,Y=!1;const j=M;if(yield yield lt(j),j.candidates&&(!((x=j.candidates[0])===null||x===void 0)&&x.content)){rt.push(j.candidates[0].content);for(const ut of(U=j.candidates[0].content.parts)!==null&&U!==void 0?U:[])if(m<c&&ut.functionCall){if(!ut.functionCall.name)throw new Error("Function call name was not returned by the model.");if(v.has(ut.functionCall.name)){const Tt=yield lt(v.get(ut.functionCall.name).callTool([ut.functionCall]));K.push(...Tt)}else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${v.keys()}, mising tool: ${ut.functionCall.name}`)}}}}catch(j){C={error:j}}finally{try{!Y&&!S&&(A=P.return)&&(yield lt(A.call(P)))}finally{if(C)throw C.error}}if(K.length>0){g=!0;const j=new gs;j.candidates=[{content:{role:"user",parts:K}}],yield yield lt(j);const ut=[];ut.push(...rt),ut.push({role:"user",parts:K});const Tt=Me(T.contents).concat(ut);T.contents=Tt}else break}})})(this,y,e)}async generateContentInternal(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Tp(this.apiClient,e);return m=Z("{model}:generateContent",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=_p(v),S=new gs;return Object.assign(S,T),S})}else{const f=vp(this.apiClient,e);return m=Z("{model}:generateContent",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=Sp(v),S=new gs;return Object.assign(S,T),S})}}async generateContentStreamInternal(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Tp(this.apiClient,e);return m=Z("{model}:streamGenerateContent?alt=sse",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.requestStream({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}),g.then(function(T){return Ye(this,arguments,function*(){var S,C,A,M;try{for(var x=!0,U=We(T),Y;Y=yield lt(U.next()),S=Y.done,!S;x=!0){M=Y.value,x=!1;const P=M,J=_p(yield lt(P.json()),e);J.sdkHttpResponse={headers:P.headers};const Q=new gs;Object.assign(Q,J),yield yield lt(Q)}}catch(P){C={error:P}}finally{try{!x&&!S&&(A=U.return)&&(yield lt(A.call(U)))}finally{if(C)throw C.error}}})})}else{const f=vp(this.apiClient,e);return m=Z("{model}:streamGenerateContent?alt=sse",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.requestStream({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}),g.then(function(T){return Ye(this,arguments,function*(){var S,C,A,M;try{for(var x=!0,U=We(T),Y;Y=yield lt(U.next()),S=Y.done,!S;x=!0){M=Y.value,x=!1;const P=M,J=Sp(yield lt(P.json()),e);J.sdkHttpResponse={headers:P.headers};const Q=new gs;Object.assign(Q,J),yield yield lt(Q)}}catch(P){C={error:P}}finally{try{!x&&!S&&(A=U.return)&&(yield lt(A.call(U)))}finally{if(C)throw C.error}}})})}}async embedContentInternal(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Gw(this.apiClient,e,e),v=eC(e.model)?"{model}:embedContent":"{model}:predict";return m=Z(v,f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(T=>T.json().then(S=>{const C=S;return C.sdkHttpResponse={headers:T.headers},C})),g.then(T=>{const S=Ow(T,e),C=new jm;return Object.assign(C,S),C})}else{const f=Pw(this.apiClient,e);return m=Z("{model}:batchEmbedContents",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=Vw(v),S=new jm;return Object.assign(S,T),S})}}async generateImagesInternal(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=tx(this.apiClient,e);return m=Z("{model}:predict",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=nx(v),S=new tp;return Object.assign(S,T),S})}else{const f=jw(this.apiClient,e);return m=Z("{model}:predict",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=ex(v),S=new tp;return Object.assign(S,T),S})}}async editImageInternal(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=Lw(this.apiClient,e);return c=Z("{model}:predict",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>{const f=Hw(y),v=new DE;return Object.assign(v,f),v})}else throw new Error("This method is only supported by the Vertex AI.")}async upscaleImageInternal(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=nb(this.apiClient,e);return c=Z("{model}:predict",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>{const f=ob(y),v=new kE;return Object.assign(v,f),v})}else throw new Error("This method is only supported by the Vertex AI.")}async recontextImage(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=Lx(this.apiClient,e);return c=Z("{model}:predict",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=Hx(y),v=new UE;return Object.assign(v,f),v})}else throw new Error("This method is only supported by the Vertex AI.")}async segmentImage(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=Ox(this.apiClient,e);return c=Z("{model}:predict",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=Fx(y),v=new zE;return Object.assign(v,f),v})}else throw new Error("This method is only supported by the Vertex AI.")}async get(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Tx(this.apiClient,e);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>ju(v))}else{const f=vx(this.apiClient,e);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>$u(v))}}async listInternal(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Rx(this.apiClient,e);return m=Z("{models_url}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=Nx(v),S=new ep;return Object.assign(S,T),S})}else{const f=bx(this.apiClient,e);return m=Z("{models_url}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=Mx(v),S=new ep;return Object.assign(S,T),S})}}async update(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=tb(this.apiClient,e);return m=Z("{model}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"PATCH",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>ju(v))}else{const f=jx(this.apiClient,e);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"PATCH",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>$u(v))}}async delete(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Dw(this.apiClient,e);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=Uw(v),S=new np;return Object.assign(S,T),S})}else{const f=Iw(this.apiClient,e);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=kw(v),S=new np;return Object.assign(S,T),S})}}async countTokens(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Rw(this.apiClient,e);return m=Z("{model}:countTokens",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=Nw(v),S=new op;return Object.assign(S,T),S})}else{const f=bw(this.apiClient,e);return m=Z("{model}:countTokens",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=Mw(v),S=new op;return Object.assign(S,T),S})}}async computeTokens(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=Sw(this.apiClient,e);return c=Z("{model}:computeTokens",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>{const f=_w(y),v=new LE;return Object.assign(v,f),v})}else throw new Error("This method is only supported by the Vertex AI.")}async generateVideosInternal(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=lx(this.apiClient,e);return m=Z("{model}:predictLongRunning",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>{const T=rx(v),S=new Xr;return Object.assign(S,T),S})}else{const f=ax(this.apiClient,e);return m=Z("{model}:predictLongRunning",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>{const T=sx(v),S=new Xr;return Object.assign(S,T),S})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class $b extends Cn{constructor(e){super(),this.apiClient=e}async getVideosOperation(e){const i=e.operation,r=e.config;if(i.name===void 0||i.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const a=i.name.split("/operations/")[0];let c;r&&"httpOptions"in r&&(c=r.httpOptions);const g=await this.fetchPredictVideosOperationInternal({operationName:i.name,resourceName:a,config:{httpOptions:c}});return i._fromAPIResponse({apiResponse:g,_isVertexAI:!0})}else{const a=await this.getVideosOperationInternal({operationName:i.name,config:r});return i._fromAPIResponse({apiResponse:a,_isVertexAI:!1})}}async get(e){const i=e.operation,r=e.config;if(i.name===void 0||i.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const a=i.name.split("/operations/")[0];let c;r&&"httpOptions"in r&&(c=r.httpOptions);const g=await this.fetchPredictVideosOperationInternal({operationName:i.name,resourceName:a,config:{httpOptions:c}});return i._fromAPIResponse({apiResponse:g,_isVertexAI:!0})}else{const a=await this.getVideosOperationInternal({operationName:i.name,config:r});return i._fromAPIResponse({apiResponse:a,_isVertexAI:!1})}}async getVideosOperationInternal(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=xE(e);return m=Z("{operationName}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g}else{const f=wE(e);return m=Z("{operationName}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g}}async fetchPredictVideosOperationInternal(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=vE(e);return c=Z("{resourceName}:fetchPredictOperation",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a}else throw new Error("This method is only supported by the Vertex AI.")}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function bp(n){const e={};if(u(n,["languageCodes"])!==void 0)throw new Error("languageCodes parameter is not supported in Gemini API.");return e}function jb(n){const e={},i=u(n,["apiKey"]);if(i!=null&&h(e,["apiKey"],i),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return e}function tR(n){const e={},i=u(n,["data"]);if(i!=null&&h(e,["data"],i),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const r=u(n,["mimeType"]);return r!=null&&h(e,["mimeType"],r),e}function eR(n){const e={},i=u(n,["parts"]);if(i!=null){let a=i;Array.isArray(a)&&(a=a.map(c=>cR(c))),h(e,["parts"],a)}const r=u(n,["role"]);return r!=null&&h(e,["role"],r),e}function nR(n,e,i){const r={},a=u(e,["expireTime"]);i!==void 0&&a!=null&&h(i,["expireTime"],a);const c=u(e,["newSessionExpireTime"]);i!==void 0&&c!=null&&h(i,["newSessionExpireTime"],c);const g=u(e,["uses"]);i!==void 0&&g!=null&&h(i,["uses"],g);const m=u(e,["liveConnectConstraints"]);i!==void 0&&m!=null&&h(i,["bidiGenerateContentSetup"],uR(n,m));const y=u(e,["lockAdditionalFields"]);return i!==void 0&&y!=null&&h(i,["fieldMask"],y),r}function oR(n,e){const i={},r=u(e,["config"]);return r!=null&&h(i,["config"],nR(n,r,i)),i}function iR(n){const e={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=u(n,["fileUri"]);i!=null&&h(e,["fileUri"],i);const r=u(n,["mimeType"]);return r!=null&&h(e,["mimeType"],r),e}function sR(n){const e={},i=u(n,["id"]);i!=null&&h(e,["id"],i);const r=u(n,["args"]);r!=null&&h(e,["args"],r);const a=u(n,["name"]);if(a!=null&&h(e,["name"],a),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function rR(n){const e={},i=u(n,["authConfig"]);i!=null&&h(e,["authConfig"],jb(i));const r=u(n,["enableWidget"]);return r!=null&&h(e,["enableWidget"],r),e}function aR(n){const e={},i=u(n,["searchTypes"]);if(i!=null&&h(e,["searchTypes"],i),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const r=u(n,["timeRangeFilter"]);return r!=null&&h(e,["timeRangeFilter"],r),e}function lR(n,e){const i={},r=u(n,["generationConfig"]);e!==void 0&&r!=null&&h(e,["setup","generationConfig"],r);const a=u(n,["responseModalities"]);e!==void 0&&a!=null&&h(e,["setup","generationConfig","responseModalities"],a);const c=u(n,["temperature"]);e!==void 0&&c!=null&&h(e,["setup","generationConfig","temperature"],c);const g=u(n,["topP"]);e!==void 0&&g!=null&&h(e,["setup","generationConfig","topP"],g);const m=u(n,["topK"]);e!==void 0&&m!=null&&h(e,["setup","generationConfig","topK"],m);const y=u(n,["maxOutputTokens"]);e!==void 0&&y!=null&&h(e,["setup","generationConfig","maxOutputTokens"],y);const f=u(n,["mediaResolution"]);e!==void 0&&f!=null&&h(e,["setup","generationConfig","mediaResolution"],f);const v=u(n,["seed"]);e!==void 0&&v!=null&&h(e,["setup","generationConfig","seed"],v);const T=u(n,["speechConfig"]);e!==void 0&&T!=null&&h(e,["setup","generationConfig","speechConfig"],Ec(T));const S=u(n,["thinkingConfig"]);e!==void 0&&S!=null&&h(e,["setup","generationConfig","thinkingConfig"],S);const C=u(n,["enableAffectiveDialog"]);e!==void 0&&C!=null&&h(e,["setup","generationConfig","enableAffectiveDialog"],C);const A=u(n,["systemInstruction"]);e!==void 0&&A!=null&&h(e,["setup","systemInstruction"],eR(te(A)));const M=u(n,["tools"]);if(e!==void 0&&M!=null){let V=gi(M);Array.isArray(V)&&(V=V.map(K=>gR(hi(K)))),h(e,["setup","tools"],V)}const x=u(n,["sessionResumption"]);e!==void 0&&x!=null&&h(e,["setup","sessionResumption"],hR(x));const U=u(n,["inputAudioTranscription"]);e!==void 0&&U!=null&&h(e,["setup","inputAudioTranscription"],bp(U));const Y=u(n,["outputAudioTranscription"]);e!==void 0&&Y!=null&&h(e,["setup","outputAudioTranscription"],bp(Y));const P=u(n,["realtimeInputConfig"]);e!==void 0&&P!=null&&h(e,["setup","realtimeInputConfig"],P);const J=u(n,["contextWindowCompression"]);e!==void 0&&J!=null&&h(e,["setup","contextWindowCompression"],J);const Q=u(n,["proactivity"]);if(e!==void 0&&Q!=null&&h(e,["setup","proactivity"],Q),u(n,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return i}function uR(n,e){const i={},r=u(e,["model"]);r!=null&&h(i,["setup","model"],At(n,r));const a=u(e,["config"]);return a!=null&&h(i,["config"],lR(a,i)),i}function cR(n){const e={},i=u(n,["mediaResolution"]);i!=null&&h(e,["mediaResolution"],i);const r=u(n,["codeExecutionResult"]);r!=null&&h(e,["codeExecutionResult"],r);const a=u(n,["executableCode"]);a!=null&&h(e,["executableCode"],a);const c=u(n,["fileData"]);c!=null&&h(e,["fileData"],iR(c));const g=u(n,["functionCall"]);g!=null&&h(e,["functionCall"],sR(g));const m=u(n,["functionResponse"]);m!=null&&h(e,["functionResponse"],m);const y=u(n,["inlineData"]);y!=null&&h(e,["inlineData"],tR(y));const f=u(n,["text"]);f!=null&&h(e,["text"],f);const v=u(n,["thought"]);v!=null&&h(e,["thought"],v);const T=u(n,["thoughtSignature"]);T!=null&&h(e,["thoughtSignature"],T);const S=u(n,["videoMetadata"]);S!=null&&h(e,["videoMetadata"],S);const C=u(n,["toolCall"]);C!=null&&h(e,["toolCall"],C);const A=u(n,["toolResponse"]);return A!=null&&h(e,["toolResponse"],A),e}function hR(n){const e={},i=u(n,["handle"]);if(i!=null&&h(e,["handle"],i),u(n,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return e}function gR(n){const e={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=u(n,["computerUse"]);i!=null&&h(e,["computerUse"],i);const r=u(n,["fileSearch"]);r!=null&&h(e,["fileSearch"],r);const a=u(n,["googleSearch"]);a!=null&&h(e,["googleSearch"],aR(a));const c=u(n,["googleMaps"]);c!=null&&h(e,["googleMaps"],rR(c));const g=u(n,["codeExecution"]);if(g!=null&&h(e,["codeExecution"],g),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const m=u(n,["functionDeclarations"]);if(m!=null){let T=m;Array.isArray(T)&&(T=T.map(S=>S)),h(e,["functionDeclarations"],T)}const y=u(n,["googleSearchRetrieval"]);if(y!=null&&h(e,["googleSearchRetrieval"],y),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const f=u(n,["urlContext"]);f!=null&&h(e,["urlContext"],f);const v=u(n,["mcpServers"]);if(v!=null){let T=v;Array.isArray(T)&&(T=T.map(S=>S)),h(e,["mcpServers"],T)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function dR(n){const e=[];for(const i in n)if(Object.prototype.hasOwnProperty.call(n,i)){const r=n[i];if(typeof r=="object"&&r!=null&&Object.keys(r).length>0){const a=Object.keys(r).map(c=>`${i}.${c}`);e.push(...a)}else e.push(i)}return e.join(",")}function fR(n,e){let i=null;const r=n.bidiGenerateContentSetup;if(typeof r=="object"&&r!==null&&"setup"in r){const c=r.setup;typeof c=="object"&&c!==null?(n.bidiGenerateContentSetup=c,i=c):delete n.bidiGenerateContentSetup}else r!==void 0&&delete n.bidiGenerateContentSetup;const a=n.fieldMask;if(i){const c=dR(i);if(Array.isArray(e==null?void 0:e.lockAdditionalFields)&&(e==null?void 0:e.lockAdditionalFields.length)===0)c?n.fieldMask=c:delete n.fieldMask;else if(e!=null&&e.lockAdditionalFields&&e.lockAdditionalFields.length>0&&a!==null&&Array.isArray(a)&&a.length>0){const g=["temperature","topK","topP","maxOutputTokens","responseModalities","seed","speechConfig"];let m=[];a.length>0&&(m=a.map(f=>g.includes(f)?`generationConfig.${f}`:f));const y=[];c&&y.push(c),m.length>0&&y.push(...m),y.length>0?n.fieldMask=y.join(","):delete n.fieldMask}else delete n.fieldMask}else a!==null&&Array.isArray(a)&&a.length>0?n.fieldMask=a.join(","):delete n.fieldMask;return n}class mR extends Cn{constructor(e){super(),this.apiClient=e}async create(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");{const m=oR(this.apiClient,e);c=Z("auth_tokens",m._url),g=m._query,delete m.config,delete m._url,delete m._query;const y=fR(m,e.config);return a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),a.then(f=>f)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function pR(n,e){const i={},r=u(n,["force"]);return e!==void 0&&r!=null&&h(e,["_query","force"],r),i}function yR(n){const e={},i=u(n,["name"]);i!=null&&h(e,["_url","name"],i);const r=u(n,["config"]);return r!=null&&pR(r,e),e}function vR(n){const e={},i=u(n,["name"]);return i!=null&&h(e,["_url","name"],i),e}function TR(n,e){const i={},r=u(n,["pageSize"]);e!==void 0&&r!=null&&h(e,["_query","pageSize"],r);const a=u(n,["pageToken"]);return e!==void 0&&a!=null&&h(e,["_query","pageToken"],a),i}function SR(n){const e={},i=u(n,["parent"]);i!=null&&h(e,["_url","parent"],i);const r=u(n,["config"]);return r!=null&&TR(r,e),e}function _R(n){const e={},i=u(n,["sdkHttpResponse"]);i!=null&&h(e,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(e,["nextPageToken"],r);const a=u(n,["documents"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(e,["documents"],c)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ER extends Cn{constructor(e){super(),this.apiClient=e,this.list=async i=>new So(_n.PAGED_ITEM_DOCUMENTS,r=>this.listInternal({parent:i.parent,config:r.config}),await this.listInternal(i),i)}async get(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=vR(e);return c=Z("{name}",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>y)}}async delete(e){var i,r;let a="",c={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=yR(e);a=Z("{name}",g._url),c=g._query,delete g._url,delete g._query,await this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(g),httpMethod:"DELETE",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal})}}async listInternal(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=SR(e);return c=Z("{parent}/documents",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=_R(y),v=new HE;return Object.assign(v,f),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class CR extends Cn{constructor(e,i=new ER(e)){super(),this.apiClient=e,this.documents=i,this.list=async(r={})=>new So(_n.PAGED_ITEM_FILE_SEARCH_STORES,a=>this.listInternal(a),await this.listInternal(r),r)}async uploadToFileSearchStore(e){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files to a file search store.");return this.apiClient.uploadFileToFileSearchStore(e.fileSearchStoreName,e.file,e.config)}async create(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=cb(e);return c=Z("fileSearchStores",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>y)}}async get(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=db(e);return c=Z("{name}",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>y)}}async delete(e){var i,r;let a="",c={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=gb(e);a=Z("{name}",g._url),c=g._query,delete g._url,delete g._query,await this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(g),httpMethod:"DELETE",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal})}}async listInternal(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=Tb(e);return c=Z("fileSearchStores",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=Sb(y),v=new BE;return Object.assign(v,f),v})}}async uploadToFileSearchStoreInternal(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=_b(e);return c=Z("upload/v1beta/{file_search_store_name}:uploadToFileSearchStore",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=Eb(y),v=new qE;return Object.assign(v,f),v})}}async importFile(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=pb(e);return c=Z("{file_search_store_name}:importFile",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=mb(y),v=new yc;return Object.assign(v,f),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let by=function(){const{crypto:n}=globalThis;if(n!=null&&n.randomUUID)return by=n.randomUUID.bind(n),n.randomUUID();const e=new Uint8Array(1),i=n?()=>n.getRandomValues(e)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,r=>(+r^i()&15>>+r/4).toString(16))};const AR=()=>by();/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ec(n){return typeof n=="object"&&n!==null&&("name"in n&&n.name==="AbortError"||"message"in n&&String(n.message).includes("FetchRequestCanceledException"))}const nc=n=>{if(n instanceof Error)return n;if(typeof n=="object"&&n!==null){try{if(Object.prototype.toString.call(n)==="[object Error]"){const e=new Error(n.message,n.cause?{cause:n.cause}:{});return n.stack&&(e.stack=n.stack),n.cause&&!e.cause&&(e.cause=n.cause),n.name&&(e.name=n.name),e}}catch{}try{return new Error(JSON.stringify(n))}catch{}}return new Error(n)};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Pe extends Error{}class he extends Pe{constructor(e,i,r,a){super(`${he.makeMessage(e,i,r)}`),this.status=e,this.headers=a,this.error=i}static makeMessage(e,i,r){const a=i!=null&&i.message?typeof i.message=="string"?i.message:JSON.stringify(i.message):i?JSON.stringify(i):r;return e&&a?`${e} ${a}`:e?`${e} status code (no body)`:a||"(no status code or body)"}static generate(e,i,r,a){if(!e||!a)return new ra({message:r,cause:nc(i)});const c=i;return e===400?new My(e,c,r,a):e===401?new Ny(e,c,r,a):e===403?new Iy(e,c,r,a):e===404?new Dy(e,c,r,a):e===409?new ky(e,c,r,a):e===422?new Uy(e,c,r,a):e===429?new zy(e,c,r,a):e>=500?new Ly(e,c,r,a):new he(e,c,r,a)}}class oc extends he{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0)}}class ra extends he{constructor({message:e,cause:i}){super(void 0,void 0,e||"Connection error.",void 0),i&&(this.cause=i)}}class Ry extends ra{constructor({message:e}={}){super({message:e??"Request timed out."})}}class My extends he{}class Ny extends he{}class Iy extends he{}class Dy extends he{}class ky extends he{}class Uy extends he{}class zy extends he{}class Ly extends he{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const wR=/^[a-z][a-z0-9+.-]*:/i,xR=n=>wR.test(n);let ic=n=>(ic=Array.isArray,ic(n));const bR=ic;let RR=bR;const Rp=RR;function Mp(n){if(!n)return!0;for(const e in n)return!1;return!0}function MR(n,e){return Object.prototype.hasOwnProperty.call(n,e)}const NR=(n,e)=>{if(typeof e!="number"||!Number.isInteger(e))throw new Pe(`${n} must be an integer`);if(e<0)throw new Pe(`${n} must be a positive integer`);return e},IR=n=>{try{return JSON.parse(n)}catch{return}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const DR=n=>new Promise(e=>setTimeout(e,n));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function kR(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new GeminiNextGenAPIClient({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function Hy(...n){const e=globalThis.ReadableStream;if(typeof e>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new e(...n)}function UR(n){let e=Symbol.asyncIterator in n?n[Symbol.asyncIterator]():n[Symbol.iterator]();return Hy({start(){},async pull(i){const{done:r,value:a}=await e.next();r?i.close():i.enqueue(a)},async cancel(){var i;await((i=e.return)===null||i===void 0?void 0:i.call(e))}})}function By(n){if(n[Symbol.asyncIterator])return n;const e=n.getReader();return{async next(){try{const i=await e.read();return i!=null&&i.done&&e.releaseLock(),i}catch(i){throw e.releaseLock(),i}},async return(){const i=e.cancel();return e.releaseLock(),await i,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function zR(n){var e,i;if(n===null||typeof n!="object")return;if(n[Symbol.asyncIterator]){await((i=(e=n[Symbol.asyncIterator]()).return)===null||i===void 0?void 0:i.call(e));return}const r=n.getReader(),a=r.cancel();r.releaseLock(),await a}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const LR=({headers:n,body:e})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(e)});/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function HR(n){return Object.entries(n).filter(([e,i])=>typeof i<"u").map(([e,i])=>{if(typeof i=="string"||typeof i=="number"||typeof i=="boolean")return`${encodeURIComponent(e)}=${encodeURIComponent(i)}`;if(i===null)return`${encodeURIComponent(e)}=`;throw new Pe(`Cannot stringify type ${typeof i}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const BR="0.0.1";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qy=()=>{var n;if(typeof File>"u"){const{process:e}=globalThis,i=typeof((n=e==null?void 0:e.versions)===null||n===void 0?void 0:n.node)=="string"&&parseInt(e.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(i?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function Pu(n,e,i){return qy(),new File(n,e??"unknown_file",i)}function qR(n){return(typeof n=="object"&&n!==null&&("name"in n&&n.name&&String(n.name)||"url"in n&&n.url&&String(n.url)||"filename"in n&&n.filename&&String(n.filename)||"path"in n&&n.path&&String(n.path))||"").split(/[\\/]/).pop()||void 0}const PR=n=>n!=null&&typeof n=="object"&&typeof n[Symbol.asyncIterator]=="function";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Py=n=>n!=null&&typeof n=="object"&&typeof n.size=="number"&&typeof n.type=="string"&&typeof n.text=="function"&&typeof n.slice=="function"&&typeof n.arrayBuffer=="function",GR=n=>n!=null&&typeof n=="object"&&typeof n.name=="string"&&typeof n.lastModified=="number"&&Py(n),VR=n=>n!=null&&typeof n=="object"&&typeof n.url=="string"&&typeof n.blob=="function";async function OR(n,e,i){if(qy(),n=await n,GR(n))return n instanceof File?n:Pu([await n.arrayBuffer()],n.name);if(VR(n)){const a=await n.blob();return e||(e=new URL(n.url).pathname.split(/[\\/]/).pop()),Pu(await sc(a),e,i)}const r=await sc(n);if(e||(e=qR(n)),!(i!=null&&i.type)){const a=r.find(c=>typeof c=="object"&&"type"in c&&c.type);typeof a=="string"&&(i=Object.assign(Object.assign({},i),{type:a}))}return Pu(r,e,i)}async function sc(n){var e,i,r,a,c;let g=[];if(typeof n=="string"||ArrayBuffer.isView(n)||n instanceof ArrayBuffer)g.push(n);else if(Py(n))g.push(n instanceof Blob?n:await n.arrayBuffer());else if(PR(n))try{for(var m=!0,y=We(n),f;f=await y.next(),e=f.done,!e;m=!0){a=f.value,m=!1;const v=a;g.push(...await sc(v))}}catch(v){i={error:v}}finally{try{!m&&!e&&(r=y.return)&&await r.call(y)}finally{if(i)throw i.error}}else{const v=(c=n==null?void 0:n.constructor)===null||c===void 0?void 0:c.name;throw new Error(`Unexpected data type: ${typeof n}${v?`; constructor: ${v}`:""}${FR(n)}`)}return g}function FR(n){return typeof n!="object"||n===null?"":`; props: [${Object.getOwnPropertyNames(n).map(i=>`"${i}"`).join(", ")}]`}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Gy{constructor(e){this._client=e}}Gy._key=[];/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Vy(n){return n.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}const Np=Object.freeze(Object.create(null)),YR=(n=Vy)=>(function(i,...r){if(i.length===1)return i[0];let a=!1;const c=[],g=i.reduce((v,T,S)=>{var C,A,M;/[?#]/.test(T)&&(a=!0);const x=r[S];let U=(a?encodeURIComponent:n)(""+x);return S!==r.length&&(x==null||typeof x=="object"&&x.toString===((M=Object.getPrototypeOf((A=Object.getPrototypeOf((C=x.hasOwnProperty)!==null&&C!==void 0?C:Np))!==null&&A!==void 0?A:Np))===null||M===void 0?void 0:M.toString))&&(U=x+"",c.push({start:v.length+T.length,length:U.length,error:`Value of type ${Object.prototype.toString.call(x).slice(8,-1)} is not a valid path parameter`})),v+T+(S===r.length?"":U)},""),m=g.split(/[?#]/,1)[0],y=/(^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi;let f;for(;(f=y.exec(m))!==null;){const v=f[0].startsWith("/"),T=v?1:0,S=v?f[0].slice(1):f[0];c.push({start:f.index+T,length:S.length,error:`Value "${S}" can't be safely passed as a path parameter`})}if(c.sort((v,T)=>v.start-T.start),c.length>0){let v=0;const T=c.reduce((S,C)=>{const A=" ".repeat(C.start-v),M="^".repeat(C.length);return v=C.start+C.length,S+A+M},"");throw new Pe(`Path parameters result in path with invalid segments:
${c.map(S=>S.error).join(`
`)}
${g}
${T}`)}return g}),Br=YR(Vy);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Oy extends Gy{create(e,i){var r;const{api_version:a=this._client.apiVersion}=e,c=Zr(e,["api_version"]);if("model"in c&&"agent_config"in c)throw new Pe("Invalid request: specified `model` and `agent_config`. If specifying `model`, use `generation_config`.");if("agent"in c&&"generation_config"in c)throw new Pe("Invalid request: specified `agent` and `generation_config`. If specifying `agent`, use `agent_config`.");return this._client.post(Br`/${a}/interactions`,Object.assign(Object.assign({body:c},i),{stream:(r=e.stream)!==null&&r!==void 0?r:!1}))}delete(e,i={},r){const{api_version:a=this._client.apiVersion}=i??{};return this._client.delete(Br`/${a}/interactions/${e}`,r)}cancel(e,i={},r){const{api_version:a=this._client.apiVersion}=i??{};return this._client.post(Br`/${a}/interactions/${e}/cancel`,r)}get(e,i={},r){var a;const c=i??{},{api_version:g=this._client.apiVersion}=c,m=Zr(c,["api_version"]);return this._client.get(Br`/${g}/interactions/${e}`,Object.assign(Object.assign({query:m},r),{stream:(a=i==null?void 0:i.stream)!==null&&a!==void 0?a:!1}))}}Oy._key=Object.freeze(["interactions"]);class Fy extends Oy{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function WR(n){let e=0;for(const a of n)e+=a.length;const i=new Uint8Array(e);let r=0;for(const a of n)i.set(a,r),r+=a.length;return i}let qr;function Ac(n){let e;return(qr??(e=new globalThis.TextEncoder,qr=e.encode.bind(e)))(n)}let Pr;function Ip(n){let e;return(Pr??(e=new globalThis.TextDecoder,Pr=e.decode.bind(e)))(n)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class aa{constructor(){this.buffer=new Uint8Array,this.carriageReturnIndex=null,this.searchIndex=0}decode(e){var i;if(e==null)return[];const r=e instanceof ArrayBuffer?new Uint8Array(e):typeof e=="string"?Ac(e):e;this.buffer=WR([this.buffer,r]);const a=[];let c;for(;(c=JR(this.buffer,(i=this.carriageReturnIndex)!==null&&i!==void 0?i:this.searchIndex))!=null;){if(c.carriage&&this.carriageReturnIndex==null){this.carriageReturnIndex=c.index;continue}if(this.carriageReturnIndex!=null&&(c.index!==this.carriageReturnIndex+1||c.carriage)){a.push(Ip(this.buffer.subarray(0,this.carriageReturnIndex-1))),this.buffer=this.buffer.subarray(this.carriageReturnIndex),this.carriageReturnIndex=null,this.searchIndex=0;continue}const g=this.carriageReturnIndex!==null?c.preceding-1:c.preceding,m=Ip(this.buffer.subarray(0,g));a.push(m),this.buffer=this.buffer.subarray(c.index),this.carriageReturnIndex=null,this.searchIndex=0}return this.searchIndex=Math.max(0,this.buffer.length-1),a}flush(){return this.buffer.length?this.decode(`
`):[]}}aa.NEWLINE_CHARS=new Set([`
`,"\r"]);aa.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function JR(n,e){const a=e??0,c=n.indexOf(10,a),g=n.indexOf(13,a);if(c===-1&&g===-1)return null;let m;return c!==-1&&g!==-1?m=Math.min(c,g):m=c!==-1?c:g,n[m]===10?{preceding:m,index:m+1,carriage:!1}:{preceding:m,index:m+1,carriage:!0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $r={off:0,error:200,warn:300,info:400,debug:500},Dp=(n,e,i)=>{if(n){if(MR($r,n))return n;ce(i).warn(`${e} was set to ${JSON.stringify(n)}, expected one of ${JSON.stringify(Object.keys($r))}`)}};function fs(){}function Gr(n,e,i){return!e||$r[n]>$r[i]?fs:e[n].bind(e)}const KR={error:fs,warn:fs,info:fs,debug:fs};let kp=new WeakMap;function ce(n){var e;const i=n.logger,r=(e=n.logLevel)!==null&&e!==void 0?e:"off";if(!i)return KR;const a=kp.get(i);if(a&&a[0]===r)return a[1];const c={error:Gr("error",i,r),warn:Gr("warn",i,r),info:Gr("info",i,r),debug:Gr("debug",i,r)};return kp.set(i,[r,c]),c}const To=n=>(n.options&&(n.options=Object.assign({},n.options),delete n.options.headers),n.headers&&(n.headers=Object.fromEntries((n.headers instanceof Headers?[...n.headers]:Object.entries(n.headers)).map(([e,i])=>[e,e.toLowerCase()==="x-goog-api-key"||e.toLowerCase()==="authorization"||e.toLowerCase()==="cookie"||e.toLowerCase()==="set-cookie"?"***":i]))),"retryOfRequestLogID"in n&&(n.retryOfRequestLogID&&(n.retryOf=n.retryOfRequestLogID),delete n.retryOfRequestLogID),n);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ri{constructor(e,i,r){this.iterator=e,this.controller=i,this.client=r}static fromSSEResponse(e,i,r){let a=!1;const c=r?ce(r):console;function g(){return Ye(this,arguments,function*(){var y,f,v,T;if(a)throw new Pe("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");a=!0;let S=!1;try{try{for(var C=!0,A=We(XR(e,i)),M;M=yield lt(A.next()),y=M.done,!y;C=!0){T=M.value,C=!1;const x=T;if(!S)if(x.data.startsWith("[DONE]")){S=!0;continue}else try{yield yield lt(JSON.parse(x.data))}catch(U){throw c.error("Could not parse message into JSON:",x.data),c.error("From chunk:",x.raw),U}}}catch(x){f={error:x}}finally{try{!C&&!y&&(v=A.return)&&(yield lt(v.call(A)))}finally{if(f)throw f.error}}S=!0}catch(x){if(ec(x))return yield lt(void 0);throw x}finally{S||i.abort()}})}return new ri(g,i,r)}static fromReadableStream(e,i,r){let a=!1;function c(){return Ye(this,arguments,function*(){var y,f,v,T;const S=new aa,C=By(e);try{for(var A=!0,M=We(C),x;x=yield lt(M.next()),y=x.done,!y;A=!0){T=x.value,A=!1;const U=T;for(const Y of S.decode(U))yield yield lt(Y)}}catch(U){f={error:U}}finally{try{!A&&!y&&(v=M.return)&&(yield lt(v.call(M)))}finally{if(f)throw f.error}}for(const U of S.flush())yield yield lt(U)})}function g(){return Ye(this,arguments,function*(){var y,f,v,T;if(a)throw new Pe("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");a=!0;let S=!1;try{try{for(var C=!0,A=We(c()),M;M=yield lt(A.next()),y=M.done,!y;C=!0){T=M.value,C=!1;const x=T;S||x&&(yield yield lt(JSON.parse(x)))}}catch(x){f={error:x}}finally{try{!C&&!y&&(v=A.return)&&(yield lt(v.call(A)))}finally{if(f)throw f.error}}S=!0}catch(x){if(ec(x))return yield lt(void 0);throw x}finally{S||i.abort()}})}return new ri(g,i,r)}[Symbol.asyncIterator](){return this.iterator()}tee(){const e=[],i=[],r=this.iterator(),a=c=>({next:()=>{if(c.length===0){const g=r.next();e.push(g),i.push(g)}return c.shift()}});return[new ri(()=>a(e),this.controller,this.client),new ri(()=>a(i),this.controller,this.client)]}toReadableStream(){const e=this;let i;return Hy({async start(){i=e[Symbol.asyncIterator]()},async pull(r){try{const{value:a,done:c}=await i.next();if(c)return r.close();const g=Ac(JSON.stringify(a)+`
`);r.enqueue(g)}catch(a){r.error(a)}},async cancel(){var r;await((r=i.return)===null||r===void 0?void 0:r.call(i))}})}}function XR(n,e){return Ye(this,arguments,function*(){var r,a,c,g;if(!n.body)throw e.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new Pe("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new Pe("Attempted to iterate over a response with no body");const m=new ZR,y=new aa,f=By(n.body);try{for(var v=!0,T=We(QR(f)),S;S=yield lt(T.next()),r=S.done,!r;v=!0){g=S.value,v=!1;const C=g;for(const A of y.decode(C)){const M=m.decode(A);M&&(yield yield lt(M))}}}catch(C){a={error:C}}finally{try{!v&&!r&&(c=T.return)&&(yield lt(c.call(T)))}finally{if(a)throw a.error}}for(const C of y.flush()){const A=m.decode(C);A&&(yield yield lt(A))}})}function QR(n){return Ye(this,arguments,function*(){var i,r,a,c;try{for(var g=!0,m=We(n),y;y=yield lt(m.next()),i=y.done,!i;g=!0){c=y.value,g=!1;const f=c;if(f==null)continue;const v=f instanceof ArrayBuffer?new Uint8Array(f):typeof f=="string"?Ac(f):f;yield yield lt(v)}}catch(f){r={error:f}}finally{try{!g&&!i&&(a=m.return)&&(yield lt(a.call(m)))}finally{if(r)throw r.error}}})}class ZR{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;const c={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],c}if(this.chunks.push(e),e.startsWith(":"))return null;let[i,r,a]=$R(e,":");return a.startsWith(" ")&&(a=a.substring(1)),i==="event"?this.event=a:i==="data"&&this.data.push(a),null}}function $R(n,e){const i=n.indexOf(e);return i!==-1?[n.substring(0,i),e,n.substring(i+e.length)]:[n,"",""]}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function jR(n,e){const{response:i,requestLogID:r,retryOfRequestLogID:a,startTime:c}=e,g=await(async()=>{var m;if(e.options.stream)return ce(n).debug("response",i.status,i.url,i.headers,i.body),e.options.__streamClass?e.options.__streamClass.fromSSEResponse(i,e.controller,n):ri.fromSSEResponse(i,e.controller,n);if(i.status===204)return null;if(e.options.__binaryResponse)return i;const y=i.headers.get("content-type"),f=(m=y==null?void 0:y.split(";")[0])===null||m===void 0?void 0:m.trim();return(f==null?void 0:f.includes("application/json"))||(f==null?void 0:f.endsWith("+json"))?i.headers.get("content-length")==="0"?void 0:await i.json():await i.text()})();return ce(n).debug(`[${r}] response parsed`,To({retryOfRequestLogID:a,url:i.url,status:i.status,body:g,durationMs:Date.now()-c})),g}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class wc extends Promise{constructor(e,i,r=jR){super(a=>{a(null)}),this.responsePromise=i,this.parseResponse=r,this.client=e}_thenUnwrap(e){return new wc(this.client,this.responsePromise,async(i,r)=>e(await this.parseResponse(i,r),r))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){const[e,i]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:i}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(e=>this.parseResponse(this.client,e))),this.parsedPromise}then(e,i){return this.parse().then(e,i)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Yy=Symbol("brand.privateNullableHeaders");function*tM(n){if(!n)return;if(Yy in n){const{values:r,nulls:a}=n;yield*r.entries();for(const c of a)yield[c,null];return}let e=!1,i;n instanceof Headers?i=n.entries():Rp(n)?i=n:(e=!0,i=Object.entries(n??{}));for(let r of i){const a=r[0];if(typeof a!="string")throw new TypeError("expected header name to be a string");const c=Rp(r[1])?r[1]:[r[1]];let g=!1;for(const m of c)m!==void 0&&(e&&!g&&(g=!0,yield[a,null]),yield[a,m])}}const ds=n=>{const e=new Headers,i=new Set;for(const r of n){const a=new Set;for(const[c,g]of tM(r)){const m=c.toLowerCase();a.has(m)||(e.delete(c),a.add(m)),g===null?(e.delete(c),i.add(m)):(e.append(c,g),i.delete(m))}}return{[Yy]:!0,values:e,nulls:i}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Gu=n=>{var e,i,r,a,c,g;if(typeof globalThis.process<"u")return(r=(i=(e=gE)===null||e===void 0?void 0:e[n])===null||i===void 0?void 0:i.trim())!==null&&r!==void 0?r:void 0;if(typeof globalThis.Deno<"u")return(g=(c=(a=globalThis.Deno.env)===null||a===void 0?void 0:a.get)===null||c===void 0?void 0:c.call(a,n))===null||g===void 0?void 0:g.trim()};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Wy;class la{constructor(e){var i,r,a,c,g,m,y,{baseURL:f=Gu("GEMINI_NEXT_GEN_API_BASE_URL"),apiKey:v=(i=Gu("GEMINI_API_KEY"))!==null&&i!==void 0?i:null,apiVersion:T="v1beta"}=e,S=Zr(e,["baseURL","apiKey","apiVersion"]);const C=Object.assign(Object.assign({apiKey:v,apiVersion:T},S),{baseURL:f||"https://generativelanguage.googleapis.com"});this.baseURL=C.baseURL,this.timeout=(r=C.timeout)!==null&&r!==void 0?r:la.DEFAULT_TIMEOUT,this.logger=(a=C.logger)!==null&&a!==void 0?a:console;const A="warn";this.logLevel=A,this.logLevel=(g=(c=Dp(C.logLevel,"ClientOptions.logLevel",this))!==null&&c!==void 0?c:Dp(Gu("GEMINI_NEXT_GEN_API_LOG"),"process.env['GEMINI_NEXT_GEN_API_LOG']",this))!==null&&g!==void 0?g:A,this.fetchOptions=C.fetchOptions,this.maxRetries=(m=C.maxRetries)!==null&&m!==void 0?m:2,this.fetch=(y=C.fetch)!==null&&y!==void 0?y:kR(),this.encoder=LR,this._options=C,this.apiKey=v,this.apiVersion=T,this.clientAdapter=C.clientAdapter}withOptions(e){return new this.constructor(Object.assign(Object.assign(Object.assign({},this._options),{baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,apiVersion:this.apiVersion}),e))}baseURLOverridden(){return this.baseURL!=="https://generativelanguage.googleapis.com"}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:i}){if(!(e.has("authorization")||e.has("x-goog-api-key"))&&!(this.apiKey&&e.get("x-goog-api-key"))&&!i.has("x-goog-api-key"))throw new Error('Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-goog-api-key" headers to be explicitly omitted')}async authHeaders(e){const i=ds([e.headers]);if(!(i.values.has("authorization")||i.values.has("x-goog-api-key"))){if(this.apiKey)return ds([{"x-goog-api-key":this.apiKey}]);if(this.clientAdapter.isVertexAI())return ds([await this.clientAdapter.getAuthHeaders()])}}stringifyQuery(e){return HR(e)}getUserAgent(){return`${this.constructor.name}/JS ${BR}`}defaultIdempotencyKey(){return`stainless-node-retry-${AR()}`}makeStatusError(e,i,r,a){return he.generate(e,i,r,a)}buildURL(e,i,r){const a=!this.baseURLOverridden()&&r||this.baseURL,c=xR(e)?new URL(e):new URL(a+(a.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),g=this.defaultQuery(),m=Object.fromEntries(c.searchParams);return(!Mp(g)||!Mp(m))&&(i=Object.assign(Object.assign(Object.assign({},m),g),i)),typeof i=="object"&&i&&!Array.isArray(i)&&(c.search=this.stringifyQuery(i)),c.toString()}async prepareOptions(e){if(this.clientAdapter&&this.clientAdapter.isVertexAI()&&!e.path.startsWith(`/${this.apiVersion}/projects/`)){const i=e.path.slice(this.apiVersion.length+1);e.path=`/${this.apiVersion}/projects/${this.clientAdapter.getProject()}/locations/${this.clientAdapter.getLocation()}${i}`}}async prepareRequest(e,{url:i,options:r}){}get(e,i){return this.methodRequest("get",e,i)}post(e,i){return this.methodRequest("post",e,i)}patch(e,i){return this.methodRequest("patch",e,i)}put(e,i){return this.methodRequest("put",e,i)}delete(e,i){return this.methodRequest("delete",e,i)}methodRequest(e,i,r){return this.request(Promise.resolve(r).then(a=>Object.assign({method:e,path:i},a)))}request(e,i=null){return new wc(this,this.makeRequest(e,i,void 0))}async makeRequest(e,i,r){var a,c,g;const m=await e,y=(a=m.maxRetries)!==null&&a!==void 0?a:this.maxRetries;i==null&&(i=y),await this.prepareOptions(m);const{req:f,url:v,timeout:T}=await this.buildRequest(m,{retryCount:y-i});await this.prepareRequest(f,{url:v,options:m});const S="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),C=r===void 0?"":`, retryOf: ${r}`,A=Date.now();if(ce(this).debug(`[${S}] sending request`,To({retryOfRequestLogID:r,method:m.method,url:v,options:m,headers:f.headers})),!((c=m.signal)===null||c===void 0)&&c.aborted)throw new oc;const M=new AbortController,x=await this.fetchWithTimeout(v,f,T,M).catch(nc),U=Date.now();if(x instanceof globalThis.Error){const P=`retrying, ${i} attempts remaining`;if(!((g=m.signal)===null||g===void 0)&&g.aborted)throw new oc;const J=ec(x)||/timed? ?out/i.test(String(x)+("cause"in x?String(x.cause):""));if(i)return ce(this).info(`[${S}] connection ${J?"timed out":"failed"} - ${P}`),ce(this).debug(`[${S}] connection ${J?"timed out":"failed"} (${P})`,To({retryOfRequestLogID:r,url:v,durationMs:U-A,message:x.message})),this.retryRequest(m,i,r??S);throw ce(this).info(`[${S}] connection ${J?"timed out":"failed"} - error; no more retries left`),ce(this).debug(`[${S}] connection ${J?"timed out":"failed"} (error; no more retries left)`,To({retryOfRequestLogID:r,url:v,durationMs:U-A,message:x.message})),J?new Ry:new ra({cause:x})}const Y=`[${S}${C}] ${f.method} ${v} ${x.ok?"succeeded":"failed"} with status ${x.status} in ${U-A}ms`;if(!x.ok){const P=await this.shouldRetry(x);if(i&&P){const j=`retrying, ${i} attempts remaining`;return await zR(x.body),ce(this).info(`${Y} - ${j}`),ce(this).debug(`[${S}] response error (${j})`,To({retryOfRequestLogID:r,url:x.url,status:x.status,headers:x.headers,durationMs:U-A})),this.retryRequest(m,i,r??S,x.headers)}const J=P?"error; no more retries left":"error; not retryable";ce(this).info(`${Y} - ${J}`);const Q=await x.text().catch(j=>nc(j).message),V=IR(Q),K=V?void 0:Q;throw ce(this).debug(`[${S}] response error (${J})`,To({retryOfRequestLogID:r,url:x.url,status:x.status,headers:x.headers,message:K,durationMs:Date.now()-A})),this.makeStatusError(x.status,V,K,x.headers)}return ce(this).info(Y),ce(this).debug(`[${S}] response start`,To({retryOfRequestLogID:r,url:x.url,status:x.status,headers:x.headers,durationMs:U-A})),{response:x,options:m,controller:M,requestLogID:S,retryOfRequestLogID:r,startTime:A}}async fetchWithTimeout(e,i,r,a){const c=i||{},{signal:g,method:m}=c,y=Zr(c,["signal","method"]),f=this._makeAbort(a);g&&g.addEventListener("abort",f,{once:!0});const v=setTimeout(f,r),T=globalThis.ReadableStream&&y.body instanceof globalThis.ReadableStream||typeof y.body=="object"&&y.body!==null&&Symbol.asyncIterator in y.body,S=Object.assign(Object.assign(Object.assign({signal:a.signal},T?{duplex:"half"}:{}),{method:"GET"}),y);m&&(S.method=m.toUpperCase());try{return await this.fetch.call(void 0,e,S)}finally{clearTimeout(v)}}async shouldRetry(e){const i=e.headers.get("x-should-retry");return i==="true"?!0:i==="false"?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,i,r,a){var c;let g;const m=a==null?void 0:a.get("retry-after-ms");if(m){const f=parseFloat(m);Number.isNaN(f)||(g=f)}const y=a==null?void 0:a.get("retry-after");if(y&&!g){const f=parseFloat(y);Number.isNaN(f)?g=Date.parse(y)-Date.now():g=f*1e3}if(g===void 0){const f=(c=e.maxRetries)!==null&&c!==void 0?c:this.maxRetries;g=this.calculateDefaultRetryTimeoutMillis(i,f)}return await DR(g),this.makeRequest(e,i-1,r)}calculateDefaultRetryTimeoutMillis(e,i){const c=i-e,g=Math.min(.5*Math.pow(2,c),8),m=1-Math.random()*.25;return g*m*1e3}async buildRequest(e,{retryCount:i=0}={}){var r,a,c;const g=Object.assign({},e),{method:m,path:y,query:f,defaultBaseURL:v}=g,T=this.buildURL(y,f,v);"timeout"in g&&NR("timeout",g.timeout),g.timeout=(r=g.timeout)!==null&&r!==void 0?r:this.timeout;const{bodyHeaders:S,body:C}=this.buildBody({options:g}),A=await this.buildHeaders({options:e,method:m,bodyHeaders:S,retryCount:i});return{req:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({method:m,headers:A},g.signal&&{signal:g.signal}),globalThis.ReadableStream&&C instanceof globalThis.ReadableStream&&{duplex:"half"}),C&&{body:C}),(a=this.fetchOptions)!==null&&a!==void 0?a:{}),(c=g.fetchOptions)!==null&&c!==void 0?c:{}),url:T,timeout:g.timeout}}async buildHeaders({options:e,method:i,bodyHeaders:r,retryCount:a}){let c={};this.idempotencyHeader&&i!=="get"&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),c[this.idempotencyHeader]=e.idempotencyKey);const g=await this.authHeaders(e);let m=ds([c,{Accept:"application/json","User-Agent":this.getUserAgent()},this._options.defaultHeaders,r,e.headers,g]);return this.validateHeaders(m),m.values}_makeAbort(e){return()=>e.abort()}buildBody({options:{body:e,headers:i}}){if(!e)return{bodyHeaders:void 0,body:void 0};const r=ds([i]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e=="string"&&r.values.has("content-type")||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e&&"next"in e&&typeof e.next=="function")?{bodyHeaders:void 0,body:UR(e)}:typeof e=="object"&&r.values.get("content-type")==="application/x-www-form-urlencoded"?{bodyHeaders:{"content-type":"application/x-www-form-urlencoded"},body:this.stringifyQuery(e)}:this.encoder({body:e,headers:r})}}la.DEFAULT_TIMEOUT=6e4;class ee extends la{constructor(){super(...arguments),this.interactions=new Fy(this)}}Wy=ee;ee.GeminiNextGenAPIClient=Wy;ee.GeminiNextGenAPIClientError=Pe;ee.APIError=he;ee.APIConnectionError=ra;ee.APIConnectionTimeoutError=Ry;ee.APIUserAbortError=oc;ee.NotFoundError=Dy;ee.ConflictError=ky;ee.RateLimitError=zy;ee.BadRequestError=My;ee.AuthenticationError=Ny;ee.InternalServerError=Ly;ee.PermissionDeniedError=Iy;ee.UnprocessableEntityError=Uy;ee.toFile=OR;ee.Interactions=Fy;/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function eM(n,e){const i={},r=u(n,["name"]);return r!=null&&h(i,["_url","name"],r),i}function nM(n,e){const i={},r=u(n,["name"]);return r!=null&&h(i,["_url","name"],r),i}function oM(n,e){const i={},r=u(n,["sdkHttpResponse"]);return r!=null&&h(i,["sdkHttpResponse"],r),i}function iM(n,e){const i={},r=u(n,["sdkHttpResponse"]);return r!=null&&h(i,["sdkHttpResponse"],r),i}function sM(n,e,i){const r={};if(u(n,["validationDataset"])!==void 0)throw new Error("validationDataset parameter is not supported in Gemini API.");const a=u(n,["tunedModelDisplayName"]);if(e!==void 0&&a!=null&&h(e,["displayName"],a),u(n,["description"])!==void 0)throw new Error("description parameter is not supported in Gemini API.");const c=u(n,["epochCount"]);e!==void 0&&c!=null&&h(e,["tuningTask","hyperparameters","epochCount"],c);const g=u(n,["learningRateMultiplier"]);if(g!=null&&h(r,["tuningTask","hyperparameters","learningRateMultiplier"],g),u(n,["exportLastCheckpointOnly"])!==void 0)throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");if(u(n,["preTunedModelCheckpointId"])!==void 0)throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");if(u(n,["adapterSize"])!==void 0)throw new Error("adapterSize parameter is not supported in Gemini API.");if(u(n,["tuningMode"])!==void 0)throw new Error("tuningMode parameter is not supported in Gemini API.");if(u(n,["customBaseModel"])!==void 0)throw new Error("customBaseModel parameter is not supported in Gemini API.");const m=u(n,["batchSize"]);e!==void 0&&m!=null&&h(e,["tuningTask","hyperparameters","batchSize"],m);const y=u(n,["learningRate"]);if(e!==void 0&&y!=null&&h(e,["tuningTask","hyperparameters","learningRate"],y),u(n,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");if(u(n,["beta"])!==void 0)throw new Error("beta parameter is not supported in Gemini API.");if(u(n,["baseTeacherModel"])!==void 0)throw new Error("baseTeacherModel parameter is not supported in Gemini API.");if(u(n,["tunedTeacherModelSource"])!==void 0)throw new Error("tunedTeacherModelSource parameter is not supported in Gemini API.");if(u(n,["sftLossWeightMultiplier"])!==void 0)throw new Error("sftLossWeightMultiplier parameter is not supported in Gemini API.");if(u(n,["outputUri"])!==void 0)throw new Error("outputUri parameter is not supported in Gemini API.");if(u(n,["encryptionSpec"])!==void 0)throw new Error("encryptionSpec parameter is not supported in Gemini API.");return r}function rM(n,e,i){const r={};let a=u(i,["config","method"]);if(a===void 0&&(a="SUPERVISED_FINE_TUNING"),a==="SUPERVISED_FINE_TUNING"){const V=u(n,["validationDataset"]);e!==void 0&&V!=null&&h(e,["supervisedTuningSpec"],Vu(V))}else if(a==="PREFERENCE_TUNING"){const V=u(n,["validationDataset"]);e!==void 0&&V!=null&&h(e,["preferenceOptimizationSpec"],Vu(V))}else if(a==="DISTILLATION"){const V=u(n,["validationDataset"]);e!==void 0&&V!=null&&h(e,["distillationSpec"],Vu(V))}const c=u(n,["tunedModelDisplayName"]);e!==void 0&&c!=null&&h(e,["tunedModelDisplayName"],c);const g=u(n,["description"]);e!==void 0&&g!=null&&h(e,["description"],g);let m=u(i,["config","method"]);if(m===void 0&&(m="SUPERVISED_FINE_TUNING"),m==="SUPERVISED_FINE_TUNING"){const V=u(n,["epochCount"]);e!==void 0&&V!=null&&h(e,["supervisedTuningSpec","hyperParameters","epochCount"],V)}else if(m==="PREFERENCE_TUNING"){const V=u(n,["epochCount"]);e!==void 0&&V!=null&&h(e,["preferenceOptimizationSpec","hyperParameters","epochCount"],V)}else if(m==="DISTILLATION"){const V=u(n,["epochCount"]);e!==void 0&&V!=null&&h(e,["distillationSpec","hyperParameters","epochCount"],V)}let y=u(i,["config","method"]);if(y===void 0&&(y="SUPERVISED_FINE_TUNING"),y==="SUPERVISED_FINE_TUNING"){const V=u(n,["learningRateMultiplier"]);e!==void 0&&V!=null&&h(e,["supervisedTuningSpec","hyperParameters","learningRateMultiplier"],V)}else if(y==="PREFERENCE_TUNING"){const V=u(n,["learningRateMultiplier"]);e!==void 0&&V!=null&&h(e,["preferenceOptimizationSpec","hyperParameters","learningRateMultiplier"],V)}else if(y==="DISTILLATION"){const V=u(n,["learningRateMultiplier"]);e!==void 0&&V!=null&&h(e,["distillationSpec","hyperParameters","learningRateMultiplier"],V)}let f=u(i,["config","method"]);if(f===void 0&&(f="SUPERVISED_FINE_TUNING"),f==="SUPERVISED_FINE_TUNING"){const V=u(n,["exportLastCheckpointOnly"]);e!==void 0&&V!=null&&h(e,["supervisedTuningSpec","exportLastCheckpointOnly"],V)}else if(f==="PREFERENCE_TUNING"){const V=u(n,["exportLastCheckpointOnly"]);e!==void 0&&V!=null&&h(e,["preferenceOptimizationSpec","exportLastCheckpointOnly"],V)}else if(f==="DISTILLATION"){const V=u(n,["exportLastCheckpointOnly"]);e!==void 0&&V!=null&&h(e,["distillationSpec","exportLastCheckpointOnly"],V)}let v=u(i,["config","method"]);if(v===void 0&&(v="SUPERVISED_FINE_TUNING"),v==="SUPERVISED_FINE_TUNING"){const V=u(n,["adapterSize"]);e!==void 0&&V!=null&&h(e,["supervisedTuningSpec","hyperParameters","adapterSize"],V)}else if(v==="PREFERENCE_TUNING"){const V=u(n,["adapterSize"]);e!==void 0&&V!=null&&h(e,["preferenceOptimizationSpec","hyperParameters","adapterSize"],V)}else if(v==="DISTILLATION"){const V=u(n,["adapterSize"]);e!==void 0&&V!=null&&h(e,["distillationSpec","hyperParameters","adapterSize"],V)}let T=u(i,["config","method"]);if(T===void 0&&(T="SUPERVISED_FINE_TUNING"),T==="SUPERVISED_FINE_TUNING"){const V=u(n,["tuningMode"]);e!==void 0&&V!=null&&h(e,["supervisedTuningSpec","tuningMode"],V)}const S=u(n,["customBaseModel"]);e!==void 0&&S!=null&&h(e,["customBaseModel"],S);let C=u(i,["config","method"]);if(C===void 0&&(C="SUPERVISED_FINE_TUNING"),C==="SUPERVISED_FINE_TUNING"){const V=u(n,["batchSize"]);e!==void 0&&V!=null&&h(e,["supervisedTuningSpec","hyperParameters","batchSize"],V)}let A=u(i,["config","method"]);if(A===void 0&&(A="SUPERVISED_FINE_TUNING"),A==="SUPERVISED_FINE_TUNING"){const V=u(n,["learningRate"]);e!==void 0&&V!=null&&h(e,["supervisedTuningSpec","hyperParameters","learningRate"],V)}const M=u(n,["labels"]);e!==void 0&&M!=null&&h(e,["labels"],M);const x=u(n,["beta"]);e!==void 0&&x!=null&&h(e,["preferenceOptimizationSpec","hyperParameters","beta"],x);const U=u(n,["baseTeacherModel"]);e!==void 0&&U!=null&&h(e,["distillationSpec","baseTeacherModel"],U);const Y=u(n,["tunedTeacherModelSource"]);e!==void 0&&Y!=null&&h(e,["distillationSpec","tunedTeacherModelSource"],Y);const P=u(n,["sftLossWeightMultiplier"]);e!==void 0&&P!=null&&h(e,["distillationSpec","hyperParameters","sftLossWeightMultiplier"],P);const J=u(n,["outputUri"]);e!==void 0&&J!=null&&h(e,["outputUri"],J);const Q=u(n,["encryptionSpec"]);return e!==void 0&&Q!=null&&h(e,["encryptionSpec"],Q),r}function aM(n,e){const i={},r=u(n,["baseModel"]);r!=null&&h(i,["baseModel"],r);const a=u(n,["preTunedModel"]);a!=null&&h(i,["preTunedModel"],a);const c=u(n,["trainingDataset"]);c!=null&&vM(c);const g=u(n,["config"]);return g!=null&&sM(g,i),i}function lM(n,e){const i={},r=u(n,["baseModel"]);r!=null&&h(i,["baseModel"],r);const a=u(n,["preTunedModel"]);a!=null&&h(i,["preTunedModel"],a);const c=u(n,["trainingDataset"]);c!=null&&TM(c,i,e);const g=u(n,["config"]);return g!=null&&rM(g,i,e),i}function uM(n,e){const i={},r=u(n,["name"]);return r!=null&&h(i,["_url","name"],r),i}function cM(n,e){const i={},r=u(n,["name"]);return r!=null&&h(i,["_url","name"],r),i}function hM(n,e,i){const r={},a=u(n,["pageSize"]);e!==void 0&&a!=null&&h(e,["_query","pageSize"],a);const c=u(n,["pageToken"]);e!==void 0&&c!=null&&h(e,["_query","pageToken"],c);const g=u(n,["filter"]);return e!==void 0&&g!=null&&h(e,["_query","filter"],g),r}function gM(n,e,i){const r={},a=u(n,["pageSize"]);e!==void 0&&a!=null&&h(e,["_query","pageSize"],a);const c=u(n,["pageToken"]);e!==void 0&&c!=null&&h(e,["_query","pageToken"],c);const g=u(n,["filter"]);return e!==void 0&&g!=null&&h(e,["_query","filter"],g),r}function dM(n,e){const i={},r=u(n,["config"]);return r!=null&&hM(r,i),i}function fM(n,e){const i={},r=u(n,["config"]);return r!=null&&gM(r,i),i}function mM(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["nextPageToken"]);a!=null&&h(i,["nextPageToken"],a);const c=u(n,["tunedModels"]);if(c!=null){let g=c;Array.isArray(g)&&(g=g.map(m=>Jy(m))),h(i,["tuningJobs"],g)}return i}function pM(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["nextPageToken"]);a!=null&&h(i,["nextPageToken"],a);const c=u(n,["tuningJobs"]);if(c!=null){let g=c;Array.isArray(g)&&(g=g.map(m=>rc(m))),h(i,["tuningJobs"],g)}return i}function yM(n,e){const i={},r=u(n,["name"]);r!=null&&h(i,["model"],r);const a=u(n,["name"]);return a!=null&&h(i,["endpoint"],a),i}function vM(n,e){const i={};if(u(n,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(u(n,["vertexDatasetResource"])!==void 0)throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");const r=u(n,["examples"]);if(r!=null){let a=r;Array.isArray(a)&&(a=a.map(c=>c)),h(i,["examples","examples"],a)}return i}function TM(n,e,i){const r={};let a=u(i,["config","method"]);if(a===void 0&&(a="SUPERVISED_FINE_TUNING"),a==="SUPERVISED_FINE_TUNING"){const g=u(n,["gcsUri"]);e!==void 0&&g!=null&&h(e,["supervisedTuningSpec","trainingDatasetUri"],g)}else if(a==="PREFERENCE_TUNING"){const g=u(n,["gcsUri"]);e!==void 0&&g!=null&&h(e,["preferenceOptimizationSpec","trainingDatasetUri"],g)}else if(a==="DISTILLATION"){const g=u(n,["gcsUri"]);e!==void 0&&g!=null&&h(e,["distillationSpec","promptDatasetUri"],g)}let c=u(i,["config","method"]);if(c===void 0&&(c="SUPERVISED_FINE_TUNING"),c==="SUPERVISED_FINE_TUNING"){const g=u(n,["vertexDatasetResource"]);e!==void 0&&g!=null&&h(e,["supervisedTuningSpec","trainingDatasetUri"],g)}else if(c==="PREFERENCE_TUNING"){const g=u(n,["vertexDatasetResource"]);e!==void 0&&g!=null&&h(e,["preferenceOptimizationSpec","trainingDatasetUri"],g)}else if(c==="DISTILLATION"){const g=u(n,["vertexDatasetResource"]);e!==void 0&&g!=null&&h(e,["distillationSpec","promptDatasetUri"],g)}if(u(n,["examples"])!==void 0)throw new Error("examples parameter is not supported in Vertex AI.");return r}function Jy(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["name"]);a!=null&&h(i,["name"],a);const c=u(n,["state"]);c!=null&&h(i,["state"],uy(c));const g=u(n,["createTime"]);g!=null&&h(i,["createTime"],g);const m=u(n,["tuningTask","startTime"]);m!=null&&h(i,["startTime"],m);const y=u(n,["tuningTask","completeTime"]);y!=null&&h(i,["endTime"],y);const f=u(n,["updateTime"]);f!=null&&h(i,["updateTime"],f);const v=u(n,["description"]);v!=null&&h(i,["description"],v);const T=u(n,["baseModel"]);T!=null&&h(i,["baseModel"],T);const S=u(n,["_self"]);return S!=null&&h(i,["tunedModel"],yM(S)),i}function rc(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["name"]);a!=null&&h(i,["name"],a);const c=u(n,["state"]);c!=null&&h(i,["state"],uy(c));const g=u(n,["createTime"]);g!=null&&h(i,["createTime"],g);const m=u(n,["startTime"]);m!=null&&h(i,["startTime"],m);const y=u(n,["endTime"]);y!=null&&h(i,["endTime"],y);const f=u(n,["updateTime"]);f!=null&&h(i,["updateTime"],f);const v=u(n,["error"]);v!=null&&h(i,["error"],v);const T=u(n,["description"]);T!=null&&h(i,["description"],T);const S=u(n,["baseModel"]);S!=null&&h(i,["baseModel"],S);const C=u(n,["tunedModel"]);C!=null&&h(i,["tunedModel"],C);const A=u(n,["preTunedModel"]);A!=null&&h(i,["preTunedModel"],A);const M=u(n,["supervisedTuningSpec"]);M!=null&&h(i,["supervisedTuningSpec"],M);const x=u(n,["preferenceOptimizationSpec"]);x!=null&&h(i,["preferenceOptimizationSpec"],x);const U=u(n,["distillationSpec"]);U!=null&&h(i,["distillationSpec"],U);const Y=u(n,["tuningDataStats"]);Y!=null&&h(i,["tuningDataStats"],Y);const P=u(n,["encryptionSpec"]);P!=null&&h(i,["encryptionSpec"],P);const J=u(n,["partnerModelTuningSpec"]);J!=null&&h(i,["partnerModelTuningSpec"],J);const Q=u(n,["customBaseModel"]);Q!=null&&h(i,["customBaseModel"],Q);const V=u(n,["evaluateDatasetRuns"]);if(V!=null){let H=V;Array.isArray(H)&&(H=H.map(X=>X)),h(i,["evaluateDatasetRuns"],H)}const K=u(n,["experiment"]);K!=null&&h(i,["experiment"],K);const rt=u(n,["fullFineTuningSpec"]);rt!=null&&h(i,["fullFineTuningSpec"],rt);const j=u(n,["labels"]);j!=null&&h(i,["labels"],j);const ut=u(n,["outputUri"]);ut!=null&&h(i,["outputUri"],ut);const Tt=u(n,["pipelineJob"]);Tt!=null&&h(i,["pipelineJob"],Tt);const bt=u(n,["serviceAccount"]);bt!=null&&h(i,["serviceAccount"],bt);const Nt=u(n,["tunedModelDisplayName"]);Nt!=null&&h(i,["tunedModelDisplayName"],Nt);const St=u(n,["tuningJobState"]);St!=null&&h(i,["tuningJobState"],St);const Rt=u(n,["veoTuningSpec"]);return Rt!=null&&h(i,["veoTuningSpec"],Rt),i}function SM(n,e){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["name"]);a!=null&&h(i,["name"],a);const c=u(n,["metadata"]);c!=null&&h(i,["metadata"],c);const g=u(n,["done"]);g!=null&&h(i,["done"],g);const m=u(n,["error"]);return m!=null&&h(i,["error"],m),i}function Vu(n,e){const i={},r=u(n,["gcsUri"]);r!=null&&h(i,["validationDatasetUri"],r);const a=u(n,["vertexDatasetResource"]);return a!=null&&h(i,["validationDatasetUri"],a),i}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class _M extends Cn{constructor(e){super(),this.apiClient=e,this.list=async(i={})=>new So(_n.PAGED_ITEM_TUNING_JOBS,r=>this.listInternal(r),await this.listInternal(i),i),this.get=async i=>await this.getInternal(i),this.tune=async i=>{var r;if(this.apiClient.isVertexAI())if(i.baseModel.startsWith("projects/")){const a={tunedModelName:i.baseModel};!((r=i.config)===null||r===void 0)&&r.preTunedModelCheckpointId&&(a.checkpointId=i.config.preTunedModelCheckpointId);const c=Object.assign(Object.assign({},i),{preTunedModel:a});return c.baseModel=void 0,await this.tuneInternal(c)}else{const a=Object.assign({},i);return await this.tuneInternal(a)}else{const a=Object.assign({},i),c=await this.tuneMldevInternal(a);let g="";return c.metadata!==void 0&&c.metadata.tunedModel!==void 0?g=c.metadata.tunedModel:c.name!==void 0&&c.name.includes("/operations/")&&(g=c.name.split("/operations/")[0]),{name:g,state:Ju.JOB_STATE_QUEUED}}}}async getInternal(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=cM(e);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>rc(v))}else{const f=uM(e);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>Jy(v))}}async listInternal(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=fM(e);return m=Z("tuningJobs",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=pM(v),S=new ip;return Object.assign(S,T),S})}else{const f=dM(e);return m=Z("tunedModels",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=mM(v),S=new ip;return Object.assign(S,T),S})}}async cancel(e){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=nM(e);return m=Z("{name}:cancel",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=iM(v),S=new sp;return Object.assign(S,T),S})}else{const f=eM(e);return m=Z("{name}:cancel",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=e.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=e.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const S=T;return S.sdkHttpResponse={headers:v.headers},S})),g.then(v=>{const T=oM(v),S=new sp;return Object.assign(S,T),S})}}async tuneInternal(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=lM(e,e);return c=Z("tuningJobs",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>rc(y))}else throw new Error("This method is only supported by the Vertex AI.")}async tuneMldevInternal(e){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=aM(e);return c=Z("tunedModels",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=e.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>SM(y))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class EM{async download(e,i){throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.")}}const CM=1024*1024*8,AM=3,wM=1e3,xM=2,jr="x-goog-upload-status";async function bM(n,e,i,r){var a;const c=await Ky(n,e,i,r),g=await(c==null?void 0:c.json());if(((a=c==null?void 0:c.headers)===null||a===void 0?void 0:a[jr])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");return g.file}async function RM(n,e,i,r){var a;const c=await Ky(n,e,i,r),g=await(c==null?void 0:c.json());if(((a=c==null?void 0:c.headers)===null||a===void 0?void 0:a[jr])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");const m=oy(g),y=new vc;return Object.assign(y,m),y}async function Ky(n,e,i,r){var a,c,g;let m=e;const y=(r==null?void 0:r.baseUrl)||((a=i.clientOptions.httpOptions)===null||a===void 0?void 0:a.baseUrl);if(y){const C=new URL(y),A=new URL(e);A.protocol=C.protocol,A.host=C.host,A.port=C.port,m=A.toString()}let f=0,v=0,T=new Xu(new Response),S="upload";for(f=n.size;v<f;){const C=Math.min(CM,f-v),A=n.slice(v,v+C);v+C>=f&&(S+=", finalize");let M=0,x=wM;for(;M<AM;){const U=Object.assign(Object.assign({},(r==null?void 0:r.headers)||{}),{"X-Goog-Upload-Command":S,"X-Goog-Upload-Offset":String(v),"Content-Length":String(C)});if(T=await i.request({path:"",body:A,httpMethod:"POST",httpOptions:Object.assign(Object.assign({},r),{apiVersion:"",baseUrl:m,headers:U})}),!((c=T==null?void 0:T.headers)===null||c===void 0)&&c[jr])break;M++,await NM(x),x=x*xM}if(v+=C,((g=T==null?void 0:T.headers)===null||g===void 0?void 0:g[jr])!=="active")break;if(f<=v)throw new Error("All content has been uploaded, but the upload status is not finalized.")}return T}async function MM(n){return{size:n.size,type:n.type}}function NM(n){return new Promise(e=>setTimeout(e,n))}class IM{async upload(e,i,r,a){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await bM(e,i,r,a)}async uploadToFileSearchStore(e,i,r,a){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await RM(e,i,r,a)}async stat(e){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await MM(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class DM{create(e,i,r){return new kM(e,i,r)}}class kM{constructor(e,i,r){this.url=e,this.headers=i,this.callbacks=r}connect(){this.ws=new WebSocket(this.url),this.ws.onopen=this.callbacks.onopen,this.ws.onerror=this.callbacks.onerror,this.ws.onclose=this.callbacks.onclose,this.ws.onmessage=this.callbacks.onmessage}send(e){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.send(e)}close(){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.close()}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Up="x-goog-api-key";class UM{constructor(e){this.apiKey=e}async addAuthHeaders(e,i){if(e.get(Up)===null){if(this.apiKey.startsWith("auth_tokens/"))throw new Error("Ephemeral tokens are only supported by the live API.");if(!this.apiKey)throw new Error("API key is missing. Please provide a valid API key.");e.append(Up,this.apiKey)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zM="gl-node/";class LM{get interactions(){var e;if(this._interactions!==void 0)return this._interactions;console.warn("GoogleGenAI.interactions: Interactions usage is experimental and may change in future versions.");const i=this.httpOptions;i!=null&&i.extraBody&&console.warn("GoogleGenAI.interactions: Client level httpOptions.extraBody is not supported by the interactions client and will be ignored.");const r=new ee({baseURL:this.apiClient.getBaseUrl(),apiKey:this.apiKey,apiVersion:this.apiClient.getApiVersion(),clientAdapter:this.apiClient,defaultHeaders:this.apiClient.getDefaultHeaders(),timeout:i==null?void 0:i.timeout,maxRetries:(e=i==null?void 0:i.retryOptions)===null||e===void 0?void 0:e.attempts});return this._interactions=r.interactions,this._interactions}constructor(e){var i;if(e.apiKey==null)throw new Error("An API Key must be set when running in a browser");if(e.project||e.location)throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");this.vertexai=(i=e.vertexai)!==null&&i!==void 0?i:!1,this.apiKey=e.apiKey;const r=pE(e.httpOptions,e.vertexai,void 0,void 0);r&&(e.httpOptions?e.httpOptions.baseUrl=r:e.httpOptions={baseUrl:r}),this.apiVersion=e.apiVersion,this.httpOptions=e.httpOptions;const a=new UM(this.apiKey);this.apiClient=new Db({auth:a,apiVersion:this.apiVersion,apiKey:this.apiKey,vertexai:this.vertexai,httpOptions:this.httpOptions,userAgentExtra:zM+"web",uploader:new IM,downloader:new EM}),this.models=new Zb(this.apiClient),this.live=new Yb(this.apiClient,a,new DM),this.batches=new KC(this.apiClient),this.chats=new DA(this.models,this.apiClient),this.caches=new MA(this.apiClient),this.files=new FA(this.apiClient),this.operations=new $b(this.apiClient),this.authTokens=new mR(this.apiClient),this.tunings=new _M(this.apiClient),this.fileSearchStores=new CR(this.apiClient)}}let Ou=null;const HM=()=>(Ou||(Ou=new LM({apiKey:"PLACEHOLDER_API_KEY"})),Ou),BM=async(n,e,i=[])=>{try{const g=HM().chats.create({model:"gemini-3-flash-preview",config:{systemInstruction:`You are a friendly and encouraging Chinese language (HSK) tutor. 
    You are helping a student understand a specific lesson. 
    Strictly use the provided LESSON CONTEXT to answer questions if applicable.
    If the user asks for examples, provide Pinyin and English translations.
    Keep answers concise but helpful.`},history:i}),m=`
    [LESSON CONTEXT START]
    ${e}
    [LESSON CONTEXT END]

    Student Question: ${n}
    `;return(await g.sendMessage({message:m})).text||"I'm sorry, I couldn't generate a response."}catch(r){return console.error("Gemini API Error:",r),"Sorry, I am having trouble connecting to the tutoring service right now. Please check your API key."}},qM=({contextContent:n,isOpen:e,onClose:i})=>{const[r,a]=q.useState([{role:"model",text:"你好! I am your AI HSK Tutor. I can explain grammar points, provide more vocabulary examples, or quiz you on this lesson. How can I help?"}]),[c,g]=q.useState(""),[m,y]=q.useState(!1),f=q.useRef(null),v=()=>{var S;(S=f.current)==null||S.scrollIntoView({behavior:"smooth"})};q.useEffect(()=>{v()},[r,e]);const T=async()=>{if(!c.trim()||m)return;const S=c.trim();g(""),a(M=>[...M,{role:"user",text:S}]),y(!0);const C=r.map(M=>({role:M.role,parts:[{text:M.text}]})),A=await BM(S,n,C);a(M=>[...M,{role:"model",text:A}]),y(!1)};return e?L.jsxs("div",{className:"fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 z-50 overflow-hidden ring-1 ring-black/5 animate-in slide-in-from-bottom-10 fade-in duration-300",children:[L.jsxs("div",{className:"bg-gradient-to-r from-red-600 to-red-700 p-4 flex justify-between items-center text-white",children:[L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("div",{className:"p-1.5 bg-white/20 rounded-lg backdrop-blur-sm",children:L.jsx(ey,{size:18,className:"text-yellow-300"})}),L.jsxs("div",{children:[L.jsx("h3",{className:"font-bold text-sm",children:"AI Laoshi"}),L.jsx("p",{className:"text-xs text-red-100 opacity-90",children:"Gemini Powered"})]})]}),L.jsx("button",{onClick:i,className:"hover:bg-white/20 p-1 rounded-full transition-colors",children:L.jsx(b_,{size:18})})]}),L.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50",children:[r.map((S,C)=>L.jsx("div",{className:`flex ${S.role==="user"?"justify-end":"justify-start"}`,children:L.jsx("div",{className:`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${S.role==="user"?"bg-red-600 text-white rounded-br-none":"bg-white text-gray-800 border border-gray-100 rounded-bl-none"}`,children:S.text})},C)),m&&L.jsx("div",{className:"flex justify-start",children:L.jsx("div",{className:"bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm",children:L.jsxs("div",{className:"flex gap-1",children:[L.jsx("span",{className:"w-2 h-2 bg-red-400 rounded-full animate-bounce [animation-delay:-0.3s]"}),L.jsx("span",{className:"w-2 h-2 bg-red-400 rounded-full animate-bounce [animation-delay:-0.15s]"}),L.jsx("span",{className:"w-2 h-2 bg-red-400 rounded-full animate-bounce"})]})})}),L.jsx("div",{ref:f})]}),L.jsx("div",{className:"p-3 bg-white border-t border-gray-100",children:L.jsxs("div",{className:"flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 border border-transparent focus-within:border-red-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-100 transition-all",children:[L.jsx("input",{type:"text",value:c,onChange:S=>g(S.target.value),onKeyDown:S=>S.key==="Enter"&&T(),placeholder:"Ask about grammar...",className:"flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400",disabled:m}),L.jsx("button",{onClick:T,disabled:!c.trim()||m,className:"p-1.5 bg-red-600 text-white rounded-full hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:m?L.jsx(E_,{size:16,className:"animate-spin"}):L.jsx(A_,{size:16})})]})})]}):null},PM=({onSelectModule:n})=>{const e=Array.from(new Set(Yu.map(i=>i.level)));return L.jsxs("div",{className:"p-8 max-w-7xl mx-auto",children:[L.jsxs("header",{className:"mb-12",children:[L.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4 tracking-tight",children:"Welcome to HSK Mastery"}),L.jsx("p",{className:"text-xl text-gray-600 max-w-3xl",children:"Your structured path to Chinese fluency. Select a level to continue your journey."})]}),L.jsx("div",{className:"space-y-10",children:e.map(i=>L.jsxs("div",{children:[L.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[L.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:i}),L.jsx("div",{className:"h-px bg-gray-200 flex-1"})]}),L.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Yu.filter(r=>r.level===i).map(r=>L.jsxs("div",{onClick:()=>n(r),className:"group bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col",children:[L.jsxs("div",{className:"p-6 flex-1",children:[L.jsxs("div",{className:"flex justify-between items-start mb-4",children:[L.jsx("div",{className:"w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center font-bold text-sm",children:r.lessons.length}),L.jsx("span",{className:"px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded uppercase tracking-wide",children:"Module"})]}),L.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors",children:r.title}),L.jsx("p",{className:"text-gray-500 text-sm line-clamp-2",children:r.description})]}),L.jsxs("div",{className:"px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-sm text-gray-600 group-hover:bg-red-50/50 transition-colors",children:[L.jsx("span",{children:"Start Learning"}),L.jsx(mc,{size:16,className:"text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all"})]})]},r.id))})]},i))})]})},GM=({module:n})=>{const[e,i]=q.useState(n.lessons[0]||null),[r,a]=q.useState(!1);if(q.useEffect(()=>{n.lessons.length>0&&i(n.lessons[0]),a(!1)},[n]),!e)return L.jsxs("div",{className:"p-12 flex flex-col items-center justify-center text-center",children:[L.jsx("div",{className:"w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:L.jsx(Lu,{className:"text-gray-400",size:32})}),L.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-2",children:"No Content Yet"}),L.jsx("p",{className:"text-gray-500",children:"This module is being prepared."})]});const c=m=>{switch(m){case W.GRAMMAR:return L.jsx(Lu,{size:18});case W.VOCABULARY:return L.jsx(g,{});case W.EXERCISE:return L.jsx(m_,{size:18});default:return L.jsx(Lu,{size:18})}},g=()=>L.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[L.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),L.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]});return L.jsxs("div",{className:"flex flex-col h-full bg-white",children:[L.jsxs("div",{className:"border-b border-gray-200 bg-white sticky top-0 z-30 px-8 py-4 flex items-center justify-between",children:[L.jsxs("div",{children:[L.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500 mb-1",children:[L.jsx("span",{children:n.level}),L.jsx(mc,{size:12}),L.jsx("span",{children:n.title})]}),L.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:e.title})]}),L.jsxs("button",{onClick:()=>a(!r),className:`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${r?"bg-red-100 text-red-700 ring-2 ring-red-200":"bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg"}`,children:[L.jsx(ey,{size:16,className:r?"text-red-600":"text-yellow-400"}),L.jsx("span",{children:r?"Close AI Tutor":"Ask AI Tutor"})]})]}),L.jsx("div",{className:"border-b border-gray-200 px-8 bg-gray-50",children:L.jsx("div",{className:"flex gap-6 overflow-x-auto no-scrollbar",children:n.lessons.map(m=>L.jsxs("button",{onClick:()=>i(m),className:`flex items-center gap-2 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${e.id===m.id?"border-red-600 text-red-600":"border-transparent text-gray-500 hover:text-gray-800"}`,children:[c(m.type),m.type]},m.id))})}),L.jsx("div",{className:"flex-1 overflow-y-auto p-8 lg:p-12 relative bg-white",children:L.jsxs("div",{className:"max-w-4xl mx-auto",children:[L.jsx(rE,{content:e.content}),L.jsxs("div",{className:"mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-gray-500 text-sm",children:[L.jsx("span",{children:"Finished this lesson?"}),L.jsx("div",{className:"flex gap-2",children:L.jsx("button",{className:"px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors",onClick:()=>alert("Great job! Proceeding to next content (Simulation)"),children:"Mark as Complete"})})]})]})}),L.jsx(qM,{contextContent:e.content,isOpen:r,onClose:()=>a(!1)})]})},VM=()=>{const[n,e]=q.useState(null),i=a=>{e(a),window.scrollTo(0,0)},r=()=>{e(null)};return L.jsxs("div",{className:"flex min-h-screen bg-gray-50",children:[L.jsx(sE,{currentModuleId:n==null?void 0:n.id,onSelectModule:i,onGoHome:r}),L.jsx("main",{className:"ml-64 flex-1 h-screen overflow-y-auto",children:n?L.jsx(GM,{module:n}):L.jsx(PM,{onSelectModule:i})})]})};function OM(){return L.jsx(QS,{children:L.jsx(VM,{})})}const Xy=document.getElementById("root");if(!Xy)throw new Error("Could not find root element to mount to");const FM=M0.createRoot(Xy);FM.render(L.jsx(zp.StrictMode,{children:L.jsx(OM,{})}));
