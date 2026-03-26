(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function i(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=i(a);fetch(a.href,c)}})();function ac(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bu={exports:{}},ls={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf;function T0(){if(Rf)return ls;Rf=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,a,c){var g=null;if(c!==void 0&&(g=""+c),a.key!==void 0&&(g=""+a.key),"key"in a){c={};for(var m in a)m!=="key"&&(c[m]=a[m])}else c=a;return a=c.ref,{$$typeof:n,type:r,key:g,ref:a!==void 0?a:null,props:c}}return ls.Fragment=t,ls.jsx=i,ls.jsxs=i,ls}var Mf;function _0(){return Mf||(Mf=1,bu.exports=T0()),bu.exports}var L=_0(),Ru={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf;function S0(){if(Nf)return ae;Nf=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),g=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),_=Symbol.iterator;function C(R){return R===null||typeof R!="object"?null:(R=_&&R[_]||R["@@iterator"],typeof R=="function"?R:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function U(R,F,$){this.props=R,this.context=F,this.refs=x,this.updater=$||A}U.prototype.isReactComponent={},U.prototype.setState=function(R,F){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,F,"setState")},U.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function Y(){}Y.prototype=U.prototype;function P(R,F,$){this.props=R,this.context=F,this.refs=x,this.updater=$||A}var J=P.prototype=new Y;J.constructor=P,M(J,U.prototype),J.isPureReactComponent=!0;var Q=Array.isArray;function V(){}var K={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function j(R,F,$){var te=$.ref;return{$$typeof:n,type:R,key:F,ref:te!==void 0?te:null,props:$}}function ue(R,F){return j(R.type,F,R.props)}function Te(R){return typeof R=="object"&&R!==null&&R.$$typeof===n}function be(R){var F={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function($){return F[$]})}var Ne=/\/+/g;function _e(R,F){return typeof R=="object"&&R!==null&&R.key!=null?be(""+R.key):F.toString(36)}function Re(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(V,V):(R.status="pending",R.then(function(F){R.status==="pending"&&(R.status="fulfilled",R.value=F)},function(F){R.status==="pending"&&(R.status="rejected",R.reason=F)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function H(R,F,$,te,ce){var de=typeof R;(de==="undefined"||de==="boolean")&&(R=null);var Me=!1;if(R===null)Me=!0;else switch(de){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(R.$$typeof){case n:case t:Me=!0;break;case v:return Me=R._init,H(Me(R._payload),F,$,te,ce)}}if(Me)return ce=ce(R),Me=te===""?"."+_e(R,0):te,Q(ce)?($="",Me!=null&&($=Me.replace(Ne,"$&/")+"/"),H(ce,F,$,"",function(mi){return mi})):ce!=null&&(Te(ce)&&(ce=ue(ce,$+(ce.key==null||R&&R.key===ce.key?"":(""+ce.key).replace(Ne,"$&/")+"/")+Me)),F.push(ce)),1;Me=0;var lt=te===""?".":te+":";if(Q(R))for(var Oe=0;Oe<R.length;Oe++)te=R[Oe],de=lt+_e(te,Oe),Me+=H(te,F,$,de,ce);else if(Oe=C(R),typeof Oe=="function")for(R=Oe.call(R),Oe=0;!(te=R.next()).done;)te=te.value,de=lt+_e(te,Oe++),Me+=H(te,F,$,de,ce);else if(de==="object"){if(typeof R.then=="function")return H(Re(R),F,$,te,ce);throw F=String(R),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return Me}function X(R,F,$){if(R==null)return R;var te=[],ce=0;return H(R,te,"","",function(de){return F.call($,de,ce++)}),te}function oe(R){if(R._status===-1){var F=R._result;F=F(),F.then(function($){(R._status===0||R._status===-1)&&(R._status=1,R._result=$)},function($){(R._status===0||R._status===-1)&&(R._status=2,R._result=$)}),R._status===-1&&(R._status=0,R._result=F)}if(R._status===1)return R._result.default;throw R._result}var Se=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},Le={map:X,forEach:function(R,F,$){X(R,function(){F.apply(this,arguments)},$)},count:function(R){var F=0;return X(R,function(){F++}),F},toArray:function(R){return X(R,function(F){return F})||[]},only:function(R){if(!Te(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return ae.Activity=T,ae.Children=Le,ae.Component=U,ae.Fragment=i,ae.Profiler=a,ae.PureComponent=P,ae.StrictMode=r,ae.Suspense=y,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,ae.__COMPILER_RUNTIME={__proto__:null,c:function(R){return K.H.useMemoCache(R)}},ae.cache=function(R){return function(){return R.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(R,F,$){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var te=M({},R.props),ce=R.key;if(F!=null)for(de in F.key!==void 0&&(ce=""+F.key),F)!re.call(F,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&F.ref===void 0||(te[de]=F[de]);var de=arguments.length-2;if(de===1)te.children=$;else if(1<de){for(var Me=Array(de),lt=0;lt<de;lt++)Me[lt]=arguments[lt+2];te.children=Me}return j(R.type,ce,te)},ae.createContext=function(R){return R={$$typeof:g,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:c,_context:R},R},ae.createElement=function(R,F,$){var te,ce={},de=null;if(F!=null)for(te in F.key!==void 0&&(de=""+F.key),F)re.call(F,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ce[te]=F[te]);var Me=arguments.length-2;if(Me===1)ce.children=$;else if(1<Me){for(var lt=Array(Me),Oe=0;Oe<Me;Oe++)lt[Oe]=arguments[Oe+2];ce.children=lt}if(R&&R.defaultProps)for(te in Me=R.defaultProps,Me)ce[te]===void 0&&(ce[te]=Me[te]);return j(R,de,ce)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(R){return{$$typeof:m,render:R}},ae.isValidElement=Te,ae.lazy=function(R){return{$$typeof:v,_payload:{_status:-1,_result:R},_init:oe}},ae.memo=function(R,F){return{$$typeof:f,type:R,compare:F===void 0?null:F}},ae.startTransition=function(R){var F=K.T,$={};K.T=$;try{var te=R(),ce=K.S;ce!==null&&ce($,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(V,Se)}catch(de){Se(de)}finally{F!==null&&$.types!==null&&(F.types=$.types),K.T=F}},ae.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},ae.use=function(R){return K.H.use(R)},ae.useActionState=function(R,F,$){return K.H.useActionState(R,F,$)},ae.useCallback=function(R,F){return K.H.useCallback(R,F)},ae.useContext=function(R){return K.H.useContext(R)},ae.useDebugValue=function(){},ae.useDeferredValue=function(R,F){return K.H.useDeferredValue(R,F)},ae.useEffect=function(R,F){return K.H.useEffect(R,F)},ae.useEffectEvent=function(R){return K.H.useEffectEvent(R)},ae.useId=function(){return K.H.useId()},ae.useImperativeHandle=function(R,F,$){return K.H.useImperativeHandle(R,F,$)},ae.useInsertionEffect=function(R,F){return K.H.useInsertionEffect(R,F)},ae.useLayoutEffect=function(R,F){return K.H.useLayoutEffect(R,F)},ae.useMemo=function(R,F){return K.H.useMemo(R,F)},ae.useOptimistic=function(R,F){return K.H.useOptimistic(R,F)},ae.useReducer=function(R,F,$){return K.H.useReducer(R,F,$)},ae.useRef=function(R){return K.H.useRef(R)},ae.useState=function(R){return K.H.useState(R)},ae.useSyncExternalStore=function(R,F,$){return K.H.useSyncExternalStore(R,F,$)},ae.useTransition=function(){return K.H.useTransition()},ae.version="19.2.4",ae}var If;function lc(){return If||(If=1,Ru.exports=S0()),Ru.exports}var q=lc();const zp=ac(q);var Mu={exports:{}},us={},Nu={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;function E0(){return Df||(Df=1,(function(n){function t(H,X){var oe=H.length;H.push(X);e:for(;0<oe;){var Se=oe-1>>>1,Le=H[Se];if(0<a(Le,X))H[Se]=X,H[oe]=Le,oe=Se;else break e}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var X=H[0],oe=H.pop();if(oe!==X){H[0]=oe;e:for(var Se=0,Le=H.length,R=Le>>>1;Se<R;){var F=2*(Se+1)-1,$=H[F],te=F+1,ce=H[te];if(0>a($,oe))te<Le&&0>a(ce,$)?(H[Se]=ce,H[te]=oe,Se=te):(H[Se]=$,H[F]=oe,Se=F);else if(te<Le&&0>a(ce,oe))H[Se]=ce,H[te]=oe,Se=te;else break e}}return X}function a(H,X){var oe=H.sortIndex-X.sortIndex;return oe!==0?oe:H.id-X.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var g=Date,m=g.now();n.unstable_now=function(){return g.now()-m}}var y=[],f=[],v=1,T=null,_=3,C=!1,A=!1,M=!1,x=!1,U=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function J(H){for(var X=i(f);X!==null;){if(X.callback===null)r(f);else if(X.startTime<=H)r(f),X.sortIndex=X.expirationTime,t(y,X);else break;X=i(f)}}function Q(H){if(M=!1,J(H),!A)if(i(y)!==null)A=!0,V||(V=!0,be());else{var X=i(f);X!==null&&Re(Q,X.startTime-H)}}var V=!1,K=-1,re=5,j=-1;function ue(){return x?!0:!(n.unstable_now()-j<re)}function Te(){if(x=!1,V){var H=n.unstable_now();j=H;var X=!0;try{e:{A=!1,M&&(M=!1,Y(K),K=-1),C=!0;var oe=_;try{t:{for(J(H),T=i(y);T!==null&&!(T.expirationTime>H&&ue());){var Se=T.callback;if(typeof Se=="function"){T.callback=null,_=T.priorityLevel;var Le=Se(T.expirationTime<=H);if(H=n.unstable_now(),typeof Le=="function"){T.callback=Le,J(H),X=!0;break t}T===i(y)&&r(y),J(H)}else r(y);T=i(y)}if(T!==null)X=!0;else{var R=i(f);R!==null&&Re(Q,R.startTime-H),X=!1}}break e}finally{T=null,_=oe,C=!1}X=void 0}}finally{X?be():V=!1}}}var be;if(typeof P=="function")be=function(){P(Te)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,_e=Ne.port2;Ne.port1.onmessage=Te,be=function(){_e.postMessage(null)}}else be=function(){U(Te,0)};function Re(H,X){K=U(function(){H(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return _},n.unstable_next=function(H){switch(_){case 1:case 2:case 3:var X=3;break;default:X=_}var oe=_;_=X;try{return H()}finally{_=oe}},n.unstable_requestPaint=function(){x=!0},n.unstable_runWithPriority=function(H,X){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var oe=_;_=H;try{return X()}finally{_=oe}},n.unstable_scheduleCallback=function(H,X,oe){var Se=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Se+oe:Se):oe=Se,H){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=oe+Le,H={id:v++,callback:X,priorityLevel:H,startTime:oe,expirationTime:Le,sortIndex:-1},oe>Se?(H.sortIndex=oe,t(f,H),i(y)===null&&H===i(f)&&(M?(Y(K),K=-1):M=!0,Re(Q,oe-Se))):(H.sortIndex=Le,t(y,H),A||C||(A=!0,V||(V=!0,be()))),H},n.unstable_shouldYield=ue,n.unstable_wrapCallback=function(H){var X=_;return function(){var oe=_;_=X;try{return H.apply(this,arguments)}finally{_=oe}}}})(Iu)),Iu}var kf;function C0(){return kf||(kf=1,Nu.exports=E0()),Nu.exports}var Du={exports:{}},at={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function A0(){if(Uf)return at;Uf=1;var n=lc();function t(y){var f="https://react.dev/errors/"+y;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)f+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},a=Symbol.for("react.portal");function c(y,f,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:y,containerInfo:f,implementation:v}}var g=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(y,f){if(y==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,at.createPortal=function(y,f){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(t(299));return c(y,f,null,v)},at.flushSync=function(y){var f=g.T,v=r.p;try{if(g.T=null,r.p=2,y)return y()}finally{g.T=f,r.p=v,r.d.f()}},at.preconnect=function(y,f){typeof y=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,r.d.C(y,f))},at.prefetchDNS=function(y){typeof y=="string"&&r.d.D(y)},at.preinit=function(y,f){if(typeof y=="string"&&f&&typeof f.as=="string"){var v=f.as,T=m(v,f.crossOrigin),_=typeof f.integrity=="string"?f.integrity:void 0,C=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;v==="style"?r.d.S(y,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:T,integrity:_,fetchPriority:C}):v==="script"&&r.d.X(y,{crossOrigin:T,integrity:_,fetchPriority:C,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},at.preinitModule=function(y,f){if(typeof y=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var v=m(f.as,f.crossOrigin);r.d.M(y,{crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&r.d.M(y)},at.preload=function(y,f){if(typeof y=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var v=f.as,T=m(v,f.crossOrigin);r.d.L(y,v,{crossOrigin:T,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},at.preloadModule=function(y,f){if(typeof y=="string")if(f){var v=m(f.as,f.crossOrigin);r.d.m(y,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else r.d.m(y)},at.requestFormReset=function(y){r.d.r(y)},at.unstable_batchedUpdates=function(y,f){return y(f)},at.useFormState=function(y,f,v){return g.H.useFormState(y,f,v)},at.useFormStatus=function(){return g.H.useHostTransitionStatus()},at.version="19.2.4",at}var zf;function w0(){if(zf)return Du.exports;zf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Du.exports=A0(),Du.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;function x0(){if(Lf)return us;Lf=1;var n=C0(),t=lc(),i=w0();function r(e){var o="https://react.dev/errors/"+e;if(1<arguments.length){o+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)o+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var o=e,s=e;if(e.alternate)for(;o.return;)o=o.return;else{e=o;do o=e,(o.flags&4098)!==0&&(s=o.return),e=o.return;while(e)}return o.tag===3?s:null}function g(e){if(e.tag===13){var o=e.memoizedState;if(o===null&&(e=e.alternate,e!==null&&(o=e.memoizedState)),o!==null)return o.dehydrated}return null}function m(e){if(e.tag===31){var o=e.memoizedState;if(o===null&&(e=e.alternate,e!==null&&(o=e.memoizedState)),o!==null)return o.dehydrated}return null}function y(e){if(c(e)!==e)throw Error(r(188))}function f(e){var o=e.alternate;if(!o){if(o=c(e),o===null)throw Error(r(188));return o!==e?null:e}for(var s=e,l=o;;){var d=s.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){s=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===s)return y(d),e;if(p===l)return y(d),o;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=d,l=p;else{for(var S=!1,E=d.child;E;){if(E===s){S=!0,s=d,l=p;break}if(E===l){S=!0,l=d,s=p;break}E=E.sibling}if(!S){for(E=p.child;E;){if(E===s){S=!0,s=p,l=d;break}if(E===l){S=!0,l=p,s=d;break}E=E.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:o}function v(e){var o=e.tag;if(o===5||o===26||o===27||o===6)return e;for(e=e.child;e!==null;){if(o=v(e),o!==null)return o;e=e.sibling}return null}var T=Object.assign,_=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),P=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),Te=Symbol.iterator;function be(e){return e===null||typeof e!="object"?null:(e=Te&&e[Te]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Symbol.for("react.client.reference");function _e(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ne?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case U:return"Profiler";case x:return"StrictMode";case Q:return"Suspense";case V:return"SuspenseList";case j:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case P:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case J:var o=e.render;return e=e.displayName,e||(e=o.displayName||o.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return o=e.displayName||null,o!==null?o:_e(e.type)||"Memo";case re:o=e._payload,e=e._init;try{return _e(e(o))}catch{}}return null}var Re=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},Se=[],Le=-1;function R(e){return{current:e}}function F(e){0>Le||(e.current=Se[Le],Se[Le]=null,Le--)}function $(e,o){Le++,Se[Le]=e.current,e.current=o}var te=R(null),ce=R(null),de=R(null),Me=R(null);function lt(e,o){switch($(de,o),$(ce,e),$(te,null),o.nodeType){case 9:case 11:e=(e=o.documentElement)&&(e=e.namespaceURI)?Qd(e):0;break;default:if(e=o.tagName,o=o.namespaceURI)o=Qd(o),e=Zd(o,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(te),$(te,e)}function Oe(){F(te),F(ce),F(de)}function mi(e){e.memoizedState!==null&&$(Me,e);var o=te.current,s=Zd(o,e.type);o!==s&&($(ce,e),$(te,s))}function Ts(e){ce.current===e&&(F(te),F(ce)),Me.current===e&&(F(Me),is._currentValue=oe)}var ua,xc;function jn(e){if(ua===void 0)try{throw Error()}catch(s){var o=s.stack.trim().match(/\n( *(at )?)/);ua=o&&o[1]||"",xc=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ua+e+xc}var ca=!1;function ha(e,o){if(!e||ca)return"";ca=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(o){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(z){var k=z}Reflect.construct(e,[],O)}else{try{O.call()}catch(z){k=z}e.call(O.prototype)}}else{try{throw Error()}catch(z){k=z}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(z){if(z&&k&&typeof z.stack=="string")return[z.stack,k.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],E=p[1];if(S&&E){var w=S.split(`
`),D=E.split(`
`);for(d=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;d<D.length&&!D[d].includes("DetermineComponentFrameRoot");)d++;if(l===w.length||d===D.length)for(l=w.length-1,d=D.length-1;1<=l&&0<=d&&w[l]!==D[d];)d--;for(;1<=l&&0<=d;l--,d--)if(w[l]!==D[d]){if(l!==1||d!==1)do if(l--,d--,0>d||w[l]!==D[d]){var B=`
`+w[l].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=l&&0<=d);break}}}finally{ca=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?jn(s):""}function Qy(e,o){switch(e.tag){case 26:case 27:case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return e.child!==o&&o!==null?jn("Suspense Fallback"):jn("Suspense");case 19:return jn("SuspenseList");case 0:case 15:return ha(e.type,!1);case 11:return ha(e.type.render,!1);case 1:return ha(e.type,!0);case 31:return jn("Activity");default:return""}}function bc(e){try{var o="",s=null;do o+=Qy(e,s),s=e,e=e.return;while(e);return o}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ga=Object.prototype.hasOwnProperty,da=n.unstable_scheduleCallback,fa=n.unstable_cancelCallback,Zy=n.unstable_shouldYield,$y=n.unstable_requestPaint,Tt=n.unstable_now,jy=n.unstable_getCurrentPriorityLevel,Rc=n.unstable_ImmediatePriority,Mc=n.unstable_UserBlockingPriority,_s=n.unstable_NormalPriority,ev=n.unstable_LowPriority,Nc=n.unstable_IdlePriority,tv=n.log,nv=n.unstable_setDisableYieldValue,pi=null,_t=null;function wn(e){if(typeof tv=="function"&&nv(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(pi,e)}catch{}}var St=Math.clz32?Math.clz32:sv,ov=Math.log,iv=Math.LN2;function sv(e){return e>>>=0,e===0?32:31-(ov(e)/iv|0)|0}var Ss=256,Es=262144,Cs=4194304;function eo(e){var o=e&42;if(o!==0)return o;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function As(e,o,s){var l=e.pendingLanes;if(l===0)return 0;var d=0,p=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~p,l!==0?d=eo(l):(S&=E,S!==0?d=eo(S):s||(s=E&~e,s!==0&&(d=eo(s))))):(E=l&~p,E!==0?d=eo(E):S!==0?d=eo(S):s||(s=l&~e,s!==0&&(d=eo(s)))),d===0?0:o!==0&&o!==d&&(o&p)===0&&(p=d&-d,s=o&-o,p>=s||p===32&&(s&4194048)!==0)?o:d}function yi(e,o){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&o)===0}function rv(e,o){switch(e){case 1:case 2:case 4:case 8:case 64:return o+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ic(){var e=Cs;return Cs<<=1,(Cs&62914560)===0&&(Cs=4194304),e}function ma(e){for(var o=[],s=0;31>s;s++)o.push(e);return o}function vi(e,o){e.pendingLanes|=o,o!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function av(e,o,s,l,d,p){var S=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var E=e.entanglements,w=e.expirationTimes,D=e.hiddenUpdates;for(s=S&~s;0<s;){var B=31-St(s),O=1<<B;E[B]=0,w[B]=-1;var k=D[B];if(k!==null)for(D[B]=null,B=0;B<k.length;B++){var z=k[B];z!==null&&(z.lane&=-536870913)}s&=~O}l!==0&&Dc(e,l,0),p!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=p&~(S&~o))}function Dc(e,o,s){e.pendingLanes|=o,e.suspendedLanes&=~o;var l=31-St(o);e.entangledLanes|=o,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function kc(e,o){var s=e.entangledLanes|=o;for(e=e.entanglements;s;){var l=31-St(s),d=1<<l;d&o|e[l]&o&&(e[l]|=o),s&=~d}}function Uc(e,o){var s=o&-o;return s=(s&42)!==0?1:pa(s),(s&(e.suspendedLanes|o))!==0?0:s}function pa(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ya(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zc(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Sf(e.type))}function Lc(e,o){var s=X.p;try{return X.p=e,o()}finally{X.p=s}}var xn=Math.random().toString(36).slice(2),nt="__reactFiber$"+xn,gt="__reactProps$"+xn,So="__reactContainer$"+xn,va="__reactEvents$"+xn,lv="__reactListeners$"+xn,uv="__reactHandles$"+xn,Hc="__reactResources$"+xn,Ti="__reactMarker$"+xn;function Ta(e){delete e[nt],delete e[gt],delete e[va],delete e[lv],delete e[uv]}function Eo(e){var o=e[nt];if(o)return o;for(var s=e.parentNode;s;){if(o=s[So]||s[nt]){if(s=o.alternate,o.child!==null||s!==null&&s.child!==null)for(e=sf(e);e!==null;){if(s=e[nt])return s;e=sf(e)}return o}e=s,s=e.parentNode}return null}function Co(e){if(e=e[nt]||e[So]){var o=e.tag;if(o===5||o===6||o===13||o===31||o===26||o===27||o===3)return e}return null}function _i(e){var o=e.tag;if(o===5||o===26||o===27||o===6)return e.stateNode;throw Error(r(33))}function Ao(e){var o=e[Hc];return o||(o=e[Hc]={hoistableStyles:new Map,hoistableScripts:new Map}),o}function $e(e){e[Ti]=!0}var Bc=new Set,qc={};function to(e,o){wo(e,o),wo(e+"Capture",o)}function wo(e,o){for(qc[e]=o,e=0;e<o.length;e++)Bc.add(o[e])}var cv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pc={},Gc={};function hv(e){return ga.call(Gc,e)?!0:ga.call(Pc,e)?!1:cv.test(e)?Gc[e]=!0:(Pc[e]=!0,!1)}function ws(e,o,s){if(hv(o))if(s===null)e.removeAttribute(o);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(o);return;case"boolean":var l=o.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(o);return}}e.setAttribute(o,""+s)}}function xs(e,o,s){if(s===null)e.removeAttribute(o);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttribute(o,""+s)}}function tn(e,o,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(o,s,""+l)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vc(e){var o=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function gv(e,o,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,o);if(!e.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,p=l.set;return Object.defineProperty(e,o,{configurable:!0,get:function(){return d.call(this)},set:function(S){s=""+S,p.call(this,S)}}),Object.defineProperty(e,o,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[o]}}}}function _a(e){if(!e._valueTracker){var o=Vc(e)?"checked":"value";e._valueTracker=gv(e,o,""+e[o])}}function Oc(e){if(!e)return!1;var o=e._valueTracker;if(!o)return!0;var s=o.getValue(),l="";return e&&(l=Vc(e)?e.checked?"true":"false":e.value),e=l,e!==s?(o.setValue(e),!0):!1}function bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var dv=/[\n"\\]/g;function It(e){return e.replace(dv,function(o){return"\\"+o.charCodeAt(0).toString(16)+" "})}function Sa(e,o,s,l,d,p,S,E){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),o!=null?S==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+Nt(o)):e.value!==""+Nt(o)&&(e.value=""+Nt(o)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),o!=null?Ea(e,S,Nt(o)):s!=null?Ea(e,S,Nt(s)):l!=null&&e.removeAttribute("value"),d==null&&p!=null&&(e.defaultChecked=!!p),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Nt(E):e.removeAttribute("name")}function Fc(e,o,s,l,d,p,S,E){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),o!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||o!=null)){_a(e);return}s=s!=null?""+Nt(s):"",o=o!=null?""+Nt(o):s,E||o===e.value||(e.value=o),e.defaultValue=o}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),_a(e)}function Ea(e,o,s){o==="number"&&bs(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function xo(e,o,s,l){if(e=e.options,o){o={};for(var d=0;d<s.length;d++)o["$"+s[d]]=!0;for(s=0;s<e.length;s++)d=o.hasOwnProperty("$"+e[s].value),e[s].selected!==d&&(e[s].selected=d),d&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Nt(s),o=null,d=0;d<e.length;d++){if(e[d].value===s){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}o!==null||e[d].disabled||(o=e[d])}o!==null&&(o.selected=!0)}}function Yc(e,o,s){if(o!=null&&(o=""+Nt(o),o!==e.value&&(e.value=o),s==null)){e.defaultValue!==o&&(e.defaultValue=o);return}e.defaultValue=s!=null?""+Nt(s):""}function Wc(e,o,s,l){if(o==null){if(l!=null){if(s!=null)throw Error(r(92));if(Re(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),o=s}s=Nt(o),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),_a(e)}function bo(e,o){if(o){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=o;return}}e.textContent=o}var fv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jc(e,o,s){var l=o.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="":l?e.setProperty(o,s):typeof s!="number"||s===0||fv.has(o)?o==="float"?e.cssFloat=s:e[o]=(""+s).trim():e[o]=s+"px"}function Kc(e,o,s){if(o!=null&&typeof o!="object")throw Error(r(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||o!=null&&o.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var d in o)l=o[d],o.hasOwnProperty(d)&&s[d]!==l&&Jc(e,d,l)}else for(var p in o)o.hasOwnProperty(p)&&Jc(e,p,o[p])}function Ca(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rs(e){return pv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function nn(){}var Aa=null;function wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ro=null,Mo=null;function Xc(e){var o=Co(e);if(o&&(e=o.stateNode)){var s=e[gt]||null;e:switch(e=o.stateNode,o.type){case"input":if(Sa(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),o=s.name,s.type==="radio"&&o!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+It(""+o)+'"][type="radio"]'),o=0;o<s.length;o++){var l=s[o];if(l!==e&&l.form===e.form){var d=l[gt]||null;if(!d)throw Error(r(90));Sa(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(o=0;o<s.length;o++)l=s[o],l.form===e.form&&Oc(l)}break e;case"textarea":Yc(e,s.value,s.defaultValue);break e;case"select":o=s.value,o!=null&&xo(e,!!s.multiple,o,!1)}}}var xa=!1;function Qc(e,o,s){if(xa)return e(o,s);xa=!0;try{var l=e(o);return l}finally{if(xa=!1,(Ro!==null||Mo!==null)&&(mr(),Ro&&(o=Ro,e=Mo,Mo=Ro=null,Xc(o),e)))for(o=0;o<e.length;o++)Xc(e[o])}}function Si(e,o){var s=e.stateNode;if(s===null)return null;var l=s[gt]||null;if(l===null)return null;s=l[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,o,typeof s));return s}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ba=!1;if(on)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){ba=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{ba=!1}var bn=null,Ra=null,Ms=null;function Zc(){if(Ms)return Ms;var e,o=Ra,s=o.length,l,d="value"in bn?bn.value:bn.textContent,p=d.length;for(e=0;e<s&&o[e]===d[e];e++);var S=s-e;for(l=1;l<=S&&o[s-l]===d[p-l];l++);return Ms=d.slice(e,1<l?1-l:void 0)}function Ns(e){var o=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&o===13&&(e=13)):e=o,e===10&&(e=13),32<=e||e===13?e:0}function Is(){return!0}function $c(){return!1}function dt(e){function o(s,l,d,p,S){this._reactName=s,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(s=e[E],this[E]=s?s(p):p[E]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Is:$c,this.isPropagationStopped=$c,this}return T(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Is)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Is)},persist:function(){},isPersistent:Is}),o}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ds=dt(no),Ci=T({},no,{view:0,detail:0}),yv=dt(Ci),Ma,Na,Ai,ks=T({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ai&&(Ai&&e.type==="mousemove"?(Ma=e.screenX-Ai.screenX,Na=e.screenY-Ai.screenY):Na=Ma=0,Ai=e),Ma)},movementY:function(e){return"movementY"in e?e.movementY:Na}}),jc=dt(ks),vv=T({},ks,{dataTransfer:0}),Tv=dt(vv),_v=T({},Ci,{relatedTarget:0}),Ia=dt(_v),Sv=T({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=dt(Sv),Cv=T({},no,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Av=dt(Cv),wv=T({},no,{data:0}),eh=dt(wv),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(e){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(e):(e=Rv[e])?!!o[e]:!1}function Da(){return Mv}var Nv=T({},Ci,{key:function(e){if(e.key){var o=xv[e.key]||e.key;if(o!=="Unidentified")return o}return e.type==="keypress"?(e=Ns(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Da,charCode:function(e){return e.type==="keypress"?Ns(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ns(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Iv=dt(Nv),Dv=T({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),th=dt(Dv),kv=T({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Da}),Uv=dt(kv),zv=T({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=dt(zv),Hv=T({},ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=dt(Hv),qv=T({},no,{newState:0,oldState:0}),Pv=dt(qv),Gv=[9,13,27,32],ka=on&&"CompositionEvent"in window,wi=null;on&&"documentMode"in document&&(wi=document.documentMode);var Vv=on&&"TextEvent"in window&&!wi,nh=on&&(!ka||wi&&8<wi&&11>=wi),oh=" ",ih=!1;function sh(e,o){switch(e){case"keyup":return Gv.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var No=!1;function Ov(e,o){switch(e){case"compositionend":return rh(o);case"keypress":return o.which!==32?null:(ih=!0,oh);case"textInput":return e=o.data,e===oh&&ih?null:e;default:return null}}function Fv(e,o){if(No)return e==="compositionend"||!ka&&sh(e,o)?(e=Zc(),Ms=Ra=bn=null,No=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return nh&&o.locale!=="ko"?null:o.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o==="input"?!!Yv[e.type]:o==="textarea"}function lh(e,o,s,l){Ro?Mo?Mo.push(l):Mo=[l]:Ro=l,o=Er(o,"onChange"),0<o.length&&(s=new Ds("onChange","change",null,s,l),e.push({event:s,listeners:o}))}var xi=null,bi=null;function Wv(e){Fd(e,0)}function Us(e){var o=_i(e);if(Oc(o))return e}function uh(e,o){if(e==="change")return o}var ch=!1;if(on){var Ua;if(on){var za="oninput"in document;if(!za){var hh=document.createElement("div");hh.setAttribute("oninput","return;"),za=typeof hh.oninput=="function"}Ua=za}else Ua=!1;ch=Ua&&(!document.documentMode||9<document.documentMode)}function gh(){xi&&(xi.detachEvent("onpropertychange",dh),bi=xi=null)}function dh(e){if(e.propertyName==="value"&&Us(bi)){var o=[];lh(o,bi,e,wa(e)),Qc(Wv,o)}}function Jv(e,o,s){e==="focusin"?(gh(),xi=o,bi=s,xi.attachEvent("onpropertychange",dh)):e==="focusout"&&gh()}function Kv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Us(bi)}function Xv(e,o){if(e==="click")return Us(o)}function Qv(e,o){if(e==="input"||e==="change")return Us(o)}function Zv(e,o){return e===o&&(e!==0||1/e===1/o)||e!==e&&o!==o}var Et=typeof Object.is=="function"?Object.is:Zv;function Ri(e,o){if(Et(e,o))return!0;if(typeof e!="object"||e===null||typeof o!="object"||o===null)return!1;var s=Object.keys(e),l=Object.keys(o);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var d=s[l];if(!ga.call(o,d)||!Et(e[d],o[d]))return!1}return!0}function fh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mh(e,o){var s=fh(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=o&&l>=o)return{node:s,offset:o-e};e=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=fh(s)}}function ph(e,o){return e&&o?e===o?!0:e&&e.nodeType===3?!1:o&&o.nodeType===3?ph(e,o.parentNode):"contains"in e?e.contains(o):e.compareDocumentPosition?!!(e.compareDocumentPosition(o)&16):!1:!1}function yh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var o=bs(e.document);o instanceof e.HTMLIFrameElement;){try{var s=typeof o.contentWindow.location.href=="string"}catch{s=!1}if(s)e=o.contentWindow;else break;o=bs(e.document)}return o}function La(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o&&(o==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||o==="textarea"||e.contentEditable==="true")}var $v=on&&"documentMode"in document&&11>=document.documentMode,Io=null,Ha=null,Mi=null,Ba=!1;function vh(e,o,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ba||Io==null||Io!==bs(l)||(l=Io,"selectionStart"in l&&La(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Mi&&Ri(Mi,l)||(Mi=l,l=Er(Ha,"onSelect"),0<l.length&&(o=new Ds("onSelect","select",null,o,s),e.push({event:o,listeners:l}),o.target=Io)))}function oo(e,o){var s={};return s[e.toLowerCase()]=o.toLowerCase(),s["Webkit"+e]="webkit"+o,s["Moz"+e]="moz"+o,s}var Do={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionrun:oo("Transition","TransitionRun"),transitionstart:oo("Transition","TransitionStart"),transitioncancel:oo("Transition","TransitionCancel"),transitionend:oo("Transition","TransitionEnd")},qa={},Th={};on&&(Th=document.createElement("div").style,"AnimationEvent"in window||(delete Do.animationend.animation,delete Do.animationiteration.animation,delete Do.animationstart.animation),"TransitionEvent"in window||delete Do.transitionend.transition);function io(e){if(qa[e])return qa[e];if(!Do[e])return e;var o=Do[e],s;for(s in o)if(o.hasOwnProperty(s)&&s in Th)return qa[e]=o[s];return e}var _h=io("animationend"),Sh=io("animationiteration"),Eh=io("animationstart"),jv=io("transitionrun"),eT=io("transitionstart"),tT=io("transitioncancel"),Ch=io("transitionend"),Ah=new Map,Pa="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pa.push("scrollEnd");function Vt(e,o){Ah.set(e,o),to(o,[e])}var zs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var o=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(o))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dt=[],ko=0,Ga=0;function Ls(){for(var e=ko,o=Ga=ko=0;o<e;){var s=Dt[o];Dt[o++]=null;var l=Dt[o];Dt[o++]=null;var d=Dt[o];Dt[o++]=null;var p=Dt[o];if(Dt[o++]=null,l!==null&&d!==null){var S=l.pending;S===null?d.next=d:(d.next=S.next,S.next=d),l.pending=d}p!==0&&wh(s,d,p)}}function Hs(e,o,s,l){Dt[ko++]=e,Dt[ko++]=o,Dt[ko++]=s,Dt[ko++]=l,Ga|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Va(e,o,s,l){return Hs(e,o,s,l),Bs(e)}function so(e,o){return Hs(e,null,null,o),Bs(e)}function wh(e,o,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var d=!1,p=e.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(d=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,d&&o!==null&&(d=31-St(s),e=p.hiddenUpdates,l=e[d],l===null?e[d]=[o]:l.push(o),o.lane=s|536870912),p):null}function Bs(e){if(50<Zi)throw Zi=0,Zl=null,Error(r(185));for(var o=e.return;o!==null;)e=o,o=e.return;return e.tag===3?e.stateNode:null}var Uo={};function nT(e,o,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,o,s,l){return new nT(e,o,s,l)}function Oa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sn(e,o){var s=e.alternate;return s===null?(s=Ct(e.tag,o,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=o,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,o=e.dependencies,s.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function xh(e,o){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=o,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,o=s.dependencies,e.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),e}function qs(e,o,s,l,d,p){var S=0;if(l=e,typeof e=="function")Oa(e)&&(S=1);else if(typeof e=="string")S=a0(e,s,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case j:return e=Ct(31,s,o,d),e.elementType=j,e.lanes=p,e;case M:return ro(s.children,d,p,o);case x:S=8,d|=24;break;case U:return e=Ct(12,s,o,d|2),e.elementType=U,e.lanes=p,e;case Q:return e=Ct(13,s,o,d),e.elementType=Q,e.lanes=p,e;case V:return e=Ct(19,s,o,d),e.elementType=V,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:S=10;break e;case Y:S=9;break e;case J:S=11;break e;case K:S=14;break e;case re:S=16,l=null;break e}S=29,s=Error(r(130,e===null?"null":typeof e,"")),l=null}return o=Ct(S,s,o,d),o.elementType=e,o.type=l,o.lanes=p,o}function ro(e,o,s,l){return e=Ct(7,e,l,o),e.lanes=s,e}function Fa(e,o,s){return e=Ct(6,e,null,o),e.lanes=s,e}function bh(e){var o=Ct(18,null,null,0);return o.stateNode=e,o}function Ya(e,o,s){return o=Ct(4,e.children!==null?e.children:[],e.key,o),o.lanes=s,o.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},o}var Rh=new WeakMap;function kt(e,o){if(typeof e=="object"&&e!==null){var s=Rh.get(e);return s!==void 0?s:(o={value:e,source:o,stack:bc(o)},Rh.set(e,o),o)}return{value:e,source:o,stack:bc(o)}}var zo=[],Lo=0,Ps=null,Ni=0,Ut=[],zt=0,Rn=null,Xt=1,Qt="";function rn(e,o){zo[Lo++]=Ni,zo[Lo++]=Ps,Ps=e,Ni=o}function Mh(e,o,s){Ut[zt++]=Xt,Ut[zt++]=Qt,Ut[zt++]=Rn,Rn=e;var l=Xt;e=Qt;var d=32-St(l)-1;l&=~(1<<d),s+=1;var p=32-St(o)+d;if(30<p){var S=d-d%5;p=(l&(1<<S)-1).toString(32),l>>=S,d-=S,Xt=1<<32-St(o)+d|s<<d|l,Qt=p+e}else Xt=1<<p|s<<d|l,Qt=e}function Wa(e){e.return!==null&&(rn(e,1),Mh(e,1,0))}function Ja(e){for(;e===Ps;)Ps=zo[--Lo],zo[Lo]=null,Ni=zo[--Lo],zo[Lo]=null;for(;e===Rn;)Rn=Ut[--zt],Ut[zt]=null,Qt=Ut[--zt],Ut[zt]=null,Xt=Ut[--zt],Ut[zt]=null}function Nh(e,o){Ut[zt++]=Xt,Ut[zt++]=Qt,Ut[zt++]=Rn,Xt=o.id,Qt=o.overflow,Rn=e}var ot=null,Be=null,ve=!1,Mn=null,Lt=!1,Ka=Error(r(519));function Nn(e){var o=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ii(kt(o,e)),Ka}function Ih(e){var o=e.stateNode,s=e.type,l=e.memoizedProps;switch(o[nt]=e,o[gt]=l,s){case"dialog":me("cancel",o),me("close",o);break;case"iframe":case"object":case"embed":me("load",o);break;case"video":case"audio":for(s=0;s<ji.length;s++)me(ji[s],o);break;case"source":me("error",o);break;case"img":case"image":case"link":me("error",o),me("load",o);break;case"details":me("toggle",o);break;case"input":me("invalid",o),Fc(o,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":me("invalid",o);break;case"textarea":me("invalid",o),Wc(o,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||o.textContent===""+s||l.suppressHydrationWarning===!0||Kd(o.textContent,s)?(l.popover!=null&&(me("beforetoggle",o),me("toggle",o)),l.onScroll!=null&&me("scroll",o),l.onScrollEnd!=null&&me("scrollend",o),l.onClick!=null&&(o.onclick=nn),o=!0):o=!1,o||Nn(e,!0)}function Dh(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 31:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:ot=ot.return}}function Ho(e){if(e!==ot)return!1;if(!ve)return Dh(e),ve=!0,!1;var o=e.tag,s;if((s=o!==3&&o!==27)&&((s=o===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||gu(e.type,e.memoizedProps)),s=!s),s&&Be&&Nn(e),Dh(e),o===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Be=of(e)}else if(o===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Be=of(e)}else o===27?(o=Be,Fn(e.type)?(e=yu,yu=null,Be=e):Be=o):Be=ot?Bt(e.stateNode.nextSibling):null;return!0}function ao(){Be=ot=null,ve=!1}function Xa(){var e=Mn;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),Mn=null),e}function Ii(e){Mn===null?Mn=[e]:Mn.push(e)}var Qa=R(null),lo=null,an=null;function In(e,o,s){$(Qa,o._currentValue),o._currentValue=s}function ln(e){e._currentValue=Qa.current,F(Qa)}function Za(e,o,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&o)!==o?(e.childLanes|=o,l!==null&&(l.childLanes|=o)):l!==null&&(l.childLanes&o)!==o&&(l.childLanes|=o),e===s)break;e=e.return}}function $a(e,o,s,l){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var p=d.dependencies;if(p!==null){var S=d.child;p=p.firstContext;e:for(;p!==null;){var E=p;p=d;for(var w=0;w<o.length;w++)if(E.context===o[w]){p.lanes|=s,E=p.alternate,E!==null&&(E.lanes|=s),Za(p.return,s,e),l||(S=null);break e}p=E.next}}else if(d.tag===18){if(S=d.return,S===null)throw Error(r(341));S.lanes|=s,p=S.alternate,p!==null&&(p.lanes|=s),Za(S,s,e),S=null}else S=d.child;if(S!==null)S.return=d;else for(S=d;S!==null;){if(S===e){S=null;break}if(d=S.sibling,d!==null){d.return=S.return,S=d;break}S=S.return}d=S}}function Bo(e,o,s,l){e=null;for(var d=o,p=!1;d!==null;){if(!p){if((d.flags&524288)!==0)p=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var S=d.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var E=d.type;Et(d.pendingProps.value,S.value)||(e!==null?e.push(E):e=[E])}}else if(d===Me.current){if(S=d.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(is):e=[is])}d=d.return}e!==null&&$a(o,e,s,l),o.flags|=262144}function Gs(e){for(e=e.firstContext;e!==null;){if(!Et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function uo(e){lo=e,an=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function it(e){return kh(lo,e)}function Vs(e,o){return lo===null&&uo(e),kh(e,o)}function kh(e,o){var s=o._currentValue;if(o={context:o,memoizedValue:s,next:null},an===null){if(e===null)throw Error(r(308));an=o,e.dependencies={lanes:0,firstContext:o},e.flags|=524288}else an=an.next=o;return s}var oT=typeof AbortController<"u"?AbortController:function(){var e=[],o=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){o.aborted=!0,e.forEach(function(s){return s()})}},iT=n.unstable_scheduleCallback,sT=n.unstable_NormalPriority,We={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ja(){return{controller:new oT,data:new Map,refCount:0}}function Di(e){e.refCount--,e.refCount===0&&iT(sT,function(){e.controller.abort()})}var ki=null,el=0,qo=0,Po=null;function rT(e,o){if(ki===null){var s=ki=[];el=0,qo=ou(),Po={status:"pending",value:void 0,then:function(l){s.push(l)}}}return el++,o.then(Uh,Uh),o}function Uh(){if(--el===0&&ki!==null){Po!==null&&(Po.status="fulfilled");var e=ki;ki=null,qo=0,Po=null;for(var o=0;o<e.length;o++)(0,e[o])()}}function aT(e,o){var s=[],l={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return e.then(function(){l.status="fulfilled",l.value=o;for(var d=0;d<s.length;d++)(0,s[d])(o)},function(d){for(l.status="rejected",l.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),l}var zh=H.S;H.S=function(e,o){vd=Tt(),typeof o=="object"&&o!==null&&typeof o.then=="function"&&rT(e,o),zh!==null&&zh(e,o)};var co=R(null);function tl(){var e=co.current;return e!==null?e:He.pooledCache}function Os(e,o){o===null?$(co,co.current):$(co,o.pool)}function Lh(){var e=tl();return e===null?null:{parent:We._currentValue,pool:e}}var Go=Error(r(460)),nl=Error(r(474)),Fs=Error(r(542)),Ys={then:function(){}};function Hh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bh(e,o,s){switch(s=e[s],s===void 0?e.push(o):s!==o&&(o.then(nn,nn),o=s),o.status){case"fulfilled":return o.value;case"rejected":throw e=o.reason,Ph(e),e;default:if(typeof o.status=="string")o.then(nn,nn);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=o,e.status="pending",e.then(function(l){if(o.status==="pending"){var d=o;d.status="fulfilled",d.value=l}},function(l){if(o.status==="pending"){var d=o;d.status="rejected",d.reason=l}})}switch(o.status){case"fulfilled":return o.value;case"rejected":throw e=o.reason,Ph(e),e}throw go=o,Go}}function ho(e){try{var o=e._init;return o(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(go=s,Go):s}}var go=null;function qh(){if(go===null)throw Error(r(459));var e=go;return go=null,e}function Ph(e){if(e===Go||e===Fs)throw Error(r(483))}var Vo=null,Ui=0;function Ws(e){var o=Ui;return Ui+=1,Vo===null&&(Vo=[]),Bh(Vo,e,o)}function zi(e,o){o=o.props.ref,e.ref=o!==void 0?o:null}function Js(e,o){throw o.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(o),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":e)))}function Gh(e){function o(N,b){if(e){var I=N.deletions;I===null?(N.deletions=[b],N.flags|=16):I.push(b)}}function s(N,b){if(!e)return null;for(;b!==null;)o(N,b),b=b.sibling;return null}function l(N){for(var b=new Map;N!==null;)N.key!==null?b.set(N.key,N):b.set(N.index,N),N=N.sibling;return b}function d(N,b){return N=sn(N,b),N.index=0,N.sibling=null,N}function p(N,b,I){return N.index=I,e?(I=N.alternate,I!==null?(I=I.index,I<b?(N.flags|=67108866,b):I):(N.flags|=67108866,b)):(N.flags|=1048576,b)}function S(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function E(N,b,I,G){return b===null||b.tag!==6?(b=Fa(I,N.mode,G),b.return=N,b):(b=d(b,I),b.return=N,b)}function w(N,b,I,G){var ie=I.type;return ie===M?B(N,b,I.props.children,G,I.key):b!==null&&(b.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===re&&ho(ie)===b.type)?(b=d(b,I.props),zi(b,I),b.return=N,b):(b=qs(I.type,I.key,I.props,null,N.mode,G),zi(b,I),b.return=N,b)}function D(N,b,I,G){return b===null||b.tag!==4||b.stateNode.containerInfo!==I.containerInfo||b.stateNode.implementation!==I.implementation?(b=Ya(I,N.mode,G),b.return=N,b):(b=d(b,I.children||[]),b.return=N,b)}function B(N,b,I,G,ie){return b===null||b.tag!==7?(b=ro(I,N.mode,G,ie),b.return=N,b):(b=d(b,I),b.return=N,b)}function O(N,b,I){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Fa(""+b,N.mode,I),b.return=N,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case C:return I=qs(b.type,b.key,b.props,null,N.mode,I),zi(I,b),I.return=N,I;case A:return b=Ya(b,N.mode,I),b.return=N,b;case re:return b=ho(b),O(N,b,I)}if(Re(b)||be(b))return b=ro(b,N.mode,I,null),b.return=N,b;if(typeof b.then=="function")return O(N,Ws(b),I);if(b.$$typeof===P)return O(N,Vs(N,b),I);Js(N,b)}return null}function k(N,b,I,G){var ie=b!==null?b.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return ie!==null?null:E(N,b,""+I,G);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case C:return I.key===ie?w(N,b,I,G):null;case A:return I.key===ie?D(N,b,I,G):null;case re:return I=ho(I),k(N,b,I,G)}if(Re(I)||be(I))return ie!==null?null:B(N,b,I,G,null);if(typeof I.then=="function")return k(N,b,Ws(I),G);if(I.$$typeof===P)return k(N,b,Vs(N,I),G);Js(N,I)}return null}function z(N,b,I,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return N=N.get(I)||null,E(b,N,""+G,ie);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case C:return N=N.get(G.key===null?I:G.key)||null,w(b,N,G,ie);case A:return N=N.get(G.key===null?I:G.key)||null,D(b,N,G,ie);case re:return G=ho(G),z(N,b,I,G,ie)}if(Re(G)||be(G))return N=N.get(I)||null,B(b,N,G,ie,null);if(typeof G.then=="function")return z(N,b,I,Ws(G),ie);if(G.$$typeof===P)return z(N,b,I,Vs(b,G),ie);Js(b,G)}return null}function ee(N,b,I,G){for(var ie=null,Ee=null,ne=b,ge=b=0,ye=null;ne!==null&&ge<I.length;ge++){ne.index>ge?(ye=ne,ne=null):ye=ne.sibling;var Ce=k(N,ne,I[ge],G);if(Ce===null){ne===null&&(ne=ye);break}e&&ne&&Ce.alternate===null&&o(N,ne),b=p(Ce,b,ge),Ee===null?ie=Ce:Ee.sibling=Ce,Ee=Ce,ne=ye}if(ge===I.length)return s(N,ne),ve&&rn(N,ge),ie;if(ne===null){for(;ge<I.length;ge++)ne=O(N,I[ge],G),ne!==null&&(b=p(ne,b,ge),Ee===null?ie=ne:Ee.sibling=ne,Ee=ne);return ve&&rn(N,ge),ie}for(ne=l(ne);ge<I.length;ge++)ye=z(ne,N,ge,I[ge],G),ye!==null&&(e&&ye.alternate!==null&&ne.delete(ye.key===null?ge:ye.key),b=p(ye,b,ge),Ee===null?ie=ye:Ee.sibling=ye,Ee=ye);return e&&ne.forEach(function(Xn){return o(N,Xn)}),ve&&rn(N,ge),ie}function se(N,b,I,G){if(I==null)throw Error(r(151));for(var ie=null,Ee=null,ne=b,ge=b=0,ye=null,Ce=I.next();ne!==null&&!Ce.done;ge++,Ce=I.next()){ne.index>ge?(ye=ne,ne=null):ye=ne.sibling;var Xn=k(N,ne,Ce.value,G);if(Xn===null){ne===null&&(ne=ye);break}e&&ne&&Xn.alternate===null&&o(N,ne),b=p(Xn,b,ge),Ee===null?ie=Xn:Ee.sibling=Xn,Ee=Xn,ne=ye}if(Ce.done)return s(N,ne),ve&&rn(N,ge),ie;if(ne===null){for(;!Ce.done;ge++,Ce=I.next())Ce=O(N,Ce.value,G),Ce!==null&&(b=p(Ce,b,ge),Ee===null?ie=Ce:Ee.sibling=Ce,Ee=Ce);return ve&&rn(N,ge),ie}for(ne=l(ne);!Ce.done;ge++,Ce=I.next())Ce=z(ne,N,ge,Ce.value,G),Ce!==null&&(e&&Ce.alternate!==null&&ne.delete(Ce.key===null?ge:Ce.key),b=p(Ce,b,ge),Ee===null?ie=Ce:Ee.sibling=Ce,Ee=Ce);return e&&ne.forEach(function(v0){return o(N,v0)}),ve&&rn(N,ge),ie}function ze(N,b,I,G){if(typeof I=="object"&&I!==null&&I.type===M&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case C:e:{for(var ie=I.key;b!==null;){if(b.key===ie){if(ie=I.type,ie===M){if(b.tag===7){s(N,b.sibling),G=d(b,I.props.children),G.return=N,N=G;break e}}else if(b.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===re&&ho(ie)===b.type){s(N,b.sibling),G=d(b,I.props),zi(G,I),G.return=N,N=G;break e}s(N,b);break}else o(N,b);b=b.sibling}I.type===M?(G=ro(I.props.children,N.mode,G,I.key),G.return=N,N=G):(G=qs(I.type,I.key,I.props,null,N.mode,G),zi(G,I),G.return=N,N=G)}return S(N);case A:e:{for(ie=I.key;b!==null;){if(b.key===ie)if(b.tag===4&&b.stateNode.containerInfo===I.containerInfo&&b.stateNode.implementation===I.implementation){s(N,b.sibling),G=d(b,I.children||[]),G.return=N,N=G;break e}else{s(N,b);break}else o(N,b);b=b.sibling}G=Ya(I,N.mode,G),G.return=N,N=G}return S(N);case re:return I=ho(I),ze(N,b,I,G)}if(Re(I))return ee(N,b,I,G);if(be(I)){if(ie=be(I),typeof ie!="function")throw Error(r(150));return I=ie.call(I),se(N,b,I,G)}if(typeof I.then=="function")return ze(N,b,Ws(I),G);if(I.$$typeof===P)return ze(N,b,Vs(N,I),G);Js(N,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,b!==null&&b.tag===6?(s(N,b.sibling),G=d(b,I),G.return=N,N=G):(s(N,b),G=Fa(I,N.mode,G),G.return=N,N=G),S(N)):s(N,b)}return function(N,b,I,G){try{Ui=0;var ie=ze(N,b,I,G);return Vo=null,ie}catch(ne){if(ne===Go||ne===Fs)throw ne;var Ee=Ct(29,ne,null,N.mode);return Ee.lanes=G,Ee.return=N,Ee}finally{}}}var fo=Gh(!0),Vh=Gh(!1),Dn=!1;function ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function il(e,o){e=e.updateQueue,o.updateQueue===e&&(o.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Un(e,o,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(xe&2)!==0){var d=l.pending;return d===null?o.next=o:(o.next=d.next,d.next=o),l.pending=o,o=Bs(e),wh(e,null,s),o}return Hs(e,l,o,s),Bs(e)}function Li(e,o,s){if(o=o.updateQueue,o!==null&&(o=o.shared,(s&4194048)!==0)){var l=o.lanes;l&=e.pendingLanes,s|=l,o.lanes=s,kc(e,s)}}function sl(e,o){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var d=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?d=p=S:p=p.next=S,s=s.next}while(s!==null);p===null?d=p=o:p=p.next=o}else d=p=o;s={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=o:e.next=o,s.lastBaseUpdate=o}var rl=!1;function Hi(){if(rl){var e=Po;if(e!==null)throw e}}function Bi(e,o,s,l){rl=!1;var d=e.updateQueue;Dn=!1;var p=d.firstBaseUpdate,S=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var w=E,D=w.next;w.next=null,S===null?p=D:S.next=D,S=w;var B=e.alternate;B!==null&&(B=B.updateQueue,E=B.lastBaseUpdate,E!==S&&(E===null?B.firstBaseUpdate=D:E.next=D,B.lastBaseUpdate=w))}if(p!==null){var O=d.baseState;S=0,B=D=w=null,E=p;do{var k=E.lane&-536870913,z=k!==E.lane;if(z?(pe&k)===k:(l&k)===k){k!==0&&k===qo&&(rl=!0),B!==null&&(B=B.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ee=e,se=E;k=o;var ze=s;switch(se.tag){case 1:if(ee=se.payload,typeof ee=="function"){O=ee.call(ze,O,k);break e}O=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=se.payload,k=typeof ee=="function"?ee.call(ze,O,k):ee,k==null)break e;O=T({},O,k);break e;case 2:Dn=!0}}k=E.callback,k!==null&&(e.flags|=64,z&&(e.flags|=8192),z=d.callbacks,z===null?d.callbacks=[k]:z.push(k))}else z={lane:k,tag:E.tag,payload:E.payload,callback:E.callback,next:null},B===null?(D=B=z,w=O):B=B.next=z,S|=k;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;z=E,E=z.next,z.next=null,d.lastBaseUpdate=z,d.shared.pending=null}}while(!0);B===null&&(w=O),d.baseState=w,d.firstBaseUpdate=D,d.lastBaseUpdate=B,p===null&&(d.shared.lanes=0),qn|=S,e.lanes=S,e.memoizedState=O}}function Oh(e,o){if(typeof e!="function")throw Error(r(191,e));e.call(o)}function Fh(e,o){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Oh(s[e],o)}var Oo=R(null),Ks=R(0);function Yh(e,o){e=yn,$(Ks,e),$(Oo,o),yn=e|o.baseLanes}function al(){$(Ks,yn),$(Oo,Oo.current)}function ll(){yn=Ks.current,F(Oo),F(Ks)}var At=R(null),Ht=null;function zn(e){var o=e.alternate;$(Fe,Fe.current&1),$(At,e),Ht===null&&(o===null||Oo.current!==null||o.memoizedState!==null)&&(Ht=e)}function ul(e){$(Fe,Fe.current),$(At,e),Ht===null&&(Ht=e)}function Wh(e){e.tag===22?($(Fe,Fe.current),$(At,e),Ht===null&&(Ht=e)):Ln()}function Ln(){$(Fe,Fe.current),$(At,At.current)}function wt(e){F(At),Ht===e&&(Ht=null),F(Fe)}var Fe=R(0);function Xs(e){for(var o=e;o!==null;){if(o.tag===13){var s=o.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||mu(s)||pu(s)))return o}else if(o.tag===19&&(o.memoizedProps.revealOrder==="forwards"||o.memoizedProps.revealOrder==="backwards"||o.memoizedProps.revealOrder==="unstable_legacy-backwards"||o.memoizedProps.revealOrder==="together")){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var un=0,he=null,ke=null,Je=null,Qs=!1,Fo=!1,mo=!1,Zs=0,qi=0,Yo=null,lT=0;function Ge(){throw Error(r(321))}function cl(e,o){if(o===null)return!1;for(var s=0;s<o.length&&s<e.length;s++)if(!Et(e[s],o[s]))return!1;return!0}function hl(e,o,s,l,d,p){return un=p,he=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,H.H=e===null||e.memoizedState===null?Mg:xl,mo=!1,p=s(l,d),mo=!1,Fo&&(p=Kh(o,s,l,d)),Jh(e),p}function Jh(e){H.H=Vi;var o=ke!==null&&ke.next!==null;if(un=0,Je=ke=he=null,Qs=!1,qi=0,Yo=null,o)throw Error(r(300));e===null||Ke||(e=e.dependencies,e!==null&&Gs(e)&&(Ke=!0))}function Kh(e,o,s,l){he=e;var d=0;do{if(Fo&&(Yo=null),qi=0,Fo=!1,25<=d)throw Error(r(301));if(d+=1,Je=ke=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}H.H=Ng,p=o(s,l)}while(Fo);return p}function uT(){var e=H.H,o=e.useState()[0];return o=typeof o.then=="function"?Pi(o):o,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(he.flags|=1024),o}function gl(){var e=Zs!==0;return Zs=0,e}function dl(e,o,s){o.updateQueue=e.updateQueue,o.flags&=-2053,e.lanes&=~s}function fl(e){if(Qs){for(e=e.memoizedState;e!==null;){var o=e.queue;o!==null&&(o.pending=null),e=e.next}Qs=!1}un=0,Je=ke=he=null,Fo=!1,qi=Zs=0,Yo=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?he.memoizedState=Je=e:Je=Je.next=e,Je}function Ye(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var o=Je===null?he.memoizedState:Je.next;if(o!==null)Je=o,ke=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Je===null?he.memoizedState=Je=e:Je=Je.next=e}return Je}function $s(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pi(e){var o=qi;return qi+=1,Yo===null&&(Yo=[]),e=Bh(Yo,e,o),o=he,(Je===null?o.memoizedState:Je.next)===null&&(o=o.alternate,H.H=o===null||o.memoizedState===null?Mg:xl),e}function js(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pi(e);if(e.$$typeof===P)return it(e)}throw Error(r(438,String(e)))}function ml(e){var o=null,s=he.updateQueue;if(s!==null&&(o=s.memoCache),o==null){var l=he.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(o={data:l.data.map(function(d){return d.slice()}),index:0})))}if(o==null&&(o={data:[],index:0}),s===null&&(s=$s(),he.updateQueue=s),s.memoCache=o,s=o.data[o.index],s===void 0)for(s=o.data[o.index]=Array(e),l=0;l<e;l++)s[l]=ue;return o.index++,s}function cn(e,o){return typeof o=="function"?o(e):o}function er(e){var o=Ye();return pl(o,ke,e)}function pl(e,o,s){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var d=e.baseQueue,p=l.pending;if(p!==null){if(d!==null){var S=d.next;d.next=p.next,p.next=S}o.baseQueue=d=p,l.pending=null}if(p=e.baseState,d===null)e.memoizedState=p;else{o=d.next;var E=S=null,w=null,D=o,B=!1;do{var O=D.lane&-536870913;if(O!==D.lane?(pe&O)===O:(un&O)===O){var k=D.revertLane;if(k===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),O===qo&&(B=!0);else if((un&k)===k){D=D.next,k===qo&&(B=!0);continue}else O={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},w===null?(E=w=O,S=p):w=w.next=O,he.lanes|=k,qn|=k;O=D.action,mo&&s(p,O),p=D.hasEagerState?D.eagerState:s(p,O)}else k={lane:O,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},w===null?(E=w=k,S=p):w=w.next=k,he.lanes|=O,qn|=O;D=D.next}while(D!==null&&D!==o);if(w===null?S=p:w.next=E,!Et(p,e.memoizedState)&&(Ke=!0,B&&(s=Po,s!==null)))throw s;e.memoizedState=p,e.baseState=S,e.baseQueue=w,l.lastRenderedState=p}return d===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function yl(e){var o=Ye(),s=o.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var l=s.dispatch,d=s.pending,p=o.memoizedState;if(d!==null){s.pending=null;var S=d=d.next;do p=e(p,S.action),S=S.next;while(S!==d);Et(p,o.memoizedState)||(Ke=!0),o.memoizedState=p,o.baseQueue===null&&(o.baseState=p),s.lastRenderedState=p}return[p,l]}function Xh(e,o,s){var l=he,d=Ye(),p=ve;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=o();var S=!Et((ke||d).memoizedState,s);if(S&&(d.memoizedState=s,Ke=!0),d=d.queue,_l($h.bind(null,l,d,e),[e]),d.getSnapshot!==o||S||Je!==null&&Je.memoizedState.tag&1){if(l.flags|=2048,Wo(9,{destroy:void 0},Zh.bind(null,l,d,s,o),null),He===null)throw Error(r(349));p||(un&127)!==0||Qh(l,o,s)}return s}function Qh(e,o,s){e.flags|=16384,e={getSnapshot:o,value:s},o=he.updateQueue,o===null?(o=$s(),he.updateQueue=o,o.stores=[e]):(s=o.stores,s===null?o.stores=[e]:s.push(e))}function Zh(e,o,s,l){o.value=s,o.getSnapshot=l,jh(o)&&eg(e)}function $h(e,o,s){return s(function(){jh(o)&&eg(e)})}function jh(e){var o=e.getSnapshot;e=e.value;try{var s=o();return!Et(e,s)}catch{return!0}}function eg(e){var o=so(e,2);o!==null&&vt(o,e,2)}function vl(e){var o=ut();if(typeof e=="function"){var s=e;if(e=s(),mo){wn(!0);try{s()}finally{wn(!1)}}}return o.memoizedState=o.baseState=e,o.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:e},o}function tg(e,o,s,l){return e.baseState=s,pl(e,ke,typeof l=="function"?l:cn)}function cT(e,o,s,l,d){if(or(e))throw Error(r(485));if(e=o.action,e!==null){var p={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};H.T!==null?s(!0):p.isTransition=!1,l(p),s=o.pending,s===null?(p.next=o.pending=p,ng(o,p)):(p.next=s.next,o.pending=s.next=p)}}function ng(e,o){var s=o.action,l=o.payload,d=e.state;if(o.isTransition){var p=H.T,S={};H.T=S;try{var E=s(d,l),w=H.S;w!==null&&w(S,E),og(e,o,E)}catch(D){Tl(e,o,D)}finally{p!==null&&S.types!==null&&(p.types=S.types),H.T=p}}else try{p=s(d,l),og(e,o,p)}catch(D){Tl(e,o,D)}}function og(e,o,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){ig(e,o,l)},function(l){return Tl(e,o,l)}):ig(e,o,s)}function ig(e,o,s){o.status="fulfilled",o.value=s,sg(o),e.state=s,o=e.pending,o!==null&&(s=o.next,s===o?e.pending=null:(s=s.next,o.next=s,ng(e,s)))}function Tl(e,o,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do o.status="rejected",o.reason=s,sg(o),o=o.next;while(o!==l)}e.action=null}function sg(e){e=e.listeners;for(var o=0;o<e.length;o++)(0,e[o])()}function rg(e,o){return o}function ag(e,o){if(ve){var s=He.formState;if(s!==null){e:{var l=he;if(ve){if(Be){t:{for(var d=Be,p=Lt;d.nodeType!==8;){if(!p){d=null;break t}if(d=Bt(d.nextSibling),d===null){d=null;break t}}p=d.data,d=p==="F!"||p==="F"?d:null}if(d){Be=Bt(d.nextSibling),l=d.data==="F!";break e}}Nn(l)}l=!1}l&&(o=s[0])}}return s=ut(),s.memoizedState=s.baseState=o,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rg,lastRenderedState:o},s.queue=l,s=xg.bind(null,he,l),l.dispatch=s,l=vl(!1),p=wl.bind(null,he,!1,l.queue),l=ut(),d={state:o,dispatch:null,action:e,pending:null},l.queue=d,s=cT.bind(null,he,d,p,s),d.dispatch=s,l.memoizedState=e,[o,s,!1]}function lg(e){var o=Ye();return ug(o,ke,e)}function ug(e,o,s){if(o=pl(e,o,rg)[0],e=er(cn)[0],typeof o=="object"&&o!==null&&typeof o.then=="function")try{var l=Pi(o)}catch(S){throw S===Go?Fs:S}else l=o;o=Ye();var d=o.queue,p=d.dispatch;return s!==o.memoizedState&&(he.flags|=2048,Wo(9,{destroy:void 0},hT.bind(null,d,s),null)),[l,p,e]}function hT(e,o){e.action=o}function cg(e){var o=Ye(),s=ke;if(s!==null)return ug(o,s,e);Ye(),o=o.memoizedState,s=Ye();var l=s.queue.dispatch;return s.memoizedState=e,[o,l,!1]}function Wo(e,o,s,l){return e={tag:e,create:s,deps:l,inst:o,next:null},o=he.updateQueue,o===null&&(o=$s(),he.updateQueue=o),s=o.lastEffect,s===null?o.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,o.lastEffect=e),e}function hg(){return Ye().memoizedState}function tr(e,o,s,l){var d=ut();he.flags|=e,d.memoizedState=Wo(1|o,{destroy:void 0},s,l===void 0?null:l)}function nr(e,o,s,l){var d=Ye();l=l===void 0?null:l;var p=d.memoizedState.inst;ke!==null&&l!==null&&cl(l,ke.memoizedState.deps)?d.memoizedState=Wo(o,p,s,l):(he.flags|=e,d.memoizedState=Wo(1|o,p,s,l))}function gg(e,o){tr(8390656,8,e,o)}function _l(e,o){nr(2048,8,e,o)}function gT(e){he.flags|=4;var o=he.updateQueue;if(o===null)o=$s(),he.updateQueue=o,o.events=[e];else{var s=o.events;s===null?o.events=[e]:s.push(e)}}function dg(e){var o=Ye().memoizedState;return gT({ref:o,nextImpl:e}),function(){if((xe&2)!==0)throw Error(r(440));return o.impl.apply(void 0,arguments)}}function fg(e,o){return nr(4,2,e,o)}function mg(e,o){return nr(4,4,e,o)}function pg(e,o){if(typeof o=="function"){e=e();var s=o(e);return function(){typeof s=="function"?s():o(null)}}if(o!=null)return e=e(),o.current=e,function(){o.current=null}}function yg(e,o,s){s=s!=null?s.concat([e]):null,nr(4,4,pg.bind(null,o,e),s)}function Sl(){}function vg(e,o){var s=Ye();o=o===void 0?null:o;var l=s.memoizedState;return o!==null&&cl(o,l[1])?l[0]:(s.memoizedState=[e,o],e)}function Tg(e,o){var s=Ye();o=o===void 0?null:o;var l=s.memoizedState;if(o!==null&&cl(o,l[1]))return l[0];if(l=e(),mo){wn(!0);try{e()}finally{wn(!1)}}return s.memoizedState=[l,o],l}function El(e,o,s){return s===void 0||(un&1073741824)!==0&&(pe&261930)===0?e.memoizedState=o:(e.memoizedState=s,e=_d(),he.lanes|=e,qn|=e,s)}function _g(e,o,s,l){return Et(s,o)?s:Oo.current!==null?(e=El(e,s,l),Et(e,o)||(Ke=!0),e):(un&42)===0||(un&1073741824)!==0&&(pe&261930)===0?(Ke=!0,e.memoizedState=s):(e=_d(),he.lanes|=e,qn|=e,o)}function Sg(e,o,s,l,d){var p=X.p;X.p=p!==0&&8>p?p:8;var S=H.T,E={};H.T=E,wl(e,!1,o,s);try{var w=d(),D=H.S;if(D!==null&&D(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var B=aT(w,l);Gi(e,o,B,Rt(e))}else Gi(e,o,l,Rt(e))}catch(O){Gi(e,o,{then:function(){},status:"rejected",reason:O},Rt())}finally{X.p=p,S!==null&&E.types!==null&&(S.types=E.types),H.T=S}}function dT(){}function Cl(e,o,s,l){if(e.tag!==5)throw Error(r(476));var d=Eg(e).queue;Sg(e,d,o,oe,s===null?dT:function(){return Cg(e),s(l)})}function Eg(e){var o=e.memoizedState;if(o!==null)return o;o={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:oe},next:null};var s={};return o.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:s},next:null},e.memoizedState=o,e=e.alternate,e!==null&&(e.memoizedState=o),o}function Cg(e){var o=Eg(e);o.next===null&&(o=e.alternate.memoizedState),Gi(e,o.next.queue,{},Rt())}function Al(){return it(is)}function Ag(){return Ye().memoizedState}function wg(){return Ye().memoizedState}function fT(e){for(var o=e.return;o!==null;){switch(o.tag){case 24:case 3:var s=Rt();e=kn(s);var l=Un(o,e,s);l!==null&&(vt(l,o,s),Li(l,o,s)),o={cache:ja()},e.payload=o;return}o=o.return}}function mT(e,o,s){var l=Rt();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},or(e)?bg(o,s):(s=Va(e,o,s,l),s!==null&&(vt(s,e,l),Rg(s,o,l)))}function xg(e,o,s){var l=Rt();Gi(e,o,s,l)}function Gi(e,o,s,l){var d={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(or(e))bg(o,d);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=o.lastRenderedReducer,p!==null))try{var S=o.lastRenderedState,E=p(S,s);if(d.hasEagerState=!0,d.eagerState=E,Et(E,S))return Hs(e,o,d,0),He===null&&Ls(),!1}catch{}finally{}if(s=Va(e,o,d,l),s!==null)return vt(s,e,l),Rg(s,o,l),!0}return!1}function wl(e,o,s,l){if(l={lane:2,revertLane:ou(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},or(e)){if(o)throw Error(r(479))}else o=Va(e,s,l,2),o!==null&&vt(o,e,2)}function or(e){var o=e.alternate;return e===he||o!==null&&o===he}function bg(e,o){Fo=Qs=!0;var s=e.pending;s===null?o.next=o:(o.next=s.next,s.next=o),e.pending=o}function Rg(e,o,s){if((s&4194048)!==0){var l=o.lanes;l&=e.pendingLanes,s|=l,o.lanes=s,kc(e,s)}}var Vi={readContext:it,use:js,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};Vi.useEffectEvent=Ge;var Mg={readContext:it,use:js,useCallback:function(e,o){return ut().memoizedState=[e,o===void 0?null:o],e},useContext:it,useEffect:gg,useImperativeHandle:function(e,o,s){s=s!=null?s.concat([e]):null,tr(4194308,4,pg.bind(null,o,e),s)},useLayoutEffect:function(e,o){return tr(4194308,4,e,o)},useInsertionEffect:function(e,o){tr(4,2,e,o)},useMemo:function(e,o){var s=ut();o=o===void 0?null:o;var l=e();if(mo){wn(!0);try{e()}finally{wn(!1)}}return s.memoizedState=[l,o],l},useReducer:function(e,o,s){var l=ut();if(s!==void 0){var d=s(o);if(mo){wn(!0);try{s(o)}finally{wn(!1)}}}else d=o;return l.memoizedState=l.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},l.queue=e,e=e.dispatch=mT.bind(null,he,e),[l.memoizedState,e]},useRef:function(e){var o=ut();return e={current:e},o.memoizedState=e},useState:function(e){e=vl(e);var o=e.queue,s=xg.bind(null,he,o);return o.dispatch=s,[e.memoizedState,s]},useDebugValue:Sl,useDeferredValue:function(e,o){var s=ut();return El(s,e,o)},useTransition:function(){var e=vl(!1);return e=Sg.bind(null,he,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,o,s){var l=he,d=ut();if(ve){if(s===void 0)throw Error(r(407));s=s()}else{if(s=o(),He===null)throw Error(r(349));(pe&127)!==0||Qh(l,o,s)}d.memoizedState=s;var p={value:s,getSnapshot:o};return d.queue=p,gg($h.bind(null,l,p,e),[e]),l.flags|=2048,Wo(9,{destroy:void 0},Zh.bind(null,l,p,s,o),null),s},useId:function(){var e=ut(),o=He.identifierPrefix;if(ve){var s=Qt,l=Xt;s=(l&~(1<<32-St(l)-1)).toString(32)+s,o="_"+o+"R_"+s,s=Zs++,0<s&&(o+="H"+s.toString(32)),o+="_"}else s=lT++,o="_"+o+"r_"+s.toString(32)+"_";return e.memoizedState=o},useHostTransitionStatus:Al,useFormState:ag,useActionState:ag,useOptimistic:function(e){var o=ut();o.memoizedState=o.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return o.queue=s,o=wl.bind(null,he,!0,s),s.dispatch=o,[e,o]},useMemoCache:ml,useCacheRefresh:function(){return ut().memoizedState=fT.bind(null,he)},useEffectEvent:function(e){var o=ut(),s={impl:e};return o.memoizedState=s,function(){if((xe&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},xl={readContext:it,use:js,useCallback:vg,useContext:it,useEffect:_l,useImperativeHandle:yg,useInsertionEffect:fg,useLayoutEffect:mg,useMemo:Tg,useReducer:er,useRef:hg,useState:function(){return er(cn)},useDebugValue:Sl,useDeferredValue:function(e,o){var s=Ye();return _g(s,ke.memoizedState,e,o)},useTransition:function(){var e=er(cn)[0],o=Ye().memoizedState;return[typeof e=="boolean"?e:Pi(e),o]},useSyncExternalStore:Xh,useId:Ag,useHostTransitionStatus:Al,useFormState:lg,useActionState:lg,useOptimistic:function(e,o){var s=Ye();return tg(s,ke,e,o)},useMemoCache:ml,useCacheRefresh:wg};xl.useEffectEvent=dg;var Ng={readContext:it,use:js,useCallback:vg,useContext:it,useEffect:_l,useImperativeHandle:yg,useInsertionEffect:fg,useLayoutEffect:mg,useMemo:Tg,useReducer:yl,useRef:hg,useState:function(){return yl(cn)},useDebugValue:Sl,useDeferredValue:function(e,o){var s=Ye();return ke===null?El(s,e,o):_g(s,ke.memoizedState,e,o)},useTransition:function(){var e=yl(cn)[0],o=Ye().memoizedState;return[typeof e=="boolean"?e:Pi(e),o]},useSyncExternalStore:Xh,useId:Ag,useHostTransitionStatus:Al,useFormState:cg,useActionState:cg,useOptimistic:function(e,o){var s=Ye();return ke!==null?tg(s,ke,e,o):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:ml,useCacheRefresh:wg};Ng.useEffectEvent=dg;function bl(e,o,s,l){o=e.memoizedState,s=s(l,o),s=s==null?o:T({},o,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Rl={enqueueSetState:function(e,o,s){e=e._reactInternals;var l=Rt(),d=kn(l);d.payload=o,s!=null&&(d.callback=s),o=Un(e,d,l),o!==null&&(vt(o,e,l),Li(o,e,l))},enqueueReplaceState:function(e,o,s){e=e._reactInternals;var l=Rt(),d=kn(l);d.tag=1,d.payload=o,s!=null&&(d.callback=s),o=Un(e,d,l),o!==null&&(vt(o,e,l),Li(o,e,l))},enqueueForceUpdate:function(e,o){e=e._reactInternals;var s=Rt(),l=kn(s);l.tag=2,o!=null&&(l.callback=o),o=Un(e,l,s),o!==null&&(vt(o,e,s),Li(o,e,s))}};function Ig(e,o,s,l,d,p,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,S):o.prototype&&o.prototype.isPureReactComponent?!Ri(s,l)||!Ri(d,p):!0}function Dg(e,o,s,l){e=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(s,l),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(s,l),o.state!==e&&Rl.enqueueReplaceState(o,o.state,null)}function po(e,o){var s=o;if("ref"in o){s={};for(var l in o)l!=="ref"&&(s[l]=o[l])}if(e=e.defaultProps){s===o&&(s=T({},s));for(var d in e)s[d]===void 0&&(s[d]=e[d])}return s}function kg(e){zs(e)}function Ug(e){console.error(e)}function zg(e){zs(e)}function ir(e,o){try{var s=e.onUncaughtError;s(o.value,{componentStack:o.stack})}catch(l){setTimeout(function(){throw l})}}function Lg(e,o,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:o.tag===1?o.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Ml(e,o,s){return s=kn(s),s.tag=3,s.payload={element:null},s.callback=function(){ir(e,o)},s}function Hg(e){return e=kn(e),e.tag=3,e}function Bg(e,o,s,l){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var p=l.value;e.payload=function(){return d(p)},e.callback=function(){Lg(o,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Lg(o,s,l),typeof d!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function pT(e,o,s,l,d){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(o=s.alternate,o!==null&&Bo(o,s,d,!0),s=At.current,s!==null){switch(s.tag){case 31:case 13:return Ht===null?pr():s.alternate===null&&Ve===0&&(Ve=3),s.flags&=-257,s.flags|=65536,s.lanes=d,l===Ys?s.flags|=16384:(o=s.updateQueue,o===null?s.updateQueue=new Set([l]):o.add(l),eu(e,l,d)),!1;case 22:return s.flags|=65536,l===Ys?s.flags|=16384:(o=s.updateQueue,o===null?(o={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=o):(s=o.retryQueue,s===null?o.retryQueue=new Set([l]):s.add(l)),eu(e,l,d)),!1}throw Error(r(435,s.tag))}return eu(e,l,d),pr(),!1}if(ve)return o=At.current,o!==null?((o.flags&65536)===0&&(o.flags|=256),o.flags|=65536,o.lanes=d,l!==Ka&&(e=Error(r(422),{cause:l}),Ii(kt(e,s)))):(l!==Ka&&(o=Error(r(423),{cause:l}),Ii(kt(o,s))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,l=kt(l,s),d=Ml(e.stateNode,l,d),sl(e,d),Ve!==4&&(Ve=2)),!1;var p=Error(r(520),{cause:l});if(p=kt(p,s),Qi===null?Qi=[p]:Qi.push(p),Ve!==4&&(Ve=2),o===null)return!0;l=kt(l,s),s=o;do{switch(s.tag){case 3:return s.flags|=65536,e=d&-d,s.lanes|=e,e=Ml(s.stateNode,l,e),sl(s,e),!1;case 1:if(o=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof o.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pn===null||!Pn.has(p))))return s.flags|=65536,d&=-d,s.lanes|=d,d=Hg(d),Bg(d,e,s,l),sl(s,d),!1}s=s.return}while(s!==null);return!1}var Nl=Error(r(461)),Ke=!1;function st(e,o,s,l){o.child=e===null?Vh(o,null,s,l):fo(o,e.child,s,l)}function qg(e,o,s,l,d){s=s.render;var p=o.ref;if("ref"in l){var S={};for(var E in l)E!=="ref"&&(S[E]=l[E])}else S=l;return uo(o),l=hl(e,o,s,S,p,d),E=gl(),e!==null&&!Ke?(dl(e,o,d),hn(e,o,d)):(ve&&E&&Wa(o),o.flags|=1,st(e,o,l,d),o.child)}function Pg(e,o,s,l,d){if(e===null){var p=s.type;return typeof p=="function"&&!Oa(p)&&p.defaultProps===void 0&&s.compare===null?(o.tag=15,o.type=p,Gg(e,o,p,l,d)):(e=qs(s.type,null,l,o,o.mode,d),e.ref=o.ref,e.return=o,o.child=e)}if(p=e.child,!Bl(e,d)){var S=p.memoizedProps;if(s=s.compare,s=s!==null?s:Ri,s(S,l)&&e.ref===o.ref)return hn(e,o,d)}return o.flags|=1,e=sn(p,l),e.ref=o.ref,e.return=o,o.child=e}function Gg(e,o,s,l,d){if(e!==null){var p=e.memoizedProps;if(Ri(p,l)&&e.ref===o.ref)if(Ke=!1,o.pendingProps=l=p,Bl(e,d))(e.flags&131072)!==0&&(Ke=!0);else return o.lanes=e.lanes,hn(e,o,d)}return Il(e,o,s,l,d)}function Vg(e,o,s,l){var d=l.children,p=e!==null?e.memoizedState:null;if(e===null&&o.stateNode===null&&(o.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((o.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,e!==null){for(l=o.child=e.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~p}else l=0,o.child=null;return Og(e,o,p,s,l)}if((s&536870912)!==0)o.memoizedState={baseLanes:0,cachePool:null},e!==null&&Os(o,p!==null?p.cachePool:null),p!==null?Yh(o,p):al(),Wh(o);else return l=o.lanes=536870912,Og(e,o,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(Os(o,p.cachePool),Yh(o,p),Ln(),o.memoizedState=null):(e!==null&&Os(o,null),al(),Ln());return st(e,o,d,s),o.child}function Oi(e,o){return e!==null&&e.tag===22||o.stateNode!==null||(o.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.sibling}function Og(e,o,s,l,d){var p=tl();return p=p===null?null:{parent:We._currentValue,pool:p},o.memoizedState={baseLanes:s,cachePool:p},e!==null&&Os(o,null),al(),Wh(o),e!==null&&Bo(e,o,l,!0),o.childLanes=d,null}function sr(e,o){return o=ar({mode:o.mode,children:o.children},e.mode),o.ref=e.ref,e.child=o,o.return=e,o}function Fg(e,o,s){return fo(o,e.child,null,s),e=sr(o,o.pendingProps),e.flags|=2,wt(o),o.memoizedState=null,e}function yT(e,o,s){var l=o.pendingProps,d=(o.flags&128)!==0;if(o.flags&=-129,e===null){if(ve){if(l.mode==="hidden")return e=sr(o,l),o.lanes=536870912,Oi(null,e);if(ul(o),(e=Be)?(e=nf(e,Lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(o.memoizedState={dehydrated:e,treeContext:Rn!==null?{id:Xt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},s=bh(e),s.return=o,o.child=s,ot=o,Be=null)):e=null,e===null)throw Nn(o);return o.lanes=536870912,null}return sr(o,l)}var p=e.memoizedState;if(p!==null){var S=p.dehydrated;if(ul(o),d)if(o.flags&256)o.flags&=-257,o=Fg(e,o,s);else if(o.memoizedState!==null)o.child=e.child,o.flags|=128,o=null;else throw Error(r(558));else if(Ke||Bo(e,o,s,!1),d=(s&e.childLanes)!==0,Ke||d){if(l=He,l!==null&&(S=Uc(l,s),S!==0&&S!==p.retryLane))throw p.retryLane=S,so(e,S),vt(l,e,S),Nl;pr(),o=Fg(e,o,s)}else e=p.treeContext,Be=Bt(S.nextSibling),ot=o,ve=!0,Mn=null,Lt=!1,e!==null&&Nh(o,e),o=sr(o,l),o.flags|=4096;return o}return e=sn(e.child,{mode:l.mode,children:l.children}),e.ref=o.ref,o.child=e,e.return=o,e}function rr(e,o){var s=o.ref;if(s===null)e!==null&&e.ref!==null&&(o.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(o.flags|=4194816)}}function Il(e,o,s,l,d){return uo(o),s=hl(e,o,s,l,void 0,d),l=gl(),e!==null&&!Ke?(dl(e,o,d),hn(e,o,d)):(ve&&l&&Wa(o),o.flags|=1,st(e,o,s,d),o.child)}function Yg(e,o,s,l,d,p){return uo(o),o.updateQueue=null,s=Kh(o,l,s,d),Jh(e),l=gl(),e!==null&&!Ke?(dl(e,o,p),hn(e,o,p)):(ve&&l&&Wa(o),o.flags|=1,st(e,o,s,p),o.child)}function Wg(e,o,s,l,d){if(uo(o),o.stateNode===null){var p=Uo,S=s.contextType;typeof S=="object"&&S!==null&&(p=it(S)),p=new s(l,p),o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Rl,o.stateNode=p,p._reactInternals=o,p=o.stateNode,p.props=l,p.state=o.memoizedState,p.refs={},ol(o),S=s.contextType,p.context=typeof S=="object"&&S!==null?it(S):Uo,p.state=o.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(bl(o,s,S,l),p.state=o.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&Rl.enqueueReplaceState(p,p.state,null),Bi(o,l,p,d),Hi(),p.state=o.memoizedState),typeof p.componentDidMount=="function"&&(o.flags|=4194308),l=!0}else if(e===null){p=o.stateNode;var E=o.memoizedProps,w=po(s,E);p.props=w;var D=p.context,B=s.contextType;S=Uo,typeof B=="object"&&B!==null&&(S=it(B));var O=s.getDerivedStateFromProps;B=typeof O=="function"||typeof p.getSnapshotBeforeUpdate=="function",E=o.pendingProps!==E,B||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E||D!==S)&&Dg(o,p,l,S),Dn=!1;var k=o.memoizedState;p.state=k,Bi(o,l,p,d),Hi(),D=o.memoizedState,E||k!==D||Dn?(typeof O=="function"&&(bl(o,s,O,l),D=o.memoizedState),(w=Dn||Ig(o,s,w,l,k,D,S))?(B||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(o.flags|=4194308)):(typeof p.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=l,o.memoizedState=D),p.props=l,p.state=D,p.context=S,l=w):(typeof p.componentDidMount=="function"&&(o.flags|=4194308),l=!1)}else{p=o.stateNode,il(e,o),S=o.memoizedProps,B=po(s,S),p.props=B,O=o.pendingProps,k=p.context,D=s.contextType,w=Uo,typeof D=="object"&&D!==null&&(w=it(D)),E=s.getDerivedStateFromProps,(D=typeof E=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==O||k!==w)&&Dg(o,p,l,w),Dn=!1,k=o.memoizedState,p.state=k,Bi(o,l,p,d),Hi();var z=o.memoizedState;S!==O||k!==z||Dn||e!==null&&e.dependencies!==null&&Gs(e.dependencies)?(typeof E=="function"&&(bl(o,s,E,l),z=o.memoizedState),(B=Dn||Ig(o,s,B,l,k,z,w)||e!==null&&e.dependencies!==null&&Gs(e.dependencies))?(D||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,z,w),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,z,w)),typeof p.componentDidUpdate=="function"&&(o.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&k===e.memoizedState||(o.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&k===e.memoizedState||(o.flags|=1024),o.memoizedProps=l,o.memoizedState=z),p.props=l,p.state=z,p.context=w,l=B):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&k===e.memoizedState||(o.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&k===e.memoizedState||(o.flags|=1024),l=!1)}return p=l,rr(e,o),l=(o.flags&128)!==0,p||l?(p=o.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),o.flags|=1,e!==null&&l?(o.child=fo(o,e.child,null,d),o.child=fo(o,null,s,d)):st(e,o,s,d),o.memoizedState=p.state,e=o.child):e=hn(e,o,d),e}function Jg(e,o,s,l){return ao(),o.flags|=256,st(e,o,s,l),o.child}var Dl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kl(e){return{baseLanes:e,cachePool:Lh()}}function Ul(e,o,s){return e=e!==null?e.childLanes&~s:0,o&&(e|=bt),e}function Kg(e,o,s){var l=o.pendingProps,d=!1,p=(o.flags&128)!==0,S;if((S=p)||(S=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),S&&(d=!0,o.flags&=-129),S=(o.flags&32)!==0,o.flags&=-33,e===null){if(ve){if(d?zn(o):Ln(),(e=Be)?(e=nf(e,Lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(o.memoizedState={dehydrated:e,treeContext:Rn!==null?{id:Xt,overflow:Qt}:null,retryLane:536870912,hydrationErrors:null},s=bh(e),s.return=o,o.child=s,ot=o,Be=null)):e=null,e===null)throw Nn(o);return pu(e)?o.lanes=32:o.lanes=536870912,null}var E=l.children;return l=l.fallback,d?(Ln(),d=o.mode,E=ar({mode:"hidden",children:E},d),l=ro(l,d,s,null),E.return=o,l.return=o,E.sibling=l,o.child=E,l=o.child,l.memoizedState=kl(s),l.childLanes=Ul(e,S,s),o.memoizedState=Dl,Oi(null,l)):(zn(o),zl(o,E))}var w=e.memoizedState;if(w!==null&&(E=w.dehydrated,E!==null)){if(p)o.flags&256?(zn(o),o.flags&=-257,o=Ll(e,o,s)):o.memoizedState!==null?(Ln(),o.child=e.child,o.flags|=128,o=null):(Ln(),E=l.fallback,d=o.mode,l=ar({mode:"visible",children:l.children},d),E=ro(E,d,s,null),E.flags|=2,l.return=o,E.return=o,l.sibling=E,o.child=l,fo(o,e.child,null,s),l=o.child,l.memoizedState=kl(s),l.childLanes=Ul(e,S,s),o.memoizedState=Dl,o=Oi(null,l));else if(zn(o),pu(E)){if(S=E.nextSibling&&E.nextSibling.dataset,S)var D=S.dgst;S=D,l=Error(r(419)),l.stack="",l.digest=S,Ii({value:l,source:null,stack:null}),o=Ll(e,o,s)}else if(Ke||Bo(e,o,s,!1),S=(s&e.childLanes)!==0,Ke||S){if(S=He,S!==null&&(l=Uc(S,s),l!==0&&l!==w.retryLane))throw w.retryLane=l,so(e,l),vt(S,e,l),Nl;mu(E)||pr(),o=Ll(e,o,s)}else mu(E)?(o.flags|=192,o.child=e.child,o=null):(e=w.treeContext,Be=Bt(E.nextSibling),ot=o,ve=!0,Mn=null,Lt=!1,e!==null&&Nh(o,e),o=zl(o,l.children),o.flags|=4096);return o}return d?(Ln(),E=l.fallback,d=o.mode,w=e.child,D=w.sibling,l=sn(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,D!==null?E=sn(D,E):(E=ro(E,d,s,null),E.flags|=2),E.return=o,l.return=o,l.sibling=E,o.child=l,Oi(null,l),l=o.child,E=e.child.memoizedState,E===null?E=kl(s):(d=E.cachePool,d!==null?(w=We._currentValue,d=d.parent!==w?{parent:w,pool:w}:d):d=Lh(),E={baseLanes:E.baseLanes|s,cachePool:d}),l.memoizedState=E,l.childLanes=Ul(e,S,s),o.memoizedState=Dl,Oi(e.child,l)):(zn(o),s=e.child,e=s.sibling,s=sn(s,{mode:"visible",children:l.children}),s.return=o,s.sibling=null,e!==null&&(S=o.deletions,S===null?(o.deletions=[e],o.flags|=16):S.push(e)),o.child=s,o.memoizedState=null,s)}function zl(e,o){return o=ar({mode:"visible",children:o},e.mode),o.return=e,e.child=o}function ar(e,o){return e=Ct(22,e,null,o),e.lanes=0,e}function Ll(e,o,s){return fo(o,e.child,null,s),e=zl(o,o.pendingProps.children),e.flags|=2,o.memoizedState=null,e}function Xg(e,o,s){e.lanes|=o;var l=e.alternate;l!==null&&(l.lanes|=o),Za(e.return,o,s)}function Hl(e,o,s,l,d,p){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:d,treeForkCount:p}:(S.isBackwards=o,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=d,S.treeForkCount=p)}function Qg(e,o,s){var l=o.pendingProps,d=l.revealOrder,p=l.tail;l=l.children;var S=Fe.current,E=(S&2)!==0;if(E?(S=S&1|2,o.flags|=128):S&=1,$(Fe,S),st(e,o,l,s),l=ve?Ni:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=o.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xg(e,s,o);else if(e.tag===19)Xg(e,s,o);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===o)break e;for(;e.sibling===null;){if(e.return===null||e.return===o)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(s=o.child,d=null;s!==null;)e=s.alternate,e!==null&&Xs(e)===null&&(d=s),s=s.sibling;s=d,s===null?(d=o.child,o.child=null):(d=s.sibling,s.sibling=null),Hl(o,!1,d,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,d=o.child,o.child=null;d!==null;){if(e=d.alternate,e!==null&&Xs(e)===null){o.child=d;break}e=d.sibling,d.sibling=s,s=d,d=e}Hl(o,!0,s,null,p,l);break;case"together":Hl(o,!1,null,null,void 0,l);break;default:o.memoizedState=null}return o.child}function hn(e,o,s){if(e!==null&&(o.dependencies=e.dependencies),qn|=o.lanes,(s&o.childLanes)===0)if(e!==null){if(Bo(e,o,s,!1),(s&o.childLanes)===0)return null}else return null;if(e!==null&&o.child!==e.child)throw Error(r(153));if(o.child!==null){for(e=o.child,s=sn(e,e.pendingProps),o.child=s,s.return=o;e.sibling!==null;)e=e.sibling,s=s.sibling=sn(e,e.pendingProps),s.return=o;s.sibling=null}return o.child}function Bl(e,o){return(e.lanes&o)!==0?!0:(e=e.dependencies,!!(e!==null&&Gs(e)))}function vT(e,o,s){switch(o.tag){case 3:lt(o,o.stateNode.containerInfo),In(o,We,e.memoizedState.cache),ao();break;case 27:case 5:mi(o);break;case 4:lt(o,o.stateNode.containerInfo);break;case 10:In(o,o.type,o.memoizedProps.value);break;case 31:if(o.memoizedState!==null)return o.flags|=128,ul(o),null;break;case 13:var l=o.memoizedState;if(l!==null)return l.dehydrated!==null?(zn(o),o.flags|=128,null):(s&o.child.childLanes)!==0?Kg(e,o,s):(zn(o),e=hn(e,o,s),e!==null?e.sibling:null);zn(o);break;case 19:var d=(e.flags&128)!==0;if(l=(s&o.childLanes)!==0,l||(Bo(e,o,s,!1),l=(s&o.childLanes)!==0),d){if(l)return Qg(e,o,s);o.flags|=128}if(d=o.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$(Fe,Fe.current),l)break;return null;case 22:return o.lanes=0,Vg(e,o,s,o.pendingProps);case 24:In(o,We,e.memoizedState.cache)}return hn(e,o,s)}function Zg(e,o,s){if(e!==null)if(e.memoizedProps!==o.pendingProps)Ke=!0;else{if(!Bl(e,s)&&(o.flags&128)===0)return Ke=!1,vT(e,o,s);Ke=(e.flags&131072)!==0}else Ke=!1,ve&&(o.flags&1048576)!==0&&Mh(o,Ni,o.index);switch(o.lanes=0,o.tag){case 16:e:{var l=o.pendingProps;if(e=ho(o.elementType),o.type=e,typeof e=="function")Oa(e)?(l=po(e,l),o.tag=1,o=Wg(null,o,e,l,s)):(o.tag=0,o=Il(null,o,e,l,s));else{if(e!=null){var d=e.$$typeof;if(d===J){o.tag=11,o=qg(null,o,e,l,s);break e}else if(d===K){o.tag=14,o=Pg(null,o,e,l,s);break e}}throw o=_e(e)||e,Error(r(306,o,""))}}return o;case 0:return Il(e,o,o.type,o.pendingProps,s);case 1:return l=o.type,d=po(l,o.pendingProps),Wg(e,o,l,d,s);case 3:e:{if(lt(o,o.stateNode.containerInfo),e===null)throw Error(r(387));l=o.pendingProps;var p=o.memoizedState;d=p.element,il(e,o),Bi(o,l,null,s);var S=o.memoizedState;if(l=S.cache,In(o,We,l),l!==p.cache&&$a(o,[We],s,!0),Hi(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},o.updateQueue.baseState=p,o.memoizedState=p,o.flags&256){o=Jg(e,o,l,s);break e}else if(l!==d){d=kt(Error(r(424)),o),Ii(d),o=Jg(e,o,l,s);break e}else{switch(e=o.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=Bt(e.firstChild),ot=o,ve=!0,Mn=null,Lt=!0,s=Vh(o,null,l,s),o.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ao(),l===d){o=hn(e,o,s);break e}st(e,o,l,s)}o=o.child}return o;case 26:return rr(e,o),e===null?(s=uf(o.type,null,o.pendingProps,null))?o.memoizedState=s:ve||(s=o.type,e=o.pendingProps,l=Cr(de.current).createElement(s),l[nt]=o,l[gt]=e,rt(l,s,e),$e(l),o.stateNode=l):o.memoizedState=uf(o.type,e.memoizedProps,o.pendingProps,e.memoizedState),null;case 27:return mi(o),e===null&&ve&&(l=o.stateNode=rf(o.type,o.pendingProps,de.current),ot=o,Lt=!0,d=Be,Fn(o.type)?(yu=d,Be=Bt(l.firstChild)):Be=d),st(e,o,o.pendingProps.children,s),rr(e,o),e===null&&(o.flags|=4194304),o.child;case 5:return e===null&&ve&&((d=l=Be)&&(l=KT(l,o.type,o.pendingProps,Lt),l!==null?(o.stateNode=l,ot=o,Be=Bt(l.firstChild),Lt=!1,d=!0):d=!1),d||Nn(o)),mi(o),d=o.type,p=o.pendingProps,S=e!==null?e.memoizedProps:null,l=p.children,gu(d,p)?l=null:S!==null&&gu(d,S)&&(o.flags|=32),o.memoizedState!==null&&(d=hl(e,o,uT,null,null,s),is._currentValue=d),rr(e,o),st(e,o,l,s),o.child;case 6:return e===null&&ve&&((e=s=Be)&&(s=XT(s,o.pendingProps,Lt),s!==null?(o.stateNode=s,ot=o,Be=null,e=!0):e=!1),e||Nn(o)),null;case 13:return Kg(e,o,s);case 4:return lt(o,o.stateNode.containerInfo),l=o.pendingProps,e===null?o.child=fo(o,null,l,s):st(e,o,l,s),o.child;case 11:return qg(e,o,o.type,o.pendingProps,s);case 7:return st(e,o,o.pendingProps,s),o.child;case 8:return st(e,o,o.pendingProps.children,s),o.child;case 12:return st(e,o,o.pendingProps.children,s),o.child;case 10:return l=o.pendingProps,In(o,o.type,l.value),st(e,o,l.children,s),o.child;case 9:return d=o.type._context,l=o.pendingProps.children,uo(o),d=it(d),l=l(d),o.flags|=1,st(e,o,l,s),o.child;case 14:return Pg(e,o,o.type,o.pendingProps,s);case 15:return Gg(e,o,o.type,o.pendingProps,s);case 19:return Qg(e,o,s);case 31:return yT(e,o,s);case 22:return Vg(e,o,s,o.pendingProps);case 24:return uo(o),l=it(We),e===null?(d=tl(),d===null&&(d=He,p=ja(),d.pooledCache=p,p.refCount++,p!==null&&(d.pooledCacheLanes|=s),d=p),o.memoizedState={parent:l,cache:d},ol(o),In(o,We,d)):((e.lanes&s)!==0&&(il(e,o),Bi(o,null,null,s),Hi()),d=e.memoizedState,p=o.memoizedState,d.parent!==l?(d={parent:l,cache:l},o.memoizedState=d,o.lanes===0&&(o.memoizedState=o.updateQueue.baseState=d),In(o,We,l)):(l=p.cache,In(o,We,l),l!==d.cache&&$a(o,[We],s,!0))),st(e,o,o.pendingProps.children,s),o.child;case 29:throw o.pendingProps}throw Error(r(156,o.tag))}function gn(e){e.flags|=4}function ql(e,o,s,l,d){if((o=(e.mode&32)!==0)&&(o=!1),o){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(Ad())e.flags|=8192;else throw go=Ys,nl}else e.flags&=-16777217}function $g(e,o){if(o.type!=="stylesheet"||(o.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ff(o))if(Ad())e.flags|=8192;else throw go=Ys,nl}function lr(e,o){o!==null&&(e.flags|=4),e.flags&16384&&(o=e.tag!==22?Ic():536870912,e.lanes|=o,Qo|=o)}function Fi(e,o){if(!ve)switch(e.tailMode){case"hidden":o=e.tail;for(var s=null;o!==null;)o.alternate!==null&&(s=o),o=o.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?o||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function qe(e){var o=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(o)for(var d=e.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=s,o}function TT(e,o,s){var l=o.pendingProps;switch(Ja(o),o.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(o),null;case 1:return qe(o),null;case 3:return s=o.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),o.memoizedState.cache!==l&&(o.flags|=2048),ln(We),Oe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ho(o)?gn(o):e===null||e.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Xa())),qe(o),null;case 26:var d=o.type,p=o.memoizedState;return e===null?(gn(o),p!==null?(qe(o),$g(o,p)):(qe(o),ql(o,d,null,l,s))):p?p!==e.memoizedState?(gn(o),qe(o),$g(o,p)):(qe(o),o.flags&=-16777217):(e=e.memoizedProps,e!==l&&gn(o),qe(o),ql(o,d,e,l,s)),null;case 27:if(Ts(o),s=de.current,d=o.type,e!==null&&o.stateNode!=null)e.memoizedProps!==l&&gn(o);else{if(!l){if(o.stateNode===null)throw Error(r(166));return qe(o),null}e=te.current,Ho(o)?Ih(o):(e=rf(d,l,s),o.stateNode=e,gn(o))}return qe(o),null;case 5:if(Ts(o),d=o.type,e!==null&&o.stateNode!=null)e.memoizedProps!==l&&gn(o);else{if(!l){if(o.stateNode===null)throw Error(r(166));return qe(o),null}if(p=te.current,Ho(o))Ih(o);else{var S=Cr(de.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(d,{is:l.is}):S.createElement(d)}}p[nt]=o,p[gt]=l;e:for(S=o.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===o)break e;for(;S.sibling===null;){if(S.return===null||S.return===o)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}o.stateNode=p;e:switch(rt(p,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&gn(o)}}return qe(o),ql(o,o.type,e===null?null:e.memoizedProps,o.pendingProps,s),null;case 6:if(e&&o.stateNode!=null)e.memoizedProps!==l&&gn(o);else{if(typeof l!="string"&&o.stateNode===null)throw Error(r(166));if(e=de.current,Ho(o)){if(e=o.stateNode,s=o.memoizedProps,l=null,d=ot,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}e[nt]=o,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Kd(e.nodeValue,s)),e||Nn(o,!0)}else e=Cr(e).createTextNode(l),e[nt]=o,o.stateNode=e}return qe(o),null;case 31:if(s=o.memoizedState,e===null||e.memoizedState!==null){if(l=Ho(o),s!==null){if(e===null){if(!l)throw Error(r(318));if(e=o.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[nt]=o}else ao(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;qe(o),e=!1}else s=Xa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return o.flags&256?(wt(o),o):(wt(o),null);if((o.flags&128)!==0)throw Error(r(558))}return qe(o),null;case 13:if(l=o.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Ho(o),l!==null&&l.dehydrated!==null){if(e===null){if(!d)throw Error(r(318));if(d=o.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(r(317));d[nt]=o}else ao(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;qe(o),d=!1}else d=Xa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return o.flags&256?(wt(o),o):(wt(o),null)}return wt(o),(o.flags&128)!==0?(o.lanes=s,o):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=o.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==d&&(l.flags|=2048)),s!==e&&s&&(o.child.flags|=8192),lr(o,o.updateQueue),qe(o),null);case 4:return Oe(),e===null&&au(o.stateNode.containerInfo),qe(o),null;case 10:return ln(o.type),qe(o),null;case 19:if(F(Fe),l=o.memoizedState,l===null)return qe(o),null;if(d=(o.flags&128)!==0,p=l.rendering,p===null)if(d)Fi(l,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=o.child;e!==null;){if(p=Xs(e),p!==null){for(o.flags|=128,Fi(l,!1),e=p.updateQueue,o.updateQueue=e,lr(o,e),o.subtreeFlags=0,e=s,s=o.child;s!==null;)xh(s,e),s=s.sibling;return $(Fe,Fe.current&1|2),ve&&rn(o,l.treeForkCount),o.child}e=e.sibling}l.tail!==null&&Tt()>dr&&(o.flags|=128,d=!0,Fi(l,!1),o.lanes=4194304)}else{if(!d)if(e=Xs(p),e!==null){if(o.flags|=128,d=!0,e=e.updateQueue,o.updateQueue=e,lr(o,e),Fi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!ve)return qe(o),null}else 2*Tt()-l.renderingStartTime>dr&&s!==536870912&&(o.flags|=128,d=!0,Fi(l,!1),o.lanes=4194304);l.isBackwards?(p.sibling=o.child,o.child=p):(e=l.last,e!==null?e.sibling=p:o.child=p,l.last=p)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Tt(),e.sibling=null,s=Fe.current,$(Fe,d?s&1|2:s&1),ve&&rn(o,l.treeForkCount),e):(qe(o),null);case 22:case 23:return wt(o),ll(),l=o.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(o.flags|=8192):l&&(o.flags|=8192),l?(s&536870912)!==0&&(o.flags&128)===0&&(qe(o),o.subtreeFlags&6&&(o.flags|=8192)):qe(o),s=o.updateQueue,s!==null&&lr(o,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(l=o.memoizedState.cachePool.pool),l!==s&&(o.flags|=2048),e!==null&&F(co),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),o.memoizedState.cache!==s&&(o.flags|=2048),ln(We),qe(o),null;case 25:return null;case 30:return null}throw Error(r(156,o.tag))}function _T(e,o){switch(Ja(o),o.tag){case 1:return e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 3:return ln(We),Oe(),e=o.flags,(e&65536)!==0&&(e&128)===0?(o.flags=e&-65537|128,o):null;case 26:case 27:case 5:return Ts(o),null;case 31:if(o.memoizedState!==null){if(wt(o),o.alternate===null)throw Error(r(340));ao()}return e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 13:if(wt(o),e=o.memoizedState,e!==null&&e.dehydrated!==null){if(o.alternate===null)throw Error(r(340));ao()}return e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 19:return F(Fe),null;case 4:return Oe(),null;case 10:return ln(o.type),null;case 22:case 23:return wt(o),ll(),e!==null&&F(co),e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 24:return ln(We),null;case 25:return null;default:return null}}function jg(e,o){switch(Ja(o),o.tag){case 3:ln(We),Oe();break;case 26:case 27:case 5:Ts(o);break;case 4:Oe();break;case 31:o.memoizedState!==null&&wt(o);break;case 13:wt(o);break;case 19:F(Fe);break;case 10:ln(o.type);break;case 22:case 23:wt(o),ll(),e!==null&&F(co);break;case 24:ln(We)}}function Yi(e,o){try{var s=o.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var d=l.next;s=d;do{if((s.tag&e)===e){l=void 0;var p=s.create,S=s.inst;l=p(),S.destroy=l}s=s.next}while(s!==d)}}catch(E){De(o,o.return,E)}}function Hn(e,o,s){try{var l=o.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var p=d.next;l=p;do{if((l.tag&e)===e){var S=l.inst,E=S.destroy;if(E!==void 0){S.destroy=void 0,d=o;var w=s,D=E;try{D()}catch(B){De(d,w,B)}}}l=l.next}while(l!==p)}}catch(B){De(o,o.return,B)}}function ed(e){var o=e.updateQueue;if(o!==null){var s=e.stateNode;try{Fh(o,s)}catch(l){De(e,e.return,l)}}}function td(e,o,s){s.props=po(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){De(e,o,l)}}function Wi(e,o){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(d){De(e,o,d)}}function Zt(e,o){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(d){De(e,o,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){De(e,o,d)}else s.current=null}function nd(e){var o=e.type,s=e.memoizedProps,l=e.stateNode;try{e:switch(o){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(d){De(e,e.return,d)}}function Pl(e,o,s){try{var l=e.stateNode;VT(l,e.type,s,o),l[gt]=o}catch(d){De(e,e.return,d)}}function od(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fn(e.type)||e.tag===4}function Gl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,o,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,o?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,o):(o=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,o.appendChild(e),s=s._reactRootContainer,s!=null||o.onclick!==null||(o.onclick=nn));else if(l!==4&&(l===27&&Fn(e.type)&&(s=e.stateNode,o=null),e=e.child,e!==null))for(Vl(e,o,s),e=e.sibling;e!==null;)Vl(e,o,s),e=e.sibling}function ur(e,o,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,o?s.insertBefore(e,o):s.appendChild(e);else if(l!==4&&(l===27&&Fn(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(ur(e,o,s),e=e.sibling;e!==null;)ur(e,o,s),e=e.sibling}function id(e){var o=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,d=o.attributes;d.length;)o.removeAttributeNode(d[0]);rt(o,l,s),o[nt]=e,o[gt]=s}catch(p){De(e,e.return,p)}}var dn=!1,Xe=!1,Ol=!1,sd=typeof WeakSet=="function"?WeakSet:Set,je=null;function ST(e,o){if(e=e.containerInfo,cu=Nr,e=yh(e),La(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var S=0,E=-1,w=-1,D=0,B=0,O=e,k=null;t:for(;;){for(var z;O!==s||d!==0&&O.nodeType!==3||(E=S+d),O!==p||l!==0&&O.nodeType!==3||(w=S+l),O.nodeType===3&&(S+=O.nodeValue.length),(z=O.firstChild)!==null;)k=O,O=z;for(;;){if(O===e)break t;if(k===s&&++D===d&&(E=S),k===p&&++B===l&&(w=S),(z=O.nextSibling)!==null)break;O=k,k=O.parentNode}O=z}s=E===-1||w===-1?null:{start:E,end:w}}else s=null}s=s||{start:0,end:0}}else s=null;for(hu={focusedElem:e,selectionRange:s},Nr=!1,je=o;je!==null;)if(o=je,e=o.child,(o.subtreeFlags&1028)!==0&&e!==null)e.return=o,je=e;else for(;je!==null;){switch(o=je,p=o.alternate,e=o.flags,o.tag){case 0:if((e&4)!==0&&(e=o.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)d=e[s],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,s=o,d=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var ee=po(s.type,d);e=l.getSnapshotBeforeUpdate(ee,p),l.__reactInternalSnapshotBeforeUpdate=e}catch(se){De(s,s.return,se)}}break;case 3:if((e&1024)!==0){if(e=o.stateNode.containerInfo,s=e.nodeType,s===9)fu(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=o.sibling,e!==null){e.return=o.return,je=e;break}je=o.return}}function rd(e,o,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:mn(e,s),l&4&&Yi(5,s);break;case 1:if(mn(e,s),l&4)if(e=s.stateNode,o===null)try{e.componentDidMount()}catch(S){De(s,s.return,S)}else{var d=po(s.type,o.memoizedProps);o=o.memoizedState;try{e.componentDidUpdate(d,o,e.__reactInternalSnapshotBeforeUpdate)}catch(S){De(s,s.return,S)}}l&64&&ed(s),l&512&&Wi(s,s.return);break;case 3:if(mn(e,s),l&64&&(e=s.updateQueue,e!==null)){if(o=null,s.child!==null)switch(s.child.tag){case 27:case 5:o=s.child.stateNode;break;case 1:o=s.child.stateNode}try{Fh(e,o)}catch(S){De(s,s.return,S)}}break;case 27:o===null&&l&4&&id(s);case 26:case 5:mn(e,s),o===null&&l&4&&nd(s),l&512&&Wi(s,s.return);break;case 12:mn(e,s);break;case 31:mn(e,s),l&4&&ud(e,s);break;case 13:mn(e,s),l&4&&cd(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=NT.bind(null,s),QT(e,s))));break;case 22:if(l=s.memoizedState!==null||dn,!l){o=o!==null&&o.memoizedState!==null||Xe,d=dn;var p=Xe;dn=l,(Xe=o)&&!p?pn(e,s,(s.subtreeFlags&8772)!==0):mn(e,s),dn=d,Xe=p}break;case 30:break;default:mn(e,s)}}function ad(e){var o=e.alternate;o!==null&&(e.alternate=null,ad(o)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(o=e.stateNode,o!==null&&Ta(o)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,ft=!1;function fn(e,o,s){for(s=s.child;s!==null;)ld(e,o,s),s=s.sibling}function ld(e,o,s){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(pi,s)}catch{}switch(s.tag){case 26:Xe||Zt(s,o),fn(e,o,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Xe||Zt(s,o);var l=Pe,d=ft;Fn(s.type)&&(Pe=s.stateNode,ft=!1),fn(e,o,s),ts(s.stateNode),Pe=l,ft=d;break;case 5:Xe||Zt(s,o);case 6:if(l=Pe,d=ft,Pe=null,fn(e,o,s),Pe=l,ft=d,Pe!==null)if(ft)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(s.stateNode)}catch(p){De(s,o,p)}else try{Pe.removeChild(s.stateNode)}catch(p){De(s,o,p)}break;case 18:Pe!==null&&(ft?(e=Pe,ef(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),ii(e)):ef(Pe,s.stateNode));break;case 4:l=Pe,d=ft,Pe=s.stateNode.containerInfo,ft=!0,fn(e,o,s),Pe=l,ft=d;break;case 0:case 11:case 14:case 15:Hn(2,s,o),Xe||Hn(4,s,o),fn(e,o,s);break;case 1:Xe||(Zt(s,o),l=s.stateNode,typeof l.componentWillUnmount=="function"&&td(s,o,l)),fn(e,o,s);break;case 21:fn(e,o,s);break;case 22:Xe=(l=Xe)||s.memoizedState!==null,fn(e,o,s),Xe=l;break;default:fn(e,o,s)}}function ud(e,o){if(o.memoizedState===null&&(e=o.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ii(e)}catch(s){De(o,o.return,s)}}}function cd(e,o){if(o.memoizedState===null&&(e=o.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ii(e)}catch(s){De(o,o.return,s)}}function ET(e){switch(e.tag){case 31:case 13:case 19:var o=e.stateNode;return o===null&&(o=e.stateNode=new sd),o;case 22:return e=e.stateNode,o=e._retryCache,o===null&&(o=e._retryCache=new sd),o;default:throw Error(r(435,e.tag))}}function cr(e,o){var s=ET(e);o.forEach(function(l){if(!s.has(l)){s.add(l);var d=IT.bind(null,e,l);l.then(d,d)}})}function mt(e,o){var s=o.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l],p=e,S=o,E=S;e:for(;E!==null;){switch(E.tag){case 27:if(Fn(E.type)){Pe=E.stateNode,ft=!1;break e}break;case 5:Pe=E.stateNode,ft=!1;break e;case 3:case 4:Pe=E.stateNode.containerInfo,ft=!0;break e}E=E.return}if(Pe===null)throw Error(r(160));ld(p,S,d),Pe=null,ft=!1,p=d.alternate,p!==null&&(p.return=null),d.return=null}if(o.subtreeFlags&13886)for(o=o.child;o!==null;)hd(o,e),o=o.sibling}var Ot=null;function hd(e,o){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(o,e),pt(e),l&4&&(Hn(3,e,e.return),Yi(3,e),Hn(5,e,e.return));break;case 1:mt(o,e),pt(e),l&512&&(Xe||s===null||Zt(s,s.return)),l&64&&dn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var d=Ot;if(mt(o,e),pt(e),l&512&&(Xe||s===null||Zt(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){e:{l=e.type,s=e.memoizedProps,d=d.ownerDocument||d;t:switch(l){case"title":p=d.getElementsByTagName("title")[0],(!p||p[Ti]||p[nt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=d.createElement(l),d.head.insertBefore(p,d.querySelector("head > title"))),rt(p,l,s),p[nt]=e,$e(p),l=p;break e;case"link":var S=gf("link","href",d).get(l+(s.href||""));if(S){for(var E=0;E<S.length;E++)if(p=S[E],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(E,1);break t}}p=d.createElement(l),rt(p,l,s),d.head.appendChild(p);break;case"meta":if(S=gf("meta","content",d).get(l+(s.content||""))){for(E=0;E<S.length;E++)if(p=S[E],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(E,1);break t}}p=d.createElement(l),rt(p,l,s),d.head.appendChild(p);break;default:throw Error(r(468,l))}p[nt]=e,$e(p),l=p}e.stateNode=l}else df(d,e.type,e.stateNode);else e.stateNode=hf(d,l,e.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?df(d,e.type,e.stateNode):hf(d,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Pl(e,e.memoizedProps,s.memoizedProps)}break;case 27:mt(o,e),pt(e),l&512&&(Xe||s===null||Zt(s,s.return)),s!==null&&l&4&&Pl(e,e.memoizedProps,s.memoizedProps);break;case 5:if(mt(o,e),pt(e),l&512&&(Xe||s===null||Zt(s,s.return)),e.flags&32){d=e.stateNode;try{bo(d,"")}catch(ee){De(e,e.return,ee)}}l&4&&e.stateNode!=null&&(d=e.memoizedProps,Pl(e,d,s!==null?s.memoizedProps:d)),l&1024&&(Ol=!0);break;case 6:if(mt(o,e),pt(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(ee){De(e,e.return,ee)}}break;case 3:if(xr=null,d=Ot,Ot=Ar(o.containerInfo),mt(o,e),Ot=d,pt(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ii(o.containerInfo)}catch(ee){De(e,e.return,ee)}Ol&&(Ol=!1,gd(e));break;case 4:l=Ot,Ot=Ar(e.stateNode.containerInfo),mt(o,e),pt(e),Ot=l;break;case 12:mt(o,e),pt(e);break;case 31:mt(o,e),pt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,cr(e,l)));break;case 13:mt(o,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(gr=Tt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,cr(e,l)));break;case 22:d=e.memoizedState!==null;var w=s!==null&&s.memoizedState!==null,D=dn,B=Xe;if(dn=D||d,Xe=B||w,mt(o,e),Xe=B,dn=D,pt(e),l&8192)e:for(o=e.stateNode,o._visibility=d?o._visibility&-2:o._visibility|1,d&&(s===null||w||dn||Xe||yo(e)),s=null,o=e;;){if(o.tag===5||o.tag===26){if(s===null){w=s=o;try{if(p=w.stateNode,d)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{E=w.stateNode;var O=w.memoizedProps.style,k=O!=null&&O.hasOwnProperty("display")?O.display:null;E.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(ee){De(w,w.return,ee)}}}else if(o.tag===6){if(s===null){w=o;try{w.stateNode.nodeValue=d?"":w.memoizedProps}catch(ee){De(w,w.return,ee)}}}else if(o.tag===18){if(s===null){w=o;try{var z=w.stateNode;d?tf(z,!0):tf(w.stateNode,!1)}catch(ee){De(w,w.return,ee)}}}else if((o.tag!==22&&o.tag!==23||o.memoizedState===null||o===e)&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break e;for(;o.sibling===null;){if(o.return===null||o.return===e)break e;s===o&&(s=null),o=o.return}s===o&&(s=null),o.sibling.return=o.return,o=o.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,cr(e,s))));break;case 19:mt(o,e),pt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,cr(e,l)));break;case 30:break;case 21:break;default:mt(o,e),pt(e)}}function pt(e){var o=e.flags;if(o&2){try{for(var s,l=e.return;l!==null;){if(od(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var d=s.stateNode,p=Gl(e);ur(e,p,d);break;case 5:var S=s.stateNode;s.flags&32&&(bo(S,""),s.flags&=-33);var E=Gl(e);ur(e,E,S);break;case 3:case 4:var w=s.stateNode.containerInfo,D=Gl(e);Vl(e,D,w);break;default:throw Error(r(161))}}catch(B){De(e,e.return,B)}e.flags&=-3}o&4096&&(e.flags&=-4097)}function gd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var o=e;gd(o),o.tag===5&&o.flags&1024&&o.stateNode.reset(),e=e.sibling}}function mn(e,o){if(o.subtreeFlags&8772)for(o=o.child;o!==null;)rd(e,o.alternate,o),o=o.sibling}function yo(e){for(e=e.child;e!==null;){var o=e;switch(o.tag){case 0:case 11:case 14:case 15:Hn(4,o,o.return),yo(o);break;case 1:Zt(o,o.return);var s=o.stateNode;typeof s.componentWillUnmount=="function"&&td(o,o.return,s),yo(o);break;case 27:ts(o.stateNode);case 26:case 5:Zt(o,o.return),yo(o);break;case 22:o.memoizedState===null&&yo(o);break;case 30:yo(o);break;default:yo(o)}e=e.sibling}}function pn(e,o,s){for(s=s&&(o.subtreeFlags&8772)!==0,o=o.child;o!==null;){var l=o.alternate,d=e,p=o,S=p.flags;switch(p.tag){case 0:case 11:case 15:pn(d,p,s),Yi(4,p);break;case 1:if(pn(d,p,s),l=p,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(D){De(l,l.return,D)}if(l=p,d=l.updateQueue,d!==null){var E=l.stateNode;try{var w=d.shared.hiddenCallbacks;if(w!==null)for(d.shared.hiddenCallbacks=null,d=0;d<w.length;d++)Oh(w[d],E)}catch(D){De(l,l.return,D)}}s&&S&64&&ed(p),Wi(p,p.return);break;case 27:id(p);case 26:case 5:pn(d,p,s),s&&l===null&&S&4&&nd(p),Wi(p,p.return);break;case 12:pn(d,p,s);break;case 31:pn(d,p,s),s&&S&4&&ud(d,p);break;case 13:pn(d,p,s),s&&S&4&&cd(d,p);break;case 22:p.memoizedState===null&&pn(d,p,s),Wi(p,p.return);break;case 30:break;default:pn(d,p,s)}o=o.sibling}}function Fl(e,o){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(e=o.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Di(s))}function Yl(e,o){e=null,o.alternate!==null&&(e=o.alternate.memoizedState.cache),o=o.memoizedState.cache,o!==e&&(o.refCount++,e!=null&&Di(e))}function Ft(e,o,s,l){if(o.subtreeFlags&10256)for(o=o.child;o!==null;)dd(e,o,s,l),o=o.sibling}function dd(e,o,s,l){var d=o.flags;switch(o.tag){case 0:case 11:case 15:Ft(e,o,s,l),d&2048&&Yi(9,o);break;case 1:Ft(e,o,s,l);break;case 3:Ft(e,o,s,l),d&2048&&(e=null,o.alternate!==null&&(e=o.alternate.memoizedState.cache),o=o.memoizedState.cache,o!==e&&(o.refCount++,e!=null&&Di(e)));break;case 12:if(d&2048){Ft(e,o,s,l),e=o.stateNode;try{var p=o.memoizedProps,S=p.id,E=p.onPostCommit;typeof E=="function"&&E(S,o.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){De(o,o.return,w)}}else Ft(e,o,s,l);break;case 31:Ft(e,o,s,l);break;case 13:Ft(e,o,s,l);break;case 23:break;case 22:p=o.stateNode,S=o.alternate,o.memoizedState!==null?p._visibility&2?Ft(e,o,s,l):Ji(e,o):p._visibility&2?Ft(e,o,s,l):(p._visibility|=2,Jo(e,o,s,l,(o.subtreeFlags&10256)!==0||!1)),d&2048&&Fl(S,o);break;case 24:Ft(e,o,s,l),d&2048&&Yl(o.alternate,o);break;default:Ft(e,o,s,l)}}function Jo(e,o,s,l,d){for(d=d&&((o.subtreeFlags&10256)!==0||!1),o=o.child;o!==null;){var p=e,S=o,E=s,w=l,D=S.flags;switch(S.tag){case 0:case 11:case 15:Jo(p,S,E,w,d),Yi(8,S);break;case 23:break;case 22:var B=S.stateNode;S.memoizedState!==null?B._visibility&2?Jo(p,S,E,w,d):Ji(p,S):(B._visibility|=2,Jo(p,S,E,w,d)),d&&D&2048&&Fl(S.alternate,S);break;case 24:Jo(p,S,E,w,d),d&&D&2048&&Yl(S.alternate,S);break;default:Jo(p,S,E,w,d)}o=o.sibling}}function Ji(e,o){if(o.subtreeFlags&10256)for(o=o.child;o!==null;){var s=e,l=o,d=l.flags;switch(l.tag){case 22:Ji(s,l),d&2048&&Fl(l.alternate,l);break;case 24:Ji(s,l),d&2048&&Yl(l.alternate,l);break;default:Ji(s,l)}o=o.sibling}}var Ki=8192;function Ko(e,o,s){if(e.subtreeFlags&Ki)for(e=e.child;e!==null;)fd(e,o,s),e=e.sibling}function fd(e,o,s){switch(e.tag){case 26:Ko(e,o,s),e.flags&Ki&&e.memoizedState!==null&&l0(s,Ot,e.memoizedState,e.memoizedProps);break;case 5:Ko(e,o,s);break;case 3:case 4:var l=Ot;Ot=Ar(e.stateNode.containerInfo),Ko(e,o,s),Ot=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ki,Ki=16777216,Ko(e,o,s),Ki=l):Ko(e,o,s));break;default:Ko(e,o,s)}}function md(e){var o=e.alternate;if(o!==null&&(e=o.child,e!==null)){o.child=null;do o=e.sibling,e.sibling=null,e=o;while(e!==null)}}function Xi(e){var o=e.deletions;if((e.flags&16)!==0){if(o!==null)for(var s=0;s<o.length;s++){var l=o[s];je=l,yd(l,e)}md(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pd(e),e=e.sibling}function pd(e){switch(e.tag){case 0:case 11:case 15:Xi(e),e.flags&2048&&Hn(9,e,e.return);break;case 3:Xi(e);break;case 12:Xi(e);break;case 22:var o=e.stateNode;e.memoizedState!==null&&o._visibility&2&&(e.return===null||e.return.tag!==13)?(o._visibility&=-3,hr(e)):Xi(e);break;default:Xi(e)}}function hr(e){var o=e.deletions;if((e.flags&16)!==0){if(o!==null)for(var s=0;s<o.length;s++){var l=o[s];je=l,yd(l,e)}md(e)}for(e=e.child;e!==null;){switch(o=e,o.tag){case 0:case 11:case 15:Hn(8,o,o.return),hr(o);break;case 22:s=o.stateNode,s._visibility&2&&(s._visibility&=-3,hr(o));break;default:hr(o)}e=e.sibling}}function yd(e,o){for(;je!==null;){var s=je;switch(s.tag){case 0:case 11:case 15:Hn(8,s,o);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Di(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,je=l;else e:for(s=e;je!==null;){l=je;var d=l.sibling,p=l.return;if(ad(l),l===s){je=null;break e}if(d!==null){d.return=p,je=d;break e}je=p}}}var CT={getCacheForType:function(e){var o=it(We),s=o.data.get(e);return s===void 0&&(s=e(),o.data.set(e,s)),s},cacheSignal:function(){return it(We).controller.signal}},AT=typeof WeakMap=="function"?WeakMap:Map,xe=0,He=null,fe=null,pe=0,Ie=0,xt=null,Bn=!1,Xo=!1,Wl=!1,yn=0,Ve=0,qn=0,vo=0,Jl=0,bt=0,Qo=0,Qi=null,yt=null,Kl=!1,gr=0,vd=0,dr=1/0,fr=null,Pn=null,Qe=0,Gn=null,Zo=null,vn=0,Xl=0,Ql=null,Td=null,Zi=0,Zl=null;function Rt(){return(xe&2)!==0&&pe!==0?pe&-pe:H.T!==null?ou():zc()}function _d(){if(bt===0)if((pe&536870912)===0||ve){var e=Es;Es<<=1,(Es&3932160)===0&&(Es=262144),bt=e}else bt=536870912;return e=At.current,e!==null&&(e.flags|=32),bt}function vt(e,o,s){(e===He&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&($o(e,0),Vn(e,pe,bt,!1)),vi(e,s),((xe&2)===0||e!==He)&&(e===He&&((xe&2)===0&&(vo|=s),Ve===4&&Vn(e,pe,bt,!1)),$t(e))}function Sd(e,o,s){if((xe&6)!==0)throw Error(r(327));var l=!s&&(o&127)===0&&(o&e.expiredLanes)===0||yi(e,o),d=l?bT(e,o):jl(e,o,!0),p=l;do{if(d===0){Xo&&!l&&Vn(e,o,0,!1);break}else{if(s=e.current.alternate,p&&!wT(s)){d=jl(e,o,!1),p=!1;continue}if(d===2){if(p=o,e.errorRecoveryDisabledLanes&p)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){o=S;e:{var E=e;d=Qi;var w=E.current.memoizedState.isDehydrated;if(w&&($o(E,S).flags|=256),S=jl(E,S,!1),S!==2){if(Wl&&!w){E.errorRecoveryDisabledLanes|=p,vo|=p,d=4;break e}p=yt,yt=d,p!==null&&(yt===null?yt=p:yt.push.apply(yt,p))}d=S}if(p=!1,d!==2)continue}}if(d===1){$o(e,0),Vn(e,o,0,!0);break}e:{switch(l=e,p=d,p){case 0:case 1:throw Error(r(345));case 4:if((o&4194048)!==o)break;case 6:Vn(l,o,bt,!Bn);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((o&62914560)===o&&(d=gr+300-Tt(),10<d)){if(Vn(l,o,bt,!Bn),As(l,0,!0)!==0)break e;vn=o,l.timeoutHandle=$d(Ed.bind(null,l,s,yt,fr,Kl,o,bt,vo,Qo,Bn,p,"Throttled",-0,0),d);break e}Ed(l,s,yt,fr,Kl,o,bt,vo,Qo,Bn,p,null,-0,0)}}break}while(!0);$t(e)}function Ed(e,o,s,l,d,p,S,E,w,D,B,O,k,z){if(e.timeoutHandle=-1,O=o.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},fd(o,p,O);var ee=(p&62914560)===p?gr-Tt():(p&4194048)===p?vd-Tt():0;if(ee=u0(O,ee),ee!==null){vn=p,e.cancelPendingCommit=ee(Nd.bind(null,e,o,p,s,l,d,S,E,w,B,O,null,k,z)),Vn(e,p,S,!D);return}}Nd(e,o,p,s,l,d,S,E,w)}function wT(e){for(var o=e;;){var s=o.tag;if((s===0||s===11||s===15)&&o.flags&16384&&(s=o.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var d=s[l],p=d.getSnapshot;d=d.value;try{if(!Et(p(),d))return!1}catch{return!1}}if(s=o.child,o.subtreeFlags&16384&&s!==null)s.return=o,o=s;else{if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Vn(e,o,s,l){o&=~Jl,o&=~vo,e.suspendedLanes|=o,e.pingedLanes&=~o,l&&(e.warmLanes|=o),l=e.expirationTimes;for(var d=o;0<d;){var p=31-St(d),S=1<<p;l[p]=-1,d&=~S}s!==0&&Dc(e,s,o)}function mr(){return(xe&6)===0?($i(0),!1):!0}function $l(){if(fe!==null){if(Ie===0)var e=fe.return;else e=fe,an=lo=null,fl(e),Vo=null,Ui=0,e=fe;for(;e!==null;)jg(e.alternate,e),e=e.return;fe=null}}function $o(e,o){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,YT(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),vn=0,$l(),He=e,fe=s=sn(e.current,null),pe=o,Ie=0,xt=null,Bn=!1,Xo=yi(e,o),Wl=!1,Qo=bt=Jl=vo=qn=Ve=0,yt=Qi=null,Kl=!1,(o&8)!==0&&(o|=o&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=o;0<l;){var d=31-St(l),p=1<<d;o|=e[d],l&=~p}return yn=o,Ls(),s}function Cd(e,o){he=null,H.H=Vi,o===Go||o===Fs?(o=qh(),Ie=3):o===nl?(o=qh(),Ie=4):Ie=o===Nl?8:o!==null&&typeof o=="object"&&typeof o.then=="function"?6:1,xt=o,fe===null&&(Ve=1,ir(e,kt(o,e.current)))}function Ad(){var e=At.current;return e===null?!0:(pe&4194048)===pe?Ht===null:(pe&62914560)===pe||(pe&536870912)!==0?e===Ht:!1}function wd(){var e=H.H;return H.H=Vi,e===null?Vi:e}function xd(){var e=H.A;return H.A=CT,e}function pr(){Ve=4,Bn||(pe&4194048)!==pe&&At.current!==null||(Xo=!0),(qn&134217727)===0&&(vo&134217727)===0||He===null||Vn(He,pe,bt,!1)}function jl(e,o,s){var l=xe;xe|=2;var d=wd(),p=xd();(He!==e||pe!==o)&&(fr=null,$o(e,o)),o=!1;var S=Ve;e:do try{if(Ie!==0&&fe!==null){var E=fe,w=xt;switch(Ie){case 8:$l(),S=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(o=!0);var D=Ie;if(Ie=0,xt=null,jo(e,E,w,D),s&&Xo){S=0;break e}break;default:D=Ie,Ie=0,xt=null,jo(e,E,w,D)}}xT(),S=Ve;break}catch(B){Cd(e,B)}while(!0);return o&&e.shellSuspendCounter++,an=lo=null,xe=l,H.H=d,H.A=p,fe===null&&(He=null,pe=0,Ls()),S}function xT(){for(;fe!==null;)bd(fe)}function bT(e,o){var s=xe;xe|=2;var l=wd(),d=xd();He!==e||pe!==o?(fr=null,dr=Tt()+500,$o(e,o)):Xo=yi(e,o);e:do try{if(Ie!==0&&fe!==null){o=fe;var p=xt;t:switch(Ie){case 1:Ie=0,xt=null,jo(e,o,p,1);break;case 2:case 9:if(Hh(p)){Ie=0,xt=null,Rd(o);break}o=function(){Ie!==2&&Ie!==9||He!==e||(Ie=7),$t(e)},p.then(o,o);break e;case 3:Ie=7;break e;case 4:Ie=5;break e;case 7:Hh(p)?(Ie=0,xt=null,Rd(o)):(Ie=0,xt=null,jo(e,o,p,7));break;case 5:var S=null;switch(fe.tag){case 26:S=fe.memoizedState;case 5:case 27:var E=fe;if(S?ff(S):E.stateNode.complete){Ie=0,xt=null;var w=E.sibling;if(w!==null)fe=w;else{var D=E.return;D!==null?(fe=D,yr(D)):fe=null}break t}}Ie=0,xt=null,jo(e,o,p,5);break;case 6:Ie=0,xt=null,jo(e,o,p,6);break;case 8:$l(),Ve=6;break e;default:throw Error(r(462))}}RT();break}catch(B){Cd(e,B)}while(!0);return an=lo=null,H.H=l,H.A=d,xe=s,fe!==null?0:(He=null,pe=0,Ls(),Ve)}function RT(){for(;fe!==null&&!Zy();)bd(fe)}function bd(e){var o=Zg(e.alternate,e,yn);e.memoizedProps=e.pendingProps,o===null?yr(e):fe=o}function Rd(e){var o=e,s=o.alternate;switch(o.tag){case 15:case 0:o=Yg(s,o,o.pendingProps,o.type,void 0,pe);break;case 11:o=Yg(s,o,o.pendingProps,o.type.render,o.ref,pe);break;case 5:fl(o);default:jg(s,o),o=fe=xh(o,yn),o=Zg(s,o,yn)}e.memoizedProps=e.pendingProps,o===null?yr(e):fe=o}function jo(e,o,s,l){an=lo=null,fl(o),Vo=null,Ui=0;var d=o.return;try{if(pT(e,d,o,s,pe)){Ve=1,ir(e,kt(s,e.current)),fe=null;return}}catch(p){if(d!==null)throw fe=d,p;Ve=1,ir(e,kt(s,e.current)),fe=null;return}o.flags&32768?(ve||l===1?e=!0:Xo||(pe&536870912)!==0?e=!1:(Bn=e=!0,(l===2||l===9||l===3||l===6)&&(l=At.current,l!==null&&l.tag===13&&(l.flags|=16384))),Md(o,e)):yr(o)}function yr(e){var o=e;do{if((o.flags&32768)!==0){Md(o,Bn);return}e=o.return;var s=TT(o.alternate,o,yn);if(s!==null){fe=s;return}if(o=o.sibling,o!==null){fe=o;return}fe=o=e}while(o!==null);Ve===0&&(Ve=5)}function Md(e,o){do{var s=_T(e.alternate,e);if(s!==null){s.flags&=32767,fe=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!o&&(e=e.sibling,e!==null)){fe=e;return}fe=e=s}while(e!==null);Ve=6,fe=null}function Nd(e,o,s,l,d,p,S,E,w){e.cancelPendingCommit=null;do vr();while(Qe!==0);if((xe&6)!==0)throw Error(r(327));if(o!==null){if(o===e.current)throw Error(r(177));if(p=o.lanes|o.childLanes,p|=Ga,av(e,s,p,S,E,w),e===He&&(fe=He=null,pe=0),Zo=o,Gn=e,vn=s,Xl=p,Ql=d,Td=l,(o.subtreeFlags&10256)!==0||(o.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,DT(_s,function(){return zd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(o.flags&13878)!==0,(o.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,d=X.p,X.p=2,S=xe,xe|=4;try{ST(e,o,s)}finally{xe=S,X.p=d,H.T=l}}Qe=1,Id(),Dd(),kd()}}function Id(){if(Qe===1){Qe=0;var e=Gn,o=Zo,s=(o.flags&13878)!==0;if((o.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var l=X.p;X.p=2;var d=xe;xe|=4;try{hd(o,e);var p=hu,S=yh(e.containerInfo),E=p.focusedElem,w=p.selectionRange;if(S!==E&&E&&E.ownerDocument&&ph(E.ownerDocument.documentElement,E)){if(w!==null&&La(E)){var D=w.start,B=w.end;if(B===void 0&&(B=D),"selectionStart"in E)E.selectionStart=D,E.selectionEnd=Math.min(B,E.value.length);else{var O=E.ownerDocument||document,k=O&&O.defaultView||window;if(k.getSelection){var z=k.getSelection(),ee=E.textContent.length,se=Math.min(w.start,ee),ze=w.end===void 0?se:Math.min(w.end,ee);!z.extend&&se>ze&&(S=ze,ze=se,se=S);var N=mh(E,se),b=mh(E,ze);if(N&&b&&(z.rangeCount!==1||z.anchorNode!==N.node||z.anchorOffset!==N.offset||z.focusNode!==b.node||z.focusOffset!==b.offset)){var I=O.createRange();I.setStart(N.node,N.offset),z.removeAllRanges(),se>ze?(z.addRange(I),z.extend(b.node,b.offset)):(I.setEnd(b.node,b.offset),z.addRange(I))}}}}for(O=[],z=E;z=z.parentNode;)z.nodeType===1&&O.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<O.length;E++){var G=O[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Nr=!!cu,hu=cu=null}finally{xe=d,X.p=l,H.T=s}}e.current=o,Qe=2}}function Dd(){if(Qe===2){Qe=0;var e=Gn,o=Zo,s=(o.flags&8772)!==0;if((o.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var l=X.p;X.p=2;var d=xe;xe|=4;try{rd(e,o.alternate,o)}finally{xe=d,X.p=l,H.T=s}}Qe=3}}function kd(){if(Qe===4||Qe===3){Qe=0,$y();var e=Gn,o=Zo,s=vn,l=Td;(o.subtreeFlags&10256)!==0||(o.flags&10256)!==0?Qe=5:(Qe=0,Zo=Gn=null,Ud(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(Pn=null),ya(s),o=o.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(pi,o,void 0,(o.current.flags&128)===128)}catch{}if(l!==null){o=H.T,d=X.p,X.p=2,H.T=null;try{for(var p=e.onRecoverableError,S=0;S<l.length;S++){var E=l[S];p(E.value,{componentStack:E.stack})}}finally{H.T=o,X.p=d}}(vn&3)!==0&&vr(),$t(e),d=e.pendingLanes,(s&261930)!==0&&(d&42)!==0?e===Zl?Zi++:(Zi=0,Zl=e):Zi=0,$i(0)}}function Ud(e,o){(e.pooledCacheLanes&=o)===0&&(o=e.pooledCache,o!=null&&(e.pooledCache=null,Di(o)))}function vr(){return Id(),Dd(),kd(),zd()}function zd(){if(Qe!==5)return!1;var e=Gn,o=Xl;Xl=0;var s=ya(vn),l=H.T,d=X.p;try{X.p=32>s?32:s,H.T=null,s=Ql,Ql=null;var p=Gn,S=vn;if(Qe=0,Zo=Gn=null,vn=0,(xe&6)!==0)throw Error(r(331));var E=xe;if(xe|=4,pd(p.current),dd(p,p.current,S,s),xe=E,$i(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(pi,p)}catch{}return!0}finally{X.p=d,H.T=l,Ud(e,o)}}function Ld(e,o,s){o=kt(s,o),o=Ml(e.stateNode,o,2),e=Un(e,o,2),e!==null&&(vi(e,2),$t(e))}function De(e,o,s){if(e.tag===3)Ld(e,e,s);else for(;o!==null;){if(o.tag===3){Ld(o,e,s);break}else if(o.tag===1){var l=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Pn===null||!Pn.has(l))){e=kt(s,e),s=Hg(2),l=Un(o,s,2),l!==null&&(Bg(s,l,o,e),vi(l,2),$t(l));break}}o=o.return}}function eu(e,o,s){var l=e.pingCache;if(l===null){l=e.pingCache=new AT;var d=new Set;l.set(o,d)}else d=l.get(o),d===void 0&&(d=new Set,l.set(o,d));d.has(s)||(Wl=!0,d.add(s),e=MT.bind(null,e,o,s),o.then(e,e))}function MT(e,o,s){var l=e.pingCache;l!==null&&l.delete(o),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,He===e&&(pe&s)===s&&(Ve===4||Ve===3&&(pe&62914560)===pe&&300>Tt()-gr?(xe&2)===0&&$o(e,0):Jl|=s,Qo===pe&&(Qo=0)),$t(e)}function Hd(e,o){o===0&&(o=Ic()),e=so(e,o),e!==null&&(vi(e,o),$t(e))}function NT(e){var o=e.memoizedState,s=0;o!==null&&(s=o.retryLane),Hd(e,s)}function IT(e,o){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(s=d.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(o),Hd(e,s)}function DT(e,o){return da(e,o)}var Tr=null,ei=null,tu=!1,_r=!1,nu=!1,On=0;function $t(e){e!==ei&&e.next===null&&(ei===null?Tr=ei=e:ei=ei.next=e),_r=!0,tu||(tu=!0,UT())}function $i(e,o){if(!nu&&_r){nu=!0;do for(var s=!1,l=Tr;l!==null;){if(e!==0){var d=l.pendingLanes;if(d===0)var p=0;else{var S=l.suspendedLanes,E=l.pingedLanes;p=(1<<31-St(42|e)+1)-1,p&=d&~(S&~E),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Gd(l,p))}else p=pe,p=As(l,l===He?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||yi(l,p)||(s=!0,Gd(l,p));l=l.next}while(s);nu=!1}}function kT(){Bd()}function Bd(){_r=tu=!1;var e=0;On!==0&&FT()&&(e=On);for(var o=Tt(),s=null,l=Tr;l!==null;){var d=l.next,p=qd(l,o);p===0?(l.next=null,s===null?Tr=d:s.next=d,d===null&&(ei=s)):(s=l,(e!==0||(p&3)!==0)&&(_r=!0)),l=d}Qe!==0&&Qe!==5||$i(e),On!==0&&(On=0)}function qd(e,o){for(var s=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var S=31-St(p),E=1<<S,w=d[S];w===-1?((E&s)===0||(E&l)!==0)&&(d[S]=rv(E,o)):w<=o&&(e.expiredLanes|=E),p&=~E}if(o=He,s=pe,s=As(e,e===o?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===o&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&fa(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||yi(e,s)){if(o=s&-s,o===e.callbackPriority)return o;switch(l!==null&&fa(l),ya(s)){case 2:case 8:s=Mc;break;case 32:s=_s;break;case 268435456:s=Nc;break;default:s=_s}return l=Pd.bind(null,e),s=da(s,l),e.callbackPriority=o,e.callbackNode=s,o}return l!==null&&l!==null&&fa(l),e.callbackPriority=2,e.callbackNode=null,2}function Pd(e,o){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(vr()&&e.callbackNode!==s)return null;var l=pe;return l=As(e,e===He?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Sd(e,l,o),qd(e,Tt()),e.callbackNode!=null&&e.callbackNode===s?Pd.bind(null,e):null)}function Gd(e,o){if(vr())return null;Sd(e,o,!0)}function UT(){WT(function(){(xe&6)!==0?da(Rc,kT):Bd()})}function ou(){if(On===0){var e=qo;e===0&&(e=Ss,Ss<<=1,(Ss&261888)===0&&(Ss=256)),On=e}return On}function Vd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rs(""+e)}function Od(e,o){var s=o.ownerDocument.createElement("input");return s.name=o.name,s.value=o.value,e.id&&s.setAttribute("form",e.id),o.parentNode.insertBefore(s,o),e=new FormData(e),s.parentNode.removeChild(s),e}function zT(e,o,s,l,d){if(o==="submit"&&s&&s.stateNode===d){var p=Vd((d[gt]||null).action),S=l.submitter;S&&(o=(o=S[gt]||null)?Vd(o.formAction):S.getAttribute("formAction"),o!==null&&(p=o,S=null));var E=new Ds("action","action",null,l,d);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(On!==0){var w=S?Od(d,S):new FormData(d);Cl(s,{pending:!0,data:w,method:d.method,action:p},null,w)}}else typeof p=="function"&&(E.preventDefault(),w=S?Od(d,S):new FormData(d),Cl(s,{pending:!0,data:w,method:d.method,action:p},p,w))},currentTarget:d}]})}}for(var iu=0;iu<Pa.length;iu++){var su=Pa[iu],LT=su.toLowerCase(),HT=su[0].toUpperCase()+su.slice(1);Vt(LT,"on"+HT)}Vt(_h,"onAnimationEnd"),Vt(Sh,"onAnimationIteration"),Vt(Eh,"onAnimationStart"),Vt("dblclick","onDoubleClick"),Vt("focusin","onFocus"),Vt("focusout","onBlur"),Vt(jv,"onTransitionRun"),Vt(eT,"onTransitionStart"),Vt(tT,"onTransitionCancel"),Vt(Ch,"onTransitionEnd"),wo("onMouseEnter",["mouseout","mouseover"]),wo("onMouseLeave",["mouseout","mouseover"]),wo("onPointerEnter",["pointerout","pointerover"]),wo("onPointerLeave",["pointerout","pointerover"]),to("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),to("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),to("onBeforeInput",["compositionend","keypress","textInput","paste"]),to("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),to("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),to("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ji));function Fd(e,o){o=(o&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],d=l.event;l=l.listeners;e:{var p=void 0;if(o)for(var S=l.length-1;0<=S;S--){var E=l[S],w=E.instance,D=E.currentTarget;if(E=E.listener,w!==p&&d.isPropagationStopped())break e;p=E,d.currentTarget=D;try{p(d)}catch(B){zs(B)}d.currentTarget=null,p=w}else for(S=0;S<l.length;S++){if(E=l[S],w=E.instance,D=E.currentTarget,E=E.listener,w!==p&&d.isPropagationStopped())break e;p=E,d.currentTarget=D;try{p(d)}catch(B){zs(B)}d.currentTarget=null,p=w}}}}function me(e,o){var s=o[va];s===void 0&&(s=o[va]=new Set);var l=e+"__bubble";s.has(l)||(Yd(o,e,2,!1),s.add(l))}function ru(e,o,s){var l=0;o&&(l|=4),Yd(s,e,l,o)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function au(e){if(!e[Sr]){e[Sr]=!0,Bc.forEach(function(s){s!=="selectionchange"&&(BT.has(s)||ru(s,!1,e),ru(s,!0,e))});var o=e.nodeType===9?e:e.ownerDocument;o===null||o[Sr]||(o[Sr]=!0,ru("selectionchange",!1,o))}}function Yd(e,o,s,l){switch(Sf(o)){case 2:var d=g0;break;case 8:d=d0;break;default:d=Eu}s=d.bind(null,o,s,e),d=void 0,!ba||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(o,s,{capture:!0,passive:d}):e.addEventListener(o,s,!0):d!==void 0?e.addEventListener(o,s,{passive:d}):e.addEventListener(o,s,!1)}function lu(e,o,s,l,d){var p=l;if((o&1)===0&&(o&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var E=l.stateNode.containerInfo;if(E===d)break;if(S===4)for(S=l.return;S!==null;){var w=S.tag;if((w===3||w===4)&&S.stateNode.containerInfo===d)return;S=S.return}for(;E!==null;){if(S=Eo(E),S===null)return;if(w=S.tag,w===5||w===6||w===26||w===27){l=p=S;continue e}E=E.parentNode}}l=l.return}Qc(function(){var D=p,B=wa(s),O=[];e:{var k=Ah.get(e);if(k!==void 0){var z=Ds,ee=e;switch(e){case"keypress":if(Ns(s)===0)break e;case"keydown":case"keyup":z=Iv;break;case"focusin":ee="focus",z=Ia;break;case"focusout":ee="blur",z=Ia;break;case"beforeblur":case"afterblur":z=Ia;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Uv;break;case _h:case Sh:case Eh:z=Ev;break;case Ch:z=Lv;break;case"scroll":case"scrollend":z=yv;break;case"wheel":z=Bv;break;case"copy":case"cut":case"paste":z=Av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=th;break;case"toggle":case"beforetoggle":z=Pv}var se=(o&4)!==0,ze=!se&&(e==="scroll"||e==="scrollend"),N=se?k!==null?k+"Capture":null:k;se=[];for(var b=D,I;b!==null;){var G=b;if(I=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||I===null||N===null||(G=Si(b,N),G!=null&&se.push(es(b,G,I))),ze)break;b=b.return}0<se.length&&(k=new z(k,ee,null,s,B),O.push({event:k,listeners:se}))}}if((o&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",k&&s!==Aa&&(ee=s.relatedTarget||s.fromElement)&&(Eo(ee)||ee[So]))break e;if((z||k)&&(k=B.window===B?B:(k=B.ownerDocument)?k.defaultView||k.parentWindow:window,z?(ee=s.relatedTarget||s.toElement,z=D,ee=ee?Eo(ee):null,ee!==null&&(ze=c(ee),se=ee.tag,ee!==ze||se!==5&&se!==27&&se!==6)&&(ee=null)):(z=null,ee=D),z!==ee)){if(se=jc,G="onMouseLeave",N="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(se=th,G="onPointerLeave",N="onPointerEnter",b="pointer"),ze=z==null?k:_i(z),I=ee==null?k:_i(ee),k=new se(G,b+"leave",z,s,B),k.target=ze,k.relatedTarget=I,G=null,Eo(B)===D&&(se=new se(N,b+"enter",ee,s,B),se.target=I,se.relatedTarget=ze,G=se),ze=G,z&&ee)t:{for(se=qT,N=z,b=ee,I=0,G=N;G;G=se(G))I++;G=0;for(var ie=b;ie;ie=se(ie))G++;for(;0<I-G;)N=se(N),I--;for(;0<G-I;)b=se(b),G--;for(;I--;){if(N===b||b!==null&&N===b.alternate){se=N;break t}N=se(N),b=se(b)}se=null}else se=null;z!==null&&Wd(O,k,z,se,!1),ee!==null&&ze!==null&&Wd(O,ze,ee,se,!0)}}e:{if(k=D?_i(D):window,z=k.nodeName&&k.nodeName.toLowerCase(),z==="select"||z==="input"&&k.type==="file")var Ee=uh;else if(ah(k))if(ch)Ee=Qv;else{Ee=Kv;var ne=Jv}else z=k.nodeName,!z||z.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?D&&Ca(D.elementType)&&(Ee=uh):Ee=Xv;if(Ee&&(Ee=Ee(e,D))){lh(O,Ee,s,B);break e}ne&&ne(e,k,D),e==="focusout"&&D&&k.type==="number"&&D.memoizedProps.value!=null&&Ea(k,"number",k.value)}switch(ne=D?_i(D):window,e){case"focusin":(ah(ne)||ne.contentEditable==="true")&&(Io=ne,Ha=D,Mi=null);break;case"focusout":Mi=Ha=Io=null;break;case"mousedown":Ba=!0;break;case"contextmenu":case"mouseup":case"dragend":Ba=!1,vh(O,s,B);break;case"selectionchange":if($v)break;case"keydown":case"keyup":vh(O,s,B)}var ge;if(ka)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else No?sh(e,s)&&(ye="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ye="onCompositionStart");ye&&(nh&&s.locale!=="ko"&&(No||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&No&&(ge=Zc()):(bn=B,Ra="value"in bn?bn.value:bn.textContent,No=!0)),ne=Er(D,ye),0<ne.length&&(ye=new eh(ye,e,null,s,B),O.push({event:ye,listeners:ne}),ge?ye.data=ge:(ge=rh(s),ge!==null&&(ye.data=ge)))),(ge=Vv?Ov(e,s):Fv(e,s))&&(ye=Er(D,"onBeforeInput"),0<ye.length&&(ne=new eh("onBeforeInput","beforeinput",null,s,B),O.push({event:ne,listeners:ye}),ne.data=ge)),zT(O,e,D,s,B)}Fd(O,o)})}function es(e,o,s){return{instance:e,listener:o,currentTarget:s}}function Er(e,o){for(var s=o+"Capture",l=[];e!==null;){var d=e,p=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||p===null||(d=Si(e,s),d!=null&&l.unshift(es(e,d,p)),d=Si(e,o),d!=null&&l.push(es(e,d,p))),e.tag===3)return l;e=e.return}return[]}function qT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wd(e,o,s,l,d){for(var p=o._reactName,S=[];s!==null&&s!==l;){var E=s,w=E.alternate,D=E.stateNode;if(E=E.tag,w!==null&&w===l)break;E!==5&&E!==26&&E!==27||D===null||(w=D,d?(D=Si(s,p),D!=null&&S.unshift(es(s,D,w))):d||(D=Si(s,p),D!=null&&S.push(es(s,D,w)))),s=s.return}S.length!==0&&e.push({event:o,listeners:S})}var PT=/\r\n?/g,GT=/\u0000|\uFFFD/g;function Jd(e){return(typeof e=="string"?e:""+e).replace(PT,`
`).replace(GT,"")}function Kd(e,o){return o=Jd(o),Jd(e)===o}function Ue(e,o,s,l,d,p){switch(s){case"children":typeof l=="string"?o==="body"||o==="textarea"&&l===""||bo(e,l):(typeof l=="number"||typeof l=="bigint")&&o!=="body"&&bo(e,""+l);break;case"className":xs(e,"class",l);break;case"tabIndex":xs(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":xs(e,s,l);break;case"style":Kc(e,l,p);break;case"data":if(o!=="object"){xs(e,"data",l);break}case"src":case"href":if(l===""&&(o!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Rs(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(o!=="input"&&Ue(e,o,"name",d.name,d,null),Ue(e,o,"formEncType",d.formEncType,d,null),Ue(e,o,"formMethod",d.formMethod,d,null),Ue(e,o,"formTarget",d.formTarget,d,null)):(Ue(e,o,"encType",d.encType,d,null),Ue(e,o,"method",d.method,d,null),Ue(e,o,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Rs(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=nn);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Rs(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":me("beforetoggle",e),me("toggle",e),ws(e,"popover",l);break;case"xlinkActuate":tn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":tn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":tn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":tn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":tn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":tn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":tn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":tn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":tn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ws(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=mv.get(s)||s,ws(e,s,l))}}function uu(e,o,s,l,d,p){switch(s){case"style":Kc(e,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(d.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof l=="string"?bo(e,l):(typeof l=="number"||typeof l=="bigint")&&bo(e,""+l);break;case"onScroll":l!=null&&me("scroll",e);break;case"onScrollEnd":l!=null&&me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qc.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),o=s.slice(2,d?s.length-7:void 0),p=e[gt]||null,p=p!=null?p[s]:null,typeof p=="function"&&e.removeEventListener(o,p,d),typeof l=="function")){typeof p!="function"&&p!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(o,l,d);break e}s in e?e[s]=l:l===!0?e.setAttribute(s,""):ws(e,s,l)}}}function rt(e,o,s){switch(o){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var l=!1,d=!1,p;for(p in s)if(s.hasOwnProperty(p)){var S=s[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,o));default:Ue(e,o,p,S,s,null)}}d&&Ue(e,o,"srcSet",s.srcSet,s,null),l&&Ue(e,o,"src",s.src,s,null);return;case"input":me("invalid",e);var E=p=S=d=null,w=null,D=null;for(l in s)if(s.hasOwnProperty(l)){var B=s[l];if(B!=null)switch(l){case"name":d=B;break;case"type":S=B;break;case"checked":w=B;break;case"defaultChecked":D=B;break;case"value":p=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,o));break;default:Ue(e,o,l,B,s,null)}}Fc(e,p,E,w,D,S,d,!1);return;case"select":me("invalid",e),l=S=p=null;for(d in s)if(s.hasOwnProperty(d)&&(E=s[d],E!=null))switch(d){case"value":p=E;break;case"defaultValue":S=E;break;case"multiple":l=E;default:Ue(e,o,d,E,s,null)}o=p,s=S,e.multiple=!!l,o!=null?xo(e,!!l,o,!1):s!=null&&xo(e,!!l,s,!0);return;case"textarea":me("invalid",e),p=d=l=null;for(S in s)if(s.hasOwnProperty(S)&&(E=s[S],E!=null))switch(S){case"value":l=E;break;case"defaultValue":d=E;break;case"children":p=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ue(e,o,S,E,s,null)}Wc(e,l,d,p);return;case"option":for(w in s)if(s.hasOwnProperty(w)&&(l=s[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ue(e,o,w,l,s,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(l=0;l<ji.length;l++)me(ji[l],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in s)if(s.hasOwnProperty(D)&&(l=s[D],l!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,o));default:Ue(e,o,D,l,s,null)}return;default:if(Ca(o)){for(B in s)s.hasOwnProperty(B)&&(l=s[B],l!==void 0&&uu(e,o,B,l,s,void 0));return}}for(E in s)s.hasOwnProperty(E)&&(l=s[E],l!=null&&Ue(e,o,E,l,s,null))}function VT(e,o,s,l){switch(o){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,p=null,S=null,E=null,w=null,D=null,B=null;for(z in s){var O=s[z];if(s.hasOwnProperty(z)&&O!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":w=O;default:l.hasOwnProperty(z)||Ue(e,o,z,null,l,O)}}for(var k in l){var z=l[k];if(O=s[k],l.hasOwnProperty(k)&&(z!=null||O!=null))switch(k){case"type":p=z;break;case"name":d=z;break;case"checked":D=z;break;case"defaultChecked":B=z;break;case"value":S=z;break;case"defaultValue":E=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(r(137,o));break;default:z!==O&&Ue(e,o,k,z,l,O)}}Sa(e,S,E,w,D,B,p,d);return;case"select":z=S=E=k=null;for(p in s)if(w=s[p],s.hasOwnProperty(p)&&w!=null)switch(p){case"value":break;case"multiple":z=w;default:l.hasOwnProperty(p)||Ue(e,o,p,null,l,w)}for(d in l)if(p=l[d],w=s[d],l.hasOwnProperty(d)&&(p!=null||w!=null))switch(d){case"value":k=p;break;case"defaultValue":E=p;break;case"multiple":S=p;default:p!==w&&Ue(e,o,d,p,l,w)}o=E,s=S,l=z,k!=null?xo(e,!!s,k,!1):!!l!=!!s&&(o!=null?xo(e,!!s,o,!0):xo(e,!!s,s?[]:"",!1));return;case"textarea":z=k=null;for(E in s)if(d=s[E],s.hasOwnProperty(E)&&d!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ue(e,o,E,null,l,d)}for(S in l)if(d=l[S],p=s[S],l.hasOwnProperty(S)&&(d!=null||p!=null))switch(S){case"value":k=d;break;case"defaultValue":z=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(r(91));break;default:d!==p&&Ue(e,o,S,d,l,p)}Yc(e,k,z);return;case"option":for(var ee in s)if(k=s[ee],s.hasOwnProperty(ee)&&k!=null&&!l.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Ue(e,o,ee,null,l,k)}for(w in l)if(k=l[w],z=s[w],l.hasOwnProperty(w)&&k!==z&&(k!=null||z!=null))switch(w){case"selected":e.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Ue(e,o,w,k,l,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in s)k=s[se],s.hasOwnProperty(se)&&k!=null&&!l.hasOwnProperty(se)&&Ue(e,o,se,null,l,k);for(D in l)if(k=l[D],z=s[D],l.hasOwnProperty(D)&&k!==z&&(k!=null||z!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(137,o));break;default:Ue(e,o,D,k,l,z)}return;default:if(Ca(o)){for(var ze in s)k=s[ze],s.hasOwnProperty(ze)&&k!==void 0&&!l.hasOwnProperty(ze)&&uu(e,o,ze,void 0,l,k);for(B in l)k=l[B],z=s[B],!l.hasOwnProperty(B)||k===z||k===void 0&&z===void 0||uu(e,o,B,k,l,z);return}}for(var N in s)k=s[N],s.hasOwnProperty(N)&&k!=null&&!l.hasOwnProperty(N)&&Ue(e,o,N,null,l,k);for(O in l)k=l[O],z=s[O],!l.hasOwnProperty(O)||k===z||k==null&&z==null||Ue(e,o,O,k,l,z)}function Xd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function OT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,o=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var d=s[l],p=d.transferSize,S=d.initiatorType,E=d.duration;if(p&&E&&Xd(S)){for(S=0,E=d.responseEnd,l+=1;l<s.length;l++){var w=s[l],D=w.startTime;if(D>E)break;var B=w.transferSize,O=w.initiatorType;B&&Xd(O)&&(w=w.responseEnd,S+=B*(w<E?1:(E-D)/(w-D)))}if(--l,o+=8*(p+S)/(d.duration/1e3),e++,10<e)break}}if(0<e)return o/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cu=null,hu=null;function Cr(e){return e.nodeType===9?e:e.ownerDocument}function Qd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zd(e,o){if(e===0)switch(o){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&o==="foreignObject"?0:e}function gu(e,o){return e==="textarea"||e==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.children=="bigint"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var du=null;function FT(){var e=window.event;return e&&e.type==="popstate"?e===du?!1:(du=e,!0):(du=null,!1)}var $d=typeof setTimeout=="function"?setTimeout:void 0,YT=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,WT=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(e){return jd.resolve(null).then(e).catch(JT)}:$d;function JT(e){setTimeout(function(){throw e})}function Fn(e){return e==="head"}function ef(e,o){var s=o,l=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(d),ii(o);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ts(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,ts(s);for(var p=s.firstChild;p;){var S=p.nextSibling,E=p.nodeName;p[Ti]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=S}}else s==="body"&&ts(e.ownerDocument.body);s=d}while(s);ii(o)}function tf(e,o){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?o?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(o?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function fu(e){var o=e.firstChild;for(o&&o.nodeType===10&&(o=o.nextSibling);o;){var s=o;switch(o=o.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":fu(s),Ta(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function KT(e,o,s,l){for(;e.nodeType===1;){var d=s;if(e.nodeName.toLowerCase()!==o.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ti])switch(o){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(o==="input"&&e.type==="hidden"){var p=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function XT(e,o,s){if(o==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Bt(e.nextSibling),e===null))return null;return e}function nf(e,o){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Bt(e.nextSibling),e===null))return null;return e}function mu(e){return e.data==="$?"||e.data==="$~"}function pu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function QT(e,o){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=o;else if(e.data!=="$?"||s.readyState!=="loading")o();else{var l=function(){o(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Bt(e){for(;e!=null;e=e.nextSibling){var o=e.nodeType;if(o===1||o===3)break;if(o===8){if(o=e.data,o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"||o==="F!"||o==="F")break;if(o==="/$"||o==="/&")return null}}return e}var yu=null;function of(e){e=e.nextSibling;for(var o=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(o===0)return Bt(e.nextSibling);o--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||o++}e=e.nextSibling}return null}function sf(e){e=e.previousSibling;for(var o=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(o===0)return e;o--}else s!=="/$"&&s!=="/&"||o++}e=e.previousSibling}return null}function rf(e,o,s){switch(o=Cr(s),e){case"html":if(e=o.documentElement,!e)throw Error(r(452));return e;case"head":if(e=o.head,!e)throw Error(r(453));return e;case"body":if(e=o.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function ts(e){for(var o=e.attributes;o.length;)e.removeAttributeNode(o[0]);Ta(e)}var qt=new Map,af=new Set;function Ar(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Tn=X.d;X.d={f:ZT,r:$T,D:jT,C:e0,L:t0,m:n0,X:i0,S:o0,M:s0};function ZT(){var e=Tn.f(),o=mr();return e||o}function $T(e){var o=Co(e);o!==null&&o.tag===5&&o.type==="form"?Cg(o):Tn.r(e)}var ti=typeof document>"u"?null:document;function lf(e,o,s){var l=ti;if(l&&typeof o=="string"&&o){var d=It(o);d='link[rel="'+e+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),af.has(d)||(af.add(d),e={rel:e,crossOrigin:s,href:o},l.querySelector(d)===null&&(o=l.createElement("link"),rt(o,"link",e),$e(o),l.head.appendChild(o)))}}function jT(e){Tn.D(e),lf("dns-prefetch",e,null)}function e0(e,o){Tn.C(e,o),lf("preconnect",e,o)}function t0(e,o,s){Tn.L(e,o,s);var l=ti;if(l&&e&&o){var d='link[rel="preload"][as="'+It(o)+'"]';o==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+It(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+It(s.imageSizes)+'"]')):d+='[href="'+It(e)+'"]';var p=d;switch(o){case"style":p=ni(e);break;case"script":p=oi(e)}qt.has(p)||(e=T({rel:"preload",href:o==="image"&&s&&s.imageSrcSet?void 0:e,as:o},s),qt.set(p,e),l.querySelector(d)!==null||o==="style"&&l.querySelector(ns(p))||o==="script"&&l.querySelector(os(p))||(o=l.createElement("link"),rt(o,"link",e),$e(o),l.head.appendChild(o)))}}function n0(e,o){Tn.m(e,o);var s=ti;if(s&&e){var l=o&&typeof o.as=="string"?o.as:"script",d='link[rel="modulepreload"][as="'+It(l)+'"][href="'+It(e)+'"]',p=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=oi(e)}if(!qt.has(p)&&(e=T({rel:"modulepreload",href:e},o),qt.set(p,e),s.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(os(p)))return}l=s.createElement("link"),rt(l,"link",e),$e(l),s.head.appendChild(l)}}}function o0(e,o,s){Tn.S(e,o,s);var l=ti;if(l&&e){var d=Ao(l).hoistableStyles,p=ni(e);o=o||"default";var S=d.get(p);if(!S){var E={loading:0,preload:null};if(S=l.querySelector(ns(p)))E.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":o},s),(s=qt.get(p))&&vu(e,s);var w=S=l.createElement("link");$e(w),rt(w,"link",e),w._p=new Promise(function(D,B){w.onload=D,w.onerror=B}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,wr(S,o,l)}S={type:"stylesheet",instance:S,count:1,state:E},d.set(p,S)}}}function i0(e,o){Tn.X(e,o);var s=ti;if(s&&e){var l=Ao(s).hoistableScripts,d=oi(e),p=l.get(d);p||(p=s.querySelector(os(d)),p||(e=T({src:e,async:!0},o),(o=qt.get(d))&&Tu(e,o),p=s.createElement("script"),$e(p),rt(p,"link",e),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(d,p))}}function s0(e,o){Tn.M(e,o);var s=ti;if(s&&e){var l=Ao(s).hoistableScripts,d=oi(e),p=l.get(d);p||(p=s.querySelector(os(d)),p||(e=T({src:e,async:!0,type:"module"},o),(o=qt.get(d))&&Tu(e,o),p=s.createElement("script"),$e(p),rt(p,"link",e),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(d,p))}}function uf(e,o,s,l){var d=(d=de.current)?Ar(d):null;if(!d)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(o=ni(s.href),s=Ao(d).hoistableStyles,l=s.get(o),l||(l={type:"style",instance:null,count:0,state:null},s.set(o,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=ni(s.href);var p=Ao(d).hoistableStyles,S=p.get(e);if(S||(d=d.ownerDocument||d,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,S),(p=d.querySelector(ns(e)))&&!p._p&&(S.instance=p,S.state.loading=5),qt.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},qt.set(e,s),p||r0(d,e,s,S.state))),o&&l===null)throw Error(r(528,""));return S}if(o&&l!==null)throw Error(r(529,""));return null;case"script":return o=s.async,s=s.src,typeof s=="string"&&o&&typeof o!="function"&&typeof o!="symbol"?(o=oi(s),s=Ao(d).hoistableScripts,l=s.get(o),l||(l={type:"script",instance:null,count:0,state:null},s.set(o,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ni(e){return'href="'+It(e)+'"'}function ns(e){return'link[rel="stylesheet"]['+e+"]"}function cf(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function r0(e,o,s,l){e.querySelector('link[rel="preload"][as="style"]['+o+"]")?l.loading=1:(o=e.createElement("link"),l.preload=o,o.addEventListener("load",function(){return l.loading|=1}),o.addEventListener("error",function(){return l.loading|=2}),rt(o,"link",s),$e(o),e.head.appendChild(o))}function oi(e){return'[src="'+It(e)+'"]'}function os(e){return"script[async]"+e}function hf(e,o,s){if(o.count++,o.instance===null)switch(o.type){case"style":var l=e.querySelector('style[data-href~="'+It(s.href)+'"]');if(l)return o.instance=l,$e(l),l;var d=T({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),$e(l),rt(l,"style",d),wr(l,s.precedence,e),o.instance=l;case"stylesheet":d=ni(s.href);var p=e.querySelector(ns(d));if(p)return o.state.loading|=4,o.instance=p,$e(p),p;l=cf(s),(d=qt.get(d))&&vu(l,d),p=(e.ownerDocument||e).createElement("link"),$e(p);var S=p;return S._p=new Promise(function(E,w){S.onload=E,S.onerror=w}),rt(p,"link",l),o.state.loading|=4,wr(p,s.precedence,e),o.instance=p;case"script":return p=oi(s.src),(d=e.querySelector(os(p)))?(o.instance=d,$e(d),d):(l=s,(d=qt.get(p))&&(l=T({},s),Tu(l,d)),e=e.ownerDocument||e,d=e.createElement("script"),$e(d),rt(d,"link",l),e.head.appendChild(d),o.instance=d);case"void":return null;default:throw Error(r(443,o.type))}else o.type==="stylesheet"&&(o.state.loading&4)===0&&(l=o.instance,o.state.loading|=4,wr(l,s.precedence,e));return o.instance}function wr(e,o,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,p=d,S=0;S<l.length;S++){var E=l[S];if(E.dataset.precedence===o)p=E;else if(p!==d)break}p?p.parentNode.insertBefore(e,p.nextSibling):(o=s.nodeType===9?s.head:s,o.insertBefore(e,o.firstChild))}function vu(e,o){e.crossOrigin==null&&(e.crossOrigin=o.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=o.referrerPolicy),e.title==null&&(e.title=o.title)}function Tu(e,o){e.crossOrigin==null&&(e.crossOrigin=o.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=o.referrerPolicy),e.integrity==null&&(e.integrity=o.integrity)}var xr=null;function gf(e,o,s){if(xr===null){var l=new Map,d=xr=new Map;d.set(s,l)}else d=xr,l=d.get(s),l||(l=new Map,d.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),d=0;d<s.length;d++){var p=s[d];if(!(p[Ti]||p[nt]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(o)||"";S=e+S;var E=l.get(S);E?E.push(p):l.set(S,[p])}}return l}function df(e,o,s){e=e.ownerDocument||e,e.head.insertBefore(s,o==="title"?e.querySelector("head > title"):null)}function a0(e,o,s){if(s===1||o.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof o.precedence!="string"||typeof o.href!="string"||o.href==="")break;return!0;case"link":if(typeof o.rel!="string"||typeof o.href!="string"||o.href===""||o.onLoad||o.onError)break;switch(o.rel){case"stylesheet":return e=o.disabled,typeof o.precedence=="string"&&e==null;default:return!0}case"script":if(o.async&&typeof o.async!="function"&&typeof o.async!="symbol"&&!o.onLoad&&!o.onError&&o.src&&typeof o.src=="string")return!0}return!1}function ff(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function l0(e,o,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=ni(l.href),p=o.querySelector(ns(d));if(p){o=p._p,o!==null&&typeof o=="object"&&typeof o.then=="function"&&(e.count++,e=br.bind(e),o.then(e,e)),s.state.loading|=4,s.instance=p,$e(p);return}p=o.ownerDocument||o,l=cf(l),(d=qt.get(d))&&vu(l,d),p=p.createElement("link"),$e(p);var S=p;S._p=new Promise(function(E,w){S.onload=E,S.onerror=w}),rt(p,"link",l),s.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,o),(o=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=br.bind(e),o.addEventListener("load",s),o.addEventListener("error",s))}}var _u=0;function u0(e,o){return e.stylesheets&&e.count===0&&Mr(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&Mr(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+o);0<e.imgBytes&&_u===0&&(_u=62500*OT());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Mr(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>_u?50:800)+o);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function br(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Rr=null;function Mr(e,o){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Rr=new Map,o.forEach(c0,e),Rr=null,br.call(e))}function c0(e,o){if(!(o.state.loading&4)){var s=Rr.get(e);if(s)var l=s.get(null);else{s=new Map,Rr.set(e,s);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<d.length;p++){var S=d[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}d=o.instance,S=d.getAttribute("data-precedence"),p=s.get(S)||l,p===l&&s.set(null,d),s.set(S,d),this.count++,l=br.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),p?p.parentNode.insertBefore(d,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),o.state.loading|=4}}var is={$$typeof:P,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function h0(e,o,s,l,d,p,S,E,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ma(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.hiddenUpdates=ma(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function mf(e,o,s,l,d,p,S,E,w,D,B,O){return e=new h0(e,o,s,S,w,D,B,O,E),o=1,p===!0&&(o|=24),p=Ct(3,null,null,o),e.current=p,p.stateNode=e,o=ja(),o.refCount++,e.pooledCache=o,o.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:o},ol(p),e}function pf(e){return e?(e=Uo,e):Uo}function yf(e,o,s,l,d,p){d=pf(d),l.context===null?l.context=d:l.pendingContext=d,l=kn(o),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=Un(e,l,o),s!==null&&(vt(s,e,o),Li(s,e,o))}function vf(e,o){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<o?s:o}}function Su(e,o){vf(e,o),(e=e.alternate)&&vf(e,o)}function Tf(e){if(e.tag===13||e.tag===31){var o=so(e,67108864);o!==null&&vt(o,e,67108864),Su(e,67108864)}}function _f(e){if(e.tag===13||e.tag===31){var o=Rt();o=pa(o);var s=so(e,o);s!==null&&vt(s,e,o),Su(e,o)}}var Nr=!0;function g0(e,o,s,l){var d=H.T;H.T=null;var p=X.p;try{X.p=2,Eu(e,o,s,l)}finally{X.p=p,H.T=d}}function d0(e,o,s,l){var d=H.T;H.T=null;var p=X.p;try{X.p=8,Eu(e,o,s,l)}finally{X.p=p,H.T=d}}function Eu(e,o,s,l){if(Nr){var d=Cu(l);if(d===null)lu(e,o,l,Ir,s),Ef(e,l);else if(m0(d,e,o,s,l))l.stopPropagation();else if(Ef(e,l),o&4&&-1<f0.indexOf(e)){for(;d!==null;){var p=Co(d);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=eo(p.pendingLanes);if(S!==0){var E=p;for(E.pendingLanes|=2,E.entangledLanes|=2;S;){var w=1<<31-St(S);E.entanglements[1]|=w,S&=~w}$t(p),(xe&6)===0&&(dr=Tt()+500,$i(0))}}break;case 31:case 13:E=so(p,2),E!==null&&vt(E,p,2),mr(),Su(p,2)}if(p=Cu(l),p===null&&lu(e,o,l,Ir,s),p===d)break;d=p}d!==null&&l.stopPropagation()}else lu(e,o,l,null,s)}}function Cu(e){return e=wa(e),Au(e)}var Ir=null;function Au(e){if(Ir=null,e=Eo(e),e!==null){var o=c(e);if(o===null)e=null;else{var s=o.tag;if(s===13){if(e=g(o),e!==null)return e;e=null}else if(s===31){if(e=m(o),e!==null)return e;e=null}else if(s===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;e=null}else o!==e&&(e=null)}}return Ir=e,null}function Sf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jy()){case Rc:return 2;case Mc:return 8;case _s:case ev:return 32;case Nc:return 268435456;default:return 32}default:return 32}}var wu=!1,Yn=null,Wn=null,Jn=null,ss=new Map,rs=new Map,Kn=[],f0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ef(e,o){switch(e){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":ss.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":rs.delete(o.pointerId)}}function as(e,o,s,l,d,p){return e===null||e.nativeEvent!==p?(e={blockedOn:o,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},o!==null&&(o=Co(o),o!==null&&Tf(o)),e):(e.eventSystemFlags|=l,o=e.targetContainers,d!==null&&o.indexOf(d)===-1&&o.push(d),e)}function m0(e,o,s,l,d){switch(o){case"focusin":return Yn=as(Yn,e,o,s,l,d),!0;case"dragenter":return Wn=as(Wn,e,o,s,l,d),!0;case"mouseover":return Jn=as(Jn,e,o,s,l,d),!0;case"pointerover":var p=d.pointerId;return ss.set(p,as(ss.get(p)||null,e,o,s,l,d)),!0;case"gotpointercapture":return p=d.pointerId,rs.set(p,as(rs.get(p)||null,e,o,s,l,d)),!0}return!1}function Cf(e){var o=Eo(e.target);if(o!==null){var s=c(o);if(s!==null){if(o=s.tag,o===13){if(o=g(s),o!==null){e.blockedOn=o,Lc(e.priority,function(){_f(s)});return}}else if(o===31){if(o=m(s),o!==null){e.blockedOn=o,Lc(e.priority,function(){_f(s)});return}}else if(o===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var o=e.targetContainers;0<o.length;){var s=Cu(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Aa=l,s.target.dispatchEvent(l),Aa=null}else return o=Co(s),o!==null&&Tf(o),e.blockedOn=s,!1;o.shift()}return!0}function Af(e,o,s){Dr(e)&&s.delete(o)}function p0(){wu=!1,Yn!==null&&Dr(Yn)&&(Yn=null),Wn!==null&&Dr(Wn)&&(Wn=null),Jn!==null&&Dr(Jn)&&(Jn=null),ss.forEach(Af),rs.forEach(Af)}function kr(e,o){e.blockedOn===o&&(e.blockedOn=null,wu||(wu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,p0)))}var Ur=null;function wf(e){Ur!==e&&(Ur=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ur===e&&(Ur=null);for(var o=0;o<e.length;o+=3){var s=e[o],l=e[o+1],d=e[o+2];if(typeof l!="function"){if(Au(l||s)===null)continue;break}var p=Co(s);p!==null&&(e.splice(o,3),o-=3,Cl(p,{pending:!0,data:d,method:s.method,action:l},l,d))}}))}function ii(e){function o(w){return kr(w,e)}Yn!==null&&kr(Yn,e),Wn!==null&&kr(Wn,e),Jn!==null&&kr(Jn,e),ss.forEach(o),rs.forEach(o);for(var s=0;s<Kn.length;s++){var l=Kn[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Kn.length&&(s=Kn[0],s.blockedOn===null);)Cf(s),s.blockedOn===null&&Kn.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var d=s[l],p=s[l+1],S=d[gt]||null;if(typeof p=="function")S||wf(s);else if(S){var E=null;if(p&&p.hasAttribute("formAction")){if(d=p,S=p[gt]||null)E=S.formAction;else if(Au(d)!==null)continue}else E=S.action;typeof E=="function"?s[l+1]=E:(s.splice(l,3),l-=3),wf(s)}}}function xf(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return d=S})},focusReset:"manual",scroll:"manual"})}function o(){d!==null&&(d(),d=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",o),navigation.addEventListener("navigateerror",o),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",o),navigation.removeEventListener("navigateerror",o),d!==null&&(d(),d=null)}}}function xu(e){this._internalRoot=e}zr.prototype.render=xu.prototype.render=function(e){var o=this._internalRoot;if(o===null)throw Error(r(409));var s=o.current,l=Rt();yf(s,l,e,o,null,null)},zr.prototype.unmount=xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var o=e.containerInfo;yf(e.current,2,null,e,null,null),mr(),o[So]=null}};function zr(e){this._internalRoot=e}zr.prototype.unstable_scheduleHydration=function(e){if(e){var o=zc();e={blockedOn:null,target:e,priority:o};for(var s=0;s<Kn.length&&o!==0&&o<Kn[s].priority;s++);Kn.splice(s,0,e),s===0&&Cf(e)}};var bf=t.version;if(bf!=="19.2.4")throw Error(r(527,bf,"19.2.4"));X.findDOMNode=function(e){var o=e._reactInternals;if(o===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=f(o),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var y0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{pi=Lr.inject(y0),_t=Lr}catch{}}return us.createRoot=function(e,o){if(!a(e))throw Error(r(299));var s=!1,l="",d=kg,p=Ug,S=zg;return o!=null&&(o.unstable_strictMode===!0&&(s=!0),o.identifierPrefix!==void 0&&(l=o.identifierPrefix),o.onUncaughtError!==void 0&&(d=o.onUncaughtError),o.onCaughtError!==void 0&&(p=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError)),o=mf(e,1,!1,null,null,s,l,null,d,p,S,xf),e[So]=o.current,au(e),new xu(o)},us.hydrateRoot=function(e,o,s){if(!a(e))throw Error(r(299));var l=!1,d="",p=kg,S=Ug,E=zg,w=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.formState!==void 0&&(w=s.formState)),o=mf(e,1,!0,o,s??null,l,d,w,p,S,E,xf),o.context=pf(null),s=o.current,l=Rt(),l=pa(l),d=kn(l),d.callback=null,Un(s,d,l),s=l,o.current.lanes=s,vi(o,s),$t(o),e[So]=o.current,au(e),new zr(o)},us.version="19.2.4",us}var Hf;function b0(){if(Hf)return Mu.exports;Hf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Mu.exports=x0(),Mu.exports}var R0=b0();const M0=ac(R0);/**
 * react-router v7.13.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bf="popstate";function qf(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function N0(n={}){function t(a,c){let{pathname:g="/",search:m="",hash:y=""}=ui(a.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Fu("",{pathname:g,search:m,hash:y},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(a,c){let g=a.document.querySelector("base"),m="";if(g&&g.getAttribute("href")){let y=a.location.href,f=y.indexOf("#");m=f===-1?y:y.slice(0,f)}return m+"#"+(typeof c=="string"?c:ms(c))}function r(a,c){Jt(a.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return D0(t,i,r,n)}function Ze(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function Jt(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function I0(){return Math.random().toString(36).substring(2,10)}function Pf(n,t){return{usr:n.state,key:n.key,idx:t,masked:n.unstable_mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function Fu(n,t,i=null,r,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?ui(t):t,state:i,key:t&&t.key||r||I0(),unstable_mask:a}}function ms({pathname:n="/",search:t="",hash:i=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function ui(n){let t={};if(n){let i=n.indexOf("#");i>=0&&(t.hash=n.substring(i),n=n.substring(0,i));let r=n.indexOf("?");r>=0&&(t.search=n.substring(r),n=n.substring(0,r)),n&&(t.pathname=n)}return t}function D0(n,t,i,r={}){let{window:a=document.defaultView,v5Compat:c=!1}=r,g=a.history,m="POP",y=null,f=v();f==null&&(f=0,g.replaceState({...g.state,idx:f},""));function v(){return(g.state||{idx:null}).idx}function T(){m="POP";let x=v(),U=x==null?null:x-f;f=x,y&&y({action:m,location:M.location,delta:U})}function _(x,U){m="PUSH";let Y=qf(x)?x:Fu(M.location,x,U);i&&i(Y,x),f=v()+1;let P=Pf(Y,f),J=M.createHref(Y.unstable_mask||Y);try{g.pushState(P,"",J)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;a.location.assign(J)}c&&y&&y({action:m,location:M.location,delta:1})}function C(x,U){m="REPLACE";let Y=qf(x)?x:Fu(M.location,x,U);i&&i(Y,x),f=v();let P=Pf(Y,f),J=M.createHref(Y.unstable_mask||Y);g.replaceState(P,"",J),c&&y&&y({action:m,location:M.location,delta:0})}function A(x){return k0(x)}let M={get action(){return m},get location(){return n(a,g)},listen(x){if(y)throw new Error("A history only accepts one active listener");return a.addEventListener(Bf,T),y=x,()=>{a.removeEventListener(Bf,T),y=null}},createHref(x){return t(a,x)},createURL:A,encodeLocation(x){let U=A(x);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:_,replace:C,go(x){return g.go(x)}};return M}function k0(n,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ze(i,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:ms(n);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Lp(n,t,i="/"){return U0(n,t,i,!1)}function U0(n,t,i,r){let a=typeof t=="string"?ui(t):t,c=_n(a.pathname||"/",i);if(c==null)return null;let g=Hp(n);z0(g);let m=null;for(let y=0;m==null&&y<g.length;++y){let f=W0(c);m=F0(g[y],f,r)}return m}function Hp(n,t=[],i=[],r="",a=!1){let c=(g,m,y=a,f)=>{let v={relativePath:f===void 0?g.path||"":f,caseSensitive:g.caseSensitive===!0,childrenIndex:m,route:g};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&y)return;Ze(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let T=jt([r,v.relativePath]),_=i.concat(v);g.children&&g.children.length>0&&(Ze(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),Hp(g.children,t,_,T,y)),!(g.path==null&&!g.index)&&t.push({path:T,score:V0(T,g.index),routesMeta:_})};return n.forEach((g,m)=>{var y;if(g.path===""||!((y=g.path)!=null&&y.includes("?")))c(g,m);else for(let f of Bp(g.path))c(g,m,!0,f)}),t}function Bp(n){let t=n.split("/");if(t.length===0)return[];let[i,...r]=t,a=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return a?[c,""]:[c];let g=Bp(r.join("/")),m=[];return m.push(...g.map(y=>y===""?c:[c,y].join("/"))),a&&m.push(...g),m.map(y=>n.startsWith("/")&&y===""?"/":y)}function z0(n){n.sort((t,i)=>t.score!==i.score?i.score-t.score:O0(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var L0=/^:[\w-]+$/,H0=3,B0=2,q0=1,P0=10,G0=-2,Gf=n=>n==="*";function V0(n,t){let i=n.split("/"),r=i.length;return i.some(Gf)&&(r+=G0),t&&(r+=B0),i.filter(a=>!Gf(a)).reduce((a,c)=>a+(L0.test(c)?H0:c===""?q0:P0),r)}function O0(n,t){return n.length===t.length&&n.slice(0,-1).every((r,a)=>r===t[a])?n[n.length-1]-t[t.length-1]:0}function F0(n,t,i=!1){let{routesMeta:r}=n,a={},c="/",g=[];for(let m=0;m<r.length;++m){let y=r[m],f=m===r.length-1,v=c==="/"?t:t.slice(c.length)||"/",T=Wr({path:y.relativePath,caseSensitive:y.caseSensitive,end:f},v),_=y.route;if(!T&&f&&i&&!r[r.length-1].route.index&&(T=Wr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},v)),!T)return null;Object.assign(a,T.params),g.push({params:a,pathname:jt([c,T.pathname]),pathnameBase:Q0(jt([c,T.pathnameBase])),route:_}),T.pathnameBase!=="/"&&(c=jt([c,T.pathnameBase]))}return g}function Wr(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,r]=Y0(n.path,n.caseSensitive,n.end),a=t.match(i);if(!a)return null;let c=a[0],g=c.replace(/(.)\/+$/,"$1"),m=a.slice(1);return{params:r.reduce((f,{paramName:v,isOptional:T},_)=>{if(v==="*"){let A=m[_]||"";g=c.slice(0,c.length-A.length).replace(/(.)\/+$/,"$1")}const C=m[_];return T&&!C?f[v]=void 0:f[v]=(C||"").replace(/%2F/g,"/"),f},{}),pathname:c,pathnameBase:g,pattern:n}}function Y0(n,t=!1,i=!0){Jt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,m,y,f,v)=>{if(r.push({paramName:m,isOptional:y!=null}),y){let T=v.charAt(f+g.length);return T&&T!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function W0(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Jt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function _n(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=n.charAt(i);return r&&r!=="/"?null:n.slice(i)||"/"}var J0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function K0(n,t="/"){let{pathname:i,search:r="",hash:a=""}=typeof n=="string"?ui(n):n,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=Vf(i.substring(1),"/"):c=Vf(i,t)):c=t,{pathname:c,search:Z0(r),hash:$0(a)}}function Vf(n,t){let i=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?i.length>1&&i.pop():a!=="."&&i.push(a)}),i.length>1?i.join("/"):"/"}function ku(n,t,i,r){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function X0(n){return n.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function qp(n){let t=X0(n);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function uc(n,t,i,r=!1){let a;typeof n=="string"?a=ui(n):(a={...n},Ze(!a.pathname||!a.pathname.includes("?"),ku("?","pathname","search",a)),Ze(!a.pathname||!a.pathname.includes("#"),ku("#","pathname","hash",a)),Ze(!a.search||!a.search.includes("#"),ku("#","search","hash",a)));let c=n===""||a.pathname==="",g=c?"/":a.pathname,m;if(g==null)m=i;else{let T=t.length-1;if(!r&&g.startsWith("..")){let _=g.split("/");for(;_[0]==="..";)_.shift(),T-=1;a.pathname=_.join("/")}m=T>=0?t[T]:"/"}let y=K0(a,m),f=g&&g!=="/"&&g.endsWith("/"),v=(c||g===".")&&i.endsWith("/");return!y.pathname.endsWith("/")&&(f||v)&&(y.pathname+="/"),y}var jt=n=>n.join("/").replace(/\/\/+/g,"/"),Q0=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Z0=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,$0=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,j0=class{constructor(n,t,i,r=!1){this.status=n,this.statusText=t||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function e_(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function t_(n){return n.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Pp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Gp(n,t){let i=n;if(typeof i!="string"||!J0.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,a=!1;if(Pp)try{let c=new URL(window.location.href),g=i.startsWith("//")?new URL(c.protocol+i):new URL(i),m=_n(g.pathname,t);g.origin===c.origin&&m!=null?i=m+g.search+g.hash:a=!0}catch{Jt(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:a,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Vp=["POST","PUT","PATCH","DELETE"];new Set(Vp);var n_=["GET",...Vp];new Set(n_);var ci=q.createContext(null);ci.displayName="DataRouter";var ea=q.createContext(null);ea.displayName="DataRouterState";var o_=q.createContext(!1),Op=q.createContext({isTransitioning:!1});Op.displayName="ViewTransition";var i_=q.createContext(new Map);i_.displayName="Fetchers";var s_=q.createContext(null);s_.displayName="Await";var Gt=q.createContext(null);Gt.displayName="Navigation";var ta=q.createContext(null);ta.displayName="Location";var En=q.createContext({outlet:null,matches:[],isDataRoute:!1});En.displayName="Route";var cc=q.createContext(null);cc.displayName="RouteError";var Fp="REACT_ROUTER_ERROR",r_="REDIRECT",a_="ROUTE_ERROR_RESPONSE";function l_(n){if(n.startsWith(`${Fp}:${r_}:{`))try{let t=JSON.parse(n.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function u_(n){if(n.startsWith(`${Fp}:${a_}:{`))try{let t=JSON.parse(n.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new j0(t.status,t.statusText,t.data)}catch{}}function c_(n,{relative:t}={}){Ze(ps(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=q.useContext(Gt),{hash:a,pathname:c,search:g}=ys(n,{relative:t}),m=c;return i!=="/"&&(m=c==="/"?i:jt([i,c])),r.createHref({pathname:m,search:g,hash:a})}function ps(){return q.useContext(ta)!=null}function Zn(){return Ze(ps(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(ta).location}var Yp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Wp(n){q.useContext(Gt).static||q.useLayoutEffect(n)}function h_(){let{isDataRoute:n}=q.useContext(En);return n?A_():g_()}function g_(){Ze(ps(),"useNavigate() may be used only in the context of a <Router> component.");let n=q.useContext(ci),{basename:t,navigator:i}=q.useContext(Gt),{matches:r}=q.useContext(En),{pathname:a}=Zn(),c=JSON.stringify(qp(r)),g=q.useRef(!1);return Wp(()=>{g.current=!0}),q.useCallback((y,f={})=>{if(Jt(g.current,Yp),!g.current)return;if(typeof y=="number"){i.go(y);return}let v=uc(y,JSON.parse(c),a,f.relative==="path");n==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:jt([t,v.pathname])),(f.replace?i.replace:i.push)(v,f.state,f)},[t,i,c,a,n])}q.createContext(null);function ys(n,{relative:t}={}){let{matches:i}=q.useContext(En),{pathname:r}=Zn(),a=JSON.stringify(qp(i));return q.useMemo(()=>uc(n,JSON.parse(a),r,t==="path"),[n,a,r,t])}function d_(n,t,i){Ze(ps(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=q.useContext(Gt),{matches:a}=q.useContext(En),c=a[a.length-1],g=c?c.params:{},m=c?c.pathname:"/",y=c?c.pathnameBase:"/",f=c&&c.route;{let x=f&&f.path||"";Kp(m,!f||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let v=Zn(),T;T=v;let _=T.pathname||"/",C=_;if(y!=="/"){let x=y.replace(/^\//,"").split("/");C="/"+_.replace(/^\//,"").split("/").slice(x.length).join("/")}let A=Lp(n,{pathname:C});return Jt(f||A!=null,`No routes matched location "${T.pathname}${T.search}${T.hash}" `),Jt(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),v_(A&&A.map(x=>Object.assign({},x,{params:Object.assign({},g,x.params),pathname:jt([y,r.encodeLocation?r.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?y:jt([y,r.encodeLocation?r.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),a,i)}function f_(){let n=C_(),t=e_(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},g=null;return console.error("Error handled by React Router default ErrorBoundary:",n),g=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:c},"ErrorBoundary")," or"," ",q.createElement("code",{style:c},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},t),i?q.createElement("pre",{style:a},i):null,g)}var m_=q.createElement(f_,null),Jp=class extends q.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){this.props.onError?this.props.onError(n,t):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const i=u_(n.digest);i&&(n=i)}let t=n!==void 0?q.createElement(En.Provider,{value:this.props.routeContext},q.createElement(cc.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?q.createElement(p_,{error:n},t):t}};Jp.contextType=o_;var Uu=new WeakMap;function p_({children:n,error:t}){let{basename:i}=q.useContext(Gt);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=l_(t.digest);if(r){let a=Uu.get(t);if(a)throw a;let c=Gp(r.location,i);if(Pp&&!Uu.get(t))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Uu.set(t,g),g}return q.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return n}function y_({routeContext:n,match:t,children:i}){let r=q.useContext(ci);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),q.createElement(En.Provider,{value:n},i)}function v_(n,t=[],i){let r=i==null?void 0:i.state;if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let a=n,c=r==null?void 0:r.errors;if(c!=null){let v=a.findIndex(T=>T.route.id&&(c==null?void 0:c[T.route.id])!==void 0);Ze(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),a=a.slice(0,Math.min(a.length,v+1))}let g=!1,m=-1;if(i&&r){g=r.renderFallback;for(let v=0;v<a.length;v++){let T=a[v];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(m=v),T.route.id){let{loaderData:_,errors:C}=r,A=T.route.loader&&!_.hasOwnProperty(T.route.id)&&(!C||C[T.route.id]===void 0);if(T.route.lazy||A){i.isStatic&&(g=!0),m>=0?a=a.slice(0,m+1):a=[a[0]];break}}}}let y=i==null?void 0:i.onError,f=r&&y?(v,T)=>{var _,C;y(v,{location:r.location,params:((C=(_=r.matches)==null?void 0:_[0])==null?void 0:C.params)??{},unstable_pattern:t_(r.matches),errorInfo:T})}:void 0;return a.reduceRight((v,T,_)=>{let C,A=!1,M=null,x=null;r&&(C=c&&T.route.id?c[T.route.id]:void 0,M=T.route.errorElement||m_,g&&(m<0&&_===0?(Kp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,x=null):m===_&&(A=!0,x=T.route.hydrateFallbackElement||null)));let U=t.concat(a.slice(0,_+1)),Y=()=>{let P;return C?P=M:A?P=x:T.route.Component?P=q.createElement(T.route.Component,null):T.route.element?P=T.route.element:P=v,q.createElement(y_,{match:T,routeContext:{outlet:v,matches:U,isDataRoute:r!=null},children:P})};return r&&(T.route.ErrorBoundary||T.route.errorElement||_===0)?q.createElement(Jp,{location:r.location,revalidation:r.revalidation,component:M,error:C,children:Y(),routeContext:{outlet:null,matches:U,isDataRoute:!0},onError:f}):Y()},null)}function hc(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function T_(n){let t=q.useContext(ci);return Ze(t,hc(n)),t}function __(n){let t=q.useContext(ea);return Ze(t,hc(n)),t}function S_(n){let t=q.useContext(En);return Ze(t,hc(n)),t}function gc(n){let t=S_(n),i=t.matches[t.matches.length-1];return Ze(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function E_(){return gc("useRouteId")}function C_(){var r;let n=q.useContext(cc),t=__("useRouteError"),i=gc("useRouteError");return n!==void 0?n:(r=t.errors)==null?void 0:r[i]}function A_(){let{router:n}=T_("useNavigate"),t=gc("useNavigate"),i=q.useRef(!1);return Wp(()=>{i.current=!0}),q.useCallback(async(a,c={})=>{Jt(i.current,Yp),i.current&&(typeof a=="number"?await n.navigate(a):await n.navigate(a,{fromRouteId:t,...c}))},[n,t])}var Of={};function Kp(n,t,i){!t&&!Of[n]&&(Of[n]=!0,Jt(!1,i))}q.memo(w_);function w_({routes:n,future:t,state:i,isStatic:r,onError:a}){return d_(n,void 0,{state:i,isStatic:r,onError:a})}function x_({basename:n="/",children:t=null,location:i,navigationType:r="POP",navigator:a,static:c=!1,unstable_useTransitions:g}){Ze(!ps(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=n.replace(/^\/*/,"/"),y=q.useMemo(()=>({basename:m,navigator:a,static:c,unstable_useTransitions:g,future:{}}),[m,a,c,g]);typeof i=="string"&&(i=ui(i));let{pathname:f="/",search:v="",hash:T="",state:_=null,key:C="default",unstable_mask:A}=i,M=q.useMemo(()=>{let x=_n(f,m);return x==null?null:{location:{pathname:x,search:v,hash:T,state:_,key:C,unstable_mask:A},navigationType:r}},[m,f,v,T,_,C,r,A]);return Jt(M!=null,`<Router basename="${m}"> is not able to match the URL "${f}${v}${T}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:q.createElement(Gt.Provider,{value:y},q.createElement(ta.Provider,{children:t,value:M}))}var Vr="get",Or="application/x-www-form-urlencoded";function na(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function b_(n){return na(n)&&n.tagName.toLowerCase()==="button"}function R_(n){return na(n)&&n.tagName.toLowerCase()==="form"}function M_(n){return na(n)&&n.tagName.toLowerCase()==="input"}function N_(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function I_(n,t){return n.button===0&&(!t||t==="_self")&&!N_(n)}var Hr=null;function D_(){if(Hr===null)try{new FormData(document.createElement("form"),0),Hr=!1}catch{Hr=!0}return Hr}var k_=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zu(n){return n!=null&&!k_.has(n)?(Jt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Or}"`),null):n}function U_(n,t){let i,r,a,c,g;if(R_(n)){let m=n.getAttribute("action");r=m?_n(m,t):null,i=n.getAttribute("method")||Vr,a=zu(n.getAttribute("enctype"))||Or,c=new FormData(n)}else if(b_(n)||M_(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=n.getAttribute("formaction")||m.getAttribute("action");if(r=y?_n(y,t):null,i=n.getAttribute("formmethod")||m.getAttribute("method")||Vr,a=zu(n.getAttribute("formenctype"))||zu(m.getAttribute("enctype"))||Or,c=new FormData(m,n),!D_()){let{name:f,type:v,value:T}=n;if(v==="image"){let _=f?`${f}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else f&&c.append(f,T)}}else{if(na(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Vr,r=null,a=Or,g=n}return c&&a==="text/plain"&&(g=c,c=void 0),{action:r,method:i.toLowerCase(),encType:a,formData:c,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function dc(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function z_(n,t,i,r){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${r}`:a.pathname=`${a.pathname}.${r}`:a.pathname==="/"?a.pathname=`_root.${r}`:t&&_n(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function L_(n,t){if(n.id in t)return t[n.id];try{let i=await import(n.module);return t[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function H_(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function B_(n,t,i){let r=await Promise.all(n.map(async a=>{let c=t.routes[a.route.id];if(c){let g=await L_(c,i);return g.links?g.links():[]}return[]}));return V_(r.flat(1).filter(H_).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Ff(n,t,i,r,a,c){let g=(y,f)=>i[f]?y.route.id!==i[f].route.id:!0,m=(y,f)=>{var v;return i[f].pathname!==y.pathname||((v=i[f].route.path)==null?void 0:v.endsWith("*"))&&i[f].params["*"]!==y.params["*"]};return c==="assets"?t.filter((y,f)=>g(y,f)||m(y,f)):c==="data"?t.filter((y,f)=>{var T;let v=r.routes[y.route.id];if(!v||!v.hasLoader)return!1;if(g(y,f)||m(y,f))return!0;if(y.route.shouldRevalidate){let _=y.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=i[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function q_(n,t,{includeHydrateFallback:i}={}){return P_(n.map(r=>{let a=t.routes[r.route.id];if(!a)return[];let c=[a.module];return a.clientActionModule&&(c=c.concat(a.clientActionModule)),a.clientLoaderModule&&(c=c.concat(a.clientLoaderModule)),i&&a.hydrateFallbackModule&&(c=c.concat(a.hydrateFallbackModule)),a.imports&&(c=c.concat(a.imports)),c}).flat(1))}function P_(n){return[...new Set(n)]}function G_(n){let t={},i=Object.keys(n).sort();for(let r of i)t[r]=n[r];return t}function V_(n,t){let i=new Set;return new Set(t),n.reduce((r,a)=>{let c=JSON.stringify(G_(a));return i.has(c)||(i.add(c),r.push({key:c,link:a})),r},[])}function Xp(){let n=q.useContext(ci);return dc(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function O_(){let n=q.useContext(ea);return dc(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var fc=q.createContext(void 0);fc.displayName="FrameworkContext";function Qp(){let n=q.useContext(fc);return dc(n,"You must render this element inside a <HydratedRouter> element"),n}function F_(n,t){let i=q.useContext(fc),[r,a]=q.useState(!1),[c,g]=q.useState(!1),{onFocus:m,onBlur:y,onMouseEnter:f,onMouseLeave:v,onTouchStart:T}=t,_=q.useRef(null);q.useEffect(()=>{if(n==="render"&&g(!0),n==="viewport"){let M=U=>{U.forEach(Y=>{g(Y.isIntersecting)})},x=new IntersectionObserver(M,{threshold:.5});return _.current&&x.observe(_.current),()=>{x.disconnect()}}},[n]),q.useEffect(()=>{if(r){let M=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(M)}}},[r]);let C=()=>{a(!0)},A=()=>{a(!1),g(!1)};return i?n!=="intent"?[c,_,{}]:[c,_,{onFocus:cs(m,C),onBlur:cs(y,A),onMouseEnter:cs(f,C),onMouseLeave:cs(v,A),onTouchStart:cs(T,C)}]:[!1,_,{}]}function cs(n,t){return i=>{n&&n(i),i.defaultPrevented||t(i)}}function Y_({page:n,...t}){let{router:i}=Xp(),r=q.useMemo(()=>Lp(i.routes,n,i.basename),[i.routes,n,i.basename]);return r?q.createElement(J_,{page:n,matches:r,...t}):null}function W_(n){let{manifest:t,routeModules:i}=Qp(),[r,a]=q.useState([]);return q.useEffect(()=>{let c=!1;return B_(n,t,i).then(g=>{c||a(g)}),()=>{c=!0}},[n,t,i]),r}function J_({page:n,matches:t,...i}){let r=Zn(),{future:a,manifest:c,routeModules:g}=Qp(),{basename:m}=Xp(),{loaderData:y,matches:f}=O_(),v=q.useMemo(()=>Ff(n,t,f,c,r,"data"),[n,t,f,c,r]),T=q.useMemo(()=>Ff(n,t,f,c,r,"assets"),[n,t,f,c,r]),_=q.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let M=new Set,x=!1;if(t.forEach(Y=>{var J;let P=c.routes[Y.route.id];!P||!P.hasLoader||(!v.some(Q=>Q.route.id===Y.route.id)&&Y.route.id in y&&((J=g[Y.route.id])!=null&&J.shouldRevalidate)||P.hasClientLoader?x=!0:M.add(Y.route.id))}),M.size===0)return[];let U=z_(n,m,a.unstable_trailingSlashAwareDataRequests,"data");return x&&M.size>0&&U.searchParams.set("_routes",t.filter(Y=>M.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[U.pathname+U.search]},[m,a.unstable_trailingSlashAwareDataRequests,y,r,c,v,t,n,g]),C=q.useMemo(()=>q_(T,c),[T,c]),A=W_(T);return q.createElement(q.Fragment,null,_.map(M=>q.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),C.map(M=>q.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),A.map(({key:M,link:x})=>q.createElement("link",{key:M,nonce:i.nonce,...x,crossOrigin:x.crossOrigin??i.crossOrigin})))}function K_(...n){return t=>{n.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var X_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{X_&&(window.__reactRouterVersion="7.13.2")}catch{}function Q_({basename:n,children:t,unstable_useTransitions:i,window:r}){let a=q.useRef();a.current==null&&(a.current=N0({window:r,v5Compat:!0}));let c=a.current,[g,m]=q.useState({action:c.action,location:c.location}),y=q.useCallback(f=>{i===!1?m(f):q.startTransition(()=>m(f))},[i]);return q.useLayoutEffect(()=>c.listen(y),[c,y]),q.createElement(x_,{basename:n,children:t,location:g.location,navigationType:g.action,navigator:c,unstable_useTransitions:i})}var Zp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$p=q.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:a,reloadDocument:c,replace:g,unstable_mask:m,state:y,target:f,to:v,preventScrollReset:T,viewTransition:_,unstable_defaultShouldRevalidate:C,...A},M){let{basename:x,navigator:U,unstable_useTransitions:Y}=q.useContext(Gt),P=typeof v=="string"&&Zp.test(v),J=Gp(v,x);v=J.to;let Q=c_(v,{relative:a}),V=Zn(),K=null;if(m){let Re=uc(m,[],V.unstable_mask?V.unstable_mask.pathname:"/",!0);x!=="/"&&(Re.pathname=Re.pathname==="/"?x:jt([x,Re.pathname])),K=U.createHref(Re)}let[re,j,ue]=F_(r,A),Te=eS(v,{replace:g,unstable_mask:m,state:y,target:f,preventScrollReset:T,relative:a,viewTransition:_,unstable_defaultShouldRevalidate:C,unstable_useTransitions:Y});function be(Re){t&&t(Re),Re.defaultPrevented||Te(Re)}let Ne=!(J.isExternal||c),_e=q.createElement("a",{...A,...ue,href:(Ne?K:void 0)||J.absoluteURL||Q,onClick:Ne?be:t,ref:K_(M,j),target:f,"data-discover":!P&&i==="render"?"true":void 0});return re&&!P?q.createElement(q.Fragment,null,_e,q.createElement(Y_,{page:Q})):_e});$p.displayName="Link";var Z_=q.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:a=!1,style:c,to:g,viewTransition:m,children:y,...f},v){let T=ys(g,{relative:f.relative}),_=Zn(),C=q.useContext(ea),{navigator:A,basename:M}=q.useContext(Gt),x=C!=null&&sS(T)&&m===!0,U=A.encodeLocation?A.encodeLocation(T).pathname:T.pathname,Y=_.pathname,P=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(Y=Y.toLowerCase(),P=P?P.toLowerCase():null,U=U.toLowerCase()),P&&M&&(P=_n(P,M)||P);const J=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let Q=Y===U||!a&&Y.startsWith(U)&&Y.charAt(J)==="/",V=P!=null&&(P===U||!a&&P.startsWith(U)&&P.charAt(U.length)==="/"),K={isActive:Q,isPending:V,isTransitioning:x},re=Q?t:void 0,j;typeof r=="function"?j=r(K):j=[r,Q?"active":null,V?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let ue=typeof c=="function"?c(K):c;return q.createElement($p,{...f,"aria-current":re,className:j,ref:v,style:ue,to:g,viewTransition:m},typeof y=="function"?y(K):y)});Z_.displayName="NavLink";var $_=q.forwardRef(({discover:n="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:a,state:c,method:g=Vr,action:m,onSubmit:y,relative:f,preventScrollReset:v,viewTransition:T,unstable_defaultShouldRevalidate:_,...C},A)=>{let{unstable_useTransitions:M}=q.useContext(Gt),x=oS(),U=iS(m,{relative:f}),Y=g.toLowerCase()==="get"?"get":"post",P=typeof m=="string"&&Zp.test(m),J=Q=>{if(y&&y(Q),Q.defaultPrevented)return;Q.preventDefault();let V=Q.nativeEvent.submitter,K=(V==null?void 0:V.getAttribute("formmethod"))||g,re=()=>x(V||Q.currentTarget,{fetcherKey:t,method:K,navigate:i,replace:a,state:c,relative:f,preventScrollReset:v,viewTransition:T,unstable_defaultShouldRevalidate:_});M&&i!==!1?q.startTransition(()=>re()):re()};return q.createElement("form",{ref:A,method:Y,action:U,onSubmit:r?y:J,...C,"data-discover":!P&&n==="render"?"true":void 0})});$_.displayName="Form";function j_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jp(n){let t=q.useContext(ci);return Ze(t,j_(n)),t}function eS(n,{target:t,replace:i,unstable_mask:r,state:a,preventScrollReset:c,relative:g,viewTransition:m,unstable_defaultShouldRevalidate:y,unstable_useTransitions:f}={}){let v=h_(),T=Zn(),_=ys(n,{relative:g});return q.useCallback(C=>{if(I_(C,t)){C.preventDefault();let A=i!==void 0?i:ms(T)===ms(_),M=()=>v(n,{replace:A,unstable_mask:r,state:a,preventScrollReset:c,relative:g,viewTransition:m,unstable_defaultShouldRevalidate:y});f?q.startTransition(()=>M()):M()}},[T,v,_,i,r,a,t,n,c,g,m,y,f])}var tS=0,nS=()=>`__${String(++tS)}__`;function oS(){let{router:n}=jp("useSubmit"),{basename:t}=q.useContext(Gt),i=E_(),r=n.fetch,a=n.navigate;return q.useCallback(async(c,g={})=>{let{action:m,method:y,encType:f,formData:v,body:T}=U_(c,t);if(g.navigate===!1){let _=g.fetcherKey||nS();await r(_,i,g.action||m,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:v,body:T,formMethod:g.method||y,formEncType:g.encType||f,flushSync:g.flushSync})}else await a(g.action||m,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:v,body:T,formMethod:g.method||y,formEncType:g.encType||f,replace:g.replace,state:g.state,fromRouteId:i,flushSync:g.flushSync,viewTransition:g.viewTransition})},[r,a,t,i])}function iS(n,{relative:t}={}){let{basename:i}=q.useContext(Gt),r=q.useContext(En);Ze(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),c={...ys(n||".",{relative:t})},g=Zn();if(n==null){c.search=g.search;let m=new URLSearchParams(c.search),y=m.getAll("index");if(y.some(v=>v==="")){m.delete("index"),y.filter(T=>T).forEach(T=>m.append("index",T));let v=m.toString();c.search=v?`?${v}`:""}}return(!n||n===".")&&a.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:jt([i,c.pathname])),ms(c)}function sS(n,{relative:t}={}){let i=q.useContext(Op);Ze(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=jp("useViewTransitionState"),a=ys(n,{relative:t});if(!i.isTransitioning)return!1;let c=_n(i.currentLocation.pathname,r)||i.currentLocation.pathname,g=_n(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Wr(a.pathname,g)!=null||Wr(a.pathname,c)!=null}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=(...n)=>n.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=n=>{const t=aS(n);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=n=>{for(const t in n)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=q.forwardRef(({color:n="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:a="",children:c,iconNode:g,...m},y)=>q.createElement("svg",{ref:y,...lS,width:t,height:t,stroke:n,strokeWidth:r?Number(i)*24/Number(t):i,className:ey("lucide",a),...!c&&!uS(m)&&{"aria-hidden":"true"},...m},[...g.map(([f,v])=>q.createElement(f,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=(n,t)=>{const i=q.forwardRef(({className:r,...a},c)=>q.createElement(cS,{ref:c,iconNode:t,className:ey(`lucide-${rS(Yf(n))}`,`lucide-${n}`,r),...a}));return i.displayName=Yf(n),i};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],gS=en("book-open",hS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],mc=en("chevron-right",dS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],mS=en("dumbbell",fS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Lu=en("file-text",pS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],vS=en("graduation-cap",yS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],_S=en("layout-dashboard",TS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ES=en("loader-circle",SS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],AS=en("send",CS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ty=en("sparkles",wS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bS=en("x",xS);var we=(n=>(n.HSK1="HSK 1",n.HSK2="HSK 2",n.HSK3="HSK 3",n.HSK4="HSK 4",n.HSK5="HSK 5",n.HSK6="HSK 6",n))(we||{}),W=(n=>(n.GRAMMAR="Grammar",n.VOCABULARY="Vocabulary",n.EXERCISE="Exercise",n))(W||{});const RS={id:"hsk1-m1",level:we.HSK1,title:"你好! Nǐ hǎo! (Lesson 1)",description:"Learn basic greetings, classroom expressions, Pinyin (initials, finals, tones), and basic Chinese character strokes.",lessons:[{id:"hsk1-l1-texts",title:"Texts & Pinyin",type:W.GRAMMAR,content:`
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
`}]},MS={id:"hsk1-l2-ni-jiao-shenme-mingzi",level:we.HSK1,title:"Nǐ jiào shénme míngzi? 你叫什么名字? (Lesson 2)",description:"Learn how to ask for someone's name, identify professions (teacher/student), and state nationalities.",lessons:[{id:"hsk1-l2-texts",title:"Texts, Grammar & Phonetics",type:W.GRAMMAR,content:`
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
`}]},NS={id:"hsk2-m1",level:we.HSK2,title:"Travel & Plans (Lesson 1)",description:'Discuss travel plans, weather, and preferences using "yao" and "zui".',lessons:[{id:"hsk2-l1-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},IS={id:"hsk2-m2",level:we.HSK2,title:"Daily Routine (Lesson 2)",description:"Talk about daily habits, getting up early, and health.",lessons:[{id:"hsk2-l2-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},DS={id:"hsk2-m3",level:we.HSK2,title:"Colors & Possessions (Lesson 3)",description:'Describing objects by color and position. Using "de" for possession.',lessons:[{id:"hsk2-l3-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},kS={id:"hsk2-m4",level:we.HSK2,title:"Work & Introductions (Lesson 4)",description:'Talking about past events with "Shi...de", job introductions, and hobbies.',lessons:[{id:"hsk2-l4-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},US={id:"hsk2-m5",level:we.HSK2,title:"Shopping & Preferences (Lesson 5)",description:'Making choices with "Jiu", expressing opinions with "Hai" and "Youdianr".',lessons:[{id:"hsk2-l5-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},zS={id:"hsk2-m6",level:we.HSK2,title:"Reasons & Explanations (Lesson 6)",description:'Asking "Why" with Zenme, Cause & Effect with Yinwei/Suoyi.',lessons:[{id:"hsk2-l6-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},LS={id:"hsk2-m7",level:we.HSK2,title:"Distance & Time (Lesson 7)",description:'Talking about distance with "Li", continuation with "Hai", and earliness with "Jiu".',lessons:[{id:"hsk2-l7-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},HS={id:"hsk2-m8",level:we.HSK2,title:"Suggestions & Future (Lesson 8)",description:'Asking opinions with "Hao ma", pivotal sentences with "Rang", and "Zai" for future.',lessons:[{id:"hsk2-l8-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},BS={id:"hsk2-m9",level:we.HSK2,title:"Results & Outcomes (Lesson 9)",description:'Result complements, "Cong" for starting points, and Ordinal numbers "Di".',lessons:[{id:"hsk2-l9-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},qS={id:"hsk2-m10",level:we.HSK2,title:"Commands & Relations (Lesson 10)",description:'Imperatives with "Bie...le", Relationships with "Dui", Tea Culture.',lessons:[{id:"hsk2-l10-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},PS={id:"hsk2-m11",level:we.HSK2,title:"Comparisons (Lesson 11)",description:'Comparing age, price, and attributes using "Bi" sentences.',lessons:[{id:"hsk2-l11-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},GS={id:"hsk2-m12",level:we.HSK2,title:"State & Degree (Lesson 12)",description:'Describing how actions are done with "De", Comparisons with "Bi" and "De".',lessons:[{id:"hsk2-l12-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},VS={id:"hsk2-m13",level:we.HSK2,title:"Status & Direction (Lesson 13)",description:'Describing continuous states with "Zhe" and asking for directions.',lessons:[{id:"hsk2-l13-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},OS={id:"hsk2-m14",level:we.HSK2,title:"Past Experiences (Lesson 14)",description:'Talking about past experiences with "Guo" and frequency.',lessons:[{id:"hsk2-l14-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},FS={id:"hsk2-m15",level:we.HSK2,title:"Future & Complaints (Lesson 15)",description:'Expressing future events with "Yao...le" and complaints with "Dou...le".',lessons:[{id:"hsk2-l15-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},YS={id:"hsk3-m1",level:we.HSK3,title:"Travel & Weather",description:"Planning trips and talking about the weather.",lessons:[]},WS={id:"hsk1-m3",level:we.HSK1,title:"谢谢你！(Thank you!)",description:"Learn how to express gratitude, say goodbye, and understand Chinese neutral tones, tone marking, and basic characters.",lessons:[{id:"hsk1-l3-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},JS={id:"hsk1-m4",level:we.HSK1,title:"她是我的汉语老师 (Lesson 4)",description:"Learn how to ask about someone's identity and nationality using 谁, 哪, and 呢.",lessons:[{id:"hsk1-l4-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},KS={id:"hsk1-m5",level:we.HSK1,title:"她女儿今年二十岁 (Lesson 5)",description:'Learn to talk about family members, ask about age using "几" and "多大", and master the retroflex "er" sound.',lessons:[{id:"hsk1-l5-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},XS={id:"hsk1-m6",level:we.HSK1,title:"我会说汉语 (Lesson 6)",description:'Learn to express abilities using "会", describe situations with adjective predicates, and ask about manners with "怎么".',lessons:[{id:"hsk1-l6-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},QS={id:"hsk1-m7",level:we.HSK1,title:"Jīntiān jǐ hào? 今天几号? (Lesson 7)",description:"Learn how to ask about dates, days of the week, and express intentions using the 'go + place + do something' structure.",lessons:[{id:"hsk1-l7-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},ZS={id:"hsk1-m8",level:we.HSK1,title:"今天几号? Hôm nay là ngày mấy? (Lesson 8)",description:"Learn to ask and answer about dates, days of the week, and express purpose using 'qu'.",lessons:[{id:"hsk1-l8-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
# 课文 1: 在银行 (Ở ngân hàng)

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

# 课文 2: 看日历 (Xem lịch)

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

# 课文 3: 在咖啡馆儿 (Ở quán cà phê)

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

# 注释 (Grammar Notes)

## 1. 日期的表达(1):月、日(rì, ngày)/号、星期 (Cách diễn tả ngày tháng)

汉语的日期表达方式遵循由大到小的原则，先说“月”，然后说“日/号”，最后说“星期”。口语一般常用“号”。例如：
Trong tiếng Trung Quốc, người ta nói về ngày tháng theo trình tự từ đơn vị lớn đến đơn vị nhỏ: trước tiên là 月 (tháng), sau đó đến日/号(ngày), cuối cùng là 星期 (thứ). Trong văn nói, người ta thường dùng 号 thay cho 日. Ví dụ:

(1) 9月1号，星期三。
(2) 9月2号，星期四。
(3) 8月31号，星期二。

## 2. 名词谓语句 (Câu có vị ngữ là danh từ)

名词谓语句是谓语部分由名词性成分充当的句子，一般用于表达年龄、时间、日期等。例如：
Đây là kiểu câu có vị ngữ là thành phần mang đặc điểm của danh từ, thường được dùng để nói về tuổi tác, thời gian, ngày tháng... Ví dụ:

| 主语 (Chủ ngữ) | 谓语 (Vị ngữ) |
| :--- | :--- |
| 我的汉语老师 | 33岁。 |
| 明天 | 星期三。 |
| 今天 | 9月1号。 |

## 3. 连动句(1):去+地方+做什么 (Câu liên động từ (1): 去 + nơi chốn + làm gì)

连动句的谓语部分由两个或者两个以上动词构成，后一个动作可以表示前一个动作的目的。第一个动词后表示地点的宾语有时可以省略。例如：
Trong câu liên động từ, vị ngữ có từ hai động từ trở lên, trong đó động từ đứng sau có thể diễn tả mục đích của động từ đứng trước. Đôi lúc ta có thể lược bỏ tân ngữ chỉ nơi chốn theo sau động từ thứ nhất. Ví dụ:

| 主语 (Chủ ngữ) | 动词 1 (Động từ 1) | (地方 nơi chốn) | 动词 2 (Động từ 2) |
| :--- | :--- | :--- | :--- |
| | 去 | | 做什么 (làm gì) |
| 我 | 去 | (中国) | 学习汉语。 |
| 我们 | 去 | (中国饭馆儿) | 吃中国菜。 |
| 我 | 去 | (学校) | 看书。 |
`},{id:"hsk1-l8-vocab",title:"New Words",type:W.VOCABULARY,content:`
# 词汇 (New Words)

| Hanzi | Pinyin | Part of Speech | Meaning |
| :--- | :--- | :--- | :--- |
| **请** | qǐng | đgt. | (lịch sự) mời, xin |
| **问** | wèn | đgt. | hỏi |
| **今天** | jīntiān | dt. | hôm nay |
| **号** | hào | dt. | ngày |
| **月** | yuè | dt. | tháng |
| **星期** | xīngqī | dt. | tuần, thứ |
| **昨天** | zuótiān | dt. | hôm qua |
| **明天** | míngtiān | dt. | ngày mai |
| **去** | qù | đgt. | đi, đi đến |
| **学校** | xuéxiào | dt. | trường |
| **看** | kàn | đgt. | nhìn, xem |
| **书** | shū | dt. | sách |
`},{id:"hsk1-l8-exercise",title:"Exercises & Culture",type:W.EXERCISE,content:`
# 热身 (Warm-up)

**给下面的词语选择对应的图片 / Chọn hình tương ứng với các từ ngữ bên dưới.**

* [Image A]: A basketball court.
* [Image B]: A woman reading a book.
* [Image C]: A calendar showing December 25 with a Christmas tree and snowman.
* [Image D]: A bowl of Mapo tofu (Chinese food).
* [Image E]: A stack of books.
* [Image F]: A flip clock showing the number 1.

1. **学校** (xuéxiào) ______
2. **看书** (kàn shū) ______
3. **书** (shū) ______
4. **中国菜** (Zhōngguó cài) ______
5. **25 号** (èrshíwǔ hào) ______
6. **5月** (wǔ yuè) ______

---

# 练习 (Exercises)

## 1. 分角色朗读课文 (Đóng vai các nhân vật trong bài học và đọc to các câu đối thoại.)

## 2. 朗读下列词语 (Đọc to các từ sau.)

| | | | | |
| :---: | :---: | :---: | :---: | :---: |
| yī yuè | èr yuè | sān yuè | sì yuè | wǔ yuè |
| **一月** | **二月** | **三月** | **四月** | **五月** |
| tháng một | tháng hai | tháng ba | tháng tư | tháng năm |
| liù yuè | qī yuè | bā yuè | jiǔ yuè | shí yuè |
| **六月** | **七月** | **八月** | **九月** | **十月** |
| tháng sáu | tháng bảy | tháng tám | tháng chín | tháng mười |
| shíyī yuè | shí'èr yuè | | | |
| **十一月** | **十二月** | | | |
| tháng mười một | tháng mười hai | | | |
| xīngqī yī | xīngqī èr | xīngqī sān | xīngqī sì | |
| **星期一** | **星期二** | **星期三** | **星期四** | |
| thứ hai | thứ ba | thứ tư | thứ năm | |
| xīngqī wǔ | xīngqī liù | xīngqī rì / xīngqī tiān | | |
| **星期五** | **星期六** | **星期日/星期天** | | |
| thứ sáu | thứ bảy | chủ nhật | | |

## 3. 根据实际情况回答问题 (Trả lời câu hỏi.)

1. 今天几月几号星期几? (Jīntiān jǐ yuè jǐ hào xīngqī jǐ?)
2. 明天几月几号星期几? (Míngtiān jǐ yuè jǐ hào xīngqī jǐ?)
3. 昨天几月几号星期几? (Zuótiān jǐ yuè jǐ hào xīngqī jǐ?)
4. 明天你去哪儿做什么? (Míngtiān nǐ qù nǎr zuò shénme?)
5. 星期日你去哪儿做什么? (Xīngqī rì nǐ qù nǎr zuò shénme?)

## 4. 用本课新学的语言点和词语描述图片 (Sử dụng từ ngữ trong bài để mô tả hình ảnh bên dưới.)

* [Image 1: A desk calendar showing 1 January 2013]
    今天是 ______ 月 ______ 号，星期 ______ 。 (Jīntiān shì ______ yuè ______ hào, xīngqī ______ .)
* [Image 2: A calendar showing 18 May]
    今天 ______ 月 ______ 号。 (Jīntiān ______ yuè ______ hào.)
* [Image 3: Calendar showing numbers 22, 23, 24]
    22号是 ______ ，23号是 ______ 。 (Èrshí'èr hào shì ______ , èrshísān hào shì ______ .)
* [Image 4: Students reading books in a hallway]
    明天我去 ______ 看 ______ 。 (Míngtiān wǒ qù ______ kàn ______ .)

---

# 拼音 (Phonetics)

## 双音节词语的声调搭配(2):二声和各声调的搭配 (Sự kết hợp thanh điệu của từ có hai âm tiết (2): thanh 2 + thanh 1/2/3/4)

**听录音并跟读，注意声调的搭配 (Nghe và luyện đọc theo phần ghi âm, chú ý sự kết hợp của các thanh.)**

| 国家 (guójiā) | 楼房 (lóufáng) | 苹果 (píngguǒ) | 环境 (huánjìng) |
| :---: | :---: | :---: | :---: |
| 昨天 (zuótiān) | 篮球 (lánqiú) | 啤酒 (píjiǔ) | 寒假 (hánjià) |
| 明天 (míngtiān) | 明年 (míngnián) | 牛奶 (niúnǎi) | 牛肉 (niúròu) |
| 年轻 (niánqīng) | 长城 (Chángchéng) | 游泳 (yóuyǒng) | 游戏 (yóuxì) |

*(Additional terms from images: 时间 shíjiān, 银行 yínháng, 词典 cídiǎn, 蓝色 lánsè)*

---

# 汉字 (Characters)

## 1. 认识独体字 (Làm quen với chữ đơn/chữ độc thể)

* **(1) “四”，表示数量“4”。(四: số 4)**
    sì 四
* **(2) “五”，表示数量“5”。(五: số 5)**
    wǔ 五
* **(3) “书”，本义是将毛笔放在墨池中蘸墨以便涂写，现在是“书写、书籍”等意思。(ban đầu chỉ hành động chấm bút lông vào trong nghiên mực để viết, ngày nay có nghĩa là viết chữ, sách...)**
    shū 书

## 2. 汉字结构(2):左右结构与左中右结构 (Kết cấu của chữ Hán (2): kết cấu trái-phải và kết cấu trái-giữa-phải)

合体结构中包括左右结构和左中右结构。(Kết cấu tổ hợp trong chữ Hán bao gồm kết cấu trái-phải và kết cấu trái-giữa-phải.)

| 结构 (Kết cấu) | 例字 (Chữ Hán) | 图解 (Hình minh họa) |
| :---: | :--- | :---: |
| **左右结构** (kết cấu trái-phải) | **你** (nǐ - (số ít) anh, chị, bạn...) <br> **好** (hǎo - khỏe, tốt) | 你 <br> 好 |
| **左中右结构** (kết cấu trái-giữa phải) | **谢** (xiè - cảm ơn) <br> **树** (shù - cây) | 谢 <br> 树 |

## 3. 汉字偏旁“氵”和“讠” (Các bộ của chữ Hán: 氵 和 讠)

| 偏旁 (Các bộ) | 解释 (Chú thích) | 例字 (Chữ Hán) |
| :---: | :--- | :--- |
| **氵** | 三点水，一般和水有关系。(Bộ 氵 thường liên quan đến nước.) | **汉** (hàn - Hán) <br> **没** (méi - không có) |
| **讠** | 言字旁，一般和语言、说话有关系。(Bộ 讠 thường liên quan đến ngôn ngữ và lời nói.) | **语** (yǔ - lời nói) <br> **谁** (shéi - ai) |

---

# 运用 (Application)

## 1. 双人活动 (Hoạt động theo cặp)

两人一组，根据实际情况进行问答练习。(Ghép thành từng cặp, luyện tập đặt câu hỏi và sử dụng thông tin về bản thân cũng như thời gian hiện tại để trả lời.)

**例如 (Ví dụ):**
* **A: 今天是几月几号？** (Jīntiān shì jǐ yuè jǐ hào?)
    **B:** ......
* **A: 今天星期几？** (Jīntiān xīngqī jǐ?)
    **B:** ......
* **A: 明天是几月几号？** (Míngtiān shì jǐ yuè jǐ hào?)
    **B:** ......
* **A: 明天星期几？** (Míngtiān xīngqī jǐ?)
    **B:** ......
* **A: 明天你做什么？** (Míngtiān nǐ zuò shénme?)
    **B: 明天我去......** (Míngtiān wǒ qù...)

## 2. 小组活动 (Hoạt động nhóm)

3~4人一组，互相询问出生日期并记录，每组请一位同学报告情况。(Lập nhóm từ 3 đến 4 người, hỏi ngày sinh của nhau và ghi lại, sau đó cử một đại diện trình bày những thông tin đã ghi chép.)

**补充生词 (Từ vựng bổ sung):** 生日 (shēngrì) - ngày sinh/sinh nhật

| 姓名 (Họ tên) | 生日 (Ngày sinh) |
| :--- | :--- |
| 李月 (Lǐ Yuè) | 8月31号 (bā yuè sānshíyī hào) |
| | |
| | |
`}]},$S={id:"hsk1-m9",level:we.HSK1,title:"我想喝茶 (Lesson 9)",description:"Expressing desires with 'xiǎng', asking about prices/quantities with 'duōshao', and using measure words 'gè' and 'kǒu'.",lessons:[{id:"hsk1-l9-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},jS={id:"hsk1-m10",level:we.HSK1,title:"我能坐这儿吗？ (Can I sit here?)",description:'Learn to express existence using "you", use the conjunction "he", modal verb "neng", and polite requests with "qing".',lessons:[{id:"hsk1-l10-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},eE={id:"hsk1-m11",level:we.HSK1,title:"现在几点? Xiànzài jǐ diǎn? (Lesson 11)",description:'Learn how to express time, use time words as adverbials, use the noun "qián" (before), and understand the function of the neutral tone.',lessons:[{id:"hsk1-l11-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},tE={id:"hsk1-m12",level:we.HSK1,title:"Míngtiān tiānqì zěnmeyàng? 明天天气怎么样？ (Lesson 12)",description:'Hỏi về thời tiết, tình trạng sức khỏe và cách sử dụng trợ động từ "会" để diễn tả khả năng xảy ra.',lessons:[{id:"hsk1-l12-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},nE={id:"hsk1-m13",level:we.HSK1,title:"他在学做中国菜呢 (He is learning to cook Chinese food)",description:"Learn to describe ongoing actions using 'zai...ne', use the interjection 'wei', read phone numbers, and use the particle 'ba'.",lessons:[{id:"hsk1-l13-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},oE={id:"hsk1-m14",level:we.HSK1,title:"她买了不少衣服 (Lesson 14)",description:"Learn how to use the particle 'le' for completed actions, the noun 'hou' for 'after', the modal particle 'a', and the adverb 'dou'.",lessons:[{id:"hsk1-l14-texts",title:"Texts & Grammar",type:W.GRAMMAR,content:`
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
`}]},iE={id:"hsk1-m15",level:we.HSK1,title:"我是坐飞机来的 (Lesson 15)",description:"学习使用“是……的”句强调时间、地点、方式，以及日期的表达方法。",lessons:[{id:"hsk1-l15-texts",title:"课文与语法 (Texts & Grammar)",type:W.GRAMMAR,content:`
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
`}]},Yu=[RS,MS,WS,JS,KS,XS,QS,ZS,$S,jS,eE,tE,nE,oE,iE,NS,IS,DS,kS,US,zS,LS,HS,BS,qS,PS,GS,VS,OS,FS,YS],sE=({currentModuleId:n,onSelectModule:t,onGoHome:i})=>{const r=Yu.reduce((a,c)=>(a[c.level]||(a[c.level]=[]),a[c.level].push(c),a),{});return L.jsxs("div",{className:"w-64 bg-slate-900 text-slate-300 flex flex-col h-screen fixed left-0 top-0 overflow-y-auto border-r border-slate-800 z-10",children:[L.jsx("div",{className:"p-6 border-b border-slate-800 bg-slate-900 sticky top-0 z-20",children:L.jsxs("div",{onClick:i,className:"flex items-center gap-2 cursor-pointer hover:text-white transition-colors",children:[L.jsx("div",{className:"w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold font-serif",children:"中"}),L.jsx("h1",{className:"font-bold text-xl text-white tracking-tight",children:"HSK Mastery"})]})}),L.jsxs("nav",{className:"flex-1 p-4 space-y-6",children:[L.jsx("div",{className:"space-y-1",children:L.jsxs("button",{onClick:i,className:`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${n?"hover:bg-slate-800 text-slate-400 hover:text-white":"bg-red-600 text-white shadow-lg shadow-red-900/20"}`,children:[L.jsx(_S,{size:18}),L.jsx("span",{className:"font-medium",children:"Dashboard"})]})}),Object.entries(r).map(([a,c])=>L.jsxs("div",{children:[L.jsx("h3",{className:"text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3",children:a}),L.jsx("div",{className:"space-y-1",children:c.map(g=>L.jsxs("button",{onClick:()=>t(g),className:`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all group ${n===g.id?"bg-slate-800 text-white":"text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"}`,children:[L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsx(gS,{size:16,className:n===g.id?"text-red-500":"text-slate-600 group-hover:text-slate-500"}),L.jsx("span",{className:"truncate max-w-[120px]",children:g.title})]}),n===g.id&&L.jsx(mc,{size:14,className:"text-slate-500"})]},g.id))})]},a))]}),L.jsx("div",{className:"p-4 border-t border-slate-800",children:L.jsxs("div",{className:"flex items-center gap-3 px-3 py-2 text-sm text-slate-500",children:[L.jsx(vS,{size:16}),L.jsxs("span",{children:["Study Streak: ",L.jsx("span",{className:"text-red-500 font-bold",children:"3 Days"})]})]})})]})},rE=({content:n})=>{const t=n.split(`
`),i=[],r=f=>f.split(/([\u4e00-\u9fff]+)/g).map((T,_)=>/[\u4e00-\u9fff]/.test(T)?L.jsx("span",{className:"zh-text text-[1.5em] leading-normal mx-0.5 align-baseline inline-block text-gray-900 font-medium",children:T},_):T),a=f=>f.split(/((?:<strong>.*?<\/strong>)|(?:<em>.*?<\/em>))/g).map((T,_)=>{if(T.startsWith("<strong>")&&T.endsWith("</strong>")){const C=T.slice(8,-9);return L.jsx("strong",{className:"font-bold text-gray-900",children:r(C)},_)}if(T.startsWith("<em>")&&T.endsWith("</em>")){const C=T.slice(4,-5);return L.jsx("span",{className:"not-italic text-blue-600 font-medium tracking-wide px-0.5",children:r(C)},_)}return L.jsx(zp.Fragment,{children:r(T)},_)});let c=!1,g=[],m=[];const y=f=>{if(!c)return null;c=!1;const v=L.jsx("div",{className:"overflow-x-auto my-6 border border-gray-200 rounded-lg shadow-sm",children:L.jsxs("table",{className:"min-w-full divide-y divide-gray-200 bg-white text-sm",children:[L.jsx("thead",{className:"bg-gray-50",children:L.jsx("tr",{children:g.map((T,_)=>L.jsx("th",{className:"px-4 py-3 text-left font-medium text-gray-700 tracking-wider border-r border-gray-200 last:border-r-0",children:a(T.trim())},_))})}),L.jsx("tbody",{className:"divide-y divide-gray-200",children:m.map((T,_)=>L.jsx("tr",{className:_%2===0?"bg-white":"bg-gray-50",children:T.map((C,A)=>L.jsx("td",{className:"px-4 py-3 text-gray-700 border-r border-gray-200 last:border-r-0 whitespace-pre-wrap",children:a(C.trim())},A))},_))})]})},`table-${f}`);return g=[],m=[],v};return t.forEach((f,v)=>{const T=f.trim();if(T.startsWith("|")){c?T.includes("---")||m.push(T.split("|").filter(_=>_).map(_=>_.trim())):(c=!0,g=T.split("|").filter(_=>_).map(_=>_.trim()));return}else c&&i.push(y(v));T.startsWith("# ")?i.push(L.jsx("h1",{className:"text-3xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2",children:a(T.substring(2))},v)):T.startsWith("## ")?i.push(L.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mt-6 mb-3",children:a(T.substring(3))},v)):T.startsWith("### ")?i.push(L.jsx("h3",{className:"text-xl font-medium text-gray-800 mt-4 mb-2",children:a(T.substring(4))},v)):T.startsWith("> ")?i.push(L.jsx("div",{className:"border-l-4 border-red-500 bg-red-50 p-4 my-4 rounded-r italic text-gray-700",children:a(T.substring(2))},v)):T.startsWith("- ")||T.startsWith("* ")?i.push(L.jsx("li",{className:"ml-6 list-disc text-gray-700 mb-1 pl-1 marker:text-red-500",children:a(T.substring(2))},v)):/^\d+\.\s/.test(T)?i.push(L.jsxs("div",{className:"ml-6 flex gap-2 text-gray-700 mb-2",children:[L.jsx("span",{className:"font-semibold text-red-600",children:T.split(" ")[0]}),L.jsx("span",{children:a(T.substring(T.indexOf(" ")+1))})]},v)):T===""?i.push(L.jsx("div",{className:"h-2"},v)):i.push(L.jsx("p",{className:"text-gray-700 leading-relaxed mb-3",children:a(T)},v))}),c&&i.push(y(t.length)),L.jsx("div",{className:"markdown-content w-full max-w-none prose prose-red",children:i})};var hs={exports:{}},Hu={},Bu,Wf;function aE(){if(Wf)return Bu;Wf=1;function n(t,i){typeof i=="boolean"&&(i={forever:i}),this._originalTimeouts=JSON.parse(JSON.stringify(t)),this._timeouts=t,this._options=i||{},this._maxRetryTime=i&&i.maxRetryTime||1/0,this._fn=null,this._errors=[],this._attempts=1,this._operationTimeout=null,this._operationTimeoutCb=null,this._timeout=null,this._operationStart=null,this._timer=null,this._options.forever&&(this._cachedTimeouts=this._timeouts.slice(0))}return Bu=n,n.prototype.reset=function(){this._attempts=1,this._timeouts=this._originalTimeouts.slice(0)},n.prototype.stop=function(){this._timeout&&clearTimeout(this._timeout),this._timer&&clearTimeout(this._timer),this._timeouts=[],this._cachedTimeouts=null},n.prototype.retry=function(t){if(this._timeout&&clearTimeout(this._timeout),!t)return!1;var i=new Date().getTime();if(t&&i-this._operationStart>=this._maxRetryTime)return this._errors.push(t),this._errors.unshift(new Error("RetryOperation timeout occurred")),!1;this._errors.push(t);var r=this._timeouts.shift();if(r===void 0)if(this._cachedTimeouts)this._errors.splice(0,this._errors.length-1),r=this._cachedTimeouts.slice(-1);else return!1;var a=this;return this._timer=setTimeout(function(){a._attempts++,a._operationTimeoutCb&&(a._timeout=setTimeout(function(){a._operationTimeoutCb(a._attempts)},a._operationTimeout),a._options.unref&&a._timeout.unref()),a._fn(a._attempts)},r),this._options.unref&&this._timer.unref(),!0},n.prototype.attempt=function(t,i){this._fn=t,i&&(i.timeout&&(this._operationTimeout=i.timeout),i.cb&&(this._operationTimeoutCb=i.cb));var r=this;this._operationTimeoutCb&&(this._timeout=setTimeout(function(){r._operationTimeoutCb()},r._operationTimeout)),this._operationStart=new Date().getTime(),this._fn(this._attempts)},n.prototype.try=function(t){console.log("Using RetryOperation.try() is deprecated"),this.attempt(t)},n.prototype.start=function(t){console.log("Using RetryOperation.start() is deprecated"),this.attempt(t)},n.prototype.start=n.prototype.try,n.prototype.errors=function(){return this._errors},n.prototype.attempts=function(){return this._attempts},n.prototype.mainError=function(){if(this._errors.length===0)return null;for(var t={},i=null,r=0,a=0;a<this._errors.length;a++){var c=this._errors[a],g=c.message,m=(t[g]||0)+1;t[g]=m,m>=r&&(i=c,r=m)}return i},Bu}var Jf;function lE(){return Jf||(Jf=1,(function(n){var t=aE();n.operation=function(i){var r=n.timeouts(i);return new t(r,{forever:i&&(i.forever||i.retries===1/0),unref:i&&i.unref,maxRetryTime:i&&i.maxRetryTime})},n.timeouts=function(i){if(i instanceof Array)return[].concat(i);var r={retries:10,factor:2,minTimeout:1*1e3,maxTimeout:1/0,randomize:!1};for(var a in i)r[a]=i[a];if(r.minTimeout>r.maxTimeout)throw new Error("minTimeout is greater than maxTimeout");for(var c=[],g=0;g<r.retries;g++)c.push(this.createTimeout(g,r));return i&&i.forever&&!c.length&&c.push(this.createTimeout(g,r)),c.sort(function(m,y){return m-y}),c},n.createTimeout=function(i,r){var a=r.randomize?Math.random()+1:1,c=Math.round(a*Math.max(r.minTimeout,1)*Math.pow(r.factor,i));return c=Math.min(c,r.maxTimeout),c},n.wrap=function(i,r,a){if(r instanceof Array&&(a=r,r=null),!a){a=[];for(var c in i)typeof i[c]=="function"&&a.push(c)}for(var g=0;g<a.length;g++){var m=a[g],y=i[m];i[m]=(function(v){var T=n.operation(r),_=Array.prototype.slice.call(arguments,1),C=_.pop();_.push(function(A){T.retry(A)||(A&&(arguments[0]=T.mainError()),C.apply(this,arguments))}),T.attempt(function(){v.apply(i,_)})}).bind(i,y),i[m].options=r}}})(Hu)),Hu}var qu,Kf;function uE(){return Kf||(Kf=1,qu=lE()),qu}var Xf;function cE(){if(Xf)return hs.exports;Xf=1;const n=uE(),t=["Failed to fetch","NetworkError when attempting to fetch resource.","The Internet connection appears to be offline.","Network request failed"];class i extends Error{constructor(m){super(),m instanceof Error?(this.originalError=m,{message:m}=m):(this.originalError=new Error(m),this.originalError.stack=this.stack),this.name="AbortError",this.message=m}}const r=(g,m,y)=>{const f=y.retries-(m-1);return g.attemptNumber=m,g.retriesLeft=f,g},a=g=>t.includes(g),c=(g,m)=>new Promise((y,f)=>{m={onFailedAttempt:()=>{},retries:10,...m};const v=n.operation(m);v.attempt(async T=>{try{y(await g(T))}catch(_){if(!(_ instanceof Error)){f(new TypeError(`Non-error was thrown: "${_}". You should only throw errors.`));return}if(_ instanceof i)v.stop(),f(_.originalError);else if(_ instanceof TypeError&&!a(_.message))v.stop(),f(_);else{r(_,T,m);try{await m.onFailedAttempt(_)}catch(C){f(C);return}v.retry(_)||f(v.mainError())}}})});return hs.exports=c,hs.exports.default=c,hs.exports.AbortError=i,hs.exports}var ny=cE();const hE=ac(ny);var gE={};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let dE,fE;function mE(){return{geminiUrl:dE,vertexUrl:fE}}function pE(n,t,i,r){var a,c;if(!(n!=null&&n.baseUrl)){const g=mE();return t?(a=g.vertexUrl)!==null&&a!==void 0?a:i:(c=g.geminiUrl)!==null&&c!==void 0?c:r}return n.baseUrl}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Cn{}function Z(n,t){const i=/\{([^}]+)\}/g;return n.replace(i,(r,a)=>{if(Object.prototype.hasOwnProperty.call(t,a)){const c=t[a];return c!=null?String(c):""}else throw new Error(`Key '${a}' not found in valueMap.`)})}function h(n,t,i){for(let c=0;c<t.length-1;c++){const g=t[c];if(g.endsWith("[]")){const m=g.slice(0,-2);if(!(m in n))if(Array.isArray(i))n[m]=Array.from({length:i.length},()=>({}));else throw new Error(`Value must be a list given an array path ${g}`);if(Array.isArray(n[m])){const y=n[m];if(Array.isArray(i))for(let f=0;f<y.length;f++){const v=y[f];h(v,t.slice(c+1),i[f])}else for(const f of y)h(f,t.slice(c+1),i)}return}else if(g.endsWith("[0]")){const m=g.slice(0,-3);m in n||(n[m]=[{}]);const y=n[m];h(y[0],t.slice(c+1),i);return}(!n[g]||typeof n[g]!="object")&&(n[g]={}),n=n[g]}const r=t[t.length-1],a=n[r];if(a!==void 0){if(!i||typeof i=="object"&&Object.keys(i).length===0||i===a)return;if(typeof a=="object"&&typeof i=="object"&&a!==null&&i!==null)Object.assign(a,i);else throw new Error(`Cannot set value for an existing key. Key: ${r}`)}else r==="_self"&&typeof i=="object"&&i!==null&&!Array.isArray(i)?Object.assign(n,i):n[r]=i}function u(n,t,i=void 0){try{if(t.length===1&&t[0]==="_self")return n;for(let r=0;r<t.length;r++){if(typeof n!="object"||n===null)return i;const a=t[r];if(a.endsWith("[]")){const c=a.slice(0,-2);if(c in n){const g=n[c];return Array.isArray(g)?g.map(m=>u(m,t.slice(r+1),i)):i}else return i}else n=n[a]}return n}catch(r){if(r instanceof TypeError)return i;throw r}}function yE(n,t){for(const[i,r]of Object.entries(t)){const a=i.split("."),c=r.split("."),g=new Set;let m=-1;for(let y=0;y<a.length;y++)if(a[y]==="*"){m=y;break}if(m!==-1&&c.length>m)for(let y=m;y<c.length;y++){const f=c[y];f!=="*"&&!f.endsWith("[]")&&!f.endsWith("[0]")&&g.add(f)}Wu(n,a,c,0,g)}}function Wu(n,t,i,r,a){if(r>=t.length||typeof n!="object"||n===null)return;const c=t[r];if(c.endsWith("[]")){const g=c.slice(0,-2),m=n;if(g in m&&Array.isArray(m[g]))for(const y of m[g])Wu(y,t,i,r+1,a)}else if(c==="*"){if(typeof n=="object"&&n!==null&&!Array.isArray(n)){const g=n,m=Object.keys(g).filter(f=>!f.startsWith("_")&&!a.has(f)),y={};for(const f of m)y[f]=g[f];for(const[f,v]of Object.entries(y)){const T=[];for(const _ of i.slice(r))_==="*"?T.push(f):T.push(_);h(g,T,v)}for(const f of m)delete g[f]}}else{const g=n;c in g&&Wu(g[c],t,i,r+1,a)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function pc(n){if(typeof n!="string")throw new Error("fromImageBytes must be a string");return n}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function vE(n){const t={},i=u(n,["operationName"]);i!=null&&h(t,["operationName"],i);const r=u(n,["resourceName"]);return r!=null&&h(t,["_url","resourceName"],r),t}function TE(n){const t={},i=u(n,["name"]);i!=null&&h(t,["name"],i);const r=u(n,["metadata"]);r!=null&&h(t,["metadata"],r);const a=u(n,["done"]);a!=null&&h(t,["done"],a);const c=u(n,["error"]);c!=null&&h(t,["error"],c);const g=u(n,["response","generateVideoResponse"]);return g!=null&&h(t,["response"],SE(g)),t}function _E(n){const t={},i=u(n,["name"]);i!=null&&h(t,["name"],i);const r=u(n,["metadata"]);r!=null&&h(t,["metadata"],r);const a=u(n,["done"]);a!=null&&h(t,["done"],a);const c=u(n,["error"]);c!=null&&h(t,["error"],c);const g=u(n,["response"]);return g!=null&&h(t,["response"],EE(g)),t}function SE(n){const t={},i=u(n,["generatedSamples"]);if(i!=null){let c=i;Array.isArray(c)&&(c=c.map(g=>CE(g))),h(t,["generatedVideos"],c)}const r=u(n,["raiMediaFilteredCount"]);r!=null&&h(t,["raiMediaFilteredCount"],r);const a=u(n,["raiMediaFilteredReasons"]);return a!=null&&h(t,["raiMediaFilteredReasons"],a),t}function EE(n){const t={},i=u(n,["videos"]);if(i!=null){let c=i;Array.isArray(c)&&(c=c.map(g=>AE(g))),h(t,["generatedVideos"],c)}const r=u(n,["raiMediaFilteredCount"]);r!=null&&h(t,["raiMediaFilteredCount"],r);const a=u(n,["raiMediaFilteredReasons"]);return a!=null&&h(t,["raiMediaFilteredReasons"],a),t}function CE(n){const t={},i=u(n,["video"]);return i!=null&&h(t,["video"],NE(i)),t}function AE(n){const t={},i=u(n,["_self"]);return i!=null&&h(t,["video"],IE(i)),t}function wE(n){const t={},i=u(n,["operationName"]);return i!=null&&h(t,["_url","operationName"],i),t}function xE(n){const t={},i=u(n,["operationName"]);return i!=null&&h(t,["_url","operationName"],i),t}function bE(n){const t={},i=u(n,["name"]);i!=null&&h(t,["name"],i);const r=u(n,["metadata"]);r!=null&&h(t,["metadata"],r);const a=u(n,["done"]);a!=null&&h(t,["done"],a);const c=u(n,["error"]);c!=null&&h(t,["error"],c);const g=u(n,["response"]);return g!=null&&h(t,["response"],RE(g)),t}function RE(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["parent"]);r!=null&&h(t,["parent"],r);const a=u(n,["documentName"]);return a!=null&&h(t,["documentName"],a),t}function oy(n){const t={},i=u(n,["name"]);i!=null&&h(t,["name"],i);const r=u(n,["metadata"]);r!=null&&h(t,["metadata"],r);const a=u(n,["done"]);a!=null&&h(t,["done"],a);const c=u(n,["error"]);c!=null&&h(t,["error"],c);const g=u(n,["response"]);return g!=null&&h(t,["response"],ME(g)),t}function ME(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["parent"]);r!=null&&h(t,["parent"],r);const a=u(n,["documentName"]);return a!=null&&h(t,["documentName"],a),t}function NE(n){const t={},i=u(n,["uri"]);i!=null&&h(t,["uri"],i);const r=u(n,["encodedVideo"]);r!=null&&h(t,["videoBytes"],pc(r));const a=u(n,["encoding"]);return a!=null&&h(t,["mimeType"],a),t}function IE(n){const t={},i=u(n,["gcsUri"]);i!=null&&h(t,["uri"],i);const r=u(n,["bytesBase64Encoded"]);r!=null&&h(t,["videoBytes"],pc(r));const a=u(n,["mimeType"]);return a!=null&&h(t,["mimeType"],a),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Qf;(function(n){n.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",n.PYTHON="PYTHON"})(Qf||(Qf={}));var Zf;(function(n){n.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",n.OUTCOME_OK="OUTCOME_OK",n.OUTCOME_FAILED="OUTCOME_FAILED",n.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(Zf||(Zf={}));var $f;(function(n){n.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",n.SILENT="SILENT",n.WHEN_IDLE="WHEN_IDLE",n.INTERRUPT="INTERRUPT"})($f||($f={}));var Qn;(function(n){n.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",n.STRING="STRING",n.NUMBER="NUMBER",n.INTEGER="INTEGER",n.BOOLEAN="BOOLEAN",n.ARRAY="ARRAY",n.OBJECT="OBJECT",n.NULL="NULL"})(Qn||(Qn={}));var jf;(function(n){n.PHISH_BLOCK_THRESHOLD_UNSPECIFIED="PHISH_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_HIGH_AND_ABOVE="BLOCK_HIGH_AND_ABOVE",n.BLOCK_HIGHER_AND_ABOVE="BLOCK_HIGHER_AND_ABOVE",n.BLOCK_VERY_HIGH_AND_ABOVE="BLOCK_VERY_HIGH_AND_ABOVE",n.BLOCK_ONLY_EXTREMELY_HIGH="BLOCK_ONLY_EXTREMELY_HIGH"})(jf||(jf={}));var em;(function(n){n.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",n.NO_AUTH="NO_AUTH",n.API_KEY_AUTH="API_KEY_AUTH",n.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",n.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",n.OAUTH="OAUTH",n.OIDC_AUTH="OIDC_AUTH"})(em||(em={}));var tm;(function(n){n.HTTP_IN_UNSPECIFIED="HTTP_IN_UNSPECIFIED",n.HTTP_IN_QUERY="HTTP_IN_QUERY",n.HTTP_IN_HEADER="HTTP_IN_HEADER",n.HTTP_IN_PATH="HTTP_IN_PATH",n.HTTP_IN_BODY="HTTP_IN_BODY",n.HTTP_IN_COOKIE="HTTP_IN_COOKIE"})(tm||(tm={}));var nm;(function(n){n.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",n.SIMPLE_SEARCH="SIMPLE_SEARCH",n.ELASTIC_SEARCH="ELASTIC_SEARCH"})(nm||(nm={}));var om;(function(n){n.UNSPECIFIED="UNSPECIFIED",n.BLOCKING="BLOCKING",n.NON_BLOCKING="NON_BLOCKING"})(om||(om={}));var im;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.MODE_DYNAMIC="MODE_DYNAMIC"})(im||(im={}));var sm;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.AUTO="AUTO",n.ANY="ANY",n.NONE="NONE",n.VALIDATED="VALIDATED"})(sm||(sm={}));var rm;(function(n){n.THINKING_LEVEL_UNSPECIFIED="THINKING_LEVEL_UNSPECIFIED",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH",n.MINIMAL="MINIMAL"})(rm||(rm={}));var am;(function(n){n.DONT_ALLOW="DONT_ALLOW",n.ALLOW_ADULT="ALLOW_ADULT",n.ALLOW_ALL="ALLOW_ALL"})(am||(am={}));var lm;(function(n){n.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",n.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",n.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",n.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",n.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",n.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",n.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",n.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",n.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_JAILBREAK="HARM_CATEGORY_JAILBREAK"})(lm||(lm={}));var um;(function(n){n.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",n.SEVERITY="SEVERITY",n.PROBABILITY="PROBABILITY"})(um||(um={}));var cm;(function(n){n.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE",n.OFF="OFF"})(cm||(cm={}));var hm;(function(n){n.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",n.STOP="STOP",n.MAX_TOKENS="MAX_TOKENS",n.SAFETY="SAFETY",n.RECITATION="RECITATION",n.LANGUAGE="LANGUAGE",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.SPII="SPII",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.IMAGE_SAFETY="IMAGE_SAFETY",n.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL",n.IMAGE_PROHIBITED_CONTENT="IMAGE_PROHIBITED_CONTENT",n.NO_IMAGE="NO_IMAGE",n.IMAGE_RECITATION="IMAGE_RECITATION",n.IMAGE_OTHER="IMAGE_OTHER"})(hm||(hm={}));var gm;(function(n){n.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",n.NEGLIGIBLE="NEGLIGIBLE",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH"})(gm||(gm={}));var dm;(function(n){n.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",n.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",n.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",n.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",n.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(dm||(dm={}));var fm;(function(n){n.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",n.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",n.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",n.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",n.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(fm||(fm={}));var mm;(function(n){n.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",n.SAFETY="SAFETY",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.IMAGE_SAFETY="IMAGE_SAFETY",n.MODEL_ARMOR="MODEL_ARMOR",n.JAILBREAK="JAILBREAK"})(mm||(mm={}));var pm;(function(n){n.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",n.ON_DEMAND="ON_DEMAND",n.ON_DEMAND_PRIORITY="ON_DEMAND_PRIORITY",n.ON_DEMAND_FLEX="ON_DEMAND_FLEX",n.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(pm||(pm={}));var Jr;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.AUDIO="AUDIO"})(Jr||(Jr={}));var ym;(function(n){n.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",n.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",n.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",n.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(ym||(ym={}));var vm;(function(n){n.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",n.TUNING_MODE_FULL="TUNING_MODE_FULL",n.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(vm||(vm={}));var Tm;(function(n){n.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",n.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",n.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",n.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",n.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",n.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",n.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(Tm||(Tm={}));var Ju;(function(n){n.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",n.JOB_STATE_QUEUED="JOB_STATE_QUEUED",n.JOB_STATE_PENDING="JOB_STATE_PENDING",n.JOB_STATE_RUNNING="JOB_STATE_RUNNING",n.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",n.JOB_STATE_FAILED="JOB_STATE_FAILED",n.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",n.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",n.JOB_STATE_PAUSED="JOB_STATE_PAUSED",n.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",n.JOB_STATE_UPDATING="JOB_STATE_UPDATING",n.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(Ju||(Ju={}));var _m;(function(n){n.TUNING_JOB_STATE_UNSPECIFIED="TUNING_JOB_STATE_UNSPECIFIED",n.TUNING_JOB_STATE_WAITING_FOR_QUOTA="TUNING_JOB_STATE_WAITING_FOR_QUOTA",n.TUNING_JOB_STATE_PROCESSING_DATASET="TUNING_JOB_STATE_PROCESSING_DATASET",n.TUNING_JOB_STATE_WAITING_FOR_CAPACITY="TUNING_JOB_STATE_WAITING_FOR_CAPACITY",n.TUNING_JOB_STATE_TUNING="TUNING_JOB_STATE_TUNING",n.TUNING_JOB_STATE_POST_PROCESSING="TUNING_JOB_STATE_POST_PROCESSING"})(_m||(_m={}));var Sm;(function(n){n.AGGREGATION_METRIC_UNSPECIFIED="AGGREGATION_METRIC_UNSPECIFIED",n.AVERAGE="AVERAGE",n.MODE="MODE",n.STANDARD_DEVIATION="STANDARD_DEVIATION",n.VARIANCE="VARIANCE",n.MINIMUM="MINIMUM",n.MAXIMUM="MAXIMUM",n.MEDIAN="MEDIAN",n.PERCENTILE_P90="PERCENTILE_P90",n.PERCENTILE_P95="PERCENTILE_P95",n.PERCENTILE_P99="PERCENTILE_P99"})(Sm||(Sm={}));var Em;(function(n){n.PAIRWISE_CHOICE_UNSPECIFIED="PAIRWISE_CHOICE_UNSPECIFIED",n.BASELINE="BASELINE",n.CANDIDATE="CANDIDATE",n.TIE="TIE"})(Em||(Em={}));var Cm;(function(n){n.TUNING_TASK_UNSPECIFIED="TUNING_TASK_UNSPECIFIED",n.TUNING_TASK_I2V="TUNING_TASK_I2V",n.TUNING_TASK_T2V="TUNING_TASK_T2V",n.TUNING_TASK_R2V="TUNING_TASK_R2V"})(Cm||(Cm={}));var Am;(function(n){n.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",n.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",n.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",n.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH",n.MEDIA_RESOLUTION_ULTRA_HIGH="MEDIA_RESOLUTION_ULTRA_HIGH"})(Am||(Am={}));var wm;(function(n){n.TOOL_TYPE_UNSPECIFIED="TOOL_TYPE_UNSPECIFIED",n.GOOGLE_SEARCH_WEB="GOOGLE_SEARCH_WEB",n.GOOGLE_SEARCH_IMAGE="GOOGLE_SEARCH_IMAGE",n.URL_CONTEXT="URL_CONTEXT",n.GOOGLE_MAPS="GOOGLE_MAPS",n.FILE_SEARCH="FILE_SEARCH"})(wm||(wm={}));var Ku;(function(n){n.COLLECTION="COLLECTION"})(Ku||(Ku={}));var xm;(function(n){n.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",n.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",n.BALANCED="BALANCED",n.PRIORITIZE_COST="PRIORITIZE_COST"})(xm||(xm={}));var bm;(function(n){n.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",n.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(bm||(bm={}));var Rm;(function(n){n.PROMINENT_PEOPLE_UNSPECIFIED="PROMINENT_PEOPLE_UNSPECIFIED",n.ALLOW_PROMINENT_PEOPLE="ALLOW_PROMINENT_PEOPLE",n.BLOCK_PROMINENT_PEOPLE="BLOCK_PROMINENT_PEOPLE"})(Rm||(Rm={}));var Kr;(function(n){n.PREDICT="PREDICT",n.EMBED_CONTENT="EMBED_CONTENT"})(Kr||(Kr={}));var Mm;(function(n){n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE"})(Mm||(Mm={}));var Nm;(function(n){n.auto="auto",n.en="en",n.ja="ja",n.ko="ko",n.hi="hi",n.zh="zh",n.pt="pt",n.es="es"})(Nm||(Nm={}));var Im;(function(n){n.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",n.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",n.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",n.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",n.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(Im||(Im={}));var Dm;(function(n){n.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",n.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",n.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",n.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(Dm||(Dm={}));var km;(function(n){n.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",n.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",n.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",n.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(km||(km={}));var Um;(function(n){n.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",n.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",n.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",n.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",n.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",n.EDIT_MODE_STYLE="EDIT_MODE_STYLE",n.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",n.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(Um||(Um={}));var zm;(function(n){n.FOREGROUND="FOREGROUND",n.BACKGROUND="BACKGROUND",n.PROMPT="PROMPT",n.SEMANTIC="SEMANTIC",n.INTERACTIVE="INTERACTIVE"})(zm||(zm={}));var Lm;(function(n){n.ASSET="ASSET",n.STYLE="STYLE"})(Lm||(Lm={}));var Hm;(function(n){n.INSERT="INSERT",n.REMOVE="REMOVE",n.REMOVE_STATIC="REMOVE_STATIC",n.OUTPAINT="OUTPAINT"})(Hm||(Hm={}));var Bm;(function(n){n.OPTIMIZED="OPTIMIZED",n.LOSSLESS="LOSSLESS"})(Bm||(Bm={}));var qm;(function(n){n.SUPERVISED_FINE_TUNING="SUPERVISED_FINE_TUNING",n.PREFERENCE_TUNING="PREFERENCE_TUNING",n.DISTILLATION="DISTILLATION"})(qm||(qm={}));var Pm;(function(n){n.STATE_UNSPECIFIED="STATE_UNSPECIFIED",n.STATE_PENDING="STATE_PENDING",n.STATE_ACTIVE="STATE_ACTIVE",n.STATE_FAILED="STATE_FAILED"})(Pm||(Pm={}));var Gm;(function(n){n.STATE_UNSPECIFIED="STATE_UNSPECIFIED",n.PROCESSING="PROCESSING",n.ACTIVE="ACTIVE",n.FAILED="FAILED"})(Gm||(Gm={}));var Vm;(function(n){n.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",n.UPLOADED="UPLOADED",n.GENERATED="GENERATED",n.REGISTERED="REGISTERED"})(Vm||(Vm={}));var Om;(function(n){n.TURN_COMPLETE_REASON_UNSPECIFIED="TURN_COMPLETE_REASON_UNSPECIFIED",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.RESPONSE_REJECTED="RESPONSE_REJECTED",n.NEED_MORE_INPUT="NEED_MORE_INPUT"})(Om||(Om={}));var Fm;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.VIDEO="VIDEO",n.AUDIO="AUDIO",n.DOCUMENT="DOCUMENT"})(Fm||(Fm={}));var Ym;(function(n){n.VAD_SIGNAL_TYPE_UNSPECIFIED="VAD_SIGNAL_TYPE_UNSPECIFIED",n.VAD_SIGNAL_TYPE_SOS="VAD_SIGNAL_TYPE_SOS",n.VAD_SIGNAL_TYPE_EOS="VAD_SIGNAL_TYPE_EOS"})(Ym||(Ym={}));var Wm;(function(n){n.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",n.ACTIVITY_START="ACTIVITY_START",n.ACTIVITY_END="ACTIVITY_END"})(Wm||(Wm={}));var Jm;(function(n){n.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",n.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",n.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(Jm||(Jm={}));var Km;(function(n){n.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",n.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",n.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(Km||(Km={}));var Xm;(function(n){n.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",n.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",n.NO_INTERRUPTION="NO_INTERRUPTION"})(Xm||(Xm={}));var Qm;(function(n){n.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",n.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",n.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(Qm||(Qm={}));var Zm;(function(n){n.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",n.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",n.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",n.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",n.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",n.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",n.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",n.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",n.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",n.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",n.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",n.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",n.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(Zm||(Zm={}));var $m;(function(n){n.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",n.QUALITY="QUALITY",n.DIVERSITY="DIVERSITY",n.VOCALIZATION="VOCALIZATION"})($m||($m={}));var si;(function(n){n.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",n.PLAY="PLAY",n.PAUSE="PAUSE",n.STOP="STOP",n.RESET_CONTEXT="RESET_CONTEXT"})(si||(si={}));class Xu{constructor(t){const i={};for(const r of t.headers.entries())i[r[0]]=r[1];this.headers=i,this.responseInternal=t}json(){return this.responseInternal.json()}}class gs{get text(){var t,i,r,a,c,g,m,y;if(((a=(r=(i=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||i===void 0?void 0:i.content)===null||r===void 0?void 0:r.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning text from the first one.");let f="",v=!1;const T=[];for(const _ of(y=(m=(g=(c=this.candidates)===null||c===void 0?void 0:c[0])===null||g===void 0?void 0:g.content)===null||m===void 0?void 0:m.parts)!==null&&y!==void 0?y:[]){for(const[C,A]of Object.entries(_))C!=="text"&&C!=="thought"&&C!=="thoughtSignature"&&(A!==null||A!==void 0)&&T.push(C);if(typeof _.text=="string"){if(typeof _.thought=="boolean"&&_.thought)continue;v=!0,f+=_.text}}return T.length>0&&console.warn(`there are non-text parts ${T} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),v?f:void 0}get data(){var t,i,r,a,c,g,m,y;if(((a=(r=(i=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||i===void 0?void 0:i.content)===null||r===void 0?void 0:r.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning data from the first one.");let f="";const v=[];for(const T of(y=(m=(g=(c=this.candidates)===null||c===void 0?void 0:c[0])===null||g===void 0?void 0:g.content)===null||m===void 0?void 0:m.parts)!==null&&y!==void 0?y:[]){for(const[_,C]of Object.entries(T))_!=="inlineData"&&(C!==null||C!==void 0)&&v.push(_);T.inlineData&&typeof T.inlineData.data=="string"&&(f+=atob(T.inlineData.data))}return v.length>0&&console.warn(`there are non-data parts ${v} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),f.length>0?btoa(f):void 0}get functionCalls(){var t,i,r,a,c,g,m,y;if(((a=(r=(i=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||i===void 0?void 0:i.content)===null||r===void 0?void 0:r.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning function calls from the first one.");const f=(y=(m=(g=(c=this.candidates)===null||c===void 0?void 0:c[0])===null||g===void 0?void 0:g.content)===null||m===void 0?void 0:m.parts)===null||y===void 0?void 0:y.filter(v=>v.functionCall).map(v=>v.functionCall).filter(v=>v!==void 0);if((f==null?void 0:f.length)!==0)return f}get executableCode(){var t,i,r,a,c,g,m,y,f;if(((a=(r=(i=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||i===void 0?void 0:i.content)===null||r===void 0?void 0:r.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning executable code from the first one.");const v=(y=(m=(g=(c=this.candidates)===null||c===void 0?void 0:c[0])===null||g===void 0?void 0:g.content)===null||m===void 0?void 0:m.parts)===null||y===void 0?void 0:y.filter(T=>T.executableCode).map(T=>T.executableCode).filter(T=>T!==void 0);if((v==null?void 0:v.length)!==0)return(f=v==null?void 0:v[0])===null||f===void 0?void 0:f.code}get codeExecutionResult(){var t,i,r,a,c,g,m,y,f;if(((a=(r=(i=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||i===void 0?void 0:i.content)===null||r===void 0?void 0:r.parts)===null||a===void 0?void 0:a.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning code execution result from the first one.");const v=(y=(m=(g=(c=this.candidates)===null||c===void 0?void 0:c[0])===null||g===void 0?void 0:g.content)===null||m===void 0?void 0:m.parts)===null||y===void 0?void 0:y.filter(T=>T.codeExecutionResult).map(T=>T.codeExecutionResult).filter(T=>T!==void 0);if((v==null?void 0:v.length)!==0)return(f=v==null?void 0:v[0])===null||f===void 0?void 0:f.output}}class jm{}class ep{}class DE{}class kE{}class UE{}class zE{}class tp{}class np{}class op{}class LE{}class Xr{_fromAPIResponse({apiResponse:t,_isVertexAI:i}){const r=new Xr;let a;const c=t;return i?a=_E(c):a=TE(c),Object.assign(r,a),r}}class ip{}class sp{}class rp{}class ap{}class HE{}class BE{}class qE{}class yc{_fromAPIResponse({apiResponse:t,_isVertexAI:i}){const r=new yc,c=bE(t);return Object.assign(r,c),r}}class PE{}class GE{}class VE{}class OE{}class lp{}class FE{get text(){var t,i,r;let a="",c=!1;const g=[];for(const m of(r=(i=(t=this.serverContent)===null||t===void 0?void 0:t.modelTurn)===null||i===void 0?void 0:i.parts)!==null&&r!==void 0?r:[]){for(const[y,f]of Object.entries(m))y!=="text"&&y!=="thought"&&f!==null&&g.push(y);if(typeof m.text=="string"){if(typeof m.thought=="boolean"&&m.thought)continue;c=!0,a+=m.text}}return g.length>0&&console.warn(`there are non-text parts ${g} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),c?a:void 0}get data(){var t,i,r;let a="";const c=[];for(const g of(r=(i=(t=this.serverContent)===null||t===void 0?void 0:t.modelTurn)===null||i===void 0?void 0:i.parts)!==null&&r!==void 0?r:[]){for(const[m,y]of Object.entries(g))m!=="inlineData"&&y!==null&&c.push(m);g.inlineData&&typeof g.inlineData.data=="string"&&(a+=atob(g.inlineData.data))}return c.length>0&&console.warn(`there are non-data parts ${c} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),a.length>0?btoa(a):void 0}}class YE{get audioChunk(){if(this.serverContent&&this.serverContent.audioChunks&&this.serverContent.audioChunks.length>0)return this.serverContent.audioChunks[0]}}class vc{_fromAPIResponse({apiResponse:t,_isVertexAI:i}){const r=new vc,c=oy(t);return Object.assign(r,c),r}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ae(n,t){if(!t||typeof t!="string")throw new Error("model is required and must be a string");if(t.includes("..")||t.includes("?")||t.includes("&"))throw new Error("invalid model parameter");if(n.isVertexAI()){if(t.startsWith("publishers/")||t.startsWith("projects/")||t.startsWith("models/"))return t;if(t.indexOf("/")>=0){const i=t.split("/",2);return`publishers/${i[0]}/models/${i[1]}`}else return`publishers/google/models/${t}`}else return t.startsWith("models/")||t.startsWith("tunedModels/")?t:`models/${t}`}function iy(n,t){const i=Ae(n,t);return i?i.startsWith("publishers/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/${i}`:i.startsWith("models/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/publishers/google/${i}`:i:""}function sy(n){return Array.isArray(n)?n.map(t=>Qr(t)):[Qr(n)]}function Qr(n){if(typeof n=="object"&&n!==null)return n;throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof n}`)}function ry(n){const t=Qr(n);if(t.mimeType&&t.mimeType.startsWith("image/"))return t;throw new Error(`Unsupported mime type: ${t.mimeType}`)}function ay(n){const t=Qr(n);if(t.mimeType&&t.mimeType.startsWith("audio/"))return t;throw new Error(`Unsupported mime type: ${t.mimeType}`)}function up(n){if(n==null)throw new Error("PartUnion is required");if(typeof n=="object")return n;if(typeof n=="string")return{text:n};throw new Error(`Unsupported part type: ${typeof n}`)}function ly(n){if(n==null||Array.isArray(n)&&n.length===0)throw new Error("PartListUnion is required");return Array.isArray(n)?n.map(t=>up(t)):[up(n)]}function Qu(n){return n!=null&&typeof n=="object"&&"parts"in n&&Array.isArray(n.parts)}function cp(n){return n!=null&&typeof n=="object"&&"functionCall"in n}function hp(n){return n!=null&&typeof n=="object"&&"functionResponse"in n}function et(n){if(n==null)throw new Error("ContentUnion is required");return Qu(n)?n:{role:"user",parts:ly(n)}}function Tc(n,t){if(!t)return[];if(n.isVertexAI()&&Array.isArray(t))return t.flatMap(i=>{const r=et(i);return r.parts&&r.parts.length>0&&r.parts[0].text!==void 0?[r.parts[0].text]:[]});if(n.isVertexAI()){const i=et(t);return i.parts&&i.parts.length>0&&i.parts[0].text!==void 0?[i.parts[0].text]:[]}return Array.isArray(t)?t.map(i=>et(i)):[et(t)]}function Mt(n){if(n==null||Array.isArray(n)&&n.length===0)throw new Error("contents are required");if(!Array.isArray(n)){if(cp(n)||hp(n))throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");return[et(n)]}const t=[],i=[],r=Qu(n[0]);for(const a of n){const c=Qu(a);if(c!=r)throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");if(c)t.push(a);else{if(cp(a)||hp(a))throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");i.push(a)}}return r||t.push({role:"user",parts:ly(i)}),t}function WE(n,t){n.includes("null")&&(t.nullable=!0);const i=n.filter(r=>r!=="null");if(i.length===1)t.type=Object.values(Qn).includes(i[0].toUpperCase())?i[0].toUpperCase():Qn.TYPE_UNSPECIFIED;else{t.anyOf=[];for(const r of i)t.anyOf.push({type:Object.values(Qn).includes(r.toUpperCase())?r.toUpperCase():Qn.TYPE_UNSPECIFIED})}}function ai(n){const t={},i=["items"],r=["anyOf"],a=["properties"];if(n.type&&n.anyOf)throw new Error("type and anyOf cannot be both populated.");const c=n.anyOf;c!=null&&c.length==2&&(c[0].type==="null"?(t.nullable=!0,n=c[1]):c[1].type==="null"&&(t.nullable=!0,n=c[0])),n.type instanceof Array&&WE(n.type,t);for(const[g,m]of Object.entries(n))if(m!=null)if(g=="type"){if(m==="null")throw new Error("type: null can not be the only possible type for the field.");if(m instanceof Array)continue;t.type=Object.values(Qn).includes(m.toUpperCase())?m.toUpperCase():Qn.TYPE_UNSPECIFIED}else if(i.includes(g))t[g]=ai(m);else if(r.includes(g)){const y=[];for(const f of m){if(f.type=="null"){t.nullable=!0;continue}y.push(ai(f))}t[g]=y}else if(a.includes(g)){const y={};for(const[f,v]of Object.entries(m))y[f]=ai(v);t[g]=y}else{if(g==="additionalProperties")continue;t[g]=m}return t}function _c(n){return ai(n)}function Sc(n){if(typeof n=="object")return n;if(typeof n=="string")return{voiceConfig:{prebuiltVoiceConfig:{voiceName:n}}};throw new Error(`Unsupported speechConfig type: ${typeof n}`)}function Ec(n){if("multiSpeakerVoiceConfig"in n)throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");return n}function hi(n){if(n.functionDeclarations)for(const t of n.functionDeclarations)t.parameters&&(Object.keys(t.parameters).includes("$schema")?t.parametersJsonSchema||(t.parametersJsonSchema=t.parameters,delete t.parameters):t.parameters=ai(t.parameters)),t.response&&(Object.keys(t.response).includes("$schema")?t.responseJsonSchema||(t.responseJsonSchema=t.response,delete t.response):t.response=ai(t.response));return n}function gi(n){if(n==null)throw new Error("tools is required");if(!Array.isArray(n))throw new Error("tools is required and must be an array of Tools");const t=[];for(const i of n)t.push(i);return t}function JE(n,t,i,r=1){const a=!t.startsWith(`${i}/`)&&t.split("/").length===r;return n.isVertexAI()?t.startsWith("projects/")?t:t.startsWith("locations/")?`projects/${n.getProject()}/${t}`:t.startsWith(`${i}/`)?`projects/${n.getProject()}/locations/${n.getLocation()}/${t}`:a?`projects/${n.getProject()}/locations/${n.getLocation()}/${i}/${t}`:t:a?`${i}/${t}`:t}function An(n,t){if(typeof t!="string")throw new Error("name must be a string");return JE(n,t,"cachedContents")}function uy(n){switch(n){case"STATE_UNSPECIFIED":return"JOB_STATE_UNSPECIFIED";case"CREATING":return"JOB_STATE_RUNNING";case"ACTIVE":return"JOB_STATE_SUCCEEDED";case"FAILED":return"JOB_STATE_FAILED";default:return n}}function $n(n){return pc(n)}function KE(n){return n!=null&&typeof n=="object"&&"name"in n}function XE(n){return n!=null&&typeof n=="object"&&"video"in n}function QE(n){return n!=null&&typeof n=="object"&&"uri"in n}function cy(n){var t;let i;if(KE(n)&&(i=n.name),!(QE(n)&&(i=n.uri,i===void 0))&&!(XE(n)&&(i=(t=n.video)===null||t===void 0?void 0:t.uri,i===void 0))){if(typeof n=="string"&&(i=n),i===void 0)throw new Error("Could not extract file name from the provided input.");if(i.startsWith("https://")){const a=i.split("files/")[1].match(/[a-z0-9]+/);if(a===null)throw new Error(`Could not extract file name from URI ${i}`);i=a[0]}else i.startsWith("files/")&&(i=i.split("files/")[1]);return i}}function hy(n,t){let i;return n.isVertexAI()?i=t?"publishers/google/models":"models":i=t?"models":"tunedModels",i}function gy(n){for(const t of["models","tunedModels","publisherModels"])if(ZE(n,t))return n[t];return[]}function ZE(n,t){return n!==null&&typeof n=="object"&&t in n}function $E(n,t={}){const i=n,r={name:i.name,description:i.description,parametersJsonSchema:i.inputSchema};return i.outputSchema&&(r.responseJsonSchema=i.outputSchema),t.behavior&&(r.behavior=t.behavior),{functionDeclarations:[r]}}function jE(n,t={}){const i=[],r=new Set;for(const a of n){const c=a.name;if(r.has(c))throw new Error(`Duplicate function name ${c} found in MCP tools. Please ensure function names are unique.`);r.add(c);const g=$E(a,t);g.functionDeclarations&&i.push(...g.functionDeclarations)}return{functionDeclarations:i}}function dy(n,t){let i;if(typeof t=="string")if(n.isVertexAI())if(t.startsWith("gs://"))i={format:"jsonl",gcsUri:[t]};else if(t.startsWith("bq://"))i={format:"bigquery",bigqueryUri:t};else throw new Error(`Unsupported string source for Vertex AI: ${t}`);else if(t.startsWith("files/"))i={fileName:t};else throw new Error(`Unsupported string source for Gemini API: ${t}`);else if(Array.isArray(t)){if(n.isVertexAI())throw new Error("InlinedRequest[] is not supported in Vertex AI.");i={inlinedRequests:t}}else i=t;const r=[i.gcsUri,i.bigqueryUri].filter(Boolean).length,a=[i.inlinedRequests,i.fileName].filter(Boolean).length;if(n.isVertexAI()){if(a>0||r!==1)throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.")}else if(r>0||a!==1)throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");return i}function eC(n){if(typeof n!="string")return n;const t=n;if(t.startsWith("gs://"))return{format:"jsonl",gcsUri:t};if(t.startsWith("bq://"))return{format:"bigquery",bigqueryUri:t};throw new Error(`Unsupported destination: ${t}`)}function fy(n){if(typeof n!="object"||n===null)return{};const t=n,i=t.inlinedResponses;if(typeof i!="object"||i===null)return n;const a=i.inlinedResponses;if(!Array.isArray(a)||a.length===0)return n;let c=!1;for(const g of a){if(typeof g!="object"||g===null)continue;const y=g.response;if(typeof y!="object"||y===null)continue;if(y.embedding!==void 0){c=!0;break}}return c&&(t.inlinedEmbedContentResponses=t.inlinedResponses,delete t.inlinedResponses),n}function di(n,t){const i=t;if(!n.isVertexAI()){if(/batches\/[^/]+$/.test(i))return i.split("/").pop();throw new Error(`Invalid batch job name: ${i}.`)}if(/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(i))return i.split("/").pop();if(/^\d+$/.test(i))return i;throw new Error(`Invalid batch job name: ${i}.`)}function my(n){const t=n;return t==="BATCH_STATE_UNSPECIFIED"?"JOB_STATE_UNSPECIFIED":t==="BATCH_STATE_PENDING"?"JOB_STATE_PENDING":t==="BATCH_STATE_RUNNING"?"JOB_STATE_RUNNING":t==="BATCH_STATE_SUCCEEDED"?"JOB_STATE_SUCCEEDED":t==="BATCH_STATE_FAILED"?"JOB_STATE_FAILED":t==="BATCH_STATE_CANCELLED"?"JOB_STATE_CANCELLED":t==="BATCH_STATE_EXPIRED"?"JOB_STATE_EXPIRED":t}function tC(n){return n.includes("gemini")&&n!=="gemini-embedding-001"||n.includes("maas")}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function nC(n){const t={},i=u(n,["apiKey"]);if(i!=null&&h(t,["apiKey"],i),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return t}function oC(n){const t={},i=u(n,["responsesFile"]);i!=null&&h(t,["fileName"],i);const r=u(n,["inlinedResponses","inlinedResponses"]);if(r!=null){let c=r;Array.isArray(c)&&(c=c.map(g=>HC(g))),h(t,["inlinedResponses"],c)}const a=u(n,["inlinedEmbedContentResponses","inlinedResponses"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(t,["inlinedEmbedContentResponses"],c)}return t}function iC(n){const t={},i=u(n,["predictionsFormat"]);i!=null&&h(t,["format"],i);const r=u(n,["gcsDestination","outputUriPrefix"]);r!=null&&h(t,["gcsUri"],r);const a=u(n,["bigqueryDestination","outputUri"]);return a!=null&&h(t,["bigqueryUri"],a),t}function sC(n){const t={},i=u(n,["format"]);i!=null&&h(t,["predictionsFormat"],i);const r=u(n,["gcsUri"]);r!=null&&h(t,["gcsDestination","outputUriPrefix"],r);const a=u(n,["bigqueryUri"]);if(a!=null&&h(t,["bigqueryDestination","outputUri"],a),u(n,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(u(n,["inlinedResponses"])!==void 0)throw new Error("inlinedResponses parameter is not supported in Vertex AI.");if(u(n,["inlinedEmbedContentResponses"])!==void 0)throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");return t}function Fr(n){const t={},i=u(n,["name"]);i!=null&&h(t,["name"],i);const r=u(n,["metadata","displayName"]);r!=null&&h(t,["displayName"],r);const a=u(n,["metadata","state"]);a!=null&&h(t,["state"],my(a));const c=u(n,["metadata","createTime"]);c!=null&&h(t,["createTime"],c);const g=u(n,["metadata","endTime"]);g!=null&&h(t,["endTime"],g);const m=u(n,["metadata","updateTime"]);m!=null&&h(t,["updateTime"],m);const y=u(n,["metadata","model"]);y!=null&&h(t,["model"],y);const f=u(n,["metadata","output"]);return f!=null&&h(t,["dest"],oC(fy(f))),t}function Zu(n){const t={},i=u(n,["name"]);i!=null&&h(t,["name"],i);const r=u(n,["displayName"]);r!=null&&h(t,["displayName"],r);const a=u(n,["state"]);a!=null&&h(t,["state"],my(a));const c=u(n,["error"]);c!=null&&h(t,["error"],c);const g=u(n,["createTime"]);g!=null&&h(t,["createTime"],g);const m=u(n,["startTime"]);m!=null&&h(t,["startTime"],m);const y=u(n,["endTime"]);y!=null&&h(t,["endTime"],y);const f=u(n,["updateTime"]);f!=null&&h(t,["updateTime"],f);const v=u(n,["model"]);v!=null&&h(t,["model"],v);const T=u(n,["inputConfig"]);T!=null&&h(t,["src"],rC(T));const _=u(n,["outputConfig"]);_!=null&&h(t,["dest"],iC(fy(_)));const C=u(n,["completionStats"]);return C!=null&&h(t,["completionStats"],C),t}function rC(n){const t={},i=u(n,["instancesFormat"]);i!=null&&h(t,["format"],i);const r=u(n,["gcsSource","uris"]);r!=null&&h(t,["gcsUri"],r);const a=u(n,["bigquerySource","inputUri"]);return a!=null&&h(t,["bigqueryUri"],a),t}function aC(n,t){const i={};if(u(t,["format"])!==void 0)throw new Error("format parameter is not supported in Gemini API.");if(u(t,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(u(t,["bigqueryUri"])!==void 0)throw new Error("bigqueryUri parameter is not supported in Gemini API.");const r=u(t,["fileName"]);r!=null&&h(i,["fileName"],r);const a=u(t,["inlinedRequests"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>LC(n,g))),h(i,["requests","requests"],c)}return i}function lC(n){const t={},i=u(n,["format"]);i!=null&&h(t,["instancesFormat"],i);const r=u(n,["gcsUri"]);r!=null&&h(t,["gcsSource","uris"],r);const a=u(n,["bigqueryUri"]);if(a!=null&&h(t,["bigquerySource","inputUri"],a),u(n,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(u(n,["inlinedRequests"])!==void 0)throw new Error("inlinedRequests parameter is not supported in Vertex AI.");return t}function uC(n){const t={},i=u(n,["data"]);if(i!=null&&h(t,["data"],i),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const r=u(n,["mimeType"]);return r!=null&&h(t,["mimeType"],r),t}function cC(n,t){const i={},r=u(t,["name"]);return r!=null&&h(i,["_url","name"],di(n,r)),i}function hC(n,t){const i={},r=u(t,["name"]);return r!=null&&h(i,["_url","name"],di(n,r)),i}function gC(n){const t={},i=u(n,["content"]);i!=null&&h(t,["content"],i);const r=u(n,["citationMetadata"]);r!=null&&h(t,["citationMetadata"],dC(r));const a=u(n,["tokenCount"]);a!=null&&h(t,["tokenCount"],a);const c=u(n,["finishReason"]);c!=null&&h(t,["finishReason"],c);const g=u(n,["groundingMetadata"]);g!=null&&h(t,["groundingMetadata"],g);const m=u(n,["avgLogprobs"]);m!=null&&h(t,["avgLogprobs"],m);const y=u(n,["index"]);y!=null&&h(t,["index"],y);const f=u(n,["logprobsResult"]);f!=null&&h(t,["logprobsResult"],f);const v=u(n,["safetyRatings"]);if(v!=null){let _=v;Array.isArray(_)&&(_=_.map(C=>C)),h(t,["safetyRatings"],_)}const T=u(n,["urlContextMetadata"]);return T!=null&&h(t,["urlContextMetadata"],T),t}function dC(n){const t={},i=u(n,["citationSources"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(a=>a)),h(t,["citations"],r)}return t}function py(n){const t={},i=u(n,["parts"]);if(i!=null){let a=i;Array.isArray(a)&&(a=a.map(c=>FC(c))),h(t,["parts"],a)}const r=u(n,["role"]);return r!=null&&h(t,["role"],r),t}function fC(n,t){const i={},r=u(n,["displayName"]);if(t!==void 0&&r!=null&&h(t,["batch","displayName"],r),u(n,["dest"])!==void 0)throw new Error("dest parameter is not supported in Gemini API.");return i}function mC(n,t){const i={},r=u(n,["displayName"]);t!==void 0&&r!=null&&h(t,["displayName"],r);const a=u(n,["dest"]);return t!==void 0&&a!=null&&h(t,["outputConfig"],sC(eC(a))),i}function gp(n,t){const i={},r=u(t,["model"]);r!=null&&h(i,["_url","model"],Ae(n,r));const a=u(t,["src"]);a!=null&&h(i,["batch","inputConfig"],aC(n,dy(n,a)));const c=u(t,["config"]);return c!=null&&fC(c,i),i}function pC(n,t){const i={},r=u(t,["model"]);r!=null&&h(i,["model"],Ae(n,r));const a=u(t,["src"]);a!=null&&h(i,["inputConfig"],lC(dy(n,a)));const c=u(t,["config"]);return c!=null&&mC(c,i),i}function yC(n,t){const i={},r=u(n,["displayName"]);return t!==void 0&&r!=null&&h(t,["batch","displayName"],r),i}function vC(n,t){const i={},r=u(t,["model"]);r!=null&&h(i,["_url","model"],Ae(n,r));const a=u(t,["src"]);a!=null&&h(i,["batch","inputConfig"],wC(n,a));const c=u(t,["config"]);return c!=null&&yC(c,i),i}function TC(n,t){const i={},r=u(t,["name"]);return r!=null&&h(i,["_url","name"],di(n,r)),i}function _C(n,t){const i={},r=u(t,["name"]);return r!=null&&h(i,["_url","name"],di(n,r)),i}function SC(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["name"]);r!=null&&h(t,["name"],r);const a=u(n,["done"]);a!=null&&h(t,["done"],a);const c=u(n,["error"]);return c!=null&&h(t,["error"],c),t}function EC(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["name"]);r!=null&&h(t,["name"],r);const a=u(n,["done"]);a!=null&&h(t,["done"],a);const c=u(n,["error"]);return c!=null&&h(t,["error"],c),t}function CC(n,t){const i={},r=u(t,["contents"]);if(r!=null){let c=Tc(n,r);Array.isArray(c)&&(c=c.map(g=>g)),h(i,["requests[]","request","content"],c)}const a=u(t,["config"]);return a!=null&&(h(i,["_self"],AC(a,i)),yE(i,{"requests[].*":"requests[].request.*"})),i}function AC(n,t){const i={},r=u(n,["taskType"]);t!==void 0&&r!=null&&h(t,["requests[]","taskType"],r);const a=u(n,["title"]);t!==void 0&&a!=null&&h(t,["requests[]","title"],a);const c=u(n,["outputDimensionality"]);if(t!==void 0&&c!=null&&h(t,["requests[]","outputDimensionality"],c),u(n,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(u(n,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return i}function wC(n,t){const i={},r=u(t,["fileName"]);r!=null&&h(i,["file_name"],r);const a=u(t,["inlinedRequests"]);return a!=null&&h(i,["requests"],CC(n,a)),i}function xC(n){const t={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=u(n,["fileUri"]);i!=null&&h(t,["fileUri"],i);const r=u(n,["mimeType"]);return r!=null&&h(t,["mimeType"],r),t}function bC(n){const t={},i=u(n,["id"]);i!=null&&h(t,["id"],i);const r=u(n,["args"]);r!=null&&h(t,["args"],r);const a=u(n,["name"]);if(a!=null&&h(t,["name"],a),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function RC(n){const t={},i=u(n,["allowedFunctionNames"]);i!=null&&h(t,["allowedFunctionNames"],i);const r=u(n,["mode"]);if(r!=null&&h(t,["mode"],r),u(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function MC(n,t,i){const r={},a=u(t,["systemInstruction"]);i!==void 0&&a!=null&&h(i,["systemInstruction"],py(et(a)));const c=u(t,["temperature"]);c!=null&&h(r,["temperature"],c);const g=u(t,["topP"]);g!=null&&h(r,["topP"],g);const m=u(t,["topK"]);m!=null&&h(r,["topK"],m);const y=u(t,["candidateCount"]);y!=null&&h(r,["candidateCount"],y);const f=u(t,["maxOutputTokens"]);f!=null&&h(r,["maxOutputTokens"],f);const v=u(t,["stopSequences"]);v!=null&&h(r,["stopSequences"],v);const T=u(t,["responseLogprobs"]);T!=null&&h(r,["responseLogprobs"],T);const _=u(t,["logprobs"]);_!=null&&h(r,["logprobs"],_);const C=u(t,["presencePenalty"]);C!=null&&h(r,["presencePenalty"],C);const A=u(t,["frequencyPenalty"]);A!=null&&h(r,["frequencyPenalty"],A);const M=u(t,["seed"]);M!=null&&h(r,["seed"],M);const x=u(t,["responseMimeType"]);x!=null&&h(r,["responseMimeType"],x);const U=u(t,["responseSchema"]);U!=null&&h(r,["responseSchema"],_c(U));const Y=u(t,["responseJsonSchema"]);if(Y!=null&&h(r,["responseJsonSchema"],Y),u(t,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(u(t,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const P=u(t,["safetySettings"]);if(i!==void 0&&P!=null){let Ne=P;Array.isArray(Ne)&&(Ne=Ne.map(_e=>YC(_e))),h(i,["safetySettings"],Ne)}const J=u(t,["tools"]);if(i!==void 0&&J!=null){let Ne=gi(J);Array.isArray(Ne)&&(Ne=Ne.map(_e=>JC(hi(_e)))),h(i,["tools"],Ne)}const Q=u(t,["toolConfig"]);if(i!==void 0&&Q!=null&&h(i,["toolConfig"],WC(Q)),u(t,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const V=u(t,["cachedContent"]);i!==void 0&&V!=null&&h(i,["cachedContent"],An(n,V));const K=u(t,["responseModalities"]);K!=null&&h(r,["responseModalities"],K);const re=u(t,["mediaResolution"]);re!=null&&h(r,["mediaResolution"],re);const j=u(t,["speechConfig"]);if(j!=null&&h(r,["speechConfig"],Sc(j)),u(t,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const ue=u(t,["thinkingConfig"]);ue!=null&&h(r,["thinkingConfig"],ue);const Te=u(t,["imageConfig"]);Te!=null&&h(r,["imageConfig"],zC(Te));const be=u(t,["enableEnhancedCivicAnswers"]);if(be!=null&&h(r,["enableEnhancedCivicAnswers"],be),u(t,["modelArmorConfig"])!==void 0)throw new Error("modelArmorConfig parameter is not supported in Gemini API.");return r}function NC(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["candidates"]);if(r!=null){let y=r;Array.isArray(y)&&(y=y.map(f=>gC(f))),h(t,["candidates"],y)}const a=u(n,["modelVersion"]);a!=null&&h(t,["modelVersion"],a);const c=u(n,["promptFeedback"]);c!=null&&h(t,["promptFeedback"],c);const g=u(n,["responseId"]);g!=null&&h(t,["responseId"],g);const m=u(n,["usageMetadata"]);return m!=null&&h(t,["usageMetadata"],m),t}function IC(n,t){const i={},r=u(t,["name"]);return r!=null&&h(i,["_url","name"],di(n,r)),i}function DC(n,t){const i={},r=u(t,["name"]);return r!=null&&h(i,["_url","name"],di(n,r)),i}function kC(n){const t={},i=u(n,["authConfig"]);i!=null&&h(t,["authConfig"],nC(i));const r=u(n,["enableWidget"]);return r!=null&&h(t,["enableWidget"],r),t}function UC(n){const t={},i=u(n,["searchTypes"]);if(i!=null&&h(t,["searchTypes"],i),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const r=u(n,["timeRangeFilter"]);return r!=null&&h(t,["timeRangeFilter"],r),t}function zC(n){const t={},i=u(n,["aspectRatio"]);i!=null&&h(t,["aspectRatio"],i);const r=u(n,["imageSize"]);if(r!=null&&h(t,["imageSize"],r),u(n,["personGeneration"])!==void 0)throw new Error("personGeneration parameter is not supported in Gemini API.");if(u(n,["prominentPeople"])!==void 0)throw new Error("prominentPeople parameter is not supported in Gemini API.");if(u(n,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(u(n,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");if(u(n,["imageOutputOptions"])!==void 0)throw new Error("imageOutputOptions parameter is not supported in Gemini API.");return t}function LC(n,t){const i={},r=u(t,["model"]);r!=null&&h(i,["request","model"],Ae(n,r));const a=u(t,["contents"]);if(a!=null){let m=Mt(a);Array.isArray(m)&&(m=m.map(y=>py(y))),h(i,["request","contents"],m)}const c=u(t,["metadata"]);c!=null&&h(i,["metadata"],c);const g=u(t,["config"]);return g!=null&&h(i,["request","generationConfig"],MC(n,g,u(i,["request"],{}))),i}function HC(n){const t={},i=u(n,["response"]);i!=null&&h(t,["response"],NC(i));const r=u(n,["metadata"]);r!=null&&h(t,["metadata"],r);const a=u(n,["error"]);return a!=null&&h(t,["error"],a),t}function BC(n,t){const i={},r=u(n,["pageSize"]);t!==void 0&&r!=null&&h(t,["_query","pageSize"],r);const a=u(n,["pageToken"]);if(t!==void 0&&a!=null&&h(t,["_query","pageToken"],a),u(n,["filter"])!==void 0)throw new Error("filter parameter is not supported in Gemini API.");return i}function qC(n,t){const i={},r=u(n,["pageSize"]);t!==void 0&&r!=null&&h(t,["_query","pageSize"],r);const a=u(n,["pageToken"]);t!==void 0&&a!=null&&h(t,["_query","pageToken"],a);const c=u(n,["filter"]);return t!==void 0&&c!=null&&h(t,["_query","filter"],c),i}function PC(n){const t={},i=u(n,["config"]);return i!=null&&BC(i,t),t}function GC(n){const t={},i=u(n,["config"]);return i!=null&&qC(i,t),t}function VC(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(t,["nextPageToken"],r);const a=u(n,["operations"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>Fr(g))),h(t,["batchJobs"],c)}return t}function OC(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(t,["nextPageToken"],r);const a=u(n,["batchPredictionJobs"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>Zu(g))),h(t,["batchJobs"],c)}return t}function FC(n){const t={},i=u(n,["mediaResolution"]);i!=null&&h(t,["mediaResolution"],i);const r=u(n,["codeExecutionResult"]);r!=null&&h(t,["codeExecutionResult"],r);const a=u(n,["executableCode"]);a!=null&&h(t,["executableCode"],a);const c=u(n,["fileData"]);c!=null&&h(t,["fileData"],xC(c));const g=u(n,["functionCall"]);g!=null&&h(t,["functionCall"],bC(g));const m=u(n,["functionResponse"]);m!=null&&h(t,["functionResponse"],m);const y=u(n,["inlineData"]);y!=null&&h(t,["inlineData"],uC(y));const f=u(n,["text"]);f!=null&&h(t,["text"],f);const v=u(n,["thought"]);v!=null&&h(t,["thought"],v);const T=u(n,["thoughtSignature"]);T!=null&&h(t,["thoughtSignature"],T);const _=u(n,["videoMetadata"]);_!=null&&h(t,["videoMetadata"],_);const C=u(n,["toolCall"]);C!=null&&h(t,["toolCall"],C);const A=u(n,["toolResponse"]);return A!=null&&h(t,["toolResponse"],A),t}function YC(n){const t={},i=u(n,["category"]);if(i!=null&&h(t,["category"],i),u(n,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const r=u(n,["threshold"]);return r!=null&&h(t,["threshold"],r),t}function WC(n){const t={},i=u(n,["retrievalConfig"]);i!=null&&h(t,["retrievalConfig"],i);const r=u(n,["functionCallingConfig"]);r!=null&&h(t,["functionCallingConfig"],RC(r));const a=u(n,["includeServerSideToolInvocations"]);return a!=null&&h(t,["includeServerSideToolInvocations"],a),t}function JC(n){const t={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=u(n,["computerUse"]);i!=null&&h(t,["computerUse"],i);const r=u(n,["fileSearch"]);r!=null&&h(t,["fileSearch"],r);const a=u(n,["googleSearch"]);a!=null&&h(t,["googleSearch"],UC(a));const c=u(n,["googleMaps"]);c!=null&&h(t,["googleMaps"],kC(c));const g=u(n,["codeExecution"]);if(g!=null&&h(t,["codeExecution"],g),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const m=u(n,["functionDeclarations"]);if(m!=null){let T=m;Array.isArray(T)&&(T=T.map(_=>_)),h(t,["functionDeclarations"],T)}const y=u(n,["googleSearchRetrieval"]);if(y!=null&&h(t,["googleSearchRetrieval"],y),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const f=u(n,["urlContext"]);f!=null&&h(t,["urlContext"],f);const v=u(n,["mcpServers"]);if(v!=null){let T=v;Array.isArray(T)&&(T=T.map(_=>_)),h(t,["mcpServers"],T)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Sn;(function(n){n.PAGED_ITEM_BATCH_JOBS="batchJobs",n.PAGED_ITEM_MODELS="models",n.PAGED_ITEM_TUNING_JOBS="tuningJobs",n.PAGED_ITEM_FILES="files",n.PAGED_ITEM_CACHED_CONTENTS="cachedContents",n.PAGED_ITEM_FILE_SEARCH_STORES="fileSearchStores",n.PAGED_ITEM_DOCUMENTS="documents"})(Sn||(Sn={}));class _o{constructor(t,i,r,a){this.pageInternal=[],this.paramsInternal={},this.requestInternal=i,this.init(t,r,a)}init(t,i,r){var a,c;this.nameInternal=t,this.pageInternal=i[this.nameInternal]||[],this.sdkHttpResponseInternal=i==null?void 0:i.sdkHttpResponse,this.idxInternal=0;let g={config:{}};!r||Object.keys(r).length===0?g={config:{}}:typeof r=="object"?g=Object.assign({},r):g=r,g.config&&(g.config.pageToken=i.nextPageToken),this.paramsInternal=g,this.pageInternalSize=(c=(a=g.config)===null||a===void 0?void 0:a.pageSize)!==null&&c!==void 0?c:this.pageInternal.length}initNextPage(t){this.init(this.nameInternal,t,this.paramsInternal)}get page(){return this.pageInternal}get name(){return this.nameInternal}get pageSize(){return this.pageInternalSize}get sdkHttpResponse(){return this.sdkHttpResponseInternal}get params(){return this.paramsInternal}get pageLength(){return this.pageInternal.length}getItem(t){return this.pageInternal[t]}[Symbol.asyncIterator](){return{next:async()=>{if(this.idxInternal>=this.pageLength)if(this.hasNextPage())await this.nextPage();else return{value:void 0,done:!0};const t=this.getItem(this.idxInternal);return this.idxInternal+=1,{value:t,done:!1}},return:async()=>({value:void 0,done:!0})}}async nextPage(){if(!this.hasNextPage())throw new Error("No more pages to fetch.");const t=await this.requestInternal(this.params);return this.initNextPage(t),this.page}hasNextPage(){var t;return((t=this.params.config)===null||t===void 0?void 0:t.pageToken)!==void 0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class KC extends Cn{constructor(t){super(),this.apiClient=t,this.list=async(i={})=>new _o(Sn.PAGED_ITEM_BATCH_JOBS,r=>this.listInternal(r),await this.listInternal(i),i),this.create=async i=>(this.apiClient.isVertexAI()&&(i.config=this.formatDestination(i.src,i.config)),this.createInternal(i)),this.createEmbeddings=async i=>{if(console.warn("batches.createEmbeddings() is experimental and may change without notice."),this.apiClient.isVertexAI())throw new Error("Vertex AI does not support batches.createEmbeddings.");return this.createEmbeddingsInternal(i)}}createInlinedGenerateContentRequest(t){const i=gp(this.apiClient,t),r=i._url,a=Z("{model}:batchGenerateContent",r),m=i.batch.inputConfig.requests,y=m.requests,f=[];for(const v of y){const T=Object.assign({},v);if(T.systemInstruction){const _=T.systemInstruction;delete T.systemInstruction;const C=T.request;C.systemInstruction=_,T.request=C}f.push(T)}return m.requests=f,delete i.config,delete i._url,delete i._query,{path:a,body:i}}getGcsUri(t){if(typeof t=="string")return t.startsWith("gs://")?t:void 0;if(!Array.isArray(t)&&t.gcsUri&&t.gcsUri.length>0)return t.gcsUri[0]}getBigqueryUri(t){if(typeof t=="string")return t.startsWith("bq://")?t:void 0;if(!Array.isArray(t))return t.bigqueryUri}formatDestination(t,i){const r=i?Object.assign({},i):{},a=Date.now().toString();if(r.displayName||(r.displayName=`genaiBatchJob_${a}`),r.dest===void 0){const c=this.getGcsUri(t),g=this.getBigqueryUri(t);if(c)c.endsWith(".jsonl")?r.dest=`${c.slice(0,-6)}/dest`:r.dest=`${c}_dest_${a}`;else if(g)r.dest=`${g}_dest_${a}`;else throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.")}return r}async createInternal(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=pC(this.apiClient,t);return m=Z("batchPredictionJobs",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>Zu(v))}else{const f=gp(this.apiClient,t);return m=Z("{model}:batchGenerateContent",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>Fr(v))}}async createEmbeddingsInternal(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=vC(this.apiClient,t);return c=Z("{model}:asyncBatchEmbedContent",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>Fr(y))}}async get(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=DC(this.apiClient,t);return m=Z("batchPredictionJobs/{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>Zu(v))}else{const f=IC(this.apiClient,t);return m=Z("batches/{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>Fr(v))}}async cancel(t){var i,r,a,c;let g="",m={};if(this.apiClient.isVertexAI()){const y=hC(this.apiClient,t);g=Z("batchPredictionJobs/{name}:cancel",y._url),m=y._query,delete y._url,delete y._query,await this.apiClient.request({path:g,queryParams:m,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal})}else{const y=cC(this.apiClient,t);g=Z("batches/{name}:cancel",y._url),m=y._query,delete y._url,delete y._query,await this.apiClient.request({path:g,queryParams:m,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal})}}async listInternal(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=GC(t);return m=Z("batchPredictionJobs",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=OC(v),_=new lp;return Object.assign(_,T),_})}else{const f=PC(t);return m=Z("batches",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=VC(v),_=new lp;return Object.assign(_,T),_})}}async delete(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=_C(this.apiClient,t);return m=Z("batchPredictionJobs/{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>EC(v))}else{const f=TC(this.apiClient,t);return m=Z("batches/{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>SC(v))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function XC(n){const t={},i=u(n,["apiKey"]);if(i!=null&&h(t,["apiKey"],i),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return t}function QC(n){const t={},i=u(n,["data"]);if(i!=null&&h(t,["data"],i),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const r=u(n,["mimeType"]);return r!=null&&h(t,["mimeType"],r),t}function dp(n){const t={},i=u(n,["parts"]);if(i!=null){let a=i;Array.isArray(a)&&(a=a.map(c=>TA(c))),h(t,["parts"],a)}const r=u(n,["role"]);return r!=null&&h(t,["role"],r),t}function fp(n){const t={},i=u(n,["parts"]);if(i!=null){let a=i;Array.isArray(a)&&(a=a.map(c=>_A(c))),h(t,["parts"],a)}const r=u(n,["role"]);return r!=null&&h(t,["role"],r),t}function ZC(n,t){const i={},r=u(n,["ttl"]);t!==void 0&&r!=null&&h(t,["ttl"],r);const a=u(n,["expireTime"]);t!==void 0&&a!=null&&h(t,["expireTime"],a);const c=u(n,["displayName"]);t!==void 0&&c!=null&&h(t,["displayName"],c);const g=u(n,["contents"]);if(t!==void 0&&g!=null){let v=Mt(g);Array.isArray(v)&&(v=v.map(T=>dp(T))),h(t,["contents"],v)}const m=u(n,["systemInstruction"]);t!==void 0&&m!=null&&h(t,["systemInstruction"],dp(et(m)));const y=u(n,["tools"]);if(t!==void 0&&y!=null){let v=y;Array.isArray(v)&&(v=v.map(T=>CA(T))),h(t,["tools"],v)}const f=u(n,["toolConfig"]);if(t!==void 0&&f!=null&&h(t,["toolConfig"],SA(f)),u(n,["kmsKeyName"])!==void 0)throw new Error("kmsKeyName parameter is not supported in Gemini API.");return i}function $C(n,t){const i={},r=u(n,["ttl"]);t!==void 0&&r!=null&&h(t,["ttl"],r);const a=u(n,["expireTime"]);t!==void 0&&a!=null&&h(t,["expireTime"],a);const c=u(n,["displayName"]);t!==void 0&&c!=null&&h(t,["displayName"],c);const g=u(n,["contents"]);if(t!==void 0&&g!=null){let T=Mt(g);Array.isArray(T)&&(T=T.map(_=>fp(_))),h(t,["contents"],T)}const m=u(n,["systemInstruction"]);t!==void 0&&m!=null&&h(t,["systemInstruction"],fp(et(m)));const y=u(n,["tools"]);if(t!==void 0&&y!=null){let T=y;Array.isArray(T)&&(T=T.map(_=>AA(_))),h(t,["tools"],T)}const f=u(n,["toolConfig"]);t!==void 0&&f!=null&&h(t,["toolConfig"],EA(f));const v=u(n,["kmsKeyName"]);return t!==void 0&&v!=null&&h(t,["encryption_spec","kmsKeyName"],v),i}function jC(n,t){const i={},r=u(t,["model"]);r!=null&&h(i,["model"],iy(n,r));const a=u(t,["config"]);return a!=null&&ZC(a,i),i}function eA(n,t){const i={},r=u(t,["model"]);r!=null&&h(i,["model"],iy(n,r));const a=u(t,["config"]);return a!=null&&$C(a,i),i}function tA(n,t){const i={},r=u(t,["name"]);return r!=null&&h(i,["_url","name"],An(n,r)),i}function nA(n,t){const i={},r=u(t,["name"]);return r!=null&&h(i,["_url","name"],An(n,r)),i}function oA(n){const t={},i=u(n,["sdkHttpResponse"]);return i!=null&&h(t,["sdkHttpResponse"],i),t}function iA(n){const t={},i=u(n,["sdkHttpResponse"]);return i!=null&&h(t,["sdkHttpResponse"],i),t}function sA(n){const t={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=u(n,["fileUri"]);i!=null&&h(t,["fileUri"],i);const r=u(n,["mimeType"]);return r!=null&&h(t,["mimeType"],r),t}function rA(n){const t={},i=u(n,["id"]);i!=null&&h(t,["id"],i);const r=u(n,["args"]);r!=null&&h(t,["args"],r);const a=u(n,["name"]);if(a!=null&&h(t,["name"],a),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function aA(n){const t={},i=u(n,["allowedFunctionNames"]);i!=null&&h(t,["allowedFunctionNames"],i);const r=u(n,["mode"]);if(r!=null&&h(t,["mode"],r),u(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function lA(n){const t={},i=u(n,["description"]);i!=null&&h(t,["description"],i);const r=u(n,["name"]);r!=null&&h(t,["name"],r);const a=u(n,["parameters"]);a!=null&&h(t,["parameters"],a);const c=u(n,["parametersJsonSchema"]);c!=null&&h(t,["parametersJsonSchema"],c);const g=u(n,["response"]);g!=null&&h(t,["response"],g);const m=u(n,["responseJsonSchema"]);if(m!=null&&h(t,["responseJsonSchema"],m),u(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return t}function uA(n,t){const i={},r=u(t,["name"]);return r!=null&&h(i,["_url","name"],An(n,r)),i}function cA(n,t){const i={},r=u(t,["name"]);return r!=null&&h(i,["_url","name"],An(n,r)),i}function hA(n){const t={},i=u(n,["authConfig"]);i!=null&&h(t,["authConfig"],XC(i));const r=u(n,["enableWidget"]);return r!=null&&h(t,["enableWidget"],r),t}function gA(n){const t={},i=u(n,["searchTypes"]);if(i!=null&&h(t,["searchTypes"],i),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const r=u(n,["timeRangeFilter"]);return r!=null&&h(t,["timeRangeFilter"],r),t}function dA(n,t){const i={},r=u(n,["pageSize"]);t!==void 0&&r!=null&&h(t,["_query","pageSize"],r);const a=u(n,["pageToken"]);return t!==void 0&&a!=null&&h(t,["_query","pageToken"],a),i}function fA(n,t){const i={},r=u(n,["pageSize"]);t!==void 0&&r!=null&&h(t,["_query","pageSize"],r);const a=u(n,["pageToken"]);return t!==void 0&&a!=null&&h(t,["_query","pageToken"],a),i}function mA(n){const t={},i=u(n,["config"]);return i!=null&&dA(i,t),t}function pA(n){const t={},i=u(n,["config"]);return i!=null&&fA(i,t),t}function yA(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(t,["nextPageToken"],r);const a=u(n,["cachedContents"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(t,["cachedContents"],c)}return t}function vA(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(t,["nextPageToken"],r);const a=u(n,["cachedContents"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(t,["cachedContents"],c)}return t}function TA(n){const t={},i=u(n,["mediaResolution"]);i!=null&&h(t,["mediaResolution"],i);const r=u(n,["codeExecutionResult"]);r!=null&&h(t,["codeExecutionResult"],r);const a=u(n,["executableCode"]);a!=null&&h(t,["executableCode"],a);const c=u(n,["fileData"]);c!=null&&h(t,["fileData"],sA(c));const g=u(n,["functionCall"]);g!=null&&h(t,["functionCall"],rA(g));const m=u(n,["functionResponse"]);m!=null&&h(t,["functionResponse"],m);const y=u(n,["inlineData"]);y!=null&&h(t,["inlineData"],QC(y));const f=u(n,["text"]);f!=null&&h(t,["text"],f);const v=u(n,["thought"]);v!=null&&h(t,["thought"],v);const T=u(n,["thoughtSignature"]);T!=null&&h(t,["thoughtSignature"],T);const _=u(n,["videoMetadata"]);_!=null&&h(t,["videoMetadata"],_);const C=u(n,["toolCall"]);C!=null&&h(t,["toolCall"],C);const A=u(n,["toolResponse"]);return A!=null&&h(t,["toolResponse"],A),t}function _A(n){const t={},i=u(n,["mediaResolution"]);i!=null&&h(t,["mediaResolution"],i);const r=u(n,["codeExecutionResult"]);r!=null&&h(t,["codeExecutionResult"],r);const a=u(n,["executableCode"]);a!=null&&h(t,["executableCode"],a);const c=u(n,["fileData"]);c!=null&&h(t,["fileData"],c);const g=u(n,["functionCall"]);g!=null&&h(t,["functionCall"],g);const m=u(n,["functionResponse"]);m!=null&&h(t,["functionResponse"],m);const y=u(n,["inlineData"]);y!=null&&h(t,["inlineData"],y);const f=u(n,["text"]);f!=null&&h(t,["text"],f);const v=u(n,["thought"]);v!=null&&h(t,["thought"],v);const T=u(n,["thoughtSignature"]);T!=null&&h(t,["thoughtSignature"],T);const _=u(n,["videoMetadata"]);if(_!=null&&h(t,["videoMetadata"],_),u(n,["toolCall"])!==void 0)throw new Error("toolCall parameter is not supported in Vertex AI.");if(u(n,["toolResponse"])!==void 0)throw new Error("toolResponse parameter is not supported in Vertex AI.");return t}function SA(n){const t={},i=u(n,["retrievalConfig"]);i!=null&&h(t,["retrievalConfig"],i);const r=u(n,["functionCallingConfig"]);r!=null&&h(t,["functionCallingConfig"],aA(r));const a=u(n,["includeServerSideToolInvocations"]);return a!=null&&h(t,["includeServerSideToolInvocations"],a),t}function EA(n){const t={},i=u(n,["retrievalConfig"]);i!=null&&h(t,["retrievalConfig"],i);const r=u(n,["functionCallingConfig"]);if(r!=null&&h(t,["functionCallingConfig"],r),u(n,["includeServerSideToolInvocations"])!==void 0)throw new Error("includeServerSideToolInvocations parameter is not supported in Vertex AI.");return t}function CA(n){const t={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=u(n,["computerUse"]);i!=null&&h(t,["computerUse"],i);const r=u(n,["fileSearch"]);r!=null&&h(t,["fileSearch"],r);const a=u(n,["googleSearch"]);a!=null&&h(t,["googleSearch"],gA(a));const c=u(n,["googleMaps"]);c!=null&&h(t,["googleMaps"],hA(c));const g=u(n,["codeExecution"]);if(g!=null&&h(t,["codeExecution"],g),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const m=u(n,["functionDeclarations"]);if(m!=null){let T=m;Array.isArray(T)&&(T=T.map(_=>_)),h(t,["functionDeclarations"],T)}const y=u(n,["googleSearchRetrieval"]);if(y!=null&&h(t,["googleSearchRetrieval"],y),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const f=u(n,["urlContext"]);f!=null&&h(t,["urlContext"],f);const v=u(n,["mcpServers"]);if(v!=null){let T=v;Array.isArray(T)&&(T=T.map(_=>_)),h(t,["mcpServers"],T)}return t}function AA(n){const t={},i=u(n,["retrieval"]);i!=null&&h(t,["retrieval"],i);const r=u(n,["computerUse"]);if(r!=null&&h(t,["computerUse"],r),u(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const a=u(n,["googleSearch"]);a!=null&&h(t,["googleSearch"],a);const c=u(n,["googleMaps"]);c!=null&&h(t,["googleMaps"],c);const g=u(n,["codeExecution"]);g!=null&&h(t,["codeExecution"],g);const m=u(n,["enterpriseWebSearch"]);m!=null&&h(t,["enterpriseWebSearch"],m);const y=u(n,["functionDeclarations"]);if(y!=null){let _=y;Array.isArray(_)&&(_=_.map(C=>lA(C))),h(t,["functionDeclarations"],_)}const f=u(n,["googleSearchRetrieval"]);f!=null&&h(t,["googleSearchRetrieval"],f);const v=u(n,["parallelAiSearch"]);v!=null&&h(t,["parallelAiSearch"],v);const T=u(n,["urlContext"]);if(T!=null&&h(t,["urlContext"],T),u(n,["mcpServers"])!==void 0)throw new Error("mcpServers parameter is not supported in Vertex AI.");return t}function wA(n,t){const i={},r=u(n,["ttl"]);t!==void 0&&r!=null&&h(t,["ttl"],r);const a=u(n,["expireTime"]);return t!==void 0&&a!=null&&h(t,["expireTime"],a),i}function xA(n,t){const i={},r=u(n,["ttl"]);t!==void 0&&r!=null&&h(t,["ttl"],r);const a=u(n,["expireTime"]);return t!==void 0&&a!=null&&h(t,["expireTime"],a),i}function bA(n,t){const i={},r=u(t,["name"]);r!=null&&h(i,["_url","name"],An(n,r));const a=u(t,["config"]);return a!=null&&wA(a,i),i}function RA(n,t){const i={},r=u(t,["name"]);r!=null&&h(i,["_url","name"],An(n,r));const a=u(t,["config"]);return a!=null&&xA(a,i),i}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class MA extends Cn{constructor(t){super(),this.apiClient=t,this.list=async(i={})=>new _o(Sn.PAGED_ITEM_CACHED_CONTENTS,r=>this.listInternal(r),await this.listInternal(i),i)}async create(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=eA(this.apiClient,t);return m=Z("cachedContents",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>v)}else{const f=jC(this.apiClient,t);return m=Z("cachedContents",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>v)}}async get(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=cA(this.apiClient,t);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>v)}else{const f=uA(this.apiClient,t);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>v)}}async delete(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=nA(this.apiClient,t);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=iA(v),_=new rp;return Object.assign(_,T),_})}else{const f=tA(this.apiClient,t);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=oA(v),_=new rp;return Object.assign(_,T),_})}}async update(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=RA(this.apiClient,t);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"PATCH",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>v)}else{const f=bA(this.apiClient,t);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"PATCH",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>v)}}async listInternal(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=pA(t);return m=Z("cachedContents",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=vA(v),_=new ap;return Object.assign(_,T),_})}else{const f=mA(t);return m=Z("cachedContents",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=yA(v),_=new ap;return Object.assign(_,T),_})}}}function Zr(n,t){var i={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(i[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(i[r[a]]=n[r[a]]);return i}function mp(n){var t=typeof Symbol=="function"&&Symbol.iterator,i=t&&n[t],r=0;if(i)return i.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function le(n){return this instanceof le?(this.v=n,this):new le(n)}function Yt(n,t,i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=i.apply(n,t||[]),a,c=[];return a=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),m("next"),m("throw"),m("return",g),a[Symbol.asyncIterator]=function(){return this},a;function g(C){return function(A){return Promise.resolve(A).then(C,T)}}function m(C,A){r[C]&&(a[C]=function(M){return new Promise(function(x,U){c.push([C,M,x,U])>1||y(C,M)})},A&&(a[C]=A(a[C])))}function y(C,A){try{f(r[C](A))}catch(M){_(c[0][3],M)}}function f(C){C.value instanceof le?Promise.resolve(C.value.v).then(v,T):_(c[0][2],C)}function v(C){y("next",C)}function T(C){y("throw",C)}function _(C,A){C(A),c.shift(),c.length&&y(c[0][0],c[0][1])}}function Wt(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],i;return t?t.call(n):(n=typeof mp=="function"?mp(n):n[Symbol.iterator](),i={},r("next"),r("throw"),r("return"),i[Symbol.asyncIterator]=function(){return this},i);function r(c){i[c]=n[c]&&function(g){return new Promise(function(m,y){g=n[c](g),a(m,y,g.done,g.value)})}}function a(c,g,m,y){Promise.resolve(y).then(function(f){c({value:f,done:m})},g)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function NA(n){var t;if(n.candidates==null||n.candidates.length===0)return!1;const i=(t=n.candidates[0])===null||t===void 0?void 0:t.content;return i===void 0?!1:yy(i)}function yy(n){if(n.parts===void 0||n.parts.length===0)return!1;for(const t of n.parts)if(t===void 0||Object.keys(t).length===0)return!1;return!0}function IA(n){if(n.length!==0){for(const t of n)if(t.role!=="user"&&t.role!=="model")throw new Error(`Role must be user or model, but got ${t.role}.`)}}function pp(n){if(n===void 0||n.length===0)return[];const t=[],i=n.length;let r=0;for(;r<i;)if(n[r].role==="user")t.push(n[r]),r++;else{const a=[];let c=!0;for(;r<i&&n[r].role==="model";)a.push(n[r]),c&&!yy(n[r])&&(c=!1),r++;c?t.push(...a):t.pop()}return t}class DA{constructor(t,i){this.modelsModule=t,this.apiClient=i}create(t){return new kA(this.apiClient,this.modelsModule,t.model,t.config,structuredClone(t.history))}}class kA{constructor(t,i,r,a={},c=[]){this.apiClient=t,this.modelsModule=i,this.model=r,this.config=a,this.history=c,this.sendPromise=Promise.resolve(),IA(c)}async sendMessage(t){var i;await this.sendPromise;const r=et(t.message),a=this.modelsModule.generateContent({model:this.model,contents:this.getHistory(!0).concat(r),config:(i=t.config)!==null&&i!==void 0?i:this.config});return this.sendPromise=(async()=>{var c,g,m;const y=await a,f=(g=(c=y.candidates)===null||c===void 0?void 0:c[0])===null||g===void 0?void 0:g.content,v=y.automaticFunctionCallingHistory,T=this.getHistory(!0).length;let _=[];v!=null&&(_=(m=v.slice(T))!==null&&m!==void 0?m:[]);const C=f?[f]:[];this.recordHistory(r,C,_)})(),await this.sendPromise.catch(()=>{this.sendPromise=Promise.resolve()}),a}async sendMessageStream(t){var i;await this.sendPromise;const r=et(t.message),a=this.modelsModule.generateContentStream({model:this.model,contents:this.getHistory(!0).concat(r),config:(i=t.config)!==null&&i!==void 0?i:this.config});this.sendPromise=a.then(()=>{}).catch(()=>{});const c=await a;return this.processStreamResponse(c,r)}getHistory(t=!1){const i=t?pp(this.history):this.history;return structuredClone(i)}processStreamResponse(t,i){return Yt(this,arguments,function*(){var a,c,g,m,y,f;const v=[];try{for(var T=!0,_=Wt(t),C;C=yield le(_.next()),a=C.done,!a;T=!0){m=C.value,T=!1;const A=m;if(NA(A)){const M=(f=(y=A.candidates)===null||y===void 0?void 0:y[0])===null||f===void 0?void 0:f.content;M!==void 0&&v.push(M)}yield yield le(A)}}catch(A){c={error:A}}finally{try{!T&&!a&&(g=_.return)&&(yield le(g.call(_)))}finally{if(c)throw c.error}}this.recordHistory(i,v)})}recordHistory(t,i,r){let a=[];i.length>0&&i.every(c=>c.role!==void 0)?a=i:a.push({role:"model",parts:[]}),r&&r.length>0?this.history.push(...pp(r)):this.history.push(t),this.history.push(...a)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class oa extends Error{constructor(t){super(t.message),this.name="ApiError",this.status=t.status,Object.setPrototypeOf(this,oa.prototype)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function UA(n){const t={},i=u(n,["file"]);return i!=null&&h(t,["file"],i),t}function zA(n){const t={},i=u(n,["sdkHttpResponse"]);return i!=null&&h(t,["sdkHttpResponse"],i),t}function LA(n){const t={},i=u(n,["name"]);return i!=null&&h(t,["_url","file"],cy(i)),t}function HA(n){const t={},i=u(n,["sdkHttpResponse"]);return i!=null&&h(t,["sdkHttpResponse"],i),t}function BA(n){const t={},i=u(n,["name"]);return i!=null&&h(t,["_url","file"],cy(i)),t}function qA(n){const t={},i=u(n,["uris"]);return i!=null&&h(t,["uris"],i),t}function PA(n,t){const i={},r=u(n,["pageSize"]);t!==void 0&&r!=null&&h(t,["_query","pageSize"],r);const a=u(n,["pageToken"]);return t!==void 0&&a!=null&&h(t,["_query","pageToken"],a),i}function GA(n){const t={},i=u(n,["config"]);return i!=null&&PA(i,t),t}function VA(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(t,["nextPageToken"],r);const a=u(n,["files"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(t,["files"],c)}return t}function OA(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["files"]);if(r!=null){let a=r;Array.isArray(a)&&(a=a.map(c=>c)),h(t,["files"],a)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class FA extends Cn{constructor(t){super(),this.apiClient=t,this.list=async(i={})=>new _o(Sn.PAGED_ITEM_FILES,r=>this.listInternal(r),await this.listInternal(i),i)}async upload(t){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");return this.apiClient.uploadFile(t.file,t.config).then(i=>i)}async download(t){await this.apiClient.downloadFile(t)}async registerFiles(t){throw new Error("registerFiles is only supported in Node.js environments.")}async _registerFiles(t){return this.registerFilesInternal(t)}async listInternal(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=GA(t);return c=Z("files",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>{const f=VA(y),v=new PE;return Object.assign(v,f),v})}}async createInternal(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=UA(t);return c=Z("upload/v1beta/files",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=zA(y),v=new GE;return Object.assign(v,f),v})}}async get(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=BA(t);return c=Z("files/{file}",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>y)}}async delete(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=LA(t);return c=Z("files/{file}",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"DELETE",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>{const f=HA(y),v=new VE;return Object.assign(v,f),v})}}async registerFilesInternal(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=qA(t);return c=Z("files:register",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=OA(y),v=new OE;return Object.assign(v,f),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function yp(n){const t={};if(u(n,["languageCodes"])!==void 0)throw new Error("languageCodes parameter is not supported in Gemini API.");return t}function YA(n){const t={},i=u(n,["apiKey"]);if(i!=null&&h(t,["apiKey"],i),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return t}function Yr(n){const t={},i=u(n,["data"]);if(i!=null&&h(t,["data"],i),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const r=u(n,["mimeType"]);return r!=null&&h(t,["mimeType"],r),t}function WA(n){const t={},i=u(n,["parts"]);if(i!=null){let a=i;Array.isArray(a)&&(a=a.map(c=>uw(c))),h(t,["parts"],a)}const r=u(n,["role"]);return r!=null&&h(t,["role"],r),t}function JA(n){const t={},i=u(n,["parts"]);if(i!=null){let a=i;Array.isArray(a)&&(a=a.map(c=>cw(c))),h(t,["parts"],a)}const r=u(n,["role"]);return r!=null&&h(t,["role"],r),t}function KA(n){const t={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=u(n,["fileUri"]);i!=null&&h(t,["fileUri"],i);const r=u(n,["mimeType"]);return r!=null&&h(t,["mimeType"],r),t}function XA(n){const t={},i=u(n,["id"]);i!=null&&h(t,["id"],i);const r=u(n,["args"]);r!=null&&h(t,["args"],r);const a=u(n,["name"]);if(a!=null&&h(t,["name"],a),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function QA(n){const t={},i=u(n,["description"]);i!=null&&h(t,["description"],i);const r=u(n,["name"]);r!=null&&h(t,["name"],r);const a=u(n,["parameters"]);a!=null&&h(t,["parameters"],a);const c=u(n,["parametersJsonSchema"]);c!=null&&h(t,["parametersJsonSchema"],c);const g=u(n,["response"]);g!=null&&h(t,["response"],g);const m=u(n,["responseJsonSchema"]);if(m!=null&&h(t,["responseJsonSchema"],m),u(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return t}function ZA(n){const t={},i=u(n,["modelSelectionConfig"]);i!=null&&h(t,["modelConfig"],i);const r=u(n,["responseJsonSchema"]);r!=null&&h(t,["responseJsonSchema"],r);const a=u(n,["audioTimestamp"]);a!=null&&h(t,["audioTimestamp"],a);const c=u(n,["candidateCount"]);c!=null&&h(t,["candidateCount"],c);const g=u(n,["enableAffectiveDialog"]);g!=null&&h(t,["enableAffectiveDialog"],g);const m=u(n,["frequencyPenalty"]);m!=null&&h(t,["frequencyPenalty"],m);const y=u(n,["logprobs"]);y!=null&&h(t,["logprobs"],y);const f=u(n,["maxOutputTokens"]);f!=null&&h(t,["maxOutputTokens"],f);const v=u(n,["mediaResolution"]);v!=null&&h(t,["mediaResolution"],v);const T=u(n,["presencePenalty"]);T!=null&&h(t,["presencePenalty"],T);const _=u(n,["responseLogprobs"]);_!=null&&h(t,["responseLogprobs"],_);const C=u(n,["responseMimeType"]);C!=null&&h(t,["responseMimeType"],C);const A=u(n,["responseModalities"]);A!=null&&h(t,["responseModalities"],A);const M=u(n,["responseSchema"]);M!=null&&h(t,["responseSchema"],M);const x=u(n,["routingConfig"]);x!=null&&h(t,["routingConfig"],x);const U=u(n,["seed"]);U!=null&&h(t,["seed"],U);const Y=u(n,["speechConfig"]);Y!=null&&h(t,["speechConfig"],Y);const P=u(n,["stopSequences"]);P!=null&&h(t,["stopSequences"],P);const J=u(n,["temperature"]);J!=null&&h(t,["temperature"],J);const Q=u(n,["thinkingConfig"]);Q!=null&&h(t,["thinkingConfig"],Q);const V=u(n,["topK"]);V!=null&&h(t,["topK"],V);const K=u(n,["topP"]);if(K!=null&&h(t,["topP"],K),u(n,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return t}function $A(n){const t={},i=u(n,["authConfig"]);i!=null&&h(t,["authConfig"],YA(i));const r=u(n,["enableWidget"]);return r!=null&&h(t,["enableWidget"],r),t}function jA(n){const t={},i=u(n,["searchTypes"]);if(i!=null&&h(t,["searchTypes"],i),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const r=u(n,["timeRangeFilter"]);return r!=null&&h(t,["timeRangeFilter"],r),t}function ew(n,t){const i={},r=u(n,["generationConfig"]);t!==void 0&&r!=null&&h(t,["setup","generationConfig"],r);const a=u(n,["responseModalities"]);t!==void 0&&a!=null&&h(t,["setup","generationConfig","responseModalities"],a);const c=u(n,["temperature"]);t!==void 0&&c!=null&&h(t,["setup","generationConfig","temperature"],c);const g=u(n,["topP"]);t!==void 0&&g!=null&&h(t,["setup","generationConfig","topP"],g);const m=u(n,["topK"]);t!==void 0&&m!=null&&h(t,["setup","generationConfig","topK"],m);const y=u(n,["maxOutputTokens"]);t!==void 0&&y!=null&&h(t,["setup","generationConfig","maxOutputTokens"],y);const f=u(n,["mediaResolution"]);t!==void 0&&f!=null&&h(t,["setup","generationConfig","mediaResolution"],f);const v=u(n,["seed"]);t!==void 0&&v!=null&&h(t,["setup","generationConfig","seed"],v);const T=u(n,["speechConfig"]);t!==void 0&&T!=null&&h(t,["setup","generationConfig","speechConfig"],Ec(T));const _=u(n,["thinkingConfig"]);t!==void 0&&_!=null&&h(t,["setup","generationConfig","thinkingConfig"],_);const C=u(n,["enableAffectiveDialog"]);t!==void 0&&C!=null&&h(t,["setup","generationConfig","enableAffectiveDialog"],C);const A=u(n,["systemInstruction"]);t!==void 0&&A!=null&&h(t,["setup","systemInstruction"],WA(et(A)));const M=u(n,["tools"]);if(t!==void 0&&M!=null){let V=gi(M);Array.isArray(V)&&(V=V.map(K=>gw(hi(K)))),h(t,["setup","tools"],V)}const x=u(n,["sessionResumption"]);t!==void 0&&x!=null&&h(t,["setup","sessionResumption"],hw(x));const U=u(n,["inputAudioTranscription"]);t!==void 0&&U!=null&&h(t,["setup","inputAudioTranscription"],yp(U));const Y=u(n,["outputAudioTranscription"]);t!==void 0&&Y!=null&&h(t,["setup","outputAudioTranscription"],yp(Y));const P=u(n,["realtimeInputConfig"]);t!==void 0&&P!=null&&h(t,["setup","realtimeInputConfig"],P);const J=u(n,["contextWindowCompression"]);t!==void 0&&J!=null&&h(t,["setup","contextWindowCompression"],J);const Q=u(n,["proactivity"]);if(t!==void 0&&Q!=null&&h(t,["setup","proactivity"],Q),u(n,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return i}function tw(n,t){const i={},r=u(n,["generationConfig"]);t!==void 0&&r!=null&&h(t,["setup","generationConfig"],ZA(r));const a=u(n,["responseModalities"]);t!==void 0&&a!=null&&h(t,["setup","generationConfig","responseModalities"],a);const c=u(n,["temperature"]);t!==void 0&&c!=null&&h(t,["setup","generationConfig","temperature"],c);const g=u(n,["topP"]);t!==void 0&&g!=null&&h(t,["setup","generationConfig","topP"],g);const m=u(n,["topK"]);t!==void 0&&m!=null&&h(t,["setup","generationConfig","topK"],m);const y=u(n,["maxOutputTokens"]);t!==void 0&&y!=null&&h(t,["setup","generationConfig","maxOutputTokens"],y);const f=u(n,["mediaResolution"]);t!==void 0&&f!=null&&h(t,["setup","generationConfig","mediaResolution"],f);const v=u(n,["seed"]);t!==void 0&&v!=null&&h(t,["setup","generationConfig","seed"],v);const T=u(n,["speechConfig"]);t!==void 0&&T!=null&&h(t,["setup","generationConfig","speechConfig"],Ec(T));const _=u(n,["thinkingConfig"]);t!==void 0&&_!=null&&h(t,["setup","generationConfig","thinkingConfig"],_);const C=u(n,["enableAffectiveDialog"]);t!==void 0&&C!=null&&h(t,["setup","generationConfig","enableAffectiveDialog"],C);const A=u(n,["systemInstruction"]);t!==void 0&&A!=null&&h(t,["setup","systemInstruction"],JA(et(A)));const M=u(n,["tools"]);if(t!==void 0&&M!=null){let K=gi(M);Array.isArray(K)&&(K=K.map(re=>dw(hi(re)))),h(t,["setup","tools"],K)}const x=u(n,["sessionResumption"]);t!==void 0&&x!=null&&h(t,["setup","sessionResumption"],x);const U=u(n,["inputAudioTranscription"]);t!==void 0&&U!=null&&h(t,["setup","inputAudioTranscription"],U);const Y=u(n,["outputAudioTranscription"]);t!==void 0&&Y!=null&&h(t,["setup","outputAudioTranscription"],Y);const P=u(n,["realtimeInputConfig"]);t!==void 0&&P!=null&&h(t,["setup","realtimeInputConfig"],P);const J=u(n,["contextWindowCompression"]);t!==void 0&&J!=null&&h(t,["setup","contextWindowCompression"],J);const Q=u(n,["proactivity"]);t!==void 0&&Q!=null&&h(t,["setup","proactivity"],Q);const V=u(n,["explicitVadSignal"]);return t!==void 0&&V!=null&&h(t,["setup","explicitVadSignal"],V),i}function nw(n,t){const i={},r=u(t,["model"]);r!=null&&h(i,["setup","model"],Ae(n,r));const a=u(t,["config"]);return a!=null&&h(i,["config"],ew(a,i)),i}function ow(n,t){const i={},r=u(t,["model"]);r!=null&&h(i,["setup","model"],Ae(n,r));const a=u(t,["config"]);return a!=null&&h(i,["config"],tw(a,i)),i}function iw(n){const t={},i=u(n,["musicGenerationConfig"]);return i!=null&&h(t,["musicGenerationConfig"],i),t}function sw(n){const t={},i=u(n,["weightedPrompts"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(a=>a)),h(t,["weightedPrompts"],r)}return t}function rw(n){const t={},i=u(n,["media"]);if(i!=null){let f=sy(i);Array.isArray(f)&&(f=f.map(v=>Yr(v))),h(t,["mediaChunks"],f)}const r=u(n,["audio"]);r!=null&&h(t,["audio"],Yr(ay(r)));const a=u(n,["audioStreamEnd"]);a!=null&&h(t,["audioStreamEnd"],a);const c=u(n,["video"]);c!=null&&h(t,["video"],Yr(ry(c)));const g=u(n,["text"]);g!=null&&h(t,["text"],g);const m=u(n,["activityStart"]);m!=null&&h(t,["activityStart"],m);const y=u(n,["activityEnd"]);return y!=null&&h(t,["activityEnd"],y),t}function aw(n){const t={},i=u(n,["media"]);if(i!=null){let f=sy(i);Array.isArray(f)&&(f=f.map(v=>v)),h(t,["mediaChunks"],f)}const r=u(n,["audio"]);r!=null&&h(t,["audio"],ay(r));const a=u(n,["audioStreamEnd"]);a!=null&&h(t,["audioStreamEnd"],a);const c=u(n,["video"]);c!=null&&h(t,["video"],ry(c));const g=u(n,["text"]);g!=null&&h(t,["text"],g);const m=u(n,["activityStart"]);m!=null&&h(t,["activityStart"],m);const y=u(n,["activityEnd"]);return y!=null&&h(t,["activityEnd"],y),t}function lw(n){const t={},i=u(n,["setupComplete"]);i!=null&&h(t,["setupComplete"],i);const r=u(n,["serverContent"]);r!=null&&h(t,["serverContent"],r);const a=u(n,["toolCall"]);a!=null&&h(t,["toolCall"],a);const c=u(n,["toolCallCancellation"]);c!=null&&h(t,["toolCallCancellation"],c);const g=u(n,["usageMetadata"]);g!=null&&h(t,["usageMetadata"],fw(g));const m=u(n,["goAway"]);m!=null&&h(t,["goAway"],m);const y=u(n,["sessionResumptionUpdate"]);y!=null&&h(t,["sessionResumptionUpdate"],y);const f=u(n,["voiceActivityDetectionSignal"]);f!=null&&h(t,["voiceActivityDetectionSignal"],f);const v=u(n,["voiceActivity"]);return v!=null&&h(t,["voiceActivity"],mw(v)),t}function uw(n){const t={},i=u(n,["mediaResolution"]);i!=null&&h(t,["mediaResolution"],i);const r=u(n,["codeExecutionResult"]);r!=null&&h(t,["codeExecutionResult"],r);const a=u(n,["executableCode"]);a!=null&&h(t,["executableCode"],a);const c=u(n,["fileData"]);c!=null&&h(t,["fileData"],KA(c));const g=u(n,["functionCall"]);g!=null&&h(t,["functionCall"],XA(g));const m=u(n,["functionResponse"]);m!=null&&h(t,["functionResponse"],m);const y=u(n,["inlineData"]);y!=null&&h(t,["inlineData"],Yr(y));const f=u(n,["text"]);f!=null&&h(t,["text"],f);const v=u(n,["thought"]);v!=null&&h(t,["thought"],v);const T=u(n,["thoughtSignature"]);T!=null&&h(t,["thoughtSignature"],T);const _=u(n,["videoMetadata"]);_!=null&&h(t,["videoMetadata"],_);const C=u(n,["toolCall"]);C!=null&&h(t,["toolCall"],C);const A=u(n,["toolResponse"]);return A!=null&&h(t,["toolResponse"],A),t}function cw(n){const t={},i=u(n,["mediaResolution"]);i!=null&&h(t,["mediaResolution"],i);const r=u(n,["codeExecutionResult"]);r!=null&&h(t,["codeExecutionResult"],r);const a=u(n,["executableCode"]);a!=null&&h(t,["executableCode"],a);const c=u(n,["fileData"]);c!=null&&h(t,["fileData"],c);const g=u(n,["functionCall"]);g!=null&&h(t,["functionCall"],g);const m=u(n,["functionResponse"]);m!=null&&h(t,["functionResponse"],m);const y=u(n,["inlineData"]);y!=null&&h(t,["inlineData"],y);const f=u(n,["text"]);f!=null&&h(t,["text"],f);const v=u(n,["thought"]);v!=null&&h(t,["thought"],v);const T=u(n,["thoughtSignature"]);T!=null&&h(t,["thoughtSignature"],T);const _=u(n,["videoMetadata"]);if(_!=null&&h(t,["videoMetadata"],_),u(n,["toolCall"])!==void 0)throw new Error("toolCall parameter is not supported in Vertex AI.");if(u(n,["toolResponse"])!==void 0)throw new Error("toolResponse parameter is not supported in Vertex AI.");return t}function hw(n){const t={},i=u(n,["handle"]);if(i!=null&&h(t,["handle"],i),u(n,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return t}function gw(n){const t={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=u(n,["computerUse"]);i!=null&&h(t,["computerUse"],i);const r=u(n,["fileSearch"]);r!=null&&h(t,["fileSearch"],r);const a=u(n,["googleSearch"]);a!=null&&h(t,["googleSearch"],jA(a));const c=u(n,["googleMaps"]);c!=null&&h(t,["googleMaps"],$A(c));const g=u(n,["codeExecution"]);if(g!=null&&h(t,["codeExecution"],g),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const m=u(n,["functionDeclarations"]);if(m!=null){let T=m;Array.isArray(T)&&(T=T.map(_=>_)),h(t,["functionDeclarations"],T)}const y=u(n,["googleSearchRetrieval"]);if(y!=null&&h(t,["googleSearchRetrieval"],y),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const f=u(n,["urlContext"]);f!=null&&h(t,["urlContext"],f);const v=u(n,["mcpServers"]);if(v!=null){let T=v;Array.isArray(T)&&(T=T.map(_=>_)),h(t,["mcpServers"],T)}return t}function dw(n){const t={},i=u(n,["retrieval"]);i!=null&&h(t,["retrieval"],i);const r=u(n,["computerUse"]);if(r!=null&&h(t,["computerUse"],r),u(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const a=u(n,["googleSearch"]);a!=null&&h(t,["googleSearch"],a);const c=u(n,["googleMaps"]);c!=null&&h(t,["googleMaps"],c);const g=u(n,["codeExecution"]);g!=null&&h(t,["codeExecution"],g);const m=u(n,["enterpriseWebSearch"]);m!=null&&h(t,["enterpriseWebSearch"],m);const y=u(n,["functionDeclarations"]);if(y!=null){let _=y;Array.isArray(_)&&(_=_.map(C=>QA(C))),h(t,["functionDeclarations"],_)}const f=u(n,["googleSearchRetrieval"]);f!=null&&h(t,["googleSearchRetrieval"],f);const v=u(n,["parallelAiSearch"]);v!=null&&h(t,["parallelAiSearch"],v);const T=u(n,["urlContext"]);if(T!=null&&h(t,["urlContext"],T),u(n,["mcpServers"])!==void 0)throw new Error("mcpServers parameter is not supported in Vertex AI.");return t}function fw(n){const t={},i=u(n,["promptTokenCount"]);i!=null&&h(t,["promptTokenCount"],i);const r=u(n,["cachedContentTokenCount"]);r!=null&&h(t,["cachedContentTokenCount"],r);const a=u(n,["candidatesTokenCount"]);a!=null&&h(t,["responseTokenCount"],a);const c=u(n,["toolUsePromptTokenCount"]);c!=null&&h(t,["toolUsePromptTokenCount"],c);const g=u(n,["thoughtsTokenCount"]);g!=null&&h(t,["thoughtsTokenCount"],g);const m=u(n,["totalTokenCount"]);m!=null&&h(t,["totalTokenCount"],m);const y=u(n,["promptTokensDetails"]);if(y!=null){let C=y;Array.isArray(C)&&(C=C.map(A=>A)),h(t,["promptTokensDetails"],C)}const f=u(n,["cacheTokensDetails"]);if(f!=null){let C=f;Array.isArray(C)&&(C=C.map(A=>A)),h(t,["cacheTokensDetails"],C)}const v=u(n,["candidatesTokensDetails"]);if(v!=null){let C=v;Array.isArray(C)&&(C=C.map(A=>A)),h(t,["responseTokensDetails"],C)}const T=u(n,["toolUsePromptTokensDetails"]);if(T!=null){let C=T;Array.isArray(C)&&(C=C.map(A=>A)),h(t,["toolUsePromptTokensDetails"],C)}const _=u(n,["trafficType"]);return _!=null&&h(t,["trafficType"],_),t}function mw(n){const t={},i=u(n,["type"]);return i!=null&&h(t,["voiceActivityType"],i),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function pw(n,t){const i={},r=u(n,["apiKey"]);if(r!=null&&h(i,["apiKey"],r),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return i}function yw(n,t){const i={},r=u(n,["data"]);if(r!=null&&h(i,["data"],r),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const a=u(n,["mimeType"]);return a!=null&&h(i,["mimeType"],a),i}function vw(n,t){const i={},r=u(n,["content"]);r!=null&&h(i,["content"],r);const a=u(n,["citationMetadata"]);a!=null&&h(i,["citationMetadata"],Tw(a));const c=u(n,["tokenCount"]);c!=null&&h(i,["tokenCount"],c);const g=u(n,["finishReason"]);g!=null&&h(i,["finishReason"],g);const m=u(n,["groundingMetadata"]);m!=null&&h(i,["groundingMetadata"],m);const y=u(n,["avgLogprobs"]);y!=null&&h(i,["avgLogprobs"],y);const f=u(n,["index"]);f!=null&&h(i,["index"],f);const v=u(n,["logprobsResult"]);v!=null&&h(i,["logprobsResult"],v);const T=u(n,["safetyRatings"]);if(T!=null){let C=T;Array.isArray(C)&&(C=C.map(A=>A)),h(i,["safetyRatings"],C)}const _=u(n,["urlContextMetadata"]);return _!=null&&h(i,["urlContextMetadata"],_),i}function Tw(n,t){const i={},r=u(n,["citationSources"]);if(r!=null){let a=r;Array.isArray(a)&&(a=a.map(c=>c)),h(i,["citations"],a)}return i}function _w(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["contents"]);if(c!=null){let g=Mt(c);Array.isArray(g)&&(g=g.map(m=>fi(m))),h(r,["contents"],g)}return r}function Sw(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["tokensInfo"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(i,["tokensInfo"],c)}return i}function Ew(n,t){const i={},r=u(n,["values"]);r!=null&&h(i,["values"],r);const a=u(n,["statistics"]);return a!=null&&h(i,["statistics"],Cw(a)),i}function Cw(n,t){const i={},r=u(n,["truncated"]);r!=null&&h(i,["truncated"],r);const a=u(n,["token_count"]);return a!=null&&h(i,["tokenCount"],a),i}function vs(n,t){const i={},r=u(n,["parts"]);if(r!=null){let c=r;Array.isArray(c)&&(c=c.map(g=>Dx(g))),h(i,["parts"],c)}const a=u(n,["role"]);return a!=null&&h(i,["role"],a),i}function fi(n,t){const i={},r=u(n,["parts"]);if(r!=null){let c=r;Array.isArray(c)&&(c=c.map(g=>kx(g))),h(i,["parts"],c)}const a=u(n,["role"]);return a!=null&&h(i,["role"],a),i}function Aw(n,t){const i={},r=u(n,["controlType"]);r!=null&&h(i,["controlType"],r);const a=u(n,["enableControlImageComputation"]);return a!=null&&h(i,["computeControl"],a),i}function ww(n,t){const i={};if(u(n,["systemInstruction"])!==void 0)throw new Error("systemInstruction parameter is not supported in Gemini API.");if(u(n,["tools"])!==void 0)throw new Error("tools parameter is not supported in Gemini API.");if(u(n,["generationConfig"])!==void 0)throw new Error("generationConfig parameter is not supported in Gemini API.");return i}function xw(n,t,i){const r={},a=u(n,["systemInstruction"]);t!==void 0&&a!=null&&h(t,["systemInstruction"],fi(et(a)));const c=u(n,["tools"]);if(t!==void 0&&c!=null){let m=c;Array.isArray(m)&&(m=m.map(y=>Sy(y))),h(t,["tools"],m)}const g=u(n,["generationConfig"]);return t!==void 0&&g!=null&&h(t,["generationConfig"],yx(g)),r}function bw(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["contents"]);if(c!=null){let m=Mt(c);Array.isArray(m)&&(m=m.map(y=>vs(y))),h(r,["contents"],m)}const g=u(t,["config"]);return g!=null&&ww(g),r}function Rw(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["contents"]);if(c!=null){let m=Mt(c);Array.isArray(m)&&(m=m.map(y=>fi(y))),h(r,["contents"],m)}const g=u(t,["config"]);return g!=null&&xw(g,r),r}function Mw(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["totalTokens"]);a!=null&&h(i,["totalTokens"],a);const c=u(n,["cachedContentTokenCount"]);return c!=null&&h(i,["cachedContentTokenCount"],c),i}function Nw(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["totalTokens"]);return a!=null&&h(i,["totalTokens"],a),i}function Iw(n,t,i){const r={},a=u(t,["model"]);return a!=null&&h(r,["_url","name"],Ae(n,a)),r}function Dw(n,t,i){const r={},a=u(t,["model"]);return a!=null&&h(r,["_url","name"],Ae(n,a)),r}function kw(n,t){const i={},r=u(n,["sdkHttpResponse"]);return r!=null&&h(i,["sdkHttpResponse"],r),i}function Uw(n,t){const i={},r=u(n,["sdkHttpResponse"]);return r!=null&&h(i,["sdkHttpResponse"],r),i}function zw(n,t,i){const r={},a=u(n,["outputGcsUri"]);t!==void 0&&a!=null&&h(t,["parameters","storageUri"],a);const c=u(n,["negativePrompt"]);t!==void 0&&c!=null&&h(t,["parameters","negativePrompt"],c);const g=u(n,["numberOfImages"]);t!==void 0&&g!=null&&h(t,["parameters","sampleCount"],g);const m=u(n,["aspectRatio"]);t!==void 0&&m!=null&&h(t,["parameters","aspectRatio"],m);const y=u(n,["guidanceScale"]);t!==void 0&&y!=null&&h(t,["parameters","guidanceScale"],y);const f=u(n,["seed"]);t!==void 0&&f!=null&&h(t,["parameters","seed"],f);const v=u(n,["safetyFilterLevel"]);t!==void 0&&v!=null&&h(t,["parameters","safetySetting"],v);const T=u(n,["personGeneration"]);t!==void 0&&T!=null&&h(t,["parameters","personGeneration"],T);const _=u(n,["includeSafetyAttributes"]);t!==void 0&&_!=null&&h(t,["parameters","includeSafetyAttributes"],_);const C=u(n,["includeRaiReason"]);t!==void 0&&C!=null&&h(t,["parameters","includeRaiReason"],C);const A=u(n,["language"]);t!==void 0&&A!=null&&h(t,["parameters","language"],A);const M=u(n,["outputMimeType"]);t!==void 0&&M!=null&&h(t,["parameters","outputOptions","mimeType"],M);const x=u(n,["outputCompressionQuality"]);t!==void 0&&x!=null&&h(t,["parameters","outputOptions","compressionQuality"],x);const U=u(n,["addWatermark"]);t!==void 0&&U!=null&&h(t,["parameters","addWatermark"],U);const Y=u(n,["labels"]);t!==void 0&&Y!=null&&h(t,["labels"],Y);const P=u(n,["editMode"]);t!==void 0&&P!=null&&h(t,["parameters","editMode"],P);const J=u(n,["baseSteps"]);return t!==void 0&&J!=null&&h(t,["parameters","editConfig","baseSteps"],J),r}function Lw(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["prompt"]);c!=null&&h(r,["instances[0]","prompt"],c);const g=u(t,["referenceImages"]);if(g!=null){let y=g;Array.isArray(y)&&(y=y.map(f=>qx(f))),h(r,["instances[0]","referenceImages"],y)}const m=u(t,["config"]);return m!=null&&zw(m,r),r}function Hw(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["predictions"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>ia(g))),h(i,["generatedImages"],c)}return i}function Bw(n,t,i){const r={},a=u(n,["taskType"]);t!==void 0&&a!=null&&h(t,["requests[]","taskType"],a);const c=u(n,["title"]);t!==void 0&&c!=null&&h(t,["requests[]","title"],c);const g=u(n,["outputDimensionality"]);if(t!==void 0&&g!=null&&h(t,["requests[]","outputDimensionality"],g),u(n,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(u(n,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return r}function qw(n,t,i){const r={};let a=u(i,["embeddingApiType"]);if(a===void 0&&(a="PREDICT"),a==="PREDICT"){const f=u(n,["taskType"]);t!==void 0&&f!=null&&h(t,["instances[]","task_type"],f)}else if(a==="EMBED_CONTENT"){const f=u(n,["taskType"]);t!==void 0&&f!=null&&h(t,["taskType"],f)}let c=u(i,["embeddingApiType"]);if(c===void 0&&(c="PREDICT"),c==="PREDICT"){const f=u(n,["title"]);t!==void 0&&f!=null&&h(t,["instances[]","title"],f)}else if(c==="EMBED_CONTENT"){const f=u(n,["title"]);t!==void 0&&f!=null&&h(t,["title"],f)}let g=u(i,["embeddingApiType"]);if(g===void 0&&(g="PREDICT"),g==="PREDICT"){const f=u(n,["outputDimensionality"]);t!==void 0&&f!=null&&h(t,["parameters","outputDimensionality"],f)}else if(g==="EMBED_CONTENT"){const f=u(n,["outputDimensionality"]);t!==void 0&&f!=null&&h(t,["outputDimensionality"],f)}let m=u(i,["embeddingApiType"]);if(m===void 0&&(m="PREDICT"),m==="PREDICT"){const f=u(n,["mimeType"]);t!==void 0&&f!=null&&h(t,["instances[]","mimeType"],f)}let y=u(i,["embeddingApiType"]);if(y===void 0&&(y="PREDICT"),y==="PREDICT"){const f=u(n,["autoTruncate"]);t!==void 0&&f!=null&&h(t,["parameters","autoTruncate"],f)}else if(y==="EMBED_CONTENT"){const f=u(n,["autoTruncate"]);t!==void 0&&f!=null&&h(t,["autoTruncate"],f)}return r}function Pw(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["contents"]);if(c!=null){let f=Tc(n,c);Array.isArray(f)&&(f=f.map(v=>v)),h(r,["requests[]","content"],f)}const g=u(t,["content"]);g!=null&&vs(et(g));const m=u(t,["config"]);m!=null&&Bw(m,r);const y=u(t,["model"]);return y!==void 0&&h(r,["requests[]","model"],Ae(n,y)),r}function Gw(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));let c=u(i,["embeddingApiType"]);if(c===void 0&&(c="PREDICT"),c==="PREDICT"){const y=u(t,["contents"]);if(y!=null){let f=Tc(n,y);Array.isArray(f)&&(f=f.map(v=>v)),h(r,["instances[]","content"],f)}}let g=u(i,["embeddingApiType"]);if(g===void 0&&(g="PREDICT"),g==="EMBED_CONTENT"){const y=u(t,["content"]);y!=null&&h(r,["content"],fi(et(y)))}const m=u(t,["config"]);return m!=null&&qw(m,r,i),r}function Vw(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["embeddings"]);if(a!=null){let g=a;Array.isArray(g)&&(g=g.map(m=>m)),h(i,["embeddings"],g)}const c=u(n,["metadata"]);return c!=null&&h(i,["metadata"],c),i}function Ow(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["predictions[]","embeddings"]);if(a!=null){let g=a;Array.isArray(g)&&(g=g.map(m=>Ew(m))),h(i,["embeddings"],g)}const c=u(n,["metadata"]);if(c!=null&&h(i,["metadata"],c),t&&u(t,["embeddingApiType"])==="EMBED_CONTENT"){const g=u(n,["embedding"]),m=u(n,["usageMetadata"]),y=u(n,["truncated"]);if(g){const f={};m&&m.promptTokenCount&&(f.tokenCount=m.promptTokenCount),y&&(f.truncated=y),g.statistics=f,h(i,["embeddings"],[g])}}return i}function Fw(n,t){const i={},r=u(n,["endpoint"]);r!=null&&h(i,["name"],r);const a=u(n,["deployedModelId"]);return a!=null&&h(i,["deployedModelId"],a),i}function Yw(n,t){const i={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const r=u(n,["fileUri"]);r!=null&&h(i,["fileUri"],r);const a=u(n,["mimeType"]);return a!=null&&h(i,["mimeType"],a),i}function Ww(n,t){const i={},r=u(n,["id"]);r!=null&&h(i,["id"],r);const a=u(n,["args"]);a!=null&&h(i,["args"],a);const c=u(n,["name"]);if(c!=null&&h(i,["name"],c),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return i}function Jw(n,t){const i={},r=u(n,["allowedFunctionNames"]);r!=null&&h(i,["allowedFunctionNames"],r);const a=u(n,["mode"]);if(a!=null&&h(i,["mode"],a),u(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return i}function Kw(n,t){const i={},r=u(n,["description"]);r!=null&&h(i,["description"],r);const a=u(n,["name"]);a!=null&&h(i,["name"],a);const c=u(n,["parameters"]);c!=null&&h(i,["parameters"],c);const g=u(n,["parametersJsonSchema"]);g!=null&&h(i,["parametersJsonSchema"],g);const m=u(n,["response"]);m!=null&&h(i,["response"],m);const y=u(n,["responseJsonSchema"]);if(y!=null&&h(i,["responseJsonSchema"],y),u(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return i}function Xw(n,t,i,r){const a={},c=u(t,["systemInstruction"]);i!==void 0&&c!=null&&h(i,["systemInstruction"],vs(et(c)));const g=u(t,["temperature"]);g!=null&&h(a,["temperature"],g);const m=u(t,["topP"]);m!=null&&h(a,["topP"],m);const y=u(t,["topK"]);y!=null&&h(a,["topK"],y);const f=u(t,["candidateCount"]);f!=null&&h(a,["candidateCount"],f);const v=u(t,["maxOutputTokens"]);v!=null&&h(a,["maxOutputTokens"],v);const T=u(t,["stopSequences"]);T!=null&&h(a,["stopSequences"],T);const _=u(t,["responseLogprobs"]);_!=null&&h(a,["responseLogprobs"],_);const C=u(t,["logprobs"]);C!=null&&h(a,["logprobs"],C);const A=u(t,["presencePenalty"]);A!=null&&h(a,["presencePenalty"],A);const M=u(t,["frequencyPenalty"]);M!=null&&h(a,["frequencyPenalty"],M);const x=u(t,["seed"]);x!=null&&h(a,["seed"],x);const U=u(t,["responseMimeType"]);U!=null&&h(a,["responseMimeType"],U);const Y=u(t,["responseSchema"]);Y!=null&&h(a,["responseSchema"],_c(Y));const P=u(t,["responseJsonSchema"]);if(P!=null&&h(a,["responseJsonSchema"],P),u(t,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(u(t,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const J=u(t,["safetySettings"]);if(i!==void 0&&J!=null){let _e=J;Array.isArray(_e)&&(_e=_e.map(Re=>Px(Re))),h(i,["safetySettings"],_e)}const Q=u(t,["tools"]);if(i!==void 0&&Q!=null){let _e=gi(Q);Array.isArray(_e)&&(_e=_e.map(Re=>Kx(hi(Re)))),h(i,["tools"],_e)}const V=u(t,["toolConfig"]);if(i!==void 0&&V!=null&&h(i,["toolConfig"],Wx(V)),u(t,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const K=u(t,["cachedContent"]);i!==void 0&&K!=null&&h(i,["cachedContent"],An(n,K));const re=u(t,["responseModalities"]);re!=null&&h(a,["responseModalities"],re);const j=u(t,["mediaResolution"]);j!=null&&h(a,["mediaResolution"],j);const ue=u(t,["speechConfig"]);if(ue!=null&&h(a,["speechConfig"],Sc(ue)),u(t,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const Te=u(t,["thinkingConfig"]);Te!=null&&h(a,["thinkingConfig"],Te);const be=u(t,["imageConfig"]);be!=null&&h(a,["imageConfig"],Ex(be));const Ne=u(t,["enableEnhancedCivicAnswers"]);if(Ne!=null&&h(a,["enableEnhancedCivicAnswers"],Ne),u(t,["modelArmorConfig"])!==void 0)throw new Error("modelArmorConfig parameter is not supported in Gemini API.");return a}function Qw(n,t,i,r){const a={},c=u(t,["systemInstruction"]);i!==void 0&&c!=null&&h(i,["systemInstruction"],fi(et(c)));const g=u(t,["temperature"]);g!=null&&h(a,["temperature"],g);const m=u(t,["topP"]);m!=null&&h(a,["topP"],m);const y=u(t,["topK"]);y!=null&&h(a,["topK"],y);const f=u(t,["candidateCount"]);f!=null&&h(a,["candidateCount"],f);const v=u(t,["maxOutputTokens"]);v!=null&&h(a,["maxOutputTokens"],v);const T=u(t,["stopSequences"]);T!=null&&h(a,["stopSequences"],T);const _=u(t,["responseLogprobs"]);_!=null&&h(a,["responseLogprobs"],_);const C=u(t,["logprobs"]);C!=null&&h(a,["logprobs"],C);const A=u(t,["presencePenalty"]);A!=null&&h(a,["presencePenalty"],A);const M=u(t,["frequencyPenalty"]);M!=null&&h(a,["frequencyPenalty"],M);const x=u(t,["seed"]);x!=null&&h(a,["seed"],x);const U=u(t,["responseMimeType"]);U!=null&&h(a,["responseMimeType"],U);const Y=u(t,["responseSchema"]);Y!=null&&h(a,["responseSchema"],_c(Y));const P=u(t,["responseJsonSchema"]);P!=null&&h(a,["responseJsonSchema"],P);const J=u(t,["routingConfig"]);J!=null&&h(a,["routingConfig"],J);const Q=u(t,["modelSelectionConfig"]);Q!=null&&h(a,["modelConfig"],Q);const V=u(t,["safetySettings"]);if(i!==void 0&&V!=null){let oe=V;Array.isArray(oe)&&(oe=oe.map(Se=>Se)),h(i,["safetySettings"],oe)}const K=u(t,["tools"]);if(i!==void 0&&K!=null){let oe=gi(K);Array.isArray(oe)&&(oe=oe.map(Se=>Sy(hi(Se)))),h(i,["tools"],oe)}const re=u(t,["toolConfig"]);i!==void 0&&re!=null&&h(i,["toolConfig"],Jx(re));const j=u(t,["labels"]);i!==void 0&&j!=null&&h(i,["labels"],j);const ue=u(t,["cachedContent"]);i!==void 0&&ue!=null&&h(i,["cachedContent"],An(n,ue));const Te=u(t,["responseModalities"]);Te!=null&&h(a,["responseModalities"],Te);const be=u(t,["mediaResolution"]);be!=null&&h(a,["mediaResolution"],be);const Ne=u(t,["speechConfig"]);Ne!=null&&h(a,["speechConfig"],Sc(Ne));const _e=u(t,["audioTimestamp"]);_e!=null&&h(a,["audioTimestamp"],_e);const Re=u(t,["thinkingConfig"]);Re!=null&&h(a,["thinkingConfig"],Re);const H=u(t,["imageConfig"]);if(H!=null&&h(a,["imageConfig"],Cx(H)),u(t,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");const X=u(t,["modelArmorConfig"]);return i!==void 0&&X!=null&&h(i,["modelArmorConfig"],X),a}function vp(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["contents"]);if(c!=null){let m=Mt(c);Array.isArray(m)&&(m=m.map(y=>vs(y))),h(r,["contents"],m)}const g=u(t,["config"]);return g!=null&&h(r,["generationConfig"],Xw(n,g,r)),r}function Tp(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["contents"]);if(c!=null){let m=Mt(c);Array.isArray(m)&&(m=m.map(y=>fi(y))),h(r,["contents"],m)}const g=u(t,["config"]);return g!=null&&h(r,["generationConfig"],Qw(n,g,r)),r}function _p(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["candidates"]);if(a!=null){let f=a;Array.isArray(f)&&(f=f.map(v=>vw(v))),h(i,["candidates"],f)}const c=u(n,["modelVersion"]);c!=null&&h(i,["modelVersion"],c);const g=u(n,["promptFeedback"]);g!=null&&h(i,["promptFeedback"],g);const m=u(n,["responseId"]);m!=null&&h(i,["responseId"],m);const y=u(n,["usageMetadata"]);return y!=null&&h(i,["usageMetadata"],y),i}function Sp(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["candidates"]);if(a!=null){let v=a;Array.isArray(v)&&(v=v.map(T=>T)),h(i,["candidates"],v)}const c=u(n,["createTime"]);c!=null&&h(i,["createTime"],c);const g=u(n,["modelVersion"]);g!=null&&h(i,["modelVersion"],g);const m=u(n,["promptFeedback"]);m!=null&&h(i,["promptFeedback"],m);const y=u(n,["responseId"]);y!=null&&h(i,["responseId"],y);const f=u(n,["usageMetadata"]);return f!=null&&h(i,["usageMetadata"],f),i}function Zw(n,t,i){const r={};if(u(n,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(u(n,["negativePrompt"])!==void 0)throw new Error("negativePrompt parameter is not supported in Gemini API.");const a=u(n,["numberOfImages"]);t!==void 0&&a!=null&&h(t,["parameters","sampleCount"],a);const c=u(n,["aspectRatio"]);t!==void 0&&c!=null&&h(t,["parameters","aspectRatio"],c);const g=u(n,["guidanceScale"]);if(t!==void 0&&g!=null&&h(t,["parameters","guidanceScale"],g),u(n,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const m=u(n,["safetyFilterLevel"]);t!==void 0&&m!=null&&h(t,["parameters","safetySetting"],m);const y=u(n,["personGeneration"]);t!==void 0&&y!=null&&h(t,["parameters","personGeneration"],y);const f=u(n,["includeSafetyAttributes"]);t!==void 0&&f!=null&&h(t,["parameters","includeSafetyAttributes"],f);const v=u(n,["includeRaiReason"]);t!==void 0&&v!=null&&h(t,["parameters","includeRaiReason"],v);const T=u(n,["language"]);t!==void 0&&T!=null&&h(t,["parameters","language"],T);const _=u(n,["outputMimeType"]);t!==void 0&&_!=null&&h(t,["parameters","outputOptions","mimeType"],_);const C=u(n,["outputCompressionQuality"]);if(t!==void 0&&C!=null&&h(t,["parameters","outputOptions","compressionQuality"],C),u(n,["addWatermark"])!==void 0)throw new Error("addWatermark parameter is not supported in Gemini API.");if(u(n,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const A=u(n,["imageSize"]);if(t!==void 0&&A!=null&&h(t,["parameters","sampleImageSize"],A),u(n,["enhancePrompt"])!==void 0)throw new Error("enhancePrompt parameter is not supported in Gemini API.");return r}function $w(n,t,i){const r={},a=u(n,["outputGcsUri"]);t!==void 0&&a!=null&&h(t,["parameters","storageUri"],a);const c=u(n,["negativePrompt"]);t!==void 0&&c!=null&&h(t,["parameters","negativePrompt"],c);const g=u(n,["numberOfImages"]);t!==void 0&&g!=null&&h(t,["parameters","sampleCount"],g);const m=u(n,["aspectRatio"]);t!==void 0&&m!=null&&h(t,["parameters","aspectRatio"],m);const y=u(n,["guidanceScale"]);t!==void 0&&y!=null&&h(t,["parameters","guidanceScale"],y);const f=u(n,["seed"]);t!==void 0&&f!=null&&h(t,["parameters","seed"],f);const v=u(n,["safetyFilterLevel"]);t!==void 0&&v!=null&&h(t,["parameters","safetySetting"],v);const T=u(n,["personGeneration"]);t!==void 0&&T!=null&&h(t,["parameters","personGeneration"],T);const _=u(n,["includeSafetyAttributes"]);t!==void 0&&_!=null&&h(t,["parameters","includeSafetyAttributes"],_);const C=u(n,["includeRaiReason"]);t!==void 0&&C!=null&&h(t,["parameters","includeRaiReason"],C);const A=u(n,["language"]);t!==void 0&&A!=null&&h(t,["parameters","language"],A);const M=u(n,["outputMimeType"]);t!==void 0&&M!=null&&h(t,["parameters","outputOptions","mimeType"],M);const x=u(n,["outputCompressionQuality"]);t!==void 0&&x!=null&&h(t,["parameters","outputOptions","compressionQuality"],x);const U=u(n,["addWatermark"]);t!==void 0&&U!=null&&h(t,["parameters","addWatermark"],U);const Y=u(n,["labels"]);t!==void 0&&Y!=null&&h(t,["labels"],Y);const P=u(n,["imageSize"]);t!==void 0&&P!=null&&h(t,["parameters","sampleImageSize"],P);const J=u(n,["enhancePrompt"]);return t!==void 0&&J!=null&&h(t,["parameters","enhancePrompt"],J),r}function jw(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["prompt"]);c!=null&&h(r,["instances[0]","prompt"],c);const g=u(t,["config"]);return g!=null&&Zw(g,r),r}function ex(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["prompt"]);c!=null&&h(r,["instances[0]","prompt"],c);const g=u(t,["config"]);return g!=null&&$w(g,r),r}function tx(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["predictions"]);if(a!=null){let g=a;Array.isArray(g)&&(g=g.map(m=>dx(m))),h(i,["generatedImages"],g)}const c=u(n,["positivePromptSafetyAttributes"]);return c!=null&&h(i,["positivePromptSafetyAttributes"],Ty(c)),i}function nx(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["predictions"]);if(a!=null){let g=a;Array.isArray(g)&&(g=g.map(m=>ia(m))),h(i,["generatedImages"],g)}const c=u(n,["positivePromptSafetyAttributes"]);return c!=null&&h(i,["positivePromptSafetyAttributes"],_y(c)),i}function ox(n,t,i){const r={},a=u(n,["numberOfVideos"]);if(t!==void 0&&a!=null&&h(t,["parameters","sampleCount"],a),u(n,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(u(n,["fps"])!==void 0)throw new Error("fps parameter is not supported in Gemini API.");const c=u(n,["durationSeconds"]);if(t!==void 0&&c!=null&&h(t,["parameters","durationSeconds"],c),u(n,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const g=u(n,["aspectRatio"]);t!==void 0&&g!=null&&h(t,["parameters","aspectRatio"],g);const m=u(n,["resolution"]);t!==void 0&&m!=null&&h(t,["parameters","resolution"],m);const y=u(n,["personGeneration"]);if(t!==void 0&&y!=null&&h(t,["parameters","personGeneration"],y),u(n,["pubsubTopic"])!==void 0)throw new Error("pubsubTopic parameter is not supported in Gemini API.");const f=u(n,["negativePrompt"]);t!==void 0&&f!=null&&h(t,["parameters","negativePrompt"],f);const v=u(n,["enhancePrompt"]);if(t!==void 0&&v!=null&&h(t,["parameters","enhancePrompt"],v),u(n,["generateAudio"])!==void 0)throw new Error("generateAudio parameter is not supported in Gemini API.");const T=u(n,["lastFrame"]);t!==void 0&&T!=null&&h(t,["instances[0]","lastFrame"],sa(T));const _=u(n,["referenceImages"]);if(t!==void 0&&_!=null){let C=_;Array.isArray(C)&&(C=C.map(A=>ab(A))),h(t,["instances[0]","referenceImages"],C)}if(u(n,["mask"])!==void 0)throw new Error("mask parameter is not supported in Gemini API.");if(u(n,["compressionQuality"])!==void 0)throw new Error("compressionQuality parameter is not supported in Gemini API.");return r}function ix(n,t,i){const r={},a=u(n,["numberOfVideos"]);t!==void 0&&a!=null&&h(t,["parameters","sampleCount"],a);const c=u(n,["outputGcsUri"]);t!==void 0&&c!=null&&h(t,["parameters","storageUri"],c);const g=u(n,["fps"]);t!==void 0&&g!=null&&h(t,["parameters","fps"],g);const m=u(n,["durationSeconds"]);t!==void 0&&m!=null&&h(t,["parameters","durationSeconds"],m);const y=u(n,["seed"]);t!==void 0&&y!=null&&h(t,["parameters","seed"],y);const f=u(n,["aspectRatio"]);t!==void 0&&f!=null&&h(t,["parameters","aspectRatio"],f);const v=u(n,["resolution"]);t!==void 0&&v!=null&&h(t,["parameters","resolution"],v);const T=u(n,["personGeneration"]);t!==void 0&&T!=null&&h(t,["parameters","personGeneration"],T);const _=u(n,["pubsubTopic"]);t!==void 0&&_!=null&&h(t,["parameters","pubsubTopic"],_);const C=u(n,["negativePrompt"]);t!==void 0&&C!=null&&h(t,["parameters","negativePrompt"],C);const A=u(n,["enhancePrompt"]);t!==void 0&&A!=null&&h(t,["parameters","enhancePrompt"],A);const M=u(n,["generateAudio"]);t!==void 0&&M!=null&&h(t,["parameters","generateAudio"],M);const x=u(n,["lastFrame"]);t!==void 0&&x!=null&&h(t,["instances[0]","lastFrame"],Kt(x));const U=u(n,["referenceImages"]);if(t!==void 0&&U!=null){let J=U;Array.isArray(J)&&(J=J.map(Q=>lb(Q))),h(t,["instances[0]","referenceImages"],J)}const Y=u(n,["mask"]);t!==void 0&&Y!=null&&h(t,["instances[0]","mask"],rb(Y));const P=u(n,["compressionQuality"]);return t!==void 0&&P!=null&&h(t,["parameters","compressionQuality"],P),r}function sx(n,t){const i={},r=u(n,["name"]);r!=null&&h(i,["name"],r);const a=u(n,["metadata"]);a!=null&&h(i,["metadata"],a);const c=u(n,["done"]);c!=null&&h(i,["done"],c);const g=u(n,["error"]);g!=null&&h(i,["error"],g);const m=u(n,["response","generateVideoResponse"]);return m!=null&&h(i,["response"],ux(m)),i}function rx(n,t){const i={},r=u(n,["name"]);r!=null&&h(i,["name"],r);const a=u(n,["metadata"]);a!=null&&h(i,["metadata"],a);const c=u(n,["done"]);c!=null&&h(i,["done"],c);const g=u(n,["error"]);g!=null&&h(i,["error"],g);const m=u(n,["response"]);return m!=null&&h(i,["response"],cx(m)),i}function ax(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["prompt"]);c!=null&&h(r,["instances[0]","prompt"],c);const g=u(t,["image"]);g!=null&&h(r,["instances[0]","image"],sa(g));const m=u(t,["video"]);m!=null&&h(r,["instances[0]","video"],Ey(m));const y=u(t,["source"]);y!=null&&hx(y,r);const f=u(t,["config"]);return f!=null&&ox(f,r),r}function lx(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["prompt"]);c!=null&&h(r,["instances[0]","prompt"],c);const g=u(t,["image"]);g!=null&&h(r,["instances[0]","image"],Kt(g));const m=u(t,["video"]);m!=null&&h(r,["instances[0]","video"],Cy(m));const y=u(t,["source"]);y!=null&&gx(y,r);const f=u(t,["config"]);return f!=null&&ix(f,r),r}function ux(n,t){const i={},r=u(n,["generatedSamples"]);if(r!=null){let g=r;Array.isArray(g)&&(g=g.map(m=>mx(m))),h(i,["generatedVideos"],g)}const a=u(n,["raiMediaFilteredCount"]);a!=null&&h(i,["raiMediaFilteredCount"],a);const c=u(n,["raiMediaFilteredReasons"]);return c!=null&&h(i,["raiMediaFilteredReasons"],c),i}function cx(n,t){const i={},r=u(n,["videos"]);if(r!=null){let g=r;Array.isArray(g)&&(g=g.map(m=>px(m))),h(i,["generatedVideos"],g)}const a=u(n,["raiMediaFilteredCount"]);a!=null&&h(i,["raiMediaFilteredCount"],a);const c=u(n,["raiMediaFilteredReasons"]);return c!=null&&h(i,["raiMediaFilteredReasons"],c),i}function hx(n,t,i){const r={},a=u(n,["prompt"]);t!==void 0&&a!=null&&h(t,["instances[0]","prompt"],a);const c=u(n,["image"]);t!==void 0&&c!=null&&h(t,["instances[0]","image"],sa(c));const g=u(n,["video"]);return t!==void 0&&g!=null&&h(t,["instances[0]","video"],Ey(g)),r}function gx(n,t,i){const r={},a=u(n,["prompt"]);t!==void 0&&a!=null&&h(t,["instances[0]","prompt"],a);const c=u(n,["image"]);t!==void 0&&c!=null&&h(t,["instances[0]","image"],Kt(c));const g=u(n,["video"]);return t!==void 0&&g!=null&&h(t,["instances[0]","video"],Cy(g)),r}function dx(n,t){const i={},r=u(n,["_self"]);r!=null&&h(i,["image"],Ax(r));const a=u(n,["raiFilteredReason"]);a!=null&&h(i,["raiFilteredReason"],a);const c=u(n,["_self"]);return c!=null&&h(i,["safetyAttributes"],Ty(c)),i}function ia(n,t){const i={},r=u(n,["_self"]);r!=null&&h(i,["image"],vy(r));const a=u(n,["raiFilteredReason"]);a!=null&&h(i,["raiFilteredReason"],a);const c=u(n,["_self"]);c!=null&&h(i,["safetyAttributes"],_y(c));const g=u(n,["prompt"]);return g!=null&&h(i,["enhancedPrompt"],g),i}function fx(n,t){const i={},r=u(n,["_self"]);r!=null&&h(i,["mask"],vy(r));const a=u(n,["labels"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(i,["labels"],c)}return i}function mx(n,t){const i={},r=u(n,["video"]);return r!=null&&h(i,["video"],ib(r)),i}function px(n,t){const i={},r=u(n,["_self"]);return r!=null&&h(i,["video"],sb(r)),i}function yx(n,t){const i={},r=u(n,["modelSelectionConfig"]);r!=null&&h(i,["modelConfig"],r);const a=u(n,["responseJsonSchema"]);a!=null&&h(i,["responseJsonSchema"],a);const c=u(n,["audioTimestamp"]);c!=null&&h(i,["audioTimestamp"],c);const g=u(n,["candidateCount"]);g!=null&&h(i,["candidateCount"],g);const m=u(n,["enableAffectiveDialog"]);m!=null&&h(i,["enableAffectiveDialog"],m);const y=u(n,["frequencyPenalty"]);y!=null&&h(i,["frequencyPenalty"],y);const f=u(n,["logprobs"]);f!=null&&h(i,["logprobs"],f);const v=u(n,["maxOutputTokens"]);v!=null&&h(i,["maxOutputTokens"],v);const T=u(n,["mediaResolution"]);T!=null&&h(i,["mediaResolution"],T);const _=u(n,["presencePenalty"]);_!=null&&h(i,["presencePenalty"],_);const C=u(n,["responseLogprobs"]);C!=null&&h(i,["responseLogprobs"],C);const A=u(n,["responseMimeType"]);A!=null&&h(i,["responseMimeType"],A);const M=u(n,["responseModalities"]);M!=null&&h(i,["responseModalities"],M);const x=u(n,["responseSchema"]);x!=null&&h(i,["responseSchema"],x);const U=u(n,["routingConfig"]);U!=null&&h(i,["routingConfig"],U);const Y=u(n,["seed"]);Y!=null&&h(i,["seed"],Y);const P=u(n,["speechConfig"]);P!=null&&h(i,["speechConfig"],P);const J=u(n,["stopSequences"]);J!=null&&h(i,["stopSequences"],J);const Q=u(n,["temperature"]);Q!=null&&h(i,["temperature"],Q);const V=u(n,["thinkingConfig"]);V!=null&&h(i,["thinkingConfig"],V);const K=u(n,["topK"]);K!=null&&h(i,["topK"],K);const re=u(n,["topP"]);if(re!=null&&h(i,["topP"],re),u(n,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return i}function vx(n,t,i){const r={},a=u(t,["model"]);return a!=null&&h(r,["_url","name"],Ae(n,a)),r}function Tx(n,t,i){const r={},a=u(t,["model"]);return a!=null&&h(r,["_url","name"],Ae(n,a)),r}function _x(n,t){const i={},r=u(n,["authConfig"]);r!=null&&h(i,["authConfig"],pw(r));const a=u(n,["enableWidget"]);return a!=null&&h(i,["enableWidget"],a),i}function Sx(n,t){const i={},r=u(n,["searchTypes"]);if(r!=null&&h(i,["searchTypes"],r),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const a=u(n,["timeRangeFilter"]);return a!=null&&h(i,["timeRangeFilter"],a),i}function Ex(n,t){const i={},r=u(n,["aspectRatio"]);r!=null&&h(i,["aspectRatio"],r);const a=u(n,["imageSize"]);if(a!=null&&h(i,["imageSize"],a),u(n,["personGeneration"])!==void 0)throw new Error("personGeneration parameter is not supported in Gemini API.");if(u(n,["prominentPeople"])!==void 0)throw new Error("prominentPeople parameter is not supported in Gemini API.");if(u(n,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(u(n,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");if(u(n,["imageOutputOptions"])!==void 0)throw new Error("imageOutputOptions parameter is not supported in Gemini API.");return i}function Cx(n,t){const i={},r=u(n,["aspectRatio"]);r!=null&&h(i,["aspectRatio"],r);const a=u(n,["imageSize"]);a!=null&&h(i,["imageSize"],a);const c=u(n,["personGeneration"]);c!=null&&h(i,["personGeneration"],c);const g=u(n,["prominentPeople"]);g!=null&&h(i,["prominentPeople"],g);const m=u(n,["outputMimeType"]);m!=null&&h(i,["imageOutputOptions","mimeType"],m);const y=u(n,["outputCompressionQuality"]);y!=null&&h(i,["imageOutputOptions","compressionQuality"],y);const f=u(n,["imageOutputOptions"]);return f!=null&&h(i,["imageOutputOptions"],f),i}function Ax(n,t){const i={},r=u(n,["bytesBase64Encoded"]);r!=null&&h(i,["imageBytes"],$n(r));const a=u(n,["mimeType"]);return a!=null&&h(i,["mimeType"],a),i}function vy(n,t){const i={},r=u(n,["gcsUri"]);r!=null&&h(i,["gcsUri"],r);const a=u(n,["bytesBase64Encoded"]);a!=null&&h(i,["imageBytes"],$n(a));const c=u(n,["mimeType"]);return c!=null&&h(i,["mimeType"],c),i}function sa(n,t){const i={};if(u(n,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");const r=u(n,["imageBytes"]);r!=null&&h(i,["bytesBase64Encoded"],$n(r));const a=u(n,["mimeType"]);return a!=null&&h(i,["mimeType"],a),i}function Kt(n,t){const i={},r=u(n,["gcsUri"]);r!=null&&h(i,["gcsUri"],r);const a=u(n,["imageBytes"]);a!=null&&h(i,["bytesBase64Encoded"],$n(a));const c=u(n,["mimeType"]);return c!=null&&h(i,["mimeType"],c),i}function wx(n,t,i,r){const a={},c=u(t,["pageSize"]);i!==void 0&&c!=null&&h(i,["_query","pageSize"],c);const g=u(t,["pageToken"]);i!==void 0&&g!=null&&h(i,["_query","pageToken"],g);const m=u(t,["filter"]);i!==void 0&&m!=null&&h(i,["_query","filter"],m);const y=u(t,["queryBase"]);return i!==void 0&&y!=null&&h(i,["_url","models_url"],hy(n,y)),a}function xx(n,t,i,r){const a={},c=u(t,["pageSize"]);i!==void 0&&c!=null&&h(i,["_query","pageSize"],c);const g=u(t,["pageToken"]);i!==void 0&&g!=null&&h(i,["_query","pageToken"],g);const m=u(t,["filter"]);i!==void 0&&m!=null&&h(i,["_query","filter"],m);const y=u(t,["queryBase"]);return i!==void 0&&y!=null&&h(i,["_url","models_url"],hy(n,y)),a}function bx(n,t,i){const r={},a=u(t,["config"]);return a!=null&&wx(n,a,r),r}function Rx(n,t,i){const r={},a=u(t,["config"]);return a!=null&&xx(n,a,r),r}function Mx(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["nextPageToken"]);a!=null&&h(i,["nextPageToken"],a);const c=u(n,["_self"]);if(c!=null){let g=gy(c);Array.isArray(g)&&(g=g.map(m=>$u(m))),h(i,["models"],g)}return i}function Nx(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["nextPageToken"]);a!=null&&h(i,["nextPageToken"],a);const c=u(n,["_self"]);if(c!=null){let g=gy(c);Array.isArray(g)&&(g=g.map(m=>ju(m))),h(i,["models"],g)}return i}function Ix(n,t){const i={},r=u(n,["maskMode"]);r!=null&&h(i,["maskMode"],r);const a=u(n,["segmentationClasses"]);a!=null&&h(i,["maskClasses"],a);const c=u(n,["maskDilation"]);return c!=null&&h(i,["dilation"],c),i}function $u(n,t){const i={},r=u(n,["name"]);r!=null&&h(i,["name"],r);const a=u(n,["displayName"]);a!=null&&h(i,["displayName"],a);const c=u(n,["description"]);c!=null&&h(i,["description"],c);const g=u(n,["version"]);g!=null&&h(i,["version"],g);const m=u(n,["_self"]);m!=null&&h(i,["tunedModelInfo"],Xx(m));const y=u(n,["inputTokenLimit"]);y!=null&&h(i,["inputTokenLimit"],y);const f=u(n,["outputTokenLimit"]);f!=null&&h(i,["outputTokenLimit"],f);const v=u(n,["supportedGenerationMethods"]);v!=null&&h(i,["supportedActions"],v);const T=u(n,["temperature"]);T!=null&&h(i,["temperature"],T);const _=u(n,["maxTemperature"]);_!=null&&h(i,["maxTemperature"],_);const C=u(n,["topP"]);C!=null&&h(i,["topP"],C);const A=u(n,["topK"]);A!=null&&h(i,["topK"],A);const M=u(n,["thinking"]);return M!=null&&h(i,["thinking"],M),i}function ju(n,t){const i={},r=u(n,["name"]);r!=null&&h(i,["name"],r);const a=u(n,["displayName"]);a!=null&&h(i,["displayName"],a);const c=u(n,["description"]);c!=null&&h(i,["description"],c);const g=u(n,["versionId"]);g!=null&&h(i,["version"],g);const m=u(n,["deployedModels"]);if(m!=null){let _=m;Array.isArray(_)&&(_=_.map(C=>Fw(C))),h(i,["endpoints"],_)}const y=u(n,["labels"]);y!=null&&h(i,["labels"],y);const f=u(n,["_self"]);f!=null&&h(i,["tunedModelInfo"],Qx(f));const v=u(n,["defaultCheckpointId"]);v!=null&&h(i,["defaultCheckpointId"],v);const T=u(n,["checkpoints"]);if(T!=null){let _=T;Array.isArray(_)&&(_=_.map(C=>C)),h(i,["checkpoints"],_)}return i}function Dx(n,t){const i={},r=u(n,["mediaResolution"]);r!=null&&h(i,["mediaResolution"],r);const a=u(n,["codeExecutionResult"]);a!=null&&h(i,["codeExecutionResult"],a);const c=u(n,["executableCode"]);c!=null&&h(i,["executableCode"],c);const g=u(n,["fileData"]);g!=null&&h(i,["fileData"],Yw(g));const m=u(n,["functionCall"]);m!=null&&h(i,["functionCall"],Ww(m));const y=u(n,["functionResponse"]);y!=null&&h(i,["functionResponse"],y);const f=u(n,["inlineData"]);f!=null&&h(i,["inlineData"],yw(f));const v=u(n,["text"]);v!=null&&h(i,["text"],v);const T=u(n,["thought"]);T!=null&&h(i,["thought"],T);const _=u(n,["thoughtSignature"]);_!=null&&h(i,["thoughtSignature"],_);const C=u(n,["videoMetadata"]);C!=null&&h(i,["videoMetadata"],C);const A=u(n,["toolCall"]);A!=null&&h(i,["toolCall"],A);const M=u(n,["toolResponse"]);return M!=null&&h(i,["toolResponse"],M),i}function kx(n,t){const i={},r=u(n,["mediaResolution"]);r!=null&&h(i,["mediaResolution"],r);const a=u(n,["codeExecutionResult"]);a!=null&&h(i,["codeExecutionResult"],a);const c=u(n,["executableCode"]);c!=null&&h(i,["executableCode"],c);const g=u(n,["fileData"]);g!=null&&h(i,["fileData"],g);const m=u(n,["functionCall"]);m!=null&&h(i,["functionCall"],m);const y=u(n,["functionResponse"]);y!=null&&h(i,["functionResponse"],y);const f=u(n,["inlineData"]);f!=null&&h(i,["inlineData"],f);const v=u(n,["text"]);v!=null&&h(i,["text"],v);const T=u(n,["thought"]);T!=null&&h(i,["thought"],T);const _=u(n,["thoughtSignature"]);_!=null&&h(i,["thoughtSignature"],_);const C=u(n,["videoMetadata"]);if(C!=null&&h(i,["videoMetadata"],C),u(n,["toolCall"])!==void 0)throw new Error("toolCall parameter is not supported in Vertex AI.");if(u(n,["toolResponse"])!==void 0)throw new Error("toolResponse parameter is not supported in Vertex AI.");return i}function Ux(n,t){const i={},r=u(n,["productImage"]);return r!=null&&h(i,["image"],Kt(r)),i}function zx(n,t,i){const r={},a=u(n,["numberOfImages"]);t!==void 0&&a!=null&&h(t,["parameters","sampleCount"],a);const c=u(n,["baseSteps"]);t!==void 0&&c!=null&&h(t,["parameters","baseSteps"],c);const g=u(n,["outputGcsUri"]);t!==void 0&&g!=null&&h(t,["parameters","storageUri"],g);const m=u(n,["seed"]);t!==void 0&&m!=null&&h(t,["parameters","seed"],m);const y=u(n,["safetyFilterLevel"]);t!==void 0&&y!=null&&h(t,["parameters","safetySetting"],y);const f=u(n,["personGeneration"]);t!==void 0&&f!=null&&h(t,["parameters","personGeneration"],f);const v=u(n,["addWatermark"]);t!==void 0&&v!=null&&h(t,["parameters","addWatermark"],v);const T=u(n,["outputMimeType"]);t!==void 0&&T!=null&&h(t,["parameters","outputOptions","mimeType"],T);const _=u(n,["outputCompressionQuality"]);t!==void 0&&_!=null&&h(t,["parameters","outputOptions","compressionQuality"],_);const C=u(n,["enhancePrompt"]);t!==void 0&&C!=null&&h(t,["parameters","enhancePrompt"],C);const A=u(n,["labels"]);return t!==void 0&&A!=null&&h(t,["labels"],A),r}function Lx(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["source"]);c!=null&&Bx(c,r);const g=u(t,["config"]);return g!=null&&zx(g,r),r}function Hx(n,t){const i={},r=u(n,["predictions"]);if(r!=null){let a=r;Array.isArray(a)&&(a=a.map(c=>ia(c))),h(i,["generatedImages"],a)}return i}function Bx(n,t,i){const r={},a=u(n,["prompt"]);t!==void 0&&a!=null&&h(t,["instances[0]","prompt"],a);const c=u(n,["personImage"]);t!==void 0&&c!=null&&h(t,["instances[0]","personImage","image"],Kt(c));const g=u(n,["productImages"]);if(t!==void 0&&g!=null){let m=g;Array.isArray(m)&&(m=m.map(y=>Ux(y))),h(t,["instances[0]","productImages"],m)}return r}function qx(n,t){const i={},r=u(n,["referenceImage"]);r!=null&&h(i,["referenceImage"],Kt(r));const a=u(n,["referenceId"]);a!=null&&h(i,["referenceId"],a);const c=u(n,["referenceType"]);c!=null&&h(i,["referenceType"],c);const g=u(n,["maskImageConfig"]);g!=null&&h(i,["maskImageConfig"],Ix(g));const m=u(n,["controlImageConfig"]);m!=null&&h(i,["controlImageConfig"],Aw(m));const y=u(n,["styleImageConfig"]);y!=null&&h(i,["styleImageConfig"],y);const f=u(n,["subjectImageConfig"]);return f!=null&&h(i,["subjectImageConfig"],f),i}function Ty(n,t){const i={},r=u(n,["safetyAttributes","categories"]);r!=null&&h(i,["categories"],r);const a=u(n,["safetyAttributes","scores"]);a!=null&&h(i,["scores"],a);const c=u(n,["contentType"]);return c!=null&&h(i,["contentType"],c),i}function _y(n,t){const i={},r=u(n,["safetyAttributes","categories"]);r!=null&&h(i,["categories"],r);const a=u(n,["safetyAttributes","scores"]);a!=null&&h(i,["scores"],a);const c=u(n,["contentType"]);return c!=null&&h(i,["contentType"],c),i}function Px(n,t){const i={},r=u(n,["category"]);if(r!=null&&h(i,["category"],r),u(n,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const a=u(n,["threshold"]);return a!=null&&h(i,["threshold"],a),i}function Gx(n,t){const i={},r=u(n,["image"]);return r!=null&&h(i,["image"],Kt(r)),i}function Vx(n,t,i){const r={},a=u(n,["mode"]);t!==void 0&&a!=null&&h(t,["parameters","mode"],a);const c=u(n,["maxPredictions"]);t!==void 0&&c!=null&&h(t,["parameters","maxPredictions"],c);const g=u(n,["confidenceThreshold"]);t!==void 0&&g!=null&&h(t,["parameters","confidenceThreshold"],g);const m=u(n,["maskDilation"]);t!==void 0&&m!=null&&h(t,["parameters","maskDilation"],m);const y=u(n,["binaryColorThreshold"]);t!==void 0&&y!=null&&h(t,["parameters","binaryColorThreshold"],y);const f=u(n,["labels"]);return t!==void 0&&f!=null&&h(t,["labels"],f),r}function Ox(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["source"]);c!=null&&Yx(c,r);const g=u(t,["config"]);return g!=null&&Vx(g,r),r}function Fx(n,t){const i={},r=u(n,["predictions"]);if(r!=null){let a=r;Array.isArray(a)&&(a=a.map(c=>fx(c))),h(i,["generatedMasks"],a)}return i}function Yx(n,t,i){const r={},a=u(n,["prompt"]);t!==void 0&&a!=null&&h(t,["instances[0]","prompt"],a);const c=u(n,["image"]);t!==void 0&&c!=null&&h(t,["instances[0]","image"],Kt(c));const g=u(n,["scribbleImage"]);return t!==void 0&&g!=null&&h(t,["instances[0]","scribble"],Gx(g)),r}function Wx(n,t){const i={},r=u(n,["retrievalConfig"]);r!=null&&h(i,["retrievalConfig"],r);const a=u(n,["functionCallingConfig"]);a!=null&&h(i,["functionCallingConfig"],Jw(a));const c=u(n,["includeServerSideToolInvocations"]);return c!=null&&h(i,["includeServerSideToolInvocations"],c),i}function Jx(n,t){const i={},r=u(n,["retrievalConfig"]);r!=null&&h(i,["retrievalConfig"],r);const a=u(n,["functionCallingConfig"]);if(a!=null&&h(i,["functionCallingConfig"],a),u(n,["includeServerSideToolInvocations"])!==void 0)throw new Error("includeServerSideToolInvocations parameter is not supported in Vertex AI.");return i}function Kx(n,t){const i={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const r=u(n,["computerUse"]);r!=null&&h(i,["computerUse"],r);const a=u(n,["fileSearch"]);a!=null&&h(i,["fileSearch"],a);const c=u(n,["googleSearch"]);c!=null&&h(i,["googleSearch"],Sx(c));const g=u(n,["googleMaps"]);g!=null&&h(i,["googleMaps"],_x(g));const m=u(n,["codeExecution"]);if(m!=null&&h(i,["codeExecution"],m),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const y=u(n,["functionDeclarations"]);if(y!=null){let _=y;Array.isArray(_)&&(_=_.map(C=>C)),h(i,["functionDeclarations"],_)}const f=u(n,["googleSearchRetrieval"]);if(f!=null&&h(i,["googleSearchRetrieval"],f),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const v=u(n,["urlContext"]);v!=null&&h(i,["urlContext"],v);const T=u(n,["mcpServers"]);if(T!=null){let _=T;Array.isArray(_)&&(_=_.map(C=>C)),h(i,["mcpServers"],_)}return i}function Sy(n,t){const i={},r=u(n,["retrieval"]);r!=null&&h(i,["retrieval"],r);const a=u(n,["computerUse"]);if(a!=null&&h(i,["computerUse"],a),u(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const c=u(n,["googleSearch"]);c!=null&&h(i,["googleSearch"],c);const g=u(n,["googleMaps"]);g!=null&&h(i,["googleMaps"],g);const m=u(n,["codeExecution"]);m!=null&&h(i,["codeExecution"],m);const y=u(n,["enterpriseWebSearch"]);y!=null&&h(i,["enterpriseWebSearch"],y);const f=u(n,["functionDeclarations"]);if(f!=null){let C=f;Array.isArray(C)&&(C=C.map(A=>Kw(A))),h(i,["functionDeclarations"],C)}const v=u(n,["googleSearchRetrieval"]);v!=null&&h(i,["googleSearchRetrieval"],v);const T=u(n,["parallelAiSearch"]);T!=null&&h(i,["parallelAiSearch"],T);const _=u(n,["urlContext"]);if(_!=null&&h(i,["urlContext"],_),u(n,["mcpServers"])!==void 0)throw new Error("mcpServers parameter is not supported in Vertex AI.");return i}function Xx(n,t){const i={},r=u(n,["baseModel"]);r!=null&&h(i,["baseModel"],r);const a=u(n,["createTime"]);a!=null&&h(i,["createTime"],a);const c=u(n,["updateTime"]);return c!=null&&h(i,["updateTime"],c),i}function Qx(n,t){const i={},r=u(n,["labels","google-vertex-llm-tuning-base-model-id"]);r!=null&&h(i,["baseModel"],r);const a=u(n,["createTime"]);a!=null&&h(i,["createTime"],a);const c=u(n,["updateTime"]);return c!=null&&h(i,["updateTime"],c),i}function Zx(n,t,i){const r={},a=u(n,["displayName"]);t!==void 0&&a!=null&&h(t,["displayName"],a);const c=u(n,["description"]);t!==void 0&&c!=null&&h(t,["description"],c);const g=u(n,["defaultCheckpointId"]);return t!==void 0&&g!=null&&h(t,["defaultCheckpointId"],g),r}function $x(n,t,i){const r={},a=u(n,["displayName"]);t!==void 0&&a!=null&&h(t,["displayName"],a);const c=u(n,["description"]);t!==void 0&&c!=null&&h(t,["description"],c);const g=u(n,["defaultCheckpointId"]);return t!==void 0&&g!=null&&h(t,["defaultCheckpointId"],g),r}function jx(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","name"],Ae(n,a));const c=u(t,["config"]);return c!=null&&Zx(c,r),r}function eb(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["config"]);return c!=null&&$x(c,r),r}function tb(n,t,i){const r={},a=u(n,["outputGcsUri"]);t!==void 0&&a!=null&&h(t,["parameters","storageUri"],a);const c=u(n,["safetyFilterLevel"]);t!==void 0&&c!=null&&h(t,["parameters","safetySetting"],c);const g=u(n,["personGeneration"]);t!==void 0&&g!=null&&h(t,["parameters","personGeneration"],g);const m=u(n,["includeRaiReason"]);t!==void 0&&m!=null&&h(t,["parameters","includeRaiReason"],m);const y=u(n,["outputMimeType"]);t!==void 0&&y!=null&&h(t,["parameters","outputOptions","mimeType"],y);const f=u(n,["outputCompressionQuality"]);t!==void 0&&f!=null&&h(t,["parameters","outputOptions","compressionQuality"],f);const v=u(n,["enhanceInputImage"]);t!==void 0&&v!=null&&h(t,["parameters","upscaleConfig","enhanceInputImage"],v);const T=u(n,["imagePreservationFactor"]);t!==void 0&&T!=null&&h(t,["parameters","upscaleConfig","imagePreservationFactor"],T);const _=u(n,["labels"]);t!==void 0&&_!=null&&h(t,["labels"],_);const C=u(n,["numberOfImages"]);t!==void 0&&C!=null&&h(t,["parameters","sampleCount"],C);const A=u(n,["mode"]);return t!==void 0&&A!=null&&h(t,["parameters","mode"],A),r}function nb(n,t,i){const r={},a=u(t,["model"]);a!=null&&h(r,["_url","model"],Ae(n,a));const c=u(t,["image"]);c!=null&&h(r,["instances[0]","image"],Kt(c));const g=u(t,["upscaleFactor"]);g!=null&&h(r,["parameters","upscaleConfig","upscaleFactor"],g);const m=u(t,["config"]);return m!=null&&tb(m,r),r}function ob(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["predictions"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>ia(g))),h(i,["generatedImages"],c)}return i}function ib(n,t){const i={},r=u(n,["uri"]);r!=null&&h(i,["uri"],r);const a=u(n,["encodedVideo"]);a!=null&&h(i,["videoBytes"],$n(a));const c=u(n,["encoding"]);return c!=null&&h(i,["mimeType"],c),i}function sb(n,t){const i={},r=u(n,["gcsUri"]);r!=null&&h(i,["uri"],r);const a=u(n,["bytesBase64Encoded"]);a!=null&&h(i,["videoBytes"],$n(a));const c=u(n,["mimeType"]);return c!=null&&h(i,["mimeType"],c),i}function rb(n,t){const i={},r=u(n,["image"]);r!=null&&h(i,["_self"],Kt(r));const a=u(n,["maskMode"]);return a!=null&&h(i,["maskMode"],a),i}function ab(n,t){const i={},r=u(n,["image"]);r!=null&&h(i,["image"],sa(r));const a=u(n,["referenceType"]);return a!=null&&h(i,["referenceType"],a),i}function lb(n,t){const i={},r=u(n,["image"]);r!=null&&h(i,["image"],Kt(r));const a=u(n,["referenceType"]);return a!=null&&h(i,["referenceType"],a),i}function Ey(n,t){const i={},r=u(n,["uri"]);r!=null&&h(i,["uri"],r);const a=u(n,["videoBytes"]);a!=null&&h(i,["encodedVideo"],$n(a));const c=u(n,["mimeType"]);return c!=null&&h(i,["encoding"],c),i}function Cy(n,t){const i={},r=u(n,["uri"]);r!=null&&h(i,["gcsUri"],r);const a=u(n,["videoBytes"]);a!=null&&h(i,["bytesBase64Encoded"],$n(a));const c=u(n,["mimeType"]);return c!=null&&h(i,["mimeType"],c),i}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ub(n,t){const i={},r=u(n,["displayName"]);return t!==void 0&&r!=null&&h(t,["displayName"],r),i}function cb(n){const t={},i=u(n,["config"]);return i!=null&&ub(i,t),t}function hb(n,t){const i={},r=u(n,["force"]);return t!==void 0&&r!=null&&h(t,["_query","force"],r),i}function gb(n){const t={},i=u(n,["name"]);i!=null&&h(t,["_url","name"],i);const r=u(n,["config"]);return r!=null&&hb(r,t),t}function db(n){const t={},i=u(n,["name"]);return i!=null&&h(t,["_url","name"],i),t}function fb(n,t){const i={},r=u(n,["customMetadata"]);if(t!==void 0&&r!=null){let c=r;Array.isArray(c)&&(c=c.map(g=>g)),h(t,["customMetadata"],c)}const a=u(n,["chunkingConfig"]);return t!==void 0&&a!=null&&h(t,["chunkingConfig"],a),i}function mb(n){const t={},i=u(n,["name"]);i!=null&&h(t,["name"],i);const r=u(n,["metadata"]);r!=null&&h(t,["metadata"],r);const a=u(n,["done"]);a!=null&&h(t,["done"],a);const c=u(n,["error"]);c!=null&&h(t,["error"],c);const g=u(n,["response"]);return g!=null&&h(t,["response"],yb(g)),t}function pb(n){const t={},i=u(n,["fileSearchStoreName"]);i!=null&&h(t,["_url","file_search_store_name"],i);const r=u(n,["fileName"]);r!=null&&h(t,["fileName"],r);const a=u(n,["config"]);return a!=null&&fb(a,t),t}function yb(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["parent"]);r!=null&&h(t,["parent"],r);const a=u(n,["documentName"]);return a!=null&&h(t,["documentName"],a),t}function vb(n,t){const i={},r=u(n,["pageSize"]);t!==void 0&&r!=null&&h(t,["_query","pageSize"],r);const a=u(n,["pageToken"]);return t!==void 0&&a!=null&&h(t,["_query","pageToken"],a),i}function Tb(n){const t={},i=u(n,["config"]);return i!=null&&vb(i,t),t}function _b(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(t,["nextPageToken"],r);const a=u(n,["fileSearchStores"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(t,["fileSearchStores"],c)}return t}function Ay(n,t){const i={},r=u(n,["mimeType"]);t!==void 0&&r!=null&&h(t,["mimeType"],r);const a=u(n,["displayName"]);t!==void 0&&a!=null&&h(t,["displayName"],a);const c=u(n,["customMetadata"]);if(t!==void 0&&c!=null){let m=c;Array.isArray(m)&&(m=m.map(y=>y)),h(t,["customMetadata"],m)}const g=u(n,["chunkingConfig"]);return t!==void 0&&g!=null&&h(t,["chunkingConfig"],g),i}function Sb(n){const t={},i=u(n,["fileSearchStoreName"]);i!=null&&h(t,["_url","file_search_store_name"],i);const r=u(n,["config"]);return r!=null&&Ay(r,t),t}function Eb(n){const t={},i=u(n,["sdkHttpResponse"]);return i!=null&&h(t,["sdkHttpResponse"],i),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Cb="Content-Type",Ab="X-Server-Timeout",wb="User-Agent",ec="x-goog-api-client",xb="1.46.0",bb=`google-genai-sdk/${xb}`,Rb="v1beta1",Mb="v1beta",Nb=5,Ib=[408,429,500,502,503,504];class Db{constructor(t){var i,r,a;this.clientOptions=Object.assign({},t),this.customBaseUrl=(i=t.httpOptions)===null||i===void 0?void 0:i.baseUrl,this.clientOptions.vertexai&&(this.clientOptions.project&&this.clientOptions.location?this.clientOptions.apiKey=void 0:this.clientOptions.apiKey&&(this.clientOptions.project=void 0,this.clientOptions.location=void 0));const c={};if(this.clientOptions.vertexai){if(!this.clientOptions.location&&!this.clientOptions.apiKey&&!this.customBaseUrl&&(this.clientOptions.location="global"),!(this.clientOptions.project&&this.clientOptions.location||this.clientOptions.apiKey)&&!this.customBaseUrl)throw new Error("Authentication is not set up. Please provide either a project and location, or an API key, or a custom base URL.");const m=t.project&&t.location||!!t.apiKey;this.customBaseUrl&&!m?(c.baseUrl=this.customBaseUrl,this.clientOptions.project=void 0,this.clientOptions.location=void 0):this.clientOptions.apiKey||this.clientOptions.location==="global"?c.baseUrl="https://aiplatform.googleapis.com/":this.clientOptions.project&&this.clientOptions.location&&(c.baseUrl=`https://${this.clientOptions.location}-aiplatform.googleapis.com/`),c.apiVersion=(r=this.clientOptions.apiVersion)!==null&&r!==void 0?r:Rb}else this.clientOptions.apiKey||console.warn("API key should be set when using the Gemini API."),c.apiVersion=(a=this.clientOptions.apiVersion)!==null&&a!==void 0?a:Mb,c.baseUrl="https://generativelanguage.googleapis.com/";c.headers=this.getDefaultHeaders(),this.clientOptions.httpOptions=c,t.httpOptions&&(this.clientOptions.httpOptions=this.patchHttpOptions(c,t.httpOptions))}isVertexAI(){var t;return(t=this.clientOptions.vertexai)!==null&&t!==void 0?t:!1}getProject(){return this.clientOptions.project}getLocation(){return this.clientOptions.location}getCustomBaseUrl(){return this.customBaseUrl}async getAuthHeaders(){const t=new Headers;return await this.clientOptions.auth.addAuthHeaders(t),t}getApiVersion(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.apiVersion!==void 0)return this.clientOptions.httpOptions.apiVersion;throw new Error("API version is not set.")}getBaseUrl(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.baseUrl!==void 0)return this.clientOptions.httpOptions.baseUrl;throw new Error("Base URL is not set.")}getRequestUrl(){return this.getRequestUrlInternal(this.clientOptions.httpOptions)}getHeaders(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.headers!==void 0)return this.clientOptions.httpOptions.headers;throw new Error("Headers are not set.")}getRequestUrlInternal(t){if(!t||t.baseUrl===void 0||t.apiVersion===void 0)throw new Error("HTTP options are not correctly set.");const r=[t.baseUrl.endsWith("/")?t.baseUrl.slice(0,-1):t.baseUrl];return t.apiVersion&&t.apiVersion!==""&&r.push(t.apiVersion),r.join("/")}getBaseResourcePath(){return`projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`}getApiKey(){return this.clientOptions.apiKey}getWebsocketBaseUrl(){const t=this.getBaseUrl(),i=new URL(t);return i.protocol=i.protocol=="http:"?"ws":"wss",i.toString()}setBaseUrl(t){if(this.clientOptions.httpOptions)this.clientOptions.httpOptions.baseUrl=t;else throw new Error("HTTP options are not correctly set.")}constructUrl(t,i,r){const a=[this.getRequestUrlInternal(i)];return r&&a.push(this.getBaseResourcePath()),t!==""&&a.push(t),new URL(`${a.join("/")}`)}shouldPrependVertexProjectPath(t,i){return!(i.baseUrl&&i.baseUrlResourceScope===Ku.COLLECTION||this.clientOptions.apiKey||!this.clientOptions.vertexai||t.path.startsWith("projects/")||t.httpMethod==="GET"&&t.path.startsWith("publishers/google/models"))}async request(t){let i=this.clientOptions.httpOptions;t.httpOptions&&(i=this.patchHttpOptions(this.clientOptions.httpOptions,t.httpOptions));const r=this.shouldPrependVertexProjectPath(t,i),a=this.constructUrl(t.path,i,r);if(t.queryParams)for(const[g,m]of Object.entries(t.queryParams))a.searchParams.append(g,String(m));let c={};if(t.httpMethod==="GET"){if(t.body&&t.body!=="{}")throw new Error("Request body should be empty for GET request, but got non empty request body")}else c.body=t.body;return c=await this.includeExtraHttpOptionsToRequestInit(c,i,a.toString(),t.abortSignal),this.unaryApiCall(a,c,t.httpMethod)}patchHttpOptions(t,i){const r=JSON.parse(JSON.stringify(t));for(const[a,c]of Object.entries(i))typeof c=="object"?r[a]=Object.assign(Object.assign({},r[a]),c):c!==void 0&&(r[a]=c);return r}async requestStream(t){let i=this.clientOptions.httpOptions;t.httpOptions&&(i=this.patchHttpOptions(this.clientOptions.httpOptions,t.httpOptions));const r=this.shouldPrependVertexProjectPath(t,i),a=this.constructUrl(t.path,i,r);(!a.searchParams.has("alt")||a.searchParams.get("alt")!=="sse")&&a.searchParams.set("alt","sse");let c={};return c.body=t.body,c=await this.includeExtraHttpOptionsToRequestInit(c,i,a.toString(),t.abortSignal),this.streamApiCall(a,c,t.httpMethod)}async includeExtraHttpOptionsToRequestInit(t,i,r,a){if(i&&i.timeout||a){const c=new AbortController,g=c.signal;if(i.timeout&&(i==null?void 0:i.timeout)>0){const m=setTimeout(()=>c.abort(),i.timeout);m&&typeof m.unref=="function"&&m.unref()}a&&a.addEventListener("abort",()=>{c.abort()}),t.signal=g}return i&&i.extraBody!==null&&kb(t,i.extraBody),t.headers=await this.getHeadersInternal(i,r),t}async unaryApiCall(t,i,r){return this.apiCall(t.toString(),Object.assign(Object.assign({},i),{method:r})).then(async a=>(await Ep(a),new Xu(a))).catch(a=>{throw a instanceof Error?a:new Error(JSON.stringify(a))})}async streamApiCall(t,i,r){return this.apiCall(t.toString(),Object.assign(Object.assign({},i),{method:r})).then(async a=>(await Ep(a),this.processStreamResponse(a))).catch(a=>{throw a instanceof Error?a:new Error(JSON.stringify(a))})}processStreamResponse(t){return Yt(this,arguments,function*(){var r;const a=(r=t==null?void 0:t.body)===null||r===void 0?void 0:r.getReader(),c=new TextDecoder("utf-8");if(!a)throw new Error("Response body is empty");try{let g="";const m="data:",y=[`

`,"\r\r",`\r
\r
`];for(;;){const{done:f,value:v}=yield le(a.read());if(f){if(g.trim().length>0)throw new Error("Incomplete JSON segment at the end");break}const T=c.decode(v,{stream:!0});try{const A=JSON.parse(T);if("error"in A){const M=JSON.parse(JSON.stringify(A.error)),x=M.status,U=M.code,Y=`got status: ${x}. ${JSON.stringify(A)}`;if(U>=400&&U<600)throw new oa({message:Y,status:U})}}catch(A){if(A.name==="ApiError")throw A}g+=T;let _=-1,C=0;for(;;){_=-1,C=0;for(const x of y){const U=g.indexOf(x);U!==-1&&(_===-1||U<_)&&(_=U,C=x.length)}if(_===-1)break;const A=g.substring(0,_);g=g.substring(_+C);const M=A.trim();if(M.startsWith(m)){const x=M.substring(m.length).trim();try{const U=new Response(x,{headers:t==null?void 0:t.headers,status:t==null?void 0:t.status,statusText:t==null?void 0:t.statusText});yield yield le(new Xu(U))}catch(U){throw new Error(`exception parsing stream chunk ${x}. ${U}`)}}}}}finally{a.releaseLock()}})}async apiCall(t,i){var r;if(!this.clientOptions.httpOptions||!this.clientOptions.httpOptions.retryOptions)return fetch(t,i);const a=this.clientOptions.httpOptions.retryOptions;return hE(async()=>{const g=await fetch(t,i);if(g.ok)return g;throw Ib.includes(g.status)?new Error(`Retryable HTTP Error: ${g.statusText}`):new ny.AbortError(`Non-retryable exception ${g.statusText} sending request`)},{retries:((r=a.attempts)!==null&&r!==void 0?r:Nb)-1})}getDefaultHeaders(){const t={},i=bb+" "+this.clientOptions.userAgentExtra;return t[wb]=i,t[ec]=i,t[Cb]="application/json",t}async getHeadersInternal(t,i){const r=new Headers;if(t&&t.headers){for(const[a,c]of Object.entries(t.headers))r.append(a,c);t.timeout&&t.timeout>0&&r.append(Ab,String(Math.ceil(t.timeout/1e3)))}return await this.clientOptions.auth.addAuthHeaders(r,i),r}getFileName(t){var i;let r="";return typeof t=="string"&&(r=t.replace(/[/\\]+$/,""),r=(i=r.split(/[/\\]/).pop())!==null&&i!==void 0?i:""),r}async uploadFile(t,i){var r;const a={};i!=null&&(a.mimeType=i.mimeType,a.name=i.name,a.displayName=i.displayName),a.name&&!a.name.startsWith("files/")&&(a.name=`files/${a.name}`);const c=this.clientOptions.uploader,g=await c.stat(t);a.sizeBytes=String(g.size);const m=(r=i==null?void 0:i.mimeType)!==null&&r!==void 0?r:g.type;if(m===void 0||m==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");a.mimeType=m;const y={file:a},f=this.getFileName(t),v=Z("upload/v1beta/files",y._url),T=await this.fetchUploadUrl(v,a.sizeBytes,a.mimeType,f,y,i==null?void 0:i.httpOptions);return c.upload(t,T,this)}async uploadFileToFileSearchStore(t,i,r){var a;const c=this.clientOptions.uploader,g=await c.stat(i),m=String(g.size),y=(a=r==null?void 0:r.mimeType)!==null&&a!==void 0?a:g.type;if(y===void 0||y==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");const f=`upload/v1beta/${t}:uploadToFileSearchStore`,v=this.getFileName(i),T={};r!=null&&Ay(r,T);const _=await this.fetchUploadUrl(f,m,y,v,T,r==null?void 0:r.httpOptions);return c.uploadToFileSearchStore(i,_,this)}async downloadFile(t){await this.clientOptions.downloader.download(t,this)}async fetchUploadUrl(t,i,r,a,c,g){var m;let y={};g?y=g:y={apiVersion:"",headers:Object.assign({"Content-Type":"application/json","X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i}`,"X-Goog-Upload-Header-Content-Type":`${r}`},a?{"X-Goog-Upload-File-Name":a}:{})};const f=await this.request({path:t,body:JSON.stringify(c),httpMethod:"POST",httpOptions:y});if(!f||!(f!=null&&f.headers))throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");const v=(m=f==null?void 0:f.headers)===null||m===void 0?void 0:m["x-goog-upload-url"];if(v===void 0)throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");return v}}async function Ep(n){var t;if(n===void 0)throw new Error("response is undefined");if(!n.ok){const i=n.status;let r;!((t=n.headers.get("content-type"))===null||t===void 0)&&t.includes("application/json")?r=await n.json():r={error:{message:await n.text(),code:n.status,status:n.statusText}};const a=JSON.stringify(r);throw i>=400&&i<600?new oa({message:a,status:i}):new Error(a)}}function kb(n,t){if(!t||Object.keys(t).length===0)return;if(n.body instanceof Blob){console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");return}let i={};if(typeof n.body=="string"&&n.body.length>0)try{const c=JSON.parse(n.body);if(typeof c=="object"&&c!==null&&!Array.isArray(c))i=c;else{console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");return}}catch{console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");return}function r(c,g){const m=Object.assign({},c);for(const y in g)if(Object.prototype.hasOwnProperty.call(g,y)){const f=g[y],v=m[y];f&&typeof f=="object"&&!Array.isArray(f)&&v&&typeof v=="object"&&!Array.isArray(v)?m[y]=r(v,f):(v&&f&&typeof v!=typeof f&&console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${y}". Original type: ${typeof v}, New type: ${typeof f}. Overwriting.`),m[y]=f)}return m}const a=r(i,t);n.body=JSON.stringify(a)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ub="mcp_used/unknown";let zb=!1;function wy(n){for(const t of n)if(Lb(t)||typeof t=="object"&&"inputSchema"in t)return!0;return zb}function xy(n){var t;const i=(t=n[ec])!==null&&t!==void 0?t:"";n[ec]=(i+` ${Ub}`).trimStart()}function Lb(n){return n!==null&&typeof n=="object"&&n instanceof Cc}function Hb(n){return Yt(this,arguments,function*(i,r=100){let a,c=0;for(;c<r;){const g=yield le(i.listTools({cursor:a}));for(const m of g.tools)yield yield le(m),c++;if(!g.nextCursor)break;a=g.nextCursor}})}class Cc{constructor(t=[],i){this.mcpTools=[],this.functionNameToMcpClient={},this.mcpClients=t,this.config=i}static create(t,i){return new Cc(t,i)}async initialize(){var t,i,r,a;if(this.mcpTools.length>0)return;const c={},g=[];for(const v of this.mcpClients)try{for(var m=!0,y=(i=void 0,Wt(Hb(v))),f;f=await y.next(),t=f.done,!t;m=!0){a=f.value,m=!1;const T=a;g.push(T);const _=T.name;if(c[_])throw new Error(`Duplicate function name ${_} found in MCP tools. Please ensure function names are unique.`);c[_]=v}}catch(T){i={error:T}}finally{try{!m&&!t&&(r=y.return)&&await r.call(y)}finally{if(i)throw i.error}}this.mcpTools=g,this.functionNameToMcpClient=c}async tool(){return await this.initialize(),jE(this.mcpTools,this.config)}async callTool(t){await this.initialize();const i=[];for(const r of t)if(r.name in this.functionNameToMcpClient){const a=this.functionNameToMcpClient[r.name];let c;this.config.timeout&&(c={timeout:this.config.timeout});const g=await a.callTool({name:r.name,arguments:r.args},void 0,c);i.push({functionResponse:{name:r.name,response:g.isError?{error:g}:g}})}return i}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function Bb(n,t,i){const r=new YE;let a;i.data instanceof Blob?a=JSON.parse(await i.data.text()):a=JSON.parse(i.data),Object.assign(r,a),t(r)}class qb{constructor(t,i,r){this.apiClient=t,this.auth=i,this.webSocketFactory=r}async connect(t){var i,r;if(this.apiClient.isVertexAI())throw new Error("Live music is not supported for Vertex AI.");console.warn("Live music generation is experimental and may change in future versions.");const a=this.apiClient.getWebsocketBaseUrl(),c=this.apiClient.getApiVersion(),g=Vb(this.apiClient.getDefaultHeaders()),m=this.apiClient.getApiKey(),y=`${a}/ws/google.ai.generativelanguage.${c}.GenerativeService.BidiGenerateMusic?key=${m}`;let f=()=>{};const v=new Promise(P=>{f=P}),T=t.callbacks,_=function(){f({})},C=this.apiClient,A={onopen:_,onmessage:P=>{Bb(C,T.onmessage,P)},onerror:(i=T==null?void 0:T.onerror)!==null&&i!==void 0?i:function(P){},onclose:(r=T==null?void 0:T.onclose)!==null&&r!==void 0?r:function(P){}},M=this.webSocketFactory.create(y,Gb(g),A);M.connect(),await v;const Y={setup:{model:Ae(this.apiClient,t.model)}};return M.send(JSON.stringify(Y)),new Pb(M,this.apiClient)}}class Pb{constructor(t,i){this.conn=t,this.apiClient=i}async setWeightedPrompts(t){if(!t.weightedPrompts||Object.keys(t.weightedPrompts).length===0)throw new Error("Weighted prompts must be set and contain at least one entry.");const i=sw(t);this.conn.send(JSON.stringify({clientContent:i}))}async setMusicGenerationConfig(t){t.musicGenerationConfig||(t.musicGenerationConfig={});const i=iw(t);this.conn.send(JSON.stringify(i))}sendPlaybackControl(t){const i={playbackControl:t};this.conn.send(JSON.stringify(i))}play(){this.sendPlaybackControl(si.PLAY)}pause(){this.sendPlaybackControl(si.PAUSE)}stop(){this.sendPlaybackControl(si.STOP)}resetContext(){this.sendPlaybackControl(si.RESET_CONTEXT)}close(){this.conn.close()}}function Gb(n){const t={};return n.forEach((i,r)=>{t[r]=i}),t}function Vb(n){const t=new Headers;for(const[i,r]of Object.entries(n))t.append(i,r);return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ob="FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";async function Fb(n,t,i){const r=new FE;let a;i.data instanceof Blob?a=await i.data.text():i.data instanceof ArrayBuffer?a=new TextDecoder().decode(i.data):a=i.data;const c=JSON.parse(a);if(n.isVertexAI()){const g=lw(c);Object.assign(r,g)}else Object.assign(r,c);t(r)}class Yb{constructor(t,i,r){this.apiClient=t,this.auth=i,this.webSocketFactory=r,this.music=new qb(this.apiClient,this.auth,this.webSocketFactory)}async connect(t){var i,r,a,c,g,m;if(t.config&&t.config.httpOptions)throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");const y=this.apiClient.getWebsocketBaseUrl(),f=this.apiClient.getApiVersion();let v;const T=this.apiClient.getHeaders();t.config&&t.config.tools&&wy(t.config.tools)&&xy(T);const _=Xb(T);if(this.apiClient.isVertexAI()){const j=this.apiClient.getProject(),ue=this.apiClient.getLocation(),Te=this.apiClient.getApiKey(),be=!!j&&!!ue||!!Te;this.apiClient.getCustomBaseUrl()&&!be?v=y:(v=`${y}/ws/google.cloud.aiplatform.${f}.LlmBidiService/BidiGenerateContent`,await this.auth.addAuthHeaders(_,v))}else{const j=this.apiClient.getApiKey();let ue="BidiGenerateContent",Te="key";j!=null&&j.startsWith("auth_tokens/")&&(console.warn("Warning: Ephemeral token support is experimental and may change in future versions."),f!=="v1alpha"&&console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."),ue="BidiGenerateContentConstrained",Te="access_token"),v=`${y}/ws/google.ai.generativelanguage.${f}.GenerativeService.${ue}?${Te}=${j}`}let C=()=>{};const A=new Promise(j=>{C=j}),M=t.callbacks,x=function(){var j;(j=M==null?void 0:M.onopen)===null||j===void 0||j.call(M),C({})},U=this.apiClient,Y={onopen:x,onmessage:j=>{Fb(U,M.onmessage,j)},onerror:(i=M==null?void 0:M.onerror)!==null&&i!==void 0?i:function(j){},onclose:(r=M==null?void 0:M.onclose)!==null&&r!==void 0?r:function(j){}},P=this.webSocketFactory.create(v,Kb(_),Y);P.connect(),await A;let J=Ae(this.apiClient,t.model);if(this.apiClient.isVertexAI()&&J.startsWith("publishers/")){const j=this.apiClient.getProject(),ue=this.apiClient.getLocation();j&&ue&&(J=`projects/${j}/locations/${ue}/`+J)}let Q={};this.apiClient.isVertexAI()&&((a=t.config)===null||a===void 0?void 0:a.responseModalities)===void 0&&(t.config===void 0?t.config={responseModalities:[Jr.AUDIO]}:t.config.responseModalities=[Jr.AUDIO]),!((c=t.config)===null||c===void 0)&&c.generationConfig&&console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");const V=(m=(g=t.config)===null||g===void 0?void 0:g.tools)!==null&&m!==void 0?m:[],K=[];for(const j of V)if(this.isCallableTool(j)){const ue=j;K.push(await ue.tool())}else K.push(j);K.length>0&&(t.config.tools=K);const re={model:J,config:t.config,callbacks:t.callbacks};return this.apiClient.isVertexAI()?Q=ow(this.apiClient,re):Q=nw(this.apiClient,re),delete Q.config,P.send(JSON.stringify(Q)),new Jb(P,this.apiClient)}isCallableTool(t){return"callTool"in t&&typeof t.callTool=="function"}}const Wb={turnComplete:!0};class Jb{constructor(t,i){this.conn=t,this.apiClient=i}tLiveClientContent(t,i){if(i.turns!==null&&i.turns!==void 0){let r=[];try{r=Mt(i.turns),t.isVertexAI()||(r=r.map(a=>vs(a)))}catch{throw new Error(`Failed to parse client content "turns", type: '${typeof i.turns}'`)}return{clientContent:{turns:r,turnComplete:i.turnComplete}}}return{clientContent:{turnComplete:i.turnComplete}}}tLiveClienttToolResponse(t,i){let r=[];if(i.functionResponses==null)throw new Error("functionResponses is required.");if(Array.isArray(i.functionResponses)?r=i.functionResponses:r=[i.functionResponses],r.length===0)throw new Error("functionResponses is required.");for(const c of r){if(typeof c!="object"||c===null||!("name"in c)||!("response"in c))throw new Error(`Could not parse function response, type '${typeof c}'.`);if(!t.isVertexAI()&&!("id"in c))throw new Error(Ob)}return{toolResponse:{functionResponses:r}}}sendClientContent(t){t=Object.assign(Object.assign({},Wb),t);const i=this.tLiveClientContent(this.apiClient,t);this.conn.send(JSON.stringify(i))}sendRealtimeInput(t){let i={};this.apiClient.isVertexAI()?i={realtimeInput:aw(t)}:i={realtimeInput:rw(t)},this.conn.send(JSON.stringify(i))}sendToolResponse(t){if(t.functionResponses==null)throw new Error("Tool response parameters are required.");const i=this.tLiveClienttToolResponse(this.apiClient,t);this.conn.send(JSON.stringify(i))}close(){this.conn.close()}}function Kb(n){const t={};return n.forEach((i,r)=>{t[r]=i}),t}function Xb(n){const t=new Headers;for(const[i,r]of Object.entries(n))t.append(i,r);return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Cp=10;function Ap(n){var t,i,r;if(!((t=n==null?void 0:n.automaticFunctionCalling)===null||t===void 0)&&t.disable)return!0;let a=!1;for(const g of(i=n==null?void 0:n.tools)!==null&&i!==void 0?i:[])if(li(g)){a=!0;break}if(!a)return!0;const c=(r=n==null?void 0:n.automaticFunctionCalling)===null||r===void 0?void 0:r.maximumRemoteCalls;return c&&(c<0||!Number.isInteger(c))||c==0?(console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:",c),!0):!1}function li(n){return"callTool"in n&&typeof n.callTool=="function"}function Qb(n){var t,i,r;return(r=(i=(t=n.config)===null||t===void 0?void 0:t.tools)===null||i===void 0?void 0:i.some(a=>li(a)))!==null&&r!==void 0?r:!1}function wp(n){var t;const i=[];return!((t=n==null?void 0:n.config)===null||t===void 0)&&t.tools&&n.config.tools.forEach((r,a)=>{if(li(r))return;const c=r;c.functionDeclarations&&c.functionDeclarations.length>0&&i.push(a)}),i}function xp(n){var t;return!(!((t=n==null?void 0:n.automaticFunctionCalling)===null||t===void 0)&&t.ignoreCallHistory)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Zb extends Cn{constructor(t){super(),this.apiClient=t,this.embedContent=async i=>{if(!this.apiClient.isVertexAI())return await this.embedContentInternal(i);if(i.model.includes("gemini")&&i.model!=="gemini-embedding-001"||i.model.includes("maas")){const a=Mt(i.contents);if(a.length>1)throw new Error("The embedContent API for this model only supports one content at a time.");const c=Object.assign(Object.assign({},i),{content:a[0],embeddingApiType:Kr.EMBED_CONTENT});return await this.embedContentInternal(c)}else{const a=Object.assign(Object.assign({},i),{embeddingApiType:Kr.PREDICT});return await this.embedContentInternal(a)}},this.generateContent=async i=>{var r,a,c,g,m;const y=await this.processParamsMaybeAddMcpUsage(i);if(this.maybeMoveToResponseJsonSchem(i),!Qb(i)||Ap(i.config))return await this.generateContentInternal(y);const f=wp(i);if(f.length>0){const M=f.map(x=>`tools[${x}]`).join(", ");throw new Error(`Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations is not yet supported. Incompatible tools found at ${M}.`)}let v,T;const _=Mt(y.contents),C=(c=(a=(r=y.config)===null||r===void 0?void 0:r.automaticFunctionCalling)===null||a===void 0?void 0:a.maximumRemoteCalls)!==null&&c!==void 0?c:Cp;let A=0;for(;A<C&&(v=await this.generateContentInternal(y),!(!v.functionCalls||v.functionCalls.length===0));){const M=v.candidates[0].content,x=[];for(const U of(m=(g=i.config)===null||g===void 0?void 0:g.tools)!==null&&m!==void 0?m:[])if(li(U)){const P=await U.callTool(v.functionCalls);x.push(...P)}A++,T={role:"user",parts:x},y.contents=Mt(y.contents),y.contents.push(M),y.contents.push(T),xp(y.config)&&(_.push(M),_.push(T))}return xp(y.config)&&(v.automaticFunctionCallingHistory=_),v},this.generateContentStream=async i=>{var r,a,c,g,m;if(this.maybeMoveToResponseJsonSchem(i),Ap(i.config)){const T=await this.processParamsMaybeAddMcpUsage(i);return await this.generateContentStreamInternal(T)}const y=wp(i);if(y.length>0){const T=y.map(_=>`tools[${_}]`).join(", ");throw new Error(`Incompatible tools found at ${T}. Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations" is not yet supported.`)}const f=(c=(a=(r=i==null?void 0:i.config)===null||r===void 0?void 0:r.toolConfig)===null||a===void 0?void 0:a.functionCallingConfig)===null||c===void 0?void 0:c.streamFunctionCallArguments,v=(m=(g=i==null?void 0:i.config)===null||g===void 0?void 0:g.automaticFunctionCalling)===null||m===void 0?void 0:m.disable;if(f&&!v)throw new Error("Running in streaming mode with 'streamFunctionCallArguments' enabled, this feature is not compatible with automatic function calling (AFC). Please set 'config.automaticFunctionCalling.disable' to true to disable AFC or leave 'config.toolConfig.functionCallingConfig.streamFunctionCallArguments' to be undefined or set to false to disable streaming function call arguments feature.");return await this.processAfcStream(i)},this.generateImages=async i=>await this.generateImagesInternal(i).then(r=>{var a;let c;const g=[];if(r!=null&&r.generatedImages)for(const y of r.generatedImages)y&&(y!=null&&y.safetyAttributes)&&((a=y==null?void 0:y.safetyAttributes)===null||a===void 0?void 0:a.contentType)==="Positive Prompt"?c=y==null?void 0:y.safetyAttributes:g.push(y);let m;return c?m={generatedImages:g,positivePromptSafetyAttributes:c,sdkHttpResponse:r.sdkHttpResponse}:m={generatedImages:g,sdkHttpResponse:r.sdkHttpResponse},m}),this.list=async i=>{var r;const g={config:Object.assign(Object.assign({},{queryBase:!0}),i==null?void 0:i.config)};if(this.apiClient.isVertexAI()&&!g.config.queryBase){if(!((r=g.config)===null||r===void 0)&&r.filter)throw new Error("Filtering tuned models list for Vertex AI is not currently supported");g.config.filter="labels.tune-type:*"}return new _o(Sn.PAGED_ITEM_MODELS,m=>this.listInternal(m),await this.listInternal(g),g)},this.editImage=async i=>{const r={model:i.model,prompt:i.prompt,referenceImages:[],config:i.config};return i.referenceImages&&i.referenceImages&&(r.referenceImages=i.referenceImages.map(a=>a.toReferenceImageAPI())),await this.editImageInternal(r)},this.upscaleImage=async i=>{let r={numberOfImages:1,mode:"upscale"};i.config&&(r=Object.assign(Object.assign({},r),i.config));const a={model:i.model,image:i.image,upscaleFactor:i.upscaleFactor,config:r};return await this.upscaleImageInternal(a)},this.generateVideos=async i=>{var r,a,c,g,m,y;if((i.prompt||i.image||i.video)&&i.source)throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");return this.apiClient.isVertexAI()||(!((r=i.video)===null||r===void 0)&&r.uri&&(!((a=i.video)===null||a===void 0)&&a.videoBytes)?i.video={uri:i.video.uri,mimeType:i.video.mimeType}:!((g=(c=i.source)===null||c===void 0?void 0:c.video)===null||g===void 0)&&g.uri&&(!((y=(m=i.source)===null||m===void 0?void 0:m.video)===null||y===void 0)&&y.videoBytes)&&(i.source.video={uri:i.source.video.uri,mimeType:i.source.video.mimeType})),await this.generateVideosInternal(i)}}maybeMoveToResponseJsonSchem(t){t.config&&t.config.responseSchema&&(t.config.responseJsonSchema||Object.keys(t.config.responseSchema).includes("$schema")&&(t.config.responseJsonSchema=t.config.responseSchema,delete t.config.responseSchema))}async processParamsMaybeAddMcpUsage(t){var i,r,a;const c=(i=t.config)===null||i===void 0?void 0:i.tools;if(!c)return t;const g=await Promise.all(c.map(async y=>li(y)?await y.tool():y)),m={model:t.model,contents:t.contents,config:Object.assign(Object.assign({},t.config),{tools:g})};if(m.config.tools=g,t.config&&t.config.tools&&wy(t.config.tools)){const y=(a=(r=t.config.httpOptions)===null||r===void 0?void 0:r.headers)!==null&&a!==void 0?a:{};let f=Object.assign({},y);Object.keys(f).length===0&&(f=this.apiClient.getDefaultHeaders()),xy(f),m.config.httpOptions=Object.assign(Object.assign({},t.config.httpOptions),{headers:f})}return m}async initAfcToolsMap(t){var i,r,a;const c=new Map;for(const g of(r=(i=t.config)===null||i===void 0?void 0:i.tools)!==null&&r!==void 0?r:[])if(li(g)){const m=g,y=await m.tool();for(const f of(a=y.functionDeclarations)!==null&&a!==void 0?a:[]){if(!f.name)throw new Error("Function declaration name is required.");if(c.has(f.name))throw new Error(`Duplicate tool declaration name: ${f.name}`);c.set(f.name,m)}}return c}async processAfcStream(t){var i,r,a;const c=(a=(r=(i=t.config)===null||i===void 0?void 0:i.automaticFunctionCalling)===null||r===void 0?void 0:r.maximumRemoteCalls)!==null&&a!==void 0?a:Cp;let g=!1,m=0;const y=await this.initAfcToolsMap(t);return(function(f,v,T){return Yt(this,arguments,function*(){for(var _,C,A,M,x,U;m<c;){g&&(m++,g=!1);const Q=yield le(f.processParamsMaybeAddMcpUsage(T)),V=yield le(f.generateContentStreamInternal(Q)),K=[],re=[];try{for(var Y=!0,P=(C=void 0,Wt(V)),J;J=yield le(P.next()),_=J.done,!_;Y=!0){M=J.value,Y=!1;const j=M;if(yield yield le(j),j.candidates&&(!((x=j.candidates[0])===null||x===void 0)&&x.content)){re.push(j.candidates[0].content);for(const ue of(U=j.candidates[0].content.parts)!==null&&U!==void 0?U:[])if(m<c&&ue.functionCall){if(!ue.functionCall.name)throw new Error("Function call name was not returned by the model.");if(v.has(ue.functionCall.name)){const Te=yield le(v.get(ue.functionCall.name).callTool([ue.functionCall]));K.push(...Te)}else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${v.keys()}, mising tool: ${ue.functionCall.name}`)}}}}catch(j){C={error:j}}finally{try{!Y&&!_&&(A=P.return)&&(yield le(A.call(P)))}finally{if(C)throw C.error}}if(K.length>0){g=!0;const j=new gs;j.candidates=[{content:{role:"user",parts:K}}],yield yield le(j);const ue=[];ue.push(...re),ue.push({role:"user",parts:K});const Te=Mt(T.contents).concat(ue);T.contents=Te}else break}})})(this,y,t)}async generateContentInternal(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Tp(this.apiClient,t);return m=Z("{model}:generateContent",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=Sp(v),_=new gs;return Object.assign(_,T),_})}else{const f=vp(this.apiClient,t);return m=Z("{model}:generateContent",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=_p(v),_=new gs;return Object.assign(_,T),_})}}async generateContentStreamInternal(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Tp(this.apiClient,t);return m=Z("{model}:streamGenerateContent?alt=sse",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.requestStream({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}),g.then(function(T){return Yt(this,arguments,function*(){var _,C,A,M;try{for(var x=!0,U=Wt(T),Y;Y=yield le(U.next()),_=Y.done,!_;x=!0){M=Y.value,x=!1;const P=M,J=Sp(yield le(P.json()),t);J.sdkHttpResponse={headers:P.headers};const Q=new gs;Object.assign(Q,J),yield yield le(Q)}}catch(P){C={error:P}}finally{try{!x&&!_&&(A=U.return)&&(yield le(A.call(U)))}finally{if(C)throw C.error}}})})}else{const f=vp(this.apiClient,t);return m=Z("{model}:streamGenerateContent?alt=sse",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.requestStream({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}),g.then(function(T){return Yt(this,arguments,function*(){var _,C,A,M;try{for(var x=!0,U=Wt(T),Y;Y=yield le(U.next()),_=Y.done,!_;x=!0){M=Y.value,x=!1;const P=M,J=_p(yield le(P.json()),t);J.sdkHttpResponse={headers:P.headers};const Q=new gs;Object.assign(Q,J),yield yield le(Q)}}catch(P){C={error:P}}finally{try{!x&&!_&&(A=U.return)&&(yield le(A.call(U)))}finally{if(C)throw C.error}}})})}}async embedContentInternal(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Gw(this.apiClient,t,t),v=tC(t.model)?"{model}:embedContent":"{model}:predict";return m=Z(v,f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(T=>T.json().then(_=>{const C=_;return C.sdkHttpResponse={headers:T.headers},C})),g.then(T=>{const _=Ow(T,t),C=new jm;return Object.assign(C,_),C})}else{const f=Pw(this.apiClient,t);return m=Z("{model}:batchEmbedContents",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=Vw(v),_=new jm;return Object.assign(_,T),_})}}async generateImagesInternal(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=ex(this.apiClient,t);return m=Z("{model}:predict",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=nx(v),_=new ep;return Object.assign(_,T),_})}else{const f=jw(this.apiClient,t);return m=Z("{model}:predict",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=tx(v),_=new ep;return Object.assign(_,T),_})}}async editImageInternal(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=Lw(this.apiClient,t);return c=Z("{model}:predict",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>{const f=Hw(y),v=new DE;return Object.assign(v,f),v})}else throw new Error("This method is only supported by the Vertex AI.")}async upscaleImageInternal(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=nb(this.apiClient,t);return c=Z("{model}:predict",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>{const f=ob(y),v=new kE;return Object.assign(v,f),v})}else throw new Error("This method is only supported by the Vertex AI.")}async recontextImage(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=Lx(this.apiClient,t);return c=Z("{model}:predict",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=Hx(y),v=new UE;return Object.assign(v,f),v})}else throw new Error("This method is only supported by the Vertex AI.")}async segmentImage(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=Ox(this.apiClient,t);return c=Z("{model}:predict",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=Fx(y),v=new zE;return Object.assign(v,f),v})}else throw new Error("This method is only supported by the Vertex AI.")}async get(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Tx(this.apiClient,t);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>ju(v))}else{const f=vx(this.apiClient,t);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>$u(v))}}async listInternal(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Rx(this.apiClient,t);return m=Z("{models_url}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=Nx(v),_=new tp;return Object.assign(_,T),_})}else{const f=bx(this.apiClient,t);return m=Z("{models_url}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=Mx(v),_=new tp;return Object.assign(_,T),_})}}async update(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=eb(this.apiClient,t);return m=Z("{model}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"PATCH",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>ju(v))}else{const f=jx(this.apiClient,t);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"PATCH",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>$u(v))}}async delete(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Dw(this.apiClient,t);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=Uw(v),_=new np;return Object.assign(_,T),_})}else{const f=Iw(this.apiClient,t);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"DELETE",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=kw(v),_=new np;return Object.assign(_,T),_})}}async countTokens(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=Rw(this.apiClient,t);return m=Z("{model}:countTokens",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=Nw(v),_=new op;return Object.assign(_,T),_})}else{const f=bw(this.apiClient,t);return m=Z("{model}:countTokens",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=Mw(v),_=new op;return Object.assign(_,T),_})}}async computeTokens(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=_w(this.apiClient,t);return c=Z("{model}:computeTokens",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>{const f=Sw(y),v=new LE;return Object.assign(v,f),v})}else throw new Error("This method is only supported by the Vertex AI.")}async generateVideosInternal(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=lx(this.apiClient,t);return m=Z("{model}:predictLongRunning",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g.then(v=>{const T=rx(v),_=new Xr;return Object.assign(_,T),_})}else{const f=ax(this.apiClient,t);return m=Z("{model}:predictLongRunning",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g.then(v=>{const T=sx(v),_=new Xr;return Object.assign(_,T),_})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class $b extends Cn{constructor(t){super(),this.apiClient=t}async getVideosOperation(t){const i=t.operation,r=t.config;if(i.name===void 0||i.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const a=i.name.split("/operations/")[0];let c;r&&"httpOptions"in r&&(c=r.httpOptions);const g=await this.fetchPredictVideosOperationInternal({operationName:i.name,resourceName:a,config:{httpOptions:c}});return i._fromAPIResponse({apiResponse:g,_isVertexAI:!0})}else{const a=await this.getVideosOperationInternal({operationName:i.name,config:r});return i._fromAPIResponse({apiResponse:a,_isVertexAI:!1})}}async get(t){const i=t.operation,r=t.config;if(i.name===void 0||i.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const a=i.name.split("/operations/")[0];let c;r&&"httpOptions"in r&&(c=r.httpOptions);const g=await this.fetchPredictVideosOperationInternal({operationName:i.name,resourceName:a,config:{httpOptions:c}});return i._fromAPIResponse({apiResponse:g,_isVertexAI:!0})}else{const a=await this.getVideosOperationInternal({operationName:i.name,config:r});return i._fromAPIResponse({apiResponse:a,_isVertexAI:!1})}}async getVideosOperationInternal(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=xE(t);return m=Z("{operationName}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json()),g}else{const f=wE(t);return m=Z("{operationName}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json()),g}}async fetchPredictVideosOperationInternal(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=vE(t);return c=Z("{resourceName}:fetchPredictOperation",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a}else throw new Error("This method is only supported by the Vertex AI.")}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function bp(n){const t={};if(u(n,["languageCodes"])!==void 0)throw new Error("languageCodes parameter is not supported in Gemini API.");return t}function jb(n){const t={},i=u(n,["apiKey"]);if(i!=null&&h(t,["apiKey"],i),u(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(u(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(u(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(u(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(u(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(u(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return t}function eR(n){const t={},i=u(n,["data"]);if(i!=null&&h(t,["data"],i),u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const r=u(n,["mimeType"]);return r!=null&&h(t,["mimeType"],r),t}function tR(n){const t={},i=u(n,["parts"]);if(i!=null){let a=i;Array.isArray(a)&&(a=a.map(c=>cR(c))),h(t,["parts"],a)}const r=u(n,["role"]);return r!=null&&h(t,["role"],r),t}function nR(n,t,i){const r={},a=u(t,["expireTime"]);i!==void 0&&a!=null&&h(i,["expireTime"],a);const c=u(t,["newSessionExpireTime"]);i!==void 0&&c!=null&&h(i,["newSessionExpireTime"],c);const g=u(t,["uses"]);i!==void 0&&g!=null&&h(i,["uses"],g);const m=u(t,["liveConnectConstraints"]);i!==void 0&&m!=null&&h(i,["bidiGenerateContentSetup"],uR(n,m));const y=u(t,["lockAdditionalFields"]);return i!==void 0&&y!=null&&h(i,["fieldMask"],y),r}function oR(n,t){const i={},r=u(t,["config"]);return r!=null&&h(i,["config"],nR(n,r,i)),i}function iR(n){const t={};if(u(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=u(n,["fileUri"]);i!=null&&h(t,["fileUri"],i);const r=u(n,["mimeType"]);return r!=null&&h(t,["mimeType"],r),t}function sR(n){const t={},i=u(n,["id"]);i!=null&&h(t,["id"],i);const r=u(n,["args"]);r!=null&&h(t,["args"],r);const a=u(n,["name"]);if(a!=null&&h(t,["name"],a),u(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function rR(n){const t={},i=u(n,["authConfig"]);i!=null&&h(t,["authConfig"],jb(i));const r=u(n,["enableWidget"]);return r!=null&&h(t,["enableWidget"],r),t}function aR(n){const t={},i=u(n,["searchTypes"]);if(i!=null&&h(t,["searchTypes"],i),u(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(u(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const r=u(n,["timeRangeFilter"]);return r!=null&&h(t,["timeRangeFilter"],r),t}function lR(n,t){const i={},r=u(n,["generationConfig"]);t!==void 0&&r!=null&&h(t,["setup","generationConfig"],r);const a=u(n,["responseModalities"]);t!==void 0&&a!=null&&h(t,["setup","generationConfig","responseModalities"],a);const c=u(n,["temperature"]);t!==void 0&&c!=null&&h(t,["setup","generationConfig","temperature"],c);const g=u(n,["topP"]);t!==void 0&&g!=null&&h(t,["setup","generationConfig","topP"],g);const m=u(n,["topK"]);t!==void 0&&m!=null&&h(t,["setup","generationConfig","topK"],m);const y=u(n,["maxOutputTokens"]);t!==void 0&&y!=null&&h(t,["setup","generationConfig","maxOutputTokens"],y);const f=u(n,["mediaResolution"]);t!==void 0&&f!=null&&h(t,["setup","generationConfig","mediaResolution"],f);const v=u(n,["seed"]);t!==void 0&&v!=null&&h(t,["setup","generationConfig","seed"],v);const T=u(n,["speechConfig"]);t!==void 0&&T!=null&&h(t,["setup","generationConfig","speechConfig"],Ec(T));const _=u(n,["thinkingConfig"]);t!==void 0&&_!=null&&h(t,["setup","generationConfig","thinkingConfig"],_);const C=u(n,["enableAffectiveDialog"]);t!==void 0&&C!=null&&h(t,["setup","generationConfig","enableAffectiveDialog"],C);const A=u(n,["systemInstruction"]);t!==void 0&&A!=null&&h(t,["setup","systemInstruction"],tR(et(A)));const M=u(n,["tools"]);if(t!==void 0&&M!=null){let V=gi(M);Array.isArray(V)&&(V=V.map(K=>gR(hi(K)))),h(t,["setup","tools"],V)}const x=u(n,["sessionResumption"]);t!==void 0&&x!=null&&h(t,["setup","sessionResumption"],hR(x));const U=u(n,["inputAudioTranscription"]);t!==void 0&&U!=null&&h(t,["setup","inputAudioTranscription"],bp(U));const Y=u(n,["outputAudioTranscription"]);t!==void 0&&Y!=null&&h(t,["setup","outputAudioTranscription"],bp(Y));const P=u(n,["realtimeInputConfig"]);t!==void 0&&P!=null&&h(t,["setup","realtimeInputConfig"],P);const J=u(n,["contextWindowCompression"]);t!==void 0&&J!=null&&h(t,["setup","contextWindowCompression"],J);const Q=u(n,["proactivity"]);if(t!==void 0&&Q!=null&&h(t,["setup","proactivity"],Q),u(n,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return i}function uR(n,t){const i={},r=u(t,["model"]);r!=null&&h(i,["setup","model"],Ae(n,r));const a=u(t,["config"]);return a!=null&&h(i,["config"],lR(a,i)),i}function cR(n){const t={},i=u(n,["mediaResolution"]);i!=null&&h(t,["mediaResolution"],i);const r=u(n,["codeExecutionResult"]);r!=null&&h(t,["codeExecutionResult"],r);const a=u(n,["executableCode"]);a!=null&&h(t,["executableCode"],a);const c=u(n,["fileData"]);c!=null&&h(t,["fileData"],iR(c));const g=u(n,["functionCall"]);g!=null&&h(t,["functionCall"],sR(g));const m=u(n,["functionResponse"]);m!=null&&h(t,["functionResponse"],m);const y=u(n,["inlineData"]);y!=null&&h(t,["inlineData"],eR(y));const f=u(n,["text"]);f!=null&&h(t,["text"],f);const v=u(n,["thought"]);v!=null&&h(t,["thought"],v);const T=u(n,["thoughtSignature"]);T!=null&&h(t,["thoughtSignature"],T);const _=u(n,["videoMetadata"]);_!=null&&h(t,["videoMetadata"],_);const C=u(n,["toolCall"]);C!=null&&h(t,["toolCall"],C);const A=u(n,["toolResponse"]);return A!=null&&h(t,["toolResponse"],A),t}function hR(n){const t={},i=u(n,["handle"]);if(i!=null&&h(t,["handle"],i),u(n,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return t}function gR(n){const t={};if(u(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=u(n,["computerUse"]);i!=null&&h(t,["computerUse"],i);const r=u(n,["fileSearch"]);r!=null&&h(t,["fileSearch"],r);const a=u(n,["googleSearch"]);a!=null&&h(t,["googleSearch"],aR(a));const c=u(n,["googleMaps"]);c!=null&&h(t,["googleMaps"],rR(c));const g=u(n,["codeExecution"]);if(g!=null&&h(t,["codeExecution"],g),u(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const m=u(n,["functionDeclarations"]);if(m!=null){let T=m;Array.isArray(T)&&(T=T.map(_=>_)),h(t,["functionDeclarations"],T)}const y=u(n,["googleSearchRetrieval"]);if(y!=null&&h(t,["googleSearchRetrieval"],y),u(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const f=u(n,["urlContext"]);f!=null&&h(t,["urlContext"],f);const v=u(n,["mcpServers"]);if(v!=null){let T=v;Array.isArray(T)&&(T=T.map(_=>_)),h(t,["mcpServers"],T)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function dR(n){const t=[];for(const i in n)if(Object.prototype.hasOwnProperty.call(n,i)){const r=n[i];if(typeof r=="object"&&r!=null&&Object.keys(r).length>0){const a=Object.keys(r).map(c=>`${i}.${c}`);t.push(...a)}else t.push(i)}return t.join(",")}function fR(n,t){let i=null;const r=n.bidiGenerateContentSetup;if(typeof r=="object"&&r!==null&&"setup"in r){const c=r.setup;typeof c=="object"&&c!==null?(n.bidiGenerateContentSetup=c,i=c):delete n.bidiGenerateContentSetup}else r!==void 0&&delete n.bidiGenerateContentSetup;const a=n.fieldMask;if(i){const c=dR(i);if(Array.isArray(t==null?void 0:t.lockAdditionalFields)&&(t==null?void 0:t.lockAdditionalFields.length)===0)c?n.fieldMask=c:delete n.fieldMask;else if(t!=null&&t.lockAdditionalFields&&t.lockAdditionalFields.length>0&&a!==null&&Array.isArray(a)&&a.length>0){const g=["temperature","topK","topP","maxOutputTokens","responseModalities","seed","speechConfig"];let m=[];a.length>0&&(m=a.map(f=>g.includes(f)?`generationConfig.${f}`:f));const y=[];c&&y.push(c),m.length>0&&y.push(...m),y.length>0?n.fieldMask=y.join(","):delete n.fieldMask}else delete n.fieldMask}else a!==null&&Array.isArray(a)&&a.length>0?n.fieldMask=a.join(","):delete n.fieldMask;return n}class mR extends Cn{constructor(t){super(),this.apiClient=t}async create(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");{const m=oR(this.apiClient,t);c=Z("auth_tokens",m._url),g=m._query,delete m.config,delete m._url,delete m._query;const y=fR(m,t.config);return a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),a.then(f=>f)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function pR(n,t){const i={},r=u(n,["force"]);return t!==void 0&&r!=null&&h(t,["_query","force"],r),i}function yR(n){const t={},i=u(n,["name"]);i!=null&&h(t,["_url","name"],i);const r=u(n,["config"]);return r!=null&&pR(r,t),t}function vR(n){const t={},i=u(n,["name"]);return i!=null&&h(t,["_url","name"],i),t}function TR(n,t){const i={},r=u(n,["pageSize"]);t!==void 0&&r!=null&&h(t,["_query","pageSize"],r);const a=u(n,["pageToken"]);return t!==void 0&&a!=null&&h(t,["_query","pageToken"],a),i}function _R(n){const t={},i=u(n,["parent"]);i!=null&&h(t,["_url","parent"],i);const r=u(n,["config"]);return r!=null&&TR(r,t),t}function SR(n){const t={},i=u(n,["sdkHttpResponse"]);i!=null&&h(t,["sdkHttpResponse"],i);const r=u(n,["nextPageToken"]);r!=null&&h(t,["nextPageToken"],r);const a=u(n,["documents"]);if(a!=null){let c=a;Array.isArray(c)&&(c=c.map(g=>g)),h(t,["documents"],c)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ER extends Cn{constructor(t){super(),this.apiClient=t,this.list=async i=>new _o(Sn.PAGED_ITEM_DOCUMENTS,r=>this.listInternal({parent:i.parent,config:r.config}),await this.listInternal(i),i)}async get(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=vR(t);return c=Z("{name}",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>y)}}async delete(t){var i,r;let a="",c={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=yR(t);a=Z("{name}",g._url),c=g._query,delete g._url,delete g._query,await this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(g),httpMethod:"DELETE",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal})}}async listInternal(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=_R(t);return c=Z("{parent}/documents",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=SR(y),v=new HE;return Object.assign(v,f),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class CR extends Cn{constructor(t,i=new ER(t)){super(),this.apiClient=t,this.documents=i,this.list=async(r={})=>new _o(Sn.PAGED_ITEM_FILE_SEARCH_STORES,a=>this.listInternal(a),await this.listInternal(r),r)}async uploadToFileSearchStore(t){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files to a file search store.");return this.apiClient.uploadFileToFileSearchStore(t.fileSearchStoreName,t.file,t.config)}async create(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=cb(t);return c=Z("fileSearchStores",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>y)}}async get(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=db(t);return c=Z("{name}",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>y)}}async delete(t){var i,r;let a="",c={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=gb(t);a=Z("{name}",g._url),c=g._query,delete g._url,delete g._query,await this.apiClient.request({path:a,queryParams:c,body:JSON.stringify(g),httpMethod:"DELETE",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal})}}async listInternal(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=Tb(t);return c=Z("fileSearchStores",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=_b(y),v=new BE;return Object.assign(v,f),v})}}async uploadToFileSearchStoreInternal(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=Sb(t);return c=Z("upload/v1beta/{file_search_store_name}:uploadToFileSearchStore",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=Eb(y),v=new qE;return Object.assign(v,f),v})}}async importFile(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=pb(t);return c=Z("{file_search_store_name}:importFile",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json()),a.then(y=>{const f=mb(y),v=new yc;return Object.assign(v,f),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let by=function(){const{crypto:n}=globalThis;if(n!=null&&n.randomUUID)return by=n.randomUUID.bind(n),n.randomUUID();const t=new Uint8Array(1),i=n?()=>n.getRandomValues(t)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,r=>(+r^i()&15>>+r/4).toString(16))};const AR=()=>by();/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function tc(n){return typeof n=="object"&&n!==null&&("name"in n&&n.name==="AbortError"||"message"in n&&String(n.message).includes("FetchRequestCanceledException"))}const nc=n=>{if(n instanceof Error)return n;if(typeof n=="object"&&n!==null){try{if(Object.prototype.toString.call(n)==="[object Error]"){const t=new Error(n.message,n.cause?{cause:n.cause}:{});return n.stack&&(t.stack=n.stack),n.cause&&!t.cause&&(t.cause=n.cause),n.name&&(t.name=n.name),t}}catch{}try{return new Error(JSON.stringify(n))}catch{}}return new Error(n)};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Pt extends Error{}class ht extends Pt{constructor(t,i,r,a){super(`${ht.makeMessage(t,i,r)}`),this.status=t,this.headers=a,this.error=i}static makeMessage(t,i,r){const a=i!=null&&i.message?typeof i.message=="string"?i.message:JSON.stringify(i.message):i?JSON.stringify(i):r;return t&&a?`${t} ${a}`:t?`${t} status code (no body)`:a||"(no status code or body)"}static generate(t,i,r,a){if(!t||!a)return new ra({message:r,cause:nc(i)});const c=i;return t===400?new My(t,c,r,a):t===401?new Ny(t,c,r,a):t===403?new Iy(t,c,r,a):t===404?new Dy(t,c,r,a):t===409?new ky(t,c,r,a):t===422?new Uy(t,c,r,a):t===429?new zy(t,c,r,a):t>=500?new Ly(t,c,r,a):new ht(t,c,r,a)}}class oc extends ht{constructor({message:t}={}){super(void 0,void 0,t||"Request was aborted.",void 0)}}class ra extends ht{constructor({message:t,cause:i}){super(void 0,void 0,t||"Connection error.",void 0),i&&(this.cause=i)}}class Ry extends ra{constructor({message:t}={}){super({message:t??"Request timed out."})}}class My extends ht{}class Ny extends ht{}class Iy extends ht{}class Dy extends ht{}class ky extends ht{}class Uy extends ht{}class zy extends ht{}class Ly extends ht{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const wR=/^[a-z][a-z0-9+.-]*:/i,xR=n=>wR.test(n);let ic=n=>(ic=Array.isArray,ic(n));const bR=ic;let RR=bR;const Rp=RR;function Mp(n){if(!n)return!0;for(const t in n)return!1;return!0}function MR(n,t){return Object.prototype.hasOwnProperty.call(n,t)}const NR=(n,t)=>{if(typeof t!="number"||!Number.isInteger(t))throw new Pt(`${n} must be an integer`);if(t<0)throw new Pt(`${n} must be a positive integer`);return t},IR=n=>{try{return JSON.parse(n)}catch{return}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const DR=n=>new Promise(t=>setTimeout(t,n));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function kR(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new GeminiNextGenAPIClient({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function Hy(...n){const t=globalThis.ReadableStream;if(typeof t>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new t(...n)}function UR(n){let t=Symbol.asyncIterator in n?n[Symbol.asyncIterator]():n[Symbol.iterator]();return Hy({start(){},async pull(i){const{done:r,value:a}=await t.next();r?i.close():i.enqueue(a)},async cancel(){var i;await((i=t.return)===null||i===void 0?void 0:i.call(t))}})}function By(n){if(n[Symbol.asyncIterator])return n;const t=n.getReader();return{async next(){try{const i=await t.read();return i!=null&&i.done&&t.releaseLock(),i}catch(i){throw t.releaseLock(),i}},async return(){const i=t.cancel();return t.releaseLock(),await i,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function zR(n){var t,i;if(n===null||typeof n!="object")return;if(n[Symbol.asyncIterator]){await((i=(t=n[Symbol.asyncIterator]()).return)===null||i===void 0?void 0:i.call(t));return}const r=n.getReader(),a=r.cancel();r.releaseLock(),await a}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const LR=({headers:n,body:t})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(t)});/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function HR(n){return Object.entries(n).filter(([t,i])=>typeof i<"u").map(([t,i])=>{if(typeof i=="string"||typeof i=="number"||typeof i=="boolean")return`${encodeURIComponent(t)}=${encodeURIComponent(i)}`;if(i===null)return`${encodeURIComponent(t)}=`;throw new Pt(`Cannot stringify type ${typeof i}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const BR="0.0.1";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const qy=()=>{var n;if(typeof File>"u"){const{process:t}=globalThis,i=typeof((n=t==null?void 0:t.versions)===null||n===void 0?void 0:n.node)=="string"&&parseInt(t.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(i?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function Pu(n,t,i){return qy(),new File(n,t??"unknown_file",i)}function qR(n){return(typeof n=="object"&&n!==null&&("name"in n&&n.name&&String(n.name)||"url"in n&&n.url&&String(n.url)||"filename"in n&&n.filename&&String(n.filename)||"path"in n&&n.path&&String(n.path))||"").split(/[\\/]/).pop()||void 0}const PR=n=>n!=null&&typeof n=="object"&&typeof n[Symbol.asyncIterator]=="function";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Py=n=>n!=null&&typeof n=="object"&&typeof n.size=="number"&&typeof n.type=="string"&&typeof n.text=="function"&&typeof n.slice=="function"&&typeof n.arrayBuffer=="function",GR=n=>n!=null&&typeof n=="object"&&typeof n.name=="string"&&typeof n.lastModified=="number"&&Py(n),VR=n=>n!=null&&typeof n=="object"&&typeof n.url=="string"&&typeof n.blob=="function";async function OR(n,t,i){if(qy(),n=await n,GR(n))return n instanceof File?n:Pu([await n.arrayBuffer()],n.name);if(VR(n)){const a=await n.blob();return t||(t=new URL(n.url).pathname.split(/[\\/]/).pop()),Pu(await sc(a),t,i)}const r=await sc(n);if(t||(t=qR(n)),!(i!=null&&i.type)){const a=r.find(c=>typeof c=="object"&&"type"in c&&c.type);typeof a=="string"&&(i=Object.assign(Object.assign({},i),{type:a}))}return Pu(r,t,i)}async function sc(n){var t,i,r,a,c;let g=[];if(typeof n=="string"||ArrayBuffer.isView(n)||n instanceof ArrayBuffer)g.push(n);else if(Py(n))g.push(n instanceof Blob?n:await n.arrayBuffer());else if(PR(n))try{for(var m=!0,y=Wt(n),f;f=await y.next(),t=f.done,!t;m=!0){a=f.value,m=!1;const v=a;g.push(...await sc(v))}}catch(v){i={error:v}}finally{try{!m&&!t&&(r=y.return)&&await r.call(y)}finally{if(i)throw i.error}}else{const v=(c=n==null?void 0:n.constructor)===null||c===void 0?void 0:c.name;throw new Error(`Unexpected data type: ${typeof n}${v?`; constructor: ${v}`:""}${FR(n)}`)}return g}function FR(n){return typeof n!="object"||n===null?"":`; props: [${Object.getOwnPropertyNames(n).map(i=>`"${i}"`).join(", ")}]`}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Gy{constructor(t){this._client=t}}Gy._key=[];/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Vy(n){return n.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}const Np=Object.freeze(Object.create(null)),YR=(n=Vy)=>(function(i,...r){if(i.length===1)return i[0];let a=!1;const c=[],g=i.reduce((v,T,_)=>{var C,A,M;/[?#]/.test(T)&&(a=!0);const x=r[_];let U=(a?encodeURIComponent:n)(""+x);return _!==r.length&&(x==null||typeof x=="object"&&x.toString===((M=Object.getPrototypeOf((A=Object.getPrototypeOf((C=x.hasOwnProperty)!==null&&C!==void 0?C:Np))!==null&&A!==void 0?A:Np))===null||M===void 0?void 0:M.toString))&&(U=x+"",c.push({start:v.length+T.length,length:U.length,error:`Value of type ${Object.prototype.toString.call(x).slice(8,-1)} is not a valid path parameter`})),v+T+(_===r.length?"":U)},""),m=g.split(/[?#]/,1)[0],y=/(^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi;let f;for(;(f=y.exec(m))!==null;){const v=f[0].startsWith("/"),T=v?1:0,_=v?f[0].slice(1):f[0];c.push({start:f.index+T,length:_.length,error:`Value "${_}" can't be safely passed as a path parameter`})}if(c.sort((v,T)=>v.start-T.start),c.length>0){let v=0;const T=c.reduce((_,C)=>{const A=" ".repeat(C.start-v),M="^".repeat(C.length);return v=C.start+C.length,_+A+M},"");throw new Pt(`Path parameters result in path with invalid segments:
${c.map(_=>_.error).join(`
`)}
${g}
${T}`)}return g}),Br=YR(Vy);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Oy extends Gy{create(t,i){var r;const{api_version:a=this._client.apiVersion}=t,c=Zr(t,["api_version"]);if("model"in c&&"agent_config"in c)throw new Pt("Invalid request: specified `model` and `agent_config`. If specifying `model`, use `generation_config`.");if("agent"in c&&"generation_config"in c)throw new Pt("Invalid request: specified `agent` and `generation_config`. If specifying `agent`, use `agent_config`.");return this._client.post(Br`/${a}/interactions`,Object.assign(Object.assign({body:c},i),{stream:(r=t.stream)!==null&&r!==void 0?r:!1}))}delete(t,i={},r){const{api_version:a=this._client.apiVersion}=i??{};return this._client.delete(Br`/${a}/interactions/${t}`,r)}cancel(t,i={},r){const{api_version:a=this._client.apiVersion}=i??{};return this._client.post(Br`/${a}/interactions/${t}/cancel`,r)}get(t,i={},r){var a;const c=i??{},{api_version:g=this._client.apiVersion}=c,m=Zr(c,["api_version"]);return this._client.get(Br`/${g}/interactions/${t}`,Object.assign(Object.assign({query:m},r),{stream:(a=i==null?void 0:i.stream)!==null&&a!==void 0?a:!1}))}}Oy._key=Object.freeze(["interactions"]);class Fy extends Oy{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function WR(n){let t=0;for(const a of n)t+=a.length;const i=new Uint8Array(t);let r=0;for(const a of n)i.set(a,r),r+=a.length;return i}let qr;function Ac(n){let t;return(qr??(t=new globalThis.TextEncoder,qr=t.encode.bind(t)))(n)}let Pr;function Ip(n){let t;return(Pr??(t=new globalThis.TextDecoder,Pr=t.decode.bind(t)))(n)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class aa{constructor(){this.buffer=new Uint8Array,this.carriageReturnIndex=null,this.searchIndex=0}decode(t){var i;if(t==null)return[];const r=t instanceof ArrayBuffer?new Uint8Array(t):typeof t=="string"?Ac(t):t;this.buffer=WR([this.buffer,r]);const a=[];let c;for(;(c=JR(this.buffer,(i=this.carriageReturnIndex)!==null&&i!==void 0?i:this.searchIndex))!=null;){if(c.carriage&&this.carriageReturnIndex==null){this.carriageReturnIndex=c.index;continue}if(this.carriageReturnIndex!=null&&(c.index!==this.carriageReturnIndex+1||c.carriage)){a.push(Ip(this.buffer.subarray(0,this.carriageReturnIndex-1))),this.buffer=this.buffer.subarray(this.carriageReturnIndex),this.carriageReturnIndex=null,this.searchIndex=0;continue}const g=this.carriageReturnIndex!==null?c.preceding-1:c.preceding,m=Ip(this.buffer.subarray(0,g));a.push(m),this.buffer=this.buffer.subarray(c.index),this.carriageReturnIndex=null,this.searchIndex=0}return this.searchIndex=Math.max(0,this.buffer.length-1),a}flush(){return this.buffer.length?this.decode(`
`):[]}}aa.NEWLINE_CHARS=new Set([`
`,"\r"]);aa.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function JR(n,t){const a=t??0,c=n.indexOf(10,a),g=n.indexOf(13,a);if(c===-1&&g===-1)return null;let m;return c!==-1&&g!==-1?m=Math.min(c,g):m=c!==-1?c:g,n[m]===10?{preceding:m,index:m+1,carriage:!1}:{preceding:m,index:m+1,carriage:!0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $r={off:0,error:200,warn:300,info:400,debug:500},Dp=(n,t,i)=>{if(n){if(MR($r,n))return n;ct(i).warn(`${t} was set to ${JSON.stringify(n)}, expected one of ${JSON.stringify(Object.keys($r))}`)}};function fs(){}function Gr(n,t,i){return!t||$r[n]>$r[i]?fs:t[n].bind(t)}const KR={error:fs,warn:fs,info:fs,debug:fs};let kp=new WeakMap;function ct(n){var t;const i=n.logger,r=(t=n.logLevel)!==null&&t!==void 0?t:"off";if(!i)return KR;const a=kp.get(i);if(a&&a[0]===r)return a[1];const c={error:Gr("error",i,r),warn:Gr("warn",i,r),info:Gr("info",i,r),debug:Gr("debug",i,r)};return kp.set(i,[r,c]),c}const To=n=>(n.options&&(n.options=Object.assign({},n.options),delete n.options.headers),n.headers&&(n.headers=Object.fromEntries((n.headers instanceof Headers?[...n.headers]:Object.entries(n.headers)).map(([t,i])=>[t,t.toLowerCase()==="x-goog-api-key"||t.toLowerCase()==="authorization"||t.toLowerCase()==="cookie"||t.toLowerCase()==="set-cookie"?"***":i]))),"retryOfRequestLogID"in n&&(n.retryOfRequestLogID&&(n.retryOf=n.retryOfRequestLogID),delete n.retryOfRequestLogID),n);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ri{constructor(t,i,r){this.iterator=t,this.controller=i,this.client=r}static fromSSEResponse(t,i,r){let a=!1;const c=r?ct(r):console;function g(){return Yt(this,arguments,function*(){var y,f,v,T;if(a)throw new Pt("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");a=!0;let _=!1;try{try{for(var C=!0,A=Wt(XR(t,i)),M;M=yield le(A.next()),y=M.done,!y;C=!0){T=M.value,C=!1;const x=T;if(!_)if(x.data.startsWith("[DONE]")){_=!0;continue}else try{yield yield le(JSON.parse(x.data))}catch(U){throw c.error("Could not parse message into JSON:",x.data),c.error("From chunk:",x.raw),U}}}catch(x){f={error:x}}finally{try{!C&&!y&&(v=A.return)&&(yield le(v.call(A)))}finally{if(f)throw f.error}}_=!0}catch(x){if(tc(x))return yield le(void 0);throw x}finally{_||i.abort()}})}return new ri(g,i,r)}static fromReadableStream(t,i,r){let a=!1;function c(){return Yt(this,arguments,function*(){var y,f,v,T;const _=new aa,C=By(t);try{for(var A=!0,M=Wt(C),x;x=yield le(M.next()),y=x.done,!y;A=!0){T=x.value,A=!1;const U=T;for(const Y of _.decode(U))yield yield le(Y)}}catch(U){f={error:U}}finally{try{!A&&!y&&(v=M.return)&&(yield le(v.call(M)))}finally{if(f)throw f.error}}for(const U of _.flush())yield yield le(U)})}function g(){return Yt(this,arguments,function*(){var y,f,v,T;if(a)throw new Pt("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");a=!0;let _=!1;try{try{for(var C=!0,A=Wt(c()),M;M=yield le(A.next()),y=M.done,!y;C=!0){T=M.value,C=!1;const x=T;_||x&&(yield yield le(JSON.parse(x)))}}catch(x){f={error:x}}finally{try{!C&&!y&&(v=A.return)&&(yield le(v.call(A)))}finally{if(f)throw f.error}}_=!0}catch(x){if(tc(x))return yield le(void 0);throw x}finally{_||i.abort()}})}return new ri(g,i,r)}[Symbol.asyncIterator](){return this.iterator()}tee(){const t=[],i=[],r=this.iterator(),a=c=>({next:()=>{if(c.length===0){const g=r.next();t.push(g),i.push(g)}return c.shift()}});return[new ri(()=>a(t),this.controller,this.client),new ri(()=>a(i),this.controller,this.client)]}toReadableStream(){const t=this;let i;return Hy({async start(){i=t[Symbol.asyncIterator]()},async pull(r){try{const{value:a,done:c}=await i.next();if(c)return r.close();const g=Ac(JSON.stringify(a)+`
`);r.enqueue(g)}catch(a){r.error(a)}},async cancel(){var r;await((r=i.return)===null||r===void 0?void 0:r.call(i))}})}}function XR(n,t){return Yt(this,arguments,function*(){var r,a,c,g;if(!n.body)throw t.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new Pt("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new Pt("Attempted to iterate over a response with no body");const m=new ZR,y=new aa,f=By(n.body);try{for(var v=!0,T=Wt(QR(f)),_;_=yield le(T.next()),r=_.done,!r;v=!0){g=_.value,v=!1;const C=g;for(const A of y.decode(C)){const M=m.decode(A);M&&(yield yield le(M))}}}catch(C){a={error:C}}finally{try{!v&&!r&&(c=T.return)&&(yield le(c.call(T)))}finally{if(a)throw a.error}}for(const C of y.flush()){const A=m.decode(C);A&&(yield yield le(A))}})}function QR(n){return Yt(this,arguments,function*(){var i,r,a,c;try{for(var g=!0,m=Wt(n),y;y=yield le(m.next()),i=y.done,!i;g=!0){c=y.value,g=!1;const f=c;if(f==null)continue;const v=f instanceof ArrayBuffer?new Uint8Array(f):typeof f=="string"?Ac(f):f;yield yield le(v)}}catch(f){r={error:f}}finally{try{!g&&!i&&(a=m.return)&&(yield le(a.call(m)))}finally{if(r)throw r.error}}})}class ZR{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(t){if(t.endsWith("\r")&&(t=t.substring(0,t.length-1)),!t){if(!this.event&&!this.data.length)return null;const c={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],c}if(this.chunks.push(t),t.startsWith(":"))return null;let[i,r,a]=$R(t,":");return a.startsWith(" ")&&(a=a.substring(1)),i==="event"?this.event=a:i==="data"&&this.data.push(a),null}}function $R(n,t){const i=n.indexOf(t);return i!==-1?[n.substring(0,i),t,n.substring(i+t.length)]:[n,"",""]}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function jR(n,t){const{response:i,requestLogID:r,retryOfRequestLogID:a,startTime:c}=t,g=await(async()=>{var m;if(t.options.stream)return ct(n).debug("response",i.status,i.url,i.headers,i.body),t.options.__streamClass?t.options.__streamClass.fromSSEResponse(i,t.controller,n):ri.fromSSEResponse(i,t.controller,n);if(i.status===204)return null;if(t.options.__binaryResponse)return i;const y=i.headers.get("content-type"),f=(m=y==null?void 0:y.split(";")[0])===null||m===void 0?void 0:m.trim();return(f==null?void 0:f.includes("application/json"))||(f==null?void 0:f.endsWith("+json"))?i.headers.get("content-length")==="0"?void 0:await i.json():await i.text()})();return ct(n).debug(`[${r}] response parsed`,To({retryOfRequestLogID:a,url:i.url,status:i.status,body:g,durationMs:Date.now()-c})),g}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class wc extends Promise{constructor(t,i,r=jR){super(a=>{a(null)}),this.responsePromise=i,this.parseResponse=r,this.client=t}_thenUnwrap(t){return new wc(this.client,this.responsePromise,async(i,r)=>t(await this.parseResponse(i,r),r))}asResponse(){return this.responsePromise.then(t=>t.response)}async withResponse(){const[t,i]=await Promise.all([this.parse(),this.asResponse()]);return{data:t,response:i}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(t=>this.parseResponse(this.client,t))),this.parsedPromise}then(t,i){return this.parse().then(t,i)}catch(t){return this.parse().catch(t)}finally(t){return this.parse().finally(t)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Yy=Symbol("brand.privateNullableHeaders");function*eM(n){if(!n)return;if(Yy in n){const{values:r,nulls:a}=n;yield*r.entries();for(const c of a)yield[c,null];return}let t=!1,i;n instanceof Headers?i=n.entries():Rp(n)?i=n:(t=!0,i=Object.entries(n??{}));for(let r of i){const a=r[0];if(typeof a!="string")throw new TypeError("expected header name to be a string");const c=Rp(r[1])?r[1]:[r[1]];let g=!1;for(const m of c)m!==void 0&&(t&&!g&&(g=!0,yield[a,null]),yield[a,m])}}const ds=n=>{const t=new Headers,i=new Set;for(const r of n){const a=new Set;for(const[c,g]of eM(r)){const m=c.toLowerCase();a.has(m)||(t.delete(c),a.add(m)),g===null?(t.delete(c),i.add(m)):(t.append(c,g),i.delete(m))}}return{[Yy]:!0,values:t,nulls:i}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Gu=n=>{var t,i,r,a,c,g;if(typeof globalThis.process<"u")return(r=(i=(t=gE)===null||t===void 0?void 0:t[n])===null||i===void 0?void 0:i.trim())!==null&&r!==void 0?r:void 0;if(typeof globalThis.Deno<"u")return(g=(c=(a=globalThis.Deno.env)===null||a===void 0?void 0:a.get)===null||c===void 0?void 0:c.call(a,n))===null||g===void 0?void 0:g.trim()};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Wy;class la{constructor(t){var i,r,a,c,g,m,y,{baseURL:f=Gu("GEMINI_NEXT_GEN_API_BASE_URL"),apiKey:v=(i=Gu("GEMINI_API_KEY"))!==null&&i!==void 0?i:null,apiVersion:T="v1beta"}=t,_=Zr(t,["baseURL","apiKey","apiVersion"]);const C=Object.assign(Object.assign({apiKey:v,apiVersion:T},_),{baseURL:f||"https://generativelanguage.googleapis.com"});this.baseURL=C.baseURL,this.timeout=(r=C.timeout)!==null&&r!==void 0?r:la.DEFAULT_TIMEOUT,this.logger=(a=C.logger)!==null&&a!==void 0?a:console;const A="warn";this.logLevel=A,this.logLevel=(g=(c=Dp(C.logLevel,"ClientOptions.logLevel",this))!==null&&c!==void 0?c:Dp(Gu("GEMINI_NEXT_GEN_API_LOG"),"process.env['GEMINI_NEXT_GEN_API_LOG']",this))!==null&&g!==void 0?g:A,this.fetchOptions=C.fetchOptions,this.maxRetries=(m=C.maxRetries)!==null&&m!==void 0?m:2,this.fetch=(y=C.fetch)!==null&&y!==void 0?y:kR(),this.encoder=LR,this._options=C,this.apiKey=v,this.apiVersion=T,this.clientAdapter=C.clientAdapter}withOptions(t){return new this.constructor(Object.assign(Object.assign(Object.assign({},this._options),{baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,apiVersion:this.apiVersion}),t))}baseURLOverridden(){return this.baseURL!=="https://generativelanguage.googleapis.com"}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:t,nulls:i}){if(!(t.has("authorization")||t.has("x-goog-api-key"))&&!(this.apiKey&&t.get("x-goog-api-key"))&&!i.has("x-goog-api-key"))throw new Error('Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-goog-api-key" headers to be explicitly omitted')}async authHeaders(t){const i=ds([t.headers]);if(!(i.values.has("authorization")||i.values.has("x-goog-api-key"))){if(this.apiKey)return ds([{"x-goog-api-key":this.apiKey}]);if(this.clientAdapter.isVertexAI())return ds([await this.clientAdapter.getAuthHeaders()])}}stringifyQuery(t){return HR(t)}getUserAgent(){return`${this.constructor.name}/JS ${BR}`}defaultIdempotencyKey(){return`stainless-node-retry-${AR()}`}makeStatusError(t,i,r,a){return ht.generate(t,i,r,a)}buildURL(t,i,r){const a=!this.baseURLOverridden()&&r||this.baseURL,c=xR(t)?new URL(t):new URL(a+(a.endsWith("/")&&t.startsWith("/")?t.slice(1):t)),g=this.defaultQuery(),m=Object.fromEntries(c.searchParams);return(!Mp(g)||!Mp(m))&&(i=Object.assign(Object.assign(Object.assign({},m),g),i)),typeof i=="object"&&i&&!Array.isArray(i)&&(c.search=this.stringifyQuery(i)),c.toString()}async prepareOptions(t){if(this.clientAdapter&&this.clientAdapter.isVertexAI()&&!t.path.startsWith(`/${this.apiVersion}/projects/`)){const i=t.path.slice(this.apiVersion.length+1);t.path=`/${this.apiVersion}/projects/${this.clientAdapter.getProject()}/locations/${this.clientAdapter.getLocation()}${i}`}}async prepareRequest(t,{url:i,options:r}){}get(t,i){return this.methodRequest("get",t,i)}post(t,i){return this.methodRequest("post",t,i)}patch(t,i){return this.methodRequest("patch",t,i)}put(t,i){return this.methodRequest("put",t,i)}delete(t,i){return this.methodRequest("delete",t,i)}methodRequest(t,i,r){return this.request(Promise.resolve(r).then(a=>Object.assign({method:t,path:i},a)))}request(t,i=null){return new wc(this,this.makeRequest(t,i,void 0))}async makeRequest(t,i,r){var a,c,g;const m=await t,y=(a=m.maxRetries)!==null&&a!==void 0?a:this.maxRetries;i==null&&(i=y),await this.prepareOptions(m);const{req:f,url:v,timeout:T}=await this.buildRequest(m,{retryCount:y-i});await this.prepareRequest(f,{url:v,options:m});const _="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),C=r===void 0?"":`, retryOf: ${r}`,A=Date.now();if(ct(this).debug(`[${_}] sending request`,To({retryOfRequestLogID:r,method:m.method,url:v,options:m,headers:f.headers})),!((c=m.signal)===null||c===void 0)&&c.aborted)throw new oc;const M=new AbortController,x=await this.fetchWithTimeout(v,f,T,M).catch(nc),U=Date.now();if(x instanceof globalThis.Error){const P=`retrying, ${i} attempts remaining`;if(!((g=m.signal)===null||g===void 0)&&g.aborted)throw new oc;const J=tc(x)||/timed? ?out/i.test(String(x)+("cause"in x?String(x.cause):""));if(i)return ct(this).info(`[${_}] connection ${J?"timed out":"failed"} - ${P}`),ct(this).debug(`[${_}] connection ${J?"timed out":"failed"} (${P})`,To({retryOfRequestLogID:r,url:v,durationMs:U-A,message:x.message})),this.retryRequest(m,i,r??_);throw ct(this).info(`[${_}] connection ${J?"timed out":"failed"} - error; no more retries left`),ct(this).debug(`[${_}] connection ${J?"timed out":"failed"} (error; no more retries left)`,To({retryOfRequestLogID:r,url:v,durationMs:U-A,message:x.message})),J?new Ry:new ra({cause:x})}const Y=`[${_}${C}] ${f.method} ${v} ${x.ok?"succeeded":"failed"} with status ${x.status} in ${U-A}ms`;if(!x.ok){const P=await this.shouldRetry(x);if(i&&P){const j=`retrying, ${i} attempts remaining`;return await zR(x.body),ct(this).info(`${Y} - ${j}`),ct(this).debug(`[${_}] response error (${j})`,To({retryOfRequestLogID:r,url:x.url,status:x.status,headers:x.headers,durationMs:U-A})),this.retryRequest(m,i,r??_,x.headers)}const J=P?"error; no more retries left":"error; not retryable";ct(this).info(`${Y} - ${J}`);const Q=await x.text().catch(j=>nc(j).message),V=IR(Q),K=V?void 0:Q;throw ct(this).debug(`[${_}] response error (${J})`,To({retryOfRequestLogID:r,url:x.url,status:x.status,headers:x.headers,message:K,durationMs:Date.now()-A})),this.makeStatusError(x.status,V,K,x.headers)}return ct(this).info(Y),ct(this).debug(`[${_}] response start`,To({retryOfRequestLogID:r,url:x.url,status:x.status,headers:x.headers,durationMs:U-A})),{response:x,options:m,controller:M,requestLogID:_,retryOfRequestLogID:r,startTime:A}}async fetchWithTimeout(t,i,r,a){const c=i||{},{signal:g,method:m}=c,y=Zr(c,["signal","method"]),f=this._makeAbort(a);g&&g.addEventListener("abort",f,{once:!0});const v=setTimeout(f,r),T=globalThis.ReadableStream&&y.body instanceof globalThis.ReadableStream||typeof y.body=="object"&&y.body!==null&&Symbol.asyncIterator in y.body,_=Object.assign(Object.assign(Object.assign({signal:a.signal},T?{duplex:"half"}:{}),{method:"GET"}),y);m&&(_.method=m.toUpperCase());try{return await this.fetch.call(void 0,t,_)}finally{clearTimeout(v)}}async shouldRetry(t){const i=t.headers.get("x-should-retry");return i==="true"?!0:i==="false"?!1:t.status===408||t.status===409||t.status===429||t.status>=500}async retryRequest(t,i,r,a){var c;let g;const m=a==null?void 0:a.get("retry-after-ms");if(m){const f=parseFloat(m);Number.isNaN(f)||(g=f)}const y=a==null?void 0:a.get("retry-after");if(y&&!g){const f=parseFloat(y);Number.isNaN(f)?g=Date.parse(y)-Date.now():g=f*1e3}if(g===void 0){const f=(c=t.maxRetries)!==null&&c!==void 0?c:this.maxRetries;g=this.calculateDefaultRetryTimeoutMillis(i,f)}return await DR(g),this.makeRequest(t,i-1,r)}calculateDefaultRetryTimeoutMillis(t,i){const c=i-t,g=Math.min(.5*Math.pow(2,c),8),m=1-Math.random()*.25;return g*m*1e3}async buildRequest(t,{retryCount:i=0}={}){var r,a,c;const g=Object.assign({},t),{method:m,path:y,query:f,defaultBaseURL:v}=g,T=this.buildURL(y,f,v);"timeout"in g&&NR("timeout",g.timeout),g.timeout=(r=g.timeout)!==null&&r!==void 0?r:this.timeout;const{bodyHeaders:_,body:C}=this.buildBody({options:g}),A=await this.buildHeaders({options:t,method:m,bodyHeaders:_,retryCount:i});return{req:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({method:m,headers:A},g.signal&&{signal:g.signal}),globalThis.ReadableStream&&C instanceof globalThis.ReadableStream&&{duplex:"half"}),C&&{body:C}),(a=this.fetchOptions)!==null&&a!==void 0?a:{}),(c=g.fetchOptions)!==null&&c!==void 0?c:{}),url:T,timeout:g.timeout}}async buildHeaders({options:t,method:i,bodyHeaders:r,retryCount:a}){let c={};this.idempotencyHeader&&i!=="get"&&(t.idempotencyKey||(t.idempotencyKey=this.defaultIdempotencyKey()),c[this.idempotencyHeader]=t.idempotencyKey);const g=await this.authHeaders(t);let m=ds([c,{Accept:"application/json","User-Agent":this.getUserAgent()},this._options.defaultHeaders,r,t.headers,g]);return this.validateHeaders(m),m.values}_makeAbort(t){return()=>t.abort()}buildBody({options:{body:t,headers:i}}){if(!t)return{bodyHeaders:void 0,body:void 0};const r=ds([i]);return ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof DataView||typeof t=="string"&&r.values.has("content-type")||globalThis.Blob&&t instanceof globalThis.Blob||t instanceof FormData||t instanceof URLSearchParams||globalThis.ReadableStream&&t instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:t}:typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t&&"next"in t&&typeof t.next=="function")?{bodyHeaders:void 0,body:UR(t)}:typeof t=="object"&&r.values.get("content-type")==="application/x-www-form-urlencoded"?{bodyHeaders:{"content-type":"application/x-www-form-urlencoded"},body:this.stringifyQuery(t)}:this.encoder({body:t,headers:r})}}la.DEFAULT_TIMEOUT=6e4;class tt extends la{constructor(){super(...arguments),this.interactions=new Fy(this)}}Wy=tt;tt.GeminiNextGenAPIClient=Wy;tt.GeminiNextGenAPIClientError=Pt;tt.APIError=ht;tt.APIConnectionError=ra;tt.APIConnectionTimeoutError=Ry;tt.APIUserAbortError=oc;tt.NotFoundError=Dy;tt.ConflictError=ky;tt.RateLimitError=zy;tt.BadRequestError=My;tt.AuthenticationError=Ny;tt.InternalServerError=Ly;tt.PermissionDeniedError=Iy;tt.UnprocessableEntityError=Uy;tt.toFile=OR;tt.Interactions=Fy;/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function tM(n,t){const i={},r=u(n,["name"]);return r!=null&&h(i,["_url","name"],r),i}function nM(n,t){const i={},r=u(n,["name"]);return r!=null&&h(i,["_url","name"],r),i}function oM(n,t){const i={},r=u(n,["sdkHttpResponse"]);return r!=null&&h(i,["sdkHttpResponse"],r),i}function iM(n,t){const i={},r=u(n,["sdkHttpResponse"]);return r!=null&&h(i,["sdkHttpResponse"],r),i}function sM(n,t,i){const r={};if(u(n,["validationDataset"])!==void 0)throw new Error("validationDataset parameter is not supported in Gemini API.");const a=u(n,["tunedModelDisplayName"]);if(t!==void 0&&a!=null&&h(t,["displayName"],a),u(n,["description"])!==void 0)throw new Error("description parameter is not supported in Gemini API.");const c=u(n,["epochCount"]);t!==void 0&&c!=null&&h(t,["tuningTask","hyperparameters","epochCount"],c);const g=u(n,["learningRateMultiplier"]);if(g!=null&&h(r,["tuningTask","hyperparameters","learningRateMultiplier"],g),u(n,["exportLastCheckpointOnly"])!==void 0)throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");if(u(n,["preTunedModelCheckpointId"])!==void 0)throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");if(u(n,["adapterSize"])!==void 0)throw new Error("adapterSize parameter is not supported in Gemini API.");if(u(n,["tuningMode"])!==void 0)throw new Error("tuningMode parameter is not supported in Gemini API.");if(u(n,["customBaseModel"])!==void 0)throw new Error("customBaseModel parameter is not supported in Gemini API.");const m=u(n,["batchSize"]);t!==void 0&&m!=null&&h(t,["tuningTask","hyperparameters","batchSize"],m);const y=u(n,["learningRate"]);if(t!==void 0&&y!=null&&h(t,["tuningTask","hyperparameters","learningRate"],y),u(n,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");if(u(n,["beta"])!==void 0)throw new Error("beta parameter is not supported in Gemini API.");if(u(n,["baseTeacherModel"])!==void 0)throw new Error("baseTeacherModel parameter is not supported in Gemini API.");if(u(n,["tunedTeacherModelSource"])!==void 0)throw new Error("tunedTeacherModelSource parameter is not supported in Gemini API.");if(u(n,["sftLossWeightMultiplier"])!==void 0)throw new Error("sftLossWeightMultiplier parameter is not supported in Gemini API.");if(u(n,["outputUri"])!==void 0)throw new Error("outputUri parameter is not supported in Gemini API.");if(u(n,["encryptionSpec"])!==void 0)throw new Error("encryptionSpec parameter is not supported in Gemini API.");return r}function rM(n,t,i){const r={};let a=u(i,["config","method"]);if(a===void 0&&(a="SUPERVISED_FINE_TUNING"),a==="SUPERVISED_FINE_TUNING"){const V=u(n,["validationDataset"]);t!==void 0&&V!=null&&h(t,["supervisedTuningSpec"],Vu(V))}else if(a==="PREFERENCE_TUNING"){const V=u(n,["validationDataset"]);t!==void 0&&V!=null&&h(t,["preferenceOptimizationSpec"],Vu(V))}else if(a==="DISTILLATION"){const V=u(n,["validationDataset"]);t!==void 0&&V!=null&&h(t,["distillationSpec"],Vu(V))}const c=u(n,["tunedModelDisplayName"]);t!==void 0&&c!=null&&h(t,["tunedModelDisplayName"],c);const g=u(n,["description"]);t!==void 0&&g!=null&&h(t,["description"],g);let m=u(i,["config","method"]);if(m===void 0&&(m="SUPERVISED_FINE_TUNING"),m==="SUPERVISED_FINE_TUNING"){const V=u(n,["epochCount"]);t!==void 0&&V!=null&&h(t,["supervisedTuningSpec","hyperParameters","epochCount"],V)}else if(m==="PREFERENCE_TUNING"){const V=u(n,["epochCount"]);t!==void 0&&V!=null&&h(t,["preferenceOptimizationSpec","hyperParameters","epochCount"],V)}else if(m==="DISTILLATION"){const V=u(n,["epochCount"]);t!==void 0&&V!=null&&h(t,["distillationSpec","hyperParameters","epochCount"],V)}let y=u(i,["config","method"]);if(y===void 0&&(y="SUPERVISED_FINE_TUNING"),y==="SUPERVISED_FINE_TUNING"){const V=u(n,["learningRateMultiplier"]);t!==void 0&&V!=null&&h(t,["supervisedTuningSpec","hyperParameters","learningRateMultiplier"],V)}else if(y==="PREFERENCE_TUNING"){const V=u(n,["learningRateMultiplier"]);t!==void 0&&V!=null&&h(t,["preferenceOptimizationSpec","hyperParameters","learningRateMultiplier"],V)}else if(y==="DISTILLATION"){const V=u(n,["learningRateMultiplier"]);t!==void 0&&V!=null&&h(t,["distillationSpec","hyperParameters","learningRateMultiplier"],V)}let f=u(i,["config","method"]);if(f===void 0&&(f="SUPERVISED_FINE_TUNING"),f==="SUPERVISED_FINE_TUNING"){const V=u(n,["exportLastCheckpointOnly"]);t!==void 0&&V!=null&&h(t,["supervisedTuningSpec","exportLastCheckpointOnly"],V)}else if(f==="PREFERENCE_TUNING"){const V=u(n,["exportLastCheckpointOnly"]);t!==void 0&&V!=null&&h(t,["preferenceOptimizationSpec","exportLastCheckpointOnly"],V)}else if(f==="DISTILLATION"){const V=u(n,["exportLastCheckpointOnly"]);t!==void 0&&V!=null&&h(t,["distillationSpec","exportLastCheckpointOnly"],V)}let v=u(i,["config","method"]);if(v===void 0&&(v="SUPERVISED_FINE_TUNING"),v==="SUPERVISED_FINE_TUNING"){const V=u(n,["adapterSize"]);t!==void 0&&V!=null&&h(t,["supervisedTuningSpec","hyperParameters","adapterSize"],V)}else if(v==="PREFERENCE_TUNING"){const V=u(n,["adapterSize"]);t!==void 0&&V!=null&&h(t,["preferenceOptimizationSpec","hyperParameters","adapterSize"],V)}else if(v==="DISTILLATION"){const V=u(n,["adapterSize"]);t!==void 0&&V!=null&&h(t,["distillationSpec","hyperParameters","adapterSize"],V)}let T=u(i,["config","method"]);if(T===void 0&&(T="SUPERVISED_FINE_TUNING"),T==="SUPERVISED_FINE_TUNING"){const V=u(n,["tuningMode"]);t!==void 0&&V!=null&&h(t,["supervisedTuningSpec","tuningMode"],V)}const _=u(n,["customBaseModel"]);t!==void 0&&_!=null&&h(t,["customBaseModel"],_);let C=u(i,["config","method"]);if(C===void 0&&(C="SUPERVISED_FINE_TUNING"),C==="SUPERVISED_FINE_TUNING"){const V=u(n,["batchSize"]);t!==void 0&&V!=null&&h(t,["supervisedTuningSpec","hyperParameters","batchSize"],V)}let A=u(i,["config","method"]);if(A===void 0&&(A="SUPERVISED_FINE_TUNING"),A==="SUPERVISED_FINE_TUNING"){const V=u(n,["learningRate"]);t!==void 0&&V!=null&&h(t,["supervisedTuningSpec","hyperParameters","learningRate"],V)}const M=u(n,["labels"]);t!==void 0&&M!=null&&h(t,["labels"],M);const x=u(n,["beta"]);t!==void 0&&x!=null&&h(t,["preferenceOptimizationSpec","hyperParameters","beta"],x);const U=u(n,["baseTeacherModel"]);t!==void 0&&U!=null&&h(t,["distillationSpec","baseTeacherModel"],U);const Y=u(n,["tunedTeacherModelSource"]);t!==void 0&&Y!=null&&h(t,["distillationSpec","tunedTeacherModelSource"],Y);const P=u(n,["sftLossWeightMultiplier"]);t!==void 0&&P!=null&&h(t,["distillationSpec","hyperParameters","sftLossWeightMultiplier"],P);const J=u(n,["outputUri"]);t!==void 0&&J!=null&&h(t,["outputUri"],J);const Q=u(n,["encryptionSpec"]);return t!==void 0&&Q!=null&&h(t,["encryptionSpec"],Q),r}function aM(n,t){const i={},r=u(n,["baseModel"]);r!=null&&h(i,["baseModel"],r);const a=u(n,["preTunedModel"]);a!=null&&h(i,["preTunedModel"],a);const c=u(n,["trainingDataset"]);c!=null&&vM(c);const g=u(n,["config"]);return g!=null&&sM(g,i),i}function lM(n,t){const i={},r=u(n,["baseModel"]);r!=null&&h(i,["baseModel"],r);const a=u(n,["preTunedModel"]);a!=null&&h(i,["preTunedModel"],a);const c=u(n,["trainingDataset"]);c!=null&&TM(c,i,t);const g=u(n,["config"]);return g!=null&&rM(g,i,t),i}function uM(n,t){const i={},r=u(n,["name"]);return r!=null&&h(i,["_url","name"],r),i}function cM(n,t){const i={},r=u(n,["name"]);return r!=null&&h(i,["_url","name"],r),i}function hM(n,t,i){const r={},a=u(n,["pageSize"]);t!==void 0&&a!=null&&h(t,["_query","pageSize"],a);const c=u(n,["pageToken"]);t!==void 0&&c!=null&&h(t,["_query","pageToken"],c);const g=u(n,["filter"]);return t!==void 0&&g!=null&&h(t,["_query","filter"],g),r}function gM(n,t,i){const r={},a=u(n,["pageSize"]);t!==void 0&&a!=null&&h(t,["_query","pageSize"],a);const c=u(n,["pageToken"]);t!==void 0&&c!=null&&h(t,["_query","pageToken"],c);const g=u(n,["filter"]);return t!==void 0&&g!=null&&h(t,["_query","filter"],g),r}function dM(n,t){const i={},r=u(n,["config"]);return r!=null&&hM(r,i),i}function fM(n,t){const i={},r=u(n,["config"]);return r!=null&&gM(r,i),i}function mM(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["nextPageToken"]);a!=null&&h(i,["nextPageToken"],a);const c=u(n,["tunedModels"]);if(c!=null){let g=c;Array.isArray(g)&&(g=g.map(m=>Jy(m))),h(i,["tuningJobs"],g)}return i}function pM(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["nextPageToken"]);a!=null&&h(i,["nextPageToken"],a);const c=u(n,["tuningJobs"]);if(c!=null){let g=c;Array.isArray(g)&&(g=g.map(m=>rc(m))),h(i,["tuningJobs"],g)}return i}function yM(n,t){const i={},r=u(n,["name"]);r!=null&&h(i,["model"],r);const a=u(n,["name"]);return a!=null&&h(i,["endpoint"],a),i}function vM(n,t){const i={};if(u(n,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(u(n,["vertexDatasetResource"])!==void 0)throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");const r=u(n,["examples"]);if(r!=null){let a=r;Array.isArray(a)&&(a=a.map(c=>c)),h(i,["examples","examples"],a)}return i}function TM(n,t,i){const r={};let a=u(i,["config","method"]);if(a===void 0&&(a="SUPERVISED_FINE_TUNING"),a==="SUPERVISED_FINE_TUNING"){const g=u(n,["gcsUri"]);t!==void 0&&g!=null&&h(t,["supervisedTuningSpec","trainingDatasetUri"],g)}else if(a==="PREFERENCE_TUNING"){const g=u(n,["gcsUri"]);t!==void 0&&g!=null&&h(t,["preferenceOptimizationSpec","trainingDatasetUri"],g)}else if(a==="DISTILLATION"){const g=u(n,["gcsUri"]);t!==void 0&&g!=null&&h(t,["distillationSpec","promptDatasetUri"],g)}let c=u(i,["config","method"]);if(c===void 0&&(c="SUPERVISED_FINE_TUNING"),c==="SUPERVISED_FINE_TUNING"){const g=u(n,["vertexDatasetResource"]);t!==void 0&&g!=null&&h(t,["supervisedTuningSpec","trainingDatasetUri"],g)}else if(c==="PREFERENCE_TUNING"){const g=u(n,["vertexDatasetResource"]);t!==void 0&&g!=null&&h(t,["preferenceOptimizationSpec","trainingDatasetUri"],g)}else if(c==="DISTILLATION"){const g=u(n,["vertexDatasetResource"]);t!==void 0&&g!=null&&h(t,["distillationSpec","promptDatasetUri"],g)}if(u(n,["examples"])!==void 0)throw new Error("examples parameter is not supported in Vertex AI.");return r}function Jy(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["name"]);a!=null&&h(i,["name"],a);const c=u(n,["state"]);c!=null&&h(i,["state"],uy(c));const g=u(n,["createTime"]);g!=null&&h(i,["createTime"],g);const m=u(n,["tuningTask","startTime"]);m!=null&&h(i,["startTime"],m);const y=u(n,["tuningTask","completeTime"]);y!=null&&h(i,["endTime"],y);const f=u(n,["updateTime"]);f!=null&&h(i,["updateTime"],f);const v=u(n,["description"]);v!=null&&h(i,["description"],v);const T=u(n,["baseModel"]);T!=null&&h(i,["baseModel"],T);const _=u(n,["_self"]);return _!=null&&h(i,["tunedModel"],yM(_)),i}function rc(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["name"]);a!=null&&h(i,["name"],a);const c=u(n,["state"]);c!=null&&h(i,["state"],uy(c));const g=u(n,["createTime"]);g!=null&&h(i,["createTime"],g);const m=u(n,["startTime"]);m!=null&&h(i,["startTime"],m);const y=u(n,["endTime"]);y!=null&&h(i,["endTime"],y);const f=u(n,["updateTime"]);f!=null&&h(i,["updateTime"],f);const v=u(n,["error"]);v!=null&&h(i,["error"],v);const T=u(n,["description"]);T!=null&&h(i,["description"],T);const _=u(n,["baseModel"]);_!=null&&h(i,["baseModel"],_);const C=u(n,["tunedModel"]);C!=null&&h(i,["tunedModel"],C);const A=u(n,["preTunedModel"]);A!=null&&h(i,["preTunedModel"],A);const M=u(n,["supervisedTuningSpec"]);M!=null&&h(i,["supervisedTuningSpec"],M);const x=u(n,["preferenceOptimizationSpec"]);x!=null&&h(i,["preferenceOptimizationSpec"],x);const U=u(n,["distillationSpec"]);U!=null&&h(i,["distillationSpec"],U);const Y=u(n,["tuningDataStats"]);Y!=null&&h(i,["tuningDataStats"],Y);const P=u(n,["encryptionSpec"]);P!=null&&h(i,["encryptionSpec"],P);const J=u(n,["partnerModelTuningSpec"]);J!=null&&h(i,["partnerModelTuningSpec"],J);const Q=u(n,["customBaseModel"]);Q!=null&&h(i,["customBaseModel"],Q);const V=u(n,["evaluateDatasetRuns"]);if(V!=null){let H=V;Array.isArray(H)&&(H=H.map(X=>X)),h(i,["evaluateDatasetRuns"],H)}const K=u(n,["experiment"]);K!=null&&h(i,["experiment"],K);const re=u(n,["fullFineTuningSpec"]);re!=null&&h(i,["fullFineTuningSpec"],re);const j=u(n,["labels"]);j!=null&&h(i,["labels"],j);const ue=u(n,["outputUri"]);ue!=null&&h(i,["outputUri"],ue);const Te=u(n,["pipelineJob"]);Te!=null&&h(i,["pipelineJob"],Te);const be=u(n,["serviceAccount"]);be!=null&&h(i,["serviceAccount"],be);const Ne=u(n,["tunedModelDisplayName"]);Ne!=null&&h(i,["tunedModelDisplayName"],Ne);const _e=u(n,["tuningJobState"]);_e!=null&&h(i,["tuningJobState"],_e);const Re=u(n,["veoTuningSpec"]);return Re!=null&&h(i,["veoTuningSpec"],Re),i}function _M(n,t){const i={},r=u(n,["sdkHttpResponse"]);r!=null&&h(i,["sdkHttpResponse"],r);const a=u(n,["name"]);a!=null&&h(i,["name"],a);const c=u(n,["metadata"]);c!=null&&h(i,["metadata"],c);const g=u(n,["done"]);g!=null&&h(i,["done"],g);const m=u(n,["error"]);return m!=null&&h(i,["error"],m),i}function Vu(n,t){const i={},r=u(n,["gcsUri"]);r!=null&&h(i,["validationDatasetUri"],r);const a=u(n,["vertexDatasetResource"]);return a!=null&&h(i,["validationDatasetUri"],a),i}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class SM extends Cn{constructor(t){super(),this.apiClient=t,this.list=async(i={})=>new _o(Sn.PAGED_ITEM_TUNING_JOBS,r=>this.listInternal(r),await this.listInternal(i),i),this.get=async i=>await this.getInternal(i),this.tune=async i=>{var r;if(this.apiClient.isVertexAI())if(i.baseModel.startsWith("projects/")){const a={tunedModelName:i.baseModel};!((r=i.config)===null||r===void 0)&&r.preTunedModelCheckpointId&&(a.checkpointId=i.config.preTunedModelCheckpointId);const c=Object.assign(Object.assign({},i),{preTunedModel:a});return c.baseModel=void 0,await this.tuneInternal(c)}else{const a=Object.assign({},i);return await this.tuneInternal(a)}else{const a=Object.assign({},i),c=await this.tuneMldevInternal(a);let g="";return c.metadata!==void 0&&c.metadata.tunedModel!==void 0?g=c.metadata.tunedModel:c.name!==void 0&&c.name.includes("/operations/")&&(g=c.name.split("/operations/")[0]),{name:g,state:Ju.JOB_STATE_QUEUED}}}}async getInternal(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=cM(t);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>rc(v))}else{const f=uM(t);return m=Z("{name}",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>Jy(v))}}async listInternal(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=fM(t);return m=Z("tuningJobs",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=pM(v),_=new ip;return Object.assign(_,T),_})}else{const f=dM(t);return m=Z("tunedModels",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"GET",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=mM(v),_=new ip;return Object.assign(_,T),_})}}async cancel(t){var i,r,a,c;let g,m="",y={};if(this.apiClient.isVertexAI()){const f=nM(t);return m=Z("{name}:cancel",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=iM(v),_=new sp;return Object.assign(_,T),_})}else{const f=tM(t);return m=Z("{name}:cancel",f._url),y=f._query,delete f._url,delete f._query,g=this.apiClient.request({path:m,queryParams:y,body:JSON.stringify(f),httpMethod:"POST",httpOptions:(a=t.config)===null||a===void 0?void 0:a.httpOptions,abortSignal:(c=t.config)===null||c===void 0?void 0:c.abortSignal}).then(v=>v.json().then(T=>{const _=T;return _.sdkHttpResponse={headers:v.headers},_})),g.then(v=>{const T=oM(v),_=new sp;return Object.assign(_,T),_})}}async tuneInternal(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI()){const m=lM(t,t);return c=Z("tuningJobs",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>rc(y))}else throw new Error("This method is only supported by the Vertex AI.")}async tuneMldevInternal(t){var i,r;let a,c="",g={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=aM(t);return c=Z("tunedModels",m._url),g=m._query,delete m._url,delete m._query,a=this.apiClient.request({path:c,queryParams:g,body:JSON.stringify(m),httpMethod:"POST",httpOptions:(i=t.config)===null||i===void 0?void 0:i.httpOptions,abortSignal:(r=t.config)===null||r===void 0?void 0:r.abortSignal}).then(y=>y.json().then(f=>{const v=f;return v.sdkHttpResponse={headers:y.headers},v})),a.then(y=>_M(y))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class EM{async download(t,i){throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.")}}const CM=1024*1024*8,AM=3,wM=1e3,xM=2,jr="x-goog-upload-status";async function bM(n,t,i,r){var a;const c=await Ky(n,t,i,r),g=await(c==null?void 0:c.json());if(((a=c==null?void 0:c.headers)===null||a===void 0?void 0:a[jr])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");return g.file}async function RM(n,t,i,r){var a;const c=await Ky(n,t,i,r),g=await(c==null?void 0:c.json());if(((a=c==null?void 0:c.headers)===null||a===void 0?void 0:a[jr])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");const m=oy(g),y=new vc;return Object.assign(y,m),y}async function Ky(n,t,i,r){var a,c,g;let m=t;const y=(r==null?void 0:r.baseUrl)||((a=i.clientOptions.httpOptions)===null||a===void 0?void 0:a.baseUrl);if(y){const C=new URL(y),A=new URL(t);A.protocol=C.protocol,A.host=C.host,A.port=C.port,m=A.toString()}let f=0,v=0,T=new Xu(new Response),_="upload";for(f=n.size;v<f;){const C=Math.min(CM,f-v),A=n.slice(v,v+C);v+C>=f&&(_+=", finalize");let M=0,x=wM;for(;M<AM;){const U=Object.assign(Object.assign({},(r==null?void 0:r.headers)||{}),{"X-Goog-Upload-Command":_,"X-Goog-Upload-Offset":String(v),"Content-Length":String(C)});if(T=await i.request({path:"",body:A,httpMethod:"POST",httpOptions:Object.assign(Object.assign({},r),{apiVersion:"",baseUrl:m,headers:U})}),!((c=T==null?void 0:T.headers)===null||c===void 0)&&c[jr])break;M++,await NM(x),x=x*xM}if(v+=C,((g=T==null?void 0:T.headers)===null||g===void 0?void 0:g[jr])!=="active")break;if(f<=v)throw new Error("All content has been uploaded, but the upload status is not finalized.")}return T}async function MM(n){return{size:n.size,type:n.type}}function NM(n){return new Promise(t=>setTimeout(t,n))}class IM{async upload(t,i,r,a){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await bM(t,i,r,a)}async uploadToFileSearchStore(t,i,r,a){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await RM(t,i,r,a)}async stat(t){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await MM(t)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class DM{create(t,i,r){return new kM(t,i,r)}}class kM{constructor(t,i,r){this.url=t,this.headers=i,this.callbacks=r}connect(){this.ws=new WebSocket(this.url),this.ws.onopen=this.callbacks.onopen,this.ws.onerror=this.callbacks.onerror,this.ws.onclose=this.callbacks.onclose,this.ws.onmessage=this.callbacks.onmessage}send(t){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.send(t)}close(){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.close()}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Up="x-goog-api-key";class UM{constructor(t){this.apiKey=t}async addAuthHeaders(t,i){if(t.get(Up)===null){if(this.apiKey.startsWith("auth_tokens/"))throw new Error("Ephemeral tokens are only supported by the live API.");if(!this.apiKey)throw new Error("API key is missing. Please provide a valid API key.");t.append(Up,this.apiKey)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zM="gl-node/";class LM{get interactions(){var t;if(this._interactions!==void 0)return this._interactions;console.warn("GoogleGenAI.interactions: Interactions usage is experimental and may change in future versions.");const i=this.httpOptions;i!=null&&i.extraBody&&console.warn("GoogleGenAI.interactions: Client level httpOptions.extraBody is not supported by the interactions client and will be ignored.");const r=new tt({baseURL:this.apiClient.getBaseUrl(),apiKey:this.apiKey,apiVersion:this.apiClient.getApiVersion(),clientAdapter:this.apiClient,defaultHeaders:this.apiClient.getDefaultHeaders(),timeout:i==null?void 0:i.timeout,maxRetries:(t=i==null?void 0:i.retryOptions)===null||t===void 0?void 0:t.attempts});return this._interactions=r.interactions,this._interactions}constructor(t){var i;if(t.apiKey==null)throw new Error("An API Key must be set when running in a browser");if(t.project||t.location)throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");this.vertexai=(i=t.vertexai)!==null&&i!==void 0?i:!1,this.apiKey=t.apiKey;const r=pE(t.httpOptions,t.vertexai,void 0,void 0);r&&(t.httpOptions?t.httpOptions.baseUrl=r:t.httpOptions={baseUrl:r}),this.apiVersion=t.apiVersion,this.httpOptions=t.httpOptions;const a=new UM(this.apiKey);this.apiClient=new Db({auth:a,apiVersion:this.apiVersion,apiKey:this.apiKey,vertexai:this.vertexai,httpOptions:this.httpOptions,userAgentExtra:zM+"web",uploader:new IM,downloader:new EM}),this.models=new Zb(this.apiClient),this.live=new Yb(this.apiClient,a,new DM),this.batches=new KC(this.apiClient),this.chats=new DA(this.models,this.apiClient),this.caches=new MA(this.apiClient),this.files=new FA(this.apiClient),this.operations=new $b(this.apiClient),this.authTokens=new mR(this.apiClient),this.tunings=new SM(this.apiClient),this.fileSearchStores=new CR(this.apiClient)}}let Ou=null;const HM=()=>(Ou||(Ou=new LM({apiKey:"PLACEHOLDER_API_KEY"})),Ou),BM=async(n,t,i=[])=>{try{const g=HM().chats.create({model:"gemini-3-flash-preview",config:{systemInstruction:`You are a friendly and encouraging Chinese language (HSK) tutor. 
    You are helping a student understand a specific lesson. 
    Strictly use the provided LESSON CONTEXT to answer questions if applicable.
    If the user asks for examples, provide Pinyin and English translations.
    Keep answers concise but helpful.`},history:i}),m=`
    [LESSON CONTEXT START]
    ${t}
    [LESSON CONTEXT END]

    Student Question: ${n}
    `;return(await g.sendMessage({message:m})).text||"I'm sorry, I couldn't generate a response."}catch(r){return console.error("Gemini API Error:",r),"Sorry, I am having trouble connecting to the tutoring service right now. Please check your API key."}},qM=({contextContent:n,isOpen:t,onClose:i})=>{const[r,a]=q.useState([{role:"model",text:"你好! I am your AI HSK Tutor. I can explain grammar points, provide more vocabulary examples, or quiz you on this lesson. How can I help?"}]),[c,g]=q.useState(""),[m,y]=q.useState(!1),f=q.useRef(null),v=()=>{var _;(_=f.current)==null||_.scrollIntoView({behavior:"smooth"})};q.useEffect(()=>{v()},[r,t]);const T=async()=>{if(!c.trim()||m)return;const _=c.trim();g(""),a(M=>[...M,{role:"user",text:_}]),y(!0);const C=r.map(M=>({role:M.role,parts:[{text:M.text}]})),A=await BM(_,n,C);a(M=>[...M,{role:"model",text:A}]),y(!1)};return t?L.jsxs("div",{className:"fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 z-50 overflow-hidden ring-1 ring-black/5 animate-in slide-in-from-bottom-10 fade-in duration-300",children:[L.jsxs("div",{className:"bg-gradient-to-r from-red-600 to-red-700 p-4 flex justify-between items-center text-white",children:[L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("div",{className:"p-1.5 bg-white/20 rounded-lg backdrop-blur-sm",children:L.jsx(ty,{size:18,className:"text-yellow-300"})}),L.jsxs("div",{children:[L.jsx("h3",{className:"font-bold text-sm",children:"AI Laoshi"}),L.jsx("p",{className:"text-xs text-red-100 opacity-90",children:"Gemini Powered"})]})]}),L.jsx("button",{onClick:i,className:"hover:bg-white/20 p-1 rounded-full transition-colors",children:L.jsx(bS,{size:18})})]}),L.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50",children:[r.map((_,C)=>L.jsx("div",{className:`flex ${_.role==="user"?"justify-end":"justify-start"}`,children:L.jsx("div",{className:`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${_.role==="user"?"bg-red-600 text-white rounded-br-none":"bg-white text-gray-800 border border-gray-100 rounded-bl-none"}`,children:_.text})},C)),m&&L.jsx("div",{className:"flex justify-start",children:L.jsx("div",{className:"bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm",children:L.jsxs("div",{className:"flex gap-1",children:[L.jsx("span",{className:"w-2 h-2 bg-red-400 rounded-full animate-bounce [animation-delay:-0.3s]"}),L.jsx("span",{className:"w-2 h-2 bg-red-400 rounded-full animate-bounce [animation-delay:-0.15s]"}),L.jsx("span",{className:"w-2 h-2 bg-red-400 rounded-full animate-bounce"})]})})}),L.jsx("div",{ref:f})]}),L.jsx("div",{className:"p-3 bg-white border-t border-gray-100",children:L.jsxs("div",{className:"flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 border border-transparent focus-within:border-red-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-100 transition-all",children:[L.jsx("input",{type:"text",value:c,onChange:_=>g(_.target.value),onKeyDown:_=>_.key==="Enter"&&T(),placeholder:"Ask about grammar...",className:"flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400",disabled:m}),L.jsx("button",{onClick:T,disabled:!c.trim()||m,className:"p-1.5 bg-red-600 text-white rounded-full hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:m?L.jsx(ES,{size:16,className:"animate-spin"}):L.jsx(AS,{size:16})})]})})]}):null},PM=({onSelectModule:n})=>{const t=Array.from(new Set(Yu.map(i=>i.level)));return L.jsxs("div",{className:"p-8 max-w-7xl mx-auto",children:[L.jsxs("header",{className:"mb-12",children:[L.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4 tracking-tight",children:"Welcome to HSK Mastery"}),L.jsx("p",{className:"text-xl text-gray-600 max-w-3xl",children:"Your structured path to Chinese fluency. Select a level to continue your journey."})]}),L.jsx("div",{className:"space-y-10",children:t.map(i=>L.jsxs("div",{children:[L.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[L.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:i}),L.jsx("div",{className:"h-px bg-gray-200 flex-1"})]}),L.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Yu.filter(r=>r.level===i).map(r=>L.jsxs("div",{onClick:()=>n(r),className:"group bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col",children:[L.jsxs("div",{className:"p-6 flex-1",children:[L.jsxs("div",{className:"flex justify-between items-start mb-4",children:[L.jsx("div",{className:"w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center font-bold text-sm",children:r.lessons.length}),L.jsx("span",{className:"px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded uppercase tracking-wide",children:"Module"})]}),L.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors",children:r.title}),L.jsx("p",{className:"text-gray-500 text-sm line-clamp-2",children:r.description})]}),L.jsxs("div",{className:"px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-sm text-gray-600 group-hover:bg-red-50/50 transition-colors",children:[L.jsx("span",{children:"Start Learning"}),L.jsx(mc,{size:16,className:"text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all"})]})]},r.id))})]},i))})]})},GM=({module:n})=>{const[t,i]=q.useState(n.lessons[0]||null),[r,a]=q.useState(!1);if(q.useEffect(()=>{n.lessons.length>0&&i(n.lessons[0]),a(!1)},[n]),!t)return L.jsxs("div",{className:"p-12 flex flex-col items-center justify-center text-center",children:[L.jsx("div",{className:"w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:L.jsx(Lu,{className:"text-gray-400",size:32})}),L.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-2",children:"No Content Yet"}),L.jsx("p",{className:"text-gray-500",children:"This module is being prepared."})]});const c=m=>{switch(m){case W.GRAMMAR:return L.jsx(Lu,{size:18});case W.VOCABULARY:return L.jsx(g,{});case W.EXERCISE:return L.jsx(mS,{size:18});default:return L.jsx(Lu,{size:18})}},g=()=>L.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[L.jsx("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),L.jsx("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]});return L.jsxs("div",{className:"flex flex-col h-full bg-white",children:[L.jsxs("div",{className:"border-b border-gray-200 bg-white sticky top-0 z-30 px-8 py-4 flex items-center justify-between",children:[L.jsxs("div",{children:[L.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500 mb-1",children:[L.jsx("span",{children:n.level}),L.jsx(mc,{size:12}),L.jsx("span",{children:n.title})]}),L.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:t.title})]}),L.jsxs("button",{onClick:()=>a(!r),className:`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${r?"bg-red-100 text-red-700 ring-2 ring-red-200":"bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg"}`,children:[L.jsx(ty,{size:16,className:r?"text-red-600":"text-yellow-400"}),L.jsx("span",{children:r?"Close AI Tutor":"Ask AI Tutor"})]})]}),L.jsx("div",{className:"border-b border-gray-200 px-8 bg-gray-50",children:L.jsx("div",{className:"flex gap-6 overflow-x-auto no-scrollbar",children:n.lessons.map(m=>L.jsxs("button",{onClick:()=>i(m),className:`flex items-center gap-2 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${t.id===m.id?"border-red-600 text-red-600":"border-transparent text-gray-500 hover:text-gray-800"}`,children:[c(m.type),m.type]},m.id))})}),L.jsx("div",{className:"flex-1 overflow-y-auto p-8 lg:p-12 relative bg-white",children:L.jsxs("div",{className:"max-w-4xl mx-auto",children:[L.jsx(rE,{content:t.content}),L.jsxs("div",{className:"mt-16 pt-8 border-t border-gray-100 flex justify-between items-center text-gray-500 text-sm",children:[L.jsx("span",{children:"Finished this lesson?"}),L.jsx("div",{className:"flex gap-2",children:L.jsx("button",{className:"px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors",onClick:()=>alert("Great job! Proceeding to next content (Simulation)"),children:"Mark as Complete"})})]})]})}),L.jsx(qM,{contextContent:t.content,isOpen:r,onClose:()=>a(!1)})]})},VM=()=>{const[n,t]=q.useState(null),i=a=>{t(a),window.scrollTo(0,0)},r=()=>{t(null)};return L.jsxs("div",{className:"flex min-h-screen bg-gray-50",children:[L.jsx(sE,{currentModuleId:n==null?void 0:n.id,onSelectModule:i,onGoHome:r}),L.jsx("main",{className:"ml-64 flex-1 h-screen overflow-y-auto",children:n?L.jsx(GM,{module:n}):L.jsx(PM,{onSelectModule:i})})]})};function OM(){return L.jsx(Q_,{children:L.jsx(VM,{})})}const Xy=document.getElementById("root");if(!Xy)throw new Error("Could not find root element to mount to");const FM=M0.createRoot(Xy);FM.render(L.jsx(zp.StrictMode,{children:L.jsx(OM,{})}));
