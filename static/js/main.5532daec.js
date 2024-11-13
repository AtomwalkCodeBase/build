/*! For license information please see main.5532daec.js.LICENSE.txt */
(()=>{var e={5811:(e,t,n)=>{var r=n(347),o=n(1303).each;function i(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}i.prototype={constuctor:i,addHandler:function(e){var t=new r(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;o(t,(function(n,r){if(n.equals(e))return n.destroy(),!t.splice(r,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){o(this.handlers,(function(e){e.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";o(this.handlers,(function(t){t[e]()}))}},e.exports=i},8537:(e,t,n)=>{var r=n(5811),o=n(1303),i=o.each,a=o.isFunction,s=o.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(e,t,n){var o=this.queries,l=n&&this.browserIsIncapable;return o[e]||(o[e]=new r(e,l)),a(t)&&(t={match:t}),s(t)||(t=[t]),i(t,(function(t){a(t)&&(t={match:t}),o[e].addHandler(t)})),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=l},347:e=>{function t(e){this.options=e,!e.deferSetup&&this.setup()}t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=t},1303:e=>{e.exports={isFunction:function(e){return"function"===typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,r=e.length;n<r&&!1!==t(e[n],n);n++);}}},535:(e,t,n)=>{var r=n(8537);e.exports=new r},7396:(e,t,n)=>{var r;!function(){"use strict";var o=!("undefined"===typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},3240:e=>{"use strict";var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=function(e){return"function"===typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},a=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var r,o=t.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!o&&!i)return!1;for(r in e);return"undefined"===typeof r||t.call(e,r)},s=function(e,t){r&&"__proto__"===t.name?r(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,n){if("__proto__"===n){if(!t.call(e,n))return;if(o)return o(e,n).value}return e[n]};e.exports=function e(){var t,n,r,o,c,u,d=arguments[0],p=1,f=arguments.length,h=!1;for("boolean"===typeof d&&(h=d,d=arguments[1]||{},p=2),(null==d||"object"!==typeof d&&"function"!==typeof d)&&(d={});p<f;++p)if(null!=(t=arguments[p]))for(n in t)r=l(d,n),d!==(o=l(t,n))&&(h&&o&&(a(o)||(c=i(o)))?(c?(c=!1,u=r&&i(r)?r:[]):u=r&&a(r)?r:{},s(d,{name:n,newValue:e(h,u,o)})):"undefined"!==typeof o&&s(d,{name:n,newValue:o}));return d}},4403:e=>{var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,l=/^\s+|\s+$/g,c="";function u(e){return e?e.replace(l,c):c}e.exports=function(e,l){if("string"!==typeof e)throw new TypeError("First argument must be a string");if(!e)return[];l=l||{};var d=1,p=1;function f(e){var t=e.match(n);t&&(d+=t.length);var r=e.lastIndexOf("\n");p=~r?e.length-r:p+e.length}function h(){var e={line:d,column:p};return function(t){return t.position=new m(e),v(),t}}function m(e){this.start=e,this.end={line:d,column:p},this.source=l.source}m.prototype.content=e;var g=[];function x(t){var n=new Error(l.source+":"+d+":"+p+": "+t);if(n.reason=t,n.filename=l.source,n.line=d,n.column=p,n.source=e,!l.silent)throw n;g.push(n)}function y(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function v(){y(r)}function b(e){var t;for(e=e||[];t=w();)!1!==t&&e.push(t);return e}function w(){var t=h();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;c!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,c===e.charAt(n-1))return x("End of comment missing");var r=e.slice(2,n-2);return p+=2,f(r),e=e.slice(n),p+=2,t({type:"comment",comment:r})}}function k(){var e=h(),n=y(o);if(n){if(w(),!y(i))return x("property missing ':'");var r=y(a),l=e({type:"declaration",property:u(n[0].replace(t,c)),value:r?u(r[0].replace(t,c)):c});return y(s),l}}return v(),function(){var e,t=[];for(b(t);e=k();)!1!==e&&(t.push(e),b(t));return t}()}},2740:e=>{"use strict";e.exports=function(e,t,n,r,o,i,a,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],u=0;(l=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},1270:(e,t,n)=>{var r=n(7475),o=function(e){var t="",n=Object.keys(e);return n.forEach((function(o,i){var a=e[o];(function(e){return/[height|width]$/.test(e)})(o=r(o))&&"number"===typeof a&&(a+="px"),t+=!0===a?o:!1===a?"not "+o:"("+o+": "+a+")",i<n.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"===typeof e?e:e instanceof Array?(e.forEach((function(n,r){t+=o(n),r<e.length-1&&(t+=", ")})),t):o(e)}},9834:(e,t,n)=>{var r=n(1260)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var a,s,l=t.prefix||"__jp",c=t.name||l+o++,u=t.param||"callback",d=null!=t.timeout?t.timeout:6e4,p=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;d&&(s=setTimeout((function(){h(),n&&n(new Error("Timeout"))}),d));function h(){a.parentNode&&a.parentNode.removeChild(a),window[c]=i,s&&clearTimeout(s)}return window[c]=function(e){r("jsonp got",e),h(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+p(c)).replace("?&","?"),r('jsonp req "%s"',e),(a=document.createElement("script")).src=e,f.parentNode.insertBefore(a,f),function(){window[c]&&h()}};var o=0;function i(){}},1260:(e,t,n)=>{function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.DEBUG),e}(t=e.exports=n(4703)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))})),e.splice(i,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},4703:(e,t,n)=>{var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,i=o-(r||o);e.diff=i,e.prev=r,e.curr=o,r=o;for(var a=new Array(arguments.length),s=0;s<a.length;s++)a[s]=arguments[s];a[0]=t.coerce(a[0]),"string"!==typeof a[0]&&a.unshift("%O");var l=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;l++;var o=t.formatters[r];if("function"===typeof o){var i=a[l];n=o.call(e,i),a.splice(l,1),l--}return n})),t.formatArgs.call(e,a),(n.log||t.log||console.log.bind(console)).apply(e,a)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(4850),t.names=[],t.skips=[],t.formatters={}},4850:e=>{var t=1e3,n=60*t,r=60*n,o=24*r,i=365.25*o;function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,s){s=s||{};var l,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!a)return;var s=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*i;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===c&&!1===isNaN(e))return s.long?a(l=e,o,"day")||a(l,r,"hour")||a(l,n,"minute")||a(l,t,"second")||l+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},446:(e,t,n)=>{var r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,d="object"==typeof self&&self&&self.Object===Object&&self,p=u||d||Function("return this")(),f=Object.prototype.toString,h=Math.max,m=Math.min,g=function(){return p.Date.now()};function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return r;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=s.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):a.test(e)?r:+e}e.exports=function(e,t,n){var r,o,i,a,s,l,c=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function v(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function b(){var e=g();if(v(e))return w(e);s=setTimeout(b,function(e){var n=t-(e-l);return d?m(n,i-(e-c)):n}(e))}function w(e){return s=void 0,p&&r?f(e):(r=o=void 0,a)}function k(){var e=g(),n=v(e);if(r=arguments,o=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(b,t),u?f(e):a}(l);if(d)return s=setTimeout(b,t),f(l)}return void 0===s&&(s=setTimeout(b,t)),a}return t=y(t)||0,x(n)&&(u=!!n.leading,i=(d="maxWait"in n)?h(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),k.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=o=s=void 0},k.flush=function(){return void 0===s?a:w(g())},k}},381:(e,t,n)=>{var r="Expected a function",o=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,p="object"==typeof self&&self&&self.Object===Object&&self,f=d||p||Function("return this")(),h=Object.prototype.toString,m=Math.max,g=Math.min,x=function(){return f.Date.now()};function y(e,t,n){var o,i,a,s,l,c,u=0,d=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError(r);function h(t){var n=o,r=i;return o=i=void 0,u=t,s=e.apply(r,n)}function y(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-u>=a}function w(){var e=x();if(y(e))return k(e);l=setTimeout(w,function(e){var n=t-(e-c);return p?g(n,a-(e-u)):n}(e))}function k(e){return l=void 0,f&&o?h(e):(o=i=void 0,s)}function S(){var e=x(),n=y(e);if(o=arguments,i=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(w,t),d?h(e):s}(c);if(p)return l=setTimeout(w,t),h(c)}return void 0===l&&(l=setTimeout(w,t)),s}return t=b(t)||0,v(n)&&(d=!!n.leading,a=(p="maxWait"in n)?m(b(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),S.cancel=function(){void 0!==l&&clearTimeout(l),u=0,o=c=i=l=void 0},S.flush=function(){return void 0===l?s:k(x())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&h.call(e)==i}(e))return o;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):s.test(e)?o:+e}e.exports=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return v(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})}},9197:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=null;return t.forEach((function(e){if(null==o){var t=e.apply(void 0,n);null!=t&&(o=t)}})),o}))};var r,o=n(3534),i=(r=o)&&r.__esModule?r:{default:r};e.exports=t.default},3534:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,o,i,a){var s=o||"<<anonymous>>",l=a||r;if(null==n[r])return t?new Error("Required "+i+" `"+l+"` was not specified in `"+s+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),d=6;d<c;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,r,s,i,l].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},1497:(e,t,n)=>{"use strict";var r=n(3218);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5173:(e,t,n)=>{e.exports=n(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2730:(e,t,n)=>{"use strict";var r=n(5043),o=n(8853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function m(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var x=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function v(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(x,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(x,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(x,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),E=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var M=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var I=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=I&&e[I]||e["@@iterator"])?e:null}var F,N=Object.assign;function D(e){if(void 0===F)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);F=t&&t[1]||""}return"\n"+F+e}var B=!1;function _(e,t){if(!e||B)return"";B=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var o=c.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(1!==a||1!==s)do{if(a--,0>--s||o[a]!==i[s]){var l="\n"+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{B=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function H(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=_(e.type,!1);case 11:return e=_(e.type.render,!1);case 1:return e=_(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case j:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case P:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case E:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case O:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function G(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=G(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function V(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=G(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function J(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Y(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=q(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Z(e,t){null!=(t=t.checked)&&v(e,"checked",t,!1)}function X(e,t){Z(e,t);var n=q(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function $(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&J(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function ie(e,t){var n=q(t.value),r=q(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(fe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var xe=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function ve(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,Ae=null;function je(e){if(e=bo(e)){if("function"!==typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=ko(t),ke(e.stateNode,e.type,t))}}function Ce(e){Se?Ae?Ae.push(e):Ae=[e]:Se=e}function Ee(){if(Se){var e=Se,t=Ae;if(Ae=Se=null,je(e),t)for(e=0;e<t.length;e++)je(t[e])}}function Oe(e,t){return e(t)}function Re(){}var Pe=!1;function Te(e,t,n){if(Pe)return e(t,n);Pe=!0;try{return Oe(e,t,n)}finally{Pe=!1,(null!==Se||null!==Ae)&&(Re(),Ee())}}function ze(e,t){var n=e.stateNode;if(null===n)return null;var r=ko(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Me=!1;if(u)try{var Ie={};Object.defineProperty(Ie,"passive",{get:function(){Me=!0}}),window.addEventListener("test",Ie,Ie),window.removeEventListener("test",Ie,Ie)}catch(ue){Me=!1}function Le(e,t,n,r,o,i,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Fe=!1,Ne=null,De=!1,Be=null,_e={onError:function(e){Fe=!0,Ne=e}};function He(e,t,n,r,o,i,a,s,l){Fe=!1,Ne=null,Le.apply(_e,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function qe(e){if(Ue(e)!==e)throw Error(i(188))}function Ge(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return qe(o),e;if(a===r)return qe(o),t;a=a.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=a;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=a;break}if(l===r){s=!0,r=o,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=o;break}if(l===r){s=!0,r=a,n=o;break}l=l.sibling}if(!s)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Ve=o.unstable_scheduleCallback,Je=o.unstable_cancelCallback,Qe=o.unstable_shouldYield,Ye=o.unstable_requestPaint,Ze=o.unstable_now,Xe=o.unstable_getCurrentPriorityLevel,$e=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~o;0!==s?r=dt(s):0!==(i&=a)&&(r=dt(i))}else 0!==(a=n&~o)?r=dt(a):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-at(t)),r|=e[n],t&=~o;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var vt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,At,jt,Ct=!1,Et=[],Ot=null,Rt=null,Pt=null,Tt=new Map,zt=new Map,Mt=[],It="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(t.pointerId)}}function Ft(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=bo(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Nt(e){var t=vo(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void jt(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bo(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Bt(e,t,n){Dt(e)&&n.delete(t)}function _t(){Ct=!1,null!==Ot&&Dt(Ot)&&(Ot=null),null!==Rt&&Dt(Rt)&&(Rt=null),null!==Pt&&Dt(Pt)&&(Pt=null),Tt.forEach(Bt),zt.forEach(Bt)}function Ht(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,_t)))}function Ut(e){function t(t){return Ht(t,e)}if(0<Et.length){Ht(Et[0],e);for(var n=1;n<Et.length;n++){var r=Et[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ot&&Ht(Ot,e),null!==Rt&&Ht(Rt,e),null!==Pt&&Ht(Pt,e),Tt.forEach(t),zt.forEach(t),n=0;n<Mt.length;n++)(r=Mt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&null===(n=Mt[0]).blockedOn;)Nt(n),null===n.blockedOn&&Mt.shift()}var Wt=b.ReactCurrentBatchConfig,qt=!0;function Gt(e,t,n,r){var o=vt,i=Wt.transition;Wt.transition=null;try{vt=1,Vt(e,t,n,r)}finally{vt=o,Wt.transition=i}}function Kt(e,t,n,r){var o=vt,i=Wt.transition;Wt.transition=null;try{vt=4,Vt(e,t,n,r)}finally{vt=o,Wt.transition=i}}function Vt(e,t,n,r){if(qt){var o=Qt(e,t,n,r);if(null===o)qr(e,t,r,Jt,n),Lt(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Ot=Ft(Ot,e,t,n,r,o),!0;case"dragenter":return Rt=Ft(Rt,e,t,n,r,o),!0;case"mouseover":return Pt=Ft(Pt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Tt.set(i,Ft(Tt.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,zt.set(i,Ft(zt.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<It.indexOf(e)){for(;null!==o;){var i=bo(o);if(null!==i&&wt(i),null===(i=Qt(e,t,n,r))&&qr(e,t,r,Jt,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else qr(e,t,r,null,n)}}var Jt=null;function Qt(e,t,n,r){if(Jt=null,null!==(e=vo(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jt=e,null}function Yt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case $e:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Zt=null,Xt=null,$t=null;function en(){if($t)return $t;var e,t,n=Xt,r=n.length,o="value"in Zt?Zt.value:Zt.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return $t=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=N({},cn,{view:0,detail:0}),pn=on(dn),fn=N({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=on(fn),mn=on(N({},fn,{dataTransfer:0})),gn=on(N({},dn,{relatedTarget:0})),xn=on(N({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=N({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vn=on(yn),bn=on(N({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function An(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function jn(){return An}var Cn=N({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),En=on(Cn),On=on(N({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=on(N({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn})),Pn=on(N({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=N({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zn=on(Tn),Mn=[9,13,27,32],In=u&&"CompositionEvent"in window,Ln=null;u&&"documentMode"in document&&(Ln=document.documentMode);var Fn=u&&"TextEvent"in window&&!Ln,Nn=u&&(!In||Ln&&8<Ln&&11>=Ln),Dn=String.fromCharCode(32),Bn=!1;function _n(e,t){switch(e){case"keyup":return-1!==Mn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Gn(e,t,n,r){Ce(r),0<(t=Kr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Vn=null;function Jn(e){Dr(e,0)}function Qn(e){if(V(wo(e)))return e}function Yn(e,t){if("change"===e)return t}var Zn=!1;if(u){var Xn;if(u){var $n="oninput"in document;if(!$n){var er=document.createElement("div");er.setAttribute("oninput","return;"),$n="function"===typeof er.oninput}Xn=$n}else Xn=!1;Zn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Vn=Kn=null)}function nr(e){if("value"===e.propertyName&&Qn(Vn)){var t=[];Gn(t,Vn,e,we(e)),Te(Jn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Vn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(Vn)}function ir(e,t){if("click"===e)return Qn(t)}function ar(e,t){if("input"===e||"change"===e)return Qn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!sr(e[o],t[o]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=J();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=J((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ur(n,i);var a=ur(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,yr=null,vr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;vr||null==gr||gr!==J(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Kr(xr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},Ar={};function jr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ar)return Sr[e]=n[t];return e}u&&(Ar=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Cr=jr("animationend"),Er=jr("animationiteration"),Or=jr("animationstart"),Rr=jr("transitionend"),Pr=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(e,t){Pr.set(e,t),l(t,[e])}for(var Mr=0;Mr<Tr.length;Mr++){var Ir=Tr[Mr];zr(Ir.toLowerCase(),"on"+(Ir[0].toUpperCase()+Ir.slice(1)))}zr(Cr,"onAnimationEnd"),zr(Er,"onAnimationIteration"),zr(Or,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Rr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Nr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,s,l,c){if(He.apply(this,arguments),Fe){if(!Fe)throw Error(i(198));var u=Ne;Fe=!1,Ne=null,De||(De=!0,Be=u)}}(r,t,void 0,e),e.currentTarget=null}function Dr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Nr(o,s,c),i=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Nr(o,s,c),i=l}}}if(De)throw e=Be,De=!1,Be=null,e}function Br(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function _r(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Hr]){e[Hr]=!0,a.forEach((function(t){"selectionchange"!==t&&(Fr.has(t)||_r(t,!1,e),_r(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Hr]||(t[Hr]=!0,_r("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Yt(t)){case 1:var o=Gt;break;case 4:o=Kt;break;default:o=Vt}n=o.bind(null,t,n,e),o=void 0,!Me||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function qr(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===o||8===s.nodeType&&s.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===o||8===l.nodeType&&l.parentNode===o))return;a=a.return}for(;null!==s;){if(null===(a=vo(s)))return;if(5===(l=a.tag)||6===l){r=i=a;continue e}s=s.parentNode}}r=r.return}Te((function(){var r=i,o=we(n),a=[];e:{var s=Pr.get(e);if(void 0!==s){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=En;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Rn;break;case Cr:case Er:case Or:l=xn;break;case Rr:l=Pn;break;case"scroll":l=pn;break;case"wheel":l=zn;break;case"copy":case"cut":case"paste":l=vn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=On}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var f,h=r;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==p&&(null!=(m=ze(h,p))&&u.push(Gr(h,m,f)))),d)break;h=h.return}0<u.length&&(s=new l(s,c,null,n,o),a.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!vo(c)&&!c[mo])&&(l||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?vo(c):null)&&(c!==(d=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=hn,m="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=On,m="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==l?s:wo(l),f=null==c?s:wo(c),(s=new u(m,h+"leave",l,n,o)).target=d,s.relatedTarget=f,m=null,vo(o)===r&&((u=new u(p,h+"enter",c,n,o)).target=f,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(p=c,h=0,f=u=l;f;f=Vr(f))h++;for(f=0,m=p;m;m=Vr(m))f++;for(;0<h-f;)u=Vr(u),h--;for(;0<f-h;)p=Vr(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Vr(u),p=Vr(p)}u=null}else u=null;null!==l&&Jr(a,s,l,u,!1),null!==c&&null!==d&&Jr(a,d,c,u,!0)}if("select"===(l=(s=r?wo(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Yn;else if(qn(s))if(Zn)g=ar;else{g=or;var x=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=ir);switch(g&&(g=g(e,r))?Gn(a,g,n,o):(x&&x(e,s,r),"focusout"===e&&(x=s._wrapperState)&&x.controlled&&"number"===s.type&&ee(s,"number",s.value)),x=r?wo(r):window,e){case"focusin":(qn(x)||"true"===x.contentEditable)&&(gr=x,xr=r,yr=null);break;case"focusout":yr=xr=gr=null;break;case"mousedown":vr=!0;break;case"contextmenu":case"mouseup":case"dragend":vr=!1,br(a,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,o)}var y;if(In)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Un?_n(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Nn&&"ko"!==n.locale&&(Un||"onCompositionStart"!==v?"onCompositionEnd"===v&&Un&&(y=en()):(Xt="value"in(Zt=o)?Zt.value:Zt.textContent,Un=!0)),0<(x=Kr(r,v)).length&&(v=new bn(v,e,null,n,o),a.push({event:v,listeners:x}),y?v.data=y:null!==(y=Hn(n))&&(v.data=y))),(y=Fn?function(e,t){switch(e){case"compositionend":return Hn(t);case"keypress":return 32!==t.which?null:(Bn=!0,Dn);case"textInput":return(e=t.data)===Dn&&Bn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!In&&_n(e,t)?(e=en(),$t=Xt=Zt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(o=new bn("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=y))}Dr(a,t)}))}function Gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=ze(e,n))&&r.unshift(Gr(e,i,o)),null!=(i=ze(e,t))&&r.push(Gr(e,i,o))),e=e.return}return r}function Vr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Jr(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,o?null!=(l=ze(n,i))&&a.unshift(Gr(n,l,s)):o||null!=(l=ze(n,i))&&a.push(Gr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Qr=/\r\n?/g,Yr=/\u0000|\uFFFD/g;function Zr(e){return("string"===typeof e?e:""+e).replace(Qr,"\n").replace(Yr,"")}function Xr(e,t,n){if(t=Zr(t),Zr(e)!==t&&n)throw Error(i(425))}function $r(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,io="function"===typeof Promise?Promise:void 0,ao="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof io?function(e){return io.resolve(null).then(e).catch(so)}:ro;function so(e){setTimeout((function(){throw e}))}function lo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Ut(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),fo="__reactFiber$"+po,ho="__reactProps$"+po,mo="__reactContainer$"+po,go="__reactEvents$"+po,xo="__reactListeners$"+po,yo="__reactHandles$"+po;function vo(e){var t=e[fo];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[fo]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=uo(e);null!==e;){if(n=e[fo])return n;e=uo(e)}return t}n=(e=n).parentNode}return null}function bo(e){return!(e=e[fo]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ko(e){return e[ho]||null}var So=[],Ao=-1;function jo(e){return{current:e}}function Co(e){0>Ao||(e.current=So[Ao],So[Ao]=null,Ao--)}function Eo(e,t){Ao++,So[Ao]=e.current,e.current=t}var Oo={},Ro=jo(Oo),Po=jo(!1),To=Oo;function zo(e,t){var n=e.type.contextTypes;if(!n)return Oo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Mo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Io(){Co(Po),Co(Ro)}function Lo(e,t,n){if(Ro.current!==Oo)throw Error(i(168));Eo(Ro,t),Eo(Po,n)}function Fo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(i(108,W(e)||"Unknown",o));return N({},n,r)}function No(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Oo,To=Ro.current,Eo(Ro,e),Eo(Po,Po.current),!0}function Do(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Fo(e,t,To),r.__reactInternalMemoizedMergedChildContext=e,Co(Po),Co(Ro),Eo(Ro,e)):Co(Po),Eo(Po,n)}var Bo=null,_o=!1,Ho=!1;function Uo(e){null===Bo?Bo=[e]:Bo.push(e)}function Wo(){if(!Ho&&null!==Bo){Ho=!0;var e=0,t=vt;try{var n=Bo;for(vt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Bo=null,_o=!1}catch(o){throw null!==Bo&&(Bo=Bo.slice(e+1)),Ve($e,Wo),o}finally{vt=t,Ho=!1}}return null}var qo=[],Go=0,Ko=null,Vo=0,Jo=[],Qo=0,Yo=null,Zo=1,Xo="";function $o(e,t){qo[Go++]=Vo,qo[Go++]=Ko,Ko=e,Vo=t}function ei(e,t,n){Jo[Qo++]=Zo,Jo[Qo++]=Xo,Jo[Qo++]=Yo,Yo=e;var r=Zo;e=Xo;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Zo=1<<32-at(t)+o|n<<o|r,Xo=i+e}else Zo=1<<i|n<<o|r,Xo=e}function ti(e){null!==e.return&&($o(e,1),ei(e,1,0))}function ni(e){for(;e===Ko;)Ko=qo[--Go],qo[Go]=null,Vo=qo[--Go],qo[Go]=null;for(;e===Yo;)Yo=Jo[--Qo],Jo[Qo]=null,Xo=Jo[--Qo],Jo[Qo]=null,Zo=Jo[--Qo],Jo[Qo]=null}var ri=null,oi=null,ii=!1,ai=null;function si(e,t){var n=Tc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ri=e,oi=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ri=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Yo?{id:Zo,overflow:Xo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ri=e,oi=null,!0);default:return!1}}function ci(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ui(e){if(ii){var t=oi;if(t){var n=t;if(!li(e,t)){if(ci(e))throw Error(i(418));t=co(n.nextSibling);var r=ri;t&&li(e,t)?si(r,n):(e.flags=-4097&e.flags|2,ii=!1,ri=e)}}else{if(ci(e))throw Error(i(418));e.flags=-4097&e.flags|2,ii=!1,ri=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ri=e}function pi(e){if(e!==ri)return!1;if(!ii)return di(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oi)){if(ci(e))throw fi(),Error(i(418));for(;t;)si(e,t),t=co(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oi=co(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oi=null}}else oi=ri?co(e.stateNode.nextSibling):null;return!0}function fi(){for(var e=oi;e;)e=co(e.nextSibling)}function hi(){oi=ri=null,ii=!1}function mi(e){null===ai?ai=[e]:ai.push(e)}var gi=b.ReactCurrentBatchConfig;function xi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vi(e){return(0,e._init)(e._payload)}function bi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Mc(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Nc(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===z&&vi(i)===t.type)?((r=o(t,n.props)).ref=xi(e,t,n),r.return=e,r):((r=Ic(n.type,n.key,n.props,null,e.mode,r)).ref=xi(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Dc(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Lc(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Nc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ic(t.type,t.key,t.props,null,e.mode,n)).ref=xi(e,null,t),n.return=e,n;case k:return(t=Dc(t,e.mode,n)).return=e,t;case z:return p(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lc(t,e.mode,n,null)).return=e,t;yi(e,t)}return null}function f(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?c(e,t,n,r):null;case k:return n.key===o?u(e,t,n,r):null;case z:return f(e,t,(o=n._init)(n._payload),r)}if(te(n)||L(n))return null!==o?null:d(e,t,n,r,null);yi(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case z:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,o,null);yi(t,r)}return null}function m(o,i,s,l){for(var c=null,u=null,d=i,m=i=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var x=f(o,d,s[m],l);if(null===x){null===d&&(d=g);break}e&&d&&null===x.alternate&&t(o,d),i=a(x,i,m),null===u?c=x:u.sibling=x,u=x,d=g}if(m===s.length)return n(o,d),ii&&$o(o,m),c;if(null===d){for(;m<s.length;m++)null!==(d=p(o,s[m],l))&&(i=a(d,i,m),null===u?c=d:u.sibling=d,u=d);return ii&&$o(o,m),c}for(d=r(o,d);m<s.length;m++)null!==(g=h(d,o,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=a(g,i,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(o,e)})),ii&&$o(o,m),c}function g(o,s,l,c){var u=L(l);if("function"!==typeof u)throw Error(i(150));if(null==(l=u.call(l)))throw Error(i(151));for(var d=u=null,m=s,g=s=0,x=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(x=m,m=null):x=m.sibling;var v=f(o,m,y.value,c);if(null===v){null===m&&(m=x);break}e&&m&&null===v.alternate&&t(o,m),s=a(v,s,g),null===d?u=v:d.sibling=v,d=v,m=x}if(y.done)return n(o,m),ii&&$o(o,g),u;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=p(o,y.value,c))&&(s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return ii&&$o(o,g),u}for(m=r(o,m);!y.done;g++,y=l.next())null!==(y=h(m,o,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(o,e)})),ii&&$o(o,g),u}return function e(r,i,a,l){if("object"===typeof a&&null!==a&&a.type===S&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=i;null!==u;){if(u.key===c){if((c=a.type)===S){if(7===u.tag){n(r,u.sibling),(i=o(u,a.props.children)).return=r,r=i;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===z&&vi(c)===u.type){n(r,u.sibling),(i=o(u,a.props)).ref=xi(r,u,a),i.return=r,r=i;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===S?((i=Lc(a.props.children,r.mode,l,a.key)).return=r,r=i):((l=Ic(a.type,a.key,a.props,null,r.mode,l)).ref=xi(r,i,a),l.return=r,r=l)}return s(r);case k:e:{for(u=a.key;null!==i;){if(i.key===u){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){n(r,i.sibling),(i=o(i,a.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Dc(a,r.mode,l)).return=r,r=i}return s(r);case z:return e(r,i,(u=a._init)(a._payload),l)}if(te(a))return m(r,i,a,l);if(L(a))return g(r,i,a,l);yi(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(n(r,i.sibling),(i=o(i,a)).return=r,r=i):(n(r,i),(i=Nc(a,r.mode,l)).return=r,r=i),s(r)):n(r,i)}}var wi=bi(!0),ki=bi(!1),Si=jo(null),Ai=null,ji=null,Ci=null;function Ei(){Ci=ji=Ai=null}function Oi(e){var t=Si.current;Co(Si),e._currentValue=t}function Ri(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pi(e,t){Ai=e,Ci=ji=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(vs=!0),e.firstContext=null)}function Ti(e){var t=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:t,next:null},null===ji){if(null===Ai)throw Error(i(308));ji=e,Ai.dependencies={lanes:0,firstContext:e}}else ji=ji.next=e;return t}var zi=null;function Mi(e){null===zi?zi=[e]:zi.push(e)}function Ii(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Mi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Li(e,r)}function Li(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Fi=!1;function Ni(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Di(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _i(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ol)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Li(e,n)}return null===(o=r.interleaved)?(t.next=t,Mi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Li(e,n)}function Hi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Ui(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wi(e,t,n,r){var o=e.updateQueue;Fi=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?i=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==i){var d=o.baseState;for(a=0,u=c=l=null,s=i;;){var p=s.lane,f=s.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(p=t,f=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(f,d,p):h)||void 0===p)break e;d=N({},d,p);break e;case 2:Fi=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,a|=p;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(p=s).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===u&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Fl|=a,e.lanes=a,e.memoizedState=d}}function qi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(i(191,o));o.call(r)}}}var Gi={},Ki=jo(Gi),Vi=jo(Gi),Ji=jo(Gi);function Qi(e){if(e===Gi)throw Error(i(174));return e}function Yi(e,t){switch(Eo(Ji,t),Eo(Vi,e),Eo(Ki,Gi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Co(Ki),Eo(Ki,t)}function Zi(){Co(Ki),Co(Vi),Co(Ji)}function Xi(e){Qi(Ji.current);var t=Qi(Ki.current),n=le(t,e.type);t!==n&&(Eo(Vi,e),Eo(Ki,n))}function $i(e){Vi.current===e&&(Co(Ki),Co(Vi))}var ea=jo(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var oa=b.ReactCurrentDispatcher,ia=b.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ca=null,ua=!1,da=!1,pa=0,fa=0;function ha(){throw Error(i(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,o,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oa.current=null===e||null===e.memoizedState?$a:es,e=n(r,o),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(i(301));a+=1,ca=la=null,t.updateQueue=null,oa.current=ts,e=n(r,o)}while(da)}if(oa.current=Xa,t=null!==la&&null!==la.next,aa=0,ca=la=sa=null,ua=!1,t)throw Error(i(300));return e}function xa(){var e=0!==pa;return pa=0,e}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?sa.memoizedState=ca=e:ca=ca.next=e,ca}function va(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ca?sa.memoizedState:ca.next;if(null!==t)ca=t,la=e;else{if(null===e)throw Error(i(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ca?sa.memoizedState=ca=e:ca=ca.next=e}return ca}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=va(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=la,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var s=o.next;o.next=a.next,a.next=s}r.baseQueue=o=a,n.pending=null}if(null!==o){a=o.next,r=r.baseState;var l=s=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,sa.lanes|=d,Fl|=d}u=u.next}while(null!==u&&u!==a);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(vs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{a=o.lane,sa.lanes|=a,Fl|=a,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=va(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var s=o=o.next;do{a=e(a,s.action),s=s.next}while(s!==o);sr(a,t.memoizedState)||(vs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Sa(){}function Aa(e,t){var n=sa,r=va(),o=t(),a=!sr(r.memoizedState,o);if(a&&(r.memoizedState=o,vs=!0),r=r.queue,Fa(Ea.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,Ta(9,Ca.bind(null,n,r,o,t),void 0,null),null===Rl)throw Error(i(349));0!==(30&aa)||ja(n,t,o)}return o}function ja(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ca(e,t,n,r){t.value=n,t.getSnapshot=r,Oa(t)&&Ra(e)}function Ea(e,t,n){return n((function(){Oa(t)&&Ra(e)}))}function Oa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Ra(e){var t=Li(e,1);null!==t&&nc(t,e,1,-1)}function Pa(e){var t=ya();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Ja.bind(null,sa,e),[t.memoizedState,e]}function Ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function za(){return va().memoizedState}function Ma(e,t,n,r){var o=ya();sa.flags|=e,o.memoizedState=Ta(1|t,n,void 0,void 0===r?null:r)}function Ia(e,t,n,r){var o=va();r=void 0===r?null:r;var i=void 0;if(null!==la){var a=la.memoizedState;if(i=a.destroy,null!==r&&ma(r,a.deps))return void(o.memoizedState=Ta(t,n,i,r))}sa.flags|=e,o.memoizedState=Ta(1|t,n,i,r)}function La(e,t){return Ma(8390656,8,e,t)}function Fa(e,t){return Ia(2048,8,e,t)}function Na(e,t){return Ia(4,2,e,t)}function Da(e,t){return Ia(4,4,e,t)}function Ba(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function _a(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ia(4,4,Ba.bind(null,t,e),n)}function Ha(){}function Ua(e,t){var n=va();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wa(e,t){var n=va();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qa(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,vs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),sa.lanes|=n,Fl|=n,e.baseState=!0),t)}function Ga(e,t){var n=vt;vt=0!==n&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{vt=n,ia.transition=r}}function Ka(){return va().memoizedState}function Va(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qa(e))Ya(t,n);else if(null!==(n=Ii(e,t,n,r))){nc(n,e,r,ec()),Za(n,t,r)}}function Ja(e,t,n){var r=tc(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qa(e))Ya(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(o.next=o,Mi(t)):(o.next=l.next,l.next=o),void(t.interleaved=o)}}catch(c){}null!==(n=Ii(e,t,o,r))&&(nc(n,e,r,o=ec()),Za(n,t,r))}}function Qa(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Ya(e,t){da=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Za(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Xa={readContext:Ti,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},$a={readContext:Ti,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:Ti,useEffect:La,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ma(4194308,4,Ba.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ma(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ma(4,2,e,t)},useMemo:function(e,t){var n=ya();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ya();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Va.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:Pa,useDebugValue:Ha,useDeferredValue:function(e){return ya().memoizedState=e},useTransition:function(){var e=Pa(!1),t=e[0];return e=Ga.bind(null,e[1]),ya().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,o=ya();if(ii){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Rl)throw Error(i(349));0!==(30&aa)||ja(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,La(Ea.bind(null,r,a,e),[e]),r.flags|=2048,Ta(9,Ca.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ya(),t=Rl.identifierPrefix;if(ii){var n=Xo;t=":"+t+"R"+(n=(Zo&~(1<<32-at(Zo)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Ti,useCallback:Ua,useContext:Ti,useEffect:Fa,useImperativeHandle:_a,useInsertionEffect:Na,useLayoutEffect:Da,useMemo:Wa,useReducer:wa,useRef:za,useState:function(){return wa(ba)},useDebugValue:Ha,useDeferredValue:function(e){return qa(va(),la.memoizedState,e)},useTransition:function(){return[wa(ba)[0],va().memoizedState]},useMutableSource:Sa,useSyncExternalStore:Aa,useId:Ka,unstable_isNewReconciler:!1},ts={readContext:Ti,useCallback:Ua,useContext:Ti,useEffect:Fa,useImperativeHandle:_a,useInsertionEffect:Na,useLayoutEffect:Da,useMemo:Wa,useReducer:ka,useRef:za,useState:function(){return ka(ba)},useDebugValue:Ha,useDeferredValue:function(e){var t=va();return null===la?t.memoizedState=e:qa(t,la.memoizedState,e)},useTransition:function(){return[ka(ba)[0],va().memoizedState]},useMutableSource:Sa,useSyncExternalStore:Aa,useId:Ka,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=N({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:N({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var os={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),i=Bi(r,o);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=_i(e,i,o))&&(nc(t,e,o,r),Hi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),i=Bi(r,o);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=_i(e,i,o))&&(nc(t,e,o,r),Hi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),o=Bi(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=_i(e,o,r))&&(nc(t,e,r,n),Hi(t,e,r))}};function is(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(o,i))}function as(e,t,n){var r=!1,o=Oo,i=t.contextType;return"object"===typeof i&&null!==i?i=Ti(i):(o=Mo(t)?To:Ro.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?zo(e,o):Oo),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=os,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&os.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ni(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=Ti(i):(i=Mo(t)?To:Ro.current,o.context=zo(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rs(e,t,i,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&os.enqueueReplaceState(o,o.state,null),Wi(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=H(r),r=r.return}while(r);var o=n}catch(i){o="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:o,digest:null}}function us(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=Bi(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ql||(ql=!0,Gl=r),ds(0,t)},n}function hs(e,t,n){(n=Bi(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ds(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Kl?Kl=new Set([this]):Kl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=jc.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xs(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Bi(-1,1)).tag=2,_i(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var ys=b.ReactCurrentOwner,vs=!1;function bs(e,t,n,r){t.child=null===e?ki(t,null,n,r):wi(t,e.child,n,r)}function ws(e,t,n,r,o){n=n.render;var i=t.ref;return Pi(t,o),r=ga(e,t,n,r,i,o),n=xa(),null===e||vs?(ii&&n&&ti(t),t.flags|=1,bs(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qs(e,t,o))}function ks(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||zc(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ic(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ss(e,t,i,r,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return qs(e,t,o)}return t.flags|=1,(e=Mc(i,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(lr(i,r)&&e.ref===t.ref){if(vs=!1,t.pendingProps=r=i,0===(e.lanes&o))return t.lanes=e.lanes,qs(e,t,o);0!==(131072&e.flags)&&(vs=!0)}}return Cs(e,t,n,r,o)}function As(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Eo(Ml,zl),zl|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Eo(Ml,zl),zl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Eo(Ml,zl),zl|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Eo(Ml,zl),zl|=r;return bs(e,t,o,n),t.child}function js(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,r,o){var i=Mo(n)?To:Ro.current;return i=zo(t,i),Pi(t,o),n=ga(e,t,n,r,i,o),r=xa(),null===e||vs?(ii&&r&&ti(t),t.flags|=1,bs(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qs(e,t,o))}function Es(e,t,n,r,o){if(Mo(n)){var i=!0;No(t)}else i=!1;if(Pi(t,o),null===t.stateNode)Ws(e,t),as(t,n,r),ls(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=Ti(c):c=zo(t,c=Mo(n)?To:Ro.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,a,r,c),Fi=!1;var p=t.memoizedState;a.state=p,Wi(t,r,a,o),l=t.memoizedState,s!==r||p!==l||Po.current||Fi?("function"===typeof u&&(rs(t,n,u,r),l=t.memoizedState),(s=Fi||is(t,n,s,r,p,l,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Di(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),a.props=c,d=t.pendingProps,p=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=Ti(l):l=zo(t,l=Mo(n)?To:Ro.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,a,r,l),Fi=!1,p=t.memoizedState,a.state=p,Wi(t,r,a,o);var h=t.memoizedState;s!==d||p!==h||Po.current||Fi?("function"===typeof f&&(rs(t,n,f,r),h=t.memoizedState),(c=Fi||is(t,n,c,r,p,h,l)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=c):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Os(e,t,n,r,i,o)}function Os(e,t,n,r,o,i){js(e,t);var a=0!==(128&t.flags);if(!r&&!a)return o&&Do(t,n,!1),qs(e,t,i);r=t.stateNode,ys.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wi(t,e.child,null,i),t.child=wi(t,null,s,i)):bs(e,t,s,i),t.memoizedState=r.state,o&&Do(t,n,!0),t.child}function Rs(e){var t=e.stateNode;t.pendingContext?Lo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Lo(0,t.context,!1),Yi(e,t.containerInfo)}function Ps(e,t,n,r,o){return hi(),mi(o),t.flags|=256,bs(e,t,n,r),t.child}var Ts,zs,Ms,Is,Ls={dehydrated:null,treeContext:null,retryLane:0};function Fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ns(e,t,n){var r,o=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Eo(ea,1&a),null===e)return ui(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&o)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Fc(l,o,0,null),e=Lc(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Fs(n),t.memoizedState=Ls,e):Ds(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,o,a,s){if(n)return 256&t.flags?(t.flags&=-257,Bs(e,t,s,r=us(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Fc({mode:"visible",children:r.children},o,0,null),(a=Lc(a,o,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wi(t,e.child,null,s),t.child.memoizedState=Fs(s),t.memoizedState=Ls,a);if(0===(1&t.mode))return Bs(e,t,s,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var l=r.dgst;return r=l,Bs(e,t,s,r=us(a=Error(i(419)),r,void 0))}if(l=0!==(s&e.childLanes),vs||l){if(null!==(r=Rl)){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|s))?0:o)&&o!==a.retryLane&&(a.retryLane=o,Li(e,o),nc(r,e,o,-1))}return mc(),Bs(e,t,s,r=us(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Ec.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,oi=co(o.nextSibling),ri=t,ii=!0,ai=null,null!==e&&(Jo[Qo++]=Zo,Jo[Qo++]=Xo,Jo[Qo++]=Yo,Zo=e.id,Xo=e.overflow,Yo=t),t=Ds(t,r.children),t.flags|=4096,t)}(e,t,l,o,r,a,n);if(s){s=o.fallback,l=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:o.children};return 0===(1&l)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=c,t.deletions=null):(o=Mc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=Mc(r,s):(s=Lc(s,l,n,null)).flags|=2,s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=null===(l=e.child.memoizedState)?Fs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ls,o}return e=(s=e.child).sibling,o=Mc(s,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ds(e,t){return(t=Fc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Bs(e,t,n,r){return null!==r&&mi(r),wi(t,e.child,null,n),(e=Ds(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function _s(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ri(e.return,t,n)}function Hs(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Us(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(bs(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&_s(e,n,t);else if(19===e.tag)_s(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Eo(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Hs(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ta(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Hs(t,!0,n,null,i);break;case"together":Hs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ws(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Fl|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Mc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Mc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Gs(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ks(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vs(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ks(t),null;case 1:case 17:return Mo(t.type)&&Io(),Ks(t),null;case 3:return r=t.stateNode,Zi(),Co(Po),Co(Ro),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(pi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ai&&(ac(ai),ai=null))),zs(e,t),Ks(t),null;case 5:$i(t);var o=Qi(Ji.current);if(n=t.type,null!==e&&null!=t.stateNode)Ms(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Ks(t),null}if(e=Qi(Ki.current),pi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[fo]=t,r[ho]=a,e=0!==(1&t.mode),n){case"dialog":Br("cancel",r),Br("close",r);break;case"iframe":case"object":case"embed":Br("load",r);break;case"video":case"audio":for(o=0;o<Lr.length;o++)Br(Lr[o],r);break;case"source":Br("error",r);break;case"img":case"image":case"link":Br("error",r),Br("load",r);break;case"details":Br("toggle",r);break;case"input":Y(r,a),Br("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Br("invalid",r);break;case"textarea":oe(r,a),Br("invalid",r)}for(var l in ye(n,a),o=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Xr(r.textContent,c,e),o=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Xr(r.textContent,c,e),o=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Br("scroll",r)}switch(n){case"input":K(r),$(r,a,!0);break;case"textarea":K(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=$r)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[fo]=t,e[ho]=r,Ts(e,t,!1,!1),t.stateNode=e;e:{switch(l=ve(n,r),n){case"dialog":Br("cancel",e),Br("close",e),o=r;break;case"iframe":case"object":case"embed":Br("load",e),o=r;break;case"video":case"audio":for(o=0;o<Lr.length;o++)Br(Lr[o],e);o=r;break;case"source":Br("error",e),o=r;break;case"img":case"image":case"link":Br("error",e),Br("load",e),o=r;break;case"details":Br("toggle",e),o=r;break;case"input":Y(e,r),o=Q(e,r),Br("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=N({},r,{value:void 0}),Br("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),Br("invalid",e)}for(a in ye(n,o),c=o)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?ge(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=u&&"onScroll"===a&&Br("scroll",e):null!=u&&v(e,a,u,l))}switch(n){case"input":K(e),$(e,r,!1);break;case"textarea":K(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ks(t),null;case 6:if(e&&null!=t.stateNode)Is(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Qi(Ji.current),Qi(Ki.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[fo]=t,(a=r.nodeValue!==n)&&null!==(e=ri))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fo]=t,t.stateNode=r}return Ks(t),null;case 13:if(Co(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==oi&&0!==(1&t.mode)&&0===(128&t.flags))fi(),hi(),t.flags|=98560,a=!1;else if(a=pi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[fo]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ks(t),a=!1}else null!==ai&&(ac(ai),ai=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Il&&(Il=3):mc())),null!==t.updateQueue&&(t.flags|=4),Ks(t),null);case 4:return Zi(),zs(e,t),null===e&&Ur(t.stateNode.containerInfo),Ks(t),null;case 10:return Oi(t.type._context),Ks(t),null;case 19:if(Co(ea),null===(a=t.memoizedState))return Ks(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Gs(a,!1);else{if(0!==Il||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Gs(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Eo(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Ze()>Ul&&(t.flags|=128,r=!0,Gs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Gs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!ii)return Ks(t),null}else 2*Ze()-a.renderingStartTime>Ul&&1073741824!==n&&(t.flags|=128,r=!0,Gs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ze(),t.sibling=null,n=ea.current,Eo(ea,r?1&n|2:1&n),t):(Ks(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&zl)&&(Ks(t),6&t.subtreeFlags&&(t.flags|=8192)):Ks(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Js(e,t){switch(ni(t),t.tag){case 1:return Mo(t.type)&&Io(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Zi(),Co(Po),Co(Ro),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return $i(t),null;case 13:if(Co(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Co(ea),null;case 4:return Zi(),null;case 10:return Oi(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Ts=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zs=function(){},Ms=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Qi(Ki.current);var i,a=null;switch(n){case"input":o=Q(e,o),r=Q(e,r),a=[];break;case"select":o=N({},o,{value:void 0}),r=N({},r,{value:void 0}),a=[];break;case"textarea":o=re(e,o),r=re(e,r),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=$r)}for(u in ye(n,r),n=null,o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u])if("style"===u){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=o?o[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Br("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Is=function(e,t,n,r){n!==r&&(t.flags|=4)};var Qs=!1,Ys=!1,Zs="function"===typeof WeakSet?WeakSet:Set,Xs=null;function $s(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Ac(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Ac(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&el(t,n,i)}o=o.next}while(o!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ol(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function il(e){var t=e.alternate;null!==t&&(e.alternate=null,il(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fo],delete t[ho],delete t[go],delete t[xo],delete t[yo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=$r));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function pl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,n)}catch(s){}switch(n.tag){case 5:Ys||$s(n,t);case 6:var r=ul,o=dl;ul=null,pl(e,t,n),dl=o,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?lo(e.parentNode,n):1===e.nodeType&&lo(e,n),Ut(e)):lo(ul,n.stateNode));break;case 4:r=ul,o=dl,ul=n.stateNode.containerInfo,dl=!0,pl(e,t,n),ul=r,dl=o;break;case 0:case 11:case 14:case 15:if(!Ys&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&el(n,t,a),o=o.next}while(o!==r)}pl(e,t,n);break;case 1:if(!Ys&&($s(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ac(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Ys=(r=Ys)||null!==n.memoizedState,pl(e,t,n),Ys=r):pl(e,t,n);break;default:pl(e,t,n)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Zs),t.forEach((function(t){var r=Oc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(i(160));fl(a,s,o),ul=null,dl=!1;var c=o.alternate;null!==c&&(c.return=null),o.return=null}catch(u){Ac(o,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),xl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){Ac(e,e.return,g)}try{nl(5,e,e.return)}catch(g){Ac(e,e.return,g)}}break;case 1:ml(t,e),xl(e),512&r&&null!==n&&$s(n,n.return);break;case 5:if(ml(t,e),xl(e),512&r&&null!==n&&$s(n,n.return),32&e.flags){var o=e.stateNode;try{pe(o,"")}catch(g){Ac(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===a.type&&null!=a.name&&Z(o,a),ve(l,s);var u=ve(l,a);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];"style"===d?ge(o,p):"dangerouslySetInnerHTML"===d?de(o,p):"children"===d?pe(o,p):v(o,d,p,u)}switch(l){case"input":X(o,a);break;case"textarea":ie(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(o,!!a.multiple,h,!1):f!==!!a.multiple&&(null!=a.defaultValue?ne(o,!!a.multiple,a.defaultValue,!0):ne(o,!!a.multiple,a.multiple?[]:"",!1))}o[ho]=a}catch(g){Ac(e,e.return,g)}}break;case 6:if(ml(t,e),xl(e),4&r){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(g){Ac(e,e.return,g)}}break;case 3:if(ml(t,e),xl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){Ac(e,e.return,g)}break;case 4:default:ml(t,e),xl(e);break;case 13:ml(t,e),xl(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(Hl=Ze())),4&r&&hl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Ys=(u=Ys)||d,ml(t,e),Ys=u):ml(t,e),xl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Xs=e,d=e.child;null!==d;){for(p=Xs=d;null!==Xs;){switch(h=(f=Xs).child,f.tag){case 0:case 11:case 14:case 15:nl(4,f,f.return);break;case 1:$s(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Ac(r,n,g)}}break;case 5:$s(f,f.return);break;case 22:if(null!==f.memoizedState){wl(p);continue}}null!==h?(h.return=f,Xs=h):wl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{o=p.stateNode,u?"function"===typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){Ac(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){Ac(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ml(t,e),xl(e),4&r&&hl(e);case 21:}}function xl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(pe(o,""),r.flags&=-33),cl(e,sl(e),o);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(i(161))}}catch(s){Ac(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,n){Xs=e,vl(e,t,n)}function vl(e,t,n){for(var r=0!==(1&e.mode);null!==Xs;){var o=Xs,i=o.child;if(22===o.tag&&r){var a=null!==o.memoizedState||Qs;if(!a){var s=o.alternate,l=null!==s&&null!==s.memoizedState||Ys;s=Qs;var c=Ys;if(Qs=a,(Ys=l)&&!c)for(Xs=o;null!==Xs;)l=(a=Xs).child,22===a.tag&&null!==a.memoizedState?kl(o):null!==l?(l.return=a,Xs=l):kl(o);for(;null!==i;)Xs=i,vl(i,t,n),i=i.sibling;Xs=o,Qs=s,Ys=c}bl(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,Xs=i):bl(e)}}function bl(e){for(;null!==Xs;){var t=Xs;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ys||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Ys)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&qi(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}qi(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Ut(p)}}}break;default:throw Error(i(163))}Ys||512&t.flags&&ol(t)}catch(f){Ac(t,t.return,f)}}if(t===e){Xs=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xs=n;break}Xs=t.return}}function wl(e){for(;null!==Xs;){var t=Xs;if(t===e){Xs=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xs=n;break}Xs=t.return}}function kl(e){for(;null!==Xs;){var t=Xs;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){Ac(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(l){Ac(t,o,l)}}var i=t.return;try{ol(t)}catch(l){Ac(t,i,l)}break;case 5:var a=t.return;try{ol(t)}catch(l){Ac(t,a,l)}}}catch(l){Ac(t,t.return,l)}if(t===e){Xs=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Xs=s;break}Xs=t.return}}var Sl,Al=Math.ceil,jl=b.ReactCurrentDispatcher,Cl=b.ReactCurrentOwner,El=b.ReactCurrentBatchConfig,Ol=0,Rl=null,Pl=null,Tl=0,zl=0,Ml=jo(0),Il=0,Ll=null,Fl=0,Nl=0,Dl=0,Bl=null,_l=null,Hl=0,Ul=1/0,Wl=null,ql=!1,Gl=null,Kl=null,Vl=!1,Jl=null,Ql=0,Yl=0,Zl=null,Xl=-1,$l=0;function ec(){return 0!==(6&Ol)?Ze():-1!==Xl?Xl:Xl=Ze()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Ol)&&0!==Tl?Tl&-Tl:null!==gi.transition?(0===$l&&($l=mt()),$l):0!==(e=vt)?e:e=void 0===(e=window.event)?16:Yt(e.type)}function nc(e,t,n,r){if(50<Yl)throw Yl=0,Zl=null,Error(i(185));xt(e,n,r),0!==(2&Ol)&&e===Rl||(e===Rl&&(0===(2&Ol)&&(Nl|=n),4===Il&&sc(e,Tl)),rc(e,r),1===n&&0===Ol&&0===(1&t.mode)&&(Ul=Ze()+500,_o&&Wo()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),s=1<<a,l=o[a];-1===l?0!==(s&n)&&0===(s&r)||(o[a]=ft(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var r=pt(e,e===Rl?Tl:0);if(0===r)null!==n&&Je(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Je(n),1===t)0===e.tag?function(e){_o=!0,Uo(e)}(lc.bind(null,e)):Uo(lc.bind(null,e)),ao((function(){0===(6&Ol)&&Wo()})),n=null;else{switch(bt(r)){case 1:n=$e;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Rc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Xl=-1,$l=0,0!==(6&Ol))throw Error(i(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pt(e,e===Rl?Tl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var o=Ol;Ol|=2;var a=hc();for(Rl===e&&Tl===t||(Wl=null,Ul=Ze()+500,pc(e,t));;)try{yc();break}catch(l){fc(e,l)}Ei(),jl.current=a,Ol=o,null!==Pl?t=0:(Rl=null,Tl=0,t=Il)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=ic(e,o))),1===t)throw n=Ll,pc(e,0),sc(e,r),rc(e,Ze()),n;if(6===t)sc(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!sr(i(),o))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gc(e,r))&&(0!==(a=ht(e))&&(r=a,t=ic(e,a))),1===t))throw n=Ll,pc(e,0),sc(e,r),rc(e,Ze()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wc(e,_l,Wl);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Hl+500-Ze())){if(0!==pt(e,0))break;if(((o=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wc.bind(null,e,_l,Wl),t);break}wc(e,_l,Wl);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>o&&(o=s),r&=~a}if(r=o,10<(r=(120>(r=Ze()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Al(r/1960))-r)){e.timeoutHandle=ro(wc.bind(null,e,_l,Wl),r);break}wc(e,_l,Wl);break;default:throw Error(i(329))}}}return rc(e,Ze()),e.callbackNode===n?oc.bind(null,e):null}function ic(e,t){var n=Bl;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=_l,_l=n,null!==t&&ac(t)),e}function ac(e){null===_l?_l=e:_l.push.apply(_l,e)}function sc(e,t){for(t&=~Dl,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&Ol))throw Error(i(327));kc();var t=pt(e,0);if(0===(1&t))return rc(e,Ze()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ic(e,r))}if(1===n)throw n=Ll,pc(e,0),sc(e,t),rc(e,Ze()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,_l,Wl),rc(e,Ze()),null}function cc(e,t){var n=Ol;Ol|=1;try{return e(t)}finally{0===(Ol=n)&&(Ul=Ze()+500,_o&&Wo())}}function uc(e){null!==Jl&&0===Jl.tag&&0===(6&Ol)&&kc();var t=Ol;Ol|=1;var n=El.transition,r=vt;try{if(El.transition=null,vt=1,e)return e()}finally{vt=r,El.transition=n,0===(6&(Ol=t))&&Wo()}}function dc(){zl=Ml.current,Co(Ml)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==Pl)for(n=Pl.return;null!==n;){var r=n;switch(ni(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Io();break;case 3:Zi(),Co(Po),Co(Ro),ra();break;case 5:$i(r);break;case 4:Zi();break;case 13:case 19:Co(ea);break;case 10:Oi(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Rl=e,Pl=e=Mc(e.current,null),Tl=zl=t,Il=0,Ll=null,Dl=Nl=Fl=0,_l=Bl=null,null!==zi){for(t=0;t<zi.length;t++)if(null!==(r=(n=zi[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}zi=null}return e}function fc(e,t){for(;;){var n=Pl;try{if(Ei(),oa.current=Xa,ua){for(var r=sa.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ua=!1}if(aa=0,ca=la=sa=null,da=!1,pa=0,Cl.current=null,null===n||null===n.return){Il=1,Ll=t,Pl=null;break}e:{var a=e,s=n.return,l=n,c=t;if(t=Tl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gs(s);if(null!==h){h.flags&=-257,xs(h,s,l,0,t),1&h.mode&&ms(a,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ms(a,u,t),mc();break e}c=Error(i(426))}else if(ii&&1&l.mode){var x=gs(s);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xs(x,s,l,0,t),mi(cs(c,l));break e}}a=c=cs(c,l),4!==Il&&(Il=2),null===Bl?Bl=[a]:Bl.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Ui(a,fs(0,c,t));break e;case 1:l=c;var y=a.type,v=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==v&&"function"===typeof v.componentDidCatch&&(null===Kl||!Kl.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t,Ui(a,hs(a,l,t));break e}}a=a.return}while(null!==a)}bc(n)}catch(b){t=b,Pl===n&&null!==n&&(Pl=n=n.return);continue}break}}function hc(){var e=jl.current;return jl.current=Xa,null===e?Xa:e}function mc(){0!==Il&&3!==Il&&2!==Il||(Il=4),null===Rl||0===(268435455&Fl)&&0===(268435455&Nl)||sc(Rl,Tl)}function gc(e,t){var n=Ol;Ol|=2;var r=hc();for(Rl===e&&Tl===t||(Wl=null,pc(e,t));;)try{xc();break}catch(o){fc(e,o)}if(Ei(),Ol=n,jl.current=r,null!==Pl)throw Error(i(261));return Rl=null,Tl=0,Il}function xc(){for(;null!==Pl;)vc(Pl)}function yc(){for(;null!==Pl&&!Qe();)vc(Pl)}function vc(e){var t=Sl(e.alternate,e,zl);e.memoizedProps=e.pendingProps,null===t?bc(e):Pl=t,Cl.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Vs(n,t,zl)))return void(Pl=n)}else{if(null!==(n=Js(n,t)))return n.flags&=32767,void(Pl=n);if(null===e)return Il=6,void(Pl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Pl=t);Pl=t=e}while(null!==t);0===Il&&(Il=5)}function wc(e,t,n){var r=vt,o=El.transition;try{El.transition=null,vt=1,function(e,t,n,r){do{kc()}while(null!==Jl);if(0!==(6&Ol))throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,a),e===Rl&&(Pl=Rl=null,Tl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Vl||(Vl=!0,Rc(tt,(function(){return kc(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=El.transition,El.transition=null;var s=vt;vt=1;var l=Ol;Ol|=4,Cl.current=null,function(e,t){if(eo=qt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==o&&3!==p.nodeType||(l=s+o),p!==a||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===o&&(l=s),f===a&&++d===r&&(c=s),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},qt=!1,Xs=t;null!==Xs;)if(e=(t=Xs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xs=e;else for(;null!==Xs;){t=Xs;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),x);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(i(163))}}catch(w){Ac(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xs=e;break}Xs=t.return}m=tl,tl=!1}(e,n),gl(n,e),hr(to),qt=!!eo,to=eo=null,e.current=n,yl(n,e,o),Ye(),Ol=l,vt=s,El.transition=a}else e.current=n;if(Vl&&(Vl=!1,Jl=e,Ql=o),a=e.pendingLanes,0===a&&(Kl=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Ze()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ql)throw ql=!1,e=Gl,Gl=null,e;0!==(1&Ql)&&0!==e.tag&&kc(),a=e.pendingLanes,0!==(1&a)?e===Zl?Yl++:(Yl=0,Zl=e):Yl=0,Wo()}(e,t,n,r)}finally{El.transition=o,vt=r}return null}function kc(){if(null!==Jl){var e=bt(Ql),t=El.transition,n=vt;try{if(El.transition=null,vt=16>e?16:e,null===Jl)var r=!1;else{if(e=Jl,Jl=null,Ql=0,0!==(6&Ol))throw Error(i(331));var o=Ol;for(Ol|=4,Xs=e.current;null!==Xs;){var a=Xs,s=a.child;if(0!==(16&Xs.flags)){var l=a.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Xs=u;null!==Xs;){var d=Xs;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var p=d.child;if(null!==p)p.return=d,Xs=p;else for(;null!==Xs;){var f=(d=Xs).sibling,h=d.return;if(il(d),d===u){Xs=null;break}if(null!==f){f.return=h,Xs=f;break}Xs=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Xs=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Xs=s;else e:for(;null!==Xs;){if(0!==(2048&(a=Xs).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Xs=y;break e}Xs=a.return}}var v=e.current;for(Xs=v;null!==Xs;){var b=(s=Xs).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Xs=b;else e:for(s=v;null!==Xs;){if(0!==(2048&(l=Xs).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){Ac(l,l.return,k)}if(l===s){Xs=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Xs=w;break e}Xs=l.return}}if(Ol=o,Wo(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(k){}r=!0}return r}finally{vt=n,El.transition=t}}return!1}function Sc(e,t,n){e=_i(e,t=fs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function Ac(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Kl||!Kl.has(r))){t=_i(t,e=hs(t,e=cs(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function jc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Rl===e&&(Tl&n)===n&&(4===Il||3===Il&&(130023424&Tl)===Tl&&500>Ze()-Hl?pc(e,0):Dl|=n),rc(e,t)}function Cc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Li(e,t))&&(xt(e,t,n),rc(e,n))}function Ec(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cc(e,n)}function Oc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Cc(e,n)}function Rc(e,t){return Ve(e,t)}function Pc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tc(e,t,n,r){return new Pc(e,t,n,r)}function zc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Mc(e,t){var n=e.alternate;return null===n?((n=Tc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ic(e,t,n,r,o,a){var s=2;if(r=e,"function"===typeof e)zc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Lc(n.children,o,a,t);case A:s=8,o|=8;break;case j:return(e=Tc(12,n,t,2|o)).elementType=j,e.lanes=a,e;case R:return(e=Tc(13,n,t,o)).elementType=R,e.lanes=a,e;case P:return(e=Tc(19,n,t,o)).elementType=P,e.lanes=a,e;case M:return Fc(n,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case E:s=9;break e;case O:s=11;break e;case T:s=14;break e;case z:s=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Tc(s,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function Lc(e,t,n,r){return(e=Tc(7,e,r,t)).lanes=n,e}function Fc(e,t,n,r){return(e=Tc(22,e,r,t)).elementType=M,e.lanes=n,e.stateNode={isHidden:!1},e}function Nc(e,t,n){return(e=Tc(6,e,null,t)).lanes=n,e}function Dc(e,t,n){return(t=Tc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bc(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function _c(e,t,n,r,o,i,a,s,l){return e=new Bc(e,t,n,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Tc(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ni(i),e}function Hc(e){if(!e)return Oo;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Mo(n))return Fo(e,n,t)}return t}function Uc(e,t,n,r,o,i,a,s,l){return(e=_c(n,r,!0,e,0,i,0,s,l)).context=Hc(null),n=e.current,(i=Bi(r=ec(),o=tc(n))).callback=void 0!==t&&null!==t?t:null,_i(n,i,o),e.current.lanes=o,xt(e,o,r),rc(e,r),e}function Wc(e,t,n,r){var o=t.current,i=ec(),a=tc(o);return n=Hc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Bi(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=_i(o,t,a))&&(nc(e,o,a,i),Hi(e,o,a)),a}function qc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Gc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Kc(e,t){Gc(e,t),(e=e.alternate)&&Gc(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Po.current)vs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return vs=!1,function(e,t,n){switch(t.tag){case 3:Rs(t),hi();break;case 5:Xi(t);break;case 1:Mo(t.type)&&No(t);break;case 4:Yi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Eo(Si,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Eo(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ns(e,t,n):(Eo(ea,1&ea.current),null!==(e=qs(e,t,n))?e.sibling:null);Eo(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Us(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),Eo(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,As(e,t,n)}return qs(e,t,n)}(e,t,n);vs=0!==(131072&e.flags)}else vs=!1,ii&&0!==(1048576&t.flags)&&ei(t,Vo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ws(e,t),e=t.pendingProps;var o=zo(t,Ro.current);Pi(t,n),o=ga(null,t,r,e,o,n);var a=xa();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mo(r)?(a=!0,No(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Ni(t),o.updater=os,t.stateNode=o,o._reactInternals=t,ls(t,r,e,n),t=Os(null,t,r,!0,a,n)):(t.tag=0,ii&&a&&ti(t),bs(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ws(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return zc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===O)return 11;if(e===T)return 14}return 2}(r),e=ns(r,e),o){case 0:t=Cs(null,t,r,e,n);break e;case 1:t=Es(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,ns(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,Cs(e,t,r,o=t.elementType===r?o:ns(r,o),n);case 1:return r=t.type,o=t.pendingProps,Es(e,t,r,o=t.elementType===r?o:ns(r,o),n);case 3:e:{if(Rs(t),null===e)throw Error(i(387));r=t.pendingProps,o=(a=t.memoizedState).element,Di(e,t),Wi(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ps(e,t,r,n,o=cs(Error(i(423)),t));break e}if(r!==o){t=Ps(e,t,r,n,o=cs(Error(i(424)),t));break e}for(oi=co(t.stateNode.containerInfo.firstChild),ri=t,ii=!0,ai=null,n=ki(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===o){t=qs(e,t,n);break e}bs(e,t,r,n)}t=t.child}return t;case 5:return Xi(t),null===e&&ui(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,s=o.children,no(r,o)?s=null:null!==a&&no(r,a)&&(t.flags|=32),js(e,t),bs(e,t,s,n),t.child;case 6:return null===e&&ui(t),null;case 13:return Ns(e,t,n);case 4:return Yi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wi(t,null,r,n):bs(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,ws(e,t,r,o=t.elementType===r?o:ns(r,o),n);case 7:return bs(e,t,t.pendingProps,n),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,Eo(Si,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===o.children&&!Po.current){t=qs(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=Bi(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),Ri(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(i(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ri(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}bs(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Pi(t,n),r=r(o=Ti(o)),t.flags|=1,bs(e,t,r,n),t.child;case 14:return o=ns(r=t.type,t.pendingProps),ks(e,t,r,o=ns(r.type,o),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ns(r,o),Ws(e,t),t.tag=1,Mo(r)?(e=!0,No(t)):e=!1,Pi(t,n),as(t,r,o),ls(t,r,o,n),Os(null,t,r,!0,e,n);case 19:return Us(e,t,n);case 22:return As(e,t,n)}throw Error(i(156,t.tag))};var Vc="function"===typeof reportError?reportError:function(e){console.error(e)};function Jc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Zc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function $c(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"===typeof o){var s=o;o=function(){var e=qc(a);s.call(e)}}Wc(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"===typeof r){var i=r;r=function(){var e=qc(a);i.call(e)}}var a=Uc(t,r,e,0,null,!1,0,"",Xc);return e._reactRootContainer=a,e[mo]=a.current,Ur(8===e.nodeType?e.parentNode:e),uc(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var s=r;r=function(){var e=qc(l);s.call(e)}}var l=_c(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=l,e[mo]=l.current,Ur(8===e.nodeType?e.parentNode:e),uc((function(){Wc(t,l,n,r)})),l}(n,t,e,o,r);return qc(a)}Qc.prototype.render=Jc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Wc(e,t,null,null)},Qc.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Wc(null,e,null,null)})),t[mo]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=At();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&0!==t&&t<Mt[n].priority;n++);Mt.splice(n,0,e),0===n&&Nt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),rc(t,Ze()),0===(6&Ol)&&(Ul=Ze()+500,Wo()))}break;case 13:uc((function(){var t=Li(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Kc(e,1)}},kt=function(e){if(13===e.tag){var t=Li(e,134217728);if(null!==t)nc(t,e,134217728,ec());Kc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Li(e,t);if(null!==n)nc(n,e,t,ec());Kc(e,t)}},At=function(){return vt},jt=function(e,t){var n=vt;try{return vt=e,t()}finally{vt=n}},ke=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ko(r);if(!o)throw Error(i(90));V(r),X(r,o)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Oe=cc,Re=uc;var eu={usingClientEntryPoint:!1,Events:[bo,wo,ko,Ce,Ee,cc]},tu={findFiberByHostInstance:vo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ge(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{ot=ru.inject(nu),it=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yc(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Yc(e))throw Error(i(299));var n=!1,r="",o=Vc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=_c(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Jc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ge(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Zc(t))throw Error(i(200));return $c(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,o=!1,a="",s=Vc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Uc(t,null,e,1,null!=n?n:null,o,0,a,s),e[mo]=t.current,Ur(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Qc(t)},t.render=function(e,t,n){if(!Zc(t))throw Error(i(200));return $c(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Zc(e))throw Error(i(40));return!!e._reactRootContainer&&(uc((function(){$c(null,null,e,!1,(function(){e._reactRootContainer=null,e[mo]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zc(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return $c(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},5484:(e,t,n)=>{"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function i(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function a(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,a=null,s=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?s="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==a||null!==s){var l=e.displayName||e.name,c="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==a?"\n  "+a:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=o),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,r)}}return e}n.r(t),n.d(t,{polyfill:()=>a}),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},5765:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5043),a=h(i),s=h(n(7950)),l=h(n(5173)),c=h(n(1439)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(6619)),d=n(8821),p=h(d),f=n(5484);function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var g=t.portalClassName="ReactModalPortal",x=t.bodyOpenClassName="ReactModal__Body--open",y=d.canUseDOM&&void 0!==s.default.createPortal,v=function(e){return document.createElement(e)},b=function(){return y?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer};function w(e){return e()}var k=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=o=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.removePortal=function(){!y&&s.default.unmountComponentAtNode(o.node);var e=w(o.props.parentSelector);e&&e.contains(o.node)?e.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(e){o.portal=e},o.renderPortal=function(e){var n=b()(o,a.default.createElement(c.default,r({defaultStyles:t.defaultStyles},e)),o.node);o.portalRef(n)},m(o,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(y||(this.node=v("div")),this.node.className=this.props.portalClassName,w(this.props.parentSelector).appendChild(this.node),!y&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:w(e.parentSelector),nextParent:w(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var r=this.props,o=r.isOpen,i=r.portalClassName;e.portalClassName!==i&&(this.node.className=i);var a=n.prevParent,s=n.nextParent;s!==a&&(a.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||o)&&!y&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&y?(!this.node&&y&&(this.node=v("div")),b()(a.default.createElement(c.default,r({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){u.setElement(e)}}]),t}(i.Component);k.propTypes={isOpen:l.default.bool.isRequired,style:l.default.shape({content:l.default.object,overlay:l.default.object}),portalClassName:l.default.string,bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,className:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),overlayClassName:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),appElement:l.default.oneOfType([l.default.instanceOf(p.default),l.default.instanceOf(d.SafeHTMLCollection),l.default.instanceOf(d.SafeNodeList),l.default.arrayOf(l.default.instanceOf(p.default))]),onAfterOpen:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,ariaHideApp:l.default.bool,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,parentSelector:l.default.func,aria:l.default.object,data:l.default.object,role:l.default.string,contentLabel:l.default.string,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func},k.defaultProps={isOpen:!1,portalClassName:g,bodyOpenClassName:x,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return a.default.createElement("div",e,t)},contentElement:function(e,t){return a.default.createElement("div",e,t)}},k.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,f.polyfill)(k),t.default=k},1439:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(5043),s=g(n(5173)),l=m(n(1774)),c=g(n(2206)),u=m(n(6619)),d=m(n(4841)),p=n(8821),f=g(p),h=g(n(2959));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function g(e){return e&&e.__esModule?e:{default:e}}n(6062);var x={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},y=0,v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,r=e.ariaHideApp,o=e.htmlOpenClassName,i=e.bodyOpenClassName,a=e.parentSelector,s=a&&a().ownerDocument||document;i&&d.remove(s.body,i),o&&d.remove(s.getElementsByTagName("html")[0],o),r&&y>0&&0===(y-=1)&&u.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(l.returnFocus(n.props.preventScroll),l.teardownScopedFocus()):l.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),h.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(l.setupScopedFocus(n.node),l.markForFocusLater()),n.setState({isOpen:!0},(function(){n.openAnimationFrame=requestAnimationFrame((function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})}))})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){(function(e){return"Tab"===e.code||9===e.keyCode})(e)&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var r="object"===("undefined"===typeof t?"undefined":o(t))?t:{base:x[e],afterOpen:x[e]+"--after-open",beforeClose:x[e]+"--before-close"},i=r.base;return n.state.afterOpen&&(i=i+" "+r.afterOpen),n.state.beforeClose&&(i=i+" "+r.beforeClose),"string"===typeof t&&t?i+" "+t:i},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,r){return n[e+"-"+r]=t[r],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,o=e.bodyOpenClassName,i=e.parentSelector,a=i&&i().ownerDocument||document;o&&d.add(a.body,o),r&&d.add(a.getElementsByTagName("html")[0],r),n&&(y+=1,u.hide(t)),h.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,o=e.overlayClassName,i=e.defaultStyles,a=e.children,s=n?{}:i.content,l=o?{}:i.overlay;if(this.shouldBeClosed())return null;var c={ref:this.setOverlayRef,className:this.buildClassName("overlay",o),style:r({},l,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},u=r({id:t,ref:this.setContentRef,style:r({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(u,a);return this.props.overlayElement(c,d)}}]),t}(a.Component);v.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},v.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(f.default),s.default.instanceOf(p.SafeHTMLCollection),s.default.instanceOf(p.SafeNodeList),s.default.arrayOf(s.default.instanceOf(f.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=v,e.exports=t.default},6619:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){s&&(s.removeAttribute?s.removeAttribute("aria-hidden"):null!=s.length?s.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(s).forEach((function(e){return e.removeAttribute("aria-hidden")})));s=null},t.log=function(){0},t.assertNodeList=l,t.setElement=function(e){var t=e;if("string"===typeof t&&a.canUseDOM){var n=document.querySelectorAll(t);l(n,t),t=n}return s=t||s},t.validateElement=c,t.hide=function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=c(e)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){o.value.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}},t.show=function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=c(e)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){o.value.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}},t.documentNotReadyOrSSRTesting=function(){s=null};var r,o=n(6440),i=(r=o)&&r.__esModule?r:{default:r},a=n(8821);var s=null;function l(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function c(e){var t=e||s;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,i.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},6062:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){for(var e=[a,s],t=0;t<e.length;t++){var n=e[t];n&&(n.parentNode&&n.parentNode.removeChild(n))}a=s=null,l=[]},t.log=function(){console.log("bodyTrap ----------"),console.log(l.length);for(var e=[a,s],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")};var r,o=n(2959),i=(r=o)&&r.__esModule?r:{default:r};var a=void 0,s=void 0,l=[];function c(){0!==l.length&&l[l.length-1].focusContent()}i.default.subscribe((function(e,t){a||s||((a=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),a.style.position="absolute",a.style.opacity="0",a.setAttribute("tabindex","0"),a.addEventListener("focus",c),(s=a.cloneNode()).addEventListener("focus",c)),(l=t).length>0?(document.body.firstChild!==a&&document.body.insertBefore(a,document.body.firstChild),document.body.lastChild!==s&&document.body.appendChild(s)):(a.parentElement&&a.parentElement.removeChild(a),s.parentElement&&s.parentElement.removeChild(s))}))},4841:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var t in n)o(e,n[t]);var i=document.body;for(var a in r)o(i,r[a]);n={},r={}},t.log=function(){0};var n={},r={};function o(e,t){e.classList.remove(t)}t.add=function(e,t){return o=e.classList,i="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(i,e),o.add(e)}));var o,i},t.remove=function(e,t){return o=e.classList,i="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(i,e),0===i[e]&&o.remove(e)}));var o,i}},1774:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){a=[]},t.log=function(){0},t.handleBlur=c,t.handleFocus=u,t.markForFocusLater=function(){a.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==a.length&&(t=a.pop()).focus({preventScroll:e}))}catch(n){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){a.length>0&&a.pop()},t.setupScopedFocus=function(e){s=e,window.addEventListener?(window.addEventListener("blur",c,!1),document.addEventListener("focus",u,!0)):(window.attachEvent("onBlur",c),document.attachEvent("onFocus",u))},t.teardownScopedFocus=function(){s=null,window.addEventListener?(window.removeEventListener("blur",c),document.removeEventListener("focus",u)):(window.detachEvent("onBlur",c),document.detachEvent("onFocus",u))};var r,o=n(4682),i=(r=o)&&r.__esModule?r:{default:r};var a=[],s=null,l=!1;function c(){l=!0}function u(){if(l){if(l=!1,!s)return;setTimeout((function(){s.contains(document.activeElement)||((0,i.default)(s)[0]||s).focus()}),0)}}},2959:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(){console.log("portalOpenInstances ----------"),console.log(r.openInstances.length),r.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},t.resetState=function(){r=new n};var n=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},r=new n;t.default=r},8821:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var r,o=n(7396);var i=((r=o)&&r.__esModule?r:{default:r}).default,a=i.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=i.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=i.canUseDOM?window.NodeList:{},t.canUseDOM=i.canUseDOM;t.default=a},2206:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,i.default)(e);if(!n.length)return void t.preventDefault();var r=void 0,o=t.shiftKey,s=n[0],l=n[n.length-1],c=a();if(e===c){if(!o)return;r=l}l!==c||o||(r=s);s===c&&o&&(r=l);if(r)return t.preventDefault(),void r.focus();var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==u||"Chrome"==u[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var d=n.indexOf(c);d>-1&&(d+=o?-1:1);if("undefined"===typeof(r=n[d]))return t.preventDefault(),void(r=o?l:s).focus();t.preventDefault(),r.focus()};var r,o=n(4682),i=(r=o)&&r.__esModule?r:{default:r};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?a(e.activeElement.shadowRoot):e.activeElement}e.exports=t.default},4682:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=[].slice.call(t.querySelectorAll("*"),0).reduce((function(t,n){return t.concat(n.shadowRoot?e(n.shadowRoot):[n])}),[]);return n.filter(s)};var n="none",r="contents",o=/input|select|textarea|button|object|iframe/;function i(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var o=window.getComputedStyle(e),i=o.getPropertyValue("display");return t?i!==r&&function(e,t){return"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0}(e,o):i===n}catch(a){return console.warn("Failed to inspect element style"),!1}}function a(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),i(t))return!1;t=t.parentNode}return!0}(e)}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}e.exports=t.default},2963:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5765),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default,e.exports=t.default},2501:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(5043)),o=s(n(5173)),i=s(n(381)),a=s(n(7324));function s(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var c=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).isVisible=function(e,t,r){var o=e.top,i=e.left,a=e.bottom,s=e.right,l=e.width,c=e.height,u=n.props,d=u.offset,p=u.partialVisibility;if(o+s+a+i===0)return!1;var f=0-d,h=0-d,m=t+d,g=r+d;return p?o+c>=f&&i+l>=h&&a-c<=g&&s-l<=m:o>=f&&i>=h&&a<=g&&s<=m},n.isComponentVisible=function(){setTimeout((function(){if(n.nodeRef&&n.nodeRef.getBoundingClientRect){var e=document.documentElement,t=n.props.once,r=n.nodeRef.getBoundingClientRect(),o=window.innerWidth||e.clientWidth,i=window.innerHeight||e.clientHeight,a=n.isVisible(r,o,i);a&&t&&n.removeListener(),n.setState({isVisible:a})}}),0)},n.setNodeRef=function(e){return n.nodeRef=e},n.ownProps=Object.keys(o.propTypes),n.state={isVisible:!1},n.throttleCb=(0,i.default)(n.isComponentVisible,n.props.throttleInterval),t.nodeRef&&n.setNodeRef(t.nodeRef),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=o.prototype;return s.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},s.componentDidUpdate=function(e){(0,a.default)(this.getChildProps(this.props),this.getChildProps(e))||this.isComponentVisible()},s.componentWillUnmount=function(){this.removeListener()},s.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},s.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},s.getChildProps=function(e){var t=this;void 0===e&&(e=this.props);var n={};return Object.keys(e).forEach((function(r){-1===t.ownProps.indexOf(r)&&(n[r]=e[r])})),n},s.getChildren=function(){var e=this;return"function"===typeof this.props.children?this.props.children(l({},this.getChildProps(),{isVisible:this.state.isVisible})):r.default.Children.map(this.props.children,(function(t){return r.default.cloneElement(t,l({},e.getChildProps(),{isVisible:e.state.isVisible}))}))},s.render=function(){var e=this.props,t=e.className,n=e.style,o=e.nodeRef,i=e.tag,a=l({},t&&{className:t},n&&{style:n});return r.default.createElement(i,l({ref:!o&&this.setNodeRef},a),this.getChildren())},o}(r.PureComponent);t.default=c,c.propTypes={once:o.default.bool,throttleInterval:function(e,t,n){var r=e[t];return!Number.isInteger(r)||r<0?new Error("The "+t+" prop you provided to "+n+" is not a valid integer >= 0."):null},children:o.default.oneOfType([o.default.func,o.default.element,o.default.arrayOf(o.default.element)]),style:o.default.object,className:o.default.string,offset:o.default.number,partialVisibility:o.default.bool,nodeRef:o.default.object,tag:o.default.string},c.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},6930:(e,t,n)=>{"use strict";var r;t.A=void 0;var o=((r=n(2501))&&r.__esModule?r:{default:r}).default;t.A=o},6214:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.PrevArrow=t.NextArrow=void 0;var o=s(n(5043)),i=s(n(8139)),a=n(1200);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m(r.key),r)}}function h(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function y(e){var t=v();return function(){var n,o=b(e);if(t){var i=b(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}t.PrevArrow=function(e){g(n,e);var t=y(n);function n(){return p(this,n),t.apply(this,arguments)}return h(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var n={key:"0","data-role":"none",className:(0,i.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?o.default.cloneElement(this.props.prevArrow,u(u({},n),r)):o.default.createElement("button",l({key:"0",type:"button"},n)," ","Previous")}}]),n}(o.default.PureComponent),t.NextArrow=function(e){g(n,e);var t=y(n);function n(){return p(this,n),t.apply(this,arguments)}return h(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});(0,a.canGoNext)(this.props)||(e["slick-disabled"]=!0,t=null);var n={key:"1","data-role":"none",className:(0,i.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?o.default.cloneElement(this.props.nextArrow,u(u({},n),r)):o.default.createElement("button",l({key:"1",type:"button"},n)," ","Next")}}]),n}(o.default.PureComponent)},5112:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(5043))&&r.__esModule?r:{default:r};var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return o.default.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return o.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};t.default=i},8496:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Dots=void 0;var o=s(n(5043)),i=s(n(8139)),a=n(1200);function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return(t=d(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function d(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){var t=h();return function(){var n,o=m(e);if(t){var i=m(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}t.Dots=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(d,e);var t,n,r,s=f(d);function d(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),s.apply(this,arguments)}return t=d,n=[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.props.clickHandler(e)}},{key:"render",value:function(){for(var e,t=this.props,n=t.onMouseEnter,r=t.onMouseOver,s=t.onMouseLeave,u=t.infinite,d=t.slidesToScroll,p=t.slidesToShow,f=t.slideCount,h=t.currentSlide,m=(e={slideCount:f,slidesToScroll:d,slidesToShow:p,infinite:u}).infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,g={onMouseEnter:n,onMouseOver:r,onMouseLeave:s},x=[],y=0;y<m;y++){var v=(y+1)*d-1,b=u?v:(0,a.clamp)(v,0,f-1),w=b-(d-1),k=u?w:(0,a.clamp)(w,0,f-1),S=(0,i.default)({"slick-active":u?h>=k&&h<=b:h===k}),A={message:"dots",index:y,slidesToScroll:d,currentSlide:h},j=this.clickHandler.bind(this,A);x=x.concat(o.default.createElement("li",{key:y,className:S},o.default.cloneElement(this.props.customPaging(y),{onClick:j})))}return o.default.cloneElement(this.props.appendDots(x),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:this.props.dotsClass},g))}}],n&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),d}(o.default.PureComponent)},2382:(e,t,n)=>{"use strict";t.A=void 0;var r,o=(r=n(433))&&r.__esModule?r:{default:r};t.A=o.default},4910:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0}},9826:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InnerSlider=void 0;var r=p(n(5043)),o=p(n(4910)),i=p(n(446)),a=p(n(8139)),s=n(1200),l=n(737),c=n(8496),u=n(6214),d=p(n(5820));function p(e){return e&&e.__esModule?e:{default:e}}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,j(r.key),r)}}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){var t=k();return function(){var n,r=S(e);if(t){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(this,n)}}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(k=function(){return!!e})()}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function A(e,t,n){return(t=j(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==f(t)?t:String(t)}t.InnerSlider=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(k,e);var t,n,p,g=b(k);function k(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,k),A(w(t=g.call(this,e)),"listRefHandler",(function(e){return t.list=e})),A(w(t),"trackRefHandler",(function(e){return t.track=e})),A(w(t),"adaptHeight",(function(){if(t.props.adaptiveHeight&&t.list){var e=t.list.querySelector('[data-index="'.concat(t.state.currentSlide,'"]'));t.list.style.height=(0,s.getHeight)(e)+"px"}})),A(w(t),"componentDidMount",(function(){if(t.props.onInit&&t.props.onInit(),t.props.lazyLoad){var e=(0,s.getOnDemandLazySlides)(x(x({},t.props),t.state));e.length>0&&(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e))}var n=x({listRef:t.list,trackRef:t.track},t.props);t.updateState(n,!0,(function(){t.adaptHeight(),t.props.autoplay&&t.autoPlay("update")})),"progressive"===t.props.lazyLoad&&(t.lazyLoadTimer=setInterval(t.progressiveLazyLoad,1e3)),t.ro=new d.default((function(){t.state.animating?(t.onWindowResized(!1),t.callbackTimers.push(setTimeout((function(){return t.onWindowResized()}),t.props.speed))):t.onWindowResized()})),t.ro.observe(t.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),(function(e){e.onfocus=t.props.pauseOnFocus?t.onSlideFocus:null,e.onblur=t.props.pauseOnFocus?t.onSlideBlur:null})),window.addEventListener?window.addEventListener("resize",t.onWindowResized):window.attachEvent("onresize",t.onWindowResized)})),A(w(t),"componentWillUnmount",(function(){t.animationEndCallback&&clearTimeout(t.animationEndCallback),t.lazyLoadTimer&&clearInterval(t.lazyLoadTimer),t.callbackTimers.length&&(t.callbackTimers.forEach((function(e){return clearTimeout(e)})),t.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",t.onWindowResized):window.detachEvent("onresize",t.onWindowResized),t.autoplayTimer&&clearInterval(t.autoplayTimer),t.ro.disconnect()})),A(w(t),"componentDidUpdate",(function(e){if(t.checkImagesLoad(),t.props.onReInit&&t.props.onReInit(),t.props.lazyLoad){var n=(0,s.getOnDemandLazySlides)(x(x({},t.props),t.state));n.length>0&&(t.setState((function(e){return{lazyLoadedList:e.lazyLoadedList.concat(n)}})),t.props.onLazyLoad&&t.props.onLazyLoad(n))}t.adaptHeight();var o=x(x({listRef:t.list,trackRef:t.track},t.props),t.state),i=t.didPropsChange(e);i&&t.updateState(o,i,(function(){t.state.currentSlide>=r.default.Children.count(t.props.children)&&t.changeSlide({message:"index",index:r.default.Children.count(t.props.children)-t.props.slidesToShow,currentSlide:t.state.currentSlide}),t.props.autoplay?t.autoPlay("update"):t.pause("paused")}))})),A(w(t),"onWindowResized",(function(e){t.debouncedResize&&t.debouncedResize.cancel(),t.debouncedResize=(0,i.default)((function(){return t.resizeWindow(e)}),50),t.debouncedResize()})),A(w(t),"resizeWindow",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(Boolean(t.track&&t.track.node)){var n=x(x({listRef:t.list,trackRef:t.track},t.props),t.state);t.updateState(n,e,(function(){t.props.autoplay?t.autoPlay("update"):t.pause("paused")})),t.setState({animating:!1}),clearTimeout(t.animationEndCallback),delete t.animationEndCallback}})),A(w(t),"updateState",(function(e,n,o){var i=(0,s.initializedState)(e);e=x(x(x({},e),i),{},{slideIndex:i.currentSlide});var a=(0,s.getTrackLeft)(e);e=x(x({},e),{},{left:a});var l=(0,s.getTrackCSS)(e);(n||r.default.Children.count(t.props.children)!==r.default.Children.count(e.children))&&(i.trackStyle=l),t.setState(i,o)})),A(w(t),"ssrInit",(function(){if(t.props.variableWidth){var e=0,n=0,o=[],i=(0,s.getPreClones)(x(x(x({},t.props),t.state),{},{slideCount:t.props.children.length})),a=(0,s.getPostClones)(x(x(x({},t.props),t.state),{},{slideCount:t.props.children.length}));t.props.children.forEach((function(t){o.push(t.props.style.width),e+=t.props.style.width}));for(var l=0;l<i;l++)n+=o[o.length-1-l],e+=o[o.length-1-l];for(var c=0;c<a;c++)e+=o[c];for(var u=0;u<t.state.currentSlide;u++)n+=o[u];var d={width:e+"px",left:-n+"px"};if(t.props.centerMode){var p="".concat(o[t.state.currentSlide],"px");d.left="calc(".concat(d.left," + (100% - ").concat(p,") / 2 ) ")}return{trackStyle:d}}var f=r.default.Children.count(t.props.children),h=x(x(x({},t.props),t.state),{},{slideCount:f}),m=(0,s.getPreClones)(h)+(0,s.getPostClones)(h)+f,g=100/t.props.slidesToShow*m,y=100/m,v=-y*((0,s.getPreClones)(h)+t.state.currentSlide)*g/100;return t.props.centerMode&&(v+=(100-y*g/100)/2),{slideWidth:y+"%",trackStyle:{width:g+"%",left:v+"%"}}})),A(w(t),"checkImagesLoad",(function(){var e=t.list&&t.list.querySelectorAll&&t.list.querySelectorAll(".slick-slide img")||[],n=e.length,r=0;Array.prototype.forEach.call(e,(function(e){var o=function(){return++r&&r>=n&&t.onWindowResized()};if(e.onclick){var i=e.onclick;e.onclick=function(t){i(t),e.parentNode.focus()}}else e.onclick=function(){return e.parentNode.focus()};e.onload||(t.props.lazyLoad?e.onload=function(){t.adaptHeight(),t.callbackTimers.push(setTimeout(t.onWindowResized,t.props.speed))}:(e.onload=o,e.onerror=function(){o(),t.props.onLazyLoadError&&t.props.onLazyLoadError()}))}))})),A(w(t),"progressiveLazyLoad",(function(){for(var e=[],n=x(x({},t.props),t.state),r=t.state.currentSlide;r<t.state.slideCount+(0,s.getPostClones)(n);r++)if(t.state.lazyLoadedList.indexOf(r)<0){e.push(r);break}for(var o=t.state.currentSlide-1;o>=-(0,s.getPreClones)(n);o--)if(t.state.lazyLoadedList.indexOf(o)<0){e.push(o);break}e.length>0?(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e)):t.lazyLoadTimer&&(clearInterval(t.lazyLoadTimer),delete t.lazyLoadTimer)})),A(w(t),"slideHandler",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.props,o=r.asNavFor,i=r.beforeChange,a=r.onLazyLoad,l=r.speed,c=r.afterChange,u=t.state.currentSlide,d=(0,s.slideHandler)(x(x(x({index:e},t.props),t.state),{},{trackRef:t.track,useCSS:t.props.useCSS&&!n})),p=d.state,f=d.nextState;if(p){i&&i(u,p.currentSlide);var h=p.lazyLoadedList.filter((function(e){return t.state.lazyLoadedList.indexOf(e)<0}));a&&h.length>0&&a(h),!t.props.waitForAnimate&&t.animationEndCallback&&(clearTimeout(t.animationEndCallback),c&&c(u),delete t.animationEndCallback),t.setState(p,(function(){o&&t.asNavForIndex!==e&&(t.asNavForIndex=e,o.innerSlider.slideHandler(e)),f&&(t.animationEndCallback=setTimeout((function(){var e=f.animating,n=m(f,["animating"]);t.setState(n,(function(){t.callbackTimers.push(setTimeout((function(){return t.setState({animating:e})}),10)),c&&c(p.currentSlide),delete t.animationEndCallback}))}),l))}))}})),A(w(t),"changeSlide",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=x(x({},t.props),t.state),o=(0,s.changeSlide)(r,e);if((0===o||o)&&(!0===n?t.slideHandler(o,n):t.slideHandler(o),t.props.autoplay&&t.autoPlay("update"),t.props.focusOnSelect)){var i=t.list.querySelectorAll(".slick-current");i[0]&&i[0].focus()}})),A(w(t),"clickHandler",(function(e){!1===t.clickable&&(e.stopPropagation(),e.preventDefault()),t.clickable=!0})),A(w(t),"keyHandler",(function(e){var n=(0,s.keyHandler)(e,t.props.accessibility,t.props.rtl);""!==n&&t.changeSlide({message:n})})),A(w(t),"selectHandler",(function(e){t.changeSlide(e)})),A(w(t),"disableBodyScroll",(function(){window.ontouchmove=function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}})),A(w(t),"enableBodyScroll",(function(){window.ontouchmove=null})),A(w(t),"swipeStart",(function(e){t.props.verticalSwiping&&t.disableBodyScroll();var n=(0,s.swipeStart)(e,t.props.swipe,t.props.draggable);""!==n&&t.setState(n)})),A(w(t),"swipeMove",(function(e){var n=(0,s.swipeMove)(e,x(x(x({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));n&&(n.swiping&&(t.clickable=!1),t.setState(n))})),A(w(t),"swipeEnd",(function(e){var n=(0,s.swipeEnd)(e,x(x(x({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));if(n){var r=n.triggerSlideHandler;delete n.triggerSlideHandler,t.setState(n),void 0!==r&&(t.slideHandler(r),t.props.verticalSwiping&&t.enableBodyScroll())}})),A(w(t),"touchEnd",(function(e){t.swipeEnd(e),t.clickable=!0})),A(w(t),"slickPrev",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"previous"})}),0))})),A(w(t),"slickNext",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"next"})}),0))})),A(w(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=Number(e),isNaN(e))return"";t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"index",index:e,currentSlide:t.state.currentSlide},n)}),0))})),A(w(t),"play",(function(){var e;if(t.props.rtl)e=t.state.currentSlide-t.props.slidesToScroll;else{if(!(0,s.canGoNext)(x(x({},t.props),t.state)))return!1;e=t.state.currentSlide+t.props.slidesToScroll}t.slideHandler(e)})),A(w(t),"autoPlay",(function(e){t.autoplayTimer&&clearInterval(t.autoplayTimer);var n=t.state.autoplaying;if("update"===e){if("hovered"===n||"focused"===n||"paused"===n)return}else if("leave"===e){if("paused"===n||"focused"===n)return}else if("blur"===e&&("paused"===n||"hovered"===n))return;t.autoplayTimer=setInterval(t.play,t.props.autoplaySpeed+50),t.setState({autoplaying:"playing"})})),A(w(t),"pause",(function(e){t.autoplayTimer&&(clearInterval(t.autoplayTimer),t.autoplayTimer=null);var n=t.state.autoplaying;"paused"===e?t.setState({autoplaying:"paused"}):"focused"===e?"hovered"!==n&&"playing"!==n||t.setState({autoplaying:"focused"}):"playing"===n&&t.setState({autoplaying:"hovered"})})),A(w(t),"onDotsOver",(function(){return t.props.autoplay&&t.pause("hovered")})),A(w(t),"onDotsLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),A(w(t),"onTrackOver",(function(){return t.props.autoplay&&t.pause("hovered")})),A(w(t),"onTrackLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),A(w(t),"onSlideFocus",(function(){return t.props.autoplay&&t.pause("focused")})),A(w(t),"onSlideBlur",(function(){return t.props.autoplay&&"focused"===t.state.autoplaying&&t.autoPlay("blur")})),A(w(t),"render",(function(){var e,n,o,i=(0,a.default)("slick-slider",t.props.className,{"slick-vertical":t.props.vertical,"slick-initialized":!0}),d=x(x({},t.props),t.state),p=(0,s.extractObject)(d,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),f=t.props.pauseOnHover;if(p=x(x({},p),{},{onMouseEnter:f?t.onTrackOver:null,onMouseLeave:f?t.onTrackLeave:null,onMouseOver:f?t.onTrackOver:null,focusOnSelect:t.props.focusOnSelect&&t.clickable?t.selectHandler:null}),!0===t.props.dots&&t.state.slideCount>=t.props.slidesToShow){var m=(0,s.extractObject)(d,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=t.props.pauseOnDotsHover;m=x(x({},m),{},{clickHandler:t.changeSlide,onMouseEnter:g?t.onDotsLeave:null,onMouseOver:g?t.onDotsOver:null,onMouseLeave:g?t.onDotsLeave:null}),e=r.default.createElement(c.Dots,m)}var y=(0,s.extractObject)(d,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=t.changeSlide,t.props.arrows&&(n=r.default.createElement(u.PrevArrow,y),o=r.default.createElement(u.NextArrow,y));var v=null;t.props.vertical&&(v={height:t.state.listHeight});var b=null;!1===t.props.vertical?!0===t.props.centerMode&&(b={padding:"0px "+t.props.centerPadding}):!0===t.props.centerMode&&(b={padding:t.props.centerPadding+" 0px"});var w=x(x({},v),b),k=t.props.touchMove,S={className:"slick-list",style:w,onClick:t.clickHandler,onMouseDown:k?t.swipeStart:null,onMouseMove:t.state.dragging&&k?t.swipeMove:null,onMouseUp:k?t.swipeEnd:null,onMouseLeave:t.state.dragging&&k?t.swipeEnd:null,onTouchStart:k?t.swipeStart:null,onTouchMove:t.state.dragging&&k?t.swipeMove:null,onTouchEnd:k?t.touchEnd:null,onTouchCancel:t.state.dragging&&k?t.swipeEnd:null,onKeyDown:t.props.accessibility?t.keyHandler:null},A={className:i,dir:"ltr",style:t.props.style};return t.props.unslick&&(S={className:"slick-list"},A={className:i}),r.default.createElement("div",A,t.props.unslick?"":n,r.default.createElement("div",h({ref:t.listRefHandler},S),r.default.createElement(l.Track,h({ref:t.trackRefHandler},p),t.props.children)),t.props.unslick?"":o,t.props.unslick?"":e)})),t.list=null,t.track=null,t.state=x(x({},o.default),{},{currentSlide:t.props.initialSlide,targetSlide:t.props.initialSlide?t.props.initialSlide:0,slideCount:r.default.Children.count(t.props.children)}),t.callbackTimers=[],t.clickable=!0,t.debouncedResize=null;var n=t.ssrInit();return t.state=x(x({},t.state),n),t}return t=k,(n=[{key:"didPropsChange",value:function(e){for(var t=!1,n=0,o=Object.keys(this.props);n<o.length;n++){var i=o[n];if(!e.hasOwnProperty(i)){t=!0;break}if("object"!==f(e[i])&&"function"!==typeof e[i]&&!isNaN(e[i])&&e[i]!==this.props[i]){t=!0;break}}return t||r.default.Children.count(this.props.children)!==r.default.Children.count(e.children)}}])&&y(t.prototype,n),p&&y(t,p),Object.defineProperty(t,"prototype",{writable:!1}),k}(r.default.Component)},433:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(5043)),o=n(9826),i=l(n(1270)),a=l(n(5112)),s=n(1200);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function m(e){var t=x();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}(this,n)}}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function v(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==c(t)?t:String(t)}var w=(0,s.canUseDOM)()&&n(535);t.default=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(d,e);var t,n,l,c=m(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),v(g(t=c.call(this,e)),"innerSliderRefHandler",(function(e){return t.innerSlider=e})),v(g(t),"slickPrev",(function(){return t.innerSlider.slickPrev()})),v(g(t),"slickNext",(function(){return t.innerSlider.slickNext()})),v(g(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.innerSlider.slickGoTo(e,n)})),v(g(t),"slickPause",(function(){return t.innerSlider.pause("paused")})),v(g(t),"slickPlay",(function(){return t.innerSlider.autoPlay("play")})),t.state={breakpoint:null},t._responsiveMediaHandlers=[],t}return t=d,(n=[{key:"media",value:function(e,t){w.register(e,t),this._responsiveMediaHandlers.push({query:e,handler:t})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map((function(e){return e.breakpoint}));t.sort((function(e,t){return e-t})),t.forEach((function(n,r){var o;o=0===r?(0,i.default)({minWidth:0,maxWidth:n}):(0,i.default)({minWidth:t[r-1]+1,maxWidth:n}),(0,s.canUseDOM)()&&e.media(o,(function(){e.setState({breakpoint:n})}))}));var n=(0,i.default)({minWidth:t.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(n,(function(){e.setState({breakpoint:null})}))}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach((function(e){w.unregister(e.query,e.handler)}))}},{key:"render",value:function(){var e,t,n=this;(e=this.state.breakpoint?"unslick"===(t=this.props.responsive.filter((function(e){return e.breakpoint===n.state.breakpoint})))[0].settings?"unslick":p(p(p({},a.default),this.props),t[0].settings):p(p({},a.default),this.props)).centerMode&&(e.slidesToScroll,e.slidesToScroll=1),e.fade&&(e.slidesToShow,e.slidesToScroll,e.slidesToShow=1,e.slidesToScroll=1);var i=r.default.Children.toArray(this.props.children);i=i.filter((function(e){return"string"===typeof e?!!e.trim():!!e})),e.variableWidth&&(e.rows>1||e.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),e.variableWidth=!1);for(var l=[],c=null,d=0;d<i.length;d+=e.rows*e.slidesPerRow){for(var f=[],h=d;h<d+e.rows*e.slidesPerRow;h+=e.slidesPerRow){for(var m=[],g=h;g<h+e.slidesPerRow&&(e.variableWidth&&i[g].props.style&&(c=i[g].props.style.width),!(g>=i.length));g+=1)m.push(r.default.cloneElement(i[g],{key:100*d+10*h+g,tabIndex:-1,style:{width:"".concat(100/e.slidesPerRow,"%"),display:"inline-block"}}));f.push(r.default.createElement("div",{key:10*d+h},m))}e.variableWidth?l.push(r.default.createElement("div",{key:d,style:{width:c}},f)):l.push(r.default.createElement("div",{key:d},f))}if("unslick"===e){var x="regular slider "+(this.props.className||"");return r.default.createElement("div",{className:x},i)}return l.length<=e.slidesToShow&&!e.infinite&&(e.unslick=!0),r.default.createElement(o.InnerSlider,u({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(e)),l)}}])&&f(t.prototype,n),l&&f(t,l),Object.defineProperty(t,"prototype",{writable:!1}),d}(r.default.Component)},737:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Track=void 0;var r=a(n(5043)),o=a(n(8139)),i=n(1200);function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function d(e){var t=f();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,n)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==s(t)?t:String(t)}var v=function(e){var t,n,r,o,i;return r=(i=e.rtl?e.slideCount-1-e.index:e.index)<0||i>=e.slideCount,e.centerMode?(o=Math.floor(e.slidesToShow/2),n=(i-e.currentSlide)%e.slideCount===0,i>e.currentSlide-o-1&&i<=e.currentSlide+o&&(t=!0)):t=e.currentSlide<=i&&i<e.currentSlide+e.slidesToShow,{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":r,"slick-current":i===(e.targetSlide<0?e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?e.targetSlide-e.slideCount:e.targetSlide)}},b=function(e,t){return e.key||t},w=function(e){var t,n=[],a=[],s=[],l=r.default.Children.count(e.children),c=(0,i.lazyStartIndex)(e),u=(0,i.lazyEndIndex)(e);return r.default.Children.forEach(e.children,(function(d,p){var f,h={message:"children",index:p,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};f=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(p)>=0?d:r.default.createElement("div",null);var m=function(e){var t={};return void 0!==e.variableWidth&&!1!==e.variableWidth||(t.width=e.slideWidth),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=e.currentSlide===e.index?1:0,t.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t}(g(g({},e),{},{index:p})),x=f.props.className||"",y=v(g(g({},e),{},{index:p}));if(n.push(r.default.cloneElement(f,{key:"original"+b(f,p),"data-index":p,className:(0,o.default)(y,x),tabIndex:"-1","aria-hidden":!y["slick-active"],style:g(g({outline:"none"},f.props.style||{}),m),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(h)}})),e.infinite&&!1===e.fade){var w=l-p;w<=(0,i.getPreClones)(e)&&((t=-w)>=c&&(f=d),y=v(g(g({},e),{},{index:t})),a.push(r.default.cloneElement(f,{key:"precloned"+b(f,t),"data-index":t,tabIndex:"-1",className:(0,o.default)(y,x),"aria-hidden":!y["slick-active"],style:g(g({},f.props.style||{}),m),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(h)}}))),(t=l+p)<u&&(f=d),y=v(g(g({},e),{},{index:t})),s.push(r.default.cloneElement(f,{key:"postcloned"+b(f,t),"data-index":t,tabIndex:"-1",className:(0,o.default)(y,x),"aria-hidden":!y["slick-active"],style:g(g({},f.props.style||{}),m),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(h)}}))}})),e.rtl?a.concat(n,s).reverse():a.concat(n,s)};t.Track=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(a,e);var t,n,o,i=d(a);function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(p(e=i.call.apply(i,[this].concat(n))),"node",null),x(p(e),"handleRef",(function(t){e.node=t})),e}return t=a,(n=[{key:"render",value:function(){var e=w(this.props),t=this.props,n={onMouseEnter:t.onMouseEnter,onMouseOver:t.onMouseOver,onMouseLeave:t.onMouseLeave};return r.default.createElement("div",l({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},n),e)}}])&&c(t.prototype,n),o&&c(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.default.PureComponent)},1200:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkSpecKeys=t.checkNavigable=t.changeSlide=t.canUseDOM=t.canGoNext=void 0,t.clamp=u,t.extractObject=void 0,t.filterSettings=function(e){return I.reduce((function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t}),{})},t.validSettings=t.swipeStart=t.swipeMove=t.swipeEnd=t.slidesOnRight=t.slidesOnLeft=t.slideHandler=t.siblingDirection=t.safePreventDefault=t.lazyStartIndex=t.lazySlidesOnRight=t.lazySlidesOnLeft=t.lazyEndIndex=t.keyHandler=t.initializedState=t.getWidth=t.getTrackLeft=t.getTrackCSS=t.getTrackAnimateCSS=t.getTotalSlides=t.getSwipeDirection=t.getSlideCount=t.getRequiredLazySlides=t.getPreClones=t.getPostClones=t.getOnDemandLazySlides=t.getNavigableIndexes=t.getHeight=void 0;var r=i(n(5043)),o=i(n(5112));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){return Math.max(t,Math.min(e,n))}var d=t.safePreventDefault=function(e){["onTouchStart","onTouchMove","onWheel"].includes(e._reactName)||e.preventDefault()},p=t.getOnDemandLazySlides=function(e){for(var t=[],n=f(e),r=h(e),o=n;o<r;o++)e.lazyLoadedList.indexOf(o)<0&&t.push(o);return t},f=(t.getRequiredLazySlides=function(e){for(var t=[],n=f(e),r=h(e),o=n;o<r;o++)t.push(o);return t},t.lazyStartIndex=function(e){return e.currentSlide-m(e)}),h=t.lazyEndIndex=function(e){return e.currentSlide+g(e)},m=t.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},g=t.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},x=t.getWidth=function(e){return e&&e.offsetWidth||0},y=t.getHeight=function(e){return e&&e.offsetHeight||0},v=t.getSwipeDirection=function(e){var t,n,r,o,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=e.startX-e.curX,n=e.startY-e.curY,r=Math.atan2(n,t),(o=Math.round(180*r/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":!0===i?o>=35&&o<=135?"up":"down":"vertical"},b=t.canGoNext=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t},w=(t.extractObject=function(e,t){var n={};return t.forEach((function(t){return n[t]=e[t]})),n},t.initializedState=function(e){var t,n=r.default.Children.count(e.children),o=e.listRef,i=Math.ceil(x(o)),a=e.trackRef&&e.trackRef.node,s=Math.ceil(x(a));if(e.vertical)t=i;else{var c=e.centerMode&&2*parseInt(e.centerPadding);"string"===typeof e.centerPadding&&"%"===e.centerPadding.slice(-1)&&(c*=i/100),t=Math.ceil((i-c)/e.slidesToShow)}var u=o&&y(o.querySelector('[data-index="0"]')),d=u*e.slidesToShow,f=void 0===e.currentSlide?e.initialSlide:e.currentSlide;e.rtl&&void 0===e.currentSlide&&(f=n-1-e.initialSlide);var h=e.lazyLoadedList||[],m=p(l(l({},e),{},{currentSlide:f,lazyLoadedList:h})),g={slideCount:n,slideWidth:t,listWidth:i,trackWidth:s,currentSlide:f,slideHeight:u,listHeight:d,lazyLoadedList:h=h.concat(m)};return null===e.autoplaying&&e.autoplay&&(g.autoplaying="playing"),g},t.slideHandler=function(e){var t=e.waitForAnimate,n=e.animating,r=e.fade,o=e.infinite,i=e.index,a=e.slideCount,s=e.lazyLoad,c=e.currentSlide,d=e.centerMode,f=e.slidesToScroll,h=e.slidesToShow,m=e.useCSS,g=e.lazyLoadedList;if(t&&n)return{};var x,y,v,w=i,k={},S={},A=o?i:u(i,0,a-1);if(r){if(!o&&(i<0||i>=a))return{};i<0?w=i+a:i>=a&&(w=i-a),s&&g.indexOf(w)<0&&(g=g.concat(w)),k={animating:!0,currentSlide:w,lazyLoadedList:g,targetSlide:w},S={animating:!1,targetSlide:w}}else x=w,w<0?(x=w+a,o?a%f!==0&&(x=a-a%f):x=0):!b(e)&&w>c?w=x=c:d&&w>=a?(w=o?a:a-1,x=o?0:a-1):w>=a&&(x=w-a,o?a%f!==0&&(x=0):x=a-h),!o&&w+h>=a&&(x=a-h),y=E(l(l({},e),{},{slideIndex:w})),v=E(l(l({},e),{},{slideIndex:x})),o||(y===v&&(w=x),y=v),s&&(g=g.concat(p(l(l({},e),{},{currentSlide:w})))),m?(k={animating:!0,currentSlide:x,trackStyle:C(l(l({},e),{},{left:y})),lazyLoadedList:g,targetSlide:A},S={animating:!1,currentSlide:x,trackStyle:j(l(l({},e),{},{left:v})),swipeLeft:null,targetSlide:A}):k={currentSlide:x,trackStyle:j(l(l({},e),{},{left:v})),lazyLoadedList:g,targetSlide:A};return{state:k,nextState:S}},t.changeSlide=function(e,t){var n,r,o,i,a=e.slidesToScroll,s=e.slidesToShow,c=e.slideCount,u=e.currentSlide,d=e.targetSlide,p=e.lazyLoad,f=e.infinite;if(n=c%a!==0?0:(c-u)%a,"previous"===t.message)i=u-(o=0===n?a:s-n),p&&!f&&(i=-1===(r=u-o)?c-1:r),f||(i=d-a);else if("next"===t.message)i=u+(o=0===n?a:n),p&&!f&&(i=(u+a)%c+n),f||(i=d+a);else if("dots"===t.message)i=t.index*t.slidesToScroll;else if("children"===t.message){if(i=t.index,f){var h=T(l(l({},e),{},{targetSlide:i}));i>t.currentSlide&&"left"===h?i-=c:i<t.currentSlide&&"right"===h&&(i+=c)}}else"index"===t.message&&(i=Number(t.index));return i},t.keyHandler=function(e,t,n){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":37===e.keyCode?n?"next":"previous":39===e.keyCode?n?"previous":"next":""},t.swipeStart=function(e,t,n){return"IMG"===e.target.tagName&&d(e),!t||!n&&-1!==e.type.indexOf("mouse")?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}},t.swipeMove=function(e,t){var n=t.scrolling,r=t.animating,o=t.vertical,i=t.swipeToSlide,a=t.verticalSwiping,s=t.rtl,c=t.currentSlide,u=t.edgeFriction,p=t.edgeDragged,f=t.onEdge,h=t.swiped,m=t.swiping,g=t.slideCount,x=t.slidesToScroll,y=t.infinite,w=t.touchObject,k=t.swipeEvent,S=t.listHeight,A=t.listWidth;if(!n){if(r)return d(e);o&&i&&a&&d(e);var C,O={},R=E(t);w.curX=e.touches?e.touches[0].pageX:e.clientX,w.curY=e.touches?e.touches[0].pageY:e.clientY,w.swipeLength=Math.round(Math.sqrt(Math.pow(w.curX-w.startX,2)));var P=Math.round(Math.sqrt(Math.pow(w.curY-w.startY,2)));if(!a&&!m&&P>10)return{scrolling:!0};a&&(w.swipeLength=P);var T=(s?-1:1)*(w.curX>w.startX?1:-1);a&&(T=w.curY>w.startY?1:-1);var z=Math.ceil(g/x),M=v(t.touchObject,a),I=w.swipeLength;return y||(0===c&&("right"===M||"down"===M)||c+1>=z&&("left"===M||"up"===M)||!b(t)&&("left"===M||"up"===M))&&(I=w.swipeLength*u,!1===p&&f&&(f(M),O.edgeDragged=!0)),!h&&k&&(k(M),O.swiped=!0),C=o?R+I*(S/A)*T:s?R-I*T:R+I*T,a&&(C=R+I*T),O=l(l({},O),{},{touchObject:w,swipeLeft:C,trackStyle:j(l(l({},t),{},{left:C}))}),Math.abs(w.curX-w.startX)<.8*Math.abs(w.curY-w.startY)?O:(w.swipeLength>10&&(O.swiping=!0,d(e)),O)}},t.swipeEnd=function(e,t){var n=t.dragging,r=t.swipe,o=t.touchObject,i=t.listWidth,a=t.touchThreshold,s=t.verticalSwiping,c=t.listHeight,u=t.swipeToSlide,p=t.scrolling,f=t.onSwipe,h=t.targetSlide,m=t.currentSlide,g=t.infinite;if(!n)return r&&d(e),{};var x=s?c/a:i/a,y=v(o,s),b={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(p)return b;if(!o.swipeLength)return b;if(o.swipeLength>x){var w,A;d(e),f&&f(y);var j=g?m:h;switch(y){case"left":case"up":A=j+S(t),w=u?k(t,A):A,b.currentDirection=0;break;case"right":case"down":A=j-S(t),w=u?k(t,A):A,b.currentDirection=1;break;default:w=j}b.triggerSlideHandler=w}else{var O=E(t);b.trackStyle=C(l(l({},t),{},{left:O}))}return b},t.getNavigableIndexes=function(e){for(var t=e.infinite?2*e.slideCount:e.slideCount,n=e.infinite?-1*e.slidesToShow:0,r=e.infinite?-1*e.slidesToShow:0,o=[];n<t;)o.push(n),n=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return o}),k=t.checkNavigable=function(e,t){var n=w(e),r=0;if(t>n[n.length-1])t=n[n.length-1];else for(var o in n){if(t<n[o]){t=r;break}r=n[o]}return t},S=t.getSlideCount=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var n,r=e.listRef,o=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(o).every((function(r){if(e.vertical){if(r.offsetTop+y(r)/2>-1*e.swipeLeft)return n=r,!1}else if(r.offsetLeft-t+x(r)/2>-1*e.swipeLeft)return n=r,!1;return!0})),!n)return 0;var i=!0===e.rtl?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-i)||1}return e.slidesToScroll},A=t.checkSpecKeys=function(e,t){return t.reduce((function(t,n){return t&&e.hasOwnProperty(n)}),!0)?null:console.error("Keys Missing:",e)},j=t.getTrackCSS=function(e){var t,n;A(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var r=e.slideCount+2*e.slidesToShow;e.vertical?n=r*e.slideHeight:t=P(e)*e.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var i=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";o=l(l({},o),{},{WebkitTransform:i,transform:a,msTransform:s})}else e.vertical?o.top=e.left:o.left=e.left;return e.fade&&(o={opacity:1}),t&&(o.width=t),n&&(o.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?o.marginTop=e.left+"px":o.marginLeft=e.left+"px"),o},C=t.getTrackAnimateCSS=function(e){A(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=j(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t},E=t.getTrackLeft=function(e){if(e.unslick)return 0;A(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t,n,r=e.slideIndex,o=e.trackRef,i=e.infinite,a=e.centerMode,s=e.slideCount,l=e.slidesToShow,c=e.slidesToScroll,u=e.slideWidth,d=e.listWidth,p=e.variableWidth,f=e.slideHeight,h=e.fade,m=e.vertical;if(h||1===e.slideCount)return 0;var g=0;if(i?(g=-O(e),s%c!==0&&r+c>s&&(g=-(r>s?l-(r-s):s%c)),a&&(g+=parseInt(l/2))):(s%c!==0&&r+c>s&&(g=l-s%c),a&&(g=parseInt(l/2))),t=m?r*f*-1+g*f:r*u*-1+g*u,!0===p){var x,y=o&&o.node;if(x=r+O(e),t=(n=y&&y.childNodes[x])?-1*n.offsetLeft:0,!0===a){x=i?r+O(e):r,n=y&&y.children[x],t=0;for(var v=0;v<x;v++)t-=y&&y.children[v]&&y.children[v].offsetWidth;t-=parseInt(e.centerPadding),t+=n&&(d-n.offsetWidth)/2}}return t},O=t.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},R=t.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},P=t.getTotalSlides=function(e){return 1===e.slideCount?1:O(e)+e.slideCount+R(e)},T=t.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+z(e)?"left":"right":e.targetSlide<e.currentSlide-M(e)?"right":"left"},z=t.slidesOnRight=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,o=e.centerPadding;if(n){var i=(t-1)/2+1;return parseInt(o)>0&&(i+=1),r&&t%2===0&&(i+=1),i}return r?0:t-1},M=t.slidesOnLeft=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,o=e.centerPadding;if(n){var i=(t-1)/2+1;return parseInt(o)>0&&(i+=1),r||t%2!==0||(i+=1),i}return r?t-1:0},I=(t.canUseDOM=function(){return!("undefined"===typeof window||!window.document||!window.document.createElement)},t.validSettings=Object.keys(o.default))},3557:(e,t,n)=>{"use strict";var r=n(5173),o=n(5043),i=n(2963);function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=a(r),l=a(o),c=a(i);function u(e){var t=e.isOpen,n=e.title,r=e.subtitle,i=e.onRequestClose,a=e.onAfterOpen,s=e.onAfterClose,u=e.children,p=e.className,f=e.overlayClassName,h=e.closeIcon,m=e.from,g=void 0===m?"right":m,x=e.width,y=e.shouldCloseOnEsc,v=e.hideHeader,b=void 0!==v&&v,w="slide-pane_from_".concat(g),k=function(e){var t=o.useRef(!0);o.useEffect((function(){return t.current=!0,function(){t.current=!1}}),[]);var n=o.useState(e),r=n[0],i=n[1];return[r,function(e){!0===t.current&&i(e)}]}(!1),S=k[0],A=k[1];return l.default.createElement(c.default,{ariaHideApp:!1,overlayClassName:{base:"slide-pane__overlay ".concat(f||""),afterOpen:S?"overlay-after-open":"",beforeClose:"overlay-before-close"},className:{base:"slide-pane ".concat(w," ").concat(p||""),afterOpen:S?"content-after-open":"",beforeClose:"content-before-close"},style:{content:{width:x||"80%"}},closeTimeoutMS:500,isOpen:null!==t&&void 0!==t&&t,shouldCloseOnEsc:y,onAfterOpen:function(){null===a||void 0===a||a(),setTimeout((function(){A(!0)}),0)},onAfterClose:function(){null===s||void 0===s||s(),setTimeout((function(){A(!1)}),0)},onRequestClose:i,contentLabel:'Modal "'.concat(n||"",'"')},!b&&l.default.createElement("div",{className:"slide-pane__header"},l.default.createElement("div",{className:"slide-pane__close",onClick:i,role:"button",tabIndex:0},h||l.default.createElement(d,null)),l.default.createElement("div",{className:"slide-pane__title-wrapper"},l.default.createElement("h2",{className:"slide-pane__title"},n),l.default.createElement("div",{className:"slide-pane__subtitle"},r))),l.default.createElement("div",{className:"slide-pane__content"},u))}function d(){return l.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 22"},l.default.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"}))}u.propTypes={isOpen:s.default.bool,title:s.default.node,subtitle:s.default.node,from:s.default.oneOf(["left","right","bottom"]),children:s.default.node.isRequired,className:s.default.string,overlayClassName:s.default.string,width:s.default.string,closeIcon:s.default.node,shouldCloseOnEsc:s.default.bool,hideHeader:s.default.bool,onRequestClose:s.default.func.isRequired,onAfterOpen:s.default.func,onAfterClose:s.default.func},t.Ay=u},3310:function(e,t,n){var r=n(4756);!function(e,t){"use strict";function n(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,l,"next",e)}function l(e){n(a,o,i,s,l,"throw",e)}s(void 0)}))}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function s(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var l={init:"init"},c=function(e){var t=e.value;return void 0===t?"":t},u=function(){return t.createElement(t.Fragment,null,"\xa0")},d={Cell:c,width:150,minWidth:0,maxWidth:Number.MAX_SAFE_INTEGER};function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){var n=t.style,r=t.className;return e=i({},e,{},a(t,["style","className"])),n&&(e.style=e.style?i({},e.style||{},{},n||{}):n),r&&(e.className=e.className?e.className+" "+r:r),""===e.className&&delete e.className,e}),{})}var f=function(e,t){return void 0===t&&(t={}),function(n){return void 0===n&&(n={}),[].concat(e,[n]).reduce((function(e,r){return function e(t,n,r){return"function"==typeof n?e({},n(t,r)):Array.isArray(n)?p.apply(void 0,[t].concat(n)):p(t,n)}(e,r,i({},t,{userProps:n}))}),{})}},h=function(e,t,n,r){return void 0===n&&(n={}),e.reduce((function(e,t){return t(e,n)}),t)},m=function(e,t,n){return void 0===n&&(n={}),e.forEach((function(e){e(t,n)}))};function g(e,t,n,r){e.findIndex((function(e){return e.pluginName===n})),t.forEach((function(t){e.findIndex((function(e){return e.pluginName===t}))}))}function x(e,t){return"function"==typeof e?e(t):e}function y(e){var n=t.useRef();return n.current=e,t.useCallback((function(){return n.current}),[])}var v="undefined"!=typeof document?t.useLayoutEffect:t.useEffect;function b(e,n){var r=t.useRef(!1);v((function(){r.current&&e(),r.current=!0}),n)}function w(e,t,n){return void 0===n&&(n={}),function(r,o){void 0===o&&(o={});var a="string"==typeof r?t[r]:r;if(void 0===a)throw console.info(t),new Error("Renderer Error \u261d\ufe0f");return k(a,i({},e,{column:t},n,{},o))}}function k(e,n){return function(e){return"function"==typeof e&&(t=Object.getPrototypeOf(e)).prototype&&t.prototype.isReactComponent;var t}(r=e)||"function"==typeof r||function(e){return"object"==typeof e&&"symbol"==typeof e.$$typeof&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}(r)?t.createElement(e,n):e;var r}function S(e,t,n){return void 0===n&&(n=0),e.map((function(e){return j(e=i({},e,{parent:t,depth:n})),e.columns&&(e.columns=S(e.columns,e,n+1)),e}))}function A(e){return T(e,"columns")}function j(e){var t=e.id,n=e.accessor,r=e.Header;if("string"==typeof n){t=t||n;var o=n.split(".");n=function(e){return function(e,t,n){if(!t)return e;var r,o="function"==typeof t?t:JSON.stringify(t),i=O.get(o)||function(){var e=function(e){return function e(t,n){if(void 0===n&&(n=[]),Array.isArray(t))for(var r=0;r<t.length;r+=1)e(t[r],n);else n.push(t);return n}(e).map((function(e){return String(e).replace(".","_")})).join(".").replace(N,".").replace(D,"").split(".")}(t);return O.set(o,e),e}();try{r=i.reduce((function(e,t){return e[t]}),e)}catch(e){}return void 0!==r?r:n}(e,o)}}if(!t&&"string"==typeof r&&r&&(t=r),!t&&e.columns)throw console.error(e),new Error('A column ID (or unique "Header" value) is required!');if(!t)throw console.error(e),new Error("A column ID (or string accessor) is required!");return Object.assign(e,{id:t,accessor:n}),e}function C(e,t){if(!t)throw new Error;return Object.assign(e,i({Header:u,Footer:u},d,{},t,{},e)),Object.assign(e,{originalWidth:e.width}),e}function E(e,t,n){void 0===n&&(n=function(){return{}});for(var r=[],o=e,a=0,s=function(){return a++},l=function(){var e={headers:[]},a=[],l=o.some((function(e){return e.parent}));o.forEach((function(r){var o,c=[].concat(a).reverse()[0];l&&(o=r.parent?i({},r.parent,{originalId:r.parent.id,id:r.parent.id+"_"+s(),headers:[r]},n(r)):C(i({originalId:r.id+"_placeholder",id:r.id+"_placeholder_"+s(),placeholderOf:r,headers:[r]},n(r)),t),c&&c.originalId===o.originalId?c.headers.push(r):a.push(o)),e.headers.push(r)})),r.push(e),o=a};o.length;)l();return r.reverse()}var O=new Map;function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=0;r<t.length;r+=1)if(void 0!==t[r])return t[r]}function P(e){if("function"==typeof e)return e}function T(e,t){var n=[];return function e(r){r.forEach((function(r){r[t]?e(r[t]):n.push(r)}))}(e),n}function z(e,t){var n=t.manualExpandedKey,r=t.expanded,o=t.expandSubRows,i=void 0===o||o,a=[];return e.forEach((function(e){return function e(t,o){void 0===o&&(o=!0),t.isExpanded=t.original&&t.original[n]||r[t.id],t.canExpand=t.subRows&&!!t.subRows.length,o&&a.push(t),t.subRows&&t.subRows.length&&t.isExpanded&&t.subRows.forEach((function(t){return e(t,i)}))}(e)})),a}function M(e,t,n){return P(e)||t[e]||n[e]||n.text}function I(e,t,n){return e?e(t,n):void 0===t}function L(){throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")}var F=null,N=/\[/g,D=/\]/g,B=function(e){return i({role:"table"},e)},_=function(e){return i({role:"rowgroup"},e)},H=function(e,t){var n=t.column;return i({key:"header_"+n.id,colSpan:n.totalVisibleHeaderCount,role:"columnheader"},e)},U=function(e,t){var n=t.column;return i({key:"footer_"+n.id,colSpan:n.totalVisibleHeaderCount},e)},W=function(e,t){return i({key:"headerGroup_"+t.index,role:"row"},e)},q=function(e,t){return i({key:"footerGroup_"+t.index},e)},G=function(e,t){return i({key:"row_"+t.row.id,role:"row"},e)},K=function(e,t){var n=t.cell;return i({key:"cell_"+n.row.id+"_"+n.column.id,role:"cell"},e)};function V(){return{useOptions:[],stateReducers:[],useControlledState:[],columns:[],columnsDeps:[],allColumns:[],allColumnsDeps:[],accessValue:[],materializedColumns:[],materializedColumnsDeps:[],useInstanceAfterData:[],visibleColumns:[],visibleColumnsDeps:[],headerGroups:[],headerGroupsDeps:[],useInstanceBeforeDimensions:[],useInstance:[],prepareRow:[],getTableProps:[B],getTableBodyProps:[_],getHeaderGroupProps:[W],getFooterGroupProps:[q],getHeaderProps:[H],getFooterProps:[U],getRowProps:[G],getCellProps:[K],useFinalInstance:[]}}l.resetHiddenColumns="resetHiddenColumns",l.toggleHideColumn="toggleHideColumn",l.setHiddenColumns="setHiddenColumns",l.toggleHideAllColumns="toggleHideAllColumns";var J=function(e){e.getToggleHiddenProps=[Q],e.getToggleHideAllColumnsProps=[Y],e.stateReducers.push(Z),e.useInstanceBeforeDimensions.push(X),e.headerGroupsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.hiddenColumns])})),e.useInstance.push($)};J.pluginName="useColumnVisibility";var Q=function(e,t){var n=t.column;return[e,{onChange:function(e){n.toggleHidden(!e.target.checked)},style:{cursor:"pointer"},checked:n.isVisible,title:"Toggle Column Visible"}]},Y=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleHideAllColumns(!e.target.checked)},style:{cursor:"pointer"},checked:!n.allColumnsHidden&&!n.state.hiddenColumns.length,title:"Toggle All Columns Hidden",indeterminate:!n.allColumnsHidden&&n.state.hiddenColumns.length}]};function Z(e,t,n,r){if(t.type===l.init)return i({hiddenColumns:[]},e);if(t.type===l.resetHiddenColumns)return i({},e,{hiddenColumns:r.initialState.hiddenColumns||[]});if(t.type===l.toggleHideColumn){var o=(void 0!==t.value?t.value:!e.hiddenColumns.includes(t.columnId))?[].concat(e.hiddenColumns,[t.columnId]):e.hiddenColumns.filter((function(e){return e!==t.columnId}));return i({},e,{hiddenColumns:o})}return t.type===l.setHiddenColumns?i({},e,{hiddenColumns:x(t.value,e.hiddenColumns)}):t.type===l.toggleHideAllColumns?i({},e,{hiddenColumns:(void 0!==t.value?t.value:!e.hiddenColumns.length)?r.allColumns.map((function(e){return e.id})):[]}):void 0}function X(e){var n=e.headers,r=e.state.hiddenColumns;t.useRef(!1).current;var o=0;n.forEach((function(e){return o+=function e(t,n){t.isVisible=n&&!r.includes(t.id);var o=0;return t.headers&&t.headers.length?t.headers.forEach((function(n){return o+=e(n,t.isVisible)})):o=t.isVisible?1:0,t.totalVisibleHeaderCount=o,o}(e,!0)}))}function $(e){var n=e.columns,r=e.flatHeaders,o=e.dispatch,i=e.allColumns,a=e.getHooks,s=e.state.hiddenColumns,c=e.autoResetHiddenColumns,u=void 0===c||c,d=y(e),p=i.length===s.length,h=t.useCallback((function(e,t){return o({type:l.toggleHideColumn,columnId:e,value:t})}),[o]),m=t.useCallback((function(e){return o({type:l.setHiddenColumns,value:e})}),[o]),g=t.useCallback((function(e){return o({type:l.toggleHideAllColumns,value:e})}),[o]),x=f(a().getToggleHideAllColumnsProps,{instance:d()});r.forEach((function(e){e.toggleHidden=function(t){o({type:l.toggleHideColumn,columnId:e.id,value:t})},e.getToggleHiddenProps=f(a().getToggleHiddenProps,{instance:d(),column:e})}));var v=y(u);b((function(){v()&&o({type:l.resetHiddenColumns})}),[o,n]),Object.assign(e,{allColumnsHidden:p,toggleHideColumn:h,setHiddenColumns:m,toggleHideAllColumns:g,getToggleHideAllColumnsProps:x})}var ee={},te={},ne=function(e,t,n){return e},re=function(e,t){return e.subRows||[]},oe=function(e,t,n){return""+(n?[n.id,t].join("."):t)},ie=function(e){return e};function ae(e){var t=e.initialState,n=void 0===t?ee:t,r=e.defaultColumn,o=void 0===r?te:r,s=e.getSubRows,l=void 0===s?re:s,c=e.getRowId,u=void 0===c?oe:c,d=e.stateReducer,p=void 0===d?ne:d,f=e.useControlledState,h=void 0===f?ie:f;return i({},a(e,["initialState","defaultColumn","getSubRows","getRowId","stateReducer","useControlledState"]),{initialState:n,defaultColumn:o,getSubRows:l,getRowId:u,stateReducer:p,useControlledState:h})}function se(e,t){void 0===t&&(t=0);var n=0,r=0,o=0,i=0;return e.forEach((function(e){var a=e.headers;if(e.totalLeft=t,a&&a.length){var s=se(a,t),l=s[0],c=s[1],u=s[2],d=s[3];e.totalMinWidth=l,e.totalWidth=c,e.totalMaxWidth=u,e.totalFlexWidth=d}else e.totalMinWidth=e.minWidth,e.totalWidth=Math.min(Math.max(e.minWidth,e.width),e.maxWidth),e.totalMaxWidth=e.maxWidth,e.totalFlexWidth=e.canResize?e.totalWidth:0;e.isVisible&&(t+=e.totalWidth,n+=e.totalMinWidth,r+=e.totalWidth,o+=e.totalMaxWidth,i+=e.totalFlexWidth)})),[n,r,o,i]}function le(e){var t=e.data,n=e.rows,r=e.flatRows,o=e.rowsById,i=e.column,a=e.getRowId,s=e.getSubRows,l=e.accessValueHooks,c=e.getInstance;t.forEach((function(e,u){return function e(n,u,d,p,f){void 0===d&&(d=0);var m=n,g=a(n,u,p),x=o[g];if(x)x.subRows&&x.originalSubRows.forEach((function(t,n){return e(t,n,d+1,x)}));else if((x={id:g,original:m,index:u,depth:d,cells:[{}]}).cells.map=L,x.cells.filter=L,x.cells.forEach=L,x.cells[0].getCellProps=L,x.values={},f.push(x),r.push(x),o[g]=x,x.originalSubRows=s(n,u),x.originalSubRows){var y=[];x.originalSubRows.forEach((function(t,n){return e(t,n,d+1,x,y)})),x.subRows=y}i.accessor&&(x.values[i.id]=i.accessor(n,u,x,f,t)),x.values[i.id]=h(l,x.values[i.id],{row:x,column:i,instance:c()})}(e,u,0,void 0,n)}))}l.resetExpanded="resetExpanded",l.toggleRowExpanded="toggleRowExpanded",l.toggleAllRowsExpanded="toggleAllRowsExpanded";var ce=function(e){e.getToggleAllRowsExpandedProps=[ue],e.getToggleRowExpandedProps=[de],e.stateReducers.push(pe),e.useInstance.push(fe),e.prepareRow.push(he)};ce.pluginName="useExpanded";var ue=function(e,t){var n=t.instance;return[e,{onClick:function(e){n.toggleAllRowsExpanded()},style:{cursor:"pointer"},title:"Toggle All Rows Expanded"}]},de=function(e,t){var n=t.row;return[e,{onClick:function(){n.toggleRowExpanded()},style:{cursor:"pointer"},title:"Toggle Row Expanded"}]};function pe(e,t,n,r){if(t.type===l.init)return i({expanded:{}},e);if(t.type===l.resetExpanded)return i({},e,{expanded:r.initialState.expanded||{}});if(t.type===l.toggleAllRowsExpanded){var o=t.value,c=r.rowsById,u=Object.keys(c).length===Object.keys(e.expanded).length;if(void 0!==o?o:!u){var d={};return Object.keys(c).forEach((function(e){d[e]=!0})),i({},e,{expanded:d})}return i({},e,{expanded:{}})}if(t.type===l.toggleRowExpanded){var p,f=t.id,h=t.value,m=e.expanded[f],g=void 0!==h?h:!m;if(!m&&g)return i({},e,{expanded:i({},e.expanded,(p={},p[f]=!0,p))});if(m&&!g){var x=e.expanded;return x[f],i({},e,{expanded:a(x,[f].map(s))})}return e}}function fe(e){var n=e.data,r=e.rows,o=e.rowsById,i=e.manualExpandedKey,a=void 0===i?"expanded":i,s=e.paginateExpandedRows,c=void 0===s||s,u=e.expandSubRows,d=void 0===u||u,p=e.autoResetExpanded,h=void 0===p||p,m=e.getHooks,x=e.plugins,v=e.state.expanded,w=e.dispatch;g(x,["useSortBy","useGroupBy","usePivotColumns","useGlobalFilter"],"useExpanded");var k=y(h),S=Boolean(Object.keys(o).length&&Object.keys(v).length);S&&Object.keys(o).some((function(e){return!v[e]}))&&(S=!1),b((function(){k()&&w({type:l.resetExpanded})}),[w,n]);var A=t.useCallback((function(e,t){w({type:l.toggleRowExpanded,id:e,value:t})}),[w]),j=t.useCallback((function(e){return w({type:l.toggleAllRowsExpanded,value:e})}),[w]),C=t.useMemo((function(){return c?z(r,{manualExpandedKey:a,expanded:v,expandSubRows:d}):r}),[c,r,a,v,d]),E=t.useMemo((function(){return function(e){var t=0;return Object.keys(e).forEach((function(e){var n=e.split(".");t=Math.max(t,n.length)})),t}(v)}),[v]),O=y(e),R=f(m().getToggleAllRowsExpandedProps,{instance:O()});Object.assign(e,{preExpandedRows:r,expandedRows:C,rows:C,expandedDepth:E,isAllRowsExpanded:S,toggleRowExpanded:A,toggleAllRowsExpanded:j,getToggleAllRowsExpandedProps:R})}function he(e,t){var n=t.instance.getHooks,r=t.instance;e.toggleRowExpanded=function(t){return r.toggleRowExpanded(e.id,t)},e.getToggleRowExpandedProps=f(n().getToggleRowExpandedProps,{instance:r,row:e})}var me=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return String(r).toLowerCase().includes(String(n).toLowerCase())}))}))};me.autoRemove=function(e){return!e};var ge=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return void 0===r||String(r).toLowerCase()===String(n).toLowerCase()}))}))};ge.autoRemove=function(e){return!e};var xe=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return void 0===r||String(r)===String(n)}))}))};xe.autoRemove=function(e){return!e};var ye=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t].includes(n)}))}))};ye.autoRemove=function(e){return!e||!e.length};var ve=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r&&r.length&&n.every((function(e){return r.includes(e)}))}))}))};ve.autoRemove=function(e){return!e||!e.length};var be=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r&&r.length&&n.some((function(e){return r.includes(e)}))}))}))};be.autoRemove=function(e){return!e||!e.length};var we=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return n.includes(r)}))}))};we.autoRemove=function(e){return!e||!e.length};var ke=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]===n}))}))};ke.autoRemove=function(e){return void 0===e};var Se=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]==n}))}))};Se.autoRemove=function(e){return null==e};var Ae=function(e,t,n){var r=n||[],o=r[0],i=r[1];if((o="number"==typeof o?o:-1/0)>(i="number"==typeof i?i:1/0)){var a=o;o=i,i=a}return e.filter((function(e){return t.some((function(t){var n=e.values[t];return n>=o&&n<=i}))}))};Ae.autoRemove=function(e){return!e||"number"!=typeof e[0]&&"number"!=typeof e[1]};var je=Object.freeze({__proto__:null,text:me,exactText:ge,exactTextCase:xe,includes:ye,includesAll:ve,includesSome:be,includesValue:we,exact:ke,equals:Se,between:Ae});l.resetFilters="resetFilters",l.setFilter="setFilter",l.setAllFilters="setAllFilters";var Ce=function(e){e.stateReducers.push(Ee),e.useInstance.push(Oe)};function Ee(e,t,n,r){if(t.type===l.init)return i({filters:[]},e);if(t.type===l.resetFilters)return i({},e,{filters:r.initialState.filters||[]});if(t.type===l.setFilter){var o=t.columnId,a=t.filterValue,s=r.allColumns,c=r.filterTypes,u=s.find((function(e){return e.id===o}));if(!u)throw new Error("React-Table: Could not find a column with id: "+o);var d=M(u.filter,c||{},je),p=e.filters.find((function(e){return e.id===o})),f=x(a,p&&p.value);return I(d.autoRemove,f,u)?i({},e,{filters:e.filters.filter((function(e){return e.id!==o}))}):i({},e,p?{filters:e.filters.map((function(e){return e.id===o?{id:o,value:f}:e}))}:{filters:[].concat(e.filters,[{id:o,value:f}])})}if(t.type===l.setAllFilters){var h=t.filters,m=r.allColumns,g=r.filterTypes;return i({},e,{filters:x(h,e.filters).filter((function(e){var t=m.find((function(t){return t.id===e.id}));return!I(M(t.filter,g||{},je).autoRemove,e.value,t)}))})}}function Oe(e){var n=e.data,r=e.rows,o=e.flatRows,i=e.rowsById,a=e.allColumns,s=e.filterTypes,c=e.manualFilters,u=e.defaultCanFilter,d=void 0!==u&&u,p=e.disableFilters,f=e.state.filters,h=e.dispatch,m=e.autoResetFilters,g=void 0===m||m,x=t.useCallback((function(e,t){h({type:l.setFilter,columnId:e,filterValue:t})}),[h]),v=t.useCallback((function(e){h({type:l.setAllFilters,filters:e})}),[h]);a.forEach((function(e){var t=e.id,n=e.accessor,r=e.defaultCanFilter,o=e.disableFilters;e.canFilter=n?R(!0!==o&&void 0,!0!==p&&void 0,!0):R(r,d,!1),e.setFilter=function(t){return x(e.id,t)};var i=f.find((function(e){return e.id===t}));e.filterValue=i&&i.value}));var w=t.useMemo((function(){if(c||!f.length)return[r,o,i];var e=[],t={};return[function n(r,o){void 0===o&&(o=0);var i=r;return(i=f.reduce((function(e,t){var n=t.id,r=t.value,i=a.find((function(e){return e.id===n}));if(!i)return e;0===o&&(i.preFilteredRows=e);var l=M(i.filter,s||{},je);return l?(i.filteredRows=l(e,[n],r),i.filteredRows):(console.warn("Could not find a valid 'column.filter' for column with the ID: "+i.id+"."),e)}),r)).forEach((function(r){e.push(r),t[r.id]=r,r.subRows&&(r.subRows=r.subRows&&r.subRows.length>0?n(r.subRows,o+1):r.subRows)})),i}(r),e,t]}),[c,f,r,o,i,a,s]),k=w[0],S=w[1],A=w[2];t.useMemo((function(){a.filter((function(e){return!f.find((function(t){return t.id===e.id}))})).forEach((function(e){e.preFilteredRows=k,e.filteredRows=k}))}),[k,f,a]);var j=y(g);b((function(){j()&&h({type:l.resetFilters})}),[h,c?null:n]),Object.assign(e,{preFilteredRows:r,preFilteredFlatRows:o,preFilteredRowsById:i,filteredRows:k,filteredFlatRows:S,filteredRowsById:A,rows:k,flatRows:S,rowsById:A,setFilter:x,setAllFilters:v})}Ce.pluginName="useFilters",l.resetGlobalFilter="resetGlobalFilter",l.setGlobalFilter="setGlobalFilter";var Re=function(e){e.stateReducers.push(Pe),e.useInstance.push(Te)};function Pe(e,t,n,r){if(t.type===l.resetGlobalFilter)return i({},e,{globalFilter:r.initialState.globalFilter||void 0});if(t.type===l.setGlobalFilter){var o=t.filterValue,s=r.userFilterTypes,c=M(r.globalFilter,s||{},je),u=x(o,e.globalFilter);return I(c.autoRemove,u)?(e.globalFilter,a(e,["globalFilter"])):i({},e,{globalFilter:u})}}function Te(e){var n=e.data,r=e.rows,o=e.flatRows,i=e.rowsById,a=e.allColumns,s=e.filterTypes,c=e.globalFilter,u=e.manualGlobalFilter,d=e.state.globalFilter,p=e.dispatch,f=e.autoResetGlobalFilter,h=void 0===f||f,m=e.disableGlobalFilter,g=t.useCallback((function(e){p({type:l.setGlobalFilter,filterValue:e})}),[p]),x=t.useMemo((function(){if(u||void 0===d)return[r,o,i];var e=[],t={},n=M(c,s||{},je);if(!n)return console.warn("Could not find a valid 'globalFilter' option."),r;a.forEach((function(e){var t=e.disableGlobalFilter;e.canFilter=R(!0!==t&&void 0,!0!==m&&void 0,!0)}));var l=a.filter((function(e){return!0===e.canFilter}));return[function r(o){return(o=n(o,l.map((function(e){return e.id})),d)).forEach((function(n){e.push(n),t[n.id]=n,n.subRows=n.subRows&&n.subRows.length?r(n.subRows):n.subRows})),o}(r),e,t]}),[u,d,c,s,a,r,o,i,m]),v=x[0],w=x[1],k=x[2],S=y(h);b((function(){S()&&p({type:l.resetGlobalFilter})}),[p,u?null:n]),Object.assign(e,{preGlobalFilteredRows:r,preGlobalFilteredFlatRows:o,preGlobalFilteredRowsById:i,globalFilteredRows:v,globalFilteredFlatRows:w,globalFilteredRowsById:k,rows:v,flatRows:w,rowsById:k,setGlobalFilter:g,disableGlobalFilter:m})}function ze(e,t){return t.reduce((function(e,t){return e+("number"==typeof t?t:0)}),0)}Re.pluginName="useGlobalFilter";var Me=Object.freeze({__proto__:null,sum:ze,min:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e))})),t},max:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.max(t,e))})),t},minMax:function(e){var t=e[0]||0,n=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e),n=Math.max(n,e))})),t+".."+n},average:function(e){return ze(0,e)/e.length},median:function(e){if(!e.length)return null;var t=Math.floor(e.length/2),n=[].concat(e).sort((function(e,t){return e-t}));return e.length%2!=0?n[t]:(n[t-1]+n[t])/2},unique:function(e){return Array.from(new Set(e).values())},uniqueCount:function(e){return new Set(e).size},count:function(e){return e.length}}),Ie=[],Le={};l.resetGroupBy="resetGroupBy",l.setGroupBy="setGroupBy",l.toggleGroupBy="toggleGroupBy";var Fe=function(e){e.getGroupByToggleProps=[Ne],e.stateReducers.push(De),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.groupBy])})),e.visibleColumns.push(Be),e.useInstance.push(He),e.prepareRow.push(Ue)};Fe.pluginName="useGroupBy";var Ne=function(e,t){var n=t.header;return[e,{onClick:n.canGroupBy?function(e){e.persist(),n.toggleGroupBy()}:void 0,style:{cursor:n.canGroupBy?"pointer":void 0},title:"Toggle GroupBy"}]};function De(e,t,n,r){if(t.type===l.init)return i({groupBy:[]},e);if(t.type===l.resetGroupBy)return i({},e,{groupBy:r.initialState.groupBy||[]});if(t.type===l.setGroupBy)return i({},e,{groupBy:t.value});if(t.type===l.toggleGroupBy){var o=t.columnId,a=t.value,s=void 0!==a?a:!e.groupBy.includes(o);return i({},e,s?{groupBy:[].concat(e.groupBy,[o])}:{groupBy:e.groupBy.filter((function(e){return e!==o}))})}}function Be(e,t){var n=t.instance.state.groupBy,r=n.map((function(t){return e.find((function(e){return e.id===t}))})).filter(Boolean),o=e.filter((function(e){return!n.includes(e.id)}));return(e=[].concat(r,o)).forEach((function(e){e.isGrouped=n.includes(e.id),e.groupedIndex=n.indexOf(e.id)})),e}var _e={};function He(e){var n=e.data,r=e.rows,o=e.flatRows,a=e.rowsById,s=e.allColumns,c=e.flatHeaders,u=e.groupByFn,d=void 0===u?We:u,p=e.manualGroupBy,h=e.aggregations,m=void 0===h?_e:h,x=e.plugins,v=e.state.groupBy,w=e.dispatch,k=e.autoResetGroupBy,S=void 0===k||k,A=e.disableGroupBy,j=e.defaultCanGroupBy,C=e.getHooks;g(x,["useColumnOrder","useFilters"],"useGroupBy");var E=y(e);s.forEach((function(t){var n=t.accessor,r=t.defaultGroupBy,o=t.disableGroupBy;t.canGroupBy=n?R(t.canGroupBy,!0!==o&&void 0,!0!==A&&void 0,!0):R(t.canGroupBy,r,j,!1),t.canGroupBy&&(t.toggleGroupBy=function(){return e.toggleGroupBy(t.id)}),t.Aggregated=t.Aggregated||t.Cell}));var O=t.useCallback((function(e,t){w({type:l.toggleGroupBy,columnId:e,value:t})}),[w]),P=t.useCallback((function(e){w({type:l.setGroupBy,value:e})}),[w]);c.forEach((function(e){e.getGroupByToggleProps=f(C().getGroupByToggleProps,{instance:E(),header:e})}));var z=t.useMemo((function(){if(p||!v.length)return[r,o,a,Ie,Le,o,a];var e=v.filter((function(e){return s.find((function(t){return t.id===e}))})),t=[],n={},l=[],c={},u=[],f={},h=function r(o,a,p){if(void 0===a&&(a=0),a===e.length)return o.map((function(e){return i({},e,{depth:a})}));var h=e[a],g=d(o,h);return Object.entries(g).map((function(o,i){var d=o[0],g=o[1],x=h+":"+d,y=r(g,a+1,x=p?p+">"+x:x),v=a?T(g,"leafRows"):g,b=function(t,n,r){var o={};return s.forEach((function(i){if(e.includes(i.id))o[i.id]=n[0]?n[0].values[i.id]:null;else{var a="function"==typeof i.aggregate?i.aggregate:m[i.aggregate]||Me[i.aggregate];if(a){var s=n.map((function(e){return e.values[i.id]})),l=t.map((function(e){var t=e.values[i.id];if(!r&&i.aggregateValue){var n="function"==typeof i.aggregateValue?i.aggregateValue:m[i.aggregateValue]||Me[i.aggregateValue];if(!n)throw console.info({column:i}),new Error("React Table: Invalid column.aggregateValue option for column listed above");t=n(t,e,i)}return t}));o[i.id]=a(l,s)}else{if(i.aggregate)throw console.info({column:i}),new Error("React Table: Invalid column.aggregate option for column listed above");o[i.id]=null}}})),o}(v,g,a),w={id:x,isGrouped:!0,groupByID:h,groupByVal:d,values:b,subRows:y,leafRows:v,depth:a,index:i};return y.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(l.push(e),c[e.id]=e):(u.push(e),f[e.id]=e)})),w}))}(r);return h.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(l.push(e),c[e.id]=e):(u.push(e),f[e.id]=e)})),[h,t,n,l,c,u,f]}),[p,v,r,o,a,s,m,d]),M=z[0],I=z[1],L=z[2],F=z[3],N=z[4],D=z[5],B=z[6],_=y(S);b((function(){_()&&w({type:l.resetGroupBy})}),[w,p?null:n]),Object.assign(e,{preGroupedRows:r,preGroupedFlatRow:o,preGroupedRowsById:a,groupedRows:M,groupedFlatRows:I,groupedRowsById:L,onlyGroupedFlatRows:F,onlyGroupedRowsById:N,nonGroupedFlatRows:D,nonGroupedRowsById:B,rows:M,flatRows:I,rowsById:L,toggleGroupBy:O,setGroupBy:P})}function Ue(e){e.allCells.forEach((function(t){var n;t.isGrouped=t.column.isGrouped&&t.column.id===e.groupByID,t.isPlaceholder=!t.isGrouped&&t.column.isGrouped,t.isAggregated=!t.isGrouped&&!t.isPlaceholder&&(null==(n=e.subRows)?void 0:n.length)}))}function We(e,t){return e.reduce((function(e,n,r){var o=""+n.values[t];return e[o]=Array.isArray(e[o])?e[o]:[],e[o].push(n),e}),{})}var qe=/([0-9]+)/gm;function Ge(e,t){return e===t?0:e>t?1:-1}function Ke(e,t,n){return[e.values[n],t.values[n]]}function Ve(e){return"number"==typeof e?isNaN(e)||e===1/0||e===-1/0?"":String(e):"string"==typeof e?e:""}var Je=Object.freeze({__proto__:null,alphanumeric:function(e,t,n){var r=Ke(e,t,n),o=r[0],i=r[1];for(o=Ve(o),i=Ve(i),o=o.split(qe).filter(Boolean),i=i.split(qe).filter(Boolean);o.length&&i.length;){var a=o.shift(),s=i.shift(),l=parseInt(a,10),c=parseInt(s,10),u=[l,c].sort();if(isNaN(u[0])){if(a>s)return 1;if(s>a)return-1}else{if(isNaN(u[1]))return isNaN(l)?-1:1;if(l>c)return 1;if(c>l)return-1}}return o.length-i.length},datetime:function(e,t,n){var r=Ke(e,t,n),o=r[0],i=r[1];return Ge(o=o.getTime(),i=i.getTime())},basic:function(e,t,n){var r=Ke(e,t,n);return Ge(r[0],r[1])},string:function(e,t,n){var r=Ke(e,t,n),o=r[0],i=r[1];for(o=o.split("").filter(Boolean),i=i.split("").filter(Boolean);o.length&&i.length;){var a=o.shift(),s=i.shift(),l=a.toLowerCase(),c=s.toLowerCase();if(l>c)return 1;if(c>l)return-1;if(a>s)return 1;if(s>a)return-1}return o.length-i.length},number:function(e,t,n){var r=Ke(e,t,n),o=r[0],i=r[1],a=/[^0-9.]/gi;return Ge(o=Number(String(o).replace(a,"")),i=Number(String(i).replace(a,"")))}});l.resetSortBy="resetSortBy",l.setSortBy="setSortBy",l.toggleSortBy="toggleSortBy",l.clearSortBy="clearSortBy",d.sortType="alphanumeric",d.sortDescFirst=!1;var Qe=function(e){e.getSortByToggleProps=[Ye],e.stateReducers.push(Ze),e.useInstance.push(Xe)};Qe.pluginName="useSortBy";var Ye=function(e,t){var n=t.instance,r=t.column,o=n.isMultiSortEvent,i=void 0===o?function(e){return e.shiftKey}:o;return[e,{onClick:r.canSort?function(e){e.persist(),r.toggleSortBy(void 0,!n.disableMultiSort&&i(e))}:void 0,style:{cursor:r.canSort?"pointer":void 0},title:r.canSort?"Toggle SortBy":void 0}]};function Ze(e,t,n,r){if(t.type===l.init)return i({sortBy:[]},e);if(t.type===l.resetSortBy)return i({},e,{sortBy:r.initialState.sortBy||[]});if(t.type===l.clearSortBy)return i({},e,{sortBy:e.sortBy.filter((function(e){return e.id!==t.columnId}))});if(t.type===l.setSortBy)return i({},e,{sortBy:t.sortBy});if(t.type===l.toggleSortBy){var o,a=t.columnId,s=t.desc,c=t.multi,u=r.allColumns,d=r.disableMultiSort,p=r.disableSortRemove,f=r.disableMultiRemove,h=r.maxMultiSortColCount,m=void 0===h?Number.MAX_SAFE_INTEGER:h,g=e.sortBy,x=u.find((function(e){return e.id===a})).sortDescFirst,y=g.find((function(e){return e.id===a})),v=g.findIndex((function(e){return e.id===a})),b=null!=s,w=[];return"toggle"!==(o=!d&&c?y?"toggle":"add":v!==g.length-1||1!==g.length?"replace":y?"toggle":"replace")||p||b||c&&f||!(y&&y.desc&&!x||!y.desc&&x)||(o="remove"),"replace"===o?w=[{id:a,desc:b?s:x}]:"add"===o?(w=[].concat(g,[{id:a,desc:b?s:x}])).splice(0,w.length-m):"toggle"===o?w=g.map((function(e){return e.id===a?i({},e,{desc:b?s:!y.desc}):e})):"remove"===o&&(w=g.filter((function(e){return e.id!==a}))),i({},e,{sortBy:w})}}function Xe(e){var n=e.data,r=e.rows,o=e.flatRows,i=e.allColumns,a=e.orderByFn,s=void 0===a?$e:a,c=e.sortTypes,u=e.manualSortBy,d=e.defaultCanSort,p=e.disableSortBy,h=e.flatHeaders,m=e.state.sortBy,x=e.dispatch,v=e.plugins,w=e.getHooks,k=e.autoResetSortBy,S=void 0===k||k;g(v,["useFilters","useGlobalFilter","useGroupBy","usePivotColumns"],"useSortBy");var A=t.useCallback((function(e){x({type:l.setSortBy,sortBy:e})}),[x]),j=t.useCallback((function(e,t,n){x({type:l.toggleSortBy,columnId:e,desc:t,multi:n})}),[x]),C=y(e);h.forEach((function(e){var t=e.accessor,n=e.canSort,r=e.disableSortBy,o=e.id,i=t?R(!0!==r&&void 0,!0!==p&&void 0,!0):R(d,n,!1);e.canSort=i,e.canSort&&(e.toggleSortBy=function(t,n){return j(e.id,t,n)},e.clearSortBy=function(){x({type:l.clearSortBy,columnId:e.id})}),e.getSortByToggleProps=f(w().getSortByToggleProps,{instance:C(),column:e});var a=m.find((function(e){return e.id===o}));e.isSorted=!!a,e.sortedIndex=m.findIndex((function(e){return e.id===o})),e.isSortedDesc=e.isSorted?a.desc:void 0}));var E=t.useMemo((function(){if(u||!m.length)return[r,o];var e=[],t=m.filter((function(e){return i.find((function(t){return t.id===e.id}))}));return[function n(r){var o=s(r,t.map((function(e){var t=i.find((function(t){return t.id===e.id}));if(!t)throw new Error("React-Table: Could not find a column with id: "+e.id+" while sorting");var n=t.sortType,r=P(n)||(c||{})[n]||Je[n];if(!r)throw new Error("React-Table: Could not find a valid sortType of '"+n+"' for column '"+e.id+"'.");return function(t,n){return r(t,n,e.id,e.desc)}})),t.map((function(e){var t=i.find((function(t){return t.id===e.id}));return t&&t.sortInverted?e.desc:!e.desc})));return o.forEach((function(t){e.push(t),t.subRows&&0!==t.subRows.length&&(t.subRows=n(t.subRows))})),o}(r),e]}),[u,m,r,o,i,s,c]),O=E[0],T=E[1],z=y(S);b((function(){z()&&x({type:l.resetSortBy})}),[u?null:n]),Object.assign(e,{preSortedRows:r,preSortedFlatRows:o,sortedRows:O,sortedFlatRows:T,rows:O,flatRows:T,setSortBy:A,toggleSortBy:j})}function $e(e,t,n){return[].concat(e).sort((function(e,r){for(var o=0;o<t.length;o+=1){var i=t[o],a=!1===n[o]||"desc"===n[o],s=i(e,r);if(0!==s)return a?-s:s}return n[0]?e.index-r.index:r.index-e.index}))}l.resetPage="resetPage",l.gotoPage="gotoPage",l.setPageSize="setPageSize";var et=function(e){e.stateReducers.push(tt),e.useInstance.push(nt)};function tt(e,t,n,r){if(t.type===l.init)return i({pageSize:10,pageIndex:0},e);if(t.type===l.resetPage)return i({},e,{pageIndex:r.initialState.pageIndex||0});if(t.type===l.gotoPage){var o=r.pageCount,a=r.page,s=x(t.pageIndex,e.pageIndex),c=!1;return s>e.pageIndex?c=-1===o?a.length>=e.pageSize:s<o:s<e.pageIndex&&(c=s>-1),c?i({},e,{pageIndex:s}):e}if(t.type===l.setPageSize){var u=t.pageSize,d=e.pageSize*e.pageIndex;return i({},e,{pageIndex:Math.floor(d/u),pageSize:u})}}function nt(e){var n=e.rows,r=e.autoResetPage,o=void 0===r||r,i=e.manualExpandedKey,a=void 0===i?"expanded":i,s=e.plugins,c=e.pageCount,u=e.paginateExpandedRows,d=void 0===u||u,p=e.expandSubRows,f=void 0===p||p,h=e.state,m=h.pageSize,x=h.pageIndex,v=h.expanded,w=h.globalFilter,k=h.filters,S=h.groupBy,A=h.sortBy,j=e.dispatch,C=e.data,E=e.manualPagination;g(s,["useGlobalFilter","useFilters","useGroupBy","useSortBy","useExpanded"],"usePagination");var O=y(o);b((function(){O()&&j({type:l.resetPage})}),[j,E?null:C,w,k,S,A]);var R=E?c:Math.ceil(n.length/m),P=t.useMemo((function(){return R>0?[].concat(new Array(R)).fill(null).map((function(e,t){return t})):[]}),[R]),T=t.useMemo((function(){var e;if(E)e=n;else{var t=m*x,r=t+m;e=n.slice(t,r)}return d?e:z(e,{manualExpandedKey:a,expanded:v,expandSubRows:f})}),[f,v,a,E,x,m,d,n]),M=x>0,I=-1===R?T.length>=m:x<R-1,L=t.useCallback((function(e){j({type:l.gotoPage,pageIndex:e})}),[j]),F=t.useCallback((function(){return L((function(e){return e-1}))}),[L]),N=t.useCallback((function(){return L((function(e){return e+1}))}),[L]),D=t.useCallback((function(e){j({type:l.setPageSize,pageSize:e})}),[j]);Object.assign(e,{pageOptions:P,pageCount:R,page:T,canPreviousPage:M,canNextPage:I,gotoPage:L,previousPage:F,nextPage:N,setPageSize:D})}et.pluginName="usePagination",l.resetPivot="resetPivot",l.togglePivot="togglePivot";var rt=function(e){e.getPivotToggleProps=[it],e.stateReducers.push(at),e.useInstanceAfterData.push(st),e.allColumns.push(lt),e.accessValue.push(ct),e.materializedColumns.push(ut),e.materializedColumnsDeps.push(dt),e.visibleColumns.push(pt),e.visibleColumnsDeps.push(ft),e.useInstance.push(ht),e.prepareRow.push(mt)};rt.pluginName="usePivotColumns";var ot=[],it=function(e,t){var n=t.header;return[e,{onClick:n.canPivot?function(e){e.persist(),n.togglePivot()}:void 0,style:{cursor:n.canPivot?"pointer":void 0},title:"Toggle Pivot"}]};function at(e,t,n,r){if(t.type===l.init)return i({pivotColumns:ot},e);if(t.type===l.resetPivot)return i({},e,{pivotColumns:r.initialState.pivotColumns||ot});if(t.type===l.togglePivot){var o=t.columnId,a=t.value,s=void 0!==a?a:!e.pivotColumns.includes(o);return i({},e,s?{pivotColumns:[].concat(e.pivotColumns,[o])}:{pivotColumns:e.pivotColumns.filter((function(e){return e!==o}))})}}function st(e){e.allColumns.forEach((function(t){t.isPivotSource=e.state.pivotColumns.includes(t.id)}))}function lt(e,t){var n=t.instance;return e.forEach((function(e){e.isPivotSource=n.state.pivotColumns.includes(e.id),e.uniqueValues=new Set})),e}function ct(e,t){var n=t.column;return n.uniqueValues&&void 0!==e&&n.uniqueValues.add(e),e}function ut(e,t){var n=t.instance,r=n.allColumns,o=n.state;if(!o.pivotColumns.length||!o.groupBy||!o.groupBy.length)return e;var a=o.pivotColumns.map((function(e){return r.find((function(t){return t.id===e}))})).filter(Boolean),s=r.filter((function(e){return!e.isPivotSource&&!o.groupBy.includes(e.id)&&!o.pivotColumns.includes(e.id)})),l=A(function e(t,n,r){void 0===t&&(t=0),void 0===r&&(r=[]);var o=a[t];return o?Array.from(o.uniqueValues).sort().map((function(a){var s=i({},o,{Header:o.PivotHeader||"string"==typeof o.header?o.Header+": "+a:a,isPivotGroup:!0,parent:n,depth:t,id:n?n.id+"."+o.id+"."+a:o.id+"."+a,pivotValue:a});return s.columns=e(t+1,s,[].concat(r,[function(e){return e.values[o.id]===a}])),s})):s.map((function(e){return i({},e,{canPivot:!1,isPivoted:!0,parent:n,depth:t,id:""+(n?n.id+"."+e.id:e.id),accessor:function(t,n,o){if(r.every((function(e){return e(o)})))return o.values[e.id]}})}))}());return[].concat(e,l)}function dt(e,t){var n=t.instance.state,r=n.pivotColumns,o=n.groupBy;return[].concat(e,[r,o])}function pt(e,t){var n=t.instance.state;return e=e.filter((function(e){return!e.isPivotSource})),n.pivotColumns.length&&n.groupBy&&n.groupBy.length&&(e=e.filter((function(e){return e.isGrouped||e.isPivoted}))),e}function ft(e,t){var n=t.instance;return[].concat(e,[n.state.pivotColumns,n.state.groupBy])}function ht(e){var t=e.columns,n=e.allColumns,r=e.flatHeaders,o=e.getHooks,i=e.plugins,a=e.dispatch,s=e.autoResetPivot,c=void 0===s||s,u=e.manaulPivot,d=e.disablePivot,p=e.defaultCanPivot;g(i,["useGroupBy"],"usePivotColumns");var h=y(e);n.forEach((function(t){var n=t.accessor,r=t.defaultPivot,o=t.disablePivot;t.canPivot=n?R(t.canPivot,!0!==o&&void 0,!0!==d&&void 0,!0):R(t.canPivot,r,p,!1),t.canPivot&&(t.togglePivot=function(){return e.togglePivot(t.id)}),t.Aggregated=t.Aggregated||t.Cell})),r.forEach((function(e){e.getPivotToggleProps=f(o().getPivotToggleProps,{instance:h(),header:e})}));var m=y(c);b((function(){m()&&a({type:l.resetPivot})}),[a,u?null:t]),Object.assign(e,{togglePivot:function(e,t){a({type:l.togglePivot,columnId:e,value:t})}})}function mt(e){e.allCells.forEach((function(e){e.isPivoted=e.column.isPivoted}))}l.resetSelectedRows="resetSelectedRows",l.toggleAllRowsSelected="toggleAllRowsSelected",l.toggleRowSelected="toggleRowSelected",l.toggleAllPageRowsSelected="toggleAllPageRowsSelected";var gt=function(e){e.getToggleRowSelectedProps=[xt],e.getToggleAllRowsSelectedProps=[yt],e.getToggleAllPageRowsSelectedProps=[vt],e.stateReducers.push(bt),e.useInstance.push(wt),e.prepareRow.push(kt)};gt.pluginName="useRowSelect";var xt=function(e,t){var n=t.instance,r=t.row,o=n.manualRowSelectedKey,i=void 0===o?"isSelected":o;return[e,{onChange:function(e){r.toggleRowSelected(e.target.checked)},style:{cursor:"pointer"},checked:!(!r.original||!r.original[i])||r.isSelected,title:"Toggle Row Selected",indeterminate:r.isSomeSelected}]},yt=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleAllRowsSelected(e.target.checked)},style:{cursor:"pointer"},checked:n.isAllRowsSelected,title:"Toggle All Rows Selected",indeterminate:Boolean(!n.isAllRowsSelected&&Object.keys(n.state.selectedRowIds).length)}]},vt=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleAllPageRowsSelected(e.target.checked)},style:{cursor:"pointer"},checked:n.isAllPageRowsSelected,title:"Toggle All Current Page Rows Selected",indeterminate:Boolean(!n.isAllPageRowsSelected&&n.page.some((function(e){var t=e.id;return n.state.selectedRowIds[t]})))}]};function bt(e,t,n,r){if(t.type===l.init)return i({selectedRowIds:{}},e);if(t.type===l.resetSelectedRows)return i({},e,{selectedRowIds:r.initialState.selectedRowIds||{}});if(t.type===l.toggleAllRowsSelected){var o=t.value,a=r.isAllRowsSelected,s=r.rowsById,c=r.nonGroupedRowsById,u=void 0===c?s:c,d=void 0!==o?o:!a,p=Object.assign({},e.selectedRowIds);return d?Object.keys(u).forEach((function(e){p[e]=!0})):Object.keys(u).forEach((function(e){delete p[e]})),i({},e,{selectedRowIds:p})}if(t.type===l.toggleRowSelected){var f=t.id,h=t.value,m=r.rowsById,g=r.selectSubRows,x=void 0===g||g,y=r.getSubRows,v=e.selectedRowIds[f],b=void 0!==h?h:!v;if(v===b)return e;var w=i({},e.selectedRowIds);return function e(t){var n=m[t];if(n&&(n.isGrouped||(b?w[t]=!0:delete w[t]),x&&y(n)))return y(n).forEach((function(t){return e(t.id)}))}(f),i({},e,{selectedRowIds:w})}if(t.type===l.toggleAllPageRowsSelected){var k=t.value,S=r.page,A=r.rowsById,j=r.selectSubRows,C=void 0===j||j,E=r.isAllPageRowsSelected,O=r.getSubRows,R=void 0!==k?k:!E,P=i({},e.selectedRowIds);return S.forEach((function(e){return function e(t){var n=A[t];if(n.isGrouped||(R?P[t]=!0:delete P[t]),C&&O(n))return O(n).forEach((function(t){return e(t.id)}))}(e.id)})),i({},e,{selectedRowIds:P})}return e}function wt(e){var n=e.data,r=e.rows,o=e.getHooks,i=e.plugins,a=e.rowsById,s=e.nonGroupedRowsById,c=void 0===s?a:s,u=e.autoResetSelectedRows,d=void 0===u||u,p=e.state.selectedRowIds,h=e.selectSubRows,m=void 0===h||h,x=e.dispatch,v=e.page,w=e.getSubRows;g(i,["useFilters","useGroupBy","useSortBy","useExpanded","usePagination"],"useRowSelect");var k=t.useMemo((function(){var e=[];return r.forEach((function(t){var n=m?function e(t,n,r){if(n[t.id])return!0;var o=r(t);if(o&&o.length){var i=!0,a=!1;return o.forEach((function(t){a&&!i||(e(t,n,r)?a=!0:i=!1)})),!!i||!!a&&null}return!1}(t,p,w):!!p[t.id];t.isSelected=!!n,t.isSomeSelected=null===n,n&&e.push(t)})),e}),[r,m,p,w]),S=Boolean(Object.keys(c).length&&Object.keys(p).length),A=S;S&&Object.keys(c).some((function(e){return!p[e]}))&&(S=!1),S||v&&v.length&&v.some((function(e){var t=e.id;return!p[t]}))&&(A=!1);var j=y(d);b((function(){j()&&x({type:l.resetSelectedRows})}),[x,n]);var C=t.useCallback((function(e){return x({type:l.toggleAllRowsSelected,value:e})}),[x]),E=t.useCallback((function(e){return x({type:l.toggleAllPageRowsSelected,value:e})}),[x]),O=t.useCallback((function(e,t){return x({type:l.toggleRowSelected,id:e,value:t})}),[x]),R=y(e),P=f(o().getToggleAllRowsSelectedProps,{instance:R()}),T=f(o().getToggleAllPageRowsSelectedProps,{instance:R()});Object.assign(e,{selectedFlatRows:k,isAllRowsSelected:S,isAllPageRowsSelected:A,toggleRowSelected:O,toggleAllRowsSelected:C,getToggleAllRowsSelectedProps:P,getToggleAllPageRowsSelectedProps:T,toggleAllPageRowsSelected:E})}function kt(e,t){var n=t.instance;e.toggleRowSelected=function(t){return n.toggleRowSelected(e.id,t)},e.getToggleRowSelectedProps=f(n.getHooks().getToggleRowSelectedProps,{instance:n,row:e})}var St=function(e){return{}},At=function(e){return{}};l.setRowState="setRowState",l.setCellState="setCellState",l.resetRowState="resetRowState";var jt=function(e){e.stateReducers.push(Ct),e.useInstance.push(Et),e.prepareRow.push(Ot)};function Ct(e,t,n,r){var o=r.initialRowStateAccessor,a=void 0===o?St:o,s=r.initialCellStateAccessor,c=void 0===s?At:s,u=r.rowsById;if(t.type===l.init)return i({rowState:{}},e);if(t.type===l.resetRowState)return i({},e,{rowState:r.initialState.rowState||{}});if(t.type===l.setRowState){var d,p=t.rowId,f=t.value,h=void 0!==e.rowState[p]?e.rowState[p]:a(u[p]);return i({},e,{rowState:i({},e.rowState,(d={},d[p]=x(f,h),d))})}if(t.type===l.setCellState){var m,g,y,v,b,w=t.rowId,k=t.columnId,S=t.value,A=void 0!==e.rowState[w]?e.rowState[w]:a(u[w]),j=void 0!==(null==A||null==(m=A.cellState)?void 0:m[k])?A.cellState[k]:c(null==(g=u[w])||null==(y=g.cells)?void 0:y.find((function(e){return e.column.id===k})));return i({},e,{rowState:i({},e.rowState,(b={},b[w]=i({},A,{cellState:i({},A.cellState||{},(v={},v[k]=x(S,j),v))}),b))})}}function Et(e){var n=e.autoResetRowState,r=void 0===n||n,o=e.data,i=e.dispatch,a=t.useCallback((function(e,t){return i({type:l.setRowState,rowId:e,value:t})}),[i]),s=t.useCallback((function(e,t,n){return i({type:l.setCellState,rowId:e,columnId:t,value:n})}),[i]),c=y(r);b((function(){c()&&i({type:l.resetRowState})}),[o]),Object.assign(e,{setRowState:a,setCellState:s})}function Ot(e,t){var n=t.instance,r=n.initialRowStateAccessor,o=void 0===r?St:r,i=n.initialCellStateAccessor,a=void 0===i?At:i,s=n.state.rowState;e&&(e.state=void 0!==s[e.id]?s[e.id]:o(e),e.setState=function(t){return n.setRowState(e.id,t)},e.cells.forEach((function(t){e.state.cellState||(e.state.cellState={}),t.state=void 0!==e.state.cellState[t.column.id]?e.state.cellState[t.column.id]:a(t),t.setState=function(r){return n.setCellState(e.id,t.column.id,r)}})))}jt.pluginName="useRowState",l.resetColumnOrder="resetColumnOrder",l.setColumnOrder="setColumnOrder";var Rt=function(e){e.stateReducers.push(Pt),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.columnOrder])})),e.visibleColumns.push(Tt),e.useInstance.push(zt)};function Pt(e,t,n,r){return t.type===l.init?i({columnOrder:[]},e):t.type===l.resetColumnOrder?i({},e,{columnOrder:r.initialState.columnOrder||[]}):t.type===l.setColumnOrder?i({},e,{columnOrder:x(t.columnOrder,e.columnOrder)}):void 0}function Tt(e,t){var n=t.instance.state.columnOrder;if(!n||!n.length)return e;for(var r=[].concat(n),o=[].concat(e),i=[],a=function(){var e=r.shift(),t=o.findIndex((function(t){return t.id===e}));t>-1&&i.push(o.splice(t,1)[0])};o.length&&r.length;)a();return[].concat(i,o)}function zt(e){var n=e.dispatch;e.setColumnOrder=t.useCallback((function(e){return n({type:l.setColumnOrder,columnOrder:e})}),[n])}Rt.pluginName="useColumnOrder",d.canResize=!0,l.columnStartResizing="columnStartResizing",l.columnResizing="columnResizing",l.columnDoneResizing="columnDoneResizing",l.resetResize="resetResize";var Mt=function(e){e.getResizerProps=[It],e.getHeaderProps.push({style:{position:"relative"}}),e.stateReducers.push(Lt),e.useInstance.push(Nt),e.useInstanceBeforeDimensions.push(Ft)},It=function(e,t){var n=t.instance,r=t.header,o=n.dispatch,i=function(e,t){var n=!1;if("touchstart"===e.type){if(e.touches&&e.touches.length>1)return;n=!0}var r,i,a=function(e){var t=[];return function e(n){n.columns&&n.columns.length&&n.columns.map(e),t.push(n)}(e),t}(t).map((function(e){return[e.id,e.totalWidth]})),s=n?Math.round(e.touches[0].clientX):e.clientX,c=function(){window.cancelAnimationFrame(r),r=null,o({type:l.columnDoneResizing})},u=function(){window.cancelAnimationFrame(r),r=null,o({type:l.columnResizing,clientX:i})},d=function(e){i=e,r||(r=window.requestAnimationFrame(u))},p={mouse:{moveEvent:"mousemove",moveHandler:function(e){return d(e.clientX)},upEvent:"mouseup",upHandler:function(e){document.removeEventListener("mousemove",p.mouse.moveHandler),document.removeEventListener("mouseup",p.mouse.upHandler),c()}},touch:{moveEvent:"touchmove",moveHandler:function(e){return e.cancelable&&(e.preventDefault(),e.stopPropagation()),d(e.touches[0].clientX),!1},upEvent:"touchend",upHandler:function(e){document.removeEventListener(p.touch.moveEvent,p.touch.moveHandler),document.removeEventListener(p.touch.upEvent,p.touch.moveHandler),c()}}},f=n?p.touch:p.mouse,h=!!function(){if("boolean"==typeof F)return F;var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){e=!1}return F=e}()&&{passive:!1};document.addEventListener(f.moveEvent,f.moveHandler,h),document.addEventListener(f.upEvent,f.upHandler,h),o({type:l.columnStartResizing,columnId:t.id,columnWidth:t.totalWidth,headerIdWidths:a,clientX:s})};return[e,{onMouseDown:function(e){return e.persist()||i(e,r)},onTouchStart:function(e){return e.persist()||i(e,r)},style:{cursor:"col-resize"},draggable:!1,role:"separator"}]};function Lt(e,t){if(t.type===l.init)return i({columnResizing:{columnWidths:{}}},e);if(t.type===l.resetResize)return i({},e,{columnResizing:{columnWidths:{}}});if(t.type===l.columnStartResizing){var n=t.clientX,r=t.columnId,o=t.columnWidth,a=t.headerIdWidths;return i({},e,{columnResizing:i({},e.columnResizing,{startX:n,headerIdWidths:a,columnWidth:o,isResizingColumn:r})})}if(t.type===l.columnResizing){var s=t.clientX,c=e.columnResizing,u=c.startX,d=c.columnWidth,p=c.headerIdWidths,f=(s-u)/d,h={};return(void 0===p?[]:p).forEach((function(e){var t=e[0],n=e[1];h[t]=Math.max(n+n*f,0)})),i({},e,{columnResizing:i({},e.columnResizing,{columnWidths:i({},e.columnResizing.columnWidths,{},h)})})}return t.type===l.columnDoneResizing?i({},e,{columnResizing:i({},e.columnResizing,{startX:null,isResizingColumn:null})}):void 0}Mt.pluginName="useResizeColumns";var Ft=function(e){var t=e.flatHeaders,n=e.disableResizing,r=e.getHooks,o=e.state.columnResizing,i=y(e);t.forEach((function(e){var t=R(!0!==e.disableResizing&&void 0,!0!==n&&void 0,!0);e.canResize=t,e.width=o.columnWidths[e.id]||e.originalWidth||e.width,e.isResizing=o.isResizingColumn===e.id,t&&(e.getResizerProps=f(r().getResizerProps,{instance:i(),header:e}))}))};function Nt(e){var n=e.plugins,r=e.dispatch,o=e.autoResetResize,i=void 0===o||o,a=e.columns;g(n,["useAbsoluteLayout"],"useResizeColumns");var s=y(i);b((function(){s()&&r({type:l.resetResize})}),[a]);var c=t.useCallback((function(){return r({type:l.resetResize})}),[r]);Object.assign(e,{resetResizing:c})}var Dt={position:"absolute",top:0},Bt=function(e){e.getTableBodyProps.push(_t),e.getRowProps.push(_t),e.getHeaderGroupProps.push(_t),e.getFooterGroupProps.push(_t),e.getHeaderProps.push((function(e,t){var n=t.column;return[e,{style:i({},Dt,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return[e,{style:i({},Dt,{left:n.column.totalLeft+"px",width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return[e,{style:i({},Dt,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]}))};Bt.pluginName="useAbsoluteLayout";var _t=function(e,t){return[e,{style:{position:"relative",width:t.instance.totalColumnsWidth+"px"}}]},Ht={display:"inline-block",boxSizing:"border-box"},Ut=function(e,t){return[e,{style:{display:"flex",width:t.instance.totalColumnsWidth+"px"}}]},Wt=function(e){e.getRowProps.push(Ut),e.getHeaderGroupProps.push(Ut),e.getFooterGroupProps.push(Ut),e.getHeaderProps.push((function(e,t){var n=t.column;return[e,{style:i({},Ht,{width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return[e,{style:i({},Ht,{width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return[e,{style:i({},Ht,{width:n.totalWidth+"px"})}]}))};function qt(e){e.getTableProps.push(Gt),e.getRowProps.push(Kt),e.getHeaderGroupProps.push(Kt),e.getFooterGroupProps.push(Kt),e.getHeaderProps.push(Vt),e.getCellProps.push(Jt),e.getFooterProps.push(Qt)}Wt.pluginName="useBlockLayout",qt.pluginName="useFlexLayout";var Gt=function(e,t){return[e,{style:{minWidth:t.instance.totalColumnsMinWidth+"px"}}]},Kt=function(e,t){return[e,{style:{display:"flex",flex:"1 0 auto",minWidth:t.instance.totalColumnsMinWidth+"px"}}]},Vt=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]},Jt=function(e,t){var n=t.cell;return[e,{style:{boxSizing:"border-box",flex:n.column.totalFlexWidth+" 0 auto",minWidth:n.column.totalMinWidth+"px",width:n.column.totalWidth+"px"}}]},Qt=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]};function Yt(e){e.stateReducers.push(en),e.getTableProps.push(Zt),e.getHeaderProps.push(Xt),e.getRowProps.push($t)}l.columnStartResizing="columnStartResizing",l.columnResizing="columnResizing",l.columnDoneResizing="columnDoneResizing",l.resetResize="resetResize",Yt.pluginName="useGridLayout";var Zt=function(e,t){var n=t.instance;return[e,{style:{display:"grid",gridTemplateColumns:n.visibleColumns.map((function(e){var t;return n.state.gridLayout.columnWidths[e.id]?n.state.gridLayout.columnWidths[e.id]+"px":(null==(t=n.state.columnResizing)?void 0:t.isResizingColumn)?n.state.gridLayout.startWidths[e.id]+"px":"number"==typeof e.width?e.width+"px":e.width})).join(" ")}}]},Xt=function(e,t){var n=t.column;return[e,{id:"header-cell-"+n.id,style:{position:"sticky",gridColumn:"span "+n.totalVisibleHeaderCount}}]},$t=function(e,t){var n=t.row;return n.isExpanded?[e,{style:{gridColumn:"1 / "+(n.cells.length+1)}}]:[e,{}]};function en(e,t,n,r){if(t.type===l.init)return i({gridLayout:{columnWidths:{}}},e);if(t.type===l.resetResize)return i({},e,{gridLayout:{columnWidths:{}}});if(t.type===l.columnStartResizing){var o=t.columnId,a=t.headerIdWidths,s=tn(o);if(void 0!==s){var c=r.visibleColumns.reduce((function(e,t){var n;return i({},e,((n={})[t.id]=tn(t.id),n))}),{}),u=r.visibleColumns.reduce((function(e,t){var n;return i({},e,((n={})[t.id]=t.minWidth,n))}),{}),d=r.visibleColumns.reduce((function(e,t){var n;return i({},e,((n={})[t.id]=t.maxWidth,n))}),{}),p=a.map((function(e){var t=e[0];return[t,tn(t)]}));return i({},e,{gridLayout:i({},e.gridLayout,{startWidths:c,minWidths:u,maxWidths:d,headerIdGridWidths:p,columnWidth:s})})}return e}if(t.type===l.columnResizing){var f=t.clientX,h=e.columnResizing.startX,m=e.gridLayout,g=m.columnWidth,x=m.minWidths,y=m.maxWidths,v=m.headerIdGridWidths,b=(f-h)/g,w={};return(void 0===v?[]:v).forEach((function(e){var t=e[0],n=e[1];w[t]=Math.min(Math.max(x[t],n+n*b),y[t])})),i({},e,{gridLayout:i({},e.gridLayout,{columnWidths:i({},e.gridLayout.columnWidths,{},w)})})}return t.type===l.columnDoneResizing?i({},e,{gridLayout:i({},e.gridLayout,{startWidths:{},minWidths:{},maxWidths:{}})}):void 0}function tn(e){var t,n=null==(t=document.getElementById("header-cell-"+e))?void 0:t.offsetWidth;if(void 0!==n)return n}e._UNSTABLE_usePivotColumns=rt,e.actions=l,e.defaultColumn=d,e.defaultGroupByFn=We,e.defaultOrderByFn=$e,e.defaultRenderer=c,e.emptyRenderer=u,e.ensurePluginOrder=g,e.flexRender=k,e.functionalUpdate=x,e.loopHooks=m,e.makePropGetter=f,e.makeRenderer=w,e.reduceHooks=h,e.safeUseLayoutEffect=v,e.useAbsoluteLayout=Bt,e.useAsyncDebounce=function(e,n){void 0===n&&(n=0);var i=t.useRef({}),a=y(e),s=y(n);return t.useCallback(function(){var e=o(r.mark((function e(){var t,n,l,c=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=c.length,n=new Array(t),l=0;l<t;l++)n[l]=c[l];return i.current.promise||(i.current.promise=new Promise((function(e,t){i.current.resolve=e,i.current.reject=t}))),i.current.timeout&&clearTimeout(i.current.timeout),i.current.timeout=setTimeout(o(r.mark((function e(){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete i.current.timeout,e.prev=1,e.t0=i.current,e.next=5,a().apply(void 0,n);case 5:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),i.current.reject(e.t2);case 12:return e.prev=12,delete i.current.promise,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])}))),s()),e.abrupt("return",i.current.promise);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),[a,s])},e.useBlockLayout=Wt,e.useColumnOrder=Rt,e.useExpanded=ce,e.useFilters=Ce,e.useFlexLayout=qt,e.useGetLatest=y,e.useGlobalFilter=Re,e.useGridLayout=Yt,e.useGroupBy=Fe,e.useMountedLayoutEffect=b,e.usePagination=et,e.useResizeColumns=Mt,e.useRowSelect=gt,e.useRowState=jt,e.useSortBy=Qe,e.useTable=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e=ae(e),r=[J].concat(r);var a=y(t.useRef({}).current);Object.assign(a(),i({},e,{plugins:r,hooks:V()})),r.filter(Boolean).forEach((function(e){e(a().hooks)}));var s=y(a().hooks);a().getHooks=s,delete a().hooks,Object.assign(a(),h(s().useOptions,ae(e)));var c=a(),u=c.data,d=c.columns,p=c.initialState,g=c.defaultColumn,x=c.getSubRows,v=c.getRowId,b=c.stateReducer,k=c.useControlledState,O=y(b),R=t.useCallback((function(e,t){if(!t.type)throw console.info({action:t}),new Error("Unknown Action \ud83d\udc46");return[].concat(s().stateReducers,Array.isArray(O())?O():[O()]).reduce((function(n,r){return r(n,t,e,a())||n}),e)}),[s,O,a]),P=t.useReducer(R,void 0,(function(){return R(p,{type:l.init})})),T=P[0],z=P[1],M=h([].concat(s().useControlledState,[k]),T,{instance:a()});Object.assign(a(),{state:M,dispatch:z});var I=t.useMemo((function(){return S(h(s().columns,d,{instance:a()}))}),[s,a,d].concat(h(s().columnsDeps,[],{instance:a()})));a().columns=I;var L=t.useMemo((function(){return h(s().allColumns,A(I),{instance:a()}).map(j)}),[I,s,a].concat(h(s().allColumnsDeps,[],{instance:a()})));a().allColumns=L;var F=t.useMemo((function(){for(var e=[],t=[],n={},r=[].concat(L);r.length;){var o=r.shift();le({data:u,rows:e,flatRows:t,rowsById:n,column:o,getRowId:v,getSubRows:x,accessValueHooks:s().accessValue,getInstance:a})}return[e,t,n]}),[L,u,v,x,s,a]),N=F[0],D=F[1],B=F[2];Object.assign(a(),{rows:N,initialRows:[].concat(N),flatRows:D,rowsById:B}),m(s().useInstanceAfterData,a());var _=t.useMemo((function(){return h(s().visibleColumns,L,{instance:a()}).map((function(e){return C(e,g)}))}),[s,L,a,g].concat(h(s().visibleColumnsDeps,[],{instance:a()})));L=t.useMemo((function(){var e=[].concat(_);return L.forEach((function(t){e.find((function(e){return e.id===t.id}))||e.push(t)})),e}),[L,_]),a().allColumns=L;var H=t.useMemo((function(){return h(s().headerGroups,E(_,g),a())}),[s,_,g,a].concat(h(s().headerGroupsDeps,[],{instance:a()})));a().headerGroups=H;var U=t.useMemo((function(){return H.length?H[0].headers:[]}),[H]);a().headers=U,a().flatHeaders=H.reduce((function(e,t){return[].concat(e,t.headers)}),[]),m(s().useInstanceBeforeDimensions,a());var W=_.filter((function(e){return e.isVisible})).map((function(e){return e.id})).sort().join("_");_=t.useMemo((function(){return _.filter((function(e){return e.isVisible}))}),[_,W]),a().visibleColumns=_;var q=se(U),G=q[0],K=q[1],Q=q[2];return a().totalColumnsMinWidth=G,a().totalColumnsWidth=K,a().totalColumnsMaxWidth=Q,m(s().useInstance,a()),[].concat(a().flatHeaders,a().allColumns).forEach((function(e){e.render=w(a(),e),e.getHeaderProps=f(s().getHeaderProps,{instance:a(),column:e}),e.getFooterProps=f(s().getFooterProps,{instance:a(),column:e})})),a().headerGroups=t.useMemo((function(){return H.filter((function(e,t){return e.headers=e.headers.filter((function(e){return e.headers?function e(t){return t.filter((function(t){return t.headers?e(t.headers):t.isVisible})).length}(e.headers):e.isVisible})),!!e.headers.length&&(e.getHeaderGroupProps=f(s().getHeaderGroupProps,{instance:a(),headerGroup:e,index:t}),e.getFooterGroupProps=f(s().getFooterGroupProps,{instance:a(),headerGroup:e,index:t}),!0)}))}),[H,a,s]),a().footerGroups=[].concat(a().headerGroups).reverse(),a().prepareRow=t.useCallback((function(e){e.getRowProps=f(s().getRowProps,{instance:a(),row:e}),e.allCells=L.map((function(t){var n=e.values[t.id],r={column:t,row:e,value:n};return r.getCellProps=f(s().getCellProps,{instance:a(),cell:r}),r.render=w(a(),t,{row:e,cell:r,value:n}),r})),e.cells=_.map((function(t){return e.allCells.find((function(e){return e.column.id===t.id}))})),m(s().prepareRow,e,{instance:a()})}),[s,a,L,_]),a().getTableProps=f(s().getTableProps,{instance:a()}),a().getTableBodyProps=f(s().getTableBodyProps,{instance:a()}),m(s().useFinalInstance,a()),a()},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(5043))},1094:(e,t,n)=>{e.exports=n(3310)},1153:(e,t,n)=>{"use strict";var r=n(5043),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=x.prototype;var b=v.prototype=new y;b.constructor=v,m(b,x.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!A.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function O(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===i?"."+O(l,0):i,w(a)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),R(a,t,o,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(l=0,i=""===i?".":i+":",w(e))for(var c=0;c<e.length;c++){var u=i+O(s=e[c],c);l+=R(s,t,o,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=R(s=s.value,t,o,u=i+O(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},M={transition:null},I={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:M,ReactCurrentOwner:S};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=o,t.Profiler=a,t.PureComponent=v,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!A.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,n){return z.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,n){return z.current.useReducer(e,t,n)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return z.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return z.current.useTransition()},t.version="18.3.1"},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},579:(e,t,n)=>{"use strict";e.exports=n(1153)},5820:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var r=function(){if("undefined"!==typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];e.call(t,o[1],o[0])}},t}()}(),o="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,i="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),a="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],l="undefined"!==typeof MutationObserver,c=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&l()}function s(){a(i)}function l(){var e=Date.now();if(n){if(e-o<2)return;r=!0}else n=!0,r=!1,setTimeout(s,t);o=e}return l}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),l?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;s.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),u=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},d=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},p=y(0,0,0,0);function f(e){return parseFloat(e)||0}function h(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+f(e["border-"+n+"-width"])}),0)}function m(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var r=d(e).getComputedStyle(e),o=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=e["padding-"+o];t[o]=f(i)}return t}(r),i=o.left+o.right,a=o.top+o.bottom,s=f(r.width),l=f(r.height);if("border-box"===r.boxSizing&&(Math.round(s+i)!==t&&(s-=h(r,"left","right")+i),Math.round(l+a)!==n&&(l-=h(r,"top","bottom")+a)),!function(e){return e===d(e).document.documentElement}(e)){var c=Math.round(s+i)-t,u=Math.round(l+a)-n;1!==Math.abs(c)&&(s-=c),1!==Math.abs(u)&&(l-=u)}return y(o.left,o.top,s,l)}var g="undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof d(e).SVGGraphicsElement}:function(e){return e instanceof d(e).SVGElement&&"function"===typeof e.getBBox};function x(e){return o?g(e)?function(e){var t=e.getBBox();return y(0,0,t.width,t.height)}(e):m(e):p}function y(e,t,n,r){return{x:e,y:t,width:n,height:r}}var v=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=x(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),b=function(e,t){var n=function(e){var t=e.x,n=e.y,r=e.width,o=e.height,i="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(i.prototype);return u(a,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),a}(t);u(this,{target:e,contentRect:n})},w=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new v(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new b(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),k="undefined"!==typeof WeakMap?new WeakMap:new r,S=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),r=new w(t,n,this);k.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){S.prototype[e]=function(){var t;return(t=k.get(this))[e].apply(t,arguments)}}));const A="undefined"!==typeof i.ResizeObserver?i.ResizeObserver:S},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>i(l,n))c<o&&0>i(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<o&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,M(k);else{var t=r(u);null!==t&&I(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,y(C),C=-1),h=!0;var i=f;try{for(b(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!R());){var a=p.callback;if("function"===typeof a){p.callback=null,f=p.priorityLevel;var s=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&o(c),b(n)}else o(c);p=r(c)}if(null!==p)var l=!0;else{var d=r(u);null!==d&&I(w,d.startTime-n),l=!1}return l}finally{p=null,f=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,A=!1,j=null,C=-1,E=5,O=-1;function R(){return!(t.unstable_now()-O<E)}function P(){if(null!==j){var e=t.unstable_now();O=e;var n=!0;try{n=j(!0,e)}finally{n?S():(A=!1,j=null)}}else A=!1}if("function"===typeof v)S=function(){v(P)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,z=T.port2;T.port1.onmessage=P,S=function(){z.postMessage(null)}}else S=function(){x(P,0)};function M(e){j=e,A||(A=!0,S())}function I(e,n){C=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,M(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>a?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(y(C),C=-1):g=!0,I(w,i-a))):(e.sortIndex=s,n(c,e),m||h||(m=!0,M(k))),e},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},7324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},7475:e=>{e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},4222:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(4403));t.default=function(e,t){var n=null;if(!e||"string"!==typeof e)return n;var r=(0,o.default)(e),i="function"===typeof t;return r.forEach((function(e){if("declaration"===e.type){var r=e.property,o=e.value;i?t(r,o,e):o&&((n=n||{})[r]=o)}})),n}},8178:function(e){e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}e.r(t),e.d(t,{default:()=>s});var r=encodeURIComponent;function o(e,t,o,i,s){var l=i&&s.arrayPrefix||"";if("object"===n(t)){var c="".concat(e).concat(l).concat(o&&"]","[");return"".concat(a(t,"".concat(o).concat(c),s))}return o&&o.length?"".concat(o).concat(e,"]").concat(l,"=").concat(r(t)):"".concat(e).concat(l,"=").concat(r(t))}function i(e,t,n,r){return t.map((function(t){return o(e,t,n,!0,r)})).join("&")}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(Array.isArray(e)?e.map((function(e,r){return o("".concat(r),e,t,!0,n)})):Object.keys(e).filter((function(t){return void 0!==e[t]})).map((function(r){return e[r]&&Array.isArray(e[r])?i("".concat(r),e[r],t,n):o(r,e[r],t,!1,n)}))).join("&").replace(/%20/g,"+")}const s=a;return t})()},6440:e=>{"use strict";var t=function(){};e.exports=t},4633:(e,t,n)=>{var r=n(3738).default;function o(){"use strict";e.exports=o=function(){return n},e.exports.__esModule=!0,e.exports.default=e.exports;var t,n={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",d=l.toStringTag||"@@toStringTag";function p(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(t){p=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof b?t:b,i=Object.create(o.prototype),a=new M(r||[]);return s(i,"_invoke",{value:R(e,n,a)}),i}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var m="suspendedStart",g="suspendedYield",x="executing",y="completed",v={};function b(){}function w(){}function k(){}var S={};p(S,c,(function(){return this}));var A=Object.getPrototypeOf,j=A&&A(A(I([])));j&&j!==i&&a.call(j,c)&&(S=j);var C=k.prototype=b.prototype=Object.create(S);function E(e){["next","throw","return"].forEach((function(t){p(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(o,i,s,l){var c=h(e[o],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==r(d)&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,s,l)}),(function(e){n("throw",e,s,l)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,l)}))}l(c.arg)}var o;s(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}})}function R(e,n,r){var o=m;return function(i,a){if(o===x)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var l=P(s,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===m)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=x;var c=h(e,n,r);if("normal"===c.type){if(o=r.done?y:g,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=y,r.method="throw",r.arg=c.arg)}}}function P(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=h(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function z(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(a.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(r(e)+" is not iterable")}return w.prototype=k,s(C,"constructor",{value:k,configurable:!0}),s(k,"constructor",{value:w,configurable:!0}),w.displayName=p(k,d,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,p(e,d,"GeneratorFunction")),e.prototype=Object.create(C),e},n.awrap=function(e){return{__await:e}},E(O.prototype),p(O.prototype,u,(function(){return this})),n.AsyncIterator=O,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new O(f(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(C),p(C,d,"Generator"),p(C,c,(function(){return this})),p(C,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=I,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(z),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),z(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;z(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},n}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},3738:e=>{function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4756:(e,t,n)=>{var r=n(4633)();e.exports=r;try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},8139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,i(n)))}return e}function i(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".7ec37918.chunk.js",n.miniCssF=e=>{},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="ipouterpage:";n.l=(r,o,i,a)=>{if(e[r])e[r].push(o);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,i,a=r[0],s=r[1],l=r[2],c=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)l(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkipouterpage=self.webpackChunkipouterpage||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>os,hasStandardBrowserEnv:()=>as,hasStandardBrowserWebWorkerEnv:()=>ss,navigator:()=>is,origin:()=>ls});var t={};n.r(t),n.d(t,{boolean:()=>tg,booleanish:()=>ng,commaOrSpaceSeparated:()=>sg,commaSeparated:()=>ag,number:()=>og,overloadedBoolean:()=>rg,spaceSeparated:()=>ig});var r={};n.r(r),n.d(r,{attentionMarkers:()=>_y,contentInitial:()=>Iy,disable:()=>Hy,document:()=>My,flow:()=>Fy,flowInitial:()=>Ly,insideSpan:()=>By,string:()=>Ny,text:()=>Dy});var o=n(5043),i=n.t(o,2),a=n(4391),s=n(8139),l=n.n(s);const c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},u=o.createContext(null);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(null,arguments)}function p(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}n(2740);function f(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function h(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function m(e,t){return Object.keys(t).reduce((function(n,r){var i,a=n,s=a[f(r)],l=a[r],c=p(a,[f(r),r].map(h)),u=t[r],m=function(e,t,n){var r=(0,o.useRef)(void 0!==e),i=(0,o.useState)(t),a=i[0],s=i[1],l=void 0!==e,c=r.current;return r.current=l,!l&&c&&a!==t&&s(t),[l?e:a,(0,o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(l,s,e[u]),g=m[0],x=m[1];return d({},c,((i={})[r]=g,i[u]=x,i))}),e)}n(5484);var g=n(579);const x=["xxl","xl","lg","md","sm","xs"],y="xs",v=o.createContext({prefixes:{},breakpoints:x,minBreakpoint:y}),{Consumer:b,Provider:w}=v;function k(e,t){const{prefixes:n}=(0,o.useContext)(v);return e||n[t]||t}function S(){const{breakpoints:e}=(0,o.useContext)(v);return e}function A(){const{minBreakpoint:e}=(0,o.useContext)(v);return e}const j=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:o,...i}=e;n=k(n,"navbar-brand");const a=o||(i.href?"a":"span");return(0,g.jsx)(a,{...i,ref:t,className:l()(r,n)})}));j.displayName="NavbarBrand";const C=j;function E(e){return e&&e.ownerDocument||document}function O(e,t){return function(e){var t=E(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var R=/([A-Z])/g;var P=/^ms-/;function T(e){return function(e){return e.replace(R,"-$1").toLowerCase()}(e).replace(P,"-ms-")}var z=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const M=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(T(t))||O(e).getPropertyValue(T(t));Object.keys(t).forEach((function(o){var i=t[o];i||0===i?!function(e){return!(!e||!z.test(e))}(o)?n+=T(o)+": "+i+";":r+=o+"("+i+") ":e.style.removeProperty(T(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}var L=n(7950),F=n.t(L,2);const N=!1,D=o.createContext(null);var B="unmounted",_="exited",H="entering",U="entered",W="exiting",q=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=_,r.appearStatus=H):o=U:o=t.unmountOnExit||t.mountOnEnter?B:_,r.state={status:o},r.nextCallback=null,r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,I(e,t)}(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===B?{status:_}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==H&&n!==U&&(t=H):n!==H&&n!==U||(t=W)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===H){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===_&&this.setState({status:B})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[L.findDOMNode(this),r],i=o[0],a=o[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!e&&!n||N?this.safeSetState({status:U},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:H},(function(){t.props.onEntering(i,a),t.onTransitionEnd(l,(function(){t.safeSetState({status:U},(function(){t.props.onEntered(i,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:L.findDOMNode(this);t&&!N?(this.props.onExit(r),this.safeSetState({status:W},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:_},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:_},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===B)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,p(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(D.Provider,{value:null},"function"===typeof n?n(e,r):o.cloneElement(o.Children.only(n),r))},t}(o.Component);function G(){}q.contextType=D,q.propTypes={},q.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:G,onEntering:G,onEntered:G,onExit:G,onExiting:G,onExited:G},q.UNMOUNTED=B,q.EXITED=_,q.ENTERING=H,q.ENTERED=U,q.EXITING=W;const K=q,V=!("undefined"===typeof window||!window.document||!window.document.createElement);var J=!1,Q=!1;try{var Y={get passive(){return J=!0},get once(){return Q=J=!0}};V&&(window.addEventListener("test",Y,Y),window.removeEventListener("test",Y,!0))}catch(aC){}const Z=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!Q){var o=r.once,i=r.capture,a=n;!Q&&o&&(a=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=a),e.addEventListener(t,a,J?r:i)}e.addEventListener(t,n,r)};const X=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};const $=function(e,t,n,r){return Z(e,t,n,r),function(){X(e,t,n,r)}};function ee(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),i=$(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function te(e,t,n,r){null==n&&(n=function(e){var t=M(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=ee(e,n,r),i=$(e,"transitionend",t);return function(){o(),i()}}function ne(e,t){const n=M(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function re(e,t){const n=ne(e,"transitionDuration"),r=ne(e,"transitionDelay"),o=te(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}const oe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),null)};function ie(e){e.offsetHeight}const ae=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const se=function(e,t){return(0,o.useMemo)((()=>function(e,t){const n=ae(e),r=ae(t);return e=>{n&&n(e),r&&r(e)}}(e,t)),[e,t])};const le=o.forwardRef(((e,t)=>{let{onEnter:n,onEntering:r,onEntered:i,onExit:a,onExiting:s,onExited:l,addEndListener:c,children:u,childRef:d,...p}=e;const f=(0,o.useRef)(null),h=se(f,d),m=e=>{var t;h((t=e)&&"setState"in t?L.findDOMNode(t):null!=t?t:null)},x=e=>t=>{e&&f.current&&e(f.current,t)},y=(0,o.useCallback)(x(n),[n]),v=(0,o.useCallback)(x(r),[r]),b=(0,o.useCallback)(x(i),[i]),w=(0,o.useCallback)(x(a),[a]),k=(0,o.useCallback)(x(s),[s]),S=(0,o.useCallback)(x(l),[l]),A=(0,o.useCallback)(x(c),[c]);return(0,g.jsx)(K,{ref:t,...p,onEnter:y,onEntered:b,onEntering:v,onExit:w,onExited:S,onExiting:k,addEndListener:A,nodeRef:f,children:"function"===typeof u?(e,t)=>u(e,{...t,ref:m}):o.cloneElement(u,{ref:m})})})),ce=le,ue={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function de(e,t){const n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=ue[e];return n+parseInt(M(t,r[0]),10)+parseInt(M(t,r[1]),10)}const pe={[_]:"collapse",[W]:"collapsing",[H]:"collapsing",[U]:"collapse show"},fe=o.forwardRef(((e,t)=>{let{onEnter:n,onEntering:r,onEntered:i,onExit:a,onExiting:s,className:c,children:u,dimension:d="height",in:p=!1,timeout:f=300,mountOnEnter:h=!1,unmountOnExit:m=!1,appear:x=!1,getDimensionValue:y=de,...v}=e;const b="function"===typeof d?d():d,w=(0,o.useMemo)((()=>oe((e=>{e.style[b]="0"}),n)),[b,n]),k=(0,o.useMemo)((()=>oe((e=>{const t=`scroll${b[0].toUpperCase()}${b.slice(1)}`;e.style[b]=`${e[t]}px`}),r)),[b,r]),S=(0,o.useMemo)((()=>oe((e=>{e.style[b]=null}),i)),[b,i]),A=(0,o.useMemo)((()=>oe((e=>{e.style[b]=`${y(b,e)}px`,ie(e)}),a)),[a,y,b]),j=(0,o.useMemo)((()=>oe((e=>{e.style[b]=null}),s)),[b,s]);return(0,g.jsx)(ce,{ref:t,addEndListener:re,...v,"aria-expanded":v.role?p:null,onEnter:w,onEntering:k,onEntered:S,onExit:A,onExiting:j,childRef:u.ref,in:p,timeout:f,mountOnEnter:h,unmountOnExit:m,appear:x,children:(e,t)=>o.cloneElement(u,{...t,className:l()(c,u.props.className,pe[e],"width"===b&&"collapse-horizontal")})})})),he=fe,me=o.createContext(null);me.displayName="NavbarContext";const ge=me,xe=o.forwardRef(((e,t)=>{let{children:n,bsPrefix:r,...i}=e;r=k(r,"navbar-collapse");const a=(0,o.useContext)(ge);return(0,g.jsx)(he,{in:!(!a||!a.expanded),...i,children:(0,g.jsx)("div",{ref:t,className:r,children:n})})}));xe.displayName="NavbarCollapse";const ye=xe;const ve=function(e){const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t};function be(e){const t=ve(e);return(0,o.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}const we=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,children:i,label:a="Toggle navigation",as:s="button",onClick:c,...u}=e;n=k(n,"navbar-toggler");const{onToggle:d,expanded:p}=(0,o.useContext)(ge)||{},f=be((e=>{c&&c(e),d&&d()}));return"button"===s&&(u.type="button"),(0,g.jsx)(s,{...u,ref:t,onClick:f,"aria-label":a,className:l()(r,n,!p&&"collapsed"),children:i||(0,g.jsx)("span",{className:`${n}-icon`})})}));we.displayName="NavbarToggle";const ke=we,Se="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,Ae="undefined"!==typeof document||Se?o.useLayoutEffect:o.useEffect,je=new WeakMap,Ce=(e,t)=>{if(!e||!t)return;const n=je.get(t)||new Map;je.set(t,n);let r=n.get(e);return r||(r=t.matchMedia(e),r.refCount=0,n.set(r.media,r)),r};function Ee(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"undefined"===typeof window?void 0:window;const n=Ce(e,t),[r,i]=(0,o.useState)((()=>!!n&&n.matches));return Ae((()=>{let n=Ce(e,t);if(!n)return i(!1);let r=je.get(t);const o=()=>{i(n.matches)};return n.refCount++,n.addListener(o),o(),()=>{n.removeListener(o),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}}),[e]),r}const Oe=function(e){const t=Object.keys(e);function n(e,t){return e===t?t:e?`${e} and ${t}`:t}function r(n){const r=function(e){return t[Math.min(t.indexOf(e)+1,t.length-1)]}(n);let o=e[r];return o="number"===typeof o?o-.2+"px":`calc(${o} - 0.2px)`,`(max-width: ${o})`}return function(t,i,a){let s;return"object"===typeof t?(s=t,a=i,i=!0):(i=i||!0,s={[t]:i}),Ee((0,o.useMemo)((()=>Object.entries(s).reduce(((t,o)=>{let[i,a]=o;return"up"!==a&&!0!==a||(t=n(t,function(t){let n=e[t];return"number"===typeof n&&(n=`${n}px`),`(min-width: ${n})`}(i))),"down"!==a&&!0!==a||(t=n(t,r(i))),t}),"")),[JSON.stringify(s)]),a)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Re=Oe;function Pe(e){void 0===e&&(e=E());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(aC){return e.body}}function Te(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function ze(e){const t=function(e){const t=(0,o.useRef)(e);return t.current=e,t}(e);(0,o.useEffect)((()=>()=>t.current()),[])}const Me="data-rr-ui-";function Ie(e){return`${Me}${e}`}const Le=Ie("modal-open");const Fe=class{constructor(){let{ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(M(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(Le,""),M(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(Le),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}},Ne=(0,o.createContext)(V?window:void 0);Ne.Provider;function De(){return(0,o.useContext)(Ne)}const Be=(e,t)=>V?null==e?(t||E()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;const _e=function(e){let{children:t,in:n,onExited:r,mountOnEnter:i,unmountOnExit:a}=e;const s=(0,o.useRef)(null),l=(0,o.useRef)(n),c=be(r);(0,o.useEffect)((()=>{n?l.current=!0:c(s.current)}),[n,c]);const u=se(s,t.ref),d=(0,o.cloneElement)(t,{ref:u});return n?d:a||!l.current&&i?null:d};const He=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Ue(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:i,onExiting:a,onExited:s,addEndListener:l,children:c}=e,u=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,He);const{major:d}=function(){const e=o.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}(),p=d>=19?c.props.ref:c.ref,f=(0,o.useRef)(null),h=se(f,"function"===typeof c?null:p),m=e=>t=>{e&&f.current&&e(f.current,t)},g=(0,o.useCallback)(m(t),[t]),x=(0,o.useCallback)(m(n),[n]),y=(0,o.useCallback)(m(r),[r]),v=(0,o.useCallback)(m(i),[i]),b=(0,o.useCallback)(m(a),[a]),w=(0,o.useCallback)(m(s),[s]),k=(0,o.useCallback)(m(l),[l]);return Object.assign({},u,{nodeRef:f},t&&{onEnter:g},n&&{onEntering:x},r&&{onEntered:y},i&&{onExit:v},a&&{onExiting:b},s&&{onExited:w},l&&{addEndListener:k},{children:"function"===typeof c?(e,t)=>c(e,Object.assign({},t,{ref:h})):(0,o.cloneElement)(c,{ref:h})})}const We=["component"];const qe=o.forwardRef(((e,t)=>{let{component:n}=e;const r=Ue(function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,We));return(0,g.jsx)(n,Object.assign({ref:t},r))}));function Ge(e){let{children:t,in:n,onExited:r,onEntered:i,transition:a}=e;const[s,l]=(0,o.useState)(!n);n&&s&&l(!1);const c=function(e){let{in:t,onTransition:n}=e;const r=(0,o.useRef)(null),i=(0,o.useRef)(!0),a=be(n);return Ae((()=>{if(!r.current)return;let e=!1;return a({in:t,element:r.current,initial:i.current,isStale:()=>e}),()=>{e=!0}}),[t,a]),Ae((()=>(i.current=!1,()=>{i.current=!0})),[]),r}({in:!!n,onTransition:e=>{Promise.resolve(a(e)).then((()=>{e.isStale()||(e.in?null==i||i(e.element,e.initial):(l(!0),null==r||r(e.element)))}),(t=>{throw e.in||l(!0),t}))}}),u=se(c,t.ref);return s&&!n?null:(0,o.cloneElement)(t,{ref:u})}function Ke(e,t,n){return e?(0,g.jsx)(qe,Object.assign({},n,{component:e})):t?(0,g.jsx)(Ge,Object.assign({},n,{transition:t})):(0,g.jsx)(_e,Object.assign({},n))}const Ve=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let Je;function Qe(e){const t=De(),n=e||function(e){return Je||(Je=new Fe({ownerDocument:null==e?void 0:e.document})),Je}(t),r=(0,o.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,o.useCallback)((e=>{r.current.dialog=e}),[]),setBackdropRef:(0,o.useCallback)((e=>{r.current.backdrop=e}),[])})}const Ye=(0,o.forwardRef)(((e,t)=>{let{show:n=!1,role:r="dialog",className:i,style:a,children:s,backdrop:l=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:p,runTransition:f,backdropTransition:h,runBackdropTransition:m,autoFocus:x=!0,enforceFocus:y=!0,restoreFocus:v=!0,restoreFocusOptions:b,renderDialog:w,renderBackdrop:k=e=>(0,g.jsx)("div",Object.assign({},e)),manager:S,container:A,onShow:j,onHide:C=()=>{},onExit:E,onExited:O,onExiting:R,onEnter:P,onEntering:T,onEntered:z}=e,M=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Ve);const I=De(),F=function(e,t){const n=De(),[r,i]=(0,o.useState)((()=>Be(e,null==n?void 0:n.document)));if(!r){const t=Be(e);t&&i(t)}return(0,o.useEffect)((()=>{t&&r&&t(r)}),[t,r]),(0,o.useEffect)((()=>{const t=Be(e);t!==r&&i(t)}),[e,r]),r}(A),N=Qe(S),D=function(){const e=(0,o.useRef)(!0),t=(0,o.useRef)((()=>e.current));return(0,o.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}(),B=function(e){const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{t.current=e})),t.current}(n),[_,H]=(0,o.useState)(!n),U=(0,o.useRef)(null);(0,o.useImperativeHandle)(t,(()=>N),[N]),V&&!B&&n&&(U.current=Pe(null==I?void 0:I.document)),n&&_&&H(!1);const W=be((()=>{if(N.add(),Y.current=$(document,"keydown",J),Q.current=$(document,"focus",(()=>setTimeout(G)),!0),j&&j(),x){var e,t;const n=Pe(null!=(e=null==(t=N.dialog)?void 0:t.ownerDocument)?e:null==I?void 0:I.document);N.dialog&&n&&!Te(N.dialog,n)&&(U.current=n,N.dialog.focus())}})),q=be((()=>{var e;(N.remove(),null==Y.current||Y.current(),null==Q.current||Q.current(),v)&&(null==(e=U.current)||null==e.focus||e.focus(b),U.current=null)}));(0,o.useEffect)((()=>{n&&F&&W()}),[n,F,W]),(0,o.useEffect)((()=>{_&&q()}),[_,q]),ze((()=>{q()}));const G=be((()=>{if(!y||!D()||!N.isTopModal())return;const e=Pe(null==I?void 0:I.document);N.dialog&&e&&!Te(N.dialog,e)&&N.dialog.focus()})),K=be((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===l&&C())})),J=be((e=>{c&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&N.isTopModal()&&(null==d||d(e),e.defaultPrevented||C())})),Q=(0,o.useRef)(),Y=(0,o.useRef)();if(!F)return null;const Z=Object.assign({role:r,ref:N.setDialogRef,"aria-modal":"dialog"===r||void 0},M,{style:a,className:i,tabIndex:-1});let X=w?w(Z):(0,g.jsx)("div",Object.assign({},Z,{children:o.cloneElement(s,{role:"document"})}));X=Ke(p,f,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:E,onExiting:R,onExited:function(){H(!0),null==O||O(...arguments)},onEnter:P,onEntering:T,onEntered:z,children:X});let ee=null;return l&&(ee=k({ref:N.setBackdropRef,onClick:K}),ee=Ke(h,m,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ee})),(0,g.jsx)(g.Fragment,{children:L.createPortal((0,g.jsxs)(g.Fragment,{children:[ee,X]}),F)})}));Ye.displayName="Modal";const Ze=Object.assign(Ye,{Manager:Fe}),Xe={[H]:"show",[U]:"show"},$e=o.forwardRef(((e,t)=>{let{className:n,children:r,transitionClasses:i={},onEnter:a,...s}=e;const c={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...s},u=(0,o.useCallback)(((e,t)=>{ie(e),null==a||a(e,t)}),[a]);return(0,g.jsx)(ce,{ref:t,addEndListener:re,...c,onEnter:u,childRef:r.ref,children:(e,t)=>o.cloneElement(r,{...t,className:l()("fade",n,r.props.className,Xe[e],i[e])})})}));$e.displayName="Fade";const et=$e,tt=o.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:o="div",...i}=e;return r=k(r,"offcanvas-body"),(0,g.jsx)(o,{ref:t,className:l()(n,r),...i})}));tt.displayName="OffcanvasBody";const nt=tt,rt={[H]:"show",[U]:"show"},ot=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,children:i,in:a=!1,mountOnEnter:s=!1,unmountOnExit:c=!1,appear:u=!1,...d}=e;return n=k(n,"offcanvas"),(0,g.jsx)(ce,{ref:t,addEndListener:re,in:a,mountOnEnter:s,unmountOnExit:c,appear:u,...d,childRef:i.ref,children:(e,t)=>o.cloneElement(i,{...t,className:l()(r,i.props.className,(e===H||e===W)&&`${n}-toggling`,rt[e])})})}));ot.displayName="OffcanvasToggling";const it=ot,at=o.createContext({onHide(){}});var st=n(5173),lt=n.n(st);const ct={"aria-label":lt().string,onClick:lt().func,variant:lt().oneOf(["white"])},ut=o.forwardRef(((e,t)=>{let{className:n,variant:r,"aria-label":o="Close",...i}=e;return(0,g.jsx)("button",{ref:t,type:"button",className:l()("btn-close",r&&`btn-close-${r}`,n),"aria-label":o,...i})}));ut.displayName="CloseButton",ut.propTypes=ct;const dt=ut,pt=o.forwardRef(((e,t)=>{let{closeLabel:n="Close",closeVariant:r,closeButton:i=!1,onHide:a,children:s,...l}=e;const c=(0,o.useContext)(at),u=be((()=>{null==c||c.onHide(),null==a||a()}));return(0,g.jsxs)("div",{ref:t,...l,children:[s,i&&(0,g.jsx)(dt,{"aria-label":n,variant:r,onClick:u})]})})),ft=pt,ht=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,closeLabel:o="Close",closeButton:i=!1,...a}=e;return n=k(n,"offcanvas-header"),(0,g.jsx)(ft,{ref:t,...a,className:l()(r,n),closeLabel:o,closeButton:i})}));ht.displayName="OffcanvasHeader";const mt=ht,gt=(xt="h5",o.forwardRef(((e,t)=>(0,g.jsx)("div",{...e,ref:t,className:l()(e.className,xt)}))));var xt;const yt=o.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:o=gt,...i}=e;return r=k(r,"offcanvas-title"),(0,g.jsx)(o,{ref:t,className:l()(n,r),...i})}));yt.displayName="OffcanvasTitle";const vt=yt;var bt=Function.prototype.bind.call(Function.prototype.call,[].slice);function wt(e,t){return bt(e.querySelectorAll(t))}function kt(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const St=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",At=".sticky-top",jt=".navbar-toggler";class Ct extends Fe{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,M(t,{[e]:`${parseFloat(M(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],M(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(function(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}(t,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";wt(t,St).forEach((t=>this.adjustAndStore(n,t,e.scrollBarWidth))),wt(t,At).forEach((t=>this.adjustAndStore(r,t,-e.scrollBarWidth))),wt(t,jt).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();!function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=kt(e.className,t):e.setAttribute("class",kt(e.className&&e.className.baseVal||"",t))}(t,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";wt(t,St).forEach((e=>this.restore(n,e))),wt(t,At).forEach((e=>this.restore(r,e))),wt(t,jt).forEach((e=>this.restore(r,e)))}}let Et;const Ot=Ct;function Rt(e){return(0,g.jsx)(it,{...e})}function Pt(e){return(0,g.jsx)(et,{...e})}const Tt=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,children:i,"aria-labelledby":a,placement:s="start",responsive:c,show:u=!1,backdrop:d=!0,keyboard:p=!0,scroll:f=!1,onEscapeKeyDown:h,onShow:m,onHide:x,container:y,autoFocus:v=!0,enforceFocus:b=!0,restoreFocus:w=!0,restoreFocusOptions:S,onEntered:A,onExit:j,onExiting:C,onEnter:E,onEntering:O,onExited:R,backdropClassName:P,manager:T,renderStaticNode:z=!1,...M}=e;const I=(0,o.useRef)();n=k(n,"offcanvas");const{onToggle:L}=(0,o.useContext)(ge)||{},[F,N]=(0,o.useState)(!1),D=Re(c||"xs","up");(0,o.useEffect)((()=>{N(c?u&&!D:u)}),[u,c,D]);const B=be((()=>{null==L||L(),null==x||x()})),_=(0,o.useMemo)((()=>({onHide:B})),[B]);const H=(0,o.useCallback)((e=>(0,g.jsx)("div",{...e,className:l()(`${n}-backdrop`,P)})),[P,n]),U=e=>(0,g.jsx)("div",{...e,...M,className:l()(r,c?`${n}-${c}`:n,`${n}-${s}`),"aria-labelledby":a,children:i});return(0,g.jsxs)(g.Fragment,{children:[!F&&(c||z)&&U({}),(0,g.jsx)(at.Provider,{value:_,children:(0,g.jsx)(Ze,{show:F,ref:t,backdrop:d,container:y,keyboard:p,autoFocus:v,enforceFocus:b&&!f,restoreFocus:w,restoreFocusOptions:S,onEscapeKeyDown:h,onShow:m,onHide:B,onEnter:function(e){e&&(e.style.visibility="visible");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];null==E||E(e,...n)},onEntering:O,onEntered:A,onExit:j,onExiting:C,onExited:function(e){e&&(e.style.visibility="");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];null==R||R(...n)},manager:T||(f?(I.current||(I.current=new Ot({handleContainerOverflow:!1})),I.current):function(e){return Et||(Et=new Ct(e)),Et}()),transition:Rt,backdropTransition:Pt,renderBackdrop:H,renderDialog:U})})]})}));Tt.displayName="Offcanvas";const zt=Object.assign(Tt,{Body:nt,Header:mt,Title:vt}),Mt=o.forwardRef(((e,t)=>{const n=(0,o.useContext)(ge);return(0,g.jsx)(zt,{ref:t,show:!(null==n||!n.expanded),...e,renderStaticNode:!0})}));Mt.displayName="NavbarOffcanvas";const It=Mt,Lt=o.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:o="span",...i}=e;return r=k(r,"navbar-text"),(0,g.jsx)(o,{ref:t,className:l()(n,r),...i})}));Lt.displayName="NavbarText";const Ft=Lt,Nt=o.forwardRef(((e,t)=>{const{bsPrefix:n,expand:r=!0,variant:i="light",bg:a,fixed:s,sticky:c,className:d,as:p="nav",expanded:f,onToggle:h,onSelect:x,collapseOnSelect:y=!1,...v}=m(e,{expanded:"onToggle"}),b=k(n,"navbar"),w=(0,o.useCallback)((function(){null==x||x(...arguments),y&&f&&(null==h||h(!1))}),[x,y,f,h]);void 0===v.role&&"nav"!==p&&(v.role="navigation");let S=`${b}-expand`;"string"===typeof r&&(S=`${S}-${r}`);const A=(0,o.useMemo)((()=>({onToggle:()=>null==h?void 0:h(!f),bsPrefix:b,expanded:!!f,expand:r})),[b,f,r,h]);return(0,g.jsx)(ge.Provider,{value:A,children:(0,g.jsx)(u.Provider,{value:w,children:(0,g.jsx)(p,{ref:t,...v,className:l()(d,b,r&&S,i&&`${b}-${i}`,a&&`bg-${a}`,c&&`sticky-${c}`,s&&`fixed-${s}`)})})})}));Nt.displayName="Navbar";const Dt=Object.assign(Nt,{Brand:C,Collapse:ye,Offcanvas:It,Text:Ft,Toggle:ke}),Bt=o.forwardRef(((e,t)=>{let{bsPrefix:n,fluid:r=!1,as:o="div",className:i,...a}=e;const s=k(n,"container"),c="string"===typeof r?`-${r}`:"-fluid";return(0,g.jsx)(o,{ref:t,...a,className:l()(i,r?`${s}${c}`:s)})}));Bt.displayName="Container";const _t=Bt;n(9197);const Ht=o.createContext(null);Ht.displayName="NavContext";const Ut=Ht,Wt=o.createContext(null),qt=["as","disabled"];function Gt(e){let{tagName:t,disabled:n,href:r,target:o,rel:i,role:a,onClick:s,tabIndex:l=0,type:c}=e;t||(t=null!=r||null!=o||null!=i?"a":"button");const u={tagName:t};if("button"===t)return[{type:c||"button",disabled:n},u];const d=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==s||s(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:n?void 0:l,href:r,target:"a"===t?o:void 0,"aria-disabled":n||void 0,rel:"a"===t?i:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},u]}const Kt=o.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,qt);const[i,{tagName:a}]=Gt(Object.assign({tagName:n,disabled:r},o));return(0,g.jsx)(a,Object.assign({},o,i,{ref:t}))}));Kt.displayName="Button";const Vt=Kt,Jt=["as","active","eventKey"];function Qt(e){let{key:t,onClick:n,active:r,id:i,role:a,disabled:s}=e;const l=(0,o.useContext)(u),c=(0,o.useContext)(Ut),d=(0,o.useContext)(Wt);let p=r;const f={role:a};if(c){a||"tablist"!==c.role||(f.role="tab");const e=c.getControllerId(null!=t?t:null),n=c.getControlledId(null!=t?t:null);f[Ie("event-key")]=t,f.id=e||i,p=null==r&&null!=t?c.activeKey===t:r,!p&&(null!=d&&d.unmountOnExit||null!=d&&d.mountOnEnter)||(f["aria-controls"]=n)}return"tab"===f.role&&(f["aria-selected"]=p,p||(f.tabIndex=-1),s&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=be((e=>{s||(null==n||n(e),null!=t&&l&&!e.isPropagationStopped()&&l(t,e))})),[f,{isActive:p}]}const Yt=o.forwardRef(((e,t)=>{let{as:n=Vt,active:r,eventKey:o}=e,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Jt);const[a,s]=Qt(Object.assign({key:c(o,i.href),active:r},i));return a[Ie("active")]=s.isActive,(0,g.jsx)(n,Object.assign({},i,a,{ref:t}))}));Yt.displayName="NavItem";const Zt=Yt,Xt=["as","onSelect","activeKey","role","onKeyDown"];const $t=()=>{},en=Ie("event-key"),tn=o.forwardRef(((e,t)=>{let{as:n="div",onSelect:r,activeKey:i,role:a,onKeyDown:s}=e,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Xt);const d=function(){const[,e]=(0,o.useReducer)((e=>!e),!1);return e}(),p=(0,o.useRef)(!1),f=(0,o.useContext)(u),h=(0,o.useContext)(Wt);let m,x;h&&(a=a||"tablist",i=h.activeKey,m=h.getControlledId,x=h.getControllerId);const y=(0,o.useRef)(null),v=e=>{const t=y.current;if(!t)return null;const n=wt(t,`[${en}]:not([aria-disabled=true])`),r=t.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const o=n.indexOf(r);if(-1===o)return null;let i=o+e;return i>=n.length&&(i=0),i<0&&(i=n.length-1),n[i]},b=(e,t)=>{null!=e&&(null==r||r(e,t),null==f||f(e,t))};(0,o.useEffect)((()=>{if(y.current&&p.current){const e=y.current.querySelector(`[${en}][aria-selected=true]`);null==e||e.focus()}p.current=!1}));const w=se(t,y);return(0,g.jsx)(u.Provider,{value:b,children:(0,g.jsx)(Ut.Provider,{value:{role:a,activeKey:c(i),getControlledId:m||$t,getControllerId:x||$t},children:(0,g.jsx)(n,Object.assign({},l,{onKeyDown:e=>{if(null==s||s(e),!h)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=v(-1);break;case"ArrowRight":case"ArrowDown":t=v(1);break;default:return}var n;t&&(e.preventDefault(),b(t.dataset[(n="EventKey",`rrUi${n}`)]||null,e),p.current=!0,d())},ref:w,role:a}))})})}));tn.displayName="Nav";const nn=Object.assign(tn,{Item:Zt}),rn=o.createContext(null);rn.displayName="CardHeaderContext";const on=rn,an=o.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:o="div",...i}=e;return r=k(r,"nav-item"),(0,g.jsx)(o,{ref:t,className:l()(n,r),...i})}));an.displayName="NavItem";const sn=an;new WeakMap;const ln=["onKeyDown"];const cn=o.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,ln);const[o]=Gt(Object.assign({tagName:"a"},r)),i=be((e=>{o.onKeyDown(e),null==n||n(e)}));return(a=r.href)&&"#"!==a.trim()&&"button"!==r.role?(0,g.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,g.jsx)("a",Object.assign({ref:t},r,o,{onKeyDown:i}));var a}));cn.displayName="Anchor";const un=cn,dn=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:o=un,active:i,eventKey:a,disabled:s=!1,...u}=e;n=k(n,"nav-link");const[d,p]=Qt({key:c(a,u.href),active:i,disabled:s,...u});return(0,g.jsx)(o,{...u,...d,ref:t,disabled:s,className:l()(r,n,s&&"disabled",p.isActive&&"active")})}));dn.displayName="NavLink";const pn=dn,fn=o.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:r,variant:i,fill:a=!1,justify:s=!1,navbar:c,navbarScroll:u,className:d,activeKey:p,...f}=m(e,{activeKey:"onSelect"}),h=k(r,"nav");let x,y,v=!1;const b=(0,o.useContext)(ge),w=(0,o.useContext)(on);return b?(x=b.bsPrefix,v=null==c||c):w&&({cardHeaderBsPrefix:y}=w),(0,g.jsx)(nn,{as:n,ref:t,activeKey:p,className:l()(d,{[h]:!v,[`${x}-nav`]:v,[`${x}-nav-scroll`]:v&&u,[`${y}-${i}`]:!!y,[`${h}-${i}`]:!!i,[`${h}-fill`]:a,[`${h}-justified`]:s}),...f})}));fn.displayName="Nav";const hn=Object.assign(fn,{Item:sn,Link:pn}),mn=n.p+"static/media/Atom_walk_logo-removebg-preview.21661b59140f92dd7ced.png";var gn=function(){return gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},gn.apply(this,arguments)};Object.create;function xn(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var yn=n(7324),vn=n.n(yn),bn="-ms-",wn="-moz-",kn="-webkit-",Sn="comm",An="rule",jn="decl",Cn="@import",En="@keyframes",On="@layer",Rn=Math.abs,Pn=String.fromCharCode,Tn=Object.assign;function zn(e){return e.trim()}function Mn(e,t){return(e=t.exec(e))?e[0]:e}function In(e,t,n){return e.replace(t,n)}function Ln(e,t,n){return e.indexOf(t,n)}function Fn(e,t){return 0|e.charCodeAt(t)}function Nn(e,t,n){return e.slice(t,n)}function Dn(e){return e.length}function Bn(e){return e.length}function _n(e,t){return t.push(e),e}function Hn(e,t){return e.filter((function(e){return!Mn(e,t)}))}var Un=1,Wn=1,qn=0,Gn=0,Kn=0,Vn="";function Jn(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Un,column:Wn,length:a,return:"",siblings:s}}function Qn(e,t){return Tn(Jn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Yn(e){for(;e.root;)e=Qn(e.root,{children:[e]});_n(e,e.siblings)}function Zn(){return Kn=Gn>0?Fn(Vn,--Gn):0,Wn--,10===Kn&&(Wn=1,Un--),Kn}function Xn(){return Kn=Gn<qn?Fn(Vn,Gn++):0,Wn++,10===Kn&&(Wn=1,Un++),Kn}function $n(){return Fn(Vn,Gn)}function er(){return Gn}function tr(e,t){return Nn(Vn,e,t)}function nr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rr(e){return Un=Wn=1,qn=Dn(Vn=e),Gn=0,[]}function or(e){return Vn="",e}function ir(e){return zn(tr(Gn-1,lr(91===e?e+2:40===e?e+1:e)))}function ar(e){for(;(Kn=$n())&&Kn<33;)Xn();return nr(e)>2||nr(Kn)>3?"":" "}function sr(e,t){for(;--t&&Xn()&&!(Kn<48||Kn>102||Kn>57&&Kn<65||Kn>70&&Kn<97););return tr(e,er()+(t<6&&32==$n()&&32==Xn()))}function lr(e){for(;Xn();)switch(Kn){case e:return Gn;case 34:case 39:34!==e&&39!==e&&lr(Kn);break;case 40:41===e&&lr(e);break;case 92:Xn()}return Gn}function cr(e,t){for(;Xn()&&e+Kn!==57&&(e+Kn!==84||47!==$n()););return"/*"+tr(t,Gn-1)+"*"+Pn(47===e?e:Xn())}function ur(e){for(;!nr($n());)Xn();return tr(e,Gn)}function dr(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function pr(e,t,n,r){switch(e.type){case On:if(e.children.length)break;case Cn:case jn:return e.return=e.return||e.value;case Sn:return"";case En:return e.return=e.value+"{"+dr(e.children,r)+"}";case An:if(!Dn(e.value=e.props.join(",")))return""}return Dn(n=dr(e.children,r))?e.return=e.value+"{"+n+"}":""}function fr(e,t,n){switch(function(e,t){return 45^Fn(e,0)?(((t<<2^Fn(e,0))<<2^Fn(e,1))<<2^Fn(e,2))<<2^Fn(e,3):0}(e,t)){case 5103:return kn+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return kn+e+e;case 4789:return wn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return kn+e+wn+e+bn+e+e;case 5936:switch(Fn(e,t+11)){case 114:return kn+e+bn+In(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return kn+e+bn+In(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return kn+e+bn+In(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return kn+e+bn+e+e;case 6165:return kn+e+bn+"flex-"+e+e;case 5187:return kn+e+In(e,/(\w+).+(:[^]+)/,kn+"box-$1$2"+bn+"flex-$1$2")+e;case 5443:return kn+e+bn+"flex-item-"+In(e,/flex-|-self/g,"")+(Mn(e,/flex-|baseline/)?"":bn+"grid-row-"+In(e,/flex-|-self/g,""))+e;case 4675:return kn+e+bn+"flex-line-pack"+In(e,/align-content|flex-|-self/g,"")+e;case 5548:return kn+e+bn+In(e,"shrink","negative")+e;case 5292:return kn+e+bn+In(e,"basis","preferred-size")+e;case 6060:return kn+"box-"+In(e,"-grow","")+kn+e+bn+In(e,"grow","positive")+e;case 4554:return kn+In(e,/([^-])(transform)/g,"$1"+kn+"$2")+e;case 6187:return In(In(In(e,/(zoom-|grab)/,kn+"$1"),/(image-set)/,kn+"$1"),e,"")+e;case 5495:case 3959:return In(e,/(image-set\([^]*)/,kn+"$1$`$1");case 4968:return In(In(e,/(.+:)(flex-)?(.*)/,kn+"box-pack:$3"+bn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+kn+e+e;case 4200:if(!Mn(e,/flex-|baseline/))return bn+"grid-column-align"+Nn(e,t)+e;break;case 2592:case 3360:return bn+In(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Mn(e.props,/grid-\w+-end/)}))?~Ln(e+(n=n[t].value),"span",0)?e:bn+In(e,"-start","")+e+bn+"grid-row-span:"+(~Ln(n,"span",0)?Mn(n,/\d+/):+Mn(n,/\d+/)-+Mn(e,/\d+/))+";":bn+In(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Mn(e.props,/grid-\w+-start/)}))?e:bn+In(In(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return In(e,/(.+)-inline(.+)/,kn+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(e)-1-t>6)switch(Fn(e,t+1)){case 109:if(45!==Fn(e,t+4))break;case 102:return In(e,/(.+:)(.+)-([^]+)/,"$1"+kn+"$2-$3$1"+wn+(108==Fn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ln(e,"stretch",0)?fr(In(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return In(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,s){return bn+n+":"+r+s+(o?bn+n+"-span:"+(i?a:+a-+r)+s:"")+e}));case 4949:if(121===Fn(e,t+6))return In(e,":",":"+kn)+e;break;case 6444:switch(Fn(e,45===Fn(e,14)?18:11)){case 120:return In(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+kn+(45===Fn(e,14)?"inline-":"")+"box$3$1"+kn+"$2$3$1"+bn+"$2box$3")+e;case 100:return In(e,":",":"+bn)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return In(e,"scroll-","scroll-snap-")+e}return e}function hr(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case jn:return void(e.return=fr(e.value,e.length,n));case En:return dr([Qn(e,{value:In(e.value,"@","@"+kn)})],r);case An:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Mn(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Yn(Qn(e,{props:[In(t,/:(read-\w+)/,":"+wn+"$1")]})),Yn(Qn(e,{props:[t]})),Tn(e,{props:Hn(n,r)});break;case"::placeholder":Yn(Qn(e,{props:[In(t,/:(plac\w+)/,":"+kn+"input-$1")]})),Yn(Qn(e,{props:[In(t,/:(plac\w+)/,":"+wn+"$1")]})),Yn(Qn(e,{props:[In(t,/:(plac\w+)/,bn+"input-$1")]})),Yn(Qn(e,{props:[t]})),Tn(e,{props:Hn(n,r)})}return""}))}}function mr(e){return or(gr("",null,null,null,[""],e=rr(e),0,[0],e))}function gr(e,t,n,r,o,i,a,s,l){for(var c=0,u=0,d=a,p=0,f=0,h=0,m=1,g=1,x=1,y=0,v="",b=o,w=i,k=r,S=v;g;)switch(h=y,y=Xn()){case 40:if(108!=h&&58==Fn(S,d-1)){-1!=Ln(S+=In(ir(y),"&","&\f"),"&\f",Rn(c?s[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:S+=ir(y);break;case 9:case 10:case 13:case 32:S+=ar(h);break;case 92:S+=sr(er()-1,7);continue;case 47:switch($n()){case 42:case 47:_n(yr(cr(Xn(),er()),t,n,l),l);break;default:S+="/"}break;case 123*m:s[c++]=Dn(S)*x;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==x&&(S=In(S,/\f/g,"")),f>0&&Dn(S)-d&&_n(f>32?vr(S+";",r,n,d-1,l):vr(In(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(_n(k=xr(S,t,n,c,u,o,s,v,b=[],w=[],d,i),i),123===y)if(0===u)gr(S,t,k,k,b,i,d,s,w);else switch(99===p&&110===Fn(S,3)?100:p){case 100:case 108:case 109:case 115:gr(e,k,k,r&&_n(xr(e,k,k,0,0,o,s,v,o,b=[],d,w),w),o,w,d,s,r?b:w);break;default:gr(S,k,k,k,[""],w,0,s,w)}}c=u=f=0,m=x=1,v=S="",d=a;break;case 58:d=1+Dn(S),f=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Zn())continue;switch(S+=Pn(y),y*m){case 38:x=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(Dn(S)-1)*x,x=1;break;case 64:45===$n()&&(S+=ir(Xn())),p=$n(),u=d=Dn(v=S+=ur(er())),y++;break;case 45:45===h&&2==Dn(S)&&(m=0)}}return i}function xr(e,t,n,r,o,i,a,s,l,c,u,d){for(var p=o-1,f=0===o?i:[""],h=Bn(f),m=0,g=0,x=0;m<r;++m)for(var y=0,v=Nn(e,p+1,p=Rn(g=a[m])),b=e;y<h;++y)(b=zn(g>0?f[y]+" "+v:In(v,/&\f/g,f[y])))&&(l[x++]=b);return Jn(e,t,n,0===o?An:s,l,c,u,d)}function yr(e,t,n,r){return Jn(e,t,n,Sn,Pn(Kn),Nn(e,2,-2),0,r)}function vr(e,t,n,r,o){return Jn(e,t,n,jn,Nn(e,0,r),Nn(e,r+1,-1),r,o)}var br={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wr="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",kr="active",Sr="data-styled-version",Ar="6.1.12",jr="/*!sc*/\n",Cr="undefined"!=typeof window&&"HTMLElement"in window,Er=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Or=(new Set,Object.freeze([])),Rr=Object.freeze({});function Pr(e,t,n){return void 0===n&&(n=Rr),e.theme!==n.theme&&e.theme||t||n.theme}var Tr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mr=/(^-|-$)/g;function Ir(e){return e.replace(zr,"-").replace(Mr,"")}var Lr=/(a)(d)/gi,Fr=52,Nr=function(e){return String.fromCharCode(e+(e>25?39:97))};function Dr(e){var t,n="";for(t=Math.abs(e);t>Fr;t=t/Fr|0)n=Nr(t%Fr)+n;return(Nr(t%Fr)+n).replace(Lr,"$1-$2")}var Br,_r=5381,Hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ur=function(e){return Hr(_r,e)};function Wr(e){return Dr(Ur(e)>>>0)}function qr(e){return e.displayName||e.name||"Component"}function Gr(e){return"string"==typeof e&&!0}var Kr="function"==typeof Symbol&&Symbol.for,Vr=Kr?Symbol.for("react.memo"):60115,Jr=Kr?Symbol.for("react.forward_ref"):60112,Qr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xr=((Br={})[Jr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Br[Vr]=Zr,Br);function $r(e){return("type"in(t=e)&&t.type.$$typeof)===Vr?Zr:"$$typeof"in e?Xr[e.$$typeof]:Qr;var t}var eo=Object.defineProperty,to=Object.getOwnPropertyNames,no=Object.getOwnPropertySymbols,ro=Object.getOwnPropertyDescriptor,oo=Object.getPrototypeOf,io=Object.prototype;function ao(e,t,n){if("string"!=typeof t){if(io){var r=oo(t);r&&r!==io&&ao(e,r,n)}var o=to(t);no&&(o=o.concat(no(t)));for(var i=$r(e),a=$r(t),s=0;s<o.length;++s){var l=o[s];if(!(l in Yr||n&&n[l]||a&&l in a||i&&l in i)){var c=ro(t,l);try{eo(e,l,c)}catch(e){}}}}return e}function so(e){return"function"==typeof e}function lo(e){return"object"==typeof e&&"styledComponentId"in e}function co(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function uo(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function po(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function fo(e,t,n){if(void 0===n&&(n=!1),!n&&!po(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=fo(e[r],t[r]);else if(po(t))for(var r in t)e[r]=fo(e[r],t[r]);return e}function ho(e,t){Object.defineProperty(e,"toString",{value:t})}function mo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var go=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw mo(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(jr);return t},e}(),xo=new Map,yo=new Map,vo=1,bo=function(e){if(xo.has(e))return xo.get(e);for(;yo.has(vo);)vo++;var t=vo++;return xo.set(e,t),yo.set(t,e),t},wo=function(e,t){vo=t+1,xo.set(e,t),yo.set(t,e)},ko="style[".concat(wr,"][").concat(Sr,'="').concat(Ar,'"]'),So=new RegExp("^".concat(wr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ao=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},jo=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(jr),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(So);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(wo(u,c),Ao(e,u,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},Co=function(e){for(var t=document.querySelectorAll(ko),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(wr)!==kr&&(jo(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Eo(){return n.nc}var Oo=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(wr,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(wr,kr),r.setAttribute(Sr,Ar);var a=Eo();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Ro=function(){function e(e){this.element=Oo(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw mo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Po=function(){function e(e){this.element=Oo(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),To=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),zo=Cr,Mo={isServer:!Cr,useCSSOMInjection:!Er},Io=function(){function e(e,t,n){void 0===e&&(e=Rr),void 0===t&&(t={});var r=this;this.options=gn(gn({},Mo),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Cr&&zo&&(zo=!1,Co(this)),ho(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return yo.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var s="".concat(wr,".g").concat(n,'[id="').concat(o,'"]'),l="";void 0!==i&&i.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(jr)},i=0;i<n;i++)o(i);return r}(r)}))}return e.registerId=function(e){return bo(e)},e.prototype.rehydrate=function(){!this.server&&Cr&&Co(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(gn(gn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new To(n):t?new Ro(n):new Po(n)}(this.options),new go(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(bo(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(bo(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(bo(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Lo=/&/g,Fo=/^\s*\/\/.*$/gm;function No(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=No(e.children,t)),e}))}function Do(e){var t,n,r,o=void 0===e?Rr:e,i=o.options,a=void 0===i?Rr:i,s=o.plugins,l=void 0===s?Or:s,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===An&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Lo,n).replace(r,c))})),a.prefix&&u.push(hr),u.push(pr);var d=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Fo,""),c=mr(i||o?"".concat(i," ").concat(o," { ").concat(l," }"):l);a.namespace&&(c=No(c,a.namespace));var d,p=[];return dr(c,function(e){var t=Bn(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce((function(e,t){return t.name||mo(15),Hr(e,t.name)}),_r).toString():"",d}var Bo=new Io,_o=Do(),Ho=o.createContext({shouldForwardProp:void 0,styleSheet:Bo,stylis:_o}),Uo=(Ho.Consumer,o.createContext(void 0));function Wo(){return(0,o.useContext)(Ho)}function qo(e){var t=(0,o.useState)(e.stylisPlugins),n=t[0],r=t[1],i=Wo().styleSheet,a=(0,o.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,i]),s=(0,o.useMemo)((function(){return Do({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,o.useEffect)((function(){vn()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,o.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}}),[e.shouldForwardProp,a,s]);return o.createElement(Ho.Provider,{value:l},o.createElement(Uo.Provider,{value:s},e.children))}var Go=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=_o);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ho(this,(function(){throw mo(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=_o),this.name+e.hash},e}(),Ko=function(e){return e>="A"&&e<="Z"};function Vo(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ko(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Jo=function(e){return null==e||!1===e||""===e},Qo=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Jo(i)&&(Array.isArray(i)&&i.isCss||so(i)?r.push("".concat(Vo(o),":"),i,";"):po(i)?r.push.apply(r,xn(xn(["".concat(o," {")],Qo(i),!1),["}"],!1)):r.push("".concat(Vo(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in br||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Yo(e,t,n,r){return Jo(e)?[]:lo(e)?[".".concat(e.styledComponentId)]:so(e)?!so(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Yo(e(t),t,n,r):e instanceof Go?n?(e.inject(n,r),[e.getName(r)]):[e]:po(e)?Qo(e):Array.isArray(e)?Array.prototype.concat.apply(Or,e.map((function(e){return Yo(e,t,n,r)}))):[e.toString()];var o}function Zo(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(so(n)&&!lo(n))return!1}return!0}var Xo=Ur(Ar),$o=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Zo(e),this.componentId=t,this.baseHash=Hr(Xo,t),this.baseStyle=n,Io.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=co(r,this.staticRulesId);else{var o=uo(Yo(this.rules,e,t,n)),i=Dr(Hr(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=co(r,i),this.staticRulesId=i}else{for(var s=Hr(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=uo(Yo(u,e,t,n));s=Hr(s,d+c),l+=d}}if(l){var p=Dr(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=co(r,p)}}return r},e}(),ei=o.createContext(void 0);ei.Consumer;var ti={};new Set;function ni(e,t,n){var r=lo(e),i=e,a=!Gr(e),s=t.attrs,l=void 0===s?Or:s,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Ir(e);ti[n]=(ti[n]||0)+1;var r="".concat(n,"-").concat(Wr(Ar+n+ti[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,p=void 0===d?function(e){return Gr(e)?"styled.".concat(e):"Styled(".concat(qr(e),")")}(e):d,f=t.displayName&&t.componentId?"".concat(Ir(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;m=function(e,t){return g(e,t)&&x(e,t)}}else m=g}var y=new $o(n,f,r?i.componentStyle:void 0);function v(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=o.useContext(ei),d=Wo(),p=e.shouldForwardProp||d.shouldForwardProp,f=Pr(t,u,a)||Rr,h=function(e,t,n){for(var r,o=gn(gn({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=so(r=e[i])?r(o):r;for(var s in a)o[s]="className"===s?co(o[s],a[s]):"style"===s?gn(gn({},o[s]),a[s]):a[s]}return t.className&&(o.className=co(o.className,t.className)),o}(r,t,f),m=h.as||c,g={};for(var x in h)void 0===h[x]||"$"===x[0]||"as"===x||"theme"===x&&h.theme===f||("forwardedAs"===x?g.as=h.forwardedAs:p&&!p(x,m)||(g[x]=h[x]));var y=function(e,t){var n=Wo();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),v=co(s,l);return y&&(v+=" "+y),h.className&&(v+=" "+h.className),g[Gr(m)&&!Tr.has(m)?"class":"className"]=v,g.ref=n,(0,o.createElement)(m,g)}(b,e,t)}v.displayName=p;var b=o.forwardRef(v);return b.attrs=h,b.componentStyle=y,b.displayName=p,b.shouldForwardProp=m,b.foldedComponentIds=r?co(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=f,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)fo(e,o[r],!0);return e}({},i.defaultProps,e):e}}),ho(b,(function(){return".".concat(b.styledComponentId)})),a&&ao(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function ri(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var oi=function(e){return Object.assign(e,{isCss:!0})};function ii(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(so(e)||po(e))return oi(Yo(ri(Or,xn([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Yo(r):oi(Yo(ri(r,t)))}function ai(e,t,n){if(void 0===n&&(n=Rr),!t)throw mo(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,ii.apply(void 0,xn([r],o,!1)))};return r.attrs=function(r){return ai(e,t,gn(gn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return ai(e,t,gn(gn({},n),r))},r}var si=function(e){return ai(ni,e)},li=si;Tr.forEach((function(e){li[e]=si(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Zo(e),Io.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(uo(Yo(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Io.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Eo(),r=uo([n&&'nonce="'.concat(n,'"'),"".concat(wr,'="true"'),"".concat(Sr,'="').concat(Ar,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw mo(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw mo(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[wr]="",t[Sr]=Ar,t.dangerouslySetInnerHTML={__html:n},t),i=Eo();return i&&(r.nonce=i),[o.createElement("style",gn({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Io({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw mo(2);return o.createElement(qo,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw mo(3)}})(),"__sc-".concat(wr,"__");const ci=li.img`
width: 180px;
`,ui=()=>{const[e,t]=(0,o.useState)("home"),[n,r]=(0,o.useState)(!1);(0,o.useEffect)((()=>{const e=()=>{window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const i=e=>{t(e)};return(0,g.jsx)(Dt,{expand:"md",className:n?"scrolled":"",children:(0,g.jsxs)(_t,{children:[(0,g.jsx)(Dt.Brand,{href:"/",children:(0,g.jsx)(ci,{src:mn,alt:"Logo"})}),(0,g.jsx)(Dt.Toggle,{"aria-controls":"basic-navbar-nav",children:(0,g.jsx)("span",{className:"navbar-toggler-icon"})}),(0,g.jsxs)(Dt.Collapse,{id:"basic-navbar-nav",className:"mobile",children:[(0,g.jsxs)(hn,{className:"ms-auto",children:[(0,g.jsx)(hn.Link,{href:"/Product.html",className:"Product"===e?"active navbar-link":"navbar-link",onClick:()=>i("Product"),children:"Products"}),(0,g.jsx)(hn.Link,{href:"/pricing.html",className:"Pricing"===e?"active navbar-link":"navbar-link",onClick:()=>i("Pricing"),children:"Pricing"}),(0,g.jsx)(hn.Link,{href:"/aboutUs.html",className:"about"===e?"active navbar-link":"navbar-link",onClick:()=>i("about"),children:"About Us"}),(0,g.jsx)(hn.Link,{href:"/contactUs.html",className:"projects"===e?"active navbar-link":"navbar-link",onClick:()=>i("projects"),children:"Contact Us"})]}),(0,g.jsx)("span",{className:"navbar-text",children:(0,g.jsx)("button",{onClick:()=>{window.location.href="https://www.atomwalk.com/login/"},className:"vvd",children:(0,g.jsx)("span",{children:"Login"})})})]})]})})};n.p;var di=n(6930);const pi=n.p+"static/media/Manufacturing-Business-Development-Tips-1024x576.074a46b916689a522875.jpg",fi=n.p+"static/media/labmangement.ff0cade8676acbeeba14.jpg",hi=n.p+"static/media/chemical.eb8ede543e55d00b0160.png",mi=n.p+"static/media/consaltant.918ca418601df0f447f2.jpg",gi=li.div`
  padding: 20px;
  background-color: rgb(255 246 247);
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 50px;
  }
`,xi=li.div`
  margin-bottom: 40px;
`,yi=li.h1`
margin-top: 40px;
  font-size: 35px;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,vi=li.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,bi=li.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 300px;
    margin-right: 30px;
    margin-bottom: 0;
  }
`,wi=li.div`
  flex: 1;
`,ki=li.h2`
  font-size: 24px;
  color: #34495e;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`,Si=li.p`
  font-size: 16px;
  color: #7f8c8d;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,Ai=()=>{const e=()=>{window.location.href="/product.html"};return(0,g.jsxs)(gi,{children:[(0,g.jsx)(yi,{children:"Streamlining Business Operations"}),(0,g.jsx)(xi,{children:(0,g.jsxs)(vi,{onClick:e,style:{backgroundColor:"#F6EAFF"},children:[(0,g.jsx)(bi,{src:pi,alt:"Manufacturing Small Business"}),(0,g.jsxs)(wi,{children:[(0,g.jsx)(ki,{children:"Discrete Manufacturing"}),(0,g.jsx)(Si,{children:"In the manufacturing sector, optimizing production lines, managing supply chains, and maintaining equipment are vital. Implementing systems for real-time monitoring and predictive maintenance can improve productivity and reduce downtime."})]})]})}),(0,g.jsx)(xi,{children:(0,g.jsxs)(vi,{onClick:e,style:{backgroundColor:"#EDF5FF"},children:[(0,g.jsx)(bi,{src:hi,alt:"Chemical Industry"}),(0,g.jsxs)(wi,{children:[(0,g.jsx)(ki,{children:"Process Manufacturing"}),(0,g.jsx)(Si,{children:"Production process (Recipe Management), Planning, Project/ Work order management, Operational efficiency, Inventory (Batch expiry tracking)/ Warehouse management, CRM, Accounting and Finan- cial management, Supplier and Purchase Order management."})]})]})}),(0,g.jsx)(xi,{children:(0,g.jsxs)(vi,{onClick:e,style:{backgroundColor:"#FFEADF"},children:[(0,g.jsx)(bi,{src:mi,alt:"Consultancy Business"}),(0,g.jsxs)(wi,{children:[(0,g.jsx)(ki,{children:"Consultancy, Services, Trading & NGOs"}),(0,g.jsx)(Si,{children:"Effective project management ensures timely completion of tasks, optimizing resources and teamwork. Operational efficiency focuses on streamlining processes for maximum productivity. Integrated systems for CRM, accounting, financial management, and supplier/purchase order management enhance decision-making, track finances, and ensure smooth supplier relations."})]})]})}),(0,g.jsx)(xi,{children:(0,g.jsxs)(vi,{onClick:()=>{window.location.href="/lms.html"},style:{backgroundColor:"#E1FFF6"},children:[(0,g.jsx)(bi,{src:fi,alt:"Lab Management System"}),(0,g.jsxs)(wi,{children:[(0,g.jsx)(ki,{children:"Lab Management"}),(0,g.jsx)(Si,{children:"Research and Development (R & D) Labs in companies/ Universities - Grant management, Operational efficiency chemical consumption, Lab equipment management, Supplier and Purchase order management, Lab report/ documentation."})]})]})})]})},ji=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:o="div",...i}=e;const a=k(n,"row"),s=S(),c=A(),u=`${a}-cols`,d=[];return s.forEach((e=>{const t=i[e];let n;delete i[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const r=e!==c?`-${e}`:"";null!=n&&d.push(`${u}${r}-${n}`)})),(0,g.jsx)(o,{ref:t,...i,className:l()(r,a,...d)})}));ji.displayName="Row";const Ci=ji;const Ei=o.forwardRef(((e,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:i,spans:a}]=function(e){let{as:t,bsPrefix:n,className:r,...o}=e;n=k(n,"col");const i=S(),a=A(),s=[],c=[];return i.forEach((e=>{const t=o[e];let r,i,l;delete o[e],"object"===typeof t&&null!=t?({span:r,offset:i,order:l}=t):r=t;const u=e!==a?`-${e}`:"";r&&s.push(!0===r?`${n}${u}`:`${n}${u}-${r}`),null!=l&&c.push(`order${u}-${l}`),null!=i&&c.push(`offset${u}-${i}`)})),[{...o,className:l()(r,...s,...c)},{as:t,bsPrefix:n,spans:s}]}(e);return(0,g.jsx)(o,{...r,ref:t,className:l()(n,!a.length&&i)})}));Ei.displayName="Col";const Oi=Ei,Ri=n.p+"static/media/Default_A_bustling_industrial_scene_depicting_modern_manufactu_1.ed533c9382af58022d54.jpg",Pi=n.p+"static/media/Management.6fb154b54ae761338aa3.jpg",Ti=n.p+"static/media/Hrandpayroll.9310263d77fde3406330.jpg",zi=n.p+"static/media/Designer.d544d66eb8011e427ca3.png",Mi=n.p+"static/media/Accountandf.84a96a15feb6344a4f22.png",Ii=n.p+"static/media/projectmangement.49b30c1477fc99ca756d.png",Li=(li.div`
  position: relative; /* Establishes a containing block for the pseudo-elements */
  border: 3px solid #007cc3;
  width: 300px;
  height: 387px;
  overflow: hidden; /* Ensures the image doesn't overflow the component's borders */
  margin-bottom: 24px;
  border-radius: 10px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${e=>e.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.3s ease; /* Adds a smooth transition effect */
    z-index: 1; /* Positions the image behind the color overlay */
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*background-color: rgba(10, 23, 54, 0.5);  Semi-transparent color overlay */
    box-shadow: inset -1px 5px 61px 23px #305cc380;
    z-index: 2; /* Positions the color overlay above the image */
  }

  &:hover::before {
    transform: scale(1.05); /* Scales the image slightly on hover */
  }
`,li.div`
  position: absolute;
  border: 2px solid white;
  height: 40px;
  z-index: 4;
  bottom: 12px;
  right: 8px;
  width: 108px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    animation: slideBg 450ms forwards;
    border:2px solid white;
  }

  @keyframes slideBg {
    from {
      background-position: 0% 0;
    }
    to {
      background-position: 100% 0;
    }
  }

  background: linear-gradient(to right , #0a1736 50%, #007cc3 50%);
  background-size: 200% 100%;
  transition: background-position 1s;
`,li.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`),Fi=li.div`
  background-color: ${e=>e.color}; /* Light yellowish background */
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 520px;
  /* width: 100%; */
  /* max-width: 300px; */
  /* max-height: 500px; */
  margin: 10px;
  @media (min-width: 768px) {
    width: 90%; /* Adjust width for desktop */
  }
`,Ni=(li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,li.img`
  width: 70%;
  height: auto;
  margin-bottom: 20px;
`),Di=li.h3`
  font-size: 1.5em;
  color: #333;
`,Bi=li.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 20px;
  width: 80%;
`,_i=li.a`
  font-size: 1em;
  color: #ea5c49; /* Purple color */
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: #ee442d;
  }
`,Hi=e=>{var t,n,r;const o=e=>{window.location.href="HR & Payroll"==e?"/hrm.html":"Customer Management"==e?"/crm.html":"/product.html"};return(0,g.jsx)(Oi,{style:{margin:"-2px"},size:5,sm:6,md:4,children:(0,g.jsx)(Li,{onClick:()=>{var t;return o(null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.title)},children:(0,g.jsxs)(Fi,{color:null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.background,children:[(0,g.jsx)(Ni,{src:e.image,alt:"greytHR Academy"}),(0,g.jsx)(Di,{children:null===e||void 0===e||null===(n=e.project)||void 0===n?void 0:n.title}),(0,g.jsx)(Bi,{children:null===e||void 0===e||null===(r=e.project)||void 0===r?void 0:r.description}),(0,g.jsx)(_i,{onClick:()=>{var t;return o(null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.title)},children:"Know More"})]})})})},Ui=(li.div`
  width: 100%;
  height: 100vh;
`,()=>{const e=[{title:"Manufacturing Operations",description:"Efficiently manage your manufacturing operations with Atomwalk Office",imgUrl:Ri,background:"#fff8e6"},{title:"Inventory Management",description:"Take control of your inventory with Atomwalk Office",imgUrl:Pi,background:"#EEFAF4"},{title:"HR & Payroll",description:"Effortlessly handle HR and payroll tasks with Atomwalk Office",imgUrl:Ti,background:"#e6ffff"},{title:"Customer Management",description:"Deliver exceptional customer service and boost sales with Atomwalk Office",imgUrl:zi,background:"#EEFAF4"},{title:"Accounting & Financials",description:"Manage your accounting and financials seamlessly with Atomwalk Office",imgUrl:Mi,background:"#e6ffff"},{title:"Project Management",description:"Make informed decisions based on real-time information and analytics provided by Atomwalk Office",imgUrl:Ii,background:"#fff8e6"}];return(0,g.jsx)("section",{className:"project",id:"projects",children:(0,g.jsxs)(_t,{children:[(0,g.jsx)("h2",{children:"Comprehensive Business Management Solution"}),(0,g.jsx)("p",{children:"Streamline your business with Atomwalk Office's key features: Manufacturing Operations Management for optimized production and quality control, Purchasing & Inventory Management for precise supply chain oversight, Sales & Customer Service tools to boost sales and enhance customer relationships, Warehousing Solutions for efficient inventory tracking and automation, Accounting & Financials for thorough financial oversight, and a Complete HR Suite Including Payroll for seamless workforce management."}),(0,g.jsx)(Ci,{children:(0,g.jsx)(Oi,{size:12,children:(0,g.jsx)(Ci,{children:e.map(((e,t)=>(0,g.jsx)(Hi,{project:e,image:e.imgUrl},t)))})})})]})})});const Wi=n.p+"static/media/contact-img.87eac2b29352fa01abb2f9510ef6ac7e.svg";var qi=n(9834),Gi=n.n(qi),Ki=n(8178),Vi=n.n(Ki);const Ji=function(e){var t=e.status,n=e.message,r=e.className,i=e.style,a=e.onSubmitted,s=void 0;return o.createElement("div",{className:r,style:i},"sending"===t&&o.createElement("div",{style:{color:"blue"}},"sending..."),"error"===t&&o.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:n}}),"success"===t&&o.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:n}}),o.createElement("input",{ref:function(e){return s=e},type:"email",placeholder:"Your email"}),o.createElement("button",{onClick:function(){return s&&s.value.indexOf("@")>-1&&a({EMAIL:s.value})}},"Submit"))};function Qi(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var Yi=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=Qi(this,e.call.apply(e,[this].concat(i))),r.state={status:null,message:null},r.subscribe=function(e){var t=Vi()(e),n=function(e){return e.replace("/post?","/post-json?")}(r.props.url)+"&"+t;r.setState({status:"sending",message:null},(function(){return Gi()(n,{param:"c"},(function(e,t){e?r.setState({status:"error",message:e}):"success"!==t.result?r.setState({status:"error",message:t.msg}):r.setState({status:"success",message:t.msg})}))}))},Qi(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return this.props.render({subscribe:this.subscribe,status:this.state.status,message:this.state.message})},t}(o.Component);Yi.propTypes={},Yi.defaultProps={render:function(e){var t=e.subscribe,n=e.status,r=e.message;return o.createElement(Ji,{status:n,message:r,onSubmitted:function(e){return t(e)}})}};function Zi(e,t){return function(){return e.apply(t,arguments)}}const{toString:Xi}=Object.prototype,{getPrototypeOf:$i}=Object,ea=(ta=Object.create(null),e=>{const t=Xi.call(e);return ta[t]||(ta[t]=t.slice(8,-1).toLowerCase())});var ta;const na=e=>(e=e.toLowerCase(),t=>ea(t)===e),ra=e=>t=>typeof t===e,{isArray:oa}=Array,ia=ra("undefined");const aa=na("ArrayBuffer");const sa=ra("string"),la=ra("function"),ca=ra("number"),ua=e=>null!==e&&"object"===typeof e,da=e=>{if("object"!==ea(e))return!1;const t=$i(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},pa=na("Date"),fa=na("File"),ha=na("Blob"),ma=na("FileList"),ga=na("URLSearchParams"),[xa,ya,va,ba]=["ReadableStream","Request","Response","Headers"].map(na);function wa(e,t){let n,r,{allOwnKeys:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),oa(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=o?Object.getOwnPropertyNames(e):Object.keys(e),i=r.length;let a;for(n=0;n<i;n++)a=r[n],t.call(null,e[a],a,e)}}function ka(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const Sa="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,Aa=e=>!ia(e)&&e!==Sa;const ja=(Ca="undefined"!==typeof Uint8Array&&$i(Uint8Array),e=>Ca&&e instanceof Ca);var Ca;const Ea=na("HTMLFormElement"),Oa=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),Ra=na("RegExp"),Pa=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};wa(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},Ta="abcdefghijklmnopqrstuvwxyz",za="0123456789",Ma={DIGIT:za,ALPHA:Ta,ALPHA_DIGIT:Ta+Ta.toUpperCase()+za};const Ia=na("AsyncFunction"),La=(Fa="function"===typeof setImmediate,Na=la(Sa.postMessage),Fa?setImmediate:Na?((e,t)=>(Sa.addEventListener("message",(n=>{let{source:r,data:o}=n;r===Sa&&o===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),Sa.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var Fa,Na;const Da="undefined"!==typeof queueMicrotask?queueMicrotask.bind(Sa):"undefined"!==typeof process&&process.nextTick||La,Ba={isArray:oa,isArrayBuffer:aa,isBuffer:function(e){return null!==e&&!ia(e)&&null!==e.constructor&&!ia(e.constructor)&&la(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||la(e.append)&&("formdata"===(t=ea(e))||"object"===t&&la(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&aa(e.buffer),t},isString:sa,isNumber:ca,isBoolean:e=>!0===e||!1===e,isObject:ua,isPlainObject:da,isReadableStream:xa,isRequest:ya,isResponse:va,isHeaders:ba,isUndefined:ia,isDate:pa,isFile:fa,isBlob:ha,isRegExp:Ra,isFunction:la,isStream:e=>ua(e)&&la(e.pipe),isURLSearchParams:ga,isTypedArray:ja,isFileList:ma,forEach:wa,merge:function e(){const{caseless:t}=Aa(this)&&this||{},n={},r=(r,o)=>{const i=t&&ka(n,o)||o;da(n[i])&&da(r)?n[i]=e(n[i],r):da(r)?n[i]=e({},r):oa(r)?n[i]=r.slice():n[i]=r};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&wa(arguments[o],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return wa(t,((t,r)=>{n&&la(t)?e[r]=Zi(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==n&&$i(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:ea,kindOfTest:na,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(oa(e))return e;let t=e.length;if(!ca(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Ea,hasOwnProperty:Oa,hasOwnProp:Oa,reduceDescriptors:Pa,freezeMethods:e=>{Pa(e,((t,n)=>{if(la(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];la(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return oa(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:ka,global:Sa,isContextDefined:Aa,ALPHABET:Ma,generateString:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ma.ALPHA_DIGIT,n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&la(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(ua(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=oa(e)?[]:{};return wa(e,((e,t)=>{const i=n(e,r+1);!ia(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:Ia,isThenable:e=>e&&(ua(e)||la(e))&&la(e.then)&&la(e.catch),setImmediate:La,asap:Da};function _a(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}Ba.inherits(_a,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Ba.toJSONObject(this.config),code:this.code,status:this.status}}});const Ha=_a.prototype,Ua={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Ua[e]={value:e}})),Object.defineProperties(_a,Ua),Object.defineProperty(Ha,"isAxiosError",{value:!0}),_a.from=(e,t,n,r,o,i)=>{const a=Object.create(Ha);return Ba.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),_a.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const Wa=_a;function qa(e){return Ba.isPlainObject(e)||Ba.isArray(e)}function Ga(e){return Ba.endsWith(e,"[]")?e.slice(0,-2):e}function Ka(e,t,n){return e?e.concat(t).map((function(e,t){return e=Ga(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Va=Ba.toFlatObject(Ba,{},null,(function(e){return/^is[A-Z]/.test(e)}));const Ja=function(e,t,n){if(!Ba.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=Ba.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Ba.isUndefined(t[e])}))).metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,s=(n.Blob||"undefined"!==typeof Blob&&Blob)&&Ba.isSpecCompliantForm(t);if(!Ba.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Ba.isDate(e))return e.toISOString();if(!s&&Ba.isBlob(e))throw new Wa("Blob is not supported. Use a Buffer instead.");return Ba.isArrayBuffer(e)||Ba.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,o){let s=e;if(e&&!o&&"object"===typeof e)if(Ba.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Ba.isArray(e)&&function(e){return Ba.isArray(e)&&!e.some(qa)}(e)||(Ba.isFileList(e)||Ba.endsWith(n,"[]"))&&(s=Ba.toArray(e)))return n=Ga(n),s.forEach((function(e,r){!Ba.isUndefined(e)&&null!==e&&t.append(!0===a?Ka([n],r,i):null===a?n:n+"[]",l(e))})),!1;return!!qa(e)||(t.append(Ka(o,n,i),l(e)),!1)}const u=[],d=Object.assign(Va,{defaultVisitor:c,convertValue:l,isVisitable:qa});if(!Ba.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!Ba.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),Ba.forEach(n,(function(n,i){!0===(!(Ba.isUndefined(n)||null===n)&&o.call(t,n,Ba.isString(i)?i.trim():i,r,d))&&e(n,r?r.concat(i):[i])})),u.pop()}}(e),t};function Qa(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ya(e,t){this._pairs=[],e&&Ja(e,this,t)}const Za=Ya.prototype;Za.append=function(e,t){this._pairs.push([e,t])},Za.toString=function(e){const t=e?function(t){return e.call(this,t,Qa)}:Qa;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const Xa=Ya;function $a(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function es(e,t,n){if(!t)return e;const r=n&&n.encode||$a,o=n&&n.serialize;let i;if(i=o?o(t,n):Ba.isURLSearchParams(t)?t.toString():new Xa(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const ts=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Ba.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},ns={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rs={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:Xa,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},os="undefined"!==typeof window&&"undefined"!==typeof document,is="object"===typeof navigator&&navigator||void 0,as=os&&(!is||["ReactNative","NativeScript","NS"].indexOf(is.product)<0),ss="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,ls=os&&window.location.href||"http://localhost",cs={...e,...rs};const us=function(e){function t(e,n,r,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),s=o>=e.length;if(i=!i&&Ba.isArray(r)?r.length:i,s)return Ba.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!a;r[i]&&Ba.isObject(r[i])||(r[i]=[]);return t(e,n,r[i],o)&&Ba.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!a}if(Ba.isFormData(e)&&Ba.isFunction(e.entries)){const n={};return Ba.forEachEntry(e,((e,r)=>{t(function(e){return Ba.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const ds={transitional:ns,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=Ba.isObject(e);o&&Ba.isHTMLForm(e)&&(e=new FormData(e));if(Ba.isFormData(e))return r?JSON.stringify(us(e)):e;if(Ba.isArrayBuffer(e)||Ba.isBuffer(e)||Ba.isStream(e)||Ba.isFile(e)||Ba.isBlob(e)||Ba.isReadableStream(e))return e;if(Ba.isArrayBufferView(e))return e.buffer;if(Ba.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Ja(e,new cs.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return cs.isNode&&Ba.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=Ba.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ja(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(Ba.isString(e))try{return(t||JSON.parse)(e),Ba.trim(e)}catch(aC){if("SyntaxError"!==aC.name)throw aC}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ds.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(Ba.isResponse(e)||Ba.isReadableStream(e))return e;if(e&&Ba.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(aC){if(n){if("SyntaxError"===aC.name)throw Wa.from(aC,Wa.ERR_BAD_RESPONSE,this,null,this.response);throw aC}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:cs.classes.FormData,Blob:cs.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Ba.forEach(["delete","get","head","post","put","patch"],(e=>{ds.headers[e]={}}));const ps=ds,fs=Ba.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hs=Symbol("internals");function ms(e){return e&&String(e).trim().toLowerCase()}function gs(e){return!1===e||null==e?e:Ba.isArray(e)?e.map(gs):String(e)}function xs(e,t,n,r,o){return Ba.isFunction(r)?r.call(this,t,n):(o&&(t=n),Ba.isString(t)?Ba.isString(r)?-1!==t.indexOf(r):Ba.isRegExp(r)?r.test(t):void 0:void 0)}class ys{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ms(t);if(!o)throw new Error("header name must be a non-empty string");const i=Ba.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=gs(e))}const i=(e,t)=>Ba.forEach(e,((e,n)=>o(e,n,t)));if(Ba.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(Ba.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&fs[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(Ba.isHeaders(e))for(const[a,s]of e.entries())o(s,a,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=ms(e)){const n=Ba.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(Ba.isFunction(t))return t.call(this,e,n);if(Ba.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ms(e)){const n=Ba.findKey(this,e);return!(!n||void 0===this[n]||t&&!xs(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ms(e)){const o=Ba.findKey(n,e);!o||t&&!xs(0,n[o],o,t)||(delete n[o],r=!0)}}return Ba.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!xs(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return Ba.forEach(this,((r,o)=>{const i=Ba.findKey(n,o);if(i)return t[i]=gs(r),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();a!==o&&delete t[o],t[a]=gs(r),n[a]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return Ba.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Ba.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[hs]=this[hs]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ms(e);t[r]||(!function(e,t){const n=Ba.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return Ba.isArray(e)?e.forEach(r):r(e),this}}ys.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Ba.reduceDescriptors(ys.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),Ba.freezeMethods(ys);const vs=ys;function bs(e,t){const n=this||ps,r=t||n,o=vs.from(r.headers);let i=r.data;return Ba.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function ws(e){return!(!e||!e.__CANCEL__)}function ks(e,t,n){Wa.call(this,null==e?"canceled":e,Wa.ERR_CANCELED,t,n),this.name="CanceledError"}Ba.inherits(ks,Wa,{__CANCEL__:!0});const Ss=ks;function As(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Wa("Request failed with status code "+n.status,[Wa.ERR_BAD_REQUEST,Wa.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const js=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=r[a];o||(o=l),n[i]=s,r[i]=l;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),l-o<t)return;const p=c&&l-c;return p?Math.round(1e3*d/p):void 0}};const Cs=function(e,t){let n,r,o=0,i=1e3/t;const a=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();o=i,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-o;for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];t>=i?a(l,e):(n=l,r||(r=setTimeout((()=>{r=null,a(n)}),i-t)))},()=>n&&a(n)]},Es=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const o=js(50,250);return Cs((n=>{const i=n.loaded,a=n.lengthComputable?n.total:void 0,s=i-r,l=o(s);r=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&i<=a?(a-i)/l:void 0,event:n,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),n)},Os=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Rs=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Ba.asap((()=>e(...n)))},Ps=cs.hasStandardBrowserEnv?function(){const e=cs.navigator&&/(msie|trident)/i.test(cs.navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=Ba.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0},Ts=cs.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];Ba.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),Ba.isString(r)&&a.push("path="+r),Ba.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function zs(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ms=e=>e instanceof vs?{...e}:e;function Is(e,t){t=t||{};const n={};function r(e,t,n){return Ba.isPlainObject(e)&&Ba.isPlainObject(t)?Ba.merge.call({caseless:n},e,t):Ba.isPlainObject(t)?Ba.merge({},t):Ba.isArray(t)?t.slice():t}function o(e,t,n){return Ba.isUndefined(t)?Ba.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!Ba.isUndefined(t))return r(void 0,t)}function a(e,t){return Ba.isUndefined(t)?Ba.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t)=>o(Ms(e),Ms(t),!0)};return Ba.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=l[r]||o,a=i(e[r],t[r],r);Ba.isUndefined(a)&&i!==s||(n[r]=a)})),n}const Ls=e=>{const t=Is({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:s,auth:l}=t;if(t.headers=s=vs.from(s),t.url=es(zs(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),Ba.isFormData(r))if(cs.hasStandardBrowserEnv||cs.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(n=s.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(cs.hasStandardBrowserEnv&&(o&&Ba.isFunction(o)&&(o=o(t)),o||!1!==o&&Ps(t.url))){const e=i&&a&&Ts.read(a);e&&s.set(i,e)}return t},Fs="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Ls(e);let o=r.data;const i=vs.from(r.headers).normalize();let a,s,l,c,u,{responseType:d,onUploadProgress:p,onDownloadProgress:f}=r;function h(){c&&c(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(a),r.signal&&r.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=vs.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());As((function(e){t(e),h()}),(function(e){n(e),h()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new Wa("Request aborted",Wa.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new Wa("Network Error",Wa.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||ns;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new Wa(t,o.clarifyTimeoutError?Wa.ETIMEDOUT:Wa.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&Ba.forEach(i.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),Ba.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),d&&"json"!==d&&(m.responseType=r.responseType),f&&([l,u]=Es(f,!0),m.addEventListener("progress",l)),p&&m.upload&&([s,c]=Es(p),m.upload.addEventListener("progress",s),m.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(a=t=>{m&&(n(!t||t.type?new Ss(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(a),r.signal&&(r.signal.aborted?a():r.signal.addEventListener("abort",a)));const x=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);x&&-1===cs.protocols.indexOf(x)?n(new Wa("Unsupported protocol "+x+":",Wa.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Ns=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,a();const t=e instanceof Error?e:this.reason;r.abort(t instanceof Wa?t:new Ss(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new Wa(`timeout ${t} of ms exceeded`,Wa.ETIMEDOUT))}),t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:s}=r;return s.unsubscribe=()=>Ba.asap(a),s}},Ds=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Bs=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},_s=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of Bs(e))yield*Ds(n,t)}(e,t);let i,a=0,s=e=>{i||(i=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return s(),void e.close();let i=r.byteLength;if(n){let e=a+=i;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw s(t),t}},cancel:e=>(s(e),o.return())},{highWaterMark:2})},Hs="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Us=Hs&&"function"===typeof ReadableStream,Ws=Hs&&("function"===typeof TextEncoder?(qs=new TextEncoder,e=>qs.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var qs;const Gs=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(aC){return!1}},Ks=Us&&Gs((()=>{let e=!1;const t=new Request(cs.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Vs=Us&&Gs((()=>Ba.isReadableStream(new Response("").body))),Js={stream:Vs&&(e=>e.body)};var Qs;Hs&&(Qs=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Js[e]&&(Js[e]=Ba.isFunction(Qs[e])?t=>t[e]():(t,n)=>{throw new Wa(`Response type '${e}' is not supported`,Wa.ERR_NOT_SUPPORT,n)})})));const Ys=async(e,t)=>{const n=Ba.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(Ba.isBlob(e))return e.size;if(Ba.isSpecCompliantForm(e)){const t=new Request(cs.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Ba.isArrayBufferView(e)||Ba.isArrayBuffer(e)?e.byteLength:(Ba.isURLSearchParams(e)&&(e+=""),Ba.isString(e)?(await Ws(e)).byteLength:void 0)})(t):n},Zs=Hs&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:p}=Ls(e);c=c?(c+"").toLowerCase():"text";let f,h=Ns([o,i&&i.toAbortSignal()],a);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(l&&Ks&&"get"!==n&&"head"!==n&&0!==(g=await Ys(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(Ba.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=Os(g,Es(Rs(l)));r=_s(n.body,65536,e,t)}}Ba.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;f=new Request(t,{...p,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:o?d:void 0});let i=await fetch(f);const a=Vs&&("stream"===c||"response"===c);if(Vs&&(s||a&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=Ba.toFiniteNumber(i.headers.get("content-length")),[n,r]=s&&Os(t,Es(Rs(s),!0))||[];i=new Response(_s(i.body,65536,n,(()=>{r&&r(),m&&m()})),e)}c=c||"text";let x=await Js[Ba.findKey(Js,c)||"text"](i,e);return!a&&m&&m(),await new Promise(((t,n)=>{As(t,n,{data:x,headers:vs.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:f})}))}catch(x){if(m&&m(),x&&"TypeError"===x.name&&/fetch/i.test(x.message))throw Object.assign(new Wa("Network Error",Wa.ERR_NETWORK,e,f),{cause:x.cause||x});throw Wa.from(x,x&&x.code,e,f)}}),Xs={http:null,xhr:Fs,fetch:Zs};Ba.forEach(Xs,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(aC){}Object.defineProperty(e,"adapterName",{value:t})}}));const $s=e=>`- ${e}`,el=e=>Ba.isFunction(e)||null===e||!1===e,tl=e=>{e=Ba.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!el(n)&&(r=Xs[(t=String(n)).toLowerCase()],void 0===r))throw new Wa(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let n=t?e.length>1?"since :\n"+e.map($s).join("\n"):" "+$s(e[0]):"as no adapter specified";throw new Wa("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function nl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ss(null,e)}function rl(e){nl(e),e.headers=vs.from(e.headers),e.data=bs.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return tl(e.adapter||ps.adapter)(e).then((function(t){return nl(e),t.data=bs.call(e,e.transformResponse,t),t.headers=vs.from(t.headers),t}),(function(t){return ws(t)||(nl(e),t&&t.response&&(t.response.data=bs.call(e,e.transformResponse,t.response),t.response.headers=vs.from(t.response.headers))),Promise.reject(t)}))}const ol="1.7.7",il={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{il[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const al={};il.transitional=function(e,t,n){function r(e,t){return"[Axios v1.7.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new Wa(r(o," has been removed"+(t?" in "+t:"")),Wa.ERR_DEPRECATED);return t&&!al[o]&&(al[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};const sl={assertOptions:function(e,t,n){if("object"!==typeof e)throw new Wa("options must be an object",Wa.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const t=e[i],n=void 0===t||a(t,i,e);if(!0!==n)throw new Wa("option "+i+" must be "+n,Wa.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Wa("Unknown option "+i,Wa.ERR_BAD_OPTION)}},validators:il},ll=sl.validators;class cl{constructor(e){this.defaults=e,this.interceptors={request:new ts,response:new ts}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(aC){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Is(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&sl.assertOptions(n,{silentJSONParsing:ll.transitional(ll.boolean),forcedJSONParsing:ll.transitional(ll.boolean),clarifyTimeoutError:ll.transitional(ll.boolean)},!1),null!=r&&(Ba.isFunction(r)?t.paramsSerializer={serialize:r}:sl.assertOptions(r,{encode:ll.function,serialize:ll.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&Ba.merge(o.common,o[t.method]);o&&Ba.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=vs.concat(i,o);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!s){const e=[rl.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=a.length;let p=t;for(d=0;d<u;){const e=a[d++],t=a[d++];try{p=e(p)}catch(f){t.call(this,f);break}}try{c=rl.call(this,p)}catch(f){return Promise.reject(f)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return es(zs((e=Is(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}Ba.forEach(["delete","get","head","options"],(function(e){cl.prototype[e]=function(t,n){return this.request(Is(n||{},{method:e,url:t,data:(n||{}).data}))}})),Ba.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Is(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}cl.prototype[e]=t(),cl.prototype[e+"Form"]=t(!0)}));const ul=cl;class dl{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Ss(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new dl((function(t){e=t})),cancel:e}}}const pl=dl;const fl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fl).forEach((e=>{let[t,n]=e;fl[n]=t}));const hl=fl;const ml=function e(t){const n=new ul(t),r=Zi(ul.prototype.request,n);return Ba.extend(r,ul.prototype,n,{allOwnKeys:!0}),Ba.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Is(t,n))},r}(ps);ml.Axios=ul,ml.CanceledError=Ss,ml.CancelToken=pl,ml.isCancel=ws,ml.VERSION=ol,ml.toFormData=Ja,ml.AxiosError=Wa,ml.Cancel=ml.CanceledError,ml.all=function(e){return Promise.all(e)},ml.spread=function(e){return function(t){return e.apply(null,t)}},ml.isAxiosError=function(e){return Ba.isObject(e)&&!0===e.isAxiosError},ml.mergeConfig=Is,ml.AxiosHeaders=vs,ml.formToJSON=e=>us(Ba.isHTMLForm(e)?new FormData(e):e),ml.getAdapter=tl,ml.HttpStatusCode=hl,ml.default=ml;const gl=ml,xl=e=>{let{setShowsuccess:t}=e,n=new Date;const r={name:"",company_name:"",task_name:"",mobile_number:"",email_id:"",add_task:"N",task_type:"Get In Touch",task_date:`${("0"+n.getDate()).slice(-2)}-${("0"+(n.getMonth()+1)).slice(-2)}-${n.getFullYear()}`},[i,a]=(0,o.useState)(r),[s,l]=(0,o.useState)("Send"),[c,u]=(0,o.useState)({});console.log(i,"look at ne");const d=(e,t)=>{a({...i,[e]:t})},p=e=>(e.preventDefault(),l("Sending..."),f("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:i})),f=async(e,n)=>{try{let o=localStorage.getItem("apiResponse"),i=JSON.parse(o);if(!o)throw new Error("Token not found, please login.");const s=gl.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${i.key}`}});200==(await s.post(e,n)).status&&(l("Send"),a(r),t(!0))}catch(o){console.log("Error making authenticated API call:",o),l("Send"),a(r)}};return(0,g.jsx)("section",{className:"contact",id:"connect",children:(0,g.jsx)(_t,{children:(0,g.jsxs)(Ci,{className:"align-items-center",children:[(0,g.jsx)(Oi,{size:12,md:6,children:(0,g.jsx)(di.A,{children:e=>{let{isVisible:t}=e;return(0,g.jsx)("img",{className:t?"animate__animated animate__zoomIn":"",src:Wi,alt:"Contact Us"})}})}),(0,g.jsx)(Oi,{size:12,md:6,children:(0,g.jsx)(di.A,{children:e=>{let{isVisible:t}=e;return(0,g.jsxs)("div",{className:t?"animate__animated animate__fadeIn":"",children:[(0,g.jsx)("h2",{children:"Get In Touch"}),(0,g.jsx)("form",{onSubmit:p,children:(0,g.jsxs)(Ci,{children:[(0,g.jsx)(Oi,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"text",value:i.name,placeholder:"First Name",onChange:e=>d("name",e.target.value)})}),(0,g.jsx)(Oi,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"text",value:i.company_name,placeholder:"Company Name",onChange:e=>d("company_name",e.target.value)})}),(0,g.jsx)(Oi,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"email",value:i.email_id,placeholder:"Email Address",onChange:e=>d("email_id",e.target.value)})}),(0,g.jsx)(Oi,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"tel",value:i.mobile_number,placeholder:"Phone No.",onChange:e=>d("mobile_number",e.target.value)})}),(0,g.jsxs)(Oi,{size:12,className:"px-1",children:[(0,g.jsx)("textarea",{rows:"6",value:i.task_name,placeholder:"Message",onChange:e=>d("task_name",e.target.value)}),(0,g.jsx)("button",{type:"submit",children:(0,g.jsx)("span",{children:s})})]}),c.message&&(0,g.jsx)(Oi,{children:(0,g.jsx)("p",{className:!1===c.success?"danger":"success",children:c.message})})]})})]})}})})]})})})};var yl=n(2963),vl=n.n(yl);const bl=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #caf0f8;
`,wl=li.h1`
  font-size: 3.2em;
  margin-bottom: 100px;
  text-align: center;
  color: #2c3e50;
`,kl=li.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
`,Sl=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 47px;
    width: 100%;
  }
`,Al=li.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  color: #454545;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  @media (min-width: 768px) {
    width: 23%;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: wheat;
  }
`,jl=li.h2`
  font-size: 2.7em;
  margin: 20px 0;
  font-weight: 800;
  color: #000933;
`,Cl=li.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`,El=li.li`
  margin: 10px 0;
  cursor: ${e=>e.clickable?"pointer":"default"};
  &::before {
    content: "${e=>e.valid?"\u2713":"\u2717"}";
    margin-right: 10px;
    color: ${e=>e.valid?"green":"red"};
  }
`,Ol=li.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 1em;
color: #ea5c49; 
text-decoration: none;
cursor: pointer;
font-weight: 500;
  &:hover {
    text-decoration: underline;
    color: #ee442d;
  }
`,Rl=li.p`
  font-weight: 500;
`,Pl=li.button`
  background-color: #ea5c49;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #ee442d;
  }
`,Tl=li.div`
  background-color: #caf0f8;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: #454545;
`,zl=li.div`
  font-size: 1.1em;
`,Ml=li.button`
  position: absolute;
  top: 10px;
  right: 4px;
  background: #d1cdcd;
  border-radius: 50%;
  width: 5%;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  &:hover{
  background: #f77867;
  }
`,Il=li.span`
  font-size: 1.5em;
  color: #454545;
  cursor: pointer;
`,Ll=li.ul`
  list-style-type: none;
  margin-top: 10px;
  padding-left: 20px;
  color: #6b37d1;
`,Fl={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px",padding:"40px",overflow:"auto",maxHeight:"80vh"},overlay:{zIndex:"32333"}},Nl=[{name:"Project Management",features:["Project Activity Allocation Tracking"," Project Activity Dependency (Critical Patch)"," Schedule Tracking","Item Cost and Effort Tracking","Efficiency tracking at Activity","Project Documents, Alert management","Integration with Procurement and PO","Integration with Inventory Allocation, Wastage and Release"]},{name:"Inventory Management",features:["Item Category and Group","Inventory Item and Service Item","Item Supplier management","Multiple locations","Multiple Units","Warehouse management (Bin Locations)","Item Serial Number handling","Item physical inspection and open balance","Item min order qty and Expiry date tracking"]},{name:"Sales and Procurement",features:["Sales order, quotation, proforma invoice","Tax Invoice","Payment, GST Tracking, TDS handling","Return, Credit note handling","Purchase Order, Purchase requests","Goods Receipt (GRN)","Goods Return/Shortage/ Debit Note","Purchase Service Order, TDS handling"]},{name:"Customer Management( CRM)",features:["Customer Details","Customer Sales/Payments Tracking (Bank/TDS)","Agreements","Customer Type/ Group"]},{name:"HR & Payroll",features:["Employee Hire to Exit","Leave & Attendance","Travel & Expenses","Salary & Payroll","Advances","Claim Settlement"]},{name:"Bank Reconciliation",features:["Bank Statement Upload","Account Reconciliation with Sales and PO","Rule based reconciliation of Expenses","Bank statement View","Reconciled statement view","Bank, Exchange rate setup"]},{name:"Financial Accounting",features:["Sales report (Period/Party/Outstanding)","Purchase Reports","Inventory (opening and closing stock)","Inventory Valuation","Financial Reports (P&L Balance sheet, Cash flow, Change in Equity","Aging/ DSO","Depreciation Schedule"]},{name:"Reports and Dashboard",features:["Manager Dashboard","Sales Dashboard","Account Receivable and Payable","Party wise outstanding","Batch reports like Sales overdue, GST not filed","Report Templates"," User Access control"]}],Dl=()=>{const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(null),i=()=>t(!0),a=()=>t(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(bl,{children:[(0,g.jsx)(kl,{children:"PRICING"}),(0,g.jsx)(wl,{children:"Pick the plan that\u2019s right for you"}),(0,g.jsxs)(Sl,{children:[(0,g.jsxs)(Al,{children:[(0,g.jsx)("h3",{style:{color:"#ffff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"red",borderRadius:"5px"},children:"Free Trial"}),(0,g.jsx)(jl,{children:"\u20b90/mo"}),(0,g.jsx)(Rl,{children:"Seriously, free forever"}),(0,g.jsxs)(Cl,{children:[(0,g.jsx)(El,{valid:!0,children:"3 User Access"}),(0,g.jsx)(El,{valid:!0,children:"30 days Vallidity"}),(0,g.jsx)(El,{valid:!0,children:"20MB Space"}),(0,g.jsx)(El,{children:"Multi Branch Access"}),(0,g.jsx)(Ol,{onClick:i,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Pl,{children:"Sign up for free"})]}),(0,g.jsxs)(Al,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#2196f3",borderRadius:"5px"},children:"Basic"}),(0,g.jsx)(jl,{children:"\u20b95,000/mo"}),(0,g.jsx)(Rl,{children:"Billed at \u20b950,000 per year"}),(0,g.jsxs)(Cl,{children:[(0,g.jsx)(El,{valid:!0,children:"5 User Access"}),(0,g.jsx)(El,{valid:!0,children:"1 Year Validity"}),(0,g.jsx)(El,{valid:!0,children:"200MB Space"}),(0,g.jsx)(El,{children:"Multi Branch Access"}),(0,g.jsx)(Ol,{onClick:i,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Pl,{children:"Start a free trial"})]}),(0,g.jsxs)(Al,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"orange",borderRadius:"5px"},children:"Premium"}),(0,g.jsx)(jl,{children:"\u20b910,000/mo"}),(0,g.jsx)(Rl,{children:"Billed at \u20b9100,000 per year"}),(0,g.jsxs)(Cl,{children:[(0,g.jsx)(El,{valid:!0,children:"10 User Access"}),(0,g.jsx)(El,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(El,{valid:!0,children:"500MB Space"}),(0,g.jsx)(El,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)(Ol,{lickable:!0,onClick:i,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Pl,{children:"Start a free trial"})]}),(0,g.jsxs)(Al,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#800080",borderRadius:"5px"},children:"Ultimate"}),(0,g.jsx)(jl,{children:"\u20b925,000/mo"}),(0,g.jsx)(Rl,{children:"Billed at \u20b9200,000 per year"}),(0,g.jsxs)(Cl,{children:[(0,g.jsx)(El,{valid:!0,children:"25 User Access"}),(0,g.jsx)(El,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(El,{valid:!0,children:"1.2GB Space"}),(0,g.jsx)(El,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)(Ol,{lickable:!0,onClick:i,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Pl,{children:"Start a free trial"})]})]})]}),(0,g.jsxs)(vl(),{isOpen:e,onRequestClose:a,style:Fl,children:[(0,g.jsx)(Ml,{onClick:a,children:"\xd7"}),(0,g.jsx)(Cl,{children:Nl.map(((e,t)=>(0,g.jsxs)("div",{children:[(0,g.jsxs)(Tl,{onClick:()=>{return t=e.name,void r(n===t?null:t);var t},children:[(0,g.jsx)(zl,{children:e.name}),(0,g.jsx)(Il,{children:n===e.name?"\u2212":"+"})]}),n===e.name&&(0,g.jsx)(Ll,{children:e.features.map(((e,t)=>(0,g.jsx)("ul",{style:{marginBottom:"5px"},children:(0,g.jsx)("li",{children:e},t)})))})]},t)))})]})]})},Bl=(li.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #f9f5f0;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,li.div`
  max-width: 500px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,li.h2`
  font-size: 32px;
  color: #ec7042;
  font-weight: 700;
`,li.h3`
  font-size: 28px;
  color: #333;
  font-weight: 600;
`,li.p`
  font-size: 16px;
  color: #555;
  margin: 20px 0;
`,li.button`
  padding: 15px 25px;
  background-color: #046300;
  color: #fff;
  border: none;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #034a00;
  }
`,li.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 600px;
`,li.div`
  width: 300px;
  height: 300px;
  background-color: #ec7042;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`,li.img`
  position: absolute;
  width: 100px;
  height: auto;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${e=>{let{top:t,right:n,bottom:r,left:o}=e;return`\n    top: ${t||"auto"};\n    right: ${n||"auto"};\n    bottom: ${r||"auto"};\n    left: ${o||"auto"};\n  `}}
`,li.p`

    font-family: 'Centra';
    font-style: normal;
    font-weight:${e=>e.fontWeight};
    font-size: ${e=>e.fontSize};
    color: ${e=>e.color?e.color:"black"};
    cursor: ${e=>e.cursor?e.cursor:"auto"};
    padding: ${e=>e.padding};
    margin-top: ${e=>e.marginTop?e.marginTop:"0"};
    margin-bottom: 0;
    margin-right: 0;
    margin-left: ${e=>e.marginLeft};
    width: ${e=>e.width};
    margin: ${e=>e.margin};
    text-align: ${e=>e.textAlign};
    letter-spacing: ${e=>e.letterSpacing};
    text-transform: ${e=>e.textTransform};
    text-decoration: ${e=>e.textDecoration};
    line-height: ${e=>e.lineHeight};

    :hover{
        color: ${e=>e.hoverColor?e.hoverColor:e.color};
    }
    @media  screen and (max-width: 1280px){
        font-size: ${e=>e.LgFontSize};
    }
    @media screen and (max-width: 767px) {
        font-size: ${e=>e.mobFontSize};
        line-height: ${e=>e.mobLineHeight};
        margin-top: ${e=>e.mobMarginTop};
        letter-spacing: ${e=>e.mobLetterSpacing};
        width: ${e=>e.mobwidth};
        text-align: ${e=>e.MobtextAlign};
        margin-bottom: ${e=>e.mobMarginBottom};
        position: ${e=>e.mobPosition};
        right: ${e=>e.mobRight};
    }
    
`),_l=e=>(0,g.jsx)(Bl,{dangerouslySetInnerHTML:e.dangerouslySetInnerHTML,onClick:e.onClick,textTransform:e.textTransform,margin:e.margin,lineHeight:e.lineHeight,mobPosition:e.mobPosition,LgFontSize:e.LgFontSize,mobMarginBottom:e.mobMarginBottom,mobRight:e.mobRight,fontWeight:e.fontWeight,mobwidth:e.mobwidth,mobLetterSpacing:e.mobLetterSpacing,mobMarginTop:e.mobMarginTop,moblineHeight:e.moblineHeight,letterSpacing:e.letterSpacing,cursor:e.cursor,textAlign:e.textAlign,marginLeft:e.marginLeft,MobtextAlign:e.MobtextAlign,fontSize:e.fontSize,mobFontSize:e.mobFontSize,mobLineHeight:e.mobLineHeight,width:e.width,color:e.color,hoverColor:e.hoverColor,padding:e.padding,textDecoration:e.textDecoration,marginTop:e.marginTop,children:e.text});n.p,li.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  height: 185px;

  @media screen and (max-width: 767px){
    height: 77%;
  }
`,li.div`
  background: #f0dbff;
  padding: 20px 55px;
  padding-bottom: 45px;
  height: 332px;

  @media screen and (max-width: 767px){
    height: 390px;
    padding-bottom: 35px;
  }
`,li.img`
  width: 18px;
`,li.p`
  margin: 0;
  color: #7f8c8d;
  font-family: Lato;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  width: 568px;
  margin-top: 10px;

  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 18px;
    line-height: 30px;
  }
`,li.div`
  background-color: #ffc8ae;
  padding: 25px 55px;

  @media screen and (max-width: 767px){
    height: 125px;
  }  
`,li.div`
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-position: center;
  background-size: contain;
  background-image: url(${e=>e.CLogo});
`,li.p`
  margin: 0;
  color: #fff;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`,li.p`
  margin: 0;
  color: #fff;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`,li.div`
  display: flex;
  align-items: center;
  gap: 25px;
`,li.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`,li.div`
  background-color: #fff3e1;
  border: 1px solid #d8d8d8;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
`;li.div`
  padding-bottom: 75px;
  background-color: aliceblue;
  /* margin-bottom: 70px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin-bottom: 60px; */
  @media screen and (max-width: 767px) {
    /* margin-top: 120px; */
    height: 100%;
  }
`,li.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  width: 100%;
  /* margin-top: 40px; */
  row-gap: 40px;
  background-color: #95f5d9;
  row-gap: 0;

  @media screen and (max-width: 767px) {
    width: auto;
    row-gap: 40px;
    justify-content: space-around;
    padding: 20px 0;
  }
`,li.img`
  /* filter: grayscale(1); */
  height: 65px;
  opacity: 0.7;
`,li.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 60px;
  height: 502px;

  @media (min-width: 1524px) {
    max-width: 1336px;
    margin: 0 auto;
    margin-top: 60px;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 0.5fr;
    height: 100%;
  }
`;const Hl=n.p+"static/media/FevIimg.ec5aa0150e808b2eaa91.png";const Ul=n.p+"static/media/localPageHero.4092dfc607fc3eed3eec085f09348f6e.svg";const Wl=n.p+"static/media/HrApp.f8b908a11c10534323325eaa7e6f02ff.svg";const ql=n.p+"static/media/EcommApp.d08f64640f1afc6971e657ce5be557c7.svg",Gl=n.p+"static/media/crm.444d6bc6234675a47df4.png",Kl=n.p+"static/media/search-job.de6dd9ba062c0e230527.png",Vl=n.p+"static/media/online-shop.539a9bcf79880317f810.png",Jl=li.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background: ${e=>{let{background:t}=e;return t||"linear-gradient(180deg, #fceabb, rgb(255 246 247))"}};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`,Ql=li.div`
  max-width: 50%;
  margin-top: 100px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 150px;
  }
`,Yl=li.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Zl=li.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Xl=li.button`
  background-color: #333;
  color: white;
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 40px;

  &:hover {
    background-color: #555;
  }
`,$l=li.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ec=li.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 30%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${e=>{let{background:t}=e;return t||"linear-gradient(180deg, #fceabb, rgb(255 246 247))"}};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`,tc=li.img`
  width: 70px;
  margin-bottom: 10px;
`,nc=li.p`
  font-size: 1rem;
  color: #333;
`,rc=li.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`,oc=li.img`
  width: 600px;
  height: auto;
  border-radius: 10%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`,ic=()=>{const[e,t]=(0,o.useState)("linear-gradient(180deg, #fceabb, rgb(255 246 247))"),[n,r]=(0,o.useState)(Hl),i=(e,n)=>{t(e),r(n)},a=()=>{t("linear-gradient(180deg, #fceabb, rgb(255 246 247))"),r(Hl)};return(0,g.jsxs)(Jl,{background:e,children:[(0,g.jsxs)(Ql,{children:[(0,g.jsx)(Yl,{children:"To Automate the Most Complex Operations"}),(0,g.jsx)(Zl,{children:"Experience the efficiency and clarity that comes with a fully integrated business management solution. With Atomwalk Office, transform your data into actionable insights and drive your business forward with confidence."}),(0,g.jsx)(Xl,{onClick:()=>{window.location.href="https://www.atomwalk.com/login/"},children:"Get started"}),(0,g.jsxs)($l,{children:[(0,g.jsxs)(ec,{background:e,onMouseEnter:()=>i("linear-gradient(180deg, #4382f8, rgb(255 246 247))",Ul),onMouseLeave:a,onClick:()=>{window.location.href="/crm.html"},children:[(0,g.jsx)(tc,{src:Gl,alt:"CRM"}),(0,g.jsx)(nc,{children:"Comprehensive CRM platform for customer-facing teams."})]}),(0,g.jsxs)(ec,{background:e,onMouseEnter:()=>i("linear-gradient(180deg, #a970ff, rgb(255 246 247))",Wl),onMouseLeave:a,onClick:()=>{window.location.href="/hrm.html"},children:[(0,g.jsx)(tc,{src:Kl,alt:"HR"}),(0,g.jsx)(nc,{children:"HR management software streamlining payroll, attendance, leave, claims."})]}),(0,g.jsxs)(ec,{background:e,onMouseEnter:()=>i("linear-gradient(180deg, #90ee90, rgb(255 246 247))",ql),onMouseLeave:a,children:[(0,g.jsx)(tc,{src:Vl,alt:"E-Commerce"}),(0,g.jsx)(nc,{children:"Your one-stop shop for easy, fast, and secure online shopping."})]})]})]}),(0,g.jsx)(rc,{children:(0,g.jsx)(oc,{src:n,alt:"Profile"})})]})},ac=n.p+"static/media/Cloud.773250297b7d95b40fbc.webp",sc=n.p+"static/media/Subcloud.d66e6c8b1d355e09b54f.webp",lc=li.div`
  background-color: rgb(234 244 255);
  padding: 20px;

  @media (min-width: 768px) {
    padding: 50px;
  }
`,cc=li.div`
  text-align: center;
  margin-bottom: 40px;
`,uc=li.h1`
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,dc=li.p`
  font-size: 18px;
  color: #7f8c8d;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`,pc=li.a`
  color: #3498db;
  font-size: 16px;
  display: block;
  margin-top: 20px;
  &:hover{
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    text-decoration:none
  }
`,fc=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0;   /* No padding on mobile screens */
  gap: 0;       /* No gap on mobile screens */

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    padding: 50px 180px 180px 180px;  /* Add padding on larger screens */
    gap: 160px;      /* Add gap on larger screens */
  }
`,hc=li.div`
  flex: 1;
  max-width: 500px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 50px;
  }
`,mc=li.img`
  width: 100%;
  border-radius: 10px;
`,gc=li.div`
  flex: 1;
`,xc=li.h2`
  font-size: 24px;
  color: #34495e;
  /* font-family: 'Courier New', Courier, monospace; */
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`,yc=li.p`
  font-size: 16px;
  color: #7f8c8d;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,vc=li.img`
  display: none; /* Hide the image on mobile screens */

  @media (min-width: 768px) {
    display: block; /* Show the image on larger screens */
    width: 15%;
    float: right;
    margin-top: -177px;
  }
`,bc=()=>(0,g.jsxs)(lc,{children:[(0,g.jsxs)(cc,{children:[(0,g.jsx)(uc,{children:"Unlock the Future"}),(0,g.jsx)(dc,{children:"Revolutionize your business operations with Atomwalk Office's cutting-edge ERP solution"}),(0,g.jsx)(pc,{href:"https://www.atomwalk.com/login/",children:"Transform Your Business Today"})]}),(0,g.jsxs)(fc,{children:[(0,g.jsx)(hc,{children:(0,g.jsx)(mc,{src:ac,alt:"Business Operations"})}),(0,g.jsxs)(gc,{children:[(0,g.jsx)(xc,{children:"Elevate Your Business to New Heights with Atomwalk Office's Comprehensive ERP"}),(0,g.jsx)(yc,{children:"Discover how Atomwalk Office's cloud-based ERP can streamline your core business functions, boost productivity, and drive sustainable growth for your small or medium enterprise."})]})]}),(0,g.jsx)(vc,{src:sc})]});li.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ade8f4;
  padding: 20px;
  height: 530px;
  color: #2c3e50;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 40px;
  }
`,li.div`
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: left;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,li.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 15px;
`,li.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`,li.p`
  font-size: 1em;
  margin: 0;
`,li.div`
  margin-top: 10px;
  font-weight: bold;
`,li.div`
  font-size: 0.9em;
  color: #666;
`,li.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    width: 559.66px;
    position: relative;
    left: -84px;
    top: 8px;
    transition: none;
  }
`,li.h2`
  font-size: 1.8em;
  margin-bottom: 10px;
`,li.p`
  font-size: 1em;
  margin-bottom: 20px;
`,li.a`
  background-color: #ea5c49;
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 10px;
  display: inline-block;

  &:hover {
    background-color: #ee442d;
  }

  &.secondary {
    background-color: transparent;
    border: 1px solid #280043;
    color: #454545;
    &:hover{
      background-color: #90e0ef;
      /* color: #fff; */
    }
  }
`;var wc=n(2382);const kc=n.p+"static/media/lipika.75242ac9bb129dc39010.jpg",Sc=[{id:1,name:"Dr Santosh Poddar, IISER, Pune",text:"Atomwalk\u2019s ERP software has revolutionized our financial management. The seamless integration and user-friendly interface have significantly improved our operational efficiency.",img:"https://picsum.photos/101/101"},{id:2,name:"Deepak Emanuel, Chief Operating Officer, FluxGen Sustainable Technologies Pvt Ltd",text:"The inventory management features of Atomwalk have been a game-changer for us. We can now track our stock levels in real-time, reducing waste and optimizing our supply chain.",img:"https://picsum.photos/102/102"},{id:3,name:"Mr. Santosh Olety, CEO at Microsys Care: ",text:"He highlights the efficiency and effectiveness of Atomwalk\u2019s software in streamlining their operations.",img:"https://picsum.photos/103/103"}],Ac=li.div`
background-color: aliceblue;
  @media (min-width: 768px) {
    padding:0 0 100px;
  }
`,jc=li.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: aliceblue;
  @media (min-width: 768px) {
    max-width: 1300px;
  }
`,Cc=li.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #caf0f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 350px;
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    height: 200px;
  }
`,Ec=li.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`,Oc=li.div`
  flex: 1;
`,Rc=li.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`,Pc=li.p`
  margin: 10px 0 0;
  color: #777;
`,Tc=li(wc.A)`

  .slick-slide {
    padding: 10px;
  }
  .slick-arrow {
    &:before{
        color: #2c3e50;
    }
 
  }
`,zc={dots:!0,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]},Mc=li.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 40px;
`,Ic=(li.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
`,li.p`
font-weight: 900;
    font-size: 45px;
    color: #2c3e50;
`),Lc=li.p`
color: #7f8c8d;
font-size: 18px;
`,Fc=()=>(0,g.jsx)(Ac,{children:(0,g.jsxs)(jc,{children:[(0,g.jsxs)(Mc,{children:[(0,g.jsx)(Ic,{children:"Testimonial"}),(0,g.jsx)(Lc,{children:"What our customers say about Atomwalk"})]}),(0,g.jsx)(Tc,{...zc,children:Sc.map((e=>(0,g.jsx)("div",{children:(0,g.jsxs)(Cc,{children:[(0,g.jsx)(Ec,{src:e.img,alt:e.name}),(0,g.jsxs)(Oc,{children:[(0,g.jsx)(Rc,{children:e.name}),(0,g.jsx)(Pc,{children:e.text})]})]})},e.id)))})]})}),Nc=n.p+"static/media/image.f55fe67f8ba4fa6c4602.png",Dc={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px"},overlay:{backgroundColor:"rgba(0, 0, 0, .8)",zIndex:"32333"}},Bc=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 40px;
  }
`,_c=li.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
    padding-right: 20px;
  }
`,Hc=li.div`
  display: none;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    width: 40%;
  }
`,Uc=li.h2`
  font-size: 2.1em;
  color:#ea5c49;
  margin-bottom: 10px;
  font-weight: 800;
  line-height: 1.25;
`,Wc=li.p`
  color: #555;
  margin-bottom: 20px;
`,qc=li.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 4px;
`,Gc=li.button`
  width: 100%;
  padding: 10px;
  background-color: #ea5c49;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;

  &:hover {
    background-color: #f77867;
  }
`,Kc=li.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #d1cdcd;
  border-radius: 50%;
  width: 5%;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  &:hover{
  background: #f77867;
  }
`,Vc=e=>{let{isOpen:t,onRequestClose:n,setShowsuccess:r}=e,i=new Date;const a={name:"",company_name:"",task_name:"Book My Demo",mobile_number:"",email_id:"",add_task:"N",task_type:"Book My Demo",task_date:`${("0"+i.getDate()).slice(-2)}-${("0"+(i.getMonth()+1)).slice(-2)}-${i.getFullYear()}`,remarks:"Book My Demo"},[s,l]=(0,o.useState)(a),c=(e,t)=>{l({...s,[e]:t})},u=async(e,t)=>{try{let o=localStorage.getItem("apiResponse"),i=JSON.parse(o);if(!o)throw new Error("Token not found, please login.");const s=gl.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${i.key}`}});200==(await s.post(e,t)).status&&(r(!0),localStorage.setItem("datacheck",!0),l(a),n())}catch(o){console.log("Error making authenticated API call:",o),l(a)}};return(0,g.jsx)(vl(),{isOpen:t,onRequestClose:n,style:Dc,ariaHideApp:!1,children:(0,g.jsxs)(Bc,{children:[(0,g.jsxs)(_c,{children:[(0,g.jsx)(Kc,{onClick:n,children:"\xd7"}),(0,g.jsx)(Uc,{children:"Ready to see our product in action?"}),(0,g.jsx)(Wc,{children:"See a demo of our product that's tailored just for you."}),(0,g.jsx)(qc,{onChange:e=>c("name",e.target.value),type:"text",placeholder:"Your Name"}),(0,g.jsx)(qc,{onChange:e=>c("email_id",e.target.value),type:"email",placeholder:"Email"}),(0,g.jsx)(qc,{onChange:e=>c("mobile_number",e.target.value),type:"tel",placeholder:"Phone Number"}),(0,g.jsx)(qc,{onChange:e=>c("company_name",e.target.value),type:"text",placeholder:"Company Name"}),(0,g.jsx)(Gc,{onClick:e=>(e.preventDefault(),u("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:s})),children:"Book My Demo"})]}),(0,g.jsx)(Hc,{children:(0,g.jsx)("img",{src:Nc,alt:"Rocket",style:{width:"100%"}})})]})})},Jc=li.div`
  background-color: #D4FFDE;
    width: 100%;
    height: 56px;
    position: fixed;
    border-radius: 10px;
    top: 2px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin: 0 30px; */
    z-index: 104434;
    box-shadow: 0px 30px 60px rgba(69, 69, 69, 0.25);
    left: 0;

    @media screen and (max-width: 767px){
      width: fit-content;
      height: 85px;
      padding: 0 10px;
      text-align: center;
    }
`,Qc=li.div``;function Yc(e){return(0,g.jsx)("div",{children:(0,g.jsx)(Jc,{children:(0,g.jsx)(Qc,{children:(0,g.jsx)(_l,{text:e.message,color:"#1F936E",fontSize:"18px",fontWeight:"bold",cursor:"auto",fontSizeMedia:"13px"})})})})}const Zc=()=>{const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),i=localStorage.getItem("datacheck");(0,o.useEffect)((()=>{i||setTimeout((()=>{t(!0)}),2e5)}),[]);return(0,o.useEffect)((()=>{n&&setTimeout((()=>{r(!1)}),3e3)}),[n]),(0,g.jsxs)("div",{children:[n&&(0,g.jsx)(Yc,{message:"We have successfully recorded your information."}),(0,g.jsx)(ic,{}),(0,g.jsx)(Ai,{}),(0,g.jsx)(bc,{}),(0,g.jsx)(Ui,{}),(0,g.jsx)(Fc,{}),(0,g.jsx)(Dl,{}),(0,g.jsx)(xl,{setShowsuccess:r}),(0,g.jsx)(Vc,{isOpen:e,onRequestClose:()=>{t(!1)},setShowsuccess:r})]})};function Xc(){return Xc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xc.apply(this,arguments)}var $c;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}($c||($c={}));const eu="popstate";function tu(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function nu(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(aC){}}}function ru(e,t){return{usr:e.state,key:e.key,idx:t}}function ou(e,t,n,r){return void 0===n&&(n=null),Xc({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?au(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function iu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function au(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function su(e,t,n,r){void 0===r&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=$c.Pop,l=null,c=u();function u(){return(a.state||{idx:null}).idx}function d(){s=$c.Pop;let e=u(),t=null==e?null:e-c;c=e,l&&l({action:s,location:f.location,delta:t})}function p(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:iu(e);return n=n.replace(/ $/,"%20"),tu(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==c&&(c=0,a.replaceState(Xc({},a.state,{idx:c}),""));let f={get action(){return s},get location(){return e(o,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(eu,d),l=e,()=>{o.removeEventListener(eu,d),l=null}},createHref:e=>t(o,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=$c.Push;let r=ou(f.location,e,t);n&&n(r,e),c=u()+1;let d=ru(r,c),p=f.createHref(r);try{a.pushState(d,"",p)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;o.location.assign(p)}i&&l&&l({action:s,location:f.location,delta:1})},replace:function(e,t){s=$c.Replace;let r=ou(f.location,e,t);n&&n(r,e),c=u();let o=ru(r,c),d=f.createHref(r);a.replaceState(o,"",d),i&&l&&l({action:s,location:f.location,delta:0})},go:e=>a.go(e)};return f}var lu;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(lu||(lu={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function cu(e,t,n){return void 0===n&&(n="/"),uu(e,t,n,!1)}function uu(e,t,n,r){let o=Au(("string"===typeof t?au(t):t).pathname||"/",n);if(null==o)return null;let i=du(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let s=0;null==a&&s<i.length;++s){let e=Su(o);a=wu(i[s],e,r)}return a}function du(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(tu(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let s=ju([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(tu(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),du(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:bu(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of pu(e.path))o(e,t,r);else o(e,t)})),t}function pu(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=pu(r.join("/")),s=[];return s.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const fu=/^:[\w-]+$/,hu=3,mu=2,gu=1,xu=10,yu=-2,vu=e=>"*"===e;function bu(e,t){let n=e.split("/"),r=n.length;return n.some(vu)&&(r+=yu),t&&(r+=mu),n.filter((e=>!vu(e))).reduce(((e,t)=>e+(fu.test(t)?hu:""===t?gu:xu)),r)}function wu(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=ku({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=ku({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:ju([i,u.pathname]),pathnameBase:Cu(ju([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=ju([i,u.pathnameBase]))}return a}function ku(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);nu("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let i=new RegExp(o,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1),l=r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=s[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=o&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:l,pathname:i,pathnameBase:a,pattern:e}}function Su(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return nu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Au(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}const ju=e=>e.join("/").replace(/\/\/+/g,"/"),Cu=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");Error;function Eu(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const Ou=["post","put","patch","delete"],Ru=(new Set(Ou),["get",...Ou]);new Set(Ru),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function Pu(){return Pu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pu.apply(this,arguments)}const Tu=o.createContext(null);const zu=o.createContext(null);const Mu=o.createContext(null);const Iu=o.createContext(null);const Lu=o.createContext({outlet:null,matches:[],isDataRoute:!1});const Fu=o.createContext(null);function Nu(){return null!=o.useContext(Iu)}function Du(){return Nu()||tu(!1),o.useContext(Iu).location}function Bu(e,t,n,r){Nu()||tu(!1);let{navigator:i}=o.useContext(Mu),{matches:a}=o.useContext(Lu),s=a[a.length-1],l=s?s.params:{},c=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let u,d=Du();if(t){var p;let e="string"===typeof t?au(t):t;"/"===c||(null==(p=e.pathname)?void 0:p.startsWith(c))||tu(!1),u=e}else u=d;let f=u.pathname||"/",h=f;if("/"!==c){let e=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=cu(e,{pathname:h});let g=qu(m&&m.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:ju([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:ju([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),a,n,r);return t&&g?o.createElement(Iu.Provider,{value:{location:Pu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:$c.Pop}},g):g}function _u(){let e=function(){var e;let t=o.useContext(Fu),n=Ku(Gu.UseRouteError),r=Vu(Gu.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=Eu(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r};return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),n?o.createElement("pre",{style:i},n):null,null)}const Hu=o.createElement(_u,null);class Uu extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?o.createElement(Lu.Provider,{value:this.props.routeContext},o.createElement(Fu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wu(e){let{routeContext:t,match:n,children:r}=e,i=o.useContext(Tu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),o.createElement(Lu.Provider,{value:t},r)}function qu(e,t,n,r){var i;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){var a;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(a=r)&&a.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let s=e,l=null==(i=n)?void 0:i.errors;if(null!=l){let e=s.findIndex((e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id])));e>=0||tu(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let o=0;o<s.length;o++){let e=s[o];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=o),e.route.id){let{loaderData:t,errors:r}=n,o=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||o){c=!0,s=u>=0?s.slice(0,u+1):[s[0]];break}}}return s.reduceRight(((e,r,i)=>{let a,d=!1,p=null,f=null;var h;n&&(a=l&&r.route.id?l[r.route.id]:void 0,p=r.route.errorElement||Hu,c&&(u<0&&0===i?(h="route-fallback",!1||Ju[h]||(Ju[h]=!0),d=!0,f=null):u===i&&(d=!0,f=r.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,i+1)),g=()=>{let t;return t=a?p:d?f:r.route.Component?o.createElement(r.route.Component,null):r.route.element?r.route.element:e,o.createElement(Wu,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?o.createElement(Uu,{location:n.location,revalidation:n.revalidation,component:p,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var Gu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gu||{});function Ku(e){let t=o.useContext(zu);return t||tu(!1),t}function Vu(e){let t=function(){let e=o.useContext(Lu);return e||tu(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||tu(!1),n.route.id}const Ju={};i.startTransition;function Qu(e){tu(!1)}function Yu(e){let{basename:t="/",children:n=null,location:r,navigationType:i=$c.Pop,navigator:a,static:s=!1,future:l}=e;Nu()&&tu(!1);let c=t.replace(/^\/*/,"/"),u=o.useMemo((()=>({basename:c,navigator:a,static:s,future:Pu({v7_relativeSplatPath:!1},l)})),[c,l,a,s]);"string"===typeof r&&(r=au(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:m="default"}=r,g=o.useMemo((()=>{let e=Au(d,c);return null==e?null:{location:{pathname:e,search:p,hash:f,state:h,key:m},navigationType:i}}),[c,d,p,f,h,m,i]);return null==g?null:o.createElement(Mu.Provider,{value:u},o.createElement(Iu.Provider,{children:n,value:g}))}function Zu(e){let{children:t,location:n}=e;return Bu(Xu(t),n)}new Promise((()=>{}));o.Component;function Xu(e,t){void 0===t&&(t=[]);let n=[];return o.Children.forEach(e,((e,r)=>{if(!o.isValidElement(e))return;let i=[...t,r];if(e.type===o.Fragment)return void n.push.apply(n,Xu(e.props.children,i));e.type!==Qu&&tu(!1),e.props.index&&e.props.children&&tu(!1);let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Xu(e.props.children,i)),n.push(a)})),n}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(aC){}new Map;const $u=i.startTransition;F.flushSync,i.useId;function ed(e){let{basename:t,children:n,future:r,window:i}=e,a=o.useRef();null==a.current&&(a.current=function(e){return void 0===e&&(e={}),su((function(e,t){let{pathname:n,search:r,hash:o}=e.location;return ou("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:iu(t)}),null,e)}({window:i,v5Compat:!0}));let s=a.current,[l,c]=o.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=o.useCallback((e=>{u&&$u?$u((()=>c(e))):c(e)}),[c,u]);return o.useLayoutEffect((()=>s.listen(d)),[s,d]),o.createElement(Yu,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var td,nd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(td||(td={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(nd||(nd={}));const rd=n.p+"static/media/cover-Proses-Manajemen-Inventory-dan-Metode-Penerapannya-01-1-1024x656.71fe8c9581957cf0a241.png",od=n.p+"static/media/header-4-1-2048x1107.672ff3f0045c273d262f.png",id=n.p+"static/media/projecticon.2ce87c438cbe4e6220e1.png",ad=n.p+"static/media/new-b-bg.7dd6f955d98bb72b8f0b.png",sd=li.div`
    font-size: 22px;
    font-family: 'Centra';
    font-weight: 600;
    line-height: 42px;
    color: #15436D;
    text-align: center;

    @media screen and (max-width: 767px) {
        line-height: 28px;
        font-size: 18px;
    }

`,ld=li.div`
    text-align: center;
    font-size: 16px;
    font-family: 'Centra';
    line-height: 28px;
    color: #454545;
    width: 535px;
    margin: 0 auto;
    text-align: center;
    margin-top: 10px;

    @media screen and (max-width: 767px) {
        width: auto;
        line-height: 25px;
        font-size: 14px;
    }
`,cd=li.img`
    width: 490px;
    margin: 0 auto;
    display: flex;

    @media screen and (max-width: 767px) {
        width: 300px;
    }

`;function ud(e){return(0,g.jsx)("div",{children:(0,g.jsxs)("div",{className:"ip-temp-wrap",children:[(0,g.jsx)("div",{children:(0,g.jsx)(cd,{src:e.Temp})}),(0,g.jsx)("div",{children:(0,g.jsx)(sd,{children:e.title})}),(0,g.jsx)("div",{children:(0,g.jsx)(ld,{children:e.desc})})]})})}const dd=li.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    background-image: url(${ad});

`,pd=li.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 8px;
    margin-top: 8px;
    position: absolute;
    left: 47%;
    bottom: 15%;

    @media screen and (max-width: 767px) {
        left: 45%;
        bottom: 10%;
    }

`,fd=li.div`
    width: 11px;
    height: 11px;
    border-radius: 50px;
    background-color: #cbcbcb;
    cursor: pointer;
    border: 1px solid #ccc;
`,hd=e=>{switch(e){case 0:return rd;case 1:return od;case 2:return id}},md=e=>{let t={};switch(e){case 0:t={heading:"Inventory Management",description:"Take control of your inventory with Atomwalk Office"};break;case 1:t={heading:"Customer Management",description:"Deliver exceptional customer service and boost sales with Atomwalk Office"};break;case 2:t={heading:"Project Management",description:"Make informed decisions based on real-time information and analytics provided by Atomwalk Office"}}return t},gd=()=>{const[e,t]=(0,o.useState)(0),n=e=>{t(e)};return(0,o.useEffect)((()=>{const t=setInterval((()=>{let t=e+1;t>2&&(t=0),n(t)}),4e3);return()=>clearInterval(t)})),(0,g.jsxs)(dd,{children:[0==e&&(0,g.jsx)(ud,{Temp:hd(0),title:md(0).heading,desc:md(0).description}),1==e&&(0,g.jsx)(ud,{Temp:hd(1),title:md(1).heading,desc:md(1).description}),2==e&&(0,g.jsx)(ud,{Temp:hd(2),title:md(2).heading,desc:md(2).description}),(0,g.jsxs)(pd,{children:[(0,g.jsx)(fd,{onClick:()=>{n(0)},style:0==e?{backgroundColor:"#FF7624"}:{}}),(0,g.jsx)(fd,{onClick:()=>{n(1)},style:1==e?{backgroundColor:"#FF7624"}:{}}),(0,g.jsx)(fd,{onClick:()=>{n(2)},style:2==e?{backgroundColor:"#FF7624"}:{}})]})]})},xd=li.button`
  border: none;
  ${e=>{let{variant:t}=e;return(e=>{switch(e){case"solidOrange":return"border:1px solid #FF7624; color: #fff; background: #FF7624";case"outlineOrange":return"border:1px solid #FF7624; color: #FF7624; background: #FFF";case"outlineGrey":return"border: 1px solid #454545 ; color: #454545; background: transparent ";case"solidGrey":return"border: 1px solid #454545 ; color: #D6CBFF; background: #454545";case"solidWhite":return"border: 1px solid #454545 ; color: #454545; background: #fff";default:return"color: #000; background: #eee;"}})(t)}};
  opacity: ${e=>e.disabled?.5:1};
  background: ${e=>e.disabled?"#8A8A8A":""};
  color: ${e=>e.disabled?"white":""};
  width: ${e=>e.width?e.width:"174px"};
  gap: ${e=>e.gap};
  height: ${e=>e.height}; 
  cursor: pointer;
  border-radius: 4px;
  font-family: "Centra";
  font-style: normal;
  font-weight: ${e=>e.fontWeight?e.fontWeight:"400"};
  font-size: ${e=>e.fontSize?e.fontSize:"16px"};
  line-height: 20px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    ${e=>{let{variant:t}=e;return(e=>{switch(e){case"solidOrange":return"border:1px solid #cd5900; color: #fff; background: #cd5900";case"outlineOrange":return"border:1px solid #cd5900; color: #cd5900; background: #fff";case"outlineGrey":return"border: 1px solid #454545 ; color: #454545; background: #F3E4D2";case"solidGrey":return"border: 1px solid #454545 ; color: #D6CBFF; background: #454545";case"solidWhite":return"border: 1px solid #454545 ; color: #454545; background: #f3e4d2";default:return"color: #000; background: #eee;"}})(t)}};
  }
  @media  screen and (max-width: 1280px){
    height: ${e=>e.Lgheight};
  }
  @media screen and (max-width: 767px){
    font-size: ${e=>e.mbfontSize};
    padding: ${e=>e.mbpadding};
    width: ${e=>e.mbwidth};
  }
`;function yd(e){const t=e.disable;return(0,g.jsx)("div",{children:(0,g.jsx)(xd,{onClick:e.onClick,variant:e.variant,width:e.width,fontWeight:e.fontWeight,fontSize:e.fontSize,height:e.height,Lgheight:e.Lgheight,mbfontSize:e.mbfontSize,mbpadding:e.mbpadding,mbwidth:e.mbwidth,disabled:t,children:e.text})})}const vd=li.div`
  margin: -30px auto;
  width: 520px;
  text-align: center;
  position: absolute;
  top: 25%;
  transform: translate(0, -30%);
  margin-left: 230px;

  @media screen and (max-width: 767px) {
    top: auto;
    transform: none;
    margin-left: 20px;
    margin-top: 20px;
    width: auto;
    position: initial;
  }
`,bd=li.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`,wd=li.div`
  font-family: "Centra";
  font-weight: 400;
  font-size: 48px;
  line-height: 42px;
  letter-spacing: -1.25px;
  color: #000000;
  margin-bottom: 15px;
  margin-top:45px;

  @media screen and (max-width: 1280px){
    margin-top: 45px;
  }

`,kd=li.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 16px;
  color: #454545;
  margin-bottom: 6px;
`,Sd=li.div`
  margin-top: 0px;
`,Ad=li.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 24px;
  color: #352960;
  margin-top: 7px;
  text-align: left;

  @media screen and (max-width: 1280px){
    margin-top: 4px;
  }
`,jd=li.input`
  font-family: "Centra";
  font-size: 15px;
  line-height: 24px;
  border: 1px solid rgba(149, 149, 149, 0.5);
  border-radius: 12px;
  padding: 13px 20px;
  margin-top: 10px;
  margin-bottom: 8px;
  width: 475px;
  color: #454545;
  background-color: #fff !important;
  -webkit-box-shadow: inset 0 0 0px 9999px white;

  &:focus {
    outline: none;
    border: 1px solid #ff7624;
  }

  @media screen and (max-width: 767px) {
    width: 300px;
  }
`,Cd=li.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;

  @media screen and (max-width: 1280px){
      margin-top: 16px;
    margin-bottom: 5px;
  }
`,Ed=(li.button`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: "Centra";
  font-weight: 500;
  line-height: 20px;
  padding: 14px 40px;
  width: 145px;
  background-color: #2970b1;
  border: 1px solid #2970b1;
  border-radius: 4px;
  &:hover {
    background-color: #15436d;
    border: 1px solid #15436d;
    cursor: pointer;
  }
`,li.a`
  text-decoration: none;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
  color: #2970b1;
  cursor: pointer;
  &:hover {
    color: #15436d;
  }
`),Od=li.div`
  color: #acacac;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
`,Rd=(li.div`
  font-size: 14px;
  font-family: "Centra";
  line-height: 21px;
  color: #ff4141;
  text-align: left;
  margin-bottom: 12px;
`,()=>(0,g.jsx)("div",{children:(0,g.jsxs)(vd,{children:[(0,g.jsxs)(bd,{children:[(0,g.jsx)(wd,{children:"Login"}),(0,g.jsx)(kd,{children:"to see your research come alive!"}),(0,g.jsxs)(Sd,{children:[(0,g.jsxs)("div",{children:[(0,g.jsxs)(Ad,{children:["Email address ",(0,g.jsx)("span",{style:{color:"red"},children:" *"})]}),(0,g.jsx)(jd,{placeholder:"Enter your email"})]}),(0,g.jsxs)("div",{children:[(0,g.jsxs)(Ad,{children:["Password ",(0,g.jsx)("span",{style:{color:"red"},children:" *"})]}),(0,g.jsx)(jd,{type:"password",placeholder:"Enter your password "})]})]})]}),(0,g.jsx)(Cd,{children:(0,g.jsx)(yd,{text:"Log In",variant:"solidOrange",width:"100px",height:"50px"})}),(0,g.jsxs)("div",{children:[(0,g.jsx)(Ed,{href:"/forgotpassword.html",children:"Forgot Password?"}),(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"3px",justifyContent:"center"},children:[(0,g.jsx)(Od,{children:"Don\u2019t have an account? "}),(0,g.jsx)(Ed,{href:"/signup",children:"Sign Up"})]})]})]})})),Pd=li.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
  height: 100vh;
  margin-top: 115px;

  @media screen and (max-width: 767px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: auto;
    height: 124vh;
  }
`,Td=()=>(0,g.jsx)("div",{children:(0,g.jsxs)(Pd,{children:[(0,g.jsx)("div",{style:{width:"100%",position:"relative"},children:(0,g.jsx)(gd,{})}),(0,g.jsx)("div",{children:(0,g.jsx)(Rd,{})})]})}),zd=li.div`
  margin: 0 auto;
  width: 520px;
  text-align: center;
  position: absolute;
  top: 25%;
  transform: translate(0, -30%);
  margin-left: 230px;

  @media screen and (max-width: 767px) {
    top: auto;
    transform: none;
    margin-left: 20px;
    margin-top: 20px;
    width: auto;
    position: initial;
  }

`,Md=li.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`,Id=li.div`
  font-family: "Centra";
  font-weight: 400;
  font-size: 48px;
  line-height: 42px;
  letter-spacing: -1.25px;
  color: #000000;
  margin-bottom: 15px;

  @media screen and (max-width: 767px) {
    font-size: 40px;
  }

`,Ld=li.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 16px;
  color: #454545;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`,Fd=li.div`
  margin-top: 25px;
`,Nd=li.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 24px;
  color: #352960;
  margin-top: 15px;
  text-align: left;
`,Dd=li.input`
  font-family: "Centra";
  font-size: 15px;
  line-height: 24px;
  border: 1px solid rgba(149, 149, 149, 0.50);
  border-radius: 12px;
  padding: 13px 20px;
  margin-top: 10px;
  margin-bottom: 8px;
  width: 475px;
  color: #454545;
  background-color: #fff !important;
  -webkit-box-shadow: inset 0 0 0px 9999px white;

  &:focus {
    outline: none;
    border: 1px solid #ff7624;
  }

  @media screen and (max-width: 767px) {
    width: 270px;
  }

`,Bd=li.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 25px;
`,_d=(li.button`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: "Centra";
  font-weight: 500;
  line-height: 20px;
  padding: 14px 40px;
  width: 145px;
  background-color: #2970b1;
  border: 1px solid #2970b1;
  border-radius: 4px;
  &:hover {
    background-color: #15436d;
    border: 1px solid #15436d;
    cursor: pointer;
  }
`,li.a`
  text-decoration: none;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
  color: #2970b1;
  cursor: pointer;
  &:hover {
    color: #15436d;
  }
`),Hd=li.div`
  color: #acacac;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
`,Ud=(li.div`
  font-size: 14px;
  font-family: "Centra";
  line-height: 21px;
  color: #ff4141;
  text-align: left;
  margin-bottom: 12px;
`,()=>(0,g.jsx)("div",{children:(0,g.jsxs)(zd,{children:[(0,g.jsxs)(Md,{children:[(0,g.jsx)(Id,{children:"Forgot Password?"}),(0,g.jsx)(Ld,{children:"Enter your registered work email to reset password"}),(0,g.jsx)(Fd,{children:(0,g.jsxs)("div",{children:[(0,g.jsxs)(Nd,{children:["Email address ",(0,g.jsx)("span",{style:{color:"red"},children:" *"})," "]}),(0,g.jsx)(Dd,{placeholder:"Enter your registered work email"})]})})]}),(0,g.jsx)(Bd,{children:(0,g.jsx)(yd,{text:"Send",variant:"solidOrange",width:"100px",height:"50px"})}),(0,g.jsx)("div",{children:(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"3px",justifyContent:"center"},children:[(0,g.jsx)(Hd,{children:"Don\u2019t have an account? "}),(0,g.jsx)(_d,{href:"/signup",children:"Sign Up"})]})})]})})),Wd=li.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
  height: 100vh;
  margin-top: 115px;

  @media screen and (max-width: 767px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: auto;
    height: 124vh;
  }
`;function qd(){return(0,g.jsx)("div",{children:(0,g.jsxs)(Wd,{children:[(0,g.jsx)("div",{style:{width:"100%",position:"relative"},children:(0,g.jsx)(gd,{})}),(0,g.jsx)("div",{children:(0,g.jsx)(Ud,{})})]})})}const Gd=n.p+"static/media/what-is-ERP.b39cc665c451687aad1b.jpg",Kd=n.p+"static/media/color-sharp.bea361cfef80fefc2d1e.png",Vd=n.p+"static/media/color-sharp2.c87586c6c2f549cb4aa6.png",Jd=(n.p,n.p,n.p+"static/media/Backgroundpeople.d12b809f5bce2d857642.png"),Qd=n.p+"static/media/Product.9dd066cf3ea2e0c5d71c.png",Yd=n.p+"static/media/CrmHero.8e1214dc746d880dc597.png",Zd=li.section`
  background-color:${e=>e.background};
;
  /* border-radius: 20px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  padding: 50px 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    height: 600px;
    padding: 50px 10%
  }
`,Xd=li.div`
  max-width: 700px;
`,$d=li.h2`
  font-size: 3rem;
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-top: 70px;
  }
`,ep=li.p`
  font-size: 1.3rem;
  color: #555;
`,tp=li.div`
  position: relative;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`,np=(li.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #a233db;
  top: 0;
  right: -10px;
  @media (max-width: 768px) {
 display: none;
  }
`,li.img`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    max-width: 650px;
  }
`),rp=e=>(0,g.jsxs)(Zd,{background:e.background,children:[(0,g.jsxs)(Xd,{children:[(0,g.jsx)($d,{children:e.title}),(0,g.jsx)(ep,{children:e.description})]}),(0,g.jsx)(tp,{children:(0,g.jsx)(np,{src:e.data?Qd:e.crm?Yd:e.lead?e.img:Jd,alt:"People talking"})})]}),op=n.p+"static/media/consulting.939890d26733fc8bb7de.png",ip=n.p+"static/media/service.2b0a165b42a11cc4aafa.png",ap=n.p+"static/media/grow.6d717d5c8734947f8b94.png",sp=n.p+"static/media/human-resources.b5fe567a0189b6da868e.png",lp=n.p+"static/media/arrows.1950f85fea2b63e0f617.png",cp=li.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,up=li.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,dp=li.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,pp=li.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,fp=li.div`
  width: 285px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px;

  @media (max-width: 768px) {
    margin: 20px 0;
    width: 80%;
  }
`,hp=li.div`
  width: 70px;
  height: 70px;
  background-color: ${e=>e.bgColor||"#ccc"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px auto;

  img {
    width: 50px;
    height: 50px;
  }
`,mp=li.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,gp=li.p`
  font-size: 1em;
  color: #666;
`,xp=()=>{const e=e=>{window.location.href=e};return(0,g.jsxs)(cp,{children:[(0,g.jsx)(up,{children:"Why Atomwalk Office ERP?"}),(0,g.jsx)(dp,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,g.jsxs)(pp,{children:[(0,g.jsxs)(fp,{children:[(0,g.jsx)(hp,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:op,alt:"Speed"})}),(0,g.jsx)(mp,{children:"Financial Compliance:"}),(0,g.jsx)(gp,{children:"Automated e-Invoice, GST reconciliation, and real-time financial management."})]}),(0,g.jsxs)(fp,{children:[(0,g.jsx)(hp,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:ip,alt:"Trust"})}),(0,g.jsx)(mp,{children:"Operational Excellence:"}),(0,g.jsx)(gp,{children:"Project and work order management, BOM generation, and process optimization."})]}),(0,g.jsxs)(fp,{style:{cursor:"pointer"},onClick:()=>e("/crm.html"),children:[(0,g.jsx)(hp,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:ap,alt:"Accuracy"})}),(0,g.jsx)(mp,{children:"Business Growth:"}),(0,g.jsx)(gp,{children:"Integrated CRM for lead management, sales performance tracking, and customer communication."})]}),(0,g.jsxs)(fp,{style:{cursor:"pointer"},onClick:()=>e("/hrm.html"),children:[(0,g.jsx)(hp,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:sp,alt:"Reliability"})}),(0,g.jsx)(mp,{children:"HR & Payroll:"}),(0,g.jsx)(gp,{children:"From recruitment to payroll, manage the full employee lifecycle effortlessly."})]}),(0,g.jsxs)(fp,{children:[(0,g.jsx)(hp,{bgColor:"#ffe0f5",children:(0,g.jsx)("img",{src:lp,alt:"Reliability"})}),(0,g.jsx)(mp,{children:"Multi-location Flexibility:"}),(0,g.jsx)(gp,{children:"Handle operations across multiple branches or locations with ease."})]})]})]})},yp=n.p+"static/media/time.a8163f40469abbaa08ca.png",vp=n.p+"static/media/money.b0e5ae4582ee14be342a.png",bp=n.p+"static/media/profits.effdf91aad8318ce8c98.png",wp=n.p+"static/media/login.1fc5649da5ea944b531d.png",kp=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 70px;
  /* max-width: 1500px; */
  width: 100%;
  margin: auto;
  text-align: center;
  background-color: #f5e9fd;
  @media (max-width: 768px) {
    padding: 100px 30px;
  }
`,Sp=li.h2`
  font-size: 2.5em;
  font-weight: bold;
  color:#333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`,Ap=li.h3`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
`,jp=li.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
@media (max-width: 768px) {
  flex-wrap: wrap;
}
`,Cp=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 10px;
  padding: 20px;
  /* background-color: #f0f4f8; */
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`,Ep=li.img`
  width: 90px;
  height: 90px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`,Op=li.h4`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`,Rp=li.p`
  font-size: 1em;
  color: #666;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`,Pp=()=>(0,g.jsxs)(kp,{children:[(0,g.jsx)(Sp,{children:"Unite advantages"}),(0,g.jsx)(Ap,{children:"Features Tailored to Your Business Needs"}),(0,g.jsxs)(jp,{children:[(0,g.jsxs)(Cp,{children:[(0,g.jsx)(Ep,{src:vp,alt:"Centralized access"}),(0,g.jsx)(Op,{children:"AI & Blockchain Integration:"}),(0,g.jsx)(Rp,{children:"Leverage advanced technologies for automated data entry, secure transactions, and business innovation."})]}),(0,g.jsxs)(Cp,{children:[(0,g.jsx)(Ep,{src:yp,alt:"Vetted providers"}),(0,g.jsx)(Op,{children:"Real-time Insights:"}),(0,g.jsx)(Rp,{children:"Make informed decisions with real-time data, analytics, and reporting."})]}),(0,g.jsxs)(Cp,{children:[(0,g.jsx)(Ep,{src:bp,alt:"Simplified workflows"}),(0,g.jsx)(Op,{children:"Cost-Effective:"}),(0,g.jsx)(Rp,{children:"Low setup costs with no upfront investment and all updates included at no additional charge."})]}),(0,g.jsxs)(Cp,{children:[(0,g.jsx)(Ep,{src:wp,alt:"Simplified workflows"}),(0,g.jsx)(Op,{children:"User-Friendly Interface"}),(0,g.jsx)(Rp,{children:"Simplified, integrated, and accessible from any device, anywhere."})]})]})]}),Tp=n.p+"static/media/automation.5c71914163b6c86409c0.png",zp=n.p+"static/media/server.96b9766474c3a4c7cb8d.png",Mp=n.p+"static/media/scalability.a651e2f67804756aba51.png",Ip=li.section`
  padding: 100px 20px;
  background-color:rgb(225 255 246);
  text-align: center;
`,Lp=li.div`
  max-width: 1200px;
  margin: 0 auto;
`,Fp=li.h2`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Np=li.p`
  color: #666;
  margin-top: 10px;
  font-size: 1.2em;
`,Dp=li.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 70px;
`,Bp=li.div`
  flex: 1;
  min-width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    min-width: 90%;
  }
`,_p=li.img`
  max-width: 80px;
  margin-bottom: 20px;
`,Hp=li.h3`
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,Up=li.p`
  color: #666;
`,Wp=()=>(0,g.jsx)(Ip,{children:(0,g.jsxs)(Lp,{children:[(0,g.jsx)(Fp,{children:"Seamless Integration and Workflow"}),(0,g.jsx)(Np,{children:"Atomwalk Office ERP connects every aspect of your business into one unified system"}),(0,g.jsxs)(Dp,{children:[(0,g.jsxs)(Bp,{style:{backgroundColor:"rgb(181 255 206)"},children:[(0,g.jsx)(_p,{src:Tp,alt:"Automated Processes"}),(0,g.jsx)(Hp,{children:"Automated Processes"}),(0,g.jsx)(Up,{children:"From bank reconciliation to payroll processing, automate repetitive tasks."})]}),(0,g.jsxs)(Bp,{style:{backgroundColor:"rgb(188 216 255)"},children:[(0,g.jsx)(_p,{src:zp,alt:"Centralized Data"}),(0,g.jsx)(Hp,{children:"Centralized Data"}),(0,g.jsx)(Up,{children:"Access and manage all your business data from a single platform."})]}),(0,g.jsxs)(Bp,{style:{backgroundColor:"rgb(255 211 168)"},children:[(0,g.jsx)(_p,{src:Mp,alt:"Scalability"}),(0,g.jsx)(Hp,{children:"Scalability"}),(0,g.jsx)(Up,{children:"Whether you\u2019re managing one location or multiple, Atomwalk scales with your business."})]})]})]})}),qp=(li.div`
  display: flex;
  align-items: center;
 justify-content: center;
 gap: 50px;
  padding: 50px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`,li.div`
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 450px;
  height: 300px;
  margin: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    width: 100%;
    margin: 10px;
    height: 330px;
  }
`,li.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: absolute;
  top: -35px;
  left: 20px;
  border: 4px solid #ffffff;
`,li.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  right: 20px;
`,li.div`
  margin-top: 30px;
  text-align: left;
  font-size: 1em;
  color: #333333;
`,li.h4`
  margin: 10px 0;
  font-weight: 600;
  color: #000000;
`,li.p`
  color: #666666;
  font-size: 0.9em;
`,li.div`
  color: #f7c324;
  font-size: 1.2em;
  margin-top: 15px;
`,li.h2`
padding: 50px;
  font-size: 2.5rem;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,li.div`
background-color: #cfe2ff;
`,n.p+"static/media/Projectmange.799ea926bfc50e76907a.jpg"),Gp=n.p+"static/media/inventory management.774803593808cfe0f584.jpg",Kp=n.p+"static/media/Process Templates.d39be0c24a2b4032e061.jpg",Vp=n.p+"static/media/Sales and Procurement.954547f65f6d37ca39dd.jpg",Jp=n.p+"static/media/Report And Dashboard.91584e3da800458d2e24.jpg",Qp=n.p+"static/media/gst.0029cfd05e4a07f888bf.webp",Yp=n.p+"static/media/Bank Reconciliation.194e572838760b213dd7.jpg",Zp=n.p+"static/media/Finacial Acconting.3a1f51360c2ca455c64c.avif",Xp=li.section`
  padding: 40px 20px;
  text-align: center;
  background-color: #ddf5ff;
`,$p=li.h2`
  font-size: 2.5em;
  font-weight: 600;
  color: #333;
  margin-bottom: 40px;
  
  span {
    color: #9C27B0; /* Purple color for the highlighted text */
  }
`,ef=li.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`,tf=li.div`
  background-color: ${e=>e.bgColor||"#f0f0f0"};
  border-radius: 20px;
  padding: 30px;
  max-width: 60%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
  
  @media (max-width: 767px) {
    max-width: 100%;
    flex-direction: column;
    text-align: center;
  }
`,nf=li.div`
  max-width: 40%;
  text-align: left;

  @media (max-width: 767px) {
    text-align: left;
    max-width: 100%;
  }
`,rf=li.h3`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`,of=li.div`
  color: #666;
  font-size: 1em;
  margin-bottom: 20px;
`,af=li.button`
  background-color: #ea5c49;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
`,sf=li.div`
  width: 50%;
  text-align: center;
  
  img {
    max-width: 100%;
    height: 300px;
    border-radius: 15px;
    @media (max-width: 768px) {
      height: 100%;
      padding: 10px;
    }
  }
`,lf=li.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #9C27B0;
  border-radius: 50%;
  ${e=>e.top&&`top: ${e.top}; left: ${e.left};`}
  ${e=>e.bottom&&`bottom: ${e.bottom}; right: ${e.right};`}
`,cf=()=>{const e=()=>{window.location.href="/demo.html"};return(0,g.jsxs)(Xp,{children:[(0,g.jsx)($p,{children:"Atomwalk Office ERP connects every aspect of your business into one unified system"}),(0,g.jsxs)(ef,{children:[(0,g.jsxs)(tf,{bgColor:"#fce4ec",children:[(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Project Management"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Project Activity Allocation Tracking "}),(0,g.jsx)("li",{children:"Project Activity Dependency (Critical Patch) "}),(0,g.jsx)("li",{children:"Schedule Tracking"}),(0,g.jsx)("li",{children:"Item Cost and Effort Tracking"}),(0,g.jsx)("li",{children:"Efficiency tracking at Activity"}),(0,g.jsx)("li",{children:"Project Documents, Alert management"}),(0,g.jsx)("li",{children:"Integration with Procurement and PO"}),(0,g.jsx)("li",{children:"Integration with Inventory Allocation, Wastage and Release"})]})}),(0,g.jsx)(af,{onClick:e,children:"Request a Demo"})]}),(0,g.jsx)(sf,{children:(0,g.jsx)("img",{src:qp,alt:"Employee engagement"})}),(0,g.jsx)(lf,{top:"10%",left:"80%"}),(0,g.jsx)(lf,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(tf,{bgColor:"#e0f7fa",children:[(0,g.jsx)(sf,{children:(0,g.jsx)("img",{src:Gp,alt:"Performance management"})}),(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Inventory Management"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Item Category and Group "}),(0,g.jsx)("li",{children:"Inventory Item and Service Item "}),(0,g.jsx)("li",{children:"Item Supplier management"}),(0,g.jsx)("li",{children:"Multiple locations"}),(0,g.jsx)("li",{children:"Multiple Units "}),(0,g.jsx)("li",{children:"Warehouse management (Bin Locations)"}),(0,g.jsx)("li",{children:"Item Serial Number handling"}),(0,g.jsx)("li",{children:"Item physical inspection and open balance"}),(0,g.jsx)("li",{children:"Item min order qty and Expiry date tracking"})]})}),(0,g.jsx)(af,{children:"Experience Live Demo"})]}),(0,g.jsx)(lf,{top:"20%",left:"5%"}),(0,g.jsx)(lf,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(tf,{bgColor:"#f6eaff",children:[(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Process Templates"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Activity Definition with User group"}),(0,g.jsx)("li",{children:"Equipment and Document definition for Activity"}),(0,g.jsx)("li",{children:"Process definition for a Product"}),(0,g.jsx)("li",{children:"Process Activity Dependency"}),(0,g.jsx)("li",{children:"Process items and Bill of Material"})]})}),(0,g.jsx)(af,{onClick:e,children:"Request a Demo"})]}),(0,g.jsx)(sf,{children:(0,g.jsx)("img",{src:Kp,alt:"Employee engagement"})}),(0,g.jsx)(lf,{top:"10%",left:"80%"}),(0,g.jsx)(lf,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(tf,{bgColor:"#ffeadf",children:[(0,g.jsx)(sf,{children:(0,g.jsx)("img",{src:Vp,alt:"Performance management"})}),(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Sales and Procurement"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Sales order, quotation, proforma invoice "}),(0,g.jsx)("li",{children:"Tax Invoice "}),(0,g.jsx)("li",{children:"Payment, GST Tracking, TDS handling"}),(0,g.jsx)("li",{children:"Return, Credit note handling"}),(0,g.jsx)("li",{children:"Purchase Order, Purchase requests"}),(0,g.jsx)("li",{children:"Goods Receipt (GRN)"}),(0,g.jsx)("li",{children:"Goods Return/Shortage/ Debit Note"}),(0,g.jsx)("li",{children:"Purchase Service Order, TDS handling"})]})}),(0,g.jsx)(af,{children:"Experience Live Demo"})]}),(0,g.jsx)(lf,{top:"20%",left:"5%"}),(0,g.jsx)(lf,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(tf,{bgColor:"rgb(225, 255, 246)",children:[(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"GST & TDS"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"GST report Support"}),(0,g.jsx)("li",{children:"TDS and TDS reconciliation"}),(0,g.jsx)("li",{children:"GST Reconciliation with A/c"})]})}),(0,g.jsx)(af,{onClick:e,children:"Request a Demo"})]}),(0,g.jsx)(sf,{children:(0,g.jsx)("img",{src:Qp,alt:"Employee engagement"})}),(0,g.jsx)(lf,{top:"10%",left:"80%"}),(0,g.jsx)(lf,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(tf,{bgColor:"#ffeadf",children:[(0,g.jsx)(sf,{children:(0,g.jsx)("img",{src:Zp,alt:"Performance management"})}),(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Finacial Acconting"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Reports (Sales, Purchase and Inventory). "}),(0,g.jsx)("li",{children:"Audit Trail."}),(0,g.jsx)("li",{children:"Statutory Reports (P&LBalance Sheet, Cash Flow, Change in Equity)."}),(0,g.jsx)("li",{children:"Purchase Reports"}),(0,g.jsx)("li",{children:"Depreciation Schedule"})]})}),(0,g.jsx)(af,{children:"Experience Live Demo"})]}),(0,g.jsx)(lf,{top:"20%",left:"5%"}),(0,g.jsx)(lf,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(tf,{bgColor:"#d7faff",children:[(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Bank Reconciliation"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Bank Statement Upload"}),(0,g.jsx)("li",{children:"Account Reconciliation with Sales and PO"}),(0,g.jsx)("li",{children:"Rule based reconciliation of Expenses"}),(0,g.jsx)("li",{children:"Bank statement View"}),(0,g.jsx)("li",{children:"Reconciled statement view"}),(0,g.jsx)("li",{children:"Bank, Exchange rate setup"})]})}),(0,g.jsx)(af,{onClick:e,children:"Request a Demo"})]}),(0,g.jsx)(sf,{children:(0,g.jsx)("img",{src:Yp,alt:"Employee engagement"})}),(0,g.jsx)(lf,{top:"10%",left:"80%"}),(0,g.jsx)(lf,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(tf,{bgColor:"#dfdfdf",children:[(0,g.jsx)(sf,{children:(0,g.jsx)("img",{src:Jp,alt:"Performance management"})}),(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Reports and Dashboard"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Manager Dashboard"}),(0,g.jsx)("li",{children:"Sales Dashboard"}),(0,g.jsx)("li",{children:"Account Receivable and Payable"}),(0,g.jsx)("li",{children:"Party wise outstanding"}),(0,g.jsx)("li",{children:"Batch reports like Sales overdue, GST not filed"}),(0,g.jsx)("li",{children:"Report Templates"}),(0,g.jsx)("li",{children:"User Access control"})]})}),(0,g.jsx)(af,{children:"Experience Live Demo"})]}),(0,g.jsx)(lf,{top:"20%",left:"5%"}),(0,g.jsx)(lf,{bottom:"10%",right:"70%"})]})]})]})},uf=(li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${Kd}),url(${Vd});
  background-position: left center, right top;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-position: left top, right top;
    padding: 10px;
  }
`,li.h1`
  color: white;
  margin-bottom: 20px;
  text-align: center;
  font-size: 2.5em;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.8em;
  }
`,li.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;
  max-width: 1200px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,li.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,li.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`,li.p`
  color: #666;
  line-height: 1.6;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.95em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`,li.ul`
  margin: 20px 0;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`,li.li`
  color: #666;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`,li.footer`
  margin-top: 40px;
  text-align: center;
  color: #999;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`,li.div`
  position: relative;
  height: 500px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${Gd});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7; /* Apply opacity to the background image only */
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`,li.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3em;
  height: 100%;
  z-index: 2; /* Ensure the text is above the background */
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`,li.div`
  padding: 20px;
  background-color: #f4f4f4;
`,li.section`
  background: #fff;
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,li.h1`
  font-size: 2em;
  color: #333;
  text-align: center;
`,li.h2`
  font-size: 1.5em;
  color: #555;
  margin-bottom: 10px;
`,li.p`
  font-size: 1em;
  color: #666;
  line-height: 1.6;
`,li.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`,li.li`
  font-size: 1em;
  color: #444;
  margin: 10px 0;
`,li.div`
  background: #ffebcc;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin: 20px 0;
`,li.button`
  background: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background: #555;
  }
`,()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(rp,{title:"Empower Your Business with Atomwalk Office ERP",description:" Atomwalk Office is a cloud-based ERP solution, designed to transform the way startups, small, and medium-sized businesses operate. Built on cutting-edge technologies like AI and Blockchain, our platform seamlessly manages core business functions including manufacturing, purchasing, inventory, sales, customer service, accounting, and HR.",background:"#52ebff",data:!0}),(0,g.jsx)(xp,{}),(0,g.jsx)(cf,{}),(0,g.jsx)(Pp,{}),(0,g.jsx)(Wp,{})]})),df=n.p+"static/media/contactus.d92ad20f9e7e87520f41.jpg",pf=n.p+"static/media/content.b17e184e51f85d52f7ce.png",ff=n.p+"static/media/support.742caae5101d98ae2c49.png",hf=n.p+"static/media/hand-shake.65bcad809362961ab098.png",mf=n.p+"static/media/acquisition.c97c3452c9063b3e641e.png";vl().setAppElement("#root");const gf={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px"},overlay:{backgroundColor:"rgba(0, 0, 0, .8)",zIndex:"32333"}},xf=li.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  max-width: 500px;
  margin: auto;
`,yf=li.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`,vf=li.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`,bf=li.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`,wf=li.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`,kf=li.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`,Sf=li.button`
  padding: 0.8rem;
  font-size: 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #333;
  }
`,Af=e=>{let{isOpen:t,onRequestClose:n}=e;const[r,i]=(0,o.useState)(!1);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(vl(),{isOpen:t,onRequestClose:n,style:gf,children:(0,g.jsxs)(xf,{children:[(0,g.jsx)(vf,{onClick:n,children:"\xd7"}),(0,g.jsx)(yf,{children:"Contact Support"}),(0,g.jsxs)(bf,{children:[(0,g.jsx)(wf,{type:"text",placeholder:"Enter your name",required:!0}),(0,g.jsx)(wf,{type:"email",placeholder:"Enter your email",required:!0}),(0,g.jsx)(kf,{placeholder:"Describe your issue or question",rows:"4",required:!0}),(0,g.jsx)(Sf,{type:"submit",children:"Submit"})]})]})})})},jf=li.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 120px 20px;
  background-color:#ddf5ff;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Cf=li.div`
  background-color: ${e=>e.bgColor||"#f0f0f0"};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
`,Ef=li.div`
  background-color: ${e=>e.bgColor||"#f0f0f0"};
  border-radius: 10px;
  padding: 10px;
  display: inline-flex;
  margin-bottom: 15px;
  width: 10%;
`,Of=li.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  margin-bottom: 10px;
`,Rf=li.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`,Pf=li.button`
  background-color: #fff;
  border: 2px solid #a4e4ff;
  color: #4c2c93;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ddf5ff;
    /* color: #fff; */
  }
`,Tf=()=>{const[e,t]=(0,o.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(jf,{children:[(0,g.jsxs)(Cf,{bgColor:"#f6eaff",children:[(0,g.jsx)(Ef,{bgColor:"#ffe9c0",children:(0,g.jsx)("img",{src:pf,alt:"Sales"})}),(0,g.jsx)(Of,{children:"Sales"}),(0,g.jsx)(Rf,{children:"Explore how Atomwalk can benefit your business."}),(0,g.jsx)(Pf,{onClick:()=>{window.location.href="/seals.html"},children:"Talk To Us"})]}),(0,g.jsxs)(Cf,{bgColor:"#ffeadf",children:[(0,g.jsx)(Ef,{bgColor:"#dff2e1",children:(0,g.jsx)("img",{src:ff,alt:"Support"})}),(0,g.jsx)(Of,{children:"Support"}),(0,g.jsx)(Rf,{children:"If you are our customer and need help with the Atomwalk application. We are here for you."}),(0,g.jsx)(Pf,{onClick:()=>{t(!0)},children:"Get Help"})]}),(0,g.jsxs)(Cf,{bgColor:"#e1fff6",children:[(0,g.jsx)(Ef,{bgColor:"#c6f0ff",children:(0,g.jsx)("img",{src:hf,alt:"Partnerships"})}),(0,g.jsx)(Of,{children:"Partnerships"}),(0,g.jsx)(Rf,{children:"Interested in partnering with us? Let us know."}),(0,g.jsx)(Pf,{children:"Get In Touch"})]}),(0,g.jsxs)(Cf,{bgColor:"#edf5ff",children:[(0,g.jsx)(Ef,{bgColor:"#f1d0ff",children:(0,g.jsx)("img",{src:mf,alt:"Media"})}),(0,g.jsx)(Of,{children:"Media"}),(0,g.jsx)(Rf,{children:"Any PR related questions? Always ready to talk."}),(0,g.jsx)(Pf,{onClick:()=>{window.location.href="/contactUs.html"},children:"Contact Us"})]})]}),(0,g.jsx)(Af,{isOpen:e,onRequestClose:()=>{t(!1)}})]})},zf=n.p+"static/media/phone-call.e7db31039cbc0dc30592.png",Mf=n.p+"static/media/email2.9082177d266cee25a57b.png",If=n.p+"static/media/location.39261a4c95eecf324099.png",Lf=li.section`
  padding: 100px 20px;
  background-color:rgb(225 255 246);
  text-align: center;
`,Ff=li.div`
  max-width: 1200px;
  margin: 0 auto;
`,Nf=li.h2`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Df=li.p`
  color: #666;
  margin-top: 10px;
`,Bf=li.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 70px;
`,_f=li.div`
  flex: 1;
  min-width: 300px;
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    min-width: 90%;
  }
`,Hf=li.img`
  max-width: 80px;
  margin-bottom: 20px;
`,Uf=li.h3`
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,Wf=li.p`
  color: #666;
`,qf=()=>(0,g.jsx)(Lf,{children:(0,g.jsxs)(Ff,{children:[(0,g.jsx)(Nf,{children:"Reach Our Team"}),(0,g.jsx)(Df,{children:"We love questions and feedback - and we're always happy to help! Here are some ways to contact us."}),(0,g.jsxs)(Bf,{children:[(0,g.jsxs)(_f,{style:{backgroundColor:"rgb(181 255 206)"},children:[(0,g.jsx)(Hf,{src:zf,alt:"Automated Processes"}),(0,g.jsx)(Uf,{children:"Call Us"}),(0,g.jsx)(Wf,{children:"Call us to discover how our products can work best for you."}),(0,g.jsx)(Wf,{children:"Phone: +91-7259555003"})]}),(0,g.jsxs)(_f,{style:{backgroundColor:"rgb(188 216 255)"},children:[(0,g.jsx)(Hf,{src:Mf,alt:"Centralized Data"}),(0,g.jsx)(Uf,{children:"Mail Us"}),(0,g.jsx)(Wf,{children:"We are waiting to help you and your team - so don't hesitate to reach out!"}),(0,g.jsx)(Wf,{children:"Email: info@atomwalk.com"})]}),(0,g.jsxs)(_f,{style:{backgroundColor:"rgb(255 211 168)"},children:[(0,g.jsx)(Hf,{src:If,alt:"Scalability"}),(0,g.jsx)(Uf,{children:"Our Main Office"}),(0,g.jsx)(Wf,{children:"Visit our main office, where our team is always ready to welcome you and assist with any inquiries."}),(0,g.jsx)(Wf,{children:"Bengaluru, Marathahalli, 560037"})]})]})]})}),Gf=li.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-image: url(${Kd});
  background-position: left center;
  background-repeat: no-repeat; */
  background-color: #e1fff6;
  padding: 50px 20px;
  color: #333;

  @media(min-width: 768px) {
    flex-direction: row;
    /* justify-content: space-between; */
    padding: 50px 250px;
  }
`,Kf=li.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;

  @media(min-width: 768px) {
    font-size: 2.5em;
    text-align: left;
  }
`,Vf=li.div`
  flex: 1;
  margin-bottom: 30px;
  text-align: center;

  @media(min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`,Jf=li.div`
  margin: 20px 0;
`,Qf=li.form`
  flex: 1;
  background-color: #dffddb;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  &:hover{
  transform: scale(1.05);
  box-shadow: 0 4px 57px -9px #454545;
  }
`,Yf=li.h2`
  margin-bottom: 20px;
  font-size: 1.5em;
  text-align: center;
`,Zf=li.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  /* background-color: #f6eaff; */
  border: 1px solid #333;
  /* border: none; */
  border-radius: 5px;
  color: #333;
  font-size: 1em;
`,Xf=li.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  /* background-color: #f6eaff; */
  border: 1px solid #333;
  /* border: none; */
  border-radius: 5px;
  color:  #333;
  font-size: 1em;
  height: 100px;
`,$f=li.button`
  width: 100%;
  padding: 10px;
  border: 1px solid #333;
  margin-top: 20px;
  /* background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%); */
  background-color: rgb(223, 253, 219);
  /* border: none; */
  border-radius: 5px;
  color: #333;
  font-size: 1em;
  font-weight:500;
  cursor: pointer;

  &:hover {
    background-color: rgb(223, 253, 245);
  }
`,eh=(li.div`
  position: relative;
  height: 500px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${df});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.5; /* Apply opacity to the background image only */
    z-index: 1;
  }
`,li.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3em;
  height: 100%;
  z-index: 2; /* Ensure the text is above the background */
  font-weight: 500;
`,li.p`
@media (min-width:768px) {
  width: 440px;
}
`),th=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(rp,{title:"Let's connect",description:"We would love to hear from you. How can we help?",background:"#ffc24b"}),(0,g.jsx)(qf,{}),(0,g.jsx)(Tf,{}),(0,g.jsxs)(Gf,{children:[(0,g.jsxs)(Vf,{children:[(0,g.jsx)(Kf,{children:"Get in Touch with Atomwalk \ud83d\udc4b"}),(0,g.jsx)(eh,{children:"Feel free to connect with us for any of your needs regarding our services. Our support team is ready to solve any of your issues. Just push a text to us and we will get back to you immediately."}),(0,g.jsxs)(Jf,{children:[(0,g.jsx)("p",{children:(0,g.jsx)("strong",{children:"India"})}),(0,g.jsx)("p",{children:"Bengaluru, Marathahalli, 560037"}),(0,g.jsx)("p",{children:"Email: info@atomwalk.com"}),(0,g.jsx)("p",{children:"Phone: +91-7259555003"})]})]}),(0,g.jsxs)(Qf,{children:[(0,g.jsx)(Yf,{children:"Drop Us a Message"}),(0,g.jsx)(Zf,{type:"text",placeholder:"Name*",required:!0}),(0,g.jsx)(Zf,{type:"text",placeholder:"+91 Phone No*",required:!0}),(0,g.jsx)(Zf,{type:"email",placeholder:"Email*",required:!0}),(0,g.jsx)(Zf,{type:"text",placeholder:"Which Business do you have ?*",required:!0}),(0,g.jsx)(Zf,{type:"text",placeholder:"Location*",required:!0}),(0,g.jsx)(Xf,{placeholder:"Message*",required:!0}),(0,g.jsx)($f,{type:"submit",children:"Connect With Atomwalk Today"})]})]})]}),nh=n.p+"static/media/about-us-bg.004c9dbfb932e1e45fde.png",rh=li.div`
    background-image: url(${nh});
    background-position: center;
    background-repeat: no-repeat;
    height: 1850px;
    padding-top: 74px;
    background-size: cover;

    @media screen and (max-width: 767px) {
        height: 1450px;
    }

`,oh=li.div`
    position: absolute;
    top: 6%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 50px;

    @media  screen and (max-width: 1280px){
        margin-top: 3%;
    }
    @media screen and (max-width: 767px) {
        /* margin: 0 auto; */
        margin-top: -150px;
        width: 370px;
    }

`,ih=li.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
`;function ah(){return(0,g.jsx)("div",{children:(0,g.jsx)(rh,{children:(0,g.jsxs)(oh,{children:[(0,g.jsx)(_l,{text:"About us",color:"#000",fontSize:"48px",fontWeight:"900",letterSpacing:"2.4px",textAlign:"left"}),(0,g.jsx)(_l,{text:"Empowering Small Businesses: Atomwalk Office is dedicated to empowering small business owners by providing a comprehensive Virtual Desktop Interface (VDI) that enhances operational efficiency and streamlines business processes.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"25px"}),(0,g.jsx)(_l,{text:"Innovative Financial Solutions: Our platform offers easy financing options and seamless connectivity with banks through blockchain technology, ensuring secure and efficient financial transactions for your business.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,g.jsx)(_l,{text:"Operational Excellence: With Atomwalk Office, businesses can monitor and track their operational efficiency in real-time, enabling better decision-making and improved productivity.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,g.jsx)(_l,{text:"Cutting-Edge Technology: We leverage the latest advancements in technology, including cloud services and blockchain, to provide a robust and secure environment for your business operations.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,g.jsx)(ih,{children:(0,g.jsx)(yd,{onClick:()=>{window.location.href={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SERVER_NAME_URL+"/careers.html"},text:"See Open Jobs",variant:"solidOrange",width:"auto",height:"50px"})})]})})})}const sh=n.p+"static/media/TeamImg.c0d26972b4149da836b5.png",lh=li.div`
  background-color: #f5e9fd; // Light purple background
  padding: 40px 20px;
`,ch=li.div`
  text-align: center;
  margin-bottom: 50px;
`,uh=li.h1`
  font-size: 2rem;
  color: #6a1b9a; // Purple color
  margin-bottom: 10px;
`,dh=li.p`
  font-size: 1.25rem;
  color: #333333;
  max-width: 600px;
  margin: 0 auto;
`,ph=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,fh=li.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media(min-width: 768px) {
    margin-bottom: 0;
  }
`,hh=li.img`
  max-width: 50%;
  height: auto;
  border-radius: 15px;
`,mh=li.div`
  text-align: left;
  max-width: 500px;
`,gh=li.h2`
  font-size: 1.75rem;
  color: #333333;
  margin-bottom: 20px;
`,xh=li.div`
  margin-bottom: 20px;
`,yh=li.h3`
  font-size: 1.25rem;
  color: #6a1b9a; // Purple color
  margin-bottom: 5px;
`,vh=li.p`
  font-size: 1rem;
  color: #555555;
`,bh=()=>(0,g.jsxs)(lh,{children:[(0,g.jsxs)(ch,{children:[(0,g.jsx)(uh,{children:"Our Mission"}),(0,g.jsx)(dh,{children:"Empower a new generation of entrepreneurs to pursue their visions and drive positive change for themselves, their communities, and the world."})]}),(0,g.jsxs)(ph,{children:[(0,g.jsx)(fh,{children:(0,g.jsx)(hh,{src:sh,alt:"Dedicated Team of Innovators"})}),(0,g.jsxs)(mh,{children:[(0,g.jsx)(gh,{children:"Our Approach"}),(0,g.jsxs)(xh,{children:[(0,g.jsx)(yh,{children:"Inspire."}),(0,g.jsx)(vh,{children:"We connect deeply with our customers\u2019 visions and use creativity, technology, and dedication to bring their ideas to life."})]}),(0,g.jsxs)(xh,{children:[(0,g.jsx)(yh,{children:"Take Bold Steps."}),(0,g.jsx)(vh,{children:"We embrace courage in all we do, pushing boundaries and meeting challenges head-on with confidence."})]}),(0,g.jsxs)(xh,{children:[(0,g.jsx)(yh,{children:"Think Like Owners."}),(0,g.jsx)(vh,{children:"We treat every project as our own, constantly refining, innovating, and creating new solutions that drive progress."})]})]})]})]}),wh=n.p+"static/media/people.4f89400e19d25d36ee95.png",kh=n.p+"static/media/handshake.fec586e9ced4464da168.png",Sh=n.p+"static/media/startup.be4fd0c3b78108011c51.png",Ah=li.div`
  background-color: #fff7e6; // Light cream background
  padding: 100px 20px;
`,jh=li.h2`
  text-align: center;
  font-size: 2rem;
  color: #333333;
  margin-bottom: 100px;
`,Ch=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,Eh=li.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 350px;
  text-align: center;

  @media(min-width: 768px) {
    max-width: 400px;
    height: 150px;
  }
`,Oh=li.div`
  background-color: ${e=>{let{color:t}=e;return t||"#ccc"}};
  border-radius: 8px;
  padding: 10px;
  display: inline-block;
  margin-right: 15px;
  width: 50px;
`,Rh=li.p`
  color: #555555;
  font-size: 1rem;
  margin: 0;
`,Ph=()=>(0,g.jsxs)(Ah,{children:[(0,g.jsx)(jh,{children:"Our Beliefs"}),(0,g.jsxs)(Ch,{children:[(0,g.jsxs)(Eh,{children:[(0,g.jsx)(Oh,{color:"#8ed1b0",children:(0,g.jsx)("img",{src:wh,alt:"People Icon"})}),(0,g.jsx)(Rh,{children:"Business is ultimately about valuing people above all else."})]}),(0,g.jsxs)(Eh,{children:[(0,g.jsx)(Oh,{color:"#db70d1",children:(0,g.jsx)("img",{src:kh,alt:"Hand Icon"})}),(0,g.jsx)(Rh,{children:"We have the power to make a meaningful difference in the world."})]}),(0,g.jsxs)(Eh,{children:[(0,g.jsx)(Oh,{color:"#fbbd3c",children:(0,g.jsx)("img",{src:Sh,alt:"Rocket Icon"})}),(0,g.jsx)(Rh,{children:"Innovation should be a core part of our identity, not just an option."})]}),(0,g.jsxs)(Eh,{children:[(0,g.jsx)(Oh,{style:{width:"65px"},color:"#6cd5ff",children:(0,g.jsx)("img",{src:hf,alt:"Handshake Icon"})}),(0,g.jsx)(Rh,{children:"Building connections and partnerships helps us break limits and aim higher."})]})]})]}),Th=n.p+"static/media/linkedin.6892b3ae328c7a1e055f.png";const zh=n.p+"static/media/Sk.1620eca3feffff84fbec571e63f18988.svg";const Mh=n.p+"static/media/sk2.7c9fc7c4395d941a8f1bcca5c65f2b7c.svg",Ih=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Lh=li.div`
  width: 100%;
  padding: 50px 0;
  background-color: ${e=>{let{bgColor:t}=e;return t||"white"}};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 300px 0px 0px 0px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`,Fh=li.div`
  width: 100%;
  padding: 50px 0;
  background-color: ${e=>{let{bgColor:t}=e;return t||"white"}};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 300px 0px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`,Nh=li.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`,Dh=li.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`,Bh=li.div`
  perspective: 1000px;
  width: 100%;
  max-width: 400px;
  height: 420px;
  margin: 20px;
  position: relative;

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
`,_h=li.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`,Hh=li.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,Uh=li(Hh)`
  background-color: #f8f8f8;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Wh=li.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
  border: 2px solid #ddd;
`,qh=li.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`,Gh=li.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #555;
`,Kh=li.p`
  font-size: 1rem;
  color: #777;
  line-height: 1.4;
`,Vh=li.a`
  display: inline-block;
  margin-top: 10px;
  color: #0077b5;
  font-size: 1.5rem;
  &:hover {
    color: #005582;
  }
  img {
    width: 30px;
    height: 30px;
  }
`,Jh=()=>(0,g.jsxs)(Ih,{children:[(0,g.jsxs)(Lh,{bgColor:"#fff8f0",children:[(0,g.jsx)(Nh,{children:"Leadership"}),(0,g.jsxs)(Dh,{children:[(0,g.jsx)(Bh,{children:(0,g.jsxs)(_h,{className:"flip-card-inner",children:[(0,g.jsxs)(Hh,{children:[(0,g.jsx)(Wh,{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADIAMgDASIAAhEBAxEB/8QAHQAAAAcBAQEAAAAAAAAAAAAAAAMEBQYHCAIBCf/EAD0QAAECBAQEBAQEBAcAAwEAAAECAwAEBREGEiExBxNBUSJhcYEIFDKRI0KhsRVSwdEJFjNicuHwJENTov/EABsBAAEFAQEAAAAAAAAAAAAAAAUAAQIDBAYH/8QAKhEAAgIBBAEDBAEFAAAAAAAAAAECEQMEEiExQQUTIjJRYXEUIzOBocH/2gAMAwEAAhEDEQA/AMtCfzE3N7i+8cCcLmg1hhM2pI66RyxOKyXF9+0PZRRI25oJJsNPWOjPX3O2xiPpnVKVsQLXtHXzah3taE2SSHwz4ypB3jkVABQF72hiM2o29e8BczZVu3Q9YimPVcj380k21Fx2gJqAKxc3tDCmbtYb+kFqmlXJJMSFyShU+nTUEX6QYmohI0PveIkqdNxqbX27R0uolAteH75I1fZIJupFSNOkN7NSJqaEj+Ua+8N6ObMqFvCD1P8AaDW5duXd5uZRc28WgiuTT4JxXJqbB7hxLw/lJ5Crvy55Dve46/aG2tU3+KUqYld1LScg7KGoiosIcT65hJmYk5JTPyswQXGVpCgogaEf9RMKHxVZnHwiel+SSfra2B9IEexKEm+0EvfjJJPsvz4dnmcVYNalXUn52mLUw6P9p+j+o9otxGG2mVfQAk9YzZwWxizhjie7KtTCEUytNgZgbgL3T6a3HvGjncSKLbyOYPw1a3G0czq8c8eVpPg34JR2V5RX3F7B7clOSlYaTugsOkdeqTFcqd0ASbDsYt/FdZFZo0xKOPtG4uAAL3G0VCWRe1tb6x0fpuSU8W2XaA+uinPdHyVtxVoofbMy2LqPj03uNFfpY+0NHCDE5oFfbQ4v8B3wLHkdj7G0WZiCmifprqAAVo8aATuR09xp7xQ86yuiV0t7IKsyCD+U7QUfZmiriaQxi2qa5IQ3nUVGwSLkw2yOB5ybUHHUplkW2XufaFeBayqt0lmYKwXGk8pRvrcdfeJC4+u5JJJ9YSUfJmlu8C48OaLRqXJzr0w1MOOozrQ4pIyHtlveGaUmZNVVKnWTNSygoJS2rLl6A/8AUKlz8y6nKp0lNrWIG0JGXHZMqDCuXmBScqRqDuI1+7BL4ozbMj5k7PKi/MFpRLvOTawKug7CBCVxTgSpJJKT0tAiHu2Wwx7VTM6fwuVukhlI73ED+FyirBTaQLa2EcT8yZeaWgE9d4JTUQlWb/14SpqzXymHfw6WB/0xod47TTZRdwWk+0I/nxcqJgInxa+Yw1UP/kVro0mjUIB/9tBH8JlM2XJe380ByfGW4OvnCczyS5ckf0hUJu+BSqjSRWCGxYRwqjSJuOUL26QSidCWxlVe8D5xKxfPfTpD0kPbfYb/AAGSyKPLGb9oZ59mQUhz5VoLWg5TrpeFVRqJQza5F9rbkwbSaE7UEystLJvOvnMbjYRCUtqtlkIObpDMy6ZVIcyFKeyReFiC28MzjiRmtZRN4s6X4PVBcunwpuRroYTq+HyqTZshxLQJ1uNIwvWYV3IKr0zVPqBWs1UGJNSGy2Fnoroof0MJXKq409zkJJA+q43i9qN8L4aQlc5NOPHskWtD8OA1MlmlI+Xz3HiUrWKH6lgXFmuHompauSoo6l4ockZ2UmUXSoLSpIHQg6GNc0nG/wDH6KxMJIKn0AqCDsbW1+0UdiLhIKRTluSJPMaOcI7jtEeoHEmbwwlBbu5J3IcZUdUnrEZxhrI7odox5tPl0bSkuzQy3AQSpRzJ6d4SBlteY28UR+i4ulcRyiJiWWkpUkFWux7HsYdJefSHgnbpC062OjBme+HDFLsikKNk6bxSPFjD5ps+mZQglvQj/iT/AEN/vF7cxS0+EXHpET4jUb+MUF3TxNi+g6df7+0FJJIxQdOmQvg3iX5SqiTdI5M0Mlz0V0/tF2rYKVa2jKFKmHKXOgfQtte40IIMamwvVRiKiSs4FJUVoGYD8qhuIb9EclxdhiwE6ajzhbhp+jy1XbcrsrNzdPSkhTUm6lpZPTUgwcqUzA/+EIZmXU2g2GkPRCLRJMW1vAsxRVsUKgVOVqBULTE5OpWlI6+EJF/vAiEuIKTr7wInY9t9mX8bAyVTVrZJvoIjqpy40v8AeJziWSan5n8S/wDNDIcPSyddbw0H8TVKrGD5gixJNrx2mZIt4lE2h/FAl7HtfTtHRoMuLgi/W/lFlkSNqm7Hr11vvBQmlZtIkaqDLKVcZgP2jxWHJUG9zc+cLkalfJHjMrBCQbpjlyfUyCQDmGwiQmhS9zZR3vDbiGlNSdNLzd81wCewiKZIapuoOTTIQdV9I0RwB4dulpurz6CVuDK1mGgHeKZ4d4dYxBWZMOm7RcACO8bUw62iUlZZtKQ2ltISANABAX1HO4R9uPk6j0fTRyT96Xgf5OjMoSlJRfpe0L1UhlsAhIvBCKxIygHPmkNjpdUOMrU5KdSotOpXYdI5l4p1dHaLPjumwv5doIAygecNk9LpdzWFhaF9Qq0rKIKleIJFz5xBp3ivRUzKpe5Q6k2KYlHTzn0iGTV4cf1MTVaSDjT6FJsLGMpcRKWuiVieWlN5dayopHnGoprFFPniQ2+Bm7xRXHGScp7iZkDOw6Mye2Ybj3EG9A5Y8m2XFgD1XbqMO/G7oZOB0+pypVGWC7tloOJSTsesW8JohV72PQnvFGfD+0tzG044hJ5SZVVx0FyNIvJ2T5bytdL3F4J5F82calxyS+nvGalG3QdCP1jyfaQqXWlVlBQykWhDhR4JW9LLV4frTf8AWHqrspbk3F503CSdovjyjHJbWZkxrTBS6wp1CCAs2PnbY+4tFlcDsTBEy/SnF/hujmNC/wCcbj3H7Qg4s4cLlLanUC6mrIXYfY/fT3iu8MVp6kzsvNMmzrKwoe3SLqaJNqcTXxdSUW6iEUylKgekKKPMM1qkSs6wpPLmGwtIA28o6ekrJOoP3h+zInXgYX2bqIAIgQ90t5im1OXmZuRRUpZtV1yq3FIS4OxKdR7QIf8AY1WZTqjocZacG5TlJ9IZkToyi4BPnDs8C9TUqTqoa3vEMfnOQ+6m9gg2iGOgjNU7H4TmXL4uto9+dy65v1iPpnFFQN7iOlzxjTwVD2idukZSLmPVTdk2Ise/aGFicCUjUm/aD1zIKdzfziLYqY5iZKrm4ENlddU/IONgXuL99oJRN9Dt1hbRWm6rWpKTeXlafdS2o9dYi3SbJKLbSRLfh2pCpqv81wWalmy4L9zoIvFdbqVSnXm5YCXlWzl5y9tOsRTgvhw0Wq1uTdbKXG3AyQeg7RaFawM9U2AzmUmW3KGfBm9SI5vNkSz3I7bR6WctMopfsgtYlJJpAmJqsvPOJGYgqCU2v+14mOAa0jnNtpupDnhClQZMYYbnabL0xynJdYl0lLSV3OUXv031HWFdDwwikTiXXUBC0apSBa5PUxTqM+OeOk+TZp9Jkjl+S4OsdVNUk8iUSoZFJKisdB2iHmjNSdGXXESLE6C4UBF05yqxOx11ta9t4sTF9MZecaeIAIF8w3EJpbDM2thDss6Mitbi0VafUQhH5I06nRznL4MrGmzkriF0y05SHaW7lzJVktv00jniThlFRwLMMK/EWwAtCgNdItuTwqiXeU7MnM6De6jeGjGdNZXJutJtlcbKTbzEL+TF5FtGekccTUu2jMfA1CaTiGpMqSbPpCUK7kaxcs63lQFWIsbGIyxgVeC8BJrM0OXOiZS+B/szZbfY3iWjLOSoU34kOICkn1EFnkWSW6PRxWfSz09Rl2+Rvkp5UpNtuD8pvfyia1BTc1T2ltkLQ8oWIHQaxXUwpTSspuCDEgo9efmWJeSS0CJcE572320+8bMTt0CsqqO5j+wujhmdYrFJVVWnWihtCZkshCj+Y2Bv6Rlioyq6TWpiXWgtlDhGW22saZmcx1NrxT/FygcmdYqbabBwZFkfzD+4/aNso8WZcMlur7ll/DvidNQps5Q33QXZY85gK6oJ8QHof3i0p6XXySMiNeyoyJw+xSrCWKqfVSboacCHR0LatFD7a+0bMmmW3pJLzZCm3EhaVDYgi4MRjyPOO2X4Im6yUq1Fh2zXgQueb1sO8CHoqU66Mi0wF2XW0VHtvaIlU6M+7UHHUFOVWvbWJfTFBqeeZO4JAhtqS/l3ljfxHW0U4+HQUlwiMt0eabIzWNj0MGOUqbI0APWHUTgKja23WDEzid0n3jTRRuGJmlTaARYZhClNPeULBIJ7CHNU6gAkn/uPBNpFze4PaFt5I2/sNaqY8nUoue0OGHKW8ivUxZNkpmW1EjcAKEGOT17dfXrHslURJTLT9/8ATUlWnlrEZr4suxy+SZrNuRlZDEkw+zfmTBS46TsTbeLHlKq2W0osNtYrNKguVp80ASXmUKzeoBA/WJFT5ha1pJNrdo4bLBuXJ6pp8katdE9fmZWTleYgJ5qhvtaKpq/FGnUetMSvIROTSnPxF81I08gd/SIVxPxhW1VsU5p5UnJKIRzNsw9YJkcCUCoJC1pn6pMJFy4ynwg+RjZj0kdqeTyY8uryZZuOFdFp8R+LFMk6Kw9JNyy3SsH8XQIHUnr5WhmwdxgpUxMuATTDC7BXKKvDfrDGzgSVbkwh+jTc+2lISgTSx4B5a39zEUxNw/k5tpaJGgOyj6iCFoWMqT94vWDEo0UznrI8/wCi+53EsnWZD5iWWlwHqg31iKVV9TzYzbbQycM8FzGGaO8H5hSkukL5ROiDaHyfRdsBOutgBrcxh9uOObUXaNkdRPJiW9UxJW6U7jDCs1SAn8Z1sloAdk3v9wIg/DKYXUaByFpPzMmosuJO4sY19wP4MT0k/MVOuSJlWy0EsNP/AFkk3KrdBGf8d4YZ4SfEpO01NmqLXR8wwOiSvceyrxdhz2pQSOc9Sqc1KL64IViOmrlplLgScrg+xhHh1madqzbLKglTyw0Lm2vnFuYxoMvNUh8tgc1g59O3WKqlW1MJS4k5VhWcHqDfSCumzqaT8nN6jHSLEPC/E6rnktAd1OCG7E/BKuVuhTMu45KpXlzJAUVHMNR09veLvwlXHsS4bkp1mU5mZAStRcSBmGh09YfqVKMvzSk1NSpJgJvnZAdUT2tpHSqCmuDnFkcHyj5juSbsnMvyzqcriFFCkqGxEa7+GBauImCFyUxU1Im6UsMKayAnl28B1+3tFW/FZgWRwhxGMzSVPrp9RR8wlbzYR+JfxpsCeuvvDP8ADfxDc4fcUpEqdS3IVO0nMFeqE5j4VH0NvvGbasc6CM2skNyNnjhXIt6uzMw6euwECJtMU6fcSLTyW7//AJsA/qTAi9xRkXJ8vawgU/FEwkDRSyQB5w24nbKGHHBobBX2h4xu0Wqy06BotIN7/eEVfY5tNCkgEKSU/cQKh4YckuKIMiduSQbk+cdtzl9L210hlzqCsvXbQQah/l9TtfWNl2ZKHMzult/SAmfzAC9rQzJmCtR3j1tas4Ftt4l0IelTthYG3eOUThFuvrDW46e/oRBbbq1KsD7Qw66Lw4X8Vqk9U5Chz81zJGxQzmAulVtBft0jR1FnEONJJOvUxgtqYcln23W1FDjagpKgdiNo0/w7x+rElEbm0H8dqzcw1vlV39DATW6dfXE6j0zWNf08jLdmaTJ1R7mPsoctYgKSDaHiSpqJJsKaskW+kCw/SIRS8VNqISpWnn0iWyFYQ8hH4gI7iAdZFwdLjyQ7sXLQtZsoaEblO0JX6e20kK1UDtCt+sSZZy5wCOl4jFVxUzL3Q34ldk7CJSU5NIslmilbFs1PCWSEG1r6xEsQY+ksE8mszbHzktIvIcMrmyl4hQIQD0vaErs/M1V4pRdAOpN4o3j1iJ1NalqEMwYZaDywDqpauvsI14dOss9kgTqtU8eJyRtCm/4jeDcRIbbfkZ+hTJ0KnQHWxfzGv3EV78UFX/zxhum4qk30vPU5xLqHmz9TKu3obGMFT7y2imxCRbYGNFcAMeIxVhKcwbU151tsrDJUblTZ3A/4kxsyaOGBrJjOWx6hzThPyW5RsZKrVAl5wLKi8zlVc7m1jDFNrEq+pr8vQ+UQThvUXqdNzuHJi/NlXjbyAOv9ImVcRdCHhvsYdQ2SpeSh2+y5/h8xOgzU7Q3HLhwc9kHuPqH21i6HmBa+0YxwdiZ3DmJafUGzbkOhSrH6k7KH2jY8pX5WoyzL7Db623UhSFclViDB/S5HtpgLVQUZ7l5Kl+JTAYxZw+mJlprmTtMPzLdhqUWstP219owzMJLJzoVlWhWZKtvePqxU8IzDku2l5UopqZ/Cy/MINwodddBbe8fOzjlw2c4Y4/qNGcU0tsK5zK2VhaS0rVOo7be0Tyxv5Iv08r+Ejcnw58REcT+FNIqDjgXPy6flJodQ4gWufUWMCMo/BrxVTgbH0zh6cU6qQrKcraGxmIfT9Nh5i4gQlNURUdlporLiFJENsOjXIooIMNa8sxRkgDxAX+0SfiBL5qfN66oOcX/92MQ6jLVMSTjY1IGkB4L42GeLIo7h9lx9akqIKiSRHK8ONKSSVHfaFVQmPlZlaTp0hOmo66nWCUaaMbbTCUYbl21iy1EWsY6/y+0NQs+/aDBPXFxsYCZ0BJGa0SasVnJw+1vmsnzjhOHWApNlkW8toOVOlWnuI9E3ktrcHoDCoazz/L7SiLqJMW/8PlJQmq1SWSq4caSoA+RP94qZqZWVadekaq+Czhn/AJ7mcXPCyZ6Wkmvlc23MLl7e4Tb3jLqYOeJqPZv0OWMM8ZT6FNSwgZZedAKATeFNLk3GkhGRzb8piz5+hqDa2nUZXE3SpJGoI7w006k8t6wSdO4jjXnklUuz0daeDdx6IsuhPTCf9FZV2hG/hh1IUVJsDrYCLiRT0BgKCOm4hmn6UVaKGpMMs8+aHeCP2IVSMNBuXzqTYW2tGTfiLp8zJcTpwusrYu20UBXVJQCk+94+hWDMEOYtqKJBF0y6QFzDttEI/udhGSvjfkZUccqvLNICWm2ZdpKQPpCWkgD2FoOel4pylLJI5r1nNCMVgj35MpVNPUmxI2MS/gLPLk+JFMINwvO2q/YpjqY4ZT0/ShNyK2ptFtUJVZST2IhXwTwvOjiGwt+XdYTKpU4orSQAdgIMZXFwaOXWOcWm12WfxDQcKcRadXGtGJwBD1u40P3FjFgulM7KWBuhabg+UMfE6jHEGEJkoQC/Kq57Z66b/peE3D+uisYZl1FV3WPwlJJ102P2gddwT+xdkTjJ/kOTJFteqvvpGpuAuJP4xg1Mg65mmacrl67lB1Sf3EZjnjy5gkaBWvpE34L4uVhzGUuh53JKzv8A8dwHbX6T9/3jZhnsd/cHZoXHg1M8gG97axm/4u8DCfokjiRhNnZM8iZKR/8AWo6E+iv3jRLswTe5tEfxZSJfE9Bn6TNpCpecZU0ryuND7Gx9oKPlNAzHLZJM+bYqExQapK1CUWWZqWcS624NwoG4MCHTGdBeo1WnqdMoyvyzimVjbUG1/feBGKgs47uSxcZS+dlYNiHWyB5xW2Gn8k6WyAQBtFr4lRzJNtRGoVFRyLPymI1NX05hHna8D8buJrfaGTH0mqTmkuIFkqsbxE0zuuqoszilTSKOHU621HeKkkZWYnVhLDanSegG0EcTTiUZI1KhwTNa/VeDkzNwbqEKpPB8y5YvrS0BuBqqHuVw3JSifGgvK/mcOn2i+ilpEebWt4+AEm+yReHBimTjiASjKD/ObQ/+FtOVtCG0f7RYQbKy/PmBc3A1Jh9rYqQnptJ5RUtw5l29hG2P8OWya3i9oqssyjK0i+ps5r+4jHQbJeUL2vt5iNTfATPKkuLbsuCUpmZBxBHexBiTikhm6Zrrinw5eeU7iGjs84K1nZRA1v1cSP3EU9LMtuTQWk2udQY2JTjy3Mp+lwRUnGHg/wApT2IKEzZYuuakkDRQ3K0Dv3Ec7rtAst5IdnXemeqPGlhy9eGVt8q2ykKJsB0MI6Zh6dxliJqm0trmOHxOOkeBpPVSj/68JKZ87iepy1KpqedNzBslJ2QOqj2A6xqLAuCZHA1CTLS45j6wFzM0oeJ5f9uwgfo9G80rlwkFvUNetLFKLuTG2hYSkcFUZumyg1PjfmFABTiuqif2HQR8l/iLxIMZcWcR1VteZt6ccDZv+UHKn9BH1N4z4sThHh5iisuLymXkXAg/71DKn9SI+QNfd58047e+Y3JMdpjgoQaR5/ObnLdLsbJKfmJAKMu6tsncJOhiWYc4jzlHSUuS7UwFHxKtZR94icui1yRv36x4lstuG6T5CISxRn9SHWSSXDLekeKVKnGyibQ7LBYKSLZhb2iJYBnEUfFM7JNuFdPfWrkuWsnun+0RRbBSkW0J84CFqbXe5SQYz/xIK6HlmlLiRedQQHWMySbpPaGpDymXkuIUQtJzJUNwR1itJPEVQlrpRMrCD+W9wYdpTFy27B9HMzblOhtFK07Q25NG58EYrGJcMSM7mBcU3ldF9QtOhv8AvDq9M+kZt4H8UKdIuTNLnJ5uUZd/EaL6soz7EX21/pF6IqTb6AtC0uIUNFJVcH3jdFuuQRkioyoz58TeCks1pmuMJs1PIyOkdHUDf3T+0CLV4o0dGKMFVGV2fbRz2FfyuJ1H31HvAiiad8BDFkuJUVTlkv091JBVlF4prEct8piTmtqGWyTodjbURY9QxpKzWGpmYlUOoSv8Jtah4SSbG3prFazAE08De5Kb3jHpcLacn0bczlidPs7q1bNWkxKuy6VsjQ3Op9YaWWUSqAltsNo6BAtaHUSYyZQAR3j1MvkuCAO0FI41Hgyym5cjfmNrq69Y4KSoC4Fx+sK1t7kaEGC1JygKy3HnFyS8EG76CFA2uQddbQ5SLIbRc6KVqbmE0ozz3LnRKe+msLiddLEDtEaFyecmy82um1heNEfBROtynHSjNK+qZZfZB8yi4/aM9c0Aa6adYtv4XaoKXx2wc8pWXNPIbJ/5Aj+sSdURs+q09PStFk3J6ceblZSVbU8884bJbQBckntvFE1T4m5mt4ukaZSpZDFHmkB1maK7LW3r41X0SLAn06xZ2NJBrHdMdphCZijvNnnBJul8dRcbp3jMmKuG05wqxZRCwwio0YNOycqZj6VJKVZGXCdtym/WMk7jDcuzVCpSSLQodckqVVHqoilU2VnKg2S67LzKlZk3F1JBIAHVRHlEjwXxCnJyvtUx5cu9JzzS1NuS8xzEJcTrYX11AMQSnh4sU1ycobTTbcqtLiUIKFNq3DSLlVwq1jf/AKhHhvCL+K8bUOeorj1MlcOutuvp5hWhd05uQLgHrYg7DYaxgw5ZSlsQW1OGCi5S7EPx24k/hPCdinJXlXUZ1OYd0oBV+9vtHzim0KdCrXzdI27/AIhdabdmsKU9pQU1yXZgp6glWXX7GMTqGZZOnqINqtqQCfYjYatfMMhHeOXGitOZCSSnreFxstJsDnt944lRlB033vpCaGsQKUVZdQT0v0jzLdVjfzvtHU0kNPZNNdbDpBrbdyBqep9IjQrPW2ivSw3g4Spt7aQoaaAF7awpbYKxc9el4mlwR5Y2pZy7bxMsBY/qmEJ1Blppa5POOZLqUShQ66dIjczllGFuEagaesCQZLbCCr6jqo23JhVXYzSapo2BNVZqo0ZTzZu260Fp9CLwIr/A1XVNYIlAtdylKmrX6A6fpAgfP6uSmFK0Zvkp53+EtyefM0lRXlA0vboeog5x8tLlXAbJJyH3EJnHUFxIayqQnwJKdiB1gx5Idp6k3soeIfvF2CKWNBTVNPLKx1Wq43v5mOBZSb6ecJGpjnSragRdQBMKWUlCO5O942NpmJfk5UnMD19oSzVmkFZGg1Jhdm8Ou5hPMNZswtoYj+h7BJPMuMfhKCwNCRBtwBsQOljDI9T1NOhyVWpp5XQbH1h3ZCygFywXYAkbXhDNnYBvcnXsIkWBOWrFlGQ+ohhc40hwpUQQlSwDYjbQxHsxz5eghxoTvy1UlXVbJdQr7KBhPgY+q/w1TC0YCVh6dXnn8Ozj1LczG6i2DdpXuhQ+0TjFmFJeuUSYk5ixQFEoJ3QQNCD0IPWK8w64MK8XpNxKssniymJXY7fNMAG/qptX6Q9ca8e0+kSiqW7PNyxWguzASsh1QtdCE22zEa+WnWMs/jyaIK2ldFJ1dD8hJzUvLqbWGZJMuHm5sh5SdbHKkAJ1/Mew7xd/C2mCnYLpbAJK3WkzD7qzmUpShc3PXoIz9WcaSDdFnFLdlA04y4JdlcspDilrCPCtdrBIy2vfW+2kWDhni/TcEcBJmsvLampqSCZWVl2HAtTzyhZppNv92noIwaaL9x2uwlq5qUFtlZlH45a61VeMTsmwtK26bKtS5y9FaqUP/wChGblXWLaaabWh8xpVqlV69UJurKUqqPTC1zNzchwqOYex09oYk301I1g0/sB7PEgqum97aXhsmhOKmFobcSy0RosDxGHUgZbG9/LaCHQlaCFA3J3huxK6EUvTUS6iu6lrO6lG5MODDdljTSCUu5FJbVqb/eFaRrdIP36Q6QzDEBNzrfzhQlJQO994SBzMQNh6wqbsUb373h18Rm7Ek8vnTDEuDcE5z6DpCtZOlje3QQjlVB2sPKABDaQkQtzKuBbwnvDd8iRZfDtwOUYam7bihvAhBw0mAEzbJ2BSrLAgXlT3uycV+ClMPpHyaFAlWZRJvD/KoSStH6QkNHcobUtKrSUOISlSgTfUi/8AWFbKcjtwSNY3YvlFNFk+ZMRyJ5a3WNPw1EW203h4QFZNBb1hjB5deeT+V1IUL+WkPgBKbg/eLuLKrXk9ulKjex07QTMLDYAIzEnTtBi75dRrCeabUWQQDm3BtD0RA2nxWUfFveDgQo2ve43IghtzO2FDYja0GBJ9D2hkI6uRe52G8HyailVx/aCCTcEC99oMlgCsHMd7QqsT4Pp5j6cda4IYIxxKNqfmqD8jVCEfUprIlLo90mM9zvH3F2L8TTk8nhv/ABFiYe5jTrrbijl/KNE2NhaNBYRqLVd+FnB8i80JtFRkG5N1kPhpTiUkgpBPUlKRbteK44G1iZaxazhmtyoE7h5QZanVPKsthV0pyg/VckC9rWSDuIGZcyitlWEsGm9yO9uiusZ8bjJybUvibhsuSbN7utNKQq/lmSn94kHAKf4e45xRNVWRZngvDsi9VTJzmjQUlNkrt1UnW2sWpiVhmRolZfmm6pLpecbExznA85crs640PFayVZbgdBaK+4izlP4c4Em5+TkJWSqNRoD7L74YDUw4VqbSAqwA/Mq47xVizReRRUaLc2keOG5SsxFiOeM9WJuYPiU+6pwnzJJP7wiQfBf6VemsezTmdxSgm9zcCOUgncwY7YJboC1eK4BVffzghxzVSSNE72g5wHMRtCJ5eZ5LKR9X1ekKxKzuRa5rpeOo/KLwvV4Sd7nz0Ecss5EpSE6bAwJgWIFttB3h1yKuTxpOfU6g6Wg+5QjxaAaxy2gBu99ITVaY+VpzqjqcpsRE0yLo8w4ovB97otxWh+whwcIDhzaW2hLh+WErSmh+e1zeD33Rn23Oloh+REv4bOgVxaQr62jpfsRAhswQ8pqusEaEAjQQIF509/BdF0hsx+gJxJPIRfK26Ei/kAIbGklZF9LfaHLHKs9eqSgSv8dQKveG5CSWU9ABG7D9CS+wpvliKoN3qMm4LXN0k9/eHpu5QNrAbwzz5OeXVoAFD1EPLVsoA7RclyVPo5IAUAB01jhRGQix87wYVBKyDv3gpXU6Afe8J8MQiaIZfU0R5pEKkKuSNyPtCObbUlSXRuNT6dYVNqCkAjWEI6NiNxe/eO2l5Vpt7wSVkqI0t6R0hWp1vba0NdCZtjgrxBlK3wuwhR3TJLRSm32JgzlyWVF4LCkgA5jkFhY6EiJPxMQ/K1xzGuGnJNE9S2y2oiazGosFCQEZQbjKAVdNdoz7wA4p4PwhQZqm4hpc7NzJmC6l+VOmUgaHxDUWMXQnjJwon2wA1Vpa6bla2yQk9RoTAzJibk5JMIQ1bjBQdUiZ4bxLSMQYCNSpompaWemA3y5FfNmGPCo2UPEUZloToOpHQmKV+MOsqkGqbREzDqUrZRMOsqSAFrJJKie4ygWGgvDfjCuYTwNOLr2BsThaFfiTVNfK21K80HKLK8oqLi5jSRxpPy01TahMTzBautMwCFNuE6pNyegGohYsDjkUv+FuTV747WuStnCSo2JvvBzagACdAe8FX11N+0dLJF8o9oKIFcnj6whtSio2GsEyLGpfXfmL38oKePzz4YTcJR4l279BDkhhKEWtmt3MNVCujovBNgogf8d4SPzKAb3zAdAIUFIJ2FgITuqCb6Dz1iXaoW4DcynkgeIE23EN2I5m0sy0knxOBJPvCkLAWADe2toZK44ZiryLKSbFdyBvaGpDdMl8mT8mjcaA3jkgq8/WD0rSJZCRcWFtIRlw7WyxPwKiWcOJFyqYrkpZsEuOryJSOt4EOnAOcEtxZwzzNUOTaWiD/uun+sCBubHulY6ZDMWoUmr1AOOc5fOXdwAJzG+9hCOWF2E6+Ej9YECNeL+2mSlxJiOeRy1tHU+MCHdnRvU2gQIsIrk8KQFG5tAUA4nS4IgQIcj0gl1Ge6STCJg8lSkG5CdR6QIEMSjyg5JBO/oINbsk+GBAiJL8GoPg4l5GcGKGp5lM0xLtfMrl35dLrahl0NyNFApOnUGNFyOC8MVPBzkyiWozy35nltVCoSCEpQnLmVlSkAG1lgH97QIEA88pLI0mdDpoxlg3Nc2RPEXAvBdSqNNll0WmtOzSG1TTcu862VlYV/pC9gPw1HXe/SMbcZMM0bCHEKu0agsrYpknMllCHHM6swAza+t4ECL9JknKdNmfW4oRhFxVWQEEXta0ePzAaYVexOwA6mBAgswK1RxSpYtZybqUrU3HWFh5l7aDTS8CBDjSEygsDVy9+gEJngoA+JR94ECJdDBKFpbzLI1tbeI5Mz6RiJvMTdIsOnWBAiL6ET4C7KTtpBKz38XSBAhxo9jxgmqLpGLqPNg/6E4y5cHaywYECBGfIuSqbpn/2Q==",alt:"Manoj Sahoo"}),(0,g.jsx)(qh,{children:"Manoj Kumar Sahoo"}),(0,g.jsx)(Gh,{children:"CEO, Co-founder"}),(0,g.jsx)(Kh,{children:"Manoj has 25+ years of experience in Product solution, Engineering and Development in two of the India\u2019s leading Products, Finacle (INFOSYS) an enterprise solution in Banking and Financial Services and Tally the most admirable product in SMB segment"})]}),(0,g.jsxs)(Uh,{children:[(0,g.jsx)(Kh,{children:"Manoj K. Sahoo, Founder and Director of Atomwalk, drives product development and innovation with over 25 years of experience in engineering and software solutions. He was instrumental in building two of India\u2019s iconic software products: Finacle, Infosys's global banking solution, and Tally, a leading business tool for SMBs. Manoj's expertise spans payments, supply chain management, and delivery excellence, with multiple patents in product innovation. Holding a B-Tech from NIT Rourkela and an MS from BITS Pilani, he leads Atomwalk's mission to deliver ERP solutions that enhance business efficiency and digital transformation."}),(0,g.jsx)(Vh,{href:"https://www.linkedin.com/in/manojksahoo",target:"_blank",children:(0,g.jsx)("img",{src:Th,alt:"LinkedIn"})})]})]})}),(0,g.jsx)(Bh,{children:(0,g.jsxs)(_h,{className:"flip-card-inner",children:[(0,g.jsxs)(Hh,{children:[(0,g.jsx)(Wh,{src:kc,alt:"Lipika"}),(0,g.jsx)(qh,{children:"Dr. Lipika Sahoo"}),(0,g.jsx)(Gh,{children:"Founder and Director"}),(0,g.jsx)(Kh,{children:"Dr. Lipika Sahoo, with 24 years of academia and industry experience in technology, innovation, and intellectual property, holds a PhD from IISc. She has triple master's degrees: MSc from Sambalpur University, PGDIPR from NLSIU, and PGCBM from XIMB, along with advanced certifications from WIPO and IIM Bangalore."})]}),(0,g.jsxs)(Uh,{children:[(0,g.jsx)(Kh,{children:"Dr. Lipika Sahoo, Founder and Director of Atomwalk, brings 24 years of experience in academia and industry, specializing in technology, innovation, and intellectual property. She holds a PhD from the Indian Institute of Science (IISc) and has earned multiple advanced degrees, including an MSc, PGDIPR, PGCBM, and certifications from WIPO and IIM Bangalore. Dr. Sahoo serves as a reviewer for various government innovation programs, such as BIRAC-BIG, SPARSH, and TATA Trust's Social Alpha. Her extensive expertise supports Atomwalk\u2019s mission of driving impactful, socially relevant technological innovations."}),(0,g.jsx)(Vh,{href:"https://www.linkedin.com/in/lipikasahoo",target:"_blank",children:(0,g.jsx)("img",{src:Th,alt:"LinkedIn"})})]})]})})]})]}),(0,g.jsxs)(Fh,{bgColor:"#e8f3fc",children:[(0,g.jsx)(Nh,{children:"Board of Advisors"}),(0,g.jsxs)(Dh,{children:[(0,g.jsx)(Bh,{children:(0,g.jsxs)(_h,{className:"flip-card-inner",children:[(0,g.jsxs)(Hh,{children:[(0,g.jsx)(Wh,{src:zh,alt:"SK Patnaik"}),(0,g.jsx)(qh,{children:"SK Patnaik"}),(0,g.jsx)(Gh,{children:"Advisor"}),(0,g.jsx)(Kh,{children:"For ~25 years, he led Business Management (Client Relationship, Sales and P&L Management, new GTM) roles mainly in the IT Solutions & Services spanning global markets (the US, UK, South-East Asia, and India)."})]}),(0,g.jsxs)(Uh,{children:[(0,g.jsx)(Kh,{children:"SK Patnaik, who joined Atomwalk\u2019s Board of Advisors in 2021, brings expertise in business strategy, product innovation, and revenue growth. With ~25 years of experience in IT solutions across global markets, he has held key roles in client relations, sales, and P&L management. Previously with Infosys, he led APAC and India operations for the Global Manufacturing Vertical and has deep experience in the ERP landscape with platforms like SAP, Oracle, and SaaS solutions. SK also co-founded a deep-tech telecom startup and holds an MBA in Marketing and Systems from the Xavier Institute of Management, Bhubaneswar."}),(0,g.jsx)(Vh,{href:"https://www.linkedin.com/in/sk-patnaik-",target:"_blank",children:(0,g.jsx)("img",{src:Th,alt:"LinkedIn"})})]})]})}),(0,g.jsx)(Bh,{children:(0,g.jsxs)(_h,{className:"flip-card-inner",children:[(0,g.jsxs)(Hh,{children:[(0,g.jsx)(Wh,{src:Mh,alt:"Dr. M R Jaganath"}),(0,g.jsx)(qh,{children:"Dr. M R Jaganath"}),(0,g.jsx)(Gh,{children:"Advisor"}),(0,g.jsx)(Kh,{children:"He has an illustrious career  as a Scientist managing deep Technology, Translational Medicine, Drug development , Drug discovery.  He has published numerous scientific articles in reputed journals."})]}),(0,g.jsxs)(Uh,{children:[(0,g.jsx)(Kh,{children:"Dr. M R Jaganath, who joined Atomwalk\u2019s Board of Advisors in October 2023, brings expertise in lab management, Good Laboratory Practice (GLP), and Good Manufacturing Practice (GMP). With a PhD from the Indian Institute of Science (IISc) and a distinguished career as Chief Scientific Officer at Connexios Life Sciences, he has extensive experience in translational medicine, drug development, and drug discovery. A prolific scientist, Dr. Jaganath has published numerous articles in esteemed scientific journals, contributing significantly to the field of advanced medical research and innovation."}),(0,g.jsx)(Vh,{href:"https://linkedin.com",target:"_blank",children:(0,g.jsx)("img",{src:Th,alt:"LinkedIn"})})]})]})})]})]})]}),Qh=n.p+"static/media/sales.ba949556d3121afbc087.png",Yh=n.p+"static/media/concentrate.7f7fc25cb1fde510b1de.png",Zh=n.p+"static/media/goal.969464dc2886052b3fad.png",Xh=n.p+"static/media/online-learning.20f782a0f780a57d90bb.png",$h=li.section`
  padding: 70px 40px ;
  background-color: rgb(225 255 246);
  text-align: center;
`,em=li.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 110px;
`,tm=li.div`
  display: grid;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
`,nm=li.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom:100px;
  /* display: flex;
  align-items: flex-start;
  text-align: left; */
`,rm=li.div`
  flex-shrink: 0;
  margin-right: 15px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${e=>{let{bgColor:t}=e;return t}};
`,om=li.img`
  width: 40px;
  height: 40px;
`,im=li.div`
  flex-grow: 1;
`,am=li.h3`
  font-size: 1.2rem;
  margin: 15px 0 10px;
  color: #333;
`,sm=li.p`
  font-size: 0.95rem;
  color: #666;
`,lm={improve:`${Qh}`,excellence:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA7SAAAO0gFcPFpKAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyO34QAAAP90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+6wjZNQAAHltJREFUGBntwQdgleX58OHf+yQ5WUASCCQEmS6cqDgq4oytFcVRRytq6561tbZ/u7S1rbZftRW1VatVW2dbBbXuLYJYNyBuGRIgjCQEAgmZ5/5swzLjft9zcg45z3ue6/JwtuDtv8+QIdsMKWurWVWzqmbVqprlcysJNQ9nIzP+xBPK6Kh6zntz5rzfihNyA65fJt1aM/WcbXBCLOOiVeJj7nWHRXDCafxsCWL1jaNxwifzdgnsxRMyccIl+98Si6VXleGESJ8XJUYtDwzHCYui/0jsGn6VhxMKubMkLhXfxAmDmyRer+yBY73yqMSt7S/FOHYrWCQ9UfkVHKv9XXqm8Qwcix0nPTY5A8dWGZ9Lzz3fH8dSx0sizNsFx04vSkLUHYtjo10kQaLn4VjoVkmU1gk41ilYJwmzdi8sZUhb384nYfo8MQw7GdLWBBJo8JMFOFaJrJOEeiELGxnS1VfySajyv2KjDNLV2QeTWHvwCo49XpOEOwH7eKSpfjWZJFrl6LXYJoM0VX46inkft0QixKpv9nM4lviRaI4F+mx72C9fapBYtOyCY4nbRdGQywaR8Vc8Xy+BTcOxxDRRPMqWssqntEhAk3DsUCmKM+hgm98sl0Aq++LYoI8oosV0kvOLBgniehwb7CmKKroy7CEJoGVXHAucLIo5dO3QReLvZaxiSE8DUVTStZf3noGvQ8ZiE0N6KkBRSTeqym/H13nYxJCe+qGopDst51/cio9T8rGIIT0VoFhK9265GB99v4VFDOmpAEUlituvxcd5OCnvCVGMQ+M9JD52xx6G9FSAIopGTn8d3bnYw5CeMlF4qBpPWIfqtFysYUhPURQeusrfoSo8CWsY0pOg8PBx/eeozsUahvQkKDx8NF6OanwJtjCkJ0Hh4eehGajGYQtDehIUHr4ujaIZhy0M6akVhYevd6egGYctDOmpBkUm/u5DMzYbSxjSUxWKUvw9W4siey8sYUhPVSjK8Nf8CJpxWMKQnqpQDCaAf6IZhyUM6akKRRkBvLQSxTgsYUhPVSjKCKBtCorSUdjBkJ6qUJQRxENoxmEHQ3qqQjGYIN4WFPtiB0N6qha6l1dAAOs+RzEEOxjSU1stijKCeB/FQOxgSFNNKAoIYi6KQdjBkJ4OGIwinyDeRzEIOxjS0zlo8gnifRSFWVjBkJb6noQmShCftNA9rxgrGNLSKflo3iKI5k9RDMIKhrR0Npp5KwikEsUgrGBIR7vti+ZVgmlAMQgrGNLR2aimEkw9ioFYwZCGsk9DU/k0wTSgGIQVDGnouAFo7m4jmAYUg7CCIQ2dg0buJKAGFDlYwZB+RpSjeWU+AdWjaMQKhvRzlofmToJqQNGEFQxpx5yBZvVUgmpA0YgVDGnniKFoHlhPUK0oGrGCIe2cjeoOAitE0YgVDOlm4DFoZs0isCIUTVjBkG7OzEJzJ8EVoWjECoY0Yy5A03g/wRWhaMQKhjRz5Eg0U1cTXBGKJqxgSDMXo7qDGBShaMQKhvQy6gg0818hBkUoGrGCIb1caNDcJcSgCEUTTurJqRZNaxmxaBHFQVjBkFa+NQDN05XEoCATxWKc1POmqI4lFnuJoiUTJ+XsI6plmcRikigWYgdDOrkI1T2txGI0ioXYwZBG+n8L1Z3EZDSKhdjBkEbOykEz41NiMhrFQuxgSB/ehajuICZmexQLcVLNkaKqySEmI0UzDjsY0sfFqO5sJCaj0SzESTEj20TTNpLY/EAU6z3sYEgbFxg0Ty0kNqNRfC7YwZAuss9CdTMxGo1iIZYwpItvFqOZ9yyxydgTxUIsYUgX30V1ixCb3fuiWIglDGli/D5oGv5GjMaj+RBLGNLEZajuX02MxqN5AyelbNsmqjHEaqkoPsUWhvRwqUHz6hxiNLIMxevYwpAWis5E9WdiNR7N69jCkBYuyEez7GFiNR7N6zipJGupqK4iZh+IoiETJ5V8W1QtZcRqQFQU07GGIR1churhSmI1zkPxOtYwpIHyMahuJmbj0byOk0qeFNV7xO5d0ZThpJCdoqI6n5gNEU0F9jCE3w88NGvuI2ZHoXkdexhCb+DpqP5eT8wmonkdJ4X8UlTRHYhZboNoxuGkjpyVonqW2B0lmqYc7GEIu9MGorqe2E1EM70RJ2V4H4pqDnFYLJrv46SOI0V3OrHbQ1Tb4aSOF0S1OIvYXSGaT7CJIdzGlKO6sYXYTUTzJE7quFtUq/sRu5KoaMpxUsbwZlFdSxzOFE1dBCdl3CKq5iHE4RHRTMVJGWWNovo7ccitF81ZOCljsuh2JQ7HiCZaipMqBtWL6inicZdo3sYuhhC7LA/VdcTBHI3mSZxU0X+tqN4mHgeKal/sYgivS/uguo54HItm5Vs4KaJfragWZhCPeaL5O5YxhNYlhagmtxGHXbZF8wROisivFlVNPvH4uWia+2EZQ1hdOADVrfXE41g00+twUkPOclE1lhCPIVHRXIptDCF1bgmqe1YQj2M8NI/jpIbIYlFFdyQuz4rmQ5wUcZ7oHiUu/ZpE83uc1JC5QHQHEJdviepAnNTwHdG9Rnz+IZrqDJyUYD4R3fHEJbJGNPfipIZTRPepIS5fE9XJOCnBe190FxCfm0TTXICTEr4husXZxOcD0byIkxreFd0FxGewqC7FSQnHiO7zCPE5VVTb4qQC877oziFOd4nmQ5yUcIbo5mcSp0WiuRYnFWQvEt0ZxGk7UR2Ikwp+KLrPMojT+aKpycBJAQU1ojuNeD0omntxUsFvRfdxBnHyqkTzTZwUMLhedKcQrz1E01yAkwJuE937hnj9UDQv4qSAHVpEdxJxe0o0l+KkgIdEN8cjXllrRbMtTu/bV3wcT9zGi+YjLGUIk/+HbtajxK0czTM4ve/r4mMi8XtFNCfi9DpvlujeJH6RJtGU4fS6U8XHkcRvL9EsxOl1kQWi+w89cI5o7sNWhtC4YCS6X9ADY9G8htPb+q4U3Qx64g3RjMHpbVeJj0Ppgcz1oqgzOL1s0FrRvUxP7C6a57CWISSu7IPuF/TEXmhm4vSyUc2ie54e+ZNoDsfpZVPEx/70yExRtPbF6V1Hio+n6RFTL4pZOL0rZ7742Jce2Vk0f8ZehjD4+Sh0j71Jj4xF8xpOr9qxSXQtO9Izk0UzHKdXvSg+bqKHXhHFEpxeNUl81A6gh5aJ4kGc3lSwXHxcRg9FoqK4HKc33Sw+5kXooRGi+QZOL9q7TXx8g546UDRjcHqPeVt8TKfHThFNXyxmsNxFY9HJZfTYUBQr12Ixg91Kr8bH/W/TY9ugmI/NDHa7vgDd+p/Sc0NRzMdmBqsdfgo+/riEntsGxXyc3pL9ifhY1ocEWCaK07BZJjb78Q74uGIdPRcpQTGfHsgvblcUiWRFsiJZkaxIViQr0lLf0K6+oaFhzdIlS6qF5PCw2Lbv56CbPTZKz41YiKJkJTExpQOLN8khmKbKJV9YuqRiGYmVicVuzkEnF0ZJgDIU61YSUP6oUaO2HTVqRDaxyx45kv+pmT1r1uxP2kiUTOx10hH4uON1EiEDxVL8eIO3HTVq21GjSkiAAeXlsP69WbNmz11PAnhYq+/HZeiqd1xFIoybSffm7k73Bo35wvY5JEPbG08+OYc0dpv4OZPE2E8U79KlzF0m/f6ZZZJki2+bmEeamih+Zngkxt6ieIOOig75/l3vNMpWsv7p744kDQ1aIT5adiNB9hTFTLZQMuEXjy2Wre7NM3JIN0+In+tIlN1FMY12A474+SOLpbfUXDeKtHKB+Fnch0TZRRQvQNHhP35oofSy6FNHGdLGjvXi5wQSZrQoFvxznqSIBZf3Jz1kviV+niJxthdb1F6WRTq4WvysH0XijBJ7fDKR8DugVfxcSQINFJs8tyshV7RQ/HyaTSItF5u03lxMYAbrmAdG4EPOaSKR5mCTjIs+O5egDNb59dfxc+N0EmoOdim8/W85hNVxUfHzSS6JdapY590RhNOOa8RP2/4k2K5in5qvE0Z9PxRf15JomU1in7YrPcJnqvj6IJuEmyU2erwAXwar/OQb+Gn9ThMJNwcbHf1yf/wYbHLkNfj6/dsk3itYac8XB+DDwyJfeSEfP+/t00zi9Vuei5XmHF6NymCPXZ/Kx0/Ld5pJgrpHsdOYl4pRGawx4tkifF09m6S4B0vt9kQO4VDymfh7J5PkMHPFVvejycASBS/ujK/GCctJDln2LSy1W+sMuudhh9xnD8TfuXeQNG/tTZJFW9q1trRIv4J+uSSInPgw3fKwQs7UCfi7+wyS58BphsRaW1VdVV1VXVVdVb2m5QtRviSr4Av9Cv5n6E6FxG/dzovpjocNBjw2Dn9zv9JAEl39cxKhddGC+QsWV1VXVTcTg9Kdd9p5p51LiMtjx9IdDwuMenoH/K3d+1OSKXP6/vTE6gXzFyyYv6CijfgV7bzTzjvtNMwjRt94BIvtvUKCOIkkG1Yh8Vn4yC9P3rs/CVM86Z4VEpMlfbHXUeskiBtJuu0qJUaN7971vYMKSDxv7BWvRSW4G7HWea0SxH+ySL6dV0hgNS/84fTdMkmiba9ZIkG17Y2dvGskkOqhbA1DXpUAGt+85exdPZIv48iHmiSYdzOwkblXAmk7gq0j8w9R0TS9/Zdz98xi6ym7rUUC+QE2ukGC+TVbzZ7PSNea37n9vLERtrodHoxKAGuHYJ+LJZjnDVvRIfeukC9rmXXHBftk01v2niYB/ArrHNUqgXw8gK3L2/uKma3SbuW/f3xgLr3Lu7JNfFUYuuCRuvaY0Ycglo37nK2vaESGyTAZlfNIBYc/MBA/E57GKkOWSCB1e+Aw5FXx8zBW6fOuBNJUjvOFyBPio7kEi2Q8LoFEJ+H8T/Yz4uNyLHK9BPMjnA1yXhDdJ9jjKAlmMs4mfeeJ7iBsUbJCAvmXh7PZPs2iugNbPCmBvBzB2dKPRPUBlviuBPJeAc6XeHNF09YHK+yyXoJ4ZxBOB2eI6kBskD1Hgni+L05HkUrR/AAbXC9B/DOC09lPRHM/FiiPSgA3eThdKFwrik9IfVkfSwA/w+naDaKI9iPl/Uj8tZ6F040dRHMoqW5wnfhqOAanW3WiuJAODCnm2r74qf3qYzjd+gBFPh0YUssBp+FnXflMnO59gCKPDgwpxfwJP9FJs3AU76PIpwNDSjlvT/z86HEczQco8khphTXi51Yc3RBR3EkHhlRyaX98PH8Jji6KIo8OMolVzuDSbHpofW3t6hY6KbwUH/NPasXR9UGRRweZBBU5ZIeyLwzuT2LU13w0e9aseVE2u7QAXeupa3B89EGRR3z6fvMfayQZ1j1z7kA2KFwtPq7E8XWQKB4lDiXnPtUkydP60sUl/NdV4uPVDBxfE0TxF2JW/kqbJFvjbdtB4WrRrRmB4+8UUVxFjMY8I1tF24N7XSU+vo0TwLWiuICYDL83KltNi+hm4gQxQxTHEoMB1zdK6ojuhxNA1npR7EcHmXTrrOsLSCH/eAMngL1yUCynA0M3MibfWUAKafwpThD7o1lOB5l0reBfR5BSrq/ACeIYFIubCGa7jyS1LOuDE8Q2baL4Fx0ZulL+5mhSy5XrcIKYZFD8h0AubJEUM8fgBPKeaPYliFMl5ZTjBDJONOsjBLDvekk1j+ME84JoXqUTQ0dlj+SQaq7GCeTgcjT/oRNDBzmPlpFq3nkDJ5DfoHoNfw9I6jkLJ5CviaqhD75+JqlnVS5OIC+Lagq+yqOSev6IE8iuojsRP2aOpJ7odjiB3Caqtbl0ZtjSqbuTep6bhxNE4WmoHltPZ4YtZP+GFHQLTiBn5qH6J10wbOHi4aSeRU/gBLIbqsZn6YJhs8Kfk4Lui+IEkosq53S6YNjsJ/1JQY/iBJOHbvIIOjNsMuR7pKDFb+MEk4eu7989OjFsck4uKehRnIBy8HHwpXSSySbHEcTKhZXLm+mhPmWDt88nkEdxAnprPD5++8xHdGu4+Pv012NJkJyJf6sTfzWZOAGNE19vZdKt74mfJWdnkEgDb2oWP3fjBOUtFV8/o1sviY/bc0m07d8TH/fiBPYn8bWmiG4UtYiq9RKSoM8joluAE9h+UfF1Dd04XXSTSArvAdENxgnsV+JrbTFdmyKqa0iS3LdEdSJOYOYp8XUdXVstmuc9kmXIatFMxgmuaL74qS+lK31F07oryfNT0byJE4Mx68TPDXRlR9HcQRLlLhFFSwZODA5bLz4ah9CFQ0UzmmT6mWgG4sTi6DbxcQtdOFUUH5NUu4hmJ5yYXCU+GvLZzNCuDMW/SaoP5qMYiBOTX7+ELvdoNjO0K0PxFsn1OopinJhET12B7iQ2M7QrQ1FJci1DUYwTm+WToqgm5LOJod1gFMtIrkoUxTgxeuk3qHKPYhNDu2IUtSRXLYq+OLG6+kNUJ7GJoZ0hVXk4sWq9BNWEfDYyOCH00hQ0eUexkcEJox82ozmJjQxOGFX8E82EPDYwOKE0GU3eAWxgcEJp9sto9mQDgxNOk9HsyQYGJ5yeqUOxJxsYnHBqeQ7F9vm0Mzgh9QQKsxvtDE5IPRVFMZR2BiekqmajKKWdwQmrj1GU0s7ghNUCFKW0MzhhtQDFYNoZnLBagGIQ7QxOWC1CYWhncMIqD4XQzuCEVQmKKO0MTlgNQiG0MzhhNQhFlHYGJ6xKUNTTzuCE1SAUS2lncMKqFEUl7QxOSGUdgKKSdgYnpA7vj2Ip7QxOSJ2MZgntDE44RY5D0TaXdgYnnL5aiOLjBtoZnHA6Gc3bbGBwQilyLJp32MDghNLZBWjeZgODE0b9r0az7h02MDhh9Jv+aJ5rZgODE0Jjzkf1BBsZnBC6KQONPMlGBid8vnkQqjdXspHBCZ28P6B7mE0MTuj8fhtULXezicEJm/O/i+7fK9jE4IRM+Z/xcRubGZxw2eGhTHTzX2QzgxMq/Z8owsftwmYGJ0yypmyPj5pb2YLBCZNbDsXPdWvZgsEJke+dg5+qP7MlgxMeu16Lr9/XsyWDExpZ92bjZ9ktfInBCY2r9sDX99bzJQYnLHb+Mb4enMKXGZywODYDPysvpgODExZH4OvCajowOCHRdxx+/vkwHRmckDg0Cx8rvksnBickyvBzQQ2dGJyQqMPH/Y/SmcEJiTp0y79HFwxOSKxFd94qumBwQmIlqpZpdMXghMRHc9FkfZWuGJyw+Auqo+iKwQmL++rRTPDogsEJi7p/oCkdSxcMTmjcjOpoumBwQmP2NDRH0QWDEx43oBlbSmcGJzwen4/CO4rODE54RG9CcySdGZwQuacVxVg6MzghsnomiuF96cTghMmTKLxd6MTghMlTaHajE4MTJh98jmI3OjE4ofI0itF0YnBCZTaKMjoxOKHyGYpSOjE4oTIPRf8sOjI4obKkke55pXRkcEJFFqAopSODEy7zUAyiI4MTLvNQROjI4ITLOhQeHRmccMlE4dGRwQmXDBSGjgxOuGSg8OjI4IRLBgqhI4MTLgNQ1NCRwQmX0Siq6MjghMuOKKroyOCESmkB3ZNqOjI4oTIaRW0rHRmcUNkPRRWdGJxQmYjiMzoxOGFSvD+KOXRicMJkgkExh04MTphMRDOHTgxOiAw6GkX9PDoxOCFySQ6K96N0YnDCI+8iNLPozOCEx9n90TxHZwYnNLJ+gKbpeTozOKFx+Ug009bRmcEJi+2uQPU4XTA4YXFbDqon6ILBCYnvHIZq7iK6YHDCYcT16B6jKwYnFPIe7Y8qehddMTihcNcYdI8toCsGJwx+8k183ECXDE4ITLwGH7NfoUsGx35HPmTwcQNdMzjWm/BINj5W/IOuGRzbHf1INn5ubaZrBsdyx0yN4KfmJrphcOz2/Ycj+Lqilm5k4tgscutZ+Jt9O93JxLFYycPjCOCSKN3JxLHX2Ee3IYAHXqVbmTjW2veFvgRQfzndMzi22v2ZvgRxzVK6Z3AstePzRQTx4fUoDI6dIs8MIoh1JzShMDh2OmMEgZz9MRqDY6WMHxPIjQ+iMjhWOmUUQbz2f+gMjpUuJIiVJ7egMzhW2okA2k5Zig+DY6PCIgK48iX8GBwbjSKAm36HL4Njo5H4u/n7+DM4NqrF118uIQCDY6P38PPXi4QADI6Nqpehu+t8IQiDY6W5qO4+VwjE4FhpFpr7zooSjMGx0nQ050cJyOBYaUYbikKCMjhWWluBYiBBGRw7LUJRTFAGx04VKIoJyuDYqQJFMUEZHDstQlFMUAbHThUoignK4NipCkUhQRkcO3ko1hOUwbGTQbGWoAyOnQyKOoIyOHaKoKgjKINjp2Eo1hKUwbHTSBR1BGVw7DQCRR1BGRw7jUSxlqAMjpW83VHUEZTBsdIeA1HUEpTBsdLXUNQvJSiDY6WvofhQCMrg2CjvABQfEJjBsdGJ2Sg+JDCDY6MfofmAwAyOhb6+G4roGwRmcCz0f2hm1xCYwbHPXoeheYHgDI51vD+gep7gDI51LjgUTeOrBGdwbDPiWlTTGwnO4FjGu6MPqgeIgcGxzEXlqBqmEgODY5cJN6B7eB0xMDhW2f+hTHT3EAuDY5NdnsxDt/RFYmFwLDLs2SJ83BUlFgbHHmNmDMHHuhuJicGxxnEzh+Hn5hpiYmjXhCJCcuWgaMVp95OH8/HT8EdiY2i3DMVgkmswinqc/8q+53cevm6tIjaGdpUoBpNcg1HU43zhK++ejr/11xEjQ7tlKLYlubZHsQ6HvMkzdyaAP64gTheL4imSqrBZFCfjlC+QQD7MJl7Hi6KxD8k0STQHku7K7pRg2vYnbvuJ5kyS6VnRFJPeSm9YLwFNJn5DRfN5NslzuGiqSGuD/tAgQS3IJ35ZUdFcRtKYWaKZThor+f06Ca6cnpgnmrW7kSy/FdXTu/QlPXnlDzZLDP5KPDw2mHwpms/3qSYpJt2Pn9qKikUVFYsqlkdJHwPOOH97YvH5HmuIg8cGB09D9cYxK0mC4x/IIai2yoqKxRUVFYtXEXKZh5xxYjYxWTPuQ+LhsUHGigGoKo6ZQ8Jd8WuP2NVXVCyuXP5f6wmfvCOOP7qIGLVOeJ64eGz09++gq7/6hkYSao/rDqdn6pZvtLKNMOh/9PFH5BK78/5KfDw2Ou4R/Cy+akodiWL2v3CSR8JEq5dvVIud+hxw0MH7ZRKPa39MnDw2yqvOxVfztKcXLqvNp4f6lA0ec/RAkqRpxfLlK2pW/U9tA1YoHH/wwXtmEqepJwlx8tjk38cQQk2r/qd21Rdq69Y2kWoi240ePXr33Qzxe/OQ9cTLY5PT7yH8WtZ21kbvGDB6x9GjR4/KoIfmfG0lcfPYJPODHUhL6xuam5qbm5qbmpubmpuam5uam5qbm5qbmpvbvHZ4X4LneS1r6tbUralbR8yyioqKBu4wevToYhLi5ePqiJ/HZt+YihOjtrVr1tStqVtTt6ZuTd2aNXX1giAgIAgIAtlFW8onoR48vZke8NjCzHE4lrnpB1F6wrCFy3Es85PvR+mRDLaweI/ROBZpPfMWeshjSzu+n4ljjZWnPU9PZbClmrK9cWzx+JFz6TGPLyl+eziOFeovu50E8Piy3V/Lx7HAm6d9RiIYvuy90wUn5bX96oDPSIgMOvi47TCcFDdv4n1REiODjqbvtCtOKlt95RmLSBSPTnJnjMVJWc03X72KxPHobJvXh+CkJvnXzxaSSIbOlnzlHZyU9Mp+pywkoQxdWHLgv3BSz9xjDnmLBDN0Zf23rhSclBJ97PDdHyfhPLpx/L35OCljzV1/XkAyeHRn98eGs9W9Xz+8xMPp4JM/3b2O5PDoVvFvzslkq6r56Z1RsocOGz5s+PBhQ7Nx/kuevfFZIVk8FDv89gS2nujtP1/FZl7J8GHDhw0fNryINCb/mTK1giTyUO137UFsJW9c/A5d6jN82PBhw4cNK8skzURnTpm6lOTy8HH073Yl+aLP3vqEoMsYPGzosKHDhg0tJh1Ep095eBlJ5+HHnHDikX1Jqqq7bltIcHlDh5aVlpaUlpYWeYTT6ulPP7ySrcEjgMhhxx0zmCSpn3n3lGbik1VSWlJaWlJaWlLaj7ConT7tlTlRthKPYLx9j5u4QxYJVv3qjBmzWkmE3NKS0tKS0tKS0tJcrLVq+rRpc6NsRR7BeQMHl/1XaTY91FBdU1NdU/3xRyRDv5LSgYUFG/XLwQpNH7339itzha3MI/QiBR3kkmKWvPeFT1rpDR7pJ6vgy/pEIh69YmVFRcWC9+auovd4OF+IRLKzI9nZkezsSHZ2JDs7kp0dyY5EBNkM2czrW1hQWFBYUJBF7NrWVC+uqKhYVLG4kV7n4fREXmFBYUFhQWFBYZ+sSFYkK5IVyYpEsiJZkazM1paW5pb/am5paWlcvbq2dnVt7era2rVC6vj/ty+0dTo91qoAAAAASUVORK5CYII=",impact:`${Yh}`,customerSuccess:`${Zh}`,learning:`${Xh}`},cm=[{title:"Constant Improvement",description:"Growth isn\u2019t a one-time effort. We\u2019re committed to evolving every day, both as a company and as individuals.",icon:lm.improve,bgColor:"#f3d0ff"},{title:"Pursue Excellence",description:"Excellence guides our actions, shaping our products and driving our customer success.",icon:lm.excellence,bgColor:"#ffe2c4"},{title:"Prioritize Meaningful Impact",description:"Our core metric is the value we create for customers by solving their most pressing needs.",icon:lm.impact,bgColor:"#f5efb8"},{title:"Champion Customer Success",description:"We see every interaction as a chance to build lasting, impactful relationships with our customers.",icon:lm.customerSuccess,bgColor:"#daf7e2"},{title:"Cultivate Learning & Collaboration",description:"We grow together through trust, open knowledge-sharing, and a spirit of collaboration.",icon:lm.learning,bgColor:"#d3f4ff"}],um=()=>(0,g.jsxs)($h,{children:[(0,g.jsx)(em,{children:"Our Values"}),(0,g.jsx)(tm,{children:cm.map(((e,t)=>(0,g.jsxs)(nm,{children:[(0,g.jsx)(rm,{bgColor:e.bgColor,children:(0,g.jsx)(om,{src:e.icon,alt:e.title})}),(0,g.jsxs)(im,{children:[(0,g.jsx)(am,{children:e.title}),(0,g.jsx)(sm,{children:e.description})]})]},t)))})]}),dm=n.p+"static/media/BPritam.1c37e43bb1da3c1ecdce.jpg",pm=(n.p,n.p+"static/media/AAshutosh.80b42e90d2ae210dca80.jpeg"),fm=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,hm=li.h1`
font-size: 2.5rem;
margin-bottom: 30px;
color: #333;
`,mm=li.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`,gm=li.div`
  background-color: ${e=>e.backg};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid black;
  &:hover {
    transform: translateY(-10px);
  }
`,xm=li.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 25%;
  border: 2px solid #454545;
`,ym=li.img`
  width: 100%;
  height: auto;
`,vm=li.h2`
  font-size: 1.2rem;
  margin: 10px 0;
  color: black;
  font-weight: 500;
`,bm=li.p`
  font-size: 1rem;
  color: #555;
`,wm=li.p`
  font-size: 0.9rem;
  color: #888;
`,km=[{name:"Ashutosh Mohapatra",role:"Frontend Lead",location:"Bangalore",imgSrc:`${pm}`,backg:"#e1fff6"},{name:"Pritam Kumar Nayak",role:"Frontend Developer",location:"Bangalore",imgSrc:`${dm}`,backg:"#f5e9fd"}],Sm=()=>(0,g.jsxs)(fm,{children:[(0,g.jsx)(hm,{children:"Our Team"}),(0,g.jsx)(mm,{children:km.map(((e,t)=>(0,g.jsxs)(gm,{backg:e.backg,children:[(0,g.jsx)(xm,{children:(0,g.jsx)(ym,{src:e.imgSrc,alt:e.backg})}),(0,g.jsx)(vm,{children:e.name}),(0,g.jsx)(bm,{children:e.role}),(0,g.jsx)(wm,{children:e.location})]},t)))})]}),Am=()=>(0,g.jsxs)("div",{children:[(0,g.jsx)(ah,{}),(0,g.jsx)(Ph,{}),(0,g.jsx)(bh,{}),(0,g.jsx)(um,{}),(0,g.jsx)(Jh,{}),(0,g.jsx)(Sm,{})]}),jm=n.p+"static/media/email.d27389667b81e4a5c88c.png",Cm=n.p+"static/media/telephone-call.ee034a176dc60e4b43bc.png",Em=n.p+"static/media/footer-bg.7bd67c0f73571d0acc02.png";const Om=n.p+"static/media/nav-icon1.721d5414c26365f117e71d46b6641cb2.svg";const Rm=n.p+"static/media/nav-icon2.178f497aa17b70c42df2a1a8c926ed01.svg";const Pm=n.p+"static/media/nav-icon3.08b285abb8e118b52637efa5d65c5367.svg",Tm=li.footer`
 background-color: rgb(13, 11, 62); /* Dark background color */
  /* background-image: url(${Em}); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #ffffff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`,zm=li.div`
  flex: 1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  h1 {
    font-size: 2em;
    margin-left: 35px;
    color: #ffffff;
  }
`,Mm=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }

  div {
    margin: 10px 20px;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    font-size: 1.1em;
    font-weight: 500;
    cursor:pointer;
    display:flex ;
  }
img{
  width: 20px;
  margin-right: 10px;
}
`,Im=li.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`,Lm=li.div`
  margin: 10px 20px;

  h3 {
    font-size: 1.2em;
    margin-bottom: 15px;
    color: #ffffff;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 8px 0;
      font-size: 1em;
      color: #a7a9ac;

      a {
        color: #a7a9ac;
        text-decoration: none;

        &:hover {
          color: #55e6a5;
        }
      }
    }
  }
`,Fm=li.div`
  /* margin-top: 20px; */
  font-size: 0.8em;
  text-align: center;
  background-color: rgb(13, 11, 62);

  @media (min-width: 768px) {
    /* margin-top: 20px; */
    text-align: center;
  }

  span {
    color: #55e6a5;
  }
`,Nm=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(13, 11, 62);
  padding: 20px;
  color: white;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    /* padding: 40px; */
  }
`,Dm=li.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    display: none;
  }

  img {
    /* height: 100px; */
    margin-right: 15px;
    width: 150px;
  }
`,Bm=li.div`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
    max-width: 209px;
  }
`,_m=li.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,Hm=li.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 80%;
  max-width: 300px;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
    width: 250px;
  }
`,Um=li.button`
  padding: 10px 20px;
  background-color: #ea5c49;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #d04b38;
  }
`;li.p`
  margin-top: 10px;
  font-size: 0.8em;
  color: #ccc;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 0;
  }

  a {
    color: #ccc;
    text-decoration: underline;

    &:hover {
      color: white;
    }
  }
`;function Wm(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Tm,{children:[(0,g.jsxs)(zm,{children:[(0,g.jsxs)(Nm,{children:[(0,g.jsx)(Dm,{children:(0,g.jsx)("img",{src:mn,alt:"AtomWalk Logo"})}),(0,g.jsx)(Bm,{children:"Stay up-to-date with AtomWalk Newsletter!"}),(0,g.jsxs)(_m,{children:[(0,g.jsx)(Hm,{type:"email",placeholder:"Email*",required:!0}),(0,g.jsx)(Um,{type:"submit",children:"Submit"})]})]}),(0,g.jsxs)(Mm,{children:[(0,g.jsxs)("div",{children:[" ",(0,g.jsx)("img",{src:jm,alt:"AtomWalk Logo"}),"info@atomwalk.com"]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{src:Cm,alt:"AtomWalk Logo"}),"+91-7259555003"]})]})]}),(0,g.jsxs)(Im,{children:[(0,g.jsxs)(Lm,{children:[(0,g.jsx)("h3",{children:"Quick Links"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/",children:"Home"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/aboutUs.html",children:"About Us"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/Product.html",children:"Products"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/contactUs.html",children:"Contact Us"})})]})]}),(0,g.jsxs)(Lm,{children:[(0,g.jsx)("h3",{children:"Products"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#webdev",children:"Manufacturing Business"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#appdev",children:"Consultancy Business"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#maintenance",children:"Chemical Industry"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#marketing",children:"Lab Management"})})]})]}),(0,g.jsxs)(Lm,{children:[(0,g.jsx)("h3",{children:"Resources"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/Blog.html",children:"Blog"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#appdev",children:"Support"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#maintenance",children:"Tutorials"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#marketing",children:"FAQs"})})]})]})]})]}),(0,g.jsx)(Fm,{children:(0,g.jsxs)("div",{style:{padding:"25px"},children:[(0,g.jsx)("p",{children:"\xa9 2024 Atomwalk. All Rights Reserved."}),(0,g.jsxs)("p",{children:["Privacy Policy | Terms & Conditions | Made with ",(0,g.jsx)("span",{children:"\u2665"})," Atomwalk"]}),(0,g.jsxs)("div",{className:"social-icon",children:[(0,g.jsx)("a",{href:"https://www.linkedin.com/company/atomwalk-technologies/",children:(0,g.jsx)("img",{src:Om,alt:"Icon"})}),(0,g.jsx)("a",{href:"#",children:(0,g.jsx)("img",{src:Rm,alt:"Icon"})}),(0,g.jsx)("a",{href:"#",children:(0,g.jsx)("img",{src:Pm,alt:"Icon"})})]})]})})]})}const qm=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Gm=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Km={};function Vm(e,t){return((t||Km).jsx?Gm:qm).test(e)}const Jm=/[ \t\n\f\r]/g;function Qm(e){return""===e.replace(Jm,"")}class Ym{constructor(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}}function Zm(e,t){const n={},r={};let o=-1;for(;++o<e.length;)Object.assign(n,e[o].property),Object.assign(r,e[o].normal);return new Ym(n,r,t)}function Xm(e){return e.toLowerCase()}Ym.prototype.property={},Ym.prototype.normal={},Ym.prototype.space=null;class $m{constructor(e,t){this.property=e,this.attribute=t}}$m.prototype.space=null,$m.prototype.boolean=!1,$m.prototype.booleanish=!1,$m.prototype.overloadedBoolean=!1,$m.prototype.number=!1,$m.prototype.commaSeparated=!1,$m.prototype.spaceSeparated=!1,$m.prototype.commaOrSpaceSeparated=!1,$m.prototype.mustUseProperty=!1,$m.prototype.defined=!1;let eg=0;const tg=lg(),ng=lg(),rg=lg(),og=lg(),ig=lg(),ag=lg(),sg=lg();function lg(){return 2**++eg}const cg=Object.keys(t);class ug extends $m{constructor(e,n,r,o){let i=-1;if(super(e,n),dg(this,"space",o),"number"===typeof r)for(;++i<cg.length;){const e=cg[i];dg(this,cg[i],(r&t[e])===t[e])}}}function dg(e,t,n){n&&(e[t]=n)}ug.prototype.defined=!0;const pg={}.hasOwnProperty;function fg(e){const t={},n={};let r;for(r in e.properties)if(pg.call(e.properties,r)){const o=e.properties[r],i=new ug(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[Xm(r)]=r,n[Xm(i.attribute)]=r}return new Ym(t,n,e.space)}const hg=fg({space:"xlink",transform:(e,t)=>"xlink:"+t.slice(5).toLowerCase(),properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),mg=fg({space:"xml",transform:(e,t)=>"xml:"+t.slice(3).toLowerCase(),properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function gg(e,t){return t in e?e[t]:t}function xg(e,t){return gg(e,t.toLowerCase())}const yg=fg({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:xg,properties:{xmlns:null,xmlnsXLink:null}}),vg=fg({transform:(e,t)=>"role"===t?t:"aria-"+t.slice(4).toLowerCase(),properties:{ariaActiveDescendant:null,ariaAtomic:ng,ariaAutoComplete:null,ariaBusy:ng,ariaChecked:ng,ariaColCount:og,ariaColIndex:og,ariaColSpan:og,ariaControls:ig,ariaCurrent:null,ariaDescribedBy:ig,ariaDetails:null,ariaDisabled:ng,ariaDropEffect:ig,ariaErrorMessage:null,ariaExpanded:ng,ariaFlowTo:ig,ariaGrabbed:ng,ariaHasPopup:null,ariaHidden:ng,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ig,ariaLevel:og,ariaLive:null,ariaModal:ng,ariaMultiLine:ng,ariaMultiSelectable:ng,ariaOrientation:null,ariaOwns:ig,ariaPlaceholder:null,ariaPosInSet:og,ariaPressed:ng,ariaReadOnly:ng,ariaRelevant:null,ariaRequired:ng,ariaRoleDescription:ig,ariaRowCount:og,ariaRowIndex:og,ariaRowSpan:og,ariaSelected:ng,ariaSetSize:og,ariaSort:null,ariaValueMax:og,ariaValueMin:og,ariaValueNow:og,ariaValueText:null,role:null}}),bg=fg({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:xg,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ag,acceptCharset:ig,accessKey:ig,action:null,allow:null,allowFullScreen:tg,allowPaymentRequest:tg,allowUserMedia:tg,alt:null,as:null,async:tg,autoCapitalize:null,autoComplete:ig,autoFocus:tg,autoPlay:tg,blocking:ig,capture:null,charSet:null,checked:tg,cite:null,className:ig,cols:og,colSpan:null,content:null,contentEditable:ng,controls:tg,controlsList:ig,coords:og|ag,crossOrigin:null,data:null,dateTime:null,decoding:null,default:tg,defer:tg,dir:null,dirName:null,disabled:tg,download:rg,draggable:ng,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:tg,formTarget:null,headers:ig,height:og,hidden:tg,high:og,href:null,hrefLang:null,htmlFor:ig,httpEquiv:ig,id:null,imageSizes:null,imageSrcSet:null,inert:tg,inputMode:null,integrity:null,is:null,isMap:tg,itemId:null,itemProp:ig,itemRef:ig,itemScope:tg,itemType:ig,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:tg,low:og,manifest:null,max:null,maxLength:og,media:null,method:null,min:null,minLength:og,multiple:tg,muted:tg,name:null,nonce:null,noModule:tg,noValidate:tg,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:tg,optimum:og,pattern:null,ping:ig,placeholder:null,playsInline:tg,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:tg,referrerPolicy:null,rel:ig,required:tg,reversed:tg,rows:og,rowSpan:og,sandbox:ig,scope:null,scoped:tg,seamless:tg,selected:tg,shadowRootClonable:tg,shadowRootDelegatesFocus:tg,shadowRootMode:null,shape:null,size:og,sizes:null,slot:null,span:og,spellCheck:ng,src:null,srcDoc:null,srcLang:null,srcSet:null,start:og,step:null,style:null,tabIndex:og,target:null,title:null,translate:null,type:null,typeMustMatch:tg,useMap:null,value:ng,width:og,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ig,axis:null,background:null,bgColor:null,border:og,borderColor:null,bottomMargin:og,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:tg,declare:tg,event:null,face:null,frame:null,frameBorder:null,hSpace:og,leftMargin:og,link:null,longDesc:null,lowSrc:null,marginHeight:og,marginWidth:og,noResize:tg,noHref:tg,noShade:tg,noWrap:tg,object:null,profile:null,prompt:null,rev:null,rightMargin:og,rules:null,scheme:null,scrolling:ng,standby:null,summary:null,text:null,topMargin:og,valueType:null,version:null,vAlign:null,vLink:null,vSpace:og,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:tg,disableRemotePlayback:tg,prefix:null,property:null,results:og,security:null,unselectable:null}}),wg=fg({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:gg,properties:{about:sg,accentHeight:og,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:og,amplitude:og,arabicForm:null,ascent:og,attributeName:null,attributeType:null,azimuth:og,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:og,by:null,calcMode:null,capHeight:og,className:ig,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:og,diffuseConstant:og,direction:null,display:null,dur:null,divisor:og,dominantBaseline:null,download:tg,dx:null,dy:null,edgeMode:null,editable:null,elevation:og,enableBackground:null,end:null,event:null,exponent:og,externalResourcesRequired:null,fill:null,fillOpacity:og,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ag,g2:ag,glyphName:ag,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:og,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:og,horizOriginX:og,horizOriginY:og,id:null,ideographic:og,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:og,k:og,k1:og,k2:og,k3:og,k4:og,kernelMatrix:sg,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:og,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:og,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:og,overlineThickness:og,paintOrder:null,panose1:null,path:null,pathLength:og,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ig,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:og,pointsAtY:og,pointsAtZ:og,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:sg,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:sg,rev:sg,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:sg,requiredFeatures:sg,requiredFonts:sg,requiredFormats:sg,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:og,specularExponent:og,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:og,strikethroughThickness:og,string:null,stroke:null,strokeDashArray:sg,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:og,strokeOpacity:og,strokeWidth:null,style:null,surfaceScale:og,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:sg,tabIndex:og,tableValues:null,target:null,targetX:og,targetY:og,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:sg,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:og,underlineThickness:og,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:og,values:null,vAlphabetic:og,vMathematical:og,vectorEffect:null,vHanging:og,vIdeographic:og,version:null,vertAdvY:og,vertOriginX:og,vertOriginY:og,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:og,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),kg=Zm([mg,hg,yg,vg,bg],"html"),Sg=Zm([mg,hg,yg,vg,wg],"svg"),Ag=/^data[-\w.:]+$/i,jg=/-[a-z]/g,Cg=/[A-Z]/g;function Eg(e){return"-"+e.toLowerCase()}function Og(e){return e.charAt(1).toUpperCase()}const Rg={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var Pg=n(4222);const Tg=Pg.default||Pg,zg=Ig("end"),Mg=Ig("start");function Ig(e){return function(t){const n=t&&t.position&&t.position[e]||{};if("number"===typeof n.line&&n.line>0&&"number"===typeof n.column&&n.column>0)return{line:n.line,column:n.column,offset:"number"===typeof n.offset&&n.offset>-1?n.offset:void 0}}}function Lg(e){return e&&"object"===typeof e?"position"in e||"type"in e?Ng(e.position):"start"in e||"end"in e?Ng(e):"line"in e||"column"in e?Fg(e):"":""}function Fg(e){return Dg(e&&e.line)+":"+Dg(e&&e.column)}function Ng(e){return Fg(e&&e.start)+"-"+Fg(e&&e.end)}function Dg(e){return e&&"number"===typeof e?e:1}class Bg extends Error{constructor(e,t,n){super(),"string"===typeof t&&(n=t,t=void 0);let r="",o={},i=!1;if(t&&(o="line"in t&&"column"in t||"start"in t&&"end"in t?{place:t}:"type"in t?{ancestors:[t],place:t.position}:{...t}),"string"===typeof e?r=e:!o.cause&&e&&(i=!0,r=e.message,o.cause=e),!o.ruleId&&!o.source&&"string"===typeof n){const e=n.indexOf(":");-1===e?o.ruleId=n:(o.source=n.slice(0,e),o.ruleId=n.slice(e+1))}if(!o.place&&o.ancestors&&o.ancestors){const e=o.ancestors[o.ancestors.length-1];e&&(o.place=e.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=r,this.line=a?a.line:void 0,this.name=Lg(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=i&&o.cause&&"string"===typeof o.cause.stack?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}Bg.prototype.file="",Bg.prototype.name="",Bg.prototype.reason="",Bg.prototype.message="",Bg.prototype.stack="",Bg.prototype.column=void 0,Bg.prototype.line=void 0,Bg.prototype.ancestors=void 0,Bg.prototype.cause=void 0,Bg.prototype.fatal=void 0,Bg.prototype.place=void 0,Bg.prototype.ruleId=void 0,Bg.prototype.source=void 0;const _g={}.hasOwnProperty,Hg=new Map,Ug=/[A-Z]/g,Wg=/-([a-z])/g,qg=new Set(["table","tbody","thead","tfoot","tr"]),Gg=new Set(["td","th"]),Kg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Vg(e,t){if(!t||void 0===t.Fragment)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if("function"!==typeof t.jsxDEV)throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=function(e,t){return n;function n(n,r,o,i){const a=Array.isArray(o.children),s=Mg(n);return t(r,o,i,a,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}(n,t.jsxDEV)}else{if("function"!==typeof t.jsx)throw new TypeError("Expected `jsx` in production options");if("function"!==typeof t.jsxs)throw new TypeError("Expected `jsxs` in production options");r=function(e,t,n){return r;function r(e,r,o,i){const a=Array.isArray(o.children)?n:t;return i?a(r,o,i):a(r,o)}}(0,t.jsx,t.jsxs)}const o={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:!1!==t.passKeys,passNode:t.passNode||!1,schema:"svg"===t.space?Sg:kg,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:!1!==t.tableCellAlignToStyle},i=Jg(o,e,void 0);return i&&"string"!==typeof i?i:o.create(e,o.Fragment,{children:i||void 0},void 0)}function Jg(e,t,n){return"element"===t.type?function(e,t,n){const r=e.schema;let o=r;"svg"===t.tagName.toLowerCase()&&"html"===r.space&&(o=Sg,e.schema=o);e.ancestors.push(t);const i=$g(e,t.tagName,!1),a=function(e,t){const n={};let r,o;for(o in t.properties)if("children"!==o&&_g.call(t.properties,o)){const i=Xg(e,o,t.properties[o]);if(i){const[o,a]=i;e.tableCellAlignToStyle&&"align"===o&&"string"===typeof a&&Gg.has(t.tagName)?r=a:n[o]=a}}if(r){(n.style||(n.style={}))["css"===e.stylePropertyNameCase?"text-align":"textAlign"]=r}return n}(e,t);let s=Zg(e,t);qg.has(t.tagName)&&(s=s.filter((function(e){return"string"!==typeof e||!("object"===typeof(t=e)?"text"===t.type&&Qm(t.value):Qm(t));var t})));return Qg(e,a,i,t),Yg(a,s),e.ancestors.pop(),e.schema=r,e.create(t,i,a,n)}(e,t,n):"mdxFlowExpression"===t.type||"mdxTextExpression"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater){const n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}ex(e,t.position)}(e,t):"mdxJsxFlowElement"===t.type||"mdxJsxTextElement"===t.type?function(e,t,n){const r=e.schema;let o=r;"svg"===t.name&&"html"===r.space&&(o=Sg,e.schema=o);e.ancestors.push(t);const i=null===t.name?e.Fragment:$g(e,t.name,!0),a=function(e,t){const n={};for(const r of t.attributes)if("mdxJsxExpressionAttribute"===r.type)if(r.data&&r.data.estree&&e.evaluater){const t=r.data.estree.body[0];t.type;const o=t.expression;o.type;const i=o.properties[0];i.type,Object.assign(n,e.evaluater.evaluateExpression(i.argument))}else ex(e,t.position);else{const o=r.name;let i;if(r.value&&"object"===typeof r.value)if(r.value.data&&r.value.data.estree&&e.evaluater){const t=r.value.data.estree.body[0];t.type,i=e.evaluater.evaluateExpression(t.expression)}else ex(e,t.position);else i=null===r.value||r.value;n[o]=i}return n}(e,t),s=Zg(e,t);return Qg(e,a,i,t),Yg(a,s),e.ancestors.pop(),e.schema=r,e.create(t,i,a,n)}(e,t,n):"mdxjsEsm"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ex(e,t.position)}(e,t):"root"===t.type?function(e,t,n){const r={};return Yg(r,Zg(e,t)),e.create(t,e.Fragment,r,n)}(e,t,n):"text"===t.type?function(e,t){return t.value}(0,t):void 0}function Qg(e,t,n,r){"string"!==typeof n&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Yg(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Zg(e,t){const n=[];let r=-1;const o=e.passKeys?new Map:Hg;for(;++r<t.children.length;){const i=t.children[r];let a;if(e.passKeys){const e="element"===i.type?i.tagName:"mdxJsxFlowElement"===i.type||"mdxJsxTextElement"===i.type?i.name:void 0;if(e){const t=o.get(e)||0;a=e+"-"+t,o.set(e,t+1)}}const s=Jg(e,i,a);void 0!==s&&n.push(s)}return n}function Xg(e,t,n){const r=function(e,t){const n=Xm(t);let r=t,o=$m;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&"data"===n.slice(0,4)&&Ag.test(t)){if("-"===t.charAt(4)){const e=t.slice(5).replace(jg,Og);r="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{const e=t.slice(4);if(!jg.test(e)){let n=e.replace(Cg,Eg);"-"!==n.charAt(0)&&(n="-"+n),t="data"+n}}o=ug}return new o(r,t)}(e.schema,t);if(!(null===n||void 0===n||"number"===typeof n&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?function(e,t){const n=t||{};return(""===e[e.length-1]?[...e,""]:e).join((n.padRight?" ":"")+","+(!1===n.padLeft?"":" ")).trim()}(n):function(e){return e.join(" ").trim()}(n)),"style"===r.property){let t="object"===typeof n?n:function(e,t){const n={};try{Tg(t,r)}catch(o){if(!e.ignoreInvalidStyle){const t=o,n=new Bg("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:t,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Kg+"#cannot-parse-style-attribute",n}}return n;function r(e,t){let r=e;"--"!==r.slice(0,2)&&("-ms-"===r.slice(0,4)&&(r="ms-"+r.slice(4)),r=r.replace(Wg,nx)),n[r]=t}}(e,String(n));return"css"===e.stylePropertyNameCase&&(t=function(e){const t={};let n;for(n in e)_g.call(e,n)&&(t[tx(n)]=e[n]);return t}(t)),["style",t]}return["react"===e.elementAttributeNameCase&&r.space?Rg[r.property]||r.property:r.attribute,n]}}function $g(e,t,n){let r;if(n)if(t.includes(".")){const e=t.split(".");let n,o=-1;for(;++o<e.length;){const t=Vm(e[o])?{type:"Identifier",name:e[o]}:{type:"Literal",value:e[o]};n=n?{type:"MemberExpression",object:n,property:t,computed:Boolean(o&&"Literal"===t.type),optional:!1}:t}r=n}else r=Vm(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};else r={type:"Literal",value:t};if("Literal"===r.type){const t=r.value;return _g.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);ex(e)}function ex(e,t){const n=new Bg("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Kg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function tx(e){let t=e.replace(Ug,rx);return"ms-"===t.slice(0,3)&&(t="-"+t),t}function nx(e,t){return t.toUpperCase()}function rx(e){return"-"+e.toLowerCase()}const ox={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},ix={};function ax(e,t,n){if(function(e){return Boolean(e&&"object"===typeof e)}(e)){if("value"in e)return"html"!==e.type||n?e.value:"";if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return sx(e.children,t,n)}return Array.isArray(e)?sx(e,t,n):""}function sx(e,t,n){const r=[];let o=-1;for(;++o<e.length;)r[o]=ax(e[o],t,n);return r.join("")}function lx(e,t,n,r){const o=e.length;let i,a=0;if(t=t<0?-t>o?0:o+t:t>o?o:t,n=n>0?n:0,r.length<1e4)i=Array.from(r),i.unshift(t,n),e.splice(...i);else for(n&&e.splice(t,n);a<r.length;)i=r.slice(a,a+1e4),i.unshift(t,0),e.splice(...i),a+=1e4,t+=1e4}function cx(e,t){return e.length>0?(lx(e,e.length,0,t),e):t}class ux{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const n=null===t||void 0===t?Number.POSITIVE_INFINITY:t;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){const r=t||0;this.setCursor(Math.trunc(e));const o=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return n&&dx(this.left,n),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),dx(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),dx(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&0===this.right.length||e<0&&0===this.left.length))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);dx(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);dx(this.left,t.reverse())}}}function dx(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function px(e){const t={};let n,r,o,i,a,s,l,c=-1;const u=new ux(e);for(;++c<u.length;){for(;c in t;)c=t[c];if(n=u.get(c),c&&"chunkFlow"===n[1].type&&"listItemPrefix"===u.get(c-1)[1].type&&(s=n[1]._tokenizer.events,o=0,o<s.length&&"lineEndingBlank"===s[o][1].type&&(o+=2),o<s.length&&"content"===s[o][1].type))for(;++o<s.length&&"content"!==s[o][1].type;)"chunkText"===s[o][1].type&&(s[o][1]._isInFirstContentOfListItem=!0,o++);if("enter"===n[0])n[1].contentType&&(Object.assign(t,fx(u,c)),c=t[c],l=!0);else if(n[1]._container){for(o=c,r=void 0;o--&&(i=u.get(o),"lineEnding"===i[1].type||"lineEndingBlank"===i[1].type);)"enter"===i[0]&&(r&&(u.get(r)[1].type="lineEndingBlank"),i[1].type="lineEnding",r=o);r&&(n[1].end=Object.assign({},u.get(r)[1].start),a=u.slice(r,c),a.unshift(n),u.splice(r,c-r+1,a))}}return lx(e,0,Number.POSITIVE_INFINITY,u.slice(0)),!l}function fx(e,t){const n=e.get(t)[1],r=e.get(t)[2];let o=t-1;const i=[],a=n._tokenizer||r.parser[n.contentType](n.start),s=a.events,l=[],c={};let u,d,p=-1,f=n,h=0,m=0;const g=[m];for(;f;){for(;e.get(++o)[1]!==f;);i.push(o),f._tokenizer||(u=r.sliceStream(f),f.next||u.push(null),d&&a.defineSkip(f.start),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(u),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),d=f,f=f.next}for(f=n;++p<s.length;)"exit"===s[p][0]&&"enter"===s[p-1][0]&&s[p][1].type===s[p-1][1].type&&s[p][1].start.line!==s[p][1].end.line&&(m=p+1,g.push(m),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(a.events=[],f?(f._tokenizer=void 0,f.previous=void 0):g.pop(),p=g.length;p--;){const t=s.slice(g[p],g[p+1]),n=i.pop();l.push([n,n+t.length-1]),e.splice(n,2,t)}for(l.reverse(),p=-1;++p<l.length;)c[h+l[p][0]]=h+l[p][1],h+=l[p][1]-l[p][0]-1;return c}const hx={}.hasOwnProperty;function mx(e,t){let n;for(n in t){const r=(hx.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let i;if(o)for(i in o){hx.call(r,i)||(r[i]=[]);const e=o[i];gx(r[i],Array.isArray(e)?e:e?[e]:[])}}}function gx(e,t){let n=-1;const r=[];for(;++n<t.length;)("after"===t[n].add?e:r).push(t[n]);lx(e,0,0,r)}const xx=Rx(/[A-Za-z]/),yx=Rx(/[\dA-Za-z]/),vx=Rx(/[#-'*+\--9=?A-Z^-~]/);function bx(e){return null!==e&&(e<32||127===e)}const wx=Rx(/\d/),kx=Rx(/[\dA-Fa-f]/),Sx=Rx(/[!-/:-@[-`{-~]/);function Ax(e){return null!==e&&e<-2}function jx(e){return null!==e&&(e<0||32===e)}function Cx(e){return-2===e||-1===e||32===e}const Ex=Rx(/\p{P}|\p{S}/u),Ox=Rx(/\s/);function Rx(e){return function(t){return null!==t&&t>-1&&e.test(String.fromCharCode(t))}}function Px(e,t,n,r){const o=r?r-1:Number.POSITIVE_INFINITY;let i=0;return function(r){if(Cx(r))return e.enter(n),a(r);return t(r)};function a(r){return Cx(r)&&i++<o?(e.consume(r),a):(e.exit(n),t(r))}}const Tx={tokenize:function(e){const t=e.attempt(this.parser.constructs.contentInitial,(function(n){if(null===n)return void e.consume(n);return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),Px(e,t,"linePrefix")}),(function(t){return e.enter("paragraph"),r(t)}));let n;return t;function r(t){const r=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){return null===t?(e.exit("chunkText"),e.exit("paragraph"),void e.consume(t)):Ax(t)?(e.consume(t),e.exit("chunkText"),r):(e.consume(t),o)}}};const zx={tokenize:function(e){const t=this,n=[];let r,o,i,a=0;return s;function s(r){if(a<n.length){const o=n[a];return t.containerState=o[1],e.attempt(o[0].continuation,l,c)(r)}return c(r)}function l(e){if(a++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,r&&y();const n=t.events.length;let o,i=n;for(;i--;)if("exit"===t.events[i][0]&&"chunkFlow"===t.events[i][1].type){o=t.events[i][1].end;break}x(a);let s=n;for(;s<t.events.length;)t.events[s][1].end=Object.assign({},o),s++;return lx(t.events,i+1,0,t.events.slice(n)),t.events.length=s,c(e)}return s(e)}function c(o){if(a===n.length){if(!r)return p(o);if(r.currentConstruct&&r.currentConstruct.concrete)return h(o);t.interrupt=Boolean(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Mx,u,d)(o)}function u(e){return r&&y(),x(a),p(e)}function d(e){return t.parser.lazy[t.now().line]=a!==n.length,i=t.now().offset,h(e)}function p(n){return t.containerState={},e.attempt(Mx,f,h)(n)}function f(e){return a++,n.push([t.currentConstruct,t.containerState]),p(e)}function h(n){return null===n?(r&&y(),x(0),void e.consume(n)):(r=r||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:o,_tokenizer:r}),m(n))}function m(n){return null===n?(g(e.exit("chunkFlow"),!0),x(0),void e.consume(n)):Ax(n)?(e.consume(n),g(e.exit("chunkFlow")),a=0,t.interrupt=void 0,s):(e.consume(n),m)}function g(e,n){const s=t.sliceStream(e);if(n&&s.push(null),e.previous=o,o&&(o.next=e),o=e,r.defineSkip(e.start),r.write(s),t.parser.lazy[e.start.line]){let e=r.events.length;for(;e--;)if(r.events[e][1].start.offset<i&&(!r.events[e][1].end||r.events[e][1].end.offset>i))return;const n=t.events.length;let o,s,l=n;for(;l--;)if("exit"===t.events[l][0]&&"chunkFlow"===t.events[l][1].type){if(o){s=t.events[l][1].end;break}o=!0}for(x(a),e=n;e<t.events.length;)t.events[e][1].end=Object.assign({},s),e++;lx(t.events,l+1,0,t.events.slice(n)),t.events.length=e}}function x(r){let o=n.length;for(;o-- >r;){const r=n[o];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function y(){r.write([null]),o=void 0,r=void 0,t.containerState._closeFlow=void 0}}},Mx={tokenize:function(e,t,n){return Px(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}};const Ix={tokenize:function(e,t,n){return function(t){return Cx(t)?Px(e,r,"linePrefix")(t):r(t)};function r(e){return null===e||Ax(e)?t(e):n(e)}},partial:!0};const Lx={tokenize:function(e,t){let n;return function(t){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(t)};function r(t){return null===t?o(t):Ax(t)?e.check(Fx,i,o)(t):(e.consume(t),r)}function o(n){return e.exit("chunkContent"),e.exit("content"),t(n)}function i(t){return e.consume(t),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}},resolve:function(e){return px(e),e}},Fx={tokenize:function(e,t,n){const r=this;return function(t){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),Px(e,o,"linePrefix")};function o(o){if(null===o||Ax(o))return n(o);const i=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}},partial:!0};const Nx={tokenize:function(e){const t=this,n=e.attempt(Ix,(function(r){if(null===r)return void e.consume(r);return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}),e.attempt(this.parser.constructs.flowInitial,r,Px(e,e.attempt(this.parser.constructs.flow,r,e.attempt(Lx,r)),"linePrefix")));return n;function r(r){if(null!==r)return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t.currentConstruct=void 0,n;e.consume(r)}}};const Dx={resolveAll:Ux()},Bx=Hx("string"),_x=Hx("text");function Hx(e){return{tokenize:function(t){const n=this,r=this.parser.constructs[e],o=t.attempt(r,i,a);return i;function i(e){return l(e)?o(e):a(e)}function a(e){if(null!==e)return t.enter("data"),t.consume(e),s;t.consume(e)}function s(e){return l(e)?(t.exit("data"),o(e)):(t.consume(e),s)}function l(e){if(null===e)return!0;const t=r[e];let o=-1;if(t)for(;++o<t.length;){const e=t[o];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}},resolveAll:Ux("text"===e?Wx:void 0)}}function Ux(e){return function(t,n){let r,o=-1;for(;++o<=t.length;)void 0===r?t[o]&&"data"===t[o][1].type&&(r=o,o++):t[o]&&"data"===t[o][1].type||(o!==r+2&&(t[r][1].end=t[o-1][1].end,t.splice(r+2,o-r-2),o=r+2),r=void 0);return e?e(t,n):t}}function Wx(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){const r=e[n-1][1],o=t.sliceStream(r);let i,a=o.length,s=-1,l=0;for(;a--;){const e=o[a];if("string"===typeof e){for(s=e.length;32===e.charCodeAt(s-1);)l++,s--;if(s)break;s=-1}else if(-2===e)i=!0,l++;else if(-1!==e){a++;break}}if(l){const o={type:n===e.length||i||l<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-l,offset:r.end.offset-l,_index:r.start._index+a,_bufferIndex:a?s:r.start._bufferIndex+s},end:Object.assign({},r.end)};r.end=Object.assign({},o.start),r.start.offset===r.end.offset?Object.assign(r,o):(e.splice(n,0,["enter",o,t],["exit",o,t]),n+=2)}n++}return e}function qx(e,t,n){const r=[];let o=-1;for(;++o<e.length;){const i=e[o].resolveAll;i&&!r.includes(i)&&(t=i(t,n),r.push(i))}return t}function Gx(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const o={},i=[];let a=[],s=[],l=!0;const c={consume:function(e){Ax(e)?(r.line++,r.column=1,r.offset+=-3===e?2:1,b()):-1!==e&&(r.column++,r.offset++);r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++));u.previous=e,l=!0},enter:function(e,t){const n=t||{};return n.type=e,n.start=h(),u.events.push(["enter",n,u]),s.push(n),n},exit:function(e){const t=s.pop();return t.end=h(),u.events.push(["exit",t,u]),t},attempt:y((function(e,t){v(e,t.from)})),check:y(x),interrupt:y(x,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:f,sliceSerialize:function(e,t){return function(e,t){let n=-1;const r=[];let o;for(;++n<e.length;){const i=e[n];let a;if("string"===typeof i)a=i;else switch(i){case-5:a="\r";break;case-4:a="\n";break;case-3:a="\r\n";break;case-2:a=t?" ":"\t";break;case-1:if(!t&&o)continue;a=" ";break;default:a=String.fromCharCode(i)}o=-2===i,r.push(a)}return r.join("")}(f(e),t)},now:h,defineSkip:function(e){o[e.line]=e.column,b()},write:function(e){if(a=cx(a,e),m(),null!==a[a.length-1])return[];return v(t,0),u.events=qx(i,u.events,u),u.events}};let d,p=t.tokenize.call(u,c);return t.resolveAll&&i.push(t),u;function f(e){return function(e,t){const n=t.start._index,r=t.start._bufferIndex,o=t.end._index,i=t.end._bufferIndex;let a;if(n===o)a=[e[n].slice(r,i)];else{if(a=e.slice(n,o),r>-1){const e=a[0];"string"===typeof e?a[0]=e.slice(r):a.shift()}i>0&&a.push(e[o].slice(0,i))}return a}(a,e)}function h(){const{line:e,column:t,offset:n,_index:o,_bufferIndex:i}=r;return{line:e,column:t,offset:n,_index:o,_bufferIndex:i}}function m(){let e;for(;r._index<a.length;){const t=a[r._index];if("string"===typeof t)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)g(t.charCodeAt(r._bufferIndex));else g(t)}}function g(e){l=void 0,d=e,p=p(e)}function x(e,t){t.restore()}function y(e,t){return function(n,o,i){let a,d,p,f;return Array.isArray(n)?m(n):"tokenize"in n?m([n]):function(e){return t;function t(t){const n=null!==t&&e[t],r=null!==t&&e.null;return m([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}(n);function m(e){return a=e,d=0,0===e.length?i:g(e[d])}function g(e){return function(n){f=function(){const e=h(),t=u.previous,n=u.currentConstruct,o=u.events.length,i=Array.from(s);return{restore:a,from:o};function a(){r=e,u.previous=t,u.currentConstruct=n,u.events.length=o,s=i,b()}}(),p=e,e.partial||(u.currentConstruct=e);if(e.name&&u.parser.constructs.disable.null.includes(e.name))return y(n);return e.tokenize.call(t?Object.assign(Object.create(u),t):u,c,x,y)(n)}}function x(t){return l=!0,e(p,f),o}function y(e){return l=!0,f.restore(),++d<a.length?g(a[d]):i}}}function v(e,t){e.resolveAll&&!i.includes(e)&&i.push(e),e.resolve&&lx(u.events,t,u.events.length-t,e.resolve(u.events.slice(t),u)),e.resolveTo&&(u.events=e.resolveTo(u.events,u))}function b(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}const Kx={name:"thematicBreak",tokenize:function(e,t,n){let r,o=0;return function(t){return e.enter("thematicBreak"),function(e){return r=e,i(e)}(t)};function i(i){return i===r?(e.enter("thematicBreakSequence"),a(i)):o>=3&&(null===i||Ax(i))?(e.exit("thematicBreak"),t(i)):n(i)}function a(t){return t===r?(e.consume(t),o++,a):(e.exit("thematicBreakSequence"),Cx(t)?Px(e,i,"whitespace")(t):i(t))}}};const Vx={name:"list",tokenize:function(e,t,n){const r=this,o=r.events[r.events.length-1];let i=o&&"linePrefix"===o[1].type?o[2].sliceSerialize(o[1],!0).length:0,a=0;return function(t){const o=r.containerState.type||(42===t||43===t||45===t?"listUnordered":"listOrdered");if("listUnordered"===o?!r.containerState.marker||t===r.containerState.marker:wx(t)){if(r.containerState.type||(r.containerState.type=o,e.enter(o,{_container:!0})),"listUnordered"===o)return e.enter("listItemPrefix"),42===t||45===t?e.check(Kx,n,l)(t):l(t);if(!r.interrupt||49===t)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(t)}return n(t)};function s(t){return wx(t)&&++a<10?(e.consume(t),s):(!r.interrupt||a<2)&&(r.containerState.marker?t===r.containerState.marker:41===t||46===t)?(e.exit("listItemValue"),l(t)):n(t)}function l(t){return e.enter("listItemMarker"),e.consume(t),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||t,e.check(Ix,r.interrupt?n:c,e.attempt(Jx,d,u))}function c(e){return r.containerState.initialBlankLine=!0,i++,d(e)}function u(t){return Cx(t)?(e.enter("listItemPrefixWhitespace"),e.consume(t),e.exit("listItemPrefixWhitespace"),d):n(t)}function d(n){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(n)}},continuation:{tokenize:function(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Ix,o,i);function o(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Px(e,t,"listItemIndent",r.containerState.size+1)(n)}function i(n){return r.containerState.furtherBlankLines||!Cx(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Qx,t,a)(n))}function a(o){return r.containerState._closeFlow=!0,r.interrupt=void 0,Px(e,e.attempt(Vx,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}},exit:function(e){e.exit(this.containerState.type)}},Jx={tokenize:function(e,t,n){const r=this;return Px(e,(function(e){const o=r.events[r.events.length-1];return!Cx(e)&&o&&"listItemPrefixWhitespace"===o[1].type?t(e):n(e)}),"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5)},partial:!0},Qx={tokenize:function(e,t,n){const r=this;return Px(e,(function(e){const o=r.events[r.events.length-1];return o&&"listItemIndent"===o[1].type&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(e):n(e)}),"listItemIndent",r.containerState.size+1)},partial:!0};const Yx={name:"blockQuote",tokenize:function(e,t,n){const r=this;return function(t){if(62===t){const n=r.containerState;return n.open||(e.enter("blockQuote",{_container:!0}),n.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(t),e.exit("blockQuoteMarker"),o}return n(t)};function o(n){return Cx(n)?(e.enter("blockQuotePrefixWhitespace"),e.consume(n),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(n))}},continuation:{tokenize:function(e,t,n){const r=this;return function(t){if(Cx(t))return Px(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t);return o(t)};function o(r){return e.attempt(Yx,t,n)(r)}}},exit:function(e){e.exit("blockQuote")}};function Zx(e,t,n,r,o,i,a,s,l){const c=l||Number.POSITIVE_INFINITY;let u=0;return function(t){if(60===t)return e.enter(r),e.enter(o),e.enter(i),e.consume(t),e.exit(i),d;if(null===t||32===t||41===t||bx(t))return n(t);return e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),h(t)};function d(n){return 62===n?(e.enter(i),e.consume(n),e.exit(i),e.exit(o),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),p(n))}function p(t){return 62===t?(e.exit("chunkString"),e.exit(s),d(t)):null===t||60===t||Ax(t)?n(t):(e.consume(t),92===t?f:p)}function f(t){return 60===t||62===t||92===t?(e.consume(t),p):p(t)}function h(o){return u||null!==o&&41!==o&&!jx(o)?u<c&&40===o?(e.consume(o),u++,h):41===o?(e.consume(o),u--,h):null===o||32===o||40===o||bx(o)?n(o):(e.consume(o),92===o?m:h):(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),t(o))}function m(t){return 40===t||41===t||92===t?(e.consume(t),h):h(t)}}function Xx(e,t,n,r,o,i){const a=this;let s,l=0;return function(t){return e.enter(r),e.enter(o),e.consume(t),e.exit(o),e.enter(i),c};function c(d){return l>999||null===d||91===d||93===d&&!s||94===d&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(d):93===d?(e.exit(i),e.enter(o),e.consume(d),e.exit(o),e.exit(r),t):Ax(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),u(d))}function u(t){return null===t||91===t||93===t||Ax(t)||l++>999?(e.exit("chunkString"),c(t)):(e.consume(t),s||(s=!Cx(t)),92===t?d:u)}function d(t){return 91===t||92===t||93===t?(e.consume(t),l++,u):u(t)}}function $x(e,t,n,r,o,i){let a;return function(t){if(34===t||39===t||40===t)return e.enter(r),e.enter(o),e.consume(t),e.exit(o),a=40===t?41:t,s;return n(t)};function s(n){return n===a?(e.enter(o),e.consume(n),e.exit(o),e.exit(r),t):(e.enter(i),l(n))}function l(t){return t===a?(e.exit(i),s(a)):null===t?n(t):Ax(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),Px(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(t))}function c(t){return t===a||null===t||Ax(t)?(e.exit("chunkString"),l(t)):(e.consume(t),92===t?u:c)}function u(t){return t===a||92===t?(e.consume(t),c):c(t)}}function ey(e,t){let n;return function r(o){if(Ax(o))return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n=!0,r;if(Cx(o))return Px(e,r,n?"linePrefix":"lineSuffix")(o);return t(o)}}function ty(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ny={name:"definition",tokenize:function(e,t,n){const r=this;let o;return function(t){return e.enter("definition"),function(t){return Xx.call(r,e,i,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(t)}(t)};function i(t){return o=ty(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),a):n(t)}function a(t){return jx(t)?ey(e,s)(t):s(t)}function s(t){return Zx(e,l,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(t)}function l(t){return e.attempt(ry,c,c)(t)}function c(t){return Cx(t)?Px(e,u,"whitespace")(t):u(t)}function u(i){return null===i||Ax(i)?(e.exit("definition"),r.parser.defined.push(o),t(i)):n(i)}}},ry={tokenize:function(e,t,n){return function(t){return jx(t)?ey(e,r)(t):n(t)};function r(t){return $x(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(t)}function o(t){return Cx(t)?Px(e,i,"whitespace")(t):i(t)}function i(e){return null===e||Ax(e)?t(e):n(e)}},partial:!0};const oy={name:"codeIndented",tokenize:function(e,t,n){const r=this;return function(t){return e.enter("codeIndented"),Px(e,o,"linePrefix",5)(t)};function o(e){const t=r.events[r.events.length-1];return t&&"linePrefix"===t[1].type&&t[2].sliceSerialize(t[1],!0).length>=4?i(e):n(e)}function i(t){return null===t?s(t):Ax(t)?e.attempt(iy,i,s)(t):(e.enter("codeFlowValue"),a(t))}function a(t){return null===t||Ax(t)?(e.exit("codeFlowValue"),i(t)):(e.consume(t),a)}function s(n){return e.exit("codeIndented"),t(n)}}},iy={tokenize:function(e,t,n){const r=this;return o;function o(t){return r.parser.lazy[r.now().line]?n(t):Ax(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),o):Px(e,i,"linePrefix",5)(t)}function i(e){const i=r.events[r.events.length-1];return i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?t(e):Ax(e)?o(e):n(e)}},partial:!0};const ay={name:"headingAtx",tokenize:function(e,t,n){let r=0;return function(t){return e.enter("atxHeading"),function(t){return e.enter("atxHeadingSequence"),o(t)}(t)};function o(t){return 35===t&&r++<6?(e.consume(t),o):null===t||jx(t)?(e.exit("atxHeadingSequence"),i(t)):n(t)}function i(n){return 35===n?(e.enter("atxHeadingSequence"),a(n)):null===n||Ax(n)?(e.exit("atxHeading"),t(n)):Cx(n)?Px(e,i,"whitespace")(n):(e.enter("atxHeadingText"),s(n))}function a(t){return 35===t?(e.consume(t),a):(e.exit("atxHeadingSequence"),i(t))}function s(t){return null===t||35===t||jx(t)?(e.exit("atxHeadingText"),i(t)):(e.consume(t),s)}},resolve:function(e,t){let n,r,o=e.length-2,i=3;"whitespace"===e[i][1].type&&(i+=2);o-2>i&&"whitespace"===e[o][1].type&&(o-=2);"atxHeadingSequence"===e[o][1].type&&(i===o-1||o-4>i&&"whitespace"===e[o-2][1].type)&&(o-=i+1===o?2:4);o>i&&(n={type:"atxHeadingText",start:e[i][1].start,end:e[o][1].end},r={type:"chunkText",start:e[i][1].start,end:e[o][1].end,contentType:"text"},lx(e,i,o-i+1,[["enter",n,t],["enter",r,t],["exit",r,t],["exit",n,t]]));return e}};const sy={name:"setextUnderline",tokenize:function(e,t,n){const r=this;let o;return function(t){let a,s=r.events.length;for(;s--;)if("lineEnding"!==r.events[s][1].type&&"linePrefix"!==r.events[s][1].type&&"content"!==r.events[s][1].type){a="paragraph"===r.events[s][1].type;break}if(!r.parser.lazy[r.now().line]&&(r.interrupt||a))return e.enter("setextHeadingLine"),o=t,function(t){return e.enter("setextHeadingLineSequence"),i(t)}(t);return n(t)};function i(t){return t===o?(e.consume(t),i):(e.exit("setextHeadingLineSequence"),Cx(t)?Px(e,a,"lineSuffix")(t):a(t))}function a(r){return null===r||Ax(r)?(e.exit("setextHeadingLine"),t(r)):n(r)}},resolveTo:function(e,t){let n,r,o,i=e.length;for(;i--;)if("enter"===e[i][0]){if("content"===e[i][1].type){n=i;break}"paragraph"===e[i][1].type&&(r=i)}else"content"===e[i][1].type&&e.splice(i,1),o||"definition"!==e[i][1].type||(o=i);const a={type:"setextHeading",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)};e[r][1].type="setextHeadingText",o?(e.splice(r,0,["enter",a,t]),e.splice(o+1,0,["exit",e[n][1],t]),e[n][1].end=Object.assign({},e[o][1].end)):e[n][1]=a;return e.push(["exit",a,t]),e}};const ly=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],cy=["pre","script","style","textarea"],uy={name:"htmlFlow",tokenize:function(e,t,n){const r=this;let o,i,a,s,l;return function(t){return function(t){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(t),c}(t)};function c(s){return 33===s?(e.consume(s),u):47===s?(e.consume(s),i=!0,f):63===s?(e.consume(s),o=3,r.interrupt?t:I):xx(s)?(e.consume(s),a=String.fromCharCode(s),h):n(s)}function u(i){return 45===i?(e.consume(i),o=2,d):91===i?(e.consume(i),o=5,s=0,p):xx(i)?(e.consume(i),o=4,r.interrupt?t:I):n(i)}function d(o){return 45===o?(e.consume(o),r.interrupt?t:I):n(o)}function p(o){const i="CDATA[";return o===i.charCodeAt(s++)?(e.consume(o),6===s?r.interrupt?t:C:p):n(o)}function f(t){return xx(t)?(e.consume(t),a=String.fromCharCode(t),h):n(t)}function h(s){if(null===s||47===s||62===s||jx(s)){const l=47===s,c=a.toLowerCase();return l||i||!cy.includes(c)?ly.includes(a.toLowerCase())?(o=6,l?(e.consume(s),m):r.interrupt?t(s):C(s)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):i?g(s):x(s)):(o=1,r.interrupt?t(s):C(s))}return 45===s||yx(s)?(e.consume(s),a+=String.fromCharCode(s),h):n(s)}function m(o){return 62===o?(e.consume(o),r.interrupt?t:C):n(o)}function g(t){return Cx(t)?(e.consume(t),g):A(t)}function x(t){return 47===t?(e.consume(t),A):58===t||95===t||xx(t)?(e.consume(t),y):Cx(t)?(e.consume(t),x):A(t)}function y(t){return 45===t||46===t||58===t||95===t||yx(t)?(e.consume(t),y):v(t)}function v(t){return 61===t?(e.consume(t),b):Cx(t)?(e.consume(t),v):x(t)}function b(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),l=t,w):Cx(t)?(e.consume(t),b):k(t)}function w(t){return t===l?(e.consume(t),l=null,S):null===t||Ax(t)?n(t):(e.consume(t),w)}function k(t){return null===t||34===t||39===t||47===t||60===t||61===t||62===t||96===t||jx(t)?v(t):(e.consume(t),k)}function S(e){return 47===e||62===e||Cx(e)?x(e):n(e)}function A(t){return 62===t?(e.consume(t),j):n(t)}function j(t){return null===t||Ax(t)?C(t):Cx(t)?(e.consume(t),j):n(t)}function C(t){return 45===t&&2===o?(e.consume(t),P):60===t&&1===o?(e.consume(t),T):62===t&&4===o?(e.consume(t),L):63===t&&3===o?(e.consume(t),I):93===t&&5===o?(e.consume(t),M):!Ax(t)||6!==o&&7!==o?null===t||Ax(t)?(e.exit("htmlFlowData"),E(t)):(e.consume(t),C):(e.exit("htmlFlowData"),e.check(dy,F,E)(t))}function E(t){return e.check(py,O,F)(t)}function O(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),R}function R(t){return null===t||Ax(t)?E(t):(e.enter("htmlFlowData"),C(t))}function P(t){return 45===t?(e.consume(t),I):C(t)}function T(t){return 47===t?(e.consume(t),a="",z):C(t)}function z(t){if(62===t){const n=a.toLowerCase();return cy.includes(n)?(e.consume(t),L):C(t)}return xx(t)&&a.length<8?(e.consume(t),a+=String.fromCharCode(t),z):C(t)}function M(t){return 93===t?(e.consume(t),I):C(t)}function I(t){return 62===t?(e.consume(t),L):45===t&&2===o?(e.consume(t),I):C(t)}function L(t){return null===t||Ax(t)?(e.exit("htmlFlowData"),F(t)):(e.consume(t),L)}function F(n){return e.exit("htmlFlow"),t(n)}},resolveTo:function(e){let t=e.length;for(;t--&&("enter"!==e[t][0]||"htmlFlow"!==e[t][1].type););t>1&&"linePrefix"===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2));return e},concrete:!0},dy={tokenize:function(e,t,n){return function(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(Ix,t,n)}},partial:!0},py={tokenize:function(e,t,n){const r=this;return function(t){if(Ax(t))return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),o;return n(t)};function o(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0};const fy={tokenize:function(e,t,n){const r=this;return function(t){if(null===t)return n(t);return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),o};function o(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0},hy={name:"codeFenced",tokenize:function(e,t,n){const r=this,o={tokenize:function(e,t,n){let o=0;return a;function a(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l}function l(t){return e.enter("codeFencedFence"),Cx(t)?Px(e,c,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):c(t)}function c(t){return t===i?(e.enter("codeFencedFenceSequence"),u(t)):n(t)}function u(t){return t===i?(o++,e.consume(t),u):o>=s?(e.exit("codeFencedFenceSequence"),Cx(t)?Px(e,d,"whitespace")(t):d(t)):n(t)}function d(r){return null===r||Ax(r)?(e.exit("codeFencedFence"),t(r)):n(r)}},partial:!0};let i,a=0,s=0;return function(t){return function(t){const n=r.events[r.events.length-1];return a=n&&"linePrefix"===n[1].type?n[2].sliceSerialize(n[1],!0).length:0,i=t,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),l(t)}(t)};function l(t){return t===i?(s++,e.consume(t),l):s<3?n(t):(e.exit("codeFencedFenceSequence"),Cx(t)?Px(e,c,"whitespace")(t):c(t))}function c(n){return null===n||Ax(n)?(e.exit("codeFencedFence"),r.interrupt?t(n):e.check(fy,f,y)(n)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),u(n))}function u(t){return null===t||Ax(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(t)):Cx(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Px(e,d,"whitespace")(t)):96===t&&t===i?n(t):(e.consume(t),u)}function d(t){return null===t||Ax(t)?c(t):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),p(t))}function p(t){return null===t||Ax(t)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(t)):96===t&&t===i?n(t):(e.consume(t),p)}function f(t){return e.attempt(o,y,h)(t)}function h(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),m}function m(t){return a>0&&Cx(t)?Px(e,g,"linePrefix",a+1)(t):g(t)}function g(t){return null===t||Ax(t)?e.check(fy,f,y)(t):(e.enter("codeFlowValue"),x(t))}function x(t){return null===t||Ax(t)?(e.exit("codeFlowValue"),g(t)):(e.consume(t),x)}function y(n){return e.exit("codeFenced"),t(n)}},concrete:!0};const my=document.createElement("i");function gy(e){const t="&"+e+";";my.innerHTML=t;const n=my.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&(n!==t&&n)}const xy={name:"characterReference",tokenize:function(e,t,n){const r=this;let o,i,a=0;return function(t){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(t),e.exit("characterReferenceMarker"),s};function s(t){return 35===t?(e.enter("characterReferenceMarkerNumeric"),e.consume(t),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),o=31,i=yx,c(t))}function l(t){return 88===t||120===t?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(t),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,i=kx,c):(e.enter("characterReferenceValue"),o=7,i=wx,c(t))}function c(s){if(59===s&&a){const o=e.exit("characterReferenceValue");return i!==yx||gy(r.sliceSerialize(o))?(e.enter("characterReferenceMarker"),e.consume(s),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):n(s)}return i(s)&&a++<o?(e.consume(s),c):n(s)}}};const yy={name:"characterEscape",tokenize:function(e,t,n){return function(t){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(t),e.exit("escapeMarker"),r};function r(r){return Sx(r)?(e.enter("characterEscapeValue"),e.consume(r),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(r)}}};const vy={name:"lineEnding",tokenize:function(e,t){return function(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),Px(e,t,"linePrefix")}}};const by={name:"labelEnd",tokenize:function(e,t,n){const r=this;let o,i,a=r.events.length;for(;a--;)if(("labelImage"===r.events[a][1].type||"labelLink"===r.events[a][1].type)&&!r.events[a][1]._balanced){o=r.events[a][1];break}return function(t){if(!o)return n(t);if(o._inactive)return u(t);return i=r.parser.defined.includes(ty(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelEnd"),s};function s(t){return 40===t?e.attempt(wy,c,i?c:u)(t):91===t?e.attempt(ky,c,i?l:u)(t):i?c(t):u(t)}function l(t){return e.attempt(Sy,c,u)(t)}function c(e){return t(e)}function u(e){return o._balanced=!0,n(e)}},resolveTo:function(e,t){let n,r,o,i,a=e.length,s=0;for(;a--;)if(n=e[a][1],r){if("link"===n.type||"labelLink"===n.type&&n._inactive)break;"enter"===e[a][0]&&"labelLink"===n.type&&(n._inactive=!0)}else if(o){if("enter"===e[a][0]&&("labelImage"===n.type||"labelLink"===n.type)&&!n._balanced&&(r=a,"labelLink"!==n.type)){s=2;break}}else"labelEnd"===n.type&&(o=a);const l={type:"labelLink"===e[r][1].type?"link":"image",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)},c={type:"label",start:Object.assign({},e[r][1].start),end:Object.assign({},e[o][1].end)},u={type:"labelText",start:Object.assign({},e[r+s+2][1].end),end:Object.assign({},e[o-2][1].start)};return i=[["enter",l,t],["enter",c,t]],i=cx(i,e.slice(r+1,r+s+3)),i=cx(i,[["enter",u,t]]),i=cx(i,qx(t.parser.constructs.insideSpan.null,e.slice(r+s+4,o-3),t)),i=cx(i,[["exit",u,t],e[o-2],e[o-1],["exit",c,t]]),i=cx(i,e.slice(o+1)),i=cx(i,[["exit",l,t]]),lx(e,r,e.length,i),e},resolveAll:function(e){let t=-1;for(;++t<e.length;){const n=e[t][1];"labelImage"!==n.type&&"labelLink"!==n.type&&"labelEnd"!==n.type||(e.splice(t+1,"labelImage"===n.type?4:2),n.type="data",t++)}return e}},wy={tokenize:function(e,t,n){return function(t){return e.enter("resource"),e.enter("resourceMarker"),e.consume(t),e.exit("resourceMarker"),r};function r(t){return jx(t)?ey(e,o)(t):o(t)}function o(t){return 41===t?c(t):Zx(e,i,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(t)}function i(t){return jx(t)?ey(e,s)(t):c(t)}function a(e){return n(e)}function s(t){return 34===t||39===t||40===t?$x(e,l,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(t):c(t)}function l(t){return jx(t)?ey(e,c)(t):c(t)}function c(r){return 41===r?(e.enter("resourceMarker"),e.consume(r),e.exit("resourceMarker"),e.exit("resource"),t):n(r)}}},ky={tokenize:function(e,t,n){const r=this;return function(t){return Xx.call(r,e,o,i,"reference","referenceMarker","referenceString")(t)};function o(e){return r.parser.defined.includes(ty(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function i(e){return n(e)}}},Sy={tokenize:function(e,t,n){return function(t){return e.enter("reference"),e.enter("referenceMarker"),e.consume(t),e.exit("referenceMarker"),r};function r(r){return 93===r?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),t):n(r)}}};const Ay={name:"labelStartImage",tokenize:function(e,t,n){const r=this;return function(t){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(t),e.exit("labelImageMarker"),o};function o(t){return 91===t?(e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelImage"),i):n(t)}function i(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}},resolveAll:by.resolveAll};function jy(e){return null===e||jx(e)||Ox(e)?1:Ex(e)?2:void 0}const Cy={name:"attention",tokenize:function(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,o=jy(r);let i;return function(t){return i=t,e.enter("attentionSequence"),a(t)};function a(s){if(s===i)return e.consume(s),a;const l=e.exit("attentionSequence"),c=jy(s),u=!c||2===c&&o||n.includes(s),d=!o||2===o&&c||n.includes(r);return l._open=Boolean(42===i?u:u&&(o||!d)),l._close=Boolean(42===i?d:d&&(c||!u)),t(s)}},resolveAll:function(e,t){let n,r,o,i,a,s,l,c,u=-1;for(;++u<e.length;)if("enter"===e[u][0]&&"attentionSequence"===e[u][1].type&&e[u][1]._close)for(n=u;n--;)if("exit"===e[n][0]&&"attentionSequence"===e[n][1].type&&e[n][1]._open&&t.sliceSerialize(e[n][1]).charCodeAt(0)===t.sliceSerialize(e[u][1]).charCodeAt(0)){if((e[n][1]._close||e[u][1]._open)&&(e[u][1].end.offset-e[u][1].start.offset)%3&&!((e[n][1].end.offset-e[n][1].start.offset+e[u][1].end.offset-e[u][1].start.offset)%3))continue;s=e[n][1].end.offset-e[n][1].start.offset>1&&e[u][1].end.offset-e[u][1].start.offset>1?2:1;const d=Object.assign({},e[n][1].end),p=Object.assign({},e[u][1].start);Ey(d,-s),Ey(p,s),i={type:s>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[n][1].end)},a={type:s>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[u][1].start),end:p},o={type:s>1?"strongText":"emphasisText",start:Object.assign({},e[n][1].end),end:Object.assign({},e[u][1].start)},r={type:s>1?"strong":"emphasis",start:Object.assign({},i.start),end:Object.assign({},a.end)},e[n][1].end=Object.assign({},i.start),e[u][1].start=Object.assign({},a.end),l=[],e[n][1].end.offset-e[n][1].start.offset&&(l=cx(l,[["enter",e[n][1],t],["exit",e[n][1],t]])),l=cx(l,[["enter",r,t],["enter",i,t],["exit",i,t],["enter",o,t]]),l=cx(l,qx(t.parser.constructs.insideSpan.null,e.slice(n+1,u),t)),l=cx(l,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",r,t]]),e[u][1].end.offset-e[u][1].start.offset?(c=2,l=cx(l,[["enter",e[u][1],t],["exit",e[u][1],t]])):c=0,lx(e,n-1,u-n+3,l),u=n+l.length-c-2;break}u=-1;for(;++u<e.length;)"attentionSequence"===e[u][1].type&&(e[u][1].type="data");return e}};function Ey(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Oy={name:"autolink",tokenize:function(e,t,n){let r=0;return function(t){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o};function o(t){return xx(t)?(e.consume(t),i):64===t?n(t):l(t)}function i(e){return 43===e||45===e||46===e||yx(e)?(r=1,a(e)):l(e)}function a(t){return 58===t?(e.consume(t),r=0,s):(43===t||45===t||46===t||yx(t))&&r++<32?(e.consume(t),a):(r=0,l(t))}function s(r){return 62===r?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(r),e.exit("autolinkMarker"),e.exit("autolink"),t):null===r||32===r||60===r||bx(r)?n(r):(e.consume(r),s)}function l(t){return 64===t?(e.consume(t),c):vx(t)?(e.consume(t),l):n(t)}function c(e){return yx(e)?u(e):n(e)}function u(n){return 46===n?(e.consume(n),r=0,c):62===n?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(n),e.exit("autolinkMarker"),e.exit("autolink"),t):d(n)}function d(t){if((45===t||yx(t))&&r++<63){const n=45===t?d:u;return e.consume(t),n}return n(t)}}};const Ry={name:"htmlText",tokenize:function(e,t,n){const r=this;let o,i,a;return function(t){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(t),s};function s(t){return 33===t?(e.consume(t),l):47===t?(e.consume(t),b):63===t?(e.consume(t),y):xx(t)?(e.consume(t),S):n(t)}function l(t){return 45===t?(e.consume(t),c):91===t?(e.consume(t),i=0,f):xx(t)?(e.consume(t),x):n(t)}function c(t){return 45===t?(e.consume(t),p):n(t)}function u(t){return null===t?n(t):45===t?(e.consume(t),d):Ax(t)?(a=u,z(t)):(e.consume(t),u)}function d(t){return 45===t?(e.consume(t),p):u(t)}function p(e){return 62===e?T(e):45===e?d(e):u(e)}function f(t){const r="CDATA[";return t===r.charCodeAt(i++)?(e.consume(t),6===i?h:f):n(t)}function h(t){return null===t?n(t):93===t?(e.consume(t),m):Ax(t)?(a=h,z(t)):(e.consume(t),h)}function m(t){return 93===t?(e.consume(t),g):h(t)}function g(t){return 62===t?T(t):93===t?(e.consume(t),g):h(t)}function x(t){return null===t||62===t?T(t):Ax(t)?(a=x,z(t)):(e.consume(t),x)}function y(t){return null===t?n(t):63===t?(e.consume(t),v):Ax(t)?(a=y,z(t)):(e.consume(t),y)}function v(e){return 62===e?T(e):y(e)}function b(t){return xx(t)?(e.consume(t),w):n(t)}function w(t){return 45===t||yx(t)?(e.consume(t),w):k(t)}function k(t){return Ax(t)?(a=k,z(t)):Cx(t)?(e.consume(t),k):T(t)}function S(t){return 45===t||yx(t)?(e.consume(t),S):47===t||62===t||jx(t)?A(t):n(t)}function A(t){return 47===t?(e.consume(t),T):58===t||95===t||xx(t)?(e.consume(t),j):Ax(t)?(a=A,z(t)):Cx(t)?(e.consume(t),A):T(t)}function j(t){return 45===t||46===t||58===t||95===t||yx(t)?(e.consume(t),j):C(t)}function C(t){return 61===t?(e.consume(t),E):Ax(t)?(a=C,z(t)):Cx(t)?(e.consume(t),C):A(t)}function E(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),o=t,O):Ax(t)?(a=E,z(t)):Cx(t)?(e.consume(t),E):(e.consume(t),R)}function O(t){return t===o?(e.consume(t),o=void 0,P):null===t?n(t):Ax(t)?(a=O,z(t)):(e.consume(t),O)}function R(t){return null===t||34===t||39===t||60===t||61===t||96===t?n(t):47===t||62===t||jx(t)?A(t):(e.consume(t),R)}function P(e){return 47===e||62===e||jx(e)?A(e):n(e)}function T(r){return 62===r?(e.consume(r),e.exit("htmlTextData"),e.exit("htmlText"),t):n(r)}function z(t){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),M}function M(t){return Cx(t)?Px(e,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):I(t)}function I(t){return e.enter("htmlTextData"),a(t)}}};const Py={name:"labelStartLink",tokenize:function(e,t,n){const r=this;return function(t){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelLink"),o};function o(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}},resolveAll:by.resolveAll};const Ty={name:"hardBreakEscape",tokenize:function(e,t,n){return function(t){return e.enter("hardBreakEscape"),e.consume(t),r};function r(r){return Ax(r)?(e.exit("hardBreakEscape"),t(r)):n(r)}}};const zy={name:"codeText",tokenize:function(e,t,n){let r,o,i=0;return function(t){return e.enter("codeText"),e.enter("codeTextSequence"),a(t)};function a(t){return 96===t?(e.consume(t),i++,a):(e.exit("codeTextSequence"),s(t))}function s(t){return null===t?n(t):32===t?(e.enter("space"),e.consume(t),e.exit("space"),s):96===t?(o=e.enter("codeTextSequence"),r=0,c(t)):Ax(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),s):(e.enter("codeTextData"),l(t))}function l(t){return null===t||32===t||96===t||Ax(t)?(e.exit("codeTextData"),s(t)):(e.consume(t),l)}function c(n){return 96===n?(e.consume(n),r++,c):r===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(n)):(o.type="codeTextData",l(n))}},resolve:function(e){let t,n,r=e.length-4,o=3;if(("lineEnding"===e[o][1].type||"space"===e[o][1].type)&&("lineEnding"===e[r][1].type||"space"===e[r][1].type))for(t=o;++t<r;)if("codeTextData"===e[t][1].type){e[o][1].type="codeTextPadding",e[r][1].type="codeTextPadding",o+=2,r-=2;break}t=o-1,r++;for(;++t<=r;)void 0===n?t!==r&&"lineEnding"!==e[t][1].type&&(n=t):t!==r&&"lineEnding"!==e[t][1].type||(e[n][1].type="codeTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e},previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type}};const My={42:Vx,43:Vx,45:Vx,48:Vx,49:Vx,50:Vx,51:Vx,52:Vx,53:Vx,54:Vx,55:Vx,56:Vx,57:Vx,62:Yx},Iy={91:ny},Ly={[-2]:oy,[-1]:oy,32:oy},Fy={35:ay,42:Kx,45:[sy,Kx],60:uy,61:sy,95:Kx,96:hy,126:hy},Ny={38:xy,92:yy},Dy={[-5]:vy,[-4]:vy,[-3]:vy,33:Ay,38:xy,42:Cy,60:[Oy,Ry],91:Py,92:[Ty,yy],93:by,95:Cy,96:zy},By={null:[Cy,Dx]},_y={null:[42,95]},Hy={null:[]};function Uy(e){const t=function(e){const t={};let n=-1;for(;++n<e.length;)mx(t,e[n]);return t}([r,...(e||{}).extensions||[]]),n={defined:[],lazy:{},constructs:t,content:o(Tx),document:o(zx),flow:o(Nx),string:o(Bx),text:o(_x)};return n;function o(e){return function(t){return Gx(n,e,t)}}}const Wy=/[\0\t\n\r]/g;function qy(e,t){const n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||65535===(65535&n)||65534===(65535&n)||n>1114111?"\ufffd":String.fromCodePoint(n)}const Gy=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Ky(e,t,n){if(t)return t;if(35===n.charCodeAt(0)){const e=n.charCodeAt(1),t=120===e||88===e;return qy(n.slice(t?2:1),t?16:10)}return gy(n)||e}const Vy={}.hasOwnProperty;function Jy(e,t,n){return"string"!==typeof t&&(n=t,t=void 0),function(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(te),autolinkProtocol:j,autolinkEmail:j,atxHeading:i(Z),blockQuote:i(K),characterEscape:j,characterReference:j,codeFenced:i(V),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:i(V,a),codeText:i(J,a),codeTextData:j,data:j,codeFlowValue:j,definition:i(Q),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:i(Y),hardBreakEscape:i(X),hardBreakTrailing:i(X),htmlFlow:i($,a),htmlFlowData:j,htmlText:i($,a),htmlTextData:j,image:i(ee),label:a,link:i(te),listItem:i(re),listItemValue:p,listOrdered:i(ne,d),listUnordered:i(ne),paragraph:i(oe),reference:B,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:i(Z),strong:i(ie),thematicBreak:i(se)},exit:{atxHeading:l(),atxHeadingSequence:w,autolink:l(),autolinkEmail:G,autolinkProtocol:q,blockQuote:l(),characterEscapeValue:C,characterReferenceMarkerHexadecimal:H,characterReferenceMarkerNumeric:H,characterReferenceValue:U,characterReference:W,codeFenced:l(g),codeFencedFence:m,codeFencedFenceInfo:f,codeFencedFenceMeta:h,codeFlowValue:C,codeIndented:l(x),codeText:l(T),codeTextData:C,data:C,definition:l(),definitionDestinationString:b,definitionLabelString:y,definitionTitleString:v,emphasis:l(),hardBreakEscape:l(O),hardBreakTrailing:l(O),htmlFlow:l(R),htmlFlowData:C,htmlText:l(P),htmlTextData:C,image:l(M),label:L,labelText:I,lineEnding:E,link:l(z),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:_,resourceDestinationString:F,resourceTitleString:N,resource:D,setextHeading:l(A),setextHeadingLineSequence:S,setextHeadingText:k,strong:l(),thematicBreak:l()}};Yy(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(e){let r={type:"root",children:[]};const i={stack:[r],tokenStack:[],config:t,enter:s,exit:c,buffer:a,resume:u,data:n},l=[];let d=-1;for(;++d<e.length;)if("listOrdered"===e[d][1].type||"listUnordered"===e[d][1].type)if("enter"===e[d][0])l.push(d);else{d=o(e,l.pop(),d)}for(d=-1;++d<e.length;){const n=t[e[d][0]];Vy.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},i),e[d][1])}if(i.tokenStack.length>0){const e=i.tokenStack[i.tokenStack.length-1];(e[1]||Xy).call(i,void 0,e[0])}for(r.position={start:Qy(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:Qy(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function o(e,t,n){let r,o,i,a,s=t-1,l=-1,c=!1;for(;++s<=n;){const t=e[s];switch(t[1].type){case"listUnordered":case"listOrdered":case"blockQuote":"enter"===t[0]?l++:l--,a=void 0;break;case"lineEndingBlank":"enter"===t[0]&&(!r||a||l||i||(i=s),a=void 0);break;case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:a=void 0}if(!l&&"enter"===t[0]&&"listItemPrefix"===t[1].type||-1===l&&"exit"===t[0]&&("listUnordered"===t[1].type||"listOrdered"===t[1].type)){if(r){let a=s;for(o=void 0;a--;){const t=e[a];if("lineEnding"===t[1].type||"lineEndingBlank"===t[1].type){if("exit"===t[0])continue;o&&(e[o][1].type="lineEndingBlank",c=!0),t[1].type="lineEnding",o=a}else if("linePrefix"!==t[1].type&&"blockQuotePrefix"!==t[1].type&&"blockQuotePrefixWhitespace"!==t[1].type&&"blockQuoteMarker"!==t[1].type&&"listItemIndent"!==t[1].type)break}i&&(!o||i<o)&&(r._spread=!0),r.end=Object.assign({},o?e[o][1].start:t[1].end),e.splice(o||s,0,["exit",r,t[2]]),s++,n++}if("listItemPrefix"===t[1].type){const o={type:"listItem",_spread:!1,start:Object.assign({},t[1].start),end:void 0};r=o,e.splice(s,0,["enter",o,t[2]]),s++,n++,i=void 0,a=!0}}}return e[t][1]._spread=c,n}function i(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function a(){this.stack.push({type:"fragment",children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n]),e.position={start:Qy(t.start),end:void 0}}function l(e){return t;function t(t){e&&e.call(this,t),c.call(this,t)}}function c(e,t){const n=this.stack.pop(),r=this.tokenStack.pop();if(!r)throw new Error("Cannot close `"+e.type+"` ("+Lg({start:e.start,end:e.end})+"): it\u2019s not open");if(r[0].type!==e.type)if(t)t.call(this,e,r[0]);else{(r[1]||Xy).call(this,e,r[0])}n.position.end=Qy(e.end)}function u(){return function(e,t){const n=t||ix;return ax(e,"boolean"!==typeof n.includeImageAlt||n.includeImageAlt,"boolean"!==typeof n.includeHtml||n.includeHtml)}(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function p(e){if(this.data.expectingFirstListItemValue){this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function f(){const e=this.resume();this.stack[this.stack.length-1].lang=e}function h(){const e=this.resume();this.stack[this.stack.length-1].meta=e}function m(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){const e=this.resume();this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const e=this.resume();this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,"")}function y(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=ty(this.sliceSerialize(e)).toLowerCase()}function v(){const e=this.resume();this.stack[this.stack.length-1].title=e}function b(){const e=this.resume();this.stack[this.stack.length-1].url=e}function w(e){const t=this.stack[this.stack.length-1];if(!t.depth){const n=this.sliceSerialize(e).length;t.depth=n}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function S(e){this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).codePointAt(0)?1:2}function A(){this.data.setextHeadingSlurpLineEnding=void 0}function j(e){const t=this.stack[this.stack.length-1].children;let n=t[t.length-1];n&&"text"===n.type||(n=ae(),n.position={start:Qy(e.start),end:void 0},t.push(n)),this.stack.push(n)}function C(e){const t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=Qy(e.end)}function E(e){const n=this.stack[this.stack.length-1];if(this.data.atHardBreak){return n.children[n.children.length-1].position.end=Qy(e.end),void(this.data.atHardBreak=void 0)}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(j.call(this,e),C.call(this,e))}function O(){this.data.atHardBreak=!0}function R(){const e=this.resume();this.stack[this.stack.length-1].value=e}function P(){const e=this.resume();this.stack[this.stack.length-1].value=e}function T(){const e=this.resume();this.stack[this.stack.length-1].value=e}function z(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function M(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function I(e){const t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=function(e){return e.replace(Gy,Ky)}(t),n.identifier=ty(t).toLowerCase()}function L(){const e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];if(this.data.inReference=!0,"link"===n.type){const t=e.children;n.children=t}else n.alt=t}function F(){const e=this.resume();this.stack[this.stack.length-1].url=e}function N(){const e=this.resume();this.stack[this.stack.length-1].title=e}function D(){this.data.inReference=void 0}function B(){this.data.referenceType="collapsed"}function _(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=ty(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType="full"}function H(e){this.data.characterReferenceType=e.type}function U(e){const t=this.sliceSerialize(e),n=this.data.characterReferenceType;let r;if(n)r=qy(t,"characterReferenceMarkerNumeric"===n?10:16),this.data.characterReferenceType=void 0;else{r=gy(t)}this.stack[this.stack.length-1].value+=r}function W(e){this.stack.pop().position.end=Qy(e.end)}function q(e){C.call(this,e);this.stack[this.stack.length-1].url=this.sliceSerialize(e)}function G(e){C.call(this,e);this.stack[this.stack.length-1].url="mailto:"+this.sliceSerialize(e)}function K(){return{type:"blockquote",children:[]}}function V(){return{type:"code",lang:null,meta:null,value:""}}function J(){return{type:"inlineCode",value:""}}function Q(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Y(){return{type:"emphasis",children:[]}}function Z(){return{type:"heading",depth:0,children:[]}}function X(){return{type:"break"}}function $(){return{type:"html",value:""}}function ee(){return{type:"image",title:null,url:"",alt:null}}function te(){return{type:"link",title:null,url:"",children:[]}}function ne(e){return{type:"list",ordered:"listOrdered"===e.type,start:null,spread:e._spread,children:[]}}function re(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}}function oe(){return{type:"paragraph",children:[]}}function ie(){return{type:"strong",children:[]}}function ae(){return{type:"text",value:""}}function se(){return{type:"thematicBreak"}}}(n)(function(e){for(;!px(e););return e}(Uy(n).document().write(function(){let e,t=1,n="",r=!0;return function(o,i,a){const s=[];let l,c,u,d,p;for(o=n+("string"===typeof o?o.toString():new TextDecoder(i||void 0).decode(o)),u=0,n="",r&&(65279===o.charCodeAt(0)&&u++,r=void 0);u<o.length;){if(Wy.lastIndex=u,l=Wy.exec(o),d=l&&void 0!==l.index?l.index:o.length,p=o.charCodeAt(d),!l){n=o.slice(u);break}if(10===p&&u===d&&e)s.push(-3),e=void 0;else switch(e&&(s.push(-5),e=void 0),u<d&&(s.push(o.slice(u,d)),t+=d-u),p){case 0:s.push(65533),t++;break;case 9:for(c=4*Math.ceil(t/4),s.push(-2);t++<c;)s.push(-1);break;case 10:s.push(-4),t=1;break;default:e=!0,t=1}u=d+1}return a&&(e&&s.push(-5),n&&s.push(n),s.push(null)),s}}()(e,t,!0))))}function Qy(e){return{line:e.line,column:e.column,offset:e.offset}}function Yy(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Yy(e,r):Zy(e,r)}}function Zy(e,t){let n;for(n in t)if(Vy.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Xy(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Lg({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Lg({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Lg({start:t.start,end:t.end})+") is still open")}function $y(e){const t=this;t.parser=function(n){return Jy(n,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}const ev="object"===typeof self?self:globalThis,tv=e=>((e,t)=>{const n=(t,n)=>(e.set(n,t),t),r=o=>{if(e.has(o))return e.get(o);const[i,a]=t[o];switch(i){case 0:case-1:return n(a,o);case 1:{const e=n([],o);for(const t of a)e.push(r(t));return e}case 2:{const e=n({},o);for(const[t,n]of a)e[r(t)]=r(n);return e}case 3:return n(new Date(a),o);case 4:{const{source:e,flags:t}=a;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,n]of a)e.set(r(t),r(n));return e}case 6:{const e=n(new Set,o);for(const t of a)e.add(r(t));return e}case 7:{const{name:e,message:t}=a;return n(new ev[e](t),o)}case 8:return n(BigInt(a),o);case"BigInt":return n(Object(BigInt(a)),o)}return n(new ev[i](a),o)};return r})(new Map,e)(0),nv="",{toString:rv}={},{keys:ov}=Object,iv=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const n=rv.call(e).slice(8,-1);switch(n){case"Array":return[1,nv];case"Object":return[2,nv];case"Date":return[3,nv];case"RegExp":return[4,nv];case"Map":return[5,nv];case"Set":return[6,nv]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},av=e=>{let[t,n]=e;return 0===t&&("function"===n||"symbol"===n)},sv=function(e){let{json:t,lossy:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=[];return((e,t,n,r)=>{const o=(e,t)=>{const o=r.push(e)-1;return n.set(t,o),o},i=r=>{if(n.has(r))return n.get(r);let[a,s]=iv(r);switch(a){case 0:{let t=r;switch(s){case"bigint":a=8,t=r.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);t=null;break;case"undefined":return o([-1],r)}return o([a,t],r)}case 1:{if(s)return o([s,[...r]],r);const e=[],t=o([a,e],r);for(const n of r)e.push(i(n));return t}case 2:{if(s)switch(s){case"BigInt":return o([s,r.toString()],r);case"Boolean":case"Number":case"String":return o([s,r.valueOf()],r)}if(t&&"toJSON"in r)return i(r.toJSON());const n=[],l=o([a,n],r);for(const t of ov(r))!e&&av(iv(r[t]))||n.push([i(t),i(r[t])]);return l}case 3:return o([a,r.toISOString()],r);case 4:{const{source:e,flags:t}=r;return o([a,{source:e,flags:t}],r)}case 5:{const t=[],n=o([a,t],r);for(const[o,a]of r)(e||!av(iv(o))&&!av(iv(a)))&&t.push([i(o),i(a)]);return n}case 6:{const t=[],n=o([a,t],r);for(const o of r)!e&&av(iv(o))||t.push(i(o));return n}}const{message:l}=r;return o([a,{name:s,message:l}],r)};return i})(!(t||n),!!t,new Map,r)(e),r},lv="function"===typeof structuredClone?(e,t)=>t&&("json"in t||"lossy"in t)?tv(sv(e,t)):structuredClone(e):(e,t)=>tv(sv(e,t));function cv(e){const t=[];let n=-1,r=0,o=0;for(;++n<e.length;){const i=e.charCodeAt(n);let a="";if(37===i&&yx(e.charCodeAt(n+1))&&yx(e.charCodeAt(n+2)))o=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(a=String.fromCharCode(i));else if(i>55295&&i<57344){const t=e.charCodeAt(n+1);i<56320&&t>56319&&t<57344?(a=String.fromCharCode(i,t),o=1):a="\ufffd"}else a=String.fromCharCode(i);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+o+1,a=""),o&&(n+=o,o=0)}return t.join("")+e.slice(r)}function uv(e,t){const n=[{type:"text",value:"\u21a9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function dv(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}const pv=function(e){if(null===e||void 0===e)return hv;if("function"===typeof e)return fv(e);if("object"===typeof e)return Array.isArray(e)?function(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=pv(e[n]);return fv(r);function r(){let e=-1;for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];for(;++e<t.length;)if(t[e].apply(this,r))return!0;return!1}}(e):function(e){const t=e;return fv(n);function n(n){const r=n;let o;for(o in e)if(r[o]!==t[o])return!1;return!0}}(e);if("string"===typeof e)return function(e){return fv(t);function t(t){return t&&t.type===e}}(e);throw new Error("Expected function, string, or object as test")};function fv(e){return function(t,n,r){return Boolean(mv(t)&&e.call(this,t,"number"===typeof n?n:void 0,r||void 0))}}function hv(){return!0}function mv(e){return null!==e&&"object"===typeof e&&"type"in e}const gv=[],xv=!0,yv=!1,vv="skip";function bv(e,t,n,r){let o;"function"===typeof t&&"function"!==typeof n?(r=n,n=t):o=t;const i=pv(o),a=r?-1:1;!function e(o,s,l){const c=o&&"object"===typeof o?o:{};if("string"===typeof c.type){const e="string"===typeof c.tagName?c.tagName:"string"===typeof c.name?c.name:void 0;Object.defineProperty(u,"name",{value:"node ("+o.type+(e?"<"+e+">":"")+")"})}return u;function u(){let c,u,d,p=gv;if((!t||i(o,s,l[l.length-1]||void 0))&&(p=function(e){if(Array.isArray(e))return e;if("number"===typeof e)return[xv,e];return null===e||void 0===e?gv:[e]}(n(o,l)),p[0]===yv))return p;if("children"in o&&o.children){const t=o;if(t.children&&p[0]!==vv)for(u=(r?t.children.length:-1)+a,d=l.concat(t);u>-1&&u<t.children.length;){const n=t.children[u];if(c=e(n,u,d)(),c[0]===yv)return c;u="number"===typeof c[1]?c[1]:u+a}}return p}}(e,void 0,[])()}function wv(e,t,n,r){let o,i,a;"function"===typeof t&&"function"!==typeof n?(i=void 0,a=t,o=n):(i=t,a=n,o=r),bv(e,i,(function(e,t){const n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return a(e,r,n)}),o)}function kv(e,t){const n=t.referenceType;let r="]";if("collapsed"===n?r+="[]":"full"===n&&(r+="["+(t.label||t.identifier)+"]"),"imageReference"===t.type)return[{type:"text",value:"!["+t.alt+r}];const o=e.all(t),i=o[0];i&&"text"===i.type?i.value="["+i.value:o.unshift({type:"text",value:"["});const a=o[o.length-1];return a&&"text"===a.type?a.value+=r:o.push({type:"text",value:r}),o}function Sv(e){const t=e.spread;return null===t||void 0===t?e.children.length>1:t}const Av=9,jv=32;function Cv(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),o=0;const i=[];for(;r;)i.push(Ev(t.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=n.exec(t);return i.push(Ev(t.slice(o),o>0,!1)),i.join("")}function Ev(e,t,n){let r=0,o=e.length;if(t){let t=e.codePointAt(r);for(;t===Av||t===jv;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(o-1);for(;t===Av||t===jv;)o--,t=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}const Ov={blockquote:function(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)},break:function(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:"\n"}]},code:function(e,t){const n=t.value?t.value+"\n":"",r={};t.lang&&(r.className=["language-"+t.lang]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o},delete:function(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},emphasis:function(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},footnoteReference:function(e,t){const n="string"===typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),o=cv(r.toLowerCase()),i=e.footnoteOrder.indexOf(r);let a,s=e.footnoteCounts.get(r);void 0===s?(s=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=i+1,s+=1,e.footnoteCounts.set(r,s);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+o,id:n+"fnref-"+o+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,l);const c={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,c),e.applyData(t,c)},heading:function(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},html:function(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}},imageReference:function(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return kv(e,t);const o={src:cv(r.url||""),alt:t.alt};null!==r.title&&void 0!==r.title&&(o.title=r.title);const i={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,i),e.applyData(t,i)},image:function(e,t){const n={src:cv(t.url)};null!==t.alt&&void 0!==t.alt&&(n.alt=t.alt),null!==t.title&&void 0!==t.title&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)},inlineCode:function(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)},linkReference:function(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return kv(e,t);const o={href:cv(r.url||"")};null!==r.title&&void 0!==r.title&&(o.title=r.title);const i={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)},link:function(e,t){const n={href:cv(t.url)};null!==t.title&&void 0!==t.title&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)},listItem:function(e,t,n){const r=e.all(t),o=n?function(e){let t=!1;if("list"===e.type){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Sv(n[r])}return t}(n):Sv(t),i={},a=[];if("boolean"===typeof t.checked){const e=r[0];let n;e&&"element"===e.type&&"p"===e.tagName?n=e:(n={type:"element",tagName:"p",properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:"text",value:" "}),n.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const e=r[s];(o||0!==s||"element"!==e.type||"p"!==e.tagName)&&a.push({type:"text",value:"\n"}),"element"!==e.type||"p"!==e.tagName||o?a.push(e):a.push(...e.children)}const l=r[r.length-1];l&&(o||"element"!==l.type||"p"!==l.tagName)&&a.push({type:"text",value:"\n"});const c={type:"element",tagName:"li",properties:i,children:a};return e.patch(t,c),e.applyData(t,c)},list:function(e,t){const n={},r=e.all(t);let o=-1;for("number"===typeof t.start&&1!==t.start&&(n.start=t.start);++o<r.length;){const e=r[o];if("element"===e.type&&"li"===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const i={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,i),e.applyData(t,i)},paragraph:function(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},root:function(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)},strong:function(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},table:function(e,t){const n=e.all(t),r=n.shift(),o=[];if(r){const n={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),o.push(n)}if(n.length>0){const r={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},i=Mg(t.children[1]),a=zg(t.children[t.children.length-1]);i&&a&&(r.position={start:i,end:a}),o.push(r)}const i={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,i),e.applyData(t,i)},tableCell:function(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},tableRow:function(e,t,n){const r=n?n.children:void 0,o=0===(r?r.indexOf(t):1)?"th":"td",i=n&&"table"===n.type?n.align:void 0,a=i?i.length:t.children.length;let s=-1;const l=[];for(;++s<a;){const n=t.children[s],r={},a=i?i[s]:void 0;a&&(r.align=a);let c={type:"element",tagName:o,properties:r,children:[]};n&&(c.children=e.all(n),e.patch(n,c),c=e.applyData(n,c)),l.push(c)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(l,!0)};return e.patch(t,c),e.applyData(t,c)},text:function(e,t){const n={type:"text",value:Cv(String(t.value))};return e.patch(t,n),e.applyData(t,n)},thematicBreak:function(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)},toml:Rv,yaml:Rv,definition:Rv,footnoteDefinition:Rv};function Rv(){}const Pv={}.hasOwnProperty,Tv={};function zv(e,t){e.position&&(t.position=function(e){const t=Mg(e),n=zg(e);if(t&&n)return{start:t,end:n}}(e))}function Mv(e,t){let n=t;if(e&&e.data){const t=e.data.hName,r=e.data.hChildren,o=e.data.hProperties;if("string"===typeof t)if("element"===n.type)n.tagName=t;else{n={type:"element",tagName:t,properties:{},children:"children"in n?n.children:[n]}}"element"===n.type&&o&&Object.assign(n.properties,lv(o)),"children"in n&&n.children&&null!==r&&void 0!==r&&(n.children=r)}return n}function Iv(e,t){const n=t.data||{},r=!("value"in t)||Pv.call(n,"hProperties")||Pv.call(n,"hChildren")?{type:"element",tagName:"div",properties:{},children:e.all(t)}:{type:"text",value:t.value};return e.patch(t,r),e.applyData(t,r)}function Lv(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:"\n"});++r<e.length;)r&&n.push({type:"text",value:"\n"}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:"\n"}),n}function Fv(e){let t=0,n=e.charCodeAt(t);for(;9===n||32===n;)t++,n=e.charCodeAt(t);return e.slice(t)}function Nv(e,t){const n=function(e,t){const n=t||Tv,r=new Map,o=new Map,i=new Map,a={...Ov,...n.handlers},s={all:function(e){const t=[];if("children"in e){const n=e.children;let r=-1;for(;++r<n.length;){const o=s.one(n[r],e);if(o){if(r&&"break"===n[r-1].type&&(Array.isArray(o)||"text"!==o.type||(o.value=Fv(o.value)),!Array.isArray(o)&&"element"===o.type)){const e=o.children[0];e&&"text"===e.type&&(e.value=Fv(e.value))}Array.isArray(o)?t.push(...o):t.push(o)}}}return t},applyData:Mv,definitionById:r,footnoteById:o,footnoteCounts:i,footnoteOrder:[],handlers:a,one:function(e,t){const n=e.type,r=s.handlers[n];if(Pv.call(s.handlers,n)&&r)return r(s,e,t);if(s.options.passThrough&&s.options.passThrough.includes(n)){if("children"in e){const{children:t,...n}=e,r=lv(n);return r.children=s.all(e),r}return lv(e)}return(s.options.unknownHandler||Iv)(s,e,t)},options:n,patch:zv,wrap:Lv};return wv(e,(function(e){if("definition"===e.type||"footnoteDefinition"===e.type){const t="definition"===e.type?r:o,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}})),s}(e,t),r=n.one(e,void 0),o=function(e){const t="string"===typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||uv,r=e.options.footnoteBackLabel||dv,o=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let l=-1;for(;++l<e.footnoteOrder.length;){const o=e.footnoteById.get(e.footnoteOrder[l]);if(!o)continue;const i=e.all(o),a=String(o.identifier).toUpperCase(),c=cv(a.toLowerCase());let u=0;const d=[],p=e.footnoteCounts.get(a);for(;void 0!==p&&++u<=p;){d.length>0&&d.push({type:"text",value:" "});let e="string"===typeof n?n:n(l,u);"string"===typeof e&&(e={type:"text",value:e}),d.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+c+(u>1?"-"+u:""),dataFootnoteBackref:"",ariaLabel:"string"===typeof r?r:r(l,u),className:["data-footnote-backref"]},children:Array.isArray(e)?e:[e]})}const f=i[i.length-1];if(f&&"element"===f.type&&"p"===f.tagName){const e=f.children[f.children.length-1];e&&"text"===e.type?e.value+=" ":f.children.push({type:"text",value:" "}),f.children.push(...d)}else i.push(...d);const h={type:"element",tagName:"li",properties:{id:t+"fn-"+c},children:e.wrap(i,!0)};e.patch(o,h),s.push(h)}if(0!==s.length)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...lv(a),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:"\n"}]}}(n),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&i.children.push({type:"text",value:"\n"},o),i}function Dv(e,t){return e&&"run"in e?async function(n,r){const o=Nv(n,{file:r,...t});await e.run(o,r)}:function(n,r){return Nv(n,{file:r,...t||e})}}function Bv(e){if(e)throw e}var _v=n(3240);function Hv(e){if("object"!==typeof e||null===e)return!1;const t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Uv(){const e=[],t={run:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];let o=-1;const i=n.pop();if("function"!==typeof i)throw new TypeError("Expected function as last argument, not "+i);!function t(r){const a=e[++o];let s=-1;if(r)i(r);else{for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];for(;++s<n.length;)null!==c[s]&&void 0!==c[s]||(c[s]=n[s]);n=c,a?function(e,t){let n;return o;function o(){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];const l=e.length>o.length;let c;l&&o.push(i);try{c=e.apply(this,o)}catch(r){if(l&&n)throw r;return i(r)}l||(c&&c.then&&"function"===typeof c.then?c.then(a,i):c instanceof Error?i(c):a(c))}function i(e){if(!n){n=!0;for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];t(e,...o)}}function a(e){i(null,e)}}(a,t)(...c):i(null,...c)}}(null,...n)},use:function(n){if("function"!==typeof n)throw new TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}};return t}const Wv={basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');qv(e);let n,r=0,o=-1,i=e.length;if(void 0===t||0===t.length||t.length>e.length){for(;i--;)if(47===e.codePointAt(i)){if(n){r=i+1;break}}else o<0&&(n=!0,o=i+1);return o<0?"":e.slice(r,o)}if(t===e)return"";let a=-1,s=t.length-1;for(;i--;)if(47===e.codePointAt(i)){if(n){r=i+1;break}}else a<0&&(n=!0,a=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(o=i):(s=-1,o=a));r===o?o=a:o<0&&(o=e.length);return e.slice(r,o)},dirname:function(e){if(qv(e),0===e.length)return".";let t,n=-1,r=e.length;for(;--r;)if(47===e.codePointAt(r)){if(t){n=r;break}}else t||(t=!0);return n<0?47===e.codePointAt(0)?"/":".":1===n&&47===e.codePointAt(0)?"//":e.slice(0,n)},extname:function(e){qv(e);let t,n=e.length,r=-1,o=0,i=-1,a=0;for(;n--;){const s=e.codePointAt(n);if(47!==s)r<0&&(t=!0,r=n+1),46===s?i<0?i=n:1!==a&&(a=1):i>-1&&(a=-1);else if(t){o=n+1;break}}if(i<0||r<0||0===a||1===a&&i===r-1&&i===o+1)return"";return e.slice(i,r)},join:function(){let e,t=-1;for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];for(;++t<r.length;)qv(r[t]),r[t]&&(e=void 0===e?r[t]:e+"/"+r[t]);return void 0===e?".":function(e){qv(e);const t=47===e.codePointAt(0);let n=function(e,t){let n,r,o="",i=0,a=-1,s=0,l=-1;for(;++l<=e.length;){if(l<e.length)n=e.codePointAt(l);else{if(47===n)break;n=47}if(47===n){if(a===l-1||1===s);else if(a!==l-1&&2===s){if(o.length<2||2!==i||46!==o.codePointAt(o.length-1)||46!==o.codePointAt(o.length-2))if(o.length>2){if(r=o.lastIndexOf("/"),r!==o.length-1){r<0?(o="",i=0):(o=o.slice(0,r),i=o.length-1-o.lastIndexOf("/")),a=l,s=0;continue}}else if(o.length>0){o="",i=0,a=l,s=0;continue}t&&(o=o.length>0?o+"/..":"..",i=2)}else o.length>0?o+="/"+e.slice(a+1,l):o=e.slice(a+1,l),i=l-a-1;a=l,s=0}else 46===n&&s>-1?s++:s=-1}return o}(e,!t);0!==n.length||t||(n=".");n.length>0&&47===e.codePointAt(e.length-1)&&(n+="/");return t?"/"+n:n}(e)},sep:"/"};function qv(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Gv={cwd:function(){return"/"}};function Kv(e){return Boolean(null!==e&&"object"===typeof e&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&void 0===e.auth)}function Vv(e){if("string"===typeof e)e=new URL(e);else if(!Kv(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if("file:"!==e.protocol){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return function(e){if(""!==e.hostname){const e=new TypeError('File URL host must be "localhost" or empty on darwin');throw e.code="ERR_INVALID_FILE_URL_HOST",e}const t=e.pathname;let n=-1;for(;++n<t.length;)if(37===t.codePointAt(n)&&50===t.codePointAt(n+1)){const e=t.codePointAt(n+2);if(70===e||102===e){const e=new TypeError("File URL path must not include encoded / characters");throw e.code="ERR_INVALID_FILE_URL_PATH",e}}return decodeURIComponent(t)}(e)}const Jv=["history","path","basename","stem","extname","dirname"];class Qv{constructor(e){let t;t=e?Kv(e)?{path:e}:"string"===typeof e||function(e){return Boolean(e&&"object"===typeof e&&"byteLength"in e&&"byteOffset"in e)}(e)?{value:e}:e:{},this.cwd="cwd"in t?"":Gv.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n,r=-1;for(;++r<Jv.length;){const e=Jv[r];e in t&&void 0!==t[e]&&null!==t[e]&&(this[e]="history"===e?[...t[e]]:t[e])}for(n in t)Jv.includes(n)||(this[n]=t[n])}get basename(){return"string"===typeof this.path?Wv.basename(this.path):void 0}set basename(e){Zv(e,"basename"),Yv(e,"basename"),this.path=Wv.join(this.dirname||"",e)}get dirname(){return"string"===typeof this.path?Wv.dirname(this.path):void 0}set dirname(e){Xv(this.basename,"dirname"),this.path=Wv.join(e||"",this.basename)}get extname(){return"string"===typeof this.path?Wv.extname(this.path):void 0}set extname(e){if(Yv(e,"extname"),Xv(this.dirname,"extname"),e){if(46!==e.codePointAt(0))throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Wv.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){Kv(e)&&(e=Vv(e)),Zv(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return"string"===typeof this.path?Wv.basename(this.path,this.extname):void 0}set stem(e){Zv(e,"stem"),Yv(e,"stem"),this.path=Wv.join(this.dirname||"",e+(this.extname||""))}fail(e,t,n){const r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){const r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){const r=new Bg(e,t,n);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){if(void 0===this.value)return"";if("string"===typeof this.value)return this.value;return new TextDecoder(e||void 0).decode(this.value)}}function Yv(e,t){if(e&&e.includes(Wv.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Wv.sep+"`")}function Zv(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Xv(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}const $v=function(e){const t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r},eb={}.hasOwnProperty;class tb extends $v{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Uv()}copy(){const e=new tb;let t=-1;for(;++t<this.attachers.length;){const n=this.attachers[t];e.use(...n)}return e.data(_v(!0,{},this.namespace)),e}data(e,t){return"string"===typeof e?2===arguments.length?(ib("data",this.frozen),this.namespace[e]=t,this):eb.call(this.namespace,e)&&this.namespace[e]||void 0:e?(ib("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...n]=this.attachers[this.freezeIndex];if(!1===n[0])continue;!0===n[0]&&(n[0]=void 0);const r=t.call(e,...n);"function"===typeof r&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=lb(e),n=this.parser||this.Parser;return rb("parse",n),n(String(t),t)}process(e,t){const n=this;return this.freeze(),rb("process",this.parser||this.Parser),ob("process",this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,o){const i=lb(e),a=n.parse(i);function s(e,n){e||!n?o(e):r?r(n):t(void 0,n)}n.run(a,i,(function(e,t,r){if(e||!t||!r)return s(e);const o=t,i=n.stringify(o,r);var a;"string"===typeof(a=i)||function(e){return Boolean(e&&"object"===typeof e&&"byteLength"in e&&"byteOffset"in e)}(a)?r.value=i:r.result=i,s(e,r)}))}}processSync(e){let t,n=!1;return this.freeze(),rb("processSync",this.parser||this.Parser),ob("processSync",this.compiler||this.Compiler),this.process(e,(function(e,r){n=!0,Bv(e),t=r})),sb("processSync","process",n),t}run(e,t,n){ab(e),this.freeze();const r=this.transformers;return n||"function"!==typeof t||(n=t,t=void 0),n?o(void 0,n):new Promise(o);function o(o,i){const a=lb(t);r.run(e,a,(function(t,r,a){const s=r||e;t?i(t):o?o(s):n(void 0,s,a)}))}}runSync(e,t){let n,r=!1;return this.run(e,t,(function(e,t){Bv(e),n=t,r=!0})),sb("runSync","run",r),n}stringify(e,t){this.freeze();const n=lb(t),r=this.compiler||this.Compiler;return ob("stringify",r),ab(e),r(e,n)}use(e){const t=this.attachers,n=this.namespace;if(ib("use",this.frozen),null===e||void 0===e);else if("function"===typeof e){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];c(e,o)}else{if("object"!==typeof e)throw new TypeError("Expected usable value, not `"+e+"`");Array.isArray(e)?l(e):s(e)}return this;function a(e){if("function"===typeof e)c(e,[]);else{if("object"!==typeof e)throw new TypeError("Expected usable value, not `"+e+"`");if(Array.isArray(e)){const[t,...n]=e;c(t,n)}else s(e)}}function s(e){if(!("plugins"in e)&&!("settings"in e))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(e.plugins),e.settings&&(n.settings=_v(!0,n.settings,e.settings))}function l(e){let t=-1;if(null===e||void 0===e);else{if(!Array.isArray(e))throw new TypeError("Expected a list of plugins, not `"+e+"`");for(;++t<e.length;){a(e[t])}}}function c(e,n){let r=-1,o=-1;for(;++r<t.length;)if(t[r][0]===e){o=r;break}if(-1===o)t.push([e,...n]);else if(n.length>0){let[r,...i]=n;const a=t[o][1];Hv(a)&&Hv(r)&&(r=_v(!0,a,r)),t[o]=[e,r,...i]}}}}const nb=(new tb).freeze();function rb(e,t){if("function"!==typeof t)throw new TypeError("Cannot `"+e+"` without `parser`")}function ob(e,t){if("function"!==typeof t)throw new TypeError("Cannot `"+e+"` without `compiler`")}function ib(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ab(e){if(!Hv(e)||"string"!==typeof e.type)throw new TypeError("Expected node, got `"+e+"`")}function sb(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function lb(e){return function(e){return Boolean(e&&"object"===typeof e&&"message"in e&&"messages"in e)}(e)?e:new Qv(e)}const cb=[],ub={allowDangerousHtml:!0},db=/^(https?|ircs?|mailto|xmpp)$/i,pb=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function fb(e){const t=e.allowedElements,n=e.allowElement,r=e.children||"",o=e.className,i=e.components,a=e.disallowedElements,s=e.rehypePlugins||cb,l=e.remarkPlugins||cb,c=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...ub}:ub,u=e.skipHtml,d=e.unwrapDisallowed,p=e.urlTransform||hb,f=nb().use($y).use(l).use(Dv,c).use(s),h=new Qv;"string"===typeof r&&(h.value=r);for(const g of pb)Object.hasOwn(e,g.from)&&(g.from,g.to&&g.to,g.id);const m=f.parse(h);let x=f.runSync(m,h);return o&&(x={type:"element",tagName:"div",properties:{className:o},children:"root"===x.type?x.children:[x]}),wv(x,(function(e,r,o){if("raw"===e.type&&o&&"number"===typeof r)return u?o.children.splice(r,1):o.children[r]={type:"text",value:e.value},r;if("element"===e.type){let t;for(t in ox)if(Object.hasOwn(ox,t)&&Object.hasOwn(e.properties,t)){const n=e.properties[t],r=ox[t];(null===r||r.includes(e.tagName))&&(e.properties[t]=p(String(n||""),t,e))}}if("element"===e.type){let i=t?!t.includes(e.tagName):!!a&&a.includes(e.tagName);if(!i&&n&&"number"===typeof r&&(i=!n(e,r,o)),i&&o&&"number"===typeof r)return d&&e.children?o.children.splice(r,1,...e.children):o.children.splice(r,1),r}})),Vg(x,{Fragment:g.Fragment,components:i,ignoreInvalidStyle:!0,jsx:g.jsx,jsxs:g.jsxs,passKeys:!0,passNode:!0})}function hb(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),o=e.indexOf("/");return t<0||o>-1&&t>o||n>-1&&t>n||r>-1&&t>r||db.test(e.slice(0,t))?e:""}var mb=n(3557);n.p;const gb=li.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    border-radius: 8px; /* Reduce border-radius for smaller screens */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,xb=li.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background-color: #5c0295;
  color: #ffffff;
  font-weight: bold;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    padding: 10px 12px; /* Adjust padding for smaller screens */
    font-size: 14px; /* Reduce font size */
  }
`,yb=li.div`
  background-color: #6236c5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 15px;
  }
`,vb=li.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow-y: auto;
  background-color: #f7fafc;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    padding: 12px; /* Reduce padding */
  }
`,bb=li.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8e36c5;
  margin-top: 50%;
  font-weight: 500;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    margin-top: 40%; /* Adjust margin for smaller screens */
    font-size: 14px; /* Adjust font size */
    text-align: center; /* Center text */
  }
`,wb=li.div`
  margin: 8px 0;
  padding: 10px;
  border-radius: 8px;
  background-color: ${e=>e.isBot?"#8e36c5":"#edf2f7"};
  color: ${e=>e.isBot?"#ffffff":"#1a202c"};
  align-self: ${e=>e.isBot?"flex-start":"flex-end"};
  margin-left: ${e=>e.isBot?"115px":""};
  max-width: 80%;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    max-width: 90%; /* Allow more width for messages */
    margin-left: ${e=>e.isBot?"10px":""}; /* Adjust left margin */
    font-size: 14px; /* Reduce font size */
    padding: 8px; /* Reduce padding */
  }
`,kb=li.form`
  width: 70%;
  display: flex;
  align-items: center;
  padding: 12px;
  border-top: 1px solid #e2e8f0;
  background-color: #ffffff;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    width: 90%; /* Increase width on mobile */
    padding: 8px; /* Reduce padding */
  }
`,Sb=li.input`
  flex: 1;
  border: 1px solid #cbd5e0;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  outline: none;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    padding: 6px 12px; /* Adjust padding */
    font-size: 13px; /* Reduce font size */
  }
`,Ab=li.button`
  width: 45px;
  height: 45px;
  background-color: #5c0295;  
  color: #ffffff;
  border: none;
  padding: 8px;
  border-radius: 50%;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #6236c5;
  }

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    width: 40px;
    height: 40px; /* Adjust size for smaller screens */
    margin-left: 4px; /* Reduce margin */
  }
`,jb=li.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  gap: 8px;
  flex-wrap: wrap;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    padding: 4px; /* Reduce padding */
    gap: 4px; /* Reduce gap */
  }
`,Cb=li.button`
  border: 1px solid #8e36c5;
  color: #8e36c5;
  background-color: #ffffff;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #e2e8f0;
  }

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    padding: 6px 10px; /* Reduce padding */
    font-size: 11px; /* Reduce font size */
  }
`;const Eb=function(e){const[t,n]=(0,o.useState)([]),[r,i]=(0,o.useState)(""),[a,s]=(0,o.useState)(!1),[l,c]=(0,o.useState)(!1),u=async e=>{if(e&&e.preventDefault(),""===r.trim())return;const o=[...t,{text:r,isBot:!1}];n(o),i(""),s(!0);try{var a,l,c,u;const e=(null===(a=(await gl.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDE0Ru86HvsWQ-bD7pbdDB7o3NIrFbMCbA",{contents:[{parts:[{text:r}]}]})).data)||void 0===a||null===(l=a.candidates[0])||void 0===l||null===(c=l.content)||void 0===c||null===(u=c.parts[0])||void 0===u?void 0:u.text)||"Sorry, I didn't understand that.";n([...o,{text:e,isBot:!0}])}catch(d){console.error("Error fetching the bot response:",d),n([...o,{text:"Sorry, something went wrong.",isBot:!0}])}s(!1)},d=e=>{c(!0),i(e)};(0,o.useEffect)((()=>{l&&(c(!1),u())}),[r]);const p=window.innerWidth<=768;return(0,g.jsx)(mb.Ay,{className:"custom-pane-class",overlayClassName:"custom-overlay-class",isOpen:!0,hideHeader:!0,from:"right",width:p?"100%":"39%",children:(0,g.jsxs)(gb,{children:[(0,g.jsxs)(xb,{children:[(0,g.jsx)(yb,{children:"AW"}),(0,g.jsx)("span",{children:"ATOMWALK-AI"}),(0,g.jsx)("button",{onClick:()=>{e.setOpenslide(!1)},style:{background:"none",border:"none",color:"#ffffff",cursor:"pointer"},children:"X"})]}),(0,g.jsxs)(vb,{children:[t.map(((e,t)=>(0,g.jsx)(wb,{isBot:e.isBot,children:(0,g.jsx)(fb,{children:e.text})},t))),a&&(0,g.jsx)(wb,{isBot:!0,children:"Generating..."}),0==t.length&&(0,g.jsx)(bb,{children:"Hii how can i help you\ud83d\udc81\u200d\u2640\ufe0f"})]}),(0,g.jsxs)(jb,{children:[(0,g.jsx)(Cb,{onClick:()=>d("What is Manufacturing ERP ?"),children:"What is Manufacturing ERP ?"}),(0,g.jsx)(Cb,{onClick:()=>d("Why Business need Manufacturing ERP ?"),children:"Why Business need Manufacturing ERP ?"}),(0,g.jsx)(Cb,{onClick:()=>d("Whene is the Right Time to Implement Manufacturing ERP ?"),children:"Whene is the Right Time to Implement Manufacturing ERP ?"}),(0,g.jsx)(Cb,{onClick:()=>d("How Atomwalk office support Manufacturing ERP ?"),children:"How Atomwalk office support Manufacturing ERP ?"}),(0,g.jsx)(Cb,{onClick:()=>d("What is CRM"),children:"What is CRM"})]}),(0,g.jsxs)(kb,{children:[(0,g.jsx)(Sb,{value:r,onChange:e=>i(e.target.value),placeholder:"Type your message..."}),(0,g.jsx)(Ab,{type:"submit",disabled:a,onClick:u,children:"\u27a4"})]})]})})},Ob=n.p+"static/media/chatbot-icon-removebg-preview.39103f1381dfcfdca93f.png",Rb=li.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: rgb(227 227 227); /* Background color, can be changed */
  border-radius: 50%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`,Pb=li.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function Tb(e){return(0,g.jsx)(Rb,{onClick:()=>{e.setOpenslide(!0)},children:(0,g.jsx)(Pb,{src:Ob,alt:"Floating Icon"})})}const zb=n.p+"static/media/Backgroundyellow.724b6926d561bc062e5d.jpg",Mb=li.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, rgb(237, 245, 255), #ffffff);
  background-image: url(${zb});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`,Ib=li.div`
  background-color: #e1fff6;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: 20px;
  margin-top: 100px;
`,Lb=li.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
`,Fb=li.p`
  font-size: 1rem;
  color: #777777;
  text-align: center;
  margin-bottom: 30px;
`,Nb=li.form`
  display: flex;
  flex-direction: column;
  color: #454545;
`,Db=li.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,Bb=li.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,_b=li.select`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,Hb=li.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap:10px;
`,Ub=li.label`
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333333;
`,Wb=li.button`
  background-color: #ea5c49;
  color: #ffffff;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #f4260a;
  }
`,qb=()=>{let e=new Date;const t={name:"",company_name:"",task_name:"Book My Demo",mobile_number:"",email_id:"",add_task:"N",task_type:"Book My Demo",task_date:`${("0"+e.getDate()).slice(-2)}-${("0"+(e.getMonth()+1)).slice(-2)}-${e.getFullYear()}`,remarks:""},[n,r]=(0,o.useState)(t),[i,a]=(0,o.useState)(!1),[s,l]=(0,o.useState)([]),[c,u]=(0,o.useState)(""),[d,p]=(0,o.useState)(""),f=(e,t)=>{r({...n,[e]:t})},h=async(e,n)=>{try{let o=localStorage.getItem("apiResponse"),i=JSON.parse(o);if(!o)throw new Error("Token not found, please login.");const s=gl.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${i.key}`}});200==(await s.post(e,n)).status&&(r(t),a(!0))}catch(o){console.log("Error making authenticated API call:",o),r(t)}};(0,o.useEffect)((()=>{i&&setTimeout((()=>{a(!1),window.location.href="/demo.html"}),3e3)}),[i]);const m=e=>{const{value:t,checked:o}=e.target,i=o?[...s,t]:s.filter((e=>e!==t));l(i),r({...n,remarks:`${d}\nNumber of Employees: ${c}\nRequirements: ${i.join(", ")}`})};return(0,g.jsxs)(g.Fragment,{children:[i&&(0,g.jsx)(Yc,{message:"We have successfully recorded your information."}),(0,g.jsx)(Mb,{children:(0,g.jsxs)(Ib,{children:[(0,g.jsx)(Lb,{children:"We are a call away!"}),(0,g.jsx)(Fb,{children:"Discuss Pricing, take a Demo or share your business problems."}),(0,g.jsxs)(Nb,{children:[(0,g.jsx)(Db,{onChange:e=>f("name",e.target.value),type:"text",placeholder:"Full Name"}),(0,g.jsx)(Db,{onChange:e=>f("mobile_number",e.target.value),type:"tel",placeholder:"Phone"}),(0,g.jsx)(Db,{onChange:e=>f("email_id",e.target.value),type:"email",placeholder:"Work Email*",required:!0}),(0,g.jsx)(Db,{onChange:e=>f("company_name",e.target.value),type:"text",placeholder:"Company Name"}),(0,g.jsxs)(Hb,{children:[(0,g.jsx)(Ub,{children:"Please select your requirement(s):"}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Payroll",onChange:m})," Payroll"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Core HR",onChange:m})," Core HR"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Attendance Management",onChange:m})," Attendance Management"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Leave Management",onChange:m})," Leave Management"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Performance Management System",onChange:m})," Performance Management System"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Geo-Tagging",onChange:m})," Geo-Tagging"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Recruitment",onChange:m})," Recruitment"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Employee Self Service",onChange:m})," Employee Self Service"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Employee Engagement",onChange:m})," Employee Engagement"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Others",onChange:m})," Others"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"All",onChange:m})," All"]})]}),(0,g.jsx)(Bb,{onChange:e=>{const t=e.target.value;p(t),r({...n,remarks:`${t}\nNumber of Employees: ${c}\nRequirements: ${s.join(", ")}`})},rows:"4",placeholder:"Are you currently using any HR tools? (Optional)"}),(0,g.jsxs)(_b,{onChange:e=>{const t=e.target.value;u(t),r({...n,remarks:`${d}\nNumber of Employees: ${t}\nRequirements: ${s.join(", ")}`})},children:[(0,g.jsx)("option",{value:"",children:"Number of Employees"}),(0,g.jsx)("option",{value:"1-10",children:"1-10"}),(0,g.jsx)("option",{value:"11-50",children:"11-50"}),(0,g.jsx)("option",{value:"51-200",children:"51-200"}),(0,g.jsx)("option",{value:"201-500",children:"201-500"}),(0,g.jsx)("option",{value:"500+",children:"500+"})]}),(0,g.jsx)(Wb,{onClick:e=>(e.preventDefault(),h("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:n})),children:"Book Meeting"})]})]})})]})};var Gb=n(1094);const Kb=n.p+"static/media/pricingelusrtion.f9102968b3ab2d7f7123.png",Vb=(n.p,n.p,li.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
`,li.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  background-color: #f9f9f9;

  th, td {
    padding: 16px;
    border: 1px solid #e0e0e0;
  }

  th {
    background-color: #f3e6f9;
    font-weight: bold;
    position: sticky;
    top: 0;
    z-index: 2;
  }

  td {
    background-color: #f8e4fd;
    position: relative;
  }

  .expandable {
    cursor: pointer;
    user-select: none;
  }

  .expanded-section {
    display: ${e=>e.expanded?"table-row":"none"};
  }
`,li.span`
  color: green;
`,li.span`
  color: red;
`,li.span`
  color: #333;
  font-size: 0.85rem;
`,li.span`
  cursor: pointer;
  user-select: none;
  font-size: 1.2rem;
`,li.th`
  background-color: #f3e6f9;
  position: sticky;
  top: 0;
  z-index: 10;
`,li.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: #f7f7f7;
`),Jb=li.div`
  background: ${e=>{let{color:t}=e;return t||"#fff"}};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`,Qb=li.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`,Yb=li.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`,Zb=li.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`,Xb=li.ul`
  list-style: none;
  padding: 0;
`,$b=li.li`
  font-size: 1rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;

  &::before {
    content: '✔';
    color: #4CAF50;
    margin-right: 0.5rem;
  }
`,ew=li.button`
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #45a049;
  }
`,tw=e=>{let{name:t,price:n,description:r,features:o,color:i}=e;return(0,g.jsxs)(Jb,{color:i,children:[(0,g.jsx)(Qb,{children:t}),(0,g.jsx)(Yb,{children:n}),(0,g.jsx)(Zb,{children:r}),(0,g.jsx)(Xb,{children:o.map(((e,t)=>(0,g.jsx)($b,{children:e},t)))}),(0,g.jsx)(ew,{children:"Get Started"})]})},nw=()=>(0,g.jsxs)(Vb,{children:[(0,g.jsx)(tw,{name:"HRM Basic",price:"Free",description:"Ideal for individual users.",features:["2 Workspaces","10 collaborators","Unlimited data","Unified Analytics"],color:"#fdf1e6"}),(0,g.jsx)(tw,{name:"HRM Pro",price:"$25/month",description:"Works best for enterprise companies.",features:["Unlimited workspaces","Unlimited collaboration","Unlimited data storage","Time tracking module","Unified Analytics","HR & Payroll"],color:"#d6f5f4"}),(0,g.jsx)(tw,{name:"CRM Standard",price:"$15/month",description:"Ideal for small businesses.",features:["Unlimited workspaces","Unlimited collaboration","15 GB data storage","Unified Analytics","Mobile app access"],color:"#e4e0ff"}),(0,g.jsx)(tw,{name:"CRM Enterprise",price:"$35/month",description:"For large organizations.",features:["Unlimited workspaces","Unlimited data storage","Advanced analytics","Priority support","Customizable dashboard"],color:"#ddeeff"})]}),rw=li.div`
  background-color: white;
  color: blue;
  width: 100%;
  /* padding-top: 10px; */
  padding-bottom: 10px;
  /* height: 1472px; */
`,ow=li.div`
  height: 572px;
  background-color: white;
  color: blue;
  display: flex;
  justify-content: center;
  
  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    height: auto; /* Allow height to adjust based on content */
   // padding: 20px; /* Add some padding for smaller screens */
  }
`,iw=li.div`
  height: 572px;
  width: 100%;
  background-color: #96ddbc;
  padding: 90px;
  padding-top: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  
  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    padding: 20px; /* Reduce padding for smaller screens */
    padding-top: 130px; /* Adjust top padding */
    flex-direction: column; /* Stack items vertically */
    justify-content: center; /* Center items */
    align-items: center; /* Center items */
  }
`,aw=li.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 400;
  line-height: 61.2px;
  margin-left: 40px;
  margin-top: 25px;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    font-size: 32px; /* Reduce font size for smaller screens */
    line-height: 38px; /* Adjust line height accordingly */
    margin-left: 0px; /* Center text by removing left margin */
    margin-top: 40px; /* Adjust top margin */
    text-align: center; /* Center align the text */
  }
`,sw=li.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 600;
  line-height: 61.2px;
  margin: 0px 0px 16px;
`,lw=li.p`
  color: #1c1b1f;
  width: 73%;
  font-size: 21px;
  word-wrap: normal;
  margin: 0px 0px 24px;
  @media (max-width: 768px) {
    width: 100%;
  }
`,cw=li.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 60%;
  line-height: 26px;
  padding: 44px 0px 0px;
`,uw=li.button`
  align-items: center;
  background-color: #aa00ea;
  border-color: #f3a3ff;
  border-radius: 100px;
  border-style: solid;
  border-width: 1.6px;
  color: #fff;
  font-weight: 500;
  line-height: 24px;
  padding: 14px 32px;
  text-align: center;
`,dw=li.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`,pw=li.div`
  line-height: 26px;
  img {
    width: 120%;
    height: auto;
    border-radius: 15px;
  }
  @media (max-width:768px) {
    display: none;
  }
`,fw=(li.div`
  line-height: 26px;
  margin: 144px 0px;
  width: 100%;
  /* margin-top: 180px; */
  @media (max-width:768px) {
    margin-top: 70px;
  }
`,li.h2`
  color: #1c1b1f;
  font-size: 38px;
  font-weight: 600;
  line-height: 45.6px;
  margin: 0px 0px 24px;
  text-align: center;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    font-size: 28px; /* Reduce font size for smaller screens */
    line-height: 34px; /* Adjust line height accordingly */
    margin: 0px 0px 16px; /* Reduce bottom margin */
    text-align: center;
  }
`,li.span`
  color: #8900c4;
  display: inline;
  font-size: 38px;
  font-weight: 600;
  line-height: 45.6px;
  text-align: center;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    font-size: 28px; /* Reduce font size for smaller screens */
    line-height: 34px; /* Adjust line height accordingly */
  }
`,li.div`
  color: #1c1b1f;
  line-height: 24px;
  margin: 0px 417.788px 48px 417.775px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0px ;
  }
`,li.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 30px;
  max-height: 600px;
  overflow-y: auto;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 10px;
`,li.table`
  width: 100%;
  border-collapse: collapse;
  position: relative;
`,li.th`
  background-color: #FCE6FF;
  color: #1c1b1f;
  padding: 50px 20px;
  font-size: larger;
  text-align: center;
  border: 2px solid #8900c4;
  position: sticky;
  top: 0;
  z-index: 2;
`,li.td`
  padding: 20px;
  text-align: left;
  border: 1px solid #ddd;
`,()=>{const e=(0,o.useMemo)((()=>[{modulePlane:"Number of Employees",starter:"Limited",essential:"Unlimited",growth:"Unlimited",enterprise:"Unlimited"},{modulePlane:"Cost Per Additional Employee",starter:"Not Applicable",essential:"\u20b930/ month",growth:"\u20b960/ month",enterprise:"\u20b9100/ month"},{modulePlane:"Core HR",starter:"Limited",essential:"\u2713",growth:"\u2713",enterprise:"\u2713"}]),[]),t=li.div`
color: #454545;
font-size: 15px;
margin-bottom: 5px;
`,n=(0,o.useMemo)((()=>[{Header:"Modules and Features",accessor:"modulePlane"},{Header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Starter"}),(0,g.jsx)("div",{children:"\u20b9 0 / month"}),(0,g.jsx)(t,{children:"(Includes 25 Employees)"}),(0,g.jsx)(uw,{children:"Start Free Trial"})]}),accessor:"starter"},{Header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Essential"}),(0,g.jsx)("div",{children:"\u20b9 3495 / month"}),(0,g.jsx)(t,{children:"(Includes 50 Employees)"}),(0,g.jsx)(uw,{children:"Start Free Trial"})]}),accessor:"essential"},{Header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Growth"}),(0,g.jsx)("div",{children:"\u20b9 5495 / month"}),(0,g.jsx)(t,{children:"(Includes 50 Employees)"}),(0,g.jsx)(uw,{children:"Start Free Trial"})]}),accessor:"growth"},{Header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Enterprise"}),(0,g.jsx)("div",{children:"\u20b9 7495 / month"}),(0,g.jsx)(t,{children:"(Includes 50 Employees)"}),(0,g.jsx)(uw,{children:"Start Free Trial"})]}),accessor:"enterprise"}]),[]),{getTableProps:r,getTableBodyProps:i,headerGroups:a,rows:s,prepareRow:l}=(0,Gb.useTable)({columns:n,data:e});li.div`
  display: flex;
  gap: 12px;
  line-height: 26px;
  margin: 0px 141.6px 144px;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack the left and right sections vertically */
    margin: 0px 16px 24px; /* Reduce margins to fit mobile screens */
    gap: 8px; /* Reduce gap for more compact layout */
  }
`,li.div`
  display: flex;
  flex-direction: column;
  line-height: 26px;
  width: 50%;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    width: 100%; /* Take full width on mobile */
  }
`,li.div`
  display: flex;
  flex-direction: column;
  line-height: 26px;
  width: 50%;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    width: 100%; /* Take full width on mobile */
  }
`,li.div`
  line-height: 26px;
  margin: 0px 0px 48px;
  `,li.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 38px;
  font-weight: 600;
  line-height: 45.6px;
  margin: 0px 0px 32px;
  @media (max-width: 768px) {
    text-align: center;
  }
  `,li.h5`
  color: #8900c4;
  font-family: Centra;
  font-size: 21.008px;
  font-weight: 600;
  line-height: 24px;
  `,li.h6`
  color: #1c1b1f;
font-family: Centra;
font-weight: 600;
line-height: 19.2px;
  `,li.span`
  color: #1c1b1f;
  font-weight: normal;
  font-size: 17px;
  font-weight: 500;
  line-height: 18px;
  `,li.span`
  color: #1c1b1f;
font-size: 21.008px;
line-height: 31.504px;
@media (max-width: 768px) {
  text-align: center;
    display: flex;
    align-items: center;
}
  `,li.div`
  background-color: #eefaf4;
  border-radius: 16px;
  line-height: 26px;
  margin: 0px 0px 12px;
  padding: 24px 32px;
  `,li.div`
  background-color: #fff8e6;
  border-radius: 16px;
  line-height: 26px;
  margin: 0px 0px 12px;
  padding: 24px 32px;
  `,li.div`
  background-color: #e6ffff;
  border-radius: 16px;
  line-height: 26px;
  margin: 0px 0px 12px;
  padding: 24px 32px;
  `,li.div`
  background-color: #fce6ff;
  border-radius: 16px 16px 0px 0px;
  line-height: 26px;
  padding: 24px 32px;
  `,li.div`
    border-color: #e8e8e9;
    border-radius: 0px 0px 16px 16px;
    border-style: solid;
    border-width: 0.8px;
    line-height: 26px;
    padding: 36px 158px 36px 48px;
  `,li.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    line-height: 26px;
  `,li.div`
    display: flex;
    line-height: 26px;
  `,li.div`
    background-color: #76d3a8;
    border-radius: 50%;
    display: flex;
    line-height: 26px;
    margin: 8px 8px 0px 0px;
    width: 10px;
    height: 10px;
  `,li.li`
    display: list-item;
    line-height: 26px;
    list-style: none;
    text-align: left;
  `,li.div`
  align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
line-height: 26px;
margin: 144px 71.04px;
  `,li.div`
  align-items: center;
display: flex;
flex-wrap: wrap;
gap: 16px;
justify-content: center;
line-height: 26px;
  `,li.div`
    background-color: #eefaf4;
    border-radius: 20px;
    line-height: 26px;
  `,li.div`
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 26px;
  margin: 24px 0px;
  `,li.h3`
    color: #1c1b1f;
    font-family: Centra;
    font-size: 28px;
    font-weight: 500;
    line-height: 33.6px;
    text-align: center;
  `,li.div`
    border-radius: 12px;
    display: inline;
    line-height: 26px;
    img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
  `;return(0,g.jsxs)(rw,{children:[(0,g.jsx)(ow,{children:(0,g.jsxs)(iw,{children:[(0,g.jsxs)(aw,{children:[(0,g.jsx)(sw,{children:"Challenge Our Pricing See the Value!"}),(0,g.jsx)(lw,{children:"Get access to premium features without breaking the bank. We believe in providing powerful tools at every level, so you get the value you deserve. Explore our plans to find the right fit for your needs and budget."}),(0,g.jsx)(uw,{onClick:()=>{window.location.href="/demo.html"},children:(0,g.jsx)(dw,{children:"Discuss Price"})})]}),(0,g.jsx)(cw,{children:(0,g.jsx)(pw,{children:(0,g.jsx)("img",{src:Kb,alt:"Pricing Challenge Background"})})})]})}),(0,g.jsx)(Dl,{}),(0,g.jsx)(nw,{}),(0,g.jsx)(Fc,{})]})}),hw=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem;
  }
`,mw=li.div`
  max-width: 400px;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,gw=li.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`,xw=li.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,yw=li.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  &::before {
    content: "✔";
    color: green;
    margin-right: 0.5rem;
  }
`,vw=li.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,bw=li.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,ww=li.form`
  display: flex;
  flex-direction: column;
`,kw=li.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`,Sw=li.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`,Aw=li.button`
  padding: 0.8rem;
  font-size: 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #333;
  }
`,jw=li.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 1rem;
`,Cw=()=>(0,g.jsxs)(hw,{children:[(0,g.jsxs)(mw,{children:[(0,g.jsx)(gw,{children:"Get Expert Advice"}),(0,g.jsxs)(xw,{children:[(0,g.jsx)(yw,{children:"Talk to Sales"}),(0,g.jsx)(yw,{children:"Free Demo"}),(0,g.jsx)(yw,{children:"Get Expert Advice"}),(0,g.jsx)(yw,{children:"Pricing Options"})]})]}),(0,g.jsxs)(vw,{children:[(0,g.jsx)(bw,{children:"Fill out this quick form and we\u2019ll get back to you shortly"}),(0,g.jsxs)(ww,{children:[(0,g.jsx)(kw,{type:"text",placeholder:"Enter your name"}),(0,g.jsx)(kw,{type:"email",placeholder:"Enter your work Email ID"}),(0,g.jsx)(Sw,{placeholder:"Let us know about your research requirement, a topic you have in mind, or a goal you are trying to achieve.",rows:"4"}),(0,g.jsx)(Aw,{type:"submit",children:"Contact Sales"})]}),(0,g.jsx)(jw,{children:"By filling out and submitting this form, you are agreeing to our Privacy Policy and agreeing to receive email communications regarding events, webinars, research, and more."})]})]});n.p,n.p,n.p,n.p,n.p,n.p,li.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #d6e7ff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,li.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,li.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,li.div`
  display: flex;
  align-items: flex-start;
  max-width: 48%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,li.div`
  background-color: #ffcc00;
  padding: 15px;
  border-radius: 50%;
  margin-right: 20px;
`,li.img`
  width: 50px;
  height: auto;
`,li.div`
  display: flex;
  flex-direction: column;
`,li.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`,li.p`
  font-size: 1rem;
  color: #666;
`,li.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #d6e7ff;
  height:700px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    text-align: center;
  }
`,li.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top:130px;
  }
`,li.h1`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,li.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,li.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,li.img`
  width: 150px;
  height: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 130px;
  }
`,li.div`
  display: flex;
  gap: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
`,li.img`
  width: 500px;
  height: auto;

  @media (max-width: 768px) {
    width: 180px;
  }
`;const Ew=n.p+"static/media/Labtest.d306211505644b5096b4.png",Ow="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAB1CAYAAADkzsULAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA42SURBVHgB7Z1NUxzHGcef7l1WOHJKi+Q4VTlII5K44oArUJVTLoZrUqnAJ9BySBydkD6Blk8g6eSKc2D5BCKVsp0bOKdUchAuCZSKK9qxD0nZsQyqWJYEO93uZ3YXrWD2Zbpnenpmn18VAgapQOz859evTzMgjPDWZfXV53BFclgCCR5ewusM4EAy2JECPhYSNv95lW0DkUsYEFpgOL7TglUu4JoEqI7wT3zB4JYM4E8qMD4QuYFCosFP3pVeicMWdKwRF2WdumjBBoUlH1BIYmIakB58FZYGhcV9KCQxSDAgvVBYHIdCEoOZ9+SW6pwvQDqEYamU4fbOCjsAwhkoJCMy+55clRJuQfr46q2++w7bAMIJKCQjkFIzaxg+UFicgAMxlJK6WcFuQKDz/Rozf5BN9XYFiMwgkwyhY5EmZI8PZJZMIJMMoWMRF/CAzJIJZJIBOGSRKHwgs1iBTDIAhywShQdkFiuQSfrguEWi8IHMkgpkkj44bpEoPCCzpAKZJIIcWiQKH8gsiUAmiSCHFonCAzTLe3JLhX4BCG3IJCcoiEVOw2A7CGCNNn/Fh0xygoJY5DQSFnBpDZklPmSSHgprkSgYNDpm8YEYCJmkh8JaJAoJNXwgKLOs48MBiL6QSTqMlUWiILP0xSmTeHf3PfU2SlGFxBkri0RBZulLZibBMJQmYAmYeFsyttApx/MCBj7D3XrANksCPvpkdmoHUmLsLRIFmeUY6yHBcPBJWIVAXlPfPY41fOCsIZ7Bhj8/5UOCzLwrG8qpNEsdBYXFbki8+/tzjMk7zHgDk2yIQ76WRFhm1XCobO86JPpzoH5Ht/Z+y9ZgDLEWkum9/VWQMuE94uZhSbm4Q7FoT0iujJtVrIRk+sH+DRCyDqmhFxayiBZ+IGBxnIKS+uiWt/flUroBQViNV2RzevfROo6QjfqvZAluABGXsCjGOI2ApRoSvGG54OtgjdHDghahZpY2XqkEFl/XbEk1JKyi2vvxRrCS+s5Dw0IWMUQ9YMZl30pqIcF+iPkolinRYfnpu7JGFkkEG8X6MieVjnvYzFI3J7jF8TzL2b9XbReaKyydTvw2FJhUTMImgjq4h4cDCJzD3aOLTz15RgBhDmewBAWnDAmDFlEThu62Vcuy2rr4DILXD6H0RQXKn58B9pwWQxvgQcFJ/O5w1CKnkJMCMCzP3/o/tF5/DoQeqr1+DgpOoiFpW4QbWUTiokYJ2+oDK8cPYFiO3vgGnv38MYWFiCTRkBhaxBciWGzOnL/cnD2/+HD2/BR+HgbGAhQWPdRD7TEUnMRCYmgRX3C26L/1ve2XLqrPMTAUFoeRkNoWBldILCQmFhGytey/2X/dFYXFXdQY4TYUnETmSczmRVjj4czUSpx/4d373wLjpZvqh58DS7BnHMqfTUL5izNAtMH+49477DIUnERMUjojtdfxCA6x9yiEZpk5Py+kWJHtSoWpQ2Y5DWPFtwhibJIf3dtfEFxqLjePb5EovPtf1lR/yOoyGDJLONt+eRyWzBubRJak9kJBHYtE4c++1sBRMTKLRRg0xmVPiZFJXLBIFFmZZeKTs1B6nPgiBicZF4sgRiZxwSJRoFle+evUWuVfZ8Ob1wZolkM1e3/44ydQ+HVhY2QRRPuxF1pE6taUZY1BQ75JwDjcwLVZ+IbrtI4uPg1v5LQJvn8I4lyr0P0VrJ4CY4R2SAIu13XbamlaBAn3i/Q0tWyHpdtfwfcTn70ChWLMLIJohSRs82u39+1YJOq67bDgAkqkSEEZN4sgWiHBTjFoYtsiUdgMS6GCMoYWQWKHJK8WicJWWDAorMWg/J9JyDPjaBEk9tCPyxaZ/WM42uZBTDAoZ+59N3zapzUahkHJ9ajXmFoEiWUS1y0iBdRAE9ydiCNSpc8r4QgVThAmaRZZlnA0/Q1UHrwKecQVi8g7UA1KsCAZLLASXGISPDWB/HJFHhZOKB/IAD5W77cnfm22fCbWANXl3a+auiERnF1OMyTYF1FNrcRqQeFTP42wTP6tGja9coWyyO7vWCoTv6OAwTiqwBJncEWzys2B+o1vCgEbOoEZuW2Rg77IKiRI1yzYDMPmWFK0fvAM8kaWFgn+AqtBBZrqRl03KANVVbbBh+hW6wPYOnw/3urxkR9pLlvExvkiaJajS0/DTr4J/HE5DF5uyMgiR39Wzal2y8CDFFD3coMfwhpbHr7WbySTuG4R9Z9YgJRBs+Ayl8l/nAtvdF1wNj5PZGERtAdrFzL3ICXQLMpQW6op5w37uyOFxOURrRBmcfOVCkvYBHs0AbqIvIxyZTCi1Xof1lWH21ZlSE8F5a5qgg3cdj40JEYWkfJ22hZB1FPnZ2AZXPGr3QGfzEdIbFsEA6Le1cAuVaWVxqCgDA2JgUV8UeJ2ngjSflFuDAh7UoLCYtkiwQdwE+wH5AUqKNgPivrSwJAYWUTIDRsWyRRdk1havm+CTYsEH8INKeEaZIxqkdyJ6qMMfLWMLFLmDbCErd2Ip76vZrOJu15W1aJFnn6oJgOFM8eDV0UF7py82PfVypNFWAAfgWVwSFieDSAu3PEmGj5wbFpkQrh1HJ/6/8+pZle991rfkOTFIghj9guk4ZyJDuxrx/sxalbalkXUpF4NUhzm1QUnpnubXZEhyVtf5D6ej2GxvE24ZEVzUrH0VXKz90mDFlENyAZYQt18rp42Vm2VX/SRIkNiZJEWtzXG/RLMYhNB2yKqo28yv5I6ZJFjlE2u4Jox/PhUSEwswjir+/NTVqrBnwRtwkT6QTGxCHc4INYtwsD18xarRxPtIemXQtIpeq1tkX+/ObUBGaKCUsenIaSIrkUQp3cnWrRI+ITOwZmVnMNvwvcvXZyEKyYWAQfYvcpqaRnFyCKPy86eqGXbIrgfBPKAhDkM9PGrhhaRItwfrkPmFukFjaLG3nHlaqJNv6JaRD0Y6zZn16XFtXaG4D4W7zgkRbBIL3tXWSMQMJ9U88toROvzitHK4TRBi+y+w6w+4LJYa6cLD2DuOCRFsUgv+HTsNL8WwfBckyJbBGzD7K+100VZr20S0xEtcBwc+dr9PVvUDYupRVzui9i2SOcbe5ATVOf9Uvjqlbj+MW6uWiSK3rDEWe91+MYT0IUskn942GHXHI7Lg0WiwLDgCU3YuR8WluBcS3s3IVmkGHCYCBZAj1xZJArs3A8LS+si9UXGGSHgsZr4HC+LRNEvLGSRlGDZbG3QhSsugQYB2F+enjYnw0IWSQf1dP4UcgJTAz1c3RA6Ezt+kXcdYlgOf3GwQhZJjdyc/S5K4HPNMevcjHPrguevgCZkkSE/g8xNSA4qv4Id3cddFc9Sh4JiMm9EFhlOp9RoJqvF4yA7XQquPtL6YTkvravh40IaxaTOGFlkNGTKq7WToAzt2tLcYKTB4xV5F+dZoECQRayxCW7jw2HXJEKajFJhUJrTu4/WixIWsogdwiaXxS3XsWFQZ8vtVhYXIBJINKsVISwmFpFHfJM/5WtZlTcahKuz69Ldk7P88i9fNAc5tMo7uv2S0+Q7LCYWkWfkddzHouYAcG2YU2FxdXYdbaL6JrfBNQK43vspwz+m7z2qA2cpVK6QDXHI1/x59+dU0CKccc1hX9Z4ODO10nsFj4NQHb+a4Pr7dJIAw4oTpOAo4clVFbgLjhSFUKFdU+Gt914LQ4KjVEx1wtN7Md0PS1rnr4Rnp+CTnGdW+KDm+kJGrOI4IcKgZDtaymBTNbOWT1/ugPMealg3zWp6vrJVQzyDDdfCkrRFosgkLBkf4xaHzqE9mVVzVEHY4Yeqqbx8uuvBej+Zvv/ommqY34R0cS4sNk/xshiWA9y+nKcTc7EWlxpAx/vPqlEGBaTz9ZdJr39yCifCYmQRIdcevnWhDhpYCMt11czKpFCgCXieoQoKFq32wAYStktHsNwvIAiLumjJKF18XHaf1d4UA4v4yiKLpgs90wgLdj73ruZ3K0Onj5LqcXAIjqypTvrQIx9Yvy94D/Y9JuSWxZEZ62HJyiJRJBWWvAekF6zuztq/Dw+SxcftEKMeV80GfRFHvXhZYPMr0eOfh2AtLFlbJAqDsGBzYS2PTaxBoFVKAdQ5C6spmvZVfJxJ750oHAU2yl9qWwVuMpBLYI9Uw+KSRaLozrPIdqnNQXt+DqSEDSHhVp466XHB+ZSjCixxqR4e7eJ2owbmoLOYcnNUc5xkpJB0wWFixko3GLNapjKVsLhokX5gYCY4zAW4QY4dVzpvqk7nx19Pwo6/wpxfdp40YQc/AK9TDbLKOZzD6+GedA5NGcCnykA7o5zTPoxYIemS97C4bhHCLbRC0iVcEMj4DcvLLozDYmKRhzPnnV3iQaSD0eYHf/a1RlPdNEKKofWrEgQLezem1Y3+wwf7sUeCpvf2V4tcrZJIHiOTnMR1s4Tnr1S0h7XJImNKotvoXDcLq4ibZBEiLoma5CSumKW9ylmsM2C6Q9hkkTEm1ZB0ySQsEg7UbO2OmkPAIVOjQ2NU6Gp5L+lK6GMlJF0yMospZJExx2ppj4z6LEZQX4SwapKT5MAsZBECMi0S5bpZyCIEkqlJeumsOL4mObviglkkyM3mzIVlIMYeZ0LSBVcc85aoZRoWNTImSmy+yJXzidFxLiRdMg2LlNcfzl4o1L4MQh9nQ9KlGxZL++5plS9xCudD0iXc+BWIOmMstSojUsqN5uyFGhBED7kJSZfUwiLlbdXEGloUgBg/cheSLomFJayDrJpY1Ach+pDbkHTBsEAQLOhNSrKG4LBGo1jEIHIfkl68+1/McT7xthRyicGL/eDHKGuoScsdJuVHosVv+fNTY7c3nIhPoUIShXf3v177o8kDCgWhw7ci8mJ9X5RoDQAAAABJRU5ErkJggg==",Rw=n.p+"static/media/clock.cafb3982fb150a806a77.png",Pw=n.p+"static/media/premium.32087c7a3627bd39605f.gif",Tw=n.p+"static/media/optimization.63421cd7d827365fb19f.png",zw=n.p+"static/media/access.21a604edb66b884a0028.png",Mw=n.p+"static/media/best-customer-experience.973ae41dfe6d7a9c02d2.png",Iw=n.p+"static/media/accessible.3ff76038314c071df14d.png",Lw=n.p+"static/media/easy-to-use.cae7d597f3ab4e038c1d.png",Fw=n.p+"static/media/administer.85579c0cb192be159e06.png",Nw=n.p+"static/media/reconciliation.96079e275f4303921aeb.png",Dw=n.p+"static/media/reduce-time.3ede8db68ce291b7857d.png",Bw=n.p+"static/media/better_experience.904fb1df701730ef3db1.png",_w=n.p+"static/media/transparency.12d7bff3d2e4b289e06b.png",Hw=n.p+"static/media/brand_reputaion.6475ab9d5f12592403af.png",Uw=n.p+"static/media/money_saving.6876708d842414cd1331.png",Ww=li.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #fff;
  
`,qw=li.h1`
  font-size: 2rem;
  color: #000;
  margin-bottom: 10px;
  font-weight: 600;

  span {
    color: #6a1b9a; /* Purple highlight */
  }
`,Gw=li.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Kw=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,Vw=li.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: ${e=>e.bgColor||"#6a1b9a"};
  margin-bottom: 15px;

  img {
    width: 40px;
    height: 40px;
  }
`,Jw=li.h3`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 10px;
  font-weight: 600;
`,Qw=li.p`
  color: #6e6e6e;
  font-size: 0.9rem;
  line-height: 1.4;
`,Yw=[{title:"Optimize",text:"maximize time & effort efficiency",bgColor:"#d9f5e3",icon:Rw},{title:"Streamline",text:"simplify claim management",bgColor:"#f2e3ff",icon:Fw},{title:"Verify",text:"ensure precise claim reconciliation",bgColor:"#ffe8cc",icon:Nw},{title:"Accelerate",text:"minimize claim processing delays",bgColor:"#fff1d0",icon:Dw},{title:"Enhance",text:"deliver a seamless claim experience",bgColor:"#d7faff",icon:Bw},{title:"Elevate",text:"increase claim transparency",bgColor:"#d9f5e3",icon:_w}],Zw=[{title:"Save",text:"time & effort",bgColor:"#d9f5e3",icon:Rw},{title:"Administer",text:"uniform leave policy",bgColor:"#f2e3ff",icon:Fw},{title:"Ensure",text:"accurate leave accounting",bgColor:"#ffe8cc",icon:Nw},{title:"Reduce",text:"unnecessary expense",bgColor:"#fff1d0",icon:Dw},{title:"Deliver",text:"an outstanding employee experience",bgColor:"#d7faff",icon:Bw},{title:"Improve",text:"employer brand image",bgColor:"#d9f5e3",icon:_w}],Xw=[{title:"Maximize Efficiency",text:"Save valuable time and effort with seamless processes",bgColor:"#d9f5e3",icon:Tw},{title:"Unmatched Quality",text:"We consistently deliver top-notch results for every user",bgColor:"#f2e3ff",icon:Pw},{title:"Lightning-Fast Access",text:"Enjoy quick and easy access to our application anywhere, anytime",bgColor:"#ffe8cc",icon:zw},{title:"Seamless Experience",text:"Experience flawless and intuitive user interactions",bgColor:"#fff1d0",icon:Mw},{title:"User-Centric Design",text:"Delivering an outstanding and effortless user experience",bgColor:"#d7faff",icon:Lw},{title:"Universal Accessibility",text:"Access our platform seamlessly on both mobile and web",bgColor:"#d9f5e3",icon:Iw}],$w=[{title:"Streamline",text:"eliminate time-consuming paperwork",bgColor:"#d9f5e3",icon:Rw},{title:"Optimize",text:"cut unnecessary operational expenses",bgColor:"#fff1d0",icon:Uw},{title:"Boost",text:"elevate employer brand reputation",bgColor:"#d9f5e3",icon:Hw},{title:"Standardize",text:"enforce a consistent company policy",bgColor:"#f2e3ff",icon:Fw},{title:"Performance",text:"Bulk processing with high TPS.",bgColor:"#ffe8cc",icon:Nw},{title:"Reliabilty",text:"24/7 availability with 100% uptime on mobile and web ",bgColor:"#d7faff",icon:Bw}],ek=[{title:"24/7 Access with less man power",text:"Schedule Equipment Anytime, Seamlessly",bgColor:"#d7faff",icon:Rw},{title:"Real-Time Availability!",text:"Stay Updated, Avoid Surprises",bgColor:"#d9f5e3",icon:Hw},{title:"Hassle-Free User Management!",text:"Group, Control, Assign Roles",bgColor:"#fff1d0",icon:Fw},{title:"Zero Booking Conflicts!",text:"Smart Scheduling, Uninterrupted Operations",bgColor:"#f2e3ff",icon:Uw},{title:"Performance",text:"Bulk processing with high TPS.",bgColor:"#ffe8cc",icon:Nw},{title:"Stay Audit-Ready",text:"Automated Logs, Effortless Records ",bgColor:"#d9f5e3",icon:Bw}],tk=e=>{let{data:t}=e;const n="Claim"===t?Yw:"lead"==t?Xw:"HR"==t?$w:"Equipment"==t?ek:Zw;return(0,g.jsxs)(Ww,{children:[(0,g.jsxs)(qw,{children:["All-in-One ",t," Management, ",(0,g.jsx)("span",{children:"Faster and Easier."})]}),(0,g.jsx)(Gw,{children:n.map(((e,t)=>(0,g.jsxs)(Kw,{children:[(0,g.jsx)(Vw,{bgColor:e.bgColor,children:(0,g.jsx)("img",{src:e.icon,alt:`${e.title} Icon`})}),(0,g.jsx)(Jw,{children:e.title}),(0,g.jsx)(Qw,{children:e.text})]},t)))})]})},nk=n.p+"static/media/faq.0aaf4c93b37d158961e9.png",rk=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: aliceblue;
  
  @media (min-width: 768px) {
    padding: 40px 20px;
  }
`,ok=li.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #663399;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,ik=li.div`
  width: 100%;
  max-width: 700px;
`,ak=li.div`
  background-color: #f8f5ff;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,sk=li.div`
  padding: 15px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #eae3ff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd1ff;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
    padding: 20px;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #663399;
  }
`,lk=li.div`
  background-color: white;
  max-height: ${e=>{let{isOpen:t}=e;return t?"500px":"0"}};
  padding: ${e=>{let{isOpen:t}=e;return t?"15px":"0 15px"}};
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  ul {
    padding-left: 20px;
    list-style-type: disc;
  }
`,ck=li.div`
  text-align: center;
  margin-top: 50px;
  padding: 30px;
  width: 100%;
  max-width: 700px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`,uk=li.h2`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 20px;
`,dk=li.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 30px;
`,pk=li.a`
  padding: 10px 20px;
  background-color: #663399;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #552288;
  }
`,fk=li.img`
  max-width: 200px;
  margin-bottom: 10px;
`,hk=e=>{let{data:t,res:n}=e;const[r,i]=(0,o.useState)(null),a="crm"==t?[{question:"What is Atomwalk CRM?",answer:"Atomwalk CRM is a customer relationship management platform designed to help businesses manage their interactions with customers, leads, suppliers, and partners. It offers a comprehensive set of tools for task management, lead tracking, customer support, and sales process automation, allowing businesses to improve communication, streamline operations, and increase productivity."},{question:"How can I use Atomwalk CRM?",answer:"You can use Atomwalk CRM by signing up for an account and accessing its features either through a web app or mobile application. Once logged in, you can create customer profiles, manage leads, assign tasks, and track the progress of deals. Atomwalk CRM provides intuitive dashboards and reporting tools that help users oversee customer interactions, sales pipelines, and team activities efficiently."},{question:"How does CRM work?",answer:"A CRM works by consolidating customer and lead data into a centralized system. It records and tracks all interactions\u2014emails, calls, meetings\u2014making it easier for teams to access important information at any time. With Atomwalk CRM, you can manage leads through each stage of the sales pipeline, assign tasks to team members, automate follow-ups, and generate reports. By organizing all your customer-related data in one place, CRM systems help businesses improve customer service, boost sales, and drive growth."},{question:"How to add a Lead?",answer:"To add a lead in Atomwalk CRM, go to the Lead List section, where you can click on Add Lead. Fill in the required details such as name, contact information, and relevant notes about the lead's interest or status. You can also upload bulk leads if you have a file prepared. Once added, you can assign tasks to follow up on the lead and track its progress in the sales pipeline."},{question:"How do I track  a lead?",answer:"In Atomwalk CRM, leads can be tracked through the sales pipeline. You can view all leads in the Lead List and monitor their status, such as active or inactive, and see which tasks or follow-ups are assigned to them. The system also provides a visual representation of where each lead is in the sales cycle, and you can set reminders for future actions or update the lead's status based on recent interactions. This ensures that no lead is neglected and helps optimize conversion rates."}]:"equipment"==t?[{question:"How to create a user ID?",answer:"Only admin has the access to create user ID using user\u2019s email."},{question:"Can a user change his username and email?",answer:"No. User can\u2019t modify the username and email once it\u2019s created. User has to contact the admin for any modification."},{question:"What if I forget my username?",answer:"Our system lets you create a nickname to log in. So, if Ram forgets his default username, he can still access the system using his personalized nickname."},{question:"Is it possible to restrict certain users from accessing specific equipment?",answer:"Yes, Admins can restrict specific users or user groups from accessing certain equipment. For example, if Ram is not trained to use the high-powered laser machine, the admin can restrict him from booking it."},{question:"Can I view available booking slots for the current and upcoming week?",answer:"Absolutely! Users can view available booking slots for both the current and the upcoming week. For instance, if Ram wants to plan ahead, he can check the available slots for the next week and book equipment accordingly."},{question:"Can I cancel or reschedule a booking?",answer:"Yes! You can cancel or reschedule your booking at any time. For instance, if Jenny booked equipment for Thursday but needs it for Friday instead, she can cancel the original booking and create a new one."},{question:"Can the system block timeslots for scheduled maintenance?",answer:"Yes! The system automatically blocks time slots for scheduled maintenance. For example, if the centrifuge is scheduled for maintenance at 2 PM, it will block 1 PM to 4 PM, preventing any bookings during that period to ensure uninterrupted maintenance."},{question:"Can I set up different user groups for each department?",answer:"Yes, you can set up different user groups for each department in your lab equipment management system. For example, if the Biology Department requires access to specific equipment, you can create a user group specifically for them. This ensures that members of the Biology Department can manage and book equipment relevant to their research while restricting access to other departments."},{question:"How many times can I book equipment in a week?",answer:"Each user can book equipment as per the policy set up in your setup. For example, if Ram books for HPLC on Monday, Tuesday, and Friday then he won't be able to book again until the next week. Because for HPLC the max slot per week is 3."},{question:"Can I share my booked slot with another user?",answer:"No, each booking is tied to the specific user who made it. For example, if Ram booked the HPLC machine, only he has access to it during his time slot. However, Managers or Admins can make changes to the schedule if necessary."},{question:"Can I book equipment outside of working hours?",answer:"Yes! Our system allows 24/7 booking. For instance, if Ram prefers working late, he can book equipment at 11 PM on Tuesday, as long as it\u2019s available."},{question:"Can I see past bookings?",answer:"Yes, users can view their booking history in the system. For example, if Ram wants to check when he last used the PCR machine, he can log in and view his past bookings."},{question:"Can I generate reports for the required field?",answer:"Yes, you can generate custom reports based on specific fields like equipment usage, booking frequency, and maintenance schedules. For example, if Ram wants to analyze the usage of the PCR machine over the past month and he has access as a manager, then he can generate a report for that specific data."},{question:"Can I delete the unnecessary data from the software?",answer:"Yes, Admins can purge unnecessary or outdated data to keep the system running smoothly. For instance, if a large volume of old booking logs is slowing the system down, the admin can remove those logs without affecting current operations."}]:[{question:"What is Atomwalk HRM?",answer:"Atomwalk HRM is an all-in-one Human Resource Management solution designed to streamline HR processes such as employee attendance tracking, leave management, claims submission, payroll, and more. With its mobile app, Atomwalk HRM On-The-Go, employees and managers can manage HR tasks like real-time attendance, leave requests, approvals, and claims from anywhere, enhancing accessibility and efficiency. This system simplifies workflows from onboarding to exit, making it ideal for businesses looking to automate and optimize their HR operations while improving overall employee experience."},{question:"How can I use Atomwalk HRM?",answer:"You can use Atomwalk HRM by accessing it through its web-based platform or the Atomwalk HRM On-The-Go mobile app. Once logged in, employees can manage their attendance, apply for leave, submit claims, and access payroll information. Managers can approve or reject leave and claims, view reports, and monitor employee attendance in real-time. The system is designed to be user-friendly, with a dashboard that provides easy navigation to the HR functionalities relevant to your role."},{question:"How does HRM work?",answer:"Atomwalk HRM works by automating core HR processes like attendance tracking, leave management, claims submission, and payroll handling. The system integrates employee data and allows for real-time updates on various HR activities. It helps managers approve requests, generate reports, and track employee productivity, while employees can manage their own data through the self-service portal. The solution is designed to reduce paperwork and manual effort, improving efficiency and accuracy across HR operations."},{question:"Why should I choose Atomwalk HRM?",answer:["Zero Paperwork, managing the details anytime/anywhere digitally.","Documents are stored in the document management system (S3 bucket), accessible anytime by authorized personnel for future audit needs.","Expenses can be linked to respective projects (if using Project Management modules), aiding in project margin tracking and efficient cost control.","Automatic integration with accounting systems.","Email and WhatsApp integration.","Mobile app available for ESS (Employee Self-Service) for instant use.","Referral System.","Unlimited expense heads can be added as per the need."]},{question:"How to add a claim?",answer:"To add a claim in Atomwalk HRM, go to the 'Claims' section from the dashboard. Click on 'Submit New Claim,' then fill in the details such as claim type, amount, and description. You can also attach relevant receipts or documents. Once done, submit the claim for approval, and you\u2019ll be notified of its status in real-time. The system supports various claim categories, ensuring easy tracking and management of expenses."},{question:"How do I apply for a leave?",answer:"To apply for leave in Atomwalk HRM, log in to your account and navigate to the 'Leave' section. Select 'Apply Leave,' choose the type of leave (e.g., vacation, sick leave, WFH), specify the dates, and provide any necessary details or attachments. Submit the request, and you will be able to track its status as it moves through the approval process."},{question:"How can a manager approve a leave?",answer:"A manager can approve a leave in Atomwalk HRM by logging in and navigating to the 'Leave Approvals' section. There, they can review pending leave requests, check the employee's leave balance and history, and either approve or reject the request with a single click. The system provides options to add comments, and employees are notified instantly about the approval status."},{question:"Why and how does Atomwalk handle the company exit process?",answer:"Atomwalk\u2019s Exit Process module is designed to ensure a structured, seamless, and compliant offboarding experience for employees. It handles every aspect of the process, from resignation or termination to final settlement, asset handover, and exit interviews. With automated tracking and task management, it guarantees a smooth transition, protects company data and assets, and ensures legal compliance, leaving both the organization and the departing employee with a positive experience."}];return(0,g.jsxs)(rk,{children:[(0,g.jsx)(ok,{children:"All the A's to your Q's"}),(0,g.jsx)(ik,{children:a.map(((e,t)=>(0,g.jsxs)(ak,{children:[(0,g.jsxs)(sk,{onClick:()=>(e=>{i(r===e?null:e)})(t),children:[e.question,(0,g.jsx)("span",{children:r===t?"-":"+"})]}),(0,g.jsx)(lk,{isOpen:r===t,children:Array.isArray(e.answer)?(0,g.jsx)("ul",{children:e.answer.map(((e,t)=>(0,g.jsx)("li",{children:e},t)))}):(0,g.jsx)("p",{children:e.answer})})]},t)))}),(0,g.jsxs)(ck,{children:[(0,g.jsx)(fk,{src:nk,alt:"FAQ"}),(0,g.jsx)(uk,{children:"Still have questions?"}),(0,g.jsxs)(dk,{children:["Book a call with our team to learn how to integrate ATOMWALK ",(0,g.jsx)("span",{children:"crm"==t?"CRM":"equipment"==t?"LEMS":"HRM"})," with your business."]}),(0,g.jsx)(pk,{onClick:()=>{window.location.href="/demo.html"},children:"Book a demo"})]})]})},mk=n.p+"static/media/Leadmanagement.89aea16cb4591163e02a.png",gk=n.p+"static/media/CustomerMangement.3b6acb8648dc2e328cbf.png",xk=n.p+"static/media/partnership.4462db344dbb58334dd7.png",yk=n.p+"static/media/asset-management.32d672a7cc30dd5fb4c6.png",vk=n.p+"static/media/content-management.5d89ff2ade33a5b1d2fa.png",bk=li.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,wk=li.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,kk=li.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,Sk=li.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Ak=li.div`
  width: 285px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 20px 0;
    width: 80%;
  }
`,jk=li.div`
  width: 70px;
  height: 70px;
  background-color: ${e=>e.bgColor||"#ccc"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px auto;

  img {
    width: 50px;
    height: 50px;
  }
`,Ck=li.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,Ek=li.p`
  font-size: 1em;
  color: #666;
`,Ok=()=>{const e=e=>{window.location.href=`/${e}`};return(0,g.jsxs)(bk,{children:[(0,g.jsx)(wk,{children:"Key Features"}),(0,g.jsx)(kk,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,g.jsxs)(Sk,{children:[(0,g.jsxs)(Ak,{onClick:()=>e("leadManagement.html"),children:[(0,g.jsx)(jk,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:mk,alt:"Speed"})}),(0,g.jsx)(Ck,{children:" Enhanced User Management"}),(0,g.jsx)(Ek,{children:"Streamline and track leads from acquisition to conversion, ensuring efficient follow-ups and maximizing sales opportunities."})]}),(0,g.jsxs)(Ak,{onClick:()=>e("CustomerManagement.html"),children:[(0,g.jsx)(jk,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:gk,alt:"Trust"})}),(0,g.jsx)(Ck,{children:"Simplified Equipment Management"}),(0,g.jsx)(Ek,{children:"Manage customer relationships by storing interaction histories, preferences, and communication details in one centralized platform"})]}),(0,g.jsxs)(Ak,{onClick:()=>e("Channelpartner.html"),children:[(0,g.jsx)(jk,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:xk,alt:"Accuracy"})}),(0,g.jsx)(Ck,{children:"Equipment Maintenance"}),(0,g.jsx)(Ek,{children:"Collaborate effectively with business partners by tracking their contributions, agreements, and communication to ensure successful partnerships."})]}),(0,g.jsxs)(Ak,{children:[(0,g.jsx)(jk,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:yk,alt:"Reliability"})}),(0,g.jsx)(Ck,{children:"Gain Insights with Report & Analytics"}),(0,g.jsx)(Ek,{children:"Efficiently manage assets, investments, and portfolios while tracking performance and ensuring regulatory compliance"})]})]})]})},Rk=li.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e8f4fc;
  padding:90px 40px 0px 40px ;
  /* border-radius: 20px; */
  /* margin: 20px; */
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding:130px 40px 0px 40px ;
  }
`,Pk=li.div`
  max-width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,Tk=li.h1`
  font-size: 48px;
  color: #213e6d;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`,zk=li.p`
  font-size: 18px;
  color: #6d7278;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Mk=li.button`
  background-color: #337af3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #2863c7;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
  }
`,Ik=li.div`
  max-width: 50%;
  position: relative;
  z-index: 2;
  bottom: 0px;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`,Lk=li.img`
  width: 100%;
  height: auto;
`,Fk=li.img`
  position: absolute;
  top: 150px;
  left: 40px;
  width: 130px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80px;
  }
`,Nk=(li.img`
position: absolute;
    right: 436px;
    bottom: 0;
    width: 275px;
    z-index: 1;
  @media (max-width: 768px) {
    width: 100px;
  }
`,li.div`
  padding: 20px;
  background-color: #f5f5f5;
`,li.h1`
  text-align: center;
  color: #2f3b82;
`,li.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`,li.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,li.h2`
  color: #2f3b82;
  margin-bottom: 10px;
`,li.p`
  color: #333;
`,li.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #2f3b82;
    color: #fff;
  }
`,li.button`
  padding: 10px 20px;
  background-color: #2f3b82;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1e2870;
  }
`,()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Rk,{children:[(0,g.jsx)(Fk,{src:Ow,alt:"Abstract Shape"}),(0,g.jsxs)(Pk,{children:[(0,g.jsx)(Tk,{children:"Lab Management System"}),(0,g.jsx)(zk,{children:"Laboratories require meticulous organization and data management. A robust Lab Management System (LMS) can automate processes such as sample tracking, data entry, and reporting, which streamlines operations and ensures compliance with industry standards."}),(0,g.jsx)(Mk,{children:"Learn more"})]}),(0,g.jsx)(Ik,{children:(0,g.jsx)(Lk,{src:Ew,alt:"Laboratory Technician"})})]}),(0,g.jsx)(tk,{data:"lead"}),(0,g.jsx)(Ok,{}),(0,g.jsx)(hk,{data:"equipment"})]})),Dk=n.p+"static/media/Bloghreos.5aa2e0e24314590ba71c.jpg",Bk=n.p+"static/media/Pritam.3b843605de98c7062a24.jpg",_k=n.p+"static/media/Ashutosh.d4b90e7f5ddbbe2e4acc.png",Hk=li.section`
  background:linear-gradient(180deg, rgba(255,128,0,1), rgb(255 246 247));/* Horizontal gradient */
  padding: 180px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }
`,Uk=li.div`
  max-width: 700px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,Wk=li.h1`
  font-size: 48px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #454545;

  span {
    font-style: italic;
    font-weight: normal;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`,qk=li.p`
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,Gk=li.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 30px;
  }
`,Kk=li.a`
  padding: 12px 24px;
  background-color: ${e=>e.primary?"#ffffff":"transparent"};
  color: ${e=>e.primary?"#ff5200":"#ffffff"};
  border: ${e=>e.primary?"none":"2px solid #ffffff"};
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${e=>(e.primary,"#ffb280")};
    color: #ffffff;
  }
`,Vk=li.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,Jk=li.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;

  &:before {
    content: "✔";
    color: black;
    margin-right: 10px;
  }
`,Qk=li.div`
  position: relative;
  max-width: 470px;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`,Yk=li.img`
  width: 100%;
  border-radius: 15px;
`,Zk=li.div`
  position: absolute;
  bottom: -63px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Xk=li.div`
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`,$k=li.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`,eS=li.div`
  font-size: 14px;
  color: #333;
`,tS=()=>(0,g.jsxs)(Hk,{children:[(0,g.jsxs)(Uk,{children:[(0,g.jsxs)(Wk,{children:["Stay Informed with the Latest Updates and ",(0,g.jsx)("span",{children:"Blog Highlight"})]}),(0,g.jsx)(qk,{children:"Stay informed with the latest updates and blog highlights, featuring essential insights and expert analysis."}),(0,g.jsxs)(Gk,{children:[(0,g.jsx)(Kk,{href:"https://play.google.com/store/search?q=atomwalk&c=apps&hl=en",primary:!0,children:"Download Atomwalk Apps"}),(0,g.jsx)(Kk,{href:"/demo.html",children:"Try Demo"})]}),(0,g.jsxs)(Vk,{children:[(0,g.jsx)(Jk,{children:"eliminate repetitive tasks with Jula"}),(0,g.jsx)(Jk,{children:"productive and enthusiastic team member"}),(0,g.jsx)(Jk,{children:"Streamline lead tracking"})]})]}),(0,g.jsxs)(Qk,{children:[(0,g.jsx)(Yk,{src:Dk,alt:"Blog Preview"}),(0,g.jsxs)(Zk,{children:[(0,g.jsxs)(Xk,{children:[(0,g.jsx)($k,{src:Bk,alt:"User 1"}),(0,g.jsxs)(eS,{children:["Ashutosh Mohapatra - Following",(0,g.jsx)("br",{}),"The Impact of Technology on the Workplace: Atomwalk CRM On-the-Go"]})]}),(0,g.jsxs)(Xk,{children:[(0,g.jsx)($k,{src:_k,alt:"User 2"}),(0,g.jsxs)(eS,{children:["Pritam Kumar Nayak - Following",(0,g.jsx)("br",{}),"Tips You Must know: Atomwalk HRM On-the-Go"]})]})]})]})]}),nS=li.div`
  background-color: rgb(255 246 247);
`,rS=li.p`
  grid-column: span 3;
  text-align: center;
  color: #ff0000;
  font-size: 40px;
  font-weight: 500;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,oS=li.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on mobile */
  }
`,iS=li.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`,aS=li.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`,sS=li.div`
  padding: 15px;
`,lS=li.span`
  font-size: 12px;
  color: #007BFF;
  font-weight: bold;
  text-transform: uppercase;
`,cS=li.h2`
  font-size: 18px;
  color: #333;
  margin: 10px 0;
`,uS=li.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #888;
  margin-top: auto;
`,dS=li.span`
  display: flex;
  align-items: center;
`,pS=li.span`
  font-size: 12px;
`,fS=li.div`
  padding: 20px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`,hS=li.div`
  display: flex;
  align-items: center;
`,mS=li.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 250px;

  @media (max-width: 768px) {
    width: 100%;
  }
`,gS=li.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color:  rgba(255,128,0,1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color:  rgb(255 56 0);
  }
`,xS=()=>{const[e,t]=(0,o.useState)(""),n=[{id:1,title:"The Impact of Technology on the Workplace: Atomwalk CRM On-the-Go",category:"Technology",image:"https://www.homecareinsight.co.uk/2020/07/connected-technology.jpg",author:"Ashutosh Mohapatra",date:"August 20, 2024"},{id:2,title:"The Impact of Technology on the Workplace: How Technology is Changing",category:"Technology",image:"https://paas-s3-broker-prod-lon-2edbd31f-65e0-4d35-9755-fde7c3b1b292.s3.amazonaws.com/images/Tech_2.2e16d0ba.fill-960x540.png",author:"A Sriya",date:"April 20, 2024"},{id:3,title:"5 Common HR Software Problems and Troubleshooting Tips You Must know: Atomwalk HRM On-the-Go",category:"Technology",image:"https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg",author:"Pritam Kumar Nayak",date:"March 23, 2024"},{id:4,title:"The Impact of Technology on the Workplace: How Technology is Changing",category:"Technology",image:"https://koala.sh/api/image/v2-213fq-qwlz7.jpg?width=1216&height=832&dream",author:"Ernie Smith",date:"August 20, 2022"},{id:5,title:"The Impact of Technology on the Workplace: How Technology is Changing",category:"Technology",image:"https://images.saymedia-content.com/.image/t_share/MjAxNzE5OTgxMjA3OTg3ODU1/examples-of-digital-technology.jpg",author:"Eric Smith",date:"August 20, 2022"},{id:6,title:"The Impact of Technology on the Workplace: How Technology is Changing",category:"Technology",image:"https://miro.medium.com/v2/resize:fit:664/1*K3Mb7l3_-saN81lhBUBrIA.jpeg",author:"Tracey Wilson",date:"August 20, 2022"}].filter((t=>t.title.toLowerCase().includes(e.toLowerCase()))),r=()=>{window.location.href="/BlogDetails.html"};return(0,g.jsxs)(nS,{children:[(0,g.jsxs)(fS,{children:[(0,g.jsx)("h2",{style:{color:"#454545"},children:"Latest Post"}),(0,g.jsxs)(hS,{children:[(0,g.jsx)(mS,{type:"text",placeholder:"Search by title...",value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)(gS,{onClick:()=>console.log("Searching..."),children:"Search"})]})]}),(0,g.jsx)(oS,{children:n.length>0?n.map((e=>(0,g.jsxs)(iS,{onClick:r,children:[(0,g.jsx)(aS,{src:e.image,alt:e.title}),(0,g.jsxs)(sS,{children:[(0,g.jsx)(lS,{children:e.category}),(0,g.jsx)(cS,{children:e.title}),(0,g.jsxs)(uS,{children:[(0,g.jsx)(dS,{children:e.author}),(0,g.jsx)(pS,{children:e.date})]})]})]},e.id))):(0,g.jsxs)(rS,{children:['No posts found for "',e,'"']})})]})},yS=()=>(0,g.jsxs)("div",{children:[(0,g.jsx)(tS,{}),(0,g.jsx)(xS,{})]}),vS=li.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,bS=li.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`,wS=li.h2`
  font-size: 2rem;
  color: #333;
  margin: 20px 0;
`,kS=li.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`,SS=li.div`
  text-align: center;
  margin: 30px 0;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`,AS=()=>(0,g.jsxs)(vS,{children:[(0,g.jsx)(bS,{children:"Revolutionize Workforce Management with Atomwalk HRM On-The-Go"}),(0,g.jsx)(SS,{children:(0,g.jsx)("img",{src:"https://www.dnkinfotelecom.com.br/wp-content/uploads/2021/01/WFM.png",alt:"Workforce Management"})}),(0,g.jsx)(kS,{children:"Managing a dynamic workforce has never been easier. Atomwalk HRM On-The-Go empowers businesses to streamline their HR processes with smart, mobile-first solutions that work in real-time. Designed for today\u2019s fast-paced and distributed workforce, the app ensures that every aspect of employee management is simplified and efficient."}),(0,g.jsx)(kS,{children:"With our app, employees can check-in and check-out seamlessly using the built-in location tracking feature. No more outdated manual attendance records or guesswork. Our real-time GPS location tracking ensures 100% accuracy in attendance management, making it easier than ever for employees to log their presence from any location. This is especially useful for remote teams or employees who are frequently on the move."}),(0,g.jsx)(kS,{children:"Not only does Atomwalk HRM help track attendance, but it also offers employees a smart status calendar view, providing them with a clear visual of their attendance history. Employees can easily monitor their hours, check for missed check-ins, and stay on top of their time management. This improves transparency and promotes accountability across the workforce."}),(0,g.jsx)(kS,{children:"For managers, Atomwalk HRM provides a bird's-eye view of attendance trends, helping you make informed decisions about staffing and time-off management. With comprehensive reports and insights, you can ensure that your team stays productive and compliant, no matter where they are working from."}),(0,g.jsx)(wS,{children:"Seamless Leave and Claim Management Anytime, Anywhere"}),(0,g.jsx)(SS,{children:(0,g.jsx)("img",{src:"https://media.licdn.com/dms/image/D5612AQG26zqve50FHQ/article-cover_image-shrink_720_1280/0/1693328750791?e=2147483647&v=beta&t=U9v7s3R6xZco5ui_VMkZKcRfJB4I9PiJ40m8pDj4uUk",alt:"Leave Management"})}),(0,g.jsx)(kS,{children:"Say goodbye to paperwork and complicated approval workflows. With Atomwalk HRM On-The-Go, employees can apply for leave directly from the app\u2014whether it's Earned Leave, Loss of Pay, or Work From Home. Managers are immediately notified of these requests and can approve, reject, or provide feedback within seconds, drastically reducing approval delays and ensuring that time-off requests are handled smoothly."}),(0,g.jsx)(kS,{children:"Employees can track their leave status, check remaining leave balances, and even plan future leave requests with ease. Whether they are on the go or at the office, managing time-off has never been this intuitive."}),(0,g.jsx)(kS,{children:"But that\u2019s not all. Expense claims are also made simple with Atomwalk HRM. Employees can submit claims by uploading receipts directly from their phone\u2019s storage or by capturing real-time photos of bills and receipts using their mobile device. The app allows them to itemize and categorize expenses, ensuring a smooth submission process."}),(0,g.jsx)(SS,{children:(0,g.jsx)("img",{src:"https://www.cflowapps.com/wp-content/uploads/2023/02/clms_prcsautomtn.jpg",alt:"Claim Processing"})}),(0,g.jsx)(kS,{children:"For managers, reviewing claims is equally streamlined. The app enables them to review all supporting documents and approve, reject, or send the claim back for revisions based on their approval limits. This eliminates the hassle of chasing down paper receipts or emails, speeding up the reimbursement process."}),(0,g.jsx)(kS,{children:"Atomwalk HRM On-The-Go enhances efficiency across the board, empowering employees and managers to handle their HR tasks anytime, anywhere, all from their mobile device. It\u2019s more than just an app\u2014it\u2019s a complete HR solution in your pocket."}),(0,g.jsx)(wS,{children:"Why Choose Atomwalk HRM On-The-Go?"}),(0,g.jsxs)("ul",{style:{color:"black"},children:[(0,g.jsx)("li",{children:"Real-Time Location Tracking: Know exactly where your team is clocking in from with precise GPS-enabled check-ins and check-outs."}),(0,g.jsx)("li",{children:"Comprehensive Attendance Management: Track attendance trends, generate reports, and make data-driven decisions to optimize workforce management."}),(0,g.jsx)("li",{children:"Smart Leave Management: Apply, review, and manage leave requests instantly, ensuring that your team always operates at peak efficiency."}),(0,g.jsx)("li",{children:"Efficient Claim Processing: Submit, review, and approve expense claims with ease, all from your mobile device."}),(0,g.jsx)("li",{children:"Managerial Control: Managers have access to insightful dashboards for approvals, employee data, and team performance, all at their fingertips."})]}),(0,g.jsx)(kS,{children:"Atomwalk HRM On-The-Go transforms tedious HR tasks into quick, seamless interactions. Whether you\u2019re a growing business or managing a large distributed team, Atomwalk HRM has you covered."})]}),jS=n.p+"static/media/HrApp.0eb9df2f1d6d57adc2bd.png",CS=li.div`
  background-color: #a000ff; /* Prepped purple color */
  padding: 60px 30px;
  /* border-radius: 12px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  /* margin: 0px 70px 70px 70px; */
  /* margin-top: 130px; */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,ES=li.div`
  flex: 1;
  padding-right: 20px;
  
  @media (max-width: 768px) {
    padding-right: 0;
  }
`,OS=li.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 10px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,RS=li.p`
  color: #ffb3ff;
  font-size: 1rem;
  margin-bottom: 10px;
`,PS=li.p`
  font-size: 0.9rem;
  color: #ddd;
  margin-bottom: 20px;
`,TS=li.div`
  flex: 1;
  text-align: center;
  margin-top:50px;
  
  img {
    max-width: 110%;
    height: auto;
    border-radius: 12px;
  }
`,zS=()=>(0,g.jsxs)("div",{style:{backgroundColor:"white"},children:[(0,g.jsxs)(CS,{children:[(0,g.jsxs)(ES,{children:[(0,g.jsx)(OS,{children:"Streamline Your HR Processes with ATOMWALK HRM On-The-Go: Attendance, Leave, and Claims Management Simplified "}),(0,g.jsx)(RS,{children:"By Atomwalk"}),(0,g.jsx)(PS,{children:"6 minute read \u2022 October 01, 2024"})]}),(0,g.jsx)(TS,{children:(0,g.jsx)("img",{src:jS,alt:"Task Paralysis Article"})})]}),(0,g.jsx)(AS,{})]}),MS=n.p+"static/media/hr.e13184a1f188a146402d.png",IS=n.p+"static/media/payroll.039b976618946de508d7.png",LS=n.p+"static/media/attendance1.c91a722f5930666fca97.png",FS=n.p+"static/media/onboarding.6125efea4152d41fc3fc.png",NS=n.p+"static/media/empdata.504d86deb99fc409ff66.png",DS=n.p+"static/media/leave-management.8af525284b9c7ca1769c.png",BS=n.p+"static/media/claimmanage.81c59bd374c0f3c4875c.png",_S=n.p+"static/media/exit-process.6c14ce06c14fb114a462.png",HS=n.p+"static/media/performance-management.3d529838ac44380c1f09.png",US=li.div`
  padding: 110px 20px;
  background-color: #f0ebf7;
  text-align: center;
`,WS=li.h2`
  font-size: 2.5em;
  font-weight: bold;
  margin-top: 30px;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,qS=(li.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,li.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`),GS=li.div`
  width: 285px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  margin: 20px;

  @media (max-width: 768px) {
    margin: 20px 0;
    width: 80%;
  }
`,KS=li.div`
  width: 70px;
  height: 70px;
  background-color: ${e=>e.bgColor||"#ccc"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px auto;

  img {
    width: 50px;
    height: 50px;
  }
`,VS=li.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,JS=li.p`
  font-size: 1em;
  color: #666;
`,QS=()=>{const e=e=>{window.location.href=`/${e}.html`};return(0,g.jsxs)(US,{children:[(0,g.jsx)(WS,{children:"Key Features"}),(0,g.jsxs)(qS,{children:[(0,g.jsxs)(GS,{onClick:()=>{e("employeehr")},children:[(0,g.jsx)(KS,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:FS,alt:"Onboarding"})}),(0,g.jsx)(VS,{children:"On-Boarding Process:"}),(0,g.jsx)(JS,{children:"Seamlessly onboard new employees by setting up departments, grades, and HR policies from one place."})]}),(0,g.jsxs)(GS,{onClick:()=>{e("employeehr")},children:[(0,g.jsx)(KS,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:NS,alt:"EmployeeData"})}),(0,g.jsx)(VS,{children:"Employee Data:"}),(0,g.jsx)(JS,{children:"Maintain accurate employee records with the ability to add, update, and delete employee details. Easily manage employee data for better decision-making."})]}),(0,g.jsxs)(GS,{onClick:()=>{e("attendance")},children:[(0,g.jsx)(KS,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:LS,alt:"Attendance"})}),(0,g.jsx)(VS,{children:"Attendance:"}),(0,g.jsx)(JS,{children:"Track employee attendance in real-time, with built-in GPS tracking and the ability to mark attendance remotely."})]}),(0,g.jsxs)(GS,{onClick:()=>{e("leave")},children:[(0,g.jsx)(KS,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:DS,alt:"Reliability"})}),(0,g.jsx)(VS,{children:"Leave Management:"}),(0,g.jsx)(JS,{children:"Handle leave requests with ease. Managers can approve or reject requests, view leave history, and ensure employees stay within allotted time off."})]})]}),(0,g.jsxs)(qS,{children:[(0,g.jsxs)(GS,{onClick:()=>{e("claim")},children:[(0,g.jsx)(KS,{bgColor:"#EFF498",children:(0,g.jsx)("img",{src:BS,alt:"Reliability"})}),(0,g.jsx)(VS,{children:"Claim Management:"}),(0,g.jsx)(JS,{children:"Submit and manage claims such as travel or expense reimbursements. Employees can upload receipts, and managers can review and approve claim"})]}),(0,g.jsxs)(GS,{onClick:()=>{e("payroll")},children:[(0,g.jsx)(KS,{bgColor:"#D99B80",children:(0,g.jsx)("img",{src:IS,alt:"Reliability"})}),(0,g.jsx)(VS,{children:"Payroll:"}),(0,g.jsx)(JS,{children:"Automate payroll processing with integrated features for salary calculations, deductions, and disbursements. Ensure timely and accurate payments."})]}),(0,g.jsxs)(GS,{onClick:()=>{e("appraisal")},children:[(0,g.jsx)(KS,{bgColor:"#F7DAF4",children:(0,g.jsx)("img",{src:HS,alt:"Performance Mangement"})}),(0,g.jsx)(VS,{children:"Performance Mangement System:"}),(0,g.jsx)(JS,{children:"The appraisal system supporting KPI-based evaluations, with self-assessment, manager scoring, and grade normalization for fair, transparent performance reviews and structured reporting."})]}),(0,g.jsxs)(GS,{onClick:()=>{e("employeehr")},children:[(0,g.jsx)(KS,{bgColor:"#F7DADB",children:(0,g.jsx)("img",{src:_S,alt:"Reliability"})}),(0,g.jsx)(VS,{children:"Exit Process:"}),(0,g.jsx)(JS,{children:"Simplify the employee exit process, from resignation submission to final clearance. Ensure smooth offboarding with documented workflows"})]})]})]})},YS=li.div`
  background-color: white;
  color: blue;
  width: 100%;
  /* padding-top: 10px; */
  padding-bottom: 10px;
  /* height: 1472px; */
`,ZS=li.div`
  height: 472px;
  background-color: white;
  color: blue;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  
  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    height: auto;
    margin-bottom: -30px;
  }
`,XS=li.div`
  height: 125%;
  width: 100%;
  background-color: #eae3ff;
  padding: 90px;
  padding-top: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  
  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    padding: 20px; /* Reduce padding for smaller screens */
    padding-top: 50px; /* Adjust top padding */
    flex-direction: column; /* Stack items vertically */
    justify-content: center; /* Center items */
    align-items: center; /* Center items */
  }
`,$S=li.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 400;
  line-height: 61.2px;
  margin-left: 40px;
  margin-top: 25px;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    font-size: 32px; /* Reduce font size for smaller screens */
    line-height: 38px; /* Adjust line height accordingly */
    margin-left: 0px; /* Center text by removing left margin */
    margin-top: 40px; /* Adjust top margin */
    text-align: center; /* Center align the text */
  }
`,eA=li.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 600;
  line-height: 61.2px;
  margin: 0px 0px 16px;
`,tA=li.p`
  color: #454544;
  /* width: 65%; */
  font-size: 21px;
  /* word-wrap: normal; */
  /* line-height: 31.504px; */
  /* margin: 0px 0px 24px; */
  @media (max-width: 768px) {
    width: 100%;
  }
`,nA=li.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 60%;
  line-height: 26px;
  padding: 44px 0px 0px;
`,rA=li.button`
  align-items: center;
  background-color: #aa00ea;
  border-color: #f3a3ff;
  border-radius: 100px;
  border-style: solid;
  border-width: 1.6px;
  color: #fff;
  font-weight: 500;
  line-height: 24px;
  padding: 14px 32px;
  text-align: center;
`,oA=li.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`,iA=li.div`
  line-height: 26px;
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`,aA=()=>(0,g.jsxs)(YS,{children:[(0,g.jsx)(ZS,{children:(0,g.jsxs)(XS,{children:[(0,g.jsxs)($S,{children:[(0,g.jsx)(eA,{children:"Atomwalk HRM On-The-Go"}),(0,g.jsx)(tA,{children:"A smart, mobile-first solution for managing employee attendance, leave requests, claims, and real-time location tracking\u2014right from your phone"}),(0,g.jsx)(rA,{onClick:()=>{window.location.href="/demo.html"},children:(0,g.jsx)(oA,{children:"Request a Demo"})})]}),(0,g.jsx)(nA,{children:(0,g.jsx)(iA,{children:(0,g.jsx)("img",{src:MS,alt:"Pricing Challenge Background"})})})]})}),(0,g.jsx)(tk,{data:"HR"}),(0,g.jsx)(QS,{}),(0,g.jsx)(hk,{})]}),sA=n.p+"static/media/claim.479c41ec78032b2383c8.png",lA=n.p+"static/media/leave1.09feac747470d0615599.png",cA=n.p+"static/media/hrm_hero_img.b2b560b7a515a331176a.png",uA=li.div`
  padding: 20px;
  background-color: ${e=>e.bgcolor?e.bgcolor:"#f0ebf7"};
  @media (min-width: 768px) {
    padding: 50px;
  }
`,dA=li.div`
  margin-bottom: 40px;
`,pA=li.h1`
  margin-top: 80px;
  font-size: 35px;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,fA=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,hA=li.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`,mA=li.div`
  background-color: #ffffff;
  
  /* text-align: center; */
  height: 100px;
  padding: 10px;
  padding-top: 20px;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid #4A90E2;
  width: 185px;
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    min-width: 100%;
    max-height: fit-content;
  }
`,gA=li.p`
text-align: center;
color: #4A90E2;
font-weight: bold;

`,xA=li.div`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 30px solid #4A90E2;
  margin: 0 10px;
  transform: rotate(-90deg);

  @media (max-width: 768px) {
    transform: rotate(360deg);
  }
`,yA=e=>{let{data:t,bgcolors:n}=e;const r={Claim:[{step:"Expense Item Setup"},{step:"Expense Advance for Employee"},{step:"Claim Expense"},{step:"Approval Of Claim"},{step:"Settlement of Claims"},{step:"Reports & Dashboards"}],Leave:[{step:"Setup Holiday Calendar"},{step:"Leave Dashboard"},{step:"Manage Leave by Employee"},{step:"Manage Leave by Manager"},{step:"Reports & Analysis"}],Payroll:[{step:"Payroll Setup & Controls"},{step:"Generate Monthly Salary"},{step:"Post Salary"}],Attendance:[{step:"Check-in"},{step:"Attendance Dashboard"},{step:"Manage Attendance"}],Appraisal:[{step:"Performance Mangement System"},{step:"Self Appraisal Process "},{step:"Manager Appriasl Process "},{step:"Appriasl Rivew Process and Reports "}],HR:[{step:"On-Boarding"},{step:"Employee Data"},{step:"Exit Process"}],Lead:[{step:"Lead Capture",color:"#4A90E2"},{step:"Lead Tracking",color:"#4A90E2"},{step:"Obtain Customer Management",color:"#4A90E2"},{step:"Lead Lifecycle Management ",color:"#4A90E2"},{step:"Lost Lead Recovery and Management",color:"#4A90E2"}],Campaign:[{step:"Flexible Template Creation by User (No Restrictions)",color:"#4A90E2"},{step:"Universal Template Access for All Users",color:"#4A90E2"},{step:"Target Audience Segmentation",color:"#4A90E2"},{step:"Campaign Template Review Process",color:"#4A90E2"},{step:"Automated Campaign Trigger with Predefined Scheduler",color:"#4A90E2"}],Partner:[{step:" Add Partner",color:"#4A90E2"},{step:"Order Information Tracking",color:"#4A90E2"},{step:"Commission Management",color:"#4A90E2"},{step:"Multi-Report Generation",color:"#4A90E2"}],Customer:[{step:" Customer Uploading (Upload Customer Data)",color:"#4A90E2"},{step:"Order Management (Manage Reservations)",color:"#4A90E2"},{step:" Process-wise Order Management (Resale and Cross-Selling)",color:"#4A90E2"},{step:"Ticket Tracking (AMC Tracking)",color:"#4A90E2"},{step:"Reports and Dashboards",color:"#4A90E2"}]}[t]||[];return(0,g.jsxs)(uA,{bgcolor:n,children:[(0,g.jsxs)(pA,{children:["Process Flow for ",t]}),(0,g.jsx)(dA,{children:(0,g.jsx)(fA,{style:{backgroundColor:"#ffffff"},children:(0,g.jsx)(hA,{children:r.map(((e,t)=>(0,g.jsxs)(o.Fragment,{children:[(0,g.jsx)(mA,{children:(0,g.jsx)(gA,{children:e.step})}),t<r.length-1&&(0,g.jsx)(xA,{})]},t)))})})})]})},vA=(n.p,n.p+"static/media/check_mark.0e730ab2b5bde0948106.png");const bA=n.p+"static/media/img1.db8c904dcae430a66a73d8526e71a235.svg";const wA=n.p+"static/media/add_claim_img.9a055c2bba7295dac45d64bb04a04aa7.svg";const kA=n.p+"static/media/emp_advance.47f2f953acff90307e031575f25a4aa3.svg";const SA=n.p+"static/media/approve_claim.1ec6d1911ec4293f92b19cff055accd6.svg";const AA=n.p+"static/media/sattle_claim.db01cb0fc07cd07f6f46644e1d54b56c.svg";const jA=n.p+"static/media/expense_claim.fe819c5f6fed879968c2f6505a935b16.svg";const CA=n.p+"static/media/holiday_calender.0356f141e6752176e65622edda7c9c42.svg";const EA=n.p+"static/media/leave_dashboard.364f838500dbe22de94eb7462c9bc5c5.svg";const OA=n.p+"static/media/add_leave.41af44048f7af19e55b89ade3f692bcf.svg";const RA=n.p+"static/media/approval_leave.2d0fcfea51af1264405792a096780307.svg";const PA=n.p+"static/media/leave_report.99de12c7d472ed6f47e7afdba34e86cc.svg";const TA=n.p+"static/media/payroll_setup.27c03a07aabe3de8e5f5c49e11a0f209.svg";const zA=n.p+"static/media/appraisal_setup.8d56db0e9680f2c79eaf4f5818b62515.svg";const MA=n.p+"static/media/onboarding.c70afc83fb95b86ef57b12a3079b01bd.svg";const IA=n.p+"static/media/employeeData.80b3a11ec9cabbd9b54af6eadca1b988.svg";const LA=n.p+"static/media/exit_process.51b811c4d0e34efbe01988ecefd2afa0.svg";const FA=n.p+"static/media/payroll-seup.5ac3bdff9f261cbfa49d54b17fa60796.svg";const NA=n.p+"static/media/generate-salary.941e7229b7419bc7b30da4d1bbf66986.svg";const DA=n.p+"static/media/post-salary.38b58bb0e0d588485e9492fddd098bea.svg";const BA=n.p+"static/media/appraisal-setup-feature.251253d252bccb667d40f76d15e4f873.svg";const _A=n.p+"static/media/self-appraisal.bb994ab17bfb97202c339ef0502301f2.svg";const HA=n.p+"static/media/emp-appraisal.ec5ebcfbd25b2cf468604114605b8d75.svg";const UA=n.p+"static/media/manager-evaluation.b1215000c57ff19889439ffeb81168d6.svg";const WA=n.p+"static/media/check-in.35e76b5d8141b8b7ec1e2ba2e5fae5e9.svg";const qA=n.p+"static/media/attendance-dashboard.9fc9346fd1292914e1ab95e5539b7da6.svg";const GA=n.p+"static/media/emp-attendance.1872bc616b85905f36d69ccca2540c9e.svg",KA=li.div`
  width: 100%;
  height: 100%;
`,VA=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0ebf7; 
  padding: 20px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
`,JA=li.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  img {
    width: 100%;
    max-width: 500px;
  }

  @media (min-width: 768px) {
    width: 40%;
  }
`,QA=li.div`
  /* background-color: #fff; */
  /* border-color: #e8e8e9;
  border-radius: 20px;
  border-style: solid;
  border-width: 0.8px; */
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  /* gap: 5px; */
  justify-content: center;
  line-height: 26px;
  /* padding: 5px; */
  text-align: center;

  p {
    color: #1c1b1f;
    line-height: 24px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    gap: 20px;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* width: 160px; */
    gap: 8px;
  }

  li img {
    width: 30px;
    height: 30px;
  }

  li span {
    color: #1E90FF; 
    font-size: 0.9rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    ul {
      justify-content: space-around;
    }
  }
`,YA=li.div`
  text-align: center;
  color: #000;
  margin-top: 20px;

  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5rem;
    color: #6a1b9a;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    text-align: left;
    width: 50%;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`,ZA=e=>{let{data:t}=e;const n="Claim"===t?[{title:"Simplify Claim Expense Item Setup",subtitle:"Efficiently manage and control Expense Items with Service Item category setup.",description:"Define Service Item Categories to streamline Expense Items, giving employees a quick selection process for claim submissions. This setup enables you to capture GST Applicability, Submit of Expense Document Applicability, Limits for Approval, etc., to simplify and streamline your Claim Management Process.",benefits:["Define Service Item Categories","Flexible Expense Item Setup","Analysis of expense based on expense category/Item"],imageSrc:bA,imageAlt:"Expense Setup",imgPosition:"left"},{title:"Employee Advance Tracking and Expense Claim Offset Against Advance",subtitle:"Employee Advance upload, tracking, and history of offset against Expense Claims.",description:"Manage Employee expense advance and efficiently track advance offset against each claim, offering a clear view of balances and outstanding advance amount. Enables decision-making process for effective advance amount.",benefits:["Advance Tracking","Clear offset records with claim details"],imageSrc:kA,imageAlt:"Advance",imgPosition:"right"},{title:"Simplified Claim Expenses by Employee",subtitle:"Submit and track expense claims easily, anytime, anywhere.",description:"Employee can submit expense claims by selecting an Expense item, adding project details if needed, and uploading supporting documents like bills and receipts. The mobile app feature allows employee to capture and submit receipts instantly, making the process faster and more efficient for both employee and approval & settlement process for company on real-time basis.",benefits:["Simple Claim Submission","Upload Supporting Documents","Mobile-Friendly Convenience, Instant Receipt Capture","Expense auto linkage to projects and efficient project margin tracking"],imageSrc:wA,imageAlt:"Add Claim",imgPosition:"left"},{title:"Smart Claim Flow for Quick, Transparent Approvals",subtitle:"Automated workflows simplify review and referral based on approval limit setup.",description:"Submitted claims are automatically routed to managers for review, with options to approve, reject, or send back for clarification. The system verifies manager approval authority based on grade and approval limits, forwarding claims to a higher-level manager if needed. This process maintains digital records for easy tracking and transparent decision-making. Approval process is enabled through Mobile app for real-time approval and quick settlement process.",benefits:["Flexible Review/Approval Flows","Approval limits based on Amount","Anytime, anywhere approval for speedy settlement"],imageSrc:SA,imageAlt:"Advance Tracking Icon",imgPosition:"right"},{title:"Accurate and Streamlined Claim Settlements",subtitle:"Efficient settlement process with auto flow of data to accounts and linked projects.",description:"Once approved, claims move to the settlement phase where user can view all claims and advance records side by side for easy and effective settlement processing. The screen provides direct access to claim details and attached documents, with a bulk settlement feature to handle multiple claims efficiently. This seamless process with Accounts and Project management modules.",benefits:["Clear Claim View","Direct Document Access","Bulk Settlement Option","Reliable Processing with auto Account ledger processing"],imageSrc:AA,imageAlt:"Settle Claim",imgPosition:"left"},{title:"Efficient Dashboard to Track All Expense Items",subtitle:"Instant insights on claim status and trends.",description:"The Expense Claim Dashboard provides graphical charts view for claim status and monthly trends, helping employee/Manager track claims at a glance. Extensive filter criteria based on expense category, expense item, departments, etc., for analysis and managing your expenses in a better way.",benefits:["Graphical Overviews with real-time update","Extensive Filter criteria for reports","Download reports in PDF/XLS"],imageSrc:jA,imageAlt:"Post Accounting",imgPosition:"right"}]:"Leave"===t?[{title:"Location-Wise - Simplified Management of Your Holiday Calendar",subtitle:"Easy and exhaustive way to take care of your complex organisational need of Holiday management (Single/Multi location).",description:"Manage Holiday setup digitally for your business for each Year across single/multiple locations. Holiday setup supports Mandatory and Optional holidays for each location. Supports Multiple leave types and yearly limit for each leave type. Setup enables better Project execution planning for the organisation and provides transparency for the employee to plan/utilise their Leave.",benefits:["Easy Exhaustive Setup across Single/Multi Location","Supports Audit trails and track changes in setup","Optional Holiday setup enables for each location","Transparent and accessible by all users/employees"],imageSrc:CA,imageAlt:"Holiday Calendar",imgPosition:"left"},{title:"Dashboard for Complete Leave Overview",subtitle:"Easily track, manage, and plan your time off/utilisation of Leave.",description:"Employee can view detailed summary dashboard of their leave status, including total applied, approved, and pending leave categorized by leave type. Month-wise trend analysis enables the Manager to manage risk at project planning level. The system also provides a year-wise holiday list which is accessible through Mobile app, making it simple to manage leave information and plan time off effectively. Leave details are shared with Billing/Payroll modules seamlessly to eliminate any processing errors.",benefits:["Comprehensive Overview, Detailed for each leave type","Trend Analysis for better planning and risk management","Accessible from Mobile app","Shared with Payroll and Project Management modules seamlessly"],imageSrc:EA,imageAlt:"Leave Dashboard",imgPosition:"right"},{title:"Apply Leave from Anywhere Anytime",subtitle:"Simple Leave Application: easy to apply and cancel from anywhere & anytime.",description:"Employee can apply for multiple types of leaves like Earned Leave, Work From Home, and Loss of Pay through both web and mobile apps. On submitted, the leave request automatically moves to manager's dashboard for approval, streamlining the process.",benefits:["Both Web and Mobile Convenience","Multiple leave types","Easy Application process with Holiday List Integration, to alter users"],imageSrc:OA,imageAlt:"Leave Application",imgPosition:"left"},{title:"Swift Leave Approvals from Anywhere Anytime",subtitle:"Approve/Reject Leave Requests with Ease and Precision from Approver Dashboard.",description:"Managers can easily filter leave requests by individual employee or leave type, providing a clear view of total leave applied, approved, and pending for each employee. This organized approach allows for efficient navigation and prompt action. Managers can review details before making decisions, with a mandatory remark field to ensure clear communication with employees during the approval or rejection process.",benefits:["Organized and Filter View","Comprehensive Overview","Streamlined Approval Process","Efficient Leave Approval","Mobile Convenience","Approval History"],imageSrc:RA,imageAlt:"Leave Approval",imgPosition:"right"},{title:"Organized Leave Insights for Efficient Management",subtitle:"Gain Complete Insights into Leave Patterns and Usage",description:"Managers can sort leave requests by individual employee or leave type, providing a clear and organized view. They also have access to a comprehensive annual leave report that includes all leave details across departments. This feature ensures efficient record-keeping and supports transparent leave management, helping managers make informed decisions.",benefits:["Informed Decision-Making","Exportable Reports","Leave Balances at a Glance","Customizable Reports"],imageSrc:PA,imageAlt:"Leave Reports",imgPosition:"left"}]:"Payroll"===t?[{title:"Flexible and Compliant Payroll Management",subtitle:"Configurable Salary structure with predefined integrated TDS/PT/PF/Gratuity calculation for seamless employee compensation.",description:"Our HR management offers a comprehensive system for managing employee salary structures, and compliance setup in accordance with government regulations. Companies can create tailored salary structures for different employee grades. The platform also facilitates setting up Provident Fund, Gratuity, Employee State Insurance (ESI), and TDS, PT tax parameters, ensuring full compliance and transparency in payroll management. In addition to this, any other salary components like Variable Pay and custom deductions can be configured in the system, making it highly flexible for any complex scenario.",benefits:["Configurable pay scale grades","Configurable salary structures with formula builder","Customizable payslip design","Dynamic Salary Structures to include compliance like PF, Gratuity, ESI, PT, and TDS","Audit trails for Setup control","Contract Rate setup for contract employee"],imageSrc:FA,imageAlt:"Payroll & Compliance",imgPosition:"left"},{title:"Streamlined Monthly Salary Generation with Real-Time Error Validation",subtitle:"Seamless access to Attendance data for accurate and quick Payroll processing.",description:"Our payroll processing tool enables quick salary generation while minimizing errors through integration with attendance and leave data. This facilitates managers with accurate data for decision-making. The system supports importing employee data from Attendance, HRM, and Leave Management modules for Payroll processing. Along with the full salary computation, the payroll system integrates with Payment Disbursement to enable online transfer, checks with employee pay account details for direct salary disbursement through net banking etc.",benefits:["Accurate Payroll Generation","Reduced Manual Errors","Integrated with Attendance and Leave","Direct Salary Disbursement"],imageSrc:NA,imageAlt:"Salary Process",imgPosition:"right"},{title:"Accurate Accounting Entries for Financial Clarity",subtitle:"Ensuring error-free records with detailed reporting.",description:"After generating salaries, the HR manager creates accounting entries to maintain precise financial records. The system displays all payable heads, showing amounts already posted and pending. Managers can download detailed reports in PDF or Excel formats and include specific posting remarks for transparency, ensuring a well-documented and accurate accounting process.",benefits:["Precise Accounting Entries","Payable Overview","Detailed Reporting"," Transparent Documentation","Error-Free Financial Management"],imageSrc:DA,imageAlt:"Post Salary ",imgPosition:"left"}]:"HR"===t?[{title:"Job Offer Records - Onboarding Process",subtitle:"Smooth Onboarding and Integration of New Employees into the Organization",description:"Enables you to keep the Job offer records with unique reference ID for easy traceability and managing the offer letter and onboarding process. Custom templates for offer and joining letters allow HR to handle onboarding smoothly and efficiently. Provides data for analysis for the recruitment process.",benefits:["Thorough Appointee Management","Link Salary structure to include CTC details in offer letter","Dynamic Offer, Appointment Letters","One-click employee data creation from offer details"],imageSrc:MA,imageAlt:"Onboarding",imgPosition:"left"},{title:"Complete Employee Lifecycle Management",subtitle:"Centralized Employee Data Management - with Multi Location.",description:"This module enables streamlined employee data management, allowing HR and Employee managers to sort, search, and filter employee records by various criteria like Department and Grade for easy analysis and reports. Both permanent and contract employees can be managed with different salary structures. All lifecycle stages like onboarding process, initiating separation processes, completion of probation period, etc., can be managed smoothly for each employee data by the authorized manager. Optional fields for documents and bank details ensure comprehensive record-keeping while simplifying management.",benefits:["Department and Grade structure - for data segregation and easy management.","Automatic ID Generation for Employee, and Contract Employee.","Centralized Information - Data Accuracy and Integrity","Compliance and Record-Keeping - integrated with document management system.","Manage Employee Billing Rates","Contract Employee Management","Audit Tracing for employee data. Supports bulk record uploads from existing system."],imageSrc:IA,imageAlt:"Employee data",imgPosition:"right"},{title:"Streamlined Exit Process with Customized Setup",subtitle:"Ensuring Smooth Exit with Assets and KT Transfer",description:"With customized exit process setup, you can track and complete all the steps needed to be done by the employee before he/she exits the system. This can be knowledge transfer, handover of assets, exit interview, to name a few. Employee can initiate the separation process, which can be managed by approval/review flow.",benefits:["Customized exit process setup","Smooth Transitions and completion of activity by departments.","Facility to capture document evidence at each step."],imageSrc:LA,imageAlt:"Exit Process",imgPosition:"left"}]:"Appraisal"===t?[{title:"Efficient Appraisal System for Accurate Assessments",subtitle:"Completely Configurable Appraisal KPI Structure Definition.",description:"Highly flexible and configurable appraisal structure to set up your KPI targets for each employee grade level. Supports and is configurable for quarterly, half-yearly, and yearly appraisal cycles. Self-assessment, and provides scores for key performance indicators (KPIs), and submits the appraisal to the Employee manager, who evaluates and gives scores for each KPI. Review process by Reviewer to normalize the grades for an appraisal cycle for a particular employee grade. This structured process ensures accurate and fair evaluations, fostering transparency in performance-based benefits.",benefits:["Flexible Appraisal structure with KPI weightage.","Historical appraisal records reference for employee improvement and training plan.","Provision to upload supporting documents.","Structured Process, Fair Performance Assessment"],imageSrc:BA,imageAlt:"Holiday Calendar",imgPosition:"left"},{title:"Self-Evaluation for Each KPI Goal",subtitle:"Transparent and KPI Goals for Each Cycle.",description:"Employee can self-initiate and give his own score. Document evidence, if required, can be uploaded. Historical appraisal data for earlier cycles is accessible.",benefits:["Overall score is rule-based calculation","Seamlessly flows to employee manager","Historical Appraisal Data access"],imageSrc:_A,imageAlt:"Leave Dashboard",imgPosition:"right"},{title:"Manager Evaluation for Each KPI Goal.",subtitle:"Flexible Structure and Score for Each KPI.",description:"Manager evaluates and provides the score for each KPI Goal. The final score is auto-calculated based on rule setup. After providing the score, Manager sends the appraisal to the employee for final sign-off and remarks.",benefits:["Overall score for Manager is rule-based calculation","Seamlessly flows between employee and manager","Historical Appraisal Data access"],imageSrc:UA,imageAlt:"Leave Application",imgPosition:"left"},{title:"Review Process for Grade Evaluation",subtitle:"Normalization of Appraisal Grades by Reviewer.",description:"Normalization of appraisal grades by Reviewer at each employee grade level. Performance-linked salary components (like variable pay) evaluation process. Reports for each appraisal cycle and employee grade levels.",benefits:["Review process","Reports for performance-based salary components.","Customizable Reports"],imageSrc:HA,imageAlt:"Leave Approval",imgPosition:"right"}]:"Attendance"===t?[{title:"Attendance- Anytime- Anywhere",subtitle:"Streamlined Check-In with Location Tracking and Daily Task Insights.",description:"Our attendance system combines flexibility and precision, allowing employees to mark their workdays from the web or mobile app. The mobile app's check-in and check-out features are equipped with real-time location tracking, automatically capturing the exact location, date, and time to ensure accurate and efficient attendance records. Additionally, during check-out, employees are prompted to fill out a remarks field, providing a brief summary of their day\u2019s tasks. This feature enables managers to gain valuable insights into daily productivity, fostering accountability and enhancing team management.",benefits:["Accurate Time & Location Tracking","Enhanced Flexibility"," Improved Productivity Monitoring","Efficient Reporting"],imageSrc:WA,imageAlt:"Check-in",imgPosition:"left"},{title:"Stay Informed, Stay Organized",subtitle:"Dynamic Calendar View for Attendance, Holidays, and Leave Management.",description:"Our attendance system offers a dynamic calendar view that allows employees to easily track their attendance status, view holiday lists, and monitor their leave days. After checking in and out, employees can submit their attendance records weekly for manager review, ensuring accountability and streamlined communication. This feature not only keeps employees informed but also helps managers efficiently oversee attendance and leave management, fostering a productive work environment.",benefits:["Weekly Submission for Review","Dynamic Calendar View"],imageSrc:qA,imageAlt:"Leave Dashboard",imgPosition:"right"},{title:"Comprehensive Attendance Insights",subtitle:"Efficient Review and Approval for Enhanced Team Productivity.",description:"Our attendance management system provides managers with a complete overview of their team\u2019s attendance records. Once an employee submits their attendance, it is forwarded for review, ensuring accountability. If an employee encounters issues completing the process, managers can seamlessly update attendance for previous days through the manager portal, including remarks for full transparency. With access to detailed attendance records, managers can also update check-in and check-out times with geo-location data as needed. This system supports weekly approvals, streamlining the management of attendance and promoting effective team oversight.",benefits:["Streamlined Review Process","Flexibility in Attendance Management","Transparency with Remarks","Geo-Location Updates"," Weekly Approval Workflow"],imageSrc:GA,imageAlt:"Leave Application",imgPosition:"left"}]:[{title:"Complete Employee Lifecycle Management",subtitle:"Centralized Employee Data Management - with Multi Location.",description:"This module enables streamlined employee data management, allowing HR and Employee managers to sort, search, and filter employee records by various criteria like Department and Grade for easy analysis and reports. Both permanent and contract employees can be managed with different salary structures. All lifecycle stages like onboarding process, initiating separation processes, completion of probation period, etc., can be managed smoothly for each employee data by the authorized manager. Optional fields for documents and bank details ensure comprehensive record-keeping while simplifying management.",benefits:["Department and Grade structure - for data segregation and easy management.","Automatic ID Generation for Employee, and Contract Employee.","Centralized Information - Data Accuracy and Integrity","Compliance and Record-Keeping - integrated with document management system.","Manage Employee Billing Rates","Contract Employee Management","Audit Tracing for employee data. Supports bulk record uploads from existing system."],imageSrc:TA,imageAlt:"Payroll & Compliance",imgPosition:"left"},{title:"Job Offer Records - Onboarding Process",subtitle:"Smooth Onboarding and Integration of New Employees into the Organization",description:"Enables you to keep the Job offer records with unique reference ID for easy traceability and managing the offer letter and onboarding process. Custom templates for offer and joining letters allow HR to handle onboarding smoothly and efficiently. Provides data for analysis for the recruitment process.",benefits:["Thorough Appointee Management","Link Salary structure to include CTC details in offer letter","Dynamic Offer, Appointment Letters","One-click employee data creation from offer details"],imageSrc:zA,imageAlt:"Salary Process",imgPosition:"right"},{title:"Streamlined Exit Process with Customized Setup",subtitle:"Ensuring Smooth Exit with Assets and KT Transfer",description:"With customized exit process setup, you can track and complete all the steps needed to be done by the employee before he/she exits the system. This can be knowledge transfer, handover of assets, exit interview, to name a few. Employee can initiate the separation process, which can be managed by approval/review flow.",benefits:["Customized exit process setup","Smooth Transitions and completion of activity by departments.","Facility to capture document evidence at each step."],imageSrc:zA,imageAlt:"Payslip Generation",imgPosition:"left"}];return(0,g.jsx)(KA,{children:n.map((e=>(0,g.jsx)(VA,{children:"left"===e.imgPosition?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(JA,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,g.jsxs)(YA,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(QA,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:vA,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(YA,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(QA,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:vA,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]}),(0,g.jsx)(JA,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},XA=li.div`
  background-color: white;
  color: blue;
  width: 100%;
  /* padding-bottom: 10px; */
`,$A=li.div`
  height: 472px;
  background-color: white;
  color: blue;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
  }
`,ej=li.div`
  height: 125%;
  width: 100%;
  background-color:#eae3ff;
  padding: 90px;
  padding-top: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

  @media (max-width: 768px) {
    padding: 20px;
    padding-top: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,tj=li.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 400;
  line-height: 61.2px;
  margin-left: 40px;
  margin-top: 25px;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 38px;
    margin-left: 0px;
    margin-top: 40px;
    text-align: center;
  }
`,nj=li.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 600;
  line-height: 61.2px;
  margin: 0px 0px 16px;
`,rj=li.p`
  color: #454545;
  /* width: 65%; */
  font-size: 21px;
  /* word-wrap: normal; */
  /* line-height: 31.504px;
  margin: 0px 0px 24px; */

  @media (max-width: 768px) {
    width: 100%;
  }
`,oj=li.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 60%;
  line-height: 26px;
  padding: 44px 0px 0px;
`,ij=li.button`
  align-items: center;
  background-color: #aa00ea;
  border-color: #f3a3ff;
  border-radius: 100px;
  border-style: solid;
  border-width: 1.6px;
  color: #fff;
  font-weight: 500;
  line-height: 24px;
  padding: 14px 32px;
  text-align: center;
`,aj=li.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`,sj=li.div`
  line-height: 26px;
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`,lj=()=>{const e=Du(),t="/claim.html"===e.pathname,n="/leave.html"===e.pathname,r="/employeehr.html"===e.pathname,i="/payroll.html"===e.pathname,a="/attendance.html"===e.pathname,s="/appraisal.html"===e.pathname,l=(0,o.useMemo)((()=>t?{title:"Effortless Claim Management for Your Organization",description:"Streamline your expense claim process with fast approvals, secure uploads, and real-time tracking all in one place.",image:sA,data:"Claim"}:n?{title:"Simplified Leave Management for Employees",description:"Manage leave requests, approvals, and balances with ease, all in one centralized system.",image:lA,data:"Leave"}:r?{title:"Welcome to Employee Management",description:"Explore our various modules designed to simplify your HR processes.",image:cA,data:"HR"}:a?{title:"Welcome to Employee Attendance",description:"Explore our various modules designed to simplify your HR processes.",image:cA,data:"Attendance"}:i?{title:"Accurate and Automated Payroll Solutions",description:"Simplify payroll with Atomwalk HRM's automated system, handling salaries, deductions, and taxes with accuracy. Real-time integration ensures seamless reporting and easy payslip access for employees",image:cA,data:"Payroll"}:s?{title:"Performance Mangement",description:"The appraisal system supporting KPI-based evaluations, with self-assessment, manager scoring, and grade normalization for fair, transparent performance reviews and structured reporting.",image:cA,data:"Appraisal"}:{title:"Welcome to Employee Management",description:"Explore our various modules designed to simplify your HR processes.",image:cA,data:"HR"}),[t,n,r]);return(0,g.jsxs)(XA,{children:[(0,g.jsx)($A,{children:(0,g.jsxs)(ej,{children:[(0,g.jsxs)(tj,{children:[(0,g.jsx)(nj,{children:l.title}),(0,g.jsx)(rj,{children:l.description}),(0,g.jsx)(ij,{onClick:()=>{window.location.href="/demo.html"},children:(0,g.jsx)(aj,{children:"Request a Demo"})})]}),(0,g.jsx)(oj,{children:(0,g.jsx)(sj,{children:(0,g.jsx)("img",{src:l.image,alt:"Page Background"})})})]})}),(0,g.jsx)(yA,{data:l.data}),(0,g.jsx)(ZA,{data:l.data})]})},cj=n.p+"static/media/Mockup5-Lead.780e9b50bcaba7281d4d.png",uj=n.p+"static/media/Customermage-removebg-preview.fa8bcba86c44de2d5172.png",dj=n.p+"static/media/Pattner.7901d1ba5f15d16330b0.png",pj=n.p+"static/media/Campain.d60d77c952a36990bf12.png";n.p;const fj=n.p+"static/media/CrmMocups2.42b85b9b507a83b24f4f9c0bfbf25f57.svg";const hj=n.p+"static/media/CrmMocups.52e8c70046b9976399c8e1c31b83bd6f.svg",mj=li.div`
  width: 100%;
  height: 100%;
`,gj=li.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e8f1fe; 
  padding: 20px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
`,xj=li.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  img {
    width: 130%;
    /* max-width: 500px; */
  }

  @media (min-width: 768px) {
    width: 40%;
  }
`,yj=li.div`
  /* background-color: #fff;
  border-color: #e8e8e9;
  border-radius: 20px;
  border-style: solid;
  border-width: 0.8px; */
  /* display: flex; */
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  line-height: 26px;
  padding: 24px;
  text-align: center;

  p {
    color: #1c1b1f;
    line-height: 24px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: center; */
    gap: 20px;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 360px;
    gap: 8px;
  }

  li img {
    width: 30px;
    height: 30px;
  }

  li span {
    color: #1E90FF; 
    font-size: 0.9rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    ul {
      justify-content: space-around;
    }
  }
`,vj=li.div`
  text-align: center;
  color: #000;
  margin-top: 20px;

  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5rem;
    color: #6a1b9a;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    text-align: left;
    width: 50%;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`,bj=e=>{let{data:t}=e;const n="Claim"===t?[{title:"Effortless Campaign Management",subtitle:"Seamlessly Create, View, and Manage Campaigns",description:"Atomwalk CRM offers a user-friendly interface to manage customer email campaigns with ease. Users can add new campaigns, view campaign lists, and access powerful search features to quickly find specific campaigns. With organized tools, campaign creation and management become intuitive and efficient, allowing you to focus on engagement and conversions.",benefits:["Campaign List View","Campaign Search","User-Friendly Interface"],imageSrc:kA,imageAlt:"Campaign Management Dashboard",imgPosition:"left"},{title:"Enhanced Campaign Execution and Analysis",subtitle:"Maximize Engagement with Real-Time Tracking and Insights",description:"From sending targeted emails to monitoring their performance, Atomwalk CRM enables real-time tracking of customer interactions, open rates, and conversion metrics. Use detailed analytics to adjust strategies, close completed campaigns, and optimize future campaigns. This helps maximize reach, engagement, and ultimately, customer satisfaction.",benefits:["Send Emails","Real-Time Tracking","Detailed Analytics"],imageSrc:kA,imageAlt:"Campaign Performance Tracking",imgPosition:"right"}]:[{title:"Streamlined Lead Engagement",subtitle:"Effortless Management for Higher Conversions",description:'This fully integrated dashboard in the Atomwalk CRM application provides users with an intuitive workspace to access and manage lead details effortlessly. Users can quickly add new leads, view a comprehensive lead list, and upload data in bulk to keep information up-to-date. Additionally, tasks can be assigned to specific leads for timely follow-ups, while a detailed Lead Performance Dashboard offers insight into engagement metrics and conversion progress. The "Add Product Interest" feature lets users associate specific product interests with each lead, enhancing personalization and targeted engagement. With these functionalities in one place, the Atomwalk CRM helps optimize lead nurturing and boosts overall conversion rates.',benefits:["Centralized Lead Insights","Seamless Team Collaboration","Optimized Engagement Strategies"],imageSrc:fj,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Manage Leads with Ease",subtitle:"Fast and Efficient Lead Management Process",description:"Empower your sales team to add and manage leads effortlessly from their mobile devices or desktops. Track the status of leads in real-time, and streamline follow-ups with our intuitive lead management system.",benefits:["Real-Time Lead Tracking","Automated Follow-ups","Bulk Lead Uploads"],imageSrc:hj,imageAlt:"Lead Management",imgPosition:"left"},{title:"Streamline Lead Conversions",subtitle:"Quick and Transparent Lead Conversion Process",description:"Sales managers can track lead progress, assign tasks, and update lead status in real-time. Our streamlined lead conversion process ensures that opportunities are never missed, providing transparency and timely action for maximum conversions.",benefits:["Task Assignment","Pipeline Status Updates","Conversion Tracking"],imageSrc:fj,imageAlt:"Lead Conversion",imgPosition:"right"},{title:"Centralize Lead Management for Higher Conversions",subtitle:"Efficient and Transparent Lead Conversion Process",description:"Sales managers can seamlessly track lead history, assign tasks, and update lead statuses in real-time. With our centralized lead management system, you can prioritize leads, ensure timely follow-ups, and never miss an opportunity to convert, all while maintaining full transparency throughout the process.",benefits:["Real-Time Task Assignment","Lead Prioritization","Conversion Tracking"],imageSrc:fj,imageAlt:"Lead Conversion Process",imgPosition:"left"},{title:"Get Complete Context on Every Lead",subtitle:"Personalized and Informed Lead Follow-ups",description:"To maximize the potential of lost leads, implement follow-up automation to re-engage them after a set period, such as three months, with \u201cwin-back\u201d campaigns that offer special promotions or address any unmet needs. Keep detailed records of why leads were marked as lost (e.g., budget constraints, timing, lack of interest) to enable tailored future follow-up strategies. Design re-engagement workflows in the CRM to tag lost leads, retarget them, and monitor for any shifts in their engagement levels. Analyzing lost lead data periodically can reveal common reasons for drop-off, providing insights to refine marketing and sales approaches. Maintain lost leads as a distinct segment in the CRM, allowing for strategic re-engagement with new products or services, ensuring they stay accessible for potential future opportunities.",benefits:["Comprehensive Lead History","Cross-Departmental Integration","Informed Outreach"],imageSrc:fj,imageAlt:"Lead Context",imgPosition:"right"}];return(0,g.jsx)(mj,{children:n.map((e=>(0,g.jsx)(gj,{children:"left"===e.imgPosition?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(xj,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,g.jsxs)(vj,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(yj,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:vA,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(vj,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(yj,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:vA,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]}),(0,g.jsx)(xj,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},wj=()=>{const[e,t]=(0,o.useState)(""),n=Du(),r=[{title:"Lead Management",titles:"Lead",description:"Atomwalk CRM's Lead Management system helps businesses efficiently track and manage leads throughout their sales pipeline. Users can add, update, and categorize leads, mark them as active or inactive, and assign ownership for better accountability. This system ensures that leads are properly followed up, improving conversion rates and optimizing the sales process.",background:"#d6e7ff",img:`${cj}`},{title:"Customer Management",titles:"Customer",description:"Atomwalk CRM's Customer Management system helps businesses organize and manage customer data, interactions, and communication history. It allows users to track customer preferences, purchase history, and provides tools to enhance customer retention and satisfaction.",background:"#d6e7ff",img:`${uj}`},{title:"Channel Partner Management",titles:"Partner",description:"Atomwalk CRM's Channel Partner Management system enables businesses to effectively manage their relationships with partners. It helps track partner activities, agreements, and contributions, streamlining collaboration to drive mutual growth. The system also provides visibility into partner performance, ensuring transparency and maximizing the value of partnerships.",background:"#d6e7ff",img:`${dj}`},{title:"Campaign Management",titles:"Campaign",description:"Atomwalk CRM's Campaign Management system allows businesses to plan, execute, and analyze marketing campaigns across multiple channels. It enables users to track campaign performance, manage budgets, and segment audiences for targeted outreach. The system provides real-time insights, helping to optimize strategies for better engagement and higher ROI.",background:"#d6e7ff",img:`${pj}`}];(0,o.useEffect)((()=>{n.pathname.includes("campaignManagement")&&t("Claim")}),[n.pathname]);const i=n.pathname.includes("leadManagement")?r[0]:n.pathname.includes("CustomerManagement")?r[1]:n.pathname.includes("Channelpartner")?r[2]:n.pathname.includes("campaignManagement")?r[3]:r[0];return(0,g.jsxs)("div",{children:[(0,g.jsx)(rp,{title:i.title,description:i.description,background:i.background,img:i.img,lead:!0}),(0,g.jsx)(yA,{bgcolors:"#e8f1fe",data:i.titles}),(0,g.jsx)(bj,{data:e})]})},kj=li.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,Sj=li.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,Aj=li.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,jj=li.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Cj=li.div`
  width: 285px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 20px 0;
    width: 80%;
  }
`,Ej=li.div`
  width: 70px;
  height: 70px;
  background-color: ${e=>e.bgColor||"#ccc"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px auto;

  img {
    width: 50px;
    height: 50px;
  }
`,Oj=li.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,Rj=li.p`
  font-size: 1em;
  color: #666;
`,Pj=()=>{const e=e=>{window.location.href=`/${e}`};return(0,g.jsxs)(kj,{children:[(0,g.jsx)(Sj,{children:"Key Features"}),(0,g.jsx)(Aj,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,g.jsxs)(jj,{children:[(0,g.jsxs)(Cj,{onClick:()=>e("leadManagement.html"),children:[(0,g.jsx)(Ej,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:mk,alt:"Speed"})}),(0,g.jsx)(Oj,{children:" Lead Management:"}),(0,g.jsx)(Rj,{children:"Streamline and track leads from acquisition to conversion, ensuring efficient follow-ups and maximizing sales opportunities."})]}),(0,g.jsxs)(Cj,{onClick:()=>e("CustomerManagement.html"),children:[(0,g.jsx)(Ej,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:gk,alt:"Trust"})}),(0,g.jsx)(Oj,{children:"Customer Management:"}),(0,g.jsx)(Rj,{children:"Manage customer relationships by storing interaction histories, preferences, and communication details in one centralized platform"})]}),(0,g.jsxs)(Cj,{onClick:()=>e("Channelpartner.html"),children:[(0,g.jsx)(Ej,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:xk,alt:"Accuracy"})}),(0,g.jsx)(Oj,{children:"Channel partner management:"}),(0,g.jsx)(Rj,{children:"Collaborate effectively with business partners by tracking their contributions, agreements, and communication to ensure successful partnerships."})]}),(0,g.jsxs)(Cj,{children:[(0,g.jsx)(Ej,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:yk,alt:"Reliability"})}),(0,g.jsx)(Oj,{children:"Annual Maintenance Contract:"}),(0,g.jsx)(Rj,{children:"Efficiently manage assets, investments, and portfolios while tracking performance and ensuring regulatory compliance"})]}),(0,g.jsxs)(Cj,{onClick:()=>e("campaignManagement.html"),children:[(0,g.jsx)(Ej,{bgColor:"#ffe0f5",children:(0,g.jsx)("img",{src:vk,alt:"Reliability"})}),(0,g.jsx)(Oj,{children:"Campaign Management:"}),(0,g.jsx)(Rj,{children:"Plan, execute, and analyze marketing campaigns to reach target audiences, track results, and optimize strategies for higher engagement and ROI."})]})]})]})},Tj=()=>(0,g.jsxs)("div",{children:[(0,g.jsx)(rp,{title:"Comprehensive CRM platform",description:"Atomwalk CRM is a comprehensive Customer Relationship Management (CRM) system designed to streamline and manage various business operations, focusing on customer, supplier, partner, and lead management. It offers functionalities that support task management, order processing, and tracking of product interests and payments.",background:"#d6e7ff",crm:!0}),(0,g.jsx)(tk,{data:"lead"}),(0,g.jsx)(Pj,{}),(0,g.jsx)(hk,{data:"crm"})]}),zj=n.p+"static/media/HeroLabSection.1606c37d4e5ec7047aa4.png",Mj=n.p+"static/media/science.8f9dee670ee1dc6ebb6e.png",Ij=n.p+"static/media/laboratory.10d5fe66121f8e772dde.png",Lj=n.p+"static/media/labmagement.ba84ebd47e20da342faf.png",Fj=n.p+"static/media/equpment.d3afd0d0f3a6fd638e31.png",Nj=li.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background: ${e=>{let{background:t}=e;return t||"linear-gradient(180deg, #fceabb, rgb(255 246 247))"}};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`,Dj=li.div`
  max-width: 50%;
  margin-top: 100px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 150px;
  }
`,Bj=li.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,_j=li.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Hj=li.button`
  background-color: #333;
  color: white;
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 40px;

  &:hover {
    background-color: #555;
  }
`,Uj=li.div`
  display: flex;
  justify-content: left;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Wj=li.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 30%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${e=>{let{background:t}=e;return t||"linear-gradient(180deg, #fceabb, rgb(255 246 247))"}};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`,qj=li.img`
  width: 70px;
  margin-bottom: 10px;
`,Gj=li.p`
  font-size: 1rem;
  color: #333;
`,Kj=li.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`,Vj=li.img`
  width: 550px;
  height: auto;
  border-radius: 10%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`,Jj=()=>{const[e,t]=(0,o.useState)("linear-gradient(180deg, #d2f5fa, rgb(255 246 247))"),[n,r]=(0,o.useState)(zj),i=(e,n)=>{t(e),r(n)},a=()=>{t("linear-gradient(180deg, #d2f5fa, rgb(255 246 247))"),r(zj)};return(0,g.jsxs)(Nj,{background:e,children:[(0,g.jsxs)(Dj,{children:[(0,g.jsx)(Bj,{children:"Complete Lab & Equipment Management Hub"}),(0,g.jsx)(_j,{children:"Manage lab operations and equipment effortlessly in one platform. From sample tracking to inventory control, LabSync keeps your lab running smoothly and efficiently."}),(0,g.jsx)(Hj,{onClick:()=>{window.location.href="https://www.atomwalk.com/login/"},children:"Get started"}),(0,g.jsxs)(Uj,{children:[(0,g.jsxs)(Wj,{background:e,onMouseEnter:()=>i("linear-gradient(180deg, #bbfcc0, rgb(255 246 247))",Fj),onMouseLeave:a,onClick:()=>{window.location.href="/labequipmentmangement.html"},children:[(0,g.jsx)(qj,{src:Ij,alt:"HR"}),(0,g.jsx)(Gj,{children:"Lab Equipment Management System: Precision Tracking for Lab Equipment Efficiency."})]}),(0,g.jsxs)(Wj,{background:e,onMouseEnter:()=>i("linear-gradient(180deg, #edd4fc, rgb(255 246 247))",Lj),onMouseLeave:a,onClick:()=>{window.location.href="/labmanagement.html"},children:[(0,g.jsx)(qj,{src:Mj,alt:"CRM"}),(0,g.jsx)(Gj,{children:"Lab Management System: Streamlined Solutions for Modern Lab Operations."})]})]})]}),(0,g.jsx)(Kj,{children:(0,g.jsx)(Vj,{src:n,alt:"Profile"})})]})},Qj=li.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #bbfcc0;
  padding:90px 40px 0px 40px ;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding:130px 40px 0px 40px ;
  }
`,Yj=li.div`
  max-width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,Zj=li.h1`
  font-size: 48px;
  color: #213e6d;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`,Xj=li.p`
  font-size: 18px;
  color: #6d7278;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,$j=li.button`
  background-color: #337af3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #2863c7;
  }
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
  }
`,eC=li.div`
  max-width: 50%;
  position: relative;
  z-index: 2;
  bottom: 0px;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`,tC=li.img`
  width: 100%;
  height: auto;
`,nC=li.img`
  position: absolute;
  top: 150px;
  left: 40px;
  width: 130px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80px;
  }
`,rC=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Qj,{children:[(0,g.jsx)(nC,{src:Ow,alt:"Abstract Shape"}),(0,g.jsxs)(Yj,{children:[(0,g.jsx)(Zj,{children:"Lab Equipment Management System"}),(0,g.jsx)(Xj,{children:"Optimize utilization, minimize downtime, and simplify equipment management with real-time tracking and maintenance.  "}),(0,g.jsx)($j,{children:"Learn more"})]}),(0,g.jsx)(eC,{children:(0,g.jsx)(tC,{src:Ew,alt:"Laboratory Technician"})})]}),(0,g.jsx)(tk,{data:"Equipment"}),(0,g.jsx)(Ok,{}),(0,g.jsx)(hk,{data:"equipment"})]});const oC=function(){const[e,t]=(0,o.useState)(!1),n={username:"ASUTOSH@PMA_00001",password:"ashutosh@11"};(0,o.useEffect)((()=>{localStorage.getItem("apiResponse")||r()}),[]);const r=async()=>{try{const e=await fetch("https://www.atomwalk.com/rest-auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();console.log("API Response:",t),localStorage.setItem("apiResponse",JSON.stringify(t))}catch(e){console.error("Error during login:",e)}};return(0,g.jsxs)("div",{className:"App",children:[(0,g.jsx)(ui,{}),(0,g.jsx)(ed,{children:(0,g.jsxs)(Zu,{children:[(0,g.jsx)(Qu,{path:"",element:(0,g.jsx)(Zc,{})}),(0,g.jsx)(Qu,{path:"/signin.html",element:(0,g.jsx)(Td,{})}),(0,g.jsx)(Qu,{path:"/forgotpassword.html",element:(0,g.jsx)(qd,{})}),(0,g.jsx)(Qu,{path:"/card.html",element:(0,g.jsx)(Hi,{})}),(0,g.jsx)(Qu,{path:"/Product.html",element:(0,g.jsx)(uf,{})}),(0,g.jsx)(Qu,{path:"/contactUs.html",element:(0,g.jsx)(th,{})}),(0,g.jsx)(Qu,{path:"/aboutUs.html",element:(0,g.jsx)(Am,{})}),(0,g.jsx)(Qu,{path:"/pricing.html",element:(0,g.jsx)(fw,{})}),(0,g.jsx)(Qu,{path:"/demo.html",element:(0,g.jsx)(qb,{})}),(0,g.jsx)(Qu,{path:"/seals.html",element:(0,g.jsx)(Cw,{})}),(0,g.jsx)(Qu,{path:"/crm.html",element:(0,g.jsx)(Tj,{})}),(0,g.jsx)(Qu,{path:"/lms.html",element:(0,g.jsx)(Jj,{})}),(0,g.jsx)(Qu,{path:"/Blog.html",element:(0,g.jsx)(yS,{})}),(0,g.jsx)(Qu,{path:"/BlogDetails.html",element:(0,g.jsx)(zS,{})}),(0,g.jsx)(Qu,{path:"/hrm.html",element:(0,g.jsx)(aA,{})}),(0,g.jsx)(Qu,{path:"/leave.html",element:(0,g.jsx)(lj,{})}),(0,g.jsx)(Qu,{path:"/claim.html",element:(0,g.jsx)(lj,{})}),(0,g.jsx)(Qu,{path:"/employeehr.html",element:(0,g.jsx)(lj,{})}),(0,g.jsx)(Qu,{path:"/payroll.html",element:(0,g.jsx)(lj,{})}),(0,g.jsx)(Qu,{path:"/appraisal.html",element:(0,g.jsx)(lj,{})}),(0,g.jsx)(Qu,{path:"/attendance.html",element:(0,g.jsx)(lj,{})}),(0,g.jsx)(Qu,{path:"/leadManagement.html",element:(0,g.jsx)(wj,{})}),(0,g.jsx)(Qu,{path:"/CustomerManagement.html",element:(0,g.jsx)(wj,{})}),(0,g.jsx)(Qu,{path:"/Channelpartner.html",element:(0,g.jsx)(wj,{})}),(0,g.jsx)(Qu,{path:"/campaignManagement.html",element:(0,g.jsx)(wj,{})}),(0,g.jsx)(Qu,{path:"/labmanagement.html",element:(0,g.jsx)(Nk,{})}),(0,g.jsx)(Qu,{path:"/labequipmentmangement.html",element:(0,g.jsx)(rC,{})})]})}),e&&(0,g.jsx)(Eb,{setOpenslide:t}),(0,g.jsx)(Tb,{setOpenslide:t}),(0,g.jsx)(Wm,{})]})},iC=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,6453)).then((t=>{let{getCLS:n,getFID:r,getFCP:o,getLCP:i,getTTFB:a}=t;n(e),r(e),o(e),i(e),a(e)}))};a.createRoot(document.getElementById("root")).render((0,g.jsx)(o.StrictMode,{children:(0,g.jsx)(oC,{})})),iC()})()})();
//# sourceMappingURL=main.5532daec.js.map