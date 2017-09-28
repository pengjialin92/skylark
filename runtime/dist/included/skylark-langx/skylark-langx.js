/**
 * skylark-langx - A simple JavaScript language extension library, including class support, Evented class, Deferred class and some commonly used tool functions.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,n){function r(t,n){if("."!==t[0])return t;var r=n.split("/"),e=t.split("/");r.pop();for(var i=0;i<e.length;i++)"."!=e[i]&&(".."==e[i]?r.pop():r.push(e[i]));return r.join("/")}var e=n.define,i=n.require,o="function"==typeof e&&e.amd,u=!o&&"undefined"!=typeof exports;if(!o&&!e){var a={};e=n.define=function(t,n,e){"function"==typeof e?(a[t]={factory:e,deps:n.map(function(n){return r(n,t)}),exports:null},i(t)):resolved[t]=e},i=n.require=function(t){if(!a.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var n=a[t];if(!n.exports){var r=[];n.deps.forEach(function(t){r.push(i(t))}),n.exports=n.factory.apply(window,r)}return n.exports}}if(t(e,i),o)e(["skylark-langx/main"],function(t){return t});else{var s=i("skylark-langx/main");u?exports=s:n.skylarkjs=s}}(function(t,n){t("skylark-langx/skylark",[],function(){var t={};return t}),t("skylark-langx/langx",["./skylark"],function(t){function n(t,n){var r,e,i=function(){t.apply(null,e)};return function(){e=arguments,clearTimeout(r),r=setTimeout(i,n)}}function r(t){return U.call(t,function(t){return null!=t})}function e(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function i(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?JSON.parse(t):t):t}catch(n){return t}}function o(t,n){var r,e,i,o,u;if(t)if(r=t.length,r===o){for(e in t)if(t.hasOwnProperty(e)&&(u=t[e],n.call(u,e,u)===!1))break}else for(i=0;i<r&&(u=t[i],n.call(u,i,u)!==!1);i++);return this}function u(t){if(l(t)){for(var n=[],r=0;r<t.length;r++){var e=t[r];if(l(e))for(var i=0;i<e.length;i++)n.push(e[i]);else n.push(e)}return n}return t}function a(t,n,r,e){return v(n)?n.call(t,r,e):n}function s(t){var t=t||window.location.href,n=t.split("?"),r={};return n.length>1&&n[1].split("&").forEach(function(t){var n=t.split("=");r[n[0]]=n[1]}),r}function c(t,n){if(!n)return-1;var r;if(n.indexOf)return n.indexOf(t);for(r=n.length;r--;)if(n[r]===t)return r;return-1}function f(t){return t instanceof Array}function l(t){return!g(t)&&"number"==typeof t.length}function p(t){return"boolean"==typeof t}function h(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function v(t){return"function"==I(t)}function y(t){return"object"==I(t)}function d(t){return y(t)&&!m(t)&&Object.getPrototypeOf(t)==Object.prototype}function g(t){return"string"==typeof t}function m(t){return t&&t==t.window}function b(t){return"undefined"!=typeof t}function x(t){return"number"==typeof t}function _(t){if(t){var n=location.protocol+"//"+location.hostname;return location.port&&(n+=":"+location.port),t.startsWith(n)}}function k(t){var n;for(n in t)if(null!==t[n])return!1;return!0}function w(t,n,r){return(r||[]).concat(Array.prototype.slice.call(t,n||0))}function j(t,n){var r,e,i,o=[];if(l(t))for(e=0;e<t.length;e++)r=n.call(t[e],t[e],e),null!=r&&o.push(r);else for(i in t)r=n.call(t[i],t[i],i),null!=r&&o.push(r);return u(o)}function O(t){return requestAnimationFrame(t),this}function E(t,n){var r=2 in arguments&&M.call(arguments,2);if(v(t)){var e=function(){return t.apply(n,r?r.concat(M.call(arguments)):arguments)};return e}if(g(n))return r?(r.unshift(t[n],t),E.apply(null,r)):E(t[n],t);throw new TypeError("expected function")}function A(t){return parseFloat(t)||0}function T(t){return null==t?"":String.prototype.trim.call(t)}function P(t,n){if(f(t)){var r=t.indexOf(n);r!=-1&&t.splice(r,1)}else if(d(t))for(var e in t)if(t[e]==n){delete t[e];break}return this}function C(t,n,r,e){for(var i in n)n.hasOwnProperty(i)&&(e&&void 0!==t[i]||(r&&(d(n[i])||f(n[i]))?(d(n[i])&&!d(t[i])&&(t[i]={}),f(n[i])&&!f(t[i])&&(t[i]=[]),C(t[i],n[i],r,e)):void 0!==n[i]&&(t[i]=n[i])));return t}function F(t){var n=M.call(arguments,0);return target=n.shift(),deep=!1,p(n[n.length-1])&&(deep=n.pop()),{target:target,sources:n,deep:deep}}function S(){var t=F.apply(this,arguments);return t.sources.forEach(function(n){C(t.target,n,t.deep,!1)}),t.target}function D(){var t=F.apply(this,arguments);return t.sources.forEach(function(n){C(t.target,n,t.deep,!0)}),t.target}function N(t,n,r,e){function i(t,n){if(t.match(/\./)){var r,e=function(t,n){var i=t.pop();return i?n[i]?e(t,r=n[i]):null:r};return e(t.split(".").reverse(),n)}return n[t]}return e=e||window,r=r?E(e,r):function(t){return t},t.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(t,o,u){var a=i(o,n);return u&&(a=i(u,e).call(e,a,o)),r(a,o).toString()})}function z(t){return t._uid||t.id||(t._uid=J++)}function $(t){return U.call(t,function(n,r){return t.indexOf(n)==r})}function q(){return q}var L={}.toString,M=(Array.prototype.concat,Array.prototype.indexOf,Array.prototype.slice),U=Array.prototype.filter,Z=function(){function t(t,n,r){var e=t.prototype,i=t.superclass.prototype,o=r&&r.noOverrided;for(var u in n)"constructor"!==u&&(e[u]="function"!=typeof n[u]||o||"function"!=typeof i[u]?n[u]:function(t,n,r){return function(){var t=this.overrided;this.overrided=r;var e=n.apply(this,arguments);return this.overrided=t,e}}(u,n[u],i[u]));return t}return function n(r,e,i){var o=r.constructor;o===Object&&(o=function(){this.init&&this.init.apply(this,arguments)});var u=r.klassName||"",a=new Function("return function "+u+"() {var inst = this, ctor = arguments.callee;if (!(inst instanceof ctor)) {inst = Object.create(ctor.prototype);}ctor._constructor.apply(inst, arguments);return inst;}")();return a._constructor=o,e=e||Object,a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.superclass=e,a.__proto__=e,a.partial||(a.partial=function(n,r){return t(this,n,r)}),a.inherit||(a.inherit=function(t,r){return n(t,this,r)}),a.partial(r,i),a}}(),B=function(){this.promise=new Promise(function(t,n){this._resolve=t,this._reject=n}.bind(this)),this.resolve=B.prototype.resolve.bind(this),this.reject=B.prototype.reject.bind(this)};B.prototype.resolve=function(t){return this._resolve.call(this.promise,t),this},B.prototype.reject=function(t){return this._reject.call(this.promise,t),this},B.prototype.then=function(t,n,r){return this.promise.then(t,n,r)},B.all=function(t){return Promise.all(t)},B.first=function(t){return Promise.race(t)},B.when=function(t,n,r,e){var i=t&&"function"==typeof t.then,o=i&&t instanceof Promise;if(!i)return arguments.length>1?n?n(t):t:(new B).resolve(t);if(!o){var u=new B(t.cancel);t.then(u.resolve,u.reject,u.progress),t=u.promise}return n||r||e?t.then(n,r,e):t},B.reject=function(t){var n=new B;return n.reject(t),n.promise},B.resolve=function(t){var n=new B;return n.resolve(t),n.promise},B.immediate=B.resolve;var W=Z({on:function(t,n,r,e,i,u){var a=this,s=this._hub||(this._hub={});return d(t)?(i=e,o(t,function(t,e){a.on(t,n,r,e,i,u)}),this):(g(n)||v(e)||(i=e,e=r,r=n,n=void 0),v(r)&&(i=e,e=r,r=null),g(t)&&(t=t.split(/\s/)),t.forEach(function(t){(s[t]||(s[t]=[])).push({fn:e,selector:n,data:r,ctx:i,one:u})}),this)},one:function(t,n,r,e,i){return this.on(t,n,r,e,i,1)},trigger:function(t){if(!this._hub)return this;var n=this;g(t)&&(t=new CustomEvent(t));var e=M.call(arguments,1);return e=b(e)?[t].concat(e):[t],[t.type||t.name,"all"].forEach(function(i){var o=n._hub[i];if(o){for(var u=o.length,a=!1,s=0;s<u;s++){var c=o[s];t.data?c.data&&(t.data=S({},c.data,t.data)):t.data=c.data||null,c.fn.apply(c.ctx,e),c.one&&(o[s]=null,a=!0)}a&&(n._hub[i]=r(o))}}),this},listened:function(t){var n=(this._hub||(this._events={}))[t]||[];return n.length>0},listenTo:function(t,n,r,e){if(!t)return this;g(r)&&(r=this[r]),e?t.one(n,r,this):t.on(n,r,this);for(var i,o=this._listeningTo||(this._listeningTo=[]),u=0;u<o.length;u++)if(o[u].obj==t){i=o[u];break}i||o.push(i={obj:t,events:{}});var a=i.events,s=a[n]=a[n]||[];return s.indexOf(r)==-1&&s.push(r),this},listenToOnce:function(t,n,r){return this.listenTo(t,n,r,1)},off:function(t,n){var r=this._hub||(this._hub={});return g(t)&&(t=t.split(/\s/)),t.forEach(function(t){var e=r[t],i=[];if(e&&n)for(var o=0,u=e.length;o<u;o++)e[o].fn!==n&&e[o].fn._!==n&&i.push(e[o]);i.length?r[t]=i:delete r[t]}),this},unlistenTo:function(t,n,e){var i=this._listeningTo;if(!i)return this;for(var o=0;o<i.length;o++){var u=i[o];if(!t||t==u.obj){var a=u.events;for(var s in a)if(!n||n==s){listeningEvent=a[s];for(var c=0;c<listeningEvent.length;c++)e&&e!=listeningEvent[o]||(u.obj.off(s,listeningEvent[o],this),listeningEvent[o]=null);listeningEvent=a[s]=r(listeningEvent),k(listeningEvent)&&(a[s]=null)}k(a)&&(i[o]=null)}}return i=this._listeningTo=r(i),k(i)&&(this._listeningTo=null),this}}),I=(function(){var t;return function(n){return t||(t=document.createElement("a")),t.href=n,t.href}}(),function(){var t={};return o("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(n,r){t["[object "+r+"]"]=r.toLowerCase()}),function(n){return null==n?String(n):t[L.call(n)]||"object"}}()),J=1;return S(q,{camelCase:function(t){return t.replace(/-([\da-z])/g,function(t){return t.toUpperCase().replace("-","")})},compact:r,dasherize:e,debounce:n,Deferred:B,Evented:W,deserializeValue:i,each:o,flatten:u,funcArg:a,getQueryParams:s,inArray:c,isArray:f,isArrayLike:l,isBoolean:p,isDefined:function(t){return void 0!==t},isDocument:h,isEmptyObject:k,isFunction:v,isObject:y,isPlainObject:d,isNumber:x,isString:g,isSameOrigin:_,isWindow:m,klass:function(t,n,r){return Z(t,n,r)},lowerFirst:function(t){return t.charAt(0).toLowerCase()+t.slice(1)},makeArray:w,map:j,mixin:S,nextTick:O,proxy:E,removeItem:P,returnTrue:function(){return!0},returnFalse:function(){return!1},safeMixin:D,substitute:N,toPixel:A,trim:T,type:I,uid:z,uniq:$,upperFirst:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}),t.langx=q}),t("skylark-langx/main",["./skylark","./langx"],function(t){return t}),t("skylark-langx",["skylark-langx/main"],function(t){return t})},this);
//# sourceMappingURL=sourcemaps/skylark-langx.js.map