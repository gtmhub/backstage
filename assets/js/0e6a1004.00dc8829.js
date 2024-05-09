/*! For license information please see 0e6a1004.00dc8829.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[986006],{331317:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>f,default:()=>l,frontMatter:()=>c,metadata:()=>u,toc:()=>i});var n=t(824246),o=t(511151);const c={id:"plugin-scaffolder-react.scaffolderrjsfformprops.idprefix",title:"ScaffolderRJSFFormProps.idPrefix",description:"API reference for ScaffolderRJSFFormProps.idPrefix"},f=void 0,u={id:"reference/plugin-scaffolder-react.scaffolderrjsfformprops.idprefix",title:"ScaffolderRJSFFormProps.idPrefix",description:"API reference for ScaffolderRJSFFormProps.idPrefix",source:"@site/../docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops.idprefix.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-react.scaffolderrjsfformprops.idprefix",permalink:"/docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops.idprefix",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops.idprefix.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-react.scaffolderrjsfformprops.idprefix",title:"ScaffolderRJSFFormProps.idPrefix",description:"API reference for ScaffolderRJSFFormProps.idPrefix"}},s={},i=[];function a(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops",children:(0,n.jsx)(r.code,{children:"ScaffolderRJSFFormProps"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react.scaffolderrjsfformprops.idprefix",children:(0,n.jsx)(r.code,{children:"idPrefix"})})]}),"\n",(0,n.jsxs)(r.p,{children:["To avoid collisions with existing ids in the DOM, it is possible to change the prefix used for ids; Default is ",(0,n.jsx)(r.code,{children:"root"})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"idPrefix?: string;\n"})})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,c={},i=null,a=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(a=r.ref),r)f.call(r,n)&&!s.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:a,props:c,_owner:u.current}}r.Fragment=c,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function _(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function v(){}function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=_.prototype;var x=b.prototype=new v;x.constructor=b,m(x,_.prototype),x.isPureReactComponent=!0;var S=Array.isArray,g=Object.prototype.hasOwnProperty,j={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,n){var o,c={},f=null,u=null;if(null!=r)for(o in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(f=""+r.key),r)g.call(r,o)&&!P.hasOwnProperty(o)&&(c[o]=r[o]);var s=arguments.length-2;if(1===s)c.children=n;else if(1<s){for(var i=Array(s),a=0;a<s;a++)i[a]=arguments[a+2];c.children=i}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:t,type:e,key:f,ref:u,props:c,_owner:j.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,c,f){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case n:s=!0}}if(s)return f=f(s=e),e=""===c?"."+w(s,0):c,S(f)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(f,r,o,"",(function(e){return e}))):null!=f&&(R(f)&&(f=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(f,o+(!f.key||s&&s.key===f.key?"":(""+f.key).replace(E,"$&/")+"/")+e)),r.push(f)),1;if(s=0,c=""===c?".":c+":",S(e))for(var i=0;i<e.length;i++){var a=c+w(u=e[i],i);s+=C(u,r,o,a,f)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),i=0;!(u=e.next()).done;)s+=C(u=u.value,r,o,a=c+w(u,i++),f);else if("object"===u)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function $(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function F(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=f,r.PureComponent=b,r.StrictMode=c,r.Suspense=a,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),c=e.key,f=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(f=r.ref,u=j.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in r)g.call(r,i)&&!P.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==s?s[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){s=Array(i);for(var a=0;a<i;a++)s[a]=arguments[a+2];o.children=s}return{$$typeof:t,type:e.type,key:c,ref:f,props:o,_owner:u}},r.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=R,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:F}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return O.current.useCallback(e,r)},r.useContext=function(e){return O.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return O.current.useDeferredValue(e)},r.useEffect=function(e,r){return O.current.useEffect(e,r)},r.useId=function(){return O.current.useId()},r.useImperativeHandle=function(e,r,t){return O.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return O.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return O.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return O.current.useMemo(e,r)},r.useReducer=function(e,r,t){return O.current.useReducer(e,r,t)},r.useRef=function(e){return O.current.useRef(e)},r.useState=function(e){return O.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return O.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return O.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>u,a:()=>f});var n=t(667294);const o={},c=n.createContext(o);function f(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:f(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);