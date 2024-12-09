/*! For license information please see main.5935ae79.js.LICENSE.txt */
(()=>{var e={5811:(e,t,n)=>{var r=n(347),i=n(1303).each;function o(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}o.prototype={constuctor:o,addHandler:function(e){var t=new r(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;i(t,(function(n,r){if(n.equals(e))return n.destroy(),!t.splice(r,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){i(this.handlers,(function(e){e.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";i(this.handlers,(function(t){t[e]()}))}},e.exports=o},8537:(e,t,n)=>{var r=n(5811),i=n(1303),o=i.each,a=i.isFunction,s=i.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(e,t,n){var i=this.queries,l=n&&this.browserIsIncapable;return i[e]||(i[e]=new r(e,l)),a(t)&&(t={match:t}),s(t)||(t=[t]),o(t,(function(t){a(t)&&(t={match:t}),i[e].addHandler(t)})),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=l},347:e=>{function t(e){this.options=e,!e.deferSetup&&this.setup()}t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=t},1303:e=>{e.exports={isFunction:function(e){return"function"===typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,r=e.length;n<r&&!1!==t(e[n],n);n++);}}},535:(e,t,n)=>{var r=n(8537);e.exports=new r},7396:(e,t,n)=>{var r;!function(){"use strict";var i=!("undefined"===typeof window||!window.document||!window.document.createElement),o={canUseDOM:i,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:i&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:i&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},3240:e=>{"use strict";var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=function(e){return"function"===typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},a=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var r,i=t.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!i&&!o)return!1;for(r in e);return"undefined"===typeof r||t.call(e,r)},s=function(e,t){r&&"__proto__"===t.name?r(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,n){if("__proto__"===n){if(!t.call(e,n))return;if(i)return i(e,n).value}return e[n]};e.exports=function e(){var t,n,r,i,c,u,d=arguments[0],p=1,f=arguments.length,m=!1;for("boolean"===typeof d&&(m=d,d=arguments[1]||{},p=2),(null==d||"object"!==typeof d&&"function"!==typeof d)&&(d={});p<f;++p)if(null!=(t=arguments[p]))for(n in t)r=l(d,n),d!==(i=l(t,n))&&(m&&i&&(a(i)||(c=o(i)))?(c?(c=!1,u=r&&o(r)?r:[]):u=r&&a(r)?r:{},s(d,{name:n,newValue:e(m,u,i)})):"undefined"!==typeof i&&s(d,{name:n,newValue:i}));return d}},4403:e=>{var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,l=/^\s+|\s+$/g,c="";function u(e){return e?e.replace(l,c):c}e.exports=function(e,l){if("string"!==typeof e)throw new TypeError("First argument must be a string");if(!e)return[];l=l||{};var d=1,p=1;function f(e){var t=e.match(n);t&&(d+=t.length);var r=e.lastIndexOf("\n");p=~r?e.length-r:p+e.length}function m(){var e={line:d,column:p};return function(t){return t.position=new h(e),b(),t}}function h(e){this.start=e,this.end={line:d,column:p},this.source=l.source}h.prototype.content=e;var g=[];function x(t){var n=new Error(l.source+":"+d+":"+p+": "+t);if(n.reason=t,n.filename=l.source,n.line=d,n.column=p,n.source=e,!l.silent)throw n;g.push(n)}function y(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function b(){y(r)}function v(e){var t;for(e=e||[];t=w();)!1!==t&&e.push(t);return e}function w(){var t=m();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;c!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,c===e.charAt(n-1))return x("End of comment missing");var r=e.slice(2,n-2);return p+=2,f(r),e=e.slice(n),p+=2,t({type:"comment",comment:r})}}function k(){var e=m(),n=y(i);if(n){if(w(),!y(o))return x("property missing ':'");var r=y(a),l=e({type:"declaration",property:u(n[0].replace(t,c)),value:r?u(r[0].replace(t,c)):c});return y(s),l}}return b(),function(){var e,t=[];for(v(t);e=k();)!1!==e&&(t.push(e),v(t));return t}()}},2740:e=>{"use strict";e.exports=function(e,t,n,r,i,o,a,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,s],u=0;(l=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},1270:(e,t,n)=>{var r=n(7475),i=function(e){var t="",n=Object.keys(e);return n.forEach((function(i,o){var a=e[i];(function(e){return/[height|width]$/.test(e)})(i=r(i))&&"number"===typeof a&&(a+="px"),t+=!0===a?i:!1===a?"not "+i:"("+i+": "+a+")",o<n.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"===typeof e?e:e instanceof Array?(e.forEach((function(n,r){t+=i(n),r<e.length-1&&(t+=", ")})),t):i(e)}},9834:(e,t,n)=>{var r=n(1260)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var a,s,l=t.prefix||"__jp",c=t.name||l+i++,u=t.param||"callback",d=null!=t.timeout?t.timeout:6e4,p=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;d&&(s=setTimeout((function(){m(),n&&n(new Error("Timeout"))}),d));function m(){a.parentNode&&a.parentNode.removeChild(a),window[c]=o,s&&clearTimeout(s)}return window[c]=function(e){r("jsonp got",e),m(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+p(c)).replace("?&","?"),r('jsonp req "%s"',e),(a=document.createElement("script")).src=e,f.parentNode.insertBefore(a,f),function(){window[c]&&m()}};var i=0;function o(){}},1260:(e,t,n)=>{function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.DEBUG),e}(t=e.exports=n(4703)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var i=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(i++,"%c"===e&&(o=i))})),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},4703:(e,t,n)=>{var r;function i(e){function n(){if(n.enabled){var e=n,i=+new Date,o=i-(r||i);e.diff=o,e.prev=r,e.curr=i,r=i;for(var a=new Array(arguments.length),s=0;s<a.length;s++)a[s]=arguments[s];a[0]=t.coerce(a[0]),"string"!==typeof a[0]&&a.unshift("%O");var l=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;l++;var i=t.formatters[r];if("function"===typeof i){var o=a[l];n=i.call(e,o),a.splice(l,1),l--}return n})),t.formatArgs.call(e,a),(n.log||t.log||console.log.bind(console)).apply(e,a)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=i.debug=i.default=i).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,i=0;i<r;i++)n[i]&&("-"===(e=n[i].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(4850),t.names=[],t.skips=[],t.formatters={}},4850:e=>{var t=1e3,n=60*t,r=60*n,i=24*r,o=365.25*i;function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,s){s=s||{};var l,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!a)return;var s=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*o;case"days":case"day":case"d":return s*i;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===c&&!1===isNaN(e))return s.long?a(l=e,i,"day")||a(l,r,"hour")||a(l,n,"minute")||a(l,t,"second")||l+" ms":function(e){if(e>=i)return Math.round(e/i)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},446:(e,t,n)=>{var r=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,d="object"==typeof self&&self&&self.Object===Object&&self,p=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,h=Math.min,g=function(){return p.Date.now()};function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==i}(e))return r;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=s.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):a.test(e)?r:+e}e.exports=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function v(){var e=g();if(b(e))return w(e);s=setTimeout(v,function(e){var n=t-(e-l);return d?h(n,o-(e-c)):n}(e))}function w(e){return s=void 0,p&&r?f(e):(r=i=void 0,a)}function k(){var e=g(),n=b(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(v,t),u?f(e):a}(l);if(d)return s=setTimeout(v,t),f(l)}return void 0===s&&(s=setTimeout(v,t)),a}return t=y(t)||0,x(n)&&(u=!!n.leading,o=(d="maxWait"in n)?m(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),k.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},k.flush=function(){return void 0===s?a:w(g())},k}},381:(e,t,n)=>{var r="Expected a function",i=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,p="object"==typeof self&&self&&self.Object===Object&&self,f=d||p||Function("return this")(),m=Object.prototype.toString,h=Math.max,g=Math.min,x=function(){return f.Date.now()};function y(e,t,n){var i,o,a,s,l,c,u=0,d=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError(r);function m(t){var n=i,r=o;return i=o=void 0,u=t,s=e.apply(r,n)}function y(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-u>=a}function w(){var e=x();if(y(e))return k(e);l=setTimeout(w,function(e){var n=t-(e-c);return p?g(n,a-(e-u)):n}(e))}function k(e){return l=void 0,f&&i?m(e):(i=o=void 0,s)}function S(){var e=x(),n=y(e);if(i=arguments,o=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(w,t),d?m(e):s}(c);if(p)return l=setTimeout(w,t),m(c)}return void 0===l&&(l=setTimeout(w,t)),s}return t=v(t)||0,b(n)&&(d=!!n.leading,a=(p="maxWait"in n)?h(v(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),S.cancel=function(){void 0!==l&&clearTimeout(l),u=0,i=c=o=l=void 0},S.flush=function(){return void 0===l?s:k(x())},S}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==o}(e))return i;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):s.test(e)?i:+e}e.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})}},9197:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=null;return t.forEach((function(e){if(null==i){var t=e.apply(void 0,n);null!=t&&(i=t)}})),i}))};var r,i=n(3534),o=(r=i)&&r.__esModule?r:{default:r};e.exports=t.default},3534:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,i,o,a){var s=i||"<<anonymous>>",l=a||r;if(null==n[r])return t?new Error("Required "+o+" `"+l+"` was not specified in `"+s+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),d=6;d<c;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,r,s,o,l].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},1497:(e,t,n)=>{"use strict";var r=n(3218);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},5173:(e,t,n)=>{e.exports=n(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2730:(e,t,n)=>{"use strict";var r=n(5043),i=n(8853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},m={};function h(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var x=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(m,e)||!d.call(f,e)&&(p.test(e)?m[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(x,y);g[t]=new h(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(x,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(x,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var v=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),E=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),M=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var I=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=I&&e[I]||e["@@iterator"])?e:null}var D,F=Object.assign;function N(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var B=!1;function _(e,t){if(!e||B)return"";B=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{B=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function U(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=_(e.type,!1);case 11:return e=_(e.type.render,!1);case 1:return e=_(e.type,!0);default:return""}}function H(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case j:return"Profiler";case A:return"StrictMode";case R:return"Suspense";case O:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case E:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:H(e.type)||"Memo";case M:t=e._payload,e=e._init;try{return H(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return H(t);case 8:return t===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function G(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function V(e){e._valueTracker||(e._valueTracker=function(e){var t=G(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=G(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function J(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Y(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=q(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Z(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function X(e,t){Z(e,t);var n=q(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function $(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&J(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function oe(e,t){var n=q(t.value),r=q(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=he(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(fe).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var xe=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ve=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,Ae=null;function je(e){if(e=bi(e)){if("function"!==typeof ke)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function Ce(e){Se?Ae?Ae.push(e):Ae=[e]:Se=e}function Ee(){if(Se){var e=Se,t=Ae;if(Ae=Se=null,je(e),t)for(e=0;e<t.length;e++)je(t[e])}}function Pe(e,t){return e(t)}function Re(){}var Oe=!1;function Te(e,t,n){if(Oe)return e(t,n);Oe=!0;try{return Pe(e,t,n)}finally{Oe=!1,(null!==Se||null!==Ae)&&(Re(),Ee())}}function Me(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var ze=!1;if(u)try{var Ie={};Object.defineProperty(Ie,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Ie,Ie),window.removeEventListener("test",Ie,Ie)}catch(ue){ze=!1}function Le(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var De=!1,Fe=null,Ne=!1,Be=null,_e={onError:function(e){De=!0,Fe=e}};function Ue(e,t,n,r,i,o,a,s,l){De=!1,Fe=null,Le.apply(_e,arguments)}function He(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function qe(e){if(He(e)!==e)throw Error(o(188))}function Ge(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=He(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return qe(i),e;if(a===r)return qe(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ve(e):null}function Ve(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ve(e);if(null!==t)return t;e=e.sibling}return null}var Ke=i.unstable_scheduleCallback,Je=i.unstable_cancelCallback,Ye=i.unstable_shouldYield,Qe=i.unstable_requestPaint,Ze=i.unstable_now,Xe=i.unstable_getCurrentPriorityLevel,$e=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=dt(s):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var bt=0;function vt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,At,jt,Ct=!1,Et=[],Pt=null,Rt=null,Ot=null,Tt=new Map,Mt=new Map,zt=[],It="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mt.delete(t.pointerId)}}function Dt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=bi(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Ft(e){var t=yi(e.target);if(null!==t){var n=He(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void jt(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Nt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bi(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ve=r,n.target.dispatchEvent(r),ve=null,t.shift()}return!0}function Bt(e,t,n){Nt(e)&&n.delete(t)}function _t(){Ct=!1,null!==Pt&&Nt(Pt)&&(Pt=null),null!==Rt&&Nt(Rt)&&(Rt=null),null!==Ot&&Nt(Ot)&&(Ot=null),Tt.forEach(Bt),Mt.forEach(Bt)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,_t)))}function Ht(e){function t(t){return Ut(t,e)}if(0<Et.length){Ut(Et[0],e);for(var n=1;n<Et.length;n++){var r=Et[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Ut(Pt,e),null!==Rt&&Ut(Rt,e),null!==Ot&&Ut(Ot,e),Tt.forEach(t),Mt.forEach(t),n=0;n<zt.length;n++)(r=zt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&null===(n=zt[0]).blockedOn;)Ft(n),null===n.blockedOn&&zt.shift()}var Wt=v.ReactCurrentBatchConfig,qt=!0;function Gt(e,t,n,r){var i=bt,o=Wt.transition;Wt.transition=null;try{bt=1,Kt(e,t,n,r)}finally{bt=i,Wt.transition=o}}function Vt(e,t,n,r){var i=bt,o=Wt.transition;Wt.transition=null;try{bt=4,Kt(e,t,n,r)}finally{bt=i,Wt.transition=o}}function Kt(e,t,n,r){if(qt){var i=Yt(e,t,n,r);if(null===i)qr(e,t,r,Jt,n),Lt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Pt=Dt(Pt,e,t,n,r,i),!0;case"dragenter":return Rt=Dt(Rt,e,t,n,r,i),!0;case"mouseover":return Ot=Dt(Ot,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Tt.set(o,Dt(Tt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Mt.set(o,Dt(Mt.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<It.indexOf(e)){for(;null!==i;){var o=bi(i);if(null!==o&&wt(o),null===(o=Yt(e,t,n,r))&&qr(e,t,r,Jt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else qr(e,t,r,null,n)}}var Jt=null;function Yt(e,t,n,r){if(Jt=null,null!==(e=yi(e=we(r))))if(null===(t=He(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case $e:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Zt=null,Xt=null,$t=null;function en(){if($t)return $t;var e,t,n=Xt,r=n.length,i="value"in Zt?Zt.value:Zt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return $t=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=F({},cn,{view:0,detail:0}),pn=on(dn),fn=F({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),mn=on(fn),hn=on(F({},fn,{dataTransfer:0})),gn=on(F({},dn,{relatedTarget:0})),xn=on(F({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=F({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(yn),vn=on(F({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function An(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function jn(){return An}var Cn=F({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),En=on(Cn),Pn=on(F({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=on(F({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn})),On=on(F({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=F({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mn=on(Tn),zn=[9,13,27,32],In=u&&"CompositionEvent"in window,Ln=null;u&&"documentMode"in document&&(Ln=document.documentMode);var Dn=u&&"TextEvent"in window&&!Ln,Fn=u&&(!In||Ln&&8<Ln&&11>=Ln),Nn=String.fromCharCode(32),Bn=!1;function _n(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Gn(e,t,n,r){Ce(r),0<(t=Vr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,Kn=null;function Jn(e){Nr(e,0)}function Yn(e){if(K(vi(e)))return e}function Qn(e,t){if("change"===e)return t}var Zn=!1;if(u){var Xn;if(u){var $n="oninput"in document;if(!$n){var er=document.createElement("div");er.setAttribute("oninput","return;"),$n="function"===typeof er.oninput}Xn=$n}else Xn=!1;Zn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Vn&&(Vn.detachEvent("onpropertychange",nr),Kn=Vn=null)}function nr(e){if("value"===e.propertyName&&Yn(Kn)){var t=[];Gn(t,Kn,e,we(e)),Te(Jn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Vn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yn(Kn)}function or(e,t){if("click"===e)return Yn(t)}function ar(e,t){if("input"===e||"change"===e)return Yn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=J();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=J((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ur(n,o);var a=ur(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,yr=null,br=!1;function vr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==J(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Vr(xr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},Ar={};function jr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ar)return Sr[e]=n[t];return e}u&&(Ar=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Cr=jr("animationend"),Er=jr("animationiteration"),Pr=jr("animationstart"),Rr=jr("transitionend"),Or=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(e,t){Or.set(e,t),l(t,[e])}for(var zr=0;zr<Tr.length;zr++){var Ir=Tr[zr];Mr(Ir.toLowerCase(),"on"+(Ir[0].toUpperCase()+Ir.slice(1)))}Mr(Cr,"onAnimationEnd"),Mr(Er,"onAnimationIteration"),Mr(Pr,"onAnimationStart"),Mr("dblclick","onDoubleClick"),Mr("focusin","onFocus"),Mr("focusout","onBlur"),Mr(Rr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Fr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,l,c){if(Ue.apply(this,arguments),De){if(!De)throw Error(o(198));var u=Fe;De=!1,Fe=null,Ne||(Ne=!0,Be=u)}}(r,t,void 0,e),e.currentTarget=null}function Nr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Fr(i,s,c),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Fr(i,s,c),o=l}}}if(Ne)throw e=Be,Ne=!1,Be=null,e}function Br(e,t){var n=t[hi];void 0===n&&(n=t[hi]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function _r(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[Ur]){e[Ur]=!0,a.forEach((function(t){"selectionchange"!==t&&(Dr.has(t)||_r(t,!1,e),_r(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,_r("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Qt(t)){case 1:var i=Gt;break;case 4:i=Vt;break;default:i=Kt}n=i.bind(null,t,n,e),i=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=yi(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}Te((function(){var r=o,i=we(n),a=[];e:{var s=Or.get(e);if(void 0!==s){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=En;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Rn;break;case Cr:case Er:case Pr:l=xn;break;case Rr:l=On;break;case"scroll":l=pn;break;case"wheel":l=Mn;break;case"copy":case"cut":case"paste":l=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Pn}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var f,m=r;null!==m;){var h=(f=m).stateNode;if(5===f.tag&&null!==h&&(f=h,null!==p&&(null!=(h=Me(m,p))&&u.push(Gr(m,h,f)))),d)break;m=m.return}0<u.length&&(s=new l(s,c,null,n,i),a.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===ve||!(c=n.relatedTarget||n.fromElement)||!yi(c)&&!c[mi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?yi(c):null)&&(c!==(d=He(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=mn,h="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(u=Pn,h="onPointerLeave",p="onPointerEnter",m="pointer"),d=null==l?s:vi(l),f=null==c?s:vi(c),(s=new u(h,m+"leave",l,n,i)).target=d,s.relatedTarget=f,h=null,yi(i)===r&&((u=new u(p,m+"enter",c,n,i)).target=f,u.relatedTarget=d,h=u),d=h,l&&c)e:{for(p=c,m=0,f=u=l;f;f=Kr(f))m++;for(f=0,h=p;h;h=Kr(h))f++;for(;0<m-f;)u=Kr(u),m--;for(;0<f-m;)p=Kr(p),f--;for(;m--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kr(u),p=Kr(p)}u=null}else u=null;null!==l&&Jr(a,s,l,u,!1),null!==c&&null!==d&&Jr(a,d,c,u,!0)}if("select"===(l=(s=r?vi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Qn;else if(qn(s))if(Zn)g=ar;else{g=ir;var x=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=or);switch(g&&(g=g(e,r))?Gn(a,g,n,i):(x&&x(e,s,r),"focusout"===e&&(x=s._wrapperState)&&x.controlled&&"number"===s.type&&ee(s,"number",s.value)),x=r?vi(r):window,e){case"focusin":(qn(x)||"true"===x.contentEditable)&&(gr=x,xr=r,yr=null);break;case"focusout":yr=xr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,vr(a,n,i);break;case"selectionchange":if(hr)break;case"keydown":case"keyup":vr(a,n,i)}var y;if(In)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Hn?_n(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Fn&&"ko"!==n.locale&&(Hn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Hn&&(y=en()):(Xt="value"in(Zt=i)?Zt.value:Zt.textContent,Hn=!0)),0<(x=Vr(r,b)).length&&(b=new vn(b,e,null,n,i),a.push({event:b,listeners:x}),y?b.data=y:null!==(y=Un(n))&&(b.data=y))),(y=Dn?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Bn=!0,Nn);case"textInput":return(e=t.data)===Nn&&Bn?null:e;default:return null}}(e,n):function(e,t){if(Hn)return"compositionend"===e||!In&&_n(e,t)?(e=en(),$t=Xt=Zt=null,Hn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Vr(r,"onBeforeInput")).length&&(i=new vn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=y))}Nr(a,t)}))}function Gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Me(e,n))&&r.unshift(Gr(e,o,i)),null!=(o=Me(e,t))&&r.push(Gr(e,o,i))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Jr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=Me(n,o))&&a.unshift(Gr(n,l,s)):i||null!=(l=Me(n,o))&&a.push(Gr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Yr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function Zr(e){return("string"===typeof e?e:""+e).replace(Yr,"\n").replace(Qr,"")}function Xr(e,t,n){if(t=Zr(t),Zr(e)!==t&&n)throw Error(o(425))}function $r(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout((function(){throw e}))}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ht(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ht(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),pi="__reactFiber$"+di,fi="__reactProps$"+di,mi="__reactContainer$"+di,hi="__reactEvents$"+di,gi="__reactListeners$"+di,xi="__reactHandles$"+di;function yi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[pi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function bi(e){return!(e=e[pi]||e[mi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function vi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[fi]||null}var ki=[],Si=-1;function Ai(e){return{current:e}}function ji(e){0>Si||(e.current=ki[Si],ki[Si]=null,Si--)}function Ci(e,t){Si++,ki[Si]=e.current,e.current=t}var Ei={},Pi=Ai(Ei),Ri=Ai(!1),Oi=Ei;function Ti(e,t){var n=e.type.contextTypes;if(!n)return Ei;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Mi(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zi(){ji(Ri),ji(Pi)}function Ii(e,t,n){if(Pi.current!==Ei)throw Error(o(168));Ci(Pi,t),Ci(Ri,n)}function Li(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,W(e)||"Unknown",i));return F({},n,r)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ei,Oi=Pi.current,Ci(Pi,e),Ci(Ri,Ri.current),!0}function Fi(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Li(e,t,Oi),r.__reactInternalMemoizedMergedChildContext=e,ji(Ri),ji(Pi),Ci(Pi,e)):ji(Ri),Ci(Ri,n)}var Ni=null,Bi=!1,_i=!1;function Ui(e){null===Ni?Ni=[e]:Ni.push(e)}function Hi(){if(!_i&&null!==Ni){_i=!0;var e=0,t=bt;try{var n=Ni;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ni=null,Bi=!1}catch(i){throw null!==Ni&&(Ni=Ni.slice(e+1)),Ke($e,Hi),i}finally{bt=t,_i=!1}}return null}var Wi=[],qi=0,Gi=null,Vi=0,Ki=[],Ji=0,Yi=null,Qi=1,Zi="";function Xi(e,t){Wi[qi++]=Vi,Wi[qi++]=Gi,Gi=e,Vi=t}function $i(e,t,n){Ki[Ji++]=Qi,Ki[Ji++]=Zi,Ki[Ji++]=Yi,Yi=e;var r=Qi;e=Zi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qi=1<<32-at(t)+i|n<<i|r,Zi=o+e}else Qi=1<<o|n<<i|r,Zi=e}function eo(e){null!==e.return&&(Xi(e,1),$i(e,1,0))}function to(e){for(;e===Gi;)Gi=Wi[--qi],Wi[qi]=null,Vi=Wi[--qi],Wi[qi]=null;for(;e===Yi;)Yi=Ki[--Ji],Ki[Ji]=null,Zi=Ki[--Ji],Ki[Ji]=null,Qi=Ki[--Ji],Ki[Ji]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=Tc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function so(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Yi?{id:Qi,overflow:Zi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function lo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function co(e){if(io){var t=ro;if(t){var n=t;if(!so(e,t)){if(lo(e))throw Error(o(418));t=ci(n.nextSibling);var r=no;t&&so(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(lo(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function po(e){if(e!==no)return!1;if(!io)return uo(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(lo(e))throw fo(),Error(o(418));for(;t;)ao(e,t),t=ci(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ci(e.stateNode.nextSibling):null;return!0}function fo(){for(var e=ro;e;)e=ci(e.nextSibling)}function mo(){ro=no=null,io=!1}function ho(e){null===oo?oo=[e]:oo.push(e)}var go=v.ReactCurrentBatchConfig;function xo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bo(e){return(0,e._init)(e._payload)}function vo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=zc(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Fc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===M&&bo(o)===t.type)?((r=i(t,n.props)).ref=xo(e,t,n),r.return=e,r):((r=Ic(n.type,n.key,n.props,null,e.mode,r)).ref=xo(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Nc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Lc(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Fc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ic(t.type,t.key,t.props,null,e.mode,n)).ref=xo(e,null,t),n.return=e,n;case k:return(t=Nc(t,e.mode,n)).return=e,t;case M:return p(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lc(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case M:return f(e,t,(i=n._init)(n._payload),r)}if(te(n)||L(n))return null!==i?null:d(e,t,n,r,null);yo(e,n)}return null}function m(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case M:return m(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,i,null);yo(t,r)}return null}function h(i,o,s,l){for(var c=null,u=null,d=o,h=o=0,g=null;null!==d&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var x=f(i,d,s[h],l);if(null===x){null===d&&(d=g);break}e&&d&&null===x.alternate&&t(i,d),o=a(x,o,h),null===u?c=x:u.sibling=x,u=x,d=g}if(h===s.length)return n(i,d),io&&Xi(i,h),c;if(null===d){for(;h<s.length;h++)null!==(d=p(i,s[h],l))&&(o=a(d,o,h),null===u?c=d:u.sibling=d,u=d);return io&&Xi(i,h),c}for(d=r(i,d);h<s.length;h++)null!==(g=m(d,i,h,s[h],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?h:g.key),o=a(g,o,h),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(i,e)})),io&&Xi(i,h),c}function g(i,s,l,c){var u=L(l);if("function"!==typeof u)throw Error(o(150));if(null==(l=u.call(l)))throw Error(o(151));for(var d=u=null,h=s,g=s=0,x=null,y=l.next();null!==h&&!y.done;g++,y=l.next()){h.index>g?(x=h,h=null):x=h.sibling;var b=f(i,h,y.value,c);if(null===b){null===h&&(h=x);break}e&&h&&null===b.alternate&&t(i,h),s=a(b,s,g),null===d?u=b:d.sibling=b,d=b,h=x}if(y.done)return n(i,h),io&&Xi(i,g),u;if(null===h){for(;!y.done;g++,y=l.next())null!==(y=p(i,y.value,c))&&(s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return io&&Xi(i,g),u}for(h=r(i,h);!y.done;g++,y=l.next())null!==(y=m(h,i,g,y.value,c))&&(e&&null!==y.alternate&&h.delete(null===y.key?g:y.key),s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return e&&h.forEach((function(e){return t(i,e)})),io&&Xi(i,g),u}return function e(r,o,a,l){if("object"===typeof a&&null!==a&&a.type===S&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=o;null!==u;){if(u.key===c){if((c=a.type)===S){if(7===u.tag){n(r,u.sibling),(o=i(u,a.props.children)).return=r,r=o;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===M&&bo(c)===u.type){n(r,u.sibling),(o=i(u,a.props)).ref=xo(r,u,a),o.return=r,r=o;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===S?((o=Lc(a.props.children,r.mode,l,a.key)).return=r,r=o):((l=Ic(a.type,a.key,a.props,null,r.mode,l)).ref=xo(r,o,a),l.return=r,r=l)}return s(r);case k:e:{for(u=a.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Nc(a,r.mode,l)).return=r,r=o}return s(r);case M:return e(r,o,(u=a._init)(a._payload),l)}if(te(a))return h(r,o,a,l);if(L(a))return g(r,o,a,l);yo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Fc(a,r.mode,l)).return=r,r=o),s(r)):n(r,o)}}var wo=vo(!0),ko=vo(!1),So=Ai(null),Ao=null,jo=null,Co=null;function Eo(){Co=jo=Ao=null}function Po(e){var t=So.current;ji(So),e._currentValue=t}function Ro(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Oo(e,t){Ao=e,Co=jo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bs=!0),e.firstContext=null)}function To(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},null===jo){if(null===Ao)throw Error(o(308));jo=e,Ao.dependencies={lanes:0,firstContext:e}}else jo=jo.next=e;return t}var Mo=null;function zo(e){null===Mo?Mo=[e]:Mo.push(e)}function Io(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,zo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lo(e,r)}function Lo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Do=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function No(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _o(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Pl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lo(e,n)}return null===(i=r.interleaved)?(t.next=t,zo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lo(e,n)}function Uo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Ho(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var i=e.updateQueue;Do=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?o=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,u=c=l=null,s=o;;){var p=s.lane,f=s.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,h=s;switch(p=t,f=n,h.tag){case 1:if("function"===typeof(m=h.payload)){d=m.call(f,d,p);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=h.payload)?m.call(f,d,p):m)||void 0===p)break e;d=F({},d,p);break e;case 2:Do=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,a|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Dl|=a,e.lanes=a,e.memoizedState=d}}function qo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Go={},Vo=Ai(Go),Ko=Ai(Go),Jo=Ai(Go);function Yo(e){if(e===Go)throw Error(o(174));return e}function Qo(e,t){switch(Ci(Jo,t),Ci(Ko,e),Ci(Vo,Go),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}ji(Vo),Ci(Vo,t)}function Zo(){ji(Vo),ji(Ko),ji(Jo)}function Xo(e){Yo(Jo.current);var t=Yo(Vo.current),n=le(t,e.type);t!==n&&(Ci(Ko,e),Ci(Vo,n))}function $o(e){Ko.current===e&&(ji(Vo),ji(Ko))}var ea=Ai(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=v.ReactCurrentDispatcher,oa=v.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ca=null,ua=!1,da=!1,pa=0,fa=0;function ma(){throw Error(o(321))}function ha(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?$a:es,e=n(r,i),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(o(301));a+=1,ca=la=null,t.updateQueue=null,ia.current=ts,e=n(r,i)}while(da)}if(ia.current=Xa,t=null!==la&&null!==la.next,aa=0,ca=la=sa=null,ua=!1,t)throw Error(o(300));return e}function xa(){var e=0!==pa;return pa=0,e}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?sa.memoizedState=ca=e:ca=ca.next=e,ca}function ba(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ca?sa.memoizedState:ca.next;if(null!==t)ca=t,la=e;else{if(null===e)throw Error(o(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ca?sa.memoizedState=ca=e:ca=ca.next=e}return ca}function va(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=ba(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=la,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var l=s=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,sa.lanes|=d,Dl|=d}u=u.next}while(null!==u&&u!==a);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(bs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,sa.lanes|=a,Dl|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=ba(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);sr(a,t.memoizedState)||(bs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Sa(){}function Aa(e,t){var n=sa,r=ba(),i=t(),a=!sr(r.memoizedState,i);if(a&&(r.memoizedState=i,bs=!0),r=r.queue,Da(Ea.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,Ta(9,Ca.bind(null,n,r,i,t),void 0,null),null===Rl)throw Error(o(349));0!==(30&aa)||ja(n,t,i)}return i}function ja(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ca(e,t,n,r){t.value=n,t.getSnapshot=r,Pa(t)&&Ra(e)}function Ea(e,t,n){return n((function(){Pa(t)&&Ra(e)}))}function Pa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Ra(e){var t=Lo(e,1);null!==t&&nc(t,e,1,-1)}function Oa(e){var t=ya();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:e},t.queue=e,e=e.dispatch=Ja.bind(null,sa,e),[t.memoizedState,e]}function Ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ma(){return ba().memoizedState}function za(e,t,n,r){var i=ya();sa.flags|=e,i.memoizedState=Ta(1|t,n,void 0,void 0===r?null:r)}function Ia(e,t,n,r){var i=ba();r=void 0===r?null:r;var o=void 0;if(null!==la){var a=la.memoizedState;if(o=a.destroy,null!==r&&ha(r,a.deps))return void(i.memoizedState=Ta(t,n,o,r))}sa.flags|=e,i.memoizedState=Ta(1|t,n,o,r)}function La(e,t){return za(8390656,8,e,t)}function Da(e,t){return Ia(2048,8,e,t)}function Fa(e,t){return Ia(4,2,e,t)}function Na(e,t){return Ia(4,4,e,t)}function Ba(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function _a(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ia(4,4,Ba.bind(null,t,e),n)}function Ua(){}function Ha(e,t){var n=ba();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ha(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wa(e,t){var n=ba();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ha(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qa(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,bs=!0),e.memoizedState=n):(sr(n,t)||(n=ht(),sa.lanes|=n,Dl|=n,e.baseState=!0),t)}function Ga(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{bt=n,oa.transition=r}}function Va(){return ba().memoizedState}function Ka(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ya(e))Qa(t,n);else if(null!==(n=Io(e,t,n,r))){nc(n,e,r,ec()),Za(n,t,r)}}function Ja(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ya(e))Qa(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(i.next=i,zo(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=Io(e,t,i,r))&&(nc(n,e,r,i=ec()),Za(n,t,r))}}function Ya(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Qa(e,t){da=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Za(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Xa={readContext:To,useCallback:ma,useContext:ma,useEffect:ma,useImperativeHandle:ma,useInsertionEffect:ma,useLayoutEffect:ma,useMemo:ma,useReducer:ma,useRef:ma,useState:ma,useDebugValue:ma,useDeferredValue:ma,useTransition:ma,useMutableSource:ma,useSyncExternalStore:ma,useId:ma,unstable_isNewReconciler:!1},$a={readContext:To,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:To,useEffect:La,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,za(4194308,4,Ba.bind(null,t,e),n)},useLayoutEffect:function(e,t){return za(4194308,4,e,t)},useInsertionEffect:function(e,t){return za(4,2,e,t)},useMemo:function(e,t){var n=ya();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ya();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ka.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:Oa,useDebugValue:Ua,useDeferredValue:function(e){return ya().memoizedState=e},useTransition:function(){var e=Oa(!1),t=e[0];return e=Ga.bind(null,e[1]),ya().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,i=ya();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Rl)throw Error(o(349));0!==(30&aa)||ja(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,La(Ea.bind(null,r,a,e),[e]),r.flags|=2048,Ta(9,Ca.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ya(),t=Rl.identifierPrefix;if(io){var n=Zi;t=":"+t+"R"+(n=(Qi&~(1<<32-at(Qi)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:To,useCallback:Ha,useContext:To,useEffect:Da,useImperativeHandle:_a,useInsertionEffect:Fa,useLayoutEffect:Na,useMemo:Wa,useReducer:wa,useRef:Ma,useState:function(){return wa(va)},useDebugValue:Ua,useDeferredValue:function(e){return qa(ba(),la.memoizedState,e)},useTransition:function(){return[wa(va)[0],ba().memoizedState]},useMutableSource:Sa,useSyncExternalStore:Aa,useId:Va,unstable_isNewReconciler:!1},ts={readContext:To,useCallback:Ha,useContext:To,useEffect:Da,useImperativeHandle:_a,useInsertionEffect:Fa,useLayoutEffect:Na,useMemo:Wa,useReducer:ka,useRef:Ma,useState:function(){return ka(va)},useDebugValue:Ua,useDeferredValue:function(e){var t=ba();return null===la?t.memoizedState=e:qa(t,la.memoizedState,e)},useTransition:function(){return[ka(va)[0],ba().memoizedState]},useMutableSource:Sa,useSyncExternalStore:Aa,useId:Va,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=F({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&He(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Bo(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=_o(e,o,i))&&(nc(t,e,i,r),Uo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Bo(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=_o(e,o,i))&&(nc(t,e,i,r),Uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Bo(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=_o(e,i,r))&&(nc(t,e,r,n),Uo(t,e,r))}};function os(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,o))}function as(e,t,n){var r=!1,i=Ei,o=t.contextType;return"object"===typeof o&&null!==o?o=To(o):(i=Mi(t)?Oi:Pi.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ti(e,i):Ei),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Fo(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=To(o):(o=Mi(t)?Oi:Pi.current,i.context=Ti(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rs(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),Wo(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function us(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=Bo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ql||(ql=!0,Gl=r),ds(0,t)},n}function ms(e,t,n){(n=Bo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Vl?Vl=new Set([this]):Vl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function hs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jc.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Bo(-1,1)).tag=2,_o(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ys=v.ReactCurrentOwner,bs=!1;function vs(e,t,n,r){t.child=null===e?ko(t,null,n,r):wo(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var o=t.ref;return Oo(t,i),r=ga(e,t,n,r,o,i),n=xa(),null===e||bs?(io&&n&&eo(t),t.flags|=1,vs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qs(e,t,i))}function ks(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Mc(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ic(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Ss(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return qs(e,t,i)}return t.flags|=1,(e=zc(o,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref){if(bs=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,qs(e,t,i);0!==(131072&e.flags)&&(bs=!0)}}return Cs(e,t,n,r,i)}function As(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ci(zl,Ml),Ml|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ci(zl,Ml),Ml|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ci(zl,Ml),Ml|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ci(zl,Ml),Ml|=r;return vs(e,t,i,n),t.child}function js(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,r,i){var o=Mi(n)?Oi:Pi.current;return o=Ti(t,o),Oo(t,i),n=ga(e,t,n,r,o,i),r=xa(),null===e||bs?(io&&r&&eo(t),t.flags|=1,vs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qs(e,t,i))}function Es(e,t,n,r,i){if(Mi(n)){var o=!0;Di(t)}else o=!1;if(Oo(t,i),null===t.stateNode)Ws(e,t),as(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=To(c):c=Ti(t,c=Mi(n)?Oi:Pi.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,a,r,c),Do=!1;var p=t.memoizedState;a.state=p,Wo(t,r,a,i),l=t.memoizedState,s!==r||p!==l||Ri.current||Do?("function"===typeof u&&(rs(t,n,u,r),l=t.memoizedState),(s=Do||os(t,n,s,r,p,l,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,No(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),a.props=c,d=t.pendingProps,p=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=To(l):l=Ti(t,l=Mi(n)?Oi:Pi.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,a,r,l),Do=!1,p=t.memoizedState,a.state=p,Wo(t,r,a,i);var m=t.memoizedState;s!==d||p!==m||Ri.current||Do?("function"===typeof f&&(rs(t,n,f,r),m=t.memoizedState),(c=Do||os(t,n,c,r,p,m,l)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,m,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,m,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=l,r=c):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ps(e,t,n,r,o,i)}function Ps(e,t,n,r,i,o){js(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Fi(t,n,!1),qs(e,t,o);r=t.stateNode,ys.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,s,o)):vs(e,t,s,o),t.memoizedState=r.state,i&&Fi(t,n,!0),t.child}function Rs(e){var t=e.stateNode;t.pendingContext?Ii(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ii(0,t.context,!1),Qo(e,t.containerInfo)}function Os(e,t,n,r,i){return mo(),ho(i),t.flags|=256,vs(e,t,n,r),t.child}var Ts,Ms,zs,Is,Ls={dehydrated:null,treeContext:null,retryLane:0};function Ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fs(e,t,n){var r,i=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Ci(ea,1&a),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Dc(l,i,0,null),e=Lc(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ds(n),t.memoizedState=Ls,e):Ns(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,s){if(n)return 256&t.flags?(t.flags&=-257,Bs(e,t,s,r=us(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Dc({mode:"visible",children:r.children},i,0,null),(a=Lc(a,i,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,s),t.child.memoizedState=Ds(s),t.memoizedState=Ls,a);if(0===(1&t.mode))return Bs(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Bs(e,t,s,r=us(a=Error(o(419)),r,void 0))}if(l=0!==(s&e.childLanes),bs||l){if(null!==(r=Rl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Lo(e,i),nc(r,e,i,-1))}return hc(),Bs(e,t,s,r=us(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Ec.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ci(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Ki[Ji++]=Qi,Ki[Ji++]=Zi,Ki[Ji++]=Yi,Qi=e.id,Zi=e.overflow,Yi=t),t=Ns(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,a,n);if(s){s=i.fallback,l=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=zc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=zc(r,s):(s=Lc(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Ds(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ls,i}return e=(s=e.child).sibling,i=zc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ns(e,t){return(t=Dc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Bs(e,t,n,r){return null!==r&&ho(r),wo(t,e.child,null,n),(e=Ns(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function _s(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ro(e.return,t,n)}function Us(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Hs(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(vs(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&_s(e,n,t);else if(19===e.tag)_s(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ci(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Us(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Us(t,!0,n,null,o);break;case"together":Us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ws(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Dl|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=zc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=zc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Gs(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Vs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ks(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vs(t),null;case 1:case 17:return Mi(t.type)&&zi(),Vs(t),null;case 3:return r=t.stateNode,Zo(),ji(Ri),ji(Pi),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(po(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(ac(oo),oo=null))),Ms(e,t),Vs(t),null;case 5:$o(t);var i=Yo(Jo.current);if(n=t.type,null!==e&&null!=t.stateNode)zs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Vs(t),null}if(e=Yo(Vo.current),po(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[pi]=t,r[fi]=a,e=0!==(1&t.mode),n){case"dialog":Br("cancel",r),Br("close",r);break;case"iframe":case"object":case"embed":Br("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)Br(Lr[i],r);break;case"source":Br("error",r);break;case"img":case"image":case"link":Br("error",r),Br("load",r);break;case"details":Br("toggle",r);break;case"input":Q(r,a),Br("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Br("invalid",r);break;case"textarea":ie(r,a),Br("invalid",r)}for(var l in ye(n,a),i=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Xr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Xr(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Br("scroll",r)}switch(n){case"input":V(r),$(r,a,!0);break;case"textarea":V(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=$r)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pi]=t,e[fi]=r,Ts(e,t,!1,!1),t.stateNode=e;e:{switch(l=be(n,r),n){case"dialog":Br("cancel",e),Br("close",e),i=r;break;case"iframe":case"object":case"embed":Br("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)Br(Lr[i],e);i=r;break;case"source":Br("error",e),i=r;break;case"img":case"image":case"link":Br("error",e),Br("load",e),i=r;break;case"details":Br("toggle",e),i=r;break;case"input":Q(e,r),i=Y(e,r),Br("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=F({},r,{value:void 0}),Br("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Br("invalid",e)}for(a in ye(n,i),c=i)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?ge(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=u&&"onScroll"===a&&Br("scroll",e):null!=u&&b(e,a,u,l))}switch(n){case"input":V(e),$(e,r,!1);break;case"textarea":V(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Vs(t),null;case 6:if(e&&null!=t.stateNode)Is(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Yo(Jo.current),Yo(Vo.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[pi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pi]=t,t.stateNode=r}return Vs(t),null;case 13:if(ji(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))fo(),mo(),t.flags|=98560,a=!1;else if(a=po(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[pi]=t}else mo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Vs(t),a=!1}else null!==oo&&(ac(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Il&&(Il=3):hc())),null!==t.updateQueue&&(t.flags|=4),Vs(t),null);case 4:return Zo(),Ms(e,t),null===e&&Hr(t.stateNode.containerInfo),Vs(t),null;case 10:return Po(t.type._context),Vs(t),null;case 19:if(ji(ea),null===(a=t.memoizedState))return Vs(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Gs(a,!1);else{if(0!==Il||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Gs(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ci(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Ze()>Hl&&(t.flags|=128,r=!0,Gs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Gs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!io)return Vs(t),null}else 2*Ze()-a.renderingStartTime>Hl&&1073741824!==n&&(t.flags|=128,r=!0,Gs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ze(),t.sibling=null,n=ea.current,Ci(ea,r?1&n|2:1&n),t):(Vs(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ml)&&(Vs(t),6&t.subtreeFlags&&(t.flags|=8192)):Vs(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Js(e,t){switch(to(t),t.tag){case 1:return Mi(t.type)&&zi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Zo(),ji(Ri),ji(Pi),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return $o(t),null;case 13:if(ji(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));mo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return ji(ea),null;case 4:return Zo(),null;case 10:return Po(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Ts=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ms=function(){},zs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yo(Vo.current);var o,a=null;switch(n){case"input":i=Y(e,i),r=Y(e,r),a=[];break;case"select":i=F({},i,{value:void 0}),r=F({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=$r)}for(u in ye(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Br("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Is=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ys=!1,Qs=!1,Zs="function"===typeof WeakSet?WeakSet:Set,Xs=null;function $s(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Ac(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Ac(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&el(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[fi],delete t[hi],delete t[gi],delete t[xi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=$r));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function pl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Qs||$s(n,t);case 6:var r=ul,i=dl;ul=null,pl(e,t,n),dl=i,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Ht(e)):li(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,pl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Qs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&el(n,t,a),i=i.next}while(i!==r)}pl(e,t,n);break;case 1:if(!Qs&&($s(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ac(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Qs=(r=Qs)||null!==n.memoizedState,pl(e,t,n),Qs=r):pl(e,t,n);break;default:pl(e,t,n)}}function ml(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Zs),t.forEach((function(t){var r=Pc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function hl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(o(160));fl(a,s,i),ul=null,dl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){Ac(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hl(t,e),xl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){Ac(e,e.return,g)}try{nl(5,e,e.return)}catch(g){Ac(e,e.return,g)}}break;case 1:hl(t,e),xl(e),512&r&&null!==n&&$s(n,n.return);break;case 5:if(hl(t,e),xl(e),512&r&&null!==n&&$s(n,n.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(g){Ac(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===a.type&&null!=a.name&&Z(i,a),be(l,s);var u=be(l,a);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];"style"===d?ge(i,p):"dangerouslySetInnerHTML"===d?de(i,p):"children"===d?pe(i,p):b(i,d,p,u)}switch(l){case"input":X(i,a);break;case"textarea":oe(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var m=a.value;null!=m?ne(i,!!a.multiple,m,!1):f!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[fi]=a}catch(g){Ac(e,e.return,g)}}break;case 6:if(hl(t,e),xl(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Ac(e,e.return,g)}}break;case 3:if(hl(t,e),xl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ht(t.containerInfo)}catch(g){Ac(e,e.return,g)}break;case 4:default:hl(t,e),xl(e);break;case 13:hl(t,e),xl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Ul=Ze())),4&r&&ml(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Qs=(u=Qs)||d,hl(t,e),Qs=u):hl(t,e),xl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Xs=e,d=e.child;null!==d;){for(p=Xs=d;null!==Xs;){switch(m=(f=Xs).child,f.tag){case 0:case 11:case 14:case 15:nl(4,f,f.return);break;case 1:$s(f,f.return);var h=f.stateNode;if("function"===typeof h.componentWillUnmount){r=f,n=f.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){Ac(r,n,g)}}break;case 5:$s(f,f.return);break;case 22:if(null!==f.memoizedState){wl(p);continue}}null!==m?(m.return=f,Xs=m):wl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{i=p.stateNode,u?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=he("display",s))}catch(g){Ac(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){Ac(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hl(t,e),xl(e),4&r&&ml(e);case 21:}}function xl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(pe(i,""),r.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(o(161))}}catch(s){Ac(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,n){Xs=e,bl(e,t,n)}function bl(e,t,n){for(var r=0!==(1&e.mode);null!==Xs;){var i=Xs,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Ys;if(!a){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Qs;s=Ys;var c=Qs;if(Ys=a,(Qs=l)&&!c)for(Xs=i;null!==Xs;)l=(a=Xs).child,22===a.tag&&null!==a.memoizedState?kl(i):null!==l?(l.return=a,Xs=l):kl(i);for(;null!==o;)Xs=o,bl(o,t,n),o=o.sibling;Xs=i,Ys=s,Qs=c}vl(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Xs=o):vl(e)}}function vl(e){for(;null!==Xs;){var t=Xs;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Qs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Qs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&qo(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}qo(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Ht(p)}}}break;default:throw Error(o(163))}Qs||512&t.flags&&il(t)}catch(f){Ac(t,t.return,f)}}if(t===e){Xs=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xs=n;break}Xs=t.return}}function wl(e){for(;null!==Xs;){var t=Xs;if(t===e){Xs=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xs=n;break}Xs=t.return}}function kl(e){for(;null!==Xs;){var t=Xs;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){Ac(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Ac(t,i,l)}}var o=t.return;try{il(t)}catch(l){Ac(t,o,l)}break;case 5:var a=t.return;try{il(t)}catch(l){Ac(t,a,l)}}}catch(l){Ac(t,t.return,l)}if(t===e){Xs=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Xs=s;break}Xs=t.return}}var Sl,Al=Math.ceil,jl=v.ReactCurrentDispatcher,Cl=v.ReactCurrentOwner,El=v.ReactCurrentBatchConfig,Pl=0,Rl=null,Ol=null,Tl=0,Ml=0,zl=Ai(0),Il=0,Ll=null,Dl=0,Fl=0,Nl=0,Bl=null,_l=null,Ul=0,Hl=1/0,Wl=null,ql=!1,Gl=null,Vl=null,Kl=!1,Jl=null,Yl=0,Ql=0,Zl=null,Xl=-1,$l=0;function ec(){return 0!==(6&Pl)?Ze():-1!==Xl?Xl:Xl=Ze()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Pl)&&0!==Tl?Tl&-Tl:null!==go.transition?(0===$l&&($l=ht()),$l):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function nc(e,t,n,r){if(50<Ql)throw Ql=0,Zl=null,Error(o(185));xt(e,n,r),0!==(2&Pl)&&e===Rl||(e===Rl&&(0===(2&Pl)&&(Fl|=n),4===Il&&sc(e,Tl)),rc(e,r),1===n&&0===Pl&&0===(1&t.mode)&&(Hl=Ze()+500,Bi&&Hi()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),s=1<<a,l=i[a];-1===l?0!==(s&n)&&0===(s&r)||(i[a]=ft(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var r=pt(e,e===Rl?Tl:0);if(0===r)null!==n&&Je(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Je(n),1===t)0===e.tag?function(e){Bi=!0,Ui(e)}(lc.bind(null,e)):Ui(lc.bind(null,e)),ai((function(){0===(6&Pl)&&Hi()})),n=null;else{switch(vt(r)){case 1:n=$e;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Rc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Xl=-1,$l=0,0!==(6&Pl))throw Error(o(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pt(e,e===Rl?Tl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=Pl;Pl|=2;var a=mc();for(Rl===e&&Tl===t||(Wl=null,Hl=Ze()+500,pc(e,t));;)try{yc();break}catch(l){fc(e,l)}Eo(),jl.current=a,Pl=i,null!==Ol?t=0:(Rl=null,Tl=0,t=Il)}if(0!==t){if(2===t&&(0!==(i=mt(e))&&(r=i,t=oc(e,i))),1===t)throw n=Ll,pc(e,0),sc(e,r),rc(e,Ze()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(a=mt(e))&&(r=a,t=oc(e,a))),1===t))throw n=Ll,pc(e,0),sc(e,r),rc(e,Ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wc(e,_l,Wl);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Ul+500-Ze())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,_l,Wl),t);break}wc(e,_l,Wl);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>i&&(i=s),r&=~a}if(r=i,10<(r=(120>(r=Ze()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Al(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,_l,Wl),r);break}wc(e,_l,Wl);break;default:throw Error(o(329))}}}return rc(e,Ze()),e.callbackNode===n?ic.bind(null,e):null}function oc(e,t){var n=Bl;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=_l,_l=n,null!==t&&ac(t)),e}function ac(e){null===_l?_l=e:_l.push.apply(_l,e)}function sc(e,t){for(t&=~Nl,t&=~Fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&Pl))throw Error(o(327));kc();var t=pt(e,0);if(0===(1&t))return rc(e,Ze()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=mt(e);0!==r&&(t=r,n=oc(e,r))}if(1===n)throw n=Ll,pc(e,0),sc(e,t),rc(e,Ze()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,_l,Wl),rc(e,Ze()),null}function cc(e,t){var n=Pl;Pl|=1;try{return e(t)}finally{0===(Pl=n)&&(Hl=Ze()+500,Bi&&Hi())}}function uc(e){null!==Jl&&0===Jl.tag&&0===(6&Pl)&&kc();var t=Pl;Pl|=1;var n=El.transition,r=bt;try{if(El.transition=null,bt=1,e)return e()}finally{bt=r,El.transition=n,0===(6&(Pl=t))&&Hi()}}function dc(){Ml=zl.current,ji(zl)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Ol)for(n=Ol.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&zi();break;case 3:Zo(),ji(Ri),ji(Pi),ra();break;case 5:$o(r);break;case 4:Zo();break;case 13:case 19:ji(ea);break;case 10:Po(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Rl=e,Ol=e=zc(e.current,null),Tl=Ml=t,Il=0,Ll=null,Nl=Fl=Dl=0,_l=Bl=null,null!==Mo){for(t=0;t<Mo.length;t++)if(null!==(r=(n=Mo[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}Mo=null}return e}function fc(e,t){for(;;){var n=Ol;try{if(Eo(),ia.current=Xa,ua){for(var r=sa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ua=!1}if(aa=0,ca=la=sa=null,da=!1,pa=0,Cl.current=null,null===n||null===n.return){Il=1,Ll=t,Ol=null;break}e:{var a=e,s=n.return,l=n,c=t;if(t=Tl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=gs(s);if(null!==m){m.flags&=-257,xs(m,s,l,0,t),1&m.mode&&hs(a,u,t),c=u;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(c),t.updateQueue=g}else h.add(c);break e}if(0===(1&t)){hs(a,u,t),hc();break e}c=Error(o(426))}else if(io&&1&l.mode){var x=gs(s);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xs(x,s,l,0,t),ho(cs(c,l));break e}}a=c=cs(c,l),4!==Il&&(Il=2),null===Bl?Bl=[a]:Bl.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Ho(a,fs(0,c,t));break e;case 1:l=c;var y=a.type,b=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Vl||!Vl.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t,Ho(a,ms(a,l,t));break e}}a=a.return}while(null!==a)}vc(n)}catch(v){t=v,Ol===n&&null!==n&&(Ol=n=n.return);continue}break}}function mc(){var e=jl.current;return jl.current=Xa,null===e?Xa:e}function hc(){0!==Il&&3!==Il&&2!==Il||(Il=4),null===Rl||0===(268435455&Dl)&&0===(268435455&Fl)||sc(Rl,Tl)}function gc(e,t){var n=Pl;Pl|=2;var r=mc();for(Rl===e&&Tl===t||(Wl=null,pc(e,t));;)try{xc();break}catch(i){fc(e,i)}if(Eo(),Pl=n,jl.current=r,null!==Ol)throw Error(o(261));return Rl=null,Tl=0,Il}function xc(){for(;null!==Ol;)bc(Ol)}function yc(){for(;null!==Ol&&!Ye();)bc(Ol)}function bc(e){var t=Sl(e.alternate,e,Ml);e.memoizedProps=e.pendingProps,null===t?vc(e):Ol=t,Cl.current=null}function vc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ks(n,t,Ml)))return void(Ol=n)}else{if(null!==(n=Js(n,t)))return n.flags&=32767,void(Ol=n);if(null===e)return Il=6,void(Ol=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ol=t);Ol=t=e}while(null!==t);0===Il&&(Il=5)}function wc(e,t,n){var r=bt,i=El.transition;try{El.transition=null,bt=1,function(e,t,n,r){do{kc()}while(null!==Jl);if(0!==(6&Pl))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===Rl&&(Ol=Rl=null,Tl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Kl||(Kl=!0,Rc(tt,(function(){return kc(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=El.transition,El.transition=null;var s=bt;bt=1;var l=Pl;Pl|=4,Cl.current=null,function(e,t){if(ei=qt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==a||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(m=p.firstChild);)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=s),f===a&&++d===r&&(c=s),null!==(m=p.nextSibling))break;f=(p=f).parentNode}p=m}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},qt=!1,Xs=t;null!==Xs;)if(e=(t=Xs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xs=e;else for(;null!==Xs;){t=Xs;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,x=h.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),x);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var v=t.stateNode.containerInfo;1===v.nodeType?v.textContent="":9===v.nodeType&&v.documentElement&&v.removeChild(v.documentElement);break;default:throw Error(o(163))}}catch(w){Ac(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xs=e;break}Xs=t.return}h=tl,tl=!1}(e,n),gl(n,e),mr(ti),qt=!!ei,ti=ei=null,e.current=n,yl(n,e,i),Qe(),Pl=l,bt=s,El.transition=a}else e.current=n;if(Kl&&(Kl=!1,Jl=e,Yl=i),a=e.pendingLanes,0===a&&(Vl=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Ze()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ql)throw ql=!1,e=Gl,Gl=null,e;0!==(1&Yl)&&0!==e.tag&&kc(),a=e.pendingLanes,0!==(1&a)?e===Zl?Ql++:(Ql=0,Zl=e):Ql=0,Hi()}(e,t,n,r)}finally{El.transition=i,bt=r}return null}function kc(){if(null!==Jl){var e=vt(Yl),t=El.transition,n=bt;try{if(El.transition=null,bt=16>e?16:e,null===Jl)var r=!1;else{if(e=Jl,Jl=null,Yl=0,0!==(6&Pl))throw Error(o(331));var i=Pl;for(Pl|=4,Xs=e.current;null!==Xs;){var a=Xs,s=a.child;if(0!==(16&Xs.flags)){var l=a.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Xs=u;null!==Xs;){var d=Xs;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var p=d.child;if(null!==p)p.return=d,Xs=p;else for(;null!==Xs;){var f=(d=Xs).sibling,m=d.return;if(ol(d),d===u){Xs=null;break}if(null!==f){f.return=m,Xs=f;break}Xs=m}}}var h=a.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Xs=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Xs=s;else e:for(;null!==Xs;){if(0!==(2048&(a=Xs).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Xs=y;break e}Xs=a.return}}var b=e.current;for(Xs=b;null!==Xs;){var v=(s=Xs).child;if(0!==(2064&s.subtreeFlags)&&null!==v)v.return=s,Xs=v;else e:for(s=b;null!==Xs;){if(0!==(2048&(l=Xs).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){Ac(l,l.return,k)}if(l===s){Xs=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Xs=w;break e}Xs=l.return}}if(Pl=i,Hi(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(k){}r=!0}return r}finally{bt=n,El.transition=t}}return!1}function Sc(e,t,n){e=_o(e,t=fs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function Ac(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Vl||!Vl.has(r))){t=_o(t,e=ms(t,e=cs(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function jc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Rl===e&&(Tl&n)===n&&(4===Il||3===Il&&(130023424&Tl)===Tl&&500>Ze()-Ul?pc(e,0):Nl|=n),rc(e,t)}function Cc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Lo(e,t))&&(xt(e,t,n),rc(e,n))}function Ec(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cc(e,n)}function Pc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Cc(e,n)}function Rc(e,t){return Ke(e,t)}function Oc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tc(e,t,n,r){return new Oc(e,t,n,r)}function Mc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function zc(e,t){var n=e.alternate;return null===n?((n=Tc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ic(e,t,n,r,i,a){var s=2;if(r=e,"function"===typeof e)Mc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Lc(n.children,i,a,t);case A:s=8,i|=8;break;case j:return(e=Tc(12,n,t,2|i)).elementType=j,e.lanes=a,e;case R:return(e=Tc(13,n,t,i)).elementType=R,e.lanes=a,e;case O:return(e=Tc(19,n,t,i)).elementType=O,e.lanes=a,e;case z:return Dc(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case E:s=9;break e;case P:s=11;break e;case T:s=14;break e;case M:s=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Tc(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Lc(e,t,n,r){return(e=Tc(7,e,r,t)).lanes=n,e}function Dc(e,t,n,r){return(e=Tc(22,e,r,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function Fc(e,t,n){return(e=Tc(6,e,null,t)).lanes=n,e}function Nc(e,t,n){return(t=Tc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _c(e,t,n,r,i,o,a,s,l){return e=new Bc(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Tc(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fo(o),e}function Uc(e){if(!e)return Ei;e:{if(He(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Mi(n))return Li(e,n,t)}return t}function Hc(e,t,n,r,i,o,a,s,l){return(e=_c(n,r,!0,e,0,o,0,s,l)).context=Uc(null),n=e.current,(o=Bo(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,_o(n,o,i),e.current.lanes=i,xt(e,i,r),rc(e,r),e}function Wc(e,t,n,r){var i=t.current,o=ec(),a=tc(i);return n=Uc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Bo(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=_o(i,t,a))&&(nc(e,i,a,o),Uo(e,i,a)),a}function qc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Gc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Vc(e,t){Gc(e,t),(e=e.alternate)&&Gc(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ri.current)bs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bs=!1,function(e,t,n){switch(t.tag){case 3:Rs(t),mo();break;case 5:Xo(t);break;case 1:Mi(t.type)&&Di(t);break;case 4:Qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ci(So,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ci(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Fs(e,t,n):(Ci(ea,1&ea.current),null!==(e=qs(e,t,n))?e.sibling:null);Ci(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Hs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ci(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,As(e,t,n)}return qs(e,t,n)}(e,t,n);bs=0!==(131072&e.flags)}else bs=!1,io&&0!==(1048576&t.flags)&&$i(t,Vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ws(e,t),e=t.pendingProps;var i=Ti(t,Pi.current);Oo(t,n),i=ga(null,t,r,e,i,n);var a=xa();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mi(r)?(a=!0,Di(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Fo(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Ps(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),vs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ws(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Mc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===T)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Cs(null,t,r,e,n);break e;case 1:t=Es(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,ns(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Cs(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,Es(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(Rs(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,No(e,t),Wo(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Os(e,t,r,n,i=cs(Error(o(423)),t));break e}if(r!==i){t=Os(e,t,r,n,i=cs(Error(o(424)),t));break e}for(ro=ci(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=ko(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(mo(),r===i){t=qs(e,t,n);break e}vs(e,t,r,n)}t=t.child}return t;case 5:return Xo(t),null===e&&co(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==a&&ni(r,a)&&(t.flags|=32),js(e,t),vs(e,t,s,n),t.child;case 6:return null===e&&co(t),null;case 13:return Fs(e,t,n);case 4:return Qo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):vs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return vs(e,t,t.pendingProps,n),t.child;case 8:case 12:return vs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Ci(So,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===i.children&&!Ri.current){t=qs(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=Bo(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),Ro(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ro(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}vs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Oo(t,n),r=r(i=To(i)),t.flags|=1,vs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),ks(e,t,r,i=ns(r.type,i),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),Ws(e,t),t.tag=1,Mi(r)?(e=!0,Di(t)):e=!1,Oo(t,n),as(t,r,i),ls(t,r,i,n),Ps(null,t,r,!0,e,n);case 19:return Hs(e,t,n);case 22:return As(e,t,n)}throw Error(o(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Jc(e){this._internalRoot=e}function Yc(e){this._internalRoot=e}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Zc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function $c(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var s=i;i=function(){var e=qc(a);s.call(e)}}Wc(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=qc(a);o.call(e)}}var a=Hc(t,r,e,0,null,!1,0,"",Xc);return e._reactRootContainer=a,e[mi]=a.current,Hr(8===e.nodeType?e.parentNode:e),uc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=qc(l);s.call(e)}}var l=_c(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=l,e[mi]=l.current,Hr(8===e.nodeType?e.parentNode:e),uc((function(){Wc(t,l,n,r)})),l}(n,t,e,i,r);return qc(a)}Yc.prototype.render=Jc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Wc(e,t,null,null)},Yc.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Wc(null,e,null,null)})),t[mi]=null}},Yc.prototype.unstable_scheduleHydration=function(e){if(e){var t=At();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&0!==t&&t<zt[n].priority;n++);zt.splice(n,0,e),0===n&&Ft(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),rc(t,Ze()),0===(6&Pl)&&(Hl=Ze()+500,Hi()))}break;case 13:uc((function(){var t=Lo(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Vc(e,1)}},kt=function(e){if(13===e.tag){var t=Lo(e,134217728);if(null!==t)nc(t,e,134217728,ec());Vc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Lo(e,t);if(null!==n)nc(n,e,t,ec());Vc(e,t)}},At=function(){return bt},jt=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},ke=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));K(r),X(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=cc,Re=uc;var eu={usingClientEntryPoint:!1,Events:[bi,vi,wi,Ce,Ee,cc]},tu={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:v.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ge(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(nu),ot=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qc(e))throw Error(o(299));var n=!1,r="",i=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=_c(e,1,!1,null,0,n,0,r,i),e[mi]=t.current,Hr(8===e.nodeType?e.parentNode:e),new Jc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ge(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Zc(t))throw Error(o(200));return $c(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",s=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Hc(t,null,e,1,null!=n?n:null,i,0,a,s),e[mi]=t.current,Hr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Yc(t)},t.render=function(e,t,n){if(!Zc(t))throw Error(o(200));return $c(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Zc(e))throw Error(o(40));return!!e._reactRootContainer&&(uc((function(){$c(null,null,e,!1,(function(){e._reactRootContainer=null,e[mi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zc(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return $c(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},5484:(e,t,n)=>{"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function i(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function o(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function a(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,a=null,s=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?s="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==a||null!==s){var l=e.displayName||e.name,c="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==a?"\n  "+a:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=i),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,r)}}return e}n.r(t),n.d(t,{polyfill:()=>a}),r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0},5765:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(5043),a=m(o),s=m(n(7950)),l=m(n(5173)),c=m(n(1439)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(6619)),d=n(8821),p=m(d),f=n(5484);function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var g=t.portalClassName="ReactModalPortal",x=t.bodyOpenClassName="ReactModal__Body--open",y=d.canUseDOM&&void 0!==s.default.createPortal,b=function(e){return document.createElement(e)},v=function(){return y?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer};function w(e){return e()}var k=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=Array(o),u=0;u<o;u++)l[u]=arguments[u];return n=i=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.removePortal=function(){!y&&s.default.unmountComponentAtNode(i.node);var e=w(i.props.parentSelector);e&&e.contains(i.node)?e.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(e){i.portal=e},i.renderPortal=function(e){var n=v()(i,a.default.createElement(c.default,r({defaultStyles:t.defaultStyles},e)),i.node);i.portalRef(n)},h(i,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(y||(this.node=b("div")),this.node.className=this.props.portalClassName,w(this.props.parentSelector).appendChild(this.node),!y&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:w(e.parentSelector),nextParent:w(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var r=this.props,i=r.isOpen,o=r.portalClassName;e.portalClassName!==o&&(this.node.className=o);var a=n.prevParent,s=n.nextParent;s!==a&&(a.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||i)&&!y&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&y?(!this.node&&y&&(this.node=b("div")),v()(a.default.createElement(c.default,r({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){u.setElement(e)}}]),t}(o.Component);k.propTypes={isOpen:l.default.bool.isRequired,style:l.default.shape({content:l.default.object,overlay:l.default.object}),portalClassName:l.default.string,bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,className:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),overlayClassName:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),appElement:l.default.oneOfType([l.default.instanceOf(p.default),l.default.instanceOf(d.SafeHTMLCollection),l.default.instanceOf(d.SafeNodeList),l.default.arrayOf(l.default.instanceOf(p.default))]),onAfterOpen:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,ariaHideApp:l.default.bool,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,parentSelector:l.default.func,aria:l.default.object,data:l.default.object,role:l.default.string,contentLabel:l.default.string,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func},k.defaultProps={isOpen:!1,portalClassName:g,bodyOpenClassName:x,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return a.default.createElement("div",e,t)},contentElement:function(e,t){return a.default.createElement("div",e,t)}},k.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,f.polyfill)(k),t.default=k},1439:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(5043),s=g(n(5173)),l=h(n(1774)),c=g(n(2206)),u=h(n(6619)),d=h(n(4841)),p=n(8821),f=g(p),m=g(n(2959));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function g(e){return e&&e.__esModule?e:{default:e}}n(6062);var x={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},y=0,b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,r=e.ariaHideApp,i=e.htmlOpenClassName,o=e.bodyOpenClassName,a=e.parentSelector,s=a&&a().ownerDocument||document;o&&d.remove(s.body,o),i&&d.remove(s.getElementsByTagName("html")[0],i),r&&y>0&&0===(y-=1)&&u.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(l.returnFocus(n.props.preventScroll),l.teardownScopedFocus()):l.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),m.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(l.setupScopedFocus(n.node),l.markForFocusLater()),n.setState({isOpen:!0},(function(){n.openAnimationFrame=requestAnimationFrame((function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})}))})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){(function(e){return"Tab"===e.code||9===e.keyCode})(e)&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var r="object"===("undefined"===typeof t?"undefined":i(t))?t:{base:x[e],afterOpen:x[e]+"--after-open",beforeClose:x[e]+"--before-close"},o=r.base;return n.state.afterOpen&&(o=o+" "+r.afterOpen),n.state.beforeClose&&(o=o+" "+r.beforeClose),"string"===typeof t&&t?o+" "+t:o},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,r){return n[e+"-"+r]=t[r],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,i=e.bodyOpenClassName,o=e.parentSelector,a=o&&o().ownerDocument||document;i&&d.add(a.body,i),r&&d.add(a.getElementsByTagName("html")[0],r),n&&(y+=1,u.hide(t)),m.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,i=e.overlayClassName,o=e.defaultStyles,a=e.children,s=n?{}:o.content,l=i?{}:o.overlay;if(this.shouldBeClosed())return null;var c={ref:this.setOverlayRef,className:this.buildClassName("overlay",i),style:r({},l,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},u=r({id:t,ref:this.setContentRef,style:r({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(u,a);return this.props.overlayElement(c,d)}}]),t}(a.Component);b.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},b.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(f.default),s.default.instanceOf(p.SafeHTMLCollection),s.default.instanceOf(p.SafeNodeList),s.default.arrayOf(s.default.instanceOf(f.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=b,e.exports=t.default},6619:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){s&&(s.removeAttribute?s.removeAttribute("aria-hidden"):null!=s.length?s.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(s).forEach((function(e){return e.removeAttribute("aria-hidden")})));s=null},t.log=function(){0},t.assertNodeList=l,t.setElement=function(e){var t=e;if("string"===typeof t&&a.canUseDOM){var n=document.querySelectorAll(t);l(n,t),t=n}return s=t||s},t.validateElement=c,t.hide=function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=c(e)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){i.value.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}},t.show=function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=c(e)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){i.value.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}},t.documentNotReadyOrSSRTesting=function(){s=null};var r,i=n(6440),o=(r=i)&&r.__esModule?r:{default:r},a=n(8821);var s=null;function l(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function c(e){var t=e||s;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,o.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},6062:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){for(var e=[a,s],t=0;t<e.length;t++){var n=e[t];n&&(n.parentNode&&n.parentNode.removeChild(n))}a=s=null,l=[]},t.log=function(){console.log("bodyTrap ----------"),console.log(l.length);for(var e=[a,s],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")};var r,i=n(2959),o=(r=i)&&r.__esModule?r:{default:r};var a=void 0,s=void 0,l=[];function c(){0!==l.length&&l[l.length-1].focusContent()}o.default.subscribe((function(e,t){a||s||((a=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),a.style.position="absolute",a.style.opacity="0",a.setAttribute("tabindex","0"),a.addEventListener("focus",c),(s=a.cloneNode()).addEventListener("focus",c)),(l=t).length>0?(document.body.firstChild!==a&&document.body.insertBefore(a,document.body.firstChild),document.body.lastChild!==s&&document.body.appendChild(s)):(a.parentElement&&a.parentElement.removeChild(a),s.parentElement&&s.parentElement.removeChild(s))}))},4841:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var t in n)i(e,n[t]);var o=document.body;for(var a in r)i(o,r[a]);n={},r={}},t.log=function(){0};var n={},r={};function i(e,t){e.classList.remove(t)}t.add=function(e,t){return i=e.classList,o="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(o,e),i.add(e)}));var i,o},t.remove=function(e,t){return i=e.classList,o="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(o,e),0===o[e]&&i.remove(e)}));var i,o}},1774:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){a=[]},t.log=function(){0},t.handleBlur=c,t.handleFocus=u,t.markForFocusLater=function(){a.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==a.length&&(t=a.pop()).focus({preventScroll:e}))}catch(n){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){a.length>0&&a.pop()},t.setupScopedFocus=function(e){s=e,window.addEventListener?(window.addEventListener("blur",c,!1),document.addEventListener("focus",u,!0)):(window.attachEvent("onBlur",c),document.attachEvent("onFocus",u))},t.teardownScopedFocus=function(){s=null,window.addEventListener?(window.removeEventListener("blur",c),document.removeEventListener("focus",u)):(window.detachEvent("onBlur",c),document.detachEvent("onFocus",u))};var r,i=n(4682),o=(r=i)&&r.__esModule?r:{default:r};var a=[],s=null,l=!1;function c(){l=!0}function u(){if(l){if(l=!1,!s)return;setTimeout((function(){s.contains(document.activeElement)||((0,o.default)(s)[0]||s).focus()}),0)}}},2959:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(){console.log("portalOpenInstances ----------"),console.log(r.openInstances.length),r.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},t.resetState=function(){r=new n};var n=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},r=new n;t.default=r},8821:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var r,i=n(7396);var o=((r=i)&&r.__esModule?r:{default:r}).default,a=o.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=o.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=o.canUseDOM?window.NodeList:{},t.canUseDOM=o.canUseDOM;t.default=a},2206:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,o.default)(e);if(!n.length)return void t.preventDefault();var r=void 0,i=t.shiftKey,s=n[0],l=n[n.length-1],c=a();if(e===c){if(!i)return;r=l}l!==c||i||(r=s);s===c&&i&&(r=l);if(r)return t.preventDefault(),void r.focus();var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==u||"Chrome"==u[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var d=n.indexOf(c);d>-1&&(d+=i?-1:1);if("undefined"===typeof(r=n[d]))return t.preventDefault(),void(r=i?l:s).focus();t.preventDefault(),r.focus()};var r,i=n(4682),o=(r=i)&&r.__esModule?r:{default:r};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?a(e.activeElement.shadowRoot):e.activeElement}e.exports=t.default},4682:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=[].slice.call(t.querySelectorAll("*"),0).reduce((function(t,n){return t.concat(n.shadowRoot?e(n.shadowRoot):[n])}),[]);return n.filter(s)};var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function o(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var i=window.getComputedStyle(e),o=i.getPropertyValue("display");return t?o!==r&&function(e,t){return"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0}(e,i):o===n}catch(a){return console.warn("Failed to inspect element style"),!1}}function a(e,t){var n=e.nodeName.toLowerCase();return(i.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),o(t))return!1;t=t.parentNode}return!0}(e)}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}e.exports=t.default},2963:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(5765),o=(r=i)&&r.__esModule?r:{default:r};t.default=o.default,e.exports=t.default},2501:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(5043)),i=s(n(5173)),o=s(n(381)),a=s(n(7324));function s(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var c=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).isVisible=function(e,t,r){var i=e.top,o=e.left,a=e.bottom,s=e.right,l=e.width,c=e.height,u=n.props,d=u.offset,p=u.partialVisibility;if(i+s+a+o===0)return!1;var f=0-d,m=0-d,h=t+d,g=r+d;return p?i+c>=f&&o+l>=m&&a-c<=g&&s-l<=h:i>=f&&o>=m&&a<=g&&s<=h},n.isComponentVisible=function(){setTimeout((function(){if(n.nodeRef&&n.nodeRef.getBoundingClientRect){var e=document.documentElement,t=n.props.once,r=n.nodeRef.getBoundingClientRect(),i=window.innerWidth||e.clientWidth,o=window.innerHeight||e.clientHeight,a=n.isVisible(r,i,o);a&&t&&n.removeListener(),n.setState({isVisible:a})}}),0)},n.setNodeRef=function(e){return n.nodeRef=e},n.ownProps=Object.keys(i.propTypes),n.state={isVisible:!1},n.throttleCb=(0,o.default)(n.isComponentVisible,n.props.throttleInterval),t.nodeRef&&n.setNodeRef(t.nodeRef),n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=i.prototype;return s.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},s.componentDidUpdate=function(e){(0,a.default)(this.getChildProps(this.props),this.getChildProps(e))||this.isComponentVisible()},s.componentWillUnmount=function(){this.removeListener()},s.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},s.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},s.getChildProps=function(e){var t=this;void 0===e&&(e=this.props);var n={};return Object.keys(e).forEach((function(r){-1===t.ownProps.indexOf(r)&&(n[r]=e[r])})),n},s.getChildren=function(){var e=this;return"function"===typeof this.props.children?this.props.children(l({},this.getChildProps(),{isVisible:this.state.isVisible})):r.default.Children.map(this.props.children,(function(t){return r.default.cloneElement(t,l({},e.getChildProps(),{isVisible:e.state.isVisible}))}))},s.render=function(){var e=this.props,t=e.className,n=e.style,i=e.nodeRef,o=e.tag,a=l({},t&&{className:t},n&&{style:n});return r.default.createElement(o,l({ref:!i&&this.setNodeRef},a),this.getChildren())},i}(r.PureComponent);t.default=c,c.propTypes={once:i.default.bool,throttleInterval:function(e,t,n){var r=e[t];return!Number.isInteger(r)||r<0?new Error("The "+t+" prop you provided to "+n+" is not a valid integer >= 0."):null},children:i.default.oneOfType([i.default.func,i.default.element,i.default.arrayOf(i.default.element)]),style:i.default.object,className:i.default.string,offset:i.default.number,partialVisibility:i.default.bool,nodeRef:i.default.object,tag:i.default.string},c.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},6930:(e,t,n)=>{"use strict";var r;t.A=void 0;var i=((r=n(2501))&&r.__esModule?r:{default:r}).default;t.A=i},6214:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.PrevArrow=t.NextArrow=void 0;var i=s(n(5043)),o=s(n(8139)),a=n(1200);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function m(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function y(e){var t=b();return function(){var n,i=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}t.PrevArrow=function(e){g(n,e);var t=y(n);function n(){return p(this,n),t.apply(this,arguments)}return m(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var n={key:"0","data-role":"none",className:(0,o.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?i.default.cloneElement(this.props.prevArrow,u(u({},n),r)):i.default.createElement("button",l({key:"0",type:"button"},n)," ","Previous")}}]),n}(i.default.PureComponent),t.NextArrow=function(e){g(n,e);var t=y(n);function n(){return p(this,n),t.apply(this,arguments)}return m(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});(0,a.canGoNext)(this.props)||(e["slick-disabled"]=!0,t=null);var n={key:"1","data-role":"none",className:(0,o.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?i.default.cloneElement(this.props.nextArrow,u(u({},n),r)):i.default.createElement("button",l({key:"1",type:"button"},n)," ","Next")}}]),n}(i.default.PureComponent)},5112:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n(5043))&&r.__esModule?r:{default:r};var o={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return i.default.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return i.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};t.default=o},8496:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Dots=void 0;var i=s(n(5043)),o=s(n(8139)),a=n(1200);function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return(t=d(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function d(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){var t=m();return function(){var n,i=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}t.Dots=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(d,e);var t,n,r,s=f(d);function d(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),s.apply(this,arguments)}return t=d,n=[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.props.clickHandler(e)}},{key:"render",value:function(){for(var e,t=this.props,n=t.onMouseEnter,r=t.onMouseOver,s=t.onMouseLeave,u=t.infinite,d=t.slidesToScroll,p=t.slidesToShow,f=t.slideCount,m=t.currentSlide,h=(e={slideCount:f,slidesToScroll:d,slidesToShow:p,infinite:u}).infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,g={onMouseEnter:n,onMouseOver:r,onMouseLeave:s},x=[],y=0;y<h;y++){var b=(y+1)*d-1,v=u?b:(0,a.clamp)(b,0,f-1),w=v-(d-1),k=u?w:(0,a.clamp)(w,0,f-1),S=(0,o.default)({"slick-active":u?m>=k&&m<=v:m===k}),A={message:"dots",index:y,slidesToScroll:d,currentSlide:m},j=this.clickHandler.bind(this,A);x=x.concat(i.default.createElement("li",{key:y,className:S},i.default.cloneElement(this.props.customPaging(y),{onClick:j})))}return i.default.cloneElement(this.props.appendDots(x),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:this.props.dotsClass},g))}}],n&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),d}(i.default.PureComponent)},2382:(e,t,n)=>{"use strict";t.A=void 0;var r,i=(r=n(433))&&r.__esModule?r:{default:r};t.A=i.default},4910:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0}},9826:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InnerSlider=void 0;var r=p(n(5043)),i=p(n(4910)),o=p(n(446)),a=p(n(8139)),s=n(1200),l=n(737),c=n(8496),u=n(6214),d=p(n(5820));function p(e){return e&&e.__esModule?e:{default:e}}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,j(r.key),r)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function v(e){var t=k();return function(){var n,r=S(e);if(t){var i=S(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(this,n)}}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(k=function(){return!!e})()}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function A(e,t,n){return(t=j(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==f(t)?t:String(t)}t.InnerSlider=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(k,e);var t,n,p,g=v(k);function k(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,k),A(w(t=g.call(this,e)),"listRefHandler",(function(e){return t.list=e})),A(w(t),"trackRefHandler",(function(e){return t.track=e})),A(w(t),"adaptHeight",(function(){if(t.props.adaptiveHeight&&t.list){var e=t.list.querySelector('[data-index="'.concat(t.state.currentSlide,'"]'));t.list.style.height=(0,s.getHeight)(e)+"px"}})),A(w(t),"componentDidMount",(function(){if(t.props.onInit&&t.props.onInit(),t.props.lazyLoad){var e=(0,s.getOnDemandLazySlides)(x(x({},t.props),t.state));e.length>0&&(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e))}var n=x({listRef:t.list,trackRef:t.track},t.props);t.updateState(n,!0,(function(){t.adaptHeight(),t.props.autoplay&&t.autoPlay("update")})),"progressive"===t.props.lazyLoad&&(t.lazyLoadTimer=setInterval(t.progressiveLazyLoad,1e3)),t.ro=new d.default((function(){t.state.animating?(t.onWindowResized(!1),t.callbackTimers.push(setTimeout((function(){return t.onWindowResized()}),t.props.speed))):t.onWindowResized()})),t.ro.observe(t.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),(function(e){e.onfocus=t.props.pauseOnFocus?t.onSlideFocus:null,e.onblur=t.props.pauseOnFocus?t.onSlideBlur:null})),window.addEventListener?window.addEventListener("resize",t.onWindowResized):window.attachEvent("onresize",t.onWindowResized)})),A(w(t),"componentWillUnmount",(function(){t.animationEndCallback&&clearTimeout(t.animationEndCallback),t.lazyLoadTimer&&clearInterval(t.lazyLoadTimer),t.callbackTimers.length&&(t.callbackTimers.forEach((function(e){return clearTimeout(e)})),t.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",t.onWindowResized):window.detachEvent("onresize",t.onWindowResized),t.autoplayTimer&&clearInterval(t.autoplayTimer),t.ro.disconnect()})),A(w(t),"componentDidUpdate",(function(e){if(t.checkImagesLoad(),t.props.onReInit&&t.props.onReInit(),t.props.lazyLoad){var n=(0,s.getOnDemandLazySlides)(x(x({},t.props),t.state));n.length>0&&(t.setState((function(e){return{lazyLoadedList:e.lazyLoadedList.concat(n)}})),t.props.onLazyLoad&&t.props.onLazyLoad(n))}t.adaptHeight();var i=x(x({listRef:t.list,trackRef:t.track},t.props),t.state),o=t.didPropsChange(e);o&&t.updateState(i,o,(function(){t.state.currentSlide>=r.default.Children.count(t.props.children)&&t.changeSlide({message:"index",index:r.default.Children.count(t.props.children)-t.props.slidesToShow,currentSlide:t.state.currentSlide}),t.props.autoplay?t.autoPlay("update"):t.pause("paused")}))})),A(w(t),"onWindowResized",(function(e){t.debouncedResize&&t.debouncedResize.cancel(),t.debouncedResize=(0,o.default)((function(){return t.resizeWindow(e)}),50),t.debouncedResize()})),A(w(t),"resizeWindow",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(Boolean(t.track&&t.track.node)){var n=x(x({listRef:t.list,trackRef:t.track},t.props),t.state);t.updateState(n,e,(function(){t.props.autoplay?t.autoPlay("update"):t.pause("paused")})),t.setState({animating:!1}),clearTimeout(t.animationEndCallback),delete t.animationEndCallback}})),A(w(t),"updateState",(function(e,n,i){var o=(0,s.initializedState)(e);e=x(x(x({},e),o),{},{slideIndex:o.currentSlide});var a=(0,s.getTrackLeft)(e);e=x(x({},e),{},{left:a});var l=(0,s.getTrackCSS)(e);(n||r.default.Children.count(t.props.children)!==r.default.Children.count(e.children))&&(o.trackStyle=l),t.setState(o,i)})),A(w(t),"ssrInit",(function(){if(t.props.variableWidth){var e=0,n=0,i=[],o=(0,s.getPreClones)(x(x(x({},t.props),t.state),{},{slideCount:t.props.children.length})),a=(0,s.getPostClones)(x(x(x({},t.props),t.state),{},{slideCount:t.props.children.length}));t.props.children.forEach((function(t){i.push(t.props.style.width),e+=t.props.style.width}));for(var l=0;l<o;l++)n+=i[i.length-1-l],e+=i[i.length-1-l];for(var c=0;c<a;c++)e+=i[c];for(var u=0;u<t.state.currentSlide;u++)n+=i[u];var d={width:e+"px",left:-n+"px"};if(t.props.centerMode){var p="".concat(i[t.state.currentSlide],"px");d.left="calc(".concat(d.left," + (100% - ").concat(p,") / 2 ) ")}return{trackStyle:d}}var f=r.default.Children.count(t.props.children),m=x(x(x({},t.props),t.state),{},{slideCount:f}),h=(0,s.getPreClones)(m)+(0,s.getPostClones)(m)+f,g=100/t.props.slidesToShow*h,y=100/h,b=-y*((0,s.getPreClones)(m)+t.state.currentSlide)*g/100;return t.props.centerMode&&(b+=(100-y*g/100)/2),{slideWidth:y+"%",trackStyle:{width:g+"%",left:b+"%"}}})),A(w(t),"checkImagesLoad",(function(){var e=t.list&&t.list.querySelectorAll&&t.list.querySelectorAll(".slick-slide img")||[],n=e.length,r=0;Array.prototype.forEach.call(e,(function(e){var i=function(){return++r&&r>=n&&t.onWindowResized()};if(e.onclick){var o=e.onclick;e.onclick=function(t){o(t),e.parentNode.focus()}}else e.onclick=function(){return e.parentNode.focus()};e.onload||(t.props.lazyLoad?e.onload=function(){t.adaptHeight(),t.callbackTimers.push(setTimeout(t.onWindowResized,t.props.speed))}:(e.onload=i,e.onerror=function(){i(),t.props.onLazyLoadError&&t.props.onLazyLoadError()}))}))})),A(w(t),"progressiveLazyLoad",(function(){for(var e=[],n=x(x({},t.props),t.state),r=t.state.currentSlide;r<t.state.slideCount+(0,s.getPostClones)(n);r++)if(t.state.lazyLoadedList.indexOf(r)<0){e.push(r);break}for(var i=t.state.currentSlide-1;i>=-(0,s.getPreClones)(n);i--)if(t.state.lazyLoadedList.indexOf(i)<0){e.push(i);break}e.length>0?(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e)):t.lazyLoadTimer&&(clearInterval(t.lazyLoadTimer),delete t.lazyLoadTimer)})),A(w(t),"slideHandler",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.props,i=r.asNavFor,o=r.beforeChange,a=r.onLazyLoad,l=r.speed,c=r.afterChange,u=t.state.currentSlide,d=(0,s.slideHandler)(x(x(x({index:e},t.props),t.state),{},{trackRef:t.track,useCSS:t.props.useCSS&&!n})),p=d.state,f=d.nextState;if(p){o&&o(u,p.currentSlide);var m=p.lazyLoadedList.filter((function(e){return t.state.lazyLoadedList.indexOf(e)<0}));a&&m.length>0&&a(m),!t.props.waitForAnimate&&t.animationEndCallback&&(clearTimeout(t.animationEndCallback),c&&c(u),delete t.animationEndCallback),t.setState(p,(function(){i&&t.asNavForIndex!==e&&(t.asNavForIndex=e,i.innerSlider.slideHandler(e)),f&&(t.animationEndCallback=setTimeout((function(){var e=f.animating,n=h(f,["animating"]);t.setState(n,(function(){t.callbackTimers.push(setTimeout((function(){return t.setState({animating:e})}),10)),c&&c(p.currentSlide),delete t.animationEndCallback}))}),l))}))}})),A(w(t),"changeSlide",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=x(x({},t.props),t.state),i=(0,s.changeSlide)(r,e);if((0===i||i)&&(!0===n?t.slideHandler(i,n):t.slideHandler(i),t.props.autoplay&&t.autoPlay("update"),t.props.focusOnSelect)){var o=t.list.querySelectorAll(".slick-current");o[0]&&o[0].focus()}})),A(w(t),"clickHandler",(function(e){!1===t.clickable&&(e.stopPropagation(),e.preventDefault()),t.clickable=!0})),A(w(t),"keyHandler",(function(e){var n=(0,s.keyHandler)(e,t.props.accessibility,t.props.rtl);""!==n&&t.changeSlide({message:n})})),A(w(t),"selectHandler",(function(e){t.changeSlide(e)})),A(w(t),"disableBodyScroll",(function(){window.ontouchmove=function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}})),A(w(t),"enableBodyScroll",(function(){window.ontouchmove=null})),A(w(t),"swipeStart",(function(e){t.props.verticalSwiping&&t.disableBodyScroll();var n=(0,s.swipeStart)(e,t.props.swipe,t.props.draggable);""!==n&&t.setState(n)})),A(w(t),"swipeMove",(function(e){var n=(0,s.swipeMove)(e,x(x(x({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));n&&(n.swiping&&(t.clickable=!1),t.setState(n))})),A(w(t),"swipeEnd",(function(e){var n=(0,s.swipeEnd)(e,x(x(x({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));if(n){var r=n.triggerSlideHandler;delete n.triggerSlideHandler,t.setState(n),void 0!==r&&(t.slideHandler(r),t.props.verticalSwiping&&t.enableBodyScroll())}})),A(w(t),"touchEnd",(function(e){t.swipeEnd(e),t.clickable=!0})),A(w(t),"slickPrev",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"previous"})}),0))})),A(w(t),"slickNext",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"next"})}),0))})),A(w(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=Number(e),isNaN(e))return"";t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"index",index:e,currentSlide:t.state.currentSlide},n)}),0))})),A(w(t),"play",(function(){var e;if(t.props.rtl)e=t.state.currentSlide-t.props.slidesToScroll;else{if(!(0,s.canGoNext)(x(x({},t.props),t.state)))return!1;e=t.state.currentSlide+t.props.slidesToScroll}t.slideHandler(e)})),A(w(t),"autoPlay",(function(e){t.autoplayTimer&&clearInterval(t.autoplayTimer);var n=t.state.autoplaying;if("update"===e){if("hovered"===n||"focused"===n||"paused"===n)return}else if("leave"===e){if("paused"===n||"focused"===n)return}else if("blur"===e&&("paused"===n||"hovered"===n))return;t.autoplayTimer=setInterval(t.play,t.props.autoplaySpeed+50),t.setState({autoplaying:"playing"})})),A(w(t),"pause",(function(e){t.autoplayTimer&&(clearInterval(t.autoplayTimer),t.autoplayTimer=null);var n=t.state.autoplaying;"paused"===e?t.setState({autoplaying:"paused"}):"focused"===e?"hovered"!==n&&"playing"!==n||t.setState({autoplaying:"focused"}):"playing"===n&&t.setState({autoplaying:"hovered"})})),A(w(t),"onDotsOver",(function(){return t.props.autoplay&&t.pause("hovered")})),A(w(t),"onDotsLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),A(w(t),"onTrackOver",(function(){return t.props.autoplay&&t.pause("hovered")})),A(w(t),"onTrackLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),A(w(t),"onSlideFocus",(function(){return t.props.autoplay&&t.pause("focused")})),A(w(t),"onSlideBlur",(function(){return t.props.autoplay&&"focused"===t.state.autoplaying&&t.autoPlay("blur")})),A(w(t),"render",(function(){var e,n,i,o=(0,a.default)("slick-slider",t.props.className,{"slick-vertical":t.props.vertical,"slick-initialized":!0}),d=x(x({},t.props),t.state),p=(0,s.extractObject)(d,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),f=t.props.pauseOnHover;if(p=x(x({},p),{},{onMouseEnter:f?t.onTrackOver:null,onMouseLeave:f?t.onTrackLeave:null,onMouseOver:f?t.onTrackOver:null,focusOnSelect:t.props.focusOnSelect&&t.clickable?t.selectHandler:null}),!0===t.props.dots&&t.state.slideCount>=t.props.slidesToShow){var h=(0,s.extractObject)(d,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=t.props.pauseOnDotsHover;h=x(x({},h),{},{clickHandler:t.changeSlide,onMouseEnter:g?t.onDotsLeave:null,onMouseOver:g?t.onDotsOver:null,onMouseLeave:g?t.onDotsLeave:null}),e=r.default.createElement(c.Dots,h)}var y=(0,s.extractObject)(d,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=t.changeSlide,t.props.arrows&&(n=r.default.createElement(u.PrevArrow,y),i=r.default.createElement(u.NextArrow,y));var b=null;t.props.vertical&&(b={height:t.state.listHeight});var v=null;!1===t.props.vertical?!0===t.props.centerMode&&(v={padding:"0px "+t.props.centerPadding}):!0===t.props.centerMode&&(v={padding:t.props.centerPadding+" 0px"});var w=x(x({},b),v),k=t.props.touchMove,S={className:"slick-list",style:w,onClick:t.clickHandler,onMouseDown:k?t.swipeStart:null,onMouseMove:t.state.dragging&&k?t.swipeMove:null,onMouseUp:k?t.swipeEnd:null,onMouseLeave:t.state.dragging&&k?t.swipeEnd:null,onTouchStart:k?t.swipeStart:null,onTouchMove:t.state.dragging&&k?t.swipeMove:null,onTouchEnd:k?t.touchEnd:null,onTouchCancel:t.state.dragging&&k?t.swipeEnd:null,onKeyDown:t.props.accessibility?t.keyHandler:null},A={className:o,dir:"ltr",style:t.props.style};return t.props.unslick&&(S={className:"slick-list"},A={className:o}),r.default.createElement("div",A,t.props.unslick?"":n,r.default.createElement("div",m({ref:t.listRefHandler},S),r.default.createElement(l.Track,m({ref:t.trackRefHandler},p),t.props.children)),t.props.unslick?"":i,t.props.unslick?"":e)})),t.list=null,t.track=null,t.state=x(x({},i.default),{},{currentSlide:t.props.initialSlide,targetSlide:t.props.initialSlide?t.props.initialSlide:0,slideCount:r.default.Children.count(t.props.children)}),t.callbackTimers=[],t.clickable=!0,t.debouncedResize=null;var n=t.ssrInit();return t.state=x(x({},t.state),n),t}return t=k,(n=[{key:"didPropsChange",value:function(e){for(var t=!1,n=0,i=Object.keys(this.props);n<i.length;n++){var o=i[n];if(!e.hasOwnProperty(o)){t=!0;break}if("object"!==f(e[o])&&"function"!==typeof e[o]&&!isNaN(e[o])&&e[o]!==this.props[o]){t=!0;break}}return t||r.default.Children.count(this.props.children)!==r.default.Children.count(e.children)}}])&&y(t.prototype,n),p&&y(t,p),Object.defineProperty(t,"prototype",{writable:!1}),k}(r.default.Component)},433:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(5043)),i=n(9826),o=l(n(1270)),a=l(n(5112)),s=n(1200);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function h(e){var t=x();return function(){var n,r=y(e);if(t){var i=y(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}(this,n)}}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==c(t)?t:String(t)}var w=(0,s.canUseDOM)()&&n(535);t.default=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(d,e);var t,n,l,c=h(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),b(g(t=c.call(this,e)),"innerSliderRefHandler",(function(e){return t.innerSlider=e})),b(g(t),"slickPrev",(function(){return t.innerSlider.slickPrev()})),b(g(t),"slickNext",(function(){return t.innerSlider.slickNext()})),b(g(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.innerSlider.slickGoTo(e,n)})),b(g(t),"slickPause",(function(){return t.innerSlider.pause("paused")})),b(g(t),"slickPlay",(function(){return t.innerSlider.autoPlay("play")})),t.state={breakpoint:null},t._responsiveMediaHandlers=[],t}return t=d,(n=[{key:"media",value:function(e,t){w.register(e,t),this._responsiveMediaHandlers.push({query:e,handler:t})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map((function(e){return e.breakpoint}));t.sort((function(e,t){return e-t})),t.forEach((function(n,r){var i;i=0===r?(0,o.default)({minWidth:0,maxWidth:n}):(0,o.default)({minWidth:t[r-1]+1,maxWidth:n}),(0,s.canUseDOM)()&&e.media(i,(function(){e.setState({breakpoint:n})}))}));var n=(0,o.default)({minWidth:t.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(n,(function(){e.setState({breakpoint:null})}))}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach((function(e){w.unregister(e.query,e.handler)}))}},{key:"render",value:function(){var e,t,n=this;(e=this.state.breakpoint?"unslick"===(t=this.props.responsive.filter((function(e){return e.breakpoint===n.state.breakpoint})))[0].settings?"unslick":p(p(p({},a.default),this.props),t[0].settings):p(p({},a.default),this.props)).centerMode&&(e.slidesToScroll,e.slidesToScroll=1),e.fade&&(e.slidesToShow,e.slidesToScroll,e.slidesToShow=1,e.slidesToScroll=1);var o=r.default.Children.toArray(this.props.children);o=o.filter((function(e){return"string"===typeof e?!!e.trim():!!e})),e.variableWidth&&(e.rows>1||e.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),e.variableWidth=!1);for(var l=[],c=null,d=0;d<o.length;d+=e.rows*e.slidesPerRow){for(var f=[],m=d;m<d+e.rows*e.slidesPerRow;m+=e.slidesPerRow){for(var h=[],g=m;g<m+e.slidesPerRow&&(e.variableWidth&&o[g].props.style&&(c=o[g].props.style.width),!(g>=o.length));g+=1)h.push(r.default.cloneElement(o[g],{key:100*d+10*m+g,tabIndex:-1,style:{width:"".concat(100/e.slidesPerRow,"%"),display:"inline-block"}}));f.push(r.default.createElement("div",{key:10*d+m},h))}e.variableWidth?l.push(r.default.createElement("div",{key:d,style:{width:c}},f)):l.push(r.default.createElement("div",{key:d},f))}if("unslick"===e){var x="regular slider "+(this.props.className||"");return r.default.createElement("div",{className:x},o)}return l.length<=e.slidesToShow&&!e.infinite&&(e.unslick=!0),r.default.createElement(i.InnerSlider,u({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(e)),l)}}])&&f(t.prototype,n),l&&f(t,l),Object.defineProperty(t,"prototype",{writable:!1}),d}(r.default.Component)},737:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Track=void 0;var r=a(n(5043)),i=a(n(8139)),o=n(1200);function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function d(e){var t=f();return function(){var n,r=m(e);if(t){var i=m(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,n)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==s(t)?t:String(t)}var b=function(e){var t,n,r,i,o;return r=(o=e.rtl?e.slideCount-1-e.index:e.index)<0||o>=e.slideCount,e.centerMode?(i=Math.floor(e.slidesToShow/2),n=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-i-1&&o<=e.currentSlide+i&&(t=!0)):t=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow,{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":r,"slick-current":o===(e.targetSlide<0?e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?e.targetSlide-e.slideCount:e.targetSlide)}},v=function(e,t){return e.key||t},w=function(e){var t,n=[],a=[],s=[],l=r.default.Children.count(e.children),c=(0,o.lazyStartIndex)(e),u=(0,o.lazyEndIndex)(e);return r.default.Children.forEach(e.children,(function(d,p){var f,m={message:"children",index:p,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};f=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(p)>=0?d:r.default.createElement("div",null);var h=function(e){var t={};return void 0!==e.variableWidth&&!1!==e.variableWidth||(t.width=e.slideWidth),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=e.currentSlide===e.index?1:0,t.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t}(g(g({},e),{},{index:p})),x=f.props.className||"",y=b(g(g({},e),{},{index:p}));if(n.push(r.default.cloneElement(f,{key:"original"+v(f,p),"data-index":p,className:(0,i.default)(y,x),tabIndex:"-1","aria-hidden":!y["slick-active"],style:g(g({outline:"none"},f.props.style||{}),h),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(m)}})),e.infinite&&!1===e.fade){var w=l-p;w<=(0,o.getPreClones)(e)&&((t=-w)>=c&&(f=d),y=b(g(g({},e),{},{index:t})),a.push(r.default.cloneElement(f,{key:"precloned"+v(f,t),"data-index":t,tabIndex:"-1",className:(0,i.default)(y,x),"aria-hidden":!y["slick-active"],style:g(g({},f.props.style||{}),h),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(m)}}))),(t=l+p)<u&&(f=d),y=b(g(g({},e),{},{index:t})),s.push(r.default.cloneElement(f,{key:"postcloned"+v(f,t),"data-index":t,tabIndex:"-1",className:(0,i.default)(y,x),"aria-hidden":!y["slick-active"],style:g(g({},f.props.style||{}),h),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(m)}}))}})),e.rtl?a.concat(n,s).reverse():a.concat(n,s)};t.Track=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(a,e);var t,n,i,o=d(a);function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(p(e=o.call.apply(o,[this].concat(n))),"node",null),x(p(e),"handleRef",(function(t){e.node=t})),e}return t=a,(n=[{key:"render",value:function(){var e=w(this.props),t=this.props,n={onMouseEnter:t.onMouseEnter,onMouseOver:t.onMouseOver,onMouseLeave:t.onMouseLeave};return r.default.createElement("div",l({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},n),e)}}])&&c(t.prototype,n),i&&c(t,i),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.default.PureComponent)},1200:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkSpecKeys=t.checkNavigable=t.changeSlide=t.canUseDOM=t.canGoNext=void 0,t.clamp=u,t.extractObject=void 0,t.filterSettings=function(e){return I.reduce((function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t}),{})},t.validSettings=t.swipeStart=t.swipeMove=t.swipeEnd=t.slidesOnRight=t.slidesOnLeft=t.slideHandler=t.siblingDirection=t.safePreventDefault=t.lazyStartIndex=t.lazySlidesOnRight=t.lazySlidesOnLeft=t.lazyEndIndex=t.keyHandler=t.initializedState=t.getWidth=t.getTrackLeft=t.getTrackCSS=t.getTrackAnimateCSS=t.getTotalSlides=t.getSwipeDirection=t.getSlideCount=t.getRequiredLazySlides=t.getPreClones=t.getPostClones=t.getOnDemandLazySlides=t.getNavigableIndexes=t.getHeight=void 0;var r=o(n(5043)),i=o(n(5112));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){return Math.max(t,Math.min(e,n))}var d=t.safePreventDefault=function(e){["onTouchStart","onTouchMove","onWheel"].includes(e._reactName)||e.preventDefault()},p=t.getOnDemandLazySlides=function(e){for(var t=[],n=f(e),r=m(e),i=n;i<r;i++)e.lazyLoadedList.indexOf(i)<0&&t.push(i);return t},f=(t.getRequiredLazySlides=function(e){for(var t=[],n=f(e),r=m(e),i=n;i<r;i++)t.push(i);return t},t.lazyStartIndex=function(e){return e.currentSlide-h(e)}),m=t.lazyEndIndex=function(e){return e.currentSlide+g(e)},h=t.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},g=t.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},x=t.getWidth=function(e){return e&&e.offsetWidth||0},y=t.getHeight=function(e){return e&&e.offsetHeight||0},b=t.getSwipeDirection=function(e){var t,n,r,i,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=e.startX-e.curX,n=e.startY-e.curY,r=Math.atan2(n,t),(i=Math.round(180*r/Math.PI))<0&&(i=360-Math.abs(i)),i<=45&&i>=0||i<=360&&i>=315?"left":i>=135&&i<=225?"right":!0===o?i>=35&&i<=135?"up":"down":"vertical"},v=t.canGoNext=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t},w=(t.extractObject=function(e,t){var n={};return t.forEach((function(t){return n[t]=e[t]})),n},t.initializedState=function(e){var t,n=r.default.Children.count(e.children),i=e.listRef,o=Math.ceil(x(i)),a=e.trackRef&&e.trackRef.node,s=Math.ceil(x(a));if(e.vertical)t=o;else{var c=e.centerMode&&2*parseInt(e.centerPadding);"string"===typeof e.centerPadding&&"%"===e.centerPadding.slice(-1)&&(c*=o/100),t=Math.ceil((o-c)/e.slidesToShow)}var u=i&&y(i.querySelector('[data-index="0"]')),d=u*e.slidesToShow,f=void 0===e.currentSlide?e.initialSlide:e.currentSlide;e.rtl&&void 0===e.currentSlide&&(f=n-1-e.initialSlide);var m=e.lazyLoadedList||[],h=p(l(l({},e),{},{currentSlide:f,lazyLoadedList:m})),g={slideCount:n,slideWidth:t,listWidth:o,trackWidth:s,currentSlide:f,slideHeight:u,listHeight:d,lazyLoadedList:m=m.concat(h)};return null===e.autoplaying&&e.autoplay&&(g.autoplaying="playing"),g},t.slideHandler=function(e){var t=e.waitForAnimate,n=e.animating,r=e.fade,i=e.infinite,o=e.index,a=e.slideCount,s=e.lazyLoad,c=e.currentSlide,d=e.centerMode,f=e.slidesToScroll,m=e.slidesToShow,h=e.useCSS,g=e.lazyLoadedList;if(t&&n)return{};var x,y,b,w=o,k={},S={},A=i?o:u(o,0,a-1);if(r){if(!i&&(o<0||o>=a))return{};o<0?w=o+a:o>=a&&(w=o-a),s&&g.indexOf(w)<0&&(g=g.concat(w)),k={animating:!0,currentSlide:w,lazyLoadedList:g,targetSlide:w},S={animating:!1,targetSlide:w}}else x=w,w<0?(x=w+a,i?a%f!==0&&(x=a-a%f):x=0):!v(e)&&w>c?w=x=c:d&&w>=a?(w=i?a:a-1,x=i?0:a-1):w>=a&&(x=w-a,i?a%f!==0&&(x=0):x=a-m),!i&&w+m>=a&&(x=a-m),y=E(l(l({},e),{},{slideIndex:w})),b=E(l(l({},e),{},{slideIndex:x})),i||(y===b&&(w=x),y=b),s&&(g=g.concat(p(l(l({},e),{},{currentSlide:w})))),h?(k={animating:!0,currentSlide:x,trackStyle:C(l(l({},e),{},{left:y})),lazyLoadedList:g,targetSlide:A},S={animating:!1,currentSlide:x,trackStyle:j(l(l({},e),{},{left:b})),swipeLeft:null,targetSlide:A}):k={currentSlide:x,trackStyle:j(l(l({},e),{},{left:b})),lazyLoadedList:g,targetSlide:A};return{state:k,nextState:S}},t.changeSlide=function(e,t){var n,r,i,o,a=e.slidesToScroll,s=e.slidesToShow,c=e.slideCount,u=e.currentSlide,d=e.targetSlide,p=e.lazyLoad,f=e.infinite;if(n=c%a!==0?0:(c-u)%a,"previous"===t.message)o=u-(i=0===n?a:s-n),p&&!f&&(o=-1===(r=u-i)?c-1:r),f||(o=d-a);else if("next"===t.message)o=u+(i=0===n?a:n),p&&!f&&(o=(u+a)%c+n),f||(o=d+a);else if("dots"===t.message)o=t.index*t.slidesToScroll;else if("children"===t.message){if(o=t.index,f){var m=T(l(l({},e),{},{targetSlide:o}));o>t.currentSlide&&"left"===m?o-=c:o<t.currentSlide&&"right"===m&&(o+=c)}}else"index"===t.message&&(o=Number(t.index));return o},t.keyHandler=function(e,t,n){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":37===e.keyCode?n?"next":"previous":39===e.keyCode?n?"previous":"next":""},t.swipeStart=function(e,t,n){return"IMG"===e.target.tagName&&d(e),!t||!n&&-1!==e.type.indexOf("mouse")?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}},t.swipeMove=function(e,t){var n=t.scrolling,r=t.animating,i=t.vertical,o=t.swipeToSlide,a=t.verticalSwiping,s=t.rtl,c=t.currentSlide,u=t.edgeFriction,p=t.edgeDragged,f=t.onEdge,m=t.swiped,h=t.swiping,g=t.slideCount,x=t.slidesToScroll,y=t.infinite,w=t.touchObject,k=t.swipeEvent,S=t.listHeight,A=t.listWidth;if(!n){if(r)return d(e);i&&o&&a&&d(e);var C,P={},R=E(t);w.curX=e.touches?e.touches[0].pageX:e.clientX,w.curY=e.touches?e.touches[0].pageY:e.clientY,w.swipeLength=Math.round(Math.sqrt(Math.pow(w.curX-w.startX,2)));var O=Math.round(Math.sqrt(Math.pow(w.curY-w.startY,2)));if(!a&&!h&&O>10)return{scrolling:!0};a&&(w.swipeLength=O);var T=(s?-1:1)*(w.curX>w.startX?1:-1);a&&(T=w.curY>w.startY?1:-1);var M=Math.ceil(g/x),z=b(t.touchObject,a),I=w.swipeLength;return y||(0===c&&("right"===z||"down"===z)||c+1>=M&&("left"===z||"up"===z)||!v(t)&&("left"===z||"up"===z))&&(I=w.swipeLength*u,!1===p&&f&&(f(z),P.edgeDragged=!0)),!m&&k&&(k(z),P.swiped=!0),C=i?R+I*(S/A)*T:s?R-I*T:R+I*T,a&&(C=R+I*T),P=l(l({},P),{},{touchObject:w,swipeLeft:C,trackStyle:j(l(l({},t),{},{left:C}))}),Math.abs(w.curX-w.startX)<.8*Math.abs(w.curY-w.startY)?P:(w.swipeLength>10&&(P.swiping=!0,d(e)),P)}},t.swipeEnd=function(e,t){var n=t.dragging,r=t.swipe,i=t.touchObject,o=t.listWidth,a=t.touchThreshold,s=t.verticalSwiping,c=t.listHeight,u=t.swipeToSlide,p=t.scrolling,f=t.onSwipe,m=t.targetSlide,h=t.currentSlide,g=t.infinite;if(!n)return r&&d(e),{};var x=s?c/a:o/a,y=b(i,s),v={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(p)return v;if(!i.swipeLength)return v;if(i.swipeLength>x){var w,A;d(e),f&&f(y);var j=g?h:m;switch(y){case"left":case"up":A=j+S(t),w=u?k(t,A):A,v.currentDirection=0;break;case"right":case"down":A=j-S(t),w=u?k(t,A):A,v.currentDirection=1;break;default:w=j}v.triggerSlideHandler=w}else{var P=E(t);v.trackStyle=C(l(l({},t),{},{left:P}))}return v},t.getNavigableIndexes=function(e){for(var t=e.infinite?2*e.slideCount:e.slideCount,n=e.infinite?-1*e.slidesToShow:0,r=e.infinite?-1*e.slidesToShow:0,i=[];n<t;)i.push(n),n=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return i}),k=t.checkNavigable=function(e,t){var n=w(e),r=0;if(t>n[n.length-1])t=n[n.length-1];else for(var i in n){if(t<n[i]){t=r;break}r=n[i]}return t},S=t.getSlideCount=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var n,r=e.listRef,i=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(i).every((function(r){if(e.vertical){if(r.offsetTop+y(r)/2>-1*e.swipeLeft)return n=r,!1}else if(r.offsetLeft-t+x(r)/2>-1*e.swipeLeft)return n=r,!1;return!0})),!n)return 0;var o=!0===e.rtl?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-o)||1}return e.slidesToScroll},A=t.checkSpecKeys=function(e,t){return t.reduce((function(t,n){return t&&e.hasOwnProperty(n)}),!0)?null:console.error("Keys Missing:",e)},j=t.getTrackCSS=function(e){var t,n;A(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var r=e.slideCount+2*e.slidesToShow;e.vertical?n=r*e.slideHeight:t=O(e)*e.slideWidth;var i={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";i=l(l({},i),{},{WebkitTransform:o,transform:a,msTransform:s})}else e.vertical?i.top=e.left:i.left=e.left;return e.fade&&(i={opacity:1}),t&&(i.width=t),n&&(i.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?i.marginTop=e.left+"px":i.marginLeft=e.left+"px"),i},C=t.getTrackAnimateCSS=function(e){A(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=j(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t},E=t.getTrackLeft=function(e){if(e.unslick)return 0;A(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t,n,r=e.slideIndex,i=e.trackRef,o=e.infinite,a=e.centerMode,s=e.slideCount,l=e.slidesToShow,c=e.slidesToScroll,u=e.slideWidth,d=e.listWidth,p=e.variableWidth,f=e.slideHeight,m=e.fade,h=e.vertical;if(m||1===e.slideCount)return 0;var g=0;if(o?(g=-P(e),s%c!==0&&r+c>s&&(g=-(r>s?l-(r-s):s%c)),a&&(g+=parseInt(l/2))):(s%c!==0&&r+c>s&&(g=l-s%c),a&&(g=parseInt(l/2))),t=h?r*f*-1+g*f:r*u*-1+g*u,!0===p){var x,y=i&&i.node;if(x=r+P(e),t=(n=y&&y.childNodes[x])?-1*n.offsetLeft:0,!0===a){x=o?r+P(e):r,n=y&&y.children[x],t=0;for(var b=0;b<x;b++)t-=y&&y.children[b]&&y.children[b].offsetWidth;t-=parseInt(e.centerPadding),t+=n&&(d-n.offsetWidth)/2}}return t},P=t.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},R=t.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},O=t.getTotalSlides=function(e){return 1===e.slideCount?1:P(e)+e.slideCount+R(e)},T=t.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+M(e)?"left":"right":e.targetSlide<e.currentSlide-z(e)?"right":"left"},M=t.slidesOnRight=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),r&&t%2===0&&(o+=1),o}return r?0:t-1},z=t.slidesOnLeft=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),r||t%2!==0||(o+=1),o}return r?t-1:0},I=(t.canUseDOM=function(){return!("undefined"===typeof window||!window.document||!window.document.createElement)},t.validSettings=Object.keys(i.default))},3557:(e,t,n)=>{"use strict";var r=n(5173),i=n(5043),o=n(2963);function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=a(r),l=a(i),c=a(o);function u(e){var t=e.isOpen,n=e.title,r=e.subtitle,o=e.onRequestClose,a=e.onAfterOpen,s=e.onAfterClose,u=e.children,p=e.className,f=e.overlayClassName,m=e.closeIcon,h=e.from,g=void 0===h?"right":h,x=e.width,y=e.shouldCloseOnEsc,b=e.hideHeader,v=void 0!==b&&b,w="slide-pane_from_".concat(g),k=function(e){var t=i.useRef(!0);i.useEffect((function(){return t.current=!0,function(){t.current=!1}}),[]);var n=i.useState(e),r=n[0],o=n[1];return[r,function(e){!0===t.current&&o(e)}]}(!1),S=k[0],A=k[1];return l.default.createElement(c.default,{ariaHideApp:!1,overlayClassName:{base:"slide-pane__overlay ".concat(f||""),afterOpen:S?"overlay-after-open":"",beforeClose:"overlay-before-close"},className:{base:"slide-pane ".concat(w," ").concat(p||""),afterOpen:S?"content-after-open":"",beforeClose:"content-before-close"},style:{content:{width:x||"80%"}},closeTimeoutMS:500,isOpen:null!==t&&void 0!==t&&t,shouldCloseOnEsc:y,onAfterOpen:function(){null===a||void 0===a||a(),setTimeout((function(){A(!0)}),0)},onAfterClose:function(){null===s||void 0===s||s(),setTimeout((function(){A(!1)}),0)},onRequestClose:o,contentLabel:'Modal "'.concat(n||"",'"')},!v&&l.default.createElement("div",{className:"slide-pane__header"},l.default.createElement("div",{className:"slide-pane__close",onClick:o,role:"button",tabIndex:0},m||l.default.createElement(d,null)),l.default.createElement("div",{className:"slide-pane__title-wrapper"},l.default.createElement("h2",{className:"slide-pane__title"},n),l.default.createElement("div",{className:"slide-pane__subtitle"},r))),l.default.createElement("div",{className:"slide-pane__content"},u))}function d(){return l.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 22"},l.default.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"}))}u.propTypes={isOpen:s.default.bool,title:s.default.node,subtitle:s.default.node,from:s.default.oneOf(["left","right","bottom"]),children:s.default.node.isRequired,className:s.default.string,overlayClassName:s.default.string,width:s.default.string,closeIcon:s.default.node,shouldCloseOnEsc:s.default.bool,hideHeader:s.default.bool,onRequestClose:s.default.func.isRequired,onAfterOpen:s.default.func,onAfterClose:s.default.func},t.Ay=u},3310:function(e,t,n){var r=n(4756);!function(e,t){"use strict";function n(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,l,"next",e)}function l(e){n(a,i,o,s,l,"throw",e)}s(void 0)}))}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function s(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var l={init:"init"},c=function(e){var t=e.value;return void 0===t?"":t},u=function(){return t.createElement(t.Fragment,null,"\xa0")},d={Cell:c,width:150,minWidth:0,maxWidth:Number.MAX_SAFE_INTEGER};function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){var n=t.style,r=t.className;return e=o({},e,{},a(t,["style","className"])),n&&(e.style=e.style?o({},e.style||{},{},n||{}):n),r&&(e.className=e.className?e.className+" "+r:r),""===e.className&&delete e.className,e}),{})}var f=function(e,t){return void 0===t&&(t={}),function(n){return void 0===n&&(n={}),[].concat(e,[n]).reduce((function(e,r){return function e(t,n,r){return"function"==typeof n?e({},n(t,r)):Array.isArray(n)?p.apply(void 0,[t].concat(n)):p(t,n)}(e,r,o({},t,{userProps:n}))}),{})}},m=function(e,t,n,r){return void 0===n&&(n={}),e.reduce((function(e,t){return t(e,n)}),t)},h=function(e,t,n){return void 0===n&&(n={}),e.forEach((function(e){e(t,n)}))};function g(e,t,n,r){e.findIndex((function(e){return e.pluginName===n})),t.forEach((function(t){e.findIndex((function(e){return e.pluginName===t}))}))}function x(e,t){return"function"==typeof e?e(t):e}function y(e){var n=t.useRef();return n.current=e,t.useCallback((function(){return n.current}),[])}var b="undefined"!=typeof document?t.useLayoutEffect:t.useEffect;function v(e,n){var r=t.useRef(!1);b((function(){r.current&&e(),r.current=!0}),n)}function w(e,t,n){return void 0===n&&(n={}),function(r,i){void 0===i&&(i={});var a="string"==typeof r?t[r]:r;if(void 0===a)throw console.info(t),new Error("Renderer Error \u261d\ufe0f");return k(a,o({},e,{column:t},n,{},i))}}function k(e,n){return function(e){return"function"==typeof e&&(t=Object.getPrototypeOf(e)).prototype&&t.prototype.isReactComponent;var t}(r=e)||"function"==typeof r||function(e){return"object"==typeof e&&"symbol"==typeof e.$$typeof&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}(r)?t.createElement(e,n):e;var r}function S(e,t,n){return void 0===n&&(n=0),e.map((function(e){return j(e=o({},e,{parent:t,depth:n})),e.columns&&(e.columns=S(e.columns,e,n+1)),e}))}function A(e){return T(e,"columns")}function j(e){var t=e.id,n=e.accessor,r=e.Header;if("string"==typeof n){t=t||n;var i=n.split(".");n=function(e){return function(e,t,n){if(!t)return e;var r,i="function"==typeof t?t:JSON.stringify(t),o=P.get(i)||function(){var e=function(e){return function e(t,n){if(void 0===n&&(n=[]),Array.isArray(t))for(var r=0;r<t.length;r+=1)e(t[r],n);else n.push(t);return n}(e).map((function(e){return String(e).replace(".","_")})).join(".").replace(F,".").replace(N,"").split(".")}(t);return P.set(i,e),e}();try{r=o.reduce((function(e,t){return e[t]}),e)}catch(e){}return void 0!==r?r:n}(e,i)}}if(!t&&"string"==typeof r&&r&&(t=r),!t&&e.columns)throw console.error(e),new Error('A column ID (or unique "Header" value) is required!');if(!t)throw console.error(e),new Error("A column ID (or string accessor) is required!");return Object.assign(e,{id:t,accessor:n}),e}function C(e,t){if(!t)throw new Error;return Object.assign(e,o({Header:u,Footer:u},d,{},t,{},e)),Object.assign(e,{originalWidth:e.width}),e}function E(e,t,n){void 0===n&&(n=function(){return{}});for(var r=[],i=e,a=0,s=function(){return a++},l=function(){var e={headers:[]},a=[],l=i.some((function(e){return e.parent}));i.forEach((function(r){var i,c=[].concat(a).reverse()[0];l&&(i=r.parent?o({},r.parent,{originalId:r.parent.id,id:r.parent.id+"_"+s(),headers:[r]},n(r)):C(o({originalId:r.id+"_placeholder",id:r.id+"_placeholder_"+s(),placeholderOf:r,headers:[r]},n(r)),t),c&&c.originalId===i.originalId?c.headers.push(r):a.push(i)),e.headers.push(r)})),r.push(e),i=a};i.length;)l();return r.reverse()}var P=new Map;function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=0;r<t.length;r+=1)if(void 0!==t[r])return t[r]}function O(e){if("function"==typeof e)return e}function T(e,t){var n=[];return function e(r){r.forEach((function(r){r[t]?e(r[t]):n.push(r)}))}(e),n}function M(e,t){var n=t.manualExpandedKey,r=t.expanded,i=t.expandSubRows,o=void 0===i||i,a=[];return e.forEach((function(e){return function e(t,i){void 0===i&&(i=!0),t.isExpanded=t.original&&t.original[n]||r[t.id],t.canExpand=t.subRows&&!!t.subRows.length,i&&a.push(t),t.subRows&&t.subRows.length&&t.isExpanded&&t.subRows.forEach((function(t){return e(t,o)}))}(e)})),a}function z(e,t,n){return O(e)||t[e]||n[e]||n.text}function I(e,t,n){return e?e(t,n):void 0===t}function L(){throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")}var D=null,F=/\[/g,N=/\]/g,B=function(e){return o({role:"table"},e)},_=function(e){return o({role:"rowgroup"},e)},U=function(e,t){var n=t.column;return o({key:"header_"+n.id,colSpan:n.totalVisibleHeaderCount,role:"columnheader"},e)},H=function(e,t){var n=t.column;return o({key:"footer_"+n.id,colSpan:n.totalVisibleHeaderCount},e)},W=function(e,t){return o({key:"headerGroup_"+t.index,role:"row"},e)},q=function(e,t){return o({key:"footerGroup_"+t.index},e)},G=function(e,t){return o({key:"row_"+t.row.id,role:"row"},e)},V=function(e,t){var n=t.cell;return o({key:"cell_"+n.row.id+"_"+n.column.id,role:"cell"},e)};function K(){return{useOptions:[],stateReducers:[],useControlledState:[],columns:[],columnsDeps:[],allColumns:[],allColumnsDeps:[],accessValue:[],materializedColumns:[],materializedColumnsDeps:[],useInstanceAfterData:[],visibleColumns:[],visibleColumnsDeps:[],headerGroups:[],headerGroupsDeps:[],useInstanceBeforeDimensions:[],useInstance:[],prepareRow:[],getTableProps:[B],getTableBodyProps:[_],getHeaderGroupProps:[W],getFooterGroupProps:[q],getHeaderProps:[U],getFooterProps:[H],getRowProps:[G],getCellProps:[V],useFinalInstance:[]}}l.resetHiddenColumns="resetHiddenColumns",l.toggleHideColumn="toggleHideColumn",l.setHiddenColumns="setHiddenColumns",l.toggleHideAllColumns="toggleHideAllColumns";var J=function(e){e.getToggleHiddenProps=[Y],e.getToggleHideAllColumnsProps=[Q],e.stateReducers.push(Z),e.useInstanceBeforeDimensions.push(X),e.headerGroupsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.hiddenColumns])})),e.useInstance.push($)};J.pluginName="useColumnVisibility";var Y=function(e,t){var n=t.column;return[e,{onChange:function(e){n.toggleHidden(!e.target.checked)},style:{cursor:"pointer"},checked:n.isVisible,title:"Toggle Column Visible"}]},Q=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleHideAllColumns(!e.target.checked)},style:{cursor:"pointer"},checked:!n.allColumnsHidden&&!n.state.hiddenColumns.length,title:"Toggle All Columns Hidden",indeterminate:!n.allColumnsHidden&&n.state.hiddenColumns.length}]};function Z(e,t,n,r){if(t.type===l.init)return o({hiddenColumns:[]},e);if(t.type===l.resetHiddenColumns)return o({},e,{hiddenColumns:r.initialState.hiddenColumns||[]});if(t.type===l.toggleHideColumn){var i=(void 0!==t.value?t.value:!e.hiddenColumns.includes(t.columnId))?[].concat(e.hiddenColumns,[t.columnId]):e.hiddenColumns.filter((function(e){return e!==t.columnId}));return o({},e,{hiddenColumns:i})}return t.type===l.setHiddenColumns?o({},e,{hiddenColumns:x(t.value,e.hiddenColumns)}):t.type===l.toggleHideAllColumns?o({},e,{hiddenColumns:(void 0!==t.value?t.value:!e.hiddenColumns.length)?r.allColumns.map((function(e){return e.id})):[]}):void 0}function X(e){var n=e.headers,r=e.state.hiddenColumns;t.useRef(!1).current;var i=0;n.forEach((function(e){return i+=function e(t,n){t.isVisible=n&&!r.includes(t.id);var i=0;return t.headers&&t.headers.length?t.headers.forEach((function(n){return i+=e(n,t.isVisible)})):i=t.isVisible?1:0,t.totalVisibleHeaderCount=i,i}(e,!0)}))}function $(e){var n=e.columns,r=e.flatHeaders,i=e.dispatch,o=e.allColumns,a=e.getHooks,s=e.state.hiddenColumns,c=e.autoResetHiddenColumns,u=void 0===c||c,d=y(e),p=o.length===s.length,m=t.useCallback((function(e,t){return i({type:l.toggleHideColumn,columnId:e,value:t})}),[i]),h=t.useCallback((function(e){return i({type:l.setHiddenColumns,value:e})}),[i]),g=t.useCallback((function(e){return i({type:l.toggleHideAllColumns,value:e})}),[i]),x=f(a().getToggleHideAllColumnsProps,{instance:d()});r.forEach((function(e){e.toggleHidden=function(t){i({type:l.toggleHideColumn,columnId:e.id,value:t})},e.getToggleHiddenProps=f(a().getToggleHiddenProps,{instance:d(),column:e})}));var b=y(u);v((function(){b()&&i({type:l.resetHiddenColumns})}),[i,n]),Object.assign(e,{allColumnsHidden:p,toggleHideColumn:m,setHiddenColumns:h,toggleHideAllColumns:g,getToggleHideAllColumnsProps:x})}var ee={},te={},ne=function(e,t,n){return e},re=function(e,t){return e.subRows||[]},ie=function(e,t,n){return""+(n?[n.id,t].join("."):t)},oe=function(e){return e};function ae(e){var t=e.initialState,n=void 0===t?ee:t,r=e.defaultColumn,i=void 0===r?te:r,s=e.getSubRows,l=void 0===s?re:s,c=e.getRowId,u=void 0===c?ie:c,d=e.stateReducer,p=void 0===d?ne:d,f=e.useControlledState,m=void 0===f?oe:f;return o({},a(e,["initialState","defaultColumn","getSubRows","getRowId","stateReducer","useControlledState"]),{initialState:n,defaultColumn:i,getSubRows:l,getRowId:u,stateReducer:p,useControlledState:m})}function se(e,t){void 0===t&&(t=0);var n=0,r=0,i=0,o=0;return e.forEach((function(e){var a=e.headers;if(e.totalLeft=t,a&&a.length){var s=se(a,t),l=s[0],c=s[1],u=s[2],d=s[3];e.totalMinWidth=l,e.totalWidth=c,e.totalMaxWidth=u,e.totalFlexWidth=d}else e.totalMinWidth=e.minWidth,e.totalWidth=Math.min(Math.max(e.minWidth,e.width),e.maxWidth),e.totalMaxWidth=e.maxWidth,e.totalFlexWidth=e.canResize?e.totalWidth:0;e.isVisible&&(t+=e.totalWidth,n+=e.totalMinWidth,r+=e.totalWidth,i+=e.totalMaxWidth,o+=e.totalFlexWidth)})),[n,r,i,o]}function le(e){var t=e.data,n=e.rows,r=e.flatRows,i=e.rowsById,o=e.column,a=e.getRowId,s=e.getSubRows,l=e.accessValueHooks,c=e.getInstance;t.forEach((function(e,u){return function e(n,u,d,p,f){void 0===d&&(d=0);var h=n,g=a(n,u,p),x=i[g];if(x)x.subRows&&x.originalSubRows.forEach((function(t,n){return e(t,n,d+1,x)}));else if((x={id:g,original:h,index:u,depth:d,cells:[{}]}).cells.map=L,x.cells.filter=L,x.cells.forEach=L,x.cells[0].getCellProps=L,x.values={},f.push(x),r.push(x),i[g]=x,x.originalSubRows=s(n,u),x.originalSubRows){var y=[];x.originalSubRows.forEach((function(t,n){return e(t,n,d+1,x,y)})),x.subRows=y}o.accessor&&(x.values[o.id]=o.accessor(n,u,x,f,t)),x.values[o.id]=m(l,x.values[o.id],{row:x,column:o,instance:c()})}(e,u,0,void 0,n)}))}l.resetExpanded="resetExpanded",l.toggleRowExpanded="toggleRowExpanded",l.toggleAllRowsExpanded="toggleAllRowsExpanded";var ce=function(e){e.getToggleAllRowsExpandedProps=[ue],e.getToggleRowExpandedProps=[de],e.stateReducers.push(pe),e.useInstance.push(fe),e.prepareRow.push(me)};ce.pluginName="useExpanded";var ue=function(e,t){var n=t.instance;return[e,{onClick:function(e){n.toggleAllRowsExpanded()},style:{cursor:"pointer"},title:"Toggle All Rows Expanded"}]},de=function(e,t){var n=t.row;return[e,{onClick:function(){n.toggleRowExpanded()},style:{cursor:"pointer"},title:"Toggle Row Expanded"}]};function pe(e,t,n,r){if(t.type===l.init)return o({expanded:{}},e);if(t.type===l.resetExpanded)return o({},e,{expanded:r.initialState.expanded||{}});if(t.type===l.toggleAllRowsExpanded){var i=t.value,c=r.rowsById,u=Object.keys(c).length===Object.keys(e.expanded).length;if(void 0!==i?i:!u){var d={};return Object.keys(c).forEach((function(e){d[e]=!0})),o({},e,{expanded:d})}return o({},e,{expanded:{}})}if(t.type===l.toggleRowExpanded){var p,f=t.id,m=t.value,h=e.expanded[f],g=void 0!==m?m:!h;if(!h&&g)return o({},e,{expanded:o({},e.expanded,(p={},p[f]=!0,p))});if(h&&!g){var x=e.expanded;return x[f],o({},e,{expanded:a(x,[f].map(s))})}return e}}function fe(e){var n=e.data,r=e.rows,i=e.rowsById,o=e.manualExpandedKey,a=void 0===o?"expanded":o,s=e.paginateExpandedRows,c=void 0===s||s,u=e.expandSubRows,d=void 0===u||u,p=e.autoResetExpanded,m=void 0===p||p,h=e.getHooks,x=e.plugins,b=e.state.expanded,w=e.dispatch;g(x,["useSortBy","useGroupBy","usePivotColumns","useGlobalFilter"],"useExpanded");var k=y(m),S=Boolean(Object.keys(i).length&&Object.keys(b).length);S&&Object.keys(i).some((function(e){return!b[e]}))&&(S=!1),v((function(){k()&&w({type:l.resetExpanded})}),[w,n]);var A=t.useCallback((function(e,t){w({type:l.toggleRowExpanded,id:e,value:t})}),[w]),j=t.useCallback((function(e){return w({type:l.toggleAllRowsExpanded,value:e})}),[w]),C=t.useMemo((function(){return c?M(r,{manualExpandedKey:a,expanded:b,expandSubRows:d}):r}),[c,r,a,b,d]),E=t.useMemo((function(){return function(e){var t=0;return Object.keys(e).forEach((function(e){var n=e.split(".");t=Math.max(t,n.length)})),t}(b)}),[b]),P=y(e),R=f(h().getToggleAllRowsExpandedProps,{instance:P()});Object.assign(e,{preExpandedRows:r,expandedRows:C,rows:C,expandedDepth:E,isAllRowsExpanded:S,toggleRowExpanded:A,toggleAllRowsExpanded:j,getToggleAllRowsExpandedProps:R})}function me(e,t){var n=t.instance.getHooks,r=t.instance;e.toggleRowExpanded=function(t){return r.toggleRowExpanded(e.id,t)},e.getToggleRowExpandedProps=f(n().getToggleRowExpandedProps,{instance:r,row:e})}var he=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return String(r).toLowerCase().includes(String(n).toLowerCase())}))}))};he.autoRemove=function(e){return!e};var ge=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return void 0===r||String(r).toLowerCase()===String(n).toLowerCase()}))}))};ge.autoRemove=function(e){return!e};var xe=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return void 0===r||String(r)===String(n)}))}))};xe.autoRemove=function(e){return!e};var ye=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t].includes(n)}))}))};ye.autoRemove=function(e){return!e||!e.length};var be=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r&&r.length&&n.every((function(e){return r.includes(e)}))}))}))};be.autoRemove=function(e){return!e||!e.length};var ve=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r&&r.length&&n.some((function(e){return r.includes(e)}))}))}))};ve.autoRemove=function(e){return!e||!e.length};var we=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return n.includes(r)}))}))};we.autoRemove=function(e){return!e||!e.length};var ke=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]===n}))}))};ke.autoRemove=function(e){return void 0===e};var Se=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]==n}))}))};Se.autoRemove=function(e){return null==e};var Ae=function(e,t,n){var r=n||[],i=r[0],o=r[1];if((i="number"==typeof i?i:-1/0)>(o="number"==typeof o?o:1/0)){var a=i;i=o,o=a}return e.filter((function(e){return t.some((function(t){var n=e.values[t];return n>=i&&n<=o}))}))};Ae.autoRemove=function(e){return!e||"number"!=typeof e[0]&&"number"!=typeof e[1]};var je=Object.freeze({__proto__:null,text:he,exactText:ge,exactTextCase:xe,includes:ye,includesAll:be,includesSome:ve,includesValue:we,exact:ke,equals:Se,between:Ae});l.resetFilters="resetFilters",l.setFilter="setFilter",l.setAllFilters="setAllFilters";var Ce=function(e){e.stateReducers.push(Ee),e.useInstance.push(Pe)};function Ee(e,t,n,r){if(t.type===l.init)return o({filters:[]},e);if(t.type===l.resetFilters)return o({},e,{filters:r.initialState.filters||[]});if(t.type===l.setFilter){var i=t.columnId,a=t.filterValue,s=r.allColumns,c=r.filterTypes,u=s.find((function(e){return e.id===i}));if(!u)throw new Error("React-Table: Could not find a column with id: "+i);var d=z(u.filter,c||{},je),p=e.filters.find((function(e){return e.id===i})),f=x(a,p&&p.value);return I(d.autoRemove,f,u)?o({},e,{filters:e.filters.filter((function(e){return e.id!==i}))}):o({},e,p?{filters:e.filters.map((function(e){return e.id===i?{id:i,value:f}:e}))}:{filters:[].concat(e.filters,[{id:i,value:f}])})}if(t.type===l.setAllFilters){var m=t.filters,h=r.allColumns,g=r.filterTypes;return o({},e,{filters:x(m,e.filters).filter((function(e){var t=h.find((function(t){return t.id===e.id}));return!I(z(t.filter,g||{},je).autoRemove,e.value,t)}))})}}function Pe(e){var n=e.data,r=e.rows,i=e.flatRows,o=e.rowsById,a=e.allColumns,s=e.filterTypes,c=e.manualFilters,u=e.defaultCanFilter,d=void 0!==u&&u,p=e.disableFilters,f=e.state.filters,m=e.dispatch,h=e.autoResetFilters,g=void 0===h||h,x=t.useCallback((function(e,t){m({type:l.setFilter,columnId:e,filterValue:t})}),[m]),b=t.useCallback((function(e){m({type:l.setAllFilters,filters:e})}),[m]);a.forEach((function(e){var t=e.id,n=e.accessor,r=e.defaultCanFilter,i=e.disableFilters;e.canFilter=n?R(!0!==i&&void 0,!0!==p&&void 0,!0):R(r,d,!1),e.setFilter=function(t){return x(e.id,t)};var o=f.find((function(e){return e.id===t}));e.filterValue=o&&o.value}));var w=t.useMemo((function(){if(c||!f.length)return[r,i,o];var e=[],t={};return[function n(r,i){void 0===i&&(i=0);var o=r;return(o=f.reduce((function(e,t){var n=t.id,r=t.value,o=a.find((function(e){return e.id===n}));if(!o)return e;0===i&&(o.preFilteredRows=e);var l=z(o.filter,s||{},je);return l?(o.filteredRows=l(e,[n],r),o.filteredRows):(console.warn("Could not find a valid 'column.filter' for column with the ID: "+o.id+"."),e)}),r)).forEach((function(r){e.push(r),t[r.id]=r,r.subRows&&(r.subRows=r.subRows&&r.subRows.length>0?n(r.subRows,i+1):r.subRows)})),o}(r),e,t]}),[c,f,r,i,o,a,s]),k=w[0],S=w[1],A=w[2];t.useMemo((function(){a.filter((function(e){return!f.find((function(t){return t.id===e.id}))})).forEach((function(e){e.preFilteredRows=k,e.filteredRows=k}))}),[k,f,a]);var j=y(g);v((function(){j()&&m({type:l.resetFilters})}),[m,c?null:n]),Object.assign(e,{preFilteredRows:r,preFilteredFlatRows:i,preFilteredRowsById:o,filteredRows:k,filteredFlatRows:S,filteredRowsById:A,rows:k,flatRows:S,rowsById:A,setFilter:x,setAllFilters:b})}Ce.pluginName="useFilters",l.resetGlobalFilter="resetGlobalFilter",l.setGlobalFilter="setGlobalFilter";var Re=function(e){e.stateReducers.push(Oe),e.useInstance.push(Te)};function Oe(e,t,n,r){if(t.type===l.resetGlobalFilter)return o({},e,{globalFilter:r.initialState.globalFilter||void 0});if(t.type===l.setGlobalFilter){var i=t.filterValue,s=r.userFilterTypes,c=z(r.globalFilter,s||{},je),u=x(i,e.globalFilter);return I(c.autoRemove,u)?(e.globalFilter,a(e,["globalFilter"])):o({},e,{globalFilter:u})}}function Te(e){var n=e.data,r=e.rows,i=e.flatRows,o=e.rowsById,a=e.allColumns,s=e.filterTypes,c=e.globalFilter,u=e.manualGlobalFilter,d=e.state.globalFilter,p=e.dispatch,f=e.autoResetGlobalFilter,m=void 0===f||f,h=e.disableGlobalFilter,g=t.useCallback((function(e){p({type:l.setGlobalFilter,filterValue:e})}),[p]),x=t.useMemo((function(){if(u||void 0===d)return[r,i,o];var e=[],t={},n=z(c,s||{},je);if(!n)return console.warn("Could not find a valid 'globalFilter' option."),r;a.forEach((function(e){var t=e.disableGlobalFilter;e.canFilter=R(!0!==t&&void 0,!0!==h&&void 0,!0)}));var l=a.filter((function(e){return!0===e.canFilter}));return[function r(i){return(i=n(i,l.map((function(e){return e.id})),d)).forEach((function(n){e.push(n),t[n.id]=n,n.subRows=n.subRows&&n.subRows.length?r(n.subRows):n.subRows})),i}(r),e,t]}),[u,d,c,s,a,r,i,o,h]),b=x[0],w=x[1],k=x[2],S=y(m);v((function(){S()&&p({type:l.resetGlobalFilter})}),[p,u?null:n]),Object.assign(e,{preGlobalFilteredRows:r,preGlobalFilteredFlatRows:i,preGlobalFilteredRowsById:o,globalFilteredRows:b,globalFilteredFlatRows:w,globalFilteredRowsById:k,rows:b,flatRows:w,rowsById:k,setGlobalFilter:g,disableGlobalFilter:h})}function Me(e,t){return t.reduce((function(e,t){return e+("number"==typeof t?t:0)}),0)}Re.pluginName="useGlobalFilter";var ze=Object.freeze({__proto__:null,sum:Me,min:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e))})),t},max:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.max(t,e))})),t},minMax:function(e){var t=e[0]||0,n=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e),n=Math.max(n,e))})),t+".."+n},average:function(e){return Me(0,e)/e.length},median:function(e){if(!e.length)return null;var t=Math.floor(e.length/2),n=[].concat(e).sort((function(e,t){return e-t}));return e.length%2!=0?n[t]:(n[t-1]+n[t])/2},unique:function(e){return Array.from(new Set(e).values())},uniqueCount:function(e){return new Set(e).size},count:function(e){return e.length}}),Ie=[],Le={};l.resetGroupBy="resetGroupBy",l.setGroupBy="setGroupBy",l.toggleGroupBy="toggleGroupBy";var De=function(e){e.getGroupByToggleProps=[Fe],e.stateReducers.push(Ne),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.groupBy])})),e.visibleColumns.push(Be),e.useInstance.push(Ue),e.prepareRow.push(He)};De.pluginName="useGroupBy";var Fe=function(e,t){var n=t.header;return[e,{onClick:n.canGroupBy?function(e){e.persist(),n.toggleGroupBy()}:void 0,style:{cursor:n.canGroupBy?"pointer":void 0},title:"Toggle GroupBy"}]};function Ne(e,t,n,r){if(t.type===l.init)return o({groupBy:[]},e);if(t.type===l.resetGroupBy)return o({},e,{groupBy:r.initialState.groupBy||[]});if(t.type===l.setGroupBy)return o({},e,{groupBy:t.value});if(t.type===l.toggleGroupBy){var i=t.columnId,a=t.value,s=void 0!==a?a:!e.groupBy.includes(i);return o({},e,s?{groupBy:[].concat(e.groupBy,[i])}:{groupBy:e.groupBy.filter((function(e){return e!==i}))})}}function Be(e,t){var n=t.instance.state.groupBy,r=n.map((function(t){return e.find((function(e){return e.id===t}))})).filter(Boolean),i=e.filter((function(e){return!n.includes(e.id)}));return(e=[].concat(r,i)).forEach((function(e){e.isGrouped=n.includes(e.id),e.groupedIndex=n.indexOf(e.id)})),e}var _e={};function Ue(e){var n=e.data,r=e.rows,i=e.flatRows,a=e.rowsById,s=e.allColumns,c=e.flatHeaders,u=e.groupByFn,d=void 0===u?We:u,p=e.manualGroupBy,m=e.aggregations,h=void 0===m?_e:m,x=e.plugins,b=e.state.groupBy,w=e.dispatch,k=e.autoResetGroupBy,S=void 0===k||k,A=e.disableGroupBy,j=e.defaultCanGroupBy,C=e.getHooks;g(x,["useColumnOrder","useFilters"],"useGroupBy");var E=y(e);s.forEach((function(t){var n=t.accessor,r=t.defaultGroupBy,i=t.disableGroupBy;t.canGroupBy=n?R(t.canGroupBy,!0!==i&&void 0,!0!==A&&void 0,!0):R(t.canGroupBy,r,j,!1),t.canGroupBy&&(t.toggleGroupBy=function(){return e.toggleGroupBy(t.id)}),t.Aggregated=t.Aggregated||t.Cell}));var P=t.useCallback((function(e,t){w({type:l.toggleGroupBy,columnId:e,value:t})}),[w]),O=t.useCallback((function(e){w({type:l.setGroupBy,value:e})}),[w]);c.forEach((function(e){e.getGroupByToggleProps=f(C().getGroupByToggleProps,{instance:E(),header:e})}));var M=t.useMemo((function(){if(p||!b.length)return[r,i,a,Ie,Le,i,a];var e=b.filter((function(e){return s.find((function(t){return t.id===e}))})),t=[],n={},l=[],c={},u=[],f={},m=function r(i,a,p){if(void 0===a&&(a=0),a===e.length)return i.map((function(e){return o({},e,{depth:a})}));var m=e[a],g=d(i,m);return Object.entries(g).map((function(i,o){var d=i[0],g=i[1],x=m+":"+d,y=r(g,a+1,x=p?p+">"+x:x),b=a?T(g,"leafRows"):g,v=function(t,n,r){var i={};return s.forEach((function(o){if(e.includes(o.id))i[o.id]=n[0]?n[0].values[o.id]:null;else{var a="function"==typeof o.aggregate?o.aggregate:h[o.aggregate]||ze[o.aggregate];if(a){var s=n.map((function(e){return e.values[o.id]})),l=t.map((function(e){var t=e.values[o.id];if(!r&&o.aggregateValue){var n="function"==typeof o.aggregateValue?o.aggregateValue:h[o.aggregateValue]||ze[o.aggregateValue];if(!n)throw console.info({column:o}),new Error("React Table: Invalid column.aggregateValue option for column listed above");t=n(t,e,o)}return t}));i[o.id]=a(l,s)}else{if(o.aggregate)throw console.info({column:o}),new Error("React Table: Invalid column.aggregate option for column listed above");i[o.id]=null}}})),i}(b,g,a),w={id:x,isGrouped:!0,groupByID:m,groupByVal:d,values:v,subRows:y,leafRows:b,depth:a,index:o};return y.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(l.push(e),c[e.id]=e):(u.push(e),f[e.id]=e)})),w}))}(r);return m.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(l.push(e),c[e.id]=e):(u.push(e),f[e.id]=e)})),[m,t,n,l,c,u,f]}),[p,b,r,i,a,s,h,d]),z=M[0],I=M[1],L=M[2],D=M[3],F=M[4],N=M[5],B=M[6],_=y(S);v((function(){_()&&w({type:l.resetGroupBy})}),[w,p?null:n]),Object.assign(e,{preGroupedRows:r,preGroupedFlatRow:i,preGroupedRowsById:a,groupedRows:z,groupedFlatRows:I,groupedRowsById:L,onlyGroupedFlatRows:D,onlyGroupedRowsById:F,nonGroupedFlatRows:N,nonGroupedRowsById:B,rows:z,flatRows:I,rowsById:L,toggleGroupBy:P,setGroupBy:O})}function He(e){e.allCells.forEach((function(t){var n;t.isGrouped=t.column.isGrouped&&t.column.id===e.groupByID,t.isPlaceholder=!t.isGrouped&&t.column.isGrouped,t.isAggregated=!t.isGrouped&&!t.isPlaceholder&&(null==(n=e.subRows)?void 0:n.length)}))}function We(e,t){return e.reduce((function(e,n,r){var i=""+n.values[t];return e[i]=Array.isArray(e[i])?e[i]:[],e[i].push(n),e}),{})}var qe=/([0-9]+)/gm;function Ge(e,t){return e===t?0:e>t?1:-1}function Ve(e,t,n){return[e.values[n],t.values[n]]}function Ke(e){return"number"==typeof e?isNaN(e)||e===1/0||e===-1/0?"":String(e):"string"==typeof e?e:""}var Je=Object.freeze({__proto__:null,alphanumeric:function(e,t,n){var r=Ve(e,t,n),i=r[0],o=r[1];for(i=Ke(i),o=Ke(o),i=i.split(qe).filter(Boolean),o=o.split(qe).filter(Boolean);i.length&&o.length;){var a=i.shift(),s=o.shift(),l=parseInt(a,10),c=parseInt(s,10),u=[l,c].sort();if(isNaN(u[0])){if(a>s)return 1;if(s>a)return-1}else{if(isNaN(u[1]))return isNaN(l)?-1:1;if(l>c)return 1;if(c>l)return-1}}return i.length-o.length},datetime:function(e,t,n){var r=Ve(e,t,n),i=r[0],o=r[1];return Ge(i=i.getTime(),o=o.getTime())},basic:function(e,t,n){var r=Ve(e,t,n);return Ge(r[0],r[1])},string:function(e,t,n){var r=Ve(e,t,n),i=r[0],o=r[1];for(i=i.split("").filter(Boolean),o=o.split("").filter(Boolean);i.length&&o.length;){var a=i.shift(),s=o.shift(),l=a.toLowerCase(),c=s.toLowerCase();if(l>c)return 1;if(c>l)return-1;if(a>s)return 1;if(s>a)return-1}return i.length-o.length},number:function(e,t,n){var r=Ve(e,t,n),i=r[0],o=r[1],a=/[^0-9.]/gi;return Ge(i=Number(String(i).replace(a,"")),o=Number(String(o).replace(a,"")))}});l.resetSortBy="resetSortBy",l.setSortBy="setSortBy",l.toggleSortBy="toggleSortBy",l.clearSortBy="clearSortBy",d.sortType="alphanumeric",d.sortDescFirst=!1;var Ye=function(e){e.getSortByToggleProps=[Qe],e.stateReducers.push(Ze),e.useInstance.push(Xe)};Ye.pluginName="useSortBy";var Qe=function(e,t){var n=t.instance,r=t.column,i=n.isMultiSortEvent,o=void 0===i?function(e){return e.shiftKey}:i;return[e,{onClick:r.canSort?function(e){e.persist(),r.toggleSortBy(void 0,!n.disableMultiSort&&o(e))}:void 0,style:{cursor:r.canSort?"pointer":void 0},title:r.canSort?"Toggle SortBy":void 0}]};function Ze(e,t,n,r){if(t.type===l.init)return o({sortBy:[]},e);if(t.type===l.resetSortBy)return o({},e,{sortBy:r.initialState.sortBy||[]});if(t.type===l.clearSortBy)return o({},e,{sortBy:e.sortBy.filter((function(e){return e.id!==t.columnId}))});if(t.type===l.setSortBy)return o({},e,{sortBy:t.sortBy});if(t.type===l.toggleSortBy){var i,a=t.columnId,s=t.desc,c=t.multi,u=r.allColumns,d=r.disableMultiSort,p=r.disableSortRemove,f=r.disableMultiRemove,m=r.maxMultiSortColCount,h=void 0===m?Number.MAX_SAFE_INTEGER:m,g=e.sortBy,x=u.find((function(e){return e.id===a})).sortDescFirst,y=g.find((function(e){return e.id===a})),b=g.findIndex((function(e){return e.id===a})),v=null!=s,w=[];return"toggle"!==(i=!d&&c?y?"toggle":"add":b!==g.length-1||1!==g.length?"replace":y?"toggle":"replace")||p||v||c&&f||!(y&&y.desc&&!x||!y.desc&&x)||(i="remove"),"replace"===i?w=[{id:a,desc:v?s:x}]:"add"===i?(w=[].concat(g,[{id:a,desc:v?s:x}])).splice(0,w.length-h):"toggle"===i?w=g.map((function(e){return e.id===a?o({},e,{desc:v?s:!y.desc}):e})):"remove"===i&&(w=g.filter((function(e){return e.id!==a}))),o({},e,{sortBy:w})}}function Xe(e){var n=e.data,r=e.rows,i=e.flatRows,o=e.allColumns,a=e.orderByFn,s=void 0===a?$e:a,c=e.sortTypes,u=e.manualSortBy,d=e.defaultCanSort,p=e.disableSortBy,m=e.flatHeaders,h=e.state.sortBy,x=e.dispatch,b=e.plugins,w=e.getHooks,k=e.autoResetSortBy,S=void 0===k||k;g(b,["useFilters","useGlobalFilter","useGroupBy","usePivotColumns"],"useSortBy");var A=t.useCallback((function(e){x({type:l.setSortBy,sortBy:e})}),[x]),j=t.useCallback((function(e,t,n){x({type:l.toggleSortBy,columnId:e,desc:t,multi:n})}),[x]),C=y(e);m.forEach((function(e){var t=e.accessor,n=e.canSort,r=e.disableSortBy,i=e.id,o=t?R(!0!==r&&void 0,!0!==p&&void 0,!0):R(d,n,!1);e.canSort=o,e.canSort&&(e.toggleSortBy=function(t,n){return j(e.id,t,n)},e.clearSortBy=function(){x({type:l.clearSortBy,columnId:e.id})}),e.getSortByToggleProps=f(w().getSortByToggleProps,{instance:C(),column:e});var a=h.find((function(e){return e.id===i}));e.isSorted=!!a,e.sortedIndex=h.findIndex((function(e){return e.id===i})),e.isSortedDesc=e.isSorted?a.desc:void 0}));var E=t.useMemo((function(){if(u||!h.length)return[r,i];var e=[],t=h.filter((function(e){return o.find((function(t){return t.id===e.id}))}));return[function n(r){var i=s(r,t.map((function(e){var t=o.find((function(t){return t.id===e.id}));if(!t)throw new Error("React-Table: Could not find a column with id: "+e.id+" while sorting");var n=t.sortType,r=O(n)||(c||{})[n]||Je[n];if(!r)throw new Error("React-Table: Could not find a valid sortType of '"+n+"' for column '"+e.id+"'.");return function(t,n){return r(t,n,e.id,e.desc)}})),t.map((function(e){var t=o.find((function(t){return t.id===e.id}));return t&&t.sortInverted?e.desc:!e.desc})));return i.forEach((function(t){e.push(t),t.subRows&&0!==t.subRows.length&&(t.subRows=n(t.subRows))})),i}(r),e]}),[u,h,r,i,o,s,c]),P=E[0],T=E[1],M=y(S);v((function(){M()&&x({type:l.resetSortBy})}),[u?null:n]),Object.assign(e,{preSortedRows:r,preSortedFlatRows:i,sortedRows:P,sortedFlatRows:T,rows:P,flatRows:T,setSortBy:A,toggleSortBy:j})}function $e(e,t,n){return[].concat(e).sort((function(e,r){for(var i=0;i<t.length;i+=1){var o=t[i],a=!1===n[i]||"desc"===n[i],s=o(e,r);if(0!==s)return a?-s:s}return n[0]?e.index-r.index:r.index-e.index}))}l.resetPage="resetPage",l.gotoPage="gotoPage",l.setPageSize="setPageSize";var et=function(e){e.stateReducers.push(tt),e.useInstance.push(nt)};function tt(e,t,n,r){if(t.type===l.init)return o({pageSize:10,pageIndex:0},e);if(t.type===l.resetPage)return o({},e,{pageIndex:r.initialState.pageIndex||0});if(t.type===l.gotoPage){var i=r.pageCount,a=r.page,s=x(t.pageIndex,e.pageIndex),c=!1;return s>e.pageIndex?c=-1===i?a.length>=e.pageSize:s<i:s<e.pageIndex&&(c=s>-1),c?o({},e,{pageIndex:s}):e}if(t.type===l.setPageSize){var u=t.pageSize,d=e.pageSize*e.pageIndex;return o({},e,{pageIndex:Math.floor(d/u),pageSize:u})}}function nt(e){var n=e.rows,r=e.autoResetPage,i=void 0===r||r,o=e.manualExpandedKey,a=void 0===o?"expanded":o,s=e.plugins,c=e.pageCount,u=e.paginateExpandedRows,d=void 0===u||u,p=e.expandSubRows,f=void 0===p||p,m=e.state,h=m.pageSize,x=m.pageIndex,b=m.expanded,w=m.globalFilter,k=m.filters,S=m.groupBy,A=m.sortBy,j=e.dispatch,C=e.data,E=e.manualPagination;g(s,["useGlobalFilter","useFilters","useGroupBy","useSortBy","useExpanded"],"usePagination");var P=y(i);v((function(){P()&&j({type:l.resetPage})}),[j,E?null:C,w,k,S,A]);var R=E?c:Math.ceil(n.length/h),O=t.useMemo((function(){return R>0?[].concat(new Array(R)).fill(null).map((function(e,t){return t})):[]}),[R]),T=t.useMemo((function(){var e;if(E)e=n;else{var t=h*x,r=t+h;e=n.slice(t,r)}return d?e:M(e,{manualExpandedKey:a,expanded:b,expandSubRows:f})}),[f,b,a,E,x,h,d,n]),z=x>0,I=-1===R?T.length>=h:x<R-1,L=t.useCallback((function(e){j({type:l.gotoPage,pageIndex:e})}),[j]),D=t.useCallback((function(){return L((function(e){return e-1}))}),[L]),F=t.useCallback((function(){return L((function(e){return e+1}))}),[L]),N=t.useCallback((function(e){j({type:l.setPageSize,pageSize:e})}),[j]);Object.assign(e,{pageOptions:O,pageCount:R,page:T,canPreviousPage:z,canNextPage:I,gotoPage:L,previousPage:D,nextPage:F,setPageSize:N})}et.pluginName="usePagination",l.resetPivot="resetPivot",l.togglePivot="togglePivot";var rt=function(e){e.getPivotToggleProps=[ot],e.stateReducers.push(at),e.useInstanceAfterData.push(st),e.allColumns.push(lt),e.accessValue.push(ct),e.materializedColumns.push(ut),e.materializedColumnsDeps.push(dt),e.visibleColumns.push(pt),e.visibleColumnsDeps.push(ft),e.useInstance.push(mt),e.prepareRow.push(ht)};rt.pluginName="usePivotColumns";var it=[],ot=function(e,t){var n=t.header;return[e,{onClick:n.canPivot?function(e){e.persist(),n.togglePivot()}:void 0,style:{cursor:n.canPivot?"pointer":void 0},title:"Toggle Pivot"}]};function at(e,t,n,r){if(t.type===l.init)return o({pivotColumns:it},e);if(t.type===l.resetPivot)return o({},e,{pivotColumns:r.initialState.pivotColumns||it});if(t.type===l.togglePivot){var i=t.columnId,a=t.value,s=void 0!==a?a:!e.pivotColumns.includes(i);return o({},e,s?{pivotColumns:[].concat(e.pivotColumns,[i])}:{pivotColumns:e.pivotColumns.filter((function(e){return e!==i}))})}}function st(e){e.allColumns.forEach((function(t){t.isPivotSource=e.state.pivotColumns.includes(t.id)}))}function lt(e,t){var n=t.instance;return e.forEach((function(e){e.isPivotSource=n.state.pivotColumns.includes(e.id),e.uniqueValues=new Set})),e}function ct(e,t){var n=t.column;return n.uniqueValues&&void 0!==e&&n.uniqueValues.add(e),e}function ut(e,t){var n=t.instance,r=n.allColumns,i=n.state;if(!i.pivotColumns.length||!i.groupBy||!i.groupBy.length)return e;var a=i.pivotColumns.map((function(e){return r.find((function(t){return t.id===e}))})).filter(Boolean),s=r.filter((function(e){return!e.isPivotSource&&!i.groupBy.includes(e.id)&&!i.pivotColumns.includes(e.id)})),l=A(function e(t,n,r){void 0===t&&(t=0),void 0===r&&(r=[]);var i=a[t];return i?Array.from(i.uniqueValues).sort().map((function(a){var s=o({},i,{Header:i.PivotHeader||"string"==typeof i.header?i.Header+": "+a:a,isPivotGroup:!0,parent:n,depth:t,id:n?n.id+"."+i.id+"."+a:i.id+"."+a,pivotValue:a});return s.columns=e(t+1,s,[].concat(r,[function(e){return e.values[i.id]===a}])),s})):s.map((function(e){return o({},e,{canPivot:!1,isPivoted:!0,parent:n,depth:t,id:""+(n?n.id+"."+e.id:e.id),accessor:function(t,n,i){if(r.every((function(e){return e(i)})))return i.values[e.id]}})}))}());return[].concat(e,l)}function dt(e,t){var n=t.instance.state,r=n.pivotColumns,i=n.groupBy;return[].concat(e,[r,i])}function pt(e,t){var n=t.instance.state;return e=e.filter((function(e){return!e.isPivotSource})),n.pivotColumns.length&&n.groupBy&&n.groupBy.length&&(e=e.filter((function(e){return e.isGrouped||e.isPivoted}))),e}function ft(e,t){var n=t.instance;return[].concat(e,[n.state.pivotColumns,n.state.groupBy])}function mt(e){var t=e.columns,n=e.allColumns,r=e.flatHeaders,i=e.getHooks,o=e.plugins,a=e.dispatch,s=e.autoResetPivot,c=void 0===s||s,u=e.manaulPivot,d=e.disablePivot,p=e.defaultCanPivot;g(o,["useGroupBy"],"usePivotColumns");var m=y(e);n.forEach((function(t){var n=t.accessor,r=t.defaultPivot,i=t.disablePivot;t.canPivot=n?R(t.canPivot,!0!==i&&void 0,!0!==d&&void 0,!0):R(t.canPivot,r,p,!1),t.canPivot&&(t.togglePivot=function(){return e.togglePivot(t.id)}),t.Aggregated=t.Aggregated||t.Cell})),r.forEach((function(e){e.getPivotToggleProps=f(i().getPivotToggleProps,{instance:m(),header:e})}));var h=y(c);v((function(){h()&&a({type:l.resetPivot})}),[a,u?null:t]),Object.assign(e,{togglePivot:function(e,t){a({type:l.togglePivot,columnId:e,value:t})}})}function ht(e){e.allCells.forEach((function(e){e.isPivoted=e.column.isPivoted}))}l.resetSelectedRows="resetSelectedRows",l.toggleAllRowsSelected="toggleAllRowsSelected",l.toggleRowSelected="toggleRowSelected",l.toggleAllPageRowsSelected="toggleAllPageRowsSelected";var gt=function(e){e.getToggleRowSelectedProps=[xt],e.getToggleAllRowsSelectedProps=[yt],e.getToggleAllPageRowsSelectedProps=[bt],e.stateReducers.push(vt),e.useInstance.push(wt),e.prepareRow.push(kt)};gt.pluginName="useRowSelect";var xt=function(e,t){var n=t.instance,r=t.row,i=n.manualRowSelectedKey,o=void 0===i?"isSelected":i;return[e,{onChange:function(e){r.toggleRowSelected(e.target.checked)},style:{cursor:"pointer"},checked:!(!r.original||!r.original[o])||r.isSelected,title:"Toggle Row Selected",indeterminate:r.isSomeSelected}]},yt=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleAllRowsSelected(e.target.checked)},style:{cursor:"pointer"},checked:n.isAllRowsSelected,title:"Toggle All Rows Selected",indeterminate:Boolean(!n.isAllRowsSelected&&Object.keys(n.state.selectedRowIds).length)}]},bt=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleAllPageRowsSelected(e.target.checked)},style:{cursor:"pointer"},checked:n.isAllPageRowsSelected,title:"Toggle All Current Page Rows Selected",indeterminate:Boolean(!n.isAllPageRowsSelected&&n.page.some((function(e){var t=e.id;return n.state.selectedRowIds[t]})))}]};function vt(e,t,n,r){if(t.type===l.init)return o({selectedRowIds:{}},e);if(t.type===l.resetSelectedRows)return o({},e,{selectedRowIds:r.initialState.selectedRowIds||{}});if(t.type===l.toggleAllRowsSelected){var i=t.value,a=r.isAllRowsSelected,s=r.rowsById,c=r.nonGroupedRowsById,u=void 0===c?s:c,d=void 0!==i?i:!a,p=Object.assign({},e.selectedRowIds);return d?Object.keys(u).forEach((function(e){p[e]=!0})):Object.keys(u).forEach((function(e){delete p[e]})),o({},e,{selectedRowIds:p})}if(t.type===l.toggleRowSelected){var f=t.id,m=t.value,h=r.rowsById,g=r.selectSubRows,x=void 0===g||g,y=r.getSubRows,b=e.selectedRowIds[f],v=void 0!==m?m:!b;if(b===v)return e;var w=o({},e.selectedRowIds);return function e(t){var n=h[t];if(n&&(n.isGrouped||(v?w[t]=!0:delete w[t]),x&&y(n)))return y(n).forEach((function(t){return e(t.id)}))}(f),o({},e,{selectedRowIds:w})}if(t.type===l.toggleAllPageRowsSelected){var k=t.value,S=r.page,A=r.rowsById,j=r.selectSubRows,C=void 0===j||j,E=r.isAllPageRowsSelected,P=r.getSubRows,R=void 0!==k?k:!E,O=o({},e.selectedRowIds);return S.forEach((function(e){return function e(t){var n=A[t];if(n.isGrouped||(R?O[t]=!0:delete O[t]),C&&P(n))return P(n).forEach((function(t){return e(t.id)}))}(e.id)})),o({},e,{selectedRowIds:O})}return e}function wt(e){var n=e.data,r=e.rows,i=e.getHooks,o=e.plugins,a=e.rowsById,s=e.nonGroupedRowsById,c=void 0===s?a:s,u=e.autoResetSelectedRows,d=void 0===u||u,p=e.state.selectedRowIds,m=e.selectSubRows,h=void 0===m||m,x=e.dispatch,b=e.page,w=e.getSubRows;g(o,["useFilters","useGroupBy","useSortBy","useExpanded","usePagination"],"useRowSelect");var k=t.useMemo((function(){var e=[];return r.forEach((function(t){var n=h?function e(t,n,r){if(n[t.id])return!0;var i=r(t);if(i&&i.length){var o=!0,a=!1;return i.forEach((function(t){a&&!o||(e(t,n,r)?a=!0:o=!1)})),!!o||!!a&&null}return!1}(t,p,w):!!p[t.id];t.isSelected=!!n,t.isSomeSelected=null===n,n&&e.push(t)})),e}),[r,h,p,w]),S=Boolean(Object.keys(c).length&&Object.keys(p).length),A=S;S&&Object.keys(c).some((function(e){return!p[e]}))&&(S=!1),S||b&&b.length&&b.some((function(e){var t=e.id;return!p[t]}))&&(A=!1);var j=y(d);v((function(){j()&&x({type:l.resetSelectedRows})}),[x,n]);var C=t.useCallback((function(e){return x({type:l.toggleAllRowsSelected,value:e})}),[x]),E=t.useCallback((function(e){return x({type:l.toggleAllPageRowsSelected,value:e})}),[x]),P=t.useCallback((function(e,t){return x({type:l.toggleRowSelected,id:e,value:t})}),[x]),R=y(e),O=f(i().getToggleAllRowsSelectedProps,{instance:R()}),T=f(i().getToggleAllPageRowsSelectedProps,{instance:R()});Object.assign(e,{selectedFlatRows:k,isAllRowsSelected:S,isAllPageRowsSelected:A,toggleRowSelected:P,toggleAllRowsSelected:C,getToggleAllRowsSelectedProps:O,getToggleAllPageRowsSelectedProps:T,toggleAllPageRowsSelected:E})}function kt(e,t){var n=t.instance;e.toggleRowSelected=function(t){return n.toggleRowSelected(e.id,t)},e.getToggleRowSelectedProps=f(n.getHooks().getToggleRowSelectedProps,{instance:n,row:e})}var St=function(e){return{}},At=function(e){return{}};l.setRowState="setRowState",l.setCellState="setCellState",l.resetRowState="resetRowState";var jt=function(e){e.stateReducers.push(Ct),e.useInstance.push(Et),e.prepareRow.push(Pt)};function Ct(e,t,n,r){var i=r.initialRowStateAccessor,a=void 0===i?St:i,s=r.initialCellStateAccessor,c=void 0===s?At:s,u=r.rowsById;if(t.type===l.init)return o({rowState:{}},e);if(t.type===l.resetRowState)return o({},e,{rowState:r.initialState.rowState||{}});if(t.type===l.setRowState){var d,p=t.rowId,f=t.value,m=void 0!==e.rowState[p]?e.rowState[p]:a(u[p]);return o({},e,{rowState:o({},e.rowState,(d={},d[p]=x(f,m),d))})}if(t.type===l.setCellState){var h,g,y,b,v,w=t.rowId,k=t.columnId,S=t.value,A=void 0!==e.rowState[w]?e.rowState[w]:a(u[w]),j=void 0!==(null==A||null==(h=A.cellState)?void 0:h[k])?A.cellState[k]:c(null==(g=u[w])||null==(y=g.cells)?void 0:y.find((function(e){return e.column.id===k})));return o({},e,{rowState:o({},e.rowState,(v={},v[w]=o({},A,{cellState:o({},A.cellState||{},(b={},b[k]=x(S,j),b))}),v))})}}function Et(e){var n=e.autoResetRowState,r=void 0===n||n,i=e.data,o=e.dispatch,a=t.useCallback((function(e,t){return o({type:l.setRowState,rowId:e,value:t})}),[o]),s=t.useCallback((function(e,t,n){return o({type:l.setCellState,rowId:e,columnId:t,value:n})}),[o]),c=y(r);v((function(){c()&&o({type:l.resetRowState})}),[i]),Object.assign(e,{setRowState:a,setCellState:s})}function Pt(e,t){var n=t.instance,r=n.initialRowStateAccessor,i=void 0===r?St:r,o=n.initialCellStateAccessor,a=void 0===o?At:o,s=n.state.rowState;e&&(e.state=void 0!==s[e.id]?s[e.id]:i(e),e.setState=function(t){return n.setRowState(e.id,t)},e.cells.forEach((function(t){e.state.cellState||(e.state.cellState={}),t.state=void 0!==e.state.cellState[t.column.id]?e.state.cellState[t.column.id]:a(t),t.setState=function(r){return n.setCellState(e.id,t.column.id,r)}})))}jt.pluginName="useRowState",l.resetColumnOrder="resetColumnOrder",l.setColumnOrder="setColumnOrder";var Rt=function(e){e.stateReducers.push(Ot),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.columnOrder])})),e.visibleColumns.push(Tt),e.useInstance.push(Mt)};function Ot(e,t,n,r){return t.type===l.init?o({columnOrder:[]},e):t.type===l.resetColumnOrder?o({},e,{columnOrder:r.initialState.columnOrder||[]}):t.type===l.setColumnOrder?o({},e,{columnOrder:x(t.columnOrder,e.columnOrder)}):void 0}function Tt(e,t){var n=t.instance.state.columnOrder;if(!n||!n.length)return e;for(var r=[].concat(n),i=[].concat(e),o=[],a=function(){var e=r.shift(),t=i.findIndex((function(t){return t.id===e}));t>-1&&o.push(i.splice(t,1)[0])};i.length&&r.length;)a();return[].concat(o,i)}function Mt(e){var n=e.dispatch;e.setColumnOrder=t.useCallback((function(e){return n({type:l.setColumnOrder,columnOrder:e})}),[n])}Rt.pluginName="useColumnOrder",d.canResize=!0,l.columnStartResizing="columnStartResizing",l.columnResizing="columnResizing",l.columnDoneResizing="columnDoneResizing",l.resetResize="resetResize";var zt=function(e){e.getResizerProps=[It],e.getHeaderProps.push({style:{position:"relative"}}),e.stateReducers.push(Lt),e.useInstance.push(Ft),e.useInstanceBeforeDimensions.push(Dt)},It=function(e,t){var n=t.instance,r=t.header,i=n.dispatch,o=function(e,t){var n=!1;if("touchstart"===e.type){if(e.touches&&e.touches.length>1)return;n=!0}var r,o,a=function(e){var t=[];return function e(n){n.columns&&n.columns.length&&n.columns.map(e),t.push(n)}(e),t}(t).map((function(e){return[e.id,e.totalWidth]})),s=n?Math.round(e.touches[0].clientX):e.clientX,c=function(){window.cancelAnimationFrame(r),r=null,i({type:l.columnDoneResizing})},u=function(){window.cancelAnimationFrame(r),r=null,i({type:l.columnResizing,clientX:o})},d=function(e){o=e,r||(r=window.requestAnimationFrame(u))},p={mouse:{moveEvent:"mousemove",moveHandler:function(e){return d(e.clientX)},upEvent:"mouseup",upHandler:function(e){document.removeEventListener("mousemove",p.mouse.moveHandler),document.removeEventListener("mouseup",p.mouse.upHandler),c()}},touch:{moveEvent:"touchmove",moveHandler:function(e){return e.cancelable&&(e.preventDefault(),e.stopPropagation()),d(e.touches[0].clientX),!1},upEvent:"touchend",upHandler:function(e){document.removeEventListener(p.touch.moveEvent,p.touch.moveHandler),document.removeEventListener(p.touch.upEvent,p.touch.moveHandler),c()}}},f=n?p.touch:p.mouse,m=!!function(){if("boolean"==typeof D)return D;var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){e=!1}return D=e}()&&{passive:!1};document.addEventListener(f.moveEvent,f.moveHandler,m),document.addEventListener(f.upEvent,f.upHandler,m),i({type:l.columnStartResizing,columnId:t.id,columnWidth:t.totalWidth,headerIdWidths:a,clientX:s})};return[e,{onMouseDown:function(e){return e.persist()||o(e,r)},onTouchStart:function(e){return e.persist()||o(e,r)},style:{cursor:"col-resize"},draggable:!1,role:"separator"}]};function Lt(e,t){if(t.type===l.init)return o({columnResizing:{columnWidths:{}}},e);if(t.type===l.resetResize)return o({},e,{columnResizing:{columnWidths:{}}});if(t.type===l.columnStartResizing){var n=t.clientX,r=t.columnId,i=t.columnWidth,a=t.headerIdWidths;return o({},e,{columnResizing:o({},e.columnResizing,{startX:n,headerIdWidths:a,columnWidth:i,isResizingColumn:r})})}if(t.type===l.columnResizing){var s=t.clientX,c=e.columnResizing,u=c.startX,d=c.columnWidth,p=c.headerIdWidths,f=(s-u)/d,m={};return(void 0===p?[]:p).forEach((function(e){var t=e[0],n=e[1];m[t]=Math.max(n+n*f,0)})),o({},e,{columnResizing:o({},e.columnResizing,{columnWidths:o({},e.columnResizing.columnWidths,{},m)})})}return t.type===l.columnDoneResizing?o({},e,{columnResizing:o({},e.columnResizing,{startX:null,isResizingColumn:null})}):void 0}zt.pluginName="useResizeColumns";var Dt=function(e){var t=e.flatHeaders,n=e.disableResizing,r=e.getHooks,i=e.state.columnResizing,o=y(e);t.forEach((function(e){var t=R(!0!==e.disableResizing&&void 0,!0!==n&&void 0,!0);e.canResize=t,e.width=i.columnWidths[e.id]||e.originalWidth||e.width,e.isResizing=i.isResizingColumn===e.id,t&&(e.getResizerProps=f(r().getResizerProps,{instance:o(),header:e}))}))};function Ft(e){var n=e.plugins,r=e.dispatch,i=e.autoResetResize,o=void 0===i||i,a=e.columns;g(n,["useAbsoluteLayout"],"useResizeColumns");var s=y(o);v((function(){s()&&r({type:l.resetResize})}),[a]);var c=t.useCallback((function(){return r({type:l.resetResize})}),[r]);Object.assign(e,{resetResizing:c})}var Nt={position:"absolute",top:0},Bt=function(e){e.getTableBodyProps.push(_t),e.getRowProps.push(_t),e.getHeaderGroupProps.push(_t),e.getFooterGroupProps.push(_t),e.getHeaderProps.push((function(e,t){var n=t.column;return[e,{style:o({},Nt,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return[e,{style:o({},Nt,{left:n.column.totalLeft+"px",width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return[e,{style:o({},Nt,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]}))};Bt.pluginName="useAbsoluteLayout";var _t=function(e,t){return[e,{style:{position:"relative",width:t.instance.totalColumnsWidth+"px"}}]},Ut={display:"inline-block",boxSizing:"border-box"},Ht=function(e,t){return[e,{style:{display:"flex",width:t.instance.totalColumnsWidth+"px"}}]},Wt=function(e){e.getRowProps.push(Ht),e.getHeaderGroupProps.push(Ht),e.getFooterGroupProps.push(Ht),e.getHeaderProps.push((function(e,t){var n=t.column;return[e,{style:o({},Ut,{width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return[e,{style:o({},Ut,{width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return[e,{style:o({},Ut,{width:n.totalWidth+"px"})}]}))};function qt(e){e.getTableProps.push(Gt),e.getRowProps.push(Vt),e.getHeaderGroupProps.push(Vt),e.getFooterGroupProps.push(Vt),e.getHeaderProps.push(Kt),e.getCellProps.push(Jt),e.getFooterProps.push(Yt)}Wt.pluginName="useBlockLayout",qt.pluginName="useFlexLayout";var Gt=function(e,t){return[e,{style:{minWidth:t.instance.totalColumnsMinWidth+"px"}}]},Vt=function(e,t){return[e,{style:{display:"flex",flex:"1 0 auto",minWidth:t.instance.totalColumnsMinWidth+"px"}}]},Kt=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]},Jt=function(e,t){var n=t.cell;return[e,{style:{boxSizing:"border-box",flex:n.column.totalFlexWidth+" 0 auto",minWidth:n.column.totalMinWidth+"px",width:n.column.totalWidth+"px"}}]},Yt=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]};function Qt(e){e.stateReducers.push(en),e.getTableProps.push(Zt),e.getHeaderProps.push(Xt),e.getRowProps.push($t)}l.columnStartResizing="columnStartResizing",l.columnResizing="columnResizing",l.columnDoneResizing="columnDoneResizing",l.resetResize="resetResize",Qt.pluginName="useGridLayout";var Zt=function(e,t){var n=t.instance;return[e,{style:{display:"grid",gridTemplateColumns:n.visibleColumns.map((function(e){var t;return n.state.gridLayout.columnWidths[e.id]?n.state.gridLayout.columnWidths[e.id]+"px":(null==(t=n.state.columnResizing)?void 0:t.isResizingColumn)?n.state.gridLayout.startWidths[e.id]+"px":"number"==typeof e.width?e.width+"px":e.width})).join(" ")}}]},Xt=function(e,t){var n=t.column;return[e,{id:"header-cell-"+n.id,style:{position:"sticky",gridColumn:"span "+n.totalVisibleHeaderCount}}]},$t=function(e,t){var n=t.row;return n.isExpanded?[e,{style:{gridColumn:"1 / "+(n.cells.length+1)}}]:[e,{}]};function en(e,t,n,r){if(t.type===l.init)return o({gridLayout:{columnWidths:{}}},e);if(t.type===l.resetResize)return o({},e,{gridLayout:{columnWidths:{}}});if(t.type===l.columnStartResizing){var i=t.columnId,a=t.headerIdWidths,s=tn(i);if(void 0!==s){var c=r.visibleColumns.reduce((function(e,t){var n;return o({},e,((n={})[t.id]=tn(t.id),n))}),{}),u=r.visibleColumns.reduce((function(e,t){var n;return o({},e,((n={})[t.id]=t.minWidth,n))}),{}),d=r.visibleColumns.reduce((function(e,t){var n;return o({},e,((n={})[t.id]=t.maxWidth,n))}),{}),p=a.map((function(e){var t=e[0];return[t,tn(t)]}));return o({},e,{gridLayout:o({},e.gridLayout,{startWidths:c,minWidths:u,maxWidths:d,headerIdGridWidths:p,columnWidth:s})})}return e}if(t.type===l.columnResizing){var f=t.clientX,m=e.columnResizing.startX,h=e.gridLayout,g=h.columnWidth,x=h.minWidths,y=h.maxWidths,b=h.headerIdGridWidths,v=(f-m)/g,w={};return(void 0===b?[]:b).forEach((function(e){var t=e[0],n=e[1];w[t]=Math.min(Math.max(x[t],n+n*v),y[t])})),o({},e,{gridLayout:o({},e.gridLayout,{columnWidths:o({},e.gridLayout.columnWidths,{},w)})})}return t.type===l.columnDoneResizing?o({},e,{gridLayout:o({},e.gridLayout,{startWidths:{},minWidths:{},maxWidths:{}})}):void 0}function tn(e){var t,n=null==(t=document.getElementById("header-cell-"+e))?void 0:t.offsetWidth;if(void 0!==n)return n}e._UNSTABLE_usePivotColumns=rt,e.actions=l,e.defaultColumn=d,e.defaultGroupByFn=We,e.defaultOrderByFn=$e,e.defaultRenderer=c,e.emptyRenderer=u,e.ensurePluginOrder=g,e.flexRender=k,e.functionalUpdate=x,e.loopHooks=h,e.makePropGetter=f,e.makeRenderer=w,e.reduceHooks=m,e.safeUseLayoutEffect=b,e.useAbsoluteLayout=Bt,e.useAsyncDebounce=function(e,n){void 0===n&&(n=0);var o=t.useRef({}),a=y(e),s=y(n);return t.useCallback(function(){var e=i(r.mark((function e(){var t,n,l,c=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=c.length,n=new Array(t),l=0;l<t;l++)n[l]=c[l];return o.current.promise||(o.current.promise=new Promise((function(e,t){o.current.resolve=e,o.current.reject=t}))),o.current.timeout&&clearTimeout(o.current.timeout),o.current.timeout=setTimeout(i(r.mark((function e(){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete o.current.timeout,e.prev=1,e.t0=o.current,e.next=5,a().apply(void 0,n);case 5:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),o.current.reject(e.t2);case 12:return e.prev=12,delete o.current.promise,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])}))),s()),e.abrupt("return",o.current.promise);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),[a,s])},e.useBlockLayout=Wt,e.useColumnOrder=Rt,e.useExpanded=ce,e.useFilters=Ce,e.useFlexLayout=qt,e.useGetLatest=y,e.useGlobalFilter=Re,e.useGridLayout=Qt,e.useGroupBy=De,e.useMountedLayoutEffect=v,e.usePagination=et,e.useResizeColumns=zt,e.useRowSelect=gt,e.useRowState=jt,e.useSortBy=Ye,e.useTable=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];e=ae(e),r=[J].concat(r);var a=y(t.useRef({}).current);Object.assign(a(),o({},e,{plugins:r,hooks:K()})),r.filter(Boolean).forEach((function(e){e(a().hooks)}));var s=y(a().hooks);a().getHooks=s,delete a().hooks,Object.assign(a(),m(s().useOptions,ae(e)));var c=a(),u=c.data,d=c.columns,p=c.initialState,g=c.defaultColumn,x=c.getSubRows,b=c.getRowId,v=c.stateReducer,k=c.useControlledState,P=y(v),R=t.useCallback((function(e,t){if(!t.type)throw console.info({action:t}),new Error("Unknown Action \ud83d\udc46");return[].concat(s().stateReducers,Array.isArray(P())?P():[P()]).reduce((function(n,r){return r(n,t,e,a())||n}),e)}),[s,P,a]),O=t.useReducer(R,void 0,(function(){return R(p,{type:l.init})})),T=O[0],M=O[1],z=m([].concat(s().useControlledState,[k]),T,{instance:a()});Object.assign(a(),{state:z,dispatch:M});var I=t.useMemo((function(){return S(m(s().columns,d,{instance:a()}))}),[s,a,d].concat(m(s().columnsDeps,[],{instance:a()})));a().columns=I;var L=t.useMemo((function(){return m(s().allColumns,A(I),{instance:a()}).map(j)}),[I,s,a].concat(m(s().allColumnsDeps,[],{instance:a()})));a().allColumns=L;var D=t.useMemo((function(){for(var e=[],t=[],n={},r=[].concat(L);r.length;){var i=r.shift();le({data:u,rows:e,flatRows:t,rowsById:n,column:i,getRowId:b,getSubRows:x,accessValueHooks:s().accessValue,getInstance:a})}return[e,t,n]}),[L,u,b,x,s,a]),F=D[0],N=D[1],B=D[2];Object.assign(a(),{rows:F,initialRows:[].concat(F),flatRows:N,rowsById:B}),h(s().useInstanceAfterData,a());var _=t.useMemo((function(){return m(s().visibleColumns,L,{instance:a()}).map((function(e){return C(e,g)}))}),[s,L,a,g].concat(m(s().visibleColumnsDeps,[],{instance:a()})));L=t.useMemo((function(){var e=[].concat(_);return L.forEach((function(t){e.find((function(e){return e.id===t.id}))||e.push(t)})),e}),[L,_]),a().allColumns=L;var U=t.useMemo((function(){return m(s().headerGroups,E(_,g),a())}),[s,_,g,a].concat(m(s().headerGroupsDeps,[],{instance:a()})));a().headerGroups=U;var H=t.useMemo((function(){return U.length?U[0].headers:[]}),[U]);a().headers=H,a().flatHeaders=U.reduce((function(e,t){return[].concat(e,t.headers)}),[]),h(s().useInstanceBeforeDimensions,a());var W=_.filter((function(e){return e.isVisible})).map((function(e){return e.id})).sort().join("_");_=t.useMemo((function(){return _.filter((function(e){return e.isVisible}))}),[_,W]),a().visibleColumns=_;var q=se(H),G=q[0],V=q[1],Y=q[2];return a().totalColumnsMinWidth=G,a().totalColumnsWidth=V,a().totalColumnsMaxWidth=Y,h(s().useInstance,a()),[].concat(a().flatHeaders,a().allColumns).forEach((function(e){e.render=w(a(),e),e.getHeaderProps=f(s().getHeaderProps,{instance:a(),column:e}),e.getFooterProps=f(s().getFooterProps,{instance:a(),column:e})})),a().headerGroups=t.useMemo((function(){return U.filter((function(e,t){return e.headers=e.headers.filter((function(e){return e.headers?function e(t){return t.filter((function(t){return t.headers?e(t.headers):t.isVisible})).length}(e.headers):e.isVisible})),!!e.headers.length&&(e.getHeaderGroupProps=f(s().getHeaderGroupProps,{instance:a(),headerGroup:e,index:t}),e.getFooterGroupProps=f(s().getFooterGroupProps,{instance:a(),headerGroup:e,index:t}),!0)}))}),[U,a,s]),a().footerGroups=[].concat(a().headerGroups).reverse(),a().prepareRow=t.useCallback((function(e){e.getRowProps=f(s().getRowProps,{instance:a(),row:e}),e.allCells=L.map((function(t){var n=e.values[t.id],r={column:t,row:e,value:n};return r.getCellProps=f(s().getCellProps,{instance:a(),cell:r}),r.render=w(a(),t,{row:e,cell:r,value:n}),r})),e.cells=_.map((function(t){return e.allCells.find((function(e){return e.column.id===t.id}))})),h(s().prepareRow,e,{instance:a()})}),[s,a,L,_]),a().getTableProps=f(s().getTableProps,{instance:a()}),a().getTableBodyProps=f(s().getTableBodyProps,{instance:a()}),h(s().useFinalInstance,a()),a()},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(5043))},1094:(e,t,n)=>{e.exports=n(3310)},1153:(e,t,n)=>{"use strict";var r=n(5043),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=x.prototype;var v=b.prototype=new y;v.constructor=b,h(v,x.prototype),v.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,i)&&!A.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+P(l,0):o,w(a)?(i="",null!=e&&(i=e.replace(E,"$&/")+"/"),R(a,t,i,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+P(s=e[c],c);l+=R(s,t,i,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=R(s=s.value,t,i,u=o+P(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,n){if(null==e)return e;var r=[],i=0;return R(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},z={transition:null},I={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:z,ReactCurrentOwner:S};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=i,t.Profiler=a,t.PureComponent=b,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=h({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!A.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return M.current.useCallback(e,t)},t.useContext=function(e){return M.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return M.current.useDeferredValue(e)},t.useEffect=function(e,t){return M.current.useEffect(e,t)},t.useId=function(){return M.current.useId()},t.useImperativeHandle=function(e,t,n){return M.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return M.current.useMemo(e,t)},t.useReducer=function(e,t,n){return M.current.useReducer(e,t,n)},t.useRef=function(e){return M.current.useRef(e)},t.useState=function(e){return M.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return M.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return M.current.useTransition()},t.version="18.3.1"},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},579:(e,t,n)=>{"use strict";e.exports=n(1153)},5820:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var r=function(){if("undefined"!==typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),i="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,o="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),a="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],l="undefined"!==typeof MutationObserver,c=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&l()}function s(){a(o)}function l(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=e}return l}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),l?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;s.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),u=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},d=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||o},p=y(0,0,0,0);function f(e){return parseFloat(e)||0}function m(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+f(e["border-"+n+"-width"])}),0)}function h(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var r=d(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=f(o)}return t}(r),o=i.left+i.right,a=i.top+i.bottom,s=f(r.width),l=f(r.height);if("border-box"===r.boxSizing&&(Math.round(s+o)!==t&&(s-=m(r,"left","right")+o),Math.round(l+a)!==n&&(l-=m(r,"top","bottom")+a)),!function(e){return e===d(e).document.documentElement}(e)){var c=Math.round(s+o)-t,u=Math.round(l+a)-n;1!==Math.abs(c)&&(s-=c),1!==Math.abs(u)&&(l-=u)}return y(i.left,i.top,s,l)}var g="undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof d(e).SVGGraphicsElement}:function(e){return e instanceof d(e).SVGElement&&"function"===typeof e.getBBox};function x(e){return i?g(e)?function(e){var t=e.getBBox();return y(0,0,t.width,t.height)}(e):h(e):p}function y(e,t,n,r){return{x:e,y:t,width:n,height:r}}var b=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=x(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),v=function(e,t){var n=function(e){var t=e.x,n=e.y,r=e.width,i=e.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(o.prototype);return u(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}(t);u(this,{target:e,contentRect:n})},w=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new b(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new v(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),k="undefined"!==typeof WeakMap?new WeakMap:new r,S=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),r=new w(t,n,this);k.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){S.prototype[e]=function(){var t;return(t=k.get(this))[e].apply(t,arguments)}}));const A="undefined"!==typeof o.ResizeObserver?o.ResizeObserver:S},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,f=3,m=!1,h=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function v(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,v(e),!h)if(null!==r(c))h=!0,z(k);else{var t=r(u);null!==t&&I(w,t.startTime-e)}}function k(e,n){h=!1,g&&(g=!1,y(C),C=-1),m=!0;var o=f;try{for(v(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!R());){var a=p.callback;if("function"===typeof a){p.callback=null,f=p.priorityLevel;var s=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&i(c),v(n)}else i(c);p=r(c)}if(null!==p)var l=!0;else{var d=r(u);null!==d&&I(w,d.startTime-n),l=!1}return l}finally{p=null,f=o,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,A=!1,j=null,C=-1,E=5,P=-1;function R(){return!(t.unstable_now()-P<E)}function O(){if(null!==j){var e=t.unstable_now();P=e;var n=!0;try{n=j(!0,e)}finally{n?S():(A=!1,j=null)}}else A=!1}if("function"===typeof b)S=function(){b(O)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,M=T.port2;T.port1.onmessage=O,S=function(){M.postMessage(null)}}else S=function(){x(O,0)};function z(e){j=e,A||(A=!0,S())}function I(e,n){C=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,z(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(y(C),C=-1):g=!0,I(w,o-a))):(e.sortIndex=s,n(c,e),h||m||(h=!0,z(k))),e},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},7324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},7475:e=>{e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},4222:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(4403));t.default=function(e,t){var n=null;if(!e||"string"!==typeof e)return n;var r=(0,i.default)(e),o="function"===typeof t;return r.forEach((function(e){if("declaration"===e.type){var r=e.property,i=e.value;o?t(r,i,e):i&&((n=n||{})[r]=i)}})),n}},8178:function(e){e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}e.r(t),e.d(t,{default:()=>s});var r=encodeURIComponent;function i(e,t,i,o,s){var l=o&&s.arrayPrefix||"";if("object"===n(t)){var c="".concat(e).concat(l).concat(i&&"]","[");return"".concat(a(t,"".concat(i).concat(c),s))}return i&&i.length?"".concat(i).concat(e,"]").concat(l,"=").concat(r(t)):"".concat(e).concat(l,"=").concat(r(t))}function o(e,t,n,r){return t.map((function(t){return i(e,t,n,!0,r)})).join("&")}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(Array.isArray(e)?e.map((function(e,r){return i("".concat(r),e,t,!0,n)})):Object.keys(e).filter((function(t){return void 0!==e[t]})).map((function(r){return e[r]&&Array.isArray(e[r])?o("".concat(r),e[r],t,n):i(r,e[r],t,!1,n)}))).join("&").replace(/%20/g,"+")}const s=a;return t})()},6440:e=>{"use strict";var t=function(){};e.exports=t},4633:(e,t,n)=>{var r=n(3738).default;function i(){"use strict";e.exports=i=function(){return n},e.exports.__esModule=!0,e.exports.default=e.exports;var t,n={},o=Object.prototype,a=o.hasOwnProperty,s=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",d=l.toStringTag||"@@toStringTag";function p(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(t){p=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),a=new z(r||[]);return s(o,"_invoke",{value:R(e,n,a)}),o}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var h="suspendedStart",g="suspendedYield",x="executing",y="completed",b={};function v(){}function w(){}function k(){}var S={};p(S,c,(function(){return this}));var A=Object.getPrototypeOf,j=A&&A(A(I([])));j&&j!==o&&a.call(j,c)&&(S=j);var C=k.prototype=v.prototype=Object.create(S);function E(e){["next","throw","return"].forEach((function(t){p(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function n(i,o,s,l){var c=m(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==r(d)&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,s,l)}),(function(e){n("throw",e,s,l)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,l)}))}l(c.arg)}var i;s(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}})}function R(e,n,r){var i=h;return function(o,a){if(i===x)throw Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var l=O(s,r);if(l){if(l===b)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===h)throw i=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=x;var c=m(e,n,r);if("normal"===c.type){if(i=r.done?y:g,c.arg===b)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i=y,r.method="throw",r.arg=c.arg)}}}function O(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var o=m(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,b;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(a.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(r(e)+" is not iterable")}return w.prototype=k,s(C,"constructor",{value:k,configurable:!0}),s(k,"constructor",{value:w,configurable:!0}),w.displayName=p(k,d,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,p(e,d,"GeneratorFunction")),e.prototype=Object.create(C),e},n.awrap=function(e){return{__await:e}},E(P.prototype),p(P.prototype,u,(function(){return this})),n.AsyncIterator=P,n.async=function(e,t,r,i,o){void 0===o&&(o=Promise);var a=new P(f(e,t,r,i),o);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(C),p(C,d,"Generator"),p(C,c,(function(){return this})),p(C,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=I,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;M(n)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),b}},n}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},3738:e=>{function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4756:(e,t,n)=>{var r=n(4633)();e.exports=r;try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},8139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,o(n)))}return e}function o(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".7ec37918.chunk.js",n.miniCssF=e=>{},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="ipouterpage:";n.l=(r,i,o,a)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[i];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=o);var a=n.p+n.u(t),s=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,o,a=r[0],s=r[1],l=r[2],c=0;if(a.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)l(n)}for(t&&t(r);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkipouterpage=self.webpackChunkipouterpage||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>Tl,hasStandardBrowserEnv:()=>zl,hasStandardBrowserWebWorkerEnv:()=>Il,navigator:()=>Ml,origin:()=>Ll});var t={};n.r(t),n.d(t,{boolean:()=>gg,booleanish:()=>xg,commaOrSpaceSeparated:()=>kg,commaSeparated:()=>wg,number:()=>bg,overloadedBoolean:()=>yg,spaceSeparated:()=>vg});var r={};n.r(r),n.d(r,{attentionMarkers:()=>tb,contentInitial:()=>Yy,disable:()=>nb,document:()=>Jy,flow:()=>Zy,flowInitial:()=>Qy,insideSpan:()=>eb,string:()=>Xy,text:()=>$y});var i=n(5043),o=n.t(i,2),a=n(4391),s=n(8139),l=n.n(s);const c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},u=i.createContext(null);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(null,arguments)}function p(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}n(2740);function f(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function m(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function h(e,t){return Object.keys(t).reduce((function(n,r){var o,a=n,s=a[f(r)],l=a[r],c=p(a,[f(r),r].map(m)),u=t[r],h=function(e,t,n){var r=(0,i.useRef)(void 0!==e),o=(0,i.useState)(t),a=o[0],s=o[1],l=void 0!==e,c=r.current;return r.current=l,!l&&c&&a!==t&&s(t),[l?e:a,(0,i.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(l,s,e[u]),g=h[0],x=h[1];return d({},c,((o={})[r]=g,o[u]=x,o))}),e)}n(5484);var g=n(579);const x=["xxl","xl","lg","md","sm","xs"],y="xs",b=i.createContext({prefixes:{},breakpoints:x,minBreakpoint:y}),{Consumer:v,Provider:w}=b;function k(e,t){const{prefixes:n}=(0,i.useContext)(b);return e||n[t]||t}function S(){const{breakpoints:e}=(0,i.useContext)(b);return e}function A(){const{minBreakpoint:e}=(0,i.useContext)(b);return e}const j=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:i,...o}=e;n=k(n,"navbar-brand");const a=i||(o.href?"a":"span");return(0,g.jsx)(a,{...o,ref:t,className:l()(r,n)})}));j.displayName="NavbarBrand";const C=j;function E(e){return e&&e.ownerDocument||document}function P(e,t){return function(e){var t=E(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var R=/([A-Z])/g;var O=/^ms-/;function T(e){return function(e){return e.replace(R,"-$1").toLowerCase()}(e).replace(O,"-ms-")}var M=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const z=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(T(t))||P(e).getPropertyValue(T(t));Object.keys(t).forEach((function(i){var o=t[i];o||0===o?!function(e){return!(!e||!M.test(e))}(i)?n+=T(i)+": "+o+";":r+=i+"("+o+") ":e.style.removeProperty(T(i))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}var L=n(7950),D=n.t(L,2);const F=!1,N=i.createContext(null);var B="unmounted",_="exited",U="entering",H="entered",W="exiting",q=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var i,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(i=_,r.appearStatus=U):i=H:i=t.unmountOnExit||t.mountOnEnter?B:_,r.state={status:i},r.nextCallback=null,r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,I(e,t)}(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===B?{status:_}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==U&&n!==H&&(t=U):n!==U&&n!==H||(t=W)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===U){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===_&&this.setState({status:B})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[L.findDOMNode(this),r],o=i[0],a=i[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!e&&!n||F?this.safeSetState({status:H},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,a),this.safeSetState({status:U},(function(){t.props.onEntering(o,a),t.onTransitionEnd(l,(function(){t.safeSetState({status:H},(function(){t.props.onEntered(o,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:L.findDOMNode(this);t&&!F?(this.props.onExit(r),this.safeSetState({status:W},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:_},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:_},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=i[0],a=i[1];this.props.addEndListener(o,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===B)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,p(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(N.Provider,{value:null},"function"===typeof n?n(e,r):i.cloneElement(i.Children.only(n),r))},t}(i.Component);function G(){}q.contextType=N,q.propTypes={},q.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:G,onEntering:G,onEntered:G,onExit:G,onExiting:G,onExited:G},q.UNMOUNTED=B,q.EXITED=_,q.ENTERING=U,q.ENTERED=H,q.EXITING=W;const V=q,K=!("undefined"===typeof window||!window.document||!window.document.createElement);var J=!1,Y=!1;try{var Q={get passive(){return J=!0},get once(){return Y=J=!0}};K&&(window.addEventListener("test",Q,Q),window.removeEventListener("test",Q,!0))}catch(lR){}const Z=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!Y){var i=r.once,o=r.capture,a=n;!Y&&i&&(a=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=a),e.addEventListener(t,a,J?r:o)}e.addEventListener(t,n,r)};const X=function(e,t,n,r){var i=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,i),n.__once&&e.removeEventListener(t,n.__once,i)};const $=function(e,t,n,r){return Z(e,t,n,r),function(){X(e,t,n,r)}};function ee(e,t,n){void 0===n&&(n=5);var r=!1,i=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var i=document.createEvent("HTMLEvents");i.initEvent(t,n,r),e.dispatchEvent(i)}}(e,"transitionend",!0)}),t+n),o=$(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(i),o()}}function te(e,t,n,r){null==n&&(n=function(e){var t=z(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var i=ee(e,n,r),o=$(e,"transitionend",t);return function(){i(),o()}}function ne(e,t){const n=z(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function re(e,t){const n=ne(e,"transitionDuration"),r=ne(e,"transitionDelay"),i=te(e,(n=>{n.target===e&&(i(),t(n))}),n+r)}const ie=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.apply(this,r),t.apply(this,r)}}),null)};function oe(e){e.offsetHeight}const ae=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const se=function(e,t){return(0,i.useMemo)((()=>function(e,t){const n=ae(e),r=ae(t);return e=>{n&&n(e),r&&r(e)}}(e,t)),[e,t])};const le=i.forwardRef(((e,t)=>{let{onEnter:n,onEntering:r,onEntered:o,onExit:a,onExiting:s,onExited:l,addEndListener:c,children:u,childRef:d,...p}=e;const f=(0,i.useRef)(null),m=se(f,d),h=e=>{var t;m((t=e)&&"setState"in t?L.findDOMNode(t):null!=t?t:null)},x=e=>t=>{e&&f.current&&e(f.current,t)},y=(0,i.useCallback)(x(n),[n]),b=(0,i.useCallback)(x(r),[r]),v=(0,i.useCallback)(x(o),[o]),w=(0,i.useCallback)(x(a),[a]),k=(0,i.useCallback)(x(s),[s]),S=(0,i.useCallback)(x(l),[l]),A=(0,i.useCallback)(x(c),[c]);return(0,g.jsx)(V,{ref:t,...p,onEnter:y,onEntered:v,onEntering:b,onExit:w,onExited:S,onExiting:k,addEndListener:A,nodeRef:f,children:"function"===typeof u?(e,t)=>u(e,{...t,ref:h}):i.cloneElement(u,{ref:h})})})),ce=le,ue={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function de(e,t){const n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=ue[e];return n+parseInt(z(t,r[0]),10)+parseInt(z(t,r[1]),10)}const pe={[_]:"collapse",[W]:"collapsing",[U]:"collapsing",[H]:"collapse show"},fe=i.forwardRef(((e,t)=>{let{onEnter:n,onEntering:r,onEntered:o,onExit:a,onExiting:s,className:c,children:u,dimension:d="height",in:p=!1,timeout:f=300,mountOnEnter:m=!1,unmountOnExit:h=!1,appear:x=!1,getDimensionValue:y=de,...b}=e;const v="function"===typeof d?d():d,w=(0,i.useMemo)((()=>ie((e=>{e.style[v]="0"}),n)),[v,n]),k=(0,i.useMemo)((()=>ie((e=>{const t=`scroll${v[0].toUpperCase()}${v.slice(1)}`;e.style[v]=`${e[t]}px`}),r)),[v,r]),S=(0,i.useMemo)((()=>ie((e=>{e.style[v]=null}),o)),[v,o]),A=(0,i.useMemo)((()=>ie((e=>{e.style[v]=`${y(v,e)}px`,oe(e)}),a)),[a,y,v]),j=(0,i.useMemo)((()=>ie((e=>{e.style[v]=null}),s)),[v,s]);return(0,g.jsx)(ce,{ref:t,addEndListener:re,...b,"aria-expanded":b.role?p:null,onEnter:w,onEntering:k,onEntered:S,onExit:A,onExiting:j,childRef:u.ref,in:p,timeout:f,mountOnEnter:m,unmountOnExit:h,appear:x,children:(e,t)=>i.cloneElement(u,{...t,className:l()(c,u.props.className,pe[e],"width"===v&&"collapse-horizontal")})})})),me=fe,he=i.createContext(null);he.displayName="NavbarContext";const ge=he,xe=i.forwardRef(((e,t)=>{let{children:n,bsPrefix:r,...o}=e;r=k(r,"navbar-collapse");const a=(0,i.useContext)(ge);return(0,g.jsx)(me,{in:!(!a||!a.expanded),...o,children:(0,g.jsx)("div",{ref:t,className:r,children:n})})}));xe.displayName="NavbarCollapse";const ye=xe;const be=function(e){const t=(0,i.useRef)(e);return(0,i.useEffect)((()=>{t.current=e}),[e]),t};function ve(e){const t=be(e);return(0,i.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}const we=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,children:o,label:a="Toggle navigation",as:s="button",onClick:c,...u}=e;n=k(n,"navbar-toggler");const{onToggle:d,expanded:p}=(0,i.useContext)(ge)||{},f=ve((e=>{c&&c(e),d&&d()}));return"button"===s&&(u.type="button"),(0,g.jsx)(s,{...u,ref:t,onClick:f,"aria-label":a,className:l()(r,n,!p&&"collapsed"),children:o||(0,g.jsx)("span",{className:`${n}-icon`})})}));we.displayName="NavbarToggle";const ke=we,Se="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,Ae="undefined"!==typeof document||Se?i.useLayoutEffect:i.useEffect,je=new WeakMap,Ce=(e,t)=>{if(!e||!t)return;const n=je.get(t)||new Map;je.set(t,n);let r=n.get(e);return r||(r=t.matchMedia(e),r.refCount=0,n.set(r.media,r)),r};function Ee(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"undefined"===typeof window?void 0:window;const n=Ce(e,t),[r,o]=(0,i.useState)((()=>!!n&&n.matches));return Ae((()=>{let n=Ce(e,t);if(!n)return o(!1);let r=je.get(t);const i=()=>{o(n.matches)};return n.refCount++,n.addListener(i),i(),()=>{n.removeListener(i),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}}),[e]),r}const Pe=function(e){const t=Object.keys(e);function n(e,t){return e===t?t:e?`${e} and ${t}`:t}function r(n){const r=function(e){return t[Math.min(t.indexOf(e)+1,t.length-1)]}(n);let i=e[r];return i="number"===typeof i?i-.2+"px":`calc(${i} - 0.2px)`,`(max-width: ${i})`}return function(t,o,a){let s;return"object"===typeof t?(s=t,a=o,o=!0):(o=o||!0,s={[t]:o}),Ee((0,i.useMemo)((()=>Object.entries(s).reduce(((t,i)=>{let[o,a]=i;return"up"!==a&&!0!==a||(t=n(t,function(t){let n=e[t];return"number"===typeof n&&(n=`${n}px`),`(min-width: ${n})`}(o))),"down"!==a&&!0!==a||(t=n(t,r(o))),t}),"")),[JSON.stringify(s)]),a)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Re=Pe;function Oe(e){void 0===e&&(e=E());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(lR){return e.body}}function Te(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function Me(e){const t=function(e){const t=(0,i.useRef)(e);return t.current=e,t}(e);(0,i.useEffect)((()=>()=>t.current()),[])}const ze="data-rr-ui-";function Ie(e){return`${ze}${e}`}const Le=Ie("modal-open");const De=class{constructor(){let{ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(z(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(Le,""),z(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(Le),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}},Fe=(0,i.createContext)(K?window:void 0);Fe.Provider;function Ne(){return(0,i.useContext)(Fe)}const Be=(e,t)=>K?null==e?(t||E()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;const _e=function(e){let{children:t,in:n,onExited:r,mountOnEnter:o,unmountOnExit:a}=e;const s=(0,i.useRef)(null),l=(0,i.useRef)(n),c=ve(r);(0,i.useEffect)((()=>{n?l.current=!0:c(s.current)}),[n,c]);const u=se(s,t.ref),d=(0,i.cloneElement)(t,{ref:u});return n?d:a||!l.current&&o?null:d};const Ue=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function He(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:o,onExiting:a,onExited:s,addEndListener:l,children:c}=e,u=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Ue);const{major:d}=function(){const e=i.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}(),p=d>=19?c.props.ref:c.ref,f=(0,i.useRef)(null),m=se(f,"function"===typeof c?null:p),h=e=>t=>{e&&f.current&&e(f.current,t)},g=(0,i.useCallback)(h(t),[t]),x=(0,i.useCallback)(h(n),[n]),y=(0,i.useCallback)(h(r),[r]),b=(0,i.useCallback)(h(o),[o]),v=(0,i.useCallback)(h(a),[a]),w=(0,i.useCallback)(h(s),[s]),k=(0,i.useCallback)(h(l),[l]);return Object.assign({},u,{nodeRef:f},t&&{onEnter:g},n&&{onEntering:x},r&&{onEntered:y},o&&{onExit:b},a&&{onExiting:v},s&&{onExited:w},l&&{addEndListener:k},{children:"function"===typeof c?(e,t)=>c(e,Object.assign({},t,{ref:m})):(0,i.cloneElement)(c,{ref:m})})}const We=["component"];const qe=i.forwardRef(((e,t)=>{let{component:n}=e;const r=He(function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,We));return(0,g.jsx)(n,Object.assign({ref:t},r))}));function Ge(e){let{children:t,in:n,onExited:r,onEntered:o,transition:a}=e;const[s,l]=(0,i.useState)(!n);n&&s&&l(!1);const c=function(e){let{in:t,onTransition:n}=e;const r=(0,i.useRef)(null),o=(0,i.useRef)(!0),a=ve(n);return Ae((()=>{if(!r.current)return;let e=!1;return a({in:t,element:r.current,initial:o.current,isStale:()=>e}),()=>{e=!0}}),[t,a]),Ae((()=>(o.current=!1,()=>{o.current=!0})),[]),r}({in:!!n,onTransition:e=>{Promise.resolve(a(e)).then((()=>{e.isStale()||(e.in?null==o||o(e.element,e.initial):(l(!0),null==r||r(e.element)))}),(t=>{throw e.in||l(!0),t}))}}),u=se(c,t.ref);return s&&!n?null:(0,i.cloneElement)(t,{ref:u})}function Ve(e,t,n){return e?(0,g.jsx)(qe,Object.assign({},n,{component:e})):t?(0,g.jsx)(Ge,Object.assign({},n,{transition:t})):(0,g.jsx)(_e,Object.assign({},n))}const Ke=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let Je;function Ye(e){const t=Ne(),n=e||function(e){return Je||(Je=new De({ownerDocument:null==e?void 0:e.document})),Je}(t),r=(0,i.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,i.useCallback)((e=>{r.current.dialog=e}),[]),setBackdropRef:(0,i.useCallback)((e=>{r.current.backdrop=e}),[])})}const Qe=(0,i.forwardRef)(((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:a,children:s,backdrop:l=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:p,runTransition:f,backdropTransition:m,runBackdropTransition:h,autoFocus:x=!0,enforceFocus:y=!0,restoreFocus:b=!0,restoreFocusOptions:v,renderDialog:w,renderBackdrop:k=e=>(0,g.jsx)("div",Object.assign({},e)),manager:S,container:A,onShow:j,onHide:C=()=>{},onExit:E,onExited:P,onExiting:R,onEnter:O,onEntering:T,onEntered:M}=e,z=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Ke);const I=Ne(),D=function(e,t){const n=Ne(),[r,o]=(0,i.useState)((()=>Be(e,null==n?void 0:n.document)));if(!r){const t=Be(e);t&&o(t)}return(0,i.useEffect)((()=>{t&&r&&t(r)}),[t,r]),(0,i.useEffect)((()=>{const t=Be(e);t!==r&&o(t)}),[e,r]),r}(A),F=Ye(S),N=function(){const e=(0,i.useRef)(!0),t=(0,i.useRef)((()=>e.current));return(0,i.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}(),B=function(e){const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{t.current=e})),t.current}(n),[_,U]=(0,i.useState)(!n),H=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,(()=>F),[F]),K&&!B&&n&&(H.current=Oe(null==I?void 0:I.document)),n&&_&&U(!1);const W=ve((()=>{if(F.add(),Q.current=$(document,"keydown",J),Y.current=$(document,"focus",(()=>setTimeout(G)),!0),j&&j(),x){var e,t;const n=Oe(null!=(e=null==(t=F.dialog)?void 0:t.ownerDocument)?e:null==I?void 0:I.document);F.dialog&&n&&!Te(F.dialog,n)&&(H.current=n,F.dialog.focus())}})),q=ve((()=>{var e;(F.remove(),null==Q.current||Q.current(),null==Y.current||Y.current(),b)&&(null==(e=H.current)||null==e.focus||e.focus(v),H.current=null)}));(0,i.useEffect)((()=>{n&&D&&W()}),[n,D,W]),(0,i.useEffect)((()=>{_&&q()}),[_,q]),Me((()=>{q()}));const G=ve((()=>{if(!y||!N()||!F.isTopModal())return;const e=Oe(null==I?void 0:I.document);F.dialog&&e&&!Te(F.dialog,e)&&F.dialog.focus()})),V=ve((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===l&&C())})),J=ve((e=>{c&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&F.isTopModal()&&(null==d||d(e),e.defaultPrevented||C())})),Y=(0,i.useRef)(),Q=(0,i.useRef)();if(!D)return null;const Z=Object.assign({role:r,ref:F.setDialogRef,"aria-modal":"dialog"===r||void 0},z,{style:a,className:o,tabIndex:-1});let X=w?w(Z):(0,g.jsx)("div",Object.assign({},Z,{children:i.cloneElement(s,{role:"document"})}));X=Ve(p,f,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:E,onExiting:R,onExited:function(){U(!0),null==P||P(...arguments)},onEnter:O,onEntering:T,onEntered:M,children:X});let ee=null;return l&&(ee=k({ref:F.setBackdropRef,onClick:V}),ee=Ve(m,h,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ee})),(0,g.jsx)(g.Fragment,{children:L.createPortal((0,g.jsxs)(g.Fragment,{children:[ee,X]}),D)})}));Qe.displayName="Modal";const Ze=Object.assign(Qe,{Manager:De}),Xe={[U]:"show",[H]:"show"},$e=i.forwardRef(((e,t)=>{let{className:n,children:r,transitionClasses:o={},onEnter:a,...s}=e;const c={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...s},u=(0,i.useCallback)(((e,t)=>{oe(e),null==a||a(e,t)}),[a]);return(0,g.jsx)(ce,{ref:t,addEndListener:re,...c,onEnter:u,childRef:r.ref,children:(e,t)=>i.cloneElement(r,{...t,className:l()("fade",n,r.props.className,Xe[e],o[e])})})}));$e.displayName="Fade";const et=$e,tt=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="div",...o}=e;return r=k(r,"offcanvas-body"),(0,g.jsx)(i,{ref:t,className:l()(n,r),...o})}));tt.displayName="OffcanvasBody";const nt=tt,rt={[U]:"show",[H]:"show"},it=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,children:o,in:a=!1,mountOnEnter:s=!1,unmountOnExit:c=!1,appear:u=!1,...d}=e;return n=k(n,"offcanvas"),(0,g.jsx)(ce,{ref:t,addEndListener:re,in:a,mountOnEnter:s,unmountOnExit:c,appear:u,...d,childRef:o.ref,children:(e,t)=>i.cloneElement(o,{...t,className:l()(r,o.props.className,(e===U||e===W)&&`${n}-toggling`,rt[e])})})}));it.displayName="OffcanvasToggling";const ot=it,at=i.createContext({onHide(){}});var st=n(5173),lt=n.n(st);const ct={"aria-label":lt().string,onClick:lt().func,variant:lt().oneOf(["white"])},ut=i.forwardRef(((e,t)=>{let{className:n,variant:r,"aria-label":i="Close",...o}=e;return(0,g.jsx)("button",{ref:t,type:"button",className:l()("btn-close",r&&`btn-close-${r}`,n),"aria-label":i,...o})}));ut.displayName="CloseButton",ut.propTypes=ct;const dt=ut,pt=i.forwardRef(((e,t)=>{let{closeLabel:n="Close",closeVariant:r,closeButton:o=!1,onHide:a,children:s,...l}=e;const c=(0,i.useContext)(at),u=ve((()=>{null==c||c.onHide(),null==a||a()}));return(0,g.jsxs)("div",{ref:t,...l,children:[s,o&&(0,g.jsx)(dt,{"aria-label":n,variant:r,onClick:u})]})})),ft=pt,mt=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,closeLabel:i="Close",closeButton:o=!1,...a}=e;return n=k(n,"offcanvas-header"),(0,g.jsx)(ft,{ref:t,...a,className:l()(r,n),closeLabel:i,closeButton:o})}));mt.displayName="OffcanvasHeader";const ht=mt,gt=(xt="h5",i.forwardRef(((e,t)=>(0,g.jsx)("div",{...e,ref:t,className:l()(e.className,xt)}))));var xt;const yt=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i=gt,...o}=e;return r=k(r,"offcanvas-title"),(0,g.jsx)(i,{ref:t,className:l()(n,r),...o})}));yt.displayName="OffcanvasTitle";const bt=yt;var vt=Function.prototype.bind.call(Function.prototype.call,[].slice);function wt(e,t){return vt(e.querySelectorAll(t))}function kt(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const St=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",At=".sticky-top",jt=".navbar-toggler";class Ct extends De{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,z(t,{[e]:`${parseFloat(z(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],z(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(function(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}(t,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";wt(t,St).forEach((t=>this.adjustAndStore(n,t,e.scrollBarWidth))),wt(t,At).forEach((t=>this.adjustAndStore(r,t,-e.scrollBarWidth))),wt(t,jt).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();!function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=kt(e.className,t):e.setAttribute("class",kt(e.className&&e.className.baseVal||"",t))}(t,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";wt(t,St).forEach((e=>this.restore(n,e))),wt(t,At).forEach((e=>this.restore(r,e))),wt(t,jt).forEach((e=>this.restore(r,e)))}}let Et;const Pt=Ct;function Rt(e){return(0,g.jsx)(ot,{...e})}function Ot(e){return(0,g.jsx)(et,{...e})}const Tt=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,children:o,"aria-labelledby":a,placement:s="start",responsive:c,show:u=!1,backdrop:d=!0,keyboard:p=!0,scroll:f=!1,onEscapeKeyDown:m,onShow:h,onHide:x,container:y,autoFocus:b=!0,enforceFocus:v=!0,restoreFocus:w=!0,restoreFocusOptions:S,onEntered:A,onExit:j,onExiting:C,onEnter:E,onEntering:P,onExited:R,backdropClassName:O,manager:T,renderStaticNode:M=!1,...z}=e;const I=(0,i.useRef)();n=k(n,"offcanvas");const{onToggle:L}=(0,i.useContext)(ge)||{},[D,F]=(0,i.useState)(!1),N=Re(c||"xs","up");(0,i.useEffect)((()=>{F(c?u&&!N:u)}),[u,c,N]);const B=ve((()=>{null==L||L(),null==x||x()})),_=(0,i.useMemo)((()=>({onHide:B})),[B]);const U=(0,i.useCallback)((e=>(0,g.jsx)("div",{...e,className:l()(`${n}-backdrop`,O)})),[O,n]),H=e=>(0,g.jsx)("div",{...e,...z,className:l()(r,c?`${n}-${c}`:n,`${n}-${s}`),"aria-labelledby":a,children:o});return(0,g.jsxs)(g.Fragment,{children:[!D&&(c||M)&&H({}),(0,g.jsx)(at.Provider,{value:_,children:(0,g.jsx)(Ze,{show:D,ref:t,backdrop:d,container:y,keyboard:p,autoFocus:b,enforceFocus:v&&!f,restoreFocus:w,restoreFocusOptions:S,onEscapeKeyDown:m,onShow:h,onHide:B,onEnter:function(e){e&&(e.style.visibility="visible");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];null==E||E(e,...n)},onEntering:P,onEntered:A,onExit:j,onExiting:C,onExited:function(e){e&&(e.style.visibility="");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];null==R||R(...n)},manager:T||(f?(I.current||(I.current=new Pt({handleContainerOverflow:!1})),I.current):function(e){return Et||(Et=new Ct(e)),Et}()),transition:Rt,backdropTransition:Ot,renderBackdrop:U,renderDialog:H})})]})}));Tt.displayName="Offcanvas";const Mt=Object.assign(Tt,{Body:nt,Header:ht,Title:bt}),zt=i.forwardRef(((e,t)=>{const n=(0,i.useContext)(ge);return(0,g.jsx)(Mt,{ref:t,show:!(null==n||!n.expanded),...e,renderStaticNode:!0})}));zt.displayName="NavbarOffcanvas";const It=zt,Lt=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="span",...o}=e;return r=k(r,"navbar-text"),(0,g.jsx)(i,{ref:t,className:l()(n,r),...o})}));Lt.displayName="NavbarText";const Dt=Lt,Ft=i.forwardRef(((e,t)=>{const{bsPrefix:n,expand:r=!0,variant:o="light",bg:a,fixed:s,sticky:c,className:d,as:p="nav",expanded:f,onToggle:m,onSelect:x,collapseOnSelect:y=!1,...b}=h(e,{expanded:"onToggle"}),v=k(n,"navbar"),w=(0,i.useCallback)((function(){null==x||x(...arguments),y&&f&&(null==m||m(!1))}),[x,y,f,m]);void 0===b.role&&"nav"!==p&&(b.role="navigation");let S=`${v}-expand`;"string"===typeof r&&(S=`${S}-${r}`);const A=(0,i.useMemo)((()=>({onToggle:()=>null==m?void 0:m(!f),bsPrefix:v,expanded:!!f,expand:r})),[v,f,r,m]);return(0,g.jsx)(ge.Provider,{value:A,children:(0,g.jsx)(u.Provider,{value:w,children:(0,g.jsx)(p,{ref:t,...b,className:l()(d,v,r&&S,o&&`${v}-${o}`,a&&`bg-${a}`,c&&`sticky-${c}`,s&&`fixed-${s}`)})})})}));Ft.displayName="Navbar";const Nt=Object.assign(Ft,{Brand:C,Collapse:ye,Offcanvas:It,Text:Dt,Toggle:ke}),Bt=i.forwardRef(((e,t)=>{let{bsPrefix:n,fluid:r=!1,as:i="div",className:o,...a}=e;const s=k(n,"container"),c="string"===typeof r?`-${r}`:"-fluid";return(0,g.jsx)(i,{ref:t,...a,className:l()(o,r?`${s}${c}`:s)})}));Bt.displayName="Container";const _t=Bt;n(9197);const Ut=i.createContext(null);Ut.displayName="NavContext";const Ht=Ut,Wt=i.createContext(null),qt=["as","disabled"];function Gt(e){let{tagName:t,disabled:n,href:r,target:i,rel:o,role:a,onClick:s,tabIndex:l=0,type:c}=e;t||(t=null!=r||null!=i||null!=o?"a":"button");const u={tagName:t};if("button"===t)return[{type:c||"button",disabled:n},u];const d=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==s||s(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:n?void 0:l,href:r,target:"a"===t?i:void 0,"aria-disabled":n||void 0,rel:"a"===t?o:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},u]}const Vt=i.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,qt);const[o,{tagName:a}]=Gt(Object.assign({tagName:n,disabled:r},i));return(0,g.jsx)(a,Object.assign({},i,o,{ref:t}))}));Vt.displayName="Button";const Kt=Vt,Jt=["as","active","eventKey"];function Yt(e){let{key:t,onClick:n,active:r,id:o,role:a,disabled:s}=e;const l=(0,i.useContext)(u),c=(0,i.useContext)(Ht),d=(0,i.useContext)(Wt);let p=r;const f={role:a};if(c){a||"tablist"!==c.role||(f.role="tab");const e=c.getControllerId(null!=t?t:null),n=c.getControlledId(null!=t?t:null);f[Ie("event-key")]=t,f.id=e||o,p=null==r&&null!=t?c.activeKey===t:r,!p&&(null!=d&&d.unmountOnExit||null!=d&&d.mountOnEnter)||(f["aria-controls"]=n)}return"tab"===f.role&&(f["aria-selected"]=p,p||(f.tabIndex=-1),s&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=ve((e=>{s||(null==n||n(e),null!=t&&l&&!e.isPropagationStopped()&&l(t,e))})),[f,{isActive:p}]}const Qt=i.forwardRef(((e,t)=>{let{as:n=Kt,active:r,eventKey:i}=e,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Jt);const[a,s]=Yt(Object.assign({key:c(i,o.href),active:r},o));return a[Ie("active")]=s.isActive,(0,g.jsx)(n,Object.assign({},o,a,{ref:t}))}));Qt.displayName="NavItem";const Zt=Qt,Xt=["as","onSelect","activeKey","role","onKeyDown"];const $t=()=>{},en=Ie("event-key"),tn=i.forwardRef(((e,t)=>{let{as:n="div",onSelect:r,activeKey:o,role:a,onKeyDown:s}=e,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Xt);const d=function(){const[,e]=(0,i.useReducer)((e=>!e),!1);return e}(),p=(0,i.useRef)(!1),f=(0,i.useContext)(u),m=(0,i.useContext)(Wt);let h,x;m&&(a=a||"tablist",o=m.activeKey,h=m.getControlledId,x=m.getControllerId);const y=(0,i.useRef)(null),b=e=>{const t=y.current;if(!t)return null;const n=wt(t,`[${en}]:not([aria-disabled=true])`),r=t.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const i=n.indexOf(r);if(-1===i)return null;let o=i+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},v=(e,t)=>{null!=e&&(null==r||r(e,t),null==f||f(e,t))};(0,i.useEffect)((()=>{if(y.current&&p.current){const e=y.current.querySelector(`[${en}][aria-selected=true]`);null==e||e.focus()}p.current=!1}));const w=se(t,y);return(0,g.jsx)(u.Provider,{value:v,children:(0,g.jsx)(Ht.Provider,{value:{role:a,activeKey:c(o),getControlledId:h||$t,getControllerId:x||$t},children:(0,g.jsx)(n,Object.assign({},l,{onKeyDown:e=>{if(null==s||s(e),!m)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=b(-1);break;case"ArrowRight":case"ArrowDown":t=b(1);break;default:return}var n;t&&(e.preventDefault(),v(t.dataset[(n="EventKey",`rrUi${n}`)]||null,e),p.current=!0,d())},ref:w,role:a}))})})}));tn.displayName="Nav";const nn=Object.assign(tn,{Item:Zt}),rn=i.createContext(null);rn.displayName="CardHeaderContext";const on=rn,an=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="div",...o}=e;return r=k(r,"nav-item"),(0,g.jsx)(i,{ref:t,className:l()(n,r),...o})}));an.displayName="NavItem";const sn=an;new WeakMap;const ln=["onKeyDown"];const cn=i.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,ln);const[i]=Gt(Object.assign({tagName:"a"},r)),o=ve((e=>{i.onKeyDown(e),null==n||n(e)}));return(a=r.href)&&"#"!==a.trim()&&"button"!==r.role?(0,g.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,g.jsx)("a",Object.assign({ref:t},r,i,{onKeyDown:o}));var a}));cn.displayName="Anchor";const un=cn,dn=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:i=un,active:o,eventKey:a,disabled:s=!1,...u}=e;n=k(n,"nav-link");const[d,p]=Yt({key:c(a,u.href),active:o,disabled:s,...u});return(0,g.jsx)(i,{...u,...d,ref:t,disabled:s,className:l()(r,n,s&&"disabled",p.isActive&&"active")})}));dn.displayName="NavLink";const pn=dn,fn=i.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:r,variant:o,fill:a=!1,justify:s=!1,navbar:c,navbarScroll:u,className:d,activeKey:p,...f}=h(e,{activeKey:"onSelect"}),m=k(r,"nav");let x,y,b=!1;const v=(0,i.useContext)(ge),w=(0,i.useContext)(on);return v?(x=v.bsPrefix,b=null==c||c):w&&({cardHeaderBsPrefix:y}=w),(0,g.jsx)(nn,{as:n,ref:t,activeKey:p,className:l()(d,{[m]:!b,[`${x}-nav`]:b,[`${x}-nav-scroll`]:b&&u,[`${y}-${o}`]:!!y,[`${m}-${o}`]:!!o,[`${m}-fill`]:a,[`${m}-justified`]:s}),...f})}));fn.displayName="Nav";const mn=Object.assign(fn,{Item:sn,Link:pn}),hn=n.p+"static/media/Atom_walk_logo-removebg-preview.21661b59140f92dd7ced.png";var gn=function(){return gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},gn.apply(this,arguments)};Object.create;function xn(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var yn=n(7324),bn=n.n(yn),vn="-ms-",wn="-moz-",kn="-webkit-",Sn="comm",An="rule",jn="decl",Cn="@import",En="@keyframes",Pn="@layer",Rn=Math.abs,On=String.fromCharCode,Tn=Object.assign;function Mn(e){return e.trim()}function zn(e,t){return(e=t.exec(e))?e[0]:e}function In(e,t,n){return e.replace(t,n)}function Ln(e,t,n){return e.indexOf(t,n)}function Dn(e,t){return 0|e.charCodeAt(t)}function Fn(e,t,n){return e.slice(t,n)}function Nn(e){return e.length}function Bn(e){return e.length}function _n(e,t){return t.push(e),e}function Un(e,t){return e.filter((function(e){return!zn(e,t)}))}var Hn=1,Wn=1,qn=0,Gn=0,Vn=0,Kn="";function Jn(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Hn,column:Wn,length:a,return:"",siblings:s}}function Yn(e,t){return Tn(Jn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Qn(e){for(;e.root;)e=Yn(e.root,{children:[e]});_n(e,e.siblings)}function Zn(){return Vn=Gn>0?Dn(Kn,--Gn):0,Wn--,10===Vn&&(Wn=1,Hn--),Vn}function Xn(){return Vn=Gn<qn?Dn(Kn,Gn++):0,Wn++,10===Vn&&(Wn=1,Hn++),Vn}function $n(){return Dn(Kn,Gn)}function er(){return Gn}function tr(e,t){return Fn(Kn,e,t)}function nr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rr(e){return Hn=Wn=1,qn=Nn(Kn=e),Gn=0,[]}function ir(e){return Kn="",e}function or(e){return Mn(tr(Gn-1,lr(91===e?e+2:40===e?e+1:e)))}function ar(e){for(;(Vn=$n())&&Vn<33;)Xn();return nr(e)>2||nr(Vn)>3?"":" "}function sr(e,t){for(;--t&&Xn()&&!(Vn<48||Vn>102||Vn>57&&Vn<65||Vn>70&&Vn<97););return tr(e,er()+(t<6&&32==$n()&&32==Xn()))}function lr(e){for(;Xn();)switch(Vn){case e:return Gn;case 34:case 39:34!==e&&39!==e&&lr(Vn);break;case 40:41===e&&lr(e);break;case 92:Xn()}return Gn}function cr(e,t){for(;Xn()&&e+Vn!==57&&(e+Vn!==84||47!==$n()););return"/*"+tr(t,Gn-1)+"*"+On(47===e?e:Xn())}function ur(e){for(;!nr($n());)Xn();return tr(e,Gn)}function dr(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function pr(e,t,n,r){switch(e.type){case Pn:if(e.children.length)break;case Cn:case jn:return e.return=e.return||e.value;case Sn:return"";case En:return e.return=e.value+"{"+dr(e.children,r)+"}";case An:if(!Nn(e.value=e.props.join(",")))return""}return Nn(n=dr(e.children,r))?e.return=e.value+"{"+n+"}":""}function fr(e,t,n){switch(function(e,t){return 45^Dn(e,0)?(((t<<2^Dn(e,0))<<2^Dn(e,1))<<2^Dn(e,2))<<2^Dn(e,3):0}(e,t)){case 5103:return kn+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return kn+e+e;case 4789:return wn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return kn+e+wn+e+vn+e+e;case 5936:switch(Dn(e,t+11)){case 114:return kn+e+vn+In(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return kn+e+vn+In(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return kn+e+vn+In(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return kn+e+vn+e+e;case 6165:return kn+e+vn+"flex-"+e+e;case 5187:return kn+e+In(e,/(\w+).+(:[^]+)/,kn+"box-$1$2"+vn+"flex-$1$2")+e;case 5443:return kn+e+vn+"flex-item-"+In(e,/flex-|-self/g,"")+(zn(e,/flex-|baseline/)?"":vn+"grid-row-"+In(e,/flex-|-self/g,""))+e;case 4675:return kn+e+vn+"flex-line-pack"+In(e,/align-content|flex-|-self/g,"")+e;case 5548:return kn+e+vn+In(e,"shrink","negative")+e;case 5292:return kn+e+vn+In(e,"basis","preferred-size")+e;case 6060:return kn+"box-"+In(e,"-grow","")+kn+e+vn+In(e,"grow","positive")+e;case 4554:return kn+In(e,/([^-])(transform)/g,"$1"+kn+"$2")+e;case 6187:return In(In(In(e,/(zoom-|grab)/,kn+"$1"),/(image-set)/,kn+"$1"),e,"")+e;case 5495:case 3959:return In(e,/(image-set\([^]*)/,kn+"$1$`$1");case 4968:return In(In(e,/(.+:)(flex-)?(.*)/,kn+"box-pack:$3"+vn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+kn+e+e;case 4200:if(!zn(e,/flex-|baseline/))return vn+"grid-column-align"+Fn(e,t)+e;break;case 2592:case 3360:return vn+In(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,zn(e.props,/grid-\w+-end/)}))?~Ln(e+(n=n[t].value),"span",0)?e:vn+In(e,"-start","")+e+vn+"grid-row-span:"+(~Ln(n,"span",0)?zn(n,/\d+/):+zn(n,/\d+/)-+zn(e,/\d+/))+";":vn+In(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return zn(e.props,/grid-\w+-start/)}))?e:vn+In(In(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return In(e,/(.+)-inline(.+)/,kn+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nn(e)-1-t>6)switch(Dn(e,t+1)){case 109:if(45!==Dn(e,t+4))break;case 102:return In(e,/(.+:)(.+)-([^]+)/,"$1"+kn+"$2-$3$1"+wn+(108==Dn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ln(e,"stretch",0)?fr(In(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return In(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,o,a,s){return vn+n+":"+r+s+(i?vn+n+"-span:"+(o?a:+a-+r)+s:"")+e}));case 4949:if(121===Dn(e,t+6))return In(e,":",":"+kn)+e;break;case 6444:switch(Dn(e,45===Dn(e,14)?18:11)){case 120:return In(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+kn+(45===Dn(e,14)?"inline-":"")+"box$3$1"+kn+"$2$3$1"+vn+"$2box$3")+e;case 100:return In(e,":",":"+vn)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return In(e,"scroll-","scroll-snap-")+e}return e}function mr(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case jn:return void(e.return=fr(e.value,e.length,n));case En:return dr([Yn(e,{value:In(e.value,"@","@"+kn)})],r);case An:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(zn(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qn(Yn(e,{props:[In(t,/:(read-\w+)/,":"+wn+"$1")]})),Qn(Yn(e,{props:[t]})),Tn(e,{props:Un(n,r)});break;case"::placeholder":Qn(Yn(e,{props:[In(t,/:(plac\w+)/,":"+kn+"input-$1")]})),Qn(Yn(e,{props:[In(t,/:(plac\w+)/,":"+wn+"$1")]})),Qn(Yn(e,{props:[In(t,/:(plac\w+)/,vn+"input-$1")]})),Qn(Yn(e,{props:[t]})),Tn(e,{props:Un(n,r)})}return""}))}}function hr(e){return ir(gr("",null,null,null,[""],e=rr(e),0,[0],e))}function gr(e,t,n,r,i,o,a,s,l){for(var c=0,u=0,d=a,p=0,f=0,m=0,h=1,g=1,x=1,y=0,b="",v=i,w=o,k=r,S=b;g;)switch(m=y,y=Xn()){case 40:if(108!=m&&58==Dn(S,d-1)){-1!=Ln(S+=In(or(y),"&","&\f"),"&\f",Rn(c?s[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:S+=or(y);break;case 9:case 10:case 13:case 32:S+=ar(m);break;case 92:S+=sr(er()-1,7);continue;case 47:switch($n()){case 42:case 47:_n(yr(cr(Xn(),er()),t,n,l),l);break;default:S+="/"}break;case 123*h:s[c++]=Nn(S)*x;case 125*h:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==x&&(S=In(S,/\f/g,"")),f>0&&Nn(S)-d&&_n(f>32?br(S+";",r,n,d-1,l):br(In(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(_n(k=xr(S,t,n,c,u,i,s,b,v=[],w=[],d,o),o),123===y)if(0===u)gr(S,t,k,k,v,o,d,s,w);else switch(99===p&&110===Dn(S,3)?100:p){case 100:case 108:case 109:case 115:gr(e,k,k,r&&_n(xr(e,k,k,0,0,i,s,b,i,v=[],d,w),w),i,w,d,s,r?v:w);break;default:gr(S,k,k,k,[""],w,0,s,w)}}c=u=f=0,h=x=1,b=S="",d=a;break;case 58:d=1+Nn(S),f=m;default:if(h<1)if(123==y)--h;else if(125==y&&0==h++&&125==Zn())continue;switch(S+=On(y),y*h){case 38:x=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(Nn(S)-1)*x,x=1;break;case 64:45===$n()&&(S+=or(Xn())),p=$n(),u=d=Nn(b=S+=ur(er())),y++;break;case 45:45===m&&2==Nn(S)&&(h=0)}}return o}function xr(e,t,n,r,i,o,a,s,l,c,u,d){for(var p=i-1,f=0===i?o:[""],m=Bn(f),h=0,g=0,x=0;h<r;++h)for(var y=0,b=Fn(e,p+1,p=Rn(g=a[h])),v=e;y<m;++y)(v=Mn(g>0?f[y]+" "+b:In(b,/&\f/g,f[y])))&&(l[x++]=v);return Jn(e,t,n,0===i?An:s,l,c,u,d)}function yr(e,t,n,r){return Jn(e,t,n,Sn,On(Vn),Fn(e,2,-2),0,r)}function br(e,t,n,r,i){return Jn(e,t,n,jn,Fn(e,0,r),Fn(e,r+1,-1),r,i)}var vr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wr="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",kr="active",Sr="data-styled-version",Ar="6.1.12",jr="/*!sc*/\n",Cr="undefined"!=typeof window&&"HTMLElement"in window,Er=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Pr=(new Set,Object.freeze([])),Rr=Object.freeze({});function Or(e,t,n){return void 0===n&&(n=Rr),e.theme!==n.theme&&e.theme||t||n.theme}var Tr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Mr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zr=/(^-|-$)/g;function Ir(e){return e.replace(Mr,"-").replace(zr,"")}var Lr=/(a)(d)/gi,Dr=52,Fr=function(e){return String.fromCharCode(e+(e>25?39:97))};function Nr(e){var t,n="";for(t=Math.abs(e);t>Dr;t=t/Dr|0)n=Fr(t%Dr)+n;return(Fr(t%Dr)+n).replace(Lr,"$1-$2")}var Br,_r=5381,Ur=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Hr=function(e){return Ur(_r,e)};function Wr(e){return Nr(Hr(e)>>>0)}function qr(e){return e.displayName||e.name||"Component"}function Gr(e){return"string"==typeof e&&!0}var Vr="function"==typeof Symbol&&Symbol.for,Kr=Vr?Symbol.for("react.memo"):60115,Jr=Vr?Symbol.for("react.forward_ref"):60112,Yr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xr=((Br={})[Jr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Br[Kr]=Zr,Br);function $r(e){return("type"in(t=e)&&t.type.$$typeof)===Kr?Zr:"$$typeof"in e?Xr[e.$$typeof]:Yr;var t}var ei=Object.defineProperty,ti=Object.getOwnPropertyNames,ni=Object.getOwnPropertySymbols,ri=Object.getOwnPropertyDescriptor,ii=Object.getPrototypeOf,oi=Object.prototype;function ai(e,t,n){if("string"!=typeof t){if(oi){var r=ii(t);r&&r!==oi&&ai(e,r,n)}var i=ti(t);ni&&(i=i.concat(ni(t)));for(var o=$r(e),a=$r(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Qr||n&&n[l]||a&&l in a||o&&l in o)){var c=ri(t,l);try{ei(e,l,c)}catch(e){}}}}return e}function si(e){return"function"==typeof e}function li(e){return"object"==typeof e&&"styledComponentId"in e}function ci(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ui(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function di(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function pi(e,t,n){if(void 0===n&&(n=!1),!n&&!di(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=pi(e[r],t[r]);else if(di(t))for(var r in t)e[r]=pi(e[r],t[r]);return e}function fi(e,t){Object.defineProperty(e,"toString",{value:t})}function mi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var hi=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw mi(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(jr);return t},e}(),gi=new Map,xi=new Map,yi=1,bi=function(e){if(gi.has(e))return gi.get(e);for(;xi.has(yi);)yi++;var t=yi++;return gi.set(e,t),xi.set(t,e),t},vi=function(e,t){yi=t+1,gi.set(e,t),xi.set(t,e)},wi="style[".concat(wr,"][").concat(Sr,'="').concat(Ar,'"]'),ki=new RegExp("^".concat(wr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Si=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Ai=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(jr),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(ki);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(vi(u,c),Si(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},ji=function(e){for(var t=document.querySelectorAll(wi),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(wr)!==kr&&(Ai(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Ci(){return n.nc}var Ei=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(wr,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(wr,kr),r.setAttribute(Sr,Ar);var a=Ci();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Pi=function(){function e(e){this.element=Ei(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw mi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ri=function(){function e(e){this.element=Ei(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Oi=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Ti=Cr,Mi={isServer:!Cr,useCSSOMInjection:!Er},zi=function(){function e(e,t,n){void 0===e&&(e=Rr),void 0===t&&(t={});var r=this;this.options=gn(gn({},Mi),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Cr&&Ti&&(Ti=!1,ji(this)),fi(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return xi.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var s="".concat(wr,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(jr)},o=0;o<n;o++)i(o);return r}(r)}))}return e.registerId=function(e){return bi(e)},e.prototype.rehydrate=function(){!this.server&&Cr&&ji(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(gn(gn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Oi(n):t?new Pi(n):new Ri(n)}(this.options),new hi(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(bi(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(bi(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(bi(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ii=/&/g,Li=/^\s*\/\/.*$/gm;function Di(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Di(e.children,t)),e}))}function Fi(e){var t,n,r,i=void 0===e?Rr:e,o=i.options,a=void 0===o?Rr:o,s=i.plugins,l=void 0===s?Pr:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===An&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Ii,n).replace(r,c))})),a.prefix&&u.push(mr),u.push(pr);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Li,""),c=hr(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);a.namespace&&(c=Di(c,a.namespace));var d,p=[];return dr(c,function(e){var t=Bn(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce((function(e,t){return t.name||mi(15),Ur(e,t.name)}),_r).toString():"",d}var Ni=new zi,Bi=Fi(),_i=i.createContext({shouldForwardProp:void 0,styleSheet:Ni,stylis:Bi}),Ui=(_i.Consumer,i.createContext(void 0));function Hi(){return(0,i.useContext)(_i)}function Wi(e){var t=(0,i.useState)(e.stylisPlugins),n=t[0],r=t[1],o=Hi().styleSheet,a=(0,i.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,i.useMemo)((function(){return Fi({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,i.useEffect)((function(){bn()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,i.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}}),[e.shouldForwardProp,a,s]);return i.createElement(_i.Provider,{value:l},i.createElement(Ui.Provider,{value:s},e.children))}var qi=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Bi);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,fi(this,(function(){throw mi(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Bi),this.name+e.hash},e}(),Gi=function(e){return e>="A"&&e<="Z"};function Vi(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Gi(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ki=function(e){return null==e||!1===e||""===e},Ji=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Ki(o)&&(Array.isArray(o)&&o.isCss||si(o)?r.push("".concat(Vi(i),":"),o,";"):di(o)?r.push.apply(r,xn(xn(["".concat(i," {")],Ji(o),!1),["}"],!1)):r.push("".concat(Vi(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in vr||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Yi(e,t,n,r){return Ki(e)?[]:li(e)?[".".concat(e.styledComponentId)]:si(e)?!si(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Yi(e(t),t,n,r):e instanceof qi?n?(e.inject(n,r),[e.getName(r)]):[e]:di(e)?Ji(e):Array.isArray(e)?Array.prototype.concat.apply(Pr,e.map((function(e){return Yi(e,t,n,r)}))):[e.toString()];var i}function Qi(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(si(n)&&!li(n))return!1}return!0}var Zi=Hr(Ar),Xi=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Qi(e),this.componentId=t,this.baseHash=Ur(Zi,t),this.baseStyle=n,zi.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=ci(r,this.staticRulesId);else{var i=ui(Yi(this.rules,e,t,n)),o=Nr(Ur(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=ci(r,o),this.staticRulesId=o}else{for(var s=Ur(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=ui(Yi(u,e,t,n));s=Ur(s,d+c),l+=d}}if(l){var p=Nr(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=ci(r,p)}}return r},e}(),$i=i.createContext(void 0);$i.Consumer;var eo={};new Set;function to(e,t,n){var r=li(e),o=e,a=!Gr(e),s=t.attrs,l=void 0===s?Pr:s,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Ir(e);eo[n]=(eo[n]||0)+1;var r="".concat(n,"-").concat(Wr(Ar+n+eo[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,p=void 0===d?function(e){return Gr(e)?"styled.".concat(e):"Styled(".concat(qr(e),")")}(e):d,f=t.displayName&&t.componentId?"".concat(Ir(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,h=t.shouldForwardProp;if(r&&o.shouldForwardProp){var g=o.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;h=function(e,t){return g(e,t)&&x(e,t)}}else h=g}var y=new Xi(n,f,r?o.componentStyle:void 0);function b(e,t){return function(e,t,n){var r=e.attrs,o=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=i.useContext($i),d=Hi(),p=e.shouldForwardProp||d.shouldForwardProp,f=Or(t,u,a)||Rr,m=function(e,t,n){for(var r,i=gn(gn({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=si(r=e[o])?r(i):r;for(var s in a)i[s]="className"===s?ci(i[s],a[s]):"style"===s?gn(gn({},i[s]),a[s]):a[s]}return t.className&&(i.className=ci(i.className,t.className)),i}(r,t,f),h=m.as||c,g={};for(var x in m)void 0===m[x]||"$"===x[0]||"as"===x||"theme"===x&&m.theme===f||("forwardedAs"===x?g.as=m.forwardedAs:p&&!p(x,h)||(g[x]=m[x]));var y=function(e,t){var n=Hi();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,m),b=ci(s,l);return y&&(b+=" "+y),m.className&&(b+=" "+m.className),g[Gr(h)&&!Tr.has(h)?"class":"className"]=b,g.ref=n,(0,i.createElement)(h,g)}(v,e,t)}b.displayName=p;var v=i.forwardRef(b);return v.attrs=m,v.componentStyle=y,v.displayName=p,v.shouldForwardProp=h,v.foldedComponentIds=r?ci(o.foldedComponentIds,o.styledComponentId):"",v.styledComponentId=f,v.target=r?o.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)pi(e,i[r],!0);return e}({},o.defaultProps,e):e}}),fi(v,(function(){return".".concat(v.styledComponentId)})),a&&ai(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function no(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ro=function(e){return Object.assign(e,{isCss:!0})};function io(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(si(e)||di(e))return ro(Yi(no(Pr,xn([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Yi(r):ro(Yi(no(r,t)))}function oo(e,t,n){if(void 0===n&&(n=Rr),!t)throw mi(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,io.apply(void 0,xn([r],i,!1)))};return r.attrs=function(r){return oo(e,t,gn(gn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return oo(e,t,gn(gn({},n),r))},r}var ao=function(e){return oo(to,e)},so=ao;Tr.forEach((function(e){so[e]=ao(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Qi(e),zi.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var i=r(ui(Yi(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&zi.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();var lo;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Ci(),r=ui([n&&'nonce="'.concat(n,'"'),"".concat(wr,'="true"'),"".concat(Sr,'="').concat(Ar,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw mi(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw mi(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[wr]="",t[Sr]=Ar,t.dangerouslySetInnerHTML={__html:n},t),o=Ci();return o&&(r.nonce=o),[i.createElement("style",gn({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new zi({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw mi(2);return i.createElement(Wi,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw mi(3)}})(),"__sc-".concat(wr,"__");function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},co.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(lo||(lo={}));const uo="popstate";function po(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function fo(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(lR){}}}function mo(e,t){return{usr:e.state,key:e.key,idx:t}}function ho(e,t,n,r){return void 0===n&&(n=null),co({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?xo(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function go(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function xo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function yo(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=lo.Pop,l=null,c=u();function u(){return(a.state||{idx:null}).idx}function d(){s=lo.Pop;let e=u(),t=null==e?null:e-c;c=e,l&&l({action:s,location:f.location,delta:t})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:go(e);return n=n.replace(/ $/,"%20"),po(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==c&&(c=0,a.replaceState(co({},a.state,{idx:c}),""));let f={get action(){return s},get location(){return e(i,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(uo,d),l=e,()=>{i.removeEventListener(uo,d),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=lo.Push;let r=ho(f.location,e,t);n&&n(r,e),c=u()+1;let d=mo(r,c),p=f.createHref(r);try{a.pushState(d,"",p)}catch(m){if(m instanceof DOMException&&"DataCloneError"===m.name)throw m;i.location.assign(p)}o&&l&&l({action:s,location:f.location,delta:1})},replace:function(e,t){s=lo.Replace;let r=ho(f.location,e,t);n&&n(r,e),c=u();let i=mo(r,c),d=f.createHref(r);a.replaceState(i,"",d),o&&l&&l({action:s,location:f.location,delta:0})},go:e=>a.go(e)};return f}var bo;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(bo||(bo={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function vo(e,t,n){return void 0===n&&(n="/"),wo(e,t,n,!1)}function wo(e,t,n,r){let i=Lo(("string"===typeof t?xo(t):t).pathname||"/",n);if(null==i)return null;let o=ko(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let s=0;null==a&&s<o.length;++s){let e=Io(i);a=Mo(o[s],e,r)}return a}function ko(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(po(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let s=_o([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(po(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),ko(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:To(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of So(e.path))i(e,t,r);else i(e,t)})),t}function So(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=So(r.join("/")),s=[];return s.push(...a.map((e=>""===e?o:[o,e].join("/")))),i&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const Ao=/^:[\w-]+$/,jo=3,Co=2,Eo=1,Po=10,Ro=-2,Oo=e=>"*"===e;function To(e,t){let n=e.split("/"),r=n.length;return n.some(Oo)&&(r+=Ro),t&&(r+=Co),n.filter((e=>!Oo(e))).reduce(((e,t)=>e+(Ao.test(t)?jo:""===t?Eo:Po)),r)}function Mo(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u=zo({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=zo({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),a.push({params:i,pathname:_o([o,u.pathname]),pathnameBase:Uo(_o([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=_o([o,u.pathnameBase]))}return a}function zo(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);fo("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:l,pathname:o,pathnameBase:a,pattern:e}}function Io(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return fo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Lo(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Do(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function Fo(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function No(e,t){let n=Fo(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function Bo(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=xo(e):(i=co({},e),po(!i.pathname||!i.pathname.includes("?"),Do("?","pathname","search",i)),po(!i.pathname||!i.pathname.includes("#"),Do("#","pathname","hash",i)),po(!i.search||!i.search.includes("#"),Do("#","search","hash",i)));let o,a=""===e||""===i.pathname,s=a?"/":i.pathname;if(null==s)o=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?xo(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:Ho(r),hash:Wo(i)}}(i,o),c=s&&"/"!==s&&s.endsWith("/"),u=(a||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}const _o=e=>e.join("/").replace(/\/\/+/g,"/"),Uo=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ho=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Wo=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function qo(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const Go=["post","put","patch","delete"],Vo=(new Set(Go),["get",...Go]);new Set(Vo),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function Ko(){return Ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ko.apply(this,arguments)}const Jo=i.createContext(null);const Yo=i.createContext(null);const Qo=i.createContext(null);const Zo=i.createContext(null);const Xo=i.createContext({outlet:null,matches:[],isDataRoute:!1});const $o=i.createContext(null);function ea(){return null!=i.useContext(Zo)}function ta(){return ea()||po(!1),i.useContext(Zo).location}function na(e){i.useContext(Qo).static||i.useLayoutEffect(e)}function ra(){let{isDataRoute:e}=i.useContext(Xo);return e?function(){let{router:e}=pa(ua.UseNavigateStable),t=ma(da.UseNavigateStable),n=i.useRef(!1);na((()=>{n.current=!0}));let r=i.useCallback((function(r,i){void 0===i&&(i={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,Ko({fromRouteId:t},i)))}),[e,t]);return r}():function(){ea()||po(!1);let e=i.useContext(Jo),{basename:t,future:n,navigator:r}=i.useContext(Qo),{matches:o}=i.useContext(Xo),{pathname:a}=ta(),s=JSON.stringify(No(o,n.v7_relativeSplatPath)),l=i.useRef(!1);na((()=>{l.current=!0}));let c=i.useCallback((function(n,i){if(void 0===i&&(i={}),!l.current)return;if("number"===typeof n)return void r.go(n);let o=Bo(n,JSON.parse(s),a,"path"===i.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:_o([t,o.pathname])),(i.replace?r.replace:r.push)(o,i.state,i)}),[t,r,s,a,e]);return c}()}function ia(e,t,n,r){ea()||po(!1);let{navigator:o}=i.useContext(Qo),{matches:a}=i.useContext(Xo),s=a[a.length-1],l=s?s.params:{},c=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let u,d=ta();if(t){var p;let e="string"===typeof t?xo(t):t;"/"===c||(null==(p=e.pathname)?void 0:p.startsWith(c))||po(!1),u=e}else u=d;let f=u.pathname||"/",m=f;if("/"!==c){let e=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let h=vo(e,{pathname:m});let g=ca(h&&h.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:_o([c,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:_o([c,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),a,n,r);return t&&g?i.createElement(Zo.Provider,{value:{location:Ko({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:lo.Pop}},g):g}function oa(){let e=function(){var e;let t=i.useContext($o),n=fa(da.UseRouteError),r=ma(da.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=qo(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r};return i.createElement(i.Fragment,null,i.createElement("h2",null,"Unexpected Application Error!"),i.createElement("h3",{style:{fontStyle:"italic"}},t),n?i.createElement("pre",{style:o},n):null,null)}const aa=i.createElement(oa,null);class sa extends i.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?i.createElement(Xo.Provider,{value:this.props.routeContext},i.createElement($o.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function la(e){let{routeContext:t,match:n,children:r}=e,o=i.useContext(Jo);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),i.createElement(Xo.Provider,{value:t},r)}function ca(e,t,n,r){var o;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){var a;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(a=r)&&a.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let s=e,l=null==(o=n)?void 0:o.errors;if(null!=l){let e=s.findIndex((e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id])));e>=0||po(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let i=0;i<s.length;i++){let e=s[i];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=i),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){c=!0,s=u>=0?s.slice(0,u+1):[s[0]];break}}}return s.reduceRight(((e,r,o)=>{let a,d=!1,p=null,f=null;var m;n&&(a=l&&r.route.id?l[r.route.id]:void 0,p=r.route.errorElement||aa,c&&(u<0&&0===o?(m="route-fallback",!1||ha[m]||(ha[m]=!0),d=!0,f=null):u===o&&(d=!0,f=r.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,o+1)),g=()=>{let t;return t=a?p:d?f:r.route.Component?i.createElement(r.route.Component,null):r.route.element?r.route.element:e,i.createElement(la,{match:r,routeContext:{outlet:e,matches:h,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===o)?i.createElement(sa,{location:n.location,revalidation:n.revalidation,component:p,error:a,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()}),null)}var ua=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ua||{}),da=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(da||{});function pa(e){let t=i.useContext(Jo);return t||po(!1),t}function fa(e){let t=i.useContext(Yo);return t||po(!1),t}function ma(e){let t=function(){let e=i.useContext(Xo);return e||po(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||po(!1),n.route.id}const ha={};o.startTransition;function ga(e){po(!1)}function xa(e){let{basename:t="/",children:n=null,location:r,navigationType:o=lo.Pop,navigator:a,static:s=!1,future:l}=e;ea()&&po(!1);let c=t.replace(/^\/*/,"/"),u=i.useMemo((()=>({basename:c,navigator:a,static:s,future:Ko({v7_relativeSplatPath:!1},l)})),[c,l,a,s]);"string"===typeof r&&(r=xo(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:h="default"}=r,g=i.useMemo((()=>{let e=Lo(d,c);return null==e?null:{location:{pathname:e,search:p,hash:f,state:m,key:h},navigationType:o}}),[c,d,p,f,m,h,o]);return null==g?null:i.createElement(Qo.Provider,{value:u},i.createElement(Zo.Provider,{children:n,value:g}))}function ya(e){let{children:t,location:n}=e;return ia(ba(t),n)}new Promise((()=>{}));i.Component;function ba(e,t){void 0===t&&(t=[]);let n=[];return i.Children.forEach(e,((e,r)=>{if(!i.isValidElement(e))return;let o=[...t,r];if(e.type===i.Fragment)return void n.push.apply(n,ba(e.props.children,o));e.type!==ga&&po(!1),e.props.index&&e.props.children&&po(!1);let a={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=ba(e.props.children,o)),n.push(a)})),n}const va=n.p+"static/media/human-resources1.d3a618f00955a9b64ed0.png",wa=n.p+"static/media/crm1.3a67e5242c9806715379.png",ka=n.p+"static/media/Labtest.d306211505644b5096b4.png",Sa=n.p+"static/media/erp.2de281720970778ea423.png",Aa=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ui(io.apply(void 0,xn([e],t,!1))),i=Wr(r);return new qi(i,r)})`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ja=so.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #ddd;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  z-index: 10;
  width: 400px;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px 0;
  display: ${e=>{let{show:t}=e;return t?"block":"none"}};
  animation: ${Aa} 0.3s ease-out;
  color: #454545;
  .product-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 1rem;
    font-weight: 500;

    &.active {
      background-color: #f39c12;
      color: #ffffff;

      .product-icon {
        transform: scale(1.1);
      }
    }

    &:hover {
      background-color: #f39c12;
      color: #ffffff;

      .product-icon {
        transform: scale(1.1);
      }
    }
  }

  .product-icon {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease;
  }
`,Ca=so.div`
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
  text-align: left;
  color: #343a40;
`,Ea=e=>{let{show:t}=e;const n=ra(),[r,o]=(0,i.useState)(""),a=(e,t)=>{o(e),n(t)};return(0,g.jsxs)(ja,{show:t,children:[(0,g.jsx)(Ca,{children:"Explore Our Products"}),(0,g.jsxs)("div",{className:"product-item "+("CRM"===r?"active":""),onClick:()=>a("CRM","/crm.html"),children:[(0,g.jsx)("img",{className:"product-icon",src:wa,alt:"CRM"}),(0,g.jsx)("span",{children:"Customer Relationship Management (CRM)"})]}),(0,g.jsxs)("div",{className:"product-item "+("HRM"===r?"active":""),onClick:()=>a("HRM","/hrm.html"),children:[(0,g.jsx)("img",{className:"product-icon",src:va,alt:"HRM"}),(0,g.jsx)("span",{children:"Human Resource Management (HRM)"})]}),(0,g.jsxs)("div",{className:"product-item "+("LMS"===r?"active":""),onClick:()=>a("LMS","/lms.html"),children:[(0,g.jsx)("img",{className:"product-icon",src:ka,alt:"LMS"}),(0,g.jsx)("span",{children:"Lab Management System (LMS)"})]}),(0,g.jsxs)("div",{className:"product-item "+("ERP"===r?"active":""),onClick:()=>a("ERP","/Product.html"),children:[(0,g.jsx)("img",{className:"product-icon",src:Sa,alt:"ERP"}),(0,g.jsx)("span",{children:"Enterprise Resource Planning (ERP)"})]})]})},Pa=so.img`
  width: 180px;
`,Ra=so.div`
  position: relative; /* Necessary for positioning the dropdown menu */
`,Oa=()=>{const e=ta(),t=ra(),[n,r]=(0,i.useState)("home"),[o,a]=(0,i.useState)(!1),[s,l]=(0,i.useState)(!0),[c,u]=(0,i.useState)(!1);(0,i.useEffect)((()=>{const e=()=>{window.scrollY>50?a(!0):a(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return(0,i.useEffect)((()=>{const t=new URLSearchParams(e.search).get("is_logged_in");l("WUVT"!==t)}),[e]),(0,g.jsx)(Nt,{expand:"md",className:o?"scrolled":"",children:(0,g.jsxs)(_t,{children:[(0,g.jsx)(Nt.Brand,{href:"/",children:(0,g.jsx)(Pa,{src:hn,alt:"Logo"})}),(0,g.jsx)(Nt.Toggle,{"aria-controls":"basic-navbar-nav",children:(0,g.jsx)("span",{className:"navbar-toggler-icon"})}),(0,g.jsxs)(Nt.Collapse,{id:"basic-navbar-nav",className:"mobile",children:[(0,g.jsxs)(mn,{className:"ms-auto",children:[(0,g.jsxs)(Ra,{onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[(0,g.jsx)(mn.Link,{href:"/Product.html",className:"Product"===n?"active navbar-link":"navbar-link",onClick:()=>r("Product"),children:"Products"}),(0,g.jsx)(Ea,{show:c})]}),(0,g.jsx)(mn.Link,{href:"/pricing.html",className:"Pricing"===n?"active navbar-link":"navbar-link",onClick:()=>r("Pricing"),children:"Pricing"}),(0,g.jsx)(mn.Link,{href:"/aboutUs.html",className:"about"===n?"active navbar-link":"navbar-link",onClick:()=>r("about"),children:"About Us"}),(0,g.jsx)(mn.Link,{href:"/contactUs.html",className:"projects"===n?"active navbar-link":"navbar-link",onClick:()=>r("projects"),children:"Contact Us"})]}),(0,g.jsx)("span",{className:"navbar-text",children:(0,g.jsx)("button",{onClick:()=>{s?window.location.href="https://www.atomwalk.com/login/":t(-1)},className:"vvd",children:s?(0,g.jsx)("span",{children:"Login"}):(0,g.jsx)("span",{children:"Back"})})})]})]})})};n.p;var Ta=n(6930);const Ma=n.p+"static/media/Manufacturing-Business-Development-Tips-1024x576.074a46b916689a522875.jpg",za=n.p+"static/media/labmangement.ff0cade8676acbeeba14.jpg",Ia=n.p+"static/media/chemical.eb8ede543e55d00b0160.png",La=n.p+"static/media/consaltant.918ca418601df0f447f2.jpg",Da=so.div`
  padding: 20px;
  background-color: rgb(255 246 247);
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 50px;
  }
`,Fa=so.div`
  margin-bottom: 40px;
`,Na=so.h1`
margin-top: 40px;
  font-size: 35px;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,Ba=so.div`
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
`,_a=so.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 300px;
    margin-right: 30px;
    margin-bottom: 0;
  }
`,Ua=so.div`
  flex: 1;
`,Ha=so.h2`
  font-size: 24px;
  color: #34495e;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`,Wa=so.p`
  font-size: 16px;
  color: #7f8c8d;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,qa=()=>{const e=()=>{window.location.href="/product.html"};return(0,g.jsxs)(Da,{children:[(0,g.jsx)(Na,{children:"Streamlining Business Operations"}),(0,g.jsx)(Fa,{children:(0,g.jsxs)(Ba,{onClick:e,style:{backgroundColor:"#F6EAFF"},children:[(0,g.jsx)(_a,{src:Ma,alt:"Manufacturing Small Business"}),(0,g.jsxs)(Ua,{children:[(0,g.jsx)(Ha,{children:"Discrete Manufacturing"}),(0,g.jsx)(Wa,{children:"In the manufacturing sector, optimizing production lines, managing supply chains, and maintaining equipment are vital. Implementing systems for real-time monitoring and predictive maintenance can improve productivity and reduce downtime."})]})]})}),(0,g.jsx)(Fa,{children:(0,g.jsxs)(Ba,{onClick:e,style:{backgroundColor:"#EDF5FF"},children:[(0,g.jsx)(_a,{src:Ia,alt:"Chemical Industry"}),(0,g.jsxs)(Ua,{children:[(0,g.jsx)(Ha,{children:"Process Manufacturing"}),(0,g.jsx)(Wa,{children:"Production process (Recipe Management), Planning, Project/ Work order management, Operational efficiency, Inventory (Batch expiry tracking)/ Warehouse management, CRM, Accounting and Finan- cial management, Supplier and Purchase Order management."})]})]})}),(0,g.jsx)(Fa,{children:(0,g.jsxs)(Ba,{onClick:e,style:{backgroundColor:"#FFEADF"},children:[(0,g.jsx)(_a,{src:La,alt:"Consultancy Business"}),(0,g.jsxs)(Ua,{children:[(0,g.jsx)(Ha,{children:"Consultancy, Services, Trading & NGOs"}),(0,g.jsx)(Wa,{children:"Effective project management ensures timely completion of tasks, optimizing resources and teamwork. Operational efficiency focuses on streamlining processes for maximum productivity. Integrated systems for CRM, accounting, financial management, and supplier/purchase order management enhance decision-making, track finances, and ensure smooth supplier relations."})]})]})}),(0,g.jsx)(Fa,{children:(0,g.jsxs)(Ba,{onClick:()=>{window.location.href="/lms.html"},style:{backgroundColor:"#E1FFF6"},children:[(0,g.jsx)(_a,{src:za,alt:"Lab Management System"}),(0,g.jsxs)(Ua,{children:[(0,g.jsx)(Ha,{children:"Lab Management"}),(0,g.jsx)(Wa,{children:"Research and Development (R & D) Labs in companies/ Universities - Grant management, Operational efficiency chemical consumption, Lab equipment management, Supplier and Purchase order management, Lab report/ documentation."})]})]})})]})},Ga=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:i="div",...o}=e;const a=k(n,"row"),s=S(),c=A(),u=`${a}-cols`,d=[];return s.forEach((e=>{const t=o[e];let n;delete o[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const r=e!==c?`-${e}`:"";null!=n&&d.push(`${u}${r}-${n}`)})),(0,g.jsx)(i,{ref:t,...o,className:l()(r,a,...d)})}));Ga.displayName="Row";const Va=Ga;const Ka=i.forwardRef(((e,t)=>{const[{className:n,...r},{as:i="div",bsPrefix:o,spans:a}]=function(e){let{as:t,bsPrefix:n,className:r,...i}=e;n=k(n,"col");const o=S(),a=A(),s=[],c=[];return o.forEach((e=>{const t=i[e];let r,o,l;delete i[e],"object"===typeof t&&null!=t?({span:r,offset:o,order:l}=t):r=t;const u=e!==a?`-${e}`:"";r&&s.push(!0===r?`${n}${u}`:`${n}${u}-${r}`),null!=l&&c.push(`order${u}-${l}`),null!=o&&c.push(`offset${u}-${o}`)})),[{...i,className:l()(r,...s,...c)},{as:t,bsPrefix:n,spans:s}]}(e);return(0,g.jsx)(i,{...r,ref:t,className:l()(n,!a.length&&o)})}));Ka.displayName="Col";const Ja=Ka,Ya=n.p+"static/media/Default_A_bustling_industrial_scene_depicting_modern_manufactu_1.ed533c9382af58022d54.jpg",Qa=n.p+"static/media/Management.6fb154b54ae761338aa3.jpg",Za=n.p+"static/media/Hrandpayroll.9310263d77fde3406330.jpg",Xa=n.p+"static/media/Designer.d544d66eb8011e427ca3.png",$a=n.p+"static/media/Accountandf.84a96a15feb6344a4f22.png",es=n.p+"static/media/projectmangement.49b30c1477fc99ca756d.png",ts=n.p+"static/media/lab management system.ee6c5d0bf6942d7f236d.png",ns=n.p+"static/media/Lab Equipment Management System with lab equipment.b636d3f63d6a865a4637.png",rs=n.p+"static/media/good laboratory practices.fa433f7036aa77970bed.png";var is=n(2963),os=n.n(is);const as=n.p+"static/media/underconstruction.52723767f15cb42646e9.jpg";os().setAppElement("#root");const ss=e=>{let{visible:t,setvisible:n}=e;const r=()=>{n(!1)};return(0,g.jsx)(os(),{isOpen:t,onRequestClose:r,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"20px",textAlign:"center",borderRadius:"10px",border:"1px solid #ccc",color:"#454545"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}},children:(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{src:as,alt:"Under Construction",style:{width:"150px",marginBottom:"15px"}}),(0,g.jsx)("h2",{children:"Under Construction"}),(0,g.jsx)("p",{children:"We\u2019re working hard to bring this feature to you soon!"}),(0,g.jsx)("button",{onClick:r,style:{marginTop:"10px",padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Close"})]})})},ls=(so.div`
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
`,so.div`
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
`,so.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`),cs=so.div`
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
`,us=(so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,so.img`
  width: 70%;
  height: auto;
  margin-bottom: 20px;
`),ds=so.h3`
  font-size: 1.5em;
  color: #333;
`,ps=so.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 20px;
  width: 80%;
`,fs=so.a`
  font-size: 1em;
  color: #ea5c49; /* Purple color */
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: #ee442d;
  }
`,ms=e=>{var t,n,r;const[o,a]=(0,i.useState)(!1),s=e=>{"HR & Payroll"==e?window.location.href="/hrm.html":"Customer Management"==e?window.location.href="/crm.html":"Lab Equipment Management System"==e?window.location.href="/labequipmentmangement.html":"Lab Management System"==e?window.location.href="/labmanagement.html":"Good Laboratory Practices"==e?a(!o):window.location.href="/product.html"};return(0,g.jsxs)(Ja,{style:{margin:"-2px"},size:5,sm:6,md:4,children:[(0,g.jsx)(ls,{onClick:()=>{var t;return s(null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.title)},children:(0,g.jsxs)(cs,{color:null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.background,children:[(0,g.jsx)(us,{src:e.image,alt:"greytHR Academy"}),(0,g.jsx)(ds,{children:null===e||void 0===e||null===(n=e.project)||void 0===n?void 0:n.title}),(0,g.jsx)(ps,{children:null===e||void 0===e||null===(r=e.project)||void 0===r?void 0:r.description}),(0,g.jsx)(fs,{onClick:()=>{var t;return s(null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.title)},children:"Know More"})]})}),(0,g.jsx)(ss,{visible:o,setvisible:a})]})},hs=(so.div`
  width: 100%;
  height: 100vh;
`,()=>{const e=[{title:"Manufacturing Operations",description:"Efficiently manage your manufacturing operations with Atomwalk Office",imgUrl:Ya,background:"#fff8e6"},{title:"Inventory Management",description:"Take control of your inventory with Atomwalk Office",imgUrl:Qa,background:"#EEFAF4"},{title:"HR & Payroll",description:"Effortlessly handle HR and payroll tasks with Atomwalk Office",imgUrl:Za,background:"#e6ffff"},{title:"Customer Management",description:"Deliver exceptional customer service and boost sales with Atomwalk Office",imgUrl:Xa,background:"#EEFAF4"},{title:"Accounting & Financials",description:"Manage your accounting and financials seamlessly with Atomwalk Office",imgUrl:$a,background:"#e6ffff"},{title:"Project Management",description:"Make informed decisions based on real-time information and analytics provided by Atomwalk Office",imgUrl:es,background:"#fff8e6"},{title:"Lab Equipment Management System",description:"Effortlessly Track, Manage, and Optimize Your Lab Equipment for Peak Performance.",imgUrl:ns,background:"#f4e8e3"},{title:"Lab Management System",description:"Comprehensive Lab Solutions for Streamlined Operations and Enhanced Productivity.",imgUrl:ts,background:"#c7facf"},{title:"Good Laboratory Practices",description:"Ensuring Excellence and Compliance: Your Partner in Good Laboratory Practices.",imgUrl:rs,background:"#f7e4f2"}];return(0,g.jsx)("section",{className:"project",id:"projects",children:(0,g.jsxs)(_t,{children:[(0,g.jsx)("h2",{children:"Comprehensive Business Management Solution"}),(0,g.jsx)("p",{children:"Streamline your business with Atomwalk Office's key features: Manufacturing Operations Management for optimized production and quality control, Purchasing & Inventory Management for precise supply chain oversight, Sales & Customer Service tools to boost sales and enhance customer relationships, Warehousing Solutions for efficient inventory tracking and automation, Accounting & Financials for thorough financial oversight, and a Complete HR Suite Including Payroll for seamless workforce management."}),(0,g.jsx)(Va,{children:(0,g.jsx)(Ja,{size:12,children:(0,g.jsx)(Va,{children:e.map(((e,t)=>(0,g.jsx)(ms,{project:e,image:e.imgUrl},t)))})})})]})})});const gs=n.p+"static/media/contact-img.87eac2b29352fa01abb2f9510ef6ac7e.svg";var xs=n(9834),ys=n.n(xs),bs=n(8178),vs=n.n(bs);const ws=function(e){var t=e.status,n=e.message,r=e.className,o=e.style,a=e.onSubmitted,s=void 0;return i.createElement("div",{className:r,style:o},"sending"===t&&i.createElement("div",{style:{color:"blue"}},"sending..."),"error"===t&&i.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:n}}),"success"===t&&i.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:n}}),i.createElement("input",{ref:function(e){return s=e},type:"email",placeholder:"Your email"}),i.createElement("button",{onClick:function(){return s&&s.value.indexOf("@")>-1&&a({EMAIL:s.value})}},"Submit"))};function ks(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var Ss=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];return n=r=ks(this,e.call.apply(e,[this].concat(o))),r.state={status:null,message:null},r.subscribe=function(e){var t=vs()(e),n=function(e){return e.replace("/post?","/post-json?")}(r.props.url)+"&"+t;r.setState({status:"sending",message:null},(function(){return ys()(n,{param:"c"},(function(e,t){e?r.setState({status:"error",message:e}):"success"!==t.result?r.setState({status:"error",message:t.msg}):r.setState({status:"success",message:t.msg})}))}))},ks(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return this.props.render({subscribe:this.subscribe,status:this.state.status,message:this.state.message})},t}(i.Component);Ss.propTypes={},Ss.defaultProps={render:function(e){var t=e.subscribe,n=e.status,r=e.message;return i.createElement(ws,{status:n,message:r,onSubmitted:function(e){return t(e)}})}};function As(e,t){return function(){return e.apply(t,arguments)}}const{toString:js}=Object.prototype,{getPrototypeOf:Cs}=Object,Es=(Ps=Object.create(null),e=>{const t=js.call(e);return Ps[t]||(Ps[t]=t.slice(8,-1).toLowerCase())});var Ps;const Rs=e=>(e=e.toLowerCase(),t=>Es(t)===e),Os=e=>t=>typeof t===e,{isArray:Ts}=Array,Ms=Os("undefined");const zs=Rs("ArrayBuffer");const Is=Os("string"),Ls=Os("function"),Ds=Os("number"),Fs=e=>null!==e&&"object"===typeof e,Ns=e=>{if("object"!==Es(e))return!1;const t=Cs(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Bs=Rs("Date"),_s=Rs("File"),Us=Rs("Blob"),Hs=Rs("FileList"),Ws=Rs("URLSearchParams"),[qs,Gs,Vs,Ks]=["ReadableStream","Request","Response","Headers"].map(Rs);function Js(e,t){let n,r,{allOwnKeys:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),Ts(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=i?Object.getOwnPropertyNames(e):Object.keys(e),o=r.length;let a;for(n=0;n<o;n++)a=r[n],t.call(null,e[a],a,e)}}function Ys(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const Qs="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,Zs=e=>!Ms(e)&&e!==Qs;const Xs=($s="undefined"!==typeof Uint8Array&&Cs(Uint8Array),e=>$s&&e instanceof $s);var $s;const el=Rs("HTMLFormElement"),tl=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),nl=Rs("RegExp"),rl=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Js(n,((n,i)=>{let o;!1!==(o=t(n,i,e))&&(r[i]=o||n)})),Object.defineProperties(e,r)},il="abcdefghijklmnopqrstuvwxyz",ol="0123456789",al={DIGIT:ol,ALPHA:il,ALPHA_DIGIT:il+il.toUpperCase()+ol};const sl=Rs("AsyncFunction"),ll=(cl="function"===typeof setImmediate,ul=Ls(Qs.postMessage),cl?setImmediate:ul?((e,t)=>(Qs.addEventListener("message",(n=>{let{source:r,data:i}=n;r===Qs&&i===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),Qs.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var cl,ul;const dl="undefined"!==typeof queueMicrotask?queueMicrotask.bind(Qs):"undefined"!==typeof process&&process.nextTick||ll,pl={isArray:Ts,isArrayBuffer:zs,isBuffer:function(e){return null!==e&&!Ms(e)&&null!==e.constructor&&!Ms(e.constructor)&&Ls(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||Ls(e.append)&&("formdata"===(t=Es(e))||"object"===t&&Ls(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&zs(e.buffer),t},isString:Is,isNumber:Ds,isBoolean:e=>!0===e||!1===e,isObject:Fs,isPlainObject:Ns,isReadableStream:qs,isRequest:Gs,isResponse:Vs,isHeaders:Ks,isUndefined:Ms,isDate:Bs,isFile:_s,isBlob:Us,isRegExp:nl,isFunction:Ls,isStream:e=>Fs(e)&&Ls(e.pipe),isURLSearchParams:Ws,isTypedArray:Xs,isFileList:Hs,forEach:Js,merge:function e(){const{caseless:t}=Zs(this)&&this||{},n={},r=(r,i)=>{const o=t&&Ys(n,i)||i;Ns(n[o])&&Ns(r)?n[o]=e(n[o],r):Ns(r)?n[o]=e({},r):Ts(r)?n[o]=r.slice():n[o]=r};for(let i=0,o=arguments.length;i<o;i++)arguments[i]&&Js(arguments[i],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Js(t,((t,r)=>{n&&Ls(t)?e[r]=As(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],r&&!r(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==n&&Cs(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:Es,kindOfTest:Rs,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(Ts(e))return e;let t=e.length;if(!Ds(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:el,hasOwnProperty:tl,hasOwnProp:tl,reduceDescriptors:rl,freezeMethods:e=>{rl(e,((t,n)=>{if(Ls(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];Ls(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return Ts(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Ys,global:Qs,isContextDefined:Zs,ALPHABET:al,generateString:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:al.ALPHA_DIGIT,n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&Ls(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Fs(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=Ts(e)?[]:{};return Js(e,((e,t)=>{const o=n(e,r+1);!Ms(o)&&(i[t]=o)})),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:sl,isThenable:e=>e&&(Fs(e)||Ls(e))&&Ls(e.then)&&Ls(e.catch),setImmediate:ll,asap:dl};function fl(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}pl.inherits(fl,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:pl.toJSONObject(this.config),code:this.code,status:this.status}}});const ml=fl.prototype,hl={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{hl[e]={value:e}})),Object.defineProperties(fl,hl),Object.defineProperty(ml,"isAxiosError",{value:!0}),fl.from=(e,t,n,r,i,o)=>{const a=Object.create(ml);return pl.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),fl.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const gl=fl;function xl(e){return pl.isPlainObject(e)||pl.isArray(e)}function yl(e){return pl.endsWith(e,"[]")?e.slice(0,-2):e}function bl(e,t,n){return e?e.concat(t).map((function(e,t){return e=yl(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const vl=pl.toFlatObject(pl,{},null,(function(e){return/^is[A-Z]/.test(e)}));const wl=function(e,t,n){if(!pl.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=pl.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!pl.isUndefined(t[e])}))).metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,s=(n.Blob||"undefined"!==typeof Blob&&Blob)&&pl.isSpecCompliantForm(t);if(!pl.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(pl.isDate(e))return e.toISOString();if(!s&&pl.isBlob(e))throw new gl("Blob is not supported. Use a Buffer instead.");return pl.isArrayBuffer(e)||pl.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,i){let s=e;if(e&&!i&&"object"===typeof e)if(pl.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(pl.isArray(e)&&function(e){return pl.isArray(e)&&!e.some(xl)}(e)||(pl.isFileList(e)||pl.endsWith(n,"[]"))&&(s=pl.toArray(e)))return n=yl(n),s.forEach((function(e,r){!pl.isUndefined(e)&&null!==e&&t.append(!0===a?bl([n],r,o):null===a?n:n+"[]",l(e))})),!1;return!!xl(e)||(t.append(bl(i,n,o),l(e)),!1)}const u=[],d=Object.assign(vl,{defaultVisitor:c,convertValue:l,isVisitable:xl});if(!pl.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!pl.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),pl.forEach(n,(function(n,o){!0===(!(pl.isUndefined(n)||null===n)&&i.call(t,n,pl.isString(o)?o.trim():o,r,d))&&e(n,r?r.concat(o):[o])})),u.pop()}}(e),t};function kl(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Sl(e,t){this._pairs=[],e&&wl(e,this,t)}const Al=Sl.prototype;Al.append=function(e,t){this._pairs.push([e,t])},Al.toString=function(e){const t=e?function(t){return e.call(this,t,kl)}:kl;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const jl=Sl;function Cl(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function El(e,t,n){if(!t)return e;const r=n&&n.encode||Cl,i=n&&n.serialize;let o;if(o=i?i(t,n):pl.isURLSearchParams(t)?t.toString():new jl(t,n).toString(r),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}const Pl=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){pl.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Rl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ol={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:jl,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Tl="undefined"!==typeof window&&"undefined"!==typeof document,Ml="object"===typeof navigator&&navigator||void 0,zl=Tl&&(!Ml||["ReactNative","NativeScript","NS"].indexOf(Ml.product)<0),Il="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,Ll=Tl&&window.location.href||"http://localhost",Dl={...e,...Ol};const Fl=function(e){function t(e,n,r,i){let o=e[i++];if("__proto__"===o)return!0;const a=Number.isFinite(+o),s=i>=e.length;if(o=!o&&pl.isArray(r)?r.length:o,s)return pl.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!a;r[o]&&pl.isObject(r[o])||(r[o]=[]);return t(e,n,r[o],i)&&pl.isArray(r[o])&&(r[o]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}(r[o])),!a}if(pl.isFormData(e)&&pl.isFunction(e.entries)){const n={};return pl.forEachEntry(e,((e,r)=>{t(function(e){return pl.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const Nl={transitional:Rl,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=pl.isObject(e);i&&pl.isHTMLForm(e)&&(e=new FormData(e));if(pl.isFormData(e))return r?JSON.stringify(Fl(e)):e;if(pl.isArrayBuffer(e)||pl.isBuffer(e)||pl.isStream(e)||pl.isFile(e)||pl.isBlob(e)||pl.isReadableStream(e))return e;if(pl.isArrayBufferView(e))return e.buffer;if(pl.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return wl(e,new Dl.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Dl.isNode&&pl.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((o=pl.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return wl(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(pl.isString(e))try{return(t||JSON.parse)(e),pl.trim(e)}catch(lR){if("SyntaxError"!==lR.name)throw lR}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Nl.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(pl.isResponse(e)||pl.isReadableStream(e))return e;if(e&&pl.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(lR){if(n){if("SyntaxError"===lR.name)throw gl.from(lR,gl.ERR_BAD_RESPONSE,this,null,this.response);throw lR}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dl.classes.FormData,Blob:Dl.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};pl.forEach(["delete","get","head","post","put","patch"],(e=>{Nl.headers[e]={}}));const Bl=Nl,_l=pl.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ul=Symbol("internals");function Hl(e){return e&&String(e).trim().toLowerCase()}function Wl(e){return!1===e||null==e?e:pl.isArray(e)?e.map(Wl):String(e)}function ql(e,t,n,r,i){return pl.isFunction(r)?r.call(this,t,n):(i&&(t=n),pl.isString(t)?pl.isString(r)?-1!==t.indexOf(r):pl.isRegExp(r)?r.test(t):void 0:void 0)}class Gl{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=Hl(t);if(!i)throw new Error("header name must be a non-empty string");const o=pl.findKey(r,i);(!o||void 0===r[o]||!0===n||void 0===n&&!1!==r[o])&&(r[o||t]=Wl(e))}const o=(e,t)=>pl.forEach(e,((e,n)=>i(e,n,t)));if(pl.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(pl.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))o((e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&_l[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(pl.isHeaders(e))for(const[a,s]of e.entries())i(s,a,n);else null!=e&&i(t,e,n);return this}get(e,t){if(e=Hl(e)){const n=pl.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(pl.isFunction(t))return t.call(this,e,n);if(pl.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Hl(e)){const n=pl.findKey(this,e);return!(!n||void 0===this[n]||t&&!ql(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=Hl(e)){const i=pl.findKey(n,e);!i||t&&!ql(0,n[i],i,t)||(delete n[i],r=!0)}}return pl.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!ql(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return pl.forEach(this,((r,i)=>{const o=pl.findKey(n,i);if(o)return t[o]=Wl(r),void delete t[i];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();a!==i&&delete t[i],t[a]=Wl(r),n[a]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return pl.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&pl.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[Ul]=this[Ul]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Hl(e);t[r]||(!function(e,t){const n=pl.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return pl.isArray(e)?e.forEach(r):r(e),this}}Gl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),pl.reduceDescriptors(Gl.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),pl.freezeMethods(Gl);const Vl=Gl;function Kl(e,t){const n=this||Bl,r=t||n,i=Vl.from(r.headers);let o=r.data;return pl.forEach(e,(function(e){o=e.call(n,o,i.normalize(),t?t.status:void 0)})),i.normalize(),o}function Jl(e){return!(!e||!e.__CANCEL__)}function Yl(e,t,n){gl.call(this,null==e?"canceled":e,gl.ERR_CANCELED,t,n),this.name="CanceledError"}pl.inherits(Yl,gl,{__CANCEL__:!0});const Ql=Yl;function Zl(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new gl("Request failed with status code "+n.status,[gl.ERR_BAD_REQUEST,gl.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const Xl=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,o=0,a=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=r[a];i||(i=l),n[o]=s,r[o]=l;let u=a,d=0;for(;u!==o;)d+=n[u++],u%=e;if(o=(o+1)%e,o===a&&(a=(a+1)%e),l-i<t)return;const p=c&&l-c;return p?Math.round(1e3*d/p):void 0}};const $l=function(e,t){let n,r,i=0,o=1e3/t;const a=function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();i=o,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-i;for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];t>=o?a(l,e):(n=l,r||(r=setTimeout((()=>{r=null,a(n)}),o-t)))},()=>n&&a(n)]},ec=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const i=Xl(50,250);return $l((n=>{const o=n.loaded,a=n.lengthComputable?n.total:void 0,s=o-r,l=i(s);r=o;e({loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&o<=a?(a-o)/l:void 0,event:n,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),n)},tc=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},nc=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return pl.asap((()=>e(...n)))},rc=Dl.hasStandardBrowserEnv?function(){const e=Dl.navigator&&/(msie|trident)/i.test(Dl.navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=pl.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0},ic=Dl.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const a=[e+"="+encodeURIComponent(t)];pl.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),pl.isString(r)&&a.push("path="+r),pl.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function oc(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const ac=e=>e instanceof Vl?{...e}:e;function sc(e,t){t=t||{};const n={};function r(e,t,n){return pl.isPlainObject(e)&&pl.isPlainObject(t)?pl.merge.call({caseless:n},e,t):pl.isPlainObject(t)?pl.merge({},t):pl.isArray(t)?t.slice():t}function i(e,t,n){return pl.isUndefined(t)?pl.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function o(e,t){if(!pl.isUndefined(t))return r(void 0,t)}function a(e,t){return pl.isUndefined(t)?pl.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,i,o){return o in t?r(n,i):o in e?r(void 0,n):void 0}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t)=>i(ac(e),ac(t),!0)};return pl.forEach(Object.keys(Object.assign({},e,t)),(function(r){const o=l[r]||i,a=o(e[r],t[r],r);pl.isUndefined(a)&&o!==s||(n[r]=a)})),n}const lc=e=>{const t=sc({},e);let n,{data:r,withXSRFToken:i,xsrfHeaderName:o,xsrfCookieName:a,headers:s,auth:l}=t;if(t.headers=s=Vl.from(s),t.url=El(oc(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),pl.isFormData(r))if(Dl.hasStandardBrowserEnv||Dl.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(n=s.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(Dl.hasStandardBrowserEnv&&(i&&pl.isFunction(i)&&(i=i(t)),i||!1!==i&&rc(t.url))){const e=o&&a&&ic.read(a);e&&s.set(o,e)}return t},cc="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=lc(e);let i=r.data;const o=Vl.from(r.headers).normalize();let a,s,l,c,u,{responseType:d,onUploadProgress:p,onDownloadProgress:f}=r;function m(){c&&c(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(a),r.signal&&r.signal.removeEventListener("abort",a)}let h=new XMLHttpRequest;function g(){if(!h)return;const r=Vl.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders());Zl((function(e){t(e),m()}),(function(e){n(e),m()}),{data:d&&"text"!==d&&"json"!==d?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout,"onloadend"in h?h.onloadend=g:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(g)},h.onabort=function(){h&&(n(new gl("Request aborted",gl.ECONNABORTED,e,h)),h=null)},h.onerror=function(){n(new gl("Network Error",gl.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const i=r.transitional||Rl;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new gl(t,i.clarifyTimeoutError?gl.ETIMEDOUT:gl.ECONNABORTED,e,h)),h=null},void 0===i&&o.setContentType(null),"setRequestHeader"in h&&pl.forEach(o.toJSON(),(function(e,t){h.setRequestHeader(t,e)})),pl.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),d&&"json"!==d&&(h.responseType=r.responseType),f&&([l,u]=ec(f,!0),h.addEventListener("progress",l)),p&&h.upload&&([s,c]=ec(p),h.upload.addEventListener("progress",s),h.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(a=t=>{h&&(n(!t||t.type?new Ql(null,e,h):t),h.abort(),h=null)},r.cancelToken&&r.cancelToken.subscribe(a),r.signal&&(r.signal.aborted?a():r.signal.addEventListener("abort",a)));const x=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);x&&-1===Dl.protocols.indexOf(x)?n(new gl("Unsupported protocol "+x+":",gl.ERR_BAD_REQUEST,e)):h.send(i||null)}))},uc=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const i=function(e){if(!n){n=!0,a();const t=e instanceof Error?e:this.reason;r.abort(t instanceof gl?t:new Ql(t instanceof Error?t.message:t))}};let o=t&&setTimeout((()=>{o=null,i(new gl(`timeout ${t} of ms exceeded`,gl.ETIMEDOUT))}),t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener("abort",i)})),e=null)};e.forEach((e=>e.addEventListener("abort",i)));const{signal:s}=r;return s.unsubscribe=()=>pl.asap(a),s}},dc=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,i=0;for(;i<n;)r=i+t,yield e.slice(i,r),i=r},pc=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},fc=(e,t,n,r)=>{const i=async function*(e,t){for await(const n of pc(e))yield*dc(n,t)}(e,t);let o,a=0,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await i.next();if(t)return s(),void e.close();let o=r.byteLength;if(n){let e=a+=o;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw s(t),t}},cancel:e=>(s(e),i.return())},{highWaterMark:2})},mc="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,hc=mc&&"function"===typeof ReadableStream,gc=mc&&("function"===typeof TextEncoder?(xc=new TextEncoder,e=>xc.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var xc;const yc=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(lR){return!1}},bc=hc&&yc((()=>{let e=!1;const t=new Request(Dl.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),vc=hc&&yc((()=>pl.isReadableStream(new Response("").body))),wc={stream:vc&&(e=>e.body)};var kc;mc&&(kc=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!wc[e]&&(wc[e]=pl.isFunction(kc[e])?t=>t[e]():(t,n)=>{throw new gl(`Response type '${e}' is not supported`,gl.ERR_NOT_SUPPORT,n)})})));const Sc=async(e,t)=>{const n=pl.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(pl.isBlob(e))return e.size;if(pl.isSpecCompliantForm(e)){const t=new Request(Dl.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return pl.isArrayBufferView(e)||pl.isArrayBuffer(e)?e.byteLength:(pl.isURLSearchParams(e)&&(e+=""),pl.isString(e)?(await gc(e)).byteLength:void 0)})(t):n},Ac=mc&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:p}=lc(e);c=c?(c+"").toLowerCase():"text";let f,m=uc([i,o&&o.toAbortSignal()],a);const h=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let g;try{if(l&&bc&&"get"!==n&&"head"!==n&&0!==(g=await Sc(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(pl.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=tc(g,ec(nc(l)));r=fc(n.body,65536,e,t)}}pl.isString(d)||(d=d?"include":"omit");const i="credentials"in Request.prototype;f=new Request(t,{...p,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:i?d:void 0});let o=await fetch(f);const a=vc&&("stream"===c||"response"===c);if(vc&&(s||a&&h)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=o[t]}));const t=pl.toFiniteNumber(o.headers.get("content-length")),[n,r]=s&&tc(t,ec(nc(s),!0))||[];o=new Response(fc(o.body,65536,n,(()=>{r&&r(),h&&h()})),e)}c=c||"text";let x=await wc[pl.findKey(wc,c)||"text"](o,e);return!a&&h&&h(),await new Promise(((t,n)=>{Zl(t,n,{data:x,headers:Vl.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:f})}))}catch(x){if(h&&h(),x&&"TypeError"===x.name&&/fetch/i.test(x.message))throw Object.assign(new gl("Network Error",gl.ERR_NETWORK,e,f),{cause:x.cause||x});throw gl.from(x,x&&x.code,e,f)}}),jc={http:null,xhr:cc,fetch:Ac};pl.forEach(jc,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(lR){}Object.defineProperty(e,"adapterName",{value:t})}}));const Cc=e=>`- ${e}`,Ec=e=>pl.isFunction(e)||null===e||!1===e,Pc=e=>{e=pl.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){let t;if(n=e[o],r=n,!Ec(n)&&(r=jc[(t=String(n)).toLowerCase()],void 0===r))throw new gl(`Unknown adapter '${t}'`);if(r)break;i[t||"#"+o]=r}if(!r){const e=Object.entries(i).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let n=t?e.length>1?"since :\n"+e.map(Cc).join("\n"):" "+Cc(e[0]):"as no adapter specified";throw new gl("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Rc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ql(null,e)}function Oc(e){Rc(e),e.headers=Vl.from(e.headers),e.data=Kl.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Pc(e.adapter||Bl.adapter)(e).then((function(t){return Rc(e),t.data=Kl.call(e,e.transformResponse,t),t.headers=Vl.from(t.headers),t}),(function(t){return Jl(t)||(Rc(e),t&&t.response&&(t.response.data=Kl.call(e,e.transformResponse,t.response),t.response.headers=Vl.from(t.response.headers))),Promise.reject(t)}))}const Tc="1.7.7",Mc={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Mc[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const zc={};Mc.transitional=function(e,t,n){function r(e,t){return"[Axios v1.7.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,o)=>{if(!1===e)throw new gl(r(i," has been removed"+(t?" in "+t:"")),gl.ERR_DEPRECATED);return t&&!zc[i]&&(zc[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,o)}};const Ic={assertOptions:function(e,t,n){if("object"!==typeof e)throw new gl("options must be an object",gl.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const t=e[o],n=void 0===t||a(t,o,e);if(!0!==n)throw new gl("option "+o+" must be "+n,gl.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new gl("Unknown option "+o,gl.ERR_BAD_OPTION)}},validators:Mc},Lc=Ic.validators;class Dc{constructor(e){this.defaults=e,this.interceptors={request:new Pl,response:new Pl}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(lR){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=sc(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;void 0!==n&&Ic.assertOptions(n,{silentJSONParsing:Lc.transitional(Lc.boolean),forcedJSONParsing:Lc.transitional(Lc.boolean),clarifyTimeoutError:Lc.transitional(Lc.boolean)},!1),null!=r&&(pl.isFunction(r)?t.paramsSerializer={serialize:r}:Ic.assertOptions(r,{encode:Lc.function,serialize:Lc.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=i&&pl.merge(i.common,i[t.method]);i&&pl.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=Vl.concat(o,i);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!s){const e=[Oc.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=a.length;let p=t;for(d=0;d<u;){const e=a[d++],t=a[d++];try{p=e(p)}catch(f){t.call(this,f);break}}try{c=Oc.call(this,p)}catch(f){return Promise.reject(f)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return El(oc((e=sc(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}pl.forEach(["delete","get","head","options"],(function(e){Dc.prototype[e]=function(t,n){return this.request(sc(n||{},{method:e,url:t,data:(n||{}).data}))}})),pl.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(sc(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Dc.prototype[e]=t(),Dc.prototype[e+"Form"]=t(!0)}));const Fc=Dc;class Nc{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new Ql(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Nc((function(t){e=t})),cancel:e}}}const Bc=Nc;const _c={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(_c).forEach((e=>{let[t,n]=e;_c[n]=t}));const Uc=_c;const Hc=function e(t){const n=new Fc(t),r=As(Fc.prototype.request,n);return pl.extend(r,Fc.prototype,n,{allOwnKeys:!0}),pl.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(sc(t,n))},r}(Bl);Hc.Axios=Fc,Hc.CanceledError=Ql,Hc.CancelToken=Bc,Hc.isCancel=Jl,Hc.VERSION=Tc,Hc.toFormData=wl,Hc.AxiosError=gl,Hc.Cancel=Hc.CanceledError,Hc.all=function(e){return Promise.all(e)},Hc.spread=function(e){return function(t){return e.apply(null,t)}},Hc.isAxiosError=function(e){return pl.isObject(e)&&!0===e.isAxiosError},Hc.mergeConfig=sc,Hc.AxiosHeaders=Vl,Hc.formToJSON=e=>Fl(pl.isHTMLForm(e)?new FormData(e):e),Hc.getAdapter=Pc,Hc.HttpStatusCode=Uc,Hc.default=Hc;const Wc=Hc,qc=e=>{let{setShowsuccess:t}=e,n=new Date;const r={name:"",company_name:"",task_name:"",mobile_number:"",email_id:"",add_task:"N",task_type:"Get In Touch",task_date:`${("0"+n.getDate()).slice(-2)}-${("0"+(n.getMonth()+1)).slice(-2)}-${n.getFullYear()}`},[o,a]=(0,i.useState)(r),[s,l]=(0,i.useState)("Send"),[c,u]=(0,i.useState)({});console.log(o,"look at ne");const d=(e,t)=>{a({...o,[e]:t})},p=e=>(e.preventDefault(),l("Sending..."),f("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:o})),f=async(e,n)=>{try{let i=localStorage.getItem("apiResponse"),o=JSON.parse(i);if(!i)throw new Error("Token not found, please login.");const s=Wc.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${o.key}`}});200==(await s.post(e,n)).status&&(l("Send"),a(r),t(!0))}catch(i){console.log("Error making authenticated API call:",i),l("Send"),a(r)}};return(0,g.jsx)("section",{className:"contact",id:"connect",children:(0,g.jsx)(_t,{children:(0,g.jsxs)(Va,{className:"align-items-center",children:[(0,g.jsx)(Ja,{size:12,md:6,children:(0,g.jsx)(Ta.A,{children:e=>{let{isVisible:t}=e;return(0,g.jsx)("img",{className:t?"animate__animated animate__zoomIn":"",src:gs,alt:"Contact Us"})}})}),(0,g.jsx)(Ja,{size:12,md:6,children:(0,g.jsx)(Ta.A,{children:e=>{let{isVisible:t}=e;return(0,g.jsxs)("div",{className:t?"animate__animated animate__fadeIn":"",children:[(0,g.jsx)("h2",{children:"Get In Touch"}),(0,g.jsx)("form",{onSubmit:p,children:(0,g.jsxs)(Va,{children:[(0,g.jsx)(Ja,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"text",value:o.name,placeholder:"First Name",onChange:e=>d("name",e.target.value)})}),(0,g.jsx)(Ja,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"text",value:o.company_name,placeholder:"Company Name",onChange:e=>d("company_name",e.target.value)})}),(0,g.jsx)(Ja,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"email",value:o.email_id,placeholder:"Email Address",onChange:e=>d("email_id",e.target.value)})}),(0,g.jsx)(Ja,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"tel",value:o.mobile_number,placeholder:"Phone No.",onChange:e=>d("mobile_number",e.target.value)})}),(0,g.jsxs)(Ja,{size:12,className:"px-1",children:[(0,g.jsx)("textarea",{rows:"6",value:o.task_name,placeholder:"Message",onChange:e=>d("task_name",e.target.value)}),(0,g.jsx)("button",{type:"submit",children:(0,g.jsx)("span",{children:s})})]}),c.message&&(0,g.jsx)(Ja,{children:(0,g.jsx)("p",{className:!1===c.success?"danger":"success",children:c.message})})]})})]})}})})]})})})},Gc=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #caf0f8;
`,Vc=so.h1`
  font-size: 3.2em;
  margin-bottom: 100px;
  text-align: center;
  color: #2c3e50;
`,Kc=so.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
`,Jc=so.div`
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
`,Yc=so.div`
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
`,Qc=so.h2`
  font-size: 2em;
  margin: 20px 0;
  font-weight: 800;
  color: #000933;
`,Zc=so.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`,Xc=so.li`
  margin: 10px 0;
  cursor: ${e=>e.clickable?"pointer":"default"};
  &::before {
    content: "${e=>e.valid?"\u2713":"\u2717"}";
    margin-right: 10px;
    color: ${e=>e.valid?"green":"red"};
  }
`,$c=so.div`
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
`,eu=so.p`
  font-weight: 500;
`,tu=so.button`
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
`,nu=so.div`
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
`,ru=so.div`
  font-size: 1.1em;
`,iu=so.button`
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
`,ou=so.span`
  font-size: 1.5em;
  color: #454545;
  cursor: pointer;
`,au=so.ul`
  list-style-type: none;
  margin-top: 10px;
  padding-left: 20px;
  color: #6b37d1;
`,su={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px",padding:"40px",overflow:"auto",maxHeight:"80vh"},overlay:{zIndex:"32333"}},lu=[{name:"Project Management",features:["Project Activity Allocation Tracking"," Project Activity Dependency (Critical Patch)"," Schedule Tracking","Item Cost and Effort Tracking","Efficiency tracking at Activity","Project Documents, Alert management","Integration with Procurement and PO","Integration with Inventory Allocation, Wastage and Release"]},{name:"Inventory Management",features:["Item Category and Group","Inventory Item and Service Item","Item Supplier management","Multiple locations","Multiple Units","Warehouse management (Bin Locations)","Item Serial Number handling","Item physical inspection and open balance","Item min order qty and Expiry date tracking"]},{name:"Sales and Procurement",features:["Sales order, quotation, proforma invoice","Tax Invoice","Payment, GST Tracking, TDS handling","Return, Credit note handling","Purchase Order, Purchase requests","Goods Receipt (GRN)","Goods Return/Shortage/ Debit Note","Purchase Service Order, TDS handling"]},{name:"Customer Management( CRM)",features:["Customer Details","Customer Sales/Payments Tracking (Bank/TDS)","Agreements","Customer Type/ Group"]},{name:"HR & Payroll",features:["Employee Hire to Exit","Leave & Attendance","Travel & Expenses","Salary & Payroll","Advances","Claim Settlement"]},{name:"Bank Reconciliation",features:["Bank Statement Upload","Account Reconciliation with Sales and PO","Rule based reconciliation of Expenses","Bank statement View","Reconciled statement view","Bank, Exchange rate setup"]},{name:"Financial Accounting",features:["Sales report (Period/Party/Outstanding)","Purchase Reports","Inventory (opening and closing stock)","Inventory Valuation","Financial Reports (P&L Balance sheet, Cash flow, Change in Equity","Aging/ DSO","Depreciation Schedule"]},{name:"Reports and Dashboard",features:["Manager Dashboard","Sales Dashboard","Account Receivable and Payable","Party wise outstanding","Batch reports like Sales overdue, GST not filed","Report Templates"," User Access control"]}],cu=()=>{const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(null),[o,a]=(0,i.useState)(null),s=e=>{a(e),t(!0)},l=()=>{t(!1),a(null)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Gc,{children:[(0,g.jsx)(Kc,{children:"PRICING"}),(0,g.jsx)(Vc,{children:"Pick the plan that\u2019s right for you"}),(0,g.jsxs)(Jc,{children:[(0,g.jsxs)(Yc,{children:[(0,g.jsx)("h3",{style:{color:"#ffff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"red",borderRadius:"5px"},children:"Free Trial"}),(0,g.jsx)(Qc,{children:"\u20b90/Month"}),(0,g.jsx)(eu,{children:"Seriously, free forever"}),(0,g.jsxs)(Zc,{children:[(0,g.jsx)(Xc,{valid:!0,children:"3 User Access"}),(0,g.jsx)(Xc,{valid:!0,children:"30 days Validity"}),(0,g.jsx)(Xc,{valid:!0,children:"20MB Space"}),(0,g.jsx)(Xc,{children:"Multi Branch Access"}),(0,g.jsx)($c,{onClick:()=>s("Free Trial"),children:"Click Here to see the modules"})]}),(0,g.jsx)(tu,{children:"Sign up for free"})]}),(0,g.jsxs)(Yc,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#2196f3",borderRadius:"5px"},children:"Basic"}),(0,g.jsx)(Qc,{children:"\u20b95,000/Month"}),(0,g.jsx)(eu,{children:"Billed at \u20b950,000 per year"}),(0,g.jsxs)(Zc,{children:[(0,g.jsx)(Xc,{valid:!0,children:"5 User Access"}),(0,g.jsx)(Xc,{valid:!0,children:"1 Year Validity"}),(0,g.jsx)(Xc,{valid:!0,children:"200MB Space"}),(0,g.jsx)(Xc,{children:"Multi Branch Access"}),(0,g.jsx)($c,{onClick:()=>s("Basic"),children:"Click Here to see the modules"})]}),(0,g.jsx)(tu,{children:"Start a free trial"})]}),(0,g.jsxs)(Yc,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"orange",borderRadius:"5px"},children:"Premium"}),(0,g.jsx)(Qc,{children:"\u20b910,000/Month"}),(0,g.jsx)(eu,{children:"Billed at \u20b9100,000 per year"}),(0,g.jsxs)(Zc,{children:[(0,g.jsx)(Xc,{valid:!0,children:"10 User Access"}),(0,g.jsx)(Xc,{valid:!0,children:"1 Year Validity"}),(0,g.jsx)(Xc,{valid:!0,children:"500MB Space"}),(0,g.jsx)(Xc,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)($c,{onClick:()=>s("Premium"),children:"Click Here to see the modules"})]}),(0,g.jsx)(tu,{children:"Start a free trial"})]}),(0,g.jsxs)(Yc,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#800080",borderRadius:"5px"},children:"Ultimate"}),(0,g.jsx)(Qc,{children:"\u20b925,000/Month"}),(0,g.jsx)(eu,{children:"Billed at \u20b9200,000 per year"}),(0,g.jsxs)(Zc,{children:[(0,g.jsx)(Xc,{valid:!0,children:"25 User Access"}),(0,g.jsx)(Xc,{valid:!0,children:"1 Year Validity"}),(0,g.jsx)(Xc,{valid:!0,children:"1.2GB Space"}),(0,g.jsx)(Xc,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)($c,{onClick:()=>s("Ultimate"),children:"Click Here to see the modules"})]}),(0,g.jsx)(tu,{children:"Start a free trial"})]})]})]}),(0,g.jsxs)(os(),{isOpen:e,onRequestClose:l,style:su,children:[(0,g.jsx)(iu,{onClick:l,children:"\xd7"}),(0,g.jsx)(Zc,{children:("Basic"===o?lu.filter((e=>"Customer Management( CRM)"!==e.name&&"HR & Payroll"!==e.name)):"Premium"===o?lu.filter((e=>"HR & Payroll"!==e.name)):lu).map(((e,t)=>(0,g.jsxs)("div",{children:[(0,g.jsxs)(nu,{onClick:()=>{return t=e.name,void r(n===t?null:t);var t},children:[(0,g.jsx)(ru,{children:e.name}),(0,g.jsx)(ou,{children:n===e.name?"\u2212":"+"})]}),n===e.name&&(0,g.jsx)(au,{children:e.features.map(((e,t)=>(0,g.jsx)("ul",{style:{marginBottom:"5px"},children:(0,g.jsx)("li",{children:e},t)})))})]},t)))})]})]})},uu=(so.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #f9f5f0;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,so.div`
  max-width: 500px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,so.h2`
  font-size: 32px;
  color: #ec7042;
  font-weight: 700;
`,so.h3`
  font-size: 28px;
  color: #333;
  font-weight: 600;
`,so.p`
  font-size: 16px;
  color: #555;
  margin: 20px 0;
`,so.button`
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
`,so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 600px;
`,so.div`
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
`,so.img`
  position: absolute;
  width: 100px;
  height: auto;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${e=>{let{top:t,right:n,bottom:r,left:i}=e;return`\n    top: ${t||"auto"};\n    right: ${n||"auto"};\n    bottom: ${r||"auto"};\n    left: ${i||"auto"};\n  `}}
`,so.p`

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
    
`),du=e=>(0,g.jsx)(uu,{dangerouslySetInnerHTML:e.dangerouslySetInnerHTML,onClick:e.onClick,textTransform:e.textTransform,margin:e.margin,lineHeight:e.lineHeight,mobPosition:e.mobPosition,LgFontSize:e.LgFontSize,mobMarginBottom:e.mobMarginBottom,mobRight:e.mobRight,fontWeight:e.fontWeight,mobwidth:e.mobwidth,mobLetterSpacing:e.mobLetterSpacing,mobMarginTop:e.mobMarginTop,moblineHeight:e.moblineHeight,letterSpacing:e.letterSpacing,cursor:e.cursor,textAlign:e.textAlign,marginLeft:e.marginLeft,MobtextAlign:e.MobtextAlign,fontSize:e.fontSize,mobFontSize:e.mobFontSize,mobLineHeight:e.mobLineHeight,width:e.width,color:e.color,hoverColor:e.hoverColor,padding:e.padding,textDecoration:e.textDecoration,marginTop:e.marginTop,children:e.text});n.p,so.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  height: 185px;

  @media screen and (max-width: 767px){
    height: 77%;
  }
`,so.div`
  background: #f0dbff;
  padding: 20px 55px;
  padding-bottom: 45px;
  height: 332px;

  @media screen and (max-width: 767px){
    height: 390px;
    padding-bottom: 35px;
  }
`,so.img`
  width: 18px;
`,so.p`
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
`,so.div`
  background-color: #ffc8ae;
  padding: 25px 55px;

  @media screen and (max-width: 767px){
    height: 125px;
  }  
`,so.div`
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-position: center;
  background-size: contain;
  background-image: url(${e=>e.CLogo});
`,so.p`
  margin: 0;
  color: #fff;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`,so.p`
  margin: 0;
  color: #fff;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`,so.div`
  display: flex;
  align-items: center;
  gap: 25px;
`,so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`,so.div`
  background-color: #fff3e1;
  border: 1px solid #d8d8d8;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
`;so.div`
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
`,so.div`
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
`,so.img`
  /* filter: grayscale(1); */
  height: 65px;
  opacity: 0.7;
`,so.div`
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
`;const pu=n.p+"static/media/FevIimg.ec5aa0150e808b2eaa91.png";const fu=n.p+"static/media/localPageHero.4092dfc607fc3eed3eec085f09348f6e.svg";const mu=n.p+"static/media/HrApp.f8b908a11c10534323325eaa7e6f02ff.svg";const hu=n.p+"static/media/EcommApp.d08f64640f1afc6971e657ce5be557c7.svg",gu=n.p+"static/media/crm.444d6bc6234675a47df4.png",xu=n.p+"static/media/search-job.de6dd9ba062c0e230527.png",yu=n.p+"static/media/online-shop.539a9bcf79880317f810.png",bu=so.div`
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
`,vu=so.div`
  max-width: 50%;
  margin-top: 100px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 150px;
  }
`,wu=so.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,ku=so.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Su=so.button`
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
`,Au=so.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ju=so.div`
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
`,Cu=so.img`
  width: 70px;
  margin-bottom: 10px;
`,Eu=so.p`
  font-size: 1rem;
  color: #333;
`,Pu=so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`,Ru=so.img`
  width: 600px;
  height: auto;
  border-radius: 10%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`,Ou=()=>{const[e,t]=(0,i.useState)("linear-gradient(180deg, #fceabb, rgb(255 246 247))"),[n,r]=(0,i.useState)(pu),[o,a]=(0,i.useState)(!1),s=(e,n)=>{t(e),r(n)},l=()=>{t("linear-gradient(180deg, #fceabb, rgb(255 246 247))"),r(pu)};return(0,g.jsxs)(bu,{background:e,children:[(0,g.jsxs)(vu,{children:[(0,g.jsx)(wu,{children:"To Automate the Most Complex Operations"}),(0,g.jsx)(ku,{children:"Experience the efficiency and clarity that comes with a fully integrated business management solution. With Atomwalk Office, transform your data into actionable insights and drive your business forward with confidence."}),(0,g.jsx)(Su,{onClick:()=>{window.location.href="/demo.html"},children:"Get Started"}),(0,g.jsxs)(Au,{children:[(0,g.jsxs)(ju,{background:e,onMouseEnter:()=>s("linear-gradient(180deg, #4382f8, rgb(255 246 247))",fu),onMouseLeave:l,onClick:()=>{window.location.href="/crm.html"},children:[(0,g.jsx)(Cu,{src:gu,alt:"CRM"}),(0,g.jsx)(Eu,{children:"Comprehensive CRM platform for customer-facing teams."})]}),(0,g.jsxs)(ju,{background:e,onMouseEnter:()=>s("linear-gradient(180deg, #a970ff, rgb(255 246 247))",mu),onMouseLeave:l,onClick:()=>{window.location.href="/hrm.html"},children:[(0,g.jsx)(Cu,{src:xu,alt:"HR"}),(0,g.jsx)(Eu,{children:"HR management software streamlining payroll, attendance, leave, claims."})]}),(0,g.jsxs)(ju,{onClick:()=>{a(!o)},background:e,onMouseEnter:()=>s("linear-gradient(180deg, #90ee90, rgb(255 246 247))",hu),onMouseLeave:l,children:[(0,g.jsx)(Cu,{src:yu,alt:"E-Commerce"}),(0,g.jsx)(Eu,{children:"Your one-stop shop for easy, fast, and secure online shopping."})]})]})]}),(0,g.jsx)(Pu,{children:(0,g.jsx)(Ru,{src:n,alt:"Profile"})}),(0,g.jsx)(ss,{visible:o,setvisible:a})]})},Tu=n.p+"static/media/Cloud.773250297b7d95b40fbc.webp",Mu=n.p+"static/media/Subcloud.d66e6c8b1d355e09b54f.webp",zu=so.div`
  background-color: rgb(234 244 255);
  padding: 20px;

  @media (min-width: 768px) {
    padding: 50px;
  }
`,Iu=so.div`
  text-align: center;
  margin-bottom: 40px;
`,Lu=so.h1`
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,Du=so.p`
  font-size: 18px;
  color: #7f8c8d;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`,Fu=so.a`
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
`,Nu=so.div`
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
`,Bu=so.div`
  flex: 1;
  max-width: 500px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 50px;
  }
`,_u=so.img`
  width: 100%;
  border-radius: 10px;
`,Uu=so.div`
  flex: 1;
`,Hu=so.h2`
  font-size: 24px;
  color: #34495e;
  /* font-family: 'Courier New', Courier, monospace; */
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`,Wu=so.p`
  font-size: 16px;
  color: #7f8c8d;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,qu=so.img`
  display: none; /* Hide the image on mobile screens */

  @media (min-width: 768px) {
    display: block; /* Show the image on larger screens */
    width: 15%;
    float: right;
    margin-top: -177px;
  }
`,Gu=()=>(0,g.jsxs)(zu,{children:[(0,g.jsxs)(Iu,{children:[(0,g.jsx)(Lu,{children:"Unlock the Future"}),(0,g.jsx)(Du,{children:"Revolutionize your business operations with Atomwalk Office's cutting-edge ERP solution"}),(0,g.jsx)(Fu,{href:"https://www.atomwalk.com/login/",children:"Transform Your Business Today"})]}),(0,g.jsxs)(Nu,{children:[(0,g.jsx)(Bu,{children:(0,g.jsx)(_u,{src:Tu,alt:"Business Operations"})}),(0,g.jsxs)(Uu,{children:[(0,g.jsx)(Hu,{children:"Elevate Your Business to New Heights with Atomwalk Office's Comprehensive ERP"}),(0,g.jsx)(Wu,{children:"Discover how Atomwalk Office's cloud-based ERP can streamline your core business functions, boost productivity, and drive sustainable growth for your small or medium enterprise."})]})]}),(0,g.jsx)(qu,{src:Mu})]});so.section`
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
`,so.div`
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
`,so.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 15px;
`,so.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`,so.p`
  font-size: 1em;
  margin: 0;
`,so.div`
  margin-top: 10px;
  font-weight: bold;
`,so.div`
  font-size: 0.9em;
  color: #666;
`,so.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    width: 559.66px;
    position: relative;
    left: -84px;
    top: 8px;
    transition: none;
  }
`,so.h2`
  font-size: 1.8em;
  margin-bottom: 10px;
`,so.p`
  font-size: 1em;
  margin-bottom: 20px;
`,so.a`
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
`;var Vu=n(2382);const Ku=n.p+"static/media/lipika.75242ac9bb129dc39010.jpg",Ju=[{id:1,name:"Dr Santosh Poddar, IISER, Pune",text:"Atomwalk\u2019s ERP software has revolutionized our financial management. The seamless integration and user-friendly interface have significantly improved our operational efficiency.",img:"https://picsum.photos/101/101"},{id:2,name:"Deepak Emanuel, Chief Operating Officer, FluxGen Sustainable Technologies Pvt Ltd",text:"The inventory management features of Atomwalk have been a game-changer for us. We can now track our stock levels in real-time, reducing waste and optimizing our supply chain.",img:"https://picsum.photos/102/102"},{id:3,name:"Mr. Santosh Olety, CEO at Microsys Care: ",text:"He highlights the efficiency and effectiveness of Atomwalk\u2019s software in streamlining their operations.",img:"https://picsum.photos/103/103"}],Yu=so.div`
background-color: aliceblue;
  @media (min-width: 768px) {
    padding:0 0 100px;
  }
`,Qu=so.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: aliceblue;
  @media (min-width: 768px) {
    max-width: 1300px;
  }
`,Zu=so.div`
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
`,Xu=so.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`,$u=so.div`
  flex: 1;
`,ed=so.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`,td=so.p`
  margin: 10px 0 0;
  color: #777;
`,nd=so(Vu.A)`

  .slick-slide {
    padding: 10px;
  }
  .slick-arrow {
    &:before{
        color: #2c3e50;
    }
 
  }
`,rd={dots:!0,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]},id=so.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 40px;
`,od=(so.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
`,so.p`
font-weight: 900;
    font-size: 45px;
    color: #2c3e50;
`),ad=so.p`
color: #7f8c8d;
font-size: 18px;
`,sd=()=>(0,g.jsx)(Yu,{children:(0,g.jsxs)(Qu,{children:[(0,g.jsxs)(id,{children:[(0,g.jsx)(od,{children:"Testimonial"}),(0,g.jsx)(ad,{children:"What our customers say about Atomwalk"})]}),(0,g.jsx)(nd,{...rd,children:Ju.map((e=>(0,g.jsx)("div",{children:(0,g.jsxs)(Zu,{children:[(0,g.jsx)(Xu,{src:e.img,alt:e.name}),(0,g.jsxs)($u,{children:[(0,g.jsx)(ed,{children:e.name}),(0,g.jsx)(td,{children:e.text})]})]})},e.id)))})]})}),ld=n.p+"static/media/image.f55fe67f8ba4fa6c4602.png",cd={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px"},overlay:{backgroundColor:"rgba(0, 0, 0, .8)",zIndex:"32333"}},ud=so.div`
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
`,dd=so.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
    padding-right: 20px;
  }
`,pd=so.div`
  display: none;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    width: 40%;
  }
`,fd=so.h2`
  font-size: 2.1em;
  color:#ea5c49;
  margin-bottom: 10px;
  font-weight: 800;
  line-height: 1.25;
`,md=so.p`
  color: #555;
  margin-bottom: 20px;
`,hd=so.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 4px;
`,gd=so.button`
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
`,xd=so.button`
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
`,yd=e=>{let{isOpen:t,onRequestClose:n,setShowsuccess:r}=e,o=new Date;const a={name:"",company_name:"",task_name:"Book My Demo",mobile_number:"",email_id:"",add_task:"N",task_type:"Book My Demo",task_date:`${("0"+o.getDate()).slice(-2)}-${("0"+(o.getMonth()+1)).slice(-2)}-${o.getFullYear()}`,remarks:"Book My Demo"},[s,l]=(0,i.useState)(a),c=(e,t)=>{l({...s,[e]:t})},u=async(e,t)=>{try{let i=localStorage.getItem("apiResponse"),o=JSON.parse(i);if(!i)throw new Error("Token not found, please login.");const s=Wc.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${o.key}`}});200==(await s.post(e,t)).status&&(r(!0),localStorage.setItem("datacheck",!0),l(a),n())}catch(i){console.log("Error making authenticated API call:",i),l(a)}};return(0,g.jsx)(os(),{isOpen:t,onRequestClose:n,style:cd,ariaHideApp:!1,children:(0,g.jsxs)(ud,{children:[(0,g.jsxs)(dd,{children:[(0,g.jsx)(xd,{onClick:n,children:"\xd7"}),(0,g.jsx)(fd,{children:"Ready to see our product in action?"}),(0,g.jsx)(md,{children:"See a demo of our product that's tailored just for you."}),(0,g.jsx)(hd,{onChange:e=>c("name",e.target.value),type:"text",placeholder:"Your Name"}),(0,g.jsx)(hd,{onChange:e=>c("email_id",e.target.value),type:"email",placeholder:"Email"}),(0,g.jsx)(hd,{onChange:e=>c("mobile_number",e.target.value),type:"tel",placeholder:"Phone Number"}),(0,g.jsx)(hd,{onChange:e=>c("company_name",e.target.value),type:"text",placeholder:"Company Name"}),(0,g.jsx)(gd,{onClick:e=>(e.preventDefault(),u("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:s})),children:"Book My Demo"})]}),(0,g.jsx)(pd,{children:(0,g.jsx)("img",{src:ld,alt:"Rocket",style:{width:"100%"}})})]})})},bd=so.div`
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
`,vd=so.div``;function wd(e){return(0,g.jsx)("div",{children:(0,g.jsx)(bd,{children:(0,g.jsx)(vd,{children:(0,g.jsx)(du,{text:e.message,color:"#1F936E",fontSize:"18px",fontWeight:"bold",cursor:"auto",fontSizeMedia:"13px"})})})})}const kd=()=>{const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(!1),o=localStorage.getItem("datacheck");(0,i.useEffect)((()=>{o||setTimeout((()=>{t(!0)}),2e5)}),[]);return(0,i.useEffect)((()=>{n&&setTimeout((()=>{r(!1)}),3e3)}),[n]),(0,g.jsxs)("div",{children:[n&&(0,g.jsx)(wd,{message:"We have successfully recorded your information."}),(0,g.jsx)(Ou,{}),(0,g.jsx)(qa,{}),(0,g.jsx)(Gu,{}),(0,g.jsx)(hs,{}),(0,g.jsx)(sd,{}),(0,g.jsx)(cu,{}),(0,g.jsx)(qc,{setShowsuccess:r}),(0,g.jsx)(yd,{isOpen:e,onRequestClose:()=>{t(!1)},setShowsuccess:r})]})};new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(lR){}new Map;const Sd=o.startTransition;D.flushSync,o.useId;function Ad(e){let{basename:t,children:n,future:r,window:o}=e,a=i.useRef();null==a.current&&(a.current=function(e){return void 0===e&&(e={}),yo((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return ho("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:go(t)}),null,e)}({window:o,v5Compat:!0}));let s=a.current,[l,c]=i.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=i.useCallback((e=>{u&&Sd?Sd((()=>c(e))):c(e)}),[c,u]);return i.useLayoutEffect((()=>s.listen(d)),[s,d]),i.createElement(xa,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var jd,Cd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jd||(jd={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Cd||(Cd={}));const Ed=n.p+"static/media/cover-Proses-Manajemen-Inventory-dan-Metode-Penerapannya-01-1-1024x656.71fe8c9581957cf0a241.png",Pd=n.p+"static/media/header-4-1-2048x1107.672ff3f0045c273d262f.png",Rd=n.p+"static/media/projecticon.2ce87c438cbe4e6220e1.png",Od=n.p+"static/media/new-b-bg.7dd6f955d98bb72b8f0b.png",Td=so.div`
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

`,Md=so.div`
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
`,zd=so.img`
    width: 490px;
    margin: 0 auto;
    display: flex;

    @media screen and (max-width: 767px) {
        width: 300px;
    }

`;function Id(e){return(0,g.jsx)("div",{children:(0,g.jsxs)("div",{className:"ip-temp-wrap",children:[(0,g.jsx)("div",{children:(0,g.jsx)(zd,{src:e.Temp})}),(0,g.jsx)("div",{children:(0,g.jsx)(Td,{children:e.title})}),(0,g.jsx)("div",{children:(0,g.jsx)(Md,{children:e.desc})})]})})}const Ld=so.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    background-image: url(${Od});

`,Dd=so.div`
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

`,Fd=so.div`
    width: 11px;
    height: 11px;
    border-radius: 50px;
    background-color: #cbcbcb;
    cursor: pointer;
    border: 1px solid #ccc;
`,Nd=e=>{switch(e){case 0:return Ed;case 1:return Pd;case 2:return Rd}},Bd=e=>{let t={};switch(e){case 0:t={heading:"Inventory Management",description:"Take control of your inventory with Atomwalk Office"};break;case 1:t={heading:"Customer Management",description:"Deliver exceptional customer service and boost sales with Atomwalk Office"};break;case 2:t={heading:"Project Management",description:"Make informed decisions based on real-time information and analytics provided by Atomwalk Office"}}return t},_d=()=>{const[e,t]=(0,i.useState)(0),n=e=>{t(e)};return(0,i.useEffect)((()=>{const t=setInterval((()=>{let t=e+1;t>2&&(t=0),n(t)}),4e3);return()=>clearInterval(t)})),(0,g.jsxs)(Ld,{children:[0==e&&(0,g.jsx)(Id,{Temp:Nd(0),title:Bd(0).heading,desc:Bd(0).description}),1==e&&(0,g.jsx)(Id,{Temp:Nd(1),title:Bd(1).heading,desc:Bd(1).description}),2==e&&(0,g.jsx)(Id,{Temp:Nd(2),title:Bd(2).heading,desc:Bd(2).description}),(0,g.jsxs)(Dd,{children:[(0,g.jsx)(Fd,{onClick:()=>{n(0)},style:0==e?{backgroundColor:"#FF7624"}:{}}),(0,g.jsx)(Fd,{onClick:()=>{n(1)},style:1==e?{backgroundColor:"#FF7624"}:{}}),(0,g.jsx)(Fd,{onClick:()=>{n(2)},style:2==e?{backgroundColor:"#FF7624"}:{}})]})]})},Ud=so.button`
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
`;function Hd(e){const t=e.disable;return(0,g.jsx)("div",{children:(0,g.jsx)(Ud,{onClick:e.onClick,variant:e.variant,width:e.width,fontWeight:e.fontWeight,fontSize:e.fontSize,height:e.height,Lgheight:e.Lgheight,mbfontSize:e.mbfontSize,mbpadding:e.mbpadding,mbwidth:e.mbwidth,disabled:t,children:e.text})})}const Wd=so.div`
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
`,qd=so.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`,Gd=so.div`
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

`,Vd=so.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 16px;
  color: #454545;
  margin-bottom: 6px;
`,Kd=so.div`
  margin-top: 0px;
`,Jd=so.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 24px;
  color: #352960;
  margin-top: 7px;
  text-align: left;

  @media screen and (max-width: 1280px){
    margin-top: 4px;
  }
`,Yd=so.input`
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
`,Qd=so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;

  @media screen and (max-width: 1280px){
      margin-top: 16px;
    margin-bottom: 5px;
  }
`,Zd=(so.button`
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
`,so.a`
  text-decoration: none;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
  color: #2970b1;
  cursor: pointer;
  &:hover {
    color: #15436d;
  }
`),Xd=so.div`
  color: #acacac;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
`,$d=(so.div`
  font-size: 14px;
  font-family: "Centra";
  line-height: 21px;
  color: #ff4141;
  text-align: left;
  margin-bottom: 12px;
`,()=>(0,g.jsx)("div",{children:(0,g.jsxs)(Wd,{children:[(0,g.jsxs)(qd,{children:[(0,g.jsx)(Gd,{children:"Login"}),(0,g.jsx)(Vd,{children:"to see your research come alive!"}),(0,g.jsxs)(Kd,{children:[(0,g.jsxs)("div",{children:[(0,g.jsxs)(Jd,{children:["Email address ",(0,g.jsx)("span",{style:{color:"red"},children:" *"})]}),(0,g.jsx)(Yd,{placeholder:"Enter your email"})]}),(0,g.jsxs)("div",{children:[(0,g.jsxs)(Jd,{children:["Password ",(0,g.jsx)("span",{style:{color:"red"},children:" *"})]}),(0,g.jsx)(Yd,{type:"password",placeholder:"Enter your password "})]})]})]}),(0,g.jsx)(Qd,{children:(0,g.jsx)(Hd,{text:"Log In",variant:"solidOrange",width:"100px",height:"50px"})}),(0,g.jsxs)("div",{children:[(0,g.jsx)(Zd,{href:"/forgotpassword.html",children:"Forgot Password?"}),(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"3px",justifyContent:"center"},children:[(0,g.jsx)(Xd,{children:"Don\u2019t have an account? "}),(0,g.jsx)(Zd,{href:"/signup",children:"Sign Up"})]})]})]})})),ep=so.div`
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
`,tp=()=>(0,g.jsx)("div",{children:(0,g.jsxs)(ep,{children:[(0,g.jsx)("div",{style:{width:"100%",position:"relative"},children:(0,g.jsx)(_d,{})}),(0,g.jsx)("div",{children:(0,g.jsx)($d,{})})]})}),np=so.div`
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

`,rp=so.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`,ip=so.div`
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

`,op=so.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 16px;
  color: #454545;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`,ap=so.div`
  margin-top: 25px;
`,sp=so.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 24px;
  color: #352960;
  margin-top: 15px;
  text-align: left;
`,lp=so.input`
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

`,cp=so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 25px;
`,up=(so.button`
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
`,so.a`
  text-decoration: none;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
  color: #2970b1;
  cursor: pointer;
  &:hover {
    color: #15436d;
  }
`),dp=so.div`
  color: #acacac;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
`,pp=(so.div`
  font-size: 14px;
  font-family: "Centra";
  line-height: 21px;
  color: #ff4141;
  text-align: left;
  margin-bottom: 12px;
`,()=>(0,g.jsx)("div",{children:(0,g.jsxs)(np,{children:[(0,g.jsxs)(rp,{children:[(0,g.jsx)(ip,{children:"Forgot Password?"}),(0,g.jsx)(op,{children:"Enter your registered work email to reset password"}),(0,g.jsx)(ap,{children:(0,g.jsxs)("div",{children:[(0,g.jsxs)(sp,{children:["Email address ",(0,g.jsx)("span",{style:{color:"red"},children:" *"})," "]}),(0,g.jsx)(lp,{placeholder:"Enter your registered work email"})]})})]}),(0,g.jsx)(cp,{children:(0,g.jsx)(Hd,{text:"Send",variant:"solidOrange",width:"100px",height:"50px"})}),(0,g.jsx)("div",{children:(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"3px",justifyContent:"center"},children:[(0,g.jsx)(dp,{children:"Don\u2019t have an account? "}),(0,g.jsx)(up,{href:"/signup",children:"Sign Up"})]})})]})})),fp=so.div`
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
`;function mp(){return(0,g.jsx)("div",{children:(0,g.jsxs)(fp,{children:[(0,g.jsx)("div",{style:{width:"100%",position:"relative"},children:(0,g.jsx)(_d,{})}),(0,g.jsx)("div",{children:(0,g.jsx)(pp,{})})]})})}const hp=n.p+"static/media/what-is-ERP.b39cc665c451687aad1b.jpg",gp=n.p+"static/media/color-sharp.bea361cfef80fefc2d1e.png",xp=n.p+"static/media/color-sharp2.c87586c6c2f549cb4aa6.png",yp=(n.p,n.p,n.p+"static/media/Backgroundpeople.d12b809f5bce2d857642.png"),bp=n.p+"static/media/Product.9dd066cf3ea2e0c5d71c.png",vp=n.p+"static/media/CrmHero.8e1214dc746d880dc597.png",wp=so.section`
  background-color: ${e=>e.background};
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
    padding: 50px 10%;
  }
`,kp=so.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`,Sp=so.h2`
  font-size: 3rem;
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-top: 70px;
  }
`,Ap=so.p`
  font-size: 1.3rem;
  color: #555;
`,jp=so.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`,Cp=so.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  border: none;
  border-radius: 22px;
  cursor: pointer;
  background-color: ${e=>e.primary?"#007bff":"#6c757d"};
  &:hover {
    background-color: ${e=>e.primary?"#0056b3":"#5a6268"};
  }
`,Ep=so.div`
  position: relative;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`,Pp=(so.div`
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
`,so.img`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    max-width: 650px;
  }
`),Rp=e=>{const t=ra();return(0,g.jsxs)(wp,{background:e.background,children:[(0,g.jsxs)(kp,{children:[(0,g.jsx)(Sp,{children:e.title}),(0,g.jsx)(Ap,{children:e.description}),(0,g.jsxs)(jp,{children:[(0,g.jsx)(Cp,{primary:!0,onClick:()=>{window.location.href="/demo.html"},children:"Request a Demo"}),(0,g.jsx)(Cp,{onClick:()=>{t(-1)},children:"Back"})]})]}),(0,g.jsx)(Ep,{children:(0,g.jsx)(Pp,{src:e.data?bp:e.crm?vp:e.lead?e.img:yp,alt:"People talking"})})]})},Op=n.p+"static/media/consulting.939890d26733fc8bb7de.png",Tp=n.p+"static/media/service.2b0a165b42a11cc4aafa.png",Mp=n.p+"static/media/grow.6d717d5c8734947f8b94.png",zp=n.p+"static/media/human-resources.b5fe567a0189b6da868e.png",Ip=n.p+"static/media/arrows.1950f85fea2b63e0f617.png",Lp=so.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,Dp=so.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,Fp=so.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,Np=so.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Bp=so.div`
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
`,_p=so.div`
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
`,Up=so.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,Hp=so.p`
  font-size: 1em;
  color: #666;
`,Wp=()=>{const e=e=>{window.location.href=e};return(0,g.jsxs)(Lp,{children:[(0,g.jsx)(Dp,{children:"Why Atomwalk Office ERP?"}),(0,g.jsx)(Fp,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,g.jsxs)(Np,{children:[(0,g.jsxs)(Bp,{children:[(0,g.jsx)(_p,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:Op,alt:"Speed"})}),(0,g.jsx)(Up,{children:"Financial Compliance:"}),(0,g.jsx)(Hp,{children:"Automated e-Invoice, GST reconciliation, and real-time financial management."})]}),(0,g.jsxs)(Bp,{children:[(0,g.jsx)(_p,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:Tp,alt:"Trust"})}),(0,g.jsx)(Up,{children:"Operational Excellence:"}),(0,g.jsx)(Hp,{children:"Project and work order management, BOM generation, and process optimization."})]}),(0,g.jsxs)(Bp,{style:{cursor:"pointer"},onClick:()=>e("/crm.html"),children:[(0,g.jsx)(_p,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:Mp,alt:"Accuracy"})}),(0,g.jsx)(Up,{children:"Business Growth:"}),(0,g.jsx)(Hp,{children:"Integrated CRM for lead management, sales performance tracking, and customer communication."})]}),(0,g.jsxs)(Bp,{style:{cursor:"pointer"},onClick:()=>e("/hrm.html"),children:[(0,g.jsx)(_p,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:zp,alt:"Reliability"})}),(0,g.jsx)(Up,{children:"HR & Payroll:"}),(0,g.jsx)(Hp,{children:"From recruitment to payroll, manage the full employee lifecycle effortlessly."})]}),(0,g.jsxs)(Bp,{children:[(0,g.jsx)(_p,{bgColor:"#ffe0f5",children:(0,g.jsx)("img",{src:Ip,alt:"Reliability"})}),(0,g.jsx)(Up,{children:"Multi-location Flexibility:"}),(0,g.jsx)(Hp,{children:"Handle operations across multiple branches or locations with ease."})]})]})]})},qp=n.p+"static/media/time.a8163f40469abbaa08ca.png",Gp=n.p+"static/media/money.b0e5ae4582ee14be342a.png",Vp=n.p+"static/media/profits.effdf91aad8318ce8c98.png",Kp=n.p+"static/media/login.1fc5649da5ea944b531d.png",Jp=so.div`
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
`,Yp=so.h2`
  font-size: 2.5em;
  font-weight: bold;
  color:#333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`,Qp=so.h3`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
`,Zp=so.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
@media (max-width: 768px) {
  flex-wrap: wrap;
}
`,Xp=so.div`
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
`,$p=so.img`
  width: 90px;
  height: 90px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`,ef=so.h4`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`,tf=so.p`
  font-size: 1em;
  color: #666;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`,nf=()=>(0,g.jsxs)(Jp,{children:[(0,g.jsx)(Yp,{children:"Unite advantages"}),(0,g.jsx)(Qp,{children:"Features Tailored to Your Business Needs"}),(0,g.jsxs)(Zp,{children:[(0,g.jsxs)(Xp,{children:[(0,g.jsx)($p,{src:Gp,alt:"Centralized access"}),(0,g.jsx)(ef,{children:"AI & Blockchain Integration:"}),(0,g.jsx)(tf,{children:"Leverage advanced technologies for automated data entry, secure transactions, and business innovation."})]}),(0,g.jsxs)(Xp,{children:[(0,g.jsx)($p,{src:qp,alt:"Vetted providers"}),(0,g.jsx)(ef,{children:"Real-time Insights:"}),(0,g.jsx)(tf,{children:"Make informed decisions with real-time data, analytics, and reporting."})]}),(0,g.jsxs)(Xp,{children:[(0,g.jsx)($p,{src:Vp,alt:"Simplified workflows"}),(0,g.jsx)(ef,{children:"Cost-Effective:"}),(0,g.jsx)(tf,{children:"Low setup costs with no upfront investment and all updates included at no additional charge."})]}),(0,g.jsxs)(Xp,{children:[(0,g.jsx)($p,{src:Kp,alt:"Simplified workflows"}),(0,g.jsx)(ef,{children:"User-Friendly Interface"}),(0,g.jsx)(tf,{children:"Simplified, integrated, and accessible from any device, anywhere."})]})]})]}),rf=n.p+"static/media/automation.5c71914163b6c86409c0.png",of=n.p+"static/media/server.96b9766474c3a4c7cb8d.png",af=n.p+"static/media/scalability.a651e2f67804756aba51.png",sf=so.section`
  padding: 100px 20px;
  background-color:rgb(225 255 246);
  text-align: center;
`,lf=so.div`
  max-width: 1200px;
  margin: 0 auto;
`,cf=so.h2`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,uf=so.p`
  color: #666;
  margin-top: 10px;
  font-size: 1.2em;
`,df=so.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 70px;
`,pf=so.div`
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
`,ff=so.img`
  max-width: 80px;
  margin-bottom: 20px;
`,mf=so.h3`
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,hf=so.p`
  color: #666;
`,gf=()=>(0,g.jsx)(sf,{children:(0,g.jsxs)(lf,{children:[(0,g.jsx)(cf,{children:"Seamless Integration and Workflow"}),(0,g.jsx)(uf,{children:"Atomwalk Office ERP connects every aspect of your business into one unified system"}),(0,g.jsxs)(df,{children:[(0,g.jsxs)(pf,{style:{backgroundColor:"rgb(181 255 206)"},children:[(0,g.jsx)(ff,{src:rf,alt:"Automated Processes"}),(0,g.jsx)(mf,{children:"Automated Processes"}),(0,g.jsx)(hf,{children:"From bank reconciliation to payroll processing, automate repetitive tasks."})]}),(0,g.jsxs)(pf,{style:{backgroundColor:"rgb(188 216 255)"},children:[(0,g.jsx)(ff,{src:of,alt:"Centralized Data"}),(0,g.jsx)(mf,{children:"Centralized Data"}),(0,g.jsx)(hf,{children:"Access and manage all your business data from a single platform."})]}),(0,g.jsxs)(pf,{style:{backgroundColor:"rgb(255 211 168)"},children:[(0,g.jsx)(ff,{src:af,alt:"Scalability"}),(0,g.jsx)(mf,{children:"Scalability"}),(0,g.jsx)(hf,{children:"Whether you\u2019re managing one location or multiple, Atomwalk scales with your business."})]})]})]})}),xf=(so.div`
  display: flex;
  align-items: center;
 justify-content: center;
 gap: 50px;
  padding: 50px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`,so.div`
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
`,so.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: absolute;
  top: -35px;
  left: 20px;
  border: 4px solid #ffffff;
`,so.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  right: 20px;
`,so.div`
  margin-top: 30px;
  text-align: left;
  font-size: 1em;
  color: #333333;
`,so.h4`
  margin: 10px 0;
  font-weight: 600;
  color: #000000;
`,so.p`
  color: #666666;
  font-size: 0.9em;
`,so.div`
  color: #f7c324;
  font-size: 1.2em;
  margin-top: 15px;
`,so.h2`
padding: 50px;
  font-size: 2.5rem;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,so.div`
background-color: #cfe2ff;
`,n.p,n.p+"static/media/inventory management.774803593808cfe0f584.jpg"),yf=n.p+"static/media/Process Templates.d39be0c24a2b4032e061.jpg",bf=n.p+"static/media/Sales and Procurement.954547f65f6d37ca39dd.jpg",vf=n.p+"static/media/Report And Dashboard.91584e3da800458d2e24.jpg",wf=n.p+"static/media/gst.0029cfd05e4a07f888bf.webp",kf=n.p+"static/media/Bank Reconciliation.194e572838760b213dd7.jpg",Sf=n.p+"static/media/Finacial Acconting.3a1f51360c2ca455c64c.avif",Af=n.p+"static/media/CrmProduct.2963cbe39deaa2d9f272.jpeg",jf=n.p+"static/media/Hrproduct.a116456aee92db07b3ca.jpeg",Cf=n.p+"static/media/Labeqp.e0453b3ae43325330c69.webp",Ef=so.section`
  padding: 40px 20px;
  text-align: center;
  background-color: #ddf5ff;
`,Pf=(so.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
`,so.h2`
  font-size: 2.5em;
  font-weight: 600;
  color: #333;
  margin-bottom: 40px;
  
  span {
    color: #9C27B0; /* Purple color for the highlighted text */
  }
`),Rf=so.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`,Of=so.div`
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
  cursor: pointer;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  
  @media (max-width: 767px) {
    max-width: 100%;
    flex-direction: column;
    text-align: center;
  }
`,Tf=so.div`
  max-width: 40%;
  text-align: left;

  @media (max-width: 767px) {
    text-align: left;
    max-width: 100%;
  }
`,Mf=so.h3`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`,zf=so.div`
  color: #666;
  font-size: 1em;
  margin-bottom: 20px;
`,If=so.button`
  background-color: #ea5c49;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
`,Lf=so.div`
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
`,Df=so.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #9C27B0;
  border-radius: 50%;
  ${e=>e.top&&`top: ${e.top}; left: ${e.left};`}
  ${e=>e.bottom&&`bottom: ${e.bottom}; right: ${e.right};`}
`,Ff=()=>{const e=()=>{window.location.href="/demo.html"},t=e=>{window.location.href=`${e}`};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Ef,{children:[(0,g.jsx)(Pf,{children:"Atomwalk Office ERP connects every aspect of your business into one unified system"}),(0,g.jsxs)(Rf,{children:[(0,g.jsxs)(Of,{bgColor:"#d6e7ff",onClick:()=>t("/crm.html"),children:[(0,g.jsx)(Lf,{children:(0,g.jsx)("img",{src:Af,alt:"Performance management"})}),(0,g.jsxs)(Tf,{children:[(0,g.jsx)(Mf,{children:"Customer Management"}),(0,g.jsx)(zf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Lead Management"}),(0,g.jsx)("li",{children:"Customer Management"}),(0,g.jsx)("li",{children:"Channel partner management"}),(0,g.jsx)("li",{children:"Annual Maintenance Contract"}),(0,g.jsx)("li",{children:"Campaign Management"})]})}),(0,g.jsx)(If,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,g.jsx)(Df,{top:"20%",left:"5%"}),(0,g.jsx)(Df,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(Of,{bgColor:"#ffeadf",onClick:()=>t("/sales.html"),children:[(0,g.jsxs)(Tf,{children:[(0,g.jsx)(Mf,{children:"Sales and Procurement"}),(0,g.jsx)(zf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Sales order, quotation, proforma invoice"}),(0,g.jsx)("li",{children:"Tax Invoice"}),(0,g.jsx)("li",{children:"Payment, GST Tracking, TDS handling"}),(0,g.jsx)("li",{children:"Return, Credit note handling"}),(0,g.jsx)("li",{children:"Purchase Order, Purchase requests"}),(0,g.jsx)("li",{children:"Goods Receipt (GRN)"}),(0,g.jsx)("li",{children:"Goods Return/Shortage/Debit Note"}),(0,g.jsx)("li",{children:"Purchase Service Order, TDS handling"})]})}),(0,g.jsx)(If,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,g.jsx)(Lf,{children:(0,g.jsx)("img",{src:bf,alt:"Performance management"})}),(0,g.jsx)(Df,{top:"20%",left:"5%"}),(0,g.jsx)(Df,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(Of,{bgColor:"#e0f7fa",children:[(0,g.jsx)(Lf,{children:(0,g.jsx)("img",{src:xf,alt:"Performance management"})}),(0,g.jsxs)(Tf,{children:[(0,g.jsx)(Mf,{children:"Inventory Management"}),(0,g.jsx)(zf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Item Category and Group"}),(0,g.jsx)("li",{children:"Inventory Item and Service Item"}),(0,g.jsx)("li",{children:"Item Supplier management"}),(0,g.jsx)("li",{children:"Multiple locations"}),(0,g.jsx)("li",{children:"Multiple Units"}),(0,g.jsx)("li",{children:"Warehouse management (Bin Locations)"}),(0,g.jsx)("li",{children:"Item Serial Number handling"}),(0,g.jsx)("li",{children:"Item physical inspection and open balance"}),(0,g.jsx)("li",{children:"Item min order qty and Expiry date tracking"})]})}),(0,g.jsx)(If,{children:"Request a Demo"})]}),(0,g.jsx)(Df,{top:"20%",left:"5%"}),(0,g.jsx)(Df,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(Of,{bgColor:"rgb(225, 255, 246)",children:[(0,g.jsxs)(Tf,{children:[(0,g.jsx)(Mf,{children:"GST & TDS"}),(0,g.jsx)(zf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"GST report Support"}),(0,g.jsx)("li",{children:"TDS and TDS reconciliation"}),(0,g.jsx)("li",{children:"GST Reconciliation with A/c"})]})}),(0,g.jsx)(If,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,g.jsx)(Lf,{children:(0,g.jsx)("img",{src:wf,alt:"Employee engagement"})}),(0,g.jsx)(Df,{top:"10%",left:"80%"}),(0,g.jsx)(Df,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(Of,{bgColor:"#d7faff",children:[(0,g.jsx)(Lf,{children:(0,g.jsx)("img",{src:kf,alt:"Employee engagement"})}),(0,g.jsxs)(Tf,{children:[(0,g.jsx)(Mf,{children:"Bank Reconciliation"}),(0,g.jsx)(zf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Bank Statement Upload"}),(0,g.jsx)("li",{children:"Account Reconciliation with Sales and PO"}),(0,g.jsx)("li",{children:"Rule-based reconciliation of Expenses"}),(0,g.jsx)("li",{children:"Bank statement View"}),(0,g.jsx)("li",{children:"Reconciled statement view"}),(0,g.jsx)("li",{children:"Bank, Exchange rate setup"})]})}),(0,g.jsx)(If,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,g.jsx)(Df,{top:"10%",left:"80%"}),(0,g.jsx)(Df,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(Of,{bgColor:"#ffeadf",children:[(0,g.jsxs)(Tf,{children:[(0,g.jsx)(Mf,{children:"Financial Accounting"}),(0,g.jsx)(zf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Reports (Sales, Purchase and Inventory)."}),(0,g.jsx)("li",{children:"Audit Trail."}),(0,g.jsx)("li",{children:"Statutory Reports (P&L, Balance Sheet, Cash Flow, Change in Equity)."}),(0,g.jsx)("li",{children:"Purchase Reports"}),(0,g.jsx)("li",{children:"Depreciation Schedule"})]})}),(0,g.jsx)(If,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,g.jsx)(Lf,{children:(0,g.jsx)("img",{src:Sf,alt:"Performance management"})}),(0,g.jsx)(Df,{top:"20%",left:"5%"}),(0,g.jsx)(Df,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(Of,{bgColor:"#dfdfdf",children:[(0,g.jsx)(Lf,{children:(0,g.jsx)("img",{src:vf,alt:"Performance management"})}),(0,g.jsxs)(Tf,{children:[(0,g.jsx)(Mf,{children:"Reports and Dashboard"}),(0,g.jsx)(zf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Manager Dashboard"}),(0,g.jsx)("li",{children:"Sales Dashboard"}),(0,g.jsx)("li",{children:"Account Receivable and Payable"}),(0,g.jsx)("li",{children:"Party wise outstanding"}),(0,g.jsx)("li",{children:"Batch reports like Sales overdue, GST not filed"}),(0,g.jsx)("li",{children:"Report Templates"}),(0,g.jsx)("li",{children:"User Access control"})]})}),(0,g.jsx)(If,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,g.jsx)(Df,{top:"20%",left:"5%"}),(0,g.jsx)(Df,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(Of,{bgColor:"#f6eaff",onClick:()=>t("/processandproject.html"),children:[(0,g.jsxs)(Tf,{children:[(0,g.jsx)(Mf,{children:"Process Templates & Project Management"}),(0,g.jsx)(zf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Activity Definition with User group"}),(0,g.jsx)("li",{children:"Equipment and Document definition for Activity"}),(0,g.jsx)("li",{children:"Process items and Bill of Material"}),(0,g.jsx)("li",{children:"Project Activity Allocation Tracking"}),(0,g.jsx)("li",{children:"Project Activity Dependency (Critical Path)"}),(0,g.jsx)("li",{children:"Item Cost and Effort Tracking"}),(0,g.jsx)("li",{children:"Efficiency tracking at Activity"}),(0,g.jsx)("li",{children:"Integration with Inventory Allocation, Wastage and Release"})]})}),(0,g.jsx)(If,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,g.jsx)(Lf,{children:(0,g.jsx)("img",{src:yf,alt:"Employee engagement"})}),(0,g.jsx)(Df,{top:"10%",left:"80%"}),(0,g.jsx)(Df,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(Of,{bgColor:"#fae0f8",onClick:()=>t("/hrm.html"),children:[(0,g.jsx)(Lf,{children:(0,g.jsx)("img",{src:jf,alt:"Employee engagement"})}),(0,g.jsxs)(Tf,{children:[(0,g.jsx)(Mf,{children:"HR & Payroll"}),(0,g.jsx)(zf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"On-Boarding Process"}),(0,g.jsx)("li",{children:"Employee Data"}),(0,g.jsx)("li",{children:"Attendance"}),(0,g.jsx)("li",{children:"Leave Management"}),(0,g.jsx)("li",{children:"Claim Management"}),(0,g.jsx)("li",{children:"Payroll"}),(0,g.jsx)("li",{children:"Performance Management System"}),(0,g.jsx)("li",{children:"Exit Process"})]})}),(0,g.jsx)(If,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,g.jsx)(Df,{top:"10%",left:"80%"}),(0,g.jsx)(Df,{bottom:"5%",right:"10%"})]})]})]}),(0,g.jsxs)(Ef,{style:{backgroundColor:"#b9f9f3"},children:[(0,g.jsx)(Pf,{style:{marginTop:"40px"},children:"Atomwalk Lab Management: Streamlining Labs, Unifying Excellence."}),(0,g.jsxs)(Rf,{children:[(0,g.jsxs)(Of,{bgColor:"#e0f7fa",onClick:()=>t("/labequipmentmangement.html"),children:[(0,g.jsx)(Lf,{children:(0,g.jsx)("img",{src:Cf,alt:"Performance management"})}),(0,g.jsxs)(Tf,{children:[(0,g.jsx)(Mf,{children:"Lab Equipment Management System"}),(0,g.jsx)(zf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Enhanced User Management"}),(0,g.jsx)("li",{children:"Simplified Equipment Management"}),(0,g.jsx)("li",{children:"Equipment Maintenance"}),(0,g.jsx)("li",{children:"Gain Insights with Report & Analytics"})]})}),(0,g.jsx)(If,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,g.jsx)(Df,{top:"20%",left:"5%"}),(0,g.jsx)(Df,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(Of,{bgColor:"#f6eaff",onClick:()=>t("/labmanagement.html"),children:[(0,g.jsxs)(Tf,{children:[(0,g.jsx)(Mf,{children:"Lab Management System"}),(0,g.jsx)(zf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Lab User Management"}),(0,g.jsx)("li",{children:"Lab Process Template"}),(0,g.jsx)("li",{children:"Lab Experiment Project"}),(0,g.jsx)("li",{children:"Lab PI/Dashboard and Report"})]})}),(0,g.jsx)(If,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,g.jsx)(Lf,{children:(0,g.jsx)("img",{src:za,alt:"Performance management"})}),(0,g.jsx)(Df,{top:"20%",left:"5%"}),(0,g.jsx)(Df,{bottom:"10%",right:"70%"})]})]})]})]})},Nf=(so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${gp}),url(${xp});
  background-position: left center, right top;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-position: left top, right top;
    padding: 10px;
  }
`,so.h1`
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
`,so.div`
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
`,so.div`
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
`,so.img`
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
`,so.p`
  color: #666;
  line-height: 1.6;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.95em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`,so.ul`
  margin: 20px 0;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`,so.li`
  color: #666;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`,so.footer`
  margin-top: 40px;
  text-align: center;
  color: #999;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`,so.div`
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
    background-image: url(${hp});
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
`,so.div`
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
`,so.div`
  padding: 20px;
  background-color: #f4f4f4;
`,so.section`
  background: #fff;
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,so.h1`
  font-size: 2em;
  color: #333;
  text-align: center;
`,so.h2`
  font-size: 1.5em;
  color: #555;
  margin-bottom: 10px;
`,so.p`
  font-size: 1em;
  color: #666;
  line-height: 1.6;
`,so.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`,so.li`
  font-size: 1em;
  color: #444;
  margin: 10px 0;
`,so.div`
  background: #ffebcc;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin: 20px 0;
`,so.button`
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
`,()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Rp,{title:"Empower Your Business with Atomwalk Office ERP",description:" Atomwalk Office is a cloud-based ERP solution, designed to transform the way startups, small, and medium-sized businesses operate. Built on cutting-edge technologies like AI and Blockchain, our platform seamlessly manages core business functions including manufacturing, purchasing, inventory, sales, customer service, accounting, and HR.",background:"#52ebff",data:!0}),(0,g.jsx)(Wp,{}),(0,g.jsx)(Ff,{}),(0,g.jsx)(nf,{}),(0,g.jsx)(gf,{})]})),Bf=n.p+"static/media/contactus.d92ad20f9e7e87520f41.jpg",_f=n.p+"static/media/content.b17e184e51f85d52f7ce.png",Uf=n.p+"static/media/support.742caae5101d98ae2c49.png",Hf=n.p+"static/media/hand-shake.65bcad809362961ab098.png",Wf=n.p+"static/media/acquisition.c97c3452c9063b3e641e.png";os().setAppElement("#root");const qf={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px"},overlay:{backgroundColor:"rgba(0, 0, 0, .8)",zIndex:"32333"}},Gf=so.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  max-width: 500px;
  margin: auto;
`,Vf=so.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`,Kf=so.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`,Jf=so.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`,Yf=so.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`,Qf=so.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`,Zf=so.button`
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
`,Xf=e=>{let{isOpen:t,onRequestClose:n}=e;const[r,o]=(0,i.useState)(!1);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(os(),{isOpen:t,onRequestClose:n,style:qf,children:(0,g.jsxs)(Gf,{children:[(0,g.jsx)(Kf,{onClick:n,children:"\xd7"}),(0,g.jsx)(Vf,{children:"Contact Support"}),(0,g.jsxs)(Jf,{children:[(0,g.jsx)(Yf,{type:"text",placeholder:"Enter your name",required:!0}),(0,g.jsx)(Yf,{type:"email",placeholder:"Enter your email",required:!0}),(0,g.jsx)(Qf,{placeholder:"Describe your issue or question",rows:"4",required:!0}),(0,g.jsx)(Zf,{type:"submit",children:"Submit"})]})]})})})},$f=so.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 120px 20px;
  background-color:#ddf5ff;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,em=so.div`
  background-color: ${e=>e.bgColor||"#f0f0f0"};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
`,tm=so.div`
  background-color: ${e=>e.bgColor||"#f0f0f0"};
  border-radius: 10px;
  padding: 10px;
  display: inline-flex;
  margin-bottom: 15px;
  width: 10%;
`,nm=so.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  margin-bottom: 10px;
`,rm=so.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`,im=so.button`
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
`,om=()=>{const[e,t]=(0,i.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)($f,{children:[(0,g.jsxs)(em,{bgColor:"#f6eaff",children:[(0,g.jsx)(tm,{bgColor:"#ffe9c0",children:(0,g.jsx)("img",{src:_f,alt:"Sales"})}),(0,g.jsx)(nm,{children:"Sales"}),(0,g.jsx)(rm,{children:"Explore how Atomwalk can benefit your business."}),(0,g.jsx)(im,{onClick:()=>{window.location.href="/seals.html"},children:"Talk To Us"})]}),(0,g.jsxs)(em,{bgColor:"#ffeadf",children:[(0,g.jsx)(tm,{bgColor:"#dff2e1",children:(0,g.jsx)("img",{src:Uf,alt:"Support"})}),(0,g.jsx)(nm,{children:"Support"}),(0,g.jsx)(rm,{children:"If you are our customer and need help with the Atomwalk application. We are here for you."}),(0,g.jsx)(im,{onClick:()=>{t(!0)},children:"Get Help"})]}),(0,g.jsxs)(em,{bgColor:"#e1fff6",children:[(0,g.jsx)(tm,{bgColor:"#c6f0ff",children:(0,g.jsx)("img",{src:Hf,alt:"Partnerships"})}),(0,g.jsx)(nm,{children:"Partnerships"}),(0,g.jsx)(rm,{children:"Interested in partnering with us? Let us know."}),(0,g.jsx)(im,{children:"Get In Touch"})]}),(0,g.jsxs)(em,{bgColor:"#edf5ff",children:[(0,g.jsx)(tm,{bgColor:"#f1d0ff",children:(0,g.jsx)("img",{src:Wf,alt:"Media"})}),(0,g.jsx)(nm,{children:"Media"}),(0,g.jsx)(rm,{children:"Any PR related questions? Always ready to talk."}),(0,g.jsx)(im,{onClick:()=>{window.location.href="/contactUs.html"},children:"Contact Us"})]})]}),(0,g.jsx)(Xf,{isOpen:e,onRequestClose:()=>{t(!1)}})]})},am=n.p+"static/media/phone-call.e7db31039cbc0dc30592.png",sm=n.p+"static/media/email2.9082177d266cee25a57b.png",lm=n.p+"static/media/location.39261a4c95eecf324099.png",cm=so.section`
  padding: 100px 20px;
  background-color:rgb(225 255 246);
  text-align: center;
`,um=so.div`
  max-width: 1200px;
  margin: 0 auto;
`,dm=so.h2`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,pm=so.p`
  color: #666;
  margin-top: 10px;
`,fm=so.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 70px;
`,mm=so.div`
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
`,hm=so.img`
  max-width: 80px;
  margin-bottom: 20px;
`,gm=so.h3`
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,xm=so.p`
  color: #666;
`,ym=()=>(0,g.jsx)(cm,{children:(0,g.jsxs)(um,{children:[(0,g.jsx)(dm,{children:"Reach Our Team"}),(0,g.jsx)(pm,{children:"We love questions and feedback - and we're always happy to help! Here are some ways to contact us."}),(0,g.jsxs)(fm,{children:[(0,g.jsxs)(mm,{style:{backgroundColor:"rgb(181 255 206)"},children:[(0,g.jsx)(hm,{src:am,alt:"Automated Processes"}),(0,g.jsx)(gm,{children:"Call Us"}),(0,g.jsx)(xm,{children:"Call us to discover how our products can work best for you."}),(0,g.jsx)(xm,{children:"Phone: +91-7259555003"})]}),(0,g.jsxs)(mm,{style:{backgroundColor:"rgb(188 216 255)"},children:[(0,g.jsx)(hm,{src:sm,alt:"Centralized Data"}),(0,g.jsx)(gm,{children:"Mail Us"}),(0,g.jsx)(xm,{children:"We are waiting to help you and your team - so don't hesitate to reach out!"}),(0,g.jsx)(xm,{children:"Email: info@atomwalk.com"})]}),(0,g.jsxs)(mm,{style:{backgroundColor:"rgb(255 211 168)"},children:[(0,g.jsx)(hm,{src:lm,alt:"Scalability"}),(0,g.jsx)(gm,{children:"Our Main Office"}),(0,g.jsx)(xm,{children:"Visit our main office, where our team is always ready to welcome you and assist with any inquiries."}),(0,g.jsx)(xm,{children:"Bengaluru, Marathahalli, 560037"})]})]})]})}),bm=so.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-image: url(${gp});
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
`,vm=so.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;

  @media(min-width: 768px) {
    font-size: 2.5em;
    text-align: left;
  }
`,wm=so.div`
  flex: 1;
  margin-bottom: 30px;
  text-align: center;

  @media(min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`,km=so.div`
  margin: 20px 0;
`,Sm=so.form`
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
`,Am=so.h2`
  margin-bottom: 20px;
  font-size: 1.5em;
  text-align: center;
`,jm=so.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  /* background-color: #f6eaff; */
  border: 1px solid #333;
  /* border: none; */
  border-radius: 5px;
  color: #333;
  font-size: 1em;
`,Cm=so.textarea`
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
`,Em=so.button`
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
`,Pm=(so.div`
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
    background-image: url(${Bf});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.5; /* Apply opacity to the background image only */
    z-index: 1;
  }
`,so.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3em;
  height: 100%;
  z-index: 2; /* Ensure the text is above the background */
  font-weight: 500;
`,so.p`
@media (min-width:768px) {
  width: 440px;
}
`),Rm=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Rp,{title:"Let's connect",description:"We would love to hear from you. How can we help?",background:"#ffc24b"}),(0,g.jsx)(ym,{}),(0,g.jsx)(om,{}),(0,g.jsxs)(bm,{children:[(0,g.jsxs)(wm,{children:[(0,g.jsx)(vm,{children:"Get in Touch with Atomwalk \ud83d\udc4b"}),(0,g.jsx)(Pm,{children:"Feel free to connect with us for any of your needs regarding our services. Our support team is ready to solve any of your issues. Just push a text to us and we will get back to you immediately."}),(0,g.jsxs)(km,{children:[(0,g.jsx)("p",{children:(0,g.jsx)("strong",{children:"India"})}),(0,g.jsx)("p",{children:"Bengaluru, Marathahalli, 560037"}),(0,g.jsx)("p",{children:"Email: info@atomwalk.com"}),(0,g.jsx)("p",{children:"Phone: +91-7259555003"})]})]}),(0,g.jsxs)(Sm,{children:[(0,g.jsx)(Am,{children:"Drop Us a Message"}),(0,g.jsx)(jm,{type:"text",placeholder:"Name*",required:!0}),(0,g.jsx)(jm,{type:"text",placeholder:"+91 Phone No*",required:!0}),(0,g.jsx)(jm,{type:"email",placeholder:"Email*",required:!0}),(0,g.jsx)(jm,{type:"text",placeholder:"Which Business do you have ?*",required:!0}),(0,g.jsx)(jm,{type:"text",placeholder:"Location*",required:!0}),(0,g.jsx)(Cm,{placeholder:"Message*",required:!0}),(0,g.jsx)(Em,{type:"submit",children:"Connect With Atomwalk Today"})]})]})]}),Om=n.p+"static/media/about-us-bg.004c9dbfb932e1e45fde.png",Tm=so.div`
    background-image: url(${Om});
    background-position: center;
    background-repeat: no-repeat;
    height: 1850px;
    padding-top: 74px;
    background-size: cover;

    @media screen and (max-width: 767px) {
        height: 1450px;
    }

`,Mm=so.div`
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
        margin-top: 20px;
        width: 370px;
    }

`,zm=so.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
`;function Im(){return(0,g.jsx)("div",{children:(0,g.jsx)(Tm,{children:(0,g.jsxs)(Mm,{children:[(0,g.jsx)(du,{text:"About us",color:"#000",fontSize:"48px",fontWeight:"900",letterSpacing:"2.4px",textAlign:"left"}),(0,g.jsx)(du,{text:"Empowering Small Businesses: Atomwalk Office is dedicated to empowering small business owners by providing a comprehensive Virtual Desktop Interface (VDI) that enhances operational efficiency and streamlines business processes.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"25px"}),(0,g.jsx)(du,{text:"Innovative Financial Solutions: Our platform offers easy financing options and seamless connectivity with banks through blockchain technology, ensuring secure and efficient financial transactions for your business.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,g.jsx)(du,{text:"Operational Excellence: With Atomwalk Office, businesses can monitor and track their operational efficiency in real-time, enabling better decision-making and improved productivity.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,g.jsx)(du,{text:"Cutting-Edge Technology: We leverage the latest advancements in technology, including cloud services and blockchain, to provide a robust and secure environment for your business operations.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,g.jsx)(zm,{children:(0,g.jsx)(Hd,{onClick:()=>{window.location.href={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SERVER_NAME_URL+"/careers.html"},text:"See Open Jobs",variant:"solidOrange",width:"auto",height:"50px"})})]})})})}const Lm=n.p+"static/media/TeamImg.c0d26972b4149da836b5.png",Dm=so.div`
  background-color: #f5e9fd; // Light purple background
  padding: 40px 20px;
`,Fm=so.div`
  text-align: center;
  margin-bottom: 50px;
`,Nm=so.h1`
  font-size: 2rem;
  color: #6a1b9a; // Purple color
  margin-bottom: 10px;
`,Bm=so.p`
  font-size: 1.25rem;
  color: #333333;
  max-width: 600px;
  margin: 0 auto;
`,_m=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,Um=so.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media(min-width: 768px) {
    margin-bottom: 0;
  }
`,Hm=so.img`
  max-width: 50%;
  height: auto;
  border-radius: 15px;
`,Wm=so.div`
  text-align: left;
  max-width: 500px;
`,qm=so.h2`
  font-size: 1.75rem;
  color: #333333;
  margin-bottom: 20px;
`,Gm=so.div`
  margin-bottom: 20px;
`,Vm=so.h3`
  font-size: 1.25rem;
  color: #6a1b9a; // Purple color
  margin-bottom: 5px;
`,Km=so.p`
  font-size: 1rem;
  color: #555555;
`,Jm=()=>(0,g.jsxs)(Dm,{children:[(0,g.jsxs)(Fm,{children:[(0,g.jsx)(Nm,{children:"Our Mission"}),(0,g.jsx)(Bm,{children:"Empower a new generation of entrepreneurs to pursue their visions and drive positive change for themselves, their communities, and the world."})]}),(0,g.jsxs)(_m,{children:[(0,g.jsx)(Um,{children:(0,g.jsx)(Hm,{src:Lm,alt:"Dedicated Team of Innovators"})}),(0,g.jsxs)(Wm,{children:[(0,g.jsx)(qm,{children:"Our Approach"}),(0,g.jsxs)(Gm,{children:[(0,g.jsx)(Vm,{children:"Inspire."}),(0,g.jsx)(Km,{children:"We connect deeply with our customers\u2019 visions and use creativity, technology, and dedication to bring their ideas to life."})]}),(0,g.jsxs)(Gm,{children:[(0,g.jsx)(Vm,{children:"Take Bold Steps."}),(0,g.jsx)(Km,{children:"We embrace courage in all we do, pushing boundaries and meeting challenges head-on with confidence."})]}),(0,g.jsxs)(Gm,{children:[(0,g.jsx)(Vm,{children:"Think Like Owners."}),(0,g.jsx)(Km,{children:"We treat every project as our own, constantly refining, innovating, and creating new solutions that drive progress."})]})]})]})]}),Ym=n.p+"static/media/people.4f89400e19d25d36ee95.png",Qm=n.p+"static/media/handshake.fec586e9ced4464da168.png",Zm=n.p+"static/media/startup.be4fd0c3b78108011c51.png",Xm=so.div`
  background-color: #fff7e6; // Light cream background
  padding: 100px 20px;
`,$m=so.h2`
  text-align: center;
  font-size: 2rem;
  color: #333333;
  margin-bottom: 100px;
`,eh=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,th=so.div`
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
`,nh=so.div`
  background-color: ${e=>{let{color:t}=e;return t||"#ccc"}};
  border-radius: 8px;
  padding: 10px;
  display: inline-block;
  margin-right: 15px;
  width: 50px;
`,rh=so.p`
  color: #555555;
  font-size: 1rem;
  margin: 0;
`,ih=()=>(0,g.jsxs)(Xm,{children:[(0,g.jsx)($m,{children:"Our Beliefs"}),(0,g.jsxs)(eh,{children:[(0,g.jsxs)(th,{children:[(0,g.jsx)(nh,{color:"#8ed1b0",children:(0,g.jsx)("img",{src:Ym,alt:"People Icon"})}),(0,g.jsx)(rh,{children:"Business is ultimately about valuing people above all else."})]}),(0,g.jsxs)(th,{children:[(0,g.jsx)(nh,{color:"#db70d1",children:(0,g.jsx)("img",{src:Qm,alt:"Hand Icon"})}),(0,g.jsx)(rh,{children:"We have the power to make a meaningful difference in the world."})]}),(0,g.jsxs)(th,{children:[(0,g.jsx)(nh,{color:"#fbbd3c",children:(0,g.jsx)("img",{src:Zm,alt:"Rocket Icon"})}),(0,g.jsx)(rh,{children:"Innovation should be a core part of our identity, not just an option."})]}),(0,g.jsxs)(th,{children:[(0,g.jsx)(nh,{style:{width:"65px"},color:"#6cd5ff",children:(0,g.jsx)("img",{src:Hf,alt:"Handshake Icon"})}),(0,g.jsx)(rh,{children:"Building connections and partnerships helps us break limits and aim higher."})]})]})]}),oh=n.p+"static/media/linkedin.6892b3ae328c7a1e055f.png";const ah=n.p+"static/media/Sk.1620eca3feffff84fbec571e63f18988.svg";const sh=n.p+"static/media/sk2.7c9fc7c4395d941a8f1bcca5c65f2b7c.svg",lh=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,ch=so.div`
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
`,uh=so.div`
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
`,dh=so.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`,ph=so.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`,fh=so.div`
  perspective: 1000px;
  width: 100%;
  max-width: 400px;
  height: 420px;
  margin: 20px;
  position: relative;

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
`,mh=so.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`,hh=so.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,gh=so(hh)`
  background-color: #f8f8f8;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,xh=so.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
  border: 2px solid #ddd;
`,yh=so.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`,bh=so.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #555;
`,vh=so.p`
  font-size: 1rem;
  color: #777;
  line-height: 1.4;
`,wh=so.a`
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
`,kh=()=>(0,g.jsxs)(lh,{children:[(0,g.jsxs)(ch,{bgColor:"#fff8f0",children:[(0,g.jsx)(dh,{children:"Leadership"}),(0,g.jsxs)(ph,{children:[(0,g.jsx)(fh,{children:(0,g.jsxs)(mh,{className:"flip-card-inner",children:[(0,g.jsxs)(hh,{children:[(0,g.jsx)(xh,{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADIAMgDASIAAhEBAxEB/8QAHQAAAAcBAQEAAAAAAAAAAAAAAAMEBQYHCAIBCf/EAD0QAAECBAQEBAQEBAcAAwEAAAECAwAEBREGEiExBxNBUSJhcYEIFDKRI0KhsRVSwdEJFjNicuHwJENTov/EABsBAAEFAQEAAAAAAAAAAAAAAAUAAQIDBAYH/8QAKhEAAgIBBAEDBAEFAAAAAAAAAAECEQMEEiExQQUTIjJRYXEUIzOBocH/2gAMAwEAAhEDEQA/AMtCfzE3N7i+8cCcLmg1hhM2pI66RyxOKyXF9+0PZRRI25oJJsNPWOjPX3O2xiPpnVKVsQLXtHXzah3taE2SSHwz4ypB3jkVABQF72hiM2o29e8BczZVu3Q9YimPVcj380k21Fx2gJqAKxc3tDCmbtYb+kFqmlXJJMSFyShU+nTUEX6QYmohI0PveIkqdNxqbX27R0uolAteH75I1fZIJupFSNOkN7NSJqaEj+Ua+8N6ObMqFvCD1P8AaDW5duXd5uZRc28WgiuTT4JxXJqbB7hxLw/lJ5Crvy55Dve46/aG2tU3+KUqYld1LScg7KGoiosIcT65hJmYk5JTPyswQXGVpCgogaEf9RMKHxVZnHwiel+SSfra2B9IEexKEm+0EvfjJJPsvz4dnmcVYNalXUn52mLUw6P9p+j+o9otxGG2mVfQAk9YzZwWxizhjie7KtTCEUytNgZgbgL3T6a3HvGjncSKLbyOYPw1a3G0czq8c8eVpPg34JR2V5RX3F7B7clOSlYaTugsOkdeqTFcqd0ASbDsYt/FdZFZo0xKOPtG4uAAL3G0VCWRe1tb6x0fpuSU8W2XaA+uinPdHyVtxVoofbMy2LqPj03uNFfpY+0NHCDE5oFfbQ4v8B3wLHkdj7G0WZiCmifprqAAVo8aATuR09xp7xQ86yuiV0t7IKsyCD+U7QUfZmiriaQxi2qa5IQ3nUVGwSLkw2yOB5ybUHHUplkW2XufaFeBayqt0lmYKwXGk8pRvrcdfeJC4+u5JJJ9YSUfJmlu8C48OaLRqXJzr0w1MOOozrQ4pIyHtlveGaUmZNVVKnWTNSygoJS2rLl6A/8AUKlz8y6nKp0lNrWIG0JGXHZMqDCuXmBScqRqDuI1+7BL4ozbMj5k7PKi/MFpRLvOTawKug7CBCVxTgSpJJKT0tAiHu2Wwx7VTM6fwuVukhlI73ED+FyirBTaQLa2EcT8yZeaWgE9d4JTUQlWb/14SpqzXymHfw6WB/0xod47TTZRdwWk+0I/nxcqJgInxa+Yw1UP/kVro0mjUIB/9tBH8JlM2XJe380ByfGW4OvnCczyS5ckf0hUJu+BSqjSRWCGxYRwqjSJuOUL26QSidCWxlVe8D5xKxfPfTpD0kPbfYb/AAGSyKPLGb9oZ59mQUhz5VoLWg5TrpeFVRqJQza5F9rbkwbSaE7UEystLJvOvnMbjYRCUtqtlkIObpDMy6ZVIcyFKeyReFiC28MzjiRmtZRN4s6X4PVBcunwpuRroYTq+HyqTZshxLQJ1uNIwvWYV3IKr0zVPqBWs1UGJNSGy2Fnoroof0MJXKq409zkJJA+q43i9qN8L4aQlc5NOPHskWtD8OA1MlmlI+Xz3HiUrWKH6lgXFmuHompauSoo6l4ockZ2UmUXSoLSpIHQg6GNc0nG/wDH6KxMJIKn0AqCDsbW1+0UdiLhIKRTluSJPMaOcI7jtEeoHEmbwwlBbu5J3IcZUdUnrEZxhrI7odox5tPl0bSkuzQy3AQSpRzJ6d4SBlteY28UR+i4ulcRyiJiWWkpUkFWux7HsYdJefSHgnbpC062OjBme+HDFLsikKNk6bxSPFjD5ps+mZQglvQj/iT/AEN/vF7cxS0+EXHpET4jUb+MUF3TxNi+g6df7+0FJJIxQdOmQvg3iX5SqiTdI5M0Mlz0V0/tF2rYKVa2jKFKmHKXOgfQtte40IIMamwvVRiKiSs4FJUVoGYD8qhuIb9EclxdhiwE6ajzhbhp+jy1XbcrsrNzdPSkhTUm6lpZPTUgwcqUzA/+EIZmXU2g2GkPRCLRJMW1vAsxRVsUKgVOVqBULTE5OpWlI6+EJF/vAiEuIKTr7wInY9t9mX8bAyVTVrZJvoIjqpy40v8AeJziWSan5n8S/wDNDIcPSyddbw0H8TVKrGD5gixJNrx2mZIt4lE2h/FAl7HtfTtHRoMuLgi/W/lFlkSNqm7Hr11vvBQmlZtIkaqDLKVcZgP2jxWHJUG9zc+cLkalfJHjMrBCQbpjlyfUyCQDmGwiQmhS9zZR3vDbiGlNSdNLzd81wCewiKZIapuoOTTIQdV9I0RwB4dulpurz6CVuDK1mGgHeKZ4d4dYxBWZMOm7RcACO8bUw62iUlZZtKQ2ltISANABAX1HO4R9uPk6j0fTRyT96Xgf5OjMoSlJRfpe0L1UhlsAhIvBCKxIygHPmkNjpdUOMrU5KdSotOpXYdI5l4p1dHaLPjumwv5doIAygecNk9LpdzWFhaF9Qq0rKIKleIJFz5xBp3ivRUzKpe5Q6k2KYlHTzn0iGTV4cf1MTVaSDjT6FJsLGMpcRKWuiVieWlN5dayopHnGoprFFPniQ2+Bm7xRXHGScp7iZkDOw6Mye2Ybj3EG9A5Y8m2XFgD1XbqMO/G7oZOB0+pypVGWC7tloOJSTsesW8JohV72PQnvFGfD+0tzG044hJ5SZVVx0FyNIvJ2T5bytdL3F4J5F82calxyS+nvGalG3QdCP1jyfaQqXWlVlBQykWhDhR4JW9LLV4frTf8AWHqrspbk3F503CSdovjyjHJbWZkxrTBS6wp1CCAs2PnbY+4tFlcDsTBEy/SnF/hujmNC/wCcbj3H7Qg4s4cLlLanUC6mrIXYfY/fT3iu8MVp6kzsvNMmzrKwoe3SLqaJNqcTXxdSUW6iEUylKgekKKPMM1qkSs6wpPLmGwtIA28o6ekrJOoP3h+zInXgYX2bqIAIgQ90t5im1OXmZuRRUpZtV1yq3FIS4OxKdR7QIf8AY1WZTqjocZacG5TlJ9IZkToyi4BPnDs8C9TUqTqoa3vEMfnOQ+6m9gg2iGOgjNU7H4TmXL4uto9+dy65v1iPpnFFQN7iOlzxjTwVD2idukZSLmPVTdk2Ise/aGFicCUjUm/aD1zIKdzfziLYqY5iZKrm4ENlddU/IONgXuL99oJRN9Dt1hbRWm6rWpKTeXlafdS2o9dYi3SbJKLbSRLfh2pCpqv81wWalmy4L9zoIvFdbqVSnXm5YCXlWzl5y9tOsRTgvhw0Wq1uTdbKXG3AyQeg7RaFawM9U2AzmUmW3KGfBm9SI5vNkSz3I7bR6WctMopfsgtYlJJpAmJqsvPOJGYgqCU2v+14mOAa0jnNtpupDnhClQZMYYbnabL0xynJdYl0lLSV3OUXv031HWFdDwwikTiXXUBC0apSBa5PUxTqM+OeOk+TZp9Jkjl+S4OsdVNUk8iUSoZFJKisdB2iHmjNSdGXXESLE6C4UBF05yqxOx11ta9t4sTF9MZecaeIAIF8w3EJpbDM2thDss6Mitbi0VafUQhH5I06nRznL4MrGmzkriF0y05SHaW7lzJVktv00jniThlFRwLMMK/EWwAtCgNdItuTwqiXeU7MnM6De6jeGjGdNZXJutJtlcbKTbzEL+TF5FtGekccTUu2jMfA1CaTiGpMqSbPpCUK7kaxcs63lQFWIsbGIyxgVeC8BJrM0OXOiZS+B/szZbfY3iWjLOSoU34kOICkn1EFnkWSW6PRxWfSz09Rl2+Rvkp5UpNtuD8pvfyia1BTc1T2ltkLQ8oWIHQaxXUwpTSspuCDEgo9efmWJeSS0CJcE572320+8bMTt0CsqqO5j+wujhmdYrFJVVWnWihtCZkshCj+Y2Bv6Rlioyq6TWpiXWgtlDhGW22saZmcx1NrxT/FygcmdYqbabBwZFkfzD+4/aNso8WZcMlur7ll/DvidNQps5Q33QXZY85gK6oJ8QHof3i0p6XXySMiNeyoyJw+xSrCWKqfVSboacCHR0LatFD7a+0bMmmW3pJLzZCm3EhaVDYgi4MRjyPOO2X4Im6yUq1Fh2zXgQueb1sO8CHoqU66Mi0wF2XW0VHtvaIlU6M+7UHHUFOVWvbWJfTFBqeeZO4JAhtqS/l3ljfxHW0U4+HQUlwiMt0eabIzWNj0MGOUqbI0APWHUTgKja23WDEzid0n3jTRRuGJmlTaARYZhClNPeULBIJ7CHNU6gAkn/uPBNpFze4PaFt5I2/sNaqY8nUoue0OGHKW8ivUxZNkpmW1EjcAKEGOT17dfXrHslURJTLT9/8ATUlWnlrEZr4suxy+SZrNuRlZDEkw+zfmTBS46TsTbeLHlKq2W0osNtYrNKguVp80ASXmUKzeoBA/WJFT5ha1pJNrdo4bLBuXJ6pp8katdE9fmZWTleYgJ5qhvtaKpq/FGnUetMSvIROTSnPxF81I08gd/SIVxPxhW1VsU5p5UnJKIRzNsw9YJkcCUCoJC1pn6pMJFy4ynwg+RjZj0kdqeTyY8uryZZuOFdFp8R+LFMk6Kw9JNyy3SsH8XQIHUnr5WhmwdxgpUxMuATTDC7BXKKvDfrDGzgSVbkwh+jTc+2lISgTSx4B5a39zEUxNw/k5tpaJGgOyj6iCFoWMqT94vWDEo0UznrI8/wCi+53EsnWZD5iWWlwHqg31iKVV9TzYzbbQycM8FzGGaO8H5hSkukL5ROiDaHyfRdsBOutgBrcxh9uOObUXaNkdRPJiW9UxJW6U7jDCs1SAn8Z1sloAdk3v9wIg/DKYXUaByFpPzMmosuJO4sY19wP4MT0k/MVOuSJlWy0EsNP/AFkk3KrdBGf8d4YZ4SfEpO01NmqLXR8wwOiSvceyrxdhz2pQSOc9Sqc1KL64IViOmrlplLgScrg+xhHh1madqzbLKglTyw0Lm2vnFuYxoMvNUh8tgc1g59O3WKqlW1MJS4k5VhWcHqDfSCumzqaT8nN6jHSLEPC/E6rnktAd1OCG7E/BKuVuhTMu45KpXlzJAUVHMNR09veLvwlXHsS4bkp1mU5mZAStRcSBmGh09YfqVKMvzSk1NSpJgJvnZAdUT2tpHSqCmuDnFkcHyj5juSbsnMvyzqcriFFCkqGxEa7+GBauImCFyUxU1Im6UsMKayAnl28B1+3tFW/FZgWRwhxGMzSVPrp9RR8wlbzYR+JfxpsCeuvvDP8ADfxDc4fcUpEqdS3IVO0nMFeqE5j4VH0NvvGbasc6CM2skNyNnjhXIt6uzMw6euwECJtMU6fcSLTyW7//AJsA/qTAi9xRkXJ8vawgU/FEwkDRSyQB5w24nbKGHHBobBX2h4xu0Wqy06BotIN7/eEVfY5tNCkgEKSU/cQKh4YckuKIMiduSQbk+cdtzl9L210hlzqCsvXbQQah/l9TtfWNl2ZKHMzult/SAmfzAC9rQzJmCtR3j1tas4Ftt4l0IelTthYG3eOUThFuvrDW46e/oRBbbq1KsD7Qw66Lw4X8Vqk9U5Chz81zJGxQzmAulVtBft0jR1FnEONJJOvUxgtqYcln23W1FDjagpKgdiNo0/w7x+rElEbm0H8dqzcw1vlV39DATW6dfXE6j0zWNf08jLdmaTJ1R7mPsoctYgKSDaHiSpqJJsKaskW+kCw/SIRS8VNqISpWnn0iWyFYQ8hH4gI7iAdZFwdLjyQ7sXLQtZsoaEblO0JX6e20kK1UDtCt+sSZZy5wCOl4jFVxUzL3Q34ldk7CJSU5NIslmilbFs1PCWSEG1r6xEsQY+ksE8mszbHzktIvIcMrmyl4hQIQD0vaErs/M1V4pRdAOpN4o3j1iJ1NalqEMwYZaDywDqpauvsI14dOss9kgTqtU8eJyRtCm/4jeDcRIbbfkZ+hTJ0KnQHWxfzGv3EV78UFX/zxhum4qk30vPU5xLqHmz9TKu3obGMFT7y2imxCRbYGNFcAMeIxVhKcwbU151tsrDJUblTZ3A/4kxsyaOGBrJjOWx6hzThPyW5RsZKrVAl5wLKi8zlVc7m1jDFNrEq+pr8vQ+UQThvUXqdNzuHJi/NlXjbyAOv9ImVcRdCHhvsYdQ2SpeSh2+y5/h8xOgzU7Q3HLhwc9kHuPqH21i6HmBa+0YxwdiZ3DmJafUGzbkOhSrH6k7KH2jY8pX5WoyzL7Db623UhSFclViDB/S5HtpgLVQUZ7l5Kl+JTAYxZw+mJlprmTtMPzLdhqUWstP219owzMJLJzoVlWhWZKtvePqxU8IzDku2l5UopqZ/Cy/MINwodddBbe8fOzjlw2c4Y4/qNGcU0tsK5zK2VhaS0rVOo7be0Tyxv5Iv08r+Ejcnw58REcT+FNIqDjgXPy6flJodQ4gWufUWMCMo/BrxVTgbH0zh6cU6qQrKcraGxmIfT9Nh5i4gQlNURUdlporLiFJENsOjXIooIMNa8sxRkgDxAX+0SfiBL5qfN66oOcX/92MQ6jLVMSTjY1IGkB4L42GeLIo7h9lx9akqIKiSRHK8ONKSSVHfaFVQmPlZlaTp0hOmo66nWCUaaMbbTCUYbl21iy1EWsY6/y+0NQs+/aDBPXFxsYCZ0BJGa0SasVnJw+1vmsnzjhOHWApNlkW8toOVOlWnuI9E3ktrcHoDCoazz/L7SiLqJMW/8PlJQmq1SWSq4caSoA+RP94qZqZWVadekaq+Czhn/AJ7mcXPCyZ6Wkmvlc23MLl7e4Tb3jLqYOeJqPZv0OWMM8ZT6FNSwgZZedAKATeFNLk3GkhGRzb8piz5+hqDa2nUZXE3SpJGoI7w006k8t6wSdO4jjXnklUuz0daeDdx6IsuhPTCf9FZV2hG/hh1IUVJsDrYCLiRT0BgKCOm4hmn6UVaKGpMMs8+aHeCP2IVSMNBuXzqTYW2tGTfiLp8zJcTpwusrYu20UBXVJQCk+94+hWDMEOYtqKJBF0y6QFzDttEI/udhGSvjfkZUccqvLNICWm2ZdpKQPpCWkgD2FoOel4pylLJI5r1nNCMVgj35MpVNPUmxI2MS/gLPLk+JFMINwvO2q/YpjqY4ZT0/ShNyK2ptFtUJVZST2IhXwTwvOjiGwt+XdYTKpU4orSQAdgIMZXFwaOXWOcWm12WfxDQcKcRadXGtGJwBD1u40P3FjFgulM7KWBuhabg+UMfE6jHEGEJkoQC/Kq57Z66b/peE3D+uisYZl1FV3WPwlJJ102P2gddwT+xdkTjJ/kOTJFteqvvpGpuAuJP4xg1Mg65mmacrl67lB1Sf3EZjnjy5gkaBWvpE34L4uVhzGUuh53JKzv8A8dwHbX6T9/3jZhnsd/cHZoXHg1M8gG97axm/4u8DCfokjiRhNnZM8iZKR/8AWo6E+iv3jRLswTe5tEfxZSJfE9Bn6TNpCpecZU0ryuND7Gx9oKPlNAzHLZJM+bYqExQapK1CUWWZqWcS624NwoG4MCHTGdBeo1WnqdMoyvyzimVjbUG1/feBGKgs47uSxcZS+dlYNiHWyB5xW2Gn8k6WyAQBtFr4lRzJNtRGoVFRyLPymI1NX05hHna8D8buJrfaGTH0mqTmkuIFkqsbxE0zuuqoszilTSKOHU621HeKkkZWYnVhLDanSegG0EcTTiUZI1KhwTNa/VeDkzNwbqEKpPB8y5YvrS0BuBqqHuVw3JSifGgvK/mcOn2i+ilpEebWt4+AEm+yReHBimTjiASjKD/ObQ/+FtOVtCG0f7RYQbKy/PmBc3A1Jh9rYqQnptJ5RUtw5l29hG2P8OWya3i9oqssyjK0i+ps5r+4jHQbJeUL2vt5iNTfATPKkuLbsuCUpmZBxBHexBiTikhm6Zrrinw5eeU7iGjs84K1nZRA1v1cSP3EU9LMtuTQWk2udQY2JTjy3Mp+lwRUnGHg/wApT2IKEzZYuuakkDRQ3K0Dv3Ec7rtAst5IdnXemeqPGlhy9eGVt8q2ykKJsB0MI6Zh6dxliJqm0trmOHxOOkeBpPVSj/68JKZ87iepy1KpqedNzBslJ2QOqj2A6xqLAuCZHA1CTLS45j6wFzM0oeJ5f9uwgfo9G80rlwkFvUNetLFKLuTG2hYSkcFUZumyg1PjfmFABTiuqif2HQR8l/iLxIMZcWcR1VteZt6ccDZv+UHKn9BH1N4z4sThHh5iisuLymXkXAg/71DKn9SI+QNfd58047e+Y3JMdpjgoQaR5/ObnLdLsbJKfmJAKMu6tsncJOhiWYc4jzlHSUuS7UwFHxKtZR94icui1yRv36x4lstuG6T5CISxRn9SHWSSXDLekeKVKnGyibQ7LBYKSLZhb2iJYBnEUfFM7JNuFdPfWrkuWsnun+0RRbBSkW0J84CFqbXe5SQYz/xIK6HlmlLiRedQQHWMySbpPaGpDymXkuIUQtJzJUNwR1itJPEVQlrpRMrCD+W9wYdpTFy27B9HMzblOhtFK07Q25NG58EYrGJcMSM7mBcU3ldF9QtOhv8AvDq9M+kZt4H8UKdIuTNLnJ5uUZd/EaL6soz7EX21/pF6IqTb6AtC0uIUNFJVcH3jdFuuQRkioyoz58TeCks1pmuMJs1PIyOkdHUDf3T+0CLV4o0dGKMFVGV2fbRz2FfyuJ1H31HvAiiad8BDFkuJUVTlkv091JBVlF4prEct8piTmtqGWyTodjbURY9QxpKzWGpmYlUOoSv8Jtah4SSbG3prFazAE08De5Kb3jHpcLacn0bczlidPs7q1bNWkxKuy6VsjQ3Op9YaWWUSqAltsNo6BAtaHUSYyZQAR3j1MvkuCAO0FI41Hgyym5cjfmNrq69Y4KSoC4Fx+sK1t7kaEGC1JygKy3HnFyS8EG76CFA2uQddbQ5SLIbRc6KVqbmE0ozz3LnRKe+msLiddLEDtEaFyecmy82um1heNEfBROtynHSjNK+qZZfZB8yi4/aM9c0Aa6adYtv4XaoKXx2wc8pWXNPIbJ/5Aj+sSdURs+q09PStFk3J6ceblZSVbU8884bJbQBckntvFE1T4m5mt4ukaZSpZDFHmkB1maK7LW3r41X0SLAn06xZ2NJBrHdMdphCZijvNnnBJul8dRcbp3jMmKuG05wqxZRCwwio0YNOycqZj6VJKVZGXCdtym/WMk7jDcuzVCpSSLQodckqVVHqoilU2VnKg2S67LzKlZk3F1JBIAHVRHlEjwXxCnJyvtUx5cu9JzzS1NuS8xzEJcTrYX11AMQSnh4sU1ycobTTbcqtLiUIKFNq3DSLlVwq1jf/AKhHhvCL+K8bUOeorj1MlcOutuvp5hWhd05uQLgHrYg7DYaxgw5ZSlsQW1OGCi5S7EPx24k/hPCdinJXlXUZ1OYd0oBV+9vtHzim0KdCrXzdI27/AIhdabdmsKU9pQU1yXZgp6glWXX7GMTqGZZOnqINqtqQCfYjYatfMMhHeOXGitOZCSSnreFxstJsDnt944lRlB033vpCaGsQKUVZdQT0v0jzLdVjfzvtHU0kNPZNNdbDpBrbdyBqep9IjQrPW2ivSw3g4Spt7aQoaaAF7awpbYKxc9el4mlwR5Y2pZy7bxMsBY/qmEJ1Blppa5POOZLqUShQ66dIjczllGFuEagaesCQZLbCCr6jqo23JhVXYzSapo2BNVZqo0ZTzZu260Fp9CLwIr/A1XVNYIlAtdylKmrX6A6fpAgfP6uSmFK0Zvkp53+EtyefM0lRXlA0vboeog5x8tLlXAbJJyH3EJnHUFxIayqQnwJKdiB1gx5Idp6k3soeIfvF2CKWNBTVNPLKx1Wq43v5mOBZSb6ecJGpjnSragRdQBMKWUlCO5O942NpmJfk5UnMD19oSzVmkFZGg1Jhdm8Ou5hPMNZswtoYj+h7BJPMuMfhKCwNCRBtwBsQOljDI9T1NOhyVWpp5XQbH1h3ZCygFywXYAkbXhDNnYBvcnXsIkWBOWrFlGQ+ohhc40hwpUQQlSwDYjbQxHsxz5eghxoTvy1UlXVbJdQr7KBhPgY+q/w1TC0YCVh6dXnn8Ozj1LczG6i2DdpXuhQ+0TjFmFJeuUSYk5ixQFEoJ3QQNCD0IPWK8w64MK8XpNxKssniymJXY7fNMAG/qptX6Q9ca8e0+kSiqW7PNyxWguzASsh1QtdCE22zEa+WnWMs/jyaIK2ldFJ1dD8hJzUvLqbWGZJMuHm5sh5SdbHKkAJ1/Mew7xd/C2mCnYLpbAJK3WkzD7qzmUpShc3PXoIz9WcaSDdFnFLdlA04y4JdlcspDilrCPCtdrBIy2vfW+2kWDhni/TcEcBJmsvLampqSCZWVl2HAtTzyhZppNv92noIwaaL9x2uwlq5qUFtlZlH45a61VeMTsmwtK26bKtS5y9FaqUP/wChGblXWLaaabWh8xpVqlV69UJurKUqqPTC1zNzchwqOYex09oYk301I1g0/sB7PEgqum97aXhsmhOKmFobcSy0RosDxGHUgZbG9/LaCHQlaCFA3J3huxK6EUvTUS6iu6lrO6lG5MODDdljTSCUu5FJbVqb/eFaRrdIP36Q6QzDEBNzrfzhQlJQO994SBzMQNh6wqbsUb373h18Rm7Ek8vnTDEuDcE5z6DpCtZOlje3QQjlVB2sPKABDaQkQtzKuBbwnvDd8iRZfDtwOUYam7bihvAhBw0mAEzbJ2BSrLAgXlT3uycV+ClMPpHyaFAlWZRJvD/KoSStH6QkNHcobUtKrSUOISlSgTfUi/8AWFbKcjtwSNY3YvlFNFk+ZMRyJ5a3WNPw1EW203h4QFZNBb1hjB5deeT+V1IUL+WkPgBKbg/eLuLKrXk9ulKjex07QTMLDYAIzEnTtBi75dRrCeabUWQQDm3BtD0RA2nxWUfFveDgQo2ve43IghtzO2FDYja0GBJ9D2hkI6uRe52G8HyailVx/aCCTcEC99oMlgCsHMd7QqsT4Pp5j6cda4IYIxxKNqfmqD8jVCEfUprIlLo90mM9zvH3F2L8TTk8nhv/ABFiYe5jTrrbijl/KNE2NhaNBYRqLVd+FnB8i80JtFRkG5N1kPhpTiUkgpBPUlKRbteK44G1iZaxazhmtyoE7h5QZanVPKsthV0pyg/VckC9rWSDuIGZcyitlWEsGm9yO9uiusZ8bjJybUvibhsuSbN7utNKQq/lmSn94kHAKf4e45xRNVWRZngvDsi9VTJzmjQUlNkrt1UnW2sWpiVhmRolZfmm6pLpecbExznA85crs640PFayVZbgdBaK+4izlP4c4Em5+TkJWSqNRoD7L74YDUw4VqbSAqwA/Mq47xVizReRRUaLc2keOG5SsxFiOeM9WJuYPiU+6pwnzJJP7wiQfBf6VemsezTmdxSgm9zcCOUgncwY7YJboC1eK4BVffzghxzVSSNE72g5wHMRtCJ5eZ5LKR9X1ekKxKzuRa5rpeOo/KLwvV4Sd7nz0Ecss5EpSE6bAwJgWIFttB3h1yKuTxpOfU6g6Wg+5QjxaAaxy2gBu99ITVaY+VpzqjqcpsRE0yLo8w4ovB97otxWh+whwcIDhzaW2hLh+WErSmh+e1zeD33Rn23Oloh+REv4bOgVxaQr62jpfsRAhswQ8pqusEaEAjQQIF509/BdF0hsx+gJxJPIRfK26Ei/kAIbGklZF9LfaHLHKs9eqSgSv8dQKveG5CSWU9ABG7D9CS+wpvliKoN3qMm4LXN0k9/eHpu5QNrAbwzz5OeXVoAFD1EPLVsoA7RclyVPo5IAUAB01jhRGQix87wYVBKyDv3gpXU6Afe8J8MQiaIZfU0R5pEKkKuSNyPtCObbUlSXRuNT6dYVNqCkAjWEI6NiNxe/eO2l5Vpt7wSVkqI0t6R0hWp1vba0NdCZtjgrxBlK3wuwhR3TJLRSm32JgzlyWVF4LCkgA5jkFhY6EiJPxMQ/K1xzGuGnJNE9S2y2oiazGosFCQEZQbjKAVdNdoz7wA4p4PwhQZqm4hpc7NzJmC6l+VOmUgaHxDUWMXQnjJwon2wA1Vpa6bla2yQk9RoTAzJibk5JMIQ1bjBQdUiZ4bxLSMQYCNSpompaWemA3y5FfNmGPCo2UPEUZloToOpHQmKV+MOsqkGqbREzDqUrZRMOsqSAFrJJKie4ygWGgvDfjCuYTwNOLr2BsThaFfiTVNfK21K80HKLK8oqLi5jSRxpPy01TahMTzBautMwCFNuE6pNyegGohYsDjkUv+FuTV747WuStnCSo2JvvBzagACdAe8FX11N+0dLJF8o9oKIFcnj6whtSio2GsEyLGpfXfmL38oKePzz4YTcJR4l279BDkhhKEWtmt3MNVCujovBNgogf8d4SPzKAb3zAdAIUFIJ2FgITuqCb6Dz1iXaoW4DcynkgeIE23EN2I5m0sy0knxOBJPvCkLAWADe2toZK44ZiryLKSbFdyBvaGpDdMl8mT8mjcaA3jkgq8/WD0rSJZCRcWFtIRlw7WyxPwKiWcOJFyqYrkpZsEuOryJSOt4EOnAOcEtxZwzzNUOTaWiD/uun+sCBubHulY6ZDMWoUmr1AOOc5fOXdwAJzG+9hCOWF2E6+Ej9YECNeL+2mSlxJiOeRy1tHU+MCHdnRvU2gQIsIrk8KQFG5tAUA4nS4IgQIcj0gl1Ge6STCJg8lSkG5CdR6QIEMSjyg5JBO/oINbsk+GBAiJL8GoPg4l5GcGKGp5lM0xLtfMrl35dLrahl0NyNFApOnUGNFyOC8MVPBzkyiWozy35nltVCoSCEpQnLmVlSkAG1lgH97QIEA88pLI0mdDpoxlg3Nc2RPEXAvBdSqNNll0WmtOzSG1TTcu862VlYV/pC9gPw1HXe/SMbcZMM0bCHEKu0agsrYpknMllCHHM6swAza+t4ECL9JknKdNmfW4oRhFxVWQEEXta0ePzAaYVexOwA6mBAgswK1RxSpYtZybqUrU3HWFh5l7aDTS8CBDjSEygsDVy9+gEJngoA+JR94ECJdDBKFpbzLI1tbeI5Mz6RiJvMTdIsOnWBAiL6ET4C7KTtpBKz38XSBAhxo9jxgmqLpGLqPNg/6E4y5cHaywYECBGfIuSqbpn/2Q==",alt:"Manoj Sahoo"}),(0,g.jsx)(yh,{children:"Manoj Kumar Sahoo"}),(0,g.jsx)(bh,{children:"CEO, Co-founder"}),(0,g.jsx)(vh,{children:"Manoj has 25+ years of experience in Product solution, Engineering and Development in two of the India\u2019s leading Products, Finacle (INFOSYS) an enterprise solution in Banking and Financial Services and Tally the most admirable product in SMB segment"})]}),(0,g.jsxs)(gh,{children:[(0,g.jsx)(vh,{children:"Manoj K. Sahoo, Founder and Director of Atomwalk, drives product development and innovation with over 25 years of experience in engineering and software solutions. He was instrumental in building two of India\u2019s iconic software products: Finacle, Infosys's global banking solution, and Tally, a leading business tool for SMBs. Manoj's expertise spans payments, supply chain management, and delivery excellence, with multiple patents in product innovation. Holding a B-Tech from NIT Rourkela and an MS from BITS Pilani, he leads Atomwalk's mission to deliver ERP solutions that enhance business efficiency and digital transformation."}),(0,g.jsx)(wh,{href:"https://www.linkedin.com/in/manojksahoo",target:"_blank",children:(0,g.jsx)("img",{src:oh,alt:"LinkedIn"})})]})]})}),(0,g.jsx)(fh,{children:(0,g.jsxs)(mh,{className:"flip-card-inner",children:[(0,g.jsxs)(hh,{children:[(0,g.jsx)(xh,{src:Ku,alt:"Lipika"}),(0,g.jsx)(yh,{children:"Dr. Lipika Sahoo"}),(0,g.jsx)(bh,{children:"Founder and Director"}),(0,g.jsx)(vh,{children:"Dr. Lipika Sahoo, with 24 years of academia and industry experience in technology, innovation, and intellectual property, holds a PhD from IISc. She has triple master's degrees: MSc from Sambalpur University, PGDIPR from NLSIU, and PGCBM from XIMB, along with advanced certifications from WIPO and IIM Bangalore."})]}),(0,g.jsxs)(gh,{children:[(0,g.jsx)(vh,{children:"Dr. Lipika Sahoo, Founder and Director of Atomwalk, brings 24 years of experience in academia and industry, specializing in technology, innovation, and intellectual property. She holds a PhD from the Indian Institute of Science (IISc) and has earned multiple advanced degrees, including an MSc, PGDIPR, PGCBM, and certifications from WIPO and IIM Bangalore. Dr. Sahoo serves as a reviewer for various government innovation programs, such as BIRAC-BIG, SPARSH, and TATA Trust's Social Alpha. Her extensive expertise supports Atomwalk\u2019s mission of driving impactful, socially relevant technological innovations."}),(0,g.jsx)(wh,{href:"https://www.linkedin.com/in/lipikasahoo",target:"_blank",children:(0,g.jsx)("img",{src:oh,alt:"LinkedIn"})})]})]})})]})]}),(0,g.jsxs)(uh,{bgColor:"#e8f3fc",children:[(0,g.jsx)(dh,{children:"Board of Advisors"}),(0,g.jsxs)(ph,{children:[(0,g.jsx)(fh,{children:(0,g.jsxs)(mh,{className:"flip-card-inner",children:[(0,g.jsxs)(hh,{children:[(0,g.jsx)(xh,{src:ah,alt:"SK Patnaik"}),(0,g.jsx)(yh,{children:"SK Patnaik"}),(0,g.jsx)(bh,{children:"Advisor"}),(0,g.jsx)(vh,{children:"For ~25 years, he led Business Management (Client Relationship, Sales and P&L Management, new GTM) roles mainly in the IT Solutions & Services spanning global markets (the US, UK, South-East Asia, and India)."})]}),(0,g.jsxs)(gh,{children:[(0,g.jsx)(vh,{children:"SK Patnaik, who joined Atomwalk\u2019s Board of Advisors in 2021, brings expertise in business strategy, product innovation, and revenue growth. With ~25 years of experience in IT solutions across global markets, he has held key roles in client relations, sales, and P&L management. Previously with Infosys, he led APAC and India operations for the Global Manufacturing Vertical and has deep experience in the ERP landscape with platforms like SAP, Oracle, and SaaS solutions. SK also co-founded a deep-tech telecom startup and holds an MBA in Marketing and Systems from the Xavier Institute of Management, Bhubaneswar."}),(0,g.jsx)(wh,{href:"https://www.linkedin.com/in/sk-patnaik-",target:"_blank",children:(0,g.jsx)("img",{src:oh,alt:"LinkedIn"})})]})]})}),(0,g.jsx)(fh,{children:(0,g.jsxs)(mh,{className:"flip-card-inner",children:[(0,g.jsxs)(hh,{children:[(0,g.jsx)(xh,{src:sh,alt:"Dr. M R Jaganath"}),(0,g.jsx)(yh,{children:"Dr. M R Jaganath"}),(0,g.jsx)(bh,{children:"Advisor"}),(0,g.jsx)(vh,{children:"He has an illustrious career  as a Scientist managing deep Technology, Translational Medicine, Drug development , Drug discovery.  He has published numerous scientific articles in reputed journals."})]}),(0,g.jsxs)(gh,{children:[(0,g.jsx)(vh,{children:"Dr. M R Jaganath, who joined Atomwalk\u2019s Board of Advisors in October 2023, brings expertise in lab management, Good Laboratory Practice (GLP), and Good Manufacturing Practice (GMP). With a PhD from the Indian Institute of Science (IISc) and a distinguished career as Chief Scientific Officer at Connexios Life Sciences, he has extensive experience in translational medicine, drug development, and drug discovery. A prolific scientist, Dr. Jaganath has published numerous articles in esteemed scientific journals, contributing significantly to the field of advanced medical research and innovation."}),(0,g.jsx)(wh,{href:"https://linkedin.com",target:"_blank",children:(0,g.jsx)("img",{src:oh,alt:"LinkedIn"})})]})]})})]})]})]}),Sh=n.p+"static/media/sales.ba949556d3121afbc087.png",Ah=n.p+"static/media/concentrate.7f7fc25cb1fde510b1de.png",jh=n.p+"static/media/goal.969464dc2886052b3fad.png",Ch=n.p+"static/media/online-learning.20f782a0f780a57d90bb.png",Eh=so.section`
  padding: 70px 40px ;
  background-color: rgb(225 255 246);
  text-align: center;
`,Ph=so.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 110px;
`,Rh=so.div`
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
`,Oh=so.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom:100px;
  /* display: flex;
  align-items: flex-start;
  text-align: left; */
`,Th=so.div`
  flex-shrink: 0;
  margin-right: 15px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${e=>{let{bgColor:t}=e;return t}};
`,Mh=so.img`
  width: 40px;
  height: 40px;
`,zh=so.div`
  flex-grow: 1;
`,Ih=so.h3`
  font-size: 1.2rem;
  margin: 15px 0 10px;
  color: #333;
`,Lh=so.p`
  font-size: 0.95rem;
  color: #666;
`,Dh={improve:`${Sh}`,excellence:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA7SAAAO0gFcPFpKAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyO34QAAAP90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+6wjZNQAAHltJREFUGBntwQdgleX58OHf+yQ5WUASCCQEmS6cqDgq4oytFcVRRytq6561tbZ/u7S1rbZftRW1VatVW2dbBbXuLYJYNyBuGRIgjCQEAgmZ5/5swzLjft9zcg45z3ue6/JwtuDtv8+QIdsMKWurWVWzqmbVqprlcysJNQ9nIzP+xBPK6Kh6zntz5rzfihNyA65fJt1aM/WcbXBCLOOiVeJj7nWHRXDCafxsCWL1jaNxwifzdgnsxRMyccIl+98Si6VXleGESJ8XJUYtDwzHCYui/0jsGn6VhxMKubMkLhXfxAmDmyRer+yBY73yqMSt7S/FOHYrWCQ9UfkVHKv9XXqm8Qwcix0nPTY5A8dWGZ9Lzz3fH8dSx0sizNsFx04vSkLUHYtjo10kQaLn4VjoVkmU1gk41ilYJwmzdi8sZUhb384nYfo8MQw7GdLWBBJo8JMFOFaJrJOEeiELGxnS1VfySajyv2KjDNLV2QeTWHvwCo49XpOEOwH7eKSpfjWZJFrl6LXYJoM0VX46inkft0QixKpv9nM4lviRaI4F+mx72C9fapBYtOyCY4nbRdGQywaR8Vc8Xy+BTcOxxDRRPMqWssqntEhAk3DsUCmKM+hgm98sl0Aq++LYoI8oosV0kvOLBgniehwb7CmKKroy7CEJoGVXHAucLIo5dO3QReLvZaxiSE8DUVTStZf3noGvQ8ZiE0N6KkBRSTeqym/H13nYxJCe+qGopDst51/cio9T8rGIIT0VoFhK9265GB99v4VFDOmpAEUlituvxcd5OCnvCVGMQ+M9JD52xx6G9FSAIopGTn8d3bnYw5CeMlF4qBpPWIfqtFysYUhPURQeusrfoSo8CWsY0pOg8PBx/eeozsUahvQkKDx8NF6OanwJtjCkJ0Hh4eehGajGYQtDehIUHr4ujaIZhy0M6akVhYevd6egGYctDOmpBkUm/u5DMzYbSxjSUxWKUvw9W4siey8sYUhPVSjK8Nf8CJpxWMKQnqpQDCaAf6IZhyUM6akKRRkBvLQSxTgsYUhPVSjKCKBtCorSUdjBkJ6qUJQRxENoxmEHQ3qqQjGYIN4WFPtiB0N6qha6l1dAAOs+RzEEOxjSU1stijKCeB/FQOxgSFNNKAoIYi6KQdjBkJ4OGIwinyDeRzEIOxjS0zlo8gnifRSFWVjBkJb6noQmShCftNA9rxgrGNLSKflo3iKI5k9RDMIKhrR0Npp5KwikEsUgrGBIR7vti+ZVgmlAMQgrGNLR2aimEkw9ioFYwZCGsk9DU/k0wTSgGIQVDGnouAFo7m4jmAYUg7CCIQ2dg0buJKAGFDlYwZB+RpSjeWU+AdWjaMQKhvRzlofmToJqQNGEFQxpx5yBZvVUgmpA0YgVDGnniKFoHlhPUK0oGrGCIe2cjeoOAitE0YgVDOlm4DFoZs0isCIUTVjBkG7OzEJzJ8EVoWjECoY0Yy5A03g/wRWhaMQKhjRz5Eg0U1cTXBGKJqxgSDMXo7qDGBShaMQKhvQy6gg0818hBkUoGrGCIb1caNDcJcSgCEUTTurJqRZNaxmxaBHFQVjBkFa+NQDN05XEoCATxWKc1POmqI4lFnuJoiUTJ+XsI6plmcRikigWYgdDOrkI1T2txGI0ioXYwZBG+n8L1Z3EZDSKhdjBkEbOykEz41NiMhrFQuxgSB/ehajuICZmexQLcVLNkaKqySEmI0UzDjsY0sfFqO5sJCaj0SzESTEj20TTNpLY/EAU6z3sYEgbFxg0Ty0kNqNRfC7YwZAuss9CdTMxGo1iIZYwpItvFqOZ9yyxydgTxUIsYUgX30V1ixCb3fuiWIglDGli/D5oGv5GjMaj+RBLGNLEZajuX02MxqN5AyelbNsmqjHEaqkoPsUWhvRwqUHz6hxiNLIMxevYwpAWis5E9WdiNR7N69jCkBYuyEez7GFiNR7N6zipJGupqK4iZh+IoiETJ5V8W1QtZcRqQFQU07GGIR1churhSmI1zkPxOtYwpIHyMahuJmbj0byOk0qeFNV7xO5d0ZThpJCdoqI6n5gNEU0F9jCE3w88NGvuI2ZHoXkdexhCb+DpqP5eT8wmonkdJ4X8UlTRHYhZboNoxuGkjpyVonqW2B0lmqYc7GEIu9MGorqe2E1EM70RJ2V4H4pqDnFYLJrv46SOI0V3OrHbQ1Tb4aSOF0S1OIvYXSGaT7CJIdzGlKO6sYXYTUTzJE7quFtUq/sRu5KoaMpxUsbwZlFdSxzOFE1dBCdl3CKq5iHE4RHRTMVJGWWNovo7ccitF81ZOCljsuh2JQ7HiCZaipMqBtWL6inicZdo3sYuhhC7LA/VdcTBHI3mSZxU0X+tqN4mHgeKal/sYgivS/uguo54HItm5Vs4KaJfragWZhCPeaL5O5YxhNYlhagmtxGHXbZF8wROisivFlVNPvH4uWia+2EZQ1hdOADVrfXE41g00+twUkPOclE1lhCPIVHRXIptDCF1bgmqe1YQj2M8NI/jpIbIYlFFdyQuz4rmQ5wUcZ7oHiUu/ZpE83uc1JC5QHQHEJdviepAnNTwHdG9Rnz+IZrqDJyUYD4R3fHEJbJGNPfipIZTRPepIS5fE9XJOCnBe190FxCfm0TTXICTEr4husXZxOcD0byIkxreFd0FxGewqC7FSQnHiO7zCPE5VVTb4qQC877oziFOd4nmQ5yUcIbo5mcSp0WiuRYnFWQvEt0ZxGk7UR2Ikwp+KLrPMojT+aKpycBJAQU1ojuNeD0omntxUsFvRfdxBnHyqkTzTZwUMLhedKcQrz1E01yAkwJuE937hnj9UDQv4qSAHVpEdxJxe0o0l+KkgIdEN8cjXllrRbMtTu/bV3wcT9zGi+YjLGUIk/+HbtajxK0czTM4ve/r4mMi8XtFNCfi9DpvlujeJH6RJtGU4fS6U8XHkcRvL9EsxOl1kQWi+w89cI5o7sNWhtC4YCS6X9ADY9G8htPb+q4U3Qx64g3RjMHpbVeJj0Ppgcz1oqgzOL1s0FrRvUxP7C6a57CWISSu7IPuF/TEXmhm4vSyUc2ie54e+ZNoDsfpZVPEx/70yExRtPbF6V1Hio+n6RFTL4pZOL0rZ7742Jce2Vk0f8ZehjD4+Sh0j71Jj4xF8xpOr9qxSXQtO9Izk0UzHKdXvSg+bqKHXhHFEpxeNUl81A6gh5aJ4kGc3lSwXHxcRg9FoqK4HKc33Sw+5kXooRGi+QZOL9q7TXx8g546UDRjcHqPeVt8TKfHThFNXyxmsNxFY9HJZfTYUBQr12Ixg91Kr8bH/W/TY9ugmI/NDHa7vgDd+p/Sc0NRzMdmBqsdfgo+/riEntsGxXyc3pL9ifhY1ocEWCaK07BZJjb78Q74uGIdPRcpQTGfHsgvblcUiWRFsiJZkaxIViQr0lLf0K6+oaFhzdIlS6qF5PCw2Lbv56CbPTZKz41YiKJkJTExpQOLN8khmKbKJV9YuqRiGYmVicVuzkEnF0ZJgDIU61YSUP6oUaO2HTVqRDaxyx45kv+pmT1r1uxP2kiUTOx10hH4uON1EiEDxVL8eIO3HTVq21GjSkiAAeXlsP69WbNmz11PAnhYq+/HZeiqd1xFIoybSffm7k73Bo35wvY5JEPbG08+OYc0dpv4OZPE2E8U79KlzF0m/f6ZZZJki2+bmEeamih+Zngkxt6ieIOOig75/l3vNMpWsv7p744kDQ1aIT5adiNB9hTFTLZQMuEXjy2Wre7NM3JIN0+In+tIlN1FMY12A474+SOLpbfUXDeKtHKB+Fnch0TZRRQvQNHhP35oofSy6FNHGdLGjvXi5wQSZrQoFvxznqSIBZf3Jz1kviV+niJxthdb1F6WRTq4WvysH0XijBJ7fDKR8DugVfxcSQINFJs8tyshV7RQ/HyaTSItF5u03lxMYAbrmAdG4EPOaSKR5mCTjIs+O5egDNb59dfxc+N0EmoOdim8/W85hNVxUfHzSS6JdapY590RhNOOa8RP2/4k2K5in5qvE0Z9PxRf15JomU1in7YrPcJnqvj6IJuEmyU2erwAXwar/OQb+Gn9ThMJNwcbHf1yf/wYbHLkNfj6/dsk3itYac8XB+DDwyJfeSEfP+/t00zi9Vuei5XmHF6NymCPXZ/Kx0/Ld5pJgrpHsdOYl4pRGawx4tkifF09m6S4B0vt9kQO4VDymfh7J5PkMHPFVvejycASBS/ujK/GCctJDln2LSy1W+sMuudhh9xnD8TfuXeQNG/tTZJFW9q1trRIv4J+uSSInPgw3fKwQs7UCfi7+wyS58BphsRaW1VdVV1VXVVdVb2m5QtRviSr4Av9Cv5n6E6FxG/dzovpjocNBjw2Dn9zv9JAEl39cxKhddGC+QsWV1VXVTcTg9Kdd9p5p51LiMtjx9IdDwuMenoH/K3d+1OSKXP6/vTE6gXzFyyYv6CijfgV7bzTzjvtNMwjRt94BIvtvUKCOIkkG1Yh8Vn4yC9P3rs/CVM86Z4VEpMlfbHXUeskiBtJuu0qJUaN7971vYMKSDxv7BWvRSW4G7HWea0SxH+ySL6dV0hgNS/84fTdMkmiba9ZIkG17Y2dvGskkOqhbA1DXpUAGt+85exdPZIv48iHmiSYdzOwkblXAmk7gq0j8w9R0TS9/Zdz98xi6ym7rUUC+QE2ukGC+TVbzZ7PSNea37n9vLERtrodHoxKAGuHYJ+LJZjnDVvRIfeukC9rmXXHBftk01v2niYB/ArrHNUqgXw8gK3L2/uKma3SbuW/f3xgLr3Lu7JNfFUYuuCRuvaY0Ycglo37nK2vaESGyTAZlfNIBYc/MBA/E57GKkOWSCB1e+Aw5FXx8zBW6fOuBNJUjvOFyBPio7kEi2Q8LoFEJ+H8T/Yz4uNyLHK9BPMjnA1yXhDdJ9jjKAlmMs4mfeeJ7iBsUbJCAvmXh7PZPs2iugNbPCmBvBzB2dKPRPUBlviuBPJeAc6XeHNF09YHK+yyXoJ4ZxBOB2eI6kBskD1Hgni+L05HkUrR/AAbXC9B/DOC09lPRHM/FiiPSgA3eThdKFwrik9IfVkfSwA/w+naDaKI9iPl/Uj8tZ6F040dRHMoqW5wnfhqOAanW3WiuJAODCnm2r74qf3qYzjd+gBFPh0YUssBp+FnXflMnO59gCKPDgwpxfwJP9FJs3AU76PIpwNDSjlvT/z86HEczQco8khphTXi51Yc3RBR3EkHhlRyaX98PH8Jji6KIo8OMolVzuDSbHpofW3t6hY6KbwUH/NPasXR9UGRRweZBBU5ZIeyLwzuT2LU13w0e9aseVE2u7QAXeupa3B89EGRR3z6fvMfayQZ1j1z7kA2KFwtPq7E8XWQKB4lDiXnPtUkydP60sUl/NdV4uPVDBxfE0TxF2JW/kqbJFvjbdtB4WrRrRmB4+8UUVxFjMY8I1tF24N7XSU+vo0TwLWiuICYDL83KltNi+hm4gQxQxTHEoMB1zdK6ojuhxNA1npR7EcHmXTrrOsLSCH/eAMngL1yUCynA0M3MibfWUAKafwpThD7o1lOB5l0reBfR5BSrq/ACeIYFIubCGa7jyS1LOuDE8Q2baL4Fx0ZulL+5mhSy5XrcIKYZFD8h0AubJEUM8fgBPKeaPYliFMl5ZTjBDJONOsjBLDvekk1j+ME84JoXqUTQ0dlj+SQaq7GCeTgcjT/oRNDBzmPlpFq3nkDJ5DfoHoNfw9I6jkLJ5CviaqhD75+JqlnVS5OIC+Lagq+yqOSev6IE8iuojsRP2aOpJ7odjiB3Caqtbl0ZtjSqbuTep6bhxNE4WmoHltPZ4YtZP+GFHQLTiBn5qH6J10wbOHi4aSeRU/gBLIbqsZn6YJhs8Kfk4Lui+IEkosq53S6YNjsJ/1JQY/iBJOHbvIIOjNsMuR7pKDFb+MEk4eu7989OjFsck4uKehRnIBy8HHwpXSSySbHEcTKhZXLm+mhPmWDt88nkEdxAnprPD5++8xHdGu4+Pv012NJkJyJf6sTfzWZOAGNE19vZdKt74mfJWdnkEgDb2oWP3fjBOUtFV8/o1sviY/bc0m07d8TH/fiBPYn8bWmiG4UtYiq9RKSoM8joluAE9h+UfF1Dd04XXSTSArvAdENxgnsV+JrbTFdmyKqa0iS3LdEdSJOYOYp8XUdXVstmuc9kmXIatFMxgmuaL74qS+lK31F07oryfNT0byJE4Mx68TPDXRlR9HcQRLlLhFFSwZODA5bLz4ah9CFQ0UzmmT6mWgG4sTi6DbxcQtdOFUUH5NUu4hmJ5yYXCU+GvLZzNCuDMW/SaoP5qMYiBOTX7+ELvdoNjO0K0PxFsn1OopinJhET12B7iQ2M7QrQ1FJci1DUYwTm+WToqgm5LOJod1gFMtIrkoUxTgxeuk3qHKPYhNDu2IUtSRXLYq+OLG6+kNUJ7GJoZ0hVXk4sWq9BNWEfDYyOCH00hQ0eUexkcEJox82ozmJjQxOGFX8E82EPDYwOKE0GU3eAWxgcEJp9sto9mQDgxNOk9HsyQYGJ5yeqUOxJxsYnHBqeQ7F9vm0Mzgh9QQKsxvtDE5IPRVFMZR2BiekqmajKKWdwQmrj1GU0s7ghNUCFKW0MzhhtQDFYNoZnLBagGIQ7QxOWC1CYWhncMIqD4XQzuCEVQmKKO0MTlgNQiG0MzhhNQhFlHYGJ6xKUNTTzuCE1SAUS2lncMKqFEUl7QxOSGUdgKKSdgYnpA7vj2Ip7QxOSJ2MZgntDE44RY5D0TaXdgYnnL5aiOLjBtoZnHA6Gc3bbGBwQilyLJp32MDghNLZBWjeZgODE0b9r0az7h02MDhh9Jv+aJ5rZgODE0Jjzkf1BBsZnBC6KQONPMlGBid8vnkQqjdXspHBCZ28P6B7mE0MTuj8fhtULXezicEJm/O/i+7fK9jE4IRM+Z/xcRubGZxw2eGhTHTzX2QzgxMq/Z8owsftwmYGJ0yypmyPj5pb2YLBCZNbDsXPdWvZgsEJke+dg5+qP7MlgxMeu16Lr9/XsyWDExpZ92bjZ9ktfInBCY2r9sDX99bzJQYnLHb+Mb4enMKXGZywODYDPysvpgODExZH4OvCajowOCHRdxx+/vkwHRmckDg0Cx8rvksnBickyvBzQQ2dGJyQqMPH/Y/SmcEJiTp0y79HFwxOSKxFd94qumBwQmIlqpZpdMXghMRHc9FkfZWuGJyw+Auqo+iKwQmL++rRTPDogsEJi7p/oCkdSxcMTmjcjOpoumBwQmP2NDRH0QWDEx43oBlbSmcGJzwen4/CO4rODE54RG9CcySdGZwQuacVxVg6MzghsnomiuF96cTghMmTKLxd6MTghMlTaHajE4MTJh98jmI3OjE4ofI0itF0YnBCZTaKMjoxOKHyGYpSOjE4oTIPRf8sOjI4obKkke55pXRkcEJFFqAopSODEy7zUAyiI4MTLvNQROjI4ITLOhQeHRmccMlE4dGRwQmXDBSGjgxOuGSg8OjI4IRLBgqhI4MTLgNQ1NCRwQmX0Siq6MjghMuOKKroyOCESmkB3ZNqOjI4oTIaRW0rHRmcUNkPRRWdGJxQmYjiMzoxOGFSvD+KOXRicMJkgkExh04MTphMRDOHTgxOiAw6GkX9PDoxOCFySQ6K96N0YnDCI+8iNLPozOCEx9n90TxHZwYnNLJ+gKbpeTozOKFx+Ug009bRmcEJi+2uQPU4XTA4YXFbDqon6ILBCYnvHIZq7iK6YHDCYcT16B6jKwYnFPIe7Y8qehddMTihcNcYdI8toCsGJwx+8k183ECXDE4ITLwGH7NfoUsGx35HPmTwcQNdMzjWm/BINj5W/IOuGRzbHf1INn5ubaZrBsdyx0yN4KfmJrphcOz2/Ycj+Lqilm5k4tgscutZ+Jt9O93JxLFYycPjCOCSKN3JxLHX2Ee3IYAHXqVbmTjW2veFvgRQfzndMzi22v2ZvgRxzVK6Z3AstePzRQTx4fUoDI6dIs8MIoh1JzShMDh2OmMEgZz9MRqDY6WMHxPIjQ+iMjhWOmUUQbz2f+gMjpUuJIiVJ7egMzhW2okA2k5Zig+DY6PCIgK48iX8GBwbjSKAm36HL4Njo5H4u/n7+DM4NqrF118uIQCDY6P38PPXi4QADI6Nqpehu+t8IQiDY6W5qO4+VwjE4FhpFpr7zooSjMGx0nQ050cJyOBYaUYbikKCMjhWWluBYiBBGRw7LUJRTFAGx04VKIoJyuDYqQJFMUEZHDstQlFMUAbHThUoignK4NipCkUhQRkcO3ko1hOUwbGTQbGWoAyOnQyKOoIyOHaKoKgjKINjp2Eo1hKUwbHTSBR1BGVw7DQCRR1BGRw7jUSxlqAMjpW83VHUEZTBsdIeA1HUEpTBsdLXUNQvJSiDY6WvofhQCMrg2CjvABQfEJjBsdGJ2Sg+JDCDY6MfofmAwAyOhb6+G4roGwRmcCz0f2hm1xCYwbHPXoeheYHgDI51vD+gep7gDI51LjgUTeOrBGdwbDPiWlTTGwnO4FjGu6MPqgeIgcGxzEXlqBqmEgODY5cJN6B7eB0xMDhW2f+hTHT3EAuDY5NdnsxDt/RFYmFwLDLs2SJ83BUlFgbHHmNmDMHHuhuJicGxxnEzh+Hn5hpiYmjXhCJCcuWgaMVp95OH8/HT8EdiY2i3DMVgkmswinqc/8q+53cevm6tIjaGdpUoBpNcg1HU43zhK++ejr/11xEjQ7tlKLYlubZHsQ6HvMkzdyaAP64gTheL4imSqrBZFCfjlC+QQD7MJl7Hi6KxD8k0STQHku7K7pRg2vYnbvuJ5kyS6VnRFJPeSm9YLwFNJn5DRfN5NslzuGiqSGuD/tAgQS3IJ35ZUdFcRtKYWaKZThor+f06Ca6cnpgnmrW7kSy/FdXTu/QlPXnlDzZLDP5KPDw2mHwpms/3qSYpJt2Pn9qKikUVFYsqlkdJHwPOOH97YvH5HmuIg8cGB09D9cYxK0mC4x/IIai2yoqKxRUVFYtXEXKZh5xxYjYxWTPuQ+LhsUHGigGoKo6ZQ8Jd8WuP2NVXVCyuXP5f6wmfvCOOP7qIGLVOeJ64eGz09++gq7/6hkYSao/rDqdn6pZvtLKNMOh/9PFH5BK78/5KfDw2Ou4R/Cy+akodiWL2v3CSR8JEq5dvVIud+hxw0MH7ZRKPa39MnDw2yqvOxVfztKcXLqvNp4f6lA0ec/RAkqRpxfLlK2pW/U9tA1YoHH/wwXtmEqepJwlx8tjk38cQQk2r/qd21Rdq69Y2kWoi240ePXr33Qzxe/OQ9cTLY5PT7yH8WtZ21kbvGDB6x9GjR4/KoIfmfG0lcfPYJPODHUhL6xuam5qbm5qbmpubmpuam5uam5qbm5qbmpvbvHZ4X4LneS1r6tbUralbR8yyioqKBu4wevToYhLi5ePqiJ/HZt+YihOjtrVr1tStqVtTt6ZuTd2aNXX1giAgIAgIAtlFW8onoR48vZke8NjCzHE4lrnpB1F6wrCFy3Es85PvR+mRDLaweI/ROBZpPfMWeshjSzu+n4ljjZWnPU9PZbClmrK9cWzx+JFz6TGPLyl+eziOFeovu50E8Piy3V/Lx7HAm6d9RiIYvuy90wUn5bX96oDPSIgMOvi47TCcFDdv4n1REiODjqbvtCtOKlt95RmLSBSPTnJnjMVJWc03X72KxPHobJvXh+CkJvnXzxaSSIbOlnzlHZyU9Mp+pywkoQxdWHLgv3BSz9xjDnmLBDN0Zf23rhSclBJ97PDdHyfhPLpx/L35OCljzV1/XkAyeHRn98eGs9W9Xz+8xMPp4JM/3b2O5PDoVvFvzslkq6r56Z1RsocOGz5s+PBhQ7Nx/kuevfFZIVk8FDv89gS2nujtP1/FZl7J8GHDhw0fNryINCb/mTK1giTyUO137UFsJW9c/A5d6jN82PBhw4cNK8skzURnTpm6lOTy8HH073Yl+aLP3vqEoMsYPGzosKHDhg0tJh1Ep095eBlJ5+HHnHDikX1Jqqq7bltIcHlDh5aVlpaUlpYWeYTT6ulPP7ySrcEjgMhhxx0zmCSpn3n3lGbik1VSWlJaWlJaWlLaj7ConT7tlTlRthKPYLx9j5u4QxYJVv3qjBmzWkmE3NKS0tKS0tKS0tJcrLVq+rRpc6NsRR7BeQMHl/1XaTY91FBdU1NdU/3xRyRDv5LSgYUFG/XLwQpNH7339itzha3MI/QiBR3kkmKWvPeFT1rpDR7pJ6vgy/pEIh69YmVFRcWC9+auovd4OF+IRLKzI9nZkezsSHZ2JDs7kp0dyY5EBNkM2czrW1hQWFBYUJBF7NrWVC+uqKhYVLG4kV7n4fREXmFBYUFhQWFBYZ+sSFYkK5IVyYpEsiJZkazM1paW5pb/am5paWlcvbq2dnVt7era2rVC6vj/ty+0dTo91qoAAAAASUVORK5CYII=",impact:`${Ah}`,customerSuccess:`${jh}`,learning:`${Ch}`},Fh=[{title:"Constant Improvement",description:"Growth isn\u2019t a one-time effort. We\u2019re committed to evolving every day, both as a company and as individuals.",icon:Dh.improve,bgColor:"#f3d0ff"},{title:"Pursue Excellence",description:"Excellence guides our actions, shaping our products and driving our customer success.",icon:Dh.excellence,bgColor:"#ffe2c4"},{title:"Prioritize Meaningful Impact",description:"Our core metric is the value we create for customers by solving their most pressing needs.",icon:Dh.impact,bgColor:"#f5efb8"},{title:"Champion Customer Success",description:"We see every interaction as a chance to build lasting, impactful relationships with our customers.",icon:Dh.customerSuccess,bgColor:"#daf7e2"},{title:"Cultivate Learning & Collaboration",description:"We grow together through trust, open knowledge-sharing, and a spirit of collaboration.",icon:Dh.learning,bgColor:"#d3f4ff"}],Nh=()=>(0,g.jsxs)(Eh,{children:[(0,g.jsx)(Ph,{children:"Our Values"}),(0,g.jsx)(Rh,{children:Fh.map(((e,t)=>(0,g.jsxs)(Oh,{children:[(0,g.jsx)(Th,{bgColor:e.bgColor,children:(0,g.jsx)(Mh,{src:e.icon,alt:e.title})}),(0,g.jsxs)(zh,{children:[(0,g.jsx)(Ih,{children:e.title}),(0,g.jsx)(Lh,{children:e.description})]})]},t)))})]}),Bh=(n.p,n.p,n.p,so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,so.h1`
font-size: 2.5rem;
margin-bottom: 30px;
color: #333;
`,so.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`,so.div`
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
`,so.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 25%;
  border: 2px solid #454545;
`,so.img`
  width: 100%;
  height: auto;
`,so.h2`
  font-size: 1.2rem;
  margin: 10px 0;
  color: black;
  font-weight: 500;
`,so.p`
  font-size: 1rem;
  color: #555;
`,so.p`
  font-size: 0.9rem;
  color: #888;
`,()=>(0,g.jsxs)("div",{children:[(0,g.jsx)(Im,{}),(0,g.jsx)(ih,{}),(0,g.jsx)(Jm,{}),(0,g.jsx)(Nh,{}),(0,g.jsx)(kh,{})]})),_h=n.p+"static/media/email.d27389667b81e4a5c88c.png",Uh=n.p+"static/media/telephone-call.ee034a176dc60e4b43bc.png",Hh=n.p+"static/media/footer-bg.7bd67c0f73571d0acc02.png";const Wh=n.p+"static/media/nav-icon1.721d5414c26365f117e71d46b6641cb2.svg";const qh=n.p+"static/media/nav-icon2.178f497aa17b70c42df2a1a8c926ed01.svg";const Gh=n.p+"static/media/nav-icon3.08b285abb8e118b52637efa5d65c5367.svg",Vh=so.footer`
 background-color: rgb(13, 11, 62); /* Dark background color */
  /* background-image: url(${Hh}); */
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
`,Kh=so.div`
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
`,Jh=so.div`
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
`,Yh=so.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;

  @media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content:center;
  text-align: center;
  }
`,Qh=so.div`
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
`,Zh=so.div`
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
`,Xh=so.div`
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
`,$h=so.div`
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
`,eg=so.div`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
    max-width: 209px;
  }
`,tg=so.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,ng=so.input`
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
`,rg=so.button`
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
`;so.p`
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
`;function ig(){const[e,t]=(0,i.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Vh,{children:[(0,g.jsxs)(Kh,{children:[(0,g.jsxs)(Xh,{children:[(0,g.jsx)($h,{children:(0,g.jsx)("img",{src:hn,alt:"AtomWalk Logo"})}),(0,g.jsx)(eg,{children:"Stay up-to-date with AtomWalk Newsletter!"}),(0,g.jsxs)(tg,{children:[(0,g.jsx)(ng,{type:"email",placeholder:"Email*",required:!0}),(0,g.jsx)(rg,{type:"submit",children:"Submit"})]})]}),(0,g.jsxs)(Jh,{children:[(0,g.jsxs)("div",{children:[" ",(0,g.jsx)("img",{src:_h,alt:"AtomWalk Logo"}),"info@atomwalk.com"]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{src:Uh,alt:"AtomWalk Logo"}),"+91-7259555003"]})]})]}),(0,g.jsxs)(Yh,{children:[(0,g.jsxs)(Qh,{children:[(0,g.jsx)("h3",{children:"Quick Links"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/",children:"Home"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/aboutUs.html",children:"About Us"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/Product.html",children:"Products"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/contactUs.html",children:"Contact Us"})})]})]}),(0,g.jsxs)(Qh,{children:[(0,g.jsx)("h3",{children:"Products"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/crm.html",children:"Customer Relationship Management"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/hrm.html",children:"Human Resource Management"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/lms.html",children:"Lab Management System"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/Product.html",children:"Enterprise Resource Planning"})})]})]}),(0,g.jsxs)(Qh,{children:[(0,g.jsx)("h3",{children:"Resources"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/Blog.html",children:"Blog"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{onClick:()=>{t(!e)},children:"Support"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{onClick:()=>{t(!e)},children:"Tutorials"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{onClick:()=>{t(!e)},children:"FAQs"})})]})]})]})]}),(0,g.jsx)(Zh,{children:(0,g.jsxs)("div",{style:{padding:"25px"},children:[(0,g.jsx)("p",{children:"\xa9 2024 Atomwalk. All Rights Reserved."}),(0,g.jsxs)("p",{children:["Privacy Policy | Terms & Conditions | Made with ",(0,g.jsx)("span",{children:"\u2665"})," Atomwalk"]}),(0,g.jsxs)("div",{className:"social-icon",children:[(0,g.jsx)("a",{href:"https://www.linkedin.com/company/atomwalk-technologies/",children:(0,g.jsx)("img",{src:Wh,alt:"Icon"})}),(0,g.jsx)("a",{href:"#",children:(0,g.jsx)("img",{src:qh,alt:"Icon"})}),(0,g.jsx)("a",{href:"#",children:(0,g.jsx)("img",{src:Gh,alt:"Icon"})})]})]})}),(0,g.jsx)(ss,{visible:e,setvisible:t})]})}const og=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ag=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,sg={};function lg(e,t){return((t||sg).jsx?ag:og).test(e)}const cg=/[ \t\n\f\r]/g;function ug(e){return""===e.replace(cg,"")}class dg{constructor(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}}function pg(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new dg(n,r,t)}function fg(e){return e.toLowerCase()}dg.prototype.property={},dg.prototype.normal={},dg.prototype.space=null;class mg{constructor(e,t){this.property=e,this.attribute=t}}mg.prototype.space=null,mg.prototype.boolean=!1,mg.prototype.booleanish=!1,mg.prototype.overloadedBoolean=!1,mg.prototype.number=!1,mg.prototype.commaSeparated=!1,mg.prototype.spaceSeparated=!1,mg.prototype.commaOrSpaceSeparated=!1,mg.prototype.mustUseProperty=!1,mg.prototype.defined=!1;let hg=0;const gg=Sg(),xg=Sg(),yg=Sg(),bg=Sg(),vg=Sg(),wg=Sg(),kg=Sg();function Sg(){return 2**++hg}const Ag=Object.keys(t);class jg extends mg{constructor(e,n,r,i){let o=-1;if(super(e,n),Cg(this,"space",i),"number"===typeof r)for(;++o<Ag.length;){const e=Ag[o];Cg(this,Ag[o],(r&t[e])===t[e])}}}function Cg(e,t,n){n&&(e[t]=n)}jg.prototype.defined=!0;const Eg={}.hasOwnProperty;function Pg(e){const t={},n={};let r;for(r in e.properties)if(Eg.call(e.properties,r)){const i=e.properties[r],o=new jg(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[fg(r)]=r,n[fg(o.attribute)]=r}return new dg(t,n,e.space)}const Rg=Pg({space:"xlink",transform:(e,t)=>"xlink:"+t.slice(5).toLowerCase(),properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Og=Pg({space:"xml",transform:(e,t)=>"xml:"+t.slice(3).toLowerCase(),properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Tg(e,t){return t in e?e[t]:t}function Mg(e,t){return Tg(e,t.toLowerCase())}const zg=Pg({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Mg,properties:{xmlns:null,xmlnsXLink:null}}),Ig=Pg({transform:(e,t)=>"role"===t?t:"aria-"+t.slice(4).toLowerCase(),properties:{ariaActiveDescendant:null,ariaAtomic:xg,ariaAutoComplete:null,ariaBusy:xg,ariaChecked:xg,ariaColCount:bg,ariaColIndex:bg,ariaColSpan:bg,ariaControls:vg,ariaCurrent:null,ariaDescribedBy:vg,ariaDetails:null,ariaDisabled:xg,ariaDropEffect:vg,ariaErrorMessage:null,ariaExpanded:xg,ariaFlowTo:vg,ariaGrabbed:xg,ariaHasPopup:null,ariaHidden:xg,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:vg,ariaLevel:bg,ariaLive:null,ariaModal:xg,ariaMultiLine:xg,ariaMultiSelectable:xg,ariaOrientation:null,ariaOwns:vg,ariaPlaceholder:null,ariaPosInSet:bg,ariaPressed:xg,ariaReadOnly:xg,ariaRelevant:null,ariaRequired:xg,ariaRoleDescription:vg,ariaRowCount:bg,ariaRowIndex:bg,ariaRowSpan:bg,ariaSelected:xg,ariaSetSize:bg,ariaSort:null,ariaValueMax:bg,ariaValueMin:bg,ariaValueNow:bg,ariaValueText:null,role:null}}),Lg=Pg({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Mg,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:wg,acceptCharset:vg,accessKey:vg,action:null,allow:null,allowFullScreen:gg,allowPaymentRequest:gg,allowUserMedia:gg,alt:null,as:null,async:gg,autoCapitalize:null,autoComplete:vg,autoFocus:gg,autoPlay:gg,blocking:vg,capture:null,charSet:null,checked:gg,cite:null,className:vg,cols:bg,colSpan:null,content:null,contentEditable:xg,controls:gg,controlsList:vg,coords:bg|wg,crossOrigin:null,data:null,dateTime:null,decoding:null,default:gg,defer:gg,dir:null,dirName:null,disabled:gg,download:yg,draggable:xg,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:gg,formTarget:null,headers:vg,height:bg,hidden:gg,high:bg,href:null,hrefLang:null,htmlFor:vg,httpEquiv:vg,id:null,imageSizes:null,imageSrcSet:null,inert:gg,inputMode:null,integrity:null,is:null,isMap:gg,itemId:null,itemProp:vg,itemRef:vg,itemScope:gg,itemType:vg,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:gg,low:bg,manifest:null,max:null,maxLength:bg,media:null,method:null,min:null,minLength:bg,multiple:gg,muted:gg,name:null,nonce:null,noModule:gg,noValidate:gg,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:gg,optimum:bg,pattern:null,ping:vg,placeholder:null,playsInline:gg,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:gg,referrerPolicy:null,rel:vg,required:gg,reversed:gg,rows:bg,rowSpan:bg,sandbox:vg,scope:null,scoped:gg,seamless:gg,selected:gg,shadowRootClonable:gg,shadowRootDelegatesFocus:gg,shadowRootMode:null,shape:null,size:bg,sizes:null,slot:null,span:bg,spellCheck:xg,src:null,srcDoc:null,srcLang:null,srcSet:null,start:bg,step:null,style:null,tabIndex:bg,target:null,title:null,translate:null,type:null,typeMustMatch:gg,useMap:null,value:xg,width:bg,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:vg,axis:null,background:null,bgColor:null,border:bg,borderColor:null,bottomMargin:bg,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:gg,declare:gg,event:null,face:null,frame:null,frameBorder:null,hSpace:bg,leftMargin:bg,link:null,longDesc:null,lowSrc:null,marginHeight:bg,marginWidth:bg,noResize:gg,noHref:gg,noShade:gg,noWrap:gg,object:null,profile:null,prompt:null,rev:null,rightMargin:bg,rules:null,scheme:null,scrolling:xg,standby:null,summary:null,text:null,topMargin:bg,valueType:null,version:null,vAlign:null,vLink:null,vSpace:bg,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:gg,disableRemotePlayback:gg,prefix:null,property:null,results:bg,security:null,unselectable:null}}),Dg=Pg({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Tg,properties:{about:kg,accentHeight:bg,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:bg,amplitude:bg,arabicForm:null,ascent:bg,attributeName:null,attributeType:null,azimuth:bg,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:bg,by:null,calcMode:null,capHeight:bg,className:vg,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:bg,diffuseConstant:bg,direction:null,display:null,dur:null,divisor:bg,dominantBaseline:null,download:gg,dx:null,dy:null,edgeMode:null,editable:null,elevation:bg,enableBackground:null,end:null,event:null,exponent:bg,externalResourcesRequired:null,fill:null,fillOpacity:bg,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:wg,g2:wg,glyphName:wg,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:bg,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:bg,horizOriginX:bg,horizOriginY:bg,id:null,ideographic:bg,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:bg,k:bg,k1:bg,k2:bg,k3:bg,k4:bg,kernelMatrix:kg,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:bg,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:bg,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:bg,overlineThickness:bg,paintOrder:null,panose1:null,path:null,pathLength:bg,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:vg,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:bg,pointsAtY:bg,pointsAtZ:bg,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:kg,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:kg,rev:kg,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:kg,requiredFeatures:kg,requiredFonts:kg,requiredFormats:kg,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:bg,specularExponent:bg,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:bg,strikethroughThickness:bg,string:null,stroke:null,strokeDashArray:kg,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:bg,strokeOpacity:bg,strokeWidth:null,style:null,surfaceScale:bg,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:kg,tabIndex:bg,tableValues:null,target:null,targetX:bg,targetY:bg,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:kg,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:bg,underlineThickness:bg,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:bg,values:null,vAlphabetic:bg,vMathematical:bg,vectorEffect:null,vHanging:bg,vIdeographic:bg,version:null,vertAdvY:bg,vertOriginX:bg,vertOriginY:bg,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:bg,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Fg=pg([Og,Rg,zg,Ig,Lg],"html"),Ng=pg([Og,Rg,zg,Ig,Dg],"svg"),Bg=/^data[-\w.:]+$/i,_g=/-[a-z]/g,Ug=/[A-Z]/g;function Hg(e){return"-"+e.toLowerCase()}function Wg(e){return e.charAt(1).toUpperCase()}const qg={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var Gg=n(4222);const Vg=Gg.default||Gg,Kg=Yg("end"),Jg=Yg("start");function Yg(e){return function(t){const n=t&&t.position&&t.position[e]||{};if("number"===typeof n.line&&n.line>0&&"number"===typeof n.column&&n.column>0)return{line:n.line,column:n.column,offset:"number"===typeof n.offset&&n.offset>-1?n.offset:void 0}}}function Qg(e){return e&&"object"===typeof e?"position"in e||"type"in e?Xg(e.position):"start"in e||"end"in e?Xg(e):"line"in e||"column"in e?Zg(e):"":""}function Zg(e){return $g(e&&e.line)+":"+$g(e&&e.column)}function Xg(e){return Zg(e&&e.start)+"-"+Zg(e&&e.end)}function $g(e){return e&&"number"===typeof e?e:1}class ex extends Error{constructor(e,t,n){super(),"string"===typeof t&&(n=t,t=void 0);let r="",i={},o=!1;if(t&&(i="line"in t&&"column"in t||"start"in t&&"end"in t?{place:t}:"type"in t?{ancestors:[t],place:t.position}:{...t}),"string"===typeof e?r=e:!i.cause&&e&&(o=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&"string"===typeof n){const e=n.indexOf(":");-1===e?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){const e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}const a=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=r,this.line=a?a.line:void 0,this.name=Qg(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=o&&i.cause&&"string"===typeof i.cause.stack?i.cause.stack:"",this.actual,this.expected,this.note,this.url}}ex.prototype.file="",ex.prototype.name="",ex.prototype.reason="",ex.prototype.message="",ex.prototype.stack="",ex.prototype.column=void 0,ex.prototype.line=void 0,ex.prototype.ancestors=void 0,ex.prototype.cause=void 0,ex.prototype.fatal=void 0,ex.prototype.place=void 0,ex.prototype.ruleId=void 0,ex.prototype.source=void 0;const tx={}.hasOwnProperty,nx=new Map,rx=/[A-Z]/g,ix=/-([a-z])/g,ox=new Set(["table","tbody","thead","tfoot","tr"]),ax=new Set(["td","th"]),sx="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function lx(e,t){if(!t||void 0===t.Fragment)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if("function"!==typeof t.jsxDEV)throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=function(e,t){return n;function n(n,r,i,o){const a=Array.isArray(i.children),s=Jg(n);return t(r,i,o,a,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}(n,t.jsxDEV)}else{if("function"!==typeof t.jsx)throw new TypeError("Expected `jsx` in production options");if("function"!==typeof t.jsxs)throw new TypeError("Expected `jsxs` in production options");r=function(e,t,n){return r;function r(e,r,i,o){const a=Array.isArray(i.children)?n:t;return o?a(r,i,o):a(r,i)}}(0,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:!1!==t.passKeys,passNode:t.passNode||!1,schema:"svg"===t.space?Ng:Fg,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:!1!==t.tableCellAlignToStyle},o=cx(i,e,void 0);return o&&"string"!==typeof o?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function cx(e,t,n){return"element"===t.type?function(e,t,n){const r=e.schema;let i=r;"svg"===t.tagName.toLowerCase()&&"html"===r.space&&(i=Ng,e.schema=i);e.ancestors.push(t);const o=mx(e,t.tagName,!1),a=function(e,t){const n={};let r,i;for(i in t.properties)if("children"!==i&&tx.call(t.properties,i)){const o=fx(e,i,t.properties[i]);if(o){const[i,a]=o;e.tableCellAlignToStyle&&"align"===i&&"string"===typeof a&&ax.has(t.tagName)?r=a:n[i]=a}}if(r){(n.style||(n.style={}))["css"===e.stylePropertyNameCase?"text-align":"textAlign"]=r}return n}(e,t);let s=px(e,t);ox.has(t.tagName)&&(s=s.filter((function(e){return"string"!==typeof e||!("object"===typeof(t=e)?"text"===t.type&&ug(t.value):ug(t));var t})));return ux(e,a,o,t),dx(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}(e,t,n):"mdxFlowExpression"===t.type||"mdxTextExpression"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater){const n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}hx(e,t.position)}(e,t):"mdxJsxFlowElement"===t.type||"mdxJsxTextElement"===t.type?function(e,t,n){const r=e.schema;let i=r;"svg"===t.name&&"html"===r.space&&(i=Ng,e.schema=i);e.ancestors.push(t);const o=null===t.name?e.Fragment:mx(e,t.name,!0),a=function(e,t){const n={};for(const r of t.attributes)if("mdxJsxExpressionAttribute"===r.type)if(r.data&&r.data.estree&&e.evaluater){const t=r.data.estree.body[0];t.type;const i=t.expression;i.type;const o=i.properties[0];o.type,Object.assign(n,e.evaluater.evaluateExpression(o.argument))}else hx(e,t.position);else{const i=r.name;let o;if(r.value&&"object"===typeof r.value)if(r.value.data&&r.value.data.estree&&e.evaluater){const t=r.value.data.estree.body[0];t.type,o=e.evaluater.evaluateExpression(t.expression)}else hx(e,t.position);else o=null===r.value||r.value;n[i]=o}return n}(e,t),s=px(e,t);return ux(e,a,o,t),dx(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}(e,t,n):"mdxjsEsm"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);hx(e,t.position)}(e,t):"root"===t.type?function(e,t,n){const r={};return dx(r,px(e,t)),e.create(t,e.Fragment,r,n)}(e,t,n):"text"===t.type?function(e,t){return t.value}(0,t):void 0}function ux(e,t,n,r){"string"!==typeof n&&n!==e.Fragment&&e.passNode&&(t.node=r)}function dx(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function px(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:nx;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const e="element"===o.type?o.tagName:"mdxJsxFlowElement"===o.type||"mdxJsxTextElement"===o.type?o.name:void 0;if(e){const t=i.get(e)||0;a=e+"-"+t,i.set(e,t+1)}}const s=cx(e,o,a);void 0!==s&&n.push(s)}return n}function fx(e,t,n){const r=function(e,t){const n=fg(t);let r=t,i=mg;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&"data"===n.slice(0,4)&&Bg.test(t)){if("-"===t.charAt(4)){const e=t.slice(5).replace(_g,Wg);r="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{const e=t.slice(4);if(!_g.test(e)){let n=e.replace(Ug,Hg);"-"!==n.charAt(0)&&(n="-"+n),t="data"+n}}i=jg}return new i(r,t)}(e.schema,t);if(!(null===n||void 0===n||"number"===typeof n&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?function(e,t){const n=t||{};return(""===e[e.length-1]?[...e,""]:e).join((n.padRight?" ":"")+","+(!1===n.padLeft?"":" ")).trim()}(n):function(e){return e.join(" ").trim()}(n)),"style"===r.property){let t="object"===typeof n?n:function(e,t){const n={};try{Vg(t,r)}catch(i){if(!e.ignoreInvalidStyle){const t=i,n=new ex("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:t,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=sx+"#cannot-parse-style-attribute",n}}return n;function r(e,t){let r=e;"--"!==r.slice(0,2)&&("-ms-"===r.slice(0,4)&&(r="ms-"+r.slice(4)),r=r.replace(ix,xx)),n[r]=t}}(e,String(n));return"css"===e.stylePropertyNameCase&&(t=function(e){const t={};let n;for(n in e)tx.call(e,n)&&(t[gx(n)]=e[n]);return t}(t)),["style",t]}return["react"===e.elementAttributeNameCase&&r.space?qg[r.property]||r.property:r.attribute,n]}}function mx(e,t,n){let r;if(n)if(t.includes(".")){const e=t.split(".");let n,i=-1;for(;++i<e.length;){const t=lg(e[i])?{type:"Identifier",name:e[i]}:{type:"Literal",value:e[i]};n=n?{type:"MemberExpression",object:n,property:t,computed:Boolean(i&&"Literal"===t.type),optional:!1}:t}r=n}else r=lg(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};else r={type:"Literal",value:t};if("Literal"===r.type){const t=r.value;return tx.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);hx(e)}function hx(e,t){const n=new ex("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=sx+"#cannot-handle-mdx-estrees-without-createevaluater",n}function gx(e){let t=e.replace(rx,yx);return"ms-"===t.slice(0,3)&&(t="-"+t),t}function xx(e,t){return t.toUpperCase()}function yx(e){return"-"+e.toLowerCase()}const bx={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},vx={};function wx(e,t,n){if(function(e){return Boolean(e&&"object"===typeof e)}(e)){if("value"in e)return"html"!==e.type||n?e.value:"";if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return kx(e.children,t,n)}return Array.isArray(e)?kx(e,t,n):""}function kx(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=wx(e[i],t,n);return r.join("")}function Sx(e,t,n,r){const i=e.length;let o,a=0;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function Ax(e,t){return e.length>0?(Sx(e,e.length,0,t),e):t}class jx{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const n=null===t||void 0===t?Number.POSITIVE_INFINITY:t;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){const r=t||0;this.setCursor(Math.trunc(e));const i=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return n&&Cx(this.left,n),i.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Cx(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Cx(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&0===this.right.length||e<0&&0===this.left.length))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);Cx(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Cx(this.left,t.reverse())}}}function Cx(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Ex(e){const t={};let n,r,i,o,a,s,l,c=-1;const u=new jx(e);for(;++c<u.length;){for(;c in t;)c=t[c];if(n=u.get(c),c&&"chunkFlow"===n[1].type&&"listItemPrefix"===u.get(c-1)[1].type&&(s=n[1]._tokenizer.events,i=0,i<s.length&&"lineEndingBlank"===s[i][1].type&&(i+=2),i<s.length&&"content"===s[i][1].type))for(;++i<s.length&&"content"!==s[i][1].type;)"chunkText"===s[i][1].type&&(s[i][1]._isInFirstContentOfListItem=!0,i++);if("enter"===n[0])n[1].contentType&&(Object.assign(t,Px(u,c)),c=t[c],l=!0);else if(n[1]._container){for(i=c,r=void 0;i--&&(o=u.get(i),"lineEnding"===o[1].type||"lineEndingBlank"===o[1].type);)"enter"===o[0]&&(r&&(u.get(r)[1].type="lineEndingBlank"),o[1].type="lineEnding",r=i);r&&(n[1].end=Object.assign({},u.get(r)[1].start),a=u.slice(r,c),a.unshift(n),u.splice(r,c-r+1,a))}}return Sx(e,0,Number.POSITIVE_INFINITY,u.slice(0)),!l}function Px(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[],a=n._tokenizer||r.parser[n.contentType](n.start),s=a.events,l=[],c={};let u,d,p=-1,f=n,m=0,h=0;const g=[h];for(;f;){for(;e.get(++i)[1]!==f;);o.push(i),f._tokenizer||(u=r.sliceStream(f),f.next||u.push(null),d&&a.defineSkip(f.start),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(u),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),d=f,f=f.next}for(f=n;++p<s.length;)"exit"===s[p][0]&&"enter"===s[p-1][0]&&s[p][1].type===s[p-1][1].type&&s[p][1].start.line!==s[p][1].end.line&&(h=p+1,g.push(h),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(a.events=[],f?(f._tokenizer=void 0,f.previous=void 0):g.pop(),p=g.length;p--;){const t=s.slice(g[p],g[p+1]),n=o.pop();l.push([n,n+t.length-1]),e.splice(n,2,t)}for(l.reverse(),p=-1;++p<l.length;)c[m+l[p][0]]=m+l[p][1],m+=l[p][1]-l[p][0]-1;return c}const Rx={}.hasOwnProperty;function Ox(e,t){let n;for(n in t){const r=(Rx.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n];let o;if(i)for(o in i){Rx.call(r,o)||(r[o]=[]);const e=i[o];Tx(r[o],Array.isArray(e)?e:e?[e]:[])}}}function Tx(e,t){let n=-1;const r=[];for(;++n<t.length;)("after"===t[n].add?e:r).push(t[n]);Sx(e,0,0,r)}const Mx=qx(/[A-Za-z]/),zx=qx(/[\dA-Za-z]/),Ix=qx(/[#-'*+\--9=?A-Z^-~]/);function Lx(e){return null!==e&&(e<32||127===e)}const Dx=qx(/\d/),Fx=qx(/[\dA-Fa-f]/),Nx=qx(/[!-/:-@[-`{-~]/);function Bx(e){return null!==e&&e<-2}function _x(e){return null!==e&&(e<0||32===e)}function Ux(e){return-2===e||-1===e||32===e}const Hx=qx(/\p{P}|\p{S}/u),Wx=qx(/\s/);function qx(e){return function(t){return null!==t&&t>-1&&e.test(String.fromCharCode(t))}}function Gx(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return function(r){if(Ux(r))return e.enter(n),a(r);return t(r)};function a(r){return Ux(r)&&o++<i?(e.consume(r),a):(e.exit(n),t(r))}}const Vx={tokenize:function(e){const t=e.attempt(this.parser.constructs.contentInitial,(function(n){if(null===n)return void e.consume(n);return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),Gx(e,t,"linePrefix")}),(function(t){return e.enter("paragraph"),r(t)}));let n;return t;function r(t){const r=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=r),n=r,i(t)}function i(t){return null===t?(e.exit("chunkText"),e.exit("paragraph"),void e.consume(t)):Bx(t)?(e.consume(t),e.exit("chunkText"),r):(e.consume(t),i)}}};const Kx={tokenize:function(e){const t=this,n=[];let r,i,o,a=0;return s;function s(r){if(a<n.length){const i=n[a];return t.containerState=i[1],e.attempt(i[0].continuation,l,c)(r)}return c(r)}function l(e){if(a++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,r&&y();const n=t.events.length;let i,o=n;for(;o--;)if("exit"===t.events[o][0]&&"chunkFlow"===t.events[o][1].type){i=t.events[o][1].end;break}x(a);let s=n;for(;s<t.events.length;)t.events[s][1].end=Object.assign({},i),s++;return Sx(t.events,o+1,0,t.events.slice(n)),t.events.length=s,c(e)}return s(e)}function c(i){if(a===n.length){if(!r)return p(i);if(r.currentConstruct&&r.currentConstruct.concrete)return m(i);t.interrupt=Boolean(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Jx,u,d)(i)}function u(e){return r&&y(),x(a),p(e)}function d(e){return t.parser.lazy[t.now().line]=a!==n.length,o=t.now().offset,m(e)}function p(n){return t.containerState={},e.attempt(Jx,f,m)(n)}function f(e){return a++,n.push([t.currentConstruct,t.containerState]),p(e)}function m(n){return null===n?(r&&y(),x(0),void e.consume(n)):(r=r||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:i,_tokenizer:r}),h(n))}function h(n){return null===n?(g(e.exit("chunkFlow"),!0),x(0),void e.consume(n)):Bx(n)?(e.consume(n),g(e.exit("chunkFlow")),a=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){const s=t.sliceStream(e);if(n&&s.push(null),e.previous=i,i&&(i.next=e),i=e,r.defineSkip(e.start),r.write(s),t.parser.lazy[e.start.line]){let e=r.events.length;for(;e--;)if(r.events[e][1].start.offset<o&&(!r.events[e][1].end||r.events[e][1].end.offset>o))return;const n=t.events.length;let i,s,l=n;for(;l--;)if("exit"===t.events[l][0]&&"chunkFlow"===t.events[l][1].type){if(i){s=t.events[l][1].end;break}i=!0}for(x(a),e=n;e<t.events.length;)t.events[e][1].end=Object.assign({},s),e++;Sx(t.events,l+1,0,t.events.slice(n)),t.events.length=e}}function x(r){let i=n.length;for(;i-- >r;){const r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function y(){r.write([null]),i=void 0,r=void 0,t.containerState._closeFlow=void 0}}},Jx={tokenize:function(e,t,n){return Gx(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}};const Yx={tokenize:function(e,t,n){return function(t){return Ux(t)?Gx(e,r,"linePrefix")(t):r(t)};function r(e){return null===e||Bx(e)?t(e):n(e)}},partial:!0};const Qx={tokenize:function(e,t){let n;return function(t){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(t)};function r(t){return null===t?i(t):Bx(t)?e.check(Zx,o,i)(t):(e.consume(t),r)}function i(n){return e.exit("chunkContent"),e.exit("content"),t(n)}function o(t){return e.consume(t),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}},resolve:function(e){return Ex(e),e}},Zx={tokenize:function(e,t,n){const r=this;return function(t){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),Gx(e,i,"linePrefix")};function i(i){if(null===i||Bx(i))return n(i);const o=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&o&&"linePrefix"===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}},partial:!0};const Xx={tokenize:function(e){const t=this,n=e.attempt(Yx,(function(r){if(null===r)return void e.consume(r);return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}),e.attempt(this.parser.constructs.flowInitial,r,Gx(e,e.attempt(this.parser.constructs.flow,r,e.attempt(Qx,r)),"linePrefix")));return n;function r(r){if(null!==r)return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t.currentConstruct=void 0,n;e.consume(r)}}};const $x={resolveAll:ry()},ey=ny("string"),ty=ny("text");function ny(e){return{tokenize:function(t){const n=this,r=this.parser.constructs[e],i=t.attempt(r,o,a);return o;function o(e){return l(e)?i(e):a(e)}function a(e){if(null!==e)return t.enter("data"),t.consume(e),s;t.consume(e)}function s(e){return l(e)?(t.exit("data"),i(e)):(t.consume(e),s)}function l(e){if(null===e)return!0;const t=r[e];let i=-1;if(t)for(;++i<t.length;){const e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}},resolveAll:ry("text"===e?iy:void 0)}}function ry(e){return function(t,n){let r,i=-1;for(;++i<=t.length;)void 0===r?t[i]&&"data"===t[i][1].type&&(r=i,i++):t[i]&&"data"===t[i][1].type||(i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),i=r+2),r=void 0);return e?e(t,n):t}}function iy(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){const r=e[n-1][1],i=t.sliceStream(r);let o,a=i.length,s=-1,l=0;for(;a--;){const e=i[a];if("string"===typeof e){for(s=e.length;32===e.charCodeAt(s-1);)l++,s--;if(s)break;s=-1}else if(-2===e)o=!0,l++;else if(-1!==e){a++;break}}if(l){const i={type:n===e.length||o||l<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-l,offset:r.end.offset-l,_index:r.start._index+a,_bufferIndex:a?s:r.start._bufferIndex+s},end:Object.assign({},r.end)};r.end=Object.assign({},i.start),r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,["enter",i,t],["exit",i,t]),n+=2)}n++}return e}function oy(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}function ay(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},o=[];let a=[],s=[],l=!0;const c={consume:function(e){Bx(e)?(r.line++,r.column=1,r.offset+=-3===e?2:1,v()):-1!==e&&(r.column++,r.offset++);r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++));u.previous=e,l=!0},enter:function(e,t){const n=t||{};return n.type=e,n.start=m(),u.events.push(["enter",n,u]),s.push(n),n},exit:function(e){const t=s.pop();return t.end=m(),u.events.push(["exit",t,u]),t},attempt:y((function(e,t){b(e,t.from)})),check:y(x),interrupt:y(x,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:f,sliceSerialize:function(e,t){return function(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if("string"===typeof o)a=o;else switch(o){case-5:a="\r";break;case-4:a="\n";break;case-3:a="\r\n";break;case-2:a=t?" ":"\t";break;case-1:if(!t&&i)continue;a=" ";break;default:a=String.fromCharCode(o)}i=-2===o,r.push(a)}return r.join("")}(f(e),t)},now:m,defineSkip:function(e){i[e.line]=e.column,v()},write:function(e){if(a=Ax(a,e),h(),null!==a[a.length-1])return[];return b(t,0),u.events=oy(o,u.events,u),u.events}};let d,p=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function f(e){return function(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const e=a[0];"string"===typeof e?a[0]=e.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}(a,e)}function m(){const{line:e,column:t,offset:n,_index:i,_bufferIndex:o}=r;return{line:e,column:t,offset:n,_index:i,_bufferIndex:o}}function h(){let e;for(;r._index<a.length;){const t=a[r._index];if("string"===typeof t)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)g(t.charCodeAt(r._bufferIndex));else g(t)}}function g(e){l=void 0,d=e,p=p(e)}function x(e,t){t.restore()}function y(e,t){return function(n,i,o){let a,d,p,f;return Array.isArray(n)?h(n):"tokenize"in n?h([n]):function(e){return t;function t(t){const n=null!==t&&e[t],r=null!==t&&e.null;return h([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}(n);function h(e){return a=e,d=0,0===e.length?o:g(e[d])}function g(e){return function(n){f=function(){const e=m(),t=u.previous,n=u.currentConstruct,i=u.events.length,o=Array.from(s);return{restore:a,from:i};function a(){r=e,u.previous=t,u.currentConstruct=n,u.events.length=i,s=o,v()}}(),p=e,e.partial||(u.currentConstruct=e);if(e.name&&u.parser.constructs.disable.null.includes(e.name))return y(n);return e.tokenize.call(t?Object.assign(Object.create(u),t):u,c,x,y)(n)}}function x(t){return l=!0,e(p,f),i}function y(e){return l=!0,f.restore(),++d<a.length?g(a[d]):o}}}function b(e,t){e.resolveAll&&!o.includes(e)&&o.push(e),e.resolve&&Sx(u.events,t,u.events.length-t,e.resolve(u.events.slice(t),u)),e.resolveTo&&(u.events=e.resolveTo(u.events,u))}function v(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}const sy={name:"thematicBreak",tokenize:function(e,t,n){let r,i=0;return function(t){return e.enter("thematicBreak"),function(e){return r=e,o(e)}(t)};function o(o){return o===r?(e.enter("thematicBreakSequence"),a(o)):i>=3&&(null===o||Bx(o))?(e.exit("thematicBreak"),t(o)):n(o)}function a(t){return t===r?(e.consume(t),i++,a):(e.exit("thematicBreakSequence"),Ux(t)?Gx(e,o,"whitespace")(t):o(t))}}};const ly={name:"list",tokenize:function(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&"linePrefix"===i[1].type?i[2].sliceSerialize(i[1],!0).length:0,a=0;return function(t){const i=r.containerState.type||(42===t||43===t||45===t?"listUnordered":"listOrdered");if("listUnordered"===i?!r.containerState.marker||t===r.containerState.marker:Dx(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),"listUnordered"===i)return e.enter("listItemPrefix"),42===t||45===t?e.check(sy,n,l)(t):l(t);if(!r.interrupt||49===t)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(t)}return n(t)};function s(t){return Dx(t)&&++a<10?(e.consume(t),s):(!r.interrupt||a<2)&&(r.containerState.marker?t===r.containerState.marker:41===t||46===t)?(e.exit("listItemValue"),l(t)):n(t)}function l(t){return e.enter("listItemMarker"),e.consume(t),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||t,e.check(Yx,r.interrupt?n:c,e.attempt(cy,d,u))}function c(e){return r.containerState.initialBlankLine=!0,o++,d(e)}function u(t){return Ux(t)?(e.enter("listItemPrefixWhitespace"),e.consume(t),e.exit("listItemPrefixWhitespace"),d):n(t)}function d(n){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(n)}},continuation:{tokenize:function(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Yx,i,o);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Gx(e,t,"listItemIndent",r.containerState.size+1)(n)}function o(n){return r.containerState.furtherBlankLines||!Ux(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(uy,t,a)(n))}function a(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,Gx(e,e.attempt(ly,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(i)}}},exit:function(e){e.exit(this.containerState.type)}},cy={tokenize:function(e,t,n){const r=this;return Gx(e,(function(e){const i=r.events[r.events.length-1];return!Ux(e)&&i&&"listItemPrefixWhitespace"===i[1].type?t(e):n(e)}),"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5)},partial:!0},uy={tokenize:function(e,t,n){const r=this;return Gx(e,(function(e){const i=r.events[r.events.length-1];return i&&"listItemIndent"===i[1].type&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}),"listItemIndent",r.containerState.size+1)},partial:!0};const dy={name:"blockQuote",tokenize:function(e,t,n){const r=this;return function(t){if(62===t){const n=r.containerState;return n.open||(e.enter("blockQuote",{_container:!0}),n.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(t),e.exit("blockQuoteMarker"),i}return n(t)};function i(n){return Ux(n)?(e.enter("blockQuotePrefixWhitespace"),e.consume(n),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(n))}},continuation:{tokenize:function(e,t,n){const r=this;return function(t){if(Ux(t))return Gx(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t);return i(t)};function i(r){return e.attempt(dy,t,n)(r)}}},exit:function(e){e.exit("blockQuote")}};function py(e,t,n,r,i,o,a,s,l){const c=l||Number.POSITIVE_INFINITY;let u=0;return function(t){if(60===t)return e.enter(r),e.enter(i),e.enter(o),e.consume(t),e.exit(o),d;if(null===t||32===t||41===t||Lx(t))return n(t);return e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),m(t)};function d(n){return 62===n?(e.enter(o),e.consume(n),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),p(n))}function p(t){return 62===t?(e.exit("chunkString"),e.exit(s),d(t)):null===t||60===t||Bx(t)?n(t):(e.consume(t),92===t?f:p)}function f(t){return 60===t||62===t||92===t?(e.consume(t),p):p(t)}function m(i){return u||null!==i&&41!==i&&!_x(i)?u<c&&40===i?(e.consume(i),u++,m):41===i?(e.consume(i),u--,m):null===i||32===i||40===i||Lx(i)?n(i):(e.consume(i),92===i?h:m):(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),t(i))}function h(t){return 40===t||41===t||92===t?(e.consume(t),m):m(t)}}function fy(e,t,n,r,i,o){const a=this;let s,l=0;return function(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(o),c};function c(d){return l>999||null===d||91===d||93===d&&!s||94===d&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(d):93===d?(e.exit(o),e.enter(i),e.consume(d),e.exit(i),e.exit(r),t):Bx(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),u(d))}function u(t){return null===t||91===t||93===t||Bx(t)||l++>999?(e.exit("chunkString"),c(t)):(e.consume(t),s||(s=!Ux(t)),92===t?d:u)}function d(t){return 91===t||92===t||93===t?(e.consume(t),l++,u):u(t)}}function my(e,t,n,r,i,o){let a;return function(t){if(34===t||39===t||40===t)return e.enter(r),e.enter(i),e.consume(t),e.exit(i),a=40===t?41:t,s;return n(t)};function s(n){return n===a?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(o),l(n))}function l(t){return t===a?(e.exit(o),s(a)):null===t?n(t):Bx(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),Gx(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(t))}function c(t){return t===a||null===t||Bx(t)?(e.exit("chunkString"),l(t)):(e.consume(t),92===t?u:c)}function u(t){return t===a||92===t?(e.consume(t),c):c(t)}}function hy(e,t){let n;return function r(i){if(Bx(i))return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r;if(Ux(i))return Gx(e,r,n?"linePrefix":"lineSuffix")(i);return t(i)}}function gy(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const xy={name:"definition",tokenize:function(e,t,n){const r=this;let i;return function(t){return e.enter("definition"),function(t){return fy.call(r,e,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(t)}(t)};function o(t){return i=gy(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),a):n(t)}function a(t){return _x(t)?hy(e,s)(t):s(t)}function s(t){return py(e,l,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(t)}function l(t){return e.attempt(yy,c,c)(t)}function c(t){return Ux(t)?Gx(e,u,"whitespace")(t):u(t)}function u(o){return null===o||Bx(o)?(e.exit("definition"),r.parser.defined.push(i),t(o)):n(o)}}},yy={tokenize:function(e,t,n){return function(t){return _x(t)?hy(e,r)(t):n(t)};function r(t){return my(e,i,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(t)}function i(t){return Ux(t)?Gx(e,o,"whitespace")(t):o(t)}function o(e){return null===e||Bx(e)?t(e):n(e)}},partial:!0};const by={name:"codeIndented",tokenize:function(e,t,n){const r=this;return function(t){return e.enter("codeIndented"),Gx(e,i,"linePrefix",5)(t)};function i(e){const t=r.events[r.events.length-1];return t&&"linePrefix"===t[1].type&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return null===t?s(t):Bx(t)?e.attempt(vy,o,s)(t):(e.enter("codeFlowValue"),a(t))}function a(t){return null===t||Bx(t)?(e.exit("codeFlowValue"),o(t)):(e.consume(t),a)}function s(n){return e.exit("codeIndented"),t(n)}}},vy={tokenize:function(e,t,n){const r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):Bx(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i):Gx(e,o,"linePrefix",5)(t)}function o(e){const o=r.events[r.events.length-1];return o&&"linePrefix"===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?t(e):Bx(e)?i(e):n(e)}},partial:!0};const wy={name:"headingAtx",tokenize:function(e,t,n){let r=0;return function(t){return e.enter("atxHeading"),function(t){return e.enter("atxHeadingSequence"),i(t)}(t)};function i(t){return 35===t&&r++<6?(e.consume(t),i):null===t||_x(t)?(e.exit("atxHeadingSequence"),o(t)):n(t)}function o(n){return 35===n?(e.enter("atxHeadingSequence"),a(n)):null===n||Bx(n)?(e.exit("atxHeading"),t(n)):Ux(n)?Gx(e,o,"whitespace")(n):(e.enter("atxHeadingText"),s(n))}function a(t){return 35===t?(e.consume(t),a):(e.exit("atxHeadingSequence"),o(t))}function s(t){return null===t||35===t||_x(t)?(e.exit("atxHeadingText"),o(t)):(e.consume(t),s)}},resolve:function(e,t){let n,r,i=e.length-2,o=3;"whitespace"===e[o][1].type&&(o+=2);i-2>o&&"whitespace"===e[i][1].type&&(i-=2);"atxHeadingSequence"===e[i][1].type&&(o===i-1||i-4>o&&"whitespace"===e[i-2][1].type)&&(i-=o+1===i?2:4);i>o&&(n={type:"atxHeadingText",start:e[o][1].start,end:e[i][1].end},r={type:"chunkText",start:e[o][1].start,end:e[i][1].end,contentType:"text"},Sx(e,o,i-o+1,[["enter",n,t],["enter",r,t],["exit",r,t],["exit",n,t]]));return e}};const ky={name:"setextUnderline",tokenize:function(e,t,n){const r=this;let i;return function(t){let a,s=r.events.length;for(;s--;)if("lineEnding"!==r.events[s][1].type&&"linePrefix"!==r.events[s][1].type&&"content"!==r.events[s][1].type){a="paragraph"===r.events[s][1].type;break}if(!r.parser.lazy[r.now().line]&&(r.interrupt||a))return e.enter("setextHeadingLine"),i=t,function(t){return e.enter("setextHeadingLineSequence"),o(t)}(t);return n(t)};function o(t){return t===i?(e.consume(t),o):(e.exit("setextHeadingLineSequence"),Ux(t)?Gx(e,a,"lineSuffix")(t):a(t))}function a(r){return null===r||Bx(r)?(e.exit("setextHeadingLine"),t(r)):n(r)}},resolveTo:function(e,t){let n,r,i,o=e.length;for(;o--;)if("enter"===e[o][0]){if("content"===e[o][1].type){n=o;break}"paragraph"===e[o][1].type&&(r=o)}else"content"===e[o][1].type&&e.splice(o,1),i||"definition"!==e[o][1].type||(i=o);const a={type:"setextHeading",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)};e[r][1].type="setextHeadingText",i?(e.splice(r,0,["enter",a,t]),e.splice(i+1,0,["exit",e[n][1],t]),e[n][1].end=Object.assign({},e[i][1].end)):e[n][1]=a;return e.push(["exit",a,t]),e}};const Sy=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ay=["pre","script","style","textarea"],jy={name:"htmlFlow",tokenize:function(e,t,n){const r=this;let i,o,a,s,l;return function(t){return function(t){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(t),c}(t)};function c(s){return 33===s?(e.consume(s),u):47===s?(e.consume(s),o=!0,f):63===s?(e.consume(s),i=3,r.interrupt?t:I):Mx(s)?(e.consume(s),a=String.fromCharCode(s),m):n(s)}function u(o){return 45===o?(e.consume(o),i=2,d):91===o?(e.consume(o),i=5,s=0,p):Mx(o)?(e.consume(o),i=4,r.interrupt?t:I):n(o)}function d(i){return 45===i?(e.consume(i),r.interrupt?t:I):n(i)}function p(i){const o="CDATA[";return i===o.charCodeAt(s++)?(e.consume(i),6===s?r.interrupt?t:C:p):n(i)}function f(t){return Mx(t)?(e.consume(t),a=String.fromCharCode(t),m):n(t)}function m(s){if(null===s||47===s||62===s||_x(s)){const l=47===s,c=a.toLowerCase();return l||o||!Ay.includes(c)?Sy.includes(a.toLowerCase())?(i=6,l?(e.consume(s),h):r.interrupt?t(s):C(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):o?g(s):x(s)):(i=1,r.interrupt?t(s):C(s))}return 45===s||zx(s)?(e.consume(s),a+=String.fromCharCode(s),m):n(s)}function h(i){return 62===i?(e.consume(i),r.interrupt?t:C):n(i)}function g(t){return Ux(t)?(e.consume(t),g):A(t)}function x(t){return 47===t?(e.consume(t),A):58===t||95===t||Mx(t)?(e.consume(t),y):Ux(t)?(e.consume(t),x):A(t)}function y(t){return 45===t||46===t||58===t||95===t||zx(t)?(e.consume(t),y):b(t)}function b(t){return 61===t?(e.consume(t),v):Ux(t)?(e.consume(t),b):x(t)}function v(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),l=t,w):Ux(t)?(e.consume(t),v):k(t)}function w(t){return t===l?(e.consume(t),l=null,S):null===t||Bx(t)?n(t):(e.consume(t),w)}function k(t){return null===t||34===t||39===t||47===t||60===t||61===t||62===t||96===t||_x(t)?b(t):(e.consume(t),k)}function S(e){return 47===e||62===e||Ux(e)?x(e):n(e)}function A(t){return 62===t?(e.consume(t),j):n(t)}function j(t){return null===t||Bx(t)?C(t):Ux(t)?(e.consume(t),j):n(t)}function C(t){return 45===t&&2===i?(e.consume(t),O):60===t&&1===i?(e.consume(t),T):62===t&&4===i?(e.consume(t),L):63===t&&3===i?(e.consume(t),I):93===t&&5===i?(e.consume(t),z):!Bx(t)||6!==i&&7!==i?null===t||Bx(t)?(e.exit("htmlFlowData"),E(t)):(e.consume(t),C):(e.exit("htmlFlowData"),e.check(Cy,D,E)(t))}function E(t){return e.check(Ey,P,D)(t)}function P(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),R}function R(t){return null===t||Bx(t)?E(t):(e.enter("htmlFlowData"),C(t))}function O(t){return 45===t?(e.consume(t),I):C(t)}function T(t){return 47===t?(e.consume(t),a="",M):C(t)}function M(t){if(62===t){const n=a.toLowerCase();return Ay.includes(n)?(e.consume(t),L):C(t)}return Mx(t)&&a.length<8?(e.consume(t),a+=String.fromCharCode(t),M):C(t)}function z(t){return 93===t?(e.consume(t),I):C(t)}function I(t){return 62===t?(e.consume(t),L):45===t&&2===i?(e.consume(t),I):C(t)}function L(t){return null===t||Bx(t)?(e.exit("htmlFlowData"),D(t)):(e.consume(t),L)}function D(n){return e.exit("htmlFlow"),t(n)}},resolveTo:function(e){let t=e.length;for(;t--&&("enter"!==e[t][0]||"htmlFlow"!==e[t][1].type););t>1&&"linePrefix"===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2));return e},concrete:!0},Cy={tokenize:function(e,t,n){return function(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(Yx,t,n)}},partial:!0},Ey={tokenize:function(e,t,n){const r=this;return function(t){if(Bx(t))return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i;return n(t)};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0};const Py={tokenize:function(e,t,n){const r=this;return function(t){if(null===t)return n(t);return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0},Ry={name:"codeFenced",tokenize:function(e,t,n){const r=this,i={tokenize:function(e,t,n){let i=0;return a;function a(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l}function l(t){return e.enter("codeFencedFence"),Ux(t)?Gx(e,c,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):c(t)}function c(t){return t===o?(e.enter("codeFencedFenceSequence"),u(t)):n(t)}function u(t){return t===o?(i++,e.consume(t),u):i>=s?(e.exit("codeFencedFenceSequence"),Ux(t)?Gx(e,d,"whitespace")(t):d(t)):n(t)}function d(r){return null===r||Bx(r)?(e.exit("codeFencedFence"),t(r)):n(r)}},partial:!0};let o,a=0,s=0;return function(t){return function(t){const n=r.events[r.events.length-1];return a=n&&"linePrefix"===n[1].type?n[2].sliceSerialize(n[1],!0).length:0,o=t,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),l(t)}(t)};function l(t){return t===o?(s++,e.consume(t),l):s<3?n(t):(e.exit("codeFencedFenceSequence"),Ux(t)?Gx(e,c,"whitespace")(t):c(t))}function c(n){return null===n||Bx(n)?(e.exit("codeFencedFence"),r.interrupt?t(n):e.check(Py,f,y)(n)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),u(n))}function u(t){return null===t||Bx(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(t)):Ux(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Gx(e,d,"whitespace")(t)):96===t&&t===o?n(t):(e.consume(t),u)}function d(t){return null===t||Bx(t)?c(t):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),p(t))}function p(t){return null===t||Bx(t)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(t)):96===t&&t===o?n(t):(e.consume(t),p)}function f(t){return e.attempt(i,y,m)(t)}function m(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),h}function h(t){return a>0&&Ux(t)?Gx(e,g,"linePrefix",a+1)(t):g(t)}function g(t){return null===t||Bx(t)?e.check(Py,f,y)(t):(e.enter("codeFlowValue"),x(t))}function x(t){return null===t||Bx(t)?(e.exit("codeFlowValue"),g(t)):(e.consume(t),x)}function y(n){return e.exit("codeFenced"),t(n)}},concrete:!0};const Oy=document.createElement("i");function Ty(e){const t="&"+e+";";Oy.innerHTML=t;const n=Oy.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&(n!==t&&n)}const My={name:"characterReference",tokenize:function(e,t,n){const r=this;let i,o,a=0;return function(t){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(t),e.exit("characterReferenceMarker"),s};function s(t){return 35===t?(e.enter("characterReferenceMarkerNumeric"),e.consume(t),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),i=31,o=zx,c(t))}function l(t){return 88===t||120===t?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(t),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,o=Fx,c):(e.enter("characterReferenceValue"),i=7,o=Dx,c(t))}function c(s){if(59===s&&a){const i=e.exit("characterReferenceValue");return o!==zx||Ty(r.sliceSerialize(i))?(e.enter("characterReferenceMarker"),e.consume(s),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):n(s)}return o(s)&&a++<i?(e.consume(s),c):n(s)}}};const zy={name:"characterEscape",tokenize:function(e,t,n){return function(t){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(t),e.exit("escapeMarker"),r};function r(r){return Nx(r)?(e.enter("characterEscapeValue"),e.consume(r),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(r)}}};const Iy={name:"lineEnding",tokenize:function(e,t){return function(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),Gx(e,t,"linePrefix")}}};const Ly={name:"labelEnd",tokenize:function(e,t,n){const r=this;let i,o,a=r.events.length;for(;a--;)if(("labelImage"===r.events[a][1].type||"labelLink"===r.events[a][1].type)&&!r.events[a][1]._balanced){i=r.events[a][1];break}return function(t){if(!i)return n(t);if(i._inactive)return u(t);return o=r.parser.defined.includes(gy(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelEnd"),s};function s(t){return 40===t?e.attempt(Dy,c,o?c:u)(t):91===t?e.attempt(Fy,c,o?l:u)(t):o?c(t):u(t)}function l(t){return e.attempt(Ny,c,u)(t)}function c(e){return t(e)}function u(e){return i._balanced=!0,n(e)}},resolveTo:function(e,t){let n,r,i,o,a=e.length,s=0;for(;a--;)if(n=e[a][1],r){if("link"===n.type||"labelLink"===n.type&&n._inactive)break;"enter"===e[a][0]&&"labelLink"===n.type&&(n._inactive=!0)}else if(i){if("enter"===e[a][0]&&("labelImage"===n.type||"labelLink"===n.type)&&!n._balanced&&(r=a,"labelLink"!==n.type)){s=2;break}}else"labelEnd"===n.type&&(i=a);const l={type:"labelLink"===e[r][1].type?"link":"image",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)},c={type:"label",start:Object.assign({},e[r][1].start),end:Object.assign({},e[i][1].end)},u={type:"labelText",start:Object.assign({},e[r+s+2][1].end),end:Object.assign({},e[i-2][1].start)};return o=[["enter",l,t],["enter",c,t]],o=Ax(o,e.slice(r+1,r+s+3)),o=Ax(o,[["enter",u,t]]),o=Ax(o,oy(t.parser.constructs.insideSpan.null,e.slice(r+s+4,i-3),t)),o=Ax(o,[["exit",u,t],e[i-2],e[i-1],["exit",c,t]]),o=Ax(o,e.slice(i+1)),o=Ax(o,[["exit",l,t]]),Sx(e,r,e.length,o),e},resolveAll:function(e){let t=-1;for(;++t<e.length;){const n=e[t][1];"labelImage"!==n.type&&"labelLink"!==n.type&&"labelEnd"!==n.type||(e.splice(t+1,"labelImage"===n.type?4:2),n.type="data",t++)}return e}},Dy={tokenize:function(e,t,n){return function(t){return e.enter("resource"),e.enter("resourceMarker"),e.consume(t),e.exit("resourceMarker"),r};function r(t){return _x(t)?hy(e,i)(t):i(t)}function i(t){return 41===t?c(t):py(e,o,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(t)}function o(t){return _x(t)?hy(e,s)(t):c(t)}function a(e){return n(e)}function s(t){return 34===t||39===t||40===t?my(e,l,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(t):c(t)}function l(t){return _x(t)?hy(e,c)(t):c(t)}function c(r){return 41===r?(e.enter("resourceMarker"),e.consume(r),e.exit("resourceMarker"),e.exit("resource"),t):n(r)}}},Fy={tokenize:function(e,t,n){const r=this;return function(t){return fy.call(r,e,i,o,"reference","referenceMarker","referenceString")(t)};function i(e){return r.parser.defined.includes(gy(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}},Ny={tokenize:function(e,t,n){return function(t){return e.enter("reference"),e.enter("referenceMarker"),e.consume(t),e.exit("referenceMarker"),r};function r(r){return 93===r?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),t):n(r)}}};const By={name:"labelStartImage",tokenize:function(e,t,n){const r=this;return function(t){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(t),e.exit("labelImageMarker"),i};function i(t){return 91===t?(e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelImage"),o):n(t)}function o(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}},resolveAll:Ly.resolveAll};function _y(e){return null===e||_x(e)||Wx(e)?1:Hx(e)?2:void 0}const Uy={name:"attention",tokenize:function(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=_y(r);let o;return function(t){return o=t,e.enter("attentionSequence"),a(t)};function a(s){if(s===o)return e.consume(s),a;const l=e.exit("attentionSequence"),c=_y(s),u=!c||2===c&&i||n.includes(s),d=!i||2===i&&c||n.includes(r);return l._open=Boolean(42===o?u:u&&(i||!d)),l._close=Boolean(42===o?d:d&&(c||!u)),t(s)}},resolveAll:function(e,t){let n,r,i,o,a,s,l,c,u=-1;for(;++u<e.length;)if("enter"===e[u][0]&&"attentionSequence"===e[u][1].type&&e[u][1]._close)for(n=u;n--;)if("exit"===e[n][0]&&"attentionSequence"===e[n][1].type&&e[n][1]._open&&t.sliceSerialize(e[n][1]).charCodeAt(0)===t.sliceSerialize(e[u][1]).charCodeAt(0)){if((e[n][1]._close||e[u][1]._open)&&(e[u][1].end.offset-e[u][1].start.offset)%3&&!((e[n][1].end.offset-e[n][1].start.offset+e[u][1].end.offset-e[u][1].start.offset)%3))continue;s=e[n][1].end.offset-e[n][1].start.offset>1&&e[u][1].end.offset-e[u][1].start.offset>1?2:1;const d=Object.assign({},e[n][1].end),p=Object.assign({},e[u][1].start);Hy(d,-s),Hy(p,s),o={type:s>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[n][1].end)},a={type:s>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[u][1].start),end:p},i={type:s>1?"strongText":"emphasisText",start:Object.assign({},e[n][1].end),end:Object.assign({},e[u][1].start)},r={type:s>1?"strong":"emphasis",start:Object.assign({},o.start),end:Object.assign({},a.end)},e[n][1].end=Object.assign({},o.start),e[u][1].start=Object.assign({},a.end),l=[],e[n][1].end.offset-e[n][1].start.offset&&(l=Ax(l,[["enter",e[n][1],t],["exit",e[n][1],t]])),l=Ax(l,[["enter",r,t],["enter",o,t],["exit",o,t],["enter",i,t]]),l=Ax(l,oy(t.parser.constructs.insideSpan.null,e.slice(n+1,u),t)),l=Ax(l,[["exit",i,t],["enter",a,t],["exit",a,t],["exit",r,t]]),e[u][1].end.offset-e[u][1].start.offset?(c=2,l=Ax(l,[["enter",e[u][1],t],["exit",e[u][1],t]])):c=0,Sx(e,n-1,u-n+3,l),u=n+l.length-c-2;break}u=-1;for(;++u<e.length;)"attentionSequence"===e[u][1].type&&(e[u][1].type="data");return e}};function Hy(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Wy={name:"autolink",tokenize:function(e,t,n){let r=0;return function(t){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i};function i(t){return Mx(t)?(e.consume(t),o):64===t?n(t):l(t)}function o(e){return 43===e||45===e||46===e||zx(e)?(r=1,a(e)):l(e)}function a(t){return 58===t?(e.consume(t),r=0,s):(43===t||45===t||46===t||zx(t))&&r++<32?(e.consume(t),a):(r=0,l(t))}function s(r){return 62===r?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(r),e.exit("autolinkMarker"),e.exit("autolink"),t):null===r||32===r||60===r||Lx(r)?n(r):(e.consume(r),s)}function l(t){return 64===t?(e.consume(t),c):Ix(t)?(e.consume(t),l):n(t)}function c(e){return zx(e)?u(e):n(e)}function u(n){return 46===n?(e.consume(n),r=0,c):62===n?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(n),e.exit("autolinkMarker"),e.exit("autolink"),t):d(n)}function d(t){if((45===t||zx(t))&&r++<63){const n=45===t?d:u;return e.consume(t),n}return n(t)}}};const qy={name:"htmlText",tokenize:function(e,t,n){const r=this;let i,o,a;return function(t){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(t),s};function s(t){return 33===t?(e.consume(t),l):47===t?(e.consume(t),v):63===t?(e.consume(t),y):Mx(t)?(e.consume(t),S):n(t)}function l(t){return 45===t?(e.consume(t),c):91===t?(e.consume(t),o=0,f):Mx(t)?(e.consume(t),x):n(t)}function c(t){return 45===t?(e.consume(t),p):n(t)}function u(t){return null===t?n(t):45===t?(e.consume(t),d):Bx(t)?(a=u,M(t)):(e.consume(t),u)}function d(t){return 45===t?(e.consume(t),p):u(t)}function p(e){return 62===e?T(e):45===e?d(e):u(e)}function f(t){const r="CDATA[";return t===r.charCodeAt(o++)?(e.consume(t),6===o?m:f):n(t)}function m(t){return null===t?n(t):93===t?(e.consume(t),h):Bx(t)?(a=m,M(t)):(e.consume(t),m)}function h(t){return 93===t?(e.consume(t),g):m(t)}function g(t){return 62===t?T(t):93===t?(e.consume(t),g):m(t)}function x(t){return null===t||62===t?T(t):Bx(t)?(a=x,M(t)):(e.consume(t),x)}function y(t){return null===t?n(t):63===t?(e.consume(t),b):Bx(t)?(a=y,M(t)):(e.consume(t),y)}function b(e){return 62===e?T(e):y(e)}function v(t){return Mx(t)?(e.consume(t),w):n(t)}function w(t){return 45===t||zx(t)?(e.consume(t),w):k(t)}function k(t){return Bx(t)?(a=k,M(t)):Ux(t)?(e.consume(t),k):T(t)}function S(t){return 45===t||zx(t)?(e.consume(t),S):47===t||62===t||_x(t)?A(t):n(t)}function A(t){return 47===t?(e.consume(t),T):58===t||95===t||Mx(t)?(e.consume(t),j):Bx(t)?(a=A,M(t)):Ux(t)?(e.consume(t),A):T(t)}function j(t){return 45===t||46===t||58===t||95===t||zx(t)?(e.consume(t),j):C(t)}function C(t){return 61===t?(e.consume(t),E):Bx(t)?(a=C,M(t)):Ux(t)?(e.consume(t),C):A(t)}function E(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),i=t,P):Bx(t)?(a=E,M(t)):Ux(t)?(e.consume(t),E):(e.consume(t),R)}function P(t){return t===i?(e.consume(t),i=void 0,O):null===t?n(t):Bx(t)?(a=P,M(t)):(e.consume(t),P)}function R(t){return null===t||34===t||39===t||60===t||61===t||96===t?n(t):47===t||62===t||_x(t)?A(t):(e.consume(t),R)}function O(e){return 47===e||62===e||_x(e)?A(e):n(e)}function T(r){return 62===r?(e.consume(r),e.exit("htmlTextData"),e.exit("htmlText"),t):n(r)}function M(t){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),z}function z(t){return Ux(t)?Gx(e,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):I(t)}function I(t){return e.enter("htmlTextData"),a(t)}}};const Gy={name:"labelStartLink",tokenize:function(e,t,n){const r=this;return function(t){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelLink"),i};function i(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}},resolveAll:Ly.resolveAll};const Vy={name:"hardBreakEscape",tokenize:function(e,t,n){return function(t){return e.enter("hardBreakEscape"),e.consume(t),r};function r(r){return Bx(r)?(e.exit("hardBreakEscape"),t(r)):n(r)}}};const Ky={name:"codeText",tokenize:function(e,t,n){let r,i,o=0;return function(t){return e.enter("codeText"),e.enter("codeTextSequence"),a(t)};function a(t){return 96===t?(e.consume(t),o++,a):(e.exit("codeTextSequence"),s(t))}function s(t){return null===t?n(t):32===t?(e.enter("space"),e.consume(t),e.exit("space"),s):96===t?(i=e.enter("codeTextSequence"),r=0,c(t)):Bx(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),s):(e.enter("codeTextData"),l(t))}function l(t){return null===t||32===t||96===t||Bx(t)?(e.exit("codeTextData"),s(t)):(e.consume(t),l)}function c(n){return 96===n?(e.consume(n),r++,c):r===o?(e.exit("codeTextSequence"),e.exit("codeText"),t(n)):(i.type="codeTextData",l(n))}},resolve:function(e){let t,n,r=e.length-4,i=3;if(("lineEnding"===e[i][1].type||"space"===e[i][1].type)&&("lineEnding"===e[r][1].type||"space"===e[r][1].type))for(t=i;++t<r;)if("codeTextData"===e[t][1].type){e[i][1].type="codeTextPadding",e[r][1].type="codeTextPadding",i+=2,r-=2;break}t=i-1,r++;for(;++t<=r;)void 0===n?t!==r&&"lineEnding"!==e[t][1].type&&(n=t):t!==r&&"lineEnding"!==e[t][1].type||(e[n][1].type="codeTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e},previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type}};const Jy={42:ly,43:ly,45:ly,48:ly,49:ly,50:ly,51:ly,52:ly,53:ly,54:ly,55:ly,56:ly,57:ly,62:dy},Yy={91:xy},Qy={[-2]:by,[-1]:by,32:by},Zy={35:wy,42:sy,45:[ky,sy],60:jy,61:ky,95:sy,96:Ry,126:Ry},Xy={38:My,92:zy},$y={[-5]:Iy,[-4]:Iy,[-3]:Iy,33:By,38:My,42:Uy,60:[Wy,qy],91:Gy,92:[Vy,zy],93:Ly,95:Uy,96:Ky},eb={null:[Uy,$x]},tb={null:[42,95]},nb={null:[]};function rb(e){const t=function(e){const t={};let n=-1;for(;++n<e.length;)Ox(t,e[n]);return t}([r,...(e||{}).extensions||[]]),n={defined:[],lazy:{},constructs:t,content:i(Vx),document:i(Kx),flow:i(Xx),string:i(ey),text:i(ty)};return n;function i(e){return function(t){return ay(n,e,t)}}}const ib=/[\0\t\n\r]/g;function ob(e,t){const n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||65535===(65535&n)||65534===(65535&n)||n>1114111?"\ufffd":String.fromCodePoint(n)}const ab=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function sb(e,t,n){if(t)return t;if(35===n.charCodeAt(0)){const e=n.charCodeAt(1),t=120===e||88===e;return ob(n.slice(t?2:1),t?16:10)}return Ty(n)||e}const lb={}.hasOwnProperty;function cb(e,t,n){return"string"!==typeof t&&(n=t,t=void 0),function(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(te),autolinkProtocol:j,autolinkEmail:j,atxHeading:o(Z),blockQuote:o(V),characterEscape:j,characterReference:j,codeFenced:o(K),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(K,a),codeText:o(J,a),codeTextData:j,data:j,codeFlowValue:j,definition:o(Y),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(Q),hardBreakEscape:o(X),hardBreakTrailing:o(X),htmlFlow:o($,a),htmlFlowData:j,htmlText:o($,a),htmlTextData:j,image:o(ee),label:a,link:o(te),listItem:o(re),listItemValue:p,listOrdered:o(ne,d),listUnordered:o(ne),paragraph:o(ie),reference:B,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(Z),strong:o(oe),thematicBreak:o(se)},exit:{atxHeading:l(),atxHeadingSequence:w,autolink:l(),autolinkEmail:G,autolinkProtocol:q,blockQuote:l(),characterEscapeValue:C,characterReferenceMarkerHexadecimal:U,characterReferenceMarkerNumeric:U,characterReferenceValue:H,characterReference:W,codeFenced:l(g),codeFencedFence:h,codeFencedFenceInfo:f,codeFencedFenceMeta:m,codeFlowValue:C,codeIndented:l(x),codeText:l(T),codeTextData:C,data:C,definition:l(),definitionDestinationString:v,definitionLabelString:y,definitionTitleString:b,emphasis:l(),hardBreakEscape:l(P),hardBreakTrailing:l(P),htmlFlow:l(R),htmlFlowData:C,htmlText:l(O),htmlTextData:C,image:l(z),label:L,labelText:I,lineEnding:E,link:l(M),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:_,resourceDestinationString:D,resourceTitleString:F,resource:N,setextHeading:l(A),setextHeadingLineSequence:S,setextHeadingText:k,strong:l(),thematicBreak:l()}};db(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(e){let r={type:"root",children:[]};const o={stack:[r],tokenStack:[],config:t,enter:s,exit:c,buffer:a,resume:u,data:n},l=[];let d=-1;for(;++d<e.length;)if("listOrdered"===e[d][1].type||"listUnordered"===e[d][1].type)if("enter"===e[d][0])l.push(d);else{d=i(e,l.pop(),d)}for(d=-1;++d<e.length;){const n=t[e[d][0]];lb.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},o),e[d][1])}if(o.tokenStack.length>0){const e=o.tokenStack[o.tokenStack.length-1];(e[1]||fb).call(o,void 0,e[0])}for(r.position={start:ub(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:ub(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r,i,o,a,s=t-1,l=-1,c=!1;for(;++s<=n;){const t=e[s];switch(t[1].type){case"listUnordered":case"listOrdered":case"blockQuote":"enter"===t[0]?l++:l--,a=void 0;break;case"lineEndingBlank":"enter"===t[0]&&(!r||a||l||o||(o=s),a=void 0);break;case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:a=void 0}if(!l&&"enter"===t[0]&&"listItemPrefix"===t[1].type||-1===l&&"exit"===t[0]&&("listUnordered"===t[1].type||"listOrdered"===t[1].type)){if(r){let a=s;for(i=void 0;a--;){const t=e[a];if("lineEnding"===t[1].type||"lineEndingBlank"===t[1].type){if("exit"===t[0])continue;i&&(e[i][1].type="lineEndingBlank",c=!0),t[1].type="lineEnding",i=a}else if("linePrefix"!==t[1].type&&"blockQuotePrefix"!==t[1].type&&"blockQuotePrefixWhitespace"!==t[1].type&&"blockQuoteMarker"!==t[1].type&&"listItemIndent"!==t[1].type)break}o&&(!i||o<i)&&(r._spread=!0),r.end=Object.assign({},i?e[i][1].start:t[1].end),e.splice(i||s,0,["exit",r,t[2]]),s++,n++}if("listItemPrefix"===t[1].type){const i={type:"listItem",_spread:!1,start:Object.assign({},t[1].start),end:void 0};r=i,e.splice(s,0,["enter",i,t[2]]),s++,n++,o=void 0,a=!0}}}return e[t][1]._spread=c,n}function o(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function a(){this.stack.push({type:"fragment",children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n]),e.position={start:ub(t.start),end:void 0}}function l(e){return t;function t(t){e&&e.call(this,t),c.call(this,t)}}function c(e,t){const n=this.stack.pop(),r=this.tokenStack.pop();if(!r)throw new Error("Cannot close `"+e.type+"` ("+Qg({start:e.start,end:e.end})+"): it\u2019s not open");if(r[0].type!==e.type)if(t)t.call(this,e,r[0]);else{(r[1]||fb).call(this,e,r[0])}n.position.end=ub(e.end)}function u(){return function(e,t){const n=t||vx;return wx(e,"boolean"!==typeof n.includeImageAlt||n.includeImageAlt,"boolean"!==typeof n.includeHtml||n.includeHtml)}(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function p(e){if(this.data.expectingFirstListItemValue){this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function f(){const e=this.resume();this.stack[this.stack.length-1].lang=e}function m(){const e=this.resume();this.stack[this.stack.length-1].meta=e}function h(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){const e=this.resume();this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const e=this.resume();this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,"")}function y(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=gy(this.sliceSerialize(e)).toLowerCase()}function b(){const e=this.resume();this.stack[this.stack.length-1].title=e}function v(){const e=this.resume();this.stack[this.stack.length-1].url=e}function w(e){const t=this.stack[this.stack.length-1];if(!t.depth){const n=this.sliceSerialize(e).length;t.depth=n}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function S(e){this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).codePointAt(0)?1:2}function A(){this.data.setextHeadingSlurpLineEnding=void 0}function j(e){const t=this.stack[this.stack.length-1].children;let n=t[t.length-1];n&&"text"===n.type||(n=ae(),n.position={start:ub(e.start),end:void 0},t.push(n)),this.stack.push(n)}function C(e){const t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=ub(e.end)}function E(e){const n=this.stack[this.stack.length-1];if(this.data.atHardBreak){return n.children[n.children.length-1].position.end=ub(e.end),void(this.data.atHardBreak=void 0)}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(j.call(this,e),C.call(this,e))}function P(){this.data.atHardBreak=!0}function R(){const e=this.resume();this.stack[this.stack.length-1].value=e}function O(){const e=this.resume();this.stack[this.stack.length-1].value=e}function T(){const e=this.resume();this.stack[this.stack.length-1].value=e}function M(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function z(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function I(e){const t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=function(e){return e.replace(ab,sb)}(t),n.identifier=gy(t).toLowerCase()}function L(){const e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];if(this.data.inReference=!0,"link"===n.type){const t=e.children;n.children=t}else n.alt=t}function D(){const e=this.resume();this.stack[this.stack.length-1].url=e}function F(){const e=this.resume();this.stack[this.stack.length-1].title=e}function N(){this.data.inReference=void 0}function B(){this.data.referenceType="collapsed"}function _(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=gy(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType="full"}function U(e){this.data.characterReferenceType=e.type}function H(e){const t=this.sliceSerialize(e),n=this.data.characterReferenceType;let r;if(n)r=ob(t,"characterReferenceMarkerNumeric"===n?10:16),this.data.characterReferenceType=void 0;else{r=Ty(t)}this.stack[this.stack.length-1].value+=r}function W(e){this.stack.pop().position.end=ub(e.end)}function q(e){C.call(this,e);this.stack[this.stack.length-1].url=this.sliceSerialize(e)}function G(e){C.call(this,e);this.stack[this.stack.length-1].url="mailto:"+this.sliceSerialize(e)}function V(){return{type:"blockquote",children:[]}}function K(){return{type:"code",lang:null,meta:null,value:""}}function J(){return{type:"inlineCode",value:""}}function Y(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Q(){return{type:"emphasis",children:[]}}function Z(){return{type:"heading",depth:0,children:[]}}function X(){return{type:"break"}}function $(){return{type:"html",value:""}}function ee(){return{type:"image",title:null,url:"",alt:null}}function te(){return{type:"link",title:null,url:"",children:[]}}function ne(e){return{type:"list",ordered:"listOrdered"===e.type,start:null,spread:e._spread,children:[]}}function re(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}}function ie(){return{type:"paragraph",children:[]}}function oe(){return{type:"strong",children:[]}}function ae(){return{type:"text",value:""}}function se(){return{type:"thematicBreak"}}}(n)(function(e){for(;!Ex(e););return e}(rb(n).document().write(function(){let e,t=1,n="",r=!0;return function(i,o,a){const s=[];let l,c,u,d,p;for(i=n+("string"===typeof i?i.toString():new TextDecoder(o||void 0).decode(i)),u=0,n="",r&&(65279===i.charCodeAt(0)&&u++,r=void 0);u<i.length;){if(ib.lastIndex=u,l=ib.exec(i),d=l&&void 0!==l.index?l.index:i.length,p=i.charCodeAt(d),!l){n=i.slice(u);break}if(10===p&&u===d&&e)s.push(-3),e=void 0;else switch(e&&(s.push(-5),e=void 0),u<d&&(s.push(i.slice(u,d)),t+=d-u),p){case 0:s.push(65533),t++;break;case 9:for(c=4*Math.ceil(t/4),s.push(-2);t++<c;)s.push(-1);break;case 10:s.push(-4),t=1;break;default:e=!0,t=1}u=d+1}return a&&(e&&s.push(-5),n&&s.push(n),s.push(null)),s}}()(e,t,!0))))}function ub(e){return{line:e.line,column:e.column,offset:e.offset}}function db(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?db(e,r):pb(e,r)}}function pb(e,t){let n;for(n in t)if(lb.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function fb(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Qg({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Qg({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Qg({start:t.start,end:t.end})+") is still open")}function mb(e){const t=this;t.parser=function(n){return cb(n,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}const hb="object"===typeof self?self:globalThis,gb=e=>((e,t)=>{const n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case 0:case-1:return n(a,i);case 1:{const e=n([],i);for(const t of a)e.push(r(t));return e}case 2:{const e=n({},i);for(const[t,n]of a)e[r(t)]=r(n);return e}case 3:return n(new Date(a),i);case 4:{const{source:e,flags:t}=a;return n(new RegExp(e,t),i)}case 5:{const e=n(new Map,i);for(const[t,n]of a)e.set(r(t),r(n));return e}case 6:{const e=n(new Set,i);for(const t of a)e.add(r(t));return e}case 7:{const{name:e,message:t}=a;return n(new hb[e](t),i)}case 8:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i)}return n(new hb[o](a),i)};return r})(new Map,e)(0),xb="",{toString:yb}={},{keys:bb}=Object,vb=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const n=yb.call(e).slice(8,-1);switch(n){case"Array":return[1,xb];case"Object":return[2,xb];case"Date":return[3,xb];case"RegExp":return[4,xb];case"Map":return[5,xb];case"Set":return[6,xb]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},wb=e=>{let[t,n]=e;return 0===t&&("function"===n||"symbol"===n)},kb=function(e){let{json:t,lossy:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=[];return((e,t,n,r)=>{const i=(e,t)=>{const i=r.push(e)-1;return n.set(t,i),i},o=r=>{if(n.has(r))return n.get(r);let[a,s]=vb(r);switch(a){case 0:{let t=r;switch(s){case"bigint":a=8,t=r.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);t=null;break;case"undefined":return i([-1],r)}return i([a,t],r)}case 1:{if(s)return i([s,[...r]],r);const e=[],t=i([a,e],r);for(const n of r)e.push(o(n));return t}case 2:{if(s)switch(s){case"BigInt":return i([s,r.toString()],r);case"Boolean":case"Number":case"String":return i([s,r.valueOf()],r)}if(t&&"toJSON"in r)return o(r.toJSON());const n=[],l=i([a,n],r);for(const t of bb(r))!e&&wb(vb(r[t]))||n.push([o(t),o(r[t])]);return l}case 3:return i([a,r.toISOString()],r);case 4:{const{source:e,flags:t}=r;return i([a,{source:e,flags:t}],r)}case 5:{const t=[],n=i([a,t],r);for(const[i,a]of r)(e||!wb(vb(i))&&!wb(vb(a)))&&t.push([o(i),o(a)]);return n}case 6:{const t=[],n=i([a,t],r);for(const i of r)!e&&wb(vb(i))||t.push(o(i));return n}}const{message:l}=r;return i([a,{name:s,message:l}],r)};return o})(!(t||n),!!t,new Map,r)(e),r},Sb="function"===typeof structuredClone?(e,t)=>t&&("json"in t||"lossy"in t)?gb(kb(e,t)):structuredClone(e):(e,t)=>gb(kb(e,t));function Ab(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(37===o&&zx(e.charCodeAt(n+1))&&zx(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const t=e.charCodeAt(n+1);o<56320&&t>56319&&t<57344?(a=String.fromCharCode(o,t),i=1):a="\ufffd"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function jb(e,t){const n=[{type:"text",value:"\u21a9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Cb(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}const Eb=function(e){if(null===e||void 0===e)return Rb;if("function"===typeof e)return Pb(e);if("object"===typeof e)return Array.isArray(e)?function(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Eb(e[n]);return Pb(r);function r(){let e=-1;for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];for(;++e<t.length;)if(t[e].apply(this,r))return!0;return!1}}(e):function(e){const t=e;return Pb(n);function n(n){const r=n;let i;for(i in e)if(r[i]!==t[i])return!1;return!0}}(e);if("string"===typeof e)return function(e){return Pb(t);function t(t){return t&&t.type===e}}(e);throw new Error("Expected function, string, or object as test")};function Pb(e){return function(t,n,r){return Boolean(Ob(t)&&e.call(this,t,"number"===typeof n?n:void 0,r||void 0))}}function Rb(){return!0}function Ob(e){return null!==e&&"object"===typeof e&&"type"in e}const Tb=[],Mb=!0,zb=!1,Ib="skip";function Lb(e,t,n,r){let i;"function"===typeof t&&"function"!==typeof n?(r=n,n=t):i=t;const o=Eb(i),a=r?-1:1;!function e(i,s,l){const c=i&&"object"===typeof i?i:{};if("string"===typeof c.type){const e="string"===typeof c.tagName?c.tagName:"string"===typeof c.name?c.name:void 0;Object.defineProperty(u,"name",{value:"node ("+i.type+(e?"<"+e+">":"")+")"})}return u;function u(){let c,u,d,p=Tb;if((!t||o(i,s,l[l.length-1]||void 0))&&(p=function(e){if(Array.isArray(e))return e;if("number"===typeof e)return[Mb,e];return null===e||void 0===e?Tb:[e]}(n(i,l)),p[0]===zb))return p;if("children"in i&&i.children){const t=i;if(t.children&&p[0]!==Ib)for(u=(r?t.children.length:-1)+a,d=l.concat(t);u>-1&&u<t.children.length;){const n=t.children[u];if(c=e(n,u,d)(),c[0]===zb)return c;u="number"===typeof c[1]?c[1]:u+a}}return p}}(e,void 0,[])()}function Db(e,t,n,r){let i,o,a;"function"===typeof t&&"function"!==typeof n?(o=void 0,a=t,i=n):(o=t,a=n,i=r),Lb(e,o,(function(e,t){const n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return a(e,r,n)}),i)}function Fb(e,t){const n=t.referenceType;let r="]";if("collapsed"===n?r+="[]":"full"===n&&(r+="["+(t.label||t.identifier)+"]"),"imageReference"===t.type)return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&"text"===o.type?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&"text"===a.type?a.value+=r:i.push({type:"text",value:r}),i}function Nb(e){const t=e.spread;return null===t||void 0===t?e.children.length>1:t}const Bb=9,_b=32;function Ub(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Hb(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Hb(t.slice(i),i>0,!1)),o.join("")}function Hb(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===Bb||t===_b;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===Bb||t===_b;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}const Wb={blockquote:function(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)},break:function(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:"\n"}]},code:function(e,t){const n=t.value?t.value+"\n":"",r={};t.lang&&(r.className=["language-"+t.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i},delete:function(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},emphasis:function(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},footnoteReference:function(e,t){const n="string"===typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Ab(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,s=e.footnoteCounts.get(r);void 0===s?(s=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,s+=1,e.footnoteCounts.set(r,s);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,l);const c={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,c),e.applyData(t,c)},heading:function(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},html:function(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}},imageReference:function(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Fb(e,t);const i={src:Ab(r.url||""),alt:t.alt};null!==r.title&&void 0!==r.title&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)},image:function(e,t){const n={src:Ab(t.url)};null!==t.alt&&void 0!==t.alt&&(n.alt=t.alt),null!==t.title&&void 0!==t.title&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)},inlineCode:function(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)},linkReference:function(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Fb(e,t);const i={href:Ab(r.url||"")};null!==r.title&&void 0!==r.title&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)},link:function(e,t){const n={href:Ab(t.url)};null!==t.title&&void 0!==t.title&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)},listItem:function(e,t,n){const r=e.all(t),i=n?function(e){let t=!1;if("list"===e.type){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Nb(n[r])}return t}(n):Nb(t),o={},a=[];if("boolean"===typeof t.checked){const e=r[0];let n;e&&"element"===e.type&&"p"===e.tagName?n=e:(n={type:"element",tagName:"p",properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:"text",value:" "}),n.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const e=r[s];(i||0!==s||"element"!==e.type||"p"!==e.tagName)&&a.push({type:"text",value:"\n"}),"element"!==e.type||"p"!==e.tagName||i?a.push(e):a.push(...e.children)}const l=r[r.length-1];l&&(i||"element"!==l.type||"p"!==l.tagName)&&a.push({type:"text",value:"\n"});const c={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,c),e.applyData(t,c)},list:function(e,t){const n={},r=e.all(t);let i=-1;for("number"===typeof t.start&&1!==t.start&&(n.start=t.start);++i<r.length;){const e=r[i];if("element"===e.type&&"li"===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)},paragraph:function(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},root:function(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)},strong:function(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},table:function(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const n={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){const r={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},o=Jg(t.children[1]),a=Kg(t.children[t.children.length-1]);o&&a&&(r.position={start:o,end:a}),i.push(r)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)},tableCell:function(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},tableRow:function(e,t,n){const r=n?n.children:void 0,i=0===(r?r.indexOf(t):1)?"th":"td",o=n&&"table"===n.type?n.align:void 0,a=o?o.length:t.children.length;let s=-1;const l=[];for(;++s<a;){const n=t.children[s],r={},a=o?o[s]:void 0;a&&(r.align=a);let c={type:"element",tagName:i,properties:r,children:[]};n&&(c.children=e.all(n),e.patch(n,c),c=e.applyData(n,c)),l.push(c)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(l,!0)};return e.patch(t,c),e.applyData(t,c)},text:function(e,t){const n={type:"text",value:Ub(String(t.value))};return e.patch(t,n),e.applyData(t,n)},thematicBreak:function(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)},toml:qb,yaml:qb,definition:qb,footnoteDefinition:qb};function qb(){}const Gb={}.hasOwnProperty,Vb={};function Kb(e,t){e.position&&(t.position=function(e){const t=Jg(e),n=Kg(e);if(t&&n)return{start:t,end:n}}(e))}function Jb(e,t){let n=t;if(e&&e.data){const t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;if("string"===typeof t)if("element"===n.type)n.tagName=t;else{n={type:"element",tagName:t,properties:{},children:"children"in n?n.children:[n]}}"element"===n.type&&i&&Object.assign(n.properties,Sb(i)),"children"in n&&n.children&&null!==r&&void 0!==r&&(n.children=r)}return n}function Yb(e,t){const n=t.data||{},r=!("value"in t)||Gb.call(n,"hProperties")||Gb.call(n,"hChildren")?{type:"element",tagName:"div",properties:{},children:e.all(t)}:{type:"text",value:t.value};return e.patch(t,r),e.applyData(t,r)}function Qb(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:"\n"});++r<e.length;)r&&n.push({type:"text",value:"\n"}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:"\n"}),n}function Zb(e){let t=0,n=e.charCodeAt(t);for(;9===n||32===n;)t++,n=e.charCodeAt(t);return e.slice(t)}function Xb(e,t){const n=function(e,t){const n=t||Vb,r=new Map,i=new Map,o=new Map,a={...Wb,...n.handlers},s={all:function(e){const t=[];if("children"in e){const n=e.children;let r=-1;for(;++r<n.length;){const i=s.one(n[r],e);if(i){if(r&&"break"===n[r-1].type&&(Array.isArray(i)||"text"!==i.type||(i.value=Zb(i.value)),!Array.isArray(i)&&"element"===i.type)){const e=i.children[0];e&&"text"===e.type&&(e.value=Zb(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t},applyData:Jb,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:function(e,t){const n=e.type,r=s.handlers[n];if(Gb.call(s.handlers,n)&&r)return r(s,e,t);if(s.options.passThrough&&s.options.passThrough.includes(n)){if("children"in e){const{children:t,...n}=e,r=Sb(n);return r.children=s.all(e),r}return Sb(e)}return(s.options.unknownHandler||Yb)(s,e,t)},options:n,patch:Kb,wrap:Qb};return Db(e,(function(e){if("definition"===e.type||"footnoteDefinition"===e.type){const t="definition"===e.type?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}})),s}(e,t),r=n.one(e,void 0),i=function(e){const t="string"===typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||jb,r=e.options.footnoteBackLabel||Cb,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let l=-1;for(;++l<e.footnoteOrder.length;){const i=e.footnoteById.get(e.footnoteOrder[l]);if(!i)continue;const o=e.all(i),a=String(i.identifier).toUpperCase(),c=Ab(a.toLowerCase());let u=0;const d=[],p=e.footnoteCounts.get(a);for(;void 0!==p&&++u<=p;){d.length>0&&d.push({type:"text",value:" "});let e="string"===typeof n?n:n(l,u);"string"===typeof e&&(e={type:"text",value:e}),d.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+c+(u>1?"-"+u:""),dataFootnoteBackref:"",ariaLabel:"string"===typeof r?r:r(l,u),className:["data-footnote-backref"]},children:Array.isArray(e)?e:[e]})}const f=o[o.length-1];if(f&&"element"===f.type&&"p"===f.tagName){const e=f.children[f.children.length-1];e&&"text"===e.type?e.value+=" ":f.children.push({type:"text",value:" "}),f.children.push(...d)}else o.push(...d);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+c},children:e.wrap(o,!0)};e.patch(i,m),s.push(m)}if(0!==s.length)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Sb(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:"\n"}]}}(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:"\n"},i),o}function $b(e,t){return e&&"run"in e?async function(n,r){const i=Xb(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Xb(n,{file:r,...t||e})}}function ev(e){if(e)throw e}var tv=n(3240);function nv(e){if("object"!==typeof e||null===e)return!1;const t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function rv(){const e=[],t={run:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];let i=-1;const o=n.pop();if("function"!==typeof o)throw new TypeError("Expected function as last argument, not "+o);!function t(r){const a=e[++i];let s=-1;if(r)o(r);else{for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];for(;++s<n.length;)null!==c[s]&&void 0!==c[s]||(c[s]=n[s]);n=c,a?function(e,t){let n;return i;function i(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];const l=e.length>i.length;let c;l&&i.push(o);try{c=e.apply(this,i)}catch(r){if(l&&n)throw r;return o(r)}l||(c&&c.then&&"function"===typeof c.then?c.then(a,o):c instanceof Error?o(c):a(c))}function o(e){if(!n){n=!0;for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];t(e,...i)}}function a(e){o(null,e)}}(a,t)(...c):o(null,...c)}}(null,...n)},use:function(n){if("function"!==typeof n)throw new TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}};return t}const iv={basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');ov(e);let n,r=0,i=-1,o=e.length;if(void 0===t||0===t.length||t.length>e.length){for(;o--;)if(47===e.codePointAt(o)){if(n){r=o+1;break}}else i<0&&(n=!0,i=o+1);return i<0?"":e.slice(r,i)}if(t===e)return"";let a=-1,s=t.length-1;for(;o--;)if(47===e.codePointAt(o)){if(n){r=o+1;break}}else a<0&&(n=!0,a=o+1),s>-1&&(e.codePointAt(o)===t.codePointAt(s--)?s<0&&(i=o):(s=-1,i=a));r===i?i=a:i<0&&(i=e.length);return e.slice(r,i)},dirname:function(e){if(ov(e),0===e.length)return".";let t,n=-1,r=e.length;for(;--r;)if(47===e.codePointAt(r)){if(t){n=r;break}}else t||(t=!0);return n<0?47===e.codePointAt(0)?"/":".":1===n&&47===e.codePointAt(0)?"//":e.slice(0,n)},extname:function(e){ov(e);let t,n=e.length,r=-1,i=0,o=-1,a=0;for(;n--;){const s=e.codePointAt(n);if(47!==s)r<0&&(t=!0,r=n+1),46===s?o<0?o=n:1!==a&&(a=1):o>-1&&(a=-1);else if(t){i=n+1;break}}if(o<0||r<0||0===a||1===a&&o===r-1&&o===i+1)return"";return e.slice(o,r)},join:function(){let e,t=-1;for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];for(;++t<r.length;)ov(r[t]),r[t]&&(e=void 0===e?r[t]:e+"/"+r[t]);return void 0===e?".":function(e){ov(e);const t=47===e.codePointAt(0);let n=function(e,t){let n,r,i="",o=0,a=-1,s=0,l=-1;for(;++l<=e.length;){if(l<e.length)n=e.codePointAt(l);else{if(47===n)break;n=47}if(47===n){if(a===l-1||1===s);else if(a!==l-1&&2===s){if(i.length<2||2!==o||46!==i.codePointAt(i.length-1)||46!==i.codePointAt(i.length-2))if(i.length>2){if(r=i.lastIndexOf("/"),r!==i.length-1){r<0?(i="",o=0):(i=i.slice(0,r),o=i.length-1-i.lastIndexOf("/")),a=l,s=0;continue}}else if(i.length>0){i="",o=0,a=l,s=0;continue}t&&(i=i.length>0?i+"/..":"..",o=2)}else i.length>0?i+="/"+e.slice(a+1,l):i=e.slice(a+1,l),o=l-a-1;a=l,s=0}else 46===n&&s>-1?s++:s=-1}return i}(e,!t);0!==n.length||t||(n=".");n.length>0&&47===e.codePointAt(e.length-1)&&(n+="/");return t?"/"+n:n}(e)},sep:"/"};function ov(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const av={cwd:function(){return"/"}};function sv(e){return Boolean(null!==e&&"object"===typeof e&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&void 0===e.auth)}function lv(e){if("string"===typeof e)e=new URL(e);else if(!sv(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if("file:"!==e.protocol){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return function(e){if(""!==e.hostname){const e=new TypeError('File URL host must be "localhost" or empty on darwin');throw e.code="ERR_INVALID_FILE_URL_HOST",e}const t=e.pathname;let n=-1;for(;++n<t.length;)if(37===t.codePointAt(n)&&50===t.codePointAt(n+1)){const e=t.codePointAt(n+2);if(70===e||102===e){const e=new TypeError("File URL path must not include encoded / characters");throw e.code="ERR_INVALID_FILE_URL_PATH",e}}return decodeURIComponent(t)}(e)}const cv=["history","path","basename","stem","extname","dirname"];class uv{constructor(e){let t;t=e?sv(e)?{path:e}:"string"===typeof e||function(e){return Boolean(e&&"object"===typeof e&&"byteLength"in e&&"byteOffset"in e)}(e)?{value:e}:e:{},this.cwd="cwd"in t?"":av.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n,r=-1;for(;++r<cv.length;){const e=cv[r];e in t&&void 0!==t[e]&&null!==t[e]&&(this[e]="history"===e?[...t[e]]:t[e])}for(n in t)cv.includes(n)||(this[n]=t[n])}get basename(){return"string"===typeof this.path?iv.basename(this.path):void 0}set basename(e){pv(e,"basename"),dv(e,"basename"),this.path=iv.join(this.dirname||"",e)}get dirname(){return"string"===typeof this.path?iv.dirname(this.path):void 0}set dirname(e){fv(this.basename,"dirname"),this.path=iv.join(e||"",this.basename)}get extname(){return"string"===typeof this.path?iv.extname(this.path):void 0}set extname(e){if(dv(e,"extname"),fv(this.dirname,"extname"),e){if(46!==e.codePointAt(0))throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=iv.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){sv(e)&&(e=lv(e)),pv(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return"string"===typeof this.path?iv.basename(this.path,this.extname):void 0}set stem(e){pv(e,"stem"),dv(e,"stem"),this.path=iv.join(this.dirname||"",e+(this.extname||""))}fail(e,t,n){const r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){const r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){const r=new ex(e,t,n);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){if(void 0===this.value)return"";if("string"===typeof this.value)return this.value;return new TextDecoder(e||void 0).decode(this.value)}}function dv(e,t){if(e&&e.includes(iv.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+iv.sep+"`")}function pv(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function fv(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}const mv=function(e){const t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r},hv={}.hasOwnProperty;class gv extends mv{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=rv()}copy(){const e=new gv;let t=-1;for(;++t<this.attachers.length;){const n=this.attachers[t];e.use(...n)}return e.data(tv(!0,{},this.namespace)),e}data(e,t){return"string"===typeof e?2===arguments.length?(vv("data",this.frozen),this.namespace[e]=t,this):hv.call(this.namespace,e)&&this.namespace[e]||void 0:e?(vv("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...n]=this.attachers[this.freezeIndex];if(!1===n[0])continue;!0===n[0]&&(n[0]=void 0);const r=t.call(e,...n);"function"===typeof r&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=Sv(e),n=this.parser||this.Parser;return yv("parse",n),n(String(t),t)}process(e,t){const n=this;return this.freeze(),yv("process",this.parser||this.Parser),bv("process",this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){const o=Sv(e),a=n.parse(o);function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}n.run(a,o,(function(e,t,r){if(e||!t||!r)return s(e);const i=t,o=n.stringify(i,r);var a;"string"===typeof(a=o)||function(e){return Boolean(e&&"object"===typeof e&&"byteLength"in e&&"byteOffset"in e)}(a)?r.value=o:r.result=o,s(e,r)}))}}processSync(e){let t,n=!1;return this.freeze(),yv("processSync",this.parser||this.Parser),bv("processSync",this.compiler||this.Compiler),this.process(e,(function(e,r){n=!0,ev(e),t=r})),kv("processSync","process",n),t}run(e,t,n){wv(e),this.freeze();const r=this.transformers;return n||"function"!==typeof t||(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,o){const a=Sv(t);r.run(e,a,(function(t,r,a){const s=r||e;t?o(t):i?i(s):n(void 0,s,a)}))}}runSync(e,t){let n,r=!1;return this.run(e,t,(function(e,t){ev(e),n=t,r=!0})),kv("runSync","run",r),n}stringify(e,t){this.freeze();const n=Sv(t),r=this.compiler||this.Compiler;return bv("stringify",r),wv(e),r(e,n)}use(e){const t=this.attachers,n=this.namespace;if(vv("use",this.frozen),null===e||void 0===e);else if("function"===typeof e){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];c(e,i)}else{if("object"!==typeof e)throw new TypeError("Expected usable value, not `"+e+"`");Array.isArray(e)?l(e):s(e)}return this;function a(e){if("function"===typeof e)c(e,[]);else{if("object"!==typeof e)throw new TypeError("Expected usable value, not `"+e+"`");if(Array.isArray(e)){const[t,...n]=e;c(t,n)}else s(e)}}function s(e){if(!("plugins"in e)&&!("settings"in e))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(e.plugins),e.settings&&(n.settings=tv(!0,n.settings,e.settings))}function l(e){let t=-1;if(null===e||void 0===e);else{if(!Array.isArray(e))throw new TypeError("Expected a list of plugins, not `"+e+"`");for(;++t<e.length;){a(e[t])}}}function c(e,n){let r=-1,i=-1;for(;++r<t.length;)if(t[r][0]===e){i=r;break}if(-1===i)t.push([e,...n]);else if(n.length>0){let[r,...o]=n;const a=t[i][1];nv(a)&&nv(r)&&(r=tv(!0,a,r)),t[i]=[e,r,...o]}}}}const xv=(new gv).freeze();function yv(e,t){if("function"!==typeof t)throw new TypeError("Cannot `"+e+"` without `parser`")}function bv(e,t){if("function"!==typeof t)throw new TypeError("Cannot `"+e+"` without `compiler`")}function vv(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function wv(e){if(!nv(e)||"string"!==typeof e.type)throw new TypeError("Expected node, got `"+e+"`")}function kv(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Sv(e){return function(e){return Boolean(e&&"object"===typeof e&&"message"in e&&"messages"in e)}(e)?e:new uv(e)}const Av=[],jv={allowDangerousHtml:!0},Cv=/^(https?|ircs?|mailto|xmpp)$/i,Ev=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Pv(e){const t=e.allowedElements,n=e.allowElement,r=e.children||"",i=e.className,o=e.components,a=e.disallowedElements,s=e.rehypePlugins||Av,l=e.remarkPlugins||Av,c=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...jv}:jv,u=e.skipHtml,d=e.unwrapDisallowed,p=e.urlTransform||Rv,f=xv().use(mb).use(l).use($b,c).use(s),m=new uv;"string"===typeof r&&(m.value=r);for(const g of Ev)Object.hasOwn(e,g.from)&&(g.from,g.to&&g.to,g.id);const h=f.parse(m);let x=f.runSync(h,m);return i&&(x={type:"element",tagName:"div",properties:{className:i},children:"root"===x.type?x.children:[x]}),Db(x,(function(e,r,i){if("raw"===e.type&&i&&"number"===typeof r)return u?i.children.splice(r,1):i.children[r]={type:"text",value:e.value},r;if("element"===e.type){let t;for(t in bx)if(Object.hasOwn(bx,t)&&Object.hasOwn(e.properties,t)){const n=e.properties[t],r=bx[t];(null===r||r.includes(e.tagName))&&(e.properties[t]=p(String(n||""),t,e))}}if("element"===e.type){let o=t?!t.includes(e.tagName):!!a&&a.includes(e.tagName);if(!o&&n&&"number"===typeof r&&(o=!n(e,r,i)),o&&i&&"number"===typeof r)return d&&e.children?i.children.splice(r,1,...e.children):i.children.splice(r,1),r}})),lx(x,{Fragment:g.Fragment,components:o,ignoreInvalidStyle:!0,jsx:g.jsx,jsxs:g.jsxs,passKeys:!0,passNode:!0})}function Rv(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t<0||i>-1&&t>i||n>-1&&t>n||r>-1&&t>r||Cv.test(e.slice(0,t))?e:""}var Ov=n(3557);n.p;const Tv=so.div`
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
`,Mv=so.div`
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
`,zv=so.div`
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
`,Iv=so.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow-y: auto;
  background-color: #f7fafc;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    padding: 12px; /* Reduce padding */
  }
`,Lv=so.div`
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
`,Dv=so.div`
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
`,Fv=so.form`
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
`,Nv=so.input`
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
`,Bv=so.button`
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
`,_v=so.div`
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
`,Uv=so.button`
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
`;const Hv=function(e){const[t,n]=(0,i.useState)([]),[r,o]=(0,i.useState)(""),[a,s]=(0,i.useState)(!1),[l,c]=(0,i.useState)(!1),u=async e=>{if(e&&e.preventDefault(),""===r.trim())return;const i=[...t,{text:r,isBot:!1}];n(i),o(""),s(!0);try{var a,l,c,u;const e=(null===(a=(await Wc.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDE0Ru86HvsWQ-bD7pbdDB7o3NIrFbMCbA",{contents:[{parts:[{text:r}]}]})).data)||void 0===a||null===(l=a.candidates[0])||void 0===l||null===(c=l.content)||void 0===c||null===(u=c.parts[0])||void 0===u?void 0:u.text)||"Sorry, I didn't understand that.";n([...i,{text:e,isBot:!0}])}catch(d){console.error("Error fetching the bot response:",d),n([...i,{text:"Sorry, something went wrong.",isBot:!0}])}s(!1)},d=e=>{c(!0),o(e)};(0,i.useEffect)((()=>{l&&(c(!1),u())}),[r]);const p=window.innerWidth<=768;return(0,g.jsx)(Ov.Ay,{className:"custom-pane-class",overlayClassName:"custom-overlay-class",isOpen:!0,hideHeader:!0,from:"right",width:p?"100%":"39%",children:(0,g.jsxs)(Tv,{children:[(0,g.jsxs)(Mv,{children:[(0,g.jsx)(zv,{children:"AW"}),(0,g.jsx)("span",{children:"ATOMWALK-AI"}),(0,g.jsx)("button",{onClick:()=>{e.setOpenslide(!1)},style:{background:"none",border:"none",color:"#ffffff",cursor:"pointer"},children:"X"})]}),(0,g.jsxs)(Iv,{children:[t.map(((e,t)=>(0,g.jsx)(Dv,{isBot:e.isBot,children:(0,g.jsx)(Pv,{children:e.text})},t))),a&&(0,g.jsx)(Dv,{isBot:!0,children:"Generating..."}),0==t.length&&(0,g.jsx)(Lv,{children:"Hii how can i help you\ud83d\udc81\u200d\u2640\ufe0f"})]}),(0,g.jsxs)(_v,{children:[(0,g.jsx)(Uv,{onClick:()=>d("What is Manufacturing ERP ?"),children:"What is Manufacturing ERP ?"}),(0,g.jsx)(Uv,{onClick:()=>d("Why Business need Manufacturing ERP ?"),children:"Why Business need Manufacturing ERP ?"}),(0,g.jsx)(Uv,{onClick:()=>d("Whene is the Right Time to Implement Manufacturing ERP ?"),children:"Whene is the Right Time to Implement Manufacturing ERP ?"}),(0,g.jsx)(Uv,{onClick:()=>d("How Atomwalk office support Manufacturing ERP ?"),children:"How Atomwalk office support Manufacturing ERP ?"}),(0,g.jsx)(Uv,{onClick:()=>d("What is CRM"),children:"What is CRM"})]}),(0,g.jsxs)(Fv,{children:[(0,g.jsx)(Nv,{value:r,onChange:e=>o(e.target.value),placeholder:"Type your message..."}),(0,g.jsx)(Bv,{type:"submit",disabled:a,onClick:u,children:"\u27a4"})]})]})})},Wv=n.p+"static/media/chatbot-icon-removebg-preview.39103f1381dfcfdca93f.png",qv=so.a`
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
`,Gv=so.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function Vv(e){return(0,g.jsx)(qv,{onClick:()=>{e.setOpenslide(!0)},children:(0,g.jsx)(Gv,{src:Wv,alt:"Floating Icon"})})}const Kv=n.p+"static/media/Backgroundyellow.724b6926d561bc062e5d.jpg",Jv=so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, rgb(237, 245, 255), #ffffff);
  background-image: url(${Kv});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`,Yv=so.div`
  background-color: #e1fff6;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: 20px;
  margin-top: 100px;
`,Qv=so.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
`,Zv=so.p`
  font-size: 1rem;
  color: #777777;
  text-align: center;
  margin-bottom: 30px;
`,Xv=so.form`
  display: flex;
  flex-direction: column;
  color: #454545;
`,$v=so.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,ew=so.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,tw=so.select`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,nw=so.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap:10px;
`,rw=so.label`
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333333;
`,iw=so.button`
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
`,ow=()=>{let e=new Date;const t={name:"",company_name:"",task_name:"Book My Demo",mobile_number:"",email_id:"",add_task:"N",task_type:"Book My Demo",task_date:`${("0"+e.getDate()).slice(-2)}-${("0"+(e.getMonth()+1)).slice(-2)}-${e.getFullYear()}`,remarks:""},[n,r]=(0,i.useState)(t),[o,a]=(0,i.useState)(!1),[s,l]=(0,i.useState)([]),[c,u]=(0,i.useState)(""),[d,p]=(0,i.useState)(""),f=(e,t)=>{r({...n,[e]:t})},m=async(e,n)=>{try{let i=localStorage.getItem("apiResponse"),o=JSON.parse(i);if(!i)throw new Error("Token not found, please login.");const s=Wc.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${o.key}`}});200==(await s.post(e,n)).status&&(r(t),a(!0))}catch(i){console.log("Error making authenticated API call:",i),r(t)}};(0,i.useEffect)((()=>{o&&setTimeout((()=>{a(!1),window.location.href="/demo.html"}),3e3)}),[o]);const h=e=>{const{value:t,checked:i}=e.target,o=i?[...s,t]:s.filter((e=>e!==t));l(o),r({...n,remarks:`${d}\nNumber of Employees: ${c}\nRequirements: ${o.join(", ")}`})};return(0,g.jsxs)(g.Fragment,{children:[o&&(0,g.jsx)(wd,{message:"We have successfully recorded your information."}),(0,g.jsx)(Jv,{children:(0,g.jsxs)(Yv,{children:[(0,g.jsx)(Qv,{children:"We are a call away!"}),(0,g.jsx)(Zv,{children:"Discuss Pricing, take a Demo or share your business problems."}),(0,g.jsxs)(Xv,{children:[(0,g.jsx)($v,{onChange:e=>f("name",e.target.value),type:"text",placeholder:"Full Name"}),(0,g.jsx)($v,{onChange:e=>f("mobile_number",e.target.value),type:"tel",placeholder:"Phone"}),(0,g.jsx)($v,{onChange:e=>f("email_id",e.target.value),type:"email",placeholder:"Work Email*",required:!0}),(0,g.jsx)($v,{onChange:e=>f("company_name",e.target.value),type:"text",placeholder:"Company Name"}),(0,g.jsxs)(nw,{children:[(0,g.jsx)(rw,{children:"Please select your requirement(s):"}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Payroll",onChange:h})," Payroll"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Core HR",onChange:h})," Core HR"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Attendance Management",onChange:h})," Attendance Management"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Leave Management",onChange:h})," Leave Management"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Performance Management System",onChange:h})," Performance Management System"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Geo-Tagging",onChange:h})," Geo-Tagging"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Recruitment",onChange:h})," Recruitment"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Employee Self Service",onChange:h})," Employee Self Service"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Employee Engagement",onChange:h})," Employee Engagement"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Others",onChange:h})," Others"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"All",onChange:h})," All"]})]}),(0,g.jsx)(ew,{onChange:e=>{const t=e.target.value;p(t),r({...n,remarks:`${t}\nNumber of Employees: ${c}\nRequirements: ${s.join(", ")}`})},rows:"4",placeholder:"Are you currently using any HR tools? (Optional)"}),(0,g.jsxs)(tw,{onChange:e=>{const t=e.target.value;u(t),r({...n,remarks:`${d}\nNumber of Employees: ${t}\nRequirements: ${s.join(", ")}`})},children:[(0,g.jsx)("option",{value:"",children:"Number of Employees"}),(0,g.jsx)("option",{value:"1-10",children:"1-10"}),(0,g.jsx)("option",{value:"11-50",children:"11-50"}),(0,g.jsx)("option",{value:"51-200",children:"51-200"}),(0,g.jsx)("option",{value:"201-500",children:"201-500"}),(0,g.jsx)("option",{value:"500+",children:"500+"})]}),(0,g.jsx)(iw,{onClick:e=>(e.preventDefault(),m("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:n})),children:"Book Meeting"})]})]})})]})};var aw=n(1094);const sw=n.p+"static/media/pricingelusrtion.f9102968b3ab2d7f7123.png",lw=(n.p,n.p,so.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
`,so.table`
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
`,so.span`
  color: green;
`,so.span`
  color: red;
`,so.span`
  color: #333;
  font-size: 0.85rem;
`,so.span`
  cursor: pointer;
  user-select: none;
  font-size: 1.2rem;
`,so.th`
  background-color: #f3e6f9;
  position: sticky;
  top: 0;
  z-index: 10;
`,so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #caf0f8;
`),cw=so.h1`
  font-size: 3.2em;
  margin-bottom: 100px;
  text-align: center;
  color: #2c3e50;
`,uw=(so.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
`,so.div`
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
`),dw=so.div`
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
`,pw=so.h2`
  font-size: 2em;
  margin: 20px 0;
  font-weight: 800;
  color: #000933;
`,fw=so.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`,mw=so.li`
  margin: 10px 0;
  cursor: ${e=>e.clickable?"pointer":"default"};
  &::before {
    content: "${e=>e.valid?"\u2713":"\u2717"}";
    margin-right: 10px;
    color: ${e=>e.valid?"green":"red"};
  }
`,hw=so.div`
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
`,gw=so.p`
  font-weight: 500;
`,xw=so.button`
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
`,yw=so.div`
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
`,bw=so.div`
  font-size: 1.1em;
`,vw=so.button`
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
`,ww=so.span`
  font-size: 1.5em;
  color: #454545;
  cursor: pointer;
`,kw=so.ul`
  list-style-type: none;
  margin-top: 10px;
  padding-left: 20px;
  color: #6b37d1;
`,Sw={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px",padding:"40px",overflow:"auto",maxHeight:"80vh"},overlay:{zIndex:"32333"}},Aw=[{name:"Customer Management( CRM)",features:["Customer Details","Customer Sales/Payments Tracking (Bank/TDS)","Agreements","Customer Type/ Group"]}],jw=()=>{const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(null),o=()=>t(!0),a=()=>t(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(lw,{children:[(0,g.jsx)(cw,{children:"Pick the Right CRM Plan to Elevate Your Processes!"}),(0,g.jsxs)(uw,{children:[(0,g.jsxs)(dw,{children:[(0,g.jsx)("h3",{style:{color:"#ffff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"red",borderRadius:"5px"},children:"Free Trial"}),(0,g.jsx)(pw,{children:"\u20b90/Month"}),(0,g.jsx)(gw,{children:"Seriously, free forever"}),(0,g.jsxs)(fw,{children:[(0,g.jsx)(mw,{valid:!0,children:"3 User Access"}),(0,g.jsx)(mw,{valid:!0,children:"30 days Vallidity"}),(0,g.jsx)(mw,{valid:!0,children:"20MB Space"}),(0,g.jsx)(mw,{children:"Multi Branch Access"}),(0,g.jsx)(hw,{onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(xw,{children:"Sign up for free"})]}),(0,g.jsxs)(dw,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#2196f3",borderRadius:"5px"},children:"Basic"}),(0,g.jsx)(pw,{children:"\u20b95,000/Month"}),(0,g.jsx)(gw,{children:"Billed at \u20b950,000 per year"}),(0,g.jsxs)(fw,{children:[(0,g.jsx)(mw,{valid:!0,children:"5 User Access"}),(0,g.jsx)(mw,{valid:!0,children:"1 Year Validity"}),(0,g.jsx)(mw,{valid:!0,children:"200MB Space"}),(0,g.jsx)(mw,{children:"Multi Branch Access"}),(0,g.jsx)(hw,{onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(xw,{children:"Start a free trial"})]}),(0,g.jsxs)(dw,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"orange",borderRadius:"5px"},children:"Premium"}),(0,g.jsx)(pw,{children:"\u20b98,000/Month"}),(0,g.jsx)(gw,{children:"Billed at \u20b975,000 per year"}),(0,g.jsxs)(fw,{children:[(0,g.jsx)(mw,{valid:!0,children:"10 User Access"}),(0,g.jsx)(mw,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(mw,{valid:!0,children:"500MB Space"}),(0,g.jsx)(mw,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)(hw,{lickable:!0,onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(xw,{children:"Start a free trial"})]}),(0,g.jsxs)(dw,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#800080",borderRadius:"5px"},children:"Ultimate"}),(0,g.jsx)(pw,{children:"\u20b915,000/Month"}),(0,g.jsx)(gw,{children:"Billed at \u20b9150,000 per year"}),(0,g.jsxs)(fw,{children:[(0,g.jsx)(mw,{valid:!0,children:"25 User Access"}),(0,g.jsx)(mw,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(mw,{valid:!0,children:"1.2GB Space"}),(0,g.jsx)(mw,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)(hw,{lickable:!0,onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(xw,{children:"Start a free trial"})]})]})]}),(0,g.jsxs)(os(),{isOpen:e,onRequestClose:a,style:Sw,children:[(0,g.jsx)(vw,{onClick:a,children:"\xd7"}),(0,g.jsx)(fw,{children:Aw.map(((e,t)=>(0,g.jsxs)("div",{children:[(0,g.jsxs)(yw,{onClick:()=>{return t=e.name,void r(n===t?null:t);var t},children:[(0,g.jsx)(bw,{children:e.name}),(0,g.jsx)(ww,{children:n===e.name?"\u2212":"+"})]}),n===e.name&&(0,g.jsx)(kw,{children:e.features.map(((e,t)=>(0,g.jsx)("ul",{style:{marginBottom:"5px"},children:(0,g.jsx)("li",{children:e},t)})))})]},t)))})]})]})},Cw=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #caf0f8;
`,Ew=so.h1`
  font-size: 3.2em;
  margin-bottom: 100px;
  text-align: center;
  color: #2c3e50;
`,Pw=(so.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
`,so.div`
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
`),Rw=so.div`
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
`,Ow=so.h2`
  font-size: 2em;
  margin: 20px 0;
  font-weight: 800;
  color: #000933;
`,Tw=so.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`,Mw=so.li`
  margin: 10px 0;
  cursor: ${e=>e.clickable?"pointer":"default"};
  &::before {
    content: "${e=>e.valid?"\u2713":"\u2717"}";
    margin-right: 10px;
    color: ${e=>e.valid?"green":"red"};
  }
`,zw=so.div`
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
`,Iw=so.p`
  font-weight: 500;
`,Lw=so.button`
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
`,Dw=so.div`
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
`,Fw=so.div`
  font-size: 1.1em;
`,Nw=so.button`
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
`,Bw=so.span`
  font-size: 1.5em;
  color: #454545;
  cursor: pointer;
`,_w=so.ul`
  list-style-type: none;
  margin-top: 10px;
  padding-left: 20px;
  color: #6b37d1;
`,Uw={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px",padding:"40px",overflow:"auto",maxHeight:"80vh"},overlay:{zIndex:"32333"}},Hw=[{name:"HR & Payroll",features:["Employee Hire to Exit","Leave & Attendance","Travel & Expenses","Salary & Payroll","Advances","Claim Settlement"]}],Ww=()=>{const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(null),o=()=>t(!0),a=()=>t(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Cw,{children:[(0,g.jsx)(Ew,{children:"Choose the Perfect HRM Plan to Empower Your People!"}),(0,g.jsxs)(Pw,{children:[(0,g.jsxs)(Rw,{children:[(0,g.jsx)("h3",{style:{color:"#ffff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"red",borderRadius:"5px"},children:"Free Trial"}),(0,g.jsx)(Ow,{children:"\u20b90/Annum"}),(0,g.jsx)(Iw,{children:"Seriously, free forever"}),(0,g.jsxs)(Tw,{children:[(0,g.jsx)(Mw,{valid:!0,children:"3 User Access"}),(0,g.jsx)(Mw,{valid:!0,children:"30 days Vallidity"}),(0,g.jsx)(Mw,{valid:!0,children:"20MB Space"}),(0,g.jsx)(Mw,{children:"Multi Branch Access"}),(0,g.jsx)(zw,{onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Lw,{children:"Sign up for free"})]}),(0,g.jsxs)(Rw,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#2196f3",borderRadius:"5px"},children:"Basic"}),(0,g.jsx)(Ow,{children:"\u20b945,000/Annum"}),(0,g.jsx)(Iw,{children:"Billed at \u20b9150/month/user"}),(0,g.jsxs)(Tw,{children:[(0,g.jsx)(Mw,{valid:!0,children:"25 User Access"}),(0,g.jsx)(Mw,{valid:!0,children:"1 Year Validity"}),(0,g.jsx)(Mw,{valid:!0,children:"200MB Space"}),(0,g.jsx)(Mw,{children:"Multi Branch Access"}),(0,g.jsx)(zw,{onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Lw,{children:"Start a free trial"})]}),(0,g.jsxs)(Rw,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"orange",borderRadius:"5px"},children:"Premium"}),(0,g.jsx)(Ow,{children:"\u20b975,000/Annum"}),(0,g.jsx)(Iw,{children:"Billed at \u20b9125/month/userr"}),(0,g.jsxs)(Tw,{children:[(0,g.jsx)(Mw,{valid:!0,children:"50 User Access"}),(0,g.jsx)(Mw,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(Mw,{valid:!0,children:"500MB Space"}),(0,g.jsx)(Mw,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)(zw,{lickable:!0,onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Lw,{children:"Start a free trial"})]}),(0,g.jsxs)(Rw,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#800080",borderRadius:"5px"},children:"Ultimate"}),(0,g.jsx)(Ow,{children:"\u20b91,20,000/Annum"}),(0,g.jsx)(Iw,{children:"Billed at \u20b9100/month/user"}),(0,g.jsxs)(Tw,{children:[(0,g.jsx)(Mw,{valid:!0,children:"100 User Access"}),(0,g.jsx)(Mw,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(Mw,{valid:!0,children:"1.2GB Space"}),(0,g.jsx)(Mw,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)(zw,{lickable:!0,onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Lw,{children:"Start a free trial"})]})]})]}),(0,g.jsxs)(os(),{isOpen:e,onRequestClose:a,style:Uw,children:[(0,g.jsx)(Nw,{onClick:a,children:"\xd7"}),(0,g.jsx)(Tw,{children:Hw.map(((e,t)=>(0,g.jsxs)("div",{children:[(0,g.jsxs)(Dw,{onClick:()=>{return t=e.name,void r(n===t?null:t);var t},children:[(0,g.jsx)(Fw,{children:e.name}),(0,g.jsx)(Bw,{children:n===e.name?"\u2212":"+"})]}),n===e.name&&(0,g.jsx)(_w,{children:e.features.map(((e,t)=>(0,g.jsx)("ul",{style:{marginBottom:"5px"},children:(0,g.jsx)("li",{children:e},t)})))})]},t)))})]})]})},qw=so.div`
  background-color: white;
  color: blue;
  width: 100%;
  /* padding-top: 10px; */
  padding-bottom: 10px;
  /* height: 1472px; */
`,Gw=so.div`
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
`,Vw=so.div`
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
`,Kw=so.div`
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
`,Jw=so.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 600;
  line-height: 61.2px;
  margin: 0px 0px 16px;
`,Yw=so.p`
  color: #1c1b1f;
  width: 73%;
  font-size: 21px;
  word-wrap: normal;
  margin: 0px 0px 24px;
  @media (max-width: 768px) {
    width: 100%;
  }
`,Qw=so.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 60%;
  line-height: 26px;
  padding: 44px 0px 0px;
`,Zw=so.button`
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
`,Xw=so.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`,$w=so.div`
  line-height: 26px;
  img {
    width: 120%;
    height: auto;
    border-radius: 15px;
  }
  @media (max-width:768px) {
    display: none;
  }
`,ek=(so.div`
  line-height: 26px;
  margin: 144px 0px;
  width: 100%;
  /* margin-top: 180px; */
  @media (max-width:768px) {
    margin-top: 70px;
  }
`,so.h2`
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
`,so.span`
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
`,so.div`
  color: #1c1b1f;
  line-height: 24px;
  margin: 0px 417.788px 48px 417.775px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0px ;
  }
`,so.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 30px;
  max-height: 600px;
  overflow-y: auto;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 10px;
`,so.table`
  width: 100%;
  border-collapse: collapse;
  position: relative;
`,so.th`
  background-color: #FCE6FF;
  color: #1c1b1f;
  padding: 50px 20px;
  font-size: larger;
  text-align: center;
  border: 2px solid #8900c4;
  position: sticky;
  top: 0;
  z-index: 2;
`,so.td`
  padding: 20px;
  text-align: left;
  border: 1px solid #ddd;
`,()=>{const e=(0,i.useMemo)((()=>[{modulePlane:"Number of Employees",starter:"Limited",essential:"Unlimited",growth:"Unlimited",enterprise:"Unlimited"},{modulePlane:"Cost Per Additional Employee",starter:"Not Applicable",essential:"\u20b930/ month",growth:"\u20b960/ month",enterprise:"\u20b9100/ month"},{modulePlane:"Core HR",starter:"Limited",essential:"\u2713",growth:"\u2713",enterprise:"\u2713"}]),[]),t=so.div`
color: #454545;
font-size: 15px;
margin-bottom: 5px;
`,n=(0,i.useMemo)((()=>[{Header:"Modules and Features",accessor:"modulePlane"},{Header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Starter"}),(0,g.jsx)("div",{children:"\u20b9 0 / month"}),(0,g.jsx)(t,{children:"(Includes 25 Employees)"}),(0,g.jsx)(Zw,{children:"Start Free Trial"})]}),accessor:"starter"},{Header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Essential"}),(0,g.jsx)("div",{children:"\u20b9 3495 / month"}),(0,g.jsx)(t,{children:"(Includes 50 Employees)"}),(0,g.jsx)(Zw,{children:"Start Free Trial"})]}),accessor:"essential"},{Header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Growth"}),(0,g.jsx)("div",{children:"\u20b9 5495 / month"}),(0,g.jsx)(t,{children:"(Includes 50 Employees)"}),(0,g.jsx)(Zw,{children:"Start Free Trial"})]}),accessor:"growth"},{Header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Enterprise"}),(0,g.jsx)("div",{children:"\u20b9 7495 / month"}),(0,g.jsx)(t,{children:"(Includes 50 Employees)"}),(0,g.jsx)(Zw,{children:"Start Free Trial"})]}),accessor:"enterprise"}]),[]),{getTableProps:r,getTableBodyProps:o,headerGroups:a,rows:s,prepareRow:l}=(0,aw.useTable)({columns:n,data:e});so.div`
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
`,so.div`
  display: flex;
  flex-direction: column;
  line-height: 26px;
  width: 50%;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    width: 100%; /* Take full width on mobile */
  }
`,so.div`
  display: flex;
  flex-direction: column;
  line-height: 26px;
  width: 50%;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    width: 100%; /* Take full width on mobile */
  }
`,so.div`
  line-height: 26px;
  margin: 0px 0px 48px;
  `,so.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 38px;
  font-weight: 600;
  line-height: 45.6px;
  margin: 0px 0px 32px;
  @media (max-width: 768px) {
    text-align: center;
  }
  `,so.h5`
  color: #8900c4;
  font-family: Centra;
  font-size: 21.008px;
  font-weight: 600;
  line-height: 24px;
  `,so.h6`
  color: #1c1b1f;
font-family: Centra;
font-weight: 600;
line-height: 19.2px;
  `,so.span`
  color: #1c1b1f;
  font-weight: normal;
  font-size: 17px;
  font-weight: 500;
  line-height: 18px;
  `,so.span`
  color: #1c1b1f;
font-size: 21.008px;
line-height: 31.504px;
@media (max-width: 768px) {
  text-align: center;
    display: flex;
    align-items: center;
}
  `,so.div`
  background-color: #eefaf4;
  border-radius: 16px;
  line-height: 26px;
  margin: 0px 0px 12px;
  padding: 24px 32px;
  `,so.div`
  background-color: #fff8e6;
  border-radius: 16px;
  line-height: 26px;
  margin: 0px 0px 12px;
  padding: 24px 32px;
  `,so.div`
  background-color: #e6ffff;
  border-radius: 16px;
  line-height: 26px;
  margin: 0px 0px 12px;
  padding: 24px 32px;
  `,so.div`
  background-color: #fce6ff;
  border-radius: 16px 16px 0px 0px;
  line-height: 26px;
  padding: 24px 32px;
  `,so.div`
    border-color: #e8e8e9;
    border-radius: 0px 0px 16px 16px;
    border-style: solid;
    border-width: 0.8px;
    line-height: 26px;
    padding: 36px 158px 36px 48px;
  `,so.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    line-height: 26px;
  `,so.div`
    display: flex;
    line-height: 26px;
  `,so.div`
    background-color: #76d3a8;
    border-radius: 50%;
    display: flex;
    line-height: 26px;
    margin: 8px 8px 0px 0px;
    width: 10px;
    height: 10px;
  `,so.li`
    display: list-item;
    line-height: 26px;
    list-style: none;
    text-align: left;
  `,so.div`
  align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
line-height: 26px;
margin: 144px 71.04px;
  `,so.div`
  align-items: center;
display: flex;
flex-wrap: wrap;
gap: 16px;
justify-content: center;
line-height: 26px;
  `,so.div`
    background-color: #eefaf4;
    border-radius: 20px;
    line-height: 26px;
  `,so.div`
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 26px;
  margin: 24px 0px;
  `,so.h3`
    color: #1c1b1f;
    font-family: Centra;
    font-size: 28px;
    font-weight: 500;
    line-height: 33.6px;
    text-align: center;
  `,so.div`
    border-radius: 12px;
    display: inline;
    line-height: 26px;
    img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
  `;return(0,g.jsxs)(qw,{children:[(0,g.jsx)(Gw,{children:(0,g.jsxs)(Vw,{children:[(0,g.jsxs)(Kw,{children:[(0,g.jsx)(Jw,{children:"Challenge Our Pricing See the Value!"}),(0,g.jsx)(Yw,{children:"Get access to premium features without breaking the bank. We believe in providing powerful tools at every level, so you get the value you deserve. Explore our plans to find the right fit for your needs and budget."}),(0,g.jsx)(Zw,{onClick:()=>{window.location.href="/demo.html"},children:(0,g.jsx)(Xw,{children:"Discuss Price"})})]}),(0,g.jsx)(Qw,{children:(0,g.jsx)($w,{children:(0,g.jsx)("img",{src:sw,alt:"Pricing Challenge Background"})})})]})}),(0,g.jsx)(cu,{}),(0,g.jsx)(jw,{}),(0,g.jsx)(Ww,{}),(0,g.jsx)(sd,{})]})}),tk=so.div`
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
`,nk=so.div`
  max-width: 400px;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,rk=so.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`,ik=so.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,ok=so.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  &::before {
    content: "✔";
    color: green;
    margin-right: 0.5rem;
  }
`,ak=so.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,sk=so.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,lk=so.form`
  display: flex;
  flex-direction: column;
`,ck=so.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`,uk=so.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`,dk=so.button`
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
`,pk=so.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 1rem;
`,fk=()=>(0,g.jsxs)(tk,{children:[(0,g.jsxs)(nk,{children:[(0,g.jsx)(rk,{children:"Get Expert Advice"}),(0,g.jsxs)(ik,{children:[(0,g.jsx)(ok,{children:"Talk to Sales"}),(0,g.jsx)(ok,{children:"Free Demo"}),(0,g.jsx)(ok,{children:"Get Expert Advice"}),(0,g.jsx)(ok,{children:"Pricing Options"})]})]}),(0,g.jsxs)(ak,{children:[(0,g.jsx)(sk,{children:"Fill out this quick form and we\u2019ll get back to you shortly"}),(0,g.jsxs)(lk,{children:[(0,g.jsx)(ck,{type:"text",placeholder:"Enter your name"}),(0,g.jsx)(ck,{type:"email",placeholder:"Enter your work Email ID"}),(0,g.jsx)(uk,{placeholder:"Let us know about your research requirement, a topic you have in mind, or a goal you are trying to achieve.",rows:"4"}),(0,g.jsx)(dk,{type:"submit",children:"Contact Sales"})]}),(0,g.jsx)(pk,{children:"By filling out and submitting this form, you are agreeing to our Privacy Policy and agreeing to receive email communications regarding events, webinars, research, and more."})]})]});n.p,n.p,n.p,n.p,n.p,n.p,so.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #d6e7ff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,so.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,so.div`
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
`,so.div`
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
`,so.div`
  background-color: #ffcc00;
  padding: 15px;
  border-radius: 50%;
  margin-right: 20px;
`,so.img`
  width: 50px;
  height: auto;
`,so.div`
  display: flex;
  flex-direction: column;
`,so.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`,so.p`
  font-size: 1rem;
  color: #666;
`,so.section`
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
`,so.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top:130px;
  }
`,so.h1`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,so.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,so.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,so.img`
  width: 150px;
  height: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 130px;
  }
`,so.div`
  display: flex;
  gap: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
`,so.img`
  width: 500px;
  height: auto;

  @media (max-width: 768px) {
    width: 180px;
  }
`;const mk=n.p+"static/media/Lab_Management_System_illustration.ffa6ac20348fd915876c.png",hk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAB1CAYAAADkzsULAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA42SURBVHgB7Z1NUxzHGcef7l1WOHJKi+Q4VTlII5K44oArUJVTLoZrUqnAJ9BySBydkD6Blk8g6eSKc2D5BCKVsp0bOKdUchAuCZSKK9qxD0nZsQyqWJYEO93uZ3YXrWD2Zbpnenpmn18VAgapQOz859evTzMgjPDWZfXV53BFclgCCR5ewusM4EAy2JECPhYSNv95lW0DkUsYEFpgOL7TglUu4JoEqI7wT3zB4JYM4E8qMD4QuYFCosFP3pVeicMWdKwRF2WdumjBBoUlH1BIYmIakB58FZYGhcV9KCQxSDAgvVBYHIdCEoOZ9+SW6pwvQDqEYamU4fbOCjsAwhkoJCMy+55clRJuQfr46q2++w7bAMIJKCQjkFIzaxg+UFicgAMxlJK6WcFuQKDz/Rozf5BN9XYFiMwgkwyhY5EmZI8PZJZMIJMMoWMRF/CAzJIJZJIBOGSRKHwgs1iBTDIAhywShQdkFiuQSfrguEWi8IHMkgpkkj44bpEoPCCzpAKZJIIcWiQKH8gsiUAmiSCHFonCAzTLe3JLhX4BCG3IJCcoiEVOw2A7CGCNNn/Fh0xygoJY5DQSFnBpDZklPmSSHgprkSgYNDpm8YEYCJmkh8JaJAoJNXwgKLOs48MBiL6QSTqMlUWiILP0xSmTeHf3PfU2SlGFxBkri0RBZulLZibBMJQmYAmYeFsyttApx/MCBj7D3XrANksCPvpkdmoHUmLsLRIFmeUY6yHBcPBJWIVAXlPfPY41fOCsIZ7Bhj8/5UOCzLwrG8qpNEsdBYXFbki8+/tzjMk7zHgDk2yIQ76WRFhm1XCobO86JPpzoH5Ht/Z+y9ZgDLEWkum9/VWQMuE94uZhSbm4Q7FoT0iujJtVrIRk+sH+DRCyDqmhFxayiBZ+IGBxnIKS+uiWt/flUroBQViNV2RzevfROo6QjfqvZAluABGXsCjGOI2ApRoSvGG54OtgjdHDghahZpY2XqkEFl/XbEk1JKyi2vvxRrCS+s5Dw0IWMUQ9YMZl30pqIcF+iPkolinRYfnpu7JGFkkEG8X6MieVjnvYzFI3J7jF8TzL2b9XbReaKyydTvw2FJhUTMImgjq4h4cDCJzD3aOLTz15RgBhDmewBAWnDAmDFlEThu62Vcuy2rr4DILXD6H0RQXKn58B9pwWQxvgQcFJ/O5w1CKnkJMCMCzP3/o/tF5/DoQeqr1+DgpOoiFpW4QbWUTiokYJ2+oDK8cPYFiO3vgGnv38MYWFiCTRkBhaxBciWGzOnL/cnD2/+HD2/BR+HgbGAhQWPdRD7TEUnMRCYmgRX3C26L/1ve2XLqrPMTAUFoeRkNoWBldILCQmFhGytey/2X/dFYXFXdQY4TYUnETmSczmRVjj4czUSpx/4d373wLjpZvqh58DS7BnHMqfTUL5izNAtMH+49477DIUnERMUjojtdfxCA6x9yiEZpk5Py+kWJHtSoWpQ2Y5DWPFtwhibJIf3dtfEFxqLjePb5EovPtf1lR/yOoyGDJLONt+eRyWzBubRJak9kJBHYtE4c++1sBRMTKLRRg0xmVPiZFJXLBIFFmZZeKTs1B6nPgiBicZF4sgRiZxwSJRoFle+evUWuVfZ8Ob1wZolkM1e3/44ydQ+HVhY2QRRPuxF1pE6taUZY1BQ75JwDjcwLVZ+IbrtI4uPg1v5LQJvn8I4lyr0P0VrJ4CY4R2SAIu13XbamlaBAn3i/Q0tWyHpdtfwfcTn70ChWLMLIJohSRs82u39+1YJOq67bDgAkqkSEEZN4sgWiHBTjFoYtsiUdgMS6GCMoYWQWKHJK8WicJWWDAorMWg/J9JyDPjaBEk9tCPyxaZ/WM42uZBTDAoZ+59N3zapzUahkHJ9ajXmFoEiWUS1y0iBdRAE9ydiCNSpc8r4QgVThAmaRZZlnA0/Q1UHrwKecQVi8g7UA1KsCAZLLASXGISPDWB/HJFHhZOKB/IAD5W77cnfm22fCbWANXl3a+auiERnF1OMyTYF1FNrcRqQeFTP42wTP6tGja9coWyyO7vWCoTv6OAwTiqwBJncEWzys2B+o1vCgEbOoEZuW2Rg77IKiRI1yzYDMPmWFK0fvAM8kaWFgn+AqtBBZrqRl03KANVVbbBh+hW6wPYOnw/3urxkR9pLlvExvkiaJajS0/DTr4J/HE5DF5uyMgiR39Wzal2y8CDFFD3coMfwhpbHr7WbySTuG4R9Z9YgJRBs+Ayl8l/nAtvdF1wNj5PZGERtAdrFzL3ICXQLMpQW6op5w37uyOFxOURrRBmcfOVCkvYBHs0AbqIvIxyZTCi1Xof1lWH21ZlSE8F5a5qgg3cdj40JEYWkfJ22hZB1FPnZ2AZXPGr3QGfzEdIbFsEA6Le1cAuVaWVxqCgDA2JgUV8UeJ2ngjSflFuDAh7UoLCYtkiwQdwE+wH5AUqKNgPivrSwJAYWUTIDRsWyRRdk1havm+CTYsEH8INKeEaZIxqkdyJ6qMMfLWMLFLmDbCErd2Ip76vZrOJu15W1aJFnn6oJgOFM8eDV0UF7py82PfVypNFWAAfgWVwSFieDSAu3PEmGj5wbFpkQrh1HJ/6/8+pZle991rfkOTFIghj9guk4ZyJDuxrx/sxalbalkXUpF4NUhzm1QUnpnubXZEhyVtf5D6ej2GxvE24ZEVzUrH0VXKz90mDFlENyAZYQt18rp42Vm2VX/SRIkNiZJEWtzXG/RLMYhNB2yKqo28yv5I6ZJFjlE2u4Jox/PhUSEwswjir+/NTVqrBnwRtwkT6QTGxCHc4INYtwsD18xarRxPtIemXQtIpeq1tkX+/ObUBGaKCUsenIaSIrkUQp3cnWrRI+ITOwZmVnMNvwvcvXZyEKyYWAQfYvcpqaRnFyCKPy86eqGXbIrgfBPKAhDkM9PGrhhaRItwfrkPmFukFjaLG3nHlaqJNv6JaRD0Y6zZn16XFtXaG4D4W7zgkRbBIL3tXWSMQMJ9U88toROvzitHK4TRBi+y+w6w+4LJYa6cLD2DuOCRFsUgv+HTsNL8WwfBckyJbBGzD7K+100VZr20S0xEtcBwc+dr9PVvUDYupRVzui9i2SOcbe5ATVOf9Uvjqlbj+MW6uWiSK3rDEWe91+MYT0IUskn942GHXHI7Lg0WiwLDgCU3YuR8WluBcS3s3IVmkGHCYCBZAj1xZJArs3A8LS+si9UXGGSHgsZr4HC+LRNEvLGSRlGDZbG3QhSsugQYB2F+enjYnw0IWSQf1dP4UcgJTAz1c3RA6Ezt+kXcdYlgOf3GwQhZJjdyc/S5K4HPNMevcjHPrguevgCZkkSE/g8xNSA4qv4Id3cddFc9Sh4JiMm9EFhlOp9RoJqvF4yA7XQquPtL6YTkvravh40IaxaTOGFlkNGTKq7WToAzt2tLcYKTB4xV5F+dZoECQRayxCW7jw2HXJEKajFJhUJrTu4/WixIWsogdwiaXxS3XsWFQZ8vtVhYXIBJINKsVISwmFpFHfJM/5WtZlTcahKuz69Ldk7P88i9fNAc5tMo7uv2S0+Q7LCYWkWfkddzHouYAcG2YU2FxdXYdbaL6JrfBNQK43vspwz+m7z2qA2cpVK6QDXHI1/x59+dU0CKccc1hX9Z4ODO10nsFj4NQHb+a4Pr7dJIAw4oTpOAo4clVFbgLjhSFUKFdU+Gt914LQ4KjVEx1wtN7Md0PS1rnr4Rnp+CTnGdW+KDm+kJGrOI4IcKgZDtaymBTNbOWT1/ugPMealg3zWp6vrJVQzyDDdfCkrRFosgkLBkf4xaHzqE9mVVzVEHY4Yeqqbx8uuvBej+Zvv/ommqY34R0cS4sNk/xshiWA9y+nKcTc7EWlxpAx/vPqlEGBaTz9ZdJr39yCifCYmQRIdcevnWhDhpYCMt11czKpFCgCXieoQoKFq32wAYStktHsNwvIAiLumjJKF18XHaf1d4UA4v4yiKLpgs90wgLdj73ruZ3K0Onj5LqcXAIjqypTvrQIx9Yvy94D/Y9JuSWxZEZ62HJyiJRJBWWvAekF6zuztq/Dw+SxcftEKMeV80GfRFHvXhZYPMr0eOfh2AtLFlbJAqDsGBzYS2PTaxBoFVKAdQ5C6spmvZVfJxJ750oHAU2yl9qWwVuMpBLYI9Uw+KSRaLozrPIdqnNQXt+DqSEDSHhVp466XHB+ZSjCixxqR4e7eJ2owbmoLOYcnNUc5xkpJB0wWFixko3GLNapjKVsLhokX5gYCY4zAW4QY4dVzpvqk7nx19Pwo6/wpxfdp40YQc/AK9TDbLKOZzD6+GedA5NGcCnykA7o5zTPoxYIemS97C4bhHCLbRC0iVcEMj4DcvLLozDYmKRhzPnnV3iQaSD0eYHf/a1RlPdNEKKofWrEgQLezem1Y3+wwf7sUeCpvf2V4tcrZJIHiOTnMR1s4Tnr1S0h7XJImNKotvoXDcLq4ibZBEiLoma5CSumKW9ylmsM2C6Q9hkkTEm1ZB0ySQsEg7UbO2OmkPAIVOjQ2NU6Gp5L+lK6GMlJF0yMospZJExx2ppj4z6LEZQX4SwapKT5MAsZBECMi0S5bpZyCIEkqlJeumsOL4mObviglkkyM3mzIVlIMYeZ0LSBVcc85aoZRoWNTImSmy+yJXzidFxLiRdMg2LlNcfzl4o1L4MQh9nQ9KlGxZL++5plS9xCudD0iXc+BWIOmMstSojUsqN5uyFGhBED7kJSZfUwiLlbdXEGloUgBg/cheSLomFJayDrJpY1Ach+pDbkHTBsEAQLOhNSrKG4LBGo1jEIHIfkl68+1/McT7xthRyicGL/eDHKGuoScsdJuVHosVv+fNTY7c3nIhPoUIShXf3v177o8kDCgWhw7ci8mJ9X5RoDQAAAABJRU5ErkJggg==",gk=n.p+"static/media/clock.cafb3982fb150a806a77.png",xk=n.p+"static/media/premium.32087c7a3627bd39605f.gif",yk=n.p+"static/media/optimization.63421cd7d827365fb19f.png",bk=n.p+"static/media/access.21a604edb66b884a0028.png",vk=n.p+"static/media/best-customer-experience.973ae41dfe6d7a9c02d2.png",wk=n.p+"static/media/accessible.3ff76038314c071df14d.png",kk=n.p+"static/media/easy-to-use.cae7d597f3ab4e038c1d.png",Sk=n.p+"static/media/administer.85579c0cb192be159e06.png",Ak=n.p+"static/media/reconciliation.96079e275f4303921aeb.png",jk=n.p+"static/media/reduce-time.3ede8db68ce291b7857d.png",Ck=n.p+"static/media/better_experience.904fb1df701730ef3db1.png",Ek=n.p+"static/media/transparency.12d7bff3d2e4b289e06b.png",Pk=n.p+"static/media/brand_reputaion.6475ab9d5f12592403af.png",Rk=n.p+"static/media/money_saving.6876708d842414cd1331.png",Ok=n.p+"static/media/customize.a3aced7d97180108ee6a.png",Tk=n.p+"static/media/encrypted.1fc2981c67e7814af39c.png",Mk=n.p+"static/media/quality.020315089db2986e9675.png",zk=n.p+"static/media/scalability1.3052679c770730320682.png",Ik=so.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #fff;
  
`,Lk=so.h1`
  font-size: 2rem;
  color: #000;
  margin-bottom: 10px;
  font-weight: 600;

  span {
    color: #6a1b9a; /* Purple highlight */
  }
`,Dk=so.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Fk=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,Nk=so.div`
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
`,Bk=so.h3`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 10px;
  font-weight: 600;
`,_k=so.p`
  color: #6e6e6e;
  font-size: 0.9rem;
  line-height: 1.4;
`,Uk=[{title:"Optimize",text:"maximize time & effort efficiency",bgColor:"#d9f5e3",icon:gk},{title:"Streamline",text:"simplify claim management",bgColor:"#f2e3ff",icon:Sk},{title:"Verify",text:"ensure precise claim reconciliation",bgColor:"#ffe8cc",icon:Ak},{title:"Accelerate",text:"minimize claim processing delays",bgColor:"#fff1d0",icon:jk},{title:"Enhance",text:"deliver a seamless claim experience",bgColor:"#d7faff",icon:Ck},{title:"Elevate",text:"increase claim transparency",bgColor:"#d9f5e3",icon:Ek}],Hk=[{title:"Save",text:"time & effort",bgColor:"#d9f5e3",icon:gk},{title:"Administer",text:"uniform leave policy",bgColor:"#f2e3ff",icon:Sk},{title:"Ensure",text:"accurate leave accounting",bgColor:"#ffe8cc",icon:Ak},{title:"Reduce",text:"unnecessary expense",bgColor:"#fff1d0",icon:jk},{title:"Deliver",text:"an outstanding employee experience",bgColor:"#d7faff",icon:Ck},{title:"Improve",text:"employer brand image",bgColor:"#d9f5e3",icon:Ek}],Wk=[{title:"Maximize Efficiency",text:"Save valuable time and effort with seamless processes",bgColor:"#d9f5e3",icon:yk},{title:"Unmatched Quality",text:"We consistently deliver top-notch results for every user",bgColor:"#f2e3ff",icon:xk},{title:"Lightning-Fast Access",text:"Enjoy quick and easy access to our application anywhere, anytime",bgColor:"#ffe8cc",icon:bk},{title:"Seamless Experience",text:"Experience flawless and intuitive user interactions",bgColor:"#fff1d0",icon:vk},{title:"User-Centric Design",text:"Delivering an outstanding and effortless user experience",bgColor:"#d7faff",icon:kk},{title:"Universal Accessibility",text:"Access our platform seamlessly on both mobile and web",bgColor:"#d9f5e3",icon:wk}],qk=[{title:"Streamline",text:"eliminate time-consuming paperwork",bgColor:"#d9f5e3",icon:gk},{title:"Optimize",text:"cut unnecessary operational expenses",bgColor:"#fff1d0",icon:Rk},{title:"Boost",text:"elevate employer brand reputation",bgColor:"#d9f5e3",icon:Pk},{title:"Standardize",text:"enforce a consistent company policy",bgColor:"#f2e3ff",icon:Sk},{title:"Performance",text:"Bulk processing with high TPS.",bgColor:"#ffe8cc",icon:Ak},{title:"Reliabilty",text:"24/7 availability with 100% uptime on mobile and web ",bgColor:"#d7faff",icon:Ck}],Gk=[{title:"24/7 Access with less man power",text:"Schedule Equipment Anytime, Seamlessly",bgColor:"#d7faff",icon:gk},{title:"Real-Time Availability!",text:"Stay Updated, Avoid Surprises",bgColor:"#d9f5e3",icon:Pk},{title:"Hassle-Free User Management!",text:"Group, Control, Assign Roles",bgColor:"#fff1d0",icon:Sk},{title:"Zero Booking Conflicts!",text:"Smart Scheduling, Uninterrupted Operations",bgColor:"#f2e3ff",icon:Rk},{title:"Performance",text:"Bulk processing with high TPS.",bgColor:"#ffe8cc",icon:Ak},{title:"Stay Audit-Ready",text:"Automated Logs, Effortless Records ",bgColor:"#d9f5e3",icon:Ck}],Vk=[{title:"Quality",text:"Schedule Equipment Anytime, Seamlessly",bgColor:"#d7faff",icon:Mk},{title:"Data Security",text:"Stay Updated, Avoid Surprises",bgColor:"#d9f5e3",icon:Tk},{title:"Scalability ",text:"Group, Control, Assign Roles",bgColor:"#fff1d0",icon:zk},{title:"Customization",text:"Smart Scheduling, Uninterrupted Operations",bgColor:"#f2e3ff",icon:Ok},{title:"Performance",text:"Bulk processing with high TPS.",bgColor:"#ffe8cc",icon:Ak},{title:"Stay Audit-Ready",text:"Automated Logs, Effortless Records ",bgColor:"#d9f5e3",icon:Ck}],Kk=[{title:"24/7 Access with less man power",text:"Schedule Equipment Anytime, Seamlessly",bgColor:"#d7faff",icon:gk},{title:"Real-Time Availability!",text:"Stay Updated, Avoid Surprises",bgColor:"#d9f5e3",icon:Ak},{title:"Efficiency",text:"Automate tasks like orders creation or generating invoices",bgColor:"#fff1d0",icon:Sk},{title:"Business Growth",text:"Payment reminders and tax invoice creation simplify cash flow management.",bgColor:"#f2e3ff",icon:Rk},{title:"Performance",text:"Bulk processing with high TPS.",bgColor:"#ffe8cc",icon:Pk},{title:"Stay Audit-Ready",text:"Tracking all the detailed changes",bgColor:"#d9f5e3",icon:Ck}],Jk=e=>{let{data:t}=e;const n="LMS"===t?Vk:"Claim"===t?Uk:"lead"==t?Wk:"HR"==t?qk:"Equipment"==t?Gk:"Sales and Procurement"==t?Kk:Hk;return(0,g.jsxs)(Ik,{children:[(0,g.jsxs)(Lk,{children:["All-in-One ",t," Management, ",(0,g.jsx)("span",{children:"Faster and Easier."})]}),(0,g.jsx)(Dk,{children:n.map(((e,t)=>(0,g.jsxs)(Fk,{children:[(0,g.jsx)(Nk,{bgColor:e.bgColor,children:(0,g.jsx)("img",{src:e.icon,alt:`${e.title} Icon`})}),(0,g.jsx)(Bk,{children:e.title}),(0,g.jsx)(_k,{children:e.text})]},t)))})]})},Yk=n.p+"static/media/faq.0aaf4c93b37d158961e9.png",Qk=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: aliceblue;
  
  @media (min-width: 768px) {
    padding: 40px 20px;
  }
`,Zk=so.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #663399;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,Xk=so.div`
  width: 100%;
  max-width: 700px;
`,$k=so.div`
  background-color: #f8f5ff;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,eS=so.div`
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
`,tS=so.div`
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
`,nS=so.div`
  text-align: center;
  margin-top: 50px;
  padding: 30px;
  width: 100%;
  max-width: 700px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`,rS=so.h2`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 20px;
`,iS=so.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 30px;
`,oS=so.a`
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
`,aS=so.img`
  max-width: 200px;
  margin-bottom: 10px;
`,sS=e=>{let{data:t,res:n}=e;const[r,o]=(0,i.useState)(null),a="crm"==t?[{question:"What is Atomwalk CRM?",answer:"Atomwalk CRM is a customer relationship management platform designed to help businesses manage their interactions with customers, leads, suppliers, and partners. It offers a comprehensive set of tools for task management, lead tracking, customer support, and sales process automation, allowing businesses to improve communication, streamline operations, and increase productivity."},{question:"How can I use Atomwalk CRM?",answer:"You can use Atomwalk CRM by signing up for an account and accessing its features either through a web app or mobile application. Once logged in, you can create customer profiles, manage leads, assign tasks, and track the progress of deals. Atomwalk CRM provides intuitive dashboards and reporting tools that help users oversee customer interactions, sales pipelines, and team activities efficiently."},{question:"How does CRM work?",answer:"A CRM works by consolidating customer and lead data into a centralized system. It records and tracks all interactions\u2014emails, calls, meetings\u2014making it easier for teams to access important information at any time. With Atomwalk CRM, you can manage leads through each stage of the sales pipeline, assign tasks to team members, automate follow-ups, and generate reports. By organizing all your customer-related data in one place, CRM systems help businesses improve customer service, boost sales, and drive growth."},{question:"How to add a Lead?",answer:"To add a lead in Atomwalk CRM, go to the Lead List section, where you can click on Add Lead. Fill in the required details such as name, contact information, and relevant notes about the lead's interest or status. You can also upload bulk leads if you have a file prepared. Once added, you can assign tasks to follow up on the lead and track its progress in the sales pipeline."},{question:"How do I track  a lead?",answer:"In Atomwalk CRM, leads can be tracked through the sales pipeline. You can view all leads in the Lead List and monitor their status, such as active or inactive, and see which tasks or follow-ups are assigned to them. The system also provides a visual representation of where each lead is in the sales cycle, and you can set reminders for future actions or update the lead's status based on recent interactions. This ensures that no lead is neglected and helps optimize conversion rates."}]:"equipment"==t?[{question:"How to create a user ID?",answer:"Only admin has the access to create user ID using user\u2019s email."},{question:"Can a user change his username and email?",answer:"No. User can\u2019t modify the username and email once it\u2019s created. User has to contact the admin for any modification."},{question:"What if I forget my username?",answer:"Our system lets you create a nickname to log in. So, if Ram forgets his default username, he can still access the system using his personalized nickname."},{question:"Is it possible to restrict certain users from accessing specific equipment?",answer:"Yes, Admins can restrict specific users or user groups from accessing certain equipment. For example, if Ram is not trained to use the high-powered laser machine, the admin can restrict him from booking it."},{question:"Can I view available booking slots for the current and upcoming week?",answer:"Absolutely! Users can view available booking slots for both the current and the upcoming week. For instance, if Ram wants to plan ahead, he can check the available slots for the next week and book equipment accordingly."},{question:"Can I cancel or reschedule a booking?",answer:"Yes! You can cancel or reschedule your booking at any time. For instance, if Jenny booked equipment for Thursday but needs it for Friday instead, she can cancel the original booking and create a new one."},{question:"Can the system block timeslots for scheduled maintenance?",answer:"Yes! The system automatically blocks time slots for scheduled maintenance. For example, if the centrifuge is scheduled for maintenance at 2 PM, it will block 1 PM to 4 PM, preventing any bookings during that period to ensure uninterrupted maintenance."},{question:"Can I set up different user groups for each department?",answer:"Yes, you can set up different user groups for each department in your lab equipment management system. For example, if the Biology Department requires access to specific equipment, you can create a user group specifically for them. This ensures that members of the Biology Department can manage and book equipment relevant to their research while restricting access to other departments."},{question:"How many times can I book equipment in a week?",answer:"Each user can book equipment as per the policy set up in your setup. For example, if Ram books for HPLC on Monday, Tuesday, and Friday then he won't be able to book again until the next week. Because for HPLC the max slot per week is 3."},{question:"Can I share my booked slot with another user?",answer:"No, each booking is tied to the specific user who made it. For example, if Ram booked the HPLC machine, only he has access to it during his time slot. However, Managers or Admins can make changes to the schedule if necessary."},{question:"Can I book equipment outside of working hours?",answer:"Yes! Our system allows 24/7 booking. For instance, if Ram prefers working late, he can book equipment at 11 PM on Tuesday, as long as it\u2019s available."},{question:"Can I see past bookings?",answer:"Yes, users can view their booking history in the system. For example, if Ram wants to check when he last used the PCR machine, he can log in and view his past bookings."},{question:"Can I generate reports for the required field?",answer:"Yes, you can generate custom reports based on specific fields like equipment usage, booking frequency, and maintenance schedules. For example, if Ram wants to analyze the usage of the PCR machine over the past month and he has access as a manager, then he can generate a report for that specific data."},{question:"Can I delete the unnecessary data from the software?",answer:"Yes, Admins can purge unnecessary or outdated data to keep the system running smoothly. For instance, if a large volume of old booking logs is slowing the system down, the admin can remove those logs without affecting current operations."}]:[{question:"What is Atomwalk HRM?",answer:"Atomwalk HRM is an all-in-one Human Resource Management solution designed to streamline HR processes such as employee attendance tracking, leave management, claims submission, payroll, and more. With its mobile app, Atomwalk HRM On-The-Go, employees and managers can manage HR tasks like real-time attendance, leave requests, approvals, and claims from anywhere, enhancing accessibility and efficiency. This system simplifies workflows from onboarding to exit, making it ideal for businesses looking to automate and optimize their HR operations while improving overall employee experience."},{question:"How can I use Atomwalk HRM?",answer:"You can use Atomwalk HRM by accessing it through its web-based platform or the Atomwalk HRM On-The-Go mobile app. Once logged in, employees can manage their attendance, apply for leave, submit claims, and access payroll information. Managers can approve or reject leave and claims, view reports, and monitor employee attendance in real-time. The system is designed to be user-friendly, with a dashboard that provides easy navigation to the HR functionalities relevant to your role."},{question:"How does HRM work?",answer:"Atomwalk HRM works by automating core HR processes like attendance tracking, leave management, claims submission, and payroll handling. The system integrates employee data and allows for real-time updates on various HR activities. It helps managers approve requests, generate reports, and track employee productivity, while employees can manage their own data through the self-service portal. The solution is designed to reduce paperwork and manual effort, improving efficiency and accuracy across HR operations."},{question:"Why should I choose Atomwalk HRM?",answer:["Zero Paperwork, managing the details anytime/anywhere digitally.","Documents are stored in the document management system (S3 bucket), accessible anytime by authorized personnel for future audit needs.","Expenses can be linked to respective projects (if using Project Management modules), aiding in project margin tracking and efficient cost control.","Automatic integration with accounting systems.","Email and WhatsApp integration.","Mobile app available for ESS (Employee Self-Service) for instant use.","Referral System.","Unlimited expense heads can be added as per the need."]},{question:"How to add a claim?",answer:"To add a claim in Atomwalk HRM, go to the 'Claims' section from the dashboard. Click on 'Submit New Claim,' then fill in the details such as claim type, amount, and description. You can also attach relevant receipts or documents. Once done, submit the claim for approval, and you\u2019ll be notified of its status in real-time. The system supports various claim categories, ensuring easy tracking and management of expenses."},{question:"How do I apply for a leave?",answer:"To apply for leave in Atomwalk HRM, log in to your account and navigate to the 'Leave' section. Select 'Apply Leave,' choose the type of leave (e.g., vacation, sick leave, WFH), specify the dates, and provide any necessary details or attachments. Submit the request, and you will be able to track its status as it moves through the approval process."},{question:"How can a manager approve a leave?",answer:"A manager can approve a leave in Atomwalk HRM by logging in and navigating to the 'Leave Approvals' section. There, they can review pending leave requests, check the employee's leave balance and history, and either approve or reject the request with a single click. The system provides options to add comments, and employees are notified instantly about the approval status."},{question:"Why and how does Atomwalk handle the company exit process?",answer:"Atomwalk\u2019s Exit Process module is designed to ensure a structured, seamless, and compliant offboarding experience for employees. It handles every aspect of the process, from resignation or termination to final settlement, asset handover, and exit interviews. With automated tracking and task management, it guarantees a smooth transition, protects company data and assets, and ensures legal compliance, leaving both the organization and the departing employee with a positive experience."}];return(0,g.jsxs)(Qk,{children:[(0,g.jsx)(Zk,{children:"All the A's to your Q's"}),(0,g.jsx)(Xk,{children:a.map(((e,t)=>(0,g.jsxs)($k,{children:[(0,g.jsxs)(eS,{onClick:()=>(e=>{o(r===e?null:e)})(t),children:[e.question,(0,g.jsx)("span",{children:r===t?"-":"+"})]}),(0,g.jsx)(tS,{isOpen:r===t,children:Array.isArray(e.answer)?(0,g.jsx)("ul",{children:e.answer.map(((e,t)=>(0,g.jsx)("li",{children:e},t)))}):(0,g.jsx)("p",{children:e.answer})})]},t)))}),(0,g.jsxs)(nS,{children:[(0,g.jsx)(aS,{src:Yk,alt:"FAQ"}),(0,g.jsx)(rS,{children:"Still have questions?"}),(0,g.jsxs)(iS,{children:["Book a call with our team to learn how to integrate ATOMWALK ",(0,g.jsx)("span",{children:"crm"==t?"CRM":"equipment"==t?"LEMS":"HRM"})," with your business."]}),(0,g.jsx)(oS,{onClick:()=>{window.location.href="/demo.html"},children:"Book a demo"})]})]})},lS=n.p+"static/media/userManagement.c889d10e3f21728bf9e6.png",cS=n.p+"static/media/equipmentManagement.8bdb72e825582560ea19.png",uS=n.p+"static/media/check-list.c7084c01542ce94fe78f.png",dS=n.p+"static/media/dashboard.87c36bcd4f4f546e7836.png",pS=n.p+"static/media/content-management.5d89ff2ade33a5b1d2fa.png",fS=so.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,mS=so.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,hS=so.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,gS=so.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,xS=so.div`
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
`,yS=so.div`
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
`,bS=so.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,vS=so.p`
  font-size: 1em;
  color: #666;
`,wS=()=>{const e=e=>{window.location.href=`/${e}`};return(0,g.jsxs)(fS,{children:[(0,g.jsx)(mS,{children:"Key Features"}),(0,g.jsx)(hS,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,g.jsxs)(gS,{children:[(0,g.jsxs)(xS,{onClick:()=>e("userroleManagement.html"),children:[(0,g.jsx)(yS,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:lS,alt:"Speed"})}),(0,g.jsx)(bS,{children:"User and Role Management"}),(0,g.jsx)(vS,{children:"Atomwalk\u2019s LMS ensures Role-based access control to restrict data access based on user roles, and manage permissions to ensure secure and appropriate data access."})]}),(0,g.jsxs)(xS,{onClick:()=>e("labProcessemplate.html"),children:[(0,g.jsx)(yS,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:cS,alt:"Trust"})}),(0,g.jsx)(bS,{children:"Lab Process Template"}),(0,g.jsx)(vS,{children:"Provide a simplified way to manage experiment templates required for the laboratory. Include various experiment templates with necessary steps, required inventory, and equipment. This ensures optimized and error-free execution of experiments by lab users."})]}),(0,g.jsxs)(xS,{onClick:()=>e("labExperimentProject.html"),children:[(0,g.jsx)(yS,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:uS,alt:"Accuracy"})}),(0,g.jsx)(bS,{children:"Lab Experiment Project Execution"}),(0,g.jsx)(vS,{children:"Don\u2019t let unexpected breakdowns slow you down. Atomwalk\u2019s LEM sends alerts for maintenance and calibrations, ensuring minimal downtime and maximum lab productivity."})]}),(0,g.jsxs)(xS,{onClick:()=>e("pIwithReport.html"),children:[(0,g.jsx)(yS,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:dS,alt:"Reliability"})}),(0,g.jsx)(bS,{children:"PI with Report & Dashboard"}),(0,g.jsx)(vS,{children:"Unlock the power of data with Atomwalk\u2019s detailed reports and Dashboard. Gain clear insights into usage pattern of equipments and labs "})]})]})]})},kS=so.section`
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
`,SS=so.div`
  max-width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,AS=so.h1`
  font-size: 48px;
  color: #213e6d;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`,jS=so.p`
  font-size: 18px;
  color: #6d7278;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,CS=so.button`
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
`,ES=so.div`
  max-width: 50%;
  position: relative;
  z-index: 2;
  bottom: 0px;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`,PS=so.img`
  width: 100%;
  height: auto;
`,RS=so.img`
  position: absolute;
  top: 150px;
  left: 40px;
  width: 130px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80px;
  }
`,OS=(so.img`
position: absolute;
    right: 436px;
    bottom: 0;
    width: 275px;
    z-index: 1;
  @media (max-width: 768px) {
    width: 100px;
  }
`,so.div`
  padding: 20px;
  background-color: #f5f5f5;
`,so.h1`
  text-align: center;
  color: #2f3b82;
`,so.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`,so.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,so.h2`
  color: #2f3b82;
  margin-bottom: 10px;
`,so.p`
  color: #333;
`,so.table`
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
`,so.button`
  padding: 10px 20px;
  background-color: #2f3b82;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1e2870;
  }
`,()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(kS,{children:[(0,g.jsx)(RS,{src:hk,alt:"Abstract Shape"}),(0,g.jsxs)(SS,{children:[(0,g.jsx)(AS,{children:"Lab Management System"}),(0,g.jsx)(jS,{children:"Laboratories require meticulous organization and data management. A robust Lab Management System (LMS) can automate processes such as sample tracking, data entry, and reporting, which streamlines operations and ensures compliance with industry standards."}),(0,g.jsx)(CS,{onClick:()=>{window.location.href="/userManagement.html"},children:"Learn more"})]}),(0,g.jsx)(ES,{children:(0,g.jsx)(PS,{src:mk,alt:"Laboratory Technician"})})]}),(0,g.jsx)(Jk,{data:"LMS"}),(0,g.jsx)(wS,{}),(0,g.jsx)(sS,{data:"equipment"})]})),TS=n.p+"static/media/Bloghreos.5aa2e0e24314590ba71c.jpg",MS=n.p+"static/media/Pritam.3b843605de98c7062a24.jpg",zS=n.p+"static/media/Ashutosh.d4b90e7f5ddbbe2e4acc.png",IS=so.section`
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
`,LS=so.div`
  max-width: 700px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,DS=so.h1`
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
`,FS=so.p`
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,NS=so.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 30px;
  }
`,BS=so.a`
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
`,_S=so.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,US=so.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;

  &:before {
    content: "✔";
    color: black;
    margin-right: 10px;
  }
`,HS=so.div`
  position: relative;
  max-width: 470px;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`,WS=so.img`
  width: 100%;
  border-radius: 15px;
`,qS=so.div`
  position: absolute;
  bottom: -63px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,GS=so.div`
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`,VS=so.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`,KS=so.div`
  font-size: 14px;
  color: #333;
`,JS=()=>(0,g.jsxs)(IS,{children:[(0,g.jsxs)(LS,{children:[(0,g.jsxs)(DS,{children:["Stay Informed with the Latest Updates and ",(0,g.jsx)("span",{children:"Blog Highlight"})]}),(0,g.jsx)(FS,{children:"Stay informed with the latest updates and blog highlights, featuring essential insights and expert analysis."}),(0,g.jsxs)(NS,{children:[(0,g.jsx)(BS,{href:"https://play.google.com/store/search?q=atomwalk&c=apps&hl=en",primary:!0,children:"Download Atomwalk Apps"}),(0,g.jsx)(BS,{href:"/demo.html",children:"Try Demo"})]}),(0,g.jsxs)(_S,{children:[(0,g.jsx)(US,{children:"eliminate repetitive tasks with Atomwalk"}),(0,g.jsx)(US,{children:"productive and enthusiastic team member"}),(0,g.jsx)(US,{children:"Streamline lead tracking"})]})]}),(0,g.jsxs)(HS,{children:[(0,g.jsx)(WS,{src:TS,alt:"Blog Preview"}),(0,g.jsxs)(qS,{children:[(0,g.jsxs)(GS,{children:[(0,g.jsx)(VS,{src:MS,alt:"User 1"}),(0,g.jsxs)(KS,{children:["Ashutosh Mohapatra - Following",(0,g.jsx)("br",{}),"The Impact of Technology on the Workplace: Atomwalk CRM On-the-Go"]})]}),(0,g.jsxs)(GS,{children:[(0,g.jsx)(VS,{src:zS,alt:"User 2"}),(0,g.jsxs)(KS,{children:["Pritam Kumar Nayak - Following",(0,g.jsx)("br",{}),"Tips You Must know: Atomwalk HRM On-the-Go"]})]})]})]})]}),YS=so.div`
  background-color: rgb(255 246 247);
`,QS=so.p`
  grid-column: span 3;
  text-align: center;
  color: #ff0000;
  font-size: 40px;
  font-weight: 500;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,ZS=so.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on mobile */
  }
`,XS=so.div`
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
`,$S=so.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`,eA=so.div`
  padding: 15px;
`,tA=so.span`
  font-size: 12px;
  color: #007BFF;
  font-weight: bold;
  text-transform: uppercase;
`,nA=so.h2`
  font-size: 18px;
  color: #333;
  margin: 10px 0;
`,rA=so.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #888;
  margin-top: auto;
`,iA=so.span`
  display: flex;
  align-items: center;
`,oA=so.span`
  font-size: 12px;
`,aA=so.div`
  padding: 20px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`,sA=so.div`
  display: flex;
  align-items: center;
`,lA=so.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 250px;

  @media (max-width: 768px) {
    width: 100%;
  }
`,cA=so.button`
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
`,uA=()=>{const[e,t]=(0,i.useState)(""),n=[{id:3,title:"5 Common HR Software Problems and Troubleshooting Tips You Must know: Atomwalk HRM On-the-Go",category:"HRMS",image:"https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg",author:"Atomwalk Team",date:"March 23, 2024"}].filter((t=>t.title.toLowerCase().includes(e.toLowerCase()))),r=()=>{window.location.href="/BlogDetails.html"};return(0,g.jsxs)(YS,{children:[(0,g.jsxs)(aA,{children:[(0,g.jsx)("h2",{style:{color:"#454545"},children:"Latest Post"}),(0,g.jsxs)(sA,{children:[(0,g.jsx)(lA,{type:"text",placeholder:"Search by title...",value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)(cA,{onClick:()=>console.log("Searching..."),children:"Search"})]})]}),(0,g.jsx)(ZS,{children:n.length>0?n.map((e=>(0,g.jsxs)(XS,{onClick:r,children:[(0,g.jsx)($S,{src:e.image,alt:e.title}),(0,g.jsxs)(eA,{children:[(0,g.jsx)(tA,{children:e.category}),(0,g.jsx)(nA,{children:e.title}),(0,g.jsxs)(rA,{children:[(0,g.jsx)(iA,{children:e.author}),(0,g.jsx)(oA,{children:e.date})]})]})]},e.id))):(0,g.jsxs)(QS,{children:['No posts found for "',e,'"']})})]})},dA=()=>(0,g.jsxs)("div",{children:[(0,g.jsx)(JS,{}),(0,g.jsx)(uA,{})]}),pA=so.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,fA=so.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`,mA=so.h2`
  font-size: 2rem;
  color: #333;
  margin: 20px 0;
`,hA=so.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`,gA=so.div`
  text-align: center;
  margin: 30px 0;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`,xA=()=>(0,g.jsxs)(pA,{children:[(0,g.jsx)(fA,{children:"Revolutionize Workforce Management with Atomwalk HRM On-The-Go"}),(0,g.jsx)(gA,{children:(0,g.jsx)("img",{src:"https://www.dnkinfotelecom.com.br/wp-content/uploads/2021/01/WFM.png",alt:"Workforce Management"})}),(0,g.jsx)(hA,{children:"Managing a dynamic workforce has never been easier. Atomwalk HRM On-The-Go empowers businesses to streamline their HR processes with smart, mobile-first solutions that work in real-time. Designed for today\u2019s fast-paced and distributed workforce, the app ensures that every aspect of employee management is simplified and efficient."}),(0,g.jsx)(hA,{children:"With our app, employees can check-in and check-out seamlessly using the built-in location tracking feature. No more outdated manual attendance records or guesswork. Our real-time GPS location tracking ensures 100% accuracy in attendance management, making it easier than ever for employees to log their presence from any location. This is especially useful for remote teams or employees who are frequently on the move."}),(0,g.jsx)(hA,{children:"Not only does Atomwalk HRM help track attendance, but it also offers employees a smart status calendar view, providing them with a clear visual of their attendance history. Employees can easily monitor their hours, check for missed check-ins, and stay on top of their time management. This improves transparency and promotes accountability across the workforce."}),(0,g.jsx)(hA,{children:"For managers, Atomwalk HRM provides a bird's-eye view of attendance trends, helping you make informed decisions about staffing and time-off management. With comprehensive reports and insights, you can ensure that your team stays productive and compliant, no matter where they are working from."}),(0,g.jsx)(mA,{children:"Seamless Leave and Claim Management Anytime, Anywhere"}),(0,g.jsx)(gA,{children:(0,g.jsx)("img",{src:"https://media.licdn.com/dms/image/D5612AQG26zqve50FHQ/article-cover_image-shrink_720_1280/0/1693328750791?e=2147483647&v=beta&t=U9v7s3R6xZco5ui_VMkZKcRfJB4I9PiJ40m8pDj4uUk",alt:"Leave Management"})}),(0,g.jsx)(hA,{children:"Say goodbye to paperwork and complicated approval workflows. With Atomwalk HRM On-The-Go, employees can apply for leave directly from the app\u2014whether it's Earned Leave, Loss of Pay, or Work From Home. Managers are immediately notified of these requests and can approve, reject, or provide feedback within seconds, drastically reducing approval delays and ensuring that time-off requests are handled smoothly."}),(0,g.jsx)(hA,{children:"Employees can track their leave status, check remaining leave balances, and even plan future leave requests with ease. Whether they are on the go or at the office, managing time-off has never been this intuitive."}),(0,g.jsx)(hA,{children:"But that\u2019s not all. Expense claims are also made simple with Atomwalk HRM. Employees can submit claims by uploading receipts directly from their phone\u2019s storage or by capturing real-time photos of bills and receipts using their mobile device. The app allows them to itemize and categorize expenses, ensuring a smooth submission process."}),(0,g.jsx)(gA,{children:(0,g.jsx)("img",{src:"https://www.cflowapps.com/wp-content/uploads/2023/02/clms_prcsautomtn.jpg",alt:"Claim Processing"})}),(0,g.jsx)(hA,{children:"For managers, reviewing claims is equally streamlined. The app enables them to review all supporting documents and approve, reject, or send the claim back for revisions based on their approval limits. This eliminates the hassle of chasing down paper receipts or emails, speeding up the reimbursement process."}),(0,g.jsx)(hA,{children:"Atomwalk HRM On-The-Go enhances efficiency across the board, empowering employees and managers to handle their HR tasks anytime, anywhere, all from their mobile device. It\u2019s more than just an app\u2014it\u2019s a complete HR solution in your pocket."}),(0,g.jsx)(mA,{children:"Why Choose Atomwalk HRM On-The-Go?"}),(0,g.jsxs)("ul",{style:{color:"black"},children:[(0,g.jsx)("li",{children:"Real-Time Location Tracking: Know exactly where your team is clocking in from with precise GPS-enabled check-ins and check-outs."}),(0,g.jsx)("li",{children:"Comprehensive Attendance Management: Track attendance trends, generate reports, and make data-driven decisions to optimize workforce management."}),(0,g.jsx)("li",{children:"Smart Leave Management: Apply, review, and manage leave requests instantly, ensuring that your team always operates at peak efficiency."}),(0,g.jsx)("li",{children:"Efficient Claim Processing: Submit, review, and approve expense claims with ease, all from your mobile device."}),(0,g.jsx)("li",{children:"Managerial Control: Managers have access to insightful dashboards for approvals, employee data, and team performance, all at their fingertips."})]}),(0,g.jsx)(hA,{children:"Atomwalk HRM On-The-Go transforms tedious HR tasks into quick, seamless interactions. Whether you\u2019re a growing business or managing a large distributed team, Atomwalk HRM has you covered."})]}),yA=n.p+"static/media/HrApp.0eb9df2f1d6d57adc2bd.png",bA=so.div`
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
`,vA=so.div`
  flex: 1;
  padding-right: 20px;
  
  @media (max-width: 768px) {
    padding-right: 0;
  }
`,wA=so.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 10px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,kA=so.p`
  color: #ffb3ff;
  font-size: 1rem;
  margin-bottom: 10px;
`,SA=so.p`
  font-size: 0.9rem;
  color: #ddd;
  margin-bottom: 20px;
`,AA=so.div`
  flex: 1;
  text-align: center;
  margin-top:50px;
  
  img {
    max-width: 110%;
    height: auto;
    border-radius: 12px;
  }
`,jA=()=>(0,g.jsxs)("div",{style:{backgroundColor:"white"},children:[(0,g.jsxs)(bA,{children:[(0,g.jsxs)(vA,{children:[(0,g.jsx)(wA,{children:"Streamline Your HR Processes with ATOMWALK HRM On-The-Go: Attendance, Leave, and Claims Management Simplified "}),(0,g.jsx)(kA,{children:"By Atomwalk"}),(0,g.jsx)(SA,{children:"6 minute read \u2022 October 01, 2024"})]}),(0,g.jsx)(AA,{children:(0,g.jsx)("img",{src:yA,alt:"Task Paralysis Article"})})]}),(0,g.jsx)(xA,{})]}),CA=n.p+"static/media/hr.e13184a1f188a146402d.png",EA=n.p+"static/media/payroll.039b976618946de508d7.png",PA=n.p+"static/media/attendance1.c91a722f5930666fca97.png",RA=n.p+"static/media/onboarding.6125efea4152d41fc3fc.png",OA=n.p+"static/media/empdata.504d86deb99fc409ff66.png",TA=n.p+"static/media/leave-management.8af525284b9c7ca1769c.png",MA=n.p+"static/media/claimmanage.81c59bd374c0f3c4875c.png",zA=n.p+"static/media/exit-process.6c14ce06c14fb114a462.png",IA=n.p+"static/media/performance-management.3d529838ac44380c1f09.png",LA=so.div`
  padding: 110px 20px;
  background-color: #f0ebf7;
  text-align: center;
`,DA=so.h2`
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
`,FA=(so.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,so.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`),NA=so.div`
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
`,BA=so.div`
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
`,_A=so.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,UA=so.p`
  font-size: 1em;
  color: #666;
`,HA=()=>{const e=e=>{window.location.href=`/${e}.html`};return(0,g.jsxs)(LA,{children:[(0,g.jsx)(DA,{children:"Key Features"}),(0,g.jsxs)(FA,{children:[(0,g.jsxs)(NA,{onClick:()=>{e("employeehr")},children:[(0,g.jsx)(BA,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:RA,alt:"Onboarding"})}),(0,g.jsx)(_A,{children:"On-Boarding Process:"}),(0,g.jsx)(UA,{children:"Seamlessly onboard new employees by setting up departments, grades, and HR policies from one place."})]}),(0,g.jsxs)(NA,{onClick:()=>{e("employeehr")},children:[(0,g.jsx)(BA,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:OA,alt:"EmployeeData"})}),(0,g.jsx)(_A,{children:"Employee Data:"}),(0,g.jsx)(UA,{children:"Maintain accurate employee records with the ability to add, update, and delete employee details. Easily manage employee data for better decision-making."})]}),(0,g.jsxs)(NA,{onClick:()=>{e("attendance")},children:[(0,g.jsx)(BA,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:PA,alt:"Attendance"})}),(0,g.jsx)(_A,{children:"Attendance:"}),(0,g.jsx)(UA,{children:"Track employee attendance in real-time, with built-in GPS tracking and the ability to mark attendance remotely."})]}),(0,g.jsxs)(NA,{onClick:()=>{e("leave")},children:[(0,g.jsx)(BA,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:TA,alt:"Reliability"})}),(0,g.jsx)(_A,{children:"Leave Management:"}),(0,g.jsx)(UA,{children:"Handle leave requests with ease. Managers can approve or reject requests, view leave history, and ensure employees stay within allotted time off."})]})]}),(0,g.jsxs)(FA,{children:[(0,g.jsxs)(NA,{onClick:()=>{e("claim")},children:[(0,g.jsx)(BA,{bgColor:"#EFF498",children:(0,g.jsx)("img",{src:MA,alt:"Reliability"})}),(0,g.jsx)(_A,{children:"Claim Management:"}),(0,g.jsx)(UA,{children:"Submit and manage claims such as travel or expense reimbursements. Employees can upload receipts, and managers can review and approve claim"})]}),(0,g.jsxs)(NA,{onClick:()=>{e("payroll")},children:[(0,g.jsx)(BA,{bgColor:"#D99B80",children:(0,g.jsx)("img",{src:EA,alt:"Reliability"})}),(0,g.jsx)(_A,{children:"Payroll:"}),(0,g.jsx)(UA,{children:"Automate payroll processing with integrated features for salary calculations, deductions, and disbursements. Ensure timely and accurate payments."})]}),(0,g.jsxs)(NA,{onClick:()=>{e("appraisal")},children:[(0,g.jsx)(BA,{bgColor:"#F7DAF4",children:(0,g.jsx)("img",{src:IA,alt:"Performance Mangement"})}),(0,g.jsx)(_A,{children:"Performance Mangement System:"}),(0,g.jsx)(UA,{children:"The appraisal system supporting KPI-based evaluations, with self-assessment, manager scoring, and grade normalization for fair, transparent performance reviews and structured reporting."})]}),(0,g.jsxs)(NA,{onClick:()=>{e("employeehr")},children:[(0,g.jsx)(BA,{bgColor:"#F7DADB",children:(0,g.jsx)("img",{src:zA,alt:"Reliability"})}),(0,g.jsx)(_A,{children:"Exit Process:"}),(0,g.jsx)(UA,{children:"Simplify the employee exit process, from resignation submission to final clearance. Ensure smooth offboarding with documented workflows"})]})]})]})},WA=so.div`
  background-color: white;
  color: blue;
  width: 100%;
  /* padding-top: 10px; */
  padding-bottom: 10px;
  /* height: 1472px; */
`,qA=so.div`
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
`,GA=so.div`
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
`,VA=so.div`
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
`,KA=so.div`
display: flex;
align-items: center;
justify-content: left;
gap:20px;
`,JA=so.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 600;
  line-height: 61.2px;
  margin: 0px 0px 16px;
`,YA=so.p`
  color: #454544;
  /* width: 65%; */
  font-size: 21px;
  /* word-wrap: normal; */
  /* line-height: 31.504px; */
  /* margin: 0px 0px 24px; */
  @media (max-width: 768px) {
    width: 100%;
  }
`,QA=so.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 60%;
  line-height: 26px;
  padding: 44px 0px 0px;
`,ZA=so.button`
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
`,XA=so.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`,$A=so.div`
  line-height: 26px;
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`,ej=so.button`
  align-items: center;
  background-color: #6c757d;
  border-radius: 100px;
  color: #fff;
  font-weight: 400;
  padding: 14px 32px;
  text-align: center;
`,tj=()=>{const e=ra();return(0,g.jsxs)(WA,{children:[(0,g.jsx)(qA,{children:(0,g.jsxs)(GA,{children:[(0,g.jsxs)(VA,{children:[(0,g.jsx)(JA,{children:"Atomwalk HRM On-The-Go"}),(0,g.jsx)(YA,{children:"A smart, mobile-first solution for managing employee attendance, leave requests, claims, and real-time location tracking\u2014right from your phone"}),(0,g.jsxs)(KA,{children:[" ",(0,g.jsx)(ZA,{onClick:()=>{window.location.href="/demo.html"},children:(0,g.jsx)(XA,{children:"Request a Demo"})}),(0,g.jsx)(ej,{onClick:()=>{e(-1)},children:(0,g.jsx)(XA,{children:"Back"})})]})]}),(0,g.jsx)(QA,{children:(0,g.jsx)($A,{children:(0,g.jsx)("img",{src:CA,alt:"Pricing Challenge Background"})})})]})}),(0,g.jsx)(Jk,{data:"HR"}),(0,g.jsx)(HA,{}),(0,g.jsx)(sS,{})]})},nj=n.p+"static/media/claim.479c41ec78032b2383c8.png",rj=n.p+"static/media/leave1.09feac747470d0615599.png",ij=n.p+"static/media/hrm_hero_img.b2b560b7a515a331176a.png",oj=so.div`
  padding: 20px;
  background-color: ${e=>e.bgcolor?e.bgcolor:"#f0ebf7"};
  @media (min-width: 768px) {
    padding: 50px;
  }
`,aj=so.div`
  margin-bottom: 40px;
`,sj=so.h1`
  margin-top: 80px;
  font-size: 35px;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,lj=so.div`
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
`,cj=so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`,uj=so.div`
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
`,dj=so.p`
  text-align: center;
  color: #4A90E2;
  font-weight: bold;

`,pj=so.div`
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
`,fj=e=>{let{data:t,bgcolors:n}=e;const r={Claim:[{step:"Expense Item Setup"},{step:"Expense Advance for Employee"},{step:"Claim Expense"},{step:"Approval Of Claim"},{step:"Settlement of Claims"},{step:"Reports & Dashboards"}],Leave:[{step:"Setup Holiday Calendar"},{step:"Leave Dashboard"},{step:"Manage Leave by Employee"},{step:"Manage Leave by Manager"},{step:"Reports & Analysis"}],Payroll:[{step:"Payroll Setup & Controls"},{step:"Generate Monthly Salary"},{step:"Post Salary"}],Attendance:[{step:"Check-in"},{step:"Attendance Dashboard"},{step:"Manage Attendance"},{step:"Weekly Score"}],Appraisal:[{step:"Performance Mangement System"},{step:"Self Appraisal Process "},{step:"Manager Appriasl Process "},{step:"Appriasl Rivew Process and Reports "}],HR:[{step:"On-Boarding"},{step:"Employee Data"},{step:"Exit Process"}],Lead:[{step:"Lead Capture",color:"#4A90E2"},{step:"Lead Tracking",color:"#4A90E2"},{step:"Obtain Customer Management",color:"#4A90E2"},{step:"Lead Lifecycle Management ",color:"#4A90E2"},{step:"Lost Lead Recovery and Management",color:"#4A90E2"}],Campaign:[{step:"Create Campaign",color:"#4A90E2"},{step:"Custom and Default Campaign Template",color:"#4A90E2"},{step:"Response interface",color:"#4A90E2"}],Partner:[{step:" Add Partner",color:"#4A90E2"},{step:"Order Information Tracking",color:"#4A90E2"},{step:"Multi-Report Generation",color:"#4A90E2"}],Customer:[{step:"Customer Integration",color:"#4A90E2"},{step:"Order Management",color:"#4A90E2"},{step:"Process-wise Order Management (Resale and Cross-Selling)",color:"#4A90E2"},{step:"Ticket Tracking (AMC Tracking)",color:"#4A90E2"},{step:"Reports and Dashboards",color:"#4A90E2"}],UserManagement:[{step:"User Group Setup",color:"#4A90E2"},{step:"User Profile Creation",color:"#4A90E2"},{step:"Update/ Delete Profile",color:"#4A90E2"}],EquipmentManagement:[{step:"Equipment Setup",color:"#4A90E2"},{step:"Booking",color:"#4A90E2"},{step:" Cancellation",color:"#4A90E2"}],EquipmentMaintenance:[{step:"preventive Maintenance",color:"#4A90E2"},{step:"Emergency maintenance",color:"#4A90E2"}],ReportandDashboard:[{step:" Usage Trends",color:"#4A90E2"},{step:"Audit ready records",color:"#4A90E2"},{step:"Data purge ",color:"#4A90E2"},{step:"Analytics",color:"#4A90E2"}],UserManagements:[{step:"Admin",color:"#4A90E2"},{step:"Manager",color:"#4A90E2"},{step:"User",color:"#4A90E2"}],LabProcess:[{step:"Add Equipment & Inventory Items",color:"#4A90E2"},{step:"Document Setup",color:"#4A90E2"},{step:"Experiment Workflow (Activity) Creation",color:"#4A90E2"},{step:"Quality Management",color:"#4A90E2"}],LabExperiment:[{step:"Creation of Lab Experiment Project ",color:"#4A90E2"},{step:"Lab Project Objective Defination",color:"#4A90E2"},{step:"Experiment Steps (Activity) Management",color:"#4A90E2"}],SalesLifecycleService:[{step:"Quotation/Sales Order",color:"#4A90E2"},{step:"Sales Invoice",color:"#4A90E2"},{step:"Payment Management",color:"#4A90E2"}],Sales:[{step:"Quotation/Sales Order",color:"#4A90E2"},{step:"Work Order Creation (Project)",color:"#4A90E2"},{step:"Sales Invoice",color:"#4A90E2"},{step:"Delivery Chalan",color:"#4A90E2"},{step:"Shipment Details",color:"#4A90E2"},{step:"Payment Management",color:"#4A90E2"}],Procurement:[{step:"Supplier Identification",color:"#4A90E2"},{step:"Purchase Order Creation",color:"#4A90E2"},{step:"Order-In",color:"#4A90E2"},{step:"Return Handling",color:"#4A90E2"},{step:"Payable Process Tracking",color:"#4A90E2"}],Compliance:[{step:"E-Way Bill",color:"#4A90E2"},{step:"E-Invoice",color:"#4A90E2"},{step:"GST",color:"#4A90E2"},{step:"TDS",color:"#4A90E2"}],Report:[{step:"Sales Report",color:"#4A90E2"},{step:"Procurement Report",color:"#4A90E2"},{step:"GST",color:"#4A90E2"},{step:"TDS",color:"#4A90E2"}],AnnualMaintenance:[{step:"Add and Update AMC Details",color:"#4A90E2"},{step:"View All AMC Records",color:"#4A90E2"}],"Work Order":[{step:"Product Category",color:"#4A90E2"},{step:"Inventory Setup",color:"#4A90E2"},{step:"Equipment Setup",color:"#4A90E2"},{step:"Document Setup",color:"#4A90E2"},{step:"Activity Creation",color:"#4A90E2"},{step:"Creation of Process",color:"#4A90E2"}],"Project Management":[{step:"Project/Work Order Creation",color:"#4A90E2"},{step:"User Activity Management",color:"#4A90E2"},{step:"Project Management",color:"#4A90E2"}],"Report & Dashboard":[{step:"Activity Dashboard",color:"#4A90E2"},{step:"Project Dashboard",color:"#4A90E2"},{step:"Resource Utilisation",color:"#4A90E2"}]},o=r[t]||r["Work Order"]||r["Project Management"]||r["Report & Dashboard"]||[],a=ra(),s=ta();return(0,g.jsxs)(oj,{bgcolor:n,children:[(0,g.jsxs)(sj,{children:["Process Flow for ",t]}),(0,g.jsx)(aj,{children:(0,g.jsx)(lj,{style:{backgroundColor:"#ffffff"},children:(0,g.jsx)(cj,{children:o.map(((e,t)=>(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(uj,{onClick:()=>(e=>{a(`${s.pathname}?${e+1}`)})(t),children:(0,g.jsx)(dj,{children:e.step})}),t<o.length-1&&(0,g.jsx)(pj,{})]},t)))})})})]})},mj=(n.p,n.p+"static/media/check_mark.0e730ab2b5bde0948106.png");const hj=n.p+"static/media/img1.db8c904dcae430a66a73d8526e71a235.svg";const gj=n.p+"static/media/add_claim_img.9a055c2bba7295dac45d64bb04a04aa7.svg";const xj=n.p+"static/media/emp_advance.47f2f953acff90307e031575f25a4aa3.svg";const yj=n.p+"static/media/approve_claim.1ec6d1911ec4293f92b19cff055accd6.svg";const bj=n.p+"static/media/sattle_claim.db01cb0fc07cd07f6f46644e1d54b56c.svg";const vj=n.p+"static/media/expense_claim.fe819c5f6fed879968c2f6505a935b16.svg";const wj=n.p+"static/media/holiday_calender.0356f141e6752176e65622edda7c9c42.svg";const kj=n.p+"static/media/leave_dashboard.364f838500dbe22de94eb7462c9bc5c5.svg";const Sj=n.p+"static/media/add_leave.41af44048f7af19e55b89ade3f692bcf.svg";const Aj=n.p+"static/media/approval_leave.2d0fcfea51af1264405792a096780307.svg";const jj=n.p+"static/media/leave_report.99de12c7d472ed6f47e7afdba34e86cc.svg";const Cj=n.p+"static/media/payroll_setup.27c03a07aabe3de8e5f5c49e11a0f209.svg";const Ej=n.p+"static/media/appraisal_setup.8d56db0e9680f2c79eaf4f5818b62515.svg";const Pj=n.p+"static/media/onboarding.c70afc83fb95b86ef57b12a3079b01bd.svg";const Rj=n.p+"static/media/employeeData.80b3a11ec9cabbd9b54af6eadca1b988.svg";const Oj=n.p+"static/media/exit_process.51b811c4d0e34efbe01988ecefd2afa0.svg";const Tj=n.p+"static/media/payroll-seup.5ac3bdff9f261cbfa49d54b17fa60796.svg";const Mj=n.p+"static/media/generate-salary.941e7229b7419bc7b30da4d1bbf66986.svg";const zj=n.p+"static/media/post-salary.38b58bb0e0d588485e9492fddd098bea.svg";const Ij=n.p+"static/media/appraisal-setup-feature.251253d252bccb667d40f76d15e4f873.svg";const Lj=n.p+"static/media/self-appraisal.bb994ab17bfb97202c339ef0502301f2.svg";const Dj=n.p+"static/media/emp-appraisal.ec5ebcfbd25b2cf468604114605b8d75.svg";const Fj=n.p+"static/media/manager-evaluation.b1215000c57ff19889439ffeb81168d6.svg";const Nj=n.p+"static/media/check-in.35e76b5d8141b8b7ec1e2ba2e5fae5e9.svg";const Bj=n.p+"static/media/attendance-dashboard.9fc9346fd1292914e1ab95e5539b7da6.svg";const _j=n.p+"static/media/emp-attendance.4aedfc0057e9b1ec00412f77e3d0fe56.svg";const Uj=n.p+"static/media/WeeklyScore.3382a9fb5c88535bb2e21e7f6fae09c3.svg",Hj=so.div`
  width: 100%;
  height: 100%;
`,Wj=so.div`
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
`,qj=so.div`
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
`,Gj=so.div`
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
`,Vj=so.div`
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
`,Kj=e=>{let{data:t}=e;const n="Claim"===t?[{title:"Simplify Claim Expense Item Setup",subtitle:"Efficiently manage and control Expense Items with Service Item category setup.",description:"Define Service Item Categories to streamline Expense Items, giving employees a quick selection process for claim submissions. This setup enables you to capture GST Applicability, Submit of Expense Document Applicability, Limits for Approval, etc., to simplify and streamline your Claim Management Process.",benefits:["Define Service Item Categories","Flexible Expense Item Setup","Analysis of expense based on expense category/Item"],imageSrc:hj,imageAlt:"Expense Setup",imgPosition:"left"},{title:"Employee Advance Tracking and Expense Claim Offset Against Advance",subtitle:"Employee Advance upload, tracking, and history of offset against Expense Claims.",description:"Manage Employee expense advance and efficiently track advance offset against each claim, offering a clear view of balances and outstanding advance amount. Enables decision-making process for effective advance amount.",benefits:["Advance Tracking","Clear offset records with claim details"],imageSrc:xj,imageAlt:"Advance",imgPosition:"right"},{title:"Simplified Claim Expenses by Employee",subtitle:"Submit and track expense claims easily, anytime, anywhere.",description:"Employee can submit expense claims by selecting an Expense item, adding project details if needed, and uploading supporting documents like bills and receipts. The mobile app feature allows employee to capture and submit receipts instantly, making the process faster and more efficient for both employee and approval & settlement process for company on real-time basis.",benefits:["Simple Claim Submission","Upload Supporting Documents","Mobile-Friendly Convenience, Instant Receipt Capture","Expense auto linkage to projects and efficient project margin tracking"],imageSrc:gj,imageAlt:"Add Claim",imgPosition:"left"},{title:"Smart Claim Flow for Quick, Transparent Approvals",subtitle:"Automated workflows simplify review and referral based on approval limit setup.",description:"Submitted claims are automatically routed to managers for review, with options to approve, reject, or send back for clarification. The system verifies manager approval authority based on grade and approval limits, forwarding claims to a higher-level manager if needed. This process maintains digital records for easy tracking and transparent decision-making. Approval process is enabled through Mobile app for real-time approval and quick settlement process.",benefits:["Flexible Review/Approval Flows","Approval limits based on Amount","Anytime, anywhere approval for speedy settlement"],imageSrc:yj,imageAlt:"Advance Tracking Icon",imgPosition:"right"},{title:"Accurate and Streamlined Claim Settlements",subtitle:"Efficient settlement process with auto flow of data to accounts and linked projects.",description:"Once approved, claims move to the settlement phase where user can view all claims and advance records side by side for easy and effective settlement processing. The screen provides direct access to claim details and attached documents, with a bulk settlement feature to handle multiple claims efficiently. This seamless process with Accounts and Project management modules.",benefits:["Clear Claim View","Direct Document Access","Bulk Settlement Option","Reliable Processing with auto Account ledger processing"],imageSrc:bj,imageAlt:"Settle Claim",imgPosition:"left"},{title:"Efficient Dashboard to Track All Expense Items",subtitle:"Instant insights on claim status and trends.",description:"The Expense Claim Dashboard provides graphical charts view for claim status and monthly trends, helping employee/Manager track claims at a glance. Extensive filter criteria based on expense category, expense item, departments, etc., for analysis and managing your expenses in a better way.",benefits:["Graphical Overviews with real-time update","Extensive Filter criteria for reports","Download reports in PDF/XLS"],imageSrc:vj,imageAlt:"Post Accounting",imgPosition:"right"}]:"Leave"===t?[{title:"Location-Wise - Simplified Management of Your Holiday Calendar",subtitle:"Easy and exhaustive way to take care of your complex organisational need of Holiday management (Single/Multi location).",description:"Manage Holiday setup digitally for your business for each Year across single/multiple locations. Holiday setup supports Mandatory and Optional holidays for each location. Supports Multiple leave types and yearly limit for each leave type. Setup enables better Project execution planning for the organisation and provides transparency for the employee to plan/utilise their Leave.",benefits:["Easy Exhaustive Setup across Single/Multi Location","Supports Audit trails and track changes in setup","Optional Holiday setup enables for each location","Transparent and accessible by all users/employees"],imageSrc:wj,imageAlt:"Holiday Calendar",imgPosition:"left"},{title:"Dashboard for Complete Leave Overview",subtitle:"Easily track, manage, and plan your time off/utilisation of Leave.",description:"Employee can view detailed summary dashboard of their leave status, including total applied, approved, and pending leave categorized by leave type. Month-wise trend analysis enables the Manager to manage risk at project planning level. The system also provides a year-wise holiday list which is accessible through Mobile app, making it simple to manage leave information and plan time off effectively. Leave details are shared with Billing/Payroll modules seamlessly to eliminate any processing errors.",benefits:["Comprehensive Overview, Detailed for each leave type","Trend Analysis for better planning and risk management","Accessible from Mobile app","Shared with Payroll and Project Management modules seamlessly"],imageSrc:kj,imageAlt:"Leave Dashboard",imgPosition:"right"},{title:"Apply Leave from Anywhere Anytime",subtitle:"Simple Leave Application: easy to apply and cancel from anywhere & anytime.",description:"Employee can apply for multiple types of leaves like Earned Leave, Work From Home, and Loss of Pay through both web and mobile apps. On submitted, the leave request automatically moves to manager's dashboard for approval, streamlining the process.",benefits:["Both Web and Mobile Convenience","Multiple leave types","Easy Application process with Holiday List Integration, to alter users"],imageSrc:Sj,imageAlt:"Leave Application",imgPosition:"left"},{title:"Swift Leave Approvals from Anywhere Anytime",subtitle:"Approve/Reject Leave Requests with Ease and Precision from Approver Dashboard.",description:"Managers can easily filter leave requests by individual employee or leave type, providing a clear view of total leave applied, approved, and pending for each employee. This organized approach allows for efficient navigation and prompt action. Managers can review details before making decisions, with a mandatory remark field to ensure clear communication with employees during the approval or rejection process.",benefits:["Organized and Filter View","Comprehensive Overview","Streamlined Approval Process","Efficient Leave Approval","Mobile Convenience","Approval History"],imageSrc:Aj,imageAlt:"Leave Approval",imgPosition:"right"},{title:"Organized Leave Insights for Efficient Management",subtitle:"Gain Complete Insights into Leave Patterns and Usage",description:"Managers can sort leave requests by individual employee or leave type, providing a clear and organized view. They also have access to a comprehensive annual leave report that includes all leave details across departments. This feature ensures efficient record-keeping and supports transparent leave management, helping managers make informed decisions.",benefits:["Informed Decision-Making","Exportable Reports","Leave Balances at a Glance","Customizable Reports"],imageSrc:jj,imageAlt:"Leave Reports",imgPosition:"left"}]:"Payroll"===t?[{title:"Flexible and Compliant Payroll Management",subtitle:"Configurable Salary structure with predefined integrated TDS/PT/PF/Gratuity calculation for seamless employee compensation.",description:"Our HR management offers a comprehensive system for managing employee salary structures, and compliance setup in accordance with government regulations. Companies can create tailored salary structures for different employee grades. The platform also facilitates setting up Provident Fund, Gratuity, Employee State Insurance (ESI), and TDS, PT tax parameters, ensuring full compliance and transparency in payroll management. In addition to this, any other salary components like Variable Pay and custom deductions can be configured in the system, making it highly flexible for any complex scenario.",benefits:["Configurable pay scale grades","Configurable salary structures with formula builder","Customizable payslip design","Dynamic Salary Structures to include compliance like PF, Gratuity, ESI, PT, and TDS","Audit trails for Setup control","Contract Rate setup for contract employee"],imageSrc:Tj,imageAlt:"Payroll & Compliance",imgPosition:"left"},{title:"Streamlined Monthly Salary Generation with Real-Time Error Validation",subtitle:"Seamless access to Attendance data for accurate and quick Payroll processing.",description:"Our payroll processing tool enables quick salary generation while minimizing errors through integration with attendance and leave data. This facilitates managers with accurate data for decision-making. The system supports importing employee data from Attendance, HRM, and Leave Management modules for Payroll processing. Along with the full salary computation, the payroll system integrates with Payment Disbursement to enable online transfer, checks with employee pay account details for direct salary disbursement through net banking etc.",benefits:["Accurate Payroll Generation","Reduced Manual Errors","Integrated with Attendance and Leave","Direct Salary Disbursement"],imageSrc:Mj,imageAlt:"Salary Process",imgPosition:"right"},{title:"Accurate Accounting Entries for Financial Clarity",subtitle:"Ensuring error-free records with detailed reporting.",description:"After generating salaries, the HR manager creates accounting entries to maintain precise financial records. The system displays all payable heads, showing amounts already posted and pending. Managers can download detailed reports in PDF or Excel formats and include specific posting remarks for transparency, ensuring a well-documented and accurate accounting process.",benefits:["Precise Accounting Entries","Payable Overview","Detailed Reporting"," Transparent Documentation","Error-Free Financial Management"],imageSrc:zj,imageAlt:"Post Salary ",imgPosition:"left"}]:"HR"===t?[{title:"Job Offer Records - Onboarding Process",subtitle:"Smooth Onboarding and Integration of New Employees into the Organization",description:"Enables you to keep the Job offer records with unique reference ID for easy traceability and managing the offer letter and onboarding process. Custom templates for offer and joining letters allow HR to handle onboarding smoothly and efficiently. Provides data for analysis for the recruitment process.",benefits:["Thorough Appointee Management","Link Salary structure to include CTC details in offer letter","Dynamic Offer, Appointment Letters","One-click employee data creation from offer details"],imageSrc:Pj,imageAlt:"Onboarding",imgPosition:"left"},{title:"Complete Employee Lifecycle Management",subtitle:"Centralized Employee Data Management - with Multi Location.",description:"This module enables streamlined employee data management, allowing HR and Employee managers to sort, search, and filter employee records by various criteria like Department and Grade for easy analysis and reports. Both permanent and contract employees can be managed with different salary structures. All lifecycle stages like onboarding process, initiating separation processes, completion of probation period, etc., can be managed smoothly for each employee data by the authorized manager. Optional fields for documents and bank details ensure comprehensive record-keeping while simplifying management.",benefits:["Department and Grade structure - for data segregation and easy management.","Automatic ID Generation for Employee, and Contract Employee.","Centralized Information - Data Accuracy and Integrity","Compliance and Record-Keeping - integrated with document management system.","Manage Employee Billing Rates","Contract Employee Management","Audit Tracing for employee data. Supports bulk record uploads from existing system."],imageSrc:Rj,imageAlt:"Employee data",imgPosition:"right"},{title:"Streamlined Exit Process with Customized Setup",subtitle:"Ensuring Smooth Exit with Assets and KT Transfer",description:"With customized exit process setup, you can track and complete all the steps needed to be done by the employee before he/she exits the system. This can be knowledge transfer, handover of assets, exit interview, to name a few. Employee can initiate the separation process, which can be managed by approval/review flow.",benefits:["Customized exit process setup","Smooth Transitions and completion of activity by departments.","Facility to capture document evidence at each step."],imageSrc:Oj,imageAlt:"Exit Process",imgPosition:"left"}]:"Appraisal"===t?[{title:"Efficient Appraisal System for Accurate Assessments",subtitle:"Completely Configurable Appraisal KPI Structure Definition.",description:"Highly flexible and configurable appraisal structure to set up your KPI targets for each employee grade level. Supports and is configurable for quarterly, half-yearly, and yearly appraisal cycles. Self-assessment, and provides scores for key performance indicators (KPIs), and submits the appraisal to the Employee manager, who evaluates and gives scores for each KPI. Review process by Reviewer to normalize the grades for an appraisal cycle for a particular employee grade. This structured process ensures accurate and fair evaluations, fostering transparency in performance-based benefits.",benefits:["Flexible Appraisal structure with KPI weightage.","Historical appraisal records reference for employee improvement and training plan.","Provision to upload supporting documents.","Structured Process, Fair Performance Assessment"],imageSrc:Ij,imageAlt:"Holiday Calendar",imgPosition:"left"},{title:"Self-Evaluation for Each KPI Goal",subtitle:"Transparent and KPI Goals for Each Cycle.",description:"Employee can self-initiate and give his own score. Document evidence, if required, can be uploaded. Historical appraisal data for earlier cycles is accessible.",benefits:["Overall score is rule-based calculation","Seamlessly flows to employee manager","Historical Appraisal Data access"],imageSrc:Lj,imageAlt:"Leave Dashboard",imgPosition:"right"},{title:"Manager Evaluation for Each KPI Goal.",subtitle:"Flexible Structure and Score for Each KPI.",description:"Manager evaluates and provides the score for each KPI Goal. The final score is auto-calculated based on rule setup. After providing the score, Manager sends the appraisal to the employee for final sign-off and remarks.",benefits:["Overall score for Manager is rule-based calculation","Seamlessly flows between employee and manager","Historical Appraisal Data access"],imageSrc:Fj,imageAlt:"Leave Application",imgPosition:"left"},{title:"Review Process for Grade Evaluation",subtitle:"Normalization of Appraisal Grades by Reviewer.",description:"Normalization of appraisal grades by Reviewer at each employee grade level. Performance-linked salary components (like variable pay) evaluation process. Reports for each appraisal cycle and employee grade levels.",benefits:["Review process","Reports for performance-based salary components.","Customizable Reports"],imageSrc:Dj,imageAlt:"Leave Approval",imgPosition:"right"}]:"Attendance"===t?[{title:"Attendance- Anytime- Anywhere",subtitle:"Streamlined Check-In with Location Tracking and Daily Task Insights.",description:"Our attendance system combines flexibility and precision, allowing employees to mark their workdays from the web or mobile app. The mobile app's check-in and check-out features are equipped with real-time location tracking, automatically capturing the exact location, date, and time to ensure accurate and efficient attendance records. Additionally, during check-out, employees are prompted to fill out a remarks field, providing a brief summary of their day\u2019s tasks. This feature enables managers to gain valuable insights into daily productivity, fostering accountability and enhancing team management.",benefits:["Accurate Time & Location Tracking","Enhanced Flexibility"," Improved Productivity Monitoring","Efficient Reporting"],imageSrc:Nj,imageAlt:"Check-in",imgPosition:"left"},{title:"Stay Informed, Stay Organized",subtitle:"Dynamic Calendar View for Attendance, Holidays, and Leave Management.",description:"Our attendance system offers a dynamic calendar view that allows employees to easily track their attendance status, view holiday lists, and monitor their leave days. After checking in and out, employees can submit their attendance records weekly for manager review, ensuring accountability and streamlined communication. This feature not only keeps employees informed but also helps managers efficiently oversee attendance and leave management, fostering a productive work environment.",benefits:["Weekly Submission for Review","Dynamic Calendar View"],imageSrc:Bj,imageAlt:"Attendance View",imgPosition:"right"},{title:"Comprehensive Attendance Insights",subtitle:"Efficient Review and Approval for Enhanced Team Productivity.",description:"Our attendance management system provides managers with a complete overview of their team\u2019s attendance records. Once an employee submits their attendance, it is forwarded for review, ensuring accountability. If an employee encounters issues completing the process, managers can seamlessly update attendance for previous days through the manager portal, including remarks for full transparency. With access to detailed attendance records, managers can also update check-in and check-out times with geo-location data as needed. This system supports weekly approvals, streamlining the management of attendance and promoting effective team oversight.",benefits:["Streamlined Review Process","Flexibility in Attendance Management","Transparency with Remarks","Geo-Location Updates"," Weekly Approval Workflow"],imageSrc:_j,imageAlt:"Approval Attendance",imgPosition:"left"},{title:"Transform Task Management & Performance Tracking with Atomwalk HRM",subtitle:"Empower your team with clear task assignments and insightful performance evaluations.",description:"With Atomwalk Technology HRM, task allocation and performance tracking become seamless. Managers can easily assign weekly tasks, monitor progress, and assess employee performance, all within a structured framework. Employees are able to track their task completion and attendance efficiently, while managers have a clear overview of their team's weekly outputs. The Weekly Score Dashboard offers both employees and managers a comprehensive view of performance scores, with insightful graphical charts to help identify trends and growth opportunities. This feature creates a transparent and engaging performance management system, driving organizational success.",benefits:["Allocate up to three tasks per week, with detailed tracking and notes.","Employees can mark tasks complete and submit weekly attendance in one step.","Managers can review, approve/reject submissions, and assign performance ratings.","Personalized performance scores and interactive charts for both employees and managers.","Graphical performance scores highlight trends, growth, and team achievements."],imageSrc:Uj,imageAlt:"Weekly Score Dashboard",imgPosition:"right"}]:[{title:"Complete Employee Lifecycle Management",subtitle:"Centralized Employee Data Management - with Multi Location.",description:"This module enables streamlined employee data management, allowing HR and Employee managers to sort, search, and filter employee records by various criteria like Department and Grade for easy analysis and reports. Both permanent and contract employees can be managed with different salary structures. All lifecycle stages like onboarding process, initiating separation processes, completion of probation period, etc., can be managed smoothly for each employee data by the authorized manager. Optional fields for documents and bank details ensure comprehensive record-keeping while simplifying management.",benefits:["Department and Grade structure - for data segregation and easy management.","Automatic ID Generation for Employee, and Contract Employee.","Centralized Information - Data Accuracy and Integrity","Compliance and Record-Keeping - integrated with document management system.","Manage Employee Billing Rates","Contract Employee Management","Audit Tracing for employee data. Supports bulk record uploads from existing system."],imageSrc:Cj,imageAlt:"Payroll & Compliance",imgPosition:"left"},{title:"Job Offer Records - Onboarding Process",subtitle:"Smooth Onboarding and Integration of New Employees into the Organization",description:"Enables you to keep the Job offer records with unique reference ID for easy traceability and managing the offer letter and onboarding process. Custom templates for offer and joining letters allow HR to handle onboarding smoothly and efficiently. Provides data for analysis for the recruitment process.",benefits:["Thorough Appointee Management","Link Salary structure to include CTC details in offer letter","Dynamic Offer, Appointment Letters","One-click employee data creation from offer details"],imageSrc:Ej,imageAlt:"Salary Process",imgPosition:"right"},{title:"Streamlined Exit Process with Customized Setup",subtitle:"Ensuring Smooth Exit with Assets and KT Transfer",description:"With customized exit process setup, you can track and complete all the steps needed to be done by the employee before he/she exits the system. This can be knowledge transfer, handover of assets, exit interview, to name a few. Employee can initiate the separation process, which can be managed by approval/review flow.",benefits:["Customized exit process setup","Smooth Transitions and completion of activity by departments.","Facility to capture document evidence at each step."],imageSrc:Ej,imageAlt:"Payslip Generation",imgPosition:"left"}],r=ta();return(0,i.useEffect)((()=>{const e=r.search.match(/\?(\d+)/),t=e?parseInt(e[1],10):NaN;console.log(t,"Step value parsed from URL");const n=isNaN(t)?0:700+700*(t-1);n>0&&window.scrollTo({top:n,behavior:"smooth"})}),[r.search]),(0,g.jsx)(Hj,{children:n.map((e=>(0,g.jsx)(Wj,{children:"left"===e.imgPosition?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(qj,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,g.jsxs)(Vj,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(Gj,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:mj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Vj,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(Gj,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:mj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]}),(0,g.jsx)(qj,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},Jj=so.div`
  background-color: white;
  color: blue;
  width: 100%;
  /* padding-bottom: 10px; */
`,Yj=so.div`
  height: 472px;
  background-color: white;
  color: blue;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
  }
`,Qj=so.div`
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
`,Zj=so.div`
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
`,Xj=so.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 600;
  line-height: 61.2px;
  margin: 0px 0px 16px;
`,$j=so.p`
  color: #454545;
  /* width: 65%; */
  font-size: 21px;
  /* word-wrap: normal; */
  /* line-height: 31.504px;
  margin: 0px 0px 24px; */

  @media (max-width: 768px) {
    width: 100%;
  }
`,eC=so.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 60%;
  line-height: 26px;
  padding: 44px 0px 0px;
`,tC=so.div`
display: flex;
align-items: center;
justify-content: left;
gap:20px;
`,nC=so.button`
  align-items: center;
  background-color: #aa00ea;
  border-color: #f3a3ff;
  border-radius: 100px;
  border-style: solid;
  border-width: 1.6px;
  color: #fff;
  font-weight: 400;
  padding: 14px 32px;
  text-align: center;
`,rC=so.button`
  align-items: center;
  background-color: #6c757d;
  border-radius: 100px;
  color: #fff;
  font-weight: 400;
  padding: 14px 32px;
  text-align: center;
`,iC=so.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`,oC=so.div`
  line-height: 26px;
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`,aC=()=>{const e=ta(),t="/claim.html"===e.pathname,n="/leave.html"===e.pathname,r="/employeehr.html"===e.pathname,o="/payroll.html"===e.pathname,a="/attendance.html"===e.pathname,s="/appraisal.html"===e.pathname,l=(0,i.useMemo)((()=>t?{title:"Effortless Claim Management for Your Organization",description:"Streamline your expense claim process with fast approvals, secure uploads, and real-time tracking all in one place.",image:nj,data:"Claim"}:n?{title:"Simplified Leave Management for Employees",description:"Manage leave requests, approvals, and balances with ease, all in one centralized system.",image:rj,data:"Leave"}:r?{title:"Welcome to Employee Management",description:"Explore our various modules designed to simplify your HR processes.",image:ij,data:"HR"}:a?{title:"Welcome to Employee Attendance",description:"Explore our various modules designed to simplify your HR processes.",image:ij,data:"Attendance"}:o?{title:"Accurate and Automated Payroll Solutions",description:"Simplify payroll with Atomwalk HRM's automated system, handling salaries, deductions, and taxes with accuracy. Real-time integration ensures seamless reporting and easy payslip access for employees",image:ij,data:"Payroll"}:s?{title:"Performance Mangement",description:"The appraisal system supporting KPI-based evaluations, with self-assessment, manager scoring, and grade normalization for fair, transparent performance reviews and structured reporting.",image:ij,data:"Appraisal"}:{title:"Welcome to Employee Management",description:"Explore our various modules designed to simplify your HR processes.",image:ij,data:"HR"}),[t,n,r]),c=ra();return(0,g.jsxs)(Jj,{children:[(0,g.jsx)(Yj,{children:(0,g.jsxs)(Qj,{children:[(0,g.jsxs)(Zj,{children:[(0,g.jsx)(Xj,{children:l.title}),(0,g.jsx)($j,{children:l.description}),(0,g.jsxs)(tC,{children:[" ",(0,g.jsx)(nC,{onClick:()=>{window.location.href="/demo.html"},children:(0,g.jsx)(iC,{children:"Request a Demo"})}),(0,g.jsx)(rC,{onClick:()=>{c(-1)},children:(0,g.jsx)(iC,{children:"Back"})})]})]}),(0,g.jsx)(eC,{children:(0,g.jsx)(oC,{children:(0,g.jsx)("img",{src:l.image,alt:"Page Background"})})})]})}),(0,g.jsx)(fj,{data:l.data}),(0,g.jsx)(Kj,{data:l.data})]})},sC=n.p+"static/media/Mockup5-Lead.780e9b50bcaba7281d4d.png",lC=n.p+"static/media/Customermage-removebg-preview.fa8bcba86c44de2d5172.png",cC=n.p+"static/media/Pattner.7901d1ba5f15d16330b0.png",uC=n.p+"static/media/Campain.d60d77c952a36990bf12.png",dC=n.p+"static/media/amc.ac39eca463cd0e803f59.png";n.p;const pC=n.p+"static/media/CrmMocups2.42b85b9b507a83b24f4f9c0bfbf25f57.svg";const fC=n.p+"static/media/CrmMocups.52e8c70046b9976399c8e1c31b83bd6f.svg";const mC=n.p+"static/media/campain1.b4122632766e92f2daa05c2b20181412.svg";const hC=n.p+"static/media/campign2.4055d8996e265fffaea8bd04cab1f886.svg";const gC=n.p+"static/media/campgin3.0c090f798a93d327dc900211307c7535.svg";const xC=n.p+"static/media/Customerdata1.12de03887127425983f0cac252c40bde.svg";const yC=n.p+"static/media/odermanagement.645b8d26cc93f21e5cc84ea51a10f90f.svg";const bC=n.p+"static/media/Amc1.6c5c29e5b88c8a2d9da02d8566ebd3e5.svg";const vC=n.p+"static/media/Reportanddashboard.e997122b30e0e2d1fe8f2fe3540400d9.svg";const wC=n.p+"static/media/Chanelpatner.ecb62a43826376f28ce51dcbbe78d7ef.svg";const kC=n.p+"static/media/pattner.9875232d127a10a1ab83e1f81f0144c5.svg";const SC=n.p+"static/media/multyreport.6931593f994c35d568aebf74adbd0dad.svg",AC=so.div`
  width: 100%;
  height: 100%;
`,jC=so.div`
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
`,CC=so.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  img {
    width: 100%;
    /* max-width: 500px; */
  }

  @media (min-width: 768px) {
    width: 40%;
  }
`,EC=so.div`
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
    width: 400px;
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
`,PC=so.div`
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
`,RC=e=>{let{data:t}=e;console.log(t,"  dcjcnd");const n="leadManagement"==t?[{title:"Streamlined Lead Engagement",subtitle:"Effortless Management for Higher Conversions",description:'This fully integrated dashboard in the Atomwalk CRM application provides users with an intuitive workspace to access and manage lead details effortlessly. Users can quickly add new leads, view a comprehensive lead list, and upload data in bulk to keep information up-to-date. Additionally, tasks can be assigned to specific leads for timely follow-ups, while a detailed Lead Performance Dashboard offers insight into engagement metrics and conversion progress. The "Add Product Interest" feature lets users associate specific product interests with each lead, enhancing personalization and targeted engagement. With these functionalities in one place, the Atomwalk CRM helps optimize lead nurturing and boosts overall conversion rates.',benefits:["Centralized Lead Insights","Seamless Team Collaboration","Optimized Engagement Strategies"],imageSrc:pC,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Manage Leads with Ease",subtitle:"Fast and Efficient Lead Management Process",description:"Empower your sales team to add and manage leads effortlessly from their mobile devices or desktops. Track the status of leads in real-time, and streamline follow-ups with our intuitive lead management system.",benefits:["Real-Time Lead Tracking","Automated Follow-ups","Bulk Lead Uploads"],imageSrc:fC,imageAlt:"Lead Management",imgPosition:"left"},{title:"Streamline Lead Conversions",subtitle:"Quick and Transparent Lead Conversion Process",description:"Sales managers can track lead progress, assign tasks, and update lead status in real-time. Our streamlined lead conversion process ensures that opportunities are never missed, providing transparency and timely action for maximum conversions.",benefits:["Task Assignment","Pipeline Status Updates","Conversion Tracking"],imageSrc:pC,imageAlt:"Lead Conversion",imgPosition:"right"},{title:"Centralize Lead Management for Higher Conversions",subtitle:"Efficient and Transparent Lead Conversion Process",description:"Sales managers can seamlessly track lead history, assign tasks, and update lead statuses in real-time. With our centralized lead management system, you can prioritize leads, ensure timely follow-ups, and never miss an opportunity to convert, all while maintaining full transparency throughout the process.",benefits:["Real-Time Task Assignment","Lead Prioritization","Conversion Tracking"],imageSrc:pC,imageAlt:"Lead Conversion Process",imgPosition:"left"},{title:"Get Complete Context on Every Lead",subtitle:"Personalized and Informed Lead Follow-ups",description:"To maximize the potential of lost leads, implement follow-up automation to re-engage them after a set period, such as three months, with \u201cwin-back\u201d campaigns that offer special promotions or address any unmet needs. Keep detailed records of why leads were marked as lost (e.g., budget constraints, timing, lack of interest) to enable tailored future follow-up strategies. Design re-engagement workflows in the CRM to tag lost leads, retarget them, and monitor for any shifts in their engagement levels. Analyzing lost lead data periodically can reveal common reasons for drop-off, providing insights to refine marketing and sales approaches. Maintain lost leads as a distinct segment in the CRM, allowing for strategic re-engagement with new products or services, ensuring they stay accessible for potential future opportunities.",benefits:["Comprehensive Lead History","Cross-Departmental Integration","Informed Outreach"],imageSrc:pC,imageAlt:"Lead Context",imgPosition:"right"}]:"campaignManagement"==t?[{title:"Create and Launch Campaigns Effortlessly",subtitle:"Effortless Campaign Management - Advertise Smarter with a Few Simple Clicks",description:"The \u201cCreate Campaign\u201d module in Atomwalk\u2019s CRM simplifies the process of advertising to your client base. Define your campaign name, target customer groups, set schedules, and customize message content\u2014all from one streamlined interface. Whether you\u2019re launching a one-time campaign or scheduling recurring ones, this tool makes it intuitive and efficient.",benefits:["Targeted outreach","Scheduling Flexibility ","User-Friendly Interface"],imageSrc:mC,imageAlt:"Campaign Management Dashboard",imgPosition:"left"},{title:"Design Campaigns That Reflect Your Brand",subtitle:"Empower Your Communication with Flexible Templates",description:"Atomwalk allows you to create fully customizable campaign templates or use pre-designed system templates for faster setup. With options to add headers, footers, and visuals, these templates help you maintain branding consistency while driving leads effectively. You can also choose a background color or image to align with your business theme, ensuring your communication stands out.",benefits:["Tailored templates","Pre-built options","Dynamic content"],imageSrc:hC,imageAlt:"Campaign Performance Tracking",imgPosition:"right"},{title:"Engage Customers, Track Responses",subtitle:"Interactive Buttons for Real-Time Client Feedback",description:"The \u201cResponse View\u201d feature enhances customer engagement by adding interactive response buttons and voting options directly to your campaigns. Whether it\u2019s a \u201cYes\u201d or \u201cNo\u201d decision, or a custom voting setup, this feature provides actionable insights from your clients. Easily analyze responses and make data-driven decisions to optimize future campaigns.",benefits:["Send Emails","Real-Time Tracking","Detailed Analytics"],imageSrc:gC,imageAlt:"Campaign Performance Tracking",imgPosition:"left"}]:"CustomerManagement"==t?[{title:"Comprehensive Customer Management",subtitle:"Easily Access, Track, and Update Customer Information",description:"Atomwalk CRM\u2019s Customer Management module provides users with a centralized platform to manage and organize customer data. With tools for creating new customer profiles, viewing customer lists, and adding or updating details, the interface allows for streamlined customer tracking and engagement. Additionally, users can manage product interests, payment statuses, and set up tasks related to specific customers.",benefits:["Customer List View","Add and Update Customer Details","Track Product Interests and Payments"],imageSrc:xC,imageAlt:"CustomerManagement",imgPosition:"left"},{title:"Efficiently Manage Your Orders",subtitle:"Simplified Order Tracking and Fulfillment",description:"Atomwalk\u2019s Order Management module streamlines the entire order lifecycle, from creation to fulfillment. Keep track of customer orders, monitor their status in real-time, and manage related invoices and delivery schedules. With a centralized platform, you can improve order accuracy, reduce errors, and ensure timely processing for a better customer experience.",benefits:["Real-time order tracking","Centralized order information","Improved order accuracy","Faster order fulfillment","Seamless integration with invoices and delivery schedules"],imageSrc:yC,imageAlt:"Order Management Dashboard",imgPosition:"right"},{title:"Maximize Sales with Process-wise Order Management",subtitle:"Streamline Resale and Cross-Selling Opportunities",description:"Leverage Atomwalk\u2019s Process-wise Order Management module to unlock new revenue streams through resale and cross-selling. Easily identify opportunities to upsell or resell products based on customer purchase history and preferences. Automate workflows to recommend the right products, manage multi-step sales processes, and track performance metrics for each sales process.",benefits:["Drive cross-selling opportunities","Optimize resale workflows","Leverage customer purchase data","Track performance of specific sales processes","Increase revenue through upselling and reselling"],imageSrc:xC,imageAlt:"Resale and Cross-Selling Process Dashboard",imgPosition:"left"},{title:"Track and Manage Warranties with Ease",subtitle:"Streamline Your AMC and Warranty Operations",description:"Atomwalk enables you to efficiently add and manage warranty details for your products. With options to set warranty periods, reminders, and customer details, you can ensure timely follow-ups and improve service management. The user-friendly interface allows you to view and edit warranty records, ensuring no missed renewals or support cases.",benefits:["Simplified warranty management","Automatic AMC reminders","Comprehensive customer records"],imageSrc:bC,imageAlt:"Warranty Management Dashboard",imgPosition:"right"},{title:"Gain Actionable Insights with Reports and Dashboards",subtitle:"Visualize Your Business Performance at a Glance",description:"Atomwalk provides a comprehensive suite of reports and dashboards that help you monitor key business metrics in real-time. From Customer Group-wise Distribution to tracking Top 5 Customer Sales and Quotations, you can analyze performance trends and make informed decisions. The Receivable Dashboard ensures you stay on top of outstanding payments, enhancing cash flow management.",benefits:["Real-time insights","Customizable reports","Improved decision-making","Clear receivables tracking"],imageSrc:vC,imageAlt:"Reports and Dashboard View",imgPosition:"left"}]:"Channelpartner"==t?[{title:"Effortlessly Manage Your Channel Partners",subtitle:"Streamline Partner Onboarding and Management",description:"With Atomwalk, managing channel partners becomes seamless and efficient. This module allows you to record and organize comprehensive details such as company information, contact details, GSTN, PAN, TAN, and more. Easily classify partners into groups, identify their roles (e.g., supplier or partner), and maintain a central database for quick access and streamlined communication.",benefits:["Comprehensive partner records","Seamless onboarding process","Simplified partner classification","Efficient partner management"],imageSrc:wC,imageAlt:"Channel Partner Management Dashboard",imgPosition:"right"},{title:"Track Orders and Sales with Precision",subtitle:"Comprehensive Order Management for Better Insights",description:"Atomwalk\u2019s Order Information Tracking module enables you to efficiently manage and monitor all aspects of your orders. From maintaining task lists and tracking product interests to managing TDS (Tax Deducted at Source) and generating sales invoices, this module streamlines your sales operations. Gain complete visibility into your order lifecycle and ensure timely updates for smooth business operations.",benefits:["End-to-end order tracking","Simplified TDS management","Integrated sales invoice generation","Task list for better organization","Track product interests and customer preferences"],imageSrc:kC,imageAlt:"Order Tracking Dashboard",imgPosition:"left"},{title:"Generate Detailed Reports with Ease",subtitle:"Comprehensive Multi-Report Generation for Channel Partners",description:"Atomwalk\u2019s Multi-Report Generation feature within Channel Partner Management allows you to generate customized reports across various metrics and data points. Whether you need performance insights, transaction history, sales contributions, or partner-specific analysis, this module empowers you with actionable data. Export reports in multiple formats for seamless sharing and better decision-making.",benefits:["Generate partner-specific reports","Detailed performance insights","Track sales contributions and trends","Export reports in multiple formats (PDF, Excel, etc.)","Customizable reporting options"],imageSrc:SC,imageAlt:"Multi-Report Dashboard for Channel Partners",imgPosition:"right"}]:[{title:"Easily Add and Update AMC Details",subtitle:"Streamline Your Annual Maintenance Contract Management",description:"Atomwalk simplifies the process of managing AMC details for your customers. Add new AMC records, update existing ones, and set reminders to ensure timely contract renewals. With features like warranty integration and customer-specific tracking, this module ensures you stay ahead in providing exceptional post-sales support.",benefits:["Effortless AMC addition and updates","Integrated warranty and AMC tracking","Set reminders for timely renewals"],imageSrc:bC,imageAlt:"Campaign Performance Tracking",imgPosition:"right"},{title:"Access All AMC Records in One Place",subtitle:"Comprehensive Dashboard for Managing AMC Records",description:"With Atomwalk, you can access a consolidated list of all AMC records in one dashboard. Filter and search records by customer, product, or renewal status for quick insights. The intuitive interface allows you to stay on top of active contracts, expired warranties, and pending renewals, ensuring no service opportunity is missed.",benefits:["Centralized AMC record management","Quick filtering and search options","Enhanced visibility for active and expired contracts"],imageSrc:bC,imageAlt:"Campaign Performance Tracking",imgPosition:"left"}],r=ta();return(0,i.useEffect)((()=>{const e=r.search.match(/\?(\d+)/),t=e?parseInt(e[1],10):NaN;console.log(t,"Step value parsed from URL");const n=isNaN(t)?0:700+630*(t-1);n>0&&window.scrollTo({top:n,behavior:"smooth"})}),[r.search]),(0,g.jsx)(AC,{children:n.map((e=>(0,g.jsx)(jC,{children:"left"===e.imgPosition?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(CC,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,g.jsxs)(PC,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(EC,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:mj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(PC,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(EC,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:mj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]}),(0,g.jsx)(CC,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},OC=()=>{const[e,t]=(0,i.useState)(""),n=ta(),r=[{title:"Lead Management",titles:"Lead",description:"Atomwalk CRM's Lead Management system helps businesses efficiently track and manage leads throughout their sales pipeline. Users can add, update, and categorize leads, mark them as active or inactive, and assign ownership for better accountability. This system ensures that leads are properly followed up, improving conversion rates and optimizing the sales process.",background:"#d6e7ff",img:`${sC}`},{title:"Customer Management",titles:"Customer",description:"Atomwalk CRM's Customer Management system helps businesses organize and manage customer data, interactions, and communication history. It allows users to track customer preferences, purchase history, and provides tools to enhance customer retention and satisfaction.",background:"#d6e7ff",img:`${lC}`},{title:"Channel Partner Management",titles:"Partner",description:"Atomwalk CRM's Channel Partner Management system enables businesses to effectively manage their relationships with partners. It helps track partner activities, agreements, and contributions, streamlining collaboration to drive mutual growth. The system also provides visibility into partner performance, ensuring transparency and maximizing the value of partnerships.",background:"#d6e7ff",img:`${cC}`},{title:"Campaign Management",titles:"Campaign",description:"Atomwalk CRM's Campaign Management system allows businesses to plan, execute, and analyze marketing campaigns across multiple channels. It enables users to track campaign performance, manage budgets, and segment audiences for targeted outreach. The system provides real-time insights, helping to optimize strategies for better engagement and higher ROI.",background:"#d6e7ff",img:`${uC}`},{title:"Annual Maintenance Contract",titles:"AnnualMaintenance",description:"Efficiently manage assets, investments, and portfolios while tracking performance and ensuring regulatory compliance",background:"#d6e7ff",img:`${dC}`}];(0,i.useEffect)((()=>{n.pathname.includes("leadManagement")?t("leadManagement"):n.pathname.includes("CustomerManagement")?t("CustomerManagement"):n.pathname.includes("Channelpartner")?t("Channelpartner"):n.pathname.includes("aMCTracking")?t("aMCTracking"):t("campaignManagement")}),[n.pathname]);const o=n.pathname.includes("leadManagement")?r[0]:n.pathname.includes("CustomerManagement")?r[1]:n.pathname.includes("Channelpartner")?r[2]:n.pathname.includes("campaignManagement")?r[3]:n.pathname.includes("aMCTracking")?r[4]:r[0];return(0,g.jsxs)("div",{children:[(0,g.jsx)(Rp,{title:o.title,description:o.description,background:o.background,img:o.img,lead:!0}),(0,g.jsx)(fj,{bgcolors:"#e8f1fe",data:o.titles}),(0,g.jsx)(RC,{data:e})]})},TC=n.p+"static/media/Leadmanagement.89aea16cb4591163e02a.png",MC=n.p+"static/media/CustomerMangement.3b6acb8648dc2e328cbf.png",zC=n.p+"static/media/partnership.4462db344dbb58334dd7.png",IC=n.p+"static/media/asset-management.32d672a7cc30dd5fb4c6.png",LC=so.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,DC=so.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,FC=so.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,NC=so.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,BC=so.div`
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
`,_C=so.div`
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
`,UC=so.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,HC=so.p`
  font-size: 1em;
  color: #666;
`,WC=()=>{const e=e=>{window.location.href=`/${e}`};return(0,g.jsxs)(LC,{children:[(0,g.jsx)(DC,{children:"Key Features"}),(0,g.jsx)(FC,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,g.jsxs)(NC,{children:[(0,g.jsxs)(BC,{onClick:()=>e("leadManagement.html"),children:[(0,g.jsx)(_C,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:TC,alt:"Speed"})}),(0,g.jsx)(UC,{children:" Lead Management:"}),(0,g.jsx)(HC,{children:"Streamline and track leads from acquisition to conversion, ensuring efficient follow-ups and maximizing sales opportunities."})]}),(0,g.jsxs)(BC,{onClick:()=>e("CustomerManagement.html"),children:[(0,g.jsx)(_C,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:MC,alt:"Trust"})}),(0,g.jsx)(UC,{children:"Customer Management:"}),(0,g.jsx)(HC,{children:"Manage customer relationships by storing interaction histories, preferences, and communication details in one centralized platform"})]}),(0,g.jsxs)(BC,{onClick:()=>e("Channelpartner.html"),children:[(0,g.jsx)(_C,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:zC,alt:"Accuracy"})}),(0,g.jsx)(UC,{children:"Channel partner management:"}),(0,g.jsx)(HC,{children:"Collaborate effectively with business partners by tracking their contributions, agreements, and communication to ensure successful partnerships."})]}),(0,g.jsxs)(BC,{onClick:()=>e("aMCTracking.html"),children:[(0,g.jsx)(_C,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:IC,alt:"Reliability"})}),(0,g.jsx)(UC,{children:"Annual Maintenance Contract:"}),(0,g.jsx)(HC,{children:"Efficiently manage assets, investments, and portfolios while tracking performance and ensuring regulatory compliance"})]}),(0,g.jsxs)(BC,{onClick:()=>e("campaignManagement.html"),children:[(0,g.jsx)(_C,{bgColor:"#ffe0f5",children:(0,g.jsx)("img",{src:pS,alt:"Reliability"})}),(0,g.jsx)(UC,{children:"Campaign Management:"}),(0,g.jsx)(HC,{children:"Plan, execute, and analyze marketing campaigns to reach target audiences, track results, and optimize strategies for higher engagement and ROI."})]})]})]})},qC=()=>(0,g.jsxs)("div",{children:[(0,g.jsx)(Rp,{title:"Comprehensive CRM platform",description:"Atomwalk CRM is a comprehensive Customer Relationship Management (CRM) system designed to streamline and manage various business operations, focusing on customer, supplier, partner, and lead management. It offers functionalities that support task management, order processing, and tracking of product interests and payments.",background:"#d6e7ff",crm:!0}),(0,g.jsx)(Jk,{data:"lead"}),(0,g.jsx)(WC,{}),(0,g.jsx)(sS,{data:"crm"})]}),GC=n.p+"static/media/HeroLabSection.1606c37d4e5ec7047aa4.png",VC=n.p+"static/media/science.8f9dee670ee1dc6ebb6e.png",KC=n.p+"static/media/laboratory.10d5fe66121f8e772dde.png",JC=n.p+"static/media/labmagement.ba84ebd47e20da342faf.png",YC=n.p+"static/media/equpment.d3afd0d0f3a6fd638e31.png",QC=so.div`
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
`,ZC=so.div`
  max-width: 50%;
  margin-top: 100px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 150px;
  }
`,XC=so.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,$C=so.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,eE=so.button`
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
`,tE=so.div`
  display: flex;
  justify-content: left;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,nE=so.div`
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
`,rE=so.img`
  width: 70px;
  margin-bottom: 10px;
`,iE=so.p`
  font-size: 1rem;
  color: #333;
`,oE=so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`,aE=so.img`
  width: 550px;
  height: auto;
  border-radius: 10%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`,sE=()=>{const[e,t]=(0,i.useState)("linear-gradient(180deg, #d2f5fa, rgb(255 246 247))"),[n,r]=(0,i.useState)(GC),[o,a]=(0,i.useState)(!1),s=(e,n)=>{t(e),r(n)},l=()=>{t("linear-gradient(180deg, #d2f5fa, rgb(255 246 247))"),r(GC)};return(0,g.jsxs)(QC,{background:e,children:[(0,g.jsxs)(ZC,{children:[(0,g.jsx)(XC,{children:"Complete Lab & Equipment Management Hub"}),(0,g.jsx)($C,{children:"Manage lab operations and equipment effortlessly in one platform. From sample tracking to inventory control, LabSync keeps your lab running smoothly and efficiently."}),(0,g.jsx)(eE,{onClick:()=>{window.location.href="https://www.atomwalk.com/login/"},children:"Get started"}),(0,g.jsxs)(tE,{children:[(0,g.jsxs)(nE,{background:e,onMouseEnter:()=>s("linear-gradient(180deg, #bbfcc0, rgb(255 246 247))",YC),onMouseLeave:l,onClick:()=>{window.location.href="/labequipmentmangement.html"},children:[(0,g.jsx)(rE,{src:KC,alt:"HR"}),(0,g.jsx)(iE,{children:"Lab Equipment Management System: Precision Tracking for Lab Equipment Efficiency."})]}),(0,g.jsxs)(nE,{background:e,onMouseEnter:()=>s("linear-gradient(180deg, #edd4fc, rgb(255 246 247))",JC),onMouseLeave:l,onClick:()=>{window.location.href="/labmanagement.html"},children:[(0,g.jsx)(rE,{src:VC,alt:"CRM"}),(0,g.jsx)(iE,{children:"Lab Management System: Streamlined Solutions for Modern Lab Operations."})]})]})]}),(0,g.jsx)(oE,{children:(0,g.jsx)(aE,{src:n,alt:"Profile"})}),(0,g.jsx)(ss,{visible:o,setvisible:a})]})},lE=n.p+"static/media/maintenance.3ac526953d75b25ba17c.png",cE=so.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,uE=so.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,dE=so.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,pE=so.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,fE=so.div`
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
`,mE=so.div`
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
`,hE=so.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,gE=so.p`
  font-size: 1em;
  color: #666;
`,xE=()=>{const e=e=>{window.location.href=`/${e}`};return(0,g.jsxs)(cE,{children:[(0,g.jsx)(uE,{children:"Key Features"}),(0,g.jsx)(dE,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,g.jsxs)(pE,{children:[(0,g.jsxs)(fE,{onClick:()=>e("userManagement.html"),children:[(0,g.jsx)(mE,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:lS,alt:"Speed"})}),(0,g.jsx)(hE,{children:" Enhanced User Management"}),(0,g.jsx)(gE,{children:"Atomwalk\u2019s LEM ensures every role in the lab gets precisely what they need\u2014empowering admins, managers, and users to focus on productivity without any roadblocks."})]}),(0,g.jsxs)(fE,{onClick:()=>e("equipmentManagement.html"),children:[(0,g.jsx)(mE,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:cS,alt:"Trust"})}),(0,g.jsx)(hE,{children:"Rule Based Equipment Management"}),(0,g.jsx)(gE,{children:"Say goodbye to scheduling conflicts. With Atomwalk\u2019s LEM, you\u2019ll always know which equipment is available, making the booking process seamless."})]}),(0,g.jsxs)(fE,{onClick:()=>e("equipmentMaintenance.html"),children:[(0,g.jsx)(mE,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:lE,alt:"Accuracy"})}),(0,g.jsx)(hE,{children:"Equipment Maintenance"}),(0,g.jsx)(gE,{children:"Don\u2019t let unexpected breakdowns slow you down. Atomwalk\u2019s LEM sends alerts for maintenance and calibrations, ensuring minimal downtime and maximum lab productivity."})]}),(0,g.jsxs)(fE,{onClick:()=>e("reportandDashboard.html"),children:[(0,g.jsx)(mE,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:dS,alt:"Reliability"})}),(0,g.jsx)(hE,{children:"Gain Insights with Report & Dashboard"}),(0,g.jsx)(gE,{children:"Unlock the power of data with Atomwalk\u2019s detailed reports and Dashboard. Gain clear insights into usage pattern of equipments and labs "})]})]})]})},yE=so.section`
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
`,bE=so.div`
  max-width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,vE=so.h1`
  font-size: 48px;
  color: #213e6d;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`,wE=so.p`
  font-size: 18px;
  color: #6d7278;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,kE=so.button`
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
`,SE=so.div`
  max-width: 50%;
  position: relative;
  z-index: 2;
  bottom: 0px;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`,AE=so.img`
  width: 100%;
  height: auto;
`,jE=so.img`
  position: absolute;
  top: 150px;
  left: 40px;
  width: 130px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80px;
  }
`,CE=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(yE,{children:[(0,g.jsx)(jE,{src:hk,alt:"Abstract Shape"}),(0,g.jsxs)(bE,{children:[(0,g.jsx)(vE,{children:"Lab Equipment Management System"}),(0,g.jsx)(wE,{children:"Optimize utilization, minimize downtime, and simplify equipment management with real-time tracking and maintenance.  "}),(0,g.jsx)(kE,{onClick:()=>{window.location.href="/userManagement.html"},children:"Learn more"})]}),(0,g.jsx)(SE,{children:(0,g.jsx)(AE,{src:ka,alt:"Laboratory Technician"})})]}),(0,g.jsx)(Jk,{data:"Equipment"}),(0,g.jsx)(xE,{}),(0,g.jsx)(sS,{data:"equipment"})]}),EE=n.p+"static/media/user-mangerole.60795852ff5499076f19.png",PE=n.p+"static/media/SimplifiedEquipmentManagement.6d29210302b693d135e6.png",RE=n.p+"static/media/labmentanat.a3f1c5ebc7bee9b0b2f4.png",OE=n.p+"static/media/Dashboardaand.4ae3d9367ff7cf91f9b5.png",TE=n.p+"static/media/labexp.ba5536ecd08228cd878f.png";const ME=n.p+"static/media/processtemplate1.edb5e86bd5bf325f5113651d8ea68b3d.svg",zE=so.div`
  width: 100%;
  height: 100%;
`,IE=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #e8fcec;  */
  padding: 20px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
`,LE=so.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  img {
    width: 100%;
    /* max-width: 500px; */
  }

  @media (min-width: 768px) {
    width: 40%;
  }
`,DE=so.div`
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
    width: 460px;
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
`,FE=so.div`
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
`,NE=e=>{let{data:t,bgcolors:n}=e;const r=t,o=ta();(0,i.useEffect)((()=>{const e=o.search.match(/\?(\d+)/),t=e?parseInt(e[1],10):NaN;console.log(t,"Step value parsed from URL");const n=isNaN(t)?0:700+700*(t-1);n>0&&window.scrollTo({top:n,behavior:"smooth"})}),[o.search]);const a="userManagement"===r?[{title:"Manage User group (Lab Departments) for  Effortless Management / Analytics",subtitle:"Empowering Admins to Manage Every Aspect of Lab Operations",description:"Atomwalk\u2019s LEM provides LAB Admins (Owners) with powerful tools to manage user profiles based on the department setup in institution, which inturn helps to oversee equipment usage, and generate insightful reports. This allows Lab Admins to ensure smooth lab operations and maintain compliance effortlessly.",benefits:["Create and manage profiles (Based on Department setup)","Configurable access control for each User group"],imageSrc:xj,imageAlt:"Campaign Management Dashboard",imgPosition:"left"},{title:"Streamlined Management, Enhanced Productivity",subtitle:"Empowering Lab Admins/ Users with Instant Activation and Anytime Access",description:"With Atomwalk\u2019s LEM, LAB Admins can efficiently organize Lab users across users groups. User can manage their Profile and manage passwords on DIY basis. LAB Users can maintain their user name/ nick name to access the system anytime anywhere for equipment booking/cancellations.",benefits:["LAB Users Creation with right User Group"," LAB Users Profile/password management"],imageSrc:xj,imageAlt:"Campaign Performance Tracking",imgPosition:"right"},{title:"Easy Lab User management - Seamless  Experience",subtitle:"Empowering Lab Admins with Instant Deactivation and remove Access",description:"Atomwalk\u2019s LEM allows Lab Admin users to deactivate Lab Users and remove access in case of disciplinary action or completion of course. Lab Admins also can control temproray access to external Lab users.",benefits:["LAB Users deactivation","LAB Users removal of Access"],imageSrc:xj,imageAlt:"Campaign Performance Tracking",imgPosition:"left"}]:"equipmentManagement"===r?[{title:"Seamless Equipment Setup",subtitle:"Quick registration for efficient resource management",description:"With Atomwalk\u2019s streamlined setup process, admins can register new equipment in just minutes, ensuring that resources are readily available for team use. Each piece of equipment can be configured with essential details. This quick setup feature simplifies resource onboarding, enabling efficient equipment management and transparent usage policies. Atomwalk\u2019s intuitive setup tools help organizations optimize equipment access and cost tracking with ease.",benefits:["Instant equipment onboarding","Customizable usage limits and cost setting","Improved resource tracking and availability"],imageSrc:pC,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Efficient Equipment Booking",subtitle:"Simplified management for seamless operations",description:"With Atomwalk\u2019s equipment booking platform, users can book equipment whenever needed, with real-time availability ensuring resources are always visible and accessible. The intuitive dashboard allows users to view open time slots instantly, making it easy to secure necessary equipment without delays. By providing an up-to-date booking calendar and streamlined reservation options, Atomwalk helps users improve scheduling efficiency, reduce conflicts, and maximize equipment utilization.",benefits:["Instant availability check","Optimized scheduling for maximum uptime","Centralized equipment availability"],imageSrc:fC,imageAlt:"Lead Management",imgPosition:"left"},{title:"Hassle-Free Cancellations",subtitle:"Adaptable scheduling with flexible change options",description:"With Atomwalk\u2019s equipment booking system, users have the flexibility to cancel bookings effortlessly if plans change. Cancellations can be made up to 30 minutes before the scheduled time, allowing users to adjust reservations without disrupting workflow. This policy ensures efficient resource management and minimizes scheduling conflicts. However, admins and managers have additional flexibility and can cancel bookings at any time, ensuring greater control over equipment availability and usage. With these adaptable cancellation options, Atomwalk enables smoother scheduling and keeps operations flexible.",benefits:["Easy and quick cancellation process","Flexible policies for dynamic scheduling","Enhanced resource accessibility and optimization"],imageSrc:pC,imageAlt:"Lead Conversion",imgPosition:"right"}]:"equipmentMaintenance"===r?[{title:"Proactive Equipment Maintenance",subtitle:"Preventive measures for optimal performance",description:"Atomwalk\u2019s equipment maintenance feature allows admins to schedule preventive maintenance efficiently, ensuring equipment remains in top condition. During maintenance periods, equipment can be blocked from booking, preventing unintended usage and keeping maintenance routines organized. This proactive approach helps to minimize unexpected downtime, extend equipment lifespan, and ensure that all resources are ready when needed. With Atomwalk, maintenance planning becomes seamless, supporting continuous, reliable operation.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:pC,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Emergency Maintenance Protocol",subtitle:"Expert emergency maintenance to minimize downtime and maximize efficiency",description:"Atomwalk\u2019s equipment maintenance feature allows admins to schedule preventive maintenance efficiently, ensuring equipment remains in top condition. During maintenance periods, equipment can be blocked from booking, preventing unintended usage and keeping maintenance routines organized. This proactive approach helps to minimize unexpected downtime, extend equipment lifespan, and ensure that all resources are ready when needed. With Atomwalk, maintenance planning becomes seamless, supporting continuous, reliable operation.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:fC,imageAlt:"Lead Management",imgPosition:"left"}]:"userroleManagement"===r?[{title:"Empowered Oversight, Effortless Management",subtitle:"Empowering Admins to Manage Every Aspect of Lab Operations",description:"Atomwalk\u2019s LEM provides admins with powerful tools to manage user profiles, oversee equipment usage, handle emergencies, and generate insightful reports. This allows admins to ensure smooth lab operations and maintain compliance effortlessly.",benefits:["Create and manage profiles","Oversee bookings and usage","Handle emergencies and generate reports"],imageSrc:pC,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Streamlined Management, Enhanced Productivity",subtitle:"Enabling Managers to Optimize Lab Workflow and Maintenance",description:"Atomwalk\u2019s equipment maintenance feature allows admins to schedule preventive maintenance efficiently, ensuring equipment remains in top condition. During maintenance periods, equipment can be blocked from booking, preventing unintended usage and keeping maintenance routines organized. This proactive approach helps minimize unexpected downtime, extend equipment lifespan, and ensure that all resources are ready when needed. With Atomwalk, maintenance planning becomes seamless, supporting continuous, reliable operation.",benefits:["Organize groups and tasks","Track maintenance","Stay informed with real-time data"],imageSrc:fC,imageAlt:"Lead Management",imgPosition:"left"},{title:"Quick Access, Seamless Experience",subtitle:"Empowering Lab Users with Instant Booking and Personalized Access",description:"Atomwalk\u2019s equipment maintenance feature allows admins to schedule preventive maintenance efficiently, ensuring equipment remains in top condition. During maintenance periods, equipment can be blocked from booking, preventing unintended usage and keeping maintenance routines organized. This proactive approach helps minimize unexpected downtime, extend equipment lifespan, and ensure that all resources are ready when needed. With Atomwalk, maintenance planning becomes seamless, supporting continuous, reliable operation.",benefits:["Instant equipment booking","Stay updated with real-time availability","Personalized logins"],imageSrc:fC,imageAlt:"Lead Management",imgPosition:"left"}]:"labProcessemplate"===r?[{title:"Manage Inventory Items & Equipment Efficiently for Experiment Templates",subtitle:"Organized Setup for Streamlined Operations in Experiment Steps",description:"With Atomwalk\u2019s inventory and equipment setup feature, admins can efficiently configure and categorize all equipment and inventory items. This ensures accurate tracking and optimal usage of resources at the activity level (experiment steps). The system supports detailed classification, making it easier to identify equipment availability, usage patterns, and maintenance needs. Streamlined inventory management helps labs save time, reduce errors, and maintain operational efficiency.",benefits:["Manage Equipment for experiment steps","Manage Inventory items at each Experiment Steps","Optimized resource utilization"],imageSrc:ME,imageAlt:"Inventory Setup Overview",imgPosition:"right"},{title:"Manage Document Setup and Configuration",subtitle:"Capture Output Documents for Experiment Steps",description:"Atomwalk\u2019s document configuration feature empowers admins to tailor reports and documentation according to the lab\u2019s specific requirements. Detailed reports based on equipment output results can be stored in the form of documents. The system supports real-time data visualization, making it easier to analyze experiment results and make informed decisions.",benefits:["Customizable document setup","Real-time data visualization"],imageSrc:yj,imageAlt:"Report Configuration",imgPosition:"left"},{title:"Manage All Experiment Steps Efficiently",subtitle:"Streamline Workflows with Organized and Sequenced Experiment Steps",description:"Experiment steps (activity) creation in Atomwalk helps labs streamline their workflows by defining tasks and experiment steps systematically. This feature enables efficient planning and execution, ensuring every activity is aligned with lab protocols. Administrators can assign resources, set deadlines, and monitor progress, fostering collaboration and accountability.",benefits:["Systematic workflow organization","Resource and task alignment","Enhanced productivity and collaboration","Clear output documents requirement","Review process for experiment steps"],imageSrc:fC,imageAlt:"Activity Management",imgPosition:"right"},{title:"Manage Quality Check Data for Each Experiment Step",subtitle:"Ensuring Excellence Through Structured Quality Control",description:"The quality management feature for each step of an experiment in Atomwalk ensures adherence to high standards by enabling systematic monitoring and control. Labs can set up quality checks, track compliance, and address discrepancies effectively. This ensures consistent performance, mitigates risks, and upholds the lab\u2019s reputation for reliability and excellence.",benefits:["Structured quality control","Compliance tracking and management","Risk mitigation and performance consistency","Review process for QC data"],imageSrc:xj,imageAlt:"Quality Assurance",imgPosition:"left"}]:"labExperimentProject"===r?[{title:"Manage Lab Experiment Projects Efficiently",subtitle:"Initiate, Allocate, and Track Your Lab Experiment Projects",description:"With Atomwalk\u2019s lab experiment project creation feature, you can select the experiment process template to initiate the project. All required details, like experiment steps, equipment, inventory items, and output document details, will be auto-populated from the experiment template, ensuring operational efficiency for your lab experiments. Assign lab users (research students), set deadlines and sub-activities, and ensure alignment of goals for successful execution. This foundational step lays the groundwork for organized lab experiment project management.",benefits:["Systematic experiment step organization","Improved task allocation and tracking","Simplified progress monitoring","Effective inventory item management","Equipment allocation to projects","Experiment step-wise documents in one dashboard","Enhanced collaboration and planning","Time-saving predefined templates","Consistency in execution"],imageSrc:pC,imageAlt:"Project Creation Overview",imgPosition:"right"},{title:"Manage Your Lab Project Objectives",subtitle:"Track Lab Project Objective Statuses",description:"Atomwalk enables you to define and manage all your project objectives in one place. Objective statuses can be tracked by the PI (project manager), and necessary steps can be planned.",benefits:["Clear project objectives and scope","Defined timelines and responsibilities","Enhanced collaboration and planning"],imageSrc:fC,imageAlt:"Activity Steps Management",imgPosition:"left"},{title:"Enable Periodic Updates of Experiment Steps",subtitle:"Manage Your Experiment Steps from the Activity Dashboard",description:"Atomwalk enables you to define and organize specific activity steps required for your project. This modular approach ensures that every task is accounted for and easily manageable. Each step can be assigned to team members, monitored for progress, and adjusted as needed.",benefits:["Real-time inventory allocation and tracking","Periodic updates of experiment steps with required documents (output results)","Manage equipment booking","Review process for output documents","Sub-activity steps management"],imageSrc:xj,imageAlt:"Process Template Selection",imgPosition:"right"}]:[{title:"Optimize Resource Allocation with Usage Insights",subtitle:"Gain clear visibility into equipment usage patterns",description:"The Usage Trends feature helps you track how and when equipment is being used, allowing you to make data-driven decisions that optimize resource allocation, maintenance, and purchases. By identifying high-demand resources, you can better plan for upkeep and future acquisitions.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:pC,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Ensure Compliance with Complete Audit Logs",subtitle:"Maintain a clear, secure trail of actions and changes",description:"Audit-Ready Records keep a detailed log of all actions and changes, ensuring compliance with industry regulations. This feature provides an accessible and secure record for audits, giving your team peace of mind and simplifying the audit process.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:fC,imageAlt:"Lead Management",imgPosition:"left"},{title:"Streamlined Data Management for System Efficiency",subtitle:"Preventive measures for optimal performance",description:"The Data Purge feature enables you to securely remove outdated or unnecessary data, helping maintain a clutter-free system and improve overall performance. This process ensures that only relevant and up-to-date information is retained, reducing storage costs and supporting compliance with data retention policies.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:pC,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Transform Data into Actionable Insights",subtitle:"Drive smarter decisions with detailed analytics",description:"By analyzing data from different processes, it empowers your team to make informed decisions that enhance efficiency, reduce downtime, and ensure compliance. This powerful tool helps you maximize the value of your resources and refine your operations with data-driven strategies.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:fC,imageAlt:"Lead Management",imgPosition:"left"}];return(0,g.jsx)(zE,{children:a.map((e=>(0,g.jsx)(IE,{style:{backgroundColor:`${n}`},children:"left"===e.imgPosition?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(LE,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,g.jsxs)(FE,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(DE,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:mj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(FE,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(DE,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:mj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]}),(0,g.jsx)(LE,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},BE=e=>{let{data:t}=e;const[n,r]=(0,i.useState)(""),o=ta(),a=[{title:"Enhanced User Management",titles:"UserManagement",description:"Atomwalk\u2019s LEM ensures every role in the lab gets precisely what they need\u2014empowering admins, managers, and users to focus on productivity without any roadblocks.",background:"#bbfcc0",img:`${sC}`},{title:"Simplified Equipment Management",titles:"EquipmentManagement",description:"Say goodbye to scheduling conflicts. With Atomwalk\u2019s LEM, you\u2019ll always know which equipment is available, making the booking process seamless.",background:"#bbfcc0",img:`${PE}`},{title:"Equipment Maintenance",titles:"EquipmentMaintenance",description:"Don\u2019t let unexpected breakdowns slow you down. Atomwalk\u2019s LEM sends alerts for maintenance and calibrations, ensuring minimal downtime and maximum lab productivity.",background:"#bbfcc0",img:`${RE}`},{title:"Gain Insights with Report & Dashboard",titles:"ReportandDashboard",description:"Unlock the power of data with Atomwalk\u2019s detailed reports and Dashboard. Gain clear insights into usage pattern of equpments and labs  ",background:"#bbfcc0",img:`${OE}`},{title:"User and Role Management",titles:"UserManagements",description:"Atomwalk\u2019s LMS ensures Role-based access control to restrict data access based on user roles, and manage permissions to ensure secure and appropriate data access.",background:"#e8f4fc",img:`${EE}`},{title:"Lab Process Template",titles:"LabProcess",description:"Provide a simplified way to manage experiment templates required for the laboratory. Include various experiment templates with necessary steps, required inventory, and equipment. This ensures optimized and error-free execution of experiments by lab users.",background:"#e8f4fc",img:`${TE}`},{title:"Lab Experiment Project Execution",titles:"LabExperiment",description:"Provide a simplified way to manage experiment templates required for the laboratory. Include various experiment templates with necessary steps, required inventory, and equipment. This ensures optimized and error-free execution of experiments by lab users.",background:"#e8f4fc",img:`${RE}`},{title:"PI with Report & Dashboard",titles:"LabExperiment",description:"Provides a Performance Indicator (PI) system integrated with detailed reports and interactive dashboards, offering real-time insights and tracking of key metrics for informed decision-making.",background:"#e8f4fc",img:`${OE}`}];(0,i.useEffect)((()=>{o.pathname.includes("userManagement")?r("userManagement"):o.pathname.includes("equipmentManagement")?r("equipmentManagement"):o.pathname.includes("equipmentMaintenance")?r("equipmentMaintenance"):o.pathname.includes("reportandDashboard")?r("reportandDashboard"):o.pathname.includes("userroleManagement")?r("userroleManagement"):o.pathname.includes("labProcessemplate")?r("labProcessemplate"):o.pathname.includes("labExperimentProject")?r("labExperimentProject"):o.pathname.includes("pIwithReport")&&r("pIwithReport")}),[o.pathname]);const s=o.pathname.includes("userManagement")?a[0]:o.pathname.includes("equipmentManagement")?a[1]:o.pathname.includes("equipmentMaintenance")?a[2]:o.pathname.includes("reportandDashboard")?a[3]:o.pathname.includes("userroleManagement")?a[4]:o.pathname.includes("labProcessemplate")?a[5]:o.pathname.includes("labExperimentProject")?a[6]:o.pathname.includes("pIwithReport")?a[7]:a[0];return(0,g.jsxs)("div",{children:[(0,g.jsx)(Rp,{title:s.title,description:s.description,background:s.background,img:s.img,lead:!0}),(0,g.jsx)(fj,{bgcolors:t?"#e8fafc":"#e8fcec",data:s.titles}),(0,g.jsx)(NE,{bgcolors:t?"#e8fafc":"#e8fcec",data:n})]})},_E=n.p+"static/media/Sales_Lifecycle_icon.540e7016d8f19625782f.png",UE=n.p+"static/media/Procurement_icon.0c3f8b6c3e51891f1720.png",HE=n.p+"static/media/Compliance-Lifecycle-icon.eb302e01bf7d6dd666b7.png",WE=n.p+"static/media/sales_report_icon.1dc3907dd4a6c53f44a4.png",qE=so.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,GE=so.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,VE=so.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,KE=so.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,JE=so.div`
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
`,YE=so.div`
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
`,QE=so.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,ZE=so.p`
  font-size: 1em;
  color: #666;
`,XE=()=>{const e=e=>{window.location.href=`/${e}`};return(0,g.jsxs)(qE,{children:[(0,g.jsx)(GE,{children:"Key Features of Sales and Procurement"}),(0,g.jsx)(VE,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,g.jsxs)(KE,{children:[(0,g.jsxs)(JE,{onClick:()=>e("saleslifecycle.html"),children:[(0,g.jsx)(YE,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:_E,alt:"Speed"})}),(0,g.jsx)(QE,{children:"Empowering Every Step of Your Sales Journey"}),(0,g.jsx)(ZE,{children:"Streamline and optimize your sales process with tools that manage everything from lead generation to order fulfillment, ensuring a smooth and efficient sales journey."})]}),(0,g.jsxs)(JE,{onClick:()=>e("procurement.html"),children:[(0,g.jsx)(YE,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:UE,alt:"Trust"})}),(0,g.jsx)(QE,{children:"Optimizing Every Stage of Your Procurement Process"}),(0,g.jsx)(ZE,{children:"Streamline and automate your procurement workflow, from purchase orders to inventory management, ensuring efficiency, accuracy, and cost savings at every step."})]}),(0,g.jsxs)(JE,{onClick:()=>e("compliance.html"),children:[(0,g.jsx)(YE,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:HE,alt:"Accuracy"})}),(0,g.jsx)(QE,{children:"Ensuring Accuracy and Confidence in Every Compliance Step"}),(0,g.jsx)(ZE,{children:"Streamline compliance management with precise tracking, automated updates, and real-time monitoring, ensuring complete accuracy and adherence to regulations at every stage."})]}),(0,g.jsxs)(JE,{onClick:()=>e("salesreport.html"),children:[(0,g.jsx)(YE,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:WE,alt:"Reliability"})}),(0,g.jsx)(QE,{children:"Sales Report & Dashboard"}),(0,g.jsx)(ZE,{children:"Track and analyze sales performance with detailed reports and dynamic dashboards, helping you monitor revenue, trends, and key metrics at a glance."})]})]})]})},$E=n.p+"static/media/Sales&Procurement.77a69cee727f51301ce8.png",eP=(so.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffeb3b;
  padding: 90px 40px 0px 40px;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 130px 40px 0px 40px;
  }
`,so.div`
  max-width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,so.h1`
  font-size: 48px;
  color: #213e6d;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`,so.p`
  font-size: 18px;
  color: #6d7278;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,so.button`
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
`),tP=(so.div`
  max-width: 50%;
  position: relative;
  z-index: 2;
  bottom: 0px;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`,so.img`
  width: 100%;
  height: auto;
`,so.img`
  position: absolute;
  top: 150px;
  left: 40px;
  width: 130px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80px;
  }
`,so.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,so(eP)`
  background-color: ${e=>e.active?"#1e90ff":"#4682b4"};
  color: white;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  &:hover {
    background-color: ${e=>e.active?"#0d71c8":"#1c6ca1"};
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }
  &:active {
    transform: scale(0.95);
    transition: transform 0.2s ease-in-out;
  }
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
  }
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
`,()=>{const[e,t]=(0,i.useState)("Manufacturing");return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Rp,{title:"Simplify & Efficient Your Sales and Procurement Operations",description:"Take control of your business with a seamless ERP solution that helps you manage sales orders, quotations, invoices, payments, procurement, inventory, and compliance\u2014all in one place.",background:"#83f28f",lead:!0,img:$E}),(0,g.jsx)(Jk,{data:"Sales and Procurement"}),(0,g.jsx)(XE,{}),(0,g.jsx)(sS,{data:"equipment"})]})}),nP=(n.p,so.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6BEFED;
  padding: 90px 40px 0px 40px;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 130px 40px 0px 40px;
  }
`,so.div`
  max-width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,so.h1`
  font-size: 48px;
  color: #213e6d;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`,so.p`
  font-size: 18px;
  color: #6d7278;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,so.button`
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
`);so.div`
  max-width: 50%;
  position: relative;
  z-index: 2;
  bottom: 0px;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`,so.img`
  width: 100%;
  height: auto;
`,so.img`
  position: absolute;
  top: 150px;
  left: 40px;
  width: 130px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80px;
  }
`,so.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,so(nP)`
  background-color: ${e=>e.active?"#1e90ff":"#4682b4"};
  color: white;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  &:hover {
    background-color: ${e=>e.active?"#0d71c8":"#1c6ca1"};
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }
  &:active {
    transform: scale(0.95);
    transition: transform 0.2s ease-in-out;
  }
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
  }
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
`;const rP=n.p+"static/media/SalesOrder.db5dc2abef63c151d8de243ddab281b4.svg";const iP=n.p+"static/media/workorder.94bb4a5d0f312dfc4ae82c8814850e88.svg";const oP=n.p+"static/media/SalesInvoice.999321c3419ef7adf08a204022669b4a.svg";const aP=n.p+"static/media/DeliveryChallan.b5db04bc713e2ff084e26c6b14468d9b.svg";n.p;const sP=n.p+"static/media/SalesShipment.0cffbc21010270f7dabce092c04aa1ce.svg";const lP=n.p+"static/media/SalesPayment.3f25a56fb5c3cecd636a3f39dd79d388.svg";const cP=n.p+"static/media/ProcureSupplier.645ffbb7a731ce35053f89352539da0b.svg";const uP=n.p+"static/media/PurchaseOrder.3985cabb3a675292427ba2e94ad3134f.svg";const dP=n.p+"static/media/OrderIn.f0fe0c931a748b335b04a0548bcea36d.svg";const pP=n.p+"static/media/ProcureInventory.c275f6dc0bc81cb3b2420dce688ffeb1.svg";const fP=n.p+"static/media/ProcureReturn.ae4383f9fb6121133904e17fbc8c154f.svg";const mP=n.p+"static/media/ProcurePayable.57ffb874e7f85773e8ecc1dcc627e8c4.svg";const hP=n.p+"static/media/SalesReport.711d0206590a01ec7aa2c19cb1dd4041.svg";const gP=n.p+"static/media/ProcureReport.e37950bcf18ab74f57d4efdb08751ec9.svg",xP=so.div`
  width: 100%;
  height: 100%;
`,yP=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${e=>e.bgcolor?e.bgcolor:"#cefad0"};; 
  padding: 20px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
`,bP=so.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  

  img {
    width: 130%;
    /* max-width: 500px; */
  }

  @media (min-width: 768px) {
    width: 30%;
    margin-left: 70px;
    margin-right: 70px;
  }
`,vP=so.div`
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
    /* width: 460px; */
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
`,wP=so.div`
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
`,kP=e=>{let{data:t,bgcolors:n}=e;const r=t,o=ta();(0,i.useEffect)((()=>{const e=o.search.match(/\?(\d+)/),t=e?parseInt(e[1],10):NaN;console.log(t,"Step value parsed from URL");const n=isNaN(t)?0:700+700*(t-1);n>0&&window.scrollTo({top:n,behavior:"smooth"})}),[o.search]);const a="saleslifecycle"===r?[{title:"Empowering Your Sales Process",subtitle:"Manage sales orders and quotations with precision and ease.",description:"Atomwalk empowers you to manage your company\u2019s sales orders and quotations with unparalleled flexibility and ease. Create and customize multiple quotations or sales orders, manage customer details, add products, and track orders efficiently. With features like Auto numbering, Product/Category defination, order duplication, tax invoicing, PDF generation, email of sale order and payment reminders, Atomwalk saves time while enhancing your business process.",benefits:["Product Category defination for Tax setup","Product/Item Configaration ","Auto Numbering","Order Duplication","PDF generation with custom templates","Email for Sale order/ Payment reminder","One click tax invoicing"],imageSrc:rP,imageAlt:"Quotation Management Dashboard",imgPosition:"left"},{title:"Seamless Transition from Sales Order to Work Order.",subtitle:"Transform sales orders into actionable work orders with ease by Process Template configuration ",description:"The Work Order Process ensures a smooth flow from sales order confirmation to work order creation using process template configuration for the Products. Once a work order is created, it enables seamless generation of job cards for each activities with item. equipment and resource required. The process is designed to streamline operations and save time, improving business efficiency.",benefits:["Create work orders from confirmed sales orders (with PO)","Process Template for each product -  smooth transition from sales to operations.","Track invetory/equipment and resource usage for each activity.","Job Card generation"],imageSrc:iP,imageAlt:"Work Order",imgPosition:"right"},{title:"Comprehensive Sales Invoicing for Your Business Needs.",subtitle:"Manage invoices with advanced features, detailed insights, and flexible tools.",description:"With Atomwalk, creating and managing sales invoices is straightforward and highly functional. Users can generate invoices with tailored details, apply advanced filters, and analyze key data through interactive dashboards. With features like Auto numbering of tax invoice, product and category defination, invoice duplication, PDF generation with templates, email of invoice and payment reminders, GST tracking, auto reconciliation with Bank statements, Atomwalk saves time while enhancing your business process. Manual payment updates, Auto Accounting , TDS reconciliation and credit note features ensure precise control over every aspect of the invoicing process.",benefits:["Auto Numbering & Invoice Duplication.","PDF generation with custom templates.","Email forInvoice / Payment reminder.","Auto Accounting & Bank reconciliation for Payments.","TDS Reconciliations.","Allocation of Inventory (with Item serial no)","GST Tracking","Use advanced filters for better management","Credit Note feature","Track insights with interactive dashboards"],imageSrc:oP,imageAlt:"Sales Invoice",imgPosition:"left"},{title:"Streamline Deliveries with Accurate Documentation.",subtitle:"Efficiently manage stock, issue delivery challans, and comply with e-way bill regulation support.",description:"Atomwalk facilitates the delivery process by allowing users to generate and manage Delivery Challans seamlessly, ensuring accurate documentation and regulatory compliance. From stock verification to e-way bill generation, the system simplifies delivery logistics and enhances operational efficiency.",benefits:["Issue Delivery Challans after stock availability confirmation.","Generate multiple copies for internal use, customers, and couriers.","Search and filter challans dynamically for quick access. ","Automatically generate e-way bills for regulatory compliance.","Duplicate challans easily with the copy feature.","Search and filter challans dynamically for quick access.","Automatically generate e-way bills for regulatory compliance."],imageSrc:aP,imageAlt:"Delivery Chalan",imgPosition:"right"},{title:"Track Every Shipment with Precision and Ease",subtitle:"Manage product-wise shipments with detailed tracking and flexible options.",description:"The Shipment Details Process in Atomwalk provides users with comprehensive tools to manage and track shipments effectively. Users can choose shipment statuses like fully shipped, pending, or partly shipped and update product-specific shipment details. With fields for courier information, transport modes, and delivery locations, this feature ensures clarity and accuracy in shipment management. Sytem fields are compatible with eway bill regulation requirements.",benefits:["Update shipment status and transport details.","Record courier, vehicle, and package data.","Eway bill support."],imageSrc:sP,imageAlt:"Shipment Details",imgPosition:"right"},{title:"Complete Your Sales Cycle with Hassle-Free Payment Tracking.",subtitle:"Ensure seamless payment settlement with detailed tracking and automated scheduling and reconciliation.",description:"With Atomwalk, payment tracking/management becomes an integral part of the sales process. Auto reconciliation of payments from Bank statemnts is supported to improve your business opertion efficiency. Users can input payment details, verify TDS, and track transactions with ease. The Generate Schedule Payment feature automates bill creation within specified offset periods, ensuring streamlined payment management from shipment to settlement.",benefits:["Payment auto reconciliation from Bank statements","TDS payment reconciliation with form 26AS upload","Payment reminder by mail/ whatsapp."],imageSrc:lP,imageAlt:"Payment Management",imgPosition:"left"}]:"procurement"===r?[{title:"Seamlessly Manage Your Supplier Database.",subtitle:"Manage preferred suppliers against each Inventory Item..",description:"Atomwalk simplifies supplier management by allowing users to add suppliers details into the supplier database. User can manage preferred suppliers with lead time and purchase cost, supplier ref num etc. This process ensures seamless management of supplier information for improved procurement operations.",benefits:["Supplier Data management."," Manage Defualt/ preferred suppliers for Item"],imageSrc:cP,imageAlt:"Supplier Identification",imgPosition:"right"},{title:"Streamline Your Procurement with Efficient Purchase Order Management.",subtitle:"Create detailed purchase orders and manage procurement operations seamlessly.",description:"With Atomwalk, creating purchase is straightforward and efficient. Users can select suppliers from the list and input all necessary details for purchase order. The system ensures precise order management by allowing item selection, shipment details and branch-specific tracking.",benefits:["Auto numbering facility for PO.","Shipment details capture.","Auto population of default supplier details.","Purchase Order PDF templates with email PO as attachment seamlessly.","Sales Invoice storage."],imageSrc:uP,imageAlt:"Purchase Order Creation",imgPosition:"left"},{title:"Accurately Record and Track Incoming Inventory (GRN).",subtitle:"Streamline goods receipt and inventory updates with precision",description:"Atomwalk simplifies the goods receipt process by allowing users to auto generate  Goods Receive Notes linked to Purchase Orders (for each part shipments). Users can record key details like received quantity, rejected items, and bin locations, ensuring proper inventory updates and efficient warehouse management.",benefits:["GRN - Auto Goods Receipt Note generation.","Manage Item Batch details  (with expiry date/ Item serial no).","Track quantities: received, rejected, or shortages.","Bin Location update.","Maintain accurate records for efficient warehouse operations."," Auto Accounting entries"],imageSrc:dP,imageAlt:"Order-In",imgPosition:"right"},{title:"Precision-Driven Inventory Management",subtitle:"Organize, allocate, and control your inventory for optimal efficiency.",description:"Atomwalk empowers businesses with advanced inventory allocation and warehouse management tools. Easily set up warehouses with customizable structures such as Zone, Aisle, Section, Shelf, and Bin. Allocate items to specific storage locations and streamline the Order-In process by defining storage zones for each product. Gain real-time visibility into inventory levels, reduce errors, and enhance operational efficiency.",benefits:["Assign storage locations for precise tracking.","Automatically update inventory after Order-In.","View storage details for easy access.","Automatically update inventory with received items.","Maintain accurate records for efficient warehouse operations."],imageSrc:pP,imageAlt:"Inventory MAngement",imgPosition:"right"},{title:"Handle Returns with Confidence and Accuracy.",subtitle:"Efficiently manage product returns, shortages, and damages with ease.",description:"Atomwalk simplifies return handling by enabling users to address damaged, short, or incorrect products during the GRN process. With provisions to issue Debit notes, the system ensures smooth return management and accurate accounting adjustments.",benefits:["Issue of debit Note.","Auto Accounting for Returns."],imageSrc:fP,imageAlt:"Return Handling",imgPosition:"left"},{title:"Track Payables with Precision.",subtitle:"Manage paybles with auto reconciliation from Payable dashboard.",description:"Atomwalk streamlines the payment management process by synchronizing all transactions in bank statements and automating accounting calculations. The system accounts for debit notes, ensures accurate IGST, CGST, SGST, and TDS computations, and simplifies payment processing with seamless integration.",benefits:["Payment tracking (payable dashboard).","Auto reconciliation with Bank statements.","Simplify accounting for easy payment processing."],imageSrc:mP,imageAlt:"Payable Process Tracking",imgPosition:"right"}]:"compliance"===r?[{title:"Streamlining Compliance for Seamless Goods Movement.",subtitle:"Effortless e-Way Bill Management Aligned with GST Guidelines.",description:"Managing compliance for the movement of goods is critical under India\u2019s GST regime, and Atomwalk ensures you\u2019re always aligned with government regulations. With our e-Way Bill management solution, users can easily generate the mandatory electronic document required for transporting goods over \u20b950,000. By enabling e-Way Bill settings and filling shipment details like mode of transport and destination, Atomwalk automates the generation process, saving time and reducing errors. This streamlined solution helps businesses focus on operations while staying compliant with GST guidelines, ensuring hassle-free goods movement and avoiding penalties.",benefits:["Automates e-Way Bill for shipments over \u20b950,000.","Configure once with user name and enablement.","Fill transport modes to generate e-Way Bill.","Aligns with government rules for hassle-free shipments.","Simplifies compliance within shipment management.",""],imageSrc:rP,imageAlt:"E-Way Bill",imgPosition:"right"},{title:"Accurate TDS Compliance, Smarter Accounting.",subtitle:"Stay aligned with tax regulations while optimizing your financial workflows",description:"With Atomwalk, managing Tax Deducted at Source (TDS) becomes seamless and compliant with government regulations. Through the Service Category Setup, users can configure TDS parameters like applicable tax rates, threshold limits, TDS rates for services, and expense ledger details. Once setup, Atomwalk automates TDS calculations during accounting processes. TDS is applied automatically when transactions exceed \u20b930,000, as per government guidelines. Even for multiple product sales to a single customer, the system calculates TDS on the cumulative amount, ensuring precise compliance. Atomwalk simplifies TDS management, helping businesses stay compliant while reducing manual effort.",benefits:["Configure TDS rates, thresholds, and expense ledgers effortlessly.","Automatic TDS calculation for transactions above \u20b930,000.","Cumulative TDS calculations for multiple product sales.","Ensures compliance with updated government regulations.","Streamlines accounting processes with accurate tax deductions."],imageSrc:iP,imageAlt:"TDS",imgPosition:"left"},{title:"Seamless GST Management for Your Organization",subtitle:"Configure, Update, and Automate GST Processes Effortlessly",description:"GST compliance can be complex, but Atomwalk makes it straightforward with an intuitive tax setup and management module. Users can configure GST rates, define minimum taxable amounts, and set effective dates to ensure accurate calculations. Flexible options allow for customization, including tax codes, types, and slab-based deductions. Additionally, Atomwalk empowers businesses to stay updated with evolving government regulations by providing easy tools for updating tax setups. With automated CGST and SGST calculations, Atomwalk simplifies tax management, ensuring compliance and operational efficiency without dependency on external resources.",benefits:["Dynamic GST Configuration(Tax Setup Flexibility)","Set tax codes, types, and slab-based deductions.","Easily update setups for new GST regulations.","Auto-calculates CGST and SGST as per configuration","Update tax setups without external dependency."],imageSrc:rP,imageAlt:"GST",imgPosition:"right"}]:"salesreport"===r?[{title:"Transform Data into Decisions.",subtitle:"Comprehensive Sales Insights at Your Fingertips.",description:"Atomwalk provides detailed sales reports and dashboards, enabling users to audit and manage sales efficiently. With product-wise revenue, monthly trends, and customer-specific insights, users can analyze performance through dynamic graphical charts. Track outstanding amounts, sales trends, and exceptions to make informed decisions with ease.",benefits:["View sales revenue by product, amount, and quantity.","Analyze trends with interactive charts.","Track outstanding amounts and customer-wise performance.","Visualize age and days of outstanding sales.","Access comprehensive transaction and exception lists."],imageSrc:hP,imageAlt:"Sales Report",imgPosition:"right"},{title:"Optimize Procurement with Actionable Insights.",subtitle:"Track, Analyze, and Improve Your Purchasing Performance.",description:"Atomwalk enables businesses to monitor and evaluate procurement processes through detailed purchase reports. With dynamic graphical charts, users can review monthly and quarterly trends, customer-wise data, and outstanding amounts. These insights help streamline procurement tracking and ensure better decision-making.",benefits:["Access graphical charts for purchase trends.","Analyze supplier performance and outstanding balances.","Visualize age and days of outstanding purchases","Review all transactions and exceptions."],imageSrc:gP,imageAlt:"Lead Management",imgPosition:"left"}]:[{title:"Optimize Resource Allocation with Usage Insights",subtitle:"Gain clear visibility into equipment usage patterns",description:"The Usage Trends feature helps you track how and when equipment is being used, allowing you to make data-driven decisions that optimize resource allocation, maintenance, and purchases. By identifying high-demand resources, you can better plan for upkeep and future acquisitions.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:rP,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Ensure Compliance with Complete Audit Logs",subtitle:"Maintain a clear, secure trail of actions and changes",description:"Audit-Ready Records keep a detailed log of all actions and changes, ensuring compliance with industry regulations. This feature provides an accessible and secure record for audits, giving your team peace of mind and simplifying the audit process.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:iP,imageAlt:"Lead Management",imgPosition:"left"},{title:"Streamlined Data Management for System Efficiency",subtitle:"Preventive measures for optimal performance",description:"The Data Purge feature enables you to securely remove outdated or unnecessary data, helping maintain a clutter-free system and improve overall performance. This process ensures that only relevant and up-to-date information is retained, reducing storage costs and supporting compliance with data retention policies.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:rP,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Transform Data into Actionable Insights",subtitle:"Drive smarter decisions with detailed analytics",description:"By analyzing data from different processes, it empowers your team to make informed decisions that enhance efficiency, reduce downtime, and ensure compliance. This powerful tool helps you maximize the value of your resources and refine your operations with data-driven strategies.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:iP,imageAlt:"Lead Management",imgPosition:"left"}];return(0,g.jsx)(xP,{children:a.map((e=>(0,g.jsx)(yP,{bgcolor:n,children:"left"===e.imgPosition?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(bP,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,g.jsxs)(wP,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(vP,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:mj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(wP,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(vP,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:mj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]}),(0,g.jsx)(bP,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},SP=n.p+"static/media/Sales_Lifecycle.667ff3a8b502cf7a76c4.png",AP=n.p+"static/media/Procurement.55f25f33fc0f83e86c4e.png",jP=n.p+"static/media/complience.cdaa7f3616a12e0b2e85.png",CP=()=>{const[e,t]=(0,i.useState)(""),n=ta(),r=[{title:"Enhance Your Sales Lifecycle Management",titles:"Sales",description:"From work orders to invoicing, streamline your sales process for better control and business growth.",background:"#C7F98E",backgrounds:"#cefad0",img:`${SP}`},{title:"Streamlined Procurement, Smarter Decisions",titles:"Procurement",description:"From supplier identification to payment settlement, manage every step of your procurement lifecycle with efficiency and control.",background:"#fc6ae2",backgrounds:"#FED7F7",img:`${AP}`},{title:"Master Your Compliance Lifecycle",titles:"Compliance",description:"Streamline GST, TDS, and e-way bill management with Atomwalk to ensure effortless adherence to regulatory requirements.",background:"#FFF176",backgrounds:"#fff9c4",img:`${jP}`},{title:"Gain Insights with Report of Sales & Procurement",titles:"Report",description:"Unlock the power of data with Atomwalk\u2019s detailed reports and Dashboard. Gain clear insights into usage pattern of equpments and labs  ",background:"#FFF176",backgrounds:"#fff9c4",img:`${OE}`}];(0,i.useEffect)((()=>{n.pathname.includes("saleslifecycle")?t("saleslifecycle"):n.pathname.includes("procurement")?t("procurement"):n.pathname.includes("compliance")?t("compliance"):n.pathname.includes("salesreport")?t("salesreport"):n.pathname.includes("invoicemanage")?t("invoicemanage"):n.pathname.includes("invoiceaction")?t("invoiceaction"):n.pathname.includes("paymentmanage")&&t("paymentmanage")}),[n.pathname]);const o=n.pathname.includes("saleslifecycle")?r[0]:n.pathname.includes("procurement")?r[1]:n.pathname.includes("compliance")?r[2]:n.pathname.includes("salesreport")?r[3]:r[0];return(0,g.jsxs)("div",{children:[(0,g.jsx)(Rp,{title:o.title,description:o.description,background:o.background,img:o.img,lead:!0}),(0,g.jsx)(fj,{bgcolors:o.backgrounds,data:o.titles}),(0,g.jsx)(kP,{data:e,bgcolors:o.backgrounds})]})},EP=n.p+"static/media/ProcessProject.65e03879f02a9b2a7787.png",PP=n.p+"static/media/Project_icon.724979d3c06fe5786e2b.png",RP=(n.p,so.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`),OP=so.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,TP=so.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,MP=so.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,zP=so.div`
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
`,IP=so.div`
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
`,LP=so.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,DP=so.p`
  font-size: 1em;
  color: #666;
`,FP=()=>{const e=e=>{window.location.href=`/${e}`};return(0,g.jsxs)(RP,{children:[(0,g.jsx)(OP,{children:"Key Features"}),(0,g.jsx)(TP,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that streamlines and optimizes your entire process and project management. Our platform offers:"}),(0,g.jsxs)(MP,{children:[(0,g.jsxs)(zP,{onClick:()=>e("process.html"),children:[(0,g.jsx)(IP,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:TC,alt:"Process"})}),(0,g.jsx)(LP,{children:"Work Order / Process Tamplete:"}),(0,g.jsx)(DP,{children:"Streamline workflows with customizable process templates for consistent and efficient project execution."})]}),(0,g.jsxs)(zP,{onClick:()=>e("project.html"),children:[(0,g.jsx)(IP,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:PP,alt:"Project"})}),(0,g.jsx)(LP,{children:"Project Management:"}),(0,g.jsx)(DP,{children:"Efficiently plan, track, and manage projects with real-time progress monitoring, task allocation, and performance insights."})]}),(0,g.jsxs)(zP,{onClick:()=>e("activityreport.html"),children:[(0,g.jsx)(IP,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:WE,alt:"Activity Report"})}),(0,g.jsx)(LP,{children:"Report & Dashboard:"}),(0,g.jsx)(DP,{children:"Gain actionable insights with comprehensive reports and interactive dashboards, enabling data-driven decision-making and performance tracking."})]})]})]})},NP=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Rp,{title:"Streamline Your Workorder Execution with Atomwalk Project Management",description:"treamline your workflows, track progress, and ensure seamless project execution with Atomwalk\u2019s comprehensive work order and project management solution. Optimize your team\u2019s performance, manage resources, and stay on top of deadlines with complete visibility.",background:"#52f52f",lead:!0,img:EP}),(0,g.jsx)(Jk,{data:"Process and Project"}),(0,g.jsx)(FP,{}),(0,g.jsx)(sS,{data:"equipment"})]}),BP=n.p+"static/media/ProjectManage.9d05e43775e1f005186b.png",_P=n.p+"static/media/ProcessTamplete.1191d1e920df873ca265.png";const UP=n.p+"static/media/ProductCategory.bbc9ae85f2952e89601a82951aef1fe2.svg";const HP=n.p+"static/media/ProcessInventorySetup.93b928b8c99bcba93c933f6248964328.svg";const WP=n.p+"static/media/EquipmentSetup.1c19d8757759bbfdc65f91ac92503908.svg";const qP=n.p+"static/media/DocumentSetup.a83cf8bebdd57c9894b15f6e6c3eb1d6.svg";const GP=n.p+"static/media/ActivitySetup.a71aff4b7884c2759705623e5c798fc0.svg";const VP=n.p+"static/media/ProcessSetup.9795daff9059ad8835fa978673da20ca.svg";const KP=n.p+"static/media/ProjectCreation.39f05a8597068040e02f6659e1b80c3d.svg";const JP=n.p+"static/media/UserActivity.f2ec63dbad6e16abf4b70f5836e470f4.svg";const YP=n.p+"static/media/ProjectMangement.5e726b74588e811115939587e947632d.svg";const QP=n.p+"static/media/ActivityDB.3590487b57093f535bbdb3fea9a5d0e8.svg";const ZP=n.p+"static/media/ProjectDB.2c86a89171b2ab794ff750e99f97642a.svg";const XP=n.p+"static/media/ResourceUtilisationDB.979c9c5aab9598c9f6e256f40db415aa.svg",$P=so.div`
  width: 100%;
  height: 100%;
`,eR=so.div`
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
`,tR=so.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  img {
    width: 100%;
    /* max-width: 500px; */
  }

  @media (min-width: 768px) {
    width: 40%;
  }
`,nR=so.div`
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
    /* width: 400px; */
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
`,rR=so.div`
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
`,iR=e=>{let{data:t}=e;console.log(t,"  dcjcnd");const n="process"==t?[{title:"Product Management with Category Setup",subtitle:"Organize Products for Better Process Integration",description:"Atomwalk makes managing product categories effortless, ensuring that every product is aligned with your business's financial and operational needs. This structured categorization ensures seamless product segregation for streamlined operations. Atomwalk ensures you\u2019re ready for seamless operations and compliance.",benefits:["Segregate products effectively for better management","It Helps to filter the product."],imageSrc:UP,imageAlt:"Product Category",imgPosition:"right"},{title:"Comprehensive Inventory Management with Atomwalk",subtitle:"Structured Setup and Categorization for Smarter Control",description:"Atomwalk enables precise inventory management, ensuring every item is categorized to align with your business\u2019s operational needs. Begin with the Inventory Item Category Setup to establish structured categorization. Organize inventory location-wise and efficiently handle multiple inventories. With Atomwalk, you can create and manage inventory items by filling in detailed information and linking them category-wise. Atomwalk ensures you\u2019re ready for seamless operations and compliance.",benefits:["Establish structured categories for inventory items.","Organize inventory by specific locations.","Multiple Inventory Management, Create and organize inventory items with complete details.","Associate items with categories for better tracking."],imageSrc:HP,imageAlt:"Inventory Setup",imgPosition:"left"},{title:"Robust Equipment Management with Atomwalk",subtitle:"Streamlined Equipment Setup and Usage Tracking",description:"Atomwalk equips administrators to manage multiple equipment with precision. Navigate to the 'Equipment Setup' under 'Office Setup' to add and configure equipment as needed. By entering details like equipment type, usage unit, booking schedules, and cost data, Atomwalk ensures efficient load management and accurate tracking. This structured approach aligns your equipment utilization with operational needs while ensuring seamless integration into your workflows.",benefits:["Able to manage multiple equipment, Add equipment with detailed configurations, including type and usage parameters.","Define schedules with booking times, slots, and restrictions.","Automatically track and manage equipment load efficiently."],imageSrc:WP,imageAlt:"Equipment Setup",imgPosition:"right"},{title:"Manage Document Setup and Configuration",subtitle:"Capture Output Documents for Manufacturing Process",description:"Atomwalk\u2019s document configuration feature empowers admins to tailor reports and documentation according to the manufacturing industry specific requirements. Detailed reports based on equipment output results can be stored in the form of documents. The system supports real-time data visualization, making it easier to analyze experiment results and make informed decisions.",benefits:["Customizable document setup","Real-time data visualization"],imageSrc:qP,imageAlt:"Document Setup",imgPosition:"left"},{title:"Comprehensive Management for Activity Essentials",subtitle:"Integrate items, equipment, and resources effortlessly into activities.",description:"Atomwalk enables organizations to create, customize, and manage process activities with precision and flexibility. Configure activity specifics like categories, types, and user groups, ensuring seamless alignment with existing workflows. Features like planned durations, open-ended activities, and visual customizations empower businesses to enhance workflow clarity and efficiency. Atomwalk also simplifies resource allocation by allowing users to add required items, link equipment with precise work durations, and manage critical details such as documents, reviews, and costs. With customizable fields and robust tools, Atomwalk ensures every activity is defined, equipped, and executed efficiently, driving operational success.",benefits:["Add items from inventory or create new ones to align with activity needs.","Select or add equipment, with options to book it for specific durations.","Add custom fields to activities based on unique requirements.","Manage documents, reviews, and cost details for each activity.","Ensure equipment availability with defined work durations."],imageSrc:GP,imageAlt:"Activity Creation",imgPosition:"right"},{title:"Optimize Manufacturing Processes with Activity-Based Templates",subtitle:"Create, Manage, and Analyze for efficient process execution.",description:"Easily create a sequence of activities for projects in the manufacturing industry with our intuitive process management system. Define processes by filling essential details, add activities with customizable fields like planned duration and allocation percentage, and manage dependencies. Gain insights through an interactive Gantt chart, track item details (BOM, WIP materials, and output), and evaluate efficiency with detailed cost analysis, including equipment requirements.",benefits:["Define process details (name, category, ID, type, manufacturing details, equivalent sale price, description).","Add activities with fields like duration(Planned number of Days), allocation percentage, and dependencies.","Link dependent activities for seamless workflow management.","View Activity Gantt Chart and dependency graphs."," Monitor BOM, WIP materials, and output details with images and costs.","Analyze equipment requirements and associated costs.","Evaluate process and activity efficiency."],imageSrc:VP,imageAlt:"Creation of Process",imgPosition:"left"}]:"project"==t?[{title:"Efficient Work Order Management Made Simple",subtitle:"Streamline project creation and link seamlessly with sales orders.",description:"Atomwalk enables businesses to create projects seamlessly after confirming sales orders, ensuring smooth transition into work orders. Users can generate detailed projects by linking them to specific sales orders, ensuring all relevant details auto-populate while offering flexibility for customization. From assigning a project manager to selecting a suitable project setup template, Atomwalk simplifies the workflow, making project creation both efficient and adaptable.",benefits:["Unique codes ensure streamlined tracking.","Auto-populates order items and templates linked to sales orders","Edit fields like project title, revenue, start date, and description as needed.","Automatically suggests templates, with options for customization."],imageSrc:KP,imageAlt:"Project/Work Order Creation",imgPosition:"right"},{title:"Empower Your Projects with Advanced Activity Management",subtitle:"Customizable, collaborative, and detailed project activity tracking.",description:"Atomwalk empowers project teams with seamless activity tracking and inventory management. Once the project manager starts a project, allocated users receive job cards with detailed activity instructions and work order references. The structured job card minimizes data input errors, ensuring accuracy. Users can begin activities by clicking the 'Start Project' button in their 'Project Activities' list, with dependencies automatically validated. As activities progress, users can update in-process and output inventory details, track activity completion metrics, and finalize tasks with remarks. Atomwalk also allows the allocation and reallocation of inventory items, with provisions to return unused items, helping businesses reduce waste and optimize inventory tracking.",benefits:["Activities reflect for assigned users after project initiation.","Access detailed job cards with work order references and structured fields for updates.","Activities can only start once dependent tasks are completed."," Update in-process and output inventory details during project execution.","Allocate, reallocate, or return unused items to prevent losses and ensure efficient inventory usage.","Updated details reflect on the final job card for streamlined reporting."],imageSrc:JP,imageAlt:"User Activity Management",imgPosition:"left"},{title:"Streamlined Project Management Tailored for Manufacturing",subtitle:"Efficient Activity Coordination and Resource Tracking",description:"Atomwalk provides manufacturing-focused project management, integrating activity planning, dependency setup, and resource tracking. Activities auto-populate from process templates, with options to add or customize tasks and dependencies using a Gantt Chart view. Users can manage project inventory, equipment requirements, and critical documents essential for execution. The cost analysis module offers insights into activity costs, inventory expenses, and equipment usage, with detailed revenue and margin tracking. Atomwalk ensures precise planning, resource optimization, and improved project efficiency for manufacturing operations.",benefits:["Auto-populated tasks with dependency and sub-activity options."," Visualize and manage critical and other paths for streamlined workflows.","Manage inventory, equipment, and required documents effectively.","Track activity costs, equipment usage, and project margins.","Tools designed for the specific demands of manufacturing projects."],imageSrc:YP,imageAlt:"Project Management",imgPosition:"right"}]:[{title:"Activity Dashboards for Efficient Manufacturing Projects",subtitle:"Track Activities and Ensure Operational Precision",description:"Atomwalk\u2019s Activity Dashboard helps manufacturing teams efficiently track and manage tasks. Users can view assigned activities, track progress, and address overdue or pending tasks. Key metrics include overdue activities, upcoming deadlines, and completed milestones, with dynamic filters for quick sorting by date, type, or status. Designed to optimize workflows, the dashboard provides real-time access to activity details, ensuring seamless task execution and improved project efficiency in manufacturing operations.",benefits:["Track personal activities, including ongoing, overdue, and completed tasks.","Access critical data like deadlines and completion statuses."," Access detailed project overviews, including overdue and future activities.","Sort activities by date, type, status, or assigned user for customized tracking.","Monitor progress, identify delays, and optimize task management."," Use dashboard insights to allocate resources effectively and meet deadlines."],imageSrc:QP,imageAlt:"User Activity Dashboard",imgPosition:"right"},{title:"Optimize Profitability with Atomwalk's Project Margin Dashboard",subtitle:"Customizable, collaborative, and detailed project activity tracking.",description:"Atomwalk\u2019s Project Margin Dashboard provides manufacturing teams with a clear comparison of planned vs. actual margins through graphical views. Users can review project lists with details like assigned managers, project status, and margins. The dashboard also enables quick access to critical data, including project revenue, cost breakdowns, activity dependencies, inventory, and equipment requirements, ensuring better margin control and operational efficiency.",benefits:["Visualize planned vs. actual margins for each project.","Review assigned managers, project status, and key metrics.","Access revenue and cost breakdowns for users, items, and equipment."," Tools tailored for profit tracking and resource efficiency.","Dynamic Filter & Sorting of List."],imageSrc:ZP,imageAlt:"Project Dashboard",imgPosition:"left"},{title:"Optimize Resource Allocation with Atomwalk's Utilization Dashboard",subtitle:"Track Effort Utilization for Better Resource Planning",description:"Atomwalk\u2019s Resource Utilization Dashboard provides a clear view of planned vs. actual effort utilization through dynamic graphical insights. Manufacturing teams can analyze month-wise utilization, compare planned and actual capacities, and filter data by manager, project, user, or date. The dashboard also offers detailed User Effort Utilization Data to monitor resource-specific performance, ensuring effective allocation and efficient workload distribution across projects.",benefits:["Graphical view of planned vs. actual resource usage."," Sort by manager, project, user, or date for precise insights.","Analyze planned and actual monthly effort capacities.","Monitor individual user effort utilization.","Tools to enhance resource efficiency and project alignment."],imageSrc:XP,imageAlt:"Resource Utilisation",imgPosition:"right"}],r=ta();return(0,i.useEffect)((()=>{const e=r.search.match(/\?(\d+)/),t=e?parseInt(e[1],10):NaN;console.log(t,"Step value parsed from URL");const n=isNaN(t)?0:700+630*(t-1);n>0&&window.scrollTo({top:n,behavior:"smooth"})}),[r.search]),(0,g.jsx)($P,{children:n.map((e=>(0,g.jsx)(eR,{children:"left"===e.imgPosition?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(tR,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,g.jsxs)(rR,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(nR,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:mj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(rR,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(nR,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:mj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]}),(0,g.jsx)(tR,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},oR=()=>{const[e,t]=(0,i.useState)(""),n=ta(),r=[{title:"Process Operations for Every Business Need",titles:"Work Order",description:"Comprehensive Solutions for Inventory, Equipment, Documentation, and Process Management.",background:"#d6e7ff",img:`${_P}`},{title:"Integrated Project and Activity Management",titles:"Project Management",description:"Efficiently Link Sales Orders, Track Progress, and Optimize Resources for Manufacturing Excellence.",background:"#d6e7ff",img:`${BP}`},{title:"Advanced Dashboards for Project and Resource Management",titles:"Report & Dashboard",description:"Gain Real-Time Insights into Activity Progress, Project Margins, and Resource Utilization for Optimized Manufacturing Performance.",background:"#d6e7ff",img:`${OE}`}];(0,i.useEffect)((()=>{n.pathname.includes("process")?t("process"):n.pathname.includes("project")?t("project"):t("activityreport")}),[n.pathname]);const o=n.pathname.includes("process")?r[0]:n.pathname.includes("project")?r[1]:(n.pathname.includes("activityreport"),r[2]);return(0,g.jsxs)("div",{children:[(0,g.jsx)(Rp,{title:o.title,description:o.description,background:o.background,img:o.img,lead:!0}),(0,g.jsx)(fj,{bgcolors:"#e8f1fe",data:o.titles}),(0,g.jsx)(iR,{data:e})]})};const aR=function(){const[e,t]=(0,i.useState)(!1),n={username:"ASUTOSH@PMA_00001",password:"ashutosh@11"};(0,i.useEffect)((()=>{localStorage.getItem("apiResponse")||r()}),[]);const r=async()=>{try{const e=await fetch("https://www.atomwalk.com/rest-auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();console.log("API Response:",t),localStorage.setItem("apiResponse",JSON.stringify(t))}catch(e){console.error("Error during login:",e)}};return(0,g.jsxs)("div",{className:"App",children:[(0,g.jsxs)(Ad,{children:[(0,g.jsx)(Oa,{}),(0,g.jsxs)(ya,{children:[(0,g.jsx)(ga,{path:"",element:(0,g.jsx)(kd,{})}),(0,g.jsx)(ga,{path:"/signin.html",element:(0,g.jsx)(tp,{})}),(0,g.jsx)(ga,{path:"/forgotpassword.html",element:(0,g.jsx)(mp,{})}),(0,g.jsx)(ga,{path:"/card.html",element:(0,g.jsx)(ms,{})}),(0,g.jsx)(ga,{path:"/Product.html",element:(0,g.jsx)(Nf,{})}),(0,g.jsx)(ga,{path:"/contactUs.html",element:(0,g.jsx)(Rm,{})}),(0,g.jsx)(ga,{path:"/aboutUs.html",element:(0,g.jsx)(Bh,{})}),(0,g.jsx)(ga,{path:"/pricing.html",element:(0,g.jsx)(ek,{})}),(0,g.jsx)(ga,{path:"/demo.html",element:(0,g.jsx)(ow,{})}),(0,g.jsx)(ga,{path:"/seals.html",element:(0,g.jsx)(fk,{})}),(0,g.jsx)(ga,{path:"/crm.html",element:(0,g.jsx)(qC,{})}),(0,g.jsx)(ga,{path:"/lms.html",element:(0,g.jsx)(sE,{})}),(0,g.jsx)(ga,{path:"/Blog.html",element:(0,g.jsx)(dA,{})}),(0,g.jsx)(ga,{path:"/BlogDetails.html",element:(0,g.jsx)(jA,{})}),(0,g.jsx)(ga,{path:"/hrm.html",element:(0,g.jsx)(tj,{})}),(0,g.jsx)(ga,{path:"/leave.html",element:(0,g.jsx)(aC,{})}),(0,g.jsx)(ga,{path:"/claim.html",element:(0,g.jsx)(aC,{})}),(0,g.jsx)(ga,{path:"/employeehr.html",element:(0,g.jsx)(aC,{})}),(0,g.jsx)(ga,{path:"/payroll.html",element:(0,g.jsx)(aC,{})}),(0,g.jsx)(ga,{path:"/appraisal.html",element:(0,g.jsx)(aC,{})}),(0,g.jsx)(ga,{path:"/attendance.html",element:(0,g.jsx)(aC,{})}),(0,g.jsx)(ga,{path:"/leadManagement.html",element:(0,g.jsx)(OC,{})}),(0,g.jsx)(ga,{path:"/CustomerManagement.html",element:(0,g.jsx)(OC,{})}),(0,g.jsx)(ga,{path:"/Channelpartner.html",element:(0,g.jsx)(OC,{})}),(0,g.jsx)(ga,{path:"/aMCTracking.html",element:(0,g.jsx)(OC,{})}),(0,g.jsx)(ga,{path:"/campaignManagement.html",element:(0,g.jsx)(OC,{})}),(0,g.jsx)(ga,{path:"/userManagement.html",element:(0,g.jsx)(BE,{})}),(0,g.jsx)(ga,{path:"/equipmentManagement.html",element:(0,g.jsx)(BE,{})}),(0,g.jsx)(ga,{path:"/equipmentMaintenance.html",element:(0,g.jsx)(BE,{})}),(0,g.jsx)(ga,{path:"/reportandDashboard.html",element:(0,g.jsx)(BE,{})}),(0,g.jsx)(ga,{path:"/userroleManagement.html",element:(0,g.jsx)(BE,{data:!0})}),(0,g.jsx)(ga,{path:"/labProcessemplate.html",element:(0,g.jsx)(BE,{data:!0})}),(0,g.jsx)(ga,{path:"/labExperimentProject.html",element:(0,g.jsx)(BE,{data:!0})}),(0,g.jsx)(ga,{path:"/pIwithReport.html",element:(0,g.jsx)(BE,{data:!0})}),(0,g.jsx)(ga,{path:"/labmanagement.html",element:(0,g.jsx)(OS,{})}),(0,g.jsx)(ga,{path:"/labequipmentmangement.html",element:(0,g.jsx)(CE,{})}),(0,g.jsx)(ga,{path:"/sales.html",element:(0,g.jsx)(tP,{})}),(0,g.jsx)(ga,{path:"/saleslifecycle.html",element:(0,g.jsx)(CP,{})}),(0,g.jsx)(ga,{path:"/procurement.html",element:(0,g.jsx)(CP,{})}),(0,g.jsx)(ga,{path:"/compliance.html",element:(0,g.jsx)(CP,{})}),(0,g.jsx)(ga,{path:"/salesreport.html",element:(0,g.jsx)(CP,{})}),(0,g.jsx)(ga,{path:"/processandproject.html",element:(0,g.jsx)(NP,{})}),(0,g.jsx)(ga,{path:"/process.html",element:(0,g.jsx)(oR,{})}),(0,g.jsx)(ga,{path:"/project.html",element:(0,g.jsx)(oR,{})}),(0,g.jsx)(ga,{path:"/activityreport.html",element:(0,g.jsx)(oR,{})})]})]}),e&&(0,g.jsx)(Hv,{setOpenslide:t}),(0,g.jsx)(Vv,{setOpenslide:t}),(0,g.jsx)(ig,{})]})},sR=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,6453)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:o,getTTFB:a}=t;n(e),r(e),i(e),o(e),a(e)}))};a.createRoot(document.getElementById("root")).render((0,g.jsx)(i.StrictMode,{children:(0,g.jsx)(aR,{})})),sR()})()})();
//# sourceMappingURL=main.5935ae79.js.map