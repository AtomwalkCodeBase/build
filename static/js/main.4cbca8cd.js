/*! For license information please see main.4cbca8cd.js.LICENSE.txt */
(()=>{var e={5811:(e,t,n)=>{var r=n(347),o=n(1303).each;function i(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}i.prototype={constuctor:i,addHandler:function(e){var t=new r(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;o(t,(function(n,r){if(n.equals(e))return n.destroy(),!t.splice(r,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){o(this.handlers,(function(e){e.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";o(this.handlers,(function(t){t[e]()}))}},e.exports=i},8537:(e,t,n)=>{var r=n(5811),o=n(1303),i=o.each,a=o.isFunction,l=o.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}s.prototype={constructor:s,register:function(e,t,n){var o=this.queries,s=n&&this.browserIsIncapable;return o[e]||(o[e]=new r(e,s)),a(t)&&(t={match:t}),l(t)||(t=[t]),i(t,(function(t){a(t)&&(t={match:t}),o[e].addHandler(t)})),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=s},347:e=>{function t(e){this.options=e,!e.deferSetup&&this.setup()}t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=t},1303:e=>{e.exports={isFunction:function(e){return"function"===typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,r=e.length;n<r&&!1!==t(e[n],n);n++);}}},535:(e,t,n)=>{var r=n(8537);e.exports=new r},7396:(e,t,n)=>{var r;!function(){"use strict";var o=!("undefined"===typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},3240:e=>{"use strict";var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=function(e){return"function"===typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},a=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var r,o=t.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!o&&!i)return!1;for(r in e);return"undefined"===typeof r||t.call(e,r)},l=function(e,t){r&&"__proto__"===t.name?r(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},s=function(e,n){if("__proto__"===n){if(!t.call(e,n))return;if(o)return o(e,n).value}return e[n]};e.exports=function e(){var t,n,r,o,c,u,d=arguments[0],p=1,f=arguments.length,h=!1;for("boolean"===typeof d&&(h=d,d=arguments[1]||{},p=2),(null==d||"object"!==typeof d&&"function"!==typeof d)&&(d={});p<f;++p)if(null!=(t=arguments[p]))for(n in t)r=s(d,n),d!==(o=s(t,n))&&(h&&o&&(a(o)||(c=i(o)))?(c?(c=!1,u=r&&i(r)?r:[]):u=r&&a(r)?r:{},l(d,{name:n,newValue:e(h,u,o)})):"undefined"!==typeof o&&l(d,{name:n,newValue:o}));return d}},4403:e=>{var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,l=/^[;\s]*/,s=/^\s+|\s+$/g,c="";function u(e){return e?e.replace(s,c):c}e.exports=function(e,s){if("string"!==typeof e)throw new TypeError("First argument must be a string");if(!e)return[];s=s||{};var d=1,p=1;function f(e){var t=e.match(n);t&&(d+=t.length);var r=e.lastIndexOf("\n");p=~r?e.length-r:p+e.length}function h(){var e={line:d,column:p};return function(t){return t.position=new m(e),v(),t}}function m(e){this.start=e,this.end={line:d,column:p},this.source=s.source}m.prototype.content=e;var g=[];function y(t){var n=new Error(s.source+":"+d+":"+p+": "+t);if(n.reason=t,n.filename=s.source,n.line=d,n.column=p,n.source=e,!s.silent)throw n;g.push(n)}function x(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function v(){x(r)}function b(e){var t;for(e=e||[];t=w();)!1!==t&&e.push(t);return e}function w(){var t=h();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;c!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,c===e.charAt(n-1))return y("End of comment missing");var r=e.slice(2,n-2);return p+=2,f(r),e=e.slice(n),p+=2,t({type:"comment",comment:r})}}function k(){var e=h(),n=x(o);if(n){if(w(),!x(i))return y("property missing ':'");var r=x(a),s=e({type:"declaration",property:u(n[0].replace(t,c)),value:r?u(r[0].replace(t,c)):c});return x(l),s}}return v(),function(){var e,t=[];for(b(t);e=k();)!1!==e&&(t.push(e),b(t));return t}()}},2740:e=>{"use strict";e.exports=function(e,t,n,r,o,i,a,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,l],u=0;(s=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},1270:(e,t,n)=>{var r=n(7475),o=function(e){var t="",n=Object.keys(e);return n.forEach((function(o,i){var a=e[o];(function(e){return/[height|width]$/.test(e)})(o=r(o))&&"number"===typeof a&&(a+="px"),t+=!0===a?o:!1===a?"not "+o:"("+o+": "+a+")",i<n.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"===typeof e?e:e instanceof Array?(e.forEach((function(n,r){t+=o(n),r<e.length-1&&(t+=", ")})),t):o(e)}},9834:(e,t,n)=>{var r=n(1260)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var a,l,s=t.prefix||"__jp",c=t.name||s+o++,u=t.param||"callback",d=null!=t.timeout?t.timeout:6e4,p=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;d&&(l=setTimeout((function(){h(),n&&n(new Error("Timeout"))}),d));function h(){a.parentNode&&a.parentNode.removeChild(a),window[c]=i,l&&clearTimeout(l)}return window[c]=function(e){r("jsonp got",e),h(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+p(c)).replace("?&","?"),r('jsonp req "%s"',e),(a=document.createElement("script")).src=e,f.parentNode.insertBefore(a,f),function(){window[c]&&h()}};var o=0;function i(){}},1260:(e,t,n)=>{function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.DEBUG),e}(t=e.exports=n(4703)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))})),e.splice(i,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},4703:(e,t,n)=>{var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,i=o-(r||o);e.diff=i,e.prev=r,e.curr=o,r=o;for(var a=new Array(arguments.length),l=0;l<a.length;l++)a[l]=arguments[l];a[0]=t.coerce(a[0]),"string"!==typeof a[0]&&a.unshift("%O");var s=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;s++;var o=t.formatters[r];if("function"===typeof o){var i=a[s];n=o.call(e,i),a.splice(s,1),s--}return n})),t.formatArgs.call(e,a),(n.log||t.log||console.log.bind(console)).apply(e,a)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(4850),t.names=[],t.skips=[],t.formatters={}},4850:e=>{var t=1e3,n=60*t,r=60*n,o=24*r,i=365.25*o;function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,l){l=l||{};var s,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!a)return;var l=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return l*i;case"days":case"day":case"d":return l*o;case"hours":case"hour":case"hrs":case"hr":case"h":return l*r;case"minutes":case"minute":case"mins":case"min":case"m":return l*n;case"seconds":case"second":case"secs":case"sec":case"s":return l*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return l;default:return}}(e);if("number"===c&&!1===isNaN(e))return l.long?a(s=e,o,"day")||a(s,r,"hour")||a(s,n,"minute")||a(s,t,"second")||s+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},446:(e,t,n)=>{var r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,d="object"==typeof self&&self&&self.Object===Object&&self,p=u||d||Function("return this")(),f=Object.prototype.toString,h=Math.max,m=Math.min,g=function(){return p.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return r;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=l.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):a.test(e)?r:+e}e.exports=function(e,t,n){var r,o,i,a,l,s,c=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function v(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=i}function b(){var e=g();if(v(e))return w(e);l=setTimeout(b,function(e){var n=t-(e-s);return d?m(n,i-(e-c)):n}(e))}function w(e){return l=void 0,p&&r?f(e):(r=o=void 0,a)}function k(){var e=g(),n=v(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(b,t),u?f(e):a}(s);if(d)return l=setTimeout(b,t),f(s)}return void 0===l&&(l=setTimeout(b,t)),a}return t=x(t)||0,y(n)&&(u=!!n.leading,i=(d="maxWait"in n)?h(x(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),k.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=o=l=void 0},k.flush=function(){return void 0===l?a:w(g())},k}},381:(e,t,n)=>{var r="Expected a function",o=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,p="object"==typeof self&&self&&self.Object===Object&&self,f=d||p||Function("return this")(),h=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return f.Date.now()};function x(e,t,n){var o,i,a,l,s,c,u=0,d=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError(r);function h(t){var n=o,r=i;return o=i=void 0,u=t,l=e.apply(r,n)}function x(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-u>=a}function w(){var e=y();if(x(e))return k(e);s=setTimeout(w,function(e){var n=t-(e-c);return p?g(n,a-(e-u)):n}(e))}function k(e){return s=void 0,f&&o?h(e):(o=i=void 0,l)}function S(){var e=y(),n=x(e);if(o=arguments,i=this,c=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(w,t),d?h(e):l}(c);if(p)return s=setTimeout(w,t),h(c)}return void 0===s&&(s=setTimeout(w,t)),l}return t=b(t)||0,v(n)&&(d=!!n.leading,a=(p="maxWait"in n)?m(b(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),S.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=c=i=s=void 0},S.flush=function(){return void 0===s?l:k(y())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&h.call(e)==i}(e))return o;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):l.test(e)?o:+e}e.exports=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return v(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),x(e,t,{leading:o,maxWait:t,trailing:i})}},9197:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=null;return t.forEach((function(e){if(null==o){var t=e.apply(void 0,n);null!=t&&(o=t)}})),o}))};var r,o=n(3534),i=(r=o)&&r.__esModule?r:{default:r};e.exports=t.default},3534:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,o,i,a){var l=o||"<<anonymous>>",s=a||r;if(null==n[r])return t?new Error("Required "+i+" `"+s+"` was not specified in `"+l+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),d=6;d<c;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,r,l,i,s].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},1497:(e,t,n)=>{"use strict";var r=n(3218);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5173:(e,t,n)=>{e.exports=n(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2730:(e,t,n)=>{"use strict";var r=n(5043),o=n(8853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function m(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}function v(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,x);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,x);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,x);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),O=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var M=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var I=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=I&&e[I]||e["@@iterator"])?e:null}var N,F=Object.assign;function D(e){if(void 0===N)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||""}return"\n"+N+e}var _=!1;function B(e,t){if(!e||_)return"";_=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var o=c.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(1!==a||1!==l)do{if(a--,0>--l||o[a]!==i[l]){var s="\n"+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=a&&0<=l);break}}}finally{_=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function H(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case j:return"StrictMode";case P:return"Suspense";case A:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case O:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case R:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return W(e(t))}catch(n){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function G(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function J(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function $(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=q(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Y(e,t){null!=(t=t.checked)&&v(e,"checked",t,!1)}function Z(e,t){Y(e,t);var n=q(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function X(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&J(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function ie(e,t){var n=q(t.value),r=q(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(fe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var ye=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xe(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function ve(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Ce(e){if(e=bo(e)){if("function"!==typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=ko(t),ke(e.stateNode,e.type,t))}}function Ee(e){Se?je?je.push(e):je=[e]:Se=e}function Oe(){if(Se){var e=Se,t=je;if(je=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Re(e,t){return e(t)}function Pe(){}var Ae=!1;function Te(e,t,n){if(Ae)return e(t,n);Ae=!0;try{return Re(e,t,n)}finally{Ae=!1,(null!==Se||null!==je)&&(Pe(),Oe())}}function ze(e,t){var n=e.stateNode;if(null===n)return null;var r=ko(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Me=!1;if(u)try{var Ie={};Object.defineProperty(Ie,"passive",{get:function(){Me=!0}}),window.addEventListener("test",Ie,Ie),window.removeEventListener("test",Ie,Ie)}catch(ue){Me=!1}function Le(e,t,n,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ne=!1,Fe=null,De=!1,_e=null,Be={onError:function(e){Ne=!0,Fe=e}};function He(e,t,n,r,o,i,a,l,s){Ne=!1,Fe=null,Le.apply(Be,arguments)}function We(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ue(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function qe(e){if(We(e)!==e)throw Error(i(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=We(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return qe(o),e;if(a===r)return qe(o),t;a=a.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=a;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ge(e):null}function Ge(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ge(e);if(null!==t)return t;e=e.sibling}return null}var Ke=o.unstable_scheduleCallback,Je=o.unstable_cancelCallback,Qe=o.unstable_shouldYield,$e=o.unstable_requestPaint,Ye=o.unstable_now,Ze=o.unstable_getCurrentPriorityLevel,Xe=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~o;0!==l?r=dt(l):0!==(i&=a)&&(r=dt(i))}else 0!==(a=n&~o)?r=dt(a):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-at(t)),r|=e[n],t&=~o;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function xt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var vt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,jt,Ct,Et=!1,Ot=[],Rt=null,Pt=null,At=null,Tt=new Map,zt=new Map,Mt=[],It="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(t.pointerId)}}function Nt(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=bo(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Ft(e){var t=vo(e.target);if(null!==t){var n=We(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ue(n)))return e.blockedOn=t,void Ct(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bo(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function _t(e,t,n){Dt(e)&&n.delete(t)}function Bt(){Et=!1,null!==Rt&&Dt(Rt)&&(Rt=null),null!==Pt&&Dt(Pt)&&(Pt=null),null!==At&&Dt(At)&&(At=null),Tt.forEach(_t),zt.forEach(_t)}function Ht(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Bt)))}function Wt(e){function t(t){return Ht(t,e)}if(0<Ot.length){Ht(Ot[0],e);for(var n=1;n<Ot.length;n++){var r=Ot[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Rt&&Ht(Rt,e),null!==Pt&&Ht(Pt,e),null!==At&&Ht(At,e),Tt.forEach(t),zt.forEach(t),n=0;n<Mt.length;n++)(r=Mt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&null===(n=Mt[0]).blockedOn;)Ft(n),null===n.blockedOn&&Mt.shift()}var Ut=b.ReactCurrentBatchConfig,qt=!0;function Vt(e,t,n,r){var o=vt,i=Ut.transition;Ut.transition=null;try{vt=1,Kt(e,t,n,r)}finally{vt=o,Ut.transition=i}}function Gt(e,t,n,r){var o=vt,i=Ut.transition;Ut.transition=null;try{vt=4,Kt(e,t,n,r)}finally{vt=o,Ut.transition=i}}function Kt(e,t,n,r){if(qt){var o=Qt(e,t,n,r);if(null===o)qr(e,t,r,Jt,n),Lt(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Rt=Nt(Rt,e,t,n,r,o),!0;case"dragenter":return Pt=Nt(Pt,e,t,n,r,o),!0;case"mouseover":return At=Nt(At,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Tt.set(i,Nt(Tt.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,zt.set(i,Nt(zt.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<It.indexOf(e)){for(;null!==o;){var i=bo(o);if(null!==i&&wt(i),null===(i=Qt(e,t,n,r))&&qr(e,t,r,Jt,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else qr(e,t,r,null,n)}}var Jt=null;function Qt(e,t,n,r){if(Jt=null,null!==(e=vo(e=we(r))))if(null===(t=We(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ue(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jt=e,null}function $t(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Xe:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Yt=null,Zt=null,Xt=null;function en(){if(Xt)return Xt;var e,t,n=Zt,r=n.length,o="value"in Yt?Yt.value:Yt.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Xt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=F({},cn,{view:0,detail:0}),pn=on(dn),fn=F({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(fn),mn=on(F({},fn,{dataTransfer:0})),gn=on(F({},dn,{relatedTarget:0})),yn=on(F({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),xn=F({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vn=on(xn),bn=on(F({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return jn}var En=F({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),On=on(En),Rn=on(F({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=on(F({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),An=on(F({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=F({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zn=on(Tn),Mn=[9,13,27,32],In=u&&"CompositionEvent"in window,Ln=null;u&&"documentMode"in document&&(Ln=document.documentMode);var Nn=u&&"TextEvent"in window&&!Ln,Fn=u&&(!In||Ln&&8<Ln&&11>=Ln),Dn=String.fromCharCode(32),_n=!1;function Bn(e,t){switch(e){case"keyup":return-1!==Mn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Wn=!1;var Un={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Un[e.type]:"textarea"===t}function Vn(e,t,n,r){Ee(r),0<(t=Gr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Kn=null;function Jn(e){Dr(e,0)}function Qn(e){if(K(wo(e)))return e}function $n(e,t){if("change"===e)return t}var Yn=!1;if(u){var Zn;if(u){var Xn="oninput"in document;if(!Xn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Xn="function"===typeof er.oninput}Zn=Xn}else Zn=!1;Yn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Gn&&(Gn.detachEvent("onpropertychange",nr),Kn=Gn=null)}function nr(e){if("value"===e.propertyName&&Qn(Kn)){var t=[];Vn(t,Kn,e,we(e)),Te(Jn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Gn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(Kn)}function ir(e,t){if("click"===e)return Qn(t)}function ar(e,t){if("input"===e||"change"===e)return Qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!lr(e[o],t[o]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=J();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=J((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ur(n,i);var a=ur(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,yr=null,xr=null,vr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;vr||null==gr||gr!==J(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},xr&&sr(xr,r)||(xr=r,0<(r=Gr(yr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},jr={};function Cr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Sr[e]=n[t];return e}u&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Er=Cr("animationend"),Or=Cr("animationiteration"),Rr=Cr("animationstart"),Pr=Cr("transitionend"),Ar=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(e,t){Ar.set(e,t),s(t,[e])}for(var Mr=0;Mr<Tr.length;Mr++){var Ir=Tr[Mr];zr(Ir.toLowerCase(),"on"+(Ir[0].toUpperCase()+Ir.slice(1)))}zr(Er,"onAnimationEnd"),zr(Or,"onAnimationIteration"),zr(Rr,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Pr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Fr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,l,s,c){if(He.apply(this,arguments),Ne){if(!Ne)throw Error(i(198));var u=Fe;Ne=!1,Fe=null,De||(De=!0,_e=u)}}(r,t,void 0,e),e.currentTarget=null}function Dr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Fr(o,l,c),i=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Fr(o,l,c),i=s}}}if(De)throw e=_e,De=!1,_e=null,e}function _r(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Ur(t,e,2,!1),n.add(r))}function Br(e,t,n){var r=0;t&&(r|=4),Ur(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Hr]){e[Hr]=!0,a.forEach((function(t){"selectionchange"!==t&&(Nr.has(t)||Br(t,!1,e),Br(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Hr]||(t[Hr]=!0,Br("selectionchange",!1,t))}}function Ur(e,t,n,r){switch($t(t)){case 1:var o=Vt;break;case 4:o=Gt;break;default:o=Kt}n=o.bind(null,t,n,e),o=void 0,!Me||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function qr(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;a=a.return}for(;null!==l;){if(null===(a=vo(l)))return;if(5===(s=a.tag)||6===s){r=i=a;continue e}l=l.parentNode}}r=r.return}Te((function(){var r=i,o=we(n),a=[];e:{var l=Ar.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=On;break;case"focusin":c="focus",s=gn;break;case"focusout":c="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pn;break;case Er:case Or:case Rr:s=yn;break;case Pr:s=An;break;case"scroll":s=pn;break;case"wheel":s=zn;break;case"copy":case"cut":case"paste":s=vn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Rn}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==l?l+"Capture":null:l;u=[];for(var f,h=r;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==p&&(null!=(m=ze(h,p))&&u.push(Vr(h,m,f)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,o),a.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!vo(c)&&!c[mo])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?vo(c):null)&&(c!==(d=We(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=hn,m="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=Rn,m="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==s?l:wo(s),f=null==c?l:wo(c),(l=new u(m,h+"leave",s,n,o)).target=d,l.relatedTarget=f,m=null,vo(o)===r&&((u=new u(p,h+"enter",c,n,o)).target=f,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(p=c,h=0,f=u=s;f;f=Kr(f))h++;for(f=0,m=p;m;m=Kr(m))f++;for(;0<h-f;)u=Kr(u),h--;for(;0<f-h;)p=Kr(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kr(u),p=Kr(p)}u=null}else u=null;null!==s&&Jr(a,l,s,u,!1),null!==c&&null!==d&&Jr(a,d,c,u,!0)}if("select"===(s=(l=r?wo(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=$n;else if(qn(l))if(Yn)g=ar;else{g=or;var y=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ir);switch(g&&(g=g(e,r))?Vn(a,g,n,o):(y&&y(e,l,r),"focusout"===e&&(y=l._wrapperState)&&y.controlled&&"number"===l.type&&ee(l,"number",l.value)),y=r?wo(r):window,e){case"focusin":(qn(y)||"true"===y.contentEditable)&&(gr=y,yr=r,xr=null);break;case"focusout":xr=yr=gr=null;break;case"mousedown":vr=!0;break;case"contextmenu":case"mouseup":case"dragend":vr=!1,br(a,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,o)}var x;if(In)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Wn?Bn(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Fn&&"ko"!==n.locale&&(Wn||"onCompositionStart"!==v?"onCompositionEnd"===v&&Wn&&(x=en()):(Zt="value"in(Yt=o)?Yt.value:Yt.textContent,Wn=!0)),0<(y=Gr(r,v)).length&&(v=new bn(v,e,null,n,o),a.push({event:v,listeners:y}),x?v.data=x:null!==(x=Hn(n))&&(v.data=x))),(x=Nn?function(e,t){switch(e){case"compositionend":return Hn(t);case"keypress":return 32!==t.which?null:(_n=!0,Dn);case"textInput":return(e=t.data)===Dn&&_n?null:e;default:return null}}(e,n):function(e,t){if(Wn)return"compositionend"===e||!In&&Bn(e,t)?(e=en(),Xt=Zt=Yt=null,Wn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Gr(r,"onBeforeInput")).length&&(o=new bn("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=x))}Dr(a,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=ze(e,n))&&r.unshift(Vr(e,i,o)),null!=(i=ze(e,t))&&r.push(Vr(e,i,o))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Jr(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,o?null!=(s=ze(n,i))&&a.unshift(Vr(n,s,l)):o||null!=(s=ze(n,i))&&a.push(Vr(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Qr=/\r\n?/g,$r=/\u0000|\uFFFD/g;function Yr(e){return("string"===typeof e?e:""+e).replace(Qr,"\n").replace($r,"")}function Zr(e,t,n){if(t=Yr(t),Yr(e)!==t&&n)throw Error(i(425))}function Xr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,io="function"===typeof Promise?Promise:void 0,ao="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof io?function(e){return io.resolve(null).then(e).catch(lo)}:ro;function lo(e){setTimeout((function(){throw e}))}function so(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Wt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Wt(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),fo="__reactFiber$"+po,ho="__reactProps$"+po,mo="__reactContainer$"+po,go="__reactEvents$"+po,yo="__reactListeners$"+po,xo="__reactHandles$"+po;function vo(e){var t=e[fo];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[fo]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=uo(e);null!==e;){if(n=e[fo])return n;e=uo(e)}return t}n=(e=n).parentNode}return null}function bo(e){return!(e=e[fo]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ko(e){return e[ho]||null}var So=[],jo=-1;function Co(e){return{current:e}}function Eo(e){0>jo||(e.current=So[jo],So[jo]=null,jo--)}function Oo(e,t){jo++,So[jo]=e.current,e.current=t}var Ro={},Po=Co(Ro),Ao=Co(!1),To=Ro;function zo(e,t){var n=e.type.contextTypes;if(!n)return Ro;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Mo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Io(){Eo(Ao),Eo(Po)}function Lo(e,t,n){if(Po.current!==Ro)throw Error(i(168));Oo(Po,t),Oo(Ao,n)}function No(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(i(108,U(e)||"Unknown",o));return F({},n,r)}function Fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ro,To=Po.current,Oo(Po,e),Oo(Ao,Ao.current),!0}function Do(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=No(e,t,To),r.__reactInternalMemoizedMergedChildContext=e,Eo(Ao),Eo(Po),Oo(Po,e)):Eo(Ao),Oo(Ao,n)}var _o=null,Bo=!1,Ho=!1;function Wo(e){null===_o?_o=[e]:_o.push(e)}function Uo(){if(!Ho&&null!==_o){Ho=!0;var e=0,t=vt;try{var n=_o;for(vt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}_o=null,Bo=!1}catch(o){throw null!==_o&&(_o=_o.slice(e+1)),Ke(Xe,Uo),o}finally{vt=t,Ho=!1}}return null}var qo=[],Vo=0,Go=null,Ko=0,Jo=[],Qo=0,$o=null,Yo=1,Zo="";function Xo(e,t){qo[Vo++]=Ko,qo[Vo++]=Go,Go=e,Ko=t}function ei(e,t,n){Jo[Qo++]=Yo,Jo[Qo++]=Zo,Jo[Qo++]=$o,$o=e;var r=Yo;e=Zo;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Yo=1<<32-at(t)+o|n<<o|r,Zo=i+e}else Yo=1<<i|n<<o|r,Zo=e}function ti(e){null!==e.return&&(Xo(e,1),ei(e,1,0))}function ni(e){for(;e===Go;)Go=qo[--Vo],qo[Vo]=null,Ko=qo[--Vo],qo[Vo]=null;for(;e===$o;)$o=Jo[--Qo],Jo[Qo]=null,Zo=Jo[--Qo],Jo[Qo]=null,Yo=Jo[--Qo],Jo[Qo]=null}var ri=null,oi=null,ii=!1,ai=null;function li(e,t){var n=Tc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function si(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ri=e,oi=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ri=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==$o?{id:Yo,overflow:Zo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ri=e,oi=null,!0);default:return!1}}function ci(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ui(e){if(ii){var t=oi;if(t){var n=t;if(!si(e,t)){if(ci(e))throw Error(i(418));t=co(n.nextSibling);var r=ri;t&&si(e,t)?li(r,n):(e.flags=-4097&e.flags|2,ii=!1,ri=e)}}else{if(ci(e))throw Error(i(418));e.flags=-4097&e.flags|2,ii=!1,ri=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ri=e}function pi(e){if(e!==ri)return!1;if(!ii)return di(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oi)){if(ci(e))throw fi(),Error(i(418));for(;t;)li(e,t),t=co(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oi=co(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oi=null}}else oi=ri?co(e.stateNode.nextSibling):null;return!0}function fi(){for(var e=oi;e;)e=co(e.nextSibling)}function hi(){oi=ri=null,ii=!1}function mi(e){null===ai?ai=[e]:ai.push(e)}var gi=b.ReactCurrentBatchConfig;function yi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function xi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vi(e){return(0,e._init)(e._payload)}function bi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Mc(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Fc(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===z&&vi(i)===t.type)?((r=o(t,n.props)).ref=yi(e,t,n),r.return=e,r):((r=Ic(n.type,n.key,n.props,null,e.mode,r)).ref=yi(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Dc(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Lc(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Fc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ic(t.type,t.key,t.props,null,e.mode,n)).ref=yi(e,null,t),n.return=e,n;case k:return(t=Dc(t,e.mode,n)).return=e,t;case z:return p(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lc(t,e.mode,n,null)).return=e,t;xi(e,t)}return null}function f(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?c(e,t,n,r):null;case k:return n.key===o?u(e,t,n,r):null;case z:return f(e,t,(o=n._init)(n._payload),r)}if(te(n)||L(n))return null!==o?null:d(e,t,n,r,null);xi(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case z:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,o,null);xi(t,r)}return null}function m(o,i,l,s){for(var c=null,u=null,d=i,m=i=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=f(o,d,l[m],s);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(o,d),i=a(y,i,m),null===u?c=y:u.sibling=y,u=y,d=g}if(m===l.length)return n(o,d),ii&&Xo(o,m),c;if(null===d){for(;m<l.length;m++)null!==(d=p(o,l[m],s))&&(i=a(d,i,m),null===u?c=d:u.sibling=d,u=d);return ii&&Xo(o,m),c}for(d=r(o,d);m<l.length;m++)null!==(g=h(d,o,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=a(g,i,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(o,e)})),ii&&Xo(o,m),c}function g(o,l,s,c){var u=L(s);if("function"!==typeof u)throw Error(i(150));if(null==(s=u.call(s)))throw Error(i(151));for(var d=u=null,m=l,g=l=0,y=null,x=s.next();null!==m&&!x.done;g++,x=s.next()){m.index>g?(y=m,m=null):y=m.sibling;var v=f(o,m,x.value,c);if(null===v){null===m&&(m=y);break}e&&m&&null===v.alternate&&t(o,m),l=a(v,l,g),null===d?u=v:d.sibling=v,d=v,m=y}if(x.done)return n(o,m),ii&&Xo(o,g),u;if(null===m){for(;!x.done;g++,x=s.next())null!==(x=p(o,x.value,c))&&(l=a(x,l,g),null===d?u=x:d.sibling=x,d=x);return ii&&Xo(o,g),u}for(m=r(o,m);!x.done;g++,x=s.next())null!==(x=h(m,o,g,x.value,c))&&(e&&null!==x.alternate&&m.delete(null===x.key?g:x.key),l=a(x,l,g),null===d?u=x:d.sibling=x,d=x);return e&&m.forEach((function(e){return t(o,e)})),ii&&Xo(o,g),u}return function e(r,i,a,s){if("object"===typeof a&&null!==a&&a.type===S&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=i;null!==u;){if(u.key===c){if((c=a.type)===S){if(7===u.tag){n(r,u.sibling),(i=o(u,a.props.children)).return=r,r=i;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===z&&vi(c)===u.type){n(r,u.sibling),(i=o(u,a.props)).ref=yi(r,u,a),i.return=r,r=i;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===S?((i=Lc(a.props.children,r.mode,s,a.key)).return=r,r=i):((s=Ic(a.type,a.key,a.props,null,r.mode,s)).ref=yi(r,i,a),s.return=r,r=s)}return l(r);case k:e:{for(u=a.key;null!==i;){if(i.key===u){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){n(r,i.sibling),(i=o(i,a.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Dc(a,r.mode,s)).return=r,r=i}return l(r);case z:return e(r,i,(u=a._init)(a._payload),s)}if(te(a))return m(r,i,a,s);if(L(a))return g(r,i,a,s);xi(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(n(r,i.sibling),(i=o(i,a)).return=r,r=i):(n(r,i),(i=Fc(a,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var wi=bi(!0),ki=bi(!1),Si=Co(null),ji=null,Ci=null,Ei=null;function Oi(){Ei=Ci=ji=null}function Ri(e){var t=Si.current;Eo(Si),e._currentValue=t}function Pi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ai(e,t){ji=e,Ei=Ci=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(vl=!0),e.firstContext=null)}function Ti(e){var t=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:t,next:null},null===Ci){if(null===ji)throw Error(i(308));Ci=e,ji.dependencies={lanes:0,firstContext:e}}else Ci=Ci.next=e;return t}var zi=null;function Mi(e){null===zi?zi=[e]:zi.push(e)}function Ii(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Mi(t)):(n.next=o.next,o.next=n),t.interleaved=n,Li(e,r)}function Li(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ni=!1;function Fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Di(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _i(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Rs)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Li(e,n)}return null===(o=r.interleaved)?(t.next=t,Mi(r)):(t.next=o.next,o.next=t),r.interleaved=t,Li(e,n)}function Hi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,xt(e,n)}}function Wi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var o=e.updateQueue;Ni=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,c=s.next;s.next=null,null===a?i=c:a.next=c,a=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==i){var d=o.baseState;for(a=0,u=c=s=null,l=i;;){var p=l.lane,f=l.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(p=t,f=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(f,d,p):h)||void 0===p)break e;d=F({},d,p);break e;case 2:Ni=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,a|=p;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(p=l).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===u&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Ns|=a,e.lanes=a,e.memoizedState=d}}function qi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(i(191,o));o.call(r)}}}var Vi={},Gi=Co(Vi),Ki=Co(Vi),Ji=Co(Vi);function Qi(e){if(e===Vi)throw Error(i(174));return e}function $i(e,t){switch(Oo(Ji,t),Oo(Ki,e),Oo(Gi,Vi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Eo(Gi),Oo(Gi,t)}function Yi(){Eo(Gi),Eo(Ki),Eo(Ji)}function Zi(e){Qi(Ji.current);var t=Qi(Gi.current),n=se(t,e.type);t!==n&&(Oo(Ki,e),Oo(Gi,n))}function Xi(e){Ki.current===e&&(Eo(Gi),Eo(Ki))}var ea=Co(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var oa=b.ReactCurrentDispatcher,ia=b.ReactCurrentBatchConfig,aa=0,la=null,sa=null,ca=null,ua=!1,da=!1,pa=0,fa=0;function ha(){throw Error(i(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,o,a){if(aa=a,la=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oa.current=null===e||null===e.memoizedState?Xa:el,e=n(r,o),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(i(301));a+=1,ca=sa=null,t.updateQueue=null,oa.current=tl,e=n(r,o)}while(da)}if(oa.current=Za,t=null!==sa&&null!==sa.next,aa=0,ca=sa=la=null,ua=!1,t)throw Error(i(300));return e}function ya(){var e=0!==pa;return pa=0,e}function xa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?la.memoizedState=ca=e:ca=ca.next=e,ca}function va(){if(null===sa){var e=la.alternate;e=null!==e?e.memoizedState:null}else e=sa.next;var t=null===ca?la.memoizedState:ca.next;if(null!==t)ca=t,sa=e;else{if(null===e)throw Error(i(310));e={memoizedState:(sa=e).memoizedState,baseState:sa.baseState,baseQueue:sa.baseQueue,queue:sa.queue,next:null},null===ca?la.memoizedState=ca=e:ca=ca.next=e}return ca}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=va(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=sa,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var l=o.next;o.next=a.next,a.next=l}r.baseQueue=o=a,n.pending=null}if(null!==o){a=o.next,r=r.baseState;var s=l=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=p,l=r):c=c.next=p,la.lanes|=d,Ns|=d}u=u.next}while(null!==u&&u!==a);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(vl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{a=o.lane,la.lanes|=a,Ns|=a,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=va(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{a=e(a,l.action),l=l.next}while(l!==o);lr(a,t.memoizedState)||(vl=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Sa(){}function ja(e,t){var n=la,r=va(),o=t(),a=!lr(r.memoizedState,o);if(a&&(r.memoizedState=o,vl=!0),r=r.queue,Na(Oa.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,Ta(9,Ea.bind(null,n,r,o,t),void 0,null),null===Ps)throw Error(i(349));0!==(30&aa)||Ca(n,t,o)}return o}function Ca(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ea(e,t,n,r){t.value=n,t.getSnapshot=r,Ra(t)&&Pa(e)}function Oa(e,t,n){return n((function(){Ra(t)&&Pa(e)}))}function Ra(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Pa(e){var t=Li(e,1);null!==t&&nc(t,e,1,-1)}function Aa(e){var t=xa();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Ja.bind(null,la,e),[t.memoizedState,e]}function Ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function za(){return va().memoizedState}function Ma(e,t,n,r){var o=xa();la.flags|=e,o.memoizedState=Ta(1|t,n,void 0,void 0===r?null:r)}function Ia(e,t,n,r){var o=va();r=void 0===r?null:r;var i=void 0;if(null!==sa){var a=sa.memoizedState;if(i=a.destroy,null!==r&&ma(r,a.deps))return void(o.memoizedState=Ta(t,n,i,r))}la.flags|=e,o.memoizedState=Ta(1|t,n,i,r)}function La(e,t){return Ma(8390656,8,e,t)}function Na(e,t){return Ia(2048,8,e,t)}function Fa(e,t){return Ia(4,2,e,t)}function Da(e,t){return Ia(4,4,e,t)}function _a(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ba(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ia(4,4,_a.bind(null,t,e),n)}function Ha(){}function Wa(e,t){var n=va();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ua(e,t){var n=va();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qa(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,vl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),la.lanes|=n,Ns|=n,e.baseState=!0),t)}function Va(e,t){var n=vt;vt=0!==n&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{vt=n,ia.transition=r}}function Ga(){return va().memoizedState}function Ka(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qa(e))$a(t,n);else if(null!==(n=Ii(e,t,n,r))){nc(n,e,r,ec()),Ya(n,t,r)}}function Ja(e,t,n){var r=tc(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qa(e))$a(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,lr(l,a)){var s=t.interleaved;return null===s?(o.next=o,Mi(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(c){}null!==(n=Ii(e,t,o,r))&&(nc(n,e,r,o=ec()),Ya(n,t,r))}}function Qa(e){var t=e.alternate;return e===la||null!==t&&t===la}function $a(e,t){da=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ya(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,xt(e,n)}}var Za={readContext:Ti,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},Xa={readContext:Ti,useCallback:function(e,t){return xa().memoizedState=[e,void 0===t?null:t],e},useContext:Ti,useEffect:La,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ma(4194308,4,_a.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ma(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ma(4,2,e,t)},useMemo:function(e,t){var n=xa();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xa();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ka.bind(null,la,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},xa().memoizedState=e},useState:Aa,useDebugValue:Ha,useDeferredValue:function(e){return xa().memoizedState=e},useTransition:function(){var e=Aa(!1),t=e[0];return e=Va.bind(null,e[1]),xa().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=la,o=xa();if(ii){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Ps)throw Error(i(349));0!==(30&aa)||Ca(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,La(Oa.bind(null,r,a,e),[e]),r.flags|=2048,Ta(9,Ea.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=xa(),t=Ps.identifierPrefix;if(ii){var n=Zo;t=":"+t+"R"+(n=(Yo&~(1<<32-at(Yo)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ti,useCallback:Wa,useContext:Ti,useEffect:Na,useImperativeHandle:Ba,useInsertionEffect:Fa,useLayoutEffect:Da,useMemo:Ua,useReducer:wa,useRef:za,useState:function(){return wa(ba)},useDebugValue:Ha,useDeferredValue:function(e){return qa(va(),sa.memoizedState,e)},useTransition:function(){return[wa(ba)[0],va().memoizedState]},useMutableSource:Sa,useSyncExternalStore:ja,useId:Ga,unstable_isNewReconciler:!1},tl={readContext:Ti,useCallback:Wa,useContext:Ti,useEffect:Na,useImperativeHandle:Ba,useInsertionEffect:Fa,useLayoutEffect:Da,useMemo:Ua,useReducer:ka,useRef:za,useState:function(){return ka(ba)},useDebugValue:Ha,useDeferredValue:function(e){var t=va();return null===sa?t.memoizedState=e:qa(t,sa.memoizedState,e)},useTransition:function(){return[ka(ba)[0],va().memoizedState]},useMutableSource:Sa,useSyncExternalStore:ja,useId:Ga,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=F({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),i=_i(r,o);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Bi(e,i,o))&&(nc(t,e,o,r),Hi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),i=_i(r,o);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Bi(e,i,o))&&(nc(t,e,o,r),Hi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),o=_i(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Bi(e,o,r))&&(nc(t,e,r,n),Hi(t,e,r))}};function il(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(o,i))}function al(e,t,n){var r=!1,o=Ro,i=t.contextType;return"object"===typeof i&&null!==i?i=Ti(i):(o=Mo(t)?To:Po.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?zo(e,o):Ro),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Fi(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=Ti(i):(i=Mo(t)?To:Po.current,o.context=zo(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Ui(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=H(r),r=r.return}while(r);var o=n}catch(i){o="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var pl="function"===typeof WeakMap?WeakMap:Map;function fl(e,t,n){(n=_i(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qs||(qs=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=_i(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Gs?Gs=new Set([this]):Gs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function yl(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=_i(-1,1)).tag=2,Bi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var xl=b.ReactCurrentOwner,vl=!1;function bl(e,t,n,r){t.child=null===e?ki(t,null,n,r):wi(t,e.child,n,r)}function wl(e,t,n,r,o){n=n.render;var i=t.ref;return Ai(t,o),r=ga(e,t,n,r,i,o),n=ya(),null===e||vl?(ii&&n&&ti(t),t.flags|=1,bl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ql(e,t,o))}function kl(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||zc(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ic(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Sl(e,t,i,r,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(a,r)&&e.ref===t.ref)return ql(e,t,o)}return t.flags|=1,(e=Mc(i,r)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(vl=!1,t.pendingProps=r=i,0===(e.lanes&o))return t.lanes=e.lanes,ql(e,t,o);0!==(131072&e.flags)&&(vl=!0)}}return El(e,t,n,r,o)}function jl(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oo(Ms,zs),zs|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Oo(Ms,zs),zs|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Oo(Ms,zs),zs|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Oo(Ms,zs),zs|=r;return bl(e,t,o,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,o){var i=Mo(n)?To:Po.current;return i=zo(t,i),Ai(t,o),n=ga(e,t,n,r,i,o),r=ya(),null===e||vl?(ii&&r&&ti(t),t.flags|=1,bl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ql(e,t,o))}function Ol(e,t,n,r,o){if(Mo(n)){var i=!0;Fo(t)}else i=!1;if(Ai(t,o),null===t.stateNode)Ul(e,t),al(t,n,r),sl(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=Ti(c):c=zo(t,c=Mo(n)?To:Po.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,a,r,c),Ni=!1;var p=t.memoizedState;a.state=p,Ui(t,r,a,o),s=t.memoizedState,l!==r||p!==s||Ao.current||Ni?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=Ni||il(t,n,l,r,p,s,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Di(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),a.props=c,d=t.pendingProps,p=a.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ti(s):s=zo(t,s=Mo(n)?To:Po.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==d||p!==s)&&ll(t,a,r,s),Ni=!1,p=t.memoizedState,a.state=p,Ui(t,r,a,o);var h=t.memoizedState;l!==d||p!==h||Ao.current||Ni?("function"===typeof f&&(rl(t,n,f,r),h=t.memoizedState),(c=Ni||il(t,n,c,r,p,h,s)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=c):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Rl(e,t,n,r,i,o)}function Rl(e,t,n,r,o,i){Cl(e,t);var a=0!==(128&t.flags);if(!r&&!a)return o&&Do(t,n,!1),ql(e,t,i);r=t.stateNode,xl.current=t;var l=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wi(t,e.child,null,i),t.child=wi(t,null,l,i)):bl(e,t,l,i),t.memoizedState=r.state,o&&Do(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?Lo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Lo(0,t.context,!1),$i(e,t.containerInfo)}function Al(e,t,n,r,o){return hi(),mi(o),t.flags|=256,bl(e,t,n,r),t.child}var Tl,zl,Ml,Il,Ll={dehydrated:null,treeContext:null,retryLane:0};function Nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fl(e,t,n){var r,o=t.pendingProps,a=ea.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Oo(ea,1&a),null===e)return ui(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Nc(s,o,0,null),e=Lc(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Nl(n),t.memoizedState=Ll,e):Dl(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,o,a,l){if(n)return 256&t.flags?(t.flags&=-257,_l(e,t,l,r=ul(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Nc({mode:"visible",children:r.children},o,0,null),(a=Lc(a,o,l,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wi(t,e.child,null,l),t.child.memoizedState=Nl(l),t.memoizedState=Ll,a);if(0===(1&t.mode))return _l(e,t,l,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,_l(e,t,l,r=ul(a=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),vl||s){if(null!==(r=Ps)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|l))?0:o)&&o!==a.retryLane&&(a.retryLane=o,Li(e,o),nc(r,e,o,-1))}return mc(),_l(e,t,l,r=ul(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Oc.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,oi=co(o.nextSibling),ri=t,ii=!0,ai=null,null!==e&&(Jo[Qo++]=Yo,Jo[Qo++]=Zo,Jo[Qo++]=$o,Yo=e.id,Zo=e.overflow,$o=t),t=Dl(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,a,n);if(l){l=o.fallback,s=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=c,t.deletions=null):(o=Mc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?l=Mc(r,l):(l=Lc(l,s,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?Nl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ll,o}return e=(l=e.child).sibling,o=Mc(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Dl(e,t){return(t=Nc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function _l(e,t,n,r){return null!==r&&mi(r),wi(t,e.child,null,n),(e=Dl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Pi(e.return,t,n)}function Hl(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Wl(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(bl(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bl(e,n,t);else if(19===e.tag)Bl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Oo(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Hl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ta(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Hl(t,!0,n,null,i);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ul(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ql(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ns|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Mc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Mc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Gl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gl(t),null;case 1:case 17:return Mo(t.type)&&Io(),Gl(t),null;case 3:return r=t.stateNode,Yi(),Eo(Ao),Eo(Po),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(pi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ai&&(ac(ai),ai=null))),zl(e,t),Gl(t),null;case 5:Xi(t);var o=Qi(Ji.current);if(n=t.type,null!==e&&null!=t.stateNode)Ml(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Gl(t),null}if(e=Qi(Gi.current),pi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[fo]=t,r[ho]=a,e=0!==(1&t.mode),n){case"dialog":_r("cancel",r),_r("close",r);break;case"iframe":case"object":case"embed":_r("load",r);break;case"video":case"audio":for(o=0;o<Lr.length;o++)_r(Lr[o],r);break;case"source":_r("error",r);break;case"img":case"image":case"link":_r("error",r),_r("load",r);break;case"details":_r("toggle",r);break;case"input":$(r,a),_r("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},_r("invalid",r);break;case"textarea":oe(r,a),_r("invalid",r)}for(var s in xe(n,a),o=null,a)if(a.hasOwnProperty(s)){var c=a[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Zr(r.textContent,c,e),o=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Zr(r.textContent,c,e),o=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&_r("scroll",r)}switch(n){case"input":G(r),X(r,a,!0);break;case"textarea":G(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Xr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fo]=t,e[ho]=r,Tl(e,t,!1,!1),t.stateNode=e;e:{switch(s=ve(n,r),n){case"dialog":_r("cancel",e),_r("close",e),o=r;break;case"iframe":case"object":case"embed":_r("load",e),o=r;break;case"video":case"audio":for(o=0;o<Lr.length;o++)_r(Lr[o],e);o=r;break;case"source":_r("error",e),o=r;break;case"img":case"image":case"link":_r("error",e),_r("load",e),o=r;break;case"details":_r("toggle",e),o=r;break;case"input":$(e,r),o=Q(e,r),_r("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=F({},r,{value:void 0}),_r("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),_r("invalid",e)}for(a in xe(n,o),c=o)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?ge(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(l.hasOwnProperty(a)?null!=u&&"onScroll"===a&&_r("scroll",e):null!=u&&v(e,a,u,s))}switch(n){case"input":G(e),X(e,r,!1);break;case"textarea":G(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Xr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Gl(t),null;case 6:if(e&&null!=t.stateNode)Il(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Qi(Ji.current),Qi(Gi.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[fo]=t,(a=r.nodeValue!==n)&&null!==(e=ri))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fo]=t,t.stateNode=r}return Gl(t),null;case 13:if(Eo(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==oi&&0!==(1&t.mode)&&0===(128&t.flags))fi(),hi(),t.flags|=98560,a=!1;else if(a=pi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[fo]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Gl(t),a=!1}else null!==ai&&(ac(ai),ai=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Is&&(Is=3):mc())),null!==t.updateQueue&&(t.flags|=4),Gl(t),null);case 4:return Yi(),zl(e,t),null===e&&Wr(t.stateNode.containerInfo),Gl(t),null;case 10:return Ri(t.type._context),Gl(t),null;case 19:if(Eo(ea),null===(a=t.memoizedState))return Gl(t),null;if(r=0!==(128&t.flags),null===(s=a.rendering))if(r)Vl(a,!1);else{if(0!==Is||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ta(e))){for(t.flags|=128,Vl(a,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Oo(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Ye()>Ws&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(a,!0),null===a.tail&&"hidden"===a.tailMode&&!s.alternate&&!ii)return Gl(t),null}else 2*Ye()-a.renderingStartTime>Ws&&1073741824!==n&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=a.last)?n.sibling=s:t.child=s,a.last=s)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ye(),t.sibling=null,n=ea.current,Oo(ea,r?1&n|2:1&n),t):(Gl(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&zs)&&(Gl(t),6&t.subtreeFlags&&(t.flags|=8192)):Gl(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Jl(e,t){switch(ni(t),t.tag){case 1:return Mo(t.type)&&Io(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Yi(),Eo(Ao),Eo(Po),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Xi(t),null;case 13:if(Eo(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Eo(ea),null;case 4:return Yi(),null;case 10:return Ri(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Tl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zl=function(){},Ml=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Qi(Gi.current);var i,a=null;switch(n){case"input":o=Q(e,o),r=Q(e,r),a=[];break;case"select":o=F({},o,{value:void 0}),r=F({},r,{value:void 0}),a=[];break;case"textarea":o=re(e,o),r=re(e,r),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Xr)}for(u in xe(n,r),n=null,o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u])if("style"===u){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=o?o[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(i in s)!s.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&s[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&_r("scroll",e),a||s===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Il=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ql=!1,$l=!1,Yl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Xl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){jc(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){jc(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&es(t,n,i)}o=o.next}while(o!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fo],delete t[ho],delete t[go],delete t[yo],delete t[xo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function as(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||as(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Xr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function ps(e,t,n){for(n=n.child;null!==n;)fs(e,t,n),n=n.sibling}function fs(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,n)}catch(l){}switch(n.tag){case 5:$l||Xl(n,t);case 6:var r=us,o=ds;us=null,ps(e,t,n),ds=o,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?so(e.parentNode,n):1===e.nodeType&&so(e,n),Wt(e)):so(us,n.stateNode));break;case 4:r=us,o=ds,us=n.stateNode.containerInfo,ds=!0,ps(e,t,n),us=r,ds=o;break;case 0:case 11:case 14:case 15:if(!$l&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&es(n,t,a),o=o.next}while(o!==r)}ps(e,t,n);break;case 1:if(!$l&&(Xl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){jc(n,t,l)}ps(e,t,n);break;case 21:ps(e,t,n);break;case 22:1&n.mode?($l=(r=$l)||null!==n.memoizedState,ps(e,t,n),$l=r):ps(e,t,n);break;default:ps(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Yl),t.forEach((function(t){var r=Rc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(i(160));fs(a,l,o),us=null,ds=!1;var c=o.alternate;null!==c&&(c.return=null),o.return=null}catch(u){jc(o,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),ys(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){jc(e,e.return,g)}try{ns(5,e,e.return)}catch(g){jc(e,e.return,g)}}break;case 1:ms(t,e),ys(e),512&r&&null!==n&&Xl(n,n.return);break;case 5:if(ms(t,e),ys(e),512&r&&null!==n&&Xl(n,n.return),32&e.flags){var o=e.stateNode;try{pe(o,"")}catch(g){jc(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var a=e.memoizedProps,l=null!==n?n.memoizedProps:a,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===a.type&&null!=a.name&&Y(o,a),ve(s,l);var u=ve(s,a);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];"style"===d?ge(o,p):"dangerouslySetInnerHTML"===d?de(o,p):"children"===d?pe(o,p):v(o,d,p,u)}switch(s){case"input":Z(o,a);break;case"textarea":ie(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(o,!!a.multiple,h,!1):f!==!!a.multiple&&(null!=a.defaultValue?ne(o,!!a.multiple,a.defaultValue,!0):ne(o,!!a.multiple,a.multiple?[]:"",!1))}o[ho]=a}catch(g){jc(e,e.return,g)}}break;case 6:if(ms(t,e),ys(e),4&r){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(g){jc(e,e.return,g)}}break;case 3:if(ms(t,e),ys(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Wt(t.containerInfo)}catch(g){jc(e,e.return,g)}break;case 4:default:ms(t,e),ys(e);break;case 13:ms(t,e),ys(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(Hs=Ye())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?($l=(u=$l)||d,ms(t,e),$l=u):ms(t,e),ys(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(p=Zl=d;null!==Zl;){switch(h=(f=Zl).child,f.tag){case 0:case 11:case 14:case 15:ns(4,f,f.return);break;case 1:Xl(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){jc(r,n,g)}}break;case 5:Xl(f,f.return);break;case 22:if(null!==f.memoizedState){ws(p);continue}}null!==h?(h.return=f,Zl=h):ws(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{o=p.stateNode,u?"function"===typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=p.stateNode,l=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=me("display",l))}catch(g){jc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){jc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ms(t,e),ys(e),4&r&&hs(e);case 21:}}function ys(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(as(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(pe(o,""),r.flags&=-33),cs(e,ls(e),o);break;case 3:case 4:var a=r.stateNode.containerInfo;ss(e,ls(e),a);break;default:throw Error(i(161))}}catch(l){jc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function xs(e,t,n){Zl=e,vs(e,t,n)}function vs(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var o=Zl,i=o.child;if(22===o.tag&&r){var a=null!==o.memoizedState||Ql;if(!a){var l=o.alternate,s=null!==l&&null!==l.memoizedState||$l;l=Ql;var c=$l;if(Ql=a,($l=s)&&!c)for(Zl=o;null!==Zl;)s=(a=Zl).child,22===a.tag&&null!==a.memoizedState?ks(o):null!==s?(s.return=a,Zl=s):ks(o);for(;null!==i;)Zl=i,vs(i,t,n),i=i.sibling;Zl=o,Ql=l,$l=c}bs(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,Zl=i):bs(e)}}function bs(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:$l||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!$l)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&qi(t,a,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}qi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Wt(p)}}}break;default:throw Error(i(163))}$l||512&t.flags&&os(t)}catch(f){jc(t,t.return,f)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function ws(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function ks(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){jc(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(s){jc(t,o,s)}}var i=t.return;try{os(t)}catch(s){jc(t,i,s)}break;case 5:var a=t.return;try{os(t)}catch(s){jc(t,a,s)}}}catch(s){jc(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var Ss,js=Math.ceil,Cs=b.ReactCurrentDispatcher,Es=b.ReactCurrentOwner,Os=b.ReactCurrentBatchConfig,Rs=0,Ps=null,As=null,Ts=0,zs=0,Ms=Co(0),Is=0,Ls=null,Ns=0,Fs=0,Ds=0,_s=null,Bs=null,Hs=0,Ws=1/0,Us=null,qs=!1,Vs=null,Gs=null,Ks=!1,Js=null,Qs=0,$s=0,Ys=null,Zs=-1,Xs=0;function ec(){return 0!==(6&Rs)?Ye():-1!==Zs?Zs:Zs=Ye()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Rs)&&0!==Ts?Ts&-Ts:null!==gi.transition?(0===Xs&&(Xs=mt()),Xs):0!==(e=vt)?e:e=void 0===(e=window.event)?16:$t(e.type)}function nc(e,t,n,r){if(50<$s)throw $s=0,Ys=null,Error(i(185));yt(e,n,r),0!==(2&Rs)&&e===Ps||(e===Ps&&(0===(2&Rs)&&(Fs|=n),4===Is&&lc(e,Ts)),rc(e,r),1===n&&0===Rs&&0===(1&t.mode)&&(Ws=Ye()+500,Bo&&Uo()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),l=1<<a,s=o[a];-1===s?0!==(l&n)&&0===(l&r)||(o[a]=ft(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=pt(e,e===Ps?Ts:0);if(0===r)null!==n&&Je(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Je(n),1===t)0===e.tag?function(e){Bo=!0,Wo(e)}(sc.bind(null,e)):Wo(sc.bind(null,e)),ao((function(){0===(6&Rs)&&Uo()})),n=null;else{switch(bt(r)){case 1:n=Xe;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Zs=-1,Xs=0,0!==(6&Rs))throw Error(i(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pt(e,e===Ps?Ts:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var o=Rs;Rs|=2;var a=hc();for(Ps===e&&Ts===t||(Us=null,Ws=Ye()+500,pc(e,t));;)try{xc();break}catch(s){fc(e,s)}Oi(),Cs.current=a,Rs=o,null!==As?t=0:(Ps=null,Ts=0,t=Is)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=ic(e,o))),1===t)throw n=Ls,pc(e,0),lc(e,r),rc(e,Ye()),n;if(6===t)lc(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!lr(i(),o))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gc(e,r))&&(0!==(a=ht(e))&&(r=a,t=ic(e,a))),1===t))throw n=Ls,pc(e,0),lc(e,r),rc(e,Ye()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wc(e,Bs,Us);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Hs+500-Ye())){if(0!==pt(e,0))break;if(((o=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wc.bind(null,e,Bs,Us),t);break}wc(e,Bs,Us);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-at(r);a=1<<l,(l=t[l])>o&&(o=l),r&=~a}if(r=o,10<(r=(120>(r=Ye()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*js(r/1960))-r)){e.timeoutHandle=ro(wc.bind(null,e,Bs,Us),r);break}wc(e,Bs,Us);break;default:throw Error(i(329))}}}return rc(e,Ye()),e.callbackNode===n?oc.bind(null,e):null}function ic(e,t){var n=_s;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Bs,Bs=n,null!==t&&ac(t)),e}function ac(e){null===Bs?Bs=e:Bs.push.apply(Bs,e)}function lc(e,t){for(t&=~Ds,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&Rs))throw Error(i(327));kc();var t=pt(e,0);if(0===(1&t))return rc(e,Ye()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ic(e,r))}if(1===n)throw n=Ls,pc(e,0),lc(e,t),rc(e,Ye()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Bs,Us),rc(e,Ye()),null}function cc(e,t){var n=Rs;Rs|=1;try{return e(t)}finally{0===(Rs=n)&&(Ws=Ye()+500,Bo&&Uo())}}function uc(e){null!==Js&&0===Js.tag&&0===(6&Rs)&&kc();var t=Rs;Rs|=1;var n=Os.transition,r=vt;try{if(Os.transition=null,vt=1,e)return e()}finally{vt=r,Os.transition=n,0===(6&(Rs=t))&&Uo()}}function dc(){zs=Ms.current,Eo(Ms)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==As)for(n=As.return;null!==n;){var r=n;switch(ni(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Io();break;case 3:Yi(),Eo(Ao),Eo(Po),ra();break;case 5:Xi(r);break;case 4:Yi();break;case 13:case 19:Eo(ea);break;case 10:Ri(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Ps=e,As=e=Mc(e.current,null),Ts=zs=t,Is=0,Ls=null,Ds=Fs=Ns=0,Bs=_s=null,null!==zi){for(t=0;t<zi.length;t++)if(null!==(r=(n=zi[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}zi=null}return e}function fc(e,t){for(;;){var n=As;try{if(Oi(),oa.current=Za,ua){for(var r=la.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ua=!1}if(aa=0,ca=sa=la=null,da=!1,pa=0,Es.current=null,null===n||null===n.return){Is=1,Ls=t,As=null;break}e:{var a=e,l=n.return,s=n,c=t;if(t=Ts,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,yl(h,l,s,0,t),1&h.mode&&ml(a,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ml(a,u,t),mc();break e}c=Error(i(426))}else if(ii&&1&s.mode){var y=gl(l);if(null!==y){0===(65536&y.flags)&&(y.flags|=256),yl(y,l,s,0,t),mi(cl(c,s));break e}}a=c=cl(c,s),4!==Is&&(Is=2),null===_s?_s=[a]:_s.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Wi(a,fl(0,c,t));break e;case 1:s=c;var x=a.type,v=a.stateNode;if(0===(128&a.flags)&&("function"===typeof x.getDerivedStateFromError||null!==v&&"function"===typeof v.componentDidCatch&&(null===Gs||!Gs.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t,Wi(a,hl(a,s,t));break e}}a=a.return}while(null!==a)}bc(n)}catch(b){t=b,As===n&&null!==n&&(As=n=n.return);continue}break}}function hc(){var e=Cs.current;return Cs.current=Za,null===e?Za:e}function mc(){0!==Is&&3!==Is&&2!==Is||(Is=4),null===Ps||0===(268435455&Ns)&&0===(268435455&Fs)||lc(Ps,Ts)}function gc(e,t){var n=Rs;Rs|=2;var r=hc();for(Ps===e&&Ts===t||(Us=null,pc(e,t));;)try{yc();break}catch(o){fc(e,o)}if(Oi(),Rs=n,Cs.current=r,null!==As)throw Error(i(261));return Ps=null,Ts=0,Is}function yc(){for(;null!==As;)vc(As)}function xc(){for(;null!==As&&!Qe();)vc(As)}function vc(e){var t=Ss(e.alternate,e,zs);e.memoizedProps=e.pendingProps,null===t?bc(e):As=t,Es.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,zs)))return void(As=n)}else{if(null!==(n=Jl(n,t)))return n.flags&=32767,void(As=n);if(null===e)return Is=6,void(As=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(As=t);As=t=e}while(null!==t);0===Is&&(Is=5)}function wc(e,t,n){var r=vt,o=Os.transition;try{Os.transition=null,vt=1,function(e,t,n,r){do{kc()}while(null!==Js);if(0!==(6&Rs))throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,a),e===Ps&&(As=Ps=null,Ts=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,Pc(tt,(function(){return kc(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Os.transition,Os.transition=null;var l=vt;vt=1;var s=Rs;Rs|=4,Es.current=null,function(e,t){if(eo=qt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==o&&3!==p.nodeType||(s=l+o),p!==a||0!==r&&3!==p.nodeType||(c=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===o&&(s=l),f===a&&++d===r&&(c=l),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},qt=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,x=t.stateNode,v=x.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),y);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(i(163))}}catch(w){jc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(to),qt=!!eo,to=eo=null,e.current=n,xs(n,e,o),$e(),Rs=s,vt=l,Os.transition=a}else e.current=n;if(Ks&&(Ks=!1,Js=e,Qs=o),a=e.pendingLanes,0===a&&(Gs=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Ye()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(qs)throw qs=!1,e=Vs,Vs=null,e;0!==(1&Qs)&&0!==e.tag&&kc(),a=e.pendingLanes,0!==(1&a)?e===Ys?$s++:($s=0,Ys=e):$s=0,Uo()}(e,t,n,r)}finally{Os.transition=o,vt=r}return null}function kc(){if(null!==Js){var e=bt(Qs),t=Os.transition,n=vt;try{if(Os.transition=null,vt=16>e?16:e,null===Js)var r=!1;else{if(e=Js,Js=null,Qs=0,0!==(6&Rs))throw Error(i(331));var o=Rs;for(Rs|=4,Zl=e.current;null!==Zl;){var a=Zl,l=a.child;if(0!==(16&Zl.flags)){var s=a.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Zl=u;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:ns(8,d,a)}var p=d.child;if(null!==p)p.return=d,Zl=p;else for(;null!==Zl;){var f=(d=Zl).sibling,h=d.return;if(is(d),d===u){Zl=null;break}if(null!==f){f.return=h,Zl=f;break}Zl=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}Zl=a}}if(0!==(2064&a.subtreeFlags)&&null!==l)l.return=a,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(a=Zl).flags))switch(a.tag){case 0:case 11:case 15:ns(9,a,a.return)}var x=a.sibling;if(null!==x){x.return=a.return,Zl=x;break e}Zl=a.return}}var v=e.current;for(Zl=v;null!==Zl;){var b=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==b)b.return=l,Zl=b;else e:for(l=v;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){jc(s,s.return,k)}if(s===l){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(Rs=o,Uo(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(k){}r=!0}return r}finally{vt=n,Os.transition=t}}return!1}function Sc(e,t,n){e=Bi(e,t=fl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(yt(e,1,t),rc(e,t))}function jc(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Gs||!Gs.has(r))){t=Bi(t,e=hl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(yt(t,1,e),rc(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(Ts&n)===n&&(4===Is||3===Is&&(130023424&Ts)===Ts&&500>Ye()-Hs?pc(e,0):Ds|=n),rc(e,t)}function Ec(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Li(e,t))&&(yt(e,t,n),rc(e,n))}function Oc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ec(e,n)}function Rc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Ec(e,n)}function Pc(e,t){return Ke(e,t)}function Ac(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tc(e,t,n,r){return new Ac(e,t,n,r)}function zc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Mc(e,t){var n=e.alternate;return null===n?((n=Tc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ic(e,t,n,r,o,a){var l=2;if(r=e,"function"===typeof e)zc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Lc(n.children,o,a,t);case j:l=8,o|=8;break;case C:return(e=Tc(12,n,t,2|o)).elementType=C,e.lanes=a,e;case P:return(e=Tc(13,n,t,o)).elementType=P,e.lanes=a,e;case A:return(e=Tc(19,n,t,o)).elementType=A,e.lanes=a,e;case M:return Nc(n,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:l=10;break e;case O:l=9;break e;case R:l=11;break e;case T:l=14;break e;case z:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Tc(l,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function Lc(e,t,n,r){return(e=Tc(7,e,r,t)).lanes=n,e}function Nc(e,t,n,r){return(e=Tc(22,e,r,t)).elementType=M,e.lanes=n,e.stateNode={isHidden:!1},e}function Fc(e,t,n){return(e=Tc(6,e,null,t)).lanes=n,e}function Dc(e,t,n){return(t=Tc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _c(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bc(e,t,n,r,o,i,a,l,s){return e=new _c(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Tc(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fi(i),e}function Hc(e){if(!e)return Ro;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Mo(n))return No(e,n,t)}return t}function Wc(e,t,n,r,o,i,a,l,s){return(e=Bc(n,r,!0,e,0,i,0,l,s)).context=Hc(null),n=e.current,(i=_i(r=ec(),o=tc(n))).callback=void 0!==t&&null!==t?t:null,Bi(n,i,o),e.current.lanes=o,yt(e,o,r),rc(e,r),e}function Uc(e,t,n,r){var o=t.current,i=ec(),a=tc(o);return n=Hc(n),null===t.context?t.context=n:t.pendingContext=n,(t=_i(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Bi(o,t,a))&&(nc(e,o,a,i),Hi(e,o,a)),a}function qc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Gc(e,t){Vc(e,t),(e=e.alternate)&&Vc(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ao.current)vl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return vl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),hi();break;case 5:Zi(t);break;case 1:Mo(t.type)&&Fo(t);break;case 4:$i(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Oo(Si,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Oo(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Fl(e,t,n):(Oo(ea,1&ea.current),null!==(e=ql(e,t,n))?e.sibling:null);Oo(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Wl(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),Oo(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,jl(e,t,n)}return ql(e,t,n)}(e,t,n);vl=0!==(131072&e.flags)}else vl=!1,ii&&0!==(1048576&t.flags)&&ei(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ul(e,t),e=t.pendingProps;var o=zo(t,Po.current);Ai(t,n),o=ga(null,t,r,e,o,n);var a=ya();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mo(r)?(a=!0,Fo(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Fi(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,sl(t,r,e,n),t=Rl(null,t,r,!0,a,n)):(t.tag=0,ii&&a&&ti(t),bl(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ul(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return zc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===R)return 11;if(e===T)return 14}return 2}(r),e=nl(r,e),o){case 0:t=El(null,t,r,e,n);break e;case 1:t=Ol(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,El(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 1:return r=t.type,o=t.pendingProps,Ol(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 3:e:{if(Pl(t),null===e)throw Error(i(387));r=t.pendingProps,o=(a=t.memoizedState).element,Di(e,t),Ui(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Al(e,t,r,n,o=cl(Error(i(423)),t));break e}if(r!==o){t=Al(e,t,r,n,o=cl(Error(i(424)),t));break e}for(oi=co(t.stateNode.containerInfo.firstChild),ri=t,ii=!0,ai=null,n=ki(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===o){t=ql(e,t,n);break e}bl(e,t,r,n)}t=t.child}return t;case 5:return Zi(t),null===e&&ui(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,l=o.children,no(r,o)?l=null:null!==a&&no(r,a)&&(t.flags|=32),Cl(e,t),bl(e,t,l,n),t.child;case 6:return null===e&&ui(t),null;case 13:return Fl(e,t,n);case 4:return $i(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wi(t,null,r,n):bl(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,wl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 7:return bl(e,t,t.pendingProps,n),t.child;case 8:case 12:return bl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,l=o.value,Oo(Si,r._currentValue),r._currentValue=l,null!==a)if(lr(a.value,l)){if(a.children===o.children&&!Ao.current){t=ql(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){l=a.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=_i(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),Pi(a.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===a.tag)l=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Pi(l,n,t),l=a.sibling}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===t){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}bl(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ai(t,n),r=r(o=Ti(o)),t.flags|=1,bl(e,t,r,n),t.child;case 14:return o=nl(r=t.type,t.pendingProps),kl(e,t,r,o=nl(r.type,o),n);case 15:return Sl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nl(r,o),Ul(e,t),t.tag=1,Mo(r)?(e=!0,Fo(t)):e=!1,Ai(t,n),al(t,r,o),sl(t,r,o,n),Rl(null,t,r,!0,e,n);case 19:return Wl(e,t,n);case 22:return jl(e,t,n)}throw Error(i(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Jc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function $c(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zc(){}function Xc(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"===typeof o){var l=o;o=function(){var e=qc(a);l.call(e)}}Uc(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"===typeof r){var i=r;r=function(){var e=qc(a);i.call(e)}}var a=Wc(t,r,e,0,null,!1,0,"",Zc);return e._reactRootContainer=a,e[mo]=a.current,Wr(8===e.nodeType?e.parentNode:e),uc(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var l=r;r=function(){var e=qc(s);l.call(e)}}var s=Bc(e,0,!1,null,0,!1,0,"",Zc);return e._reactRootContainer=s,e[mo]=s.current,Wr(8===e.nodeType?e.parentNode:e),uc((function(){Uc(t,s,n,r)})),s}(n,t,e,o,r);return qc(a)}Qc.prototype.render=Jc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Uc(e,t,null,null)},Qc.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Uc(null,e,null,null)})),t[mo]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&0!==t&&t<Mt[n].priority;n++);Mt.splice(n,0,e),0===n&&Ft(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(xt(t,1|n),rc(t,Ye()),0===(6&Rs)&&(Ws=Ye()+500,Uo()))}break;case 13:uc((function(){var t=Li(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Gc(e,1)}},kt=function(e){if(13===e.tag){var t=Li(e,134217728);if(null!==t)nc(t,e,134217728,ec());Gc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Li(e,t);if(null!==n)nc(n,e,t,ec());Gc(e,t)}},jt=function(){return vt},Ct=function(e,t){var n=vt;try{return vt=e,t()}finally{vt=n}},ke=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ko(r);if(!o)throw Error(i(90));K(r),Z(r,o)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Re=cc,Pe=uc;var eu={usingClientEntryPoint:!1,Events:[bo,wo,ko,Ee,Oe,cc]},tu={findFiberByHostInstance:vo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{ot=ru.inject(nu),it=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!$c(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!$c(e))throw Error(i(299));var n=!1,r="",o=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Bc(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Wr(8===e.nodeType?e.parentNode:e),new Jc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Yc(t))throw Error(i(200));return Xc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!$c(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,o=!1,a="",l=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Wc(t,null,e,1,null!=n?n:null,o,0,a,l),e[mo]=t.current,Wr(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Qc(t)},t.render=function(e,t,n){if(!Yc(t))throw Error(i(200));return Xc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Yc(e))throw Error(i(40));return!!e._reactRootContainer&&(uc((function(){Xc(null,null,e,!1,(function(){e._reactRootContainer=null,e[mo]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yc(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Xc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},5484:(e,t,n)=>{"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function i(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function a(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,a=null,l=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?l="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(l="UNSAFE_componentWillUpdate"),null!==n||null!==a||null!==l){var s=e.displayName||e.name,c="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+s+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==a?"\n  "+a:"")+(null!==l?"\n  "+l:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=o),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,r)}}return e}n.r(t),n.d(t,{polyfill:()=>a}),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},5765:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5043),a=h(i),l=h(n(7950)),s=h(n(5173)),c=h(n(1439)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(6619)),d=n(8821),p=h(d),f=n(5484);function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var g=t.portalClassName="ReactModalPortal",y=t.bodyOpenClassName="ReactModal__Body--open",x=d.canUseDOM&&void 0!==l.default.createPortal,v=function(e){return document.createElement(e)},b=function(){return x?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer};function w(e){return e()}var k=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=o=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.removePortal=function(){!x&&l.default.unmountComponentAtNode(o.node);var e=w(o.props.parentSelector);e&&e.contains(o.node)?e.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(e){o.portal=e},o.renderPortal=function(e){var n=b()(o,a.default.createElement(c.default,r({defaultStyles:t.defaultStyles},e)),o.node);o.portalRef(n)},m(o,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(x||(this.node=v("div")),this.node.className=this.props.portalClassName,w(this.props.parentSelector).appendChild(this.node),!x&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:w(e.parentSelector),nextParent:w(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var r=this.props,o=r.isOpen,i=r.portalClassName;e.portalClassName!==i&&(this.node.className=i);var a=n.prevParent,l=n.nextParent;l!==a&&(a.removeChild(this.node),l.appendChild(this.node)),(e.isOpen||o)&&!x&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&x?(!this.node&&x&&(this.node=v("div")),b()(a.default.createElement(c.default,r({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){u.setElement(e)}}]),t}(i.Component);k.propTypes={isOpen:s.default.bool.isRequired,style:s.default.shape({content:s.default.object,overlay:s.default.object}),portalClassName:s.default.string,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,className:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),overlayClassName:s.default.oneOfType([s.default.string,s.default.shape({base:s.default.string.isRequired,afterOpen:s.default.string.isRequired,beforeClose:s.default.string.isRequired})]),appElement:s.default.oneOfType([s.default.instanceOf(p.default),s.default.instanceOf(d.SafeHTMLCollection),s.default.instanceOf(d.SafeNodeList),s.default.arrayOf(s.default.instanceOf(p.default))]),onAfterOpen:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,ariaHideApp:s.default.bool,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,parentSelector:s.default.func,aria:s.default.object,data:s.default.object,role:s.default.string,contentLabel:s.default.string,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func},k.defaultProps={isOpen:!1,portalClassName:g,bodyOpenClassName:y,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return a.default.createElement("div",e,t)},contentElement:function(e,t){return a.default.createElement("div",e,t)}},k.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,f.polyfill)(k),t.default=k},1439:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(5043),l=g(n(5173)),s=m(n(1774)),c=g(n(2206)),u=m(n(6619)),d=m(n(4841)),p=n(8821),f=g(p),h=g(n(2959));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function g(e){return e&&e.__esModule?e:{default:e}}n(6062);var y={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},x=0,v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,r=e.ariaHideApp,o=e.htmlOpenClassName,i=e.bodyOpenClassName,a=e.parentSelector,l=a&&a().ownerDocument||document;i&&d.remove(l.body,i),o&&d.remove(l.getElementsByTagName("html")[0],o),r&&x>0&&0===(x-=1)&&u.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(s.returnFocus(n.props.preventScroll),s.teardownScopedFocus()):s.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),h.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(s.setupScopedFocus(n.node),s.markForFocusLater()),n.setState({isOpen:!0},(function(){n.openAnimationFrame=requestAnimationFrame((function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})}))})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){(function(e){return"Tab"===e.code||9===e.keyCode})(e)&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var r="object"===("undefined"===typeof t?"undefined":o(t))?t:{base:y[e],afterOpen:y[e]+"--after-open",beforeClose:y[e]+"--before-close"},i=r.base;return n.state.afterOpen&&(i=i+" "+r.afterOpen),n.state.beforeClose&&(i=i+" "+r.beforeClose),"string"===typeof t&&t?i+" "+t:i},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,r){return n[e+"-"+r]=t[r],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,o=e.bodyOpenClassName,i=e.parentSelector,a=i&&i().ownerDocument||document;o&&d.add(a.body,o),r&&d.add(a.getElementsByTagName("html")[0],r),n&&(x+=1,u.hide(t)),h.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,o=e.overlayClassName,i=e.defaultStyles,a=e.children,l=n?{}:i.content,s=o?{}:i.overlay;if(this.shouldBeClosed())return null;var c={ref:this.setOverlayRef,className:this.buildClassName("overlay",o),style:r({},s,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},u=r({id:t,ref:this.setContentRef,style:r({},l,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(u,a);return this.props.overlayElement(c,d)}}]),t}(a.Component);v.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},v.propTypes={isOpen:l.default.bool.isRequired,defaultStyles:l.default.shape({content:l.default.object,overlay:l.default.object}),style:l.default.shape({content:l.default.object,overlay:l.default.object}),className:l.default.oneOfType([l.default.string,l.default.object]),overlayClassName:l.default.oneOfType([l.default.string,l.default.object]),parentSelector:l.default.func,bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,ariaHideApp:l.default.bool,appElement:l.default.oneOfType([l.default.instanceOf(f.default),l.default.instanceOf(p.SafeHTMLCollection),l.default.instanceOf(p.SafeNodeList),l.default.arrayOf(l.default.instanceOf(f.default))]),onAfterOpen:l.default.func,onAfterClose:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,role:l.default.string,contentLabel:l.default.string,aria:l.default.object,data:l.default.object,children:l.default.node,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func,testId:l.default.string},t.default=v,e.exports=t.default},6619:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){l&&(l.removeAttribute?l.removeAttribute("aria-hidden"):null!=l.length?l.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(l).forEach((function(e){return e.removeAttribute("aria-hidden")})));l=null},t.log=function(){0},t.assertNodeList=s,t.setElement=function(e){var t=e;if("string"===typeof t&&a.canUseDOM){var n=document.querySelectorAll(t);s(n,t),t=n}return l=t||l},t.validateElement=c,t.hide=function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=c(e)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){o.value.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}},t.show=function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=c(e)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){o.value.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}},t.documentNotReadyOrSSRTesting=function(){l=null};var r,o=n(6440),i=(r=o)&&r.__esModule?r:{default:r},a=n(8821);var l=null;function s(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function c(e){var t=e||l;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,i.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},6062:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){for(var e=[a,l],t=0;t<e.length;t++){var n=e[t];n&&(n.parentNode&&n.parentNode.removeChild(n))}a=l=null,s=[]},t.log=function(){console.log("bodyTrap ----------"),console.log(s.length);for(var e=[a,l],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")};var r,o=n(2959),i=(r=o)&&r.__esModule?r:{default:r};var a=void 0,l=void 0,s=[];function c(){0!==s.length&&s[s.length-1].focusContent()}i.default.subscribe((function(e,t){a||l||((a=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),a.style.position="absolute",a.style.opacity="0",a.setAttribute("tabindex","0"),a.addEventListener("focus",c),(l=a.cloneNode()).addEventListener("focus",c)),(s=t).length>0?(document.body.firstChild!==a&&document.body.insertBefore(a,document.body.firstChild),document.body.lastChild!==l&&document.body.appendChild(l)):(a.parentElement&&a.parentElement.removeChild(a),l.parentElement&&l.parentElement.removeChild(l))}))},4841:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var t in n)o(e,n[t]);var i=document.body;for(var a in r)o(i,r[a]);n={},r={}},t.log=function(){0};var n={},r={};function o(e,t){e.classList.remove(t)}t.add=function(e,t){return o=e.classList,i="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(i,e),o.add(e)}));var o,i},t.remove=function(e,t){return o=e.classList,i="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(i,e),0===i[e]&&o.remove(e)}));var o,i}},1774:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){a=[]},t.log=function(){0},t.handleBlur=c,t.handleFocus=u,t.markForFocusLater=function(){a.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==a.length&&(t=a.pop()).focus({preventScroll:e}))}catch(n){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){a.length>0&&a.pop()},t.setupScopedFocus=function(e){l=e,window.addEventListener?(window.addEventListener("blur",c,!1),document.addEventListener("focus",u,!0)):(window.attachEvent("onBlur",c),document.attachEvent("onFocus",u))},t.teardownScopedFocus=function(){l=null,window.addEventListener?(window.removeEventListener("blur",c),document.removeEventListener("focus",u)):(window.detachEvent("onBlur",c),document.detachEvent("onFocus",u))};var r,o=n(4682),i=(r=o)&&r.__esModule?r:{default:r};var a=[],l=null,s=!1;function c(){s=!0}function u(){if(s){if(s=!1,!l)return;setTimeout((function(){l.contains(document.activeElement)||((0,i.default)(l)[0]||l).focus()}),0)}}},2959:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(){console.log("portalOpenInstances ----------"),console.log(r.openInstances.length),r.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},t.resetState=function(){r=new n};var n=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},r=new n;t.default=r},8821:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var r,o=n(7396);var i=((r=o)&&r.__esModule?r:{default:r}).default,a=i.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=i.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=i.canUseDOM?window.NodeList:{},t.canUseDOM=i.canUseDOM;t.default=a},2206:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,i.default)(e);if(!n.length)return void t.preventDefault();var r=void 0,o=t.shiftKey,l=n[0],s=n[n.length-1],c=a();if(e===c){if(!o)return;r=s}s!==c||o||(r=l);l===c&&o&&(r=s);if(r)return t.preventDefault(),void r.focus();var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==u||"Chrome"==u[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var d=n.indexOf(c);d>-1&&(d+=o?-1:1);if("undefined"===typeof(r=n[d]))return t.preventDefault(),void(r=o?s:l).focus();t.preventDefault(),r.focus()};var r,o=n(4682),i=(r=o)&&r.__esModule?r:{default:r};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?a(e.activeElement.shadowRoot):e.activeElement}e.exports=t.default},4682:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=[].slice.call(t.querySelectorAll("*"),0).reduce((function(t,n){return t.concat(n.shadowRoot?e(n.shadowRoot):[n])}),[]);return n.filter(l)};var n="none",r="contents",o=/input|select|textarea|button|object|iframe/;function i(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var o=window.getComputedStyle(e),i=o.getPropertyValue("display");return t?i!==r&&function(e,t){return"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0}(e,o):i===n}catch(a){return console.warn("Failed to inspect element style"),!1}}function a(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),i(t))return!1;t=t.parentNode}return!0}(e)}function l(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}e.exports=t.default},2963:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5765),i=(r=o)&&r.__esModule?r:{default:r};t.default=i.default,e.exports=t.default},2501:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(5043)),o=l(n(5173)),i=l(n(381)),a=l(n(7324));function l(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var c=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).isVisible=function(e,t,r){var o=e.top,i=e.left,a=e.bottom,l=e.right,s=e.width,c=e.height,u=n.props,d=u.offset,p=u.partialVisibility;if(o+l+a+i===0)return!1;var f=0-d,h=0-d,m=t+d,g=r+d;return p?o+c>=f&&i+s>=h&&a-c<=g&&l-s<=m:o>=f&&i>=h&&a<=g&&l<=m},n.isComponentVisible=function(){setTimeout((function(){if(n.nodeRef&&n.nodeRef.getBoundingClientRect){var e=document.documentElement,t=n.props.once,r=n.nodeRef.getBoundingClientRect(),o=window.innerWidth||e.clientWidth,i=window.innerHeight||e.clientHeight,a=n.isVisible(r,o,i);a&&t&&n.removeListener(),n.setState({isVisible:a})}}),0)},n.setNodeRef=function(e){return n.nodeRef=e},n.ownProps=Object.keys(o.propTypes),n.state={isVisible:!1},n.throttleCb=(0,i.default)(n.isComponentVisible,n.props.throttleInterval),t.nodeRef&&n.setNodeRef(t.nodeRef),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=o.prototype;return l.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},l.componentDidUpdate=function(e){(0,a.default)(this.getChildProps(this.props),this.getChildProps(e))||this.isComponentVisible()},l.componentWillUnmount=function(){this.removeListener()},l.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},l.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},l.getChildProps=function(e){var t=this;void 0===e&&(e=this.props);var n={};return Object.keys(e).forEach((function(r){-1===t.ownProps.indexOf(r)&&(n[r]=e[r])})),n},l.getChildren=function(){var e=this;return"function"===typeof this.props.children?this.props.children(s({},this.getChildProps(),{isVisible:this.state.isVisible})):r.default.Children.map(this.props.children,(function(t){return r.default.cloneElement(t,s({},e.getChildProps(),{isVisible:e.state.isVisible}))}))},l.render=function(){var e=this.props,t=e.className,n=e.style,o=e.nodeRef,i=e.tag,a=s({},t&&{className:t},n&&{style:n});return r.default.createElement(i,s({ref:!o&&this.setNodeRef},a),this.getChildren())},o}(r.PureComponent);t.default=c,c.propTypes={once:o.default.bool,throttleInterval:function(e,t,n){var r=e[t];return!Number.isInteger(r)||r<0?new Error("The "+t+" prop you provided to "+n+" is not a valid integer >= 0."):null},children:o.default.oneOfType([o.default.func,o.default.element,o.default.arrayOf(o.default.element)]),style:o.default.object,className:o.default.string,offset:o.default.number,partialVisibility:o.default.bool,nodeRef:o.default.object,tag:o.default.string},c.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},6930:(e,t,n)=>{"use strict";var r;t.A=void 0;var o=((r=n(2501))&&r.__esModule?r:{default:r}).default;t.A=o},6214:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.PrevArrow=t.NextArrow=void 0;var o=l(n(5043)),i=l(n(8139)),a=n(1200);function l(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m(r.key),r)}}function h(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function x(e){var t=v();return function(){var n,o=b(e);if(t){var i=b(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}t.PrevArrow=function(e){g(n,e);var t=x(n);function n(){return p(this,n),t.apply(this,arguments)}return h(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var n={key:"0","data-role":"none",className:(0,i.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?o.default.cloneElement(this.props.prevArrow,u(u({},n),r)):o.default.createElement("button",s({key:"0",type:"button"},n)," ","Previous")}}]),n}(o.default.PureComponent),t.NextArrow=function(e){g(n,e);var t=x(n);function n(){return p(this,n),t.apply(this,arguments)}return h(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});(0,a.canGoNext)(this.props)||(e["slick-disabled"]=!0,t=null);var n={key:"1","data-role":"none",className:(0,i.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?o.default.cloneElement(this.props.nextArrow,u(u({},n),r)):o.default.createElement("button",s({key:"1",type:"button"},n)," ","Next")}}]),n}(o.default.PureComponent)},5112:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(5043))&&r.__esModule?r:{default:r};var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return o.default.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return o.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};t.default=i},8496:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Dots=void 0;var o=l(n(5043)),i=l(n(8139)),a=n(1200);function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return(t=d(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function d(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){var t=h();return function(){var n,o=m(e);if(t){var i=m(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}t.Dots=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(d,e);var t,n,r,l=f(d);function d(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),l.apply(this,arguments)}return t=d,n=[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.props.clickHandler(e)}},{key:"render",value:function(){for(var e,t=this.props,n=t.onMouseEnter,r=t.onMouseOver,l=t.onMouseLeave,u=t.infinite,d=t.slidesToScroll,p=t.slidesToShow,f=t.slideCount,h=t.currentSlide,m=(e={slideCount:f,slidesToScroll:d,slidesToShow:p,infinite:u}).infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,g={onMouseEnter:n,onMouseOver:r,onMouseLeave:l},y=[],x=0;x<m;x++){var v=(x+1)*d-1,b=u?v:(0,a.clamp)(v,0,f-1),w=b-(d-1),k=u?w:(0,a.clamp)(w,0,f-1),S=(0,i.default)({"slick-active":u?h>=k&&h<=b:h===k}),j={message:"dots",index:x,slidesToScroll:d,currentSlide:h},C=this.clickHandler.bind(this,j);y=y.concat(o.default.createElement("li",{key:x,className:S},o.default.cloneElement(this.props.customPaging(x),{onClick:C})))}return o.default.cloneElement(this.props.appendDots(y),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:this.props.dotsClass},g))}}],n&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),d}(o.default.PureComponent)},2382:(e,t,n)=>{"use strict";t.A=void 0;var r,o=(r=n(433))&&r.__esModule?r:{default:r};t.A=o.default},4910:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0}},9826:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InnerSlider=void 0;var r=p(n(5043)),o=p(n(4910)),i=p(n(446)),a=p(n(8139)),l=n(1200),s=n(737),c=n(8496),u=n(6214),d=p(n(5820));function p(e){return e&&e.__esModule?e:{default:e}}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,C(r.key),r)}}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){var t=k();return function(){var n,r=S(e);if(t){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(this,n)}}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(k=function(){return!!e})()}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function j(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==f(t)?t:String(t)}t.InnerSlider=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(k,e);var t,n,p,g=b(k);function k(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,k),j(w(t=g.call(this,e)),"listRefHandler",(function(e){return t.list=e})),j(w(t),"trackRefHandler",(function(e){return t.track=e})),j(w(t),"adaptHeight",(function(){if(t.props.adaptiveHeight&&t.list){var e=t.list.querySelector('[data-index="'.concat(t.state.currentSlide,'"]'));t.list.style.height=(0,l.getHeight)(e)+"px"}})),j(w(t),"componentDidMount",(function(){if(t.props.onInit&&t.props.onInit(),t.props.lazyLoad){var e=(0,l.getOnDemandLazySlides)(y(y({},t.props),t.state));e.length>0&&(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e))}var n=y({listRef:t.list,trackRef:t.track},t.props);t.updateState(n,!0,(function(){t.adaptHeight(),t.props.autoplay&&t.autoPlay("update")})),"progressive"===t.props.lazyLoad&&(t.lazyLoadTimer=setInterval(t.progressiveLazyLoad,1e3)),t.ro=new d.default((function(){t.state.animating?(t.onWindowResized(!1),t.callbackTimers.push(setTimeout((function(){return t.onWindowResized()}),t.props.speed))):t.onWindowResized()})),t.ro.observe(t.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),(function(e){e.onfocus=t.props.pauseOnFocus?t.onSlideFocus:null,e.onblur=t.props.pauseOnFocus?t.onSlideBlur:null})),window.addEventListener?window.addEventListener("resize",t.onWindowResized):window.attachEvent("onresize",t.onWindowResized)})),j(w(t),"componentWillUnmount",(function(){t.animationEndCallback&&clearTimeout(t.animationEndCallback),t.lazyLoadTimer&&clearInterval(t.lazyLoadTimer),t.callbackTimers.length&&(t.callbackTimers.forEach((function(e){return clearTimeout(e)})),t.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",t.onWindowResized):window.detachEvent("onresize",t.onWindowResized),t.autoplayTimer&&clearInterval(t.autoplayTimer),t.ro.disconnect()})),j(w(t),"componentDidUpdate",(function(e){if(t.checkImagesLoad(),t.props.onReInit&&t.props.onReInit(),t.props.lazyLoad){var n=(0,l.getOnDemandLazySlides)(y(y({},t.props),t.state));n.length>0&&(t.setState((function(e){return{lazyLoadedList:e.lazyLoadedList.concat(n)}})),t.props.onLazyLoad&&t.props.onLazyLoad(n))}t.adaptHeight();var o=y(y({listRef:t.list,trackRef:t.track},t.props),t.state),i=t.didPropsChange(e);i&&t.updateState(o,i,(function(){t.state.currentSlide>=r.default.Children.count(t.props.children)&&t.changeSlide({message:"index",index:r.default.Children.count(t.props.children)-t.props.slidesToShow,currentSlide:t.state.currentSlide}),t.props.autoplay?t.autoPlay("update"):t.pause("paused")}))})),j(w(t),"onWindowResized",(function(e){t.debouncedResize&&t.debouncedResize.cancel(),t.debouncedResize=(0,i.default)((function(){return t.resizeWindow(e)}),50),t.debouncedResize()})),j(w(t),"resizeWindow",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(Boolean(t.track&&t.track.node)){var n=y(y({listRef:t.list,trackRef:t.track},t.props),t.state);t.updateState(n,e,(function(){t.props.autoplay?t.autoPlay("update"):t.pause("paused")})),t.setState({animating:!1}),clearTimeout(t.animationEndCallback),delete t.animationEndCallback}})),j(w(t),"updateState",(function(e,n,o){var i=(0,l.initializedState)(e);e=y(y(y({},e),i),{},{slideIndex:i.currentSlide});var a=(0,l.getTrackLeft)(e);e=y(y({},e),{},{left:a});var s=(0,l.getTrackCSS)(e);(n||r.default.Children.count(t.props.children)!==r.default.Children.count(e.children))&&(i.trackStyle=s),t.setState(i,o)})),j(w(t),"ssrInit",(function(){if(t.props.variableWidth){var e=0,n=0,o=[],i=(0,l.getPreClones)(y(y(y({},t.props),t.state),{},{slideCount:t.props.children.length})),a=(0,l.getPostClones)(y(y(y({},t.props),t.state),{},{slideCount:t.props.children.length}));t.props.children.forEach((function(t){o.push(t.props.style.width),e+=t.props.style.width}));for(var s=0;s<i;s++)n+=o[o.length-1-s],e+=o[o.length-1-s];for(var c=0;c<a;c++)e+=o[c];for(var u=0;u<t.state.currentSlide;u++)n+=o[u];var d={width:e+"px",left:-n+"px"};if(t.props.centerMode){var p="".concat(o[t.state.currentSlide],"px");d.left="calc(".concat(d.left," + (100% - ").concat(p,") / 2 ) ")}return{trackStyle:d}}var f=r.default.Children.count(t.props.children),h=y(y(y({},t.props),t.state),{},{slideCount:f}),m=(0,l.getPreClones)(h)+(0,l.getPostClones)(h)+f,g=100/t.props.slidesToShow*m,x=100/m,v=-x*((0,l.getPreClones)(h)+t.state.currentSlide)*g/100;return t.props.centerMode&&(v+=(100-x*g/100)/2),{slideWidth:x+"%",trackStyle:{width:g+"%",left:v+"%"}}})),j(w(t),"checkImagesLoad",(function(){var e=t.list&&t.list.querySelectorAll&&t.list.querySelectorAll(".slick-slide img")||[],n=e.length,r=0;Array.prototype.forEach.call(e,(function(e){var o=function(){return++r&&r>=n&&t.onWindowResized()};if(e.onclick){var i=e.onclick;e.onclick=function(t){i(t),e.parentNode.focus()}}else e.onclick=function(){return e.parentNode.focus()};e.onload||(t.props.lazyLoad?e.onload=function(){t.adaptHeight(),t.callbackTimers.push(setTimeout(t.onWindowResized,t.props.speed))}:(e.onload=o,e.onerror=function(){o(),t.props.onLazyLoadError&&t.props.onLazyLoadError()}))}))})),j(w(t),"progressiveLazyLoad",(function(){for(var e=[],n=y(y({},t.props),t.state),r=t.state.currentSlide;r<t.state.slideCount+(0,l.getPostClones)(n);r++)if(t.state.lazyLoadedList.indexOf(r)<0){e.push(r);break}for(var o=t.state.currentSlide-1;o>=-(0,l.getPreClones)(n);o--)if(t.state.lazyLoadedList.indexOf(o)<0){e.push(o);break}e.length>0?(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e)):t.lazyLoadTimer&&(clearInterval(t.lazyLoadTimer),delete t.lazyLoadTimer)})),j(w(t),"slideHandler",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.props,o=r.asNavFor,i=r.beforeChange,a=r.onLazyLoad,s=r.speed,c=r.afterChange,u=t.state.currentSlide,d=(0,l.slideHandler)(y(y(y({index:e},t.props),t.state),{},{trackRef:t.track,useCSS:t.props.useCSS&&!n})),p=d.state,f=d.nextState;if(p){i&&i(u,p.currentSlide);var h=p.lazyLoadedList.filter((function(e){return t.state.lazyLoadedList.indexOf(e)<0}));a&&h.length>0&&a(h),!t.props.waitForAnimate&&t.animationEndCallback&&(clearTimeout(t.animationEndCallback),c&&c(u),delete t.animationEndCallback),t.setState(p,(function(){o&&t.asNavForIndex!==e&&(t.asNavForIndex=e,o.innerSlider.slideHandler(e)),f&&(t.animationEndCallback=setTimeout((function(){var e=f.animating,n=m(f,["animating"]);t.setState(n,(function(){t.callbackTimers.push(setTimeout((function(){return t.setState({animating:e})}),10)),c&&c(p.currentSlide),delete t.animationEndCallback}))}),s))}))}})),j(w(t),"changeSlide",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=y(y({},t.props),t.state),o=(0,l.changeSlide)(r,e);if((0===o||o)&&(!0===n?t.slideHandler(o,n):t.slideHandler(o),t.props.autoplay&&t.autoPlay("update"),t.props.focusOnSelect)){var i=t.list.querySelectorAll(".slick-current");i[0]&&i[0].focus()}})),j(w(t),"clickHandler",(function(e){!1===t.clickable&&(e.stopPropagation(),e.preventDefault()),t.clickable=!0})),j(w(t),"keyHandler",(function(e){var n=(0,l.keyHandler)(e,t.props.accessibility,t.props.rtl);""!==n&&t.changeSlide({message:n})})),j(w(t),"selectHandler",(function(e){t.changeSlide(e)})),j(w(t),"disableBodyScroll",(function(){window.ontouchmove=function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}})),j(w(t),"enableBodyScroll",(function(){window.ontouchmove=null})),j(w(t),"swipeStart",(function(e){t.props.verticalSwiping&&t.disableBodyScroll();var n=(0,l.swipeStart)(e,t.props.swipe,t.props.draggable);""!==n&&t.setState(n)})),j(w(t),"swipeMove",(function(e){var n=(0,l.swipeMove)(e,y(y(y({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));n&&(n.swiping&&(t.clickable=!1),t.setState(n))})),j(w(t),"swipeEnd",(function(e){var n=(0,l.swipeEnd)(e,y(y(y({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));if(n){var r=n.triggerSlideHandler;delete n.triggerSlideHandler,t.setState(n),void 0!==r&&(t.slideHandler(r),t.props.verticalSwiping&&t.enableBodyScroll())}})),j(w(t),"touchEnd",(function(e){t.swipeEnd(e),t.clickable=!0})),j(w(t),"slickPrev",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"previous"})}),0))})),j(w(t),"slickNext",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"next"})}),0))})),j(w(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=Number(e),isNaN(e))return"";t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"index",index:e,currentSlide:t.state.currentSlide},n)}),0))})),j(w(t),"play",(function(){var e;if(t.props.rtl)e=t.state.currentSlide-t.props.slidesToScroll;else{if(!(0,l.canGoNext)(y(y({},t.props),t.state)))return!1;e=t.state.currentSlide+t.props.slidesToScroll}t.slideHandler(e)})),j(w(t),"autoPlay",(function(e){t.autoplayTimer&&clearInterval(t.autoplayTimer);var n=t.state.autoplaying;if("update"===e){if("hovered"===n||"focused"===n||"paused"===n)return}else if("leave"===e){if("paused"===n||"focused"===n)return}else if("blur"===e&&("paused"===n||"hovered"===n))return;t.autoplayTimer=setInterval(t.play,t.props.autoplaySpeed+50),t.setState({autoplaying:"playing"})})),j(w(t),"pause",(function(e){t.autoplayTimer&&(clearInterval(t.autoplayTimer),t.autoplayTimer=null);var n=t.state.autoplaying;"paused"===e?t.setState({autoplaying:"paused"}):"focused"===e?"hovered"!==n&&"playing"!==n||t.setState({autoplaying:"focused"}):"playing"===n&&t.setState({autoplaying:"hovered"})})),j(w(t),"onDotsOver",(function(){return t.props.autoplay&&t.pause("hovered")})),j(w(t),"onDotsLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),j(w(t),"onTrackOver",(function(){return t.props.autoplay&&t.pause("hovered")})),j(w(t),"onTrackLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),j(w(t),"onSlideFocus",(function(){return t.props.autoplay&&t.pause("focused")})),j(w(t),"onSlideBlur",(function(){return t.props.autoplay&&"focused"===t.state.autoplaying&&t.autoPlay("blur")})),j(w(t),"render",(function(){var e,n,o,i=(0,a.default)("slick-slider",t.props.className,{"slick-vertical":t.props.vertical,"slick-initialized":!0}),d=y(y({},t.props),t.state),p=(0,l.extractObject)(d,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),f=t.props.pauseOnHover;if(p=y(y({},p),{},{onMouseEnter:f?t.onTrackOver:null,onMouseLeave:f?t.onTrackLeave:null,onMouseOver:f?t.onTrackOver:null,focusOnSelect:t.props.focusOnSelect&&t.clickable?t.selectHandler:null}),!0===t.props.dots&&t.state.slideCount>=t.props.slidesToShow){var m=(0,l.extractObject)(d,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=t.props.pauseOnDotsHover;m=y(y({},m),{},{clickHandler:t.changeSlide,onMouseEnter:g?t.onDotsLeave:null,onMouseOver:g?t.onDotsOver:null,onMouseLeave:g?t.onDotsLeave:null}),e=r.default.createElement(c.Dots,m)}var x=(0,l.extractObject)(d,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);x.clickHandler=t.changeSlide,t.props.arrows&&(n=r.default.createElement(u.PrevArrow,x),o=r.default.createElement(u.NextArrow,x));var v=null;t.props.vertical&&(v={height:t.state.listHeight});var b=null;!1===t.props.vertical?!0===t.props.centerMode&&(b={padding:"0px "+t.props.centerPadding}):!0===t.props.centerMode&&(b={padding:t.props.centerPadding+" 0px"});var w=y(y({},v),b),k=t.props.touchMove,S={className:"slick-list",style:w,onClick:t.clickHandler,onMouseDown:k?t.swipeStart:null,onMouseMove:t.state.dragging&&k?t.swipeMove:null,onMouseUp:k?t.swipeEnd:null,onMouseLeave:t.state.dragging&&k?t.swipeEnd:null,onTouchStart:k?t.swipeStart:null,onTouchMove:t.state.dragging&&k?t.swipeMove:null,onTouchEnd:k?t.touchEnd:null,onTouchCancel:t.state.dragging&&k?t.swipeEnd:null,onKeyDown:t.props.accessibility?t.keyHandler:null},j={className:i,dir:"ltr",style:t.props.style};return t.props.unslick&&(S={className:"slick-list"},j={className:i}),r.default.createElement("div",j,t.props.unslick?"":n,r.default.createElement("div",h({ref:t.listRefHandler},S),r.default.createElement(s.Track,h({ref:t.trackRefHandler},p),t.props.children)),t.props.unslick?"":o,t.props.unslick?"":e)})),t.list=null,t.track=null,t.state=y(y({},o.default),{},{currentSlide:t.props.initialSlide,targetSlide:t.props.initialSlide?t.props.initialSlide:0,slideCount:r.default.Children.count(t.props.children)}),t.callbackTimers=[],t.clickable=!0,t.debouncedResize=null;var n=t.ssrInit();return t.state=y(y({},t.state),n),t}return t=k,(n=[{key:"didPropsChange",value:function(e){for(var t=!1,n=0,o=Object.keys(this.props);n<o.length;n++){var i=o[n];if(!e.hasOwnProperty(i)){t=!0;break}if("object"!==f(e[i])&&"function"!==typeof e[i]&&!isNaN(e[i])&&e[i]!==this.props[i]){t=!0;break}}return t||r.default.Children.count(this.props.children)!==r.default.Children.count(e.children)}}])&&x(t.prototype,n),p&&x(t,p),Object.defineProperty(t,"prototype",{writable:!1}),k}(r.default.Component)},433:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(5043)),o=n(9826),i=s(n(1270)),a=s(n(5112)),l=n(1200);function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function m(e){var t=y();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}(this,n)}}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function v(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==c(t)?t:String(t)}var w=(0,l.canUseDOM)()&&n(535);t.default=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(d,e);var t,n,s,c=m(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),v(g(t=c.call(this,e)),"innerSliderRefHandler",(function(e){return t.innerSlider=e})),v(g(t),"slickPrev",(function(){return t.innerSlider.slickPrev()})),v(g(t),"slickNext",(function(){return t.innerSlider.slickNext()})),v(g(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.innerSlider.slickGoTo(e,n)})),v(g(t),"slickPause",(function(){return t.innerSlider.pause("paused")})),v(g(t),"slickPlay",(function(){return t.innerSlider.autoPlay("play")})),t.state={breakpoint:null},t._responsiveMediaHandlers=[],t}return t=d,(n=[{key:"media",value:function(e,t){w.register(e,t),this._responsiveMediaHandlers.push({query:e,handler:t})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map((function(e){return e.breakpoint}));t.sort((function(e,t){return e-t})),t.forEach((function(n,r){var o;o=0===r?(0,i.default)({minWidth:0,maxWidth:n}):(0,i.default)({minWidth:t[r-1]+1,maxWidth:n}),(0,l.canUseDOM)()&&e.media(o,(function(){e.setState({breakpoint:n})}))}));var n=(0,i.default)({minWidth:t.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(n,(function(){e.setState({breakpoint:null})}))}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach((function(e){w.unregister(e.query,e.handler)}))}},{key:"render",value:function(){var e,t,n=this;(e=this.state.breakpoint?"unslick"===(t=this.props.responsive.filter((function(e){return e.breakpoint===n.state.breakpoint})))[0].settings?"unslick":p(p(p({},a.default),this.props),t[0].settings):p(p({},a.default),this.props)).centerMode&&(e.slidesToScroll,e.slidesToScroll=1),e.fade&&(e.slidesToShow,e.slidesToScroll,e.slidesToShow=1,e.slidesToScroll=1);var i=r.default.Children.toArray(this.props.children);i=i.filter((function(e){return"string"===typeof e?!!e.trim():!!e})),e.variableWidth&&(e.rows>1||e.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),e.variableWidth=!1);for(var s=[],c=null,d=0;d<i.length;d+=e.rows*e.slidesPerRow){for(var f=[],h=d;h<d+e.rows*e.slidesPerRow;h+=e.slidesPerRow){for(var m=[],g=h;g<h+e.slidesPerRow&&(e.variableWidth&&i[g].props.style&&(c=i[g].props.style.width),!(g>=i.length));g+=1)m.push(r.default.cloneElement(i[g],{key:100*d+10*h+g,tabIndex:-1,style:{width:"".concat(100/e.slidesPerRow,"%"),display:"inline-block"}}));f.push(r.default.createElement("div",{key:10*d+h},m))}e.variableWidth?s.push(r.default.createElement("div",{key:d,style:{width:c}},f)):s.push(r.default.createElement("div",{key:d},f))}if("unslick"===e){var y="regular slider "+(this.props.className||"");return r.default.createElement("div",{className:y},i)}return s.length<=e.slidesToShow&&!e.infinite&&(e.unslick=!0),r.default.createElement(o.InnerSlider,u({style:this.props.style,ref:this.innerSliderRefHandler},(0,l.filterSettings)(e)),s)}}])&&f(t.prototype,n),s&&f(t,s),Object.defineProperty(t,"prototype",{writable:!1}),d}(r.default.Component)},737:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Track=void 0;var r=a(n(5043)),o=a(n(8139)),i=n(1200);function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function d(e){var t=f();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,n)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==l(t)?t:String(t)}var v=function(e){var t,n,r,o,i;return r=(i=e.rtl?e.slideCount-1-e.index:e.index)<0||i>=e.slideCount,e.centerMode?(o=Math.floor(e.slidesToShow/2),n=(i-e.currentSlide)%e.slideCount===0,i>e.currentSlide-o-1&&i<=e.currentSlide+o&&(t=!0)):t=e.currentSlide<=i&&i<e.currentSlide+e.slidesToShow,{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":r,"slick-current":i===(e.targetSlide<0?e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?e.targetSlide-e.slideCount:e.targetSlide)}},b=function(e,t){return e.key||t},w=function(e){var t,n=[],a=[],l=[],s=r.default.Children.count(e.children),c=(0,i.lazyStartIndex)(e),u=(0,i.lazyEndIndex)(e);return r.default.Children.forEach(e.children,(function(d,p){var f,h={message:"children",index:p,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};f=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(p)>=0?d:r.default.createElement("div",null);var m=function(e){var t={};return void 0!==e.variableWidth&&!1!==e.variableWidth||(t.width=e.slideWidth),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=e.currentSlide===e.index?1:0,t.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t}(g(g({},e),{},{index:p})),y=f.props.className||"",x=v(g(g({},e),{},{index:p}));if(n.push(r.default.cloneElement(f,{key:"original"+b(f,p),"data-index":p,className:(0,o.default)(x,y),tabIndex:"-1","aria-hidden":!x["slick-active"],style:g(g({outline:"none"},f.props.style||{}),m),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(h)}})),e.infinite&&!1===e.fade){var w=s-p;w<=(0,i.getPreClones)(e)&&((t=-w)>=c&&(f=d),x=v(g(g({},e),{},{index:t})),a.push(r.default.cloneElement(f,{key:"precloned"+b(f,t),"data-index":t,tabIndex:"-1",className:(0,o.default)(x,y),"aria-hidden":!x["slick-active"],style:g(g({},f.props.style||{}),m),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(h)}}))),(t=s+p)<u&&(f=d),x=v(g(g({},e),{},{index:t})),l.push(r.default.cloneElement(f,{key:"postcloned"+b(f,t),"data-index":t,tabIndex:"-1",className:(0,o.default)(x,y),"aria-hidden":!x["slick-active"],style:g(g({},f.props.style||{}),m),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(h)}}))}})),e.rtl?a.concat(n,l).reverse():a.concat(n,l)};t.Track=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(a,e);var t,n,o,i=d(a);function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return y(p(e=i.call.apply(i,[this].concat(n))),"node",null),y(p(e),"handleRef",(function(t){e.node=t})),e}return t=a,(n=[{key:"render",value:function(){var e=w(this.props),t=this.props,n={onMouseEnter:t.onMouseEnter,onMouseOver:t.onMouseOver,onMouseLeave:t.onMouseLeave};return r.default.createElement("div",s({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},n),e)}}])&&c(t.prototype,n),o&&c(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.default.PureComponent)},1200:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkSpecKeys=t.checkNavigable=t.changeSlide=t.canUseDOM=t.canGoNext=void 0,t.clamp=u,t.extractObject=void 0,t.filterSettings=function(e){return I.reduce((function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t}),{})},t.validSettings=t.swipeStart=t.swipeMove=t.swipeEnd=t.slidesOnRight=t.slidesOnLeft=t.slideHandler=t.siblingDirection=t.safePreventDefault=t.lazyStartIndex=t.lazySlidesOnRight=t.lazySlidesOnLeft=t.lazyEndIndex=t.keyHandler=t.initializedState=t.getWidth=t.getTrackLeft=t.getTrackCSS=t.getTrackAnimateCSS=t.getTotalSlides=t.getSwipeDirection=t.getSlideCount=t.getRequiredLazySlides=t.getPreClones=t.getPostClones=t.getOnDemandLazySlides=t.getNavigableIndexes=t.getHeight=void 0;var r=i(n(5043)),o=i(n(5112));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){return Math.max(t,Math.min(e,n))}var d=t.safePreventDefault=function(e){["onTouchStart","onTouchMove","onWheel"].includes(e._reactName)||e.preventDefault()},p=t.getOnDemandLazySlides=function(e){for(var t=[],n=f(e),r=h(e),o=n;o<r;o++)e.lazyLoadedList.indexOf(o)<0&&t.push(o);return t},f=(t.getRequiredLazySlides=function(e){for(var t=[],n=f(e),r=h(e),o=n;o<r;o++)t.push(o);return t},t.lazyStartIndex=function(e){return e.currentSlide-m(e)}),h=t.lazyEndIndex=function(e){return e.currentSlide+g(e)},m=t.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},g=t.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},y=t.getWidth=function(e){return e&&e.offsetWidth||0},x=t.getHeight=function(e){return e&&e.offsetHeight||0},v=t.getSwipeDirection=function(e){var t,n,r,o,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=e.startX-e.curX,n=e.startY-e.curY,r=Math.atan2(n,t),(o=Math.round(180*r/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":!0===i?o>=35&&o<=135?"up":"down":"vertical"},b=t.canGoNext=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t},w=(t.extractObject=function(e,t){var n={};return t.forEach((function(t){return n[t]=e[t]})),n},t.initializedState=function(e){var t,n=r.default.Children.count(e.children),o=e.listRef,i=Math.ceil(y(o)),a=e.trackRef&&e.trackRef.node,l=Math.ceil(y(a));if(e.vertical)t=i;else{var c=e.centerMode&&2*parseInt(e.centerPadding);"string"===typeof e.centerPadding&&"%"===e.centerPadding.slice(-1)&&(c*=i/100),t=Math.ceil((i-c)/e.slidesToShow)}var u=o&&x(o.querySelector('[data-index="0"]')),d=u*e.slidesToShow,f=void 0===e.currentSlide?e.initialSlide:e.currentSlide;e.rtl&&void 0===e.currentSlide&&(f=n-1-e.initialSlide);var h=e.lazyLoadedList||[],m=p(s(s({},e),{},{currentSlide:f,lazyLoadedList:h})),g={slideCount:n,slideWidth:t,listWidth:i,trackWidth:l,currentSlide:f,slideHeight:u,listHeight:d,lazyLoadedList:h=h.concat(m)};return null===e.autoplaying&&e.autoplay&&(g.autoplaying="playing"),g},t.slideHandler=function(e){var t=e.waitForAnimate,n=e.animating,r=e.fade,o=e.infinite,i=e.index,a=e.slideCount,l=e.lazyLoad,c=e.currentSlide,d=e.centerMode,f=e.slidesToScroll,h=e.slidesToShow,m=e.useCSS,g=e.lazyLoadedList;if(t&&n)return{};var y,x,v,w=i,k={},S={},j=o?i:u(i,0,a-1);if(r){if(!o&&(i<0||i>=a))return{};i<0?w=i+a:i>=a&&(w=i-a),l&&g.indexOf(w)<0&&(g=g.concat(w)),k={animating:!0,currentSlide:w,lazyLoadedList:g,targetSlide:w},S={animating:!1,targetSlide:w}}else y=w,w<0?(y=w+a,o?a%f!==0&&(y=a-a%f):y=0):!b(e)&&w>c?w=y=c:d&&w>=a?(w=o?a:a-1,y=o?0:a-1):w>=a&&(y=w-a,o?a%f!==0&&(y=0):y=a-h),!o&&w+h>=a&&(y=a-h),x=O(s(s({},e),{},{slideIndex:w})),v=O(s(s({},e),{},{slideIndex:y})),o||(x===v&&(w=y),x=v),l&&(g=g.concat(p(s(s({},e),{},{currentSlide:w})))),m?(k={animating:!0,currentSlide:y,trackStyle:E(s(s({},e),{},{left:x})),lazyLoadedList:g,targetSlide:j},S={animating:!1,currentSlide:y,trackStyle:C(s(s({},e),{},{left:v})),swipeLeft:null,targetSlide:j}):k={currentSlide:y,trackStyle:C(s(s({},e),{},{left:v})),lazyLoadedList:g,targetSlide:j};return{state:k,nextState:S}},t.changeSlide=function(e,t){var n,r,o,i,a=e.slidesToScroll,l=e.slidesToShow,c=e.slideCount,u=e.currentSlide,d=e.targetSlide,p=e.lazyLoad,f=e.infinite;if(n=c%a!==0?0:(c-u)%a,"previous"===t.message)i=u-(o=0===n?a:l-n),p&&!f&&(i=-1===(r=u-o)?c-1:r),f||(i=d-a);else if("next"===t.message)i=u+(o=0===n?a:n),p&&!f&&(i=(u+a)%c+n),f||(i=d+a);else if("dots"===t.message)i=t.index*t.slidesToScroll;else if("children"===t.message){if(i=t.index,f){var h=T(s(s({},e),{},{targetSlide:i}));i>t.currentSlide&&"left"===h?i-=c:i<t.currentSlide&&"right"===h&&(i+=c)}}else"index"===t.message&&(i=Number(t.index));return i},t.keyHandler=function(e,t,n){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":37===e.keyCode?n?"next":"previous":39===e.keyCode?n?"previous":"next":""},t.swipeStart=function(e,t,n){return"IMG"===e.target.tagName&&d(e),!t||!n&&-1!==e.type.indexOf("mouse")?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}},t.swipeMove=function(e,t){var n=t.scrolling,r=t.animating,o=t.vertical,i=t.swipeToSlide,a=t.verticalSwiping,l=t.rtl,c=t.currentSlide,u=t.edgeFriction,p=t.edgeDragged,f=t.onEdge,h=t.swiped,m=t.swiping,g=t.slideCount,y=t.slidesToScroll,x=t.infinite,w=t.touchObject,k=t.swipeEvent,S=t.listHeight,j=t.listWidth;if(!n){if(r)return d(e);o&&i&&a&&d(e);var E,R={},P=O(t);w.curX=e.touches?e.touches[0].pageX:e.clientX,w.curY=e.touches?e.touches[0].pageY:e.clientY,w.swipeLength=Math.round(Math.sqrt(Math.pow(w.curX-w.startX,2)));var A=Math.round(Math.sqrt(Math.pow(w.curY-w.startY,2)));if(!a&&!m&&A>10)return{scrolling:!0};a&&(w.swipeLength=A);var T=(l?-1:1)*(w.curX>w.startX?1:-1);a&&(T=w.curY>w.startY?1:-1);var z=Math.ceil(g/y),M=v(t.touchObject,a),I=w.swipeLength;return x||(0===c&&("right"===M||"down"===M)||c+1>=z&&("left"===M||"up"===M)||!b(t)&&("left"===M||"up"===M))&&(I=w.swipeLength*u,!1===p&&f&&(f(M),R.edgeDragged=!0)),!h&&k&&(k(M),R.swiped=!0),E=o?P+I*(S/j)*T:l?P-I*T:P+I*T,a&&(E=P+I*T),R=s(s({},R),{},{touchObject:w,swipeLeft:E,trackStyle:C(s(s({},t),{},{left:E}))}),Math.abs(w.curX-w.startX)<.8*Math.abs(w.curY-w.startY)?R:(w.swipeLength>10&&(R.swiping=!0,d(e)),R)}},t.swipeEnd=function(e,t){var n=t.dragging,r=t.swipe,o=t.touchObject,i=t.listWidth,a=t.touchThreshold,l=t.verticalSwiping,c=t.listHeight,u=t.swipeToSlide,p=t.scrolling,f=t.onSwipe,h=t.targetSlide,m=t.currentSlide,g=t.infinite;if(!n)return r&&d(e),{};var y=l?c/a:i/a,x=v(o,l),b={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(p)return b;if(!o.swipeLength)return b;if(o.swipeLength>y){var w,j;d(e),f&&f(x);var C=g?m:h;switch(x){case"left":case"up":j=C+S(t),w=u?k(t,j):j,b.currentDirection=0;break;case"right":case"down":j=C-S(t),w=u?k(t,j):j,b.currentDirection=1;break;default:w=C}b.triggerSlideHandler=w}else{var R=O(t);b.trackStyle=E(s(s({},t),{},{left:R}))}return b},t.getNavigableIndexes=function(e){for(var t=e.infinite?2*e.slideCount:e.slideCount,n=e.infinite?-1*e.slidesToShow:0,r=e.infinite?-1*e.slidesToShow:0,o=[];n<t;)o.push(n),n=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return o}),k=t.checkNavigable=function(e,t){var n=w(e),r=0;if(t>n[n.length-1])t=n[n.length-1];else for(var o in n){if(t<n[o]){t=r;break}r=n[o]}return t},S=t.getSlideCount=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var n,r=e.listRef,o=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(o).every((function(r){if(e.vertical){if(r.offsetTop+x(r)/2>-1*e.swipeLeft)return n=r,!1}else if(r.offsetLeft-t+y(r)/2>-1*e.swipeLeft)return n=r,!1;return!0})),!n)return 0;var i=!0===e.rtl?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-i)||1}return e.slidesToScroll},j=t.checkSpecKeys=function(e,t){return t.reduce((function(t,n){return t&&e.hasOwnProperty(n)}),!0)?null:console.error("Keys Missing:",e)},C=t.getTrackCSS=function(e){var t,n;j(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var r=e.slideCount+2*e.slidesToShow;e.vertical?n=r*e.slideHeight:t=A(e)*e.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var i=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";o=s(s({},o),{},{WebkitTransform:i,transform:a,msTransform:l})}else e.vertical?o.top=e.left:o.left=e.left;return e.fade&&(o={opacity:1}),t&&(o.width=t),n&&(o.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?o.marginTop=e.left+"px":o.marginLeft=e.left+"px"),o},E=t.getTrackAnimateCSS=function(e){j(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=C(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t},O=t.getTrackLeft=function(e){if(e.unslick)return 0;j(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t,n,r=e.slideIndex,o=e.trackRef,i=e.infinite,a=e.centerMode,l=e.slideCount,s=e.slidesToShow,c=e.slidesToScroll,u=e.slideWidth,d=e.listWidth,p=e.variableWidth,f=e.slideHeight,h=e.fade,m=e.vertical;if(h||1===e.slideCount)return 0;var g=0;if(i?(g=-R(e),l%c!==0&&r+c>l&&(g=-(r>l?s-(r-l):l%c)),a&&(g+=parseInt(s/2))):(l%c!==0&&r+c>l&&(g=s-l%c),a&&(g=parseInt(s/2))),t=m?r*f*-1+g*f:r*u*-1+g*u,!0===p){var y,x=o&&o.node;if(y=r+R(e),t=(n=x&&x.childNodes[y])?-1*n.offsetLeft:0,!0===a){y=i?r+R(e):r,n=x&&x.children[y],t=0;for(var v=0;v<y;v++)t-=x&&x.children[v]&&x.children[v].offsetWidth;t-=parseInt(e.centerPadding),t+=n&&(d-n.offsetWidth)/2}}return t},R=t.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},P=t.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},A=t.getTotalSlides=function(e){return 1===e.slideCount?1:R(e)+e.slideCount+P(e)},T=t.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+z(e)?"left":"right":e.targetSlide<e.currentSlide-M(e)?"right":"left"},z=t.slidesOnRight=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,o=e.centerPadding;if(n){var i=(t-1)/2+1;return parseInt(o)>0&&(i+=1),r&&t%2===0&&(i+=1),i}return r?0:t-1},M=t.slidesOnLeft=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,o=e.centerPadding;if(n){var i=(t-1)/2+1;return parseInt(o)>0&&(i+=1),r||t%2!==0||(i+=1),i}return r?t-1:0},I=(t.canUseDOM=function(){return!("undefined"===typeof window||!window.document||!window.document.createElement)},t.validSettings=Object.keys(o.default))},3557:(e,t,n)=>{"use strict";var r=n(5173),o=n(5043),i=n(2963);function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var l=a(r),s=a(o),c=a(i);function u(e){var t=e.isOpen,n=e.title,r=e.subtitle,i=e.onRequestClose,a=e.onAfterOpen,l=e.onAfterClose,u=e.children,p=e.className,f=e.overlayClassName,h=e.closeIcon,m=e.from,g=void 0===m?"right":m,y=e.width,x=e.shouldCloseOnEsc,v=e.hideHeader,b=void 0!==v&&v,w="slide-pane_from_".concat(g),k=function(e){var t=o.useRef(!0);o.useEffect((function(){return t.current=!0,function(){t.current=!1}}),[]);var n=o.useState(e),r=n[0],i=n[1];return[r,function(e){!0===t.current&&i(e)}]}(!1),S=k[0],j=k[1];return s.default.createElement(c.default,{ariaHideApp:!1,overlayClassName:{base:"slide-pane__overlay ".concat(f||""),afterOpen:S?"overlay-after-open":"",beforeClose:"overlay-before-close"},className:{base:"slide-pane ".concat(w," ").concat(p||""),afterOpen:S?"content-after-open":"",beforeClose:"content-before-close"},style:{content:{width:y||"80%"}},closeTimeoutMS:500,isOpen:null!==t&&void 0!==t&&t,shouldCloseOnEsc:x,onAfterOpen:function(){null===a||void 0===a||a(),setTimeout((function(){j(!0)}),0)},onAfterClose:function(){null===l||void 0===l||l(),setTimeout((function(){j(!1)}),0)},onRequestClose:i,contentLabel:'Modal "'.concat(n||"",'"')},!b&&s.default.createElement("div",{className:"slide-pane__header"},s.default.createElement("div",{className:"slide-pane__close",onClick:i,role:"button",tabIndex:0},h||s.default.createElement(d,null)),s.default.createElement("div",{className:"slide-pane__title-wrapper"},s.default.createElement("h2",{className:"slide-pane__title"},n),s.default.createElement("div",{className:"slide-pane__subtitle"},r))),s.default.createElement("div",{className:"slide-pane__content"},u))}function d(){return s.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 22"},s.default.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"}))}u.propTypes={isOpen:l.default.bool,title:l.default.node,subtitle:l.default.node,from:l.default.oneOf(["left","right","bottom"]),children:l.default.node.isRequired,className:l.default.string,overlayClassName:l.default.string,width:l.default.string,closeIcon:l.default.node,shouldCloseOnEsc:l.default.bool,hideHeader:l.default.bool,onRequestClose:l.default.func.isRequired,onAfterOpen:l.default.func,onAfterClose:l.default.func},t.Ay=u},3310:function(e,t,n){var r=n(4756);!function(e,t){"use strict";function n(e,t,n,r,o,i,a){try{var l=e[i](a),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function l(e){n(a,o,i,l,s,"next",e)}function s(e){n(a,o,i,l,s,"throw",e)}l(void 0)}))}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function l(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var s={init:"init"},c=function(e){var t=e.value;return void 0===t?"":t},u=function(){return t.createElement(t.Fragment,null,"\xa0")},d={Cell:c,width:150,minWidth:0,maxWidth:Number.MAX_SAFE_INTEGER};function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){var n=t.style,r=t.className;return e=i({},e,{},a(t,["style","className"])),n&&(e.style=e.style?i({},e.style||{},{},n||{}):n),r&&(e.className=e.className?e.className+" "+r:r),""===e.className&&delete e.className,e}),{})}var f=function(e,t){return void 0===t&&(t={}),function(n){return void 0===n&&(n={}),[].concat(e,[n]).reduce((function(e,r){return function e(t,n,r){return"function"==typeof n?e({},n(t,r)):Array.isArray(n)?p.apply(void 0,[t].concat(n)):p(t,n)}(e,r,i({},t,{userProps:n}))}),{})}},h=function(e,t,n,r){return void 0===n&&(n={}),e.reduce((function(e,t){return t(e,n)}),t)},m=function(e,t,n){return void 0===n&&(n={}),e.forEach((function(e){e(t,n)}))};function g(e,t,n,r){e.findIndex((function(e){return e.pluginName===n})),t.forEach((function(t){e.findIndex((function(e){return e.pluginName===t}))}))}function y(e,t){return"function"==typeof e?e(t):e}function x(e){var n=t.useRef();return n.current=e,t.useCallback((function(){return n.current}),[])}var v="undefined"!=typeof document?t.useLayoutEffect:t.useEffect;function b(e,n){var r=t.useRef(!1);v((function(){r.current&&e(),r.current=!0}),n)}function w(e,t,n){return void 0===n&&(n={}),function(r,o){void 0===o&&(o={});var a="string"==typeof r?t[r]:r;if(void 0===a)throw console.info(t),new Error("Renderer Error \u261d\ufe0f");return k(a,i({},e,{column:t},n,{},o))}}function k(e,n){return function(e){return"function"==typeof e&&(t=Object.getPrototypeOf(e)).prototype&&t.prototype.isReactComponent;var t}(r=e)||"function"==typeof r||function(e){return"object"==typeof e&&"symbol"==typeof e.$$typeof&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}(r)?t.createElement(e,n):e;var r}function S(e,t,n){return void 0===n&&(n=0),e.map((function(e){return C(e=i({},e,{parent:t,depth:n})),e.columns&&(e.columns=S(e.columns,e,n+1)),e}))}function j(e){return T(e,"columns")}function C(e){var t=e.id,n=e.accessor,r=e.Header;if("string"==typeof n){t=t||n;var o=n.split(".");n=function(e){return function(e,t,n){if(!t)return e;var r,o="function"==typeof t?t:JSON.stringify(t),i=R.get(o)||function(){var e=function(e){return function e(t,n){if(void 0===n&&(n=[]),Array.isArray(t))for(var r=0;r<t.length;r+=1)e(t[r],n);else n.push(t);return n}(e).map((function(e){return String(e).replace(".","_")})).join(".").replace(F,".").replace(D,"").split(".")}(t);return R.set(o,e),e}();try{r=i.reduce((function(e,t){return e[t]}),e)}catch(e){}return void 0!==r?r:n}(e,o)}}if(!t&&"string"==typeof r&&r&&(t=r),!t&&e.columns)throw console.error(e),new Error('A column ID (or unique "Header" value) is required!');if(!t)throw console.error(e),new Error("A column ID (or string accessor) is required!");return Object.assign(e,{id:t,accessor:n}),e}function E(e,t){if(!t)throw new Error;return Object.assign(e,i({Header:u,Footer:u},d,{},t,{},e)),Object.assign(e,{originalWidth:e.width}),e}function O(e,t,n){void 0===n&&(n=function(){return{}});for(var r=[],o=e,a=0,l=function(){return a++},s=function(){var e={headers:[]},a=[],s=o.some((function(e){return e.parent}));o.forEach((function(r){var o,c=[].concat(a).reverse()[0];s&&(o=r.parent?i({},r.parent,{originalId:r.parent.id,id:r.parent.id+"_"+l(),headers:[r]},n(r)):E(i({originalId:r.id+"_placeholder",id:r.id+"_placeholder_"+l(),placeholderOf:r,headers:[r]},n(r)),t),c&&c.originalId===o.originalId?c.headers.push(r):a.push(o)),e.headers.push(r)})),r.push(e),o=a};o.length;)s();return r.reverse()}var R=new Map;function P(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=0;r<t.length;r+=1)if(void 0!==t[r])return t[r]}function A(e){if("function"==typeof e)return e}function T(e,t){var n=[];return function e(r){r.forEach((function(r){r[t]?e(r[t]):n.push(r)}))}(e),n}function z(e,t){var n=t.manualExpandedKey,r=t.expanded,o=t.expandSubRows,i=void 0===o||o,a=[];return e.forEach((function(e){return function e(t,o){void 0===o&&(o=!0),t.isExpanded=t.original&&t.original[n]||r[t.id],t.canExpand=t.subRows&&!!t.subRows.length,o&&a.push(t),t.subRows&&t.subRows.length&&t.isExpanded&&t.subRows.forEach((function(t){return e(t,i)}))}(e)})),a}function M(e,t,n){return A(e)||t[e]||n[e]||n.text}function I(e,t,n){return e?e(t,n):void 0===t}function L(){throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")}var N=null,F=/\[/g,D=/\]/g,_=function(e){return i({role:"table"},e)},B=function(e){return i({role:"rowgroup"},e)},H=function(e,t){var n=t.column;return i({key:"header_"+n.id,colSpan:n.totalVisibleHeaderCount,role:"columnheader"},e)},W=function(e,t){var n=t.column;return i({key:"footer_"+n.id,colSpan:n.totalVisibleHeaderCount},e)},U=function(e,t){return i({key:"headerGroup_"+t.index,role:"row"},e)},q=function(e,t){return i({key:"footerGroup_"+t.index},e)},V=function(e,t){return i({key:"row_"+t.row.id,role:"row"},e)},G=function(e,t){var n=t.cell;return i({key:"cell_"+n.row.id+"_"+n.column.id,role:"cell"},e)};function K(){return{useOptions:[],stateReducers:[],useControlledState:[],columns:[],columnsDeps:[],allColumns:[],allColumnsDeps:[],accessValue:[],materializedColumns:[],materializedColumnsDeps:[],useInstanceAfterData:[],visibleColumns:[],visibleColumnsDeps:[],headerGroups:[],headerGroupsDeps:[],useInstanceBeforeDimensions:[],useInstance:[],prepareRow:[],getTableProps:[_],getTableBodyProps:[B],getHeaderGroupProps:[U],getFooterGroupProps:[q],getHeaderProps:[H],getFooterProps:[W],getRowProps:[V],getCellProps:[G],useFinalInstance:[]}}s.resetHiddenColumns="resetHiddenColumns",s.toggleHideColumn="toggleHideColumn",s.setHiddenColumns="setHiddenColumns",s.toggleHideAllColumns="toggleHideAllColumns";var J=function(e){e.getToggleHiddenProps=[Q],e.getToggleHideAllColumnsProps=[$],e.stateReducers.push(Y),e.useInstanceBeforeDimensions.push(Z),e.headerGroupsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.hiddenColumns])})),e.useInstance.push(X)};J.pluginName="useColumnVisibility";var Q=function(e,t){var n=t.column;return[e,{onChange:function(e){n.toggleHidden(!e.target.checked)},style:{cursor:"pointer"},checked:n.isVisible,title:"Toggle Column Visible"}]},$=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleHideAllColumns(!e.target.checked)},style:{cursor:"pointer"},checked:!n.allColumnsHidden&&!n.state.hiddenColumns.length,title:"Toggle All Columns Hidden",indeterminate:!n.allColumnsHidden&&n.state.hiddenColumns.length}]};function Y(e,t,n,r){if(t.type===s.init)return i({hiddenColumns:[]},e);if(t.type===s.resetHiddenColumns)return i({},e,{hiddenColumns:r.initialState.hiddenColumns||[]});if(t.type===s.toggleHideColumn){var o=(void 0!==t.value?t.value:!e.hiddenColumns.includes(t.columnId))?[].concat(e.hiddenColumns,[t.columnId]):e.hiddenColumns.filter((function(e){return e!==t.columnId}));return i({},e,{hiddenColumns:o})}return t.type===s.setHiddenColumns?i({},e,{hiddenColumns:y(t.value,e.hiddenColumns)}):t.type===s.toggleHideAllColumns?i({},e,{hiddenColumns:(void 0!==t.value?t.value:!e.hiddenColumns.length)?r.allColumns.map((function(e){return e.id})):[]}):void 0}function Z(e){var n=e.headers,r=e.state.hiddenColumns;t.useRef(!1).current;var o=0;n.forEach((function(e){return o+=function e(t,n){t.isVisible=n&&!r.includes(t.id);var o=0;return t.headers&&t.headers.length?t.headers.forEach((function(n){return o+=e(n,t.isVisible)})):o=t.isVisible?1:0,t.totalVisibleHeaderCount=o,o}(e,!0)}))}function X(e){var n=e.columns,r=e.flatHeaders,o=e.dispatch,i=e.allColumns,a=e.getHooks,l=e.state.hiddenColumns,c=e.autoResetHiddenColumns,u=void 0===c||c,d=x(e),p=i.length===l.length,h=t.useCallback((function(e,t){return o({type:s.toggleHideColumn,columnId:e,value:t})}),[o]),m=t.useCallback((function(e){return o({type:s.setHiddenColumns,value:e})}),[o]),g=t.useCallback((function(e){return o({type:s.toggleHideAllColumns,value:e})}),[o]),y=f(a().getToggleHideAllColumnsProps,{instance:d()});r.forEach((function(e){e.toggleHidden=function(t){o({type:s.toggleHideColumn,columnId:e.id,value:t})},e.getToggleHiddenProps=f(a().getToggleHiddenProps,{instance:d(),column:e})}));var v=x(u);b((function(){v()&&o({type:s.resetHiddenColumns})}),[o,n]),Object.assign(e,{allColumnsHidden:p,toggleHideColumn:h,setHiddenColumns:m,toggleHideAllColumns:g,getToggleHideAllColumnsProps:y})}var ee={},te={},ne=function(e,t,n){return e},re=function(e,t){return e.subRows||[]},oe=function(e,t,n){return""+(n?[n.id,t].join("."):t)},ie=function(e){return e};function ae(e){var t=e.initialState,n=void 0===t?ee:t,r=e.defaultColumn,o=void 0===r?te:r,l=e.getSubRows,s=void 0===l?re:l,c=e.getRowId,u=void 0===c?oe:c,d=e.stateReducer,p=void 0===d?ne:d,f=e.useControlledState,h=void 0===f?ie:f;return i({},a(e,["initialState","defaultColumn","getSubRows","getRowId","stateReducer","useControlledState"]),{initialState:n,defaultColumn:o,getSubRows:s,getRowId:u,stateReducer:p,useControlledState:h})}function le(e,t){void 0===t&&(t=0);var n=0,r=0,o=0,i=0;return e.forEach((function(e){var a=e.headers;if(e.totalLeft=t,a&&a.length){var l=le(a,t),s=l[0],c=l[1],u=l[2],d=l[3];e.totalMinWidth=s,e.totalWidth=c,e.totalMaxWidth=u,e.totalFlexWidth=d}else e.totalMinWidth=e.minWidth,e.totalWidth=Math.min(Math.max(e.minWidth,e.width),e.maxWidth),e.totalMaxWidth=e.maxWidth,e.totalFlexWidth=e.canResize?e.totalWidth:0;e.isVisible&&(t+=e.totalWidth,n+=e.totalMinWidth,r+=e.totalWidth,o+=e.totalMaxWidth,i+=e.totalFlexWidth)})),[n,r,o,i]}function se(e){var t=e.data,n=e.rows,r=e.flatRows,o=e.rowsById,i=e.column,a=e.getRowId,l=e.getSubRows,s=e.accessValueHooks,c=e.getInstance;t.forEach((function(e,u){return function e(n,u,d,p,f){void 0===d&&(d=0);var m=n,g=a(n,u,p),y=o[g];if(y)y.subRows&&y.originalSubRows.forEach((function(t,n){return e(t,n,d+1,y)}));else if((y={id:g,original:m,index:u,depth:d,cells:[{}]}).cells.map=L,y.cells.filter=L,y.cells.forEach=L,y.cells[0].getCellProps=L,y.values={},f.push(y),r.push(y),o[g]=y,y.originalSubRows=l(n,u),y.originalSubRows){var x=[];y.originalSubRows.forEach((function(t,n){return e(t,n,d+1,y,x)})),y.subRows=x}i.accessor&&(y.values[i.id]=i.accessor(n,u,y,f,t)),y.values[i.id]=h(s,y.values[i.id],{row:y,column:i,instance:c()})}(e,u,0,void 0,n)}))}s.resetExpanded="resetExpanded",s.toggleRowExpanded="toggleRowExpanded",s.toggleAllRowsExpanded="toggleAllRowsExpanded";var ce=function(e){e.getToggleAllRowsExpandedProps=[ue],e.getToggleRowExpandedProps=[de],e.stateReducers.push(pe),e.useInstance.push(fe),e.prepareRow.push(he)};ce.pluginName="useExpanded";var ue=function(e,t){var n=t.instance;return[e,{onClick:function(e){n.toggleAllRowsExpanded()},style:{cursor:"pointer"},title:"Toggle All Rows Expanded"}]},de=function(e,t){var n=t.row;return[e,{onClick:function(){n.toggleRowExpanded()},style:{cursor:"pointer"},title:"Toggle Row Expanded"}]};function pe(e,t,n,r){if(t.type===s.init)return i({expanded:{}},e);if(t.type===s.resetExpanded)return i({},e,{expanded:r.initialState.expanded||{}});if(t.type===s.toggleAllRowsExpanded){var o=t.value,c=r.rowsById,u=Object.keys(c).length===Object.keys(e.expanded).length;if(void 0!==o?o:!u){var d={};return Object.keys(c).forEach((function(e){d[e]=!0})),i({},e,{expanded:d})}return i({},e,{expanded:{}})}if(t.type===s.toggleRowExpanded){var p,f=t.id,h=t.value,m=e.expanded[f],g=void 0!==h?h:!m;if(!m&&g)return i({},e,{expanded:i({},e.expanded,(p={},p[f]=!0,p))});if(m&&!g){var y=e.expanded;return y[f],i({},e,{expanded:a(y,[f].map(l))})}return e}}function fe(e){var n=e.data,r=e.rows,o=e.rowsById,i=e.manualExpandedKey,a=void 0===i?"expanded":i,l=e.paginateExpandedRows,c=void 0===l||l,u=e.expandSubRows,d=void 0===u||u,p=e.autoResetExpanded,h=void 0===p||p,m=e.getHooks,y=e.plugins,v=e.state.expanded,w=e.dispatch;g(y,["useSortBy","useGroupBy","usePivotColumns","useGlobalFilter"],"useExpanded");var k=x(h),S=Boolean(Object.keys(o).length&&Object.keys(v).length);S&&Object.keys(o).some((function(e){return!v[e]}))&&(S=!1),b((function(){k()&&w({type:s.resetExpanded})}),[w,n]);var j=t.useCallback((function(e,t){w({type:s.toggleRowExpanded,id:e,value:t})}),[w]),C=t.useCallback((function(e){return w({type:s.toggleAllRowsExpanded,value:e})}),[w]),E=t.useMemo((function(){return c?z(r,{manualExpandedKey:a,expanded:v,expandSubRows:d}):r}),[c,r,a,v,d]),O=t.useMemo((function(){return function(e){var t=0;return Object.keys(e).forEach((function(e){var n=e.split(".");t=Math.max(t,n.length)})),t}(v)}),[v]),R=x(e),P=f(m().getToggleAllRowsExpandedProps,{instance:R()});Object.assign(e,{preExpandedRows:r,expandedRows:E,rows:E,expandedDepth:O,isAllRowsExpanded:S,toggleRowExpanded:j,toggleAllRowsExpanded:C,getToggleAllRowsExpandedProps:P})}function he(e,t){var n=t.instance.getHooks,r=t.instance;e.toggleRowExpanded=function(t){return r.toggleRowExpanded(e.id,t)},e.getToggleRowExpandedProps=f(n().getToggleRowExpandedProps,{instance:r,row:e})}var me=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return String(r).toLowerCase().includes(String(n).toLowerCase())}))}))};me.autoRemove=function(e){return!e};var ge=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return void 0===r||String(r).toLowerCase()===String(n).toLowerCase()}))}))};ge.autoRemove=function(e){return!e};var ye=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return void 0===r||String(r)===String(n)}))}))};ye.autoRemove=function(e){return!e};var xe=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t].includes(n)}))}))};xe.autoRemove=function(e){return!e||!e.length};var ve=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r&&r.length&&n.every((function(e){return r.includes(e)}))}))}))};ve.autoRemove=function(e){return!e||!e.length};var be=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r&&r.length&&n.some((function(e){return r.includes(e)}))}))}))};be.autoRemove=function(e){return!e||!e.length};var we=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return n.includes(r)}))}))};we.autoRemove=function(e){return!e||!e.length};var ke=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]===n}))}))};ke.autoRemove=function(e){return void 0===e};var Se=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]==n}))}))};Se.autoRemove=function(e){return null==e};var je=function(e,t,n){var r=n||[],o=r[0],i=r[1];if((o="number"==typeof o?o:-1/0)>(i="number"==typeof i?i:1/0)){var a=o;o=i,i=a}return e.filter((function(e){return t.some((function(t){var n=e.values[t];return n>=o&&n<=i}))}))};je.autoRemove=function(e){return!e||"number"!=typeof e[0]&&"number"!=typeof e[1]};var Ce=Object.freeze({__proto__:null,text:me,exactText:ge,exactTextCase:ye,includes:xe,includesAll:ve,includesSome:be,includesValue:we,exact:ke,equals:Se,between:je});s.resetFilters="resetFilters",s.setFilter="setFilter",s.setAllFilters="setAllFilters";var Ee=function(e){e.stateReducers.push(Oe),e.useInstance.push(Re)};function Oe(e,t,n,r){if(t.type===s.init)return i({filters:[]},e);if(t.type===s.resetFilters)return i({},e,{filters:r.initialState.filters||[]});if(t.type===s.setFilter){var o=t.columnId,a=t.filterValue,l=r.allColumns,c=r.filterTypes,u=l.find((function(e){return e.id===o}));if(!u)throw new Error("React-Table: Could not find a column with id: "+o);var d=M(u.filter,c||{},Ce),p=e.filters.find((function(e){return e.id===o})),f=y(a,p&&p.value);return I(d.autoRemove,f,u)?i({},e,{filters:e.filters.filter((function(e){return e.id!==o}))}):i({},e,p?{filters:e.filters.map((function(e){return e.id===o?{id:o,value:f}:e}))}:{filters:[].concat(e.filters,[{id:o,value:f}])})}if(t.type===s.setAllFilters){var h=t.filters,m=r.allColumns,g=r.filterTypes;return i({},e,{filters:y(h,e.filters).filter((function(e){var t=m.find((function(t){return t.id===e.id}));return!I(M(t.filter,g||{},Ce).autoRemove,e.value,t)}))})}}function Re(e){var n=e.data,r=e.rows,o=e.flatRows,i=e.rowsById,a=e.allColumns,l=e.filterTypes,c=e.manualFilters,u=e.defaultCanFilter,d=void 0!==u&&u,p=e.disableFilters,f=e.state.filters,h=e.dispatch,m=e.autoResetFilters,g=void 0===m||m,y=t.useCallback((function(e,t){h({type:s.setFilter,columnId:e,filterValue:t})}),[h]),v=t.useCallback((function(e){h({type:s.setAllFilters,filters:e})}),[h]);a.forEach((function(e){var t=e.id,n=e.accessor,r=e.defaultCanFilter,o=e.disableFilters;e.canFilter=n?P(!0!==o&&void 0,!0!==p&&void 0,!0):P(r,d,!1),e.setFilter=function(t){return y(e.id,t)};var i=f.find((function(e){return e.id===t}));e.filterValue=i&&i.value}));var w=t.useMemo((function(){if(c||!f.length)return[r,o,i];var e=[],t={};return[function n(r,o){void 0===o&&(o=0);var i=r;return(i=f.reduce((function(e,t){var n=t.id,r=t.value,i=a.find((function(e){return e.id===n}));if(!i)return e;0===o&&(i.preFilteredRows=e);var s=M(i.filter,l||{},Ce);return s?(i.filteredRows=s(e,[n],r),i.filteredRows):(console.warn("Could not find a valid 'column.filter' for column with the ID: "+i.id+"."),e)}),r)).forEach((function(r){e.push(r),t[r.id]=r,r.subRows&&(r.subRows=r.subRows&&r.subRows.length>0?n(r.subRows,o+1):r.subRows)})),i}(r),e,t]}),[c,f,r,o,i,a,l]),k=w[0],S=w[1],j=w[2];t.useMemo((function(){a.filter((function(e){return!f.find((function(t){return t.id===e.id}))})).forEach((function(e){e.preFilteredRows=k,e.filteredRows=k}))}),[k,f,a]);var C=x(g);b((function(){C()&&h({type:s.resetFilters})}),[h,c?null:n]),Object.assign(e,{preFilteredRows:r,preFilteredFlatRows:o,preFilteredRowsById:i,filteredRows:k,filteredFlatRows:S,filteredRowsById:j,rows:k,flatRows:S,rowsById:j,setFilter:y,setAllFilters:v})}Ee.pluginName="useFilters",s.resetGlobalFilter="resetGlobalFilter",s.setGlobalFilter="setGlobalFilter";var Pe=function(e){e.stateReducers.push(Ae),e.useInstance.push(Te)};function Ae(e,t,n,r){if(t.type===s.resetGlobalFilter)return i({},e,{globalFilter:r.initialState.globalFilter||void 0});if(t.type===s.setGlobalFilter){var o=t.filterValue,l=r.userFilterTypes,c=M(r.globalFilter,l||{},Ce),u=y(o,e.globalFilter);return I(c.autoRemove,u)?(e.globalFilter,a(e,["globalFilter"])):i({},e,{globalFilter:u})}}function Te(e){var n=e.data,r=e.rows,o=e.flatRows,i=e.rowsById,a=e.allColumns,l=e.filterTypes,c=e.globalFilter,u=e.manualGlobalFilter,d=e.state.globalFilter,p=e.dispatch,f=e.autoResetGlobalFilter,h=void 0===f||f,m=e.disableGlobalFilter,g=t.useCallback((function(e){p({type:s.setGlobalFilter,filterValue:e})}),[p]),y=t.useMemo((function(){if(u||void 0===d)return[r,o,i];var e=[],t={},n=M(c,l||{},Ce);if(!n)return console.warn("Could not find a valid 'globalFilter' option."),r;a.forEach((function(e){var t=e.disableGlobalFilter;e.canFilter=P(!0!==t&&void 0,!0!==m&&void 0,!0)}));var s=a.filter((function(e){return!0===e.canFilter}));return[function r(o){return(o=n(o,s.map((function(e){return e.id})),d)).forEach((function(n){e.push(n),t[n.id]=n,n.subRows=n.subRows&&n.subRows.length?r(n.subRows):n.subRows})),o}(r),e,t]}),[u,d,c,l,a,r,o,i,m]),v=y[0],w=y[1],k=y[2],S=x(h);b((function(){S()&&p({type:s.resetGlobalFilter})}),[p,u?null:n]),Object.assign(e,{preGlobalFilteredRows:r,preGlobalFilteredFlatRows:o,preGlobalFilteredRowsById:i,globalFilteredRows:v,globalFilteredFlatRows:w,globalFilteredRowsById:k,rows:v,flatRows:w,rowsById:k,setGlobalFilter:g,disableGlobalFilter:m})}function ze(e,t){return t.reduce((function(e,t){return e+("number"==typeof t?t:0)}),0)}Pe.pluginName="useGlobalFilter";var Me=Object.freeze({__proto__:null,sum:ze,min:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e))})),t},max:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.max(t,e))})),t},minMax:function(e){var t=e[0]||0,n=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e),n=Math.max(n,e))})),t+".."+n},average:function(e){return ze(0,e)/e.length},median:function(e){if(!e.length)return null;var t=Math.floor(e.length/2),n=[].concat(e).sort((function(e,t){return e-t}));return e.length%2!=0?n[t]:(n[t-1]+n[t])/2},unique:function(e){return Array.from(new Set(e).values())},uniqueCount:function(e){return new Set(e).size},count:function(e){return e.length}}),Ie=[],Le={};s.resetGroupBy="resetGroupBy",s.setGroupBy="setGroupBy",s.toggleGroupBy="toggleGroupBy";var Ne=function(e){e.getGroupByToggleProps=[Fe],e.stateReducers.push(De),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.groupBy])})),e.visibleColumns.push(_e),e.useInstance.push(He),e.prepareRow.push(We)};Ne.pluginName="useGroupBy";var Fe=function(e,t){var n=t.header;return[e,{onClick:n.canGroupBy?function(e){e.persist(),n.toggleGroupBy()}:void 0,style:{cursor:n.canGroupBy?"pointer":void 0},title:"Toggle GroupBy"}]};function De(e,t,n,r){if(t.type===s.init)return i({groupBy:[]},e);if(t.type===s.resetGroupBy)return i({},e,{groupBy:r.initialState.groupBy||[]});if(t.type===s.setGroupBy)return i({},e,{groupBy:t.value});if(t.type===s.toggleGroupBy){var o=t.columnId,a=t.value,l=void 0!==a?a:!e.groupBy.includes(o);return i({},e,l?{groupBy:[].concat(e.groupBy,[o])}:{groupBy:e.groupBy.filter((function(e){return e!==o}))})}}function _e(e,t){var n=t.instance.state.groupBy,r=n.map((function(t){return e.find((function(e){return e.id===t}))})).filter(Boolean),o=e.filter((function(e){return!n.includes(e.id)}));return(e=[].concat(r,o)).forEach((function(e){e.isGrouped=n.includes(e.id),e.groupedIndex=n.indexOf(e.id)})),e}var Be={};function He(e){var n=e.data,r=e.rows,o=e.flatRows,a=e.rowsById,l=e.allColumns,c=e.flatHeaders,u=e.groupByFn,d=void 0===u?Ue:u,p=e.manualGroupBy,h=e.aggregations,m=void 0===h?Be:h,y=e.plugins,v=e.state.groupBy,w=e.dispatch,k=e.autoResetGroupBy,S=void 0===k||k,j=e.disableGroupBy,C=e.defaultCanGroupBy,E=e.getHooks;g(y,["useColumnOrder","useFilters"],"useGroupBy");var O=x(e);l.forEach((function(t){var n=t.accessor,r=t.defaultGroupBy,o=t.disableGroupBy;t.canGroupBy=n?P(t.canGroupBy,!0!==o&&void 0,!0!==j&&void 0,!0):P(t.canGroupBy,r,C,!1),t.canGroupBy&&(t.toggleGroupBy=function(){return e.toggleGroupBy(t.id)}),t.Aggregated=t.Aggregated||t.Cell}));var R=t.useCallback((function(e,t){w({type:s.toggleGroupBy,columnId:e,value:t})}),[w]),A=t.useCallback((function(e){w({type:s.setGroupBy,value:e})}),[w]);c.forEach((function(e){e.getGroupByToggleProps=f(E().getGroupByToggleProps,{instance:O(),header:e})}));var z=t.useMemo((function(){if(p||!v.length)return[r,o,a,Ie,Le,o,a];var e=v.filter((function(e){return l.find((function(t){return t.id===e}))})),t=[],n={},s=[],c={},u=[],f={},h=function r(o,a,p){if(void 0===a&&(a=0),a===e.length)return o.map((function(e){return i({},e,{depth:a})}));var h=e[a],g=d(o,h);return Object.entries(g).map((function(o,i){var d=o[0],g=o[1],y=h+":"+d,x=r(g,a+1,y=p?p+">"+y:y),v=a?T(g,"leafRows"):g,b=function(t,n,r){var o={};return l.forEach((function(i){if(e.includes(i.id))o[i.id]=n[0]?n[0].values[i.id]:null;else{var a="function"==typeof i.aggregate?i.aggregate:m[i.aggregate]||Me[i.aggregate];if(a){var l=n.map((function(e){return e.values[i.id]})),s=t.map((function(e){var t=e.values[i.id];if(!r&&i.aggregateValue){var n="function"==typeof i.aggregateValue?i.aggregateValue:m[i.aggregateValue]||Me[i.aggregateValue];if(!n)throw console.info({column:i}),new Error("React Table: Invalid column.aggregateValue option for column listed above");t=n(t,e,i)}return t}));o[i.id]=a(s,l)}else{if(i.aggregate)throw console.info({column:i}),new Error("React Table: Invalid column.aggregate option for column listed above");o[i.id]=null}}})),o}(v,g,a),w={id:y,isGrouped:!0,groupByID:h,groupByVal:d,values:b,subRows:x,leafRows:v,depth:a,index:i};return x.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(s.push(e),c[e.id]=e):(u.push(e),f[e.id]=e)})),w}))}(r);return h.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(s.push(e),c[e.id]=e):(u.push(e),f[e.id]=e)})),[h,t,n,s,c,u,f]}),[p,v,r,o,a,l,m,d]),M=z[0],I=z[1],L=z[2],N=z[3],F=z[4],D=z[5],_=z[6],B=x(S);b((function(){B()&&w({type:s.resetGroupBy})}),[w,p?null:n]),Object.assign(e,{preGroupedRows:r,preGroupedFlatRow:o,preGroupedRowsById:a,groupedRows:M,groupedFlatRows:I,groupedRowsById:L,onlyGroupedFlatRows:N,onlyGroupedRowsById:F,nonGroupedFlatRows:D,nonGroupedRowsById:_,rows:M,flatRows:I,rowsById:L,toggleGroupBy:R,setGroupBy:A})}function We(e){e.allCells.forEach((function(t){var n;t.isGrouped=t.column.isGrouped&&t.column.id===e.groupByID,t.isPlaceholder=!t.isGrouped&&t.column.isGrouped,t.isAggregated=!t.isGrouped&&!t.isPlaceholder&&(null==(n=e.subRows)?void 0:n.length)}))}function Ue(e,t){return e.reduce((function(e,n,r){var o=""+n.values[t];return e[o]=Array.isArray(e[o])?e[o]:[],e[o].push(n),e}),{})}var qe=/([0-9]+)/gm;function Ve(e,t){return e===t?0:e>t?1:-1}function Ge(e,t,n){return[e.values[n],t.values[n]]}function Ke(e){return"number"==typeof e?isNaN(e)||e===1/0||e===-1/0?"":String(e):"string"==typeof e?e:""}var Je=Object.freeze({__proto__:null,alphanumeric:function(e,t,n){var r=Ge(e,t,n),o=r[0],i=r[1];for(o=Ke(o),i=Ke(i),o=o.split(qe).filter(Boolean),i=i.split(qe).filter(Boolean);o.length&&i.length;){var a=o.shift(),l=i.shift(),s=parseInt(a,10),c=parseInt(l,10),u=[s,c].sort();if(isNaN(u[0])){if(a>l)return 1;if(l>a)return-1}else{if(isNaN(u[1]))return isNaN(s)?-1:1;if(s>c)return 1;if(c>s)return-1}}return o.length-i.length},datetime:function(e,t,n){var r=Ge(e,t,n),o=r[0],i=r[1];return Ve(o=o.getTime(),i=i.getTime())},basic:function(e,t,n){var r=Ge(e,t,n);return Ve(r[0],r[1])},string:function(e,t,n){var r=Ge(e,t,n),o=r[0],i=r[1];for(o=o.split("").filter(Boolean),i=i.split("").filter(Boolean);o.length&&i.length;){var a=o.shift(),l=i.shift(),s=a.toLowerCase(),c=l.toLowerCase();if(s>c)return 1;if(c>s)return-1;if(a>l)return 1;if(l>a)return-1}return o.length-i.length},number:function(e,t,n){var r=Ge(e,t,n),o=r[0],i=r[1],a=/[^0-9.]/gi;return Ve(o=Number(String(o).replace(a,"")),i=Number(String(i).replace(a,"")))}});s.resetSortBy="resetSortBy",s.setSortBy="setSortBy",s.toggleSortBy="toggleSortBy",s.clearSortBy="clearSortBy",d.sortType="alphanumeric",d.sortDescFirst=!1;var Qe=function(e){e.getSortByToggleProps=[$e],e.stateReducers.push(Ye),e.useInstance.push(Ze)};Qe.pluginName="useSortBy";var $e=function(e,t){var n=t.instance,r=t.column,o=n.isMultiSortEvent,i=void 0===o?function(e){return e.shiftKey}:o;return[e,{onClick:r.canSort?function(e){e.persist(),r.toggleSortBy(void 0,!n.disableMultiSort&&i(e))}:void 0,style:{cursor:r.canSort?"pointer":void 0},title:r.canSort?"Toggle SortBy":void 0}]};function Ye(e,t,n,r){if(t.type===s.init)return i({sortBy:[]},e);if(t.type===s.resetSortBy)return i({},e,{sortBy:r.initialState.sortBy||[]});if(t.type===s.clearSortBy)return i({},e,{sortBy:e.sortBy.filter((function(e){return e.id!==t.columnId}))});if(t.type===s.setSortBy)return i({},e,{sortBy:t.sortBy});if(t.type===s.toggleSortBy){var o,a=t.columnId,l=t.desc,c=t.multi,u=r.allColumns,d=r.disableMultiSort,p=r.disableSortRemove,f=r.disableMultiRemove,h=r.maxMultiSortColCount,m=void 0===h?Number.MAX_SAFE_INTEGER:h,g=e.sortBy,y=u.find((function(e){return e.id===a})).sortDescFirst,x=g.find((function(e){return e.id===a})),v=g.findIndex((function(e){return e.id===a})),b=null!=l,w=[];return"toggle"!==(o=!d&&c?x?"toggle":"add":v!==g.length-1||1!==g.length?"replace":x?"toggle":"replace")||p||b||c&&f||!(x&&x.desc&&!y||!x.desc&&y)||(o="remove"),"replace"===o?w=[{id:a,desc:b?l:y}]:"add"===o?(w=[].concat(g,[{id:a,desc:b?l:y}])).splice(0,w.length-m):"toggle"===o?w=g.map((function(e){return e.id===a?i({},e,{desc:b?l:!x.desc}):e})):"remove"===o&&(w=g.filter((function(e){return e.id!==a}))),i({},e,{sortBy:w})}}function Ze(e){var n=e.data,r=e.rows,o=e.flatRows,i=e.allColumns,a=e.orderByFn,l=void 0===a?Xe:a,c=e.sortTypes,u=e.manualSortBy,d=e.defaultCanSort,p=e.disableSortBy,h=e.flatHeaders,m=e.state.sortBy,y=e.dispatch,v=e.plugins,w=e.getHooks,k=e.autoResetSortBy,S=void 0===k||k;g(v,["useFilters","useGlobalFilter","useGroupBy","usePivotColumns"],"useSortBy");var j=t.useCallback((function(e){y({type:s.setSortBy,sortBy:e})}),[y]),C=t.useCallback((function(e,t,n){y({type:s.toggleSortBy,columnId:e,desc:t,multi:n})}),[y]),E=x(e);h.forEach((function(e){var t=e.accessor,n=e.canSort,r=e.disableSortBy,o=e.id,i=t?P(!0!==r&&void 0,!0!==p&&void 0,!0):P(d,n,!1);e.canSort=i,e.canSort&&(e.toggleSortBy=function(t,n){return C(e.id,t,n)},e.clearSortBy=function(){y({type:s.clearSortBy,columnId:e.id})}),e.getSortByToggleProps=f(w().getSortByToggleProps,{instance:E(),column:e});var a=m.find((function(e){return e.id===o}));e.isSorted=!!a,e.sortedIndex=m.findIndex((function(e){return e.id===o})),e.isSortedDesc=e.isSorted?a.desc:void 0}));var O=t.useMemo((function(){if(u||!m.length)return[r,o];var e=[],t=m.filter((function(e){return i.find((function(t){return t.id===e.id}))}));return[function n(r){var o=l(r,t.map((function(e){var t=i.find((function(t){return t.id===e.id}));if(!t)throw new Error("React-Table: Could not find a column with id: "+e.id+" while sorting");var n=t.sortType,r=A(n)||(c||{})[n]||Je[n];if(!r)throw new Error("React-Table: Could not find a valid sortType of '"+n+"' for column '"+e.id+"'.");return function(t,n){return r(t,n,e.id,e.desc)}})),t.map((function(e){var t=i.find((function(t){return t.id===e.id}));return t&&t.sortInverted?e.desc:!e.desc})));return o.forEach((function(t){e.push(t),t.subRows&&0!==t.subRows.length&&(t.subRows=n(t.subRows))})),o}(r),e]}),[u,m,r,o,i,l,c]),R=O[0],T=O[1],z=x(S);b((function(){z()&&y({type:s.resetSortBy})}),[u?null:n]),Object.assign(e,{preSortedRows:r,preSortedFlatRows:o,sortedRows:R,sortedFlatRows:T,rows:R,flatRows:T,setSortBy:j,toggleSortBy:C})}function Xe(e,t,n){return[].concat(e).sort((function(e,r){for(var o=0;o<t.length;o+=1){var i=t[o],a=!1===n[o]||"desc"===n[o],l=i(e,r);if(0!==l)return a?-l:l}return n[0]?e.index-r.index:r.index-e.index}))}s.resetPage="resetPage",s.gotoPage="gotoPage",s.setPageSize="setPageSize";var et=function(e){e.stateReducers.push(tt),e.useInstance.push(nt)};function tt(e,t,n,r){if(t.type===s.init)return i({pageSize:10,pageIndex:0},e);if(t.type===s.resetPage)return i({},e,{pageIndex:r.initialState.pageIndex||0});if(t.type===s.gotoPage){var o=r.pageCount,a=r.page,l=y(t.pageIndex,e.pageIndex),c=!1;return l>e.pageIndex?c=-1===o?a.length>=e.pageSize:l<o:l<e.pageIndex&&(c=l>-1),c?i({},e,{pageIndex:l}):e}if(t.type===s.setPageSize){var u=t.pageSize,d=e.pageSize*e.pageIndex;return i({},e,{pageIndex:Math.floor(d/u),pageSize:u})}}function nt(e){var n=e.rows,r=e.autoResetPage,o=void 0===r||r,i=e.manualExpandedKey,a=void 0===i?"expanded":i,l=e.plugins,c=e.pageCount,u=e.paginateExpandedRows,d=void 0===u||u,p=e.expandSubRows,f=void 0===p||p,h=e.state,m=h.pageSize,y=h.pageIndex,v=h.expanded,w=h.globalFilter,k=h.filters,S=h.groupBy,j=h.sortBy,C=e.dispatch,E=e.data,O=e.manualPagination;g(l,["useGlobalFilter","useFilters","useGroupBy","useSortBy","useExpanded"],"usePagination");var R=x(o);b((function(){R()&&C({type:s.resetPage})}),[C,O?null:E,w,k,S,j]);var P=O?c:Math.ceil(n.length/m),A=t.useMemo((function(){return P>0?[].concat(new Array(P)).fill(null).map((function(e,t){return t})):[]}),[P]),T=t.useMemo((function(){var e;if(O)e=n;else{var t=m*y,r=t+m;e=n.slice(t,r)}return d?e:z(e,{manualExpandedKey:a,expanded:v,expandSubRows:f})}),[f,v,a,O,y,m,d,n]),M=y>0,I=-1===P?T.length>=m:y<P-1,L=t.useCallback((function(e){C({type:s.gotoPage,pageIndex:e})}),[C]),N=t.useCallback((function(){return L((function(e){return e-1}))}),[L]),F=t.useCallback((function(){return L((function(e){return e+1}))}),[L]),D=t.useCallback((function(e){C({type:s.setPageSize,pageSize:e})}),[C]);Object.assign(e,{pageOptions:A,pageCount:P,page:T,canPreviousPage:M,canNextPage:I,gotoPage:L,previousPage:N,nextPage:F,setPageSize:D})}et.pluginName="usePagination",s.resetPivot="resetPivot",s.togglePivot="togglePivot";var rt=function(e){e.getPivotToggleProps=[it],e.stateReducers.push(at),e.useInstanceAfterData.push(lt),e.allColumns.push(st),e.accessValue.push(ct),e.materializedColumns.push(ut),e.materializedColumnsDeps.push(dt),e.visibleColumns.push(pt),e.visibleColumnsDeps.push(ft),e.useInstance.push(ht),e.prepareRow.push(mt)};rt.pluginName="usePivotColumns";var ot=[],it=function(e,t){var n=t.header;return[e,{onClick:n.canPivot?function(e){e.persist(),n.togglePivot()}:void 0,style:{cursor:n.canPivot?"pointer":void 0},title:"Toggle Pivot"}]};function at(e,t,n,r){if(t.type===s.init)return i({pivotColumns:ot},e);if(t.type===s.resetPivot)return i({},e,{pivotColumns:r.initialState.pivotColumns||ot});if(t.type===s.togglePivot){var o=t.columnId,a=t.value,l=void 0!==a?a:!e.pivotColumns.includes(o);return i({},e,l?{pivotColumns:[].concat(e.pivotColumns,[o])}:{pivotColumns:e.pivotColumns.filter((function(e){return e!==o}))})}}function lt(e){e.allColumns.forEach((function(t){t.isPivotSource=e.state.pivotColumns.includes(t.id)}))}function st(e,t){var n=t.instance;return e.forEach((function(e){e.isPivotSource=n.state.pivotColumns.includes(e.id),e.uniqueValues=new Set})),e}function ct(e,t){var n=t.column;return n.uniqueValues&&void 0!==e&&n.uniqueValues.add(e),e}function ut(e,t){var n=t.instance,r=n.allColumns,o=n.state;if(!o.pivotColumns.length||!o.groupBy||!o.groupBy.length)return e;var a=o.pivotColumns.map((function(e){return r.find((function(t){return t.id===e}))})).filter(Boolean),l=r.filter((function(e){return!e.isPivotSource&&!o.groupBy.includes(e.id)&&!o.pivotColumns.includes(e.id)})),s=j(function e(t,n,r){void 0===t&&(t=0),void 0===r&&(r=[]);var o=a[t];return o?Array.from(o.uniqueValues).sort().map((function(a){var l=i({},o,{Header:o.PivotHeader||"string"==typeof o.header?o.Header+": "+a:a,isPivotGroup:!0,parent:n,depth:t,id:n?n.id+"."+o.id+"."+a:o.id+"."+a,pivotValue:a});return l.columns=e(t+1,l,[].concat(r,[function(e){return e.values[o.id]===a}])),l})):l.map((function(e){return i({},e,{canPivot:!1,isPivoted:!0,parent:n,depth:t,id:""+(n?n.id+"."+e.id:e.id),accessor:function(t,n,o){if(r.every((function(e){return e(o)})))return o.values[e.id]}})}))}());return[].concat(e,s)}function dt(e,t){var n=t.instance.state,r=n.pivotColumns,o=n.groupBy;return[].concat(e,[r,o])}function pt(e,t){var n=t.instance.state;return e=e.filter((function(e){return!e.isPivotSource})),n.pivotColumns.length&&n.groupBy&&n.groupBy.length&&(e=e.filter((function(e){return e.isGrouped||e.isPivoted}))),e}function ft(e,t){var n=t.instance;return[].concat(e,[n.state.pivotColumns,n.state.groupBy])}function ht(e){var t=e.columns,n=e.allColumns,r=e.flatHeaders,o=e.getHooks,i=e.plugins,a=e.dispatch,l=e.autoResetPivot,c=void 0===l||l,u=e.manaulPivot,d=e.disablePivot,p=e.defaultCanPivot;g(i,["useGroupBy"],"usePivotColumns");var h=x(e);n.forEach((function(t){var n=t.accessor,r=t.defaultPivot,o=t.disablePivot;t.canPivot=n?P(t.canPivot,!0!==o&&void 0,!0!==d&&void 0,!0):P(t.canPivot,r,p,!1),t.canPivot&&(t.togglePivot=function(){return e.togglePivot(t.id)}),t.Aggregated=t.Aggregated||t.Cell})),r.forEach((function(e){e.getPivotToggleProps=f(o().getPivotToggleProps,{instance:h(),header:e})}));var m=x(c);b((function(){m()&&a({type:s.resetPivot})}),[a,u?null:t]),Object.assign(e,{togglePivot:function(e,t){a({type:s.togglePivot,columnId:e,value:t})}})}function mt(e){e.allCells.forEach((function(e){e.isPivoted=e.column.isPivoted}))}s.resetSelectedRows="resetSelectedRows",s.toggleAllRowsSelected="toggleAllRowsSelected",s.toggleRowSelected="toggleRowSelected",s.toggleAllPageRowsSelected="toggleAllPageRowsSelected";var gt=function(e){e.getToggleRowSelectedProps=[yt],e.getToggleAllRowsSelectedProps=[xt],e.getToggleAllPageRowsSelectedProps=[vt],e.stateReducers.push(bt),e.useInstance.push(wt),e.prepareRow.push(kt)};gt.pluginName="useRowSelect";var yt=function(e,t){var n=t.instance,r=t.row,o=n.manualRowSelectedKey,i=void 0===o?"isSelected":o;return[e,{onChange:function(e){r.toggleRowSelected(e.target.checked)},style:{cursor:"pointer"},checked:!(!r.original||!r.original[i])||r.isSelected,title:"Toggle Row Selected",indeterminate:r.isSomeSelected}]},xt=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleAllRowsSelected(e.target.checked)},style:{cursor:"pointer"},checked:n.isAllRowsSelected,title:"Toggle All Rows Selected",indeterminate:Boolean(!n.isAllRowsSelected&&Object.keys(n.state.selectedRowIds).length)}]},vt=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleAllPageRowsSelected(e.target.checked)},style:{cursor:"pointer"},checked:n.isAllPageRowsSelected,title:"Toggle All Current Page Rows Selected",indeterminate:Boolean(!n.isAllPageRowsSelected&&n.page.some((function(e){var t=e.id;return n.state.selectedRowIds[t]})))}]};function bt(e,t,n,r){if(t.type===s.init)return i({selectedRowIds:{}},e);if(t.type===s.resetSelectedRows)return i({},e,{selectedRowIds:r.initialState.selectedRowIds||{}});if(t.type===s.toggleAllRowsSelected){var o=t.value,a=r.isAllRowsSelected,l=r.rowsById,c=r.nonGroupedRowsById,u=void 0===c?l:c,d=void 0!==o?o:!a,p=Object.assign({},e.selectedRowIds);return d?Object.keys(u).forEach((function(e){p[e]=!0})):Object.keys(u).forEach((function(e){delete p[e]})),i({},e,{selectedRowIds:p})}if(t.type===s.toggleRowSelected){var f=t.id,h=t.value,m=r.rowsById,g=r.selectSubRows,y=void 0===g||g,x=r.getSubRows,v=e.selectedRowIds[f],b=void 0!==h?h:!v;if(v===b)return e;var w=i({},e.selectedRowIds);return function e(t){var n=m[t];if(n&&(n.isGrouped||(b?w[t]=!0:delete w[t]),y&&x(n)))return x(n).forEach((function(t){return e(t.id)}))}(f),i({},e,{selectedRowIds:w})}if(t.type===s.toggleAllPageRowsSelected){var k=t.value,S=r.page,j=r.rowsById,C=r.selectSubRows,E=void 0===C||C,O=r.isAllPageRowsSelected,R=r.getSubRows,P=void 0!==k?k:!O,A=i({},e.selectedRowIds);return S.forEach((function(e){return function e(t){var n=j[t];if(n.isGrouped||(P?A[t]=!0:delete A[t]),E&&R(n))return R(n).forEach((function(t){return e(t.id)}))}(e.id)})),i({},e,{selectedRowIds:A})}return e}function wt(e){var n=e.data,r=e.rows,o=e.getHooks,i=e.plugins,a=e.rowsById,l=e.nonGroupedRowsById,c=void 0===l?a:l,u=e.autoResetSelectedRows,d=void 0===u||u,p=e.state.selectedRowIds,h=e.selectSubRows,m=void 0===h||h,y=e.dispatch,v=e.page,w=e.getSubRows;g(i,["useFilters","useGroupBy","useSortBy","useExpanded","usePagination"],"useRowSelect");var k=t.useMemo((function(){var e=[];return r.forEach((function(t){var n=m?function e(t,n,r){if(n[t.id])return!0;var o=r(t);if(o&&o.length){var i=!0,a=!1;return o.forEach((function(t){a&&!i||(e(t,n,r)?a=!0:i=!1)})),!!i||!!a&&null}return!1}(t,p,w):!!p[t.id];t.isSelected=!!n,t.isSomeSelected=null===n,n&&e.push(t)})),e}),[r,m,p,w]),S=Boolean(Object.keys(c).length&&Object.keys(p).length),j=S;S&&Object.keys(c).some((function(e){return!p[e]}))&&(S=!1),S||v&&v.length&&v.some((function(e){var t=e.id;return!p[t]}))&&(j=!1);var C=x(d);b((function(){C()&&y({type:s.resetSelectedRows})}),[y,n]);var E=t.useCallback((function(e){return y({type:s.toggleAllRowsSelected,value:e})}),[y]),O=t.useCallback((function(e){return y({type:s.toggleAllPageRowsSelected,value:e})}),[y]),R=t.useCallback((function(e,t){return y({type:s.toggleRowSelected,id:e,value:t})}),[y]),P=x(e),A=f(o().getToggleAllRowsSelectedProps,{instance:P()}),T=f(o().getToggleAllPageRowsSelectedProps,{instance:P()});Object.assign(e,{selectedFlatRows:k,isAllRowsSelected:S,isAllPageRowsSelected:j,toggleRowSelected:R,toggleAllRowsSelected:E,getToggleAllRowsSelectedProps:A,getToggleAllPageRowsSelectedProps:T,toggleAllPageRowsSelected:O})}function kt(e,t){var n=t.instance;e.toggleRowSelected=function(t){return n.toggleRowSelected(e.id,t)},e.getToggleRowSelectedProps=f(n.getHooks().getToggleRowSelectedProps,{instance:n,row:e})}var St=function(e){return{}},jt=function(e){return{}};s.setRowState="setRowState",s.setCellState="setCellState",s.resetRowState="resetRowState";var Ct=function(e){e.stateReducers.push(Et),e.useInstance.push(Ot),e.prepareRow.push(Rt)};function Et(e,t,n,r){var o=r.initialRowStateAccessor,a=void 0===o?St:o,l=r.initialCellStateAccessor,c=void 0===l?jt:l,u=r.rowsById;if(t.type===s.init)return i({rowState:{}},e);if(t.type===s.resetRowState)return i({},e,{rowState:r.initialState.rowState||{}});if(t.type===s.setRowState){var d,p=t.rowId,f=t.value,h=void 0!==e.rowState[p]?e.rowState[p]:a(u[p]);return i({},e,{rowState:i({},e.rowState,(d={},d[p]=y(f,h),d))})}if(t.type===s.setCellState){var m,g,x,v,b,w=t.rowId,k=t.columnId,S=t.value,j=void 0!==e.rowState[w]?e.rowState[w]:a(u[w]),C=void 0!==(null==j||null==(m=j.cellState)?void 0:m[k])?j.cellState[k]:c(null==(g=u[w])||null==(x=g.cells)?void 0:x.find((function(e){return e.column.id===k})));return i({},e,{rowState:i({},e.rowState,(b={},b[w]=i({},j,{cellState:i({},j.cellState||{},(v={},v[k]=y(S,C),v))}),b))})}}function Ot(e){var n=e.autoResetRowState,r=void 0===n||n,o=e.data,i=e.dispatch,a=t.useCallback((function(e,t){return i({type:s.setRowState,rowId:e,value:t})}),[i]),l=t.useCallback((function(e,t,n){return i({type:s.setCellState,rowId:e,columnId:t,value:n})}),[i]),c=x(r);b((function(){c()&&i({type:s.resetRowState})}),[o]),Object.assign(e,{setRowState:a,setCellState:l})}function Rt(e,t){var n=t.instance,r=n.initialRowStateAccessor,o=void 0===r?St:r,i=n.initialCellStateAccessor,a=void 0===i?jt:i,l=n.state.rowState;e&&(e.state=void 0!==l[e.id]?l[e.id]:o(e),e.setState=function(t){return n.setRowState(e.id,t)},e.cells.forEach((function(t){e.state.cellState||(e.state.cellState={}),t.state=void 0!==e.state.cellState[t.column.id]?e.state.cellState[t.column.id]:a(t),t.setState=function(r){return n.setCellState(e.id,t.column.id,r)}})))}Ct.pluginName="useRowState",s.resetColumnOrder="resetColumnOrder",s.setColumnOrder="setColumnOrder";var Pt=function(e){e.stateReducers.push(At),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.columnOrder])})),e.visibleColumns.push(Tt),e.useInstance.push(zt)};function At(e,t,n,r){return t.type===s.init?i({columnOrder:[]},e):t.type===s.resetColumnOrder?i({},e,{columnOrder:r.initialState.columnOrder||[]}):t.type===s.setColumnOrder?i({},e,{columnOrder:y(t.columnOrder,e.columnOrder)}):void 0}function Tt(e,t){var n=t.instance.state.columnOrder;if(!n||!n.length)return e;for(var r=[].concat(n),o=[].concat(e),i=[],a=function(){var e=r.shift(),t=o.findIndex((function(t){return t.id===e}));t>-1&&i.push(o.splice(t,1)[0])};o.length&&r.length;)a();return[].concat(i,o)}function zt(e){var n=e.dispatch;e.setColumnOrder=t.useCallback((function(e){return n({type:s.setColumnOrder,columnOrder:e})}),[n])}Pt.pluginName="useColumnOrder",d.canResize=!0,s.columnStartResizing="columnStartResizing",s.columnResizing="columnResizing",s.columnDoneResizing="columnDoneResizing",s.resetResize="resetResize";var Mt=function(e){e.getResizerProps=[It],e.getHeaderProps.push({style:{position:"relative"}}),e.stateReducers.push(Lt),e.useInstance.push(Ft),e.useInstanceBeforeDimensions.push(Nt)},It=function(e,t){var n=t.instance,r=t.header,o=n.dispatch,i=function(e,t){var n=!1;if("touchstart"===e.type){if(e.touches&&e.touches.length>1)return;n=!0}var r,i,a=function(e){var t=[];return function e(n){n.columns&&n.columns.length&&n.columns.map(e),t.push(n)}(e),t}(t).map((function(e){return[e.id,e.totalWidth]})),l=n?Math.round(e.touches[0].clientX):e.clientX,c=function(){window.cancelAnimationFrame(r),r=null,o({type:s.columnDoneResizing})},u=function(){window.cancelAnimationFrame(r),r=null,o({type:s.columnResizing,clientX:i})},d=function(e){i=e,r||(r=window.requestAnimationFrame(u))},p={mouse:{moveEvent:"mousemove",moveHandler:function(e){return d(e.clientX)},upEvent:"mouseup",upHandler:function(e){document.removeEventListener("mousemove",p.mouse.moveHandler),document.removeEventListener("mouseup",p.mouse.upHandler),c()}},touch:{moveEvent:"touchmove",moveHandler:function(e){return e.cancelable&&(e.preventDefault(),e.stopPropagation()),d(e.touches[0].clientX),!1},upEvent:"touchend",upHandler:function(e){document.removeEventListener(p.touch.moveEvent,p.touch.moveHandler),document.removeEventListener(p.touch.upEvent,p.touch.moveHandler),c()}}},f=n?p.touch:p.mouse,h=!!function(){if("boolean"==typeof N)return N;var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){e=!1}return N=e}()&&{passive:!1};document.addEventListener(f.moveEvent,f.moveHandler,h),document.addEventListener(f.upEvent,f.upHandler,h),o({type:s.columnStartResizing,columnId:t.id,columnWidth:t.totalWidth,headerIdWidths:a,clientX:l})};return[e,{onMouseDown:function(e){return e.persist()||i(e,r)},onTouchStart:function(e){return e.persist()||i(e,r)},style:{cursor:"col-resize"},draggable:!1,role:"separator"}]};function Lt(e,t){if(t.type===s.init)return i({columnResizing:{columnWidths:{}}},e);if(t.type===s.resetResize)return i({},e,{columnResizing:{columnWidths:{}}});if(t.type===s.columnStartResizing){var n=t.clientX,r=t.columnId,o=t.columnWidth,a=t.headerIdWidths;return i({},e,{columnResizing:i({},e.columnResizing,{startX:n,headerIdWidths:a,columnWidth:o,isResizingColumn:r})})}if(t.type===s.columnResizing){var l=t.clientX,c=e.columnResizing,u=c.startX,d=c.columnWidth,p=c.headerIdWidths,f=(l-u)/d,h={};return(void 0===p?[]:p).forEach((function(e){var t=e[0],n=e[1];h[t]=Math.max(n+n*f,0)})),i({},e,{columnResizing:i({},e.columnResizing,{columnWidths:i({},e.columnResizing.columnWidths,{},h)})})}return t.type===s.columnDoneResizing?i({},e,{columnResizing:i({},e.columnResizing,{startX:null,isResizingColumn:null})}):void 0}Mt.pluginName="useResizeColumns";var Nt=function(e){var t=e.flatHeaders,n=e.disableResizing,r=e.getHooks,o=e.state.columnResizing,i=x(e);t.forEach((function(e){var t=P(!0!==e.disableResizing&&void 0,!0!==n&&void 0,!0);e.canResize=t,e.width=o.columnWidths[e.id]||e.originalWidth||e.width,e.isResizing=o.isResizingColumn===e.id,t&&(e.getResizerProps=f(r().getResizerProps,{instance:i(),header:e}))}))};function Ft(e){var n=e.plugins,r=e.dispatch,o=e.autoResetResize,i=void 0===o||o,a=e.columns;g(n,["useAbsoluteLayout"],"useResizeColumns");var l=x(i);b((function(){l()&&r({type:s.resetResize})}),[a]);var c=t.useCallback((function(){return r({type:s.resetResize})}),[r]);Object.assign(e,{resetResizing:c})}var Dt={position:"absolute",top:0},_t=function(e){e.getTableBodyProps.push(Bt),e.getRowProps.push(Bt),e.getHeaderGroupProps.push(Bt),e.getFooterGroupProps.push(Bt),e.getHeaderProps.push((function(e,t){var n=t.column;return[e,{style:i({},Dt,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return[e,{style:i({},Dt,{left:n.column.totalLeft+"px",width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return[e,{style:i({},Dt,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]}))};_t.pluginName="useAbsoluteLayout";var Bt=function(e,t){return[e,{style:{position:"relative",width:t.instance.totalColumnsWidth+"px"}}]},Ht={display:"inline-block",boxSizing:"border-box"},Wt=function(e,t){return[e,{style:{display:"flex",width:t.instance.totalColumnsWidth+"px"}}]},Ut=function(e){e.getRowProps.push(Wt),e.getHeaderGroupProps.push(Wt),e.getFooterGroupProps.push(Wt),e.getHeaderProps.push((function(e,t){var n=t.column;return[e,{style:i({},Ht,{width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return[e,{style:i({},Ht,{width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return[e,{style:i({},Ht,{width:n.totalWidth+"px"})}]}))};function qt(e){e.getTableProps.push(Vt),e.getRowProps.push(Gt),e.getHeaderGroupProps.push(Gt),e.getFooterGroupProps.push(Gt),e.getHeaderProps.push(Kt),e.getCellProps.push(Jt),e.getFooterProps.push(Qt)}Ut.pluginName="useBlockLayout",qt.pluginName="useFlexLayout";var Vt=function(e,t){return[e,{style:{minWidth:t.instance.totalColumnsMinWidth+"px"}}]},Gt=function(e,t){return[e,{style:{display:"flex",flex:"1 0 auto",minWidth:t.instance.totalColumnsMinWidth+"px"}}]},Kt=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]},Jt=function(e,t){var n=t.cell;return[e,{style:{boxSizing:"border-box",flex:n.column.totalFlexWidth+" 0 auto",minWidth:n.column.totalMinWidth+"px",width:n.column.totalWidth+"px"}}]},Qt=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]};function $t(e){e.stateReducers.push(en),e.getTableProps.push(Yt),e.getHeaderProps.push(Zt),e.getRowProps.push(Xt)}s.columnStartResizing="columnStartResizing",s.columnResizing="columnResizing",s.columnDoneResizing="columnDoneResizing",s.resetResize="resetResize",$t.pluginName="useGridLayout";var Yt=function(e,t){var n=t.instance;return[e,{style:{display:"grid",gridTemplateColumns:n.visibleColumns.map((function(e){var t;return n.state.gridLayout.columnWidths[e.id]?n.state.gridLayout.columnWidths[e.id]+"px":(null==(t=n.state.columnResizing)?void 0:t.isResizingColumn)?n.state.gridLayout.startWidths[e.id]+"px":"number"==typeof e.width?e.width+"px":e.width})).join(" ")}}]},Zt=function(e,t){var n=t.column;return[e,{id:"header-cell-"+n.id,style:{position:"sticky",gridColumn:"span "+n.totalVisibleHeaderCount}}]},Xt=function(e,t){var n=t.row;return n.isExpanded?[e,{style:{gridColumn:"1 / "+(n.cells.length+1)}}]:[e,{}]};function en(e,t,n,r){if(t.type===s.init)return i({gridLayout:{columnWidths:{}}},e);if(t.type===s.resetResize)return i({},e,{gridLayout:{columnWidths:{}}});if(t.type===s.columnStartResizing){var o=t.columnId,a=t.headerIdWidths,l=tn(o);if(void 0!==l){var c=r.visibleColumns.reduce((function(e,t){var n;return i({},e,((n={})[t.id]=tn(t.id),n))}),{}),u=r.visibleColumns.reduce((function(e,t){var n;return i({},e,((n={})[t.id]=t.minWidth,n))}),{}),d=r.visibleColumns.reduce((function(e,t){var n;return i({},e,((n={})[t.id]=t.maxWidth,n))}),{}),p=a.map((function(e){var t=e[0];return[t,tn(t)]}));return i({},e,{gridLayout:i({},e.gridLayout,{startWidths:c,minWidths:u,maxWidths:d,headerIdGridWidths:p,columnWidth:l})})}return e}if(t.type===s.columnResizing){var f=t.clientX,h=e.columnResizing.startX,m=e.gridLayout,g=m.columnWidth,y=m.minWidths,x=m.maxWidths,v=m.headerIdGridWidths,b=(f-h)/g,w={};return(void 0===v?[]:v).forEach((function(e){var t=e[0],n=e[1];w[t]=Math.min(Math.max(y[t],n+n*b),x[t])})),i({},e,{gridLayout:i({},e.gridLayout,{columnWidths:i({},e.gridLayout.columnWidths,{},w)})})}return t.type===s.columnDoneResizing?i({},e,{gridLayout:i({},e.gridLayout,{startWidths:{},minWidths:{},maxWidths:{}})}):void 0}function tn(e){var t,n=null==(t=document.getElementById("header-cell-"+e))?void 0:t.offsetWidth;if(void 0!==n)return n}e._UNSTABLE_usePivotColumns=rt,e.actions=s,e.defaultColumn=d,e.defaultGroupByFn=Ue,e.defaultOrderByFn=Xe,e.defaultRenderer=c,e.emptyRenderer=u,e.ensurePluginOrder=g,e.flexRender=k,e.functionalUpdate=y,e.loopHooks=m,e.makePropGetter=f,e.makeRenderer=w,e.reduceHooks=h,e.safeUseLayoutEffect=v,e.useAbsoluteLayout=_t,e.useAsyncDebounce=function(e,n){void 0===n&&(n=0);var i=t.useRef({}),a=x(e),l=x(n);return t.useCallback(function(){var e=o(r.mark((function e(){var t,n,s,c=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=c.length,n=new Array(t),s=0;s<t;s++)n[s]=c[s];return i.current.promise||(i.current.promise=new Promise((function(e,t){i.current.resolve=e,i.current.reject=t}))),i.current.timeout&&clearTimeout(i.current.timeout),i.current.timeout=setTimeout(o(r.mark((function e(){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete i.current.timeout,e.prev=1,e.t0=i.current,e.next=5,a().apply(void 0,n);case 5:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),i.current.reject(e.t2);case 12:return e.prev=12,delete i.current.promise,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])}))),l()),e.abrupt("return",i.current.promise);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),[a,l])},e.useBlockLayout=Ut,e.useColumnOrder=Pt,e.useExpanded=ce,e.useFilters=Ee,e.useFlexLayout=qt,e.useGetLatest=x,e.useGlobalFilter=Pe,e.useGridLayout=$t,e.useGroupBy=Ne,e.useMountedLayoutEffect=b,e.usePagination=et,e.useResizeColumns=Mt,e.useRowSelect=gt,e.useRowState=Ct,e.useSortBy=Qe,e.useTable=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e=ae(e),r=[J].concat(r);var a=x(t.useRef({}).current);Object.assign(a(),i({},e,{plugins:r,hooks:K()})),r.filter(Boolean).forEach((function(e){e(a().hooks)}));var l=x(a().hooks);a().getHooks=l,delete a().hooks,Object.assign(a(),h(l().useOptions,ae(e)));var c=a(),u=c.data,d=c.columns,p=c.initialState,g=c.defaultColumn,y=c.getSubRows,v=c.getRowId,b=c.stateReducer,k=c.useControlledState,R=x(b),P=t.useCallback((function(e,t){if(!t.type)throw console.info({action:t}),new Error("Unknown Action \ud83d\udc46");return[].concat(l().stateReducers,Array.isArray(R())?R():[R()]).reduce((function(n,r){return r(n,t,e,a())||n}),e)}),[l,R,a]),A=t.useReducer(P,void 0,(function(){return P(p,{type:s.init})})),T=A[0],z=A[1],M=h([].concat(l().useControlledState,[k]),T,{instance:a()});Object.assign(a(),{state:M,dispatch:z});var I=t.useMemo((function(){return S(h(l().columns,d,{instance:a()}))}),[l,a,d].concat(h(l().columnsDeps,[],{instance:a()})));a().columns=I;var L=t.useMemo((function(){return h(l().allColumns,j(I),{instance:a()}).map(C)}),[I,l,a].concat(h(l().allColumnsDeps,[],{instance:a()})));a().allColumns=L;var N=t.useMemo((function(){for(var e=[],t=[],n={},r=[].concat(L);r.length;){var o=r.shift();se({data:u,rows:e,flatRows:t,rowsById:n,column:o,getRowId:v,getSubRows:y,accessValueHooks:l().accessValue,getInstance:a})}return[e,t,n]}),[L,u,v,y,l,a]),F=N[0],D=N[1],_=N[2];Object.assign(a(),{rows:F,initialRows:[].concat(F),flatRows:D,rowsById:_}),m(l().useInstanceAfterData,a());var B=t.useMemo((function(){return h(l().visibleColumns,L,{instance:a()}).map((function(e){return E(e,g)}))}),[l,L,a,g].concat(h(l().visibleColumnsDeps,[],{instance:a()})));L=t.useMemo((function(){var e=[].concat(B);return L.forEach((function(t){e.find((function(e){return e.id===t.id}))||e.push(t)})),e}),[L,B]),a().allColumns=L;var H=t.useMemo((function(){return h(l().headerGroups,O(B,g),a())}),[l,B,g,a].concat(h(l().headerGroupsDeps,[],{instance:a()})));a().headerGroups=H;var W=t.useMemo((function(){return H.length?H[0].headers:[]}),[H]);a().headers=W,a().flatHeaders=H.reduce((function(e,t){return[].concat(e,t.headers)}),[]),m(l().useInstanceBeforeDimensions,a());var U=B.filter((function(e){return e.isVisible})).map((function(e){return e.id})).sort().join("_");B=t.useMemo((function(){return B.filter((function(e){return e.isVisible}))}),[B,U]),a().visibleColumns=B;var q=le(W),V=q[0],G=q[1],Q=q[2];return a().totalColumnsMinWidth=V,a().totalColumnsWidth=G,a().totalColumnsMaxWidth=Q,m(l().useInstance,a()),[].concat(a().flatHeaders,a().allColumns).forEach((function(e){e.render=w(a(),e),e.getHeaderProps=f(l().getHeaderProps,{instance:a(),column:e}),e.getFooterProps=f(l().getFooterProps,{instance:a(),column:e})})),a().headerGroups=t.useMemo((function(){return H.filter((function(e,t){return e.headers=e.headers.filter((function(e){return e.headers?function e(t){return t.filter((function(t){return t.headers?e(t.headers):t.isVisible})).length}(e.headers):e.isVisible})),!!e.headers.length&&(e.getHeaderGroupProps=f(l().getHeaderGroupProps,{instance:a(),headerGroup:e,index:t}),e.getFooterGroupProps=f(l().getFooterGroupProps,{instance:a(),headerGroup:e,index:t}),!0)}))}),[H,a,l]),a().footerGroups=[].concat(a().headerGroups).reverse(),a().prepareRow=t.useCallback((function(e){e.getRowProps=f(l().getRowProps,{instance:a(),row:e}),e.allCells=L.map((function(t){var n=e.values[t.id],r={column:t,row:e,value:n};return r.getCellProps=f(l().getCellProps,{instance:a(),cell:r}),r.render=w(a(),t,{row:e,cell:r,value:n}),r})),e.cells=B.map((function(t){return e.allCells.find((function(e){return e.column.id===t.id}))})),m(l().prepareRow,e,{instance:a()})}),[l,a,L,B]),a().getTableProps=f(l().getTableProps,{instance:a()}),a().getTableBodyProps=f(l().getTableBodyProps,{instance:a()}),m(l().useFinalInstance,a()),a()},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(5043))},1094:(e,t,n)=>{n(3310)},1153:(e,t,n)=>{"use strict";var r=n(5043),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function x(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var b=v.prototype=new x;b.constructor=v,m(b,y.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,i={},a=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!j.hasOwnProperty(o)&&(i[o]=t[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:n,type:e,key:a,ref:l,props:i,_owner:S.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function R(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,i,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===i?"."+R(s,0):i,w(a)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),P(a,t,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(s=0,i=""===i?".":i+":",w(e))for(var c=0;c<e.length;c++){var u=i+R(l=e[c],c);s+=P(l,t,o,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=P(l=l.value,t,o,u=i+R(l,c++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function A(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},M={transition:null},I={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:M,ReactCurrentOwner:S};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=a,t.PureComponent=v,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!j.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,n){return z.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,n){return z.current.useReducer(e,t,n)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return z.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return z.current.useTransition()},t.version="18.3.1"},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},579:(e,t,n)=>{"use strict";e.exports=n(1153)},5820:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var r=function(){if("undefined"!==typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];e.call(t,o[1],o[0])}},t}()}(),o="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,i="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),a="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var l=["top","right","bottom","left","width","height","size","weight"],s="undefined"!==typeof MutationObserver,c=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&s()}function l(){a(i)}function s(){var e=Date.now();if(n){if(e-o<2)return;r=!0}else n=!0,r=!1,setTimeout(l,t);o=e}return s}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;l.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),u=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},d=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},p=x(0,0,0,0);function f(e){return parseFloat(e)||0}function h(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+f(e["border-"+n+"-width"])}),0)}function m(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var r=d(e).getComputedStyle(e),o=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=e["padding-"+o];t[o]=f(i)}return t}(r),i=o.left+o.right,a=o.top+o.bottom,l=f(r.width),s=f(r.height);if("border-box"===r.boxSizing&&(Math.round(l+i)!==t&&(l-=h(r,"left","right")+i),Math.round(s+a)!==n&&(s-=h(r,"top","bottom")+a)),!function(e){return e===d(e).document.documentElement}(e)){var c=Math.round(l+i)-t,u=Math.round(s+a)-n;1!==Math.abs(c)&&(l-=c),1!==Math.abs(u)&&(s-=u)}return x(o.left,o.top,l,s)}var g="undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof d(e).SVGGraphicsElement}:function(e){return e instanceof d(e).SVGElement&&"function"===typeof e.getBBox};function y(e){return o?g(e)?function(e){var t=e.getBBox();return x(0,0,t.width,t.height)}(e):m(e):p}function x(e,t,n,r){return{x:e,y:t,width:n,height:r}}var v=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=x(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=y(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),b=function(e,t){var n=function(e){var t=e.x,n=e.y,r=e.width,o=e.height,i="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(i.prototype);return u(a,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),a}(t);u(this,{target:e,contentRect:n})},w=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new v(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new b(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),k="undefined"!==typeof WeakMap?new WeakMap:new r,S=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),r=new w(t,n,this);k.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){S.prototype[e]=function(){var t;return(t=k.get(this))[e].apply(t,arguments)}}));const j="undefined"!==typeof i.ResizeObserver?i.ResizeObserver:S},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>i(s,n))c<o&&0>i(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<o&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,y="function"===typeof setTimeout?setTimeout:null,x="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,M(k);else{var t=r(u);null!==t&&I(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,x(E),E=-1),h=!0;var i=f;try{for(b(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!P());){var a=p.callback;if("function"===typeof a){p.callback=null,f=p.priorityLevel;var l=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?p.callback=l:p===r(c)&&o(c),b(n)}else o(c);p=r(c)}if(null!==p)var s=!0;else{var d=r(u);null!==d&&I(w,d.startTime-n),s=!1}return s}finally{p=null,f=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,C=null,E=-1,O=5,R=-1;function P(){return!(t.unstable_now()-R<O)}function A(){if(null!==C){var e=t.unstable_now();R=e;var n=!0;try{n=C(!0,e)}finally{n?S():(j=!1,C=null)}}else j=!1}if("function"===typeof v)S=function(){v(A)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,z=T.port2;T.port1.onmessage=A,S=function(){z.postMessage(null)}}else S=function(){y(A,0)};function M(e){C=e,j||(j=!0,S())}function I(e,n){E=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,M(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>a?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(x(E),E=-1):g=!0,I(w,i-a))):(e.sortIndex=l,n(c,e),m||h||(m=!0,M(k))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},7324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var c=i[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},7475:e=>{e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},4222:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(4403));t.default=function(e,t){var n=null;if(!e||"string"!==typeof e)return n;var r=(0,o.default)(e),i="function"===typeof t;return r.forEach((function(e){if("declaration"===e.type){var r=e.property,o=e.value;i?t(r,o,e):o&&((n=n||{})[r]=o)}})),n}},8178:function(e){e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}e.r(t),e.d(t,{default:()=>l});var r=encodeURIComponent;function o(e,t,o,i,l){var s=i&&l.arrayPrefix||"";if("object"===n(t)){var c="".concat(e).concat(s).concat(o&&"]","[");return"".concat(a(t,"".concat(o).concat(c),l))}return o&&o.length?"".concat(o).concat(e,"]").concat(s,"=").concat(r(t)):"".concat(e).concat(s,"=").concat(r(t))}function i(e,t,n,r){return t.map((function(t){return o(e,t,n,!0,r)})).join("&")}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(Array.isArray(e)?e.map((function(e,r){return o("".concat(r),e,t,!0,n)})):Object.keys(e).filter((function(t){return void 0!==e[t]})).map((function(r){return e[r]&&Array.isArray(e[r])?i("".concat(r),e[r],t,n):o(r,e[r],t,!1,n)}))).join("&").replace(/%20/g,"+")}const l=a;return t})()},6440:e=>{"use strict";var t=function(){};e.exports=t},4633:(e,t,n)=>{var r=n(3738).default;function o(){"use strict";e.exports=o=function(){return n},e.exports.__esModule=!0,e.exports.default=e.exports;var t,n={},i=Object.prototype,a=i.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",d=s.toStringTag||"@@toStringTag";function p(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(t){p=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof b?t:b,i=Object.create(o.prototype),a=new M(r||[]);return l(i,"_invoke",{value:P(e,n,a)}),i}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var m="suspendedStart",g="suspendedYield",y="executing",x="completed",v={};function b(){}function w(){}function k(){}var S={};p(S,c,(function(){return this}));var j=Object.getPrototypeOf,C=j&&j(j(I([])));C&&C!==i&&a.call(C,c)&&(S=C);var E=k.prototype=b.prototype=Object.create(S);function O(e){["next","throw","return"].forEach((function(t){p(e,t,(function(e){return this._invoke(t,e)}))}))}function R(e,t){function n(o,i,l,s){var c=h(e[o],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==r(d)&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,l,s)}),(function(e){n("throw",e,l,s)})):t.resolve(d).then((function(e){u.value=e,l(u)}),(function(e){return n("throw",e,l,s)}))}s(c.arg)}var o;l(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}})}function P(e,n,r){var o=m;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===x){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var l=r.delegate;if(l){var s=A(l,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===m)throw o=x,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var c=h(e,n,r);if("normal"===c.type){if(o=r.done?x:g,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=x,r.method="throw",r.arg=c.arg)}}}function A(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,A(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=h(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function z(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(a.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(r(e)+" is not iterable")}return w.prototype=k,l(E,"constructor",{value:k,configurable:!0}),l(k,"constructor",{value:w,configurable:!0}),w.displayName=p(k,d,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,p(e,d,"GeneratorFunction")),e.prototype=Object.create(E),e},n.awrap=function(e){return{__await:e}},O(R.prototype),p(R.prototype,u,(function(){return this})),n.AsyncIterator=R,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new R(f(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(E),p(E,d,"Generator"),p(E,c,(function(){return this})),p(E,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=I,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(z),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return l.type="throw",l.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),z(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;z(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},n}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},3738:e=>{function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4756:(e,t,n)=>{var r=n(4633)();e.exports=r;try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},8139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,i(n)))}return e}function i(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".7ec37918.chunk.js",n.miniCssF=e=>{},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="ipouterpage:";n.l=(r,o,i,a)=>{if(e[r])e[r].push(o);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[o];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=i);var a=n.p+n.u(t),l=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,i,a=r[0],l=r[1],s=r[2],c=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkipouterpage=self.webpackChunkipouterpage||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>ol,hasStandardBrowserEnv:()=>al,hasStandardBrowserWebWorkerEnv:()=>ll,navigator:()=>il,origin:()=>sl});var t={};n.r(t),n.d(t,{boolean:()=>mm,booleanish:()=>gm,commaOrSpaceSeparated:()=>wm,commaSeparated:()=>bm,number:()=>xm,overloadedBoolean:()=>ym,spaceSeparated:()=>vm});var r={};n.r(r),n.d(r,{attentionMarkers:()=>ex,contentInitial:()=>Jy,disable:()=>tx,document:()=>Ky,flow:()=>$y,flowInitial:()=>Qy,insideSpan:()=>Xy,string:()=>Yy,text:()=>Zy});var o=n(5043),i=n.t(o,2),a=n(4391),l=n(8139),s=n.n(l);const c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},u=o.createContext(null);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(null,arguments)}function p(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}n(2740);function f(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function h(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function m(e,t){return Object.keys(t).reduce((function(n,r){var i,a=n,l=a[f(r)],s=a[r],c=p(a,[f(r),r].map(h)),u=t[r],m=function(e,t,n){var r=(0,o.useRef)(void 0!==e),i=(0,o.useState)(t),a=i[0],l=i[1],s=void 0!==e,c=r.current;return r.current=s,!s&&c&&a!==t&&l(t),[s?e:a,(0,o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),l(e)}),[n])]}(s,l,e[u]),g=m[0],y=m[1];return d({},c,((i={})[r]=g,i[u]=y,i))}),e)}n(5484);var g=n(579);const y=["xxl","xl","lg","md","sm","xs"],x="xs",v=o.createContext({prefixes:{},breakpoints:y,minBreakpoint:x}),{Consumer:b,Provider:w}=v;function k(e,t){const{prefixes:n}=(0,o.useContext)(v);return e||n[t]||t}function S(){const{breakpoints:e}=(0,o.useContext)(v);return e}function j(){const{minBreakpoint:e}=(0,o.useContext)(v);return e}const C=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:o,...i}=e;n=k(n,"navbar-brand");const a=o||(i.href?"a":"span");return(0,g.jsx)(a,{...i,ref:t,className:s()(r,n)})}));C.displayName="NavbarBrand";const E=C;function O(e){return e&&e.ownerDocument||document}function R(e,t){return function(e){var t=O(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var P=/([A-Z])/g;var A=/^ms-/;function T(e){return function(e){return e.replace(P,"-$1").toLowerCase()}(e).replace(A,"-ms-")}var z=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const M=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(T(t))||R(e).getPropertyValue(T(t));Object.keys(t).forEach((function(o){var i=t[o];i||0===i?!function(e){return!(!e||!z.test(e))}(o)?n+=T(o)+": "+i+";":r+=o+"("+i+") ":e.style.removeProperty(T(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}var L=n(7950),N=n.t(L,2);const F=!1,D=o.createContext(null);var _="unmounted",B="exited",H="entering",W="entered",U="exiting",q=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=B,r.appearStatus=H):o=W:o=t.unmountOnExit||t.mountOnEnter?_:B,r.state={status:o},r.nextCallback=null,r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,I(e,t)}(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===_?{status:B}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==H&&n!==W&&(t=H):n!==H&&n!==W||(t=U)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===H){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===B&&this.setState({status:_})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[L.findDOMNode(this),r],i=o[0],a=o[1],l=this.getTimeouts(),s=r?l.appear:l.enter;!e&&!n||F?this.safeSetState({status:W},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:H},(function(){t.props.onEntering(i,a),t.onTransitionEnd(s,(function(){t.safeSetState({status:W},(function(){t.props.onEntered(i,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:L.findDOMNode(this);t&&!F?(this.props.onExit(r),this.safeSetState({status:U},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:B},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:B},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===_)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,p(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(D.Provider,{value:null},"function"===typeof n?n(e,r):o.cloneElement(o.Children.only(n),r))},t}(o.Component);function V(){}q.contextType=D,q.propTypes={},q.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:V,onEntering:V,onEntered:V,onExit:V,onExiting:V,onExited:V},q.UNMOUNTED=_,q.EXITED=B,q.ENTERING=H,q.ENTERED=W,q.EXITING=U;const G=q,K=!("undefined"===typeof window||!window.document||!window.document.createElement);var J=!1,Q=!1;try{var $={get passive(){return J=!0},get once(){return Q=J=!0}};K&&(window.addEventListener("test",$,$),window.removeEventListener("test",$,!0))}catch(kj){}const Y=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!Q){var o=r.once,i=r.capture,a=n;!Q&&o&&(a=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=a),e.addEventListener(t,a,J?r:i)}e.addEventListener(t,n,r)};const Z=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};const X=function(e,t,n,r){return Y(e,t,n,r),function(){Z(e,t,n,r)}};function ee(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),i=X(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function te(e,t,n,r){null==n&&(n=function(e){var t=M(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=ee(e,n,r),i=X(e,"transitionend",t);return function(){o(),i()}}function ne(e,t){const n=M(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function re(e,t){const n=ne(e,"transitionDuration"),r=ne(e,"transitionDelay"),o=te(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}const oe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),null)};function ie(e){e.offsetHeight}const ae=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const le=function(e,t){return(0,o.useMemo)((()=>function(e,t){const n=ae(e),r=ae(t);return e=>{n&&n(e),r&&r(e)}}(e,t)),[e,t])};const se=o.forwardRef(((e,t)=>{let{onEnter:n,onEntering:r,onEntered:i,onExit:a,onExiting:l,onExited:s,addEndListener:c,children:u,childRef:d,...p}=e;const f=(0,o.useRef)(null),h=le(f,d),m=e=>{var t;h((t=e)&&"setState"in t?L.findDOMNode(t):null!=t?t:null)},y=e=>t=>{e&&f.current&&e(f.current,t)},x=(0,o.useCallback)(y(n),[n]),v=(0,o.useCallback)(y(r),[r]),b=(0,o.useCallback)(y(i),[i]),w=(0,o.useCallback)(y(a),[a]),k=(0,o.useCallback)(y(l),[l]),S=(0,o.useCallback)(y(s),[s]),j=(0,o.useCallback)(y(c),[c]);return(0,g.jsx)(G,{ref:t,...p,onEnter:x,onEntered:b,onEntering:v,onExit:w,onExited:S,onExiting:k,addEndListener:j,nodeRef:f,children:"function"===typeof u?(e,t)=>u(e,{...t,ref:m}):o.cloneElement(u,{ref:m})})})),ce=se,ue={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function de(e,t){const n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=ue[e];return n+parseInt(M(t,r[0]),10)+parseInt(M(t,r[1]),10)}const pe={[B]:"collapse",[U]:"collapsing",[H]:"collapsing",[W]:"collapse show"},fe=o.forwardRef(((e,t)=>{let{onEnter:n,onEntering:r,onEntered:i,onExit:a,onExiting:l,className:c,children:u,dimension:d="height",in:p=!1,timeout:f=300,mountOnEnter:h=!1,unmountOnExit:m=!1,appear:y=!1,getDimensionValue:x=de,...v}=e;const b="function"===typeof d?d():d,w=(0,o.useMemo)((()=>oe((e=>{e.style[b]="0"}),n)),[b,n]),k=(0,o.useMemo)((()=>oe((e=>{const t=`scroll${b[0].toUpperCase()}${b.slice(1)}`;e.style[b]=`${e[t]}px`}),r)),[b,r]),S=(0,o.useMemo)((()=>oe((e=>{e.style[b]=null}),i)),[b,i]),j=(0,o.useMemo)((()=>oe((e=>{e.style[b]=`${x(b,e)}px`,ie(e)}),a)),[a,x,b]),C=(0,o.useMemo)((()=>oe((e=>{e.style[b]=null}),l)),[b,l]);return(0,g.jsx)(ce,{ref:t,addEndListener:re,...v,"aria-expanded":v.role?p:null,onEnter:w,onEntering:k,onEntered:S,onExit:j,onExiting:C,childRef:u.ref,in:p,timeout:f,mountOnEnter:h,unmountOnExit:m,appear:y,children:(e,t)=>o.cloneElement(u,{...t,className:s()(c,u.props.className,pe[e],"width"===b&&"collapse-horizontal")})})})),he=fe,me=o.createContext(null);me.displayName="NavbarContext";const ge=me,ye=o.forwardRef(((e,t)=>{let{children:n,bsPrefix:r,...i}=e;r=k(r,"navbar-collapse");const a=(0,o.useContext)(ge);return(0,g.jsx)(he,{in:!(!a||!a.expanded),...i,children:(0,g.jsx)("div",{ref:t,className:r,children:n})})}));ye.displayName="NavbarCollapse";const xe=ye;const ve=function(e){const t=(0,o.useRef)(e);return(0,o.useEffect)((()=>{t.current=e}),[e]),t};function be(e){const t=ve(e);return(0,o.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}const we=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,children:i,label:a="Toggle navigation",as:l="button",onClick:c,...u}=e;n=k(n,"navbar-toggler");const{onToggle:d,expanded:p}=(0,o.useContext)(ge)||{},f=be((e=>{c&&c(e),d&&d()}));return"button"===l&&(u.type="button"),(0,g.jsx)(l,{...u,ref:t,onClick:f,"aria-label":a,className:s()(r,n,!p&&"collapsed"),children:i||(0,g.jsx)("span",{className:`${n}-icon`})})}));we.displayName="NavbarToggle";const ke=we,Se="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,je="undefined"!==typeof document||Se?o.useLayoutEffect:o.useEffect,Ce=new WeakMap,Ee=(e,t)=>{if(!e||!t)return;const n=Ce.get(t)||new Map;Ce.set(t,n);let r=n.get(e);return r||(r=t.matchMedia(e),r.refCount=0,n.set(r.media,r)),r};function Oe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"undefined"===typeof window?void 0:window;const n=Ee(e,t),[r,i]=(0,o.useState)((()=>!!n&&n.matches));return je((()=>{let n=Ee(e,t);if(!n)return i(!1);let r=Ce.get(t);const o=()=>{i(n.matches)};return n.refCount++,n.addListener(o),o(),()=>{n.removeListener(o),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}}),[e]),r}const Re=function(e){const t=Object.keys(e);function n(e,t){return e===t?t:e?`${e} and ${t}`:t}function r(n){const r=function(e){return t[Math.min(t.indexOf(e)+1,t.length-1)]}(n);let o=e[r];return o="number"===typeof o?o-.2+"px":`calc(${o} - 0.2px)`,`(max-width: ${o})`}return function(t,i,a){let l;return"object"===typeof t?(l=t,a=i,i=!0):(i=i||!0,l={[t]:i}),Oe((0,o.useMemo)((()=>Object.entries(l).reduce(((t,o)=>{let[i,a]=o;return"up"!==a&&!0!==a||(t=n(t,function(t){let n=e[t];return"number"===typeof n&&(n=`${n}px`),`(min-width: ${n})`}(i))),"down"!==a&&!0!==a||(t=n(t,r(i))),t}),"")),[JSON.stringify(l)]),a)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Pe=Re;function Ae(e){void 0===e&&(e=O());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(kj){return e.body}}function Te(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function ze(e){const t=function(e){const t=(0,o.useRef)(e);return t.current=e,t}(e);(0,o.useEffect)((()=>()=>t.current()),[])}const Me="data-rr-ui-";function Ie(e){return`${Me}${e}`}const Le=Ie("modal-open");const Ne=class{constructor(){let{ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(M(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(Le,""),M(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(Le),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}},Fe=(0,o.createContext)(K?window:void 0);Fe.Provider;function De(){return(0,o.useContext)(Fe)}const _e=(e,t)=>K?null==e?(t||O()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;const Be=function(e){let{children:t,in:n,onExited:r,mountOnEnter:i,unmountOnExit:a}=e;const l=(0,o.useRef)(null),s=(0,o.useRef)(n),c=be(r);(0,o.useEffect)((()=>{n?s.current=!0:c(l.current)}),[n,c]);const u=le(l,t.ref),d=(0,o.cloneElement)(t,{ref:u});return n?d:a||!s.current&&i?null:d};const He=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function We(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:i,onExiting:a,onExited:l,addEndListener:s,children:c}=e,u=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,He);const{major:d}=function(){const e=o.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}(),p=d>=19?c.props.ref:c.ref,f=(0,o.useRef)(null),h=le(f,"function"===typeof c?null:p),m=e=>t=>{e&&f.current&&e(f.current,t)},g=(0,o.useCallback)(m(t),[t]),y=(0,o.useCallback)(m(n),[n]),x=(0,o.useCallback)(m(r),[r]),v=(0,o.useCallback)(m(i),[i]),b=(0,o.useCallback)(m(a),[a]),w=(0,o.useCallback)(m(l),[l]),k=(0,o.useCallback)(m(s),[s]);return Object.assign({},u,{nodeRef:f},t&&{onEnter:g},n&&{onEntering:y},r&&{onEntered:x},i&&{onExit:v},a&&{onExiting:b},l&&{onExited:w},s&&{addEndListener:k},{children:"function"===typeof c?(e,t)=>c(e,Object.assign({},t,{ref:h})):(0,o.cloneElement)(c,{ref:h})})}const Ue=["component"];const qe=o.forwardRef(((e,t)=>{let{component:n}=e;const r=We(function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Ue));return(0,g.jsx)(n,Object.assign({ref:t},r))}));function Ve(e){let{children:t,in:n,onExited:r,onEntered:i,transition:a}=e;const[l,s]=(0,o.useState)(!n);n&&l&&s(!1);const c=function(e){let{in:t,onTransition:n}=e;const r=(0,o.useRef)(null),i=(0,o.useRef)(!0),a=be(n);return je((()=>{if(!r.current)return;let e=!1;return a({in:t,element:r.current,initial:i.current,isStale:()=>e}),()=>{e=!0}}),[t,a]),je((()=>(i.current=!1,()=>{i.current=!0})),[]),r}({in:!!n,onTransition:e=>{Promise.resolve(a(e)).then((()=>{e.isStale()||(e.in?null==i||i(e.element,e.initial):(s(!0),null==r||r(e.element)))}),(t=>{throw e.in||s(!0),t}))}}),u=le(c,t.ref);return l&&!n?null:(0,o.cloneElement)(t,{ref:u})}function Ge(e,t,n){return e?(0,g.jsx)(qe,Object.assign({},n,{component:e})):t?(0,g.jsx)(Ve,Object.assign({},n,{transition:t})):(0,g.jsx)(Be,Object.assign({},n))}const Ke=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let Je;function Qe(e){const t=De(),n=e||function(e){return Je||(Je=new Ne({ownerDocument:null==e?void 0:e.document})),Je}(t),r=(0,o.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,o.useCallback)((e=>{r.current.dialog=e}),[]),setBackdropRef:(0,o.useCallback)((e=>{r.current.backdrop=e}),[])})}const $e=(0,o.forwardRef)(((e,t)=>{let{show:n=!1,role:r="dialog",className:i,style:a,children:l,backdrop:s=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:p,runTransition:f,backdropTransition:h,runBackdropTransition:m,autoFocus:y=!0,enforceFocus:x=!0,restoreFocus:v=!0,restoreFocusOptions:b,renderDialog:w,renderBackdrop:k=e=>(0,g.jsx)("div",Object.assign({},e)),manager:S,container:j,onShow:C,onHide:E=()=>{},onExit:O,onExited:R,onExiting:P,onEnter:A,onEntering:T,onEntered:z}=e,M=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Ke);const I=De(),N=function(e,t){const n=De(),[r,i]=(0,o.useState)((()=>_e(e,null==n?void 0:n.document)));if(!r){const t=_e(e);t&&i(t)}return(0,o.useEffect)((()=>{t&&r&&t(r)}),[t,r]),(0,o.useEffect)((()=>{const t=_e(e);t!==r&&i(t)}),[e,r]),r}(j),F=Qe(S),D=function(){const e=(0,o.useRef)(!0),t=(0,o.useRef)((()=>e.current));return(0,o.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}(),_=function(e){const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{t.current=e})),t.current}(n),[B,H]=(0,o.useState)(!n),W=(0,o.useRef)(null);(0,o.useImperativeHandle)(t,(()=>F),[F]),K&&!_&&n&&(W.current=Ae(null==I?void 0:I.document)),n&&B&&H(!1);const U=be((()=>{if(F.add(),$.current=X(document,"keydown",J),Q.current=X(document,"focus",(()=>setTimeout(V)),!0),C&&C(),y){var e,t;const n=Ae(null!=(e=null==(t=F.dialog)?void 0:t.ownerDocument)?e:null==I?void 0:I.document);F.dialog&&n&&!Te(F.dialog,n)&&(W.current=n,F.dialog.focus())}})),q=be((()=>{var e;(F.remove(),null==$.current||$.current(),null==Q.current||Q.current(),v)&&(null==(e=W.current)||null==e.focus||e.focus(b),W.current=null)}));(0,o.useEffect)((()=>{n&&N&&U()}),[n,N,U]),(0,o.useEffect)((()=>{B&&q()}),[B,q]),ze((()=>{q()}));const V=be((()=>{if(!x||!D()||!F.isTopModal())return;const e=Ae(null==I?void 0:I.document);F.dialog&&e&&!Te(F.dialog,e)&&F.dialog.focus()})),G=be((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===s&&E())})),J=be((e=>{c&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&F.isTopModal()&&(null==d||d(e),e.defaultPrevented||E())})),Q=(0,o.useRef)(),$=(0,o.useRef)();if(!N)return null;const Y=Object.assign({role:r,ref:F.setDialogRef,"aria-modal":"dialog"===r||void 0},M,{style:a,className:i,tabIndex:-1});let Z=w?w(Y):(0,g.jsx)("div",Object.assign({},Y,{children:o.cloneElement(l,{role:"document"})}));Z=Ge(p,f,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:O,onExiting:P,onExited:function(){H(!0),null==R||R(...arguments)},onEnter:A,onEntering:T,onEntered:z,children:Z});let ee=null;return s&&(ee=k({ref:F.setBackdropRef,onClick:G}),ee=Ge(h,m,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ee})),(0,g.jsx)(g.Fragment,{children:L.createPortal((0,g.jsxs)(g.Fragment,{children:[ee,Z]}),N)})}));$e.displayName="Modal";const Ye=Object.assign($e,{Manager:Ne}),Ze={[H]:"show",[W]:"show"},Xe=o.forwardRef(((e,t)=>{let{className:n,children:r,transitionClasses:i={},onEnter:a,...l}=e;const c={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...l},u=(0,o.useCallback)(((e,t)=>{ie(e),null==a||a(e,t)}),[a]);return(0,g.jsx)(ce,{ref:t,addEndListener:re,...c,onEnter:u,childRef:r.ref,children:(e,t)=>o.cloneElement(r,{...t,className:s()("fade",n,r.props.className,Ze[e],i[e])})})}));Xe.displayName="Fade";const et=Xe,tt=o.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:o="div",...i}=e;return r=k(r,"offcanvas-body"),(0,g.jsx)(o,{ref:t,className:s()(n,r),...i})}));tt.displayName="OffcanvasBody";const nt=tt,rt={[H]:"show",[W]:"show"},ot=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,children:i,in:a=!1,mountOnEnter:l=!1,unmountOnExit:c=!1,appear:u=!1,...d}=e;return n=k(n,"offcanvas"),(0,g.jsx)(ce,{ref:t,addEndListener:re,in:a,mountOnEnter:l,unmountOnExit:c,appear:u,...d,childRef:i.ref,children:(e,t)=>o.cloneElement(i,{...t,className:s()(r,i.props.className,(e===H||e===U)&&`${n}-toggling`,rt[e])})})}));ot.displayName="OffcanvasToggling";const it=ot,at=o.createContext({onHide(){}});var lt=n(5173),st=n.n(lt);const ct={"aria-label":st().string,onClick:st().func,variant:st().oneOf(["white"])},ut=o.forwardRef(((e,t)=>{let{className:n,variant:r,"aria-label":o="Close",...i}=e;return(0,g.jsx)("button",{ref:t,type:"button",className:s()("btn-close",r&&`btn-close-${r}`,n),"aria-label":o,...i})}));ut.displayName="CloseButton",ut.propTypes=ct;const dt=ut,pt=o.forwardRef(((e,t)=>{let{closeLabel:n="Close",closeVariant:r,closeButton:i=!1,onHide:a,children:l,...s}=e;const c=(0,o.useContext)(at),u=be((()=>{null==c||c.onHide(),null==a||a()}));return(0,g.jsxs)("div",{ref:t,...s,children:[l,i&&(0,g.jsx)(dt,{"aria-label":n,variant:r,onClick:u})]})})),ft=pt,ht=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,closeLabel:o="Close",closeButton:i=!1,...a}=e;return n=k(n,"offcanvas-header"),(0,g.jsx)(ft,{ref:t,...a,className:s()(r,n),closeLabel:o,closeButton:i})}));ht.displayName="OffcanvasHeader";const mt=ht,gt=(yt="h5",o.forwardRef(((e,t)=>(0,g.jsx)("div",{...e,ref:t,className:s()(e.className,yt)}))));var yt;const xt=o.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:o=gt,...i}=e;return r=k(r,"offcanvas-title"),(0,g.jsx)(o,{ref:t,className:s()(n,r),...i})}));xt.displayName="OffcanvasTitle";const vt=xt;var bt=Function.prototype.bind.call(Function.prototype.call,[].slice);function wt(e,t){return bt(e.querySelectorAll(t))}function kt(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const St=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",jt=".sticky-top",Ct=".navbar-toggler";class Et extends Ne{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,M(t,{[e]:`${parseFloat(M(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],M(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(function(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}(t,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";wt(t,St).forEach((t=>this.adjustAndStore(n,t,e.scrollBarWidth))),wt(t,jt).forEach((t=>this.adjustAndStore(r,t,-e.scrollBarWidth))),wt(t,Ct).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();!function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=kt(e.className,t):e.setAttribute("class",kt(e.className&&e.className.baseVal||"",t))}(t,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";wt(t,St).forEach((e=>this.restore(n,e))),wt(t,jt).forEach((e=>this.restore(r,e))),wt(t,Ct).forEach((e=>this.restore(r,e)))}}let Ot;const Rt=Et;function Pt(e){return(0,g.jsx)(it,{...e})}function At(e){return(0,g.jsx)(et,{...e})}const Tt=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,children:i,"aria-labelledby":a,placement:l="start",responsive:c,show:u=!1,backdrop:d=!0,keyboard:p=!0,scroll:f=!1,onEscapeKeyDown:h,onShow:m,onHide:y,container:x,autoFocus:v=!0,enforceFocus:b=!0,restoreFocus:w=!0,restoreFocusOptions:S,onEntered:j,onExit:C,onExiting:E,onEnter:O,onEntering:R,onExited:P,backdropClassName:A,manager:T,renderStaticNode:z=!1,...M}=e;const I=(0,o.useRef)();n=k(n,"offcanvas");const{onToggle:L}=(0,o.useContext)(ge)||{},[N,F]=(0,o.useState)(!1),D=Pe(c||"xs","up");(0,o.useEffect)((()=>{F(c?u&&!D:u)}),[u,c,D]);const _=be((()=>{null==L||L(),null==y||y()})),B=(0,o.useMemo)((()=>({onHide:_})),[_]);const H=(0,o.useCallback)((e=>(0,g.jsx)("div",{...e,className:s()(`${n}-backdrop`,A)})),[A,n]),W=e=>(0,g.jsx)("div",{...e,...M,className:s()(r,c?`${n}-${c}`:n,`${n}-${l}`),"aria-labelledby":a,children:i});return(0,g.jsxs)(g.Fragment,{children:[!N&&(c||z)&&W({}),(0,g.jsx)(at.Provider,{value:B,children:(0,g.jsx)(Ye,{show:N,ref:t,backdrop:d,container:x,keyboard:p,autoFocus:v,enforceFocus:b&&!f,restoreFocus:w,restoreFocusOptions:S,onEscapeKeyDown:h,onShow:m,onHide:_,onEnter:function(e){e&&(e.style.visibility="visible");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];null==O||O(e,...n)},onEntering:R,onEntered:j,onExit:C,onExiting:E,onExited:function(e){e&&(e.style.visibility="");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];null==P||P(...n)},manager:T||(f?(I.current||(I.current=new Rt({handleContainerOverflow:!1})),I.current):function(e){return Ot||(Ot=new Et(e)),Ot}()),transition:Pt,backdropTransition:At,renderBackdrop:H,renderDialog:W})})]})}));Tt.displayName="Offcanvas";const zt=Object.assign(Tt,{Body:nt,Header:mt,Title:vt}),Mt=o.forwardRef(((e,t)=>{const n=(0,o.useContext)(ge);return(0,g.jsx)(zt,{ref:t,show:!(null==n||!n.expanded),...e,renderStaticNode:!0})}));Mt.displayName="NavbarOffcanvas";const It=Mt,Lt=o.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:o="span",...i}=e;return r=k(r,"navbar-text"),(0,g.jsx)(o,{ref:t,className:s()(n,r),...i})}));Lt.displayName="NavbarText";const Nt=Lt,Ft=o.forwardRef(((e,t)=>{const{bsPrefix:n,expand:r=!0,variant:i="light",bg:a,fixed:l,sticky:c,className:d,as:p="nav",expanded:f,onToggle:h,onSelect:y,collapseOnSelect:x=!1,...v}=m(e,{expanded:"onToggle"}),b=k(n,"navbar"),w=(0,o.useCallback)((function(){null==y||y(...arguments),x&&f&&(null==h||h(!1))}),[y,x,f,h]);void 0===v.role&&"nav"!==p&&(v.role="navigation");let S=`${b}-expand`;"string"===typeof r&&(S=`${S}-${r}`);const j=(0,o.useMemo)((()=>({onToggle:()=>null==h?void 0:h(!f),bsPrefix:b,expanded:!!f,expand:r})),[b,f,r,h]);return(0,g.jsx)(ge.Provider,{value:j,children:(0,g.jsx)(u.Provider,{value:w,children:(0,g.jsx)(p,{ref:t,...v,className:s()(d,b,r&&S,i&&`${b}-${i}`,a&&`bg-${a}`,c&&`sticky-${c}`,l&&`fixed-${l}`)})})})}));Ft.displayName="Navbar";const Dt=Object.assign(Ft,{Brand:E,Collapse:xe,Offcanvas:It,Text:Nt,Toggle:ke}),_t=o.forwardRef(((e,t)=>{let{bsPrefix:n,fluid:r=!1,as:o="div",className:i,...a}=e;const l=k(n,"container"),c="string"===typeof r?`-${r}`:"-fluid";return(0,g.jsx)(o,{ref:t,...a,className:s()(i,r?`${l}${c}`:l)})}));_t.displayName="Container";const Bt=_t;n(9197);const Ht=o.createContext(null);Ht.displayName="NavContext";const Wt=Ht,Ut=o.createContext(null),qt=["as","disabled"];function Vt(e){let{tagName:t,disabled:n,href:r,target:o,rel:i,role:a,onClick:l,tabIndex:s=0,type:c}=e;t||(t=null!=r||null!=o||null!=i?"a":"button");const u={tagName:t};if("button"===t)return[{type:c||"button",disabled:n},u];const d=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==l||l(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:n?void 0:s,href:r,target:"a"===t?o:void 0,"aria-disabled":n||void 0,rel:"a"===t?i:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},u]}const Gt=o.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,qt);const[i,{tagName:a}]=Vt(Object.assign({tagName:n,disabled:r},o));return(0,g.jsx)(a,Object.assign({},o,i,{ref:t}))}));Gt.displayName="Button";const Kt=Gt,Jt=["as","active","eventKey"];function Qt(e){let{key:t,onClick:n,active:r,id:i,role:a,disabled:l}=e;const s=(0,o.useContext)(u),c=(0,o.useContext)(Wt),d=(0,o.useContext)(Ut);let p=r;const f={role:a};if(c){a||"tablist"!==c.role||(f.role="tab");const e=c.getControllerId(null!=t?t:null),n=c.getControlledId(null!=t?t:null);f[Ie("event-key")]=t,f.id=e||i,p=null==r&&null!=t?c.activeKey===t:r,!p&&(null!=d&&d.unmountOnExit||null!=d&&d.mountOnEnter)||(f["aria-controls"]=n)}return"tab"===f.role&&(f["aria-selected"]=p,p||(f.tabIndex=-1),l&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=be((e=>{l||(null==n||n(e),null!=t&&s&&!e.isPropagationStopped()&&s(t,e))})),[f,{isActive:p}]}const $t=o.forwardRef(((e,t)=>{let{as:n=Kt,active:r,eventKey:o}=e,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Jt);const[a,l]=Qt(Object.assign({key:c(o,i.href),active:r},i));return a[Ie("active")]=l.isActive,(0,g.jsx)(n,Object.assign({},i,a,{ref:t}))}));$t.displayName="NavItem";const Yt=$t,Zt=["as","onSelect","activeKey","role","onKeyDown"];const Xt=()=>{},en=Ie("event-key"),tn=o.forwardRef(((e,t)=>{let{as:n="div",onSelect:r,activeKey:i,role:a,onKeyDown:l}=e,s=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Zt);const d=function(){const[,e]=(0,o.useReducer)((e=>!e),!1);return e}(),p=(0,o.useRef)(!1),f=(0,o.useContext)(u),h=(0,o.useContext)(Ut);let m,y;h&&(a=a||"tablist",i=h.activeKey,m=h.getControlledId,y=h.getControllerId);const x=(0,o.useRef)(null),v=e=>{const t=x.current;if(!t)return null;const n=wt(t,`[${en}]:not([aria-disabled=true])`),r=t.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const o=n.indexOf(r);if(-1===o)return null;let i=o+e;return i>=n.length&&(i=0),i<0&&(i=n.length-1),n[i]},b=(e,t)=>{null!=e&&(null==r||r(e,t),null==f||f(e,t))};(0,o.useEffect)((()=>{if(x.current&&p.current){const e=x.current.querySelector(`[${en}][aria-selected=true]`);null==e||e.focus()}p.current=!1}));const w=le(t,x);return(0,g.jsx)(u.Provider,{value:b,children:(0,g.jsx)(Wt.Provider,{value:{role:a,activeKey:c(i),getControlledId:m||Xt,getControllerId:y||Xt},children:(0,g.jsx)(n,Object.assign({},s,{onKeyDown:e=>{if(null==l||l(e),!h)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=v(-1);break;case"ArrowRight":case"ArrowDown":t=v(1);break;default:return}var n;t&&(e.preventDefault(),b(t.dataset[(n="EventKey",`rrUi${n}`)]||null,e),p.current=!0,d())},ref:w,role:a}))})})}));tn.displayName="Nav";const nn=Object.assign(tn,{Item:Yt}),rn=o.createContext(null);rn.displayName="CardHeaderContext";const on=rn,an=o.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:o="div",...i}=e;return r=k(r,"nav-item"),(0,g.jsx)(o,{ref:t,className:s()(n,r),...i})}));an.displayName="NavItem";const ln=an;new WeakMap;const sn=["onKeyDown"];const cn=o.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,sn);const[o]=Vt(Object.assign({tagName:"a"},r)),i=be((e=>{o.onKeyDown(e),null==n||n(e)}));return(a=r.href)&&"#"!==a.trim()&&"button"!==r.role?(0,g.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,g.jsx)("a",Object.assign({ref:t},r,o,{onKeyDown:i}));var a}));cn.displayName="Anchor";const un=cn,dn=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:o=un,active:i,eventKey:a,disabled:l=!1,...u}=e;n=k(n,"nav-link");const[d,p]=Qt({key:c(a,u.href),active:i,disabled:l,...u});return(0,g.jsx)(o,{...u,...d,ref:t,disabled:l,className:s()(r,n,l&&"disabled",p.isActive&&"active")})}));dn.displayName="NavLink";const pn=dn,fn=o.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:r,variant:i,fill:a=!1,justify:l=!1,navbar:c,navbarScroll:u,className:d,activeKey:p,...f}=m(e,{activeKey:"onSelect"}),h=k(r,"nav");let y,x,v=!1;const b=(0,o.useContext)(ge),w=(0,o.useContext)(on);return b?(y=b.bsPrefix,v=null==c||c):w&&({cardHeaderBsPrefix:x}=w),(0,g.jsx)(nn,{as:n,ref:t,activeKey:p,className:s()(d,{[h]:!v,[`${y}-nav`]:v,[`${y}-nav-scroll`]:v&&u,[`${x}-${i}`]:!!x,[`${h}-${i}`]:!!i,[`${h}-fill`]:a,[`${h}-justified`]:l}),...f})}));fn.displayName="Nav";const hn=Object.assign(fn,{Item:ln,Link:pn}),mn=n.p+"static/media/Atom_walk_logo-removebg-preview.21661b59140f92dd7ced.png";var gn=function(){return gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},gn.apply(this,arguments)};Object.create;function yn(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var xn=n(7324),vn=n.n(xn),bn="-ms-",wn="-moz-",kn="-webkit-",Sn="comm",jn="rule",Cn="decl",En="@import",On="@keyframes",Rn="@layer",Pn=Math.abs,An=String.fromCharCode,Tn=Object.assign;function zn(e){return e.trim()}function Mn(e,t){return(e=t.exec(e))?e[0]:e}function In(e,t,n){return e.replace(t,n)}function Ln(e,t,n){return e.indexOf(t,n)}function Nn(e,t){return 0|e.charCodeAt(t)}function Fn(e,t,n){return e.slice(t,n)}function Dn(e){return e.length}function _n(e){return e.length}function Bn(e,t){return t.push(e),e}function Hn(e,t){return e.filter((function(e){return!Mn(e,t)}))}var Wn=1,Un=1,qn=0,Vn=0,Gn=0,Kn="";function Jn(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Wn,column:Un,length:a,return:"",siblings:l}}function Qn(e,t){return Tn(Jn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $n(e){for(;e.root;)e=Qn(e.root,{children:[e]});Bn(e,e.siblings)}function Yn(){return Gn=Vn>0?Nn(Kn,--Vn):0,Un--,10===Gn&&(Un=1,Wn--),Gn}function Zn(){return Gn=Vn<qn?Nn(Kn,Vn++):0,Un++,10===Gn&&(Un=1,Wn++),Gn}function Xn(){return Nn(Kn,Vn)}function er(){return Vn}function tr(e,t){return Fn(Kn,e,t)}function nr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rr(e){return Wn=Un=1,qn=Dn(Kn=e),Vn=0,[]}function or(e){return Kn="",e}function ir(e){return zn(tr(Vn-1,sr(91===e?e+2:40===e?e+1:e)))}function ar(e){for(;(Gn=Xn())&&Gn<33;)Zn();return nr(e)>2||nr(Gn)>3?"":" "}function lr(e,t){for(;--t&&Zn()&&!(Gn<48||Gn>102||Gn>57&&Gn<65||Gn>70&&Gn<97););return tr(e,er()+(t<6&&32==Xn()&&32==Zn()))}function sr(e){for(;Zn();)switch(Gn){case e:return Vn;case 34:case 39:34!==e&&39!==e&&sr(Gn);break;case 40:41===e&&sr(e);break;case 92:Zn()}return Vn}function cr(e,t){for(;Zn()&&e+Gn!==57&&(e+Gn!==84||47!==Xn()););return"/*"+tr(t,Vn-1)+"*"+An(47===e?e:Zn())}function ur(e){for(;!nr(Xn());)Zn();return tr(e,Vn)}function dr(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function pr(e,t,n,r){switch(e.type){case Rn:if(e.children.length)break;case En:case Cn:return e.return=e.return||e.value;case Sn:return"";case On:return e.return=e.value+"{"+dr(e.children,r)+"}";case jn:if(!Dn(e.value=e.props.join(",")))return""}return Dn(n=dr(e.children,r))?e.return=e.value+"{"+n+"}":""}function fr(e,t,n){switch(function(e,t){return 45^Nn(e,0)?(((t<<2^Nn(e,0))<<2^Nn(e,1))<<2^Nn(e,2))<<2^Nn(e,3):0}(e,t)){case 5103:return kn+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return kn+e+e;case 4789:return wn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return kn+e+wn+e+bn+e+e;case 5936:switch(Nn(e,t+11)){case 114:return kn+e+bn+In(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return kn+e+bn+In(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return kn+e+bn+In(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return kn+e+bn+e+e;case 6165:return kn+e+bn+"flex-"+e+e;case 5187:return kn+e+In(e,/(\w+).+(:[^]+)/,kn+"box-$1$2"+bn+"flex-$1$2")+e;case 5443:return kn+e+bn+"flex-item-"+In(e,/flex-|-self/g,"")+(Mn(e,/flex-|baseline/)?"":bn+"grid-row-"+In(e,/flex-|-self/g,""))+e;case 4675:return kn+e+bn+"flex-line-pack"+In(e,/align-content|flex-|-self/g,"")+e;case 5548:return kn+e+bn+In(e,"shrink","negative")+e;case 5292:return kn+e+bn+In(e,"basis","preferred-size")+e;case 6060:return kn+"box-"+In(e,"-grow","")+kn+e+bn+In(e,"grow","positive")+e;case 4554:return kn+In(e,/([^-])(transform)/g,"$1"+kn+"$2")+e;case 6187:return In(In(In(e,/(zoom-|grab)/,kn+"$1"),/(image-set)/,kn+"$1"),e,"")+e;case 5495:case 3959:return In(e,/(image-set\([^]*)/,kn+"$1$`$1");case 4968:return In(In(e,/(.+:)(flex-)?(.*)/,kn+"box-pack:$3"+bn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+kn+e+e;case 4200:if(!Mn(e,/flex-|baseline/))return bn+"grid-column-align"+Fn(e,t)+e;break;case 2592:case 3360:return bn+In(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Mn(e.props,/grid-\w+-end/)}))?~Ln(e+(n=n[t].value),"span",0)?e:bn+In(e,"-start","")+e+bn+"grid-row-span:"+(~Ln(n,"span",0)?Mn(n,/\d+/):+Mn(n,/\d+/)-+Mn(e,/\d+/))+";":bn+In(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Mn(e.props,/grid-\w+-start/)}))?e:bn+In(In(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return In(e,/(.+)-inline(.+)/,kn+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(e)-1-t>6)switch(Nn(e,t+1)){case 109:if(45!==Nn(e,t+4))break;case 102:return In(e,/(.+:)(.+)-([^]+)/,"$1"+kn+"$2-$3$1"+wn+(108==Nn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ln(e,"stretch",0)?fr(In(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return In(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,l){return bn+n+":"+r+l+(o?bn+n+"-span:"+(i?a:+a-+r)+l:"")+e}));case 4949:if(121===Nn(e,t+6))return In(e,":",":"+kn)+e;break;case 6444:switch(Nn(e,45===Nn(e,14)?18:11)){case 120:return In(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+kn+(45===Nn(e,14)?"inline-":"")+"box$3$1"+kn+"$2$3$1"+bn+"$2box$3")+e;case 100:return In(e,":",":"+bn)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return In(e,"scroll-","scroll-snap-")+e}return e}function hr(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Cn:return void(e.return=fr(e.value,e.length,n));case On:return dr([Qn(e,{value:In(e.value,"@","@"+kn)})],r);case jn:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Mn(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$n(Qn(e,{props:[In(t,/:(read-\w+)/,":"+wn+"$1")]})),$n(Qn(e,{props:[t]})),Tn(e,{props:Hn(n,r)});break;case"::placeholder":$n(Qn(e,{props:[In(t,/:(plac\w+)/,":"+kn+"input-$1")]})),$n(Qn(e,{props:[In(t,/:(plac\w+)/,":"+wn+"$1")]})),$n(Qn(e,{props:[In(t,/:(plac\w+)/,bn+"input-$1")]})),$n(Qn(e,{props:[t]})),Tn(e,{props:Hn(n,r)})}return""}))}}function mr(e){return or(gr("",null,null,null,[""],e=rr(e),0,[0],e))}function gr(e,t,n,r,o,i,a,l,s){for(var c=0,u=0,d=a,p=0,f=0,h=0,m=1,g=1,y=1,x=0,v="",b=o,w=i,k=r,S=v;g;)switch(h=x,x=Zn()){case 40:if(108!=h&&58==Nn(S,d-1)){-1!=Ln(S+=In(ir(x),"&","&\f"),"&\f",Pn(c?l[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:S+=ir(x);break;case 9:case 10:case 13:case 32:S+=ar(h);break;case 92:S+=lr(er()-1,7);continue;case 47:switch(Xn()){case 42:case 47:Bn(xr(cr(Zn(),er()),t,n,s),s);break;default:S+="/"}break;case 123*m:l[c++]=Dn(S)*y;case 125*m:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+u:-1==y&&(S=In(S,/\f/g,"")),f>0&&Dn(S)-d&&Bn(f>32?vr(S+";",r,n,d-1,s):vr(In(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(Bn(k=yr(S,t,n,c,u,o,l,v,b=[],w=[],d,i),i),123===x)if(0===u)gr(S,t,k,k,b,i,d,l,w);else switch(99===p&&110===Nn(S,3)?100:p){case 100:case 108:case 109:case 115:gr(e,k,k,r&&Bn(yr(e,k,k,0,0,o,l,v,o,b=[],d,w),w),o,w,d,l,r?b:w);break;default:gr(S,k,k,k,[""],w,0,l,w)}}c=u=f=0,m=y=1,v=S="",d=a;break;case 58:d=1+Dn(S),f=h;default:if(m<1)if(123==x)--m;else if(125==x&&0==m++&&125==Yn())continue;switch(S+=An(x),x*m){case 38:y=u>0?1:(S+="\f",-1);break;case 44:l[c++]=(Dn(S)-1)*y,y=1;break;case 64:45===Xn()&&(S+=ir(Zn())),p=Xn(),u=d=Dn(v=S+=ur(er())),x++;break;case 45:45===h&&2==Dn(S)&&(m=0)}}return i}function yr(e,t,n,r,o,i,a,l,s,c,u,d){for(var p=o-1,f=0===o?i:[""],h=_n(f),m=0,g=0,y=0;m<r;++m)for(var x=0,v=Fn(e,p+1,p=Pn(g=a[m])),b=e;x<h;++x)(b=zn(g>0?f[x]+" "+v:In(v,/&\f/g,f[x])))&&(s[y++]=b);return Jn(e,t,n,0===o?jn:l,s,c,u,d)}function xr(e,t,n,r){return Jn(e,t,n,Sn,An(Gn),Fn(e,2,-2),0,r)}function vr(e,t,n,r,o){return Jn(e,t,n,Cn,Fn(e,0,r),Fn(e,r+1,-1),r,o)}var br={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wr="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",kr="active",Sr="data-styled-version",jr="6.1.12",Cr="/*!sc*/\n",Er="undefined"!=typeof window&&"HTMLElement"in window,Or=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Rr=(new Set,Object.freeze([])),Pr=Object.freeze({});function Ar(e,t,n){return void 0===n&&(n=Pr),e.theme!==n.theme&&e.theme||t||n.theme}var Tr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mr=/(^-|-$)/g;function Ir(e){return e.replace(zr,"-").replace(Mr,"")}var Lr=/(a)(d)/gi,Nr=52,Fr=function(e){return String.fromCharCode(e+(e>25?39:97))};function Dr(e){var t,n="";for(t=Math.abs(e);t>Nr;t=t/Nr|0)n=Fr(t%Nr)+n;return(Fr(t%Nr)+n).replace(Lr,"$1-$2")}var _r,Br=5381,Hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Wr=function(e){return Hr(Br,e)};function Ur(e){return Dr(Wr(e)>>>0)}function qr(e){return e.displayName||e.name||"Component"}function Vr(e){return"string"==typeof e&&!0}var Gr="function"==typeof Symbol&&Symbol.for,Kr=Gr?Symbol.for("react.memo"):60115,Jr=Gr?Symbol.for("react.forward_ref"):60112,Qr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Yr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zr=((_r={})[Jr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_r[Kr]=Yr,_r);function Xr(e){return("type"in(t=e)&&t.type.$$typeof)===Kr?Yr:"$$typeof"in e?Zr[e.$$typeof]:Qr;var t}var eo=Object.defineProperty,to=Object.getOwnPropertyNames,no=Object.getOwnPropertySymbols,ro=Object.getOwnPropertyDescriptor,oo=Object.getPrototypeOf,io=Object.prototype;function ao(e,t,n){if("string"!=typeof t){if(io){var r=oo(t);r&&r!==io&&ao(e,r,n)}var o=to(t);no&&(o=o.concat(no(t)));for(var i=Xr(e),a=Xr(t),l=0;l<o.length;++l){var s=o[l];if(!(s in $r||n&&n[s]||a&&s in a||i&&s in i)){var c=ro(t,s);try{eo(e,s,c)}catch(e){}}}}return e}function lo(e){return"function"==typeof e}function so(e){return"object"==typeof e&&"styledComponentId"in e}function co(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function uo(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function po(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function fo(e,t,n){if(void 0===n&&(n=!1),!n&&!po(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=fo(e[r],t[r]);else if(po(t))for(var r in t)e[r]=fo(e[r],t[r]);return e}function ho(e,t){Object.defineProperty(e,"toString",{value:t})}function mo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var go=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw mo(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(Cr);return t},e}(),yo=new Map,xo=new Map,vo=1,bo=function(e){if(yo.has(e))return yo.get(e);for(;xo.has(vo);)vo++;var t=vo++;return yo.set(e,t),xo.set(t,e),t},wo=function(e,t){vo=t+1,yo.set(e,t),xo.set(t,e)},ko="style[".concat(wr,"][").concat(Sr,'="').concat(jr,'"]'),So=new RegExp("^".concat(wr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jo=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Co=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Cr),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(So);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(wo(u,c),jo(e,u,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},Eo=function(e){for(var t=document.querySelectorAll(ko),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(wr)!==kr&&(Co(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Oo(){return n.nc}var Ro=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(wr,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(wr,kr),r.setAttribute(Sr,jr);var a=Oo();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Po=function(){function e(e){this.element=Ro(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw mo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ao=function(){function e(e){this.element=Ro(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),To=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),zo=Er,Mo={isServer:!Er,useCSSOMInjection:!Or},Io=function(){function e(e,t,n){void 0===e&&(e=Pr),void 0===t&&(t={});var r=this;this.options=gn(gn({},Mo),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Er&&zo&&(zo=!1,Eo(this)),ho(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return xo.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var l="".concat(wr,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(a).concat(l,'{content:"').concat(s,'"}').concat(Cr)},i=0;i<n;i++)o(i);return r}(r)}))}return e.registerId=function(e){return bo(e)},e.prototype.rehydrate=function(){!this.server&&Er&&Eo(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(gn(gn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new To(n):t?new Po(n):new Ao(n)}(this.options),new go(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(bo(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(bo(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(bo(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Lo=/&/g,No=/^\s*\/\/.*$/gm;function Fo(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Fo(e.children,t)),e}))}function Do(e){var t,n,r,o=void 0===e?Pr:e,i=o.options,a=void 0===i?Pr:i,l=o.plugins,s=void 0===l?Rr:l,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push((function(e){e.type===jn&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Lo,n).replace(r,c))})),a.prefix&&u.push(hr),u.push(pr);var d=function(e,o,i,l){void 0===o&&(o=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(No,""),c=mr(i||o?"".concat(i," ").concat(o," { ").concat(s," }"):s);a.namespace&&(c=Fo(c,a.namespace));var d,p=[];return dr(c,function(e){var t=_n(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=s.length?s.reduce((function(e,t){return t.name||mo(15),Hr(e,t.name)}),Br).toString():"",d}var _o=new Io,Bo=Do(),Ho=o.createContext({shouldForwardProp:void 0,styleSheet:_o,stylis:Bo}),Wo=(Ho.Consumer,o.createContext(void 0));function Uo(){return(0,o.useContext)(Ho)}function qo(e){var t=(0,o.useState)(e.stylisPlugins),n=t[0],r=t[1],i=Uo().styleSheet,a=(0,o.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,i]),l=(0,o.useMemo)((function(){return Do({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,o.useEffect)((function(){vn()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,o.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:l}}),[e.shouldForwardProp,a,l]);return o.createElement(Ho.Provider,{value:s},o.createElement(Wo.Provider,{value:l},e.children))}var Vo=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Bo);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ho(this,(function(){throw mo(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Bo),this.name+e.hash},e}(),Go=function(e){return e>="A"&&e<="Z"};function Ko(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Go(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Jo=function(e){return null==e||!1===e||""===e},Qo=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Jo(i)&&(Array.isArray(i)&&i.isCss||lo(i)?r.push("".concat(Ko(o),":"),i,";"):po(i)?r.push.apply(r,yn(yn(["".concat(o," {")],Qo(i),!1),["}"],!1)):r.push("".concat(Ko(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in br||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function $o(e,t,n,r){return Jo(e)?[]:so(e)?[".".concat(e.styledComponentId)]:lo(e)?!lo(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:$o(e(t),t,n,r):e instanceof Vo?n?(e.inject(n,r),[e.getName(r)]):[e]:po(e)?Qo(e):Array.isArray(e)?Array.prototype.concat.apply(Rr,e.map((function(e){return $o(e,t,n,r)}))):[e.toString()];var o}function Yo(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(lo(n)&&!so(n))return!1}return!0}var Zo=Wr(jr),Xo=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Yo(e),this.componentId=t,this.baseHash=Hr(Zo,t),this.baseStyle=n,Io.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=co(r,this.staticRulesId);else{var o=uo($o(this.rules,e,t,n)),i=Dr(Hr(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=co(r,i),this.staticRulesId=i}else{for(var l=Hr(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=uo($o(u,e,t,n));l=Hr(l,d+c),s+=d}}if(s){var p=Dr(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(s,".".concat(p),void 0,this.componentId)),r=co(r,p)}}return r},e}(),ei=o.createContext(void 0);ei.Consumer;var ti={};new Set;function ni(e,t,n){var r=so(e),i=e,a=!Vr(e),l=t.attrs,s=void 0===l?Rr:l,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Ir(e);ti[n]=(ti[n]||0)+1;var r="".concat(n,"-").concat(Ur(jr+n+ti[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,p=void 0===d?function(e){return Vr(e)?"styled.".concat(e):"Styled(".concat(qr(e),")")}(e):d,f=t.displayName&&t.componentId?"".concat(Ir(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=t.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;m=function(e,t){return g(e,t)&&y(e,t)}}else m=g}var x=new Xo(n,f,r?i.componentStyle:void 0);function v(e,t){return function(e,t,n){var r=e.attrs,i=e.componentStyle,a=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=o.useContext(ei),d=Uo(),p=e.shouldForwardProp||d.shouldForwardProp,f=Ar(t,u,a)||Pr,h=function(e,t,n){for(var r,o=gn(gn({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=lo(r=e[i])?r(o):r;for(var l in a)o[l]="className"===l?co(o[l],a[l]):"style"===l?gn(gn({},o[l]),a[l]):a[l]}return t.className&&(o.className=co(o.className,t.className)),o}(r,t,f),m=h.as||c,g={};for(var y in h)void 0===h[y]||"$"===y[0]||"as"===y||"theme"===y&&h.theme===f||("forwardedAs"===y?g.as=h.forwardedAs:p&&!p(y,m)||(g[y]=h[y]));var x=function(e,t){var n=Uo();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),v=co(l,s);return x&&(v+=" "+x),h.className&&(v+=" "+h.className),g[Vr(m)&&!Tr.has(m)?"class":"className"]=v,g.ref=n,(0,o.createElement)(m,g)}(b,e,t)}v.displayName=p;var b=o.forwardRef(v);return b.attrs=h,b.componentStyle=x,b.displayName=p,b.shouldForwardProp=m,b.foldedComponentIds=r?co(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=f,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)fo(e,o[r],!0);return e}({},i.defaultProps,e):e}}),ho(b,(function(){return".".concat(b.styledComponentId)})),a&&ao(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function ri(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var oi=function(e){return Object.assign(e,{isCss:!0})};function ii(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(lo(e)||po(e))return oi($o(ri(Rr,yn([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?$o(r):oi($o(ri(r,t)))}function ai(e,t,n){if(void 0===n&&(n=Pr),!t)throw mo(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,ii.apply(void 0,yn([r],o,!1)))};return r.attrs=function(r){return ai(e,t,gn(gn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return ai(e,t,gn(gn({},n),r))},r}var li=function(e){return ai(ni,e)},si=li;Tr.forEach((function(e){si[e]=li(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Yo(e),Io.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(uo($o(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Io.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Oo(),r=uo([n&&'nonce="'.concat(n,'"'),"".concat(wr,'="true"'),"".concat(Sr,'="').concat(jr,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw mo(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw mo(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[wr]="",t[Sr]=jr,t.dangerouslySetInnerHTML={__html:n},t),i=Oo();return i&&(r.nonce=i),[o.createElement("style",gn({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Io({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw mo(2);return o.createElement(qo,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw mo(3)}})(),"__sc-".concat(wr,"__");const ci=si.img`
width: 180px;
`,ui=()=>{const[e,t]=(0,o.useState)("home"),[n,r]=(0,o.useState)(!1);(0,o.useEffect)((()=>{const e=()=>{window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const i=e=>{t(e)};return(0,g.jsx)(Dt,{expand:"md",className:n?"scrolled":"",children:(0,g.jsxs)(Bt,{children:[(0,g.jsx)(Dt.Brand,{href:"/",children:(0,g.jsx)(ci,{src:mn,alt:"Logo"})}),(0,g.jsx)(Dt.Toggle,{"aria-controls":"basic-navbar-nav",children:(0,g.jsx)("span",{className:"navbar-toggler-icon"})}),(0,g.jsxs)(Dt.Collapse,{id:"basic-navbar-nav",className:"mobile",children:[(0,g.jsxs)(hn,{className:"ms-auto",children:[(0,g.jsx)(hn.Link,{href:"/Product.html",className:"Product"===e?"active navbar-link":"navbar-link",onClick:()=>i("Product"),children:"Products"}),(0,g.jsx)(hn.Link,{href:"/aboutUs.html",className:"about"===e?"active navbar-link":"navbar-link",onClick:()=>i("about"),children:"About Us"}),(0,g.jsx)(hn.Link,{href:"/contactUs.html",className:"projects"===e?"active navbar-link":"navbar-link",onClick:()=>i("projects"),children:"Contact Us"})]}),(0,g.jsx)("span",{className:"navbar-text",children:(0,g.jsx)("button",{onClick:()=>{window.location.href="https://www.atomwalk.com/login/"},className:"vvd",children:(0,g.jsx)("span",{children:"Login"})})})]})]})})};n.p;var di=n(6930);const pi=n.p+"static/media/Manufacturing-Business-Development-Tips-1024x576.074a46b916689a522875.jpg",fi=n.p+"static/media/labmangement.ff0cade8676acbeeba14.jpg",hi=n.p+"static/media/chemical.eb8ede543e55d00b0160.png",mi=n.p+"static/media/consaltant.918ca418601df0f447f2.jpg",gi=si.div`
  padding: 20px;
  background-color: rgb(255 246 247);
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 50px;
  }
`,yi=si.div`
  margin-bottom: 40px;
`,xi=si.h1`
margin-top: 40px;
  font-size: 35px;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,vi=si.div`
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
`,bi=si.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 300px;
    margin-right: 30px;
    margin-bottom: 0;
  }
`,wi=si.div`
  flex: 1;
`,ki=si.h2`
  font-size: 24px;
  color: #34495e;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`,Si=si.p`
  font-size: 16px;
  color: #7f8c8d;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,ji=()=>{const e=()=>{window.location.href="/product.html"};return(0,g.jsxs)(gi,{children:[(0,g.jsx)(xi,{children:"Streamlining Business Operations"}),(0,g.jsx)(yi,{children:(0,g.jsxs)(vi,{onClick:e,style:{backgroundColor:"#F6EAFF"},children:[(0,g.jsx)(bi,{src:pi,alt:"Manufacturing Small Business"}),(0,g.jsxs)(wi,{children:[(0,g.jsx)(ki,{children:"Discrete Manufacturing"}),(0,g.jsx)(Si,{children:"In the manufacturing sector, optimizing production lines, managing supply chains, and maintaining equipment are vital. Implementing systems for real-time monitoring and predictive maintenance can improve productivity and reduce downtime."})]})]})}),(0,g.jsx)(yi,{children:(0,g.jsxs)(vi,{onClick:e,style:{backgroundColor:"#EDF5FF"},children:[(0,g.jsx)(bi,{src:hi,alt:"Chemical Industry"}),(0,g.jsxs)(wi,{children:[(0,g.jsx)(ki,{children:"Process Manufacturing"}),(0,g.jsx)(Si,{children:"Production process (Recipe Management), Planning, Project/ Work order management, Operational efficiency, Inventory (Batch expiry tracking)/ Warehouse management, CRM, Accounting and Finan- cial management, Supplier and Purchase Order management."})]})]})}),(0,g.jsx)(yi,{children:(0,g.jsxs)(vi,{onClick:e,style:{backgroundColor:"#FFEADF"},children:[(0,g.jsx)(bi,{src:mi,alt:"Consultancy Business"}),(0,g.jsxs)(wi,{children:[(0,g.jsx)(ki,{children:"Consultancy, Services, Trading & NGOs"}),(0,g.jsx)(Si,{children:"Effective project management ensures timely completion of tasks, optimizing resources and teamwork. Operational efficiency focuses on streamlining processes for maximum productivity. Integrated systems for CRM, accounting, financial management, and supplier/purchase order management enhance decision-making, track finances, and ensure smooth supplier relations."})]})]})}),(0,g.jsx)(yi,{children:(0,g.jsxs)(vi,{onClick:()=>{window.location.href="/lms.html"},style:{backgroundColor:"#E1FFF6"},children:[(0,g.jsx)(bi,{src:fi,alt:"Lab Management System"}),(0,g.jsxs)(wi,{children:[(0,g.jsx)(ki,{children:"Lab Management"}),(0,g.jsx)(Si,{children:"Research and Development (R & D) Labs in companies/ Universities - Grant management, Operational efficiency chemical consumption, Lab equipment management, Supplier and Purchase order management, Lab report/ documentation."})]})]})})]})},Ci=o.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:o="div",...i}=e;const a=k(n,"row"),l=S(),c=j(),u=`${a}-cols`,d=[];return l.forEach((e=>{const t=i[e];let n;delete i[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const r=e!==c?`-${e}`:"";null!=n&&d.push(`${u}${r}-${n}`)})),(0,g.jsx)(o,{ref:t,...i,className:s()(r,a,...d)})}));Ci.displayName="Row";const Ei=Ci;const Oi=o.forwardRef(((e,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:i,spans:a}]=function(e){let{as:t,bsPrefix:n,className:r,...o}=e;n=k(n,"col");const i=S(),a=j(),l=[],c=[];return i.forEach((e=>{const t=o[e];let r,i,s;delete o[e],"object"===typeof t&&null!=t?({span:r,offset:i,order:s}=t):r=t;const u=e!==a?`-${e}`:"";r&&l.push(!0===r?`${n}${u}`:`${n}${u}-${r}`),null!=s&&c.push(`order${u}-${s}`),null!=i&&c.push(`offset${u}-${i}`)})),[{...o,className:s()(r,...l,...c)},{as:t,bsPrefix:n,spans:l}]}(e);return(0,g.jsx)(o,{...r,ref:t,className:s()(n,!a.length&&i)})}));Oi.displayName="Col";const Ri=Oi,Pi=n.p+"static/media/Default_A_bustling_industrial_scene_depicting_modern_manufactu_1.ed533c9382af58022d54.jpg",Ai=n.p+"static/media/Management.6fb154b54ae761338aa3.jpg",Ti=n.p+"static/media/Hrandpayroll.9310263d77fde3406330.jpg",zi=n.p+"static/media/Designer.d544d66eb8011e427ca3.png",Mi=n.p+"static/media/Accountandf.84a96a15feb6344a4f22.png",Ii=n.p+"static/media/projectmangement.49b30c1477fc99ca756d.png",Li=(si.div`
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
`,si.div`
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
`,si.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`),Ni=si.div`
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
`,Fi=(si.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,si.img`
  width: 70%;
  height: auto;
  margin-bottom: 20px;
`),Di=si.h3`
  font-size: 1.5em;
  color: #333;
`,_i=si.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 20px;
  width: 80%;
`,Bi=si.a`
  font-size: 1em;
  color: #ea5c49; /* Purple color */
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: #ee442d;
  }
`,Hi=e=>{var t,n,r;const o=e=>{window.location.href="HR & Payroll"==e?"/hrm.html":"Customer Management"==e?"/crm.html":"/product.html"};return(0,g.jsx)(Ri,{style:{margin:"-2px"},size:5,sm:6,md:4,children:(0,g.jsx)(Li,{onClick:()=>{var t;return o(null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.title)},children:(0,g.jsxs)(Ni,{color:null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.background,children:[(0,g.jsx)(Fi,{src:e.image,alt:"greytHR Academy"}),(0,g.jsx)(Di,{children:null===e||void 0===e||null===(n=e.project)||void 0===n?void 0:n.title}),(0,g.jsx)(_i,{children:null===e||void 0===e||null===(r=e.project)||void 0===r?void 0:r.description}),(0,g.jsx)(Bi,{onClick:()=>{var t;return o(null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.title)},children:"Know More"})]})})})},Wi=(si.div`
  width: 100%;
  height: 100vh;
`,()=>{const e=[{title:"Manufacturing Operations",description:"Efficiently manage your manufacturing operations with Atomwalk Office",imgUrl:Pi,background:"#fff8e6"},{title:"Inventory Management",description:"Take control of your inventory with Atomwalk Office",imgUrl:Ai,background:"#EEFAF4"},{title:"HR & Payroll",description:"Effortlessly handle HR and payroll tasks with Atomwalk Office",imgUrl:Ti,background:"#e6ffff"},{title:"Customer Management",description:"Deliver exceptional customer service and boost sales with Atomwalk Office",imgUrl:zi,background:"#EEFAF4"},{title:"Accounting & Financials",description:"Manage your accounting and financials seamlessly with Atomwalk Office",imgUrl:Mi,background:"#e6ffff"},{title:"Project Management",description:"Make informed decisions based on real-time information and analytics provided by Atomwalk Office",imgUrl:Ii,background:"#fff8e6"}];return(0,g.jsx)("section",{className:"project",id:"projects",children:(0,g.jsxs)(Bt,{children:[(0,g.jsx)("h2",{children:"Comprehensive Business Management Solution"}),(0,g.jsx)("p",{children:"Streamline your business with Atomwalk Office's key features: Manufacturing Operations Management for optimized production and quality control, Purchasing & Inventory Management for precise supply chain oversight, Sales & Customer Service tools to boost sales and enhance customer relationships, Warehousing Solutions for efficient inventory tracking and automation, Accounting & Financials for thorough financial oversight, and a Complete HR Suite Including Payroll for seamless workforce management."}),(0,g.jsx)(Ei,{children:(0,g.jsx)(Ri,{size:12,children:(0,g.jsx)(Ei,{children:e.map(((e,t)=>(0,g.jsx)(Hi,{project:e,image:e.imgUrl},t)))})})})]})})});const Ui=n.p+"static/media/contact-img.87eac2b29352fa01abb2f9510ef6ac7e.svg";var qi=n(9834),Vi=n.n(qi),Gi=n(8178),Ki=n.n(Gi);const Ji=function(e){var t=e.status,n=e.message,r=e.className,i=e.style,a=e.onSubmitted,l=void 0;return o.createElement("div",{className:r,style:i},"sending"===t&&o.createElement("div",{style:{color:"blue"}},"sending..."),"error"===t&&o.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:n}}),"success"===t&&o.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:n}}),o.createElement("input",{ref:function(e){return l=e},type:"email",placeholder:"Your email"}),o.createElement("button",{onClick:function(){return l&&l.value.indexOf("@")>-1&&a({EMAIL:l.value})}},"Submit"))};function Qi(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var $i=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=Qi(this,e.call.apply(e,[this].concat(i))),r.state={status:null,message:null},r.subscribe=function(e){var t=Ki()(e),n=function(e){return e.replace("/post?","/post-json?")}(r.props.url)+"&"+t;r.setState({status:"sending",message:null},(function(){return Vi()(n,{param:"c"},(function(e,t){e?r.setState({status:"error",message:e}):"success"!==t.result?r.setState({status:"error",message:t.msg}):r.setState({status:"success",message:t.msg})}))}))},Qi(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return this.props.render({subscribe:this.subscribe,status:this.state.status,message:this.state.message})},t}(o.Component);$i.propTypes={},$i.defaultProps={render:function(e){var t=e.subscribe,n=e.status,r=e.message;return o.createElement(Ji,{status:n,message:r,onSubmitted:function(e){return t(e)}})}};function Yi(e,t){return function(){return e.apply(t,arguments)}}const{toString:Zi}=Object.prototype,{getPrototypeOf:Xi}=Object,ea=(ta=Object.create(null),e=>{const t=Zi.call(e);return ta[t]||(ta[t]=t.slice(8,-1).toLowerCase())});var ta;const na=e=>(e=e.toLowerCase(),t=>ea(t)===e),ra=e=>t=>typeof t===e,{isArray:oa}=Array,ia=ra("undefined");const aa=na("ArrayBuffer");const la=ra("string"),sa=ra("function"),ca=ra("number"),ua=e=>null!==e&&"object"===typeof e,da=e=>{if("object"!==ea(e))return!1;const t=Xi(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},pa=na("Date"),fa=na("File"),ha=na("Blob"),ma=na("FileList"),ga=na("URLSearchParams"),[ya,xa,va,ba]=["ReadableStream","Request","Response","Headers"].map(na);function wa(e,t){let n,r,{allOwnKeys:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),oa(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=o?Object.getOwnPropertyNames(e):Object.keys(e),i=r.length;let a;for(n=0;n<i;n++)a=r[n],t.call(null,e[a],a,e)}}function ka(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const Sa="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,ja=e=>!ia(e)&&e!==Sa;const Ca=(Ea="undefined"!==typeof Uint8Array&&Xi(Uint8Array),e=>Ea&&e instanceof Ea);var Ea;const Oa=na("HTMLFormElement"),Ra=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),Pa=na("RegExp"),Aa=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};wa(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},Ta="abcdefghijklmnopqrstuvwxyz",za="0123456789",Ma={DIGIT:za,ALPHA:Ta,ALPHA_DIGIT:Ta+Ta.toUpperCase()+za};const Ia=na("AsyncFunction"),La=(Na="function"===typeof setImmediate,Fa=sa(Sa.postMessage),Na?setImmediate:Fa?((e,t)=>(Sa.addEventListener("message",(n=>{let{source:r,data:o}=n;r===Sa&&o===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),Sa.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var Na,Fa;const Da="undefined"!==typeof queueMicrotask?queueMicrotask.bind(Sa):"undefined"!==typeof process&&process.nextTick||La,_a={isArray:oa,isArrayBuffer:aa,isBuffer:function(e){return null!==e&&!ia(e)&&null!==e.constructor&&!ia(e.constructor)&&sa(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||sa(e.append)&&("formdata"===(t=ea(e))||"object"===t&&sa(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&aa(e.buffer),t},isString:la,isNumber:ca,isBoolean:e=>!0===e||!1===e,isObject:ua,isPlainObject:da,isReadableStream:ya,isRequest:xa,isResponse:va,isHeaders:ba,isUndefined:ia,isDate:pa,isFile:fa,isBlob:ha,isRegExp:Pa,isFunction:sa,isStream:e=>ua(e)&&sa(e.pipe),isURLSearchParams:ga,isTypedArray:Ca,isFileList:ma,forEach:wa,merge:function e(){const{caseless:t}=ja(this)&&this||{},n={},r=(r,o)=>{const i=t&&ka(n,o)||o;da(n[i])&&da(r)?n[i]=e(n[i],r):da(r)?n[i]=e({},r):oa(r)?n[i]=r.slice():n[i]=r};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&wa(arguments[o],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return wa(t,((t,r)=>{n&&sa(t)?e[r]=Yi(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const l={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||l[a]||(t[a]=e[a],l[a]=!0);e=!1!==n&&Xi(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:ea,kindOfTest:na,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(oa(e))return e;let t=e.length;if(!ca(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Oa,hasOwnProperty:Ra,hasOwnProp:Ra,reduceDescriptors:Aa,freezeMethods:e=>{Aa(e,((t,n)=>{if(sa(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];sa(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return oa(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:ka,global:Sa,isContextDefined:ja,ALPHABET:Ma,generateString:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ma.ALPHA_DIGIT,n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&sa(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(ua(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=oa(e)?[]:{};return wa(e,((e,t)=>{const i=n(e,r+1);!ia(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:Ia,isThenable:e=>e&&(ua(e)||sa(e))&&sa(e.then)&&sa(e.catch),setImmediate:La,asap:Da};function Ba(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}_a.inherits(Ba,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_a.toJSONObject(this.config),code:this.code,status:this.status}}});const Ha=Ba.prototype,Wa={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Wa[e]={value:e}})),Object.defineProperties(Ba,Wa),Object.defineProperty(Ha,"isAxiosError",{value:!0}),Ba.from=(e,t,n,r,o,i)=>{const a=Object.create(Ha);return _a.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Ba.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const Ua=Ba;function qa(e){return _a.isPlainObject(e)||_a.isArray(e)}function Va(e){return _a.endsWith(e,"[]")?e.slice(0,-2):e}function Ga(e,t,n){return e?e.concat(t).map((function(e,t){return e=Va(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Ka=_a.toFlatObject(_a,{},null,(function(e){return/^is[A-Z]/.test(e)}));const Ja=function(e,t,n){if(!_a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=_a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!_a.isUndefined(t[e])}))).metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,l=(n.Blob||"undefined"!==typeof Blob&&Blob)&&_a.isSpecCompliantForm(t);if(!_a.isFunction(o))throw new TypeError("visitor must be a function");function s(e){if(null===e)return"";if(_a.isDate(e))return e.toISOString();if(!l&&_a.isBlob(e))throw new Ua("Blob is not supported. Use a Buffer instead.");return _a.isArrayBuffer(e)||_a.isTypedArray(e)?l&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,o){let l=e;if(e&&!o&&"object"===typeof e)if(_a.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(_a.isArray(e)&&function(e){return _a.isArray(e)&&!e.some(qa)}(e)||(_a.isFileList(e)||_a.endsWith(n,"[]"))&&(l=_a.toArray(e)))return n=Va(n),l.forEach((function(e,r){!_a.isUndefined(e)&&null!==e&&t.append(!0===a?Ga([n],r,i):null===a?n:n+"[]",s(e))})),!1;return!!qa(e)||(t.append(Ga(o,n,i),s(e)),!1)}const u=[],d=Object.assign(Ka,{defaultVisitor:c,convertValue:s,isVisitable:qa});if(!_a.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!_a.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),_a.forEach(n,(function(n,i){!0===(!(_a.isUndefined(n)||null===n)&&o.call(t,n,_a.isString(i)?i.trim():i,r,d))&&e(n,r?r.concat(i):[i])})),u.pop()}}(e),t};function Qa(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function $a(e,t){this._pairs=[],e&&Ja(e,this,t)}const Ya=$a.prototype;Ya.append=function(e,t){this._pairs.push([e,t])},Ya.toString=function(e){const t=e?function(t){return e.call(this,t,Qa)}:Qa;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const Za=$a;function Xa(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function el(e,t,n){if(!t)return e;const r=n&&n.encode||Xa,o=n&&n.serialize;let i;if(i=o?o(t,n):_a.isURLSearchParams(t)?t.toString():new Za(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const tl=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_a.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},nl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rl={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:Za,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ol="undefined"!==typeof window&&"undefined"!==typeof document,il="object"===typeof navigator&&navigator||void 0,al=ol&&(!il||["ReactNative","NativeScript","NS"].indexOf(il.product)<0),ll="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,sl=ol&&window.location.href||"http://localhost",cl={...e,...rl};const ul=function(e){function t(e,n,r,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),l=o>=e.length;if(i=!i&&_a.isArray(r)?r.length:i,l)return _a.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!a;r[i]&&_a.isObject(r[i])||(r[i]=[]);return t(e,n,r[i],o)&&_a.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!a}if(_a.isFormData(e)&&_a.isFunction(e.entries)){const n={};return _a.forEachEntry(e,((e,r)=>{t(function(e){return _a.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const dl={transitional:nl,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=_a.isObject(e);o&&_a.isHTMLForm(e)&&(e=new FormData(e));if(_a.isFormData(e))return r?JSON.stringify(ul(e)):e;if(_a.isArrayBuffer(e)||_a.isBuffer(e)||_a.isStream(e)||_a.isFile(e)||_a.isBlob(e)||_a.isReadableStream(e))return e;if(_a.isArrayBufferView(e))return e.buffer;if(_a.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Ja(e,new cl.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return cl.isNode&&_a.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=_a.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ja(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(_a.isString(e))try{return(t||JSON.parse)(e),_a.trim(e)}catch(kj){if("SyntaxError"!==kj.name)throw kj}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||dl.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(_a.isResponse(e)||_a.isReadableStream(e))return e;if(e&&_a.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(kj){if(n){if("SyntaxError"===kj.name)throw Ua.from(kj,Ua.ERR_BAD_RESPONSE,this,null,this.response);throw kj}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:cl.classes.FormData,Blob:cl.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_a.forEach(["delete","get","head","post","put","patch"],(e=>{dl.headers[e]={}}));const pl=dl,fl=_a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hl=Symbol("internals");function ml(e){return e&&String(e).trim().toLowerCase()}function gl(e){return!1===e||null==e?e:_a.isArray(e)?e.map(gl):String(e)}function yl(e,t,n,r,o){return _a.isFunction(r)?r.call(this,t,n):(o&&(t=n),_a.isString(t)?_a.isString(r)?-1!==t.indexOf(r):_a.isRegExp(r)?r.test(t):void 0:void 0)}class xl{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ml(t);if(!o)throw new Error("header name must be a non-empty string");const i=_a.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=gl(e))}const i=(e,t)=>_a.forEach(e,((e,n)=>o(e,n,t)));if(_a.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(_a.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&fl[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(_a.isHeaders(e))for(const[a,l]of e.entries())o(l,a,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=ml(e)){const n=_a.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(_a.isFunction(t))return t.call(this,e,n);if(_a.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ml(e)){const n=_a.findKey(this,e);return!(!n||void 0===this[n]||t&&!yl(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ml(e)){const o=_a.findKey(n,e);!o||t&&!yl(0,n[o],o,t)||(delete n[o],r=!0)}}return _a.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!yl(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return _a.forEach(this,((r,o)=>{const i=_a.findKey(n,o);if(i)return t[i]=gl(r),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();a!==o&&delete t[o],t[a]=gl(r),n[a]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return _a.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&_a.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[hl]=this[hl]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ml(e);t[r]||(!function(e,t){const n=_a.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return _a.isArray(e)?e.forEach(r):r(e),this}}xl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),_a.reduceDescriptors(xl.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),_a.freezeMethods(xl);const vl=xl;function bl(e,t){const n=this||pl,r=t||n,o=vl.from(r.headers);let i=r.data;return _a.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function wl(e){return!(!e||!e.__CANCEL__)}function kl(e,t,n){Ua.call(this,null==e?"canceled":e,Ua.ERR_CANCELED,t,n),this.name="CanceledError"}_a.inherits(kl,Ua,{__CANCEL__:!0});const Sl=kl;function jl(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Ua("Request failed with status code "+n.status,[Ua.ERR_BAD_REQUEST,Ua.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const Cl=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(l){const s=Date.now(),c=r[a];o||(o=s),n[i]=l,r[i]=s;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),s-o<t)return;const p=c&&s-c;return p?Math.round(1e3*d/p):void 0}};const El=function(e,t){let n,r,o=0,i=1e3/t;const a=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();o=i,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-o;for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];t>=i?a(s,e):(n=s,r||(r=setTimeout((()=>{r=null,a(n)}),i-t)))},()=>n&&a(n)]},Ol=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const o=Cl(50,250);return El((n=>{const i=n.loaded,a=n.lengthComputable?n.total:void 0,l=i-r,s=o(l);r=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&i<=a?(a-i)/s:void 0,event:n,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),n)},Rl=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Pl=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _a.asap((()=>e(...n)))},Al=cl.hasStandardBrowserEnv?function(){const e=cl.navigator&&/(msie|trident)/i.test(cl.navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=_a.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0},Tl=cl.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];_a.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),_a.isString(r)&&a.push("path="+r),_a.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function zl(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ml=e=>e instanceof vl?{...e}:e;function Il(e,t){t=t||{};const n={};function r(e,t,n){return _a.isPlainObject(e)&&_a.isPlainObject(t)?_a.merge.call({caseless:n},e,t):_a.isPlainObject(t)?_a.merge({},t):_a.isArray(t)?t.slice():t}function o(e,t,n){return _a.isUndefined(t)?_a.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!_a.isUndefined(t))return r(void 0,t)}function a(e,t){return _a.isUndefined(t)?_a.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function l(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const s={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(e,t)=>o(Ml(e),Ml(t),!0)};return _a.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=s[r]||o,a=i(e[r],t[r],r);_a.isUndefined(a)&&i!==l||(n[r]=a)})),n}const Ll=e=>{const t=Il({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:l,auth:s}=t;if(t.headers=l=vl.from(l),t.url=el(zl(t.baseURL,t.url),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):""))),_a.isFormData(r))if(cl.hasStandardBrowserEnv||cl.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(!1!==(n=l.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];l.setContentType([e||"multipart/form-data",...t].join("; "))}if(cl.hasStandardBrowserEnv&&(o&&_a.isFunction(o)&&(o=o(t)),o||!1!==o&&Al(t.url))){const e=i&&a&&Tl.read(a);e&&l.set(i,e)}return t},Nl="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Ll(e);let o=r.data;const i=vl.from(r.headers).normalize();let a,l,s,c,u,{responseType:d,onUploadProgress:p,onDownloadProgress:f}=r;function h(){c&&c(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(a),r.signal&&r.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=vl.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());jl((function(e){t(e),h()}),(function(e){n(e),h()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new Ua("Request aborted",Ua.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new Ua("Network Error",Ua.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||nl;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new Ua(t,o.clarifyTimeoutError?Ua.ETIMEDOUT:Ua.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&_a.forEach(i.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),_a.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),d&&"json"!==d&&(m.responseType=r.responseType),f&&([s,u]=Ol(f,!0),m.addEventListener("progress",s)),p&&m.upload&&([l,c]=Ol(p),m.upload.addEventListener("progress",l),m.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(a=t=>{m&&(n(!t||t.type?new Sl(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(a),r.signal&&(r.signal.aborted?a():r.signal.addEventListener("abort",a)));const y=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);y&&-1===cl.protocols.indexOf(y)?n(new Ua("Unsupported protocol "+y+":",Ua.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Fl=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,a();const t=e instanceof Error?e:this.reason;r.abort(t instanceof Ua?t:new Sl(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new Ua(`timeout ${t} of ms exceeded`,Ua.ETIMEDOUT))}),t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:l}=r;return l.unsubscribe=()=>_a.asap(a),l}},Dl=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},_l=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Bl=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of _l(e))yield*Dl(n,t)}(e,t);let i,a=0,l=e=>{i||(i=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return l(),void e.close();let i=r.byteLength;if(n){let e=a+=i;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw l(t),t}},cancel:e=>(l(e),o.return())},{highWaterMark:2})},Hl="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Wl=Hl&&"function"===typeof ReadableStream,Ul=Hl&&("function"===typeof TextEncoder?(ql=new TextEncoder,e=>ql.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var ql;const Vl=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(kj){return!1}},Gl=Wl&&Vl((()=>{let e=!1;const t=new Request(cl.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Kl=Wl&&Vl((()=>_a.isReadableStream(new Response("").body))),Jl={stream:Kl&&(e=>e.body)};var Ql;Hl&&(Ql=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Jl[e]&&(Jl[e]=_a.isFunction(Ql[e])?t=>t[e]():(t,n)=>{throw new Ua(`Response type '${e}' is not supported`,Ua.ERR_NOT_SUPPORT,n)})})));const $l=async(e,t)=>{const n=_a.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(_a.isBlob(e))return e.size;if(_a.isSpecCompliantForm(e)){const t=new Request(cl.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return _a.isArrayBufferView(e)||_a.isArrayBuffer(e)?e.byteLength:(_a.isURLSearchParams(e)&&(e+=""),_a.isString(e)?(await Ul(e)).byteLength:void 0)})(t):n},Yl=Hl&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:l,onUploadProgress:s,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:p}=Ll(e);c=c?(c+"").toLowerCase():"text";let f,h=Fl([o,i&&i.toAbortSignal()],a);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(s&&Gl&&"get"!==n&&"head"!==n&&0!==(g=await $l(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(_a.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=Rl(g,Ol(Pl(s)));r=Bl(n.body,65536,e,t)}}_a.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;f=new Request(t,{...p,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:o?d:void 0});let i=await fetch(f);const a=Kl&&("stream"===c||"response"===c);if(Kl&&(l||a&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=_a.toFiniteNumber(i.headers.get("content-length")),[n,r]=l&&Rl(t,Ol(Pl(l),!0))||[];i=new Response(Bl(i.body,65536,n,(()=>{r&&r(),m&&m()})),e)}c=c||"text";let y=await Jl[_a.findKey(Jl,c)||"text"](i,e);return!a&&m&&m(),await new Promise(((t,n)=>{jl(t,n,{data:y,headers:vl.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:f})}))}catch(y){if(m&&m(),y&&"TypeError"===y.name&&/fetch/i.test(y.message))throw Object.assign(new Ua("Network Error",Ua.ERR_NETWORK,e,f),{cause:y.cause||y});throw Ua.from(y,y&&y.code,e,f)}}),Zl={http:null,xhr:Nl,fetch:Yl};_a.forEach(Zl,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(kj){}Object.defineProperty(e,"adapterName",{value:t})}}));const Xl=e=>`- ${e}`,es=e=>_a.isFunction(e)||null===e||!1===e,ts=e=>{e=_a.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!es(n)&&(r=Zl[(t=String(n)).toLowerCase()],void 0===r))throw new Ua(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let n=t?e.length>1?"since :\n"+e.map(Xl).join("\n"):" "+Xl(e[0]):"as no adapter specified";throw new Ua("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function ns(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Sl(null,e)}function rs(e){ns(e),e.headers=vl.from(e.headers),e.data=bl.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return ts(e.adapter||pl.adapter)(e).then((function(t){return ns(e),t.data=bl.call(e,e.transformResponse,t),t.headers=vl.from(t.headers),t}),(function(t){return wl(t)||(ns(e),t&&t.response&&(t.response.data=bl.call(e,e.transformResponse,t.response),t.response.headers=vl.from(t.response.headers))),Promise.reject(t)}))}const os="1.7.7",is={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{is[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const as={};is.transitional=function(e,t,n){function r(e,t){return"[Axios v1.7.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new Ua(r(o," has been removed"+(t?" in "+t:"")),Ua.ERR_DEPRECATED);return t&&!as[o]&&(as[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};const ls={assertOptions:function(e,t,n){if("object"!==typeof e)throw new Ua("options must be an object",Ua.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const t=e[i],n=void 0===t||a(t,i,e);if(!0!==n)throw new Ua("option "+i+" must be "+n,Ua.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Ua("Unknown option "+i,Ua.ERR_BAD_OPTION)}},validators:is},ss=ls.validators;class cs{constructor(e){this.defaults=e,this.interceptors={request:new tl,response:new tl}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(kj){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Il(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&ls.assertOptions(n,{silentJSONParsing:ss.transitional(ss.boolean),forcedJSONParsing:ss.transitional(ss.boolean),clarifyTimeoutError:ss.transitional(ss.boolean)},!1),null!=r&&(_a.isFunction(r)?t.paramsSerializer={serialize:r}:ls.assertOptions(r,{encode:ss.function,serialize:ss.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&_a.merge(o.common,o[t.method]);o&&_a.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=vl.concat(i,o);const a=[];let l=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(l=l&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const s=[];let c;this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)}));let u,d=0;if(!l){const e=[rs.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,s),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=a.length;let p=t;for(d=0;d<u;){const e=a[d++],t=a[d++];try{p=e(p)}catch(f){t.call(this,f);break}}try{c=rs.call(this,p)}catch(f){return Promise.reject(f)}for(d=0,u=s.length;d<u;)c=c.then(s[d++],s[d++]);return c}getUri(e){return el(zl((e=Il(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}_a.forEach(["delete","get","head","options"],(function(e){cs.prototype[e]=function(t,n){return this.request(Il(n||{},{method:e,url:t,data:(n||{}).data}))}})),_a.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Il(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}cs.prototype[e]=t(),cs.prototype[e+"Form"]=t(!0)}));const us=cs;class ds{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Sl(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new ds((function(t){e=t})),cancel:e}}}const ps=ds;const fs={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fs).forEach((e=>{let[t,n]=e;fs[n]=t}));const hs=fs;const ms=function e(t){const n=new us(t),r=Yi(us.prototype.request,n);return _a.extend(r,us.prototype,n,{allOwnKeys:!0}),_a.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Il(t,n))},r}(pl);ms.Axios=us,ms.CanceledError=Sl,ms.CancelToken=ps,ms.isCancel=wl,ms.VERSION=os,ms.toFormData=Ja,ms.AxiosError=Ua,ms.Cancel=ms.CanceledError,ms.all=function(e){return Promise.all(e)},ms.spread=function(e){return function(t){return e.apply(null,t)}},ms.isAxiosError=function(e){return _a.isObject(e)&&!0===e.isAxiosError},ms.mergeConfig=Il,ms.AxiosHeaders=vl,ms.formToJSON=e=>ul(_a.isHTMLForm(e)?new FormData(e):e),ms.getAdapter=ts,ms.HttpStatusCode=hs,ms.default=ms;const gs=ms,ys=e=>{let{setShowsuccess:t}=e,n=new Date;const r={name:"",company_name:"",task_name:"",mobile_number:"",email_id:"",add_task:"N",task_type:"Get In Touch",task_date:`${("0"+n.getDate()).slice(-2)}-${("0"+(n.getMonth()+1)).slice(-2)}-${n.getFullYear()}`},[i,a]=(0,o.useState)(r),[l,s]=(0,o.useState)("Send"),[c,u]=(0,o.useState)({});console.log(i,"look at ne");const d=(e,t)=>{a({...i,[e]:t})},p=e=>(e.preventDefault(),s("Sending..."),f("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:i})),f=async(e,n)=>{try{let o=localStorage.getItem("apiResponse"),i=JSON.parse(o);if(!o)throw new Error("Token not found, please login.");const l=gs.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${i.key}`}});200==(await l.post(e,n)).status&&(s("Send"),a(r),t(!0))}catch(o){console.log("Error making authenticated API call:",o),s("Send"),a(r)}};return(0,g.jsx)("section",{className:"contact",id:"connect",children:(0,g.jsx)(Bt,{children:(0,g.jsxs)(Ei,{className:"align-items-center",children:[(0,g.jsx)(Ri,{size:12,md:6,children:(0,g.jsx)(di.A,{children:e=>{let{isVisible:t}=e;return(0,g.jsx)("img",{className:t?"animate__animated animate__zoomIn":"",src:Ui,alt:"Contact Us"})}})}),(0,g.jsx)(Ri,{size:12,md:6,children:(0,g.jsx)(di.A,{children:e=>{let{isVisible:t}=e;return(0,g.jsxs)("div",{className:t?"animate__animated animate__fadeIn":"",children:[(0,g.jsx)("h2",{children:"Get In Touch"}),(0,g.jsx)("form",{onSubmit:p,children:(0,g.jsxs)(Ei,{children:[(0,g.jsx)(Ri,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"text",value:i.name,placeholder:"First Name",onChange:e=>d("name",e.target.value)})}),(0,g.jsx)(Ri,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"text",value:i.company_name,placeholder:"Company Name",onChange:e=>d("company_name",e.target.value)})}),(0,g.jsx)(Ri,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"email",value:i.email_id,placeholder:"Email Address",onChange:e=>d("email_id",e.target.value)})}),(0,g.jsx)(Ri,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"tel",value:i.mobile_number,placeholder:"Phone No.",onChange:e=>d("mobile_number",e.target.value)})}),(0,g.jsxs)(Ri,{size:12,className:"px-1",children:[(0,g.jsx)("textarea",{rows:"6",value:i.task_name,placeholder:"Message",onChange:e=>d("task_name",e.target.value)}),(0,g.jsx)("button",{type:"submit",children:(0,g.jsx)("span",{children:l})})]}),c.message&&(0,g.jsx)(Ri,{children:(0,g.jsx)("p",{className:!1===c.success?"danger":"success",children:c.message})})]})})]})}})})]})})})};var xs=n(2963),vs=n.n(xs);const bs=si.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #caf0f8;
`,ws=si.h1`
  font-size: 3.2em;
  margin-bottom: 100px;
  text-align: center;
  color: #2c3e50;
`,ks=si.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
`,Ss=si.div`
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
`,js=si.div`
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
`,Cs=si.h2`
  font-size: 3em;
  margin: 20px 0;
  font-weight: 800;
  color: #000933;
`,Es=si.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`,Os=si.li`
  margin: 10px 0;
  cursor: ${e=>e.clickable?"pointer":"default"};
  &::before {
    content: "${e=>e.valid?"\u2713":"\u2717"}";
    margin-right: 10px;
    color: ${e=>e.valid?"green":"red"};
  }
`,Rs=si.div`
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
`,Ps=si.p`
  font-weight: 500;
`,As=si.button`
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
`,Ts=si.div`
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
`,zs=si.div`
  font-size: 1.1em;
`,Ms=si.button`
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
`,Is=si.span`
  font-size: 1.5em;
  color: #454545;
  cursor: pointer;
`,Ls=si.ul`
  list-style-type: none;
  margin-top: 10px;
  padding-left: 20px;
  color: #6b37d1;
`,Ns={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px",padding:"40px",overflow:"auto",maxHeight:"80vh"},overlay:{zIndex:"32333"}},Fs=[{name:"Project Management",features:["Project Activity Allocation Tracking"," Project Activity Dependency (Critical Patch)"," Schedule Tracking","Item Cost and Effort Tracking","Efficiency tracking at Activity","Project Documents, Alert management","Integration with Procurement and PO","Integration with Inventory Allocation, Wastage and Release"]},{name:"Inventory Management",features:["Item Category and Group","Inventory Item and Service Item","Item Supplier management","Multiple locations","Multiple Units","Warehouse management (Bin Locations)","Item Serial Number handling","Item physical inspection and open balance","Item min order qty and Expiry date tracking"]},{name:"Process Templates",features:["Activity Definition with User group","Equipment and Document definition for Activity","Process definition for a Product","Process Activity Dependency","Process items and Bill of Material"]},{name:"Sales and Procurement",features:["Sales order, quotation, proforma invoice","Tax Invoice","Payment, GST Tracking, TDS handling","Return, Credit note handling","Purchase Order, Purchase requests","Goods Receipt (GRN)","Goods Return/Shortage/ Debit Note","Purchase Service Order, TDS handling"]},{name:"Customer Management( CRM)",features:["Customer Details","Customer Sales/Payments Tracking (Bank/TDS)","Agreements","Customer Type/ Group"]},{name:"GST & TDS",features:["GST report Support","TDS and TDS reconciliation","GST Reconciliation with A/c"]},{name:"Bank Reconciliation",features:["Bank Statement Upload","Account Reconciliation with Sales and PO","Rule based reconciliation of Expenses","Bank statement View","Reconciled statement view","Bank, Exchange rate setup"]},{name:"Financial Accounting",features:["Sales report (Period/Party/Outstanding)","Purchase Reports","Inventory (opening and closing stock)","Inventory Valuation","Financial Reports (P&L Balance sheet, Cash flow, Change in Equity","Aging/ DSO","Depreciation Schedule"]},{name:"Reports and Dashboard",features:["Manager Dashboard","Sales Dashboard","Account Receivable and Payable","Party wise outstanding","Batch reports like Sales overdue, GST not filed","Report Templates"," User Access control"]}],Ds=()=>{const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(null),i=()=>t(!0),a=()=>t(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(bs,{children:[(0,g.jsx)(ks,{children:"PRICING"}),(0,g.jsx)(ws,{children:"Pick the plan that\u2019s right for you"}),(0,g.jsxs)(Ss,{children:[(0,g.jsxs)(js,{children:[(0,g.jsx)("h3",{style:{color:"red",fontWeight:"800",fontSize:"2.5rem"},children:"Free Trial"}),(0,g.jsx)(Cs,{children:"\u20b90/mo"}),(0,g.jsx)(Ps,{children:"Seriously, free forever"}),(0,g.jsxs)(Es,{children:[(0,g.jsx)(Os,{valid:!0,children:"3 User Access"}),(0,g.jsx)(Os,{valid:!0,children:"30 days Vallidity"}),(0,g.jsx)(Os,{valid:!0,children:"20MB Space"}),(0,g.jsx)(Os,{children:"Multi Location Access"}),(0,g.jsx)(Rs,{onClick:i,children:"Click Hear to see the modules"})]}),(0,g.jsx)(As,{children:"Sign up for free"})]}),(0,g.jsxs)(js,{children:[(0,g.jsx)("h3",{style:{color:"#2196f3",fontWeight:"800",fontSize:"2.5rem"},children:"Basic"}),(0,g.jsx)(Cs,{children:"\u20b94,200/mo"}),(0,g.jsx)(Ps,{children:"Billed at \u20b950,000 per year"}),(0,g.jsxs)(Es,{children:[(0,g.jsx)(Os,{valid:!0,children:"30 User Access"}),(0,g.jsx)(Os,{valid:!0,children:"1 Year Validity"}),(0,g.jsx)(Os,{valid:!0,children:"200MB Space"}),(0,g.jsx)(Os,{children:"Multi Location Access"}),(0,g.jsx)(Rs,{onClick:i,children:"Click Hear to see the modules"})]}),(0,g.jsx)(As,{children:"Start a free trial"})]}),(0,g.jsxs)(js,{children:[(0,g.jsx)("h3",{style:{color:"orange",fontWeight:"800",fontSize:"2.5rem"},children:"Premium"}),(0,g.jsx)(Cs,{children:"\u20b98,400/mo"}),(0,g.jsx)(Ps,{children:"Billed at \u20b9100,000 per year"}),(0,g.jsxs)(Es,{children:[(0,g.jsx)(Os,{valid:!0,children:"100 User Access"}),(0,g.jsx)(Os,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(Os,{valid:!0,children:"500MB Space"}),(0,g.jsx)(Os,{valid:!0,children:"Multi Location Access"}),(0,g.jsx)(Rs,{lickable:!0,onClick:i,children:"Click Hear to see the modules"})]}),(0,g.jsx)(As,{children:"Start a free trial"})]}),(0,g.jsxs)(js,{children:[(0,g.jsx)("h3",{style:{color:"#800080",fontWeight:"800",fontSize:"2.5rem"},children:"Ultimate"}),(0,g.jsx)(Cs,{children:"\u20b916,700/mo"}),(0,g.jsx)(Ps,{children:"Billed at \u20b9200,000 per year"}),(0,g.jsxs)(Es,{children:[(0,g.jsx)(Os,{valid:!0,children:"Unlimited User Access"}),(0,g.jsx)(Os,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(Os,{valid:!0,children:"1.2GB Space"}),(0,g.jsx)(Os,{valid:!0,children:"Multi Location Access"}),(0,g.jsx)(Rs,{lickable:!0,onClick:i,children:"Click Hear to see the modules"})]}),(0,g.jsx)(As,{children:"Start a free trial"})]})]})]}),(0,g.jsxs)(vs(),{isOpen:e,onRequestClose:a,style:Ns,children:[(0,g.jsx)(Ms,{onClick:a,children:"\xd7"}),(0,g.jsx)(Es,{children:Fs.map(((e,t)=>(0,g.jsxs)("div",{children:[(0,g.jsxs)(Ts,{onClick:()=>{return t=e.name,void r(n===t?null:t);var t},children:[(0,g.jsx)(zs,{children:e.name}),(0,g.jsx)(Is,{children:n===e.name?"\u2212":"+"})]}),n===e.name&&(0,g.jsx)(Ls,{children:e.features.map(((e,t)=>(0,g.jsx)("ul",{style:{marginBottom:"5px"},children:(0,g.jsx)("li",{children:e},t)})))})]},t)))})]})]})},_s=(si.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #f9f5f0;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,si.div`
  max-width: 500px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,si.h2`
  font-size: 32px;
  color: #ec7042;
  font-weight: 700;
`,si.h3`
  font-size: 28px;
  color: #333;
  font-weight: 600;
`,si.p`
  font-size: 16px;
  color: #555;
  margin: 20px 0;
`,si.button`
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
`,si.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 600px;
`,si.div`
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
`,si.img`
  position: absolute;
  width: 100px;
  height: auto;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${e=>{let{top:t,right:n,bottom:r,left:o}=e;return`\n    top: ${t||"auto"};\n    right: ${n||"auto"};\n    bottom: ${r||"auto"};\n    left: ${o||"auto"};\n  `}}
`,si.p`

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
    
`),Bs=e=>(0,g.jsx)(_s,{dangerouslySetInnerHTML:e.dangerouslySetInnerHTML,onClick:e.onClick,textTransform:e.textTransform,margin:e.margin,lineHeight:e.lineHeight,mobPosition:e.mobPosition,LgFontSize:e.LgFontSize,mobMarginBottom:e.mobMarginBottom,mobRight:e.mobRight,fontWeight:e.fontWeight,mobwidth:e.mobwidth,mobLetterSpacing:e.mobLetterSpacing,mobMarginTop:e.mobMarginTop,moblineHeight:e.moblineHeight,letterSpacing:e.letterSpacing,cursor:e.cursor,textAlign:e.textAlign,marginLeft:e.marginLeft,MobtextAlign:e.MobtextAlign,fontSize:e.fontSize,mobFontSize:e.mobFontSize,mobLineHeight:e.mobLineHeight,width:e.width,color:e.color,hoverColor:e.hoverColor,padding:e.padding,textDecoration:e.textDecoration,marginTop:e.marginTop,children:e.text});n.p,si.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  height: 185px;

  @media screen and (max-width: 767px){
    height: 77%;
  }
`,si.div`
  background: #f0dbff;
  padding: 20px 55px;
  padding-bottom: 45px;
  height: 332px;

  @media screen and (max-width: 767px){
    height: 390px;
    padding-bottom: 35px;
  }
`,si.img`
  width: 18px;
`,si.p`
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
`,si.div`
  background-color: #ffc8ae;
  padding: 25px 55px;

  @media screen and (max-width: 767px){
    height: 125px;
  }  
`,si.div`
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-position: center;
  background-size: contain;
  background-image: url(${e=>e.CLogo});
`,si.p`
  margin: 0;
  color: #fff;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`,si.p`
  margin: 0;
  color: #fff;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`,si.div`
  display: flex;
  align-items: center;
  gap: 25px;
`,si.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`,si.div`
  background-color: #fff3e1;
  border: 1px solid #d8d8d8;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
`;si.div`
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
`,si.div`
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
`,si.img`
  /* filter: grayscale(1); */
  height: 65px;
  opacity: 0.7;
`,si.div`
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
`;const Hs=n.p+"static/media/FevIimg.ec5aa0150e808b2eaa91.png";const Ws=n.p+"static/media/localPageHero.4092dfc607fc3eed3eec085f09348f6e.svg";const Us=n.p+"static/media/HrApp.f8b908a11c10534323325eaa7e6f02ff.svg";const qs=n.p+"static/media/EcommApp.d08f64640f1afc6971e657ce5be557c7.svg",Vs=n.p+"static/media/crm.444d6bc6234675a47df4.png",Gs=n.p+"static/media/search-job.de6dd9ba062c0e230527.png",Ks=n.p+"static/media/online-shop.539a9bcf79880317f810.png",Js=si.div`
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
`,Qs=si.div`
  max-width: 50%;
  margin-top: 100px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 150px;
  }
`,$s=si.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Ys=si.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Zs=si.button`
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
`,Xs=si.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ec=si.div`
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
`,tc=si.img`
  width: 70px;
  margin-bottom: 10px;
`,nc=si.p`
  font-size: 1rem;
  color: #333;
`,rc=si.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`,oc=si.img`
  width: 600px;
  height: auto;
  border-radius: 10%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`,ic=()=>{const[e,t]=(0,o.useState)("linear-gradient(180deg, #fceabb, rgb(255 246 247))"),[n,r]=(0,o.useState)(Hs),i=(e,n)=>{t(e),r(n)},a=()=>{t("linear-gradient(180deg, #fceabb, rgb(255 246 247))"),r(Hs)};return(0,g.jsxs)(Js,{background:e,children:[(0,g.jsxs)(Qs,{children:[(0,g.jsx)($s,{children:"To Automate the Most Complex Operations"}),(0,g.jsx)(Ys,{children:"Experience the efficiency and clarity that comes with a fully integrated business management solution. With Atomwalk Office, transform your data into actionable insights and drive your business forward with confidence."}),(0,g.jsx)(Zs,{onClick:()=>{window.location.href="https://www.atomwalk.com/login/"},children:"Get started"}),(0,g.jsxs)(Xs,{children:[(0,g.jsxs)(ec,{background:e,onMouseEnter:()=>i("linear-gradient(180deg, #4382f8, rgb(255 246 247))",Ws),onMouseLeave:a,onClick:()=>{window.location.href="/crm.html"},children:[(0,g.jsx)(tc,{src:Vs,alt:"CRM"}),(0,g.jsx)(nc,{children:"Comprehensive CRM platform for customer-facing teams."})]}),(0,g.jsxs)(ec,{background:e,onMouseEnter:()=>i("linear-gradient(180deg, #a970ff, rgb(255 246 247))",Us),onMouseLeave:a,onClick:()=>{window.location.href="/hrm.html"},children:[(0,g.jsx)(tc,{src:Gs,alt:"HR"}),(0,g.jsx)(nc,{children:"HR management software streamlining payroll, attendance, leave, claims."})]}),(0,g.jsxs)(ec,{background:e,onMouseEnter:()=>i("linear-gradient(180deg, #90ee90, rgb(255 246 247))",qs),onMouseLeave:a,children:[(0,g.jsx)(tc,{src:Ks,alt:"E-Commerce"}),(0,g.jsx)(nc,{children:"Your one-stop shop for easy, fast, and secure online shopping."})]})]})]}),(0,g.jsx)(rc,{children:(0,g.jsx)(oc,{src:n,alt:"Profile"})})]})},ac=n.p+"static/media/Cloud.773250297b7d95b40fbc.webp",lc=n.p+"static/media/Subcloud.d66e6c8b1d355e09b54f.webp",sc=si.div`
  background-color: rgb(234 244 255);
  padding: 20px;

  @media (min-width: 768px) {
    padding: 50px;
  }
`,cc=si.div`
  text-align: center;
  margin-bottom: 40px;
`,uc=si.h1`
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,dc=si.p`
  font-size: 18px;
  color: #7f8c8d;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`,pc=si.a`
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
`,fc=si.div`
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
`,hc=si.div`
  flex: 1;
  max-width: 500px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 50px;
  }
`,mc=si.img`
  width: 100%;
  border-radius: 10px;
`,gc=si.div`
  flex: 1;
`,yc=si.h2`
  font-size: 24px;
  color: #34495e;
  /* font-family: 'Courier New', Courier, monospace; */
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`,xc=si.p`
  font-size: 16px;
  color: #7f8c8d;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,vc=si.img`
  display: none; /* Hide the image on mobile screens */

  @media (min-width: 768px) {
    display: block; /* Show the image on larger screens */
    width: 15%;
    float: right;
    margin-top: -177px;
  }
`,bc=()=>(0,g.jsxs)(sc,{children:[(0,g.jsxs)(cc,{children:[(0,g.jsx)(uc,{children:"Unlock the Future"}),(0,g.jsx)(dc,{children:"Revolutionize your business operations with Atomwalk Office's cutting-edge ERP solution"}),(0,g.jsx)(pc,{href:"https://www.atomwalk.com/login/",children:"Transform Your Business Today"})]}),(0,g.jsxs)(fc,{children:[(0,g.jsx)(hc,{children:(0,g.jsx)(mc,{src:ac,alt:"Business Operations"})}),(0,g.jsxs)(gc,{children:[(0,g.jsx)(yc,{children:"Elevate Your Business to New Heights with Atomwalk Office's Comprehensive ERP"}),(0,g.jsx)(xc,{children:"Discover how Atomwalk Office's cloud-based ERP can streamline your core business functions, boost productivity, and drive sustainable growth for your small or medium enterprise."})]})]}),(0,g.jsx)(vc,{src:lc})]});si.section`
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
`,si.div`
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
`,si.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 15px;
`,si.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`,si.p`
  font-size: 1em;
  margin: 0;
`,si.div`
  margin-top: 10px;
  font-weight: bold;
`,si.div`
  font-size: 0.9em;
  color: #666;
`,si.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    width: 559.66px;
    position: relative;
    left: -84px;
    top: 8px;
    transition: none;
  }
`,si.h2`
  font-size: 1.8em;
  margin-bottom: 10px;
`,si.p`
  font-size: 1em;
  margin-bottom: 20px;
`,si.a`
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
`;var wc=n(2382);const kc=n.p+"static/media/lipika.75242ac9bb129dc39010.jpg",Sc=[{id:1,name:"Dr Santosh Poddar, IISER, Pune",text:"Atomwalk\u2019s ERP software has revolutionized our financial management. The seamless integration and user-friendly interface have significantly improved our operational efficiency.",img:"https://picsum.photos/101/101"},{id:2,name:"Deepak Emanuel, Chief Operating Officer, FluxGen Sustainable Technologies Pvt Ltd",text:"The inventory management features of Atomwalk have been a game-changer for us. We can now track our stock levels in real-time, reducing waste and optimizing our supply chain.",img:"https://picsum.photos/102/102"},{id:3,name:"Mr. Santosh Olety, CEO at Microsys Care: ",text:"He highlights the efficiency and effectiveness of Atomwalk\u2019s software in streamlining their operations.",img:"https://picsum.photos/103/103"}],jc=si.div`
background-color: aliceblue;
  @media (min-width: 768px) {
    padding:0 0 100px;
  }
`,Cc=si.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: aliceblue;
  @media (min-width: 768px) {
    max-width: 1300px;
  }
`,Ec=si.div`
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
`,Oc=si.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`,Rc=si.div`
  flex: 1;
`,Pc=si.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`,Ac=si.p`
  margin: 10px 0 0;
  color: #777;
`,Tc=si(wc.A)`

  .slick-slide {
    padding: 10px;
  }
  .slick-arrow {
    &:before{
        color: #2c3e50;
    }
 
  }
`,zc={dots:!0,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]},Mc=si.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 40px;
`,Ic=(si.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
`,si.p`
font-weight: 900;
    font-size: 45px;
    color: #2c3e50;
`),Lc=si.p`
color: #7f8c8d;
font-size: 18px;
`,Nc=()=>(0,g.jsx)(jc,{children:(0,g.jsxs)(Cc,{children:[(0,g.jsxs)(Mc,{children:[(0,g.jsx)(Ic,{children:"Testimonial"}),(0,g.jsx)(Lc,{children:"What our customers say about Atomwalk"})]}),(0,g.jsx)(Tc,{...zc,children:Sc.map((e=>(0,g.jsx)("div",{children:(0,g.jsxs)(Ec,{children:[(0,g.jsx)(Oc,{src:e.img,alt:e.name}),(0,g.jsxs)(Rc,{children:[(0,g.jsx)(Pc,{children:e.name}),(0,g.jsx)(Ac,{children:e.text})]})]})},e.id)))})]})}),Fc=n.p+"static/media/image.f55fe67f8ba4fa6c4602.png",Dc={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px"},overlay:{backgroundColor:"rgba(0, 0, 0, .8)",zIndex:"32333"}},_c=si.div`
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
`,Bc=si.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
    padding-right: 20px;
  }
`,Hc=si.div`
  display: none;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    width: 40%;
  }
`,Wc=si.h2`
  font-size: 2.1em;
  color:#ea5c49;
  margin-bottom: 10px;
  font-weight: 800;
  line-height: 1.25;
`,Uc=si.p`
  color: #555;
  margin-bottom: 20px;
`,qc=si.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 4px;
`,Vc=si.button`
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
`,Gc=si.button`
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
`,Kc=e=>{let{isOpen:t,onRequestClose:n,setShowsuccess:r}=e,i=new Date;const a={name:"",company_name:"",task_name:"Book My Demo",mobile_number:"",email_id:"",add_task:"N",task_type:"Book My Demo",task_date:`${("0"+i.getDate()).slice(-2)}-${("0"+(i.getMonth()+1)).slice(-2)}-${i.getFullYear()}`,remarks:"Book My Demo"},[l,s]=(0,o.useState)(a),c=(e,t)=>{s({...l,[e]:t})},u=async(e,t)=>{try{let o=localStorage.getItem("apiResponse"),i=JSON.parse(o);if(!o)throw new Error("Token not found, please login.");const l=gs.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${i.key}`}});200==(await l.post(e,t)).status&&(r(!0),localStorage.setItem("datacheck",!0),s(a),n())}catch(o){console.log("Error making authenticated API call:",o),s(a)}};return(0,g.jsx)(vs(),{isOpen:t,onRequestClose:n,style:Dc,ariaHideApp:!1,children:(0,g.jsxs)(_c,{children:[(0,g.jsxs)(Bc,{children:[(0,g.jsx)(Gc,{onClick:n,children:"\xd7"}),(0,g.jsx)(Wc,{children:"Ready to see our product in action?"}),(0,g.jsx)(Uc,{children:"See a demo of our product that's tailored just for you."}),(0,g.jsx)(qc,{onChange:e=>c("name",e.target.value),type:"text",placeholder:"Your Name"}),(0,g.jsx)(qc,{onChange:e=>c("email_id",e.target.value),type:"email",placeholder:"Email"}),(0,g.jsx)(qc,{onChange:e=>c("mobile_number",e.target.value),type:"tel",placeholder:"Phone Number"}),(0,g.jsx)(qc,{onChange:e=>c("company_name",e.target.value),type:"text",placeholder:"Company Name"}),(0,g.jsx)(Vc,{onClick:e=>(e.preventDefault(),u("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:l})),children:"Book My Demo"})]}),(0,g.jsx)(Hc,{children:(0,g.jsx)("img",{src:Fc,alt:"Rocket",style:{width:"100%"}})})]})})},Jc=si.div`
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
`,Qc=si.div``;function $c(e){return(0,g.jsx)("div",{children:(0,g.jsx)(Jc,{children:(0,g.jsx)(Qc,{children:(0,g.jsx)(Bs,{text:e.message,color:"#1F936E",fontSize:"18px",fontWeight:"bold",cursor:"auto",fontSizeMedia:"13px"})})})})}const Yc=()=>{const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),i=localStorage.getItem("datacheck");(0,o.useEffect)((()=>{i||setTimeout((()=>{t(!0)}),2e5)}),[]);return(0,o.useEffect)((()=>{n&&setTimeout((()=>{r(!1)}),3e3)}),[n]),(0,g.jsxs)("div",{children:[n&&(0,g.jsx)($c,{message:"We have successfully recorded your information."}),(0,g.jsx)(ic,{}),(0,g.jsx)(ji,{}),(0,g.jsx)(bc,{}),(0,g.jsx)(Wi,{}),(0,g.jsx)(Nc,{}),(0,g.jsx)(Ds,{}),(0,g.jsx)(ys,{setShowsuccess:r}),(0,g.jsx)(Kc,{isOpen:e,onRequestClose:()=>{t(!1)},setShowsuccess:r})]})};function Zc(){return Zc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zc.apply(this,arguments)}var Xc;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Xc||(Xc={}));const eu="popstate";function tu(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function nu(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(kj){}}}function ru(e,t){return{usr:e.state,key:e.key,idx:t}}function ou(e,t,n,r){return void 0===n&&(n=null),Zc({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?au(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function iu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function au(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function lu(e,t,n,r){void 0===r&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Xc.Pop,s=null,c=u();function u(){return(a.state||{idx:null}).idx}function d(){l=Xc.Pop;let e=u(),t=null==e?null:e-c;c=e,s&&s({action:l,location:f.location,delta:t})}function p(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:iu(e);return n=n.replace(/ $/,"%20"),tu(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==c&&(c=0,a.replaceState(Zc({},a.state,{idx:c}),""));let f={get action(){return l},get location(){return e(o,a)},listen(e){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(eu,d),s=e,()=>{o.removeEventListener(eu,d),s=null}},createHref:e=>t(o,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l=Xc.Push;let r=ou(f.location,e,t);n&&n(r,e),c=u()+1;let d=ru(r,c),p=f.createHref(r);try{a.pushState(d,"",p)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;o.location.assign(p)}i&&s&&s({action:l,location:f.location,delta:1})},replace:function(e,t){l=Xc.Replace;let r=ou(f.location,e,t);n&&n(r,e),c=u();let o=ru(r,c),d=f.createHref(r);a.replaceState(o,"",d),i&&s&&s({action:l,location:f.location,delta:0})},go:e=>a.go(e)};return f}var su;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(su||(su={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function cu(e,t,n){return void 0===n&&(n="/"),uu(e,t,n,!1)}function uu(e,t,n,r){let o=ju(("string"===typeof t?au(t):t).pathname||"/",n);if(null==o)return null;let i=du(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let l=0;null==a&&l<i.length;++l){let e=Su(o);a=wu(i[l],e,r)}return a}function du(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(tu(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let l=Cu([r,a.relativePath]),s=n.concat(a);e.children&&e.children.length>0&&(tu(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),du(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:bu(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of pu(e.path))o(e,t,r);else o(e,t)})),t}function pu(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=pu(r.join("/")),l=[];return l.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&l.push(...a),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const fu=/^:[\w-]+$/,hu=3,mu=2,gu=1,yu=10,xu=-2,vu=e=>"*"===e;function bu(e,t){let n=e.split("/"),r=n.length;return n.some(vu)&&(r+=xu),t&&(r+=mu),n.filter((e=>!vu(e))).reduce(((e,t)=>e+(fu.test(t)?hu:""===t?gu:yu)),r)}function wu(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=ku({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=ku({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:Cu([i,u.pathname]),pathnameBase:Eu(Cu([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=Cu([i,u.pathnameBase]))}return a}function ku(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);nu("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let i=new RegExp(o,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1),s=r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{});return{params:s,pathname:i,pathnameBase:a,pattern:e}}function Su(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return nu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function ju(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}const Cu=e=>e.join("/").replace(/\/\/+/g,"/"),Eu=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");Error;function Ou(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const Ru=["post","put","patch","delete"],Pu=(new Set(Ru),["get",...Ru]);new Set(Pu),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function Au(){return Au=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Au.apply(this,arguments)}const Tu=o.createContext(null);const zu=o.createContext(null);const Mu=o.createContext(null);const Iu=o.createContext(null);const Lu=o.createContext({outlet:null,matches:[],isDataRoute:!1});const Nu=o.createContext(null);function Fu(){return null!=o.useContext(Iu)}function Du(){return Fu()||tu(!1),o.useContext(Iu).location}function _u(e,t,n,r){Fu()||tu(!1);let{navigator:i}=o.useContext(Mu),{matches:a}=o.useContext(Lu),l=a[a.length-1],s=l?l.params:{},c=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let u,d=Du();if(t){var p;let e="string"===typeof t?au(t):t;"/"===c||(null==(p=e.pathname)?void 0:p.startsWith(c))||tu(!1),u=e}else u=d;let f=u.pathname||"/",h=f;if("/"!==c){let e=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=cu(e,{pathname:h});let g=qu(m&&m.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:Cu([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:Cu([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),a,n,r);return t&&g?o.createElement(Iu.Provider,{value:{location:Au({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Xc.Pop}},g):g}function Bu(){let e=function(){var e;let t=o.useContext(Nu),n=Gu(Vu.UseRouteError),r=Ku(Vu.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=Ou(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r};return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),n?o.createElement("pre",{style:i},n):null,null)}const Hu=o.createElement(Bu,null);class Wu extends o.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?o.createElement(Lu.Provider,{value:this.props.routeContext},o.createElement(Nu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Uu(e){let{routeContext:t,match:n,children:r}=e,i=o.useContext(Tu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),o.createElement(Lu.Provider,{value:t},r)}function qu(e,t,n,r){var i;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){var a;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(a=r)&&a.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let l=e,s=null==(i=n)?void 0:i.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||tu(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let o=0;o<l.length;o++){let e=l[o];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=o),e.route.id){let{loaderData:t,errors:r}=n,o=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||o){c=!0,l=u>=0?l.slice(0,u+1):[l[0]];break}}}return l.reduceRight(((e,r,i)=>{let a,d=!1,p=null,f=null;var h;n&&(a=s&&r.route.id?s[r.route.id]:void 0,p=r.route.errorElement||Hu,c&&(u<0&&0===i?(h="route-fallback",!1||Ju[h]||(Ju[h]=!0),d=!0,f=null):u===i&&(d=!0,f=r.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,i+1)),g=()=>{let t;return t=a?p:d?f:r.route.Component?o.createElement(r.route.Component,null):r.route.element?r.route.element:e,o.createElement(Uu,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?o.createElement(Wu,{location:n.location,revalidation:n.revalidation,component:p,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var Vu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vu||{});function Gu(e){let t=o.useContext(zu);return t||tu(!1),t}function Ku(e){let t=function(){let e=o.useContext(Lu);return e||tu(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||tu(!1),n.route.id}const Ju={};i.startTransition;function Qu(e){tu(!1)}function $u(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xc.Pop,navigator:a,static:l=!1,future:s}=e;Fu()&&tu(!1);let c=t.replace(/^\/*/,"/"),u=o.useMemo((()=>({basename:c,navigator:a,static:l,future:Au({v7_relativeSplatPath:!1},s)})),[c,s,a,l]);"string"===typeof r&&(r=au(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:m="default"}=r,g=o.useMemo((()=>{let e=ju(d,c);return null==e?null:{location:{pathname:e,search:p,hash:f,state:h,key:m},navigationType:i}}),[c,d,p,f,h,m,i]);return null==g?null:o.createElement(Mu.Provider,{value:u},o.createElement(Iu.Provider,{children:n,value:g}))}function Yu(e){let{children:t,location:n}=e;return _u(Zu(t),n)}new Promise((()=>{}));o.Component;function Zu(e,t){void 0===t&&(t=[]);let n=[];return o.Children.forEach(e,((e,r)=>{if(!o.isValidElement(e))return;let i=[...t,r];if(e.type===o.Fragment)return void n.push.apply(n,Zu(e.props.children,i));e.type!==Qu&&tu(!1),e.props.index&&e.props.children&&tu(!1);let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Zu(e.props.children,i)),n.push(a)})),n}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(kj){}new Map;const Xu=i.startTransition;N.flushSync,i.useId;function ed(e){let{basename:t,children:n,future:r,window:i}=e,a=o.useRef();null==a.current&&(a.current=function(e){return void 0===e&&(e={}),lu((function(e,t){let{pathname:n,search:r,hash:o}=e.location;return ou("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:iu(t)}),null,e)}({window:i,v5Compat:!0}));let l=a.current,[s,c]=o.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=o.useCallback((e=>{u&&Xu?Xu((()=>c(e))):c(e)}),[c,u]);return o.useLayoutEffect((()=>l.listen(d)),[l,d]),o.createElement($u,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var td,nd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(td||(td={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(nd||(nd={}));const rd=n.p+"static/media/cover-Proses-Manajemen-Inventory-dan-Metode-Penerapannya-01-1-1024x656.71fe8c9581957cf0a241.png",od=n.p+"static/media/header-4-1-2048x1107.672ff3f0045c273d262f.png",id=n.p+"static/media/projecticon.2ce87c438cbe4e6220e1.png",ad=n.p+"static/media/new-b-bg.7dd6f955d98bb72b8f0b.png",ld=si.div`
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

`,sd=si.div`
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
`,cd=si.img`
    width: 490px;
    margin: 0 auto;
    display: flex;

    @media screen and (max-width: 767px) {
        width: 300px;
    }

`;function ud(e){return(0,g.jsx)("div",{children:(0,g.jsxs)("div",{className:"ip-temp-wrap",children:[(0,g.jsx)("div",{children:(0,g.jsx)(cd,{src:e.Temp})}),(0,g.jsx)("div",{children:(0,g.jsx)(ld,{children:e.title})}),(0,g.jsx)("div",{children:(0,g.jsx)(sd,{children:e.desc})})]})})}const dd=si.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    background-image: url(${ad});

`,pd=si.div`
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

`,fd=si.div`
    width: 11px;
    height: 11px;
    border-radius: 50px;
    background-color: #cbcbcb;
    cursor: pointer;
    border: 1px solid #ccc;
`,hd=e=>{switch(e){case 0:return rd;case 1:return od;case 2:return id}},md=e=>{let t={};switch(e){case 0:t={heading:"Inventory Management",description:"Take control of your inventory with Atomwalk Office"};break;case 1:t={heading:"Customer Management",description:"Deliver exceptional customer service and boost sales with Atomwalk Office"};break;case 2:t={heading:"Project Management",description:"Make informed decisions based on real-time information and analytics provided by Atomwalk Office"}}return t},gd=()=>{const[e,t]=(0,o.useState)(0),n=e=>{t(e)};return(0,o.useEffect)((()=>{const t=setInterval((()=>{let t=e+1;t>2&&(t=0),n(t)}),4e3);return()=>clearInterval(t)})),(0,g.jsxs)(dd,{children:[0==e&&(0,g.jsx)(ud,{Temp:hd(0),title:md(0).heading,desc:md(0).description}),1==e&&(0,g.jsx)(ud,{Temp:hd(1),title:md(1).heading,desc:md(1).description}),2==e&&(0,g.jsx)(ud,{Temp:hd(2),title:md(2).heading,desc:md(2).description}),(0,g.jsxs)(pd,{children:[(0,g.jsx)(fd,{onClick:()=>{n(0)},style:0==e?{backgroundColor:"#FF7624"}:{}}),(0,g.jsx)(fd,{onClick:()=>{n(1)},style:1==e?{backgroundColor:"#FF7624"}:{}}),(0,g.jsx)(fd,{onClick:()=>{n(2)},style:2==e?{backgroundColor:"#FF7624"}:{}})]})]})},yd=si.button`
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
`;function xd(e){const t=e.disable;return(0,g.jsx)("div",{children:(0,g.jsx)(yd,{onClick:e.onClick,variant:e.variant,width:e.width,fontWeight:e.fontWeight,fontSize:e.fontSize,height:e.height,Lgheight:e.Lgheight,mbfontSize:e.mbfontSize,mbpadding:e.mbpadding,mbwidth:e.mbwidth,disabled:t,children:e.text})})}const vd=si.div`
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
`,bd=si.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`,wd=si.div`
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

`,kd=si.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 16px;
  color: #454545;
  margin-bottom: 6px;
`,Sd=si.div`
  margin-top: 0px;
`,jd=si.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 24px;
  color: #352960;
  margin-top: 7px;
  text-align: left;

  @media screen and (max-width: 1280px){
    margin-top: 4px;
  }
`,Cd=si.input`
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
`,Ed=si.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;

  @media screen and (max-width: 1280px){
      margin-top: 16px;
    margin-bottom: 5px;
  }
`,Od=(si.button`
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
`,si.a`
  text-decoration: none;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
  color: #2970b1;
  cursor: pointer;
  &:hover {
    color: #15436d;
  }
`),Rd=si.div`
  color: #acacac;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
`,Pd=(si.div`
  font-size: 14px;
  font-family: "Centra";
  line-height: 21px;
  color: #ff4141;
  text-align: left;
  margin-bottom: 12px;
`,()=>(0,g.jsx)("div",{children:(0,g.jsxs)(vd,{children:[(0,g.jsxs)(bd,{children:[(0,g.jsx)(wd,{children:"Login"}),(0,g.jsx)(kd,{children:"to see your research come alive!"}),(0,g.jsxs)(Sd,{children:[(0,g.jsxs)("div",{children:[(0,g.jsxs)(jd,{children:["Email address ",(0,g.jsx)("span",{style:{color:"red"},children:" *"})]}),(0,g.jsx)(Cd,{placeholder:"Enter your email"})]}),(0,g.jsxs)("div",{children:[(0,g.jsxs)(jd,{children:["Password ",(0,g.jsx)("span",{style:{color:"red"},children:" *"})]}),(0,g.jsx)(Cd,{type:"password",placeholder:"Enter your password "})]})]})]}),(0,g.jsx)(Ed,{children:(0,g.jsx)(xd,{text:"Log In",variant:"solidOrange",width:"100px",height:"50px"})}),(0,g.jsxs)("div",{children:[(0,g.jsx)(Od,{href:"/forgotpassword.html",children:"Forgot Password?"}),(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"3px",justifyContent:"center"},children:[(0,g.jsx)(Rd,{children:"Don\u2019t have an account? "}),(0,g.jsx)(Od,{href:"/signup",children:"Sign Up"})]})]})]})})),Ad=si.div`
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
`,Td=()=>(0,g.jsx)("div",{children:(0,g.jsxs)(Ad,{children:[(0,g.jsx)("div",{style:{width:"100%",position:"relative"},children:(0,g.jsx)(gd,{})}),(0,g.jsx)("div",{children:(0,g.jsx)(Pd,{})})]})}),zd=si.div`
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

`,Md=si.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`,Id=si.div`
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

`,Ld=si.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 16px;
  color: #454545;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`,Nd=si.div`
  margin-top: 25px;
`,Fd=si.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 24px;
  color: #352960;
  margin-top: 15px;
  text-align: left;
`,Dd=si.input`
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

`,_d=si.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 25px;
`,Bd=(si.button`
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
`,si.a`
  text-decoration: none;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
  color: #2970b1;
  cursor: pointer;
  &:hover {
    color: #15436d;
  }
`),Hd=si.div`
  color: #acacac;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
`,Wd=(si.div`
  font-size: 14px;
  font-family: "Centra";
  line-height: 21px;
  color: #ff4141;
  text-align: left;
  margin-bottom: 12px;
`,()=>(0,g.jsx)("div",{children:(0,g.jsxs)(zd,{children:[(0,g.jsxs)(Md,{children:[(0,g.jsx)(Id,{children:"Forgot Password?"}),(0,g.jsx)(Ld,{children:"Enter your registered work email to reset password"}),(0,g.jsx)(Nd,{children:(0,g.jsxs)("div",{children:[(0,g.jsxs)(Fd,{children:["Email address ",(0,g.jsx)("span",{style:{color:"red"},children:" *"})," "]}),(0,g.jsx)(Dd,{placeholder:"Enter your registered work email"})]})})]}),(0,g.jsx)(_d,{children:(0,g.jsx)(xd,{text:"Send",variant:"solidOrange",width:"100px",height:"50px"})}),(0,g.jsx)("div",{children:(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"3px",justifyContent:"center"},children:[(0,g.jsx)(Hd,{children:"Don\u2019t have an account? "}),(0,g.jsx)(Bd,{href:"/signup",children:"Sign Up"})]})})]})})),Ud=si.div`
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
`;function qd(){return(0,g.jsx)("div",{children:(0,g.jsxs)(Ud,{children:[(0,g.jsx)("div",{style:{width:"100%",position:"relative"},children:(0,g.jsx)(gd,{})}),(0,g.jsx)("div",{children:(0,g.jsx)(Wd,{})})]})})}const Vd=n.p+"static/media/what-is-ERP.b39cc665c451687aad1b.jpg",Gd=n.p+"static/media/color-sharp.bea361cfef80fefc2d1e.png",Kd=n.p+"static/media/color-sharp2.c87586c6c2f549cb4aa6.png",Jd=(n.p,n.p,n.p+"static/media/Backgroundpeople.d12b809f5bce2d857642.png"),Qd=n.p+"static/media/Product.9dd066cf3ea2e0c5d71c.png",$d=n.p+"static/media/CrmHero.8e1214dc746d880dc597.png",Yd=si.section`
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
`,Zd=si.div`
  max-width: 700px;
`,Xd=si.h2`
  font-size: 3rem;
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-top: 70px;
  }
`,ep=si.p`
  font-size: 1.3rem;
  color: #555;
`,tp=si.div`
  position: relative;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`,np=(si.div`
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
`,si.img`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    max-width: 650px;
  }
`),rp=e=>(0,g.jsxs)(Yd,{background:e.background,children:[(0,g.jsxs)(Zd,{children:[(0,g.jsx)(Xd,{children:e.title}),(0,g.jsx)(ep,{children:e.description})]}),(0,g.jsx)(tp,{children:(0,g.jsx)(np,{src:e.data?Qd:e.crm?$d:e.lead?e.img:Jd,alt:"People talking"})})]}),op=n.p+"static/media/consulting.939890d26733fc8bb7de.png",ip=n.p+"static/media/service.2b0a165b42a11cc4aafa.png",ap=n.p+"static/media/grow.6d717d5c8734947f8b94.png",lp=n.p+"static/media/human-resources.b5fe567a0189b6da868e.png",sp=n.p+"static/media/arrows.1950f85fea2b63e0f617.png",cp=si.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,up=si.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,dp=si.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,pp=si.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,fp=si.div`
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
`,hp=si.div`
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
`,mp=si.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,gp=si.p`
  font-size: 1em;
  color: #666;
`,yp=()=>{const e=e=>{window.location.href=e};return(0,g.jsxs)(cp,{children:[(0,g.jsx)(up,{children:"Why Atomwalk Office ERP?"}),(0,g.jsx)(dp,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,g.jsxs)(pp,{children:[(0,g.jsxs)(fp,{children:[(0,g.jsx)(hp,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:op,alt:"Speed"})}),(0,g.jsx)(mp,{children:"Financial Compliance:"}),(0,g.jsx)(gp,{children:"Automated e-Invoice, GST reconciliation, and real-time financial management."})]}),(0,g.jsxs)(fp,{children:[(0,g.jsx)(hp,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:ip,alt:"Trust"})}),(0,g.jsx)(mp,{children:"Operational Excellence:"}),(0,g.jsx)(gp,{children:"Project and work order management, BOM generation, and process optimization."})]}),(0,g.jsxs)(fp,{style:{cursor:"pointer"},onClick:()=>e("/crm.html"),children:[(0,g.jsx)(hp,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:ap,alt:"Accuracy"})}),(0,g.jsx)(mp,{children:"Business Growth:"}),(0,g.jsx)(gp,{children:"Integrated CRM for lead management, sales performance tracking, and customer communication."})]}),(0,g.jsxs)(fp,{style:{cursor:"pointer"},onClick:()=>e("/hrm.html"),children:[(0,g.jsx)(hp,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:lp,alt:"Reliability"})}),(0,g.jsx)(mp,{children:"HR & Payroll:"}),(0,g.jsx)(gp,{children:"From recruitment to payroll, manage the full employee lifecycle effortlessly."})]}),(0,g.jsxs)(fp,{children:[(0,g.jsx)(hp,{bgColor:"#ffe0f5",children:(0,g.jsx)("img",{src:sp,alt:"Reliability"})}),(0,g.jsx)(mp,{children:"Multi-location Flexibility:"}),(0,g.jsx)(gp,{children:"Handle operations across multiple branches or locations with ease."})]})]})]})},xp=n.p+"static/media/time.a8163f40469abbaa08ca.png",vp=n.p+"static/media/money.b0e5ae4582ee14be342a.png",bp=n.p+"static/media/profits.effdf91aad8318ce8c98.png",wp=n.p+"static/media/login.1fc5649da5ea944b531d.png",kp=si.div`
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
`,Sp=si.h2`
  font-size: 2.5em;
  font-weight: bold;
  color:#333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`,jp=si.h3`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
`,Cp=si.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
@media (max-width: 768px) {
  flex-wrap: wrap;
}
`,Ep=si.div`
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
`,Op=si.img`
  width: 90px;
  height: 90px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`,Rp=si.h4`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`,Pp=si.p`
  font-size: 1em;
  color: #666;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`,Ap=()=>(0,g.jsxs)(kp,{children:[(0,g.jsx)(Sp,{children:"Unite advantages"}),(0,g.jsx)(jp,{children:"Features Tailored to Your Business Needs"}),(0,g.jsxs)(Cp,{children:[(0,g.jsxs)(Ep,{children:[(0,g.jsx)(Op,{src:vp,alt:"Centralized access"}),(0,g.jsx)(Rp,{children:"AI & Blockchain Integration:"}),(0,g.jsx)(Pp,{children:"Leverage advanced technologies for automated data entry, secure transactions, and business innovation."})]}),(0,g.jsxs)(Ep,{children:[(0,g.jsx)(Op,{src:xp,alt:"Vetted providers"}),(0,g.jsx)(Rp,{children:"Real-time Insights:"}),(0,g.jsx)(Pp,{children:"Make informed decisions with real-time data, analytics, and reporting."})]}),(0,g.jsxs)(Ep,{children:[(0,g.jsx)(Op,{src:bp,alt:"Simplified workflows"}),(0,g.jsx)(Rp,{children:"Cost-Effective:"}),(0,g.jsx)(Pp,{children:"Low setup costs with no upfront investment and all updates included at no additional charge."})]}),(0,g.jsxs)(Ep,{children:[(0,g.jsx)(Op,{src:wp,alt:"Simplified workflows"}),(0,g.jsx)(Rp,{children:"User-Friendly Interface"}),(0,g.jsx)(Pp,{children:"Simplified, integrated, and accessible from any device, anywhere."})]})]})]}),Tp=n.p+"static/media/automation.5c71914163b6c86409c0.png",zp=n.p+"static/media/server.96b9766474c3a4c7cb8d.png",Mp=n.p+"static/media/scalability.a651e2f67804756aba51.png",Ip=si.section`
  padding: 100px 20px;
  background-color:rgb(225 255 246);
  text-align: center;
`,Lp=si.div`
  max-width: 1200px;
  margin: 0 auto;
`,Np=si.h2`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Fp=si.p`
  color: #666;
  margin-top: 10px;
  font-size: 1.2em;
`,Dp=si.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 70px;
`,_p=si.div`
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
`,Bp=si.img`
  max-width: 80px;
  margin-bottom: 20px;
`,Hp=si.h3`
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,Wp=si.p`
  color: #666;
`,Up=()=>(0,g.jsx)(Ip,{children:(0,g.jsxs)(Lp,{children:[(0,g.jsx)(Np,{children:"Seamless Integration and Workflow"}),(0,g.jsx)(Fp,{children:"Atomwalk Office ERP connects every aspect of your business into one unified system"}),(0,g.jsxs)(Dp,{children:[(0,g.jsxs)(_p,{style:{backgroundColor:"rgb(181 255 206)"},children:[(0,g.jsx)(Bp,{src:Tp,alt:"Automated Processes"}),(0,g.jsx)(Hp,{children:"Automated Processes"}),(0,g.jsx)(Wp,{children:"From bank reconciliation to payroll processing, automate repetitive tasks."})]}),(0,g.jsxs)(_p,{style:{backgroundColor:"rgb(188 216 255)"},children:[(0,g.jsx)(Bp,{src:zp,alt:"Centralized Data"}),(0,g.jsx)(Hp,{children:"Centralized Data"}),(0,g.jsx)(Wp,{children:"Access and manage all your business data from a single platform."})]}),(0,g.jsxs)(_p,{style:{backgroundColor:"rgb(255 211 168)"},children:[(0,g.jsx)(Bp,{src:Mp,alt:"Scalability"}),(0,g.jsx)(Hp,{children:"Scalability"}),(0,g.jsx)(Wp,{children:"Whether you\u2019re managing one location or multiple, Atomwalk scales with your business."})]})]})]})}),qp=(si.div`
  display: flex;
  align-items: center;
 justify-content: center;
 gap: 50px;
  padding: 50px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`,si.div`
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
`,si.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: absolute;
  top: -35px;
  left: 20px;
  border: 4px solid #ffffff;
`,si.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  right: 20px;
`,si.div`
  margin-top: 30px;
  text-align: left;
  font-size: 1em;
  color: #333333;
`,si.h4`
  margin: 10px 0;
  font-weight: 600;
  color: #000000;
`,si.p`
  color: #666666;
  font-size: 0.9em;
`,si.div`
  color: #f7c324;
  font-size: 1.2em;
  margin-top: 15px;
`,si.h2`
padding: 50px;
  font-size: 2.5rem;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,si.div`
background-color: #cfe2ff;
`,n.p+"static/media/Projectmange.799ea926bfc50e76907a.jpg"),Vp=n.p+"static/media/inventory management.774803593808cfe0f584.jpg",Gp=n.p+"static/media/Process Templates.d39be0c24a2b4032e061.jpg",Kp=n.p+"static/media/Sales and Procurement.954547f65f6d37ca39dd.jpg",Jp=n.p+"static/media/Report And Dashboard.91584e3da800458d2e24.jpg",Qp=n.p+"static/media/gst.0029cfd05e4a07f888bf.webp",$p=n.p+"static/media/Bank Reconciliation.194e572838760b213dd7.jpg",Yp=n.p+"static/media/Finacial Acconting.3a1f51360c2ca455c64c.avif",Zp=si.section`
  padding: 40px 20px;
  text-align: center;
  background-color: #ddf5ff;
`,Xp=si.h2`
  font-size: 2.5em;
  font-weight: 600;
  color: #333;
  margin-bottom: 40px;
  
  span {
    color: #9C27B0; /* Purple color for the highlighted text */
  }
`,ef=si.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`,tf=si.div`
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
`,nf=si.div`
  max-width: 40%;
  text-align: left;

  @media (max-width: 767px) {
    text-align: left;
    max-width: 100%;
  }
`,rf=si.h3`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`,of=si.div`
  color: #666;
  font-size: 1em;
  margin-bottom: 20px;
`,af=si.button`
  background-color: #ea5c49;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
`,lf=si.div`
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
`,sf=si.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #9C27B0;
  border-radius: 50%;
  ${e=>e.top&&`top: ${e.top}; left: ${e.left};`}
  ${e=>e.bottom&&`bottom: ${e.bottom}; right: ${e.right};`}
`,cf=()=>{const e=()=>{window.location.href="/demo.html"};return(0,g.jsxs)(Zp,{children:[(0,g.jsx)(Xp,{children:"Atomwalk Office ERP connects every aspect of your business into one unified system"}),(0,g.jsxs)(ef,{children:[(0,g.jsxs)(tf,{bgColor:"#fce4ec",children:[(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Project Management"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Project Activity Allocation Tracking "}),(0,g.jsx)("li",{children:"Project Activity Dependency (Critical Patch) "}),(0,g.jsx)("li",{children:"Schedule Tracking"}),(0,g.jsx)("li",{children:"Item Cost and Effort Tracking"}),(0,g.jsx)("li",{children:"Efficiency tracking at Activity"}),(0,g.jsx)("li",{children:"Project Documents, Alert management"}),(0,g.jsx)("li",{children:"Integration with Procurement and PO"}),(0,g.jsx)("li",{children:"Integration with Inventory Allocation, Wastage and Release"})]})}),(0,g.jsx)(af,{onClick:e,children:"Request a Demo"})]}),(0,g.jsx)(lf,{children:(0,g.jsx)("img",{src:qp,alt:"Employee engagement"})}),(0,g.jsx)(sf,{top:"10%",left:"80%"}),(0,g.jsx)(sf,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(tf,{bgColor:"#e0f7fa",children:[(0,g.jsx)(lf,{children:(0,g.jsx)("img",{src:Vp,alt:"Performance management"})}),(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Inventory Management"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Item Category and Group "}),(0,g.jsx)("li",{children:"Inventory Item and Service Item "}),(0,g.jsx)("li",{children:"Item Supplier management"}),(0,g.jsx)("li",{children:"Multiple locations"}),(0,g.jsx)("li",{children:"Multiple Units "}),(0,g.jsx)("li",{children:"Warehouse management (Bin Locations)"}),(0,g.jsx)("li",{children:"Item Serial Number handling"}),(0,g.jsx)("li",{children:"Item physical inspection and open balance"}),(0,g.jsx)("li",{children:"Item min order qty and Expiry date tracking"})]})}),(0,g.jsx)(af,{children:"Experience Live Demo"})]}),(0,g.jsx)(sf,{top:"20%",left:"5%"}),(0,g.jsx)(sf,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(tf,{bgColor:"#f6eaff",children:[(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Process Templates"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Activity Definition with User group"}),(0,g.jsx)("li",{children:"Equipment and Document definition for Activity"}),(0,g.jsx)("li",{children:"Process definition for a Product"}),(0,g.jsx)("li",{children:"Process Activity Dependency"}),(0,g.jsx)("li",{children:"Process items and Bill of Material"})]})}),(0,g.jsx)(af,{onClick:e,children:"Request a Demo"})]}),(0,g.jsx)(lf,{children:(0,g.jsx)("img",{src:Gp,alt:"Employee engagement"})}),(0,g.jsx)(sf,{top:"10%",left:"80%"}),(0,g.jsx)(sf,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(tf,{bgColor:"#ffeadf",children:[(0,g.jsx)(lf,{children:(0,g.jsx)("img",{src:Kp,alt:"Performance management"})}),(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Sales and Procurement"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Sales order, quotation, proforma invoice "}),(0,g.jsx)("li",{children:"Tax Invoice "}),(0,g.jsx)("li",{children:"Payment, GST Tracking, TDS handling"}),(0,g.jsx)("li",{children:"Return, Credit note handling"}),(0,g.jsx)("li",{children:"Purchase Order, Purchase requests"}),(0,g.jsx)("li",{children:"Goods Receipt (GRN)"}),(0,g.jsx)("li",{children:"Goods Return/Shortage/ Debit Note"}),(0,g.jsx)("li",{children:"Purchase Service Order, TDS handling"})]})}),(0,g.jsx)(af,{children:"Experience Live Demo"})]}),(0,g.jsx)(sf,{top:"20%",left:"5%"}),(0,g.jsx)(sf,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(tf,{bgColor:"rgb(225, 255, 246)",children:[(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"GST & TDS"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"GST report Support"}),(0,g.jsx)("li",{children:"TDS and TDS reconciliation"}),(0,g.jsx)("li",{children:"GST Reconciliation with A/c"})]})}),(0,g.jsx)(af,{onClick:e,children:"Request a Demo"})]}),(0,g.jsx)(lf,{children:(0,g.jsx)("img",{src:Qp,alt:"Employee engagement"})}),(0,g.jsx)(sf,{top:"10%",left:"80%"}),(0,g.jsx)(sf,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(tf,{bgColor:"#ffeadf",children:[(0,g.jsx)(lf,{children:(0,g.jsx)("img",{src:Yp,alt:"Performance management"})}),(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Finacial Acconting"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Reports (Sales, Purchase and Inventory). "}),(0,g.jsx)("li",{children:"Audit Trail."}),(0,g.jsx)("li",{children:"Statutory Reports (P&LBalance Sheet, Cash Flow, Change in Equity)."}),(0,g.jsx)("li",{children:"Purchase Reports"}),(0,g.jsx)("li",{children:"Depreciation Schedule"})]})}),(0,g.jsx)(af,{children:"Experience Live Demo"})]}),(0,g.jsx)(sf,{top:"20%",left:"5%"}),(0,g.jsx)(sf,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(tf,{bgColor:"#d7faff",children:[(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Bank Reconciliation"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Bank Statement Upload"}),(0,g.jsx)("li",{children:"Account Reconciliation with Sales and PO"}),(0,g.jsx)("li",{children:"Rule based reconciliation of Expenses"}),(0,g.jsx)("li",{children:"Bank statement View"}),(0,g.jsx)("li",{children:"Reconciled statement view"}),(0,g.jsx)("li",{children:"Bank, Exchange rate setup"})]})}),(0,g.jsx)(af,{onClick:e,children:"Request a Demo"})]}),(0,g.jsx)(lf,{children:(0,g.jsx)("img",{src:$p,alt:"Employee engagement"})}),(0,g.jsx)(sf,{top:"10%",left:"80%"}),(0,g.jsx)(sf,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(tf,{bgColor:"#dfdfdf",children:[(0,g.jsx)(lf,{children:(0,g.jsx)("img",{src:Jp,alt:"Performance management"})}),(0,g.jsxs)(nf,{children:[(0,g.jsx)(rf,{children:"Reports and Dashboard"}),(0,g.jsx)(of,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Manager Dashboard"}),(0,g.jsx)("li",{children:"Sales Dashboard"}),(0,g.jsx)("li",{children:"Account Receivable and Payable"}),(0,g.jsx)("li",{children:"Party wise outstanding"}),(0,g.jsx)("li",{children:"Batch reports like Sales overdue, GST not filed"}),(0,g.jsx)("li",{children:"Report Templates"}),(0,g.jsx)("li",{children:"User Access control"})]})}),(0,g.jsx)(af,{children:"Experience Live Demo"})]}),(0,g.jsx)(sf,{top:"20%",left:"5%"}),(0,g.jsx)(sf,{bottom:"10%",right:"70%"})]})]})]})},uf=(si.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${Gd}),url(${Kd});
  background-position: left center, right top;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-position: left top, right top;
    padding: 10px;
  }
`,si.h1`
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
`,si.div`
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
`,si.div`
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
`,si.img`
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
`,si.p`
  color: #666;
  line-height: 1.6;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.95em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`,si.ul`
  margin: 20px 0;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`,si.li`
  color: #666;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`,si.footer`
  margin-top: 40px;
  text-align: center;
  color: #999;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`,si.div`
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
    background-image: url(${Vd});
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
`,si.div`
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
`,si.div`
  padding: 20px;
  background-color: #f4f4f4;
`,si.section`
  background: #fff;
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,si.h1`
  font-size: 2em;
  color: #333;
  text-align: center;
`,si.h2`
  font-size: 1.5em;
  color: #555;
  margin-bottom: 10px;
`,si.p`
  font-size: 1em;
  color: #666;
  line-height: 1.6;
`,si.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`,si.li`
  font-size: 1em;
  color: #444;
  margin: 10px 0;
`,si.div`
  background: #ffebcc;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin: 20px 0;
`,si.button`
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
`,()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(rp,{title:"Empower Your Business with Atomwalk Office ERP",description:" Atomwalk Office is a cloud-based ERP solution, designed to transform the way startups, small, and medium-sized businesses operate. Built on cutting-edge technologies like AI and Blockchain, our platform seamlessly manages core business functions including manufacturing, purchasing, inventory, sales, customer service, accounting, and HR.",background:"#52ebff",data:!0}),(0,g.jsx)(yp,{}),(0,g.jsx)(cf,{}),(0,g.jsx)(Ap,{}),(0,g.jsx)(Up,{})]})),df=n.p+"static/media/contactus.d92ad20f9e7e87520f41.jpg",pf=n.p+"static/media/content.b17e184e51f85d52f7ce.png",ff=n.p+"static/media/support.742caae5101d98ae2c49.png",hf=n.p+"static/media/hand-shake.65bcad809362961ab098.png",mf=n.p+"static/media/acquisition.c97c3452c9063b3e641e.png";vs().setAppElement("#root");const gf={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px"},overlay:{backgroundColor:"rgba(0, 0, 0, .8)",zIndex:"32333"}},yf=si.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  max-width: 500px;
  margin: auto;
`,xf=si.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`,vf=si.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`,bf=si.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`,wf=si.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`,kf=si.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`,Sf=si.button`
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
`,jf=e=>{let{isOpen:t,onRequestClose:n}=e;const[r,i]=(0,o.useState)(!1);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(vs(),{isOpen:t,onRequestClose:n,style:gf,children:(0,g.jsxs)(yf,{children:[(0,g.jsx)(vf,{onClick:n,children:"\xd7"}),(0,g.jsx)(xf,{children:"Contact Support"}),(0,g.jsxs)(bf,{children:[(0,g.jsx)(wf,{type:"text",placeholder:"Enter your name",required:!0}),(0,g.jsx)(wf,{type:"email",placeholder:"Enter your email",required:!0}),(0,g.jsx)(kf,{placeholder:"Describe your issue or question",rows:"4",required:!0}),(0,g.jsx)(Sf,{type:"submit",children:"Submit"})]})]})})})},Cf=si.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 120px 20px;
  background-color:#ddf5ff;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ef=si.div`
  background-color: ${e=>e.bgColor||"#f0f0f0"};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
`,Of=si.div`
  background-color: ${e=>e.bgColor||"#f0f0f0"};
  border-radius: 10px;
  padding: 10px;
  display: inline-flex;
  margin-bottom: 15px;
  width: 10%;
`,Rf=si.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  margin-bottom: 10px;
`,Pf=si.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`,Af=si.button`
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
`,Tf=()=>{const[e,t]=(0,o.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Cf,{children:[(0,g.jsxs)(Ef,{bgColor:"#f6eaff",children:[(0,g.jsx)(Of,{bgColor:"#ffe9c0",children:(0,g.jsx)("img",{src:pf,alt:"Sales"})}),(0,g.jsx)(Rf,{children:"Sales"}),(0,g.jsx)(Pf,{children:"Explore how Atomwalk can benefit your business."}),(0,g.jsx)(Af,{onClick:()=>{window.location.href="/seals.html"},children:"Talk To Us"})]}),(0,g.jsxs)(Ef,{bgColor:"#ffeadf",children:[(0,g.jsx)(Of,{bgColor:"#dff2e1",children:(0,g.jsx)("img",{src:ff,alt:"Support"})}),(0,g.jsx)(Rf,{children:"Support"}),(0,g.jsx)(Pf,{children:"If you are our customer and need help with the Atomwalk application. We are here for you."}),(0,g.jsx)(Af,{onClick:()=>{t(!0)},children:"Get Help"})]}),(0,g.jsxs)(Ef,{bgColor:"#e1fff6",children:[(0,g.jsx)(Of,{bgColor:"#c6f0ff",children:(0,g.jsx)("img",{src:hf,alt:"Partnerships"})}),(0,g.jsx)(Rf,{children:"Partnerships"}),(0,g.jsx)(Pf,{children:"Interested in partnering with us? Let us know."}),(0,g.jsx)(Af,{children:"Get In Touch"})]}),(0,g.jsxs)(Ef,{bgColor:"#edf5ff",children:[(0,g.jsx)(Of,{bgColor:"#f1d0ff",children:(0,g.jsx)("img",{src:mf,alt:"Media"})}),(0,g.jsx)(Rf,{children:"Media"}),(0,g.jsx)(Pf,{children:"Any PR related questions? Always ready to talk."}),(0,g.jsx)(Af,{onClick:()=>{window.location.href="/contactUs.html"},children:"Contact Us"})]})]}),(0,g.jsx)(jf,{isOpen:e,onRequestClose:()=>{t(!1)}})]})},zf=n.p+"static/media/phone-call.e7db31039cbc0dc30592.png",Mf=n.p+"static/media/email2.9082177d266cee25a57b.png",If=n.p+"static/media/location.39261a4c95eecf324099.png",Lf=si.section`
  padding: 100px 20px;
  background-color:rgb(225 255 246);
  text-align: center;
`,Nf=si.div`
  max-width: 1200px;
  margin: 0 auto;
`,Ff=si.h2`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Df=si.p`
  color: #666;
  margin-top: 10px;
`,_f=si.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 70px;
`,Bf=si.div`
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
`,Hf=si.img`
  max-width: 80px;
  margin-bottom: 20px;
`,Wf=si.h3`
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,Uf=si.p`
  color: #666;
`,qf=()=>(0,g.jsx)(Lf,{children:(0,g.jsxs)(Nf,{children:[(0,g.jsx)(Ff,{children:"Reach Our Team"}),(0,g.jsx)(Df,{children:"We love questions and feedback - and we're always happy to help! Here are some ways to contact us."}),(0,g.jsxs)(_f,{children:[(0,g.jsxs)(Bf,{style:{backgroundColor:"rgb(181 255 206)"},children:[(0,g.jsx)(Hf,{src:zf,alt:"Automated Processes"}),(0,g.jsx)(Wf,{children:"Call Us"}),(0,g.jsx)(Uf,{children:"Call us to discover how our products can work best for you."}),(0,g.jsx)(Uf,{children:"Phone: +91-7259555003"})]}),(0,g.jsxs)(Bf,{style:{backgroundColor:"rgb(188 216 255)"},children:[(0,g.jsx)(Hf,{src:Mf,alt:"Centralized Data"}),(0,g.jsx)(Wf,{children:"Mail Us"}),(0,g.jsx)(Uf,{children:"We are waiting to help you and your team - so don't hesitate to reach out!"}),(0,g.jsx)(Uf,{children:"Email: info@atomwalk.com"})]}),(0,g.jsxs)(Bf,{style:{backgroundColor:"rgb(255 211 168)"},children:[(0,g.jsx)(Hf,{src:If,alt:"Scalability"}),(0,g.jsx)(Wf,{children:"Our Main Office"}),(0,g.jsx)(Uf,{children:"Visit our main office, where our team is always ready to welcome you and assist with any inquiries."}),(0,g.jsx)(Uf,{children:"Bengaluru, Marathahalli, 560037"})]})]})]})}),Vf=si.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-image: url(${Gd});
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
`,Gf=si.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;

  @media(min-width: 768px) {
    font-size: 2.5em;
    text-align: left;
  }
`,Kf=si.div`
  flex: 1;
  margin-bottom: 30px;
  text-align: center;

  @media(min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`,Jf=si.div`
  margin: 20px 0;
`,Qf=si.form`
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
`,$f=si.h2`
  margin-bottom: 20px;
  font-size: 1.5em;
  text-align: center;
`,Yf=si.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  /* background-color: #f6eaff; */
  border: 1px solid #333;
  /* border: none; */
  border-radius: 5px;
  color: #333;
  font-size: 1em;
`,Zf=si.textarea`
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
`,Xf=si.button`
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
`,eh=(si.div`
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
`,si.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3em;
  height: 100%;
  z-index: 2; /* Ensure the text is above the background */
  font-weight: 500;
`,si.p`
@media (min-width:768px) {
  width: 440px;
}
`),th=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(rp,{title:"Let's connect",description:"We would love to hear from you. How can we help?",background:"#ffc24b"}),(0,g.jsx)(qf,{}),(0,g.jsx)(Tf,{}),(0,g.jsxs)(Vf,{children:[(0,g.jsxs)(Kf,{children:[(0,g.jsx)(Gf,{children:"Get in Touch with Atomwalk \ud83d\udc4b"}),(0,g.jsx)(eh,{children:"Feel free to connect with us for any of your needs regarding our services. Our support team is ready to solve any of your issues. Just push a text to us and we will get back to you immediately."}),(0,g.jsxs)(Jf,{children:[(0,g.jsx)("p",{children:(0,g.jsx)("strong",{children:"India"})}),(0,g.jsx)("p",{children:"Bengaluru, Marathahalli, 560037"}),(0,g.jsx)("p",{children:"Email: info@atomwalk.com"}),(0,g.jsx)("p",{children:"Phone: +91-7259555003"})]})]}),(0,g.jsxs)(Qf,{children:[(0,g.jsx)($f,{children:"Drop Us a Message"}),(0,g.jsx)(Yf,{type:"text",placeholder:"Name*",required:!0}),(0,g.jsx)(Yf,{type:"text",placeholder:"+91 Phone No*",required:!0}),(0,g.jsx)(Yf,{type:"email",placeholder:"Email*",required:!0}),(0,g.jsx)(Yf,{type:"text",placeholder:"Which Business do you have ?*",required:!0}),(0,g.jsx)(Yf,{type:"text",placeholder:"Location*",required:!0}),(0,g.jsx)(Zf,{placeholder:"Message*",required:!0}),(0,g.jsx)(Xf,{type:"submit",children:"Connect With Atomwalk Today"})]})]})]}),nh=n.p+"static/media/about-us-bg.004c9dbfb932e1e45fde.png",rh=si.div`
    background-image: url(${nh});
    background-position: center;
    background-repeat: no-repeat;
    height: 1850px;
    padding-top: 74px;
    background-size: cover;

    @media screen and (max-width: 767px) {
        height: 1450px;
    }

`,oh=si.div`
    position: absolute;
    top: 8%;
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

`,ih=si.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
`;function ah(){return(0,g.jsx)("div",{children:(0,g.jsx)(rh,{children:(0,g.jsxs)(oh,{children:[(0,g.jsx)(Bs,{text:"About us",color:"#000",fontSize:"48px",fontWeight:"900",letterSpacing:"2.4px",textAlign:"left"}),(0,g.jsx)(Bs,{text:"Empowering Small Businesses: Atomwalk Office is dedicated to empowering small business owners by providing a comprehensive Virtual Desktop Interface (VDI) that enhances operational efficiency and streamlines business processes.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"25px"}),(0,g.jsx)(Bs,{text:"Innovative Financial Solutions: Our platform offers easy financing options and seamless connectivity with banks through blockchain technology, ensuring secure and efficient financial transactions for your business.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,g.jsx)(Bs,{text:"Operational Excellence: With Atomwalk Office, businesses can monitor and track their operational efficiency in real-time, enabling better decision-making and improved productivity.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,g.jsx)(Bs,{text:"Cutting-Edge Technology: We leverage the latest advancements in technology, including cloud services and blockchain, to provide a robust and secure environment for your business operations.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,g.jsx)(ih,{children:(0,g.jsx)(xd,{onClick:()=>{window.location.href={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SERVER_NAME_URL+"/careers.html"},text:"See Open Jobs",variant:"solidOrange",width:"auto",height:"50px"})})]})})})}n.p,si.div`
  background-color: #f5e9fd; // Light purple background
  padding: 40px 20px;
`,si.div`
  text-align: center;
  margin-bottom: 50px;
`,si.h1`
  font-size: 2rem;
  color: #6a1b9a; // Purple color
  margin-bottom: 10px;
`,si.p`
  font-size: 1.25rem;
  color: #333333;
  max-width: 600px;
  margin: 0 auto;
`,si.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,si.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media(min-width: 768px) {
    margin-bottom: 0;
  }
`,si.img`
  max-width: 100%;
  height: auto;
  border-radius: 15px;
`,si.div`
  text-align: left;
  max-width: 500px;
`,si.h2`
  font-size: 1.75rem;
  color: #333333;
  margin-bottom: 20px;
`,si.div`
  margin-bottom: 20px;
`,si.h3`
  font-size: 1.25rem;
  color: #6a1b9a; // Purple color
  margin-bottom: 5px;
`,si.p`
  font-size: 1rem;
  color: #555555;
`,n.p,n.p,n.p,si.div`
  background-color: #fff7e6; // Light cream background
  padding: 100px 20px;
`,si.h2`
  text-align: center;
  font-size: 2rem;
  color: #333333;
  margin-bottom: 100px;
`,si.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,si.div`
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
`,si.div`
  background-color: ${e=>{let{color:t}=e;return t||"#ccc"}};
  border-radius: 8px;
  padding: 10px;
  display: inline-block;
  margin-right: 15px;
  width: 50px;
`,si.p`
  color: #555555;
  font-size: 1rem;
  margin: 0;
`;const lh=n.p+"static/media/linkedin.6892b3ae328c7a1e055f.png";const sh=n.p+"static/media/Sk.1620eca3feffff84fbec571e63f18988.svg";const ch=n.p+"static/media/sk2.7c9fc7c4395d941a8f1bcca5c65f2b7c.svg",uh=si.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,dh=si.div`
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
`,ph=si.div`
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
`,fh=si.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`,hh=si.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`,mh=si.div`
  perspective: 1000px;
  width: 100%;
  max-width: 400px;
  height: 420px;
  margin: 20px;
  position: relative;

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
`,gh=si.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`,yh=si.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,xh=si(yh)`
  background-color: #f8f8f8;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,vh=si.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
  border: 2px solid #ddd;
`,bh=si.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`,wh=si.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #555;
`,kh=si.p`
  font-size: 1rem;
  color: #777;
  line-height: 1.4;
`,Sh=si.a`
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
`,jh=()=>(0,g.jsxs)(uh,{children:[(0,g.jsxs)(dh,{bgColor:"#fff8f0",children:[(0,g.jsx)(fh,{children:"Leadership"}),(0,g.jsxs)(hh,{children:[(0,g.jsx)(mh,{children:(0,g.jsxs)(gh,{className:"flip-card-inner",children:[(0,g.jsxs)(yh,{children:[(0,g.jsx)(vh,{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADIAMgDASIAAhEBAxEB/8QAHQAAAAcBAQEAAAAAAAAAAAAAAAMEBQYHCAIBCf/EAD0QAAECBAQEBAQEBAcAAwEAAAECAwAEBREGEiExBxNBUSJhcYEIFDKRI0KhsRVSwdEJFjNicuHwJENTov/EABsBAAEFAQEAAAAAAAAAAAAAAAUAAQIDBAYH/8QAKhEAAgIBBAEDBAEFAAAAAAAAAAECEQMEEiExQQUTIjJRYXEUIzOBocH/2gAMAwEAAhEDEQA/AMtCfzE3N7i+8cCcLmg1hhM2pI66RyxOKyXF9+0PZRRI25oJJsNPWOjPX3O2xiPpnVKVsQLXtHXzah3taE2SSHwz4ypB3jkVABQF72hiM2o29e8BczZVu3Q9YimPVcj380k21Fx2gJqAKxc3tDCmbtYb+kFqmlXJJMSFyShU+nTUEX6QYmohI0PveIkqdNxqbX27R0uolAteH75I1fZIJupFSNOkN7NSJqaEj+Ua+8N6ObMqFvCD1P8AaDW5duXd5uZRc28WgiuTT4JxXJqbB7hxLw/lJ5Crvy55Dve46/aG2tU3+KUqYld1LScg7KGoiosIcT65hJmYk5JTPyswQXGVpCgogaEf9RMKHxVZnHwiel+SSfra2B9IEexKEm+0EvfjJJPsvz4dnmcVYNalXUn52mLUw6P9p+j+o9otxGG2mVfQAk9YzZwWxizhjie7KtTCEUytNgZgbgL3T6a3HvGjncSKLbyOYPw1a3G0czq8c8eVpPg34JR2V5RX3F7B7clOSlYaTugsOkdeqTFcqd0ASbDsYt/FdZFZo0xKOPtG4uAAL3G0VCWRe1tb6x0fpuSU8W2XaA+uinPdHyVtxVoofbMy2LqPj03uNFfpY+0NHCDE5oFfbQ4v8B3wLHkdj7G0WZiCmifprqAAVo8aATuR09xp7xQ86yuiV0t7IKsyCD+U7QUfZmiriaQxi2qa5IQ3nUVGwSLkw2yOB5ybUHHUplkW2XufaFeBayqt0lmYKwXGk8pRvrcdfeJC4+u5JJJ9YSUfJmlu8C48OaLRqXJzr0w1MOOozrQ4pIyHtlveGaUmZNVVKnWTNSygoJS2rLl6A/8AUKlz8y6nKp0lNrWIG0JGXHZMqDCuXmBScqRqDuI1+7BL4ozbMj5k7PKi/MFpRLvOTawKug7CBCVxTgSpJJKT0tAiHu2Wwx7VTM6fwuVukhlI73ED+FyirBTaQLa2EcT8yZeaWgE9d4JTUQlWb/14SpqzXymHfw6WB/0xod47TTZRdwWk+0I/nxcqJgInxa+Yw1UP/kVro0mjUIB/9tBH8JlM2XJe380ByfGW4OvnCczyS5ckf0hUJu+BSqjSRWCGxYRwqjSJuOUL26QSidCWxlVe8D5xKxfPfTpD0kPbfYb/AAGSyKPLGb9oZ59mQUhz5VoLWg5TrpeFVRqJQza5F9rbkwbSaE7UEystLJvOvnMbjYRCUtqtlkIObpDMy6ZVIcyFKeyReFiC28MzjiRmtZRN4s6X4PVBcunwpuRroYTq+HyqTZshxLQJ1uNIwvWYV3IKr0zVPqBWs1UGJNSGy2Fnoroof0MJXKq409zkJJA+q43i9qN8L4aQlc5NOPHskWtD8OA1MlmlI+Xz3HiUrWKH6lgXFmuHompauSoo6l4ockZ2UmUXSoLSpIHQg6GNc0nG/wDH6KxMJIKn0AqCDsbW1+0UdiLhIKRTluSJPMaOcI7jtEeoHEmbwwlBbu5J3IcZUdUnrEZxhrI7odox5tPl0bSkuzQy3AQSpRzJ6d4SBlteY28UR+i4ulcRyiJiWWkpUkFWux7HsYdJefSHgnbpC062OjBme+HDFLsikKNk6bxSPFjD5ps+mZQglvQj/iT/AEN/vF7cxS0+EXHpET4jUb+MUF3TxNi+g6df7+0FJJIxQdOmQvg3iX5SqiTdI5M0Mlz0V0/tF2rYKVa2jKFKmHKXOgfQtte40IIMamwvVRiKiSs4FJUVoGYD8qhuIb9EclxdhiwE6ajzhbhp+jy1XbcrsrNzdPSkhTUm6lpZPTUgwcqUzA/+EIZmXU2g2GkPRCLRJMW1vAsxRVsUKgVOVqBULTE5OpWlI6+EJF/vAiEuIKTr7wInY9t9mX8bAyVTVrZJvoIjqpy40v8AeJziWSan5n8S/wDNDIcPSyddbw0H8TVKrGD5gixJNrx2mZIt4lE2h/FAl7HtfTtHRoMuLgi/W/lFlkSNqm7Hr11vvBQmlZtIkaqDLKVcZgP2jxWHJUG9zc+cLkalfJHjMrBCQbpjlyfUyCQDmGwiQmhS9zZR3vDbiGlNSdNLzd81wCewiKZIapuoOTTIQdV9I0RwB4dulpurz6CVuDK1mGgHeKZ4d4dYxBWZMOm7RcACO8bUw62iUlZZtKQ2ltISANABAX1HO4R9uPk6j0fTRyT96Xgf5OjMoSlJRfpe0L1UhlsAhIvBCKxIygHPmkNjpdUOMrU5KdSotOpXYdI5l4p1dHaLPjumwv5doIAygecNk9LpdzWFhaF9Qq0rKIKleIJFz5xBp3ivRUzKpe5Q6k2KYlHTzn0iGTV4cf1MTVaSDjT6FJsLGMpcRKWuiVieWlN5dayopHnGoprFFPniQ2+Bm7xRXHGScp7iZkDOw6Mye2Ybj3EG9A5Y8m2XFgD1XbqMO/G7oZOB0+pypVGWC7tloOJSTsesW8JohV72PQnvFGfD+0tzG044hJ5SZVVx0FyNIvJ2T5bytdL3F4J5F82calxyS+nvGalG3QdCP1jyfaQqXWlVlBQykWhDhR4JW9LLV4frTf8AWHqrspbk3F503CSdovjyjHJbWZkxrTBS6wp1CCAs2PnbY+4tFlcDsTBEy/SnF/hujmNC/wCcbj3H7Qg4s4cLlLanUC6mrIXYfY/fT3iu8MVp6kzsvNMmzrKwoe3SLqaJNqcTXxdSUW6iEUylKgekKKPMM1qkSs6wpPLmGwtIA28o6ekrJOoP3h+zInXgYX2bqIAIgQ90t5im1OXmZuRRUpZtV1yq3FIS4OxKdR7QIf8AY1WZTqjocZacG5TlJ9IZkToyi4BPnDs8C9TUqTqoa3vEMfnOQ+6m9gg2iGOgjNU7H4TmXL4uto9+dy65v1iPpnFFQN7iOlzxjTwVD2idukZSLmPVTdk2Ise/aGFicCUjUm/aD1zIKdzfziLYqY5iZKrm4ENlddU/IONgXuL99oJRN9Dt1hbRWm6rWpKTeXlafdS2o9dYi3SbJKLbSRLfh2pCpqv81wWalmy4L9zoIvFdbqVSnXm5YCXlWzl5y9tOsRTgvhw0Wq1uTdbKXG3AyQeg7RaFawM9U2AzmUmW3KGfBm9SI5vNkSz3I7bR6WctMopfsgtYlJJpAmJqsvPOJGYgqCU2v+14mOAa0jnNtpupDnhClQZMYYbnabL0xynJdYl0lLSV3OUXv031HWFdDwwikTiXXUBC0apSBa5PUxTqM+OeOk+TZp9Jkjl+S4OsdVNUk8iUSoZFJKisdB2iHmjNSdGXXESLE6C4UBF05yqxOx11ta9t4sTF9MZecaeIAIF8w3EJpbDM2thDss6Mitbi0VafUQhH5I06nRznL4MrGmzkriF0y05SHaW7lzJVktv00jniThlFRwLMMK/EWwAtCgNdItuTwqiXeU7MnM6De6jeGjGdNZXJutJtlcbKTbzEL+TF5FtGekccTUu2jMfA1CaTiGpMqSbPpCUK7kaxcs63lQFWIsbGIyxgVeC8BJrM0OXOiZS+B/szZbfY3iWjLOSoU34kOICkn1EFnkWSW6PRxWfSz09Rl2+Rvkp5UpNtuD8pvfyia1BTc1T2ltkLQ8oWIHQaxXUwpTSspuCDEgo9efmWJeSS0CJcE572320+8bMTt0CsqqO5j+wujhmdYrFJVVWnWihtCZkshCj+Y2Bv6Rlioyq6TWpiXWgtlDhGW22saZmcx1NrxT/FygcmdYqbabBwZFkfzD+4/aNso8WZcMlur7ll/DvidNQps5Q33QXZY85gK6oJ8QHof3i0p6XXySMiNeyoyJw+xSrCWKqfVSboacCHR0LatFD7a+0bMmmW3pJLzZCm3EhaVDYgi4MRjyPOO2X4Im6yUq1Fh2zXgQueb1sO8CHoqU66Mi0wF2XW0VHtvaIlU6M+7UHHUFOVWvbWJfTFBqeeZO4JAhtqS/l3ljfxHW0U4+HQUlwiMt0eabIzWNj0MGOUqbI0APWHUTgKja23WDEzid0n3jTRRuGJmlTaARYZhClNPeULBIJ7CHNU6gAkn/uPBNpFze4PaFt5I2/sNaqY8nUoue0OGHKW8ivUxZNkpmW1EjcAKEGOT17dfXrHslURJTLT9/8ATUlWnlrEZr4suxy+SZrNuRlZDEkw+zfmTBS46TsTbeLHlKq2W0osNtYrNKguVp80ASXmUKzeoBA/WJFT5ha1pJNrdo4bLBuXJ6pp8katdE9fmZWTleYgJ5qhvtaKpq/FGnUetMSvIROTSnPxF81I08gd/SIVxPxhW1VsU5p5UnJKIRzNsw9YJkcCUCoJC1pn6pMJFy4ynwg+RjZj0kdqeTyY8uryZZuOFdFp8R+LFMk6Kw9JNyy3SsH8XQIHUnr5WhmwdxgpUxMuATTDC7BXKKvDfrDGzgSVbkwh+jTc+2lISgTSx4B5a39zEUxNw/k5tpaJGgOyj6iCFoWMqT94vWDEo0UznrI8/wCi+53EsnWZD5iWWlwHqg31iKVV9TzYzbbQycM8FzGGaO8H5hSkukL5ROiDaHyfRdsBOutgBrcxh9uOObUXaNkdRPJiW9UxJW6U7jDCs1SAn8Z1sloAdk3v9wIg/DKYXUaByFpPzMmosuJO4sY19wP4MT0k/MVOuSJlWy0EsNP/AFkk3KrdBGf8d4YZ4SfEpO01NmqLXR8wwOiSvceyrxdhz2pQSOc9Sqc1KL64IViOmrlplLgScrg+xhHh1madqzbLKglTyw0Lm2vnFuYxoMvNUh8tgc1g59O3WKqlW1MJS4k5VhWcHqDfSCumzqaT8nN6jHSLEPC/E6rnktAd1OCG7E/BKuVuhTMu45KpXlzJAUVHMNR09veLvwlXHsS4bkp1mU5mZAStRcSBmGh09YfqVKMvzSk1NSpJgJvnZAdUT2tpHSqCmuDnFkcHyj5juSbsnMvyzqcriFFCkqGxEa7+GBauImCFyUxU1Im6UsMKayAnl28B1+3tFW/FZgWRwhxGMzSVPrp9RR8wlbzYR+JfxpsCeuvvDP8ADfxDc4fcUpEqdS3IVO0nMFeqE5j4VH0NvvGbasc6CM2skNyNnjhXIt6uzMw6euwECJtMU6fcSLTyW7//AJsA/qTAi9xRkXJ8vawgU/FEwkDRSyQB5w24nbKGHHBobBX2h4xu0Wqy06BotIN7/eEVfY5tNCkgEKSU/cQKh4YckuKIMiduSQbk+cdtzl9L210hlzqCsvXbQQah/l9TtfWNl2ZKHMzult/SAmfzAC9rQzJmCtR3j1tas4Ftt4l0IelTthYG3eOUThFuvrDW46e/oRBbbq1KsD7Qw66Lw4X8Vqk9U5Chz81zJGxQzmAulVtBft0jR1FnEONJJOvUxgtqYcln23W1FDjagpKgdiNo0/w7x+rElEbm0H8dqzcw1vlV39DATW6dfXE6j0zWNf08jLdmaTJ1R7mPsoctYgKSDaHiSpqJJsKaskW+kCw/SIRS8VNqISpWnn0iWyFYQ8hH4gI7iAdZFwdLjyQ7sXLQtZsoaEblO0JX6e20kK1UDtCt+sSZZy5wCOl4jFVxUzL3Q34ldk7CJSU5NIslmilbFs1PCWSEG1r6xEsQY+ksE8mszbHzktIvIcMrmyl4hQIQD0vaErs/M1V4pRdAOpN4o3j1iJ1NalqEMwYZaDywDqpauvsI14dOss9kgTqtU8eJyRtCm/4jeDcRIbbfkZ+hTJ0KnQHWxfzGv3EV78UFX/zxhum4qk30vPU5xLqHmz9TKu3obGMFT7y2imxCRbYGNFcAMeIxVhKcwbU151tsrDJUblTZ3A/4kxsyaOGBrJjOWx6hzThPyW5RsZKrVAl5wLKi8zlVc7m1jDFNrEq+pr8vQ+UQThvUXqdNzuHJi/NlXjbyAOv9ImVcRdCHhvsYdQ2SpeSh2+y5/h8xOgzU7Q3HLhwc9kHuPqH21i6HmBa+0YxwdiZ3DmJafUGzbkOhSrH6k7KH2jY8pX5WoyzL7Db623UhSFclViDB/S5HtpgLVQUZ7l5Kl+JTAYxZw+mJlprmTtMPzLdhqUWstP219owzMJLJzoVlWhWZKtvePqxU8IzDku2l5UopqZ/Cy/MINwodddBbe8fOzjlw2c4Y4/qNGcU0tsK5zK2VhaS0rVOo7be0Tyxv5Iv08r+Ejcnw58REcT+FNIqDjgXPy6flJodQ4gWufUWMCMo/BrxVTgbH0zh6cU6qQrKcraGxmIfT9Nh5i4gQlNURUdlporLiFJENsOjXIooIMNa8sxRkgDxAX+0SfiBL5qfN66oOcX/92MQ6jLVMSTjY1IGkB4L42GeLIo7h9lx9akqIKiSRHK8ONKSSVHfaFVQmPlZlaTp0hOmo66nWCUaaMbbTCUYbl21iy1EWsY6/y+0NQs+/aDBPXFxsYCZ0BJGa0SasVnJw+1vmsnzjhOHWApNlkW8toOVOlWnuI9E3ktrcHoDCoazz/L7SiLqJMW/8PlJQmq1SWSq4caSoA+RP94qZqZWVadekaq+Czhn/AJ7mcXPCyZ6Wkmvlc23MLl7e4Tb3jLqYOeJqPZv0OWMM8ZT6FNSwgZZedAKATeFNLk3GkhGRzb8piz5+hqDa2nUZXE3SpJGoI7w006k8t6wSdO4jjXnklUuz0daeDdx6IsuhPTCf9FZV2hG/hh1IUVJsDrYCLiRT0BgKCOm4hmn6UVaKGpMMs8+aHeCP2IVSMNBuXzqTYW2tGTfiLp8zJcTpwusrYu20UBXVJQCk+94+hWDMEOYtqKJBF0y6QFzDttEI/udhGSvjfkZUccqvLNICWm2ZdpKQPpCWkgD2FoOel4pylLJI5r1nNCMVgj35MpVNPUmxI2MS/gLPLk+JFMINwvO2q/YpjqY4ZT0/ShNyK2ptFtUJVZST2IhXwTwvOjiGwt+XdYTKpU4orSQAdgIMZXFwaOXWOcWm12WfxDQcKcRadXGtGJwBD1u40P3FjFgulM7KWBuhabg+UMfE6jHEGEJkoQC/Kq57Z66b/peE3D+uisYZl1FV3WPwlJJ102P2gddwT+xdkTjJ/kOTJFteqvvpGpuAuJP4xg1Mg65mmacrl67lB1Sf3EZjnjy5gkaBWvpE34L4uVhzGUuh53JKzv8A8dwHbX6T9/3jZhnsd/cHZoXHg1M8gG97axm/4u8DCfokjiRhNnZM8iZKR/8AWo6E+iv3jRLswTe5tEfxZSJfE9Bn6TNpCpecZU0ryuND7Gx9oKPlNAzHLZJM+bYqExQapK1CUWWZqWcS624NwoG4MCHTGdBeo1WnqdMoyvyzimVjbUG1/feBGKgs47uSxcZS+dlYNiHWyB5xW2Gn8k6WyAQBtFr4lRzJNtRGoVFRyLPymI1NX05hHna8D8buJrfaGTH0mqTmkuIFkqsbxE0zuuqoszilTSKOHU621HeKkkZWYnVhLDanSegG0EcTTiUZI1KhwTNa/VeDkzNwbqEKpPB8y5YvrS0BuBqqHuVw3JSifGgvK/mcOn2i+ilpEebWt4+AEm+yReHBimTjiASjKD/ObQ/+FtOVtCG0f7RYQbKy/PmBc3A1Jh9rYqQnptJ5RUtw5l29hG2P8OWya3i9oqssyjK0i+ps5r+4jHQbJeUL2vt5iNTfATPKkuLbsuCUpmZBxBHexBiTikhm6Zrrinw5eeU7iGjs84K1nZRA1v1cSP3EU9LMtuTQWk2udQY2JTjy3Mp+lwRUnGHg/wApT2IKEzZYuuakkDRQ3K0Dv3Ec7rtAst5IdnXemeqPGlhy9eGVt8q2ykKJsB0MI6Zh6dxliJqm0trmOHxOOkeBpPVSj/68JKZ87iepy1KpqedNzBslJ2QOqj2A6xqLAuCZHA1CTLS45j6wFzM0oeJ5f9uwgfo9G80rlwkFvUNetLFKLuTG2hYSkcFUZumyg1PjfmFABTiuqif2HQR8l/iLxIMZcWcR1VteZt6ccDZv+UHKn9BH1N4z4sThHh5iisuLymXkXAg/71DKn9SI+QNfd58047e+Y3JMdpjgoQaR5/ObnLdLsbJKfmJAKMu6tsncJOhiWYc4jzlHSUuS7UwFHxKtZR94icui1yRv36x4lstuG6T5CISxRn9SHWSSXDLekeKVKnGyibQ7LBYKSLZhb2iJYBnEUfFM7JNuFdPfWrkuWsnun+0RRbBSkW0J84CFqbXe5SQYz/xIK6HlmlLiRedQQHWMySbpPaGpDymXkuIUQtJzJUNwR1itJPEVQlrpRMrCD+W9wYdpTFy27B9HMzblOhtFK07Q25NG58EYrGJcMSM7mBcU3ldF9QtOhv8AvDq9M+kZt4H8UKdIuTNLnJ5uUZd/EaL6soz7EX21/pF6IqTb6AtC0uIUNFJVcH3jdFuuQRkioyoz58TeCks1pmuMJs1PIyOkdHUDf3T+0CLV4o0dGKMFVGV2fbRz2FfyuJ1H31HvAiiad8BDFkuJUVTlkv091JBVlF4prEct8piTmtqGWyTodjbURY9QxpKzWGpmYlUOoSv8Jtah4SSbG3prFazAE08De5Kb3jHpcLacn0bczlidPs7q1bNWkxKuy6VsjQ3Op9YaWWUSqAltsNo6BAtaHUSYyZQAR3j1MvkuCAO0FI41Hgyym5cjfmNrq69Y4KSoC4Fx+sK1t7kaEGC1JygKy3HnFyS8EG76CFA2uQddbQ5SLIbRc6KVqbmE0ozz3LnRKe+msLiddLEDtEaFyecmy82um1heNEfBROtynHSjNK+qZZfZB8yi4/aM9c0Aa6adYtv4XaoKXx2wc8pWXNPIbJ/5Aj+sSdURs+q09PStFk3J6ceblZSVbU8884bJbQBckntvFE1T4m5mt4ukaZSpZDFHmkB1maK7LW3r41X0SLAn06xZ2NJBrHdMdphCZijvNnnBJul8dRcbp3jMmKuG05wqxZRCwwio0YNOycqZj6VJKVZGXCdtym/WMk7jDcuzVCpSSLQodckqVVHqoilU2VnKg2S67LzKlZk3F1JBIAHVRHlEjwXxCnJyvtUx5cu9JzzS1NuS8xzEJcTrYX11AMQSnh4sU1ycobTTbcqtLiUIKFNq3DSLlVwq1jf/AKhHhvCL+K8bUOeorj1MlcOutuvp5hWhd05uQLgHrYg7DYaxgw5ZSlsQW1OGCi5S7EPx24k/hPCdinJXlXUZ1OYd0oBV+9vtHzim0KdCrXzdI27/AIhdabdmsKU9pQU1yXZgp6glWXX7GMTqGZZOnqINqtqQCfYjYatfMMhHeOXGitOZCSSnreFxstJsDnt944lRlB033vpCaGsQKUVZdQT0v0jzLdVjfzvtHU0kNPZNNdbDpBrbdyBqep9IjQrPW2ivSw3g4Spt7aQoaaAF7awpbYKxc9el4mlwR5Y2pZy7bxMsBY/qmEJ1Blppa5POOZLqUShQ66dIjczllGFuEagaesCQZLbCCr6jqo23JhVXYzSapo2BNVZqo0ZTzZu260Fp9CLwIr/A1XVNYIlAtdylKmrX6A6fpAgfP6uSmFK0Zvkp53+EtyefM0lRXlA0vboeog5x8tLlXAbJJyH3EJnHUFxIayqQnwJKdiB1gx5Idp6k3soeIfvF2CKWNBTVNPLKx1Wq43v5mOBZSb6ecJGpjnSragRdQBMKWUlCO5O942NpmJfk5UnMD19oSzVmkFZGg1Jhdm8Ou5hPMNZswtoYj+h7BJPMuMfhKCwNCRBtwBsQOljDI9T1NOhyVWpp5XQbH1h3ZCygFywXYAkbXhDNnYBvcnXsIkWBOWrFlGQ+ohhc40hwpUQQlSwDYjbQxHsxz5eghxoTvy1UlXVbJdQr7KBhPgY+q/w1TC0YCVh6dXnn8Ozj1LczG6i2DdpXuhQ+0TjFmFJeuUSYk5ixQFEoJ3QQNCD0IPWK8w64MK8XpNxKssniymJXY7fNMAG/qptX6Q9ca8e0+kSiqW7PNyxWguzASsh1QtdCE22zEa+WnWMs/jyaIK2ldFJ1dD8hJzUvLqbWGZJMuHm5sh5SdbHKkAJ1/Mew7xd/C2mCnYLpbAJK3WkzD7qzmUpShc3PXoIz9WcaSDdFnFLdlA04y4JdlcspDilrCPCtdrBIy2vfW+2kWDhni/TcEcBJmsvLampqSCZWVl2HAtTzyhZppNv92noIwaaL9x2uwlq5qUFtlZlH45a61VeMTsmwtK26bKtS5y9FaqUP/wChGblXWLaaabWh8xpVqlV69UJurKUqqPTC1zNzchwqOYex09oYk301I1g0/sB7PEgqum97aXhsmhOKmFobcSy0RosDxGHUgZbG9/LaCHQlaCFA3J3huxK6EUvTUS6iu6lrO6lG5MODDdljTSCUu5FJbVqb/eFaRrdIP36Q6QzDEBNzrfzhQlJQO994SBzMQNh6wqbsUb373h18Rm7Ek8vnTDEuDcE5z6DpCtZOlje3QQjlVB2sPKABDaQkQtzKuBbwnvDd8iRZfDtwOUYam7bihvAhBw0mAEzbJ2BSrLAgXlT3uycV+ClMPpHyaFAlWZRJvD/KoSStH6QkNHcobUtKrSUOISlSgTfUi/8AWFbKcjtwSNY3YvlFNFk+ZMRyJ5a3WNPw1EW203h4QFZNBb1hjB5deeT+V1IUL+WkPgBKbg/eLuLKrXk9ulKjex07QTMLDYAIzEnTtBi75dRrCeabUWQQDm3BtD0RA2nxWUfFveDgQo2ve43IghtzO2FDYja0GBJ9D2hkI6uRe52G8HyailVx/aCCTcEC99oMlgCsHMd7QqsT4Pp5j6cda4IYIxxKNqfmqD8jVCEfUprIlLo90mM9zvH3F2L8TTk8nhv/ABFiYe5jTrrbijl/KNE2NhaNBYRqLVd+FnB8i80JtFRkG5N1kPhpTiUkgpBPUlKRbteK44G1iZaxazhmtyoE7h5QZanVPKsthV0pyg/VckC9rWSDuIGZcyitlWEsGm9yO9uiusZ8bjJybUvibhsuSbN7utNKQq/lmSn94kHAKf4e45xRNVWRZngvDsi9VTJzmjQUlNkrt1UnW2sWpiVhmRolZfmm6pLpecbExznA85crs640PFayVZbgdBaK+4izlP4c4Em5+TkJWSqNRoD7L74YDUw4VqbSAqwA/Mq47xVizReRRUaLc2keOG5SsxFiOeM9WJuYPiU+6pwnzJJP7wiQfBf6VemsezTmdxSgm9zcCOUgncwY7YJboC1eK4BVffzghxzVSSNE72g5wHMRtCJ5eZ5LKR9X1ekKxKzuRa5rpeOo/KLwvV4Sd7nz0Ecss5EpSE6bAwJgWIFttB3h1yKuTxpOfU6g6Wg+5QjxaAaxy2gBu99ITVaY+VpzqjqcpsRE0yLo8w4ovB97otxWh+whwcIDhzaW2hLh+WErSmh+e1zeD33Rn23Oloh+REv4bOgVxaQr62jpfsRAhswQ8pqusEaEAjQQIF509/BdF0hsx+gJxJPIRfK26Ei/kAIbGklZF9LfaHLHKs9eqSgSv8dQKveG5CSWU9ABG7D9CS+wpvliKoN3qMm4LXN0k9/eHpu5QNrAbwzz5OeXVoAFD1EPLVsoA7RclyVPo5IAUAB01jhRGQix87wYVBKyDv3gpXU6Afe8J8MQiaIZfU0R5pEKkKuSNyPtCObbUlSXRuNT6dYVNqCkAjWEI6NiNxe/eO2l5Vpt7wSVkqI0t6R0hWp1vba0NdCZtjgrxBlK3wuwhR3TJLRSm32JgzlyWVF4LCkgA5jkFhY6EiJPxMQ/K1xzGuGnJNE9S2y2oiazGosFCQEZQbjKAVdNdoz7wA4p4PwhQZqm4hpc7NzJmC6l+VOmUgaHxDUWMXQnjJwon2wA1Vpa6bla2yQk9RoTAzJibk5JMIQ1bjBQdUiZ4bxLSMQYCNSpompaWemA3y5FfNmGPCo2UPEUZloToOpHQmKV+MOsqkGqbREzDqUrZRMOsqSAFrJJKie4ygWGgvDfjCuYTwNOLr2BsThaFfiTVNfK21K80HKLK8oqLi5jSRxpPy01TahMTzBautMwCFNuE6pNyegGohYsDjkUv+FuTV747WuStnCSo2JvvBzagACdAe8FX11N+0dLJF8o9oKIFcnj6whtSio2GsEyLGpfXfmL38oKePzz4YTcJR4l279BDkhhKEWtmt3MNVCujovBNgogf8d4SPzKAb3zAdAIUFIJ2FgITuqCb6Dz1iXaoW4DcynkgeIE23EN2I5m0sy0knxOBJPvCkLAWADe2toZK44ZiryLKSbFdyBvaGpDdMl8mT8mjcaA3jkgq8/WD0rSJZCRcWFtIRlw7WyxPwKiWcOJFyqYrkpZsEuOryJSOt4EOnAOcEtxZwzzNUOTaWiD/uun+sCBubHulY6ZDMWoUmr1AOOc5fOXdwAJzG+9hCOWF2E6+Ej9YECNeL+2mSlxJiOeRy1tHU+MCHdnRvU2gQIsIrk8KQFG5tAUA4nS4IgQIcj0gl1Ge6STCJg8lSkG5CdR6QIEMSjyg5JBO/oINbsk+GBAiJL8GoPg4l5GcGKGp5lM0xLtfMrl35dLrahl0NyNFApOnUGNFyOC8MVPBzkyiWozy35nltVCoSCEpQnLmVlSkAG1lgH97QIEA88pLI0mdDpoxlg3Nc2RPEXAvBdSqNNll0WmtOzSG1TTcu862VlYV/pC9gPw1HXe/SMbcZMM0bCHEKu0agsrYpknMllCHHM6swAza+t4ECL9JknKdNmfW4oRhFxVWQEEXta0ePzAaYVexOwA6mBAgswK1RxSpYtZybqUrU3HWFh5l7aDTS8CBDjSEygsDVy9+gEJngoA+JR94ECJdDBKFpbzLI1tbeI5Mz6RiJvMTdIsOnWBAiL6ET4C7KTtpBKz38XSBAhxo9jxgmqLpGLqPNg/6E4y5cHaywYECBGfIuSqbpn/2Q==",alt:"Manoj Sahoo"}),(0,g.jsx)(bh,{children:"Manoj Kumar Sahoo"}),(0,g.jsx)(wh,{children:"CEO, Co-founder"}),(0,g.jsx)(kh,{children:"Manoj has 25+ years of experience in Product solution, Engineering and Development in two of the India\u2019s leading Products, Finacle (INFOSYS) an enterprise solution in Banking and Financial Services and Tally the most admirable product in SMB segment"})]}),(0,g.jsxs)(xh,{children:[(0,g.jsx)(kh,{children:"Manoj K. Sahoo, Founder and Director of Atomwalk, drives product development and innovation with over 25 years of experience in engineering and software solutions. He was instrumental in building two of India\u2019s iconic software products: Finacle, Infosys's global banking solution, and Tally, a leading business tool for SMBs. Manoj's expertise spans payments, supply chain management, and delivery excellence, with multiple patents in product innovation. Holding a B-Tech from NIT Rourkela and an MS from BITS Pilani, he leads Atomwalk's mission to deliver ERP solutions that enhance business efficiency and digital transformation."}),(0,g.jsx)(Sh,{href:"https://www.linkedin.com/in/manojksahoo",target:"_blank",children:(0,g.jsx)("img",{src:lh,alt:"LinkedIn"})})]})]})}),(0,g.jsx)(mh,{children:(0,g.jsxs)(gh,{className:"flip-card-inner",children:[(0,g.jsxs)(yh,{children:[(0,g.jsx)(vh,{src:kc,alt:"Lipika"}),(0,g.jsx)(bh,{children:"Dr. Lipika Sahoo"}),(0,g.jsx)(wh,{children:"Founder and Director"}),(0,g.jsx)(kh,{children:"Dr. Lipika Sahoo, with 24 years of academia and industry experience in technology, innovation, and intellectual property, holds a PhD from IISc. She has triple master's degrees: MSc from Sambalpur University, PGDIPR from NLSIU, and PGCBM from XIMB, along with advanced certifications from WIPO and IIM Bangalore."})]}),(0,g.jsxs)(xh,{children:[(0,g.jsx)(kh,{children:"Dr. Lipika Sahoo, Founder and Director of Atomwalk, brings 24 years of experience in academia and industry, specializing in technology, innovation, and intellectual property. She holds a PhD from the Indian Institute of Science (IISc) and has earned multiple advanced degrees, including an MSc, PGDIPR, PGCBM, and certifications from WIPO and IIM Bangalore. Dr. Sahoo serves as a reviewer for various government innovation programs, such as BIRAC-BIG, SPARSH, and TATA Trust's Social Alpha. Her extensive expertise supports Atomwalk\u2019s mission of driving impactful, socially relevant technological innovations."}),(0,g.jsx)(Sh,{href:"https://www.linkedin.com/in/lipikasahoo",target:"_blank",children:(0,g.jsx)("img",{src:lh,alt:"LinkedIn"})})]})]})})]})]}),(0,g.jsxs)(ph,{bgColor:"#e8f3fc",children:[(0,g.jsx)(fh,{children:"Board of Advisors"}),(0,g.jsxs)(hh,{children:[(0,g.jsx)(mh,{children:(0,g.jsxs)(gh,{className:"flip-card-inner",children:[(0,g.jsxs)(yh,{children:[(0,g.jsx)(vh,{src:sh,alt:"SK Patnaik"}),(0,g.jsx)(bh,{children:"SK Patnaik"}),(0,g.jsx)(wh,{children:"Advisor"}),(0,g.jsx)(kh,{children:"For ~25 years, he led Business Management (Client Relationship, Sales and P&L Management, new GTM) roles mainly in the IT Solutions & Services spanning global markets (the US, UK, South-East Asia, and India)."})]}),(0,g.jsxs)(xh,{children:[(0,g.jsx)(kh,{children:"SK Patnaik, who joined Atomwalk\u2019s Board of Advisors in 2021, brings expertise in business strategy, product innovation, and revenue growth. With ~25 years of experience in IT solutions across global markets, he has held key roles in client relations, sales, and P&L management. Previously with Infosys, he led APAC and India operations for the Global Manufacturing Vertical and has deep experience in the ERP landscape with platforms like SAP, Oracle, and SaaS solutions. SK also co-founded a deep-tech telecom startup and holds an MBA in Marketing and Systems from the Xavier Institute of Management, Bhubaneswar."}),(0,g.jsx)(Sh,{href:"https://www.linkedin.com/in/sk-patnaik-",target:"_blank",children:(0,g.jsx)("img",{src:lh,alt:"LinkedIn"})})]})]})}),(0,g.jsx)(mh,{children:(0,g.jsxs)(gh,{className:"flip-card-inner",children:[(0,g.jsxs)(yh,{children:[(0,g.jsx)(vh,{src:ch,alt:"Dr. M R Jaganath"}),(0,g.jsx)(bh,{children:"Dr. M R Jaganath"}),(0,g.jsx)(wh,{children:"Advisor"}),(0,g.jsx)(kh,{children:"He has an illustrious career  as a Scientist managing deep Technology, Translational Medicine, Drug development , Drug discovery.  He has published numerous scientific articles in reputed journals."})]}),(0,g.jsxs)(xh,{children:[(0,g.jsx)(kh,{children:"Dr. M R Jaganath, who joined Atomwalk\u2019s Board of Advisors in October 2023, brings expertise in lab management, Good Laboratory Practice (GLP), and Good Manufacturing Practice (GMP). With a PhD from the Indian Institute of Science (IISc) and a distinguished career as Chief Scientific Officer at Connexios Life Sciences, he has extensive experience in translational medicine, drug development, and drug discovery. A prolific scientist, Dr. Jaganath has published numerous articles in esteemed scientific journals, contributing significantly to the field of advanced medical research and innovation."}),(0,g.jsx)(Sh,{href:"https://linkedin.com",target:"_blank",children:(0,g.jsx)("img",{src:lh,alt:"LinkedIn"})})]})]})})]})]})]}),Ch=(n.p,n.p,n.p,n.p,si.section`
  padding: 70px 40px ;
  background-color: rgb(225 255 246);
  text-align: center;
`,si.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 110px;
`,si.div`
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
`,si.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom:100px;
  /* display: flex;
  align-items: flex-start;
  text-align: left; */
`,si.div`
  flex-shrink: 0;
  margin-right: 15px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${e=>{let{bgColor:t}=e;return t}};
`,si.img`
  width: 40px;
  height: 40px;
`,si.div`
  flex-grow: 1;
`,si.h3`
  font-size: 1.2rem;
  margin: 15px 0 10px;
  color: #333;
`,si.p`
  font-size: 0.95rem;
  color: #666;
`,n.p+"static/media/BPritam.1c37e43bb1da3c1ecdce.jpg"),Eh=(n.p,n.p+"static/media/AAshutosh.80b42e90d2ae210dca80.jpeg"),Oh=si.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,Rh=si.h1`
font-size: 2.5rem;
margin-bottom: 30px;
color: #333;
`,Ph=si.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`,Ah=si.div`
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
`,Th=si.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 25%;
  border: 2px solid #454545;
`,zh=si.img`
  width: 100%;
  height: auto;
`,Mh=si.h2`
  font-size: 1.2rem;
  margin: 10px 0;
  color: black;
  font-weight: 500;
`,Ih=si.p`
  font-size: 1rem;
  color: #555;
`,Lh=si.p`
  font-size: 0.9rem;
  color: #888;
`,Nh=[{name:"Ashutosh Mohapatra",role:"Frontend Lead",location:"Bangalore",imgSrc:`${Eh}`,backg:"#e1fff6"},{name:"Pritam Kumar Nayak",role:"Frontend Developer",location:"Bangalore",imgSrc:`${Ch}`,backg:"#f5e9fd"}],Fh=()=>(0,g.jsxs)(Oh,{children:[(0,g.jsx)(Rh,{children:"Our Team"}),(0,g.jsx)(Ph,{children:Nh.map(((e,t)=>(0,g.jsxs)(Ah,{backg:e.backg,children:[(0,g.jsx)(Th,{children:(0,g.jsx)(zh,{src:e.imgSrc,alt:e.backg})}),(0,g.jsx)(Mh,{children:e.name}),(0,g.jsx)(Ih,{children:e.role}),(0,g.jsx)(Lh,{children:e.location})]},t)))})]}),Dh=()=>(0,g.jsxs)("div",{children:[(0,g.jsx)(ah,{}),(0,g.jsx)(jh,{}),(0,g.jsx)(Fh,{})]}),_h=n.p+"static/media/email.d27389667b81e4a5c88c.png",Bh=n.p+"static/media/telephone-call.ee034a176dc60e4b43bc.png",Hh=n.p+"static/media/footer-bg.7bd67c0f73571d0acc02.png";const Wh=n.p+"static/media/nav-icon1.721d5414c26365f117e71d46b6641cb2.svg";const Uh=n.p+"static/media/nav-icon2.178f497aa17b70c42df2a1a8c926ed01.svg";const qh=n.p+"static/media/nav-icon3.08b285abb8e118b52637efa5d65c5367.svg",Vh=si.footer`
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
`,Gh=si.div`
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
`,Kh=si.div`
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
`,Jh=si.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`,Qh=si.div`
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
`,$h=si.div`
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
`,Yh=si.div`
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
`,Zh=si.div`
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
`,Xh=si.div`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
    max-width: 209px;
  }
`,em=si.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,tm=si.input`
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
`,nm=si.button`
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
`;si.p`
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
`;function rm(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Vh,{children:[(0,g.jsxs)(Gh,{children:[(0,g.jsxs)(Yh,{children:[(0,g.jsx)(Zh,{children:(0,g.jsx)("img",{src:mn,alt:"AtomWalk Logo"})}),(0,g.jsx)(Xh,{children:"Stay up-to-date with AtomWalk Newsletter!"}),(0,g.jsxs)(em,{children:[(0,g.jsx)(tm,{type:"email",placeholder:"Email*",required:!0}),(0,g.jsx)(nm,{type:"submit",children:"Submit"})]})]}),(0,g.jsxs)(Kh,{children:[(0,g.jsxs)("div",{children:[" ",(0,g.jsx)("img",{src:_h,alt:"AtomWalk Logo"}),"info@atomwalk.com"]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{src:Bh,alt:"AtomWalk Logo"}),"+91-7259555003"]})]})]}),(0,g.jsxs)(Jh,{children:[(0,g.jsxs)(Qh,{children:[(0,g.jsx)("h3",{children:"Quick Links"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/",children:"Home"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/aboutUs.html",children:"About Us"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/Product.html",children:"Products"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/contactUs.html",children:"Contact Us"})})]})]}),(0,g.jsxs)(Qh,{children:[(0,g.jsx)("h3",{children:"Products"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#webdev",children:"Manufacturing Business"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#appdev",children:"Consultancy Business"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#maintenance",children:"Chemical Industry"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#marketing",children:"Lab Management"})})]})]}),(0,g.jsxs)(Qh,{children:[(0,g.jsx)("h3",{children:"Resources"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/Blog.html",children:"Blog"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#appdev",children:"Support"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#maintenance",children:"Tutorials"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#marketing",children:"FAQs"})})]})]})]})]}),(0,g.jsx)($h,{children:(0,g.jsxs)("div",{style:{padding:"25px"},children:[(0,g.jsx)("p",{children:"\xa9 2024 Atomwalk. All Rights Reserved."}),(0,g.jsxs)("p",{children:["Privacy Policy | Terms & Conditions | Made with ",(0,g.jsx)("span",{children:"\u2665"})," Atomwalk"]}),(0,g.jsxs)("div",{className:"social-icon",children:[(0,g.jsx)("a",{href:"https://www.linkedin.com/company/atomwalk-technologies/",children:(0,g.jsx)("img",{src:Wh,alt:"Icon"})}),(0,g.jsx)("a",{href:"#",children:(0,g.jsx)("img",{src:Uh,alt:"Icon"})}),(0,g.jsx)("a",{href:"#",children:(0,g.jsx)("img",{src:qh,alt:"Icon"})})]})]})})]})}const om=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,im=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,am={};function lm(e,t){return((t||am).jsx?im:om).test(e)}const sm=/[ \t\n\f\r]/g;function cm(e){return""===e.replace(sm,"")}class um{constructor(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}}function dm(e,t){const n={},r={};let o=-1;for(;++o<e.length;)Object.assign(n,e[o].property),Object.assign(r,e[o].normal);return new um(n,r,t)}function pm(e){return e.toLowerCase()}um.prototype.property={},um.prototype.normal={},um.prototype.space=null;class fm{constructor(e,t){this.property=e,this.attribute=t}}fm.prototype.space=null,fm.prototype.boolean=!1,fm.prototype.booleanish=!1,fm.prototype.overloadedBoolean=!1,fm.prototype.number=!1,fm.prototype.commaSeparated=!1,fm.prototype.spaceSeparated=!1,fm.prototype.commaOrSpaceSeparated=!1,fm.prototype.mustUseProperty=!1,fm.prototype.defined=!1;let hm=0;const mm=km(),gm=km(),ym=km(),xm=km(),vm=km(),bm=km(),wm=km();function km(){return 2**++hm}const Sm=Object.keys(t);class jm extends fm{constructor(e,n,r,o){let i=-1;if(super(e,n),Cm(this,"space",o),"number"===typeof r)for(;++i<Sm.length;){const e=Sm[i];Cm(this,Sm[i],(r&t[e])===t[e])}}}function Cm(e,t,n){n&&(e[t]=n)}jm.prototype.defined=!0;const Em={}.hasOwnProperty;function Om(e){const t={},n={};let r;for(r in e.properties)if(Em.call(e.properties,r)){const o=e.properties[r],i=new jm(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[pm(r)]=r,n[pm(i.attribute)]=r}return new um(t,n,e.space)}const Rm=Om({space:"xlink",transform:(e,t)=>"xlink:"+t.slice(5).toLowerCase(),properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Pm=Om({space:"xml",transform:(e,t)=>"xml:"+t.slice(3).toLowerCase(),properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Am(e,t){return t in e?e[t]:t}function Tm(e,t){return Am(e,t.toLowerCase())}const zm=Om({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Tm,properties:{xmlns:null,xmlnsXLink:null}}),Mm=Om({transform:(e,t)=>"role"===t?t:"aria-"+t.slice(4).toLowerCase(),properties:{ariaActiveDescendant:null,ariaAtomic:gm,ariaAutoComplete:null,ariaBusy:gm,ariaChecked:gm,ariaColCount:xm,ariaColIndex:xm,ariaColSpan:xm,ariaControls:vm,ariaCurrent:null,ariaDescribedBy:vm,ariaDetails:null,ariaDisabled:gm,ariaDropEffect:vm,ariaErrorMessage:null,ariaExpanded:gm,ariaFlowTo:vm,ariaGrabbed:gm,ariaHasPopup:null,ariaHidden:gm,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:vm,ariaLevel:xm,ariaLive:null,ariaModal:gm,ariaMultiLine:gm,ariaMultiSelectable:gm,ariaOrientation:null,ariaOwns:vm,ariaPlaceholder:null,ariaPosInSet:xm,ariaPressed:gm,ariaReadOnly:gm,ariaRelevant:null,ariaRequired:gm,ariaRoleDescription:vm,ariaRowCount:xm,ariaRowIndex:xm,ariaRowSpan:xm,ariaSelected:gm,ariaSetSize:xm,ariaSort:null,ariaValueMax:xm,ariaValueMin:xm,ariaValueNow:xm,ariaValueText:null,role:null}}),Im=Om({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Tm,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:bm,acceptCharset:vm,accessKey:vm,action:null,allow:null,allowFullScreen:mm,allowPaymentRequest:mm,allowUserMedia:mm,alt:null,as:null,async:mm,autoCapitalize:null,autoComplete:vm,autoFocus:mm,autoPlay:mm,blocking:vm,capture:null,charSet:null,checked:mm,cite:null,className:vm,cols:xm,colSpan:null,content:null,contentEditable:gm,controls:mm,controlsList:vm,coords:xm|bm,crossOrigin:null,data:null,dateTime:null,decoding:null,default:mm,defer:mm,dir:null,dirName:null,disabled:mm,download:ym,draggable:gm,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:mm,formTarget:null,headers:vm,height:xm,hidden:mm,high:xm,href:null,hrefLang:null,htmlFor:vm,httpEquiv:vm,id:null,imageSizes:null,imageSrcSet:null,inert:mm,inputMode:null,integrity:null,is:null,isMap:mm,itemId:null,itemProp:vm,itemRef:vm,itemScope:mm,itemType:vm,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:mm,low:xm,manifest:null,max:null,maxLength:xm,media:null,method:null,min:null,minLength:xm,multiple:mm,muted:mm,name:null,nonce:null,noModule:mm,noValidate:mm,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:mm,optimum:xm,pattern:null,ping:vm,placeholder:null,playsInline:mm,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:mm,referrerPolicy:null,rel:vm,required:mm,reversed:mm,rows:xm,rowSpan:xm,sandbox:vm,scope:null,scoped:mm,seamless:mm,selected:mm,shadowRootClonable:mm,shadowRootDelegatesFocus:mm,shadowRootMode:null,shape:null,size:xm,sizes:null,slot:null,span:xm,spellCheck:gm,src:null,srcDoc:null,srcLang:null,srcSet:null,start:xm,step:null,style:null,tabIndex:xm,target:null,title:null,translate:null,type:null,typeMustMatch:mm,useMap:null,value:gm,width:xm,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:vm,axis:null,background:null,bgColor:null,border:xm,borderColor:null,bottomMargin:xm,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:mm,declare:mm,event:null,face:null,frame:null,frameBorder:null,hSpace:xm,leftMargin:xm,link:null,longDesc:null,lowSrc:null,marginHeight:xm,marginWidth:xm,noResize:mm,noHref:mm,noShade:mm,noWrap:mm,object:null,profile:null,prompt:null,rev:null,rightMargin:xm,rules:null,scheme:null,scrolling:gm,standby:null,summary:null,text:null,topMargin:xm,valueType:null,version:null,vAlign:null,vLink:null,vSpace:xm,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:mm,disableRemotePlayback:mm,prefix:null,property:null,results:xm,security:null,unselectable:null}}),Lm=Om({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Am,properties:{about:wm,accentHeight:xm,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:xm,amplitude:xm,arabicForm:null,ascent:xm,attributeName:null,attributeType:null,azimuth:xm,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:xm,by:null,calcMode:null,capHeight:xm,className:vm,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:xm,diffuseConstant:xm,direction:null,display:null,dur:null,divisor:xm,dominantBaseline:null,download:mm,dx:null,dy:null,edgeMode:null,editable:null,elevation:xm,enableBackground:null,end:null,event:null,exponent:xm,externalResourcesRequired:null,fill:null,fillOpacity:xm,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:bm,g2:bm,glyphName:bm,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:xm,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:xm,horizOriginX:xm,horizOriginY:xm,id:null,ideographic:xm,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:xm,k:xm,k1:xm,k2:xm,k3:xm,k4:xm,kernelMatrix:wm,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:xm,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:xm,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:xm,overlineThickness:xm,paintOrder:null,panose1:null,path:null,pathLength:xm,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:vm,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:xm,pointsAtY:xm,pointsAtZ:xm,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:wm,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:wm,rev:wm,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:wm,requiredFeatures:wm,requiredFonts:wm,requiredFormats:wm,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:xm,specularExponent:xm,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:xm,strikethroughThickness:xm,string:null,stroke:null,strokeDashArray:wm,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:xm,strokeOpacity:xm,strokeWidth:null,style:null,surfaceScale:xm,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:wm,tabIndex:xm,tableValues:null,target:null,targetX:xm,targetY:xm,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:wm,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:xm,underlineThickness:xm,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:xm,values:null,vAlphabetic:xm,vMathematical:xm,vectorEffect:null,vHanging:xm,vIdeographic:xm,version:null,vertAdvY:xm,vertOriginX:xm,vertOriginY:xm,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:xm,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Nm=dm([Pm,Rm,zm,Mm,Im],"html"),Fm=dm([Pm,Rm,zm,Mm,Lm],"svg"),Dm=/^data[-\w.:]+$/i,_m=/-[a-z]/g,Bm=/[A-Z]/g;function Hm(e){return"-"+e.toLowerCase()}function Wm(e){return e.charAt(1).toUpperCase()}const Um={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var qm=n(4222);const Vm=qm.default||qm,Gm=Jm("end"),Km=Jm("start");function Jm(e){return function(t){const n=t&&t.position&&t.position[e]||{};if("number"===typeof n.line&&n.line>0&&"number"===typeof n.column&&n.column>0)return{line:n.line,column:n.column,offset:"number"===typeof n.offset&&n.offset>-1?n.offset:void 0}}}function Qm(e){return e&&"object"===typeof e?"position"in e||"type"in e?Ym(e.position):"start"in e||"end"in e?Ym(e):"line"in e||"column"in e?$m(e):"":""}function $m(e){return Zm(e&&e.line)+":"+Zm(e&&e.column)}function Ym(e){return $m(e&&e.start)+"-"+$m(e&&e.end)}function Zm(e){return e&&"number"===typeof e?e:1}class Xm extends Error{constructor(e,t,n){super(),"string"===typeof t&&(n=t,t=void 0);let r="",o={},i=!1;if(t&&(o="line"in t&&"column"in t||"start"in t&&"end"in t?{place:t}:"type"in t?{ancestors:[t],place:t.position}:{...t}),"string"===typeof e?r=e:!o.cause&&e&&(i=!0,r=e.message,o.cause=e),!o.ruleId&&!o.source&&"string"===typeof n){const e=n.indexOf(":");-1===e?o.ruleId=n:(o.source=n.slice(0,e),o.ruleId=n.slice(e+1))}if(!o.place&&o.ancestors&&o.ancestors){const e=o.ancestors[o.ancestors.length-1];e&&(o.place=e.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=r,this.line=a?a.line:void 0,this.name=Qm(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=i&&o.cause&&"string"===typeof o.cause.stack?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}Xm.prototype.file="",Xm.prototype.name="",Xm.prototype.reason="",Xm.prototype.message="",Xm.prototype.stack="",Xm.prototype.column=void 0,Xm.prototype.line=void 0,Xm.prototype.ancestors=void 0,Xm.prototype.cause=void 0,Xm.prototype.fatal=void 0,Xm.prototype.place=void 0,Xm.prototype.ruleId=void 0,Xm.prototype.source=void 0;const eg={}.hasOwnProperty,tg=new Map,ng=/[A-Z]/g,rg=/-([a-z])/g,og=new Set(["table","tbody","thead","tfoot","tr"]),ig=new Set(["td","th"]),ag="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function lg(e,t){if(!t||void 0===t.Fragment)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if("function"!==typeof t.jsxDEV)throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=function(e,t){return n;function n(n,r,o,i){const a=Array.isArray(o.children),l=Km(n);return t(r,o,i,a,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}(n,t.jsxDEV)}else{if("function"!==typeof t.jsx)throw new TypeError("Expected `jsx` in production options");if("function"!==typeof t.jsxs)throw new TypeError("Expected `jsxs` in production options");r=function(e,t,n){return r;function r(e,r,o,i){const a=Array.isArray(o.children)?n:t;return i?a(r,o,i):a(r,o)}}(0,t.jsx,t.jsxs)}const o={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:!1!==t.passKeys,passNode:t.passNode||!1,schema:"svg"===t.space?Fm:Nm,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:!1!==t.tableCellAlignToStyle},i=sg(o,e,void 0);return i&&"string"!==typeof i?i:o.create(e,o.Fragment,{children:i||void 0},void 0)}function sg(e,t,n){return"element"===t.type?function(e,t,n){const r=e.schema;let o=r;"svg"===t.tagName.toLowerCase()&&"html"===r.space&&(o=Fm,e.schema=o);e.ancestors.push(t);const i=fg(e,t.tagName,!1),a=function(e,t){const n={};let r,o;for(o in t.properties)if("children"!==o&&eg.call(t.properties,o)){const i=pg(e,o,t.properties[o]);if(i){const[o,a]=i;e.tableCellAlignToStyle&&"align"===o&&"string"===typeof a&&ig.has(t.tagName)?r=a:n[o]=a}}if(r){(n.style||(n.style={}))["css"===e.stylePropertyNameCase?"text-align":"textAlign"]=r}return n}(e,t);let l=dg(e,t);og.has(t.tagName)&&(l=l.filter((function(e){return"string"!==typeof e||!("object"===typeof(t=e)?"text"===t.type&&cm(t.value):cm(t));var t})));return cg(e,a,i,t),ug(a,l),e.ancestors.pop(),e.schema=r,e.create(t,i,a,n)}(e,t,n):"mdxFlowExpression"===t.type||"mdxTextExpression"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater){const n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}hg(e,t.position)}(e,t):"mdxJsxFlowElement"===t.type||"mdxJsxTextElement"===t.type?function(e,t,n){const r=e.schema;let o=r;"svg"===t.name&&"html"===r.space&&(o=Fm,e.schema=o);e.ancestors.push(t);const i=null===t.name?e.Fragment:fg(e,t.name,!0),a=function(e,t){const n={};for(const r of t.attributes)if("mdxJsxExpressionAttribute"===r.type)if(r.data&&r.data.estree&&e.evaluater){const t=r.data.estree.body[0];t.type;const o=t.expression;o.type;const i=o.properties[0];i.type,Object.assign(n,e.evaluater.evaluateExpression(i.argument))}else hg(e,t.position);else{const o=r.name;let i;if(r.value&&"object"===typeof r.value)if(r.value.data&&r.value.data.estree&&e.evaluater){const t=r.value.data.estree.body[0];t.type,i=e.evaluater.evaluateExpression(t.expression)}else hg(e,t.position);else i=null===r.value||r.value;n[o]=i}return n}(e,t),l=dg(e,t);return cg(e,a,i,t),ug(a,l),e.ancestors.pop(),e.schema=r,e.create(t,i,a,n)}(e,t,n):"mdxjsEsm"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);hg(e,t.position)}(e,t):"root"===t.type?function(e,t,n){const r={};return ug(r,dg(e,t)),e.create(t,e.Fragment,r,n)}(e,t,n):"text"===t.type?function(e,t){return t.value}(0,t):void 0}function cg(e,t,n,r){"string"!==typeof n&&n!==e.Fragment&&e.passNode&&(t.node=r)}function ug(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function dg(e,t){const n=[];let r=-1;const o=e.passKeys?new Map:tg;for(;++r<t.children.length;){const i=t.children[r];let a;if(e.passKeys){const e="element"===i.type?i.tagName:"mdxJsxFlowElement"===i.type||"mdxJsxTextElement"===i.type?i.name:void 0;if(e){const t=o.get(e)||0;a=e+"-"+t,o.set(e,t+1)}}const l=sg(e,i,a);void 0!==l&&n.push(l)}return n}function pg(e,t,n){const r=function(e,t){const n=pm(t);let r=t,o=fm;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&"data"===n.slice(0,4)&&Dm.test(t)){if("-"===t.charAt(4)){const e=t.slice(5).replace(_m,Wm);r="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{const e=t.slice(4);if(!_m.test(e)){let n=e.replace(Bm,Hm);"-"!==n.charAt(0)&&(n="-"+n),t="data"+n}}o=jm}return new o(r,t)}(e.schema,t);if(!(null===n||void 0===n||"number"===typeof n&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?function(e,t){const n=t||{};return(""===e[e.length-1]?[...e,""]:e).join((n.padRight?" ":"")+","+(!1===n.padLeft?"":" ")).trim()}(n):function(e){return e.join(" ").trim()}(n)),"style"===r.property){let t="object"===typeof n?n:function(e,t){const n={};try{Vm(t,r)}catch(o){if(!e.ignoreInvalidStyle){const t=o,n=new Xm("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:t,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=ag+"#cannot-parse-style-attribute",n}}return n;function r(e,t){let r=e;"--"!==r.slice(0,2)&&("-ms-"===r.slice(0,4)&&(r="ms-"+r.slice(4)),r=r.replace(rg,gg)),n[r]=t}}(e,String(n));return"css"===e.stylePropertyNameCase&&(t=function(e){const t={};let n;for(n in e)eg.call(e,n)&&(t[mg(n)]=e[n]);return t}(t)),["style",t]}return["react"===e.elementAttributeNameCase&&r.space?Um[r.property]||r.property:r.attribute,n]}}function fg(e,t,n){let r;if(n)if(t.includes(".")){const e=t.split(".");let n,o=-1;for(;++o<e.length;){const t=lm(e[o])?{type:"Identifier",name:e[o]}:{type:"Literal",value:e[o]};n=n?{type:"MemberExpression",object:n,property:t,computed:Boolean(o&&"Literal"===t.type),optional:!1}:t}r=n}else r=lm(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};else r={type:"Literal",value:t};if("Literal"===r.type){const t=r.value;return eg.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);hg(e)}function hg(e,t){const n=new Xm("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=ag+"#cannot-handle-mdx-estrees-without-createevaluater",n}function mg(e){let t=e.replace(ng,yg);return"ms-"===t.slice(0,3)&&(t="-"+t),t}function gg(e,t){return t.toUpperCase()}function yg(e){return"-"+e.toLowerCase()}const xg={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},vg={};function bg(e,t,n){if(function(e){return Boolean(e&&"object"===typeof e)}(e)){if("value"in e)return"html"!==e.type||n?e.value:"";if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return wg(e.children,t,n)}return Array.isArray(e)?wg(e,t,n):""}function wg(e,t,n){const r=[];let o=-1;for(;++o<e.length;)r[o]=bg(e[o],t,n);return r.join("")}function kg(e,t,n,r){const o=e.length;let i,a=0;if(t=t<0?-t>o?0:o+t:t>o?o:t,n=n>0?n:0,r.length<1e4)i=Array.from(r),i.unshift(t,n),e.splice(...i);else for(n&&e.splice(t,n);a<r.length;)i=r.slice(a,a+1e4),i.unshift(t,0),e.splice(...i),a+=1e4,t+=1e4}function Sg(e,t){return e.length>0?(kg(e,e.length,0,t),e):t}class jg{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const n=null===t||void 0===t?Number.POSITIVE_INFINITY:t;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){const r=t||0;this.setCursor(Math.trunc(e));const o=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return n&&Cg(this.left,n),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Cg(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Cg(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&0===this.right.length||e<0&&0===this.left.length))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);Cg(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Cg(this.left,t.reverse())}}}function Cg(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Eg(e){const t={};let n,r,o,i,a,l,s,c=-1;const u=new jg(e);for(;++c<u.length;){for(;c in t;)c=t[c];if(n=u.get(c),c&&"chunkFlow"===n[1].type&&"listItemPrefix"===u.get(c-1)[1].type&&(l=n[1]._tokenizer.events,o=0,o<l.length&&"lineEndingBlank"===l[o][1].type&&(o+=2),o<l.length&&"content"===l[o][1].type))for(;++o<l.length&&"content"!==l[o][1].type;)"chunkText"===l[o][1].type&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if("enter"===n[0])n[1].contentType&&(Object.assign(t,Og(u,c)),c=t[c],s=!0);else if(n[1]._container){for(o=c,r=void 0;o--&&(i=u.get(o),"lineEnding"===i[1].type||"lineEndingBlank"===i[1].type);)"enter"===i[0]&&(r&&(u.get(r)[1].type="lineEndingBlank"),i[1].type="lineEnding",r=o);r&&(n[1].end=Object.assign({},u.get(r)[1].start),a=u.slice(r,c),a.unshift(n),u.splice(r,c-r+1,a))}}return kg(e,0,Number.POSITIVE_INFINITY,u.slice(0)),!s}function Og(e,t){const n=e.get(t)[1],r=e.get(t)[2];let o=t-1;const i=[],a=n._tokenizer||r.parser[n.contentType](n.start),l=a.events,s=[],c={};let u,d,p=-1,f=n,h=0,m=0;const g=[m];for(;f;){for(;e.get(++o)[1]!==f;);i.push(o),f._tokenizer||(u=r.sliceStream(f),f.next||u.push(null),d&&a.defineSkip(f.start),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(u),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),d=f,f=f.next}for(f=n;++p<l.length;)"exit"===l[p][0]&&"enter"===l[p-1][0]&&l[p][1].type===l[p-1][1].type&&l[p][1].start.line!==l[p][1].end.line&&(m=p+1,g.push(m),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(a.events=[],f?(f._tokenizer=void 0,f.previous=void 0):g.pop(),p=g.length;p--;){const t=l.slice(g[p],g[p+1]),n=i.pop();s.push([n,n+t.length-1]),e.splice(n,2,t)}for(s.reverse(),p=-1;++p<s.length;)c[h+s[p][0]]=h+s[p][1],h+=s[p][1]-s[p][0]-1;return c}const Rg={}.hasOwnProperty;function Pg(e,t){let n;for(n in t){const r=(Rg.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let i;if(o)for(i in o){Rg.call(r,i)||(r[i]=[]);const e=o[i];Ag(r[i],Array.isArray(e)?e:e?[e]:[])}}}function Ag(e,t){let n=-1;const r=[];for(;++n<t.length;)("after"===t[n].add?e:r).push(t[n]);kg(e,0,0,r)}const Tg=Ug(/[A-Za-z]/),zg=Ug(/[\dA-Za-z]/),Mg=Ug(/[#-'*+\--9=?A-Z^-~]/);function Ig(e){return null!==e&&(e<32||127===e)}const Lg=Ug(/\d/),Ng=Ug(/[\dA-Fa-f]/),Fg=Ug(/[!-/:-@[-`{-~]/);function Dg(e){return null!==e&&e<-2}function _g(e){return null!==e&&(e<0||32===e)}function Bg(e){return-2===e||-1===e||32===e}const Hg=Ug(/\p{P}|\p{S}/u),Wg=Ug(/\s/);function Ug(e){return function(t){return null!==t&&t>-1&&e.test(String.fromCharCode(t))}}function qg(e,t,n,r){const o=r?r-1:Number.POSITIVE_INFINITY;let i=0;return function(r){if(Bg(r))return e.enter(n),a(r);return t(r)};function a(r){return Bg(r)&&i++<o?(e.consume(r),a):(e.exit(n),t(r))}}const Vg={tokenize:function(e){const t=e.attempt(this.parser.constructs.contentInitial,(function(n){if(null===n)return void e.consume(n);return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),qg(e,t,"linePrefix")}),(function(t){return e.enter("paragraph"),r(t)}));let n;return t;function r(t){const r=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){return null===t?(e.exit("chunkText"),e.exit("paragraph"),void e.consume(t)):Dg(t)?(e.consume(t),e.exit("chunkText"),r):(e.consume(t),o)}}};const Gg={tokenize:function(e){const t=this,n=[];let r,o,i,a=0;return l;function l(r){if(a<n.length){const o=n[a];return t.containerState=o[1],e.attempt(o[0].continuation,s,c)(r)}return c(r)}function s(e){if(a++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,r&&x();const n=t.events.length;let o,i=n;for(;i--;)if("exit"===t.events[i][0]&&"chunkFlow"===t.events[i][1].type){o=t.events[i][1].end;break}y(a);let l=n;for(;l<t.events.length;)t.events[l][1].end=Object.assign({},o),l++;return kg(t.events,i+1,0,t.events.slice(n)),t.events.length=l,c(e)}return l(e)}function c(o){if(a===n.length){if(!r)return p(o);if(r.currentConstruct&&r.currentConstruct.concrete)return h(o);t.interrupt=Boolean(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Kg,u,d)(o)}function u(e){return r&&x(),y(a),p(e)}function d(e){return t.parser.lazy[t.now().line]=a!==n.length,i=t.now().offset,h(e)}function p(n){return t.containerState={},e.attempt(Kg,f,h)(n)}function f(e){return a++,n.push([t.currentConstruct,t.containerState]),p(e)}function h(n){return null===n?(r&&x(),y(0),void e.consume(n)):(r=r||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:o,_tokenizer:r}),m(n))}function m(n){return null===n?(g(e.exit("chunkFlow"),!0),y(0),void e.consume(n)):Dg(n)?(e.consume(n),g(e.exit("chunkFlow")),a=0,t.interrupt=void 0,l):(e.consume(n),m)}function g(e,n){const l=t.sliceStream(e);if(n&&l.push(null),e.previous=o,o&&(o.next=e),o=e,r.defineSkip(e.start),r.write(l),t.parser.lazy[e.start.line]){let e=r.events.length;for(;e--;)if(r.events[e][1].start.offset<i&&(!r.events[e][1].end||r.events[e][1].end.offset>i))return;const n=t.events.length;let o,l,s=n;for(;s--;)if("exit"===t.events[s][0]&&"chunkFlow"===t.events[s][1].type){if(o){l=t.events[s][1].end;break}o=!0}for(y(a),e=n;e<t.events.length;)t.events[e][1].end=Object.assign({},l),e++;kg(t.events,s+1,0,t.events.slice(n)),t.events.length=e}}function y(r){let o=n.length;for(;o-- >r;){const r=n[o];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function x(){r.write([null]),o=void 0,r=void 0,t.containerState._closeFlow=void 0}}},Kg={tokenize:function(e,t,n){return qg(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}};const Jg={tokenize:function(e,t,n){return function(t){return Bg(t)?qg(e,r,"linePrefix")(t):r(t)};function r(e){return null===e||Dg(e)?t(e):n(e)}},partial:!0};const Qg={tokenize:function(e,t){let n;return function(t){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(t)};function r(t){return null===t?o(t):Dg(t)?e.check($g,i,o)(t):(e.consume(t),r)}function o(n){return e.exit("chunkContent"),e.exit("content"),t(n)}function i(t){return e.consume(t),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}},resolve:function(e){return Eg(e),e}},$g={tokenize:function(e,t,n){const r=this;return function(t){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),qg(e,o,"linePrefix")};function o(o){if(null===o||Dg(o))return n(o);const i=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}},partial:!0};const Yg={tokenize:function(e){const t=this,n=e.attempt(Jg,(function(r){if(null===r)return void e.consume(r);return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}),e.attempt(this.parser.constructs.flowInitial,r,qg(e,e.attempt(this.parser.constructs.flow,r,e.attempt(Qg,r)),"linePrefix")));return n;function r(r){if(null!==r)return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t.currentConstruct=void 0,n;e.consume(r)}}};const Zg={resolveAll:ny()},Xg=ty("string"),ey=ty("text");function ty(e){return{tokenize:function(t){const n=this,r=this.parser.constructs[e],o=t.attempt(r,i,a);return i;function i(e){return s(e)?o(e):a(e)}function a(e){if(null!==e)return t.enter("data"),t.consume(e),l;t.consume(e)}function l(e){return s(e)?(t.exit("data"),o(e)):(t.consume(e),l)}function s(e){if(null===e)return!0;const t=r[e];let o=-1;if(t)for(;++o<t.length;){const e=t[o];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}},resolveAll:ny("text"===e?ry:void 0)}}function ny(e){return function(t,n){let r,o=-1;for(;++o<=t.length;)void 0===r?t[o]&&"data"===t[o][1].type&&(r=o,o++):t[o]&&"data"===t[o][1].type||(o!==r+2&&(t[r][1].end=t[o-1][1].end,t.splice(r+2,o-r-2),o=r+2),r=void 0);return e?e(t,n):t}}function ry(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){const r=e[n-1][1],o=t.sliceStream(r);let i,a=o.length,l=-1,s=0;for(;a--;){const e=o[a];if("string"===typeof e){for(l=e.length;32===e.charCodeAt(l-1);)s++,l--;if(l)break;l=-1}else if(-2===e)i=!0,s++;else if(-1!==e){a++;break}}if(s){const o={type:n===e.length||i||s<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-s,offset:r.end.offset-s,_index:r.start._index+a,_bufferIndex:a?l:r.start._bufferIndex+l},end:Object.assign({},r.end)};r.end=Object.assign({},o.start),r.start.offset===r.end.offset?Object.assign(r,o):(e.splice(n,0,["enter",o,t],["exit",o,t]),n+=2)}n++}return e}function oy(e,t,n){const r=[];let o=-1;for(;++o<e.length;){const i=e[o].resolveAll;i&&!r.includes(i)&&(t=i(t,n),r.push(i))}return t}function iy(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const o={},i=[];let a=[],l=[],s=!0;const c={consume:function(e){Dg(e)?(r.line++,r.column=1,r.offset+=-3===e?2:1,b()):-1!==e&&(r.column++,r.offset++);r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++));u.previous=e,s=!0},enter:function(e,t){const n=t||{};return n.type=e,n.start=h(),u.events.push(["enter",n,u]),l.push(n),n},exit:function(e){const t=l.pop();return t.end=h(),u.events.push(["exit",t,u]),t},attempt:x((function(e,t){v(e,t.from)})),check:x(y),interrupt:x(y,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:f,sliceSerialize:function(e,t){return function(e,t){let n=-1;const r=[];let o;for(;++n<e.length;){const i=e[n];let a;if("string"===typeof i)a=i;else switch(i){case-5:a="\r";break;case-4:a="\n";break;case-3:a="\r\n";break;case-2:a=t?" ":"\t";break;case-1:if(!t&&o)continue;a=" ";break;default:a=String.fromCharCode(i)}o=-2===i,r.push(a)}return r.join("")}(f(e),t)},now:h,defineSkip:function(e){o[e.line]=e.column,b()},write:function(e){if(a=Sg(a,e),m(),null!==a[a.length-1])return[];return v(t,0),u.events=oy(i,u.events,u),u.events}};let d,p=t.tokenize.call(u,c);return t.resolveAll&&i.push(t),u;function f(e){return function(e,t){const n=t.start._index,r=t.start._bufferIndex,o=t.end._index,i=t.end._bufferIndex;let a;if(n===o)a=[e[n].slice(r,i)];else{if(a=e.slice(n,o),r>-1){const e=a[0];"string"===typeof e?a[0]=e.slice(r):a.shift()}i>0&&a.push(e[o].slice(0,i))}return a}(a,e)}function h(){const{line:e,column:t,offset:n,_index:o,_bufferIndex:i}=r;return{line:e,column:t,offset:n,_index:o,_bufferIndex:i}}function m(){let e;for(;r._index<a.length;){const t=a[r._index];if("string"===typeof t)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)g(t.charCodeAt(r._bufferIndex));else g(t)}}function g(e){s=void 0,d=e,p=p(e)}function y(e,t){t.restore()}function x(e,t){return function(n,o,i){let a,d,p,f;return Array.isArray(n)?m(n):"tokenize"in n?m([n]):function(e){return t;function t(t){const n=null!==t&&e[t],r=null!==t&&e.null;return m([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}(n);function m(e){return a=e,d=0,0===e.length?i:g(e[d])}function g(e){return function(n){f=function(){const e=h(),t=u.previous,n=u.currentConstruct,o=u.events.length,i=Array.from(l);return{restore:a,from:o};function a(){r=e,u.previous=t,u.currentConstruct=n,u.events.length=o,l=i,b()}}(),p=e,e.partial||(u.currentConstruct=e);if(e.name&&u.parser.constructs.disable.null.includes(e.name))return x(n);return e.tokenize.call(t?Object.assign(Object.create(u),t):u,c,y,x)(n)}}function y(t){return s=!0,e(p,f),o}function x(e){return s=!0,f.restore(),++d<a.length?g(a[d]):i}}}function v(e,t){e.resolveAll&&!i.includes(e)&&i.push(e),e.resolve&&kg(u.events,t,u.events.length-t,e.resolve(u.events.slice(t),u)),e.resolveTo&&(u.events=e.resolveTo(u.events,u))}function b(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}const ay={name:"thematicBreak",tokenize:function(e,t,n){let r,o=0;return function(t){return e.enter("thematicBreak"),function(e){return r=e,i(e)}(t)};function i(i){return i===r?(e.enter("thematicBreakSequence"),a(i)):o>=3&&(null===i||Dg(i))?(e.exit("thematicBreak"),t(i)):n(i)}function a(t){return t===r?(e.consume(t),o++,a):(e.exit("thematicBreakSequence"),Bg(t)?qg(e,i,"whitespace")(t):i(t))}}};const ly={name:"list",tokenize:function(e,t,n){const r=this,o=r.events[r.events.length-1];let i=o&&"linePrefix"===o[1].type?o[2].sliceSerialize(o[1],!0).length:0,a=0;return function(t){const o=r.containerState.type||(42===t||43===t||45===t?"listUnordered":"listOrdered");if("listUnordered"===o?!r.containerState.marker||t===r.containerState.marker:Lg(t)){if(r.containerState.type||(r.containerState.type=o,e.enter(o,{_container:!0})),"listUnordered"===o)return e.enter("listItemPrefix"),42===t||45===t?e.check(ay,n,s)(t):s(t);if(!r.interrupt||49===t)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(t)}return n(t)};function l(t){return Lg(t)&&++a<10?(e.consume(t),l):(!r.interrupt||a<2)&&(r.containerState.marker?t===r.containerState.marker:41===t||46===t)?(e.exit("listItemValue"),s(t)):n(t)}function s(t){return e.enter("listItemMarker"),e.consume(t),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||t,e.check(Jg,r.interrupt?n:c,e.attempt(sy,d,u))}function c(e){return r.containerState.initialBlankLine=!0,i++,d(e)}function u(t){return Bg(t)?(e.enter("listItemPrefixWhitespace"),e.consume(t),e.exit("listItemPrefixWhitespace"),d):n(t)}function d(n){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(n)}},continuation:{tokenize:function(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Jg,o,i);function o(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,qg(e,t,"listItemIndent",r.containerState.size+1)(n)}function i(n){return r.containerState.furtherBlankLines||!Bg(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(cy,t,a)(n))}function a(o){return r.containerState._closeFlow=!0,r.interrupt=void 0,qg(e,e.attempt(ly,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}},exit:function(e){e.exit(this.containerState.type)}},sy={tokenize:function(e,t,n){const r=this;return qg(e,(function(e){const o=r.events[r.events.length-1];return!Bg(e)&&o&&"listItemPrefixWhitespace"===o[1].type?t(e):n(e)}),"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5)},partial:!0},cy={tokenize:function(e,t,n){const r=this;return qg(e,(function(e){const o=r.events[r.events.length-1];return o&&"listItemIndent"===o[1].type&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(e):n(e)}),"listItemIndent",r.containerState.size+1)},partial:!0};const uy={name:"blockQuote",tokenize:function(e,t,n){const r=this;return function(t){if(62===t){const n=r.containerState;return n.open||(e.enter("blockQuote",{_container:!0}),n.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(t),e.exit("blockQuoteMarker"),o}return n(t)};function o(n){return Bg(n)?(e.enter("blockQuotePrefixWhitespace"),e.consume(n),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(n))}},continuation:{tokenize:function(e,t,n){const r=this;return function(t){if(Bg(t))return qg(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t);return o(t)};function o(r){return e.attempt(uy,t,n)(r)}}},exit:function(e){e.exit("blockQuote")}};function dy(e,t,n,r,o,i,a,l,s){const c=s||Number.POSITIVE_INFINITY;let u=0;return function(t){if(60===t)return e.enter(r),e.enter(o),e.enter(i),e.consume(t),e.exit(i),d;if(null===t||32===t||41===t||Ig(t))return n(t);return e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),h(t)};function d(n){return 62===n?(e.enter(i),e.consume(n),e.exit(i),e.exit(o),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(n))}function p(t){return 62===t?(e.exit("chunkString"),e.exit(l),d(t)):null===t||60===t||Dg(t)?n(t):(e.consume(t),92===t?f:p)}function f(t){return 60===t||62===t||92===t?(e.consume(t),p):p(t)}function h(o){return u||null!==o&&41!==o&&!_g(o)?u<c&&40===o?(e.consume(o),u++,h):41===o?(e.consume(o),u--,h):null===o||32===o||40===o||Ig(o)?n(o):(e.consume(o),92===o?m:h):(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(o))}function m(t){return 40===t||41===t||92===t?(e.consume(t),h):h(t)}}function py(e,t,n,r,o,i){const a=this;let l,s=0;return function(t){return e.enter(r),e.enter(o),e.consume(t),e.exit(o),e.enter(i),c};function c(d){return s>999||null===d||91===d||93===d&&!l||94===d&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?n(d):93===d?(e.exit(i),e.enter(o),e.consume(d),e.exit(o),e.exit(r),t):Dg(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),u(d))}function u(t){return null===t||91===t||93===t||Dg(t)||s++>999?(e.exit("chunkString"),c(t)):(e.consume(t),l||(l=!Bg(t)),92===t?d:u)}function d(t){return 91===t||92===t||93===t?(e.consume(t),s++,u):u(t)}}function fy(e,t,n,r,o,i){let a;return function(t){if(34===t||39===t||40===t)return e.enter(r),e.enter(o),e.consume(t),e.exit(o),a=40===t?41:t,l;return n(t)};function l(n){return n===a?(e.enter(o),e.consume(n),e.exit(o),e.exit(r),t):(e.enter(i),s(n))}function s(t){return t===a?(e.exit(i),l(a)):null===t?n(t):Dg(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),qg(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(t))}function c(t){return t===a||null===t||Dg(t)?(e.exit("chunkString"),s(t)):(e.consume(t),92===t?u:c)}function u(t){return t===a||92===t?(e.consume(t),c):c(t)}}function hy(e,t){let n;return function r(o){if(Dg(o))return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n=!0,r;if(Bg(o))return qg(e,r,n?"linePrefix":"lineSuffix")(o);return t(o)}}function my(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const gy={name:"definition",tokenize:function(e,t,n){const r=this;let o;return function(t){return e.enter("definition"),function(t){return py.call(r,e,i,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(t)}(t)};function i(t){return o=my(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),a):n(t)}function a(t){return _g(t)?hy(e,l)(t):l(t)}function l(t){return dy(e,s,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(t)}function s(t){return e.attempt(yy,c,c)(t)}function c(t){return Bg(t)?qg(e,u,"whitespace")(t):u(t)}function u(i){return null===i||Dg(i)?(e.exit("definition"),r.parser.defined.push(o),t(i)):n(i)}}},yy={tokenize:function(e,t,n){return function(t){return _g(t)?hy(e,r)(t):n(t)};function r(t){return fy(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(t)}function o(t){return Bg(t)?qg(e,i,"whitespace")(t):i(t)}function i(e){return null===e||Dg(e)?t(e):n(e)}},partial:!0};const xy={name:"codeIndented",tokenize:function(e,t,n){const r=this;return function(t){return e.enter("codeIndented"),qg(e,o,"linePrefix",5)(t)};function o(e){const t=r.events[r.events.length-1];return t&&"linePrefix"===t[1].type&&t[2].sliceSerialize(t[1],!0).length>=4?i(e):n(e)}function i(t){return null===t?l(t):Dg(t)?e.attempt(vy,i,l)(t):(e.enter("codeFlowValue"),a(t))}function a(t){return null===t||Dg(t)?(e.exit("codeFlowValue"),i(t)):(e.consume(t),a)}function l(n){return e.exit("codeIndented"),t(n)}}},vy={tokenize:function(e,t,n){const r=this;return o;function o(t){return r.parser.lazy[r.now().line]?n(t):Dg(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),o):qg(e,i,"linePrefix",5)(t)}function i(e){const i=r.events[r.events.length-1];return i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?t(e):Dg(e)?o(e):n(e)}},partial:!0};const by={name:"headingAtx",tokenize:function(e,t,n){let r=0;return function(t){return e.enter("atxHeading"),function(t){return e.enter("atxHeadingSequence"),o(t)}(t)};function o(t){return 35===t&&r++<6?(e.consume(t),o):null===t||_g(t)?(e.exit("atxHeadingSequence"),i(t)):n(t)}function i(n){return 35===n?(e.enter("atxHeadingSequence"),a(n)):null===n||Dg(n)?(e.exit("atxHeading"),t(n)):Bg(n)?qg(e,i,"whitespace")(n):(e.enter("atxHeadingText"),l(n))}function a(t){return 35===t?(e.consume(t),a):(e.exit("atxHeadingSequence"),i(t))}function l(t){return null===t||35===t||_g(t)?(e.exit("atxHeadingText"),i(t)):(e.consume(t),l)}},resolve:function(e,t){let n,r,o=e.length-2,i=3;"whitespace"===e[i][1].type&&(i+=2);o-2>i&&"whitespace"===e[o][1].type&&(o-=2);"atxHeadingSequence"===e[o][1].type&&(i===o-1||o-4>i&&"whitespace"===e[o-2][1].type)&&(o-=i+1===o?2:4);o>i&&(n={type:"atxHeadingText",start:e[i][1].start,end:e[o][1].end},r={type:"chunkText",start:e[i][1].start,end:e[o][1].end,contentType:"text"},kg(e,i,o-i+1,[["enter",n,t],["enter",r,t],["exit",r,t],["exit",n,t]]));return e}};const wy={name:"setextUnderline",tokenize:function(e,t,n){const r=this;let o;return function(t){let a,l=r.events.length;for(;l--;)if("lineEnding"!==r.events[l][1].type&&"linePrefix"!==r.events[l][1].type&&"content"!==r.events[l][1].type){a="paragraph"===r.events[l][1].type;break}if(!r.parser.lazy[r.now().line]&&(r.interrupt||a))return e.enter("setextHeadingLine"),o=t,function(t){return e.enter("setextHeadingLineSequence"),i(t)}(t);return n(t)};function i(t){return t===o?(e.consume(t),i):(e.exit("setextHeadingLineSequence"),Bg(t)?qg(e,a,"lineSuffix")(t):a(t))}function a(r){return null===r||Dg(r)?(e.exit("setextHeadingLine"),t(r)):n(r)}},resolveTo:function(e,t){let n,r,o,i=e.length;for(;i--;)if("enter"===e[i][0]){if("content"===e[i][1].type){n=i;break}"paragraph"===e[i][1].type&&(r=i)}else"content"===e[i][1].type&&e.splice(i,1),o||"definition"!==e[i][1].type||(o=i);const a={type:"setextHeading",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)};e[r][1].type="setextHeadingText",o?(e.splice(r,0,["enter",a,t]),e.splice(o+1,0,["exit",e[n][1],t]),e[n][1].end=Object.assign({},e[o][1].end)):e[n][1]=a;return e.push(["exit",a,t]),e}};const ky=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Sy=["pre","script","style","textarea"],jy={name:"htmlFlow",tokenize:function(e,t,n){const r=this;let o,i,a,l,s;return function(t){return function(t){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(t),c}(t)};function c(l){return 33===l?(e.consume(l),u):47===l?(e.consume(l),i=!0,f):63===l?(e.consume(l),o=3,r.interrupt?t:I):Tg(l)?(e.consume(l),a=String.fromCharCode(l),h):n(l)}function u(i){return 45===i?(e.consume(i),o=2,d):91===i?(e.consume(i),o=5,l=0,p):Tg(i)?(e.consume(i),o=4,r.interrupt?t:I):n(i)}function d(o){return 45===o?(e.consume(o),r.interrupt?t:I):n(o)}function p(o){const i="CDATA[";return o===i.charCodeAt(l++)?(e.consume(o),6===l?r.interrupt?t:E:p):n(o)}function f(t){return Tg(t)?(e.consume(t),a=String.fromCharCode(t),h):n(t)}function h(l){if(null===l||47===l||62===l||_g(l)){const s=47===l,c=a.toLowerCase();return s||i||!Sy.includes(c)?ky.includes(a.toLowerCase())?(o=6,s?(e.consume(l),m):r.interrupt?t(l):E(l)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(l):i?g(l):y(l)):(o=1,r.interrupt?t(l):E(l))}return 45===l||zg(l)?(e.consume(l),a+=String.fromCharCode(l),h):n(l)}function m(o){return 62===o?(e.consume(o),r.interrupt?t:E):n(o)}function g(t){return Bg(t)?(e.consume(t),g):j(t)}function y(t){return 47===t?(e.consume(t),j):58===t||95===t||Tg(t)?(e.consume(t),x):Bg(t)?(e.consume(t),y):j(t)}function x(t){return 45===t||46===t||58===t||95===t||zg(t)?(e.consume(t),x):v(t)}function v(t){return 61===t?(e.consume(t),b):Bg(t)?(e.consume(t),v):y(t)}function b(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),s=t,w):Bg(t)?(e.consume(t),b):k(t)}function w(t){return t===s?(e.consume(t),s=null,S):null===t||Dg(t)?n(t):(e.consume(t),w)}function k(t){return null===t||34===t||39===t||47===t||60===t||61===t||62===t||96===t||_g(t)?v(t):(e.consume(t),k)}function S(e){return 47===e||62===e||Bg(e)?y(e):n(e)}function j(t){return 62===t?(e.consume(t),C):n(t)}function C(t){return null===t||Dg(t)?E(t):Bg(t)?(e.consume(t),C):n(t)}function E(t){return 45===t&&2===o?(e.consume(t),A):60===t&&1===o?(e.consume(t),T):62===t&&4===o?(e.consume(t),L):63===t&&3===o?(e.consume(t),I):93===t&&5===o?(e.consume(t),M):!Dg(t)||6!==o&&7!==o?null===t||Dg(t)?(e.exit("htmlFlowData"),O(t)):(e.consume(t),E):(e.exit("htmlFlowData"),e.check(Cy,N,O)(t))}function O(t){return e.check(Ey,R,N)(t)}function R(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),P}function P(t){return null===t||Dg(t)?O(t):(e.enter("htmlFlowData"),E(t))}function A(t){return 45===t?(e.consume(t),I):E(t)}function T(t){return 47===t?(e.consume(t),a="",z):E(t)}function z(t){if(62===t){const n=a.toLowerCase();return Sy.includes(n)?(e.consume(t),L):E(t)}return Tg(t)&&a.length<8?(e.consume(t),a+=String.fromCharCode(t),z):E(t)}function M(t){return 93===t?(e.consume(t),I):E(t)}function I(t){return 62===t?(e.consume(t),L):45===t&&2===o?(e.consume(t),I):E(t)}function L(t){return null===t||Dg(t)?(e.exit("htmlFlowData"),N(t)):(e.consume(t),L)}function N(n){return e.exit("htmlFlow"),t(n)}},resolveTo:function(e){let t=e.length;for(;t--&&("enter"!==e[t][0]||"htmlFlow"!==e[t][1].type););t>1&&"linePrefix"===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2));return e},concrete:!0},Cy={tokenize:function(e,t,n){return function(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(Jg,t,n)}},partial:!0},Ey={tokenize:function(e,t,n){const r=this;return function(t){if(Dg(t))return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),o;return n(t)};function o(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0};const Oy={tokenize:function(e,t,n){const r=this;return function(t){if(null===t)return n(t);return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),o};function o(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0},Ry={name:"codeFenced",tokenize:function(e,t,n){const r=this,o={tokenize:function(e,t,n){let o=0;return a;function a(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),s}function s(t){return e.enter("codeFencedFence"),Bg(t)?qg(e,c,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):c(t)}function c(t){return t===i?(e.enter("codeFencedFenceSequence"),u(t)):n(t)}function u(t){return t===i?(o++,e.consume(t),u):o>=l?(e.exit("codeFencedFenceSequence"),Bg(t)?qg(e,d,"whitespace")(t):d(t)):n(t)}function d(r){return null===r||Dg(r)?(e.exit("codeFencedFence"),t(r)):n(r)}},partial:!0};let i,a=0,l=0;return function(t){return function(t){const n=r.events[r.events.length-1];return a=n&&"linePrefix"===n[1].type?n[2].sliceSerialize(n[1],!0).length:0,i=t,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),s(t)}(t)};function s(t){return t===i?(l++,e.consume(t),s):l<3?n(t):(e.exit("codeFencedFenceSequence"),Bg(t)?qg(e,c,"whitespace")(t):c(t))}function c(n){return null===n||Dg(n)?(e.exit("codeFencedFence"),r.interrupt?t(n):e.check(Oy,f,x)(n)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),u(n))}function u(t){return null===t||Dg(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(t)):Bg(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),qg(e,d,"whitespace")(t)):96===t&&t===i?n(t):(e.consume(t),u)}function d(t){return null===t||Dg(t)?c(t):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),p(t))}function p(t){return null===t||Dg(t)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(t)):96===t&&t===i?n(t):(e.consume(t),p)}function f(t){return e.attempt(o,x,h)(t)}function h(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),m}function m(t){return a>0&&Bg(t)?qg(e,g,"linePrefix",a+1)(t):g(t)}function g(t){return null===t||Dg(t)?e.check(Oy,f,x)(t):(e.enter("codeFlowValue"),y(t))}function y(t){return null===t||Dg(t)?(e.exit("codeFlowValue"),g(t)):(e.consume(t),y)}function x(n){return e.exit("codeFenced"),t(n)}},concrete:!0};const Py=document.createElement("i");function Ay(e){const t="&"+e+";";Py.innerHTML=t;const n=Py.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&(n!==t&&n)}const Ty={name:"characterReference",tokenize:function(e,t,n){const r=this;let o,i,a=0;return function(t){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(t),e.exit("characterReferenceMarker"),l};function l(t){return 35===t?(e.enter("characterReferenceMarkerNumeric"),e.consume(t),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),o=31,i=zg,c(t))}function s(t){return 88===t||120===t?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(t),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,i=Ng,c):(e.enter("characterReferenceValue"),o=7,i=Lg,c(t))}function c(l){if(59===l&&a){const o=e.exit("characterReferenceValue");return i!==zg||Ay(r.sliceSerialize(o))?(e.enter("characterReferenceMarker"),e.consume(l),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):n(l)}return i(l)&&a++<o?(e.consume(l),c):n(l)}}};const zy={name:"characterEscape",tokenize:function(e,t,n){return function(t){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(t),e.exit("escapeMarker"),r};function r(r){return Fg(r)?(e.enter("characterEscapeValue"),e.consume(r),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(r)}}};const My={name:"lineEnding",tokenize:function(e,t){return function(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),qg(e,t,"linePrefix")}}};const Iy={name:"labelEnd",tokenize:function(e,t,n){const r=this;let o,i,a=r.events.length;for(;a--;)if(("labelImage"===r.events[a][1].type||"labelLink"===r.events[a][1].type)&&!r.events[a][1]._balanced){o=r.events[a][1];break}return function(t){if(!o)return n(t);if(o._inactive)return u(t);return i=r.parser.defined.includes(my(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelEnd"),l};function l(t){return 40===t?e.attempt(Ly,c,i?c:u)(t):91===t?e.attempt(Ny,c,i?s:u)(t):i?c(t):u(t)}function s(t){return e.attempt(Fy,c,u)(t)}function c(e){return t(e)}function u(e){return o._balanced=!0,n(e)}},resolveTo:function(e,t){let n,r,o,i,a=e.length,l=0;for(;a--;)if(n=e[a][1],r){if("link"===n.type||"labelLink"===n.type&&n._inactive)break;"enter"===e[a][0]&&"labelLink"===n.type&&(n._inactive=!0)}else if(o){if("enter"===e[a][0]&&("labelImage"===n.type||"labelLink"===n.type)&&!n._balanced&&(r=a,"labelLink"!==n.type)){l=2;break}}else"labelEnd"===n.type&&(o=a);const s={type:"labelLink"===e[r][1].type?"link":"image",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)},c={type:"label",start:Object.assign({},e[r][1].start),end:Object.assign({},e[o][1].end)},u={type:"labelText",start:Object.assign({},e[r+l+2][1].end),end:Object.assign({},e[o-2][1].start)};return i=[["enter",s,t],["enter",c,t]],i=Sg(i,e.slice(r+1,r+l+3)),i=Sg(i,[["enter",u,t]]),i=Sg(i,oy(t.parser.constructs.insideSpan.null,e.slice(r+l+4,o-3),t)),i=Sg(i,[["exit",u,t],e[o-2],e[o-1],["exit",c,t]]),i=Sg(i,e.slice(o+1)),i=Sg(i,[["exit",s,t]]),kg(e,r,e.length,i),e},resolveAll:function(e){let t=-1;for(;++t<e.length;){const n=e[t][1];"labelImage"!==n.type&&"labelLink"!==n.type&&"labelEnd"!==n.type||(e.splice(t+1,"labelImage"===n.type?4:2),n.type="data",t++)}return e}},Ly={tokenize:function(e,t,n){return function(t){return e.enter("resource"),e.enter("resourceMarker"),e.consume(t),e.exit("resourceMarker"),r};function r(t){return _g(t)?hy(e,o)(t):o(t)}function o(t){return 41===t?c(t):dy(e,i,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(t)}function i(t){return _g(t)?hy(e,l)(t):c(t)}function a(e){return n(e)}function l(t){return 34===t||39===t||40===t?fy(e,s,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(t):c(t)}function s(t){return _g(t)?hy(e,c)(t):c(t)}function c(r){return 41===r?(e.enter("resourceMarker"),e.consume(r),e.exit("resourceMarker"),e.exit("resource"),t):n(r)}}},Ny={tokenize:function(e,t,n){const r=this;return function(t){return py.call(r,e,o,i,"reference","referenceMarker","referenceString")(t)};function o(e){return r.parser.defined.includes(my(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function i(e){return n(e)}}},Fy={tokenize:function(e,t,n){return function(t){return e.enter("reference"),e.enter("referenceMarker"),e.consume(t),e.exit("referenceMarker"),r};function r(r){return 93===r?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),t):n(r)}}};const Dy={name:"labelStartImage",tokenize:function(e,t,n){const r=this;return function(t){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(t),e.exit("labelImageMarker"),o};function o(t){return 91===t?(e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelImage"),i):n(t)}function i(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}},resolveAll:Iy.resolveAll};function _y(e){return null===e||_g(e)||Wg(e)?1:Hg(e)?2:void 0}const By={name:"attention",tokenize:function(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,o=_y(r);let i;return function(t){return i=t,e.enter("attentionSequence"),a(t)};function a(l){if(l===i)return e.consume(l),a;const s=e.exit("attentionSequence"),c=_y(l),u=!c||2===c&&o||n.includes(l),d=!o||2===o&&c||n.includes(r);return s._open=Boolean(42===i?u:u&&(o||!d)),s._close=Boolean(42===i?d:d&&(c||!u)),t(l)}},resolveAll:function(e,t){let n,r,o,i,a,l,s,c,u=-1;for(;++u<e.length;)if("enter"===e[u][0]&&"attentionSequence"===e[u][1].type&&e[u][1]._close)for(n=u;n--;)if("exit"===e[n][0]&&"attentionSequence"===e[n][1].type&&e[n][1]._open&&t.sliceSerialize(e[n][1]).charCodeAt(0)===t.sliceSerialize(e[u][1]).charCodeAt(0)){if((e[n][1]._close||e[u][1]._open)&&(e[u][1].end.offset-e[u][1].start.offset)%3&&!((e[n][1].end.offset-e[n][1].start.offset+e[u][1].end.offset-e[u][1].start.offset)%3))continue;l=e[n][1].end.offset-e[n][1].start.offset>1&&e[u][1].end.offset-e[u][1].start.offset>1?2:1;const d=Object.assign({},e[n][1].end),p=Object.assign({},e[u][1].start);Hy(d,-l),Hy(p,l),i={type:l>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[n][1].end)},a={type:l>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[u][1].start),end:p},o={type:l>1?"strongText":"emphasisText",start:Object.assign({},e[n][1].end),end:Object.assign({},e[u][1].start)},r={type:l>1?"strong":"emphasis",start:Object.assign({},i.start),end:Object.assign({},a.end)},e[n][1].end=Object.assign({},i.start),e[u][1].start=Object.assign({},a.end),s=[],e[n][1].end.offset-e[n][1].start.offset&&(s=Sg(s,[["enter",e[n][1],t],["exit",e[n][1],t]])),s=Sg(s,[["enter",r,t],["enter",i,t],["exit",i,t],["enter",o,t]]),s=Sg(s,oy(t.parser.constructs.insideSpan.null,e.slice(n+1,u),t)),s=Sg(s,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",r,t]]),e[u][1].end.offset-e[u][1].start.offset?(c=2,s=Sg(s,[["enter",e[u][1],t],["exit",e[u][1],t]])):c=0,kg(e,n-1,u-n+3,s),u=n+s.length-c-2;break}u=-1;for(;++u<e.length;)"attentionSequence"===e[u][1].type&&(e[u][1].type="data");return e}};function Hy(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Wy={name:"autolink",tokenize:function(e,t,n){let r=0;return function(t){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o};function o(t){return Tg(t)?(e.consume(t),i):64===t?n(t):s(t)}function i(e){return 43===e||45===e||46===e||zg(e)?(r=1,a(e)):s(e)}function a(t){return 58===t?(e.consume(t),r=0,l):(43===t||45===t||46===t||zg(t))&&r++<32?(e.consume(t),a):(r=0,s(t))}function l(r){return 62===r?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(r),e.exit("autolinkMarker"),e.exit("autolink"),t):null===r||32===r||60===r||Ig(r)?n(r):(e.consume(r),l)}function s(t){return 64===t?(e.consume(t),c):Mg(t)?(e.consume(t),s):n(t)}function c(e){return zg(e)?u(e):n(e)}function u(n){return 46===n?(e.consume(n),r=0,c):62===n?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(n),e.exit("autolinkMarker"),e.exit("autolink"),t):d(n)}function d(t){if((45===t||zg(t))&&r++<63){const n=45===t?d:u;return e.consume(t),n}return n(t)}}};const Uy={name:"htmlText",tokenize:function(e,t,n){const r=this;let o,i,a;return function(t){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(t),l};function l(t){return 33===t?(e.consume(t),s):47===t?(e.consume(t),b):63===t?(e.consume(t),x):Tg(t)?(e.consume(t),S):n(t)}function s(t){return 45===t?(e.consume(t),c):91===t?(e.consume(t),i=0,f):Tg(t)?(e.consume(t),y):n(t)}function c(t){return 45===t?(e.consume(t),p):n(t)}function u(t){return null===t?n(t):45===t?(e.consume(t),d):Dg(t)?(a=u,z(t)):(e.consume(t),u)}function d(t){return 45===t?(e.consume(t),p):u(t)}function p(e){return 62===e?T(e):45===e?d(e):u(e)}function f(t){const r="CDATA[";return t===r.charCodeAt(i++)?(e.consume(t),6===i?h:f):n(t)}function h(t){return null===t?n(t):93===t?(e.consume(t),m):Dg(t)?(a=h,z(t)):(e.consume(t),h)}function m(t){return 93===t?(e.consume(t),g):h(t)}function g(t){return 62===t?T(t):93===t?(e.consume(t),g):h(t)}function y(t){return null===t||62===t?T(t):Dg(t)?(a=y,z(t)):(e.consume(t),y)}function x(t){return null===t?n(t):63===t?(e.consume(t),v):Dg(t)?(a=x,z(t)):(e.consume(t),x)}function v(e){return 62===e?T(e):x(e)}function b(t){return Tg(t)?(e.consume(t),w):n(t)}function w(t){return 45===t||zg(t)?(e.consume(t),w):k(t)}function k(t){return Dg(t)?(a=k,z(t)):Bg(t)?(e.consume(t),k):T(t)}function S(t){return 45===t||zg(t)?(e.consume(t),S):47===t||62===t||_g(t)?j(t):n(t)}function j(t){return 47===t?(e.consume(t),T):58===t||95===t||Tg(t)?(e.consume(t),C):Dg(t)?(a=j,z(t)):Bg(t)?(e.consume(t),j):T(t)}function C(t){return 45===t||46===t||58===t||95===t||zg(t)?(e.consume(t),C):E(t)}function E(t){return 61===t?(e.consume(t),O):Dg(t)?(a=E,z(t)):Bg(t)?(e.consume(t),E):j(t)}function O(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),o=t,R):Dg(t)?(a=O,z(t)):Bg(t)?(e.consume(t),O):(e.consume(t),P)}function R(t){return t===o?(e.consume(t),o=void 0,A):null===t?n(t):Dg(t)?(a=R,z(t)):(e.consume(t),R)}function P(t){return null===t||34===t||39===t||60===t||61===t||96===t?n(t):47===t||62===t||_g(t)?j(t):(e.consume(t),P)}function A(e){return 47===e||62===e||_g(e)?j(e):n(e)}function T(r){return 62===r?(e.consume(r),e.exit("htmlTextData"),e.exit("htmlText"),t):n(r)}function z(t){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),M}function M(t){return Bg(t)?qg(e,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):I(t)}function I(t){return e.enter("htmlTextData"),a(t)}}};const qy={name:"labelStartLink",tokenize:function(e,t,n){const r=this;return function(t){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelLink"),o};function o(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}},resolveAll:Iy.resolveAll};const Vy={name:"hardBreakEscape",tokenize:function(e,t,n){return function(t){return e.enter("hardBreakEscape"),e.consume(t),r};function r(r){return Dg(r)?(e.exit("hardBreakEscape"),t(r)):n(r)}}};const Gy={name:"codeText",tokenize:function(e,t,n){let r,o,i=0;return function(t){return e.enter("codeText"),e.enter("codeTextSequence"),a(t)};function a(t){return 96===t?(e.consume(t),i++,a):(e.exit("codeTextSequence"),l(t))}function l(t){return null===t?n(t):32===t?(e.enter("space"),e.consume(t),e.exit("space"),l):96===t?(o=e.enter("codeTextSequence"),r=0,c(t)):Dg(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l):(e.enter("codeTextData"),s(t))}function s(t){return null===t||32===t||96===t||Dg(t)?(e.exit("codeTextData"),l(t)):(e.consume(t),s)}function c(n){return 96===n?(e.consume(n),r++,c):r===i?(e.exit("codeTextSequence"),e.exit("codeText"),t(n)):(o.type="codeTextData",s(n))}},resolve:function(e){let t,n,r=e.length-4,o=3;if(("lineEnding"===e[o][1].type||"space"===e[o][1].type)&&("lineEnding"===e[r][1].type||"space"===e[r][1].type))for(t=o;++t<r;)if("codeTextData"===e[t][1].type){e[o][1].type="codeTextPadding",e[r][1].type="codeTextPadding",o+=2,r-=2;break}t=o-1,r++;for(;++t<=r;)void 0===n?t!==r&&"lineEnding"!==e[t][1].type&&(n=t):t!==r&&"lineEnding"!==e[t][1].type||(e[n][1].type="codeTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e},previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type}};const Ky={42:ly,43:ly,45:ly,48:ly,49:ly,50:ly,51:ly,52:ly,53:ly,54:ly,55:ly,56:ly,57:ly,62:uy},Jy={91:gy},Qy={[-2]:xy,[-1]:xy,32:xy},$y={35:by,42:ay,45:[wy,ay],60:jy,61:wy,95:ay,96:Ry,126:Ry},Yy={38:Ty,92:zy},Zy={[-5]:My,[-4]:My,[-3]:My,33:Dy,38:Ty,42:By,60:[Wy,Uy],91:qy,92:[Vy,zy],93:Iy,95:By,96:Gy},Xy={null:[By,Zg]},ex={null:[42,95]},tx={null:[]};function nx(e){const t=function(e){const t={};let n=-1;for(;++n<e.length;)Pg(t,e[n]);return t}([r,...(e||{}).extensions||[]]),n={defined:[],lazy:{},constructs:t,content:o(Vg),document:o(Gg),flow:o(Yg),string:o(Xg),text:o(ey)};return n;function o(e){return function(t){return iy(n,e,t)}}}const rx=/[\0\t\n\r]/g;function ox(e,t){const n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||65535===(65535&n)||65534===(65535&n)||n>1114111?"\ufffd":String.fromCodePoint(n)}const ix=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ax(e,t,n){if(t)return t;if(35===n.charCodeAt(0)){const e=n.charCodeAt(1),t=120===e||88===e;return ox(n.slice(t?2:1),t?16:10)}return Ay(n)||e}const lx={}.hasOwnProperty;function sx(e,t,n){return"string"!==typeof t&&(n=t,t=void 0),function(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(te),autolinkProtocol:C,autolinkEmail:C,atxHeading:i(Y),blockQuote:i(G),characterEscape:C,characterReference:C,codeFenced:i(K),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:i(K,a),codeText:i(J,a),codeTextData:C,data:C,codeFlowValue:C,definition:i(Q),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:i($),hardBreakEscape:i(Z),hardBreakTrailing:i(Z),htmlFlow:i(X,a),htmlFlowData:C,htmlText:i(X,a),htmlTextData:C,image:i(ee),label:a,link:i(te),listItem:i(re),listItemValue:p,listOrdered:i(ne,d),listUnordered:i(ne),paragraph:i(oe),reference:_,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:i(Y),strong:i(ie),thematicBreak:i(le)},exit:{atxHeading:s(),atxHeadingSequence:w,autolink:s(),autolinkEmail:V,autolinkProtocol:q,blockQuote:s(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:H,characterReferenceMarkerNumeric:H,characterReferenceValue:W,characterReference:U,codeFenced:s(g),codeFencedFence:m,codeFencedFenceInfo:f,codeFencedFenceMeta:h,codeFlowValue:E,codeIndented:s(y),codeText:s(T),codeTextData:E,data:E,definition:s(),definitionDestinationString:b,definitionLabelString:x,definitionTitleString:v,emphasis:s(),hardBreakEscape:s(R),hardBreakTrailing:s(R),htmlFlow:s(P),htmlFlowData:E,htmlText:s(A),htmlTextData:E,image:s(M),label:L,labelText:I,lineEnding:O,link:s(z),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:B,resourceDestinationString:N,resourceTitleString:F,resource:D,setextHeading:s(j),setextHeadingLineSequence:S,setextHeadingText:k,strong:s(),thematicBreak:s()}};ux(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(e){let r={type:"root",children:[]};const i={stack:[r],tokenStack:[],config:t,enter:l,exit:c,buffer:a,resume:u,data:n},s=[];let d=-1;for(;++d<e.length;)if("listOrdered"===e[d][1].type||"listUnordered"===e[d][1].type)if("enter"===e[d][0])s.push(d);else{d=o(e,s.pop(),d)}for(d=-1;++d<e.length;){const n=t[e[d][0]];lx.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},i),e[d][1])}if(i.tokenStack.length>0){const e=i.tokenStack[i.tokenStack.length-1];(e[1]||px).call(i,void 0,e[0])}for(r.position={start:cx(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:cx(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function o(e,t,n){let r,o,i,a,l=t-1,s=-1,c=!1;for(;++l<=n;){const t=e[l];switch(t[1].type){case"listUnordered":case"listOrdered":case"blockQuote":"enter"===t[0]?s++:s--,a=void 0;break;case"lineEndingBlank":"enter"===t[0]&&(!r||a||s||i||(i=l),a=void 0);break;case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:a=void 0}if(!s&&"enter"===t[0]&&"listItemPrefix"===t[1].type||-1===s&&"exit"===t[0]&&("listUnordered"===t[1].type||"listOrdered"===t[1].type)){if(r){let a=l;for(o=void 0;a--;){const t=e[a];if("lineEnding"===t[1].type||"lineEndingBlank"===t[1].type){if("exit"===t[0])continue;o&&(e[o][1].type="lineEndingBlank",c=!0),t[1].type="lineEnding",o=a}else if("linePrefix"!==t[1].type&&"blockQuotePrefix"!==t[1].type&&"blockQuotePrefixWhitespace"!==t[1].type&&"blockQuoteMarker"!==t[1].type&&"listItemIndent"!==t[1].type)break}i&&(!o||i<o)&&(r._spread=!0),r.end=Object.assign({},o?e[o][1].start:t[1].end),e.splice(o||l,0,["exit",r,t[2]]),l++,n++}if("listItemPrefix"===t[1].type){const o={type:"listItem",_spread:!1,start:Object.assign({},t[1].start),end:void 0};r=o,e.splice(l,0,["enter",o,t[2]]),l++,n++,i=void 0,a=!0}}}return e[t][1]._spread=c,n}function i(e,t){return n;function n(n){l.call(this,e(n),n),t&&t.call(this,n)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n]),e.position={start:cx(t.start),end:void 0}}function s(e){return t;function t(t){e&&e.call(this,t),c.call(this,t)}}function c(e,t){const n=this.stack.pop(),r=this.tokenStack.pop();if(!r)throw new Error("Cannot close `"+e.type+"` ("+Qm({start:e.start,end:e.end})+"): it\u2019s not open");if(r[0].type!==e.type)if(t)t.call(this,e,r[0]);else{(r[1]||px).call(this,e,r[0])}n.position.end=cx(e.end)}function u(){return function(e,t){const n=t||vg;return bg(e,"boolean"!==typeof n.includeImageAlt||n.includeImageAlt,"boolean"!==typeof n.includeHtml||n.includeHtml)}(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function p(e){if(this.data.expectingFirstListItemValue){this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function f(){const e=this.resume();this.stack[this.stack.length-1].lang=e}function h(){const e=this.resume();this.stack[this.stack.length-1].meta=e}function m(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){const e=this.resume();this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const e=this.resume();this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,"")}function x(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=my(this.sliceSerialize(e)).toLowerCase()}function v(){const e=this.resume();this.stack[this.stack.length-1].title=e}function b(){const e=this.resume();this.stack[this.stack.length-1].url=e}function w(e){const t=this.stack[this.stack.length-1];if(!t.depth){const n=this.sliceSerialize(e).length;t.depth=n}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function S(e){this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).codePointAt(0)?1:2}function j(){this.data.setextHeadingSlurpLineEnding=void 0}function C(e){const t=this.stack[this.stack.length-1].children;let n=t[t.length-1];n&&"text"===n.type||(n=ae(),n.position={start:cx(e.start),end:void 0},t.push(n)),this.stack.push(n)}function E(e){const t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=cx(e.end)}function O(e){const n=this.stack[this.stack.length-1];if(this.data.atHardBreak){return n.children[n.children.length-1].position.end=cx(e.end),void(this.data.atHardBreak=void 0)}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(C.call(this,e),E.call(this,e))}function R(){this.data.atHardBreak=!0}function P(){const e=this.resume();this.stack[this.stack.length-1].value=e}function A(){const e=this.resume();this.stack[this.stack.length-1].value=e}function T(){const e=this.resume();this.stack[this.stack.length-1].value=e}function z(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function M(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function I(e){const t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=function(e){return e.replace(ix,ax)}(t),n.identifier=my(t).toLowerCase()}function L(){const e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];if(this.data.inReference=!0,"link"===n.type){const t=e.children;n.children=t}else n.alt=t}function N(){const e=this.resume();this.stack[this.stack.length-1].url=e}function F(){const e=this.resume();this.stack[this.stack.length-1].title=e}function D(){this.data.inReference=void 0}function _(){this.data.referenceType="collapsed"}function B(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=my(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType="full"}function H(e){this.data.characterReferenceType=e.type}function W(e){const t=this.sliceSerialize(e),n=this.data.characterReferenceType;let r;if(n)r=ox(t,"characterReferenceMarkerNumeric"===n?10:16),this.data.characterReferenceType=void 0;else{r=Ay(t)}this.stack[this.stack.length-1].value+=r}function U(e){this.stack.pop().position.end=cx(e.end)}function q(e){E.call(this,e);this.stack[this.stack.length-1].url=this.sliceSerialize(e)}function V(e){E.call(this,e);this.stack[this.stack.length-1].url="mailto:"+this.sliceSerialize(e)}function G(){return{type:"blockquote",children:[]}}function K(){return{type:"code",lang:null,meta:null,value:""}}function J(){return{type:"inlineCode",value:""}}function Q(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function $(){return{type:"emphasis",children:[]}}function Y(){return{type:"heading",depth:0,children:[]}}function Z(){return{type:"break"}}function X(){return{type:"html",value:""}}function ee(){return{type:"image",title:null,url:"",alt:null}}function te(){return{type:"link",title:null,url:"",children:[]}}function ne(e){return{type:"list",ordered:"listOrdered"===e.type,start:null,spread:e._spread,children:[]}}function re(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}}function oe(){return{type:"paragraph",children:[]}}function ie(){return{type:"strong",children:[]}}function ae(){return{type:"text",value:""}}function le(){return{type:"thematicBreak"}}}(n)(function(e){for(;!Eg(e););return e}(nx(n).document().write(function(){let e,t=1,n="",r=!0;return function(o,i,a){const l=[];let s,c,u,d,p;for(o=n+("string"===typeof o?o.toString():new TextDecoder(i||void 0).decode(o)),u=0,n="",r&&(65279===o.charCodeAt(0)&&u++,r=void 0);u<o.length;){if(rx.lastIndex=u,s=rx.exec(o),d=s&&void 0!==s.index?s.index:o.length,p=o.charCodeAt(d),!s){n=o.slice(u);break}if(10===p&&u===d&&e)l.push(-3),e=void 0;else switch(e&&(l.push(-5),e=void 0),u<d&&(l.push(o.slice(u,d)),t+=d-u),p){case 0:l.push(65533),t++;break;case 9:for(c=4*Math.ceil(t/4),l.push(-2);t++<c;)l.push(-1);break;case 10:l.push(-4),t=1;break;default:e=!0,t=1}u=d+1}return a&&(e&&l.push(-5),n&&l.push(n),l.push(null)),l}}()(e,t,!0))))}function cx(e){return{line:e.line,column:e.column,offset:e.offset}}function ux(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?ux(e,r):dx(e,r)}}function dx(e,t){let n;for(n in t)if(lx.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function px(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Qm({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Qm({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Qm({start:t.start,end:t.end})+") is still open")}function fx(e){const t=this;t.parser=function(n){return sx(n,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}const hx="object"===typeof self?self:globalThis,mx=e=>((e,t)=>{const n=(t,n)=>(e.set(n,t),t),r=o=>{if(e.has(o))return e.get(o);const[i,a]=t[o];switch(i){case 0:case-1:return n(a,o);case 1:{const e=n([],o);for(const t of a)e.push(r(t));return e}case 2:{const e=n({},o);for(const[t,n]of a)e[r(t)]=r(n);return e}case 3:return n(new Date(a),o);case 4:{const{source:e,flags:t}=a;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,n]of a)e.set(r(t),r(n));return e}case 6:{const e=n(new Set,o);for(const t of a)e.add(r(t));return e}case 7:{const{name:e,message:t}=a;return n(new hx[e](t),o)}case 8:return n(BigInt(a),o);case"BigInt":return n(Object(BigInt(a)),o)}return n(new hx[i](a),o)};return r})(new Map,e)(0),gx="",{toString:yx}={},{keys:xx}=Object,vx=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const n=yx.call(e).slice(8,-1);switch(n){case"Array":return[1,gx];case"Object":return[2,gx];case"Date":return[3,gx];case"RegExp":return[4,gx];case"Map":return[5,gx];case"Set":return[6,gx]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},bx=e=>{let[t,n]=e;return 0===t&&("function"===n||"symbol"===n)},wx=function(e){let{json:t,lossy:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=[];return((e,t,n,r)=>{const o=(e,t)=>{const o=r.push(e)-1;return n.set(t,o),o},i=r=>{if(n.has(r))return n.get(r);let[a,l]=vx(r);switch(a){case 0:{let t=r;switch(l){case"bigint":a=8,t=r.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);t=null;break;case"undefined":return o([-1],r)}return o([a,t],r)}case 1:{if(l)return o([l,[...r]],r);const e=[],t=o([a,e],r);for(const n of r)e.push(i(n));return t}case 2:{if(l)switch(l){case"BigInt":return o([l,r.toString()],r);case"Boolean":case"Number":case"String":return o([l,r.valueOf()],r)}if(t&&"toJSON"in r)return i(r.toJSON());const n=[],s=o([a,n],r);for(const t of xx(r))!e&&bx(vx(r[t]))||n.push([i(t),i(r[t])]);return s}case 3:return o([a,r.toISOString()],r);case 4:{const{source:e,flags:t}=r;return o([a,{source:e,flags:t}],r)}case 5:{const t=[],n=o([a,t],r);for(const[o,a]of r)(e||!bx(vx(o))&&!bx(vx(a)))&&t.push([i(o),i(a)]);return n}case 6:{const t=[],n=o([a,t],r);for(const o of r)!e&&bx(vx(o))||t.push(i(o));return n}}const{message:s}=r;return o([a,{name:l,message:s}],r)};return i})(!(t||n),!!t,new Map,r)(e),r},kx="function"===typeof structuredClone?(e,t)=>t&&("json"in t||"lossy"in t)?mx(wx(e,t)):structuredClone(e):(e,t)=>mx(wx(e,t));function Sx(e){const t=[];let n=-1,r=0,o=0;for(;++n<e.length;){const i=e.charCodeAt(n);let a="";if(37===i&&zg(e.charCodeAt(n+1))&&zg(e.charCodeAt(n+2)))o=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(a=String.fromCharCode(i));else if(i>55295&&i<57344){const t=e.charCodeAt(n+1);i<56320&&t>56319&&t<57344?(a=String.fromCharCode(i,t),o=1):a="\ufffd"}else a=String.fromCharCode(i);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+o+1,a=""),o&&(n+=o,o=0)}return t.join("")+e.slice(r)}function jx(e,t){const n=[{type:"text",value:"\u21a9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Cx(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}const Ex=function(e){if(null===e||void 0===e)return Rx;if("function"===typeof e)return Ox(e);if("object"===typeof e)return Array.isArray(e)?function(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Ex(e[n]);return Ox(r);function r(){let e=-1;for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];for(;++e<t.length;)if(t[e].apply(this,r))return!0;return!1}}(e):function(e){const t=e;return Ox(n);function n(n){const r=n;let o;for(o in e)if(r[o]!==t[o])return!1;return!0}}(e);if("string"===typeof e)return function(e){return Ox(t);function t(t){return t&&t.type===e}}(e);throw new Error("Expected function, string, or object as test")};function Ox(e){return function(t,n,r){return Boolean(Px(t)&&e.call(this,t,"number"===typeof n?n:void 0,r||void 0))}}function Rx(){return!0}function Px(e){return null!==e&&"object"===typeof e&&"type"in e}const Ax=[],Tx=!0,zx=!1,Mx="skip";function Ix(e,t,n,r){let o;"function"===typeof t&&"function"!==typeof n?(r=n,n=t):o=t;const i=Ex(o),a=r?-1:1;!function e(o,l,s){const c=o&&"object"===typeof o?o:{};if("string"===typeof c.type){const e="string"===typeof c.tagName?c.tagName:"string"===typeof c.name?c.name:void 0;Object.defineProperty(u,"name",{value:"node ("+o.type+(e?"<"+e+">":"")+")"})}return u;function u(){let c,u,d,p=Ax;if((!t||i(o,l,s[s.length-1]||void 0))&&(p=function(e){if(Array.isArray(e))return e;if("number"===typeof e)return[Tx,e];return null===e||void 0===e?Ax:[e]}(n(o,s)),p[0]===zx))return p;if("children"in o&&o.children){const t=o;if(t.children&&p[0]!==Mx)for(u=(r?t.children.length:-1)+a,d=s.concat(t);u>-1&&u<t.children.length;){const n=t.children[u];if(c=e(n,u,d)(),c[0]===zx)return c;u="number"===typeof c[1]?c[1]:u+a}}return p}}(e,void 0,[])()}function Lx(e,t,n,r){let o,i,a;"function"===typeof t&&"function"!==typeof n?(i=void 0,a=t,o=n):(i=t,a=n,o=r),Ix(e,i,(function(e,t){const n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return a(e,r,n)}),o)}function Nx(e,t){const n=t.referenceType;let r="]";if("collapsed"===n?r+="[]":"full"===n&&(r+="["+(t.label||t.identifier)+"]"),"imageReference"===t.type)return[{type:"text",value:"!["+t.alt+r}];const o=e.all(t),i=o[0];i&&"text"===i.type?i.value="["+i.value:o.unshift({type:"text",value:"["});const a=o[o.length-1];return a&&"text"===a.type?a.value+=r:o.push({type:"text",value:r}),o}function Fx(e){const t=e.spread;return null===t||void 0===t?e.children.length>1:t}const Dx=9,_x=32;function Bx(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),o=0;const i=[];for(;r;)i.push(Hx(t.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=n.exec(t);return i.push(Hx(t.slice(o),o>0,!1)),i.join("")}function Hx(e,t,n){let r=0,o=e.length;if(t){let t=e.codePointAt(r);for(;t===Dx||t===_x;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(o-1);for(;t===Dx||t===_x;)o--,t=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}const Wx={blockquote:function(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)},break:function(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:"\n"}]},code:function(e,t){const n=t.value?t.value+"\n":"",r={};t.lang&&(r.className=["language-"+t.lang]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o},delete:function(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},emphasis:function(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},footnoteReference:function(e,t){const n="string"===typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),o=Sx(r.toLowerCase()),i=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);void 0===l?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=i+1,l+=1,e.footnoteCounts.set(r,l);const s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+o,id:n+"fnref-"+o+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,s);const c={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,c),e.applyData(t,c)},heading:function(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},html:function(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}},imageReference:function(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Nx(e,t);const o={src:Sx(r.url||""),alt:t.alt};null!==r.title&&void 0!==r.title&&(o.title=r.title);const i={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,i),e.applyData(t,i)},image:function(e,t){const n={src:Sx(t.url)};null!==t.alt&&void 0!==t.alt&&(n.alt=t.alt),null!==t.title&&void 0!==t.title&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)},inlineCode:function(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)},linkReference:function(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Nx(e,t);const o={href:Sx(r.url||"")};null!==r.title&&void 0!==r.title&&(o.title=r.title);const i={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)},link:function(e,t){const n={href:Sx(t.url)};null!==t.title&&void 0!==t.title&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)},listItem:function(e,t,n){const r=e.all(t),o=n?function(e){let t=!1;if("list"===e.type){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Fx(n[r])}return t}(n):Fx(t),i={},a=[];if("boolean"===typeof t.checked){const e=r[0];let n;e&&"element"===e.type&&"p"===e.tagName?n=e:(n={type:"element",tagName:"p",properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:"text",value:" "}),n.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const e=r[l];(o||0!==l||"element"!==e.type||"p"!==e.tagName)&&a.push({type:"text",value:"\n"}),"element"!==e.type||"p"!==e.tagName||o?a.push(e):a.push(...e.children)}const s=r[r.length-1];s&&(o||"element"!==s.type||"p"!==s.tagName)&&a.push({type:"text",value:"\n"});const c={type:"element",tagName:"li",properties:i,children:a};return e.patch(t,c),e.applyData(t,c)},list:function(e,t){const n={},r=e.all(t);let o=-1;for("number"===typeof t.start&&1!==t.start&&(n.start=t.start);++o<r.length;){const e=r[o];if("element"===e.type&&"li"===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const i={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,i),e.applyData(t,i)},paragraph:function(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},root:function(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)},strong:function(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},table:function(e,t){const n=e.all(t),r=n.shift(),o=[];if(r){const n={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),o.push(n)}if(n.length>0){const r={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},i=Km(t.children[1]),a=Gm(t.children[t.children.length-1]);i&&a&&(r.position={start:i,end:a}),o.push(r)}const i={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,i),e.applyData(t,i)},tableCell:function(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},tableRow:function(e,t,n){const r=n?n.children:void 0,o=0===(r?r.indexOf(t):1)?"th":"td",i=n&&"table"===n.type?n.align:void 0,a=i?i.length:t.children.length;let l=-1;const s=[];for(;++l<a;){const n=t.children[l],r={},a=i?i[l]:void 0;a&&(r.align=a);let c={type:"element",tagName:o,properties:r,children:[]};n&&(c.children=e.all(n),e.patch(n,c),c=e.applyData(n,c)),s.push(c)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(t,c),e.applyData(t,c)},text:function(e,t){const n={type:"text",value:Bx(String(t.value))};return e.patch(t,n),e.applyData(t,n)},thematicBreak:function(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)},toml:Ux,yaml:Ux,definition:Ux,footnoteDefinition:Ux};function Ux(){}const qx={}.hasOwnProperty,Vx={};function Gx(e,t){e.position&&(t.position=function(e){const t=Km(e),n=Gm(e);if(t&&n)return{start:t,end:n}}(e))}function Kx(e,t){let n=t;if(e&&e.data){const t=e.data.hName,r=e.data.hChildren,o=e.data.hProperties;if("string"===typeof t)if("element"===n.type)n.tagName=t;else{n={type:"element",tagName:t,properties:{},children:"children"in n?n.children:[n]}}"element"===n.type&&o&&Object.assign(n.properties,kx(o)),"children"in n&&n.children&&null!==r&&void 0!==r&&(n.children=r)}return n}function Jx(e,t){const n=t.data||{},r=!("value"in t)||qx.call(n,"hProperties")||qx.call(n,"hChildren")?{type:"element",tagName:"div",properties:{},children:e.all(t)}:{type:"text",value:t.value};return e.patch(t,r),e.applyData(t,r)}function Qx(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:"\n"});++r<e.length;)r&&n.push({type:"text",value:"\n"}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:"\n"}),n}function $x(e){let t=0,n=e.charCodeAt(t);for(;9===n||32===n;)t++,n=e.charCodeAt(t);return e.slice(t)}function Yx(e,t){const n=function(e,t){const n=t||Vx,r=new Map,o=new Map,i=new Map,a={...Wx,...n.handlers},l={all:function(e){const t=[];if("children"in e){const n=e.children;let r=-1;for(;++r<n.length;){const o=l.one(n[r],e);if(o){if(r&&"break"===n[r-1].type&&(Array.isArray(o)||"text"!==o.type||(o.value=$x(o.value)),!Array.isArray(o)&&"element"===o.type)){const e=o.children[0];e&&"text"===e.type&&(e.value=$x(e.value))}Array.isArray(o)?t.push(...o):t.push(o)}}}return t},applyData:Kx,definitionById:r,footnoteById:o,footnoteCounts:i,footnoteOrder:[],handlers:a,one:function(e,t){const n=e.type,r=l.handlers[n];if(qx.call(l.handlers,n)&&r)return r(l,e,t);if(l.options.passThrough&&l.options.passThrough.includes(n)){if("children"in e){const{children:t,...n}=e,r=kx(n);return r.children=l.all(e),r}return kx(e)}return(l.options.unknownHandler||Jx)(l,e,t)},options:n,patch:Gx,wrap:Qx};return Lx(e,(function(e){if("definition"===e.type||"footnoteDefinition"===e.type){const t="definition"===e.type?r:o,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}})),l}(e,t),r=n.one(e,void 0),o=function(e){const t="string"===typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||jx,r=e.options.footnoteBackLabel||Cx,o=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let s=-1;for(;++s<e.footnoteOrder.length;){const o=e.footnoteById.get(e.footnoteOrder[s]);if(!o)continue;const i=e.all(o),a=String(o.identifier).toUpperCase(),c=Sx(a.toLowerCase());let u=0;const d=[],p=e.footnoteCounts.get(a);for(;void 0!==p&&++u<=p;){d.length>0&&d.push({type:"text",value:" "});let e="string"===typeof n?n:n(s,u);"string"===typeof e&&(e={type:"text",value:e}),d.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+c+(u>1?"-"+u:""),dataFootnoteBackref:"",ariaLabel:"string"===typeof r?r:r(s,u),className:["data-footnote-backref"]},children:Array.isArray(e)?e:[e]})}const f=i[i.length-1];if(f&&"element"===f.type&&"p"===f.tagName){const e=f.children[f.children.length-1];e&&"text"===e.type?e.value+=" ":f.children.push({type:"text",value:" "}),f.children.push(...d)}else i.push(...d);const h={type:"element",tagName:"li",properties:{id:t+"fn-"+c},children:e.wrap(i,!0)};e.patch(o,h),l.push(h)}if(0!==l.length)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...kx(a),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:"\n"}]}}(n),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&i.children.push({type:"text",value:"\n"},o),i}function Zx(e,t){return e&&"run"in e?async function(n,r){const o=Yx(n,{file:r,...t});await e.run(o,r)}:function(n,r){return Yx(n,{file:r,...t||e})}}function Xx(e){if(e)throw e}var ev=n(3240);function tv(e){if("object"!==typeof e||null===e)return!1;const t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function nv(){const e=[],t={run:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];let o=-1;const i=n.pop();if("function"!==typeof i)throw new TypeError("Expected function as last argument, not "+i);!function t(r){const a=e[++o];let l=-1;if(r)i(r);else{for(var s=arguments.length,c=new Array(s>1?s-1:0),u=1;u<s;u++)c[u-1]=arguments[u];for(;++l<n.length;)null!==c[l]&&void 0!==c[l]||(c[l]=n[l]);n=c,a?function(e,t){let n;return o;function o(){for(var t=arguments.length,o=new Array(t),l=0;l<t;l++)o[l]=arguments[l];const s=e.length>o.length;let c;s&&o.push(i);try{c=e.apply(this,o)}catch(r){if(s&&n)throw r;return i(r)}s||(c&&c.then&&"function"===typeof c.then?c.then(a,i):c instanceof Error?i(c):a(c))}function i(e){if(!n){n=!0;for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];t(e,...o)}}function a(e){i(null,e)}}(a,t)(...c):i(null,...c)}}(null,...n)},use:function(n){if("function"!==typeof n)throw new TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}};return t}const rv={basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');ov(e);let n,r=0,o=-1,i=e.length;if(void 0===t||0===t.length||t.length>e.length){for(;i--;)if(47===e.codePointAt(i)){if(n){r=i+1;break}}else o<0&&(n=!0,o=i+1);return o<0?"":e.slice(r,o)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(47===e.codePointAt(i)){if(n){r=i+1;break}}else a<0&&(n=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(o=i):(l=-1,o=a));r===o?o=a:o<0&&(o=e.length);return e.slice(r,o)},dirname:function(e){if(ov(e),0===e.length)return".";let t,n=-1,r=e.length;for(;--r;)if(47===e.codePointAt(r)){if(t){n=r;break}}else t||(t=!0);return n<0?47===e.codePointAt(0)?"/":".":1===n&&47===e.codePointAt(0)?"//":e.slice(0,n)},extname:function(e){ov(e);let t,n=e.length,r=-1,o=0,i=-1,a=0;for(;n--;){const l=e.codePointAt(n);if(47!==l)r<0&&(t=!0,r=n+1),46===l?i<0?i=n:1!==a&&(a=1):i>-1&&(a=-1);else if(t){o=n+1;break}}if(i<0||r<0||0===a||1===a&&i===r-1&&i===o+1)return"";return e.slice(i,r)},join:function(){let e,t=-1;for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];for(;++t<r.length;)ov(r[t]),r[t]&&(e=void 0===e?r[t]:e+"/"+r[t]);return void 0===e?".":function(e){ov(e);const t=47===e.codePointAt(0);let n=function(e,t){let n,r,o="",i=0,a=-1,l=0,s=-1;for(;++s<=e.length;){if(s<e.length)n=e.codePointAt(s);else{if(47===n)break;n=47}if(47===n){if(a===s-1||1===l);else if(a!==s-1&&2===l){if(o.length<2||2!==i||46!==o.codePointAt(o.length-1)||46!==o.codePointAt(o.length-2))if(o.length>2){if(r=o.lastIndexOf("/"),r!==o.length-1){r<0?(o="",i=0):(o=o.slice(0,r),i=o.length-1-o.lastIndexOf("/")),a=s,l=0;continue}}else if(o.length>0){o="",i=0,a=s,l=0;continue}t&&(o=o.length>0?o+"/..":"..",i=2)}else o.length>0?o+="/"+e.slice(a+1,s):o=e.slice(a+1,s),i=s-a-1;a=s,l=0}else 46===n&&l>-1?l++:l=-1}return o}(e,!t);0!==n.length||t||(n=".");n.length>0&&47===e.codePointAt(e.length-1)&&(n+="/");return t?"/"+n:n}(e)},sep:"/"};function ov(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const iv={cwd:function(){return"/"}};function av(e){return Boolean(null!==e&&"object"===typeof e&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&void 0===e.auth)}function lv(e){if("string"===typeof e)e=new URL(e);else if(!av(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if("file:"!==e.protocol){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return function(e){if(""!==e.hostname){const e=new TypeError('File URL host must be "localhost" or empty on darwin');throw e.code="ERR_INVALID_FILE_URL_HOST",e}const t=e.pathname;let n=-1;for(;++n<t.length;)if(37===t.codePointAt(n)&&50===t.codePointAt(n+1)){const e=t.codePointAt(n+2);if(70===e||102===e){const e=new TypeError("File URL path must not include encoded / characters");throw e.code="ERR_INVALID_FILE_URL_PATH",e}}return decodeURIComponent(t)}(e)}const sv=["history","path","basename","stem","extname","dirname"];class cv{constructor(e){let t;t=e?av(e)?{path:e}:"string"===typeof e||function(e){return Boolean(e&&"object"===typeof e&&"byteLength"in e&&"byteOffset"in e)}(e)?{value:e}:e:{},this.cwd="cwd"in t?"":iv.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n,r=-1;for(;++r<sv.length;){const e=sv[r];e in t&&void 0!==t[e]&&null!==t[e]&&(this[e]="history"===e?[...t[e]]:t[e])}for(n in t)sv.includes(n)||(this[n]=t[n])}get basename(){return"string"===typeof this.path?rv.basename(this.path):void 0}set basename(e){dv(e,"basename"),uv(e,"basename"),this.path=rv.join(this.dirname||"",e)}get dirname(){return"string"===typeof this.path?rv.dirname(this.path):void 0}set dirname(e){pv(this.basename,"dirname"),this.path=rv.join(e||"",this.basename)}get extname(){return"string"===typeof this.path?rv.extname(this.path):void 0}set extname(e){if(uv(e,"extname"),pv(this.dirname,"extname"),e){if(46!==e.codePointAt(0))throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=rv.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){av(e)&&(e=lv(e)),dv(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return"string"===typeof this.path?rv.basename(this.path,this.extname):void 0}set stem(e){dv(e,"stem"),uv(e,"stem"),this.path=rv.join(this.dirname||"",e+(this.extname||""))}fail(e,t,n){const r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){const r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){const r=new Xm(e,t,n);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){if(void 0===this.value)return"";if("string"===typeof this.value)return this.value;return new TextDecoder(e||void 0).decode(this.value)}}function uv(e,t){if(e&&e.includes(rv.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+rv.sep+"`")}function dv(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function pv(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}const fv=function(e){const t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r},hv={}.hasOwnProperty;class mv extends fv{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=nv()}copy(){const e=new mv;let t=-1;for(;++t<this.attachers.length;){const n=this.attachers[t];e.use(...n)}return e.data(ev(!0,{},this.namespace)),e}data(e,t){return"string"===typeof e?2===arguments.length?(vv("data",this.frozen),this.namespace[e]=t,this):hv.call(this.namespace,e)&&this.namespace[e]||void 0:e?(vv("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...n]=this.attachers[this.freezeIndex];if(!1===n[0])continue;!0===n[0]&&(n[0]=void 0);const r=t.call(e,...n);"function"===typeof r&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=kv(e),n=this.parser||this.Parser;return yv("parse",n),n(String(t),t)}process(e,t){const n=this;return this.freeze(),yv("process",this.parser||this.Parser),xv("process",this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,o){const i=kv(e),a=n.parse(i);function l(e,n){e||!n?o(e):r?r(n):t(void 0,n)}n.run(a,i,(function(e,t,r){if(e||!t||!r)return l(e);const o=t,i=n.stringify(o,r);var a;"string"===typeof(a=i)||function(e){return Boolean(e&&"object"===typeof e&&"byteLength"in e&&"byteOffset"in e)}(a)?r.value=i:r.result=i,l(e,r)}))}}processSync(e){let t,n=!1;return this.freeze(),yv("processSync",this.parser||this.Parser),xv("processSync",this.compiler||this.Compiler),this.process(e,(function(e,r){n=!0,Xx(e),t=r})),wv("processSync","process",n),t}run(e,t,n){bv(e),this.freeze();const r=this.transformers;return n||"function"!==typeof t||(n=t,t=void 0),n?o(void 0,n):new Promise(o);function o(o,i){const a=kv(t);r.run(e,a,(function(t,r,a){const l=r||e;t?i(t):o?o(l):n(void 0,l,a)}))}}runSync(e,t){let n,r=!1;return this.run(e,t,(function(e,t){Xx(e),n=t,r=!0})),wv("runSync","run",r),n}stringify(e,t){this.freeze();const n=kv(t),r=this.compiler||this.Compiler;return xv("stringify",r),bv(e),r(e,n)}use(e){const t=this.attachers,n=this.namespace;if(vv("use",this.frozen),null===e||void 0===e);else if("function"===typeof e){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];c(e,o)}else{if("object"!==typeof e)throw new TypeError("Expected usable value, not `"+e+"`");Array.isArray(e)?s(e):l(e)}return this;function a(e){if("function"===typeof e)c(e,[]);else{if("object"!==typeof e)throw new TypeError("Expected usable value, not `"+e+"`");if(Array.isArray(e)){const[t,...n]=e;c(t,n)}else l(e)}}function l(e){if(!("plugins"in e)&&!("settings"in e))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(e.plugins),e.settings&&(n.settings=ev(!0,n.settings,e.settings))}function s(e){let t=-1;if(null===e||void 0===e);else{if(!Array.isArray(e))throw new TypeError("Expected a list of plugins, not `"+e+"`");for(;++t<e.length;){a(e[t])}}}function c(e,n){let r=-1,o=-1;for(;++r<t.length;)if(t[r][0]===e){o=r;break}if(-1===o)t.push([e,...n]);else if(n.length>0){let[r,...i]=n;const a=t[o][1];tv(a)&&tv(r)&&(r=ev(!0,a,r)),t[o]=[e,r,...i]}}}}const gv=(new mv).freeze();function yv(e,t){if("function"!==typeof t)throw new TypeError("Cannot `"+e+"` without `parser`")}function xv(e,t){if("function"!==typeof t)throw new TypeError("Cannot `"+e+"` without `compiler`")}function vv(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function bv(e){if(!tv(e)||"string"!==typeof e.type)throw new TypeError("Expected node, got `"+e+"`")}function wv(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function kv(e){return function(e){return Boolean(e&&"object"===typeof e&&"message"in e&&"messages"in e)}(e)?e:new cv(e)}const Sv=[],jv={allowDangerousHtml:!0},Cv=/^(https?|ircs?|mailto|xmpp)$/i,Ev=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Ov(e){const t=e.allowedElements,n=e.allowElement,r=e.children||"",o=e.className,i=e.components,a=e.disallowedElements,l=e.rehypePlugins||Sv,s=e.remarkPlugins||Sv,c=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...jv}:jv,u=e.skipHtml,d=e.unwrapDisallowed,p=e.urlTransform||Rv,f=gv().use(fx).use(s).use(Zx,c).use(l),h=new cv;"string"===typeof r&&(h.value=r);for(const g of Ev)Object.hasOwn(e,g.from)&&(g.from,g.to&&g.to,g.id);const m=f.parse(h);let y=f.runSync(m,h);return o&&(y={type:"element",tagName:"div",properties:{className:o},children:"root"===y.type?y.children:[y]}),Lx(y,(function(e,r,o){if("raw"===e.type&&o&&"number"===typeof r)return u?o.children.splice(r,1):o.children[r]={type:"text",value:e.value},r;if("element"===e.type){let t;for(t in xg)if(Object.hasOwn(xg,t)&&Object.hasOwn(e.properties,t)){const n=e.properties[t],r=xg[t];(null===r||r.includes(e.tagName))&&(e.properties[t]=p(String(n||""),t,e))}}if("element"===e.type){let i=t?!t.includes(e.tagName):!!a&&a.includes(e.tagName);if(!i&&n&&"number"===typeof r&&(i=!n(e,r,o)),i&&o&&"number"===typeof r)return d&&e.children?o.children.splice(r,1,...e.children):o.children.splice(r,1),r}})),lg(y,{Fragment:g.Fragment,components:i,ignoreInvalidStyle:!0,jsx:g.jsx,jsxs:g.jsxs,passKeys:!0,passNode:!0})}function Rv(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),o=e.indexOf("/");return t<0||o>-1&&t>o||n>-1&&t>n||r>-1&&t>r||Cv.test(e.slice(0,t))?e:""}var Pv=n(3557);n.p;const Av=si.div`
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
`,Tv=si.div`
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
`,zv=si.div`
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
`,Mv=si.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow-y: auto;
  background-color: #f7fafc;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    padding: 12px; /* Reduce padding */
  }
`,Iv=si.div`
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
`,Lv=si.div`
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
`,Nv=si.form`
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
`,Fv=si.input`
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
`,Dv=si.button`
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
`,_v=si.div`
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
`,Bv=si.button`
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
`;const Hv=function(e){const[t,n]=(0,o.useState)([]),[r,i]=(0,o.useState)(""),[a,l]=(0,o.useState)(!1),[s,c]=(0,o.useState)(!1),u=async e=>{if(e&&e.preventDefault(),""===r.trim())return;const o=[...t,{text:r,isBot:!1}];n(o),i(""),l(!0);try{var a,s,c,u;const e=(null===(a=(await gs.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDE0Ru86HvsWQ-bD7pbdDB7o3NIrFbMCbA",{contents:[{parts:[{text:r}]}]})).data)||void 0===a||null===(s=a.candidates[0])||void 0===s||null===(c=s.content)||void 0===c||null===(u=c.parts[0])||void 0===u?void 0:u.text)||"Sorry, I didn't understand that.";n([...o,{text:e,isBot:!0}])}catch(d){console.error("Error fetching the bot response:",d),n([...o,{text:"Sorry, something went wrong.",isBot:!0}])}l(!1)},d=e=>{c(!0),i(e)};(0,o.useEffect)((()=>{s&&(c(!1),u())}),[r]);const p=window.innerWidth<=768;return(0,g.jsx)(Pv.Ay,{className:"custom-pane-class",overlayClassName:"custom-overlay-class",isOpen:!0,hideHeader:!0,from:"right",width:p?"100%":"39%",children:(0,g.jsxs)(Av,{children:[(0,g.jsxs)(Tv,{children:[(0,g.jsx)(zv,{children:"AW"}),(0,g.jsx)("span",{children:"ATOMWALK-AI"}),(0,g.jsx)("button",{onClick:()=>{e.setOpenslide(!1)},style:{background:"none",border:"none",color:"#ffffff",cursor:"pointer"},children:"X"})]}),(0,g.jsxs)(Mv,{children:[t.map(((e,t)=>(0,g.jsx)(Lv,{isBot:e.isBot,children:(0,g.jsx)(Ov,{children:e.text})},t))),a&&(0,g.jsx)(Lv,{isBot:!0,children:"Generating..."}),0==t.length&&(0,g.jsx)(Iv,{children:"Hii how can i help you\ud83d\udc81\u200d\u2640\ufe0f"})]}),(0,g.jsxs)(_v,{children:[(0,g.jsx)(Bv,{onClick:()=>d("What is Manufacturing ERP ?"),children:"What is Manufacturing ERP ?"}),(0,g.jsx)(Bv,{onClick:()=>d("Why Business need Manufacturing ERP ?"),children:"Why Business need Manufacturing ERP ?"}),(0,g.jsx)(Bv,{onClick:()=>d("Whene is the Right Time to Implement Manufacturing ERP ?"),children:"Whene is the Right Time to Implement Manufacturing ERP ?"}),(0,g.jsx)(Bv,{onClick:()=>d("How Atomwalk office support Manufacturing ERP ?"),children:"How Atomwalk office support Manufacturing ERP ?"}),(0,g.jsx)(Bv,{onClick:()=>d("What is CRM"),children:"What is CRM"})]}),(0,g.jsxs)(Nv,{children:[(0,g.jsx)(Fv,{value:r,onChange:e=>i(e.target.value),placeholder:"Type your message..."}),(0,g.jsx)(Dv,{type:"submit",disabled:a,onClick:u,children:"\u27a4"})]})]})})},Wv=n.p+"static/media/chatbot-icon-removebg-preview.39103f1381dfcfdca93f.png",Uv=si.a`
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
`,qv=si.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function Vv(e){return(0,g.jsx)(Uv,{onClick:()=>{e.setOpenslide(!0)},children:(0,g.jsx)(qv,{src:Wv,alt:"Floating Icon"})})}const Gv=n.p+"static/media/Backgroundyellow.724b6926d561bc062e5d.jpg",Kv=si.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, rgb(237, 245, 255), #ffffff);
  background-image: url(${Gv});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`,Jv=si.div`
  background-color: #e1fff6;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: 20px;
  margin-top: 100px;
`,Qv=si.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
`,$v=si.p`
  font-size: 1rem;
  color: #777777;
  text-align: center;
  margin-bottom: 30px;
`,Yv=si.form`
  display: flex;
  flex-direction: column;
  color: #454545;
`,Zv=si.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,Xv=si.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,eb=si.select`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,tb=si.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap:10px;
`,nb=si.label`
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333333;
`,rb=si.button`
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
`,ob=()=>{let e=new Date;const t={name:"",company_name:"",task_name:"Book My Demo",mobile_number:"",email_id:"",add_task:"N",task_type:"Book My Demo",task_date:`${("0"+e.getDate()).slice(-2)}-${("0"+(e.getMonth()+1)).slice(-2)}-${e.getFullYear()}`,remarks:""},[n,r]=(0,o.useState)(t),[i,a]=(0,o.useState)(!1),[l,s]=(0,o.useState)([]),[c,u]=(0,o.useState)(""),[d,p]=(0,o.useState)(""),f=(e,t)=>{r({...n,[e]:t})},h=async(e,n)=>{try{let o=localStorage.getItem("apiResponse"),i=JSON.parse(o);if(!o)throw new Error("Token not found, please login.");const l=gs.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${i.key}`}});200==(await l.post(e,n)).status&&(r(t),a(!0))}catch(o){console.log("Error making authenticated API call:",o),r(t)}};(0,o.useEffect)((()=>{i&&setTimeout((()=>{a(!1),window.location.href="/demo.html"}),3e3)}),[i]);const m=e=>{const{value:t,checked:o}=e.target,i=o?[...l,t]:l.filter((e=>e!==t));s(i),r({...n,remarks:`${d}\nNumber of Employees: ${c}\nRequirements: ${i.join(", ")}`})};return(0,g.jsxs)(g.Fragment,{children:[i&&(0,g.jsx)($c,{message:"We have successfully recorded your information."}),(0,g.jsx)(Kv,{children:(0,g.jsxs)(Jv,{children:[(0,g.jsx)(Qv,{children:"We are a call away!"}),(0,g.jsx)($v,{children:"Discuss Pricing, take a Demo or share your business problems."}),(0,g.jsxs)(Yv,{children:[(0,g.jsx)(Zv,{onChange:e=>f("name",e.target.value),type:"text",placeholder:"Full Name"}),(0,g.jsx)(Zv,{onChange:e=>f("mobile_number",e.target.value),type:"tel",placeholder:"Phone"}),(0,g.jsx)(Zv,{onChange:e=>f("email_id",e.target.value),type:"email",placeholder:"Work Email*",required:!0}),(0,g.jsx)(Zv,{onChange:e=>f("company_name",e.target.value),type:"text",placeholder:"Company Name"}),(0,g.jsxs)(tb,{children:[(0,g.jsx)(nb,{children:"Please select your requirement(s):"}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Payroll",onChange:m})," Payroll"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Core HR",onChange:m})," Core HR"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Attendance Management",onChange:m})," Attendance Management"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Leave Management",onChange:m})," Leave Management"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Performance Management System",onChange:m})," Performance Management System"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Geo-Tagging",onChange:m})," Geo-Tagging"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Recruitment",onChange:m})," Recruitment"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Employee Self Service",onChange:m})," Employee Self Service"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Employee Engagement",onChange:m})," Employee Engagement"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Others",onChange:m})," Others"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"All",onChange:m})," All"]})]}),(0,g.jsx)(Xv,{onChange:e=>{const t=e.target.value;p(t),r({...n,remarks:`${t}\nNumber of Employees: ${c}\nRequirements: ${l.join(", ")}`})},rows:"4",placeholder:"Are you currently using any HR tools? (Optional)"}),(0,g.jsxs)(eb,{onChange:e=>{const t=e.target.value;u(t),r({...n,remarks:`${d}\nNumber of Employees: ${t}\nRequirements: ${l.join(", ")}`})},children:[(0,g.jsx)("option",{value:"",children:"Number of Employees"}),(0,g.jsx)("option",{value:"1-10",children:"1-10"}),(0,g.jsx)("option",{value:"11-50",children:"11-50"}),(0,g.jsx)("option",{value:"51-200",children:"51-200"}),(0,g.jsx)("option",{value:"201-500",children:"201-500"}),(0,g.jsx)("option",{value:"500+",children:"500+"})]}),(0,g.jsx)(rb,{onClick:e=>(e.preventDefault(),h("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:n})),children:"Book Meeting"})]})]})})]})};n(1094);n.p,n.p,n.p,si.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
`,si.table`
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
`,si.span`
  color: green;
`,si.span`
  color: red;
`,si.span`
  color: #333;
  font-size: 0.85rem;
`,si.span`
  cursor: pointer;
  user-select: none;
  font-size: 1.2rem;
`,si.th`
  background-color: #f3e6f9;
  position: sticky;
  top: 0;
  z-index: 10;
`,si.div`
  background-color: white;
  color: blue;
  width: 100%;
  /* padding-top: 10px; */
  padding-bottom: 10px;
  /* height: 1472px; */
`,si.div`
  height: 472px;
  background-color: white;
  color: blue;
  display: flex;
  justify-content: center;
  
  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    height: auto; /* Allow height to adjust based on content */
   // padding: 20px; /* Add some padding for smaller screens */
  }
`,si.div`
  height: 125%;
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
    padding-top: 50px; /* Adjust top padding */
    flex-direction: column; /* Stack items vertically */
    justify-content: center; /* Center items */
    align-items: center; /* Center items */
  }
`,si.div`
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
`,si.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 600;
  line-height: 61.2px;
  margin: 0px 0px 16px;
`,si.p`
  color: #1c1b1f;
  width: 65%;
  font-size: 21px;
  word-wrap: normal;
  line-height: 31.504px;
  margin: 0px 0px 24px;
  @media (max-width: 768px) {
    width: 100%;
  }
`,si.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 60%;
  line-height: 26px;
  padding: 44px 0px 0px;
`,si.button`
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
`,si.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`,si.div`
  line-height: 26px;
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`,si.div`
  line-height: 26px;
  margin: 144px 0px;
  width: 100%;
  margin-top: 180px;
  @media (max-width:768px) {
    margin-top: 70px;
  }
`,si.h2`
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
`,si.span`
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
`,si.div`
  color: #1c1b1f;
  line-height: 24px;
  margin: 0px 417.788px 48px 417.775px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0px ;
  }
`,si.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 30px;
  max-height: 600px;
  overflow-y: auto;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 10px;
`,si.table`
  width: 100%;
  border-collapse: collapse;
  position: relative;
`,si.th`
  background-color: #FCE6FF;
  color: #1c1b1f;
  padding: 50px 20px;
  font-size: larger;
  text-align: center;
  border: 2px solid #8900c4;
  position: sticky;
  top: 0;
  z-index: 2;
`,si.td`
  padding: 20px;
  text-align: left;
  border: 1px solid #ddd;
`;const ib=si.div`
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
`,ab=si.div`
  max-width: 400px;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,lb=si.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`,sb=si.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,cb=si.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  &::before {
    content: "✔";
    color: green;
    margin-right: 0.5rem;
  }
`,ub=si.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,db=si.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,pb=si.form`
  display: flex;
  flex-direction: column;
`,fb=si.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`,hb=si.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`,mb=si.button`
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
`,gb=si.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 1rem;
`,yb=()=>(0,g.jsxs)(ib,{children:[(0,g.jsxs)(ab,{children:[(0,g.jsx)(lb,{children:"Get Expert Advice"}),(0,g.jsxs)(sb,{children:[(0,g.jsx)(cb,{children:"Talk to Sales"}),(0,g.jsx)(cb,{children:"Free Demo"}),(0,g.jsx)(cb,{children:"Get Expert Advice"}),(0,g.jsx)(cb,{children:"Pricing Options"})]})]}),(0,g.jsxs)(ub,{children:[(0,g.jsx)(db,{children:"Fill out this quick form and we\u2019ll get back to you shortly"}),(0,g.jsxs)(pb,{children:[(0,g.jsx)(fb,{type:"text",placeholder:"Enter your name"}),(0,g.jsx)(fb,{type:"email",placeholder:"Enter your work Email ID"}),(0,g.jsx)(hb,{placeholder:"Let us know about your research requirement, a topic you have in mind, or a goal you are trying to achieve.",rows:"4"}),(0,g.jsx)(mb,{type:"submit",children:"Contact Sales"})]}),(0,g.jsx)(gb,{children:"By filling out and submitting this form, you are agreeing to our Privacy Policy and agreeing to receive email communications regarding events, webinars, research, and more."})]})]});n.p,n.p,n.p,n.p,n.p,n.p,si.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #d6e7ff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,si.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,si.div`
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
`,si.div`
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
`,si.div`
  background-color: #ffcc00;
  padding: 15px;
  border-radius: 50%;
  margin-right: 20px;
`,si.img`
  width: 50px;
  height: auto;
`,si.div`
  display: flex;
  flex-direction: column;
`,si.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`,si.p`
  font-size: 1rem;
  color: #666;
`,si.section`
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
`,si.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top:130px;
  }
`,si.h1`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,si.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,si.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,si.img`
  width: 150px;
  height: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 130px;
  }
`,si.div`
  display: flex;
  gap: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
`,si.img`
  width: 500px;
  height: auto;

  @media (max-width: 768px) {
    width: 180px;
  }
`;const xb=n.p+"static/media/Labtest.d306211505644b5096b4.png",vb=(n.p,si.section`
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
`),bb=si.div`
  max-width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,wb=si.h1`
  font-size: 48px;
  color: #213e6d;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`,kb=si.p`
  font-size: 18px;
  color: #6d7278;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Sb=si.button`
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
`,jb=si.div`
  max-width: 50%;
  position: relative;
  z-index: 2;
  bottom: 0px;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`,Cb=si.img`
  width: 100%;
  height: auto;
`,Eb=si.img`
  position: absolute;
  top: 150px;
  left: 40px;
  width: 130px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80px;
  }
`,Ob=(si.img`
position: absolute;
    right: 436px;
    bottom: 0;
    width: 275px;
    z-index: 1;
  @media (max-width: 768px) {
    width: 100px;
  }
`,si.div`
  padding: 20px;
  background-color: #f5f5f5;
`),Rb=si.h1`
  text-align: center;
  color: #2f3b82;
`,Pb=si.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`,Ab=si.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,Tb=si.h2`
  color: #2f3b82;
  margin-bottom: 10px;
`,zb=si.p`
  color: #333;
`,Mb=si.table`
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
`,Ib=si.button`
  padding: 10px 20px;
  background-color: #2f3b82;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1e2870;
  }
`,Lb=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(vb,{children:[(0,g.jsx)(Eb,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAB1CAYAAADkzsULAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA42SURBVHgB7Z1NUxzHGcef7l1WOHJKi+Q4VTlII5K44oArUJVTLoZrUqnAJ9BySBydkD6Blk8g6eSKc2D5BCKVsp0bOKdUchAuCZSKK9qxD0nZsQyqWJYEO93uZ3YXrWD2Zbpnenpmn18VAgapQOz859evTzMgjPDWZfXV53BFclgCCR5ewusM4EAy2JECPhYSNv95lW0DkUsYEFpgOL7TglUu4JoEqI7wT3zB4JYM4E8qMD4QuYFCosFP3pVeicMWdKwRF2WdumjBBoUlH1BIYmIakB58FZYGhcV9KCQxSDAgvVBYHIdCEoOZ9+SW6pwvQDqEYamU4fbOCjsAwhkoJCMy+55clRJuQfr46q2++w7bAMIJKCQjkFIzaxg+UFicgAMxlJK6WcFuQKDz/Rozf5BN9XYFiMwgkwyhY5EmZI8PZJZMIJMMoWMRF/CAzJIJZJIBOGSRKHwgs1iBTDIAhywShQdkFiuQSfrguEWi8IHMkgpkkj44bpEoPCCzpAKZJIIcWiQKH8gsiUAmiSCHFonCAzTLe3JLhX4BCG3IJCcoiEVOw2A7CGCNNn/Fh0xygoJY5DQSFnBpDZklPmSSHgprkSgYNDpm8YEYCJmkh8JaJAoJNXwgKLOs48MBiL6QSTqMlUWiILP0xSmTeHf3PfU2SlGFxBkri0RBZulLZibBMJQmYAmYeFsyttApx/MCBj7D3XrANksCPvpkdmoHUmLsLRIFmeUY6yHBcPBJWIVAXlPfPY41fOCsIZ7Bhj8/5UOCzLwrG8qpNEsdBYXFbki8+/tzjMk7zHgDk2yIQ76WRFhm1XCobO86JPpzoH5Ht/Z+y9ZgDLEWkum9/VWQMuE94uZhSbm4Q7FoT0iujJtVrIRk+sH+DRCyDqmhFxayiBZ+IGBxnIKS+uiWt/flUroBQViNV2RzevfROo6QjfqvZAluABGXsCjGOI2ApRoSvGG54OtgjdHDghahZpY2XqkEFl/XbEk1JKyi2vvxRrCS+s5Dw0IWMUQ9YMZl30pqIcF+iPkolinRYfnpu7JGFkkEG8X6MieVjnvYzFI3J7jF8TzL2b9XbReaKyydTvw2FJhUTMImgjq4h4cDCJzD3aOLTz15RgBhDmewBAWnDAmDFlEThu62Vcuy2rr4DILXD6H0RQXKn58B9pwWQxvgQcFJ/O5w1CKnkJMCMCzP3/o/tF5/DoQeqr1+DgpOoiFpW4QbWUTiokYJ2+oDK8cPYFiO3vgGnv38MYWFiCTRkBhaxBciWGzOnL/cnD2/+HD2/BR+HgbGAhQWPdRD7TEUnMRCYmgRX3C26L/1ve2XLqrPMTAUFoeRkNoWBldILCQmFhGytey/2X/dFYXFXdQY4TYUnETmSczmRVjj4czUSpx/4d373wLjpZvqh58DS7BnHMqfTUL5izNAtMH+49477DIUnERMUjojtdfxCA6x9yiEZpk5Py+kWJHtSoWpQ2Y5DWPFtwhibJIf3dtfEFxqLjePb5EovPtf1lR/yOoyGDJLONt+eRyWzBubRJak9kJBHYtE4c++1sBRMTKLRRg0xmVPiZFJXLBIFFmZZeKTs1B6nPgiBicZF4sgRiZxwSJRoFle+evUWuVfZ8Ob1wZolkM1e3/44ydQ+HVhY2QRRPuxF1pE6taUZY1BQ75JwDjcwLVZ+IbrtI4uPg1v5LQJvn8I4lyr0P0VrJ4CY4R2SAIu13XbamlaBAn3i/Q0tWyHpdtfwfcTn70ChWLMLIJohSRs82u39+1YJOq67bDgAkqkSEEZN4sgWiHBTjFoYtsiUdgMS6GCMoYWQWKHJK8WicJWWDAorMWg/J9JyDPjaBEk9tCPyxaZ/WM42uZBTDAoZ+59N3zapzUahkHJ9ajXmFoEiWUS1y0iBdRAE9ydiCNSpc8r4QgVThAmaRZZlnA0/Q1UHrwKecQVi8g7UA1KsCAZLLASXGISPDWB/HJFHhZOKB/IAD5W77cnfm22fCbWANXl3a+auiERnF1OMyTYF1FNrcRqQeFTP42wTP6tGja9coWyyO7vWCoTv6OAwTiqwBJncEWzys2B+o1vCgEbOoEZuW2Rg77IKiRI1yzYDMPmWFK0fvAM8kaWFgn+AqtBBZrqRl03KANVVbbBh+hW6wPYOnw/3urxkR9pLlvExvkiaJajS0/DTr4J/HE5DF5uyMgiR39Wzal2y8CDFFD3coMfwhpbHr7WbySTuG4R9Z9YgJRBs+Ayl8l/nAtvdF1wNj5PZGERtAdrFzL3ICXQLMpQW6op5w37uyOFxOURrRBmcfOVCkvYBHs0AbqIvIxyZTCi1Xof1lWH21ZlSE8F5a5qgg3cdj40JEYWkfJ22hZB1FPnZ2AZXPGr3QGfzEdIbFsEA6Le1cAuVaWVxqCgDA2JgUV8UeJ2ngjSflFuDAh7UoLCYtkiwQdwE+wH5AUqKNgPivrSwJAYWUTIDRsWyRRdk1havm+CTYsEH8INKeEaZIxqkdyJ6qMMfLWMLFLmDbCErd2Ip76vZrOJu15W1aJFnn6oJgOFM8eDV0UF7py82PfVypNFWAAfgWVwSFieDSAu3PEmGj5wbFpkQrh1HJ/6/8+pZle991rfkOTFIghj9guk4ZyJDuxrx/sxalbalkXUpF4NUhzm1QUnpnubXZEhyVtf5D6ej2GxvE24ZEVzUrH0VXKz90mDFlENyAZYQt18rp42Vm2VX/SRIkNiZJEWtzXG/RLMYhNB2yKqo28yv5I6ZJFjlE2u4Jox/PhUSEwswjir+/NTVqrBnwRtwkT6QTGxCHc4INYtwsD18xarRxPtIemXQtIpeq1tkX+/ObUBGaKCUsenIaSIrkUQp3cnWrRI+ITOwZmVnMNvwvcvXZyEKyYWAQfYvcpqaRnFyCKPy86eqGXbIrgfBPKAhDkM9PGrhhaRItwfrkPmFukFjaLG3nHlaqJNv6JaRD0Y6zZn16XFtXaG4D4W7zgkRbBIL3tXWSMQMJ9U88toROvzitHK4TRBi+y+w6w+4LJYa6cLD2DuOCRFsUgv+HTsNL8WwfBckyJbBGzD7K+100VZr20S0xEtcBwc+dr9PVvUDYupRVzui9i2SOcbe5ATVOf9Uvjqlbj+MW6uWiSK3rDEWe91+MYT0IUskn942GHXHI7Lg0WiwLDgCU3YuR8WluBcS3s3IVmkGHCYCBZAj1xZJArs3A8LS+si9UXGGSHgsZr4HC+LRNEvLGSRlGDZbG3QhSsugQYB2F+enjYnw0IWSQf1dP4UcgJTAz1c3RA6Ezt+kXcdYlgOf3GwQhZJjdyc/S5K4HPNMevcjHPrguevgCZkkSE/g8xNSA4qv4Id3cddFc9Sh4JiMm9EFhlOp9RoJqvF4yA7XQquPtL6YTkvravh40IaxaTOGFlkNGTKq7WToAzt2tLcYKTB4xV5F+dZoECQRayxCW7jw2HXJEKajFJhUJrTu4/WixIWsogdwiaXxS3XsWFQZ8vtVhYXIBJINKsVISwmFpFHfJM/5WtZlTcahKuz69Ldk7P88i9fNAc5tMo7uv2S0+Q7LCYWkWfkddzHouYAcG2YU2FxdXYdbaL6JrfBNQK43vspwz+m7z2qA2cpVK6QDXHI1/x59+dU0CKccc1hX9Z4ODO10nsFj4NQHb+a4Pr7dJIAw4oTpOAo4clVFbgLjhSFUKFdU+Gt914LQ4KjVEx1wtN7Md0PS1rnr4Rnp+CTnGdW+KDm+kJGrOI4IcKgZDtaymBTNbOWT1/ugPMealg3zWp6vrJVQzyDDdfCkrRFosgkLBkf4xaHzqE9mVVzVEHY4Yeqqbx8uuvBej+Zvv/ommqY34R0cS4sNk/xshiWA9y+nKcTc7EWlxpAx/vPqlEGBaTz9ZdJr39yCifCYmQRIdcevnWhDhpYCMt11czKpFCgCXieoQoKFq32wAYStktHsNwvIAiLumjJKF18XHaf1d4UA4v4yiKLpgs90wgLdj73ruZ3K0Onj5LqcXAIjqypTvrQIx9Yvy94D/Y9JuSWxZEZ62HJyiJRJBWWvAekF6zuztq/Dw+SxcftEKMeV80GfRFHvXhZYPMr0eOfh2AtLFlbJAqDsGBzYS2PTaxBoFVKAdQ5C6spmvZVfJxJ750oHAU2yl9qWwVuMpBLYI9Uw+KSRaLozrPIdqnNQXt+DqSEDSHhVp466XHB+ZSjCixxqR4e7eJ2owbmoLOYcnNUc5xkpJB0wWFixko3GLNapjKVsLhokX5gYCY4zAW4QY4dVzpvqk7nx19Pwo6/wpxfdp40YQc/AK9TDbLKOZzD6+GedA5NGcCnykA7o5zTPoxYIemS97C4bhHCLbRC0iVcEMj4DcvLLozDYmKRhzPnnV3iQaSD0eYHf/a1RlPdNEKKofWrEgQLezem1Y3+wwf7sUeCpvf2V4tcrZJIHiOTnMR1s4Tnr1S0h7XJImNKotvoXDcLq4ibZBEiLoma5CSumKW9ylmsM2C6Q9hkkTEm1ZB0ySQsEg7UbO2OmkPAIVOjQ2NU6Gp5L+lK6GMlJF0yMospZJExx2ppj4z6LEZQX4SwapKT5MAsZBECMi0S5bpZyCIEkqlJeumsOL4mObviglkkyM3mzIVlIMYeZ0LSBVcc85aoZRoWNTImSmy+yJXzidFxLiRdMg2LlNcfzl4o1L4MQh9nQ9KlGxZL++5plS9xCudD0iXc+BWIOmMstSojUsqN5uyFGhBED7kJSZfUwiLlbdXEGloUgBg/cheSLomFJayDrJpY1Ach+pDbkHTBsEAQLOhNSrKG4LBGo1jEIHIfkl68+1/McT7xthRyicGL/eDHKGuoScsdJuVHosVv+fNTY7c3nIhPoUIShXf3v177o8kDCgWhw7ci8mJ9X5RoDQAAAABJRU5ErkJggg==",alt:"Abstract Shape"}),(0,g.jsxs)(bb,{children:[(0,g.jsx)(wb,{children:"Lab Management System"}),(0,g.jsx)(kb,{children:"Laboratories require meticulous organization and data management. A robust Lab Management System (LMS) can automate processes such as sample tracking, data entry, and reporting, which streamlines operations and ensures compliance with industry standards."}),(0,g.jsx)(Sb,{children:"Learn more"})]}),(0,g.jsx)(jb,{children:(0,g.jsx)(Cb,{src:xb,alt:"Laboratory Technician"})})]}),(0,g.jsxs)(Ob,{children:[(0,g.jsx)(Rb,{children:"Lab Software Services We Offer"}),(0,g.jsxs)(Pb,{children:[(0,g.jsxs)(Ab,{children:[(0,g.jsx)(wb,{children:"My Booking Dashboard"}),(0,g.jsx)(zb,{children:'The "My Booking Dashboard" allows users to view and manage their current, past, and upcoming lab equipment or room bookings. Users can check the status of their bookings, modify them, or cancel them if necessary.'}),(0,g.jsxs)(Mb,{children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Booking"}),(0,g.jsx)("th",{children:"Status"}),(0,g.jsx)("th",{children:"Edit"}),(0,g.jsx)("th",{children:"Cancel"})]})}),(0,g.jsx)("tbody",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"Microscope"}),(0,g.jsx)("td",{children:"Booked"}),(0,g.jsx)("td",{children:(0,g.jsx)("button",{children:"Edit"})}),(0,g.jsx)("td",{children:(0,g.jsx)("button",{children:"Cancel"})})]})})]})]}),(0,g.jsxs)(Ab,{children:[(0,g.jsx)(wb,{children:"Equipment Slot Booking"}),(0,g.jsx)(zb,{children:"Book specific lab equipment for a given time slot. Select the equipment and the time slot for booking."})]}),(0,g.jsxs)(Ab,{children:[(0,g.jsx)(wb,{children:"All User Dashboard"}),(0,g.jsx)(zb,{children:"Admin users can view the overall lab usage statistics and manage bookings."})]}),(0,g.jsxs)(Ab,{children:[(0,g.jsx)(wb,{children:"All User Booking List"}),(0,g.jsx)(zb,{children:"A detailed list of all users' bookings. Admins can manage or intervene if necessary."}),(0,g.jsxs)(Mb,{children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"User"}),(0,g.jsx)("th",{children:"Equipment"}),(0,g.jsx)("th",{children:"Status"}),(0,g.jsx)("th",{children:"Edit"}),(0,g.jsx)("th",{children:"Cancel"})]})}),(0,g.jsx)("tbody",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:"John Doe"}),(0,g.jsx)("td",{children:"Lab Microscope"}),(0,g.jsx)("td",{children:"Completed"}),(0,g.jsx)("td",{children:(0,g.jsx)("button",{children:"Edit"})}),(0,g.jsx)("td",{children:(0,g.jsx)("button",{children:"Cancel"})})]})})]})]}),(0,g.jsxs)(Ab,{children:[(0,g.jsx)(Tb,{children:"Send Mail"}),(0,g.jsx)(zb,{children:"Use this section to send notifications, reminders, or updates via email."}),(0,g.jsx)(Ib,{children:"Send Email"})]})]})]})]}),Nb=n.p+"static/media/Bloghreos.5aa2e0e24314590ba71c.jpg",Fb=n.p+"static/media/Pritam.3b843605de98c7062a24.jpg",Db=n.p+"static/media/Ashutosh.d4b90e7f5ddbbe2e4acc.png",_b=si.section`
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
`,Bb=si.div`
  max-width: 700px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,Hb=si.h1`
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
`,Wb=si.p`
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,Ub=si.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 30px;
  }
`,qb=si.a`
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
`,Vb=si.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,Gb=si.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;

  &:before {
    content: "✔";
    color: black;
    margin-right: 10px;
  }
`,Kb=si.div`
  position: relative;
  max-width: 470px;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`,Jb=si.img`
  width: 100%;
  border-radius: 15px;
`,Qb=si.div`
  position: absolute;
  bottom: -63px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,$b=si.div`
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`,Yb=si.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`,Zb=si.div`
  font-size: 14px;
  color: #333;
`,Xb=()=>(0,g.jsxs)(_b,{children:[(0,g.jsxs)(Bb,{children:[(0,g.jsxs)(Hb,{children:["Stay Informed with the Latest Updates and ",(0,g.jsx)("span",{children:"Blog Highlight"})]}),(0,g.jsx)(Wb,{children:"Stay informed with the latest updates and blog highlights, featuring essential insights and expert analysis."}),(0,g.jsxs)(Ub,{children:[(0,g.jsx)(qb,{href:"https://play.google.com/store/search?q=atomwalk&c=apps&hl=en",primary:!0,children:"Download Atomwalk Apps"}),(0,g.jsx)(qb,{href:"/demo.html",children:"Try Demo"})]}),(0,g.jsxs)(Vb,{children:[(0,g.jsx)(Gb,{children:"eliminate repetitive tasks with Jula"}),(0,g.jsx)(Gb,{children:"productive and enthusiastic team member"}),(0,g.jsx)(Gb,{children:"Streamline lead tracking"})]})]}),(0,g.jsxs)(Kb,{children:[(0,g.jsx)(Jb,{src:Nb,alt:"Blog Preview"}),(0,g.jsxs)(Qb,{children:[(0,g.jsxs)($b,{children:[(0,g.jsx)(Yb,{src:Fb,alt:"User 1"}),(0,g.jsxs)(Zb,{children:["Ashutosh Mohapatra - Following",(0,g.jsx)("br",{}),"The Impact of Technology on the Workplace: Atomwalk CRM On-the-Go"]})]}),(0,g.jsxs)($b,{children:[(0,g.jsx)(Yb,{src:Db,alt:"User 2"}),(0,g.jsxs)(Zb,{children:["Pritam Kumar Nayak - Following",(0,g.jsx)("br",{}),"Tips You Must know: Atomwalk HRM On-the-Go"]})]})]})]})]}),ew=si.div`
  background-color: rgb(255 246 247);
`,tw=si.p`
  grid-column: span 3;
  text-align: center;
  color: #ff0000;
  font-size: 40px;
  font-weight: 500;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,nw=si.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on mobile */
  }
`,rw=si.div`
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
`,ow=si.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`,iw=si.div`
  padding: 15px;
`,aw=si.span`
  font-size: 12px;
  color: #007BFF;
  font-weight: bold;
  text-transform: uppercase;
`,lw=si.h2`
  font-size: 18px;
  color: #333;
  margin: 10px 0;
`,sw=si.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #888;
  margin-top: auto;
`,cw=si.span`
  display: flex;
  align-items: center;
`,uw=si.span`
  font-size: 12px;
`,dw=si.div`
  padding: 20px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`,pw=si.div`
  display: flex;
  align-items: center;
`,fw=si.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 250px;

  @media (max-width: 768px) {
    width: 100%;
  }
`,hw=si.button`
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
`,mw=()=>{const[e,t]=(0,o.useState)(""),n=[{id:1,title:"The Impact of Technology on the Workplace: Atomwalk CRM On-the-Go",category:"Technology",image:"https://www.homecareinsight.co.uk/2020/07/connected-technology.jpg",author:"Ashutosh Mohapatra",date:"August 20, 2024"},{id:2,title:"The Impact of Technology on the Workplace: How Technology is Changing",category:"Technology",image:"https://paas-s3-broker-prod-lon-2edbd31f-65e0-4d35-9755-fde7c3b1b292.s3.amazonaws.com/images/Tech_2.2e16d0ba.fill-960x540.png",author:"A Sriya",date:"April 20, 2024"},{id:3,title:"5 Common HR Software Problems and Troubleshooting Tips You Must know: Atomwalk HRM On-the-Go",category:"Technology",image:"https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg",author:"Pritam Kumar Nayak",date:"March 23, 2024"},{id:4,title:"The Impact of Technology on the Workplace: How Technology is Changing",category:"Technology",image:"https://koala.sh/api/image/v2-213fq-qwlz7.jpg?width=1216&height=832&dream",author:"Ernie Smith",date:"August 20, 2022"},{id:5,title:"The Impact of Technology on the Workplace: How Technology is Changing",category:"Technology",image:"https://images.saymedia-content.com/.image/t_share/MjAxNzE5OTgxMjA3OTg3ODU1/examples-of-digital-technology.jpg",author:"Eric Smith",date:"August 20, 2022"},{id:6,title:"The Impact of Technology on the Workplace: How Technology is Changing",category:"Technology",image:"https://miro.medium.com/v2/resize:fit:664/1*K3Mb7l3_-saN81lhBUBrIA.jpeg",author:"Tracey Wilson",date:"August 20, 2022"}].filter((t=>t.title.toLowerCase().includes(e.toLowerCase()))),r=()=>{window.location.href="/BlogDetails.html"};return(0,g.jsxs)(ew,{children:[(0,g.jsxs)(dw,{children:[(0,g.jsx)("h2",{style:{color:"#454545"},children:"Latest Post"}),(0,g.jsxs)(pw,{children:[(0,g.jsx)(fw,{type:"text",placeholder:"Search by title...",value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)(hw,{onClick:()=>console.log("Searching..."),children:"Search"})]})]}),(0,g.jsx)(nw,{children:n.length>0?n.map((e=>(0,g.jsxs)(rw,{onClick:r,children:[(0,g.jsx)(ow,{src:e.image,alt:e.title}),(0,g.jsxs)(iw,{children:[(0,g.jsx)(aw,{children:e.category}),(0,g.jsx)(lw,{children:e.title}),(0,g.jsxs)(sw,{children:[(0,g.jsx)(cw,{children:e.author}),(0,g.jsx)(uw,{children:e.date})]})]})]},e.id))):(0,g.jsxs)(tw,{children:['No posts found for "',e,'"']})})]})},gw=()=>(0,g.jsxs)("div",{children:[(0,g.jsx)(Xb,{}),(0,g.jsx)(mw,{})]}),yw=si.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,xw=si.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`,vw=si.h2`
  font-size: 2rem;
  color: #333;
  margin: 20px 0;
`,bw=si.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`,ww=si.div`
  text-align: center;
  margin: 30px 0;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`,kw=()=>(0,g.jsxs)(yw,{children:[(0,g.jsx)(xw,{children:"Revolutionize Workforce Management with Atomwalk HRM On-The-Go"}),(0,g.jsx)(ww,{children:(0,g.jsx)("img",{src:"https://www.dnkinfotelecom.com.br/wp-content/uploads/2021/01/WFM.png",alt:"Workforce Management"})}),(0,g.jsx)(bw,{children:"Managing a dynamic workforce has never been easier. Atomwalk HRM On-The-Go empowers businesses to streamline their HR processes with smart, mobile-first solutions that work in real-time. Designed for today\u2019s fast-paced and distributed workforce, the app ensures that every aspect of employee management is simplified and efficient."}),(0,g.jsx)(bw,{children:"With our app, employees can check-in and check-out seamlessly using the built-in location tracking feature. No more outdated manual attendance records or guesswork. Our real-time GPS location tracking ensures 100% accuracy in attendance management, making it easier than ever for employees to log their presence from any location. This is especially useful for remote teams or employees who are frequently on the move."}),(0,g.jsx)(bw,{children:"Not only does Atomwalk HRM help track attendance, but it also offers employees a smart status calendar view, providing them with a clear visual of their attendance history. Employees can easily monitor their hours, check for missed check-ins, and stay on top of their time management. This improves transparency and promotes accountability across the workforce."}),(0,g.jsx)(bw,{children:"For managers, Atomwalk HRM provides a bird's-eye view of attendance trends, helping you make informed decisions about staffing and time-off management. With comprehensive reports and insights, you can ensure that your team stays productive and compliant, no matter where they are working from."}),(0,g.jsx)(vw,{children:"Seamless Leave and Claim Management Anytime, Anywhere"}),(0,g.jsx)(ww,{children:(0,g.jsx)("img",{src:"https://media.licdn.com/dms/image/D5612AQG26zqve50FHQ/article-cover_image-shrink_720_1280/0/1693328750791?e=2147483647&v=beta&t=U9v7s3R6xZco5ui_VMkZKcRfJB4I9PiJ40m8pDj4uUk",alt:"Leave Management"})}),(0,g.jsx)(bw,{children:"Say goodbye to paperwork and complicated approval workflows. With Atomwalk HRM On-The-Go, employees can apply for leave directly from the app\u2014whether it's Earned Leave, Loss of Pay, or Work From Home. Managers are immediately notified of these requests and can approve, reject, or provide feedback within seconds, drastically reducing approval delays and ensuring that time-off requests are handled smoothly."}),(0,g.jsx)(bw,{children:"Employees can track their leave status, check remaining leave balances, and even plan future leave requests with ease. Whether they are on the go or at the office, managing time-off has never been this intuitive."}),(0,g.jsx)(bw,{children:"But that\u2019s not all. Expense claims are also made simple with Atomwalk HRM. Employees can submit claims by uploading receipts directly from their phone\u2019s storage or by capturing real-time photos of bills and receipts using their mobile device. The app allows them to itemize and categorize expenses, ensuring a smooth submission process."}),(0,g.jsx)(ww,{children:(0,g.jsx)("img",{src:"https://www.cflowapps.com/wp-content/uploads/2023/02/clms_prcsautomtn.jpg",alt:"Claim Processing"})}),(0,g.jsx)(bw,{children:"For managers, reviewing claims is equally streamlined. The app enables them to review all supporting documents and approve, reject, or send the claim back for revisions based on their approval limits. This eliminates the hassle of chasing down paper receipts or emails, speeding up the reimbursement process."}),(0,g.jsx)(bw,{children:"Atomwalk HRM On-The-Go enhances efficiency across the board, empowering employees and managers to handle their HR tasks anytime, anywhere, all from their mobile device. It\u2019s more than just an app\u2014it\u2019s a complete HR solution in your pocket."}),(0,g.jsx)(vw,{children:"Why Choose Atomwalk HRM On-The-Go?"}),(0,g.jsxs)("ul",{style:{color:"black"},children:[(0,g.jsx)("li",{children:"Real-Time Location Tracking: Know exactly where your team is clocking in from with precise GPS-enabled check-ins and check-outs."}),(0,g.jsx)("li",{children:"Comprehensive Attendance Management: Track attendance trends, generate reports, and make data-driven decisions to optimize workforce management."}),(0,g.jsx)("li",{children:"Smart Leave Management: Apply, review, and manage leave requests instantly, ensuring that your team always operates at peak efficiency."}),(0,g.jsx)("li",{children:"Efficient Claim Processing: Submit, review, and approve expense claims with ease, all from your mobile device."}),(0,g.jsx)("li",{children:"Managerial Control: Managers have access to insightful dashboards for approvals, employee data, and team performance, all at their fingertips."})]}),(0,g.jsx)(bw,{children:"Atomwalk HRM On-The-Go transforms tedious HR tasks into quick, seamless interactions. Whether you\u2019re a growing business or managing a large distributed team, Atomwalk HRM has you covered."})]}),Sw=n.p+"static/media/HrApp.0eb9df2f1d6d57adc2bd.png",jw=si.div`
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
`,Cw=si.div`
  flex: 1;
  padding-right: 20px;
  
  @media (max-width: 768px) {
    padding-right: 0;
  }
`,Ew=si.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 10px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,Ow=si.p`
  color: #ffb3ff;
  font-size: 1rem;
  margin-bottom: 10px;
`,Rw=si.p`
  font-size: 0.9rem;
  color: #ddd;
  margin-bottom: 20px;
`,Pw=si.div`
  flex: 1;
  text-align: center;
  margin-top:50px;
  
  img {
    max-width: 110%;
    height: auto;
    border-radius: 12px;
  }
`,Aw=()=>(0,g.jsxs)("div",{style:{backgroundColor:"white"},children:[(0,g.jsxs)(jw,{children:[(0,g.jsxs)(Cw,{children:[(0,g.jsx)(Ew,{children:"Streamline Your HR Processes with ATOMWALK HRM On-The-Go: Attendance, Leave, and Claims Management Simplified "}),(0,g.jsx)(Ow,{children:"By Atomwalk"}),(0,g.jsx)(Rw,{children:"6 minute read \u2022 October 01, 2024"})]}),(0,g.jsx)(Pw,{children:(0,g.jsx)("img",{src:Sw,alt:"Task Paralysis Article"})})]}),(0,g.jsx)(kw,{})]}),Tw=n.p+"static/media/hr.e13184a1f188a146402d.png",zw=n.p+"static/media/payroll.039b976618946de508d7.png",Mw=n.p+"static/media/attendance1.c91a722f5930666fca97.png",Iw=n.p+"static/media/onboarding.6125efea4152d41fc3fc.png",Lw=n.p+"static/media/empdata.504d86deb99fc409ff66.png",Nw=n.p+"static/media/leave-management.8af525284b9c7ca1769c.png",Fw=n.p+"static/media/claimmanage.81c59bd374c0f3c4875c.png",Dw=n.p+"static/media/exit-process.6c14ce06c14fb114a462.png",_w=n.p+"static/media/performance-management.3d529838ac44380c1f09.png",Bw=si.div`
  padding: 110px 20px;
  background-color: #f0ebf7;
  text-align: center;
`,Hw=si.h2`
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
`,Ww=(si.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,si.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`),Uw=si.div`
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
`,qw=si.div`
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
`,Vw=si.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,Gw=si.p`
  font-size: 1em;
  color: #666;
`,Kw=()=>{const e=e=>{window.location.href=`/${e}.html`};return(0,g.jsxs)(Bw,{children:[(0,g.jsx)(Hw,{children:"Key Features"}),(0,g.jsxs)(Ww,{children:[(0,g.jsxs)(Uw,{onClick:()=>{e("employeehr")},children:[(0,g.jsx)(qw,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:Iw,alt:"Onboarding"})}),(0,g.jsx)(Vw,{children:"On-Boarding Process:"}),(0,g.jsx)(Gw,{children:"Seamlessly onboard new employees by setting up departments, grades, and HR policies from one place."})]}),(0,g.jsxs)(Uw,{onClick:()=>{e("employeehr")},children:[(0,g.jsx)(qw,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:Lw,alt:"EmployeeData"})}),(0,g.jsx)(Vw,{children:"Employee Data:"}),(0,g.jsx)(Gw,{children:"Maintain accurate employee records with the ability to add, update, and delete employee details. Easily manage employee data for better decision-making."})]}),(0,g.jsxs)(Uw,{onClick:()=>{e("attendance")},children:[(0,g.jsx)(qw,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:Mw,alt:"Attendance"})}),(0,g.jsx)(Vw,{children:"Attendance:"}),(0,g.jsx)(Gw,{children:"Track employee attendance in real-time, with built-in GPS tracking and the ability to mark attendance remotely."})]}),(0,g.jsxs)(Uw,{onClick:()=>{e("leave")},children:[(0,g.jsx)(qw,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:Nw,alt:"Reliability"})}),(0,g.jsx)(Vw,{children:"Leave Management:"}),(0,g.jsx)(Gw,{children:"Handle leave requests with ease. Managers can approve or reject requests, view leave history, and ensure employees stay within allotted time off."})]})]}),(0,g.jsxs)(Ww,{children:[(0,g.jsxs)(Uw,{onClick:()=>{e("claim")},children:[(0,g.jsx)(qw,{bgColor:"#EFF498",children:(0,g.jsx)("img",{src:Fw,alt:"Reliability"})}),(0,g.jsx)(Vw,{children:"Claim Management:"}),(0,g.jsx)(Gw,{children:"Submit and manage claims such as travel or expense reimbursements. Employees can upload receipts, and managers can review and approve claim"})]}),(0,g.jsxs)(Uw,{onClick:()=>{e("payroll")},children:[(0,g.jsx)(qw,{bgColor:"#D99B80",children:(0,g.jsx)("img",{src:zw,alt:"Reliability"})}),(0,g.jsx)(Vw,{children:"Payroll:"}),(0,g.jsx)(Gw,{children:"Automate payroll processing with integrated features for salary calculations, deductions, and disbursements. Ensure timely and accurate payments."})]}),(0,g.jsxs)(Uw,{onClick:()=>{e("appraisal")},children:[(0,g.jsx)(qw,{bgColor:"#F7DAF4",children:(0,g.jsx)("img",{src:_w,alt:"Performance Mangement"})}),(0,g.jsx)(Vw,{children:"Performance Mangement System:"}),(0,g.jsx)(Gw,{children:"The appraisal system supporting KPI-based evaluations, with self-assessment, manager scoring, and grade normalization for fair, transparent performance reviews and structured reporting."})]}),(0,g.jsxs)(Uw,{onClick:()=>{e("employeehr")},children:[(0,g.jsx)(qw,{bgColor:"#F7DADB",children:(0,g.jsx)("img",{src:Dw,alt:"Reliability"})}),(0,g.jsx)(Vw,{children:"Exit Process:"}),(0,g.jsx)(Gw,{children:"Simplify the employee exit process, from resignation submission to final clearance. Ensure smooth offboarding with documented workflows"})]})]})]})},Jw=n.p+"static/media/clock.cafb3982fb150a806a77.png",Qw=n.p+"static/media/premium.32087c7a3627bd39605f.gif",$w=n.p+"static/media/optimization.63421cd7d827365fb19f.png",Yw=n.p+"static/media/access.21a604edb66b884a0028.png",Zw=n.p+"static/media/best-customer-experience.973ae41dfe6d7a9c02d2.png",Xw=n.p+"static/media/accessible.3ff76038314c071df14d.png",ek=n.p+"static/media/easy-to-use.cae7d597f3ab4e038c1d.png",tk=n.p+"static/media/administer.85579c0cb192be159e06.png",nk=n.p+"static/media/reconciliation.96079e275f4303921aeb.png",rk=n.p+"static/media/reduce-time.3ede8db68ce291b7857d.png",ok=n.p+"static/media/better_experience.904fb1df701730ef3db1.png",ik=n.p+"static/media/transparency.12d7bff3d2e4b289e06b.png",ak=n.p+"static/media/brand_reputaion.6475ab9d5f12592403af.png",lk=n.p+"static/media/money_saving.6876708d842414cd1331.png",sk=si.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #fff;
  
`,ck=si.h1`
  font-size: 2rem;
  color: #000;
  margin-bottom: 10px;
  font-weight: 600;

  span {
    color: #6a1b9a; /* Purple highlight */
  }
`,uk=si.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,dk=si.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,pk=si.div`
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
`,fk=si.h3`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 10px;
  font-weight: 600;
`,hk=si.p`
  color: #6e6e6e;
  font-size: 0.9rem;
  line-height: 1.4;
`,mk=[{title:"Optimize",text:"maximize time & effort efficiency",bgColor:"#d9f5e3",icon:Jw},{title:"Streamline",text:"simplify claim management",bgColor:"#f2e3ff",icon:tk},{title:"Verify",text:"ensure precise claim reconciliation",bgColor:"#ffe8cc",icon:nk},{title:"Accelerate",text:"minimize claim processing delays",bgColor:"#fff1d0",icon:rk},{title:"Enhance",text:"deliver a seamless claim experience",bgColor:"#d7faff",icon:ok},{title:"Elevate",text:"increase claim transparency",bgColor:"#d9f5e3",icon:ik}],gk=[{title:"Save",text:"time & effort",bgColor:"#d9f5e3",icon:Jw},{title:"Administer",text:"uniform leave policy",bgColor:"#f2e3ff",icon:tk},{title:"Ensure",text:"accurate leave accounting",bgColor:"#ffe8cc",icon:nk},{title:"Reduce",text:"unnecessary expense",bgColor:"#fff1d0",icon:rk},{title:"Deliver",text:"an outstanding employee experience",bgColor:"#d7faff",icon:ok},{title:"Improve",text:"employer brand image",bgColor:"#d9f5e3",icon:ik}],yk=[{title:"Maximize Efficiency",text:"Save valuable time and effort with seamless processes",bgColor:"#d9f5e3",icon:$w},{title:"Unmatched Quality",text:"We consistently deliver top-notch results for every user",bgColor:"#f2e3ff",icon:Qw},{title:"Lightning-Fast Access",text:"Enjoy quick and easy access to our application anywhere, anytime",bgColor:"#ffe8cc",icon:Yw},{title:"Seamless Experience",text:"Experience flawless and intuitive user interactions",bgColor:"#fff1d0",icon:Zw},{title:"User-Centric Design",text:"Delivering an outstanding and effortless user experience",bgColor:"#d7faff",icon:ek},{title:"Universal Accessibility",text:"Access our platform seamlessly on both mobile and web",bgColor:"#d9f5e3",icon:Xw}],xk=[{title:"Streamline",text:"eliminate time-consuming paperwork",bgColor:"#d9f5e3",icon:Jw},{title:"Optimize",text:"cut unnecessary operational expenses",bgColor:"#fff1d0",icon:lk},{title:"Boost",text:"elevate employer brand reputation",bgColor:"#d9f5e3",icon:ak},{title:"Standardize",text:"enforce a consistent company policy",bgColor:"#f2e3ff",icon:tk},{title:"Performance",text:"Bulk processing with high TPS.",bgColor:"#ffe8cc",icon:nk},{title:"Reliabilty",text:"24/7 availability with 100% uptime on mobile and web ",bgColor:"#d7faff",icon:ok}],vk=e=>{let{data:t}=e;const n="Claim"===t?mk:"lead"==t?yk:"HR"==t?xk:gk;return(0,g.jsxs)(sk,{children:[(0,g.jsxs)(ck,{children:["All-in-One ",t," Management, ",(0,g.jsx)("span",{children:"Faster and Easier."})]}),(0,g.jsx)(uk,{children:n.map(((e,t)=>(0,g.jsxs)(dk,{children:[(0,g.jsx)(pk,{bgColor:e.bgColor,children:(0,g.jsx)("img",{src:e.icon,alt:`${e.title} Icon`})}),(0,g.jsx)(fk,{children:e.title}),(0,g.jsx)(hk,{children:e.text})]},t)))})]})},bk=n.p+"static/media/faq.0aaf4c93b37d158961e9.png",wk=si.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: aliceblue;
  
  @media (min-width: 768px) {
    padding: 40px 20px;
  }
`,kk=si.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #663399;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,Sk=si.div`
  width: 100%;
  max-width: 700px;
`,jk=si.div`
  background-color: #f8f5ff;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,Ck=si.div`
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
`,Ek=si.div`
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
`,Ok=si.div`
  text-align: center;
  margin-top: 50px;
  padding: 30px;
  width: 100%;
  max-width: 700px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`,Rk=si.h2`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 20px;
`,Pk=si.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 30px;
`,Ak=si.a`
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
`,Tk=si.img`
  max-width: 200px;
  margin-bottom: 10px;
`,zk=e=>{let{data:t,res:n}=e;const[r,i]=(0,o.useState)(null),a=t?[{question:"What is Atomwalk CRM?",answer:"Atomwalk CRM is a customer relationship management platform designed to help businesses manage their interactions with customers, leads, suppliers, and partners. It offers a comprehensive set of tools for task management, lead tracking, customer support, and sales process automation, allowing businesses to improve communication, streamline operations, and increase productivity."},{question:"How can I use Atomwalk CRM?",answer:"You can use Atomwalk CRM by signing up for an account and accessing its features either through a web app or mobile application. Once logged in, you can create customer profiles, manage leads, assign tasks, and track the progress of deals. Atomwalk CRM provides intuitive dashboards and reporting tools that help users oversee customer interactions, sales pipelines, and team activities efficiently."},{question:"How does CRM work?",answer:"A CRM works by consolidating customer and lead data into a centralized system. It records and tracks all interactions\u2014emails, calls, meetings\u2014making it easier for teams to access important information at any time. With Atomwalk CRM, you can manage leads through each stage of the sales pipeline, assign tasks to team members, automate follow-ups, and generate reports. By organizing all your customer-related data in one place, CRM systems help businesses improve customer service, boost sales, and drive growth."},{question:"How to add a Lead?",answer:"To add a lead in Atomwalk CRM, go to the Lead List section, where you can click on Add Lead. Fill in the required details such as name, contact information, and relevant notes about the lead's interest or status. You can also upload bulk leads if you have a file prepared. Once added, you can assign tasks to follow up on the lead and track its progress in the sales pipeline."},{question:"How do I track  a lead?",answer:"In Atomwalk CRM, leads can be tracked through the sales pipeline. You can view all leads in the Lead List and monitor their status, such as active or inactive, and see which tasks or follow-ups are assigned to them. The system also provides a visual representation of where each lead is in the sales cycle, and you can set reminders for future actions or update the lead's status based on recent interactions. This ensures that no lead is neglected and helps optimize conversion rates."}]:[{question:"What is Atomwalk HRM?",answer:"Atomwalk HRM is an all-in-one Human Resource Management solution designed to streamline HR processes such as employee attendance tracking, leave management, claims submission, payroll, and more. With its mobile app, Atomwalk HRM On-The-Go, employees and managers can manage HR tasks like real-time attendance, leave requests, approvals, and claims from anywhere, enhancing accessibility and efficiency. This system simplifies workflows from onboarding to exit, making it ideal for businesses looking to automate and optimize their HR operations while improving overall employee experience."},{question:"How can I use Atomwalk HRM?",answer:"You can use Atomwalk HRM by accessing it through its web-based platform or the Atomwalk HRM On-The-Go mobile app. Once logged in, employees can manage their attendance, apply for leave, submit claims, and access payroll information. Managers can approve or reject leave and claims, view reports, and monitor employee attendance in real-time. The system is designed to be user-friendly, with a dashboard that provides easy navigation to the HR functionalities relevant to your role."},{question:"How does HRM work?",answer:"Atomwalk HRM works by automating core HR processes like attendance tracking, leave management, claims submission, and payroll handling. The system integrates employee data and allows for real-time updates on various HR activities. It helps managers approve requests, generate reports, and track employee productivity, while employees can manage their own data through the self-service portal. The solution is designed to reduce paperwork and manual effort, improving efficiency and accuracy across HR operations."},{question:"Why should I choose Atomwalk HRM?",answer:["Zero Paperwork, managing the details anytime/anywhere digitally.","Documents are stored in the document management system (S3 bucket), accessible anytime by authorized personnel for future audit needs.","Expenses can be linked to respective projects (if using Project Management modules), aiding in project margin tracking and efficient cost control.","Automatic integration with accounting systems.","Email and WhatsApp integration.","Mobile app available for ESS (Employee Self-Service) for instant use.","Referral System.","Unlimited expense heads can be added as per the need."]},{question:"How to add a claim?",answer:"To add a claim in Atomwalk HRM, go to the 'Claims' section from the dashboard. Click on 'Submit New Claim,' then fill in the details such as claim type, amount, and description. You can also attach relevant receipts or documents. Once done, submit the claim for approval, and you\u2019ll be notified of its status in real-time. The system supports various claim categories, ensuring easy tracking and management of expenses."},{question:"How do I apply for a leave?",answer:"To apply for leave in Atomwalk HRM, log in to your account and navigate to the 'Leave' section. Select 'Apply Leave,' choose the type of leave (e.g., vacation, sick leave, WFH), specify the dates, and provide any necessary details or attachments. Submit the request, and you will be able to track its status as it moves through the approval process."},{question:"How can a manager approve a leave?",answer:"A manager can approve a leave in Atomwalk HRM by logging in and navigating to the 'Leave Approvals' section. There, they can review pending leave requests, check the employee's leave balance and history, and either approve or reject the request with a single click. The system provides options to add comments, and employees are notified instantly about the approval status."},{question:"Why and how does Atomwalk handle the company exit process?",answer:"Atomwalk\u2019s Exit Process module is designed to ensure a structured, seamless, and compliant offboarding experience for employees. It handles every aspect of the process, from resignation or termination to final settlement, asset handover, and exit interviews. With automated tracking and task management, it guarantees a smooth transition, protects company data and assets, and ensures legal compliance, leaving both the organization and the departing employee with a positive experience."}];return(0,g.jsxs)(wk,{children:[(0,g.jsx)(kk,{children:"All the A's to your Q's"}),(0,g.jsx)(Sk,{children:a.map(((e,t)=>(0,g.jsxs)(jk,{children:[(0,g.jsxs)(Ck,{onClick:()=>(e=>{i(r===e?null:e)})(t),children:[e.question,(0,g.jsx)("span",{children:r===t?"-":"+"})]}),(0,g.jsx)(Ek,{isOpen:r===t,children:Array.isArray(e.answer)?(0,g.jsx)("ul",{children:e.answer.map(((e,t)=>(0,g.jsx)("li",{children:e},t)))}):(0,g.jsx)("p",{children:e.answer})})]},t)))}),(0,g.jsxs)(Ok,{children:[(0,g.jsx)(Tk,{src:bk,alt:"FAQ"}),(0,g.jsx)(Rk,{children:"Still have questions?"}),(0,g.jsx)(Pk,{children:"Book a call with our team to learn how to integrate ATOMWALK HRM with your business."}),(0,g.jsx)(Ak,{onClick:()=>{window.location.href="/demo.html"},children:"Book a demo"})]})]})},Mk=si.div`
  background-color: white;
  color: blue;
  width: 100%;
  /* padding-top: 10px; */
  padding-bottom: 10px;
  /* height: 1472px; */
`,Ik=si.div`
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
`,Lk=si.div`
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
`,Nk=si.div`
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
`,Fk=si.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 600;
  line-height: 61.2px;
  margin: 0px 0px 16px;
`,Dk=si.p`
  color: #454544;
  /* width: 65%; */
  font-size: 21px;
  /* word-wrap: normal; */
  /* line-height: 31.504px; */
  /* margin: 0px 0px 24px; */
  @media (max-width: 768px) {
    width: 100%;
  }
`,_k=si.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 60%;
  line-height: 26px;
  padding: 44px 0px 0px;
`,Bk=si.button`
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
`,Hk=si.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`,Wk=si.div`
  line-height: 26px;
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`,Uk=()=>(0,g.jsxs)(Mk,{children:[(0,g.jsx)(Ik,{children:(0,g.jsxs)(Lk,{children:[(0,g.jsxs)(Nk,{children:[(0,g.jsx)(Fk,{children:"Atomwalk HRM On-The-Go"}),(0,g.jsx)(Dk,{children:"A smart, mobile-first solution for managing employee attendance, leave requests, claims, and real-time location tracking\u2014right from your phone"}),(0,g.jsx)(Bk,{onClick:()=>{window.location.href="/demo.html"},children:(0,g.jsx)(Hk,{children:"Request a Demo"})})]}),(0,g.jsx)(_k,{children:(0,g.jsx)(Wk,{children:(0,g.jsx)("img",{src:Tw,alt:"Pricing Challenge Background"})})})]})}),(0,g.jsx)(vk,{data:"HR"}),(0,g.jsx)(Kw,{}),(0,g.jsx)(zk,{})]}),qk=n.p+"static/media/claim.479c41ec78032b2383c8.png",Vk=n.p+"static/media/leave1.09feac747470d0615599.png",Gk=n.p+"static/media/hrm_hero_img.b2b560b7a515a331176a.png",Kk=si.div`
  padding: 20px;
  background-color: ${e=>e.bgcolor?e.bgcolor:"#f0ebf7"};
  @media (min-width: 768px) {
    padding: 50px;
  }
`,Jk=si.div`
  margin-bottom: 40px;
`,Qk=si.h1`
  margin-top: 80px;
  font-size: 35px;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,$k=si.div`
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
`,Yk=si.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`,Zk=si.div`
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
`,Xk=si.p`
text-align: center;
color: #4A90E2;
font-weight: bold;

`,eS=si.div`
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
`,tS=e=>{let{data:t,bgcolors:n}=e;const r={Claim:[{step:"Expense Item Setup"},{step:"Expense Advance for Employee"},{step:"Claim Expense"},{step:"Approval Of Claim"},{step:"Settlement of Claims"},{step:"Reports & Dashboards"}],Leave:[{step:"Setup Holiday Calendar"},{step:"Leave Dashboard"},{step:"Manage Leave by Employee"},{step:"Manage Leave by Manager"},{step:"Reports & Analysis"}],Payroll:[{step:"Payroll Setup & Controls"},{step:"Generate Monthly Salary"},{step:"Post Salary"}],Attendance:[{step:"Check-in"},{step:"Attendance Dashboard"},{step:"Manage Attendance"}],Appraisal:[{step:"Performance Mangement System"},{step:"Self Appraisal Process "},{step:"Manager Appriasl Process "},{step:"Appriasl Rivew Process and Reports "}],HR:[{step:"On-Boarding"},{step:"Employee Data"},{step:"Exit Process"}],Lead:[{step:"Lead Capture",color:"#4A90E2"},{step:"Lead Tracking",color:"#4A90E2"},{step:"Obtain Customer Management",color:"#4A90E2"},{step:"Lead Lifecycle Management ",color:"#4A90E2"},{step:"Lost Lead Recovery and Management",color:"#4A90E2"}],Campaign:[{step:"Flexible Template Creation by User (No Restrictions)",color:"#4A90E2"},{step:"Universal Template Access for All Users",color:"#4A90E2"},{step:"Target Audience Segmentation",color:"#4A90E2"},{step:"Campaign Template Review Process",color:"#4A90E2"},{step:"Automated Campaign Trigger with Predefined Scheduler",color:"#4A90E2"}],Partner:[{step:" Add Partner",color:"#4A90E2"},{step:"Order Information Tracking",color:"#4A90E2"},{step:"Commission Management",color:"#4A90E2"},{step:"Multi-Report Generation",color:"#4A90E2"}],Customer:[{step:" Customer Uploading (Upload Customer Data)",color:"#4A90E2"},{step:"Order Management (Manage Reservations)",color:"#4A90E2"},{step:" Process-wise Order Management (Resale and Cross-Selling)",color:"#4A90E2"},{step:"Ticket Tracking (AMC Tracking)",color:"#4A90E2"},{step:"Reports and Dashboards",color:"#4A90E2"}]}[t]||[];return(0,g.jsxs)(Kk,{bgcolor:n,children:[(0,g.jsxs)(Qk,{children:["Process Flow for ",t]}),(0,g.jsx)(Jk,{children:(0,g.jsx)($k,{style:{backgroundColor:"#ffffff"},children:(0,g.jsx)(Yk,{children:r.map(((e,t)=>(0,g.jsxs)(o.Fragment,{children:[(0,g.jsx)(Zk,{children:(0,g.jsx)(Xk,{children:e.step})}),t<r.length-1&&(0,g.jsx)(eS,{})]},t)))})})})]})},nS=(n.p,n.p+"static/media/check_mark.0e730ab2b5bde0948106.png");const rS=n.p+"static/media/img1.db8c904dcae430a66a73d8526e71a235.svg";const oS=n.p+"static/media/add_claim_img.9a055c2bba7295dac45d64bb04a04aa7.svg";const iS=n.p+"static/media/emp_advance.47f2f953acff90307e031575f25a4aa3.svg";const aS=n.p+"static/media/approve_claim.1ec6d1911ec4293f92b19cff055accd6.svg";const lS=n.p+"static/media/sattle_claim.db01cb0fc07cd07f6f46644e1d54b56c.svg";const sS=n.p+"static/media/expense_claim.fe819c5f6fed879968c2f6505a935b16.svg";const cS=n.p+"static/media/holiday_calender.0356f141e6752176e65622edda7c9c42.svg";const uS=n.p+"static/media/leave_dashboard.364f838500dbe22de94eb7462c9bc5c5.svg";const dS=n.p+"static/media/add_leave.41af44048f7af19e55b89ade3f692bcf.svg";const pS=n.p+"static/media/approval_leave.2d0fcfea51af1264405792a096780307.svg";const fS=n.p+"static/media/leave_report.99de12c7d472ed6f47e7afdba34e86cc.svg";const hS=n.p+"static/media/payroll_setup.27c03a07aabe3de8e5f5c49e11a0f209.svg";const mS=n.p+"static/media/appraisal_setup.8d56db0e9680f2c79eaf4f5818b62515.svg";const gS=n.p+"static/media/onboarding.c70afc83fb95b86ef57b12a3079b01bd.svg";const yS=n.p+"static/media/employeeData.80b3a11ec9cabbd9b54af6eadca1b988.svg";const xS=n.p+"static/media/exit_process.51b811c4d0e34efbe01988ecefd2afa0.svg";const vS=n.p+"static/media/payroll-seup.5ac3bdff9f261cbfa49d54b17fa60796.svg";const bS=n.p+"static/media/generate-salary.941e7229b7419bc7b30da4d1bbf66986.svg";const wS=n.p+"static/media/post-salary.38b58bb0e0d588485e9492fddd098bea.svg";const kS=n.p+"static/media/appraisal-setup-feature.251253d252bccb667d40f76d15e4f873.svg";const SS=n.p+"static/media/self-appraisal.bb994ab17bfb97202c339ef0502301f2.svg";const jS=n.p+"static/media/emp-appraisal.ec5ebcfbd25b2cf468604114605b8d75.svg";const CS=n.p+"static/media/manager-evaluation.b1215000c57ff19889439ffeb81168d6.svg";const ES=n.p+"static/media/check-in.35e76b5d8141b8b7ec1e2ba2e5fae5e9.svg";const OS=n.p+"static/media/attendance-dashboard.9fc9346fd1292914e1ab95e5539b7da6.svg";const RS=n.p+"static/media/emp-attendance.1872bc616b85905f36d69ccca2540c9e.svg",PS=si.div`
  width: 100%;
  height: 100%;
`,AS=si.div`
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
`,TS=si.div`
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
`,zS=si.div`
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
`,MS=si.div`
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
`,IS=e=>{let{data:t}=e;const n="Claim"===t?[{title:"Simplify Claim Expense Item Setup",subtitle:"Efficiently manage and control Expense Items with Service Item category setup.",description:"Define Service Item Categories to streamline Expense Items, giving employees a quick selection process for claim submissions. This setup enables you to capture GST Applicability, Submit of Expense Document Applicability, Limits for Approval, etc., to simplify and streamline your Claim Management Process.",benefits:["Define Service Item Categories","Flexible Expense Item Setup","Analysis of expense based on expense category/Item"],imageSrc:rS,imageAlt:"Expense Setup",imgPosition:"left"},{title:"Employee Advance Tracking and Expense Claim Offset Against Advance",subtitle:"Employee Advance upload, tracking, and history of offset against Expense Claims.",description:"Manage Employee expense advance and efficiently track advance offset against each claim, offering a clear view of balances and outstanding advance amount. Enables decision-making process for effective advance amount.",benefits:["Advance Tracking","Clear offset records with claim details"],imageSrc:iS,imageAlt:"Advance",imgPosition:"right"},{title:"Simplified Claim Expenses by Employee",subtitle:"Submit and track expense claims easily, anytime, anywhere.",description:"Employee can submit expense claims by selecting an Expense item, adding project details if needed, and uploading supporting documents like bills and receipts. The mobile app feature allows employee to capture and submit receipts instantly, making the process faster and more efficient for both employee and approval & settlement process for company on real-time basis.",benefits:["Simple Claim Submission","Upload Supporting Documents","Mobile-Friendly Convenience, Instant Receipt Capture","Expense auto linkage to projects and efficient project margin tracking"],imageSrc:oS,imageAlt:"Add Claim",imgPosition:"left"},{title:"Smart Claim Flow for Quick, Transparent Approvals",subtitle:"Automated workflows simplify review and referral based on approval limit setup.",description:"Submitted claims are automatically routed to managers for review, with options to approve, reject, or send back for clarification. The system verifies manager approval authority based on grade and approval limits, forwarding claims to a higher-level manager if needed. This process maintains digital records for easy tracking and transparent decision-making. Approval process is enabled through Mobile app for real-time approval and quick settlement process.",benefits:["Flexible Review/Approval Flows","Approval limits based on Amount","Anytime, anywhere approval for speedy settlement"],imageSrc:aS,imageAlt:"Advance Tracking Icon",imgPosition:"right"},{title:"Accurate and Streamlined Claim Settlements",subtitle:"Efficient settlement process with auto flow of data to accounts and linked projects.",description:"Once approved, claims move to the settlement phase where user can view all claims and advance records side by side for easy and effective settlement processing. The screen provides direct access to claim details and attached documents, with a bulk settlement feature to handle multiple claims efficiently. This seamless process with Accounts and Project management modules.",benefits:["Clear Claim View","Direct Document Access","Bulk Settlement Option","Reliable Processing with auto Account ledger processing"],imageSrc:lS,imageAlt:"Settle Claim",imgPosition:"left"},{title:"Efficient Dashboard to Track All Expense Items",subtitle:"Instant insights on claim status and trends.",description:"The Expense Claim Dashboard provides graphical charts view for claim status and monthly trends, helping employee/Manager track claims at a glance. Extensive filter criteria based on expense category, expense item, departments, etc., for analysis and managing your expenses in a better way.",benefits:["Graphical Overviews with real-time update","Extensive Filter criteria for reports","Download reports in PDF/XLS"],imageSrc:sS,imageAlt:"Post Accounting",imgPosition:"right"}]:"Leave"===t?[{title:"Location-Wise - Simplified Management of Your Holiday Calendar",subtitle:"Easy and exhaustive way to take care of your complex organisational need of Holiday management (Single/Multi location).",description:"Manage Holiday setup digitally for your business for each Year across single/multiple locations. Holiday setup supports Mandatory and Optional holidays for each location. Supports Multiple leave types and yearly limit for each leave type. Setup enables better Project execution planning for the organisation and provides transparency for the employee to plan/utilise their Leave.",benefits:["Easy Exhaustive Setup across Single/Multi Location","Supports Audit trails and track changes in setup","Optional Holiday setup enables for each location","Transparent and accessible by all users/employees"],imageSrc:cS,imageAlt:"Holiday Calendar",imgPosition:"left"},{title:"Dashboard for Complete Leave Overview",subtitle:"Easily track, manage, and plan your time off/utilisation of Leave.",description:"Employee can view detailed summary dashboard of their leave status, including total applied, approved, and pending leave categorized by leave type. Month-wise trend analysis enables the Manager to manage risk at project planning level. The system also provides a year-wise holiday list which is accessible through Mobile app, making it simple to manage leave information and plan time off effectively. Leave details are shared with Billing/Payroll modules seamlessly to eliminate any processing errors.",benefits:["Comprehensive Overview, Detailed for each leave type","Trend Analysis for better planning and risk management","Accessible from Mobile app","Shared with Payroll and Project Management modules seamlessly"],imageSrc:uS,imageAlt:"Leave Dashboard",imgPosition:"right"},{title:"Apply Leave from Anywhere Anytime",subtitle:"Simple Leave Application: easy to apply and cancel from anywhere & anytime.",description:"Employee can apply for multiple types of leaves like Earned Leave, Work From Home, and Loss of Pay through both web and mobile apps. On submitted, the leave request automatically moves to manager's dashboard for approval, streamlining the process.",benefits:["Both Web and Mobile Convenience","Multiple leave types","Easy Application process with Holiday List Integration, to alter users"],imageSrc:dS,imageAlt:"Leave Application",imgPosition:"left"},{title:"Swift Leave Approvals from Anywhere Anytime",subtitle:"Approve/Reject Leave Requests with Ease and Precision from Approver Dashboard.",description:"Managers can easily filter leave requests by individual employee or leave type, providing a clear view of total leave applied, approved, and pending for each employee. This organized approach allows for efficient navigation and prompt action. Managers can review details before making decisions, with a mandatory remark field to ensure clear communication with employees during the approval or rejection process.",benefits:["Organized and Filter View","Comprehensive Overview","Streamlined Approval Process","Efficient Leave Approval","Mobile Convenience","Approval History"],imageSrc:pS,imageAlt:"Leave Approval",imgPosition:"right"},{title:"Organized Leave Insights for Efficient Management",subtitle:"Gain Complete Insights into Leave Patterns and Usage",description:"Managers can sort leave requests by individual employee or leave type, providing a clear and organized view. They also have access to a comprehensive annual leave report that includes all leave details across departments. This feature ensures efficient record-keeping and supports transparent leave management, helping managers make informed decisions.",benefits:["Informed Decision-Making","Exportable Reports","Leave Balances at a Glance","Customizable Reports"],imageSrc:fS,imageAlt:"Leave Reports",imgPosition:"left"}]:"Payroll"===t?[{title:"Flexible and Compliant Payroll Management",subtitle:"Configurable Salary structure with predefined integrated TDS/PT/PF/Gratuity calculation for seamless employee compensation.",description:"Our HR management offers a comprehensive system for managing employee salary structures, and compliance setup in accordance with government regulations. Companies can create tailored salary structures for different employee grades. The platform also facilitates setting up Provident Fund, Gratuity, Employee State Insurance (ESI), and TDS, PT tax parameters, ensuring full compliance and transparency in payroll management. In addition to this, any other salary components like Variable Pay and custom deductions can be configured in the system, making it highly flexible for any complex scenario.",benefits:["Configurable pay scale grades","Configurable salary structures with formula builder","Customizable payslip design","Dynamic Salary Structures to include compliance like PF, Gratuity, ESI, PT, and TDS","Audit trails for Setup control","Contract Rate setup for contract employee"],imageSrc:vS,imageAlt:"Payroll & Compliance",imgPosition:"left"},{title:"Streamlined Monthly Salary Generation with Real-Time Error Validation",subtitle:"Seamless access to Attendance data for accurate and quick Payroll processing.",description:"Our payroll processing tool enables quick salary generation while minimizing errors through integration with attendance and leave data. This facilitates managers with accurate data for decision-making. The system supports importing employee data from Attendance, HRM, and Leave Management modules for Payroll processing. Along with the full salary computation, the payroll system integrates with Payment Disbursement to enable online transfer, checks with employee pay account details for direct salary disbursement through net banking etc.",benefits:["Accurate Payroll Generation","Reduced Manual Errors","Integrated with Attendance and Leave","Direct Salary Disbursement"],imageSrc:bS,imageAlt:"Salary Process",imgPosition:"right"},{title:"Accurate Accounting Entries for Financial Clarity",subtitle:"Ensuring error-free records with detailed reporting.",description:"After generating salaries, the HR manager creates accounting entries to maintain precise financial records. The system displays all payable heads, showing amounts already posted and pending. Managers can download detailed reports in PDF or Excel formats and include specific posting remarks for transparency, ensuring a well-documented and accurate accounting process.",benefits:["Precise Accounting Entries","Payable Overview","Detailed Reporting"," Transparent Documentation","Error-Free Financial Management"],imageSrc:wS,imageAlt:"Post Salary ",imgPosition:"left"}]:"HR"===t?[{title:"Job Offer Records - Onboarding Process",subtitle:"Smooth Onboarding and Integration of New Employees into the Organization",description:"Enables you to keep the Job offer records with unique reference ID for easy traceability and managing the offer letter and onboarding process. Custom templates for offer and joining letters allow HR to handle onboarding smoothly and efficiently. Provides data for analysis for the recruitment process.",benefits:["Thorough Appointee Management","Link Salary structure to include CTC details in offer letter","Dynamic Offer, Appointment Letters","One-click employee data creation from offer details"],imageSrc:gS,imageAlt:"Onboarding",imgPosition:"left"},{title:"Complete Employee Lifecycle Management",subtitle:"Centralized Employee Data Management - with Multi Location.",description:"This module enables streamlined employee data management, allowing HR and Employee managers to sort, search, and filter employee records by various criteria like Department and Grade for easy analysis and reports. Both permanent and contract employees can be managed with different salary structures. All lifecycle stages like onboarding process, initiating separation processes, completion of probation period, etc., can be managed smoothly for each employee data by the authorized manager. Optional fields for documents and bank details ensure comprehensive record-keeping while simplifying management.",benefits:["Department and Grade structure - for data segregation and easy management.","Automatic ID Generation for Employee, and Contract Employee.","Centralized Information - Data Accuracy and Integrity","Compliance and Record-Keeping - integrated with document management system.","Manage Employee Billing Rates","Contract Employee Management","Audit Tracing for employee data. Supports bulk record uploads from existing system."],imageSrc:yS,imageAlt:"Employee data",imgPosition:"right"},{title:"Streamlined Exit Process with Customized Setup",subtitle:"Ensuring Smooth Exit with Assets and KT Transfer",description:"With customized exit process setup, you can track and complete all the steps needed to be done by the employee before he/she exits the system. This can be knowledge transfer, handover of assets, exit interview, to name a few. Employee can initiate the separation process, which can be managed by approval/review flow.",benefits:["Customized exit process setup","Smooth Transitions and completion of activity by departments.","Facility to capture document evidence at each step."],imageSrc:xS,imageAlt:"Exit Process",imgPosition:"left"}]:"Appraisal"===t?[{title:"Efficient Appraisal System for Accurate Assessments",subtitle:"Completely Configurable Appraisal KPI Structure Definition.",description:"Highly flexible and configurable appraisal structure to set up your KPI targets for each employee grade level. Supports and is configurable for quarterly, half-yearly, and yearly appraisal cycles. Self-assessment, and provides scores for key performance indicators (KPIs), and submits the appraisal to the Employee manager, who evaluates and gives scores for each KPI. Review process by Reviewer to normalize the grades for an appraisal cycle for a particular employee grade. This structured process ensures accurate and fair evaluations, fostering transparency in performance-based benefits.",benefits:["Flexible Appraisal structure with KPI weightage.","Historical appraisal records reference for employee improvement and training plan.","Provision to upload supporting documents.","Structured Process, Fair Performance Assessment"],imageSrc:kS,imageAlt:"Holiday Calendar",imgPosition:"left"},{title:"Self-Evaluation for Each KPI Goal",subtitle:"Transparent and KPI Goals for Each Cycle.",description:"Employee can self-initiate and give his own score. Document evidence, if required, can be uploaded. Historical appraisal data for earlier cycles is accessible.",benefits:["Overall score is rule-based calculation","Seamlessly flows to employee manager","Historical Appraisal Data access"],imageSrc:SS,imageAlt:"Leave Dashboard",imgPosition:"right"},{title:"Manager Evaluation for Each KPI Goal.",subtitle:"Flexible Structure and Score for Each KPI.",description:"Manager evaluates and provides the score for each KPI Goal. The final score is auto-calculated based on rule setup. After providing the score, Manager sends the appraisal to the employee for final sign-off and remarks.",benefits:["Overall score for Manager is rule-based calculation","Seamlessly flows between employee and manager","Historical Appraisal Data access"],imageSrc:CS,imageAlt:"Leave Application",imgPosition:"left"},{title:"Review Process for Grade Evaluation",subtitle:"Normalization of Appraisal Grades by Reviewer.",description:"Normalization of appraisal grades by Reviewer at each employee grade level. Performance-linked salary components (like variable pay) evaluation process. Reports for each appraisal cycle and employee grade levels.",benefits:["Review process","Reports for performance-based salary components.","Customizable Reports"],imageSrc:jS,imageAlt:"Leave Approval",imgPosition:"right"}]:"Attendance"===t?[{title:"Attendance- Anytime- Anywhere",subtitle:"Streamlined Check-In with Location Tracking and Daily Task Insights.",description:"Our attendance system combines flexibility and precision, allowing employees to mark their workdays from the web or mobile app. The mobile app's check-in and check-out features are equipped with real-time location tracking, automatically capturing the exact location, date, and time to ensure accurate and efficient attendance records. Additionally, during check-out, employees are prompted to fill out a remarks field, providing a brief summary of their day\u2019s tasks. This feature enables managers to gain valuable insights into daily productivity, fostering accountability and enhancing team management.",benefits:["Accurate Time & Location Tracking","Enhanced Flexibility"," Improved Productivity Monitoring","Efficient Reporting"],imageSrc:ES,imageAlt:"Check-in",imgPosition:"left"},{title:"Stay Informed, Stay Organized",subtitle:"Dynamic Calendar View for Attendance, Holidays, and Leave Management.",description:"Our attendance system offers a dynamic calendar view that allows employees to easily track their attendance status, view holiday lists, and monitor their leave days. After checking in and out, employees can submit their attendance records weekly for manager review, ensuring accountability and streamlined communication. This feature not only keeps employees informed but also helps managers efficiently oversee attendance and leave management, fostering a productive work environment.",benefits:["Weekly Submission for Review","Dynamic Calendar View"],imageSrc:OS,imageAlt:"Leave Dashboard",imgPosition:"right"},{title:"Comprehensive Attendance Insights",subtitle:"Efficient Review and Approval for Enhanced Team Productivity.",description:"Our attendance management system provides managers with a complete overview of their team\u2019s attendance records. Once an employee submits their attendance, it is forwarded for review, ensuring accountability. If an employee encounters issues completing the process, managers can seamlessly update attendance for previous days through the manager portal, including remarks for full transparency. With access to detailed attendance records, managers can also update check-in and check-out times with geo-location data as needed. This system supports weekly approvals, streamlining the management of attendance and promoting effective team oversight.",benefits:["Streamlined Review Process","Flexibility in Attendance Management","Transparency with Remarks","Geo-Location Updates"," Weekly Approval Workflow"],imageSrc:RS,imageAlt:"Leave Application",imgPosition:"left"}]:[{title:"Complete Employee Lifecycle Management",subtitle:"Centralized Employee Data Management - with Multi Location.",description:"This module enables streamlined employee data management, allowing HR and Employee managers to sort, search, and filter employee records by various criteria like Department and Grade for easy analysis and reports. Both permanent and contract employees can be managed with different salary structures. All lifecycle stages like onboarding process, initiating separation processes, completion of probation period, etc., can be managed smoothly for each employee data by the authorized manager. Optional fields for documents and bank details ensure comprehensive record-keeping while simplifying management.",benefits:["Department and Grade structure - for data segregation and easy management.","Automatic ID Generation for Employee, and Contract Employee.","Centralized Information - Data Accuracy and Integrity","Compliance and Record-Keeping - integrated with document management system.","Manage Employee Billing Rates","Contract Employee Management","Audit Tracing for employee data. Supports bulk record uploads from existing system."],imageSrc:hS,imageAlt:"Payroll & Compliance",imgPosition:"left"},{title:"Job Offer Records - Onboarding Process",subtitle:"Smooth Onboarding and Integration of New Employees into the Organization",description:"Enables you to keep the Job offer records with unique reference ID for easy traceability and managing the offer letter and onboarding process. Custom templates for offer and joining letters allow HR to handle onboarding smoothly and efficiently. Provides data for analysis for the recruitment process.",benefits:["Thorough Appointee Management","Link Salary structure to include CTC details in offer letter","Dynamic Offer, Appointment Letters","One-click employee data creation from offer details"],imageSrc:mS,imageAlt:"Salary Process",imgPosition:"right"},{title:"Streamlined Exit Process with Customized Setup",subtitle:"Ensuring Smooth Exit with Assets and KT Transfer",description:"With customized exit process setup, you can track and complete all the steps needed to be done by the employee before he/she exits the system. This can be knowledge transfer, handover of assets, exit interview, to name a few. Employee can initiate the separation process, which can be managed by approval/review flow.",benefits:["Customized exit process setup","Smooth Transitions and completion of activity by departments.","Facility to capture document evidence at each step."],imageSrc:mS,imageAlt:"Payslip Generation",imgPosition:"left"}];return(0,g.jsx)(PS,{children:n.map((e=>(0,g.jsx)(AS,{children:"left"===e.imgPosition?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(TS,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,g.jsxs)(MS,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(zS,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:nS,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(MS,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(zS,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:nS,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]}),(0,g.jsx)(TS,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},LS=si.div`
  background-color: white;
  color: blue;
  width: 100%;
  /* padding-bottom: 10px; */
`,NS=si.div`
  height: 472px;
  background-color: white;
  color: blue;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
  }
`,FS=si.div`
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
`,DS=si.div`
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
`,_S=si.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 600;
  line-height: 61.2px;
  margin: 0px 0px 16px;
`,BS=si.p`
  color: #454545;
  /* width: 65%; */
  font-size: 21px;
  /* word-wrap: normal; */
  /* line-height: 31.504px;
  margin: 0px 0px 24px; */

  @media (max-width: 768px) {
    width: 100%;
  }
`,HS=si.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 60%;
  line-height: 26px;
  padding: 44px 0px 0px;
`,WS=si.button`
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
`,US=si.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`,qS=si.div`
  line-height: 26px;
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`,VS=()=>{const e=Du(),t="/claim.html"===e.pathname,n="/leave.html"===e.pathname,r="/employeehr.html"===e.pathname,i="/payroll.html"===e.pathname,a="/attendance.html"===e.pathname,l="/appraisal.html"===e.pathname,s=(0,o.useMemo)((()=>t?{title:"Effortless Claim Management for Your Organization",description:"Streamline your expense claim process with fast approvals, secure uploads, and real-time tracking all in one place.",image:qk,data:"Claim"}:n?{title:"Simplified Leave Management for Employees",description:"Manage leave requests, approvals, and balances with ease, all in one centralized system.",image:Vk,data:"Leave"}:r?{title:"Welcome to Employee Management",description:"Explore our various modules designed to simplify your HR processes.",image:Gk,data:"HR"}:a?{title:"Welcome to Employee Attendance",description:"Explore our various modules designed to simplify your HR processes.",image:Gk,data:"Attendance"}:i?{title:"Accurate and Automated Payroll Solutions",description:"Simplify payroll with Atomwalk HRM's automated system, handling salaries, deductions, and taxes with accuracy. Real-time integration ensures seamless reporting and easy payslip access for employees",image:Gk,data:"Payroll"}:l?{title:"Performance Mangement",description:"The appraisal system supporting KPI-based evaluations, with self-assessment, manager scoring, and grade normalization for fair, transparent performance reviews and structured reporting.",image:Gk,data:"Appraisal"}:{title:"Welcome to Employee Management",description:"Explore our various modules designed to simplify your HR processes.",image:Gk,data:"HR"}),[t,n,r]);return(0,g.jsxs)(LS,{children:[(0,g.jsx)(NS,{children:(0,g.jsxs)(FS,{children:[(0,g.jsxs)(DS,{children:[(0,g.jsx)(_S,{children:s.title}),(0,g.jsx)(BS,{children:s.description}),(0,g.jsx)(WS,{onClick:()=>{window.location.href="/demo.html"},children:(0,g.jsx)(US,{children:"Request a Demo"})})]}),(0,g.jsx)(HS,{children:(0,g.jsx)(qS,{children:(0,g.jsx)("img",{src:s.image,alt:"Page Background"})})})]})}),(0,g.jsx)(tS,{data:s.data}),(0,g.jsx)(IS,{data:s.data})]})},GS=n.p+"static/media/Mockup5-Lead.780e9b50bcaba7281d4d.png",KS=n.p+"static/media/Customermage-removebg-preview.fa8bcba86c44de2d5172.png",JS=n.p+"static/media/Pattner.7901d1ba5f15d16330b0.png",QS=n.p+"static/media/Campain.d60d77c952a36990bf12.png";n.p;const $S=n.p+"static/media/CrmMocups2.42b85b9b507a83b24f4f9c0bfbf25f57.svg";const YS=n.p+"static/media/CrmMocups.52e8c70046b9976399c8e1c31b83bd6f.svg",ZS=si.div`
  width: 100%;
  height: 100%;
`,XS=si.div`
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
`,ej=si.div`
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
`,tj=si.div`
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
`,nj=si.div`
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
`,rj=e=>{let{data:t}=e;const n="Claim"===t?[{title:"Effortless Campaign Management",subtitle:"Seamlessly Create, View, and Manage Campaigns",description:"Atomwalk CRM offers a user-friendly interface to manage customer email campaigns with ease. Users can add new campaigns, view campaign lists, and access powerful search features to quickly find specific campaigns. With organized tools, campaign creation and management become intuitive and efficient, allowing you to focus on engagement and conversions.",benefits:["Campaign List View","Campaign Search","User-Friendly Interface"],imageSrc:iS,imageAlt:"Campaign Management Dashboard",imgPosition:"left"},{title:"Enhanced Campaign Execution and Analysis",subtitle:"Maximize Engagement with Real-Time Tracking and Insights",description:"From sending targeted emails to monitoring their performance, Atomwalk CRM enables real-time tracking of customer interactions, open rates, and conversion metrics. Use detailed analytics to adjust strategies, close completed campaigns, and optimize future campaigns. This helps maximize reach, engagement, and ultimately, customer satisfaction.",benefits:["Send Emails","Real-Time Tracking","Detailed Analytics"],imageSrc:iS,imageAlt:"Campaign Performance Tracking",imgPosition:"right"}]:[{title:"Streamlined Lead Engagement",subtitle:"Effortless Management for Higher Conversions",description:'This fully integrated dashboard in the Atomwalk CRM application provides users with an intuitive workspace to access and manage lead details effortlessly. Users can quickly add new leads, view a comprehensive lead list, and upload data in bulk to keep information up-to-date. Additionally, tasks can be assigned to specific leads for timely follow-ups, while a detailed Lead Performance Dashboard offers insight into engagement metrics and conversion progress. The "Add Product Interest" feature lets users associate specific product interests with each lead, enhancing personalization and targeted engagement. With these functionalities in one place, the Atomwalk CRM helps optimize lead nurturing and boosts overall conversion rates.',benefits:["Centralized Lead Insights","Seamless Team Collaboration","Optimized Engagement Strategies"],imageSrc:$S,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Manage Leads with Ease",subtitle:"Fast and Efficient Lead Management Process",description:"Empower your sales team to add and manage leads effortlessly from their mobile devices or desktops. Track the status of leads in real-time, and streamline follow-ups with our intuitive lead management system.",benefits:["Real-Time Lead Tracking","Automated Follow-ups","Bulk Lead Uploads"],imageSrc:YS,imageAlt:"Lead Management",imgPosition:"left"},{title:"Streamline Lead Conversions",subtitle:"Quick and Transparent Lead Conversion Process",description:"Sales managers can track lead progress, assign tasks, and update lead status in real-time. Our streamlined lead conversion process ensures that opportunities are never missed, providing transparency and timely action for maximum conversions.",benefits:["Task Assignment","Pipeline Status Updates","Conversion Tracking"],imageSrc:$S,imageAlt:"Lead Conversion",imgPosition:"right"},{title:"Centralize Lead Management for Higher Conversions",subtitle:"Efficient and Transparent Lead Conversion Process",description:"Sales managers can seamlessly track lead history, assign tasks, and update lead statuses in real-time. With our centralized lead management system, you can prioritize leads, ensure timely follow-ups, and never miss an opportunity to convert, all while maintaining full transparency throughout the process.",benefits:["Real-Time Task Assignment","Lead Prioritization","Conversion Tracking"],imageSrc:$S,imageAlt:"Lead Conversion Process",imgPosition:"left"},{title:"Get Complete Context on Every Lead",subtitle:"Personalized and Informed Lead Follow-ups",description:"To maximize the potential of lost leads, implement follow-up automation to re-engage them after a set period, such as three months, with \u201cwin-back\u201d campaigns that offer special promotions or address any unmet needs. Keep detailed records of why leads were marked as lost (e.g., budget constraints, timing, lack of interest) to enable tailored future follow-up strategies. Design re-engagement workflows in the CRM to tag lost leads, retarget them, and monitor for any shifts in their engagement levels. Analyzing lost lead data periodically can reveal common reasons for drop-off, providing insights to refine marketing and sales approaches. Maintain lost leads as a distinct segment in the CRM, allowing for strategic re-engagement with new products or services, ensuring they stay accessible for potential future opportunities.",benefits:["Comprehensive Lead History","Cross-Departmental Integration","Informed Outreach"],imageSrc:$S,imageAlt:"Lead Context",imgPosition:"right"}];return(0,g.jsx)(ZS,{children:n.map((e=>(0,g.jsx)(XS,{children:"left"===e.imgPosition?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(ej,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,g.jsxs)(nj,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(tj,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:nS,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(nj,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(tj,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:nS,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]}),(0,g.jsx)(ej,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},oj=()=>{const[e,t]=(0,o.useState)(""),n=Du(),r=[{title:"Lead Management",titles:"Lead",description:"Atomwalk CRM's Lead Management system helps businesses efficiently track and manage leads throughout their sales pipeline. Users can add, update, and categorize leads, mark them as active or inactive, and assign ownership for better accountability. This system ensures that leads are properly followed up, improving conversion rates and optimizing the sales process.",background:"#d6e7ff",img:`${GS}`},{title:"Customer Management",titles:"Customer",description:"Atomwalk CRM's Customer Management system helps businesses organize and manage customer data, interactions, and communication history. It allows users to track customer preferences, purchase history, and provides tools to enhance customer retention and satisfaction.",background:"#d6e7ff",img:`${KS}`},{title:"Channel Partner Management",titles:"Partner",description:"Atomwalk CRM's Channel Partner Management system enables businesses to effectively manage their relationships with partners. It helps track partner activities, agreements, and contributions, streamlining collaboration to drive mutual growth. The system also provides visibility into partner performance, ensuring transparency and maximizing the value of partnerships.",background:"#d6e7ff",img:`${JS}`},{title:"Campaign Management",titles:"Campaign",description:"Atomwalk CRM's Campaign Management system allows businesses to plan, execute, and analyze marketing campaigns across multiple channels. It enables users to track campaign performance, manage budgets, and segment audiences for targeted outreach. The system provides real-time insights, helping to optimize strategies for better engagement and higher ROI.",background:"#d6e7ff",img:`${QS}`}];(0,o.useEffect)((()=>{n.pathname.includes("campaignManagement")&&t("Claim")}),[n.pathname]);const i=n.pathname.includes("leadManagement")?r[0]:n.pathname.includes("CustomerManagement")?r[1]:n.pathname.includes("Channelpartner")?r[2]:n.pathname.includes("campaignManagement")?r[3]:r[0];return(0,g.jsxs)("div",{children:[(0,g.jsx)(rp,{title:i.title,description:i.description,background:i.background,img:i.img,lead:!0}),(0,g.jsx)(tS,{bgcolors:"#e8f1fe",data:i.titles}),(0,g.jsx)(rj,{data:e})]})},ij=n.p+"static/media/Leadmanagement.89aea16cb4591163e02a.png",aj=n.p+"static/media/CustomerMangement.3b6acb8648dc2e328cbf.png",lj=n.p+"static/media/partnership.4462db344dbb58334dd7.png",sj=n.p+"static/media/asset-management.32d672a7cc30dd5fb4c6.png",cj=n.p+"static/media/content-management.5d89ff2ade33a5b1d2fa.png",uj=si.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,dj=si.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,pj=si.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,fj=si.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,hj=si.div`
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
`,mj=si.div`
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
`,gj=si.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,yj=si.p`
  font-size: 1em;
  color: #666;
`,xj=()=>{const e=e=>{window.location.href=`/${e}`};return(0,g.jsxs)(uj,{children:[(0,g.jsx)(dj,{children:"Key Features"}),(0,g.jsx)(pj,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,g.jsxs)(fj,{children:[(0,g.jsxs)(hj,{onClick:()=>e("leadManagement.html"),children:[(0,g.jsx)(mj,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:ij,alt:"Speed"})}),(0,g.jsx)(gj,{children:" Lead Management:"}),(0,g.jsx)(yj,{children:"Streamline and track leads from acquisition to conversion, ensuring efficient follow-ups and maximizing sales opportunities."})]}),(0,g.jsxs)(hj,{onClick:()=>e("CustomerManagement.html"),children:[(0,g.jsx)(mj,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:aj,alt:"Trust"})}),(0,g.jsx)(gj,{children:"Customer Management:"}),(0,g.jsx)(yj,{children:"Manage customer relationships by storing interaction histories, preferences, and communication details in one centralized platform"})]}),(0,g.jsxs)(hj,{onClick:()=>e("Channelpartner.html"),children:[(0,g.jsx)(mj,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:lj,alt:"Accuracy"})}),(0,g.jsx)(gj,{children:"Channel partner management:"}),(0,g.jsx)(yj,{children:"Collaborate effectively with business partners by tracking their contributions, agreements, and communication to ensure successful partnerships."})]}),(0,g.jsxs)(hj,{children:[(0,g.jsx)(mj,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:sj,alt:"Reliability"})}),(0,g.jsx)(gj,{children:"Annual Maintenance Contract:"}),(0,g.jsx)(yj,{children:"Efficiently manage assets, investments, and portfolios while tracking performance and ensuring regulatory compliance"})]}),(0,g.jsxs)(hj,{onClick:()=>e("campaignManagement.html"),children:[(0,g.jsx)(mj,{bgColor:"#ffe0f5",children:(0,g.jsx)("img",{src:cj,alt:"Reliability"})}),(0,g.jsx)(gj,{children:"Campaign Management:"}),(0,g.jsx)(yj,{children:"Plan, execute, and analyze marketing campaigns to reach target audiences, track results, and optimize strategies for higher engagement and ROI."})]})]})]})},vj=()=>(0,g.jsxs)("div",{children:[(0,g.jsx)(rp,{title:"Comprehensive CRM platform",description:"Atomwalk CRM is a comprehensive Customer Relationship Management (CRM) system designed to streamline and manage various business operations, focusing on customer, supplier, partner, and lead management. It offers functionalities that support task management, order processing, and tracking of product interests and payments.",background:"#d6e7ff",crm:!0}),(0,g.jsx)(vk,{data:"lead"}),(0,g.jsx)(xj,{}),(0,g.jsx)(zk,{data:!0})]});const bj=function(){const[e,t]=(0,o.useState)(!1),n={username:"ASUTOSH@PMA_00001",password:"ashutosh@11"};(0,o.useEffect)((()=>{localStorage.getItem("apiResponse")||r()}),[]);const r=async()=>{try{const e=await fetch("https://www.atomwalk.com/rest-auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();console.log("API Response:",t),localStorage.setItem("apiResponse",JSON.stringify(t))}catch(e){console.error("Error during login:",e)}};return(0,g.jsxs)("div",{className:"App",children:[(0,g.jsx)(ui,{}),(0,g.jsx)(ed,{children:(0,g.jsxs)(Yu,{children:[(0,g.jsx)(Qu,{path:"",element:(0,g.jsx)(Yc,{})}),(0,g.jsx)(Qu,{path:"/signin.html",element:(0,g.jsx)(Td,{})}),(0,g.jsx)(Qu,{path:"/forgotpassword.html",element:(0,g.jsx)(qd,{})}),(0,g.jsx)(Qu,{path:"/card.html",element:(0,g.jsx)(Hi,{})}),(0,g.jsx)(Qu,{path:"/Product.html",element:(0,g.jsx)(uf,{})}),(0,g.jsx)(Qu,{path:"/contactUs.html",element:(0,g.jsx)(th,{})}),(0,g.jsx)(Qu,{path:"/aboutUs.html",element:(0,g.jsx)(Dh,{})}),(0,g.jsx)(Qu,{path:"/demo.html",element:(0,g.jsx)(ob,{})}),(0,g.jsx)(Qu,{path:"/seals.html",element:(0,g.jsx)(yb,{})}),(0,g.jsx)(Qu,{path:"/crm.html",element:(0,g.jsx)(vj,{})}),(0,g.jsx)(Qu,{path:"/lms.html",element:(0,g.jsx)(Lb,{})}),(0,g.jsx)(Qu,{path:"/Blog.html",element:(0,g.jsx)(gw,{})}),(0,g.jsx)(Qu,{path:"/BlogDetails.html",element:(0,g.jsx)(Aw,{})}),(0,g.jsx)(Qu,{path:"/hrm.html",element:(0,g.jsx)(Uk,{})}),(0,g.jsx)(Qu,{path:"/leave.html",element:(0,g.jsx)(VS,{})}),(0,g.jsx)(Qu,{path:"/claim.html",element:(0,g.jsx)(VS,{})}),(0,g.jsx)(Qu,{path:"/employeehr.html",element:(0,g.jsx)(VS,{})}),(0,g.jsx)(Qu,{path:"/payroll.html",element:(0,g.jsx)(VS,{})}),(0,g.jsx)(Qu,{path:"/appraisal.html",element:(0,g.jsx)(VS,{})}),(0,g.jsx)(Qu,{path:"/attendance.html",element:(0,g.jsx)(VS,{})}),(0,g.jsx)(Qu,{path:"/leadManagement.html",element:(0,g.jsx)(oj,{})}),(0,g.jsx)(Qu,{path:"/CustomerManagement.html",element:(0,g.jsx)(oj,{})}),(0,g.jsx)(Qu,{path:"/Channelpartner.html",element:(0,g.jsx)(oj,{})}),(0,g.jsx)(Qu,{path:"/campaignManagement.html",element:(0,g.jsx)(oj,{})})]})}),e&&(0,g.jsx)(Hv,{setOpenslide:t}),(0,g.jsx)(Vv,{setOpenslide:t}),(0,g.jsx)(rm,{})]})},wj=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,6453)).then((t=>{let{getCLS:n,getFID:r,getFCP:o,getLCP:i,getTTFB:a}=t;n(e),r(e),o(e),i(e),a(e)}))};a.createRoot(document.getElementById("root")).render((0,g.jsx)(o.StrictMode,{children:(0,g.jsx)(bj,{})})),wj()})()})();
//# sourceMappingURL=main.4cbca8cd.js.map