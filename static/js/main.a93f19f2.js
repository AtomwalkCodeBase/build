/*! For license information please see main.a93f19f2.js.LICENSE.txt */
(()=>{var e={5811:(e,t,n)=>{var r=n(347),i=n(1303).each;function a(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}a.prototype={constuctor:a,addHandler:function(e){var t=new r(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;i(t,(function(n,r){if(n.equals(e))return n.destroy(),!t.splice(r,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){i(this.handlers,(function(e){e.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";i(this.handlers,(function(t){t[e]()}))}},e.exports=a},8537:(e,t,n)=>{var r=n(5811),i=n(1303),a=i.each,o=i.isFunction,s=i.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(e,t,n){var i=this.queries,l=n&&this.browserIsIncapable;return i[e]||(i[e]=new r(e,l)),o(t)&&(t={match:t}),s(t)||(t=[t]),a(t,(function(t){o(t)&&(t={match:t}),i[e].addHandler(t)})),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=l},347:e=>{function t(e){this.options=e,!e.deferSetup&&this.setup()}t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=t},1303:e=>{e.exports={isFunction:function(e){return"function"===typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,r=e.length;n<r&&!1!==t(e[n],n);n++);}}},535:(e,t,n)=>{var r=n(8537);e.exports=new r},7396:(e,t,n)=>{var r;!function(){"use strict";var i=!("undefined"===typeof window||!window.document||!window.document.createElement),a={canUseDOM:i,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:i&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:i&&!!window.screen};void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r)}()},2740:e=>{"use strict";e.exports=function(e,t,n,r,i,a,o,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,a,o,s],d=0;(l=new Error(t.replace(/%s/g,(function(){return c[d++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},1270:(e,t,n)=>{var r=n(7475),i=function(e){var t="",n=Object.keys(e);return n.forEach((function(i,a){var o=e[i];(function(e){return/[height|width]$/.test(e)})(i=r(i))&&"number"===typeof o&&(o+="px"),t+=!0===o?i:!1===o?"not "+i:"("+i+": "+o+")",a<n.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"===typeof e?e:e instanceof Array?(e.forEach((function(n,r){t+=i(n),r<e.length-1&&(t+=", ")})),t):i(e)}},9834:(e,t,n)=>{var r=n(1260)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var o,s,l=t.prefix||"__jp",c=t.name||l+i++,d=t.param||"callback",u=null!=t.timeout?t.timeout:6e4,p=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;u&&(s=setTimeout((function(){m(),n&&n(new Error("Timeout"))}),u));function m(){o.parentNode&&o.parentNode.removeChild(o),window[c]=a,s&&clearTimeout(s)}return window[c]=function(e){r("jsonp got",e),m(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+d+"="+p(c)).replace("?&","?"),r('jsonp req "%s"',e),(o=document.createElement("script")).src=e,f.parentNode.insertBefore(o,f),function(){window[c]&&m()}};var i=0;function a(){}},1260:(e,t,n)=>{function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.DEBUG),e}(t=e.exports=n(4703)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var i=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(i++,"%c"===e&&(a=i))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},4703:(e,t,n)=>{var r;function i(e){function n(){if(n.enabled){var e=n,i=+new Date,a=i-(r||i);e.diff=a,e.prev=r,e.curr=i,r=i;for(var o=new Array(arguments.length),s=0;s<o.length;s++)o[s]=arguments[s];o[0]=t.coerce(o[0]),"string"!==typeof o[0]&&o.unshift("%O");var l=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;l++;var i=t.formatters[r];if("function"===typeof i){var a=o[l];n=i.call(e,a),o.splice(l,1),l--}return n})),t.formatArgs.call(e,o),(n.log||t.log||console.log.bind(console)).apply(e,o)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=i.debug=i.default=i).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,i=0;i<r;i++)n[i]&&("-"===(e=n[i].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(4850),t.names=[],t.skips=[],t.formatters={}},4850:e=>{var t=1e3,n=60*t,r=60*n,i=24*r,a=365.25*i;function o(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,s){s=s||{};var l,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var o=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!o)return;var s=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*a;case"days":case"day":case"d":return s*i;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===c&&!1===isNaN(e))return s.long?o(l=e,i,"day")||o(l,r,"hour")||o(l,n,"minute")||o(l,t,"second")||l+" ms":function(e){if(e>=i)return Math.round(e/i)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},446:(e,t,n)=>{var r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,p=d||u||Function("return this")(),f=Object.prototype.toString,m=Math.max,h=Math.min,g=function(){return p.Date.now()};function x(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==i}(e))return r;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):o.test(e)?r:+e}e.exports=function(e,t,n){var r,i,a,o,s,l,c=0,d=!1,u=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=a}function v(){var e=g();if(y(e))return w(e);s=setTimeout(v,function(e){var n=t-(e-l);return u?h(n,a-(e-c)):n}(e))}function w(e){return s=void 0,p&&r?f(e):(r=i=void 0,o)}function k(){var e=g(),n=y(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(v,t),d?f(e):o}(l);if(u)return s=setTimeout(v,t),f(l)}return void 0===s&&(s=setTimeout(v,t)),o}return t=b(t)||0,x(n)&&(d=!!n.leading,a=(u="maxWait"in n)?m(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),k.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},k.flush=function(){return void 0===s?o:w(g())},k}},381:(e,t,n)=>{var r="Expected a function",i=NaN,a="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,p="object"==typeof self&&self&&self.Object===Object&&self,f=u||p||Function("return this")(),m=Object.prototype.toString,h=Math.max,g=Math.min,x=function(){return f.Date.now()};function b(e,t,n){var i,a,o,s,l,c,d=0,u=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError(r);function m(t){var n=i,r=a;return i=a=void 0,d=t,s=e.apply(r,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-d>=o}function w(){var e=x();if(b(e))return k(e);l=setTimeout(w,function(e){var n=t-(e-c);return p?g(n,o-(e-d)):n}(e))}function k(e){return l=void 0,f&&i?m(e):(i=a=void 0,s)}function S(){var e=x(),n=b(e);if(i=arguments,a=this,c=e,n){if(void 0===l)return function(e){return d=e,l=setTimeout(w,t),u?m(e):s}(c);if(p)return l=setTimeout(w,t),m(c)}return void 0===l&&(l=setTimeout(w,t)),s}return t=v(t)||0,y(n)&&(u=!!n.leading,o=(p="maxWait"in n)?h(v(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),S.cancel=function(){void 0!==l&&clearTimeout(l),d=0,i=c=a=l=void 0},S.flush=function(){return void 0===l?s:k(x())},S}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==a}(e))return i;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=l.test(e);return n||c.test(e)?d(e.slice(2),n?2:8):s.test(e)?i:+e}e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),b(e,t,{leading:i,maxWait:t,trailing:a})}},9197:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=null;return t.forEach((function(e){if(null==i){var t=e.apply(void 0,n);null!=t&&(i=t)}})),i}))};var r,i=n(3534),a=(r=i)&&r.__esModule?r:{default:r};e.exports=t.default},3534:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,i,a,o){var s=i||"<<anonymous>>",l=o||r;if(null==n[r])return t?new Error("Required "+a+" `"+l+"` was not specified in `"+s+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),u=6;u<c;u++)d[u-6]=arguments[u];return e.apply(void 0,[n,r,s,a,l].concat(d))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},1497:(e,t,n)=>{"use strict";var r=n(3218);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,a,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}},5173:(e,t,n)=>{e.exports=n(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2730:(e,t,n)=>{"use strict";var r=n(5043),i=n(8853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)o.add(t[e])}var d=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),u=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},m={};function h(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var x=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!u.call(m,e)||!u.call(f,e)&&(p.test(e)?m[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(x,b);g[t]=new h(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(x,b);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(x,b);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var v=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),E=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),M=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var I=Symbol.iterator;function D(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=I&&e[I]||e["@@iterator"])?e:null}var L,F=Object.assign;function N(e){if(void 0===L)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return"\n"+L+e}var B=!1;function q(e,t){if(!e||B)return"";B=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{B=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function H(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=q(e.type,!1);case 11:return e=q(e.type.render,!1);case 1:return e=q(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case A:return"Profiler";case j:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case E:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case R:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case M:t=e._payload,e=e._init;try{return W(e(t))}catch(n){}}return null}function _(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function U(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function G(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=G(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Y(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=G(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function V(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function J(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=U(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Z(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function X(e,t){Z(e,t);var n=U(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,U(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function $(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&V(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+U(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:U(n)}}function ae(e,t){var n=U(t.value),r=U(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,de,ue=(de=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return de(e,t)}))}:de);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=he(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(fe).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var xe=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(xe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ve=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Ae(e){if(e=yi(e)){if("function"!==typeof ke)throw Error(a(280));var t=e.stateNode;t&&(t=wi(t),ke(e.stateNode,e.type,t))}}function Ce(e){Se?je?je.push(e):je=[e]:Se=e}function Ee(){if(Se){var e=Se,t=je;if(je=Se=null,Ae(e),t)for(e=0;e<t.length;e++)Ae(t[e])}}function Re(e,t){return e(t)}function Pe(){}var Oe=!1;function Te(e,t,n){if(Oe)return e(t,n);Oe=!0;try{return Re(e,t,n)}finally{Oe=!1,(null!==Se||null!==je)&&(Pe(),Ee())}}function Me(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var ze=!1;if(d)try{var Ie={};Object.defineProperty(Ie,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Ie,Ie),window.removeEventListener("test",Ie,Ie)}catch(de){ze=!1}function De(e,t,n,r,i,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Le=!1,Fe=null,Ne=!1,Be=null,qe={onError:function(e){Le=!0,Fe=e}};function He(e,t,n,r,i,a,o,s,l){Le=!1,Fe=null,De.apply(qe,arguments)}function We(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function _e(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ue(e){if(We(e)!==e)throw Error(a(188))}function Ge(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=We(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ue(i),e;if(o===r)return Ue(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Ye=i.unstable_scheduleCallback,Ve=i.unstable_cancelCallback,Je=i.unstable_shouldYield,Qe=i.unstable_requestPaint,Ze=i.unstable_now,Xe=i.unstable_getCurrentPriorityLevel,$e=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,at=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,dt=4194304;function ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=ut(s):0!==(a&=o)&&(r=ut(a))}else 0!==(o=n&~i)?r=ut(o):0!==a&&(r=ut(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-ot(t)),r|=e[n],t&=~i;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var yt=0;function vt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,jt,At,Ct=!1,Et=[],Rt=null,Pt=null,Ot=null,Tt=new Map,Mt=new Map,zt=[],It="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dt(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mt.delete(t.pointerId)}}function Lt(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=yi(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Ft(e){var t=bi(e.target);if(null!==t){var n=We(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=_e(n)))return e.blockedOn=t,void At(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Nt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yi(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);ve=r,n.target.dispatchEvent(r),ve=null,t.shift()}return!0}function Bt(e,t,n){Nt(e)&&n.delete(t)}function qt(){Ct=!1,null!==Rt&&Nt(Rt)&&(Rt=null),null!==Pt&&Nt(Pt)&&(Pt=null),null!==Ot&&Nt(Ot)&&(Ot=null),Tt.forEach(Bt),Mt.forEach(Bt)}function Ht(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,qt)))}function Wt(e){function t(t){return Ht(t,e)}if(0<Et.length){Ht(Et[0],e);for(var n=1;n<Et.length;n++){var r=Et[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Rt&&Ht(Rt,e),null!==Pt&&Ht(Pt,e),null!==Ot&&Ht(Ot,e),Tt.forEach(t),Mt.forEach(t),n=0;n<zt.length;n++)(r=zt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&null===(n=zt[0]).blockedOn;)Ft(n),null===n.blockedOn&&zt.shift()}var _t=v.ReactCurrentBatchConfig,Ut=!0;function Gt(e,t,n,r){var i=yt,a=_t.transition;_t.transition=null;try{yt=1,Yt(e,t,n,r)}finally{yt=i,_t.transition=a}}function Kt(e,t,n,r){var i=yt,a=_t.transition;_t.transition=null;try{yt=4,Yt(e,t,n,r)}finally{yt=i,_t.transition=a}}function Yt(e,t,n,r){if(Ut){var i=Jt(e,t,n,r);if(null===i)Ur(e,t,r,Vt,n),Dt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Rt=Lt(Rt,e,t,n,r,i),!0;case"dragenter":return Pt=Lt(Pt,e,t,n,r,i),!0;case"mouseover":return Ot=Lt(Ot,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Tt.set(a,Lt(Tt.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Mt.set(a,Lt(Mt.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Dt(e,r),4&t&&-1<It.indexOf(e)){for(;null!==i;){var a=yi(i);if(null!==a&&wt(a),null===(a=Jt(e,t,n,r))&&Ur(e,t,r,Vt,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Ur(e,t,r,null,n)}}var Vt=null;function Jt(e,t,n,r){if(Vt=null,null!==(e=bi(e=we(r))))if(null===(t=We(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=_e(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case $e:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Zt=null,Xt=null,$t=null;function en(){if($t)return $t;var e,t,n=Xt,r=n.length,i="value"in Zt?Zt.value:Zt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return $t=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dn=an(cn),un=F({},cn,{view:0,detail:0}),pn=an(un),fn=F({},un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:An,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(on=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=on=0,ln=e),on)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),mn=an(fn),hn=an(F({},fn,{dataTransfer:0})),gn=an(F({},un,{relatedTarget:0})),xn=an(F({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=F({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=an(bn),vn=an(F({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function An(){return jn}var Cn=F({},un,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:An,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),En=an(Cn),Rn=an(F({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=an(F({},un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:An})),On=an(F({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=F({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mn=an(Tn),zn=[9,13,27,32],In=d&&"CompositionEvent"in window,Dn=null;d&&"documentMode"in document&&(Dn=document.documentMode);var Ln=d&&"TextEvent"in window&&!Dn,Fn=d&&(!In||Dn&&8<Dn&&11>=Dn),Nn=String.fromCharCode(32),Bn=!1;function qn(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Wn=!1;var _n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Un(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!_n[e.type]:"textarea"===t}function Gn(e,t,n,r){Ce(r),0<(t=Kr(t,"onChange")).length&&(n=new dn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Yn=null;function Vn(e){Nr(e,0)}function Jn(e){if(Y(vi(e)))return e}function Qn(e,t){if("change"===e)return t}var Zn=!1;if(d){var Xn;if(d){var $n="oninput"in document;if(!$n){var er=document.createElement("div");er.setAttribute("oninput","return;"),$n="function"===typeof er.oninput}Xn=$n}else Xn=!1;Zn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Yn=Kn=null)}function nr(e){if("value"===e.propertyName&&Jn(Yn)){var t=[];Gn(t,Yn,e,we(e)),Te(Vn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Yn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Jn(Yn)}function ar(e,t){if("click"===e)return Jn(t)}function or(e,t){if("input"===e||"change"===e)return Jn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!u.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dr(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function ur(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?ur(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=V();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=V((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ur(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=dr(n,a);var o=dr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hr=d&&"documentMode"in document&&11>=document.documentMode,gr=null,xr=null,br=null,yr=!1;function vr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==V(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&lr(br,r)||(br=r,0<(r=Kr(xr,"onSelect")).length&&(t=new dn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},jr={};function Ar(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Sr[e]=n[t];return e}d&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Cr=Ar("animationend"),Er=Ar("animationiteration"),Rr=Ar("animationstart"),Pr=Ar("transitionend"),Or=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(e,t){Or.set(e,t),l(t,[e])}for(var zr=0;zr<Tr.length;zr++){var Ir=Tr[zr];Mr(Ir.toLowerCase(),"on"+(Ir[0].toUpperCase()+Ir.slice(1)))}Mr(Cr,"onAnimationEnd"),Mr(Er,"onAnimationIteration"),Mr(Rr,"onAnimationStart"),Mr("dblclick","onDoubleClick"),Mr("focusin","onFocus"),Mr("focusout","onBlur"),Mr(Pr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function Fr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,s,l,c){if(He.apply(this,arguments),Le){if(!Le)throw Error(a(198));var d=Fe;Le=!1,Fe=null,Ne||(Ne=!0,Be=d)}}(r,t,void 0,e),e.currentTarget=null}function Nr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Fr(i,s,c),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Fr(i,s,c),a=l}}}if(Ne)throw e=Be,Ne=!1,Be=null,e}function Br(e,t){var n=t[hi];void 0===n&&(n=t[hi]=new Set);var r=e+"__bubble";n.has(r)||(_r(t,e,2,!1),n.add(r))}function qr(e,t,n){var r=0;t&&(r|=4),_r(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Hr]){e[Hr]=!0,o.forEach((function(t){"selectionchange"!==t&&(Lr.has(t)||qr(t,!1,e),qr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Hr]||(t[Hr]=!0,qr("selectionchange",!1,t))}}function _r(e,t,n,r){switch(Qt(t)){case 1:var i=Gt;break;case 4:i=Kt;break;default:i=Yt}n=i.bind(null,t,n,e),i=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ur(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=bi(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}Te((function(){var r=a,i=we(n),o=[];e:{var s=Or.get(e);if(void 0!==s){var l=dn,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=En;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Pn;break;case Cr:case Er:case Rr:l=xn;break;case Pr:l=On;break;case"scroll":l=pn;break;case"wheel":l=Mn;break;case"copy":case"cut":case"paste":l=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Rn}var d=0!==(4&t),u=!d&&"scroll"===e,p=d?null!==s?s+"Capture":null:s;d=[];for(var f,m=r;null!==m;){var h=(f=m).stateNode;if(5===f.tag&&null!==h&&(f=h,null!==p&&(null!=(h=Me(m,p))&&d.push(Gr(m,h,f)))),u)break;m=m.return}0<d.length&&(s=new l(s,c,null,n,i),o.push({event:s,listeners:d}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===ve||!(c=n.relatedTarget||n.fromElement)||!bi(c)&&!c[mi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?bi(c):null)&&(c!==(u=We(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(d=mn,h="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=Rn,h="onPointerLeave",p="onPointerEnter",m="pointer"),u=null==l?s:vi(l),f=null==c?s:vi(c),(s=new d(h,m+"leave",l,n,i)).target=u,s.relatedTarget=f,h=null,bi(i)===r&&((d=new d(p,m+"enter",c,n,i)).target=f,d.relatedTarget=u,h=d),u=h,l&&c)e:{for(p=c,m=0,f=d=l;f;f=Yr(f))m++;for(f=0,h=p;h;h=Yr(h))f++;for(;0<m-f;)d=Yr(d),m--;for(;0<f-m;)p=Yr(p),f--;for(;m--;){if(d===p||null!==p&&d===p.alternate)break e;d=Yr(d),p=Yr(p)}d=null}else d=null;null!==l&&Vr(o,s,l,d,!1),null!==c&&null!==u&&Vr(o,u,c,d,!0)}if("select"===(l=(s=r?vi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Qn;else if(Un(s))if(Zn)g=or;else{g=ir;var x=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=ar);switch(g&&(g=g(e,r))?Gn(o,g,n,i):(x&&x(e,s,r),"focusout"===e&&(x=s._wrapperState)&&x.controlled&&"number"===s.type&&ee(s,"number",s.value)),x=r?vi(r):window,e){case"focusin":(Un(x)||"true"===x.contentEditable)&&(gr=x,xr=r,br=null);break;case"focusout":br=xr=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,vr(o,n,i);break;case"selectionchange":if(hr)break;case"keydown":case"keyup":vr(o,n,i)}var b;if(In)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Wn?qn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Fn&&"ko"!==n.locale&&(Wn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Wn&&(b=en()):(Xt="value"in(Zt=i)?Zt.value:Zt.textContent,Wn=!0)),0<(x=Kr(r,y)).length&&(y=new vn(y,e,null,n,i),o.push({event:y,listeners:x}),b?y.data=b:null!==(b=Hn(n))&&(y.data=b))),(b=Ln?function(e,t){switch(e){case"compositionend":return Hn(t);case"keypress":return 32!==t.which?null:(Bn=!0,Nn);case"textInput":return(e=t.data)===Nn&&Bn?null:e;default:return null}}(e,n):function(e,t){if(Wn)return"compositionend"===e||!In&&qn(e,t)?(e=en(),$t=Xt=Zt=null,Wn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(i=new vn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=b))}Nr(o,t)}))}function Gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=Me(e,n))&&r.unshift(Gr(e,a,i)),null!=(a=Me(e,t))&&r.push(Gr(e,a,i))),e=e.return}return r}function Yr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Vr(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=Me(n,a))&&o.unshift(Gr(n,l,s)):i||null!=(l=Me(n,a))&&o.push(Gr(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Jr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function Zr(e){return("string"===typeof e?e:""+e).replace(Jr,"\n").replace(Qr,"")}function Xr(e,t,n){if(t=Zr(t),Zr(e)!==t&&n)throw Error(a(425))}function $r(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,ai="function"===typeof Promise?Promise:void 0,oi="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ai?function(e){return ai.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout((function(){throw e}))}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Wt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Wt(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function di(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ui=Math.random().toString(36).slice(2),pi="__reactFiber$"+ui,fi="__reactProps$"+ui,mi="__reactContainer$"+ui,hi="__reactEvents$"+ui,gi="__reactListeners$"+ui,xi="__reactHandles$"+ui;function bi(e){var t=e[pi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mi]||n[pi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=di(e);null!==e;){if(n=e[pi])return n;e=di(e)}return t}n=(e=n).parentNode}return null}function yi(e){return!(e=e[pi]||e[mi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function vi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function wi(e){return e[fi]||null}var ki=[],Si=-1;function ji(e){return{current:e}}function Ai(e){0>Si||(e.current=ki[Si],ki[Si]=null,Si--)}function Ci(e,t){Si++,ki[Si]=e.current,e.current=t}var Ei={},Ri=ji(Ei),Pi=ji(!1),Oi=Ei;function Ti(e,t){var n=e.type.contextTypes;if(!n)return Ei;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Mi(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zi(){Ai(Pi),Ai(Ri)}function Ii(e,t,n){if(Ri.current!==Ei)throw Error(a(168));Ci(Ri,t),Ci(Pi,n)}function Di(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(a(108,_(e)||"Unknown",i));return F({},n,r)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ei,Oi=Ri.current,Ci(Ri,e),Ci(Pi,Pi.current),!0}function Fi(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Di(e,t,Oi),r.__reactInternalMemoizedMergedChildContext=e,Ai(Pi),Ai(Ri),Ci(Ri,e)):Ai(Pi),Ci(Pi,n)}var Ni=null,Bi=!1,qi=!1;function Hi(e){null===Ni?Ni=[e]:Ni.push(e)}function Wi(){if(!qi&&null!==Ni){qi=!0;var e=0,t=yt;try{var n=Ni;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ni=null,Bi=!1}catch(i){throw null!==Ni&&(Ni=Ni.slice(e+1)),Ye($e,Wi),i}finally{yt=t,qi=!1}}return null}var _i=[],Ui=0,Gi=null,Ki=0,Yi=[],Vi=0,Ji=null,Qi=1,Zi="";function Xi(e,t){_i[Ui++]=Ki,_i[Ui++]=Gi,Gi=e,Ki=t}function $i(e,t,n){Yi[Vi++]=Qi,Yi[Vi++]=Zi,Yi[Vi++]=Ji,Ji=e;var r=Qi;e=Zi;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qi=1<<32-ot(t)+i|n<<i|r,Zi=a+e}else Qi=1<<a|n<<i|r,Zi=e}function ea(e){null!==e.return&&(Xi(e,1),$i(e,1,0))}function ta(e){for(;e===Gi;)Gi=_i[--Ui],_i[Ui]=null,Ki=_i[--Ui],_i[Ui]=null;for(;e===Ji;)Ji=Yi[--Vi],Yi[Vi]=null,Zi=Yi[--Vi],Yi[Vi]=null,Qi=Yi[--Vi],Yi[Vi]=null}var na=null,ra=null,ia=!1,aa=null;function oa(e,t){var n=Tc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ra=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ra=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ji?{id:Qi,overflow:Zi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ra=null,!0);default:return!1}}function la(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ca(e){if(ia){var t=ra;if(t){var n=t;if(!sa(e,t)){if(la(e))throw Error(a(418));t=ci(n.nextSibling);var r=na;t&&sa(e,t)?oa(r,n):(e.flags=-4097&e.flags|2,ia=!1,na=e)}}else{if(la(e))throw Error(a(418));e.flags=-4097&e.flags|2,ia=!1,na=e}}}function da(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function ua(e){if(e!==na)return!1;if(!ia)return da(e),ia=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ra)){if(la(e))throw pa(),Error(a(418));for(;t;)oa(e,t),t=ci(t.nextSibling)}if(da(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ra=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ra=null}}else ra=na?ci(e.stateNode.nextSibling):null;return!0}function pa(){for(var e=ra;e;)e=ci(e.nextSibling)}function fa(){ra=na=null,ia=!1}function ma(e){null===aa?aa=[e]:aa.push(e)}var ha=v.ReactCurrentBatchConfig;function ga(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function xa(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function ya(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=zc(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Fc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===S?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===M&&ba(a)===t.type)?((r=i(t,n.props)).ref=ga(e,t,n),r.return=e,r):((r=Ic(n.type,n.key,n.props,null,e.mode,r)).ref=ga(e,t,n),r.return=e,r)}function d(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Nc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,r,a){return null===t||7!==t.tag?((t=Dc(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Fc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ic(t.type,t.key,t.props,null,e.mode,n)).ref=ga(e,null,t),n.return=e,n;case k:return(t=Nc(t,e.mode,n)).return=e,t;case M:return p(e,(0,t._init)(t._payload),n)}if(te(t)||D(t))return(t=Dc(t,e.mode,n,null)).return=e,t;xa(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case k:return n.key===i?d(e,t,n,r):null;case M:return f(e,t,(i=n._init)(n._payload),r)}if(te(n)||D(n))return null!==i?null:u(e,t,n,r,null);xa(e,n)}return null}function m(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return d(t,e=e.get(null===r.key?n:r.key)||null,r,i);case M:return m(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||D(r))return u(t,e=e.get(n)||null,r,i,null);xa(t,r)}return null}function h(i,a,s,l){for(var c=null,d=null,u=a,h=a=0,g=null;null!==u&&h<s.length;h++){u.index>h?(g=u,u=null):g=u.sibling;var x=f(i,u,s[h],l);if(null===x){null===u&&(u=g);break}e&&u&&null===x.alternate&&t(i,u),a=o(x,a,h),null===d?c=x:d.sibling=x,d=x,u=g}if(h===s.length)return n(i,u),ia&&Xi(i,h),c;if(null===u){for(;h<s.length;h++)null!==(u=p(i,s[h],l))&&(a=o(u,a,h),null===d?c=u:d.sibling=u,d=u);return ia&&Xi(i,h),c}for(u=r(i,u);h<s.length;h++)null!==(g=m(u,i,h,s[h],l))&&(e&&null!==g.alternate&&u.delete(null===g.key?h:g.key),a=o(g,a,h),null===d?c=g:d.sibling=g,d=g);return e&&u.forEach((function(e){return t(i,e)})),ia&&Xi(i,h),c}function g(i,s,l,c){var d=D(l);if("function"!==typeof d)throw Error(a(150));if(null==(l=d.call(l)))throw Error(a(151));for(var u=d=null,h=s,g=s=0,x=null,b=l.next();null!==h&&!b.done;g++,b=l.next()){h.index>g?(x=h,h=null):x=h.sibling;var y=f(i,h,b.value,c);if(null===y){null===h&&(h=x);break}e&&h&&null===y.alternate&&t(i,h),s=o(y,s,g),null===u?d=y:u.sibling=y,u=y,h=x}if(b.done)return n(i,h),ia&&Xi(i,g),d;if(null===h){for(;!b.done;g++,b=l.next())null!==(b=p(i,b.value,c))&&(s=o(b,s,g),null===u?d=b:u.sibling=b,u=b);return ia&&Xi(i,g),d}for(h=r(i,h);!b.done;g++,b=l.next())null!==(b=m(h,i,g,b.value,c))&&(e&&null!==b.alternate&&h.delete(null===b.key?g:b.key),s=o(b,s,g),null===u?d=b:u.sibling=b,u=b);return e&&h.forEach((function(e){return t(i,e)})),ia&&Xi(i,g),d}return function e(r,a,o,l){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var c=o.key,d=a;null!==d;){if(d.key===c){if((c=o.type)===S){if(7===d.tag){n(r,d.sibling),(a=i(d,o.props.children)).return=r,r=a;break e}}else if(d.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===M&&ba(c)===d.type){n(r,d.sibling),(a=i(d,o.props)).ref=ga(r,d,o),a.return=r,r=a;break e}n(r,d);break}t(r,d),d=d.sibling}o.type===S?((a=Dc(o.props.children,r.mode,l,o.key)).return=r,r=a):((l=Ic(o.type,o.key,o.props,null,r.mode,l)).ref=ga(r,a,o),l.return=r,r=l)}return s(r);case k:e:{for(d=o.key;null!==a;){if(a.key===d){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){n(r,a.sibling),(a=i(a,o.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Nc(o,r.mode,l)).return=r,r=a}return s(r);case M:return e(r,a,(d=o._init)(o._payload),l)}if(te(o))return h(r,a,o,l);if(D(o))return g(r,a,o,l);xa(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(n(r,a.sibling),(a=i(a,o)).return=r,r=a):(n(r,a),(a=Fc(o,r.mode,l)).return=r,r=a),s(r)):n(r,a)}}var va=ya(!0),wa=ya(!1),ka=ji(null),Sa=null,ja=null,Aa=null;function Ca(){Aa=ja=Sa=null}function Ea(e){var t=ka.current;Ai(ka),e._currentValue=t}function Ra(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pa(e,t){Sa=e,Aa=ja=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(ys=!0),e.firstContext=null)}function Oa(e){var t=e._currentValue;if(Aa!==e)if(e={context:e,memoizedValue:t,next:null},null===ja){if(null===Sa)throw Error(a(308));ja=e,Sa.dependencies={lanes:0,firstContext:e}}else ja=ja.next=e;return t}var Ta=null;function Ma(e){null===Ta?Ta=[e]:Ta.push(e)}function za(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Ma(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ia(e,r)}function Ia(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Da=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Na(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Rl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ia(e,n)}return null===(i=r.interleaved)?(t.next=t,Ma(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ia(e,n)}function qa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wa(e,t,n,r){var i=e.updateQueue;Da=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var d=e.alternate;null!==d&&((s=(d=d.updateQueue).lastBaseUpdate)!==o&&(null===s?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(null!==a){var u=i.baseState;for(o=0,d=c=l=null,s=a;;){var p=s.lane,f=s.eventTime;if((r&p)===p){null!==d&&(d=d.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,h=s;switch(p=t,f=n,h.tag){case 1:if("function"===typeof(m=h.payload)){u=m.call(f,u,p);break e}u=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=h.payload)?m.call(f,u,p):m)||void 0===p)break e;u=F({},u,p);break e;case 2:Da=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===d?(c=d=f,l=u):d=d.next=f,o|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===d&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Ll|=o,e.lanes=o,e.memoizedState=u}}function _a(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(a(191,i));i.call(r)}}}var Ua={},Ga=ji(Ua),Ka=ji(Ua),Ya=ji(Ua);function Va(e){if(e===Ua)throw Error(a(174));return e}function Ja(e,t){switch(Ci(Ya,t),Ci(Ka,e),Ci(Ga,Ua),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ai(Ga),Ci(Ga,t)}function Qa(){Ai(Ga),Ai(Ka),Ai(Ya)}function Za(e){Va(Ya.current);var t=Va(Ga.current),n=le(t,e.type);t!==n&&(Ci(Ka,e),Ci(Ga,n))}function Xa(e){Ka.current===e&&(Ai(Ga),Ai(Ka))}var $a=ji(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=v.ReactCurrentDispatcher,io=v.ReactCurrentBatchConfig,ao=0,oo=null,so=null,lo=null,co=!1,uo=!1,po=0,fo=0;function mo(){throw Error(a(321))}function ho(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,o){if(ao=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?$o:es,e=n(r,i),uo){o=0;do{if(uo=!1,po=0,25<=o)throw Error(a(301));o+=1,lo=so=null,t.updateQueue=null,ro.current=ts,e=n(r,i)}while(uo)}if(ro.current=Xo,t=null!==so&&null!==so.next,ao=0,lo=so=oo=null,co=!1,t)throw Error(a(300));return e}function xo(){var e=0!==po;return po=0,e}function bo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===lo?oo.memoizedState=lo=e:lo=lo.next=e,lo}function yo(){if(null===so){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=so.next;var t=null===lo?oo.memoizedState:lo.next;if(null!==t)lo=t,so=e;else{if(null===e)throw Error(a(310));e={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},null===lo?oo.memoizedState=lo=e:lo=lo.next=e}return lo}function vo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=yo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=so,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var l=s=null,c=null,d=o;do{var u=d.lane;if((ao&u)===u)null!==c&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,oo.lanes|=u,Ll|=u}d=d.next}while(null!==d&&d!==o);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(ys=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,oo.lanes|=o,Ll|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=yo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);sr(o,t.memoizedState)||(ys=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function So(){}function jo(e,t){var n=oo,r=yo(),i=t(),o=!sr(r.memoizedState,i);if(o&&(r.memoizedState=i,ys=!0),r=r.queue,Lo(Eo.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==lo&&1&lo.memoizedState.tag){if(n.flags|=2048,To(9,Co.bind(null,n,r,i,t),void 0,null),null===Pl)throw Error(a(349));0!==(30&ao)||Ao(n,t,i)}return i}function Ao(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Co(e,t,n,r){t.value=n,t.getSnapshot=r,Ro(t)&&Po(e)}function Eo(e,t,n){return n((function(){Ro(t)&&Po(e)}))}function Ro(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Po(e){var t=Ia(e,1);null!==t&&nc(t,e,1,-1)}function Oo(e){var t=bo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},t.queue=e,e=e.dispatch=Vo.bind(null,oo,e),[t.memoizedState,e]}function To(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Mo(){return yo().memoizedState}function zo(e,t,n,r){var i=bo();oo.flags|=e,i.memoizedState=To(1|t,n,void 0,void 0===r?null:r)}function Io(e,t,n,r){var i=yo();r=void 0===r?null:r;var a=void 0;if(null!==so){var o=so.memoizedState;if(a=o.destroy,null!==r&&ho(r,o.deps))return void(i.memoizedState=To(t,n,a,r))}oo.flags|=e,i.memoizedState=To(1|t,n,a,r)}function Do(e,t){return zo(8390656,8,e,t)}function Lo(e,t){return Io(2048,8,e,t)}function Fo(e,t){return Io(4,2,e,t)}function No(e,t){return Io(4,4,e,t)}function Bo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function qo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Io(4,4,Bo.bind(null,t,e),n)}function Ho(){}function Wo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _o(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ho(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uo(e,t,n){return 0===(21&ao)?(e.baseState&&(e.baseState=!1,ys=!0),e.memoizedState=n):(sr(n,t)||(n=ht(),oo.lanes|=n,Ll|=n,e.baseState=!0),t)}function Go(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{yt=n,io.transition=r}}function Ko(){return yo().memoizedState}function Yo(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jo(e))Qo(t,n);else if(null!==(n=za(e,t,n,r))){nc(n,e,r,ec()),Zo(n,t,r)}}function Vo(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jo(e))Qo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,o)){var l=t.interleaved;return null===l?(i.next=i,Ma(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=za(e,t,i,r))&&(nc(n,e,r,i=ec()),Zo(n,t,r))}}function Jo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Qo(e,t){uo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Xo={readContext:Oa,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useInsertionEffect:mo,useLayoutEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useMutableSource:mo,useSyncExternalStore:mo,useId:mo,unstable_isNewReconciler:!1},$o={readContext:Oa,useCallback:function(e,t){return bo().memoizedState=[e,void 0===t?null:t],e},useContext:Oa,useEffect:Do,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,zo(4194308,4,Bo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return zo(4,2,e,t)},useMemo:function(e,t){var n=bo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yo.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bo().memoizedState=e},useState:Oo,useDebugValue:Ho,useDeferredValue:function(e){return bo().memoizedState=e},useTransition:function(){var e=Oo(!1),t=e[0];return e=Go.bind(null,e[1]),bo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,i=bo();if(ia){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Pl)throw Error(a(349));0!==(30&ao)||Ao(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Do(Eo.bind(null,r,o,e),[e]),r.flags|=2048,To(9,Co.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bo(),t=Pl.identifierPrefix;if(ia){var n=Zi;t=":"+t+"R"+(n=(Qi&~(1<<32-ot(Qi)-1)).toString(32)+n),0<(n=po++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Oa,useCallback:Wo,useContext:Oa,useEffect:Lo,useImperativeHandle:qo,useInsertionEffect:Fo,useLayoutEffect:No,useMemo:_o,useReducer:wo,useRef:Mo,useState:function(){return wo(vo)},useDebugValue:Ho,useDeferredValue:function(e){return Uo(yo(),so.memoizedState,e)},useTransition:function(){return[wo(vo)[0],yo().memoizedState]},useMutableSource:So,useSyncExternalStore:jo,useId:Ko,unstable_isNewReconciler:!1},ts={readContext:Oa,useCallback:Wo,useContext:Oa,useEffect:Lo,useImperativeHandle:qo,useInsertionEffect:Fo,useLayoutEffect:No,useMemo:_o,useReducer:ko,useRef:Mo,useState:function(){return ko(vo)},useDebugValue:Ho,useDeferredValue:function(e){var t=yo();return null===so?t.memoizedState=e:Uo(t,so.memoizedState,e)},useTransition:function(){return[ko(vo)[0],yo().memoizedState]},useMutableSource:So,useSyncExternalStore:jo,useId:Ko,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=F({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=Na(r,i);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ba(e,a,i))&&(nc(t,e,i,r),qa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=Na(r,i);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ba(e,a,i))&&(nc(t,e,i,r),qa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Na(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Ba(e,i,r))&&(nc(t,e,r,n),qa(t,e,r))}};function as(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,a))}function os(e,t,n){var r=!1,i=Ei,a=t.contextType;return"object"===typeof a&&null!==a?a=Oa(a):(i=Mi(t)?Oi:Ri.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ti(e,i):Ei),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},La(e);var a=t.contextType;"object"===typeof a&&null!==a?i.context=Oa(a):(a=Mi(t)?Oi:Ri.current,i.context=Ti(e,a)),i.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rs(e,t,a,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),Wa(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=H(r),r=r.return}while(r);var i=n}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function us(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=Na(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ul||(Ul=!0,Gl=r),us(0,t)},n}function ms(e,t,n){(n=Na(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){us(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){us(0,t),"function"!==typeof r&&(null===Kl?Kl=new Set([this]):Kl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function hs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ac.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function xs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Na(-1,1)).tag=2,Ba(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var bs=v.ReactCurrentOwner,ys=!1;function vs(e,t,n,r){t.child=null===e?wa(t,null,n,r):va(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var a=t.ref;return Pa(t,i),r=go(e,t,n,r,a,i),n=xo(),null===e||ys?(ia&&n&&ea(t),t.flags|=1,vs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Us(e,t,i))}function ks(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||Mc(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ic(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ss(e,t,a,r,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(o,r)&&e.ref===t.ref)return Us(e,t,i)}return t.flags|=1,(e=zc(a,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(lr(a,r)&&e.ref===t.ref){if(ys=!1,t.pendingProps=r=a,0===(e.lanes&i))return t.lanes=e.lanes,Us(e,t,i);0!==(131072&e.flags)&&(ys=!0)}}return Cs(e,t,n,r,i)}function js(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ci(zl,Ml),Ml|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ci(zl,Ml),Ml|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Ci(zl,Ml),Ml|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ci(zl,Ml),Ml|=r;return vs(e,t,i,n),t.child}function As(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,r,i){var a=Mi(n)?Oi:Ri.current;return a=Ti(t,a),Pa(t,i),n=go(e,t,n,r,a,i),r=xo(),null===e||ys?(ia&&r&&ea(t),t.flags|=1,vs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Us(e,t,i))}function Es(e,t,n,r,i){if(Mi(n)){var a=!0;Li(t)}else a=!1;if(Pa(t,i),null===t.stateNode)_s(e,t),os(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=Oa(c):c=Ti(t,c=Mi(n)?Oi:Ri.current);var d=n.getDerivedStateFromProps,u="function"===typeof d||"function"===typeof o.getSnapshotBeforeUpdate;u||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,o,r,c),Da=!1;var p=t.memoizedState;o.state=p,Wa(t,r,o,i),l=t.memoizedState,s!==r||p!==l||Pi.current||Da?("function"===typeof d&&(rs(t,n,d,r),l=t.memoizedState),(s=Da||as(t,n,s,r,p,l,c))?(u||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Fa(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),o.props=c,u=t.pendingProps,p=o.context,"object"===typeof(l=n.contextType)&&null!==l?l=Oa(l):l=Ti(t,l=Mi(n)?Oi:Ri.current);var f=n.getDerivedStateFromProps;(d="function"===typeof f||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==u||p!==l)&&ss(t,o,r,l),Da=!1,p=t.memoizedState,o.state=p,Wa(t,r,o,i);var m=t.memoizedState;s!==u||p!==m||Pi.current||Da?("function"===typeof f&&(rs(t,n,f,r),m=t.memoizedState),(c=Da||as(t,n,c,r,p,m,l)||!1)?(d||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,m,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,m,l)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=l,r=c):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Rs(e,t,n,r,a,i)}function Rs(e,t,n,r,i,a){As(e,t);var o=0!==(128&t.flags);if(!r&&!o)return i&&Fi(t,n,!1),Us(e,t,a);r=t.stateNode,bs.current=t;var s=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=va(t,e.child,null,a),t.child=va(t,null,s,a)):vs(e,t,s,a),t.memoizedState=r.state,i&&Fi(t,n,!0),t.child}function Ps(e){var t=e.stateNode;t.pendingContext?Ii(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ii(0,t.context,!1),Ja(e,t.containerInfo)}function Os(e,t,n,r,i){return fa(),ma(i),t.flags|=256,vs(e,t,n,r),t.child}var Ts,Ms,zs,Is,Ds={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fs(e,t,n){var r,i=t.pendingProps,o=$a.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ci($a,1&o),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Lc(l,i,0,null),e=Dc(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ls(n),t.memoizedState=Ds,e):Ns(t,l));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,s){if(n)return 256&t.flags?(t.flags&=-257,Bs(e,t,s,r=ds(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Lc({mode:"visible",children:r.children},i,0,null),(o=Dc(o,i,s,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&va(t,e.child,null,s),t.child.memoizedState=Ls(s),t.memoizedState=Ds,o);if(0===(1&t.mode))return Bs(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Bs(e,t,s,r=ds(o=Error(a(419)),r,void 0))}if(l=0!==(s&e.childLanes),ys||l){if(null!==(r=Pl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==o.retryLane&&(o.retryLane=i,Ia(e,i),nc(r,e,i,-1))}return hc(),Bs(e,t,s,r=ds(Error(a(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Ec.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ra=ci(i.nextSibling),na=t,ia=!0,aa=null,null!==e&&(Yi[Vi++]=Qi,Yi[Vi++]=Zi,Yi[Vi++]=Ji,Qi=e.id,Zi=e.overflow,Ji=t),t=Ns(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,o,n);if(s){s=i.fallback,l=t.mode,r=(o=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=zc(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==r?s=zc(r,s):(s=Dc(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Ls(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ds,i}return e=(s=e.child).sibling,i=zc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ns(e,t){return(t=Lc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Bs(e,t,n,r){return null!==r&&ma(r),va(t,e.child,null,n),(e=Ns(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function qs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ra(e.return,t,n)}function Hs(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Ws(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(vs(e,t,r.children,n),0!==(2&(r=$a.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&qs(e,n,t);else if(19===e.tag)qs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ci($a,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Hs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===eo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Hs(t,!0,n,null,a);break;case"together":Hs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _s(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Us(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ll|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=zc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=zc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Gs(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ks(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ys(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ks(t),null;case 1:case 17:return Mi(t.type)&&zi(),Ks(t),null;case 3:return r=t.stateNode,Qa(),Ai(Pi),Ai(Ri),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ua(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(oc(aa),aa=null))),Ms(e,t),Ks(t),null;case 5:Xa(t);var i=Va(Ya.current);if(n=t.type,null!==e&&null!=t.stateNode)zs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Ks(t),null}if(e=Va(Ga.current),ua(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pi]=t,r[fi]=o,e=0!==(1&t.mode),n){case"dialog":Br("cancel",r),Br("close",r);break;case"iframe":case"object":case"embed":Br("load",r);break;case"video":case"audio":for(i=0;i<Dr.length;i++)Br(Dr[i],r);break;case"source":Br("error",r);break;case"img":case"image":case"link":Br("error",r),Br("load",r);break;case"details":Br("toggle",r);break;case"input":Q(r,o),Br("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Br("invalid",r);break;case"textarea":ie(r,o),Br("invalid",r)}for(var l in be(n,o),i=null,o)if(o.hasOwnProperty(l)){var c=o[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==o.suppressHydrationWarning&&Xr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Xr(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Br("scroll",r)}switch(n){case"input":K(r),$(r,o,!0);break;case"textarea":K(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=$r)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pi]=t,e[fi]=r,Ts(e,t,!1,!1),t.stateNode=e;e:{switch(l=ye(n,r),n){case"dialog":Br("cancel",e),Br("close",e),i=r;break;case"iframe":case"object":case"embed":Br("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dr.length;i++)Br(Dr[i],e);i=r;break;case"source":Br("error",e),i=r;break;case"img":case"image":case"link":Br("error",e),Br("load",e),i=r;break;case"details":Br("toggle",e),i=r;break;case"input":Q(e,r),i=J(e,r),Br("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=F({},r,{value:void 0}),Br("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Br("invalid",e)}for(o in be(n,i),c=i)if(c.hasOwnProperty(o)){var d=c[o];"style"===o?ge(e,d):"dangerouslySetInnerHTML"===o?null!=(d=d?d.__html:void 0)&&ue(e,d):"children"===o?"string"===typeof d?("textarea"!==n||""!==d)&&pe(e,d):"number"===typeof d&&pe(e,""+d):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(s.hasOwnProperty(o)?null!=d&&"onScroll"===o&&Br("scroll",e):null!=d&&y(e,o,d,l))}switch(n){case"input":K(e),$(e,r,!1);break;case"textarea":K(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+U(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ks(t),null;case 6:if(e&&null!=t.stateNode)Is(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Va(Ya.current),Va(Ga.current),ua(t)){if(r=t.stateNode,n=t.memoizedProps,r[pi]=t,(o=r.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pi]=t,t.stateNode=r}return Ks(t),null;case 13:if(Ai($a),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ia&&null!==ra&&0!==(1&t.mode)&&0===(128&t.flags))pa(),fa(),t.flags|=98560,o=!1;else if(o=ua(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[pi]=t}else fa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ks(t),o=!1}else null!==aa&&(oc(aa),aa=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&$a.current)?0===Il&&(Il=3):hc())),null!==t.updateQueue&&(t.flags|=4),Ks(t),null);case 4:return Qa(),Ms(e,t),null===e&&Wr(t.stateNode.containerInfo),Ks(t),null;case 10:return Ea(t.type._context),Ks(t),null;case 19:if(Ai($a),null===(o=t.memoizedState))return Ks(t),null;if(r=0!==(128&t.flags),null===(l=o.rendering))if(r)Gs(o,!1);else{if(0!==Il||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=eo(e))){for(t.flags|=128,Gs(o,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(l=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ci($a,1&$a.current|2),t.child}e=e.sibling}null!==o.tail&&Ze()>Wl&&(t.flags|=128,r=!0,Gs(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Gs(o,!0),null===o.tail&&"hidden"===o.tailMode&&!l.alternate&&!ia)return Ks(t),null}else 2*Ze()-o.renderingStartTime>Wl&&1073741824!==n&&(t.flags|=128,r=!0,Gs(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=o.last)?n.sibling=l:t.child=l,o.last=l)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ze(),t.sibling=null,n=$a.current,Ci($a,r?1&n|2:1&n),t):(Ks(t),null);case 22:case 23:return uc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ml)&&(Ks(t),6&t.subtreeFlags&&(t.flags|=8192)):Ks(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Vs(e,t){switch(ta(t),t.tag){case 1:return Mi(t.type)&&zi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qa(),Ai(Pi),Ai(Ri),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Xa(t),null;case 13:if(Ai($a),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));fa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ai($a),null;case 4:return Qa(),null;case 10:return Ea(t.type._context),null;case 22:case 23:return uc(),null;default:return null}}Ts=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ms=function(){},zs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Va(Ga.current);var a,o=null;switch(n){case"input":i=J(e,i),r=J(e,r),o=[];break;case"select":i=F({},i,{value:void 0}),r=F({},r,{value:void 0}),o=[];break;case"textarea":i=re(e,i),r=re(e,r),o=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=$r)}for(d in be(n,r),n=null,i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&null!=i[d])if("style"===d){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==d&&"children"!==d&&"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(s.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(l=null!=i?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(null!=c||null!=l))if("style"===d)if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(d,n)),n=c;else"dangerouslySetInnerHTML"===d?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(o=o||[]).push(d,c)):"children"===d?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(d,""+c):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&(s.hasOwnProperty(d)?(null!=c&&"onScroll"===d&&Br("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}},Is=function(e,t,n,r){n!==r&&(t.flags|=4)};var Js=!1,Qs=!1,Zs="function"===typeof WeakSet?WeakSet:Set,Xs=null;function $s(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){jc(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){jc(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&el(t,n,a)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pi],delete t[fi],delete t[hi],delete t[gi],delete t[xi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ol(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=$r));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var dl=null,ul=!1;function pl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Qs||$s(n,t);case 6:var r=dl,i=ul;dl=null,pl(e,t,n),ul=i,null!==(dl=r)&&(ul?(e=dl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):dl.removeChild(n.stateNode));break;case 18:null!==dl&&(ul?(e=dl,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Wt(e)):li(dl,n.stateNode));break;case 4:r=dl,i=ul,dl=n.stateNode.containerInfo,ul=!0,pl(e,t,n),dl=r,ul=i;break;case 0:case 11:case 14:case 15:if(!Qs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&el(n,t,o),i=i.next}while(i!==r)}pl(e,t,n);break;case 1:if(!Qs&&($s(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){jc(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Qs=(r=Qs)||null!==n.memoizedState,pl(e,t,n),Qs=r):pl(e,t,n);break;default:pl(e,t,n)}}function ml(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Zs),t.forEach((function(t){var r=Rc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function hl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:dl=l.stateNode,ul=!1;break e;case 3:case 4:dl=l.stateNode.containerInfo,ul=!0;break e}l=l.return}if(null===dl)throw Error(a(160));fl(o,s,i),dl=null,ul=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(d){jc(i,t,d)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hl(t,e),xl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){jc(e,e.return,g)}try{nl(5,e,e.return)}catch(g){jc(e,e.return,g)}}break;case 1:hl(t,e),xl(e),512&r&&null!==n&&$s(n,n.return);break;case 5:if(hl(t,e),xl(e),512&r&&null!==n&&$s(n,n.return),32&e.flags){var i=e.stateNode;try{pe(i,"")}catch(g){jc(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,s=null!==n?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===o.type&&null!=o.name&&Z(i,o),ye(l,s);var d=ye(l,o);for(s=0;s<c.length;s+=2){var u=c[s],p=c[s+1];"style"===u?ge(i,p):"dangerouslySetInnerHTML"===u?ue(i,p):"children"===u?pe(i,p):y(i,u,p,d)}switch(l){case"input":X(i,o);break;case"textarea":ae(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;null!=m?ne(i,!!o.multiple,m,!1):f!==!!o.multiple&&(null!=o.defaultValue?ne(i,!!o.multiple,o.defaultValue,!0):ne(i,!!o.multiple,o.multiple?[]:"",!1))}i[fi]=o}catch(g){jc(e,e.return,g)}}break;case 6:if(hl(t,e),xl(e),4&r){if(null===e.stateNode)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){jc(e,e.return,g)}}break;case 3:if(hl(t,e),xl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Wt(t.containerInfo)}catch(g){jc(e,e.return,g)}break;case 4:default:hl(t,e),xl(e);break;case 13:hl(t,e),xl(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(Hl=Ze())),4&r&&ml(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(Qs=(d=Qs)||u,hl(t,e),Qs=d):hl(t,e),xl(e),8192&r){if(d=null!==e.memoizedState,(e.stateNode.isHidden=d)&&!u&&0!==(1&e.mode))for(Xs=e,u=e.child;null!==u;){for(p=Xs=u;null!==Xs;){switch(m=(f=Xs).child,f.tag){case 0:case 11:case 14:case 15:nl(4,f,f.return);break;case 1:$s(f,f.return);var h=f.stateNode;if("function"===typeof h.componentWillUnmount){r=f,n=f.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){jc(r,n,g)}}break;case 5:$s(f,f.return);break;case 22:if(null!==f.memoizedState){wl(p);continue}}null!==m?(m.return=f,Xs=m):wl(p)}u=u.sibling}e:for(u=null,p=e;;){if(5===p.tag){if(null===u){u=p;try{i=p.stateNode,d?"function"===typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=he("display",s))}catch(g){jc(e,e.return,g)}}}else if(6===p.tag){if(null===u)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(g){jc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:hl(t,e),xl(e),4&r&&ml(e);case 21:}}function xl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ol(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(pe(i,""),r.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;ll(e,sl(e),o);break;default:throw Error(a(161))}}catch(s){jc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bl(e,t,n){Xs=e,yl(e,t,n)}function yl(e,t,n){for(var r=0!==(1&e.mode);null!==Xs;){var i=Xs,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||Js;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Qs;s=Js;var c=Qs;if(Js=o,(Qs=l)&&!c)for(Xs=i;null!==Xs;)l=(o=Xs).child,22===o.tag&&null!==o.memoizedState?kl(i):null!==l?(l.return=o,Xs=l):kl(i);for(;null!==a;)Xs=a,yl(a,t,n),a=a.sibling;Xs=i,Js=s,Qs=c}vl(e)}else 0!==(8772&i.subtreeFlags)&&null!==a?(a.return=i,Xs=a):vl(e)}}function vl(e){for(;null!==Xs;){var t=Xs;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Qs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Qs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&_a(t,o,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}_a(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var d=t.alternate;if(null!==d){var u=d.memoizedState;if(null!==u){var p=u.dehydrated;null!==p&&Wt(p)}}}break;default:throw Error(a(163))}Qs||512&t.flags&&il(t)}catch(f){jc(t,t.return,f)}}if(t===e){Xs=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xs=n;break}Xs=t.return}}function wl(e){for(;null!==Xs;){var t=Xs;if(t===e){Xs=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xs=n;break}Xs=t.return}}function kl(e){for(;null!==Xs;){var t=Xs;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){jc(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){jc(t,i,l)}}var a=t.return;try{il(t)}catch(l){jc(t,a,l)}break;case 5:var o=t.return;try{il(t)}catch(l){jc(t,o,l)}}}catch(l){jc(t,t.return,l)}if(t===e){Xs=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Xs=s;break}Xs=t.return}}var Sl,jl=Math.ceil,Al=v.ReactCurrentDispatcher,Cl=v.ReactCurrentOwner,El=v.ReactCurrentBatchConfig,Rl=0,Pl=null,Ol=null,Tl=0,Ml=0,zl=ji(0),Il=0,Dl=null,Ll=0,Fl=0,Nl=0,Bl=null,ql=null,Hl=0,Wl=1/0,_l=null,Ul=!1,Gl=null,Kl=null,Yl=!1,Vl=null,Jl=0,Ql=0,Zl=null,Xl=-1,$l=0;function ec(){return 0!==(6&Rl)?Ze():-1!==Xl?Xl:Xl=Ze()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Rl)&&0!==Tl?Tl&-Tl:null!==ha.transition?(0===$l&&($l=ht()),$l):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function nc(e,t,n,r){if(50<Ql)throw Ql=0,Zl=null,Error(a(185));xt(e,n,r),0!==(2&Rl)&&e===Pl||(e===Pl&&(0===(2&Rl)&&(Fl|=n),4===Il&&sc(e,Tl)),rc(e,r),1===n&&0===Rl&&0===(1&t.mode)&&(Wl=Ze()+500,Bi&&Wi()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=ft(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var r=pt(e,e===Pl?Tl:0);if(0===r)null!==n&&Ve(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ve(n),1===t)0===e.tag?function(e){Bi=!0,Hi(e)}(lc.bind(null,e)):Hi(lc.bind(null,e)),oi((function(){0===(6&Rl)&&Wi()})),n=null;else{switch(vt(r)){case 1:n=$e;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Xl=-1,$l=0,0!==(6&Rl))throw Error(a(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pt(e,e===Pl?Tl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=Rl;Rl|=2;var o=mc();for(Pl===e&&Tl===t||(_l=null,Wl=Ze()+500,pc(e,t));;)try{bc();break}catch(l){fc(e,l)}Ca(),Al.current=o,Rl=i,null!==Ol?t=0:(Pl=null,Tl=0,t=Il)}if(0!==t){if(2===t&&(0!==(i=mt(e))&&(r=i,t=ac(e,i))),1===t)throw n=Dl,pc(e,0),sc(e,r),rc(e,Ze()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!sr(a(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(o=mt(e))&&(r=o,t=ac(e,o))),1===t))throw n=Dl,pc(e,0),sc(e,r),rc(e,Ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:wc(e,ql,_l);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Hl+500-Ze())){if(0!==pt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wc.bind(null,e,ql,_l),t);break}wc(e,ql,_l);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ot(r);o=1<<s,(s=t[s])>i&&(i=s),r&=~o}if(r=i,10<(r=(120>(r=Ze()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jl(r/1960))-r)){e.timeoutHandle=ri(wc.bind(null,e,ql,_l),r);break}wc(e,ql,_l);break;default:throw Error(a(329))}}}return rc(e,Ze()),e.callbackNode===n?ic.bind(null,e):null}function ac(e,t){var n=Bl;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=ql,ql=n,null!==t&&oc(t)),e}function oc(e){null===ql?ql=e:ql.push.apply(ql,e)}function sc(e,t){for(t&=~Nl,t&=~Fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&Rl))throw Error(a(327));kc();var t=pt(e,0);if(0===(1&t))return rc(e,Ze()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=mt(e);0!==r&&(t=r,n=ac(e,r))}if(1===n)throw n=Dl,pc(e,0),sc(e,t),rc(e,Ze()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,ql,_l),rc(e,Ze()),null}function cc(e,t){var n=Rl;Rl|=1;try{return e(t)}finally{0===(Rl=n)&&(Wl=Ze()+500,Bi&&Wi())}}function dc(e){null!==Vl&&0===Vl.tag&&0===(6&Rl)&&kc();var t=Rl;Rl|=1;var n=El.transition,r=yt;try{if(El.transition=null,yt=1,e)return e()}finally{yt=r,El.transition=n,0===(6&(Rl=t))&&Wi()}}function uc(){Ml=zl.current,Ai(zl)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Ol)for(n=Ol.return;null!==n;){var r=n;switch(ta(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&zi();break;case 3:Qa(),Ai(Pi),Ai(Ri),no();break;case 5:Xa(r);break;case 4:Qa();break;case 13:case 19:Ai($a);break;case 10:Ea(r.type._context);break;case 22:case 23:uc()}n=n.return}if(Pl=e,Ol=e=zc(e.current,null),Tl=Ml=t,Il=0,Dl=null,Nl=Fl=Ll=0,ql=Bl=null,null!==Ta){for(t=0;t<Ta.length;t++)if(null!==(r=(n=Ta[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Ta=null}return e}function fc(e,t){for(;;){var n=Ol;try{if(Ca(),ro.current=Xo,co){for(var r=oo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}co=!1}if(ao=0,lo=so=oo=null,uo=!1,po=0,Cl.current=null,null===n||null===n.return){Il=1,Dl=t,Ol=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=Tl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var d=c,u=l,p=u.tag;if(0===(1&u.mode)&&(0===p||11===p||15===p)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=gs(s);if(null!==m){m.flags&=-257,xs(m,s,l,0,t),1&m.mode&&hs(o,d,t),c=d;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(c),t.updateQueue=g}else h.add(c);break e}if(0===(1&t)){hs(o,d,t),hc();break e}c=Error(a(426))}else if(ia&&1&l.mode){var x=gs(s);if(null!==x){0===(65536&x.flags)&&(x.flags|=256),xs(x,s,l,0,t),ma(cs(c,l));break e}}o=c=cs(c,l),4!==Il&&(Il=2),null===Bl?Bl=[o]:Bl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ha(o,fs(0,c,t));break e;case 1:l=c;var b=o.type,y=o.stateNode;if(0===(128&o.flags)&&("function"===typeof b.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Kl||!Kl.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t,Ha(o,ms(o,l,t));break e}}o=o.return}while(null!==o)}vc(n)}catch(v){t=v,Ol===n&&null!==n&&(Ol=n=n.return);continue}break}}function mc(){var e=Al.current;return Al.current=Xo,null===e?Xo:e}function hc(){0!==Il&&3!==Il&&2!==Il||(Il=4),null===Pl||0===(268435455&Ll)&&0===(268435455&Fl)||sc(Pl,Tl)}function gc(e,t){var n=Rl;Rl|=2;var r=mc();for(Pl===e&&Tl===t||(_l=null,pc(e,t));;)try{xc();break}catch(i){fc(e,i)}if(Ca(),Rl=n,Al.current=r,null!==Ol)throw Error(a(261));return Pl=null,Tl=0,Il}function xc(){for(;null!==Ol;)yc(Ol)}function bc(){for(;null!==Ol&&!Je();)yc(Ol)}function yc(e){var t=Sl(e.alternate,e,Ml);e.memoizedProps=e.pendingProps,null===t?vc(e):Ol=t,Cl.current=null}function vc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ys(n,t,Ml)))return void(Ol=n)}else{if(null!==(n=Vs(n,t)))return n.flags&=32767,void(Ol=n);if(null===e)return Il=6,void(Ol=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ol=t);Ol=t=e}while(null!==t);0===Il&&(Il=5)}function wc(e,t,n){var r=yt,i=El.transition;try{El.transition=null,yt=1,function(e,t,n,r){do{kc()}while(null!==Vl);if(0!==(6&Rl))throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,o),e===Pl&&(Ol=Pl=null,Tl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Yl||(Yl=!0,Pc(tt,(function(){return kc(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=El.transition,El.transition=null;var s=yt;yt=1;var l=Rl;Rl|=4,Cl.current=null,function(e,t){if(ei=Ut,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var s=0,l=-1,c=-1,d=0,u=0,p=e,f=null;t:for(;;){for(var m;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==o||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(m=p.firstChild);)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++d===i&&(l=s),f===o&&++u===r&&(c=s),null!==(m=p.nextSibling))break;f=(p=f).parentNode}p=m}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ut=!1,Xs=t;null!==Xs;)if(e=(t=Xs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xs=e;else for(;null!==Xs;){t=Xs;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,x=h.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),x);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=t.stateNode.containerInfo;1===v.nodeType?v.textContent="":9===v.nodeType&&v.documentElement&&v.removeChild(v.documentElement);break;default:throw Error(a(163))}}catch(w){jc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xs=e;break}Xs=t.return}h=tl,tl=!1}(e,n),gl(n,e),mr(ti),Ut=!!ei,ti=ei=null,e.current=n,bl(n,e,i),Qe(),Rl=l,yt=s,El.transition=o}else e.current=n;if(Yl&&(Yl=!1,Vl=e,Jl=i),o=e.pendingLanes,0===o&&(Kl=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Ze()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ul)throw Ul=!1,e=Gl,Gl=null,e;0!==(1&Jl)&&0!==e.tag&&kc(),o=e.pendingLanes,0!==(1&o)?e===Zl?Ql++:(Ql=0,Zl=e):Ql=0,Wi()}(e,t,n,r)}finally{El.transition=i,yt=r}return null}function kc(){if(null!==Vl){var e=vt(Jl),t=El.transition,n=yt;try{if(El.transition=null,yt=16>e?16:e,null===Vl)var r=!1;else{if(e=Vl,Vl=null,Jl=0,0!==(6&Rl))throw Error(a(331));var i=Rl;for(Rl|=4,Xs=e.current;null!==Xs;){var o=Xs,s=o.child;if(0!==(16&Xs.flags)){var l=o.deletions;if(null!==l){for(var c=0;c<l.length;c++){var d=l[c];for(Xs=d;null!==Xs;){var u=Xs;switch(u.tag){case 0:case 11:case 15:nl(8,u,o)}var p=u.child;if(null!==p)p.return=u,Xs=p;else for(;null!==Xs;){var f=(u=Xs).sibling,m=u.return;if(al(u),u===d){Xs=null;break}if(null!==f){f.return=m,Xs=f;break}Xs=m}}}var h=o.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(null!==g)}}Xs=o}}if(0!==(2064&o.subtreeFlags)&&null!==s)s.return=o,Xs=s;else e:for(;null!==Xs;){if(0!==(2048&(o=Xs).flags))switch(o.tag){case 0:case 11:case 15:nl(9,o,o.return)}var b=o.sibling;if(null!==b){b.return=o.return,Xs=b;break e}Xs=o.return}}var y=e.current;for(Xs=y;null!==Xs;){var v=(s=Xs).child;if(0!==(2064&s.subtreeFlags)&&null!==v)v.return=s,Xs=v;else e:for(s=y;null!==Xs;){if(0!==(2048&(l=Xs).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){jc(l,l.return,k)}if(l===s){Xs=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Xs=w;break e}Xs=l.return}}if(Rl=i,Wi(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(it,e)}catch(k){}r=!0}return r}finally{yt=n,El.transition=t}}return!1}function Sc(e,t,n){e=Ba(e,t=fs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(xt(e,1,t),rc(e,t))}function jc(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Kl||!Kl.has(r))){t=Ba(t,e=ms(t,e=cs(n,e),1),1),e=ec(),null!==t&&(xt(t,1,e),rc(t,e));break}}t=t.return}}function Ac(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Pl===e&&(Tl&n)===n&&(4===Il||3===Il&&(130023424&Tl)===Tl&&500>Ze()-Hl?pc(e,0):Nl|=n),rc(e,t)}function Cc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=dt,0===(130023424&(dt<<=1))&&(dt=4194304)));var n=ec();null!==(e=Ia(e,t))&&(xt(e,t,n),rc(e,n))}function Ec(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cc(e,n)}function Rc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Cc(e,n)}function Pc(e,t){return Ye(e,t)}function Oc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tc(e,t,n,r){return new Oc(e,t,n,r)}function Mc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function zc(e,t){var n=e.alternate;return null===n?((n=Tc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ic(e,t,n,r,i,o){var s=2;if(r=e,"function"===typeof e)Mc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Dc(n.children,i,o,t);case j:s=8,i|=8;break;case A:return(e=Tc(12,n,t,2|i)).elementType=A,e.lanes=o,e;case P:return(e=Tc(13,n,t,i)).elementType=P,e.lanes=o,e;case O:return(e=Tc(19,n,t,i)).elementType=O,e.lanes=o,e;case z:return Lc(n,i,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:s=10;break e;case E:s=9;break e;case R:s=11;break e;case T:s=14;break e;case M:s=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Tc(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Dc(e,t,n,r){return(e=Tc(7,e,r,t)).lanes=n,e}function Lc(e,t,n,r){return(e=Tc(22,e,r,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function Fc(e,t,n){return(e=Tc(6,e,null,t)).lanes=n,e}function Nc(e,t,n){return(t=Tc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qc(e,t,n,r,i,a,o,s,l){return e=new Bc(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Tc(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},La(a),e}function Hc(e){if(!e)return Ei;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(Mi(n))return Di(e,n,t)}return t}function Wc(e,t,n,r,i,a,o,s,l){return(e=qc(n,r,!0,e,0,a,0,s,l)).context=Hc(null),n=e.current,(a=Na(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,Ba(n,a,i),e.current.lanes=i,xt(e,i,r),rc(e,r),e}function _c(e,t,n,r){var i=t.current,a=ec(),o=tc(i);return n=Hc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Na(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ba(i,t,o))&&(nc(e,i,o,a),qa(e,i,o)),o}function Uc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Gc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Kc(e,t){Gc(e,t),(e=e.alternate)&&Gc(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pi.current)ys=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return ys=!1,function(e,t,n){switch(t.tag){case 3:Ps(t),fa();break;case 5:Za(t);break;case 1:Mi(t.type)&&Li(t);break;case 4:Ja(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ci(ka,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ci($a,1&$a.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Fs(e,t,n):(Ci($a,1&$a.current),null!==(e=Us(e,t,n))?e.sibling:null);Ci($a,1&$a.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Ws(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ci($a,$a.current),r)break;return null;case 22:case 23:return t.lanes=0,js(e,t,n)}return Us(e,t,n)}(e,t,n);ys=0!==(131072&e.flags)}else ys=!1,ia&&0!==(1048576&t.flags)&&$i(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_s(e,t),e=t.pendingProps;var i=Ti(t,Ri.current);Pa(t,n),i=go(null,t,r,e,i,n);var o=xo();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mi(r)?(o=!0,Li(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,La(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Rs(null,t,r,!0,o,n)):(t.tag=0,ia&&o&&ea(t),vs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_s(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Mc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===R)return 11;if(e===T)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Cs(null,t,r,e,n);break e;case 1:t=Es(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,ns(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Cs(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,Es(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(Ps(t),null===e)throw Error(a(387));r=t.pendingProps,i=(o=t.memoizedState).element,Fa(e,t),Wa(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Os(e,t,r,n,i=cs(Error(a(423)),t));break e}if(r!==i){t=Os(e,t,r,n,i=cs(Error(a(424)),t));break e}for(ra=ci(t.stateNode.containerInfo.firstChild),na=t,ia=!0,aa=null,n=wa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fa(),r===i){t=Us(e,t,n);break e}vs(e,t,r,n)}t=t.child}return t;case 5:return Za(t),null===e&&ca(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==o&&ni(r,o)&&(t.flags|=32),As(e,t),vs(e,t,s,n),t.child;case 6:return null===e&&ca(t),null;case 13:return Fs(e,t,n);case 4:return Ja(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=va(t,null,r,n):vs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return vs(e,t,t.pendingProps,n),t.child;case 8:case 12:return vs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ci(ka,r._currentValue),r._currentValue=s,null!==o)if(sr(o.value,s)){if(o.children===i.children&&!Pi.current){t=Us(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===o.tag){(c=Na(-1,n&-n)).tag=2;var d=o.updateQueue;if(null!==d){var u=(d=d.shared).pending;null===u?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),Ra(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(a(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ra(s,n,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}vs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pa(t,n),r=r(i=Oa(i)),t.flags|=1,vs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),ks(e,t,r,i=ns(r.type,i),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),_s(e,t),t.tag=1,Mi(r)?(e=!0,Li(t)):e=!1,Pa(t,n),os(t,r,i),ls(t,r,i,n),Rs(null,t,r,!0,e,n);case 19:return Ws(e,t,n);case 22:return js(e,t,n)}throw Error(a(156,t.tag))};var Yc="function"===typeof reportError?reportError:function(e){console.error(e)};function Vc(e){this._internalRoot=e}function Jc(e){this._internalRoot=e}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Zc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function $c(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"===typeof i){var s=i;i=function(){var e=Uc(o);s.call(e)}}_c(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"===typeof r){var a=r;r=function(){var e=Uc(o);a.call(e)}}var o=Wc(t,r,e,0,null,!1,0,"",Xc);return e._reactRootContainer=o,e[mi]=o.current,Wr(8===e.nodeType?e.parentNode:e),dc(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Uc(l);s.call(e)}}var l=qc(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=l,e[mi]=l.current,Wr(8===e.nodeType?e.parentNode:e),dc((function(){_c(t,l,n,r)})),l}(n,t,e,i,r);return Uc(o)}Jc.prototype.render=Vc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));_c(e,t,null,null)},Jc.prototype.unmount=Vc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;dc((function(){_c(null,e,null,null)})),t[mi]=null}},Jc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&0!==t&&t<zt[n].priority;n++);zt.splice(n,0,e),0===n&&Ft(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ut(t.pendingLanes);0!==n&&(bt(t,1|n),rc(t,Ze()),0===(6&Rl)&&(Wl=Ze()+500,Wi()))}break;case 13:dc((function(){var t=Ia(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Kc(e,1)}},kt=function(e){if(13===e.tag){var t=Ia(e,134217728);if(null!==t)nc(t,e,134217728,ec());Kc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Ia(e,t);if(null!==n)nc(n,e,t,ec());Kc(e,t)}},jt=function(){return yt},At=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},ke=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(a(90));Y(r),X(r,i)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Re=cc,Pe=dc;var ed={usingClientEntryPoint:!1,Events:[yi,vi,wi,Ce,Ee,cc]},td={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nd={bundleType:td.bundleType,version:td.version,rendererPackageName:td.rendererPackageName,rendererConfig:td.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:v.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ge(e))?null:e.stateNode},findFiberByHostInstance:td.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rd.isDisabled&&rd.supportsFiber)try{it=rd.inject(nd),at=rd}catch(de){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ed,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qc(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qc(e))throw Error(a(299));var n=!1,r="",i=Yc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=qc(e,1,!1,null,0,n,0,r,i),e[mi]=t.current,Wr(8===e.nodeType?e.parentNode:e),new Vc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Ge(t))?null:e.stateNode},t.flushSync=function(e){return dc(e)},t.hydrate=function(e,t,n){if(!Zc(t))throw Error(a(200));return $c(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qc(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",s=Yc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Wc(t,null,e,1,null!=n?n:null,i,0,o,s),e[mi]=t.current,Wr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Jc(t)},t.render=function(e,t,n){if(!Zc(t))throw Error(a(200));return $c(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Zc(e))throw Error(a(40));return!!e._reactRootContainer&&(dc((function(){$c(null,null,e,!1,(function(){e._reactRootContainer=null,e[mi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zc(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return $c(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},4391:(e,t,n)=>{"use strict";var r=n(7950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(2730)},5484:(e,t,n)=>{"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function i(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function a(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function o(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,o=null,s=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?o="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(o="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?s="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==o||null!==s){var l=e.displayName||e.name,c="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==o?"\n  "+o:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=i),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var d=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;d.call(this,e,t,r)}}return e}n.r(t),n.d(t,{polyfill:()=>o}),r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},5765:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(5043),o=m(a),s=m(n(7950)),l=m(n(5173)),c=m(n(1439)),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(6619)),u=n(8821),p=m(u),f=n(5484);function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var g=t.portalClassName="ReactModalPortal",x=t.bodyOpenClassName="ReactModal__Body--open",b=u.canUseDOM&&void 0!==s.default.createPortal,y=function(e){return document.createElement(e)},v=function(){return b?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer};function w(e){return e()}var k=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=Array(a),d=0;d<a;d++)l[d]=arguments[d];return n=i=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.removePortal=function(){!b&&s.default.unmountComponentAtNode(i.node);var e=w(i.props.parentSelector);e&&e.contains(i.node)?e.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(e){i.portal=e},i.renderPortal=function(e){var n=v()(i,o.default.createElement(c.default,r({defaultStyles:t.defaultStyles},e)),i.node);i.portalRef(n)},h(i,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){u.canUseDOM&&(b||(this.node=y("div")),this.node.className=this.props.portalClassName,w(this.props.parentSelector).appendChild(this.node),!b&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:w(e.parentSelector),nextParent:w(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(u.canUseDOM){var r=this.props,i=r.isOpen,a=r.portalClassName;e.portalClassName!==a&&(this.node.className=a);var o=n.prevParent,s=n.nextParent;s!==o&&(o.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||i)&&!b&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(u.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return u.canUseDOM&&b?(!this.node&&b&&(this.node=y("div")),v()(o.default.createElement(c.default,r({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){d.setElement(e)}}]),t}(a.Component);k.propTypes={isOpen:l.default.bool.isRequired,style:l.default.shape({content:l.default.object,overlay:l.default.object}),portalClassName:l.default.string,bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,className:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),overlayClassName:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),appElement:l.default.oneOfType([l.default.instanceOf(p.default),l.default.instanceOf(u.SafeHTMLCollection),l.default.instanceOf(u.SafeNodeList),l.default.arrayOf(l.default.instanceOf(p.default))]),onAfterOpen:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,ariaHideApp:l.default.bool,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,parentSelector:l.default.func,aria:l.default.object,data:l.default.object,role:l.default.string,contentLabel:l.default.string,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func},k.defaultProps={isOpen:!1,portalClassName:g,bodyOpenClassName:x,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return o.default.createElement("div",e,t)},contentElement:function(e,t){return o.default.createElement("div",e,t)}},k.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,f.polyfill)(k),t.default=k},1439:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(5043),s=g(n(5173)),l=h(n(1774)),c=g(n(2206)),d=h(n(6619)),u=h(n(4841)),p=n(8821),f=g(p),m=g(n(2959));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function g(e){return e&&e.__esModule?e:{default:e}}n(6062);var x={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},b=0,y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,r=e.ariaHideApp,i=e.htmlOpenClassName,a=e.bodyOpenClassName,o=e.parentSelector,s=o&&o().ownerDocument||document;a&&u.remove(s.body,a),i&&u.remove(s.getElementsByTagName("html")[0],i),r&&b>0&&0===(b-=1)&&d.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(l.returnFocus(n.props.preventScroll),l.teardownScopedFocus()):l.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),m.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(l.setupScopedFocus(n.node),l.markForFocusLater()),n.setState({isOpen:!0},(function(){n.openAnimationFrame=requestAnimationFrame((function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})}))})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){(function(e){return"Tab"===e.code||9===e.keyCode})(e)&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var r="object"===("undefined"===typeof t?"undefined":i(t))?t:{base:x[e],afterOpen:x[e]+"--after-open",beforeClose:x[e]+"--before-close"},a=r.base;return n.state.afterOpen&&(a=a+" "+r.afterOpen),n.state.beforeClose&&(a=a+" "+r.beforeClose),"string"===typeof t&&t?a+" "+t:a},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,r){return n[e+"-"+r]=t[r],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,i=e.bodyOpenClassName,a=e.parentSelector,o=a&&a().ownerDocument||document;i&&u.add(o.body,i),r&&u.add(o.getElementsByTagName("html")[0],r),n&&(b+=1,d.hide(t)),m.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,i=e.overlayClassName,a=e.defaultStyles,o=e.children,s=n?{}:a.content,l=i?{}:a.overlay;if(this.shouldBeClosed())return null;var c={ref:this.setOverlayRef,className:this.buildClassName("overlay",i),style:r({},l,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},d=r({id:t,ref:this.setContentRef,style:r({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),u=this.props.contentElement(d,o);return this.props.overlayElement(c,u)}}]),t}(o.Component);y.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},y.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(f.default),s.default.instanceOf(p.SafeHTMLCollection),s.default.instanceOf(p.SafeNodeList),s.default.arrayOf(s.default.instanceOf(f.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=y,e.exports=t.default},6619:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){s&&(s.removeAttribute?s.removeAttribute("aria-hidden"):null!=s.length?s.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(s).forEach((function(e){return e.removeAttribute("aria-hidden")})));s=null},t.log=function(){0},t.assertNodeList=l,t.setElement=function(e){var t=e;if("string"===typeof t&&o.canUseDOM){var n=document.querySelectorAll(t);l(n,t),t=n}return s=t||s},t.validateElement=c,t.hide=function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=c(e)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){i.value.setAttribute("aria-hidden","true")}}catch(o){n=!0,r=o}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}},t.show=function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=c(e)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){i.value.removeAttribute("aria-hidden")}}catch(o){n=!0,r=o}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}},t.documentNotReadyOrSSRTesting=function(){s=null};var r,i=n(6440),a=(r=i)&&r.__esModule?r:{default:r},o=n(8821);var s=null;function l(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function c(e){var t=e||s;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,a.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}},6062:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){for(var e=[o,s],t=0;t<e.length;t++){var n=e[t];n&&(n.parentNode&&n.parentNode.removeChild(n))}o=s=null,l=[]},t.log=function(){console.log("bodyTrap ----------"),console.log(l.length);for(var e=[o,s],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")};var r,i=n(2959),a=(r=i)&&r.__esModule?r:{default:r};var o=void 0,s=void 0,l=[];function c(){0!==l.length&&l[l.length-1].focusContent()}a.default.subscribe((function(e,t){o||s||((o=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),o.style.position="absolute",o.style.opacity="0",o.setAttribute("tabindex","0"),o.addEventListener("focus",c),(s=o.cloneNode()).addEventListener("focus",c)),(l=t).length>0?(document.body.firstChild!==o&&document.body.insertBefore(o,document.body.firstChild),document.body.lastChild!==s&&document.body.appendChild(s)):(o.parentElement&&o.parentElement.removeChild(o),s.parentElement&&s.parentElement.removeChild(s))}))},4841:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var t in n)i(e,n[t]);var a=document.body;for(var o in r)i(a,r[o]);n={},r={}},t.log=function(){0};var n={},r={};function i(e,t){e.classList.remove(t)}t.add=function(e,t){return i=e.classList,a="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(a,e),i.add(e)}));var i,a},t.remove=function(e,t){return i=e.classList,a="html"==e.nodeName.toLowerCase()?n:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(a,e),0===a[e]&&i.remove(e)}));var i,a}},1774:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){o=[]},t.log=function(){0},t.handleBlur=c,t.handleFocus=d,t.markForFocusLater=function(){o.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==o.length&&(t=o.pop()).focus({preventScroll:e}))}catch(n){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){o.length>0&&o.pop()},t.setupScopedFocus=function(e){s=e,window.addEventListener?(window.addEventListener("blur",c,!1),document.addEventListener("focus",d,!0)):(window.attachEvent("onBlur",c),document.attachEvent("onFocus",d))},t.teardownScopedFocus=function(){s=null,window.addEventListener?(window.removeEventListener("blur",c),document.removeEventListener("focus",d)):(window.detachEvent("onBlur",c),document.detachEvent("onFocus",d))};var r,i=n(4682),a=(r=i)&&r.__esModule?r:{default:r};var o=[],s=null,l=!1;function c(){l=!0}function d(){if(l){if(l=!1,!s)return;setTimeout((function(){s.contains(document.activeElement)||((0,a.default)(s)[0]||s).focus()}),0)}}},2959:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(){console.log("portalOpenInstances ----------"),console.log(r.openInstances.length),r.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},t.resetState=function(){r=new n};var n=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},r=new n;t.default=r},8821:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var r,i=n(7396);var a=((r=i)&&r.__esModule?r:{default:r}).default,o=a.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=a.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=a.canUseDOM?window.NodeList:{},t.canUseDOM=a.canUseDOM;t.default=o},2206:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,a.default)(e);if(!n.length)return void t.preventDefault();var r=void 0,i=t.shiftKey,s=n[0],l=n[n.length-1],c=o();if(e===c){if(!i)return;r=l}l!==c||i||(r=s);s===c&&i&&(r=l);if(r)return t.preventDefault(),void r.focus();var d=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==d||"Chrome"==d[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var u=n.indexOf(c);u>-1&&(u+=i?-1:1);if("undefined"===typeof(r=n[u]))return t.preventDefault(),void(r=i?l:s).focus();t.preventDefault(),r.focus()};var r,i=n(4682),a=(r=i)&&r.__esModule?r:{default:r};function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?o(e.activeElement.shadowRoot):e.activeElement}e.exports=t.default},4682:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=[].slice.call(t.querySelectorAll("*"),0).reduce((function(t,n){return t.concat(n.shadowRoot?e(n.shadowRoot):[n])}),[]);return n.filter(s)};var n="none",r="contents",i=/input|select|textarea|button|object|iframe/;function a(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var i=window.getComputedStyle(e),a=i.getPropertyValue("display");return t?a!==r&&function(e,t){return"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0}(e,i):a===n}catch(o){return console.warn("Failed to inspect element style"),!1}}function o(e,t){var n=e.nodeName.toLowerCase();return(i.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),a(t))return!1;t=t.parentNode}return!0}(e)}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&o(e,!n)}e.exports=t.default},2963:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(5765),a=(r=i)&&r.__esModule?r:{default:r};t.default=a.default,e.exports=t.default},2501:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(5043)),i=s(n(5173)),a=s(n(381)),o=s(n(7324));function s(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var c=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).isVisible=function(e,t,r){var i=e.top,a=e.left,o=e.bottom,s=e.right,l=e.width,c=e.height,d=n.props,u=d.offset,p=d.partialVisibility;if(i+s+o+a===0)return!1;var f=0-u,m=0-u,h=t+u,g=r+u;return p?i+c>=f&&a+l>=m&&o-c<=g&&s-l<=h:i>=f&&a>=m&&o<=g&&s<=h},n.isComponentVisible=function(){setTimeout((function(){if(n.nodeRef&&n.nodeRef.getBoundingClientRect){var e=document.documentElement,t=n.props.once,r=n.nodeRef.getBoundingClientRect(),i=window.innerWidth||e.clientWidth,a=window.innerHeight||e.clientHeight,o=n.isVisible(r,i,a);o&&t&&n.removeListener(),n.setState({isVisible:o})}}),0)},n.setNodeRef=function(e){return n.nodeRef=e},n.ownProps=Object.keys(i.propTypes),n.state={isVisible:!1},n.throttleCb=(0,a.default)(n.isComponentVisible,n.props.throttleInterval),t.nodeRef&&n.setNodeRef(t.nodeRef),n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=i.prototype;return s.componentDidMount=function(){this.attachListener(),this.isComponentVisible()},s.componentDidUpdate=function(e){(0,o.default)(this.getChildProps(this.props),this.getChildProps(e))||this.isComponentVisible()},s.componentWillUnmount=function(){this.removeListener()},s.attachListener=function(){window.addEventListener("scroll",this.throttleCb),window.addEventListener("resize",this.throttleCb)},s.removeListener=function(){window.removeEventListener("scroll",this.throttleCb),window.removeEventListener("resize",this.throttleCb)},s.getChildProps=function(e){var t=this;void 0===e&&(e=this.props);var n={};return Object.keys(e).forEach((function(r){-1===t.ownProps.indexOf(r)&&(n[r]=e[r])})),n},s.getChildren=function(){var e=this;return"function"===typeof this.props.children?this.props.children(l({},this.getChildProps(),{isVisible:this.state.isVisible})):r.default.Children.map(this.props.children,(function(t){return r.default.cloneElement(t,l({},e.getChildProps(),{isVisible:e.state.isVisible}))}))},s.render=function(){var e=this.props,t=e.className,n=e.style,i=e.nodeRef,a=e.tag,o=l({},t&&{className:t},n&&{style:n});return r.default.createElement(a,l({ref:!i&&this.setNodeRef},o),this.getChildren())},i}(r.PureComponent);t.default=c,c.propTypes={once:i.default.bool,throttleInterval:function(e,t,n){var r=e[t];return!Number.isInteger(r)||r<0?new Error("The "+t+" prop you provided to "+n+" is not a valid integer >= 0."):null},children:i.default.oneOfType([i.default.func,i.default.element,i.default.arrayOf(i.default.element)]),style:i.default.object,className:i.default.string,offset:i.default.number,partialVisibility:i.default.bool,nodeRef:i.default.object,tag:i.default.string},c.defaultProps={once:!1,throttleInterval:150,offset:0,partialVisibility:!1,tag:"div"}},6930:(e,t,n)=>{"use strict";var r;t.A=void 0;var i=((r=n(2501))&&r.__esModule?r:{default:r}).default;t.A=i},6214:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.PrevArrow=t.NextArrow=void 0;var i=s(n(5043)),a=s(n(8139)),o=n(1200);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function m(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function b(e){var t=y();return function(){var n,i=v(e);if(t){var a=v(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}t.PrevArrow=function(e){g(n,e);var t=b(n);function n(){return p(this,n),t.apply(this,arguments)}return m(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var n={key:"0","data-role":"none",className:(0,a.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?i.default.cloneElement(this.props.prevArrow,d(d({},n),r)):i.default.createElement("button",l({key:"0",type:"button"},n)," ","Previous")}}]),n}(i.default.PureComponent),t.NextArrow=function(e){g(n,e);var t=b(n);function n(){return p(this,n),t.apply(this,arguments)}return m(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});(0,o.canGoNext)(this.props)||(e["slick-disabled"]=!0,t=null);var n={key:"1","data-role":"none",className:(0,a.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?i.default.cloneElement(this.props.nextArrow,d(d({},n),r)):i.default.createElement("button",l({key:"1",type:"button"},n)," ","Next")}}]),n}(i.default.PureComponent)},5112:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n(5043))&&r.__esModule?r:{default:r};var a={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return i.default.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return i.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};t.default=a},8496:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Dots=void 0;var i=s(n(5043)),a=s(n(8139)),o=n(1200);function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return(t=u(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,u(r.key),r)}}function u(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){var t=m();return function(){var n,i=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}t.Dots=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,r,s=f(u);function u(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),s.apply(this,arguments)}return t=u,n=[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.props.clickHandler(e)}},{key:"render",value:function(){for(var e,t=this.props,n=t.onMouseEnter,r=t.onMouseOver,s=t.onMouseLeave,d=t.infinite,u=t.slidesToScroll,p=t.slidesToShow,f=t.slideCount,m=t.currentSlide,h=(e={slideCount:f,slidesToScroll:u,slidesToShow:p,infinite:d}).infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,g={onMouseEnter:n,onMouseOver:r,onMouseLeave:s},x=[],b=0;b<h;b++){var y=(b+1)*u-1,v=d?y:(0,o.clamp)(y,0,f-1),w=v-(u-1),k=d?w:(0,o.clamp)(w,0,f-1),S=(0,a.default)({"slick-active":d?m>=k&&m<=v:m===k}),j={message:"dots",index:b,slidesToScroll:u,currentSlide:m},A=this.clickHandler.bind(this,j);x=x.concat(i.default.createElement("li",{key:b,className:S},i.default.cloneElement(this.props.customPaging(b),{onClick:A})))}return i.default.cloneElement(this.props.appendDots(x),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:this.props.dotsClass},g))}}],n&&d(t.prototype,n),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(i.default.PureComponent)},2382:(e,t,n)=>{"use strict";t.A=void 0;var r,i=(r=n(433))&&r.__esModule?r:{default:r};t.A=i.default},4910:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0}},9826:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InnerSlider=void 0;var r=p(n(5043)),i=p(n(4910)),a=p(n(446)),o=p(n(8139)),s=n(1200),l=n(737),c=n(8496),d=n(6214),u=p(n(5820));function p(e){return e&&e.__esModule?e:{default:e}}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,A(r.key),r)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function v(e){var t=k();return function(){var n,r=S(e);if(t){var i=S(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(this,n)}}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(k=function(){return!!e})()}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function j(e,t,n){return(t=A(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==f(t)?t:String(t)}t.InnerSlider=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(k,e);var t,n,p,g=v(k);function k(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,k),j(w(t=g.call(this,e)),"listRefHandler",(function(e){return t.list=e})),j(w(t),"trackRefHandler",(function(e){return t.track=e})),j(w(t),"adaptHeight",(function(){if(t.props.adaptiveHeight&&t.list){var e=t.list.querySelector('[data-index="'.concat(t.state.currentSlide,'"]'));t.list.style.height=(0,s.getHeight)(e)+"px"}})),j(w(t),"componentDidMount",(function(){if(t.props.onInit&&t.props.onInit(),t.props.lazyLoad){var e=(0,s.getOnDemandLazySlides)(x(x({},t.props),t.state));e.length>0&&(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e))}var n=x({listRef:t.list,trackRef:t.track},t.props);t.updateState(n,!0,(function(){t.adaptHeight(),t.props.autoplay&&t.autoPlay("update")})),"progressive"===t.props.lazyLoad&&(t.lazyLoadTimer=setInterval(t.progressiveLazyLoad,1e3)),t.ro=new u.default((function(){t.state.animating?(t.onWindowResized(!1),t.callbackTimers.push(setTimeout((function(){return t.onWindowResized()}),t.props.speed))):t.onWindowResized()})),t.ro.observe(t.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),(function(e){e.onfocus=t.props.pauseOnFocus?t.onSlideFocus:null,e.onblur=t.props.pauseOnFocus?t.onSlideBlur:null})),window.addEventListener?window.addEventListener("resize",t.onWindowResized):window.attachEvent("onresize",t.onWindowResized)})),j(w(t),"componentWillUnmount",(function(){t.animationEndCallback&&clearTimeout(t.animationEndCallback),t.lazyLoadTimer&&clearInterval(t.lazyLoadTimer),t.callbackTimers.length&&(t.callbackTimers.forEach((function(e){return clearTimeout(e)})),t.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",t.onWindowResized):window.detachEvent("onresize",t.onWindowResized),t.autoplayTimer&&clearInterval(t.autoplayTimer),t.ro.disconnect()})),j(w(t),"componentDidUpdate",(function(e){if(t.checkImagesLoad(),t.props.onReInit&&t.props.onReInit(),t.props.lazyLoad){var n=(0,s.getOnDemandLazySlides)(x(x({},t.props),t.state));n.length>0&&(t.setState((function(e){return{lazyLoadedList:e.lazyLoadedList.concat(n)}})),t.props.onLazyLoad&&t.props.onLazyLoad(n))}t.adaptHeight();var i=x(x({listRef:t.list,trackRef:t.track},t.props),t.state),a=t.didPropsChange(e);a&&t.updateState(i,a,(function(){t.state.currentSlide>=r.default.Children.count(t.props.children)&&t.changeSlide({message:"index",index:r.default.Children.count(t.props.children)-t.props.slidesToShow,currentSlide:t.state.currentSlide}),t.props.autoplay?t.autoPlay("update"):t.pause("paused")}))})),j(w(t),"onWindowResized",(function(e){t.debouncedResize&&t.debouncedResize.cancel(),t.debouncedResize=(0,a.default)((function(){return t.resizeWindow(e)}),50),t.debouncedResize()})),j(w(t),"resizeWindow",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(Boolean(t.track&&t.track.node)){var n=x(x({listRef:t.list,trackRef:t.track},t.props),t.state);t.updateState(n,e,(function(){t.props.autoplay?t.autoPlay("update"):t.pause("paused")})),t.setState({animating:!1}),clearTimeout(t.animationEndCallback),delete t.animationEndCallback}})),j(w(t),"updateState",(function(e,n,i){var a=(0,s.initializedState)(e);e=x(x(x({},e),a),{},{slideIndex:a.currentSlide});var o=(0,s.getTrackLeft)(e);e=x(x({},e),{},{left:o});var l=(0,s.getTrackCSS)(e);(n||r.default.Children.count(t.props.children)!==r.default.Children.count(e.children))&&(a.trackStyle=l),t.setState(a,i)})),j(w(t),"ssrInit",(function(){if(t.props.variableWidth){var e=0,n=0,i=[],a=(0,s.getPreClones)(x(x(x({},t.props),t.state),{},{slideCount:t.props.children.length})),o=(0,s.getPostClones)(x(x(x({},t.props),t.state),{},{slideCount:t.props.children.length}));t.props.children.forEach((function(t){i.push(t.props.style.width),e+=t.props.style.width}));for(var l=0;l<a;l++)n+=i[i.length-1-l],e+=i[i.length-1-l];for(var c=0;c<o;c++)e+=i[c];for(var d=0;d<t.state.currentSlide;d++)n+=i[d];var u={width:e+"px",left:-n+"px"};if(t.props.centerMode){var p="".concat(i[t.state.currentSlide],"px");u.left="calc(".concat(u.left," + (100% - ").concat(p,") / 2 ) ")}return{trackStyle:u}}var f=r.default.Children.count(t.props.children),m=x(x(x({},t.props),t.state),{},{slideCount:f}),h=(0,s.getPreClones)(m)+(0,s.getPostClones)(m)+f,g=100/t.props.slidesToShow*h,b=100/h,y=-b*((0,s.getPreClones)(m)+t.state.currentSlide)*g/100;return t.props.centerMode&&(y+=(100-b*g/100)/2),{slideWidth:b+"%",trackStyle:{width:g+"%",left:y+"%"}}})),j(w(t),"checkImagesLoad",(function(){var e=t.list&&t.list.querySelectorAll&&t.list.querySelectorAll(".slick-slide img")||[],n=e.length,r=0;Array.prototype.forEach.call(e,(function(e){var i=function(){return++r&&r>=n&&t.onWindowResized()};if(e.onclick){var a=e.onclick;e.onclick=function(t){a(t),e.parentNode.focus()}}else e.onclick=function(){return e.parentNode.focus()};e.onload||(t.props.lazyLoad?e.onload=function(){t.adaptHeight(),t.callbackTimers.push(setTimeout(t.onWindowResized,t.props.speed))}:(e.onload=i,e.onerror=function(){i(),t.props.onLazyLoadError&&t.props.onLazyLoadError()}))}))})),j(w(t),"progressiveLazyLoad",(function(){for(var e=[],n=x(x({},t.props),t.state),r=t.state.currentSlide;r<t.state.slideCount+(0,s.getPostClones)(n);r++)if(t.state.lazyLoadedList.indexOf(r)<0){e.push(r);break}for(var i=t.state.currentSlide-1;i>=-(0,s.getPreClones)(n);i--)if(t.state.lazyLoadedList.indexOf(i)<0){e.push(i);break}e.length>0?(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e)):t.lazyLoadTimer&&(clearInterval(t.lazyLoadTimer),delete t.lazyLoadTimer)})),j(w(t),"slideHandler",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.props,i=r.asNavFor,a=r.beforeChange,o=r.onLazyLoad,l=r.speed,c=r.afterChange,d=t.state.currentSlide,u=(0,s.slideHandler)(x(x(x({index:e},t.props),t.state),{},{trackRef:t.track,useCSS:t.props.useCSS&&!n})),p=u.state,f=u.nextState;if(p){a&&a(d,p.currentSlide);var m=p.lazyLoadedList.filter((function(e){return t.state.lazyLoadedList.indexOf(e)<0}));o&&m.length>0&&o(m),!t.props.waitForAnimate&&t.animationEndCallback&&(clearTimeout(t.animationEndCallback),c&&c(d),delete t.animationEndCallback),t.setState(p,(function(){i&&t.asNavForIndex!==e&&(t.asNavForIndex=e,i.innerSlider.slideHandler(e)),f&&(t.animationEndCallback=setTimeout((function(){var e=f.animating,n=h(f,["animating"]);t.setState(n,(function(){t.callbackTimers.push(setTimeout((function(){return t.setState({animating:e})}),10)),c&&c(p.currentSlide),delete t.animationEndCallback}))}),l))}))}})),j(w(t),"changeSlide",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=x(x({},t.props),t.state),i=(0,s.changeSlide)(r,e);if((0===i||i)&&(!0===n?t.slideHandler(i,n):t.slideHandler(i),t.props.autoplay&&t.autoPlay("update"),t.props.focusOnSelect)){var a=t.list.querySelectorAll(".slick-current");a[0]&&a[0].focus()}})),j(w(t),"clickHandler",(function(e){!1===t.clickable&&(e.stopPropagation(),e.preventDefault()),t.clickable=!0})),j(w(t),"keyHandler",(function(e){var n=(0,s.keyHandler)(e,t.props.accessibility,t.props.rtl);""!==n&&t.changeSlide({message:n})})),j(w(t),"selectHandler",(function(e){t.changeSlide(e)})),j(w(t),"disableBodyScroll",(function(){window.ontouchmove=function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}})),j(w(t),"enableBodyScroll",(function(){window.ontouchmove=null})),j(w(t),"swipeStart",(function(e){t.props.verticalSwiping&&t.disableBodyScroll();var n=(0,s.swipeStart)(e,t.props.swipe,t.props.draggable);""!==n&&t.setState(n)})),j(w(t),"swipeMove",(function(e){var n=(0,s.swipeMove)(e,x(x(x({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));n&&(n.swiping&&(t.clickable=!1),t.setState(n))})),j(w(t),"swipeEnd",(function(e){var n=(0,s.swipeEnd)(e,x(x(x({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));if(n){var r=n.triggerSlideHandler;delete n.triggerSlideHandler,t.setState(n),void 0!==r&&(t.slideHandler(r),t.props.verticalSwiping&&t.enableBodyScroll())}})),j(w(t),"touchEnd",(function(e){t.swipeEnd(e),t.clickable=!0})),j(w(t),"slickPrev",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"previous"})}),0))})),j(w(t),"slickNext",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"next"})}),0))})),j(w(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=Number(e),isNaN(e))return"";t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"index",index:e,currentSlide:t.state.currentSlide},n)}),0))})),j(w(t),"play",(function(){var e;if(t.props.rtl)e=t.state.currentSlide-t.props.slidesToScroll;else{if(!(0,s.canGoNext)(x(x({},t.props),t.state)))return!1;e=t.state.currentSlide+t.props.slidesToScroll}t.slideHandler(e)})),j(w(t),"autoPlay",(function(e){t.autoplayTimer&&clearInterval(t.autoplayTimer);var n=t.state.autoplaying;if("update"===e){if("hovered"===n||"focused"===n||"paused"===n)return}else if("leave"===e){if("paused"===n||"focused"===n)return}else if("blur"===e&&("paused"===n||"hovered"===n))return;t.autoplayTimer=setInterval(t.play,t.props.autoplaySpeed+50),t.setState({autoplaying:"playing"})})),j(w(t),"pause",(function(e){t.autoplayTimer&&(clearInterval(t.autoplayTimer),t.autoplayTimer=null);var n=t.state.autoplaying;"paused"===e?t.setState({autoplaying:"paused"}):"focused"===e?"hovered"!==n&&"playing"!==n||t.setState({autoplaying:"focused"}):"playing"===n&&t.setState({autoplaying:"hovered"})})),j(w(t),"onDotsOver",(function(){return t.props.autoplay&&t.pause("hovered")})),j(w(t),"onDotsLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),j(w(t),"onTrackOver",(function(){return t.props.autoplay&&t.pause("hovered")})),j(w(t),"onTrackLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),j(w(t),"onSlideFocus",(function(){return t.props.autoplay&&t.pause("focused")})),j(w(t),"onSlideBlur",(function(){return t.props.autoplay&&"focused"===t.state.autoplaying&&t.autoPlay("blur")})),j(w(t),"render",(function(){var e,n,i,a=(0,o.default)("slick-slider",t.props.className,{"slick-vertical":t.props.vertical,"slick-initialized":!0}),u=x(x({},t.props),t.state),p=(0,s.extractObject)(u,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),f=t.props.pauseOnHover;if(p=x(x({},p),{},{onMouseEnter:f?t.onTrackOver:null,onMouseLeave:f?t.onTrackLeave:null,onMouseOver:f?t.onTrackOver:null,focusOnSelect:t.props.focusOnSelect&&t.clickable?t.selectHandler:null}),!0===t.props.dots&&t.state.slideCount>=t.props.slidesToShow){var h=(0,s.extractObject)(u,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=t.props.pauseOnDotsHover;h=x(x({},h),{},{clickHandler:t.changeSlide,onMouseEnter:g?t.onDotsLeave:null,onMouseOver:g?t.onDotsOver:null,onMouseLeave:g?t.onDotsLeave:null}),e=r.default.createElement(c.Dots,h)}var b=(0,s.extractObject)(u,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);b.clickHandler=t.changeSlide,t.props.arrows&&(n=r.default.createElement(d.PrevArrow,b),i=r.default.createElement(d.NextArrow,b));var y=null;t.props.vertical&&(y={height:t.state.listHeight});var v=null;!1===t.props.vertical?!0===t.props.centerMode&&(v={padding:"0px "+t.props.centerPadding}):!0===t.props.centerMode&&(v={padding:t.props.centerPadding+" 0px"});var w=x(x({},y),v),k=t.props.touchMove,S={className:"slick-list",style:w,onClick:t.clickHandler,onMouseDown:k?t.swipeStart:null,onMouseMove:t.state.dragging&&k?t.swipeMove:null,onMouseUp:k?t.swipeEnd:null,onMouseLeave:t.state.dragging&&k?t.swipeEnd:null,onTouchStart:k?t.swipeStart:null,onTouchMove:t.state.dragging&&k?t.swipeMove:null,onTouchEnd:k?t.touchEnd:null,onTouchCancel:t.state.dragging&&k?t.swipeEnd:null,onKeyDown:t.props.accessibility?t.keyHandler:null},j={className:a,dir:"ltr",style:t.props.style};return t.props.unslick&&(S={className:"slick-list"},j={className:a}),r.default.createElement("div",j,t.props.unslick?"":n,r.default.createElement("div",m({ref:t.listRefHandler},S),r.default.createElement(l.Track,m({ref:t.trackRefHandler},p),t.props.children)),t.props.unslick?"":i,t.props.unslick?"":e)})),t.list=null,t.track=null,t.state=x(x({},i.default),{},{currentSlide:t.props.initialSlide,targetSlide:t.props.initialSlide?t.props.initialSlide:0,slideCount:r.default.Children.count(t.props.children)}),t.callbackTimers=[],t.clickable=!0,t.debouncedResize=null;var n=t.ssrInit();return t.state=x(x({},t.state),n),t}return t=k,(n=[{key:"didPropsChange",value:function(e){for(var t=!1,n=0,i=Object.keys(this.props);n<i.length;n++){var a=i[n];if(!e.hasOwnProperty(a)){t=!0;break}if("object"!==f(e[a])&&"function"!==typeof e[a]&&!isNaN(e[a])&&e[a]!==this.props[a]){t=!0;break}}return t||r.default.Children.count(this.props.children)!==r.default.Children.count(e.children)}}])&&b(t.prototype,n),p&&b(t,p),Object.defineProperty(t,"prototype",{writable:!1}),k}(r.default.Component)},433:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(5043)),i=n(9826),a=l(n(1270)),o=l(n(5112)),s=n(1200);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function h(e){var t=x();return function(){var n,r=b(e);if(t){var i=b(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}(this,n)}}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function y(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==c(t)?t:String(t)}var w=(0,s.canUseDOM)()&&n(535);t.default=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,l,c=h(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),y(g(t=c.call(this,e)),"innerSliderRefHandler",(function(e){return t.innerSlider=e})),y(g(t),"slickPrev",(function(){return t.innerSlider.slickPrev()})),y(g(t),"slickNext",(function(){return t.innerSlider.slickNext()})),y(g(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.innerSlider.slickGoTo(e,n)})),y(g(t),"slickPause",(function(){return t.innerSlider.pause("paused")})),y(g(t),"slickPlay",(function(){return t.innerSlider.autoPlay("play")})),t.state={breakpoint:null},t._responsiveMediaHandlers=[],t}return t=u,(n=[{key:"media",value:function(e,t){w.register(e,t),this._responsiveMediaHandlers.push({query:e,handler:t})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map((function(e){return e.breakpoint}));t.sort((function(e,t){return e-t})),t.forEach((function(n,r){var i;i=0===r?(0,a.default)({minWidth:0,maxWidth:n}):(0,a.default)({minWidth:t[r-1]+1,maxWidth:n}),(0,s.canUseDOM)()&&e.media(i,(function(){e.setState({breakpoint:n})}))}));var n=(0,a.default)({minWidth:t.slice(-1)[0]});(0,s.canUseDOM)()&&this.media(n,(function(){e.setState({breakpoint:null})}))}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach((function(e){w.unregister(e.query,e.handler)}))}},{key:"render",value:function(){var e,t,n=this;(e=this.state.breakpoint?"unslick"===(t=this.props.responsive.filter((function(e){return e.breakpoint===n.state.breakpoint})))[0].settings?"unslick":p(p(p({},o.default),this.props),t[0].settings):p(p({},o.default),this.props)).centerMode&&(e.slidesToScroll,e.slidesToScroll=1),e.fade&&(e.slidesToShow,e.slidesToScroll,e.slidesToShow=1,e.slidesToScroll=1);var a=r.default.Children.toArray(this.props.children);a=a.filter((function(e){return"string"===typeof e?!!e.trim():!!e})),e.variableWidth&&(e.rows>1||e.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),e.variableWidth=!1);for(var l=[],c=null,u=0;u<a.length;u+=e.rows*e.slidesPerRow){for(var f=[],m=u;m<u+e.rows*e.slidesPerRow;m+=e.slidesPerRow){for(var h=[],g=m;g<m+e.slidesPerRow&&(e.variableWidth&&a[g].props.style&&(c=a[g].props.style.width),!(g>=a.length));g+=1)h.push(r.default.cloneElement(a[g],{key:100*u+10*m+g,tabIndex:-1,style:{width:"".concat(100/e.slidesPerRow,"%"),display:"inline-block"}}));f.push(r.default.createElement("div",{key:10*u+m},h))}e.variableWidth?l.push(r.default.createElement("div",{key:u,style:{width:c}},f)):l.push(r.default.createElement("div",{key:u},f))}if("unslick"===e){var x="regular slider "+(this.props.className||"");return r.default.createElement("div",{className:x},a)}return l.length<=e.slidesToShow&&!e.infinite&&(e.unslick=!0),r.default.createElement(i.InnerSlider,d({style:this.props.style,ref:this.innerSliderRefHandler},(0,s.filterSettings)(e)),l)}}])&&f(t.prototype,n),l&&f(t,l),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.default.Component)},737:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Track=void 0;var r=o(n(5043)),i=o(n(8139)),a=n(1200);function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function u(e){var t=f();return function(){var n,r=m(e);if(t){var i=m(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,n)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==s(t)?t:String(t)}var y=function(e){var t,n,r,i,a;return r=(a=e.rtl?e.slideCount-1-e.index:e.index)<0||a>=e.slideCount,e.centerMode?(i=Math.floor(e.slidesToShow/2),n=(a-e.currentSlide)%e.slideCount===0,a>e.currentSlide-i-1&&a<=e.currentSlide+i&&(t=!0)):t=e.currentSlide<=a&&a<e.currentSlide+e.slidesToShow,{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":r,"slick-current":a===(e.targetSlide<0?e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?e.targetSlide-e.slideCount:e.targetSlide)}},v=function(e,t){return e.key||t},w=function(e){var t,n=[],o=[],s=[],l=r.default.Children.count(e.children),c=(0,a.lazyStartIndex)(e),d=(0,a.lazyEndIndex)(e);return r.default.Children.forEach(e.children,(function(u,p){var f,m={message:"children",index:p,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};f=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(p)>=0?u:r.default.createElement("div",null);var h=function(e){var t={};return void 0!==e.variableWidth&&!1!==e.variableWidth||(t.width=e.slideWidth),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=e.currentSlide===e.index?1:0,t.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t}(g(g({},e),{},{index:p})),x=f.props.className||"",b=y(g(g({},e),{},{index:p}));if(n.push(r.default.cloneElement(f,{key:"original"+v(f,p),"data-index":p,className:(0,i.default)(b,x),tabIndex:"-1","aria-hidden":!b["slick-active"],style:g(g({outline:"none"},f.props.style||{}),h),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(m)}})),e.infinite&&!1===e.fade){var w=l-p;w<=(0,a.getPreClones)(e)&&((t=-w)>=c&&(f=u),b=y(g(g({},e),{},{index:t})),o.push(r.default.cloneElement(f,{key:"precloned"+v(f,t),"data-index":t,tabIndex:"-1",className:(0,i.default)(b,x),"aria-hidden":!b["slick-active"],style:g(g({},f.props.style||{}),h),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(m)}}))),(t=l+p)<d&&(f=u),b=y(g(g({},e),{},{index:t})),s.push(r.default.cloneElement(f,{key:"postcloned"+v(f,t),"data-index":t,tabIndex:"-1",className:(0,i.default)(b,x),"aria-hidden":!b["slick-active"],style:g(g({},f.props.style||{}),h),onClick:function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(m)}}))}})),e.rtl?o.concat(n,s).reverse():o.concat(n,s)};t.Track=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(o,e);var t,n,i,a=u(o);function o(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(p(e=a.call.apply(a,[this].concat(n))),"node",null),x(p(e),"handleRef",(function(t){e.node=t})),e}return t=o,(n=[{key:"render",value:function(){var e=w(this.props),t=this.props,n={onMouseEnter:t.onMouseEnter,onMouseOver:t.onMouseOver,onMouseLeave:t.onMouseLeave};return r.default.createElement("div",l({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},n),e)}}])&&c(t.prototype,n),i&&c(t,i),Object.defineProperty(t,"prototype",{writable:!1}),o}(r.default.PureComponent)},1200:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkSpecKeys=t.checkNavigable=t.changeSlide=t.canUseDOM=t.canGoNext=void 0,t.clamp=d,t.extractObject=void 0,t.filterSettings=function(e){return I.reduce((function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t}),{})},t.validSettings=t.swipeStart=t.swipeMove=t.swipeEnd=t.slidesOnRight=t.slidesOnLeft=t.slideHandler=t.siblingDirection=t.safePreventDefault=t.lazyStartIndex=t.lazySlidesOnRight=t.lazySlidesOnLeft=t.lazyEndIndex=t.keyHandler=t.initializedState=t.getWidth=t.getTrackLeft=t.getTrackCSS=t.getTrackAnimateCSS=t.getTotalSlides=t.getSwipeDirection=t.getSlideCount=t.getRequiredLazySlides=t.getPreClones=t.getPostClones=t.getOnDemandLazySlides=t.getNavigableIndexes=t.getHeight=void 0;var r=a(n(5043)),i=a(n(5112));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n){return Math.max(t,Math.min(e,n))}var u=t.safePreventDefault=function(e){["onTouchStart","onTouchMove","onWheel"].includes(e._reactName)||e.preventDefault()},p=t.getOnDemandLazySlides=function(e){for(var t=[],n=f(e),r=m(e),i=n;i<r;i++)e.lazyLoadedList.indexOf(i)<0&&t.push(i);return t},f=(t.getRequiredLazySlides=function(e){for(var t=[],n=f(e),r=m(e),i=n;i<r;i++)t.push(i);return t},t.lazyStartIndex=function(e){return e.currentSlide-h(e)}),m=t.lazyEndIndex=function(e){return e.currentSlide+g(e)},h=t.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},g=t.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},x=t.getWidth=function(e){return e&&e.offsetWidth||0},b=t.getHeight=function(e){return e&&e.offsetHeight||0},y=t.getSwipeDirection=function(e){var t,n,r,i,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=e.startX-e.curX,n=e.startY-e.curY,r=Math.atan2(n,t),(i=Math.round(180*r/Math.PI))<0&&(i=360-Math.abs(i)),i<=45&&i>=0||i<=360&&i>=315?"left":i>=135&&i<=225?"right":!0===a?i>=35&&i<=135?"up":"down":"vertical"},v=t.canGoNext=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t},w=(t.extractObject=function(e,t){var n={};return t.forEach((function(t){return n[t]=e[t]})),n},t.initializedState=function(e){var t,n=r.default.Children.count(e.children),i=e.listRef,a=Math.ceil(x(i)),o=e.trackRef&&e.trackRef.node,s=Math.ceil(x(o));if(e.vertical)t=a;else{var c=e.centerMode&&2*parseInt(e.centerPadding);"string"===typeof e.centerPadding&&"%"===e.centerPadding.slice(-1)&&(c*=a/100),t=Math.ceil((a-c)/e.slidesToShow)}var d=i&&b(i.querySelector('[data-index="0"]')),u=d*e.slidesToShow,f=void 0===e.currentSlide?e.initialSlide:e.currentSlide;e.rtl&&void 0===e.currentSlide&&(f=n-1-e.initialSlide);var m=e.lazyLoadedList||[],h=p(l(l({},e),{},{currentSlide:f,lazyLoadedList:m})),g={slideCount:n,slideWidth:t,listWidth:a,trackWidth:s,currentSlide:f,slideHeight:d,listHeight:u,lazyLoadedList:m=m.concat(h)};return null===e.autoplaying&&e.autoplay&&(g.autoplaying="playing"),g},t.slideHandler=function(e){var t=e.waitForAnimate,n=e.animating,r=e.fade,i=e.infinite,a=e.index,o=e.slideCount,s=e.lazyLoad,c=e.currentSlide,u=e.centerMode,f=e.slidesToScroll,m=e.slidesToShow,h=e.useCSS,g=e.lazyLoadedList;if(t&&n)return{};var x,b,y,w=a,k={},S={},j=i?a:d(a,0,o-1);if(r){if(!i&&(a<0||a>=o))return{};a<0?w=a+o:a>=o&&(w=a-o),s&&g.indexOf(w)<0&&(g=g.concat(w)),k={animating:!0,currentSlide:w,lazyLoadedList:g,targetSlide:w},S={animating:!1,targetSlide:w}}else x=w,w<0?(x=w+o,i?o%f!==0&&(x=o-o%f):x=0):!v(e)&&w>c?w=x=c:u&&w>=o?(w=i?o:o-1,x=i?0:o-1):w>=o&&(x=w-o,i?o%f!==0&&(x=0):x=o-m),!i&&w+m>=o&&(x=o-m),b=E(l(l({},e),{},{slideIndex:w})),y=E(l(l({},e),{},{slideIndex:x})),i||(b===y&&(w=x),b=y),s&&(g=g.concat(p(l(l({},e),{},{currentSlide:w})))),h?(k={animating:!0,currentSlide:x,trackStyle:C(l(l({},e),{},{left:b})),lazyLoadedList:g,targetSlide:j},S={animating:!1,currentSlide:x,trackStyle:A(l(l({},e),{},{left:y})),swipeLeft:null,targetSlide:j}):k={currentSlide:x,trackStyle:A(l(l({},e),{},{left:y})),lazyLoadedList:g,targetSlide:j};return{state:k,nextState:S}},t.changeSlide=function(e,t){var n,r,i,a,o=e.slidesToScroll,s=e.slidesToShow,c=e.slideCount,d=e.currentSlide,u=e.targetSlide,p=e.lazyLoad,f=e.infinite;if(n=c%o!==0?0:(c-d)%o,"previous"===t.message)a=d-(i=0===n?o:s-n),p&&!f&&(a=-1===(r=d-i)?c-1:r),f||(a=u-o);else if("next"===t.message)a=d+(i=0===n?o:n),p&&!f&&(a=(d+o)%c+n),f||(a=u+o);else if("dots"===t.message)a=t.index*t.slidesToScroll;else if("children"===t.message){if(a=t.index,f){var m=T(l(l({},e),{},{targetSlide:a}));a>t.currentSlide&&"left"===m?a-=c:a<t.currentSlide&&"right"===m&&(a+=c)}}else"index"===t.message&&(a=Number(t.index));return a},t.keyHandler=function(e,t,n){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":37===e.keyCode?n?"next":"previous":39===e.keyCode?n?"previous":"next":""},t.swipeStart=function(e,t,n){return"IMG"===e.target.tagName&&u(e),!t||!n&&-1!==e.type.indexOf("mouse")?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}},t.swipeMove=function(e,t){var n=t.scrolling,r=t.animating,i=t.vertical,a=t.swipeToSlide,o=t.verticalSwiping,s=t.rtl,c=t.currentSlide,d=t.edgeFriction,p=t.edgeDragged,f=t.onEdge,m=t.swiped,h=t.swiping,g=t.slideCount,x=t.slidesToScroll,b=t.infinite,w=t.touchObject,k=t.swipeEvent,S=t.listHeight,j=t.listWidth;if(!n){if(r)return u(e);i&&a&&o&&u(e);var C,R={},P=E(t);w.curX=e.touches?e.touches[0].pageX:e.clientX,w.curY=e.touches?e.touches[0].pageY:e.clientY,w.swipeLength=Math.round(Math.sqrt(Math.pow(w.curX-w.startX,2)));var O=Math.round(Math.sqrt(Math.pow(w.curY-w.startY,2)));if(!o&&!h&&O>10)return{scrolling:!0};o&&(w.swipeLength=O);var T=(s?-1:1)*(w.curX>w.startX?1:-1);o&&(T=w.curY>w.startY?1:-1);var M=Math.ceil(g/x),z=y(t.touchObject,o),I=w.swipeLength;return b||(0===c&&("right"===z||"down"===z)||c+1>=M&&("left"===z||"up"===z)||!v(t)&&("left"===z||"up"===z))&&(I=w.swipeLength*d,!1===p&&f&&(f(z),R.edgeDragged=!0)),!m&&k&&(k(z),R.swiped=!0),C=i?P+I*(S/j)*T:s?P-I*T:P+I*T,o&&(C=P+I*T),R=l(l({},R),{},{touchObject:w,swipeLeft:C,trackStyle:A(l(l({},t),{},{left:C}))}),Math.abs(w.curX-w.startX)<.8*Math.abs(w.curY-w.startY)?R:(w.swipeLength>10&&(R.swiping=!0,u(e)),R)}},t.swipeEnd=function(e,t){var n=t.dragging,r=t.swipe,i=t.touchObject,a=t.listWidth,o=t.touchThreshold,s=t.verticalSwiping,c=t.listHeight,d=t.swipeToSlide,p=t.scrolling,f=t.onSwipe,m=t.targetSlide,h=t.currentSlide,g=t.infinite;if(!n)return r&&u(e),{};var x=s?c/o:a/o,b=y(i,s),v={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(p)return v;if(!i.swipeLength)return v;if(i.swipeLength>x){var w,j;u(e),f&&f(b);var A=g?h:m;switch(b){case"left":case"up":j=A+S(t),w=d?k(t,j):j,v.currentDirection=0;break;case"right":case"down":j=A-S(t),w=d?k(t,j):j,v.currentDirection=1;break;default:w=A}v.triggerSlideHandler=w}else{var R=E(t);v.trackStyle=C(l(l({},t),{},{left:R}))}return v},t.getNavigableIndexes=function(e){for(var t=e.infinite?2*e.slideCount:e.slideCount,n=e.infinite?-1*e.slidesToShow:0,r=e.infinite?-1*e.slidesToShow:0,i=[];n<t;)i.push(n),n=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return i}),k=t.checkNavigable=function(e,t){var n=w(e),r=0;if(t>n[n.length-1])t=n[n.length-1];else for(var i in n){if(t<n[i]){t=r;break}r=n[i]}return t},S=t.getSlideCount=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var n,r=e.listRef,i=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(i).every((function(r){if(e.vertical){if(r.offsetTop+b(r)/2>-1*e.swipeLeft)return n=r,!1}else if(r.offsetLeft-t+x(r)/2>-1*e.swipeLeft)return n=r,!1;return!0})),!n)return 0;var a=!0===e.rtl?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-a)||1}return e.slidesToScroll},j=t.checkSpecKeys=function(e,t){return t.reduce((function(t,n){return t&&e.hasOwnProperty(n)}),!0)?null:console.error("Keys Missing:",e)},A=t.getTrackCSS=function(e){var t,n;j(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var r=e.slideCount+2*e.slidesToShow;e.vertical?n=r*e.slideHeight:t=O(e)*e.slideWidth;var i={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";i=l(l({},i),{},{WebkitTransform:a,transform:o,msTransform:s})}else e.vertical?i.top=e.left:i.left=e.left;return e.fade&&(i={opacity:1}),t&&(i.width=t),n&&(i.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?i.marginTop=e.left+"px":i.marginLeft=e.left+"px"),i},C=t.getTrackAnimateCSS=function(e){j(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=A(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t},E=t.getTrackLeft=function(e){if(e.unslick)return 0;j(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t,n,r=e.slideIndex,i=e.trackRef,a=e.infinite,o=e.centerMode,s=e.slideCount,l=e.slidesToShow,c=e.slidesToScroll,d=e.slideWidth,u=e.listWidth,p=e.variableWidth,f=e.slideHeight,m=e.fade,h=e.vertical;if(m||1===e.slideCount)return 0;var g=0;if(a?(g=-R(e),s%c!==0&&r+c>s&&(g=-(r>s?l-(r-s):s%c)),o&&(g+=parseInt(l/2))):(s%c!==0&&r+c>s&&(g=l-s%c),o&&(g=parseInt(l/2))),t=h?r*f*-1+g*f:r*d*-1+g*d,!0===p){var x,b=i&&i.node;if(x=r+R(e),t=(n=b&&b.childNodes[x])?-1*n.offsetLeft:0,!0===o){x=a?r+R(e):r,n=b&&b.children[x],t=0;for(var y=0;y<x;y++)t-=b&&b.children[y]&&b.children[y].offsetWidth;t-=parseInt(e.centerPadding),t+=n&&(u-n.offsetWidth)/2}}return t},R=t.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},P=t.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},O=t.getTotalSlides=function(e){return 1===e.slideCount?1:R(e)+e.slideCount+P(e)},T=t.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+M(e)?"left":"right":e.targetSlide<e.currentSlide-z(e)?"right":"left"},M=t.slidesOnRight=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var a=(t-1)/2+1;return parseInt(i)>0&&(a+=1),r&&t%2===0&&(a+=1),a}return r?0:t-1},z=t.slidesOnLeft=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,i=e.centerPadding;if(n){var a=(t-1)/2+1;return parseInt(i)>0&&(a+=1),r||t%2!==0||(a+=1),a}return r?t-1:0},I=(t.canUseDOM=function(){return!("undefined"===typeof window||!window.document||!window.document.createElement)},t.validSettings=Object.keys(i.default))},3557:(e,t,n)=>{"use strict";var r=n(5173),i=n(5043),a=n(2963);function o(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=o(r),l=o(i),c=o(a);function d(e){var t=e.isOpen,n=e.title,r=e.subtitle,a=e.onRequestClose,o=e.onAfterOpen,s=e.onAfterClose,d=e.children,p=e.className,f=e.overlayClassName,m=e.closeIcon,h=e.from,g=void 0===h?"right":h,x=e.width,b=e.shouldCloseOnEsc,y=e.hideHeader,v=void 0!==y&&y,w="slide-pane_from_".concat(g),k=function(e){var t=i.useRef(!0);i.useEffect((function(){return t.current=!0,function(){t.current=!1}}),[]);var n=i.useState(e),r=n[0],a=n[1];return[r,function(e){!0===t.current&&a(e)}]}(!1),S=k[0],j=k[1];return l.default.createElement(c.default,{ariaHideApp:!1,overlayClassName:{base:"slide-pane__overlay ".concat(f||""),afterOpen:S?"overlay-after-open":"",beforeClose:"overlay-before-close"},className:{base:"slide-pane ".concat(w," ").concat(p||""),afterOpen:S?"content-after-open":"",beforeClose:"content-before-close"},style:{content:{width:x||"80%"}},closeTimeoutMS:500,isOpen:null!==t&&void 0!==t&&t,shouldCloseOnEsc:b,onAfterOpen:function(){null===o||void 0===o||o(),setTimeout((function(){j(!0)}),0)},onAfterClose:function(){null===s||void 0===s||s(),setTimeout((function(){j(!1)}),0)},onRequestClose:a,contentLabel:'Modal "'.concat(n||"",'"')},!v&&l.default.createElement("div",{className:"slide-pane__header"},l.default.createElement("div",{className:"slide-pane__close",onClick:a,role:"button",tabIndex:0},m||l.default.createElement(u,null)),l.default.createElement("div",{className:"slide-pane__title-wrapper"},l.default.createElement("h2",{className:"slide-pane__title"},n),l.default.createElement("div",{className:"slide-pane__subtitle"},r))),l.default.createElement("div",{className:"slide-pane__content"},d))}function u(){return l.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 22"},l.default.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"}))}d.propTypes={isOpen:s.default.bool,title:s.default.node,subtitle:s.default.node,from:s.default.oneOf(["left","right","bottom"]),children:s.default.node.isRequired,className:s.default.string,overlayClassName:s.default.string,width:s.default.string,closeIcon:s.default.node,shouldCloseOnEsc:s.default.bool,hideHeader:s.default.bool,onRequestClose:s.default.func.isRequired,onAfterOpen:s.default.func,onAfterClose:s.default.func}},3310:function(e,t,n){var r=n(4756);!function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,l,"next",e)}function l(e){n(o,i,a,s,l,"throw",e)}s(void 0)}))}}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function s(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var l={init:"init"},c=function(e){var t=e.value;return void 0===t?"":t},d=function(){return t.createElement(t.Fragment,null,"\xa0")},u={Cell:c,width:150,minWidth:0,maxWidth:Number.MAX_SAFE_INTEGER};function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){var n=t.style,r=t.className;return e=a({},e,{},o(t,["style","className"])),n&&(e.style=e.style?a({},e.style||{},{},n||{}):n),r&&(e.className=e.className?e.className+" "+r:r),""===e.className&&delete e.className,e}),{})}var f=function(e,t){return void 0===t&&(t={}),function(n){return void 0===n&&(n={}),[].concat(e,[n]).reduce((function(e,r){return function e(t,n,r){return"function"==typeof n?e({},n(t,r)):Array.isArray(n)?p.apply(void 0,[t].concat(n)):p(t,n)}(e,r,a({},t,{userProps:n}))}),{})}},m=function(e,t,n,r){return void 0===n&&(n={}),e.reduce((function(e,t){return t(e,n)}),t)},h=function(e,t,n){return void 0===n&&(n={}),e.forEach((function(e){e(t,n)}))};function g(e,t,n,r){e.findIndex((function(e){return e.pluginName===n})),t.forEach((function(t){e.findIndex((function(e){return e.pluginName===t}))}))}function x(e,t){return"function"==typeof e?e(t):e}function b(e){var n=t.useRef();return n.current=e,t.useCallback((function(){return n.current}),[])}var y="undefined"!=typeof document?t.useLayoutEffect:t.useEffect;function v(e,n){var r=t.useRef(!1);y((function(){r.current&&e(),r.current=!0}),n)}function w(e,t,n){return void 0===n&&(n={}),function(r,i){void 0===i&&(i={});var o="string"==typeof r?t[r]:r;if(void 0===o)throw console.info(t),new Error("Renderer Error \u261d\ufe0f");return k(o,a({},e,{column:t},n,{},i))}}function k(e,n){return function(e){return"function"==typeof e&&(t=Object.getPrototypeOf(e)).prototype&&t.prototype.isReactComponent;var t}(r=e)||"function"==typeof r||function(e){return"object"==typeof e&&"symbol"==typeof e.$$typeof&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}(r)?t.createElement(e,n):e;var r}function S(e,t,n){return void 0===n&&(n=0),e.map((function(e){return A(e=a({},e,{parent:t,depth:n})),e.columns&&(e.columns=S(e.columns,e,n+1)),e}))}function j(e){return T(e,"columns")}function A(e){var t=e.id,n=e.accessor,r=e.Header;if("string"==typeof n){t=t||n;var i=n.split(".");n=function(e){return function(e,t,n){if(!t)return e;var r,i="function"==typeof t?t:JSON.stringify(t),a=R.get(i)||function(){var e=function(e){return function e(t,n){if(void 0===n&&(n=[]),Array.isArray(t))for(var r=0;r<t.length;r+=1)e(t[r],n);else n.push(t);return n}(e).map((function(e){return String(e).replace(".","_")})).join(".").replace(F,".").replace(N,"").split(".")}(t);return R.set(i,e),e}();try{r=a.reduce((function(e,t){return e[t]}),e)}catch(e){}return void 0!==r?r:n}(e,i)}}if(!t&&"string"==typeof r&&r&&(t=r),!t&&e.columns)throw console.error(e),new Error('A column ID (or unique "Header" value) is required!');if(!t)throw console.error(e),new Error("A column ID (or string accessor) is required!");return Object.assign(e,{id:t,accessor:n}),e}function C(e,t){if(!t)throw new Error;return Object.assign(e,a({Header:d,Footer:d},u,{},t,{},e)),Object.assign(e,{originalWidth:e.width}),e}function E(e,t,n){void 0===n&&(n=function(){return{}});for(var r=[],i=e,o=0,s=function(){return o++},l=function(){var e={headers:[]},o=[],l=i.some((function(e){return e.parent}));i.forEach((function(r){var i,c=[].concat(o).reverse()[0];l&&(i=r.parent?a({},r.parent,{originalId:r.parent.id,id:r.parent.id+"_"+s(),headers:[r]},n(r)):C(a({originalId:r.id+"_placeholder",id:r.id+"_placeholder_"+s(),placeholderOf:r,headers:[r]},n(r)),t),c&&c.originalId===i.originalId?c.headers.push(r):o.push(i)),e.headers.push(r)})),r.push(e),i=o};i.length;)l();return r.reverse()}var R=new Map;function P(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=0;r<t.length;r+=1)if(void 0!==t[r])return t[r]}function O(e){if("function"==typeof e)return e}function T(e,t){var n=[];return function e(r){r.forEach((function(r){r[t]?e(r[t]):n.push(r)}))}(e),n}function M(e,t){var n=t.manualExpandedKey,r=t.expanded,i=t.expandSubRows,a=void 0===i||i,o=[];return e.forEach((function(e){return function e(t,i){void 0===i&&(i=!0),t.isExpanded=t.original&&t.original[n]||r[t.id],t.canExpand=t.subRows&&!!t.subRows.length,i&&o.push(t),t.subRows&&t.subRows.length&&t.isExpanded&&t.subRows.forEach((function(t){return e(t,a)}))}(e)})),o}function z(e,t,n){return O(e)||t[e]||n[e]||n.text}function I(e,t,n){return e?e(t,n):void 0===t}function D(){throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")}var L=null,F=/\[/g,N=/\]/g,B=function(e){return a({role:"table"},e)},q=function(e){return a({role:"rowgroup"},e)},H=function(e,t){var n=t.column;return a({key:"header_"+n.id,colSpan:n.totalVisibleHeaderCount,role:"columnheader"},e)},W=function(e,t){var n=t.column;return a({key:"footer_"+n.id,colSpan:n.totalVisibleHeaderCount},e)},_=function(e,t){return a({key:"headerGroup_"+t.index,role:"row"},e)},U=function(e,t){return a({key:"footerGroup_"+t.index},e)},G=function(e,t){return a({key:"row_"+t.row.id,role:"row"},e)},K=function(e,t){var n=t.cell;return a({key:"cell_"+n.row.id+"_"+n.column.id,role:"cell"},e)};function Y(){return{useOptions:[],stateReducers:[],useControlledState:[],columns:[],columnsDeps:[],allColumns:[],allColumnsDeps:[],accessValue:[],materializedColumns:[],materializedColumnsDeps:[],useInstanceAfterData:[],visibleColumns:[],visibleColumnsDeps:[],headerGroups:[],headerGroupsDeps:[],useInstanceBeforeDimensions:[],useInstance:[],prepareRow:[],getTableProps:[B],getTableBodyProps:[q],getHeaderGroupProps:[_],getFooterGroupProps:[U],getHeaderProps:[H],getFooterProps:[W],getRowProps:[G],getCellProps:[K],useFinalInstance:[]}}l.resetHiddenColumns="resetHiddenColumns",l.toggleHideColumn="toggleHideColumn",l.setHiddenColumns="setHiddenColumns",l.toggleHideAllColumns="toggleHideAllColumns";var V=function(e){e.getToggleHiddenProps=[J],e.getToggleHideAllColumnsProps=[Q],e.stateReducers.push(Z),e.useInstanceBeforeDimensions.push(X),e.headerGroupsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.hiddenColumns])})),e.useInstance.push($)};V.pluginName="useColumnVisibility";var J=function(e,t){var n=t.column;return[e,{onChange:function(e){n.toggleHidden(!e.target.checked)},style:{cursor:"pointer"},checked:n.isVisible,title:"Toggle Column Visible"}]},Q=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleHideAllColumns(!e.target.checked)},style:{cursor:"pointer"},checked:!n.allColumnsHidden&&!n.state.hiddenColumns.length,title:"Toggle All Columns Hidden",indeterminate:!n.allColumnsHidden&&n.state.hiddenColumns.length}]};function Z(e,t,n,r){if(t.type===l.init)return a({hiddenColumns:[]},e);if(t.type===l.resetHiddenColumns)return a({},e,{hiddenColumns:r.initialState.hiddenColumns||[]});if(t.type===l.toggleHideColumn){var i=(void 0!==t.value?t.value:!e.hiddenColumns.includes(t.columnId))?[].concat(e.hiddenColumns,[t.columnId]):e.hiddenColumns.filter((function(e){return e!==t.columnId}));return a({},e,{hiddenColumns:i})}return t.type===l.setHiddenColumns?a({},e,{hiddenColumns:x(t.value,e.hiddenColumns)}):t.type===l.toggleHideAllColumns?a({},e,{hiddenColumns:(void 0!==t.value?t.value:!e.hiddenColumns.length)?r.allColumns.map((function(e){return e.id})):[]}):void 0}function X(e){var n=e.headers,r=e.state.hiddenColumns;t.useRef(!1).current;var i=0;n.forEach((function(e){return i+=function e(t,n){t.isVisible=n&&!r.includes(t.id);var i=0;return t.headers&&t.headers.length?t.headers.forEach((function(n){return i+=e(n,t.isVisible)})):i=t.isVisible?1:0,t.totalVisibleHeaderCount=i,i}(e,!0)}))}function $(e){var n=e.columns,r=e.flatHeaders,i=e.dispatch,a=e.allColumns,o=e.getHooks,s=e.state.hiddenColumns,c=e.autoResetHiddenColumns,d=void 0===c||c,u=b(e),p=a.length===s.length,m=t.useCallback((function(e,t){return i({type:l.toggleHideColumn,columnId:e,value:t})}),[i]),h=t.useCallback((function(e){return i({type:l.setHiddenColumns,value:e})}),[i]),g=t.useCallback((function(e){return i({type:l.toggleHideAllColumns,value:e})}),[i]),x=f(o().getToggleHideAllColumnsProps,{instance:u()});r.forEach((function(e){e.toggleHidden=function(t){i({type:l.toggleHideColumn,columnId:e.id,value:t})},e.getToggleHiddenProps=f(o().getToggleHiddenProps,{instance:u(),column:e})}));var y=b(d);v((function(){y()&&i({type:l.resetHiddenColumns})}),[i,n]),Object.assign(e,{allColumnsHidden:p,toggleHideColumn:m,setHiddenColumns:h,toggleHideAllColumns:g,getToggleHideAllColumnsProps:x})}var ee={},te={},ne=function(e,t,n){return e},re=function(e,t){return e.subRows||[]},ie=function(e,t,n){return""+(n?[n.id,t].join("."):t)},ae=function(e){return e};function oe(e){var t=e.initialState,n=void 0===t?ee:t,r=e.defaultColumn,i=void 0===r?te:r,s=e.getSubRows,l=void 0===s?re:s,c=e.getRowId,d=void 0===c?ie:c,u=e.stateReducer,p=void 0===u?ne:u,f=e.useControlledState,m=void 0===f?ae:f;return a({},o(e,["initialState","defaultColumn","getSubRows","getRowId","stateReducer","useControlledState"]),{initialState:n,defaultColumn:i,getSubRows:l,getRowId:d,stateReducer:p,useControlledState:m})}function se(e,t){void 0===t&&(t=0);var n=0,r=0,i=0,a=0;return e.forEach((function(e){var o=e.headers;if(e.totalLeft=t,o&&o.length){var s=se(o,t),l=s[0],c=s[1],d=s[2],u=s[3];e.totalMinWidth=l,e.totalWidth=c,e.totalMaxWidth=d,e.totalFlexWidth=u}else e.totalMinWidth=e.minWidth,e.totalWidth=Math.min(Math.max(e.minWidth,e.width),e.maxWidth),e.totalMaxWidth=e.maxWidth,e.totalFlexWidth=e.canResize?e.totalWidth:0;e.isVisible&&(t+=e.totalWidth,n+=e.totalMinWidth,r+=e.totalWidth,i+=e.totalMaxWidth,a+=e.totalFlexWidth)})),[n,r,i,a]}function le(e){var t=e.data,n=e.rows,r=e.flatRows,i=e.rowsById,a=e.column,o=e.getRowId,s=e.getSubRows,l=e.accessValueHooks,c=e.getInstance;t.forEach((function(e,d){return function e(n,d,u,p,f){void 0===u&&(u=0);var h=n,g=o(n,d,p),x=i[g];if(x)x.subRows&&x.originalSubRows.forEach((function(t,n){return e(t,n,u+1,x)}));else if((x={id:g,original:h,index:d,depth:u,cells:[{}]}).cells.map=D,x.cells.filter=D,x.cells.forEach=D,x.cells[0].getCellProps=D,x.values={},f.push(x),r.push(x),i[g]=x,x.originalSubRows=s(n,d),x.originalSubRows){var b=[];x.originalSubRows.forEach((function(t,n){return e(t,n,u+1,x,b)})),x.subRows=b}a.accessor&&(x.values[a.id]=a.accessor(n,d,x,f,t)),x.values[a.id]=m(l,x.values[a.id],{row:x,column:a,instance:c()})}(e,d,0,void 0,n)}))}l.resetExpanded="resetExpanded",l.toggleRowExpanded="toggleRowExpanded",l.toggleAllRowsExpanded="toggleAllRowsExpanded";var ce=function(e){e.getToggleAllRowsExpandedProps=[de],e.getToggleRowExpandedProps=[ue],e.stateReducers.push(pe),e.useInstance.push(fe),e.prepareRow.push(me)};ce.pluginName="useExpanded";var de=function(e,t){var n=t.instance;return[e,{onClick:function(e){n.toggleAllRowsExpanded()},style:{cursor:"pointer"},title:"Toggle All Rows Expanded"}]},ue=function(e,t){var n=t.row;return[e,{onClick:function(){n.toggleRowExpanded()},style:{cursor:"pointer"},title:"Toggle Row Expanded"}]};function pe(e,t,n,r){if(t.type===l.init)return a({expanded:{}},e);if(t.type===l.resetExpanded)return a({},e,{expanded:r.initialState.expanded||{}});if(t.type===l.toggleAllRowsExpanded){var i=t.value,c=r.rowsById,d=Object.keys(c).length===Object.keys(e.expanded).length;if(void 0!==i?i:!d){var u={};return Object.keys(c).forEach((function(e){u[e]=!0})),a({},e,{expanded:u})}return a({},e,{expanded:{}})}if(t.type===l.toggleRowExpanded){var p,f=t.id,m=t.value,h=e.expanded[f],g=void 0!==m?m:!h;if(!h&&g)return a({},e,{expanded:a({},e.expanded,(p={},p[f]=!0,p))});if(h&&!g){var x=e.expanded;return x[f],a({},e,{expanded:o(x,[f].map(s))})}return e}}function fe(e){var n=e.data,r=e.rows,i=e.rowsById,a=e.manualExpandedKey,o=void 0===a?"expanded":a,s=e.paginateExpandedRows,c=void 0===s||s,d=e.expandSubRows,u=void 0===d||d,p=e.autoResetExpanded,m=void 0===p||p,h=e.getHooks,x=e.plugins,y=e.state.expanded,w=e.dispatch;g(x,["useSortBy","useGroupBy","usePivotColumns","useGlobalFilter"],"useExpanded");var k=b(m),S=Boolean(Object.keys(i).length&&Object.keys(y).length);S&&Object.keys(i).some((function(e){return!y[e]}))&&(S=!1),v((function(){k()&&w({type:l.resetExpanded})}),[w,n]);var j=t.useCallback((function(e,t){w({type:l.toggleRowExpanded,id:e,value:t})}),[w]),A=t.useCallback((function(e){return w({type:l.toggleAllRowsExpanded,value:e})}),[w]),C=t.useMemo((function(){return c?M(r,{manualExpandedKey:o,expanded:y,expandSubRows:u}):r}),[c,r,o,y,u]),E=t.useMemo((function(){return function(e){var t=0;return Object.keys(e).forEach((function(e){var n=e.split(".");t=Math.max(t,n.length)})),t}(y)}),[y]),R=b(e),P=f(h().getToggleAllRowsExpandedProps,{instance:R()});Object.assign(e,{preExpandedRows:r,expandedRows:C,rows:C,expandedDepth:E,isAllRowsExpanded:S,toggleRowExpanded:j,toggleAllRowsExpanded:A,getToggleAllRowsExpandedProps:P})}function me(e,t){var n=t.instance.getHooks,r=t.instance;e.toggleRowExpanded=function(t){return r.toggleRowExpanded(e.id,t)},e.getToggleRowExpandedProps=f(n().getToggleRowExpandedProps,{instance:r,row:e})}var he=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return String(r).toLowerCase().includes(String(n).toLowerCase())}))}))};he.autoRemove=function(e){return!e};var ge=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return void 0===r||String(r).toLowerCase()===String(n).toLowerCase()}))}))};ge.autoRemove=function(e){return!e};var xe=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return void 0===r||String(r)===String(n)}))}))};xe.autoRemove=function(e){return!e};var be=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t].includes(n)}))}))};be.autoRemove=function(e){return!e||!e.length};var ye=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r&&r.length&&n.every((function(e){return r.includes(e)}))}))}))};ye.autoRemove=function(e){return!e||!e.length};var ve=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return r&&r.length&&n.some((function(e){return r.includes(e)}))}))}))};ve.autoRemove=function(e){return!e||!e.length};var we=function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return n.includes(r)}))}))};we.autoRemove=function(e){return!e||!e.length};var ke=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]===n}))}))};ke.autoRemove=function(e){return void 0===e};var Se=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]==n}))}))};Se.autoRemove=function(e){return null==e};var je=function(e,t,n){var r=n||[],i=r[0],a=r[1];if((i="number"==typeof i?i:-1/0)>(a="number"==typeof a?a:1/0)){var o=i;i=a,a=o}return e.filter((function(e){return t.some((function(t){var n=e.values[t];return n>=i&&n<=a}))}))};je.autoRemove=function(e){return!e||"number"!=typeof e[0]&&"number"!=typeof e[1]};var Ae=Object.freeze({__proto__:null,text:he,exactText:ge,exactTextCase:xe,includes:be,includesAll:ye,includesSome:ve,includesValue:we,exact:ke,equals:Se,between:je});l.resetFilters="resetFilters",l.setFilter="setFilter",l.setAllFilters="setAllFilters";var Ce=function(e){e.stateReducers.push(Ee),e.useInstance.push(Re)};function Ee(e,t,n,r){if(t.type===l.init)return a({filters:[]},e);if(t.type===l.resetFilters)return a({},e,{filters:r.initialState.filters||[]});if(t.type===l.setFilter){var i=t.columnId,o=t.filterValue,s=r.allColumns,c=r.filterTypes,d=s.find((function(e){return e.id===i}));if(!d)throw new Error("React-Table: Could not find a column with id: "+i);var u=z(d.filter,c||{},Ae),p=e.filters.find((function(e){return e.id===i})),f=x(o,p&&p.value);return I(u.autoRemove,f,d)?a({},e,{filters:e.filters.filter((function(e){return e.id!==i}))}):a({},e,p?{filters:e.filters.map((function(e){return e.id===i?{id:i,value:f}:e}))}:{filters:[].concat(e.filters,[{id:i,value:f}])})}if(t.type===l.setAllFilters){var m=t.filters,h=r.allColumns,g=r.filterTypes;return a({},e,{filters:x(m,e.filters).filter((function(e){var t=h.find((function(t){return t.id===e.id}));return!I(z(t.filter,g||{},Ae).autoRemove,e.value,t)}))})}}function Re(e){var n=e.data,r=e.rows,i=e.flatRows,a=e.rowsById,o=e.allColumns,s=e.filterTypes,c=e.manualFilters,d=e.defaultCanFilter,u=void 0!==d&&d,p=e.disableFilters,f=e.state.filters,m=e.dispatch,h=e.autoResetFilters,g=void 0===h||h,x=t.useCallback((function(e,t){m({type:l.setFilter,columnId:e,filterValue:t})}),[m]),y=t.useCallback((function(e){m({type:l.setAllFilters,filters:e})}),[m]);o.forEach((function(e){var t=e.id,n=e.accessor,r=e.defaultCanFilter,i=e.disableFilters;e.canFilter=n?P(!0!==i&&void 0,!0!==p&&void 0,!0):P(r,u,!1),e.setFilter=function(t){return x(e.id,t)};var a=f.find((function(e){return e.id===t}));e.filterValue=a&&a.value}));var w=t.useMemo((function(){if(c||!f.length)return[r,i,a];var e=[],t={};return[function n(r,i){void 0===i&&(i=0);var a=r;return(a=f.reduce((function(e,t){var n=t.id,r=t.value,a=o.find((function(e){return e.id===n}));if(!a)return e;0===i&&(a.preFilteredRows=e);var l=z(a.filter,s||{},Ae);return l?(a.filteredRows=l(e,[n],r),a.filteredRows):(console.warn("Could not find a valid 'column.filter' for column with the ID: "+a.id+"."),e)}),r)).forEach((function(r){e.push(r),t[r.id]=r,r.subRows&&(r.subRows=r.subRows&&r.subRows.length>0?n(r.subRows,i+1):r.subRows)})),a}(r),e,t]}),[c,f,r,i,a,o,s]),k=w[0],S=w[1],j=w[2];t.useMemo((function(){o.filter((function(e){return!f.find((function(t){return t.id===e.id}))})).forEach((function(e){e.preFilteredRows=k,e.filteredRows=k}))}),[k,f,o]);var A=b(g);v((function(){A()&&m({type:l.resetFilters})}),[m,c?null:n]),Object.assign(e,{preFilteredRows:r,preFilteredFlatRows:i,preFilteredRowsById:a,filteredRows:k,filteredFlatRows:S,filteredRowsById:j,rows:k,flatRows:S,rowsById:j,setFilter:x,setAllFilters:y})}Ce.pluginName="useFilters",l.resetGlobalFilter="resetGlobalFilter",l.setGlobalFilter="setGlobalFilter";var Pe=function(e){e.stateReducers.push(Oe),e.useInstance.push(Te)};function Oe(e,t,n,r){if(t.type===l.resetGlobalFilter)return a({},e,{globalFilter:r.initialState.globalFilter||void 0});if(t.type===l.setGlobalFilter){var i=t.filterValue,s=r.userFilterTypes,c=z(r.globalFilter,s||{},Ae),d=x(i,e.globalFilter);return I(c.autoRemove,d)?(e.globalFilter,o(e,["globalFilter"])):a({},e,{globalFilter:d})}}function Te(e){var n=e.data,r=e.rows,i=e.flatRows,a=e.rowsById,o=e.allColumns,s=e.filterTypes,c=e.globalFilter,d=e.manualGlobalFilter,u=e.state.globalFilter,p=e.dispatch,f=e.autoResetGlobalFilter,m=void 0===f||f,h=e.disableGlobalFilter,g=t.useCallback((function(e){p({type:l.setGlobalFilter,filterValue:e})}),[p]),x=t.useMemo((function(){if(d||void 0===u)return[r,i,a];var e=[],t={},n=z(c,s||{},Ae);if(!n)return console.warn("Could not find a valid 'globalFilter' option."),r;o.forEach((function(e){var t=e.disableGlobalFilter;e.canFilter=P(!0!==t&&void 0,!0!==h&&void 0,!0)}));var l=o.filter((function(e){return!0===e.canFilter}));return[function r(i){return(i=n(i,l.map((function(e){return e.id})),u)).forEach((function(n){e.push(n),t[n.id]=n,n.subRows=n.subRows&&n.subRows.length?r(n.subRows):n.subRows})),i}(r),e,t]}),[d,u,c,s,o,r,i,a,h]),y=x[0],w=x[1],k=x[2],S=b(m);v((function(){S()&&p({type:l.resetGlobalFilter})}),[p,d?null:n]),Object.assign(e,{preGlobalFilteredRows:r,preGlobalFilteredFlatRows:i,preGlobalFilteredRowsById:a,globalFilteredRows:y,globalFilteredFlatRows:w,globalFilteredRowsById:k,rows:y,flatRows:w,rowsById:k,setGlobalFilter:g,disableGlobalFilter:h})}function Me(e,t){return t.reduce((function(e,t){return e+("number"==typeof t?t:0)}),0)}Pe.pluginName="useGlobalFilter";var ze=Object.freeze({__proto__:null,sum:Me,min:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e))})),t},max:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.max(t,e))})),t},minMax:function(e){var t=e[0]||0,n=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e),n=Math.max(n,e))})),t+".."+n},average:function(e){return Me(0,e)/e.length},median:function(e){if(!e.length)return null;var t=Math.floor(e.length/2),n=[].concat(e).sort((function(e,t){return e-t}));return e.length%2!=0?n[t]:(n[t-1]+n[t])/2},unique:function(e){return Array.from(new Set(e).values())},uniqueCount:function(e){return new Set(e).size},count:function(e){return e.length}}),Ie=[],De={};l.resetGroupBy="resetGroupBy",l.setGroupBy="setGroupBy",l.toggleGroupBy="toggleGroupBy";var Le=function(e){e.getGroupByToggleProps=[Fe],e.stateReducers.push(Ne),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.groupBy])})),e.visibleColumns.push(Be),e.useInstance.push(He),e.prepareRow.push(We)};Le.pluginName="useGroupBy";var Fe=function(e,t){var n=t.header;return[e,{onClick:n.canGroupBy?function(e){e.persist(),n.toggleGroupBy()}:void 0,style:{cursor:n.canGroupBy?"pointer":void 0},title:"Toggle GroupBy"}]};function Ne(e,t,n,r){if(t.type===l.init)return a({groupBy:[]},e);if(t.type===l.resetGroupBy)return a({},e,{groupBy:r.initialState.groupBy||[]});if(t.type===l.setGroupBy)return a({},e,{groupBy:t.value});if(t.type===l.toggleGroupBy){var i=t.columnId,o=t.value,s=void 0!==o?o:!e.groupBy.includes(i);return a({},e,s?{groupBy:[].concat(e.groupBy,[i])}:{groupBy:e.groupBy.filter((function(e){return e!==i}))})}}function Be(e,t){var n=t.instance.state.groupBy,r=n.map((function(t){return e.find((function(e){return e.id===t}))})).filter(Boolean),i=e.filter((function(e){return!n.includes(e.id)}));return(e=[].concat(r,i)).forEach((function(e){e.isGrouped=n.includes(e.id),e.groupedIndex=n.indexOf(e.id)})),e}var qe={};function He(e){var n=e.data,r=e.rows,i=e.flatRows,o=e.rowsById,s=e.allColumns,c=e.flatHeaders,d=e.groupByFn,u=void 0===d?_e:d,p=e.manualGroupBy,m=e.aggregations,h=void 0===m?qe:m,x=e.plugins,y=e.state.groupBy,w=e.dispatch,k=e.autoResetGroupBy,S=void 0===k||k,j=e.disableGroupBy,A=e.defaultCanGroupBy,C=e.getHooks;g(x,["useColumnOrder","useFilters"],"useGroupBy");var E=b(e);s.forEach((function(t){var n=t.accessor,r=t.defaultGroupBy,i=t.disableGroupBy;t.canGroupBy=n?P(t.canGroupBy,!0!==i&&void 0,!0!==j&&void 0,!0):P(t.canGroupBy,r,A,!1),t.canGroupBy&&(t.toggleGroupBy=function(){return e.toggleGroupBy(t.id)}),t.Aggregated=t.Aggregated||t.Cell}));var R=t.useCallback((function(e,t){w({type:l.toggleGroupBy,columnId:e,value:t})}),[w]),O=t.useCallback((function(e){w({type:l.setGroupBy,value:e})}),[w]);c.forEach((function(e){e.getGroupByToggleProps=f(C().getGroupByToggleProps,{instance:E(),header:e})}));var M=t.useMemo((function(){if(p||!y.length)return[r,i,o,Ie,De,i,o];var e=y.filter((function(e){return s.find((function(t){return t.id===e}))})),t=[],n={},l=[],c={},d=[],f={},m=function r(i,o,p){if(void 0===o&&(o=0),o===e.length)return i.map((function(e){return a({},e,{depth:o})}));var m=e[o],g=u(i,m);return Object.entries(g).map((function(i,a){var u=i[0],g=i[1],x=m+":"+u,b=r(g,o+1,x=p?p+">"+x:x),y=o?T(g,"leafRows"):g,v=function(t,n,r){var i={};return s.forEach((function(a){if(e.includes(a.id))i[a.id]=n[0]?n[0].values[a.id]:null;else{var o="function"==typeof a.aggregate?a.aggregate:h[a.aggregate]||ze[a.aggregate];if(o){var s=n.map((function(e){return e.values[a.id]})),l=t.map((function(e){var t=e.values[a.id];if(!r&&a.aggregateValue){var n="function"==typeof a.aggregateValue?a.aggregateValue:h[a.aggregateValue]||ze[a.aggregateValue];if(!n)throw console.info({column:a}),new Error("React Table: Invalid column.aggregateValue option for column listed above");t=n(t,e,a)}return t}));i[a.id]=o(l,s)}else{if(a.aggregate)throw console.info({column:a}),new Error("React Table: Invalid column.aggregate option for column listed above");i[a.id]=null}}})),i}(y,g,o),w={id:x,isGrouped:!0,groupByID:m,groupByVal:u,values:v,subRows:b,leafRows:y,depth:o,index:a};return b.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(l.push(e),c[e.id]=e):(d.push(e),f[e.id]=e)})),w}))}(r);return m.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(l.push(e),c[e.id]=e):(d.push(e),f[e.id]=e)})),[m,t,n,l,c,d,f]}),[p,y,r,i,o,s,h,u]),z=M[0],I=M[1],D=M[2],L=M[3],F=M[4],N=M[5],B=M[6],q=b(S);v((function(){q()&&w({type:l.resetGroupBy})}),[w,p?null:n]),Object.assign(e,{preGroupedRows:r,preGroupedFlatRow:i,preGroupedRowsById:o,groupedRows:z,groupedFlatRows:I,groupedRowsById:D,onlyGroupedFlatRows:L,onlyGroupedRowsById:F,nonGroupedFlatRows:N,nonGroupedRowsById:B,rows:z,flatRows:I,rowsById:D,toggleGroupBy:R,setGroupBy:O})}function We(e){e.allCells.forEach((function(t){var n;t.isGrouped=t.column.isGrouped&&t.column.id===e.groupByID,t.isPlaceholder=!t.isGrouped&&t.column.isGrouped,t.isAggregated=!t.isGrouped&&!t.isPlaceholder&&(null==(n=e.subRows)?void 0:n.length)}))}function _e(e,t){return e.reduce((function(e,n,r){var i=""+n.values[t];return e[i]=Array.isArray(e[i])?e[i]:[],e[i].push(n),e}),{})}var Ue=/([0-9]+)/gm;function Ge(e,t){return e===t?0:e>t?1:-1}function Ke(e,t,n){return[e.values[n],t.values[n]]}function Ye(e){return"number"==typeof e?isNaN(e)||e===1/0||e===-1/0?"":String(e):"string"==typeof e?e:""}var Ve=Object.freeze({__proto__:null,alphanumeric:function(e,t,n){var r=Ke(e,t,n),i=r[0],a=r[1];for(i=Ye(i),a=Ye(a),i=i.split(Ue).filter(Boolean),a=a.split(Ue).filter(Boolean);i.length&&a.length;){var o=i.shift(),s=a.shift(),l=parseInt(o,10),c=parseInt(s,10),d=[l,c].sort();if(isNaN(d[0])){if(o>s)return 1;if(s>o)return-1}else{if(isNaN(d[1]))return isNaN(l)?-1:1;if(l>c)return 1;if(c>l)return-1}}return i.length-a.length},datetime:function(e,t,n){var r=Ke(e,t,n),i=r[0],a=r[1];return Ge(i=i.getTime(),a=a.getTime())},basic:function(e,t,n){var r=Ke(e,t,n);return Ge(r[0],r[1])},string:function(e,t,n){var r=Ke(e,t,n),i=r[0],a=r[1];for(i=i.split("").filter(Boolean),a=a.split("").filter(Boolean);i.length&&a.length;){var o=i.shift(),s=a.shift(),l=o.toLowerCase(),c=s.toLowerCase();if(l>c)return 1;if(c>l)return-1;if(o>s)return 1;if(s>o)return-1}return i.length-a.length},number:function(e,t,n){var r=Ke(e,t,n),i=r[0],a=r[1],o=/[^0-9.]/gi;return Ge(i=Number(String(i).replace(o,"")),a=Number(String(a).replace(o,"")))}});l.resetSortBy="resetSortBy",l.setSortBy="setSortBy",l.toggleSortBy="toggleSortBy",l.clearSortBy="clearSortBy",u.sortType="alphanumeric",u.sortDescFirst=!1;var Je=function(e){e.getSortByToggleProps=[Qe],e.stateReducers.push(Ze),e.useInstance.push(Xe)};Je.pluginName="useSortBy";var Qe=function(e,t){var n=t.instance,r=t.column,i=n.isMultiSortEvent,a=void 0===i?function(e){return e.shiftKey}:i;return[e,{onClick:r.canSort?function(e){e.persist(),r.toggleSortBy(void 0,!n.disableMultiSort&&a(e))}:void 0,style:{cursor:r.canSort?"pointer":void 0},title:r.canSort?"Toggle SortBy":void 0}]};function Ze(e,t,n,r){if(t.type===l.init)return a({sortBy:[]},e);if(t.type===l.resetSortBy)return a({},e,{sortBy:r.initialState.sortBy||[]});if(t.type===l.clearSortBy)return a({},e,{sortBy:e.sortBy.filter((function(e){return e.id!==t.columnId}))});if(t.type===l.setSortBy)return a({},e,{sortBy:t.sortBy});if(t.type===l.toggleSortBy){var i,o=t.columnId,s=t.desc,c=t.multi,d=r.allColumns,u=r.disableMultiSort,p=r.disableSortRemove,f=r.disableMultiRemove,m=r.maxMultiSortColCount,h=void 0===m?Number.MAX_SAFE_INTEGER:m,g=e.sortBy,x=d.find((function(e){return e.id===o})).sortDescFirst,b=g.find((function(e){return e.id===o})),y=g.findIndex((function(e){return e.id===o})),v=null!=s,w=[];return"toggle"!==(i=!u&&c?b?"toggle":"add":y!==g.length-1||1!==g.length?"replace":b?"toggle":"replace")||p||v||c&&f||!(b&&b.desc&&!x||!b.desc&&x)||(i="remove"),"replace"===i?w=[{id:o,desc:v?s:x}]:"add"===i?(w=[].concat(g,[{id:o,desc:v?s:x}])).splice(0,w.length-h):"toggle"===i?w=g.map((function(e){return e.id===o?a({},e,{desc:v?s:!b.desc}):e})):"remove"===i&&(w=g.filter((function(e){return e.id!==o}))),a({},e,{sortBy:w})}}function Xe(e){var n=e.data,r=e.rows,i=e.flatRows,a=e.allColumns,o=e.orderByFn,s=void 0===o?$e:o,c=e.sortTypes,d=e.manualSortBy,u=e.defaultCanSort,p=e.disableSortBy,m=e.flatHeaders,h=e.state.sortBy,x=e.dispatch,y=e.plugins,w=e.getHooks,k=e.autoResetSortBy,S=void 0===k||k;g(y,["useFilters","useGlobalFilter","useGroupBy","usePivotColumns"],"useSortBy");var j=t.useCallback((function(e){x({type:l.setSortBy,sortBy:e})}),[x]),A=t.useCallback((function(e,t,n){x({type:l.toggleSortBy,columnId:e,desc:t,multi:n})}),[x]),C=b(e);m.forEach((function(e){var t=e.accessor,n=e.canSort,r=e.disableSortBy,i=e.id,a=t?P(!0!==r&&void 0,!0!==p&&void 0,!0):P(u,n,!1);e.canSort=a,e.canSort&&(e.toggleSortBy=function(t,n){return A(e.id,t,n)},e.clearSortBy=function(){x({type:l.clearSortBy,columnId:e.id})}),e.getSortByToggleProps=f(w().getSortByToggleProps,{instance:C(),column:e});var o=h.find((function(e){return e.id===i}));e.isSorted=!!o,e.sortedIndex=h.findIndex((function(e){return e.id===i})),e.isSortedDesc=e.isSorted?o.desc:void 0}));var E=t.useMemo((function(){if(d||!h.length)return[r,i];var e=[],t=h.filter((function(e){return a.find((function(t){return t.id===e.id}))}));return[function n(r){var i=s(r,t.map((function(e){var t=a.find((function(t){return t.id===e.id}));if(!t)throw new Error("React-Table: Could not find a column with id: "+e.id+" while sorting");var n=t.sortType,r=O(n)||(c||{})[n]||Ve[n];if(!r)throw new Error("React-Table: Could not find a valid sortType of '"+n+"' for column '"+e.id+"'.");return function(t,n){return r(t,n,e.id,e.desc)}})),t.map((function(e){var t=a.find((function(t){return t.id===e.id}));return t&&t.sortInverted?e.desc:!e.desc})));return i.forEach((function(t){e.push(t),t.subRows&&0!==t.subRows.length&&(t.subRows=n(t.subRows))})),i}(r),e]}),[d,h,r,i,a,s,c]),R=E[0],T=E[1],M=b(S);v((function(){M()&&x({type:l.resetSortBy})}),[d?null:n]),Object.assign(e,{preSortedRows:r,preSortedFlatRows:i,sortedRows:R,sortedFlatRows:T,rows:R,flatRows:T,setSortBy:j,toggleSortBy:A})}function $e(e,t,n){return[].concat(e).sort((function(e,r){for(var i=0;i<t.length;i+=1){var a=t[i],o=!1===n[i]||"desc"===n[i],s=a(e,r);if(0!==s)return o?-s:s}return n[0]?e.index-r.index:r.index-e.index}))}l.resetPage="resetPage",l.gotoPage="gotoPage",l.setPageSize="setPageSize";var et=function(e){e.stateReducers.push(tt),e.useInstance.push(nt)};function tt(e,t,n,r){if(t.type===l.init)return a({pageSize:10,pageIndex:0},e);if(t.type===l.resetPage)return a({},e,{pageIndex:r.initialState.pageIndex||0});if(t.type===l.gotoPage){var i=r.pageCount,o=r.page,s=x(t.pageIndex,e.pageIndex),c=!1;return s>e.pageIndex?c=-1===i?o.length>=e.pageSize:s<i:s<e.pageIndex&&(c=s>-1),c?a({},e,{pageIndex:s}):e}if(t.type===l.setPageSize){var d=t.pageSize,u=e.pageSize*e.pageIndex;return a({},e,{pageIndex:Math.floor(u/d),pageSize:d})}}function nt(e){var n=e.rows,r=e.autoResetPage,i=void 0===r||r,a=e.manualExpandedKey,o=void 0===a?"expanded":a,s=e.plugins,c=e.pageCount,d=e.paginateExpandedRows,u=void 0===d||d,p=e.expandSubRows,f=void 0===p||p,m=e.state,h=m.pageSize,x=m.pageIndex,y=m.expanded,w=m.globalFilter,k=m.filters,S=m.groupBy,j=m.sortBy,A=e.dispatch,C=e.data,E=e.manualPagination;g(s,["useGlobalFilter","useFilters","useGroupBy","useSortBy","useExpanded"],"usePagination");var R=b(i);v((function(){R()&&A({type:l.resetPage})}),[A,E?null:C,w,k,S,j]);var P=E?c:Math.ceil(n.length/h),O=t.useMemo((function(){return P>0?[].concat(new Array(P)).fill(null).map((function(e,t){return t})):[]}),[P]),T=t.useMemo((function(){var e;if(E)e=n;else{var t=h*x,r=t+h;e=n.slice(t,r)}return u?e:M(e,{manualExpandedKey:o,expanded:y,expandSubRows:f})}),[f,y,o,E,x,h,u,n]),z=x>0,I=-1===P?T.length>=h:x<P-1,D=t.useCallback((function(e){A({type:l.gotoPage,pageIndex:e})}),[A]),L=t.useCallback((function(){return D((function(e){return e-1}))}),[D]),F=t.useCallback((function(){return D((function(e){return e+1}))}),[D]),N=t.useCallback((function(e){A({type:l.setPageSize,pageSize:e})}),[A]);Object.assign(e,{pageOptions:O,pageCount:P,page:T,canPreviousPage:z,canNextPage:I,gotoPage:D,previousPage:L,nextPage:F,setPageSize:N})}et.pluginName="usePagination",l.resetPivot="resetPivot",l.togglePivot="togglePivot";var rt=function(e){e.getPivotToggleProps=[at],e.stateReducers.push(ot),e.useInstanceAfterData.push(st),e.allColumns.push(lt),e.accessValue.push(ct),e.materializedColumns.push(dt),e.materializedColumnsDeps.push(ut),e.visibleColumns.push(pt),e.visibleColumnsDeps.push(ft),e.useInstance.push(mt),e.prepareRow.push(ht)};rt.pluginName="usePivotColumns";var it=[],at=function(e,t){var n=t.header;return[e,{onClick:n.canPivot?function(e){e.persist(),n.togglePivot()}:void 0,style:{cursor:n.canPivot?"pointer":void 0},title:"Toggle Pivot"}]};function ot(e,t,n,r){if(t.type===l.init)return a({pivotColumns:it},e);if(t.type===l.resetPivot)return a({},e,{pivotColumns:r.initialState.pivotColumns||it});if(t.type===l.togglePivot){var i=t.columnId,o=t.value,s=void 0!==o?o:!e.pivotColumns.includes(i);return a({},e,s?{pivotColumns:[].concat(e.pivotColumns,[i])}:{pivotColumns:e.pivotColumns.filter((function(e){return e!==i}))})}}function st(e){e.allColumns.forEach((function(t){t.isPivotSource=e.state.pivotColumns.includes(t.id)}))}function lt(e,t){var n=t.instance;return e.forEach((function(e){e.isPivotSource=n.state.pivotColumns.includes(e.id),e.uniqueValues=new Set})),e}function ct(e,t){var n=t.column;return n.uniqueValues&&void 0!==e&&n.uniqueValues.add(e),e}function dt(e,t){var n=t.instance,r=n.allColumns,i=n.state;if(!i.pivotColumns.length||!i.groupBy||!i.groupBy.length)return e;var o=i.pivotColumns.map((function(e){return r.find((function(t){return t.id===e}))})).filter(Boolean),s=r.filter((function(e){return!e.isPivotSource&&!i.groupBy.includes(e.id)&&!i.pivotColumns.includes(e.id)})),l=j(function e(t,n,r){void 0===t&&(t=0),void 0===r&&(r=[]);var i=o[t];return i?Array.from(i.uniqueValues).sort().map((function(o){var s=a({},i,{Header:i.PivotHeader||"string"==typeof i.header?i.Header+": "+o:o,isPivotGroup:!0,parent:n,depth:t,id:n?n.id+"."+i.id+"."+o:i.id+"."+o,pivotValue:o});return s.columns=e(t+1,s,[].concat(r,[function(e){return e.values[i.id]===o}])),s})):s.map((function(e){return a({},e,{canPivot:!1,isPivoted:!0,parent:n,depth:t,id:""+(n?n.id+"."+e.id:e.id),accessor:function(t,n,i){if(r.every((function(e){return e(i)})))return i.values[e.id]}})}))}());return[].concat(e,l)}function ut(e,t){var n=t.instance.state,r=n.pivotColumns,i=n.groupBy;return[].concat(e,[r,i])}function pt(e,t){var n=t.instance.state;return e=e.filter((function(e){return!e.isPivotSource})),n.pivotColumns.length&&n.groupBy&&n.groupBy.length&&(e=e.filter((function(e){return e.isGrouped||e.isPivoted}))),e}function ft(e,t){var n=t.instance;return[].concat(e,[n.state.pivotColumns,n.state.groupBy])}function mt(e){var t=e.columns,n=e.allColumns,r=e.flatHeaders,i=e.getHooks,a=e.plugins,o=e.dispatch,s=e.autoResetPivot,c=void 0===s||s,d=e.manaulPivot,u=e.disablePivot,p=e.defaultCanPivot;g(a,["useGroupBy"],"usePivotColumns");var m=b(e);n.forEach((function(t){var n=t.accessor,r=t.defaultPivot,i=t.disablePivot;t.canPivot=n?P(t.canPivot,!0!==i&&void 0,!0!==u&&void 0,!0):P(t.canPivot,r,p,!1),t.canPivot&&(t.togglePivot=function(){return e.togglePivot(t.id)}),t.Aggregated=t.Aggregated||t.Cell})),r.forEach((function(e){e.getPivotToggleProps=f(i().getPivotToggleProps,{instance:m(),header:e})}));var h=b(c);v((function(){h()&&o({type:l.resetPivot})}),[o,d?null:t]),Object.assign(e,{togglePivot:function(e,t){o({type:l.togglePivot,columnId:e,value:t})}})}function ht(e){e.allCells.forEach((function(e){e.isPivoted=e.column.isPivoted}))}l.resetSelectedRows="resetSelectedRows",l.toggleAllRowsSelected="toggleAllRowsSelected",l.toggleRowSelected="toggleRowSelected",l.toggleAllPageRowsSelected="toggleAllPageRowsSelected";var gt=function(e){e.getToggleRowSelectedProps=[xt],e.getToggleAllRowsSelectedProps=[bt],e.getToggleAllPageRowsSelectedProps=[yt],e.stateReducers.push(vt),e.useInstance.push(wt),e.prepareRow.push(kt)};gt.pluginName="useRowSelect";var xt=function(e,t){var n=t.instance,r=t.row,i=n.manualRowSelectedKey,a=void 0===i?"isSelected":i;return[e,{onChange:function(e){r.toggleRowSelected(e.target.checked)},style:{cursor:"pointer"},checked:!(!r.original||!r.original[a])||r.isSelected,title:"Toggle Row Selected",indeterminate:r.isSomeSelected}]},bt=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleAllRowsSelected(e.target.checked)},style:{cursor:"pointer"},checked:n.isAllRowsSelected,title:"Toggle All Rows Selected",indeterminate:Boolean(!n.isAllRowsSelected&&Object.keys(n.state.selectedRowIds).length)}]},yt=function(e,t){var n=t.instance;return[e,{onChange:function(e){n.toggleAllPageRowsSelected(e.target.checked)},style:{cursor:"pointer"},checked:n.isAllPageRowsSelected,title:"Toggle All Current Page Rows Selected",indeterminate:Boolean(!n.isAllPageRowsSelected&&n.page.some((function(e){var t=e.id;return n.state.selectedRowIds[t]})))}]};function vt(e,t,n,r){if(t.type===l.init)return a({selectedRowIds:{}},e);if(t.type===l.resetSelectedRows)return a({},e,{selectedRowIds:r.initialState.selectedRowIds||{}});if(t.type===l.toggleAllRowsSelected){var i=t.value,o=r.isAllRowsSelected,s=r.rowsById,c=r.nonGroupedRowsById,d=void 0===c?s:c,u=void 0!==i?i:!o,p=Object.assign({},e.selectedRowIds);return u?Object.keys(d).forEach((function(e){p[e]=!0})):Object.keys(d).forEach((function(e){delete p[e]})),a({},e,{selectedRowIds:p})}if(t.type===l.toggleRowSelected){var f=t.id,m=t.value,h=r.rowsById,g=r.selectSubRows,x=void 0===g||g,b=r.getSubRows,y=e.selectedRowIds[f],v=void 0!==m?m:!y;if(y===v)return e;var w=a({},e.selectedRowIds);return function e(t){var n=h[t];if(n&&(n.isGrouped||(v?w[t]=!0:delete w[t]),x&&b(n)))return b(n).forEach((function(t){return e(t.id)}))}(f),a({},e,{selectedRowIds:w})}if(t.type===l.toggleAllPageRowsSelected){var k=t.value,S=r.page,j=r.rowsById,A=r.selectSubRows,C=void 0===A||A,E=r.isAllPageRowsSelected,R=r.getSubRows,P=void 0!==k?k:!E,O=a({},e.selectedRowIds);return S.forEach((function(e){return function e(t){var n=j[t];if(n.isGrouped||(P?O[t]=!0:delete O[t]),C&&R(n))return R(n).forEach((function(t){return e(t.id)}))}(e.id)})),a({},e,{selectedRowIds:O})}return e}function wt(e){var n=e.data,r=e.rows,i=e.getHooks,a=e.plugins,o=e.rowsById,s=e.nonGroupedRowsById,c=void 0===s?o:s,d=e.autoResetSelectedRows,u=void 0===d||d,p=e.state.selectedRowIds,m=e.selectSubRows,h=void 0===m||m,x=e.dispatch,y=e.page,w=e.getSubRows;g(a,["useFilters","useGroupBy","useSortBy","useExpanded","usePagination"],"useRowSelect");var k=t.useMemo((function(){var e=[];return r.forEach((function(t){var n=h?function e(t,n,r){if(n[t.id])return!0;var i=r(t);if(i&&i.length){var a=!0,o=!1;return i.forEach((function(t){o&&!a||(e(t,n,r)?o=!0:a=!1)})),!!a||!!o&&null}return!1}(t,p,w):!!p[t.id];t.isSelected=!!n,t.isSomeSelected=null===n,n&&e.push(t)})),e}),[r,h,p,w]),S=Boolean(Object.keys(c).length&&Object.keys(p).length),j=S;S&&Object.keys(c).some((function(e){return!p[e]}))&&(S=!1),S||y&&y.length&&y.some((function(e){var t=e.id;return!p[t]}))&&(j=!1);var A=b(u);v((function(){A()&&x({type:l.resetSelectedRows})}),[x,n]);var C=t.useCallback((function(e){return x({type:l.toggleAllRowsSelected,value:e})}),[x]),E=t.useCallback((function(e){return x({type:l.toggleAllPageRowsSelected,value:e})}),[x]),R=t.useCallback((function(e,t){return x({type:l.toggleRowSelected,id:e,value:t})}),[x]),P=b(e),O=f(i().getToggleAllRowsSelectedProps,{instance:P()}),T=f(i().getToggleAllPageRowsSelectedProps,{instance:P()});Object.assign(e,{selectedFlatRows:k,isAllRowsSelected:S,isAllPageRowsSelected:j,toggleRowSelected:R,toggleAllRowsSelected:C,getToggleAllRowsSelectedProps:O,getToggleAllPageRowsSelectedProps:T,toggleAllPageRowsSelected:E})}function kt(e,t){var n=t.instance;e.toggleRowSelected=function(t){return n.toggleRowSelected(e.id,t)},e.getToggleRowSelectedProps=f(n.getHooks().getToggleRowSelectedProps,{instance:n,row:e})}var St=function(e){return{}},jt=function(e){return{}};l.setRowState="setRowState",l.setCellState="setCellState",l.resetRowState="resetRowState";var At=function(e){e.stateReducers.push(Ct),e.useInstance.push(Et),e.prepareRow.push(Rt)};function Ct(e,t,n,r){var i=r.initialRowStateAccessor,o=void 0===i?St:i,s=r.initialCellStateAccessor,c=void 0===s?jt:s,d=r.rowsById;if(t.type===l.init)return a({rowState:{}},e);if(t.type===l.resetRowState)return a({},e,{rowState:r.initialState.rowState||{}});if(t.type===l.setRowState){var u,p=t.rowId,f=t.value,m=void 0!==e.rowState[p]?e.rowState[p]:o(d[p]);return a({},e,{rowState:a({},e.rowState,(u={},u[p]=x(f,m),u))})}if(t.type===l.setCellState){var h,g,b,y,v,w=t.rowId,k=t.columnId,S=t.value,j=void 0!==e.rowState[w]?e.rowState[w]:o(d[w]),A=void 0!==(null==j||null==(h=j.cellState)?void 0:h[k])?j.cellState[k]:c(null==(g=d[w])||null==(b=g.cells)?void 0:b.find((function(e){return e.column.id===k})));return a({},e,{rowState:a({},e.rowState,(v={},v[w]=a({},j,{cellState:a({},j.cellState||{},(y={},y[k]=x(S,A),y))}),v))})}}function Et(e){var n=e.autoResetRowState,r=void 0===n||n,i=e.data,a=e.dispatch,o=t.useCallback((function(e,t){return a({type:l.setRowState,rowId:e,value:t})}),[a]),s=t.useCallback((function(e,t,n){return a({type:l.setCellState,rowId:e,columnId:t,value:n})}),[a]),c=b(r);v((function(){c()&&a({type:l.resetRowState})}),[i]),Object.assign(e,{setRowState:o,setCellState:s})}function Rt(e,t){var n=t.instance,r=n.initialRowStateAccessor,i=void 0===r?St:r,a=n.initialCellStateAccessor,o=void 0===a?jt:a,s=n.state.rowState;e&&(e.state=void 0!==s[e.id]?s[e.id]:i(e),e.setState=function(t){return n.setRowState(e.id,t)},e.cells.forEach((function(t){e.state.cellState||(e.state.cellState={}),t.state=void 0!==e.state.cellState[t.column.id]?e.state.cellState[t.column.id]:o(t),t.setState=function(r){return n.setCellState(e.id,t.column.id,r)}})))}At.pluginName="useRowState",l.resetColumnOrder="resetColumnOrder",l.setColumnOrder="setColumnOrder";var Pt=function(e){e.stateReducers.push(Ot),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return[].concat(e,[n.state.columnOrder])})),e.visibleColumns.push(Tt),e.useInstance.push(Mt)};function Ot(e,t,n,r){return t.type===l.init?a({columnOrder:[]},e):t.type===l.resetColumnOrder?a({},e,{columnOrder:r.initialState.columnOrder||[]}):t.type===l.setColumnOrder?a({},e,{columnOrder:x(t.columnOrder,e.columnOrder)}):void 0}function Tt(e,t){var n=t.instance.state.columnOrder;if(!n||!n.length)return e;for(var r=[].concat(n),i=[].concat(e),a=[],o=function(){var e=r.shift(),t=i.findIndex((function(t){return t.id===e}));t>-1&&a.push(i.splice(t,1)[0])};i.length&&r.length;)o();return[].concat(a,i)}function Mt(e){var n=e.dispatch;e.setColumnOrder=t.useCallback((function(e){return n({type:l.setColumnOrder,columnOrder:e})}),[n])}Pt.pluginName="useColumnOrder",u.canResize=!0,l.columnStartResizing="columnStartResizing",l.columnResizing="columnResizing",l.columnDoneResizing="columnDoneResizing",l.resetResize="resetResize";var zt=function(e){e.getResizerProps=[It],e.getHeaderProps.push({style:{position:"relative"}}),e.stateReducers.push(Dt),e.useInstance.push(Ft),e.useInstanceBeforeDimensions.push(Lt)},It=function(e,t){var n=t.instance,r=t.header,i=n.dispatch,a=function(e,t){var n=!1;if("touchstart"===e.type){if(e.touches&&e.touches.length>1)return;n=!0}var r,a,o=function(e){var t=[];return function e(n){n.columns&&n.columns.length&&n.columns.map(e),t.push(n)}(e),t}(t).map((function(e){return[e.id,e.totalWidth]})),s=n?Math.round(e.touches[0].clientX):e.clientX,c=function(){window.cancelAnimationFrame(r),r=null,i({type:l.columnDoneResizing})},d=function(){window.cancelAnimationFrame(r),r=null,i({type:l.columnResizing,clientX:a})},u=function(e){a=e,r||(r=window.requestAnimationFrame(d))},p={mouse:{moveEvent:"mousemove",moveHandler:function(e){return u(e.clientX)},upEvent:"mouseup",upHandler:function(e){document.removeEventListener("mousemove",p.mouse.moveHandler),document.removeEventListener("mouseup",p.mouse.upHandler),c()}},touch:{moveEvent:"touchmove",moveHandler:function(e){return e.cancelable&&(e.preventDefault(),e.stopPropagation()),u(e.touches[0].clientX),!1},upEvent:"touchend",upHandler:function(e){document.removeEventListener(p.touch.moveEvent,p.touch.moveHandler),document.removeEventListener(p.touch.upEvent,p.touch.moveHandler),c()}}},f=n?p.touch:p.mouse,m=!!function(){if("boolean"==typeof L)return L;var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){e=!1}return L=e}()&&{passive:!1};document.addEventListener(f.moveEvent,f.moveHandler,m),document.addEventListener(f.upEvent,f.upHandler,m),i({type:l.columnStartResizing,columnId:t.id,columnWidth:t.totalWidth,headerIdWidths:o,clientX:s})};return[e,{onMouseDown:function(e){return e.persist()||a(e,r)},onTouchStart:function(e){return e.persist()||a(e,r)},style:{cursor:"col-resize"},draggable:!1,role:"separator"}]};function Dt(e,t){if(t.type===l.init)return a({columnResizing:{columnWidths:{}}},e);if(t.type===l.resetResize)return a({},e,{columnResizing:{columnWidths:{}}});if(t.type===l.columnStartResizing){var n=t.clientX,r=t.columnId,i=t.columnWidth,o=t.headerIdWidths;return a({},e,{columnResizing:a({},e.columnResizing,{startX:n,headerIdWidths:o,columnWidth:i,isResizingColumn:r})})}if(t.type===l.columnResizing){var s=t.clientX,c=e.columnResizing,d=c.startX,u=c.columnWidth,p=c.headerIdWidths,f=(s-d)/u,m={};return(void 0===p?[]:p).forEach((function(e){var t=e[0],n=e[1];m[t]=Math.max(n+n*f,0)})),a({},e,{columnResizing:a({},e.columnResizing,{columnWidths:a({},e.columnResizing.columnWidths,{},m)})})}return t.type===l.columnDoneResizing?a({},e,{columnResizing:a({},e.columnResizing,{startX:null,isResizingColumn:null})}):void 0}zt.pluginName="useResizeColumns";var Lt=function(e){var t=e.flatHeaders,n=e.disableResizing,r=e.getHooks,i=e.state.columnResizing,a=b(e);t.forEach((function(e){var t=P(!0!==e.disableResizing&&void 0,!0!==n&&void 0,!0);e.canResize=t,e.width=i.columnWidths[e.id]||e.originalWidth||e.width,e.isResizing=i.isResizingColumn===e.id,t&&(e.getResizerProps=f(r().getResizerProps,{instance:a(),header:e}))}))};function Ft(e){var n=e.plugins,r=e.dispatch,i=e.autoResetResize,a=void 0===i||i,o=e.columns;g(n,["useAbsoluteLayout"],"useResizeColumns");var s=b(a);v((function(){s()&&r({type:l.resetResize})}),[o]);var c=t.useCallback((function(){return r({type:l.resetResize})}),[r]);Object.assign(e,{resetResizing:c})}var Nt={position:"absolute",top:0},Bt=function(e){e.getTableBodyProps.push(qt),e.getRowProps.push(qt),e.getHeaderGroupProps.push(qt),e.getFooterGroupProps.push(qt),e.getHeaderProps.push((function(e,t){var n=t.column;return[e,{style:a({},Nt,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return[e,{style:a({},Nt,{left:n.column.totalLeft+"px",width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return[e,{style:a({},Nt,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]}))};Bt.pluginName="useAbsoluteLayout";var qt=function(e,t){return[e,{style:{position:"relative",width:t.instance.totalColumnsWidth+"px"}}]},Ht={display:"inline-block",boxSizing:"border-box"},Wt=function(e,t){return[e,{style:{display:"flex",width:t.instance.totalColumnsWidth+"px"}}]},_t=function(e){e.getRowProps.push(Wt),e.getHeaderGroupProps.push(Wt),e.getFooterGroupProps.push(Wt),e.getHeaderProps.push((function(e,t){var n=t.column;return[e,{style:a({},Ht,{width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return[e,{style:a({},Ht,{width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return[e,{style:a({},Ht,{width:n.totalWidth+"px"})}]}))};function Ut(e){e.getTableProps.push(Gt),e.getRowProps.push(Kt),e.getHeaderGroupProps.push(Kt),e.getFooterGroupProps.push(Kt),e.getHeaderProps.push(Yt),e.getCellProps.push(Vt),e.getFooterProps.push(Jt)}_t.pluginName="useBlockLayout",Ut.pluginName="useFlexLayout";var Gt=function(e,t){return[e,{style:{minWidth:t.instance.totalColumnsMinWidth+"px"}}]},Kt=function(e,t){return[e,{style:{display:"flex",flex:"1 0 auto",minWidth:t.instance.totalColumnsMinWidth+"px"}}]},Yt=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]},Vt=function(e,t){var n=t.cell;return[e,{style:{boxSizing:"border-box",flex:n.column.totalFlexWidth+" 0 auto",minWidth:n.column.totalMinWidth+"px",width:n.column.totalWidth+"px"}}]},Jt=function(e,t){var n=t.column;return[e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]};function Qt(e){e.stateReducers.push(en),e.getTableProps.push(Zt),e.getHeaderProps.push(Xt),e.getRowProps.push($t)}l.columnStartResizing="columnStartResizing",l.columnResizing="columnResizing",l.columnDoneResizing="columnDoneResizing",l.resetResize="resetResize",Qt.pluginName="useGridLayout";var Zt=function(e,t){var n=t.instance;return[e,{style:{display:"grid",gridTemplateColumns:n.visibleColumns.map((function(e){var t;return n.state.gridLayout.columnWidths[e.id]?n.state.gridLayout.columnWidths[e.id]+"px":(null==(t=n.state.columnResizing)?void 0:t.isResizingColumn)?n.state.gridLayout.startWidths[e.id]+"px":"number"==typeof e.width?e.width+"px":e.width})).join(" ")}}]},Xt=function(e,t){var n=t.column;return[e,{id:"header-cell-"+n.id,style:{position:"sticky",gridColumn:"span "+n.totalVisibleHeaderCount}}]},$t=function(e,t){var n=t.row;return n.isExpanded?[e,{style:{gridColumn:"1 / "+(n.cells.length+1)}}]:[e,{}]};function en(e,t,n,r){if(t.type===l.init)return a({gridLayout:{columnWidths:{}}},e);if(t.type===l.resetResize)return a({},e,{gridLayout:{columnWidths:{}}});if(t.type===l.columnStartResizing){var i=t.columnId,o=t.headerIdWidths,s=tn(i);if(void 0!==s){var c=r.visibleColumns.reduce((function(e,t){var n;return a({},e,((n={})[t.id]=tn(t.id),n))}),{}),d=r.visibleColumns.reduce((function(e,t){var n;return a({},e,((n={})[t.id]=t.minWidth,n))}),{}),u=r.visibleColumns.reduce((function(e,t){var n;return a({},e,((n={})[t.id]=t.maxWidth,n))}),{}),p=o.map((function(e){var t=e[0];return[t,tn(t)]}));return a({},e,{gridLayout:a({},e.gridLayout,{startWidths:c,minWidths:d,maxWidths:u,headerIdGridWidths:p,columnWidth:s})})}return e}if(t.type===l.columnResizing){var f=t.clientX,m=e.columnResizing.startX,h=e.gridLayout,g=h.columnWidth,x=h.minWidths,b=h.maxWidths,y=h.headerIdGridWidths,v=(f-m)/g,w={};return(void 0===y?[]:y).forEach((function(e){var t=e[0],n=e[1];w[t]=Math.min(Math.max(x[t],n+n*v),b[t])})),a({},e,{gridLayout:a({},e.gridLayout,{columnWidths:a({},e.gridLayout.columnWidths,{},w)})})}return t.type===l.columnDoneResizing?a({},e,{gridLayout:a({},e.gridLayout,{startWidths:{},minWidths:{},maxWidths:{}})}):void 0}function tn(e){var t,n=null==(t=document.getElementById("header-cell-"+e))?void 0:t.offsetWidth;if(void 0!==n)return n}e._UNSTABLE_usePivotColumns=rt,e.actions=l,e.defaultColumn=u,e.defaultGroupByFn=_e,e.defaultOrderByFn=$e,e.defaultRenderer=c,e.emptyRenderer=d,e.ensurePluginOrder=g,e.flexRender=k,e.functionalUpdate=x,e.loopHooks=h,e.makePropGetter=f,e.makeRenderer=w,e.reduceHooks=m,e.safeUseLayoutEffect=y,e.useAbsoluteLayout=Bt,e.useAsyncDebounce=function(e,n){void 0===n&&(n=0);var a=t.useRef({}),o=b(e),s=b(n);return t.useCallback(function(){var e=i(r.mark((function e(){var t,n,l,c=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=c.length,n=new Array(t),l=0;l<t;l++)n[l]=c[l];return a.current.promise||(a.current.promise=new Promise((function(e,t){a.current.resolve=e,a.current.reject=t}))),a.current.timeout&&clearTimeout(a.current.timeout),a.current.timeout=setTimeout(i(r.mark((function e(){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete a.current.timeout,e.prev=1,e.t0=a.current,e.next=5,o().apply(void 0,n);case 5:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),a.current.reject(e.t2);case 12:return e.prev=12,delete a.current.promise,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])}))),s()),e.abrupt("return",a.current.promise);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),[o,s])},e.useBlockLayout=_t,e.useColumnOrder=Pt,e.useExpanded=ce,e.useFilters=Ce,e.useFlexLayout=Ut,e.useGetLatest=b,e.useGlobalFilter=Pe,e.useGridLayout=Qt,e.useGroupBy=Le,e.useMountedLayoutEffect=v,e.usePagination=et,e.useResizeColumns=zt,e.useRowSelect=gt,e.useRowState=At,e.useSortBy=Je,e.useTable=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];e=oe(e),r=[V].concat(r);var o=b(t.useRef({}).current);Object.assign(o(),a({},e,{plugins:r,hooks:Y()})),r.filter(Boolean).forEach((function(e){e(o().hooks)}));var s=b(o().hooks);o().getHooks=s,delete o().hooks,Object.assign(o(),m(s().useOptions,oe(e)));var c=o(),d=c.data,u=c.columns,p=c.initialState,g=c.defaultColumn,x=c.getSubRows,y=c.getRowId,v=c.stateReducer,k=c.useControlledState,R=b(v),P=t.useCallback((function(e,t){if(!t.type)throw console.info({action:t}),new Error("Unknown Action \ud83d\udc46");return[].concat(s().stateReducers,Array.isArray(R())?R():[R()]).reduce((function(n,r){return r(n,t,e,o())||n}),e)}),[s,R,o]),O=t.useReducer(P,void 0,(function(){return P(p,{type:l.init})})),T=O[0],M=O[1],z=m([].concat(s().useControlledState,[k]),T,{instance:o()});Object.assign(o(),{state:z,dispatch:M});var I=t.useMemo((function(){return S(m(s().columns,u,{instance:o()}))}),[s,o,u].concat(m(s().columnsDeps,[],{instance:o()})));o().columns=I;var D=t.useMemo((function(){return m(s().allColumns,j(I),{instance:o()}).map(A)}),[I,s,o].concat(m(s().allColumnsDeps,[],{instance:o()})));o().allColumns=D;var L=t.useMemo((function(){for(var e=[],t=[],n={},r=[].concat(D);r.length;){var i=r.shift();le({data:d,rows:e,flatRows:t,rowsById:n,column:i,getRowId:y,getSubRows:x,accessValueHooks:s().accessValue,getInstance:o})}return[e,t,n]}),[D,d,y,x,s,o]),F=L[0],N=L[1],B=L[2];Object.assign(o(),{rows:F,initialRows:[].concat(F),flatRows:N,rowsById:B}),h(s().useInstanceAfterData,o());var q=t.useMemo((function(){return m(s().visibleColumns,D,{instance:o()}).map((function(e){return C(e,g)}))}),[s,D,o,g].concat(m(s().visibleColumnsDeps,[],{instance:o()})));D=t.useMemo((function(){var e=[].concat(q);return D.forEach((function(t){e.find((function(e){return e.id===t.id}))||e.push(t)})),e}),[D,q]),o().allColumns=D;var H=t.useMemo((function(){return m(s().headerGroups,E(q,g),o())}),[s,q,g,o].concat(m(s().headerGroupsDeps,[],{instance:o()})));o().headerGroups=H;var W=t.useMemo((function(){return H.length?H[0].headers:[]}),[H]);o().headers=W,o().flatHeaders=H.reduce((function(e,t){return[].concat(e,t.headers)}),[]),h(s().useInstanceBeforeDimensions,o());var _=q.filter((function(e){return e.isVisible})).map((function(e){return e.id})).sort().join("_");q=t.useMemo((function(){return q.filter((function(e){return e.isVisible}))}),[q,_]),o().visibleColumns=q;var U=se(W),G=U[0],K=U[1],J=U[2];return o().totalColumnsMinWidth=G,o().totalColumnsWidth=K,o().totalColumnsMaxWidth=J,h(s().useInstance,o()),[].concat(o().flatHeaders,o().allColumns).forEach((function(e){e.render=w(o(),e),e.getHeaderProps=f(s().getHeaderProps,{instance:o(),column:e}),e.getFooterProps=f(s().getFooterProps,{instance:o(),column:e})})),o().headerGroups=t.useMemo((function(){return H.filter((function(e,t){return e.headers=e.headers.filter((function(e){return e.headers?function e(t){return t.filter((function(t){return t.headers?e(t.headers):t.isVisible})).length}(e.headers):e.isVisible})),!!e.headers.length&&(e.getHeaderGroupProps=f(s().getHeaderGroupProps,{instance:o(),headerGroup:e,index:t}),e.getFooterGroupProps=f(s().getFooterGroupProps,{instance:o(),headerGroup:e,index:t}),!0)}))}),[H,o,s]),o().footerGroups=[].concat(o().headerGroups).reverse(),o().prepareRow=t.useCallback((function(e){e.getRowProps=f(s().getRowProps,{instance:o(),row:e}),e.allCells=D.map((function(t){var n=e.values[t.id],r={column:t,row:e,value:n};return r.getCellProps=f(s().getCellProps,{instance:o(),cell:r}),r.render=w(o(),t,{row:e,cell:r,value:n}),r})),e.cells=q.map((function(t){return e.allCells.find((function(e){return e.column.id===t.id}))})),h(s().prepareRow,e,{instance:o()})}),[s,o,D,q]),o().getTableProps=f(s().getTableProps,{instance:o()}),o().getTableBodyProps=f(s().getTableBodyProps,{instance:o()}),h(s().useFinalInstance,o()),o()},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(5043))},1094:(e,t,n)=>{e.exports=n(3310)},1153:(e,t,n)=>{"use strict";var r=n(5043),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:d,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},4202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=x.prototype;var v=y.prototype=new b;v.constructor=y,h(v,x.prototype),v.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,r){var i,a={},o=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,i)&&!j.hasOwnProperty(i)&&(a[i]=t[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:n,type:e,key:o,ref:s,props:a,_owner:S.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return o=o(l=e),e=""===a?"."+R(l,0):a,w(o)?(i="",null!=e&&(i=e.replace(E,"$&/")+"/"),P(o,t,i,"",(function(e){return e}))):null!=o&&(C(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(E,"$&/")+"/")+e)),t.push(o)),1;if(l=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var d=a+R(s=e[c],c);l+=P(s,t,i,d,o)}else if(d=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof d)for(e=d.call(e),c=0;!(s=e.next()).done;)l+=P(s=s.value,t,i,d=a+R(s,c++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,n){if(null==e)return e;var r=[],i=0;return P(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},z={transition:null},I={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:z,ReactCurrentOwner:S};function D(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=i,t.Profiler=o,t.PureComponent=y,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=D,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!j.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:n,type:e.type,key:a,ref:o,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=A,t.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=D,t.useCallback=function(e,t){return M.current.useCallback(e,t)},t.useContext=function(e){return M.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return M.current.useDeferredValue(e)},t.useEffect=function(e,t){return M.current.useEffect(e,t)},t.useId=function(){return M.current.useId()},t.useImperativeHandle=function(e,t,n){return M.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return M.current.useMemo(e,t)},t.useReducer=function(e,t,n){return M.current.useReducer(e,t,n)},t.useRef=function(e){return M.current.useRef(e)},t.useState=function(e){return M.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return M.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return M.current.useTransition()},t.version="18.3.1"},5043:(e,t,n)=>{"use strict";e.exports=n(4202)},579:(e,t,n)=>{"use strict";e.exports=n(1153)},5820:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var r=function(){if("undefined"!==typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),i="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,a="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),o="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(a):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],l="undefined"!==typeof MutationObserver,c=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function a(){n&&(n=!1,e()),r&&l()}function s(){o(a)}function l(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=e}return l}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),l?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;s.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),d=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},u=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||a},p=b(0,0,0,0);function f(e){return parseFloat(e)||0}function m(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+f(e["border-"+n+"-width"])}),0)}function h(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return p;var r=u(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],a=e["padding-"+i];t[i]=f(a)}return t}(r),a=i.left+i.right,o=i.top+i.bottom,s=f(r.width),l=f(r.height);if("border-box"===r.boxSizing&&(Math.round(s+a)!==t&&(s-=m(r,"left","right")+a),Math.round(l+o)!==n&&(l-=m(r,"top","bottom")+o)),!function(e){return e===u(e).document.documentElement}(e)){var c=Math.round(s+a)-t,d=Math.round(l+o)-n;1!==Math.abs(c)&&(s-=c),1!==Math.abs(d)&&(l-=d)}return b(i.left,i.top,s,l)}var g="undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof u(e).SVGGraphicsElement}:function(e){return e instanceof u(e).SVGElement&&"function"===typeof e.getBBox};function x(e){return i?g(e)?function(e){var t=e.getBBox();return b(0,0,t.width,t.height)}(e):h(e):p}function b(e,t,n,r){return{x:e,y:t,width:n,height:r}}var y=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=x(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),v=function(e,t){var n=function(e){var t=e.x,n=e.y,r=e.width,i=e.height,a="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,o=Object.create(a.prototype);return d(o,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),o}(t);d(this,{target:e,contentRect:n})},w=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof u(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new y(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof u(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new v(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),k="undefined"!==typeof WeakMap?new WeakMap:new r,S=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),r=new w(t,n,this);k.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){S.prototype[e]=function(){var t;return(t=k.get(this))[e].apply(t,arguments)}}));const j="undefined"!==typeof a.ResizeObserver?a.ResizeObserver:S},7234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,d=e[c];if(0>a(l,n))c<i&&0>a(d,l)?(e[r]=d,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(d,n)))break e;e[r]=d,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],d=[],u=1,p=null,f=3,m=!1,h=!1,g=!1,x="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function v(e){for(var t=r(d);null!==t;){if(null===t.callback)i(d);else{if(!(t.startTime<=e))break;i(d),t.sortIndex=t.expirationTime,n(c,t)}t=r(d)}}function w(e){if(g=!1,v(e),!h)if(null!==r(c))h=!0,z(k);else{var t=r(d);null!==t&&I(w,t.startTime-e)}}function k(e,n){h=!1,g&&(g=!1,b(C),C=-1),m=!0;var a=f;try{for(v(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!P());){var o=p.callback;if("function"===typeof o){p.callback=null,f=p.priorityLevel;var s=o(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&i(c),v(n)}else i(c);p=r(c)}if(null!==p)var l=!0;else{var u=r(d);null!==u&&I(w,u.startTime-n),l=!1}return l}finally{p=null,f=a,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,A=null,C=-1,E=5,R=-1;function P(){return!(t.unstable_now()-R<E)}function O(){if(null!==A){var e=t.unstable_now();R=e;var n=!0;try{n=A(!0,e)}finally{n?S():(j=!1,A=null)}}else j=!1}if("function"===typeof y)S=function(){y(O)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,M=T.port2;T.port1.onmessage=O,S=function(){M.postMessage(null)}}else S=function(){x(O,0)};function z(e){A=e,j||(j=!0,S())}function I(e,n){C=x((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,z(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:u++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(d,e),null===r(c)&&e===r(d)&&(g?(b(C),C=-1):g=!0,I(w,a-o))):(e.sortIndex=s,n(c,e),h||m||(h=!0,z(k))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},8853:(e,t,n)=>{"use strict";e.exports=n(7234)},7324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var d=e[c],u=t[c];if(!1===(i=n?n.call(r,d,u,c):void 0)||void 0===i&&d!==u)return!1}return!0}},7475:e=>{e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},8178:function(e){e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}e.r(t),e.d(t,{default:()=>s});var r=encodeURIComponent;function i(e,t,i,a,s){var l=a&&s.arrayPrefix||"";if("object"===n(t)){var c="".concat(e).concat(l).concat(i&&"]","[");return"".concat(o(t,"".concat(i).concat(c),s))}return i&&i.length?"".concat(i).concat(e,"]").concat(l,"=").concat(r(t)):"".concat(e).concat(l,"=").concat(r(t))}function a(e,t,n,r){return t.map((function(t){return i(e,t,n,!0,r)})).join("&")}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(Array.isArray(e)?e.map((function(e,r){return i("".concat(r),e,t,!0,n)})):Object.keys(e).filter((function(t){return void 0!==e[t]})).map((function(r){return e[r]&&Array.isArray(e[r])?a("".concat(r),e[r],t,n):i(r,e[r],t,!1,n)}))).join("&").replace(/%20/g,"+")}const s=o;return t})()},6440:e=>{"use strict";var t=function(){};e.exports=t},4633:(e,t,n)=>{var r=n(3738).default;function i(){"use strict";e.exports=i=function(){return n},e.exports.__esModule=!0,e.exports.default=e.exports;var t,n={},a=Object.prototype,o=a.hasOwnProperty,s=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",d=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function p(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(t){p=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),o=new z(r||[]);return s(a,"_invoke",{value:P(e,n,o)}),a}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var h="suspendedStart",g="suspendedYield",x="executing",b="completed",y={};function v(){}function w(){}function k(){}var S={};p(S,c,(function(){return this}));var j=Object.getPrototypeOf,A=j&&j(j(I([])));A&&A!==a&&o.call(A,c)&&(S=A);var C=k.prototype=v.prototype=Object.create(S);function E(e){["next","throw","return"].forEach((function(t){p(e,t,(function(e){return this._invoke(t,e)}))}))}function R(e,t){function n(i,a,s,l){var c=m(e[i],e,a);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==r(u)&&o.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,s,l)}),(function(e){n("throw",e,s,l)})):t.resolve(u).then((function(e){d.value=e,s(d)}),(function(e){return n("throw",e,s,l)}))}l(c.arg)}var i;s(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}})}function P(e,n,r){var i=h;return function(a,o){if(i===x)throw Error("Generator is already running");if(i===b){if("throw"===a)throw o;return{value:t,done:!0}}for(r.method=a,r.arg=o;;){var s=r.delegate;if(s){var l=O(s,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===h)throw i=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=x;var c=m(e,n,r);if("normal"===c.type){if(i=r.done?b:g,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i=b,r.method="throw",r.arg=c.arg)}}}function O(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=m(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(o.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return w.prototype=k,s(C,"constructor",{value:k,configurable:!0}),s(k,"constructor",{value:w,configurable:!0}),w.displayName=p(k,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,p(e,u,"GeneratorFunction")),e.prototype=Object.create(C),e},n.awrap=function(e){return{__await:e}},E(R.prototype),p(R.prototype,d,(function(){return this})),n.AsyncIterator=R,n.async=function(e,t,r,i,a){void 0===a&&(a=Promise);var o=new R(f(e,t,r,i),a);return n.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(C),p(C,u,"Generator"),p(C,c,(function(){return this})),p(C,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=I,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;M(n)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},3738:e=>{function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4756:(e,t,n)=>{var r=n(4633)();e.exports=r;try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},8139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,a(n)))}return e}function a(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(a,o),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".7ec37918.chunk.js",n.miniCssF=e=>{},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="ipouterpage:";n.l=(r,i,a,o)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[i];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=a);var o=n.p+n.u(t),s=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,a,o=r[0],s=r[1],l=r[2],c=0;if(o.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)l(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkipouterpage=self.webpackChunkipouterpage||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>Pl,hasStandardBrowserEnv:()=>Tl,hasStandardBrowserWebWorkerEnv:()=>Ml,navigator:()=>Ol,origin:()=>zl});var t=n(5043),r=n.t(t,2),i=n(4391),a=n(8139),o=n.n(a);const s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},l=t.createContext(null);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(null,arguments)}function d(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}n(2740);function u(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function p(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function f(e,n){return Object.keys(n).reduce((function(r,i){var a,o=r,s=o[u(i)],l=o[i],f=d(o,[u(i),i].map(p)),m=n[i],h=function(e,n,r){var i=(0,t.useRef)(void 0!==e),a=(0,t.useState)(n),o=a[0],s=a[1],l=void 0!==e,c=i.current;return i.current=l,!l&&c&&o!==n&&s(n),[l?e:o,(0,t.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];r&&r.apply(void 0,[e].concat(n)),s(e)}),[r])]}(l,s,e[m]),g=h[0],x=h[1];return c({},f,((a={})[i]=g,a[m]=x,a))}),e)}n(5484);var m=n(579);const h=["xxl","xl","lg","md","sm","xs"],g="xs",x=t.createContext({prefixes:{},breakpoints:h,minBreakpoint:g}),{Consumer:b,Provider:y}=x;function v(e,n){const{prefixes:r}=(0,t.useContext)(x);return e||r[n]||n}function w(){const{breakpoints:e}=(0,t.useContext)(x);return e}function k(){const{minBreakpoint:e}=(0,t.useContext)(x);return e}const S=t.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:i,...a}=e;n=v(n,"navbar-brand");const s=i||(a.href?"a":"span");return(0,m.jsx)(s,{...a,ref:t,className:o()(r,n)})}));S.displayName="NavbarBrand";const j=S;function A(e){return e&&e.ownerDocument||document}function C(e,t){return function(e){var t=A(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var E=/([A-Z])/g;var R=/^ms-/;function P(e){return function(e){return e.replace(E,"-$1").toLowerCase()}(e).replace(R,"-ms-")}var O=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const T=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(P(t))||C(e).getPropertyValue(P(t));Object.keys(t).forEach((function(i){var a=t[i];a||0===a?!function(e){return!(!e||!O.test(e))}(i)?n+=P(i)+": "+a+";":r+=i+"("+a+") ":e.style.removeProperty(P(i))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}var z=n(7950),I=n.t(z,2);const D=!1,L=t.createContext(null);var F="unmounted",N="exited",B="entering",q="entered",H="exiting",W=function(e){function n(t,n){var r;r=e.call(this,t,n)||this;var i,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(i=N,r.appearStatus=B):i=q:i=t.unmountOnExit||t.mountOnEnter?F:N,r.state={status:i},r.nextCallback=null,r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,M(e,t)}(n,e),n.getDerivedStateFromProps=function(e,t){return e.in&&t.status===F?{status:N}:null};var r=n.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==B&&n!==q&&(t=B):n!==B&&n!==q||(t=H)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},r.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===B){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:z.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===N&&this.setState({status:F})},r.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[z.findDOMNode(this),r],a=i[0],o=i[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!e&&!n||D?this.safeSetState({status:q},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,o),this.safeSetState({status:B},(function(){t.props.onEntering(a,o),t.onTransitionEnd(l,(function(){t.safeSetState({status:q},(function(){t.props.onEntered(a,o)}))}))})))},r.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:z.findDOMNode(this);t&&!D?(this.props.onExit(r),this.safeSetState({status:H},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:N},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:N},(function(){e.props.onExited(r)}))},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:z.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],o=i[1];this.props.addEndListener(a,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},r.render=function(){var e=this.state.status;if(e===F)return null;var n=this.props,r=n.children,i=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,d(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return t.createElement(L.Provider,{value:null},"function"===typeof r?r(e,i):t.cloneElement(t.Children.only(r),i))},n}(t.Component);function _(){}W.contextType=L,W.propTypes={},W.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:_,onEntering:_,onEntered:_,onExit:_,onExiting:_,onExited:_},W.UNMOUNTED=F,W.EXITED=N,W.ENTERING=B,W.ENTERED=q,W.EXITING=H;const U=W,G=!("undefined"===typeof window||!window.document||!window.document.createElement);var K=!1,Y=!1;try{var V={get passive(){return K=!0},get once(){return Y=K=!0}};G&&(window.addEventListener("test",V,V),window.removeEventListener("test",V,!0))}catch(cA){}const J=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!Y){var i=r.once,a=r.capture,o=n;!Y&&i&&(o=n.__once||function e(r){this.removeEventListener(t,e,a),n.call(this,r)},n.__once=o),e.addEventListener(t,o,K?r:a)}e.addEventListener(t,n,r)};const Q=function(e,t,n,r){var i=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,i),n.__once&&e.removeEventListener(t,n.__once,i)};const Z=function(e,t,n,r){return J(e,t,n,r),function(){Q(e,t,n,r)}};function X(e,t,n){void 0===n&&(n=5);var r=!1,i=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var i=document.createEvent("HTMLEvents");i.initEvent(t,n,r),e.dispatchEvent(i)}}(e,"transitionend",!0)}),t+n),a=Z(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(i),a()}}function $(e,t,n,r){null==n&&(n=function(e){var t=T(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var i=X(e,n,r),a=Z(e,"transitionend",t);return function(){i(),a()}}function ee(e,t){const n=T(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function te(e,t){const n=ee(e,"transitionDuration"),r=ee(e,"transitionDelay"),i=$(e,(n=>{n.target===e&&(i(),t(n))}),n+r)}const ne=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.apply(this,r),t.apply(this,r)}}),null)};function re(e){e.offsetHeight}const ie=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const ae=function(e,n){return(0,t.useMemo)((()=>function(e,t){const n=ie(e),r=ie(t);return e=>{n&&n(e),r&&r(e)}}(e,n)),[e,n])};const oe=t.forwardRef(((e,n)=>{let{onEnter:r,onEntering:i,onEntered:a,onExit:o,onExiting:s,onExited:l,addEndListener:c,children:d,childRef:u,...p}=e;const f=(0,t.useRef)(null),h=ae(f,u),g=e=>{var t;h((t=e)&&"setState"in t?z.findDOMNode(t):null!=t?t:null)},x=e=>t=>{e&&f.current&&e(f.current,t)},b=(0,t.useCallback)(x(r),[r]),y=(0,t.useCallback)(x(i),[i]),v=(0,t.useCallback)(x(a),[a]),w=(0,t.useCallback)(x(o),[o]),k=(0,t.useCallback)(x(s),[s]),S=(0,t.useCallback)(x(l),[l]),j=(0,t.useCallback)(x(c),[c]);return(0,m.jsx)(U,{ref:n,...p,onEnter:b,onEntered:v,onEntering:y,onExit:w,onExited:S,onExiting:k,addEndListener:j,nodeRef:f,children:"function"===typeof d?(e,t)=>d(e,{...t,ref:g}):t.cloneElement(d,{ref:g})})})),se={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function le(e,t){const n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=se[e];return n+parseInt(T(t,r[0]),10)+parseInt(T(t,r[1]),10)}const ce={[N]:"collapse",[H]:"collapsing",[B]:"collapsing",[q]:"collapse show"},de=t.forwardRef(((e,n)=>{let{onEnter:r,onEntering:i,onEntered:a,onExit:s,onExiting:l,className:c,children:d,dimension:u="height",in:p=!1,timeout:f=300,mountOnEnter:h=!1,unmountOnExit:g=!1,appear:x=!1,getDimensionValue:b=le,...y}=e;const v="function"===typeof u?u():u,w=(0,t.useMemo)((()=>ne((e=>{e.style[v]="0"}),r)),[v,r]),k=(0,t.useMemo)((()=>ne((e=>{const t=`scroll${v[0].toUpperCase()}${v.slice(1)}`;e.style[v]=`${e[t]}px`}),i)),[v,i]),S=(0,t.useMemo)((()=>ne((e=>{e.style[v]=null}),a)),[v,a]),j=(0,t.useMemo)((()=>ne((e=>{e.style[v]=`${b(v,e)}px`,re(e)}),s)),[s,b,v]),A=(0,t.useMemo)((()=>ne((e=>{e.style[v]=null}),l)),[v,l]);return(0,m.jsx)(oe,{ref:n,addEndListener:te,...y,"aria-expanded":y.role?p:null,onEnter:w,onEntering:k,onEntered:S,onExit:j,onExiting:A,childRef:d.ref,in:p,timeout:f,mountOnEnter:h,unmountOnExit:g,appear:x,children:(e,n)=>t.cloneElement(d,{...n,className:o()(c,d.props.className,ce[e],"width"===v&&"collapse-horizontal")})})})),ue=de,pe=t.createContext(null);pe.displayName="NavbarContext";const fe=pe,me=t.forwardRef(((e,n)=>{let{children:r,bsPrefix:i,...a}=e;i=v(i,"navbar-collapse");const o=(0,t.useContext)(fe);return(0,m.jsx)(ue,{in:!(!o||!o.expanded),...a,children:(0,m.jsx)("div",{ref:n,className:i,children:r})})}));me.displayName="NavbarCollapse";const he=me;const ge=function(e){const n=(0,t.useRef)(e);return(0,t.useEffect)((()=>{n.current=e}),[e]),n};function xe(e){const n=ge(e);return(0,t.useCallback)((function(){return n.current&&n.current(...arguments)}),[n])}const be=t.forwardRef(((e,n)=>{let{bsPrefix:r,className:i,children:a,label:s="Toggle navigation",as:l="button",onClick:c,...d}=e;r=v(r,"navbar-toggler");const{onToggle:u,expanded:p}=(0,t.useContext)(fe)||{},f=xe((e=>{c&&c(e),u&&u()}));return"button"===l&&(d.type="button"),(0,m.jsx)(l,{...d,ref:n,onClick:f,"aria-label":s,className:o()(i,r,!p&&"collapsed"),children:a||(0,m.jsx)("span",{className:`${r}-icon`})})}));be.displayName="NavbarToggle";const ye=be,ve="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,we="undefined"!==typeof document||ve?t.useLayoutEffect:t.useEffect,ke=new WeakMap,Se=(e,t)=>{if(!e||!t)return;const n=ke.get(t)||new Map;ke.set(t,n);let r=n.get(e);return r||(r=t.matchMedia(e),r.refCount=0,n.set(r.media,r)),r};function je(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"undefined"===typeof window?void 0:window;const r=Se(e,n),[i,a]=(0,t.useState)((()=>!!r&&r.matches));return we((()=>{let t=Se(e,n);if(!t)return a(!1);let r=ke.get(n);const i=()=>{a(t.matches)};return t.refCount++,t.addListener(i),i(),()=>{t.removeListener(i),t.refCount--,t.refCount<=0&&(null==r||r.delete(t.media)),t=void 0}}),[e]),i}const Ae=function(e){const n=Object.keys(e);function r(e,t){return e===t?t:e?`${e} and ${t}`:t}function i(t){const r=function(e){return n[Math.min(n.indexOf(e)+1,n.length-1)]}(t);let i=e[r];return i="number"===typeof i?i-.2+"px":`calc(${i} - 0.2px)`,`(max-width: ${i})`}return function(n,a,o){let s;return"object"===typeof n?(s=n,o=a,a=!0):(a=a||!0,s={[n]:a}),je((0,t.useMemo)((()=>Object.entries(s).reduce(((t,n)=>{let[a,o]=n;return"up"!==o&&!0!==o||(t=r(t,function(t){let n=e[t];return"number"===typeof n&&(n=`${n}px`),`(min-width: ${n})`}(a))),"down"!==o&&!0!==o||(t=r(t,i(a))),t}),"")),[JSON.stringify(s)]),o)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Ce=Ae;function Ee(e){void 0===e&&(e=A());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(cA){return e.body}}function Re(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function Pe(e){const n=function(e){const n=(0,t.useRef)(e);return n.current=e,n}(e);(0,t.useEffect)((()=>()=>n.current()),[])}const Oe="data-rr-ui-";function Te(e){return`${Oe}${e}`}const Me=Te("modal-open");const ze=class{constructor(){let{ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(T(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(Me,""),T(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(Me),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}},Ie=(0,t.createContext)(G?window:void 0);Ie.Provider;function De(){return(0,t.useContext)(Ie)}const Le=(e,t)=>G?null==e?(t||A()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;const Fe=function(e){let{children:n,in:r,onExited:i,mountOnEnter:a,unmountOnExit:o}=e;const s=(0,t.useRef)(null),l=(0,t.useRef)(r),c=xe(i);(0,t.useEffect)((()=>{r?l.current=!0:c(s.current)}),[r,c]);const d=ae(s,n.ref),u=(0,t.cloneElement)(n,{ref:d});return r?u:o||!l.current&&a?null:u};const Ne=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Be(e){let{onEnter:n,onEntering:r,onEntered:i,onExit:a,onExiting:o,onExited:s,addEndListener:l,children:c}=e,d=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Ne);const{major:u}=function(){const e=t.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}(),p=u>=19?c.props.ref:c.ref,f=(0,t.useRef)(null),m=ae(f,"function"===typeof c?null:p),h=e=>t=>{e&&f.current&&e(f.current,t)},g=(0,t.useCallback)(h(n),[n]),x=(0,t.useCallback)(h(r),[r]),b=(0,t.useCallback)(h(i),[i]),y=(0,t.useCallback)(h(a),[a]),v=(0,t.useCallback)(h(o),[o]),w=(0,t.useCallback)(h(s),[s]),k=(0,t.useCallback)(h(l),[l]);return Object.assign({},d,{nodeRef:f},n&&{onEnter:g},r&&{onEntering:x},i&&{onEntered:b},a&&{onExit:y},o&&{onExiting:v},s&&{onExited:w},l&&{addEndListener:k},{children:"function"===typeof c?(e,t)=>c(e,Object.assign({},t,{ref:m})):(0,t.cloneElement)(c,{ref:m})})}const qe=["component"];const He=t.forwardRef(((e,t)=>{let{component:n}=e;const r=Be(function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,qe));return(0,m.jsx)(n,Object.assign({ref:t},r))}));function We(e){let{children:n,in:r,onExited:i,onEntered:a,transition:o}=e;const[s,l]=(0,t.useState)(!r);r&&s&&l(!1);const c=function(e){let{in:n,onTransition:r}=e;const i=(0,t.useRef)(null),a=(0,t.useRef)(!0),o=xe(r);return we((()=>{if(!i.current)return;let e=!1;return o({in:n,element:i.current,initial:a.current,isStale:()=>e}),()=>{e=!0}}),[n,o]),we((()=>(a.current=!1,()=>{a.current=!0})),[]),i}({in:!!r,onTransition:e=>{Promise.resolve(o(e)).then((()=>{e.isStale()||(e.in?null==a||a(e.element,e.initial):(l(!0),null==i||i(e.element)))}),(t=>{throw e.in||l(!0),t}))}}),d=ae(c,n.ref);return s&&!r?null:(0,t.cloneElement)(n,{ref:d})}function _e(e,t,n){return e?(0,m.jsx)(He,Object.assign({},n,{component:e})):t?(0,m.jsx)(We,Object.assign({},n,{transition:t})):(0,m.jsx)(Fe,Object.assign({},n))}const Ue=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let Ge;function Ke(e){const n=De(),r=e||function(e){return Ge||(Ge=new ze({ownerDocument:null==e?void 0:e.document})),Ge}(n),i=(0,t.useRef)({dialog:null,backdrop:null});return Object.assign(i.current,{add:()=>r.add(i.current),remove:()=>r.remove(i.current),isTopModal:()=>r.isTopModal(i.current),setDialogRef:(0,t.useCallback)((e=>{i.current.dialog=e}),[]),setBackdropRef:(0,t.useCallback)((e=>{i.current.backdrop=e}),[])})}const Ye=(0,t.forwardRef)(((e,n)=>{let{show:r=!1,role:i="dialog",className:a,style:o,children:s,backdrop:l=!0,keyboard:c=!0,onBackdropClick:d,onEscapeKeyDown:u,transition:p,runTransition:f,backdropTransition:h,runBackdropTransition:g,autoFocus:x=!0,enforceFocus:b=!0,restoreFocus:y=!0,restoreFocusOptions:v,renderDialog:w,renderBackdrop:k=e=>(0,m.jsx)("div",Object.assign({},e)),manager:S,container:j,onShow:A,onHide:C=()=>{},onExit:E,onExited:R,onExiting:P,onEnter:O,onEntering:T,onEntered:M}=e,I=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Ue);const D=De(),L=function(e,n){const r=De(),[i,a]=(0,t.useState)((()=>Le(e,null==r?void 0:r.document)));if(!i){const t=Le(e);t&&a(t)}return(0,t.useEffect)((()=>{n&&i&&n(i)}),[n,i]),(0,t.useEffect)((()=>{const t=Le(e);t!==i&&a(t)}),[e,i]),i}(j),F=Ke(S),N=function(){const e=(0,t.useRef)(!0),n=(0,t.useRef)((()=>e.current));return(0,t.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),n.current}(),B=function(e){const n=(0,t.useRef)(null);return(0,t.useEffect)((()=>{n.current=e})),n.current}(r),[q,H]=(0,t.useState)(!r),W=(0,t.useRef)(null);(0,t.useImperativeHandle)(n,(()=>F),[F]),G&&!B&&r&&(W.current=Ee(null==D?void 0:D.document)),r&&q&&H(!1);const _=xe((()=>{if(F.add(),Q.current=Z(document,"keydown",V),J.current=Z(document,"focus",(()=>setTimeout(K)),!0),A&&A(),x){var e,t;const n=Ee(null!=(e=null==(t=F.dialog)?void 0:t.ownerDocument)?e:null==D?void 0:D.document);F.dialog&&n&&!Re(F.dialog,n)&&(W.current=n,F.dialog.focus())}})),U=xe((()=>{var e;(F.remove(),null==Q.current||Q.current(),null==J.current||J.current(),y)&&(null==(e=W.current)||null==e.focus||e.focus(v),W.current=null)}));(0,t.useEffect)((()=>{r&&L&&_()}),[r,L,_]),(0,t.useEffect)((()=>{q&&U()}),[q,U]),Pe((()=>{U()}));const K=xe((()=>{if(!b||!N()||!F.isTopModal())return;const e=Ee(null==D?void 0:D.document);F.dialog&&e&&!Re(F.dialog,e)&&F.dialog.focus()})),Y=xe((e=>{e.target===e.currentTarget&&(null==d||d(e),!0===l&&C())})),V=xe((e=>{c&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&F.isTopModal()&&(null==u||u(e),e.defaultPrevented||C())})),J=(0,t.useRef)(),Q=(0,t.useRef)();if(!L)return null;const X=Object.assign({role:i,ref:F.setDialogRef,"aria-modal":"dialog"===i||void 0},I,{style:o,className:a,tabIndex:-1});let $=w?w(X):(0,m.jsx)("div",Object.assign({},X,{children:t.cloneElement(s,{role:"document"})}));$=_e(p,f,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!r,onExit:E,onExiting:P,onExited:function(){H(!0),null==R||R(...arguments)},onEnter:O,onEntering:T,onEntered:M,children:$});let ee=null;return l&&(ee=k({ref:F.setBackdropRef,onClick:Y}),ee=_e(h,g,{in:!!r,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ee})),(0,m.jsx)(m.Fragment,{children:z.createPortal((0,m.jsxs)(m.Fragment,{children:[ee,$]}),L)})}));Ye.displayName="Modal";const Ve=Object.assign(Ye,{Manager:ze}),Je={[B]:"show",[q]:"show"},Qe=t.forwardRef(((e,n)=>{let{className:r,children:i,transitionClasses:a={},onEnter:s,...l}=e;const c={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...l},d=(0,t.useCallback)(((e,t)=>{re(e),null==s||s(e,t)}),[s]);return(0,m.jsx)(oe,{ref:n,addEndListener:te,...c,onEnter:d,childRef:i.ref,children:(e,n)=>t.cloneElement(i,{...n,className:o()("fade",r,i.props.className,Je[e],a[e])})})}));Qe.displayName="Fade";const Ze=Qe,Xe=t.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="div",...a}=e;return r=v(r,"offcanvas-body"),(0,m.jsx)(i,{ref:t,className:o()(n,r),...a})}));Xe.displayName="OffcanvasBody";const $e=Xe,et={[B]:"show",[q]:"show"},tt=t.forwardRef(((e,n)=>{let{bsPrefix:r,className:i,children:a,in:s=!1,mountOnEnter:l=!1,unmountOnExit:c=!1,appear:d=!1,...u}=e;return r=v(r,"offcanvas"),(0,m.jsx)(oe,{ref:n,addEndListener:te,in:s,mountOnEnter:l,unmountOnExit:c,appear:d,...u,childRef:a.ref,children:(e,n)=>t.cloneElement(a,{...n,className:o()(i,a.props.className,(e===B||e===H)&&`${r}-toggling`,et[e])})})}));tt.displayName="OffcanvasToggling";const nt=tt,rt=t.createContext({onHide(){}});var it=n(5173),at=n.n(it);const ot={"aria-label":at().string,onClick:at().func,variant:at().oneOf(["white"])},st=t.forwardRef(((e,t)=>{let{className:n,variant:r,"aria-label":i="Close",...a}=e;return(0,m.jsx)("button",{ref:t,type:"button",className:o()("btn-close",r&&`btn-close-${r}`,n),"aria-label":i,...a})}));st.displayName="CloseButton",st.propTypes=ot;const lt=st,ct=t.forwardRef(((e,n)=>{let{closeLabel:r="Close",closeVariant:i,closeButton:a=!1,onHide:o,children:s,...l}=e;const c=(0,t.useContext)(rt),d=xe((()=>{null==c||c.onHide(),null==o||o()}));return(0,m.jsxs)("div",{ref:n,...l,children:[s,a&&(0,m.jsx)(lt,{"aria-label":r,variant:i,onClick:d})]})})),dt=ct,ut=t.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,closeLabel:i="Close",closeButton:a=!1,...s}=e;return n=v(n,"offcanvas-header"),(0,m.jsx)(dt,{ref:t,...s,className:o()(r,n),closeLabel:i,closeButton:a})}));ut.displayName="OffcanvasHeader";const pt=ut,ft=(mt="h5",t.forwardRef(((e,t)=>(0,m.jsx)("div",{...e,ref:t,className:o()(e.className,mt)}))));var mt;const ht=t.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i=ft,...a}=e;return r=v(r,"offcanvas-title"),(0,m.jsx)(i,{ref:t,className:o()(n,r),...a})}));ht.displayName="OffcanvasTitle";const gt=ht;var xt=Function.prototype.bind.call(Function.prototype.call,[].slice);function bt(e,t){return xt(e.querySelectorAll(t))}function yt(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const vt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",wt=".sticky-top",kt=".navbar-toggler";class St extends ze{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,T(t,{[e]:`${parseFloat(T(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],T(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(function(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}(t,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";bt(t,vt).forEach((t=>this.adjustAndStore(n,t,e.scrollBarWidth))),bt(t,wt).forEach((t=>this.adjustAndStore(r,t,-e.scrollBarWidth))),bt(t,kt).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();!function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=yt(e.className,t):e.setAttribute("class",yt(e.className&&e.className.baseVal||"",t))}(t,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";bt(t,vt).forEach((e=>this.restore(n,e))),bt(t,wt).forEach((e=>this.restore(r,e))),bt(t,kt).forEach((e=>this.restore(r,e)))}}let jt;const At=St;function Ct(e){return(0,m.jsx)(nt,{...e})}function Et(e){return(0,m.jsx)(Ze,{...e})}const Rt=t.forwardRef(((e,n)=>{let{bsPrefix:r,className:i,children:a,"aria-labelledby":s,placement:l="start",responsive:c,show:d=!1,backdrop:u=!0,keyboard:p=!0,scroll:f=!1,onEscapeKeyDown:h,onShow:g,onHide:x,container:b,autoFocus:y=!0,enforceFocus:w=!0,restoreFocus:k=!0,restoreFocusOptions:S,onEntered:j,onExit:A,onExiting:C,onEnter:E,onEntering:R,onExited:P,backdropClassName:O,manager:T,renderStaticNode:M=!1,...z}=e;const I=(0,t.useRef)();r=v(r,"offcanvas");const{onToggle:D}=(0,t.useContext)(fe)||{},[L,F]=(0,t.useState)(!1),N=Ce(c||"xs","up");(0,t.useEffect)((()=>{F(c?d&&!N:d)}),[d,c,N]);const B=xe((()=>{null==D||D(),null==x||x()})),q=(0,t.useMemo)((()=>({onHide:B})),[B]);const H=(0,t.useCallback)((e=>(0,m.jsx)("div",{...e,className:o()(`${r}-backdrop`,O)})),[O,r]),W=e=>(0,m.jsx)("div",{...e,...z,className:o()(i,c?`${r}-${c}`:r,`${r}-${l}`),"aria-labelledby":s,children:a});return(0,m.jsxs)(m.Fragment,{children:[!L&&(c||M)&&W({}),(0,m.jsx)(rt.Provider,{value:q,children:(0,m.jsx)(Ve,{show:L,ref:n,backdrop:u,container:b,keyboard:p,autoFocus:y,enforceFocus:w&&!f,restoreFocus:k,restoreFocusOptions:S,onEscapeKeyDown:h,onShow:g,onHide:B,onEnter:function(e){e&&(e.style.visibility="visible");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];null==E||E(e,...n)},onEntering:R,onEntered:j,onExit:A,onExiting:C,onExited:function(e){e&&(e.style.visibility="");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];null==P||P(...n)},manager:T||(f?(I.current||(I.current=new At({handleContainerOverflow:!1})),I.current):function(e){return jt||(jt=new St(e)),jt}()),transition:Ct,backdropTransition:Et,renderBackdrop:H,renderDialog:W})})]})}));Rt.displayName="Offcanvas";const Pt=Object.assign(Rt,{Body:$e,Header:pt,Title:gt}),Ot=t.forwardRef(((e,n)=>{const r=(0,t.useContext)(fe);return(0,m.jsx)(Pt,{ref:n,show:!(null==r||!r.expanded),...e,renderStaticNode:!0})}));Ot.displayName="NavbarOffcanvas";const Tt=Ot,Mt=t.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="span",...a}=e;return r=v(r,"navbar-text"),(0,m.jsx)(i,{ref:t,className:o()(n,r),...a})}));Mt.displayName="NavbarText";const zt=Mt,It=t.forwardRef(((e,n)=>{const{bsPrefix:r,expand:i=!0,variant:a="light",bg:s,fixed:c,sticky:d,className:u,as:p="nav",expanded:h,onToggle:g,onSelect:x,collapseOnSelect:b=!1,...y}=f(e,{expanded:"onToggle"}),w=v(r,"navbar"),k=(0,t.useCallback)((function(){null==x||x(...arguments),b&&h&&(null==g||g(!1))}),[x,b,h,g]);void 0===y.role&&"nav"!==p&&(y.role="navigation");let S=`${w}-expand`;"string"===typeof i&&(S=`${S}-${i}`);const j=(0,t.useMemo)((()=>({onToggle:()=>null==g?void 0:g(!h),bsPrefix:w,expanded:!!h,expand:i})),[w,h,i,g]);return(0,m.jsx)(fe.Provider,{value:j,children:(0,m.jsx)(l.Provider,{value:k,children:(0,m.jsx)(p,{ref:n,...y,className:o()(u,w,i&&S,a&&`${w}-${a}`,s&&`bg-${s}`,d&&`sticky-${d}`,c&&`fixed-${c}`)})})})}));It.displayName="Navbar";const Dt=Object.assign(It,{Brand:j,Collapse:he,Offcanvas:Tt,Text:zt,Toggle:ye}),Lt=t.forwardRef(((e,t)=>{let{bsPrefix:n,fluid:r=!1,as:i="div",className:a,...s}=e;const l=v(n,"container"),c="string"===typeof r?`-${r}`:"-fluid";return(0,m.jsx)(i,{ref:t,...s,className:o()(a,r?`${l}${c}`:l)})}));Lt.displayName="Container";const Ft=Lt;n(9197);const Nt=t.createContext(null);Nt.displayName="NavContext";const Bt=Nt,qt=t.createContext(null),Ht=["as","disabled"];function Wt(e){let{tagName:t,disabled:n,href:r,target:i,rel:a,role:o,onClick:s,tabIndex:l=0,type:c}=e;t||(t=null!=r||null!=i||null!=a?"a":"button");const d={tagName:t};if("button"===t)return[{type:c||"button",disabled:n},d];const u=e=>{(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==s||s(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:n?void 0:l,href:r,target:"a"===t?i:void 0,"aria-disabled":n||void 0,rel:"a"===t?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}const _t=t.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Ht);const[a,{tagName:o}]=Wt(Object.assign({tagName:n,disabled:r},i));return(0,m.jsx)(o,Object.assign({},i,a,{ref:t}))}));_t.displayName="Button";const Ut=_t,Gt=["as","active","eventKey"];function Kt(e){let{key:n,onClick:r,active:i,id:a,role:o,disabled:s}=e;const c=(0,t.useContext)(l),d=(0,t.useContext)(Bt),u=(0,t.useContext)(qt);let p=i;const f={role:o};if(d){o||"tablist"!==d.role||(f.role="tab");const e=d.getControllerId(null!=n?n:null),t=d.getControlledId(null!=n?n:null);f[Te("event-key")]=n,f.id=e||a,p=null==i&&null!=n?d.activeKey===n:i,!p&&(null!=u&&u.unmountOnExit||null!=u&&u.mountOnEnter)||(f["aria-controls"]=t)}return"tab"===f.role&&(f["aria-selected"]=p,p||(f.tabIndex=-1),s&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=xe((e=>{s||(null==r||r(e),null!=n&&c&&!e.isPropagationStopped()&&c(n,e))})),[f,{isActive:p}]}const Yt=t.forwardRef(((e,t)=>{let{as:n=Ut,active:r,eventKey:i}=e,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Gt);const[o,l]=Kt(Object.assign({key:s(i,a.href),active:r},a));return o[Te("active")]=l.isActive,(0,m.jsx)(n,Object.assign({},a,o,{ref:t}))}));Yt.displayName="NavItem";const Vt=Yt,Jt=["as","onSelect","activeKey","role","onKeyDown"];const Qt=()=>{},Zt=Te("event-key"),Xt=t.forwardRef(((e,n)=>{let{as:r="div",onSelect:i,activeKey:a,role:o,onKeyDown:c}=e,d=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,Jt);const u=function(){const[,e]=(0,t.useReducer)((e=>!e),!1);return e}(),p=(0,t.useRef)(!1),f=(0,t.useContext)(l),h=(0,t.useContext)(qt);let g,x;h&&(o=o||"tablist",a=h.activeKey,g=h.getControlledId,x=h.getControllerId);const b=(0,t.useRef)(null),y=e=>{const t=b.current;if(!t)return null;const n=bt(t,`[${Zt}]:not([aria-disabled=true])`),r=t.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const i=n.indexOf(r);if(-1===i)return null;let a=i+e;return a>=n.length&&(a=0),a<0&&(a=n.length-1),n[a]},v=(e,t)=>{null!=e&&(null==i||i(e,t),null==f||f(e,t))};(0,t.useEffect)((()=>{if(b.current&&p.current){const e=b.current.querySelector(`[${Zt}][aria-selected=true]`);null==e||e.focus()}p.current=!1}));const w=ae(n,b);return(0,m.jsx)(l.Provider,{value:v,children:(0,m.jsx)(Bt.Provider,{value:{role:o,activeKey:s(a),getControlledId:g||Qt,getControllerId:x||Qt},children:(0,m.jsx)(r,Object.assign({},d,{onKeyDown:e=>{if(null==c||c(e),!h)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=y(-1);break;case"ArrowRight":case"ArrowDown":t=y(1);break;default:return}var n;t&&(e.preventDefault(),v(t.dataset[(n="EventKey",`rrUi${n}`)]||null,e),p.current=!0,u())},ref:w,role:o}))})})}));Xt.displayName="Nav";const $t=Object.assign(Xt,{Item:Vt}),en=t.createContext(null);en.displayName="CardHeaderContext";const tn=en,nn=t.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="div",...a}=e;return r=v(r,"nav-item"),(0,m.jsx)(i,{ref:t,className:o()(n,r),...a})}));nn.displayName="NavItem";const rn=nn;new WeakMap;const an=["onKeyDown"];const on=t.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,an);const[i]=Wt(Object.assign({tagName:"a"},r)),a=xe((e=>{i.onKeyDown(e),null==n||n(e)}));return(o=r.href)&&"#"!==o.trim()&&"button"!==r.role?(0,m.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,m.jsx)("a",Object.assign({ref:t},r,i,{onKeyDown:a}));var o}));on.displayName="Anchor";const sn=on,ln=t.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:i=sn,active:a,eventKey:l,disabled:c=!1,...d}=e;n=v(n,"nav-link");const[u,p]=Kt({key:s(l,d.href),active:a,disabled:c,...d});return(0,m.jsx)(i,{...d,...u,ref:t,disabled:c,className:o()(r,n,c&&"disabled",p.isActive&&"active")})}));ln.displayName="NavLink";const cn=ln,dn=t.forwardRef(((e,n)=>{const{as:r="div",bsPrefix:i,variant:a,fill:s=!1,justify:l=!1,navbar:c,navbarScroll:d,className:u,activeKey:p,...h}=f(e,{activeKey:"onSelect"}),g=v(i,"nav");let x,b,y=!1;const w=(0,t.useContext)(fe),k=(0,t.useContext)(tn);return w?(x=w.bsPrefix,y=null==c||c):k&&({cardHeaderBsPrefix:b}=k),(0,m.jsx)($t,{as:r,ref:n,activeKey:p,className:o()(u,{[g]:!y,[`${x}-nav`]:y,[`${x}-nav-scroll`]:y&&d,[`${b}-${a}`]:!!b,[`${g}-${a}`]:!!a,[`${g}-fill`]:s,[`${g}-justified`]:l}),...h})}));dn.displayName="Nav";const un=Object.assign(dn,{Item:rn,Link:cn}),pn=n.p+"static/media/Atom_walk_logo-removebg-preview.21661b59140f92dd7ced.png";var fn=function(){return fn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},fn.apply(this,arguments)};Object.create;function mn(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var hn=n(7324),gn=n.n(hn),xn="-ms-",bn="-moz-",yn="-webkit-",vn="comm",wn="rule",kn="decl",Sn="@import",jn="@keyframes",An="@layer",Cn=Math.abs,En=String.fromCharCode,Rn=Object.assign;function Pn(e){return e.trim()}function On(e,t){return(e=t.exec(e))?e[0]:e}function Tn(e,t,n){return e.replace(t,n)}function Mn(e,t,n){return e.indexOf(t,n)}function zn(e,t){return 0|e.charCodeAt(t)}function In(e,t,n){return e.slice(t,n)}function Dn(e){return e.length}function Ln(e){return e.length}function Fn(e,t){return t.push(e),e}function Nn(e,t){return e.filter((function(e){return!On(e,t)}))}var Bn=1,qn=1,Hn=0,Wn=0,_n=0,Un="";function Gn(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Bn,column:qn,length:o,return:"",siblings:s}}function Kn(e,t){return Rn(Gn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Yn(e){for(;e.root;)e=Kn(e.root,{children:[e]});Fn(e,e.siblings)}function Vn(){return _n=Wn>0?zn(Un,--Wn):0,qn--,10===_n&&(qn=1,Bn--),_n}function Jn(){return _n=Wn<Hn?zn(Un,Wn++):0,qn++,10===_n&&(qn=1,Bn++),_n}function Qn(){return zn(Un,Wn)}function Zn(){return Wn}function Xn(e,t){return In(Un,e,t)}function $n(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function er(e){return Bn=qn=1,Hn=Dn(Un=e),Wn=0,[]}function tr(e){return Un="",e}function nr(e){return Pn(Xn(Wn-1,ar(91===e?e+2:40===e?e+1:e)))}function rr(e){for(;(_n=Qn())&&_n<33;)Jn();return $n(e)>2||$n(_n)>3?"":" "}function ir(e,t){for(;--t&&Jn()&&!(_n<48||_n>102||_n>57&&_n<65||_n>70&&_n<97););return Xn(e,Zn()+(t<6&&32==Qn()&&32==Jn()))}function ar(e){for(;Jn();)switch(_n){case e:return Wn;case 34:case 39:34!==e&&39!==e&&ar(_n);break;case 40:41===e&&ar(e);break;case 92:Jn()}return Wn}function or(e,t){for(;Jn()&&e+_n!==57&&(e+_n!==84||47!==Qn()););return"/*"+Xn(t,Wn-1)+"*"+En(47===e?e:Jn())}function sr(e){for(;!$n(Qn());)Jn();return Xn(e,Wn)}function lr(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function cr(e,t,n,r){switch(e.type){case An:if(e.children.length)break;case Sn:case kn:return e.return=e.return||e.value;case vn:return"";case jn:return e.return=e.value+"{"+lr(e.children,r)+"}";case wn:if(!Dn(e.value=e.props.join(",")))return""}return Dn(n=lr(e.children,r))?e.return=e.value+"{"+n+"}":""}function dr(e,t,n){switch(function(e,t){return 45^zn(e,0)?(((t<<2^zn(e,0))<<2^zn(e,1))<<2^zn(e,2))<<2^zn(e,3):0}(e,t)){case 5103:return yn+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return yn+e+e;case 4789:return bn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return yn+e+bn+e+xn+e+e;case 5936:switch(zn(e,t+11)){case 114:return yn+e+xn+Tn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return yn+e+xn+Tn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return yn+e+xn+Tn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return yn+e+xn+e+e;case 6165:return yn+e+xn+"flex-"+e+e;case 5187:return yn+e+Tn(e,/(\w+).+(:[^]+)/,yn+"box-$1$2"+xn+"flex-$1$2")+e;case 5443:return yn+e+xn+"flex-item-"+Tn(e,/flex-|-self/g,"")+(On(e,/flex-|baseline/)?"":xn+"grid-row-"+Tn(e,/flex-|-self/g,""))+e;case 4675:return yn+e+xn+"flex-line-pack"+Tn(e,/align-content|flex-|-self/g,"")+e;case 5548:return yn+e+xn+Tn(e,"shrink","negative")+e;case 5292:return yn+e+xn+Tn(e,"basis","preferred-size")+e;case 6060:return yn+"box-"+Tn(e,"-grow","")+yn+e+xn+Tn(e,"grow","positive")+e;case 4554:return yn+Tn(e,/([^-])(transform)/g,"$1"+yn+"$2")+e;case 6187:return Tn(Tn(Tn(e,/(zoom-|grab)/,yn+"$1"),/(image-set)/,yn+"$1"),e,"")+e;case 5495:case 3959:return Tn(e,/(image-set\([^]*)/,yn+"$1$`$1");case 4968:return Tn(Tn(e,/(.+:)(flex-)?(.*)/,yn+"box-pack:$3"+xn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+yn+e+e;case 4200:if(!On(e,/flex-|baseline/))return xn+"grid-column-align"+In(e,t)+e;break;case 2592:case 3360:return xn+Tn(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,On(e.props,/grid-\w+-end/)}))?~Mn(e+(n=n[t].value),"span",0)?e:xn+Tn(e,"-start","")+e+xn+"grid-row-span:"+(~Mn(n,"span",0)?On(n,/\d+/):+On(n,/\d+/)-+On(e,/\d+/))+";":xn+Tn(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return On(e.props,/grid-\w+-start/)}))?e:xn+Tn(Tn(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Tn(e,/(.+)-inline(.+)/,yn+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(e)-1-t>6)switch(zn(e,t+1)){case 109:if(45!==zn(e,t+4))break;case 102:return Tn(e,/(.+:)(.+)-([^]+)/,"$1"+yn+"$2-$3$1"+bn+(108==zn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Mn(e,"stretch",0)?dr(Tn(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Tn(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,a,o,s){return xn+n+":"+r+s+(i?xn+n+"-span:"+(a?o:+o-+r)+s:"")+e}));case 4949:if(121===zn(e,t+6))return Tn(e,":",":"+yn)+e;break;case 6444:switch(zn(e,45===zn(e,14)?18:11)){case 120:return Tn(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+yn+(45===zn(e,14)?"inline-":"")+"box$3$1"+yn+"$2$3$1"+xn+"$2box$3")+e;case 100:return Tn(e,":",":"+xn)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Tn(e,"scroll-","scroll-snap-")+e}return e}function ur(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case kn:return void(e.return=dr(e.value,e.length,n));case jn:return lr([Kn(e,{value:Tn(e.value,"@","@"+yn)})],r);case wn:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(On(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Yn(Kn(e,{props:[Tn(t,/:(read-\w+)/,":"+bn+"$1")]})),Yn(Kn(e,{props:[t]})),Rn(e,{props:Nn(n,r)});break;case"::placeholder":Yn(Kn(e,{props:[Tn(t,/:(plac\w+)/,":"+yn+"input-$1")]})),Yn(Kn(e,{props:[Tn(t,/:(plac\w+)/,":"+bn+"$1")]})),Yn(Kn(e,{props:[Tn(t,/:(plac\w+)/,xn+"input-$1")]})),Yn(Kn(e,{props:[t]})),Rn(e,{props:Nn(n,r)})}return""}))}}function pr(e){return tr(fr("",null,null,null,[""],e=er(e),0,[0],e))}function fr(e,t,n,r,i,a,o,s,l){for(var c=0,d=0,u=o,p=0,f=0,m=0,h=1,g=1,x=1,b=0,y="",v=i,w=a,k=r,S=y;g;)switch(m=b,b=Jn()){case 40:if(108!=m&&58==zn(S,u-1)){-1!=Mn(S+=Tn(nr(b),"&","&\f"),"&\f",Cn(c?s[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:S+=nr(b);break;case 9:case 10:case 13:case 32:S+=rr(m);break;case 92:S+=ir(Zn()-1,7);continue;case 47:switch(Qn()){case 42:case 47:Fn(hr(or(Jn(),Zn()),t,n,l),l);break;default:S+="/"}break;case 123*h:s[c++]=Dn(S)*x;case 125*h:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+d:-1==x&&(S=Tn(S,/\f/g,"")),f>0&&Dn(S)-u&&Fn(f>32?gr(S+";",r,n,u-1,l):gr(Tn(S," ","")+";",r,n,u-2,l),l);break;case 59:S+=";";default:if(Fn(k=mr(S,t,n,c,d,i,s,y,v=[],w=[],u,a),a),123===b)if(0===d)fr(S,t,k,k,v,a,u,s,w);else switch(99===p&&110===zn(S,3)?100:p){case 100:case 108:case 109:case 115:fr(e,k,k,r&&Fn(mr(e,k,k,0,0,i,s,y,i,v=[],u,w),w),i,w,u,s,r?v:w);break;default:fr(S,k,k,k,[""],w,0,s,w)}}c=d=f=0,h=x=1,y=S="",u=o;break;case 58:u=1+Dn(S),f=m;default:if(h<1)if(123==b)--h;else if(125==b&&0==h++&&125==Vn())continue;switch(S+=En(b),b*h){case 38:x=d>0?1:(S+="\f",-1);break;case 44:s[c++]=(Dn(S)-1)*x,x=1;break;case 64:45===Qn()&&(S+=nr(Jn())),p=Qn(),d=u=Dn(y=S+=sr(Zn())),b++;break;case 45:45===m&&2==Dn(S)&&(h=0)}}return a}function mr(e,t,n,r,i,a,o,s,l,c,d,u){for(var p=i-1,f=0===i?a:[""],m=Ln(f),h=0,g=0,x=0;h<r;++h)for(var b=0,y=In(e,p+1,p=Cn(g=o[h])),v=e;b<m;++b)(v=Pn(g>0?f[b]+" "+y:Tn(y,/&\f/g,f[b])))&&(l[x++]=v);return Gn(e,t,n,0===i?wn:s,l,c,d,u)}function hr(e,t,n,r){return Gn(e,t,n,vn,En(_n),In(e,2,-2),0,r)}function gr(e,t,n,r,i){return Gn(e,t,n,kn,In(e,0,r),In(e,r+1,-1),r,i)}var xr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},br="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",yr="active",vr="data-styled-version",wr="6.1.12",kr="/*!sc*/\n",Sr="undefined"!=typeof window&&"HTMLElement"in window,jr=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Ar=(new Set,Object.freeze([])),Cr=Object.freeze({});function Er(e,t,n){return void 0===n&&(n=Cr),e.theme!==n.theme&&e.theme||t||n.theme}var Rr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Pr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Or=/(^-|-$)/g;function Tr(e){return e.replace(Pr,"-").replace(Or,"")}var Mr=/(a)(d)/gi,zr=52,Ir=function(e){return String.fromCharCode(e+(e>25?39:97))};function Dr(e){var t,n="";for(t=Math.abs(e);t>zr;t=t/zr|0)n=Ir(t%zr)+n;return(Ir(t%zr)+n).replace(Mr,"$1-$2")}var Lr,Fr=5381,Nr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Br=function(e){return Nr(Fr,e)};function qr(e){return Dr(Br(e)>>>0)}function Hr(e){return e.displayName||e.name||"Component"}function Wr(e){return"string"==typeof e&&!0}var _r="function"==typeof Symbol&&Symbol.for,Ur=_r?Symbol.for("react.memo"):60115,Gr=_r?Symbol.for("react.forward_ref"):60112,Kr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jr=((Lr={})[Gr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lr[Ur]=Vr,Lr);function Qr(e){return("type"in(t=e)&&t.type.$$typeof)===Ur?Vr:"$$typeof"in e?Jr[e.$$typeof]:Kr;var t}var Zr=Object.defineProperty,Xr=Object.getOwnPropertyNames,$r=Object.getOwnPropertySymbols,ei=Object.getOwnPropertyDescriptor,ti=Object.getPrototypeOf,ni=Object.prototype;function ri(e,t,n){if("string"!=typeof t){if(ni){var r=ti(t);r&&r!==ni&&ri(e,r,n)}var i=Xr(t);$r&&(i=i.concat($r(t)));for(var a=Qr(e),o=Qr(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Yr||n&&n[l]||o&&l in o||a&&l in a)){var c=ei(t,l);try{Zr(e,l,c)}catch(e){}}}}return e}function ii(e){return"function"==typeof e}function ai(e){return"object"==typeof e&&"styledComponentId"in e}function oi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function si(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function li(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ci(e,t,n){if(void 0===n&&(n=!1),!n&&!li(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ci(e[r],t[r]);else if(li(t))for(var r in t)e[r]=ci(e[r],t[r]);return e}function di(e,t){Object.defineProperty(e,"toString",{value:t})}function ui(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var pi=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw ui(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(kr);return t},e}(),fi=new Map,mi=new Map,hi=1,gi=function(e){if(fi.has(e))return fi.get(e);for(;mi.has(hi);)hi++;var t=hi++;return fi.set(e,t),mi.set(t,e),t},xi=function(e,t){hi=t+1,fi.set(e,t),mi.set(t,e)},bi="style[".concat(br,"][").concat(vr,'="').concat(wr,'"]'),yi=new RegExp("^".concat(br,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vi=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},wi=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(kr),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(yi);if(l){var c=0|parseInt(l[1],10),d=l[2];0!==c&&(xi(d,c),vi(e,d,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},ki=function(e){for(var t=document.querySelectorAll(bi),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(br)!==yr&&(wi(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Si(){return n.nc}var ji=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(br,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(br,yr),r.setAttribute(vr,wr);var o=Si();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},Ai=function(){function e(e){this.element=ji(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw ui(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ci=function(){function e(e){this.element=ji(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Ei=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Ri=Sr,Pi={isServer:!Sr,useCSSOMInjection:!jr},Oi=function(){function e(e,t,n){void 0===e&&(e=Cr),void 0===t&&(t={});var r=this;this.options=fn(fn({},Pi),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Sr&&Ri&&(Ri=!1,ki(this)),di(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return mi.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(br,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(kr)},a=0;a<n;a++)i(a);return r}(r)}))}return e.registerId=function(e){return gi(e)},e.prototype.rehydrate=function(){!this.server&&Sr&&ki(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(fn(fn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Ei(n):t?new Ai(n):new Ci(n)}(this.options),new pi(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(gi(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(gi(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(gi(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ti=/&/g,Mi=/^\s*\/\/.*$/gm;function zi(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=zi(e.children,t)),e}))}function Ii(e){var t,n,r,i=void 0===e?Cr:e,a=i.options,o=void 0===a?Cr:a,s=i.plugins,l=void 0===s?Ar:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},d=l.slice();d.push((function(e){e.type===wn&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Ti,n).replace(r,c))})),o.prefix&&d.push(ur),d.push(cr);var u=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Mi,""),c=pr(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);o.namespace&&(c=zi(c,o.namespace));var u,p=[];return lr(c,function(e){var t=Ln(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(d.concat((u=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&u(e)})))),p};return u.hash=l.length?l.reduce((function(e,t){return t.name||ui(15),Nr(e,t.name)}),Fr).toString():"",u}var Di=new Oi,Li=Ii(),Fi=t.createContext({shouldForwardProp:void 0,styleSheet:Di,stylis:Li}),Ni=(Fi.Consumer,t.createContext(void 0));function Bi(){return(0,t.useContext)(Fi)}function qi(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],i=n[1],a=Bi().styleSheet,o=(0,t.useMemo)((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,a]),s=(0,t.useMemo)((function(){return Ii({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){gn()(r,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:s}}),[e.shouldForwardProp,o,s]);return t.createElement(Fi.Provider,{value:l},t.createElement(Ni.Provider,{value:s},e.children))}var Hi=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Li);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,di(this,(function(){throw ui(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Li),this.name+e.hash},e}(),Wi=function(e){return e>="A"&&e<="Z"};function _i(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Wi(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ui=function(e){return null==e||!1===e||""===e},Gi=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Ui(a)&&(Array.isArray(a)&&a.isCss||ii(a)?r.push("".concat(_i(i),":"),a,";"):li(a)?r.push.apply(r,mn(mn(["".concat(i," {")],Gi(a),!1),["}"],!1)):r.push("".concat(_i(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in xr||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ki(e,t,n,r){return Ui(e)?[]:ai(e)?[".".concat(e.styledComponentId)]:ii(e)?!ii(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Ki(e(t),t,n,r):e instanceof Hi?n?(e.inject(n,r),[e.getName(r)]):[e]:li(e)?Gi(e):Array.isArray(e)?Array.prototype.concat.apply(Ar,e.map((function(e){return Ki(e,t,n,r)}))):[e.toString()];var i}function Yi(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ii(n)&&!ai(n))return!1}return!0}var Vi=Br(wr),Ji=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Yi(e),this.componentId=t,this.baseHash=Nr(Vi,t),this.baseStyle=n,Oi.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=oi(r,this.staticRulesId);else{var i=si(Ki(this.rules,e,t,n)),a=Dr(Nr(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=oi(r,a),this.staticRulesId=a}else{for(var s=Nr(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)l+=d;else if(d){var u=si(Ki(d,e,t,n));s=Nr(s,u+c),l+=u}}if(l){var p=Dr(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=oi(r,p)}}return r},e}(),Qi=t.createContext(void 0);Qi.Consumer;var Zi={};new Set;function Xi(e,n,r){var i=ai(e),a=e,o=!Wr(e),s=n.attrs,l=void 0===s?Ar:s,c=n.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Tr(e);Zi[n]=(Zi[n]||0)+1;var r="".concat(n,"-").concat(qr(wr+n+Zi[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,u=n.displayName,p=void 0===u?function(e){return Wr(e)?"styled.".concat(e):"Styled(".concat(Hr(e),")")}(e):u,f=n.displayName&&n.componentId?"".concat(Tr(n.displayName),"-").concat(n.componentId):n.componentId||d,m=i&&a.attrs?a.attrs.concat(l).filter(Boolean):l,h=n.shouldForwardProp;if(i&&a.shouldForwardProp){var g=a.shouldForwardProp;if(n.shouldForwardProp){var x=n.shouldForwardProp;h=function(e,t){return g(e,t)&&x(e,t)}}else h=g}var b=new Ji(r,f,i?a.componentStyle:void 0);function y(e,n){return function(e,n,r){var i=e.attrs,a=e.componentStyle,o=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,d=t.useContext(Qi),u=Bi(),p=e.shouldForwardProp||u.shouldForwardProp,f=Er(n,d,o)||Cr,m=function(e,t,n){for(var r,i=fn(fn({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=ii(r=e[a])?r(i):r;for(var s in o)i[s]="className"===s?oi(i[s],o[s]):"style"===s?fn(fn({},i[s]),o[s]):o[s]}return t.className&&(i.className=oi(i.className,t.className)),i}(i,n,f),h=m.as||c,g={};for(var x in m)void 0===m[x]||"$"===x[0]||"as"===x||"theme"===x&&m.theme===f||("forwardedAs"===x?g.as=m.forwardedAs:p&&!p(x,h)||(g[x]=m[x]));var b=function(e,t){var n=Bi();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,m),y=oi(s,l);return b&&(y+=" "+b),m.className&&(y+=" "+m.className),g[Wr(h)&&!Rr.has(h)?"class":"className"]=y,g.ref=r,(0,t.createElement)(h,g)}(v,e,n)}y.displayName=p;var v=t.forwardRef(y);return v.attrs=m,v.componentStyle=b,v.displayName=p,v.shouldForwardProp=h,v.foldedComponentIds=i?oi(a.foldedComponentIds,a.styledComponentId):"",v.styledComponentId=f,v.target=i?a.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)ci(e,i[r],!0);return e}({},a.defaultProps,e):e}}),di(v,(function(){return".".concat(v.styledComponentId)})),o&&ri(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function $i(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ea=function(e){return Object.assign(e,{isCss:!0})};function ta(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ii(e)||li(e))return ea(Ki($i(Ar,mn([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ki(r):ea(Ki($i(r,t)))}function na(e,t,n){if(void 0===n&&(n=Cr),!t)throw ui(1,t);var r=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,ta.apply(void 0,mn([r],i,!1)))};return r.attrs=function(r){return na(e,t,fn(fn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return na(e,t,fn(fn({},n),r))},r}var ra=function(e){return na(Xi,e)},ia=ra;Rr.forEach((function(e){ia[e]=ra(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Yi(e),Oi.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var i=r(si(Ki(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Oi.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function aa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=si(ta.apply(void 0,mn([e],t,!1))),i=qr(r);return new Hi(i,r)}var oa;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Si(),r=si([n&&'nonce="'.concat(n,'"'),"".concat(br,'="true"'),"".concat(vr,'="').concat(wr,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw ui(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw ui(2);var r=e.instance.toString();if(!r)return[];var i=((n={})[br]="",n[vr]=wr,n.dangerouslySetInnerHTML={__html:r},n),a=Si();return a&&(i.nonce=a),[t.createElement("style",fn({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Oi({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw ui(2);return t.createElement(qi,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw ui(3)}})(),"__sc-".concat(br,"__");function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sa.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(oa||(oa={}));const la="popstate";function ca(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function da(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(cA){}}}function ua(e,t){return{usr:e.state,key:e.key,idx:t}}function pa(e,t,n,r){return void 0===n&&(n=null),sa({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?ma(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function fa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function ma(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ha(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=oa.Pop,l=null,c=d();function d(){return(o.state||{idx:null}).idx}function u(){s=oa.Pop;let e=d(),t=null==e?null:e-c;c=e,l&&l({action:s,location:f.location,delta:t})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:fa(e);return n=n.replace(/ $/,"%20"),ca(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==c&&(c=0,o.replaceState(sa({},o.state,{idx:c}),""));let f={get action(){return s},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(la,u),l=e,()=>{i.removeEventListener(la,u),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=oa.Push;let r=pa(f.location,e,t);n&&n(r,e),c=d()+1;let u=ua(r,c),p=f.createHref(r);try{o.pushState(u,"",p)}catch(m){if(m instanceof DOMException&&"DataCloneError"===m.name)throw m;i.location.assign(p)}a&&l&&l({action:s,location:f.location,delta:1})},replace:function(e,t){s=oa.Replace;let r=pa(f.location,e,t);n&&n(r,e),c=d();let i=ua(r,c),u=f.createHref(r);o.replaceState(i,"",u),a&&l&&l({action:s,location:f.location,delta:0})},go:e=>o.go(e)};return f}var ga;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(ga||(ga={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function xa(e,t,n){return void 0===n&&(n="/"),ba(e,t,n,!1)}function ba(e,t,n,r){let i=Ma(("string"===typeof t?ma(t):t).pathname||"/",n);if(null==i)return null;let a=ya(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=Ta(i);o=Pa(a[s],e,r)}return o}function ya(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(ca(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let s=Fa([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(ca(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),ya(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:Ra(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of va(e.path))i(e,t,r);else i(e,t)})),t}function va(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=va(r.join("/")),s=[];return s.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}const wa=/^:[\w-]+$/,ka=3,Sa=2,ja=1,Aa=10,Ca=-2,Ea=e=>"*"===e;function Ra(e,t){let n=e.split("/"),r=n.length;return n.some(Ea)&&(r+=Ca),t&&(r+=Sa),n.filter((e=>!Ea(e))).reduce(((e,t)=>e+(wa.test(t)?ka:""===t?ja:Aa)),r)}function Pa(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===a?t:t.slice(a.length)||"/",d=Oa({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),u=e.route;if(!d&&l&&n&&!r[r.length-1].route.index&&(d=Oa({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Fa([a,d.pathname]),pathnameBase:Na(Fa([a,d.pathnameBase])),route:u}),"/"!==d.pathnameBase&&(a=Fa([a,d.pathnameBase]))}return o}function Oa(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);da("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:o,pattern:e}}function Ta(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return da(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Ma(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function za(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function Ia(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function Da(e,t){let n=Ia(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function La(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=ma(e):(i=sa({},e),ca(!i.pathname||!i.pathname.includes("?"),za("?","pathname","search",i)),ca(!i.pathname||!i.pathname.includes("#"),za("#","pathname","hash",i)),ca(!i.search||!i.search.includes("#"),za("#","search","hash",i)));let a,o=""===e||""===i.pathname,s=o?"/":i.pathname;if(null==s)a=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?ma(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:Ba(r),hash:qa(i)}}(i,a),c=s&&"/"!==s&&s.endsWith("/"),d=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!d||(l.pathname+="/"),l}const Fa=e=>e.join("/").replace(/\/\/+/g,"/"),Na=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ba=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",qa=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function Ha(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const Wa=["post","put","patch","delete"],_a=(new Set(Wa),["get",...Wa]);new Set(_a),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function Ua(){return Ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ua.apply(this,arguments)}const Ga=t.createContext(null);const Ka=t.createContext(null);const Ya=t.createContext(null);const Va=t.createContext(null);const Ja=t.createContext({outlet:null,matches:[],isDataRoute:!1});const Qa=t.createContext(null);function Za(){return null!=t.useContext(Va)}function Xa(){return Za()||ca(!1),t.useContext(Va).location}function $a(e){t.useContext(Ya).static||t.useLayoutEffect(e)}function eo(){let{isDataRoute:e}=t.useContext(Ja);return e?function(){let{router:e}=co(so.UseNavigateStable),n=po(lo.UseNavigateStable),r=t.useRef(!1);$a((()=>{r.current=!0}));let i=t.useCallback((function(t,i){void 0===i&&(i={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,Ua({fromRouteId:n},i)))}),[e,n]);return i}():function(){Za()||ca(!1);let e=t.useContext(Ga),{basename:n,future:r,navigator:i}=t.useContext(Ya),{matches:a}=t.useContext(Ja),{pathname:o}=Xa(),s=JSON.stringify(Da(a,r.v7_relativeSplatPath)),l=t.useRef(!1);$a((()=>{l.current=!0}));let c=t.useCallback((function(t,r){if(void 0===r&&(r={}),!l.current)return;if("number"===typeof t)return void i.go(t);let a=La(t,JSON.parse(s),o,"path"===r.relative);null==e&&"/"!==n&&(a.pathname="/"===a.pathname?n:Fa([n,a.pathname])),(r.replace?i.replace:i.push)(a,r.state,r)}),[n,i,s,o,e]);return c}()}function to(e,n,r,i){Za()||ca(!1);let{navigator:a}=t.useContext(Ya),{matches:o}=t.useContext(Ja),s=o[o.length-1],l=s?s.params:{},c=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let d,u=Xa();if(n){var p;let e="string"===typeof n?ma(n):n;"/"===c||(null==(p=e.pathname)?void 0:p.startsWith(c))||ca(!1),d=e}else d=u;let f=d.pathname||"/",m=f;if("/"!==c){let e=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(e.length).join("/")}let h=xa(e,{pathname:m});let g=oo(h&&h.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:Fa([c,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:Fa([c,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),o,r,i);return n&&g?t.createElement(Va.Provider,{value:{location:Ua({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:oa.Pop}},g):g}function no(){let e=function(){var e;let n=t.useContext(Qa),r=uo(lo.UseRouteError),i=po(lo.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[i]}(),n=Ha(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:a},r):null,null)}const ro=t.createElement(no,null);class io extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(Ja.Provider,{value:this.props.routeContext},t.createElement(Qa.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ao(e){let{routeContext:n,match:r,children:i}=e,a=t.useContext(Ga);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(Ja.Provider,{value:n},i)}function oo(e,n,r,i){var a;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===i&&(i=null),null==e){var o;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(o=i)&&o.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,l=null==(a=r)?void 0:a.errors;if(null!=l){let e=s.findIndex((e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id])));e>=0||ca(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,d=-1;if(r&&i&&i.v7_partialHydration)for(let t=0;t<s.length;t++){let e=s[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,i=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||i){c=!0,s=d>=0?s.slice(0,d+1):[s[0]];break}}}return s.reduceRight(((e,i,a)=>{let o,u=!1,p=null,f=null;var m;r&&(o=l&&i.route.id?l[i.route.id]:void 0,p=i.route.errorElement||ro,c&&(d<0&&0===a?(m="route-fallback",!1||fo[m]||(fo[m]=!0),u=!0,f=null):d===a&&(u=!0,f=i.route.hydrateFallbackElement||null)));let h=n.concat(s.slice(0,a+1)),g=()=>{let n;return n=o?p:u?f:i.route.Component?t.createElement(i.route.Component,null):i.route.element?i.route.element:e,t.createElement(ao,{match:i,routeContext:{outlet:e,matches:h,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===a)?t.createElement(io,{location:r.location,revalidation:r.revalidation,component:p,error:o,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()}),null)}var so=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(so||{}),lo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(lo||{});function co(e){let n=t.useContext(Ga);return n||ca(!1),n}function uo(e){let n=t.useContext(Ka);return n||ca(!1),n}function po(e){let n=function(){let e=t.useContext(Ja);return e||ca(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||ca(!1),r.route.id}const fo={};r.startTransition;function mo(e){ca(!1)}function ho(e){let{basename:n="/",children:r=null,location:i,navigationType:a=oa.Pop,navigator:o,static:s=!1,future:l}=e;Za()&&ca(!1);let c=n.replace(/^\/*/,"/"),d=t.useMemo((()=>({basename:c,navigator:o,static:s,future:Ua({v7_relativeSplatPath:!1},l)})),[c,l,o,s]);"string"===typeof i&&(i=ma(i));let{pathname:u="/",search:p="",hash:f="",state:m=null,key:h="default"}=i,g=t.useMemo((()=>{let e=Ma(u,c);return null==e?null:{location:{pathname:e,search:p,hash:f,state:m,key:h},navigationType:a}}),[c,u,p,f,m,h,a]);return null==g?null:t.createElement(Ya.Provider,{value:d},t.createElement(Va.Provider,{children:r,value:g}))}function go(e){let{children:t,location:n}=e;return to(xo(t),n)}new Promise((()=>{}));t.Component;function xo(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,i)=>{if(!t.isValidElement(e))return;let a=[...n,i];if(e.type===t.Fragment)return void r.push.apply(r,xo(e.props.children,a));e.type!==mo&&ca(!1),e.props.index&&e.props.children&&ca(!1);let o={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=xo(e.props.children,a)),r.push(o)})),r}const bo=n.p+"static/media/human-resources1.d3a618f00955a9b64ed0.png",yo=n.p+"static/media/crm1.3a67e5242c9806715379.png",vo=n.p+"static/media/Labtest.d306211505644b5096b4.png",wo=n.p+"static/media/erp.2de281720970778ea423.png",ko=aa`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,So=ia.div`
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
  animation: ${ko} 0.3s ease-out;
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
`,jo=ia.div`
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
  text-align: left;
  color: #343a40;
`,Ao=e=>{let{show:n}=e;const r=eo(),[i,a]=(0,t.useState)(""),o=(e,t)=>{a(e),r(t)};return(0,m.jsxs)(So,{show:n,children:[(0,m.jsx)(jo,{children:"Explore Our Products"}),(0,m.jsxs)("div",{className:"product-item "+("CRM"===i?"active":""),onClick:()=>o("CRM","/crm.html"),children:[(0,m.jsx)("img",{className:"product-icon",src:yo,alt:"CRM"}),(0,m.jsx)("span",{children:"Customer Relationship Management (CRM)"})]}),(0,m.jsxs)("div",{className:"product-item "+("HRM"===i?"active":""),onClick:()=>o("HRM","/hrm.html"),children:[(0,m.jsx)("img",{className:"product-icon",src:bo,alt:"HRM"}),(0,m.jsx)("span",{children:"Human Resource Management (HRM)"})]}),(0,m.jsxs)("div",{className:"product-item "+("LMS"===i?"active":""),onClick:()=>o("LMS","/lms.html"),children:[(0,m.jsx)("img",{className:"product-icon",src:vo,alt:"LMS"}),(0,m.jsx)("span",{children:"Lab Management System (LMS)"})]}),(0,m.jsxs)("div",{className:"product-item "+("ERP"===i?"active":""),onClick:()=>o("ERP","/Product.html"),children:[(0,m.jsx)("img",{className:"product-icon",src:wo,alt:"ERP"}),(0,m.jsx)("span",{children:"Enterprise Resource Planning (ERP)"})]})]})},Co=ia.img`
  width: 180px;
`,Eo=ia.div`
  position: relative; /* Necessary for positioning the dropdown menu */
`,Ro=()=>{const e=Xa(),n=eo(),[r,i]=(0,t.useState)("home"),[a,o]=(0,t.useState)(!1),[s,l]=(0,t.useState)(!0),[c,d]=(0,t.useState)(!1),[u,p]=(0,t.useState)(!0);(0,t.useEffect)((()=>{e.pathname.includes("assessment")?p(!1):p(!0)}),[e.pathname]),(0,t.useEffect)((()=>{const e=()=>{window.scrollY>50?o(!0):o(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return(0,t.useEffect)((()=>{const t=new URLSearchParams(e.search).get("is_logged_in");l("WUVT"!==t)}),[e]),(0,m.jsx)("div",{children:u&&(0,m.jsx)(Dt,{expand:"md",className:a?"scrolled":"",children:(0,m.jsxs)(Ft,{children:[(0,m.jsx)(Dt.Brand,{href:"/",children:(0,m.jsx)(Co,{src:pn,alt:"Logo"})}),(0,m.jsx)(Dt.Toggle,{"aria-controls":"basic-navbar-nav",children:(0,m.jsx)("span",{className:"navbar-toggler-icon"})}),(0,m.jsxs)(Dt.Collapse,{id:"basic-navbar-nav",className:"mobile",children:[(0,m.jsxs)(un,{className:"ms-auto",children:[(0,m.jsxs)(Eo,{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[(0,m.jsx)(un.Link,{href:"/Product.html",className:"Product"===r?"active navbar-link":"navbar-link",onClick:()=>i("Product"),children:"Products"}),(0,m.jsx)(Ao,{show:c})]}),(0,m.jsx)(un.Link,{href:"/pricing.html",className:"Pricing"===r?"active navbar-link":"navbar-link",onClick:()=>i("Pricing"),children:"Pricing"}),(0,m.jsx)(un.Link,{href:"/aboutUs.html",className:"about"===r?"active navbar-link":"navbar-link",onClick:()=>i("about"),children:"About Us"}),(0,m.jsx)(un.Link,{href:"/contactUs.html",className:"projects"===r?"active navbar-link":"navbar-link",onClick:()=>i("projects"),children:"Contact Us"})]}),(0,m.jsx)("span",{className:"navbar-text",children:(0,m.jsx)("button",{onClick:()=>{s?window.location.href="https://www.atomwalk.com/login/":n(-1)},className:"vvd",children:s?(0,m.jsx)("span",{children:"Login"}):(0,m.jsx)("span",{children:"Back"})})})]})]})})})};n.p;var Po=n(6930);const Oo=n.p+"static/media/Manufacturing-Business-Development-Tips-1024x576.074a46b916689a522875.jpg",To=n.p+"static/media/labmangement.ff0cade8676acbeeba14.jpg",Mo=n.p+"static/media/chemical.eb8ede543e55d00b0160.png",zo=n.p+"static/media/consaltant.918ca418601df0f447f2.jpg",Io=ia.div`
  padding: 20px;
  background-color: rgb(255 246 247);
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 50px;
  }
`,Do=ia.div`
  margin-bottom: 40px;
`,Lo=ia.h1`
margin-top: 40px;
  font-size: 35px;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,Fo=ia.div`
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
`,No=ia.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 300px;
    margin-right: 30px;
    margin-bottom: 0;
  }
`,Bo=ia.div`
  flex: 1;
`,qo=ia.h2`
  font-size: 24px;
  color: #34495e;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`,Ho=ia.p`
  font-size: 16px;
  color: #7f8c8d;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,Wo=()=>{const e=()=>{window.location.href="/product.html"};return(0,m.jsxs)(Io,{children:[(0,m.jsx)(Lo,{children:"Streamlining Business Operations"}),(0,m.jsx)(Do,{children:(0,m.jsxs)(Fo,{onClick:e,style:{backgroundColor:"#F6EAFF"},children:[(0,m.jsx)(No,{src:Oo,alt:"Manufacturing Small Business"}),(0,m.jsxs)(Bo,{children:[(0,m.jsx)(qo,{children:"Discrete Manufacturing"}),(0,m.jsx)(Ho,{children:"In the manufacturing sector, optimizing production lines, managing supply chains, and maintaining equipment are vital. Implementing systems for real-time monitoring and predictive maintenance can improve productivity and reduce downtime."})]})]})}),(0,m.jsx)(Do,{children:(0,m.jsxs)(Fo,{onClick:e,style:{backgroundColor:"#EDF5FF"},children:[(0,m.jsx)(No,{src:Mo,alt:"Chemical Industry"}),(0,m.jsxs)(Bo,{children:[(0,m.jsx)(qo,{children:"Process Manufacturing"}),(0,m.jsx)(Ho,{children:"Production process (Recipe Management), Planning, Project/ Work order management, Operational efficiency, Inventory (Batch expiry tracking)/ Warehouse management, CRM, Accounting and Finan- cial management, Supplier and Purchase Order management."})]})]})}),(0,m.jsx)(Do,{children:(0,m.jsxs)(Fo,{onClick:e,style:{backgroundColor:"#FFEADF"},children:[(0,m.jsx)(No,{src:zo,alt:"Consultancy Business"}),(0,m.jsxs)(Bo,{children:[(0,m.jsx)(qo,{children:"Consultancy, Services, Trading & NGOs"}),(0,m.jsx)(Ho,{children:"Effective project management ensures timely completion of tasks, optimizing resources and teamwork. Operational efficiency focuses on streamlining processes for maximum productivity. Integrated systems for CRM, accounting, financial management, and supplier/purchase order management enhance decision-making, track finances, and ensure smooth supplier relations."})]})]})}),(0,m.jsx)(Do,{children:(0,m.jsxs)(Fo,{onClick:()=>{window.location.href="/lms.html"},style:{backgroundColor:"#E1FFF6"},children:[(0,m.jsx)(No,{src:To,alt:"Lab Management System"}),(0,m.jsxs)(Bo,{children:[(0,m.jsx)(qo,{children:"Lab Management"}),(0,m.jsx)(Ho,{children:"Research and Development (R & D) Labs in companies/ Universities - Grant management, Operational efficiency chemical consumption, Lab equipment management, Supplier and Purchase order management, Lab report/ documentation."})]})]})})]})},_o=t.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:i="div",...a}=e;const s=v(n,"row"),l=w(),c=k(),d=`${s}-cols`,u=[];return l.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const r=e!==c?`-${e}`:"";null!=n&&u.push(`${d}${r}-${n}`)})),(0,m.jsx)(i,{ref:t,...a,className:o()(r,s,...u)})}));_o.displayName="Row";const Uo=_o;const Go=t.forwardRef(((e,t)=>{const[{className:n,...r},{as:i="div",bsPrefix:a,spans:s}]=function(e){let{as:t,bsPrefix:n,className:r,...i}=e;n=v(n,"col");const a=w(),s=k(),l=[],c=[];return a.forEach((e=>{const t=i[e];let r,a,o;delete i[e],"object"===typeof t&&null!=t?({span:r,offset:a,order:o}=t):r=t;const d=e!==s?`-${e}`:"";r&&l.push(!0===r?`${n}${d}`:`${n}${d}-${r}`),null!=o&&c.push(`order${d}-${o}`),null!=a&&c.push(`offset${d}-${a}`)})),[{...i,className:o()(r,...l,...c)},{as:t,bsPrefix:n,spans:l}]}(e);return(0,m.jsx)(i,{...r,ref:t,className:o()(n,!s.length&&a)})}));Go.displayName="Col";const Ko=Go,Yo=n.p+"static/media/Default_A_bustling_industrial_scene_depicting_modern_manufactu_1.ed533c9382af58022d54.jpg",Vo=n.p+"static/media/Management.6fb154b54ae761338aa3.jpg",Jo=n.p+"static/media/Hrandpayroll.9310263d77fde3406330.jpg",Qo=n.p+"static/media/Designer.d544d66eb8011e427ca3.png",Zo=n.p+"static/media/Accountandf.84a96a15feb6344a4f22.png",Xo=n.p+"static/media/projectmangement.49b30c1477fc99ca756d.png",$o=n.p+"static/media/lab management system.ee6c5d0bf6942d7f236d.png",es=n.p+"static/media/Lab Equipment Management System with lab equipment.b636d3f63d6a865a4637.png",ts=n.p+"static/media/good laboratory practices.fa433f7036aa77970bed.png";var ns=n(2963),rs=n.n(ns);const is=n.p+"static/media/underconstruction.52723767f15cb42646e9.jpg";rs().setAppElement("#root");const as=e=>{let{visible:t,setvisible:n}=e;const r=()=>{n(!1)};return(0,m.jsx)(rs(),{isOpen:t,onRequestClose:r,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"20px",textAlign:"center",borderRadius:"10px",border:"1px solid #ccc",color:"#454545"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}},children:(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:is,alt:"Under Construction",style:{width:"150px",marginBottom:"15px"}}),(0,m.jsx)("h2",{children:"Under Construction"}),(0,m.jsx)("p",{children:"We\u2019re working hard to bring this feature to you soon!"}),(0,m.jsx)("button",{onClick:r,style:{marginTop:"10px",padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Close"})]})})},os=(ia.div`
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
`,ia.div`
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
`,ia.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`),ss=ia.div`
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
`,ls=(ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,ia.img`
  width: 70%;
  height: auto;
  margin-bottom: 20px;
`),cs=ia.h3`
  font-size: 1.5em;
  color: #333;
`,ds=ia.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 20px;
  width: 80%;
`,us=ia.a`
  font-size: 1em;
  color: #ea5c49; /* Purple color */
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: #ee442d;
  }
`,ps=e=>{var n,r,i;const[a,o]=(0,t.useState)(!1),s=e=>{"HR & Payroll"==e?window.location.href="/hrm.html":"Customer Management"==e?window.location.href="/crm.html":"Lab Equipment Management System"==e?window.location.href="/labequipmentmangement.html":"Inventory Management"==e?window.location.href="/inventory.html":"Project Management"==e?window.location.href="/processandproject.html":"Lab Management System"==e?window.location.href="/labmanagement.html":"Good Laboratory Practices"==e?o(!a):window.location.href="/product.html"};return(0,m.jsxs)(Ko,{style:{margin:"-2px"},size:5,sm:6,md:4,children:[(0,m.jsx)(os,{onClick:()=>{var t;return s(null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.title)},children:(0,m.jsxs)(ss,{color:null===e||void 0===e||null===(n=e.project)||void 0===n?void 0:n.background,children:[(0,m.jsx)(ls,{src:e.image,alt:"greytHR Academy"}),(0,m.jsx)(cs,{children:null===e||void 0===e||null===(r=e.project)||void 0===r?void 0:r.title}),(0,m.jsx)(ds,{children:null===e||void 0===e||null===(i=e.project)||void 0===i?void 0:i.description}),(0,m.jsx)(us,{onClick:()=>{var t;return s(null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.title)},children:"Know More"})]})}),(0,m.jsx)(as,{visible:a,setvisible:o})]})},fs=(ia.div`
  width: 100%;
  height: 100vh;
`,()=>{const e=[{title:"Manufacturing Operations",description:"Efficiently manage your manufacturing operations with Atomwalk Office",imgUrl:Yo,background:"#fff8e6"},{title:"Inventory Management",description:"Take control of your inventory with Atomwalk Office",imgUrl:Vo,background:"#EEFAF4"},{title:"HR & Payroll",description:"Effortlessly handle HR and payroll tasks with Atomwalk Office",imgUrl:Jo,background:"#F7EFFF"},{title:"Customer Management",description:"Deliver exceptional customer service and boost sales with Atomwalk Office",imgUrl:Qo,background:"#EEFAF4"},{title:"Accounting & Financials",description:"Manage your accounting and financials seamlessly with Atomwalk Office",imgUrl:Zo,background:"#e6ffff"},{title:"Project Management",description:"Make informed decisions based on real-time information and analytics provided by Atomwalk Office",imgUrl:Xo,background:"#fff8e6"},{title:"Lab Equipment Management System",description:"Effortlessly Track, Manage, and Optimize Your Lab Equipment for Peak Performance.",imgUrl:es,background:"#f4e8e3"},{title:"Lab Management System",description:"Comprehensive Lab Solutions for Streamlined Operations and Enhanced Productivity.",imgUrl:$o,background:"#c7facf"},{title:"Good Laboratory Practices",description:"Ensuring Excellence and Compliance: Your Partner in Good Laboratory Practices.",imgUrl:ts,background:"#f7e4f2"}];return(0,m.jsx)("section",{className:"project",id:"projects",children:(0,m.jsxs)(Ft,{children:[(0,m.jsx)("h2",{children:"Comprehensive Business Management Solution"}),(0,m.jsx)("p",{children:"Streamline your business with Atomwalk Office's key features: Manufacturing Operations Management for optimized production and quality control, Purchasing & Inventory Management for precise supply chain oversight, Sales & Customer Service tools to boost sales and enhance customer relationships, Warehousing Solutions for efficient inventory tracking and automation, Accounting & Financials for thorough financial oversight, and a Complete HR Suite Including Payroll for seamless workforce management."}),(0,m.jsx)(Uo,{children:(0,m.jsx)(Ko,{size:12,children:(0,m.jsx)(Uo,{children:e.map(((e,t)=>(0,m.jsx)(ps,{project:e,image:e.imgUrl},t)))})})})]})})});const ms=n.p+"static/media/contact-img.87eac2b29352fa01abb2f9510ef6ac7e.svg";var hs=n(9834),gs=n.n(hs),xs=n(8178),bs=n.n(xs);const ys=function(e){var n=e.status,r=e.message,i=e.className,a=e.style,o=e.onSubmitted,s=void 0;return t.createElement("div",{className:i,style:a},"sending"===n&&t.createElement("div",{style:{color:"blue"}},"sending..."),"error"===n&&t.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:r}}),"success"===n&&t.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:r}}),t.createElement("input",{ref:function(e){return s=e},type:"email",placeholder:"Your email"}),t.createElement("button",{onClick:function(){return s&&s.value.indexOf("@")>-1&&o({EMAIL:s.value})}},"Submit"))};function vs(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var ws=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=Array(i),o=0;o<i;o++)a[o]=arguments[o];return n=r=vs(this,e.call.apply(e,[this].concat(a))),r.state={status:null,message:null},r.subscribe=function(e){var t=bs()(e),n=function(e){return e.replace("/post?","/post-json?")}(r.props.url)+"&"+t;r.setState({status:"sending",message:null},(function(){return gs()(n,{param:"c"},(function(e,t){e?r.setState({status:"error",message:e}):"success"!==t.result?r.setState({status:"error",message:t.msg}):r.setState({status:"success",message:t.msg})}))}))},vs(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return this.props.render({subscribe:this.subscribe,status:this.state.status,message:this.state.message})},t}(t.Component);ws.propTypes={},ws.defaultProps={render:function(e){var n=e.subscribe,r=e.status,i=e.message;return t.createElement(ys,{status:r,message:i,onSubmitted:function(e){return n(e)}})}};function ks(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ss}=Object.prototype,{getPrototypeOf:js}=Object,As=(Cs=Object.create(null),e=>{const t=Ss.call(e);return Cs[t]||(Cs[t]=t.slice(8,-1).toLowerCase())});var Cs;const Es=e=>(e=e.toLowerCase(),t=>As(t)===e),Rs=e=>t=>typeof t===e,{isArray:Ps}=Array,Os=Rs("undefined");const Ts=Es("ArrayBuffer");const Ms=Rs("string"),zs=Rs("function"),Is=Rs("number"),Ds=e=>null!==e&&"object"===typeof e,Ls=e=>{if("object"!==As(e))return!1;const t=js(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Fs=Es("Date"),Ns=Es("File"),Bs=Es("Blob"),qs=Es("FileList"),Hs=Es("URLSearchParams"),[Ws,_s,Us,Gs]=["ReadableStream","Request","Response","Headers"].map(Es);function Ks(e,t){let n,r,{allOwnKeys:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),Ps(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=i?Object.getOwnPropertyNames(e):Object.keys(e),a=r.length;let o;for(n=0;n<a;n++)o=r[n],t.call(null,e[o],o,e)}}function Ys(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const Vs="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,Js=e=>!Os(e)&&e!==Vs;const Qs=(Zs="undefined"!==typeof Uint8Array&&js(Uint8Array),e=>Zs&&e instanceof Zs);var Zs;const Xs=Es("HTMLFormElement"),$s=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),el=Es("RegExp"),tl=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ks(n,((n,i)=>{let a;!1!==(a=t(n,i,e))&&(r[i]=a||n)})),Object.defineProperties(e,r)},nl="abcdefghijklmnopqrstuvwxyz",rl="0123456789",il={DIGIT:rl,ALPHA:nl,ALPHA_DIGIT:nl+nl.toUpperCase()+rl};const al=Es("AsyncFunction"),ol=(sl="function"===typeof setImmediate,ll=zs(Vs.postMessage),sl?setImmediate:ll?((e,t)=>(Vs.addEventListener("message",(n=>{let{source:r,data:i}=n;r===Vs&&i===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),Vs.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var sl,ll;const cl="undefined"!==typeof queueMicrotask?queueMicrotask.bind(Vs):"undefined"!==typeof process&&process.nextTick||ol,dl={isArray:Ps,isArrayBuffer:Ts,isBuffer:function(e){return null!==e&&!Os(e)&&null!==e.constructor&&!Os(e.constructor)&&zs(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||zs(e.append)&&("formdata"===(t=As(e))||"object"===t&&zs(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Ts(e.buffer),t},isString:Ms,isNumber:Is,isBoolean:e=>!0===e||!1===e,isObject:Ds,isPlainObject:Ls,isReadableStream:Ws,isRequest:_s,isResponse:Us,isHeaders:Gs,isUndefined:Os,isDate:Fs,isFile:Ns,isBlob:Bs,isRegExp:el,isFunction:zs,isStream:e=>Ds(e)&&zs(e.pipe),isURLSearchParams:Hs,isTypedArray:Qs,isFileList:qs,forEach:Ks,merge:function e(){const{caseless:t}=Js(this)&&this||{},n={},r=(r,i)=>{const a=t&&Ys(n,i)||i;Ls(n[a])&&Ls(r)?n[a]=e(n[a],r):Ls(r)?n[a]=e({},r):Ps(r)?n[a]=r.slice():n[a]=r};for(let i=0,a=arguments.length;i<a;i++)arguments[i]&&Ks(arguments[i],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Ks(t,((t,r)=>{n&&zs(t)?e[r]=ks(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,a,o;const s={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],r&&!r(o,e,t)||s[o]||(t[o]=e[o],s[o]=!0);e=!1!==n&&js(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:As,kindOfTest:Es,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(Ps(e))return e;let t=e.length;if(!Is(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Xs,hasOwnProperty:$s,hasOwnProp:$s,reduceDescriptors:tl,freezeMethods:e=>{tl(e,((t,n)=>{if(zs(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];zs(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return Ps(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Ys,global:Vs,isContextDefined:Js,ALPHABET:il,generateString:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:il.ALPHA_DIGIT,n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&zs(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Ds(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=Ps(e)?[]:{};return Ks(e,((e,t)=>{const a=n(e,r+1);!Os(a)&&(i[t]=a)})),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:al,isThenable:e=>e&&(Ds(e)||zs(e))&&zs(e.then)&&zs(e.catch),setImmediate:ol,asap:cl};function ul(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}dl.inherits(ul,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:dl.toJSONObject(this.config),code:this.code,status:this.status}}});const pl=ul.prototype,fl={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{fl[e]={value:e}})),Object.defineProperties(ul,fl),Object.defineProperty(pl,"isAxiosError",{value:!0}),ul.from=(e,t,n,r,i,a)=>{const o=Object.create(pl);return dl.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),ul.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const ml=ul;function hl(e){return dl.isPlainObject(e)||dl.isArray(e)}function gl(e){return dl.endsWith(e,"[]")?e.slice(0,-2):e}function xl(e,t,n){return e?e.concat(t).map((function(e,t){return e=gl(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const bl=dl.toFlatObject(dl,{},null,(function(e){return/^is[A-Z]/.test(e)}));const yl=function(e,t,n){if(!dl.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=dl.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!dl.isUndefined(t[e])}))).metaTokens,i=n.visitor||c,a=n.dots,o=n.indexes,s=(n.Blob||"undefined"!==typeof Blob&&Blob)&&dl.isSpecCompliantForm(t);if(!dl.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(dl.isDate(e))return e.toISOString();if(!s&&dl.isBlob(e))throw new ml("Blob is not supported. Use a Buffer instead.");return dl.isArrayBuffer(e)||dl.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,i){let s=e;if(e&&!i&&"object"===typeof e)if(dl.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(dl.isArray(e)&&function(e){return dl.isArray(e)&&!e.some(hl)}(e)||(dl.isFileList(e)||dl.endsWith(n,"[]"))&&(s=dl.toArray(e)))return n=gl(n),s.forEach((function(e,r){!dl.isUndefined(e)&&null!==e&&t.append(!0===o?xl([n],r,a):null===o?n:n+"[]",l(e))})),!1;return!!hl(e)||(t.append(xl(i,n,a),l(e)),!1)}const d=[],u=Object.assign(bl,{defaultVisitor:c,convertValue:l,isVisitable:hl});if(!dl.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!dl.isUndefined(n)){if(-1!==d.indexOf(n))throw Error("Circular reference detected in "+r.join("."));d.push(n),dl.forEach(n,(function(n,a){!0===(!(dl.isUndefined(n)||null===n)&&i.call(t,n,dl.isString(a)?a.trim():a,r,u))&&e(n,r?r.concat(a):[a])})),d.pop()}}(e),t};function vl(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function wl(e,t){this._pairs=[],e&&yl(e,this,t)}const kl=wl.prototype;kl.append=function(e,t){this._pairs.push([e,t])},kl.toString=function(e){const t=e?function(t){return e.call(this,t,vl)}:vl;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const Sl=wl;function jl(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Al(e,t,n){if(!t)return e;const r=n&&n.encode||jl,i=n&&n.serialize;let a;if(a=i?i(t,n):dl.isURLSearchParams(t)?t.toString():new Sl(t,n).toString(r),a){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}const Cl=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){dl.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},El={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Rl={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:Sl,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Pl="undefined"!==typeof window&&"undefined"!==typeof document,Ol="object"===typeof navigator&&navigator||void 0,Tl=Pl&&(!Ol||["ReactNative","NativeScript","NS"].indexOf(Ol.product)<0),Ml="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,zl=Pl&&window.location.href||"http://localhost",Il={...e,...Rl};const Dl=function(e){function t(e,n,r,i){let a=e[i++];if("__proto__"===a)return!0;const o=Number.isFinite(+a),s=i>=e.length;if(a=!a&&dl.isArray(r)?r.length:a,s)return dl.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o;r[a]&&dl.isObject(r[a])||(r[a]=[]);return t(e,n,r[a],i)&&dl.isArray(r[a])&&(r[a]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}(r[a])),!o}if(dl.isFormData(e)&&dl.isFunction(e.entries)){const n={};return dl.forEachEntry(e,((e,r)=>{t(function(e){return dl.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const Ll={transitional:El,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=dl.isObject(e);i&&dl.isHTMLForm(e)&&(e=new FormData(e));if(dl.isFormData(e))return r?JSON.stringify(Dl(e)):e;if(dl.isArrayBuffer(e)||dl.isBuffer(e)||dl.isStream(e)||dl.isFile(e)||dl.isBlob(e)||dl.isReadableStream(e))return e;if(dl.isArrayBufferView(e))return e.buffer;if(dl.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return yl(e,new Il.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Il.isNode&&dl.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((a=dl.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return yl(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(dl.isString(e))try{return(t||JSON.parse)(e),dl.trim(e)}catch(cA){if("SyntaxError"!==cA.name)throw cA}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Ll.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(dl.isResponse(e)||dl.isReadableStream(e))return e;if(e&&dl.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(cA){if(n){if("SyntaxError"===cA.name)throw ml.from(cA,ml.ERR_BAD_RESPONSE,this,null,this.response);throw cA}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Il.classes.FormData,Blob:Il.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};dl.forEach(["delete","get","head","post","put","patch"],(e=>{Ll.headers[e]={}}));const Fl=Ll,Nl=dl.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Bl=Symbol("internals");function ql(e){return e&&String(e).trim().toLowerCase()}function Hl(e){return!1===e||null==e?e:dl.isArray(e)?e.map(Hl):String(e)}function Wl(e,t,n,r,i){return dl.isFunction(r)?r.call(this,t,n):(i&&(t=n),dl.isString(t)?dl.isString(r)?-1!==t.indexOf(r):dl.isRegExp(r)?r.test(t):void 0:void 0)}class _l{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=ql(t);if(!i)throw new Error("header name must be a non-empty string");const a=dl.findKey(r,i);(!a||void 0===r[a]||!0===n||void 0===n&&!1!==r[a])&&(r[a||t]=Hl(e))}const a=(e,t)=>dl.forEach(e,((e,n)=>i(e,n,t)));if(dl.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(dl.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))a((e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&Nl[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(dl.isHeaders(e))for(const[o,s]of e.entries())i(s,o,n);else null!=e&&i(t,e,n);return this}get(e,t){if(e=ql(e)){const n=dl.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(dl.isFunction(t))return t.call(this,e,n);if(dl.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ql(e)){const n=dl.findKey(this,e);return!(!n||void 0===this[n]||t&&!Wl(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=ql(e)){const i=dl.findKey(n,e);!i||t&&!Wl(0,n[i],i,t)||(delete n[i],r=!0)}}return dl.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!Wl(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return dl.forEach(this,((r,i)=>{const a=dl.findKey(n,i);if(a)return t[a]=Hl(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete t[i],t[o]=Hl(r),n[o]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return dl.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&dl.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[Bl]=this[Bl]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ql(e);t[r]||(!function(e,t){const n=dl.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return dl.isArray(e)?e.forEach(r):r(e),this}}_l.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),dl.reduceDescriptors(_l.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),dl.freezeMethods(_l);const Ul=_l;function Gl(e,t){const n=this||Fl,r=t||n,i=Ul.from(r.headers);let a=r.data;return dl.forEach(e,(function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)})),i.normalize(),a}function Kl(e){return!(!e||!e.__CANCEL__)}function Yl(e,t,n){ml.call(this,null==e?"canceled":e,ml.ERR_CANCELED,t,n),this.name="CanceledError"}dl.inherits(Yl,ml,{__CANCEL__:!0});const Vl=Yl;function Jl(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ml("Request failed with status code "+n.status,[ml.ERR_BAD_REQUEST,ml.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const Ql=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,a=0,o=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=r[o];i||(i=l),n[a]=s,r[a]=l;let d=o,u=0;for(;d!==a;)u+=n[d++],d%=e;if(a=(a+1)%e,a===o&&(o=(o+1)%e),l-i<t)return;const p=c&&l-c;return p?Math.round(1e3*u/p):void 0}};const Zl=function(e,t){let n,r,i=0,a=1e3/t;const o=function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();i=a,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-i;for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];t>=a?o(l,e):(n=l,r||(r=setTimeout((()=>{r=null,o(n)}),a-t)))},()=>n&&o(n)]},Xl=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const i=Ql(50,250);return Zl((n=>{const a=n.loaded,o=n.lengthComputable?n.total:void 0,s=a-r,l=i(s);r=a;e({loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:l||void 0,estimated:l&&o&&a<=o?(o-a)/l:void 0,event:n,lengthComputable:null!=o,[t?"download":"upload"]:!0})}),n)},$l=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},ec=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return dl.asap((()=>e(...n)))},tc=Il.hasStandardBrowserEnv?function(){const e=Il.navigator&&/(msie|trident)/i.test(Il.navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=dl.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0},nc=Il.hasStandardBrowserEnv?{write(e,t,n,r,i,a){const o=[e+"="+encodeURIComponent(t)];dl.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),dl.isString(r)&&o.push("path="+r),dl.isString(i)&&o.push("domain="+i),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function rc(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const ic=e=>e instanceof Ul?{...e}:e;function ac(e,t){t=t||{};const n={};function r(e,t,n){return dl.isPlainObject(e)&&dl.isPlainObject(t)?dl.merge.call({caseless:n},e,t):dl.isPlainObject(t)?dl.merge({},t):dl.isArray(t)?t.slice():t}function i(e,t,n){return dl.isUndefined(t)?dl.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function a(e,t){if(!dl.isUndefined(t))return r(void 0,t)}function o(e,t){return dl.isUndefined(t)?dl.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,i,a){return a in t?r(n,i):a in e?r(void 0,n):void 0}const l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t)=>i(ic(e),ic(t),!0)};return dl.forEach(Object.keys(Object.assign({},e,t)),(function(r){const a=l[r]||i,o=a(e[r],t[r],r);dl.isUndefined(o)&&a!==s||(n[r]=o)})),n}const oc=e=>{const t=ac({},e);let n,{data:r,withXSRFToken:i,xsrfHeaderName:a,xsrfCookieName:o,headers:s,auth:l}=t;if(t.headers=s=Ul.from(s),t.url=Al(rc(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),dl.isFormData(r))if(Il.hasStandardBrowserEnv||Il.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(n=s.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(Il.hasStandardBrowserEnv&&(i&&dl.isFunction(i)&&(i=i(t)),i||!1!==i&&tc(t.url))){const e=a&&o&&nc.read(o);e&&s.set(a,e)}return t},sc="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=oc(e);let i=r.data;const a=Ul.from(r.headers).normalize();let o,s,l,c,d,{responseType:u,onUploadProgress:p,onDownloadProgress:f}=r;function m(){c&&c(),d&&d(),r.cancelToken&&r.cancelToken.unsubscribe(o),r.signal&&r.signal.removeEventListener("abort",o)}let h=new XMLHttpRequest;function g(){if(!h)return;const r=Ul.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders());Jl((function(e){t(e),m()}),(function(e){n(e),m()}),{data:u&&"text"!==u&&"json"!==u?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout,"onloadend"in h?h.onloadend=g:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(g)},h.onabort=function(){h&&(n(new ml("Request aborted",ml.ECONNABORTED,e,h)),h=null)},h.onerror=function(){n(new ml("Network Error",ml.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const i=r.transitional||El;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new ml(t,i.clarifyTimeoutError?ml.ETIMEDOUT:ml.ECONNABORTED,e,h)),h=null},void 0===i&&a.setContentType(null),"setRequestHeader"in h&&dl.forEach(a.toJSON(),(function(e,t){h.setRequestHeader(t,e)})),dl.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),u&&"json"!==u&&(h.responseType=r.responseType),f&&([l,d]=Xl(f,!0),h.addEventListener("progress",l)),p&&h.upload&&([s,c]=Xl(p),h.upload.addEventListener("progress",s),h.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(o=t=>{h&&(n(!t||t.type?new Vl(null,e,h):t),h.abort(),h=null)},r.cancelToken&&r.cancelToken.subscribe(o),r.signal&&(r.signal.aborted?o():r.signal.addEventListener("abort",o)));const x=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);x&&-1===Il.protocols.indexOf(x)?n(new ml("Unsupported protocol "+x+":",ml.ERR_BAD_REQUEST,e)):h.send(i||null)}))},lc=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const i=function(e){if(!n){n=!0,o();const t=e instanceof Error?e:this.reason;r.abort(t instanceof ml?t:new Vl(t instanceof Error?t.message:t))}};let a=t&&setTimeout((()=>{a=null,i(new ml(`timeout ${t} of ms exceeded`,ml.ETIMEDOUT))}),t);const o=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener("abort",i)})),e=null)};e.forEach((e=>e.addEventListener("abort",i)));const{signal:s}=r;return s.unsubscribe=()=>dl.asap(o),s}},cc=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,i=0;for(;i<n;)r=i+t,yield e.slice(i,r),i=r},dc=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},uc=(e,t,n,r)=>{const i=async function*(e,t){for await(const n of dc(e))yield*cc(n,t)}(e,t);let a,o=0,s=e=>{a||(a=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await i.next();if(t)return s(),void e.close();let a=r.byteLength;if(n){let e=o+=a;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw s(t),t}},cancel:e=>(s(e),i.return())},{highWaterMark:2})},pc="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,fc=pc&&"function"===typeof ReadableStream,mc=pc&&("function"===typeof TextEncoder?(hc=new TextEncoder,e=>hc.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var hc;const gc=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(cA){return!1}},xc=fc&&gc((()=>{let e=!1;const t=new Request(Il.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),bc=fc&&gc((()=>dl.isReadableStream(new Response("").body))),yc={stream:bc&&(e=>e.body)};var vc;pc&&(vc=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!yc[e]&&(yc[e]=dl.isFunction(vc[e])?t=>t[e]():(t,n)=>{throw new ml(`Response type '${e}' is not supported`,ml.ERR_NOT_SUPPORT,n)})})));const wc=async(e,t)=>{const n=dl.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(dl.isBlob(e))return e.size;if(dl.isSpecCompliantForm(e)){const t=new Request(Il.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return dl.isArrayBufferView(e)||dl.isArrayBuffer(e)?e.byteLength:(dl.isURLSearchParams(e)&&(e+=""),dl.isString(e)?(await mc(e)).byteLength:void 0)})(t):n},kc=pc&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:a,timeout:o,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:d,withCredentials:u="same-origin",fetchOptions:p}=oc(e);c=c?(c+"").toLowerCase():"text";let f,m=lc([i,a&&a.toAbortSignal()],o);const h=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let g;try{if(l&&xc&&"get"!==n&&"head"!==n&&0!==(g=await wc(d,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(dl.isFormData(r)&&(e=n.headers.get("content-type"))&&d.setContentType(e),n.body){const[e,t]=$l(g,Xl(ec(l)));r=uc(n.body,65536,e,t)}}dl.isString(u)||(u=u?"include":"omit");const i="credentials"in Request.prototype;f=new Request(t,{...p,signal:m,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:i?u:void 0});let a=await fetch(f);const o=bc&&("stream"===c||"response"===c);if(bc&&(s||o&&h)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=a[t]}));const t=dl.toFiniteNumber(a.headers.get("content-length")),[n,r]=s&&$l(t,Xl(ec(s),!0))||[];a=new Response(uc(a.body,65536,n,(()=>{r&&r(),h&&h()})),e)}c=c||"text";let x=await yc[dl.findKey(yc,c)||"text"](a,e);return!o&&h&&h(),await new Promise(((t,n)=>{Jl(t,n,{data:x,headers:Ul.from(a.headers),status:a.status,statusText:a.statusText,config:e,request:f})}))}catch(x){if(h&&h(),x&&"TypeError"===x.name&&/fetch/i.test(x.message))throw Object.assign(new ml("Network Error",ml.ERR_NETWORK,e,f),{cause:x.cause||x});throw ml.from(x,x&&x.code,e,f)}}),Sc={http:null,xhr:sc,fetch:kc};dl.forEach(Sc,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(cA){}Object.defineProperty(e,"adapterName",{value:t})}}));const jc=e=>`- ${e}`,Ac=e=>dl.isFunction(e)||null===e||!1===e,Cc=e=>{e=dl.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let a=0;a<t;a++){let t;if(n=e[a],r=n,!Ac(n)&&(r=Sc[(t=String(n)).toLowerCase()],void 0===r))throw new ml(`Unknown adapter '${t}'`);if(r)break;i[t||"#"+a]=r}if(!r){const e=Object.entries(i).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let n=t?e.length>1?"since :\n"+e.map(jc).join("\n"):" "+jc(e[0]):"as no adapter specified";throw new ml("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Ec(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Vl(null,e)}function Rc(e){Ec(e),e.headers=Ul.from(e.headers),e.data=Gl.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Cc(e.adapter||Fl.adapter)(e).then((function(t){return Ec(e),t.data=Gl.call(e,e.transformResponse,t),t.headers=Ul.from(t.headers),t}),(function(t){return Kl(t)||(Ec(e),t&&t.response&&(t.response.data=Gl.call(e,e.transformResponse,t.response),t.response.headers=Ul.from(t.response.headers))),Promise.reject(t)}))}const Pc="1.7.7",Oc={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Oc[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Tc={};Oc.transitional=function(e,t,n){function r(e,t){return"[Axios v1.7.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,a)=>{if(!1===e)throw new ml(r(i," has been removed"+(t?" in "+t:"")),ml.ERR_DEPRECATED);return t&&!Tc[i]&&(Tc[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,a)}};const Mc={assertOptions:function(e,t,n){if("object"!==typeof e)throw new ml("options must be an object",ml.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const t=e[a],n=void 0===t||o(t,a,e);if(!0!==n)throw new ml("option "+a+" must be "+n,ml.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ml("Unknown option "+a,ml.ERR_BAD_OPTION)}},validators:Oc},zc=Mc.validators;class Ic{constructor(e){this.defaults=e,this.interceptors={request:new Cl,response:new Cl}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(cA){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=ac(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;void 0!==n&&Mc.assertOptions(n,{silentJSONParsing:zc.transitional(zc.boolean),forcedJSONParsing:zc.transitional(zc.boolean),clarifyTimeoutError:zc.transitional(zc.boolean)},!1),null!=r&&(dl.isFunction(r)?t.paramsSerializer={serialize:r}:Mc.assertOptions(r,{encode:zc.function,serialize:zc.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=i&&dl.merge(i.common,i[t.method]);i&&dl.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=Ul.concat(a,i);const o=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let d,u=0;if(!s){const e=[Rc.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),d=e.length,c=Promise.resolve(t);u<d;)c=c.then(e[u++],e[u++]);return c}d=o.length;let p=t;for(u=0;u<d;){const e=o[u++],t=o[u++];try{p=e(p)}catch(f){t.call(this,f);break}}try{c=Rc.call(this,p)}catch(f){return Promise.reject(f)}for(u=0,d=l.length;u<d;)c=c.then(l[u++],l[u++]);return c}getUri(e){return Al(rc((e=ac(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}dl.forEach(["delete","get","head","options"],(function(e){Ic.prototype[e]=function(t,n){return this.request(ac(n||{},{method:e,url:t,data:(n||{}).data}))}})),dl.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(ac(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ic.prototype[e]=t(),Ic.prototype[e+"Form"]=t(!0)}));const Dc=Ic;class Lc{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new Vl(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Lc((function(t){e=t})),cancel:e}}}const Fc=Lc;const Nc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Nc).forEach((e=>{let[t,n]=e;Nc[n]=t}));const Bc=Nc;const qc=function e(t){const n=new Dc(t),r=ks(Dc.prototype.request,n);return dl.extend(r,Dc.prototype,n,{allOwnKeys:!0}),dl.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(ac(t,n))},r}(Fl);qc.Axios=Dc,qc.CanceledError=Vl,qc.CancelToken=Fc,qc.isCancel=Kl,qc.VERSION=Pc,qc.toFormData=yl,qc.AxiosError=ml,qc.Cancel=qc.CanceledError,qc.all=function(e){return Promise.all(e)},qc.spread=function(e){return function(t){return e.apply(null,t)}},qc.isAxiosError=function(e){return dl.isObject(e)&&!0===e.isAxiosError},qc.mergeConfig=ac,qc.AxiosHeaders=Ul,qc.formToJSON=e=>Dl(dl.isHTMLForm(e)?new FormData(e):e),qc.getAdapter=Cc,qc.HttpStatusCode=Bc,qc.default=qc;const Hc=qc,Wc=e=>{let{setShowsuccess:n}=e,r=new Date;const i={name:"",company_name:"",task_name:"",mobile_number:"",email_id:"",add_task:"N",task_type:"Get In Touch",task_date:`${("0"+r.getDate()).slice(-2)}-${("0"+(r.getMonth()+1)).slice(-2)}-${r.getFullYear()}`},[a,o]=(0,t.useState)(i),[s,l]=(0,t.useState)("Send"),[c,d]=(0,t.useState)({});console.log(a,"look at ne");const u=(e,t)=>{o({...a,[e]:t})},p=e=>(e.preventDefault(),l("Sending..."),f("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:a})),f=async(e,t)=>{try{let r=localStorage.getItem("apiResponse"),a=JSON.parse(r);if(!r)throw new Error("Token not found, please login.");const s=Hc.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${a.key}`}});200==(await s.post(e,t)).status&&(l("Send"),o(i),n(!0))}catch(r){console.log("Error making authenticated API call:",r),l("Send"),o(i)}};return(0,m.jsx)("section",{className:"contact",id:"connect",children:(0,m.jsx)(Ft,{children:(0,m.jsxs)(Uo,{className:"align-items-center",children:[(0,m.jsx)(Ko,{size:12,md:6,children:(0,m.jsx)(Po.A,{children:e=>{let{isVisible:t}=e;return(0,m.jsx)("img",{className:t?"animate__animated animate__zoomIn":"",src:ms,alt:"Contact Us"})}})}),(0,m.jsx)(Ko,{size:12,md:6,children:(0,m.jsx)(Po.A,{children:e=>{let{isVisible:t}=e;return(0,m.jsxs)("div",{className:t?"animate__animated animate__fadeIn":"",children:[(0,m.jsx)("h2",{children:"Get In Touch"}),(0,m.jsx)("form",{onSubmit:p,children:(0,m.jsxs)(Uo,{children:[(0,m.jsx)(Ko,{size:12,sm:6,className:"px-1",children:(0,m.jsx)("input",{type:"text",value:a.name,placeholder:"First Name",onChange:e=>u("name",e.target.value)})}),(0,m.jsx)(Ko,{size:12,sm:6,className:"px-1",children:(0,m.jsx)("input",{type:"text",value:a.company_name,placeholder:"Company Name",onChange:e=>u("company_name",e.target.value)})}),(0,m.jsx)(Ko,{size:12,sm:6,className:"px-1",children:(0,m.jsx)("input",{type:"email",value:a.email_id,placeholder:"Email Address",onChange:e=>u("email_id",e.target.value)})}),(0,m.jsx)(Ko,{size:12,sm:6,className:"px-1",children:(0,m.jsx)("input",{type:"tel",value:a.mobile_number,placeholder:"Phone No.",onChange:e=>u("mobile_number",e.target.value)})}),(0,m.jsxs)(Ko,{size:12,className:"px-1",children:[(0,m.jsx)("textarea",{rows:"6",value:a.task_name,placeholder:"Message",onChange:e=>u("task_name",e.target.value)}),(0,m.jsx)("button",{type:"submit",children:(0,m.jsx)("span",{children:s})})]}),c.message&&(0,m.jsx)(Ko,{children:(0,m.jsx)("p",{className:!1===c.success?"danger":"success",children:c.message})})]})})]})}})})]})})})},_c=ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #caf0f8;
`,Uc=ia.h1`
  font-size: 3.2em;
  margin-bottom: 100px;
  text-align: center;
  color: #2c3e50;
`,Gc=ia.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
`,Kc=ia.div`
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
`,Yc=ia.div`
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
`,Vc=ia.h2`
  font-size: 2em;
  margin: 20px 0;
  font-weight: 800;
  color: #000933;
`,Jc=ia.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`,Qc=ia.li`
  margin: 10px 0;
  cursor: ${e=>e.clickable?"pointer":"default"};
  &::before {
    content: "${e=>e.valid?"\u2713":"\u2717"}";
    margin-right: 10px;
    color: ${e=>e.valid?"green":"red"};
  }
`,Zc=ia.div`
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
`,Xc=ia.p`
  font-weight: 500;
`,$c=ia.button`
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
`,ed=ia.div`
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
`,td=ia.div`
  font-size: 1.1em;
`,nd=ia.button`
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
`,rd=ia.span`
  font-size: 1.5em;
  color: #454545;
  cursor: pointer;
`,id=ia.ul`
  list-style-type: none;
  margin-top: 10px;
  padding-left: 20px;
  color: #6b37d1;
`,ad={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px",padding:"40px",overflow:"auto",maxHeight:"80vh"},overlay:{zIndex:"32333"}},od=[{name:"Project Management",features:["Project Activity Allocation Tracking"," Project Activity Dependency (Critical Patch)"," Schedule Tracking","Item Cost and Effort Tracking","Efficiency tracking at Activity","Project Documents, Alert management","Integration with Procurement and PO","Integration with Inventory Allocation, Wastage and Release"]},{name:"Inventory Management",features:["Item Category and Group","Inventory Item and Service Item","Item Supplier management","Multiple locations","Multiple Units","Warehouse management (Bin Locations)","Item Serial Number handling","Item physical inspection and open balance","Item min order qty and Expiry date tracking"]},{name:"Sales and Procurement",features:["Sales order, quotation, proforma invoice","Tax Invoice","Payment, GST Tracking, TDS handling","Return, Credit note handling","Purchase Order, Purchase requests","Goods Receipt (GRN)","Goods Return/Shortage/ Debit Note","Purchase Service Order, TDS handling"]},{name:"Customer Management( CRM)",features:["Customer Details","Customer Sales/Payments Tracking (Bank/TDS)","Agreements","Customer Type/ Group"]},{name:"HR & Payroll",features:["Employee Hire to Exit","Leave & Attendance","Travel & Expenses","Salary & Payroll","Advances","Claim Settlement"]},{name:"Bank Reconciliation",features:["Bank Statement Upload","Account Reconciliation with Sales and PO","Rule based reconciliation of Expenses","Bank statement View","Reconciled statement view","Bank, Exchange rate setup"]},{name:"Financial Accounting",features:["Sales report (Period/Party/Outstanding)","Purchase Reports","Inventory (opening and closing stock)","Inventory Valuation","Financial Reports (P&L Balance sheet, Cash flow, Change in Equity","Aging/ DSO","Depreciation Schedule"]},{name:"Reports and Dashboard",features:["Manager Dashboard","Sales Dashboard","Account Receivable and Payable","Party wise outstanding","Batch reports like Sales overdue, GST not filed","Report Templates"," User Access control"]}],sd=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(null),[a,o]=(0,t.useState)(null),s=e=>{o(e),n(!0)},l=()=>{n(!1),o(null)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(_c,{children:[(0,m.jsx)(Gc,{children:"PRICING"}),(0,m.jsx)(Uc,{children:"Pick the plan that\u2019s right for you"}),(0,m.jsxs)(Kc,{children:[(0,m.jsxs)(Yc,{children:[(0,m.jsx)("h3",{style:{color:"#ffff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"red",borderRadius:"5px"},children:"Free Trial"}),(0,m.jsx)(Vc,{children:"\u20b90/Month"}),(0,m.jsx)(Xc,{children:"Seriously, free forever"}),(0,m.jsxs)(Jc,{children:[(0,m.jsx)(Qc,{valid:!0,children:"3 User Access"}),(0,m.jsx)(Qc,{valid:!0,children:"30 days Validity"}),(0,m.jsx)(Qc,{valid:!0,children:"20MB Space"}),(0,m.jsx)(Qc,{children:"Multi Branch Access"}),(0,m.jsx)(Zc,{onClick:()=>s("Free Trial"),children:"Click Here to see the modules"})]}),(0,m.jsx)($c,{children:"Sign up for free"})]}),(0,m.jsxs)(Yc,{children:[(0,m.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#2196f3",borderRadius:"5px"},children:"Basic"}),(0,m.jsx)(Vc,{children:"\u20b95,000/Month"}),(0,m.jsx)(Xc,{children:"Billed at \u20b950,000 per year"}),(0,m.jsxs)(Jc,{children:[(0,m.jsx)(Qc,{valid:!0,children:"5 User Access"}),(0,m.jsx)(Qc,{valid:!0,children:"1 Year Validity"}),(0,m.jsx)(Qc,{valid:!0,children:"200MB Space"}),(0,m.jsx)(Qc,{children:"Multi Branch Access"}),(0,m.jsx)(Zc,{onClick:()=>s("Basic"),children:"Click Here to see the modules"})]}),(0,m.jsx)($c,{children:"Start a free trial"})]}),(0,m.jsxs)(Yc,{children:[(0,m.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"orange",borderRadius:"5px"},children:"Premium"}),(0,m.jsx)(Vc,{children:"\u20b910,000/Month"}),(0,m.jsx)(Xc,{children:"Billed at \u20b9100,000 per year"}),(0,m.jsxs)(Jc,{children:[(0,m.jsx)(Qc,{valid:!0,children:"10 User Access"}),(0,m.jsx)(Qc,{valid:!0,children:"1 Year Validity"}),(0,m.jsx)(Qc,{valid:!0,children:"500MB Space"}),(0,m.jsx)(Qc,{valid:!0,children:"Multi Branch Access"}),(0,m.jsx)(Zc,{onClick:()=>s("Premium"),children:"Click Here to see the modules"})]}),(0,m.jsx)($c,{children:"Start a free trial"})]}),(0,m.jsxs)(Yc,{children:[(0,m.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#800080",borderRadius:"5px"},children:"Ultimate"}),(0,m.jsx)(Vc,{children:"\u20b925,000/Month"}),(0,m.jsx)(Xc,{children:"Billed at \u20b9200,000 per year"}),(0,m.jsxs)(Jc,{children:[(0,m.jsx)(Qc,{valid:!0,children:"25 User Access"}),(0,m.jsx)(Qc,{valid:!0,children:"1 Year Validity"}),(0,m.jsx)(Qc,{valid:!0,children:"1.2GB Space"}),(0,m.jsx)(Qc,{valid:!0,children:"Multi Branch Access"}),(0,m.jsx)(Zc,{onClick:()=>s("Ultimate"),children:"Click Here to see the modules"})]}),(0,m.jsx)($c,{children:"Start a free trial"})]})]})]}),(0,m.jsxs)(rs(),{isOpen:e,onRequestClose:l,style:ad,children:[(0,m.jsx)(nd,{onClick:l,children:"\xd7"}),(0,m.jsx)(Jc,{children:("Basic"===a?od.filter((e=>"Customer Management( CRM)"!==e.name&&"HR & Payroll"!==e.name)):"Premium"===a?od.filter((e=>"HR & Payroll"!==e.name)):od).map(((e,t)=>(0,m.jsxs)("div",{children:[(0,m.jsxs)(ed,{onClick:()=>{return t=e.name,void i(r===t?null:t);var t},children:[(0,m.jsx)(td,{children:e.name}),(0,m.jsx)(rd,{children:r===e.name?"\u2212":"+"})]}),r===e.name&&(0,m.jsx)(id,{children:e.features.map(((e,t)=>(0,m.jsx)("ul",{style:{marginBottom:"5px"},children:(0,m.jsx)("li",{children:e},t)})))})]},t)))})]})]})},ld=(ia.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #f9f5f0;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,ia.div`
  max-width: 500px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,ia.h2`
  font-size: 32px;
  color: #ec7042;
  font-weight: 700;
`,ia.h3`
  font-size: 28px;
  color: #333;
  font-weight: 600;
`,ia.p`
  font-size: 16px;
  color: #555;
  margin: 20px 0;
`,ia.button`
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
`,ia.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 600px;
`,ia.div`
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
`,ia.img`
  position: absolute;
  width: 100px;
  height: auto;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${e=>{let{top:t,right:n,bottom:r,left:i}=e;return`\n    top: ${t||"auto"};\n    right: ${n||"auto"};\n    bottom: ${r||"auto"};\n    left: ${i||"auto"};\n  `}}
`,ia.p`

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
    
`),cd=e=>(0,m.jsx)(ld,{dangerouslySetInnerHTML:e.dangerouslySetInnerHTML,onClick:e.onClick,textTransform:e.textTransform,margin:e.margin,lineHeight:e.lineHeight,mobPosition:e.mobPosition,LgFontSize:e.LgFontSize,mobMarginBottom:e.mobMarginBottom,mobRight:e.mobRight,fontWeight:e.fontWeight,mobwidth:e.mobwidth,mobLetterSpacing:e.mobLetterSpacing,mobMarginTop:e.mobMarginTop,moblineHeight:e.moblineHeight,letterSpacing:e.letterSpacing,cursor:e.cursor,textAlign:e.textAlign,marginLeft:e.marginLeft,MobtextAlign:e.MobtextAlign,fontSize:e.fontSize,mobFontSize:e.mobFontSize,mobLineHeight:e.mobLineHeight,width:e.width,color:e.color,hoverColor:e.hoverColor,padding:e.padding,textDecoration:e.textDecoration,marginTop:e.marginTop,children:e.text});n.p,ia.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  height: 185px;

  @media screen and (max-width: 767px){
    height: 77%;
  }
`,ia.div`
  background: #f0dbff;
  padding: 20px 55px;
  padding-bottom: 45px;
  height: 332px;

  @media screen and (max-width: 767px){
    height: 390px;
    padding-bottom: 35px;
  }
`,ia.img`
  width: 18px;
`,ia.p`
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
`,ia.div`
  background-color: #ffc8ae;
  padding: 25px 55px;

  @media screen and (max-width: 767px){
    height: 125px;
  }  
`,ia.div`
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-position: center;
  background-size: contain;
  background-image: url(${e=>e.CLogo});
`,ia.p`
  margin: 0;
  color: #fff;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`,ia.p`
  margin: 0;
  color: #fff;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`,ia.div`
  display: flex;
  align-items: center;
  gap: 25px;
`,ia.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`,ia.div`
  background-color: #fff3e1;
  border: 1px solid #d8d8d8;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
`;ia.div`
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
`,ia.div`
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
`,ia.img`
  /* filter: grayscale(1); */
  height: 65px;
  opacity: 0.7;
`,ia.div`
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
`;const dd=n.p+"static/media/FevIimg.ec5aa0150e808b2eaa91.png";const ud=n.p+"static/media/localPageHero.4092dfc607fc3eed3eec085f09348f6e.svg";const pd=n.p+"static/media/HrApp.f8b908a11c10534323325eaa7e6f02ff.svg";n.p;const fd=n.p+"static/media/crm.444d6bc6234675a47df4.png",md=n.p+"static/media/search-job.de6dd9ba062c0e230527.png",hd=n.p+"static/media/experiment_16584785.90bf3018de6ad3a1f7d1.png",gd=n.p+"static/media/labtest2.0f5d4cb2abb56cd7e371.png",xd=ia.div`
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
`,bd=ia.div`
  max-width: 50%;
  margin-top: 100px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 150px;
  }
`,yd=ia.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,vd=ia.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,wd=ia.button`
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
`,kd=ia.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Sd=ia.div`
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
`,jd=ia.img`
  width: 70px;
  margin-bottom: 10px;
`,Ad=ia.p`
  font-size: 1rem;
  color: #333;
`,Cd=ia.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`,Ed=ia.img`
  width: 600px;
  height: auto;
  border-radius: 10%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`,Rd=()=>{const[e,n]=(0,t.useState)("linear-gradient(180deg, #fceabb, rgb(255 246 247))"),[r,i]=(0,t.useState)(dd),[a,o]=(0,t.useState)(!1),s=(e,t)=>{n(e),i(t)},l=()=>{n("linear-gradient(180deg, #fceabb, rgb(255 246 247))"),i(dd)};return(0,m.jsxs)(xd,{background:e,children:[(0,m.jsxs)(bd,{children:[(0,m.jsx)(yd,{children:"To Automate the Most Complex Operations"}),(0,m.jsx)(vd,{children:"Experience the efficiency and clarity that comes with a fully integrated business management solution. With Atomwalk Office, transform your data into actionable insights and drive your business forward with confidence."}),(0,m.jsx)(wd,{onClick:()=>{window.location.href="/demo.html"},children:"Get Started"}),(0,m.jsxs)(kd,{children:[(0,m.jsxs)(Sd,{background:e,onMouseEnter:()=>s("linear-gradient(180deg, #4382f8, rgb(255 246 247))",ud),onMouseLeave:l,onClick:()=>{window.location.href="/crm.html"},children:[(0,m.jsx)(jd,{src:fd,alt:"CRM"}),(0,m.jsx)(Ad,{children:"Comprehensive CRM platform for customer-facing teams."})]}),(0,m.jsxs)(Sd,{background:e,onMouseEnter:()=>s("linear-gradient(180deg, #a970ff, rgb(255 246 247))",pd),onMouseLeave:l,onClick:()=>{window.location.href="/hrm.html"},children:[(0,m.jsx)(jd,{src:md,alt:"HR"}),(0,m.jsx)(Ad,{children:"HR management software streamlining payroll, attendance, leave, claims."})]}),(0,m.jsxs)(Sd,{onClick:()=>{window.location.href="/lms.html"},background:e,onMouseEnter:()=>s("linear-gradient(180deg, #90ee90, rgb(255 246 247))",gd),onMouseLeave:l,children:[(0,m.jsx)(jd,{src:hd,alt:"E-Commerce"}),(0,m.jsx)(Ad,{children:"Manage lab operations and equipment effortlessly in one platform"})]})]})]}),(0,m.jsx)(Cd,{children:(0,m.jsx)(Ed,{src:r,alt:"Profile"})}),(0,m.jsx)(as,{visible:a,setvisible:o})]})},Pd=n.p+"static/media/Cloud.773250297b7d95b40fbc.webp",Od=n.p+"static/media/Subcloud.d66e6c8b1d355e09b54f.webp",Td=ia.div`
  background-color: rgb(234 244 255);
  padding: 20px;

  @media (min-width: 768px) {
    padding: 50px;
  }
`,Md=ia.div`
  text-align: center;
  margin-bottom: 40px;
`,zd=ia.h1`
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,Id=ia.p`
  font-size: 18px;
  color: #7f8c8d;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`,Dd=ia.a`
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
`,Ld=ia.div`
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
`,Fd=ia.div`
  flex: 1;
  max-width: 500px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 50px;
  }
`,Nd=ia.img`
  width: 100%;
  border-radius: 10px;
`,Bd=ia.div`
  flex: 1;
`,qd=ia.h2`
  font-size: 24px;
  color: #34495e;
  /* font-family: 'Courier New', Courier, monospace; */
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`,Hd=ia.p`
  font-size: 16px;
  color: #7f8c8d;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,Wd=ia.img`
  display: none; /* Hide the image on mobile screens */

  @media (min-width: 768px) {
    display: block; /* Show the image on larger screens */
    width: 15%;
    float: right;
    margin-top: -177px;
  }
`,_d=()=>(0,m.jsxs)(Td,{children:[(0,m.jsxs)(Md,{children:[(0,m.jsx)(zd,{children:"Unlock the Future"}),(0,m.jsx)(Id,{children:"Revolutionize your business operations with Atomwalk Office's cutting-edge ERP solution"}),(0,m.jsx)(Dd,{href:"/Product.html",children:"Transform Your Business Today"})]}),(0,m.jsxs)(Ld,{children:[(0,m.jsx)(Fd,{children:(0,m.jsx)(Nd,{src:Pd,alt:"Business Operations"})}),(0,m.jsxs)(Bd,{children:[(0,m.jsx)(qd,{children:"Elevate Your Business to New Heights with Atomwalk Office's Comprehensive ERP"}),(0,m.jsx)(Hd,{children:"Discover how Atomwalk Office's cloud-based ERP can streamline your core business functions, boost productivity, and drive sustainable growth for your small or medium enterprise."})]})]}),(0,m.jsx)(Wd,{src:Od})]});ia.section`
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
`,ia.div`
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
`,ia.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 15px;
`,ia.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`,ia.p`
  font-size: 1em;
  margin: 0;
`,ia.div`
  margin-top: 10px;
  font-weight: bold;
`,ia.div`
  font-size: 0.9em;
  color: #666;
`,ia.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    width: 559.66px;
    position: relative;
    left: -84px;
    top: 8px;
    transition: none;
  }
`,ia.h2`
  font-size: 1.8em;
  margin-bottom: 10px;
`,ia.p`
  font-size: 1em;
  margin-bottom: 20px;
`,ia.a`
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
`;var Ud=n(2382);const Gd=n.p+"static/media/lipika.75242ac9bb129dc39010.jpg",Kd=[{id:1,name:"Dr Santosh Poddar, IISER, Pune",text:"Atomwalk\u2019s ERP software has revolutionized our financial management. The seamless integration and user-friendly interface have significantly improved our operational efficiency.",img:"https://picsum.photos/101/101"},{id:2,name:"Deepak Emanuel, Chief Operating Officer, FluxGen Sustainable Technologies Pvt Ltd",text:"The inventory management features of Atomwalk have been a game-changer for us. We can now track our stock levels in real-time, reducing waste and optimizing our supply chain.",img:"https://picsum.photos/102/102"},{id:3,name:"Mr. Santosh Olety, CEO at Microsys Care: ",text:"He highlights the efficiency and effectiveness of Atomwalk\u2019s software in streamlining their operations.",img:"https://picsum.photos/103/103"}],Yd=ia.div`
background-color: aliceblue;
  @media (min-width: 768px) {
    padding:0 0 100px;
  }
`,Vd=ia.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: aliceblue;
  @media (min-width: 768px) {
    max-width: 1300px;
  }
`,Jd=ia.div`
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
`,Qd=ia.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`,Zd=ia.div`
  flex: 1;
`,Xd=ia.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`,$d=ia.p`
  margin: 10px 0 0;
  color: #777;
`,eu=ia(Ud.A)`

  .slick-slide {
    padding: 10px;
  }
  .slick-arrow {
    &:before{
        color: #2c3e50;
    }
 
  }
`,tu={dots:!0,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]},nu=ia.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 40px;
`,ru=(ia.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
`,ia.p`
font-weight: 900;
    font-size: 45px;
    color: #2c3e50;
`),iu=ia.p`
color: #7f8c8d;
font-size: 18px;
`,au=()=>(0,m.jsx)(Yd,{children:(0,m.jsxs)(Vd,{children:[(0,m.jsxs)(nu,{children:[(0,m.jsx)(ru,{children:"Testimonial"}),(0,m.jsx)(iu,{children:"What our customers say about Atomwalk"})]}),(0,m.jsx)(eu,{...tu,children:Kd.map((e=>(0,m.jsx)("div",{children:(0,m.jsxs)(Jd,{children:[(0,m.jsx)(Qd,{src:e.img,alt:e.name}),(0,m.jsxs)(Zd,{children:[(0,m.jsx)(Xd,{children:e.name}),(0,m.jsx)($d,{children:e.text})]})]})},e.id)))})]})}),ou=n.p+"static/media/image.f55fe67f8ba4fa6c4602.png",su={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px"},overlay:{backgroundColor:"rgba(0, 0, 0, .8)",zIndex:"32333"}},lu=ia.div`
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
`,cu=ia.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
    padding-right: 20px;
  }
`,du=ia.div`
  display: none;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    width: 40%;
  }
`,uu=ia.h2`
  font-size: 2.1em;
  color:#ea5c49;
  margin-bottom: 10px;
  font-weight: 800;
  line-height: 1.25;
`,pu=ia.p`
  color: #555;
  margin-bottom: 20px;
`,fu=ia.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 4px;
`,mu=ia.button`
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
`,hu=ia.button`
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
`,gu=e=>{let{isOpen:n,onRequestClose:r,setShowsuccess:i}=e,a=new Date;const o={name:"",company_name:"",task_name:"Book My Demo",mobile_number:"",email_id:"",add_task:"N",task_type:"Book My Demo",task_date:`${("0"+a.getDate()).slice(-2)}-${("0"+(a.getMonth()+1)).slice(-2)}-${a.getFullYear()}`,remarks:"Book My Demo"},[s,l]=(0,t.useState)(o),c=(e,t)=>{l({...s,[e]:t})},d=async(e,t)=>{try{let n=localStorage.getItem("apiResponse"),a=JSON.parse(n);if(!n)throw new Error("Token not found, please login.");const s=Hc.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${a.key}`}});200==(await s.post(e,t)).status&&(i(!0),localStorage.setItem("datacheck",!0),l(o),r())}catch(n){console.log("Error making authenticated API call:",n),l(o)}};return(0,m.jsx)(rs(),{isOpen:n,onRequestClose:r,style:su,ariaHideApp:!1,children:(0,m.jsxs)(lu,{children:[(0,m.jsxs)(cu,{children:[(0,m.jsx)(hu,{onClick:r,children:"\xd7"}),(0,m.jsx)(uu,{children:"Ready to see our product in action?"}),(0,m.jsx)(pu,{children:"See a demo of our product that's tailored just for you."}),(0,m.jsx)(fu,{onChange:e=>c("name",e.target.value),type:"text",placeholder:"Your Name"}),(0,m.jsx)(fu,{onChange:e=>c("email_id",e.target.value),type:"email",placeholder:"Email"}),(0,m.jsx)(fu,{onChange:e=>c("mobile_number",e.target.value),type:"tel",placeholder:"Phone Number"}),(0,m.jsx)(fu,{onChange:e=>c("company_name",e.target.value),type:"text",placeholder:"Company Name"}),(0,m.jsx)(mu,{onClick:e=>(e.preventDefault(),d("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:s})),children:"Book My Demo"})]}),(0,m.jsx)(du,{children:(0,m.jsx)("img",{src:ou,alt:"Rocket",style:{width:"100%"}})})]})})},xu=ia.div`
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
`,bu=ia.div``;function yu(e){return(0,m.jsx)("div",{children:(0,m.jsx)(xu,{children:(0,m.jsx)(bu,{children:(0,m.jsx)(cd,{text:e.message,color:"#1F936E",fontSize:"18px",fontWeight:"bold",cursor:"auto",fontSizeMedia:"13px"})})})})}const vu=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(!1),a=localStorage.getItem("datacheck");(0,t.useEffect)((()=>{a||setTimeout((()=>{n(!0)}),2e5)}),[]);return(0,t.useEffect)((()=>{r&&setTimeout((()=>{i(!1)}),3e3)}),[r]),(0,m.jsxs)("div",{children:[r&&(0,m.jsx)(yu,{message:"We have successfully recorded your information."}),(0,m.jsx)(Rd,{}),(0,m.jsx)(Wo,{}),(0,m.jsx)(_d,{}),(0,m.jsx)(fs,{}),(0,m.jsx)(au,{}),(0,m.jsx)(sd,{}),(0,m.jsx)(Wc,{setShowsuccess:i}),(0,m.jsx)(gu,{isOpen:e,onRequestClose:()=>{n(!1)},setShowsuccess:i})]})};new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(cA){}new Map;const wu=r.startTransition;I.flushSync,r.useId;function ku(e){let{basename:n,children:r,future:i,window:a}=e,o=t.useRef();null==o.current&&(o.current=function(e){return void 0===e&&(e={}),ha((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return pa("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:fa(t)}),null,e)}({window:a,v5Compat:!0}));let s=o.current,[l,c]=t.useState({action:s.action,location:s.location}),{v7_startTransition:d}=i||{},u=t.useCallback((e=>{d&&wu?wu((()=>c(e))):c(e)}),[c,d]);return t.useLayoutEffect((()=>s.listen(u)),[s,u]),t.createElement(ho,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:s,future:i})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var Su,ju;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Su||(Su={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ju||(ju={}));const Au=n.p+"static/media/cover-Proses-Manajemen-Inventory-dan-Metode-Penerapannya-01-1-1024x656.71fe8c9581957cf0a241.png",Cu=n.p+"static/media/header-4-1-2048x1107.672ff3f0045c273d262f.png",Eu=n.p+"static/media/projecticon.2ce87c438cbe4e6220e1.png",Ru=n.p+"static/media/new-b-bg.7dd6f955d98bb72b8f0b.png",Pu=ia.div`
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

`,Ou=ia.div`
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
`,Tu=ia.img`
    width: 490px;
    margin: 0 auto;
    display: flex;

    @media screen and (max-width: 767px) {
        width: 300px;
    }

`;function Mu(e){return(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:"ip-temp-wrap",children:[(0,m.jsx)("div",{children:(0,m.jsx)(Tu,{src:e.Temp})}),(0,m.jsx)("div",{children:(0,m.jsx)(Pu,{children:e.title})}),(0,m.jsx)("div",{children:(0,m.jsx)(Ou,{children:e.desc})})]})})}const zu=ia.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    background-image: url(${Ru});

`,Iu=ia.div`
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

`,Du=ia.div`
    width: 11px;
    height: 11px;
    border-radius: 50px;
    background-color: #cbcbcb;
    cursor: pointer;
    border: 1px solid #ccc;
`,Lu=e=>{switch(e){case 0:return Au;case 1:return Cu;case 2:return Eu}},Fu=e=>{let t={};switch(e){case 0:t={heading:"Inventory Management",description:"Take control of your inventory with Atomwalk Office"};break;case 1:t={heading:"Customer Management",description:"Deliver exceptional customer service and boost sales with Atomwalk Office"};break;case 2:t={heading:"Project Management",description:"Make informed decisions based on real-time information and analytics provided by Atomwalk Office"}}return t},Nu=()=>{const[e,n]=(0,t.useState)(0),r=e=>{n(e)};return(0,t.useEffect)((()=>{const t=setInterval((()=>{let t=e+1;t>2&&(t=0),r(t)}),4e3);return()=>clearInterval(t)})),(0,m.jsxs)(zu,{children:[0==e&&(0,m.jsx)(Mu,{Temp:Lu(0),title:Fu(0).heading,desc:Fu(0).description}),1==e&&(0,m.jsx)(Mu,{Temp:Lu(1),title:Fu(1).heading,desc:Fu(1).description}),2==e&&(0,m.jsx)(Mu,{Temp:Lu(2),title:Fu(2).heading,desc:Fu(2).description}),(0,m.jsxs)(Iu,{children:[(0,m.jsx)(Du,{onClick:()=>{r(0)},style:0==e?{backgroundColor:"#FF7624"}:{}}),(0,m.jsx)(Du,{onClick:()=>{r(1)},style:1==e?{backgroundColor:"#FF7624"}:{}}),(0,m.jsx)(Du,{onClick:()=>{r(2)},style:2==e?{backgroundColor:"#FF7624"}:{}})]})]})},Bu=ia.button`
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
`;function qu(e){const t=e.disable;return(0,m.jsx)("div",{children:(0,m.jsx)(Bu,{onClick:e.onClick,variant:e.variant,width:e.width,fontWeight:e.fontWeight,fontSize:e.fontSize,height:e.height,Lgheight:e.Lgheight,mbfontSize:e.mbfontSize,mbpadding:e.mbpadding,mbwidth:e.mbwidth,disabled:t,children:e.text})})}const Hu=ia.div`
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
`,Wu=ia.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`,_u=ia.div`
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

`,Uu=ia.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 16px;
  color: #454545;
  margin-bottom: 6px;
`,Gu=ia.div`
  margin-top: 0px;
`,Ku=ia.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 24px;
  color: #352960;
  margin-top: 7px;
  text-align: left;

  @media screen and (max-width: 1280px){
    margin-top: 4px;
  }
`,Yu=ia.input`
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
`,Vu=ia.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;

  @media screen and (max-width: 1280px){
      margin-top: 16px;
    margin-bottom: 5px;
  }
`,Ju=(ia.button`
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
`,ia.a`
  text-decoration: none;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
  color: #2970b1;
  cursor: pointer;
  &:hover {
    color: #15436d;
  }
`),Qu=ia.div`
  color: #acacac;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
`,Zu=(ia.div`
  font-size: 14px;
  font-family: "Centra";
  line-height: 21px;
  color: #ff4141;
  text-align: left;
  margin-bottom: 12px;
`,()=>(0,m.jsx)("div",{children:(0,m.jsxs)(Hu,{children:[(0,m.jsxs)(Wu,{children:[(0,m.jsx)(_u,{children:"Login"}),(0,m.jsx)(Uu,{children:"to see your research come alive!"}),(0,m.jsxs)(Gu,{children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)(Ku,{children:["Email address ",(0,m.jsx)("span",{style:{color:"red"},children:" *"})]}),(0,m.jsx)(Yu,{placeholder:"Enter your email"})]}),(0,m.jsxs)("div",{children:[(0,m.jsxs)(Ku,{children:["Password ",(0,m.jsx)("span",{style:{color:"red"},children:" *"})]}),(0,m.jsx)(Yu,{type:"password",placeholder:"Enter your password "})]})]})]}),(0,m.jsx)(Vu,{children:(0,m.jsx)(qu,{text:"Log In",variant:"solidOrange",width:"100px",height:"50px"})}),(0,m.jsxs)("div",{children:[(0,m.jsx)(Ju,{href:"/forgotpassword.html",children:"Forgot Password?"}),(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"3px",justifyContent:"center"},children:[(0,m.jsx)(Qu,{children:"Don\u2019t have an account? "}),(0,m.jsx)(Ju,{href:"/signup",children:"Sign Up"})]})]})]})})),Xu=ia.div`
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
`,$u=()=>(0,m.jsx)("div",{children:(0,m.jsxs)(Xu,{children:[(0,m.jsx)("div",{style:{width:"100%",position:"relative"},children:(0,m.jsx)(Nu,{})}),(0,m.jsx)("div",{children:(0,m.jsx)(Zu,{})})]})}),ep=ia.div`
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

`,tp=ia.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`,np=ia.div`
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

`,rp=ia.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 16px;
  color: #454545;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`,ip=ia.div`
  margin-top: 25px;
`,ap=ia.div`
  font-size: 16px;
  font-family: "Centra";
  line-height: 24px;
  color: #352960;
  margin-top: 15px;
  text-align: left;
`,op=ia.input`
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

`,sp=ia.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 25px;
`,lp=(ia.button`
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
`,ia.a`
  text-decoration: none;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
  color: #2970b1;
  cursor: pointer;
  &:hover {
    color: #15436d;
  }
`),cp=ia.div`
  color: #acacac;
  font-size: 12px;
  font-family: "Centra";
  line-height: 24px;
`,dp=(ia.div`
  font-size: 14px;
  font-family: "Centra";
  line-height: 21px;
  color: #ff4141;
  text-align: left;
  margin-bottom: 12px;
`,()=>(0,m.jsx)("div",{children:(0,m.jsxs)(ep,{children:[(0,m.jsxs)(tp,{children:[(0,m.jsx)(np,{children:"Forgot Password?"}),(0,m.jsx)(rp,{children:"Enter your registered work email to reset password"}),(0,m.jsx)(ip,{children:(0,m.jsxs)("div",{children:[(0,m.jsxs)(ap,{children:["Email address ",(0,m.jsx)("span",{style:{color:"red"},children:" *"})," "]}),(0,m.jsx)(op,{placeholder:"Enter your registered work email"})]})})]}),(0,m.jsx)(sp,{children:(0,m.jsx)(qu,{text:"Send",variant:"solidOrange",width:"100px",height:"50px"})}),(0,m.jsx)("div",{children:(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"3px",justifyContent:"center"},children:[(0,m.jsx)(cp,{children:"Don\u2019t have an account? "}),(0,m.jsx)(lp,{href:"/signup",children:"Sign Up"})]})})]})})),up=ia.div`
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
`;function pp(){return(0,m.jsx)("div",{children:(0,m.jsxs)(up,{children:[(0,m.jsx)("div",{style:{width:"100%",position:"relative"},children:(0,m.jsx)(Nu,{})}),(0,m.jsx)("div",{children:(0,m.jsx)(dp,{})})]})})}const fp=n.p+"static/media/what-is-ERP.b39cc665c451687aad1b.jpg",mp=n.p+"static/media/color-sharp.bea361cfef80fefc2d1e.png",hp=n.p+"static/media/color-sharp2.c87586c6c2f549cb4aa6.png",gp=(n.p,n.p,n.p+"static/media/Backgroundpeople.d12b809f5bce2d857642.png"),xp=n.p+"static/media/Product.9dd066cf3ea2e0c5d71c.png",bp=n.p+"static/media/CrmHero.8e1214dc746d880dc597.png",yp=ia.section`
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
`,vp=ia.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`,wp=ia.h2`
  font-size: 3rem;
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    margin-top: 70px;
  }
`,kp=ia.p`
  font-size: 1.3rem;
  color: #555;
`,Sp=ia.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`,jp=ia.button`
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
`,Ap=ia.div`
  position: relative;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`,Cp=(ia.div`
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
`,ia.img`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    max-width: 650px;
  }
`),Ep=e=>{const t=eo();return(0,m.jsxs)(yp,{background:e.background,children:[(0,m.jsxs)(vp,{children:[(0,m.jsx)(wp,{children:e.title}),(0,m.jsx)(kp,{children:e.description}),(0,m.jsxs)(Sp,{children:[(0,m.jsx)(jp,{primary:!0,onClick:()=>{window.location.href="/demo.html"},children:"Request a Demo"}),(0,m.jsx)(jp,{onClick:()=>{t(-1)},children:"Back"})]})]}),(0,m.jsx)(Ap,{children:(0,m.jsx)(Cp,{src:e.data?xp:e.crm?bp:e.lead?e.img:gp,alt:"People talking"})})]})},Rp=n.p+"static/media/consulting.939890d26733fc8bb7de.png",Pp=n.p+"static/media/service.2b0a165b42a11cc4aafa.png",Op=n.p+"static/media/grow.6d717d5c8734947f8b94.png",Tp=n.p+"static/media/human-resources.b5fe567a0189b6da868e.png",Mp=n.p+"static/media/arrows.1950f85fea2b63e0f617.png",zp=ia.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,Ip=ia.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,Dp=ia.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,Lp=ia.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Fp=ia.div`
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
`,Np=ia.div`
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
`,Bp=ia.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,qp=ia.p`
  font-size: 1em;
  color: #666;
`,Hp=()=>{const e=e=>{window.location.href=e};return(0,m.jsxs)(zp,{children:[(0,m.jsx)(Ip,{children:"Why Atomwalk Office ERP?"}),(0,m.jsx)(Dp,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,m.jsxs)(Lp,{children:[(0,m.jsxs)(Fp,{children:[(0,m.jsx)(Np,{bgColor:"#D8F5E3",children:(0,m.jsx)("img",{src:Rp,alt:"Speed"})}),(0,m.jsx)(Bp,{children:"Financial Compliance:"}),(0,m.jsx)(qp,{children:"Automated e-Invoice, GST reconciliation, and real-time financial management."})]}),(0,m.jsxs)(Fp,{children:[(0,m.jsx)(Np,{bgColor:"#F0E7FF",children:(0,m.jsx)("img",{src:Pp,alt:"Trust"})}),(0,m.jsx)(Bp,{children:"Operational Excellence:"}),(0,m.jsx)(qp,{children:"Project and work order management, BOM generation, and process optimization."})]}),(0,m.jsxs)(Fp,{style:{cursor:"pointer"},onClick:()=>e("/crm.html"),children:[(0,m.jsx)(Np,{bgColor:"#E0F7FC",children:(0,m.jsx)("img",{src:Op,alt:"Accuracy"})}),(0,m.jsx)(Bp,{children:"Business Growth:"}),(0,m.jsx)(qp,{children:"Integrated CRM for lead management, sales performance tracking, and customer communication."})]}),(0,m.jsxs)(Fp,{style:{cursor:"pointer"},onClick:()=>e("/hrm.html"),children:[(0,m.jsx)(Np,{bgColor:"#FFF2E0",children:(0,m.jsx)("img",{src:Tp,alt:"Reliability"})}),(0,m.jsx)(Bp,{children:"HR & Payroll:"}),(0,m.jsx)(qp,{children:"From recruitment to payroll, manage the full employee lifecycle effortlessly."})]}),(0,m.jsxs)(Fp,{children:[(0,m.jsx)(Np,{bgColor:"#ffe0f5",children:(0,m.jsx)("img",{src:Mp,alt:"Reliability"})}),(0,m.jsx)(Bp,{children:"Multi-location Flexibility:"}),(0,m.jsx)(qp,{children:"Handle operations across multiple branches or locations with ease."})]})]})]})},Wp=n.p+"static/media/time.a8163f40469abbaa08ca.png",_p=n.p+"static/media/money.b0e5ae4582ee14be342a.png",Up=n.p+"static/media/profits.effdf91aad8318ce8c98.png",Gp=n.p+"static/media/login.1fc5649da5ea944b531d.png",Kp=ia.div`
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
`,Yp=ia.h2`
  font-size: 2.5em;
  font-weight: bold;
  color:#333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`,Vp=ia.h3`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
`,Jp=ia.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
@media (max-width: 768px) {
  flex-wrap: wrap;
}
`,Qp=ia.div`
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
`,Zp=ia.img`
  width: 90px;
  height: 90px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`,Xp=ia.h4`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`,$p=ia.p`
  font-size: 1em;
  color: #666;
  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`,ef=()=>(0,m.jsxs)(Kp,{children:[(0,m.jsx)(Yp,{children:"Unite advantages"}),(0,m.jsx)(Vp,{children:"Features Tailored to Your Business Needs"}),(0,m.jsxs)(Jp,{children:[(0,m.jsxs)(Qp,{children:[(0,m.jsx)(Zp,{src:_p,alt:"Centralized access"}),(0,m.jsx)(Xp,{children:"AI & Blockchain Integration:"}),(0,m.jsx)($p,{children:"Leverage advanced technologies for automated data entry, secure transactions, and business innovation."})]}),(0,m.jsxs)(Qp,{children:[(0,m.jsx)(Zp,{src:Wp,alt:"Vetted providers"}),(0,m.jsx)(Xp,{children:"Real-time Insights:"}),(0,m.jsx)($p,{children:"Make informed decisions with real-time data, analytics, and reporting."})]}),(0,m.jsxs)(Qp,{children:[(0,m.jsx)(Zp,{src:Up,alt:"Simplified workflows"}),(0,m.jsx)(Xp,{children:"Cost-Effective:"}),(0,m.jsx)($p,{children:"Low setup costs with no upfront investment and all updates included at no additional charge."})]}),(0,m.jsxs)(Qp,{children:[(0,m.jsx)(Zp,{src:Gp,alt:"Simplified workflows"}),(0,m.jsx)(Xp,{children:"User-Friendly Interface"}),(0,m.jsx)($p,{children:"Simplified, integrated, and accessible from any device, anywhere."})]})]})]}),tf=n.p+"static/media/automation.5c71914163b6c86409c0.png",nf=n.p+"static/media/server.96b9766474c3a4c7cb8d.png",rf=n.p+"static/media/scalability.a651e2f67804756aba51.png",af=ia.section`
  padding: 100px 20px;
  background-color:rgb(225 255 246);
  text-align: center;
`,of=ia.div`
  max-width: 1200px;
  margin: 0 auto;
`,sf=ia.h2`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,lf=ia.p`
  color: #666;
  margin-top: 10px;
  font-size: 1.2em;
`,cf=ia.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 70px;
`,df=ia.div`
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
`,uf=ia.img`
  max-width: 80px;
  margin-bottom: 20px;
`,pf=ia.h3`
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,ff=ia.p`
  color: #666;
`,mf=()=>(0,m.jsx)(af,{children:(0,m.jsxs)(of,{children:[(0,m.jsx)(sf,{children:"Seamless Integration and Workflow"}),(0,m.jsx)(lf,{children:"Atomwalk Office ERP connects every aspect of your business into one unified system"}),(0,m.jsxs)(cf,{children:[(0,m.jsxs)(df,{style:{backgroundColor:"rgb(181 255 206)"},children:[(0,m.jsx)(uf,{src:tf,alt:"Automated Processes"}),(0,m.jsx)(pf,{children:"Automated Processes"}),(0,m.jsx)(ff,{children:"From bank reconciliation to payroll processing, automate repetitive tasks."})]}),(0,m.jsxs)(df,{style:{backgroundColor:"rgb(188 216 255)"},children:[(0,m.jsx)(uf,{src:nf,alt:"Centralized Data"}),(0,m.jsx)(pf,{children:"Centralized Data"}),(0,m.jsx)(ff,{children:"Access and manage all your business data from a single platform."})]}),(0,m.jsxs)(df,{style:{backgroundColor:"rgb(255 211 168)"},children:[(0,m.jsx)(uf,{src:rf,alt:"Scalability"}),(0,m.jsx)(pf,{children:"Scalability"}),(0,m.jsx)(ff,{children:"Whether you\u2019re managing one location or multiple, Atomwalk scales with your business."})]})]})]})}),hf=(ia.div`
  display: flex;
  align-items: center;
 justify-content: center;
 gap: 50px;
  padding: 50px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`,ia.div`
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
`,ia.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: absolute;
  top: -35px;
  left: 20px;
  border: 4px solid #ffffff;
`,ia.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  right: 20px;
`,ia.div`
  margin-top: 30px;
  text-align: left;
  font-size: 1em;
  color: #333333;
`,ia.h4`
  margin: 10px 0;
  font-weight: 600;
  color: #000000;
`,ia.p`
  color: #666666;
  font-size: 0.9em;
`,ia.div`
  color: #f7c324;
  font-size: 1.2em;
  margin-top: 15px;
`,ia.h2`
padding: 50px;
  font-size: 2.5rem;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,ia.div`
background-color: #cfe2ff;
`,n.p,n.p+"static/media/inventory management.774803593808cfe0f584.jpg"),gf=n.p+"static/media/Process Templates.d39be0c24a2b4032e061.jpg",xf=n.p+"static/media/Sales and Procurement.954547f65f6d37ca39dd.jpg",bf=n.p+"static/media/Report And Dashboard.91584e3da800458d2e24.jpg",yf=n.p+"static/media/gst.0029cfd05e4a07f888bf.webp",vf=n.p+"static/media/Bank Reconciliation.194e572838760b213dd7.jpg",wf=n.p+"static/media/Finacial Acconting.3a1f51360c2ca455c64c.avif",kf=n.p+"static/media/CrmProduct.2963cbe39deaa2d9f272.jpeg",Sf=n.p+"static/media/Hrproduct.a116456aee92db07b3ca.jpeg",jf=n.p+"static/media/Labeqp.e0453b3ae43325330c69.webp",Af=ia.section`
  padding: 40px 20px;
  text-align: center;
  background-color: #ddf5ff;
`,Cf=(ia.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
`,ia.h2`
  font-size: 2.5em;
  font-weight: 600;
  color: #333;
  margin-bottom: 40px;
  
  span {
    color: #9C27B0; /* Purple color for the highlighted text */
  }
`),Ef=ia.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`,Rf=ia.div`
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
`,Pf=ia.div`
  max-width: 40%;
  text-align: left;

  @media (max-width: 767px) {
    text-align: left;
    max-width: 100%;
  }
`,Of=ia.h3`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`,Tf=ia.div`
  color: #666;
  font-size: 1em;
  margin-bottom: 20px;
`,Mf=ia.button`
  background-color: #ea5c49;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
`,zf=ia.div`
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
`,If=ia.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #9C27B0;
  border-radius: 50%;
  ${e=>e.top&&`top: ${e.top}; left: ${e.left};`}
  ${e=>e.bottom&&`bottom: ${e.bottom}; right: ${e.right};`}
`,Df=()=>{const e=()=>{window.location.href="/demo.html"},t=e=>{window.location.href=`${e}`};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(Af,{children:[(0,m.jsx)(Cf,{children:"Atomwalk Office ERP connects every aspect of your business into one unified system"}),(0,m.jsxs)(Ef,{children:[(0,m.jsxs)(Rf,{bgColor:"#d6e7ff",onClick:()=>t("/crm.html"),children:[(0,m.jsx)(zf,{children:(0,m.jsx)("img",{src:kf,alt:"Performance management"})}),(0,m.jsxs)(Pf,{children:[(0,m.jsx)(Of,{children:"Customer Management"}),(0,m.jsx)(Tf,{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"Lead Management"}),(0,m.jsx)("li",{children:"Customer Management"}),(0,m.jsx)("li",{children:"Channel partner management"}),(0,m.jsx)("li",{children:"Annual Maintenance Contract"}),(0,m.jsx)("li",{children:"Campaign Management"})]})}),(0,m.jsx)(Mf,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,m.jsx)(If,{top:"20%",left:"5%"}),(0,m.jsx)(If,{bottom:"10%",right:"70%"})]}),(0,m.jsxs)(Rf,{bgColor:"#ffeadf",onClick:()=>t("/sales.html"),children:[(0,m.jsxs)(Pf,{children:[(0,m.jsx)(Of,{children:"Sales and Procurement"}),(0,m.jsx)(Tf,{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"Sales order, quotation, proforma invoice"}),(0,m.jsx)("li",{children:"Tax Invoice"}),(0,m.jsx)("li",{children:"Payment, GST Tracking, TDS handling"}),(0,m.jsx)("li",{children:"Return, Credit note handling"}),(0,m.jsx)("li",{children:"Purchase Order, Purchase requests"}),(0,m.jsx)("li",{children:"Goods Receipt (GRN)"}),(0,m.jsx)("li",{children:"Goods Return/Shortage/Debit Note"}),(0,m.jsx)("li",{children:"Purchase Service Order, TDS handling"})]})}),(0,m.jsx)(Mf,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,m.jsx)(zf,{children:(0,m.jsx)("img",{src:xf,alt:"Performance management"})}),(0,m.jsx)(If,{top:"20%",left:"5%"}),(0,m.jsx)(If,{bottom:"10%",right:"70%"})]}),(0,m.jsxs)(Rf,{bgColor:"#e0f7fa",onClick:()=>t("/inventory.html"),children:[(0,m.jsx)(zf,{children:(0,m.jsx)("img",{src:hf,alt:"Performance management"})}),(0,m.jsxs)(Pf,{children:[(0,m.jsx)(Of,{children:"Inventory Management"}),(0,m.jsx)(Tf,{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"Item Category and Group"}),(0,m.jsx)("li",{children:"Inventory Item and Service Item"}),(0,m.jsx)("li",{children:"Item Supplier management"}),(0,m.jsx)("li",{children:"Multiple locations"}),(0,m.jsx)("li",{children:"Multiple Units"}),(0,m.jsx)("li",{children:"Warehouse management (Bin Locations)"}),(0,m.jsx)("li",{children:"Item Serial Number handling"}),(0,m.jsx)("li",{children:"Item physical inspection and open balance"}),(0,m.jsx)("li",{children:"Item min order qty and Expiry date tracking"})]})}),(0,m.jsx)(Mf,{children:"Request a Demo"})]}),(0,m.jsx)(If,{top:"20%",left:"5%"}),(0,m.jsx)(If,{bottom:"10%",right:"70%"})]}),(0,m.jsxs)(Rf,{bgColor:"rgb(225, 255, 246)",children:[(0,m.jsxs)(Pf,{children:[(0,m.jsx)(Of,{children:"GST & TDS"}),(0,m.jsx)(Tf,{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"GST report Support"}),(0,m.jsx)("li",{children:"TDS and TDS reconciliation"}),(0,m.jsx)("li",{children:"GST Reconciliation with A/c"})]})}),(0,m.jsx)(Mf,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,m.jsx)(zf,{children:(0,m.jsx)("img",{src:yf,alt:"Employee engagement"})}),(0,m.jsx)(If,{top:"10%",left:"80%"}),(0,m.jsx)(If,{bottom:"5%",right:"10%"})]}),(0,m.jsxs)(Rf,{bgColor:"#d7faff",children:[(0,m.jsx)(zf,{children:(0,m.jsx)("img",{src:vf,alt:"Employee engagement"})}),(0,m.jsxs)(Pf,{children:[(0,m.jsx)(Of,{children:"Bank Reconciliation"}),(0,m.jsx)(Tf,{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"Bank Statement Upload"}),(0,m.jsx)("li",{children:"Account Reconciliation with Sales and PO"}),(0,m.jsx)("li",{children:"Rule-based reconciliation of Expenses"}),(0,m.jsx)("li",{children:"Bank statement View"}),(0,m.jsx)("li",{children:"Reconciled statement view"}),(0,m.jsx)("li",{children:"Bank, Exchange rate setup"})]})}),(0,m.jsx)(Mf,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,m.jsx)(If,{top:"10%",left:"80%"}),(0,m.jsx)(If,{bottom:"5%",right:"10%"})]}),(0,m.jsxs)(Rf,{bgColor:"#ffeadf",children:[(0,m.jsxs)(Pf,{children:[(0,m.jsx)(Of,{children:"Financial Accounting"}),(0,m.jsx)(Tf,{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"Reports (Sales, Purchase and Inventory)."}),(0,m.jsx)("li",{children:"Audit Trail."}),(0,m.jsx)("li",{children:"Statutory Reports (P&L, Balance Sheet, Cash Flow, Change in Equity)."}),(0,m.jsx)("li",{children:"Purchase Reports"}),(0,m.jsx)("li",{children:"Depreciation Schedule"})]})}),(0,m.jsx)(Mf,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,m.jsx)(zf,{children:(0,m.jsx)("img",{src:wf,alt:"Performance management"})}),(0,m.jsx)(If,{top:"20%",left:"5%"}),(0,m.jsx)(If,{bottom:"10%",right:"70%"})]}),(0,m.jsxs)(Rf,{bgColor:"#dfdfdf",children:[(0,m.jsx)(zf,{children:(0,m.jsx)("img",{src:bf,alt:"Performance management"})}),(0,m.jsxs)(Pf,{children:[(0,m.jsx)(Of,{children:"Reports and Dashboard"}),(0,m.jsx)(Tf,{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"Manager Dashboard"}),(0,m.jsx)("li",{children:"Sales Dashboard"}),(0,m.jsx)("li",{children:"Account Receivable and Payable"}),(0,m.jsx)("li",{children:"Party wise outstanding"}),(0,m.jsx)("li",{children:"Batch reports like Sales overdue, GST not filed"}),(0,m.jsx)("li",{children:"Report Templates"}),(0,m.jsx)("li",{children:"User Access control"})]})}),(0,m.jsx)(Mf,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,m.jsx)(If,{top:"20%",left:"5%"}),(0,m.jsx)(If,{bottom:"10%",right:"70%"})]}),(0,m.jsxs)(Rf,{bgColor:"#f6eaff",onClick:()=>t("/processandproject.html"),children:[(0,m.jsxs)(Pf,{children:[(0,m.jsx)(Of,{children:"Process Templates & Project Management"}),(0,m.jsx)(Tf,{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"Activity Definition with User group"}),(0,m.jsx)("li",{children:"Equipment and Document definition for Activity"}),(0,m.jsx)("li",{children:"Process items and Bill of Material"}),(0,m.jsx)("li",{children:"Project Activity Allocation Tracking"}),(0,m.jsx)("li",{children:"Project Activity Dependency (Critical Path)"}),(0,m.jsx)("li",{children:"Item Cost and Effort Tracking"}),(0,m.jsx)("li",{children:"Efficiency tracking at Activity"}),(0,m.jsx)("li",{children:"Integration with Inventory Allocation, Wastage and Release"})]})}),(0,m.jsx)(Mf,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,m.jsx)(zf,{children:(0,m.jsx)("img",{src:gf,alt:"Employee engagement"})}),(0,m.jsx)(If,{top:"10%",left:"80%"}),(0,m.jsx)(If,{bottom:"5%",right:"10%"})]}),(0,m.jsxs)(Rf,{bgColor:"#fae0f8",onClick:()=>t("/hrm.html"),children:[(0,m.jsx)(zf,{children:(0,m.jsx)("img",{src:Sf,alt:"Employee engagement"})}),(0,m.jsxs)(Pf,{children:[(0,m.jsx)(Of,{children:"HR & Payroll"}),(0,m.jsx)(Tf,{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"On-Boarding Process"}),(0,m.jsx)("li",{children:"Employee Data"}),(0,m.jsx)("li",{children:"Attendance"}),(0,m.jsx)("li",{children:"Leave Management"}),(0,m.jsx)("li",{children:"Claim Management"}),(0,m.jsx)("li",{children:"Payroll"}),(0,m.jsx)("li",{children:"Performance Management System"}),(0,m.jsx)("li",{children:"Exit Process"})]})}),(0,m.jsx)(Mf,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,m.jsx)(If,{top:"10%",left:"80%"}),(0,m.jsx)(If,{bottom:"5%",right:"10%"})]})]})]}),(0,m.jsxs)(Af,{style:{backgroundColor:"#b9f9f3"},children:[(0,m.jsx)(Cf,{style:{marginTop:"40px"},children:"Atomwalk Lab Management: Streamlining Labs, Unifying Excellence."}),(0,m.jsxs)(Ef,{children:[(0,m.jsxs)(Rf,{bgColor:"#e0f7fa",onClick:()=>t("/labequipmentmangement.html"),children:[(0,m.jsx)(zf,{children:(0,m.jsx)("img",{src:jf,alt:"Performance management"})}),(0,m.jsxs)(Pf,{children:[(0,m.jsx)(Of,{children:"Lab Equipment Management System"}),(0,m.jsx)(Tf,{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"Enhanced User Management"}),(0,m.jsx)("li",{children:"Simplified Equipment Management"}),(0,m.jsx)("li",{children:"Equipment Maintenance"}),(0,m.jsx)("li",{children:"Gain Insights with Report & Analytics"})]})}),(0,m.jsx)(Mf,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,m.jsx)(If,{top:"20%",left:"5%"}),(0,m.jsx)(If,{bottom:"10%",right:"70%"})]}),(0,m.jsxs)(Rf,{bgColor:"#f6eaff",onClick:()=>t("/labmanagement.html"),children:[(0,m.jsxs)(Pf,{children:[(0,m.jsx)(Of,{children:"Lab Management System"}),(0,m.jsx)(Tf,{children:(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"Lab User Management"}),(0,m.jsx)("li",{children:"Lab Process Template"}),(0,m.jsx)("li",{children:"Lab Experiment Project"}),(0,m.jsx)("li",{children:"Lab PI/Dashboard and Report"})]})}),(0,m.jsx)(Mf,{onClick:t=>{t.stopPropagation(),e()},children:"Request a Demo"})]}),(0,m.jsx)(zf,{children:(0,m.jsx)("img",{src:To,alt:"Performance management"})}),(0,m.jsx)(If,{top:"20%",left:"5%"}),(0,m.jsx)(If,{bottom:"10%",right:"70%"})]})]})]})]})},Lf=(ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${mp}),url(${hp});
  background-position: left center, right top;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-position: left top, right top;
    padding: 10px;
  }
`,ia.h1`
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
`,ia.div`
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
`,ia.div`
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
`,ia.img`
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
`,ia.p`
  color: #666;
  line-height: 1.6;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.95em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`,ia.ul`
  margin: 20px 0;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`,ia.li`
  color: #666;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`,ia.footer`
  margin-top: 40px;
  text-align: center;
  color: #999;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`,ia.div`
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
    background-image: url(${fp});
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
`,ia.div`
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
`,ia.div`
  padding: 20px;
  background-color: #f4f4f4;
`,ia.section`
  background: #fff;
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,ia.h1`
  font-size: 2em;
  color: #333;
  text-align: center;
`,ia.h2`
  font-size: 1.5em;
  color: #555;
  margin-bottom: 10px;
`,ia.p`
  font-size: 1em;
  color: #666;
  line-height: 1.6;
`,ia.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`,ia.li`
  font-size: 1em;
  color: #444;
  margin: 10px 0;
`,ia.div`
  background: #ffebcc;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin: 20px 0;
`,ia.button`
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
`,()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Ep,{title:"Empower Your Business with Atomwalk Office ERP",description:" Atomwalk Office is a cloud-based ERP solution, designed to transform the way startups, small, and medium-sized businesses operate. Built on cutting-edge technologies like AI and Blockchain, our platform seamlessly manages core business functions including manufacturing, purchasing, inventory, sales, customer service, accounting, and HR.",background:"#52ebff",data:!0}),(0,m.jsx)(Hp,{}),(0,m.jsx)(Df,{}),(0,m.jsx)(ef,{}),(0,m.jsx)(mf,{})]})),Ff=n.p+"static/media/contactus.d92ad20f9e7e87520f41.jpg",Nf=n.p+"static/media/content.b17e184e51f85d52f7ce.png",Bf=n.p+"static/media/support.742caae5101d98ae2c49.png",qf=n.p+"static/media/hand-shake.65bcad809362961ab098.png",Hf=n.p+"static/media/acquisition.c97c3452c9063b3e641e.png";rs().setAppElement("#root");const Wf={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px"},overlay:{backgroundColor:"rgba(0, 0, 0, .8)",zIndex:"32333"}},_f=ia.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  max-width: 500px;
  margin: auto;
`,Uf=ia.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`,Gf=ia.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`,Kf=ia.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`,Yf=ia.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`,Vf=ia.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`,Jf=ia.button`
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
`,Qf=e=>{let{isOpen:n,onRequestClose:r}=e;const[i,a]=(0,t.useState)(!1);return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(rs(),{isOpen:n,onRequestClose:r,style:Wf,children:(0,m.jsxs)(_f,{children:[(0,m.jsx)(Gf,{onClick:r,children:"\xd7"}),(0,m.jsx)(Uf,{children:"Contact Support"}),(0,m.jsxs)(Kf,{children:[(0,m.jsx)(Yf,{type:"text",placeholder:"Enter your name",required:!0}),(0,m.jsx)(Yf,{type:"email",placeholder:"Enter your email",required:!0}),(0,m.jsx)(Vf,{placeholder:"Describe your issue or question",rows:"4",required:!0}),(0,m.jsx)(Jf,{type:"submit",children:"Submit"})]})]})})})},Zf=ia.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 120px 20px;
  background-color:#ddf5ff;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Xf=ia.div`
  background-color: ${e=>e.bgColor||"#f0f0f0"};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
`,$f=ia.div`
  background-color: ${e=>e.bgColor||"#f0f0f0"};
  border-radius: 10px;
  padding: 10px;
  display: inline-flex;
  margin-bottom: 15px;
  width: 10%;
`,em=ia.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  margin-bottom: 10px;
`,tm=ia.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`,nm=ia.button`
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
`,rm=()=>{const[e,n]=(0,t.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(Zf,{children:[(0,m.jsxs)(Xf,{bgColor:"#f6eaff",children:[(0,m.jsx)($f,{bgColor:"#ffe9c0",children:(0,m.jsx)("img",{src:Nf,alt:"Sales"})}),(0,m.jsx)(em,{children:"Sales"}),(0,m.jsx)(tm,{children:"Explore how Atomwalk can benefit your business."}),(0,m.jsx)(nm,{onClick:()=>{window.location.href="/seals.html"},children:"Talk To Us"})]}),(0,m.jsxs)(Xf,{bgColor:"#ffeadf",children:[(0,m.jsx)($f,{bgColor:"#dff2e1",children:(0,m.jsx)("img",{src:Bf,alt:"Support"})}),(0,m.jsx)(em,{children:"Support"}),(0,m.jsx)(tm,{children:"If you are our customer and need help with the Atomwalk application. We are here for you."}),(0,m.jsx)(nm,{onClick:()=>{n(!0)},children:"Get Help"})]}),(0,m.jsxs)(Xf,{bgColor:"#e1fff6",children:[(0,m.jsx)($f,{bgColor:"#c6f0ff",children:(0,m.jsx)("img",{src:qf,alt:"Partnerships"})}),(0,m.jsx)(em,{children:"Partnerships"}),(0,m.jsx)(tm,{children:"Interested in partnering with us? Let us know."}),(0,m.jsx)(nm,{children:"Get In Touch"})]}),(0,m.jsxs)(Xf,{bgColor:"#edf5ff",children:[(0,m.jsx)($f,{bgColor:"#f1d0ff",children:(0,m.jsx)("img",{src:Hf,alt:"Media"})}),(0,m.jsx)(em,{children:"Media"}),(0,m.jsx)(tm,{children:"Any PR related questions? Always ready to talk."}),(0,m.jsx)(nm,{onClick:()=>{window.location.href="/contactUs.html"},children:"Contact Us"})]})]}),(0,m.jsx)(Qf,{isOpen:e,onRequestClose:()=>{n(!1)}})]})},im=n.p+"static/media/phone-call.e7db31039cbc0dc30592.png",am=n.p+"static/media/email2.9082177d266cee25a57b.png",om=n.p+"static/media/location.39261a4c95eecf324099.png",sm=ia.section`
  padding: 100px 20px;
  background-color:rgb(225 255 246);
  text-align: center;
`,lm=ia.div`
  max-width: 1200px;
  margin: 0 auto;
`,cm=ia.h2`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,dm=ia.p`
  color: #666;
  margin-top: 10px;
`,um=ia.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 70px;
`,pm=ia.div`
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
`,fm=ia.img`
  max-width: 80px;
  margin-bottom: 20px;
`,mm=ia.h3`
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`,hm=ia.p`
  color: #666;
`,gm=()=>(0,m.jsx)(sm,{children:(0,m.jsxs)(lm,{children:[(0,m.jsx)(cm,{children:"Reach Our Team"}),(0,m.jsx)(dm,{children:"We love questions and feedback - and we're always happy to help! Here are some ways to contact us."}),(0,m.jsxs)(um,{children:[(0,m.jsxs)(pm,{style:{backgroundColor:"rgb(181 255 206)"},children:[(0,m.jsx)(fm,{src:im,alt:"Automated Processes"}),(0,m.jsx)(mm,{children:"Call Us"}),(0,m.jsx)(hm,{children:"Call us to discover how our products can work best for you."}),(0,m.jsx)(hm,{children:"Phone: +91-7259555003"})]}),(0,m.jsxs)(pm,{style:{backgroundColor:"rgb(188 216 255)"},children:[(0,m.jsx)(fm,{src:am,alt:"Centralized Data"}),(0,m.jsx)(mm,{children:"Mail Us"}),(0,m.jsx)(hm,{children:"We are waiting to help you and your team - so don't hesitate to reach out!"}),(0,m.jsx)(hm,{children:"Email: info@atomwalk.com"})]}),(0,m.jsxs)(pm,{style:{backgroundColor:"rgb(255 211 168)"},children:[(0,m.jsx)(fm,{src:om,alt:"Scalability"}),(0,m.jsx)(mm,{children:"Our Main Office"}),(0,m.jsx)(hm,{children:"Visit our main office, where our team is always ready to welcome you and assist with any inquiries."}),(0,m.jsx)(hm,{children:"Bengaluru, Marathahalli, 560037"})]})]})]})}),xm=ia.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-image: url(${mp});
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
`,bm=ia.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;

  @media(min-width: 768px) {
    font-size: 2.5em;
    text-align: left;
  }
`,ym=ia.div`
  flex: 1;
  margin-bottom: 30px;
  text-align: center;

  @media(min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`,vm=ia.div`
  margin: 20px 0;
`,wm=ia.form`
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
`,km=ia.h2`
  margin-bottom: 20px;
  font-size: 1.5em;
  text-align: center;
`,Sm=ia.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  /* background-color: #f6eaff; */
  border: 1px solid #333;
  /* border: none; */
  border-radius: 5px;
  color: #333;
  font-size: 1em;
`,jm=ia.textarea`
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
`,Am=ia.button`
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
`,Cm=(ia.div`
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
    background-image: url(${Ff});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.5; /* Apply opacity to the background image only */
    z-index: 1;
  }
`,ia.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3em;
  height: 100%;
  z-index: 2; /* Ensure the text is above the background */
  font-weight: 500;
`,ia.p`
@media (min-width:768px) {
  width: 440px;
}
`),Em=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Ep,{title:"Let's connect",description:"We would love to hear from you. How can we help?",background:"#ffc24b"}),(0,m.jsx)(gm,{}),(0,m.jsx)(rm,{}),(0,m.jsxs)(xm,{children:[(0,m.jsxs)(ym,{children:[(0,m.jsx)(bm,{children:"Get in Touch with Atomwalk \ud83d\udc4b"}),(0,m.jsx)(Cm,{children:"Feel free to connect with us for any of your needs regarding our services. Our support team is ready to solve any of your issues. Just push a text to us and we will get back to you immediately."}),(0,m.jsxs)(vm,{children:[(0,m.jsx)("p",{children:(0,m.jsx)("strong",{children:"India"})}),(0,m.jsx)("p",{children:"Bengaluru, Marathahalli, 560037"}),(0,m.jsx)("p",{children:"Email: info@atomwalk.com"}),(0,m.jsx)("p",{children:"Phone: +91-7259555003"})]})]}),(0,m.jsxs)(wm,{children:[(0,m.jsx)(km,{children:"Drop Us a Message"}),(0,m.jsx)(Sm,{type:"text",placeholder:"Name*",required:!0}),(0,m.jsx)(Sm,{type:"text",placeholder:"+91 Phone No*",required:!0}),(0,m.jsx)(Sm,{type:"email",placeholder:"Email*",required:!0}),(0,m.jsx)(Sm,{type:"text",placeholder:"Which Business do you have ?*",required:!0}),(0,m.jsx)(Sm,{type:"text",placeholder:"Location*",required:!0}),(0,m.jsx)(jm,{placeholder:"Message*",required:!0}),(0,m.jsx)(Am,{type:"submit",children:"Connect With Atomwalk Today"})]})]})]}),Rm=n.p+"static/media/about-us-bg.004c9dbfb932e1e45fde.png",Pm=ia.div`
    background-image: url(${Rm});
    background-position: center;
    background-repeat: no-repeat;
    height: 1850px;
    padding-top: 74px;
    background-size: cover;

    @media screen and (max-width: 767px) {
        height: 1450px;
    }

`,Om=ia.div`
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

`;ia.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
`;function Tm(){return(0,m.jsx)("div",{children:(0,m.jsx)(Pm,{children:(0,m.jsxs)(Om,{children:[(0,m.jsx)(cd,{text:"About us",color:"#000",fontSize:"48px",fontWeight:"900",letterSpacing:"2.4px",textAlign:"left"}),(0,m.jsx)(cd,{text:"Empowering Small Businesses: Atomwalk Office is dedicated to empowering small business owners by providing a comprehensive Virtual Desktop Interface (VDI) that enhances operational efficiency and streamlines business processes.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"25px"}),(0,m.jsx)(cd,{text:"Innovative Financial Solutions: Our platform offers easy financing options and seamless connectivity with banks through blockchain technology, ensuring secure and efficient financial transactions for your business.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,m.jsx)(cd,{text:"Operational Excellence: With Atomwalk Office, businesses can monitor and track their operational efficiency in real-time, enabling better decision-making and improved productivity.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"}),(0,m.jsx)(cd,{text:"Cutting-Edge Technology: We leverage the latest advancements in technology, including cloud services and blockchain, to provide a robust and secure environment for your business operations.",color:"#000",fontSize:"16px",fontWeight:"400",letterSpacing:"0.8px",marginTop:"30px"})]})})})}const Mm=n.p+"static/media/TeamImg.c0d26972b4149da836b5.png",zm=ia.div`
  background-color: #f5e9fd; // Light purple background
  padding: 40px 20px;
`,Im=ia.div`
  text-align: center;
  margin-bottom: 50px;
`,Dm=ia.h1`
  font-size: 2rem;
  color: #6a1b9a; // Purple color
  margin-bottom: 10px;
`,Lm=ia.p`
  font-size: 1.25rem;
  color: #333333;
  max-width: 600px;
  margin: 0 auto;
`,Fm=ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,Nm=ia.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media(min-width: 768px) {
    margin-bottom: 0;
  }
`,Bm=ia.img`
  max-width: 50%;
  height: auto;
  border-radius: 15px;
`,qm=ia.div`
  text-align: left;
  max-width: 500px;
`,Hm=ia.h2`
  font-size: 1.75rem;
  color: #333333;
  margin-bottom: 20px;
`,Wm=ia.div`
  margin-bottom: 20px;
`,_m=ia.h3`
  font-size: 1.25rem;
  color: #6a1b9a; // Purple color
  margin-bottom: 5px;
`,Um=ia.p`
  font-size: 1rem;
  color: #555555;
`,Gm=()=>(0,m.jsxs)(zm,{children:[(0,m.jsxs)(Im,{children:[(0,m.jsx)(Dm,{children:"Our Mission"}),(0,m.jsx)(Lm,{children:"Empower a new generation of entrepreneurs to pursue their visions and drive positive change for themselves, their communities, and the world."})]}),(0,m.jsxs)(Fm,{children:[(0,m.jsx)(Nm,{children:(0,m.jsx)(Bm,{src:Mm,alt:"Dedicated Team of Innovators"})}),(0,m.jsxs)(qm,{children:[(0,m.jsx)(Hm,{children:"Our Approach"}),(0,m.jsxs)(Wm,{children:[(0,m.jsx)(_m,{children:"Inspire."}),(0,m.jsx)(Um,{children:"We connect deeply with our customers\u2019 visions and use creativity, technology, and dedication to bring their ideas to life."})]}),(0,m.jsxs)(Wm,{children:[(0,m.jsx)(_m,{children:"Take Bold Steps."}),(0,m.jsx)(Um,{children:"We embrace courage in all we do, pushing boundaries and meeting challenges head-on with confidence."})]}),(0,m.jsxs)(Wm,{children:[(0,m.jsx)(_m,{children:"Think Like Owners."}),(0,m.jsx)(Um,{children:"We treat every project as our own, constantly refining, innovating, and creating new solutions that drive progress."})]})]})]})]}),Km=n.p+"static/media/people.4f89400e19d25d36ee95.png",Ym=n.p+"static/media/handshake.fec586e9ced4464da168.png",Vm=n.p+"static/media/startup.be4fd0c3b78108011c51.png",Jm=ia.div`
  background-color: #fff7e6; // Light cream background
  padding: 100px 20px;
`,Qm=ia.h2`
  text-align: center;
  font-size: 2rem;
  color: #333333;
  margin-bottom: 100px;
`,Zm=ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,Xm=ia.div`
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
`,$m=ia.div`
  background-color: ${e=>{let{color:t}=e;return t||"#ccc"}};
  border-radius: 8px;
  padding: 10px;
  display: inline-block;
  margin-right: 15px;
  width: 50px;
`,eh=ia.p`
  color: #555555;
  font-size: 1rem;
  margin: 0;
`,th=()=>(0,m.jsxs)(Jm,{children:[(0,m.jsx)(Qm,{children:"Our Beliefs"}),(0,m.jsxs)(Zm,{children:[(0,m.jsxs)(Xm,{children:[(0,m.jsx)($m,{color:"#8ed1b0",children:(0,m.jsx)("img",{src:Km,alt:"People Icon"})}),(0,m.jsx)(eh,{children:"Business is ultimately about valuing people above all else."})]}),(0,m.jsxs)(Xm,{children:[(0,m.jsx)($m,{color:"#db70d1",children:(0,m.jsx)("img",{src:Ym,alt:"Hand Icon"})}),(0,m.jsx)(eh,{children:"We have the power to make a meaningful difference in the world."})]}),(0,m.jsxs)(Xm,{children:[(0,m.jsx)($m,{color:"#fbbd3c",children:(0,m.jsx)("img",{src:Vm,alt:"Rocket Icon"})}),(0,m.jsx)(eh,{children:"Innovation should be a core part of our identity, not just an option."})]}),(0,m.jsxs)(Xm,{children:[(0,m.jsx)($m,{style:{width:"65px"},color:"#6cd5ff",children:(0,m.jsx)("img",{src:qf,alt:"Handshake Icon"})}),(0,m.jsx)(eh,{children:"Building connections and partnerships helps us break limits and aim higher."})]})]})]}),nh=n.p+"static/media/linkedin.6892b3ae328c7a1e055f.png";const rh=n.p+"static/media/Sk.1620eca3feffff84fbec571e63f18988.svg";const ih=n.p+"static/media/sk2.7c9fc7c4395d941a8f1bcca5c65f2b7c.svg",ah=ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,oh=ia.div`
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
`,sh=ia.div`
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
`,lh=ia.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`,ch=ia.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`,dh=ia.div`
  perspective: 1000px;
  width: 100%;
  max-width: 400px;
  height: 420px;
  margin: 20px;
  position: relative;

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
`,uh=ia.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`,ph=ia.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,fh=ia(ph)`
  background-color: #f8f8f8;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,mh=ia.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
  border: 2px solid #ddd;
`,hh=ia.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`,gh=ia.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #555;
`,xh=ia.p`
  font-size: 1rem;
  color: #777;
  line-height: 1.4;
`,bh=ia.a`
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
`,yh=()=>(0,m.jsxs)(ah,{children:[(0,m.jsxs)(oh,{bgColor:"#fff8f0",children:[(0,m.jsx)(lh,{children:"Leadership"}),(0,m.jsxs)(ch,{children:[(0,m.jsx)(dh,{children:(0,m.jsxs)(uh,{className:"flip-card-inner",children:[(0,m.jsxs)(ph,{children:[(0,m.jsx)(mh,{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADIAMgDASIAAhEBAxEB/8QAHQAAAAcBAQEAAAAAAAAAAAAAAAMEBQYHCAIBCf/EAD0QAAECBAQEBAQEBAcAAwEAAAECAwAEBREGEiExBxNBUSJhcYEIFDKRI0KhsRVSwdEJFjNicuHwJENTov/EABsBAAEFAQEAAAAAAAAAAAAAAAUAAQIDBAYH/8QAKhEAAgIBBAEDBAEFAAAAAAAAAAECEQMEEiExQQUTIjJRYXEUIzOBocH/2gAMAwEAAhEDEQA/AMtCfzE3N7i+8cCcLmg1hhM2pI66RyxOKyXF9+0PZRRI25oJJsNPWOjPX3O2xiPpnVKVsQLXtHXzah3taE2SSHwz4ypB3jkVABQF72hiM2o29e8BczZVu3Q9YimPVcj380k21Fx2gJqAKxc3tDCmbtYb+kFqmlXJJMSFyShU+nTUEX6QYmohI0PveIkqdNxqbX27R0uolAteH75I1fZIJupFSNOkN7NSJqaEj+Ua+8N6ObMqFvCD1P8AaDW5duXd5uZRc28WgiuTT4JxXJqbB7hxLw/lJ5Crvy55Dve46/aG2tU3+KUqYld1LScg7KGoiosIcT65hJmYk5JTPyswQXGVpCgogaEf9RMKHxVZnHwiel+SSfra2B9IEexKEm+0EvfjJJPsvz4dnmcVYNalXUn52mLUw6P9p+j+o9otxGG2mVfQAk9YzZwWxizhjie7KtTCEUytNgZgbgL3T6a3HvGjncSKLbyOYPw1a3G0czq8c8eVpPg34JR2V5RX3F7B7clOSlYaTugsOkdeqTFcqd0ASbDsYt/FdZFZo0xKOPtG4uAAL3G0VCWRe1tb6x0fpuSU8W2XaA+uinPdHyVtxVoofbMy2LqPj03uNFfpY+0NHCDE5oFfbQ4v8B3wLHkdj7G0WZiCmifprqAAVo8aATuR09xp7xQ86yuiV0t7IKsyCD+U7QUfZmiriaQxi2qa5IQ3nUVGwSLkw2yOB5ybUHHUplkW2XufaFeBayqt0lmYKwXGk8pRvrcdfeJC4+u5JJJ9YSUfJmlu8C48OaLRqXJzr0w1MOOozrQ4pIyHtlveGaUmZNVVKnWTNSygoJS2rLl6A/8AUKlz8y6nKp0lNrWIG0JGXHZMqDCuXmBScqRqDuI1+7BL4ozbMj5k7PKi/MFpRLvOTawKug7CBCVxTgSpJJKT0tAiHu2Wwx7VTM6fwuVukhlI73ED+FyirBTaQLa2EcT8yZeaWgE9d4JTUQlWb/14SpqzXymHfw6WB/0xod47TTZRdwWk+0I/nxcqJgInxa+Yw1UP/kVro0mjUIB/9tBH8JlM2XJe380ByfGW4OvnCczyS5ckf0hUJu+BSqjSRWCGxYRwqjSJuOUL26QSidCWxlVe8D5xKxfPfTpD0kPbfYb/AAGSyKPLGb9oZ59mQUhz5VoLWg5TrpeFVRqJQza5F9rbkwbSaE7UEystLJvOvnMbjYRCUtqtlkIObpDMy6ZVIcyFKeyReFiC28MzjiRmtZRN4s6X4PVBcunwpuRroYTq+HyqTZshxLQJ1uNIwvWYV3IKr0zVPqBWs1UGJNSGy2Fnoroof0MJXKq409zkJJA+q43i9qN8L4aQlc5NOPHskWtD8OA1MlmlI+Xz3HiUrWKH6lgXFmuHompauSoo6l4ockZ2UmUXSoLSpIHQg6GNc0nG/wDH6KxMJIKn0AqCDsbW1+0UdiLhIKRTluSJPMaOcI7jtEeoHEmbwwlBbu5J3IcZUdUnrEZxhrI7odox5tPl0bSkuzQy3AQSpRzJ6d4SBlteY28UR+i4ulcRyiJiWWkpUkFWux7HsYdJefSHgnbpC062OjBme+HDFLsikKNk6bxSPFjD5ps+mZQglvQj/iT/AEN/vF7cxS0+EXHpET4jUb+MUF3TxNi+g6df7+0FJJIxQdOmQvg3iX5SqiTdI5M0Mlz0V0/tF2rYKVa2jKFKmHKXOgfQtte40IIMamwvVRiKiSs4FJUVoGYD8qhuIb9EclxdhiwE6ajzhbhp+jy1XbcrsrNzdPSkhTUm6lpZPTUgwcqUzA/+EIZmXU2g2GkPRCLRJMW1vAsxRVsUKgVOVqBULTE5OpWlI6+EJF/vAiEuIKTr7wInY9t9mX8bAyVTVrZJvoIjqpy40v8AeJziWSan5n8S/wDNDIcPSyddbw0H8TVKrGD5gixJNrx2mZIt4lE2h/FAl7HtfTtHRoMuLgi/W/lFlkSNqm7Hr11vvBQmlZtIkaqDLKVcZgP2jxWHJUG9zc+cLkalfJHjMrBCQbpjlyfUyCQDmGwiQmhS9zZR3vDbiGlNSdNLzd81wCewiKZIapuoOTTIQdV9I0RwB4dulpurz6CVuDK1mGgHeKZ4d4dYxBWZMOm7RcACO8bUw62iUlZZtKQ2ltISANABAX1HO4R9uPk6j0fTRyT96Xgf5OjMoSlJRfpe0L1UhlsAhIvBCKxIygHPmkNjpdUOMrU5KdSotOpXYdI5l4p1dHaLPjumwv5doIAygecNk9LpdzWFhaF9Qq0rKIKleIJFz5xBp3ivRUzKpe5Q6k2KYlHTzn0iGTV4cf1MTVaSDjT6FJsLGMpcRKWuiVieWlN5dayopHnGoprFFPniQ2+Bm7xRXHGScp7iZkDOw6Mye2Ybj3EG9A5Y8m2XFgD1XbqMO/G7oZOB0+pypVGWC7tloOJSTsesW8JohV72PQnvFGfD+0tzG044hJ5SZVVx0FyNIvJ2T5bytdL3F4J5F82calxyS+nvGalG3QdCP1jyfaQqXWlVlBQykWhDhR4JW9LLV4frTf8AWHqrspbk3F503CSdovjyjHJbWZkxrTBS6wp1CCAs2PnbY+4tFlcDsTBEy/SnF/hujmNC/wCcbj3H7Qg4s4cLlLanUC6mrIXYfY/fT3iu8MVp6kzsvNMmzrKwoe3SLqaJNqcTXxdSUW6iEUylKgekKKPMM1qkSs6wpPLmGwtIA28o6ekrJOoP3h+zInXgYX2bqIAIgQ90t5im1OXmZuRRUpZtV1yq3FIS4OxKdR7QIf8AY1WZTqjocZacG5TlJ9IZkToyi4BPnDs8C9TUqTqoa3vEMfnOQ+6m9gg2iGOgjNU7H4TmXL4uto9+dy65v1iPpnFFQN7iOlzxjTwVD2idukZSLmPVTdk2Ise/aGFicCUjUm/aD1zIKdzfziLYqY5iZKrm4ENlddU/IONgXuL99oJRN9Dt1hbRWm6rWpKTeXlafdS2o9dYi3SbJKLbSRLfh2pCpqv81wWalmy4L9zoIvFdbqVSnXm5YCXlWzl5y9tOsRTgvhw0Wq1uTdbKXG3AyQeg7RaFawM9U2AzmUmW3KGfBm9SI5vNkSz3I7bR6WctMopfsgtYlJJpAmJqsvPOJGYgqCU2v+14mOAa0jnNtpupDnhClQZMYYbnabL0xynJdYl0lLSV3OUXv031HWFdDwwikTiXXUBC0apSBa5PUxTqM+OeOk+TZp9Jkjl+S4OsdVNUk8iUSoZFJKisdB2iHmjNSdGXXESLE6C4UBF05yqxOx11ta9t4sTF9MZecaeIAIF8w3EJpbDM2thDss6Mitbi0VafUQhH5I06nRznL4MrGmzkriF0y05SHaW7lzJVktv00jniThlFRwLMMK/EWwAtCgNdItuTwqiXeU7MnM6De6jeGjGdNZXJutJtlcbKTbzEL+TF5FtGekccTUu2jMfA1CaTiGpMqSbPpCUK7kaxcs63lQFWIsbGIyxgVeC8BJrM0OXOiZS+B/szZbfY3iWjLOSoU34kOICkn1EFnkWSW6PRxWfSz09Rl2+Rvkp5UpNtuD8pvfyia1BTc1T2ltkLQ8oWIHQaxXUwpTSspuCDEgo9efmWJeSS0CJcE572320+8bMTt0CsqqO5j+wujhmdYrFJVVWnWihtCZkshCj+Y2Bv6Rlioyq6TWpiXWgtlDhGW22saZmcx1NrxT/FygcmdYqbabBwZFkfzD+4/aNso8WZcMlur7ll/DvidNQps5Q33QXZY85gK6oJ8QHof3i0p6XXySMiNeyoyJw+xSrCWKqfVSboacCHR0LatFD7a+0bMmmW3pJLzZCm3EhaVDYgi4MRjyPOO2X4Im6yUq1Fh2zXgQueb1sO8CHoqU66Mi0wF2XW0VHtvaIlU6M+7UHHUFOVWvbWJfTFBqeeZO4JAhtqS/l3ljfxHW0U4+HQUlwiMt0eabIzWNj0MGOUqbI0APWHUTgKja23WDEzid0n3jTRRuGJmlTaARYZhClNPeULBIJ7CHNU6gAkn/uPBNpFze4PaFt5I2/sNaqY8nUoue0OGHKW8ivUxZNkpmW1EjcAKEGOT17dfXrHslURJTLT9/8ATUlWnlrEZr4suxy+SZrNuRlZDEkw+zfmTBS46TsTbeLHlKq2W0osNtYrNKguVp80ASXmUKzeoBA/WJFT5ha1pJNrdo4bLBuXJ6pp8katdE9fmZWTleYgJ5qhvtaKpq/FGnUetMSvIROTSnPxF81I08gd/SIVxPxhW1VsU5p5UnJKIRzNsw9YJkcCUCoJC1pn6pMJFy4ynwg+RjZj0kdqeTyY8uryZZuOFdFp8R+LFMk6Kw9JNyy3SsH8XQIHUnr5WhmwdxgpUxMuATTDC7BXKKvDfrDGzgSVbkwh+jTc+2lISgTSx4B5a39zEUxNw/k5tpaJGgOyj6iCFoWMqT94vWDEo0UznrI8/wCi+53EsnWZD5iWWlwHqg31iKVV9TzYzbbQycM8FzGGaO8H5hSkukL5ROiDaHyfRdsBOutgBrcxh9uOObUXaNkdRPJiW9UxJW6U7jDCs1SAn8Z1sloAdk3v9wIg/DKYXUaByFpPzMmosuJO4sY19wP4MT0k/MVOuSJlWy0EsNP/AFkk3KrdBGf8d4YZ4SfEpO01NmqLXR8wwOiSvceyrxdhz2pQSOc9Sqc1KL64IViOmrlplLgScrg+xhHh1madqzbLKglTyw0Lm2vnFuYxoMvNUh8tgc1g59O3WKqlW1MJS4k5VhWcHqDfSCumzqaT8nN6jHSLEPC/E6rnktAd1OCG7E/BKuVuhTMu45KpXlzJAUVHMNR09veLvwlXHsS4bkp1mU5mZAStRcSBmGh09YfqVKMvzSk1NSpJgJvnZAdUT2tpHSqCmuDnFkcHyj5juSbsnMvyzqcriFFCkqGxEa7+GBauImCFyUxU1Im6UsMKayAnl28B1+3tFW/FZgWRwhxGMzSVPrp9RR8wlbzYR+JfxpsCeuvvDP8ADfxDc4fcUpEqdS3IVO0nMFeqE5j4VH0NvvGbasc6CM2skNyNnjhXIt6uzMw6euwECJtMU6fcSLTyW7//AJsA/qTAi9xRkXJ8vawgU/FEwkDRSyQB5w24nbKGHHBobBX2h4xu0Wqy06BotIN7/eEVfY5tNCkgEKSU/cQKh4YckuKIMiduSQbk+cdtzl9L210hlzqCsvXbQQah/l9TtfWNl2ZKHMzult/SAmfzAC9rQzJmCtR3j1tas4Ftt4l0IelTthYG3eOUThFuvrDW46e/oRBbbq1KsD7Qw66Lw4X8Vqk9U5Chz81zJGxQzmAulVtBft0jR1FnEONJJOvUxgtqYcln23W1FDjagpKgdiNo0/w7x+rElEbm0H8dqzcw1vlV39DATW6dfXE6j0zWNf08jLdmaTJ1R7mPsoctYgKSDaHiSpqJJsKaskW+kCw/SIRS8VNqISpWnn0iWyFYQ8hH4gI7iAdZFwdLjyQ7sXLQtZsoaEblO0JX6e20kK1UDtCt+sSZZy5wCOl4jFVxUzL3Q34ldk7CJSU5NIslmilbFs1PCWSEG1r6xEsQY+ksE8mszbHzktIvIcMrmyl4hQIQD0vaErs/M1V4pRdAOpN4o3j1iJ1NalqEMwYZaDywDqpauvsI14dOss9kgTqtU8eJyRtCm/4jeDcRIbbfkZ+hTJ0KnQHWxfzGv3EV78UFX/zxhum4qk30vPU5xLqHmz9TKu3obGMFT7y2imxCRbYGNFcAMeIxVhKcwbU151tsrDJUblTZ3A/4kxsyaOGBrJjOWx6hzThPyW5RsZKrVAl5wLKi8zlVc7m1jDFNrEq+pr8vQ+UQThvUXqdNzuHJi/NlXjbyAOv9ImVcRdCHhvsYdQ2SpeSh2+y5/h8xOgzU7Q3HLhwc9kHuPqH21i6HmBa+0YxwdiZ3DmJafUGzbkOhSrH6k7KH2jY8pX5WoyzL7Db623UhSFclViDB/S5HtpgLVQUZ7l5Kl+JTAYxZw+mJlprmTtMPzLdhqUWstP219owzMJLJzoVlWhWZKtvePqxU8IzDku2l5UopqZ/Cy/MINwodddBbe8fOzjlw2c4Y4/qNGcU0tsK5zK2VhaS0rVOo7be0Tyxv5Iv08r+Ejcnw58REcT+FNIqDjgXPy6flJodQ4gWufUWMCMo/BrxVTgbH0zh6cU6qQrKcraGxmIfT9Nh5i4gQlNURUdlporLiFJENsOjXIooIMNa8sxRkgDxAX+0SfiBL5qfN66oOcX/92MQ6jLVMSTjY1IGkB4L42GeLIo7h9lx9akqIKiSRHK8ONKSSVHfaFVQmPlZlaTp0hOmo66nWCUaaMbbTCUYbl21iy1EWsY6/y+0NQs+/aDBPXFxsYCZ0BJGa0SasVnJw+1vmsnzjhOHWApNlkW8toOVOlWnuI9E3ktrcHoDCoazz/L7SiLqJMW/8PlJQmq1SWSq4caSoA+RP94qZqZWVadekaq+Czhn/AJ7mcXPCyZ6Wkmvlc23MLl7e4Tb3jLqYOeJqPZv0OWMM8ZT6FNSwgZZedAKATeFNLk3GkhGRzb8piz5+hqDa2nUZXE3SpJGoI7w006k8t6wSdO4jjXnklUuz0daeDdx6IsuhPTCf9FZV2hG/hh1IUVJsDrYCLiRT0BgKCOm4hmn6UVaKGpMMs8+aHeCP2IVSMNBuXzqTYW2tGTfiLp8zJcTpwusrYu20UBXVJQCk+94+hWDMEOYtqKJBF0y6QFzDttEI/udhGSvjfkZUccqvLNICWm2ZdpKQPpCWkgD2FoOel4pylLJI5r1nNCMVgj35MpVNPUmxI2MS/gLPLk+JFMINwvO2q/YpjqY4ZT0/ShNyK2ptFtUJVZST2IhXwTwvOjiGwt+XdYTKpU4orSQAdgIMZXFwaOXWOcWm12WfxDQcKcRadXGtGJwBD1u40P3FjFgulM7KWBuhabg+UMfE6jHEGEJkoQC/Kq57Z66b/peE3D+uisYZl1FV3WPwlJJ102P2gddwT+xdkTjJ/kOTJFteqvvpGpuAuJP4xg1Mg65mmacrl67lB1Sf3EZjnjy5gkaBWvpE34L4uVhzGUuh53JKzv8A8dwHbX6T9/3jZhnsd/cHZoXHg1M8gG97axm/4u8DCfokjiRhNnZM8iZKR/8AWo6E+iv3jRLswTe5tEfxZSJfE9Bn6TNpCpecZU0ryuND7Gx9oKPlNAzHLZJM+bYqExQapK1CUWWZqWcS624NwoG4MCHTGdBeo1WnqdMoyvyzimVjbUG1/feBGKgs47uSxcZS+dlYNiHWyB5xW2Gn8k6WyAQBtFr4lRzJNtRGoVFRyLPymI1NX05hHna8D8buJrfaGTH0mqTmkuIFkqsbxE0zuuqoszilTSKOHU621HeKkkZWYnVhLDanSegG0EcTTiUZI1KhwTNa/VeDkzNwbqEKpPB8y5YvrS0BuBqqHuVw3JSifGgvK/mcOn2i+ilpEebWt4+AEm+yReHBimTjiASjKD/ObQ/+FtOVtCG0f7RYQbKy/PmBc3A1Jh9rYqQnptJ5RUtw5l29hG2P8OWya3i9oqssyjK0i+ps5r+4jHQbJeUL2vt5iNTfATPKkuLbsuCUpmZBxBHexBiTikhm6Zrrinw5eeU7iGjs84K1nZRA1v1cSP3EU9LMtuTQWk2udQY2JTjy3Mp+lwRUnGHg/wApT2IKEzZYuuakkDRQ3K0Dv3Ec7rtAst5IdnXemeqPGlhy9eGVt8q2ykKJsB0MI6Zh6dxliJqm0trmOHxOOkeBpPVSj/68JKZ87iepy1KpqedNzBslJ2QOqj2A6xqLAuCZHA1CTLS45j6wFzM0oeJ5f9uwgfo9G80rlwkFvUNetLFKLuTG2hYSkcFUZumyg1PjfmFABTiuqif2HQR8l/iLxIMZcWcR1VteZt6ccDZv+UHKn9BH1N4z4sThHh5iisuLymXkXAg/71DKn9SI+QNfd58047e+Y3JMdpjgoQaR5/ObnLdLsbJKfmJAKMu6tsncJOhiWYc4jzlHSUuS7UwFHxKtZR94icui1yRv36x4lstuG6T5CISxRn9SHWSSXDLekeKVKnGyibQ7LBYKSLZhb2iJYBnEUfFM7JNuFdPfWrkuWsnun+0RRbBSkW0J84CFqbXe5SQYz/xIK6HlmlLiRedQQHWMySbpPaGpDymXkuIUQtJzJUNwR1itJPEVQlrpRMrCD+W9wYdpTFy27B9HMzblOhtFK07Q25NG58EYrGJcMSM7mBcU3ldF9QtOhv8AvDq9M+kZt4H8UKdIuTNLnJ5uUZd/EaL6soz7EX21/pF6IqTb6AtC0uIUNFJVcH3jdFuuQRkioyoz58TeCks1pmuMJs1PIyOkdHUDf3T+0CLV4o0dGKMFVGV2fbRz2FfyuJ1H31HvAiiad8BDFkuJUVTlkv091JBVlF4prEct8piTmtqGWyTodjbURY9QxpKzWGpmYlUOoSv8Jtah4SSbG3prFazAE08De5Kb3jHpcLacn0bczlidPs7q1bNWkxKuy6VsjQ3Op9YaWWUSqAltsNo6BAtaHUSYyZQAR3j1MvkuCAO0FI41Hgyym5cjfmNrq69Y4KSoC4Fx+sK1t7kaEGC1JygKy3HnFyS8EG76CFA2uQddbQ5SLIbRc6KVqbmE0ozz3LnRKe+msLiddLEDtEaFyecmy82um1heNEfBROtynHSjNK+qZZfZB8yi4/aM9c0Aa6adYtv4XaoKXx2wc8pWXNPIbJ/5Aj+sSdURs+q09PStFk3J6ceblZSVbU8884bJbQBckntvFE1T4m5mt4ukaZSpZDFHmkB1maK7LW3r41X0SLAn06xZ2NJBrHdMdphCZijvNnnBJul8dRcbp3jMmKuG05wqxZRCwwio0YNOycqZj6VJKVZGXCdtym/WMk7jDcuzVCpSSLQodckqVVHqoilU2VnKg2S67LzKlZk3F1JBIAHVRHlEjwXxCnJyvtUx5cu9JzzS1NuS8xzEJcTrYX11AMQSnh4sU1ycobTTbcqtLiUIKFNq3DSLlVwq1jf/AKhHhvCL+K8bUOeorj1MlcOutuvp5hWhd05uQLgHrYg7DYaxgw5ZSlsQW1OGCi5S7EPx24k/hPCdinJXlXUZ1OYd0oBV+9vtHzim0KdCrXzdI27/AIhdabdmsKU9pQU1yXZgp6glWXX7GMTqGZZOnqINqtqQCfYjYatfMMhHeOXGitOZCSSnreFxstJsDnt944lRlB033vpCaGsQKUVZdQT0v0jzLdVjfzvtHU0kNPZNNdbDpBrbdyBqep9IjQrPW2ivSw3g4Spt7aQoaaAF7awpbYKxc9el4mlwR5Y2pZy7bxMsBY/qmEJ1Blppa5POOZLqUShQ66dIjczllGFuEagaesCQZLbCCr6jqo23JhVXYzSapo2BNVZqo0ZTzZu260Fp9CLwIr/A1XVNYIlAtdylKmrX6A6fpAgfP6uSmFK0Zvkp53+EtyefM0lRXlA0vboeog5x8tLlXAbJJyH3EJnHUFxIayqQnwJKdiB1gx5Idp6k3soeIfvF2CKWNBTVNPLKx1Wq43v5mOBZSb6ecJGpjnSragRdQBMKWUlCO5O942NpmJfk5UnMD19oSzVmkFZGg1Jhdm8Ou5hPMNZswtoYj+h7BJPMuMfhKCwNCRBtwBsQOljDI9T1NOhyVWpp5XQbH1h3ZCygFywXYAkbXhDNnYBvcnXsIkWBOWrFlGQ+ohhc40hwpUQQlSwDYjbQxHsxz5eghxoTvy1UlXVbJdQr7KBhPgY+q/w1TC0YCVh6dXnn8Ozj1LczG6i2DdpXuhQ+0TjFmFJeuUSYk5ixQFEoJ3QQNCD0IPWK8w64MK8XpNxKssniymJXY7fNMAG/qptX6Q9ca8e0+kSiqW7PNyxWguzASsh1QtdCE22zEa+WnWMs/jyaIK2ldFJ1dD8hJzUvLqbWGZJMuHm5sh5SdbHKkAJ1/Mew7xd/C2mCnYLpbAJK3WkzD7qzmUpShc3PXoIz9WcaSDdFnFLdlA04y4JdlcspDilrCPCtdrBIy2vfW+2kWDhni/TcEcBJmsvLampqSCZWVl2HAtTzyhZppNv92noIwaaL9x2uwlq5qUFtlZlH45a61VeMTsmwtK26bKtS5y9FaqUP/wChGblXWLaaabWh8xpVqlV69UJurKUqqPTC1zNzchwqOYex09oYk301I1g0/sB7PEgqum97aXhsmhOKmFobcSy0RosDxGHUgZbG9/LaCHQlaCFA3J3huxK6EUvTUS6iu6lrO6lG5MODDdljTSCUu5FJbVqb/eFaRrdIP36Q6QzDEBNzrfzhQlJQO994SBzMQNh6wqbsUb373h18Rm7Ek8vnTDEuDcE5z6DpCtZOlje3QQjlVB2sPKABDaQkQtzKuBbwnvDd8iRZfDtwOUYam7bihvAhBw0mAEzbJ2BSrLAgXlT3uycV+ClMPpHyaFAlWZRJvD/KoSStH6QkNHcobUtKrSUOISlSgTfUi/8AWFbKcjtwSNY3YvlFNFk+ZMRyJ5a3WNPw1EW203h4QFZNBb1hjB5deeT+V1IUL+WkPgBKbg/eLuLKrXk9ulKjex07QTMLDYAIzEnTtBi75dRrCeabUWQQDm3BtD0RA2nxWUfFveDgQo2ve43IghtzO2FDYja0GBJ9D2hkI6uRe52G8HyailVx/aCCTcEC99oMlgCsHMd7QqsT4Pp5j6cda4IYIxxKNqfmqD8jVCEfUprIlLo90mM9zvH3F2L8TTk8nhv/ABFiYe5jTrrbijl/KNE2NhaNBYRqLVd+FnB8i80JtFRkG5N1kPhpTiUkgpBPUlKRbteK44G1iZaxazhmtyoE7h5QZanVPKsthV0pyg/VckC9rWSDuIGZcyitlWEsGm9yO9uiusZ8bjJybUvibhsuSbN7utNKQq/lmSn94kHAKf4e45xRNVWRZngvDsi9VTJzmjQUlNkrt1UnW2sWpiVhmRolZfmm6pLpecbExznA85crs640PFayVZbgdBaK+4izlP4c4Em5+TkJWSqNRoD7L74YDUw4VqbSAqwA/Mq47xVizReRRUaLc2keOG5SsxFiOeM9WJuYPiU+6pwnzJJP7wiQfBf6VemsezTmdxSgm9zcCOUgncwY7YJboC1eK4BVffzghxzVSSNE72g5wHMRtCJ5eZ5LKR9X1ekKxKzuRa5rpeOo/KLwvV4Sd7nz0Ecss5EpSE6bAwJgWIFttB3h1yKuTxpOfU6g6Wg+5QjxaAaxy2gBu99ITVaY+VpzqjqcpsRE0yLo8w4ovB97otxWh+whwcIDhzaW2hLh+WErSmh+e1zeD33Rn23Oloh+REv4bOgVxaQr62jpfsRAhswQ8pqusEaEAjQQIF509/BdF0hsx+gJxJPIRfK26Ei/kAIbGklZF9LfaHLHKs9eqSgSv8dQKveG5CSWU9ABG7D9CS+wpvliKoN3qMm4LXN0k9/eHpu5QNrAbwzz5OeXVoAFD1EPLVsoA7RclyVPo5IAUAB01jhRGQix87wYVBKyDv3gpXU6Afe8J8MQiaIZfU0R5pEKkKuSNyPtCObbUlSXRuNT6dYVNqCkAjWEI6NiNxe/eO2l5Vpt7wSVkqI0t6R0hWp1vba0NdCZtjgrxBlK3wuwhR3TJLRSm32JgzlyWVF4LCkgA5jkFhY6EiJPxMQ/K1xzGuGnJNE9S2y2oiazGosFCQEZQbjKAVdNdoz7wA4p4PwhQZqm4hpc7NzJmC6l+VOmUgaHxDUWMXQnjJwon2wA1Vpa6bla2yQk9RoTAzJibk5JMIQ1bjBQdUiZ4bxLSMQYCNSpompaWemA3y5FfNmGPCo2UPEUZloToOpHQmKV+MOsqkGqbREzDqUrZRMOsqSAFrJJKie4ygWGgvDfjCuYTwNOLr2BsThaFfiTVNfK21K80HKLK8oqLi5jSRxpPy01TahMTzBautMwCFNuE6pNyegGohYsDjkUv+FuTV747WuStnCSo2JvvBzagACdAe8FX11N+0dLJF8o9oKIFcnj6whtSio2GsEyLGpfXfmL38oKePzz4YTcJR4l279BDkhhKEWtmt3MNVCujovBNgogf8d4SPzKAb3zAdAIUFIJ2FgITuqCb6Dz1iXaoW4DcynkgeIE23EN2I5m0sy0knxOBJPvCkLAWADe2toZK44ZiryLKSbFdyBvaGpDdMl8mT8mjcaA3jkgq8/WD0rSJZCRcWFtIRlw7WyxPwKiWcOJFyqYrkpZsEuOryJSOt4EOnAOcEtxZwzzNUOTaWiD/uun+sCBubHulY6ZDMWoUmr1AOOc5fOXdwAJzG+9hCOWF2E6+Ej9YECNeL+2mSlxJiOeRy1tHU+MCHdnRvU2gQIsIrk8KQFG5tAUA4nS4IgQIcj0gl1Ge6STCJg8lSkG5CdR6QIEMSjyg5JBO/oINbsk+GBAiJL8GoPg4l5GcGKGp5lM0xLtfMrl35dLrahl0NyNFApOnUGNFyOC8MVPBzkyiWozy35nltVCoSCEpQnLmVlSkAG1lgH97QIEA88pLI0mdDpoxlg3Nc2RPEXAvBdSqNNll0WmtOzSG1TTcu862VlYV/pC9gPw1HXe/SMbcZMM0bCHEKu0agsrYpknMllCHHM6swAza+t4ECL9JknKdNmfW4oRhFxVWQEEXta0ePzAaYVexOwA6mBAgswK1RxSpYtZybqUrU3HWFh5l7aDTS8CBDjSEygsDVy9+gEJngoA+JR94ECJdDBKFpbzLI1tbeI5Mz6RiJvMTdIsOnWBAiL6ET4C7KTtpBKz38XSBAhxo9jxgmqLpGLqPNg/6E4y5cHaywYECBGfIuSqbpn/2Q==",alt:"Manoj Sahoo"}),(0,m.jsx)(hh,{children:"Manoj Kumar Sahoo"}),(0,m.jsx)(gh,{children:"CEO, Co-founder"}),(0,m.jsx)(xh,{children:"Manoj has 25+ years of experience in Product solution, Engineering and Development in two of the India\u2019s leading Products, Finacle (INFOSYS) an enterprise solution in Banking and Financial Services and Tally the most admirable product in SMB segment"})]}),(0,m.jsxs)(fh,{children:[(0,m.jsx)(xh,{children:"Manoj K. Sahoo, Founder and Director of Atomwalk, drives product development and innovation with over 25 years of experience in engineering and software solutions. He was instrumental in building two of India\u2019s iconic software products: Finacle, Infosys's global banking solution, and Tally, a leading business tool for SMBs. Manoj's expertise spans payments, supply chain management, and delivery excellence, with multiple patents in product innovation. Holding a B-Tech from NIT Rourkela and an MS from BITS Pilani, he leads Atomwalk's mission to deliver ERP solutions that enhance business efficiency and digital transformation."}),(0,m.jsx)(bh,{href:"https://www.linkedin.com/in/manojksahoo",target:"_blank",children:(0,m.jsx)("img",{src:nh,alt:"LinkedIn"})})]})]})}),(0,m.jsx)(dh,{children:(0,m.jsxs)(uh,{className:"flip-card-inner",children:[(0,m.jsxs)(ph,{children:[(0,m.jsx)(mh,{src:Gd,alt:"Lipika"}),(0,m.jsx)(hh,{children:"Dr. Lipika Sahoo"}),(0,m.jsx)(gh,{children:"Founder and Director"}),(0,m.jsx)(xh,{children:"Dr. Lipika Sahoo, with 24 years of academia and industry experience in technology, innovation, and intellectual property, holds a PhD from IISc. She has triple master's degrees: MSc from Sambalpur University, PGDIPR from NLSIU, and PGCBM from XIMB, along with advanced certifications from WIPO and IIM Bangalore."})]}),(0,m.jsxs)(fh,{children:[(0,m.jsx)(xh,{children:"Dr. Lipika Sahoo, Founder and Director of Atomwalk, brings 24 years of experience in academia and industry, specializing in technology, innovation, and intellectual property. She holds a PhD from the Indian Institute of Science (IISc) and has earned multiple advanced degrees, including an MSc, PGDIPR, PGCBM, and certifications from WIPO and IIM Bangalore. Dr. Sahoo serves as a reviewer for various government innovation programs, such as BIRAC-BIG, SPARSH, and TATA Trust's Social Alpha. Her extensive expertise supports Atomwalk\u2019s mission of driving impactful, socially relevant technological innovations."}),(0,m.jsx)(bh,{href:"https://www.linkedin.com/in/lipikasahoo",target:"_blank",children:(0,m.jsx)("img",{src:nh,alt:"LinkedIn"})})]})]})})]})]}),(0,m.jsxs)(sh,{bgColor:"#e8f3fc",children:[(0,m.jsx)(lh,{children:"Board of Advisors"}),(0,m.jsxs)(ch,{children:[(0,m.jsx)(dh,{children:(0,m.jsxs)(uh,{className:"flip-card-inner",children:[(0,m.jsxs)(ph,{children:[(0,m.jsx)(mh,{src:rh,alt:"SK Patnaik"}),(0,m.jsx)(hh,{children:"SK Patnaik"}),(0,m.jsx)(gh,{children:"Advisor"}),(0,m.jsx)(xh,{children:"For ~25 years, he led Business Management (Client Relationship, Sales and P&L Management, new GTM) roles mainly in the IT Solutions & Services spanning global markets (the US, UK, South-East Asia, and India)."})]}),(0,m.jsxs)(fh,{children:[(0,m.jsx)(xh,{children:"SK Patnaik, who joined Atomwalk\u2019s Board of Advisors in 2021, brings expertise in business strategy, product innovation, and revenue growth. With ~25 years of experience in IT solutions across global markets, he has held key roles in client relations, sales, and P&L management. Previously with Infosys, he led APAC and India operations for the Global Manufacturing Vertical and has deep experience in the ERP landscape with platforms like SAP, Oracle, and SaaS solutions. SK also co-founded a deep-tech telecom startup and holds an MBA in Marketing and Systems from the Xavier Institute of Management, Bhubaneswar."}),(0,m.jsx)(bh,{href:"https://www.linkedin.com/in/sk-patnaik-",target:"_blank",children:(0,m.jsx)("img",{src:nh,alt:"LinkedIn"})})]})]})}),(0,m.jsx)(dh,{children:(0,m.jsxs)(uh,{className:"flip-card-inner",children:[(0,m.jsxs)(ph,{children:[(0,m.jsx)(mh,{src:ih,alt:"Dr. M R Jaganath"}),(0,m.jsx)(hh,{children:"Dr. M R Jaganath"}),(0,m.jsx)(gh,{children:"Advisor"}),(0,m.jsx)(xh,{children:"He has an illustrious career  as a Scientist managing deep Technology, Translational Medicine, Drug development , Drug discovery.  He has published numerous scientific articles in reputed journals."})]}),(0,m.jsxs)(fh,{children:[(0,m.jsx)(xh,{children:"Dr. M R Jaganath, who joined Atomwalk\u2019s Board of Advisors in October 2023, brings expertise in lab management, Good Laboratory Practice (GLP), and Good Manufacturing Practice (GMP). With a PhD from the Indian Institute of Science (IISc) and a distinguished career as Chief Scientific Officer at Connexios Life Sciences, he has extensive experience in translational medicine, drug development, and drug discovery. A prolific scientist, Dr. Jaganath has published numerous articles in esteemed scientific journals, contributing significantly to the field of advanced medical research and innovation."}),(0,m.jsx)(bh,{href:"https://linkedin.com",target:"_blank",children:(0,m.jsx)("img",{src:nh,alt:"LinkedIn"})})]})]})})]})]})]}),vh=n.p+"static/media/sales.ba949556d3121afbc087.png",wh=n.p+"static/media/concentrate.7f7fc25cb1fde510b1de.png",kh=n.p+"static/media/goal.969464dc2886052b3fad.png",Sh=n.p+"static/media/online-learning.20f782a0f780a57d90bb.png",jh=ia.section`
  padding: 70px 40px ;
  background-color: rgb(225 255 246);
  text-align: center;
`,Ah=ia.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 110px;
`,Ch=ia.div`
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
`,Eh=ia.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom:100px;
  /* display: flex;
  align-items: flex-start;
  text-align: left; */
`,Rh=ia.div`
  flex-shrink: 0;
  margin-right: 15px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${e=>{let{bgColor:t}=e;return t}};
`,Ph=ia.img`
  width: 40px;
  height: 40px;
`,Oh=ia.div`
  flex-grow: 1;
`,Th=ia.h3`
  font-size: 1.2rem;
  margin: 15px 0 10px;
  color: #333;
`,Mh=ia.p`
  font-size: 0.95rem;
  color: #666;
`,zh={improve:`${vh}`,excellence:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA7SAAAO0gFcPFpKAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyO34QAAAP90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+6wjZNQAAHltJREFUGBntwQdgleX58OHf+yQ5WUASCCQEmS6cqDgq4oytFcVRRytq6561tbZ/u7S1rbZftRW1VatVW2dbBbXuLYJYNyBuGRIgjCQEAgmZ5/5swzLjft9zcg45z3ue6/JwtuDtv8+QIdsMKWurWVWzqmbVqprlcysJNQ9nIzP+xBPK6Kh6zntz5rzfihNyA65fJt1aM/WcbXBCLOOiVeJj7nWHRXDCafxsCWL1jaNxwifzdgnsxRMyccIl+98Si6VXleGESJ8XJUYtDwzHCYui/0jsGn6VhxMKubMkLhXfxAmDmyRer+yBY73yqMSt7S/FOHYrWCQ9UfkVHKv9XXqm8Qwcix0nPTY5A8dWGZ9Lzz3fH8dSx0sizNsFx04vSkLUHYtjo10kQaLn4VjoVkmU1gk41ilYJwmzdi8sZUhb384nYfo8MQw7GdLWBBJo8JMFOFaJrJOEeiELGxnS1VfySajyv2KjDNLV2QeTWHvwCo49XpOEOwH7eKSpfjWZJFrl6LXYJoM0VX46inkft0QixKpv9nM4lviRaI4F+mx72C9fapBYtOyCY4nbRdGQywaR8Vc8Xy+BTcOxxDRRPMqWssqntEhAk3DsUCmKM+hgm98sl0Aq++LYoI8oosV0kvOLBgniehwb7CmKKroy7CEJoGVXHAucLIo5dO3QReLvZaxiSE8DUVTStZf3noGvQ8ZiE0N6KkBRSTeqym/H13nYxJCe+qGopDst51/cio9T8rGIIT0VoFhK9265GB99v4VFDOmpAEUlituvxcd5OCnvCVGMQ+M9JD52xx6G9FSAIopGTn8d3bnYw5CeMlF4qBpPWIfqtFysYUhPURQeusrfoSo8CWsY0pOg8PBx/eeozsUahvQkKDx8NF6OanwJtjCkJ0Hh4eehGajGYQtDehIUHr4ujaIZhy0M6akVhYevd6egGYctDOmpBkUm/u5DMzYbSxjSUxWKUvw9W4siey8sYUhPVSjK8Nf8CJpxWMKQnqpQDCaAf6IZhyUM6akKRRkBvLQSxTgsYUhPVSjKCKBtCorSUdjBkJ6qUJQRxENoxmEHQ3qqQjGYIN4WFPtiB0N6qha6l1dAAOs+RzEEOxjSU1stijKCeB/FQOxgSFNNKAoIYi6KQdjBkJ4OGIwinyDeRzEIOxjS0zlo8gnifRSFWVjBkJb6noQmShCftNA9rxgrGNLSKflo3iKI5k9RDMIKhrR0Npp5KwikEsUgrGBIR7vti+ZVgmlAMQgrGNLR2aimEkw9ioFYwZCGsk9DU/k0wTSgGIQVDGnouAFo7m4jmAYUg7CCIQ2dg0buJKAGFDlYwZB+RpSjeWU+AdWjaMQKhvRzlofmToJqQNGEFQxpx5yBZvVUgmpA0YgVDGnniKFoHlhPUK0oGrGCIe2cjeoOAitE0YgVDOlm4DFoZs0isCIUTVjBkG7OzEJzJ8EVoWjECoY0Yy5A03g/wRWhaMQKhjRz5Eg0U1cTXBGKJqxgSDMXo7qDGBShaMQKhvQy6gg0818hBkUoGrGCIb1caNDcJcSgCEUTTurJqRZNaxmxaBHFQVjBkFa+NQDN05XEoCATxWKc1POmqI4lFnuJoiUTJ+XsI6plmcRikigWYgdDOrkI1T2txGI0ioXYwZBG+n8L1Z3EZDSKhdjBkEbOykEz41NiMhrFQuxgSB/ehajuICZmexQLcVLNkaKqySEmI0UzDjsY0sfFqO5sJCaj0SzESTEj20TTNpLY/EAU6z3sYEgbFxg0Ty0kNqNRfC7YwZAuss9CdTMxGo1iIZYwpItvFqOZ9yyxydgTxUIsYUgX30V1ixCb3fuiWIglDGli/D5oGv5GjMaj+RBLGNLEZajuX02MxqN5AyelbNsmqjHEaqkoPsUWhvRwqUHz6hxiNLIMxevYwpAWis5E9WdiNR7N69jCkBYuyEez7GFiNR7N6zipJGupqK4iZh+IoiETJ5V8W1QtZcRqQFQU07GGIR1churhSmI1zkPxOtYwpIHyMahuJmbj0byOk0qeFNV7xO5d0ZThpJCdoqI6n5gNEU0F9jCE3w88NGvuI2ZHoXkdexhCb+DpqP5eT8wmonkdJ4X8UlTRHYhZboNoxuGkjpyVonqW2B0lmqYc7GEIu9MGorqe2E1EM70RJ2V4H4pqDnFYLJrv46SOI0V3OrHbQ1Tb4aSOF0S1OIvYXSGaT7CJIdzGlKO6sYXYTUTzJE7quFtUq/sRu5KoaMpxUsbwZlFdSxzOFE1dBCdl3CKq5iHE4RHRTMVJGWWNovo7ccitF81ZOCljsuh2JQ7HiCZaipMqBtWL6inicZdo3sYuhhC7LA/VdcTBHI3mSZxU0X+tqN4mHgeKal/sYgivS/uguo54HItm5Vs4KaJfragWZhCPeaL5O5YxhNYlhagmtxGHXbZF8wROisivFlVNPvH4uWia+2EZQ1hdOADVrfXE41g00+twUkPOclE1lhCPIVHRXIptDCF1bgmqe1YQj2M8NI/jpIbIYlFFdyQuz4rmQ5wUcZ7oHiUu/ZpE83uc1JC5QHQHEJdviepAnNTwHdG9Rnz+IZrqDJyUYD4R3fHEJbJGNPfipIZTRPepIS5fE9XJOCnBe190FxCfm0TTXICTEr4husXZxOcD0byIkxreFd0FxGewqC7FSQnHiO7zCPE5VVTb4qQC877oziFOd4nmQ5yUcIbo5mcSp0WiuRYnFWQvEt0ZxGk7UR2Ikwp+KLrPMojT+aKpycBJAQU1ojuNeD0omntxUsFvRfdxBnHyqkTzTZwUMLhedKcQrz1E01yAkwJuE937hnj9UDQv4qSAHVpEdxJxe0o0l+KkgIdEN8cjXllrRbMtTu/bV3wcT9zGi+YjLGUIk/+HbtajxK0czTM4ve/r4mMi8XtFNCfi9DpvlujeJH6RJtGU4fS6U8XHkcRvL9EsxOl1kQWi+w89cI5o7sNWhtC4YCS6X9ADY9G8htPb+q4U3Qx64g3RjMHpbVeJj0Ppgcz1oqgzOL1s0FrRvUxP7C6a57CWISSu7IPuF/TEXmhm4vSyUc2ie54e+ZNoDsfpZVPEx/70yExRtPbF6V1Hio+n6RFTL4pZOL0rZ7742Jce2Vk0f8ZehjD4+Sh0j71Jj4xF8xpOr9qxSXQtO9Izk0UzHKdXvSg+bqKHXhHFEpxeNUl81A6gh5aJ4kGc3lSwXHxcRg9FoqK4HKc33Sw+5kXooRGi+QZOL9q7TXx8g546UDRjcHqPeVt8TKfHThFNXyxmsNxFY9HJZfTYUBQr12Ixg91Kr8bH/W/TY9ugmI/NDHa7vgDd+p/Sc0NRzMdmBqsdfgo+/riEntsGxXyc3pL9ifhY1ocEWCaK07BZJjb78Q74uGIdPRcpQTGfHsgvblcUiWRFsiJZkaxIViQr0lLf0K6+oaFhzdIlS6qF5PCw2Lbv56CbPTZKz41YiKJkJTExpQOLN8khmKbKJV9YuqRiGYmVicVuzkEnF0ZJgDIU61YSUP6oUaO2HTVqRDaxyx45kv+pmT1r1uxP2kiUTOx10hH4uON1EiEDxVL8eIO3HTVq21GjSkiAAeXlsP69WbNmz11PAnhYq+/HZeiqd1xFIoybSffm7k73Bo35wvY5JEPbG08+OYc0dpv4OZPE2E8U79KlzF0m/f6ZZZJki2+bmEeamih+Zngkxt6ieIOOig75/l3vNMpWsv7p744kDQ1aIT5adiNB9hTFTLZQMuEXjy2Wre7NM3JIN0+In+tIlN1FMY12A474+SOLpbfUXDeKtHKB+Fnch0TZRRQvQNHhP35oofSy6FNHGdLGjvXi5wQSZrQoFvxznqSIBZf3Jz1kviV+niJxthdb1F6WRTq4WvysH0XijBJ7fDKR8DugVfxcSQINFJs8tyshV7RQ/HyaTSItF5u03lxMYAbrmAdG4EPOaSKR5mCTjIs+O5egDNb59dfxc+N0EmoOdim8/W85hNVxUfHzSS6JdapY590RhNOOa8RP2/4k2K5in5qvE0Z9PxRf15JomU1in7YrPcJnqvj6IJuEmyU2erwAXwar/OQb+Gn9ThMJNwcbHf1yf/wYbHLkNfj6/dsk3itYac8XB+DDwyJfeSEfP+/t00zi9Vuei5XmHF6NymCPXZ/Kx0/Ld5pJgrpHsdOYl4pRGawx4tkifF09m6S4B0vt9kQO4VDymfh7J5PkMHPFVvejycASBS/ujK/GCctJDln2LSy1W+sMuudhh9xnD8TfuXeQNG/tTZJFW9q1trRIv4J+uSSInPgw3fKwQs7UCfi7+wyS58BphsRaW1VdVV1VXVVdVb2m5QtRviSr4Av9Cv5n6E6FxG/dzovpjocNBjw2Dn9zv9JAEl39cxKhddGC+QsWV1VXVTcTg9Kdd9p5p51LiMtjx9IdDwuMenoH/K3d+1OSKXP6/vTE6gXzFyyYv6CijfgV7bzTzjvtNMwjRt94BIvtvUKCOIkkG1Yh8Vn4yC9P3rs/CVM86Z4VEpMlfbHXUeskiBtJuu0qJUaN7971vYMKSDxv7BWvRSW4G7HWea0SxH+ySL6dV0hgNS/84fTdMkmiba9ZIkG17Y2dvGskkOqhbA1DXpUAGt+85exdPZIv48iHmiSYdzOwkblXAmk7gq0j8w9R0TS9/Zdz98xi6ym7rUUC+QE2ukGC+TVbzZ7PSNea37n9vLERtrodHoxKAGuHYJ+LJZjnDVvRIfeukC9rmXXHBftk01v2niYB/ArrHNUqgXw8gK3L2/uKma3SbuW/f3xgLr3Lu7JNfFUYuuCRuvaY0Ycglo37nK2vaESGyTAZlfNIBYc/MBA/E57GKkOWSCB1e+Aw5FXx8zBW6fOuBNJUjvOFyBPio7kEi2Q8LoFEJ+H8T/Yz4uNyLHK9BPMjnA1yXhDdJ9jjKAlmMs4mfeeJ7iBsUbJCAvmXh7PZPs2iugNbPCmBvBzB2dKPRPUBlviuBPJeAc6XeHNF09YHK+yyXoJ4ZxBOB2eI6kBskD1Hgni+L05HkUrR/AAbXC9B/DOC09lPRHM/FiiPSgA3eThdKFwrik9IfVkfSwA/w+naDaKI9iPl/Uj8tZ6F040dRHMoqW5wnfhqOAanW3WiuJAODCnm2r74qf3qYzjd+gBFPh0YUssBp+FnXflMnO59gCKPDgwpxfwJP9FJs3AU76PIpwNDSjlvT/z86HEczQco8khphTXi51Yc3RBR3EkHhlRyaX98PH8Jji6KIo8OMolVzuDSbHpofW3t6hY6KbwUH/NPasXR9UGRRweZBBU5ZIeyLwzuT2LU13w0e9aseVE2u7QAXeupa3B89EGRR3z6fvMfayQZ1j1z7kA2KFwtPq7E8XWQKB4lDiXnPtUkydP60sUl/NdV4uPVDBxfE0TxF2JW/kqbJFvjbdtB4WrRrRmB4+8UUVxFjMY8I1tF24N7XSU+vo0TwLWiuICYDL83KltNi+hm4gQxQxTHEoMB1zdK6ojuhxNA1npR7EcHmXTrrOsLSCH/eAMngL1yUCynA0M3MibfWUAKafwpThD7o1lOB5l0reBfR5BSrq/ACeIYFIubCGa7jyS1LOuDE8Q2baL4Fx0ZulL+5mhSy5XrcIKYZFD8h0AubJEUM8fgBPKeaPYliFMl5ZTjBDJONOsjBLDvekk1j+ME84JoXqUTQ0dlj+SQaq7GCeTgcjT/oRNDBzmPlpFq3nkDJ5DfoHoNfw9I6jkLJ5CviaqhD75+JqlnVS5OIC+Lagq+yqOSev6IE8iuojsRP2aOpJ7odjiB3Caqtbl0ZtjSqbuTep6bhxNE4WmoHltPZ4YtZP+GFHQLTiBn5qH6J10wbOHi4aSeRU/gBLIbqsZn6YJhs8Kfk4Lui+IEkosq53S6YNjsJ/1JQY/iBJOHbvIIOjNsMuR7pKDFb+MEk4eu7989OjFsck4uKehRnIBy8HHwpXSSySbHEcTKhZXLm+mhPmWDt88nkEdxAnprPD5++8xHdGu4+Pv012NJkJyJf6sTfzWZOAGNE19vZdKt74mfJWdnkEgDb2oWP3fjBOUtFV8/o1sviY/bc0m07d8TH/fiBPYn8bWmiG4UtYiq9RKSoM8joluAE9h+UfF1Dd04XXSTSArvAdENxgnsV+JrbTFdmyKqa0iS3LdEdSJOYOYp8XUdXVstmuc9kmXIatFMxgmuaL74qS+lK31F07oryfNT0byJE4Mx68TPDXRlR9HcQRLlLhFFSwZODA5bLz4ah9CFQ0UzmmT6mWgG4sTi6DbxcQtdOFUUH5NUu4hmJ5yYXCU+GvLZzNCuDMW/SaoP5qMYiBOTX7+ELvdoNjO0K0PxFsn1OopinJhET12B7iQ2M7QrQ1FJci1DUYwTm+WToqgm5LOJod1gFMtIrkoUxTgxeuk3qHKPYhNDu2IUtSRXLYq+OLG6+kNUJ7GJoZ0hVXk4sWq9BNWEfDYyOCH00hQ0eUexkcEJox82ozmJjQxOGFX8E82EPDYwOKE0GU3eAWxgcEJp9sto9mQDgxNOk9HsyQYGJ5yeqUOxJxsYnHBqeQ7F9vm0Mzgh9QQKsxvtDE5IPRVFMZR2BiekqmajKKWdwQmrj1GU0s7ghNUCFKW0MzhhtQDFYNoZnLBagGIQ7QxOWC1CYWhncMIqD4XQzuCEVQmKKO0MTlgNQiG0MzhhNQhFlHYGJ6xKUNTTzuCE1SAUS2lncMKqFEUl7QxOSGUdgKKSdgYnpA7vj2Ip7QxOSJ2MZgntDE44RY5D0TaXdgYnnL5aiOLjBtoZnHA6Gc3bbGBwQilyLJp32MDghNLZBWjeZgODE0b9r0az7h02MDhh9Jv+aJ5rZgODE0Jjzkf1BBsZnBC6KQONPMlGBid8vnkQqjdXspHBCZ28P6B7mE0MTuj8fhtULXezicEJm/O/i+7fK9jE4IRM+Z/xcRubGZxw2eGhTHTzX2QzgxMq/Z8owsftwmYGJ0yypmyPj5pb2YLBCZNbDsXPdWvZgsEJke+dg5+qP7MlgxMeu16Lr9/XsyWDExpZ92bjZ9ktfInBCY2r9sDX99bzJQYnLHb+Mb4enMKXGZywODYDPysvpgODExZH4OvCajowOCHRdxx+/vkwHRmckDg0Cx8rvksnBickyvBzQQ2dGJyQqMPH/Y/SmcEJiTp0y79HFwxOSKxFd94qumBwQmIlqpZpdMXghMRHc9FkfZWuGJyw+Auqo+iKwQmL++rRTPDogsEJi7p/oCkdSxcMTmjcjOpoumBwQmP2NDRH0QWDEx43oBlbSmcGJzwen4/CO4rODE54RG9CcySdGZwQuacVxVg6MzghsnomiuF96cTghMmTKLxd6MTghMlTaHajE4MTJh98jmI3OjE4ofI0itF0YnBCZTaKMjoxOKHyGYpSOjE4oTIPRf8sOjI4obKkke55pXRkcEJFFqAopSODEy7zUAyiI4MTLvNQROjI4ITLOhQeHRmccMlE4dGRwQmXDBSGjgxOuGSg8OjI4IRLBgqhI4MTLgNQ1NCRwQmX0Siq6MjghMuOKKroyOCESmkB3ZNqOjI4oTIaRW0rHRmcUNkPRRWdGJxQmYjiMzoxOGFSvD+KOXRicMJkgkExh04MTphMRDOHTgxOiAw6GkX9PDoxOCFySQ6K96N0YnDCI+8iNLPozOCEx9n90TxHZwYnNLJ+gKbpeTozOKFx+Ug009bRmcEJi+2uQPU4XTA4YXFbDqon6ILBCYnvHIZq7iK6YHDCYcT16B6jKwYnFPIe7Y8qehddMTihcNcYdI8toCsGJwx+8k183ECXDE4ITLwGH7NfoUsGx35HPmTwcQNdMzjWm/BINj5W/IOuGRzbHf1INn5ubaZrBsdyx0yN4KfmJrphcOz2/Ycj+Lqilm5k4tgscutZ+Jt9O93JxLFYycPjCOCSKN3JxLHX2Ee3IYAHXqVbmTjW2veFvgRQfzndMzi22v2ZvgRxzVK6Z3AstePzRQTx4fUoDI6dIs8MIoh1JzShMDh2OmMEgZz9MRqDY6WMHxPIjQ+iMjhWOmUUQbz2f+gMjpUuJIiVJ7egMzhW2okA2k5Zig+DY6PCIgK48iX8GBwbjSKAm36HL4Njo5H4u/n7+DM4NqrF118uIQCDY6P38PPXi4QADI6Nqpehu+t8IQiDY6W5qO4+VwjE4FhpFpr7zooSjMGx0nQ050cJyOBYaUYbikKCMjhWWluBYiBBGRw7LUJRTFAGx04VKIoJyuDYqQJFMUEZHDstQlFMUAbHThUoignK4NipCkUhQRkcO3ko1hOUwbGTQbGWoAyOnQyKOoIyOHaKoKgjKINjp2Eo1hKUwbHTSBR1BGVw7DQCRR1BGRw7jUSxlqAMjpW83VHUEZTBsdIeA1HUEpTBsdLXUNQvJSiDY6WvofhQCMrg2CjvABQfEJjBsdGJ2Sg+JDCDY6MfofmAwAyOhb6+G4roGwRmcCz0f2hm1xCYwbHPXoeheYHgDI51vD+gep7gDI51LjgUTeOrBGdwbDPiWlTTGwnO4FjGu6MPqgeIgcGxzEXlqBqmEgODY5cJN6B7eB0xMDhW2f+hTHT3EAuDY5NdnsxDt/RFYmFwLDLs2SJ83BUlFgbHHmNmDMHHuhuJicGxxnEzh+Hn5hpiYmjXhCJCcuWgaMVp95OH8/HT8EdiY2i3DMVgkmswinqc/8q+53cevm6tIjaGdpUoBpNcg1HU43zhK++ejr/11xEjQ7tlKLYlubZHsQ6HvMkzdyaAP64gTheL4imSqrBZFCfjlC+QQD7MJl7Hi6KxD8k0STQHku7K7pRg2vYnbvuJ5kyS6VnRFJPeSm9YLwFNJn5DRfN5NslzuGiqSGuD/tAgQS3IJ35ZUdFcRtKYWaKZThor+f06Ca6cnpgnmrW7kSy/FdXTu/QlPXnlDzZLDP5KPDw2mHwpms/3qSYpJt2Pn9qKikUVFYsqlkdJHwPOOH97YvH5HmuIg8cGB09D9cYxK0mC4x/IIai2yoqKxRUVFYtXEXKZh5xxYjYxWTPuQ+LhsUHGigGoKo6ZQ8Jd8WuP2NVXVCyuXP5f6wmfvCOOP7qIGLVOeJ64eGz09++gq7/6hkYSao/rDqdn6pZvtLKNMOh/9PFH5BK78/5KfDw2Ou4R/Cy+akodiWL2v3CSR8JEq5dvVIud+hxw0MH7ZRKPa39MnDw2yqvOxVfztKcXLqvNp4f6lA0ec/RAkqRpxfLlK2pW/U9tA1YoHH/wwXtmEqepJwlx8tjk38cQQk2r/qd21Rdq69Y2kWoi240ePXr33Qzxe/OQ9cTLY5PT7yH8WtZ21kbvGDB6x9GjR4/KoIfmfG0lcfPYJPODHUhL6xuam5qbm5qbmpubmpuam5uam5qbm5qbmpvbvHZ4X4LneS1r6tbUralbR8yyioqKBu4wevToYhLi5ePqiJ/HZt+YihOjtrVr1tStqVtTt6ZuTd2aNXX1giAgIAgIAtlFW8onoR48vZke8NjCzHE4lrnpB1F6wrCFy3Es85PvR+mRDLaweI/ROBZpPfMWeshjSzu+n4ljjZWnPU9PZbClmrK9cWzx+JFz6TGPLyl+eziOFeovu50E8Piy3V/Lx7HAm6d9RiIYvuy90wUn5bX96oDPSIgMOvi47TCcFDdv4n1REiODjqbvtCtOKlt95RmLSBSPTnJnjMVJWc03X72KxPHobJvXh+CkJvnXzxaSSIbOlnzlHZyU9Mp+pywkoQxdWHLgv3BSz9xjDnmLBDN0Zf23rhSclBJ97PDdHyfhPLpx/L35OCljzV1/XkAyeHRn98eGs9W9Xz+8xMPp4JM/3b2O5PDoVvFvzslkq6r56Z1RsocOGz5s+PBhQ7Nx/kuevfFZIVk8FDv89gS2nujtP1/FZl7J8GHDhw0fNryINCb/mTK1giTyUO137UFsJW9c/A5d6jN82PBhw4cNK8skzURnTpm6lOTy8HH073Yl+aLP3vqEoMsYPGzosKHDhg0tJh1Ep095eBlJ5+HHnHDikX1Jqqq7bltIcHlDh5aVlpaUlpYWeYTT6ulPP7ySrcEjgMhhxx0zmCSpn3n3lGbik1VSWlJaWlJaWlLaj7ConT7tlTlRthKPYLx9j5u4QxYJVv3qjBmzWkmE3NKS0tKS0tKS0tJcrLVq+rRpc6NsRR7BeQMHl/1XaTY91FBdU1NdU/3xRyRDv5LSgYUFG/XLwQpNH7339itzha3MI/QiBR3kkmKWvPeFT1rpDR7pJ6vgy/pEIh69YmVFRcWC9+auovd4OF+IRLKzI9nZkezsSHZ2JDs7kp0dyY5EBNkM2czrW1hQWFBYUJBF7NrWVC+uqKhYVLG4kV7n4fREXmFBYUFhQWFBYZ+sSFYkK5IVyYpEsiJZkazM1paW5pb/am5paWlcvbq2dnVt7era2rVC6vj/ty+0dTo91qoAAAAASUVORK5CYII=",impact:`${wh}`,customerSuccess:`${kh}`,learning:`${Sh}`},Ih=[{title:"Constant Improvement",description:"Growth isn\u2019t a one-time effort. We\u2019re committed to evolving every day, both as a company and as individuals.",icon:zh.improve,bgColor:"#f3d0ff"},{title:"Pursue Excellence",description:"Excellence guides our actions, shaping our products and driving our customer success.",icon:zh.excellence,bgColor:"#ffe2c4"},{title:"Prioritize Meaningful Impact",description:"Our core metric is the value we create for customers by solving their most pressing needs.",icon:zh.impact,bgColor:"#f5efb8"},{title:"Champion Customer Success",description:"We see every interaction as a chance to build lasting, impactful relationships with our customers.",icon:zh.customerSuccess,bgColor:"#daf7e2"},{title:"Cultivate Learning & Collaboration",description:"We grow together through trust, open knowledge-sharing, and a spirit of collaboration.",icon:zh.learning,bgColor:"#d3f4ff"}],Dh=()=>(0,m.jsxs)(jh,{children:[(0,m.jsx)(Ah,{children:"Our Values"}),(0,m.jsx)(Ch,{children:Ih.map(((e,t)=>(0,m.jsxs)(Eh,{children:[(0,m.jsx)(Rh,{bgColor:e.bgColor,children:(0,m.jsx)(Ph,{src:e.icon,alt:e.title})}),(0,m.jsxs)(Oh,{children:[(0,m.jsx)(Th,{children:e.title}),(0,m.jsx)(Mh,{children:e.description})]})]},t)))})]}),Lh=(n.p,n.p,n.p,ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,ia.h1`
font-size: 2.5rem;
margin-bottom: 30px;
color: #333;
`,ia.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`,ia.div`
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
`,ia.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 25%;
  border: 2px solid #454545;
`,ia.img`
  width: 100%;
  height: auto;
`,ia.h2`
  font-size: 1.2rem;
  margin: 10px 0;
  color: black;
  font-weight: 500;
`,ia.p`
  font-size: 1rem;
  color: #555;
`,ia.p`
  font-size: 0.9rem;
  color: #888;
`,()=>(0,m.jsxs)("div",{children:[(0,m.jsx)(Tm,{}),(0,m.jsx)(th,{}),(0,m.jsx)(Gm,{}),(0,m.jsx)(Dh,{}),(0,m.jsx)(yh,{})]})),Fh=n.p+"static/media/email.d27389667b81e4a5c88c.png",Nh=n.p+"static/media/telephone-call.ee034a176dc60e4b43bc.png",Bh=n.p+"static/media/footer-bg.7bd67c0f73571d0acc02.png";const qh=n.p+"static/media/nav-icon1.721d5414c26365f117e71d46b6641cb2.svg";const Hh=n.p+"static/media/nav-icon2.178f497aa17b70c42df2a1a8c926ed01.svg";const Wh=n.p+"static/media/nav-icon3.08b285abb8e118b52637efa5d65c5367.svg",_h=ia.footer`
 background-color: rgb(13, 11, 62); /* Dark background color */
  /* background-image: url(${Bh}); */
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
`,Uh=ia.div`
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
`,Gh=ia.div`
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
a{
  text-decoration: none;
  color:white;
}

`,Kh=ia.div`
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
`,Yh=ia.div`
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
`,Vh=ia.div`
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
`,Jh=ia.div`
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
`,Qh=ia.div`
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
`,Zh=ia.div`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
    max-width: 209px;
  }
`,Xh=ia.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,$h=ia.input`
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
`,eg=ia.button`
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
`;ia.p`
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
`;function tg(){const[e,n]=(0,t.useState)(!0),[r,i]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const e=()=>{window.location.pathname.includes("assessment")?n(!1):n(!0)};e();const t=()=>{e()};return window.addEventListener("popstate",t),()=>{window.removeEventListener("popstate",t)}}),[]),(0,m.jsxs)(m.Fragment,{children:[e?(0,m.jsxs)("div",{children:[(0,m.jsxs)(_h,{children:[(0,m.jsxs)(Uh,{children:[(0,m.jsxs)(Jh,{children:[(0,m.jsx)(Qh,{children:(0,m.jsx)("img",{src:pn,alt:"AtomWalk Logo"})}),(0,m.jsx)(Zh,{children:"Stay up-to-date with AtomWalk Newsletter!"}),(0,m.jsxs)(Xh,{children:[(0,m.jsx)($h,{type:"email",placeholder:"Email*",required:!0}),(0,m.jsx)(eg,{type:"submit",children:"Submit"})]})]}),(0,m.jsxs)(Gh,{children:[(0,m.jsx)("div",{children:(0,m.jsxs)("a",{href:"mailto:info@atomwalk.com",children:[(0,m.jsx)("img",{src:Fh,alt:"AtomWalk Logo"}),"info@atomwalk.com"]})}),(0,m.jsx)("div",{children:(0,m.jsxs)("a",{href:"tel:+917259555003",children:[(0,m.jsx)("img",{src:Nh,alt:"AtomWalk Logo"}),"+91-7259555003"]})})]})]}),(0,m.jsxs)(Kh,{children:[(0,m.jsxs)(Yh,{children:[(0,m.jsx)("h3",{children:"Quick Links"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"/",children:"Home"})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"/aboutUs.html",children:"About Us"})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"/Product.html",children:"Products"})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"/contactUs.html",children:"Contact Us"})})]})]}),(0,m.jsxs)(Yh,{children:[(0,m.jsx)("h3",{children:"Products"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"/crm.html",children:"Customer Relationship Management"})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"/hrm.html",children:"Human Resource Management"})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"/lms.html",children:"Lab Management System"})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"/Product.html",children:"Enterprise Resource Planning"})})]})]}),(0,m.jsxs)(Yh,{children:[(0,m.jsx)("h3",{children:"Resources"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)("a",{href:"/Blog.html",children:"Blog"})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{onClick:()=>{i(!r)},children:"Support"})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{onClick:()=>{i(!r)},children:"Tutorials"})}),(0,m.jsx)("li",{children:(0,m.jsx)("a",{onClick:()=>{i(!r)},children:"FAQs"})})]})]})]})]}),(0,m.jsx)(Vh,{children:(0,m.jsxs)("div",{style:{padding:"25px"},children:[(0,m.jsx)("p",{children:"\xa9 2024 Atomwalk. All Rights Reserved."}),(0,m.jsxs)("p",{children:["Privacy Policy | Terms & Conditions | Made with ",(0,m.jsx)("span",{children:"\u2665"})," Atomwalk"]}),(0,m.jsxs)("div",{className:"social-icon",children:[(0,m.jsx)("a",{href:"https://www.linkedin.com/company/atomwalk-technologies/",children:(0,m.jsx)("img",{src:qh,alt:"Icon"})}),(0,m.jsx)("a",{href:"https://www.facebook.com/profile.php?id=61569432586041",children:(0,m.jsx)("img",{src:Hh,alt:"Icon"})}),(0,m.jsx)("a",{href:"https://www.instagram.com/atomwalktechnologies/",children:(0,m.jsx)("img",{src:Wh,alt:"Icon"})})]})]})})]}):(0,m.jsx)(Vh,{children:(0,m.jsxs)("div",{style:{padding:"25px"},children:[(0,m.jsx)("p",{children:"\xa9 2024 Atomwalk. All Rights Reserved."}),(0,m.jsxs)("p",{children:["Privacy Policy | Terms & Conditions | Made with ",(0,m.jsx)("span",{children:"\u2665"})," Atomwalk"]})]})}),(0,m.jsx)(as,{visible:r,setvisible:i})]})}n(3557);n.p,ia.div`
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
`,ia.div`
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
`,ia.div`
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
`,ia.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow-y: auto;
  background-color: #f7fafc;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    padding: 12px; /* Reduce padding */
  }
`,ia.div`
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
`,ia.div`
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
`,ia.form`
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
`,ia.input`
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
`,ia.button`
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
`,ia.div`
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
`,ia.button`
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
`;n.p,ia.a`
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
`,ia.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;const ng=n.p+"static/media/Backgroundyellow.724b6926d561bc062e5d.jpg",rg=ia.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, rgb(237, 245, 255), #ffffff);
  background-image: url(${ng});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`,ig=ia.div`
  background-color: #e1fff6;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: 20px;
  margin-top: 100px;
`,ag=ia.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
`,og=ia.p`
  font-size: 1rem;
  color: #777777;
  text-align: center;
  margin-bottom: 30px;
`,sg=ia.form`
  display: flex;
  flex-direction: column;
  color: #454545;
`,lg=ia.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,cg=ia.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,dg=ia.select`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`,ug=ia.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap:10px;
`,pg=ia.label`
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333333;
`,fg=ia.button`
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
`,mg=()=>{let e=new Date;const n={name:"",company_name:"",task_name:"Book My Demo",mobile_number:"",email_id:"",add_task:"N",task_type:"Book My Demo",task_date:`${("0"+e.getDate()).slice(-2)}-${("0"+(e.getMonth()+1)).slice(-2)}-${e.getFullYear()}`,remarks:""},[r,i]=(0,t.useState)(n),[a,o]=(0,t.useState)(!1),[s,l]=(0,t.useState)([]),[c,d]=(0,t.useState)(""),[u,p]=(0,t.useState)(""),f=(e,t)=>{i({...r,[e]:t})},h=async(e,t)=>{try{let r=localStorage.getItem("apiResponse"),a=JSON.parse(r);if(!r)throw new Error("Token not found, please login.");const s=Hc.create({baseURL:"https://www.atomwalk.com/api",headers:{Authorization:`Token ${a.key}`}});200==(await s.post(e,t)).status&&(i(n),o(!0))}catch(r){console.log("Error making authenticated API call:",r),i(n)}};(0,t.useEffect)((()=>{a&&setTimeout((()=>{o(!1),window.location.href="/demo.html"}),3e3)}),[a]);const g=e=>{const{value:t,checked:n}=e.target,a=n?[...s,t]:s.filter((e=>e!==t));l(a),i({...r,remarks:`${u}\nNumber of Employees: ${c}\nRequirements: ${a.join(", ")}`})};return(0,m.jsxs)(m.Fragment,{children:[a&&(0,m.jsx)(yu,{message:"We have successfully recorded your information."}),(0,m.jsx)(rg,{children:(0,m.jsxs)(ig,{children:[(0,m.jsx)(ag,{children:"We are a call away!"}),(0,m.jsx)(og,{children:"Discuss Pricing, take a Demo or share your business problems."}),(0,m.jsxs)(sg,{children:[(0,m.jsx)(lg,{onChange:e=>f("name",e.target.value),type:"text",placeholder:"Full Name"}),(0,m.jsx)(lg,{onChange:e=>f("mobile_number",e.target.value),type:"tel",placeholder:"Phone"}),(0,m.jsx)(lg,{onChange:e=>f("email_id",e.target.value),type:"email",placeholder:"Work Email*",required:!0}),(0,m.jsx)(lg,{onChange:e=>f("company_name",e.target.value),type:"text",placeholder:"Company Name"}),(0,m.jsxs)(ug,{children:[(0,m.jsx)(pg,{children:"Please select your requirement(s):"}),(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"checkbox",name:"requirement",value:"Customer Management",onChange:g})," Customer Management"]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"checkbox",name:"requirement",value:"Inventory Managemen",onChange:g})," Inventory Managemen"]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"checkbox",name:"requirement",value:"Process Templates & Project Management",onChange:g})," Process Templates & Project Management"]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"checkbox",name:"requirement",value:"HR & Payroll",onChange:g})," HR & Payroll"]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"checkbox",name:"requirement",value:"Lab Management System",onChange:g})," Lab Management System"]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"checkbox",name:"requirement",value:"Geo-Tagging",onChange:g})," Geo-Tagging"]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"checkbox",name:"requirement",value:"Claim Management",onChange:g})," Claim Management"]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"checkbox",name:"requirement",value:"Enterprise Resource Planning",onChange:g})," Enterprise Resource Planning"]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"checkbox",name:"requirement",value:"Employee Engagement",onChange:g})," Employee Engagement"]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"checkbox",name:"requirement",value:"Others",onChange:g})," Others"]}),(0,m.jsxs)("label",{children:[(0,m.jsx)("input",{type:"checkbox",name:"requirement",value:"All",onChange:g})," All"]})]}),(0,m.jsx)(cg,{onChange:e=>{const t=e.target.value;p(t),i({...r,remarks:`${t}\nNumber of Employees: ${c}\nRequirements: ${s.join(", ")}`})},rows:"4",placeholder:"Are you currently using any HR tools? (Optional)"}),(0,m.jsxs)(dg,{onChange:e=>{const t=e.target.value;d(t),i({...r,remarks:`${u}\nNumber of Employees: ${t}\nRequirements: ${s.join(", ")}`})},children:[(0,m.jsx)("option",{value:"",children:"Number of Employees"}),(0,m.jsx)("option",{value:"1-10",children:"1-10"}),(0,m.jsx)("option",{value:"11-50",children:"11-50"}),(0,m.jsx)("option",{value:"51-200",children:"51-200"}),(0,m.jsx)("option",{value:"201-500",children:"201-500"}),(0,m.jsx)("option",{value:"500+",children:"500+"})]}),(0,m.jsx)(fg,{onClick:e=>(e.preventDefault(),h("https://www.atomwalk.com/api/add_lead/PMA_00001/",{lead_data:r})),children:"Book Meeting"})]})]})})]})};var hg=n(1094);const gg=n.p+"static/media/pricingelusrtion.f9102968b3ab2d7f7123.png",xg=(n.p,n.p,ia.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;
`,ia.table`
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
`,ia.span`
  color: green;
`,ia.span`
  color: red;
`,ia.span`
  color: #333;
  font-size: 0.85rem;
`,ia.span`
  cursor: pointer;
  user-select: none;
  font-size: 1.2rem;
`,ia.th`
  background-color: #f3e6f9;
  position: sticky;
  top: 0;
  z-index: 10;
`,ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #caf0f8;
`),bg=ia.h1`
  font-size: 3.2em;
  margin-bottom: 100px;
  text-align: center;
  color: #2c3e50;
`,yg=(ia.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
`,ia.div`
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
`),vg=ia.div`
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
`,wg=ia.h2`
  font-size: 2em;
  margin: 20px 0;
  font-weight: 800;
  color: #000933;
`,kg=ia.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`,Sg=ia.li`
  margin: 10px 0;
  cursor: ${e=>e.clickable?"pointer":"default"};
  &::before {
    content: "${e=>e.valid?"\u2713":"\u2717"}";
    margin-right: 10px;
    color: ${e=>e.valid?"green":"red"};
  }
`,jg=ia.div`
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
`,Ag=ia.p`
  font-weight: 500;
`,Cg=ia.button`
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
`,Eg=ia.div`
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
`,Rg=ia.div`
  font-size: 1.1em;
`,Pg=ia.button`
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
`,Og=ia.span`
  font-size: 1.5em;
  color: #454545;
  cursor: pointer;
`,Tg=ia.ul`
  list-style-type: none;
  margin-top: 10px;
  padding-left: 20px;
  color: #6b37d1;
`,Mg={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px",padding:"40px",overflow:"auto",maxHeight:"80vh"},overlay:{zIndex:"32333"}},zg=[{name:"Customer Management( CRM)",features:["Customer Details","Customer Sales/Payments Tracking (Bank/TDS)","Agreements","Customer Type/ Group"]}],Ig=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(null),a=()=>n(!0),o=()=>n(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(xg,{children:[(0,m.jsx)(bg,{children:"Pick the Right CRM Plan to Elevate Your Processes!"}),(0,m.jsxs)(yg,{children:[(0,m.jsxs)(vg,{children:[(0,m.jsx)("h3",{style:{color:"#ffff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"red",borderRadius:"5px"},children:"Free Trial"}),(0,m.jsx)(wg,{children:"\u20b90/Month"}),(0,m.jsx)(Ag,{children:"Seriously, free forever"}),(0,m.jsxs)(kg,{children:[(0,m.jsx)(Sg,{valid:!0,children:"3 User Access"}),(0,m.jsx)(Sg,{valid:!0,children:"30 days Vallidity"}),(0,m.jsx)(Sg,{valid:!0,children:"20MB Space"}),(0,m.jsx)(Sg,{children:"Multi Branch Access"}),(0,m.jsx)(jg,{onClick:a,children:"Click Hear to see the modules"})]}),(0,m.jsx)(Cg,{children:"Sign up for free"})]}),(0,m.jsxs)(vg,{children:[(0,m.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#2196f3",borderRadius:"5px"},children:"Basic"}),(0,m.jsx)(wg,{children:"\u20b95,000/Month"}),(0,m.jsx)(Ag,{children:"Billed at \u20b950,000 per year"}),(0,m.jsxs)(kg,{children:[(0,m.jsx)(Sg,{valid:!0,children:"5 User Access"}),(0,m.jsx)(Sg,{valid:!0,children:"1 Year Validity"}),(0,m.jsx)(Sg,{valid:!0,children:"200MB Space"}),(0,m.jsx)(Sg,{children:"Multi Branch Access"}),(0,m.jsx)(jg,{onClick:a,children:"Click Hear to see the modules"})]}),(0,m.jsx)(Cg,{children:"Start a free trial"})]}),(0,m.jsxs)(vg,{children:[(0,m.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"orange",borderRadius:"5px"},children:"Premium"}),(0,m.jsx)(wg,{children:"\u20b98,000/Month"}),(0,m.jsx)(Ag,{children:"Billed at \u20b975,000 per year"}),(0,m.jsxs)(kg,{children:[(0,m.jsx)(Sg,{valid:!0,children:"10 User Access"}),(0,m.jsx)(Sg,{valid:!0,children:"1 Year Vallidity"}),(0,m.jsx)(Sg,{valid:!0,children:"500MB Space"}),(0,m.jsx)(Sg,{valid:!0,children:"Multi Branch Access"}),(0,m.jsx)(jg,{lickable:!0,onClick:a,children:"Click Hear to see the modules"})]}),(0,m.jsx)(Cg,{children:"Start a free trial"})]}),(0,m.jsxs)(vg,{children:[(0,m.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#800080",borderRadius:"5px"},children:"Ultimate"}),(0,m.jsx)(wg,{children:"\u20b915,000/Month"}),(0,m.jsx)(Ag,{children:"Billed at \u20b9150,000 per year"}),(0,m.jsxs)(kg,{children:[(0,m.jsx)(Sg,{valid:!0,children:"25 User Access"}),(0,m.jsx)(Sg,{valid:!0,children:"1 Year Vallidity"}),(0,m.jsx)(Sg,{valid:!0,children:"1.2GB Space"}),(0,m.jsx)(Sg,{valid:!0,children:"Multi Branch Access"}),(0,m.jsx)(jg,{lickable:!0,onClick:a,children:"Click Hear to see the modules"})]}),(0,m.jsx)(Cg,{children:"Start a free trial"})]})]})]}),(0,m.jsxs)(rs(),{isOpen:e,onRequestClose:o,style:Mg,children:[(0,m.jsx)(Pg,{onClick:o,children:"\xd7"}),(0,m.jsx)(kg,{children:zg.map(((e,t)=>(0,m.jsxs)("div",{children:[(0,m.jsxs)(Eg,{onClick:()=>{return t=e.name,void i(r===t?null:t);var t},children:[(0,m.jsx)(Rg,{children:e.name}),(0,m.jsx)(Og,{children:r===e.name?"\u2212":"+"})]}),r===e.name&&(0,m.jsx)(Tg,{children:e.features.map(((e,t)=>(0,m.jsx)("ul",{style:{marginBottom:"5px"},children:(0,m.jsx)("li",{children:e},t)})))})]},t)))})]})]})},Dg=ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #caf0f8;
`,Lg=ia.h1`
  font-size: 3.2em;
  margin-bottom: 100px;
  text-align: center;
  color: #2c3e50;
`,Fg=(ia.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 30px;
  color: #2c3e50;
`,ia.div`
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
`),Ng=ia.div`
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
`,Bg=ia.h2`
  font-size: 2em;
  margin: 20px 0;
  font-weight: 800;
  color: #000933;
`,qg=ia.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
`,Hg=ia.li`
  margin: 10px 0;
  cursor: ${e=>e.clickable?"pointer":"default"};
  &::before {
    content: "${e=>e.valid?"\u2713":"\u2717"}";
    margin-right: 10px;
    color: ${e=>e.valid?"green":"red"};
  }
`,Wg=ia.div`
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
`,_g=ia.p`
  font-weight: 500;
`,Ug=ia.button`
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
`,Gg=ia.div`
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
`,Kg=ia.div`
  font-size: 1.1em;
`,Yg=ia.button`
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
`,Vg=ia.span`
  font-size: 1.5em;
  color: #454545;
  cursor: pointer;
`,Jg=ia.ul`
  list-style-type: none;
  margin-top: 10px;
  padding-left: 20px;
  color: #6b37d1;
`,Qg={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",borderRadius:"10px",width:"90%",maxWidth:"750px",padding:"40px",overflow:"auto",maxHeight:"80vh"},overlay:{zIndex:"32333"}},Zg=[{name:"HR & Payroll",features:["Employee Hire to Exit","Leave & Attendance","Travel & Expenses","Salary & Payroll","Advances","Claim Settlement"]}],Xg=()=>{const[e,n]=(0,t.useState)(!1),[r,i]=(0,t.useState)(null),a=()=>n(!0),o=()=>n(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(Dg,{children:[(0,m.jsx)(Lg,{children:"Choose the Perfect HRM Plan to Empower Your People!"}),(0,m.jsxs)(Fg,{children:[(0,m.jsxs)(Ng,{children:[(0,m.jsx)("h3",{style:{color:"#ffff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"red",borderRadius:"5px"},children:"Free Trial"}),(0,m.jsx)(Bg,{children:"\u20b90/Annum"}),(0,m.jsx)(_g,{children:"Seriously, free forever"}),(0,m.jsxs)(qg,{children:[(0,m.jsx)(Hg,{valid:!0,children:"3 User Access"}),(0,m.jsx)(Hg,{valid:!0,children:"30 days Vallidity"}),(0,m.jsx)(Hg,{valid:!0,children:"20MB Space"}),(0,m.jsx)(Hg,{children:"Multi Branch Access"}),(0,m.jsx)(Wg,{onClick:a,children:"Click Hear to see the modules"})]}),(0,m.jsx)(Ug,{children:"Sign up for free"})]}),(0,m.jsxs)(Ng,{children:[(0,m.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#2196f3",borderRadius:"5px"},children:"Basic"}),(0,m.jsx)(Bg,{children:"\u20b945,000/Annum"}),(0,m.jsx)(_g,{children:"Billed at \u20b9150/month/user"}),(0,m.jsxs)(qg,{children:[(0,m.jsx)(Hg,{valid:!0,children:"25 User Access"}),(0,m.jsx)(Hg,{valid:!0,children:"1 Year Validity"}),(0,m.jsx)(Hg,{valid:!0,children:"200MB Space"}),(0,m.jsx)(Hg,{children:"Multi Branch Access"}),(0,m.jsx)(Wg,{onClick:a,children:"Click Hear to see the modules"})]}),(0,m.jsx)(Ug,{children:"Start a free trial"})]}),(0,m.jsxs)(Ng,{children:[(0,m.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"orange",borderRadius:"5px"},children:"Premium"}),(0,m.jsx)(Bg,{children:"\u20b975,000/Annum"}),(0,m.jsx)(_g,{children:"Billed at \u20b9125/month/userr"}),(0,m.jsxs)(qg,{children:[(0,m.jsx)(Hg,{valid:!0,children:"50 User Access"}),(0,m.jsx)(Hg,{valid:!0,children:"1 Year Vallidity"}),(0,m.jsx)(Hg,{valid:!0,children:"500MB Space"}),(0,m.jsx)(Hg,{valid:!0,children:"Multi Branch Access"}),(0,m.jsx)(Wg,{lickable:!0,onClick:a,children:"Click Hear to see the modules"})]}),(0,m.jsx)(Ug,{children:"Start a free trial"})]}),(0,m.jsxs)(Ng,{children:[(0,m.jsx)("h3",{style:{color:"#fff",fontWeight:"800",fontSize:"2.5rem",padding:"10px",backgroundColor:"#800080",borderRadius:"5px"},children:"Ultimate"}),(0,m.jsx)(Bg,{children:"\u20b91,20,000/Annum"}),(0,m.jsx)(_g,{children:"Billed at \u20b9100/month/user"}),(0,m.jsxs)(qg,{children:[(0,m.jsx)(Hg,{valid:!0,children:"100 User Access"}),(0,m.jsx)(Hg,{valid:!0,children:"1 Year Vallidity"}),(0,m.jsx)(Hg,{valid:!0,children:"1.2GB Space"}),(0,m.jsx)(Hg,{valid:!0,children:"Multi Branch Access"}),(0,m.jsx)(Wg,{lickable:!0,onClick:a,children:"Click Hear to see the modules"})]}),(0,m.jsx)(Ug,{children:"Start a free trial"})]})]})]}),(0,m.jsxs)(rs(),{isOpen:e,onRequestClose:o,style:Qg,children:[(0,m.jsx)(Yg,{onClick:o,children:"\xd7"}),(0,m.jsx)(qg,{children:Zg.map(((e,t)=>(0,m.jsxs)("div",{children:[(0,m.jsxs)(Gg,{onClick:()=>{return t=e.name,void i(r===t?null:t);var t},children:[(0,m.jsx)(Kg,{children:e.name}),(0,m.jsx)(Vg,{children:r===e.name?"\u2212":"+"})]}),r===e.name&&(0,m.jsx)(Jg,{children:e.features.map(((e,t)=>(0,m.jsx)("ul",{style:{marginBottom:"5px"},children:(0,m.jsx)("li",{children:e},t)})))})]},t)))})]})]})},$g=ia.div`
  background-color: white;
  color: blue;
  width: 100%;
  /* padding-top: 10px; */
  padding-bottom: 10px;
  /* height: 1472px; */
`,ex=ia.div`
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
`,tx=ia.div`
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
`,nx=ia.div`
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
`,rx=ia.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 51.008px;
  font-weight: 600;
  line-height: 61.2px;
  margin: 0px 0px 16px;
`,ix=ia.p`
  color: #1c1b1f;
  width: 73%;
  font-size: 21px;
  word-wrap: normal;
  margin: 0px 0px 24px;
  @media (max-width: 768px) {
    width: 100%;
  }
`,ax=ia.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 60%;
  line-height: 26px;
  padding: 44px 0px 0px;
`,ox=ia.button`
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
`,sx=ia.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`,lx=ia.div`
  line-height: 26px;
  img {
    width: 120%;
    height: auto;
    border-radius: 15px;
  }
  @media (max-width:768px) {
    display: none;
  }
`,cx=(ia.div`
  line-height: 26px;
  margin: 144px 0px;
  width: 100%;
  /* margin-top: 180px; */
  @media (max-width:768px) {
    margin-top: 70px;
  }
`,ia.h2`
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
`,ia.span`
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
`,ia.div`
  color: #1c1b1f;
  line-height: 24px;
  margin: 0px 417.788px 48px 417.775px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0px ;
  }
`,ia.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 30px;
  max-height: 600px;
  overflow-y: auto;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 10px;
`,ia.table`
  width: 100%;
  border-collapse: collapse;
  position: relative;
`,ia.th`
  background-color: #FCE6FF;
  color: #1c1b1f;
  padding: 50px 20px;
  font-size: larger;
  text-align: center;
  border: 2px solid #8900c4;
  position: sticky;
  top: 0;
  z-index: 2;
`,ia.td`
  padding: 20px;
  text-align: left;
  border: 1px solid #ddd;
`,()=>{const e=(0,t.useMemo)((()=>[{modulePlane:"Number of Employees",starter:"Limited",essential:"Unlimited",growth:"Unlimited",enterprise:"Unlimited"},{modulePlane:"Cost Per Additional Employee",starter:"Not Applicable",essential:"\u20b930/ month",growth:"\u20b960/ month",enterprise:"\u20b9100/ month"},{modulePlane:"Core HR",starter:"Limited",essential:"\u2713",growth:"\u2713",enterprise:"\u2713"}]),[]),n=ia.div`
color: #454545;
font-size: 15px;
margin-bottom: 5px;
`,r=(0,t.useMemo)((()=>[{Header:"Modules and Features",accessor:"modulePlane"},{Header:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:"Starter"}),(0,m.jsx)("div",{children:"\u20b9 0 / month"}),(0,m.jsx)(n,{children:"(Includes 25 Employees)"}),(0,m.jsx)(ox,{children:"Start Free Trial"})]}),accessor:"starter"},{Header:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:"Essential"}),(0,m.jsx)("div",{children:"\u20b9 3495 / month"}),(0,m.jsx)(n,{children:"(Includes 50 Employees)"}),(0,m.jsx)(ox,{children:"Start Free Trial"})]}),accessor:"essential"},{Header:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:"Growth"}),(0,m.jsx)("div",{children:"\u20b9 5495 / month"}),(0,m.jsx)(n,{children:"(Includes 50 Employees)"}),(0,m.jsx)(ox,{children:"Start Free Trial"})]}),accessor:"growth"},{Header:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:"Enterprise"}),(0,m.jsx)("div",{children:"\u20b9 7495 / month"}),(0,m.jsx)(n,{children:"(Includes 50 Employees)"}),(0,m.jsx)(ox,{children:"Start Free Trial"})]}),accessor:"enterprise"}]),[]),{getTableProps:i,getTableBodyProps:a,headerGroups:o,rows:s,prepareRow:l}=(0,hg.useTable)({columns:r,data:e});ia.div`
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
`,ia.div`
  display: flex;
  flex-direction: column;
  line-height: 26px;
  width: 50%;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    width: 100%; /* Take full width on mobile */
  }
`,ia.div`
  display: flex;
  flex-direction: column;
  line-height: 26px;
  width: 50%;

  /* Adjustments for mobile devices */
  @media (max-width: 768px) {
    width: 100%; /* Take full width on mobile */
  }
`,ia.div`
  line-height: 26px;
  margin: 0px 0px 48px;
  `,ia.div`
  color: #1c1b1f;
  font-family: Centra;
  font-size: 38px;
  font-weight: 600;
  line-height: 45.6px;
  margin: 0px 0px 32px;
  @media (max-width: 768px) {
    text-align: center;
  }
  `,ia.h5`
  color: #8900c4;
  font-family: Centra;
  font-size: 21.008px;
  font-weight: 600;
  line-height: 24px;
  `,ia.h6`
  color: #1c1b1f;
font-family: Centra;
font-weight: 600;
line-height: 19.2px;
  `,ia.span`
  color: #1c1b1f;
  font-weight: normal;
  font-size: 17px;
  font-weight: 500;
  line-height: 18px;
  `,ia.span`
  color: #1c1b1f;
font-size: 21.008px;
line-height: 31.504px;
@media (max-width: 768px) {
  text-align: center;
    display: flex;
    align-items: center;
}
  `,ia.div`
  background-color: #eefaf4;
  border-radius: 16px;
  line-height: 26px;
  margin: 0px 0px 12px;
  padding: 24px 32px;
  `,ia.div`
  background-color: #fff8e6;
  border-radius: 16px;
  line-height: 26px;
  margin: 0px 0px 12px;
  padding: 24px 32px;
  `,ia.div`
  background-color: #e6ffff;
  border-radius: 16px;
  line-height: 26px;
  margin: 0px 0px 12px;
  padding: 24px 32px;
  `,ia.div`
  background-color: #fce6ff;
  border-radius: 16px 16px 0px 0px;
  line-height: 26px;
  padding: 24px 32px;
  `,ia.div`
    border-color: #e8e8e9;
    border-radius: 0px 0px 16px 16px;
    border-style: solid;
    border-width: 0.8px;
    line-height: 26px;
    padding: 36px 158px 36px 48px;
  `,ia.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    line-height: 26px;
  `,ia.div`
    display: flex;
    line-height: 26px;
  `,ia.div`
    background-color: #76d3a8;
    border-radius: 50%;
    display: flex;
    line-height: 26px;
    margin: 8px 8px 0px 0px;
    width: 10px;
    height: 10px;
  `,ia.li`
    display: list-item;
    line-height: 26px;
    list-style: none;
    text-align: left;
  `,ia.div`
  align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
line-height: 26px;
margin: 144px 71.04px;
  `,ia.div`
  align-items: center;
display: flex;
flex-wrap: wrap;
gap: 16px;
justify-content: center;
line-height: 26px;
  `,ia.div`
    background-color: #eefaf4;
    border-radius: 20px;
    line-height: 26px;
  `,ia.div`
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 26px;
  margin: 24px 0px;
  `,ia.h3`
    color: #1c1b1f;
    font-family: Centra;
    font-size: 28px;
    font-weight: 500;
    line-height: 33.6px;
    text-align: center;
  `,ia.div`
    border-radius: 12px;
    display: inline;
    line-height: 26px;
    img {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
  `;return(0,m.jsxs)($g,{children:[(0,m.jsx)(ex,{children:(0,m.jsxs)(tx,{children:[(0,m.jsxs)(nx,{children:[(0,m.jsx)(rx,{children:"Challenge Our Pricing See the Value!"}),(0,m.jsx)(ix,{children:"Get access to premium features without breaking the bank. We believe in providing powerful tools at every level, so you get the value you deserve. Explore our plans to find the right fit for your needs and budget."}),(0,m.jsx)(ox,{onClick:()=>{window.location.href="/demo.html"},children:(0,m.jsx)(sx,{children:"Discuss Price"})})]}),(0,m.jsx)(ax,{children:(0,m.jsx)(lx,{children:(0,m.jsx)("img",{src:gg,alt:"Pricing Challenge Background"})})})]})}),(0,m.jsx)(sd,{}),(0,m.jsx)(Ig,{}),(0,m.jsx)(Xg,{}),(0,m.jsx)(au,{})]})}),dx=ia.div`
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
`,ux=ia.div`
  max-width: 400px;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,px=ia.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`,fx=ia.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,mx=ia.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  &::before {
    content: "✔";
    color: green;
    margin-right: 0.5rem;
  }
`,hx=ia.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,gx=ia.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,xx=ia.form`
  display: flex;
  flex-direction: column;
`,bx=ia.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`,yx=ia.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
`,vx=ia.button`
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
`,wx=ia.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 1rem;
`,kx=()=>(0,m.jsxs)(dx,{children:[(0,m.jsxs)(ux,{children:[(0,m.jsx)(px,{children:"Get Expert Advice"}),(0,m.jsxs)(fx,{children:[(0,m.jsx)(mx,{children:"Talk to Sales"}),(0,m.jsx)(mx,{children:"Free Demo"}),(0,m.jsx)(mx,{children:"Get Expert Advice"}),(0,m.jsx)(mx,{children:"Pricing Options"})]})]}),(0,m.jsxs)(hx,{children:[(0,m.jsx)(gx,{children:"Fill out this quick form and we\u2019ll get back to you shortly"}),(0,m.jsxs)(xx,{children:[(0,m.jsx)(bx,{type:"text",placeholder:"Enter your name"}),(0,m.jsx)(bx,{type:"email",placeholder:"Enter your work Email ID"}),(0,m.jsx)(yx,{placeholder:"Let us know about your research requirement, a topic you have in mind, or a goal you are trying to achieve.",rows:"4"}),(0,m.jsx)(vx,{type:"submit",children:"Contact Sales"})]}),(0,m.jsx)(wx,{children:"By filling out and submitting this form, you are agreeing to our Privacy Policy and agreeing to receive email communications regarding events, webinars, research, and more."})]})]});n.p,n.p,n.p,n.p,n.p,n.p,ia.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #d6e7ff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`,ia.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,ia.div`
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
`,ia.div`
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
`,ia.div`
  background-color: #ffcc00;
  padding: 15px;
  border-radius: 50%;
  margin-right: 20px;
`,ia.img`
  width: 50px;
  height: auto;
`,ia.div`
  display: flex;
  flex-direction: column;
`,ia.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`,ia.p`
  font-size: 1rem;
  color: #666;
`,ia.section`
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
`,ia.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top:130px;
  }
`,ia.h1`
  font-size: 2.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,ia.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,ia.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,ia.img`
  width: 150px;
  height: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 130px;
  }
`,ia.div`
  display: flex;
  gap: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
`,ia.img`
  width: 500px;
  height: auto;

  @media (max-width: 768px) {
    width: 180px;
  }
`;const Sx=n.p+"static/media/Lab_Management_System_illustration.ffa6ac20348fd915876c.png",jx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAB1CAYAAADkzsULAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA42SURBVHgB7Z1NUxzHGcef7l1WOHJKi+Q4VTlII5K44oArUJVTLoZrUqnAJ9BySBydkD6Blk8g6eSKc2D5BCKVsp0bOKdUchAuCZSKK9qxD0nZsQyqWJYEO93uZ3YXrWD2Zbpnenpmn18VAgapQOz859evTzMgjPDWZfXV53BFclgCCR5ewusM4EAy2JECPhYSNv95lW0DkUsYEFpgOL7TglUu4JoEqI7wT3zB4JYM4E8qMD4QuYFCosFP3pVeicMWdKwRF2WdumjBBoUlH1BIYmIakB58FZYGhcV9KCQxSDAgvVBYHIdCEoOZ9+SW6pwvQDqEYamU4fbOCjsAwhkoJCMy+55clRJuQfr46q2++w7bAMIJKCQjkFIzaxg+UFicgAMxlJK6WcFuQKDz/Rozf5BN9XYFiMwgkwyhY5EmZI8PZJZMIJMMoWMRF/CAzJIJZJIBOGSRKHwgs1iBTDIAhywShQdkFiuQSfrguEWi8IHMkgpkkj44bpEoPCCzpAKZJIIcWiQKH8gsiUAmiSCHFonCAzTLe3JLhX4BCG3IJCcoiEVOw2A7CGCNNn/Fh0xygoJY5DQSFnBpDZklPmSSHgprkSgYNDpm8YEYCJmkh8JaJAoJNXwgKLOs48MBiL6QSTqMlUWiILP0xSmTeHf3PfU2SlGFxBkri0RBZulLZibBMJQmYAmYeFsyttApx/MCBj7D3XrANksCPvpkdmoHUmLsLRIFmeUY6yHBcPBJWIVAXlPfPY41fOCsIZ7Bhj8/5UOCzLwrG8qpNEsdBYXFbki8+/tzjMk7zHgDk2yIQ76WRFhm1XCobO86JPpzoH5Ht/Z+y9ZgDLEWkum9/VWQMuE94uZhSbm4Q7FoT0iujJtVrIRk+sH+DRCyDqmhFxayiBZ+IGBxnIKS+uiWt/flUroBQViNV2RzevfROo6QjfqvZAluABGXsCjGOI2ApRoSvGG54OtgjdHDghahZpY2XqkEFl/XbEk1JKyi2vvxRrCS+s5Dw0IWMUQ9YMZl30pqIcF+iPkolinRYfnpu7JGFkkEG8X6MieVjnvYzFI3J7jF8TzL2b9XbReaKyydTvw2FJhUTMImgjq4h4cDCJzD3aOLTz15RgBhDmewBAWnDAmDFlEThu62Vcuy2rr4DILXD6H0RQXKn58B9pwWQxvgQcFJ/O5w1CKnkJMCMCzP3/o/tF5/DoQeqr1+DgpOoiFpW4QbWUTiokYJ2+oDK8cPYFiO3vgGnv38MYWFiCTRkBhaxBciWGzOnL/cnD2/+HD2/BR+HgbGAhQWPdRD7TEUnMRCYmgRX3C26L/1ve2XLqrPMTAUFoeRkNoWBldILCQmFhGytey/2X/dFYXFXdQY4TYUnETmSczmRVjj4czUSpx/4d373wLjpZvqh58DS7BnHMqfTUL5izNAtMH+49477DIUnERMUjojtdfxCA6x9yiEZpk5Py+kWJHtSoWpQ2Y5DWPFtwhibJIf3dtfEFxqLjePb5EovPtf1lR/yOoyGDJLONt+eRyWzBubRJak9kJBHYtE4c++1sBRMTKLRRg0xmVPiZFJXLBIFFmZZeKTs1B6nPgiBicZF4sgRiZxwSJRoFle+evUWuVfZ8Ob1wZolkM1e3/44ydQ+HVhY2QRRPuxF1pE6taUZY1BQ75JwDjcwLVZ+IbrtI4uPg1v5LQJvn8I4lyr0P0VrJ4CY4R2SAIu13XbamlaBAn3i/Q0tWyHpdtfwfcTn70ChWLMLIJohSRs82u39+1YJOq67bDgAkqkSEEZN4sgWiHBTjFoYtsiUdgMS6GCMoYWQWKHJK8WicJWWDAorMWg/J9JyDPjaBEk9tCPyxaZ/WM42uZBTDAoZ+59N3zapzUahkHJ9ajXmFoEiWUS1y0iBdRAE9ydiCNSpc8r4QgVThAmaRZZlnA0/Q1UHrwKecQVi8g7UA1KsCAZLLASXGISPDWB/HJFHhZOKB/IAD5W77cnfm22fCbWANXl3a+auiERnF1OMyTYF1FNrcRqQeFTP42wTP6tGja9coWyyO7vWCoTv6OAwTiqwBJncEWzys2B+o1vCgEbOoEZuW2Rg77IKiRI1yzYDMPmWFK0fvAM8kaWFgn+AqtBBZrqRl03KANVVbbBh+hW6wPYOnw/3urxkR9pLlvExvkiaJajS0/DTr4J/HE5DF5uyMgiR39Wzal2y8CDFFD3coMfwhpbHr7WbySTuG4R9Z9YgJRBs+Ayl8l/nAtvdF1wNj5PZGERtAdrFzL3ICXQLMpQW6op5w37uyOFxOURrRBmcfOVCkvYBHs0AbqIvIxyZTCi1Xof1lWH21ZlSE8F5a5qgg3cdj40JEYWkfJ22hZB1FPnZ2AZXPGr3QGfzEdIbFsEA6Le1cAuVaWVxqCgDA2JgUV8UeJ2ngjSflFuDAh7UoLCYtkiwQdwE+wH5AUqKNgPivrSwJAYWUTIDRsWyRRdk1havm+CTYsEH8INKeEaZIxqkdyJ6qMMfLWMLFLmDbCErd2Ip76vZrOJu15W1aJFnn6oJgOFM8eDV0UF7py82PfVypNFWAAfgWVwSFieDSAu3PEmGj5wbFpkQrh1HJ/6/8+pZle991rfkOTFIghj9guk4ZyJDuxrx/sxalbalkXUpF4NUhzm1QUnpnubXZEhyVtf5D6ej2GxvE24ZEVzUrH0VXKz90mDFlENyAZYQt18rp42Vm2VX/SRIkNiZJEWtzXG/RLMYhNB2yKqo28yv5I6ZJFjlE2u4Jox/PhUSEwswjir+/NTVqrBnwRtwkT6QTGxCHc4INYtwsD18xarRxPtIemXQtIpeq1tkX+/ObUBGaKCUsenIaSIrkUQp3cnWrRI+ITOwZmVnMNvwvcvXZyEKyYWAQfYvcpqaRnFyCKPy86eqGXbIrgfBPKAhDkM9PGrhhaRItwfrkPmFukFjaLG3nHlaqJNv6JaRD0Y6zZn16XFtXaG4D4W7zgkRbBIL3tXWSMQMJ9U88toROvzitHK4TRBi+y+w6w+4LJYa6cLD2DuOCRFsUgv+HTsNL8WwfBckyJbBGzD7K+100VZr20S0xEtcBwc+dr9PVvUDYupRVzui9i2SOcbe5ATVOf9Uvjqlbj+MW6uWiSK3rDEWe91+MYT0IUskn942GHXHI7Lg0WiwLDgCU3YuR8WluBcS3s3IVmkGHCYCBZAj1xZJArs3A8LS+si9UXGGSHgsZr4HC+LRNEvLGSRlGDZbG3QhSsugQYB2F+enjYnw0IWSQf1dP4UcgJTAz1c3RA6Ezt+kXcdYlgOf3GwQhZJjdyc/S5K4HPNMevcjHPrguevgCZkkSE/g8xNSA4qv4Id3cddFc9Sh4JiMm9EFhlOp9RoJqvF4yA7XQquPtL6YTkvravh40IaxaTOGFlkNGTKq7WToAzt2tLcYKTB4xV5F+dZoECQRayxCW7jw2HXJEKajFJhUJrTu4/WixIWsogdwiaXxS3XsWFQZ8vtVhYXIBJINKsVISwmFpFHfJM/5WtZlTcahKuz69Ldk7P88i9fNAc5tMo7uv2S0+Q7LCYWkWfkddzHouYAcG2YU2FxdXYdbaL6JrfBNQK43vspwz+m7z2qA2cpVK6QDXHI1/x59+dU0CKccc1hX9Z4ODO10nsFj4NQHb+a4Pr7dJIAw4oTpOAo4clVFbgLjhSFUKFdU+Gt914LQ4KjVEx1wtN7Md0PS1rnr4Rnp+CTnGdW+KDm+kJGrOI4IcKgZDtaymBTNbOWT1/ugPMealg3zWp6vrJVQzyDDdfCkrRFosgkLBkf4xaHzqE9mVVzVEHY4Yeqqbx8uuvBej+Zvv/ommqY34R0cS4sNk/xshiWA9y+nKcTc7EWlxpAx/vPqlEGBaTz9ZdJr39yCifCYmQRIdcevnWhDhpYCMt11czKpFCgCXieoQoKFq32wAYStktHsNwvIAiLumjJKF18XHaf1d4UA4v4yiKLpgs90wgLdj73ruZ3K0Onj5LqcXAIjqypTvrQIx9Yvy94D/Y9JuSWxZEZ62HJyiJRJBWWvAekF6zuztq/Dw+SxcftEKMeV80GfRFHvXhZYPMr0eOfh2AtLFlbJAqDsGBzYS2PTaxBoFVKAdQ5C6spmvZVfJxJ750oHAU2yl9qWwVuMpBLYI9Uw+KSRaLozrPIdqnNQXt+DqSEDSHhVp466XHB+ZSjCixxqR4e7eJ2owbmoLOYcnNUc5xkpJB0wWFixko3GLNapjKVsLhokX5gYCY4zAW4QY4dVzpvqk7nx19Pwo6/wpxfdp40YQc/AK9TDbLKOZzD6+GedA5NGcCnykA7o5zTPoxYIemS97C4bhHCLbRC0iVcEMj4DcvLLozDYmKRhzPnnV3iQaSD0eYHf/a1RlPdNEKKofWrEgQLezem1Y3+wwf7sUeCpvf2V4tcrZJIHiOTnMR1s4Tnr1S0h7XJImNKotvoXDcLq4ibZBEiLoma5CSumKW9ylmsM2C6Q9hkkTEm1ZB0ySQsEg7UbO2OmkPAIVOjQ2NU6Gp5L+lK6GMlJF0yMospZJExx2ppj4z6LEZQX4SwapKT5MAsZBECMi0S5bpZyCIEkqlJeumsOL4mObviglkkyM3mzIVlIMYeZ0LSBVcc85aoZRoWNTImSmy+yJXzidFxLiRdMg2LlNcfzl4o1L4MQh9nQ9KlGxZL++5plS9xCudD0iXc+BWIOmMstSojUsqN5uyFGhBED7kJSZfUwiLlbdXEGloUgBg/cheSLomFJayDrJpY1Ach+pDbkHTBsEAQLOhNSrKG4LBGo1jEIHIfkl68+1/McT7xthRyicGL/eDHKGuoScsdJuVHosVv+fNTY7c3nIhPoUIShXf3v177o8kDCgWhw7ci8mJ9X5RoDQAAAABJRU5ErkJggg==",Ax=n.p+"static/media/clock.cafb3982fb150a806a77.png",Cx=n.p+"static/media/premium.32087c7a3627bd39605f.gif",Ex=n.p+"static/media/optimization.63421cd7d827365fb19f.png",Rx=n.p+"static/media/access.21a604edb66b884a0028.png",Px=n.p+"static/media/best-customer-experience.973ae41dfe6d7a9c02d2.png",Ox=n.p+"static/media/accessible.3ff76038314c071df14d.png",Tx=n.p+"static/media/easy-to-use.cae7d597f3ab4e038c1d.png",Mx=n.p+"static/media/administer.85579c0cb192be159e06.png",zx=n.p+"static/media/reconciliation.96079e275f4303921aeb.png",Ix=n.p+"static/media/reduce-time.3ede8db68ce291b7857d.png",Dx=n.p+"static/media/better_experience.904fb1df701730ef3db1.png",Lx=n.p+"static/media/transparency.12d7bff3d2e4b289e06b.png",Fx=n.p+"static/media/brand_reputaion.6475ab9d5f12592403af.png",Nx=n.p+"static/media/money_saving.6876708d842414cd1331.png",Bx=n.p+"static/media/customize.a3aced7d97180108ee6a.png",qx=n.p+"static/media/encrypted.1fc2981c67e7814af39c.png",Hx=n.p+"static/media/quality.020315089db2986e9675.png",Wx=n.p+"static/media/scalability1.3052679c770730320682.png",_x=ia.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #fff;
  
`,Ux=ia.h1`
  font-size: 2rem;
  color: #000;
  margin-bottom: 10px;
  font-weight: 600;

  span {
    color: #6a1b9a; /* Purple highlight */
  }
`,Gx=ia.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Kx=ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,Yx=ia.div`
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
`,Vx=ia.h3`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 10px;
  font-weight: 600;
`,Jx=ia.p`
  color: #6e6e6e;
  font-size: 0.9rem;
  line-height: 1.4;
`,Qx=[{title:"Optimize",text:"maximize time & effort efficiency",bgColor:"#d9f5e3",icon:Ax},{title:"Streamline",text:"simplify claim management",bgColor:"#f2e3ff",icon:Mx},{title:"Verify",text:"ensure precise claim reconciliation",bgColor:"#ffe8cc",icon:zx},{title:"Accelerate",text:"minimize claim processing delays",bgColor:"#fff1d0",icon:Ix},{title:"Enhance",text:"deliver a seamless claim experience",bgColor:"#d7faff",icon:Dx},{title:"Elevate",text:"increase claim transparency",bgColor:"#d9f5e3",icon:Lx}],Zx=[{title:"Save",text:"time & effort",bgColor:"#d9f5e3",icon:Ax},{title:"Administer",text:"uniform leave policy",bgColor:"#f2e3ff",icon:Mx},{title:"Ensure",text:"accurate leave accounting",bgColor:"#ffe8cc",icon:zx},{title:"Reduce",text:"unnecessary expense",bgColor:"#fff1d0",icon:Ix},{title:"Deliver",text:"an outstanding employee experience",bgColor:"#d7faff",icon:Dx},{title:"Improve",text:"employer brand image",bgColor:"#d9f5e3",icon:Lx}],Xx=[{title:"Maximize Efficiency",text:"Save valuable time and effort with seamless processes",bgColor:"#d9f5e3",icon:Ex},{title:"Unmatched Quality",text:"We consistently deliver top-notch results for every user",bgColor:"#f2e3ff",icon:Cx},{title:"Lightning-Fast Access",text:"Enjoy quick and easy access to our application anywhere, anytime",bgColor:"#ffe8cc",icon:Rx},{title:"Seamless Experience",text:"Experience flawless and intuitive user interactions",bgColor:"#fff1d0",icon:Px},{title:"User-Centric Design",text:"Delivering an outstanding and effortless user experience",bgColor:"#d7faff",icon:Tx},{title:"Universal Accessibility",text:"Access our platform seamlessly on both mobile and web",bgColor:"#d9f5e3",icon:Ox}],$x=[{title:"Streamline",text:"eliminate time-consuming paperwork",bgColor:"#d9f5e3",icon:Ax},{title:"Optimize",text:"cut unnecessary operational expenses",bgColor:"#fff1d0",icon:Nx},{title:"Boost",text:"elevate employer brand reputation",bgColor:"#d9f5e3",icon:Fx},{title:"Standardize",text:"enforce a consistent company policy",bgColor:"#f2e3ff",icon:Mx},{title:"Performance",text:"Bulk processing with high TPS.",bgColor:"#ffe8cc",icon:zx},{title:"Reliabilty",text:"24/7 availability with 100% uptime on mobile and web ",bgColor:"#d7faff",icon:Dx}],eb=[{title:"24/7 Access with less man power",text:"Schedule Equipment Anytime, Seamlessly",bgColor:"#d7faff",icon:Ax},{title:"Real-Time Availability!",text:"Stay Updated, Avoid Surprises",bgColor:"#d9f5e3",icon:Fx},{title:"Hassle-Free User Management!",text:"Group, Control, Assign Roles",bgColor:"#fff1d0",icon:Mx},{title:"Zero Booking Conflicts!",text:"Smart Scheduling, Uninterrupted Operations",bgColor:"#f2e3ff",icon:Nx},{title:"Performance",text:"Bulk processing with high TPS.",bgColor:"#ffe8cc",icon:zx},{title:"Stay Audit-Ready",text:"Automated Logs, Effortless Records ",bgColor:"#d9f5e3",icon:Dx}],tb=[{title:"Quality",text:"Schedule Equipment Anytime, Seamlessly",bgColor:"#d7faff",icon:Hx},{title:"Data Security",text:"Stay Updated, Avoid Surprises",bgColor:"#d9f5e3",icon:qx},{title:"Scalability ",text:"Group, Control, Assign Roles",bgColor:"#fff1d0",icon:Wx},{title:"Customization",text:"Smart Scheduling, Uninterrupted Operations",bgColor:"#f2e3ff",icon:Bx},{title:"Performance",text:"Bulk processing with high TPS.",bgColor:"#ffe8cc",icon:zx},{title:"Stay Audit-Ready",text:"Automated Logs, Effortless Records ",bgColor:"#d9f5e3",icon:Dx}],nb=[{title:"24/7 Access with less man power",text:"Schedule Equipment Anytime, Seamlessly",bgColor:"#d7faff",icon:Ax},{title:"Real-Time Availability!",text:"Stay Updated, Avoid Surprises",bgColor:"#d9f5e3",icon:zx},{title:"Efficiency",text:"Automate tasks like orders creation or generating invoices",bgColor:"#fff1d0",icon:Mx},{title:"Business Growth",text:"Payment reminders and tax invoice creation simplify cash flow management.",bgColor:"#f2e3ff",icon:Nx},{title:"Performance",text:"Bulk processing with high TPS.",bgColor:"#ffe8cc",icon:Fx},{title:"Stay Audit-Ready",text:"Tracking all the detailed changes",bgColor:"#d9f5e3",icon:Dx}],rb=e=>{let{data:t}=e;const n="LMS"===t?tb:"Claim"===t?Qx:"Customer"==t?Xx:"HR"==t?$x:"Equipment"==t?eb:"Sales and Procurement"==t?nb:Zx;return(0,m.jsxs)(_x,{children:[(0,m.jsxs)(Ux,{children:["All-in-One ",t," Management, ",(0,m.jsx)("span",{children:"Faster and Easier."})]}),(0,m.jsx)(Gx,{children:n.map(((e,t)=>(0,m.jsxs)(Kx,{children:[(0,m.jsx)(Yx,{bgColor:e.bgColor,children:(0,m.jsx)("img",{src:e.icon,alt:`${e.title} Icon`})}),(0,m.jsx)(Vx,{children:e.title}),(0,m.jsx)(Jx,{children:e.text})]},t)))})]})},ib=n.p+"static/media/faq.0aaf4c93b37d158961e9.png",ab=ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: aliceblue;
  
  @media (min-width: 768px) {
    padding: 40px 20px;
  }
`,ob=ia.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #663399;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,sb=ia.div`
  width: 100%;
  max-width: 700px;
`,lb=ia.div`
  background-color: #f8f5ff;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,cb=ia.div`
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
`,db=ia.div`
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
`,ub=ia.div`
  text-align: center;
  margin-top: 50px;
  padding: 30px;
  width: 100%;
  max-width: 700px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`,pb=ia.h2`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 20px;
`,fb=ia.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 30px;
`,mb=ia.a`
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
`,hb=ia.img`
  max-width: 200px;
  margin-bottom: 10px;
`,gb=e=>{let{data:n,res:r}=e;const[i,a]=(0,t.useState)(null),o="crm"==n?[{question:"What is CRM, and how does it help my business?",answer:"Customer Relationship Management (CRM) solution manages Lead, Customer and Channel Partner data efficiently on a real time basis and can be accessed by all the stakeholders. Hence eliminating the risk of duplication of data . Operations like lead and customer tasks and Campaign Management can be tracked/completed efficiently. By consolidating these functions, CRM enhances customer satisfaction, boosts sales effectiveness, and improves overall business efficiency, leading to better customer retention and increased profitability."},{question:"Who can benefit from using the CRM module?",answer:"The CRM module benefits a wide range of users across various roles within an organization, including sales teams, customer service representatives, marketing departments, channel partners, and managers. Sales teams can use it to manage leads, track opportunities, and enhance customer interactions. Customer service representatives benefit from improved case management and better tracking of customer issues. Marketing departments can leverage CRM for targeted campaigns, lead nurturing, and performance tracking. Channel partners gain from streamlined lead distribution and incentive management. Managers benefit from comprehensive insights into sales performance, customer satisfaction, and team productivity, enabling them to make informed decisions and drive business growth."},{question:"How can I add or update customer details?",answer:"To add or update customer details, navigate to the CRM section in the left menu and select the \u2018Customer List\u2019 tab. A comprehensive list of customers will be displayed. To update an existing customer\u2019s information, click on the desired customer\u2019s name to view their details. You will then find an \u201cUpdate\u201d button; click this to access and modify any of the fields as needed. After making the required changes, simply click \u201cSave\u201d to update the customer details. To add a new customer, click the \u201cAdd Customer\u201d button located in the top-right corner of the screen. Fill out the necessary details in the provided fields and click \u201cSave\u201d to record the new customer. The newly added customer will now appear in the Customer Details screen."},{question:"Can I import/export customer data?",answer:"Yes, you can import and export customer data. On the Customer Details page, there is an option available in the top right corner. To import data, simply click on the \u201cUpload\u201d option, and then provide the necessary details in the format required. After submitting the information, the system will fetch and upload the customer data into the CRM. To export data, a similar process can be followed from the same menu, allowing you to download customer details in a compatible format for backup or external use. This feature ensures seamless management of customer information across your business systems."},{question:"Does the CRM support customer segmentation?",answer:"Yes, our CRM supports customer segmentation through fields like Customer Group, and Customer Group (Secondary). While adding a new customer, you can assign values to these fields to categorize customers based on your segmentation criteria. This enables you to organize customers effectively, tailor your marketing strategies, and provide personalized services based on their group or type."},{question:"How can I track sales leads in the CRM?",answer:"To track sales leads in the CRM, navigate to the CRM section from the left menu and select the Leads tab. Here, you can view all your leads in a centralized dashboard, organized by their status in the sales pipeline. Each lead entry provides details like contact information, lead source, and current stage. You can update the status of a lead as it progresses through the sales funnel, add notes or tasks for follow-ups, and scheou to focus on high-priority opportunities. This streamlined process ensures efficient tracking and management of sales leads."},{question:"Can I create and send marketing campaigns through the CRM?",answer:"Yes, you can create and send marketing campaigns through the CRM. Users can choose to create custom templates or use system-generated templates for their campaigns. To get started, navigate to the CRM section in the left panel and click on Customer Campaigns. This will display a list of existing campaigns. To create a new one, click on the Add Campaign button in the top right corner. Fill in all the "},{question:"Does it support email templates and personalization?",answer:"Yes, the CRM supports email templates and personalization. You can create custom email templates or use predefined system templates to streamline your marketing and communication efforts. These templates can be personalized by including dynamic fields such as the recipient\u2019s name, company, or other customer-specific details, ensuring each email feels tailored and relevant. This functionality makes it easy to maintain consistency in branding while delivering a personalized experience to your audience. Additionally, templates can be saved for reuse, improving efficiency and enhancing the effectiveness of your email campaigns."},{question:"How can I track campaign performance?",answer:"You can track campaign performance easily within the CRM. When creating a campaign, there are two options: Response Yes Button Text and Response No Button Text, where you can specify the labels for user reactions, such as Like and Dislike or any other relevant terms. Once the campaign is sent, recipients can interact with these buttons. To view the responses, go to the campaign list and click on List Responses for the specific campaign. This will display all the recipient responses, allowing you to gauge the campaign's success and gather valuable feedback for future improvements."},{question:"Can I automate customer lifecycle management? ",answer:"Yes, the CRM allows you to automate customer lifecycle management. It enables you to set up automated workflows that manage the entire customer journey from initial lead capture, through the sales process, to customer onboarding, and ongoing relationship management. You can automate follow-up actions, send personalized communications, track customer interactions, and manage renewals or upgrades based on predefined criteria. This automation ensures a consistent and efficient approach to managing customer relationships, enhances customer satisfaction, and drives retention and growth throughout the customer lifecycle."},{question:"Can I add custom fields or modules?",answer:"Yes, the CRM allows you to add custom fields or modules to tailor the system to your specific business needs. You can create and modify custom fields for existing modules, such as adding additional contact details, notes, or custom attributes related to leads, customers, or opportunities. Additionally, you can create entirely new modules to track unique data or processes specific to your business, such as custom project tracking or additional support metrics. These customizations enable the CRM to align more closely with your workflows and data management requirements, enhancing its functionality and usability."},{question:"How can I track campaign performance?",answer:""}]:"equipment"==n?[{question:"How to create a user ID?",answer:"Only admin has the access to create user ID using user\u2019s email."},{question:"Can a user change his username and email?",answer:"No. User can\u2019t modify the username and email once it\u2019s created. User has to contact the admin for any modification."},{question:"What if I forget my username?",answer:"Our system lets you create a nickname to log in. So, if Ram forgets his default username, he can still access the system using his personalized nickname."},{question:"Is it possible to restrict certain users from accessing specific equipment?",answer:"Yes, Admins can restrict specific users or user groups from accessing certain equipment. For example, if Ram is not trained to use the high-powered laser machine, the admin can restrict him from booking it."},{question:"Can I view available booking slots for the current and upcoming week?",answer:"Absolutely! Users can view available booking slots for both the current and the upcoming week. For instance, if Ram wants to plan ahead, he can check the available slots for the next week and book equipment accordingly."},{question:"Can I cancel or reschedule a booking?",answer:"Yes! You can cancel or reschedule your booking at any time. For instance, if Jenny booked equipment for Thursday but needs it for Friday instead, she can cancel the original booking and create a new one."},{question:"Can the system block timeslots for scheduled maintenance?",answer:"Yes! The system automatically blocks time slots for scheduled maintenance. For example, if the centrifuge is scheduled for maintenance at 2 PM, it will block 1 PM to 4 PM, preventing any bookings during that period to ensure uninterrupted maintenance."},{question:"Can I set up different user groups for each department?",answer:"Yes, you can set up different user groups for each department in your lab equipment management system. For example, if the Biology Department requires access to specific equipment, you can create a user group specifically for them. This ensures that members of the Biology Department can manage and book equipment relevant to their research while restricting access to other departments."},{question:"How many times can I book equipment in a week?",answer:"Each user can book equipment as per the policy set up in your setup. For example, if Ram books for HPLC on Monday, Tuesday, and Friday then he won't be able to book again until the next week. Because for HPLC the max slot per week is 3."},{question:"Can I share my booked slot with another user?",answer:"No, each booking is tied to the specific user who made it. For example, if Ram booked the HPLC machine, only he has access to it during his time slot. However, Managers or Admins can make changes to the schedule if necessary."},{question:"Can I book equipment outside of working hours?",answer:"Yes! Our system allows 24/7 booking. For instance, if Ram prefers working late, he can book equipment at 11 PM on Tuesday, as long as it\u2019s available."},{question:"Can I see past bookings?",answer:"Yes, users can view their booking history in the system. For example, if Ram wants to check when he last used the PCR machine, he can log in and view his past bookings."},{question:"Can I generate reports for the required field?",answer:"Yes, you can generate custom reports based on specific fields like equipment usage, booking frequency, and maintenance schedules. For example, if Ram wants to analyze the usage of the PCR machine over the past month and he has access as a manager, then he can generate a report for that specific data."},{question:"Can I delete the unnecessary data from the software?",answer:"Yes, Admins can purge unnecessary or outdated data to keep the system running smoothly. For instance, if a large volume of old booking logs is slowing the system down, the admin can remove those logs without affecting current operations."}]:[{question:"What is Atomwalk HRM?",answer:"Atomwalk HRM is an all-in-one Human Resource Management solution designed to streamline HR processes such as employee attendance tracking, leave management, claims submission, payroll, and more. With its mobile app, Atomwalk HRM On-The-Go, employees and managers can manage HR tasks like real-time attendance, leave requests, approvals, and claims from anywhere, enhancing accessibility and efficiency. This system simplifies workflows from onboarding to exit, making it ideal for businesses looking to automate and optimize their HR operations while improving overall employee experience."},{question:"How can I use Atomwalk HRM?",answer:"You can use Atomwalk HRM by accessing it through its web-based platform or the Atomwalk HRM On-The-Go mobile app. Once logged in, employees can manage their attendance, apply for leave, submit claims, and access payroll information. Managers can approve or reject leave and claims, view reports, and monitor employee attendance in real-time. The system is designed to be user-friendly, with a dashboard that provides easy navigation to the HR functionalities relevant to your role."},{question:"How does HRM work?",answer:"Atomwalk HRM works by automating core HR processes like attendance tracking, leave management, claims submission, and payroll handling. The system integrates employee data and allows for real-time updates on various HR activities. It helps managers approve requests, generate reports, and track employee productivity, while employees can manage their own data through the self-service portal. The solution is designed to reduce paperwork and manual effort, improving efficiency and accuracy across HR operations."},{question:"Why should I choose Atomwalk HRM?",answer:["Zero Paperwork, managing the details anytime/anywhere digitally.","Documents are stored in the document management system (S3 bucket), accessible anytime by authorized personnel for future audit needs.","Expenses can be linked to respective projects (if using Project Management modules), aiding in project margin tracking and efficient cost control.","Automatic integration with accounting systems.","Email and WhatsApp integration.","Mobile app available for ESS (Employee Self-Service) for instant use.","Referral System.","Unlimited expense heads can be added as per the need."]},{question:"How to add a claim?",answer:"To add a claim in Atomwalk HRM, go to the 'Claims' section from the dashboard. Click on 'Submit New Claim,' then fill in the details such as claim type, amount, and description. You can also attach relevant receipts or documents. Once done, submit the claim for approval, and you\u2019ll be notified of its status in real-time. The system supports various claim categories, ensuring easy tracking and management of expenses."},{question:"How do I apply for a leave?",answer:"To apply for leave in Atomwalk HRM, log in to your account and navigate to the 'Leave' section. Select 'Apply Leave,' choose the type of leave (e.g., vacation, sick leave, WFH), specify the dates, and provide any necessary details or attachments. Submit the request, and you will be able to track its status as it moves through the approval process."},{question:"How can a manager approve a leave?",answer:"A manager can approve a leave in Atomwalk HRM by logging in and navigating to the 'Leave Approvals' section. There, they can review pending leave requests, check the employee's leave balance and history, and either approve or reject the request with a single click. The system provides options to add comments, and employees are notified instantly about the approval status."},{question:"Why and how does Atomwalk handle the company exit process?",answer:"Atomwalk\u2019s Exit Process module is designed to ensure a structured, seamless, and compliant offboarding experience for employees. It handles every aspect of the process, from resignation or termination to final settlement, asset handover, and exit interviews. With automated tracking and task management, it guarantees a smooth transition, protects company data and assets, and ensures legal compliance, leaving both the organization and the departing employee with a positive experience."}];return(0,m.jsxs)(ab,{children:[(0,m.jsx)(ob,{children:"All the A's to your Q's"}),(0,m.jsx)(sb,{children:o.map(((e,t)=>(0,m.jsxs)(lb,{children:[(0,m.jsxs)(cb,{onClick:()=>(e=>{a(i===e?null:e)})(t),children:[e.question,(0,m.jsx)("span",{children:i===t?"-":"+"})]}),(0,m.jsx)(db,{isOpen:i===t,children:Array.isArray(e.answer)?(0,m.jsx)("ul",{children:e.answer.map(((e,t)=>(0,m.jsx)("li",{children:e},t)))}):(0,m.jsx)("p",{children:e.answer})})]},t)))}),(0,m.jsxs)(ub,{children:[(0,m.jsx)(hb,{src:ib,alt:"FAQ"}),(0,m.jsx)(pb,{children:"Still have questions?"}),(0,m.jsxs)(fb,{children:["Book a call with our team to learn how to integrate ATOMWALK ",(0,m.jsx)("span",{children:"crm"==n?"CRM":"equipment"==n?"LEMS":"HRM"})," with your business."]}),(0,m.jsx)(mb,{onClick:()=>{window.location.href="/demo.html"},children:"Book a demo"})]})]})},xb=n.p+"static/media/userManagement.c889d10e3f21728bf9e6.png",bb=n.p+"static/media/equipmentManagement.8bdb72e825582560ea19.png",yb=n.p+"static/media/check-list.c7084c01542ce94fe78f.png",vb=n.p+"static/media/dashboard.87c36bcd4f4f546e7836.png",wb=n.p+"static/media/content-management.5d89ff2ade33a5b1d2fa.png",kb=ia.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,Sb=ia.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,jb=ia.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,Ab=ia.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Cb=ia.div`
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
`,Eb=ia.div`
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
`,Rb=ia.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,Pb=ia.p`
  font-size: 1em;
  color: #666;
`,Ob=()=>{const e=e=>{window.location.href=`/${e}`};return(0,m.jsxs)(kb,{children:[(0,m.jsx)(Sb,{children:"Key Features"}),(0,m.jsx)(jb,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,m.jsxs)(Ab,{children:[(0,m.jsxs)(Cb,{onClick:()=>e("userroleManagement.html"),children:[(0,m.jsx)(Eb,{bgColor:"#D8F5E3",children:(0,m.jsx)("img",{src:xb,alt:"Speed"})}),(0,m.jsx)(Rb,{children:"User and Role Management"}),(0,m.jsx)(Pb,{children:"Atomwalk\u2019s LMS ensures Role-based access control to restrict data access based on user roles, and manage permissions to ensure secure and appropriate data access."})]}),(0,m.jsxs)(Cb,{onClick:()=>e("labProcessemplate.html"),children:[(0,m.jsx)(Eb,{bgColor:"#F0E7FF",children:(0,m.jsx)("img",{src:bb,alt:"Trust"})}),(0,m.jsx)(Rb,{children:"Lab Process Template"}),(0,m.jsx)(Pb,{children:"Provide a simplified way to manage experiment templates required for the laboratory. Include various experiment templates with necessary steps, required inventory, and equipment. This ensures optimized and error-free execution of experiments by lab users."})]}),(0,m.jsxs)(Cb,{onClick:()=>e("labExperimentProject.html"),children:[(0,m.jsx)(Eb,{bgColor:"#E0F7FC",children:(0,m.jsx)("img",{src:yb,alt:"Accuracy"})}),(0,m.jsx)(Rb,{children:"Lab Experiment Project Execution"}),(0,m.jsx)(Pb,{children:"Don\u2019t let unexpected breakdowns slow you down. Atomwalk\u2019s LEM sends alerts for maintenance and calibrations, ensuring minimal downtime and maximum lab productivity."})]}),(0,m.jsxs)(Cb,{onClick:()=>e("pIwithReport.html"),children:[(0,m.jsx)(Eb,{bgColor:"#FFF2E0",children:(0,m.jsx)("img",{src:vb,alt:"Reliability"})}),(0,m.jsx)(Rb,{children:"PI with Report & Dashboard"}),(0,m.jsx)(Pb,{children:"Unlock the power of data with Atomwalk\u2019s detailed reports and Dashboard. Gain clear insights into usage pattern of equipments and labs "})]})]})]})},Tb=ia.section`
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
`,Mb=ia.div`
  max-width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,zb=ia.h1`
  font-size: 48px;
  color: #213e6d;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`,Ib=ia.p`
  font-size: 18px;
  color: #6d7278;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Db=ia.button`
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
`,Lb=ia.div`
  max-width: 50%;
  position: relative;
  z-index: 2;
  bottom: 0px;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`,Fb=ia.img`
  width: 100%;
  height: auto;
`,Nb=ia.img`
  position: absolute;
  top: 150px;
  left: 40px;
  width: 130px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80px;
  }
`,Bb=(ia.img`
position: absolute;
    right: 436px;
    bottom: 0;
    width: 275px;
    z-index: 1;
  @media (max-width: 768px) {
    width: 100px;
  }
`,ia.div`
  padding: 20px;
  background-color: #f5f5f5;
`,ia.h1`
  text-align: center;
  color: #2f3b82;
`,ia.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`,ia.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,ia.h2`
  color: #2f3b82;
  margin-bottom: 10px;
`,ia.p`
  color: #333;
`,ia.table`
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
`,ia.button`
  padding: 10px 20px;
  background-color: #2f3b82;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1e2870;
  }
`,()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(Tb,{children:[(0,m.jsx)(Nb,{src:jx,alt:"Abstract Shape"}),(0,m.jsxs)(Mb,{children:[(0,m.jsx)(zb,{children:"Lab Management System"}),(0,m.jsx)(Ib,{children:"Laboratories require meticulous organization and data management. A robust Lab Management System (LMS) can automate processes such as sample tracking, data entry, and reporting, which streamlines operations and ensures compliance with industry standards."}),(0,m.jsx)(Db,{onClick:()=>{window.location.href="/userManagement.html"},children:"Learn more"})]}),(0,m.jsx)(Lb,{children:(0,m.jsx)(Fb,{src:Sx,alt:"Laboratory Technician"})})]}),(0,m.jsx)(rb,{data:"LMS"}),(0,m.jsx)(Ob,{}),(0,m.jsx)(gb,{data:"equipment"})]})),qb=n.p+"static/media/Bloghreos.5aa2e0e24314590ba71c.jpg",Hb=n.p+"static/media/Pritam.3b843605de98c7062a24.jpg",Wb=n.p+"static/media/Ashutosh.d4b90e7f5ddbbe2e4acc.png",_b=ia.section`
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
`,Ub=ia.div`
  max-width: 700px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,Gb=ia.h1`
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
`,Kb=ia.p`
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,Yb=ia.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 30px;
  }
`,Vb=ia.a`
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
`,Jb=ia.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`,Qb=ia.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;

  &:before {
    content: "✔";
    color: black;
    margin-right: 10px;
  }
`,Zb=ia.div`
  position: relative;
  max-width: 470px;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`,Xb=ia.img`
  width: 100%;
  border-radius: 15px;
`,$b=ia.div`
  position: absolute;
  bottom: -63px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ey=ia.div`
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`,ty=ia.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`,ny=ia.div`
  font-size: 14px;
  color: #333;
`,ry=()=>(0,m.jsxs)(_b,{children:[(0,m.jsxs)(Ub,{children:[(0,m.jsxs)(Gb,{children:["Stay Informed with the Latest Updates and ",(0,m.jsx)("span",{children:"Blog Highlight"})]}),(0,m.jsx)(Kb,{children:"Stay informed with the latest updates and blog highlights, featuring essential insights and expert analysis."}),(0,m.jsxs)(Yb,{children:[(0,m.jsx)(Vb,{href:"https://play.google.com/store/search?q=atomwalk&c=apps&hl=en",primary:!0,children:"Download Atomwalk Apps"}),(0,m.jsx)(Vb,{href:"/demo.html",children:"Try Demo"})]}),(0,m.jsxs)(Jb,{children:[(0,m.jsx)(Qb,{children:"eliminate repetitive tasks with Atomwalk"}),(0,m.jsx)(Qb,{children:"productive and enthusiastic team member"}),(0,m.jsx)(Qb,{children:"Streamline lead tracking"})]})]}),(0,m.jsxs)(Zb,{children:[(0,m.jsx)(Xb,{src:qb,alt:"Blog Preview"}),(0,m.jsxs)($b,{children:[(0,m.jsxs)(ey,{children:[(0,m.jsx)(ty,{src:Hb,alt:"User 1"}),(0,m.jsxs)(ny,{children:["Ashutosh Mohapatra - Following",(0,m.jsx)("br",{}),"The Impact of Technology on the Workplace: Atomwalk CRM On-the-Go"]})]}),(0,m.jsxs)(ey,{children:[(0,m.jsx)(ty,{src:Wb,alt:"User 2"}),(0,m.jsxs)(ny,{children:["Pritam Kumar Nayak - Following",(0,m.jsx)("br",{}),"Tips You Must know: Atomwalk HRM On-the-Go"]})]})]})]})]}),iy=ia.div`
  background-color: rgb(255 246 247);
`,ay=ia.p`
  grid-column: span 3;
  text-align: center;
  color: #ff0000;
  font-size: 40px;
  font-weight: 500;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`,oy=ia.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on mobile */
  }
`,sy=ia.div`
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
`,ly=ia.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`,cy=ia.div`
  padding: 15px;
`,dy=ia.span`
  font-size: 12px;
  color: #007BFF;
  font-weight: bold;
  text-transform: uppercase;
`,uy=ia.h2`
  font-size: 18px;
  color: #333;
  margin: 10px 0;
`,py=ia.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #888;
  margin-top: auto;
`,fy=ia.span`
  display: flex;
  align-items: center;
`,my=ia.span`
  font-size: 12px;
`,hy=ia.div`
  padding: 20px 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`,gy=ia.div`
  display: flex;
  align-items: center;
`,xy=ia.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 250px;

  @media (max-width: 768px) {
    width: 100%;
  }
`,by=ia.button`
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
`,yy=()=>{const[e,n]=(0,t.useState)(""),r=[{id:3,title:"5 Common HR Software Problems and Troubleshooting Tips You Must know: Atomwalk HRM On-the-Go",category:"HRMS",image:"https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg",author:"Atomwalk Team",date:"March 23, 2024"}].filter((t=>t.title.toLowerCase().includes(e.toLowerCase()))),i=()=>{window.location.href="/BlogDetails.html"};return(0,m.jsxs)(iy,{children:[(0,m.jsxs)(hy,{children:[(0,m.jsx)("h2",{style:{color:"#454545"},children:"Latest Post"}),(0,m.jsxs)(gy,{children:[(0,m.jsx)(xy,{type:"text",placeholder:"Search by title...",value:e,onChange:e=>n(e.target.value)}),(0,m.jsx)(by,{onClick:()=>console.log("Searching..."),children:"Search"})]})]}),(0,m.jsx)(oy,{children:r.length>0?r.map((e=>(0,m.jsxs)(sy,{onClick:i,children:[(0,m.jsx)(ly,{src:e.image,alt:e.title}),(0,m.jsxs)(cy,{children:[(0,m.jsx)(dy,{children:e.category}),(0,m.jsx)(uy,{children:e.title}),(0,m.jsxs)(py,{children:[(0,m.jsx)(fy,{children:e.author}),(0,m.jsx)(my,{children:e.date})]})]})]},e.id))):(0,m.jsxs)(ay,{children:['No posts found for "',e,'"']})})]})},vy=()=>(0,m.jsxs)("div",{children:[(0,m.jsx)(ry,{}),(0,m.jsx)(yy,{})]}),wy=ia.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,ky=ia.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`,Sy=ia.h2`
  font-size: 2rem;
  color: #333;
  margin: 20px 0;
`,jy=ia.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`,Ay=ia.div`
  text-align: center;
  margin: 30px 0;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`,Cy=()=>(0,m.jsxs)(wy,{children:[(0,m.jsx)(ky,{children:"Revolutionize Workforce Management with Atomwalk HRM On-The-Go"}),(0,m.jsx)(Ay,{children:(0,m.jsx)("img",{src:"https://www.dnkinfotelecom.com.br/wp-content/uploads/2021/01/WFM.png",alt:"Workforce Management"})}),(0,m.jsx)(jy,{children:"Managing a dynamic workforce has never been easier. Atomwalk HRM On-The-Go empowers businesses to streamline their HR processes with smart, mobile-first solutions that work in real-time. Designed for today\u2019s fast-paced and distributed workforce, the app ensures that every aspect of employee management is simplified and efficient."}),(0,m.jsx)(jy,{children:"With our app, employees can check-in and check-out seamlessly using the built-in location tracking feature. No more outdated manual attendance records or guesswork. Our real-time GPS location tracking ensures 100% accuracy in attendance management, making it easier than ever for employees to log their presence from any location. This is especially useful for remote teams or employees who are frequently on the move."}),(0,m.jsx)(jy,{children:"Not only does Atomwalk HRM help track attendance, but it also offers employees a smart status calendar view, providing them with a clear visual of their attendance history. Employees can easily monitor their hours, check for missed check-ins, and stay on top of their time management. This improves transparency and promotes accountability across the workforce."}),(0,m.jsx)(jy,{children:"For managers, Atomwalk HRM provides a bird's-eye view of attendance trends, helping you make informed decisions about staffing and time-off management. With comprehensive reports and insights, you can ensure that your team stays productive and compliant, no matter where they are working from."}),(0,m.jsx)(Sy,{children:"Seamless Leave and Claim Management Anytime, Anywhere"}),(0,m.jsx)(Ay,{children:(0,m.jsx)("img",{src:"https://media.licdn.com/dms/image/D5612AQG26zqve50FHQ/article-cover_image-shrink_720_1280/0/1693328750791?e=2147483647&v=beta&t=U9v7s3R6xZco5ui_VMkZKcRfJB4I9PiJ40m8pDj4uUk",alt:"Leave Management"})}),(0,m.jsx)(jy,{children:"Say goodbye to paperwork and complicated approval workflows. With Atomwalk HRM On-The-Go, employees can apply for leave directly from the app\u2014whether it's Earned Leave, Loss of Pay, or Work From Home. Managers are immediately notified of these requests and can approve, reject, or provide feedback within seconds, drastically reducing approval delays and ensuring that time-off requests are handled smoothly."}),(0,m.jsx)(jy,{children:"Employees can track their leave status, check remaining leave balances, and even plan future leave requests with ease. Whether they are on the go or at the office, managing time-off has never been this intuitive."}),(0,m.jsx)(jy,{children:"But that\u2019s not all. Expense claims are also made simple with Atomwalk HRM. Employees can submit claims by uploading receipts directly from their phone\u2019s storage or by capturing real-time photos of bills and receipts using their mobile device. The app allows them to itemize and categorize expenses, ensuring a smooth submission process."}),(0,m.jsx)(Ay,{children:(0,m.jsx)("img",{src:"https://www.cflowapps.com/wp-content/uploads/2023/02/clms_prcsautomtn.jpg",alt:"Claim Processing"})}),(0,m.jsx)(jy,{children:"For managers, reviewing claims is equally streamlined. The app enables them to review all supporting documents and approve, reject, or send the claim back for revisions based on their approval limits. This eliminates the hassle of chasing down paper receipts or emails, speeding up the reimbursement process."}),(0,m.jsx)(jy,{children:"Atomwalk HRM On-The-Go enhances efficiency across the board, empowering employees and managers to handle their HR tasks anytime, anywhere, all from their mobile device. It\u2019s more than just an app\u2014it\u2019s a complete HR solution in your pocket."}),(0,m.jsx)(Sy,{children:"Why Choose Atomwalk HRM On-The-Go?"}),(0,m.jsxs)("ul",{style:{color:"black"},children:[(0,m.jsx)("li",{children:"Real-Time Location Tracking: Know exactly where your team is clocking in from with precise GPS-enabled check-ins and check-outs."}),(0,m.jsx)("li",{children:"Comprehensive Attendance Management: Track attendance trends, generate reports, and make data-driven decisions to optimize workforce management."}),(0,m.jsx)("li",{children:"Smart Leave Management: Apply, review, and manage leave requests instantly, ensuring that your team always operates at peak efficiency."}),(0,m.jsx)("li",{children:"Efficient Claim Processing: Submit, review, and approve expense claims with ease, all from your mobile device."}),(0,m.jsx)("li",{children:"Managerial Control: Managers have access to insightful dashboards for approvals, employee data, and team performance, all at their fingertips."})]}),(0,m.jsx)(jy,{children:"Atomwalk HRM On-The-Go transforms tedious HR tasks into quick, seamless interactions. Whether you\u2019re a growing business or managing a large distributed team, Atomwalk HRM has you covered."})]}),Ey=n.p+"static/media/HrApp.0eb9df2f1d6d57adc2bd.png",Ry=ia.div`
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
`,Py=ia.div`
  flex: 1;
  padding-right: 20px;
  
  @media (max-width: 768px) {
    padding-right: 0;
  }
`,Oy=ia.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 10px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,Ty=ia.p`
  color: #ffb3ff;
  font-size: 1rem;
  margin-bottom: 10px;
`,My=ia.p`
  font-size: 0.9rem;
  color: #ddd;
  margin-bottom: 20px;
`,zy=ia.div`
  flex: 1;
  text-align: center;
  margin-top:50px;
  
  img {
    max-width: 110%;
    height: auto;
    border-radius: 12px;
  }
`,Iy=()=>(0,m.jsxs)("div",{style:{backgroundColor:"white"},children:[(0,m.jsxs)(Ry,{children:[(0,m.jsxs)(Py,{children:[(0,m.jsx)(Oy,{children:"Streamline Your HR Processes with ATOMWALK HRM On-The-Go: Attendance, Leave, and Claims Management Simplified "}),(0,m.jsx)(Ty,{children:"By Atomwalk"}),(0,m.jsx)(My,{children:"6 minute read \u2022 October 01, 2024"})]}),(0,m.jsx)(zy,{children:(0,m.jsx)("img",{src:Ey,alt:"Task Paralysis Article"})})]}),(0,m.jsx)(Cy,{})]}),Dy=n.p+"static/media/hr.e13184a1f188a146402d.png",Ly=n.p+"static/media/payroll.039b976618946de508d7.png",Fy=n.p+"static/media/attendance1.c91a722f5930666fca97.png",Ny=n.p+"static/media/onboarding.6125efea4152d41fc3fc.png",By=n.p+"static/media/empdata.504d86deb99fc409ff66.png",qy=n.p+"static/media/leave-management.8af525284b9c7ca1769c.png",Hy=n.p+"static/media/claimmanage.81c59bd374c0f3c4875c.png",Wy=n.p+"static/media/exit-process.6c14ce06c14fb114a462.png",_y=n.p+"static/media/performance-management.3d529838ac44380c1f09.png",Uy=ia.div`
  padding: 110px 20px;
  background-color: #f0ebf7;
  text-align: center;
`,Gy=ia.h2`
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
`,Ky=(ia.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,ia.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`),Yy=ia.div`
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
`,Vy=ia.div`
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
`,Jy=ia.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,Qy=ia.p`
  font-size: 1em;
  color: #666;
`,Zy=()=>{const e=e=>{window.location.href=`/${e}.html`};return(0,m.jsxs)(Uy,{children:[(0,m.jsx)(Gy,{children:"Key Features"}),(0,m.jsxs)(Ky,{children:[(0,m.jsxs)(Yy,{onClick:()=>{e("employeehr")},children:[(0,m.jsx)(Vy,{bgColor:"#D8F5E3",children:(0,m.jsx)("img",{src:Ny,alt:"Onboarding"})}),(0,m.jsx)(Jy,{children:"On-Boarding Process:"}),(0,m.jsx)(Qy,{children:"Seamlessly onboard new employees by setting up departments, grades, and HR policies from one place."})]}),(0,m.jsxs)(Yy,{onClick:()=>{e("employeehr")},children:[(0,m.jsx)(Vy,{bgColor:"#F0E7FF",children:(0,m.jsx)("img",{src:By,alt:"EmployeeData"})}),(0,m.jsx)(Jy,{children:"Employee Data:"}),(0,m.jsx)(Qy,{children:"Maintain accurate employee records with the ability to add, update, and delete employee details. Easily manage employee data for better decision-making."})]}),(0,m.jsxs)(Yy,{onClick:()=>{e("attendance")},children:[(0,m.jsx)(Vy,{bgColor:"#E0F7FC",children:(0,m.jsx)("img",{src:Fy,alt:"Attendance"})}),(0,m.jsx)(Jy,{children:"Attendance:"}),(0,m.jsx)(Qy,{children:"Track employee attendance in real time with integrated location tracking and the option to mark attendance remotely."})]}),(0,m.jsxs)(Yy,{onClick:()=>{e("leave")},children:[(0,m.jsx)(Vy,{bgColor:"#FFF2E0",children:(0,m.jsx)("img",{src:qy,alt:"Reliability"})}),(0,m.jsx)(Jy,{children:"Leave Management:"}),(0,m.jsx)(Qy,{children:"Easily handle leave requests\u2014employees can apply for leave, while managers can approve or reject requests, review leave history, and ensure compliance with company policies."})]})]}),(0,m.jsxs)(Ky,{children:[(0,m.jsxs)(Yy,{onClick:()=>{e("claim")},children:[(0,m.jsx)(Vy,{bgColor:"#EFF498",children:(0,m.jsx)("img",{src:Hy,alt:"Reliability"})}),(0,m.jsx)(Jy,{children:"Claim Management:"}),(0,m.jsx)(Qy,{children:"Submit and manage claims, such as travel or expense reimbursements, with ease. Employees can upload receipts, managers can review and approve claims, and claim settlements with employee advance is also supported."})]}),(0,m.jsxs)(Yy,{onClick:()=>{e("payroll")},children:[(0,m.jsx)(Vy,{bgColor:"#D99B80",children:(0,m.jsx)("img",{src:Ly,alt:"Reliability"})}),(0,m.jsx)(Jy,{children:"Payroll:"}),(0,m.jsx)(Qy,{children:"Automate payroll processing with integrated features for salary calculations, deductions, and disbursements, ensuring timely and accurate payroll management."})]}),(0,m.jsxs)(Yy,{onClick:()=>{e("appraisal")},children:[(0,m.jsx)(Vy,{bgColor:"#F7DAF4",children:(0,m.jsx)("img",{src:_y,alt:"Performance Mangement"})}),(0,m.jsx)(Jy,{children:"Performance Mangement System:"}),(0,m.jsx)(Qy,{children:"The appraisal system supporting KPI-based evaluations, with self-assessment, manager scoring, and grade normalization for fair, transparent performance reviews and structured reporting."})]}),(0,m.jsxs)(Yy,{onClick:()=>{e("employeehr")},children:[(0,m.jsx)(Vy,{bgColor:"#F7DADB",children:(0,m.jsx)("img",{src:Wy,alt:"Reliability"})}),(0,m.jsx)(Jy,{children:"Exit Process:"}),(0,m.jsx)(Qy,{children:"Simplify the employee exit process, from resignation submission to final clearance. Atomwalk HRM allows companies to set up exit process documentation, ensuring all required documents and company assets are managed efficiently and securely stored for future reference."})]})]})]})},Xy=ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: aliceblue;

  @media (min-width: 768px) {
    padding: 40px 20px;
  }
`,$y=ia.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #663399;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`,ev=ia.div`
  width: 100%;
  max-width: 700px;
`,tv=ia.div`
  margin-bottom: 15px;
  background-color: #f8f5ff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,nv=ia.div`
  padding: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #7b1fa2;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(140, 64, 172);
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color:rgb(255, 255, 255);
  }
`,rv=ia.div`
  background-color: #f8f5ff;
  max-height: ${e=>{let{isOpen:t}=e;return t?"1000px":"0"}};
  overflow: hidden;
  transition: max-height 0.3s ease;
`,iv=ia.div`
  border-top: 1px solid #ddd;
`,av=ia.div`
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

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #663399;
  }
`,ov=ia.div`
  background-color: white;
  max-height: ${e=>{let{isOpen:t}=e;return t?"500px":"0"}};
  padding: ${e=>{let{isOpen:t}=e;return t?"15px":"0 15px"}};
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;

  ul {
    padding-left: 20px;
    list-style-type: disc;
  }
`,sv=ia.div`
  text-align: center;
  margin-top: 50px;
  padding: 30px;
  width: 100%;
  max-width: 700px;

  @media (min-width: 768px) {
    padding: 40px;
  }
`,lv=ia.h2`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 20px;
`,cv=ia.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 30px;
`,dv=ia.a`
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
`,uv=ia.img`
  max-width: 200px;
  margin-bottom: 10px;
`,pv=e=>{let{data:n}=e;const[r,i]=(0,t.useState)(0),[a,o]=(0,t.useState)(null),s={HR:{General:[{question:"What is an HRM system, and how does it help employees?",answer:"Atomwalk HRM is an all-in-one Human Resource Management system designed to streamline HR processes. It helps employees manage attendance, leave, payroll, claims, appraisals, and more through a user-friendly interface. The mobile app enhances accessibility, allowing employees to complete HR tasks on the go."},{question:"How do I access the HRM portal or mobile app?",answer:"You can access Atomwalk HRM via the web portal using your own login credentials. The mobile app can be downloaded from the Google Play Store. Log in with the same credentials as the web portal. Further you can add the Bio-metric and set your pin also."},{question:"What are the key features available in this HRM module?",answer:"Atomwalk HRM includes attendance tracking, leave management, payroll processing, claims and reimbursements, performance management, recruitment, onboarding, and employee self-service."},{question:"Can I access the HRM system from outside the office?",answer:"Yes, the HRM system and mobile app are accessible from anywhere with an internet connection, ensuring flexibility for employees working remotely or traveling."},{question:"What should I do if I forget my HRM login credentials?",answer:"Click the \u201cForgot Password\u201d option on the login page and follow the instructions to reset your password but you should have access to the registered mail-Id. For further assistance, contact your HR department."},{question:"Who do I contact for technical support or system issues?",answer:"For any technical issues, reach out to the Atomwalk HRM support team via the \u2018Help & Support\u2019 section in the system or contact your HR representative. Or you can contact to \u2018support@atomwalk.com\u2019 mail id."}],"Attendance and Leave Management":[{question:"How do I mark my attendance through the HRM system?",answer:'Use the "My Attendance" feature in the Atomwalk HRM web portal to mark your attendance. For added convenience, Atomwalk also provides a mobile app. Through the mobile app, users can check in and check out by accessing the "My Attendance" section. In some setups, biometric integration or geolocation may also be used for marking attendance.'},{question:"Can I edit or correct attendance entries?",answer:'Attendance entries cannot be edited directly. If there are discrepancies, submit an "Attendance Correction Request" via email to your manager for approval. Once approved, the manager can update the attendance through the "Attendance Records" section in their portal.'},{question:"How do I apply for leave?",answer:'In the mobile app, navigate to the "My Leaves" section, select "Apply Leave," fill out the form, and submit it. Users have the option to apply for different types of leave, such as Earned Leave, Work from Home, or Loss of Pay. After submitting the application, users can view their leave details, including the status, on the "My Leaves" screen. Similarly, in the web app, users can navigate to the "My Leave Details" section to apply for leave using the same process as the mobile app.'},{question:"What is the leave approval process?",answer:'After submitting your leave request, it is sent to your reporting manager for review and approval. The manager can either "Approve" or "Reject" the leave application by navigating to the "Approve Leave" section in the mobile app. In the web app, the manager needs to access the "Approve Leave" section under the "Manager (HRMS)" menu.'},{question:"How can I check my leave balance?",answer:'Your leave balance is displayed in the "My Leave Details" section of the web app, providing a detailed breakdown of leave types, including the maximum allowed, leave applied, approved leave, and pending approval. In the mobile app, you can view only the maximum allowed leave for each leave type.'},{question:"Can I reject a leave request?",answer:"Yes, manager can reject the leave request providing the rejection remark."}],"Payroll and Claims":[{question:"How are payroll TDS calculation?",answer:"Yes, Atomwalk HRM supports TDS calculations. The system automatically calculates TDS based on both the old and new tax regimes."},{question:"Do you support PF?",answer:"Yes, Atomwalk HRM supports Provident Fund (PF) management, including PF calculations."},{question:"Do you support Ledger Entries?",answer:"Yes, Atomwalk HRM supports Ledger Entries, ensuring accurate financial record-keeping and seamless integration with payroll and accounting processes."},{question:"Do you support Employee Advance?",answer:"Yes, Atomwalk HRM supports Employee Advance. During claim settlement, the system automatically adjusts the claims against the advance amount, ensuring accurate reconciliation."}],"Employee Self-Service":[{question:"Do you have provision to update the personal information, such as address or contact details?",answer:"Yes, we support to update the personal information, such as address or contact details. For updating any other information, you must send a request via email to your HR manager. Only the HR manager has the authority to update these details in the system."},{question:"Where can I view my performance reviews or appraisal details?",answer:'For performance reviews, employees can visit the "My Weekly Score" section, where they can view their "Performance Score." Appraisal details are available under the "My Appraisal" section.'},{question:"Can I view my team\u2019s details if I am a manager?",answer:'Yes, managers have access to team details under the "Manager (HRMS)" sections, depending on system configuration.'}],"Performance Management":[{question:"How do I view my goals or Key Responsibility Area (KRA)?",answer:'Goals and KRA are accessible in the "My Attendance" section at the weekly attendance submission.'},{question:"Can I provide feedback or update of my goals in the HRM system?",answer:'Yes, you can provide feedback and suggest updates to your goals. After submitting the form, it will be forwarded to the "Manager Dashboard" for review.'},{question:"How do I participate in the appraisal process?",answer:'Once the HR manager sets up the "Appraisal Structure", employees can "Initiate the Appraisal". Proceed with the required steps, which include completing self-assessment forms and providing inputs & documents on important performance parameter.'},{question:"Where can I view my performance history?",answer:'There are two types of "Performance History": Weekly Performance and Appraisal History. The Weekly Performance score can be accessed through the "My Weekly Score" dashboard, while the Appraisal History can be accessed through the "My Appraisal" dashboard.'},{question:"Do you have review process in the appraisal?",answer:"Yes, it is supported. Appraisal required review can be accessed from the reviewer dashboard. The final score with normalization can be given by the reviewer."}],"Recruitment and Onboarding":[{question:"Do you support maintaining the data of selected candidate & creation of job offer/ appointment letter?",answer:"Yes, we support maintaining the data of selected candidate & creation of job offer/ appointment letter. Company can customise the offer letter as per the requirements including the details of salary structure."}]},CRM:{"General Overview":[{question:"What is CRM, and how does it help my business?",answer:"Customer Relationship Management (CRM) solution manages Lead, Customer and Channel Partner data efficiently on a real time basis and can be accessed by all the stakeholders. Hence eliminating the risk of duplication of data . Operations like lead and customer tasks and Campaign Management can be tracked/completed efficiently. By consolidating these functions, CRM enhances customer satisfaction, boosts sales effectiveness, and improves overall business efficiency, leading to better customer retention and increased profitability."},{question:"Who can benefit from using the CRM module?",answer:"The CRM module benefits a wide range of users across various roles within an organization, including sales teams, customer service representatives, marketing departments, channel partners, and managers. Sales teams can use it to manage leads, track opportunities, and enhance customer interactions. Customer service representatives benefit from improved case management and better tracking of customer issues. Marketing departments can leverage CRM for targeted campaigns, lead nurturing, and performance tracking. Channel partners gain from streamlined lead distribution and incentive management. Managers benefit from comprehensive insights into sales performance, customer satisfaction, and team productivity, enabling them to make informed decisions and drive business growth."}],"Customer Management":[{question:"How can I add or update customer details?",answer:"To add or update customer details, navigate to the CRM section in the left menu and select the \u2018Customer List\u2019 tab. A comprehensive list of customers will be displayed. To update an existing customer\u2019s information, click on the desired customer\u2019s name to view their details. You will then find an \u201cUpdate\u201d button; click this to access and modify any of the fields as needed. After making the required changes, simply click \u201cSave\u201d to update the customer details. To add a new customer, click the \u201cAdd Customer\u201d button located in the top-right corner of the screen. Fill out the necessary details in the provided fields and click \u201cSave\u201d to record the new customer. The newly added customer will now appear in the Customer Details screen."},{question:"Can I import/export customer data?",answer:"Yes, you can import and export customer data. On the Customer Details page, there is an option available in the top right corner. To import data, simply click on the \u201cUpload\u201d option, and then provide the necessary details in the format required. After submitting the information, the system will fetch and upload the customer data into the CRM. To export data, a similar process can be followed from the same menu, allowing you to download customer details in a compatible format for backup or external use. This feature ensures seamless management of customer information across your business systems."},{question:"Does the CRM support customer segmentation?",answer:"Yes, our CRM supports customer segmentation through fields like Customer Group, and Customer Group (Secondary). While adding a new customer, you can assign values to these fields to categorize customers based on your segmentation criteria. This enables you to organize customers effectively, tailor your marketing strategies, and provide personalized services based on their group or type."},{question:"How can I track sales leads in the CRM?",answer:"To track sales leads in the CRM, navigate to the CRM section from the left menu and select the Leads tab. Here, you can view all your leads in a centralized dashboard, organized by their status in the sales pipeline. Each lead entry provides details like contact information, lead source, and current stage. You can update the status of a lead as it progresses through the sales funnel, add notes or tasks for follow-ups, and scheou to focus on high-priority opportunities. This streamlined process ensures efficient tracking and management of sales leads."}],"Sales and Leads":[{question:"Can I create and send marketing campaigns through the CRM?",answer:"Yes, you can create and send marketing campaigns through the CRM. Users can choose to create custom templates or use system-generated templates for their campaigns. To get started, navigate to the CRM section in the left panel and click on Customer Campaigns. This will display a list of existing campaigns. To create a new one, click on the Add Campaign button in the top right corner. Fill in all the "},{question:"Does it support email templates and personalization?",answer:"Yes, the CRM supports email templates and personalization. You can create custom email templates or use predefined system templates to streamline your marketing and communication efforts. These templates can be personalized by including dynamic fields such as the recipient\u2019s name, company, or other customer-specific details, ensuring each email feels tailored and relevant. This functionality makes it easy to maintain consistency in branding while delivering a personalized experience to your audience. Additionally, templates can be saved for reuse, improving efficiency and enhancing the effectiveness of your email campaigns."},{question:"How can I track campaign performance?",answer:"You can track campaign performance easily within the CRM. When creating a campaign, there are two options: Response Yes Button Text and Response No Button Text, where you can specify the labels for user reactions, such as Like and Dislike or any other relevant terms. Once the campaign is sent, recipients can interact with these buttons. To view the responses, go to the campaign list and click on List Responses for the specific campaign. This will display all the recipient responses, allowing you to gauge the campaign's success and gather valuable feedback for future improvements."}],"Customization and Scalability":[{question:"Can I add custom fields or modules?",answer:"Yes, the CRM allows you to add custom fields or modules to tailor the system to your specific business needs. You can create and modify custom fields for existing modules, such as adding additional contact details, notes, or custom attributes related to leads, customers, or opportunities. Additionally, you can create entirely new modules to track unique data or processes specific to your business, such as custom project tracking or additional support metrics. These customizations enable the CRM to align more closely with your workflows and data management requirements, enhancing its functionality and usability."}]},sales:{"Sales Process":[{question:"What is a sales module in an ERP system?",answer:"In the Sales module, Atomwalk helps manage processes such as sales orders, quotations, invoices, and customer interactions."},{question:"How can I create a sales order?",answer:"You can create a sales order by navigating to the Sales module, selecting the customer, and adding the products/services along with their quantities and prices. While creating sales order you can also give the details like Shipment address & is it a Part Delivery or not."},{question:"Can I automate the creation of quotations or proforma invoices?",answer:"Yes, you can generate quotations or proforma invoices directly from the system, which can later be converted into sales orders."},{question:"How does the module handle tax calculations (e.g., GST)? ",answer:"Atomwalk supports automated tax calculations based on configured tax rates (e.g., GST) for items or services being sold. Additionally, it provides users with the option to set a specific tax category, if required."},{question:"Does it support tracking pending payments and sending reminders? ",answer:"Yes, Atomwalk allows you to track unpaid invoices and send payment reminders through different platform."},{question:"Can I generate sales reports?",answer:"Atomwalk offers robust reporting tools to analyze sales performance and revenue trends. Users can view sales reports on a monthly or quarterly basis, along with customer-wise sales breakdowns, customer outstanding details, debtor aging charts, and Days Sales Outstanding (DSO) charts. Additionally, the system includes the option to print sales reports for easy sharing and documentation."},{question:"How are returns or refunds processed? ",answer:"Returns or refunds are managed through credit notes in the system."},{question:"How do you support Bad Debt Expense?",answer:"Atomwalk allows users to process a 'Write-Off' against an invoice. If necessary, users can create a 'Write-Off' entry to close outstanding invoice bills. The pending payments are then transferred to the Bad Debt Expense Ledger for accurate financial tracking."},{question:"How do you support Bad Debt Expense?",answer:"Atomwalk allows users to process a 'Write-Off' against an invoice. If necessary, users can create a 'Write-Off' entry to close outstanding invoice bills. The pending payments are then transferred to the Bad Debt Expense Ledger for accurate financial tracking."},{question:"Does it support multiple currencies for international sales?",answer:"Yes, the system can handle transactions in multiple currencies."}],"Procurement Process":[{question:"What is a procurement module in an ERP system? ",answer:"The procurement module streamlines the purchasing process, including purchase orders, vendor management, and goods receipt."},{question:"How do I create a purchase order (PO)? ",answer:"To create a Purchase Order, go to the Sales & Purchase section and select the 'Purchase Order' option. Click on the 'Add Purchase Order' button, choose a vendor/supplier, add the items or services to be purchased, and then generate the Purchase Order (PO)."},{question:"Can I track the status of purchase orders?",answer:"Yes, you can track POs from creation to delivery and payment within the system."},{question:"What is a GRN, and how is it recorded? ",answer:"A Goods Receipt Note (GRN) confirms the receipt of goods. It is recorded in the system when the items are delivered and verified or at the time of Order-In, depending on the process flow."},{question:"How does the module handle vendor payments? ",answer:"Atomwalk integrates with finance to manage vendor payments, including tracking due dates, making partial or full payments, and reconciling accounts."},{question:"Can I manage service-based procurement?",answer:"Yes, the module supports purchase service orders for services instead of physical goods."},{question:"Is it manage the Bin-Location on a Purchase?",answer:"Yes, the module helps to mange the Bin-Location. While doing Order-In it automatilacally mange the allocated bin Location."},{question:"Can I manage the return or damage quantity?",answer:"Yes, you can effectively manage the return and damage quantity."}],"Compliance Process":[{question:"What is a compliance module in an ERP system?",answer:"The compliance module ensures the organization adheres the rules, regulations, and standards."},{question:"How does the system handle GST filing?",answer:"Atomwalk automatically calculates GST for transactions, and helps users stay updated with compliance requirements."},{question:"Can it manage TDS calculation? ",answer:"Yes, the module supports TDS calculation and provides reports."},{question:"For a service are you able to calculate the TDS?",answer:"Yes, Atomwalk help you calculate the TDS in a service also."},{question:"What types of regulatory reports can I generate?",answer:"The system can generate reports for GST, TDS, audit trails, and other compliance-related requirements."},{question:"Can the module be configured for industry-specific compliance needs? ",answer:"Yes, the module is customizable to meet the compliance needs of specific industries, like healthcare, manufacturing, retail, service or any industry-specific."},{question:"How does it ensure data security for compliance records?",answer:"The system implements role-based access, encryption, and audit trails to secure sensitive compliance data."}]},Project:{"General Overview":[{question:"What is the Workorder Execution/Project Management module?",answer:"This module in Atomwalk Technology helps manage and execute projects or work orders by defining processes, assigning tasks, tracking progress, and ensuring timely delivery. It supports efficient collaboration and resource management."},{question:"What is a process template, and how is it used?",answer:"A process template is a predefined workflow that outlines steps, milestones, and responsibilities for recurring or standard projects. It simplifies project setup, ensures consistency, and reduces manual errors."},{question:"What are the key features of the module?",answer:"Customizable process templates for various projects, Task assignment and tracking,\tMilestone-based progress monitoring,\tResource and cost allocation tools, Reports and dashboards for insights, Seamless integration with other Atomwalk ERP modules."}],"Setup and Configuration":[{question:"How do I create a new project or work order?",answer:"Navigate to the module, select \u201cCreate New Project/Workorder\u201d, define the project scope, assign tasks, and set deadlines and milestones."},{question:"How do I configure a process template for a recurring project?",answer:"Go to Process Templates, click Create New, define steps, assign roles, and set default timelines. Save it for future use."},{question:"Can I customize the fields and workflow in the process template?",answer:"Yes, Atomwalk allows customization of fields, task priorities, workflows, and deadlines in the process template to match your organizational needs."},{question:"How do I assign team members or departments to a project or task?",answer:"Within the project/task setup, assign team members or departments using the Assignment tab. You can search and add members based on skills or department availability."}],"Execution and Monitoring":[{question:"How do I track the progress of a work order/project?",answer:"Use the Project Dashboard to monitor task completion, milestone achievements, and overall progress in real time. "},{question:"What reports can I generate for a project or work order?",answer:"Task status reports, Milestone tracking reports, Resource utilization reports, Budget vs. actual expenditure reports"},{question:"How can I update the status of tasks or milestones?",answer:"Navigate to the task or milestone, select Update Status, and choose from predefined options like \u201cIn Progress,\u201d \u201cCompleted,\u201d or \u201cDelayed.\u201d Add comments if needed."},{question:"What happens if there\u2019s a delay in completing a task?",answer:"The system flags the delay and sends notifications to relevant stakeholders. The timeline is recalculated, considering dependencies and adjusted deadlines."},{question:"Can I integrate the module with other tools or systems?",answer:"Yes, the module integrates seamlessly with Atomwalk\u2019s other ERP modules like Sales, Procurement, and HRM, ensuring streamlined workflows. APIs are also available for third-party tool integration."}]},Inventory:{"General Overview":[{question:"What is an Inventory Management module?",answer:"The Inventory Management module by Atomwalk Technology helps businesses efficiently track, manage, and control their inventory across multiple locations, ensuring accurate stock levels and smooth operations."},{question:"What types of businesses can use this module?",answer:"Our module is versatile and suitable for businesses of all sizes, including retail, manufacturing, distribution, e-commerce, and service-based industries."},{question:"How does the module help in inventory tracking?",answer:"Atomwalk\u2019s module provides real-time tracking of inventory movement, from procurement to sales, using tools like barcode scanning, stock logs, and automated updates."},{question:"Can it handle multiple warehouses or locations?",answer:"Yes, the module supports multi-warehouse management, allowing you to track and manage inventory across various locations seamlessly."}],"Features & Functionalities":[{question:"Can I track stock levels in real-time?",answer:"Absolutely! Real-time stock updates ensure that you always have accurate data on inventory availability."},{question:"Does the module handle stock reordering or generate low-stock alerts?",answer:"Yes, it includes automatic reorder suggestions and low-stock alerts based on predefined thresholds."},{question:"Is there support for batch and serial number tracking?",answer:"Yes, the module supports batch and serial number tracking for better traceability and quality control."},{question:"How does the system manage product categories and variants?",answer:"Products can be categorized into multiple levels, with support for variants such as size, color, and other attributes."},{question:"Can it track inventory valuation methods?",answer:"Yes, the module supports various inventory valuation methods batchwise to match your accounting preferences."},{question:"Are damaged, expired, or returned goods tracked separately?",answer:"Yes, the module categorizes and tracks damaged, expired, and returned goods for better accountability."}],Integrations:[{question:"Can the module integrate with sales, procurement, and accounting modules?",answer:"Yes, seamless integration with Atomwalk\u2019s Sales, Procurement, and Accounting modules ensures end-to-end inventory control."},{question:"Is there integration with e-commerce platforms or point-of-sale systems?",answer:"Yes, the module integrates with popular e-commerce platforms and POS systems to sync stock levels automatically."},{question:"Can the system sync with third-party shipping or logistics tools?",answer:"Yes, integrations with logistics platforms enable real-time shipment tracking and automated updates."}],"Reports & Analytics":[{question:"What types of inventory reports are available?",answer:"The module offers comprehensive reports such as stock aging, inventory turnover, valuation, and discrepancy analysis."},{question:"How are inventory discrepancies reported and resolved?",answer:"Discrepancies are flagged automatically, with tools for physical investigation and adjustment to maintain accuracy."}]}}[n]||{};return(0,m.jsxs)(Xy,{children:[(0,m.jsx)($y,{children:"All the A's to your Q's"}),(0,m.jsx)(ev,{children:Object.keys(s).map(((e,t)=>(0,m.jsxs)(tv,{children:[(0,m.jsxs)(nv,{onClick:()=>{return i(r===(e=t)?null:e),void o(null);var e},children:[e,(0,m.jsx)("span",{children:r===t?"-":"+"})]}),(0,m.jsx)(rv,{isOpen:r===t,children:s[e].map(((e,t)=>(0,m.jsxs)(iv,{children:[(0,m.jsxs)(av,{onClick:()=>{var e;o(a===(e=t)?null:e)},children:[e.question,(0,m.jsx)("span",{children:a===t?"-":"+"})]}),(0,m.jsx)(ov,{isOpen:a===t,children:(0,m.jsx)("p",{children:e.answer})})]},t)))})]},t)))}),(0,m.jsxs)(sv,{children:[(0,m.jsx)(uv,{src:ib,alt:"FAQ"}),(0,m.jsx)(lv,{children:"Still have questions?"}),(0,m.jsxs)(cv,{children:["Book a call with our team to learn how to integrate Atomwalk ",(0,m.jsx)("span",{children:n})," with your business."]}),(0,m.jsx)(dv,{onClick:()=>{window.location.href="/demo.html"},children:"Book a demo"})]})]})},fv=ia.div`
  background-color: #eae3ff;
  color: blue;
  width: 100%;
  /* padding-top: 10px; */
  padding-bottom: 10px;
  padding-top: 3%;
  /* height: 1472px; */
`,mv=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(fv,{children:(0,m.jsx)(Ep,{title:"Streamline Your Workforce with Atomwalk HRM On-The-Go",description:"Manage the entire employee lifecycle from onboarding to exit, anytime-anywhere. Atomwalk HRM encompasses various functions like recruitment, performance management, payroll, exit process, and compliances. Access our powerful HRM features on the web or through our mobile app for convenient leave, claims, attendance, and holiday management. We help to maximize employee performance and their contribute to achieving organizational goals.",background:"#eae3ff",lead:!0,img:Dy})}),(0,m.jsx)(rb,{data:"HR"}),(0,m.jsx)(Zy,{}),(0,m.jsx)(pv,{data:"HR"})]}),hv=n.p+"static/media/claim.479c41ec78032b2383c8.png",gv=n.p+"static/media/leave1.09feac747470d0615599.png",xv=n.p+"static/media/hrm_hero_img.b2b560b7a515a331176a.png",bv=ia.div`
  padding: 20px;
  background-color: ${e=>e.bgcolor?e.bgcolor:"#f0ebf7"};
  @media (min-width: 768px) {
    padding: 50px;
  }
`,yv=ia.div`
  margin-bottom: 40px;
`,vv=ia.h1`
  margin-top: 80px;
  font-size: 35px;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 45px;
  }
`,wv=ia.div`
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
`,kv=ia.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`,Sv=ia.div`
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
`,jv=ia.p`
  text-align: center;
  color: #4A90E2;
  font-weight: bold;

`,Av=ia.div`
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
`,Cv=e=>{let{data:n,bgcolors:r}=e;const i={Claim:[{step:"Expense Item Setup"},{step:"Expense Advance for Employee"},{step:"Claim Expense"},{step:"Approval Of Claim"},{step:"Settlement of Claims"},{step:"Reports & Dashboards"}],Leave:[{step:"Setup Holiday Calendar"},{step:"Leave Dashboard"},{step:"Manage Leave by Employee"},{step:"Manage Leave by Manager"},{step:"Reports & Analysis"}],Payroll:[{step:"Payroll Setup & Controls"},{step:"Generate Monthly Salary"},{step:"Post Salary"}],Attendance:[{step:"Check-in"},{step:"Attendance Dashboard"},{step:"Manage Attendance"},{step:"Weekly Score"}],Appraisal:[{step:"Performance Mangement System"},{step:"Self Appraisal Process "},{step:"Manager Appriasl Process "},{step:"Appriasl Rivew Process and Reports "}],HR:[{step:"On-Boarding"},{step:"Employee Data"},{step:"Exit Process"}],Lead:[{step:"Lead Capture",color:"#4A90E2"},{step:"Lead Enrichment and Task Assignment",color:"#4A90E2"},{step:"Lead Tracking and Status Management ",color:"#4A90E2"},{step:"Lead Closure",color:"#4A90E2"}],Campaign:[{step:"Create Campaign",color:"#4A90E2"},{step:"Custom and Default Campaign Template",color:"#4A90E2"},{step:"Response interface",color:"#4A90E2"}],Partner:[{step:" Add Partner",color:"#4A90E2"},{step:"Order Information Tracking",color:"#4A90E2"},{step:"Multi-Report Generation",color:"#4A90E2"}],Customer:[{step:"Customer Data Management",color:"#4A90E2"},{step:"Customer Task & TDS Management",color:"#4A90E2"},{step:"Invoice, Payment & Product Interests",color:"#4A90E2"},{step:"Ticket Tracking (AMC Tracking)",color:"#4A90E2"},{step:"Reports and Dashboards",color:"#4A90E2"}],UserManagement:[{step:"User Group Setup",color:"#4A90E2"},{step:"User Profile Creation",color:"#4A90E2"},{step:"Update/ Delete Profile",color:"#4A90E2"}],EquipmentManagement:[{step:"Equipment Setup",color:"#4A90E2"},{step:"Booking",color:"#4A90E2"},{step:" Cancellation",color:"#4A90E2"}],EquipmentMaintenance:[{step:"preventive Maintenance",color:"#4A90E2"},{step:"Emergency maintenance",color:"#4A90E2"}],ReportandDashboard:[{step:" Usage Trends",color:"#4A90E2"},{step:"Audit ready records",color:"#4A90E2"},{step:"Data purge ",color:"#4A90E2"},{step:"Analytics",color:"#4A90E2"}],UserManagements:[{step:"Admin",color:"#4A90E2"},{step:"Manager",color:"#4A90E2"},{step:"User",color:"#4A90E2"}],LabProcess:[{step:"Add Equipment & Inventory Items",color:"#4A90E2"},{step:"Document Setup",color:"#4A90E2"},{step:"Experiment Workflow (Activity) Creation",color:"#4A90E2"},{step:"Quality Management",color:"#4A90E2"}],LabExperiment:[{step:"Creation of Lab Experiment Project ",color:"#4A90E2"},{step:"Lab Project Objective Defination",color:"#4A90E2"},{step:"Experiment Steps (Activity) Management",color:"#4A90E2"}],SalesLifecycleService:[{step:"Quotation/Sales Order",color:"#4A90E2"},{step:"Sales Invoice",color:"#4A90E2"},{step:"Payment Management",color:"#4A90E2"}],Sales:[{step:"Quotation/Sales Order",color:"#4A90E2"},{step:"Work Order Creation (Project)",color:"#4A90E2"},{step:"Sales Invoice",color:"#4A90E2"},{step:"Delivery Chalan",color:"#4A90E2"},{step:"Shipment Details",color:"#4A90E2"},{step:"Payment Management",color:"#4A90E2"}],Procurement:[{step:"Supplier(Vendor) Identification",color:"#4A90E2"},{step:"Purchase Order Creation",color:"#4A90E2"},{step:"Order-In (GRN)",color:"#4A90E2"},{step:"Return Handling",color:"#4A90E2"},{step:"Payment Tracking (Payables)",color:"#4A90E2"}],Compliance:[{step:"E-Way Bill",color:"#4A90E2"},{step:"TDS",color:"#4A90E2"},{step:"GST",color:"#4A90E2"}],Report:[{step:"Sales Report",color:"#4A90E2"},{step:"Procurement Report",color:"#4A90E2"},{step:"GST",color:"#4A90E2"},{step:"TDS",color:"#4A90E2"}],AnnualMaintenance:[{step:"Add and Update AMC Details",color:"#4A90E2"},{step:"View All AMC Records",color:"#4A90E2"}],"Work Order":[{step:"Product Category",color:"#4A90E2"},{step:"Inventory Setup",color:"#4A90E2"},{step:"Equipment Setup",color:"#4A90E2"},{step:"Document Setup",color:"#4A90E2"},{step:"Activity Creation",color:"#4A90E2"},{step:"Creation of Process",color:"#4A90E2"}],"Project Management":[{step:"Project/Work Order Creation",color:"#4A90E2"},{step:"User Activity Management",color:"#4A90E2"},{step:"Project Management",color:"#4A90E2"}],"Report & Dashboard":[{step:"Activity Dashboard",color:"#4A90E2"},{step:"Project Dashboard",color:"#4A90E2"},{step:"Resource Utilisation",color:"#4A90E2"}],"Inventory Operation":[{step:"Inventory Item Category",color:"#4A90E2"},{step:"Inventory Item",color:"#4A90E2"},{step:"Adding Inventory to Stock ",color:"#4A90E2"},{step:"Physical Inspection",color:"#4A90E2"},{step:"Consumption of Inventory",color:"#4A90E2"}],"Inventory Report & Dashboard":[{step:"Stock Item Report",color:"#4A90E2"},{step:"Valuation Report",color:"#4A90E2"},{step:"Expiry Report",color:"#4A90E2"}]},a=i[n]||i["Work Order"]||i["Project Management"]||i["Report & Dashboard"]||i["Inventory Operation"]||[],o=eo(),s=Xa();return(0,m.jsxs)(bv,{bgcolor:r,children:[(0,m.jsxs)(vv,{children:["Process Flow for ",n]}),(0,m.jsx)(yv,{children:(0,m.jsx)(wv,{style:{backgroundColor:"#ffffff"},children:(0,m.jsx)(kv,{children:a.map(((e,n)=>(0,m.jsxs)(t.Fragment,{children:[(0,m.jsx)(Sv,{onClick:()=>(e=>{o(`${s.pathname}?${e+1}`)})(n),children:(0,m.jsx)(jv,{children:e.step})}),n<a.length-1&&(0,m.jsx)(Av,{})]},n)))})})})]})},Ev=(n.p,n.p+"static/media/check_mark.0e730ab2b5bde0948106.png");const Rv=n.p+"static/media/img1.db8c904dcae430a66a73d8526e71a235.svg";const Pv=n.p+"static/media/add_claim_img.9a055c2bba7295dac45d64bb04a04aa7.svg";const Ov=n.p+"static/media/emp_advance.47f2f953acff90307e031575f25a4aa3.svg";const Tv=n.p+"static/media/approve_claim.1ec6d1911ec4293f92b19cff055accd6.svg";const Mv=n.p+"static/media/sattle_claim.db01cb0fc07cd07f6f46644e1d54b56c.svg";const zv=n.p+"static/media/expense_claim.fe819c5f6fed879968c2f6505a935b16.svg";const Iv=n.p+"static/media/holiday_calender.f7456615b990e8320273054160a2ef75.svg";const Dv=n.p+"static/media/leave_dashboard.364f838500dbe22de94eb7462c9bc5c5.svg";const Lv=n.p+"static/media/add_leave.41af44048f7af19e55b89ade3f692bcf.svg";const Fv=n.p+"static/media/approval_leave.2d0fcfea51af1264405792a096780307.svg";const Nv=n.p+"static/media/leave_report.335647f5a8f2793458866f7b39418816.svg";const Bv=n.p+"static/media/payroll_setup.27c03a07aabe3de8e5f5c49e11a0f209.svg";const qv=n.p+"static/media/appraisal_setup.8d56db0e9680f2c79eaf4f5818b62515.svg";const Hv=n.p+"static/media/onboarding.ac7f0f0a351db73dba6db17d722165a3.svg";const Wv=n.p+"static/media/employeeData.29f1d062a989a1e09d868b0a8fca86f0.svg";const _v=n.p+"static/media/exit_process.51b811c4d0e34efbe01988ecefd2afa0.svg";const Uv=n.p+"static/media/payroll-seup.5ac3bdff9f261cbfa49d54b17fa60796.svg";const Gv=n.p+"static/media/generate-salary.941e7229b7419bc7b30da4d1bbf66986.svg";const Kv=n.p+"static/media/post-salary.38b58bb0e0d588485e9492fddd098bea.svg";const Yv=n.p+"static/media/appraisal-setup-feature.251253d252bccb667d40f76d15e4f873.svg";const Vv=n.p+"static/media/self-appraisal.bb994ab17bfb97202c339ef0502301f2.svg";const Jv=n.p+"static/media/emp-appraisal.ec5ebcfbd25b2cf468604114605b8d75.svg";const Qv=n.p+"static/media/manager-evaluation.b1215000c57ff19889439ffeb81168d6.svg";const Zv=n.p+"static/media/check-in.35e76b5d8141b8b7ec1e2ba2e5fae5e9.svg";const Xv=n.p+"static/media/attendance-dashboard.9d1ac3e3cd24f1b9b3095cff2c75cb8f.svg";const $v=n.p+"static/media/emp-attendance.ba414dde36a92cf41e15037ccb25eb1c.svg";const ew=n.p+"static/media/WeeklyScore.3382a9fb5c88535bb2e21e7f6fae09c3.svg",tw=ia.div`
  width: 100%;
  height: 100%;
`,nw=ia.div`
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
`,rw=ia.div`
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
`,iw=ia.div`
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
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    /* align-items: center; */
    /* flex-direction: column; */
    /* gap: 20px; */
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* width: 160px; */
    gap: 2px;
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
`,aw=ia.div`
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
`,ow=e=>{let{data:n}=e;const r="Claim"===n?[{title:"Simplify Claim Expense Item Setup",subtitle:"Efficiently manage and control Expense Items with Service Item category setup.",description:"Define Service Item Categories to streamline Expense Items, giving employees a quick selection process for claim submissions. This setup enables you to capture GST Applicability, Submit of Expense Document Applicability, Limits for Approval, etc., to simplify and streamline your Claim Management Process.",benefits:["Define Service Item Categories","Flexible Expense Item Setup","Analysis of expense based on expense category/Item"],imageSrc:Rv,imageAlt:"Expense Setup",imgPosition:"left"},{title:"Employee Advance Tracking and Expense Claim Offset Against Advance",subtitle:"Employee Advance upload, tracking, and history of offset against Expense Claims.",description:"Manage Employee expense advance and efficiently track advance offset against each claim, offering a clear view of balances and outstanding advance amount. Enables decision-making process for effective advance amount.",benefits:["Advance Tracking","Clear offset records with claim details"],imageSrc:Ov,imageAlt:"Advance",imgPosition:"right"},{title:"Simplified Claim Expenses by Employee",subtitle:"Submit and track expense claims easily, anytime, anywhere.",description:"Employee can submit expense claims by selecting an Expense item, adding project details if needed, and uploading supporting documents like bills and receipts. The mobile app feature allows employee to capture and submit receipts instantly, making the process faster and more efficient for both employee and approval & settlement process for company on real-time basis.",benefits:["Simple Claim Submission","Upload Supporting Documents","Mobile-Friendly Convenience, Instant Receipt Capture","Expense auto linkage to projects and efficient project margin tracking"],imageSrc:Pv,imageAlt:"Add Claim",imgPosition:"left"},{title:"Smart Claim Flow for Quick, Transparent Approvals",subtitle:"Automated workflows simplify review and referral based on approval limit setup.",description:"Submitted claims are automatically routed to managers for review, with options to approve, reject, or send back for clarification. The system verifies manager approval authority based on grade and approval limits, forwarding claims to a higher-level manager if needed. This process maintains digital records for easy tracking and transparent decision-making. Approval process is enabled through Mobile app for real-time approval and quick settlement process.",benefits:["Flexible Review/Approval Flows","Approval limits based on Amount","Anytime, anywhere approval for speedy settlement"],imageSrc:Tv,imageAlt:"Advance Tracking Icon",imgPosition:"right"},{title:"Accurate and Streamlined Claim Settlements",subtitle:"Efficient settlement process with auto flow of data to accounts and linked projects.",description:"Once approved, claims move to the settlement phase where user can view all claims and advance records side by side for easy and effective settlement processing. The screen provides direct access to claim details and attached documents, with a bulk settlement feature to handle multiple claims efficiently. This seamless process with Accounts and Project management modules.",benefits:["Clear Claim View","Direct Document Access","Bulk Settlement Option","Reliable Processing with auto Account ledger processing"],imageSrc:Mv,imageAlt:"Settle Claim",imgPosition:"left"},{title:"Efficient Dashboard to Track All Expense Items",subtitle:"Instant insights on claim status and trends.",description:"The Expense Claim Dashboard provides graphical charts view for claim status and monthly trends, helping employee/Manager track claims at a glance. Extensive filter criteria based on expense category, expense item, departments, etc., for analysis and managing your expenses in a better way.",benefits:["Graphical Overviews with real-time update","Extensive Filter criteria for reports","Download reports in PDF/XLS"],imageSrc:zv,imageAlt:"Post Accounting",imgPosition:"right"}]:"Leave"===n?[{title:"Location-Wise - Simplified Management of Your Holiday Calendar",subtitle:"Easy and exhaustive way to take care of your complex organisational need of Holiday management (Single/Multi location).",description:"Manage Holiday setup digitally for your business for each Year across single/multiple locations. Holiday setup supports Mandatory and Optional holidays for each location. Supports Multiple leave types and yearly limit for each leave type. Setup enables better Project execution planning for the organisation and provides transparency for the employee to plan/utilise their Leave.",benefits:["Easy Exhaustive Setup across Single/Multi Location","Supports Audit trails and track changes in setup","Optional Holiday setup enables for each location","Transparent and accessible by all users/employees"],imageSrc:Iv,imageAlt:"Holiday Calendar",imgPosition:"left"},{title:"Dashboard for Complete Leave Overview",subtitle:"Easily track, manage, and plan your time off/utilisation of Leave.",description:"Employee can view detailed summary dashboard of their leave status, including total applied, approved, and pending leave categorized by leave type. Month-wise trend analysis enables the Manager to manage risk at project planning level. The system also provides a year-wise holiday list which is accessible through Mobile app, making it simple to manage leave information and plan time off effectively. Leave details are shared with Billing/Payroll modules seamlessly to eliminate any processing errors.",benefits:["Comprehensive Overview, Detailed for each leave type","Trend Analysis for better planning and risk management","Accessible from Mobile app","Shared with Payroll and Project Management modules seamlessly"],imageSrc:Dv,imageAlt:"Leave Dashboard",imgPosition:"right"},{title:"Apply Leave from Anywhere Anytime",subtitle:"Simple Leave Application: easy to apply and cancel from anywhere & anytime.",description:"Employee can apply for multiple types of leaves like Earned Leave, Work From Home, and Loss of Pay through both web and mobile apps. On submitted, the leave request automatically moves to manager's dashboard for approval, streamlining the process.",benefits:["Both Web and Mobile Convenience","Multiple leave types","Easy Application process with Holiday List Integration, to alter users"],imageSrc:Lv,imageAlt:"Leave Application",imgPosition:"left"},{title:"Swift Leave Approvals from Anywhere Anytime",subtitle:"Approve/Reject Leave Requests with Ease and Precision from Approver Dashboard.",description:"Managers can easily filter leave requests by individual employee or leave type, providing a clear view of total leave applied, approved, and pending for each employee. This organized approach allows for efficient navigation and prompt action. Managers can review details before making decisions, with a mandatory remark field to ensure clear communication with employees during the approval or rejection process.",benefits:["Organized and Filter View","Comprehensive Overview","Streamlined Approval Process","Efficient Leave Approval","Mobile Convenience","Approval History"],imageSrc:Fv,imageAlt:"Leave Approval",imgPosition:"right"},{title:"Organized Leave Insights for Efficient Management",subtitle:"Gain Complete Insights into Leave Patterns and Usage",description:"Managers can sort leave requests by individual employee or leave type, providing a clear and organized view. They also have access to a comprehensive annual leave report that includes all leave details across departments. This feature ensures efficient record-keeping and supports transparent leave management, helping managers make informed decisions.",benefits:["Informed Decision-Making","Exportable Reports","Leave Balances at a Glance","Customizable Reports"],imageSrc:Nv,imageAlt:"Leave Reports",imgPosition:"left"}]:"Payroll"===n?[{title:"Flexible and Compliant Payroll Management",subtitle:"Configurable Salary structure with predefined integrated TDS/PT/PF/Gratuity calculation for seamless employee compensation.",description:"Our HR management offers a comprehensive system for managing employee salary structures, and compliance setup in accordance with government regulations. Companies can create tailored salary structures for different employee grades. The platform also facilitates setting up Provident Fund, Gratuity, Employee State Insurance (ESI), and TDS, PT tax parameters, ensuring full compliance and transparency in payroll management. In addition to this, any other salary components like Variable Pay and custom deductions can be configured in the system, making it highly flexible for any complex scenario.",benefits:["Configurable pay scale grades","Configurable salary structures with formula builder","Customizable payslip design","Dynamic Salary Structures to include compliance like PF, Gratuity, ESI, PT, and TDS","Audit trails for Setup control","Contract Rate setup for contract employee"],imageSrc:Uv,imageAlt:"Payroll & Compliance",imgPosition:"left"},{title:"Streamlined Monthly Salary Generation with Real-Time Error Validation",subtitle:"Seamless access to Attendance data for accurate and quick Payroll processing.",description:"Our payroll processing tool enables quick salary generation while minimizing errors through integration with attendance and leave data. This facilitates managers with accurate data for decision-making. The system supports importing employee data from Attendance, HRM, and Leave Management modules for Payroll processing. Along with the full salary computation, the payroll system integrates with Payment Disbursement to enable online transfer, checks with employee pay account details for direct salary disbursement through net banking etc.",benefits:["Accurate Payroll Generation","Reduced Manual Errors","Integrated with Attendance and Leave","Direct Salary Disbursement"],imageSrc:Gv,imageAlt:"Salary Process",imgPosition:"right"},{title:"Accurate Accounting Entries for Financial Clarity",subtitle:"Ensuring error-free records with detailed reporting.",description:"After generating salaries, the HR manager creates accounting entries to maintain precise financial records. The system displays all payable heads, showing amounts already posted and pending. Managers can download detailed reports in PDF or Excel formats and include specific posting remarks for transparency, ensuring a well-documented and accurate accounting process.",benefits:["Precise Accounting Entries","Payable Overview","Detailed Reporting"," Transparent Documentation","Error-Free Financial Management"],imageSrc:Kv,imageAlt:"Post Salary ",imgPosition:"left"}]:"HR"===n?[{title:"Job Offer Records - Onboarding Process",subtitle:"Smooth Onboarding and Integration of New Employees into the Organization",description:"Enables you to keep the Job offer records with unique reference ID for easy traceability and managing the offer letter and onboarding process. Custom templates for offer and joining letters allow HR to handle onboarding smoothly and efficiently. Provides data for analysis for the recruitment process.",benefits:["Thorough Appointee Management","Link Salary structure to include CTC details in offer letter","Dynamic Offer, Appointment Letters","One-click employee data creation from offer details"],imageSrc:Hv,imageAlt:"Onboarding",imgPosition:"left"},{title:"Complete Employee Lifecycle Management",subtitle:"Centralized Employee Data Management - with Multi Location.",description:"This module enables streamlined employee data management, allowing HR and Employee managers to sort, search, and filter employee records by various criteria like Department and Grade for easy analysis and reports. Both permanent and contract employees can be managed with different salary structures. All lifecycle stages like onboarding process, initiating separation processes, completion of probation period, etc., can be managed smoothly for each employee data by the authorized manager. Optional fields for documents and bank details ensure comprehensive record-keeping while simplifying management.",benefits:["Department and Grade structure - for data segregation and easy management.","Automatic ID Generation for Employee, and Contract Employee.","Centralized Information - Data Accuracy and Integrity","Compliance and Record-Keeping - integrated with document management system.","Manage Employee Billing Rates","Contract Employee Management","Audit Tracing for employee data. Supports bulk record uploads from existing system."],imageSrc:Wv,imageAlt:"Employee data",imgPosition:"right"},{title:"Streamlined Exit Process with Customized Setup",subtitle:"Ensuring Smooth Exit with Assets and KT Transfer",description:"With customized exit process setup, you can track and complete all the steps needed to be done by the employee before he/she exits the system. This can be knowledge transfer, handover of assets, exit interview, to name a few. Employee can initiate the separation process, which can be managed by approval/review flow.",benefits:["Customized exit process setup","Smooth Transitions and completion of activity by departments.","Facility to capture document evidence at each step."],imageSrc:_v,imageAlt:"Exit Process",imgPosition:"left"}]:"Appraisal"===n?[{title:"Efficient Appraisal System for Accurate Assessments",subtitle:"Completely Configurable Appraisal KPI Structure Definition.",description:"Highly flexible and configurable appraisal structure to set up your KPI targets for each employee grade level. Supports and is configurable for quarterly, half-yearly, and yearly appraisal cycles. Self-assessment, and provides scores for key performance indicators (KPIs), and submits the appraisal to the Employee manager, who evaluates and gives scores for each KPI. Review process by Reviewer to normalize the grades for an appraisal cycle for a particular employee grade. This structured process ensures accurate and fair evaluations, fostering transparency in performance-based benefits.",benefits:["Flexible Appraisal structure with KPI weightage.","Historical appraisal records reference for employee improvement and training plan.","Provision to upload supporting documents.","Structured Process, Fair Performance Assessment"],imageSrc:Yv,imageAlt:"Holiday Calendar",imgPosition:"left"},{title:"Self-Evaluation for Each KPI Goal",subtitle:"Transparent and KPI Goals for Each Cycle.",description:"Employee can self-initiate and give his own score. Document evidence, if required, can be uploaded. Historical appraisal data for earlier cycles is accessible.",benefits:["Overall score is rule-based calculation","Seamlessly flows to employee manager","Historical Appraisal Data access"],imageSrc:Vv,imageAlt:"Leave Dashboard",imgPosition:"right"},{title:"Manager Evaluation for Each KPI Goal.",subtitle:"Flexible Structure and Score for Each KPI.",description:"Manager evaluates and provides the score for each KPI Goal. The final score is auto-calculated based on rule setup. After providing the score, Manager sends the appraisal to the employee for final sign-off and remarks.",benefits:["Overall score for Manager is rule-based calculation","Seamlessly flows between employee and manager","Historical Appraisal Data access"],imageSrc:Qv,imageAlt:"Leave Application",imgPosition:"left"},{title:"Review Process for Grade Evaluation",subtitle:"Normalization of Appraisal Grades by Reviewer.",description:"Normalization of appraisal grades by Reviewer at each employee grade level. Performance-linked salary components (like variable pay) evaluation process. Reports for each appraisal cycle and employee grade levels.",benefits:["Review process","Reports for performance-based salary components.","Customizable Reports"],imageSrc:Jv,imageAlt:"Leave Approval",imgPosition:"right"}]:"Attendance"===n?[{title:"Attendance- Anytime- Anywhere",subtitle:"Streamlined Check-In with Location Tracking and Daily Task Insights.",description:"Our attendance system combines flexibility and precision, allowing employees to mark their workdays from the web or mobile app. The mobile app's check-in and check-out features are equipped with real-time location tracking, automatically capturing the exact location, date, and time to ensure accurate and efficient attendance records. Additionally, during check-out, employees are prompted to fill out a remarks field, providing a brief summary of their day\u2019s tasks. This feature enables managers to gain valuable insights into daily productivity, fostering accountability and enhancing team management.",benefits:["Accurate Time & Location Tracking","Enhanced Flexibility"," Improved Productivity Monitoring","Efficient Reporting"],imageSrc:Zv,imageAlt:"Check-in",imgPosition:"left"},{title:"Stay Informed, Stay Organized",subtitle:"Dynamic Calendar View for Attendance, Holidays, and Leave Management.",description:"Our attendance system offers a dynamic calendar view that allows employees to easily track their attendance status, view holiday lists, and monitor their leave days. After checking in and out, employees can submit their attendance records weekly for manager review, ensuring accountability and streamlined communication. This feature not only keeps employees informed but also helps managers efficiently oversee attendance and leave management, fostering a productive work environment.",benefits:["Weekly Submission for Review","Dynamic Calendar View","Multiple Status Display: On-Time, Weekly Duration, Mobile Check-ins "],imageSrc:Xv,imageAlt:"Attendance View",imgPosition:"right"},{title:"Comprehensive Attendance Insights",subtitle:"Efficient Review and Approval for Enhanced Team Productivity.",description:"Our attendance management system provides managers with a complete overview of their team\u2019s attendance records. Once an employee submits their attendance, it is forwarded for review, ensuring accountability. If an employee encounters issues completing the process, managers can seamlessly update attendance for previous days through the manager portal, including remarks for full transparency. With access to detailed attendance records, managers can also update check-in and check-out times with geo-location data as needed. This system supports weekly approvals, streamlining the management of attendance and promoting effective team oversight.",benefits:["Streamlined Review Process","Flexibility in Attendance Management","Transparency with Remarks","Geo-Location Updates"," Weekly Approval Workflow","Employee Status: On-Time, Weekly Duration, Mobile Check-ins"],imageSrc:$v,imageAlt:"Approval Attendance",imgPosition:"left"},{title:"Transform Task Management & Performance Tracking with Atomwalk HRM",subtitle:"Empower your team with clear task assignments and insightful performance evaluations.",description:"With Atomwalk Technology HRM, task allocation and performance tracking become seamless. Managers can easily assign weekly tasks, monitor progress, and assess employee performance, all within a structured framework. Employees are able to track their task completion and attendance efficiently, while managers have a clear overview of their team's weekly outputs. The Weekly Score Dashboard offers both employees and managers a comprehensive view of performance scores, with insightful graphical charts to help identify trends and growth opportunities. This feature creates a transparent and engaging performance management system, driving organizational success.",benefits:["Allocate up to three tasks per week, with detailed tracking and notes.","Employees can mark tasks complete and submit weekly attendance in one step.","Managers can review, approve/reject submissions, and assign performance ratings.","Personalized performance scores and interactive charts for both employees and managers.","Graphical performance scores highlight trends, growth, and team achievements."],imageSrc:ew,imageAlt:"Weekly Score Dashboard",imgPosition:"right"}]:[{title:"Complete Employee Lifecycle Management",subtitle:"Centralized Employee Data Management - with Multi Location.",description:"This module enables streamlined employee data management, allowing HR and Employee managers to sort, search, and filter employee records by various criteria like Department and Grade for easy analysis and reports. Both permanent and contract employees can be managed with different salary structures. All lifecycle stages like onboarding process, initiating separation processes, completion of probation period, etc., can be managed smoothly for each employee data by the authorized manager. Optional fields for documents and bank details ensure comprehensive record-keeping while simplifying management.",benefits:["Department and Grade structure - for data segregation and easy management.","Automatic ID Generation for Employee, and Contract Employee.","Centralized Information - Data Accuracy and Integrity","Compliance and Record-Keeping - integrated with document management system.","Manage Employee Billing Rates","Contract Employee Management","Audit Tracing for employee data. Supports bulk record uploads from existing system."],imageSrc:Bv,imageAlt:"Payroll & Compliance",imgPosition:"left"},{title:"Job Offer Records - Onboarding Process",subtitle:"Smooth Onboarding and Integration of New Employees into the Organization",description:"Enables you to keep the Job offer records with unique reference ID for easy traceability and managing the offer letter and onboarding process. Custom templates for offer and joining letters allow HR to handle onboarding smoothly and efficiently. Provides data for analysis for the recruitment process.",benefits:["Thorough Appointee Management","Link Salary structure to include CTC details in offer letter","Dynamic Offer, Appointment Letters","One-click employee data creation from offer details"],imageSrc:qv,imageAlt:"Salary Process",imgPosition:"right"},{title:"Streamlined Exit Process with Customized Setup",subtitle:"Ensuring Smooth Exit with Assets and KT Transfer",description:"With customized exit process setup, you can track and complete all the steps needed to be done by the employee before he/she exits the system. This can be knowledge transfer, handover of assets, exit interview, to name a few. Employee can initiate the separation process, which can be managed by approval/review flow.",benefits:["Customized exit process setup","Smooth Transitions and completion of activity by departments.","Facility to capture document evidence at each step."],imageSrc:qv,imageAlt:"Payslip Generation",imgPosition:"left"}],i=Xa();return(0,t.useEffect)((()=>{const e=i.search.match(/\?(\d+)/),t=e?parseInt(e[1],10):NaN;console.log(t,"Step value parsed from URL");const n=isNaN(t)?0:700+700*(t-1);n>0&&window.scrollTo({top:n,behavior:"smooth"})}),[i.search]),(0,m.jsx)(tw,{children:r.map((e=>(0,m.jsx)(nw,{children:"left"===e.imgPosition?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(rw,{children:(0,m.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,m.jsxs)(aw,{children:[(0,m.jsx)("h1",{children:e.title}),(0,m.jsx)("h2",{children:e.subtitle}),(0,m.jsx)("p",{style:{color:"#666"},children:e.description}),(0,m.jsx)(iw,{children:(0,m.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:Ev,alt:"Check mark"}),(0,m.jsx)("span",{children:e})]},t)))})})]})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(aw,{children:[(0,m.jsx)("h1",{children:e.title}),(0,m.jsx)("h2",{children:e.subtitle}),(0,m.jsx)("p",{style:{color:"#666"},children:e.description}),(0,m.jsx)(iw,{children:(0,m.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:Ev,alt:"Check mark"}),(0,m.jsx)("span",{children:e})]},t)))})})]}),(0,m.jsx)(rw,{children:(0,m.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},sw=()=>{const e=Xa(),n="/claim.html"===e.pathname,r="/leave.html"===e.pathname,i="/employeehr.html"===e.pathname,a="/payroll.html"===e.pathname,o="/attendance.html"===e.pathname,s="/appraisal.html"===e.pathname,l=(0,t.useMemo)((()=>n?{title:"Comprehensive Expense and Claim Management",description:"Streamline your expense claim process with fast approvals, secure uploads, and real-time tracking all in one place.",image:hv,data:"Claim"}:r?{title:"Streamlined Leave and Holiday Management System",description:"Digitally track holidays, manage leave requests, and ensure transparency with streamlined workflows for employees and managers.",image:gv,data:"Leave"}:i?{title:"Empowering HR with Comprehensive Employee Management",description:"Streamline records, simplify processes, and ensure transparency across every stage of the employee lifecycle.",image:xv,data:"HR"}:o?{title:"Smart Attendance Management",description:"Seamlessly track attendance and monitor productivity with real-time insights and dynamic tools.",image:xv,data:"Attendance"}:a?{title:"Accurate and Automated Payroll Solutions",description:"Simplify payroll with Atomwalk HRM's automated system, handling salaries, deductions, and taxes with accuracy. Real-time integration ensures seamless reporting and easy payslip access for employees",image:xv,data:"Payroll"}:s?{title:"Dynamic and Transparent Appraisal System",description:"The appraisal system supporting KPI-based evaluations, with self-assessment, manager scoring, and grade normalization for fair, transparent performance reviews and structured reporting.",image:xv,data:"Appraisal"}:{title:"Welcome to Employee Management",description:"Explore our various modules designed to simplify your HR processes.",image:xv,data:"HR"}),[n,r,i]);eo();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Ep,{title:l.title,description:l.description,background:"#eae3ff",lead:!0,img:l.image}),(0,m.jsx)(Cv,{data:l.data}),(0,m.jsx)(ow,{data:l.data})]})},lw=n.p+"static/media/Mockup5-Lead.780e9b50bcaba7281d4d.png",cw=n.p+"static/media/Customermage-removebg-preview.fa8bcba86c44de2d5172.png",dw=n.p+"static/media/Pattner.7901d1ba5f15d16330b0.png",uw=n.p+"static/media/Campain.d60d77c952a36990bf12.png",pw=n.p+"static/media/amc.ac39eca463cd0e803f59.png";n.p;const fw=n.p+"static/media/CrmMocups2.81408b9188ea4fec7c8668eb20364d07.svg";const mw=n.p+"static/media/reprtcrm.ddd340f58a70d18ff8d68b12801b3e86.svg";const hw=n.p+"static/media/CrmMocups.02d59cd2a959572890ba43ce2e89dd72.svg";const gw=n.p+"static/media/marklost.cfebefaba4489099397f3f206b913456.svg";const xw=n.p+"static/media/campain1.b4122632766e92f2daa05c2b20181412.svg";const bw=n.p+"static/media/campign2.4055d8996e265fffaea8bd04cab1f886.svg";const yw=n.p+"static/media/campgin3.0a826edc1ec9bc8302583bdf5ad7070d.svg";const vw=n.p+"static/media/Customerdata1.0e28250063923f53de79a1bd2b30d4bf.svg";const ww=n.p+"static/media/odermanagement.645b8d26cc93f21e5cc84ea51a10f90f.svg";const kw=n.p+"static/media/Amc1.6c5c29e5b88c8a2d9da02d8566ebd3e5.svg";const Sw=n.p+"static/media/Reportanddashboard.e997122b30e0e2d1fe8f2fe3540400d9.svg";const jw=n.p+"static/media/Chanelpatner.ecb62a43826376f28ce51dcbbe78d7ef.svg";const Aw=n.p+"static/media/pattner.9875232d127a10a1ab83e1f81f0144c5.svg";const Cw=n.p+"static/media/multyreport.6931593f994c35d568aebf74adbd0dad.svg";const Ew=n.p+"static/media/Tds.8f9a510eeaba7e074438f42ccb997e05.svg",Rw=ia.div`
  width: 100%;
  height: 100%;
`,Pw=ia.div`
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
`,Ow=ia.div`
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
`,Tw=ia.div`
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
`,Mw=ia.div`
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
`,zw=e=>{let{data:n}=e;console.log(n,"  dcjcnd");const r="leadManagement"==n?[{title:"Streamlined Lead Engagement",subtitle:"Effortless Management for Higher Conversions",description:'This fully integrated dashboard in the Atomwalk CRM application provides users with an intuitive workspace to access and manage lead details effortlessly. Users can quickly add new leads, view a comprehensive lead list, and upload data in bulk to keep information up-to-date. Additionally, tasks can be assigned to specific leads for timely follow-ups, while a detailed Lead Performance Dashboard offers insight into engagement metrics and conversion progress. The "Add Product Interest" feature lets users associate specific product interests with each lead, enhancing personalization and targeted engagement. With these functionalities in one place, the Atomwalk CRM helps optimize lead nurturing and boosts overall conversion rates.',benefits:["Centralized Lead Insights","Seamless Team Collaboration","Optimized Engagement Strategies"],imageSrc:fw,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Enhanced Lead Detailing and Task Management",subtitle:"Boost Productivity with Organized Workflow",description:"Atomwalk CRM enables users to update lead profiles with detailed information, including lead source, contact data, and preferences, ensuring a personalized approach to engagement. Tasks can be assigned to leads for follow-ups, meetings, or next steps, with reminders to maintain timely actions. Users can also record product interests to tailor interactions to specific requirements and even reassign ownership of leads to ensure proper management. These features provide a structured workflow, fostering collaboration and enhancing lead conversion outcomes.",benefits:["Detailed Lead Profiles","Efficient Task Management","Seamless Ownership Reassignment"],imageSrc:hw,imageAlt:"Lead Enrichment and Task Management Overview",imgPosition:"left"},{title:"Lead Tracking and Status Management",subtitle:"Stay Updated with Real-Time Lead Insights",description:"Atomwalk CRM offers tools to monitor lead progress and track all interactions seamlessly. Users can update lead status as Active, Inactive, or Prospect to reflect real-time progress. The system also provides a comprehensive view of each lead\u2019s task list, current tasks, contact details, and product interests, ensuring every aspect of the lead is easily accessible for effective follow-ups and decision-making.",benefits:["Real-Time Lead Insights","Comprehensive Tracking","Streamlined Workflow Management"],imageSrc:mw,imageAlt:"Lead Tracking Overview",imgPosition:"right"},{title:"Streamline Lead Conversions",subtitle:"Quick and Transparent Lead Conversion Process",description:"With Atomwalk CRM, users can mark leads as Lost to maintain accurate records for analysis or move successful conversions into the appropriate sales or customer management pipeline. Additionally, purchase orders can be updated directly within the system, streamlining the transition from lead to customer and ensuring a smooth handoff.",benefits:["Accurate Record-Keeping","Streamlined Conversions","Integrated Purchase Order Management"],imageSrc:gw,imageAlt:"Lead Conversion",imgPosition:"left"}]:"campaignManagement"==n?[{title:"Create and Launch Campaigns Effortlessly",subtitle:"Effortless Campaign Management - Advertise Smarter with a Few Simple Clicks",description:"The \u201cCreate Campaign\u201d module in Atomwalk\u2019s CRM simplifies the process of advertising to your client base. Define your campaign name, target customer groups, set schedules, and customize message content\u2014all from one streamlined interface. Whether you\u2019re launching a one-time campaign or scheduling recurring ones, this tool makes it intuitive and efficient.",benefits:["Targeted outreach","Scheduling Flexibility ","User-Friendly Interface"],imageSrc:xw,imageAlt:"Campaign Management Dashboard",imgPosition:"left"},{title:"Design Campaigns That Reflect Your Brand",subtitle:"Empower Your Communication with Flexible Templates",description:"Atomwalk allows you to create fully customizable campaign templates or use pre-designed system templates for faster setup. With options to add headers, footers, and visuals, these templates help you maintain branding consistency while driving leads effectively. You can also choose a background color or image to align with your business theme, ensuring your communication stands out.",benefits:["Tailored templates","Pre-built options","Dynamic content"],imageSrc:bw,imageAlt:"Campaign Performance Tracking",imgPosition:"right"},{title:"Engage Customers, Track Responses",subtitle:"Interactive Buttons for Real-Time Client Feedback",description:"The \u201cResponse View\u201d feature enhances customer engagement by adding interactive response buttons and voting options directly to your campaigns. Whether it\u2019s a \u201cYes\u201d or \u201cNo\u201d decision, or a custom voting setup, this feature provides actionable insights from your clients. Easily analyze responses and make data-driven decisions to optimize future campaigns.",benefits:["Send Emails","Real-Time Tracking","Detailed Analytics"],imageSrc:yw,imageAlt:"Campaign Performance Tracking",imgPosition:"left"}]:"CustomerManagement"==n?[{title:"Comprehensive Customer Management",subtitle:"Easily Access, Track, and Update Customer Information",description:"Atomwalk CRM enables users to view and manage a complete customer list, import or upload customer data in bulk, and update customer profiles effortlessly. This ensures accurate and up-to-date records for better customer interaction and service.",benefits:["Customer List View","Add and Update Customer Details","Track Product Interests and Payments"],imageSrc:vw,imageAlt:"CustomerManagement",imgPosition:"right"},{title:"Task and TDS Management",subtitle:"Streamline Customer Operations",description:"Manage customer-related tasks effectively by assigning and tracking them within the CRM. Additionally, users can add and upload TDS (Tax Deducted at Source) details, ensuring compliance and seamless financial management for each customer.",benefits:["Organized Task Management","Simplified TDS Handling","Improved Workflow Efficiency"],imageSrc:Ew,imageAlt:"Customer Task and TDS Management Overview",imgPosition:"left"},{title:"Invoices, Payments, and Product Interests",subtitle:"Streamlined Financial and Sales Data",description:"Users can manage invoices and payment details with ease, including adding and viewing sales invoices. The system also allows the addition of product interests to customer profiles, supporting targeted sales strategies and personalized engagement.",benefits:["Efficient Invoice Management","Clear Payment Tracking","Enhanced Product Interest Tracking"],imageSrc:ww,imageAlt:"Invoice and Product Interest Management Overview",imgPosition:"right"},{title:"Track and Manage Warranties with Ease",subtitle:"Streamline Your AMC and Warranty Operations",description:"Atomwalk enables you to efficiently add and manage warranty details for your products. With options to set warranty periods, reminders, and customer details, you can ensure timely follow-ups and improve service management. The user-friendly interface allows you to view and edit warranty records, ensuring no missed renewals or support cases.",benefits:["Simplified warranty management","Automatic AMC reminders","Comprehensive customer records"],imageSrc:kw,imageAlt:"Warranty Management Dashboard",imgPosition:"left"},{title:"Gain Actionable Insights with Reports and Dashboards",subtitle:"Visualize Your Business Performance at a Glance",description:"Atomwalk provides a comprehensive suite of reports and dashboards that help you monitor key business metrics in real-time. From Customer Group-wise Distribution to tracking Top 5 Customer Sales and Quotations, you can analyze performance trends and make informed decisions. The Receivable Dashboard ensures you stay on top of outstanding payments, enhancing cash flow management.",benefits:["Real-time insights","Customizable reports","Improved decision-making","Clear receivables tracking"],imageSrc:Sw,imageAlt:"Reports and Dashboard View",imgPosition:"right"}]:"Channelpartner"==n?[{title:"Effortlessly Manage Your Channel Partners",subtitle:"Streamline Partner Onboarding and Management",description:"With Atomwalk, managing channel partners becomes seamless and efficient. This module allows you to record and organize comprehensive details such as company information, contact details, GSTN, PAN, TAN, and more. Easily classify partners into groups, identify their roles (e.g., supplier or partner), and maintain a central database for quick access and streamlined communication.",benefits:["Comprehensive partner records","Seamless onboarding process","Simplified partner classification","Efficient partner management"],imageSrc:jw,imageAlt:"Channel Partner Management Dashboard",imgPosition:"right"},{title:"Track Orders and Sales with Precision",subtitle:"Comprehensive Order Management for Better Insights",description:"Atomwalk\u2019s Order Information Tracking module enables you to efficiently manage and monitor all aspects of your orders. From maintaining task lists and tracking product interests to managing TDS (Tax Deducted at Source) and generating sales invoices, this module streamlines your sales operations. Gain complete visibility into your order lifecycle and ensure timely updates for smooth business operations.",benefits:["End-to-end order tracking","Simplified TDS management","Integrated sales invoice generation","Task list for better organization","Track product interests and customer preferences"],imageSrc:Aw,imageAlt:"Order Tracking Dashboard",imgPosition:"left"},{title:"Generate Detailed Reports with Ease",subtitle:"Comprehensive Multi-Report Generation for Channel Partners",description:"Atomwalk\u2019s Multi-Report Generation feature within Channel Partner Management allows you to generate customized reports across various metrics and data points. Whether you need performance insights, transaction history, sales contributions, or partner-specific analysis, this module empowers you with actionable data. Export reports in multiple formats for seamless sharing and better decision-making.",benefits:["Generate partner-specific reports","Detailed performance insights","Track sales contributions and trends","Export reports in multiple formats (PDF, Excel, etc.)","Customizable reporting options"],imageSrc:Cw,imageAlt:"Multi-Report Dashboard for Channel Partners",imgPosition:"right"}]:[{title:"Easily Add and Update AMC Details",subtitle:"Streamline Your Annual Maintenance Contract Management",description:"Atomwalk simplifies the process of managing AMC details for your customers. Add new AMC records, update existing ones, and set reminders to ensure timely contract renewals. With features like warranty integration and customer-specific tracking, this module ensures you stay ahead in providing exceptional post-sales support.",benefits:["Effortless AMC addition and updates","Integrated warranty and AMC tracking","Set reminders for timely renewals"],imageSrc:kw,imageAlt:"Campaign Performance Tracking",imgPosition:"right"},{title:"Access All AMC Records in One Place",subtitle:"Comprehensive Dashboard for Managing AMC Records",description:"With Atomwalk, you can access a consolidated list of all AMC records in one dashboard. Filter and search records by customer, product, or renewal status for quick insights. The intuitive interface allows you to stay on top of active contracts, expired warranties, and pending renewals, ensuring no service opportunity is missed.",benefits:["Centralized AMC record management","Quick filtering and search options","Enhanced visibility for active and expired contracts"],imageSrc:kw,imageAlt:"Campaign Performance Tracking",imgPosition:"left"}],i=Xa();return(0,t.useEffect)((()=>{const e=i.search.match(/\?(\d+)/),t=e?parseInt(e[1],10):NaN;console.log(t,"Step value parsed from URL");const n=isNaN(t)?0:700+700*(t-1);n>0&&window.scrollTo({top:n,behavior:"smooth"})}),[i.search]),(0,m.jsx)(Rw,{children:r.map((e=>(0,m.jsx)(Pw,{children:"left"===e.imgPosition?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Ow,{children:(0,m.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,m.jsxs)(Mw,{children:[(0,m.jsx)("h1",{children:e.title}),(0,m.jsx)("h2",{children:e.subtitle}),(0,m.jsx)("p",{style:{color:"#666"},children:e.description}),(0,m.jsx)(Tw,{children:(0,m.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:Ev,alt:"Check mark"}),(0,m.jsx)("span",{children:e})]},t)))})})]})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(Mw,{children:[(0,m.jsx)("h1",{children:e.title}),(0,m.jsx)("h2",{children:e.subtitle}),(0,m.jsx)("p",{style:{color:"#666"},children:e.description}),(0,m.jsx)(Tw,{children:(0,m.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:Ev,alt:"Check mark"}),(0,m.jsx)("span",{children:e})]},t)))})})]}),(0,m.jsx)(Ow,{children:(0,m.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},Iw=()=>{const[e,n]=(0,t.useState)(""),r=Xa(),i=[{title:"Lead Management",titles:"Lead",description:"Atomwalk CRM's Lead Management system helps businesses efficiently track and manage leads throughout their sales pipeline. Users can add, update, and categorize leads, mark them as active or inactive, and assign ownership for better accountability. This system ensures that leads are properly followed up, improving conversion rates and optimizing the sales process.",background:"#d6e7ff",img:`${lw}`},{title:"Customer Management",titles:"Customer",description:"Atomwalk CRM simplifies organizing and maintaining customer data. Users can view, import, and update customer lists, manage tasks, add and upload TDS details, handle invoices and payments, and associate product interests for personalized engagement. These features streamline customer operations and enhance service efficiency.",background:"#d6e7ff",img:`${cw}`},{title:"Channel Partner Management",titles:"Partner",description:"Atomwalk CRM's Channel Partner Management system enables businesses to effectively manage their relationships with partners. It helps track partner activities, agreements, and contributions, streamlining collaboration to drive mutual growth. The system also provides visibility into partner performance, ensuring transparency and maximizing the value of partnerships.",background:"#d6e7ff",img:`${dw}`},{title:"Campaign Management",titles:"Campaign",description:"Atomwalk CRM's Campaign Management system allows businesses to plan, execute, and analyze marketing campaigns across multiple channels. It enables users to track campaign performance, manage budgets, and segment audiences for targeted outreach. The system provides real-time insights, helping to optimize strategies for better engagement and higher ROI.",background:"#d6e7ff",img:`${uw}`},{title:"Annual Maintenance Contract",titles:"AnnualMaintenance",description:"Efficiently manage, update, and view Annual Maintenance Contracts with Atomwalk CRM.",background:"#d6e7ff",img:`${pw}`}];(0,t.useEffect)((()=>{r.pathname.includes("leadManagement")?n("leadManagement"):r.pathname.includes("CustomerManagement")?n("CustomerManagement"):r.pathname.includes("Channelpartner")?n("Channelpartner"):r.pathname.includes("aMCTracking")?n("aMCTracking"):n("campaignManagement")}),[r.pathname]);const a=r.pathname.includes("leadManagement")?i[0]:r.pathname.includes("CustomerManagement")?i[1]:r.pathname.includes("Channelpartner")?i[2]:r.pathname.includes("campaignManagement")?i[3]:r.pathname.includes("aMCTracking")?i[4]:i[0];return(0,m.jsxs)("div",{children:[(0,m.jsx)(Ep,{title:a.title,description:a.description,background:a.background,img:a.img,lead:!0}),(0,m.jsx)(Cv,{bgcolors:"#e8f1fe",data:a.titles}),(0,m.jsx)(zw,{data:e})]})},Dw=n.p+"static/media/Leadmanagement.89aea16cb4591163e02a.png",Lw=n.p+"static/media/CustomerMangement.3b6acb8648dc2e328cbf.png",Fw=n.p+"static/media/partnership.4462db344dbb58334dd7.png",Nw=n.p+"static/media/asset-management.32d672a7cc30dd5fb4c6.png",Bw=ia.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,qw=ia.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,Hw=ia.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,Ww=ia.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,_w=ia.div`
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
`,Uw=ia.div`
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
`,Gw=ia.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,Kw=ia.p`
  font-size: 1em;
  color: #666;
`,Yw=()=>{const e=e=>{window.location.href=`/${e}`};return(0,m.jsxs)(Bw,{children:[(0,m.jsx)(qw,{children:"Key Features"}),(0,m.jsx)(Hw,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,m.jsxs)(Ww,{children:[(0,m.jsxs)(_w,{onClick:()=>e("leadManagement.html"),children:[(0,m.jsx)(Uw,{bgColor:"#D8F5E3",children:(0,m.jsx)("img",{src:Dw,alt:"Speed"})}),(0,m.jsx)(Gw,{children:" Lead Management:"}),(0,m.jsx)(Kw,{children:"Streamline and track leads from acquisition to conversion, ensuring efficient follow-ups and maximizing sales opportunities."})]}),(0,m.jsxs)(_w,{onClick:()=>e("CustomerManagement.html"),children:[(0,m.jsx)(Uw,{bgColor:"#F0E7FF",children:(0,m.jsx)("img",{src:Lw,alt:"Trust"})}),(0,m.jsx)(Gw,{children:"Customer Management:"}),(0,m.jsx)(Kw,{children:"Efficiently manage your customer data with receivable tracking, Manage customer tasks. AMC, multiple addresses, and support  effortlessly."})]}),(0,m.jsxs)(_w,{onClick:()=>e("Channelpartner.html"),children:[(0,m.jsx)(Uw,{bgColor:"#E0F7FC",children:(0,m.jsx)("img",{src:Fw,alt:"Accuracy"})}),(0,m.jsx)(Gw,{children:"Channel partner management:"}),(0,m.jsx)(Kw,{children:"Manage channel partners as extended arms to grow your business with Atomwalk CRM."})]}),(0,m.jsxs)(_w,{onClick:()=>e("aMCTracking.html"),children:[(0,m.jsx)(Uw,{bgColor:"#FFF2E0",children:(0,m.jsx)("img",{src:Nw,alt:"Reliability"})}),(0,m.jsx)(Gw,{children:"Annual Maintenance Contract:"}),(0,m.jsx)(Kw,{children:"Efficiently manage, update, and view Annual Maintenance Contracts with Atomwalk CRM."})]}),(0,m.jsxs)(_w,{onClick:()=>e("campaignManagement.html"),children:[(0,m.jsx)(Uw,{bgColor:"#ffe0f5",children:(0,m.jsx)("img",{src:wb,alt:"Reliability"})}),(0,m.jsx)(Gw,{children:"Campaign Management:"}),(0,m.jsx)(Kw,{children:"Plan, execute, and analyze marketing campaigns to reach target audiences, track results, and optimize strategies for higher engagement and ROI."})]})]})]})},Vw=()=>(0,m.jsxs)("div",{children:[(0,m.jsx)(Ep,{title:"Comprehensive CRM platform",description:"Atomwalk CRM is a comprehensive Customer Relationship Management (CRM) system that streamlines and manages various business operations, focusing on lead, customer, and channel partner management. Atomwalk also supports critical business functionalities like AMC management, campaign management, sales manager performance dashboard and task management .",background:"#d6e7ff",crm:!0}),(0,m.jsx)(rb,{data:"Customer"}),(0,m.jsx)(Yw,{}),(0,m.jsx)(pv,{data:"CRM"})]}),Jw=n.p+"static/media/HeroLabSection.1606c37d4e5ec7047aa4.png",Qw=n.p+"static/media/science.8f9dee670ee1dc6ebb6e.png",Zw=n.p+"static/media/laboratory.10d5fe66121f8e772dde.png",Xw=n.p+"static/media/labmagement.ba84ebd47e20da342faf.png",$w=n.p+"static/media/equpment.d3afd0d0f3a6fd638e31.png",ek=(n.p,ia.div`
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
`),tk=ia.div`
  max-width: 50%;
  margin-top: 100px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 150px;
  }
`,nk=ia.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,rk=ia.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,ik=ia.button`
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
`,ak=ia.div`
  display: flex;
  justify-content: left;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ok=ia.div`
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
`,sk=ia.img`
  width: 70px;
  margin-bottom: 10px;
`,lk=ia.p`
  font-size: 1rem;
  color: #333;
`,ck=ia.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`,dk=ia.img`
  width: 550px;
  height: auto;
  border-radius: 10%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`,uk=()=>{const[e,n]=(0,t.useState)("linear-gradient(180deg, #d2f5fa, rgb(255 246 247))"),[r,i]=(0,t.useState)(Jw),[a,o]=(0,t.useState)(!1),s=(e,t)=>{n(e),i(t)},l=()=>{n("linear-gradient(180deg, #d2f5fa, rgb(255 246 247))"),i(Jw)};return(0,m.jsxs)(ek,{background:e,children:[(0,m.jsxs)(tk,{children:[(0,m.jsx)(nk,{children:"Complete Lab & Equipment Management Hub"}),(0,m.jsx)(rk,{children:"Manage lab operations and equipment effortlessly in one platform. From sample tracking to inventory control, LabSync keeps your lab running smoothly and efficiently."}),(0,m.jsx)(ik,{onClick:()=>{window.location.href="https://www.atomwalk.com/login/"},children:"Get started"}),(0,m.jsxs)(ak,{children:[(0,m.jsxs)(ok,{background:e,onMouseEnter:()=>s("linear-gradient(180deg, #bbfcc0, rgb(255 246 247))",$w),onMouseLeave:l,onClick:()=>{window.location.href="/labequipmentmangement.html"},children:[(0,m.jsx)(sk,{src:Zw,alt:"HR"}),(0,m.jsx)(lk,{children:"Lab Equipment Management System: Precision Tracking for Lab Equipment Efficiency."})]}),(0,m.jsxs)(ok,{background:e,onMouseEnter:()=>s("linear-gradient(180deg, #edd4fc, rgb(255 246 247))",Xw),onMouseLeave:l,onClick:()=>{window.location.href="/labmanagement.html"},children:[(0,m.jsx)(sk,{src:Qw,alt:"CRM"}),(0,m.jsx)(lk,{children:"Lab Management System: Streamlined Solutions for Modern Lab Operations."})]})]})]}),(0,m.jsx)(ck,{children:(0,m.jsx)(dk,{src:r,alt:"Profile"})}),(0,m.jsx)(as,{visible:a,setvisible:o})]})},pk=n.p+"static/media/maintenance.3ac526953d75b25ba17c.png",fk=ia.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,mk=ia.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,hk=ia.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,gk=ia.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,xk=ia.div`
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
`,bk=ia.div`
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
`,yk=ia.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,vk=ia.p`
  font-size: 1em;
  color: #666;
`,wk=()=>{const e=e=>{window.location.href=`/${e}`};return(0,m.jsxs)(fk,{children:[(0,m.jsx)(mk,{children:"Key Features"}),(0,m.jsx)(hk,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,m.jsxs)(gk,{children:[(0,m.jsxs)(xk,{onClick:()=>e("userManagement.html"),children:[(0,m.jsx)(bk,{bgColor:"#D8F5E3",children:(0,m.jsx)("img",{src:xb,alt:"Speed"})}),(0,m.jsx)(yk,{children:" Enhanced User Management"}),(0,m.jsx)(vk,{children:"Atomwalk\u2019s LEM ensures every role in the lab gets precisely what they need\u2014empowering admins, managers, and users to focus on productivity without any roadblocks."})]}),(0,m.jsxs)(xk,{onClick:()=>e("equipmentManagement.html"),children:[(0,m.jsx)(bk,{bgColor:"#F0E7FF",children:(0,m.jsx)("img",{src:bb,alt:"Trust"})}),(0,m.jsx)(yk,{children:"Rule Based Equipment Management"}),(0,m.jsx)(vk,{children:"Say goodbye to scheduling conflicts. With Atomwalk\u2019s LEM, you\u2019ll always know which equipment is available, making the booking process seamless."})]}),(0,m.jsxs)(xk,{onClick:()=>e("equipmentMaintenance.html"),children:[(0,m.jsx)(bk,{bgColor:"#E0F7FC",children:(0,m.jsx)("img",{src:pk,alt:"Accuracy"})}),(0,m.jsx)(yk,{children:"Equipment Maintenance"}),(0,m.jsx)(vk,{children:"Don\u2019t let unexpected breakdowns slow you down. Atomwalk\u2019s LEM sends alerts for maintenance and calibrations, ensuring minimal downtime and maximum lab productivity."})]}),(0,m.jsxs)(xk,{onClick:()=>e("reportandDashboard.html"),children:[(0,m.jsx)(bk,{bgColor:"#FFF2E0",children:(0,m.jsx)("img",{src:vb,alt:"Reliability"})}),(0,m.jsx)(yk,{children:"Gain Insights with Report & Dashboard"}),(0,m.jsx)(vk,{children:"Unlock the power of data with Atomwalk\u2019s detailed reports and Dashboard. Gain clear insights into usage pattern of equipments and labs "})]})]})]})},kk=ia.section`
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
`,Sk=ia.div`
  max-width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,jk=ia.h1`
  font-size: 48px;
  color: #213e6d;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`,Ak=ia.p`
  font-size: 18px;
  color: #6d7278;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Ck=ia.button`
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
`,Ek=ia.div`
  max-width: 50%;
  position: relative;
  z-index: 2;
  bottom: 0px;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`,Rk=ia.img`
  width: 100%;
  height: auto;
`,Pk=ia.img`
  position: absolute;
  top: 150px;
  left: 40px;
  width: 130px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80px;
  }
`,Ok=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(kk,{children:[(0,m.jsx)(Pk,{src:jx,alt:"Abstract Shape"}),(0,m.jsxs)(Sk,{children:[(0,m.jsx)(jk,{children:"Lab Equipment Management System"}),(0,m.jsx)(Ak,{children:"Optimize utilization, minimize downtime, and simplify equipment management with real-time tracking and maintenance.  "}),(0,m.jsx)(Ck,{onClick:()=>{window.location.href="/userManagement.html"},children:"Learn more"})]}),(0,m.jsx)(Ek,{children:(0,m.jsx)(Rk,{src:vo,alt:"Laboratory Technician"})})]}),(0,m.jsx)(rb,{data:"Equipment"}),(0,m.jsx)(wk,{}),(0,m.jsx)(gb,{data:"equipment"})]}),Tk=n.p+"static/media/user-mangerole.60795852ff5499076f19.png",Mk=n.p+"static/media/SimplifiedEquipmentManagement.6d29210302b693d135e6.png",zk=n.p+"static/media/labmentanat.a3f1c5ebc7bee9b0b2f4.png",Ik=n.p+"static/media/Dashboardaand.4ae3d9367ff7cf91f9b5.png",Dk=n.p+"static/media/labexp.ba5536ecd08228cd878f.png";const Lk=n.p+"static/media/Labprojectcreation.21688387172f5b0cec02acfce58c21c6.svg";const Fk=n.p+"static/media/Activitydetails.0359f3b64f7fd61e42c07a8fa1029b95.svg";const Nk=n.p+"static/media/Labdocset.d133764d2f52c469acd58262f2bf6d8f.svg";const Bk=n.p+"static/media/Labobjective.8b99848dd1267e5564086bd2046025d1.svg";const qk=n.p+"static/media/stepsoflab.411efd068cd4363160d71a3e78553993.svg";const Hk=n.p+"static/media/Admin.24cf7f5448b07eea8a326ab305035e2a.svg";const Wk=n.p+"static/media/Manager.b7d2aa8ae19c282218cc20cf4b9c25d9.svg";const _k=n.p+"static/media/userGroup.5700f435ab5c042915be27ee79620ba5.svg";const Uk=n.p+"static/media/processtemplate1.edb5e86bd5bf325f5113651d8ea68b3d.svg",Gk=ia.div`
  width: 100%;
  height: 100%;
`,Kk=ia.div`
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
`,Yk=ia.div`
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
`,Vk=ia.div`
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
    li {
      width: 300px;
  }
  }
`,Jk=ia.div`
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
`,Qk=e=>{let{data:n,bgcolors:r}=e;const i=n,a=Xa();(0,t.useEffect)((()=>{const e=a.search.match(/\?(\d+)/),t=e?parseInt(e[1],10):NaN;console.log(t,"Step value parsed from URL");const n=isNaN(t)?0:700+750*(t-1);n>0&&window.scrollTo({top:n,behavior:"smooth"})}),[a.search]);const o="userManagement"===i?[{title:"Manage User group (Lab Departments) for  Effortless Management / Analytics",subtitle:"Empowering Admins to Manage Every Aspect of Lab Operations",description:"Atomwalk\u2019s LEM provides LAB Admins (Owners) with powerful tools to manage user profiles based on the department setup in institution, which inturn helps to oversee equipment usage, and generate insightful reports. This allows Lab Admins to ensure smooth lab operations and maintain compliance effortlessly.",benefits:["Create and manage profiles (Based on Department setup)","Configurable access control for each User group"],imageSrc:Ov,imageAlt:"Campaign Management Dashboard",imgPosition:"left"},{title:"Streamlined Management, Enhanced Productivity",subtitle:"Empowering Lab Admins/ Users with Instant Activation and Anytime Access",description:"With Atomwalk\u2019s LEM, LAB Admins can efficiently organize Lab users across users groups. User can manage their Profile and manage passwords on DIY basis. LAB Users can maintain their user name/ nick name to access the system anytime anywhere for equipment booking/cancellations.",benefits:["LAB Users Creation with right User Group"," LAB Users Profile/password management"],imageSrc:Ov,imageAlt:"Campaign Performance Tracking",imgPosition:"right"},{title:"Easy Lab User management - Seamless  Experience",subtitle:"Empowering Lab Admins with Instant Deactivation and remove Access",description:"Atomwalk\u2019s LEM allows Lab Admin users to deactivate Lab Users and remove access in case of disciplinary action or completion of course. Lab Admins also can control temproray access to external Lab users.",benefits:["LAB Users deactivation","LAB Users removal of Access"],imageSrc:Ov,imageAlt:"Campaign Performance Tracking",imgPosition:"left"}]:"equipmentManagement"===i?[{title:"Seamless Equipment Setup",subtitle:"Quick registration for efficient resource management",description:"With Atomwalk\u2019s streamlined setup process, admins can register new equipment in just minutes, ensuring that resources are readily available for team use. Each piece of equipment can be configured with essential details. This quick setup feature simplifies resource onboarding, enabling efficient equipment management and transparent usage policies. Atomwalk\u2019s intuitive setup tools help organizations optimize equipment access and cost tracking with ease.",benefits:["Instant equipment onboarding","Customizable usage limits and cost setting","Improved resource tracking and availability"],imageSrc:Lk,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Efficient Equipment Booking",subtitle:"Simplified management for seamless operations",description:"With Atomwalk\u2019s equipment booking platform, users can book equipment whenever needed, with real-time availability ensuring resources are always visible and accessible. The intuitive dashboard allows users to view open time slots instantly, making it easy to secure necessary equipment without delays. By providing an up-to-date booking calendar and streamlined reservation options, Atomwalk helps users improve scheduling efficiency, reduce conflicts, and maximize equipment utilization.",benefits:["Instant availability check","Optimized scheduling for maximum uptime","Centralized equipment availability"],imageSrc:Fk,imageAlt:"Lead Management",imgPosition:"left"},{title:"Hassle-Free Cancellations",subtitle:"Adaptable scheduling with flexible change options",description:"With Atomwalk\u2019s equipment booking system, users have the flexibility to cancel bookings effortlessly if plans change. Cancellations can be made up to 30 minutes before the scheduled time, allowing users to adjust reservations without disrupting workflow. This policy ensures efficient resource management and minimizes scheduling conflicts. However, admins and managers have additional flexibility and can cancel bookings at any time, ensuring greater control over equipment availability and usage. With these adaptable cancellation options, Atomwalk enables smoother scheduling and keeps operations flexible.",benefits:["Easy and quick cancellation process","Flexible policies for dynamic scheduling","Enhanced resource accessibility and optimization"],imageSrc:Lk,imageAlt:"Lead Conversion",imgPosition:"right"}]:"equipmentMaintenance"===i?[{title:"Proactive Equipment Maintenance",subtitle:"Preventive measures for optimal performance",description:"Atomwalk\u2019s equipment maintenance feature allows admins to schedule preventive maintenance efficiently, ensuring equipment remains in top condition. During maintenance periods, equipment can be blocked from booking, preventing unintended usage and keeping maintenance routines organized. This proactive approach helps to minimize unexpected downtime, extend equipment lifespan, and ensure that all resources are ready when needed. With Atomwalk, maintenance planning becomes seamless, supporting continuous, reliable operation.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:Lk,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Emergency Maintenance Protocol",subtitle:"Expert emergency maintenance to minimize downtime and maximize efficiency",description:"Atomwalk\u2019s equipment maintenance feature allows admins to schedule preventive maintenance efficiently, ensuring equipment remains in top condition. During maintenance periods, equipment can be blocked from booking, preventing unintended usage and keeping maintenance routines organized. This proactive approach helps to minimize unexpected downtime, extend equipment lifespan, and ensure that all resources are ready when needed. With Atomwalk, maintenance planning becomes seamless, supporting continuous, reliable operation.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:Fk,imageAlt:"Lead Management",imgPosition:"left"}]:"userroleManagement"===i?[{title:"Empowered Oversight, Effortless Management",subtitle:"Empowering Admins to Manage Every Aspect of Lab Operations",description:"Atomwalk\u2019s LEM provides admins with powerful tools to manage user profiles, oversee equipment usage, handle emergencies, and generate insightful reports. This allows admins to ensure smooth lab operations and maintain compliance effortlessly.",benefits:["Create and manage profiles","Oversee bookings and usage","Handle emergencies and generate reports"],imageSrc:Hk,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Streamlined Management, Enhanced Productivity",subtitle:"Enabling Managers to Optimize Lab Workflow and Maintenance",description:"Atomwalk\u2019s equipment maintenance feature allows admins to schedule preventive maintenance efficiently, ensuring equipment remains in top condition. During maintenance periods, equipment can be blocked from booking, preventing unintended usage and keeping maintenance routines organized. This proactive approach helps minimize unexpected downtime, extend equipment lifespan, and ensure that all resources are ready when needed. With Atomwalk, maintenance planning becomes seamless, supporting continuous, reliable operation.",benefits:["Organize groups and tasks","Track maintenance","Stay informed with real-time data"],imageSrc:Wk,imageAlt:"Lead Management",imgPosition:"left"},{title:"Quick Access, Seamless Experience",subtitle:"Empowering Lab Users with Instant Booking and Personalized Access",description:"Atomwalk\u2019s equipment maintenance feature allows admins to schedule preventive maintenance efficiently, ensuring equipment remains in top condition. During maintenance periods, equipment can be blocked from booking, preventing unintended usage and keeping maintenance routines organized. This proactive approach helps minimize unexpected downtime, extend equipment lifespan, and ensure that all resources are ready when needed. With Atomwalk, maintenance planning becomes seamless, supporting continuous, reliable operation.",benefits:["Instant equipment booking","Stay updated with real-time availability","Personalized logins"],imageSrc:_k,imageAlt:"Lead Management",imgPosition:"left"}]:"labProcessemplate"===i?[{title:"Manage Inventory Items & Equipment Efficiently for Experiment Templates",subtitle:"Organized Setup for Streamlined Operations in Experiment Steps",description:"With Atomwalk\u2019s inventory and equipment setup feature, admins can efficiently configure and categorize all equipment and inventory items. This ensures accurate tracking and optimal usage of resources at the activity level (experiment steps). The system supports detailed classification, making it easier to identify equipment availability, usage patterns, and maintenance needs. Streamlined inventory management helps labs save time, reduce errors, and maintain operational efficiency.",benefits:["Manage Equipment for experiment steps","Manage Inventory items at each Experiment Steps","Optimized resource utilization"],imageSrc:Uk,imageAlt:"Inventory Setup Overview",imgPosition:"right"},{title:"Manage Document Setup and Configuration",subtitle:"Capture Output Documents for Experiment Steps",description:"Atomwalk\u2019s document configuration feature empowers admins to tailor reports and documentation according to the lab\u2019s specific requirements. Detailed reports based on equipment output results can be stored in the form of documents. The system supports real-time data visualization, making it easier to analyze experiment results and make informed decisions.",benefits:["Customizable document setup","Real-time data visualization"],imageSrc:Nk,imageAlt:"Report Configuration",imgPosition:"left"},{title:"Manage All Experiment Steps Efficiently",subtitle:"Streamline Workflows with Organized and Sequenced Experiment Steps",description:"Experiment steps (activity) creation in Atomwalk helps labs streamline their workflows by defining tasks and experiment steps systematically. This feature enables efficient planning and execution, ensuring every activity is aligned with lab protocols. Administrators can assign resources, set deadlines, and monitor progress, fostering collaboration and accountability.",benefits:["Systematic workflow organization","Resource and task alignment","Enhanced productivity and collaboration","Clear output documents requirement","Review process for experiment steps"],imageSrc:Fk,imageAlt:"Activity Management",imgPosition:"right"},{title:"Manage Quality Check Data for Each Experiment Step",subtitle:"Ensuring Excellence Through Structured Quality Control",description:"The quality management feature for each step of an experiment in Atomwalk ensures adherence to high standards by enabling systematic monitoring and control. Labs can set up quality checks, track compliance, and address discrepancies effectively. This ensures consistent performance, mitigates risks, and upholds the lab\u2019s reputation for reliability and excellence.",benefits:["Structured quality control","Compliance tracking and management","Risk mitigation and performance consistency","Review process for QC data"],imageSrc:Ov,imageAlt:"Quality Assurance",imgPosition:"left"}]:"labExperimentProject"===i?[{title:"Manage Lab Experiment Projects Efficiently",subtitle:"Initiate, Allocate, and Track Your Lab Experiment Projects",description:"With Atomwalk\u2019s lab experiment project creation feature, you can select the experiment process template to initiate the project. All required details, like experiment steps, equipment, inventory items, and output document details, will be auto-populated from the experiment template, ensuring operational efficiency for your lab experiments. Assign lab users (research students), set deadlines and sub-activities, and ensure alignment of goals for successful execution. This foundational step lays the groundwork for organized lab experiment project management.",benefits:["Systematic experiment step organization","Improved task allocation and tracking","Simplified progress monitoring","Effective inventory item management","Equipment allocation to projects","Experiment step-wise documents in one dashboard","Enhanced collaboration and planning","Time-saving predefined templates","Consistency in execution"],imageSrc:Lk,imageAlt:"Project Creation Overview",imgPosition:"right"},{title:"Manage Your Lab Project Objectives",subtitle:"Track Lab Project Objective Statuses",description:"Atomwalk enables you to define and manage all your project objectives in one place. Objective statuses can be tracked by the PI (project manager), and necessary steps can be planned.",benefits:["Clear project objectives and scope","Defined timelines and responsibilities","Enhanced collaboration and planning"],imageSrc:Bk,imageAlt:"Activity Steps Management",imgPosition:"left"},{title:"Enable Periodic Updates of Experiment Steps",subtitle:"Manage Your Experiment Steps from the Activity Dashboard",description:"Atomwalk enables you to define and organize specific activity steps required for your project. This modular approach ensures that every task is accounted for and easily manageable. Each step can be assigned to team members, monitored for progress, and adjusted as needed.",benefits:["Real-time inventory allocation and tracking","Periodic updates of experiment steps with required documents (output results)","Manage equipment booking","Review process for output documents","Sub-activity steps management"],imageSrc:qk,imageAlt:"Process Template Selection",imgPosition:"right"}]:[{title:"Optimize Resource Allocation with Usage Insights",subtitle:"Gain clear visibility into equipment usage patterns",description:"The Usage Trends feature helps you track how and when equipment is being used, allowing you to make data-driven decisions that optimize resource allocation, maintenance, and purchases. By identifying high-demand resources, you can better plan for upkeep and future acquisitions.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:Lk,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Ensure Compliance with Complete Audit Logs",subtitle:"Maintain a clear, secure trail of actions and changes",description:"Audit-Ready Records keep a detailed log of all actions and changes, ensuring compliance with industry regulations. This feature provides an accessible and secure record for audits, giving your team peace of mind and simplifying the audit process.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:Fk,imageAlt:"Lead Management",imgPosition:"left"},{title:"Streamlined Data Management for System Efficiency",subtitle:"Preventive measures for optimal performance",description:"The Data Purge feature enables you to securely remove outdated or unnecessary data, helping maintain a clutter-free system and improve overall performance. This process ensures that only relevant and up-to-date information is retained, reducing storage costs and supporting compliance with data retention policies.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:Lk,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Transform Data into Actionable Insights",subtitle:"Drive smarter decisions with detailed analytics",description:"By analyzing data from different processes, it empowers your team to make informed decisions that enhance efficiency, reduce downtime, and ensure compliance. This powerful tool helps you maximize the value of your resources and refine your operations with data-driven strategies.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:Fk,imageAlt:"Lead Management",imgPosition:"left"}];return(0,m.jsx)(Gk,{children:o.map((e=>(0,m.jsx)(Kk,{style:{backgroundColor:`${r}`},children:"left"===e.imgPosition?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Yk,{children:(0,m.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,m.jsxs)(Jk,{children:[(0,m.jsx)("h1",{children:e.title}),(0,m.jsx)("h2",{children:e.subtitle}),(0,m.jsx)("p",{style:{color:"#666"},children:e.description}),(0,m.jsx)(Vk,{children:(0,m.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:Ev,alt:"Check mark"}),(0,m.jsx)("span",{children:e})]},t)))})})]})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(Jk,{children:[(0,m.jsx)("h1",{children:e.title}),(0,m.jsx)("h2",{children:e.subtitle}),(0,m.jsx)("p",{style:{color:"#666"},children:e.description}),(0,m.jsx)(Vk,{children:(0,m.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:Ev,alt:"Check mark"}),(0,m.jsx)("span",{children:e})]},t)))})})]}),(0,m.jsx)(Yk,{children:(0,m.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},Zk=e=>{let{data:n}=e;const[r,i]=(0,t.useState)(""),a=Xa(),o=[{title:"Enhanced User Management",titles:"UserManagement",description:"Atomwalk\u2019s LEM ensures every role in the lab gets precisely what they need\u2014empowering admins, managers, and users to focus on productivity without any roadblocks.",background:"#bbfcc0",img:`${lw}`},{title:"Simplified Equipment Management",titles:"EquipmentManagement",description:"Say goodbye to scheduling conflicts. With Atomwalk\u2019s LEM, you\u2019ll always know which equipment is available, making the booking process seamless.",background:"#bbfcc0",img:`${Mk}`},{title:"Equipment Maintenance",titles:"EquipmentMaintenance",description:"Don\u2019t let unexpected breakdowns slow you down. Atomwalk\u2019s LEM sends alerts for maintenance and calibrations, ensuring minimal downtime and maximum lab productivity.",background:"#bbfcc0",img:`${zk}`},{title:"Gain Insights with Report & Dashboard",titles:"ReportandDashboard",description:"Unlock the power of data with Atomwalk\u2019s detailed reports and Dashboard. Gain clear insights into usage pattern of equpments and labs  ",background:"#bbfcc0",img:`${Ik}`},{title:"User and Role Management",titles:"UserManagements",description:"Atomwalk\u2019s LMS ensures Role-based access control to restrict data access based on user roles, and manage permissions to ensure secure and appropriate data access.",background:"#e8f4fc",img:`${Tk}`},{title:"Lab Process Template",titles:"LabProcess",description:"Provide a simplified way to manage experiment templates required for the laboratory. Include various experiment templates with necessary steps, required inventory, and equipment. This ensures optimized and error-free execution of experiments by lab users.",background:"#e8f4fc",img:`${Dk}`},{title:"Lab Experiment Project Execution",titles:"LabExperiment",description:"Provide a simplified way to manage experiment templates required for the laboratory. Include various experiment templates with necessary steps, required inventory, and equipment. This ensures optimized and error-free execution of experiments by lab users.",background:"#e8f4fc",img:`${zk}`},{title:"PI with Report & Dashboard",titles:"LabExperiment",description:"Provides a Performance Indicator (PI) system integrated with detailed reports and interactive dashboards, offering real-time insights and tracking of key metrics for informed decision-making.",background:"#e8f4fc",img:`${Ik}`}];(0,t.useEffect)((()=>{a.pathname.includes("userManagement")?i("userManagement"):a.pathname.includes("equipmentManagement")?i("equipmentManagement"):a.pathname.includes("equipmentMaintenance")?i("equipmentMaintenance"):a.pathname.includes("reportandDashboard")?i("reportandDashboard"):a.pathname.includes("userroleManagement")?i("userroleManagement"):a.pathname.includes("labProcessemplate")?i("labProcessemplate"):a.pathname.includes("labExperimentProject")?i("labExperimentProject"):a.pathname.includes("pIwithReport")&&i("pIwithReport")}),[a.pathname]);const s=a.pathname.includes("userManagement")?o[0]:a.pathname.includes("equipmentManagement")?o[1]:a.pathname.includes("equipmentMaintenance")?o[2]:a.pathname.includes("reportandDashboard")?o[3]:a.pathname.includes("userroleManagement")?o[4]:a.pathname.includes("labProcessemplate")?o[5]:a.pathname.includes("labExperimentProject")?o[6]:a.pathname.includes("pIwithReport")?o[7]:o[0];return(0,m.jsxs)("div",{children:[(0,m.jsx)(Ep,{title:s.title,description:s.description,background:s.background,img:s.img,lead:!0}),(0,m.jsx)(Cv,{bgcolors:n?"#e8fafc":"#e8fcec",data:s.titles}),(0,m.jsx)(Qk,{bgcolors:n?"#e8fafc":"#e8fcec",data:r})]})},Xk=n.p+"static/media/Sales_Lifecycle_icon.540e7016d8f19625782f.png",$k=n.p+"static/media/Procurement_icon.0c3f8b6c3e51891f1720.png",eS=n.p+"static/media/Compliance-Lifecycle-icon.eb302e01bf7d6dd666b7.png",tS=n.p+"static/media/sales_report_icon.1dc3907dd4a6c53f44a4.png",nS=ia.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,rS=ia.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,iS=ia.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,aS=ia.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,oS=ia.div`
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
`,sS=ia.div`
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
`,lS=ia.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,cS=ia.p`
  font-size: 1em;
  color: #666;
`,dS=()=>{const[e,n]=(0,t.useState)(!1),r=e=>{window.location.href=`/${e}`};return(0,m.jsxs)(nS,{children:[(0,m.jsx)(rS,{children:"Key Features of Sales and Procurement"}),(0,m.jsx)(iS,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that automates and optimizes your entire business operation. Our platform offers:"}),(0,m.jsxs)(aS,{children:[(0,m.jsxs)(oS,{onClick:()=>r("saleslifecycle.html"),children:[(0,m.jsx)(sS,{bgColor:"#D8F5E3",children:(0,m.jsx)("img",{src:Xk,alt:"Speed"})}),(0,m.jsx)(lS,{children:"Empowering Every Step of Your Sales Journey"}),(0,m.jsx)(cS,{children:"Streamline and optimize your sales process with tools that manage everything from lead generation to order fulfillment, ensuring a smooth and efficient sales journey."})]}),(0,m.jsxs)(oS,{onClick:()=>r("procurement.html"),children:[(0,m.jsx)(sS,{bgColor:"#F0E7FF",children:(0,m.jsx)("img",{src:$k,alt:"Trust"})}),(0,m.jsx)(lS,{children:"Optimizing Every Stage of Your Procurement Process"}),(0,m.jsx)(cS,{children:"Streamline and automate your procurement workflow, from purchase orders to inventory management, ensuring efficiency, accuracy, and cost savings at every step."})]}),(0,m.jsxs)(oS,{onClick:()=>r("compliance.html"),children:[(0,m.jsx)(sS,{bgColor:"#E0F7FC",children:(0,m.jsx)("img",{src:eS,alt:"Accuracy"})}),(0,m.jsx)(lS,{children:"Ensuring Accuracy and Confidence in Every Compliance Step"}),(0,m.jsx)(cS,{children:"Streamline compliance management with precise tracking, automated updates, and real-time monitoring, ensuring complete accuracy and adherence to regulations at every stage."})]}),(0,m.jsxs)(oS,{onClick:()=>{n(!e)},children:[(0,m.jsx)(sS,{bgColor:"#FFF2E0",children:(0,m.jsx)("img",{src:tS,alt:"Reliability"})}),(0,m.jsx)(lS,{children:"Sales Report & Dashboard"}),(0,m.jsx)(cS,{children:"Track and analyze sales performance with detailed reports and dynamic dashboards, helping you monitor revenue, trends, and key metrics at a glance."})]})]}),(0,m.jsx)(as,{visible:e,setvisible:n})]})},uS=n.p+"static/media/Sales&Procurement.77a69cee727f51301ce8.png",pS=(ia.section`
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
`,ia.div`
  max-width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,ia.h1`
  font-size: 48px;
  color: #213e6d;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`,ia.p`
  font-size: 18px;
  color: #6d7278;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,ia.button`
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
`),fS=(ia.div`
  max-width: 50%;
  position: relative;
  z-index: 2;
  bottom: 0px;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`,ia.img`
  width: 100%;
  height: auto;
`,ia.img`
  position: absolute;
  top: 150px;
  left: 40px;
  width: 130px;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80px;
  }
`,ia.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ia(pS)`
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
`,()=>{const[e,n]=(0,t.useState)("Manufacturing");return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Ep,{title:"Simplify & Efficient Your Sales and Procurement Operations",description:"Take control of your business with a seamless ERP solution that helps you manage sales orders, quotations, invoices, payments, procurement, inventory, and compliance\u2014all in one place.",background:"#83f28f",lead:!0,img:uS}),(0,m.jsx)(rb,{data:"Sales and Procurement"}),(0,m.jsx)(dS,{}),(0,m.jsx)(pv,{data:"sales"})]})});const mS=n.p+"static/media/SalesOrder.db5dc2abef63c151d8de243ddab281b4.svg";const hS=n.p+"static/media/workorder.94bb4a5d0f312dfc4ae82c8814850e88.svg";const gS=n.p+"static/media/SalesInvoice.999321c3419ef7adf08a204022669b4a.svg";const xS=n.p+"static/media/DeliveryChallan.b5db04bc713e2ff084e26c6b14468d9b.svg";n.p;const bS=n.p+"static/media/SalesShipment.0cffbc21010270f7dabce092c04aa1ce.svg";const yS=n.p+"static/media/SalesPayment.3f25a56fb5c3cecd636a3f39dd79d388.svg";const vS=n.p+"static/media/ProcureSupplier.645ffbb7a731ce35053f89352539da0b.svg";const wS=n.p+"static/media/PurchaseOrder.3985cabb3a675292427ba2e94ad3134f.svg";const kS=n.p+"static/media/OrderIn.f0fe0c931a748b335b04a0548bcea36d.svg";n.p;const SS=n.p+"static/media/ProcureReturn.ae4383f9fb6121133904e17fbc8c154f.svg";const jS=n.p+"static/media/ProcurePayable.57ffb874e7f85773e8ecc1dcc627e8c4.svg";const AS=n.p+"static/media/SalesReport.711d0206590a01ec7aa2c19cb1dd4041.svg";const CS=n.p+"static/media/ProcureReport.e37950bcf18ab74f57d4efdb08751ec9.svg";const ES=n.p+"static/media/EwaybillComplience.578c60b54cb1a587bb8658ddce884d28.svg";const RS=n.p+"static/media/TdsComplience.7f5fa7f4795f6645d4d4f9c0381285c7.svg";const PS=n.p+"static/media/GstComplience.c2783aa11154a9c44528cf21d822ab64.svg",OS=ia.div`
  width: 100%;
  height: 100%;
`,TS=ia.div`
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
`,MS=ia.div`
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
`,zS=ia.div`
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
`,IS=ia.div`
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
`,DS=e=>{let{data:n,bgcolors:r}=e;const i=n,a=Xa();(0,t.useEffect)((()=>{const e=a.search.match(/\?(\d+)/),t=e?parseInt(e[1],10):NaN;console.log(t,"Step value parsed from URL");const n={saleslifecycle:850,procurement:720,compliance:900}[i]||0,r=isNaN(t)?0:n+(t-1)*n;r>0&&window.scrollTo({top:r,behavior:"smooth"})}),[a.search,i]);const o="saleslifecycle"===i?[{title:"Empowering Your Sales Process",subtitle:"Manage sales orders and quotations with precision and ease.",description:"Atomwalk empowers you to manage your company\u2019s sales orders and quotations with unparalleled flexibility and ease. Create and customize multiple quotations or sales orders, manage customer details, add products, and track orders efficiently. With features like Auto numbering, Product/Category defination, order duplication, tax invoicing, PDF generation, email of sale order and payment reminders, Atomwalk saves time while enhancing your business process.",benefits:["Product Category defination for Tax setup","Product/Item Configaration ","Auto Numbering","Order Duplication","PDF generation with custom templates","Email for Sale order/ Payment reminder","One click tax invoicing"],imageSrc:mS,imageAlt:"Quotation Management Dashboard",imgPosition:"left"},{title:"Seamless Transition from Sales Order to Work Order.",subtitle:"Transform sales orders into actionable work orders with ease by Process Template configuration ",description:"The Work Order Process ensures a smooth flow from sales order confirmation to work order creation using process template configuration for the Products. Once a work order is created, it enables seamless generation of job cards for each activities with item. equipment and resource required. The process is designed to streamline operations and save time, improving business efficiency.",benefits:["Create work orders from confirmed sales orders (with PO)","Process Template for each product -  smooth transition from sales to operations.","Track invetory/equipment and resource usage for each activity.","Job Card generation"],imageSrc:hS,imageAlt:"Work Order",imgPosition:"right"},{title:"Comprehensive Sales Invoicing for Your Business Needs.",subtitle:"Manage invoices with advanced features, detailed insights, and flexible tools.",description:"With Atomwalk, creating and managing sales invoices is straightforward and highly functional. Users can generate invoices with tailored details, apply advanced filters, and analyze key data through interactive dashboards. With features like Auto numbering of tax invoice, product and category defination, invoice duplication, PDF generation with templates, email of invoice and payment reminders, GST tracking, auto reconciliation with Bank statements, Atomwalk saves time while enhancing your business process. Manual payment updates, Auto Accounting , TDS reconciliation and credit note features ensure precise control over every aspect of the invoicing process.",benefits:["Auto Numbering & Invoice Duplication.","PDF generation with custom templates.","Email forInvoice / Payment reminder.","Auto Accounting & Bank reconciliation for Payments.","TDS Reconciliations.","Allocation of Inventory (with Item serial no)","GST Tracking","Use advanced filters for better management","Credit Note feature","Track insights with interactive dashboards"],imageSrc:gS,imageAlt:"Sales Invoice",imgPosition:"left"},{title:"Streamline Deliveries with Accurate Documentation.",subtitle:"Efficiently manage stock, issue delivery challans, and comply with e-way bill regulation support.",description:"Atomwalk facilitates the delivery process by allowing users to generate and manage Delivery Challans seamlessly, ensuring accurate documentation and regulatory compliance. From stock verification to e-way bill generation, the system simplifies delivery logistics and enhances operational efficiency.",benefits:["Issue Delivery Challans after stock availability confirmation.","Generate multiple copies for internal use, customers, and couriers.","Search and filter challans dynamically for quick access. ","Automatically generate e-way bills for regulatory compliance.","Duplicate challans easily with the copy feature.","Search and filter challans dynamically for quick access.","Automatically generate e-way bills for regulatory compliance."],imageSrc:xS,imageAlt:"Delivery Chalan",imgPosition:"right"},{title:"Track Every Shipment with Precision and Ease",subtitle:"Manage product-wise shipments with detailed tracking and flexible options.",description:"The Shipment Details Process in Atomwalk provides users with comprehensive tools to manage and track shipments effectively. Users can choose shipment statuses like fully shipped, pending, or partly shipped and update product-specific shipment details. With fields for courier information, transport modes, and delivery locations, this feature ensures clarity and accuracy in shipment management. Sytem fields are compatible with eway bill regulation requirements.",benefits:["Update shipment status and transport details.","Record courier, vehicle, and package data.","Eway bill support."],imageSrc:bS,imageAlt:"Shipment Details",imgPosition:"right"},{title:"Complete Your Sales Cycle with Hassle-Free Payment Tracking.",subtitle:"Ensure seamless payment settlement with detailed tracking and automated scheduling and reconciliation.",description:"With Atomwalk, payment tracking/management becomes an integral part of the sales process. Auto reconciliation of payments from Bank statemnts is supported to improve your business opertion efficiency. Users can input payment details, verify TDS, and track transactions with ease. The Generate Schedule Payment feature automates bill creation within specified offset periods, ensuring streamlined payment management from shipment to settlement.",benefits:["Payment auto reconciliation from Bank statements","TDS payment reconciliation with form 26AS upload","Payment reminder by mail/ whatsapp."],imageSrc:yS,imageAlt:"Payment Management",imgPosition:"left"}]:"procurement"===i?[{title:"Seamlessly Manage Your Supplier Database.",subtitle:"Manage preferred suppliers against each Inventory Item.",description:"Atomwalk simplifies supplier management by allowing users to add suppliers details into the supplier database. User can manage preferred suppliers with lead time and purchase cost, supplier ref num etc. This process ensures seamless management of supplier information for improved procurement operations.",benefits:["Supplier Data management."," Manage Defualt/ preferred suppliers for Item"],imageSrc:vS,imageAlt:"Supplier Identification",imgPosition:"right"},{title:"Streamline Your Procurement with Efficient Purchase Order Management.",subtitle:"Create detailed purchase orders and manage supplier transactions seamlessly.",description:"With Atomwalk, creating purchase is straightforward and efficient. Users can select suppliers from the list and input all necessary details for purchase order. The system ensures precise order management by allowing item selection, shipment details and branch-specific tracking.",benefits:["Auto numbering facility for PO.","Shipment details capture.","Auto population of default supplier details.","Purchase Order PDF templates with email PO as attachment seamlessly.","Sales Invoice storage."],imageSrc:wS,imageAlt:"Purchase Order Creation",imgPosition:"left"},{title:"Accurately Record and Track Incoming Inventory (GRN).",subtitle:"Streamline goods receipt and inventory updates with precision",description:"Atomwalk simplifies the goods receipt process by allowing users to auto generate  Goods Receive Notes linked to Purchase Orders (for each part shipments). Users can record key details like received quantity, rejected items, and bin locations, ensuring proper inventory updates and efficient warehouse management.",benefits:["GRN - Auto Goods Receipt Note generation.","Manage Item Batch details  (with expiry date/ Item serial no).","Track quantities: received, rejected, or shortages.","Bin Location update.","Maintain accurate records for efficient warehouse operations."," Auto Accounting entries"],imageSrc:kS,imageAlt:"Order-In",imgPosition:"right"},{title:"Handle Returns with Confidence and Accuracy.",subtitle:"Efficiently manage product returns, shortages, and damages with ease.",description:"Atomwalk simplifies return handling by enabling users to address damaged, short, or incorrect products during the GRN process. With provisions to issue Debit notes, the system ensures smooth return management and accurate accounting adjustments.",benefits:["Issue of debit Note.","Auto Accounting for Returns."],imageSrc:SS,imageAlt:"Return Handling",imgPosition:"left"},{title:"Track Payables with Precision.",subtitle:"Manage paybles with auto reconciliation from Payable dashboard.",description:"Atomwalk streamlines the payment management process by synchronizing all transactions in bank statements and automating accounting calculations. The system accounts for debit notes, ensures accurate IGST, CGST, SGST, and TDS computations, and simplifies payment processing with seamless integration.",benefits:["Payment tracking (payable dashboard).","Auto reconciliation with Bank statements.","Simplify accounting for easy payment processing."],imageSrc:jS,imageAlt:"Payable Process Tracking",imgPosition:"right"}]:"compliance"===i?[{title:"Streamlining Compliance for Seamless Goods Movement.",subtitle:"Effortless e-Way Bill Management Aligned with GST Guidelines.",description:"Managing compliance for the movement of goods is critical under India\u2019s GST regime, and Atomwalk ensures you\u2019re always aligned with government regulations. With our e-Way Bill management solution, users can easily generate the mandatory electronic document required for transporting goods over \u20b950,000. By enabling e-Way Bill settings and filling shipment details like mode of transport and destination, Atomwalk automates the generation process, saving time and reducing errors. This streamlined solution helps businesses focus on operations while staying compliant with GST guidelines, ensuring hassle-free goods movement and avoiding penalties.",benefits:["Automates e-Way Bill for shipments over \u20b950,000.","Configure once with user name and enablement.","Fill transport modes to generate e-Way Bill.","Aligns with government rules for hassle-free shipments.","Simplifies compliance within shipment management.",""],imageSrc:ES,imageAlt:"E-Way Bill",imgPosition:"right"},{title:"Accurate TDS Compliance, Smarter Accounting.",subtitle:"Stay aligned with tax regulations while optimizing your financial workflows",description:"With Atomwalk, managing Tax Deducted at Source (TDS) becomes seamless and compliant with government regulations. Through the Service Category Setup, users can configure TDS parameters like applicable tax rates, threshold limits, TDS rates for services, and expense ledger details. Once setup, Atomwalk automates TDS calculations during accounting processes. TDS is applied automatically when transactions exceed \u20b930,000, as per government guidelines. Even for multiple product sales to a single customer, the system calculates TDS on the cumulative amount, ensuring precise compliance. Atomwalk simplifies TDS management, helping businesses stay compliant while reducing manual effort.",benefits:["Configure TDS rates, thresholds, and expense ledgers effortlessly.","Automatic TDS calculation for transactions above \u20b930,000.","Cumulative TDS calculations for multiple product sales.","Ensures compliance with updated government regulations.","Streamlines accounting processes with accurate tax deductions."],imageSrc:RS,imageAlt:"TDS",imgPosition:"left"},{title:"Seamless GST Management for Your Organization",subtitle:"Configure, Update, and Automate GST Processes Effortlessly",description:"GST compliance can be complex, but Atomwalk makes it straightforward with an intuitive tax setup and management module. Users can configure GST rates, define minimum taxable amounts, and set effective dates to ensure accurate calculations. Flexible options allow for customization, including tax codes, types, and slab-based deductions. Additionally, Atomwalk empowers businesses to stay updated with evolving government regulations by providing easy tools for updating tax setups. With automated CGST and SGST calculations, Atomwalk simplifies tax management, ensuring compliance and operational efficiency without dependency on external resources.",benefits:["Dynamic GST Configuration(Tax Setup Flexibility)","Set tax codes, types, and slab-based deductions.","Easily update setups for new GST regulations.","Auto-calculates CGST and SGST as per configuration","Update tax setups without external dependency."],imageSrc:PS,imageAlt:"GST",imgPosition:"right"}]:"salesreport"===i?[{title:"Transform Data into Decisions.",subtitle:"Comprehensive Sales Insights at Your Fingertips.",description:"Atomwalk provides detailed sales reports and dashboards, enabling users to audit and manage sales efficiently. With product-wise revenue, monthly trends, and customer-specific insights, users can analyze performance through dynamic graphical charts. Track outstanding amounts, sales trends, and exceptions to make informed decisions with ease.",benefits:["View sales revenue by product, amount, and quantity.","Analyze trends with interactive charts.","Track outstanding amounts and customer-wise performance.","Visualize age and days of outstanding sales.","Access comprehensive transaction and exception lists."],imageSrc:AS,imageAlt:"Sales Report",imgPosition:"right"},{title:"Optimize Procurement with Actionable Insights.",subtitle:"Track, Analyze, and Improve Your Purchasing Performance.",description:"Atomwalk enables businesses to monitor and evaluate procurement processes through detailed purchase reports. With dynamic graphical charts, users can review monthly and quarterly trends, customer-wise data, and outstanding amounts. These insights help streamline procurement tracking and ensure better decision-making.",benefits:["Access graphical charts for purchase trends.","Analyze supplier performance and outstanding balances.","Visualize age and days of outstanding purchases","Review all transactions and exceptions."],imageSrc:CS,imageAlt:"Lead Management",imgPosition:"left"}]:[{title:"Optimize Resource Allocation with Usage Insights",subtitle:"Gain clear visibility into equipment usage patterns",description:"The Usage Trends feature helps you track how and when equipment is being used, allowing you to make data-driven decisions that optimize resource allocation, maintenance, and purchases. By identifying high-demand resources, you can better plan for upkeep and future acquisitions.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:mS,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Ensure Compliance with Complete Audit Logs",subtitle:"Maintain a clear, secure trail of actions and changes",description:"Audit-Ready Records keep a detailed log of all actions and changes, ensuring compliance with industry regulations. This feature provides an accessible and secure record for audits, giving your team peace of mind and simplifying the audit process.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:hS,imageAlt:"Lead Management",imgPosition:"left"},{title:"Streamlined Data Management for System Efficiency",subtitle:"Preventive measures for optimal performance",description:"The Data Purge feature enables you to securely remove outdated or unnecessary data, helping maintain a clutter-free system and improve overall performance. This process ensures that only relevant and up-to-date information is retained, reducing storage costs and supporting compliance with data retention policies.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:mS,imageAlt:"Lead Engagement Overview",imgPosition:"right"},{title:"Transform Data into Actionable Insights",subtitle:"Drive smarter decisions with detailed analytics",description:"By analyzing data from different processes, it empowers your team to make informed decisions that enhance efficiency, reduce downtime, and ensure compliance. This powerful tool helps you maximize the value of your resources and refine your operations with data-driven strategies.",benefits:["Scheduled maintenance blocking","Minimized downtime with preventive care","Enhanced equipment longevity and reliability"],imageSrc:hS,imageAlt:"Lead Management",imgPosition:"left"}];return(0,m.jsx)(OS,{children:o.map((e=>(0,m.jsx)(TS,{bgcolor:r,children:"left"===e.imgPosition?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(MS,{children:(0,m.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,m.jsxs)(IS,{children:[(0,m.jsx)("h1",{children:e.title}),(0,m.jsx)("h2",{children:e.subtitle}),(0,m.jsx)("p",{style:{color:"#666"},children:e.description}),(0,m.jsx)(zS,{children:(0,m.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:Ev,alt:"Check mark"}),(0,m.jsx)("span",{children:e})]},t)))})})]})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(IS,{children:[(0,m.jsx)("h1",{children:e.title}),(0,m.jsx)("h2",{children:e.subtitle}),(0,m.jsx)("p",{style:{color:"#666"},children:e.description}),(0,m.jsx)(zS,{children:(0,m.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:Ev,alt:"Check mark"}),(0,m.jsx)("span",{children:e})]},t)))})})]}),(0,m.jsx)(MS,{children:(0,m.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},LS=n.p+"static/media/Sales_Lifecycle.667ff3a8b502cf7a76c4.png",FS=n.p+"static/media/Procurement.55f25f33fc0f83e86c4e.png",NS=n.p+"static/media/complience.cdaa7f3616a12e0b2e85.png",BS=()=>{const[e,n]=(0,t.useState)(""),r=Xa(),i=[{title:"Enhance Your Sales Lifecycle Management",titles:"Sales",description:"From work orders to invoicing, streamline your sales process for better control and business growth.",background:"#C7F98E",backgrounds:"#cefad0",img:`${LS}`},{title:"Streamlined Procurement, Smarter Decisions",titles:"Procurement",description:"From supplier identification to payment settlement, manage every step of your procurement lifecycle with efficiency and control.",background:"#fc6ae2",backgrounds:"#FED7F7",img:`${FS}`},{title:"Master Your Compliance Lifecycle",titles:"Compliance",description:"Streamline GST, TDS, and e-way bill management with Atomwalk to ensure effortless adherence to regulatory requirements.",background:"#FFF176",backgrounds:"#fff9c4",img:`${NS}`},{title:"Gain Insights with Report of Sales & Procurement",titles:"Report",description:"Unlock the power of data with Atomwalk\u2019s detailed reports and Dashboard. Gain clear insights into usage pattern of equpments and labs  ",background:"#FFF176",backgrounds:"#fff9c4",img:`${Ik}`}];(0,t.useEffect)((()=>{r.pathname.includes("saleslifecycle")?n("saleslifecycle"):r.pathname.includes("procurement")?n("procurement"):r.pathname.includes("compliance")?n("compliance"):r.pathname.includes("salesreport")?n("salesreport"):r.pathname.includes("invoicemanage")?n("invoicemanage"):r.pathname.includes("invoiceaction")?n("invoiceaction"):r.pathname.includes("paymentmanage")&&n("paymentmanage")}),[r.pathname]);const a=r.pathname.includes("saleslifecycle")?i[0]:r.pathname.includes("procurement")?i[1]:r.pathname.includes("compliance")?i[2]:r.pathname.includes("salesreport")?i[3]:i[0];return(0,m.jsxs)("div",{children:[(0,m.jsx)(Ep,{title:a.title,description:a.description,background:a.background,img:a.img,lead:!0}),(0,m.jsx)(Cv,{bgcolors:a.backgrounds,data:a.titles}),(0,m.jsx)(DS,{data:e,bgcolors:a.backgrounds})]})},qS=n.p+"static/media/ProcessProject.65e03879f02a9b2a7787.png",HS=n.p+"static/media/Project_icon.724979d3c06fe5786e2b.png",WS=(n.p,ia.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`),_S=ia.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,US=ia.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,GS=ia.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,KS=ia.div`
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
`,YS=ia.div`
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
`,VS=ia.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,JS=ia.p`
  font-size: 1em;
  color: #666;
`,QS=()=>{const e=e=>{window.location.href=`/${e}`};return(0,m.jsxs)(WS,{children:[(0,m.jsx)(_S,{children:"Key Features"}),(0,m.jsx)(US,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that streamlines and optimizes your entire process and project management. Our platform offers:"}),(0,m.jsxs)(GS,{children:[(0,m.jsxs)(KS,{onClick:()=>e("process.html"),children:[(0,m.jsx)(YS,{bgColor:"#D8F5E3",children:(0,m.jsx)("img",{src:Dw,alt:"Process"})}),(0,m.jsx)(VS,{children:"Work Order / Process Tamplete:"}),(0,m.jsx)(JS,{children:"Streamline workflows with customizable process templates for consistent and efficient project execution."})]}),(0,m.jsxs)(KS,{onClick:()=>e("project.html"),children:[(0,m.jsx)(YS,{bgColor:"#F0E7FF",children:(0,m.jsx)("img",{src:HS,alt:"Project"})}),(0,m.jsx)(VS,{children:"Project Management:"}),(0,m.jsx)(JS,{children:"Efficiently plan, track, and manage projects with real-time progress monitoring, task allocation, and performance insights."})]}),(0,m.jsxs)(KS,{onClick:()=>e("activityreport.html"),children:[(0,m.jsx)(YS,{bgColor:"#F0E7FF",children:(0,m.jsx)("img",{src:tS,alt:"Activity Report"})}),(0,m.jsx)(VS,{children:"Report & Dashboard:"}),(0,m.jsx)(JS,{children:"Gain actionable insights with comprehensive reports and interactive dashboards, enabling data-driven decision-making and performance tracking."})]})]})]})},ZS=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Ep,{title:"Streamline Your Workorder Execution with Atomwalk Project Management",description:"Streamline your workflows, track progress, and ensure seamless project execution with Atomwalk\u2019s comprehensive work order and project management solution. Optimize your team\u2019s performance, manage resources, and stay on top of deadlines with complete visibility.",background:"#ADEBF3",lead:!0,img:qS}),(0,m.jsx)(rb,{data:"Process and Project"}),(0,m.jsx)(QS,{}),(0,m.jsx)(pv,{data:"Project"})]}),XS=n.p+"static/media/ProjectManage.9d05e43775e1f005186b.png",$S=n.p+"static/media/ProcessTamplete.1191d1e920df873ca265.png";const ej=n.p+"static/media/ProductCategory.bbc9ae85f2952e89601a82951aef1fe2.svg";const tj=n.p+"static/media/ProcessInventorySetup.93b928b8c99bcba93c933f6248964328.svg";const nj=n.p+"static/media/EquipmentSetup.1c19d8757759bbfdc65f91ac92503908.svg";const rj=n.p+"static/media/DocumentSetup.a83cf8bebdd57c9894b15f6e6c3eb1d6.svg";const ij=n.p+"static/media/ActivitySetup.a71aff4b7884c2759705623e5c798fc0.svg";const aj=n.p+"static/media/ProcessSetup.9795daff9059ad8835fa978673da20ca.svg";const oj=n.p+"static/media/ProjectCreation.39f05a8597068040e02f6659e1b80c3d.svg";const sj=n.p+"static/media/UserActivity.f2ec63dbad6e16abf4b70f5836e470f4.svg";const lj=n.p+"static/media/ProjectMangement.5e726b74588e811115939587e947632d.svg";const cj=n.p+"static/media/ActivityDB.3590487b57093f535bbdb3fea9a5d0e8.svg";const dj=n.p+"static/media/ProjectDB.2c86a89171b2ab794ff750e99f97642a.svg";const uj=n.p+"static/media/ResourceUtilisationDB.979c9c5aab9598c9f6e256f40db415aa.svg",pj=ia.div`
  width: 100%;
  height: 100%;
`,fj=ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EAFCFF; 
  padding: 20px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
`,mj=ia.div`
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
`,hj=ia.div`
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
`,gj=ia.div`
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
`,xj=e=>{let{data:n}=e;console.log(n,"  dcjcnd");const r=n,i="process"==r?[{title:"Product Management with Category Setup",subtitle:"Organize Products for Better Process Integration",description:"Atomwalk makes managing product categories effortless, ensuring that every product is aligned with your business's financial and operational needs. This structured categorization ensures seamless product segregation for streamlined operations. Atomwalk ensures you\u2019re ready for seamless operations and compliance.",benefits:["Segregate products effectively for better management","It Helps to filter the product."],imageSrc:ej,imageAlt:"Product Category",imgPosition:"right"},{title:"Comprehensive Inventory Management with Atomwalk",subtitle:"Structured Setup and Categorization for Smarter Control",description:"Atomwalk enables precise inventory management, ensuring every item is categorized to align with your business\u2019s operational needs. Begin with the Inventory Item Category Setup to establish structured categorization. Organize inventory location-wise and efficiently handle multiple inventories. With Atomwalk, you can create and manage inventory items by filling in detailed information and linking them category-wise. Atomwalk ensures you\u2019re ready for seamless operations and compliance.",benefits:["Establish structured categories for inventory items.","Organize inventory by specific locations.","Multiple Inventory Management, Create and organize inventory items with complete details.","Associate items with categories for better tracking."],imageSrc:tj,imageAlt:"Inventory Setup",imgPosition:"left"},{title:"Robust Equipment Management with Atomwalk",subtitle:"Streamlined Equipment Setup and Usage Tracking",description:"Atomwalk equips administrators to manage multiple equipment with precision. Navigate to the 'Equipment Setup' under 'Office Setup' to add and configure equipment as needed. By entering details like equipment type, usage unit, booking schedules, and cost data, Atomwalk ensures efficient load management and accurate tracking. This structured approach aligns your equipment utilization with operational needs while ensuring seamless integration into your workflows.",benefits:["Able to manage multiple equipment, Add equipment with detailed configurations, including type and usage parameters.","Define schedules with booking times, slots, and restrictions.","Automatically track and manage equipment load efficiently."],imageSrc:nj,imageAlt:"Equipment Setup",imgPosition:"right"},{title:"Manage Document Setup and Configuration",subtitle:"Capture Output Documents for Manufacturing Process",description:"Atomwalk\u2019s document configuration feature empowers admins to tailor reports and documentation according to the manufacturing industry specific requirements. Detailed reports based on equipment output results can be stored in the form of documents. The system supports real-time data visualization, making it easier to analyze experiment results and make informed decisions.",benefits:["Customizable document setup","Real-time data visualization"],imageSrc:rj,imageAlt:"Document Setup",imgPosition:"left"},{title:"Comprehensive Management for Activity Essentials",subtitle:"Integrate items, equipment, and resources effortlessly into activities.",description:"Atomwalk enables organizations to create, customize, and manage process activities with precision and flexibility. Configure activity specifics like categories, types, and user groups, ensuring seamless alignment with existing workflows. Features like planned durations, open-ended activities, and visual customizations empower businesses to enhance workflow clarity and efficiency. Atomwalk also simplifies resource allocation by allowing users to add required items, link equipment with precise work durations, and manage critical details such as documents, reviews, and costs. With customizable fields and robust tools, Atomwalk ensures every activity is defined, equipped, and executed efficiently, driving operational success.",benefits:["Add items from inventory or create new ones to align with activity needs.","Select or add equipment, with options to book it for specific durations.","Add custom fields to activities based on unique requirements.","Manage documents, reviews, and cost details for each activity.","Ensure equipment availability with defined work durations."],imageSrc:ij,imageAlt:"Activity Creation",imgPosition:"right"},{title:"Optimize Manufacturing Processes with Activity-Based Templates",subtitle:"Create, Manage, and Analyze for efficient process execution.",description:"Easily create a sequence of activities for projects in the manufacturing industry with our intuitive process management system. Define processes by filling essential details, add activities with customizable fields like planned duration and allocation percentage, and manage dependencies. Gain insights through an interactive Gantt chart, track item details (BOM, WIP materials, and output), and evaluate efficiency with detailed cost analysis, including equipment requirements.",benefits:["Define process details: name, category, ID, type, manufacturing, sale price, description.","Add activities: duration (planned days), allocation %, dependencies.","Link dependent activities for seamless workflow management.","View Activity Gantt Chart and dependency graphs."," Monitor BOM, WIP materials, and output details with images and costs.","Analyze equipment requirements and associated costs.","Evaluate process and activity efficiency."],imageSrc:aj,imageAlt:"Creation of Process",imgPosition:"left"}]:"project"==r?[{title:"Efficient Work Order Management Made Simple",subtitle:"Streamline project creation and link seamlessly with sales orders.",description:"Atomwalk enables businesses to create projects seamlessly after confirming sales orders, ensuring smooth transition into work orders. Users can generate detailed projects by linking them to specific sales orders, ensuring all relevant details auto-populate while offering flexibility for customization. From assigning a project manager to selecting a suitable project setup template, Atomwalk simplifies the workflow, making project creation both efficient and adaptable.",benefits:["Unique codes ensure streamlined tracking.","Auto-populates order items and templates linked to sales orders","Edit fields like project title, revenue, start date, and description as needed.","Automatically suggests templates, with options for customization."],imageSrc:oj,imageAlt:"Project/Work Order Creation",imgPosition:"right"},{title:"Empower Your Projects with Advanced Activity Management",subtitle:"Customizable, collaborative, and detailed project activity tracking.",description:"Atomwalk empowers project teams with seamless activity tracking and inventory management. Once the project manager starts a project, allocated users receive job cards with detailed activity instructions and work order references. The structured job card minimizes data input errors, ensuring accuracy. Users can begin activities by clicking the 'Start Project' button in their 'Project Activities' list, with dependencies automatically validated. As activities progress, users can update in-process and output inventory details, track activity completion metrics, and finalize tasks with remarks. Atomwalk also allows the allocation and reallocation of inventory items, with provisions to return unused items, helping businesses reduce waste and optimize inventory tracking.",benefits:["Activities reflect for assigned users after project initiation.","Access detailed job cards with work order references and structured fields for updates.","Activities can only start once dependent tasks are completed."," Update in-process and output inventory details during project execution.","Allocate, reallocate, or return unused items to prevent losses and ensure efficient inventory usage.","Updated details reflect on the final job card for streamlined reporting."],imageSrc:sj,imageAlt:"User Activity Management",imgPosition:"left"},{title:"Streamlined Project Management Tailored for Manufacturing",subtitle:"Efficient Activity Coordination and Resource Tracking",description:"Atomwalk provides manufacturing-focused project management, integrating activity planning, dependency setup, and resource tracking. Activities auto-populate from process templates, with options to add or customize tasks and dependencies using a Gantt Chart view. Users can manage project inventory, equipment requirements, and critical documents essential for execution. The cost analysis module offers insights into activity costs, inventory expenses, and equipment usage, with detailed revenue and margin tracking. Atomwalk ensures precise planning, resource optimization, and improved project efficiency for manufacturing operations.",benefits:["Auto-populated tasks with dependency and sub-activity options."," Visualize and manage critical and other paths for streamlined workflows.","Manage inventory, equipment, and required documents effectively.","Track activity costs, equipment usage, and project margins.","Tools designed for the specific demands of manufacturing projects."],imageSrc:lj,imageAlt:"Project Management",imgPosition:"right"}]:"activityreport"==r?[{title:"Activity Dashboards for Efficient Manufacturing Projects",subtitle:"Track Activities and Ensure Operational Precision",description:"Atomwalk\u2019s Activity Dashboard helps manufacturing teams efficiently track and manage tasks. Users can view assigned activities, track progress, and address overdue or pending tasks. Key metrics include overdue activities, upcoming deadlines, and completed milestones, with dynamic filters for quick sorting by date, type, or status. Designed to optimize workflows, the dashboard provides real-time access to activity details, ensuring seamless task execution and improved project efficiency in manufacturing operations.",benefits:["Track personal activities, including ongoing, overdue, and completed tasks.","Access critical data like deadlines and completion statuses."," Access detailed project overviews, including overdue and future activities.","Sort activities by date, type, status, or assigned user for customized tracking.","Monitor progress, identify delays, and optimize task management."," Use dashboard insights to allocate resources effectively and meet deadlines."],imageSrc:cj,imageAlt:"User Activity Dashboard",imgPosition:"right"},{title:"Optimize Profitability with Atomwalk's Project Margin Dashboard",subtitle:"Customizable, collaborative, and detailed project activity tracking.",description:"Atomwalk\u2019s Project Margin Dashboard provides manufacturing teams with a clear comparison of planned vs. actual margins through graphical views. Users can review project lists with details like assigned managers, project status, and margins. The dashboard also enables quick access to critical data, including project revenue, cost breakdowns, activity dependencies, inventory, and equipment requirements, ensuring better margin control and operational efficiency.",benefits:["Visualize planned vs. actual margins for each project.","Review assigned managers, project status, and key metrics.","Access revenue and cost breakdowns for users, items, and equipment."," Tools tailored for profit tracking and resource efficiency.","Dynamic Filter & Sorting of List."],imageSrc:dj,imageAlt:"Project Dashboard",imgPosition:"left"},{title:"Optimize Resource Allocation with Atomwalk's Utilization Dashboard",subtitle:"Track Effort Utilization for Better Resource Planning",description:"Atomwalk\u2019s Resource Utilization Dashboard provides a clear view of planned vs. actual effort utilization through dynamic graphical insights. Manufacturing teams can analyze month-wise utilization, compare planned and actual capacities, and filter data by manager, project, user, or date. The dashboard also offers detailed User Effort Utilization Data to monitor resource-specific performance, ensuring effective allocation and efficient workload distribution across projects.",benefits:["Graphical view of planned vs. actual resource usage."," Sort by manager, project, user, or date for precise insights.","Analyze planned and actual monthly effort capacities.","Monitor individual user effort utilization.","Tools to enhance resource efficiency and project alignment."],imageSrc:uj,imageAlt:"Resource Utilisation",imgPosition:"right"}]:[{title:"Activity Dashboards for Efficient Manufacturing Projects",subtitle:"Track Activities and Ensure Operational Precision",description:"Atomwalk\u2019s Activity Dashboard helps manufacturing teams efficiently track and manage tasks. Users can view assigned activities, track progress, and address overdue or pending tasks. Key metrics include overdue activities, upcoming deadlines, and completed milestones, with dynamic filters for quick sorting by date, type, or status. Designed to optimize workflows, the dashboard provides real-time access to activity details, ensuring seamless task execution and improved project efficiency in manufacturing operations.",benefits:["Track personal activities, including ongoing, overdue, and completed tasks.","Access critical data like deadlines and completion statuses."," Access detailed project overviews, including overdue and future activities.","Sort activities by date, type, status, or assigned user for customized tracking.","Monitor progress, identify delays, and optimize task management."," Use dashboard insights to allocate resources effectively and meet deadlines."],imageSrc:cj,imageAlt:"User Activity Dashboard",imgPosition:"right"}],a=Xa();return(0,t.useEffect)((()=>{const e=a.search.match(/\?(\d+)/),t=e?parseInt(e[1],10):NaN;console.log(t,"Step value parsed from URL");const n={process:780,project:800,activityreport:870}[r]||0,i=isNaN(t)?0:n+(t-1)*n;i>0&&window.scrollTo({top:i,behavior:"smooth"})}),[a.search,r]),(0,m.jsx)(pj,{children:i.map((e=>(0,m.jsx)(fj,{children:"left"===e.imgPosition?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(mj,{children:(0,m.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,m.jsxs)(gj,{children:[(0,m.jsx)("h1",{children:e.title}),(0,m.jsx)("h2",{children:e.subtitle}),(0,m.jsx)("p",{style:{color:"#666"},children:e.description}),(0,m.jsx)(hj,{children:(0,m.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:Ev,alt:"Check mark"}),(0,m.jsx)("span",{children:e})]},t)))})})]})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(gj,{children:[(0,m.jsx)("h1",{children:e.title}),(0,m.jsx)("h2",{children:e.subtitle}),(0,m.jsx)("p",{style:{color:"#666"},children:e.description}),(0,m.jsx)(hj,{children:(0,m.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:Ev,alt:"Check mark"}),(0,m.jsx)("span",{children:e})]},t)))})})]}),(0,m.jsx)(mj,{children:(0,m.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},bj=()=>{const[e,n]=(0,t.useState)(""),r=Xa(),i=[{title:"Process Operations for Every Business Need",titles:"Work Order",description:"Comprehensive Solutions for Inventory, Equipment, Documentation, and Process Management.",background:"#ADEBF3",img:`${$S}`},{title:"Integrated Project and Activity Management",titles:"Project Management",description:"Efficiently Link Sales Orders, Track Progress, and Optimize Resources for Manufacturing Excellence.",background:"#ADEBF3",img:`${XS}`},{title:"Advanced Dashboards for Project and Resource Management",titles:"Report & Dashboard",description:"Gain Real-Time Insights into Activity Progress, Project Margins, and Resource Utilization for Optimized Manufacturing Performance.",background:"#ADEBF3",img:`${Ik}`}];(0,t.useEffect)((()=>{r.pathname.includes("process")?n("process"):r.pathname.includes("project")?n("project"):n("activityreport")}),[r.pathname]);const a=r.pathname.includes("process")?i[0]:r.pathname.includes("project")?i[1]:(r.pathname.includes("activityreport"),i[2]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(Ep,{title:a.title,description:a.description,background:a.background,img:a.img,lead:!0}),(0,m.jsx)(Cv,{bgcolors:"#EAFCFF",data:a.titles}),(0,m.jsx)(xj,{data:e})]})},yj=n.p+"static/media/inventory-management-img.418628e445e2308a0712.png",vj=ia.div`
  padding: 110px 20px;
  background-color: #fff7e6;
  text-align: center;
`,wj=ia.h2`
  font-size: 2.5em;
  font-weight: bold;
  color: #333;

  span {
    color: #7d3eff; /* Purple color for "greytHR" */
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }
`,kj=ia.p`
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,Sj=ia.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,jj=ia.div`
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
`,Aj=ia.div`
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
`,Cj=ia.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`,Ej=ia.p`
  font-size: 1em;
  color: #666;
`,Rj=()=>{const[e,n]=(0,t.useState)(!1),r=e=>{window.location.href=`/${e}`};return(0,m.jsxs)(vj,{children:[(0,m.jsx)(wj,{children:"Key Features"}),(0,m.jsx)(kj,{children:"Atomwalk Office is more than just an ERP; it\u2019s a comprehensive solution that streamlines and optimizes your entire inventory. Our platform offers:"}),(0,m.jsxs)(Sj,{children:[(0,m.jsxs)(jj,{onClick:()=>r("inventoryop.html"),children:[(0,m.jsx)(Aj,{bgColor:"#D8F5E3",children:(0,m.jsx)("img",{src:Dw,alt:"Process"})}),(0,m.jsx)(Cj,{children:"Inventory Operation:"}),(0,m.jsx)(Ej,{children:"Streamline workflows with customizable process templates for consistent and efficient project execution."})]}),(0,m.jsxs)(jj,{onClick:()=>{n(!e)},children:[(0,m.jsx)(Aj,{bgColor:"#F0E7FF",children:(0,m.jsx)("img",{src:HS,alt:"Project"})}),(0,m.jsx)(Cj,{children:"Warehouse Management:"}),(0,m.jsx)(Ej,{children:"Efficiently plan, track, and manage projects with real-time progress monitoring, task allocation, and performance insights."})]}),(0,m.jsxs)(jj,{onClick:()=>r("inventoryreport.html"),children:[(0,m.jsx)(Aj,{bgColor:"#F0E7FF",children:(0,m.jsx)("img",{src:tS,alt:"Activity Report"})}),(0,m.jsx)(Cj,{children:"Report & Dashboard:"}),(0,m.jsx)(Ej,{children:"Gain actionable insights with comprehensive reports and interactive dashboards, enabling data-driven decision-making and performance tracking."})]})]}),(0,m.jsx)(as,{visible:e,setvisible:n})]})},Pj=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Ep,{title:"Inventory Management",description:"Streamline your workflows, track progress, and ensure seamless project execution with Atomwalk\u2019s comprehensive work order and project management solution. Optimize your team\u2019s performance, manage resources, and stay on top of deadlines with complete visibility.",background:"#9DF9F0",lead:!0,img:yj}),(0,m.jsx)(rb,{data:"Inventory"}),(0,m.jsx)(Rj,{}),(0,m.jsx)(pv,{data:"Inventory"})]}),Oj=n.p+"static/media/inventory_operation.f921c6b2ae088242b90d.png";const Tj=n.p+"static/media/Inventory_item.9df3224a3c01d8a92fbbf8a480bba54e.svg";const Mj=n.p+"static/media/PhysicalInspection.e882aa9a1776bb278c4a6f1e00205509.svg";const zj=n.p+"static/media/DecreaseItem.fe8560c3a5f95819a1b04a24e56b27b4.svg";const Ij=n.p+"static/media/StockItemReport.7019bb07ce49d91b4e7e6d32f9be876f.svg";const Dj=n.p+"static/media/ValuationReport.3fe75388f21eeeaf13bfd71cf2c31320.svg";const Lj=n.p+"static/media/ExpiryReport.f12da906142a50af27f6935fd1e13fa7.svg",Fj=ia.div`
  width: 100%;
  height: 100%;
`,Nj=ia.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #D0FEF9; 
  padding: 20px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
`,Bj=ia.div`
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
`,qj=ia.div`
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
`,Hj=ia.div`
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
`,Wj=e=>{let{data:n}=e;console.log(n,"  dcjcnd");const r=n,i="inventoryop"==r?[{title:"Comprehensive Inventory Management with Atomwalk",subtitle:"Structured Setup and Categorization for Smarter Control",description:"Atomwalk enables precise inventory management, ensuring every item is categorized to align with your business\u2019s operational needs. Begin with the Inventory Item Category Setup to establish structured categorization. Organize inventory location-wise and efficiently handle multiple inventories. With Atomwalk, you can create and manage inventory items by filling in detailed information and linking them category-wise. Atomwalk ensures you\u2019re ready for seamless operations and compliance.",benefits:["Establish structured categories for inventory items.","Organize inventory by specific locations.","Multiple Inventory Management.","Create and organize inventory items with complete details.","Associate items with categories for better tracking."],imageSrc:tj,imageAlt:"Inventory Setup",imgPosition:"right"},{title:"Flexible Inventory Item Management with Atomwalk",subtitle:"Track, Update, and Manage Inventory Items Effortlessly",description:"Atomwalk streamlines maintenance of inventory items by allowing users to add items across various categories, inventory types, batch expiry details, and BIN locations. Users can also associate preferred supplier details with items if required. For enhanced customization, Atomwalk provides an Additional Fields feature, enabling users to dynamically add and manage extra fields based on specific business needs, ensuring a tailored inventory management experience for manufacturing operations. Atomwalk empowers users to dynamically manage inventory stock through the Batch Details section. Track essential details such as batch numbers, expiry dates, bin locations, initial and current quantities, and stock history. Users can view stock opening balances and update item stock details directly via the Action button, ensuring accurate and real-time stock management tailored to manufacturing needs.",benefits:["Add items by category, type, and stock item group.","Include preferred supplier-specific information along with supplier reference and pricing.","Add custom fields through the Additional Fields feature.","Supports batch/expiry date tracking.","Maintain open stock balance.","Min Inventory item quantity tracking.","Default BIN location setup.","Designed for comprehensive inventory tracking and organization."],imageSrc:Tj,imageAlt:"Inventory Item",imgPosition:"left"},{title:"Effortless Inventory Updates During Purchase Order Processing",subtitle:"Seamless Stock Management with Receiving BIN Location",description:"Atomwalk enhances inventory management by automatically increasing item quantities during the Purchase Order goods received process. Users simply input details like the invoice number, quantity received, and the desired bin location for storage. Once submitted, inventory quantities are updated in real-time, ensuring accurate stock records and streamlined purchase order handling with location control.",benefits:["Update inventory during the Purchase Order - Goods received process (along with GRN).","Allocate BIN storage location.","Ensures accurate and efficient inventory tracking.","Asset (Inventory Item) tracking.","Auto Accounting entries to reflect stock inflow.","Batch/Inventory item serial no tracking."],imageSrc:kS,imageAlt:"Increment of Inventory",imgPosition:"right"},{title:"Ensure Accuracy with Physical Inventory Inspection",subtitle:"Adjust Stock Levels for Real-Time Inventory Management.",description:"Atomwalk offers a Physical Inspection feature to help users maintain accurate inventory records. If stock discrepancies arise, users can adjust inventory quantities to reflect actual levels, ensuring reliable data for operational efficiency in manufacturing processes.",benefits:["Verify and adjust inventory quantities.","Align system records with actual stock levels.","Maintains inventory accuracy for smooth operations."],imageSrc:Mj,imageAlt:"Physical Inspection",imgPosition:"left"},{title:"Automated Inventory Adjustments for Sales and Work Orders",subtitle:"Track Consumption and Plan Future Orders with Ease",description:"Atomwalk ensures automatic inventory adjustments when items are consumed in a work order or sold to a customer. With real-time stock reduction upon order issuance, users can seamlessly track inventory levels. This feature enables proactive decision-making, allowing users to issue new sales orders or create work orders for production as inventory levels change.",benefits:["Inventory consumption tracking through sales or project work orders.","Auto Inventory allocation based on FIFO method.","Clear history of consumption across sales and projects."],imageSrc:zj,imageAlt:"Decrement of Inventory",imgPosition:"right"}]:"inventoryreport"==r?[{title:"Comprehensive Stock Insights at Your Fingertips",subtitle:"Filter, Analyze, and Track Inventory Movement with Ease",description:"The Stock Item Report section in Atomwalk empowers users to filter inventory data by date, stock category, or item group. Users can view stock details, including item-wise stock category, item group, available quantity, quantities in and out, and more. The View Details button provides batch-specific insights such as flow type, transaction dates, remarks, unit quantity, current stock levels, unit price, and expiry dates. This feature ensures detailed tracking and better decision-making for manufacturing operations.",benefits:["Filter by date, category, or item group.","Access details on available quantity, in/out movements, and categories.","View batch-wise flow type, dates, and pricing.","Enables precise inventory control and tracking."],imageSrc:Ij,imageAlt:"Stock Item Report",imgPosition:"right"},{title:"Track Item Vaaluations with Batch-Level Precision",subtitle:"Dynamic Valuaation Reporting for Smarter Inventory Decisions",description:"The Valuation Report section in Atomwalk allows users to monitor item valuations batch-wise. By clicking on the View Details button for an item, users can access comprehensive data, including batch number, expiry date, flow type (IN or OUT), transaction dates, quantities, average price, and valuation in INR. Dynamic sorting options enable users to filter reports by date, stock category, or item group, providing actionable insights for effective inventory and financial planning.",benefits:["Monitor expiry dates, flow type, and valuations."," View quantities, pricing, and valuation per batch.","Supports inventory valuation and strategic planning."],imageSrc:Dj,imageAlt:"Valuation Report",imgPosition:"left"},{title:"Stay Ahead with Expiry Tracking",subtitle:"Smart Tools to Monitor and Manage Expiring Inventory",description:"The Valuation Report section in Atomwalk includes an Inventory Expiry Report, enabling users to track expiring items with precision. Users can filter the expiry item list by categories such as 30 days, 60 days, or 90 days before expiry and sort by Expiring As on Date, Item Group, or Stock Category. Batch-wise expiry dates for each item are easily accessible, helping businesses manage expiring inventory effectively and reduce wastage.",benefits:["Track items expiring day wise.","View expiry details for each batch.","Minimize wastage and optimize inventory management."],imageSrc:Lj,imageAlt:"Expiry Report",imgPosition:"right"}]:[{title:"Wire House Management",subtitle:"Wire House Management Subtitle",description:"Wire House Management Description",benefits:["Wire House Management Benifits 1","Wire House Management Benifits 2"],imageSrc:tj,imageAlt:"Wire House Management",imgPosition:"right"}],a=Xa();return(0,t.useEffect)((()=>{const e=a.search.match(/\?(\d+)/),t=e?parseInt(e[1],10):NaN;console.log(t,"Step value parsed from URL");const n={inventoryop:820,inventoryreport:800}[r]||0,i=isNaN(t)?0:n+(t-1)*n;i>0&&window.scrollTo({top:i,behavior:"smooth"})}),[a.search,r]),(0,m.jsx)(Fj,{children:i.map((e=>(0,m.jsx)(Nj,{children:"left"===e.imgPosition?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Bj,{children:(0,m.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})}),(0,m.jsxs)(Hj,{children:[(0,m.jsx)("h1",{children:e.title}),(0,m.jsx)("h2",{children:e.subtitle}),(0,m.jsx)("p",{style:{color:"#666"},children:e.description}),(0,m.jsx)(qj,{children:(0,m.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:Ev,alt:"Check mark"}),(0,m.jsx)("span",{children:e})]},t)))})})]})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(Hj,{children:[(0,m.jsx)("h1",{children:e.title}),(0,m.jsx)("h2",{children:e.subtitle}),(0,m.jsx)("p",{style:{color:"#666"},children:e.description}),(0,m.jsx)(qj,{children:(0,m.jsx)("ul",{children:e.benefits.map(((e,t)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{src:Ev,alt:"Check mark"}),(0,m.jsx)("span",{children:e})]},t)))})})]}),(0,m.jsx)(Bj,{children:(0,m.jsx)("img",{src:e.imageSrc,alt:e.imageAlt})})]})})))})},_j=()=>{const[e,n]=(0,t.useState)(""),r=Xa(),i=[{title:"Inventory Operations: Precision in Stock Management",titles:"Inventory Operation",description:"Comprehensive solutions for tracking inventory, managing stock adjustments, and optimizing resources to meet the dynamic needs of manufacturing and production processes.",background:"#9DF9F0",img:`${Oj}`},{title:"Integrated Warehouse Management",titles:"Warehouse Management",description:"Efficiently Link Sales Orders, Track Progress, and Optimize Resources for Manufacturing Excellence.",background:"#9DF9F0",img:`${XS}`},{title:"Advanced Dashboards for Project and Resource Management",titles:"Inventory Report & Dashboard",description:"Gain Real-Time Insights into Activity Progress, Project Margins, and Resource Utilization for Optimized Manufacturing Performance.",background:"#9DF9F0",img:`${Ik}`}];(0,t.useEffect)((()=>{r.pathname.includes("inventoryop")?n("inventoryop"):r.pathname.includes("warehouse")?n("warehouse"):n("inventoryreport")}),[r.pathname]);const a=r.pathname.includes("inventoryop")?i[0]:r.pathname.includes("warehouse")?i[1]:(r.pathname.includes("inventoryreport"),i[2]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(Ep,{title:a.title,description:a.description,background:a.background,img:a.img,lead:!0}),(0,m.jsx)(Cv,{bgcolors:"#D0FEF9",data:a.titles}),(0,m.jsx)(Wj,{data:e})]})},Uj=aa`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Gj=aa`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,Kj=ia.div`
  text-align: center;
  background: linear-gradient(135deg ,rgb(244, 243, 243) 50%,  rgb(186, 219, 248) 100%);
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${Uj} 1.5s ease-in;
`,Yj=ia.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 350px;
  animation: ${Gj} 1.5s ease-in;
`,Vj=ia.input`
  width: 100%;
  padding: 0.7rem;
  margin: 0.8rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #6a11cb;
  }
`,Jj=ia.button`
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  background: #6a11cb;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #2575fc;
  }
`,Qj=ia.div`
  width: 90%;
  max-width: 900px;
  margin: auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: ${Uj} 2s ease-in;
`,Zj=ia.h1`
  /* font-size: 2rem; */
  margin-bottom: 6.5rem;
  font-weight: 600;
  color:#454545;
  animation: ${Gj} 1s ease-in;
`,Xj=ia.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 1000;
`,$j=()=>{const[e,n]=(0,t.useState)(""),[r,i]=(0,t.useState)(""),[a,o]=(0,t.useState)(""),[s,l]=(0,t.useState)(!1),[c,d]=(0,t.useState)(3600),u=eo(),p=["atomwalk@8458","atomwalk@9937","atomwalk@1693"];(0,t.useEffect)((()=>{localStorage.getItem("email")&&l(!0)}),[]);(0,t.useEffect)((()=>{let e;return s&&(e=setInterval((()=>{d((t=>t<=1?(clearInterval(e),u("/thankyou.html",{replace:!0}),0):t-1))}),1e3)),()=>clearInterval(e)}),[s,u]);return(0,t.useEffect)((()=>{const e=()=>{document.hidden&&(alert("Tab switching is not allowed. Closing the page."),navigator.mediaDevices.getUserMedia({video:!0}).then((e=>{const t=document.createElement("video");t.srcObject=e,t.play()})),u("/thankyou.html",{replace:!0}))};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}}),[]),(0,m.jsxs)(Kj,{children:[(0,m.jsx)(Zj,{children:"Kickstart Your Career with Atomwalk: Campus Hiring 2025"}),s&&(0,m.jsxs)(Xj,{children:["Time Left: ",(e=>{const t=e%60;return`${Math.floor(e/60).toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`})(c)]}),s?(0,m.jsx)(Qj,{children:(0,m.jsx)("iframe",{src:"atomwalk@8458"==a?"https://docs.google.com/forms/d/e/1FAIpQLScAitRvhFeqZLMfwlQEFzcwdHTaRrFHl78oZYWKGEizYpUAgQ/viewform":"atomwalk@9937"==a?"https://forms.gle/eRYrGeCqY677cmhm9":"atomwalk@1693"==a?"https://forms.gle/grABZrm9vptzTcWb6":"https://www.sumydesigns.com/wp-content/uploads/2018/08/thank-you-page.jpg",title:"Assessment Form",width:"100%",height:"600",style:{border:"none"}})}):(0,m.jsxs)(Yj,{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{children:"Name:"}),(0,m.jsx)(Vj,{type:"text",value:e,onChange:e=>n(e.target.value),placeholder:"Enter your name"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{children:"Email:"}),(0,m.jsx)(Vj,{type:"email",value:r,onChange:e=>i(e.target.value),placeholder:"Enter your email"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{children:"Token Code:"}),(0,m.jsx)(Vj,{type:"text",value:a,onChange:e=>o(e.target.value),placeholder:"Enter token code"})]}),(0,m.jsx)(Jj,{onClick:()=>{if(!e||!r||!a)return void alert("All fields are mandatory!");if(!p.includes(a))return void alert("Token not matched! Please enter a valid token.");localStorage.getItem("email")===r?alert("You are already registered!"):(localStorage.setItem("name",e),localStorage.setItem("email",r),localStorage.setItem("token",a),alert("Registration successful!"),l(!0))},children:"Register"})]})]})},eA=aa`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,tA=aa`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,nA=ia.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://img.freepik.com/premium-photo/colorful-abstract-background-with-blue-yellow-geometric-pattern_481527-28428.jpg?semt=ais_hybrid') no-repeat center center/cover;
  animation: ${eA} 2s ease-in-out;
  text-align: center;
`,rA=ia.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 40px 60px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${tA} 1s ease-in-out;
`,iA=ia.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
`,aA=ia.p`
  font-size: 1.5rem;
  color: #555;
  margin: 0;
`,oA=()=>(0,m.jsx)(nA,{children:(0,m.jsxs)(rA,{children:[(0,m.jsx)(iA,{children:"Thank You!"}),(0,m.jsx)(aA,{children:"We appreciate your time and effort."})]})});const sA=function(){const[e,n]=(0,t.useState)(!1),r={username:"ASUTOSH@PMA_00001",password:"ashutosh@11"};(0,t.useEffect)((()=>{localStorage.getItem("apiResponse")||i()}),[]);const i=async()=>{try{const e=await fetch("https://www.atomwalk.com/rest-auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();console.log("API Response:",t),localStorage.setItem("apiResponse",JSON.stringify(t))}catch(e){console.error("Error during login:",e)}};return(0,m.jsxs)("div",{className:"App",children:[(0,m.jsxs)(ku,{children:[(0,m.jsx)(Ro,{}),(0,m.jsxs)(go,{children:[(0,m.jsx)(mo,{path:"",element:(0,m.jsx)(vu,{})}),(0,m.jsx)(mo,{path:"/signin.html",element:(0,m.jsx)($u,{})}),(0,m.jsx)(mo,{path:"/forgotpassword.html",element:(0,m.jsx)(pp,{})}),(0,m.jsx)(mo,{path:"/card.html",element:(0,m.jsx)(ps,{})}),(0,m.jsx)(mo,{path:"/Product.html",element:(0,m.jsx)(Lf,{})}),(0,m.jsx)(mo,{path:"/contactUs.html",element:(0,m.jsx)(Em,{})}),(0,m.jsx)(mo,{path:"/aboutUs.html",element:(0,m.jsx)(Lh,{})}),(0,m.jsx)(mo,{path:"/pricing.html",element:(0,m.jsx)(cx,{})}),(0,m.jsx)(mo,{path:"/demo.html",element:(0,m.jsx)(mg,{})}),(0,m.jsx)(mo,{path:"/seals.html",element:(0,m.jsx)(kx,{})}),(0,m.jsx)(mo,{path:"/crm.html",element:(0,m.jsx)(Vw,{})}),(0,m.jsx)(mo,{path:"/lms.html",element:(0,m.jsx)(uk,{})}),(0,m.jsx)(mo,{path:"/Blog.html",element:(0,m.jsx)(vy,{})}),(0,m.jsx)(mo,{path:"/BlogDetails.html",element:(0,m.jsx)(Iy,{})}),(0,m.jsx)(mo,{path:"/hrm.html",element:(0,m.jsx)(mv,{})}),(0,m.jsx)(mo,{path:"/leave.html",element:(0,m.jsx)(sw,{})}),(0,m.jsx)(mo,{path:"/claim.html",element:(0,m.jsx)(sw,{})}),(0,m.jsx)(mo,{path:"/employeehr.html",element:(0,m.jsx)(sw,{})}),(0,m.jsx)(mo,{path:"/payroll.html",element:(0,m.jsx)(sw,{})}),(0,m.jsx)(mo,{path:"/appraisal.html",element:(0,m.jsx)(sw,{})}),(0,m.jsx)(mo,{path:"/attendance.html",element:(0,m.jsx)(sw,{})}),(0,m.jsx)(mo,{path:"/leadManagement.html",element:(0,m.jsx)(Iw,{})}),(0,m.jsx)(mo,{path:"/CustomerManagement.html",element:(0,m.jsx)(Iw,{})}),(0,m.jsx)(mo,{path:"/Channelpartner.html",element:(0,m.jsx)(Iw,{})}),(0,m.jsx)(mo,{path:"/aMCTracking.html",element:(0,m.jsx)(Iw,{})}),(0,m.jsx)(mo,{path:"/campaignManagement.html",element:(0,m.jsx)(Iw,{})}),(0,m.jsx)(mo,{path:"/userManagement.html",element:(0,m.jsx)(Zk,{})}),(0,m.jsx)(mo,{path:"/equipmentManagement.html",element:(0,m.jsx)(Zk,{})}),(0,m.jsx)(mo,{path:"/equipmentMaintenance.html",element:(0,m.jsx)(Zk,{})}),(0,m.jsx)(mo,{path:"/reportandDashboard.html",element:(0,m.jsx)(Zk,{})}),(0,m.jsx)(mo,{path:"/userroleManagement.html",element:(0,m.jsx)(Zk,{data:!0})}),(0,m.jsx)(mo,{path:"/labProcessemplate.html",element:(0,m.jsx)(Zk,{data:!0})}),(0,m.jsx)(mo,{path:"/labExperimentProject.html",element:(0,m.jsx)(Zk,{data:!0})}),(0,m.jsx)(mo,{path:"/pIwithReport.html",element:(0,m.jsx)(Zk,{data:!0})}),(0,m.jsx)(mo,{path:"/labmanagement.html",element:(0,m.jsx)(Bb,{})}),(0,m.jsx)(mo,{path:"/labequipmentmangement.html",element:(0,m.jsx)(Ok,{})}),(0,m.jsx)(mo,{path:"/sales.html",element:(0,m.jsx)(fS,{})}),(0,m.jsx)(mo,{path:"/saleslifecycle.html",element:(0,m.jsx)(BS,{})}),(0,m.jsx)(mo,{path:"/procurement.html",element:(0,m.jsx)(BS,{})}),(0,m.jsx)(mo,{path:"/compliance.html",element:(0,m.jsx)(BS,{})}),(0,m.jsx)(mo,{path:"/salesreport.html",element:(0,m.jsx)(BS,{})}),(0,m.jsx)(mo,{path:"/processandproject.html",element:(0,m.jsx)(ZS,{})}),(0,m.jsx)(mo,{path:"/process.html",element:(0,m.jsx)(bj,{})}),(0,m.jsx)(mo,{path:"/project.html",element:(0,m.jsx)(bj,{})}),(0,m.jsx)(mo,{path:"/activityreport.html",element:(0,m.jsx)(bj,{})}),(0,m.jsx)(mo,{path:"/inventory.html",element:(0,m.jsx)(Pj,{})}),(0,m.jsx)(mo,{path:"/inventoryop.html",element:(0,m.jsx)(_j,{})}),(0,m.jsx)(mo,{path:"/warehouse.html",element:(0,m.jsx)(_j,{})}),(0,m.jsx)(mo,{path:"/inventoryreport.html",element:(0,m.jsx)(_j,{})}),(0,m.jsx)(mo,{path:"/assessment.html",element:(0,m.jsx)($j,{})}),(0,m.jsx)(mo,{path:"/thankyou.html",element:(0,m.jsx)(oA,{})})]})]}),(0,m.jsx)(tg,{})]})},lA=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,6453)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:a,getTTFB:o}=t;n(e),r(e),i(e),a(e),o(e)}))};i.createRoot(document.getElementById("root")).render((0,m.jsx)(t.StrictMode,{children:(0,m.jsx)(sA,{})})),lA()})()})();
//# sourceMappingURL=main.a93f19f2.js.map