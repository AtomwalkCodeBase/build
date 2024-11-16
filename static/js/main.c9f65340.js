/*! For license information please see main.c9f65340.js.LICENSE.txt */
(()=>{var e={5811:(e,t,n)=>{var r=n(347),i=n(1303).each;function o(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}o.prototype={constuctor:o,addHandler:function(e){var t=new r(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;i(t,(function(n,r){if(n.equals(e))return n.destroy(),!t.splice(r,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){i(this.handlers,(function(e){e.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";i(this.handlers,(function(t){t[e]()}))}},e.exports=o},8537:(e,t,n)=>{var r=n(5811),i=n(1303),o=i.each,a=i.isFunction,s=i.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(e,t,n){var i=this.queries,l=n&&this.browserIsIncapable;return i[e]||(i[e]=new r(e,l)),a(t)&&(t={match:t}),s(t)||(t=[t]),o(t,(function(t){a(t)&&(t={match:t}),i[e].addHandler(t)})),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=l},347:e=>{function t(e){this.options=e,!e.deferSetup&&this.setup()}t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=t},1303:e=>{e.exports={isFunction:function(e){return"function"===typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,r=e.length;n<r&&!1!==t(e[n],n);n++);}}},535:(e,t,n)=>{var r=n(8537);e.exports=new r},7396:(e,t,n)=>{var r;!function(){"use strict";var i=!("undefined"===typeof window||!window.document||!window.document.createElement),o={canUseDOM:i,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:i&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:i&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},3240:e=>{"use strict";var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=function(e){return"function"===typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},a=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var r,i=t.call(e,"constructor"),o=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!i&&!o)return!1;for(r in e);return"undefined"===typeof r||t.call(e,r)},s=function(e,t){r&&"__proto__"===t.name?r(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,n){if("__proto__"===n){if(!t.call(e,n))return;if(i)return i(e,n).value}return e[n]};e.exports=function e(){var t,n,r,i,c,u,d=arguments[0],p=1,f=arguments.length,h=!1;for("boolean"===typeof d&&(h=d,d=arguments[1]||{},p=2),(null==d||"object"!==typeof d&&"function"!==typeof d)&&(d={});p<f;++p)if(null!=(t=arguments[p]))for(n in t)r=l(d,n),d!==(i=l(t,n))&&(h&&i&&(a(i)||(c=o(i)))?(c?(c=!1,u=r&&o(r)?r:[]):u=r&&a(r)?r:{},s(d,{name:n,newValue:e(h,u,i)})):"undefined"!==typeof i&&s(d,{name:n,newValue:i}));return d}},4403:e=>{var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,l=/^\s+|\s+$/g,c="";function u(e){return e?e.replace(l,c):c}e.exports=function(e,l){if("string"!==typeof e)throw new TypeError("First argument must be a string");if(!e)return[];l=l||{};var d=1,p=1;function f(e){var t=e.match(n);t&&(d+=t.length);var r=e.lastIndexOf("\n");p=~r?e.length-r:p+e.length}function h(){var e={line:d,column:p};return function(t){return t.position=new m(e),v(),t}}function m(e){this.start=e,this.end={line:d,column:p},this.source=l.source}m.prototype.content=e;var g=[];function x(t){var n=new Error(l.source+":"+d+":"+p+": "+t);if(n.reason=t,n.filename=l.source,n.line=d,n.column=p,n.source=e,!l.silent)throw n;g.push(n)}function y(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function v(){y(r)}function b(e){var t;for(e=e||[];t=w();)!1!==t&&e.push(t);return e}function w(){var t=h();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;c!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,c===e.charAt(n-1))return x("End of comment missing");var r=e.slice(2,n-2);return p+=2,f(r),e=e.slice(n),p+=2,t({type:"comment",comment:r})}}function k(){var e=h(),n=y(i);if(n){if(w(),!y(o))return x("property missing ':'");var r=y(a),l=e({type:"declaration",property:u(n[0].replace(t,c)),value:r?u(r[0].replace(t,c)):c});return y(s),l}}return v(),function(){var e,t=[];for(b(t);e=k();)!1!==e&&(t.push(e),b(t));return t}()}},2740:e=>{"use strict";e.exports=function(e,t,n,r,i,o,a,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,s],u=0;(l=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},1270:(e,t,n)=>{var r=n(7475),i=function(e){var t="",n=Object.keys(e);return n.forEach((function(i,o){var a=e[i];(function(e){return/[height|width]$/.test(e)})(i=r(i))&&"number"===typeof a&&(a+="px"),t+=!0===a?i:!1===a?"not "+i:"("+i+": "+a+")",o<n.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"===typeof e?e:e instanceof Array?(e.forEach((function(n,r){t+=i(n),r<e.length-1&&(t+=", ")})),t):i(e)}},9834:(e,t,n)=>{var r=n(1260)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var a,s,l=t.prefix||"__jp",c=t.name||l+i++,u=t.param||"callback",d=null!=t.timeout?t.timeout:6e4,p=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;d&&(s=setTimeout((function(){h(),n&&n(new Error("Timeout"))}),d));function h(){a.parentNode&&a.parentNode.removeChild(a),window[c]=o,s&&clearTimeout(s)}return window[c]=function(e){r("jsonp got",e),h(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+p(c)).replace("?&","?"),r('jsonp req "%s"',e),(a=document.createElement("script")).src=e,f.parentNode.insertBefore(a,f),function(){window[c]&&h()}};var i=0;function o(){}},1260:(e,t,n)=>{function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.DEBUG),e}(t=e.exports=n(4703)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var i=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(i++,"%c"===e&&(o=i))})),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},4703:(e,t,n)=>{var r;function i(e){function n(){if(n.enabled){var e=n,i=+new Date,o=i-(r||i);e.diff=o,e.prev=r,e.curr=i,r=i;for(var a=new Array(arguments.length),s=0;s<a.length;s++)a[s]=arguments[s];a[0]=t.coerce(a[0]),"string"!==typeof a[0]&&a.unshift("%O");var l=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;l++;var i=t.formatters[r];if("function"===typeof i){var o=a[l];n=i.call(e,o),a.splice(l,1),l--}return n})),t.formatArgs.call(e,a),(n.log||t.log||console.log.bind(console)).apply(e,a)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=i.debug=i.default=i).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,i=0;i<r;i++)n[i]&&("-"===(e=n[i].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(4850),t.names=[],t.skips=[],t.formatters={}},4850:e=>{var t=1e3,n=60*t,r=60*n,i=24*r,o=365.25*i;function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,s){s=s||{};var l,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!a)return;var s=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*o;case"days":case"day":case"d":return s*i;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===c&&!1===isNaN(e))return s.long?a(l=e,i,"day")||a(l,r,"hour")||a(l,n,"minute")||a(l,t,"second")||l+" ms":function(e){if(e>=i)return Math.round(e/i)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},446:(e,t,n)=>{var r=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,d="object"==typeof self&&self&&self.Object===Object&&self,p=u||d||Function("return this")(),f=Object.prototype.toString,h=Math.max,m=Math.min,g=function(){return p.Date.now()};function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==i}(e))return r;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=s.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):a.test(e)?r:+e}e.exports=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function v(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function b(){var e=g();if(v(e))return w(e);s=setTimeout(b,function(e){var n=t-(e-l);return d?m(n,o-(e-c)):n}(e))}function w(e){return s=void 0,p&&r?f(e):(r=i=void 0,a)}function k(){var e=g(),n=v(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(b,t),u?f(e):a}(l);if(d)return s=setTimeout(b,t),f(l)}return void 0===s&&(s=setTimeout(b,t)),a}return t=y(t)||0,x(n)&&(u=!!n.leading,o=(d="maxWait"in n)?h(y(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),k.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},k.flush=function(){return void 0===s?a:w(g())},k}},381:(e,t,n)=>{var r="Expected a function",i=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,d="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,p="object"==typeof self&&self&&self.Object===Object&&self,f=d||p||Function("return this")(),h=Object.prototype.toString,m=Math.max,g=Math.min,x=function(){return f.Date.now()};function y(e,t,n){var i,o,a,s,l,c,u=0,d=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError(r);function h(t){var n=i,r=o;return i=o=void 0,u=t,s=e.apply(r,n)}function y(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-u>=a}function w(){var e=x();if(y(e))return k(e);l=setTimeout(w,function(e){var n=t-(e-c);return p?g(n,a-(e-u)):n}(e))}function k(e){return l=void 0,f&&i?h(e):(i=o=void 0,s)}function S(){var e=x(),n=y(e);if(i=arguments,o=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(w,t),d?h(e):s}(c);if(p)return l=setTimeout(w,t),h(c)}return void 0===l&&(l=setTimeout(w,t)),s}return t=b(t)||0,v(n)&&(d=!!n.leading,a=(p="maxWait"in n)?m(b(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),S.cancel=function(){void 0!==l&&clearTimeout(l),u=0,i=c=o=l=void 0},S.flush=function(){return void 0===l?s:k(x())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&h.call(e)==o}(e))return i;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):s.test(e)?i:+e}e.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return v(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})}},9197:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=null;return t.forEach((function(e){if(null==i){var t=e.apply(void 0,n);null!=t&&(i=t)}})),i}))};var r,i=n(3534),o=(r=i)&&r.__esModule?r:{default:r};e.exports=t.default},3534:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,i,o,a){var s=i||"<<anonymous>>",l=a||r;if(null==n[r])return t?new Error("Required "+o+" `"+l+"` was not specified in `"+s+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),d=6;d<c;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,r,s,o,l].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},1497:(e,t,n)=>{"use strict";var r=n(3218);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},5173:(e,t,n)=>{e.exports=n(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2730:(e,t,n)=>{"use strict";var r=n(5043),i=n(8853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function m(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var x=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function v(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(x,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(x,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(x,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),E=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var M=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var I=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=I&&e[I]||e["@@iterator"])?e:null}var F,N=Object.assign;function D(e){if(void 0===F)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);F=t&&t[1]||""}return"\n"+F+e}var B=!1;function _(e,t){if(!e||B)return"";B=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{B=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function H(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=_(e.type,!1);case 11:return e=_(e.type.render,!1);case 1:return e=_(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case j:return"Profiler";case A:return"StrictMode";case O:return"Suspense";case P:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case E:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case R:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function G(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function V(e){e._valueTracker||(e._valueTracker=function(e){var t=G(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=G(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function J(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return N({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Y(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=q(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Z(e,t){null!=(t=t.checked)&&v(e,"checked",t,!1)}function X(e,t){Z(e,t);var n=q(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function $(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&J(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return N({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function oe(e,t){var n=q(t.value),r=q(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(fe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var xe=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function ve(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,Ae=null;function je(e){if(e=vi(e)){if("function"!==typeof ke)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function Ce(e){Se?Ae?Ae.push(e):Ae=[e]:Se=e}function Ee(){if(Se){var e=Se,t=Ae;if(Ae=Se=null,je(e),t)for(e=0;e<t.length;e++)je(t[e])}}function Re(e,t){return e(t)}function Oe(){}var Pe=!1;function Te(e,t,n){if(Pe)return e(t,n);Pe=!0;try{return Re(e,t,n)}finally{Pe=!1,(null!==Se||null!==Ae)&&(Oe(),Ee())}}function ze(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Me=!1;if(u)try{var Ie={};Object.defineProperty(Ie,"passive",{get:function(){Me=!0}}),window.addEventListener("test",Ie,Ie),window.removeEventListener("test",Ie,Ie)}catch(ue){Me=!1}function Le(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Fe=!1,Ne=null,De=!1,Be=null,_e={onError:function(e){Fe=!0,Ne=e}};function He(e,t,n,r,i,o,a,s,l){Fe=!1,Ne=null,Le.apply(_e,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function qe(e){if(Ue(e)!==e)throw Error(o(188))}function Ge(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return qe(i),e;if(a===r)return qe(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ve(e):null}function Ve(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ve(e);if(null!==t)return t;e=e.sibling}return null}var Ke=i.unstable_scheduleCallback,Je=i.unstable_cancelCallback,Qe=i.unstable_shouldYield,Ye=i.unstable_requestPaint,Ze=i.unstable_now,Xe=i.unstable_getCurrentPriorityLevel,$e=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=dt(s):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var vt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,At,jt,Ct=!1,Et=[],Rt=null,Ot=null,Pt=null,Tt=new Map,zt=new Map,Mt=[],It="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lt(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(t.pointerId)}}function Ft(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=vi(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Nt(e){var t=yi(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void jt(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=vi(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Bt(e,t,n){Dt(e)&&n.delete(t)}function _t(){Ct=!1,null!==Rt&&Dt(Rt)&&(Rt=null),null!==Ot&&Dt(Ot)&&(Ot=null),null!==Pt&&Dt(Pt)&&(Pt=null),Tt.forEach(Bt),zt.forEach(Bt)}function Ht(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,_t)))}function Ut(e){function t(t){return Ht(t,e)}if(0<Et.length){Ht(Et[0],e);for(var n=1;n<Et.length;n++){var r=Et[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Rt&&Ht(Rt,e),null!==Ot&&Ht(Ot,e),null!==Pt&&Ht(Pt,e),Tt.forEach(t),zt.forEach(t),n=0;n<Mt.length;n++)(r=Mt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&null===(n=Mt[0]).blockedOn;)Nt(n),null===n.blockedOn&&Mt.shift()}var Wt=b.ReactCurrentBatchConfig,qt=!0;function Gt(e,t,n,r){var i=vt,o=Wt.transition;Wt.transition=null;try{vt=1,Kt(e,t,n,r)}finally{vt=i,Wt.transition=o}}function Vt(e,t,n,r){var i=vt,o=Wt.transition;Wt.transition=null;try{vt=4,Kt(e,t,n,r)}finally{vt=i,Wt.transition=o}}function Kt(e,t,n,r){if(qt){var i=Qt(e,t,n,r);if(null===i)qr(e,t,r,Jt,n),Lt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Rt=Ft(Rt,e,t,n,r,i),!0;case"dragenter":return Ot=Ft(Ot,e,t,n,r,i),!0;case"mouseover":return Pt=Ft(Pt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Tt.set(o,Ft(Tt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,zt.set(o,Ft(zt.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Lt(e,r),4&t&&-1<It.indexOf(e)){for(;null!==i;){var o=vi(i);if(null!==o&&wt(o),null===(o=Qt(e,t,n,r))&&qr(e,t,r,Jt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else qr(e,t,r,null,n)}}var Jt=null;function Qt(e,t,n,r){if(Jt=null,null!==(e=yi(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jt=e,null}function Yt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case $e:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Zt=null,Xt=null,$t=null;function en(){if($t)return $t;var e,t,n=Xt,r=n.length,i="value"in Zt?Zt.value:Zt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return $t=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=N({},cn,{view:0,detail:0}),pn=on(dn),fn=N({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=on(fn),mn=on(N({},fn,{dataTransfer:0})),gn=on(N({},dn,{relatedTarget:0})),xn=on(N({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=N({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vn=on(yn),bn=on(N({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function An(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function jn(){return An}var Cn=N({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),En=on(Cn),Rn=on(N({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),On=on(N({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn})),Pn=on(N({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=N({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zn=on(Tn),Mn=[9,13,27,32],In=u&&"CompositionEvent"in window,Ln=null;u&&"documentMode"in document&&(Ln=document.documentMode);var Fn=u&&"TextEvent"in window&&!Ln,Nn=u&&(!In||Ln&&8<Ln&&11>=Ln),Dn=String.fromCharCode(32),Bn=!1;function _n(e,t){switch(e){case"keyup":return-1!==Mn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Gn(e,t,n,r){Ce(r),0<(t=Vr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,Kn=null;function Jn(e){Dr(e,0)}function Qn(e){if(K(bi(e)))return e}function Yn(e,t){if("change"===e)return t}var Zn=!1;if(u){var Xn;if(u){var $n="oninput"in document;if(!$n){var er=document.createElement("div");er.setAttribute("oninput","return;"),$n="function"===typeof er.oninput}Xn=$n}else Xn=!1;Zn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Vn&&(Vn.detachEvent("onpropertychange",nr),Kn=Vn=null)}function nr(e){if("value"===e.propertyName&&Qn(Kn)){var t=[];Gn(t,Kn,e,we(e)),Te(Jn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Vn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qn(Kn)}function or(e,t){if("click"===e)return Qn(t)}function ar(e,t){if("input"===e||"change"===e)return Qn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=J();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=J((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ur(n,o);var a=ur(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,yr=null,vr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;vr||null==gr||gr!==J(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Vr(xr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},Ar={};function jr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ar)return Sr[e]=n[t];return e}u&&(Ar=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Cr=jr("animationend"),Er=jr("animationiteration"),Rr=jr("animationstart"),Or=jr("transitionend"),Pr=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(e,t){Pr.set(e,t),l(t,[e])}for(var Mr=0;Mr<Tr.length;Mr++){var Ir=Tr[Mr];zr(Ir.toLowerCase(),"on"+(Ir[0].toUpperCase()+Ir.slice(1)))}zr(Cr,"onAnimationEnd"),zr(Er,"onAnimationIteration"),zr(Rr,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Or,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Nr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,l,c){if(He.apply(this,arguments),Fe){if(!Fe)throw Error(o(198));var u=Ne;Fe=!1,Ne=null,De||(De=!0,Be=u)}}(r,t,void 0,e),e.currentTarget=null}function Dr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Nr(i,s,c),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Nr(i,s,c),o=l}}}if(De)throw e=Be,De=!1,Be=null,e}function Br(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function _r(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Hr]){e[Hr]=!0,a.forEach((function(t){"selectionchange"!==t&&(Fr.has(t)||_r(t,!1,e),_r(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Hr]||(t[Hr]=!0,_r("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Yt(t)){case 1:var i=Gt;break;case 4:i=Vt;break;default:i=Kt}n=i.bind(null,t,n,e),i=void 0,!Me||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=yi(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}Te((function(){var r=o,i=we(n),a=[];e:{var s=Pr.get(e);if(void 0!==s){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=En;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=On;break;case Cr:case Er:case Rr:l=xn;break;case Or:l=Pn;break;case"scroll":l=pn;break;case"wheel":l=zn;break;case"copy":case"cut":case"paste":l=vn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Rn}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var f,h=r;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==p&&(null!=(m=ze(h,p))&&u.push(Gr(h,m,f)))),d)break;h=h.return}0<u.length&&(s=new l(s,c,null,n,i),a.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===be||!(c=n.relatedTarget||n.fromElement)||!yi(c)&&!c[hi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?yi(c):null)&&(c!==(d=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=hn,m="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=Rn,m="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==l?s:bi(l),f=null==c?s:bi(c),(s=new u(m,h+"leave",l,n,i)).target=d,s.relatedTarget=f,m=null,yi(i)===r&&((u=new u(p,h+"enter",c,n,i)).target=f,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(p=c,h=0,f=u=l;f;f=Kr(f))h++;for(f=0,m=p;m;m=Kr(m))f++;for(;0<h-f;)u=Kr(u),h--;for(;0<f-h;)p=Kr(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kr(u),p=Kr(p)}u=null}else u=null;null!==l&&Jr(a,s,l,u,!1),null!==c&&null!==d&&Jr(a,d,c,u,!0)}if("select"===(l=(s=r?bi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Yn;else if(qn(s))if(Zn)g=ar;else{g=ir;var x=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=or);switch(g&&(g=g(e,r))?Gn(a,g,n,i):(x&&x(e,s,r),"focusout"===e&&(x=s._wrapperState)&&x.controlled&&"number"===s.type&&ee(s,"number",s.value)),x=r?bi(r):window,e){case"focusin":(qn(x)||"true"===x.contentEditable)&&(gr=x,xr=r,yr=null);break;case"focusout":yr=xr=gr=null;break;case"mousedown":vr=!0;break;case"contextmenu":case"mouseup":case"dragend":vr=!1,br(a,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,i)}var y;if(In)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Un?_n(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Nn&&"ko"!==n.locale&&(Un||"onCompositionStart"!==v?"onCompositionEnd"===v&&Un&&(y=en()):(Xt="value"in(Zt=i)?Zt.value:Zt.textContent,Un=!0)),0<(x=Vr(r,v)).length&&(v=new bn(v,e,null,n,i),a.push({event:v,listeners:x}),y?v.data=y:null!==(y=Hn(n))&&(v.data=y))),(y=Fn?function(e,t){switch(e){case"compositionend":return Hn(t);case"keypress":return 32!==t.which?null:(Bn=!0,Dn);case"textInput":return(e=t.data)===Dn&&Bn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!In&&_n(e,t)?(e=en(),$t=Xt=Zt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Vr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=y))}Dr(a,t)}))}function Gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=ze(e,n))&&r.unshift(Gr(e,o,i)),null!=(o=ze(e,t))&&r.push(Gr(e,o,i))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Jr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=ze(n,o))&&a.unshift(Gr(n,l,s)):i||null!=(l=ze(n,o))&&a.push(Gr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Qr=/\r\n?/g,Yr=/\u0000|\uFFFD/g;function Zr(e){return("string"===typeof e?e:""+e).replace(Qr,"\n").replace(Yr,"")}function Xr(e,t,n){if(t=Zr(t),Zr(e)!==t&&n)throw Error(o(425))}function $r(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout((function(){throw e}))}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Ut(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),pi="__reactFiber$"+di,fi="__reactProps$"+di,hi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,xi="__reactHandles$"+di;function yi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[pi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function vi(e){return!(e=e[pi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[fi]||null}var ki=[],Si=-1;function Ai(e){return{current:e}}function ji(e){0>Si||(e.current=ki[Si],ki[Si]=null,Si--)}function Ci(e,t){Si++,ki[Si]=e.current,e.current=t}var Ei={},Ri=Ai(Ei),Oi=Ai(!1),Pi=Ei;function Ti(e,t){var n=e.type.contextTypes;if(!n)return Ei;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function zi(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Mi(){ji(Oi),ji(Ri)}function Ii(e,t,n){if(Ri.current!==Ei)throw Error(o(168));Ci(Ri,t),Ci(Oi,n)}function Li(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,W(e)||"Unknown",i));return N({},n,r)}function Fi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ei,Pi=Ri.current,Ci(Ri,e),Ci(Oi,Oi.current),!0}function Ni(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Li(e,t,Pi),r.__reactInternalMemoizedMergedChildContext=e,ji(Oi),ji(Ri),Ci(Ri,e)):ji(Oi),Ci(Oi,n)}var Di=null,Bi=!1,_i=!1;function Hi(e){null===Di?Di=[e]:Di.push(e)}function Ui(){if(!_i&&null!==Di){_i=!0;var e=0,t=vt;try{var n=Di;for(vt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Di=null,Bi=!1}catch(i){throw null!==Di&&(Di=Di.slice(e+1)),Ke($e,Ui),i}finally{vt=t,_i=!1}}return null}var Wi=[],qi=0,Gi=null,Vi=0,Ki=[],Ji=0,Qi=null,Yi=1,Zi="";function Xi(e,t){Wi[qi++]=Vi,Wi[qi++]=Gi,Gi=e,Vi=t}function $i(e,t,n){Ki[Ji++]=Yi,Ki[Ji++]=Zi,Ki[Ji++]=Qi,Qi=e;var r=Yi;e=Zi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Yi=1<<32-at(t)+i|n<<i|r,Zi=o+e}else Yi=1<<o|n<<i|r,Zi=e}function eo(e){null!==e.return&&(Xi(e,1),$i(e,1,0))}function to(e){for(;e===Gi;)Gi=Wi[--qi],Wi[qi]=null,Vi=Wi[--qi],Wi[qi]=null;for(;e===Qi;)Qi=Ki[--Ji],Ki[Ji]=null,Zi=Ki[--Ji],Ki[Ji]=null,Yi=Ki[--Ji],Ki[Ji]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=Tc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function so(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qi?{id:Yi,overflow:Zi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function lo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function co(e){if(io){var t=ro;if(t){var n=t;if(!so(e,t)){if(lo(e))throw Error(o(418));t=ci(n.nextSibling);var r=no;t&&so(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(lo(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function po(e){if(e!==no)return!1;if(!io)return uo(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(lo(e))throw fo(),Error(o(418));for(;t;)ao(e,t),t=ci(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ci(e.stateNode.nextSibling):null;return!0}function fo(){for(var e=ro;e;)e=ci(e.nextSibling)}function ho(){ro=no=null,io=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=b.ReactCurrentBatchConfig;function xo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vo(e){return(0,e._init)(e._payload)}function bo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Mc(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Nc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===z&&vo(o)===t.type)?((r=i(t,n.props)).ref=xo(e,t,n),r.return=e,r):((r=Ic(n.type,n.key,n.props,null,e.mode,r)).ref=xo(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Dc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Lc(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Nc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ic(t.type,t.key,t.props,null,e.mode,n)).ref=xo(e,null,t),n.return=e,n;case k:return(t=Dc(t,e.mode,n)).return=e,t;case z:return p(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Lc(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case z:return f(e,t,(i=n._init)(n._payload),r)}if(te(n)||L(n))return null!==i?null:d(e,t,n,r,null);yo(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case z:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,i,null);yo(t,r)}return null}function m(i,o,s,l){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var x=f(i,d,s[m],l);if(null===x){null===d&&(d=g);break}e&&d&&null===x.alternate&&t(i,d),o=a(x,o,m),null===u?c=x:u.sibling=x,u=x,d=g}if(m===s.length)return n(i,d),io&&Xi(i,m),c;if(null===d){for(;m<s.length;m++)null!==(d=p(i,s[m],l))&&(o=a(d,o,m),null===u?c=d:u.sibling=d,u=d);return io&&Xi(i,m),c}for(d=r(i,d);m<s.length;m++)null!==(g=h(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(i,e)})),io&&Xi(i,m),c}function g(i,s,l,c){var u=L(l);if("function"!==typeof u)throw Error(o(150));if(null==(l=u.call(l)))throw Error(o(151));for(var d=u=null,m=s,g=s=0,x=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(x=m,m=null):x=m.sibling;var v=f(i,m,y.value,c);if(null===v){null===m&&(m=x);break}e&&m&&null===v.alternate&&t(i,m),s=a(v,s,g),null===d?u=v:d.sibling=v,d=v,m=x}if(y.done)return n(i,m),io&&Xi(i,g),u;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=p(i,y.value,c))&&(s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return io&&Xi(i,g),u}for(m=r(i,m);!y.done;g++,y=l.next())null!==(y=h(m,i,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=a(y,s,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(i,e)})),io&&Xi(i,g),u}return function e(r,o,a,l){if("object"===typeof a&&null!==a&&a.type===S&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=o;null!==u;){if(u.key===c){if((c=a.type)===S){if(7===u.tag){n(r,u.sibling),(o=i(u,a.props.children)).return=r,r=o;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===z&&vo(c)===u.type){n(r,u.sibling),(o=i(u,a.props)).ref=xo(r,u,a),o.return=r,r=o;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===S?((o=Lc(a.props.children,r.mode,l,a.key)).return=r,r=o):((l=Ic(a.type,a.key,a.props,null,r.mode,l)).ref=xo(r,o,a),l.return=r,r=l)}return s(r);case k:e:{for(u=a.key;null!==o;){if(o.key===u){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Dc(a,r.mode,l)).return=r,r=o}return s(r);case z:return e(r,o,(u=a._init)(a._payload),l)}if(te(a))return m(r,o,a,l);if(L(a))return g(r,o,a,l);yo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Nc(a,r.mode,l)).return=r,r=o),s(r)):n(r,o)}}var wo=bo(!0),ko=bo(!1),So=Ai(null),Ao=null,jo=null,Co=null;function Eo(){Co=jo=Ao=null}function Ro(e){var t=So.current;ji(So),e._currentValue=t}function Oo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Po(e,t){Ao=e,Co=jo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(vs=!0),e.firstContext=null)}function To(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},null===jo){if(null===Ao)throw Error(o(308));jo=e,Ao.dependencies={lanes:0,firstContext:e}}else jo=jo.next=e;return t}var zo=null;function Mo(e){null===zo?zo=[e]:zo.push(e)}function Io(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Mo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lo(e,r)}function Lo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Fo=!1;function No(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Do(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _o(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Rl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lo(e,n)}return null===(i=r.interleaved)?(t.next=t,Mo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lo(e,n)}function Ho(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Uo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var i=e.updateQueue;Fo=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?o=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,u=c=l=null,s=o;;){var p=s.lane,f=s.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(p=t,f=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(f,d,p):h)||void 0===p)break e;d=N({},d,p);break e;case 2:Fo=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,a|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Fl|=a,e.lanes=a,e.memoizedState=d}}function qo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Go={},Vo=Ai(Go),Ko=Ai(Go),Jo=Ai(Go);function Qo(e){if(e===Go)throw Error(o(174));return e}function Yo(e,t){switch(Ci(Jo,t),Ci(Ko,e),Ci(Vo,Go),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}ji(Vo),Ci(Vo,t)}function Zo(){ji(Vo),ji(Ko),ji(Jo)}function Xo(e){Qo(Jo.current);var t=Qo(Vo.current),n=le(t,e.type);t!==n&&(Ci(Ko,e),Ci(Vo,n))}function $o(e){Ko.current===e&&(ji(Vo),ji(Ko))}var ea=Ai(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=b.ReactCurrentDispatcher,oa=b.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ca=null,ua=!1,da=!1,pa=0,fa=0;function ha(){throw Error(o(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?$a:es,e=n(r,i),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(o(301));a+=1,ca=la=null,t.updateQueue=null,ia.current=ts,e=n(r,i)}while(da)}if(ia.current=Xa,t=null!==la&&null!==la.next,aa=0,ca=la=sa=null,ua=!1,t)throw Error(o(300));return e}function xa(){var e=0!==pa;return pa=0,e}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?sa.memoizedState=ca=e:ca=ca.next=e,ca}function va(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ca?sa.memoizedState:ca.next;if(null!==t)ca=t,la=e;else{if(null===e)throw Error(o(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ca?sa.memoizedState=ca=e:ca=ca.next=e}return ca}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=va(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=la,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var l=s=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,sa.lanes|=d,Fl|=d}u=u.next}while(null!==u&&u!==a);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(vs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,sa.lanes|=a,Fl|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=va(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);sr(a,t.memoizedState)||(vs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Sa(){}function Aa(e,t){var n=sa,r=va(),i=t(),a=!sr(r.memoizedState,i);if(a&&(r.memoizedState=i,vs=!0),r=r.queue,Fa(Ea.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,Ta(9,Ca.bind(null,n,r,i,t),void 0,null),null===Ol)throw Error(o(349));0!==(30&aa)||ja(n,t,i)}return i}function ja(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ca(e,t,n,r){t.value=n,t.getSnapshot=r,Ra(t)&&Oa(e)}function Ea(e,t,n){return n((function(){Ra(t)&&Oa(e)}))}function Ra(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Oa(e){var t=Lo(e,1);null!==t&&nc(t,e,1,-1)}function Pa(e){var t=ya();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Ja.bind(null,sa,e),[t.memoizedState,e]}function Ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function za(){return va().memoizedState}function Ma(e,t,n,r){var i=ya();sa.flags|=e,i.memoizedState=Ta(1|t,n,void 0,void 0===r?null:r)}function Ia(e,t,n,r){var i=va();r=void 0===r?null:r;var o=void 0;if(null!==la){var a=la.memoizedState;if(o=a.destroy,null!==r&&ma(r,a.deps))return void(i.memoizedState=Ta(t,n,o,r))}sa.flags|=e,i.memoizedState=Ta(1|t,n,o,r)}function La(e,t){return Ma(8390656,8,e,t)}function Fa(e,t){return Ia(2048,8,e,t)}function Na(e,t){return Ia(4,2,e,t)}function Da(e,t){return Ia(4,4,e,t)}function Ba(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function _a(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ia(4,4,Ba.bind(null,t,e),n)}function Ha(){}function Ua(e,t){var n=va();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wa(e,t){var n=va();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qa(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,vs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),sa.lanes|=n,Fl|=n,e.baseState=!0),t)}function Ga(e,t){var n=vt;vt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{vt=n,oa.transition=r}}function Va(){return va().memoizedState}function Ka(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qa(e))Ya(t,n);else if(null!==(n=Io(e,t,n,r))){nc(n,e,r,ec()),Za(n,t,r)}}function Ja(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qa(e))Ya(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(i.next=i,Mo(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=Io(e,t,i,r))&&(nc(n,e,r,i=ec()),Za(n,t,r))}}function Qa(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Ya(e,t){da=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Za(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Xa={readContext:To,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},$a={readContext:To,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:To,useEffect:La,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ma(4194308,4,Ba.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ma(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ma(4,2,e,t)},useMemo:function(e,t){var n=ya();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ya();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ka.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:Pa,useDebugValue:Ha,useDeferredValue:function(e){return ya().memoizedState=e},useTransition:function(){var e=Pa(!1),t=e[0];return e=Ga.bind(null,e[1]),ya().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,i=ya();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Ol)throw Error(o(349));0!==(30&aa)||ja(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,La(Ea.bind(null,r,a,e),[e]),r.flags|=2048,Ta(9,Ca.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ya(),t=Ol.identifierPrefix;if(io){var n=Zi;t=":"+t+"R"+(n=(Yi&~(1<<32-at(Yi)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:To,useCallback:Ua,useContext:To,useEffect:Fa,useImperativeHandle:_a,useInsertionEffect:Na,useLayoutEffect:Da,useMemo:Wa,useReducer:wa,useRef:za,useState:function(){return wa(ba)},useDebugValue:Ha,useDeferredValue:function(e){return qa(va(),la.memoizedState,e)},useTransition:function(){return[wa(ba)[0],va().memoizedState]},useMutableSource:Sa,useSyncExternalStore:Aa,useId:Va,unstable_isNewReconciler:!1},ts={readContext:To,useCallback:Ua,useContext:To,useEffect:Fa,useImperativeHandle:_a,useInsertionEffect:Na,useLayoutEffect:Da,useMemo:Wa,useReducer:ka,useRef:za,useState:function(){return ka(ba)},useDebugValue:Ha,useDeferredValue:function(e){var t=va();return null===la?t.memoizedState=e:qa(t,la.memoizedState,e)},useTransition:function(){return[ka(ba)[0],va().memoizedState]},useMutableSource:Sa,useSyncExternalStore:Aa,useId:Va,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=N({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:N({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Bo(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=_o(e,o,i))&&(nc(t,e,i,r),Ho(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),o=Bo(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=_o(e,o,i))&&(nc(t,e,i,r),Ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Bo(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=_o(e,i,r))&&(nc(t,e,r,n),Ho(t,e,r))}};function os(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,o))}function as(e,t,n){var r=!1,i=Ei,o=t.contextType;return"object"===typeof o&&null!==o?o=To(o):(i=zi(t)?Pi:Ri.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ti(e,i):Ei),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},No(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=To(o):(o=zi(t)?Pi:Ri.current,i.context=Ti(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rs(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),Wo(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=H(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function us(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=Bo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ql||(ql=!0,Gl=r),ds(0,t)},n}function hs(e,t,n){(n=Bo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Vl?Vl=new Set([this]):Vl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=jc.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Bo(-1,1)).tag=2,_o(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ys=b.ReactCurrentOwner,vs=!1;function bs(e,t,n,r){t.child=null===e?ko(t,null,n,r):wo(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var o=t.ref;return Po(t,i),r=ga(e,t,n,r,o,i),n=xa(),null===e||vs?(io&&n&&eo(t),t.flags|=1,bs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qs(e,t,i))}function ks(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||zc(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ic(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Ss(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return qs(e,t,i)}return t.flags|=1,(e=Mc(o,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref){if(vs=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,qs(e,t,i);0!==(131072&e.flags)&&(vs=!0)}}return Cs(e,t,n,r,i)}function As(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ci(Ml,zl),zl|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ci(Ml,zl),zl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ci(Ml,zl),zl|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ci(Ml,zl),zl|=r;return bs(e,t,i,n),t.child}function js(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,r,i){var o=zi(n)?Pi:Ri.current;return o=Ti(t,o),Po(t,i),n=ga(e,t,n,r,o,i),r=xa(),null===e||vs?(io&&r&&eo(t),t.flags|=1,bs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qs(e,t,i))}function Es(e,t,n,r,i){if(zi(n)){var o=!0;Fi(t)}else o=!1;if(Po(t,i),null===t.stateNode)Ws(e,t),as(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=To(c):c=Ti(t,c=zi(n)?Pi:Ri.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,a,r,c),Fo=!1;var p=t.memoizedState;a.state=p,Wo(t,r,a,i),l=t.memoizedState,s!==r||p!==l||Oi.current||Fo?("function"===typeof u&&(rs(t,n,u,r),l=t.memoizedState),(s=Fo||os(t,n,s,r,p,l,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Do(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),a.props=c,d=t.pendingProps,p=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=To(l):l=Ti(t,l=zi(n)?Pi:Ri.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,a,r,l),Fo=!1,p=t.memoizedState,a.state=p,Wo(t,r,a,i);var h=t.memoizedState;s!==d||p!==h||Oi.current||Fo?("function"===typeof f&&(rs(t,n,f,r),h=t.memoizedState),(c=Fo||os(t,n,c,r,p,h,l)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=c):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Rs(e,t,n,r,o,i)}function Rs(e,t,n,r,i,o){js(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Ni(t,n,!1),qs(e,t,o);r=t.stateNode,ys.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,s,o)):bs(e,t,s,o),t.memoizedState=r.state,i&&Ni(t,n,!0),t.child}function Os(e){var t=e.stateNode;t.pendingContext?Ii(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ii(0,t.context,!1),Yo(e,t.containerInfo)}function Ps(e,t,n,r,i){return ho(),mo(i),t.flags|=256,bs(e,t,n,r),t.child}var Ts,zs,Ms,Is,Ls={dehydrated:null,treeContext:null,retryLane:0};function Fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ns(e,t,n){var r,i=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Ci(ea,1&a),null===e)return co(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Fc(l,i,0,null),e=Lc(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Fs(n),t.memoizedState=Ls,e):Ds(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,s){if(n)return 256&t.flags?(t.flags&=-257,Bs(e,t,s,r=us(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Fc({mode:"visible",children:r.children},i,0,null),(a=Lc(a,i,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,s),t.child.memoizedState=Fs(s),t.memoizedState=Ls,a);if(0===(1&t.mode))return Bs(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Bs(e,t,s,r=us(a=Error(o(419)),r,void 0))}if(l=0!==(s&e.childLanes),vs||l){if(null!==(r=Ol)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Lo(e,i),nc(r,e,i,-1))}return mc(),Bs(e,t,s,r=us(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Ec.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ci(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Ki[Ji++]=Yi,Ki[Ji++]=Zi,Ki[Ji++]=Qi,Yi=e.id,Zi=e.overflow,Qi=t),t=Ds(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,a,n);if(s){s=i.fallback,l=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Mc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=Mc(r,s):(s=Lc(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Fs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ls,i}return e=(s=e.child).sibling,i=Mc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ds(e,t){return(t=Fc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Bs(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Ds(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function _s(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Oo(e.return,t,n)}function Hs(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Us(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(bs(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&_s(e,n,t);else if(19===e.tag)_s(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ci(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Hs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Hs(t,!0,n,null,o);break;case"together":Hs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ws(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Fl|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Mc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Mc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Gs(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Vs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ks(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vs(t),null;case 1:case 17:return zi(t.type)&&Mi(),Vs(t),null;case 3:return r=t.stateNode,Zo(),ji(Oi),ji(Ri),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(po(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(ac(oo),oo=null))),zs(e,t),Vs(t),null;case 5:$o(t);var i=Qo(Jo.current);if(n=t.type,null!==e&&null!=t.stateNode)Ms(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Vs(t),null}if(e=Qo(Vo.current),po(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[pi]=t,r[fi]=a,e=0!==(1&t.mode),n){case"dialog":Br("cancel",r),Br("close",r);break;case"iframe":case"object":case"embed":Br("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)Br(Lr[i],r);break;case"source":Br("error",r);break;case"img":case"image":case"link":Br("error",r),Br("load",r);break;case"details":Br("toggle",r);break;case"input":Y(r,a),Br("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Br("invalid",r);break;case"textarea":ie(r,a),Br("invalid",r)}for(var l in ye(n,a),i=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Xr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Xr(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Br("scroll",r)}switch(n){case"input":V(r),$(r,a,!0);break;case"textarea":V(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=$r)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pi]=t,e[fi]=r,Ts(e,t,!1,!1),t.stateNode=e;e:{switch(l=ve(n,r),n){case"dialog":Br("cancel",e),Br("close",e),i=r;break;case"iframe":case"object":case"embed":Br("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)Br(Lr[i],e);i=r;break;case"source":Br("error",e),i=r;break;case"img":case"image":case"link":Br("error",e),Br("load",e),i=r;break;case"details":Br("toggle",e),i=r;break;case"input":Y(e,r),i=Q(e,r),Br("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=N({},r,{value:void 0}),Br("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Br("invalid",e)}for(a in ye(n,i),c=i)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?ge(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=u&&"onScroll"===a&&Br("scroll",e):null!=u&&v(e,a,u,l))}switch(n){case"input":V(e),$(e,r,!1);break;case"textarea":V(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Vs(t),null;case 6:if(e&&null!=t.stateNode)Is(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Qo(Jo.current),Qo(Vo.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[pi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pi]=t,t.stateNode=r}return Vs(t),null;case 13:if(ji(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))fo(),ho(),t.flags|=98560,a=!1;else if(a=po(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[pi]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Vs(t),a=!1}else null!==oo&&(ac(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Il&&(Il=3):mc())),null!==t.updateQueue&&(t.flags|=4),Vs(t),null);case 4:return Zo(),zs(e,t),null===e&&Ur(t.stateNode.containerInfo),Vs(t),null;case 10:return Ro(t.type._context),Vs(t),null;case 19:if(ji(ea),null===(a=t.memoizedState))return Vs(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Gs(a,!1);else{if(0!==Il||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Gs(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ci(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Ze()>Ul&&(t.flags|=128,r=!0,Gs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Gs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!io)return Vs(t),null}else 2*Ze()-a.renderingStartTime>Ul&&1073741824!==n&&(t.flags|=128,r=!0,Gs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ze(),t.sibling=null,n=ea.current,Ci(ea,r?1&n|2:1&n),t):(Vs(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&zl)&&(Vs(t),6&t.subtreeFlags&&(t.flags|=8192)):Vs(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Js(e,t){switch(to(t),t.tag){case 1:return zi(t.type)&&Mi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Zo(),ji(Oi),ji(Ri),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return $o(t),null;case 13:if(ji(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return ji(ea),null;case 4:return Zo(),null;case 10:return Ro(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Ts=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zs=function(){},Ms=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qo(Vo.current);var o,a=null;switch(n){case"input":i=Q(e,i),r=Q(e,r),a=[];break;case"select":i=N({},i,{value:void 0}),r=N({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=$r)}for(u in ye(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Br("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Is=function(e,t,n,r){n!==r&&(t.flags|=4)};var Qs=!1,Ys=!1,Zs="function"===typeof WeakSet?WeakSet:Set,Xs=null;function $s(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Ac(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Ac(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&el(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[fi],delete t[mi],delete t[gi],delete t[xi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=$r));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function pl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Ys||$s(n,t);case 6:var r=ul,i=dl;ul=null,pl(e,t,n),dl=i,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Ut(e)):li(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,pl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Ys&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&el(n,t,a),i=i.next}while(i!==r)}pl(e,t,n);break;case 1:if(!Ys&&($s(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ac(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Ys=(r=Ys)||null!==n.memoizedState,pl(e,t,n),Ys=r):pl(e,t,n);break;default:pl(e,t,n)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Zs),t.forEach((function(t){var r=Rc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(o(160));fl(a,s,i),ul=null,dl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){Ac(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),xl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){Ac(e,e.return,g)}try{nl(5,e,e.return)}catch(g){Ac(e,e.return,g)}}break;case 1:ml(t,e),xl(e),512&r&&null!==n&&$s(n,n.return);break;case 5:if(ml(t,e),xl(e),512&r&&null!==n&&$s(n,n.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(g){Ac(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===a.type&&null!=a.name&&Z(i,a),ve(l,s);var u=ve(l,a);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];"style"===d?ge(i,p):"dangerouslySetInnerHTML"===d?de(i,p):"children"===d?pe(i,p):v(i,d,p,u)}switch(l){case"input":X(i,a);break;case"textarea":oe(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(i,!!a.multiple,h,!1):f!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[fi]=a}catch(g){Ac(e,e.return,g)}}break;case 6:if(ml(t,e),xl(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Ac(e,e.return,g)}}break;case 3:if(ml(t,e),xl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){Ac(e,e.return,g)}break;case 4:default:ml(t,e),xl(e);break;case 13:ml(t,e),xl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Hl=Ze())),4&r&&hl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Ys=(u=Ys)||d,ml(t,e),Ys=u):ml(t,e),xl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Xs=e,d=e.child;null!==d;){for(p=Xs=d;null!==Xs;){switch(h=(f=Xs).child,f.tag){case 0:case 11:case 14:case 15:nl(4,f,f.return);break;case 1:$s(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Ac(r,n,g)}}break;case 5:$s(f,f.return);break;case 22:if(null!==f.memoizedState){wl(p);continue}}null!==h?(h.return=f,Xs=h):wl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{i=p.stateNode,u?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){Ac(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){Ac(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ml(t,e),xl(e),4&r&&hl(e);case 21:}}function xl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(pe(i,""),r.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(o(161))}}catch(s){Ac(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,n){Xs=e,vl(e,t,n)}function vl(e,t,n){for(var r=0!==(1&e.mode);null!==Xs;){var i=Xs,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Qs;if(!a){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Ys;s=Qs;var c=Ys;if(Qs=a,(Ys=l)&&!c)for(Xs=i;null!==Xs;)l=(a=Xs).child,22===a.tag&&null!==a.memoizedState?kl(i):null!==l?(l.return=a,Xs=l):kl(i);for(;null!==o;)Xs=o,vl(o,t,n),o=o.sibling;Xs=i,Qs=s,Ys=c}bl(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Xs=o):bl(e)}}function bl(e){for(;null!==Xs;){var t=Xs;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ys||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Ys)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&qo(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}qo(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Ut(p)}}}break;default:throw Error(o(163))}Ys||512&t.flags&&il(t)}catch(f){Ac(t,t.return,f)}}if(t===e){Xs=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xs=n;break}Xs=t.return}}function wl(e){for(;null!==Xs;){var t=Xs;if(t===e){Xs=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xs=n;break}Xs=t.return}}function kl(e){for(;null!==Xs;){var t=Xs;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){Ac(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Ac(t,i,l)}}var o=t.return;try{il(t)}catch(l){Ac(t,o,l)}break;case 5:var a=t.return;try{il(t)}catch(l){Ac(t,a,l)}}}catch(l){Ac(t,t.return,l)}if(t===e){Xs=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Xs=s;break}Xs=t.return}}var Sl,Al=Math.ceil,jl=b.ReactCurrentDispatcher,Cl=b.ReactCurrentOwner,El=b.ReactCurrentBatchConfig,Rl=0,Ol=null,Pl=null,Tl=0,zl=0,Ml=Ai(0),Il=0,Ll=null,Fl=0,Nl=0,Dl=0,Bl=null,_l=null,Hl=0,Ul=1/0,Wl=null,ql=!1,Gl=null,Vl=null,Kl=!1,Jl=null,Ql=0,Yl=0,Zl=null,Xl=-1,$l=0;function ec(){return 0!==(6&Rl)?Ze():-1!==Xl?Xl:Xl=Ze()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Rl)&&0!==Tl?Tl&-Tl:null!==go.transition?(0===$l&&($l=mt()),$l):0!==(e=vt)?e:e=void 0===(e=window.event)?16:Yt(e.type)}function nc(e,t,n,r){if(50<Yl)throw Yl=0,Zl=null,Error(o(185));xt(e,n,r),0!==(2&Rl)&&e===Ol||(e===Ol&&(0===(2&Rl)&&(Nl|=n),4===Il&&sc(e,Tl)),rc(e,r),1===n&&0===Rl&&0===(1&t.mode)&&(Ul=Ze()+500,Bi&&Ui()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),s=1<<a,l=i[a];-1===l?0!==(s&n)&&0===(s&r)||(i[a]=ft(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var r=pt(e,e===Ol?Tl:0);if(0===r)null!==n&&Je(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Je(n),1===t)0===e.tag?function(e){Bi=!0,Hi(e)}(lc.bind(null,e)):Hi(lc.bind(null,e)),ai((function(){0===(6&Rl)&&Ui()})),n=null;else{switch(bt(r)){case 1:n=$e;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Oc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Xl=-1,$l=0,0!==(6&Rl))throw Error(o(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pt(e,e===Ol?Tl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=Rl;Rl|=2;var a=hc();for(Ol===e&&Tl===t||(Wl=null,Ul=Ze()+500,pc(e,t));;)try{yc();break}catch(l){fc(e,l)}Eo(),jl.current=a,Rl=i,null!==Pl?t=0:(Ol=null,Tl=0,t=Il)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=oc(e,i))),1===t)throw n=Ll,pc(e,0),sc(e,r),rc(e,Ze()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(a=ht(e))&&(r=a,t=oc(e,a))),1===t))throw n=Ll,pc(e,0),sc(e,r),rc(e,Ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wc(e,_l,Wl);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Hl+500-Ze())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,_l,Wl),t);break}wc(e,_l,Wl);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>i&&(i=s),r&=~a}if(r=i,10<(r=(120>(r=Ze()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Al(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,_l,Wl),r);break}wc(e,_l,Wl);break;default:throw Error(o(329))}}}return rc(e,Ze()),e.callbackNode===n?ic.bind(null,e):null}function oc(e,t){var n=Bl;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=_l,_l=n,null!==t&&ac(t)),e}function ac(e){null===_l?_l=e:_l.push.apply(_l,e)}function sc(e,t){for(t&=~Dl,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&Rl))throw Error(o(327));kc();var t=pt(e,0);if(0===(1&t))return rc(e,Ze()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=oc(e,r))}if(1===n)throw n=Ll,pc(e,0),sc(e,t),rc(e,Ze()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,_l,Wl),rc(e,Ze()),null}function cc(e,t){var n=Rl;Rl|=1;try{return e(t)}finally{0===(Rl=n)&&(Ul=Ze()+500,Bi&&Ui())}}function uc(e){null!==Jl&&0===Jl.tag&&0===(6&Rl)&&kc();var t=Rl;Rl|=1;var n=El.transition,r=vt;try{if(El.transition=null,vt=1,e)return e()}finally{vt=r,El.transition=n,0===(6&(Rl=t))&&Ui()}}function dc(){zl=Ml.current,ji(Ml)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Pl)for(n=Pl.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Mi();break;case 3:Zo(),ji(Oi),ji(Ri),ra();break;case 5:$o(r);break;case 4:Zo();break;case 13:case 19:ji(ea);break;case 10:Ro(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Ol=e,Pl=e=Mc(e.current,null),Tl=zl=t,Il=0,Ll=null,Dl=Nl=Fl=0,_l=Bl=null,null!==zo){for(t=0;t<zo.length;t++)if(null!==(r=(n=zo[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}zo=null}return e}function fc(e,t){for(;;){var n=Pl;try{if(Eo(),ia.current=Xa,ua){for(var r=sa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ua=!1}if(aa=0,ca=la=sa=null,da=!1,pa=0,Cl.current=null,null===n||null===n.return){Il=1,Ll=t,Pl=null;break}e:{var a=e,s=n.return,l=n,c=t;if(t=Tl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gs(s);if(null!==h){h.flags&=-257,xs(h,s,l,0,t),1&h.mode&&ms(a,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ms(a,u,t),mc();break e}c=Error(o(426))}else if(io&&1&l.mode){var x=gs(s);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xs(x,s,l,0,t),mo(cs(c,l));break e}}a=c=cs(c,l),4!==Il&&(Il=2),null===Bl?Bl=[a]:Bl.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,fs(0,c,t));break e;case 1:l=c;var y=a.type,v=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==v&&"function"===typeof v.componentDidCatch&&(null===Vl||!Vl.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t,Uo(a,hs(a,l,t));break e}}a=a.return}while(null!==a)}bc(n)}catch(b){t=b,Pl===n&&null!==n&&(Pl=n=n.return);continue}break}}function hc(){var e=jl.current;return jl.current=Xa,null===e?Xa:e}function mc(){0!==Il&&3!==Il&&2!==Il||(Il=4),null===Ol||0===(268435455&Fl)&&0===(268435455&Nl)||sc(Ol,Tl)}function gc(e,t){var n=Rl;Rl|=2;var r=hc();for(Ol===e&&Tl===t||(Wl=null,pc(e,t));;)try{xc();break}catch(i){fc(e,i)}if(Eo(),Rl=n,jl.current=r,null!==Pl)throw Error(o(261));return Ol=null,Tl=0,Il}function xc(){for(;null!==Pl;)vc(Pl)}function yc(){for(;null!==Pl&&!Qe();)vc(Pl)}function vc(e){var t=Sl(e.alternate,e,zl);e.memoizedProps=e.pendingProps,null===t?bc(e):Pl=t,Cl.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ks(n,t,zl)))return void(Pl=n)}else{if(null!==(n=Js(n,t)))return n.flags&=32767,void(Pl=n);if(null===e)return Il=6,void(Pl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Pl=t);Pl=t=e}while(null!==t);0===Il&&(Il=5)}function wc(e,t,n){var r=vt,i=El.transition;try{El.transition=null,vt=1,function(e,t,n,r){do{kc()}while(null!==Jl);if(0!==(6&Rl))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===Ol&&(Pl=Ol=null,Tl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Kl||(Kl=!0,Oc(tt,(function(){return kc(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=El.transition,El.transition=null;var s=vt;vt=1;var l=Rl;Rl|=4,Cl.current=null,function(e,t){if(ei=qt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==a||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=s),f===a&&++d===r&&(c=s),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},qt=!1,Xs=t;null!==Xs;)if(e=(t=Xs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xs=e;else for(;null!==Xs;){t=Xs;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,x=m.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),x);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(o(163))}}catch(w){Ac(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xs=e;break}Xs=t.return}m=tl,tl=!1}(e,n),gl(n,e),hr(ti),qt=!!ei,ti=ei=null,e.current=n,yl(n,e,i),Ye(),Rl=l,vt=s,El.transition=a}else e.current=n;if(Kl&&(Kl=!1,Jl=e,Ql=i),a=e.pendingLanes,0===a&&(Vl=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Ze()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ql)throw ql=!1,e=Gl,Gl=null,e;0!==(1&Ql)&&0!==e.tag&&kc(),a=e.pendingLanes,0!==(1&a)?e===Zl?Yl++:(Yl=0,Zl=e):Yl=0,Ui()}(e,t,n,r)}finally{El.transition=i,vt=r}return null}function kc(){if(null!==Jl){var e=bt(Ql),t=El.transition,n=vt;try{if(El.transition=null,vt=16>e?16:e,null===Jl)var r=!1;else{if(e=Jl,Jl=null,Ql=0,0!==(6&Rl))throw Error(o(331));var i=Rl;for(Rl|=4,Xs=e.current;null!==Xs;){var a=Xs,s=a.child;if(0!==(16&Xs.flags)){var l=a.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Xs=u;null!==Xs;){var d=Xs;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var p=d.child;if(null!==p)p.return=d,Xs=p;else for(;null!==Xs;){var f=(d=Xs).sibling,h=d.return;if(ol(d),d===u){Xs=null;break}if(null!==f){f.return=h,Xs=f;break}Xs=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Xs=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Xs=s;else e:for(;null!==Xs;){if(0!==(2048&(a=Xs).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Xs=y;break e}Xs=a.return}}var v=e.current;for(Xs=v;null!==Xs;){var b=(s=Xs).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Xs=b;else e:for(s=v;null!==Xs;){if(0!==(2048&(l=Xs).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){Ac(l,l.return,k)}if(l===s){Xs=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Xs=w;break e}Xs=l.return}}if(Rl=i,Ui(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(k){}r=!0}return r}finally{vt=n,El.transition=t}}return!1}function Sc(e,t,n){e=_o(e,t=fs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function Ac(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Vl||!Vl.has(r))){t=_o(t,e=hs(t,e=cs(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function jc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Ol===e&&(Tl&n)===n&&(4===Il||3===Il&&(130023424&Tl)===Tl&&500>Ze()-Hl?pc(e,0):Dl|=n),rc(e,t)}function Cc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Lo(e,t))&&(xt(e,t,n),rc(e,n))}function Ec(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cc(e,n)}function Rc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Cc(e,n)}function Oc(e,t){return Ke(e,t)}function Pc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tc(e,t,n,r){return new Pc(e,t,n,r)}function zc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Mc(e,t){var n=e.alternate;return null===n?((n=Tc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ic(e,t,n,r,i,a){var s=2;if(r=e,"function"===typeof e)zc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Lc(n.children,i,a,t);case A:s=8,i|=8;break;case j:return(e=Tc(12,n,t,2|i)).elementType=j,e.lanes=a,e;case O:return(e=Tc(13,n,t,i)).elementType=O,e.lanes=a,e;case P:return(e=Tc(19,n,t,i)).elementType=P,e.lanes=a,e;case M:return Fc(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case E:s=9;break e;case R:s=11;break e;case T:s=14;break e;case z:s=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Tc(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Lc(e,t,n,r){return(e=Tc(7,e,r,t)).lanes=n,e}function Fc(e,t,n,r){return(e=Tc(22,e,r,t)).elementType=M,e.lanes=n,e.stateNode={isHidden:!1},e}function Nc(e,t,n){return(e=Tc(6,e,null,t)).lanes=n,e}function Dc(e,t,n){return(t=Tc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _c(e,t,n,r,i,o,a,s,l){return e=new Bc(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Tc(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},No(o),e}function Hc(e){if(!e)return Ei;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(zi(n))return Li(e,n,t)}return t}function Uc(e,t,n,r,i,o,a,s,l){return(e=_c(n,r,!0,e,0,o,0,s,l)).context=Hc(null),n=e.current,(o=Bo(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,_o(n,o,i),e.current.lanes=i,xt(e,i,r),rc(e,r),e}function Wc(e,t,n,r){var i=t.current,o=ec(),a=tc(i);return n=Hc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Bo(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=_o(i,t,a))&&(nc(e,i,a,o),Ho(e,i,a)),a}function qc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Gc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Vc(e,t){Gc(e,t),(e=e.alternate)&&Gc(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Oi.current)vs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return vs=!1,function(e,t,n){switch(t.tag){case 3:Os(t),ho();break;case 5:Xo(t);break;case 1:zi(t.type)&&Fi(t);break;case 4:Yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ci(So,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ci(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ns(e,t,n):(Ci(ea,1&ea.current),null!==(e=qs(e,t,n))?e.sibling:null);Ci(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Us(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ci(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,As(e,t,n)}return qs(e,t,n)}(e,t,n);vs=0!==(131072&e.flags)}else vs=!1,io&&0!==(1048576&t.flags)&&$i(t,Vi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ws(e,t),e=t.pendingProps;var i=Ti(t,Ri.current);Po(t,n),i=ga(null,t,r,e,i,n);var a=xa();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zi(r)?(a=!0,Fi(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,No(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Rs(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),bs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ws(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return zc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===R)return 11;if(e===T)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Cs(null,t,r,e,n);break e;case 1:t=Es(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,ns(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Cs(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,Es(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(Os(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,Do(e,t),Wo(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ps(e,t,r,n,i=cs(Error(o(423)),t));break e}if(r!==i){t=Ps(e,t,r,n,i=cs(Error(o(424)),t));break e}for(ro=ci(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=ko(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===i){t=qs(e,t,n);break e}bs(e,t,r,n)}t=t.child}return t;case 5:return Xo(t),null===e&&co(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==a&&ni(r,a)&&(t.flags|=32),js(e,t),bs(e,t,s,n),t.child;case 6:return null===e&&co(t),null;case 13:return Ns(e,t,n);case 4:return Yo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):bs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return bs(e,t,t.pendingProps,n),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Ci(So,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===i.children&&!Oi.current){t=qs(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=Bo(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),Oo(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Oo(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}bs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Po(t,n),r=r(i=To(i)),t.flags|=1,bs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),ks(e,t,r,i=ns(r.type,i),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),Ws(e,t),t.tag=1,zi(r)?(e=!0,Fi(t)):e=!1,Po(t,n),as(t,r,i),ls(t,r,i,n),Rs(null,t,r,!0,e,n);case 19:return Us(e,t,n);case 22:return As(e,t,n)}throw Error(o(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Jc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Zc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function $c(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var s=i;i=function(){var e=qc(a);s.call(e)}}Wc(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=qc(a);o.call(e)}}var a=Uc(t,r,e,0,null,!1,0,"",Xc);return e._reactRootContainer=a,e[hi]=a.current,Ur(8===e.nodeType?e.parentNode:e),uc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=qc(l);s.call(e)}}var l=_c(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=l,e[hi]=l.current,Ur(8===e.nodeType?e.parentNode:e),uc((function(){Wc(t,l,n,r)})),l}(n,t,e,i,r);return qc(a)}Qc.prototype.render=Jc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Wc(e,t,null,null)},Qc.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Wc(null,e,null,null)})),t[hi]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=At();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&0!==t&&t<Mt[n].priority;n++);Mt.splice(n,0,e),0===n&&Nt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),rc(t,Ze()),0===(6&Rl)&&(Ul=Ze()+500,Ui()))}break;case 13:uc((function(){var t=Lo(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Vc(e,1)}},kt=function(e){if(13===e.tag){var t=Lo(e,134217728);if(null!==t)nc(t,e,134217728,ec());Vc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Lo(e,t);if(null!==n)nc(n,e,t,ec());Vc(e,t)}},At=function(){return vt},jt=function(e,t){var n=vt;try{return vt=e,t()}finally{vt=n}},ke=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));K(r),X(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Re=cc,Oe=uc;var eu={usingClientEntryPoint:!1,Events:[vi,bi,wi,Ce,Ee,cc]},tu={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ge(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(nu),ot=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Yc(e))throw Error(o(299));var n=!1,r="",i=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=_c(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Jc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ge(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Zc(t))throw Error(o(200));return $c(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",s=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Uc(t,null,e,1,null!=n?n:null,i,0,a,s),e[hi]=t.current,Ur(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qc(t)},t.render=function(e,t,n){if(!Zc(t))throw Error(o(200));return $c(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Zc(e))throw Error(o(40));return!!e._reactRootContainer&&(uc((function(){$c(null,null,e,!1,(function(){e._reactRootContainer=null,e[hi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zc(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return $c(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},5484:(e,t,n)=>{"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function i(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function o(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function a(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,a=null,s=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?s="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==a||null!==s){var l=e.displayName||e.name,c="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==a?"\n  "+a:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=i),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,r)}}return e}n.r(t),n.d(t,{polyfill:()=>a}),r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0},5765:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(5043),a=h(o),s=h(n(7950)),l=h(n(5173)),c=h(n(1439)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(6619)),d=n(8821),p=h(d),f=n(5484);function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var g=t.portalClassName="ReactModalPortal",x=t.bodyOpenClassName="ReactModal__Body--open",y=d.canUseDOM&&void 0!==s.default.createPortal,v=function(e){return document.createElement(e)},b=function(){return y?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer};function w(e){return e()}var k=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=Array(o),u=0;u<o;u++)l[u]=arguments[u];return n=i=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.removePortal=function(){!y&&s.default.unmountComponentAtNode(i.node);var e=w(i.props.parentSelector);e&&e.contains(i.node)?e.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(e){i.portal=e},i.renderPortal=function(e){var n=b()(i,a.default.createElement(c.default,r({defaultStyles:t.defaultStyles},e)),i.node);i.portalRef(n)},m(i,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){d.canUseDOM&&(y||(this.node=v("div")),this.node.className=this.props.portalClassName,w(this.props.parentSelector).appendChild(this.node),!y&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:w(e.parentSelector),nextParent:w(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var r=this.props,i=r.isOpen,o=r.portalClassName;e.portalClassName!==o&&(this.node.className=o);var a=n.prevParent,s=n.nextParent;s!==a&&(a.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||i)&&!y&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&y?(!this.node&&y&&(this.node=v("div")),b()(a.default.createElement(c.default,r({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){u.setElement(e)}}]),t}(o.Component);k.propTypes={isOpen:l.default.bool.isRequired,style:l.default.shape({content:l.default.object,overlay:l.default.object}),portalClassName:l.default.string,bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,className:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),overlayClassName:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),appElement:l.default.oneOfType([l.default.instanceOf(p.default),l.default.instanceOf(d.SafeHTMLCollection),l.default.instanceOf(d.SafeNodeList),l.default.arrayOf(l.default.instanceOf(p.default))]),onAfterOpen:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,ariaHideApp:l.default.bool,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,parentSelector:l.default.func,aria:l.default.object,data:l.default.object,role:l.default.string,contentLabel:l.default.string,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func},k.defaultProps={isOpen:!1,portalClassName:g,bodyOpenClassName:x,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return a.default.createElement("div",e,t)},contentElement:function(e,t){return a.default.createElement("div",e,t)}},k.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,f.polyfill)(k),t.default=k},1439:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(5043),s=g(n(5173)),l=m(n(1774)),c=g(n(2206)),u=m(n(6619)),d=m(n(4841)),p=n(8821),f=g(p),h=g(n(2959));function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function g(e){return e&&e.__esModule?e:{default:e}}n(6062);var x={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},y=0,v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,r=e.ariaHideApp,i=e.htmlOpenClassName,o=e.bodyOpenClassName,a=e.parentSelector,s=a&&a().ownerDocument||document;o&&d.remove(s.body,o),i&&d.remove(s.getElementsByTagName("html")[0],i),r&&y>0&&0===(y-=1)&&u.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(l.returnFocus(n.props.preventScroll),l.teardownScopedFocus()):l.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),h.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(l.setupScopedFocus(n.node),l.markForFocusLater()),n.setState({isOpen:!0},(function(){n.openAnimationFrame=requestAnimationFrame((function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})}))})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){(function(e){return"Tab"===e.code||9===e.keyCode})(e)&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var r="object"===("undefined"===typeof t?"undefined":i(t))?t:{base:x[e],afterOpen:x[e]+"--after-open",beforeClose:x[e]+"--before-close"},o=r.base;return n.state.afterOpen&&(o=o+" "+r.afterOpen),n.state.beforeClose&&(o=o+" "+r.beforeClose),"string"===typeof t&&t?o+" "+t:o},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,r){return n[e+"-"+r]=t[r],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,i=e.bodyOpenClassName,o=e.parentSelector,a=o&&o().ownerDocument||document;i&&d.add(a.body,i),r&&d.add(a.getElementsByTagName("html")[0],r),n&&(y+=1,u.hide(t)),h.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,i=e.overlayClassName,o=e.defaultStyles,a=e.children,s=n?{}:o.content,l=i?{}:o.overlay;if(this.shouldBeClosed())return null;var c={ref:this.setOverlayRef,className:this.buildClassName("overlay",i),style:r({},l,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},u=r({id:t,ref:this.setContentRef,style:r({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(u,a);return this.props.overlayElement(c,d)}}]),t}(a.Component);v.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},v.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(f.default),s.default.instanceOf(p.SafeHTMLCollection),s.default.instanceOf(p.SafeNodeList),s.default.arrayOf(s.default.instanceOf(f.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=v,e.exports=t.default},6619:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){s&&(s.removeAttribute?s.removeAttribute("aria-hidden"):null!=s.length?s.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(s).forEach((function(e){return e.removeAttribute("aria-hidden")})));s=null},t.log=function(){0},t.assertNodeList=l,t.setElement=function(e){var t=e;if("string"===typeof t&&a.canUseDOM){var n=document.querySelectorAll(t);l(n,t),t=n}return s=t||s},t.validateElement=c,t.hide=function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=c(e)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){i.value.setAttribute("aria-hidden","true")}}catch(a){n=!0,r=a}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}},t.show=function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=c(e)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){i.value.removeAttribute("aria-hidden")}}catch(a){n=!0,r=a}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}},t.documentNotReadyOrSSRTesting=function(){s=null};var r,i=n(6440),o=(r=i)&&r.__esModule?r:{default:r},a=n(8821);var s=null;function l(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function c(e){var t=e||s;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,o.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},6062:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){for(var e=[a,s],t=0;t<e.length;t++){var n=e[t];n&&(n.parentNode&&n.parentNode.removeChild(n))}a=s=null,l=[]},t.log=function(){console.log("bodyTrap ----------"),console.log(l.length);for(var e=[a,s],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")};var r,i=n(2959),o=(r=i)&&r.__esModule?r:{default:r};var a=void 0,s=void 0,l=[];function c(){0!==l.length&&l[l.length-1].focusContent()}o.default.subscribe((function(e,t){a||s||((a=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),a.style.position="absolute",a.style.opacity="0",a.setAttribute("tabindex","0"),a.addEventListener("focus",c),(s=a.cloneNode()).addEventListener("focus",c)),(l=t).length>0?(document.body.firstChild!==a&&document.body.insertBefore(a,document.body.firstChild),document.body.lastChild!==s&&document.body.appendChild(s)):(a.parentElement&&a.parentElement.removeChild(a),s.parentElement&&s.parentElement.removeChild(s))}))},4841:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var t in n)i(e,n[t]);var o=document.body;for(var a in r)i(o,r[a]);n={},r={}},t.log=function(){0};var n={},r={};function i(e,t){e.classList.remove(t)}t.add=function(e,t){return i=e.classList,o="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(o,e),i.add(e)}));var i,o},t.remove=function(e,t){return i=e.classList,o="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(o,e),0===o[e]&&i.remove(e)}));var i,o}},1774:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){a=[]},t.log=function(){0},t.handleBlur=c,t.handleFocus=u,t.markForFocusLater=function(){a.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==a.length&&(t=a.pop()).focus({preventScroll:e}))}catch(n){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){a.length>0&&a.pop()},t.setupScopedFocus=function(e){s=e,window.addEventListener?(window.addEventListener("blur",c,!1),document.addEventListener("focus",u,!0)):(window.attachEvent("onBlur",c),document.attachEvent("onFocus",u))},t.teardownScopedFocus=function(){s=null,window.addEventListener?(window.removeEventListener("blur",c),document.removeEventListener("focus",u)):(window.detachEvent("onBlur",c),document.detachEvent("onFocus",u))};var r,i=n(4682),o=(r=i)&&r.__esModule?r:{default:r};var a=[],s=null,l=!1;function c(){l=!0}function u(){if(l){if(l=!1,!s)return;setTimeout((function(){s.contains(document.activeElement)||((0,o.default)(s)[0]||s).focus()}),0)}}},2959:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(){console.log("portalOpenInstances ----------"),console.log(r.openInstances.length),r.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},t.resetState=function(){r=new n};var n=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},r=new n;t.default=r},8821:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var r,i=n(7396);var o=((r=i)&&r.__esModule?r:{default:r}).default,a=o.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=o.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=o.canUseDOM?window.NodeList:{},t.canUseDOM=o.canUseDOM;t.default=a},2206:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,o.default)(e);if(!n.length)return void t.preventDefault();var r=void 0,i=t.shiftKey,s=n[0],l=n[n.length-1],c=a();if(e===c){if(!i)return;r=l}l!==c||i||(r=s);s===c&&i&&(r=l);if(r)return t.preventDefault(),void r.focus();var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==u||"Chrome"==u[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var d=n.indexOf(c);d>-1&&(d+=i?-1:1);if("undefined"===typeof(r=n[d]))return t.preventDefault(),void(r=i?l:s).focus();t.preventDefault(),r.focus()};var r,i=n(4682),o=(r=i)&&r.__esModule?r:{default:r};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?a(e.activeElement.shadowRoot):e.activeElement}e.exports=t.default},4682:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=[].slice.call(t.querySelectorAll("*"),0).reduce((function(t,n){return t.concat(n.shadowRoot?e(n.shadowRoot):[n])}),[]);return n.filter(s)};var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function o(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var i=window.getComputedStyle(e),o=i.getPropertyValue("display");return t?o!==r&&function(e,t){return"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0}(e,i):o===n}catch(a){return console.warn("Failed to inspect element style"),!1}}function a(e,t){var n=e.nodeName.toLowerCase();return(i.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),o(t))return!1;t=t.parentNode}return!0}(e)}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}e.exports=t.default},2963:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(5765),o=(r=i)&&r.__esModule?r:{default:r};t.default=o.default,e.exports=t.default},2501:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(5043)),i=s(n(5173)),o=s(n(381)),a=s(n(7324));function s(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var c=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).isVisible=function(e,t,r){var i=e.top,o=e.left,a=e.bottom,s=e.right,l=e.width,c=e.height,u=n.props,d=u.offset,p=u.partialVisibility;if(i+s+a+o===0)return!1;var f=0-d,h=0-d,m=t+d,g=r+d;return p?i+c>=f&&o+l>=h&&a-c<=g&&s-l<=m:i>=f&&o>=h&&a<=g&&s<=m},n.isComponentVisible=function(){setTimeout((function(){if(n.nodeRef&&n.nodeRef.getBoundingClientRect){var e=document.documentElement,t=n.props.once,r=n.nodeRef.getBoundingClientRect(),i=window.innerWidth||e.clientWidth,o=window.innerHeight||e.clientHeight,a=n.isVisible(r,i,o);a&&t&&n.removeListener(),n.setState({isVisible:a})}}),0)},n.setNodeRef=function(e){return n.nodeRef=e},n.ownProps=Object.keys(i.propTypes),n.state={isVisible:!1},n.throttleCb=(0,o.default)(n.isComponentVisible,n.props.throttleInterval),t.nodeRef&&n.setNodeRef(t.nodeRef),n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=i.prototype;return s.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},s.componentDidUpdate=function(e){(0,a.default)(this.getChildProps(this.props),this.getChildProps(e))||this.isComponentVisible()},s.componentWillUnmount=function(){this.removeListener()},s.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},s.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},s.getChildProps=function(e){var t=this;void 0===e&&(e=this.props);var n={};return Object.keys(e).forEach((function(r){-1===t.ownProps.indexOf(r)&&(n[r]=e[r])})),n},s.getChildren=function(){var e=this;return"function"===typeof this.props.children?this.props.children(l({},this.getChildProps(),{isVisible:this.state.isVisible})):r.default.Children.map(this.props.children,(function(t){return r.default.cloneElement(t,l({},e.getChildProps(),{isVisible:e.state.isVisible}))}))},s.render=function(){var e=this.props,t=e.className,n=e.style,i=e.nodeRef,o=e.tag,a=l({},t&&{className:t},n&&{style:n});return r.default.createElement(o,l({ref:!i&&this.setNodeRef},a),this.getChildren())},i}(r.PureComponent);t.default=c,c.propTypes={once:i.default.bool,throttleInterval:function(e,t,n){var r=e[t];return!Number.isInteger(r)||r<0?new Error("The "+t+" prop you provided to "+n+" is not a valid integer >= 0."):null},children:i.default.oneOfType([i.default.func,i.default.element,i.default.arrayOf(i.default.element)]),style:i.default.object,className:i.default.string,offset:i.default.number,partialVisibility:i.default.bool,nodeRef:i.default.object,tag:i.default.string},c.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},6930:(e,t,n)=>{"use strict";var r;t.A=void 0;var i=((r=n(2501))&&r.__esModule?r:{default:r}).default;t.A=i},6214:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.PrevArrow=t.NextArrow=void 0;var i=s(n(5043)),o=s(n(8139)),a=n(1200);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m(r.key),r)}}function h(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function y(e){var t=v();return function(){var n,i=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}t.PrevArrow=function(e){g(n,e);var t=y(n);function n(){return p(this,n),t.apply(this,arguments)}return h(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var n={key:"0","data-role":"none",className:(0,o.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?i.default.cloneElement(this.props.prevArrow,u(u({},n),r)):i.default.createElement("button",l({key:"0",type:"button"},n)," ","Previous")}}]),n}(i.default.PureComponent),t.NextArrow=function(e){g(n,e);var t=y(n);function n(){return p(this,n),t.apply(this,arguments)}return h(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});(0,a.canGoNext)(this.props)||(e["slick-disabled"]=!0,t=null);var n={key:"1","data-role":"none",className:(0,o.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?i.default.cloneElement(this.props.nextArrow,u(u({},n),r)):i.default.createElement("button",l({key:"1",type:"button"},n)," ","Next")}}]),n}(i.default.PureComponent)},5112:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n(5043))&&r.__esModule?r:{default:r};var o={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return i.default.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return i.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};t.default=o},8496:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Dots=void 0;var i=s(n(5043)),o=s(n(8139)),a=n(1200);function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return(t=d(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function d(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){var t=h();return function(){var n,i=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}t.Dots=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(d,e);var t,n,r,s=f(d);function d(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),s.apply(this,arguments)}return t=d,n=[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.props.clickHandler(e)}},{key:"render",value:function(){for(var e,t=this.props,n=t.onMouseEnter,r=t.onMouseOver,s=t.onMouseLeave,u=t.infinite,d=t.slidesToScroll,p=t.slidesToShow,f=t.slideCount,h=t.currentSlide,m=(e={slideCount:f,slidesToScroll:d,slidesToShow:p,infinite:u}).infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,g={onMouseEnter:n,onMouseOver:r,onMouseLeave:s},x=[],y=0;y<m;y++){var v=(y+1)*d-1,b=u?v:(0,a.clamp)(v,0,f-1),w=b-(d-1),k=u?w:(0,a.clamp)(w,0,f-1),S=(0,o.default)({"slick-active":u?h>=k&&h<=b:h===k}),A={message:"dots",index:y,slidesToScroll:d,currentSlide:h},j=this.clickHandler.bind(this,A);x=x.concat(i.default.createElement("li",{key:y,className:S},i.default.cloneElement(this.props.customPaging(y),{onClick:j})))}return i.default.cloneElement(this.props.appendDots(x),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:this.props.dotsClass},g))}}],n&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),d}(i.default.PureComponent)},2382:(e,t,n)=>{"use strict";t.A=void 0;var r,i=(r=n(433))&&r.__esModule?r:{default:r};t.A=i.default},4910:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0}},9826:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InnerSlider=void 0;var r=p(n(5043)),i=p(n(4910)),o=p(n(446)),a=p(n(8139)),s=n(1200),l=n(737),c=n(8496),u=n(6214),d=p(n(5820));function p(e){return e&&e.__esModule?e:{default:e}}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,j(r.key),r)}}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){var t=k();return function(){var n,r=S(e);if(t){var i=S(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(this,n)}}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(k=function(){return!!e})()}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function A(e,t,n){return(t=j(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==f(t)?t:String(t)}t.InnerSlider=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(k,e);var t,n,p,g=b(k);function k(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,k),A(w(t=g.call(this,e)),"listRefHandler",(function(e){return t.list=e})),A(w(t),"trackRefHandler",(function(e){return t.track=e})),A(w(t),"adaptHeight",(function(){if(t.props.adaptiveHeight&&t.list){var e=t.list.querySelector('[data-index="'.concat(t.state.currentSlide,'"]'));t.list.style.height=(0,s.getHeight)(e)+"px"}})),A(w(t),"componentDidMount",(function(){if(t.props.onInit&&t.props.onInit(),t.props.lazyLoad){var e=(0,s.getOnDemandLazySlides)(x(x({},t.props),t.state));e.length>0&&(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e))}var n=x({listRef:t.list,trackRef:t.track},t.props);t.updateState(n,!0,(function(){t.adaptHeight(),t.props.autoplay&&t.autoPlay("update")})),"progressive"===t.props.lazyLoad&&(t.lazyLoadTimer=setInterval(t.progressiveLazyLoad,1e3)),t.ro=new d.default((function(){t.state.animating?(t.onWindowResized(!1),t.callbackTimers.push(setTimeout((function(){return t.onWindowResized()}),t.props.speed))):t.onWindowResized()})),t.ro.observe(t.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),(function(e){e.onfocus=t.props.pauseOnFocus?t.onSlideFocus:null,e.onblur=t.props.pauseOnFocus?t.onSlideBlur:null})),window.addEventListener?window.addEventListener("resize",t.onWindowResized):window.attachEvent("onresize",t.onWindowResized)})),A(w(t),"componentWillUnmount",(function(){t.animationEndCallback&&clearTimeout(t.animationEndCallback),t.lazyLoadTimer&&clearInterval(t.lazyLoadTimer),t.callbackTimers.length&&(t.callbackTimers.forEach((function(e){return clearTimeout(e)})),t.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",t.onWindowResized):window.detachEvent("onresize",t.onWindowResized),t.autoplayTimer&&clearInterval(t.autoplayTimer),t.ro.disconnect()})),A(w(t),"componentDidUpdate",(function(e){if(t.checkImagesLoad(),t.props.onReInit&&t.props.onReInit(),t.props.lazyLoad){var n=(0,s.getOnDemandLazySlides)(x(x({},t.props),t.state));n.length>0&&(t.setState((function(e){return{lazyLoadedList:e.lazyLoadedList.concat(n)}})),t.props.onLazyLoad&&t.props.onLazyLoad(n))}t.adaptHeight();var i=x(x({listRef:t.list,trackRef:t.track},t.props),t.state),o=t.didPropsChange(e);o&&t.updateState(i,o,(function(){t.state.currentSlide>=r.default.Children.count(t.props.children)&&t.changeSlide({message:"index",index:r.default.Children.count(t.props.children)-t.props.slidesToShow,currentSlide:t.state.currentSlide}),t.props.autoplay?t.autoPlay("update"):t.pause("paused")}))})),A(w(t),"onWindowResized",(function(e){t.debouncedResize&&t.debouncedResize.cancel(),t.debouncedResize=(0,o.default)((function(){return t.resizeWindow(e)}),50),t.debouncedResize()})),A(w(t),"resizeWindow",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(Boolean(t.track&&t.track.node)){var n=x(x({listRef:t.list,trackRef:t.track},t.props),t.state);t.updateState(n,e,(function(){t.props.autoplay?t.autoPlay("update"):t.pause("paused")})),t.setState({animating:!1}),clearTimeout(t.animationEndCallback),delete t.animationEndCallback}})),A(w(t),"updateState",(function(e,n,i){var o=(0,s.initializedState)(e);e=x(x(x({},e),o),{},{slideIndex:o.currentSlide});var a=(0,s.getTrackLeft)(e);e=x(x({},e),{},{left:a});var l=(0,s.getTrackCSS)(e);(n||r.default.Children.count(t.props.children)!==r.default.Children.count(e.children))&&(o.trackStyle=l),t.setState(o,i)})),A(w(t),"ssrInit",(function(){if(t.props.variableWidth){var e=0,n=0,i=[],o=(0,s.getPreClones)(x(x(x({},t.props),t.state),{},{slideCount:t.props.children.length})),a=(0,s.getPostClones)(x(x(x({},t.props),t.state),{},{slideCount:t.props.children.length}));t.props.children.forEach((function(t){i.push(t.props.style.width),e+=t.props.style.width}));for(var l=0;l<o;l++)n+=i[i.length-1-l],e+=i[i.length-1-l];for(var c=0;c<a;c++)e+=i[c];for(var u=0;u<t.state.currentSlide;u++)n+=i[u];var d={width:e+"px",left:-n+"px"};if(t.props.centerMode){var p="".concat(i[t.state.currentSlide],"px");d.left="calc(".concat(d.left," + (100% - ").concat(p,") / 2 ) ")}return{trackStyle:d}}var f=r.default.Children.count(t.props.children),h=x(x(x({},t.props),t.state),{},{slideCount:f}),m=(0,s.getPreClones)(h)+(0,s.getPostClones)(h)+f,g=100/t.props.slidesToShow*m,y=100/m,v=-y*((0,s.getPreClones)(h)+t.state.currentSlide)*g/100;return t.props.centerMode&&(v+=(100-y*g/100)/2),{slideWidth:y+"%",trackStyle:{width:g+"%",left:v+"%"}}})),A(w(t),"checkImagesLoad",(function(){var e=t.list&&t.list.querySelectorAll&&t.list.querySelectorAll(".slick-slide img")||[],n=e.length,r=0;Array.prototype.forEach.call(e,(function(e){var i=function(){return++r&&r>=n&&t.onWindowResized()};if(e.onclick){var o=e.onclick;e.onclick=function(t){o(t),e.parentNode.focus()}}else e.onclick=function(){return e.parentNode.focus()};e.onload||(t.props.lazyLoad?e.onload=function(){t.adaptHeight(),t.callbackTimers.push(setTimeout(t.onWindowResized,t.props.speed))}:(e.onload=i,e.onerror=function(){i(),t.props.onLazyLoadError&&t.props.onLazyLoadError()}))}))})),A(w(t),"progressiveLazyLoad",(function(){for(var e=[],n=x(x({},t.props),t.state),r=t.state.currentSlide;r<t.state.slideCount+(0,s.getPostClones)(n);r++)if(t.state.lazyLoadedList.indexOf(r)<0){e.push(r);break}for(var i=t.state.currentSlide-1;i>=-(0,s.getPreClones)(n);i--)if(t.state.lazyLoadedList.indexOf(i)<0){e.push(i);break}e.length>0?(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e)):t.lazyLoadTimer&&(clearInterval(t.lazyLoadTimer),delete t.lazyLoadTimer)})),A(w(t),"slideHandler",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.props,i=r.asNavFor,o=r.beforeChange,a=r.onLazyLoad,l=r.speed,c=r.afterChange,u=t.state.currentSlide,d=(0,s.slideHandler)(x(x(x({index:e},t.props),t.state),{},{trackRef:t.track,useCSS:t.props.useCSS&&!n})),p=d.state,f=d.nextState;if(p){o&&o(u,p.currentSlide);var h=p.lazyLoadedList.filter((function(e){return t.state.lazyLoadedList.indexOf(e)<0}));a&&h.length>0&&a(h),!t.props.waitForAnimate&&t.animationEndCallback&&(clearTimeout(t.animationEndCallback),c&&c(u),delete t.animationEndCallback),t.setState(p,(function(){i&&t.asNavForIndex!==e&&(t.asNavForIndex=e,i.innerSlider.slideHandler(e)),f&&(t.animationEndCallback=setTimeout((function(){var e=f.animating,n=m(f,["animating"]);t.setState(n,(function(){t.callbackTimers.push(setTimeout((function(){return t.setState({animating:e})}),10)),c&&c(p.currentSlide),delete t.animationEndCallback}))}),l))}))}})),A(w(t),"changeSlide",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=x(x({},t.props),t.state),i=(0,s.changeSlide)(r,e);if((0===i||i)&&(!0===n?t.slideHandler(i,n):t.slideHandler(i),t.props.autoplay&&t.autoPlay("update"),t.props.focusOnSelect)){var o=t.list.querySelectorAll(".slick-current");o[0]&&o[0].focus()}})),A(w(t),"clickHandler",(function(e){!1===t.clickable&&(e.stopPropagation(),e.preventDefault()),t.clickable=!0})),A(w(t),"keyHandler",(function(e){var n=(0,s.keyHandler)(e,t.props.accessibility,t.props.rtl);""!==n&&t.changeSlide({message:n})})),A(w(t),"selectHandler",(function(e){t.changeSlide(e)})),A(w(t),"disableBodyScroll",(function(){window.ontouchmove=function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}})),A(w(t),"enableBodyScroll",(function(){window.ontouchmove=null})),A(w(t),"swipeStart",(function(e){t.props.verticalSwiping&&t.disableBodyScroll();var n=(0,s.swipeStart)(e,t.props.swipe,t.props.draggable);""!==n&&t.setState(n)})),A(w(t),"swipeMove",(function(e){var n=(0,s.swipeMove)(e,x(x(x({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));n&&(n.swiping&&(t.clickable=!1),t.setState(n))})),A(w(t),"swipeEnd",(function(e){var n=(0,s.swipeEnd)(e,x(x(x({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));if(n){var r=n.triggerSlideHandler;delete n.triggerSlideHandler,t.setState(n),void 0!==r&&(t.slideHandler(r),t.props.verticalSwiping&&t.enableBodyScroll())}})),A(w(t),"touchEnd",(function(e){t.swipeEnd(e),t.clickable=!0})),A(w(t),"slickPrev",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"previous"})}),0))})),A(w(t),"slickNext",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"next"})}),0))})),A(w(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=Number(e),isNaN(e))return"";t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"index",index:e,currentSlide:t.state.currentSlide},n)}),0))})),A(w(t),"play",(function(){var e;if(t.props.rtl)e=t.state.currentSlide-t.props.slidesToScroll;else{if(!(0,s.canGoNext)(x(x({},t.props),t.state)))return!1;e=t.state.currentSlide+t.props.slidesToScroll}t.slideHandler(e)})),A(w(t),"autoPlay",(function(e){t.autoplayTimer&&clearInterval(t.autoplayTimer);var n=t.state.autoplaying;if("update"===e){if("hovered"===n||"focused"===n||"paused"===n)return}else if("leave"===e){if("paused"===n||"focused"===n)return}else if("blur"===e&&("paused"===n||"hovered"===n))return;t.autoplayTimer=setInterval(t.play,t.props.autoplaySpeed+50),t.setState({autoplaying:"playing"})})),A(w(t),"pause",(function(e){t.autoplayTimer&&(clearInterval(t.autoplayTimer),t.autoplayTimer=null);var n=t.state.autoplaying;"paused"===e?t.setState({autoplaying:"paused"}):"focused"===e?"hovered"!==n&&"playing"!==n||t.setState({autoplaying:"focused"}):"playing"===n&&t.setState({autoplaying:"hovered"})})),A(w(t),"onDotsOver",(function(){return t.props.autoplay&&t.pause("hovered")})),A(w(t),"onDotsLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),A(w(t),"onTrackOver",(function(){return t.props.autoplay&&t.pause("hovered")})),A(w(t),"onTrackLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),A(w(t),"onSlideFocus",(function(){return t.props.autoplay&&t.pause("focused")})),A(w(t),"onSlideBlur",(function(){return t.props.autoplay&&"focused"===t.state.autoplaying&&t.autoPlay("blur")})),A(w(t),"render",(function(){var e,n,i,o=(0,a.default)("slick-slider",t.props.className,{"slick-vertical":t.props.vertical,"slick-initialized":!0}),d=x(x({},t.props),t.state),p=(0,s.extractObject)(d,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),f=t.props.pauseOnHover;if(p=x(x({},p),{},{onMouseEnter:f?t.onTrackOver:null,onMouseLeave:f?t.onTrackLeave:null,onMouseOver:f?t.onTrackOver:null,focusOnSelect:t.props.focusOnSelect&&t.clickable?t.selectHandler:null}),!0===t.props.dots&&t.state.slideCount>=t.props.slidesToShow){var m=(0,s.extractObject)(d,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=t.props.pauseOnDotsHover;m=x(x({},m),{},{clickHandler:t.changeSlide,onMouseEnter:g?t.onDotsLeave:null,onMouseOver:g?t.onDotsOver:null,onMouseLeave:g?t.onDotsLeave:null}),e=r.default.createElement(c.Dots,m)}var y=(0,s.extractObject)(d,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=t.changeSlide,t.props.arrows&&(n=r.default.createElement(u.PrevArrow,y),i=r.default.createElement(u.NextArrow,y));var v=null;t.props.vertical&&(v={height:t.state.listHeight});var b=null;!1===t.props.vertical?!0===t.props.centerMode&&(b={padding:"0px "+t.props.centerPadding}):!0===t.props.centerMode&&(b={padding:t.props.centerPadding+" 0px"});var w=x(x({},v),b),k=t.props.touchMove,S={className:"slick-list",style:w,onClick:t.clickHandler,onMouseDown:k?t.swipeStart:null,onMouseMove:t.state.dragging&&k?t.swipeMove:null,onMouseUp:k?t.swipeEnd:null,onMouseLeave:t.state.dragging&&k?t.swipeEnd:null,onTouchStart:k?t.swipeStart:null,onTouchMove:t.state.dragging&&k?t.swipeMove:null,onTouchEnd:k?t.touchEnd:null,onTouchCancel:t.state.dragging&&k?t.swipeEnd:null,onKeyDown:t.props.accessibility?t.keyHandler:null},A={className:o,dir:"ltr",style:t.props.style};return t.props.unslick&&(S={className:"slick-list"},A={className:o}),r.default.createElement("div",A,t.props.unslick?"":n,r.default.createElement("div",h({ref:t.listRefHandler},S),r.default.createElement(l.Track,h({ref:t.trackRefHandler},p),t.props.children)),t.props.unslick?"":i,t.props.unslick?"":e)})),t.list=null,t.track=null,t.state=x(x({},i.default),{},{currentSlide:t.props.initialSlide,targetSlide:t.props.initialSlide?t.props.initialSlide:0,slideCount:r.default.Children.count(t.props.children)}),t.callbackTimers=[],t.clickable=!0,t.debouncedResize=null;var n=t.ssrInit();return t.state=x(x({},t.state),n),t}return t=k,(n=[{key:"didPropsChange",value:function(e){for(var t=!1,n=0,i=Object.keys(this.props);n<i.length;n++){var o=i[n];if(!e.hasOwnProperty(o)){t=!0;break}if("object"!==f(e[o])&&"function"!==typeof e[o]&&!isNaN(e[o])&&e[o]!==this.props[o]){t=!0;break}}return t||r.default.Children.count(this.props.children)!==r.default.Children.count(e.children)}}])&&y(t.prototype,n),p&&y(t,p),Object.defineProperty(t,"prototype",{writable:!1}),k}(r.default.Component)},433:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(5043)),i=n(9826),o=l(n(1270)),a=l(n(5112)),s=n(1200);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function m(e){var t=x();return function(){var n,r=y(e);if(t){var i=y(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}(this,n)}}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function v(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==c(t)?t:String(t)}var w=(0,s.canUseDOM)()&&n(535);t.default=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(d,e);var t,n,l,c=m(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),v(g(t=c.call(this,e)),"innerSliderRefHandler",(function(e){return t.innerSlider=e})),v(g(t),"slickPrev",(function(){return t.innerSlider.slickPrev()})),v(g(t),"slickNext",(function(){return t.innerSlider.slickNext()})),v(g(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.innerSlider.slickGoTo(e,n)})),v(g(t),"slickPause",(function(){return t.innerSlider.pause("paused")})),v(g(t),"slickPlay",(function(){return t.innerSlider.autoPlay("play")})),t.state={breakpoint:null},t._responsiveMediaHandlers=[],t}return t=d,(n=[{key:"media",value:function(e,t){w.register(e,t),this._responsiveMediaHandlers.push({query:e,handler:t})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map((function(e){return e.breakpoint}));t.sort((function(e,t){return e-t})),t.forEach((function(n,r){var i;i=0===r?(0,o.default)({minWidth:0,maxWidth:n}):(0,o.default)({minWidth:t[r-1]+1,maxWidth:n}),(0,s.canUseDOM)()&&e.media(i,(function(){e.setState({breakpoint:n})}))}));var n=(0,o.default)({minWidth:t.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(n,(function(){e.setState({breakpoint:null})}))}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach((function(e){w.unregister(e.query,e.handler)}))}},{key:"render",value:function(){var e,t,n=this;(e=this.state.breakpoint?"unslick"===(t=this.props.responsive.filter((function(e){return e.breakpoint===n.state.breakpoint})))[0].settings?"unslick":p(p(p({},a.default),this.props),t[0].settings):p(p({},a.default),this.props)).centerMode&&(e.slidesToScroll,e.slidesToScroll=1),e.fade&&(e.slidesToShow,e.slidesToScroll,e.slidesToShow=1,e.slidesToScroll=1);var o=r.default.Children.toArray(this.props.children);o=o.filter((function(e){return"string"===typeof e?!!e.trim():!!e})),e.variableWidth&&(e.rows>1||e.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),e.variableWidth=!1);for(var l=[],c=null,d=0;d<o.length;d+=e.rows*e.slidesPerRow){for(var f=[],h=d;h<d+e.rows*e.slidesPerRow;h+=e.slidesPerRow){for(var m=[],g=h;g<h+e.slidesPerRow&&(e.variableWidth&&o[g].props.style&&(c=o[g].props.style.width),!(g>=o.length));g+=1)m.push(r.default.cloneElement(o[g],{key:100*d+10*h+g,tabIndex:-1,style:{width:"".concat(100/e.slidesPerRow,"%"),display:"inline-block"}}));f.push(r.default.createElement("div",{key:10*d+h},m))}e.variableWidth?l.push(r.default.createElement("div",{key:d,style:{width:c}},f)):l.push(r.default.createElement("div",{key:d},f))}if("unslick"===e){var x="regular slider "+(this.props.className||"");return r.default.createElement("div",{className:x},o)}return l.length<=e.slidesToShow&&!e.infinite&&(e.unslick=!0),r.default.createElement(i.InnerSlider,u({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(e)),l)}}])&&f(t.prototype,n),l&&f(t,l),Object.defineProperty(t,"prototype",{writable:!1}),d}(r.default.Component)},737:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Track=void 0;var r=a(n(5043)),i=a(n(8139)),o=n(1200);function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function d(e){var t=f();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,n)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==s(t)?t:String(t)}var v=function(e){var t,n,r,i,o;return r=(o=e.rtl?e.slideCount-1-e.index:e.index)<0||o>=e.slideCount,e.centerMode?(i=Math.floor(e.slidesToShow/2),n=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-i-1&&o<=e.currentSlide+i&&(t=!0)):t=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow,{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":r,"slick-current":o===(e.targetSlide<0?e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?e.targetSlide-e.slideCount:e.targetSlide)}},b=function(e,t){return e.key||t},w=function(e){var t,n=[],a=[],s=[],l=r.default.Children.count(e.children),c=(0,o.lazyStartIndex)(e),u=(0,o.lazyEndIndex)(e);return r.default.Children.forEach(e.children,(function(d,p){var f,h={message:"children",index:p,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};f=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(p)>=0?d:r.default.createElement("div",null);var m=function(e){var t={};return void 0!==e.variableWidth&&!1!==e.variableWidth||(t.width=e.slideWidth),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=e.currentSlide===e.index?1:0,t.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t}(g(g({},e),{},{index:p})),x=f.props.className||"",y=v(g(g({},e),{},{index:p}));if(n.push(r.default.cloneElement(f,{key:"original"+b(f,p),"data-index":p,className:(0,i.default)(y,x),tabIndex:"-1","aria-hidden":!y["slick-active"],style:g(g({outline:"none"},f.props.style||{}),m),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(h)}})),e.infinite&&!1===e.fade){var w=l-p;w<=(0,o.getPreClones)(e)&&((t=-w)>=c&&(f=d),y=v(g(g({},e),{},{index:t})),a.push(r.default.cloneElement(f,{key:"precloned"+b(f,t),"data-index":t,tabIndex:"-1",className:(0,i.default)(y,x),"aria-hidden":!y["slick-active"],style:g(g({},f.props.style||{}),m),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(h)}}))),(t=l+p)<u&&(f=d),y=v(g(g({},e),{},{index:t})),s.push(r.default.cloneElement(f,{key:"postcloned"+b(f,t),"data-index":t,tabIndex:"-1",className:(0,i.default)(y,x),"aria-hidden":!y["slick-active"],style:g(g({},f.props.style||{}),m),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(h)}}))}})),e.rtl?a.concat(n,s).reverse():a.concat(n,s)};t.Track=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(a,e);var t,n,i,o=d(a);function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(p(e=o.call.apply(o,[this].concat(n))),"node",null),x(p(e),"handleRef",(function(t){e.node=t})),e}return t=a,(n=[{key:"render",value:function(){var e=w(this.props),t=this.props,n={onMouseEnter:t.onMouseEnter,onMouseOver:t.onMouseOver,onMouseLeave:t.onMouseLeave};return r.default.createElement("div",l({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},n),e)}}])&&c(t.prototype,n),i&&c(t,i),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.default.PureComponent)},1200:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkSpecKeys=t.checkNavigable=t.changeSlide=t.canUseDOM=t.canGoNext=void 0,t.clamp=u,t.extractObject=void 0,t.filterSettings=function(e){return I.reduce((function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t}),{})},t.validSettings=t.swipeStart=t.swipeMove=t.swipeEnd=t.slidesOnRight=t.slidesOnLeft=t.slideHandler=t.siblingDirection=t.safePreventDefault=t.lazyStartIndex=t.lazySlidesOnRight=t.lazySlidesOnLeft=t.lazyEndIndex=t.keyHandler=t.initializedState=t.getWidth=t.getTrackLeft=t.getTrackCSS=t.getTrackAnimateCSS=t.getTotalSlides=t.getSwipeDirection=t.getSlideCount=t.getRequiredLazySlides=t.getPreClones=t.getPostClones=t.getOnDemandLazySlides=t.getNavigableIndexes=t.getHeight=void 0;var r=o(n(5043)),i=o(n(5112));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){return Math.max(t,Math.min(e,n))}var d=t.safePreventDefault=function(e){["onTouchStart","onTouchMove","onWheel"].includes(e._reactName)||e.preventDefault()},p=t.getOnDemandLazySlides=function(e){for(var t=[],n=f(e),r=h(e),i=n;i<r;i++)e.lazyLoadedList.indexOf(i)<0&&t.push(i);return t},f=(t.getRequiredLazySlides=function(e){for(var t=[],n=f(e),r=h(e),i=n;i<r;i++)t.push(i);return t},t.lazyStartIndex=function(e){return e.currentSlide-m(e)}),h=t.lazyEndIndex=function(e){return e.currentSlide+g(e)},m=t.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},g=t.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},x=t.getWidth=function(e){return e&&e.offsetWidth||0},y=t.getHeight=function(e){return e&&e.offsetHeight||0},v=t.getSwipeDirection=function(e){var t,n,r,i,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=e.startX-e.curX,n=e.startY-e.curY,r=Math.atan2(n,t),(i=Math.round(180*r/Math.PI))<0&&(i=360-Math.abs(i)),i<=45&&i>=0||i<=360&&i>=315?"left":i>=135&&i<=225?"right":!0===o?i>=35&&i<=135?"up":"down":"vertical"},b=t.canGoNext=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t},w=(t.extractObject=function(e,t){var n={};return t.forEach((function(t){return n[t]=e[t]})),n},t.initializedState=function(e){var t,n=r.default.Children.count(e.children),i=e.listRef,o=Math.ceil(x(i)),a=e.trackRef&&e.trackRef.node,s=Math.ceil(x(a));if(e.vertical)t=o;else{var c=e.centerMode&&2*parseInt(e.centerPadding);"string"===typeof e.centerPadding&&"%"===e.centerPadding.slice(-1)&&(c*=o/100),t=Math.ceil((o-c)/e.slidesToShow)}var u=i&&y(i.querySelector('[data-index="0"]')),d=u*e.slidesToShow,f=void 0===e.currentSlide?e.initialSlide:e.currentSlide;e.rtl&&void 0===e.currentSlide&&(f=n-1-e.initialSlide);var h=e.lazyLoadedList||[],m=p(l(l({},e),{},{currentSlide:f,lazyLoadedList:h})),g={slideCount:n,slideWidth:t,listWidth:o,trackWidth:s,currentSlide:f,slideHeight:u,listHeight:d,lazyLoadedList:h=h.concat(m)};return null===e.autoplaying&&e.autoplay&&(g.autoplaying="playing"),g},t.slideHandler=function(e){var t=e.waitForAnimate,n=e.animating,r=e.fade,i=e.infinite,o=e.index,a=e.slideCount,s=e.lazyLoad,c=e.currentSlide,d=e.centerMode,f=e.slidesToScroll,h=e.slidesToShow,m=e.useCSS,g=e.lazyLoadedList;if(t&&n)return{};var x,y,v,w=o,k={},S={},A=i?o:u(o,0,a-1);if(r){if(!i&&(o<0||o>=a))return{};o<0?w=o+a:o>=a&&(w=o-a),s&&g.indexOf(w)<0&&(g=g.concat(w)),k={animating:!0,currentSlide:w,lazyLoadedList:g,targetSlide:w},S={animating:!1,targetSlide:w}}else x=w,w<0?(x=w+a,i?a%f!==0&&(x=a-a%f):x=0):!b(e)&&w>c?w=x=c:d&&w>=a?(w=i?a:a-1,x=i?0:a-1):w>=a&&(x=w-a,i?a%f!==0&&(x=0):x=a-h),!i&&w+h>=a&&(x=a-h),y=E(l(l({},e),{},{slideIndex:w})),v=E(l(l({},e),{},{slideIndex:x})),i||(y===v&&(w=x),y=v),s&&(g=g.concat(p(l(l({},e),{},{currentSlide:w})))),m?(k={animating:!0,currentSlide:x,trackStyle:C(l(l({},e),{},{left:y})),lazyLoadedList:g,targetSlide:A},S={animating:!1,currentSlide:x,trackStyle:j(l(l({},e),{},{left:v})),swipeLeft:null,targetSlide:A}):k={currentSlide:x,trackStyle:j(l(l({},e),{},{left:v})),lazyLoadedList:g,targetSlide:A};return{state:k,nextState:S}},t.changeSlide=function(e,t){var n,r,i,o,a=e.slidesToScroll,s=e.slidesToShow,c=e.slideCount,u=e.currentSlide,d=e.targetSlide,p=e.lazyLoad,f=e.infinite;if(n=c%a!==0?0:(c-u)%a,"previous"===t.message)o=u-(i=0===n?a:s-n),p&&!f&&(o=-1===(r=u-i)?c-1:r),f||(o=d-a);else if("next"===t.message)o=u+(i=0===n?a:n),p&&!f&&(o=(u+a)%c+n),f||(o=d+a);else if("dots"===t.message)o=t.index*t.slidesToScroll;else if("children"===t.message){if(o=t.index,f){var h=T(l(l({},e),{},{targetSlide:o}));o>t.currentSlide&&"left"===h?o-=c:o<t.currentSlide&&"right"===h&&(o+=c)}}else"index"===t.message&&(o=Number(t.index));return o},t.keyHandler=function(e,t,n){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":37===e.keyCode?n?"next":"previous":39===e.keyCode?n?"previous":"next":""},t.swipeStart=function(e,t,n){return"IMG"===e.target.tagName&&d(e),!t||!n&&-1!==e.type.indexOf("mouse")?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}},t.swipeMove=function(e,t){var n=t.scrolling,r=t.animating,i=t.vertical,o=t.swipeToSlide,a=t.verticalSwiping,s=t.rtl,c=t.currentSlide,u=t.edgeFriction,p=t.edgeDragged,f=t.onEdge,h=t.swiped,m=t.swiping,g=t.slideCount,x=t.slidesToScroll,y=t.infinite,w=t.touchObject,k=t.swipeEvent,S=t.listHeight,A=t.listWidth;if(!n){if(r)return d(e);i&&o&&a&&d(e);var C,R={},O=E(t);w.curX=e.touches?e.touches[0].pageX:e.clientX,w.curY=e.touches?e.touches[0].pageY:e.clientY,w.swipeLength=Math.round(Math.sqrt(Math.pow(w.curX-w.startX,2)));var P=Math.round(Math.sqrt(Math.pow(w.curY-w.startY,2)));if(!a&&!m&&P>10)return{scrolling:!0};a&&(w.swipeLength=P);var T=(s?-1:1)*(w.curX>w.startX?1:-1);a&&(T=w.curY>w.startY?1:-1);var z=Math.ceil(g/x),M=v(t.touchObject,a),I=w.swipeLength;return y||(0===c&&("right"===M||"down"===M)||c+1>=z&&("left"===M||"up"===M)||!b(t)&&("left"===M||"up"===M))&&(I=w.swipeLength*u,!1===p&&f&&(f(M),R.edgeDragged=!0)),!h&&k&&(k(M),R.swiped=!0),C=i?O+I*(S/A)*T:s?O-I*T:O+I*T,a&&(C=O+I*T),R=l(l({},R),{},{touchObject:w,swipeLeft:C,trackStyle:j(l(l({},t),{},{left:C}))}),Math.abs(w.curX-w.startX)<.8*Math.abs(w.curY-w.startY)?R:(w.swipeLength>10&&(R.swiping=!0,d(e)),R)}},t.swipeEnd=function(e,t){var n=t.dragging,r=t.swipe,i=t.touchObject,o=t.listWidth,a=t.touchThreshold,s=t.verticalSwiping,c=t.listHeight,u=t.swipeToSlide,p=t.scrolling,f=t.onSwipe,h=t.targetSlide,m=t.currentSlide,g=t.infinite;if(!n)return r&&d(e),{};var x=s?c/a:o/a,y=v(i,s),b={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(p)return b;if(!i.swipeLength)return b;if(i.swipeLength>x){var w,A;d(e),f&&f(y);var j=g?m:h;switch(y){case"left":case"up":A=j+S(t),w=u?k(t,A):A,b.currentDirection=0;break;case"right":case"down":A=j-S(t),w=u?k(t,A):A,b.currentDirection=1;break;default:w=j}b.triggerSlideHandler=w}else{var R=E(t);b.trackStyle=C(l(l({},t),{},{left:R}))}return b},t.getNavigableIndexes=function(e){for(var t=e.infinite?2*e.slideCount:e.slideCount,n=e.infinite?-1*e.slidesToShow:0,r=e.infinite?-1*e.slidesToShow:0,i=[];n<t;)i.push(n),n=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return i}),k=t.checkNavigable=function(e,t){var n=w(e),r=0;if(t>n[n.length-1])t=n[n.length-1];else for(var i in n){if(t<n[i]){t=r;break}r=n[i]}return t},S=t.getSlideCount=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var n,r=e.listRef,i=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(i).every((function(r){if(e.vertical){if(r.offsetTop+y(r)/2>-1*e.swipeLeft)return n=r,!1}else if(r.offsetLeft-t+x(r)/2>-1*e.swipeLeft)return n=r,!1;return!0})),!n)return 0;var o=!0===e.rtl?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-o)||1}return e.slidesToScroll},A=t.checkSpecKeys=function(e,t){return t.reduce((function(t,n){return t&&e.hasOwnProperty(n)}),!0)?null:console.error("Keys Missing:",e)},j=t.getTrackCSS=function(e){var t,n;A(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var r=e.slideCount+2*e.slidesToShow;e.vertical?n=r*e.slideHeight:t=P(e)*e.slideWidth;var i={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";i=l(l({},i),{},{WebkitTransform:o,transform:a,msTransform:s})}else e.vertical?i.top=e.left:i.left=e.left;return e.fade&&(i={opacity:1}),t&&(i.width=t),n&&(i.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?i.marginTop=e.left+"px":i.marginLeft=e.left+"px"),i},C=t.getTrackAnimateCSS=function(e){A(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=j(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t},E=t.getTrackLeft=function(e){if(e.unslick)return 0;A(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t,n,r=e.slideIndex,i=e.trackRef,o=e.infinite,a=e.centerMode,s=e.slideCount,l=e.slidesToShow,c=e.slidesToScroll,u=e.slideWidth,d=e.listWidth,p=e.variableWidth,f=e.slideHeight,h=e.fade,m=e.vertical;if(h||1===e.slideCount)return 0;var g=0;if(o?(g=-R(e),s%c!==0&&r+c>s&&(g=-(r>s?l-(r-s):s%c)),a&&(g+=parseInt(l/2))):(s%c!==0&&r+c>s&&(g=l-s%c),a&&(g=parseInt(l/2))),t=m?r*f*-1+g*f:r*u*-1+g*u,!0===p){var x,y=i&&i.node;if(x=r+R(e),t=(n=y&&y.childNodes[x])?-1*n.offsetLeft:0,!0===a){x=o?r+R(e):r,n=y&&y.children[x],t=0;for(var v=0;v<x;v++)t-=y&&y.children[v]&&y.children[v].offsetWidth;t-=parseInt(e.centerPadding),t+=n&&(d-n.offsetWidth)/2}}return t},R=t.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},O=t.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},P=t.getTotalSlides=function(e){return 1===e.slideCount?1:R(e)+e.slideCount+O(e)},T=t.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+z(e)?"left":"right":e.targetSlide<e.currentSlide-M(e)?"right":"left"},z=t.slidesOnRight=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),r&&t%2===0&&(o+=1),o}return r?0:t-1},M=t.slidesOnLeft=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var o=(t-1)/2+1;return parseInt(i)>0&&(o+=1),r||t%2!==0||(o+=1),o}return r?t-1:0},I=(t.canUseDOM=function(){return!("undefined"===typeof window||!window.document||!window.document.createElement)},t.validSettings=Object.keys(i.default))},3557:(e,t,n)=>{"use strict";var r=n(5173),i=n(5043),o=n(2963);function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=a(r),l=a(i),c=a(o);function u(e){var t=e.isOpen,n=e.title,r=e.subtitle,o=e.onRequestClose,a=e.onAfterOpen,s=e.onAfterClose,u=e.children,p=e.className,f=e.overlayClassName,h=e.closeIcon,m=e.from,g=void 0===m?"right":m,x=e.width,y=e.shouldCloseOnEsc,v=e.hideHeader,b=void 0!==v&&v,w="slide-pane_from_".concat(g),k=function(e){var t=i.useRef(!0);i.useEffect((function(){return t.current=!0,function(){t.current=!1}}),[]);var n=i.useState(e),r=n[0],o=n[1];return[r,function(e){!0===t.current&&o(e)}]}(!1),S=k[0],A=k[1];return l.default.createElement(c.default,{ariaHideApp:!1,overlayClassName:{base:"slide-pane__overlay ".concat(f||""),afterOpen:S?"overlay-after-open":"",beforeClose:"overlay-before-close"},className:{base:"slide-pane ".concat(w," ").concat(p||""),afterOpen:S?"content-after-open":"",beforeClose:"content-before-close"},style:{content:{width:x||"80%"}},closeTimeoutMS:500,isOpen:null!==t&&void 0!==t&&t,shouldCloseOnEsc:y,onAfterOpen:function(){null===a||void 0===a||a(),setTimeout((function(){A(!0)}),0)},onAfterClose:function(){null===s||void 0===s||s(),setTimeout((function(){A(!1)}),0)},onRequestClose:o,contentLabel:'Modal "'.concat(n||"",'"')},!b&&l.default.createElement("div",{className:"slide-pane__header"},l.default.createElement("div",{className:"slide-pane__close",onClick:o,role:"button",tabIndex:0},h||l.default.createElement(d,null)),l.default.createElement("div",{className:"slide-pane__title-wrapper"},l.default.createElement("h2",{className:"slide-pane__title"},n),l.default.createElement("div",{className:"slide-pane__subtitle"},r))),l.default.createElement("div",{className:"slide-pane__content"},u))}function d(){return l.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 22"},l.default.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"}))}u.propTypes={isOpen:s.default.bool,title:s.default.node,subtitle:s.default.node,from:s.default.oneOf(["left","right","bottom"]),children:s.default.node.isRequired,className:s.default.string,overlayClassName:s.default.string,width:s.default.string,closeIcon:s.default.node,shouldCloseOnEsc:s.default.bool,hideHeader:s.default.bool,onRequestClose:s.default.func.isRequired,onAfterOpen:s.default.func,onAfterClose:s.default.func},t.Ay=u},3310:function(e,t,n){var r=n(4756);!function(e,t){"use strict";function n(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,l,"next",e)}function l(e){n(a,i,o,s,l,"throw",e)}s(void 0)}))}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function s(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var l={init:"init"},c=function(e){var t=e.value;return void 0===t?"":t},u=function(){return t.createElement(t.Fragment,null,"\xa0")},d={Cell:c,width:150,minWidth:0,maxWidth:Number.MAX_SAFE_INTEGER};function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){var n=t.style,r=t.className;return e=o({},e,{},a(t,["style","className"])),n&&(e.style=e.style?o({},e.style||{},{},n||{}):n),r&&(e.className=e.className?e.className+" "+r:r),""===e.className&&delete e.className,e}),{})}var f=function(e,t){return void 0===t&&(t={}),function(n){return void 0===n&&(n={}),[].concat(e,[n]).reduce((function(e,r){return function e(t,n,r){return"function"==typeof n?e({},n(t,r)):Array.isArray(n)?p.apply(void 0,[t].concat(n)):p(t,n)}(e,r,o({},t,{userProps:n}))}),{})}},h=function(e,t,n,r){return void 0===n&&(n={}),e.reduce((function(e,t){return t(e,n)}),t)},m=function(e,t,n){return void 0===n&&(n={}),e.forEach((function(e){e(t,n)}))};function g(e,t,n,r){e.findIndex((function(e){return e.pluginName===n})),t.forEach((function(t){e.findIndex((function(e){return e.pluginName===t}))}))}function x(e,t){return"function"==typeof e?e(t):e}function y(e){var n=t.useRef();return n.current=e,t.useCallback((function(){return n.current}),[])}var v="undefined"!=typeof document?t.useLayoutEffect:t.useEffect;function b(e,n){var r=t.useRef(!1);v((function(){r.current&&e(),r.current=!0}),n)}function w(e,t,n){return void 0===n&&(n={}),function(r,i){void 0===i&&(i={});var a="string"==typeof r?t[r]:r;if(void 0===a)throw console.info(t),new Error("Renderer Error \u261d\ufe0f");return k(a,o({},e,{column:t},n,{},i))}}function k(e,n){return function(e){return"function"==typeof e&&(t=Object.getPrototypeOf(e)).prototype&&t.prototype.isReactComponent;var t}(r=e)||"function"==typeof r||function(e){return"object"==typeof e&&"symbol"==typeof e.$$typeof&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}(r)?t.createElement(e,n):e;var r}function S(e,t,n){return void 0===n&&(n=0),e.map((function(e){return j(e=o({},e,{parent:t,depth:n})),e.columns&&(e.columns=S(e.columns,e,n+1)),e}))}function A(e){return T(e,"columns")}function j(e){var t=e.id,n=e.accessor,r=e.Header;if("string"==typeof n){t=t||n;var i=n.split(".");n=function(e){return function(e,t,n){if(!t)return e;var r,i="function"==typeof t?t:JSON.stringify(t),o=R.get(i)||function(){var e=function(e){return function e(t,n){if(void 0===n&&(n=[]),Array.isArray(t))for(var r=0;r<t.length;r+=1)e(t[r],n);else n.push(t);return n}(e).map((function(e){return String(e).replace(".","_")})).join(".").replace(N,".").replace(D,"").split(".")}(t);return R.set(i,e),e}();try{r=o.reduce((function(e,t){return e[t]}),e)}catch(e){}return void 0!==r?r:n}(e,i)}}if(!t&&"string"==typeof r&&r&&(t=r),!t&&e.columns)throw console.error(e),new Error('A column ID (or unique "Header" value) is required!');if(!t)throw console.error(e),new Error("A column ID (or string accessor) is required!");return Object.assign(e,{id:t,accessor:n}),e}function C(e,t){if(!t)throw new Error;return Object.assign(e,o({Header:u,Footer:u},d,{},t,{},e)),Object.assign(e,{originalWidth:e.width}),e}function E(e,t,n){void 0===n&&(n=function(){return{}});for(var r=[],i=e,a=0,s=function(){return a++},l=function(){var e={headers:[]},a=[],l=i.some((function(e){return e.parent}));i.forEach((function(r){var i,c=[].concat(a).reverse()[0];l&&(i=r.parent?o({},r.parent,{originalId:r.parent.id,id:r.parent.id+"_"+s(),headers:[r]},n(r)):C(o({originalId:r.id+"_placeholder",id:r.id+"_placeholder_"+s(),placeholderOf:r,headers:[r]},n(r)),t),c&&c.originalId===i.originalId?c.headers.push(r):a.push(i)),e.headers.push(r)})),r.push(e),i=a};i.length;)l();return r.reverse()}var R=new Map;function O(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=0;r<t.length;r+=1)if(void 0!==t[r])return t[r]}function P(e){if("function"==typeof e)return e}function T(e,t){var n=[];return function e(r){r.forEach((function(r){r[t]?e(r[t]):n.push(r)}))}(e),n}function z(e,t){var n=t.manualExpandedKey,r=t.expanded,i=t.expandSubRows,o=void 0===i||i,a=[];return e.forEach((function(e){return function e(t,i){void 0===i&&(i=!0),t.isExpanded=t.original&&t.original[n]||r[t.id],t.canExpand=t.subRows&&!!t.subRows.length,i&&a.push(t),t.subRows&&t.subRows.length&&t.isExpanded&&t.subRows.forEach((function(t){return e(t,o)}))}(e)})),a}function M(e,t,n){return P(e)||t[e]||n[e]||n.text}function I(e,t,n){return e?e(t,n):void 0===t}function L(){throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")}var F=null,N=/\[/g,D=/\]/g,B=function(e){return o({role:"table"},e)},_=function(e){return o({role:"rowgroup"},e)},H=function(e,t){var n=t.column;return o({key:"header_"+n.id,colSpan:n.totalVisibleHeaderCount,role:"columnheader"},e)},U=function(e,t){var n=t.column;return o({key:"footer_"+n.id,colSpan:n.totalVisibleHeaderCount},e)},W=function(e,t){return o({key:"headerGroup_"+t.index,role:"row"},e)},q=function(e,t){return o({key:"footerGroup_"+t.index},e)},G=function(e,t){return o({key:"row_"+t.row.id,role:"row"},e)},V=function(e,t){var n=t.cell;return o({key:"cell_"+n.row.id+"_"+n.column.id,role:"cell"},e)};function K(){return{useOptions:[],stateReducers:[],useControlledState:[],columns:[],columnsDeps:[],allColumns:[],allColumnsDeps:[],accessValue:[],materializedColumns:[],materializedColumnsDeps:[],useInstanceAfterData:[],visibleColumns:[],visibleColumnsDeps:[],headerGroups:[],headerGroupsDeps:[],useInstanceBeforeDimensions:[],useInstance:[],prepareRow:[],getTableProps:[B],getTableBodyProps:[_],getHeaderGroupProps:[W],getFooterGroupProps:[q],getHeaderProps:[H],getFooterProps:[U],getRowProps:[G],getCellProps:[V],useFinalInstance:[]}}l.resetHiddenColumns="resetHiddenColumns",l.toggleHideColumn="toggleHideColumn",l.setHiddenColumns="setHiddenColumns",l.toggleHideAllColumns="toggleHideAllColumns";var J=function(e){e.getToggleHiddenProps=[Q],e.getToggleHideAllColumnsProps=[Y],e.stateReducers.push(Z),e.useInstanceBeforeDimensions.push(X),e.headerGroupsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.hiddenColumns])})),e.useInstance.push($)};J.pluginName="useColumnVisibility";var Q=function(e,t){var n=t.column;return[e,{onChange:function(e){n.toggleHidden(!e.target.checked)},style:{cursor:"pointer"},checked:n.isVisible,title:"Toggle Column Visible"}]},Y=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleHideAllColumns(!e.target.checked)},style:{cursor:"pointer"},checked:!n.allColumnsHidden&&!n.state.hiddenColumns.length,title:"Toggle All Columns Hidden",indeterminate:!n.allColumnsHidden&&n.state.hiddenColumns.length}]};function Z(e,t,n,r){if(t.type===l.init)return o({hiddenColumns:[]},e);if(t.type===l.resetHiddenColumns)return o({},e,{hiddenColumns:r.initialState.hiddenColumns||[]});if(t.type===l.toggleHideColumn){var i=(void 0!==t.value?t.value:!e.hiddenColumns.includes(t.columnId))?[].concat(e.hiddenColumns,[t.columnId]):e.hiddenColumns.filter((function(e){return e!==t.columnId}));return o({},e,{hiddenColumns:i})}return t.type===l.setHiddenColumns?o({},e,{hiddenColumns:x(t.value,e.hiddenColumns)}):t.type===l.toggleHideAllColumns?o({},e,{hiddenColumns:(void 0!==t.value?t.value:!e.hiddenColumns.length)?r.allColumns.map((function(e){return e.id})):[]}):void 0}function X(e){var n=e.headers,r=e.state.hiddenColumns;t.useRef(!1).current;var i=0;n.forEach((function(e){return i+=function e(t,n){t.isVisible=n&&!r.includes(t.id);var i=0;return t.headers&&t.headers.length?t.headers.forEach((function(n){return i+=e(n,t.isVisible)})):i=t.isVisible?1:0,t.totalVisibleHeaderCount=i,i}(e,!0)}))}function $(e){var n=e.columns,r=e.flatHeaders,i=e.dispatch,o=e.allColumns,a=e.getHooks,s=e.state.hiddenColumns,c=e.autoResetHiddenColumns,u=void 0===c||c,d=y(e),p=o.length===s.length,h=t.useCallback((function(e,t){return i({type:l.toggleHideColumn,columnId:e,value:t})}),[i]),m=t.useCallback((function(e){return i({type:l.setHiddenColumns,value:e})}),[i]),g=t.useCallback((function(e){return i({type:l.toggleHideAllColumns,value:e})}),[i]),x=f(a().getToggleHideAllColumnsProps,{instance:d()});r.forEach((function(e){e.toggleHidden=function(t){i({type:l.toggleHideColumn,columnId:e.id,value:t})},e.getToggleHiddenProps=f(a().getToggleHiddenProps,{instance:d(),column:e})}));var v=y(u);b((function(){v()&&i({type:l.resetHiddenColumns})}),[i,n]),Object.assign(e,{allColumnsHidden:p,toggleHideColumn:h,setHiddenColumns:m,toggleHideAllColumns:g,getToggleHideAllColumnsProps:x})}var ee={},te={},ne=function(e,t,n){return e},re=function(e,t){return e.subRows||[]},ie=function(e,t,n){return""+(n?[n.id,t].join("."):t)},oe=function(e){return e};function ae(e){var t=e.initialState,n=void 0===t?ee:t,r=e.defaultColumn,i=void 0===r?te:r,s=e.getSubRows,l=void 0===s?re:s,c=e.getRowId,u=void 0===c?ie:c,d=e.stateReducer,p=void 0===d?ne:d,f=e.useControlledState,h=void 0===f?oe:f;return o({},a(e,["initialState","defaultColumn","getSubRows","getRowId","stateReducer","useControlledState"]),{initialState:n,defaultColumn:i,getSubRows:l,getRowId:u,stateReducer:p,useControlledState:h})}function se(e,t){void 0===t&&(t=0);var n=0,r=0,i=0,o=0;return e.forEach((function(e){var a=e.headers;if(e.totalLeft=t,a&&a.length){var s=se(a,t),l=s[0],c=s[1],u=s[2],d=s[3];e.totalMinWidth=l,e.totalWidth=c,e.totalMaxWidth=u,e.totalFlexWidth=d}else e.totalMinWidth=e.minWidth,e.totalWidth=Math.min(Math.max(e.minWidth,e.width),e.maxWidth),e.totalMaxWidth=e.maxWidth,e.totalFlexWidth=e.canResize?e.totalWidth:0;e.isVisible&&(t+=e.totalWidth,n+=e.totalMinWidth,r+=e.totalWidth,i+=e.totalMaxWidth,o+=e.totalFlexWidth)})),[n,r,i,o]}function le(e){var t=e.data,n=e.rows,r=e.flatRows,i=e.rowsById,o=e.column,a=e.getRowId,s=e.getSubRows,l=e.accessValueHooks,c=e.getInstance;t.forEach((function(e,u){return function e(n,u,d,p,f){void 0===d&&(d=0);var m=n,g=a(n,u,p),x=i[g];if(x)x.subRows&&x.originalSubRows.forEach((function(t,n){return e(t,n,d+1,x)}));else if((x={id:g,original:m,index:u,depth:d,cells:[{}]}).cells.map=L,x.cells.filter=L,x.cells.forEach=L,x.cells[0].getCellProps=L,x.values={},f.push(x),r.push(x),i[g]=x,x.originalSubRows=s(n,u),x.originalSubRows){var y=[];x.originalSubRows.forEach((function(t,n){return e(t,n,d+1,x,y)})),x.subRows=y}o.accessor&&(x.values[o.id]=o.accessor(n,u,x,f,t)),x.values[o.id]=h(l,x.values[o.id],{row:x,column:o,instance:c()})}(e,u,0,void 0,n)}))}l.resetExpanded="resetExpanded",l.toggleRowExpanded="toggleRowExpanded",l.toggleAllRowsExpanded="toggleAllRowsExpanded";var ce=function(e){e.getToggleAllRowsExpandedProps=[ue],e.getToggleRowExpandedProps=[de],e.stateReducers.push(pe),e.useInstance.push(fe),e.prepareRow.push(he)};ce.pluginName="useExpanded";var ue=function(e,t){var n=t.instance;return[e,{onClick:function(e){n.toggleAllRowsExpanded()},style:{cursor:"pointer"},title:"Toggle All Rows Expanded"}]},de=function(e,t){var n=t.row;return[e,{onClick:function(){n.toggleRowExpanded()},style:{cursor:"pointer"},title:"Toggle Row Expanded"}]};function pe(e,t,n,r){if(t.type===l.init)return o({expanded:{}},e);if(t.type===l.resetExpanded)return o({},e,{expanded:r.initialState.expanded||{}});if(t.type===l.toggleAllRowsExpanded){var i=t.value,c=r.rowsById,u=Object.keys(c).length===Object.keys(e.expanded).length;if(void 0!==i?i:!u){var d={};return Object.keys(c).forEach((function(e){d[e]=!0})),o({},e,{expanded:d})}return o({},e,{expanded:{}})}if(t.type===l.toggleRowExpanded){var p,f=t.id,h=t.value,m=e.expanded[f],g=void 0!==h?h:!m;if(!m&&g)return o({},e,{expanded:o({},e.expanded,(p={},p[f]=!0,p))});if(m&&!g){var x=e.expanded;return x[f],o({},e,{expanded:a(x,[f].map(s))})}return e}}function fe(e){var n=e.data,r=e.rows,i=e.rowsById,o=e.manualExpandedKey,a=void 0===o?"expanded":o,s=e.paginateExpandedRows,c=void 0===s||s,u=e.expandSubRows,d=void 0===u||u,p=e.autoResetExpanded,h=void 0===p||p,m=e.getHooks,x=e.plugins,v=e.state.expanded,w=e.dispatch;g(x,["useSortBy","useGroupBy","usePivotColumns","useGlobalFilter"],"useExpanded");var k=y(h),S=Boolean(Object.keys(i).length&&Object.keys(v).length);S&&Object.keys(i).some((function(e){return!v[e]}))&&(S=!1),b((function(){k()&&w({type:l.resetExpanded})}),[w,n]);var A=t.useCallback((function(e,t){w({type:l.toggleRowExpanded,id:e,value:t})}),[w]),j=t.useCallback((function(e){return w({type:l.toggleAllRowsExpanded,value:e})}),[w]),C=t.useMemo((function(){return c?z(r,{manualExpandedKey:a,expanded:v,expandSubRows:d}):r}),[c,r,a,v,d]),E=t.useMemo((function(){return function(e){var t=0;return Object.keys(e).forEach((function(e){var n=e.split(".");t=Math.max(t,n.length)})),t}(v)}),[v]),R=y(e),O=f(m().getToggleAllRowsExpandedProps,{instance:R()});Object.assign(e,{preExpandedRows:r,expandedRows:C,rows:C,expandedDepth:E,isAllRowsExpanded:S,toggleRowExpanded:A,toggleAllRowsExpanded:j,getToggleAllRowsExpandedProps:O})}function he(e,t){var n=t.instance.getHooks,r=t.instance;e.toggleRowExpanded=function(t){return r.toggleRowExpanded(e.id,t)},e.getToggleRowExpandedProps=f(n().getToggleRowExpandedProps,{instance:r,row:e})}var me=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return String(r).toLowerCase().includes(String(n).toLowerCase())}))}))};me.autoRemove=function(e){return!e};var ge=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return void 0===r||String(r).toLowerCase()===String(n).toLowerCase()}))}))};ge.autoRemove=function(e){return!e};var xe=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return void 0===r||String(r)===String(n)}))}))};xe.autoRemove=function(e){return!e};var ye=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t].includes(n)}))}))};ye.autoRemove=function(e){return!e||!e.length};var ve=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r&&r.length&&n.every((function(e){return r.includes(e)}))}))}))};ve.autoRemove=function(e){return!e||!e.length};var be=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r&&r.length&&n.some((function(e){return r.includes(e)}))}))}))};be.autoRemove=function(e){return!e||!e.length};var we=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return n.includes(r)}))}))};we.autoRemove=function(e){return!e||!e.length};var ke=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]===n}))}))};ke.autoRemove=function(e){return void 0===e};var Se=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]==n}))}))};Se.autoRemove=function(e){return null==e};var Ae=function(e,t,n){var r=n||[],i=r[0],o=r[1];if((i="number"==typeof i?i:-1/0)>(o="number"==typeof o?o:1/0)){var a=i;i=o,o=a}return e.filter((function(e){return t.some((function(t){var n=e.values[t];return n>=i&&n<=o}))}))};Ae.autoRemove=function(e){return!e||"number"!=typeof e[0]&&"number"!=typeof e[1]};var je=Object.freeze({__proto__:null,text:me,exactText:ge,exactTextCase:xe,includes:ye,includesAll:ve,includesSome:be,includesValue:we,exact:ke,equals:Se,between:Ae});l.resetFilters="resetFilters",l.setFilter="setFilter",l.setAllFilters="setAllFilters";var Ce=function(e){e.stateReducers.push(Ee),e.useInstance.push(Re)};function Ee(e,t,n,r){if(t.type===l.init)return o({filters:[]},e);if(t.type===l.resetFilters)return o({},e,{filters:r.initialState.filters||[]});if(t.type===l.setFilter){var i=t.columnId,a=t.filterValue,s=r.allColumns,c=r.filterTypes,u=s.find((function(e){return e.id===i}));if(!u)throw new Error("React-Table: Could not find a column with id: "+i);var d=M(u.filter,c||{},je),p=e.filters.find((function(e){return e.id===i})),f=x(a,p&&p.value);return I(d.autoRemove,f,u)?o({},e,{filters:e.filters.filter((function(e){return e.id!==i}))}):o({},e,p?{filters:e.filters.map((function(e){return e.id===i?{id:i,value:f}:e}))}:{filters:[].concat(e.filters,[{id:i,value:f}])})}if(t.type===l.setAllFilters){var h=t.filters,m=r.allColumns,g=r.filterTypes;return o({},e,{filters:x(h,e.filters).filter((function(e){var t=m.find((function(t){return t.id===e.id}));return!I(M(t.filter,g||{},je).autoRemove,e.value,t)}))})}}function Re(e){var n=e.data,r=e.rows,i=e.flatRows,o=e.rowsById,a=e.allColumns,s=e.filterTypes,c=e.manualFilters,u=e.defaultCanFilter,d=void 0!==u&&u,p=e.disableFilters,f=e.state.filters,h=e.dispatch,m=e.autoResetFilters,g=void 0===m||m,x=t.useCallback((function(e,t){h({type:l.setFilter,columnId:e,filterValue:t})}),[h]),v=t.useCallback((function(e){h({type:l.setAllFilters,filters:e})}),[h]);a.forEach((function(e){var t=e.id,n=e.accessor,r=e.defaultCanFilter,i=e.disableFilters;e.canFilter=n?O(!0!==i&&void 0,!0!==p&&void 0,!0):O(r,d,!1),e.setFilter=function(t){return x(e.id,t)};var o=f.find((function(e){return e.id===t}));e.filterValue=o&&o.value}));var w=t.useMemo((function(){if(c||!f.length)return[r,i,o];var e=[],t={};return[function n(r,i){void 0===i&&(i=0);var o=r;return(o=f.reduce((function(e,t){var n=t.id,r=t.value,o=a.find((function(e){return e.id===n}));if(!o)return e;0===i&&(o.preFilteredRows=e);var l=M(o.filter,s||{},je);return l?(o.filteredRows=l(e,[n],r),o.filteredRows):(console.warn("Could not find a valid 'column.filter' for column with the ID: "+o.id+"."),e)}),r)).forEach((function(r){e.push(r),t[r.id]=r,r.subRows&&(r.subRows=r.subRows&&r.subRows.length>0?n(r.subRows,i+1):r.subRows)})),o}(r),e,t]}),[c,f,r,i,o,a,s]),k=w[0],S=w[1],A=w[2];t.useMemo((function(){a.filter((function(e){return!f.find((function(t){return t.id===e.id}))})).forEach((function(e){e.preFilteredRows=k,e.filteredRows=k}))}),[k,f,a]);var j=y(g);b((function(){j()&&h({type:l.resetFilters})}),[h,c?null:n]),Object.assign(e,{preFilteredRows:r,preFilteredFlatRows:i,preFilteredRowsById:o,filteredRows:k,filteredFlatRows:S,filteredRowsById:A,rows:k,flatRows:S,rowsById:A,setFilter:x,setAllFilters:v})}Ce.pluginName="useFilters",l.resetGlobalFilter="resetGlobalFilter",l.setGlobalFilter="setGlobalFilter";var Oe=function(e){e.stateReducers.push(Pe),e.useInstance.push(Te)};function Pe(e,t,n,r){if(t.type===l.resetGlobalFilter)return o({},e,{globalFilter:r.initialState.globalFilter||void 0});if(t.type===l.setGlobalFilter){var i=t.filterValue,s=r.userFilterTypes,c=M(r.globalFilter,s||{},je),u=x(i,e.globalFilter);return I(c.autoRemove,u)?(e.globalFilter,a(e,["globalFilter"])):o({},e,{globalFilter:u})}}function Te(e){var n=e.data,r=e.rows,i=e.flatRows,o=e.rowsById,a=e.allColumns,s=e.filterTypes,c=e.globalFilter,u=e.manualGlobalFilter,d=e.state.globalFilter,p=e.dispatch,f=e.autoResetGlobalFilter,h=void 0===f||f,m=e.disableGlobalFilter,g=t.useCallback((function(e){p({type:l.setGlobalFilter,filterValue:e})}),[p]),x=t.useMemo((function(){if(u||void 0===d)return[r,i,o];var e=[],t={},n=M(c,s||{},je);if(!n)return console.warn("Could not find a valid 'globalFilter' option."),r;a.forEach((function(e){var t=e.disableGlobalFilter;e.canFilter=O(!0!==t&&void 0,!0!==m&&void 0,!0)}));var l=a.filter((function(e){return!0===e.canFilter}));return[function r(i){return(i=n(i,l.map((function(e){return e.id})),d)).forEach((function(n){e.push(n),t[n.id]=n,n.subRows=n.subRows&&n.subRows.length?r(n.subRows):n.subRows})),i}(r),e,t]}),[u,d,c,s,a,r,i,o,m]),v=x[0],w=x[1],k=x[2],S=y(h);b((function(){S()&&p({type:l.resetGlobalFilter})}),[p,u?null:n]),Object.assign(e,{preGlobalFilteredRows:r,preGlobalFilteredFlatRows:i,preGlobalFilteredRowsById:o,globalFilteredRows:v,globalFilteredFlatRows:w,globalFilteredRowsById:k,rows:v,flatRows:w,rowsById:k,setGlobalFilter:g,disableGlobalFilter:m})}function ze(e,t){return t.reduce((function(e,t){return e+("number"==typeof t?t:0)}),0)}Oe.pluginName="useGlobalFilter";var Me=Object.freeze({__proto__:null,sum:ze,min:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e))})),t},max:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.max(t,e))})),t},minMax:function(e){var t=e[0]||0,n=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e),n=Math.max(n,e))})),t+".."+n},average:function(e){return ze(0,e)/e.length},median:function(e){if(!e.length)return null;var t=Math.floor(e.length/2),n=[].concat(e).sort((function(e,t){return e-t}));return e.length%2!=0?n[t]:(n[t-1]+n[t])/2},unique:function(e){return Array.from(new Set(e).values())},uniqueCount:function(e){return new Set(e).size},count:function(e){return e.length}}),Ie=[],Le={};l.resetGroupBy="resetGroupBy",l.setGroupBy="setGroupBy",l.toggleGroupBy="toggleGroupBy";var Fe=function(e){e.getGroupByToggleProps=[Ne],e.stateReducers.push(De),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.groupBy])})),e.visibleColumns.push(Be),e.useInstance.push(He),e.prepareRow.push(Ue)};Fe.pluginName="useGroupBy";var Ne=function(e,t){var n=t.header;return[e,{onClick:n.canGroupBy?function(e){e.persist(),n.toggleGroupBy()}:void 0,style:{cursor:n.canGroupBy?"pointer":void 0},title:"Toggle GroupBy"}]};function De(e,t,n,r){if(t.type===l.init)return o({groupBy:[]},e);if(t.type===l.resetGroupBy)return o({},e,{groupBy:r.initialState.groupBy||[]});if(t.type===l.setGroupBy)return o({},e,{groupBy:t.value});if(t.type===l.toggleGroupBy){var i=t.columnId,a=t.value,s=void 0!==a?a:!e.groupBy.includes(i);return o({},e,s?{groupBy:[].concat(e.groupBy,[i])}:{groupBy:e.groupBy.filter((function(e){return e!==i}))})}}function Be(e,t){var n=t.instance.state.groupBy,r=n.map((function(t){return e.find((function(e){return e.id===t}))})).filter(Boolean),i=e.filter((function(e){return!n.includes(e.id)}));return(e=[].concat(r,i)).forEach((function(e){e.isGrouped=n.includes(e.id),e.groupedIndex=n.indexOf(e.id)})),e}var _e={};function He(e){var n=e.data,r=e.rows,i=e.flatRows,a=e.rowsById,s=e.allColumns,c=e.flatHeaders,u=e.groupByFn,d=void 0===u?We:u,p=e.manualGroupBy,h=e.aggregations,m=void 0===h?_e:h,x=e.plugins,v=e.state.groupBy,w=e.dispatch,k=e.autoResetGroupBy,S=void 0===k||k,A=e.disableGroupBy,j=e.defaultCanGroupBy,C=e.getHooks;g(x,["useColumnOrder","useFilters"],"useGroupBy");var E=y(e);s.forEach((function(t){var n=t.accessor,r=t.defaultGroupBy,i=t.disableGroupBy;t.canGroupBy=n?O(t.canGroupBy,!0!==i&&void 0,!0!==A&&void 0,!0):O(t.canGroupBy,r,j,!1),t.canGroupBy&&(t.toggleGroupBy=function(){return e.toggleGroupBy(t.id)}),t.Aggregated=t.Aggregated||t.Cell}));var R=t.useCallback((function(e,t){w({type:l.toggleGroupBy,columnId:e,value:t})}),[w]),P=t.useCallback((function(e){w({type:l.setGroupBy,value:e})}),[w]);c.forEach((function(e){e.getGroupByToggleProps=f(C().getGroupByToggleProps,{instance:E(),header:e})}));var z=t.useMemo((function(){if(p||!v.length)return[r,i,a,Ie,Le,i,a];var e=v.filter((function(e){return s.find((function(t){return t.id===e}))})),t=[],n={},l=[],c={},u=[],f={},h=function r(i,a,p){if(void 0===a&&(a=0),a===e.length)return i.map((function(e){return o({},e,{depth:a})}));var h=e[a],g=d(i,h);return Object.entries(g).map((function(i,o){var d=i[0],g=i[1],x=h+":"+d,y=r(g,a+1,x=p?p+">"+x:x),v=a?T(g,"leafRows"):g,b=function(t,n,r){var i={};return s.forEach((function(o){if(e.includes(o.id))i[o.id]=n[0]?n[0].values[o.id]:null;else{var a="function"==typeof o.aggregate?o.aggregate:m[o.aggregate]||Me[o.aggregate];if(a){var s=n.map((function(e){return e.values[o.id]})),l=t.map((function(e){var t=e.values[o.id];if(!r&&o.aggregateValue){var n="function"==typeof o.aggregateValue?o.aggregateValue:m[o.aggregateValue]||Me[o.aggregateValue];if(!n)throw console.info({column:o}),new Error("React Table: Invalid column.aggregateValue option for column listed above");t=n(t,e,o)}return t}));i[o.id]=a(l,s)}else{if(o.aggregate)throw console.info({column:o}),new Error("React Table: Invalid column.aggregate option for column listed above");i[o.id]=null}}})),i}(v,g,a),w={id:x,isGrouped:!0,groupByID:h,groupByVal:d,values:b,subRows:y,leafRows:v,depth:a,index:o};return y.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(l.push(e),c[e.id]=e):(u.push(e),f[e.id]=e)})),w}))}(r);return h.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(l.push(e),c[e.id]=e):(u.push(e),f[e.id]=e)})),[h,t,n,l,c,u,f]}),[p,v,r,i,a,s,m,d]),M=z[0],I=z[1],L=z[2],F=z[3],N=z[4],D=z[5],B=z[6],_=y(S);b((function(){_()&&w({type:l.resetGroupBy})}),[w,p?null:n]),Object.assign(e,{preGroupedRows:r,preGroupedFlatRow:i,preGroupedRowsById:a,groupedRows:M,groupedFlatRows:I,groupedRowsById:L,onlyGroupedFlatRows:F,onlyGroupedRowsById:N,nonGroupedFlatRows:D,nonGroupedRowsById:B,rows:M,flatRows:I,rowsById:L,toggleGroupBy:R,setGroupBy:P})}function Ue(e){e.allCells.forEach((function(t){var n;t.isGrouped=t.column.isGrouped&&t.column.id===e.groupByID,t.isPlaceholder=!t.isGrouped&&t.column.isGrouped,t.isAggregated=!t.isGrouped&&!t.isPlaceholder&&(null==(n=e.subRows)?void 0:n.length)}))}function We(e,t){return e.reduce((function(e,n,r){var i=""+n.values[t];return e[i]=Array.isArray(e[i])?e[i]:[],e[i].push(n),e}),{})}var qe=/([0-9]+)/gm;function Ge(e,t){return e===t?0:e>t?1:-1}function Ve(e,t,n){return[e.values[n],t.values[n]]}function Ke(e){return"number"==typeof e?isNaN(e)||e===1/0||e===-1/0?"":String(e):"string"==typeof e?e:""}var Je=Object.freeze({__proto__:null,alphanumeric:function(e,t,n){var r=Ve(e,t,n),i=r[0],o=r[1];for(i=Ke(i),o=Ke(o),i=i.split(qe).filter(Boolean),o=o.split(qe).filter(Boolean);i.length&&o.length;){var a=i.shift(),s=o.shift(),l=parseInt(a,10),c=parseInt(s,10),u=[l,c].sort();if(isNaN(u[0])){if(a>s)return 1;if(s>a)return-1}else{if(isNaN(u[1]))return isNaN(l)?-1:1;if(l>c)return 1;if(c>l)return-1}}return i.length-o.length},datetime:function(e,t,n){var r=Ve(e,t,n),i=r[0],o=r[1];return Ge(i=i.getTime(),o=o.getTime())},basic:function(e,t,n){var r=Ve(e,t,n);return Ge(r[0],r[1])},string:function(e,t,n){var r=Ve(e,t,n),i=r[0],o=r[1];for(i=i.split("").filter(Boolean),o=o.split("").filter(Boolean);i.length&&o.length;){var a=i.shift(),s=o.shift(),l=a.toLowerCase(),c=s.toLowerCase();if(l>c)return 1;if(c>l)return-1;if(a>s)return 1;if(s>a)return-1}return i.length-o.length},number:function(e,t,n){var r=Ve(e,t,n),i=r[0],o=r[1],a=/[^0-9.]/gi;return Ge(i=Number(String(i).replace(a,"")),o=Number(String(o).replace(a,"")))}});l.resetSortBy="resetSortBy",l.setSortBy="setSortBy",l.toggleSortBy="toggleSortBy",l.clearSortBy="clearSortBy",d.sortType="alphanumeric",d.sortDescFirst=!1;var Qe=function(e){e.getSortByToggleProps=[Ye],e.stateReducers.push(Ze),e.useInstance.push(Xe)};Qe.pluginName="useSortBy";var Ye=function(e,t){var n=t.instance,r=t.column,i=n.isMultiSortEvent,o=void 0===i?function(e){return e.shiftKey}:i;return[e,{onClick:r.canSort?function(e){e.persist(),r.toggleSortBy(void 0,!n.disableMultiSort&&o(e))}:void 0,style:{cursor:r.canSort?"pointer":void 0},title:r.canSort?"Toggle SortBy":void 0}]};function Ze(e,t,n,r){if(t.type===l.init)return o({sortBy:[]},e);if(t.type===l.resetSortBy)return o({},e,{sortBy:r.initialState.sortBy||[]});if(t.type===l.clearSortBy)return o({},e,{sortBy:e.sortBy.filter((function(e){return e.id!==t.columnId}))});if(t.type===l.setSortBy)return o({},e,{sortBy:t.sortBy});if(t.type===l.toggleSortBy){var i,a=t.columnId,s=t.desc,c=t.multi,u=r.allColumns,d=r.disableMultiSort,p=r.disableSortRemove,f=r.disableMultiRemove,h=r.maxMultiSortColCount,m=void 0===h?Number.MAX_SAFE_INTEGER:h,g=e.sortBy,x=u.find((function(e){return e.id===a})).sortDescFirst,y=g.find((function(e){return e.id===a})),v=g.findIndex((function(e){return e.id===a})),b=null!=s,w=[];return"toggle"!==(i=!d&&c?y?"toggle":"add":v!==g.length-1||1!==g.length?"replace":y?"toggle":"replace")||p||b||c&&f||!(y&&y.desc&&!x||!y.desc&&x)||(i="remove"),"replace"===i?w=[{id:a,desc:b?s:x}]:"add"===i?(w=[].concat(g,[{id:a,desc:b?s:x}])).splice(0,w.length-m):"toggle"===i?w=g.map((function(e){return e.id===a?o({},e,{desc:b?s:!y.desc}):e})):"remove"===i&&(w=g.filter((function(e){return e.id!==a}))),o({},e,{sortBy:w})}}function Xe(e){var n=e.data,r=e.rows,i=e.flatRows,o=e.allColumns,a=e.orderByFn,s=void 0===a?$e:a,c=e.sortTypes,u=e.manualSortBy,d=e.defaultCanSort,p=e.disableSortBy,h=e.flatHeaders,m=e.state.sortBy,x=e.dispatch,v=e.plugins,w=e.getHooks,k=e.autoResetSortBy,S=void 0===k||k;g(v,["useFilters","useGlobalFilter","useGroupBy","usePivotColumns"],"useSortBy");var A=t.useCallback((function(e){x({type:l.setSortBy,sortBy:e})}),[x]),j=t.useCallback((function(e,t,n){x({type:l.toggleSortBy,columnId:e,desc:t,multi:n})}),[x]),C=y(e);h.forEach((function(e){var t=e.accessor,n=e.canSort,r=e.disableSortBy,i=e.id,o=t?O(!0!==r&&void 0,!0!==p&&void 0,!0):O(d,n,!1);e.canSort=o,e.canSort&&(e.toggleSortBy=function(t,n){return j(e.id,t,n)},e.clearSortBy=function(){x({type:l.clearSortBy,columnId:e.id})}),e.getSortByToggleProps=f(w().getSortByToggleProps,{instance:C(),column:e});var a=m.find((function(e){return e.id===i}));e.isSorted=!!a,e.sortedIndex=m.findIndex((function(e){return e.id===i})),e.isSortedDesc=e.isSorted?a.desc:void 0}));var E=t.useMemo((function(){if(u||!m.length)return[r,i];var e=[],t=m.filter((function(e){return o.find((function(t){return t.id===e.id}))}));return[function n(r){var i=s(r,t.map((function(e){var t=o.find((function(t){return t.id===e.id}));if(!t)throw new Error("React-Table: Could not find a column with id: "+e.id+" while sorting");var n=t.sortType,r=P(n)||(c||{})[n]||Je[n];if(!r)throw new Error("React-Table: Could not find a valid sortType of '"+n+"' for column '"+e.id+"'.");return function(t,n){return r(t,n,e.id,e.desc)}})),t.map((function(e){var t=o.find((function(t){return t.id===e.id}));return t&&t.sortInverted?e.desc:!e.desc})));return i.forEach((function(t){e.push(t),t.subRows&&0!==t.subRows.length&&(t.subRows=n(t.subRows))})),i}(r),e]}),[u,m,r,i,o,s,c]),R=E[0],T=E[1],z=y(S);b((function(){z()&&x({type:l.resetSortBy})}),[u?null:n]),Object.assign(e,{preSortedRows:r,preSortedFlatRows:i,sortedRows:R,sortedFlatRows:T,rows:R,flatRows:T,setSortBy:A,toggleSortBy:j})}function $e(e,t,n){return[].concat(e).sort((function(e,r){for(var i=0;i<t.length;i+=1){var o=t[i],a=!1===n[i]||"desc"===n[i],s=o(e,r);if(0!==s)return a?-s:s}return n[0]?e.index-r.index:r.index-e.index}))}l.resetPage="resetPage",l.gotoPage="gotoPage",l.setPageSize="setPageSize";var et=function(e){e.stateReducers.push(tt),e.useInstance.push(nt)};function tt(e,t,n,r){if(t.type===l.init)return o({pageSize:10,pageIndex:0},e);if(t.type===l.resetPage)return o({},e,{pageIndex:r.initialState.pageIndex||0});if(t.type===l.gotoPage){var i=r.pageCount,a=r.page,s=x(t.pageIndex,e.pageIndex),c=!1;return s>e.pageIndex?c=-1===i?a.length>=e.pageSize:s<i:s<e.pageIndex&&(c=s>-1),c?o({},e,{pageIndex:s}):e}if(t.type===l.setPageSize){var u=t.pageSize,d=e.pageSize*e.pageIndex;return o({},e,{pageIndex:Math.floor(d/u),pageSize:u})}}function nt(e){var n=e.rows,r=e.autoResetPage,i=void 0===r||r,o=e.manualExpandedKey,a=void 0===o?"expanded":o,s=e.plugins,c=e.pageCount,u=e.paginateExpandedRows,d=void 0===u||u,p=e.expandSubRows,f=void 0===p||p,h=e.state,m=h.pageSize,x=h.pageIndex,v=h.expanded,w=h.globalFilter,k=h.filters,S=h.groupBy,A=h.sortBy,j=e.dispatch,C=e.data,E=e.manualPagination;g(s,["useGlobalFilter","useFilters","useGroupBy","useSortBy","useExpanded"],"usePagination");var R=y(i);b((function(){R()&&j({type:l.resetPage})}),[j,E?null:C,w,k,S,A]);var O=E?c:Math.ceil(n.length/m),P=t.useMemo((function(){return O>0?[].concat(new Array(O)).fill(null).map((function(e,t){return t})):[]}),[O]),T=t.useMemo((function(){var e;if(E)e=n;else{var t=m*x,r=t+m;e=n.slice(t,r)}return d?e:z(e,{manualExpandedKey:a,expanded:v,expandSubRows:f})}),[f,v,a,E,x,m,d,n]),M=x>0,I=-1===O?T.length>=m:x<O-1,L=t.useCallback((function(e){j({type:l.gotoPage,pageIndex:e})}),[j]),F=t.useCallback((function(){return L((function(e){return e-1}))}),[L]),N=t.useCallback((function(){return L((function(e){return e+1}))}),[L]),D=t.useCallback((function(e){j({type:l.setPageSize,pageSize:e})}),[j]);Object.assign(e,{pageOptions:P,pageCount:O,page:T,canPreviousPage:M,canNextPage:I,gotoPage:L,previousPage:F,nextPage:N,setPageSize:D})}et.pluginName="usePagination",l.resetPivot="resetPivot",l.togglePivot="togglePivot";var rt=function(e){e.getPivotToggleProps=[ot],e.stateReducers.push(at),e.useInstanceAfterData.push(st),e.allColumns.push(lt),e.accessValue.push(ct),e.materializedColumns.push(ut),e.materializedColumnsDeps.push(dt),e.visibleColumns.push(pt),e.visibleColumnsDeps.push(ft),e.useInstance.push(ht),e.prepareRow.push(mt)};rt.pluginName="usePivotColumns";var it=[],ot=function(e,t){var n=t.header;return[e,{onClick:n.canPivot?function(e){e.persist(),n.togglePivot()}:void 0,style:{cursor:n.canPivot?"pointer":void 0},title:"Toggle Pivot"}]};function at(e,t,n,r){if(t.type===l.init)return o({pivotColumns:it},e);if(t.type===l.resetPivot)return o({},e,{pivotColumns:r.initialState.pivotColumns||it});if(t.type===l.togglePivot){var i=t.columnId,a=t.value,s=void 0!==a?a:!e.pivotColumns.includes(i);return o({},e,s?{pivotColumns:[].concat(e.pivotColumns,[i])}:{pivotColumns:e.pivotColumns.filter((function(e){return e!==i}))})}}function st(e){e.allColumns.forEach((function(t){t.isPivotSource=e.state.pivotColumns.includes(t.id)}))}function lt(e,t){var n=t.instance;return e.forEach((function(e){e.isPivotSource=n.state.pivotColumns.includes(e.id),e.uniqueValues=new Set})),e}function ct(e,t){var n=t.column;return n.uniqueValues&&void 0!==e&&n.uniqueValues.add(e),e}function ut(e,t){var n=t.instance,r=n.allColumns,i=n.state;if(!i.pivotColumns.length||!i.groupBy||!i.groupBy.length)return e;var a=i.pivotColumns.map((function(e){return r.find((function(t){return t.id===e}))})).filter(Boolean),s=r.filter((function(e){return!e.isPivotSource&&!i.groupBy.includes(e.id)&&!i.pivotColumns.includes(e.id)})),l=A(function e(t,n,r){void 0===t&&(t=0),void 0===r&&(r=[]);var i=a[t];return i?Array.from(i.uniqueValues).sort().map((function(a){var s=o({},i,{Header:i.PivotHeader||"string"==typeof i.header?i.Header+": "+a:a,isPivotGroup:!0,parent:n,depth:t,id:n?n.id+"."+i.id+"."+a:i.id+"."+a,pivotValue:a});return s.columns=e(t+1,s,[].concat(r,[function(e){return e.values[i.id]===a}])),s})):s.map((function(e){return o({},e,{canPivot:!1,isPivoted:!0,parent:n,depth:t,id:""+(n?n.id+"."+e.id:e.id),accessor:function(t,n,i){if(r.every((function(e){return e(i)})))return i.values[e.id]}})}))}());return[].concat(e,l)}function dt(e,t){var n=t.instance.state,r=n.pivotColumns,i=n.groupBy;return[].concat(e,[r,i])}function pt(e,t){var n=t.instance.state;return e=e.filter((function(e){return!e.isPivotSource})),n.pivotColumns.length&&n.groupBy&&n.groupBy.length&&(e=e.filter((function(e){return e.isGrouped||e.isPivoted}))),e}function ft(e,t){var n=t.instance;return[].concat(e,[n.state.pivotColumns,n.state.groupBy])}function ht(e){var t=e.columns,n=e.allColumns,r=e.flatHeaders,i=e.getHooks,o=e.plugins,a=e.dispatch,s=e.autoResetPivot,c=void 0===s||s,u=e.manaulPivot,d=e.disablePivot,p=e.defaultCanPivot;g(o,["useGroupBy"],"usePivotColumns");var h=y(e);n.forEach((function(t){var n=t.accessor,r=t.defaultPivot,i=t.disablePivot;t.canPivot=n?O(t.canPivot,!0!==i&&void 0,!0!==d&&void 0,!0):O(t.canPivot,r,p,!1),t.canPivot&&(t.togglePivot=function(){return e.togglePivot(t.id)}),t.Aggregated=t.Aggregated||t.Cell})),r.forEach((function(e){e.getPivotToggleProps=f(i().getPivotToggleProps,{instance:h(),header:e})}));var m=y(c);b((function(){m()&&a({type:l.resetPivot})}),[a,u?null:t]),Object.assign(e,{togglePivot:function(e,t){a({type:l.togglePivot,columnId:e,value:t})}})}function mt(e){e.allCells.forEach((function(e){e.isPivoted=e.column.isPivoted}))}l.resetSelectedRows="resetSelectedRows",l.toggleAllRowsSelected="toggleAllRowsSelected",l.toggleRowSelected="toggleRowSelected",l.toggleAllPageRowsSelected="toggleAllPageRowsSelected";var gt=function(e){e.getToggleRowSelectedProps=[xt],e.getToggleAllRowsSelectedProps=[yt],e.getToggleAllPageRowsSelectedProps=[vt],e.stateReducers.push(bt),e.useInstance.push(wt),e.prepareRow.push(kt)};gt.pluginName="useRowSelect";var xt=function(e,t){var n=t.instance,r=t.row,i=n.manualRowSelectedKey,o=void 0===i?"isSelected":i;return[e,{onChange:function(e){r.toggleRowSelected(e.target.checked)},style:{cursor:"pointer"},checked:!(!r.original||!r.original[o])||r.isSelected,title:"Toggle Row Selected",indeterminate:r.isSomeSelected}]},yt=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleAllRowsSelected(e.target.checked)},style:{cursor:"pointer"},checked:n.isAllRowsSelected,title:"Toggle All Rows Selected",indeterminate:Boolean(!n.isAllRowsSelected&&Object.keys(n.state.selectedRowIds).length)}]},vt=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleAllPageRowsSelected(e.target.checked)},style:{cursor:"pointer"},checked:n.isAllPageRowsSelected,title:"Toggle All Current Page Rows Selected",indeterminate:Boolean(!n.isAllPageRowsSelected&&n.page.some((function(e){var t=e.id;return n.state.selectedRowIds[t]})))}]};function bt(e,t,n,r){if(t.type===l.init)return o({selectedRowIds:{}},e);if(t.type===l.resetSelectedRows)return o({},e,{selectedRowIds:r.initialState.selectedRowIds||{}});if(t.type===l.toggleAllRowsSelected){var i=t.value,a=r.isAllRowsSelected,s=r.rowsById,c=r.nonGroupedRowsById,u=void 0===c?s:c,d=void 0!==i?i:!a,p=Object.assign({},e.selectedRowIds);return d?Object.keys(u).forEach((function(e){p[e]=!0})):Object.keys(u).forEach((function(e){delete p[e]})),o({},e,{selectedRowIds:p})}if(t.type===l.toggleRowSelected){var f=t.id,h=t.value,m=r.rowsById,g=r.selectSubRows,x=void 0===g||g,y=r.getSubRows,v=e.selectedRowIds[f],b=void 0!==h?h:!v;if(v===b)return e;var w=o({},e.selectedRowIds);return function e(t){var n=m[t];if(n&&(n.isGrouped||(b?w[t]=!0:delete w[t]),x&&y(n)))return y(n).forEach((function(t){return e(t.id)}))}(f),o({},e,{selectedRowIds:w})}if(t.type===l.toggleAllPageRowsSelected){var k=t.value,S=r.page,A=r.rowsById,j=r.selectSubRows,C=void 0===j||j,E=r.isAllPageRowsSelected,R=r.getSubRows,O=void 0!==k?k:!E,P=o({},e.selectedRowIds);return S.forEach((function(e){return function e(t){var n=A[t];if(n.isGrouped||(O?P[t]=!0:delete P[t]),C&&R(n))return R(n).forEach((function(t){return e(t.id)}))}(e.id)})),o({},e,{selectedRowIds:P})}return e}function wt(e){var n=e.data,r=e.rows,i=e.getHooks,o=e.plugins,a=e.rowsById,s=e.nonGroupedRowsById,c=void 0===s?a:s,u=e.autoResetSelectedRows,d=void 0===u||u,p=e.state.selectedRowIds,h=e.selectSubRows,m=void 0===h||h,x=e.dispatch,v=e.page,w=e.getSubRows;g(o,["useFilters","useGroupBy","useSortBy","useExpanded","usePagination"],"useRowSelect");var k=t.useMemo((function(){var e=[];return r.forEach((function(t){var n=m?function e(t,n,r){if(n[t.id])return!0;var i=r(t);if(i&&i.length){var o=!0,a=!1;return i.forEach((function(t){a&&!o||(e(t,n,r)?a=!0:o=!1)})),!!o||!!a&&null}return!1}(t,p,w):!!p[t.id];t.isSelected=!!n,t.isSomeSelected=null===n,n&&e.push(t)})),e}),[r,m,p,w]),S=Boolean(Object.keys(c).length&&Object.keys(p).length),A=S;S&&Object.keys(c).some((function(e){return!p[e]}))&&(S=!1),S||v&&v.length&&v.some((function(e){var t=e.id;return!p[t]}))&&(A=!1);var j=y(d);b((function(){j()&&x({type:l.resetSelectedRows})}),[x,n]);var C=t.useCallback((function(e){return x({type:l.toggleAllRowsSelected,value:e})}),[x]),E=t.useCallback((function(e){return x({type:l.toggleAllPageRowsSelected,value:e})}),[x]),R=t.useCallback((function(e,t){return x({type:l.toggleRowSelected,id:e,value:t})}),[x]),O=y(e),P=f(i().getToggleAllRowsSelectedProps,{instance:O()}),T=f(i().getToggleAllPageRowsSelectedProps,{instance:O()});Object.assign(e,{selectedFlatRows:k,isAllRowsSelected:S,isAllPageRowsSelected:A,toggleRowSelected:R,toggleAllRowsSelected:C,getToggleAllRowsSelectedProps:P,getToggleAllPageRowsSelectedProps:T,toggleAllPageRowsSelected:E})}function kt(e,t){var n=t.instance;e.toggleRowSelected=function(t){return n.toggleRowSelected(e.id,t)},e.getToggleRowSelectedProps=f(n.getHooks().getToggleRowSelectedProps,{instance:n,row:e})}var St=function(e){return{}},At=function(e){return{}};l.setRowState="setRowState",l.setCellState="setCellState",l.resetRowState="resetRowState";var jt=function(e){e.stateReducers.push(Ct),e.useInstance.push(Et),e.prepareRow.push(Rt)};function Ct(e,t,n,r){var i=r.initialRowStateAccessor,a=void 0===i?St:i,s=r.initialCellStateAccessor,c=void 0===s?At:s,u=r.rowsById;if(t.type===l.init)return o({rowState:{}},e);if(t.type===l.resetRowState)return o({},e,{rowState:r.initialState.rowState||{}});if(t.type===l.setRowState){var d,p=t.rowId,f=t.value,h=void 0!==e.rowState[p]?e.rowState[p]:a(u[p]);return o({},e,{rowState:o({},e.rowState,(d={},d[p]=x(f,h),d))})}if(t.type===l.setCellState){var m,g,y,v,b,w=t.rowId,k=t.columnId,S=t.value,A=void 0!==e.rowState[w]?e.rowState[w]:a(u[w]),j=void 0!==(null==A||null==(m=A.cellState)?void 0:m[k])?A.cellState[k]:c(null==(g=u[w])||null==(y=g.cells)?void 0:y.find((function(e){return e.column.id===k})));return o({},e,{rowState:o({},e.rowState,(b={},b[w]=o({},A,{cellState:o({},A.cellState||{},(v={},v[k]=x(S,j),v))}),b))})}}function Et(e){var n=e.autoResetRowState,r=void 0===n||n,i=e.data,o=e.dispatch,a=t.useCallback((function(e,t){return o({type:l.setRowState,rowId:e,value:t})}),[o]),s=t.useCallback((function(e,t,n){return o({type:l.setCellState,rowId:e,columnId:t,value:n})}),[o]),c=y(r);b((function(){c()&&o({type:l.resetRowState})}),[i]),Object.assign(e,{setRowState:a,setCellState:s})}function Rt(e,t){var n=t.instance,r=n.initialRowStateAccessor,i=void 0===r?St:r,o=n.initialCellStateAccessor,a=void 0===o?At:o,s=n.state.rowState;e&&(e.state=void 0!==s[e.id]?s[e.id]:i(e),e.setState=function(t){return n.setRowState(e.id,t)},e.cells.forEach((function(t){e.state.cellState||(e.state.cellState={}),t.state=void 0!==e.state.cellState[t.column.id]?e.state.cellState[t.column.id]:a(t),t.setState=function(r){return n.setCellState(e.id,t.column.id,r)}})))}jt.pluginName="useRowState",l.resetColumnOrder="resetColumnOrder",l.setColumnOrder="setColumnOrder";var Ot=function(e){e.stateReducers.push(Pt),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.columnOrder])})),e.visibleColumns.push(Tt),e.useInstance.push(zt)};function Pt(e,t,n,r){return t.type===l.init?o({columnOrder:[]},e):t.type===l.resetColumnOrder?o({},e,{columnOrder:r.initialState.columnOrder||[]}):t.type===l.setColumnOrder?o({},e,{columnOrder:x(t.columnOrder,e.columnOrder)}):void 0}function Tt(e,t){var n=t.instance.state.columnOrder;if(!n||!n.length)return e;for(var r=[].concat(n),i=[].concat(e),o=[],a=function(){var e=r.shift(),t=i.findIndex((function(t){return t.id===e}));t>-1&&o.push(i.splice(t,1)[0])};i.length&&r.length;)a();return[].concat(o,i)}function zt(e){var n=e.dispatch;e.setColumnOrder=t.useCallback((function(e){return n({type:l.setColumnOrder,columnOrder:e})}),[n])}Ot.pluginName="useColumnOrder",d.canResize=!0,l.columnStartResizing="columnStartResizing",l.columnResizing="columnResizing",l.columnDoneResizing="columnDoneResizing",l.resetResize="resetResize";var Mt=function(e){e.getResizerProps=[It],e.getHeaderProps.push({style:{position:"relative"}}),e.stateReducers.push(Lt),e.useInstance.push(Nt),e.useInstanceBeforeDimensions.push(Ft)},It=function(e,t){var n=t.instance,r=t.header,i=n.dispatch,o=function(e,t){var n=!1;if("touchstart"===e.type){if(e.touches&&e.touches.length>1)return;n=!0}var r,o,a=function(e){var t=[];return function e(n){n.columns&&n.columns.length&&n.columns.map(e),t.push(n)}(e),t}(t).map((function(e){return[e.id,e.totalWidth]})),s=n?Math.round(e.touches[0].clientX):e.clientX,c=function(){window.cancelAnimationFrame(r),r=null,i({type:l.columnDoneResizing})},u=function(){window.cancelAnimationFrame(r),r=null,i({type:l.columnResizing,clientX:o})},d=function(e){o=e,r||(r=window.requestAnimationFrame(u))},p={mouse:{moveEvent:"mousemove",moveHandler:function(e){return d(e.clientX)},upEvent:"mouseup",upHandler:function(e){document.removeEventListener("mousemove",p.mouse.moveHandler),document.removeEventListener("mouseup",p.mouse.upHandler),c()}},touch:{moveEvent:"touchmove",moveHandler:function(e){return e.cancelable&&(e.preventDefault(),e.stopPropagation()),d(e.touches[0].clientX),!1},upEvent:"touchend",upHandler:function(e){document.removeEventListener(p.touch.moveEvent,p.touch.moveHandler),document.removeEventListener(p.touch.upEvent,p.touch.moveHandler),c()}}},f=n?p.touch:p.mouse,h=!!function(){if("boolean"==typeof F)return F;var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){e=!1}return F=e}()&&{passive:!1};document.addEventListener(f.moveEvent,f.moveHandler,h),document.addEventListener(f.upEvent,f.upHandler,h),i({type:l.columnStartResizing,columnId:t.id,columnWidth:t.totalWidth,headerIdWidths:a,clientX:s})};return[e,{onMouseDown:function(e){return e.persist()||o(e,r)},onTouchStart:function(e){return e.persist()||o(e,r)},style:{cursor:"col-resize"},draggable:!1,role:"separator"}]};function Lt(e,t){if(t.type===l.init)return o({columnResizing:{columnWidths:{}}},e);if(t.type===l.resetResize)return o({},e,{columnResizing:{columnWidths:{}}});if(t.type===l.columnStartResizing){var n=t.clientX,r=t.columnId,i=t.columnWidth,a=t.headerIdWidths;return o({},e,{columnResizing:o({},e.columnResizing,{startX:n,headerIdWidths:a,columnWidth:i,isResizingColumn:r})})}if(t.type===l.columnResizing){var s=t.clientX,c=e.columnResizing,u=c.startX,d=c.columnWidth,p=c.headerIdWidths,f=(s-u)/d,h={};return(void 0===p?[]:p).forEach((function(e){var t=e[0],n=e[1];h[t]=Math.max(n+n*f,0)})),o({},e,{columnResizing:o({},e.columnResizing,{columnWidths:o({},e.columnResizing.columnWidths,{},h)})})}return t.type===l.columnDoneResizing?o({},e,{columnResizing:o({},e.columnResizing,{startX:null,isResizingColumn:null})}):void 0}Mt.pluginName="useResizeColumns";var Ft=function(e){var t=e.flatHeaders,n=e.disableResizing,r=e.getHooks,i=e.state.columnResizing,o=y(e);t.forEach((function(e){var t=O(!0!==e.disableResizing&&void 0,!0!==n&&void 0,!0);e.canResize=t,e.width=i.columnWidths[e.id]||e.originalWidth||e.width,e.isResizing=i.isResizingColumn===e.id,t&&(e.getResizerProps=f(r().getResizerProps,{instance:o(),header:e}))}))};function Nt(e){var n=e.plugins,r=e.dispatch,i=e.autoResetResize,o=void 0===i||i,a=e.columns;g(n,["useAbsoluteLayout"],"useResizeColumns");var s=y(o);b((function(){s()&&r({type:l.resetResize})}),[a]);var c=t.useCallback((function(){return r({type:l.resetResize})}),[r]);Object.assign(e,{resetResizing:c})}var Dt={position:"absolute",top:0},Bt=function(e){e.getTableBodyProps.push(_t),e.getRowProps.push(_t),e.getHeaderGroupProps.push(_t),e.getFooterGroupProps.push(_t),e.getHeaderProps.push((function(e,t){var n=t.column;return[e,{style:o({},Dt,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return[e,{style:o({},Dt,{left:n.column.totalLeft+"px",width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return[e,{style:o({},Dt,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]}))};Bt.pluginName="useAbsoluteLayout";var _t=function(e,t){return[e,{style:{position:"relative",width:t.instance.totalColumnsWidth+"px"}}]},Ht={display:"inline-block",boxSizing:"border-box"},Ut=function(e,t){return[e,{style:{display:"flex",width:t.instance.totalColumnsWidth+"px"}}]},Wt=function(e){e.getRowProps.push(Ut),e.getHeaderGroupProps.push(Ut),e.getFooterGroupProps.push(Ut),e.getHeaderProps.push((function(e,t){var n=t.column;return[e,{style:o({},Ht,{width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return[e,{style:o({},Ht,{width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return[e,{style:o({},Ht,{width:n.totalWidth+"px"})}]}))};function qt(e){e.getTableProps.push(Gt),e.getRowProps.push(Vt),e.getHeaderGroupProps.push(Vt),e.getFooterGroupProps.push(Vt),e.getHeaderProps.push(Kt),e.getCellProps.push(Jt),e.getFooterProps.push(Qt)}Wt.pluginName="useBlockLayout",qt.pluginName="useFlexLayout";var Gt=function(e,t){return[e,{style:{minWidth:t.instance.totalColumnsMinWidth+"px"}}]},Vt=function(e,t){return[e,{style:{display:"flex",flex:"1 0 auto",minWidth:t.instance.totalColumnsMinWidth+"px"}}]},Kt=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]},Jt=function(e,t){var n=t.cell;return[e,{style:{boxSizing:"border-box",flex:n.column.totalFlexWidth+" 0 auto",minWidth:n.column.totalMinWidth+"px",width:n.column.totalWidth+"px"}}]},Qt=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]};function Yt(e){e.stateReducers.push(en),e.getTableProps.push(Zt),e.getHeaderProps.push(Xt),e.getRowProps.push($t)}l.columnStartResizing="columnStartResizing",l.columnResizing="columnResizing",l.columnDoneResizing="columnDoneResizing",l.resetResize="resetResize",Yt.pluginName="useGridLayout";var Zt=function(e,t){var n=t.instance;return[e,{style:{display:"grid",gridTemplateColumns:n.visibleColumns.map((function(e){var t;return n.state.gridLayout.columnWidths[e.id]?n.state.gridLayout.columnWidths[e.id]+"px":(null==(t=n.state.columnResizing)?void 0:t.isResizingColumn)?n.state.gridLayout.startWidths[e.id]+"px":"number"==typeof e.width?e.width+"px":e.width})).join(" ")}}]},Xt=function(e,t){var n=t.column;return[e,{id:"header-cell-"+n.id,style:{position:"sticky",gridColumn:"span "+n.totalVisibleHeaderCount}}]},$t=function(e,t){var n=t.row;return n.isExpanded?[e,{style:{gridColumn:"1 / "+(n.cells.length+1)}}]:[e,{}]};function en(e,t,n,r){if(t.type===l.init)return o({gridLayout:{columnWidths:{}}},e);if(t.type===l.resetResize)return o({},e,{gridLayout:{columnWidths:{}}});if(t.type===l.columnStartResizing){var i=t.columnId,a=t.headerIdWidths,s=tn(i);if(void 0!==s){var c=r.visibleColumns.reduce((function(e,t){var n;return o({},e,((n={})[t.id]=tn(t.id),n))}),{}),u=r.visibleColumns.reduce((function(e,t){var n;return o({},e,((n={})[t.id]=t.minWidth,n))}),{}),d=r.visibleColumns.reduce((function(e,t){var n;return o({},e,((n={})[t.id]=t.maxWidth,n))}),{}),p=a.map((function(e){var t=e[0];return[t,tn(t)]}));return o({},e,{gridLayout:o({},e.gridLayout,{startWidths:c,minWidths:u,maxWidths:d,headerIdGridWidths:p,columnWidth:s})})}return e}if(t.type===l.columnResizing){var f=t.clientX,h=e.columnResizing.startX,m=e.gridLayout,g=m.columnWidth,x=m.minWidths,y=m.maxWidths,v=m.headerIdGridWidths,b=(f-h)/g,w={};return(void 0===v?[]:v).forEach((function(e){var t=e[0],n=e[1];w[t]=Math.min(Math.max(x[t],n+n*b),y[t])})),o({},e,{gridLayout:o({},e.gridLayout,{columnWidths:o({},e.gridLayout.columnWidths,{},w)})})}return t.type===l.columnDoneResizing?o({},e,{gridLayout:o({},e.gridLayout,{startWidths:{},minWidths:{},maxWidths:{}})}):void 0}function tn(e){var t,n=null==(t=document.getElementById("header-cell-"+e))?void 0:t.offsetWidth;if(void 0!==n)return n}e._UNSTABLE_usePivotColumns=rt,e.actions=l,e.defaultColumn=d,e.defaultGroupByFn=We,e.defaultOrderByFn=$e,e.defaultRenderer=c,e.emptyRenderer=u,e.ensurePluginOrder=g,e.flexRender=k,e.functionalUpdate=x,e.loopHooks=m,e.makePropGetter=f,e.makeRenderer=w,e.reduceHooks=h,e.safeUseLayoutEffect=v,e.useAbsoluteLayout=Bt,e.useAsyncDebounce=function(e,n){void 0===n&&(n=0);var o=t.useRef({}),a=y(e),s=y(n);return t.useCallback(function(){var e=i(r.mark((function e(){var t,n,l,c=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=c.length,n=new Array(t),l=0;l<t;l++)n[l]=c[l];return o.current.promise||(o.current.promise=new Promise((function(e,t){o.current.resolve=e,o.current.reject=t}))),o.current.timeout&&clearTimeout(o.current.timeout),o.current.timeout=setTimeout(i(r.mark((function e(){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete o.current.timeout,e.prev=1,e.t0=o.current,e.next=5,a().apply(void 0,n);case 5:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),o.current.reject(e.t2);case 12:return e.prev=12,delete o.current.promise,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])}))),s()),e.abrupt("return",o.current.promise);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),[a,s])},e.useBlockLayout=Wt,e.useColumnOrder=Ot,e.useExpanded=ce,e.useFilters=Ce,e.useFlexLayout=qt,e.useGetLatest=y,e.useGlobalFilter=Oe,e.useGridLayout=Yt,e.useGroupBy=Fe,e.useMountedLayoutEffect=b,e.usePagination=et,e.useResizeColumns=Mt,e.useRowSelect=gt,e.useRowState=jt,e.useSortBy=Qe,e.useTable=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];e=ae(e),r=[J].concat(r);var a=y(t.useRef({}).current);Object.assign(a(),o({},e,{plugins:r,hooks:K()})),r.filter(Boolean).forEach((function(e){e(a().hooks)}));var s=y(a().hooks);a().getHooks=s,delete a().hooks,Object.assign(a(),h(s().useOptions,ae(e)));var c=a(),u=c.data,d=c.columns,p=c.initialState,g=c.defaultColumn,x=c.getSubRows,v=c.getRowId,b=c.stateReducer,k=c.useControlledState,R=y(b),O=t.useCallback((function(e,t){if(!t.type)throw console.info({action:t}),new Error("Unknown Action \ud83d\udc46");return[].concat(s().stateReducers,Array.isArray(R())?R():[R()]).reduce((function(n,r){return r(n,t,e,a())||n}),e)}),[s,R,a]),P=t.useReducer(O,void 0,(function(){return O(p,{type:l.init})})),T=P[0],z=P[1],M=h([].concat(s().useControlledState,[k]),T,{instance:a()});Object.assign(a(),{state:M,dispatch:z});var I=t.useMemo((function(){return S(h(s().columns,d,{instance:a()}))}),[s,a,d].concat(h(s().columnsDeps,[],{instance:a()})));a().columns=I;var L=t.useMemo((function(){return h(s().allColumns,A(I),{instance:a()}).map(j)}),[I,s,a].concat(h(s().allColumnsDeps,[],{instance:a()})));a().allColumns=L;var F=t.useMemo((function(){for(var e=[],t=[],n={},r=[].concat(L);r.length;){var i=r.shift();le({data:u,rows:e,flatRows:t,rowsById:n,column:i,getRowId:v,getSubRows:x,accessValueHooks:s().accessValue,getInstance:a})}return[e,t,n]}),[L,u,v,x,s,a]),N=F[0],D=F[1],B=F[2];Object.assign(a(),{rows:N,initialRows:[].concat(N),flatRows:D,rowsById:B}),m(s().useInstanceAfterData,a());var _=t.useMemo((function(){return h(s().visibleColumns,L,{instance:a()}).map((function(e){return C(e,g)}))}),[s,L,a,g].concat(h(s().visibleColumnsDeps,[],{instance:a()})));L=t.useMemo((function(){var e=[].concat(_);return L.forEach((function(t){e.find((function(e){return e.id===t.id}))||e.push(t)})),e}),[L,_]),a().allColumns=L;var H=t.useMemo((function(){return h(s().headerGroups,E(_,g),a())}),[s,_,g,a].concat(h(s().headerGroupsDeps,[],{instance:a()})));a().headerGroups=H;var U=t.useMemo((function(){return H.length?H[0].headers:[]}),[H]);a().headers=U,a().flatHeaders=H.reduce((function(e,t){return[].concat(e,t.headers)}),[]),m(s().useInstanceBeforeDimensions,a());var W=_.filter((function(e){return e.isVisible})).map((function(e){return e.id})).sort().join("_");_=t.useMemo((function(){return _.filter((function(e){return e.isVisible}))}),[_,W]),a().visibleColumns=_;var q=se(U),G=q[0],V=q[1],Q=q[2];return a().totalColumnsMinWidth=G,a().totalColumnsWidth=V,a().totalColumnsMaxWidth=Q,m(s().useInstance,a()),[].concat(a().flatHeaders,a().allColumns).forEach((function(e){e.render=w(a(),e),e.getHeaderProps=f(s().getHeaderProps,{instance:a(),column:e}),e.getFooterProps=f(s().getFooterProps,{instance:a(),column:e})})),a().headerGroups=t.useMemo((function(){return H.filter((function(e,t){return e.headers=e.headers.filter((function(e){return e.headers?function e(t){return t.filter((function(t){return t.headers?e(t.headers):t.isVisible})).length}(e.headers):e.isVisible})),!!e.headers.length&&(e.getHeaderGroupProps=f(s().getHeaderGroupProps,{instance:a(),headerGroup:e,index:t}),e.getFooterGroupProps=f(s().getFooterGroupProps,{instance:a(),headerGroup:e,index:t}),!0)}))}),[H,a,s]),a().footerGroups=[].concat(a().headerGroups).reverse(),a().prepareRow=t.useCallback((function(e){e.getRowProps=f(s().getRowProps,{instance:a(),row:e}),e.allCells=L.map((function(t){var n=e.values[t.id],r={column:t,row:e,value:n};return r.getCellProps=f(s().getCellProps,{instance:a(),cell:r}),r.render=w(a(),t,{row:e,cell:r,value:n}),r})),e.cells=_.map((function(t){return e.allCells.find((function(e){return e.column.id===t.id}))})),m(s().prepareRow,e,{instance:a()})}),[s,a,L,_]),a().getTableProps=f(s().getTableProps,{instance:a()}),a().getTableBodyProps=f(s().getTableBodyProps,{instance:a()}),m(s().useFinalInstance,a()),a()},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(5043))},1094:(e,t,n)=>{e.exports=n(3310)},1153:(e,t,n)=>{"use strict";var r=n(5043),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=x.prototype;var b=v.prototype=new y;b.constructor=v,m(b,x.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,i)&&!A.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+R(l,0):o,w(a)?(i="",null!=e&&(i=e.replace(E,"$&/")+"/"),O(a,t,i,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+R(s=e[c],c);l+=O(s,t,i,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=O(s=s.value,t,i,u=o+R(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,n){if(null==e)return e;var r=[],i=0;return O(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},M={transition:null},I={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:M,ReactCurrentOwner:S};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=i,t.Profiler=a,t.PureComponent=v,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!A.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,n){return z.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,n){return z.current.useReducer(e,t,n)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return z.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return z.current.useTransition()},t.version="18.3.1"},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},579:(e,t,n)=>{"use strict";e.exports=n(1153)},5820:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var r=function(){if("undefined"!==typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),i="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,o="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),a="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],l="undefined"!==typeof MutationObserver,c=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&l()}function s(){a(o)}function l(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=e}return l}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),l?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;s.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),u=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},d=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||o},p=y(0,0,0,0);function f(e){return parseFloat(e)||0}function h(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+f(e["border-"+n+"-width"])}),0)}function m(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var r=d(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=f(o)}return t}(r),o=i.left+i.right,a=i.top+i.bottom,s=f(r.width),l=f(r.height);if("border-box"===r.boxSizing&&(Math.round(s+o)!==t&&(s-=h(r,"left","right")+o),Math.round(l+a)!==n&&(l-=h(r,"top","bottom")+a)),!function(e){return e===d(e).document.documentElement}(e)){var c=Math.round(s+o)-t,u=Math.round(l+a)-n;1!==Math.abs(c)&&(s-=c),1!==Math.abs(u)&&(l-=u)}return y(i.left,i.top,s,l)}var g="undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof d(e).SVGGraphicsElement}:function(e){return e instanceof d(e).SVGElement&&"function"===typeof e.getBBox};function x(e){return i?g(e)?function(e){var t=e.getBBox();return y(0,0,t.width,t.height)}(e):m(e):p}function y(e,t,n,r){return{x:e,y:t,width:n,height:r}}var v=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=x(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),b=function(e,t){var n=function(e){var t=e.x,n=e.y,r=e.width,i=e.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(o.prototype);return u(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}(t);u(this,{target:e,contentRect:n})},w=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new v(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new b(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),k="undefined"!==typeof WeakMap?new WeakMap:new r,S=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),r=new w(t,n,this);k.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){S.prototype[e]=function(){var t;return(t=k.get(this))[e].apply(t,arguments)}}));const A="undefined"!==typeof o.ResizeObserver?o.ResizeObserver:S},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>o(l,n))c<i&&0>o(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>o(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,v="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,M(k);else{var t=r(u);null!==t&&I(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,y(C),C=-1),h=!0;var o=f;try{for(b(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!O());){var a=p.callback;if("function"===typeof a){p.callback=null,f=p.priorityLevel;var s=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&i(c),b(n)}else i(c);p=r(c)}if(null!==p)var l=!0;else{var d=r(u);null!==d&&I(w,d.startTime-n),l=!1}return l}finally{p=null,f=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,A=!1,j=null,C=-1,E=5,R=-1;function O(){return!(t.unstable_now()-R<E)}function P(){if(null!==j){var e=t.unstable_now();R=e;var n=!0;try{n=j(!0,e)}finally{n?S():(A=!1,j=null)}}else A=!1}if("function"===typeof v)S=function(){v(P)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,z=T.port2;T.port1.onmessage=P,S=function(){z.postMessage(null)}}else S=function(){x(P,0)};function M(e){j=e,A||(A=!0,S())}function I(e,n){C=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,M(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(u,e),null===r(c)&&e===r(u)&&(g?(y(C),C=-1):g=!0,I(w,o-a))):(e.sortIndex=s,n(c,e),m||h||(m=!0,M(k))),e},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},7324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var c=o[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},7475:e=>{e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},4222:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(4403));t.default=function(e,t){var n=null;if(!e||"string"!==typeof e)return n;var r=(0,i.default)(e),o="function"===typeof t;return r.forEach((function(e){if("declaration"===e.type){var r=e.property,i=e.value;o?t(r,i,e):i&&((n=n||{})[r]=i)}})),n}},8178:function(e){e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}e.r(t),e.d(t,{default:()=>s});var r=encodeURIComponent;function i(e,t,i,o,s){var l=o&&s.arrayPrefix||"";if("object"===n(t)){var c="".concat(e).concat(l).concat(i&&"]","[");return"".concat(a(t,"".concat(i).concat(c),s))}return i&&i.length?"".concat(i).concat(e,"]").concat(l,"=").concat(r(t)):"".concat(e).concat(l,"=").concat(r(t))}function o(e,t,n,r){return t.map((function(t){return i(e,t,n,!0,r)})).join("&")}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(Array.isArray(e)?e.map((function(e,r){return i("".concat(r),e,t,!0,n)})):Object.keys(e).filter((function(t){return void 0!==e[t]})).map((function(r){return e[r]&&Array.isArray(e[r])?o("".concat(r),e[r],t,n):i(r,e[r],t,!1,n)}))).join("&").replace(/%20/g,"+")}const s=a;return t})()},6440:e=>{"use strict";var t=function(){};e.exports=t},4633:(e,t,n)=>{var r=n(3738).default;function i(){"use strict";e.exports=i=function(){return n},e.exports.__esModule=!0,e.exports.default=e.exports;var t,n={},o=Object.prototype,a=o.hasOwnProperty,s=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",d=l.toStringTag||"@@toStringTag";function p(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(t){p=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var i=t&&t.prototype instanceof b?t:b,o=Object.create(i.prototype),a=new M(r||[]);return s(o,"_invoke",{value:O(e,n,a)}),o}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var m="suspendedStart",g="suspendedYield",x="executing",y="completed",v={};function b(){}function w(){}function k(){}var S={};p(S,c,(function(){return this}));var A=Object.getPrototypeOf,j=A&&A(A(I([])));j&&j!==o&&a.call(j,c)&&(S=j);var C=k.prototype=b.prototype=Object.create(S);function E(e){["next","throw","return"].forEach((function(t){p(e,t,(function(e){return this._invoke(t,e)}))}))}function R(e,t){function n(i,o,s,l){var c=h(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==r(d)&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,s,l)}),(function(e){n("throw",e,s,l)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,l)}))}l(c.arg)}var i;s(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}})}function O(e,n,r){var i=m;return function(o,a){if(i===x)throw Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var l=P(s,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===m)throw i=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=x;var c=h(e,n,r);if("normal"===c.type){if(i=r.done?y:g,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i=y,r.method="throw",r.arg=c.arg)}}}function P(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=h(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function z(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(a.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(r(e)+" is not iterable")}return w.prototype=k,s(C,"constructor",{value:k,configurable:!0}),s(k,"constructor",{value:w,configurable:!0}),w.displayName=p(k,d,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,p(e,d,"GeneratorFunction")),e.prototype=Object.create(C),e},n.awrap=function(e){return{__await:e}},E(R.prototype),p(R.prototype,u,(function(){return this})),n.AsyncIterator=R,n.async=function(e,t,r,i,o){void 0===o&&(o=Promise);var a=new R(f(e,t,r,i),o);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(C),p(C,d,"Generator"),p(C,c,(function(){return this})),p(C,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=I,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(z),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),z(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;z(n)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},n}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},3738:e=>{function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4756:(e,t,n)=>{var r=n(4633)();e.exports=r;try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},8139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,o(n)))}return e}function o(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".7ec37918.chunk.js",n.miniCssF=e=>{},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="ipouterpage:";n.l=(r,i,o,a)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[i];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=o);var a=n.p+n.u(t),s=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,o,a=r[0],s=r[1],l=r[2],c=0;if(a.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)l(n)}for(t&&t(r);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkipouterpage=self.webpackChunkipouterpage||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>ml,hasStandardBrowserEnv:()=>xl,hasStandardBrowserWebWorkerEnv:()=>yl,navigator:()=>gl,origin:()=>vl});var t={};n.r(t),n.d(t,{boolean:()=>dg,booleanish:()=>pg,commaOrSpaceSeparated:()=>xg,commaSeparated:()=>gg,number:()=>hg,overloadedBoolean:()=>fg,spaceSeparated:()=>mg});var r={};n.r(r),n.d(r,{attentionMarkers:()=>Yy,contentInitial:()=>qy,disable:()=>Zy,document:()=>Wy,flow:()=>Vy,flowInitial:()=>Gy,insideSpan:()=>Qy,string:()=>Ky,text:()=>Jy});var i=n(5043),o=n.t(i,2),a=n(4391),s=n(8139),l=n.n(s);const c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},u=i.createContext(null);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(null,arguments)}function p(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}n(2740);function f(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function h(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function m(e,t){return Object.keys(t).reduce((function(n,r){var o,a=n,s=a[f(r)],l=a[r],c=p(a,[f(r),r].map(h)),u=t[r],m=function(e,t,n){var r=(0,i.useRef)(void 0!==e),o=(0,i.useState)(t),a=o[0],s=o[1],l=void 0!==e,c=r.current;return r.current=l,!l&&c&&a!==t&&s(t),[l?e:a,(0,i.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(l,s,e[u]),g=m[0],x=m[1];return d({},c,((o={})[r]=g,o[u]=x,o))}),e)}n(5484);var g=n(579);const x=["xxl","xl","lg","md","sm","xs"],y="xs",v=i.createContext({prefixes:{},breakpoints:x,minBreakpoint:y}),{Consumer:b,Provider:w}=v;function k(e,t){const{prefixes:n}=(0,i.useContext)(v);return e||n[t]||t}function S(){const{breakpoints:e}=(0,i.useContext)(v);return e}function A(){const{minBreakpoint:e}=(0,i.useContext)(v);return e}const j=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:i,...o}=e;n=k(n,"navbar-brand");const a=i||(o.href?"a":"span");return(0,g.jsx)(a,{...o,ref:t,className:l()(r,n)})}));j.displayName="NavbarBrand";const C=j;function E(e){return e&&e.ownerDocument||document}function R(e,t){return function(e){var t=E(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var O=/([A-Z])/g;var P=/^ms-/;function T(e){return function(e){return e.replace(O,"-$1").toLowerCase()}(e).replace(P,"-ms-")}var z=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const M=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(T(t))||R(e).getPropertyValue(T(t));Object.keys(t).forEach((function(i){var o=t[i];o||0===o?!function(e){return!(!e||!z.test(e))}(i)?n+=T(i)+": "+o+";":r+=i+"("+o+") ":e.style.removeProperty(T(i))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}var L=n(7950),F=n.t(L,2);const N=!1,D=i.createContext(null);var B="unmounted",_="exited",H="entering",U="entered",W="exiting",q=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var i,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(i=_,r.appearStatus=H):i=U:i=t.unmountOnExit||t.mountOnEnter?B:_,r.state={status:i},r.nextCallback=null,r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,I(e,t)}(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===B?{status:_}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==H&&n!==U&&(t=H):n!==H&&n!==U||(t=W)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===H){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===_&&this.setState({status:B})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[L.findDOMNode(this),r],o=i[0],a=i[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!e&&!n||N?this.safeSetState({status:U},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,a),this.safeSetState({status:H},(function(){t.props.onEntering(o,a),t.onTransitionEnd(l,(function(){t.safeSetState({status:U},(function(){t.props.onEntered(o,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:L.findDOMNode(this);t&&!N?(this.props.onExit(r),this.safeSetState({status:W},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:_},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:_},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=i[0],a=i[1];this.props.addEndListener(o,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===B)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,p(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(D.Provider,{value:null},"function"===typeof n?n(e,r):i.cloneElement(i.Children.only(n),r))},t}(i.Component);function G(){}q.contextType=D,q.propTypes={},q.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:G,onEntering:G,onEntered:G,onExit:G,onExiting:G,onExited:G},q.UNMOUNTED=B,q.EXITED=_,q.ENTERING=H,q.ENTERED=U,q.EXITING=W;const V=q,K=!("undefined"===typeof window||!window.document||!window.document.createElement);var J=!1,Q=!1;try{var Y={get passive(){return J=!0},get once(){return Q=J=!0}};K&&(window.addEventListener("test",Y,Y),window.removeEventListener("test",Y,!0))}catch(UC){}const Z=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!Q){var i=r.once,o=r.capture,a=n;!Q&&i&&(a=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=a),e.addEventListener(t,a,J?r:o)}e.addEventListener(t,n,r)};const X=function(e,t,n,r){var i=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,i),n.__once&&e.removeEventListener(t,n.__once,i)};const $=function(e,t,n,r){return Z(e,t,n,r),function(){X(e,t,n,r)}};function ee(e,t,n){void 0===n&&(n=5);var r=!1,i=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var i=document.createEvent("HTMLEvents");i.initEvent(t,n,r),e.dispatchEvent(i)}}(e,"transitionend",!0)}),t+n),o=$(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(i),o()}}function te(e,t,n,r){null==n&&(n=function(e){var t=M(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var i=ee(e,n,r),o=$(e,"transitionend",t);return function(){i(),o()}}function ne(e,t){const n=M(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function re(e,t){const n=ne(e,"transitionDuration"),r=ne(e,"transitionDelay"),i=te(e,(n=>{n.target===e&&(i(),t(n))}),n+r)}const ie=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.apply(this,r),t.apply(this,r)}}),null)};function oe(e){e.offsetHeight}const ae=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const se=function(e,t){return(0,i.useMemo)((()=>function(e,t){const n=ae(e),r=ae(t);return e=>{n&&n(e),r&&r(e)}}(e,t)),[e,t])};const le=i.forwardRef(((e,t)=>{let{onEnter:n,onEntering:r,onEntered:o,onExit:a,onExiting:s,onExited:l,addEndListener:c,children:u,childRef:d,...p}=e;const f=(0,i.useRef)(null),h=se(f,d),m=e=>{var t;h((t=e)&&"setState"in t?L.findDOMNode(t):null!=t?t:null)},x=e=>t=>{e&&f.current&&e(f.current,t)},y=(0,i.useCallback)(x(n),[n]),v=(0,i.useCallback)(x(r),[r]),b=(0,i.useCallback)(x(o),[o]),w=(0,i.useCallback)(x(a),[a]),k=(0,i.useCallback)(x(s),[s]),S=(0,i.useCallback)(x(l),[l]),A=(0,i.useCallback)(x(c),[c]);return(0,g.jsx)(V,{ref:t,...p,onEnter:y,onEntered:b,onEntering:v,onExit:w,onExited:S,onExiting:k,addEndListener:A,nodeRef:f,children:"function"===typeof u?(e,t)=>u(e,{...t,ref:m}):i.cloneElement(u,{ref:m})})})),ce=le,ue={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function de(e,t){const n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=ue[e];return n+parseInt(M(t,r[0]),10)+parseInt(M(t,r[1]),10)}const pe={[_]:"collapse",[W]:"collapsing",[H]:"collapsing",[U]:"collapse show"},fe=i.forwardRef(((e,t)=>{let{onEnter:n,onEntering:r,onEntered:o,onExit:a,onExiting:s,className:c,children:u,dimension:d="height",in:p=!1,timeout:f=300,mountOnEnter:h=!1,unmountOnExit:m=!1,appear:x=!1,getDimensionValue:y=de,...v}=e;const b="function"===typeof d?d():d,w=(0,i.useMemo)((()=>ie((e=>{e.style[b]="0"}),n)),[b,n]),k=(0,i.useMemo)((()=>ie((e=>{const t=`scroll${b[0].toUpperCase()}${b.slice(1)}`;e.style[b]=`${e[t]}px`}),r)),[b,r]),S=(0,i.useMemo)((()=>ie((e=>{e.style[b]=null}),o)),[b,o]),A=(0,i.useMemo)((()=>ie((e=>{e.style[b]=`${y(b,e)}px`,oe(e)}),a)),[a,y,b]),j=(0,i.useMemo)((()=>ie((e=>{e.style[b]=null}),s)),[b,s]);return(0,g.jsx)(ce,{ref:t,addEndListener:re,...v,"aria-expanded":v.role?p:null,onEnter:w,onEntering:k,onEntered:S,onExit:A,onExiting:j,childRef:u.ref,in:p,timeout:f,mountOnEnter:h,unmountOnExit:m,appear:x,children:(e,t)=>i.cloneElement(u,{...t,className:l()(c,u.props.className,pe[e],"width"===b&&"collapse-horizontal")})})})),he=fe,me=i.createContext(null);me.displayName="NavbarContext";const ge=me,xe=i.forwardRef(((e,t)=>{let{children:n,bsPrefix:r,...o}=e;r=k(r,"navbar-collapse");const a=(0,i.useContext)(ge);return(0,g.jsx)(he,{in:!(!a||!a.expanded),...o,children:(0,g.jsx)("div",{ref:t,className:r,children:n})})}));xe.displayName="NavbarCollapse";const ye=xe;const ve=function(e){const t=(0,i.useRef)(e);return(0,i.useEffect)((()=>{t.current=e}),[e]),t};function be(e){const t=ve(e);return(0,i.useCallback)((function(){return t.current&&t.current(...arguments)}),[t])}const we=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,children:o,label:a="Toggle navigation",as:s="button",onClick:c,...u}=e;n=k(n,"navbar-toggler");const{onToggle:d,expanded:p}=(0,i.useContext)(ge)||{},f=be((e=>{c&&c(e),d&&d()}));return"button"===s&&(u.type="button"),(0,g.jsx)(s,{...u,ref:t,onClick:f,"aria-label":a,className:l()(r,n,!p&&"collapsed"),children:o||(0,g.jsx)("span",{className:`${n}-icon`})})}));we.displayName="NavbarToggle";const ke=we,Se="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,Ae="undefined"!==typeof document||Se?i.useLayoutEffect:i.useEffect,je=new WeakMap,Ce=(e,t)=>{if(!e||!t)return;const n=je.get(t)||new Map;je.set(t,n);let r=n.get(e);return r||(r=t.matchMedia(e),r.refCount=0,n.set(r.media,r)),r};function Ee(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"undefined"===typeof window?void 0:window;const n=Ce(e,t),[r,o]=(0,i.useState)((()=>!!n&&n.matches));return Ae((()=>{let n=Ce(e,t);if(!n)return o(!1);let r=je.get(t);const i=()=>{o(n.matches)};return n.refCount++,n.addListener(i),i(),()=>{n.removeListener(i),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}}),[e]),r}const Re=function(e){const t=Object.keys(e);function n(e,t){return e===t?t:e?`${e} and ${t}`:t}function r(n){const r=function(e){return t[Math.min(t.indexOf(e)+1,t.length-1)]}(n);let i=e[r];return i="number"===typeof i?i-.2+"px":`calc(${i} - 0.2px)`,`(max-width: ${i})`}return function(t,o,a){let s;return"object"===typeof t?(s=t,a=o,o=!0):(o=o||!0,s={[t]:o}),Ee((0,i.useMemo)((()=>Object.entries(s).reduce(((t,i)=>{let[o,a]=i;return"up"!==a&&!0!==a||(t=n(t,function(t){let n=e[t];return"number"===typeof n&&(n=`${n}px`),`(min-width: ${n})`}(o))),"down"!==a&&!0!==a||(t=n(t,r(o))),t}),"")),[JSON.stringify(s)]),a)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Oe=Re;function Pe(e){void 0===e&&(e=E());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(UC){return e.body}}function Te(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function ze(e){const t=function(e){const t=(0,i.useRef)(e);return t.current=e,t}(e);(0,i.useEffect)((()=>()=>t.current()),[])}const Me="data-rr-ui-";function Ie(e){return`${Me}${e}`}const Le=Ie("modal-open");const Fe=class{constructor(){let{ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(M(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(Le,""),M(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(Le),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}},Ne=(0,i.createContext)(K?window:void 0);Ne.Provider;function De(){return(0,i.useContext)(Ne)}const Be=(e,t)=>K?null==e?(t||E()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;const _e=function(e){let{children:t,in:n,onExited:r,mountOnEnter:o,unmountOnExit:a}=e;const s=(0,i.useRef)(null),l=(0,i.useRef)(n),c=be(r);(0,i.useEffect)((()=>{n?l.current=!0:c(s.current)}),[n,c]);const u=se(s,t.ref),d=(0,i.cloneElement)(t,{ref:u});return n?d:a||!l.current&&o?null:d};const He=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Ue(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:o,onExiting:a,onExited:s,addEndListener:l,children:c}=e,u=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,He);const{major:d}=function(){const e=i.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}(),p=d>=19?c.props.ref:c.ref,f=(0,i.useRef)(null),h=se(f,"function"===typeof c?null:p),m=e=>t=>{e&&f.current&&e(f.current,t)},g=(0,i.useCallback)(m(t),[t]),x=(0,i.useCallback)(m(n),[n]),y=(0,i.useCallback)(m(r),[r]),v=(0,i.useCallback)(m(o),[o]),b=(0,i.useCallback)(m(a),[a]),w=(0,i.useCallback)(m(s),[s]),k=(0,i.useCallback)(m(l),[l]);return Object.assign({},u,{nodeRef:f},t&&{onEnter:g},n&&{onEntering:x},r&&{onEntered:y},o&&{onExit:v},a&&{onExiting:b},s&&{onExited:w},l&&{addEndListener:k},{children:"function"===typeof c?(e,t)=>c(e,Object.assign({},t,{ref:h})):(0,i.cloneElement)(c,{ref:h})})}const We=["component"];const qe=i.forwardRef(((e,t)=>{let{component:n}=e;const r=Ue(function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,We));return(0,g.jsx)(n,Object.assign({ref:t},r))}));function Ge(e){let{children:t,in:n,onExited:r,onEntered:o,transition:a}=e;const[s,l]=(0,i.useState)(!n);n&&s&&l(!1);const c=function(e){let{in:t,onTransition:n}=e;const r=(0,i.useRef)(null),o=(0,i.useRef)(!0),a=be(n);return Ae((()=>{if(!r.current)return;let e=!1;return a({in:t,element:r.current,initial:o.current,isStale:()=>e}),()=>{e=!0}}),[t,a]),Ae((()=>(o.current=!1,()=>{o.current=!0})),[]),r}({in:!!n,onTransition:e=>{Promise.resolve(a(e)).then((()=>{e.isStale()||(e.in?null==o||o(e.element,e.initial):(l(!0),null==r||r(e.element)))}),(t=>{throw e.in||l(!0),t}))}}),u=se(c,t.ref);return s&&!n?null:(0,i.cloneElement)(t,{ref:u})}function Ve(e,t,n){return e?(0,g.jsx)(qe,Object.assign({},n,{component:e})):t?(0,g.jsx)(Ge,Object.assign({},n,{transition:t})):(0,g.jsx)(_e,Object.assign({},n))}const Ke=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let Je;function Qe(e){const t=De(),n=e||function(e){return Je||(Je=new Fe({ownerDocument:null==e?void 0:e.document})),Je}(t),r=(0,i.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,i.useCallback)((e=>{r.current.dialog=e}),[]),setBackdropRef:(0,i.useCallback)((e=>{r.current.backdrop=e}),[])})}const Ye=(0,i.forwardRef)(((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:a,children:s,backdrop:l=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:p,runTransition:f,backdropTransition:h,runBackdropTransition:m,autoFocus:x=!0,enforceFocus:y=!0,restoreFocus:v=!0,restoreFocusOptions:b,renderDialog:w,renderBackdrop:k=e=>(0,g.jsx)("div",Object.assign({},e)),manager:S,container:A,onShow:j,onHide:C=()=>{},onExit:E,onExited:R,onExiting:O,onEnter:P,onEntering:T,onEntered:z}=e,M=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Ke);const I=De(),F=function(e,t){const n=De(),[r,o]=(0,i.useState)((()=>Be(e,null==n?void 0:n.document)));if(!r){const t=Be(e);t&&o(t)}return(0,i.useEffect)((()=>{t&&r&&t(r)}),[t,r]),(0,i.useEffect)((()=>{const t=Be(e);t!==r&&o(t)}),[e,r]),r}(A),N=Qe(S),D=function(){const e=(0,i.useRef)(!0),t=(0,i.useRef)((()=>e.current));return(0,i.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}(),B=function(e){const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{t.current=e})),t.current}(n),[_,H]=(0,i.useState)(!n),U=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,(()=>N),[N]),K&&!B&&n&&(U.current=Pe(null==I?void 0:I.document)),n&&_&&H(!1);const W=be((()=>{if(N.add(),Y.current=$(document,"keydown",J),Q.current=$(document,"focus",(()=>setTimeout(G)),!0),j&&j(),x){var e,t;const n=Pe(null!=(e=null==(t=N.dialog)?void 0:t.ownerDocument)?e:null==I?void 0:I.document);N.dialog&&n&&!Te(N.dialog,n)&&(U.current=n,N.dialog.focus())}})),q=be((()=>{var e;(N.remove(),null==Y.current||Y.current(),null==Q.current||Q.current(),v)&&(null==(e=U.current)||null==e.focus||e.focus(b),U.current=null)}));(0,i.useEffect)((()=>{n&&F&&W()}),[n,F,W]),(0,i.useEffect)((()=>{_&&q()}),[_,q]),ze((()=>{q()}));const G=be((()=>{if(!y||!D()||!N.isTopModal())return;const e=Pe(null==I?void 0:I.document);N.dialog&&e&&!Te(N.dialog,e)&&N.dialog.focus()})),V=be((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===l&&C())})),J=be((e=>{c&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&N.isTopModal()&&(null==d||d(e),e.defaultPrevented||C())})),Q=(0,i.useRef)(),Y=(0,i.useRef)();if(!F)return null;const Z=Object.assign({role:r,ref:N.setDialogRef,"aria-modal":"dialog"===r||void 0},M,{style:a,className:o,tabIndex:-1});let X=w?w(Z):(0,g.jsx)("div",Object.assign({},Z,{children:i.cloneElement(s,{role:"document"})}));X=Ve(p,f,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:E,onExiting:O,onExited:function(){H(!0),null==R||R(...arguments)},onEnter:P,onEntering:T,onEntered:z,children:X});let ee=null;return l&&(ee=k({ref:N.setBackdropRef,onClick:V}),ee=Ve(h,m,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ee})),(0,g.jsx)(g.Fragment,{children:L.createPortal((0,g.jsxs)(g.Fragment,{children:[ee,X]}),F)})}));Ye.displayName="Modal";const Ze=Object.assign(Ye,{Manager:Fe}),Xe={[H]:"show",[U]:"show"},$e=i.forwardRef(((e,t)=>{let{className:n,children:r,transitionClasses:o={},onEnter:a,...s}=e;const c={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...s},u=(0,i.useCallback)(((e,t)=>{oe(e),null==a||a(e,t)}),[a]);return(0,g.jsx)(ce,{ref:t,addEndListener:re,...c,onEnter:u,childRef:r.ref,children:(e,t)=>i.cloneElement(r,{...t,className:l()("fade",n,r.props.className,Xe[e],o[e])})})}));$e.displayName="Fade";const et=$e,tt=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="div",...o}=e;return r=k(r,"offcanvas-body"),(0,g.jsx)(i,{ref:t,className:l()(n,r),...o})}));tt.displayName="OffcanvasBody";const nt=tt,rt={[H]:"show",[U]:"show"},it=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,children:o,in:a=!1,mountOnEnter:s=!1,unmountOnExit:c=!1,appear:u=!1,...d}=e;return n=k(n,"offcanvas"),(0,g.jsx)(ce,{ref:t,addEndListener:re,in:a,mountOnEnter:s,unmountOnExit:c,appear:u,...d,childRef:o.ref,children:(e,t)=>i.cloneElement(o,{...t,className:l()(r,o.props.className,(e===H||e===W)&&`${n}-toggling`,rt[e])})})}));it.displayName="OffcanvasToggling";const ot=it,at=i.createContext({onHide(){}});var st=n(5173),lt=n.n(st);const ct={"aria-label":lt().string,onClick:lt().func,variant:lt().oneOf(["white"])},ut=i.forwardRef(((e,t)=>{let{className:n,variant:r,"aria-label":i="Close",...o}=e;return(0,g.jsx)("button",{ref:t,type:"button",className:l()("btn-close",r&&`btn-close-${r}`,n),"aria-label":i,...o})}));ut.displayName="CloseButton",ut.propTypes=ct;const dt=ut,pt=i.forwardRef(((e,t)=>{let{closeLabel:n="Close",closeVariant:r,closeButton:o=!1,onHide:a,children:s,...l}=e;const c=(0,i.useContext)(at),u=be((()=>{null==c||c.onHide(),null==a||a()}));return(0,g.jsxs)("div",{ref:t,...l,children:[s,o&&(0,g.jsx)(dt,{"aria-label":n,variant:r,onClick:u})]})})),ft=pt,ht=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,closeLabel:i="Close",closeButton:o=!1,...a}=e;return n=k(n,"offcanvas-header"),(0,g.jsx)(ft,{ref:t,...a,className:l()(r,n),closeLabel:i,closeButton:o})}));ht.displayName="OffcanvasHeader";const mt=ht,gt=(xt="h5",i.forwardRef(((e,t)=>(0,g.jsx)("div",{...e,ref:t,className:l()(e.className,xt)}))));var xt;const yt=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i=gt,...o}=e;return r=k(r,"offcanvas-title"),(0,g.jsx)(i,{ref:t,className:l()(n,r),...o})}));yt.displayName="OffcanvasTitle";const vt=yt;var bt=Function.prototype.bind.call(Function.prototype.call,[].slice);function wt(e,t){return bt(e.querySelectorAll(t))}function kt(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const St=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",At=".sticky-top",jt=".navbar-toggler";class Ct extends Fe{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,M(t,{[e]:`${parseFloat(M(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],M(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(function(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}(t,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";wt(t,St).forEach((t=>this.adjustAndStore(n,t,e.scrollBarWidth))),wt(t,At).forEach((t=>this.adjustAndStore(r,t,-e.scrollBarWidth))),wt(t,jt).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();!function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=kt(e.className,t):e.setAttribute("class",kt(e.className&&e.className.baseVal||"",t))}(t,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";wt(t,St).forEach((e=>this.restore(n,e))),wt(t,At).forEach((e=>this.restore(r,e))),wt(t,jt).forEach((e=>this.restore(r,e)))}}let Et;const Rt=Ct;function Ot(e){return(0,g.jsx)(ot,{...e})}function Pt(e){return(0,g.jsx)(et,{...e})}const Tt=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,children:o,"aria-labelledby":a,placement:s="start",responsive:c,show:u=!1,backdrop:d=!0,keyboard:p=!0,scroll:f=!1,onEscapeKeyDown:h,onShow:m,onHide:x,container:y,autoFocus:v=!0,enforceFocus:b=!0,restoreFocus:w=!0,restoreFocusOptions:S,onEntered:A,onExit:j,onExiting:C,onEnter:E,onEntering:R,onExited:O,backdropClassName:P,manager:T,renderStaticNode:z=!1,...M}=e;const I=(0,i.useRef)();n=k(n,"offcanvas");const{onToggle:L}=(0,i.useContext)(ge)||{},[F,N]=(0,i.useState)(!1),D=Oe(c||"xs","up");(0,i.useEffect)((()=>{N(c?u&&!D:u)}),[u,c,D]);const B=be((()=>{null==L||L(),null==x||x()})),_=(0,i.useMemo)((()=>({onHide:B})),[B]);const H=(0,i.useCallback)((e=>(0,g.jsx)("div",{...e,className:l()(`${n}-backdrop`,P)})),[P,n]),U=e=>(0,g.jsx)("div",{...e,...M,className:l()(r,c?`${n}-${c}`:n,`${n}-${s}`),"aria-labelledby":a,children:o});return(0,g.jsxs)(g.Fragment,{children:[!F&&(c||z)&&U({}),(0,g.jsx)(at.Provider,{value:_,children:(0,g.jsx)(Ze,{show:F,ref:t,backdrop:d,container:y,keyboard:p,autoFocus:v,enforceFocus:b&&!f,restoreFocus:w,restoreFocusOptions:S,onEscapeKeyDown:h,onShow:m,onHide:B,onEnter:function(e){e&&(e.style.visibility="visible");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];null==E||E(e,...n)},onEntering:R,onEntered:A,onExit:j,onExiting:C,onExited:function(e){e&&(e.style.visibility="");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];null==O||O(...n)},manager:T||(f?(I.current||(I.current=new Rt({handleContainerOverflow:!1})),I.current):function(e){return Et||(Et=new Ct(e)),Et}()),transition:Ot,backdropTransition:Pt,renderBackdrop:H,renderDialog:U})})]})}));Tt.displayName="Offcanvas";const zt=Object.assign(Tt,{Body:nt,Header:mt,Title:vt}),Mt=i.forwardRef(((e,t)=>{const n=(0,i.useContext)(ge);return(0,g.jsx)(zt,{ref:t,show:!(null==n||!n.expanded),...e,renderStaticNode:!0})}));Mt.displayName="NavbarOffcanvas";const It=Mt,Lt=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="span",...o}=e;return r=k(r,"navbar-text"),(0,g.jsx)(i,{ref:t,className:l()(n,r),...o})}));Lt.displayName="NavbarText";const Ft=Lt,Nt=i.forwardRef(((e,t)=>{const{bsPrefix:n,expand:r=!0,variant:o="light",bg:a,fixed:s,sticky:c,className:d,as:p="nav",expanded:f,onToggle:h,onSelect:x,collapseOnSelect:y=!1,...v}=m(e,{expanded:"onToggle"}),b=k(n,"navbar"),w=(0,i.useCallback)((function(){null==x||x(...arguments),y&&f&&(null==h||h(!1))}),[x,y,f,h]);void 0===v.role&&"nav"!==p&&(v.role="navigation");let S=`${b}-expand`;"string"===typeof r&&(S=`${S}-${r}`);const A=(0,i.useMemo)((()=>({onToggle:()=>null==h?void 0:h(!f),bsPrefix:b,expanded:!!f,expand:r})),[b,f,r,h]);return(0,g.jsx)(ge.Provider,{value:A,children:(0,g.jsx)(u.Provider,{value:w,children:(0,g.jsx)(p,{ref:t,...v,className:l()(d,b,r&&S,o&&`${b}-${o}`,a&&`bg-${a}`,c&&`sticky-${c}`,s&&`fixed-${s}`)})})})}));Nt.displayName="Navbar";const Dt=Object.assign(Nt,{Brand:C,Collapse:ye,Offcanvas:It,Text:Ft,Toggle:ke}),Bt=i.forwardRef(((e,t)=>{let{bsPrefix:n,fluid:r=!1,as:i="div",className:o,...a}=e;const s=k(n,"container"),c="string"===typeof r?`-${r}`:"-fluid";return(0,g.jsx)(i,{ref:t,...a,className:l()(o,r?`${s}${c}`:s)})}));Bt.displayName="Container";const _t=Bt;n(9197);const Ht=i.createContext(null);Ht.displayName="NavContext";const Ut=Ht,Wt=i.createContext(null),qt=["as","disabled"];function Gt(e){let{tagName:t,disabled:n,href:r,target:i,rel:o,role:a,onClick:s,tabIndex:l=0,type:c}=e;t||(t=null!=r||null!=i||null!=o?"a":"button");const u={tagName:t};if("button"===t)return[{type:c||"button",disabled:n},u];const d=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==s||s(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:n?void 0:l,href:r,target:"a"===t?i:void 0,"aria-disabled":n||void 0,rel:"a"===t?o:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},u]}const Vt=i.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,qt);const[o,{tagName:a}]=Gt(Object.assign({tagName:n,disabled:r},i));return(0,g.jsx)(a,Object.assign({},i,o,{ref:t}))}));Vt.displayName="Button";const Kt=Vt,Jt=["as","active","eventKey"];function Qt(e){let{key:t,onClick:n,active:r,id:o,role:a,disabled:s}=e;const l=(0,i.useContext)(u),c=(0,i.useContext)(Ut),d=(0,i.useContext)(Wt);let p=r;const f={role:a};if(c){a||"tablist"!==c.role||(f.role="tab");const e=c.getControllerId(null!=t?t:null),n=c.getControlledId(null!=t?t:null);f[Ie("event-key")]=t,f.id=e||o,p=null==r&&null!=t?c.activeKey===t:r,!p&&(null!=d&&d.unmountOnExit||null!=d&&d.mountOnEnter)||(f["aria-controls"]=n)}return"tab"===f.role&&(f["aria-selected"]=p,p||(f.tabIndex=-1),s&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=be((e=>{s||(null==n||n(e),null!=t&&l&&!e.isPropagationStopped()&&l(t,e))})),[f,{isActive:p}]}const Yt=i.forwardRef(((e,t)=>{let{as:n=Kt,active:r,eventKey:i}=e,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Jt);const[a,s]=Qt(Object.assign({key:c(i,o.href),active:r},o));return a[Ie("active")]=s.isActive,(0,g.jsx)(n,Object.assign({},o,a,{ref:t}))}));Yt.displayName="NavItem";const Zt=Yt,Xt=["as","onSelect","activeKey","role","onKeyDown"];const $t=()=>{},en=Ie("event-key"),tn=i.forwardRef(((e,t)=>{let{as:n="div",onSelect:r,activeKey:o,role:a,onKeyDown:s}=e,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Xt);const d=function(){const[,e]=(0,i.useReducer)((e=>!e),!1);return e}(),p=(0,i.useRef)(!1),f=(0,i.useContext)(u),h=(0,i.useContext)(Wt);let m,x;h&&(a=a||"tablist",o=h.activeKey,m=h.getControlledId,x=h.getControllerId);const y=(0,i.useRef)(null),v=e=>{const t=y.current;if(!t)return null;const n=wt(t,`[${en}]:not([aria-disabled=true])`),r=t.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const i=n.indexOf(r);if(-1===i)return null;let o=i+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},b=(e,t)=>{null!=e&&(null==r||r(e,t),null==f||f(e,t))};(0,i.useEffect)((()=>{if(y.current&&p.current){const e=y.current.querySelector(`[${en}][aria-selected=true]`);null==e||e.focus()}p.current=!1}));const w=se(t,y);return(0,g.jsx)(u.Provider,{value:b,children:(0,g.jsx)(Ut.Provider,{value:{role:a,activeKey:c(o),getControlledId:m||$t,getControllerId:x||$t},children:(0,g.jsx)(n,Object.assign({},l,{onKeyDown:e=>{if(null==s||s(e),!h)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=v(-1);break;case"ArrowRight":case"ArrowDown":t=v(1);break;default:return}var n;t&&(e.preventDefault(),b(t.dataset[(n="EventKey",`rrUi${n}`)]||null,e),p.current=!0,d())},ref:w,role:a}))})})}));tn.displayName="Nav";const nn=Object.assign(tn,{Item:Zt}),rn=i.createContext(null);rn.displayName="CardHeaderContext";const on=rn,an=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="div",...o}=e;return r=k(r,"nav-item"),(0,g.jsx)(i,{ref:t,className:l()(n,r),...o})}));an.displayName="NavItem";const sn=an;new WeakMap;const ln=["onKeyDown"];const cn=i.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,ln);const[i]=Gt(Object.assign({tagName:"a"},r)),o=be((e=>{i.onKeyDown(e),null==n||n(e)}));return(a=r.href)&&"#"!==a.trim()&&"button"!==r.role?(0,g.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,g.jsx)("a",Object.assign({ref:t},r,i,{onKeyDown:o}));var a}));cn.displayName="Anchor";const un=cn,dn=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:i=un,active:o,eventKey:a,disabled:s=!1,...u}=e;n=k(n,"nav-link");const[d,p]=Qt({key:c(a,u.href),active:o,disabled:s,...u});return(0,g.jsx)(i,{...u,...d,ref:t,disabled:s,className:l()(r,n,s&&"disabled",p.isActive&&"active")})}));dn.displayName="NavLink";const pn=dn,fn=i.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:r,variant:o,fill:a=!1,justify:s=!1,navbar:c,navbarScroll:u,className:d,activeKey:p,...f}=m(e,{activeKey:"onSelect"}),h=k(r,"nav");let x,y,v=!1;const b=(0,i.useContext)(ge),w=(0,i.useContext)(on);return b?(x=b.bsPrefix,v=null==c||c):w&&({cardHeaderBsPrefix:y}=w),(0,g.jsx)(nn,{as:n,ref:t,activeKey:p,className:l()(d,{[h]:!v,[`${x}-nav`]:v,[`${x}-nav-scroll`]:v&&u,[`${y}-${o}`]:!!y,[`${h}-${o}`]:!!o,[`${h}-fill`]:a,[`${h}-justified`]:s}),...f})}));fn.displayName="Nav";const hn=Object.assign(fn,{Item:sn,Link:pn}),mn=n.p+"static/media/Atom_walk_logo-removebg-preview.21661b59140f92dd7ced.png";var gn=function(){return gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},gn.apply(this,arguments)};Object.create;function xn(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var yn=n(7324),vn=n.n(yn),bn="-ms-",wn="-moz-",kn="-webkit-",Sn="comm",An="rule",jn="decl",Cn="@import",En="@keyframes",Rn="@layer",On=Math.abs,Pn=String.fromCharCode,Tn=Object.assign;function zn(e){return e.trim()}function Mn(e,t){return(e=t.exec(e))?e[0]:e}function In(e,t,n){return e.replace(t,n)}function Ln(e,t,n){return e.indexOf(t,n)}function Fn(e,t){return 0|e.charCodeAt(t)}function Nn(e,t,n){return e.slice(t,n)}function Dn(e){return e.length}function Bn(e){return e.length}function _n(e,t){return t.push(e),e}function Hn(e,t){return e.filter((function(e){return!Mn(e,t)}))}var Un=1,Wn=1,qn=0,Gn=0,Vn=0,Kn="";function Jn(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Un,column:Wn,length:a,return:"",siblings:s}}function Qn(e,t){return Tn(Jn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Yn(e){for(;e.root;)e=Qn(e.root,{children:[e]});_n(e,e.siblings)}function Zn(){return Vn=Gn>0?Fn(Kn,--Gn):0,Wn--,10===Vn&&(Wn=1,Un--),Vn}function Xn(){return Vn=Gn<qn?Fn(Kn,Gn++):0,Wn++,10===Vn&&(Wn=1,Un++),Vn}function $n(){return Fn(Kn,Gn)}function er(){return Gn}function tr(e,t){return Nn(Kn,e,t)}function nr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rr(e){return Un=Wn=1,qn=Dn(Kn=e),Gn=0,[]}function ir(e){return Kn="",e}function or(e){return zn(tr(Gn-1,lr(91===e?e+2:40===e?e+1:e)))}function ar(e){for(;(Vn=$n())&&Vn<33;)Xn();return nr(e)>2||nr(Vn)>3?"":" "}function sr(e,t){for(;--t&&Xn()&&!(Vn<48||Vn>102||Vn>57&&Vn<65||Vn>70&&Vn<97););return tr(e,er()+(t<6&&32==$n()&&32==Xn()))}function lr(e){for(;Xn();)switch(Vn){case e:return Gn;case 34:case 39:34!==e&&39!==e&&lr(Vn);break;case 40:41===e&&lr(e);break;case 92:Xn()}return Gn}function cr(e,t){for(;Xn()&&e+Vn!==57&&(e+Vn!==84||47!==$n()););return"/*"+tr(t,Gn-1)+"*"+Pn(47===e?e:Xn())}function ur(e){for(;!nr($n());)Xn();return tr(e,Gn)}function dr(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function pr(e,t,n,r){switch(e.type){case Rn:if(e.children.length)break;case Cn:case jn:return e.return=e.return||e.value;case Sn:return"";case En:return e.return=e.value+"{"+dr(e.children,r)+"}";case An:if(!Dn(e.value=e.props.join(",")))return""}return Dn(n=dr(e.children,r))?e.return=e.value+"{"+n+"}":""}function fr(e,t,n){switch(function(e,t){return 45^Fn(e,0)?(((t<<2^Fn(e,0))<<2^Fn(e,1))<<2^Fn(e,2))<<2^Fn(e,3):0}(e,t)){case 5103:return kn+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return kn+e+e;case 4789:return wn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return kn+e+wn+e+bn+e+e;case 5936:switch(Fn(e,t+11)){case 114:return kn+e+bn+In(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return kn+e+bn+In(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return kn+e+bn+In(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return kn+e+bn+e+e;case 6165:return kn+e+bn+"flex-"+e+e;case 5187:return kn+e+In(e,/(\w+).+(:[^]+)/,kn+"box-$1$2"+bn+"flex-$1$2")+e;case 5443:return kn+e+bn+"flex-item-"+In(e,/flex-|-self/g,"")+(Mn(e,/flex-|baseline/)?"":bn+"grid-row-"+In(e,/flex-|-self/g,""))+e;case 4675:return kn+e+bn+"flex-line-pack"+In(e,/align-content|flex-|-self/g,"")+e;case 5548:return kn+e+bn+In(e,"shrink","negative")+e;case 5292:return kn+e+bn+In(e,"basis","preferred-size")+e;case 6060:return kn+"box-"+In(e,"-grow","")+kn+e+bn+In(e,"grow","positive")+e;case 4554:return kn+In(e,/([^-])(transform)/g,"$1"+kn+"$2")+e;case 6187:return In(In(In(e,/(zoom-|grab)/,kn+"$1"),/(image-set)/,kn+"$1"),e,"")+e;case 5495:case 3959:return In(e,/(image-set\([^]*)/,kn+"$1$`$1");case 4968:return In(In(e,/(.+:)(flex-)?(.*)/,kn+"box-pack:$3"+bn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+kn+e+e;case 4200:if(!Mn(e,/flex-|baseline/))return bn+"grid-column-align"+Nn(e,t)+e;break;case 2592:case 3360:return bn+In(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Mn(e.props,/grid-\w+-end/)}))?~Ln(e+(n=n[t].value),"span",0)?e:bn+In(e,"-start","")+e+bn+"grid-row-span:"+(~Ln(n,"span",0)?Mn(n,/\d+/):+Mn(n,/\d+/)-+Mn(e,/\d+/))+";":bn+In(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Mn(e.props,/grid-\w+-start/)}))?e:bn+In(In(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return In(e,/(.+)-inline(.+)/,kn+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(e)-1-t>6)switch(Fn(e,t+1)){case 109:if(45!==Fn(e,t+4))break;case 102:return In(e,/(.+:)(.+)-([^]+)/,"$1"+kn+"$2-$3$1"+wn+(108==Fn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ln(e,"stretch",0)?fr(In(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return In(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,o,a,s){return bn+n+":"+r+s+(i?bn+n+"-span:"+(o?a:+a-+r)+s:"")+e}));case 4949:if(121===Fn(e,t+6))return In(e,":",":"+kn)+e;break;case 6444:switch(Fn(e,45===Fn(e,14)?18:11)){case 120:return In(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+kn+(45===Fn(e,14)?"inline-":"")+"box$3$1"+kn+"$2$3$1"+bn+"$2box$3")+e;case 100:return In(e,":",":"+bn)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return In(e,"scroll-","scroll-snap-")+e}return e}function hr(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case jn:return void(e.return=fr(e.value,e.length,n));case En:return dr([Qn(e,{value:In(e.value,"@","@"+kn)})],r);case An:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Mn(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Yn(Qn(e,{props:[In(t,/:(read-\w+)/,":"+wn+"$1")]})),Yn(Qn(e,{props:[t]})),Tn(e,{props:Hn(n,r)});break;case"::placeholder":Yn(Qn(e,{props:[In(t,/:(plac\w+)/,":"+kn+"input-$1")]})),Yn(Qn(e,{props:[In(t,/:(plac\w+)/,":"+wn+"$1")]})),Yn(Qn(e,{props:[In(t,/:(plac\w+)/,bn+"input-$1")]})),Yn(Qn(e,{props:[t]})),Tn(e,{props:Hn(n,r)})}return""}))}}function mr(e){return ir(gr("",null,null,null,[""],e=rr(e),0,[0],e))}function gr(e,t,n,r,i,o,a,s,l){for(var c=0,u=0,d=a,p=0,f=0,h=0,m=1,g=1,x=1,y=0,v="",b=i,w=o,k=r,S=v;g;)switch(h=y,y=Xn()){case 40:if(108!=h&&58==Fn(S,d-1)){-1!=Ln(S+=In(or(y),"&","&\f"),"&\f",On(c?s[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:S+=or(y);break;case 9:case 10:case 13:case 32:S+=ar(h);break;case 92:S+=sr(er()-1,7);continue;case 47:switch($n()){case 42:case 47:_n(yr(cr(Xn(),er()),t,n,l),l);break;default:S+="/"}break;case 123*m:s[c++]=Dn(S)*x;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==x&&(S=In(S,/\f/g,"")),f>0&&Dn(S)-d&&_n(f>32?vr(S+";",r,n,d-1,l):vr(In(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(_n(k=xr(S,t,n,c,u,i,s,v,b=[],w=[],d,o),o),123===y)if(0===u)gr(S,t,k,k,b,o,d,s,w);else switch(99===p&&110===Fn(S,3)?100:p){case 100:case 108:case 109:case 115:gr(e,k,k,r&&_n(xr(e,k,k,0,0,i,s,v,i,b=[],d,w),w),i,w,d,s,r?b:w);break;default:gr(S,k,k,k,[""],w,0,s,w)}}c=u=f=0,m=x=1,v=S="",d=a;break;case 58:d=1+Dn(S),f=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Zn())continue;switch(S+=Pn(y),y*m){case 38:x=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(Dn(S)-1)*x,x=1;break;case 64:45===$n()&&(S+=or(Xn())),p=$n(),u=d=Dn(v=S+=ur(er())),y++;break;case 45:45===h&&2==Dn(S)&&(m=0)}}return o}function xr(e,t,n,r,i,o,a,s,l,c,u,d){for(var p=i-1,f=0===i?o:[""],h=Bn(f),m=0,g=0,x=0;m<r;++m)for(var y=0,v=Nn(e,p+1,p=On(g=a[m])),b=e;y<h;++y)(b=zn(g>0?f[y]+" "+v:In(v,/&\f/g,f[y])))&&(l[x++]=b);return Jn(e,t,n,0===i?An:s,l,c,u,d)}function yr(e,t,n,r){return Jn(e,t,n,Sn,Pn(Vn),Nn(e,2,-2),0,r)}function vr(e,t,n,r,i){return Jn(e,t,n,jn,Nn(e,0,r),Nn(e,r+1,-1),r,i)}var br={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wr="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",kr="active",Sr="data-styled-version",Ar="6.1.12",jr="/*!sc*/\n",Cr="undefined"!=typeof window&&"HTMLElement"in window,Er=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Rr=(new Set,Object.freeze([])),Or=Object.freeze({});function Pr(e,t,n){return void 0===n&&(n=Or),e.theme!==n.theme&&e.theme||t||n.theme}var Tr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mr=/(^-|-$)/g;function Ir(e){return e.replace(zr,"-").replace(Mr,"")}var Lr=/(a)(d)/gi,Fr=52,Nr=function(e){return String.fromCharCode(e+(e>25?39:97))};function Dr(e){var t,n="";for(t=Math.abs(e);t>Fr;t=t/Fr|0)n=Nr(t%Fr)+n;return(Nr(t%Fr)+n).replace(Lr,"$1-$2")}var Br,_r=5381,Hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ur=function(e){return Hr(_r,e)};function Wr(e){return Dr(Ur(e)>>>0)}function qr(e){return e.displayName||e.name||"Component"}function Gr(e){return"string"==typeof e&&!0}var Vr="function"==typeof Symbol&&Symbol.for,Kr=Vr?Symbol.for("react.memo"):60115,Jr=Vr?Symbol.for("react.forward_ref"):60112,Qr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xr=((Br={})[Jr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Br[Kr]=Zr,Br);function $r(e){return("type"in(t=e)&&t.type.$$typeof)===Kr?Zr:"$$typeof"in e?Xr[e.$$typeof]:Qr;var t}var ei=Object.defineProperty,ti=Object.getOwnPropertyNames,ni=Object.getOwnPropertySymbols,ri=Object.getOwnPropertyDescriptor,ii=Object.getPrototypeOf,oi=Object.prototype;function ai(e,t,n){if("string"!=typeof t){if(oi){var r=ii(t);r&&r!==oi&&ai(e,r,n)}var i=ti(t);ni&&(i=i.concat(ni(t)));for(var o=$r(e),a=$r(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Yr||n&&n[l]||a&&l in a||o&&l in o)){var c=ri(t,l);try{ei(e,l,c)}catch(e){}}}}return e}function si(e){return"function"==typeof e}function li(e){return"object"==typeof e&&"styledComponentId"in e}function ci(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ui(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function di(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function pi(e,t,n){if(void 0===n&&(n=!1),!n&&!di(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=pi(e[r],t[r]);else if(di(t))for(var r in t)e[r]=pi(e[r],t[r]);return e}function fi(e,t){Object.defineProperty(e,"toString",{value:t})}function hi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var mi=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw hi(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(jr);return t},e}(),gi=new Map,xi=new Map,yi=1,vi=function(e){if(gi.has(e))return gi.get(e);for(;xi.has(yi);)yi++;var t=yi++;return gi.set(e,t),xi.set(t,e),t},bi=function(e,t){yi=t+1,gi.set(e,t),xi.set(t,e)},wi="style[".concat(wr,"][").concat(Sr,'="').concat(Ar,'"]'),ki=new RegExp("^".concat(wr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Si=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Ai=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(jr),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(ki);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(bi(u,c),Si(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},ji=function(e){for(var t=document.querySelectorAll(wi),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(wr)!==kr&&(Ai(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Ci(){return n.nc}var Ei=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(wr,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(wr,kr),r.setAttribute(Sr,Ar);var a=Ci();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Ri=function(){function e(e){this.element=Ei(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw hi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Oi=function(){function e(e){this.element=Ei(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Pi=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Ti=Cr,zi={isServer:!Cr,useCSSOMInjection:!Er},Mi=function(){function e(e,t,n){void 0===e&&(e=Or),void 0===t&&(t={});var r=this;this.options=gn(gn({},zi),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Cr&&Ti&&(Ti=!1,ji(this)),fi(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return xi.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var s="".concat(wr,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(jr)},o=0;o<n;o++)i(o);return r}(r)}))}return e.registerId=function(e){return vi(e)},e.prototype.rehydrate=function(){!this.server&&Cr&&ji(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(gn(gn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Pi(n):t?new Ri(n):new Oi(n)}(this.options),new mi(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(vi(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(vi(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(vi(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ii=/&/g,Li=/^\s*\/\/.*$/gm;function Fi(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Fi(e.children,t)),e}))}function Ni(e){var t,n,r,i=void 0===e?Or:e,o=i.options,a=void 0===o?Or:o,s=i.plugins,l=void 0===s?Rr:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===An&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Ii,n).replace(r,c))})),a.prefix&&u.push(hr),u.push(pr);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Li,""),c=mr(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);a.namespace&&(c=Fi(c,a.namespace));var d,p=[];return dr(c,function(e){var t=Bn(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce((function(e,t){return t.name||hi(15),Hr(e,t.name)}),_r).toString():"",d}var Di=new Mi,Bi=Ni(),_i=i.createContext({shouldForwardProp:void 0,styleSheet:Di,stylis:Bi}),Hi=(_i.Consumer,i.createContext(void 0));function Ui(){return(0,i.useContext)(_i)}function Wi(e){var t=(0,i.useState)(e.stylisPlugins),n=t[0],r=t[1],o=Ui().styleSheet,a=(0,i.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,i.useMemo)((function(){return Ni({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,i.useEffect)((function(){vn()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,i.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}}),[e.shouldForwardProp,a,s]);return i.createElement(_i.Provider,{value:l},i.createElement(Hi.Provider,{value:s},e.children))}var qi=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Bi);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,fi(this,(function(){throw hi(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Bi),this.name+e.hash},e}(),Gi=function(e){return e>="A"&&e<="Z"};function Vi(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Gi(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ki=function(e){return null==e||!1===e||""===e},Ji=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Ki(o)&&(Array.isArray(o)&&o.isCss||si(o)?r.push("".concat(Vi(i),":"),o,";"):di(o)?r.push.apply(r,xn(xn(["".concat(i," {")],Ji(o),!1),["}"],!1)):r.push("".concat(Vi(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in br||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Qi(e,t,n,r){return Ki(e)?[]:li(e)?[".".concat(e.styledComponentId)]:si(e)?!si(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Qi(e(t),t,n,r):e instanceof qi?n?(e.inject(n,r),[e.getName(r)]):[e]:di(e)?Ji(e):Array.isArray(e)?Array.prototype.concat.apply(Rr,e.map((function(e){return Qi(e,t,n,r)}))):[e.toString()];var i}function Yi(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(si(n)&&!li(n))return!1}return!0}var Zi=Ur(Ar),Xi=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Yi(e),this.componentId=t,this.baseHash=Hr(Zi,t),this.baseStyle=n,Mi.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=ci(r,this.staticRulesId);else{var i=ui(Qi(this.rules,e,t,n)),o=Dr(Hr(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=ci(r,o),this.staticRulesId=o}else{for(var s=Hr(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=ui(Qi(u,e,t,n));s=Hr(s,d+c),l+=d}}if(l){var p=Dr(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=ci(r,p)}}return r},e}(),$i=i.createContext(void 0);$i.Consumer;var eo={};new Set;function to(e,t,n){var r=li(e),o=e,a=!Gr(e),s=t.attrs,l=void 0===s?Rr:s,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Ir(e);eo[n]=(eo[n]||0)+1;var r="".concat(n,"-").concat(Wr(Ar+n+eo[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,p=void 0===d?function(e){return Gr(e)?"styled.".concat(e):"Styled(".concat(qr(e),")")}(e):d,f=t.displayName&&t.componentId?"".concat(Ir(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,m=t.shouldForwardProp;if(r&&o.shouldForwardProp){var g=o.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;m=function(e,t){return g(e,t)&&x(e,t)}}else m=g}var y=new Xi(n,f,r?o.componentStyle:void 0);function v(e,t){return function(e,t,n){var r=e.attrs,o=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=i.useContext($i),d=Ui(),p=e.shouldForwardProp||d.shouldForwardProp,f=Pr(t,u,a)||Or,h=function(e,t,n){for(var r,i=gn(gn({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=si(r=e[o])?r(i):r;for(var s in a)i[s]="className"===s?ci(i[s],a[s]):"style"===s?gn(gn({},i[s]),a[s]):a[s]}return t.className&&(i.className=ci(i.className,t.className)),i}(r,t,f),m=h.as||c,g={};for(var x in h)void 0===h[x]||"$"===x[0]||"as"===x||"theme"===x&&h.theme===f||("forwardedAs"===x?g.as=h.forwardedAs:p&&!p(x,m)||(g[x]=h[x]));var y=function(e,t){var n=Ui();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),v=ci(s,l);return y&&(v+=" "+y),h.className&&(v+=" "+h.className),g[Gr(m)&&!Tr.has(m)?"class":"className"]=v,g.ref=n,(0,i.createElement)(m,g)}(b,e,t)}v.displayName=p;var b=i.forwardRef(v);return b.attrs=h,b.componentStyle=y,b.displayName=p,b.shouldForwardProp=m,b.foldedComponentIds=r?ci(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=f,b.target=r?o.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)pi(e,i[r],!0);return e}({},o.defaultProps,e):e}}),fi(b,(function(){return".".concat(b.styledComponentId)})),a&&ai(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function no(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ro=function(e){return Object.assign(e,{isCss:!0})};function io(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(si(e)||di(e))return ro(Qi(no(Rr,xn([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Qi(r):ro(Qi(no(r,t)))}function oo(e,t,n){if(void 0===n&&(n=Or),!t)throw hi(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,io.apply(void 0,xn([r],i,!1)))};return r.attrs=function(r){return oo(e,t,gn(gn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return oo(e,t,gn(gn({},n),r))},r}var ao=function(e){return oo(to,e)},so=ao;Tr.forEach((function(e){so[e]=ao(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Yi(e),Mi.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var i=r(ui(Qi(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Mi.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();var lo;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Ci(),r=ui([n&&'nonce="'.concat(n,'"'),"".concat(wr,'="true"'),"".concat(Sr,'="').concat(Ar,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw hi(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw hi(2);var n=e.instance.toString();if(!n)return[];var r=((t={})[wr]="",t[Sr]=Ar,t.dangerouslySetInnerHTML={__html:n},t),o=Ci();return o&&(r.nonce=o),[i.createElement("style",gn({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Mi({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw hi(2);return i.createElement(Wi,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw hi(3)}})(),"__sc-".concat(wr,"__");function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},co.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(lo||(lo={}));const uo="popstate";function po(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function fo(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(UC){}}}function ho(e,t){return{usr:e.state,key:e.key,idx:t}}function mo(e,t,n,r){return void 0===n&&(n=null),co({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?xo(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function go(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function xo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function yo(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=lo.Pop,l=null,c=u();function u(){return(a.state||{idx:null}).idx}function d(){s=lo.Pop;let e=u(),t=null==e?null:e-c;c=e,l&&l({action:s,location:f.location,delta:t})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:go(e);return n=n.replace(/ $/,"%20"),po(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==c&&(c=0,a.replaceState(co({},a.state,{idx:c}),""));let f={get action(){return s},get location(){return e(i,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(uo,d),l=e,()=>{i.removeEventListener(uo,d),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=lo.Push;let r=mo(f.location,e,t);n&&n(r,e),c=u()+1;let d=ho(r,c),p=f.createHref(r);try{a.pushState(d,"",p)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;i.location.assign(p)}o&&l&&l({action:s,location:f.location,delta:1})},replace:function(e,t){s=lo.Replace;let r=mo(f.location,e,t);n&&n(r,e),c=u();let i=ho(r,c),d=f.createHref(r);a.replaceState(i,"",d),o&&l&&l({action:s,location:f.location,delta:0})},go:e=>a.go(e)};return f}var vo;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(vo||(vo={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function bo(e,t,n){return void 0===n&&(n="/"),wo(e,t,n,!1)}function wo(e,t,n,r){let i=Lo(("string"===typeof t?xo(t):t).pathname||"/",n);if(null==i)return null;let o=ko(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let s=0;null==a&&s<o.length;++s){let e=Io(i);a=zo(o[s],e,r)}return a}function ko(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(po(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let s=_o([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(po(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),ko(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:To(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of So(e.path))i(e,t,r);else i(e,t)})),t}function So(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=So(r.join("/")),s=[];return s.push(...a.map((e=>""===e?o:[o,e].join("/")))),i&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const Ao=/^:[\w-]+$/,jo=3,Co=2,Eo=1,Ro=10,Oo=-2,Po=e=>"*"===e;function To(e,t){let n=e.split("/"),r=n.length;return n.some(Po)&&(r+=Oo),t&&(r+=Co),n.filter((e=>!Po(e))).reduce(((e,t)=>e+(Ao.test(t)?jo:""===t?Eo:Ro)),r)}function zo(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===o?t:t.slice(o.length)||"/",u=Mo({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=Mo({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),a.push({params:i,pathname:_o([o,u.pathname]),pathnameBase:Ho(_o([o,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(o=_o([o,u.pathnameBase]))}return a}function Mo(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);fo("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{});return{params:l,pathname:o,pathnameBase:a,pattern:e}}function Io(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return fo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Lo(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Fo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function No(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function Do(e,t){let n=No(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function Bo(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=xo(e):(i=co({},e),po(!i.pathname||!i.pathname.includes("?"),Fo("?","pathname","search",i)),po(!i.pathname||!i.pathname.includes("#"),Fo("#","pathname","hash",i)),po(!i.search||!i.search.includes("#"),Fo("#","search","hash",i)));let o,a=""===e||""===i.pathname,s=a?"/":i.pathname;if(null==s)o=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?xo(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:Uo(r),hash:Wo(i)}}(i,o),c=s&&"/"!==s&&s.endsWith("/"),u=(a||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}const _o=e=>e.join("/").replace(/\/\/+/g,"/"),Ho=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Uo=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Wo=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function qo(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const Go=["post","put","patch","delete"],Vo=(new Set(Go),["get",...Go]);new Set(Vo),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function Ko(){return Ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ko.apply(this,arguments)}const Jo=i.createContext(null);const Qo=i.createContext(null);const Yo=i.createContext(null);const Zo=i.createContext(null);const Xo=i.createContext({outlet:null,matches:[],isDataRoute:!1});const $o=i.createContext(null);function ea(){return null!=i.useContext(Zo)}function ta(){return ea()||po(!1),i.useContext(Zo).location}function na(e){i.useContext(Yo).static||i.useLayoutEffect(e)}function ra(){let{isDataRoute:e}=i.useContext(Xo);return e?function(){let{router:e}=pa(ua.UseNavigateStable),t=ha(da.UseNavigateStable),n=i.useRef(!1);na((()=>{n.current=!0}));let r=i.useCallback((function(r,i){void 0===i&&(i={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,Ko({fromRouteId:t},i)))}),[e,t]);return r}():function(){ea()||po(!1);let e=i.useContext(Jo),{basename:t,future:n,navigator:r}=i.useContext(Yo),{matches:o}=i.useContext(Xo),{pathname:a}=ta(),s=JSON.stringify(Do(o,n.v7_relativeSplatPath)),l=i.useRef(!1);na((()=>{l.current=!0}));let c=i.useCallback((function(n,i){if(void 0===i&&(i={}),!l.current)return;if("number"===typeof n)return void r.go(n);let o=Bo(n,JSON.parse(s),a,"path"===i.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:_o([t,o.pathname])),(i.replace?r.replace:r.push)(o,i.state,i)}),[t,r,s,a,e]);return c}()}function ia(e,t,n,r){ea()||po(!1);let{navigator:o}=i.useContext(Yo),{matches:a}=i.useContext(Xo),s=a[a.length-1],l=s?s.params:{},c=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let u,d=ta();if(t){var p;let e="string"===typeof t?xo(t):t;"/"===c||(null==(p=e.pathname)?void 0:p.startsWith(c))||po(!1),u=e}else u=d;let f=u.pathname||"/",h=f;if("/"!==c){let e=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=bo(e,{pathname:h});let g=ca(m&&m.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:_o([c,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:_o([c,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),a,n,r);return t&&g?i.createElement(Zo.Provider,{value:{location:Ko({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:lo.Pop}},g):g}function oa(){let e=function(){var e;let t=i.useContext($o),n=fa(da.UseRouteError),r=ha(da.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=qo(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r};return i.createElement(i.Fragment,null,i.createElement("h2",null,"Unexpected Application Error!"),i.createElement("h3",{style:{fontStyle:"italic"}},t),n?i.createElement("pre",{style:o},n):null,null)}const aa=i.createElement(oa,null);class sa extends i.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?i.createElement(Xo.Provider,{value:this.props.routeContext},i.createElement($o.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function la(e){let{routeContext:t,match:n,children:r}=e,o=i.useContext(Jo);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),i.createElement(Xo.Provider,{value:t},r)}function ca(e,t,n,r){var o;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){var a;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(a=r)&&a.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let s=e,l=null==(o=n)?void 0:o.errors;if(null!=l){let e=s.findIndex((e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id])));e>=0||po(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let i=0;i<s.length;i++){let e=s[i];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=i),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){c=!0,s=u>=0?s.slice(0,u+1):[s[0]];break}}}return s.reduceRight(((e,r,o)=>{let a,d=!1,p=null,f=null;var h;n&&(a=l&&r.route.id?l[r.route.id]:void 0,p=r.route.errorElement||aa,c&&(u<0&&0===o?(h="route-fallback",!1||ma[h]||(ma[h]=!0),d=!0,f=null):u===o&&(d=!0,f=r.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,o+1)),g=()=>{let t;return t=a?p:d?f:r.route.Component?i.createElement(r.route.Component,null):r.route.element?r.route.element:e,i.createElement(la,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===o)?i.createElement(sa,{location:n.location,revalidation:n.revalidation,component:p,error:a,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var ua=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ua||{}),da=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(da||{});function pa(e){let t=i.useContext(Jo);return t||po(!1),t}function fa(e){let t=i.useContext(Qo);return t||po(!1),t}function ha(e){let t=function(){let e=i.useContext(Xo);return e||po(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||po(!1),n.route.id}const ma={};o.startTransition;function ga(e){po(!1)}function xa(e){let{basename:t="/",children:n=null,location:r,navigationType:o=lo.Pop,navigator:a,static:s=!1,future:l}=e;ea()&&po(!1);let c=t.replace(/^\/*/,"/"),u=i.useMemo((()=>({basename:c,navigator:a,static:s,future:Ko({v7_relativeSplatPath:!1},l)})),[c,l,a,s]);"string"===typeof r&&(r=xo(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:m="default"}=r,g=i.useMemo((()=>{let e=Lo(d,c);return null==e?null:{location:{pathname:e,search:p,hash:f,state:h,key:m},navigationType:o}}),[c,d,p,f,h,m,o]);return null==g?null:i.createElement(Yo.Provider,{value:u},i.createElement(Zo.Provider,{children:n,value:g}))}function ya(e){let{children:t,location:n}=e;return ia(va(t),n)}new Promise((()=>{}));i.Component;function va(e,t){void 0===t&&(t=[]);let n=[];return i.Children.forEach(e,((e,r)=>{if(!i.isValidElement(e))return;let o=[...t,r];if(e.type===i.Fragment)return void n.push.apply(n,va(e.props.children,o));e.type!==ga&&po(!1),e.props.index&&e.props.children&&po(!1);let a={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=va(e.props.children,o)),n.push(a)})),n}const ba=so.img`
width: 180px;
`,wa=()=>{const e=ta(),t=ra(),[n,r]=(0,i.useState)("home"),[o,a]=(0,i.useState)(!1),[s,l]=(0,i.useState)(!0);(0,i.useEffect)((()=>{const e=()=>{window.scrollY>50?a(!0):a(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const c=e=>{r(e)};return(0,i.useEffect)((()=>{const t=new URLSearchParams(e.search).get("is_logged_in");l("WUVT"!=t)}),[]),(0,g.jsx)(Dt,{expand:"md",className:o?"scrolled":"",children:(0,g.jsxs)(_t,{children:[(0,g.jsx)(Dt.Brand,{href:"/",children:(0,g.jsx)(ba,{src:mn,alt:"Logo"})}),(0,g.jsx)(Dt.Toggle,{"aria-controls":"basic-navbar-nav",children:(0,g.jsx)("span",{className:"navbar-toggler-icon"})}),(0,g.jsxs)(Dt.Collapse,{id:"basic-navbar-nav",className:"mobile",children:[(0,g.jsxs)(hn,{className:"ms-auto",children:[(0,g.jsx)(hn.Link,{href:"/Product.html",className:"Product"===n?"active navbar-link":"navbar-link",onClick:()=>c("Product"),children:"Products"}),(0,g.jsx)(hn.Link,{href:"/pricing.html",className:"Pricing"===n?"active navbar-link":"navbar-link",onClick:()=>c("Pricing"),children:"Pricing"}),(0,g.jsx)(hn.Link,{href:"/aboutUs.html",className:"about"===n?"active navbar-link":"navbar-link",onClick:()=>c("about"),children:"About Us"}),(0,g.jsx)(hn.Link,{href:"/contactUs.html",className:"projects"===n?"active navbar-link":"navbar-link",onClick:()=>c("projects"),children:"Contact Us"})]}),(0,g.jsx)("span",{className:"navbar-text",children:(0,g.jsx)("button",{onClick:()=>{s?window.location.href="https://www.atomwalk.com/login/":t(-1)},className:"vvd",children:s?(0,g.jsx)("span",{children:"Login"}):(0,g.jsx)("span",{children:"Back To Dashboard"})})})]})]})})};n.p;var ka=n(6930);const Sa=n.p+"static/media/Manufacturing-Business-Development-Tips-1024x576.074a46b916689a522875.jpg",Aa=n.p+"static/media/labmangement.ff0cade8676acbeeba14.jpg",ja=n.p+"static/media/chemical.eb8ede543e55d00b0160.png",Ca=n.p+"static/media/consaltant.918ca418601df0f447f2.jpg",Ea=so.div`
  padding: 20px;
  background-color: rgb(255 246 247);
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 50px;
  }
`,Ra=so.div`
  margin-bottom: 40px;
`,Oa=so.h1`
margin-top: 40px;
  font-size: 35px;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,Pa=so.div`
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
`,Ta=so.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 300px;
    margin-right: 30px;
    margin-bottom: 0;
  }
`,za=so.div`
  flex: 1;
`,Ma=so.h2`
  font-size: 24px;
  color: #34495e;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`,Ia=so.p`
  font-size: 16px;
  color: #7f8c8d;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,La=()=>{const e=()=>{window.location.href="/product.html"};return(0,g.jsxs)(Ea,{children:[(0,g.jsx)(Oa,{children:"Streamlining Business Operations"}),(0,g.jsx)(Ra,{children:(0,g.jsxs)(Pa,{onClick:e,style:{backgroundColor:"#F6EAFF"},children:[(0,g.jsx)(Ta,{src:Sa,alt:"Manufacturing Small Business"}),(0,g.jsxs)(za,{children:[(0,g.jsx)(Ma,{children:"Discrete Manufacturing"}),(0,g.jsx)(Ia,{children:"In the manufacturing sector, optimizing production lines, managing supply chains, and maintaining equipment are vital. Implementing systems for real-time monitoring and predictive maintenance can improve productivity and reduce downtime."})]})]})}),(0,g.jsx)(Ra,{children:(0,g.jsxs)(Pa,{onClick:e,style:{backgroundColor:"#EDF5FF"},children:[(0,g.jsx)(Ta,{src:ja,alt:"Chemical Industry"}),(0,g.jsxs)(za,{children:[(0,g.jsx)(Ma,{children:"Process Manufacturing"}),(0,g.jsx)(Ia,{children:"Production process (Recipe Management), Planning, Project/ Work order management, Operational efficiency, Inventory (Batch expiry tracking)/ Warehouse management, CRM, Accounting and Finan- cial management, Supplier and Purchase Order management."})]})]})}),(0,g.jsx)(Ra,{children:(0,g.jsxs)(Pa,{onClick:e,style:{backgroundColor:"#FFEADF"},children:[(0,g.jsx)(Ta,{src:Ca,alt:"Consultancy Business"}),(0,g.jsxs)(za,{children:[(0,g.jsx)(Ma,{children:"Consultancy, Services, Trading & NGOs"}),(0,g.jsx)(Ia,{children:"Effective project management ensures timely completion of tasks, optimizing resources and teamwork. Operational efficiency focuses on streamlining processes for maximum productivity. Integrated systems for CRM, accounting, financial management, and supplier/purchase order management enhance decision-making, track finances, and ensure smooth supplier relations."})]})]})}),(0,g.jsx)(Ra,{children:(0,g.jsxs)(Pa,{onClick:()=>{window.location.href="/lms.html"},style:{backgroundColor:"#E1FFF6"},children:[(0,g.jsx)(Ta,{src:Aa,alt:"Lab Management System"}),(0,g.jsxs)(za,{children:[(0,g.jsx)(Ma,{children:"Lab Management"}),(0,g.jsx)(Ia,{children:"Research and Development (R & D) Labs in companies/ Universities - Grant management, Operational efficiency chemical consumption, Lab equipment management, Supplier and Purchase order management, Lab report/ documentation."})]})]})})]})},Fa=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:i="div",...o}=e;const a=k(n,"row"),s=S(),c=A(),u=`${a}-cols`,d=[];return s.forEach((e=>{const t=o[e];let n;delete o[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const r=e!==c?`-${e}`:"";null!=n&&d.push(`${u}${r}-${n}`)})),(0,g.jsx)(i,{ref:t,...o,className:l()(r,a,...d)})}));Fa.displayName="Row";const Na=Fa;const Da=i.forwardRef(((e,t)=>{const[{className:n,...r},{as:i="div",bsPrefix:o,spans:a}]=function(e){let{as:t,bsPrefix:n,className:r,...i}=e;n=k(n,"col");const o=S(),a=A(),s=[],c=[];return o.forEach((e=>{const t=i[e];let r,o,l;delete i[e],"object"===typeof t&&null!=t?({span:r,offset:o,order:l}=t):r=t;const u=e!==a?`-${e}`:"";r&&s.push(!0===r?`${n}${u}`:`${n}${u}-${r}`),null!=l&&c.push(`order${u}-${l}`),null!=o&&c.push(`offset${u}-${o}`)})),[{...i,className:l()(r,...s,...c)},{as:t,bsPrefix:n,spans:s}]}(e);return(0,g.jsx)(i,{...r,ref:t,className:l()(n,!a.length&&o)})}));Da.displayName="Col";const Ba=Da,_a=n.p+"static/media/Default_A_bustling_industrial_scene_depicting_modern_manufactu_1.ed533c9382af58022d54.jpg",Ha=n.p+"static/media/Management.6fb154b54ae761338aa3.jpg",Ua=n.p+"static/media/Hrandpayroll.9310263d77fde3406330.jpg",Wa=n.p+"static/media/Designer.d544d66eb8011e427ca3.png",qa=n.p+"static/media/Accountandf.84a96a15feb6344a4f22.png",Ga=n.p+"static/media/projectmangement.49b30c1477fc99ca756d.png",Va=(so.div`
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

`),Ka=so.div`
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
`,Ja=(so.div`
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
`),Qa=so.h3`
  font-size: 1.5em;
  color: #333;
`,Ya=so.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 20px;
  width: 80%;
`,Za=so.a`
  font-size: 1em;
  color: #ea5c49; /* Purple color */
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: #ee442d;
  }
`,Xa=e=>{var t,n,r;const i=e=>{window.location.href="HR & Payroll"==e?"/hrm.html":"Customer Management"==e?"/crm.html":"/product.html"};return(0,g.jsx)(Ba,{style:{margin:"-2px"},size:5,sm:6,md:4,children:(0,g.jsx)(Va,{onClick:()=>{var t;return i(null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.title)},children:(0,g.jsxs)(Ka,{color:null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.background,children:[(0,g.jsx)(Ja,{src:e.image,alt:"greytHR Academy"}),(0,g.jsx)(Qa,{children:null===e||void 0===e||null===(n=e.project)||void 0===n?void 0:n.title}),(0,g.jsx)(Ya,{children:null===e||void 0===e||null===(r=e.project)||void 0===r?void 0:r.description}),(0,g.jsx)(Za,{onClick:()=>{var t;return i(null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.title)},children:"Know More"})]})})})},$a=(so.div`
  width: 100%;
  height: 100vh;
`,()=>{const e=[{title:"Manufacturing Operations",description:"Efficiently manage your manufacturing operations with Atomwalk Office",imgUrl:_a,background:"#fff8e6"},{title:"Inventory Management",description:"Take control of your inventory with Atomwalk Office",imgUrl:Ha,background:"#EEFAF4"},{title:"HR & Payroll",description:"Effortlessly handle HR and payroll tasks with Atomwalk Office",imgUrl:Ua,background:"#e6ffff"},{title:"Customer Management",description:"Deliver exceptional customer service and boost sales with Atomwalk Office",imgUrl:Wa,background:"#EEFAF4"},{title:"Accounting & Financials",description:"Manage your accounting and financials seamlessly with Atomwalk Office",imgUrl:qa,background:"#e6ffff"},{title:"Project Management",description:"Make informed decisions based on real-time information and analytics provided by Atomwalk Office",imgUrl:Ga,background:"#fff8e6"}];return(0,g.jsx)("section",{className:"project",id:"projects",children:(0,g.jsxs)(_t,{children:[(0,g.jsx)("h2",{children:"Comprehensive Business Management Solution"}),(0,g.jsx)("p",{children:"Streamline your business with Atomwalk Office's key features: Manufacturing Operations Management for optimized production and quality control, Purchasing & Inventory Management for precise supply chain oversight, Sales & Customer Service tools to boost sales and enhance customer relationships, Warehousing Solutions for efficient inventory tracking and automation, Accounting & Financials for thorough financial oversight, and a Complete HR Suite Including Payroll for seamless workforce management."}),(0,g.jsx)(Na,{children:(0,g.jsx)(Ba,{size:12,children:(0,g.jsx)(Na,{children:e.map(((e,t)=>(0,g.jsx)(Xa,{project:e,image:e.imgUrl},t)))})})})]})})});const es=n.p+"static/media/contact-img.87eac2b29352fa01abb2f9510ef6ac7e.svg";var ts=n(9834),ns=n.n(ts),rs=n(8178),is=n.n(rs);const os=function(e){var t=e.status,n=e.message,r=e.className,o=e.style,a=e.onSubmitted,s=void 0;return i.createElement("div",{className:r,style:o},"sending"===t&&i.createElement("div",{style:{color:"blue"}},"sending..."),"error"===t&&i.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:n}}),"success"===t&&i.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:n}}),i.createElement("input",{ref:function(e){return s=e},type:"email",placeholder:"Your email"}),i.createElement("button",{onClick:function(){return s&&s.value.indexOf("@")>-1&&a({EMAIL:s.value})}},"Submit"))};function as(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var ss=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];return n=r=as(this,e.call.apply(e,[this].concat(o))),r.state={status:null,message:null},r.subscribe=function(e){var t=is()(e),n=function(e){return e.replace("/post?","/post-json?")}(r.props.url)+"&"+t;r.setState({status:"sending",message:null},(function(){return ns()(n,{param:"c"},(function(e,t){e?r.setState({status:"error",message:e}):"success"!==t.result?r.setState({status:"error",message:t.msg}):r.setState({status:"success",message:t.msg})}))}))},as(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return this.props.render({subscribe:this.subscribe,status:this.state.status,message:this.state.message})},t}(i.Component);ss.propTypes={},ss.defaultProps={render:function(e){var t=e.subscribe,n=e.status,r=e.message;return i.createElement(os,{status:n,message:r,onSubmitted:function(e){return t(e)}})}};function ls(e,t){return function(){return e.apply(t,arguments)}}const{toString:cs}=Object.prototype,{getPrototypeOf:us}=Object,ds=(ps=Object.create(null),e=>{const t=cs.call(e);return ps[t]||(ps[t]=t.slice(8,-1).toLowerCase())});var ps;const fs=e=>(e=e.toLowerCase(),t=>ds(t)===e),hs=e=>t=>typeof t===e,{isArray:ms}=Array,gs=hs("undefined");const xs=fs("ArrayBuffer");const ys=hs("string"),vs=hs("function"),bs=hs("number"),ws=e=>null!==e&&"object"===typeof e,ks=e=>{if("object"!==ds(e))return!1;const t=us(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ss=fs("Date"),As=fs("File"),js=fs("Blob"),Cs=fs("FileList"),Es=fs("URLSearchParams"),[Rs,Os,Ps,Ts]=["ReadableStream","Request","Response","Headers"].map(fs);function zs(e,t){let n,r,{allOwnKeys:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),ms(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=i?Object.getOwnPropertyNames(e):Object.keys(e),o=r.length;let a;for(n=0;n<o;n++)a=r[n],t.call(null,e[a],a,e)}}function Ms(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const Is="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,Ls=e=>!gs(e)&&e!==Is;const Fs=(Ns="undefined"!==typeof Uint8Array&&us(Uint8Array),e=>Ns&&e instanceof Ns);var Ns;const Ds=fs("HTMLFormElement"),Bs=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),_s=fs("RegExp"),Hs=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};zs(n,((n,i)=>{let o;!1!==(o=t(n,i,e))&&(r[i]=o||n)})),Object.defineProperties(e,r)},Us="abcdefghijklmnopqrstuvwxyz",Ws="0123456789",qs={DIGIT:Ws,ALPHA:Us,ALPHA_DIGIT:Us+Us.toUpperCase()+Ws};const Gs=fs("AsyncFunction"),Vs=(Ks="function"===typeof setImmediate,Js=vs(Is.postMessage),Ks?setImmediate:Js?((e,t)=>(Is.addEventListener("message",(n=>{let{source:r,data:i}=n;r===Is&&i===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),Is.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var Ks,Js;const Qs="undefined"!==typeof queueMicrotask?queueMicrotask.bind(Is):"undefined"!==typeof process&&process.nextTick||Vs,Ys={isArray:ms,isArrayBuffer:xs,isBuffer:function(e){return null!==e&&!gs(e)&&null!==e.constructor&&!gs(e.constructor)&&vs(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||vs(e.append)&&("formdata"===(t=ds(e))||"object"===t&&vs(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&xs(e.buffer),t},isString:ys,isNumber:bs,isBoolean:e=>!0===e||!1===e,isObject:ws,isPlainObject:ks,isReadableStream:Rs,isRequest:Os,isResponse:Ps,isHeaders:Ts,isUndefined:gs,isDate:Ss,isFile:As,isBlob:js,isRegExp:_s,isFunction:vs,isStream:e=>ws(e)&&vs(e.pipe),isURLSearchParams:Es,isTypedArray:Fs,isFileList:Cs,forEach:zs,merge:function e(){const{caseless:t}=Ls(this)&&this||{},n={},r=(r,i)=>{const o=t&&Ms(n,i)||i;ks(n[o])&&ks(r)?n[o]=e(n[o],r):ks(r)?n[o]=e({},r):ms(r)?n[o]=r.slice():n[o]=r};for(let i=0,o=arguments.length;i<o;i++)arguments[i]&&zs(arguments[i],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return zs(t,((t,r)=>{n&&vs(t)?e[r]=ls(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],r&&!r(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==n&&us(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:ds,kindOfTest:fs,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(ms(e))return e;let t=e.length;if(!bs(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Ds,hasOwnProperty:Bs,hasOwnProp:Bs,reduceDescriptors:Hs,freezeMethods:e=>{Hs(e,((t,n)=>{if(vs(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];vs(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return ms(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Ms,global:Is,isContextDefined:Ls,ALPHABET:qs,generateString:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qs.ALPHA_DIGIT,n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&vs(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(ws(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=ms(e)?[]:{};return zs(e,((e,t)=>{const o=n(e,r+1);!gs(o)&&(i[t]=o)})),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:Gs,isThenable:e=>e&&(ws(e)||vs(e))&&vs(e.then)&&vs(e.catch),setImmediate:Vs,asap:Qs};function Zs(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}Ys.inherits(Zs,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Ys.toJSONObject(this.config),code:this.code,status:this.status}}});const Xs=Zs.prototype,$s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{$s[e]={value:e}})),Object.defineProperties(Zs,$s),Object.defineProperty(Xs,"isAxiosError",{value:!0}),Zs.from=(e,t,n,r,i,o)=>{const a=Object.create(Xs);return Ys.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Zs.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const el=Zs;function tl(e){return Ys.isPlainObject(e)||Ys.isArray(e)}function nl(e){return Ys.endsWith(e,"[]")?e.slice(0,-2):e}function rl(e,t,n){return e?e.concat(t).map((function(e,t){return e=nl(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const il=Ys.toFlatObject(Ys,{},null,(function(e){return/^is[A-Z]/.test(e)}));const ol=function(e,t,n){if(!Ys.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=Ys.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Ys.isUndefined(t[e])}))).metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,s=(n.Blob||"undefined"!==typeof Blob&&Blob)&&Ys.isSpecCompliantForm(t);if(!Ys.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Ys.isDate(e))return e.toISOString();if(!s&&Ys.isBlob(e))throw new el("Blob is not supported. Use a Buffer instead.");return Ys.isArrayBuffer(e)||Ys.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,i){let s=e;if(e&&!i&&"object"===typeof e)if(Ys.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Ys.isArray(e)&&function(e){return Ys.isArray(e)&&!e.some(tl)}(e)||(Ys.isFileList(e)||Ys.endsWith(n,"[]"))&&(s=Ys.toArray(e)))return n=nl(n),s.forEach((function(e,r){!Ys.isUndefined(e)&&null!==e&&t.append(!0===a?rl([n],r,o):null===a?n:n+"[]",l(e))})),!1;return!!tl(e)||(t.append(rl(i,n,o),l(e)),!1)}const u=[],d=Object.assign(il,{defaultVisitor:c,convertValue:l,isVisitable:tl});if(!Ys.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!Ys.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),Ys.forEach(n,(function(n,o){!0===(!(Ys.isUndefined(n)||null===n)&&i.call(t,n,Ys.isString(o)?o.trim():o,r,d))&&e(n,r?r.concat(o):[o])})),u.pop()}}(e),t};function al(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function sl(e,t){this._pairs=[],e&&ol(e,this,t)}const ll=sl.prototype;ll.append=function(e,t){this._pairs.push([e,t])},ll.toString=function(e){const t=e?function(t){return e.call(this,t,al)}:al;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const cl=sl;function ul(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function dl(e,t,n){if(!t)return e;const r=n&&n.encode||ul,i=n&&n.serialize;let o;if(o=i?i(t,n):Ys.isURLSearchParams(t)?t.toString():new cl(t,n).toString(r),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}const pl=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Ys.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},fl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},hl={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:cl,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ml="undefined"!==typeof window&&"undefined"!==typeof document,gl="object"===typeof navigator&&navigator||void 0,xl=ml&&(!gl||["ReactNative","NativeScript","NS"].indexOf(gl.product)<0),yl="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,vl=ml&&window.location.href||"http://localhost",bl={...e,...hl};const wl=function(e){function t(e,n,r,i){let o=e[i++];if("__proto__"===o)return!0;const a=Number.isFinite(+o),s=i>=e.length;if(o=!o&&Ys.isArray(r)?r.length:o,s)return Ys.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!a;r[o]&&Ys.isObject(r[o])||(r[o]=[]);return t(e,n,r[o],i)&&Ys.isArray(r[o])&&(r[o]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}(r[o])),!a}if(Ys.isFormData(e)&&Ys.isFunction(e.entries)){const n={};return Ys.forEachEntry(e,((e,r)=>{t(function(e){return Ys.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const kl={transitional:fl,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=Ys.isObject(e);i&&Ys.isHTMLForm(e)&&(e=new FormData(e));if(Ys.isFormData(e))return r?JSON.stringify(wl(e)):e;if(Ys.isArrayBuffer(e)||Ys.isBuffer(e)||Ys.isStream(e)||Ys.isFile(e)||Ys.isBlob(e)||Ys.isReadableStream(e))return e;if(Ys.isArrayBufferView(e))return e.buffer;if(Ys.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ol(e,new bl.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return bl.isNode&&Ys.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((o=Ys.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ol(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(Ys.isString(e))try{return(t||JSON.parse)(e),Ys.trim(e)}catch(UC){if("SyntaxError"!==UC.name)throw UC}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||kl.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(Ys.isResponse(e)||Ys.isReadableStream(e))return e;if(e&&Ys.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(UC){if(n){if("SyntaxError"===UC.name)throw el.from(UC,el.ERR_BAD_RESPONSE,this,null,this.response);throw UC}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:bl.classes.FormData,Blob:bl.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Ys.forEach(["delete","get","head","post","put","patch"],(e=>{kl.headers[e]={}}));const Sl=kl,Al=Ys.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jl=Symbol("internals");function Cl(e){return e&&String(e).trim().toLowerCase()}function El(e){return!1===e||null==e?e:Ys.isArray(e)?e.map(El):String(e)}function Rl(e,t,n,r,i){return Ys.isFunction(r)?r.call(this,t,n):(i&&(t=n),Ys.isString(t)?Ys.isString(r)?-1!==t.indexOf(r):Ys.isRegExp(r)?r.test(t):void 0:void 0)}class Ol{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=Cl(t);if(!i)throw new Error("header name must be a non-empty string");const o=Ys.findKey(r,i);(!o||void 0===r[o]||!0===n||void 0===n&&!1!==r[o])&&(r[o||t]=El(e))}const o=(e,t)=>Ys.forEach(e,((e,n)=>i(e,n,t)));if(Ys.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(Ys.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))o((e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&Al[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(Ys.isHeaders(e))for(const[a,s]of e.entries())i(s,a,n);else null!=e&&i(t,e,n);return this}get(e,t){if(e=Cl(e)){const n=Ys.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(Ys.isFunction(t))return t.call(this,e,n);if(Ys.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Cl(e)){const n=Ys.findKey(this,e);return!(!n||void 0===this[n]||t&&!Rl(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=Cl(e)){const i=Ys.findKey(n,e);!i||t&&!Rl(0,n[i],i,t)||(delete n[i],r=!0)}}return Ys.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!Rl(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return Ys.forEach(this,((r,i)=>{const o=Ys.findKey(n,i);if(o)return t[o]=El(r),void delete t[i];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();a!==i&&delete t[i],t[a]=El(r),n[a]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return Ys.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Ys.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[jl]=this[jl]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Cl(e);t[r]||(!function(e,t){const n=Ys.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return Ys.isArray(e)?e.forEach(r):r(e),this}}Ol.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Ys.reduceDescriptors(Ol.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),Ys.freezeMethods(Ol);const Pl=Ol;function Tl(e,t){const n=this||Sl,r=t||n,i=Pl.from(r.headers);let o=r.data;return Ys.forEach(e,(function(e){o=e.call(n,o,i.normalize(),t?t.status:void 0)})),i.normalize(),o}function zl(e){return!(!e||!e.__CANCEL__)}function Ml(e,t,n){el.call(this,null==e?"canceled":e,el.ERR_CANCELED,t,n),this.name="CanceledError"}Ys.inherits(Ml,el,{__CANCEL__:!0});const Il=Ml;function Ll(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new el("Request failed with status code "+n.status,[el.ERR_BAD_REQUEST,el.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const Fl=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,o=0,a=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=r[a];i||(i=l),n[o]=s,r[o]=l;let u=a,d=0;for(;u!==o;)d+=n[u++],u%=e;if(o=(o+1)%e,o===a&&(a=(a+1)%e),l-i<t)return;const p=c&&l-c;return p?Math.round(1e3*d/p):void 0}};const Nl=function(e,t){let n,r,i=0,o=1e3/t;const a=function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();i=o,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-i;for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];t>=o?a(l,e):(n=l,r||(r=setTimeout((()=>{r=null,a(n)}),o-t)))},()=>n&&a(n)]},Dl=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const i=Fl(50,250);return Nl((n=>{const o=n.loaded,a=n.lengthComputable?n.total:void 0,s=o-r,l=i(s);r=o;e({loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&o<=a?(a-o)/l:void 0,event:n,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),n)},Bl=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},_l=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Ys.asap((()=>e(...n)))},Hl=bl.hasStandardBrowserEnv?function(){const e=bl.navigator&&/(msie|trident)/i.test(bl.navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=Ys.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0},Ul=bl.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const a=[e+"="+encodeURIComponent(t)];Ys.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),Ys.isString(r)&&a.push("path="+r),Ys.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Wl(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const ql=e=>e instanceof Pl?{...e}:e;function Gl(e,t){t=t||{};const n={};function r(e,t,n){return Ys.isPlainObject(e)&&Ys.isPlainObject(t)?Ys.merge.call({caseless:n},e,t):Ys.isPlainObject(t)?Ys.merge({},t):Ys.isArray(t)?t.slice():t}function i(e,t,n){return Ys.isUndefined(t)?Ys.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function o(e,t){if(!Ys.isUndefined(t))return r(void 0,t)}function a(e,t){return Ys.isUndefined(t)?Ys.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,i,o){return o in t?r(n,i):o in e?r(void 0,n):void 0}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t)=>i(ql(e),ql(t),!0)};return Ys.forEach(Object.keys(Object.assign({},e,t)),(function(r){const o=l[r]||i,a=o(e[r],t[r],r);Ys.isUndefined(a)&&o!==s||(n[r]=a)})),n}const Vl=e=>{const t=Gl({},e);let n,{data:r,withXSRFToken:i,xsrfHeaderName:o,xsrfCookieName:a,headers:s,auth:l}=t;if(t.headers=s=Pl.from(s),t.url=dl(Wl(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),Ys.isFormData(r))if(bl.hasStandardBrowserEnv||bl.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(n=s.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(bl.hasStandardBrowserEnv&&(i&&Ys.isFunction(i)&&(i=i(t)),i||!1!==i&&Hl(t.url))){const e=o&&a&&Ul.read(a);e&&s.set(o,e)}return t},Kl="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Vl(e);let i=r.data;const o=Pl.from(r.headers).normalize();let a,s,l,c,u,{responseType:d,onUploadProgress:p,onDownloadProgress:f}=r;function h(){c&&c(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(a),r.signal&&r.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=Pl.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());Ll((function(e){t(e),h()}),(function(e){n(e),h()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new el("Request aborted",el.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new el("Network Error",el.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const i=r.transitional||fl;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new el(t,i.clarifyTimeoutError?el.ETIMEDOUT:el.ECONNABORTED,e,m)),m=null},void 0===i&&o.setContentType(null),"setRequestHeader"in m&&Ys.forEach(o.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),Ys.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),d&&"json"!==d&&(m.responseType=r.responseType),f&&([l,u]=Dl(f,!0),m.addEventListener("progress",l)),p&&m.upload&&([s,c]=Dl(p),m.upload.addEventListener("progress",s),m.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(a=t=>{m&&(n(!t||t.type?new Il(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(a),r.signal&&(r.signal.aborted?a():r.signal.addEventListener("abort",a)));const x=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);x&&-1===bl.protocols.indexOf(x)?n(new el("Unsupported protocol "+x+":",el.ERR_BAD_REQUEST,e)):m.send(i||null)}))},Jl=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const i=function(e){if(!n){n=!0,a();const t=e instanceof Error?e:this.reason;r.abort(t instanceof el?t:new Il(t instanceof Error?t.message:t))}};let o=t&&setTimeout((()=>{o=null,i(new el(`timeout ${t} of ms exceeded`,el.ETIMEDOUT))}),t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener("abort",i)})),e=null)};e.forEach((e=>e.addEventListener("abort",i)));const{signal:s}=r;return s.unsubscribe=()=>Ys.asap(a),s}},Ql=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,i=0;for(;i<n;)r=i+t,yield e.slice(i,r),i=r},Yl=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Zl=(e,t,n,r)=>{const i=async function*(e,t){for await(const n of Yl(e))yield*Ql(n,t)}(e,t);let o,a=0,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await i.next();if(t)return s(),void e.close();let o=r.byteLength;if(n){let e=a+=o;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw s(t),t}},cancel:e=>(s(e),i.return())},{highWaterMark:2})},Xl="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,$l=Xl&&"function"===typeof ReadableStream,ec=Xl&&("function"===typeof TextEncoder?(tc=new TextEncoder,e=>tc.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var tc;const nc=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(UC){return!1}},rc=$l&&nc((()=>{let e=!1;const t=new Request(bl.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),ic=$l&&nc((()=>Ys.isReadableStream(new Response("").body))),oc={stream:ic&&(e=>e.body)};var ac;Xl&&(ac=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!oc[e]&&(oc[e]=Ys.isFunction(ac[e])?t=>t[e]():(t,n)=>{throw new el(`Response type '${e}' is not supported`,el.ERR_NOT_SUPPORT,n)})})));const sc=async(e,t)=>{const n=Ys.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(Ys.isBlob(e))return e.size;if(Ys.isSpecCompliantForm(e)){const t=new Request(bl.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Ys.isArrayBufferView(e)||Ys.isArrayBuffer(e)?e.byteLength:(Ys.isURLSearchParams(e)&&(e+=""),Ys.isString(e)?(await ec(e)).byteLength:void 0)})(t):n},lc=Xl&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:p}=Vl(e);c=c?(c+"").toLowerCase():"text";let f,h=Jl([i,o&&o.toAbortSignal()],a);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(l&&rc&&"get"!==n&&"head"!==n&&0!==(g=await sc(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(Ys.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=Bl(g,Dl(_l(l)));r=Zl(n.body,65536,e,t)}}Ys.isString(d)||(d=d?"include":"omit");const i="credentials"in Request.prototype;f=new Request(t,{...p,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:i?d:void 0});let o=await fetch(f);const a=ic&&("stream"===c||"response"===c);if(ic&&(s||a&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=o[t]}));const t=Ys.toFiniteNumber(o.headers.get("content-length")),[n,r]=s&&Bl(t,Dl(_l(s),!0))||[];o=new Response(Zl(o.body,65536,n,(()=>{r&&r(),m&&m()})),e)}c=c||"text";let x=await oc[Ys.findKey(oc,c)||"text"](o,e);return!a&&m&&m(),await new Promise(((t,n)=>{Ll(t,n,{data:x,headers:Pl.from(o.headers),status:o.status,statusText:o.statusText,config:e,request:f})}))}catch(x){if(m&&m(),x&&"TypeError"===x.name&&/fetch/i.test(x.message))throw Object.assign(new el("Network Error",el.ERR_NETWORK,e,f),{cause:x.cause||x});throw el.from(x,x&&x.code,e,f)}}),cc={http:null,xhr:Kl,fetch:lc};Ys.forEach(cc,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(UC){}Object.defineProperty(e,"adapterName",{value:t})}}));const uc=e=>`- ${e}`,dc=e=>Ys.isFunction(e)||null===e||!1===e,pc=e=>{e=Ys.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){let t;if(n=e[o],r=n,!dc(n)&&(r=cc[(t=String(n)).toLowerCase()],void 0===r))throw new el(`Unknown adapter '${t}'`);if(r)break;i[t||"#"+o]=r}if(!r){const e=Object.entries(i).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let n=t?e.length>1?"since :\n"+e.map(uc).join("\n"):" "+uc(e[0]):"as no adapter specified";throw new el("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function fc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Il(null,e)}function hc(e){fc(e),e.headers=Pl.from(e.headers),e.data=Tl.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return pc(e.adapter||Sl.adapter)(e).then((function(t){return fc(e),t.data=Tl.call(e,e.transformResponse,t),t.headers=Pl.from(t.headers),t}),(function(t){return zl(t)||(fc(e),t&&t.response&&(t.response.data=Tl.call(e,e.transformResponse,t.response),t.response.headers=Pl.from(t.response.headers))),Promise.reject(t)}))}const mc="1.7.7",gc={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{gc[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const xc={};gc.transitional=function(e,t,n){function r(e,t){return"[Axios v1.7.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,o)=>{if(!1===e)throw new el(r(i," has been removed"+(t?" in "+t:"")),el.ERR_DEPRECATED);return t&&!xc[i]&&(xc[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,o)}};const yc={assertOptions:function(e,t,n){if("object"!==typeof e)throw new el("options must be an object",el.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const t=e[o],n=void 0===t||a(t,o,e);if(!0!==n)throw new el("option "+o+" must be "+n,el.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new el("Unknown option "+o,el.ERR_BAD_OPTION)}},validators:gc},vc=yc.validators;class bc{constructor(e){this.defaults=e,this.interceptors={request:new pl,response:new pl}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(UC){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Gl(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;void 0!==n&&yc.assertOptions(n,{silentJSONParsing:vc.transitional(vc.boolean),forcedJSONParsing:vc.transitional(vc.boolean),clarifyTimeoutError:vc.transitional(vc.boolean)},!1),null!=r&&(Ys.isFunction(r)?t.paramsSerializer={serialize:r}:yc.assertOptions(r,{encode:vc.function,serialize:vc.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=i&&Ys.merge(i.common,i[t.method]);i&&Ys.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=Pl.concat(o,i);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!s){const e=[hc.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=a.length;let p=t;for(d=0;d<u;){const e=a[d++],t=a[d++];try{p=e(p)}catch(f){t.call(this,f);break}}try{c=hc.call(this,p)}catch(f){return Promise.reject(f)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return dl(Wl((e=Gl(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}Ys.forEach(["delete","get","head","options"],(function(e){bc.prototype[e]=function(t,n){return this.request(Gl(n||{},{method:e,url:t,data:(n||{}).data}))}})),Ys.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(Gl(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}bc.prototype[e]=t(),bc.prototype[e+"Form"]=t(!0)}));const wc=bc;class kc{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new Il(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new kc((function(t){e=t})),cancel:e}}}const Sc=kc;const Ac={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ac).forEach((e=>{let[t,n]=e;Ac[n]=t}));const jc=Ac;const Cc=function e(t){const n=new wc(t),r=ls(wc.prototype.request,n);return Ys.extend(r,wc.prototype,n,{allOwnKeys:!0}),Ys.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Gl(t,n))},r}(Sl);Cc.Axios=wc,Cc.CanceledError=Il,Cc.CancelToken=Sc,Cc.isCancel=zl,Cc.VERSION=mc,Cc.toFormData=ol,Cc.AxiosError=el,Cc.Cancel=Cc.CanceledError,Cc.all=function(e){return Promise.all(e)},Cc.spread=function(e){return function(t){return e.apply(null,t)}},Cc.isAxiosError=function(e){return Ys.isObject(e)&&!0===e.isAxiosError},Cc.mergeConfig=Gl,Cc.AxiosHeaders=Pl,Cc.formToJSON=e=>wl(Ys.isHTMLForm(e)?new FormData(e):e),Cc.getAdapter=pc,Cc.HttpStatusCode=jc,Cc.default=Cc;const Ec=Cc,Rc=e=>{let{setShowsuccess:t}=e,n=new Date;const r={name:"",company_name:"",task_name:"",mobile_number:"",email_id:"",add_task:"N",task_type:"Get In Touch",task_date:`${("0"+n.getDate()).slice(-2)}-${("0"+(n.getMonth()+1)).slice(-2)}-${n.getFullYear()}`},[o,a]=(0,i.useState)(r),[s,l]=(0,i.useState)("Send"),[c,u]=(0,i.useState)({});console.log(o,"look at ne");const d=(e,t)=>{a({...o,[e]:t})},p=e=>(e.preventDefault(),l("Sending..."),f("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:o})),f=async(e,n)=>{try{let i=localStorage.getItem("apiResponse"),o=JSON.parse(i);if(!i)throw new Error("Token not found, please login.");const s=Ec.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${o.key}`}});200==(await s.post(e,n)).status&&(l("Send"),a(r),t(!0))}catch(i){console.log("Error making authenticated API call:",i),l("Send"),a(r)}};return(0,g.jsx)("section",{className:"contact",id:"connect",children:(0,g.jsx)(_t,{children:(0,g.jsxs)(Na,{className:"align-items-center",children:[(0,g.jsx)(Ba,{size:12,md:6,children:(0,g.jsx)(ka.A,{children:e=>{let{isVisible:t}=e;return(0,g.jsx)("img",{className:t?"animate__animated animate__zoomIn":"",src:es,alt:"Contact Us"})}})}),(0,g.jsx)(Ba,{size:12,md:6,children:(0,g.jsx)(ka.A,{children:e=>{let{isVisible:t}=e;return(0,g.jsxs)("div",{className:t?"animate__animated animate__fadeIn":"",children:[(0,g.jsx)("h2",{children:"Get In Touch"}),(0,g.jsx)("form",{onSubmit:p,children:(0,g.jsxs)(Na,{children:[(0,g.jsx)(Ba,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"text",value:o.name,placeholder:"First Name",onChange:e=>d("name",e.target.value)})}),(0,g.jsx)(Ba,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"text",value:o.company_name,placeholder:"Company Name",onChange:e=>d("company_name",e.target.value)})}),(0,g.jsx)(Ba,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"email",value:o.email_id,placeholder:"Email Address",onChange:e=>d("email_id",e.target.value)})}),(0,g.jsx)(Ba,{size:12,sm:6,className:"px-1",children:(0,g.jsx)("input",{type:"tel",value:o.mobile_number,placeholder:"Phone No.",onChange:e=>d("mobile_number",e.target.value)})}),(0,g.jsxs)(Ba,{size:12,className:"px-1",children:[(0,g.jsx)("textarea",{rows:"6",value:o.task_name,placeholder:"Message",onChange:e=>d("task_name",e.target.value)}),(0,g.jsx)("button",{type:"submit",children:(0,g.jsx)("span",{children:s})})]}),c.message&&(0,g.jsx)(Ba,{children:(0,g.jsx)("p",{className:!1===c.success?"danger":"success",children:c.message})})]})})]})}})})]})})})};var Oc=n(2963),Pc=n.n(Oc);const Tc=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #caf0f8;
`,zc=so.h1`
  font-size: 3.2em;
  margin-bottom: 100px;
  text-align: center;
  color: #2c3e50;
`,Mc=so.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
`,Ic=so.div`
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
`,Lc=so.div`
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
`,Fc=so.h2`
  font-size: 2em;
  margin: 20px 0;
  font-weight: 800;
  color: #000933;
`,Nc=so.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`,Dc=so.li`
  margin: 10px 0;
  cursor: ${e=>e.clickable?"pointer":"default"};
  &::before {
    content: "${e=>e.valid?"\u2713":"\u2717"}";
    margin-right: 10px;
    color: ${e=>e.valid?"green":"red"};
  }
`,Bc=so.div`
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
`,_c=so.p`
  font-weight: 500;
`,Hc=so.button`
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
`,Uc=so.div`
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
`,Wc=so.div`
  font-size: 1.1em;
`,qc=so.button`
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
`,Gc=so.span`
  font-size: 1.5em;
  color: #454545;
  cursor: pointer;
`,Vc=so.ul`
  list-style-type: none;
  margin-top: 10px;
  padding-left: 20px;
  color: #6b37d1;
`,Kc={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px",padding:"40px",overflow:"auto",maxHeight:"80vh"},overlay:{zIndex:"32333"}},Jc=[{name:"Project Management",features:["Project Activity Allocation Tracking"," Project Activity Dependency (Critical Patch)"," Schedule Tracking","Item Cost and Effort Tracking","Efficiency tracking at Activity","Project Documents, Alert management","Integration with Procurement and PO","Integration with Inventory Allocation, Wastage and Release"]},{name:"Inventory Management",features:["Item Category and Group","Inventory Item and Service Item","Item Supplier management","Multiple locations","Multiple Units","Warehouse management (Bin Locations)","Item Serial Number handling","Item physical inspection and open balance","Item min order qty and Expiry date tracking"]},{name:"Sales and Procurement",features:["Sales order, quotation, proforma invoice","Tax Invoice","Payment, GST Tracking, TDS handling","Return, Credit note handling","Purchase Order, Purchase requests","Goods Receipt (GRN)","Goods Return/Shortage/ Debit Note","Purchase Service Order, TDS handling"]},{name:"Customer Management( CRM)",features:["Customer Details","Customer Sales/Payments Tracking (Bank/TDS)","Agreements","Customer Type/ Group"]},{name:"HR & Payroll",features:["Employee Hire to Exit","Leave & Attendance","Travel & Expenses","Salary & Payroll","Advances","Claim Settlement"]},{name:"Bank Reconciliation",features:["Bank Statement Upload","Account Reconciliation with Sales and PO","Rule based reconciliation of Expenses","Bank statement View","Reconciled statement view","Bank, Exchange rate setup"]},{name:"Financial Accounting",features:["Sales report (Period/Party/Outstanding)","Purchase Reports","Inventory (opening and closing stock)","Inventory Valuation","Financial Reports (P&L Balance sheet, Cash flow, Change in Equity","Aging/ DSO","Depreciation Schedule"]},{name:"Reports and Dashboard",features:["Manager Dashboard","Sales Dashboard","Account Receivable and Payable","Party wise outstanding","Batch reports like Sales overdue, GST not filed","Report Templates"," User Access control"]}],Qc=()=>{const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(null),o=()=>t(!0),a=()=>t(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Tc,{children:[(0,g.jsx)(Mc,{children:"PRICING"}),(0,g.jsx)(zc,{children:"Pick the plan that\u2019s right for you"}),(0,g.jsxs)(Ic,{children:[(0,g.jsxs)(Lc,{children:[(0,g.jsx)("h3",{style:{color:"#ffff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"red",borderRadius:"5px"},children:"Free Trial"}),(0,g.jsx)(Fc,{children:"\u20b90/Month"}),(0,g.jsx)(_c,{children:"Seriously, free forever"}),(0,g.jsxs)(Nc,{children:[(0,g.jsx)(Dc,{valid:!0,children:"3 User Access"}),(0,g.jsx)(Dc,{valid:!0,children:"30 days Vallidity"}),(0,g.jsx)(Dc,{valid:!0,children:"20MB Space"}),(0,g.jsx)(Dc,{children:"Multi Branch Access"}),(0,g.jsx)(Bc,{onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Hc,{children:"Sign up for free"})]}),(0,g.jsxs)(Lc,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#2196f3",borderRadius:"5px"},children:"Basic"}),(0,g.jsx)(Fc,{children:"\u20b95,000/Month"}),(0,g.jsx)(_c,{children:"Billed at \u20b950,000 per year"}),(0,g.jsxs)(Nc,{children:[(0,g.jsx)(Dc,{valid:!0,children:"5 User Access"}),(0,g.jsx)(Dc,{valid:!0,children:"1 Year Validity"}),(0,g.jsx)(Dc,{valid:!0,children:"200MB Space"}),(0,g.jsx)(Dc,{children:"Multi Branch Access"}),(0,g.jsx)(Bc,{onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Hc,{children:"Start a free trial"})]}),(0,g.jsxs)(Lc,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"orange",borderRadius:"5px"},children:"Premium"}),(0,g.jsx)(Fc,{children:"\u20b910,000/Month"}),(0,g.jsx)(_c,{children:"Billed at \u20b9100,000 per year"}),(0,g.jsxs)(Nc,{children:[(0,g.jsx)(Dc,{valid:!0,children:"10 User Access"}),(0,g.jsx)(Dc,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(Dc,{valid:!0,children:"500MB Space"}),(0,g.jsx)(Dc,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)(Bc,{lickable:!0,onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Hc,{children:"Start a free trial"})]}),(0,g.jsxs)(Lc,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#800080",borderRadius:"5px"},children:"Ultimate"}),(0,g.jsx)(Fc,{children:"\u20b925,000/Month"}),(0,g.jsx)(_c,{children:"Billed at \u20b9200,000 per year"}),(0,g.jsxs)(Nc,{children:[(0,g.jsx)(Dc,{valid:!0,children:"25 User Access"}),(0,g.jsx)(Dc,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(Dc,{valid:!0,children:"1.2GB Space"}),(0,g.jsx)(Dc,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)(Bc,{lickable:!0,onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Hc,{children:"Start a free trial"})]})]})]}),(0,g.jsxs)(Pc(),{isOpen:e,onRequestClose:a,style:Kc,children:[(0,g.jsx)(qc,{onClick:a,children:"\xd7"}),(0,g.jsx)(Nc,{children:Jc.map(((e,t)=>(0,g.jsxs)("div",{children:[(0,g.jsxs)(Uc,{onClick:()=>{return t=e.name,void r(n===t?null:t);var t},children:[(0,g.jsx)(Wc,{children:e.name}),(0,g.jsx)(Gc,{children:n===e.name?"\u2212":"+"})]}),n===e.name&&(0,g.jsx)(Vc,{children:e.features.map(((e,t)=>(0,g.jsx)("ul",{style:{marginBottom:"5px"},children:(0,g.jsx)("li",{children:e},t)})))})]},t)))})]})]})},Yc=(so.div`
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
    
`),Zc=e=>(0,g.jsx)(Yc,{dangerouslySetInnerHTML:e.dangerouslySetInnerHTML,onClick:e.onClick,textTransform:e.textTransform,margin:e.margin,lineHeight:e.lineHeight,mobPosition:e.mobPosition,LgFontSize:e.LgFontSize,mobMarginBottom:e.mobMarginBottom,mobRight:e.mobRight,fontWeight:e.fontWeight,mobwidth:e.mobwidth,mobLetterSpacing:e.mobLetterSpacing,mobMarginTop:e.mobMarginTop,moblineHeight:e.moblineHeight,letterSpacing:e.letterSpacing,cursor:e.cursor,textAlign:e.textAlign,marginLeft:e.marginLeft,MobtextAlign:e.MobtextAlign,fontSize:e.fontSize,mobFontSize:e.mobFontSize,mobLineHeight:e.mobLineHeight,width:e.width,color:e.color,hoverColor:e.hoverColor,padding:e.padding,textDecoration:e.textDecoration,marginTop:e.marginTop,children:e.text});n.p,so.div`
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
`;const Xc=n.p+"static/media/FevIimg.ec5aa0150e808b2eaa91.png";const $c=n.p+"static/media/localPageHero.4092dfc607fc3eed3eec085f09348f6e.svg";const eu=n.p+"static/media/HrApp.f8b908a11c10534323325eaa7e6f02ff.svg";const tu=n.p+"static/media/EcommApp.d08f64640f1afc6971e657ce5be557c7.svg",nu=n.p+"static/media/crm.444d6bc6234675a47df4.png",ru=n.p+"static/media/search-job.de6dd9ba062c0e230527.png",iu=n.p+"static/media/online-shop.539a9bcf79880317f810.png",ou=so.div`
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
`,au=so.div`
  max-width: 50%;
  margin-top: 100px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 150px;
  }
`,su=so.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,lu=so.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,cu=so.button`
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
`,uu=so.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,du=so.div`
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
`,pu=so.img`
  width: 70px;
  margin-bottom: 10px;
`,fu=so.p`
  font-size: 1rem;
  color: #333;
`,hu=so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`,mu=so.img`
  width: 600px;
  height: auto;
  border-radius: 10%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`,gu=()=>{const[e,t]=(0,i.useState)("linear-gradient(180deg, #fceabb, rgb(255 246 247))"),[n,r]=(0,i.useState)(Xc),o=(e,n)=>{t(e),r(n)},a=()=>{t("linear-gradient(180deg, #fceabb, rgb(255 246 247))"),r(Xc)};return(0,g.jsxs)(ou,{background:e,children:[(0,g.jsxs)(au,{children:[(0,g.jsx)(su,{children:"To Automate the Most Complex Operations"}),(0,g.jsx)(lu,{children:"Experience the efficiency and clarity that comes with a fully integrated business management solution. With Atomwalk Office, transform your data into actionable insights and drive your business forward with confidence."}),(0,g.jsx)(cu,{onClick:()=>{window.location.href="https://www.atomwalk.com/login/"},children:"Get started"}),(0,g.jsxs)(uu,{children:[(0,g.jsxs)(du,{background:e,onMouseEnter:()=>o("linear-gradient(180deg, #4382f8, rgb(255 246 247))",$c),onMouseLeave:a,onClick:()=>{window.location.href="/crm.html"},children:[(0,g.jsx)(pu,{src:nu,alt:"CRM"}),(0,g.jsx)(fu,{children:"Comprehensive CRM platform for customer-facing teams."})]}),(0,g.jsxs)(du,{background:e,onMouseEnter:()=>o("linear-gradient(180deg, #a970ff, rgb(255 246 247))",eu),onMouseLeave:a,onClick:()=>{window.location.href="/hrm.html"},children:[(0,g.jsx)(pu,{src:ru,alt:"HR"}),(0,g.jsx)(fu,{children:"HR management software streamlining payroll, attendance, leave, claims."})]}),(0,g.jsxs)(du,{background:e,onMouseEnter:()=>o("linear-gradient(180deg, #90ee90, rgb(255 246 247))",tu),onMouseLeave:a,children:[(0,g.jsx)(pu,{src:iu,alt:"E-Commerce"}),(0,g.jsx)(fu,{children:"Your one-stop shop for easy, fast, and secure online shopping."})]})]})]}),(0,g.jsx)(hu,{children:(0,g.jsx)(mu,{src:n,alt:"Profile"})})]})},xu=n.p+"static/media/Cloud.773250297b7d95b40fbc.webp",yu=n.p+"static/media/Subcloud.d66e6c8b1d355e09b54f.webp",vu=so.div`
  background-color: rgb(234 244 255);
  padding: 20px;

  @media (min-width: 768px) {
    padding: 50px;
  }
`,bu=so.div`
  text-align: center;
  margin-bottom: 40px;
`,wu=so.h1`
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,ku=so.p`
  font-size: 18px;
  color: #7f8c8d;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`,Su=so.a`
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
`,Au=so.div`
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
`,ju=so.div`
  flex: 1;
  max-width: 500px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 50px;
  }
`,Cu=so.img`
  width: 100%;
  border-radius: 10px;
`,Eu=so.div`
  flex: 1;
`,Ru=so.h2`
  font-size: 24px;
  color: #34495e;
  /* font-family: 'Courier New', Courier, monospace; */
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`,Ou=so.p`
  font-size: 16px;
  color: #7f8c8d;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,Pu=so.img`
  display: none; /* Hide the image on mobile screens */

  @media (min-width: 768px) {
    display: block; /* Show the image on larger screens */
    width: 15%;
    float: right;
    margin-top: -177px;
  }
`,Tu=()=>(0,g.jsxs)(vu,{children:[(0,g.jsxs)(bu,{children:[(0,g.jsx)(wu,{children:"Unlock the Future"}),(0,g.jsx)(ku,{children:"Revolutionize your business operations with Atomwalk Office's cutting-edge ERP solution"}),(0,g.jsx)(Su,{href:"https://www.atomwalk.com/login/",children:"Transform Your Business Today"})]}),(0,g.jsxs)(Au,{children:[(0,g.jsx)(ju,{children:(0,g.jsx)(Cu,{src:xu,alt:"Business Operations"})}),(0,g.jsxs)(Eu,{children:[(0,g.jsx)(Ru,{children:"Elevate Your Business to New Heights with Atomwalk Office's Comprehensive ERP"}),(0,g.jsx)(Ou,{children:"Discover how Atomwalk Office's cloud-based ERP can streamline your core business functions, boost productivity, and drive sustainable growth for your small or medium enterprise."})]})]}),(0,g.jsx)(Pu,{src:yu})]});so.section`
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
`;var zu=n(2382);const Mu=n.p+"static/media/lipika.75242ac9bb129dc39010.jpg",Iu=[{id:1,name:"Dr Santosh Poddar, IISER, Pune",text:"Atomwalk\u2019s ERP software has revolutionized our financial management. The seamless integration and user-friendly interface have significantly improved our operational efficiency.",img:"https://picsum.photos/101/101"},{id:2,name:"Deepak Emanuel, Chief Operating Officer, FluxGen Sustainable Technologies Pvt Ltd",text:"The inventory management features of Atomwalk have been a game-changer for us. We can now track our stock levels in real-time, reducing waste and optimizing our supply chain.",img:"https://picsum.photos/102/102"},{id:3,name:"Mr. Santosh Olety, CEO at Microsys Care: ",text:"He highlights the efficiency and effectiveness of Atomwalk\u2019s software in streamlining their operations.",img:"https://picsum.photos/103/103"}],Lu=so.div`
background-color: aliceblue;
  @media (min-width: 768px) {
    padding:0 0 100px;
  }
`,Fu=so.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: aliceblue;
  @media (min-width: 768px) {
    max-width: 1300px;
  }
`,Nu=so.div`
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
`,Du=so.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`,Bu=so.div`
  flex: 1;
`,_u=so.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`,Hu=so.p`
  margin: 10px 0 0;
  color: #777;
`,Uu=so(zu.A)`

  .slick-slide {
    padding: 10px;
  }
  .slick-arrow {
    &:before{
        color: #2c3e50;
    }
 
  }
`,Wu={dots:!0,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]},qu=so.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 40px;
`,Gu=(so.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
`,so.p`
font-weight: 900;
    font-size: 45px;
    color: #2c3e50;
`),Vu=so.p`
color: #7f8c8d;
font-size: 18px;
`,Ku=()=>(0,g.jsx)(Lu,{children:(0,g.jsxs)(Fu,{children:[(0,g.jsxs)(qu,{children:[(0,g.jsx)(Gu,{children:"Testimonial"}),(0,g.jsx)(Vu,{children:"What our customers say about Atomwalk"})]}),(0,g.jsx)(Uu,{...Wu,children:Iu.map((e=>(0,g.jsx)("div",{children:(0,g.jsxs)(Nu,{children:[(0,g.jsx)(Du,{src:e.img,alt:e.name}),(0,g.jsxs)(Bu,{children:[(0,g.jsx)(_u,{children:e.name}),(0,g.jsx)(Hu,{children:e.text})]})]})},e.id)))})]})}),Ju=n.p+"static/media/image.f55fe67f8ba4fa6c4602.png",Qu={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px"},overlay:{backgroundColor:"rgba(0, 0, 0, .8)",zIndex:"32333"}},Yu=so.div`
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
`,Zu=so.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
    padding-right: 20px;
  }
`,Xu=so.div`
  display: none;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    width: 40%;
  }
`,$u=so.h2`
  font-size: 2.1em;
  color:#ea5c49;
  margin-bottom: 10px;
  font-weight: 800;
  line-height: 1.25;
`,ed=so.p`
  color: #555;
  margin-bottom: 20px;
`,td=so.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 4px;
`,nd=so.button`
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
`,rd=so.button`
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
`,id=e=>{let{isOpen:t,onRequestClose:n,setShowsuccess:r}=e,o=new Date;const a={name:"",company_name:"",task_name:"Book My Demo",mobile_number:"",email_id:"",add_task:"N",task_type:"Book My Demo",task_date:`${("0"+o.getDate()).slice(-2)}-${("0"+(o.getMonth()+1)).slice(-2)}-${o.getFullYear()}`,remarks:"Book My Demo"},[s,l]=(0,i.useState)(a),c=(e,t)=>{l({...s,[e]:t})},u=async(e,t)=>{try{let i=localStorage.getItem("apiResponse"),o=JSON.parse(i);if(!i)throw new Error("Token not found, please login.");const s=Ec.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${o.key}`}});200==(await s.post(e,t)).status&&(r(!0),localStorage.setItem("datacheck",!0),l(a),n())}catch(i){console.log("Error making authenticated API call:",i),l(a)}};return(0,g.jsx)(Pc(),{isOpen:t,onRequestClose:n,style:Qu,ariaHideApp:!1,children:(0,g.jsxs)(Yu,{children:[(0,g.jsxs)(Zu,{children:[(0,g.jsx)(rd,{onClick:n,children:"\xd7"}),(0,g.jsx)($u,{children:"Ready to see our product in action?"}),(0,g.jsx)(ed,{children:"See a demo of our product that's tailored just for you."}),(0,g.jsx)(td,{onChange:e=>c("name",e.target.value),type:"text",placeholder:"Your Name"}),(0,g.jsx)(td,{onChange:e=>c("email_id",e.target.value),type:"email",placeholder:"Email"}),(0,g.jsx)(td,{onChange:e=>c("mobile_number",e.target.value),type:"tel",placeholder:"Phone Number"}),(0,g.jsx)(td,{onChange:e=>c("company_name",e.target.value),type:"text",placeholder:"Company Name"}),(0,g.jsx)(nd,{onClick:e=>(e.preventDefault(),u("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:s})),children:"Book My Demo"})]}),(0,g.jsx)(Xu,{children:(0,g.jsx)("img",{src:Ju,alt:"Rocket",style:{width:"100%"}})})]})})},od=so.div`
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
`,ad=so.div``;function sd(e){return(0,g.jsx)("div",{children:(0,g.jsx)(od,{children:(0,g.jsx)(ad,{children:(0,g.jsx)(Zc,{text:e.message,color:"#1F936E",fontSize:"18px",fontWeight:"bold",cursor:"auto",fontSizeMedia:"13px"})})})})}const ld=()=>{const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(!1),o=localStorage.getItem("datacheck");(0,i.useEffect)((()=>{o||setTimeout((()=>{t(!0)}),2e5)}),[]);return(0,i.useEffect)((()=>{n&&setTimeout((()=>{r(!1)}),3e3)}),[n]),(0,g.jsxs)("div",{children:[n&&(0,g.jsx)(sd,{message:"We have successfully recorded your information."}),(0,g.jsx)(gu,{}),(0,g.jsx)(La,{}),(0,g.jsx)(Tu,{}),(0,g.jsx)($a,{}),(0,g.jsx)(Ku,{}),(0,g.jsx)(Qc,{}),(0,g.jsx)(Rc,{setShowsuccess:r}),(0,g.jsx)(id,{isOpen:e,onRequestClose:()=>{t(!1)},setShowsuccess:r})]})};new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(UC){}new Map;const cd=o.startTransition;F.flushSync,o.useId;function ud(e){let{basename:t,children:n,future:r,window:o}=e,a=i.useRef();null==a.current&&(a.current=function(e){return void 0===e&&(e={}),yo((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return mo("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:go(t)}),null,e)}({window:o,v5Compat:!0}));let s=a.current,[l,c]=i.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=i.useCallback((e=>{u&&cd?cd((()=>c(e))):c(e)}),[c,u]);return i.useLayoutEffect((()=>s.listen(d)),[s,d]),i.createElement(xa,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var dd,pd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(dd||(dd={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(pd||(pd={}));const fd=n.p+"static/media/cover-Proses-Manajemen-Inventory-dan-Metode-Penerapannya-01-1-1024x656.71fe8c9581957cf0a241.png",hd=n.p+"static/media/header-4-1-2048x1107.672ff3f0045c273d262f.png",md=n.p+"static/media/projecticon.2ce87c438cbe4e6220e1.png",gd=n.p+"static/media/new-b-bg.7dd6f955d98bb72b8f0b.png",xd=so.div`
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

`,yd=so.div`
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
`,vd=so.img`
    width: 490px;
    margin: 0 auto;
    display: flex;

    @media screen and (max-width: 767px) {
        width: 300px;
    }

`;function bd(e){return(0,g.jsx)("div",{children:(0,g.jsxs)("div",{className:"ip-temp-wrap",children:[(0,g.jsx)("div",{children:(0,g.jsx)(vd,{src:e.Temp})}),(0,g.jsx)("div",{children:(0,g.jsx)(xd,{children:e.title})}),(0,g.jsx)("div",{children:(0,g.jsx)(yd,{children:e.desc})})]})})}const wd=so.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    background-image: url(${gd});

`,kd=so.div`
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

`,Sd=so.div`
    width: 11px;
    height: 11px;
    border-radius: 50px;
    background-color: #cbcbcb;
    cursor: pointer;
    border: 1px solid #ccc;
`,Ad=e=>{switch(e){case 0:return fd;case 1:return hd;case 2:return md}},jd=e=>{let t={};switch(e){case 0:t={heading:"Inventory Management",description:"Take control of your inventory with Atomwalk Office"};break;case 1:t={heading:"Customer Management",description:"Deliver exceptional customer service and boost sales with Atomwalk Office"};break;case 2:t={heading:"Project Management",description:"Make informed decisions based on real-time information and analytics provided by Atomwalk Office"}}return t},Cd=()=>{const[e,t]=(0,i.useState)(0),n=e=>{t(e)};return(0,i.useEffect)((()=>{const t=setInterval((()=>{let t=e+1;t>2&&(t=0),n(t)}),4e3);return()=>clearInterval(t)})),(0,g.jsxs)(wd,{children:[0==e&&(0,g.jsx)(bd,{Temp:Ad(0),title:jd(0).heading,desc:jd(0).description}),1==e&&(0,g.jsx)(bd,{Temp:Ad(1),title:jd(1).heading,desc:jd(1).description}),2==e&&(0,g.jsx)(bd,{Temp:Ad(2),title:jd(2).heading,desc:jd(2).description}),(0,g.jsxs)(kd,{children:[(0,g.jsx)(Sd,{onClick:()=>{n(0)},style:0==e?{backgroundColor:"#FF7624"}:{}}),(0,g.jsx)(Sd,{onClick:()=>{n(1)},style:1==e?{backgroundColor:"#FF7624"}:{}}),(0,g.jsx)(Sd,{onClick:()=>{n(2)},style:2==e?{backgroundColor:"#FF7624"}:{}})]})]})},Ed=so.button`
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
`;function Rd(e){const t=e.disable;return(0,g.jsx)("div",{children:(0,g.jsx)(Ed,{onClick:e.onClick,variant:e.variant,width:e.width,fontWeight:e.fontWeight,fontSize:e.fontSize,height:e.height,Lgheight:e.Lgheight,mbfontSize:e.mbfontSize,mbpadding:e.mbpadding,mbwidth:e.mbwidth,disabled:t,children:e.text})})}const Od=so.div`
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
`,Pd=so.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`,Td=so.div`
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

`,zd=so.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 16px;
  color: #454545;
  margin-bottom: 6px;
`,Md=so.div`
  margin-top: 0px;
`,Id=so.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 24px;
  color: #352960;
  margin-top: 7px;
  text-align: left;

  @media screen and (max-width: 1280px){
    margin-top: 4px;
  }
`,Ld=so.input`
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
`,Fd=so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;

  @media screen and (max-width: 1280px){
      margin-top: 16px;
    margin-bottom: 5px;
  }
`,Nd=(so.button`
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
`),Dd=so.div`
  color: #acacac;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
`,Bd=(so.div`
  font-size: 14px;
  font-family: "Centra";
  line-height: 21px;
  color: #ff4141;
  text-align: left;
  margin-bottom: 12px;
`,()=>(0,g.jsx)("div",{children:(0,g.jsxs)(Od,{children:[(0,g.jsxs)(Pd,{children:[(0,g.jsx)(Td,{children:"Login"}),(0,g.jsx)(zd,{children:"to see your research come alive!"}),(0,g.jsxs)(Md,{children:[(0,g.jsxs)("div",{children:[(0,g.jsxs)(Id,{children:["Email address ",(0,g.jsx)("span",{style:{color:"red"},children:" *"})]}),(0,g.jsx)(Ld,{placeholder:"Enter your email"})]}),(0,g.jsxs)("div",{children:[(0,g.jsxs)(Id,{children:["Password ",(0,g.jsx)("span",{style:{color:"red"},children:" *"})]}),(0,g.jsx)(Ld,{type:"password",placeholder:"Enter your password "})]})]})]}),(0,g.jsx)(Fd,{children:(0,g.jsx)(Rd,{text:"Log In",variant:"solidOrange",width:"100px",height:"50px"})}),(0,g.jsxs)("div",{children:[(0,g.jsx)(Nd,{href:"/forgotpassword.html",children:"Forgot Password?"}),(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"3px",justifyContent:"center"},children:[(0,g.jsx)(Dd,{children:"Don\u2019t have an account? "}),(0,g.jsx)(Nd,{href:"/signup",children:"Sign Up"})]})]})]})})),_d=so.div`
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
`,Hd=()=>(0,g.jsx)("div",{children:(0,g.jsxs)(_d,{children:[(0,g.jsx)("div",{style:{width:"100%",position:"relative"},children:(0,g.jsx)(Cd,{})}),(0,g.jsx)("div",{children:(0,g.jsx)(Bd,{})})]})}),Ud=so.div`
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

`,Wd=so.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`,qd=so.div`
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

`,Gd=so.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 16px;
  color: #454545;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`,Vd=so.div`
  margin-top: 25px;
`,Kd=so.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 24px;
  color: #352960;
  margin-top: 15px;
  text-align: left;
`,Jd=so.input`
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

`,Qd=so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 25px;
`,Yd=(so.button`
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
`),Zd=so.div`
  color: #acacac;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
`,Xd=(so.div`
  font-size: 14px;
  font-family: "Centra";
  line-height: 21px;
  color: #ff4141;
  text-align: left;
  margin-bottom: 12px;
`,()=>(0,g.jsx)("div",{children:(0,g.jsxs)(Ud,{children:[(0,g.jsxs)(Wd,{children:[(0,g.jsx)(qd,{children:"Forgot Password?"}),(0,g.jsx)(Gd,{children:"Enter your registered work email to reset password"}),(0,g.jsx)(Vd,{children:(0,g.jsxs)("div",{children:[(0,g.jsxs)(Kd,{children:["Email address ",(0,g.jsx)("span",{style:{color:"red"},children:" *"})," "]}),(0,g.jsx)(Jd,{placeholder:"Enter your registered work email"})]})})]}),(0,g.jsx)(Qd,{children:(0,g.jsx)(Rd,{text:"Send",variant:"solidOrange",width:"100px",height:"50px"})}),(0,g.jsx)("div",{children:(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"3px",justifyContent:"center"},children:[(0,g.jsx)(Zd,{children:"Don\u2019t have an account? "}),(0,g.jsx)(Yd,{href:"/signup",children:"Sign Up"})]})})]})})),$d=so.div`
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
`;function ep(){return(0,g.jsx)("div",{children:(0,g.jsxs)($d,{children:[(0,g.jsx)("div",{style:{width:"100%",position:"relative"},children:(0,g.jsx)(Cd,{})}),(0,g.jsx)("div",{children:(0,g.jsx)(Xd,{})})]})})}const tp=n.p+"static/media/what-is-ERP.b39cc665c451687aad1b.jpg",np=n.p+"static/media/color-sharp.bea361cfef80fefc2d1e.png",rp=n.p+"static/media/color-sharp2.c87586c6c2f549cb4aa6.png",ip=(n.p,n.p,n.p+"static/media/Backgroundpeople.d12b809f5bce2d857642.png"),op=n.p+"static/media/Product.9dd066cf3ea2e0c5d71c.png",ap=n.p+"static/media/CrmHero.8e1214dc746d880dc597.png",sp=so.section`
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
`,lp=so.div`
  max-width: 700px;
`,cp=so.h2`
  font-size: 3rem;
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-top: 70px;
  }
`,up=so.p`
  font-size: 1.3rem;
  color: #555;
`,dp=so.div`
  position: relative;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`,pp=(so.div`
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
`),fp=e=>(0,g.jsxs)(sp,{background:e.background,children:[(0,g.jsxs)(lp,{children:[(0,g.jsx)(cp,{children:e.title}),(0,g.jsx)(up,{children:e.description})]}),(0,g.jsx)(dp,{children:(0,g.jsx)(pp,{src:e.data?op:e.crm?ap:e.lead?e.img:ip,alt:"People talking"})})]}),hp=n.p+"static/media/consulting.939890d26733fc8bb7de.png",mp=n.p+"static/media/service.2b0a165b42a11cc4aafa.png",gp=n.p+"static/media/grow.6d717d5c8734947f8b94.png",xp=n.p+"static/media/human-resources.b5fe567a0189b6da868e.png",yp=n.p+"static/media/arrows.1950f85fea2b63e0f617.png",vp=so.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,bp=so.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,wp=so.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,kp=so.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Sp=so.div`
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
`,Ap=so.div`
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
`,jp=so.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,Cp=so.p`
  font-size: 1em;
  color: #666;
`,Ep=()=>{const e=e=>{window.location.href=e};return(0,g.jsxs)(vp,{children:[(0,g.jsx)(bp,{children:"Why Atomwalk Office ERP?"}),(0,g.jsx)(wp,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,g.jsxs)(kp,{children:[(0,g.jsxs)(Sp,{children:[(0,g.jsx)(Ap,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:hp,alt:"Speed"})}),(0,g.jsx)(jp,{children:"Financial Compliance:"}),(0,g.jsx)(Cp,{children:"Automated e-Invoice, GST reconciliation, and real-time financial management."})]}),(0,g.jsxs)(Sp,{children:[(0,g.jsx)(Ap,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:mp,alt:"Trust"})}),(0,g.jsx)(jp,{children:"Operational Excellence:"}),(0,g.jsx)(Cp,{children:"Project and work order management, BOM generation, and process optimization."})]}),(0,g.jsxs)(Sp,{style:{cursor:"pointer"},onClick:()=>e("/crm.html"),children:[(0,g.jsx)(Ap,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:gp,alt:"Accuracy"})}),(0,g.jsx)(jp,{children:"Business Growth:"}),(0,g.jsx)(Cp,{children:"Integrated CRM for lead management, sales performance tracking, and customer communication."})]}),(0,g.jsxs)(Sp,{style:{cursor:"pointer"},onClick:()=>e("/hrm.html"),children:[(0,g.jsx)(Ap,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:xp,alt:"Reliability"})}),(0,g.jsx)(jp,{children:"HR & Payroll:"}),(0,g.jsx)(Cp,{children:"From recruitment to payroll, manage the full employee lifecycle effortlessly."})]}),(0,g.jsxs)(Sp,{children:[(0,g.jsx)(Ap,{bgColor:"#ffe0f5",children:(0,g.jsx)("img",{src:yp,alt:"Reliability"})}),(0,g.jsx)(jp,{children:"Multi-location Flexibility:"}),(0,g.jsx)(Cp,{children:"Handle operations across multiple branches or locations with ease."})]})]})]})},Rp=n.p+"static/media/time.a8163f40469abbaa08ca.png",Op=n.p+"static/media/money.b0e5ae4582ee14be342a.png",Pp=n.p+"static/media/profits.effdf91aad8318ce8c98.png",Tp=n.p+"static/media/login.1fc5649da5ea944b531d.png",zp=so.div`
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
`,Mp=so.h2`
  font-size: 2.5em;
  font-weight: bold;
  color:#333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`,Ip=so.h3`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
`,Lp=so.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
@media (max-width: 768px) {
  flex-wrap: wrap;
}
`,Fp=so.div`
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
`,Np=so.img`
  width: 90px;
  height: 90px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`,Dp=so.h4`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`,Bp=so.p`
  font-size: 1em;
  color: #666;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`,_p=()=>(0,g.jsxs)(zp,{children:[(0,g.jsx)(Mp,{children:"Unite advantages"}),(0,g.jsx)(Ip,{children:"Features Tailored to Your Business Needs"}),(0,g.jsxs)(Lp,{children:[(0,g.jsxs)(Fp,{children:[(0,g.jsx)(Np,{src:Op,alt:"Centralized access"}),(0,g.jsx)(Dp,{children:"AI & Blockchain Integration:"}),(0,g.jsx)(Bp,{children:"Leverage advanced technologies for automated data entry, secure transactions, and business innovation."})]}),(0,g.jsxs)(Fp,{children:[(0,g.jsx)(Np,{src:Rp,alt:"Vetted providers"}),(0,g.jsx)(Dp,{children:"Real-time Insights:"}),(0,g.jsx)(Bp,{children:"Make informed decisions with real-time data, analytics, and reporting."})]}),(0,g.jsxs)(Fp,{children:[(0,g.jsx)(Np,{src:Pp,alt:"Simplified workflows"}),(0,g.jsx)(Dp,{children:"Cost-Effective:"}),(0,g.jsx)(Bp,{children:"Low setup costs with no upfront investment and all updates included at no additional charge."})]}),(0,g.jsxs)(Fp,{children:[(0,g.jsx)(Np,{src:Tp,alt:"Simplified workflows"}),(0,g.jsx)(Dp,{children:"User-Friendly Interface"}),(0,g.jsx)(Bp,{children:"Simplified, integrated, and accessible from any device, anywhere."})]})]})]}),Hp=n.p+"static/media/automation.5c71914163b6c86409c0.png",Up=n.p+"static/media/server.96b9766474c3a4c7cb8d.png",Wp=n.p+"static/media/scalability.a651e2f67804756aba51.png",qp=so.section`
  padding: 100px 20px;
  background-color:rgb(225 255 246);
  text-align: center;
`,Gp=so.div`
  max-width: 1200px;
  margin: 0 auto;
`,Vp=so.h2`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Kp=so.p`
  color: #666;
  margin-top: 10px;
  font-size: 1.2em;
`,Jp=so.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 70px;
`,Qp=so.div`
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
`,Yp=so.img`
  max-width: 80px;
  margin-bottom: 20px;
`,Zp=so.h3`
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,Xp=so.p`
  color: #666;
`,$p=()=>(0,g.jsx)(qp,{children:(0,g.jsxs)(Gp,{children:[(0,g.jsx)(Vp,{children:"Seamless Integration and Workflow"}),(0,g.jsx)(Kp,{children:"Atomwalk Office ERP connects every aspect of your business into one unified system"}),(0,g.jsxs)(Jp,{children:[(0,g.jsxs)(Qp,{style:{backgroundColor:"rgb(181 255 206)"},children:[(0,g.jsx)(Yp,{src:Hp,alt:"Automated Processes"}),(0,g.jsx)(Zp,{children:"Automated Processes"}),(0,g.jsx)(Xp,{children:"From bank reconciliation to payroll processing, automate repetitive tasks."})]}),(0,g.jsxs)(Qp,{style:{backgroundColor:"rgb(188 216 255)"},children:[(0,g.jsx)(Yp,{src:Up,alt:"Centralized Data"}),(0,g.jsx)(Zp,{children:"Centralized Data"}),(0,g.jsx)(Xp,{children:"Access and manage all your business data from a single platform."})]}),(0,g.jsxs)(Qp,{style:{backgroundColor:"rgb(255 211 168)"},children:[(0,g.jsx)(Yp,{src:Wp,alt:"Scalability"}),(0,g.jsx)(Zp,{children:"Scalability"}),(0,g.jsx)(Xp,{children:"Whether you\u2019re managing one location or multiple, Atomwalk scales with your business."})]})]})]})}),ef=(so.div`
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
`,n.p+"static/media/Projectmange.799ea926bfc50e76907a.jpg"),tf=n.p+"static/media/inventory management.774803593808cfe0f584.jpg",nf=n.p+"static/media/Process Templates.d39be0c24a2b4032e061.jpg",rf=n.p+"static/media/Sales and Procurement.954547f65f6d37ca39dd.jpg",of=n.p+"static/media/Report And Dashboard.91584e3da800458d2e24.jpg",af=n.p+"static/media/gst.0029cfd05e4a07f888bf.webp",sf=n.p+"static/media/Bank Reconciliation.194e572838760b213dd7.jpg",lf=n.p+"static/media/Finacial Acconting.3a1f51360c2ca455c64c.avif",cf=so.section`
  padding: 40px 20px;
  text-align: center;
  background-color: #ddf5ff;
`,uf=so.h2`
  font-size: 2.5em;
  font-weight: 600;
  color: #333;
  margin-bottom: 40px;
  
  span {
    color: #9C27B0; /* Purple color for the highlighted text */
  }
`,df=so.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`,pf=so.div`
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
`,ff=so.div`
  max-width: 40%;
  text-align: left;

  @media (max-width: 767px) {
    text-align: left;
    max-width: 100%;
  }
`,hf=so.h3`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`,mf=so.div`
  color: #666;
  font-size: 1em;
  margin-bottom: 20px;
`,gf=so.button`
  background-color: #ea5c49;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
`,xf=so.div`
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
`,yf=so.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #9C27B0;
  border-radius: 50%;
  ${e=>e.top&&`top: ${e.top}; left: ${e.left};`}
  ${e=>e.bottom&&`bottom: ${e.bottom}; right: ${e.right};`}
`,vf=()=>{const e=()=>{window.location.href="/demo.html"};return(0,g.jsxs)(cf,{children:[(0,g.jsx)(uf,{children:"Atomwalk Office ERP connects every aspect of your business into one unified system"}),(0,g.jsxs)(df,{children:[(0,g.jsxs)(pf,{bgColor:"#fce4ec",children:[(0,g.jsxs)(ff,{children:[(0,g.jsx)(hf,{children:"Project Management"}),(0,g.jsx)(mf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Project Activity Allocation Tracking "}),(0,g.jsx)("li",{children:"Project Activity Dependency (Critical Patch) "}),(0,g.jsx)("li",{children:"Schedule Tracking"}),(0,g.jsx)("li",{children:"Item Cost and Effort Tracking"}),(0,g.jsx)("li",{children:"Efficiency tracking at Activity"}),(0,g.jsx)("li",{children:"Project Documents, Alert management"}),(0,g.jsx)("li",{children:"Integration with Procurement and PO"}),(0,g.jsx)("li",{children:"Integration with Inventory Allocation, Wastage and Release"})]})}),(0,g.jsx)(gf,{onClick:e,children:"Request a Demo"})]}),(0,g.jsx)(xf,{children:(0,g.jsx)("img",{src:ef,alt:"Employee engagement"})}),(0,g.jsx)(yf,{top:"10%",left:"80%"}),(0,g.jsx)(yf,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(pf,{bgColor:"#e0f7fa",children:[(0,g.jsx)(xf,{children:(0,g.jsx)("img",{src:tf,alt:"Performance management"})}),(0,g.jsxs)(ff,{children:[(0,g.jsx)(hf,{children:"Inventory Management"}),(0,g.jsx)(mf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Item Category and Group "}),(0,g.jsx)("li",{children:"Inventory Item and Service Item "}),(0,g.jsx)("li",{children:"Item Supplier management"}),(0,g.jsx)("li",{children:"Multiple locations"}),(0,g.jsx)("li",{children:"Multiple Units "}),(0,g.jsx)("li",{children:"Warehouse management (Bin Locations)"}),(0,g.jsx)("li",{children:"Item Serial Number handling"}),(0,g.jsx)("li",{children:"Item physical inspection and open balance"}),(0,g.jsx)("li",{children:"Item min order qty and Expiry date tracking"})]})}),(0,g.jsx)(gf,{children:"Experience Live Demo"})]}),(0,g.jsx)(yf,{top:"20%",left:"5%"}),(0,g.jsx)(yf,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(pf,{bgColor:"#f6eaff",children:[(0,g.jsxs)(ff,{children:[(0,g.jsx)(hf,{children:"Process Templates"}),(0,g.jsx)(mf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Activity Definition with User group"}),(0,g.jsx)("li",{children:"Equipment and Document definition for Activity"}),(0,g.jsx)("li",{children:"Process definition for a Product"}),(0,g.jsx)("li",{children:"Process Activity Dependency"}),(0,g.jsx)("li",{children:"Process items and Bill of Material"})]})}),(0,g.jsx)(gf,{onClick:e,children:"Request a Demo"})]}),(0,g.jsx)(xf,{children:(0,g.jsx)("img",{src:nf,alt:"Employee engagement"})}),(0,g.jsx)(yf,{top:"10%",left:"80%"}),(0,g.jsx)(yf,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(pf,{bgColor:"#ffeadf",children:[(0,g.jsx)(xf,{children:(0,g.jsx)("img",{src:rf,alt:"Performance management"})}),(0,g.jsxs)(ff,{children:[(0,g.jsx)(hf,{children:"Sales and Procurement"}),(0,g.jsx)(mf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Sales order, quotation, proforma invoice "}),(0,g.jsx)("li",{children:"Tax Invoice "}),(0,g.jsx)("li",{children:"Payment, GST Tracking, TDS handling"}),(0,g.jsx)("li",{children:"Return, Credit note handling"}),(0,g.jsx)("li",{children:"Purchase Order, Purchase requests"}),(0,g.jsx)("li",{children:"Goods Receipt (GRN)"}),(0,g.jsx)("li",{children:"Goods Return/Shortage/ Debit Note"}),(0,g.jsx)("li",{children:"Purchase Service Order, TDS handling"})]})}),(0,g.jsx)(gf,{children:"Experience Live Demo"})]}),(0,g.jsx)(yf,{top:"20%",left:"5%"}),(0,g.jsx)(yf,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(pf,{bgColor:"rgb(225, 255, 246)",children:[(0,g.jsxs)(ff,{children:[(0,g.jsx)(hf,{children:"GST & TDS"}),(0,g.jsx)(mf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"GST report Support"}),(0,g.jsx)("li",{children:"TDS and TDS reconciliation"}),(0,g.jsx)("li",{children:"GST Reconciliation with A/c"})]})}),(0,g.jsx)(gf,{onClick:e,children:"Request a Demo"})]}),(0,g.jsx)(xf,{children:(0,g.jsx)("img",{src:af,alt:"Employee engagement"})}),(0,g.jsx)(yf,{top:"10%",left:"80%"}),(0,g.jsx)(yf,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(pf,{bgColor:"#ffeadf",children:[(0,g.jsx)(xf,{children:(0,g.jsx)("img",{src:lf,alt:"Performance management"})}),(0,g.jsxs)(ff,{children:[(0,g.jsx)(hf,{children:"Finacial Acconting"}),(0,g.jsx)(mf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Reports (Sales, Purchase and Inventory). "}),(0,g.jsx)("li",{children:"Audit Trail."}),(0,g.jsx)("li",{children:"Statutory Reports (P&LBalance Sheet, Cash Flow, Change in Equity)."}),(0,g.jsx)("li",{children:"Purchase Reports"}),(0,g.jsx)("li",{children:"Depreciation Schedule"})]})}),(0,g.jsx)(gf,{children:"Experience Live Demo"})]}),(0,g.jsx)(yf,{top:"20%",left:"5%"}),(0,g.jsx)(yf,{bottom:"10%",right:"70%"})]}),(0,g.jsxs)(pf,{bgColor:"#d7faff",children:[(0,g.jsxs)(ff,{children:[(0,g.jsx)(hf,{children:"Bank Reconciliation"}),(0,g.jsx)(mf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Bank Statement Upload"}),(0,g.jsx)("li",{children:"Account Reconciliation with Sales and PO"}),(0,g.jsx)("li",{children:"Rule based reconciliation of Expenses"}),(0,g.jsx)("li",{children:"Bank statement View"}),(0,g.jsx)("li",{children:"Reconciled statement view"}),(0,g.jsx)("li",{children:"Bank, Exchange rate setup"})]})}),(0,g.jsx)(gf,{onClick:e,children:"Request a Demo"})]}),(0,g.jsx)(xf,{children:(0,g.jsx)("img",{src:sf,alt:"Employee engagement"})}),(0,g.jsx)(yf,{top:"10%",left:"80%"}),(0,g.jsx)(yf,{bottom:"5%",right:"10%"})]}),(0,g.jsxs)(pf,{bgColor:"#dfdfdf",children:[(0,g.jsx)(xf,{children:(0,g.jsx)("img",{src:of,alt:"Performance management"})}),(0,g.jsxs)(ff,{children:[(0,g.jsx)(hf,{children:"Reports and Dashboard"}),(0,g.jsx)(mf,{children:(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:"Manager Dashboard"}),(0,g.jsx)("li",{children:"Sales Dashboard"}),(0,g.jsx)("li",{children:"Account Receivable and Payable"}),(0,g.jsx)("li",{children:"Party wise outstanding"}),(0,g.jsx)("li",{children:"Batch reports like Sales overdue, GST not filed"}),(0,g.jsx)("li",{children:"Report Templates"}),(0,g.jsx)("li",{children:"User Access control"})]})}),(0,g.jsx)(gf,{children:"Experience Live Demo"})]}),(0,g.jsx)(yf,{top:"20%",left:"5%"}),(0,g.jsx)(yf,{bottom:"10%",right:"70%"})]})]})]})},bf=(so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${np}),url(${rp});
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
    background-image: url(${tp});
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
`,()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(fp,{title:"Empower Your Business with Atomwalk Office ERP",description:" Atomwalk Office is a cloud-based ERP solution, designed to transform the way startups, small, and medium-sized businesses operate. Built on cutting-edge technologies like AI and Blockchain, our platform seamlessly manages core business functions including manufacturing, purchasing, inventory, sales, customer service, accounting, and HR.",background:"#52ebff",data:!0}),(0,g.jsx)(Ep,{}),(0,g.jsx)(vf,{}),(0,g.jsx)(_p,{}),(0,g.jsx)($p,{})]})),wf=n.p+"static/media/contactus.d92ad20f9e7e87520f41.jpg",kf=n.p+"static/media/content.b17e184e51f85d52f7ce.png",Sf=n.p+"static/media/support.742caae5101d98ae2c49.png",Af=n.p+"static/media/hand-shake.65bcad809362961ab098.png",jf=n.p+"static/media/acquisition.c97c3452c9063b3e641e.png";Pc().setAppElement("#root");const Cf={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px"},overlay:{backgroundColor:"rgba(0, 0, 0, .8)",zIndex:"32333"}},Ef=so.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  max-width: 500px;
  margin: auto;
`,Rf=so.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`,Of=so.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`,Pf=so.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`,Tf=so.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`,zf=so.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`,Mf=so.button`
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
`,If=e=>{let{isOpen:t,onRequestClose:n}=e;const[r,o]=(0,i.useState)(!1);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(Pc(),{isOpen:t,onRequestClose:n,style:Cf,children:(0,g.jsxs)(Ef,{children:[(0,g.jsx)(Of,{onClick:n,children:"\xd7"}),(0,g.jsx)(Rf,{children:"Contact Support"}),(0,g.jsxs)(Pf,{children:[(0,g.jsx)(Tf,{type:"text",placeholder:"Enter your name",required:!0}),(0,g.jsx)(Tf,{type:"email",placeholder:"Enter your email",required:!0}),(0,g.jsx)(zf,{placeholder:"Describe your issue or question",rows:"4",required:!0}),(0,g.jsx)(Mf,{type:"submit",children:"Submit"})]})]})})})},Lf=so.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 120px 20px;
  background-color:#ddf5ff;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ff=so.div`
  background-color: ${e=>e.bgColor||"#f0f0f0"};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
`,Nf=so.div`
  background-color: ${e=>e.bgColor||"#f0f0f0"};
  border-radius: 10px;
  padding: 10px;
  display: inline-flex;
  margin-bottom: 15px;
  width: 10%;
`,Df=so.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  margin-bottom: 10px;
`,Bf=so.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`,_f=so.button`
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
`,Hf=()=>{const[e,t]=(0,i.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Lf,{children:[(0,g.jsxs)(Ff,{bgColor:"#f6eaff",children:[(0,g.jsx)(Nf,{bgColor:"#ffe9c0",children:(0,g.jsx)("img",{src:kf,alt:"Sales"})}),(0,g.jsx)(Df,{children:"Sales"}),(0,g.jsx)(Bf,{children:"Explore how Atomwalk can benefit your business."}),(0,g.jsx)(_f,{onClick:()=>{window.location.href="/seals.html"},children:"Talk To Us"})]}),(0,g.jsxs)(Ff,{bgColor:"#ffeadf",children:[(0,g.jsx)(Nf,{bgColor:"#dff2e1",children:(0,g.jsx)("img",{src:Sf,alt:"Support"})}),(0,g.jsx)(Df,{children:"Support"}),(0,g.jsx)(Bf,{children:"If you are our customer and need help with the Atomwalk application. We are here for you."}),(0,g.jsx)(_f,{onClick:()=>{t(!0)},children:"Get Help"})]}),(0,g.jsxs)(Ff,{bgColor:"#e1fff6",children:[(0,g.jsx)(Nf,{bgColor:"#c6f0ff",children:(0,g.jsx)("img",{src:Af,alt:"Partnerships"})}),(0,g.jsx)(Df,{children:"Partnerships"}),(0,g.jsx)(Bf,{children:"Interested in partnering with us? Let us know."}),(0,g.jsx)(_f,{children:"Get In Touch"})]}),(0,g.jsxs)(Ff,{bgColor:"#edf5ff",children:[(0,g.jsx)(Nf,{bgColor:"#f1d0ff",children:(0,g.jsx)("img",{src:jf,alt:"Media"})}),(0,g.jsx)(Df,{children:"Media"}),(0,g.jsx)(Bf,{children:"Any PR related questions? Always ready to talk."}),(0,g.jsx)(_f,{onClick:()=>{window.location.href="/contactUs.html"},children:"Contact Us"})]})]}),(0,g.jsx)(If,{isOpen:e,onRequestClose:()=>{t(!1)}})]})},Uf=n.p+"static/media/phone-call.e7db31039cbc0dc30592.png",Wf=n.p+"static/media/email2.9082177d266cee25a57b.png",qf=n.p+"static/media/location.39261a4c95eecf324099.png",Gf=so.section`
  padding: 100px 20px;
  background-color:rgb(225 255 246);
  text-align: center;
`,Vf=so.div`
  max-width: 1200px;
  margin: 0 auto;
`,Kf=so.h2`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Jf=so.p`
  color: #666;
  margin-top: 10px;
`,Qf=so.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 70px;
`,Yf=so.div`
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
`,Zf=so.img`
  max-width: 80px;
  margin-bottom: 20px;
`,Xf=so.h3`
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,$f=so.p`
  color: #666;
`,eh=()=>(0,g.jsx)(Gf,{children:(0,g.jsxs)(Vf,{children:[(0,g.jsx)(Kf,{children:"Reach Our Team"}),(0,g.jsx)(Jf,{children:"We love questions and feedback - and we're always happy to help! Here are some ways to contact us."}),(0,g.jsxs)(Qf,{children:[(0,g.jsxs)(Yf,{style:{backgroundColor:"rgb(181 255 206)"},children:[(0,g.jsx)(Zf,{src:Uf,alt:"Automated Processes"}),(0,g.jsx)(Xf,{children:"Call Us"}),(0,g.jsx)($f,{children:"Call us to discover how our products can work best for you."}),(0,g.jsx)($f,{children:"Phone: +91-7259555003"})]}),(0,g.jsxs)(Yf,{style:{backgroundColor:"rgb(188 216 255)"},children:[(0,g.jsx)(Zf,{src:Wf,alt:"Centralized Data"}),(0,g.jsx)(Xf,{children:"Mail Us"}),(0,g.jsx)($f,{children:"We are waiting to help you and your team - so don't hesitate to reach out!"}),(0,g.jsx)($f,{children:"Email: info@atomwalk.com"})]}),(0,g.jsxs)(Yf,{style:{backgroundColor:"rgb(255 211 168)"},children:[(0,g.jsx)(Zf,{src:qf,alt:"Scalability"}),(0,g.jsx)(Xf,{children:"Our Main Office"}),(0,g.jsx)($f,{children:"Visit our main office, where our team is always ready to welcome you and assist with any inquiries."}),(0,g.jsx)($f,{children:"Bengaluru, Marathahalli, 560037"})]})]})]})}),th=so.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-image: url(${np});
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
`,nh=so.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;

  @media(min-width: 768px) {
    font-size: 2.5em;
    text-align: left;
  }
`,rh=so.div`
  flex: 1;
  margin-bottom: 30px;
  text-align: center;

  @media(min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`,ih=so.div`
  margin: 20px 0;
`,oh=so.form`
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
`,ah=so.h2`
  margin-bottom: 20px;
  font-size: 1.5em;
  text-align: center;
`,sh=so.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  /* background-color: #f6eaff; */
  border: 1px solid #333;
  /* border: none; */
  border-radius: 5px;
  color: #333;
  font-size: 1em;
`,lh=so.textarea`
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
`,ch=so.button`
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
`,uh=(so.div`
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
    background-image: url(${wf});
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
`),dh=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(fp,{title:"Let's connect",description:"We would love to hear from you. How can we help?",background:"#ffc24b"}),(0,g.jsx)(eh,{}),(0,g.jsx)(Hf,{}),(0,g.jsxs)(th,{children:[(0,g.jsxs)(rh,{children:[(0,g.jsx)(nh,{children:"Get in Touch with Atomwalk \ud83d\udc4b"}),(0,g.jsx)(uh,{children:"Feel free to connect with us for any of your needs regarding our services. Our support team is ready to solve any of your issues. Just push a text to us and we will get back to you immediately."}),(0,g.jsxs)(ih,{children:[(0,g.jsx)("p",{children:(0,g.jsx)("strong",{children:"India"})}),(0,g.jsx)("p",{children:"Bengaluru, Marathahalli, 560037"}),(0,g.jsx)("p",{children:"Email: info@atomwalk.com"}),(0,g.jsx)("p",{children:"Phone: +91-7259555003"})]})]}),(0,g.jsxs)(oh,{children:[(0,g.jsx)(ah,{children:"Drop Us a Message"}),(0,g.jsx)(sh,{type:"text",placeholder:"Name*",required:!0}),(0,g.jsx)(sh,{type:"text",placeholder:"+91 Phone No*",required:!0}),(0,g.jsx)(sh,{type:"email",placeholder:"Email*",required:!0}),(0,g.jsx)(sh,{type:"text",placeholder:"Which Business do you have ?*",required:!0}),(0,g.jsx)(sh,{type:"text",placeholder:"Location*",required:!0}),(0,g.jsx)(lh,{placeholder:"Message*",required:!0}),(0,g.jsx)(ch,{type:"submit",children:"Connect With Atomwalk Today"})]})]})]}),ph=n.p+"static/media/about-us-bg.004c9dbfb932e1e45fde.png",fh=so.div`
    background-image: url(${ph});
    background-position: center;
    background-repeat: no-repeat;
    height: 1850px;
    padding-top: 74px;
    background-size: cover;

    @media screen and (max-width: 767px) {
        height: 1450px;
    }

`,hh=so.div`
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

`,mh=so.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
`;function gh(){return(0,g.jsx)("div",{children:(0,g.jsx)(fh,{children:(0,g.jsxs)(hh,{children:[(0,g.jsx)(Zc,{text:"About us",color:"#000",fontSize:"48px",fontWeight:"900",letterSpacing:"2.4px",textAlign:"left"}),(0,g.jsx)(Zc,{text:"Empowering Small Businesses: Atomwalk Office is dedicated to empowering small business owners by providing a comprehensive Virtual Desktop Interface (VDI) that enhances operational efficiency and streamlines business processes.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"25px"}),(0,g.jsx)(Zc,{text:"Innovative Financial Solutions: Our platform offers easy financing options and seamless connectivity with banks through blockchain technology, ensuring secure and efficient financial transactions for your business.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,g.jsx)(Zc,{text:"Operational Excellence: With Atomwalk Office, businesses can monitor and track their operational efficiency in real-time, enabling better decision-making and improved productivity.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,g.jsx)(Zc,{text:"Cutting-Edge Technology: We leverage the latest advancements in technology, including cloud services and blockchain, to provide a robust and secure environment for your business operations.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,g.jsx)(mh,{children:(0,g.jsx)(Rd,{onClick:()=>{window.location.href={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SERVER_NAME_URL+"/careers.html"},text:"See Open Jobs",variant:"solidOrange",width:"auto",height:"50px"})})]})})})}const xh=n.p+"static/media/TeamImg.c0d26972b4149da836b5.png",yh=so.div`
  background-color: #f5e9fd; // Light purple background
  padding: 40px 20px;
`,vh=so.div`
  text-align: center;
  margin-bottom: 50px;
`,bh=so.h1`
  font-size: 2rem;
  color: #6a1b9a; // Purple color
  margin-bottom: 10px;
`,wh=so.p`
  font-size: 1.25rem;
  color: #333333;
  max-width: 600px;
  margin: 0 auto;
`,kh=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,Sh=so.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media(min-width: 768px) {
    margin-bottom: 0;
  }
`,Ah=so.img`
  max-width: 50%;
  height: auto;
  border-radius: 15px;
`,jh=so.div`
  text-align: left;
  max-width: 500px;
`,Ch=so.h2`
  font-size: 1.75rem;
  color: #333333;
  margin-bottom: 20px;
`,Eh=so.div`
  margin-bottom: 20px;
`,Rh=so.h3`
  font-size: 1.25rem;
  color: #6a1b9a; // Purple color
  margin-bottom: 5px;
`,Oh=so.p`
  font-size: 1rem;
  color: #555555;
`,Ph=()=>(0,g.jsxs)(yh,{children:[(0,g.jsxs)(vh,{children:[(0,g.jsx)(bh,{children:"Our Mission"}),(0,g.jsx)(wh,{children:"Empower a new generation of entrepreneurs to pursue their visions and drive positive change for themselves, their communities, and the world."})]}),(0,g.jsxs)(kh,{children:[(0,g.jsx)(Sh,{children:(0,g.jsx)(Ah,{src:xh,alt:"Dedicated Team of Innovators"})}),(0,g.jsxs)(jh,{children:[(0,g.jsx)(Ch,{children:"Our Approach"}),(0,g.jsxs)(Eh,{children:[(0,g.jsx)(Rh,{children:"Inspire."}),(0,g.jsx)(Oh,{children:"We connect deeply with our customers\u2019 visions and use creativity, technology, and dedication to bring their ideas to life."})]}),(0,g.jsxs)(Eh,{children:[(0,g.jsx)(Rh,{children:"Take Bold Steps."}),(0,g.jsx)(Oh,{children:"We embrace courage in all we do, pushing boundaries and meeting challenges head-on with confidence."})]}),(0,g.jsxs)(Eh,{children:[(0,g.jsx)(Rh,{children:"Think Like Owners."}),(0,g.jsx)(Oh,{children:"We treat every project as our own, constantly refining, innovating, and creating new solutions that drive progress."})]})]})]})]}),Th=n.p+"static/media/people.4f89400e19d25d36ee95.png",zh=n.p+"static/media/handshake.fec586e9ced4464da168.png",Mh=n.p+"static/media/startup.be4fd0c3b78108011c51.png",Ih=so.div`
  background-color: #fff7e6; // Light cream background
  padding: 100px 20px;
`,Lh=so.h2`
  text-align: center;
  font-size: 2rem;
  color: #333333;
  margin-bottom: 100px;
`,Fh=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,Nh=so.div`
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
`,Dh=so.div`
  background-color: ${e=>{let{color:t}=e;return t||"#ccc"}};
  border-radius: 8px;
  padding: 10px;
  display: inline-block;
  margin-right: 15px;
  width: 50px;
`,Bh=so.p`
  color: #555555;
  font-size: 1rem;
  margin: 0;
`,_h=()=>(0,g.jsxs)(Ih,{children:[(0,g.jsx)(Lh,{children:"Our Beliefs"}),(0,g.jsxs)(Fh,{children:[(0,g.jsxs)(Nh,{children:[(0,g.jsx)(Dh,{color:"#8ed1b0",children:(0,g.jsx)("img",{src:Th,alt:"People Icon"})}),(0,g.jsx)(Bh,{children:"Business is ultimately about valuing people above all else."})]}),(0,g.jsxs)(Nh,{children:[(0,g.jsx)(Dh,{color:"#db70d1",children:(0,g.jsx)("img",{src:zh,alt:"Hand Icon"})}),(0,g.jsx)(Bh,{children:"We have the power to make a meaningful difference in the world."})]}),(0,g.jsxs)(Nh,{children:[(0,g.jsx)(Dh,{color:"#fbbd3c",children:(0,g.jsx)("img",{src:Mh,alt:"Rocket Icon"})}),(0,g.jsx)(Bh,{children:"Innovation should be a core part of our identity, not just an option."})]}),(0,g.jsxs)(Nh,{children:[(0,g.jsx)(Dh,{style:{width:"65px"},color:"#6cd5ff",children:(0,g.jsx)("img",{src:Af,alt:"Handshake Icon"})}),(0,g.jsx)(Bh,{children:"Building connections and partnerships helps us break limits and aim higher."})]})]})]}),Hh=n.p+"static/media/linkedin.6892b3ae328c7a1e055f.png";const Uh=n.p+"static/media/Sk.1620eca3feffff84fbec571e63f18988.svg";const Wh=n.p+"static/media/sk2.7c9fc7c4395d941a8f1bcca5c65f2b7c.svg",qh=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Gh=so.div`
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
`,Vh=so.div`
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
`,Kh=so.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`,Jh=so.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`,Qh=so.div`
  perspective: 1000px;
  width: 100%;
  max-width: 400px;
  height: 420px;
  margin: 20px;
  position: relative;

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
`,Yh=so.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`,Zh=so.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,Xh=so(Zh)`
  background-color: #f8f8f8;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,$h=so.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
  border: 2px solid #ddd;
`,em=so.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`,tm=so.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #555;
`,nm=so.p`
  font-size: 1rem;
  color: #777;
  line-height: 1.4;
`,rm=so.a`
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
`,im=()=>(0,g.jsxs)(qh,{children:[(0,g.jsxs)(Gh,{bgColor:"#fff8f0",children:[(0,g.jsx)(Kh,{children:"Leadership"}),(0,g.jsxs)(Jh,{children:[(0,g.jsx)(Qh,{children:(0,g.jsxs)(Yh,{className:"flip-card-inner",children:[(0,g.jsxs)(Zh,{children:[(0,g.jsx)($h,{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADIAMgDASIAAhEBAxEB/8QAHQAAAAcBAQEAAAAAAAAAAAAAAAMEBQYHCAIBCf/EAD0QAAECBAQEBAQEBAcAAwEAAAECAwAEBREGEiExBxNBUSJhcYEIFDKRI0KhsRVSwdEJFjNicuHwJENTov/EABsBAAEFAQEAAAAAAAAAAAAAAAUAAQIDBAYH/8QAKhEAAgIBBAEDBAEFAAAAAAAAAAECEQMEEiExQQUTIjJRYXEUIzOBocH/2gAMAwEAAhEDEQA/AMtCfzE3N7i+8cCcLmg1hhM2pI66RyxOKyXF9+0PZRRI25oJJsNPWOjPX3O2xiPpnVKVsQLXtHXzah3taE2SSHwz4ypB3jkVABQF72hiM2o29e8BczZVu3Q9YimPVcj380k21Fx2gJqAKxc3tDCmbtYb+kFqmlXJJMSFyShU+nTUEX6QYmohI0PveIkqdNxqbX27R0uolAteH75I1fZIJupFSNOkN7NSJqaEj+Ua+8N6ObMqFvCD1P8AaDW5duXd5uZRc28WgiuTT4JxXJqbB7hxLw/lJ5Crvy55Dve46/aG2tU3+KUqYld1LScg7KGoiosIcT65hJmYk5JTPyswQXGVpCgogaEf9RMKHxVZnHwiel+SSfra2B9IEexKEm+0EvfjJJPsvz4dnmcVYNalXUn52mLUw6P9p+j+o9otxGG2mVfQAk9YzZwWxizhjie7KtTCEUytNgZgbgL3T6a3HvGjncSKLbyOYPw1a3G0czq8c8eVpPg34JR2V5RX3F7B7clOSlYaTugsOkdeqTFcqd0ASbDsYt/FdZFZo0xKOPtG4uAAL3G0VCWRe1tb6x0fpuSU8W2XaA+uinPdHyVtxVoofbMy2LqPj03uNFfpY+0NHCDE5oFfbQ4v8B3wLHkdj7G0WZiCmifprqAAVo8aATuR09xp7xQ86yuiV0t7IKsyCD+U7QUfZmiriaQxi2qa5IQ3nUVGwSLkw2yOB5ybUHHUplkW2XufaFeBayqt0lmYKwXGk8pRvrcdfeJC4+u5JJJ9YSUfJmlu8C48OaLRqXJzr0w1MOOozrQ4pIyHtlveGaUmZNVVKnWTNSygoJS2rLl6A/8AUKlz8y6nKp0lNrWIG0JGXHZMqDCuXmBScqRqDuI1+7BL4ozbMj5k7PKi/MFpRLvOTawKug7CBCVxTgSpJJKT0tAiHu2Wwx7VTM6fwuVukhlI73ED+FyirBTaQLa2EcT8yZeaWgE9d4JTUQlWb/14SpqzXymHfw6WB/0xod47TTZRdwWk+0I/nxcqJgInxa+Yw1UP/kVro0mjUIB/9tBH8JlM2XJe380ByfGW4OvnCczyS5ckf0hUJu+BSqjSRWCGxYRwqjSJuOUL26QSidCWxlVe8D5xKxfPfTpD0kPbfYb/AAGSyKPLGb9oZ59mQUhz5VoLWg5TrpeFVRqJQza5F9rbkwbSaE7UEystLJvOvnMbjYRCUtqtlkIObpDMy6ZVIcyFKeyReFiC28MzjiRmtZRN4s6X4PVBcunwpuRroYTq+HyqTZshxLQJ1uNIwvWYV3IKr0zVPqBWs1UGJNSGy2Fnoroof0MJXKq409zkJJA+q43i9qN8L4aQlc5NOPHskWtD8OA1MlmlI+Xz3HiUrWKH6lgXFmuHompauSoo6l4ockZ2UmUXSoLSpIHQg6GNc0nG/wDH6KxMJIKn0AqCDsbW1+0UdiLhIKRTluSJPMaOcI7jtEeoHEmbwwlBbu5J3IcZUdUnrEZxhrI7odox5tPl0bSkuzQy3AQSpRzJ6d4SBlteY28UR+i4ulcRyiJiWWkpUkFWux7HsYdJefSHgnbpC062OjBme+HDFLsikKNk6bxSPFjD5ps+mZQglvQj/iT/AEN/vF7cxS0+EXHpET4jUb+MUF3TxNi+g6df7+0FJJIxQdOmQvg3iX5SqiTdI5M0Mlz0V0/tF2rYKVa2jKFKmHKXOgfQtte40IIMamwvVRiKiSs4FJUVoGYD8qhuIb9EclxdhiwE6ajzhbhp+jy1XbcrsrNzdPSkhTUm6lpZPTUgwcqUzA/+EIZmXU2g2GkPRCLRJMW1vAsxRVsUKgVOVqBULTE5OpWlI6+EJF/vAiEuIKTr7wInY9t9mX8bAyVTVrZJvoIjqpy40v8AeJziWSan5n8S/wDNDIcPSyddbw0H8TVKrGD5gixJNrx2mZIt4lE2h/FAl7HtfTtHRoMuLgi/W/lFlkSNqm7Hr11vvBQmlZtIkaqDLKVcZgP2jxWHJUG9zc+cLkalfJHjMrBCQbpjlyfUyCQDmGwiQmhS9zZR3vDbiGlNSdNLzd81wCewiKZIapuoOTTIQdV9I0RwB4dulpurz6CVuDK1mGgHeKZ4d4dYxBWZMOm7RcACO8bUw62iUlZZtKQ2ltISANABAX1HO4R9uPk6j0fTRyT96Xgf5OjMoSlJRfpe0L1UhlsAhIvBCKxIygHPmkNjpdUOMrU5KdSotOpXYdI5l4p1dHaLPjumwv5doIAygecNk9LpdzWFhaF9Qq0rKIKleIJFz5xBp3ivRUzKpe5Q6k2KYlHTzn0iGTV4cf1MTVaSDjT6FJsLGMpcRKWuiVieWlN5dayopHnGoprFFPniQ2+Bm7xRXHGScp7iZkDOw6Mye2Ybj3EG9A5Y8m2XFgD1XbqMO/G7oZOB0+pypVGWC7tloOJSTsesW8JohV72PQnvFGfD+0tzG044hJ5SZVVx0FyNIvJ2T5bytdL3F4J5F82calxyS+nvGalG3QdCP1jyfaQqXWlVlBQykWhDhR4JW9LLV4frTf8AWHqrspbk3F503CSdovjyjHJbWZkxrTBS6wp1CCAs2PnbY+4tFlcDsTBEy/SnF/hujmNC/wCcbj3H7Qg4s4cLlLanUC6mrIXYfY/fT3iu8MVp6kzsvNMmzrKwoe3SLqaJNqcTXxdSUW6iEUylKgekKKPMM1qkSs6wpPLmGwtIA28o6ekrJOoP3h+zInXgYX2bqIAIgQ90t5im1OXmZuRRUpZtV1yq3FIS4OxKdR7QIf8AY1WZTqjocZacG5TlJ9IZkToyi4BPnDs8C9TUqTqoa3vEMfnOQ+6m9gg2iGOgjNU7H4TmXL4uto9+dy65v1iPpnFFQN7iOlzxjTwVD2idukZSLmPVTdk2Ise/aGFicCUjUm/aD1zIKdzfziLYqY5iZKrm4ENlddU/IONgXuL99oJRN9Dt1hbRWm6rWpKTeXlafdS2o9dYi3SbJKLbSRLfh2pCpqv81wWalmy4L9zoIvFdbqVSnXm5YCXlWzl5y9tOsRTgvhw0Wq1uTdbKXG3AyQeg7RaFawM9U2AzmUmW3KGfBm9SI5vNkSz3I7bR6WctMopfsgtYlJJpAmJqsvPOJGYgqCU2v+14mOAa0jnNtpupDnhClQZMYYbnabL0xynJdYl0lLSV3OUXv031HWFdDwwikTiXXUBC0apSBa5PUxTqM+OeOk+TZp9Jkjl+S4OsdVNUk8iUSoZFJKisdB2iHmjNSdGXXESLE6C4UBF05yqxOx11ta9t4sTF9MZecaeIAIF8w3EJpbDM2thDss6Mitbi0VafUQhH5I06nRznL4MrGmzkriF0y05SHaW7lzJVktv00jniThlFRwLMMK/EWwAtCgNdItuTwqiXeU7MnM6De6jeGjGdNZXJutJtlcbKTbzEL+TF5FtGekccTUu2jMfA1CaTiGpMqSbPpCUK7kaxcs63lQFWIsbGIyxgVeC8BJrM0OXOiZS+B/szZbfY3iWjLOSoU34kOICkn1EFnkWSW6PRxWfSz09Rl2+Rvkp5UpNtuD8pvfyia1BTc1T2ltkLQ8oWIHQaxXUwpTSspuCDEgo9efmWJeSS0CJcE572320+8bMTt0CsqqO5j+wujhmdYrFJVVWnWihtCZkshCj+Y2Bv6Rlioyq6TWpiXWgtlDhGW22saZmcx1NrxT/FygcmdYqbabBwZFkfzD+4/aNso8WZcMlur7ll/DvidNQps5Q33QXZY85gK6oJ8QHof3i0p6XXySMiNeyoyJw+xSrCWKqfVSboacCHR0LatFD7a+0bMmmW3pJLzZCm3EhaVDYgi4MRjyPOO2X4Im6yUq1Fh2zXgQueb1sO8CHoqU66Mi0wF2XW0VHtvaIlU6M+7UHHUFOVWvbWJfTFBqeeZO4JAhtqS/l3ljfxHW0U4+HQUlwiMt0eabIzWNj0MGOUqbI0APWHUTgKja23WDEzid0n3jTRRuGJmlTaARYZhClNPeULBIJ7CHNU6gAkn/uPBNpFze4PaFt5I2/sNaqY8nUoue0OGHKW8ivUxZNkpmW1EjcAKEGOT17dfXrHslURJTLT9/8ATUlWnlrEZr4suxy+SZrNuRlZDEkw+zfmTBS46TsTbeLHlKq2W0osNtYrNKguVp80ASXmUKzeoBA/WJFT5ha1pJNrdo4bLBuXJ6pp8katdE9fmZWTleYgJ5qhvtaKpq/FGnUetMSvIROTSnPxF81I08gd/SIVxPxhW1VsU5p5UnJKIRzNsw9YJkcCUCoJC1pn6pMJFy4ynwg+RjZj0kdqeTyY8uryZZuOFdFp8R+LFMk6Kw9JNyy3SsH8XQIHUnr5WhmwdxgpUxMuATTDC7BXKKvDfrDGzgSVbkwh+jTc+2lISgTSx4B5a39zEUxNw/k5tpaJGgOyj6iCFoWMqT94vWDEo0UznrI8/wCi+53EsnWZD5iWWlwHqg31iKVV9TzYzbbQycM8FzGGaO8H5hSkukL5ROiDaHyfRdsBOutgBrcxh9uOObUXaNkdRPJiW9UxJW6U7jDCs1SAn8Z1sloAdk3v9wIg/DKYXUaByFpPzMmosuJO4sY19wP4MT0k/MVOuSJlWy0EsNP/AFkk3KrdBGf8d4YZ4SfEpO01NmqLXR8wwOiSvceyrxdhz2pQSOc9Sqc1KL64IViOmrlplLgScrg+xhHh1madqzbLKglTyw0Lm2vnFuYxoMvNUh8tgc1g59O3WKqlW1MJS4k5VhWcHqDfSCumzqaT8nN6jHSLEPC/E6rnktAd1OCG7E/BKuVuhTMu45KpXlzJAUVHMNR09veLvwlXHsS4bkp1mU5mZAStRcSBmGh09YfqVKMvzSk1NSpJgJvnZAdUT2tpHSqCmuDnFkcHyj5juSbsnMvyzqcriFFCkqGxEa7+GBauImCFyUxU1Im6UsMKayAnl28B1+3tFW/FZgWRwhxGMzSVPrp9RR8wlbzYR+JfxpsCeuvvDP8ADfxDc4fcUpEqdS3IVO0nMFeqE5j4VH0NvvGbasc6CM2skNyNnjhXIt6uzMw6euwECJtMU6fcSLTyW7//AJsA/qTAi9xRkXJ8vawgU/FEwkDRSyQB5w24nbKGHHBobBX2h4xu0Wqy06BotIN7/eEVfY5tNCkgEKSU/cQKh4YckuKIMiduSQbk+cdtzl9L210hlzqCsvXbQQah/l9TtfWNl2ZKHMzult/SAmfzAC9rQzJmCtR3j1tas4Ftt4l0IelTthYG3eOUThFuvrDW46e/oRBbbq1KsD7Qw66Lw4X8Vqk9U5Chz81zJGxQzmAulVtBft0jR1FnEONJJOvUxgtqYcln23W1FDjagpKgdiNo0/w7x+rElEbm0H8dqzcw1vlV39DATW6dfXE6j0zWNf08jLdmaTJ1R7mPsoctYgKSDaHiSpqJJsKaskW+kCw/SIRS8VNqISpWnn0iWyFYQ8hH4gI7iAdZFwdLjyQ7sXLQtZsoaEblO0JX6e20kK1UDtCt+sSZZy5wCOl4jFVxUzL3Q34ldk7CJSU5NIslmilbFs1PCWSEG1r6xEsQY+ksE8mszbHzktIvIcMrmyl4hQIQD0vaErs/M1V4pRdAOpN4o3j1iJ1NalqEMwYZaDywDqpauvsI14dOss9kgTqtU8eJyRtCm/4jeDcRIbbfkZ+hTJ0KnQHWxfzGv3EV78UFX/zxhum4qk30vPU5xLqHmz9TKu3obGMFT7y2imxCRbYGNFcAMeIxVhKcwbU151tsrDJUblTZ3A/4kxsyaOGBrJjOWx6hzThPyW5RsZKrVAl5wLKi8zlVc7m1jDFNrEq+pr8vQ+UQThvUXqdNzuHJi/NlXjbyAOv9ImVcRdCHhvsYdQ2SpeSh2+y5/h8xOgzU7Q3HLhwc9kHuPqH21i6HmBa+0YxwdiZ3DmJafUGzbkOhSrH6k7KH2jY8pX5WoyzL7Db623UhSFclViDB/S5HtpgLVQUZ7l5Kl+JTAYxZw+mJlprmTtMPzLdhqUWstP219owzMJLJzoVlWhWZKtvePqxU8IzDku2l5UopqZ/Cy/MINwodddBbe8fOzjlw2c4Y4/qNGcU0tsK5zK2VhaS0rVOo7be0Tyxv5Iv08r+Ejcnw58REcT+FNIqDjgXPy6flJodQ4gWufUWMCMo/BrxVTgbH0zh6cU6qQrKcraGxmIfT9Nh5i4gQlNURUdlporLiFJENsOjXIooIMNa8sxRkgDxAX+0SfiBL5qfN66oOcX/92MQ6jLVMSTjY1IGkB4L42GeLIo7h9lx9akqIKiSRHK8ONKSSVHfaFVQmPlZlaTp0hOmo66nWCUaaMbbTCUYbl21iy1EWsY6/y+0NQs+/aDBPXFxsYCZ0BJGa0SasVnJw+1vmsnzjhOHWApNlkW8toOVOlWnuI9E3ktrcHoDCoazz/L7SiLqJMW/8PlJQmq1SWSq4caSoA+RP94qZqZWVadekaq+Czhn/AJ7mcXPCyZ6Wkmvlc23MLl7e4Tb3jLqYOeJqPZv0OWMM8ZT6FNSwgZZedAKATeFNLk3GkhGRzb8piz5+hqDa2nUZXE3SpJGoI7w006k8t6wSdO4jjXnklUuz0daeDdx6IsuhPTCf9FZV2hG/hh1IUVJsDrYCLiRT0BgKCOm4hmn6UVaKGpMMs8+aHeCP2IVSMNBuXzqTYW2tGTfiLp8zJcTpwusrYu20UBXVJQCk+94+hWDMEOYtqKJBF0y6QFzDttEI/udhGSvjfkZUccqvLNICWm2ZdpKQPpCWkgD2FoOel4pylLJI5r1nNCMVgj35MpVNPUmxI2MS/gLPLk+JFMINwvO2q/YpjqY4ZT0/ShNyK2ptFtUJVZST2IhXwTwvOjiGwt+XdYTKpU4orSQAdgIMZXFwaOXWOcWm12WfxDQcKcRadXGtGJwBD1u40P3FjFgulM7KWBuhabg+UMfE6jHEGEJkoQC/Kq57Z66b/peE3D+uisYZl1FV3WPwlJJ102P2gddwT+xdkTjJ/kOTJFteqvvpGpuAuJP4xg1Mg65mmacrl67lB1Sf3EZjnjy5gkaBWvpE34L4uVhzGUuh53JKzv8A8dwHbX6T9/3jZhnsd/cHZoXHg1M8gG97axm/4u8DCfokjiRhNnZM8iZKR/8AWo6E+iv3jRLswTe5tEfxZSJfE9Bn6TNpCpecZU0ryuND7Gx9oKPlNAzHLZJM+bYqExQapK1CUWWZqWcS624NwoG4MCHTGdBeo1WnqdMoyvyzimVjbUG1/feBGKgs47uSxcZS+dlYNiHWyB5xW2Gn8k6WyAQBtFr4lRzJNtRGoVFRyLPymI1NX05hHna8D8buJrfaGTH0mqTmkuIFkqsbxE0zuuqoszilTSKOHU621HeKkkZWYnVhLDanSegG0EcTTiUZI1KhwTNa/VeDkzNwbqEKpPB8y5YvrS0BuBqqHuVw3JSifGgvK/mcOn2i+ilpEebWt4+AEm+yReHBimTjiASjKD/ObQ/+FtOVtCG0f7RYQbKy/PmBc3A1Jh9rYqQnptJ5RUtw5l29hG2P8OWya3i9oqssyjK0i+ps5r+4jHQbJeUL2vt5iNTfATPKkuLbsuCUpmZBxBHexBiTikhm6Zrrinw5eeU7iGjs84K1nZRA1v1cSP3EU9LMtuTQWk2udQY2JTjy3Mp+lwRUnGHg/wApT2IKEzZYuuakkDRQ3K0Dv3Ec7rtAst5IdnXemeqPGlhy9eGVt8q2ykKJsB0MI6Zh6dxliJqm0trmOHxOOkeBpPVSj/68JKZ87iepy1KpqedNzBslJ2QOqj2A6xqLAuCZHA1CTLS45j6wFzM0oeJ5f9uwgfo9G80rlwkFvUNetLFKLuTG2hYSkcFUZumyg1PjfmFABTiuqif2HQR8l/iLxIMZcWcR1VteZt6ccDZv+UHKn9BH1N4z4sThHh5iisuLymXkXAg/71DKn9SI+QNfd58047e+Y3JMdpjgoQaR5/ObnLdLsbJKfmJAKMu6tsncJOhiWYc4jzlHSUuS7UwFHxKtZR94icui1yRv36x4lstuG6T5CISxRn9SHWSSXDLekeKVKnGyibQ7LBYKSLZhb2iJYBnEUfFM7JNuFdPfWrkuWsnun+0RRbBSkW0J84CFqbXe5SQYz/xIK6HlmlLiRedQQHWMySbpPaGpDymXkuIUQtJzJUNwR1itJPEVQlrpRMrCD+W9wYdpTFy27B9HMzblOhtFK07Q25NG58EYrGJcMSM7mBcU3ldF9QtOhv8AvDq9M+kZt4H8UKdIuTNLnJ5uUZd/EaL6soz7EX21/pF6IqTb6AtC0uIUNFJVcH3jdFuuQRkioyoz58TeCks1pmuMJs1PIyOkdHUDf3T+0CLV4o0dGKMFVGV2fbRz2FfyuJ1H31HvAiiad8BDFkuJUVTlkv091JBVlF4prEct8piTmtqGWyTodjbURY9QxpKzWGpmYlUOoSv8Jtah4SSbG3prFazAE08De5Kb3jHpcLacn0bczlidPs7q1bNWkxKuy6VsjQ3Op9YaWWUSqAltsNo6BAtaHUSYyZQAR3j1MvkuCAO0FI41Hgyym5cjfmNrq69Y4KSoC4Fx+sK1t7kaEGC1JygKy3HnFyS8EG76CFA2uQddbQ5SLIbRc6KVqbmE0ozz3LnRKe+msLiddLEDtEaFyecmy82um1heNEfBROtynHSjNK+qZZfZB8yi4/aM9c0Aa6adYtv4XaoKXx2wc8pWXNPIbJ/5Aj+sSdURs+q09PStFk3J6ceblZSVbU8884bJbQBckntvFE1T4m5mt4ukaZSpZDFHmkB1maK7LW3r41X0SLAn06xZ2NJBrHdMdphCZijvNnnBJul8dRcbp3jMmKuG05wqxZRCwwio0YNOycqZj6VJKVZGXCdtym/WMk7jDcuzVCpSSLQodckqVVHqoilU2VnKg2S67LzKlZk3F1JBIAHVRHlEjwXxCnJyvtUx5cu9JzzS1NuS8xzEJcTrYX11AMQSnh4sU1ycobTTbcqtLiUIKFNq3DSLlVwq1jf/AKhHhvCL+K8bUOeorj1MlcOutuvp5hWhd05uQLgHrYg7DYaxgw5ZSlsQW1OGCi5S7EPx24k/hPCdinJXlXUZ1OYd0oBV+9vtHzim0KdCrXzdI27/AIhdabdmsKU9pQU1yXZgp6glWXX7GMTqGZZOnqINqtqQCfYjYatfMMhHeOXGitOZCSSnreFxstJsDnt944lRlB033vpCaGsQKUVZdQT0v0jzLdVjfzvtHU0kNPZNNdbDpBrbdyBqep9IjQrPW2ivSw3g4Spt7aQoaaAF7awpbYKxc9el4mlwR5Y2pZy7bxMsBY/qmEJ1Blppa5POOZLqUShQ66dIjczllGFuEagaesCQZLbCCr6jqo23JhVXYzSapo2BNVZqo0ZTzZu260Fp9CLwIr/A1XVNYIlAtdylKmrX6A6fpAgfP6uSmFK0Zvkp53+EtyefM0lRXlA0vboeog5x8tLlXAbJJyH3EJnHUFxIayqQnwJKdiB1gx5Idp6k3soeIfvF2CKWNBTVNPLKx1Wq43v5mOBZSb6ecJGpjnSragRdQBMKWUlCO5O942NpmJfk5UnMD19oSzVmkFZGg1Jhdm8Ou5hPMNZswtoYj+h7BJPMuMfhKCwNCRBtwBsQOljDI9T1NOhyVWpp5XQbH1h3ZCygFywXYAkbXhDNnYBvcnXsIkWBOWrFlGQ+ohhc40hwpUQQlSwDYjbQxHsxz5eghxoTvy1UlXVbJdQr7KBhPgY+q/w1TC0YCVh6dXnn8Ozj1LczG6i2DdpXuhQ+0TjFmFJeuUSYk5ixQFEoJ3QQNCD0IPWK8w64MK8XpNxKssniymJXY7fNMAG/qptX6Q9ca8e0+kSiqW7PNyxWguzASsh1QtdCE22zEa+WnWMs/jyaIK2ldFJ1dD8hJzUvLqbWGZJMuHm5sh5SdbHKkAJ1/Mew7xd/C2mCnYLpbAJK3WkzD7qzmUpShc3PXoIz9WcaSDdFnFLdlA04y4JdlcspDilrCPCtdrBIy2vfW+2kWDhni/TcEcBJmsvLampqSCZWVl2HAtTzyhZppNv92noIwaaL9x2uwlq5qUFtlZlH45a61VeMTsmwtK26bKtS5y9FaqUP/wChGblXWLaaabWh8xpVqlV69UJurKUqqPTC1zNzchwqOYex09oYk301I1g0/sB7PEgqum97aXhsmhOKmFobcSy0RosDxGHUgZbG9/LaCHQlaCFA3J3huxK6EUvTUS6iu6lrO6lG5MODDdljTSCUu5FJbVqb/eFaRrdIP36Q6QzDEBNzrfzhQlJQO994SBzMQNh6wqbsUb373h18Rm7Ek8vnTDEuDcE5z6DpCtZOlje3QQjlVB2sPKABDaQkQtzKuBbwnvDd8iRZfDtwOUYam7bihvAhBw0mAEzbJ2BSrLAgXlT3uycV+ClMPpHyaFAlWZRJvD/KoSStH6QkNHcobUtKrSUOISlSgTfUi/8AWFbKcjtwSNY3YvlFNFk+ZMRyJ5a3WNPw1EW203h4QFZNBb1hjB5deeT+V1IUL+WkPgBKbg/eLuLKrXk9ulKjex07QTMLDYAIzEnTtBi75dRrCeabUWQQDm3BtD0RA2nxWUfFveDgQo2ve43IghtzO2FDYja0GBJ9D2hkI6uRe52G8HyailVx/aCCTcEC99oMlgCsHMd7QqsT4Pp5j6cda4IYIxxKNqfmqD8jVCEfUprIlLo90mM9zvH3F2L8TTk8nhv/ABFiYe5jTrrbijl/KNE2NhaNBYRqLVd+FnB8i80JtFRkG5N1kPhpTiUkgpBPUlKRbteK44G1iZaxazhmtyoE7h5QZanVPKsthV0pyg/VckC9rWSDuIGZcyitlWEsGm9yO9uiusZ8bjJybUvibhsuSbN7utNKQq/lmSn94kHAKf4e45xRNVWRZngvDsi9VTJzmjQUlNkrt1UnW2sWpiVhmRolZfmm6pLpecbExznA85crs640PFayVZbgdBaK+4izlP4c4Em5+TkJWSqNRoD7L74YDUw4VqbSAqwA/Mq47xVizReRRUaLc2keOG5SsxFiOeM9WJuYPiU+6pwnzJJP7wiQfBf6VemsezTmdxSgm9zcCOUgncwY7YJboC1eK4BVffzghxzVSSNE72g5wHMRtCJ5eZ5LKR9X1ekKxKzuRa5rpeOo/KLwvV4Sd7nz0Ecss5EpSE6bAwJgWIFttB3h1yKuTxpOfU6g6Wg+5QjxaAaxy2gBu99ITVaY+VpzqjqcpsRE0yLo8w4ovB97otxWh+whwcIDhzaW2hLh+WErSmh+e1zeD33Rn23Oloh+REv4bOgVxaQr62jpfsRAhswQ8pqusEaEAjQQIF509/BdF0hsx+gJxJPIRfK26Ei/kAIbGklZF9LfaHLHKs9eqSgSv8dQKveG5CSWU9ABG7D9CS+wpvliKoN3qMm4LXN0k9/eHpu5QNrAbwzz5OeXVoAFD1EPLVsoA7RclyVPo5IAUAB01jhRGQix87wYVBKyDv3gpXU6Afe8J8MQiaIZfU0R5pEKkKuSNyPtCObbUlSXRuNT6dYVNqCkAjWEI6NiNxe/eO2l5Vpt7wSVkqI0t6R0hWp1vba0NdCZtjgrxBlK3wuwhR3TJLRSm32JgzlyWVF4LCkgA5jkFhY6EiJPxMQ/K1xzGuGnJNE9S2y2oiazGosFCQEZQbjKAVdNdoz7wA4p4PwhQZqm4hpc7NzJmC6l+VOmUgaHxDUWMXQnjJwon2wA1Vpa6bla2yQk9RoTAzJibk5JMIQ1bjBQdUiZ4bxLSMQYCNSpompaWemA3y5FfNmGPCo2UPEUZloToOpHQmKV+MOsqkGqbREzDqUrZRMOsqSAFrJJKie4ygWGgvDfjCuYTwNOLr2BsThaFfiTVNfK21K80HKLK8oqLi5jSRxpPy01TahMTzBautMwCFNuE6pNyegGohYsDjkUv+FuTV747WuStnCSo2JvvBzagACdAe8FX11N+0dLJF8o9oKIFcnj6whtSio2GsEyLGpfXfmL38oKePzz4YTcJR4l279BDkhhKEWtmt3MNVCujovBNgogf8d4SPzKAb3zAdAIUFIJ2FgITuqCb6Dz1iXaoW4DcynkgeIE23EN2I5m0sy0knxOBJPvCkLAWADe2toZK44ZiryLKSbFdyBvaGpDdMl8mT8mjcaA3jkgq8/WD0rSJZCRcWFtIRlw7WyxPwKiWcOJFyqYrkpZsEuOryJSOt4EOnAOcEtxZwzzNUOTaWiD/uun+sCBubHulY6ZDMWoUmr1AOOc5fOXdwAJzG+9hCOWF2E6+Ej9YECNeL+2mSlxJiOeRy1tHU+MCHdnRvU2gQIsIrk8KQFG5tAUA4nS4IgQIcj0gl1Ge6STCJg8lSkG5CdR6QIEMSjyg5JBO/oINbsk+GBAiJL8GoPg4l5GcGKGp5lM0xLtfMrl35dLrahl0NyNFApOnUGNFyOC8MVPBzkyiWozy35nltVCoSCEpQnLmVlSkAG1lgH97QIEA88pLI0mdDpoxlg3Nc2RPEXAvBdSqNNll0WmtOzSG1TTcu862VlYV/pC9gPw1HXe/SMbcZMM0bCHEKu0agsrYpknMllCHHM6swAza+t4ECL9JknKdNmfW4oRhFxVWQEEXta0ePzAaYVexOwA6mBAgswK1RxSpYtZybqUrU3HWFh5l7aDTS8CBDjSEygsDVy9+gEJngoA+JR94ECJdDBKFpbzLI1tbeI5Mz6RiJvMTdIsOnWBAiL6ET4C7KTtpBKz38XSBAhxo9jxgmqLpGLqPNg/6E4y5cHaywYECBGfIuSqbpn/2Q==",alt:"Manoj Sahoo"}),(0,g.jsx)(em,{children:"Manoj Kumar Sahoo"}),(0,g.jsx)(tm,{children:"CEO, Co-founder"}),(0,g.jsx)(nm,{children:"Manoj has 25+ years of experience in Product solution, Engineering and Development in two of the India\u2019s leading Products, Finacle (INFOSYS) an enterprise solution in Banking and Financial Services and Tally the most admirable product in SMB segment"})]}),(0,g.jsxs)(Xh,{children:[(0,g.jsx)(nm,{children:"Manoj K. Sahoo, Founder and Director of Atomwalk, drives product development and innovation with over 25 years of experience in engineering and software solutions. He was instrumental in building two of India\u2019s iconic software products: Finacle, Infosys's global banking solution, and Tally, a leading business tool for SMBs. Manoj's expertise spans payments, supply chain management, and delivery excellence, with multiple patents in product innovation. Holding a B-Tech from NIT Rourkela and an MS from BITS Pilani, he leads Atomwalk's mission to deliver ERP solutions that enhance business efficiency and digital transformation."}),(0,g.jsx)(rm,{href:"https://www.linkedin.com/in/manojksahoo",target:"_blank",children:(0,g.jsx)("img",{src:Hh,alt:"LinkedIn"})})]})]})}),(0,g.jsx)(Qh,{children:(0,g.jsxs)(Yh,{className:"flip-card-inner",children:[(0,g.jsxs)(Zh,{children:[(0,g.jsx)($h,{src:Mu,alt:"Lipika"}),(0,g.jsx)(em,{children:"Dr. Lipika Sahoo"}),(0,g.jsx)(tm,{children:"Founder and Director"}),(0,g.jsx)(nm,{children:"Dr. Lipika Sahoo, with 24 years of academia and industry experience in technology, innovation, and intellectual property, holds a PhD from IISc. She has triple master's degrees: MSc from Sambalpur University, PGDIPR from NLSIU, and PGCBM from XIMB, along with advanced certifications from WIPO and IIM Bangalore."})]}),(0,g.jsxs)(Xh,{children:[(0,g.jsx)(nm,{children:"Dr. Lipika Sahoo, Founder and Director of Atomwalk, brings 24 years of experience in academia and industry, specializing in technology, innovation, and intellectual property. She holds a PhD from the Indian Institute of Science (IISc) and has earned multiple advanced degrees, including an MSc, PGDIPR, PGCBM, and certifications from WIPO and IIM Bangalore. Dr. Sahoo serves as a reviewer for various government innovation programs, such as BIRAC-BIG, SPARSH, and TATA Trust's Social Alpha. Her extensive expertise supports Atomwalk\u2019s mission of driving impactful, socially relevant technological innovations."}),(0,g.jsx)(rm,{href:"https://www.linkedin.com/in/lipikasahoo",target:"_blank",children:(0,g.jsx)("img",{src:Hh,alt:"LinkedIn"})})]})]})})]})]}),(0,g.jsxs)(Vh,{bgColor:"#e8f3fc",children:[(0,g.jsx)(Kh,{children:"Board of Advisors"}),(0,g.jsxs)(Jh,{children:[(0,g.jsx)(Qh,{children:(0,g.jsxs)(Yh,{className:"flip-card-inner",children:[(0,g.jsxs)(Zh,{children:[(0,g.jsx)($h,{src:Uh,alt:"SK Patnaik"}),(0,g.jsx)(em,{children:"SK Patnaik"}),(0,g.jsx)(tm,{children:"Advisor"}),(0,g.jsx)(nm,{children:"For ~25 years, he led Business Management (Client Relationship, Sales and P&L Management, new GTM) roles mainly in the IT Solutions & Services spanning global markets (the US, UK, South-East Asia, and India)."})]}),(0,g.jsxs)(Xh,{children:[(0,g.jsx)(nm,{children:"SK Patnaik, who joined Atomwalk\u2019s Board of Advisors in 2021, brings expertise in business strategy, product innovation, and revenue growth. With ~25 years of experience in IT solutions across global markets, he has held key roles in client relations, sales, and P&L management. Previously with Infosys, he led APAC and India operations for the Global Manufacturing Vertical and has deep experience in the ERP landscape with platforms like SAP, Oracle, and SaaS solutions. SK also co-founded a deep-tech telecom startup and holds an MBA in Marketing and Systems from the Xavier Institute of Management, Bhubaneswar."}),(0,g.jsx)(rm,{href:"https://www.linkedin.com/in/sk-patnaik-",target:"_blank",children:(0,g.jsx)("img",{src:Hh,alt:"LinkedIn"})})]})]})}),(0,g.jsx)(Qh,{children:(0,g.jsxs)(Yh,{className:"flip-card-inner",children:[(0,g.jsxs)(Zh,{children:[(0,g.jsx)($h,{src:Wh,alt:"Dr. M R Jaganath"}),(0,g.jsx)(em,{children:"Dr. M R Jaganath"}),(0,g.jsx)(tm,{children:"Advisor"}),(0,g.jsx)(nm,{children:"He has an illustrious career  as a Scientist managing deep Technology, Translational Medicine, Drug development , Drug discovery.  He has published numerous scientific articles in reputed journals."})]}),(0,g.jsxs)(Xh,{children:[(0,g.jsx)(nm,{children:"Dr. M R Jaganath, who joined Atomwalk\u2019s Board of Advisors in October 2023, brings expertise in lab management, Good Laboratory Practice (GLP), and Good Manufacturing Practice (GMP). With a PhD from the Indian Institute of Science (IISc) and a distinguished career as Chief Scientific Officer at Connexios Life Sciences, he has extensive experience in translational medicine, drug development, and drug discovery. A prolific scientist, Dr. Jaganath has published numerous articles in esteemed scientific journals, contributing significantly to the field of advanced medical research and innovation."}),(0,g.jsx)(rm,{href:"https://linkedin.com",target:"_blank",children:(0,g.jsx)("img",{src:Hh,alt:"LinkedIn"})})]})]})})]})]})]}),om=n.p+"static/media/sales.ba949556d3121afbc087.png",am=n.p+"static/media/concentrate.7f7fc25cb1fde510b1de.png",sm=n.p+"static/media/goal.969464dc2886052b3fad.png",lm=n.p+"static/media/online-learning.20f782a0f780a57d90bb.png",cm=so.section`
  padding: 70px 40px ;
  background-color: rgb(225 255 246);
  text-align: center;
`,um=so.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 110px;
`,dm=so.div`
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
`,pm=so.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom:100px;
  /* display: flex;
  align-items: flex-start;
  text-align: left; */
`,fm=so.div`
  flex-shrink: 0;
  margin-right: 15px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${e=>{let{bgColor:t}=e;return t}};
`,hm=so.img`
  width: 40px;
  height: 40px;
`,mm=so.div`
  flex-grow: 1;
`,gm=so.h3`
  font-size: 1.2rem;
  margin: 15px 0 10px;
  color: #333;
`,xm=so.p`
  font-size: 0.95rem;
  color: #666;
`,ym={improve:`${om}`,excellence:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA7SAAAO0gFcPFpKAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyO34QAAAP90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+6wjZNQAAHltJREFUGBntwQdgleX58OHf+yQ5WUASCCQEmS6cqDgq4oytFcVRRytq6561tbZ/u7S1rbZftRW1VatVW2dbBbXuLYJYNyBuGRIgjCQEAgmZ5/5swzLjft9zcg45z3ue6/JwtuDtv8+QIdsMKWurWVWzqmbVqprlcysJNQ9nIzP+xBPK6Kh6zntz5rzfihNyA65fJt1aM/WcbXBCLOOiVeJj7nWHRXDCafxsCWL1jaNxwifzdgnsxRMyccIl+98Si6VXleGESJ8XJUYtDwzHCYui/0jsGn6VhxMKubMkLhXfxAmDmyRer+yBY73yqMSt7S/FOHYrWCQ9UfkVHKv9XXqm8Qwcix0nPTY5A8dWGZ9Lzz3fH8dSx0sizNsFx04vSkLUHYtjo10kQaLn4VjoVkmU1gk41ilYJwmzdi8sZUhb384nYfo8MQw7GdLWBBJo8JMFOFaJrJOEeiELGxnS1VfySajyv2KjDNLV2QeTWHvwCo49XpOEOwH7eKSpfjWZJFrl6LXYJoM0VX46inkft0QixKpv9nM4lviRaI4F+mx72C9fapBYtOyCY4nbRdGQywaR8Vc8Xy+BTcOxxDRRPMqWssqntEhAk3DsUCmKM+hgm98sl0Aq++LYoI8oosV0kvOLBgniehwb7CmKKroy7CEJoGVXHAucLIo5dO3QReLvZaxiSE8DUVTStZf3noGvQ8ZiE0N6KkBRSTeqym/H13nYxJCe+qGopDst51/cio9T8rGIIT0VoFhK9265GB99v4VFDOmpAEUlituvxcd5OCnvCVGMQ+M9JD52xx6G9FSAIopGTn8d3bnYw5CeMlF4qBpPWIfqtFysYUhPURQeusrfoSo8CWsY0pOg8PBx/eeozsUahvQkKDx8NF6OanwJtjCkJ0Hh4eehGajGYQtDehIUHr4ujaIZhy0M6akVhYevd6egGYctDOmpBkUm/u5DMzYbSxjSUxWKUvw9W4siey8sYUhPVSjK8Nf8CJpxWMKQnqpQDCaAf6IZhyUM6akKRRkBvLQSxTgsYUhPVSjKCKBtCorSUdjBkJ6qUJQRxENoxmEHQ3qqQjGYIN4WFPtiB0N6qha6l1dAAOs+RzEEOxjSU1stijKCeB/FQOxgSFNNKAoIYi6KQdjBkJ4OGIwinyDeRzEIOxjS0zlo8gnifRSFWVjBkJb6noQmShCftNA9rxgrGNLSKflo3iKI5k9RDMIKhrR0Npp5KwikEsUgrGBIR7vti+ZVgmlAMQgrGNLR2aimEkw9ioFYwZCGsk9DU/k0wTSgGIQVDGnouAFo7m4jmAYUg7CCIQ2dg0buJKAGFDlYwZB+RpSjeWU+AdWjaMQKhvRzlofmToJqQNGEFQxpx5yBZvVUgmpA0YgVDGnniKFoHlhPUK0oGrGCIe2cjeoOAitE0YgVDOlm4DFoZs0isCIUTVjBkG7OzEJzJ8EVoWjECoY0Yy5A03g/wRWhaMQKhjRz5Eg0U1cTXBGKJqxgSDMXo7qDGBShaMQKhvQy6gg0818hBkUoGrGCIb1caNDcJcSgCEUTTurJqRZNaxmxaBHFQVjBkFa+NQDN05XEoCATxWKc1POmqI4lFnuJoiUTJ+XsI6plmcRikigWYgdDOrkI1T2txGI0ioXYwZBG+n8L1Z3EZDSKhdjBkEbOykEz41NiMhrFQuxgSB/ehajuICZmexQLcVLNkaKqySEmI0UzDjsY0sfFqO5sJCaj0SzESTEj20TTNpLY/EAU6z3sYEgbFxg0Ty0kNqNRfC7YwZAuss9CdTMxGo1iIZYwpItvFqOZ9yyxydgTxUIsYUgX30V1ixCb3fuiWIglDGli/D5oGv5GjMaj+RBLGNLEZajuX02MxqN5AyelbNsmqjHEaqkoPsUWhvRwqUHz6hxiNLIMxevYwpAWis5E9WdiNR7N69jCkBYuyEez7GFiNR7N6zipJGupqK4iZh+IoiETJ5V8W1QtZcRqQFQU07GGIR1churhSmI1zkPxOtYwpIHyMahuJmbj0byOk0qeFNV7xO5d0ZThpJCdoqI6n5gNEU0F9jCE3w88NGvuI2ZHoXkdexhCb+DpqP5eT8wmonkdJ4X8UlTRHYhZboNoxuGkjpyVonqW2B0lmqYc7GEIu9MGorqe2E1EM70RJ2V4H4pqDnFYLJrv46SOI0V3OrHbQ1Tb4aSOF0S1OIvYXSGaT7CJIdzGlKO6sYXYTUTzJE7quFtUq/sRu5KoaMpxUsbwZlFdSxzOFE1dBCdl3CKq5iHE4RHRTMVJGWWNovo7ccitF81ZOCljsuh2JQ7HiCZaipMqBtWL6inicZdo3sYuhhC7LA/VdcTBHI3mSZxU0X+tqN4mHgeKal/sYgivS/uguo54HItm5Vs4KaJfragWZhCPeaL5O5YxhNYlhagmtxGHXbZF8wROisivFlVNPvH4uWia+2EZQ1hdOADVrfXE41g00+twUkPOclE1lhCPIVHRXIptDCF1bgmqe1YQj2M8NI/jpIbIYlFFdyQuz4rmQ5wUcZ7oHiUu/ZpE83uc1JC5QHQHEJdviepAnNTwHdG9Rnz+IZrqDJyUYD4R3fHEJbJGNPfipIZTRPepIS5fE9XJOCnBe190FxCfm0TTXICTEr4husXZxOcD0byIkxreFd0FxGewqC7FSQnHiO7zCPE5VVTb4qQC877oziFOd4nmQ5yUcIbo5mcSp0WiuRYnFWQvEt0ZxGk7UR2Ikwp+KLrPMojT+aKpycBJAQU1ojuNeD0omntxUsFvRfdxBnHyqkTzTZwUMLhedKcQrz1E01yAkwJuE937hnj9UDQv4qSAHVpEdxJxe0o0l+KkgIdEN8cjXllrRbMtTu/bV3wcT9zGi+YjLGUIk/+HbtajxK0czTM4ve/r4mMi8XtFNCfi9DpvlujeJH6RJtGU4fS6U8XHkcRvL9EsxOl1kQWi+w89cI5o7sNWhtC4YCS6X9ADY9G8htPb+q4U3Qx64g3RjMHpbVeJj0Ppgcz1oqgzOL1s0FrRvUxP7C6a57CWISSu7IPuF/TEXmhm4vSyUc2ie54e+ZNoDsfpZVPEx/70yExRtPbF6V1Hio+n6RFTL4pZOL0rZ7742Jce2Vk0f8ZehjD4+Sh0j71Jj4xF8xpOr9qxSXQtO9Izk0UzHKdXvSg+bqKHXhHFEpxeNUl81A6gh5aJ4kGc3lSwXHxcRg9FoqK4HKc33Sw+5kXooRGi+QZOL9q7TXx8g546UDRjcHqPeVt8TKfHThFNXyxmsNxFY9HJZfTYUBQr12Ixg91Kr8bH/W/TY9ugmI/NDHa7vgDd+p/Sc0NRzMdmBqsdfgo+/riEntsGxXyc3pL9ifhY1ocEWCaK07BZJjb78Q74uGIdPRcpQTGfHsgvblcUiWRFsiJZkaxIViQr0lLf0K6+oaFhzdIlS6qF5PCw2Lbv56CbPTZKz41YiKJkJTExpQOLN8khmKbKJV9YuqRiGYmVicVuzkEnF0ZJgDIU61YSUP6oUaO2HTVqRDaxyx45kv+pmT1r1uxP2kiUTOx10hH4uON1EiEDxVL8eIO3HTVq21GjSkiAAeXlsP69WbNmz11PAnhYq+/HZeiqd1xFIoybSffm7k73Bo35wvY5JEPbG08+OYc0dpv4OZPE2E8U79KlzF0m/f6ZZZJki2+bmEeamih+Zngkxt6ieIOOig75/l3vNMpWsv7p744kDQ1aIT5adiNB9hTFTLZQMuEXjy2Wre7NM3JIN0+In+tIlN1FMY12A474+SOLpbfUXDeKtHKB+Fnch0TZRRQvQNHhP35oofSy6FNHGdLGjvXi5wQSZrQoFvxznqSIBZf3Jz1kviV+niJxthdb1F6WRTq4WvysH0XijBJ7fDKR8DugVfxcSQINFJs8tyshV7RQ/HyaTSItF5u03lxMYAbrmAdG4EPOaSKR5mCTjIs+O5egDNb59dfxc+N0EmoOdim8/W85hNVxUfHzSS6JdapY590RhNOOa8RP2/4k2K5in5qvE0Z9PxRf15JomU1in7YrPcJnqvj6IJuEmyU2erwAXwar/OQb+Gn9ThMJNwcbHf1yf/wYbHLkNfj6/dsk3itYac8XB+DDwyJfeSEfP+/t00zi9Vuei5XmHF6NymCPXZ/Kx0/Ld5pJgrpHsdOYl4pRGawx4tkifF09m6S4B0vt9kQO4VDymfh7J5PkMHPFVvejycASBS/ujK/GCctJDln2LSy1W+sMuudhh9xnD8TfuXeQNG/tTZJFW9q1trRIv4J+uSSInPgw3fKwQs7UCfi7+wyS58BphsRaW1VdVV1VXVVdVb2m5QtRviSr4Av9Cv5n6E6FxG/dzovpjocNBjw2Dn9zv9JAEl39cxKhddGC+QsWV1VXVTcTg9Kdd9p5p51LiMtjx9IdDwuMenoH/K3d+1OSKXP6/vTE6gXzFyyYv6CijfgV7bzTzjvtNMwjRt94BIvtvUKCOIkkG1Yh8Vn4yC9P3rs/CVM86Z4VEpMlfbHXUeskiBtJuu0qJUaN7971vYMKSDxv7BWvRSW4G7HWea0SxH+ySL6dV0hgNS/84fTdMkmiba9ZIkG17Y2dvGskkOqhbA1DXpUAGt+85exdPZIv48iHmiSYdzOwkblXAmk7gq0j8w9R0TS9/Zdz98xi6ym7rUUC+QE2ukGC+TVbzZ7PSNea37n9vLERtrodHoxKAGuHYJ+LJZjnDVvRIfeukC9rmXXHBftk01v2niYB/ArrHNUqgXw8gK3L2/uKma3SbuW/f3xgLr3Lu7JNfFUYuuCRuvaY0Ycglo37nK2vaESGyTAZlfNIBYc/MBA/E57GKkOWSCB1e+Aw5FXx8zBW6fOuBNJUjvOFyBPio7kEi2Q8LoFEJ+H8T/Yz4uNyLHK9BPMjnA1yXhDdJ9jjKAlmMs4mfeeJ7iBsUbJCAvmXh7PZPs2iugNbPCmBvBzB2dKPRPUBlviuBPJeAc6XeHNF09YHK+yyXoJ4ZxBOB2eI6kBskD1Hgni+L05HkUrR/AAbXC9B/DOC09lPRHM/FiiPSgA3eThdKFwrik9IfVkfSwA/w+naDaKI9iPl/Uj8tZ6F040dRHMoqW5wnfhqOAanW3WiuJAODCnm2r74qf3qYzjd+gBFPh0YUssBp+FnXflMnO59gCKPDgwpxfwJP9FJs3AU76PIpwNDSjlvT/z86HEczQco8khphTXi51Yc3RBR3EkHhlRyaX98PH8Jji6KIo8OMolVzuDSbHpofW3t6hY6KbwUH/NPasXR9UGRRweZBBU5ZIeyLwzuT2LU13w0e9aseVE2u7QAXeupa3B89EGRR3z6fvMfayQZ1j1z7kA2KFwtPq7E8XWQKB4lDiXnPtUkydP60sUl/NdV4uPVDBxfE0TxF2JW/kqbJFvjbdtB4WrRrRmB4+8UUVxFjMY8I1tF24N7XSU+vo0TwLWiuICYDL83KltNi+hm4gQxQxTHEoMB1zdK6ojuhxNA1npR7EcHmXTrrOsLSCH/eAMngL1yUCynA0M3MibfWUAKafwpThD7o1lOB5l0reBfR5BSrq/ACeIYFIubCGa7jyS1LOuDE8Q2baL4Fx0ZulL+5mhSy5XrcIKYZFD8h0AubJEUM8fgBPKeaPYliFMl5ZTjBDJONOsjBLDvekk1j+ME84JoXqUTQ0dlj+SQaq7GCeTgcjT/oRNDBzmPlpFq3nkDJ5DfoHoNfw9I6jkLJ5CviaqhD75+JqlnVS5OIC+Lagq+yqOSev6IE8iuojsRP2aOpJ7odjiB3Caqtbl0ZtjSqbuTep6bhxNE4WmoHltPZ4YtZP+GFHQLTiBn5qH6J10wbOHi4aSeRU/gBLIbqsZn6YJhs8Kfk4Lui+IEkosq53S6YNjsJ/1JQY/iBJOHbvIIOjNsMuR7pKDFb+MEk4eu7989OjFsck4uKehRnIBy8HHwpXSSySbHEcTKhZXLm+mhPmWDt88nkEdxAnprPD5++8xHdGu4+Pv012NJkJyJf6sTfzWZOAGNE19vZdKt74mfJWdnkEgDb2oWP3fjBOUtFV8/o1sviY/bc0m07d8TH/fiBPYn8bWmiG4UtYiq9RKSoM8joluAE9h+UfF1Dd04XXSTSArvAdENxgnsV+JrbTFdmyKqa0iS3LdEdSJOYOYp8XUdXVstmuc9kmXIatFMxgmuaL74qS+lK31F07oryfNT0byJE4Mx68TPDXRlR9HcQRLlLhFFSwZODA5bLz4ah9CFQ0UzmmT6mWgG4sTi6DbxcQtdOFUUH5NUu4hmJ5yYXCU+GvLZzNCuDMW/SaoP5qMYiBOTX7+ELvdoNjO0K0PxFsn1OopinJhET12B7iQ2M7QrQ1FJci1DUYwTm+WToqgm5LOJod1gFMtIrkoUxTgxeuk3qHKPYhNDu2IUtSRXLYq+OLG6+kNUJ7GJoZ0hVXk4sWq9BNWEfDYyOCH00hQ0eUexkcEJox82ozmJjQxOGFX8E82EPDYwOKE0GU3eAWxgcEJp9sto9mQDgxNOk9HsyQYGJ5yeqUOxJxsYnHBqeQ7F9vm0Mzgh9QQKsxvtDE5IPRVFMZR2BiekqmajKKWdwQmrj1GU0s7ghNUCFKW0MzhhtQDFYNoZnLBagGIQ7QxOWC1CYWhncMIqD4XQzuCEVQmKKO0MTlgNQiG0MzhhNQhFlHYGJ6xKUNTTzuCE1SAUS2lncMKqFEUl7QxOSGUdgKKSdgYnpA7vj2Ip7QxOSJ2MZgntDE44RY5D0TaXdgYnnL5aiOLjBtoZnHA6Gc3bbGBwQilyLJp32MDghNLZBWjeZgODE0b9r0az7h02MDhh9Jv+aJ5rZgODE0Jjzkf1BBsZnBC6KQONPMlGBid8vnkQqjdXspHBCZ28P6B7mE0MTuj8fhtULXezicEJm/O/i+7fK9jE4IRM+Z/xcRubGZxw2eGhTHTzX2QzgxMq/Z8owsftwmYGJ0yypmyPj5pb2YLBCZNbDsXPdWvZgsEJke+dg5+qP7MlgxMeu16Lr9/XsyWDExpZ92bjZ9ktfInBCY2r9sDX99bzJQYnLHb+Mb4enMKXGZywODYDPysvpgODExZH4OvCajowOCHRdxx+/vkwHRmckDg0Cx8rvksnBickyvBzQQ2dGJyQqMPH/Y/SmcEJiTp0y79HFwxOSKxFd94qumBwQmIlqpZpdMXghMRHc9FkfZWuGJyw+Auqo+iKwQmL++rRTPDogsEJi7p/oCkdSxcMTmjcjOpoumBwQmP2NDRH0QWDEx43oBlbSmcGJzwen4/CO4rODE54RG9CcySdGZwQuacVxVg6MzghsnomiuF96cTghMmTKLxd6MTghMlTaHajE4MTJh98jmI3OjE4ofI0itF0YnBCZTaKMjoxOKHyGYpSOjE4oTIPRf8sOjI4obKkke55pXRkcEJFFqAopSODEy7zUAyiI4MTLvNQROjI4ITLOhQeHRmccMlE4dGRwQmXDBSGjgxOuGSg8OjI4IRLBgqhI4MTLgNQ1NCRwQmX0Siq6MjghMuOKKroyOCESmkB3ZNqOjI4oTIaRW0rHRmcUNkPRRWdGJxQmYjiMzoxOGFSvD+KOXRicMJkgkExh04MTphMRDOHTgxOiAw6GkX9PDoxOCFySQ6K96N0YnDCI+8iNLPozOCEx9n90TxHZwYnNLJ+gKbpeTozOKFx+Ug009bRmcEJi+2uQPU4XTA4YXFbDqon6ILBCYnvHIZq7iK6YHDCYcT16B6jKwYnFPIe7Y8qehddMTihcNcYdI8toCsGJwx+8k183ECXDE4ITLwGH7NfoUsGx35HPmTwcQNdMzjWm/BINj5W/IOuGRzbHf1INn5ubaZrBsdyx0yN4KfmJrphcOz2/Ycj+Lqilm5k4tgscutZ+Jt9O93JxLFYycPjCOCSKN3JxLHX2Ee3IYAHXqVbmTjW2veFvgRQfzndMzi22v2ZvgRxzVK6Z3AstePzRQTx4fUoDI6dIs8MIoh1JzShMDh2OmMEgZz9MRqDY6WMHxPIjQ+iMjhWOmUUQbz2f+gMjpUuJIiVJ7egMzhW2okA2k5Zig+DY6PCIgK48iX8GBwbjSKAm36HL4Njo5H4u/n7+DM4NqrF118uIQCDY6P38PPXi4QADI6Nqpehu+t8IQiDY6W5qO4+VwjE4FhpFpr7zooSjMGx0nQ050cJyOBYaUYbikKCMjhWWluBYiBBGRw7LUJRTFAGx04VKIoJyuDYqQJFMUEZHDstQlFMUAbHThUoignK4NipCkUhQRkcO3ko1hOUwbGTQbGWoAyOnQyKOoIyOHaKoKgjKINjp2Eo1hKUwbHTSBR1BGVw7DQCRR1BGRw7jUSxlqAMjpW83VHUEZTBsdIeA1HUEpTBsdLXUNQvJSiDY6WvofhQCMrg2CjvABQfEJjBsdGJ2Sg+JDCDY6MfofmAwAyOhb6+G4roGwRmcCz0f2hm1xCYwbHPXoeheYHgDI51vD+gep7gDI51LjgUTeOrBGdwbDPiWlTTGwnO4FjGu6MPqgeIgcGxzEXlqBqmEgODY5cJN6B7eB0xMDhW2f+hTHT3EAuDY5NdnsxDt/RFYmFwLDLs2SJ83BUlFgbHHmNmDMHHuhuJicGxxnEzh+Hn5hpiYmjXhCJCcuWgaMVp95OH8/HT8EdiY2i3DMVgkmswinqc/8q+53cevm6tIjaGdpUoBpNcg1HU43zhK++ejr/11xEjQ7tlKLYlubZHsQ6HvMkzdyaAP64gTheL4imSqrBZFCfjlC+QQD7MJl7Hi6KxD8k0STQHku7K7pRg2vYnbvuJ5kyS6VnRFJPeSm9YLwFNJn5DRfN5NslzuGiqSGuD/tAgQS3IJ35ZUdFcRtKYWaKZThor+f06Ca6cnpgnmrW7kSy/FdXTu/QlPXnlDzZLDP5KPDw2mHwpms/3qSYpJt2Pn9qKikUVFYsqlkdJHwPOOH97YvH5HmuIg8cGB09D9cYxK0mC4x/IIai2yoqKxRUVFYtXEXKZh5xxYjYxWTPuQ+LhsUHGigGoKo6ZQ8Jd8WuP2NVXVCyuXP5f6wmfvCOOP7qIGLVOeJ64eGz09++gq7/6hkYSao/rDqdn6pZvtLKNMOh/9PFH5BK78/5KfDw2Ou4R/Cy+akodiWL2v3CSR8JEq5dvVIud+hxw0MH7ZRKPa39MnDw2yqvOxVfztKcXLqvNp4f6lA0ec/RAkqRpxfLlK2pW/U9tA1YoHH/wwXtmEqepJwlx8tjk38cQQk2r/qd21Rdq69Y2kWoi240ePXr33Qzxe/OQ9cTLY5PT7yH8WtZ21kbvGDB6x9GjR4/KoIfmfG0lcfPYJPODHUhL6xuam5qbm5qbmpubmpuam5uam5qbm5qbmpvbvHZ4X4LneS1r6tbUralbR8yyioqKBu4wevToYhLi5ePqiJ/HZt+YihOjtrVr1tStqVtTt6ZuTd2aNXX1giAgIAgIAtlFW8onoR48vZke8NjCzHE4lrnpB1F6wrCFy3Es85PvR+mRDLaweI/ROBZpPfMWeshjSzu+n4ljjZWnPU9PZbClmrK9cWzx+JFz6TGPLyl+eziOFeovu50E8Piy3V/Lx7HAm6d9RiIYvuy90wUn5bX96oDPSIgMOvi47TCcFDdv4n1REiODjqbvtCtOKlt95RmLSBSPTnJnjMVJWc03X72KxPHobJvXh+CkJvnXzxaSSIbOlnzlHZyU9Mp+pywkoQxdWHLgv3BSz9xjDnmLBDN0Zf23rhSclBJ97PDdHyfhPLpx/L35OCljzV1/XkAyeHRn98eGs9W9Xz+8xMPp4JM/3b2O5PDoVvFvzslkq6r56Z1RsocOGz5s+PBhQ7Nx/kuevfFZIVk8FDv89gS2nujtP1/FZl7J8GHDhw0fNryINCb/mTK1giTyUO137UFsJW9c/A5d6jN82PBhw4cNK8skzURnTpm6lOTy8HH073Yl+aLP3vqEoMsYPGzosKHDhg0tJh1Ep095eBlJ5+HHnHDikX1Jqqq7bltIcHlDh5aVlpaUlpYWeYTT6ulPP7ySrcEjgMhhxx0zmCSpn3n3lGbik1VSWlJaWlJaWlLaj7ConT7tlTlRthKPYLx9j5u4QxYJVv3qjBmzWkmE3NKS0tKS0tKS0tJcrLVq+rRpc6NsRR7BeQMHl/1XaTY91FBdU1NdU/3xRyRDv5LSgYUFG/XLwQpNH7339itzha3MI/QiBR3kkmKWvPeFT1rpDR7pJ6vgy/pEIh69YmVFRcWC9+auovd4OF+IRLKzI9nZkezsSHZ2JDs7kp0dyY5EBNkM2czrW1hQWFBYUJBF7NrWVC+uqKhYVLG4kV7n4fREXmFBYUFhQWFBYZ+sSFYkK5IVyYpEsiJZkazM1paW5pb/am5paWlcvbq2dnVt7era2rVC6vj/ty+0dTo91qoAAAAASUVORK5CYII=",impact:`${am}`,customerSuccess:`${sm}`,learning:`${lm}`},vm=[{title:"Constant Improvement",description:"Growth isn\u2019t a one-time effort. We\u2019re committed to evolving every day, both as a company and as individuals.",icon:ym.improve,bgColor:"#f3d0ff"},{title:"Pursue Excellence",description:"Excellence guides our actions, shaping our products and driving our customer success.",icon:ym.excellence,bgColor:"#ffe2c4"},{title:"Prioritize Meaningful Impact",description:"Our core metric is the value we create for customers by solving their most pressing needs.",icon:ym.impact,bgColor:"#f5efb8"},{title:"Champion Customer Success",description:"We see every interaction as a chance to build lasting, impactful relationships with our customers.",icon:ym.customerSuccess,bgColor:"#daf7e2"},{title:"Cultivate Learning & Collaboration",description:"We grow together through trust, open knowledge-sharing, and a spirit of collaboration.",icon:ym.learning,bgColor:"#d3f4ff"}],bm=()=>(0,g.jsxs)(cm,{children:[(0,g.jsx)(um,{children:"Our Values"}),(0,g.jsx)(dm,{children:vm.map(((e,t)=>(0,g.jsxs)(pm,{children:[(0,g.jsx)(fm,{bgColor:e.bgColor,children:(0,g.jsx)(hm,{src:e.icon,alt:e.title})}),(0,g.jsxs)(mm,{children:[(0,g.jsx)(gm,{children:e.title}),(0,g.jsx)(xm,{children:e.description})]})]},t)))})]}),wm=n.p+"static/media/BPritam.1c37e43bb1da3c1ecdce.jpg",km=(n.p,n.p+"static/media/AAshutosh1.cabb1fe621aca18cfe36.jpeg"),Sm=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,Am=so.h1`
font-size: 2.5rem;
margin-bottom: 30px;
color: #333;
`,jm=so.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`,Cm=so.div`
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
`,Em=so.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 25%;
  border: 2px solid #454545;
`,Rm=so.img`
  width: 100%;
  height: auto;
`,Om=so.h2`
  font-size: 1.2rem;
  margin: 10px 0;
  color: black;
  font-weight: 500;
`,Pm=so.p`
  font-size: 1rem;
  color: #555;
`,Tm=so.p`
  font-size: 0.9rem;
  color: #888;
`,zm=[{name:"Ashutosh Mohapatra",role:"Frontend Lead",location:"Bangalore",imgSrc:`${km}`,backg:"#e1fff6"},{name:"Pritam Kumar Nayak",role:"Frontend Developer",location:"Bangalore",imgSrc:`${wm}`,backg:"#f5e9fd"}],Mm=()=>(0,g.jsxs)(Sm,{children:[(0,g.jsx)(Am,{children:"Our Team"}),(0,g.jsx)(jm,{children:zm.map(((e,t)=>(0,g.jsxs)(Cm,{backg:e.backg,children:[(0,g.jsx)(Em,{children:(0,g.jsx)(Rm,{style:{marginTop:"Ashutosh Mohapatra"==e.name?"-21px":"0px"},src:e.imgSrc,alt:e.backg})}),(0,g.jsx)(Om,{children:e.name}),(0,g.jsx)(Pm,{children:e.role}),(0,g.jsx)(Tm,{children:e.location})]},t)))})]}),Im=()=>(0,g.jsxs)("div",{children:[(0,g.jsx)(gh,{}),(0,g.jsx)(_h,{}),(0,g.jsx)(Ph,{}),(0,g.jsx)(bm,{}),(0,g.jsx)(im,{}),(0,g.jsx)(Mm,{})]}),Lm=n.p+"static/media/email.d27389667b81e4a5c88c.png",Fm=n.p+"static/media/telephone-call.ee034a176dc60e4b43bc.png",Nm=n.p+"static/media/footer-bg.7bd67c0f73571d0acc02.png";const Dm=n.p+"static/media/nav-icon1.721d5414c26365f117e71d46b6641cb2.svg";const Bm=n.p+"static/media/nav-icon2.178f497aa17b70c42df2a1a8c926ed01.svg";const _m=n.p+"static/media/nav-icon3.08b285abb8e118b52637efa5d65c5367.svg",Hm=so.footer`
 background-color: rgb(13, 11, 62); /* Dark background color */
  /* background-image: url(${Nm}); */
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
`,Um=so.div`
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
`,Wm=so.div`
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
`,qm=so.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`,Gm=so.div`
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
`,Vm=so.div`
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
`,Km=so.div`
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
`,Jm=so.div`
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
`,Qm=so.div`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
    max-width: 209px;
  }
`,Ym=so.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,Zm=so.input`
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
`,Xm=so.button`
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
`;function $m(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Hm,{children:[(0,g.jsxs)(Um,{children:[(0,g.jsxs)(Km,{children:[(0,g.jsx)(Jm,{children:(0,g.jsx)("img",{src:mn,alt:"AtomWalk Logo"})}),(0,g.jsx)(Qm,{children:"Stay up-to-date with AtomWalk Newsletter!"}),(0,g.jsxs)(Ym,{children:[(0,g.jsx)(Zm,{type:"email",placeholder:"Email*",required:!0}),(0,g.jsx)(Xm,{type:"submit",children:"Submit"})]})]}),(0,g.jsxs)(Wm,{children:[(0,g.jsxs)("div",{children:[" ",(0,g.jsx)("img",{src:Lm,alt:"AtomWalk Logo"}),"info@atomwalk.com"]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{src:Fm,alt:"AtomWalk Logo"}),"+91-7259555003"]})]})]}),(0,g.jsxs)(qm,{children:[(0,g.jsxs)(Gm,{children:[(0,g.jsx)("h3",{children:"Quick Links"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/",children:"Home"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/aboutUs.html",children:"About Us"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/Product.html",children:"Products"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/contactUs.html",children:"Contact Us"})})]})]}),(0,g.jsxs)(Gm,{children:[(0,g.jsx)("h3",{children:"Products"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#webdev",children:"Manufacturing Business"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#appdev",children:"Consultancy Business"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#maintenance",children:"Chemical Industry"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#marketing",children:"Lab Management"})})]})]}),(0,g.jsxs)(Gm,{children:[(0,g.jsx)("h3",{children:"Resources"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"/Blog.html",children:"Blog"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#appdev",children:"Support"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#maintenance",children:"Tutorials"})}),(0,g.jsx)("li",{children:(0,g.jsx)("a",{href:"#marketing",children:"FAQs"})})]})]})]})]}),(0,g.jsx)(Vm,{children:(0,g.jsxs)("div",{style:{padding:"25px"},children:[(0,g.jsx)("p",{children:"\xa9 2024 Atomwalk. All Rights Reserved."}),(0,g.jsxs)("p",{children:["Privacy Policy | Terms & Conditions | Made with ",(0,g.jsx)("span",{children:"\u2665"})," Atomwalk"]}),(0,g.jsxs)("div",{className:"social-icon",children:[(0,g.jsx)("a",{href:"https://www.linkedin.com/company/atomwalk-technologies/",children:(0,g.jsx)("img",{src:Dm,alt:"Icon"})}),(0,g.jsx)("a",{href:"#",children:(0,g.jsx)("img",{src:Bm,alt:"Icon"})}),(0,g.jsx)("a",{href:"#",children:(0,g.jsx)("img",{src:_m,alt:"Icon"})})]})]})})]})}const eg=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,tg=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ng={};function rg(e,t){return((t||ng).jsx?tg:eg).test(e)}const ig=/[ \t\n\f\r]/g;function og(e){return""===e.replace(ig,"")}class ag{constructor(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}}function sg(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new ag(n,r,t)}function lg(e){return e.toLowerCase()}ag.prototype.property={},ag.prototype.normal={},ag.prototype.space=null;class cg{constructor(e,t){this.property=e,this.attribute=t}}cg.prototype.space=null,cg.prototype.boolean=!1,cg.prototype.booleanish=!1,cg.prototype.overloadedBoolean=!1,cg.prototype.number=!1,cg.prototype.commaSeparated=!1,cg.prototype.spaceSeparated=!1,cg.prototype.commaOrSpaceSeparated=!1,cg.prototype.mustUseProperty=!1,cg.prototype.defined=!1;let ug=0;const dg=yg(),pg=yg(),fg=yg(),hg=yg(),mg=yg(),gg=yg(),xg=yg();function yg(){return 2**++ug}const vg=Object.keys(t);class bg extends cg{constructor(e,n,r,i){let o=-1;if(super(e,n),wg(this,"space",i),"number"===typeof r)for(;++o<vg.length;){const e=vg[o];wg(this,vg[o],(r&t[e])===t[e])}}}function wg(e,t,n){n&&(e[t]=n)}bg.prototype.defined=!0;const kg={}.hasOwnProperty;function Sg(e){const t={},n={};let r;for(r in e.properties)if(kg.call(e.properties,r)){const i=e.properties[r],o=new bg(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[lg(r)]=r,n[lg(o.attribute)]=r}return new ag(t,n,e.space)}const Ag=Sg({space:"xlink",transform:(e,t)=>"xlink:"+t.slice(5).toLowerCase(),properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),jg=Sg({space:"xml",transform:(e,t)=>"xml:"+t.slice(3).toLowerCase(),properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Cg(e,t){return t in e?e[t]:t}function Eg(e,t){return Cg(e,t.toLowerCase())}const Rg=Sg({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Eg,properties:{xmlns:null,xmlnsXLink:null}}),Og=Sg({transform:(e,t)=>"role"===t?t:"aria-"+t.slice(4).toLowerCase(),properties:{ariaActiveDescendant:null,ariaAtomic:pg,ariaAutoComplete:null,ariaBusy:pg,ariaChecked:pg,ariaColCount:hg,ariaColIndex:hg,ariaColSpan:hg,ariaControls:mg,ariaCurrent:null,ariaDescribedBy:mg,ariaDetails:null,ariaDisabled:pg,ariaDropEffect:mg,ariaErrorMessage:null,ariaExpanded:pg,ariaFlowTo:mg,ariaGrabbed:pg,ariaHasPopup:null,ariaHidden:pg,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:mg,ariaLevel:hg,ariaLive:null,ariaModal:pg,ariaMultiLine:pg,ariaMultiSelectable:pg,ariaOrientation:null,ariaOwns:mg,ariaPlaceholder:null,ariaPosInSet:hg,ariaPressed:pg,ariaReadOnly:pg,ariaRelevant:null,ariaRequired:pg,ariaRoleDescription:mg,ariaRowCount:hg,ariaRowIndex:hg,ariaRowSpan:hg,ariaSelected:pg,ariaSetSize:hg,ariaSort:null,ariaValueMax:hg,ariaValueMin:hg,ariaValueNow:hg,ariaValueText:null,role:null}}),Pg=Sg({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Eg,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:gg,acceptCharset:mg,accessKey:mg,action:null,allow:null,allowFullScreen:dg,allowPaymentRequest:dg,allowUserMedia:dg,alt:null,as:null,async:dg,autoCapitalize:null,autoComplete:mg,autoFocus:dg,autoPlay:dg,blocking:mg,capture:null,charSet:null,checked:dg,cite:null,className:mg,cols:hg,colSpan:null,content:null,contentEditable:pg,controls:dg,controlsList:mg,coords:hg|gg,crossOrigin:null,data:null,dateTime:null,decoding:null,default:dg,defer:dg,dir:null,dirName:null,disabled:dg,download:fg,draggable:pg,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:dg,formTarget:null,headers:mg,height:hg,hidden:dg,high:hg,href:null,hrefLang:null,htmlFor:mg,httpEquiv:mg,id:null,imageSizes:null,imageSrcSet:null,inert:dg,inputMode:null,integrity:null,is:null,isMap:dg,itemId:null,itemProp:mg,itemRef:mg,itemScope:dg,itemType:mg,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:dg,low:hg,manifest:null,max:null,maxLength:hg,media:null,method:null,min:null,minLength:hg,multiple:dg,muted:dg,name:null,nonce:null,noModule:dg,noValidate:dg,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:dg,optimum:hg,pattern:null,ping:mg,placeholder:null,playsInline:dg,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:dg,referrerPolicy:null,rel:mg,required:dg,reversed:dg,rows:hg,rowSpan:hg,sandbox:mg,scope:null,scoped:dg,seamless:dg,selected:dg,shadowRootClonable:dg,shadowRootDelegatesFocus:dg,shadowRootMode:null,shape:null,size:hg,sizes:null,slot:null,span:hg,spellCheck:pg,src:null,srcDoc:null,srcLang:null,srcSet:null,start:hg,step:null,style:null,tabIndex:hg,target:null,title:null,translate:null,type:null,typeMustMatch:dg,useMap:null,value:pg,width:hg,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:mg,axis:null,background:null,bgColor:null,border:hg,borderColor:null,bottomMargin:hg,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:dg,declare:dg,event:null,face:null,frame:null,frameBorder:null,hSpace:hg,leftMargin:hg,link:null,longDesc:null,lowSrc:null,marginHeight:hg,marginWidth:hg,noResize:dg,noHref:dg,noShade:dg,noWrap:dg,object:null,profile:null,prompt:null,rev:null,rightMargin:hg,rules:null,scheme:null,scrolling:pg,standby:null,summary:null,text:null,topMargin:hg,valueType:null,version:null,vAlign:null,vLink:null,vSpace:hg,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:dg,disableRemotePlayback:dg,prefix:null,property:null,results:hg,security:null,unselectable:null}}),Tg=Sg({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:Cg,properties:{about:xg,accentHeight:hg,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:hg,amplitude:hg,arabicForm:null,ascent:hg,attributeName:null,attributeType:null,azimuth:hg,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:hg,by:null,calcMode:null,capHeight:hg,className:mg,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:hg,diffuseConstant:hg,direction:null,display:null,dur:null,divisor:hg,dominantBaseline:null,download:dg,dx:null,dy:null,edgeMode:null,editable:null,elevation:hg,enableBackground:null,end:null,event:null,exponent:hg,externalResourcesRequired:null,fill:null,fillOpacity:hg,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:gg,g2:gg,glyphName:gg,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:hg,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:hg,horizOriginX:hg,horizOriginY:hg,id:null,ideographic:hg,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:hg,k:hg,k1:hg,k2:hg,k3:hg,k4:hg,kernelMatrix:xg,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:hg,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:hg,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:hg,overlineThickness:hg,paintOrder:null,panose1:null,path:null,pathLength:hg,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:mg,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:hg,pointsAtY:hg,pointsAtZ:hg,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:xg,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:xg,rev:xg,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:xg,requiredFeatures:xg,requiredFonts:xg,requiredFormats:xg,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:hg,specularExponent:hg,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:hg,strikethroughThickness:hg,string:null,stroke:null,strokeDashArray:xg,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:hg,strokeOpacity:hg,strokeWidth:null,style:null,surfaceScale:hg,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:xg,tabIndex:hg,tableValues:null,target:null,targetX:hg,targetY:hg,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:xg,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:hg,underlineThickness:hg,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:hg,values:null,vAlphabetic:hg,vMathematical:hg,vectorEffect:null,vHanging:hg,vIdeographic:hg,version:null,vertAdvY:hg,vertOriginX:hg,vertOriginY:hg,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:hg,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),zg=sg([jg,Ag,Rg,Og,Pg],"html"),Mg=sg([jg,Ag,Rg,Og,Tg],"svg"),Ig=/^data[-\w.:]+$/i,Lg=/-[a-z]/g,Fg=/[A-Z]/g;function Ng(e){return"-"+e.toLowerCase()}function Dg(e){return e.charAt(1).toUpperCase()}const Bg={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"};var _g=n(4222);const Hg=_g.default||_g,Ug=qg("end"),Wg=qg("start");function qg(e){return function(t){const n=t&&t.position&&t.position[e]||{};if("number"===typeof n.line&&n.line>0&&"number"===typeof n.column&&n.column>0)return{line:n.line,column:n.column,offset:"number"===typeof n.offset&&n.offset>-1?n.offset:void 0}}}function Gg(e){return e&&"object"===typeof e?"position"in e||"type"in e?Kg(e.position):"start"in e||"end"in e?Kg(e):"line"in e||"column"in e?Vg(e):"":""}function Vg(e){return Jg(e&&e.line)+":"+Jg(e&&e.column)}function Kg(e){return Vg(e&&e.start)+"-"+Vg(e&&e.end)}function Jg(e){return e&&"number"===typeof e?e:1}class Qg extends Error{constructor(e,t,n){super(),"string"===typeof t&&(n=t,t=void 0);let r="",i={},o=!1;if(t&&(i="line"in t&&"column"in t||"start"in t&&"end"in t?{place:t}:"type"in t?{ancestors:[t],place:t.position}:{...t}),"string"===typeof e?r=e:!i.cause&&e&&(o=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&"string"===typeof n){const e=n.indexOf(":");-1===e?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){const e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}const a=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=r,this.line=a?a.line:void 0,this.name=Gg(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=o&&i.cause&&"string"===typeof i.cause.stack?i.cause.stack:"",this.actual,this.expected,this.note,this.url}}Qg.prototype.file="",Qg.prototype.name="",Qg.prototype.reason="",Qg.prototype.message="",Qg.prototype.stack="",Qg.prototype.column=void 0,Qg.prototype.line=void 0,Qg.prototype.ancestors=void 0,Qg.prototype.cause=void 0,Qg.prototype.fatal=void 0,Qg.prototype.place=void 0,Qg.prototype.ruleId=void 0,Qg.prototype.source=void 0;const Yg={}.hasOwnProperty,Zg=new Map,Xg=/[A-Z]/g,$g=/-([a-z])/g,ex=new Set(["table","tbody","thead","tfoot","tr"]),tx=new Set(["td","th"]),nx="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function rx(e,t){if(!t||void 0===t.Fragment)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if("function"!==typeof t.jsxDEV)throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=function(e,t){return n;function n(n,r,i,o){const a=Array.isArray(i.children),s=Wg(n);return t(r,i,o,a,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}(n,t.jsxDEV)}else{if("function"!==typeof t.jsx)throw new TypeError("Expected `jsx` in production options");if("function"!==typeof t.jsxs)throw new TypeError("Expected `jsxs` in production options");r=function(e,t,n){return r;function r(e,r,i,o){const a=Array.isArray(i.children)?n:t;return o?a(r,i,o):a(r,i)}}(0,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:!1!==t.passKeys,passNode:t.passNode||!1,schema:"svg"===t.space?Mg:zg,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:!1!==t.tableCellAlignToStyle},o=ix(i,e,void 0);return o&&"string"!==typeof o?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function ix(e,t,n){return"element"===t.type?function(e,t,n){const r=e.schema;let i=r;"svg"===t.tagName.toLowerCase()&&"html"===r.space&&(i=Mg,e.schema=i);e.ancestors.push(t);const o=cx(e,t.tagName,!1),a=function(e,t){const n={};let r,i;for(i in t.properties)if("children"!==i&&Yg.call(t.properties,i)){const o=lx(e,i,t.properties[i]);if(o){const[i,a]=o;e.tableCellAlignToStyle&&"align"===i&&"string"===typeof a&&tx.has(t.tagName)?r=a:n[i]=a}}if(r){(n.style||(n.style={}))["css"===e.stylePropertyNameCase?"text-align":"textAlign"]=r}return n}(e,t);let s=sx(e,t);ex.has(t.tagName)&&(s=s.filter((function(e){return"string"!==typeof e||!("object"===typeof(t=e)?"text"===t.type&&og(t.value):og(t));var t})));return ox(e,a,o,t),ax(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}(e,t,n):"mdxFlowExpression"===t.type||"mdxTextExpression"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater){const n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}ux(e,t.position)}(e,t):"mdxJsxFlowElement"===t.type||"mdxJsxTextElement"===t.type?function(e,t,n){const r=e.schema;let i=r;"svg"===t.name&&"html"===r.space&&(i=Mg,e.schema=i);e.ancestors.push(t);const o=null===t.name?e.Fragment:cx(e,t.name,!0),a=function(e,t){const n={};for(const r of t.attributes)if("mdxJsxExpressionAttribute"===r.type)if(r.data&&r.data.estree&&e.evaluater){const t=r.data.estree.body[0];t.type;const i=t.expression;i.type;const o=i.properties[0];o.type,Object.assign(n,e.evaluater.evaluateExpression(o.argument))}else ux(e,t.position);else{const i=r.name;let o;if(r.value&&"object"===typeof r.value)if(r.value.data&&r.value.data.estree&&e.evaluater){const t=r.value.data.estree.body[0];t.type,o=e.evaluater.evaluateExpression(t.expression)}else ux(e,t.position);else o=null===r.value||r.value;n[i]=o}return n}(e,t),s=sx(e,t);return ox(e,a,o,t),ax(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}(e,t,n):"mdxjsEsm"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ux(e,t.position)}(e,t):"root"===t.type?function(e,t,n){const r={};return ax(r,sx(e,t)),e.create(t,e.Fragment,r,n)}(e,t,n):"text"===t.type?function(e,t){return t.value}(0,t):void 0}function ox(e,t,n,r){"string"!==typeof n&&n!==e.Fragment&&e.passNode&&(t.node=r)}function ax(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function sx(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:Zg;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const e="element"===o.type?o.tagName:"mdxJsxFlowElement"===o.type||"mdxJsxTextElement"===o.type?o.name:void 0;if(e){const t=i.get(e)||0;a=e+"-"+t,i.set(e,t+1)}}const s=ix(e,o,a);void 0!==s&&n.push(s)}return n}function lx(e,t,n){const r=function(e,t){const n=lg(t);let r=t,i=cg;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&"data"===n.slice(0,4)&&Ig.test(t)){if("-"===t.charAt(4)){const e=t.slice(5).replace(Lg,Dg);r="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{const e=t.slice(4);if(!Lg.test(e)){let n=e.replace(Fg,Ng);"-"!==n.charAt(0)&&(n="-"+n),t="data"+n}}i=bg}return new i(r,t)}(e.schema,t);if(!(null===n||void 0===n||"number"===typeof n&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?function(e,t){const n=t||{};return(""===e[e.length-1]?[...e,""]:e).join((n.padRight?" ":"")+","+(!1===n.padLeft?"":" ")).trim()}(n):function(e){return e.join(" ").trim()}(n)),"style"===r.property){let t="object"===typeof n?n:function(e,t){const n={};try{Hg(t,r)}catch(i){if(!e.ignoreInvalidStyle){const t=i,n=new Qg("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:t,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=nx+"#cannot-parse-style-attribute",n}}return n;function r(e,t){let r=e;"--"!==r.slice(0,2)&&("-ms-"===r.slice(0,4)&&(r="ms-"+r.slice(4)),r=r.replace($g,px)),n[r]=t}}(e,String(n));return"css"===e.stylePropertyNameCase&&(t=function(e){const t={};let n;for(n in e)Yg.call(e,n)&&(t[dx(n)]=e[n]);return t}(t)),["style",t]}return["react"===e.elementAttributeNameCase&&r.space?Bg[r.property]||r.property:r.attribute,n]}}function cx(e,t,n){let r;if(n)if(t.includes(".")){const e=t.split(".");let n,i=-1;for(;++i<e.length;){const t=rg(e[i])?{type:"Identifier",name:e[i]}:{type:"Literal",value:e[i]};n=n?{type:"MemberExpression",object:n,property:t,computed:Boolean(i&&"Literal"===t.type),optional:!1}:t}r=n}else r=rg(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};else r={type:"Literal",value:t};if("Literal"===r.type){const t=r.value;return Yg.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);ux(e)}function ux(e,t){const n=new Qg("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=nx+"#cannot-handle-mdx-estrees-without-createevaluater",n}function dx(e){let t=e.replace(Xg,fx);return"ms-"===t.slice(0,3)&&(t="-"+t),t}function px(e,t){return t.toUpperCase()}function fx(e){return"-"+e.toLowerCase()}const hx={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},mx={};function gx(e,t,n){if(function(e){return Boolean(e&&"object"===typeof e)}(e)){if("value"in e)return"html"!==e.type||n?e.value:"";if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return xx(e.children,t,n)}return Array.isArray(e)?xx(e,t,n):""}function xx(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=gx(e[i],t,n);return r.join("")}function yx(e,t,n,r){const i=e.length;let o,a=0;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function vx(e,t){return e.length>0?(yx(e,e.length,0,t),e):t}class bx{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const n=null===t||void 0===t?Number.POSITIVE_INFINITY:t;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){const r=t||0;this.setCursor(Math.trunc(e));const i=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return n&&wx(this.left,n),i.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),wx(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),wx(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&0===this.right.length||e<0&&0===this.left.length))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);wx(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);wx(this.left,t.reverse())}}}function wx(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function kx(e){const t={};let n,r,i,o,a,s,l,c=-1;const u=new bx(e);for(;++c<u.length;){for(;c in t;)c=t[c];if(n=u.get(c),c&&"chunkFlow"===n[1].type&&"listItemPrefix"===u.get(c-1)[1].type&&(s=n[1]._tokenizer.events,i=0,i<s.length&&"lineEndingBlank"===s[i][1].type&&(i+=2),i<s.length&&"content"===s[i][1].type))for(;++i<s.length&&"content"!==s[i][1].type;)"chunkText"===s[i][1].type&&(s[i][1]._isInFirstContentOfListItem=!0,i++);if("enter"===n[0])n[1].contentType&&(Object.assign(t,Sx(u,c)),c=t[c],l=!0);else if(n[1]._container){for(i=c,r=void 0;i--&&(o=u.get(i),"lineEnding"===o[1].type||"lineEndingBlank"===o[1].type);)"enter"===o[0]&&(r&&(u.get(r)[1].type="lineEndingBlank"),o[1].type="lineEnding",r=i);r&&(n[1].end=Object.assign({},u.get(r)[1].start),a=u.slice(r,c),a.unshift(n),u.splice(r,c-r+1,a))}}return yx(e,0,Number.POSITIVE_INFINITY,u.slice(0)),!l}function Sx(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[],a=n._tokenizer||r.parser[n.contentType](n.start),s=a.events,l=[],c={};let u,d,p=-1,f=n,h=0,m=0;const g=[m];for(;f;){for(;e.get(++i)[1]!==f;);o.push(i),f._tokenizer||(u=r.sliceStream(f),f.next||u.push(null),d&&a.defineSkip(f.start),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(u),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),d=f,f=f.next}for(f=n;++p<s.length;)"exit"===s[p][0]&&"enter"===s[p-1][0]&&s[p][1].type===s[p-1][1].type&&s[p][1].start.line!==s[p][1].end.line&&(m=p+1,g.push(m),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(a.events=[],f?(f._tokenizer=void 0,f.previous=void 0):g.pop(),p=g.length;p--;){const t=s.slice(g[p],g[p+1]),n=o.pop();l.push([n,n+t.length-1]),e.splice(n,2,t)}for(l.reverse(),p=-1;++p<l.length;)c[h+l[p][0]]=h+l[p][1],h+=l[p][1]-l[p][0]-1;return c}const Ax={}.hasOwnProperty;function jx(e,t){let n;for(n in t){const r=(Ax.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n];let o;if(i)for(o in i){Ax.call(r,o)||(r[o]=[]);const e=i[o];Cx(r[o],Array.isArray(e)?e:e?[e]:[])}}}function Cx(e,t){let n=-1;const r=[];for(;++n<t.length;)("after"===t[n].add?e:r).push(t[n]);yx(e,0,0,r)}const Ex=Bx(/[A-Za-z]/),Rx=Bx(/[\dA-Za-z]/),Ox=Bx(/[#-'*+\--9=?A-Z^-~]/);function Px(e){return null!==e&&(e<32||127===e)}const Tx=Bx(/\d/),zx=Bx(/[\dA-Fa-f]/),Mx=Bx(/[!-/:-@[-`{-~]/);function Ix(e){return null!==e&&e<-2}function Lx(e){return null!==e&&(e<0||32===e)}function Fx(e){return-2===e||-1===e||32===e}const Nx=Bx(/\p{P}|\p{S}/u),Dx=Bx(/\s/);function Bx(e){return function(t){return null!==t&&t>-1&&e.test(String.fromCharCode(t))}}function _x(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return function(r){if(Fx(r))return e.enter(n),a(r);return t(r)};function a(r){return Fx(r)&&o++<i?(e.consume(r),a):(e.exit(n),t(r))}}const Hx={tokenize:function(e){const t=e.attempt(this.parser.constructs.contentInitial,(function(n){if(null===n)return void e.consume(n);return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),_x(e,t,"linePrefix")}),(function(t){return e.enter("paragraph"),r(t)}));let n;return t;function r(t){const r=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=r),n=r,i(t)}function i(t){return null===t?(e.exit("chunkText"),e.exit("paragraph"),void e.consume(t)):Ix(t)?(e.consume(t),e.exit("chunkText"),r):(e.consume(t),i)}}};const Ux={tokenize:function(e){const t=this,n=[];let r,i,o,a=0;return s;function s(r){if(a<n.length){const i=n[a];return t.containerState=i[1],e.attempt(i[0].continuation,l,c)(r)}return c(r)}function l(e){if(a++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,r&&y();const n=t.events.length;let i,o=n;for(;o--;)if("exit"===t.events[o][0]&&"chunkFlow"===t.events[o][1].type){i=t.events[o][1].end;break}x(a);let s=n;for(;s<t.events.length;)t.events[s][1].end=Object.assign({},i),s++;return yx(t.events,o+1,0,t.events.slice(n)),t.events.length=s,c(e)}return s(e)}function c(i){if(a===n.length){if(!r)return p(i);if(r.currentConstruct&&r.currentConstruct.concrete)return h(i);t.interrupt=Boolean(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Wx,u,d)(i)}function u(e){return r&&y(),x(a),p(e)}function d(e){return t.parser.lazy[t.now().line]=a!==n.length,o=t.now().offset,h(e)}function p(n){return t.containerState={},e.attempt(Wx,f,h)(n)}function f(e){return a++,n.push([t.currentConstruct,t.containerState]),p(e)}function h(n){return null===n?(r&&y(),x(0),void e.consume(n)):(r=r||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:i,_tokenizer:r}),m(n))}function m(n){return null===n?(g(e.exit("chunkFlow"),!0),x(0),void e.consume(n)):Ix(n)?(e.consume(n),g(e.exit("chunkFlow")),a=0,t.interrupt=void 0,s):(e.consume(n),m)}function g(e,n){const s=t.sliceStream(e);if(n&&s.push(null),e.previous=i,i&&(i.next=e),i=e,r.defineSkip(e.start),r.write(s),t.parser.lazy[e.start.line]){let e=r.events.length;for(;e--;)if(r.events[e][1].start.offset<o&&(!r.events[e][1].end||r.events[e][1].end.offset>o))return;const n=t.events.length;let i,s,l=n;for(;l--;)if("exit"===t.events[l][0]&&"chunkFlow"===t.events[l][1].type){if(i){s=t.events[l][1].end;break}i=!0}for(x(a),e=n;e<t.events.length;)t.events[e][1].end=Object.assign({},s),e++;yx(t.events,l+1,0,t.events.slice(n)),t.events.length=e}}function x(r){let i=n.length;for(;i-- >r;){const r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function y(){r.write([null]),i=void 0,r=void 0,t.containerState._closeFlow=void 0}}},Wx={tokenize:function(e,t,n){return _x(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}};const qx={tokenize:function(e,t,n){return function(t){return Fx(t)?_x(e,r,"linePrefix")(t):r(t)};function r(e){return null===e||Ix(e)?t(e):n(e)}},partial:!0};const Gx={tokenize:function(e,t){let n;return function(t){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(t)};function r(t){return null===t?i(t):Ix(t)?e.check(Vx,o,i)(t):(e.consume(t),r)}function i(n){return e.exit("chunkContent"),e.exit("content"),t(n)}function o(t){return e.consume(t),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}},resolve:function(e){return kx(e),e}},Vx={tokenize:function(e,t,n){const r=this;return function(t){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),_x(e,i,"linePrefix")};function i(i){if(null===i||Ix(i))return n(i);const o=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&o&&"linePrefix"===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}},partial:!0};const Kx={tokenize:function(e){const t=this,n=e.attempt(qx,(function(r){if(null===r)return void e.consume(r);return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}),e.attempt(this.parser.constructs.flowInitial,r,_x(e,e.attempt(this.parser.constructs.flow,r,e.attempt(Gx,r)),"linePrefix")));return n;function r(r){if(null!==r)return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t.currentConstruct=void 0,n;e.consume(r)}}};const Jx={resolveAll:Xx()},Qx=Zx("string"),Yx=Zx("text");function Zx(e){return{tokenize:function(t){const n=this,r=this.parser.constructs[e],i=t.attempt(r,o,a);return o;function o(e){return l(e)?i(e):a(e)}function a(e){if(null!==e)return t.enter("data"),t.consume(e),s;t.consume(e)}function s(e){return l(e)?(t.exit("data"),i(e)):(t.consume(e),s)}function l(e){if(null===e)return!0;const t=r[e];let i=-1;if(t)for(;++i<t.length;){const e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}},resolveAll:Xx("text"===e?$x:void 0)}}function Xx(e){return function(t,n){let r,i=-1;for(;++i<=t.length;)void 0===r?t[i]&&"data"===t[i][1].type&&(r=i,i++):t[i]&&"data"===t[i][1].type||(i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),i=r+2),r=void 0);return e?e(t,n):t}}function $x(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){const r=e[n-1][1],i=t.sliceStream(r);let o,a=i.length,s=-1,l=0;for(;a--;){const e=i[a];if("string"===typeof e){for(s=e.length;32===e.charCodeAt(s-1);)l++,s--;if(s)break;s=-1}else if(-2===e)o=!0,l++;else if(-1!==e){a++;break}}if(l){const i={type:n===e.length||o||l<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-l,offset:r.end.offset-l,_index:r.start._index+a,_bufferIndex:a?s:r.start._bufferIndex+s},end:Object.assign({},r.end)};r.end=Object.assign({},i.start),r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,["enter",i,t],["exit",i,t]),n+=2)}n++}return e}function ey(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}function ty(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},o=[];let a=[],s=[],l=!0;const c={consume:function(e){Ix(e)?(r.line++,r.column=1,r.offset+=-3===e?2:1,b()):-1!==e&&(r.column++,r.offset++);r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++));u.previous=e,l=!0},enter:function(e,t){const n=t||{};return n.type=e,n.start=h(),u.events.push(["enter",n,u]),s.push(n),n},exit:function(e){const t=s.pop();return t.end=h(),u.events.push(["exit",t,u]),t},attempt:y((function(e,t){v(e,t.from)})),check:y(x),interrupt:y(x,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:f,sliceSerialize:function(e,t){return function(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if("string"===typeof o)a=o;else switch(o){case-5:a="\r";break;case-4:a="\n";break;case-3:a="\r\n";break;case-2:a=t?" ":"\t";break;case-1:if(!t&&i)continue;a=" ";break;default:a=String.fromCharCode(o)}i=-2===o,r.push(a)}return r.join("")}(f(e),t)},now:h,defineSkip:function(e){i[e.line]=e.column,b()},write:function(e){if(a=vx(a,e),m(),null!==a[a.length-1])return[];return v(t,0),u.events=ey(o,u.events,u),u.events}};let d,p=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function f(e){return function(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const e=a[0];"string"===typeof e?a[0]=e.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}(a,e)}function h(){const{line:e,column:t,offset:n,_index:i,_bufferIndex:o}=r;return{line:e,column:t,offset:n,_index:i,_bufferIndex:o}}function m(){let e;for(;r._index<a.length;){const t=a[r._index];if("string"===typeof t)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)g(t.charCodeAt(r._bufferIndex));else g(t)}}function g(e){l=void 0,d=e,p=p(e)}function x(e,t){t.restore()}function y(e,t){return function(n,i,o){let a,d,p,f;return Array.isArray(n)?m(n):"tokenize"in n?m([n]):function(e){return t;function t(t){const n=null!==t&&e[t],r=null!==t&&e.null;return m([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}(n);function m(e){return a=e,d=0,0===e.length?o:g(e[d])}function g(e){return function(n){f=function(){const e=h(),t=u.previous,n=u.currentConstruct,i=u.events.length,o=Array.from(s);return{restore:a,from:i};function a(){r=e,u.previous=t,u.currentConstruct=n,u.events.length=i,s=o,b()}}(),p=e,e.partial||(u.currentConstruct=e);if(e.name&&u.parser.constructs.disable.null.includes(e.name))return y(n);return e.tokenize.call(t?Object.assign(Object.create(u),t):u,c,x,y)(n)}}function x(t){return l=!0,e(p,f),i}function y(e){return l=!0,f.restore(),++d<a.length?g(a[d]):o}}}function v(e,t){e.resolveAll&&!o.includes(e)&&o.push(e),e.resolve&&yx(u.events,t,u.events.length-t,e.resolve(u.events.slice(t),u)),e.resolveTo&&(u.events=e.resolveTo(u.events,u))}function b(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}const ny={name:"thematicBreak",tokenize:function(e,t,n){let r,i=0;return function(t){return e.enter("thematicBreak"),function(e){return r=e,o(e)}(t)};function o(o){return o===r?(e.enter("thematicBreakSequence"),a(o)):i>=3&&(null===o||Ix(o))?(e.exit("thematicBreak"),t(o)):n(o)}function a(t){return t===r?(e.consume(t),i++,a):(e.exit("thematicBreakSequence"),Fx(t)?_x(e,o,"whitespace")(t):o(t))}}};const ry={name:"list",tokenize:function(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&"linePrefix"===i[1].type?i[2].sliceSerialize(i[1],!0).length:0,a=0;return function(t){const i=r.containerState.type||(42===t||43===t||45===t?"listUnordered":"listOrdered");if("listUnordered"===i?!r.containerState.marker||t===r.containerState.marker:Tx(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),"listUnordered"===i)return e.enter("listItemPrefix"),42===t||45===t?e.check(ny,n,l)(t):l(t);if(!r.interrupt||49===t)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(t)}return n(t)};function s(t){return Tx(t)&&++a<10?(e.consume(t),s):(!r.interrupt||a<2)&&(r.containerState.marker?t===r.containerState.marker:41===t||46===t)?(e.exit("listItemValue"),l(t)):n(t)}function l(t){return e.enter("listItemMarker"),e.consume(t),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||t,e.check(qx,r.interrupt?n:c,e.attempt(iy,d,u))}function c(e){return r.containerState.initialBlankLine=!0,o++,d(e)}function u(t){return Fx(t)?(e.enter("listItemPrefixWhitespace"),e.consume(t),e.exit("listItemPrefixWhitespace"),d):n(t)}function d(n){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(n)}},continuation:{tokenize:function(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(qx,i,o);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,_x(e,t,"listItemIndent",r.containerState.size+1)(n)}function o(n){return r.containerState.furtherBlankLines||!Fx(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(oy,t,a)(n))}function a(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,_x(e,e.attempt(ry,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(i)}}},exit:function(e){e.exit(this.containerState.type)}},iy={tokenize:function(e,t,n){const r=this;return _x(e,(function(e){const i=r.events[r.events.length-1];return!Fx(e)&&i&&"listItemPrefixWhitespace"===i[1].type?t(e):n(e)}),"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5)},partial:!0},oy={tokenize:function(e,t,n){const r=this;return _x(e,(function(e){const i=r.events[r.events.length-1];return i&&"listItemIndent"===i[1].type&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}),"listItemIndent",r.containerState.size+1)},partial:!0};const ay={name:"blockQuote",tokenize:function(e,t,n){const r=this;return function(t){if(62===t){const n=r.containerState;return n.open||(e.enter("blockQuote",{_container:!0}),n.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(t),e.exit("blockQuoteMarker"),i}return n(t)};function i(n){return Fx(n)?(e.enter("blockQuotePrefixWhitespace"),e.consume(n),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(n))}},continuation:{tokenize:function(e,t,n){const r=this;return function(t){if(Fx(t))return _x(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t);return i(t)};function i(r){return e.attempt(ay,t,n)(r)}}},exit:function(e){e.exit("blockQuote")}};function sy(e,t,n,r,i,o,a,s,l){const c=l||Number.POSITIVE_INFINITY;let u=0;return function(t){if(60===t)return e.enter(r),e.enter(i),e.enter(o),e.consume(t),e.exit(o),d;if(null===t||32===t||41===t||Px(t))return n(t);return e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),h(t)};function d(n){return 62===n?(e.enter(o),e.consume(n),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),p(n))}function p(t){return 62===t?(e.exit("chunkString"),e.exit(s),d(t)):null===t||60===t||Ix(t)?n(t):(e.consume(t),92===t?f:p)}function f(t){return 60===t||62===t||92===t?(e.consume(t),p):p(t)}function h(i){return u||null!==i&&41!==i&&!Lx(i)?u<c&&40===i?(e.consume(i),u++,h):41===i?(e.consume(i),u--,h):null===i||32===i||40===i||Px(i)?n(i):(e.consume(i),92===i?m:h):(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),t(i))}function m(t){return 40===t||41===t||92===t?(e.consume(t),h):h(t)}}function ly(e,t,n,r,i,o){const a=this;let s,l=0;return function(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(o),c};function c(d){return l>999||null===d||91===d||93===d&&!s||94===d&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(d):93===d?(e.exit(o),e.enter(i),e.consume(d),e.exit(i),e.exit(r),t):Ix(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),u(d))}function u(t){return null===t||91===t||93===t||Ix(t)||l++>999?(e.exit("chunkString"),c(t)):(e.consume(t),s||(s=!Fx(t)),92===t?d:u)}function d(t){return 91===t||92===t||93===t?(e.consume(t),l++,u):u(t)}}function cy(e,t,n,r,i,o){let a;return function(t){if(34===t||39===t||40===t)return e.enter(r),e.enter(i),e.consume(t),e.exit(i),a=40===t?41:t,s;return n(t)};function s(n){return n===a?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(o),l(n))}function l(t){return t===a?(e.exit(o),s(a)):null===t?n(t):Ix(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),_x(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(t))}function c(t){return t===a||null===t||Ix(t)?(e.exit("chunkString"),l(t)):(e.consume(t),92===t?u:c)}function u(t){return t===a||92===t?(e.consume(t),c):c(t)}}function uy(e,t){let n;return function r(i){if(Ix(i))return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r;if(Fx(i))return _x(e,r,n?"linePrefix":"lineSuffix")(i);return t(i)}}function dy(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const py={name:"definition",tokenize:function(e,t,n){const r=this;let i;return function(t){return e.enter("definition"),function(t){return ly.call(r,e,o,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(t)}(t)};function o(t){return i=dy(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),a):n(t)}function a(t){return Lx(t)?uy(e,s)(t):s(t)}function s(t){return sy(e,l,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(t)}function l(t){return e.attempt(fy,c,c)(t)}function c(t){return Fx(t)?_x(e,u,"whitespace")(t):u(t)}function u(o){return null===o||Ix(o)?(e.exit("definition"),r.parser.defined.push(i),t(o)):n(o)}}},fy={tokenize:function(e,t,n){return function(t){return Lx(t)?uy(e,r)(t):n(t)};function r(t){return cy(e,i,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(t)}function i(t){return Fx(t)?_x(e,o,"whitespace")(t):o(t)}function o(e){return null===e||Ix(e)?t(e):n(e)}},partial:!0};const hy={name:"codeIndented",tokenize:function(e,t,n){const r=this;return function(t){return e.enter("codeIndented"),_x(e,i,"linePrefix",5)(t)};function i(e){const t=r.events[r.events.length-1];return t&&"linePrefix"===t[1].type&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return null===t?s(t):Ix(t)?e.attempt(my,o,s)(t):(e.enter("codeFlowValue"),a(t))}function a(t){return null===t||Ix(t)?(e.exit("codeFlowValue"),o(t)):(e.consume(t),a)}function s(n){return e.exit("codeIndented"),t(n)}}},my={tokenize:function(e,t,n){const r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):Ix(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i):_x(e,o,"linePrefix",5)(t)}function o(e){const o=r.events[r.events.length-1];return o&&"linePrefix"===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?t(e):Ix(e)?i(e):n(e)}},partial:!0};const gy={name:"headingAtx",tokenize:function(e,t,n){let r=0;return function(t){return e.enter("atxHeading"),function(t){return e.enter("atxHeadingSequence"),i(t)}(t)};function i(t){return 35===t&&r++<6?(e.consume(t),i):null===t||Lx(t)?(e.exit("atxHeadingSequence"),o(t)):n(t)}function o(n){return 35===n?(e.enter("atxHeadingSequence"),a(n)):null===n||Ix(n)?(e.exit("atxHeading"),t(n)):Fx(n)?_x(e,o,"whitespace")(n):(e.enter("atxHeadingText"),s(n))}function a(t){return 35===t?(e.consume(t),a):(e.exit("atxHeadingSequence"),o(t))}function s(t){return null===t||35===t||Lx(t)?(e.exit("atxHeadingText"),o(t)):(e.consume(t),s)}},resolve:function(e,t){let n,r,i=e.length-2,o=3;"whitespace"===e[o][1].type&&(o+=2);i-2>o&&"whitespace"===e[i][1].type&&(i-=2);"atxHeadingSequence"===e[i][1].type&&(o===i-1||i-4>o&&"whitespace"===e[i-2][1].type)&&(i-=o+1===i?2:4);i>o&&(n={type:"atxHeadingText",start:e[o][1].start,end:e[i][1].end},r={type:"chunkText",start:e[o][1].start,end:e[i][1].end,contentType:"text"},yx(e,o,i-o+1,[["enter",n,t],["enter",r,t],["exit",r,t],["exit",n,t]]));return e}};const xy={name:"setextUnderline",tokenize:function(e,t,n){const r=this;let i;return function(t){let a,s=r.events.length;for(;s--;)if("lineEnding"!==r.events[s][1].type&&"linePrefix"!==r.events[s][1].type&&"content"!==r.events[s][1].type){a="paragraph"===r.events[s][1].type;break}if(!r.parser.lazy[r.now().line]&&(r.interrupt||a))return e.enter("setextHeadingLine"),i=t,function(t){return e.enter("setextHeadingLineSequence"),o(t)}(t);return n(t)};function o(t){return t===i?(e.consume(t),o):(e.exit("setextHeadingLineSequence"),Fx(t)?_x(e,a,"lineSuffix")(t):a(t))}function a(r){return null===r||Ix(r)?(e.exit("setextHeadingLine"),t(r)):n(r)}},resolveTo:function(e,t){let n,r,i,o=e.length;for(;o--;)if("enter"===e[o][0]){if("content"===e[o][1].type){n=o;break}"paragraph"===e[o][1].type&&(r=o)}else"content"===e[o][1].type&&e.splice(o,1),i||"definition"!==e[o][1].type||(i=o);const a={type:"setextHeading",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)};e[r][1].type="setextHeadingText",i?(e.splice(r,0,["enter",a,t]),e.splice(i+1,0,["exit",e[n][1],t]),e[n][1].end=Object.assign({},e[i][1].end)):e[n][1]=a;return e.push(["exit",a,t]),e}};const yy=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],vy=["pre","script","style","textarea"],by={name:"htmlFlow",tokenize:function(e,t,n){const r=this;let i,o,a,s,l;return function(t){return function(t){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(t),c}(t)};function c(s){return 33===s?(e.consume(s),u):47===s?(e.consume(s),o=!0,f):63===s?(e.consume(s),i=3,r.interrupt?t:I):Ex(s)?(e.consume(s),a=String.fromCharCode(s),h):n(s)}function u(o){return 45===o?(e.consume(o),i=2,d):91===o?(e.consume(o),i=5,s=0,p):Ex(o)?(e.consume(o),i=4,r.interrupt?t:I):n(o)}function d(i){return 45===i?(e.consume(i),r.interrupt?t:I):n(i)}function p(i){const o="CDATA[";return i===o.charCodeAt(s++)?(e.consume(i),6===s?r.interrupt?t:C:p):n(i)}function f(t){return Ex(t)?(e.consume(t),a=String.fromCharCode(t),h):n(t)}function h(s){if(null===s||47===s||62===s||Lx(s)){const l=47===s,c=a.toLowerCase();return l||o||!vy.includes(c)?yy.includes(a.toLowerCase())?(i=6,l?(e.consume(s),m):r.interrupt?t(s):C(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):o?g(s):x(s)):(i=1,r.interrupt?t(s):C(s))}return 45===s||Rx(s)?(e.consume(s),a+=String.fromCharCode(s),h):n(s)}function m(i){return 62===i?(e.consume(i),r.interrupt?t:C):n(i)}function g(t){return Fx(t)?(e.consume(t),g):A(t)}function x(t){return 47===t?(e.consume(t),A):58===t||95===t||Ex(t)?(e.consume(t),y):Fx(t)?(e.consume(t),x):A(t)}function y(t){return 45===t||46===t||58===t||95===t||Rx(t)?(e.consume(t),y):v(t)}function v(t){return 61===t?(e.consume(t),b):Fx(t)?(e.consume(t),v):x(t)}function b(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),l=t,w):Fx(t)?(e.consume(t),b):k(t)}function w(t){return t===l?(e.consume(t),l=null,S):null===t||Ix(t)?n(t):(e.consume(t),w)}function k(t){return null===t||34===t||39===t||47===t||60===t||61===t||62===t||96===t||Lx(t)?v(t):(e.consume(t),k)}function S(e){return 47===e||62===e||Fx(e)?x(e):n(e)}function A(t){return 62===t?(e.consume(t),j):n(t)}function j(t){return null===t||Ix(t)?C(t):Fx(t)?(e.consume(t),j):n(t)}function C(t){return 45===t&&2===i?(e.consume(t),P):60===t&&1===i?(e.consume(t),T):62===t&&4===i?(e.consume(t),L):63===t&&3===i?(e.consume(t),I):93===t&&5===i?(e.consume(t),M):!Ix(t)||6!==i&&7!==i?null===t||Ix(t)?(e.exit("htmlFlowData"),E(t)):(e.consume(t),C):(e.exit("htmlFlowData"),e.check(wy,F,E)(t))}function E(t){return e.check(ky,R,F)(t)}function R(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),O}function O(t){return null===t||Ix(t)?E(t):(e.enter("htmlFlowData"),C(t))}function P(t){return 45===t?(e.consume(t),I):C(t)}function T(t){return 47===t?(e.consume(t),a="",z):C(t)}function z(t){if(62===t){const n=a.toLowerCase();return vy.includes(n)?(e.consume(t),L):C(t)}return Ex(t)&&a.length<8?(e.consume(t),a+=String.fromCharCode(t),z):C(t)}function M(t){return 93===t?(e.consume(t),I):C(t)}function I(t){return 62===t?(e.consume(t),L):45===t&&2===i?(e.consume(t),I):C(t)}function L(t){return null===t||Ix(t)?(e.exit("htmlFlowData"),F(t)):(e.consume(t),L)}function F(n){return e.exit("htmlFlow"),t(n)}},resolveTo:function(e){let t=e.length;for(;t--&&("enter"!==e[t][0]||"htmlFlow"!==e[t][1].type););t>1&&"linePrefix"===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2));return e},concrete:!0},wy={tokenize:function(e,t,n){return function(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(qx,t,n)}},partial:!0},ky={tokenize:function(e,t,n){const r=this;return function(t){if(Ix(t))return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i;return n(t)};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0};const Sy={tokenize:function(e,t,n){const r=this;return function(t){if(null===t)return n(t);return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0},Ay={name:"codeFenced",tokenize:function(e,t,n){const r=this,i={tokenize:function(e,t,n){let i=0;return a;function a(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l}function l(t){return e.enter("codeFencedFence"),Fx(t)?_x(e,c,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):c(t)}function c(t){return t===o?(e.enter("codeFencedFenceSequence"),u(t)):n(t)}function u(t){return t===o?(i++,e.consume(t),u):i>=s?(e.exit("codeFencedFenceSequence"),Fx(t)?_x(e,d,"whitespace")(t):d(t)):n(t)}function d(r){return null===r||Ix(r)?(e.exit("codeFencedFence"),t(r)):n(r)}},partial:!0};let o,a=0,s=0;return function(t){return function(t){const n=r.events[r.events.length-1];return a=n&&"linePrefix"===n[1].type?n[2].sliceSerialize(n[1],!0).length:0,o=t,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),l(t)}(t)};function l(t){return t===o?(s++,e.consume(t),l):s<3?n(t):(e.exit("codeFencedFenceSequence"),Fx(t)?_x(e,c,"whitespace")(t):c(t))}function c(n){return null===n||Ix(n)?(e.exit("codeFencedFence"),r.interrupt?t(n):e.check(Sy,f,y)(n)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),u(n))}function u(t){return null===t||Ix(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(t)):Fx(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),_x(e,d,"whitespace")(t)):96===t&&t===o?n(t):(e.consume(t),u)}function d(t){return null===t||Ix(t)?c(t):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),p(t))}function p(t){return null===t||Ix(t)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(t)):96===t&&t===o?n(t):(e.consume(t),p)}function f(t){return e.attempt(i,y,h)(t)}function h(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),m}function m(t){return a>0&&Fx(t)?_x(e,g,"linePrefix",a+1)(t):g(t)}function g(t){return null===t||Ix(t)?e.check(Sy,f,y)(t):(e.enter("codeFlowValue"),x(t))}function x(t){return null===t||Ix(t)?(e.exit("codeFlowValue"),g(t)):(e.consume(t),x)}function y(n){return e.exit("codeFenced"),t(n)}},concrete:!0};const jy=document.createElement("i");function Cy(e){const t="&"+e+";";jy.innerHTML=t;const n=jy.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&(n!==t&&n)}const Ey={name:"characterReference",tokenize:function(e,t,n){const r=this;let i,o,a=0;return function(t){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(t),e.exit("characterReferenceMarker"),s};function s(t){return 35===t?(e.enter("characterReferenceMarkerNumeric"),e.consume(t),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),i=31,o=Rx,c(t))}function l(t){return 88===t||120===t?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(t),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,o=zx,c):(e.enter("characterReferenceValue"),i=7,o=Tx,c(t))}function c(s){if(59===s&&a){const i=e.exit("characterReferenceValue");return o!==Rx||Cy(r.sliceSerialize(i))?(e.enter("characterReferenceMarker"),e.consume(s),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):n(s)}return o(s)&&a++<i?(e.consume(s),c):n(s)}}};const Ry={name:"characterEscape",tokenize:function(e,t,n){return function(t){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(t),e.exit("escapeMarker"),r};function r(r){return Mx(r)?(e.enter("characterEscapeValue"),e.consume(r),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(r)}}};const Oy={name:"lineEnding",tokenize:function(e,t){return function(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),_x(e,t,"linePrefix")}}};const Py={name:"labelEnd",tokenize:function(e,t,n){const r=this;let i,o,a=r.events.length;for(;a--;)if(("labelImage"===r.events[a][1].type||"labelLink"===r.events[a][1].type)&&!r.events[a][1]._balanced){i=r.events[a][1];break}return function(t){if(!i)return n(t);if(i._inactive)return u(t);return o=r.parser.defined.includes(dy(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelEnd"),s};function s(t){return 40===t?e.attempt(Ty,c,o?c:u)(t):91===t?e.attempt(zy,c,o?l:u)(t):o?c(t):u(t)}function l(t){return e.attempt(My,c,u)(t)}function c(e){return t(e)}function u(e){return i._balanced=!0,n(e)}},resolveTo:function(e,t){let n,r,i,o,a=e.length,s=0;for(;a--;)if(n=e[a][1],r){if("link"===n.type||"labelLink"===n.type&&n._inactive)break;"enter"===e[a][0]&&"labelLink"===n.type&&(n._inactive=!0)}else if(i){if("enter"===e[a][0]&&("labelImage"===n.type||"labelLink"===n.type)&&!n._balanced&&(r=a,"labelLink"!==n.type)){s=2;break}}else"labelEnd"===n.type&&(i=a);const l={type:"labelLink"===e[r][1].type?"link":"image",start:Object.assign({},e[r][1].start),end:Object.assign({},e[e.length-1][1].end)},c={type:"label",start:Object.assign({},e[r][1].start),end:Object.assign({},e[i][1].end)},u={type:"labelText",start:Object.assign({},e[r+s+2][1].end),end:Object.assign({},e[i-2][1].start)};return o=[["enter",l,t],["enter",c,t]],o=vx(o,e.slice(r+1,r+s+3)),o=vx(o,[["enter",u,t]]),o=vx(o,ey(t.parser.constructs.insideSpan.null,e.slice(r+s+4,i-3),t)),o=vx(o,[["exit",u,t],e[i-2],e[i-1],["exit",c,t]]),o=vx(o,e.slice(i+1)),o=vx(o,[["exit",l,t]]),yx(e,r,e.length,o),e},resolveAll:function(e){let t=-1;for(;++t<e.length;){const n=e[t][1];"labelImage"!==n.type&&"labelLink"!==n.type&&"labelEnd"!==n.type||(e.splice(t+1,"labelImage"===n.type?4:2),n.type="data",t++)}return e}},Ty={tokenize:function(e,t,n){return function(t){return e.enter("resource"),e.enter("resourceMarker"),e.consume(t),e.exit("resourceMarker"),r};function r(t){return Lx(t)?uy(e,i)(t):i(t)}function i(t){return 41===t?c(t):sy(e,o,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(t)}function o(t){return Lx(t)?uy(e,s)(t):c(t)}function a(e){return n(e)}function s(t){return 34===t||39===t||40===t?cy(e,l,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(t):c(t)}function l(t){return Lx(t)?uy(e,c)(t):c(t)}function c(r){return 41===r?(e.enter("resourceMarker"),e.consume(r),e.exit("resourceMarker"),e.exit("resource"),t):n(r)}}},zy={tokenize:function(e,t,n){const r=this;return function(t){return ly.call(r,e,i,o,"reference","referenceMarker","referenceString")(t)};function i(e){return r.parser.defined.includes(dy(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}},My={tokenize:function(e,t,n){return function(t){return e.enter("reference"),e.enter("referenceMarker"),e.consume(t),e.exit("referenceMarker"),r};function r(r){return 93===r?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),t):n(r)}}};const Iy={name:"labelStartImage",tokenize:function(e,t,n){const r=this;return function(t){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(t),e.exit("labelImageMarker"),i};function i(t){return 91===t?(e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelImage"),o):n(t)}function o(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}},resolveAll:Py.resolveAll};function Ly(e){return null===e||Lx(e)||Dx(e)?1:Nx(e)?2:void 0}const Fy={name:"attention",tokenize:function(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Ly(r);let o;return function(t){return o=t,e.enter("attentionSequence"),a(t)};function a(s){if(s===o)return e.consume(s),a;const l=e.exit("attentionSequence"),c=Ly(s),u=!c||2===c&&i||n.includes(s),d=!i||2===i&&c||n.includes(r);return l._open=Boolean(42===o?u:u&&(i||!d)),l._close=Boolean(42===o?d:d&&(c||!u)),t(s)}},resolveAll:function(e,t){let n,r,i,o,a,s,l,c,u=-1;for(;++u<e.length;)if("enter"===e[u][0]&&"attentionSequence"===e[u][1].type&&e[u][1]._close)for(n=u;n--;)if("exit"===e[n][0]&&"attentionSequence"===e[n][1].type&&e[n][1]._open&&t.sliceSerialize(e[n][1]).charCodeAt(0)===t.sliceSerialize(e[u][1]).charCodeAt(0)){if((e[n][1]._close||e[u][1]._open)&&(e[u][1].end.offset-e[u][1].start.offset)%3&&!((e[n][1].end.offset-e[n][1].start.offset+e[u][1].end.offset-e[u][1].start.offset)%3))continue;s=e[n][1].end.offset-e[n][1].start.offset>1&&e[u][1].end.offset-e[u][1].start.offset>1?2:1;const d=Object.assign({},e[n][1].end),p=Object.assign({},e[u][1].start);Ny(d,-s),Ny(p,s),o={type:s>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[n][1].end)},a={type:s>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[u][1].start),end:p},i={type:s>1?"strongText":"emphasisText",start:Object.assign({},e[n][1].end),end:Object.assign({},e[u][1].start)},r={type:s>1?"strong":"emphasis",start:Object.assign({},o.start),end:Object.assign({},a.end)},e[n][1].end=Object.assign({},o.start),e[u][1].start=Object.assign({},a.end),l=[],e[n][1].end.offset-e[n][1].start.offset&&(l=vx(l,[["enter",e[n][1],t],["exit",e[n][1],t]])),l=vx(l,[["enter",r,t],["enter",o,t],["exit",o,t],["enter",i,t]]),l=vx(l,ey(t.parser.constructs.insideSpan.null,e.slice(n+1,u),t)),l=vx(l,[["exit",i,t],["enter",a,t],["exit",a,t],["exit",r,t]]),e[u][1].end.offset-e[u][1].start.offset?(c=2,l=vx(l,[["enter",e[u][1],t],["exit",e[u][1],t]])):c=0,yx(e,n-1,u-n+3,l),u=n+l.length-c-2;break}u=-1;for(;++u<e.length;)"attentionSequence"===e[u][1].type&&(e[u][1].type="data");return e}};function Ny(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Dy={name:"autolink",tokenize:function(e,t,n){let r=0;return function(t){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i};function i(t){return Ex(t)?(e.consume(t),o):64===t?n(t):l(t)}function o(e){return 43===e||45===e||46===e||Rx(e)?(r=1,a(e)):l(e)}function a(t){return 58===t?(e.consume(t),r=0,s):(43===t||45===t||46===t||Rx(t))&&r++<32?(e.consume(t),a):(r=0,l(t))}function s(r){return 62===r?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(r),e.exit("autolinkMarker"),e.exit("autolink"),t):null===r||32===r||60===r||Px(r)?n(r):(e.consume(r),s)}function l(t){return 64===t?(e.consume(t),c):Ox(t)?(e.consume(t),l):n(t)}function c(e){return Rx(e)?u(e):n(e)}function u(n){return 46===n?(e.consume(n),r=0,c):62===n?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(n),e.exit("autolinkMarker"),e.exit("autolink"),t):d(n)}function d(t){if((45===t||Rx(t))&&r++<63){const n=45===t?d:u;return e.consume(t),n}return n(t)}}};const By={name:"htmlText",tokenize:function(e,t,n){const r=this;let i,o,a;return function(t){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(t),s};function s(t){return 33===t?(e.consume(t),l):47===t?(e.consume(t),b):63===t?(e.consume(t),y):Ex(t)?(e.consume(t),S):n(t)}function l(t){return 45===t?(e.consume(t),c):91===t?(e.consume(t),o=0,f):Ex(t)?(e.consume(t),x):n(t)}function c(t){return 45===t?(e.consume(t),p):n(t)}function u(t){return null===t?n(t):45===t?(e.consume(t),d):Ix(t)?(a=u,z(t)):(e.consume(t),u)}function d(t){return 45===t?(e.consume(t),p):u(t)}function p(e){return 62===e?T(e):45===e?d(e):u(e)}function f(t){const r="CDATA[";return t===r.charCodeAt(o++)?(e.consume(t),6===o?h:f):n(t)}function h(t){return null===t?n(t):93===t?(e.consume(t),m):Ix(t)?(a=h,z(t)):(e.consume(t),h)}function m(t){return 93===t?(e.consume(t),g):h(t)}function g(t){return 62===t?T(t):93===t?(e.consume(t),g):h(t)}function x(t){return null===t||62===t?T(t):Ix(t)?(a=x,z(t)):(e.consume(t),x)}function y(t){return null===t?n(t):63===t?(e.consume(t),v):Ix(t)?(a=y,z(t)):(e.consume(t),y)}function v(e){return 62===e?T(e):y(e)}function b(t){return Ex(t)?(e.consume(t),w):n(t)}function w(t){return 45===t||Rx(t)?(e.consume(t),w):k(t)}function k(t){return Ix(t)?(a=k,z(t)):Fx(t)?(e.consume(t),k):T(t)}function S(t){return 45===t||Rx(t)?(e.consume(t),S):47===t||62===t||Lx(t)?A(t):n(t)}function A(t){return 47===t?(e.consume(t),T):58===t||95===t||Ex(t)?(e.consume(t),j):Ix(t)?(a=A,z(t)):Fx(t)?(e.consume(t),A):T(t)}function j(t){return 45===t||46===t||58===t||95===t||Rx(t)?(e.consume(t),j):C(t)}function C(t){return 61===t?(e.consume(t),E):Ix(t)?(a=C,z(t)):Fx(t)?(e.consume(t),C):A(t)}function E(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),i=t,R):Ix(t)?(a=E,z(t)):Fx(t)?(e.consume(t),E):(e.consume(t),O)}function R(t){return t===i?(e.consume(t),i=void 0,P):null===t?n(t):Ix(t)?(a=R,z(t)):(e.consume(t),R)}function O(t){return null===t||34===t||39===t||60===t||61===t||96===t?n(t):47===t||62===t||Lx(t)?A(t):(e.consume(t),O)}function P(e){return 47===e||62===e||Lx(e)?A(e):n(e)}function T(r){return 62===r?(e.consume(r),e.exit("htmlTextData"),e.exit("htmlText"),t):n(r)}function z(t){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),M}function M(t){return Fx(t)?_x(e,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):I(t)}function I(t){return e.enter("htmlTextData"),a(t)}}};const _y={name:"labelStartLink",tokenize:function(e,t,n){const r=this;return function(t){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelLink"),i};function i(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}},resolveAll:Py.resolveAll};const Hy={name:"hardBreakEscape",tokenize:function(e,t,n){return function(t){return e.enter("hardBreakEscape"),e.consume(t),r};function r(r){return Ix(r)?(e.exit("hardBreakEscape"),t(r)):n(r)}}};const Uy={name:"codeText",tokenize:function(e,t,n){let r,i,o=0;return function(t){return e.enter("codeText"),e.enter("codeTextSequence"),a(t)};function a(t){return 96===t?(e.consume(t),o++,a):(e.exit("codeTextSequence"),s(t))}function s(t){return null===t?n(t):32===t?(e.enter("space"),e.consume(t),e.exit("space"),s):96===t?(i=e.enter("codeTextSequence"),r=0,c(t)):Ix(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),s):(e.enter("codeTextData"),l(t))}function l(t){return null===t||32===t||96===t||Ix(t)?(e.exit("codeTextData"),s(t)):(e.consume(t),l)}function c(n){return 96===n?(e.consume(n),r++,c):r===o?(e.exit("codeTextSequence"),e.exit("codeText"),t(n)):(i.type="codeTextData",l(n))}},resolve:function(e){let t,n,r=e.length-4,i=3;if(("lineEnding"===e[i][1].type||"space"===e[i][1].type)&&("lineEnding"===e[r][1].type||"space"===e[r][1].type))for(t=i;++t<r;)if("codeTextData"===e[t][1].type){e[i][1].type="codeTextPadding",e[r][1].type="codeTextPadding",i+=2,r-=2;break}t=i-1,r++;for(;++t<=r;)void 0===n?t!==r&&"lineEnding"!==e[t][1].type&&(n=t):t!==r&&"lineEnding"!==e[t][1].type||(e[n][1].type="codeTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e},previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type}};const Wy={42:ry,43:ry,45:ry,48:ry,49:ry,50:ry,51:ry,52:ry,53:ry,54:ry,55:ry,56:ry,57:ry,62:ay},qy={91:py},Gy={[-2]:hy,[-1]:hy,32:hy},Vy={35:gy,42:ny,45:[xy,ny],60:by,61:xy,95:ny,96:Ay,126:Ay},Ky={38:Ey,92:Ry},Jy={[-5]:Oy,[-4]:Oy,[-3]:Oy,33:Iy,38:Ey,42:Fy,60:[Dy,By],91:_y,92:[Hy,Ry],93:Py,95:Fy,96:Uy},Qy={null:[Fy,Jx]},Yy={null:[42,95]},Zy={null:[]};function Xy(e){const t=function(e){const t={};let n=-1;for(;++n<e.length;)jx(t,e[n]);return t}([r,...(e||{}).extensions||[]]),n={defined:[],lazy:{},constructs:t,content:i(Hx),document:i(Ux),flow:i(Kx),string:i(Qx),text:i(Yx)};return n;function i(e){return function(t){return ty(n,e,t)}}}const $y=/[\0\t\n\r]/g;function ev(e,t){const n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||65535===(65535&n)||65534===(65535&n)||n>1114111?"\ufffd":String.fromCodePoint(n)}const tv=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function nv(e,t,n){if(t)return t;if(35===n.charCodeAt(0)){const e=n.charCodeAt(1),t=120===e||88===e;return ev(n.slice(t?2:1),t?16:10)}return Cy(n)||e}const rv={}.hasOwnProperty;function iv(e,t,n){return"string"!==typeof t&&(n=t,t=void 0),function(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(te),autolinkProtocol:j,autolinkEmail:j,atxHeading:o(Z),blockQuote:o(V),characterEscape:j,characterReference:j,codeFenced:o(K),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(K,a),codeText:o(J,a),codeTextData:j,data:j,codeFlowValue:j,definition:o(Q),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(Y),hardBreakEscape:o(X),hardBreakTrailing:o(X),htmlFlow:o($,a),htmlFlowData:j,htmlText:o($,a),htmlTextData:j,image:o(ee),label:a,link:o(te),listItem:o(re),listItemValue:p,listOrdered:o(ne,d),listUnordered:o(ne),paragraph:o(ie),reference:B,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(Z),strong:o(oe),thematicBreak:o(se)},exit:{atxHeading:l(),atxHeadingSequence:w,autolink:l(),autolinkEmail:G,autolinkProtocol:q,blockQuote:l(),characterEscapeValue:C,characterReferenceMarkerHexadecimal:H,characterReferenceMarkerNumeric:H,characterReferenceValue:U,characterReference:W,codeFenced:l(g),codeFencedFence:m,codeFencedFenceInfo:f,codeFencedFenceMeta:h,codeFlowValue:C,codeIndented:l(x),codeText:l(T),codeTextData:C,data:C,definition:l(),definitionDestinationString:b,definitionLabelString:y,definitionTitleString:v,emphasis:l(),hardBreakEscape:l(R),hardBreakTrailing:l(R),htmlFlow:l(O),htmlFlowData:C,htmlText:l(P),htmlTextData:C,image:l(M),label:L,labelText:I,lineEnding:E,link:l(z),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:_,resourceDestinationString:F,resourceTitleString:N,resource:D,setextHeading:l(A),setextHeadingLineSequence:S,setextHeadingText:k,strong:l(),thematicBreak:l()}};av(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(e){let r={type:"root",children:[]};const o={stack:[r],tokenStack:[],config:t,enter:s,exit:c,buffer:a,resume:u,data:n},l=[];let d=-1;for(;++d<e.length;)if("listOrdered"===e[d][1].type||"listUnordered"===e[d][1].type)if("enter"===e[d][0])l.push(d);else{d=i(e,l.pop(),d)}for(d=-1;++d<e.length;){const n=t[e[d][0]];rv.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},o),e[d][1])}if(o.tokenStack.length>0){const e=o.tokenStack[o.tokenStack.length-1];(e[1]||lv).call(o,void 0,e[0])}for(r.position={start:ov(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:ov(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r,i,o,a,s=t-1,l=-1,c=!1;for(;++s<=n;){const t=e[s];switch(t[1].type){case"listUnordered":case"listOrdered":case"blockQuote":"enter"===t[0]?l++:l--,a=void 0;break;case"lineEndingBlank":"enter"===t[0]&&(!r||a||l||o||(o=s),a=void 0);break;case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:a=void 0}if(!l&&"enter"===t[0]&&"listItemPrefix"===t[1].type||-1===l&&"exit"===t[0]&&("listUnordered"===t[1].type||"listOrdered"===t[1].type)){if(r){let a=s;for(i=void 0;a--;){const t=e[a];if("lineEnding"===t[1].type||"lineEndingBlank"===t[1].type){if("exit"===t[0])continue;i&&(e[i][1].type="lineEndingBlank",c=!0),t[1].type="lineEnding",i=a}else if("linePrefix"!==t[1].type&&"blockQuotePrefix"!==t[1].type&&"blockQuotePrefixWhitespace"!==t[1].type&&"blockQuoteMarker"!==t[1].type&&"listItemIndent"!==t[1].type)break}o&&(!i||o<i)&&(r._spread=!0),r.end=Object.assign({},i?e[i][1].start:t[1].end),e.splice(i||s,0,["exit",r,t[2]]),s++,n++}if("listItemPrefix"===t[1].type){const i={type:"listItem",_spread:!1,start:Object.assign({},t[1].start),end:void 0};r=i,e.splice(s,0,["enter",i,t[2]]),s++,n++,o=void 0,a=!0}}}return e[t][1]._spread=c,n}function o(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function a(){this.stack.push({type:"fragment",children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n]),e.position={start:ov(t.start),end:void 0}}function l(e){return t;function t(t){e&&e.call(this,t),c.call(this,t)}}function c(e,t){const n=this.stack.pop(),r=this.tokenStack.pop();if(!r)throw new Error("Cannot close `"+e.type+"` ("+Gg({start:e.start,end:e.end})+"): it\u2019s not open");if(r[0].type!==e.type)if(t)t.call(this,e,r[0]);else{(r[1]||lv).call(this,e,r[0])}n.position.end=ov(e.end)}function u(){return function(e,t){const n=t||mx;return gx(e,"boolean"!==typeof n.includeImageAlt||n.includeImageAlt,"boolean"!==typeof n.includeHtml||n.includeHtml)}(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function p(e){if(this.data.expectingFirstListItemValue){this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function f(){const e=this.resume();this.stack[this.stack.length-1].lang=e}function h(){const e=this.resume();this.stack[this.stack.length-1].meta=e}function m(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){const e=this.resume();this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const e=this.resume();this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,"")}function y(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=dy(this.sliceSerialize(e)).toLowerCase()}function v(){const e=this.resume();this.stack[this.stack.length-1].title=e}function b(){const e=this.resume();this.stack[this.stack.length-1].url=e}function w(e){const t=this.stack[this.stack.length-1];if(!t.depth){const n=this.sliceSerialize(e).length;t.depth=n}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function S(e){this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).codePointAt(0)?1:2}function A(){this.data.setextHeadingSlurpLineEnding=void 0}function j(e){const t=this.stack[this.stack.length-1].children;let n=t[t.length-1];n&&"text"===n.type||(n=ae(),n.position={start:ov(e.start),end:void 0},t.push(n)),this.stack.push(n)}function C(e){const t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=ov(e.end)}function E(e){const n=this.stack[this.stack.length-1];if(this.data.atHardBreak){return n.children[n.children.length-1].position.end=ov(e.end),void(this.data.atHardBreak=void 0)}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(j.call(this,e),C.call(this,e))}function R(){this.data.atHardBreak=!0}function O(){const e=this.resume();this.stack[this.stack.length-1].value=e}function P(){const e=this.resume();this.stack[this.stack.length-1].value=e}function T(){const e=this.resume();this.stack[this.stack.length-1].value=e}function z(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function M(){const e=this.stack[this.stack.length-1];if(this.data.inReference){const t=this.data.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function I(e){const t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=function(e){return e.replace(tv,nv)}(t),n.identifier=dy(t).toLowerCase()}function L(){const e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];if(this.data.inReference=!0,"link"===n.type){const t=e.children;n.children=t}else n.alt=t}function F(){const e=this.resume();this.stack[this.stack.length-1].url=e}function N(){const e=this.resume();this.stack[this.stack.length-1].title=e}function D(){this.data.inReference=void 0}function B(){this.data.referenceType="collapsed"}function _(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=dy(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType="full"}function H(e){this.data.characterReferenceType=e.type}function U(e){const t=this.sliceSerialize(e),n=this.data.characterReferenceType;let r;if(n)r=ev(t,"characterReferenceMarkerNumeric"===n?10:16),this.data.characterReferenceType=void 0;else{r=Cy(t)}this.stack[this.stack.length-1].value+=r}function W(e){this.stack.pop().position.end=ov(e.end)}function q(e){C.call(this,e);this.stack[this.stack.length-1].url=this.sliceSerialize(e)}function G(e){C.call(this,e);this.stack[this.stack.length-1].url="mailto:"+this.sliceSerialize(e)}function V(){return{type:"blockquote",children:[]}}function K(){return{type:"code",lang:null,meta:null,value:""}}function J(){return{type:"inlineCode",value:""}}function Q(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Y(){return{type:"emphasis",children:[]}}function Z(){return{type:"heading",depth:0,children:[]}}function X(){return{type:"break"}}function $(){return{type:"html",value:""}}function ee(){return{type:"image",title:null,url:"",alt:null}}function te(){return{type:"link",title:null,url:"",children:[]}}function ne(e){return{type:"list",ordered:"listOrdered"===e.type,start:null,spread:e._spread,children:[]}}function re(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}}function ie(){return{type:"paragraph",children:[]}}function oe(){return{type:"strong",children:[]}}function ae(){return{type:"text",value:""}}function se(){return{type:"thematicBreak"}}}(n)(function(e){for(;!kx(e););return e}(Xy(n).document().write(function(){let e,t=1,n="",r=!0;return function(i,o,a){const s=[];let l,c,u,d,p;for(i=n+("string"===typeof i?i.toString():new TextDecoder(o||void 0).decode(i)),u=0,n="",r&&(65279===i.charCodeAt(0)&&u++,r=void 0);u<i.length;){if($y.lastIndex=u,l=$y.exec(i),d=l&&void 0!==l.index?l.index:i.length,p=i.charCodeAt(d),!l){n=i.slice(u);break}if(10===p&&u===d&&e)s.push(-3),e=void 0;else switch(e&&(s.push(-5),e=void 0),u<d&&(s.push(i.slice(u,d)),t+=d-u),p){case 0:s.push(65533),t++;break;case 9:for(c=4*Math.ceil(t/4),s.push(-2);t++<c;)s.push(-1);break;case 10:s.push(-4),t=1;break;default:e=!0,t=1}u=d+1}return a&&(e&&s.push(-5),n&&s.push(n),s.push(null)),s}}()(e,t,!0))))}function ov(e){return{line:e.line,column:e.column,offset:e.offset}}function av(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?av(e,r):sv(e,r)}}function sv(e,t){let n;for(n in t)if(rv.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function lv(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Gg({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Gg({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Gg({start:t.start,end:t.end})+") is still open")}function cv(e){const t=this;t.parser=function(n){return iv(n,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}const uv="object"===typeof self?self:globalThis,dv=e=>((e,t)=>{const n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case 0:case-1:return n(a,i);case 1:{const e=n([],i);for(const t of a)e.push(r(t));return e}case 2:{const e=n({},i);for(const[t,n]of a)e[r(t)]=r(n);return e}case 3:return n(new Date(a),i);case 4:{const{source:e,flags:t}=a;return n(new RegExp(e,t),i)}case 5:{const e=n(new Map,i);for(const[t,n]of a)e.set(r(t),r(n));return e}case 6:{const e=n(new Set,i);for(const t of a)e.add(r(t));return e}case 7:{const{name:e,message:t}=a;return n(new uv[e](t),i)}case 8:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i)}return n(new uv[o](a),i)};return r})(new Map,e)(0),pv="",{toString:fv}={},{keys:hv}=Object,mv=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const n=fv.call(e).slice(8,-1);switch(n){case"Array":return[1,pv];case"Object":return[2,pv];case"Date":return[3,pv];case"RegExp":return[4,pv];case"Map":return[5,pv];case"Set":return[6,pv]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},gv=e=>{let[t,n]=e;return 0===t&&("function"===n||"symbol"===n)},xv=function(e){let{json:t,lossy:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=[];return((e,t,n,r)=>{const i=(e,t)=>{const i=r.push(e)-1;return n.set(t,i),i},o=r=>{if(n.has(r))return n.get(r);let[a,s]=mv(r);switch(a){case 0:{let t=r;switch(s){case"bigint":a=8,t=r.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);t=null;break;case"undefined":return i([-1],r)}return i([a,t],r)}case 1:{if(s)return i([s,[...r]],r);const e=[],t=i([a,e],r);for(const n of r)e.push(o(n));return t}case 2:{if(s)switch(s){case"BigInt":return i([s,r.toString()],r);case"Boolean":case"Number":case"String":return i([s,r.valueOf()],r)}if(t&&"toJSON"in r)return o(r.toJSON());const n=[],l=i([a,n],r);for(const t of hv(r))!e&&gv(mv(r[t]))||n.push([o(t),o(r[t])]);return l}case 3:return i([a,r.toISOString()],r);case 4:{const{source:e,flags:t}=r;return i([a,{source:e,flags:t}],r)}case 5:{const t=[],n=i([a,t],r);for(const[i,a]of r)(e||!gv(mv(i))&&!gv(mv(a)))&&t.push([o(i),o(a)]);return n}case 6:{const t=[],n=i([a,t],r);for(const i of r)!e&&gv(mv(i))||t.push(o(i));return n}}const{message:l}=r;return i([a,{name:s,message:l}],r)};return o})(!(t||n),!!t,new Map,r)(e),r},yv="function"===typeof structuredClone?(e,t)=>t&&("json"in t||"lossy"in t)?dv(xv(e,t)):structuredClone(e):(e,t)=>dv(xv(e,t));function vv(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(37===o&&Rx(e.charCodeAt(n+1))&&Rx(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const t=e.charCodeAt(n+1);o<56320&&t>56319&&t<57344?(a=String.fromCharCode(o,t),i=1):a="\ufffd"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function bv(e,t){const n=[{type:"text",value:"\u21a9"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function wv(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}const kv=function(e){if(null===e||void 0===e)return Av;if("function"===typeof e)return Sv(e);if("object"===typeof e)return Array.isArray(e)?function(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=kv(e[n]);return Sv(r);function r(){let e=-1;for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];for(;++e<t.length;)if(t[e].apply(this,r))return!0;return!1}}(e):function(e){const t=e;return Sv(n);function n(n){const r=n;let i;for(i in e)if(r[i]!==t[i])return!1;return!0}}(e);if("string"===typeof e)return function(e){return Sv(t);function t(t){return t&&t.type===e}}(e);throw new Error("Expected function, string, or object as test")};function Sv(e){return function(t,n,r){return Boolean(jv(t)&&e.call(this,t,"number"===typeof n?n:void 0,r||void 0))}}function Av(){return!0}function jv(e){return null!==e&&"object"===typeof e&&"type"in e}const Cv=[],Ev=!0,Rv=!1,Ov="skip";function Pv(e,t,n,r){let i;"function"===typeof t&&"function"!==typeof n?(r=n,n=t):i=t;const o=kv(i),a=r?-1:1;!function e(i,s,l){const c=i&&"object"===typeof i?i:{};if("string"===typeof c.type){const e="string"===typeof c.tagName?c.tagName:"string"===typeof c.name?c.name:void 0;Object.defineProperty(u,"name",{value:"node ("+i.type+(e?"<"+e+">":"")+")"})}return u;function u(){let c,u,d,p=Cv;if((!t||o(i,s,l[l.length-1]||void 0))&&(p=function(e){if(Array.isArray(e))return e;if("number"===typeof e)return[Ev,e];return null===e||void 0===e?Cv:[e]}(n(i,l)),p[0]===Rv))return p;if("children"in i&&i.children){const t=i;if(t.children&&p[0]!==Ov)for(u=(r?t.children.length:-1)+a,d=l.concat(t);u>-1&&u<t.children.length;){const n=t.children[u];if(c=e(n,u,d)(),c[0]===Rv)return c;u="number"===typeof c[1]?c[1]:u+a}}return p}}(e,void 0,[])()}function Tv(e,t,n,r){let i,o,a;"function"===typeof t&&"function"!==typeof n?(o=void 0,a=t,i=n):(o=t,a=n,i=r),Pv(e,o,(function(e,t){const n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return a(e,r,n)}),i)}function zv(e,t){const n=t.referenceType;let r="]";if("collapsed"===n?r+="[]":"full"===n&&(r+="["+(t.label||t.identifier)+"]"),"imageReference"===t.type)return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&"text"===o.type?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&"text"===a.type?a.value+=r:i.push({type:"text",value:r}),i}function Mv(e){const t=e.spread;return null===t||void 0===t?e.children.length>1:t}const Iv=9,Lv=32;function Fv(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Nv(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Nv(t.slice(i),i>0,!1)),o.join("")}function Nv(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===Iv||t===Lv;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===Iv||t===Lv;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}const Dv={blockquote:function(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)},break:function(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:"\n"}]},code:function(e,t){const n=t.value?t.value+"\n":"",r={};t.lang&&(r.className=["language-"+t.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i},delete:function(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},emphasis:function(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},footnoteReference:function(e,t){const n="string"===typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=vv(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,s=e.footnoteCounts.get(r);void 0===s?(s=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,s+=1,e.footnoteCounts.set(r,s);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,l);const c={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,c),e.applyData(t,c)},heading:function(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},html:function(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}},imageReference:function(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return zv(e,t);const i={src:vv(r.url||""),alt:t.alt};null!==r.title&&void 0!==r.title&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)},image:function(e,t){const n={src:vv(t.url)};null!==t.alt&&void 0!==t.alt&&(n.alt=t.alt),null!==t.title&&void 0!==t.title&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)},inlineCode:function(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)},linkReference:function(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return zv(e,t);const i={href:vv(r.url||"")};null!==r.title&&void 0!==r.title&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)},link:function(e,t){const n={href:vv(t.url)};null!==t.title&&void 0!==t.title&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)},listItem:function(e,t,n){const r=e.all(t),i=n?function(e){let t=!1;if("list"===e.type){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Mv(n[r])}return t}(n):Mv(t),o={},a=[];if("boolean"===typeof t.checked){const e=r[0];let n;e&&"element"===e.type&&"p"===e.tagName?n=e:(n={type:"element",tagName:"p",properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:"text",value:" "}),n.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const e=r[s];(i||0!==s||"element"!==e.type||"p"!==e.tagName)&&a.push({type:"text",value:"\n"}),"element"!==e.type||"p"!==e.tagName||i?a.push(e):a.push(...e.children)}const l=r[r.length-1];l&&(i||"element"!==l.type||"p"!==l.tagName)&&a.push({type:"text",value:"\n"});const c={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,c),e.applyData(t,c)},list:function(e,t){const n={},r=e.all(t);let i=-1;for("number"===typeof t.start&&1!==t.start&&(n.start=t.start);++i<r.length;){const e=r[i];if("element"===e.type&&"li"===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)},paragraph:function(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},root:function(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)},strong:function(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},table:function(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const n={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){const r={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},o=Wg(t.children[1]),a=Ug(t.children[t.children.length-1]);o&&a&&(r.position={start:o,end:a}),i.push(r)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)},tableCell:function(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},tableRow:function(e,t,n){const r=n?n.children:void 0,i=0===(r?r.indexOf(t):1)?"th":"td",o=n&&"table"===n.type?n.align:void 0,a=o?o.length:t.children.length;let s=-1;const l=[];for(;++s<a;){const n=t.children[s],r={},a=o?o[s]:void 0;a&&(r.align=a);let c={type:"element",tagName:i,properties:r,children:[]};n&&(c.children=e.all(n),e.patch(n,c),c=e.applyData(n,c)),l.push(c)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(l,!0)};return e.patch(t,c),e.applyData(t,c)},text:function(e,t){const n={type:"text",value:Fv(String(t.value))};return e.patch(t,n),e.applyData(t,n)},thematicBreak:function(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)},toml:Bv,yaml:Bv,definition:Bv,footnoteDefinition:Bv};function Bv(){}const _v={}.hasOwnProperty,Hv={};function Uv(e,t){e.position&&(t.position=function(e){const t=Wg(e),n=Ug(e);if(t&&n)return{start:t,end:n}}(e))}function Wv(e,t){let n=t;if(e&&e.data){const t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;if("string"===typeof t)if("element"===n.type)n.tagName=t;else{n={type:"element",tagName:t,properties:{},children:"children"in n?n.children:[n]}}"element"===n.type&&i&&Object.assign(n.properties,yv(i)),"children"in n&&n.children&&null!==r&&void 0!==r&&(n.children=r)}return n}function qv(e,t){const n=t.data||{},r=!("value"in t)||_v.call(n,"hProperties")||_v.call(n,"hChildren")?{type:"element",tagName:"div",properties:{},children:e.all(t)}:{type:"text",value:t.value};return e.patch(t,r),e.applyData(t,r)}function Gv(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:"\n"});++r<e.length;)r&&n.push({type:"text",value:"\n"}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:"\n"}),n}function Vv(e){let t=0,n=e.charCodeAt(t);for(;9===n||32===n;)t++,n=e.charCodeAt(t);return e.slice(t)}function Kv(e,t){const n=function(e,t){const n=t||Hv,r=new Map,i=new Map,o=new Map,a={...Dv,...n.handlers},s={all:function(e){const t=[];if("children"in e){const n=e.children;let r=-1;for(;++r<n.length;){const i=s.one(n[r],e);if(i){if(r&&"break"===n[r-1].type&&(Array.isArray(i)||"text"!==i.type||(i.value=Vv(i.value)),!Array.isArray(i)&&"element"===i.type)){const e=i.children[0];e&&"text"===e.type&&(e.value=Vv(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t},applyData:Wv,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:function(e,t){const n=e.type,r=s.handlers[n];if(_v.call(s.handlers,n)&&r)return r(s,e,t);if(s.options.passThrough&&s.options.passThrough.includes(n)){if("children"in e){const{children:t,...n}=e,r=yv(n);return r.children=s.all(e),r}return yv(e)}return(s.options.unknownHandler||qv)(s,e,t)},options:n,patch:Uv,wrap:Gv};return Tv(e,(function(e){if("definition"===e.type||"footnoteDefinition"===e.type){const t="definition"===e.type?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}})),s}(e,t),r=n.one(e,void 0),i=function(e){const t="string"===typeof e.options.clobberPrefix?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||bv,r=e.options.footnoteBackLabel||wv,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let l=-1;for(;++l<e.footnoteOrder.length;){const i=e.footnoteById.get(e.footnoteOrder[l]);if(!i)continue;const o=e.all(i),a=String(i.identifier).toUpperCase(),c=vv(a.toLowerCase());let u=0;const d=[],p=e.footnoteCounts.get(a);for(;void 0!==p&&++u<=p;){d.length>0&&d.push({type:"text",value:" "});let e="string"===typeof n?n:n(l,u);"string"===typeof e&&(e={type:"text",value:e}),d.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+c+(u>1?"-"+u:""),dataFootnoteBackref:"",ariaLabel:"string"===typeof r?r:r(l,u),className:["data-footnote-backref"]},children:Array.isArray(e)?e:[e]})}const f=o[o.length-1];if(f&&"element"===f.type&&"p"===f.tagName){const e=f.children[f.children.length-1];e&&"text"===e.type?e.value+=" ":f.children.push({type:"text",value:" "}),f.children.push(...d)}else o.push(...d);const h={type:"element",tagName:"li",properties:{id:t+"fn-"+c},children:e.wrap(o,!0)};e.patch(i,h),s.push(h)}if(0!==s.length)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...yv(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:"\n"}]}}(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:"\n"},i),o}function Jv(e,t){return e&&"run"in e?async function(n,r){const i=Kv(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Kv(n,{file:r,...t||e})}}function Qv(e){if(e)throw e}var Yv=n(3240);function Zv(e){if("object"!==typeof e||null===e)return!1;const t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Xv(){const e=[],t={run:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];let i=-1;const o=n.pop();if("function"!==typeof o)throw new TypeError("Expected function as last argument, not "+o);!function t(r){const a=e[++i];let s=-1;if(r)o(r);else{for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];for(;++s<n.length;)null!==c[s]&&void 0!==c[s]||(c[s]=n[s]);n=c,a?function(e,t){let n;return i;function i(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];const l=e.length>i.length;let c;l&&i.push(o);try{c=e.apply(this,i)}catch(r){if(l&&n)throw r;return o(r)}l||(c&&c.then&&"function"===typeof c.then?c.then(a,o):c instanceof Error?o(c):a(c))}function o(e){if(!n){n=!0;for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];t(e,...i)}}function a(e){o(null,e)}}(a,t)(...c):o(null,...c)}}(null,...n)},use:function(n){if("function"!==typeof n)throw new TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}};return t}const $v={basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');eb(e);let n,r=0,i=-1,o=e.length;if(void 0===t||0===t.length||t.length>e.length){for(;o--;)if(47===e.codePointAt(o)){if(n){r=o+1;break}}else i<0&&(n=!0,i=o+1);return i<0?"":e.slice(r,i)}if(t===e)return"";let a=-1,s=t.length-1;for(;o--;)if(47===e.codePointAt(o)){if(n){r=o+1;break}}else a<0&&(n=!0,a=o+1),s>-1&&(e.codePointAt(o)===t.codePointAt(s--)?s<0&&(i=o):(s=-1,i=a));r===i?i=a:i<0&&(i=e.length);return e.slice(r,i)},dirname:function(e){if(eb(e),0===e.length)return".";let t,n=-1,r=e.length;for(;--r;)if(47===e.codePointAt(r)){if(t){n=r;break}}else t||(t=!0);return n<0?47===e.codePointAt(0)?"/":".":1===n&&47===e.codePointAt(0)?"//":e.slice(0,n)},extname:function(e){eb(e);let t,n=e.length,r=-1,i=0,o=-1,a=0;for(;n--;){const s=e.codePointAt(n);if(47!==s)r<0&&(t=!0,r=n+1),46===s?o<0?o=n:1!==a&&(a=1):o>-1&&(a=-1);else if(t){i=n+1;break}}if(o<0||r<0||0===a||1===a&&o===r-1&&o===i+1)return"";return e.slice(o,r)},join:function(){let e,t=-1;for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];for(;++t<r.length;)eb(r[t]),r[t]&&(e=void 0===e?r[t]:e+"/"+r[t]);return void 0===e?".":function(e){eb(e);const t=47===e.codePointAt(0);let n=function(e,t){let n,r,i="",o=0,a=-1,s=0,l=-1;for(;++l<=e.length;){if(l<e.length)n=e.codePointAt(l);else{if(47===n)break;n=47}if(47===n){if(a===l-1||1===s);else if(a!==l-1&&2===s){if(i.length<2||2!==o||46!==i.codePointAt(i.length-1)||46!==i.codePointAt(i.length-2))if(i.length>2){if(r=i.lastIndexOf("/"),r!==i.length-1){r<0?(i="",o=0):(i=i.slice(0,r),o=i.length-1-i.lastIndexOf("/")),a=l,s=0;continue}}else if(i.length>0){i="",o=0,a=l,s=0;continue}t&&(i=i.length>0?i+"/..":"..",o=2)}else i.length>0?i+="/"+e.slice(a+1,l):i=e.slice(a+1,l),o=l-a-1;a=l,s=0}else 46===n&&s>-1?s++:s=-1}return i}(e,!t);0!==n.length||t||(n=".");n.length>0&&47===e.codePointAt(e.length-1)&&(n+="/");return t?"/"+n:n}(e)},sep:"/"};function eb(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const tb={cwd:function(){return"/"}};function nb(e){return Boolean(null!==e&&"object"===typeof e&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&void 0===e.auth)}function rb(e){if("string"===typeof e)e=new URL(e);else if(!nb(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if("file:"!==e.protocol){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return function(e){if(""!==e.hostname){const e=new TypeError('File URL host must be "localhost" or empty on darwin');throw e.code="ERR_INVALID_FILE_URL_HOST",e}const t=e.pathname;let n=-1;for(;++n<t.length;)if(37===t.codePointAt(n)&&50===t.codePointAt(n+1)){const e=t.codePointAt(n+2);if(70===e||102===e){const e=new TypeError("File URL path must not include encoded / characters");throw e.code="ERR_INVALID_FILE_URL_PATH",e}}return decodeURIComponent(t)}(e)}const ib=["history","path","basename","stem","extname","dirname"];class ob{constructor(e){let t;t=e?nb(e)?{path:e}:"string"===typeof e||function(e){return Boolean(e&&"object"===typeof e&&"byteLength"in e&&"byteOffset"in e)}(e)?{value:e}:e:{},this.cwd="cwd"in t?"":tb.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n,r=-1;for(;++r<ib.length;){const e=ib[r];e in t&&void 0!==t[e]&&null!==t[e]&&(this[e]="history"===e?[...t[e]]:t[e])}for(n in t)ib.includes(n)||(this[n]=t[n])}get basename(){return"string"===typeof this.path?$v.basename(this.path):void 0}set basename(e){sb(e,"basename"),ab(e,"basename"),this.path=$v.join(this.dirname||"",e)}get dirname(){return"string"===typeof this.path?$v.dirname(this.path):void 0}set dirname(e){lb(this.basename,"dirname"),this.path=$v.join(e||"",this.basename)}get extname(){return"string"===typeof this.path?$v.extname(this.path):void 0}set extname(e){if(ab(e,"extname"),lb(this.dirname,"extname"),e){if(46!==e.codePointAt(0))throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=$v.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){nb(e)&&(e=rb(e)),sb(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return"string"===typeof this.path?$v.basename(this.path,this.extname):void 0}set stem(e){sb(e,"stem"),ab(e,"stem"),this.path=$v.join(this.dirname||"",e+(this.extname||""))}fail(e,t,n){const r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){const r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){const r=new Qg(e,t,n);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){if(void 0===this.value)return"";if("string"===typeof this.value)return this.value;return new TextDecoder(e||void 0).decode(this.value)}}function ab(e,t){if(e&&e.includes($v.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+$v.sep+"`")}function sb(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function lb(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}const cb=function(e){const t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r},ub={}.hasOwnProperty;class db extends cb{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Xv()}copy(){const e=new db;let t=-1;for(;++t<this.attachers.length;){const n=this.attachers[t];e.use(...n)}return e.data(Yv(!0,{},this.namespace)),e}data(e,t){return"string"===typeof e?2===arguments.length?(mb("data",this.frozen),this.namespace[e]=t,this):ub.call(this.namespace,e)&&this.namespace[e]||void 0:e?(mb("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...n]=this.attachers[this.freezeIndex];if(!1===n[0])continue;!0===n[0]&&(n[0]=void 0);const r=t.call(e,...n);"function"===typeof r&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=yb(e),n=this.parser||this.Parser;return fb("parse",n),n(String(t),t)}process(e,t){const n=this;return this.freeze(),fb("process",this.parser||this.Parser),hb("process",this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){const o=yb(e),a=n.parse(o);function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}n.run(a,o,(function(e,t,r){if(e||!t||!r)return s(e);const i=t,o=n.stringify(i,r);var a;"string"===typeof(a=o)||function(e){return Boolean(e&&"object"===typeof e&&"byteLength"in e&&"byteOffset"in e)}(a)?r.value=o:r.result=o,s(e,r)}))}}processSync(e){let t,n=!1;return this.freeze(),fb("processSync",this.parser||this.Parser),hb("processSync",this.compiler||this.Compiler),this.process(e,(function(e,r){n=!0,Qv(e),t=r})),xb("processSync","process",n),t}run(e,t,n){gb(e),this.freeze();const r=this.transformers;return n||"function"!==typeof t||(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,o){const a=yb(t);r.run(e,a,(function(t,r,a){const s=r||e;t?o(t):i?i(s):n(void 0,s,a)}))}}runSync(e,t){let n,r=!1;return this.run(e,t,(function(e,t){Qv(e),n=t,r=!0})),xb("runSync","run",r),n}stringify(e,t){this.freeze();const n=yb(t),r=this.compiler||this.Compiler;return hb("stringify",r),gb(e),r(e,n)}use(e){const t=this.attachers,n=this.namespace;if(mb("use",this.frozen),null===e||void 0===e);else if("function"===typeof e){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];c(e,i)}else{if("object"!==typeof e)throw new TypeError("Expected usable value, not `"+e+"`");Array.isArray(e)?l(e):s(e)}return this;function a(e){if("function"===typeof e)c(e,[]);else{if("object"!==typeof e)throw new TypeError("Expected usable value, not `"+e+"`");if(Array.isArray(e)){const[t,...n]=e;c(t,n)}else s(e)}}function s(e){if(!("plugins"in e)&&!("settings"in e))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(e.plugins),e.settings&&(n.settings=Yv(!0,n.settings,e.settings))}function l(e){let t=-1;if(null===e||void 0===e);else{if(!Array.isArray(e))throw new TypeError("Expected a list of plugins, not `"+e+"`");for(;++t<e.length;){a(e[t])}}}function c(e,n){let r=-1,i=-1;for(;++r<t.length;)if(t[r][0]===e){i=r;break}if(-1===i)t.push([e,...n]);else if(n.length>0){let[r,...o]=n;const a=t[i][1];Zv(a)&&Zv(r)&&(r=Yv(!0,a,r)),t[i]=[e,r,...o]}}}}const pb=(new db).freeze();function fb(e,t){if("function"!==typeof t)throw new TypeError("Cannot `"+e+"` without `parser`")}function hb(e,t){if("function"!==typeof t)throw new TypeError("Cannot `"+e+"` without `compiler`")}function mb(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function gb(e){if(!Zv(e)||"string"!==typeof e.type)throw new TypeError("Expected node, got `"+e+"`")}function xb(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function yb(e){return function(e){return Boolean(e&&"object"===typeof e&&"message"in e&&"messages"in e)}(e)?e:new ob(e)}const vb=[],bb={allowDangerousHtml:!0},wb=/^(https?|ircs?|mailto|xmpp)$/i,kb=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Sb(e){const t=e.allowedElements,n=e.allowElement,r=e.children||"",i=e.className,o=e.components,a=e.disallowedElements,s=e.rehypePlugins||vb,l=e.remarkPlugins||vb,c=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...bb}:bb,u=e.skipHtml,d=e.unwrapDisallowed,p=e.urlTransform||Ab,f=pb().use(cv).use(l).use(Jv,c).use(s),h=new ob;"string"===typeof r&&(h.value=r);for(const g of kb)Object.hasOwn(e,g.from)&&(g.from,g.to&&g.to,g.id);const m=f.parse(h);let x=f.runSync(m,h);return i&&(x={type:"element",tagName:"div",properties:{className:i},children:"root"===x.type?x.children:[x]}),Tv(x,(function(e,r,i){if("raw"===e.type&&i&&"number"===typeof r)return u?i.children.splice(r,1):i.children[r]={type:"text",value:e.value},r;if("element"===e.type){let t;for(t in hx)if(Object.hasOwn(hx,t)&&Object.hasOwn(e.properties,t)){const n=e.properties[t],r=hx[t];(null===r||r.includes(e.tagName))&&(e.properties[t]=p(String(n||""),t,e))}}if("element"===e.type){let o=t?!t.includes(e.tagName):!!a&&a.includes(e.tagName);if(!o&&n&&"number"===typeof r&&(o=!n(e,r,i)),o&&i&&"number"===typeof r)return d&&e.children?i.children.splice(r,1,...e.children):i.children.splice(r,1),r}})),rx(x,{Fragment:g.Fragment,components:o,ignoreInvalidStyle:!0,jsx:g.jsx,jsxs:g.jsxs,passKeys:!0,passNode:!0})}function Ab(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t<0||i>-1&&t>i||n>-1&&t>n||r>-1&&t>r||wb.test(e.slice(0,t))?e:""}var jb=n(3557);n.p;const Cb=so.div`
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
`,Eb=so.div`
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
`,Rb=so.div`
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
`,Ob=so.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow-y: auto;
  background-color: #f7fafc;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    padding: 12px; /* Reduce padding */
  }
`,Pb=so.div`
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
`,Tb=so.div`
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
`,zb=so.form`
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
`,Mb=so.input`
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
`,Ib=so.button`
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
`,Lb=so.div`
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
`,Fb=so.button`
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
`;const Nb=function(e){const[t,n]=(0,i.useState)([]),[r,o]=(0,i.useState)(""),[a,s]=(0,i.useState)(!1),[l,c]=(0,i.useState)(!1),u=async e=>{if(e&&e.preventDefault(),""===r.trim())return;const i=[...t,{text:r,isBot:!1}];n(i),o(""),s(!0);try{var a,l,c,u;const e=(null===(a=(await Ec.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDE0Ru86HvsWQ-bD7pbdDB7o3NIrFbMCbA",{contents:[{parts:[{text:r}]}]})).data)||void 0===a||null===(l=a.candidates[0])||void 0===l||null===(c=l.content)||void 0===c||null===(u=c.parts[0])||void 0===u?void 0:u.text)||"Sorry, I didn't understand that.";n([...i,{text:e,isBot:!0}])}catch(d){console.error("Error fetching the bot response:",d),n([...i,{text:"Sorry, something went wrong.",isBot:!0}])}s(!1)},d=e=>{c(!0),o(e)};(0,i.useEffect)((()=>{l&&(c(!1),u())}),[r]);const p=window.innerWidth<=768;return(0,g.jsx)(jb.Ay,{className:"custom-pane-class",overlayClassName:"custom-overlay-class",isOpen:!0,hideHeader:!0,from:"right",width:p?"100%":"39%",children:(0,g.jsxs)(Cb,{children:[(0,g.jsxs)(Eb,{children:[(0,g.jsx)(Rb,{children:"AW"}),(0,g.jsx)("span",{children:"ATOMWALK-AI"}),(0,g.jsx)("button",{onClick:()=>{e.setOpenslide(!1)},style:{background:"none",border:"none",color:"#ffffff",cursor:"pointer"},children:"X"})]}),(0,g.jsxs)(Ob,{children:[t.map(((e,t)=>(0,g.jsx)(Tb,{isBot:e.isBot,children:(0,g.jsx)(Sb,{children:e.text})},t))),a&&(0,g.jsx)(Tb,{isBot:!0,children:"Generating..."}),0==t.length&&(0,g.jsx)(Pb,{children:"Hii how can i help you\ud83d\udc81\u200d\u2640\ufe0f"})]}),(0,g.jsxs)(Lb,{children:[(0,g.jsx)(Fb,{onClick:()=>d("What is Manufacturing ERP ?"),children:"What is Manufacturing ERP ?"}),(0,g.jsx)(Fb,{onClick:()=>d("Why Business need Manufacturing ERP ?"),children:"Why Business need Manufacturing ERP ?"}),(0,g.jsx)(Fb,{onClick:()=>d("Whene is the Right Time to Implement Manufacturing ERP ?"),children:"Whene is the Right Time to Implement Manufacturing ERP ?"}),(0,g.jsx)(Fb,{onClick:()=>d("How Atomwalk office support Manufacturing ERP ?"),children:"How Atomwalk office support Manufacturing ERP ?"}),(0,g.jsx)(Fb,{onClick:()=>d("What is CRM"),children:"What is CRM"})]}),(0,g.jsxs)(zb,{children:[(0,g.jsx)(Mb,{value:r,onChange:e=>o(e.target.value),placeholder:"Type your message..."}),(0,g.jsx)(Ib,{type:"submit",disabled:a,onClick:u,children:"\u27a4"})]})]})})},Db=n.p+"static/media/chatbot-icon-removebg-preview.39103f1381dfcfdca93f.png",Bb=so.a`
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
`,_b=so.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;function Hb(e){return(0,g.jsx)(Bb,{onClick:()=>{e.setOpenslide(!0)},children:(0,g.jsx)(_b,{src:Db,alt:"Floating Icon"})})}const Ub=n.p+"static/media/Backgroundyellow.724b6926d561bc062e5d.jpg",Wb=so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, rgb(237, 245, 255), #ffffff);
  background-image: url(${Ub});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`,qb=so.div`
  background-color: #e1fff6;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: 20px;
  margin-top: 100px;
`,Gb=so.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
`,Vb=so.p`
  font-size: 1rem;
  color: #777777;
  text-align: center;
  margin-bottom: 30px;
`,Kb=so.form`
  display: flex;
  flex-direction: column;
  color: #454545;
`,Jb=so.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,Qb=so.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,Yb=so.select`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,Zb=so.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap:10px;
`,Xb=so.label`
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333333;
`,$b=so.button`
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
`,ew=()=>{let e=new Date;const t={name:"",company_name:"",task_name:"Book My Demo",mobile_number:"",email_id:"",add_task:"N",task_type:"Book My Demo",task_date:`${("0"+e.getDate()).slice(-2)}-${("0"+(e.getMonth()+1)).slice(-2)}-${e.getFullYear()}`,remarks:""},[n,r]=(0,i.useState)(t),[o,a]=(0,i.useState)(!1),[s,l]=(0,i.useState)([]),[c,u]=(0,i.useState)(""),[d,p]=(0,i.useState)(""),f=(e,t)=>{r({...n,[e]:t})},h=async(e,n)=>{try{let i=localStorage.getItem("apiResponse"),o=JSON.parse(i);if(!i)throw new Error("Token not found, please login.");const s=Ec.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${o.key}`}});200==(await s.post(e,n)).status&&(r(t),a(!0))}catch(i){console.log("Error making authenticated API call:",i),r(t)}};(0,i.useEffect)((()=>{o&&setTimeout((()=>{a(!1),window.location.href="/demo.html"}),3e3)}),[o]);const m=e=>{const{value:t,checked:i}=e.target,o=i?[...s,t]:s.filter((e=>e!==t));l(o),r({...n,remarks:`${d}\nNumber of Employees: ${c}\nRequirements: ${o.join(", ")}`})};return(0,g.jsxs)(g.Fragment,{children:[o&&(0,g.jsx)(sd,{message:"We have successfully recorded your information."}),(0,g.jsx)(Wb,{children:(0,g.jsxs)(qb,{children:[(0,g.jsx)(Gb,{children:"We are a call away!"}),(0,g.jsx)(Vb,{children:"Discuss Pricing, take a Demo or share your business problems."}),(0,g.jsxs)(Kb,{children:[(0,g.jsx)(Jb,{onChange:e=>f("name",e.target.value),type:"text",placeholder:"Full Name"}),(0,g.jsx)(Jb,{onChange:e=>f("mobile_number",e.target.value),type:"tel",placeholder:"Phone"}),(0,g.jsx)(Jb,{onChange:e=>f("email_id",e.target.value),type:"email",placeholder:"Work Email*",required:!0}),(0,g.jsx)(Jb,{onChange:e=>f("company_name",e.target.value),type:"text",placeholder:"Company Name"}),(0,g.jsxs)(Zb,{children:[(0,g.jsx)(Xb,{children:"Please select your requirement(s):"}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Payroll",onChange:m})," Payroll"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Core HR",onChange:m})," Core HR"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Attendance Management",onChange:m})," Attendance Management"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Leave Management",onChange:m})," Leave Management"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Performance Management System",onChange:m})," Performance Management System"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Geo-Tagging",onChange:m})," Geo-Tagging"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Recruitment",onChange:m})," Recruitment"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Employee Self Service",onChange:m})," Employee Self Service"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Employee Engagement",onChange:m})," Employee Engagement"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"Others",onChange:m})," Others"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"requirement",value:"All",onChange:m})," All"]})]}),(0,g.jsx)(Qb,{onChange:e=>{const t=e.target.value;p(t),r({...n,remarks:`${t}\nNumber of Employees: ${c}\nRequirements: ${s.join(", ")}`})},rows:"4",placeholder:"Are you currently using any HR tools? (Optional)"}),(0,g.jsxs)(Yb,{onChange:e=>{const t=e.target.value;u(t),r({...n,remarks:`${d}\nNumber of Employees: ${t}\nRequirements: ${s.join(", ")}`})},children:[(0,g.jsx)("option",{value:"",children:"Number of Employees"}),(0,g.jsx)("option",{value:"1-10",children:"1-10"}),(0,g.jsx)("option",{value:"11-50",children:"11-50"}),(0,g.jsx)("option",{value:"51-200",children:"51-200"}),(0,g.jsx)("option",{value:"201-500",children:"201-500"}),(0,g.jsx)("option",{value:"500+",children:"500+"})]}),(0,g.jsx)($b,{onClick:e=>(e.preventDefault(),h("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:n})),children:"Book Meeting"})]})]})})]})};var tw=n(1094);const nw=n.p+"static/media/pricingelusrtion.f9102968b3ab2d7f7123.png",rw=(n.p,n.p,so.div`
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
`),iw=so.h1`
  font-size: 3.2em;
  margin-bottom: 100px;
  text-align: center;
  color: #2c3e50;
`,ow=(so.h1`
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
`),aw=so.div`
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
`,sw=so.h2`
  font-size: 2em;
  margin: 20px 0;
  font-weight: 800;
  color: #000933;
`,lw=so.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`,cw=so.li`
  margin: 10px 0;
  cursor: ${e=>e.clickable?"pointer":"default"};
  &::before {
    content: "${e=>e.valid?"\u2713":"\u2717"}";
    margin-right: 10px;
    color: ${e=>e.valid?"green":"red"};
  }
`,uw=so.div`
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
`,dw=so.p`
  font-weight: 500;
`,pw=so.button`
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
`,fw=so.div`
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
`,hw=so.div`
  font-size: 1.1em;
`,mw=so.button`
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
`,gw=so.span`
  font-size: 1.5em;
  color: #454545;
  cursor: pointer;
`,xw=so.ul`
  list-style-type: none;
  margin-top: 10px;
  padding-left: 20px;
  color: #6b37d1;
`,yw={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px",padding:"40px",overflow:"auto",maxHeight:"80vh"},overlay:{zIndex:"32333"}},vw=[{name:"Project Management",features:["Project Activity Allocation Tracking"," Project Activity Dependency (Critical Patch)"," Schedule Tracking","Item Cost and Effort Tracking","Efficiency tracking at Activity","Project Documents, Alert management","Integration with Procurement and PO","Integration with Inventory Allocation, Wastage and Release"]},{name:"Inventory Management",features:["Item Category and Group","Inventory Item and Service Item","Item Supplier management","Multiple locations","Multiple Units","Warehouse management (Bin Locations)","Item Serial Number handling","Item physical inspection and open balance","Item min order qty and Expiry date tracking"]},{name:"Sales and Procurement",features:["Sales order, quotation, proforma invoice","Tax Invoice","Payment, GST Tracking, TDS handling","Return, Credit note handling","Purchase Order, Purchase requests","Goods Receipt (GRN)","Goods Return/Shortage/ Debit Note","Purchase Service Order, TDS handling"]},{name:"Customer Management( CRM)",features:["Customer Details","Customer Sales/Payments Tracking (Bank/TDS)","Agreements","Customer Type/ Group"]},{name:"HR & Payroll",features:["Employee Hire to Exit","Leave & Attendance","Travel & Expenses","Salary & Payroll","Advances","Claim Settlement"]},{name:"Bank Reconciliation",features:["Bank Statement Upload","Account Reconciliation with Sales and PO","Rule based reconciliation of Expenses","Bank statement View","Reconciled statement view","Bank, Exchange rate setup"]},{name:"Financial Accounting",features:["Sales report (Period/Party/Outstanding)","Purchase Reports","Inventory (opening and closing stock)","Inventory Valuation","Financial Reports (P&L Balance sheet, Cash flow, Change in Equity","Aging/ DSO","Depreciation Schedule"]},{name:"Reports and Dashboard",features:["Manager Dashboard","Sales Dashboard","Account Receivable and Payable","Party wise outstanding","Batch reports like Sales overdue, GST not filed","Report Templates"," User Access control"]}],bw=()=>{const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(null),o=()=>t(!0),a=()=>t(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(rw,{children:[(0,g.jsx)(iw,{children:"Pick the Right CRM Plan to Elevate Your Processes!"}),(0,g.jsxs)(ow,{children:[(0,g.jsxs)(aw,{children:[(0,g.jsx)("h3",{style:{color:"#ffff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"red",borderRadius:"5px"},children:"Free Trial"}),(0,g.jsx)(sw,{children:"\u20b90/Month"}),(0,g.jsx)(dw,{children:"Seriously, free forever"}),(0,g.jsxs)(lw,{children:[(0,g.jsx)(cw,{valid:!0,children:"3 User Access"}),(0,g.jsx)(cw,{valid:!0,children:"30 days Vallidity"}),(0,g.jsx)(cw,{valid:!0,children:"20MB Space"}),(0,g.jsx)(cw,{children:"Multi Branch Access"}),(0,g.jsx)(uw,{onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(pw,{children:"Sign up for free"})]}),(0,g.jsxs)(aw,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#2196f3",borderRadius:"5px"},children:"Basic"}),(0,g.jsx)(sw,{children:"\u20b93,000/Month"}),(0,g.jsx)(dw,{children:"Billed at \u20b930,000 per year"}),(0,g.jsxs)(lw,{children:[(0,g.jsx)(cw,{valid:!0,children:"5 User Access"}),(0,g.jsx)(cw,{valid:!0,children:"1 Year Validity"}),(0,g.jsx)(cw,{valid:!0,children:"200MB Space"}),(0,g.jsx)(cw,{children:"Multi Branch Access"}),(0,g.jsx)(uw,{onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(pw,{children:"Start a free trial"})]}),(0,g.jsxs)(aw,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"orange",borderRadius:"5px"},children:"Premium"}),(0,g.jsx)(sw,{children:"\u20b95,000/Month"}),(0,g.jsx)(dw,{children:"Billed at \u20b950,000 per year"}),(0,g.jsxs)(lw,{children:[(0,g.jsx)(cw,{valid:!0,children:"10 User Access"}),(0,g.jsx)(cw,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(cw,{valid:!0,children:"500MB Space"}),(0,g.jsx)(cw,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)(uw,{lickable:!0,onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(pw,{children:"Start a free trial"})]}),(0,g.jsxs)(aw,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#800080",borderRadius:"5px"},children:"Ultimate"}),(0,g.jsx)(sw,{children:"\u20b910,000/Month"}),(0,g.jsx)(dw,{children:"Billed at \u20b9100,000 per year"}),(0,g.jsxs)(lw,{children:[(0,g.jsx)(cw,{valid:!0,children:"25 User Access"}),(0,g.jsx)(cw,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(cw,{valid:!0,children:"1.2GB Space"}),(0,g.jsx)(cw,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)(uw,{lickable:!0,onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(pw,{children:"Start a free trial"})]})]})]}),(0,g.jsxs)(Pc(),{isOpen:e,onRequestClose:a,style:yw,children:[(0,g.jsx)(mw,{onClick:a,children:"\xd7"}),(0,g.jsx)(lw,{children:vw.map(((e,t)=>(0,g.jsxs)("div",{children:[(0,g.jsxs)(fw,{onClick:()=>{return t=e.name,void r(n===t?null:t);var t},children:[(0,g.jsx)(hw,{children:e.name}),(0,g.jsx)(gw,{children:n===e.name?"\u2212":"+"})]}),n===e.name&&(0,g.jsx)(xw,{children:e.features.map(((e,t)=>(0,g.jsx)("ul",{style:{marginBottom:"5px"},children:(0,g.jsx)("li",{children:e},t)})))})]},t)))})]})]})},ww=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #caf0f8;
`,kw=so.h1`
  font-size: 3.2em;
  margin-bottom: 100px;
  text-align: center;
  color: #2c3e50;
`,Sw=(so.h1`
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
`),Aw=so.div`
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
`,jw=so.h2`
  font-size: 2em;
  margin: 20px 0;
  font-weight: 800;
  color: #000933;
`,Cw=so.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`,Ew=so.li`
  margin: 10px 0;
  cursor: ${e=>e.clickable?"pointer":"default"};
  &::before {
    content: "${e=>e.valid?"\u2713":"\u2717"}";
    margin-right: 10px;
    color: ${e=>e.valid?"green":"red"};
  }
`,Rw=so.div`
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
`,Ow=so.p`
  font-weight: 500;
`,Pw=so.button`
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
`,Tw=so.div`
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
`,zw=so.div`
  font-size: 1.1em;
`,Mw=so.button`
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
`,Iw=so.span`
  font-size: 1.5em;
  color: #454545;
  cursor: pointer;
`,Lw=so.ul`
  list-style-type: none;
  margin-top: 10px;
  padding-left: 20px;
  color: #6b37d1;
`,Fw={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px",padding:"40px",overflow:"auto",maxHeight:"80vh"},overlay:{zIndex:"32333"}},Nw=[{name:"Project Management",features:["Project Activity Allocation Tracking"," Project Activity Dependency (Critical Patch)"," Schedule Tracking","Item Cost and Effort Tracking","Efficiency tracking at Activity","Project Documents, Alert management","Integration with Procurement and PO","Integration with Inventory Allocation, Wastage and Release"]},{name:"Inventory Management",features:["Item Category and Group","Inventory Item and Service Item","Item Supplier management","Multiple locations","Multiple Units","Warehouse management (Bin Locations)","Item Serial Number handling","Item physical inspection and open balance","Item min order qty and Expiry date tracking"]},{name:"Sales and Procurement",features:["Sales order, quotation, proforma invoice","Tax Invoice","Payment, GST Tracking, TDS handling","Return, Credit note handling","Purchase Order, Purchase requests","Goods Receipt (GRN)","Goods Return/Shortage/ Debit Note","Purchase Service Order, TDS handling"]},{name:"Customer Management( CRM)",features:["Customer Details","Customer Sales/Payments Tracking (Bank/TDS)","Agreements","Customer Type/ Group"]},{name:"HR & Payroll",features:["Employee Hire to Exit","Leave & Attendance","Travel & Expenses","Salary & Payroll","Advances","Claim Settlement"]},{name:"Bank Reconciliation",features:["Bank Statement Upload","Account Reconciliation with Sales and PO","Rule based reconciliation of Expenses","Bank statement View","Reconciled statement view","Bank, Exchange rate setup"]},{name:"Financial Accounting",features:["Sales report (Period/Party/Outstanding)","Purchase Reports","Inventory (opening and closing stock)","Inventory Valuation","Financial Reports (P&L Balance sheet, Cash flow, Change in Equity","Aging/ DSO","Depreciation Schedule"]},{name:"Reports and Dashboard",features:["Manager Dashboard","Sales Dashboard","Account Receivable and Payable","Party wise outstanding","Batch reports like Sales overdue, GST not filed","Report Templates"," User Access control"]}],Dw=()=>{const[e,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)(null),o=()=>t(!0),a=()=>t(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(ww,{children:[(0,g.jsx)(kw,{children:"Choose the Perfect HRM Plan to Empower Your People!"}),(0,g.jsxs)(Sw,{children:[(0,g.jsxs)(Aw,{children:[(0,g.jsx)("h3",{style:{color:"#ffff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"red",borderRadius:"5px"},children:"Free Trial"}),(0,g.jsx)(jw,{children:"\u20b90/Annum"}),(0,g.jsx)(Ow,{children:"Seriously, free forever"}),(0,g.jsxs)(Cw,{children:[(0,g.jsx)(Ew,{valid:!0,children:"3 User Access"}),(0,g.jsx)(Ew,{valid:!0,children:"30 days Vallidity"}),(0,g.jsx)(Ew,{valid:!0,children:"20MB Space"}),(0,g.jsx)(Ew,{children:"Multi Branch Access"}),(0,g.jsx)(Rw,{onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Pw,{children:"Sign up for free"})]}),(0,g.jsxs)(Aw,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#2196f3",borderRadius:"5px"},children:"Basic"}),(0,g.jsx)(jw,{children:"\u20b945,000/Annum"}),(0,g.jsx)(Ow,{children:"Billed at \u20b9150/month/user"}),(0,g.jsxs)(Cw,{children:[(0,g.jsx)(Ew,{valid:!0,children:"25 User Access"}),(0,g.jsx)(Ew,{valid:!0,children:"1 Year Validity"}),(0,g.jsx)(Ew,{valid:!0,children:"200MB Space"}),(0,g.jsx)(Ew,{children:"Multi Branch Access"}),(0,g.jsx)(Rw,{onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Pw,{children:"Start a free trial"})]}),(0,g.jsxs)(Aw,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"orange",borderRadius:"5px"},children:"Premium"}),(0,g.jsx)(jw,{children:"\u20b975,000/Annum"}),(0,g.jsx)(Ow,{children:"Billed at \u20b9125/month/userr"}),(0,g.jsxs)(Cw,{children:[(0,g.jsx)(Ew,{valid:!0,children:"50 User Access"}),(0,g.jsx)(Ew,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(Ew,{valid:!0,children:"500MB Space"}),(0,g.jsx)(Ew,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)(Rw,{lickable:!0,onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Pw,{children:"Start a free trial"})]}),(0,g.jsxs)(Aw,{children:[(0,g.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#800080",borderRadius:"5px"},children:"Ultimate"}),(0,g.jsx)(jw,{children:"\u20b91,20,000/Annum"}),(0,g.jsx)(Ow,{children:"Billed at \u20b9100/mo/user"}),(0,g.jsxs)(Cw,{children:[(0,g.jsx)(Ew,{valid:!0,children:"100 User Access"}),(0,g.jsx)(Ew,{valid:!0,children:"1 Year Vallidity"}),(0,g.jsx)(Ew,{valid:!0,children:"1.2GB Space"}),(0,g.jsx)(Ew,{valid:!0,children:"Multi Branch Access"}),(0,g.jsx)(Rw,{lickable:!0,onClick:o,children:"Click Hear to see the modules"})]}),(0,g.jsx)(Pw,{children:"Start a free trial"})]})]})]}),(0,g.jsxs)(Pc(),{isOpen:e,onRequestClose:a,style:Fw,children:[(0,g.jsx)(Mw,{onClick:a,children:"\xd7"}),(0,g.jsx)(Cw,{children:Nw.map(((e,t)=>(0,g.jsxs)("div",{children:[(0,g.jsxs)(Tw,{onClick:()=>{return t=e.name,void r(n===t?null:t);var t},children:[(0,g.jsx)(zw,{children:e.name}),(0,g.jsx)(Iw,{children:n===e.name?"\u2212":"+"})]}),n===e.name&&(0,g.jsx)(Lw,{children:e.features.map(((e,t)=>(0,g.jsx)("ul",{style:{marginBottom:"5px"},children:(0,g.jsx)("li",{children:e},t)})))})]},t)))})]})]})},Bw=so.div`
  background-color: white;
  color: blue;
  width: 100%;
  /* padding-top: 10px; */
  padding-bottom: 10px;
  /* height: 1472px; */
`,_w=so.div`
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
`,Hw=so.div`
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
`,Uw=so.div`
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
`,Ww=so.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 600;
  line-height: 61.2px;
  margin: 0px 0px 16px;
`,qw=so.p`
  color: #1c1b1f;
  width: 73%;
  font-size: 21px;
  word-wrap: normal;
  margin: 0px 0px 24px;
  @media (max-width: 768px) {
    width: 100%;
  }
`,Gw=so.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 60%;
  line-height: 26px;
  padding: 44px 0px 0px;
`,Vw=so.button`
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
`,Kw=so.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`,Jw=so.div`
  line-height: 26px;
  img {
    width: 120%;
    height: auto;
    border-radius: 15px;
  }
  @media (max-width:768px) {
    display: none;
  }
`,Qw=(so.div`
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
`,n=(0,i.useMemo)((()=>[{Header:"Modules and Features",accessor:"modulePlane"},{Header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Starter"}),(0,g.jsx)("div",{children:"\u20b9 0 / month"}),(0,g.jsx)(t,{children:"(Includes 25 Employees)"}),(0,g.jsx)(Vw,{children:"Start Free Trial"})]}),accessor:"starter"},{Header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Essential"}),(0,g.jsx)("div",{children:"\u20b9 3495 / month"}),(0,g.jsx)(t,{children:"(Includes 50 Employees)"}),(0,g.jsx)(Vw,{children:"Start Free Trial"})]}),accessor:"essential"},{Header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Growth"}),(0,g.jsx)("div",{children:"\u20b9 5495 / month"}),(0,g.jsx)(t,{children:"(Includes 50 Employees)"}),(0,g.jsx)(Vw,{children:"Start Free Trial"})]}),accessor:"growth"},{Header:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Enterprise"}),(0,g.jsx)("div",{children:"\u20b9 7495 / month"}),(0,g.jsx)(t,{children:"(Includes 50 Employees)"}),(0,g.jsx)(Vw,{children:"Start Free Trial"})]}),accessor:"enterprise"}]),[]),{getTableProps:r,getTableBodyProps:o,headerGroups:a,rows:s,prepareRow:l}=(0,tw.useTable)({columns:n,data:e});so.div`
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
  `;return(0,g.jsxs)(Bw,{children:[(0,g.jsx)(_w,{children:(0,g.jsxs)(Hw,{children:[(0,g.jsxs)(Uw,{children:[(0,g.jsx)(Ww,{children:"Challenge Our Pricing See the Value!"}),(0,g.jsx)(qw,{children:"Get access to premium features without breaking the bank. We believe in providing powerful tools at every level, so you get the value you deserve. Explore our plans to find the right fit for your needs and budget."}),(0,g.jsx)(Vw,{onClick:()=>{window.location.href="/demo.html"},children:(0,g.jsx)(Kw,{children:"Discuss Price"})})]}),(0,g.jsx)(Gw,{children:(0,g.jsx)(Jw,{children:(0,g.jsx)("img",{src:nw,alt:"Pricing Challenge Background"})})})]})}),(0,g.jsx)(Qc,{}),(0,g.jsx)(bw,{}),(0,g.jsx)(Dw,{}),(0,g.jsx)(Ku,{})]})}),Yw=so.div`
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
`,Zw=so.div`
  max-width: 400px;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,Xw=so.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`,$w=so.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,ek=so.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  &::before {
    content: "✔";
    color: green;
    margin-right: 0.5rem;
  }
`,tk=so.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,nk=so.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,rk=so.form`
  display: flex;
  flex-direction: column;
`,ik=so.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`,ok=so.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`,ak=so.button`
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
`,sk=so.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 1rem;
`,lk=()=>(0,g.jsxs)(Yw,{children:[(0,g.jsxs)(Zw,{children:[(0,g.jsx)(Xw,{children:"Get Expert Advice"}),(0,g.jsxs)($w,{children:[(0,g.jsx)(ek,{children:"Talk to Sales"}),(0,g.jsx)(ek,{children:"Free Demo"}),(0,g.jsx)(ek,{children:"Get Expert Advice"}),(0,g.jsx)(ek,{children:"Pricing Options"})]})]}),(0,g.jsxs)(tk,{children:[(0,g.jsx)(nk,{children:"Fill out this quick form and we\u2019ll get back to you shortly"}),(0,g.jsxs)(rk,{children:[(0,g.jsx)(ik,{type:"text",placeholder:"Enter your name"}),(0,g.jsx)(ik,{type:"email",placeholder:"Enter your work Email ID"}),(0,g.jsx)(ok,{placeholder:"Let us know about your research requirement, a topic you have in mind, or a goal you are trying to achieve.",rows:"4"}),(0,g.jsx)(ak,{type:"submit",children:"Contact Sales"})]}),(0,g.jsx)(sk,{children:"By filling out and submitting this form, you are agreeing to our Privacy Policy and agreeing to receive email communications regarding events, webinars, research, and more."})]})]});n.p,n.p,n.p,n.p,n.p,n.p,so.section`
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
`;const ck=n.p+"static/media/Labtest.d306211505644b5096b4.png",uk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAB1CAYAAADkzsULAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA42SURBVHgB7Z1NUxzHGcef7l1WOHJKi+Q4VTlII5K44oArUJVTLoZrUqnAJ9BySBydkD6Blk8g6eSKc2D5BCKVsp0bOKdUchAuCZSKK9qxD0nZsQyqWJYEO93uZ3YXrWD2Zbpnenpmn18VAgapQOz859evTzMgjPDWZfXV53BFclgCCR5ewusM4EAy2JECPhYSNv95lW0DkUsYEFpgOL7TglUu4JoEqI7wT3zB4JYM4E8qMD4QuYFCosFP3pVeicMWdKwRF2WdumjBBoUlH1BIYmIakB58FZYGhcV9KCQxSDAgvVBYHIdCEoOZ9+SW6pwvQDqEYamU4fbOCjsAwhkoJCMy+55clRJuQfr46q2++w7bAMIJKCQjkFIzaxg+UFicgAMxlJK6WcFuQKDz/Rozf5BN9XYFiMwgkwyhY5EmZI8PZJZMIJMMoWMRF/CAzJIJZJIBOGSRKHwgs1iBTDIAhywShQdkFiuQSfrguEWi8IHMkgpkkj44bpEoPCCzpAKZJIIcWiQKH8gsiUAmiSCHFonCAzTLe3JLhX4BCG3IJCcoiEVOw2A7CGCNNn/Fh0xygoJY5DQSFnBpDZklPmSSHgprkSgYNDpm8YEYCJmkh8JaJAoJNXwgKLOs48MBiL6QSTqMlUWiILP0xSmTeHf3PfU2SlGFxBkri0RBZulLZibBMJQmYAmYeFsyttApx/MCBj7D3XrANksCPvpkdmoHUmLsLRIFmeUY6yHBcPBJWIVAXlPfPY41fOCsIZ7Bhj8/5UOCzLwrG8qpNEsdBYXFbki8+/tzjMk7zHgDk2yIQ76WRFhm1XCobO86JPpzoH5Ht/Z+y9ZgDLEWkum9/VWQMuE94uZhSbm4Q7FoT0iujJtVrIRk+sH+DRCyDqmhFxayiBZ+IGBxnIKS+uiWt/flUroBQViNV2RzevfROo6QjfqvZAluABGXsCjGOI2ApRoSvGG54OtgjdHDghahZpY2XqkEFl/XbEk1JKyi2vvxRrCS+s5Dw0IWMUQ9YMZl30pqIcF+iPkolinRYfnpu7JGFkkEG8X6MieVjnvYzFI3J7jF8TzL2b9XbReaKyydTvw2FJhUTMImgjq4h4cDCJzD3aOLTz15RgBhDmewBAWnDAmDFlEThu62Vcuy2rr4DILXD6H0RQXKn58B9pwWQxvgQcFJ/O5w1CKnkJMCMCzP3/o/tF5/DoQeqr1+DgpOoiFpW4QbWUTiokYJ2+oDK8cPYFiO3vgGnv38MYWFiCTRkBhaxBciWGzOnL/cnD2/+HD2/BR+HgbGAhQWPdRD7TEUnMRCYmgRX3C26L/1ve2XLqrPMTAUFoeRkNoWBldILCQmFhGytey/2X/dFYXFXdQY4TYUnETmSczmRVjj4czUSpx/4d373wLjpZvqh58DS7BnHMqfTUL5izNAtMH+49477DIUnERMUjojtdfxCA6x9yiEZpk5Py+kWJHtSoWpQ2Y5DWPFtwhibJIf3dtfEFxqLjePb5EovPtf1lR/yOoyGDJLONt+eRyWzBubRJak9kJBHYtE4c++1sBRMTKLRRg0xmVPiZFJXLBIFFmZZeKTs1B6nPgiBicZF4sgRiZxwSJRoFle+evUWuVfZ8Ob1wZolkM1e3/44ydQ+HVhY2QRRPuxF1pE6taUZY1BQ75JwDjcwLVZ+IbrtI4uPg1v5LQJvn8I4lyr0P0VrJ4CY4R2SAIu13XbamlaBAn3i/Q0tWyHpdtfwfcTn70ChWLMLIJohSRs82u39+1YJOq67bDgAkqkSEEZN4sgWiHBTjFoYtsiUdgMS6GCMoYWQWKHJK8WicJWWDAorMWg/J9JyDPjaBEk9tCPyxaZ/WM42uZBTDAoZ+59N3zapzUahkHJ9ajXmFoEiWUS1y0iBdRAE9ydiCNSpc8r4QgVThAmaRZZlnA0/Q1UHrwKecQVi8g7UA1KsCAZLLASXGISPDWB/HJFHhZOKB/IAD5W77cnfm22fCbWANXl3a+auiERnF1OMyTYF1FNrcRqQeFTP42wTP6tGja9coWyyO7vWCoTv6OAwTiqwBJncEWzys2B+o1vCgEbOoEZuW2Rg77IKiRI1yzYDMPmWFK0fvAM8kaWFgn+AqtBBZrqRl03KANVVbbBh+hW6wPYOnw/3urxkR9pLlvExvkiaJajS0/DTr4J/HE5DF5uyMgiR39Wzal2y8CDFFD3coMfwhpbHr7WbySTuG4R9Z9YgJRBs+Ayl8l/nAtvdF1wNj5PZGERtAdrFzL3ICXQLMpQW6op5w37uyOFxOURrRBmcfOVCkvYBHs0AbqIvIxyZTCi1Xof1lWH21ZlSE8F5a5qgg3cdj40JEYWkfJ22hZB1FPnZ2AZXPGr3QGfzEdIbFsEA6Le1cAuVaWVxqCgDA2JgUV8UeJ2ngjSflFuDAh7UoLCYtkiwQdwE+wH5AUqKNgPivrSwJAYWUTIDRsWyRRdk1havm+CTYsEH8INKeEaZIxqkdyJ6qMMfLWMLFLmDbCErd2Ip76vZrOJu15W1aJFnn6oJgOFM8eDV0UF7py82PfVypNFWAAfgWVwSFieDSAu3PEmGj5wbFpkQrh1HJ/6/8+pZle991rfkOTFIghj9guk4ZyJDuxrx/sxalbalkXUpF4NUhzm1QUnpnubXZEhyVtf5D6ej2GxvE24ZEVzUrH0VXKz90mDFlENyAZYQt18rp42Vm2VX/SRIkNiZJEWtzXG/RLMYhNB2yKqo28yv5I6ZJFjlE2u4Jox/PhUSEwswjir+/NTVqrBnwRtwkT6QTGxCHc4INYtwsD18xarRxPtIemXQtIpeq1tkX+/ObUBGaKCUsenIaSIrkUQp3cnWrRI+ITOwZmVnMNvwvcvXZyEKyYWAQfYvcpqaRnFyCKPy86eqGXbIrgfBPKAhDkM9PGrhhaRItwfrkPmFukFjaLG3nHlaqJNv6JaRD0Y6zZn16XFtXaG4D4W7zgkRbBIL3tXWSMQMJ9U88toROvzitHK4TRBi+y+w6w+4LJYa6cLD2DuOCRFsUgv+HTsNL8WwfBckyJbBGzD7K+100VZr20S0xEtcBwc+dr9PVvUDYupRVzui9i2SOcbe5ATVOf9Uvjqlbj+MW6uWiSK3rDEWe91+MYT0IUskn942GHXHI7Lg0WiwLDgCU3YuR8WluBcS3s3IVmkGHCYCBZAj1xZJArs3A8LS+si9UXGGSHgsZr4HC+LRNEvLGSRlGDZbG3QhSsugQYB2F+enjYnw0IWSQf1dP4UcgJTAz1c3RA6Ezt+kXcdYlgOf3GwQhZJjdyc/S5K4HPNMevcjHPrguevgCZkkSE/g8xNSA4qv4Id3cddFc9Sh4JiMm9EFhlOp9RoJqvF4yA7XQquPtL6YTkvravh40IaxaTOGFlkNGTKq7WToAzt2tLcYKTB4xV5F+dZoECQRayxCW7jw2HXJEKajFJhUJrTu4/WixIWsogdwiaXxS3XsWFQZ8vtVhYXIBJINKsVISwmFpFHfJM/5WtZlTcahKuz69Ldk7P88i9fNAc5tMo7uv2S0+Q7LCYWkWfkddzHouYAcG2YU2FxdXYdbaL6JrfBNQK43vspwz+m7z2qA2cpVK6QDXHI1/x59+dU0CKccc1hX9Z4ODO10nsFj4NQHb+a4Pr7dJIAw4oTpOAo4clVFbgLjhSFUKFdU+Gt914LQ4KjVEx1wtN7Md0PS1rnr4Rnp+CTnGdW+KDm+kJGrOI4IcKgZDtaymBTNbOWT1/ugPMealg3zWp6vrJVQzyDDdfCkrRFosgkLBkf4xaHzqE9mVVzVEHY4Yeqqbx8uuvBej+Zvv/ommqY34R0cS4sNk/xshiWA9y+nKcTc7EWlxpAx/vPqlEGBaTz9ZdJr39yCifCYmQRIdcevnWhDhpYCMt11czKpFCgCXieoQoKFq32wAYStktHsNwvIAiLumjJKF18XHaf1d4UA4v4yiKLpgs90wgLdj73ruZ3K0Onj5LqcXAIjqypTvrQIx9Yvy94D/Y9JuSWxZEZ62HJyiJRJBWWvAekF6zuztq/Dw+SxcftEKMeV80GfRFHvXhZYPMr0eOfh2AtLFlbJAqDsGBzYS2PTaxBoFVKAdQ5C6spmvZVfJxJ750oHAU2yl9qWwVuMpBLYI9Uw+KSRaLozrPIdqnNQXt+DqSEDSHhVp466XHB+ZSjCixxqR4e7eJ2owbmoLOYcnNUc5xkpJB0wWFixko3GLNapjKVsLhokX5gYCY4zAW4QY4dVzpvqk7nx19Pwo6/wpxfdp40YQc/AK9TDbLKOZzD6+GedA5NGcCnykA7o5zTPoxYIemS97C4bhHCLbRC0iVcEMj4DcvLLozDYmKRhzPnnV3iQaSD0eYHf/a1RlPdNEKKofWrEgQLezem1Y3+wwf7sUeCpvf2V4tcrZJIHiOTnMR1s4Tnr1S0h7XJImNKotvoXDcLq4ibZBEiLoma5CSumKW9ylmsM2C6Q9hkkTEm1ZB0ySQsEg7UbO2OmkPAIVOjQ2NU6Gp5L+lK6GMlJF0yMospZJExx2ppj4z6LEZQX4SwapKT5MAsZBECMi0S5bpZyCIEkqlJeumsOL4mObviglkkyM3mzIVlIMYeZ0LSBVcc85aoZRoWNTImSmy+yJXzidFxLiRdMg2LlNcfzl4o1L4MQh9nQ9KlGxZL++5plS9xCudD0iXc+BWIOmMstSojUsqN5uyFGhBED7kJSZfUwiLlbdXEGloUgBg/cheSLomFJayDrJpY1Ach+pDbkHTBsEAQLOhNSrKG4LBGo1jEIHIfkl68+1/McT7xthRyicGL/eDHKGuoScsdJuVHosVv+fNTY7c3nIhPoUIShXf3v177o8kDCgWhw7ci8mJ9X5RoDQAAAABJRU5ErkJggg==",dk=n.p+"static/media/clock.cafb3982fb150a806a77.png",pk=n.p+"static/media/premium.32087c7a3627bd39605f.gif",fk=n.p+"static/media/optimization.63421cd7d827365fb19f.png",hk=n.p+"static/media/access.21a604edb66b884a0028.png",mk=n.p+"static/media/best-customer-experience.973ae41dfe6d7a9c02d2.png",gk=n.p+"static/media/accessible.3ff76038314c071df14d.png",xk=n.p+"static/media/easy-to-use.cae7d597f3ab4e038c1d.png",yk=n.p+"static/media/administer.85579c0cb192be159e06.png",vk=n.p+"static/media/reconciliation.96079e275f4303921aeb.png",bk=n.p+"static/media/reduce-time.3ede8db68ce291b7857d.png",wk=n.p+"static/media/better_experience.904fb1df701730ef3db1.png",kk=n.p+"static/media/transparency.12d7bff3d2e4b289e06b.png",Sk=n.p+"static/media/brand_reputaion.6475ab9d5f12592403af.png",Ak=n.p+"static/media/money_saving.6876708d842414cd1331.png",jk=so.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #fff;
  
`,Ck=so.h1`
  font-size: 2rem;
  color: #000;
  margin-bottom: 10px;
  font-weight: 600;

  span {
    color: #6a1b9a; /* Purple highlight */
  }
`,Ek=so.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Rk=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,Ok=so.div`
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
`,Pk=so.h3`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 10px;
  font-weight: 600;
`,Tk=so.p`
  color: #6e6e6e;
  font-size: 0.9rem;
  line-height: 1.4;
`,zk=[{title:"Optimize",text:"maximize time & effort efficiency",bgColor:"#d9f5e3",icon:dk},{title:"Streamline",text:"simplify claim management",bgColor:"#f2e3ff",icon:yk},{title:"Verify",text:"ensure precise claim reconciliation",bgColor:"#ffe8cc",icon:vk},{title:"Accelerate",text:"minimize claim processing delays",bgColor:"#fff1d0",icon:bk},{title:"Enhance",text:"deliver a seamless claim experience",bgColor:"#d7faff",icon:wk},{title:"Elevate",text:"increase claim transparency",bgColor:"#d9f5e3",icon:kk}],Mk=[{title:"Save",text:"time & effort",bgColor:"#d9f5e3",icon:dk},{title:"Administer",text:"uniform leave policy",bgColor:"#f2e3ff",icon:yk},{title:"Ensure",text:"accurate leave accounting",bgColor:"#ffe8cc",icon:vk},{title:"Reduce",text:"unnecessary expense",bgColor:"#fff1d0",icon:bk},{title:"Deliver",text:"an outstanding employee experience",bgColor:"#d7faff",icon:wk},{title:"Improve",text:"employer brand image",bgColor:"#d9f5e3",icon:kk}],Ik=[{title:"Maximize Efficiency",text:"Save valuable time and effort with seamless processes",bgColor:"#d9f5e3",icon:fk},{title:"Unmatched Quality",text:"We consistently deliver top-notch results for every user",bgColor:"#f2e3ff",icon:pk},{title:"Lightning-Fast Access",text:"Enjoy quick and easy access to our application anywhere, anytime",bgColor:"#ffe8cc",icon:hk},{title:"Seamless Experience",text:"Experience flawless and intuitive user interactions",bgColor:"#fff1d0",icon:mk},{title:"User-Centric Design",text:"Delivering an outstanding and effortless user experience",bgColor:"#d7faff",icon:xk},{title:"Universal Accessibility",text:"Access our platform seamlessly on both mobile and web",bgColor:"#d9f5e3",icon:gk}],Lk=[{title:"Streamline",text:"eliminate time-consuming paperwork",bgColor:"#d9f5e3",icon:dk},{title:"Optimize",text:"cut unnecessary operational expenses",bgColor:"#fff1d0",icon:Ak},{title:"Boost",text:"elevate employer brand reputation",bgColor:"#d9f5e3",icon:Sk},{title:"Standardize",text:"enforce a consistent company policy",bgColor:"#f2e3ff",icon:yk},{title:"Performance",text:"Bulk processing with high TPS.",bgColor:"#ffe8cc",icon:vk},{title:"Reliabilty",text:"24/7 availability with 100% uptime on mobile and web ",bgColor:"#d7faff",icon:wk}],Fk=[{title:"24/7 Access with less man power",text:"Schedule Equipment Anytime, Seamlessly",bgColor:"#d7faff",icon:dk},{title:"Real-Time Availability!",text:"Stay Updated, Avoid Surprises",bgColor:"#d9f5e3",icon:Sk},{title:"Hassle-Free User Management!",text:"Group, Control, Assign Roles",bgColor:"#fff1d0",icon:yk},{title:"Zero Booking Conflicts!",text:"Smart Scheduling, Uninterrupted Operations",bgColor:"#f2e3ff",icon:Ak},{title:"Performance",text:"Bulk processing with high TPS.",bgColor:"#ffe8cc",icon:vk},{title:"Stay Audit-Ready",text:"Automated Logs, Effortless Records ",bgColor:"#d9f5e3",icon:wk}],Nk=e=>{let{data:t}=e;const n="Claim"===t?zk:"lead"==t?Ik:"HR"==t?Lk:"Equipment"==t?Fk:Mk;return(0,g.jsxs)(jk,{children:[(0,g.jsxs)(Ck,{children:["All-in-One ",t," Management, ",(0,g.jsx)("span",{children:"Faster and Easier."})]}),(0,g.jsx)(Ek,{children:n.map(((e,t)=>(0,g.jsxs)(Rk,{children:[(0,g.jsx)(Ok,{bgColor:e.bgColor,children:(0,g.jsx)("img",{src:e.icon,alt:`${e.title} Icon`})}),(0,g.jsx)(Pk,{children:e.title}),(0,g.jsx)(Tk,{children:e.text})]},t)))})]})},Dk=n.p+"static/media/faq.0aaf4c93b37d158961e9.png",Bk=so.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: aliceblue;
  
  @media (min-width: 768px) {
    padding: 40px 20px;
  }
`,_k=so.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #663399;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,Hk=so.div`
  width: 100%;
  max-width: 700px;
`,Uk=so.div`
  background-color: #f8f5ff;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,Wk=so.div`
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
`,qk=so.div`
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
`,Gk=so.div`
  text-align: center;
  margin-top: 50px;
  padding: 30px;
  width: 100%;
  max-width: 700px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`,Vk=so.h2`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 20px;
`,Kk=so.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 30px;
`,Jk=so.a`
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
`,Qk=so.img`
  max-width: 200px;
  margin-bottom: 10px;
`,Yk=e=>{let{data:t,res:n}=e;const[r,o]=(0,i.useState)(null),a="crm"==t?[{question:"What is Atomwalk CRM?",answer:"Atomwalk CRM is a customer relationship management platform designed to help businesses manage their interactions with customers, leads, suppliers, and partners. It offers a comprehensive set of tools for task management, lead tracking, customer support, and sales process automation, allowing businesses to improve communication, streamline operations, and increase productivity."},{question:"How can I use Atomwalk CRM?",answer:"You can use Atomwalk CRM by signing up for an account and accessing its features either through a web app or mobile application. Once logged in, you can create customer profiles, manage leads, assign tasks, and track the progress of deals. Atomwalk CRM provides intuitive dashboards and reporting tools that help users oversee customer interactions, sales pipelines, and team activities efficiently."},{question:"How does CRM work?",answer:"A CRM works by consolidating customer and lead data into a centralized system. It records and tracks all interactions\u2014emails, calls, meetings\u2014making it easier for teams to access important information at any time. With Atomwalk CRM, you can manage leads through each stage of the sales pipeline, assign tasks to team members, automate follow-ups, and generate reports. By organizing all your customer-related data in one place, CRM systems help businesses improve customer service, boost sales, and drive growth."},{question:"How to add a Lead?",answer:"To add a lead in Atomwalk CRM, go to the Lead List section, where you can click on Add Lead. Fill in the required details such as name, contact information, and relevant notes about the lead's interest or status. You can also upload bulk leads if you have a file prepared. Once added, you can assign tasks to follow up on the lead and track its progress in the sales pipeline."},{question:"How do I track  a lead?",answer:"In Atomwalk CRM, leads can be tracked through the sales pipeline. You can view all leads in the Lead List and monitor their status, such as active or inactive, and see which tasks or follow-ups are assigned to them. The system also provides a visual representation of where each lead is in the sales cycle, and you can set reminders for future actions or update the lead's status based on recent interactions. This ensures that no lead is neglected and helps optimize conversion rates."}]:"equipment"==t?[{question:"How to create a user ID?",answer:"Only admin has the access to create user ID using user\u2019s email."},{question:"Can a user change his username and email?",answer:"No. User can\u2019t modify the username and email once it\u2019s created. User has to contact the admin for any modification."},{question:"What if I forget my username?",answer:"Our system lets you create a nickname to log in. So, if Ram forgets his default username, he can still access the system using his personalized nickname."},{question:"Is it possible to restrict certain users from accessing specific equipment?",answer:"Yes, Admins can restrict specific users or user groups from accessing certain equipment. For example, if Ram is not trained to use the high-powered laser machine, the admin can restrict him from booking it."},{question:"Can I view available booking slots for the current and upcoming week?",answer:"Absolutely! Users can view available booking slots for both the current and the upcoming week. For instance, if Ram wants to plan ahead, he can check the available slots for the next week and book equipment accordingly."},{question:"Can I cancel or reschedule a booking?",answer:"Yes! You can cancel or reschedule your booking at any time. For instance, if Jenny booked equipment for Thursday but needs it for Friday instead, she can cancel the original booking and create a new one."},{question:"Can the system block timeslots for scheduled maintenance?",answer:"Yes! The system automatically blocks time slots for scheduled maintenance. For example, if the centrifuge is scheduled for maintenance at 2 PM, it will block 1 PM to 4 PM, preventing any bookings during that period to ensure uninterrupted maintenance."},{question:"Can I set up different user groups for each department?",answer:"Yes, you can set up different user groups for each department in your lab equipment management system. For example, if the Biology Department requires access to specific equipment, you can create a user group specifically for them. This ensures that members of the Biology Department can manage and book equipment relevant to their research while restricting access to other departments."},{question:"How many times can I book equipment in a week?",answer:"Each user can book equipment as per the policy set up in your setup. For example, if Ram books for HPLC on Monday, Tuesday, and Friday then he won't be able to book again until the next week. Because for HPLC the max slot per week is 3."},{question:"Can I share my booked slot with another user?",answer:"No, each booking is tied to the specific user who made it. For example, if Ram booked the HPLC machine, only he has access to it during his time slot. However, Managers or Admins can make changes to the schedule if necessary."},{question:"Can I book equipment outside of working hours?",answer:"Yes! Our system allows 24/7 booking. For instance, if Ram prefers working late, he can book equipment at 11 PM on Tuesday, as long as it\u2019s available."},{question:"Can I see past bookings?",answer:"Yes, users can view their booking history in the system. For example, if Ram wants to check when he last used the PCR machine, he can log in and view his past bookings."},{question:"Can I generate reports for the required field?",answer:"Yes, you can generate custom reports based on specific fields like equipment usage, booking frequency, and maintenance schedules. For example, if Ram wants to analyze the usage of the PCR machine over the past month and he has access as a manager, then he can generate a report for that specific data."},{question:"Can I delete the unnecessary data from the software?",answer:"Yes, Admins can purge unnecessary or outdated data to keep the system running smoothly. For instance, if a large volume of old booking logs is slowing the system down, the admin can remove those logs without affecting current operations."}]:[{question:"What is Atomwalk HRM?",answer:"Atomwalk HRM is an all-in-one Human Resource Management solution designed to streamline HR processes such as employee attendance tracking, leave management, claims submission, payroll, and more. With its mobile app, Atomwalk HRM On-The-Go, employees and managers can manage HR tasks like real-time attendance, leave requests, approvals, and claims from anywhere, enhancing accessibility and efficiency. This system simplifies workflows from onboarding to exit, making it ideal for businesses looking to automate and optimize their HR operations while improving overall employee experience."},{question:"How can I use Atomwalk HRM?",answer:"You can use Atomwalk HRM by accessing it through its web-based platform or the Atomwalk HRM On-The-Go mobile app. Once logged in, employees can manage their attendance, apply for leave, submit claims, and access payroll information. Managers can approve or reject leave and claims, view reports, and monitor employee attendance in real-time. The system is designed to be user-friendly, with a dashboard that provides easy navigation to the HR functionalities relevant to your role."},{question:"How does HRM work?",answer:"Atomwalk HRM works by automating core HR processes like attendance tracking, leave management, claims submission, and payroll handling. The system integrates employee data and allows for real-time updates on various HR activities. It helps managers approve requests, generate reports, and track employee productivity, while employees can manage their own data through the self-service portal. The solution is designed to reduce paperwork and manual effort, improving efficiency and accuracy across HR operations."},{question:"Why should I choose Atomwalk HRM?",answer:["Zero Paperwork, managing the details anytime/anywhere digitally.","Documents are stored in the document management system (S3 bucket), accessible anytime by authorized personnel for future audit needs.","Expenses can be linked to respective projects (if using Project Management modules), aiding in project margin tracking and efficient cost control.","Automatic integration with accounting systems.","Email and WhatsApp integration.","Mobile app available for ESS (Employee Self-Service) for instant use.","Referral System.","Unlimited expense heads can be added as per the need."]},{question:"How to add a claim?",answer:"To add a claim in Atomwalk HRM, go to the 'Claims' section from the dashboard. Click on 'Submit New Claim,' then fill in the details such as claim type, amount, and description. You can also attach relevant receipts or documents. Once done, submit the claim for approval, and you\u2019ll be notified of its status in real-time. The system supports various claim categories, ensuring easy tracking and management of expenses."},{question:"How do I apply for a leave?",answer:"To apply for leave in Atomwalk HRM, log in to your account and navigate to the 'Leave' section. Select 'Apply Leave,' choose the type of leave (e.g., vacation, sick leave, WFH), specify the dates, and provide any necessary details or attachments. Submit the request, and you will be able to track its status as it moves through the approval process."},{question:"How can a manager approve a leave?",answer:"A manager can approve a leave in Atomwalk HRM by logging in and navigating to the 'Leave Approvals' section. There, they can review pending leave requests, check the employee's leave balance and history, and either approve or reject the request with a single click. The system provides options to add comments, and employees are notified instantly about the approval status."},{question:"Why and how does Atomwalk handle the company exit process?",answer:"Atomwalk\u2019s Exit Process module is designed to ensure a structured, seamless, and compliant offboarding experience for employees. It handles every aspect of the process, from resignation or termination to final settlement, asset handover, and exit interviews. With automated tracking and task management, it guarantees a smooth transition, protects company data and assets, and ensures legal compliance, leaving both the organization and the departing employee with a positive experience."}];return(0,g.jsxs)(Bk,{children:[(0,g.jsx)(_k,{children:"All the A's to your Q's"}),(0,g.jsx)(Hk,{children:a.map(((e,t)=>(0,g.jsxs)(Uk,{children:[(0,g.jsxs)(Wk,{onClick:()=>(e=>{o(r===e?null:e)})(t),children:[e.question,(0,g.jsx)("span",{children:r===t?"-":"+"})]}),(0,g.jsx)(qk,{isOpen:r===t,children:Array.isArray(e.answer)?(0,g.jsx)("ul",{children:e.answer.map(((e,t)=>(0,g.jsx)("li",{children:e},t)))}):(0,g.jsx)("p",{children:e.answer})})]},t)))}),(0,g.jsxs)(Gk,{children:[(0,g.jsx)(Qk,{src:Dk,alt:"FAQ"}),(0,g.jsx)(Vk,{children:"Still have questions?"}),(0,g.jsxs)(Kk,{children:["Book a call with our team to learn how to integrate ATOMWALK ",(0,g.jsx)("span",{children:"crm"==t?"CRM":"equipment"==t?"LEMS":"HRM"})," with your business."]}),(0,g.jsx)(Jk,{onClick:()=>{window.location.href="/demo.html"},children:"Book a demo"})]})]})},Zk=n.p+"static/media/Leadmanagement.89aea16cb4591163e02a.png",Xk=n.p+"static/media/CustomerMangement.3b6acb8648dc2e328cbf.png",$k=n.p+"static/media/partnership.4462db344dbb58334dd7.png",eS=n.p+"static/media/asset-management.32d672a7cc30dd5fb4c6.png",tS=n.p+"static/media/content-management.5d89ff2ade33a5b1d2fa.png",nS=so.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,rS=so.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,iS=so.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,oS=so.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,aS=so.div`
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
`,sS=so.div`
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
`,lS=so.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,cS=so.p`
  font-size: 1em;
  color: #666;
`,uS=()=>{const e=e=>{window.location.href=`/${e}`};return(0,g.jsxs)(nS,{children:[(0,g.jsx)(rS,{children:"Key Features"}),(0,g.jsx)(iS,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,g.jsxs)(oS,{children:[(0,g.jsxs)(aS,{onClick:()=>e("leadManagement.html"),children:[(0,g.jsx)(sS,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:Zk,alt:"Speed"})}),(0,g.jsx)(lS,{children:" Enhanced User Management"}),(0,g.jsx)(cS,{children:"Streamline and track leads from acquisition to conversion, ensuring efficient follow-ups and maximizing sales opportunities."})]}),(0,g.jsxs)(aS,{onClick:()=>e("CustomerManagement.html"),children:[(0,g.jsx)(sS,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:Xk,alt:"Trust"})}),(0,g.jsx)(lS,{children:"Simplified Equipment Management"}),(0,g.jsx)(cS,{children:"Manage customer relationships by storing interaction histories, preferences, and communication details in one centralized platform"})]}),(0,g.jsxs)(aS,{onClick:()=>e("Channelpartner.html"),children:[(0,g.jsx)(sS,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:$k,alt:"Accuracy"})}),(0,g.jsx)(lS,{children:"Equipment Maintenance"}),(0,g.jsx)(cS,{children:"Collaborate effectively with business partners by tracking their contributions, agreements, and communication to ensure successful partnerships."})]}),(0,g.jsxs)(aS,{children:[(0,g.jsx)(sS,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:eS,alt:"Reliability"})}),(0,g.jsx)(lS,{children:"Gain Insights with Report & Analytics"}),(0,g.jsx)(cS,{children:"Efficiently manage assets, investments, and portfolios while tracking performance and ensuring regulatory compliance"})]})]})]})},dS=so.section`
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
`,pS=so.div`
  max-width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,fS=so.h1`
  font-size: 48px;
  color: #213e6d;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`,hS=so.p`
  font-size: 18px;
  color: #6d7278;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,mS=so.button`
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
`,gS=so.div`
  max-width: 50%;
  position: relative;
  z-index: 2;
  bottom: 0px;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`,xS=so.img`
  width: 100%;
  height: auto;
`,yS=so.img`
  position: absolute;
  top: 150px;
  left: 40px;
  width: 130px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80px;
  }
`,vS=(so.img`
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
`,()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(dS,{children:[(0,g.jsx)(yS,{src:uk,alt:"Abstract Shape"}),(0,g.jsxs)(pS,{children:[(0,g.jsx)(fS,{children:"Lab Management System"}),(0,g.jsx)(hS,{children:"Laboratories require meticulous organization and data management. A robust Lab Management System (LMS) can automate processes such as sample tracking, data entry, and reporting, which streamlines operations and ensures compliance with industry standards."}),(0,g.jsx)(mS,{children:"Learn more"})]}),(0,g.jsx)(gS,{children:(0,g.jsx)(xS,{src:ck,alt:"Laboratory Technician"})})]}),(0,g.jsx)(Nk,{data:"lead"}),(0,g.jsx)(uS,{}),(0,g.jsx)(Yk,{data:"equipment"})]})),bS=n.p+"static/media/Bloghreos.5aa2e0e24314590ba71c.jpg",wS=n.p+"static/media/Pritam.3b843605de98c7062a24.jpg",kS=n.p+"static/media/Ashutosh.d4b90e7f5ddbbe2e4acc.png",SS=so.section`
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
`,AS=so.div`
  max-width: 700px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,jS=so.h1`
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
`,CS=so.p`
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,ES=so.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 30px;
  }
`,RS=so.a`
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
`,OS=so.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,PS=so.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;

  &:before {
    content: "✔";
    color: black;
    margin-right: 10px;
  }
`,TS=so.div`
  position: relative;
  max-width: 470px;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`,zS=so.img`
  width: 100%;
  border-radius: 15px;
`,MS=so.div`
  position: absolute;
  bottom: -63px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,IS=so.div`
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`,LS=so.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`,FS=so.div`
  font-size: 14px;
  color: #333;
`,NS=()=>(0,g.jsxs)(SS,{children:[(0,g.jsxs)(AS,{children:[(0,g.jsxs)(jS,{children:["Stay Informed with the Latest Updates and ",(0,g.jsx)("span",{children:"Blog Highlight"})]}),(0,g.jsx)(CS,{children:"Stay informed with the latest updates and blog highlights, featuring essential insights and expert analysis."}),(0,g.jsxs)(ES,{children:[(0,g.jsx)(RS,{href:"https://play.google.com/store/search?q=atomwalk&c=apps&hl=en",primary:!0,children:"Download Atomwalk Apps"}),(0,g.jsx)(RS,{href:"/demo.html",children:"Try Demo"})]}),(0,g.jsxs)(OS,{children:[(0,g.jsx)(PS,{children:"eliminate repetitive tasks with Jula"}),(0,g.jsx)(PS,{children:"productive and enthusiastic team member"}),(0,g.jsx)(PS,{children:"Streamline lead tracking"})]})]}),(0,g.jsxs)(TS,{children:[(0,g.jsx)(zS,{src:bS,alt:"Blog Preview"}),(0,g.jsxs)(MS,{children:[(0,g.jsxs)(IS,{children:[(0,g.jsx)(LS,{src:wS,alt:"User 1"}),(0,g.jsxs)(FS,{children:["Ashutosh Mohapatra - Following",(0,g.jsx)("br",{}),"The Impact of Technology on the Workplace: Atomwalk CRM On-the-Go"]})]}),(0,g.jsxs)(IS,{children:[(0,g.jsx)(LS,{src:kS,alt:"User 2"}),(0,g.jsxs)(FS,{children:["Pritam Kumar Nayak - Following",(0,g.jsx)("br",{}),"Tips You Must know: Atomwalk HRM On-the-Go"]})]})]})]})]}),DS=so.div`
  background-color: rgb(255 246 247);
`,BS=so.p`
  grid-column: span 3;
  text-align: center;
  color: #ff0000;
  font-size: 40px;
  font-weight: 500;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,_S=so.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on mobile */
  }
`,HS=so.div`
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
`,US=so.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`,WS=so.div`
  padding: 15px;
`,qS=so.span`
  font-size: 12px;
  color: #007BFF;
  font-weight: bold;
  text-transform: uppercase;
`,GS=so.h2`
  font-size: 18px;
  color: #333;
  margin: 10px 0;
`,VS=so.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #888;
  margin-top: auto;
`,KS=so.span`
  display: flex;
  align-items: center;
`,JS=so.span`
  font-size: 12px;
`,QS=so.div`
  padding: 20px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`,YS=so.div`
  display: flex;
  align-items: center;
`,ZS=so.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 250px;

  @media (max-width: 768px) {
    width: 100%;
  }
`,XS=so.button`
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
`,$S=()=>{const[e,t]=(0,i.useState)(""),n=[{id:1,title:"The Impact of Technology on the Workplace: Atomwalk CRM On-the-Go",category:"Technology",image:"https://www.homecareinsight.co.uk/2020/07/connected-technology.jpg",author:"Ashutosh Mohapatra",date:"August 20, 2024"},{id:2,title:"The Impact of Technology on the Workplace: How Technology is Changing",category:"Technology",image:"https://paas-s3-broker-prod-lon-2edbd31f-65e0-4d35-9755-fde7c3b1b292.s3.amazonaws.com/images/Tech_2.2e16d0ba.fill-960x540.png",author:"A Sriya",date:"April 20, 2024"},{id:3,title:"5 Common HR Software Problems and Troubleshooting Tips You Must know: Atomwalk HRM On-the-Go",category:"Technology",image:"https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg",author:"Pritam Kumar Nayak",date:"March 23, 2024"},{id:4,title:"The Impact of Technology on the Workplace: How Technology is Changing",category:"Technology",image:"https://koala.sh/api/image/v2-213fq-qwlz7.jpg?width=1216&height=832&dream",author:"Ernie Smith",date:"August 20, 2022"},{id:5,title:"The Impact of Technology on the Workplace: How Technology is Changing",category:"Technology",image:"https://images.saymedia-content.com/.image/t_share/MjAxNzE5OTgxMjA3OTg3ODU1/examples-of-digital-technology.jpg",author:"Eric Smith",date:"August 20, 2022"},{id:6,title:"The Impact of Technology on the Workplace: How Technology is Changing",category:"Technology",image:"https://miro.medium.com/v2/resize:fit:664/1*K3Mb7l3_-saN81lhBUBrIA.jpeg",author:"Tracey Wilson",date:"August 20, 2022"}].filter((t=>t.title.toLowerCase().includes(e.toLowerCase()))),r=()=>{window.location.href="/BlogDetails.html"};return(0,g.jsxs)(DS,{children:[(0,g.jsxs)(QS,{children:[(0,g.jsx)("h2",{style:{color:"#454545"},children:"Latest Post"}),(0,g.jsxs)(YS,{children:[(0,g.jsx)(ZS,{type:"text",placeholder:"Search by title...",value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)(XS,{onClick:()=>console.log("Searching..."),children:"Search"})]})]}),(0,g.jsx)(_S,{children:n.length>0?n.map((e=>(0,g.jsxs)(HS,{onClick:r,children:[(0,g.jsx)(US,{src:e.image,alt:e.title}),(0,g.jsxs)(WS,{children:[(0,g.jsx)(qS,{children:e.category}),(0,g.jsx)(GS,{children:e.title}),(0,g.jsxs)(VS,{children:[(0,g.jsx)(KS,{children:e.author}),(0,g.jsx)(JS,{children:e.date})]})]})]},e.id))):(0,g.jsxs)(BS,{children:['No posts found for "',e,'"']})})]})},eA=()=>(0,g.jsxs)("div",{children:[(0,g.jsx)(NS,{}),(0,g.jsx)($S,{})]}),tA=so.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,nA=so.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`,rA=so.h2`
  font-size: 2rem;
  color: #333;
  margin: 20px 0;
`,iA=so.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`,oA=so.div`
  text-align: center;
  margin: 30px 0;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`,aA=()=>(0,g.jsxs)(tA,{children:[(0,g.jsx)(nA,{children:"Revolutionize Workforce Management with Atomwalk HRM On-The-Go"}),(0,g.jsx)(oA,{children:(0,g.jsx)("img",{src:"https://www.dnkinfotelecom.com.br/wp-content/uploads/2021/01/WFM.png",alt:"Workforce Management"})}),(0,g.jsx)(iA,{children:"Managing a dynamic workforce has never been easier. Atomwalk HRM On-The-Go empowers businesses to streamline their HR processes with smart, mobile-first solutions that work in real-time. Designed for today\u2019s fast-paced and distributed workforce, the app ensures that every aspect of employee management is simplified and efficient."}),(0,g.jsx)(iA,{children:"With our app, employees can check-in and check-out seamlessly using the built-in location tracking feature. No more outdated manual attendance records or guesswork. Our real-time GPS location tracking ensures 100% accuracy in attendance management, making it easier than ever for employees to log their presence from any location. This is especially useful for remote teams or employees who are frequently on the move."}),(0,g.jsx)(iA,{children:"Not only does Atomwalk HRM help track attendance, but it also offers employees a smart status calendar view, providing them with a clear visual of their attendance history. Employees can easily monitor their hours, check for missed check-ins, and stay on top of their time management. This improves transparency and promotes accountability across the workforce."}),(0,g.jsx)(iA,{children:"For managers, Atomwalk HRM provides a bird's-eye view of attendance trends, helping you make informed decisions about staffing and time-off management. With comprehensive reports and insights, you can ensure that your team stays productive and compliant, no matter where they are working from."}),(0,g.jsx)(rA,{children:"Seamless Leave and Claim Management Anytime, Anywhere"}),(0,g.jsx)(oA,{children:(0,g.jsx)("img",{src:"https://media.licdn.com/dms/image/D5612AQG26zqve50FHQ/article-cover_image-shrink_720_1280/0/1693328750791?e=2147483647&v=beta&t=U9v7s3R6xZco5ui_VMkZKcRfJB4I9PiJ40m8pDj4uUk",alt:"Leave Management"})}),(0,g.jsx)(iA,{children:"Say goodbye to paperwork and complicated approval workflows. With Atomwalk HRM On-The-Go, employees can apply for leave directly from the app\u2014whether it's Earned Leave, Loss of Pay, or Work From Home. Managers are immediately notified of these requests and can approve, reject, or provide feedback within seconds, drastically reducing approval delays and ensuring that time-off requests are handled smoothly."}),(0,g.jsx)(iA,{children:"Employees can track their leave status, check remaining leave balances, and even plan future leave requests with ease. Whether they are on the go or at the office, managing time-off has never been this intuitive."}),(0,g.jsx)(iA,{children:"But that\u2019s not all. Expense claims are also made simple with Atomwalk HRM. Employees can submit claims by uploading receipts directly from their phone\u2019s storage or by capturing real-time photos of bills and receipts using their mobile device. The app allows them to itemize and categorize expenses, ensuring a smooth submission process."}),(0,g.jsx)(oA,{children:(0,g.jsx)("img",{src:"https://www.cflowapps.com/wp-content/uploads/2023/02/clms_prcsautomtn.jpg",alt:"Claim Processing"})}),(0,g.jsx)(iA,{children:"For managers, reviewing claims is equally streamlined. The app enables them to review all supporting documents and approve, reject, or send the claim back for revisions based on their approval limits. This eliminates the hassle of chasing down paper receipts or emails, speeding up the reimbursement process."}),(0,g.jsx)(iA,{children:"Atomwalk HRM On-The-Go enhances efficiency across the board, empowering employees and managers to handle their HR tasks anytime, anywhere, all from their mobile device. It\u2019s more than just an app\u2014it\u2019s a complete HR solution in your pocket."}),(0,g.jsx)(rA,{children:"Why Choose Atomwalk HRM On-The-Go?"}),(0,g.jsxs)("ul",{style:{color:"black"},children:[(0,g.jsx)("li",{children:"Real-Time Location Tracking: Know exactly where your team is clocking in from with precise GPS-enabled check-ins and check-outs."}),(0,g.jsx)("li",{children:"Comprehensive Attendance Management: Track attendance trends, generate reports, and make data-driven decisions to optimize workforce management."}),(0,g.jsx)("li",{children:"Smart Leave Management: Apply, review, and manage leave requests instantly, ensuring that your team always operates at peak efficiency."}),(0,g.jsx)("li",{children:"Efficient Claim Processing: Submit, review, and approve expense claims with ease, all from your mobile device."}),(0,g.jsx)("li",{children:"Managerial Control: Managers have access to insightful dashboards for approvals, employee data, and team performance, all at their fingertips."})]}),(0,g.jsx)(iA,{children:"Atomwalk HRM On-The-Go transforms tedious HR tasks into quick, seamless interactions. Whether you\u2019re a growing business or managing a large distributed team, Atomwalk HRM has you covered."})]}),sA=n.p+"static/media/HrApp.0eb9df2f1d6d57adc2bd.png",lA=so.div`
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
`,cA=so.div`
  flex: 1;
  padding-right: 20px;
  
  @media (max-width: 768px) {
    padding-right: 0;
  }
`,uA=so.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 10px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,dA=so.p`
  color: #ffb3ff;
  font-size: 1rem;
  margin-bottom: 10px;
`,pA=so.p`
  font-size: 0.9rem;
  color: #ddd;
  margin-bottom: 20px;
`,fA=so.div`
  flex: 1;
  text-align: center;
  margin-top:50px;
  
  img {
    max-width: 110%;
    height: auto;
    border-radius: 12px;
  }
`,hA=()=>(0,g.jsxs)("div",{style:{backgroundColor:"white"},children:[(0,g.jsxs)(lA,{children:[(0,g.jsxs)(cA,{children:[(0,g.jsx)(uA,{children:"Streamline Your HR Processes with ATOMWALK HRM On-The-Go: Attendance, Leave, and Claims Management Simplified "}),(0,g.jsx)(dA,{children:"By Atomwalk"}),(0,g.jsx)(pA,{children:"6 minute read \u2022 October 01, 2024"})]}),(0,g.jsx)(fA,{children:(0,g.jsx)("img",{src:sA,alt:"Task Paralysis Article"})})]}),(0,g.jsx)(aA,{})]}),mA=n.p+"static/media/hr.e13184a1f188a146402d.png",gA=n.p+"static/media/payroll.039b976618946de508d7.png",xA=n.p+"static/media/attendance1.c91a722f5930666fca97.png",yA=n.p+"static/media/onboarding.6125efea4152d41fc3fc.png",vA=n.p+"static/media/empdata.504d86deb99fc409ff66.png",bA=n.p+"static/media/leave-management.8af525284b9c7ca1769c.png",wA=n.p+"static/media/claimmanage.81c59bd374c0f3c4875c.png",kA=n.p+"static/media/exit-process.6c14ce06c14fb114a462.png",SA=n.p+"static/media/performance-management.3d529838ac44380c1f09.png",AA=so.div`
  padding: 110px 20px;
  background-color: #f0ebf7;
  text-align: center;
`,jA=so.h2`
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
`,CA=(so.p`
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
`),EA=so.div`
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
`,RA=so.div`
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
`,OA=so.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,PA=so.p`
  font-size: 1em;
  color: #666;
`,TA=()=>{const e=e=>{window.location.href=`/${e}.html`};return(0,g.jsxs)(AA,{children:[(0,g.jsx)(jA,{children:"Key Features"}),(0,g.jsxs)(CA,{children:[(0,g.jsxs)(EA,{onClick:()=>{e("employeehr")},children:[(0,g.jsx)(RA,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:yA,alt:"Onboarding"})}),(0,g.jsx)(OA,{children:"On-Boarding Process:"}),(0,g.jsx)(PA,{children:"Seamlessly onboard new employees by setting up departments, grades, and HR policies from one place."})]}),(0,g.jsxs)(EA,{onClick:()=>{e("employeehr")},children:[(0,g.jsx)(RA,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:vA,alt:"EmployeeData"})}),(0,g.jsx)(OA,{children:"Employee Data:"}),(0,g.jsx)(PA,{children:"Maintain accurate employee records with the ability to add, update, and delete employee details. Easily manage employee data for better decision-making."})]}),(0,g.jsxs)(EA,{onClick:()=>{e("attendance")},children:[(0,g.jsx)(RA,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:xA,alt:"Attendance"})}),(0,g.jsx)(OA,{children:"Attendance:"}),(0,g.jsx)(PA,{children:"Track employee attendance in real-time, with built-in GPS tracking and the ability to mark attendance remotely."})]}),(0,g.jsxs)(EA,{onClick:()=>{e("leave")},children:[(0,g.jsx)(RA,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:bA,alt:"Reliability"})}),(0,g.jsx)(OA,{children:"Leave Management:"}),(0,g.jsx)(PA,{children:"Handle leave requests with ease. Managers can approve or reject requests, view leave history, and ensure employees stay within allotted time off."})]})]}),(0,g.jsxs)(CA,{children:[(0,g.jsxs)(EA,{onClick:()=>{e("claim")},children:[(0,g.jsx)(RA,{bgColor:"#EFF498",children:(0,g.jsx)("img",{src:wA,alt:"Reliability"})}),(0,g.jsx)(OA,{children:"Claim Management:"}),(0,g.jsx)(PA,{children:"Submit and manage claims such as travel or expense reimbursements. Employees can upload receipts, and managers can review and approve claim"})]}),(0,g.jsxs)(EA,{onClick:()=>{e("payroll")},children:[(0,g.jsx)(RA,{bgColor:"#D99B80",children:(0,g.jsx)("img",{src:gA,alt:"Reliability"})}),(0,g.jsx)(OA,{children:"Payroll:"}),(0,g.jsx)(PA,{children:"Automate payroll processing with integrated features for salary calculations, deductions, and disbursements. Ensure timely and accurate payments."})]}),(0,g.jsxs)(EA,{onClick:()=>{e("appraisal")},children:[(0,g.jsx)(RA,{bgColor:"#F7DAF4",children:(0,g.jsx)("img",{src:SA,alt:"Performance Mangement"})}),(0,g.jsx)(OA,{children:"Performance Mangement System:"}),(0,g.jsx)(PA,{children:"The appraisal system supporting KPI-based evaluations, with self-assessment, manager scoring, and grade normalization for fair, transparent performance reviews and structured reporting."})]}),(0,g.jsxs)(EA,{onClick:()=>{e("employeehr")},children:[(0,g.jsx)(RA,{bgColor:"#F7DADB",children:(0,g.jsx)("img",{src:kA,alt:"Reliability"})}),(0,g.jsx)(OA,{children:"Exit Process:"}),(0,g.jsx)(PA,{children:"Simplify the employee exit process, from resignation submission to final clearance. Ensure smooth offboarding with documented workflows"})]})]})]})},zA=so.div`
  background-color: white;
  color: blue;
  width: 100%;
  /* padding-top: 10px; */
  padding-bottom: 10px;
  /* height: 1472px; */
`,MA=so.div`
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
`,IA=so.div`
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
`,LA=so.div`
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
`,FA=so.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 600;
  line-height: 61.2px;
  margin: 0px 0px 16px;
`,NA=so.p`
  color: #454544;
  /* width: 65%; */
  font-size: 21px;
  /* word-wrap: normal; */
  /* line-height: 31.504px; */
  /* margin: 0px 0px 24px; */
  @media (max-width: 768px) {
    width: 100%;
  }
`,DA=so.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 60%;
  line-height: 26px;
  padding: 44px 0px 0px;
`,BA=so.button`
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
`,_A=so.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`,HA=so.div`
  line-height: 26px;
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`,UA=()=>(0,g.jsxs)(zA,{children:[(0,g.jsx)(MA,{children:(0,g.jsxs)(IA,{children:[(0,g.jsxs)(LA,{children:[(0,g.jsx)(FA,{children:"Atomwalk HRM On-The-Go"}),(0,g.jsx)(NA,{children:"A smart, mobile-first solution for managing employee attendance, leave requests, claims, and real-time location tracking\u2014right from your phone"}),(0,g.jsx)(BA,{onClick:()=>{window.location.href="/demo.html"},children:(0,g.jsx)(_A,{children:"Request a Demo"})})]}),(0,g.jsx)(DA,{children:(0,g.jsx)(HA,{children:(0,g.jsx)("img",{src:mA,alt:"Pricing Challenge Background"})})})]})}),(0,g.jsx)(Nk,{data:"HR"}),(0,g.jsx)(TA,{}),(0,g.jsx)(Yk,{})]}),WA=n.p+"static/media/claim.479c41ec78032b2383c8.png",qA=n.p+"static/media/leave1.09feac747470d0615599.png",GA=n.p+"static/media/hrm_hero_img.b2b560b7a515a331176a.png",VA=so.div`
  padding: 20px;
  background-color: ${e=>e.bgcolor?e.bgcolor:"#f0ebf7"};
  @media (min-width: 768px) {
    padding: 50px;
  }
`,KA=so.div`
  margin-bottom: 40px;
`,JA=so.h1`
  margin-top: 80px;
  font-size: 35px;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,QA=so.div`
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
`,YA=so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`,ZA=so.div`
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
`,XA=so.p`
text-align: center;
color: #4A90E2;
font-weight: bold;

`,$A=so.div`
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
`,ej=e=>{let{data:t,bgcolors:n}=e;const r={Claim:[{step:"Expense Item Setup"},{step:"Expense Advance for Employee"},{step:"Claim Expense"},{step:"Approval Of Claim"},{step:"Settlement of Claims"},{step:"Reports & Dashboards"}],Leave:[{step:"Setup Holiday Calendar"},{step:"Leave Dashboard"},{step:"Manage Leave by Employee"},{step:"Manage Leave by Manager"},{step:"Reports & Analysis"}],Payroll:[{step:"Payroll Setup & Controls"},{step:"Generate Monthly Salary"},{step:"Post Salary"}],Attendance:[{step:"Check-in"},{step:"Attendance Dashboard"},{step:"Manage Attendance"}],Appraisal:[{step:"Performance Mangement System"},{step:"Self Appraisal Process "},{step:"Manager Appriasl Process "},{step:"Appriasl Rivew Process and Reports "}],HR:[{step:"On-Boarding"},{step:"Employee Data"},{step:"Exit Process"}],Lead:[{step:"Lead Capture",color:"#4A90E2"},{step:"Lead Tracking",color:"#4A90E2"},{step:"Obtain Customer Management",color:"#4A90E2"},{step:"Lead Lifecycle Management ",color:"#4A90E2"},{step:"Lost Lead Recovery and Management",color:"#4A90E2"}],Campaign:[{step:"Flexible Template Creation by User (No Restrictions)",color:"#4A90E2"},{step:"Universal Template Access for All Users",color:"#4A90E2"},{step:"Target Audience Segmentation",color:"#4A90E2"},{step:"Campaign Template Review Process",color:"#4A90E2"},{step:"Automated Campaign Trigger with Predefined Scheduler",color:"#4A90E2"}],Partner:[{step:" Add Partner",color:"#4A90E2"},{step:"Order Information Tracking",color:"#4A90E2"},{step:"Commission Management",color:"#4A90E2"},{step:"Multi-Report Generation",color:"#4A90E2"}],Customer:[{step:" Customer Uploading (Upload Customer Data)",color:"#4A90E2"},{step:"Order Management (Manage Reservations)",color:"#4A90E2"},{step:" Process-wise Order Management (Resale and Cross-Selling)",color:"#4A90E2"},{step:"Ticket Tracking (AMC Tracking)",color:"#4A90E2"},{step:"Reports and Dashboards",color:"#4A90E2"}]}[t]||[];return(0,g.jsxs)(VA,{bgcolor:n,children:[(0,g.jsxs)(JA,{children:["Process Flow for ",t]}),(0,g.jsx)(KA,{children:(0,g.jsx)(QA,{style:{backgroundColor:"#ffffff"},children:(0,g.jsx)(YA,{children:r.map(((e,t)=>(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(ZA,{children:(0,g.jsx)(XA,{children:e.step})}),t<r.length-1&&(0,g.jsx)($A,{})]},t)))})})})]})},tj=(n.p,n.p+"static/media/check_mark.0e730ab2b5bde0948106.png");const nj=n.p+"static/media/img1.db8c904dcae430a66a73d8526e71a235.svg";const rj=n.p+"static/media/add_claim_img.9a055c2bba7295dac45d64bb04a04aa7.svg";const ij=n.p+"static/media/emp_advance.47f2f953acff90307e031575f25a4aa3.svg";const oj=n.p+"static/media/approve_claim.1ec6d1911ec4293f92b19cff055accd6.svg";const aj=n.p+"static/media/sattle_claim.db01cb0fc07cd07f6f46644e1d54b56c.svg";const sj=n.p+"static/media/expense_claim.fe819c5f6fed879968c2f6505a935b16.svg";const lj=n.p+"static/media/holiday_calender.0356f141e6752176e65622edda7c9c42.svg";const cj=n.p+"static/media/leave_dashboard.364f838500dbe22de94eb7462c9bc5c5.svg";const uj=n.p+"static/media/add_leave.41af44048f7af19e55b89ade3f692bcf.svg";const dj=n.p+"static/media/approval_leave.2d0fcfea51af1264405792a096780307.svg";const pj=n.p+"static/media/leave_report.99de12c7d472ed6f47e7afdba34e86cc.svg";const fj=n.p+"static/media/payroll_setup.27c03a07aabe3de8e5f5c49e11a0f209.svg";const hj=n.p+"static/media/appraisal_setup.8d56db0e9680f2c79eaf4f5818b62515.svg";const mj=n.p+"static/media/onboarding.c70afc83fb95b86ef57b12a3079b01bd.svg";const gj=n.p+"static/media/employeeData.80b3a11ec9cabbd9b54af6eadca1b988.svg";const xj=n.p+"static/media/exit_process.51b811c4d0e34efbe01988ecefd2afa0.svg";const yj=n.p+"static/media/payroll-seup.5ac3bdff9f261cbfa49d54b17fa60796.svg";const vj=n.p+"static/media/generate-salary.941e7229b7419bc7b30da4d1bbf66986.svg";const bj=n.p+"static/media/post-salary.38b58bb0e0d588485e9492fddd098bea.svg";const wj=n.p+"static/media/appraisal-setup-feature.251253d252bccb667d40f76d15e4f873.svg";const kj=n.p+"static/media/self-appraisal.bb994ab17bfb97202c339ef0502301f2.svg";const Sj=n.p+"static/media/emp-appraisal.ec5ebcfbd25b2cf468604114605b8d75.svg";const Aj=n.p+"static/media/manager-evaluation.b1215000c57ff19889439ffeb81168d6.svg";const jj=n.p+"static/media/check-in.35e76b5d8141b8b7ec1e2ba2e5fae5e9.svg";const Cj=n.p+"static/media/attendance-dashboard.9fc9346fd1292914e1ab95e5539b7da6.svg";const Ej=n.p+"static/media/emp-attendance.1872bc616b85905f36d69ccca2540c9e.svg",Rj=so.div`
  width: 100%;
  height: 100%;
`,Oj=so.div`
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
`,Pj=so.div`
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
`,Tj=so.div`
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
`,zj=so.div`
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
`,Mj=e=>{let{data:t}=e;const n="Claim"===t?[{title:"Simplify Claim Expense Item Setup",subtitle:"Efficiently manage and control Expense Items with Service Item category setup.",description:"Define Service Item Categories to streamline Expense Items, giving employees a quick selection process for claim submissions. This setup enables you to capture GST Applicability, Submit of Expense Document Applicability, Limits for Approval, etc., to simplify and streamline your Claim Management Process.",benefits:["Define Service Item Categories","Flexible Expense Item Setup","Analysis of expense based on expense category/Item"],imageSrc:nj,imageAlt:"Expense Setup",imgPosition:"left"},{title:"Employee Advance Tracking and Expense Claim Offset Against Advance",subtitle:"Employee Advance upload, tracking, and history of offset against Expense Claims.",description:"Manage Employee expense advance and efficiently track advance offset against each claim, offering a clear view of balances and outstanding advance amount. Enables decision-making process for effective advance amount.",benefits:["Advance Tracking","Clear offset records with claim details"],imageSrc:ij,imageAlt:"Advance",imgPosition:"right"},{title:"Simplified Claim Expenses by Employee",subtitle:"Submit and track expense claims easily, anytime, anywhere.",description:"Employee can submit expense claims by selecting an Expense item, adding project details if needed, and uploading supporting documents like bills and receipts. The mobile app feature allows employee to capture and submit receipts instantly, making the process faster and more efficient for both employee and approval & settlement process for company on real-time basis.",benefits:["Simple Claim Submission","Upload Supporting Documents","Mobile-Friendly Convenience, Instant Receipt Capture","Expense auto linkage to projects and efficient project margin tracking"],imageSrc:rj,imageAlt:"Add Claim",imgPosition:"left"},{title:"Smart Claim Flow for Quick, Transparent Approvals",subtitle:"Automated workflows simplify review and referral based on approval limit setup.",description:"Submitted claims are automatically routed to managers for review, with options to approve, reject, or send back for clarification. The system verifies manager approval authority based on grade and approval limits, forwarding claims to a higher-level manager if needed. This process maintains digital records for easy tracking and transparent decision-making. Approval process is enabled through Mobile app for real-time approval and quick settlement process.",benefits:["Flexible Review/Approval Flows","Approval limits based on Amount","Anytime, anywhere approval for speedy settlement"],imageSrc:oj,imageAlt:"Advance Tracking Icon",imgPosition:"right"},{title:"Accurate and Streamlined Claim Settlements",subtitle:"Efficient settlement process with auto flow of data to accounts and linked projects.",description:"Once approved, claims move to the settlement phase where user can view all claims and advance records side by side for easy and effective settlement processing. The screen provides direct access to claim details and attached documents, with a bulk settlement feature to handle multiple claims efficiently. This seamless process with Accounts and Project management modules.",benefits:["Clear Claim View","Direct Document Access","Bulk Settlement Option","Reliable Processing with auto Account ledger processing"],imageSrc:aj,imageAlt:"Settle Claim",imgPosition:"left"},{title:"Efficient Dashboard to Track All Expense Items",subtitle:"Instant insights on claim status and trends.",description:"The Expense Claim Dashboard provides graphical charts view for claim status and monthly trends, helping employee/Manager track claims at a glance. Extensive filter criteria based on expense category, expense item, departments, etc., for analysis and managing your expenses in a better way.",benefits:["Graphical Overviews with real-time update","Extensive Filter criteria for reports","Download reports in PDF/XLS"],imageSrc:sj,imageAlt:"Post Accounting",imgPosition:"right"}]:"Leave"===t?[{title:"Location-Wise - Simplified Management of Your Holiday Calendar",subtitle:"Easy and exhaustive way to take care of your complex organisational need of Holiday management (Single/Multi location).",description:"Manage Holiday setup digitally for your business for each Year across single/multiple locations. Holiday setup supports Mandatory and Optional holidays for each location. Supports Multiple leave types and yearly limit for each leave type. Setup enables better Project execution planning for the organisation and provides transparency for the employee to plan/utilise their Leave.",benefits:["Easy Exhaustive Setup across Single/Multi Location","Supports Audit trails and track changes in setup","Optional Holiday setup enables for each location","Transparent and accessible by all users/employees"],imageSrc:lj,imageAlt:"Holiday Calendar",imgPosition:"left"},{title:"Dashboard for Complete Leave Overview",subtitle:"Easily track, manage, and plan your time off/utilisation of Leave.",description:"Employee can view detailed summary dashboard of their leave status, including total applied, approved, and pending leave categorized by leave type. Month-wise trend analysis enables the Manager to manage risk at project planning level. The system also provides a year-wise holiday list which is accessible through Mobile app, making it simple to manage leave information and plan time off effectively. Leave details are shared with Billing/Payroll modules seamlessly to eliminate any processing errors.",benefits:["Comprehensive Overview, Detailed for each leave type","Trend Analysis for better planning and risk management","Accessible from Mobile app","Shared with Payroll and Project Management modules seamlessly"],imageSrc:cj,imageAlt:"Leave Dashboard",imgPosition:"right"},{title:"Apply Leave from Anywhere Anytime",subtitle:"Simple Leave Application: easy to apply and cancel from anywhere & anytime.",description:"Employee can apply for multiple types of leaves like Earned Leave, Work From Home, and Loss of Pay through both web and mobile apps. On submitted, the leave request automatically moves to manager's dashboard for approval, streamlining the process.",benefits:["Both Web and Mobile Convenience","Multiple leave types","Easy Application process with Holiday List Integration, to alter users"],imageSrc:uj,imageAlt:"Leave Application",imgPosition:"left"},{title:"Swift Leave Approvals from Anywhere Anytime",subtitle:"Approve/Reject Leave Requests with Ease and Precision from Approver Dashboard.",description:"Managers can easily filter leave requests by individual employee or leave type, providing a clear view of total leave applied, approved, and pending for each employee. This organized approach allows for efficient navigation and prompt action. Managers can review details before making decisions, with a mandatory remark field to ensure clear communication with employees during the approval or rejection process.",benefits:["Organized and Filter View","Comprehensive Overview","Streamlined Approval Process","Efficient Leave Approval","Mobile Convenience","Approval History"],imageSrc:dj,imageAlt:"Leave Approval",imgPosition:"right"},{title:"Organized Leave Insights for Efficient Management",subtitle:"Gain Complete Insights into Leave Patterns and Usage",description:"Managers can sort leave requests by individual employee or leave type, providing a clear and organized view. They also have access to a comprehensive annual leave report that includes all leave details across departments. This feature ensures efficient record-keeping and supports transparent leave management, helping managers make informed decisions.",benefits:["Informed Decision-Making","Exportable Reports","Leave Balances at a Glance","Customizable Reports"],imageSrc:pj,imageAlt:"Leave Reports",imgPosition:"left"}]:"Payroll"===t?[{title:"Flexible and Compliant Payroll Management",subtitle:"Configurable Salary structure with predefined integrated TDS/PT/PF/Gratuity calculation for seamless employee compensation.",description:"Our HR management offers a comprehensive system for managing employee salary structures, and compliance setup in accordance with government regulations. Companies can create tailored salary structures for different employee grades. The platform also facilitates setting up Provident Fund, Gratuity, Employee State Insurance (ESI), and TDS, PT tax parameters, ensuring full compliance and transparency in payroll management. In addition to this, any other salary components like Variable Pay and custom deductions can be configured in the system, making it highly flexible for any complex scenario.",benefits:["Configurable pay scale grades","Configurable salary structures with formula builder","Customizable payslip design","Dynamic Salary Structures to include compliance like PF, Gratuity, ESI, PT, and TDS","Audit trails for Setup control","Contract Rate setup for contract employee"],imageSrc:yj,imageAlt:"Payroll & Compliance",imgPosition:"left"},{title:"Streamlined Monthly Salary Generation with Real-Time Error Validation",subtitle:"Seamless access to Attendance data for accurate and quick Payroll processing.",description:"Our payroll processing tool enables quick salary generation while minimizing errors through integration with attendance and leave data. This facilitates managers with accurate data for decision-making. The system supports importing employee data from Attendance, HRM, and Leave Management modules for Payroll processing. Along with the full salary computation, the payroll system integrates with Payment Disbursement to enable online transfer, checks with employee pay account details for direct salary disbursement through net banking etc.",benefits:["Accurate Payroll Generation","Reduced Manual Errors","Integrated with Attendance and Leave","Direct Salary Disbursement"],imageSrc:vj,imageAlt:"Salary Process",imgPosition:"right"},{title:"Accurate Accounting Entries for Financial Clarity",subtitle:"Ensuring error-free records with detailed reporting.",description:"After generating salaries, the HR manager creates accounting entries to maintain precise financial records. The system displays all payable heads, showing amounts already posted and pending. Managers can download detailed reports in PDF or Excel formats and include specific posting remarks for transparency, ensuring a well-documented and accurate accounting process.",benefits:["Precise Accounting Entries","Payable Overview","Detailed Reporting"," Transparent Documentation","Error-Free Financial Management"],imageSrc:bj,imageAlt:"Post Salary ",imgPosition:"left"}]:"HR"===t?[{title:"Job Offer Records - Onboarding Process",subtitle:"Smooth Onboarding and Integration of New Employees into the Organization",description:"Enables you to keep the Job offer records with unique reference ID for easy traceability and managing the offer letter and onboarding process. Custom templates for offer and joining letters allow HR to handle onboarding smoothly and efficiently. Provides data for analysis for the recruitment process.",benefits:["Thorough Appointee Management","Link Salary structure to include CTC details in offer letter","Dynamic Offer, Appointment Letters","One-click employee data creation from offer details"],imageSrc:mj,imageAlt:"Onboarding",imgPosition:"left"},{title:"Complete Employee Lifecycle Management",subtitle:"Centralized Employee Data Management - with Multi Location.",description:"This module enables streamlined employee data management, allowing HR and Employee managers to sort, search, and filter employee records by various criteria like Department and Grade for easy analysis and reports. Both permanent and contract employees can be managed with different salary structures. All lifecycle stages like onboarding process, initiating separation processes, completion of probation period, etc., can be managed smoothly for each employee data by the authorized manager. Optional fields for documents and bank details ensure comprehensive record-keeping while simplifying management.",benefits:["Department and Grade structure - for data segregation and easy management.","Automatic ID Generation for Employee, and Contract Employee.","Centralized Information - Data Accuracy and Integrity","Compliance and Record-Keeping - integrated with document management system.","Manage Employee Billing Rates","Contract Employee Management","Audit Tracing for employee data. Supports bulk record uploads from existing system."],imageSrc:gj,imageAlt:"Employee data",imgPosition:"right"},{title:"Streamlined Exit Process with Customized Setup",subtitle:"Ensuring Smooth Exit with Assets and KT Transfer",description:"With customized exit process setup, you can track and complete all the steps needed to be done by the employee before he/she exits the system. This can be knowledge transfer, handover of assets, exit interview, to name a few. Employee can initiate the separation process, which can be managed by approval/review flow.",benefits:["Customized exit process setup","Smooth Transitions and completion of activity by departments.","Facility to capture document evidence at each step."],imageSrc:xj,imageAlt:"Exit Process",imgPosition:"left"}]:"Appraisal"===t?[{title:"Efficient Appraisal System for Accurate Assessments",subtitle:"Completely Configurable Appraisal KPI Structure Definition.",description:"Highly flexible and configurable appraisal structure to set up your KPI targets for each employee grade level. Supports and is configurable for quarterly, half-yearly, and yearly appraisal cycles. Self-assessment, and provides scores for key performance indicators (KPIs), and submits the appraisal to the Employee manager, who evaluates and gives scores for each KPI. Review process by Reviewer to normalize the grades for an appraisal cycle for a particular employee grade. This structured process ensures accurate and fair evaluations, fostering transparency in performance-based benefits.",benefits:["Flexible Appraisal structure with KPI weightage.","Historical appraisal records reference for employee improvement and training plan.","Provision to upload supporting documents.","Structured Process, Fair Performance Assessment"],imageSrc:wj,imageAlt:"Holiday Calendar",imgPosition:"left"},{title:"Self-Evaluation for Each KPI Goal",subtitle:"Transparent and KPI Goals for Each Cycle.",description:"Employee can self-initiate and give his own score. Document evidence, if required, can be uploaded. Historical appraisal data for earlier cycles is accessible.",benefits:["Overall score is rule-based calculation","Seamlessly flows to employee manager","Historical Appraisal Data access"],imageSrc:kj,imageAlt:"Leave Dashboard",imgPosition:"right"},{title:"Manager Evaluation for Each KPI Goal.",subtitle:"Flexible Structure and Score for Each KPI.",description:"Manager evaluates and provides the score for each KPI Goal. The final score is auto-calculated based on rule setup. After providing the score, Manager sends the appraisal to the employee for final sign-off and remarks.",benefits:["Overall score for Manager is rule-based calculation","Seamlessly flows between employee and manager","Historical Appraisal Data access"],imageSrc:Aj,imageAlt:"Leave Application",imgPosition:"left"},{title:"Review Process for Grade Evaluation",subtitle:"Normalization of Appraisal Grades by Reviewer.",description:"Normalization of appraisal grades by Reviewer at each employee grade level. Performance-linked salary components (like variable pay) evaluation process. Reports for each appraisal cycle and employee grade levels.",benefits:["Review process","Reports for performance-based salary components.","Customizable Reports"],imageSrc:Sj,imageAlt:"Leave Approval",imgPosition:"right"}]:"Attendance"===t?[{title:"Attendance- Anytime- Anywhere",subtitle:"Streamlined Check-In with Location Tracking and Daily Task Insights.",description:"Our attendance system combines flexibility and precision, allowing employees to mark their workdays from the web or mobile app. The mobile app's check-in and check-out features are equipped with real-time location tracking, automatically capturing the exact location, date, and time to ensure accurate and efficient attendance records. Additionally, during check-out, employees are prompted to fill out a remarks field, providing a brief summary of their day\u2019s tasks. This feature enables managers to gain valuable insights into daily productivity, fostering accountability and enhancing team management.",benefits:["Accurate Time & Location Tracking","Enhanced Flexibility"," Improved Productivity Monitoring","Efficient Reporting"],imageSrc:jj,imageAlt:"Check-in",imgPosition:"left"},{title:"Stay Informed, Stay Organized",subtitle:"Dynamic Calendar View for Attendance, Holidays, and Leave Management.",description:"Our attendance system offers a dynamic calendar view that allows employees to easily track their attendance status, view holiday lists, and monitor their leave days. After checking in and out, employees can submit their attendance records weekly for manager review, ensuring accountability and streamlined communication. This feature not only keeps employees informed but also helps managers efficiently oversee attendance and leave management, fostering a productive work environment.",benefits:["Weekly Submission for Review","Dynamic Calendar View"],imageSrc:Cj,imageAlt:"Leave Dashboard",imgPosition:"right"},{title:"Comprehensive Attendance Insights",subtitle:"Efficient Review and Approval for Enhanced Team Productivity.",description:"Our attendance management system provides managers with a complete overview of their team\u2019s attendance records. Once an employee submits their attendance, it is forwarded for review, ensuring accountability. If an employee encounters issues completing the process, managers can seamlessly update attendance for previous days through the manager portal, including remarks for full transparency. With access to detailed attendance records, managers can also update check-in and check-out times with geo-location data as needed. This system supports weekly approvals, streamlining the management of attendance and promoting effective team oversight.",benefits:["Streamlined Review Process","Flexibility in Attendance Management","Transparency with Remarks","Geo-Location Updates"," Weekly Approval Workflow"],imageSrc:Ej,imageAlt:"Leave Application",imgPosition:"left"}]:[{title:"Complete Employee Lifecycle Management",subtitle:"Centralized Employee Data Management - with Multi Location.",description:"This module enables streamlined employee data management, allowing HR and Employee managers to sort, search, and filter employee records by various criteria like Department and Grade for easy analysis and reports. Both permanent and contract employees can be managed with different salary structures. All lifecycle stages like onboarding process, initiating separation processes, completion of probation period, etc., can be managed smoothly for each employee data by the authorized manager. Optional fields for documents and bank details ensure comprehensive record-keeping while simplifying management.",benefits:["Department and Grade structure - for data segregation and easy management.","Automatic ID Generation for Employee, and Contract Employee.","Centralized Information - Data Accuracy and Integrity","Compliance and Record-Keeping - integrated with document management system.","Manage Employee Billing Rates","Contract Employee Management","Audit Tracing for employee data. Supports bulk record uploads from existing system."],imageSrc:fj,imageAlt:"Payroll & Compliance",imgPosition:"left"},{title:"Job Offer Records - Onboarding Process",subtitle:"Smooth Onboarding and Integration of New Employees into the Organization",description:"Enables you to keep the Job offer records with unique reference ID for easy traceability and managing the offer letter and onboarding process. Custom templates for offer and joining letters allow HR to handle onboarding smoothly and efficiently. Provides data for analysis for the recruitment process.",benefits:["Thorough Appointee Management","Link Salary structure to include CTC details in offer letter","Dynamic Offer, Appointment Letters","One-click employee data creation from offer details"],imageSrc:hj,imageAlt:"Salary Process",imgPosition:"right"},{title:"Streamlined Exit Process with Customized Setup",subtitle:"Ensuring Smooth Exit with Assets and KT Transfer",description:"With customized exit process setup, you can track and complete all the steps needed to be done by the employee before he/she exits the system. This can be knowledge transfer, handover of assets, exit interview, to name a few. Employee can initiate the separation process, which can be managed by approval/review flow.",benefits:["Customized exit process setup","Smooth Transitions and completion of activity by departments.","Facility to capture document evidence at each step."],imageSrc:hj,imageAlt:"Payslip Generation",imgPosition:"left"}];return(0,g.jsx)(Rj,{children:n.map((e=>(0,g.jsx)(Oj,{children:"left"===e.imgPosition?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Pj,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,g.jsxs)(zj,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(Tj,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:tj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(zj,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(Tj,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:tj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]}),(0,g.jsx)(Pj,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},Ij=so.div`
  background-color: white;
  color: blue;
  width: 100%;
  /* padding-bottom: 10px; */
`,Lj=so.div`
  height: 472px;
  background-color: white;
  color: blue;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
  }
`,Fj=so.div`
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
`,Nj=so.div`
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
`,Dj=so.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 600;
  line-height: 61.2px;
  margin: 0px 0px 16px;
`,Bj=so.p`
  color: #454545;
  /* width: 65%; */
  font-size: 21px;
  /* word-wrap: normal; */
  /* line-height: 31.504px;
  margin: 0px 0px 24px; */

  @media (max-width: 768px) {
    width: 100%;
  }
`,_j=so.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 60%;
  line-height: 26px;
  padding: 44px 0px 0px;
`,Hj=so.button`
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
`,Uj=so.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`,Wj=so.div`
  line-height: 26px;
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`,qj=()=>{const e=ta(),t="/claim.html"===e.pathname,n="/leave.html"===e.pathname,r="/employeehr.html"===e.pathname,o="/payroll.html"===e.pathname,a="/attendance.html"===e.pathname,s="/appraisal.html"===e.pathname,l=(0,i.useMemo)((()=>t?{title:"Effortless Claim Management for Your Organization",description:"Streamline your expense claim process with fast approvals, secure uploads, and real-time tracking all in one place.",image:WA,data:"Claim"}:n?{title:"Simplified Leave Management for Employees",description:"Manage leave requests, approvals, and balances with ease, all in one centralized system.",image:qA,data:"Leave"}:r?{title:"Welcome to Employee Management",description:"Explore our various modules designed to simplify your HR processes.",image:GA,data:"HR"}:a?{title:"Welcome to Employee Attendance",description:"Explore our various modules designed to simplify your HR processes.",image:GA,data:"Attendance"}:o?{title:"Accurate and Automated Payroll Solutions",description:"Simplify payroll with Atomwalk HRM's automated system, handling salaries, deductions, and taxes with accuracy. Real-time integration ensures seamless reporting and easy payslip access for employees",image:GA,data:"Payroll"}:s?{title:"Performance Mangement",description:"The appraisal system supporting KPI-based evaluations, with self-assessment, manager scoring, and grade normalization for fair, transparent performance reviews and structured reporting.",image:GA,data:"Appraisal"}:{title:"Welcome to Employee Management",description:"Explore our various modules designed to simplify your HR processes.",image:GA,data:"HR"}),[t,n,r]);return(0,g.jsxs)(Ij,{children:[(0,g.jsx)(Lj,{children:(0,g.jsxs)(Fj,{children:[(0,g.jsxs)(Nj,{children:[(0,g.jsx)(Dj,{children:l.title}),(0,g.jsx)(Bj,{children:l.description}),(0,g.jsx)(Hj,{onClick:()=>{window.location.href="/demo.html"},children:(0,g.jsx)(Uj,{children:"Request a Demo"})})]}),(0,g.jsx)(_j,{children:(0,g.jsx)(Wj,{children:(0,g.jsx)("img",{src:l.image,alt:"Page Background"})})})]})}),(0,g.jsx)(ej,{data:l.data}),(0,g.jsx)(Mj,{data:l.data})]})},Gj=n.p+"static/media/Mockup5-Lead.780e9b50bcaba7281d4d.png",Vj=n.p+"static/media/Customermage-removebg-preview.fa8bcba86c44de2d5172.png",Kj=n.p+"static/media/Pattner.7901d1ba5f15d16330b0.png",Jj=n.p+"static/media/Campain.d60d77c952a36990bf12.png";n.p;const Qj=n.p+"static/media/CrmMocups2.42b85b9b507a83b24f4f9c0bfbf25f57.svg";const Yj=n.p+"static/media/CrmMocups.52e8c70046b9976399c8e1c31b83bd6f.svg",Zj=so.div`
  width: 100%;
  height: 100%;
`,Xj=so.div`
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
`,$j=so.div`
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
`,eC=so.div`
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
`,tC=so.div`
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
`,nC=e=>{let{data:t}=e;const n="Claim"===t?[{title:"Effortless Campaign Management",subtitle:"Seamlessly Create, View, and Manage Campaigns",description:"Atomwalk CRM offers a user-friendly interface to manage customer email campaigns with ease. Users can add new campaigns, view campaign lists, and access powerful search features to quickly find specific campaigns. With organized tools, campaign creation and management become intuitive and efficient, allowing you to focus on engagement and conversions.",benefits:["Campaign List View","Campaign Search","User-Friendly Interface"],imageSrc:ij,imageAlt:"Campaign Management Dashboard",imgPosition:"left"},{title:"Enhanced Campaign Execution and Analysis",subtitle:"Maximize Engagement with Real-Time Tracking and Insights",description:"From sending targeted emails to monitoring their performance, Atomwalk CRM enables real-time tracking of customer interactions, open rates, and conversion metrics. Use detailed analytics to adjust strategies, close completed campaigns, and optimize future campaigns. This helps maximize reach, engagement, and ultimately, customer satisfaction.",benefits:["Send Emails","Real-Time Tracking","Detailed Analytics"],imageSrc:ij,imageAlt:"Campaign Performance Tracking",imgPosition:"right"}]:[{title:"Streamlined Lead Engagement",subtitle:"Effortless Management for Higher Conversions",description:'This fully integrated dashboard in the Atomwalk CRM application provides users with an intuitive workspace to access and manage lead details effortlessly. Users can quickly add new leads, view a comprehensive lead list, and upload data in bulk to keep information up-to-date. Additionally, tasks can be assigned to specific leads for timely follow-ups, while a detailed Lead Performance Dashboard offers insight into engagement metrics and conversion progress. The "Add Product Interest" feature lets users associate specific product interests with each lead, enhancing personalization and targeted engagement. With these functionalities in one place, the Atomwalk CRM helps optimize lead nurturing and boosts overall conversion rates.',benefits:["Centralized Lead Insights","Seamless Team Collaboration","Optimized Engagement Strategies"],imageSrc:Qj,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Manage Leads with Ease",subtitle:"Fast and Efficient Lead Management Process",description:"Empower your sales team to add and manage leads effortlessly from their mobile devices or desktops. Track the status of leads in real-time, and streamline follow-ups with our intuitive lead management system.",benefits:["Real-Time Lead Tracking","Automated Follow-ups","Bulk Lead Uploads"],imageSrc:Yj,imageAlt:"Lead Management",imgPosition:"left"},{title:"Streamline Lead Conversions",subtitle:"Quick and Transparent Lead Conversion Process",description:"Sales managers can track lead progress, assign tasks, and update lead status in real-time. Our streamlined lead conversion process ensures that opportunities are never missed, providing transparency and timely action for maximum conversions.",benefits:["Task Assignment","Pipeline Status Updates","Conversion Tracking"],imageSrc:Qj,imageAlt:"Lead Conversion",imgPosition:"right"},{title:"Centralize Lead Management for Higher Conversions",subtitle:"Efficient and Transparent Lead Conversion Process",description:"Sales managers can seamlessly track lead history, assign tasks, and update lead statuses in real-time. With our centralized lead management system, you can prioritize leads, ensure timely follow-ups, and never miss an opportunity to convert, all while maintaining full transparency throughout the process.",benefits:["Real-Time Task Assignment","Lead Prioritization","Conversion Tracking"],imageSrc:Qj,imageAlt:"Lead Conversion Process",imgPosition:"left"},{title:"Get Complete Context on Every Lead",subtitle:"Personalized and Informed Lead Follow-ups",description:"To maximize the potential of lost leads, implement follow-up automation to re-engage them after a set period, such as three months, with \u201cwin-back\u201d campaigns that offer special promotions or address any unmet needs. Keep detailed records of why leads were marked as lost (e.g., budget constraints, timing, lack of interest) to enable tailored future follow-up strategies. Design re-engagement workflows in the CRM to tag lost leads, retarget them, and monitor for any shifts in their engagement levels. Analyzing lost lead data periodically can reveal common reasons for drop-off, providing insights to refine marketing and sales approaches. Maintain lost leads as a distinct segment in the CRM, allowing for strategic re-engagement with new products or services, ensuring they stay accessible for potential future opportunities.",benefits:["Comprehensive Lead History","Cross-Departmental Integration","Informed Outreach"],imageSrc:Qj,imageAlt:"Lead Context",imgPosition:"right"}];return(0,g.jsx)(Zj,{children:n.map((e=>(0,g.jsx)(Xj,{children:"left"===e.imgPosition?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)($j,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,g.jsxs)(tC,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(eC,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:tj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(tC,{children:[(0,g.jsx)("h1",{children:e.title}),(0,g.jsx)("h2",{children:e.subtitle}),(0,g.jsx)("p",{style:{color:"#666"},children:e.description}),(0,g.jsx)(eC,{children:(0,g.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:tj,alt:"Check mark"}),(0,g.jsx)("span",{children:e})]},t)))})})]}),(0,g.jsx)($j,{children:(0,g.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},rC=()=>{const[e,t]=(0,i.useState)(""),n=ta(),r=[{title:"Lead Management",titles:"Lead",description:"Atomwalk CRM's Lead Management system helps businesses efficiently track and manage leads throughout their sales pipeline. Users can add, update, and categorize leads, mark them as active or inactive, and assign ownership for better accountability. This system ensures that leads are properly followed up, improving conversion rates and optimizing the sales process.",background:"#d6e7ff",img:`${Gj}`},{title:"Customer Management",titles:"Customer",description:"Atomwalk CRM's Customer Management system helps businesses organize and manage customer data, interactions, and communication history. It allows users to track customer preferences, purchase history, and provides tools to enhance customer retention and satisfaction.",background:"#d6e7ff",img:`${Vj}`},{title:"Channel Partner Management",titles:"Partner",description:"Atomwalk CRM's Channel Partner Management system enables businesses to effectively manage their relationships with partners. It helps track partner activities, agreements, and contributions, streamlining collaboration to drive mutual growth. The system also provides visibility into partner performance, ensuring transparency and maximizing the value of partnerships.",background:"#d6e7ff",img:`${Kj}`},{title:"Campaign Management",titles:"Campaign",description:"Atomwalk CRM's Campaign Management system allows businesses to plan, execute, and analyze marketing campaigns across multiple channels. It enables users to track campaign performance, manage budgets, and segment audiences for targeted outreach. The system provides real-time insights, helping to optimize strategies for better engagement and higher ROI.",background:"#d6e7ff",img:`${Jj}`}];(0,i.useEffect)((()=>{n.pathname.includes("campaignManagement")&&t("Claim")}),[n.pathname]);const o=n.pathname.includes("leadManagement")?r[0]:n.pathname.includes("CustomerManagement")?r[1]:n.pathname.includes("Channelpartner")?r[2]:n.pathname.includes("campaignManagement")?r[3]:r[0];return(0,g.jsxs)("div",{children:[(0,g.jsx)(fp,{title:o.title,description:o.description,background:o.background,img:o.img,lead:!0}),(0,g.jsx)(ej,{bgcolors:"#e8f1fe",data:o.titles}),(0,g.jsx)(nC,{data:e})]})},iC=so.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,oC=so.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,aC=so.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,sC=so.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,lC=so.div`
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
`,cC=so.div`
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
`,uC=so.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,dC=so.p`
  font-size: 1em;
  color: #666;
`,pC=()=>{const e=e=>{window.location.href=`/${e}`};return(0,g.jsxs)(iC,{children:[(0,g.jsx)(oC,{children:"Key Features"}),(0,g.jsx)(aC,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,g.jsxs)(sC,{children:[(0,g.jsxs)(lC,{onClick:()=>e("leadManagement.html"),children:[(0,g.jsx)(cC,{bgColor:"#D8F5E3",children:(0,g.jsx)("img",{src:Zk,alt:"Speed"})}),(0,g.jsx)(uC,{children:" Lead Management:"}),(0,g.jsx)(dC,{children:"Streamline and track leads from acquisition to conversion, ensuring efficient follow-ups and maximizing sales opportunities."})]}),(0,g.jsxs)(lC,{onClick:()=>e("CustomerManagement.html"),children:[(0,g.jsx)(cC,{bgColor:"#F0E7FF",children:(0,g.jsx)("img",{src:Xk,alt:"Trust"})}),(0,g.jsx)(uC,{children:"Customer Management:"}),(0,g.jsx)(dC,{children:"Manage customer relationships by storing interaction histories, preferences, and communication details in one centralized platform"})]}),(0,g.jsxs)(lC,{onClick:()=>e("Channelpartner.html"),children:[(0,g.jsx)(cC,{bgColor:"#E0F7FC",children:(0,g.jsx)("img",{src:$k,alt:"Accuracy"})}),(0,g.jsx)(uC,{children:"Channel partner management:"}),(0,g.jsx)(dC,{children:"Collaborate effectively with business partners by tracking their contributions, agreements, and communication to ensure successful partnerships."})]}),(0,g.jsxs)(lC,{children:[(0,g.jsx)(cC,{bgColor:"#FFF2E0",children:(0,g.jsx)("img",{src:eS,alt:"Reliability"})}),(0,g.jsx)(uC,{children:"Annual Maintenance Contract:"}),(0,g.jsx)(dC,{children:"Efficiently manage assets, investments, and portfolios while tracking performance and ensuring regulatory compliance"})]}),(0,g.jsxs)(lC,{onClick:()=>e("campaignManagement.html"),children:[(0,g.jsx)(cC,{bgColor:"#ffe0f5",children:(0,g.jsx)("img",{src:tS,alt:"Reliability"})}),(0,g.jsx)(uC,{children:"Campaign Management:"}),(0,g.jsx)(dC,{children:"Plan, execute, and analyze marketing campaigns to reach target audiences, track results, and optimize strategies for higher engagement and ROI."})]})]})]})},fC=()=>(0,g.jsxs)("div",{children:[(0,g.jsx)(fp,{title:"Comprehensive CRM platform",description:"Atomwalk CRM is a comprehensive Customer Relationship Management (CRM) system designed to streamline and manage various business operations, focusing on customer, supplier, partner, and lead management. It offers functionalities that support task management, order processing, and tracking of product interests and payments.",background:"#d6e7ff",crm:!0}),(0,g.jsx)(Nk,{data:"lead"}),(0,g.jsx)(pC,{}),(0,g.jsx)(Yk,{data:"crm"})]}),hC=n.p+"static/media/HeroLabSection.1606c37d4e5ec7047aa4.png",mC=n.p+"static/media/science.8f9dee670ee1dc6ebb6e.png",gC=n.p+"static/media/laboratory.10d5fe66121f8e772dde.png",xC=n.p+"static/media/labmagement.ba84ebd47e20da342faf.png",yC=n.p+"static/media/equpment.d3afd0d0f3a6fd638e31.png",vC=so.div`
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
`,bC=so.div`
  max-width: 50%;
  margin-top: 100px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 150px;
  }
`,wC=so.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,kC=so.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,SC=so.button`
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
`,AC=so.div`
  display: flex;
  justify-content: left;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,jC=so.div`
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
`,CC=so.img`
  width: 70px;
  margin-bottom: 10px;
`,EC=so.p`
  font-size: 1rem;
  color: #333;
`,RC=so.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`,OC=so.img`
  width: 550px;
  height: auto;
  border-radius: 10%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`,PC=()=>{const[e,t]=(0,i.useState)("linear-gradient(180deg, #d2f5fa, rgb(255 246 247))"),[n,r]=(0,i.useState)(hC),o=(e,n)=>{t(e),r(n)},a=()=>{t("linear-gradient(180deg, #d2f5fa, rgb(255 246 247))"),r(hC)};return(0,g.jsxs)(vC,{background:e,children:[(0,g.jsxs)(bC,{children:[(0,g.jsx)(wC,{children:"Complete Lab & Equipment Management Hub"}),(0,g.jsx)(kC,{children:"Manage lab operations and equipment effortlessly in one platform. From sample tracking to inventory control, LabSync keeps your lab running smoothly and efficiently."}),(0,g.jsx)(SC,{onClick:()=>{window.location.href="https://www.atomwalk.com/login/"},children:"Get started"}),(0,g.jsxs)(AC,{children:[(0,g.jsxs)(jC,{background:e,onMouseEnter:()=>o("linear-gradient(180deg, #bbfcc0, rgb(255 246 247))",yC),onMouseLeave:a,onClick:()=>{window.location.href="/labequipmentmangement.html"},children:[(0,g.jsx)(CC,{src:gC,alt:"HR"}),(0,g.jsx)(EC,{children:"Lab Equipment Management System: Precision Tracking for Lab Equipment Efficiency."})]}),(0,g.jsxs)(jC,{background:e,onMouseEnter:()=>o("linear-gradient(180deg, #edd4fc, rgb(255 246 247))",xC),onMouseLeave:a,onClick:()=>{window.location.href="/labmanagement.html"},children:[(0,g.jsx)(CC,{src:mC,alt:"CRM"}),(0,g.jsx)(EC,{children:"Lab Management System: Streamlined Solutions for Modern Lab Operations."})]})]})]}),(0,g.jsx)(RC,{children:(0,g.jsx)(OC,{src:n,alt:"Profile"})})]})},TC=so.section`
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
`,zC=so.div`
  max-width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,MC=so.h1`
  font-size: 48px;
  color: #213e6d;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`,IC=so.p`
  font-size: 18px;
  color: #6d7278;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,LC=so.button`
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
`,FC=so.div`
  max-width: 50%;
  position: relative;
  z-index: 2;
  bottom: 0px;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`,NC=so.img`
  width: 100%;
  height: auto;
`,DC=so.img`
  position: absolute;
  top: 150px;
  left: 40px;
  width: 130px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80px;
  }
`,BC=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(TC,{children:[(0,g.jsx)(DC,{src:uk,alt:"Abstract Shape"}),(0,g.jsxs)(zC,{children:[(0,g.jsx)(MC,{children:"Lab Equipment Management System"}),(0,g.jsx)(IC,{children:"Optimize utilization, minimize downtime, and simplify equipment management with real-time tracking and maintenance.  "}),(0,g.jsx)(LC,{children:"Learn more"})]}),(0,g.jsx)(FC,{children:(0,g.jsx)(NC,{src:ck,alt:"Laboratory Technician"})})]}),(0,g.jsx)(Nk,{data:"Equipment"}),(0,g.jsx)(uS,{}),(0,g.jsx)(Yk,{data:"equipment"})]});const _C=function(){const[e,t]=(0,i.useState)(!1),n={username:"ASUTOSH@PMA_00001",password:"ashutosh@11"};(0,i.useEffect)((()=>{localStorage.getItem("apiResponse")||r()}),[]);const r=async()=>{try{const e=await fetch("https://www.atomwalk.com/rest-auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();console.log("API Response:",t),localStorage.setItem("apiResponse",JSON.stringify(t))}catch(e){console.error("Error during login:",e)}};return(0,g.jsxs)("div",{className:"App",children:[(0,g.jsxs)(ud,{children:[(0,g.jsx)(wa,{}),(0,g.jsxs)(ya,{children:[(0,g.jsx)(ga,{path:"",element:(0,g.jsx)(ld,{})}),(0,g.jsx)(ga,{path:"/signin.html",element:(0,g.jsx)(Hd,{})}),(0,g.jsx)(ga,{path:"/forgotpassword.html",element:(0,g.jsx)(ep,{})}),(0,g.jsx)(ga,{path:"/card.html",element:(0,g.jsx)(Xa,{})}),(0,g.jsx)(ga,{path:"/Product.html",element:(0,g.jsx)(bf,{})}),(0,g.jsx)(ga,{path:"/contactUs.html",element:(0,g.jsx)(dh,{})}),(0,g.jsx)(ga,{path:"/aboutUs.html",element:(0,g.jsx)(Im,{})}),(0,g.jsx)(ga,{path:"/pricing.html",element:(0,g.jsx)(Qw,{})}),(0,g.jsx)(ga,{path:"/demo.html",element:(0,g.jsx)(ew,{})}),(0,g.jsx)(ga,{path:"/seals.html",element:(0,g.jsx)(lk,{})}),(0,g.jsx)(ga,{path:"/crm.html",element:(0,g.jsx)(fC,{})}),(0,g.jsx)(ga,{path:"/lms.html",element:(0,g.jsx)(PC,{})}),(0,g.jsx)(ga,{path:"/Blog.html",element:(0,g.jsx)(eA,{})}),(0,g.jsx)(ga,{path:"/BlogDetails.html",element:(0,g.jsx)(hA,{})}),(0,g.jsx)(ga,{path:"/hrm.html",element:(0,g.jsx)(UA,{})}),(0,g.jsx)(ga,{path:"/leave.html",element:(0,g.jsx)(qj,{})}),(0,g.jsx)(ga,{path:"/claim.html",element:(0,g.jsx)(qj,{})}),(0,g.jsx)(ga,{path:"/employeehr.html",element:(0,g.jsx)(qj,{})}),(0,g.jsx)(ga,{path:"/payroll.html",element:(0,g.jsx)(qj,{})}),(0,g.jsx)(ga,{path:"/appraisal.html",element:(0,g.jsx)(qj,{})}),(0,g.jsx)(ga,{path:"/attendance.html",element:(0,g.jsx)(qj,{})}),(0,g.jsx)(ga,{path:"/leadManagement.html",element:(0,g.jsx)(rC,{})}),(0,g.jsx)(ga,{path:"/CustomerManagement.html",element:(0,g.jsx)(rC,{})}),(0,g.jsx)(ga,{path:"/Channelpartner.html",element:(0,g.jsx)(rC,{})}),(0,g.jsx)(ga,{path:"/campaignManagement.html",element:(0,g.jsx)(rC,{})}),(0,g.jsx)(ga,{path:"/labmanagement.html",element:(0,g.jsx)(vS,{})}),(0,g.jsx)(ga,{path:"/labequipmentmangement.html",element:(0,g.jsx)(BC,{})})]})]}),e&&(0,g.jsx)(Nb,{setOpenslide:t}),(0,g.jsx)(Hb,{setOpenslide:t}),(0,g.jsx)($m,{})]})},HC=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,6453)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:o,getTTFB:a}=t;n(e),r(e),i(e),o(e),a(e)}))};a.createRoot(document.getElementById("root")).render((0,g.jsx)(i.StrictMode,{children:(0,g.jsx)(_C,{})})),HC()})()})();
//# sourceMappingURL=main.c9f65340.js.map