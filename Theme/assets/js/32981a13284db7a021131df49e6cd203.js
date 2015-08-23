/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});/*! Amaze UI v2.4.2 | by Amaze UI Team | (c) 2015 AllMobilize, Inc. | Licensed under MIT | 2015-07-06T10:25:45+0800 */ 
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.AMUI=t()}}(function(){return function t(e,i,n){function s(a,r){if(!i[a]){if(!e[a]){var l="function"==typeof require&&require;if(!r&&l)return l(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[a]={exports:{}};e[a][0].call(u.exports,function(t){var i=e[a][1][t];return s(i?i:t)},u,u.exports,t,e,i,n)}return i[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)s(n[a]);return s}({1:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2);t(30),t(3),t(4),t(5),t(6),t(7),t(8),t(9),t(10),t(11),t(12),t(13),t(14),t(15),t(16),t(17),t(18),t(19),t(20),t(21),t(22),t(23),t(24),t(25),t(26),t(27),t(28),t(29),t(31),t(32),t(33),t(34),t(35),t(36),t(37),t(38),t(39),t(40),t(41),t(42),t(43),t(44),t(45),t(46),t(47),t(48),t(49),t(50),t(51),t(52),e.exports=n.AMUI=s},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,2:2,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,3:3,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,4:4,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,5:5,50:50,51:51,52:52,6:6,7:7,8:8,9:9}],2:[function(t,e,i){"use strict";var n=window.jQuery;if("undefined"==typeof n)throw new Error("Amaze UI 2.x requires jQuery :-(\n\u7231\u4e0a\u4e00\u5339\u91ce\u9a6c\uff0c\u53ef\u4f60\u7684\u5bb6\u91cc\u6ca1\u6709\u8349\u539f\u2026");var s=n.AMUI||{},o=n(window),a=window.document,r=n("html");s.VERSION="2.4.2",s.support={},s.support.transition=function(){var t=function(){var t=a.body||a.documentElement,e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return e[i]}();return t&&{end:t}}(),s.support.animation=function(){var t=function(){var t=a.body||a.documentElement,e={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var i in e)if(void 0!==t.style[i])return e[i]}();return t&&{end:t}}(),s.support.touch="ontouchstart"in window&&navigator.userAgent.toLowerCase().match(/mobile|tablet/)||window.DocumentTouch&&document instanceof window.DocumentTouch||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0||!1,s.support.mutationobserver=window.MutationObserver||window.WebKitMutationObserver||null,s.support.formValidation="function"==typeof document.createElement("form").checkValidity,s.utils={},s.utils.debounce=function(t,e,i){var n;return function(){var s=this,o=arguments,a=function(){n=null,i||t.apply(s,o)},r=i&&!n;clearTimeout(n),n=setTimeout(a,e),r&&t.apply(s,o)}},s.utils.isInView=function(t,e){var i=n(t),s=!(!i.width()&&!i.height())&&"none"!==i.css("display");if(!s)return!1;var a=o.scrollLeft(),r=o.scrollTop(),l=i.offset(),c=l.left,u=l.top;return e=n.extend({topOffset:0,leftOffset:0},e),u+i.height()>=r&&u-e.topOffset<=r+o.height()&&c+i.width()>=a&&c-e.leftOffset<=a+o.width()},s.utils.parseOptions=s.utils.options=function(t){if(n.isPlainObject(t))return t;var e=t?t.indexOf("{"):-1,i={};if(-1!=e)try{i=new Function("","var json = "+t.substr(e)+"; return JSON.parse(JSON.stringify(json));")()}catch(s){}return i},s.utils.generateGUID=function(t){var e=t+"-"||"am-";do e+=Math.random().toString(36).substring(2,7);while(document.getElementById(e));return e},s.plugin=function(t,e,i){var o=n.fn[t];i=i||{},n.fn[t]=function(o){var a,r=Array.prototype.slice.call(arguments,0),l=r.slice(1),c=this.each(function(){var c=n(this),u="amui."+t,h=i.dataOptions||"data-am-"+t,d=c.data(u),p=n.extend({},s.utils.parseOptions(c.attr(h)),"object"==typeof o&&o);(d||"destroy"!==o)&&(d||c.data(u,d=new e(this,p)),i.methodCall?i.methodCall.call(c,r,d):(i.before&&i.before.call(c,r,d),"string"==typeof o&&(a="function"==typeof d[o]?d[o].apply(d,l):d[o]),i.after&&i.after.call(c,r,d)))});return void 0===a?c:a},n.fn[t].Constructor=e,n.fn[t].noConflict=function(){return n.fn[t]=o,console.log(this),this},s[t]=e},n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one(s.support.transition.end,function(){e=!0});var o=function(){e||n(i).trigger(s.support.transition.end),i.transitionEndTimmer=void 0};return this.transitionEndTimmer=setTimeout(o,t),this},n.fn.redraw=function(){return this.each(function(){this.offsetHeight})},n.fn.transitionEnd=function(t){function e(s){t.call(this,s),i&&n.off(i,e)}var i=s.support.transition.end,n=this;return t&&i&&n.on(i,e),this},n.fn.removeClassRegEx=function(){return this.each(function(t){var e=n(this).attr("class");if(!e||!t)return!1;var i=[];e=e.split(" ");for(var s=0,o=e.length;o>s;s++)e[s].match(t)||i.push(e[s]);n(this).attr("class",i.join(" "))})},n.fn.alterClass=function(t,e){var i=this;if(-1===t.indexOf("*"))return i.removeClass(t),e?i.addClass(e):i;var s=new RegExp("\\s"+t.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g");return i.each(function(t,e){for(var i=" "+e.className+" ";s.test(i);)i=i.replace(s," ");e.className=n.trim(i)}),e?i.addClass(e):i},s.utils.rAF=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),s.utils.cancelAF=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)}}(),s.utils.measureScrollbar=function(){if(document.body.clientWidth>=window.innerWidth)return 0;var t=n('<div style="width: 100px;height: 100px;overflow: scroll;position: absolute;top: -9999px;"></div>');n(document.body).append(t);var e=t[0].offsetWidth-t[0].clientWidth;return t.remove(),e},s.utils.imageLoader=function(t,e){function i(){e(t[0])}function n(){if(this.one("load",i),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?void(t[0].complete||4===t[0].readyState?i():n.call(t)):void i()},s.template=function(t,e){var i=s.template;return i.cache[t]||(i.cache[t]=function(){var e=t,n=/^[\w\-]+$/.test(t)?i.get(t):(e="template(string)",t),s=1,o=("try { "+(i.variable?"var "+i.variable+" = this.stash;":"with (this.stash) { ")+"this.ret += '"+n.replace(/<%/g,"").replace(/%>/g,"").replace(/'(?![^\x11\x13]+?\x13)/g,"\\x27").replace(/^\s*|\s*$/g,"").replace(/\n/g,function(){return"';\nthis.line = "+ ++s+"; this.ret += '\\n"}).replace(/\x11-(.+?)\x13/g,"' + ($1) + '").replace(/\x11=(.+?)\x13/g,"' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g,"'; $1; this.ret += '")+"'; "+(i.variable?"":"}")+"return this.ret;} catch (e) { throw 'TemplateError: ' + e + ' (on "+e+"' + ' line ' + this.line + ')'; } //@ sourceURL="+e+"\n").replace(/this\.ret \+= '';/g,""),a=new Function(o),r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#x22;","'":"&#x27;"},l=function(t){return(""+t).replace(/[&<>\'\"]/g,function(t){return r[t]})};return function(t){return a.call(i.context={escapeHTML:l,line:1,ret:"",stash:t})}}()),e?i.cache[t](e):i.cache[t]},s.template.cache={},s.template.get=function(t){if(t){var e=document.getElementById(t);return e&&e.innerHTML||""}},s.DOMWatchers=[],s.DOMReady=!1,s.ready=function(t){s.DOMWatchers.push(t),s.DOMReady&&t(document)},s.DOMObserve=function(t,e,i){var o=s.support.mutationobserver;o&&(e=n.isPlainObject(e)?e:{childList:!0,subtree:!0},i="function"==typeof i&&i||function(){},n(t).each(function(){var t=this,a=n(t);if(!a.data("am.observer"))try{var r=new o(s.utils.debounce(function(e,n){i.call(t,e,n),a.trigger("changed.dom.amui")},50));r.observe(t,e),a.data("am.observer",r)}catch(l){}}))},n.fn.DOMObserve=function(t,e){return this.each(function(){s.DOMObserve(this,t,e)})},s.support.touch&&r.addClass("am-touch"),n(document).on("changed.dom.amui",function(t){var e=t.target;n.each(s.DOMWatchers,function(t,i){i(e)})}),n(function(){var t=n("body");s.DOMReady=!0,n.each(s.DOMWatchers,function(t,e){e(document)}),s.DOMObserve("[data-am-observe]"),r.removeClass("no-js").addClass("js"),s.support.animation&&r.addClass("cssanimations"),window.navigator.standalone&&r.addClass("am-standalone"),n(".am-topbar-fixed-top").length&&t.addClass("am-with-topbar-fixed-top"),n(".am-topbar-fixed-bottom").length&&t.addClass("am-with-topbar-fixed-bottom");var e=n(".am-layout");e.find('[class*="md-block-grid"]').alterClass("md-block-grid-*"),e.find('[class*="lg-block-grid"]').alterClass("lg-block-grid"),n("[data-am-widget]").each(function(){var t=n(this);0===t.parents(".am-layout").length&&t.addClass("am-no-layout")})}),e.exports=s},{}],3:[function(t,e,i){"use strict";function n(){window.removeEventListener("load",n,!1),c=!0}function s(t){return u=u||new s.Class(t)}function o(t,e){for(var i in e)t[i]=e[i];return t}function a(){"#ath"==document.location.hash&&history.replaceState("",window.document.title,document.location.href.split("#")[0]),h.test(document.location.href)&&history.replaceState("",window.document.title,document.location.href.replace(h,"$1")),d.test(document.location.search)&&history.replaceState("",window.document.title,document.location.href.replace(d,"$2"))}var r=t(2),l="addEventListener"in window,c=!1;"complete"===document.readyState?c=!0:l&&window.addEventListener("load",n,!1);var u,h=/\/ath(\/)?$/,d=/([\?&]ath=[^&]*$|&ath=[^&]*(&))/;s.intl={en_us:{ios:"To add this web app to the home screen: tap %icon and then <strong>Add to Home Screen</strong>.",android:'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'},zh_cn:{ios:"\u5982\u8981\u628a\u5e94\u7528\u7a0b\u5f0f\u52a0\u81f3\u4e3b\u5c4f\u5e55,\u8bf7\u70b9\u51fb%icon, \u7136\u540e<strong>\u52a0\u81f3\u4e3b\u5c4f\u5e55</strong>",android:'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'},zh_tw:{ios:"\u5982\u8981\u628a\u61c9\u7528\u7a0b\u5f0f\u52a0\u81f3\u4e3b\u5c4f\u5e55, \u8acb\u9ede\u64ca%icon, \u7136\u5f8c<strong>\u52a0\u81f3\u4e3b\u5c4f\u5e55</strong>.",android:'To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon <span class="ath-action-icon">icon</span>.</small>'}};for(var p in s.intl)s.intl[p.substr(0,2)]=s.intl[p];s.defaults={appID:"org.cubiq.addtohome",fontSize:15,debug:!1,logging:!1,modal:!1,mandatory:!1,autostart:!0,skipFirstVisit:!1,startDelay:1,lifespan:15,displayPace:1440,maxDisplayCount:0,icon:!0,message:"",validLocation:[],onInit:null,onShow:null,onRemove:null,onAdd:null,onPrivate:null,privateModeOverride:!1,detectHomescreen:!1};var m=window.navigator.userAgent,f=window.navigator;o(s,{hasToken:"#ath"==document.location.hash||h.test(document.location.href)||d.test(document.location.search),isRetina:window.devicePixelRatio&&window.devicePixelRatio>1,isIDevice:/iphone|ipod|ipad/i.test(m),isMobileChrome:m.indexOf("Android")>-1&&/Chrome\/[.0-9]*/.test(m)&&-1==m.indexOf("Version"),isMobileIE:m.indexOf("Windows Phone")>-1,language:f.language&&f.language.toLowerCase().replace("-","_")||""}),s.language=s.language&&s.language in s.intl?s.language:"en_us",s.isMobileSafari=s.isIDevice&&m.indexOf("Safari")>-1&&m.indexOf("CriOS")<0,s.OS=s.isIDevice?"ios":s.isMobileChrome?"android":s.isMobileIE?"windows":"unsupported",s.OSVersion=m.match(/(OS|Android) (\d+[_\.]\d+)/),s.OSVersion=s.OSVersion&&s.OSVersion[2]?+s.OSVersion[2].replace("_","."):0,s.isStandalone="standalone"in window.navigator&&window.navigator.standalone,s.isTablet=s.isMobileSafari&&m.indexOf("iPad")>-1||s.isMobileChrome&&m.indexOf("Mobile")<0,s.isCompatible=s.isMobileSafari&&s.OSVersion>=6||s.isMobileChrome;var v={lastDisplayTime:0,returningVisitor:!1,displayCount:0,optedout:!1,added:!1};s.removeSession=function(t){try{if(!localStorage)throw new Error("localStorage is not defined");localStorage.removeItem(t||s.defaults.appID)}catch(e){}},s.doLog=function(t){this.options.logging&&console.log(t)},s.Class=function(t){if(this.doLog=s.doLog,this.options=o({},s.defaults),o(this.options,t),t.debug&&"undefined"==typeof t.logging&&(this.options.logging=!0),l){if(this.options.mandatory=this.options.mandatory&&("standalone"in window.navigator||this.options.debug),this.options.modal=this.options.modal||this.options.mandatory,this.options.mandatory&&(this.options.startDelay=-.5),this.options.detectHomescreen=this.options.detectHomescreen===!0?"hash":this.options.detectHomescreen,this.options.debug&&(s.isCompatible=!0,s.OS="string"==typeof this.options.debug?this.options.debug:"unsupported"==s.OS?"android":s.OS,s.OSVersion="ios"==s.OS?"8":"4"),this.container=document.documentElement,this.session=this.getItem(this.options.appID),this.session=this.session?JSON.parse(this.session):void 0,!s.hasToken||s.isCompatible&&this.session||(s.hasToken=!1,a()),!s.isCompatible)return void this.doLog("Add to homescreen: not displaying callout because device not supported");this.session=this.session||v;try{if(!localStorage)throw new Error("localStorage is not defined");localStorage.setItem(this.options.appID,JSON.stringify(this.session)),s.hasLocalStorage=!0}catch(e){s.hasLocalStorage=!1,this.options.onPrivate&&this.options.onPrivate.call(this)}for(var i=!this.options.validLocation.length,n=this.options.validLocation.length;n--;)if(this.options.validLocation[n].test(document.location.href)){i=!0;break}if(this.getItem("addToHome")&&this.optOut(),this.session.optedout)return void this.doLog("Add to homescreen: not displaying callout because user opted out");if(this.session.added)return void this.doLog("Add to homescreen: not displaying callout because already added to the homescreen");if(!i)return void this.doLog("Add to homescreen: not displaying callout because not a valid location");if(s.isStandalone)return this.session.added||(this.session.added=!0,this.updateSession(),this.options.onAdd&&s.hasLocalStorage&&this.options.onAdd.call(this)),void this.doLog("Add to homescreen: not displaying callout because in standalone mode");if(this.options.detectHomescreen){if(s.hasToken)return a(),this.session.added||(this.session.added=!0,this.updateSession(),this.options.onAdd&&s.hasLocalStorage&&this.options.onAdd.call(this)),void this.doLog("Add to homescreen: not displaying callout because URL has token, so we are likely coming from homescreen");"hash"==this.options.detectHomescreen?history.replaceState("",window.document.title,document.location.href+"#ath"):"smartURL"==this.options.detectHomescreen?history.replaceState("",window.document.title,document.location.href.replace(/(\/)?$/,"/ath$1")):history.replaceState("",window.document.title,document.location.href+(document.location.search?"&":"?")+"ath=")}if(!this.session.returningVisitor&&(this.session.returningVisitor=!0,this.updateSession(),this.options.skipFirstVisit))return void this.doLog("Add to homescreen: not displaying callout because skipping first visit");if(!this.options.privateModeOverride&&!s.hasLocalStorage)return void this.doLog("Add to homescreen: not displaying callout because browser is in private mode");this.ready=!0,this.options.onInit&&this.options.onInit.call(this),this.options.autostart&&(this.doLog("Add to homescreen: autostart displaying callout"),this.show())}},s.Class.prototype={events:{load:"_delayedShow",error:"_delayedShow",orientationchange:"resize",resize:"resize",scroll:"resize",click:"remove",touchmove:"_preventDefault",transitionend:"_removeElements",webkitTransitionEnd:"_removeElements",MSTransitionEnd:"_removeElements"},handleEvent:function(t){var e=this.events[t.type];e&&this[e](t)},show:function(t){if(this.options.autostart&&!c)return void setTimeout(this.show.bind(this),50);if(this.shown)return void this.doLog("Add to homescreen: not displaying callout because already shown on screen");var e=Date.now(),i=this.session.lastDisplayTime;if(t!==!0){if(!this.ready)return void this.doLog("Add to homescreen: not displaying callout because not ready");if(e-i<6e4*this.options.displayPace)return void this.doLog("Add to homescreen: not displaying callout because displayed recently");if(this.options.maxDisplayCount&&this.session.displayCount>=this.options.maxDisplayCount)return void this.doLog("Add to homescreen: not displaying callout because displayed too many times already")}this.shown=!0,this.session.lastDisplayTime=e,this.session.displayCount++,this.updateSession(),this.applicationIcon||(this.applicationIcon=document.querySelector("ios"==s.OS?'head link[rel^=apple-touch-icon][sizes="152x152"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon][sizes="120x120"],head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon]':'head link[rel^="shortcut icon"][sizes="196x196"],head link[rel^=apple-touch-icon]'));var n="";"object"==typeof this.options.message&&s.language in this.options.message?n=this.options.message[s.language][s.OS]:"object"==typeof this.options.message&&s.OS in this.options.message?n=this.options.message[s.OS]:this.options.message in s.intl?n=s.intl[this.options.message][s.OS]:""!==this.options.message?n=this.options.message:s.OS in s.intl[s.language]&&(n=s.intl[s.language][s.OS]),n="<p>"+n.replace("%icon",'<span class="ath-action-icon">icon</span>')+"</p>",this.viewport=document.createElement("div"),this.viewport.className="ath-viewport",this.options.modal&&(this.viewport.className+=" ath-modal"),this.options.mandatory&&(this.viewport.className+=" ath-mandatory"),this.viewport.style.position="absolute",this.element=document.createElement("div"),this.element.className="ath-container ath-"+s.OS+" ath-"+s.OS+(s.OSVersion+"").substr(0,1)+" ath-"+(s.isTablet?"tablet":"phone"),this.element.style.cssText="-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0s;-webkit-transition-timing-function:ease-out;transition-property:transform,opacity;transition-duration:0s;transition-timing-function:ease-out;",this.element.style.webkitTransform="translate3d(0,-"+window.innerHeight+"px,0)",this.element.style.transform="translate3d(0,-"+window.innerHeight+"px,0)",this.options.icon&&this.applicationIcon&&(this.element.className+=" ath-icon",this.img=document.createElement("img"),this.img.className="ath-application-icon",this.img.addEventListener("load",this,!1),this.img.addEventListener("error",this,!1),this.img.src=this.applicationIcon.href,this.element.appendChild(this.img)),this.element.innerHTML+=n,this.viewport.style.left="-99999em",this.viewport.appendChild(this.element),this.container.appendChild(this.viewport),this.img?this.doLog("Add to homescreen: not displaying callout because waiting for img to load"):this._delayedShow()},_delayedShow:function(t){setTimeout(this._show.bind(this),1e3*this.options.startDelay+500)},_show:function(){var t=this;this.updateViewport(),window.addEventListener("resize",this,!1),window.addEventListener("scroll",this,!1),window.addEventListener("orientationchange",this,!1),this.options.modal&&document.addEventListener("touchmove",this,!0),this.options.mandatory||setTimeout(function(){t.element.addEventListener("click",t,!0)},1e3),setTimeout(function(){t.element.style.webkitTransitionDuration="1.2s",t.element.style.transitionDuration="1.2s",t.element.style.webkitTransform="translate3d(0,0,0)",t.element.style.transform="translate3d(0,0,0)"},0),this.options.lifespan&&(this.removeTimer=setTimeout(this.remove.bind(this),1e3*this.options.lifespan)),this.options.onShow&&this.options.onShow.call(this)},remove:function(){clearTimeout(this.removeTimer),this.img&&(this.img.removeEventListener("load",this,!1),this.img.removeEventListener("error",this,!1)),window.removeEventListener("resize",this,!1),window.removeEventListener("scroll",this,!1),window.removeEventListener("orientationchange",this,!1),document.removeEventListener("touchmove",this,!0),this.element.removeEventListener("click",this,!0),this.element.addEventListener("transitionend",this,!1),this.element.addEventListener("webkitTransitionEnd",this,!1),this.element.addEventListener("MSTransitionEnd",this,!1),this.element.style.webkitTransitionDuration="0.3s",this.element.style.opacity="0"},_removeElements:function(){this.element.removeEventListener("transitionend",this,!1),this.element.removeEventListener("webkitTransitionEnd",this,!1),this.element.removeEventListener("MSTransitionEnd",this,!1),this.container.removeChild(this.viewport),this.shown=!1,this.options.onRemove&&this.options.onRemove.call(this)},updateViewport:function(){if(this.shown){this.viewport.style.width=window.innerWidth+"px",this.viewport.style.height=window.innerHeight+"px",this.viewport.style.left=window.scrollX+"px",this.viewport.style.top=window.scrollY+"px";var t=document.documentElement.clientWidth;this.orientation=t>document.documentElement.clientHeight?"landscape":"portrait";var e="ios"==s.OS?"portrait"==this.orientation?screen.width:screen.height:screen.width;this.scale=screen.width>t?1:e/window.innerWidth,this.element.style.fontSize=this.options.fontSize/this.scale+"px"}},resize:function(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(this.updateViewport.bind(this),100)},updateSession:function(){s.hasLocalStorage!==!1&&localStorage&&localStorage.setItem(this.options.appID,JSON.stringify(this.session))},clearSession:function(){this.session=v,this.updateSession()},getItem:function(t){try{if(!localStorage)throw new Error("localStorage is not defined");return localStorage.getItem(t)}catch(e){s.hasLocalStorage=!1}},optOut:function(){this.session.optedout=!0,this.updateSession()},optIn:function(){this.session.optedout=!1,this.updateSession()},clearDisplayCount:function(){this.session.displayCount=0,this.updateSession()},_preventDefault:function(t){t.preventDefault(),t.stopPropagation()}},s.VERSION="3.2.2",e.exports=r.addToHomescreen=s},{2:2}],4:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=function(t,e){var i=this;this.options=n.extend({},o.DEFAULTS,e),this.$element=n(t),this.$element.addClass("am-fade am-in").on("click.alert.amui",".am-close",function(){i.close()})};o.DEFAULTS={removeElement:!0},o.prototype.close=function(){function t(){e.trigger("closed.alert.amui").remove()}var e=this.$element;e.trigger("close.alert.amui").removeClass("am-in"),s.support.transition&&e.hasClass("am-fade")?e.one(s.support.transition.end,t).emulateTransitionEnd(200):t()},s.plugin("alert",o),n(document).on("click.alert.amui.data-api","[data-am-alert]",function(t){var e=n(t.target);e.is(".am-close")&&n(this).alert("close")}),e.exports=o},{2:2}],5:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=function(t,e){this.$element=n(t),this.options=n.extend({},o.DEFAULTS,e),this.isLoading=!1,this.hasSpinner=!1};o.DEFAULTS={loadingText:"loading...",disabledClassName:"am-disabled",spinner:void 0},o.prototype.setState=function(t,e){var i=this.$element,o="disabled",a=i.data(),r=this.options,l=i.is("input")?"val":"html",c="am-btn-"+t+" "+r.disabledClassName;t+="Text",r.resetText||(r.resetText=i[l]()),s.support.animation&&r.spinner&&"html"===l&&!this.hasSpinner&&(r.loadingText='<span class="am-icon-'+r.spinner+' am-icon-spin"></span>'+r.loadingText,this.hasSpinner=!0),e=e||(void 0===a[t]?r[t]:a[t]),i[l](e),setTimeout(n.proxy(function(){"loadingText"===t?(i.addClass(c).attr(o,o),this.isLoading=!0):this.isLoading&&(i.removeClass(c).removeAttr(o),this.isLoading=!1)},this),0)},o.prototype.toggle=function(){var t=!0,e=this.$element,i=this.$element.parent('[class*="am-btn-group"]');if(i.length){var n=this.$element.find("input");"radio"==n.prop("type")&&(n.prop("checked")&&e.hasClass("am-active")?t=!1:i.find(".am-active").removeClass("am-active")),t&&n.prop("checked",!e.hasClass("am-active")).trigger("change")}t&&(e.toggleClass("am-active"),e.hasClass("am-active")||e.blur())},s.plugin("button",o,{dataOptions:"data-am-loading",methodCall:function(t,e){"toggle"===t[0]?e.toggle():"string"==typeof t[0]&&e.setState.apply(e,t)}}),n(document).on("click.button.amui.data-api","[data-am-button]",function(t){t.preventDefault();var e=n(t.target);e.hasClass("am-btn")||(e=e.closest(".am-btn")),e.button("toggle")}),s.ready(function(t){n("[data-am-loading]",t).button()}),e.exports=s.button=o},{2:2}],6:[function(t,e,i){"use strict";function n(t){return this.each(function(){var e=s(this),i=e.data("amui.collapse"),n=s.extend({},a.DEFAULTS,o.utils.options(e.attr("data-am-collapse")),"object"==typeof t&&t);!i&&n.toggle&&"open"===t&&(t=!t),i||e.data("amui.collapse",i=new a(this,n)),"string"==typeof t&&i[t]()})}var s=window.jQuery,o=t(2),a=function(t,e){this.$element=s(t),this.options=s.extend({},a.DEFAULTS,e),this.transitioning=null,this.options.parent&&(this.$parent=s(this.options.parent)),this.options.toggle&&this.toggle()};a.DEFAULTS={toggle:!0},a.prototype.open=function(){if(!this.transitioning&&!this.$element.hasClass("am-in")){var t=s.Event("open.collapse.amui");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.$parent&&this.$parent.find("> .am-panel > .am-in");if(e&&e.length){var i=e.data("amui.collapse");if(i&&i.transitioning)return;n.call(e,"close"),i||e.data("amui.collapse",null)}this.$element.removeClass("am-collapse").addClass("am-collapsing").height(0),this.transitioning=1;var a=function(){this.$element.removeClass("am-collapsing").addClass("am-collapse am-in").height("").trigger("opened.collapse.amui"),this.transitioning=0};if(!o.support.transition)return a.call(this);var r=this.$element[0].scrollHeight;this.$element.one(o.support.transition.end,s.proxy(a,this)).emulateTransitionEnd(300).css({height:r})}}},a.prototype.close=function(){if(!this.transitioning&&this.$element.hasClass("am-in")){var t=s.Event("close.collapse.amui");if(this.$element.trigger(t),!t.isDefaultPrevented()){this.$element.height(this.$element.height()).redraw(),this.$element.addClass("am-collapsing").removeClass("am-collapse am-in"),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.trigger("closed.collapse.amui").removeClass("am-collapsing").addClass("am-collapse")};return o.support.transition?void this.$element.height(0).one(o.support.transition.end,s.proxy(e,this)).emulateTransitionEnd(300):e.call(this)}}},a.prototype.toggle=function(){this[this.$element.hasClass("am-in")?"close":"open"]()},s.fn.collapse=n,s(document).on("click.collapse.amui.data-api","[data-am-collapse]",function(t){var e,i=s(this),a=o.utils.options(i.attr("data-am-collapse")),r=a.target||t.preventDefault()||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""),l=s(r),c=l.data("amui.collapse"),u=c?"toggle":a,h=a.parent,d=h&&s(h);c&&c.transitioning||(d&&d.find("[data-am-collapse]").not(i).addClass("am-collapsed"),i[l.hasClass("am-in")?"addClass":"removeClass"]("am-collapsed")),n.call(l,u)}),e.exports=o.collapse=a},{2:2}],7:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=n(document),a=function(t,e){if(this.$element=n(t),this.options=n.extend({},a.DEFAULTS,e),this.format=r.parseFormat(this.options.format),this.$element.data("date",this.options.date),this.language=this.getLocale(this.options.locale),this.theme=this.options.theme,this.$picker=n(r.template).appendTo("body").on({click:n.proxy(this.click,this)}),this.isInput=this.$element.is("input"),this.component=this.$element.is(".am-datepicker-date")?this.$element.find(".am-datepicker-add-on"):!1,this.isInput?this.$element.on({"click.datepicker.amui":n.proxy(this.open,this),"keyup.datepicker.amui":n.proxy(this.update,this)}):this.component?this.component.on("click.datepicker.amui",n.proxy(this.open,this)):this.$element.on("click.datepicker.amui",n.proxy(this.open,this)),this.minViewMode=this.options.minViewMode,"string"==typeof this.minViewMode)switch(this.minViewMode){case"months":this.minViewMode=1;break;case"years":this.minViewMode=2;break;default:this.minViewMode=0}if(this.viewMode=this.options.viewMode,"string"==typeof this.viewMode)switch(this.viewMode){case"months":this.viewMode=1;break;case"years":this.viewMode=2;break;default:this.viewMode=0}this.startViewMode=this.viewMode,this.weekStart=(this.options.weekStart||a.locales[this.language].weekStart||0)%7,this.weekEnd=(this.weekStart+6)%7,this.onRender=this.options.onRender,this.setTheme(),this.fillDow(),this.fillMonths(),this.update(),this.showMode()};a.DEFAULTS={locale:"zh_CN",format:"yyyy-mm-dd",weekStart:void 0,viewMode:0,minViewMode:0,date:"",theme:"",autoClose:1,onRender:function(t){return""}},a.prototype.open=function(t){this.$picker.show(),this.height=this.component?this.component.outerHeight():this.$element.outerHeight(),this.place(),n(window).on("resize.datepicker.amui",n.proxy(this.place,this)),t&&(t.stopPropagation(),t.preventDefault());var e=this;o.on("mousedown.datapicker.amui touchstart.datepicker.amui",function(t){0===n(t.target).closest(".am-datepicker").length&&e.close()}),this.$element.trigger({type:"open.datepicker.amui",date:this.date})},a.prototype.close=function(){this.$picker.hide(),n(window).off("resize.datepicker.amui",this.place),this.viewMode=this.startViewMode,this.showMode(),this.isInput||n(document).off("mousedown.datapicker.amui touchstart.datepicker.amui",this.close),this.$element.trigger({type:"close.datepicker.amui",date:this.date})},a.prototype.set=function(){var t=r.formatDate(this.date,this.format);this.isInput?this.$element.prop("value",t):(this.component&&this.$element.find("input").prop("value",t),this.$element.data("date",t))},a.prototype.setValue=function(t){this.date="string"==typeof t?r.parseDate(t,this.format):new Date(t),this.set(),this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0),this.fill()},a.prototype.place=function(){var t=this.component?this.component.offset():this.$element.offset(),e=this.component?this.component.width():this.$element.width(),i=t.top+this.height,n=t.left,s=o.width()-t.left-e,a=this.isOutView();if(this.$picker.removeClass("am-datepicker-right"),this.$picker.removeClass("am-datepicker-up"),o.width()>640){if(a.outRight)return this.$picker.addClass("am-datepicker-right"),void this.$picker.css({top:i,left:"auto",right:s});a.outBottom&&(this.$picker.addClass("am-datepicker-up"),i=t.top-this.$picker.outerHeight(!0))}else n=0;this.$picker.css({top:i,left:n})},a.prototype.update=function(t){this.date=r.parseDate("string"==typeof t?t:this.isInput?this.$element.prop("value"):this.$element.data("date"),this.format),this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0),this.fill()},a.prototype.fillDow=function(){for(var t=this.weekStart,e="<tr>";t<this.weekStart+7;)e+='<th class="am-datepicker-dow">'+a.locales[this.language].daysMin[t++%7]+"</th>";e+="</tr>",this.$picker.find(".am-datepicker-days thead").append(e)},a.prototype.fillMonths=function(){for(var t="",e=0;12>e;)t+='<span class="am-datepicker-month">'+a.locales[this.language].monthsShort[e++]+"</span>";this.$picker.find(".am-datepicker-months td").append(t)},a.prototype.fill=function(){var t=new Date(this.viewDate),e=t.getFullYear(),i=t.getMonth(),n=this.date.valueOf(),s=new Date(e,i-1,28,0,0,0,0),o=r.getDaysInMonth(s.getFullYear(),s.getMonth()),l=this.$picker.find(".am-datepicker-days .am-datepicker-select");l.text("zh_CN"===this.language?e+a.locales[this.language].year[0]+" "+a.locales[this.language].months[i]:a.locales[this.language].months[i]+" "+e),
s.setDate(o),s.setDate(o-(s.getDay()-this.weekStart+7)%7);var c=new Date(s);c.setDate(c.getDate()+42),c=c.valueOf();for(var u,h,d,p=[];s.valueOf()<c;)s.getDay()===this.weekStart&&p.push("<tr>"),u=this.onRender(s),h=s.getFullYear(),d=s.getMonth(),i>d&&h===e||e>h?u+=" am-datepicker-old":(d>i&&h===e||h>e)&&(u+=" am-datepicker-new"),s.valueOf()===n&&(u+=" am-active"),p.push('<td class="am-datepicker-day '+u+'">'+s.getDate()+"</td>"),s.getDay()===this.weekEnd&&p.push("</tr>"),s.setDate(s.getDate()+1);this.$picker.find(".am-datepicker-days tbody").empty().append(p.join(""));var m=this.date.getFullYear(),f=this.$picker.find(".am-datepicker-months").find(".am-datepicker-select").text(e);f=f.end().find("span").removeClass("am-active").removeClass("am-disabled");for(var v=0;12>v;)this.onRender(t.setFullYear(e,v))&&f.eq(v).addClass("am-disabled"),v++;m===e&&f.eq(this.date.getMonth()).removeClass("am-disabled").addClass("am-active"),p="",e=10*parseInt(e/10,10);var g,w=this.$picker.find(".am-datepicker-years").find(".am-datepicker-select").text(e+"-"+(e+9)).end().find("td");e-=1;for(var y=-1;11>y;y++)g=this.onRender(t.setFullYear(e)),p+='<span class="'+g+(-1===y||10===y?" am-datepicker-old":"")+(m===e?" am-active":"")+'">'+e+"</span>",e+=1;w.html(p)},a.prototype.click=function(t){t.stopPropagation(),t.preventDefault();var e,i,s=this.$picker.find(".am-datepicker-days").find(".am-active"),o=this.$picker.find(".am-datepicker-months"),a=o.find(".am-active").index(),l=n(t.target).closest("span, td, th");if(1===l.length)switch(l[0].nodeName.toLowerCase()){case"th":switch(l[0].className){case"am-datepicker-switch":this.showMode(1);break;case"am-datepicker-prev":case"am-datepicker-next":this.viewDate["set"+r.modes[this.viewMode].navFnc].call(this.viewDate,this.viewDate["get"+r.modes[this.viewMode].navFnc].call(this.viewDate)+r.modes[this.viewMode].navStep*("am-datepicker-prev"===l[0].className?-1:1)),this.fill(),this.set()}break;case"span":if(l.is(".am-disabled"))return;l.is(".am-datepicker-month")?(e=l.parent().find("span").index(l),l.is(".am-active")?this.viewDate.setMonth(e,s.text()):this.viewDate.setMonth(e)):(i=parseInt(l.text(),10)||0,l.is(".am-active")?this.viewDate.setFullYear(i,a,s.text()):this.viewDate.setFullYear(i)),0!==this.viewMode&&(this.date=new Date(this.viewDate),this.$element.trigger({type:"changeDate.datepicker.amui",date:this.date,viewMode:r.modes[this.viewMode].clsName})),this.showMode(-1),this.fill(),this.set();break;case"td":if(l.is(".am-datepicker-day")&&!l.is(".am-disabled")){var c=parseInt(l.text(),10)||1;e=this.viewDate.getMonth(),l.is(".am-datepicker-old")?e-=1:l.is(".am-datepicker-new")&&(e+=1),i=this.viewDate.getFullYear(),this.date=new Date(i,e,c,0,0,0,0),this.viewDate=new Date(i,e,Math.min(28,c),0,0,0,0),this.fill(),this.set(),this.$element.trigger({type:"changeDate.datepicker.amui",date:this.date,viewMode:r.modes[this.viewMode].clsName}),this.options.autoClose&&this.close()}}},a.prototype.mousedown=function(t){t.stopPropagation(),t.preventDefault()},a.prototype.showMode=function(t){t&&(this.viewMode=Math.max(this.minViewMode,Math.min(2,this.viewMode+t))),this.$picker.find(">div").hide().filter(".am-datepicker-"+r.modes[this.viewMode].clsName).show()},a.prototype.isOutView=function(){var t=this.component?this.component.offset():this.$element.offset(),e={outRight:!1,outBottom:!1},i=this.$picker,n=t.left+i.outerWidth(!0),s=t.top+i.outerHeight(!0)+this.$element.innerHeight();return n>o.width()&&(e.outRight=!0),s>o.height()&&(e.outBottom=!0),e},a.prototype.getLocale=function(t){return t||(t=navigator.language&&navigator.language.split("-"),t[1]=t[1].toUpperCase(),t=t.join("_")),a.locales[t]||(t="en_US"),t},a.prototype.setTheme=function(){this.theme&&this.$picker.addClass("am-datepicker-"+this.theme)},a.locales={en_US:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekStart:0},zh_CN:{days:["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"],daysShort:["\u5468\u65e5","\u5468\u4e00","\u5468\u4e8c","\u5468\u4e09","\u5468\u56db","\u5468\u4e94","\u5468\u516d"],daysMin:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],months:["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"],monthsShort:["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"],weekStart:1,year:["\u5e74"]}};var r={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(t){return t%4===0&&t%100!==0||t%400===0},getDaysInMonth:function(t,e){return[31,r.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},parseFormat:function(t){var e=t.match(/[.\/\-\s].*?/),i=t.split(/\W+/);if(!e||!i||0===i.length)throw new Error("Invalid date format.");return{separator:e,parts:i}},parseDate:function(t,e){var i,n=t.split(e.separator);if(t=new Date,t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),n.length===e.parts.length){for(var s=t.getFullYear(),o=t.getDate(),a=t.getMonth(),r=0,l=e.parts.length;l>r;r++)switch(i=parseInt(n[r],10)||1,e.parts[r]){case"dd":case"d":o=i,t.setDate(i);break;case"mm":case"m":a=i-1,t.setMonth(i-1);break;case"yy":s=2e3+i,t.setFullYear(2e3+i);break;case"yyyy":s=i,t.setFullYear(i)}t=new Date(s,a,o,0,0,0)}return t},formatDate:function(t,e){var i={d:t.getDate(),m:t.getMonth()+1,yy:t.getFullYear().toString().substring(2),yyyy:t.getFullYear()},n=[];i.dd=(i.d<10?"0":"")+i.d,i.mm=(i.m<10?"0":"")+i.m;for(var s=0,o=e.parts.length;o>s;s++)n.push(i[e.parts[s]]);return n.join(e.separator)},headTemplate:'<thead><tr class="am-datepicker-header"><th class="am-datepicker-prev"><i class="am-datepicker-prev-icon"></i></th><th colspan="5" class="am-datepicker-switch"><div class="am-datepicker-select"></div></th><th class="am-datepicker-next"><i class="am-datepicker-next-icon"></i></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>'};r.template='<div class="am-datepicker am-datepicker-dropdown"><div class="am-datepicker-caret"></div><div class="am-datepicker-days"><table class="am-datepicker-table">'+r.headTemplate+'<tbody></tbody></table></div><div class="am-datepicker-months"><table class="am-datepicker-table">'+r.headTemplate+r.contTemplate+'</table></div><div class="am-datepicker-years"><table class="am-datepicker-table">'+r.headTemplate+r.contTemplate+"</table></div></div>",s.plugin("datepicker",a),s.ready(function(t){n("[data-am-datepicker]").datepicker()}),e.exports=s.datepicker=a},{2:2}],8:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=n(document),a=s.support.transition,r=function(){this.id=s.utils.generateGUID("am-dimmer"),this.$element=n(r.DEFAULTS.tpl,{id:this.id}),this.inited=!1,this.scrollbarWidth=0,this.$used=n([])};r.DEFAULTS={tpl:'<div class="am-dimmer" data-am-dimmer></div>'},r.prototype.init=function(){return this.inited||(n(document.body).append(this.$element),this.inited=!0,o.trigger("init.dimmer.amui"),this.$element.on("touchmove.dimmer.amui",function(t){t.preventDefault()})),this},r.prototype.open=function(t){this.inited||this.init();var e=this.$element;return t&&(this.$used=this.$used.add(n(t))),this.checkScrollbar().setScrollbar(),e.show().trigger("open.dimmer.amui"),a&&e.off(a.end),setTimeout(function(){e.addClass("am-active")},0),this},r.prototype.close=function(t,e){function i(){s.hide(),this.resetScrollbar()}if(this.$used=this.$used.not(n(t)),!e&&this.$used.length)return this;var s=this.$element;return s.removeClass("am-active").trigger("close.dimmer.amui"),i.call(this),this},r.prototype.checkScrollbar=function(){return this.scrollbarWidth=s.utils.measureScrollbar(),this},r.prototype.setScrollbar=function(){var t=n(document.body),e=parseInt(t.css("padding-right")||0,10);return this.scrollbarWidth&&t.css("padding-right",e+this.scrollbarWidth),t.addClass("am-dimmer-active"),this},r.prototype.resetScrollbar=function(){return n(document.body).css("padding-right","").removeClass("am-dimmer-active"),this},e.exports=s.dimmer=new r},{2:2}],9:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=s.support.animation,a=function(t,e){this.options=n.extend({},a.DEFAULTS,e),e=this.options,this.$element=n(t),this.$toggle=this.$element.find(e.selector.toggle),this.$dropdown=this.$element.find(e.selector.dropdown),this.$boundary=e.boundary===window?n(window):this.$element.closest(e.boundary),this.$justify=e.justify&&n(e.justify).length&&n(e.justify)||void 0,!this.$boundary.length&&(this.$boundary=n(window)),this.active=this.$element.hasClass("am-active")?!0:!1,this.animating=null,this.events()};a.DEFAULTS={animation:"am-animation-slide-top-fixed",boundary:window,justify:void 0,selector:{dropdown:".am-dropdown-content",toggle:".am-dropdown-toggle"},trigger:"click"},a.prototype.toggle=function(){this.clear(),this.animating||this[this.active?"close":"open"]()},a.prototype.open=function(t){var e=this.$toggle,i=this.$element,s=this.$dropdown;if(!e.is(".am-disabled, :disabled")&&!this.active){i.trigger("open.dropdown.amui").addClass("am-active"),e.trigger("focus"),this.checkDimensions();var a=n.proxy(function(){i.trigger("opened.dropdown.amui"),this.active=!0,this.animating=0},this);o?(this.animating=1,s.addClass(this.options.animation).on(o.end+".open.dropdown.amui",n.proxy(function(){a(),s.removeClass(this.options.animation)},this))):a()}},a.prototype.close=function(){if(this.active){var t="am-dropdown-animation",e=this.$element,i=this.$dropdown;e.trigger("close.dropdown.amui");var s=n.proxy(function(){e.removeClass("am-active").trigger("closed.dropdown.amui"),this.active=!1,this.animating=0,this.$toggle.blur()},this);o?(i.removeClass(this.options.animation),i.addClass(t),this.animating=1,i.one(o.end+".close.dropdown.amui",function(){i.removeClass(t),s()})):s()}},a.prototype.checkDimensions=function(){if(this.$dropdown.length){var t=this.$dropdown,e=t.offset(),i=t.outerWidth(),s=this.$boundary.width(),o=n.isWindow(this.boundary)&&this.$boundary.offset()?this.$boundary.offset().left:0;this.$justify&&t.css({"min-width":this.$justify.css("width")}),i+(e.left-o)>s&&this.$element.addClass("am-dropdown-flip")}},a.prototype.clear=function(){n("[data-am-dropdown]").not(this.$element).each(function(){var t=n(this).data("amui.dropdown");t&&t.close()})},a.prototype.events=function(){var t="dropdown.amui",e=this.$toggle;e.on("click."+t,n.proxy(function(t){t.preventDefault(),this.toggle()},this)),n(document).on("keydown.dropdown.amui",n.proxy(function(t){27===t.keyCode&&this.active&&this.close()},this)).on("click.outer.dropdown.amui",n.proxy(function(t){!this.active||this.$element[0]!==t.target&&this.$element.find(t.target).length||this.close()},this))},s.plugin("dropdown",a),s.ready(function(t){n("[data-am-dropdown]",t).dropdown()}),n(document).on("click.dropdown.amui.data-api",".am-dropdown form",function(t){t.stopPropagation()}),e.exports=s.dropdown=a},{2:2}],10:[function(t,e,i){var n=window.jQuery,s=t(2);n.flexslider=function(t,e){var i=n(t);i.vars=n.extend({},n.flexslider.defaults,e);var s,o=i.vars.namespace,a=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,r=("ontouchstart"in window||a||window.DocumentTouch&&document instanceof DocumentTouch)&&i.vars.touch,l="click touchend MSPointerUp keyup",c="",u="vertical"===i.vars.direction,h=i.vars.reverse,d=i.vars.itemWidth>0,p="fade"===i.vars.animation,m=""!==i.vars.asNavFor,f={},v=!0;n.data(t,"flexslider",i),f={init:function(){i.animating=!1,i.currentSlide=parseInt(i.vars.startAt?i.vars.startAt:0,10),isNaN(i.currentSlide)&&(i.currentSlide=0),i.animatingTo=i.currentSlide,i.atEnd=0===i.currentSlide||i.currentSlide===i.last,i.containerSelector=i.vars.selector.substr(0,i.vars.selector.search(" ")),i.slides=n(i.vars.selector,i),i.container=n(i.containerSelector,i),i.count=i.slides.length,i.syncExists=n(i.vars.sync).length>0,"slide"===i.vars.animation&&(i.vars.animation="swing"),i.prop=u?"top":"marginLeft",i.args={},i.manualPause=!1,i.stopped=!1,i.started=!1,i.startTimeout=null,i.transitions=!i.vars.video&&!p&&i.vars.useCSS&&function(){var t=document.createElement("div"),e=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in e)if(void 0!==t.style[e[n]])return i.pfx=e[n].replace("Perspective","").toLowerCase(),i.prop="-"+i.pfx+"-transform",!0;return!1}(),i.ensureAnimationEnd="",""!==i.vars.controlsContainer&&(i.controlsContainer=n(i.vars.controlsContainer).length>0&&n(i.vars.controlsContainer)),""!==i.vars.manualControls&&(i.manualControls=n(i.vars.manualControls).length>0&&n(i.vars.manualControls)),i.vars.randomize&&(i.slides.sort(function(){return Math.round(Math.random())-.5}),i.container.empty().append(i.slides)),i.doMath(),i.setup("init"),i.vars.controlNav&&f.controlNav.setup(),i.vars.directionNav&&f.directionNav.setup(),i.vars.keyboard&&(1===n(i.containerSelector).length||i.vars.multipleKeyboard)&&n(document).bind("keyup",function(t){var e=t.keyCode;if(!i.animating&&(39===e||37===e)){var n=39===e?i.getTarget("next"):37===e?i.getTarget("prev"):!1;i.flexAnimate(n,i.vars.pauseOnAction)}}),i.vars.mousewheel&&i.bind("mousewheel",function(t,e,n,s){t.preventDefault();var o=i.getTarget(0>e?"next":"prev");i.flexAnimate(o,i.vars.pauseOnAction)}),i.vars.pausePlay&&f.pausePlay.setup(),i.vars.slideshow&&i.vars.pauseInvisible&&f.pauseInvisible.init(),i.vars.slideshow&&(i.vars.pauseOnHover&&i.hover(function(){i.manualPlay||i.manualPause||i.pause()},function(){i.manualPause||i.manualPlay||i.stopped||i.play()}),i.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(i.vars.initDelay>0?i.startTimeout=setTimeout(i.play,i.vars.initDelay):i.play())),m&&f.asNav.setup(),r&&i.vars.touch&&f.touch(),(!p||p&&i.vars.smoothHeight)&&n(window).bind("resize orientationchange focus",f.resize),i.find("img").attr("draggable","false"),setTimeout(function(){i.vars.start(i)},200)},asNav:{setup:function(){i.asNav=!0,i.animatingTo=Math.floor(i.currentSlide/i.move),i.currentItem=i.currentSlide,i.slides.removeClass(o+"active-slide").eq(i.currentItem).addClass(o+"active-slide"),a?(t._slider=i,i.slides.each(function(){var t=this;t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",function(t){t.preventDefault(),t.currentTarget._gesture&&t.currentTarget._gesture.addPointer(t.pointerId)},!1),t.addEventListener("MSGestureTap",function(t){t.preventDefault();var e=n(this),s=e.index();n(i.vars.asNavFor).data("flexslider").animating||e.hasClass("active")||(i.direction=i.currentItem<s?"next":"prev",i.flexAnimate(s,i.vars.pauseOnAction,!1,!0,!0))})})):i.slides.on(l,function(t){t.preventDefault();var e=n(this),s=e.index(),a=e.offset().left-n(i).scrollLeft();0>=a&&e.hasClass(o+"active-slide")?i.flexAnimate(i.getTarget("prev"),!0):n(i.vars.asNavFor).data("flexslider").animating||e.hasClass(o+"active-slide")||(i.direction=i.currentItem<s?"next":"prev",i.flexAnimate(s,i.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){i.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var t,e,s="thumbnails"===i.vars.controlNav?"control-thumbs":"control-paging",a=1;if(i.controlNavScaffold=n('<ol class="'+o+"control-nav "+o+s+'"></ol>'),i.pagingCount>1)for(var r=0;r<i.pagingCount;r++){if(e=i.slides.eq(r),t="thumbnails"===i.vars.controlNav?'<img src="'+e.attr("data-thumb")+'"/>':"<a>"+a+"</a>","thumbnails"===i.vars.controlNav&&!0===i.vars.thumbCaptions){var u=e.attr("data-thumbcaption");""!=u&&void 0!=u&&(t+='<span class="'+o+'caption">'+u+"</span>")}i.controlNavScaffold.append("<li>"+t+"<i></i></li>"),a++}i.controlsContainer?n(i.controlsContainer).append(i.controlNavScaffold):i.append(i.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),i.controlNavScaffold.delegate("a, img",l,function(t){if(t.preventDefault(),""===c||c===t.type){var e=n(this),s=i.controlNav.index(e);e.hasClass(o+"active")||(i.direction=s>i.currentSlide?"next":"prev",i.flexAnimate(s,i.vars.pauseOnAction))}""===c&&(c=t.type),f.setToClearWatchedEvent()})},setupManual:function(){i.controlNav=i.manualControls,f.controlNav.active(),i.controlNav.bind(l,function(t){if(t.preventDefault(),""===c||c===t.type){var e=n(this),s=i.controlNav.index(e);e.hasClass(o+"active")||(i.direction=s>i.currentSlide?"next":"prev",i.flexAnimate(s,i.vars.pauseOnAction))}""===c&&(c=t.type),f.setToClearWatchedEvent()})},set:function(){var t="thumbnails"===i.vars.controlNav?"img":"a";i.controlNav=n("."+o+"control-nav li "+t,i.controlsContainer?i.controlsContainer:i)},active:function(){i.controlNav.removeClass(o+"active").eq(i.animatingTo).addClass(o+"active")},update:function(t,e){i.pagingCount>1&&"add"===t?i.controlNavScaffold.append(n("<li><a>"+i.count+"</a></li>")):1===i.pagingCount?i.controlNavScaffold.find("li").remove():i.controlNav.eq(e).closest("li").remove(),f.controlNav.set(),i.pagingCount>1&&i.pagingCount!==i.controlNav.length?i.update(e,t):f.controlNav.active()}},directionNav:{setup:function(){var t=n('<ul class="'+o+'direction-nav"><li class="'+o+'nav-prev"><a class="'+o+'prev" href="#">'+i.vars.prevText+'</a></li><li class="'+o+'nav-next"><a class="'+o+'next" href="#">'+i.vars.nextText+"</a></li></ul>");i.controlsContainer?(n(i.controlsContainer).append(t),i.directionNav=n("."+o+"direction-nav li a",i.controlsContainer)):(i.append(t),i.directionNav=n("."+o+"direction-nav li a",i)),f.directionNav.update(),i.directionNav.bind(l,function(t){t.preventDefault();var e;(""===c||c===t.type)&&(e=i.getTarget(n(this).hasClass(o+"next")?"next":"prev"),i.flexAnimate(e,i.vars.pauseOnAction)),""===c&&(c=t.type),f.setToClearWatchedEvent()})},update:function(){var t=o+"disabled";1===i.pagingCount?i.directionNav.addClass(t).attr("tabindex","-1"):i.vars.animationLoop?i.directionNav.removeClass(t).removeAttr("tabindex"):0===i.animatingTo?i.directionNav.removeClass(t).filter("."+o+"prev").addClass(t).attr("tabindex","-1"):i.animatingTo===i.last?i.directionNav.removeClass(t).filter("."+o+"next").addClass(t).attr("tabindex","-1"):i.directionNav.removeClass(t).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=n('<div class="'+o+'pauseplay"><a></a></div>');i.controlsContainer?(i.controlsContainer.append(t),i.pausePlay=n("."+o+"pauseplay a",i.controlsContainer)):(i.append(t),i.pausePlay=n("."+o+"pauseplay a",i)),f.pausePlay.update(i.vars.slideshow?o+"pause":o+"play"),i.pausePlay.bind(l,function(t){t.preventDefault(),(""===c||c===t.type)&&(n(this).hasClass(o+"pause")?(i.manualPause=!0,i.manualPlay=!1,i.pause()):(i.manualPause=!1,i.manualPlay=!0,i.play())),""===c&&(c=t.type),f.setToClearWatchedEvent()})},update:function(t){"play"===t?i.pausePlay.removeClass(o+"pause").addClass(o+"play").html(i.vars.playText):i.pausePlay.removeClass(o+"play").addClass(o+"pause").html(i.vars.pauseText)}},touch:function(){function e(e){i.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(i.pause(),v=u?i.h:i.w,w=Number(new Date),b=e.touches[0].pageX,T=e.touches[0].pageY,f=d&&h&&i.animatingTo===i.last?0:d&&h?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:d&&i.currentSlide===i.last?i.limit:d?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:h?(i.last-i.currentSlide+i.cloneOffset)*v:(i.currentSlide+i.cloneOffset)*v,c=u?T:b,m=u?b:T,t.addEventListener("touchmove",n,!1),t.addEventListener("touchend",s,!1))}function n(t){b=t.touches[0].pageX,T=t.touches[0].pageY,g=u?c-T:c-b,y=u?Math.abs(g)<Math.abs(b-m):Math.abs(g)<Math.abs(T-m);var e=500;(!y||Number(new Date)-w>e)&&(t.preventDefault(),!p&&i.transitions&&(i.vars.animationLoop||(g/=0===i.currentSlide&&0>g||i.currentSlide===i.last&&g>0?Math.abs(g)/v+2:1),i.setProps(f+g,"setTouch")))}function s(e){if(t.removeEventListener("touchmove",n,!1),i.animatingTo===i.currentSlide&&!y&&null!==g){var o=h?-g:g,a=i.getTarget(o>0?"next":"prev");i.canAdvance(a)&&(Number(new Date)-w<550&&Math.abs(o)>50||Math.abs(o)>v/2)?i.flexAnimate(a,i.vars.pauseOnAction):p||i.flexAnimate(i.currentSlide,i.vars.pauseOnAction,!0)}t.removeEventListener("touchend",s,!1),c=null,m=null,g=null,f=null}function o(e){e.stopPropagation(),i.animating?e.preventDefault():(i.pause(),t._gesture.addPointer(e.pointerId),x=0,v=u?i.h:i.w,w=Number(new Date),f=d&&h&&i.animatingTo===i.last?0:d&&h?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:d&&i.currentSlide===i.last?i.limit:d?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:h?(i.last-i.currentSlide+i.cloneOffset)*v:(i.currentSlide+i.cloneOffset)*v)}function r(e){e.stopPropagation();var i=e.target._slider;if(i){var n=-e.translationX,s=-e.translationY;return x+=u?s:n,g=x,y=u?Math.abs(x)<Math.abs(-n):Math.abs(x)<Math.abs(-s),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!y||Number(new Date)-w>500)&&(e.preventDefault(),!p&&i.transitions&&(i.vars.animationLoop||(g=x/(0===i.currentSlide&&0>x||i.currentSlide===i.last&&x>0?Math.abs(x)/v+2:1)),i.setProps(f+g,"setTouch"))))}}function l(t){t.stopPropagation();var e=t.target._slider;if(e){if(e.animatingTo===e.currentSlide&&!y&&null!==g){var i=h?-g:g,n=e.getTarget(i>0?"next":"prev");e.canAdvance(n)&&(Number(new Date)-w<550&&Math.abs(i)>50||Math.abs(i)>v/2)?e.flexAnimate(n,e.vars.pauseOnAction):p||e.flexAnimate(e.currentSlide,e.vars.pauseOnAction,!0)}c=null,m=null,g=null,f=null,x=0}}var c,m,f,v,g,w,y=!1,b=0,T=0,x=0;a?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",o,!1),t._slider=i,t.addEventListener("MSGestureChange",r,!1),t.addEventListener("MSGestureEnd",l,!1)):t.addEventListener("touchstart",e,!1)},resize:function(){!i.animating&&i.is(":visible")&&(d||i.doMath(),p?f.smoothHeight():d?(i.slides.width(i.computedW),i.update(i.pagingCount),i.setProps()):u?(i.viewport.height(i.h),i.setProps(i.h,"setTotal")):(i.vars.smoothHeight&&f.smoothHeight(),i.newSlides.width(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(t){if(!u||p){var e=p?i:i.viewport;t?e.animate({height:i.slides.eq(i.animatingTo).height()},t):e.height(i.slides.eq(i.animatingTo).height())}},sync:function(t){var e=n(i.vars.sync).data("flexslider"),s=i.animatingTo;switch(t){case"animate":e.flexAnimate(s,i.vars.pauseOnAction,!1,!0);break;case"play":e.playing||e.asNav||e.play();break;case"pause":e.pause()}},uniqueID:function(t){return t.filter("[id]").add(t.find("[id]")).each(function(){var t=n(this);t.attr("id",t.attr("id")+"_clone")}),t},pauseInvisible:{visProp:null,init:function(){var t=f.pauseInvisible.getHiddenProp();if(t){var e=t.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(e,function(){f.pauseInvisible.isHidden()?i.startTimeout?clearTimeout(i.startTimeout):i.pause():i.started?i.play():i.vars.initDelay>0?setTimeout(i.play,i.vars.initDelay):i.play()})}},isHidden:function(){var t=f.pauseInvisible.getHiddenProp();return t?document[t]:!1},getHiddenProp:function(){var t=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var e=0;e<t.length;e++)if(t[e]+"Hidden"in document)return t[e]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(s),s=setTimeout(function(){c=""},3e3)}},i.flexAnimate=function(t,e,s,a,l){if(i.vars.animationLoop||t===i.currentSlide||(i.direction=t>i.currentSlide?"next":"prev"),m&&1===i.pagingCount&&(i.direction=i.currentItem<t?"next":"prev"),!i.animating&&(i.canAdvance(t,l)||s)&&i.is(":visible")){if(m&&a){var c=n(i.vars.asNavFor).data("flexslider");if(i.atEnd=0===t||t===i.count-1,c.flexAnimate(t,!0,!1,!0,l),i.direction=i.currentItem<t?"next":"prev",c.direction=i.direction,Math.ceil((t+1)/i.visible)-1===i.currentSlide||0===t)return i.currentItem=t,i.slides.removeClass(o+"active-slide").eq(t).addClass(o+"active-slide"),!1;i.currentItem=t,i.slides.removeClass(o+"active-slide").eq(t).addClass(o+"active-slide"),t=Math.floor(t/i.visible)}if(i.animating=!0,i.animatingTo=t,e&&i.pause(),i.vars.before(i),i.syncExists&&!l&&f.sync("animate"),i.vars.controlNav&&f.controlNav.active(),d||i.slides.removeClass(o+"active-slide").eq(t).addClass(o+"active-slide"),i.atEnd=0===t||t===i.last,i.vars.directionNav&&f.directionNav.update(),t===i.last&&(i.vars.end(i),i.vars.animationLoop||i.pause()),p)r?(i.slides.eq(i.currentSlide).css({opacity:0,zIndex:1}),i.slides.eq(t).css({opacity:1,zIndex:2}),i.wrapup(y)):(i.slides.eq(i.currentSlide).css({zIndex:1}).animate({opacity:0},i.vars.animationSpeed,i.vars.easing),i.slides.eq(t).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing,i.wrapup));else{var v,g,w,y=u?i.slides.filter(":first").height():i.computedW;d?(v=i.vars.itemMargin,w=(i.itemW+v)*i.move*i.animatingTo,g=w>i.limit&&1!==i.visible?i.limit:w):g=0===i.currentSlide&&t===i.count-1&&i.vars.animationLoop&&"next"!==i.direction?h?(i.count+i.cloneOffset)*y:0:i.currentSlide===i.last&&0===t&&i.vars.animationLoop&&"prev"!==i.direction?h?0:(i.count+1)*y:h?(i.count-1-t+i.cloneOffset)*y:(t+i.cloneOffset)*y,i.setProps(g,"",i.vars.animationSpeed),i.transitions?(i.vars.animationLoop&&i.atEnd||(i.animating=!1,i.currentSlide=i.animatingTo),i.container.unbind("webkitTransitionEnd transitionend"),i.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(i.ensureAnimationEnd),i.wrapup(y)}),clearTimeout(i.ensureAnimationEnd),i.ensureAnimationEnd=setTimeout(function(){i.wrapup(y)},i.vars.animationSpeed+100)):i.container.animate(i.args,i.vars.animationSpeed,i.vars.easing,function(){i.wrapup(y)})}i.vars.smoothHeight&&f.smoothHeight(i.vars.animationSpeed)}},i.wrapup=function(t){p||d||(0===i.currentSlide&&i.animatingTo===i.last&&i.vars.animationLoop?i.setProps(t,"jumpEnd"):i.currentSlide===i.last&&0===i.animatingTo&&i.vars.animationLoop&&i.setProps(t,"jumpStart")),i.animating=!1,i.currentSlide=i.animatingTo,i.vars.after(i)},i.animateSlides=function(){!i.animating&&v&&i.flexAnimate(i.getTarget("next"))},i.pause=function(){clearInterval(i.animatedSlides),i.animatedSlides=null,i.playing=!1,i.vars.pausePlay&&f.pausePlay.update("play"),i.syncExists&&f.sync("pause")},i.play=function(){i.playing&&clearInterval(i.animatedSlides),i.animatedSlides=i.animatedSlides||setInterval(i.animateSlides,i.vars.slideshowSpeed),i.started=i.playing=!0,i.vars.pausePlay&&f.pausePlay.update("pause"),i.syncExists&&f.sync("play")},i.stop=function(){i.pause(),i.stopped=!0},i.canAdvance=function(t,e){var n=m?i.pagingCount-1:i.last;return e?!0:m&&i.currentItem===i.count-1&&0===t&&"prev"===i.direction?!0:m&&0===i.currentItem&&t===i.pagingCount-1&&"next"!==i.direction?!1:t!==i.currentSlide||m?i.vars.animationLoop?!0:i.atEnd&&0===i.currentSlide&&t===n&&"next"!==i.direction?!1:i.atEnd&&i.currentSlide===n&&0===t&&"next"===i.direction?!1:!0:!1},i.getTarget=function(t){return i.direction=t,"next"===t?i.currentSlide===i.last?0:i.currentSlide+1:0===i.currentSlide?i.last:i.currentSlide-1},i.setProps=function(t,e,n){var s=function(){var n=t?t:(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo,s=function(){if(d)return"setTouch"===e?t:h&&i.animatingTo===i.last?0:h?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:i.animatingTo===i.last?i.limit:n;switch(e){case"setTotal":return h?(i.count-1-i.currentSlide+i.cloneOffset)*t:(i.currentSlide+i.cloneOffset)*t;case"setTouch":return h?t:t;case"jumpEnd":return h?t:i.count*t;case"jumpStart":return h?i.count*t:t;default:return t}}();return-1*s+"px"}();i.transitions&&(s=u?"translate3d(0,"+s+",0)":"translate3d("+s+",0,0)",n=void 0!==n?n/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",n),i.container.css("transition-duration",n)),i.args[i.prop]=s,(i.transitions||void 0===n)&&i.container.css(i.args),i.container.css("transform",s)},i.setup=function(t){if(p)i.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(r?i.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+i.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(i.currentSlide).css({opacity:1,zIndex:2}):0==i.vars.fadeFirstSlide?i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).css({opacity:1}):i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing)),i.vars.smoothHeight&&f.smoothHeight();else{var e,s;"init"===t&&(i.viewport=n('<div class="'+o+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=0,i.cloneOffset=0,h&&(s=n.makeArray(i.slides).reverse(),i.slides=n(s),i.container.empty().append(i.slides))),i.vars.animationLoop&&!d&&(i.cloneCount=2,i.cloneOffset=1,"init"!==t&&i.container.find(".clone").remove(),i.container.append(f.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),i.newSlides=n(i.vars.selector,i),e=h?i.count-1-i.currentSlide+i.cloneOffset:i.currentSlide+i.cloneOffset,u&&!d?(i.container.height(200*(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.height(i.h),i.setProps(e*i.h,"init")},"init"===t?100:0)):(i.container.width(200*(i.count+i.cloneCount)+"%"),i.setProps(e*i.computedW,"init"),setTimeout(function(){i.doMath(),i.newSlides.css({width:i.computedW,"float":"left",display:"block"}),i.vars.smoothHeight&&f.smoothHeight()},"init"===t?100:0))}d||i.slides.removeClass(o+"active-slide").eq(i.currentSlide).addClass(o+"active-slide"),i.vars.init(i)},i.doMath=function(){var t=i.slides.first(),e=i.vars.itemMargin,n=i.vars.minItems,s=i.vars.maxItems;i.w=void 0===i.viewport?i.width():i.viewport.width(),i.h=t.height(),i.boxPadding=t.outerWidth()-t.width(),d?(i.itemT=i.vars.itemWidth+e,i.minW=n?n*i.itemT:i.w,i.maxW=s?s*i.itemT-e:i.w,i.itemW=i.minW>i.w?(i.w-e*(n-1))/n:i.maxW<i.w?(i.w-e*(s-1))/s:i.vars.itemWidth>i.w?i.w:i.vars.itemWidth,i.visible=Math.floor(i.w/i.itemW),i.move=i.vars.move>0&&i.vars.move<i.visible?i.vars.move:i.visible,i.pagingCount=Math.ceil((i.count-i.visible)/i.move+1),i.last=i.pagingCount-1,i.limit=1===i.pagingCount?0:i.vars.itemWidth>i.w?i.itemW*(i.count-1)+e*(i.count-1):(i.itemW+e)*i.count-i.w-e):(i.itemW=i.w,i.pagingCount=i.count,i.last=i.count-1),i.computedW=i.itemW-i.boxPadding},i.update=function(t,e){i.doMath(),d||(t<i.currentSlide?i.currentSlide+=1:t<=i.currentSlide&&0!==t&&(i.currentSlide-=1),i.animatingTo=i.currentSlide),i.vars.controlNav&&!i.manualControls&&("add"===e&&!d||i.pagingCount>i.controlNav.length?f.controlNav.update("add"):("remove"===e&&!d||i.pagingCount<i.controlNav.length)&&(d&&i.currentSlide>i.last&&(i.currentSlide-=1,i.animatingTo-=1),f.controlNav.update("remove",i.last))),i.vars.directionNav&&f.directionNav.update()},i.addSlide=function(t,e){var s=n(t);i.count+=1,i.last=i.count-1,u&&h?void 0!==e?i.slides.eq(i.count-e).after(s):i.container.prepend(s):void 0!==e?i.slides.eq(e).before(s):i.container.append(s),i.update(e,"add"),i.slides=n(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.added(i)},i.removeSlide=function(t){var e=isNaN(t)?i.slides.index(n(t)):t;i.count-=1,i.last=i.count-1,isNaN(t)?n(t,i.slides).remove():u&&h?i.slides.eq(i.last).remove():i.slides.eq(t).remove(),i.doMath(),i.update(e,"remove"),i.slides=n(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.removed(i)},f.init()},n(window).blur(function(t){focused=!1}).focus(function(t){focused=!0}),n.flexslider.defaults={namespace:"am-",selector:".am-slides > li",animation:"slide",easing:"swing",direction:"horizontal",reverse:!1,
animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:5e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:" ",nextText:" ",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},n.fn.flexslider=function(t){var e=Array.prototype.slice.call(arguments,1);if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var e=n(this),i=t.selector?t.selector:".am-slides > li",s=e.find(i);1===s.length&&t.allowOneSlide===!0||0===s.length?(s.fadeIn(400),t.start&&t.start(e)):void 0===e.data("flexslider")&&new n.flexslider(this,t)});var i,s=n(this).data("flexslider");switch(t){case"next":s.flexAnimate(s.getTarget("next"),!0);break;case"prev":case"previous":s.flexAnimate(s.getTarget("prev"),!0);break;default:"number"==typeof t?s.flexAnimate(t,!0):"string"==typeof t&&(i="function"==typeof s[t]?s[t].apply(s,e):s[t])}return void 0===i?this:i},s.ready(function(t){n("[data-am-flexslider]",t).each(function(t,e){var i=n(e),o=s.utils.parseOptions(i.data("amFlexslider"));o.before=function(t){t._pausedTimer&&(window.clearTimeout(t._pausedTimer),t._pausedTimer=null)},o.after=function(t){var e=t.vars.playAfterPaused;!e||isNaN(e)||t.playing||t.manualPause||t.manualPlay||t.stopped||(t._pausedTimer=window.setTimeout(function(){t.play()},e))},i.flexslider(o)})}),e.exports=n.flexslider},{2:2}],11:[function(t,e,i){"use strict";function n(t,e){this.wrapper="string"==typeof t?document.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var i in e)this.options[i]=e[i];this.translateZ=this.options.HWCompositing&&a.hasPerspective?" translateZ(0)":"",this.options.useTransition=a.hasTransition&&this.options.useTransition,this.options.useTransform=a.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY,this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?a.ease[this.options.bounceEasing]||a.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}var s=(window.jQuery,t(2)),o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},a=function(){function t(t){return n===!1?!1:""===n?t:n+t.charAt(0).toUpperCase()+t.substr(1)}var e={},i=document.createElement("div").style,n=function(){for(var t,e=["t","webkitT","MozT","msT","OT"],n=0,s=e.length;s>n;n++)if(t=e[n]+"ransform",t in i)return e[n].substr(0,e[n].length-1);return!1}();e.getTime=Date.now||function(){return(new Date).getTime()},e.extend=function(t,e){for(var i in e)t[i]=e[i]},e.addEvent=function(t,e,i,n){t.addEventListener(e,i,!!n)},e.removeEvent=function(t,e,i,n){t.removeEventListener(e,i,!!n)},e.prefixPointerEvent=function(t){return window.MSPointerEvent?"MSPointer"+t.charAt(9).toUpperCase()+t.substr(10):t},e.momentum=function(t,e,i,n,s,o){var a,r,l=t-e,c=Math.abs(l)/i;return o=void 0===o?6e-4:o,a=t+c*c/(2*o)*(0>l?-1:1),r=c/o,n>a?(a=s?n-s/2.5*(c/8):n,l=Math.abs(a-t),r=l/c):a>0&&(a=s?s/2.5*(c/8):0,l=Math.abs(t)+a,r=l/c),{destination:Math.round(a),duration:r}};var s=t("transform");return e.extend(e,{hasTransform:s!==!1,hasPerspective:t("perspective")in i,hasTouch:"ontouchstart"in window,hasPointer:window.PointerEvent||window.MSPointerEvent,hasTransition:t("transition")in i}),e.isBadAndroid=/Android /.test(window.navigator.appVersion)&&!/Chrome\/\d/.test(window.navigator.appVersion),e.extend(e.style={},{transform:s,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin")}),e.hasClass=function(t,e){var i=new RegExp("(^|\\s)"+e+"(\\s|$)");return i.test(t.className)},e.addClass=function(t,i){if(!e.hasClass(t,i)){var n=t.className.split(" ");n.push(i),t.className=n.join(" ")}},e.removeClass=function(t,i){if(e.hasClass(t,i)){var n=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(n," ")}},e.offset=function(t){for(var e=-t.offsetLeft,i=-t.offsetTop;t=t.offsetParent;)e-=t.offsetLeft,i-=t.offsetTop;return{left:e,top:i}},e.preventDefaultException=function(t,e){for(var i in e)if(e[i].test(t[i]))return!0;return!1},e.extend(e.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),e.extend(e.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return Math.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var e=4;return(t-=1)*t*((e+1)*t+e)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var e=.22,i=.4;return 0===t?0:1==t?1:i*Math.pow(2,-10*t)*Math.sin(2*(t-e/4)*Math.PI/e)+1}}}),e.tap=function(t,e){var i=document.createEvent("Event");i.initEvent(e,!0,!0),i.pageX=t.pageX,i.pageY=t.pageY,t.target.dispatchEvent(i)},e.click=function(t){var e,i=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(i.tagName)||(e=document.createEvent("MouseEvents"),e.initMouseEvent("click",!0,!0,t.view,1,i.screenX,i.screenY,i.clientX,i.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),e._constructed=!0,i.dispatchEvent(e))},e}();n.prototype={version:"5.1.3",_init:function(){this._initEvents()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(!(1!=a.eventType[t.type]&&0!==t.button||!this.enabled||this.initiated&&a.eventType[t.type]!==this.initiated)){!this.options.preventDefault||a.isBadAndroid||a.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var e,i=t.touches?t.touches[0]:t;this.initiated=a.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=a.getTime(),this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,e=this.getComputedPosition(),this._translate(Math.round(e.x),Math.round(e.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=i.pageX,this.pointY=i.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var e,i,n,s,o=t.touches?t.touches[0]:t,r=o.pageX-this.pointX,l=o.pageY-this.pointY,c=a.getTime();if(this.pointX=o.pageX,this.pointY=o.pageY,this.distX+=r,this.distY+=l,n=Math.abs(this.distX),s=Math.abs(this.distY),!(c-this.endTime>300&&10>n&&10>s)){if(this.directionLocked||this.options.freeScroll||(this.directionLocked=n>s+this.options.directionLockThreshold?"h":s>=n+this.options.directionLockThreshold?"v":"n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);r=0}r=this.hasHorizontalScroll?r:0,l=this.hasVerticalScroll?l:0,e=this.x+r,i=this.y+l,(e>0||e<this.maxScrollX)&&(e=this.options.bounce?this.x+r/3:e>0?0:this.maxScrollX),(i>0||i<this.maxScrollY)&&(i=this.options.bounce?this.y+l/3:i>0?0:this.maxScrollY),this.directionX=r>0?-1:0>r?1:0,this.directionY=l>0?-1:0>l?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(e,i),c-this.startTime>300&&(this.startTime=c,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&a.eventType[t.type]===this.initiated){this.options.preventDefault&&!a.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var e,i,n=(t.changedTouches?t.changedTouches[0]:t,a.getTime()-this.startTime),s=Math.round(this.x),o=Math.round(this.y),r=Math.abs(s-this.startX),l=Math.abs(o-this.startY),c=0,u="";if(this.isInTransition=0,this.initiated=0,this.endTime=a.getTime(),!this.resetPosition(this.options.bounceTime))return this.scrollTo(s,o),this.moved?this._events.flick&&200>n&&100>r&&100>l?void this._execEvent("flick"):(this.options.momentum&&300>n&&(e=this.hasHorizontalScroll?a.momentum(this.x,this.startX,n,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:s,duration:0},i=this.hasVerticalScroll?a.momentum(this.y,this.startY,n,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:o,duration:0},s=e.destination,o=i.destination,c=Math.max(e.duration,i.duration),this.isInTransition=1),s!=this.x||o!=this.y?((s>0||s<this.maxScrollX||o>0||o<this.maxScrollY)&&(u=a.ease.quadratic),void this.scrollTo(s,o,c,u)):void this._execEvent("scrollEnd")):(this.options.tap&&a.tap(t,this.options.tap),this.options.click&&a.click(t),void this._execEvent("scrollCancel"))}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var e=this.x,i=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?e=0:this.x<this.maxScrollX&&(e=this.maxScrollX),!this.hasVerticalScroll||this.y>0?i=0:this.y<this.maxScrollY&&(i=this.maxScrollY),e==this.x&&i==this.y?!1:(this.scrollTo(e,i,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=a.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,e){this._events[t]||(this._events[t]=[]),this._events[t].push(e)},off:function(t,e){if(this._events[t]){var i=this._events[t].indexOf(e);i>-1&&this._events[t].splice(i,1)}},_execEvent:function(t){if(this._events[t]){var e=0,i=this._events[t].length;if(i)for(;i>e;e++)this._events[t][e].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,e,i,n){t=this.x+t,e=this.y+e,i=i||0,this.scrollTo(t,e,i,n)},scrollTo:function(t,e,i,n){n=n||a.ease.circular,this.isInTransition=this.options.useTransition&&i>0,!i||this.options.useTransition&&n.style?(this._transitionTimingFunction(n.style),this._transitionTime(i),this._translate(t,e)):this._animate(t,e,i,n.fn)},scrollToElement:function(t,e,i,n,s){if(t=t.nodeType?t:this.scroller.querySelector(t)){var o=a.offset(t);o.left-=this.wrapperOffset.left,o.top-=this.wrapperOffset.top,i===!0&&(i=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),n===!0&&(n=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),o.left-=i||0,o.top-=n||0,o.left=o.left>0?0:o.left<this.maxScrollX?this.maxScrollX:o.left,o.top=o.top>0?0:o.top<this.maxScrollY?this.maxScrollY:o.top,e=void 0===e||null===e||"auto"===e?Math.max(Math.abs(this.x-o.left),Math.abs(this.y-o.top)):e,this.scrollTo(o.left,o.top,e,s)}},_transitionTime:function(t){t=t||0,this.scrollerStyle[a.style.transitionDuration]=t+"ms",!t&&a.isBadAndroid&&(this.scrollerStyle[a.style.transitionDuration]="0.001s")},_transitionTimingFunction:function(t){this.scrollerStyle[a.style.transitionTimingFunction]=t},_translate:function(t,e){this.options.useTransform?this.scrollerStyle[a.style.transform]="translate("+t+"px,"+e+"px)"+this.translateZ:(t=Math.round(t),e=Math.round(e),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=e+"px"),this.x=t,this.y=e},_initEvents:function(t){var e=t?a.removeEvent:a.addEvent,i=this.options.bindToWrapper?this.wrapper:window;e(window,"orientationchange",this),e(window,"resize",this),this.options.click&&e(this.wrapper,"click",this,!0),this.options.disableMouse||(e(this.wrapper,"mousedown",this),e(i,"mousemove",this),e(i,"mousecancel",this),e(i,"mouseup",this)),a.hasPointer&&!this.options.disablePointer&&(e(this.wrapper,a.prefixPointerEvent("pointerdown"),this),e(i,a.prefixPointerEvent("pointermove"),this),e(i,a.prefixPointerEvent("pointercancel"),this),e(i,a.prefixPointerEvent("pointerup"),this)),a.hasTouch&&!this.options.disableTouch&&(e(this.wrapper,"touchstart",this),e(i,"touchmove",this),e(i,"touchcancel",this),e(i,"touchend",this)),e(this.scroller,"transitionend",this),e(this.scroller,"webkitTransitionEnd",this),e(this.scroller,"oTransitionEnd",this),e(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,e,i=window.getComputedStyle(this.scroller,null);return this.options.useTransform?(i=i[a.style.transform].split(")")[0].split(", "),t=+(i[12]||i[4]),e=+(i[13]||i[5])):(t=+i.left.replace(/[^-\d.]/g,""),e=+i.top.replace(/[^-\d.]/g,"")),{x:t,y:e}},_animate:function(t,e,i,n){function s(){var d,p,m,f=a.getTime();return f>=h?(r.isAnimating=!1,r._translate(t,e),void(r.resetPosition(r.options.bounceTime)||r._execEvent("scrollEnd"))):(f=(f-u)/i,m=n(f),d=(t-l)*m+l,p=(e-c)*m+c,r._translate(d,p),void(r.isAnimating&&o(s)))}var r=this,l=this.x,c=this.y,u=a.getTime(),h=u+i;this.isAnimating=!0,s()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":t._constructed||(t.preventDefault(),t.stopPropagation())}}},n.utils=a,e.exports=s.iScroll=n},{2:2}],12:[function(t,e,i){"use strict";function n(t,e){return this.each(function(){var i=s(this),n=i.data("amui.modal"),o="object"==typeof t&&t;n||i.data("amui.modal",n=new c(this,o)),"string"==typeof t?n[t]&&n[t](e):n.toggle(t&&t.relatedTarget||void 0)})}var s=window.jQuery,o=t(2),a=t(8),r=s(document),l=o.support.transition,c=function(t,e){this.options=s.extend({},c.DEFAULTS,e||{}),this.$element=s(t),this.$dialog=this.$element.find(".am-modal-dialog"),this.$element.attr("id")||this.$element.attr("id",o.utils.generateGUID("am-modal")),this.isPopup=this.$element.hasClass("am-popup"),this.isActions=this.$element.hasClass("am-modal-actions"),this.isPrompt=this.$element.hasClass("am-modal-prompt"),this.isLoading=this.$element.hasClass("am-modal-loading"),this.active=this.transitioning=this.relatedTarget=null,this.events()};c.DEFAULTS={className:{active:"am-modal-active",out:"am-modal-out"},selector:{modal:".am-modal",active:".am-modal-active"},closeViaDimmer:!0,cancelable:!0,onConfirm:function(){},onCancel:function(){},closeOnCancel:!0,closeOnConfirm:!0,height:void 0,width:void 0,duration:300,transitionEnd:l&&l.end+".modal.amui"},c.prototype.toggle=function(t){return this.active?this.close():this.open(t)},c.prototype.open=function(t){var e=this.$element,i=this.options,n=this.isPopup,o=i.width,r=i.height,c={};if(!this.active&&this.$element.length){t&&(this.relatedTarget=t),this.transitioning&&(clearTimeout(e.transitionEndTimmer),e.transitionEndTimmer=null,e.trigger(i.transitionEnd).off(i.transitionEnd)),n&&this.$element.show(),this.active=!0,e.trigger(s.Event("open.modal.amui",{relatedTarget:t})),a.open(e),e.show().redraw(),n||this.isActions||(o&&(o=parseInt(o,10),c.width=o+"px",c.marginLeft=-parseInt(o/2)+"px"),r?(r=parseInt(r,10),c.marginTop=-parseInt(r/2)+"px",this.$dialog.css({height:r+"px"})):c.marginTop=-parseInt(e.height()/2,10)+"px",e.css(c)),e.removeClass(i.className.out).addClass(i.className.active),this.transitioning=1;var u=function(){e.trigger(s.Event("opened.modal.amui",{relatedTarget:t})),this.transitioning=0,this.isPrompt&&this.$dialog.find("input").eq(0).focus()};return l?void e.one(i.transitionEnd,s.proxy(u,this)).emulateTransitionEnd(i.duration):u.call(this)}},c.prototype.close=function(t){if(this.active){var e=this.$element,i=this.options,n=this.isPopup;this.transitioning&&(clearTimeout(e.transitionEndTimmer),e.transitionEndTimmer=null,e.trigger(i.transitionEnd).off(i.transitionEnd),a.close(e,!0)),this.$element.trigger(s.Event("close.modal.amui",{relatedTarget:t})),this.transitioning=1;var o=function(){e.trigger("closed.modal.amui"),n&&e.removeClass(i.className.out),e.hide(),this.transitioning=0,a.close(e,!1),this.active=!1};return e.removeClass(i.className.active).addClass(i.className.out),l?void e.one(i.transitionEnd,s.proxy(o,this)).emulateTransitionEnd(i.duration):o.call(this)}},c.prototype.events=function(){var t=this.options,e=this,i=this.$element,n=i.find(".am-modal-prompt-input"),o=i.find("[data-am-modal-confirm]"),r=i.find("[data-am-modal-cancel]"),l=function(){var t=[];return n.each(function(){t.push(s(this).val())}),0===t.length?void 0:1===t.length?t[0]:t};this.options.cancelable&&i.on("keyup.modal.amui",function(t){e.active&&27===t.which&&(i.trigger("cancel.modal.amui"),e.close())}),this.options.closeViaDimmer&&!this.isLoading&&a.$element.on("click.dimmer.modal.amui",function(t){e.close()}),i.find("[data-am-modal-close], .am-modal-btn").on("click.close.modal.amui",function(i){i.preventDefault();var n=s(this);n.is(o)?(console.log("sdafdf"),t.closeOnConfirm&&e.close()):n.is(r)?t.closeOnCancel&&e.close():e.close()}),o.on("click.confirm.modal.amui",function(){i.trigger(s.Event("confirm.modal.amui",{trigger:this}))}),r.on("click.cancel.modal.amui",function(){i.trigger(s.Event("cancel.modal.amui",{trigger:this}))}),i.on("confirm.modal.amui",function(t){t.data=l(),e.options.onConfirm.call(e,t)}).on("cancel.modal.amui",function(t){t.data=l(),e.options.onCancel.call(e,t)})},s.fn.modal=n,r.on("click.modal.amui.data-api","[data-am-modal]",function(){var t=s(this),e=o.utils.parseOptions(t.attr("data-am-modal")),i=s(e.target||this.href&&this.href.replace(/.*(?=#[^\s]+$)/,"")),a=i.data("amui.modal")?"toggle":e;n.call(i,a,this)}),e.exports=o.modal=c},{2:2,8:8}],13:[function(t,e,i){"use strict";function n(t,e){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var n=s(this),o=n.data("amui.offcanvas"),a=s.extend({},"object"==typeof t&&t);o||(n.data("amui.offcanvas",o=new c(this,a)),(!t||"object"==typeof t)&&o.open(e)),"string"==typeof t&&o[t]&&o[t].apply(o,i)})}var s=window.jQuery,o=t(2);t(30);var a,r=s(window),l=s(document),c=function(t,e){this.$element=s(t),this.options=s.extend({},c.DEFAULTS,e),this.active=null,this.bindEvents()};c.DEFAULTS={duration:300,effect:"overlay"},c.prototype.open=function(t){var e=this,i=this.$element;if(i.length&&!i.hasClass("am-active")){var n=this.options.effect,o=s("html"),l=s("body"),c=i.find(".am-offcanvas-bar").first(),u=c.hasClass("am-offcanvas-bar-flip")?-1:1;c.addClass("am-offcanvas-bar-"+n),a={x:window.scrollX,y:window.scrollY},i.addClass("am-active"),l.css({width:window.innerWidth,height:r.height()}).addClass("am-offcanvas-page"),"overlay"!==n&&l.css({"margin-left":c.outerWidth()*u}).width(),o.css("margin-top",-1*a.y),setTimeout(function(){c.addClass("am-offcanvas-bar-active").width()},0),i.trigger("open.offcanvas.amui"),this.active=1,i.on("click.offcanvas.amui",function(t){var i=s(t.target);i.hasClass("am-offcanvas-bar")||i.parents(".am-offcanvas-bar").first().length||(t.stopImmediatePropagation(),e.close())}),o.on("keydown.offcanvas.amui",function(t){27===t.keyCode&&e.close()})}},c.prototype.close=function(t){function e(){r.removeClass("am-offcanvas-page").css({width:"",height:"","margin-left":"","margin-right":""}),l.removeClass("am-active"),c.removeClass("am-offcanvas-bar-active"),n.css("margin-top",""),window.scrollTo(a.x,a.y),l.trigger("closed.offcanvas.amui"),i.active=0}var i=this,n=s("html"),r=s("body"),l=this.$element,c=l.find(".am-offcanvas-bar").first();l.length&&this.active&&l.hasClass("am-active")&&(l.trigger("close.offcanvas.amui"),o.support.transition?(setTimeout(function(){c.removeClass("am-offcanvas-bar-active")},0),r.css("margin-left","").one(o.support.transition.end,function(){e()}).emulateTransitionEnd(this.options.duration)):e(),l.off("click.offcanvas.amui"),n.off(".offcanvas.amui"))},c.prototype.bindEvents=function(){var t=this;return l.on("click.offcanvas.amui",'[data-am-dismiss="offcanvas"]',function(e){e.preventDefault(),t.close()}),r.on("resize.offcanvas.amui orientationchange.offcanvas.amui",function(){t.active&&t.close()}),this.$element.hammer().on("swipeleft swipeleft",function(e){e.preventDefault(),t.close()}),this},s.fn.offCanvas=n,l.on("click.offcanvas.amui","[data-am-offcanvas]",function(t){t.preventDefault();var e=s(this),i=o.utils.parseOptions(e.data("amOffcanvas")),a=s(i.target||this.href&&this.href.replace(/.*(?=#[^\s]+$)/,"")),r=a.data("amui.offcanvas")?"open":i;n.call(a,r,this)}),e.exports=o.offcanvas=c},{2:2,30:30}],14:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=function(t){var e=function(e,i){this.el=t(e),this.zoomFactor=1,this.lastScale=1,this.offset={x:0,y:0},this.options=t.extend({},this.defaults,i),this.setupMarkup(),this.bindEvents(),this.update(),this.enable()},i=function(t,e){return t+e},n=function(t,e){return t>e-.01&&e+.01>t};e.prototype={defaults:{tapZoomFactor:2,zoomOutFactor:1.3,animationDuration:300,animationInterval:5,maxZoom:5,minZoom:.5,lockDragAxis:!1,use2d:!1,zoomStartEventName:"pz_zoomstart",zoomEndEventName:"pz_zoomend",dragStartEventName:"pz_dragstart",dragEndEventName:"pz_dragend",doubleTapEventName:"pz_doubletap"},handleDragStart:function(t){this.el.trigger(this.options.dragStartEventName),this.stopAnimation(),this.lastDragPosition=!1,this.hasInteraction=!0,this.handleDrag(t)},handleDrag:function(t){if(this.zoomFactor>1){var e=this.getTouches(t)[0];this.drag(e,this.lastDragPosition),this.offset=this.sanitizeOffset(this.offset),this.lastDragPosition=e}},handleDragEnd:function(){this.el.trigger(this.options.dragEndEventName),this.end()},handleZoomStart:function(t){this.el.trigger(this.options.zoomStartEventName),this.stopAnimation(),this.lastScale=1,this.nthZoom=0,this.lastZoomCenter=!1,this.hasInteraction=!0},handleZoom:function(t,e){var i=this.getTouchCenter(this.getTouches(t)),n=e/this.lastScale;this.lastScale=e,this.nthZoom+=1,this.nthZoom>3&&(this.scale(n,i),this.drag(i,this.lastZoomCenter)),this.lastZoomCenter=i},handleZoomEnd:function(){this.el.trigger(this.options.zoomEndEventName),this.end()},handleDoubleTap:function(t){var e=this.getTouches(t)[0],i=this.zoomFactor>1?1:this.options.tapZoomFactor,n=this.zoomFactor,s=function(t){this.scaleTo(n+t*(i-n),e)}.bind(this);this.hasInteraction||(n>i&&(e=this.getCurrentZoomCenter()),this.animate(this.options.animationDuration,this.options.animationInterval,s,this.swing),this.el.trigger(this.options.doubleTapEventName))},sanitizeOffset:function(t){var e=(this.zoomFactor-1)*this.getContainerX(),i=(this.zoomFactor-1)*this.getContainerY(),n=Math.max(e,0),s=Math.max(i,0),o=Math.min(e,0),a=Math.min(i,0);return{x:Math.min(Math.max(t.x,o),n),y:Math.min(Math.max(t.y,a),s)}},scaleTo:function(t,e){this.scale(t/this.zoomFactor,e)},scale:function(t,e){t=this.scaleZoomFactor(t),this.addOffset({x:(t-1)*(e.x+this.offset.x),y:(t-1)*(e.y+this.offset.y)})},scaleZoomFactor:function(t){var e=this.zoomFactor;return this.zoomFactor*=t,this.zoomFactor=Math.min(this.options.maxZoom,Math.max(this.zoomFactor,this.options.minZoom)),this.zoomFactor/e},drag:function(t,e){e&&this.addOffset(this.options.lockDragAxis?Math.abs(t.x-e.x)>Math.abs(t.y-e.y)?{x:-(t.x-e.x),y:0}:{y:-(t.y-e.y),x:0}:{y:-(t.y-e.y),x:-(t.x-e.x)})},getTouchCenter:function(t){return this.getVectorAvg(t)},getVectorAvg:function(t){return{x:t.map(function(t){return t.x}).reduce(i)/t.length,y:t.map(function(t){return t.y}).reduce(i)/t.length}},addOffset:function(t){this.offset={x:this.offset.x+t.x,y:this.offset.y+t.y}},sanitize:function(){this.zoomFactor<this.options.zoomOutFactor?this.zoomOutAnimation():this.isInsaneOffset(this.offset)&&this.sanitizeOffsetAnimation()},isInsaneOffset:function(t){var e=this.sanitizeOffset(t);return e.x!==t.x||e.y!==t.y},sanitizeOffsetAnimation:function(){var t=this.sanitizeOffset(this.offset),e={x:this.offset.x,y:this.offset.y},i=function(i){this.offset.x=e.x+i*(t.x-e.x),this.offset.y=e.y+i*(t.y-e.y),this.update()}.bind(this);this.animate(this.options.animationDuration,this.options.animationInterval,i,this.swing)},zoomOutAnimation:function(){var t=this.zoomFactor,e=1,i=this.getCurrentZoomCenter(),n=function(n){this.scaleTo(t+n*(e-t),i)}.bind(this);this.animate(this.options.animationDuration,this.options.animationInterval,n,this.swing)},updateAspectRatio:function(){this.setContainerY()},getInitialZoomFactor:function(){return this.container[0].offsetWidth/this.el[0].offsetWidth},getAspectRatio:function(){return this.el[0].offsetWidth/this.el[0].offsetHeight},getCurrentZoomCenter:function(){var t=this.container[0].offsetWidth*this.zoomFactor,e=this.offset.x,i=t-e-this.container[0].offsetWidth,n=e/i,s=n*this.container[0].offsetWidth/(n+1),o=this.container[0].offsetHeight*this.zoomFactor,a=this.offset.y,r=o-a-this.container[0].offsetHeight,l=a/r,c=l*this.container[0].offsetHeight/(l+1);return 0===i&&(s=this.container[0].offsetWidth),0===r&&(c=this.container[0].offsetHeight),{x:s,y:c}},canDrag:function(){return!n(this.zoomFactor,1)},getTouches:function(t){var e=this.container.offset();return Array.prototype.slice.call(t.touches).map(function(t){return{x:t.pageX-e.left,y:t.pageY-e.top}})},animate:function(t,e,i,n,s){var o=(new Date).getTime(),a=function(){if(this.inAnimation){var r=(new Date).getTime()-o,l=r/t;r>=t?(i(1),s&&s(),this.update(),this.stopAnimation(),this.update()):(n&&(l=n(l)),i(l),this.update(),setTimeout(a,e))}}.bind(this);this.inAnimation=!0,a()},stopAnimation:function(){this.inAnimation=!1},swing:function(t){return-Math.cos(t*Math.PI)/2+.5},getContainerX:function(){return window.innerWidth},getContainerY:function(){return window.innerHeight},setContainerY:function(t){var e=window.innerHeight;return this.el.css({height:e}),this.container.height(e)},setupMarkup:function(){this.container=t('<div class="pinch-zoom-container"></div>'),this.el.before(this.container),this.container.append(this.el),this.container.css({overflow:"hidden",position:"relative"}),this.el.css({"-webkit-transform-origin":"0% 0%","-moz-transform-origin":"0% 0%","-ms-transform-origin":"0% 0%","-o-transform-origin":"0% 0%","transform-origin":"0% 0%",position:"absolute"})},end:function(){this.hasInteraction=!1,this.sanitize(),this.update()},bindEvents:function(){s(this.container.get(0),this),t(window).on("resize",this.update.bind(this)),t(this.el).find("img").on("load",this.update.bind(this))},update:function(){this.updatePlaned||(this.updatePlaned=!0,setTimeout(function(){this.updatePlaned=!1,this.updateAspectRatio();var t=this.getInitialZoomFactor()*this.zoomFactor,e=-this.offset.x/t,i=-this.offset.y/t,n="scale3d("+t+", "+t+",1) translate3d("+e+"px,"+i+"px,0px)",s="scale("+t+", "+t+") translate("+e+"px,"+i+"px)",o=function(){this.clone&&(this.clone.remove(),delete this.clone)}.bind(this);!this.options.use2d||this.hasInteraction||this.inAnimation?(this.is3d=!0,o(),this.el.css({"-webkit-transform":n,"-o-transform":s,"-ms-transform":s,"-moz-transform":s,transform:n})):(this.is3d&&(this.clone=this.el.clone(),this.clone.css("pointer-events","none"),this.clone.appendTo(this.container),setTimeout(o,200)),this.el.css({"-webkit-transform":s,"-o-transform":s,"-ms-transform":s,"-moz-transform":s,transform:s}),this.is3d=!1)}.bind(this),0))},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1}};var s=function(t,e){var i=null,n=0,s=null,o=null,a=function(t,n){if(i!==t){if(i&&!t)switch(i){case"zoom":e.handleZoomEnd(n);break;case"drag":e.handleDragEnd(n)}switch(t){case"zoom":e.handleZoomStart(n);break;case"drag":e.handleDragStart(n)}}i=t},r=function(t){2===n?a("zoom"):1===n&&e.canDrag()?a("drag",t):a(null,t)},l=function(t){return Array.prototype.slice.call(t).map(function(t){return{x:t.pageX,y:t.pageY}})},c=function(t,e){var i,n;return i=t.x-e.x,n=t.y-e.y,Math.sqrt(i*i+n*n)},u=function(t,e){var i=c(t[0],t[1]),n=c(e[0],e[1]);return n/i},h=function(t){t.stopPropagation(),t.preventDefault()},d=function(t){var o=(new Date).getTime();if(n>1&&(s=null),300>o-s)switch(h(t),e.handleDoubleTap(t),i){case"zoom":e.handleZoomEnd(t);break;case"drag":e.handleDragEnd(t)}1===n&&(s=o)},p=!0;t.addEventListener("touchstart",function(t){e.enabled&&(p=!0,n=t.touches.length,d(t))}),t.addEventListener("touchmove",function(t){if(e.enabled){if(p)r(t),i&&h(t),o=l(t.touches);else{switch(i){case"zoom":e.handleZoom(t,u(o,l(t.touches)));break;case"drag":e.handleDrag(t)}i&&(h(t),e.update())}p=!1}}),t.addEventListener("touchend",function(t){e.enabled&&(n=t.touches.length,r(t))})};return e};e.exports=s.pichzoom=o(n)},{2:2}],15:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=n(window),a=function(t,e){this.options=n.extend({},a.DEFAULTS,e),this.$element=n(t),this.active=null,this.$popover=this.options.target&&n(this.options.target)||null,this.init(),this._bindEvents()};a.DEFAULTS={theme:void 0,trigger:"click",content:"",open:!1,target:void 0,tpl:'<div class="am-popover"><div class="am-popover-inner"></div><div class="am-popover-caret"></div></div>'},a.prototype.init=function(){function t(){i.sizePopover()}var e,i=this,o=this.$element;this.options.target||(this.$popover=this.getPopover(),this.setContent()),e=this.$popover,e.appendTo(n("body")),this.sizePopover(),o.on("open.popover.amui",function(){n(window).on("resize.popover.amui",s.utils.debounce(t,50))}),o.on("close.popover.amui",function(){
n(window).off("resize.popover.amui",t)}),this.options.open&&this.open()},a.prototype.sizePopover=function(){var t=this.$element,e=this.$popover;if(e&&e.length){var i=e.outerWidth(),n=e.outerHeight(),s=e.find(".am-popover-caret"),a=s.outerWidth()/2||8,r=n+8,l=t.outerWidth(),c=t.outerHeight(),u=t.offset(),h=t[0].getBoundingClientRect(),d=o.height(),p=o.width(),m=0,f=0,v=0,g=2,w="top";e.css({left:"",top:""}).removeClass("am-popover-left am-popover-right am-popover-top am-popover-bottom"),r-g<h.top+g?m=u.top-r-g:r<d-h.top-h.height?(w="bottom",m=u.top+c+a+g):(w="middle",m=c/2+u.top-n/2),"top"===w||"bottom"===w?(f=l/2+u.left-i/2,v=f,5>f&&(f=5),f+i>p&&(f=p-i-20),"top"===w&&e.addClass("am-popover-top"),"bottom"===w&&e.addClass("am-popover-bottom"),v-=f):"middle"===w&&(f=u.left-i-a,e.addClass("am-popover-left"),5>f&&(f=u.left+l+a,e.removeClass("am-popover-left").addClass("am-popover-right")),f+i>p&&(f=p-i-5,e.removeClass("am-popover-left").addClass("am-popover-right"))),e.css({top:m+"px",left:f+"px"})}},a.prototype.toggle=function(){return this[this.active?"close":"open"]()},a.prototype.open=function(){var t=this.$popover;this.$element.trigger("open.popover.amui"),this.sizePopover(),t.show().addClass("am-active"),this.active=!0},a.prototype.close=function(){var t=this.$popover;this.$element.trigger("close.popover.amui"),t.removeClass("am-active").trigger("closed.popover.amui").hide(),this.active=!1},a.prototype.getPopover=function(){var t=s.utils.generateGUID("am-popover"),e=[];return this.options.theme&&n.each(this.options.theme.split(","),function(t,i){e.push("am-popover-"+n.trim(i))}),n(this.options.tpl).attr("id",t).addClass(e.join(" "))},a.prototype.setContent=function(t){t=t||this.options.content,this.$popover&&this.$popover.find(".am-popover-inner").empty().html(t)},a.prototype._bindEvents=function(){for(var t="popover.amui",e=this.options.trigger.split(" "),i=e.length;i--;){var s=e[i];if("click"===s)this.$element.on("click."+t,n.proxy(this.toggle,this));else{var o="hover"==s?"mouseenter":"focusin",a="hover"==s?"mouseleave":"focusout";this.$element.on(o+"."+t,n.proxy(this.open,this)),this.$element.on(a+"."+t,n.proxy(this.close,this))}}},s.plugin("popover",a),s.ready(function(t){n("[data-am-popover]",t).popover()}),e.exports=a},{2:2}],16:[function(t,e,i){"use strict";var n=(window.jQuery,t(2)),s=function(){function t(t,e,i){return e>t?e:t>i?i:t}function e(t){return 100*(-1+t)}function i(t,i,n){var s;return s="translate3d"===c.positionUsing?{transform:"translate3d("+e(t)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(t)+"%,0)"}:{"margin-left":e(t)+"%"},s.transition="all "+i+"ms "+n,s}function n(t,e){var i="string"==typeof t?t:a(t);return i.indexOf(" "+e+" ")>=0}function s(t,e){var i=a(t),s=i+e;n(i,e)||(t.className=s.substring(1))}function o(t,e){var i,s=a(t);n(t,e)&&(i=s.replace(" "+e+" "," "),t.className=i.substring(1,i.length-1))}function a(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function r(t){t&&t.parentNode&&t.parentNode.removeChild(t)}var l={};l.version="0.2.0";var c=l.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,parent:"body",barSelector:'[role="nprogress-bar"]',spinnerSelector:'[role="nprogress-spinner"]',template:'<div class="nprogress-bar" role="nprogress-bar"><div class="nprogress-peg"></div></div><div class="nprogress-spinner" role="nprogress-spinner"><div class="nprogress-spinner-icon"></div></div>'};l.configure=function(t){var e,i;for(e in t)i=t[e],void 0!==i&&t.hasOwnProperty(e)&&(c[e]=i);return this},l.status=null,l.set=function(e){var n=l.isStarted();e=t(e,c.minimum,1),l.status=1===e?null:e;var s=l.render(!n),o=s.querySelector(c.barSelector),a=c.speed,r=c.easing;return s.offsetWidth,u(function(t){""===c.positionUsing&&(c.positionUsing=l.getPositioningCSS()),h(o,i(e,a,r)),1===e?(h(s,{transition:"none",opacity:1}),s.offsetWidth,setTimeout(function(){h(s,{transition:"all "+a+"ms linear",opacity:0}),setTimeout(function(){l.remove(),t()},a)},a)):setTimeout(t,a)}),this},l.isStarted=function(){return"number"==typeof l.status},l.start=function(){l.status||l.set(0);var t=function(){setTimeout(function(){l.status&&(l.trickle(),t())},c.trickleSpeed)};return c.trickle&&t(),this},l.done=function(t){return t||l.status?l.inc(.3+.5*Math.random()).set(1):this},l.inc=function(e){var i=l.status;return i?("number"!=typeof e&&(e=(1-i)*t(Math.random()*i,.1,.95)),i=t(i+e,0,.994),l.set(i)):l.start()},l.trickle=function(){return l.inc(Math.random()*c.trickleRate)},function(){var t=0,e=0;l.promise=function(i){return i&&"resolved"!==i.state()?(0===e&&l.start(),t++,e++,i.always(function(){e--,0===e?(t=0,l.done()):l.set((t-e)/t)}),this):this}}(),l.render=function(t){if(l.isRendered())return document.getElementById("nprogress");s(document.documentElement,"nprogress-busy");var i=document.createElement("div");i.id="nprogress",i.innerHTML=c.template;var n,o=i.querySelector(c.barSelector),a=t?"-100":e(l.status||0),u=document.querySelector(c.parent);return h(o,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),c.showSpinner||(n=i.querySelector(c.spinnerSelector),n&&r(n)),u!=document.body&&s(u,"nprogress-custom-parent"),u.appendChild(i),i},l.remove=function(){o(document.documentElement,"nprogress-busy"),o(document.querySelector(c.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&r(t)},l.isRendered=function(){return!!document.getElementById("nprogress")},l.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var u=function(){function t(){var i=e.shift();i&&i(t)}var e=[];return function(i){e.push(i),1==e.length&&t()}}(),h=function(){function t(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}function e(t){var e=document.body.style;if(t in e)return t;for(var i,n=s.length,o=t.charAt(0).toUpperCase()+t.slice(1);n--;)if(i=s[n]+o,i in e)return i;return t}function i(i){return i=t(i),o[i]||(o[i]=e(i))}function n(t,e,n){e=i(e),t.style[e]=n}var s=["Webkit","O","Moz","ms"],o={};return function(t,e){var i,s,o=arguments;if(2==o.length)for(i in e)s=e[i],void 0!==s&&e.hasOwnProperty(i)&&n(t,i,s);else n(t,o[1],o[2])}}();return l}();e.exports=n.progress=s},{2:2}],17:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=t(14),a=t(30),r=s.support.animation,l=s.support.transition,c=function(t,e){this.$element=n(t),this.$body=n(document.body),this.options=n.extend({},c.DEFAULTS,e),this.$pureview=n(this.options.tpl).attr("id",s.utils.generateGUID("am-pureview")),this.$slides=null,this.transitioning=null,this.scrollbarWidth=0,this.init()};c.DEFAULTS={tpl:'<div class="am-pureview am-pureview-bar-active"><ul class="am-pureview-slider"></ul><ul class="am-pureview-direction"><li class="am-pureview-prev"><a href=""></a></li><li class="am-pureview-next"><a href=""></a></li></ul><ol class="am-pureview-nav"></ol><div class="am-pureview-bar am-active"><span class="am-pureview-title"></span><div class="am-pureview-counter"><span class="am-pureview-current"></span> / <span class="am-pureview-total"></span></div></div><div class="am-pureview-actions am-active"><a href="javascript: void(0)" class="am-icon-chevron-left" data-am-close="pureview"></a></div></div>',className:{prevSlide:"am-pureview-slide-prev",nextSlide:"am-pureview-slide-next",onlyOne:"am-pureview-only",active:"am-active",barActive:"am-pureview-bar-active",activeBody:"am-pureview-active"},selector:{slider:".am-pureview-slider",close:'[data-am-close="pureview"]',total:".am-pureview-total",current:".am-pureview-current",title:".am-pureview-title",actions:".am-pureview-actions",bar:".am-pureview-bar",pinchZoom:".am-pinch-zoom",nav:".am-pureview-nav"},shareBtn:!1,toggleToolbar:!0,target:"img",weChatImagePreview:!0},c.prototype.init=function(){var t=this,e=this.options,i=this.$element,s=this.$pureview;this.refreshSlides(),n("body").append(s),this.$title=s.find(e.selector.title),this.$current=s.find(e.selector.current),this.$bar=s.find(e.selector.bar),this.$actions=s.find(e.selector.actions),e.shareBtn&&this.$actions.append('<a href="javascript: void(0)" class="am-icon-share-square-o" data-am-toggle="share"></a>'),this.$element.on("click.pureview.amui",e.target,function(i){i.preventDefault();var n=t.$images.index(this);e.weChatImagePreview&&window.WeixinJSBridge?window.WeixinJSBridge.invoke("imagePreview",{current:t.imgUrls[n],urls:t.imgUrls}):t.open(n)}),s.find(".am-pureview-direction").on("click.direction.pureview.amui","li",function(e){e.preventDefault(),n(this).is(".am-pureview-prev")?t.prevSlide():t.nextSlide()}),s.find(e.selector.nav).on("click.nav.pureview.amui","li",function(){var e=t.$navItems.index(n(this));t.activate(t.$slides.eq(e))}),s.find(e.selector.close).on("click.close.pureview.amui",function(e){e.preventDefault(),t.close()}),this.$slider.hammer().on("swipeleft.pureview.amui",function(e){e.preventDefault(),t.nextSlide()}).on("swiperight.pureview.amui",function(e){e.preventDefault(),t.prevSlide()}).on("press.pureview.amui",function(i){i.preventDefault(),e.toggleToolbar&&t.toggleToolBar()}),this.$slider.data("hammer").get("swipe").set({direction:a.DIRECTION_HORIZONTAL,velocity:.35}),i.DOMObserve({childList:!0,subtree:!0},function(t,e){}),i.on("changed.dom.amui",function(e){e.stopPropagation(),t.refreshSlides()}),n(document).on("keydown.pureview.amui",n.proxy(function(t){var e=t.keyCode;37==e?this.prevSlide():39==e?this.nextSlide():27==e&&this.close()},this))},c.prototype.refreshSlides=function(){this.$images=this.$element.find(this.options.target);var t=this,e=this.options,i=this.$pureview,s=n([]),o=n([]),a=this.$images,r=a.length;this.$slider=i.find(e.selector.slider),this.$nav=i.find(e.selector.nav);var l="data-am-pureviewed";this.imgUrls=this.imgUrls||[],r&&(1===r&&i.addClass(e.className.onlyOne),a.not("["+l+"]").each(function(e,i){var a,r;"A"===i.nodeName?(a=i.href,r=i.title||""):(a=n(i).data("rel")||i.src,r=n(i).attr("alt")||""),i.setAttribute(l,"1"),t.imgUrls.push(a),s=s.add(n('<li data-src="'+a+'" data-title="'+r+'"></li>')),o=o.add(n("<li>"+(e+1)+"</li>"))}),i.find(e.selector.total).text(r),this.$slider.append(s),this.$nav.append(o),this.$navItems=this.$nav.find("li"),this.$slides=this.$slider.find("li"))},c.prototype.loadImage=function(t,e){var i="image-appended";if(!t.data(i)){var s=n("<img>",{src:t.data("src"),alt:t.data("title")});t.html(s).wrapInner('<div class="am-pinch-zoom"></div>').redraw();var a=t.find(this.options.selector.pinchZoom);a.data("amui.pinchzoom",new o(a[0],{})),t.data("image-appended",!0)}e&&e.call(this)},c.prototype.activate=function(t){var e=this.options,i=this.$slides,o=i.index(t),a=t.data("title")||"",r=e.className.active;i.find("."+r).is(t)||this.transitioning||(this.loadImage(t,function(){s.utils.imageLoader(t.find("img"),function(e){t.find(".am-pinch-zoom").addClass("am-pureview-loaded"),n(e).addClass("am-img-loaded")})}),this.transitioning=1,this.$title.text(a),this.$current.text(o+1),i.removeClass(),t.addClass(r),i.eq(o-1).addClass(e.className.prevSlide),i.eq(o+1).addClass(e.className.nextSlide),this.$navItems.removeClass().eq(o).addClass(e.className.active),l?t.one(l.end,n.proxy(function(){this.transitioning=0},this)).emulateTransitionEnd(300):this.transitioning=0)},c.prototype.nextSlide=function(){if(1!==this.$slides.length){var t=this.$slides,e=t.filter(".am-active"),i=t.index(e),n="am-animation-right-spring";i+1>=t.length?r&&e.addClass(n).on(r.end,function(){e.removeClass(n)}):this.activate(t.eq(i+1))}},c.prototype.prevSlide=function(){if(1!==this.$slides.length){var t=this.$slides,e=t.filter(".am-active"),i=this.$slides.index(e),n="am-animation-left-spring";0===i?r&&e.addClass(n).on(r.end,function(){e.removeClass(n)}):this.activate(t.eq(i-1))}},c.prototype.toggleToolBar=function(){this.$pureview.toggleClass(this.options.className.barActive)},c.prototype.open=function(t){var e=t||0;this.checkScrollbar(),this.setScrollbar(),this.activate(this.$slides.eq(e)),this.$pureview.show().redraw().addClass(this.options.className.active),this.$body.addClass(this.options.className.activeBody)},c.prototype.close=function(){function t(){this.$pureview.hide(),this.$body.removeClass(e.className.activeBody),this.resetScrollbar()}var e=this.options;this.$pureview.removeClass(e.className.active),this.$slides.removeClass(),l?this.$pureview.one(l.end,n.proxy(t,this)).emulateTransitionEnd(300):t.call(this)},c.prototype.checkScrollbar=function(){this.scrollbarWidth=s.utils.measureScrollbar()},c.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},s.plugin("pureview",c),s.ready(function(t){n("[data-am-pureview]",t).pureview()}),e.exports=c},{14:14,2:2,30:30}],18:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=function(t,e){if(s.support.animation){this.options=n.extend({},o.DEFAULTS,e),this.$element=n(t);var i=function(){s.utils.rAF.call(window,n.proxy(this.checkView,this))}.bind(this);this.$window=n(window).on("scroll.scrollspy.amui",i).on("resize.scrollspy.amui orientationchange.scrollspy.amui",s.utils.debounce(i,50)),this.timer=this.inViewState=this.initInView=null,i()}};o.DEFAULTS={animation:"fade",className:{inView:"am-scrollspy-inview",init:"am-scrollspy-init"},repeat:!0,delay:0,topOffset:0,leftOffset:0},o.prototype.checkView=function(){var t=this.$element,e=this.options,i=s.utils.isInView(t,e),n=e.animation?" am-animation-"+e.animation:"";i&&!this.inViewState&&(this.timer&&clearTimeout(this.timer),this.initInView||(t.addClass(e.className.init),this.offset=t.offset(),this.initInView=!0,t.trigger("init.scrollspy.amui")),this.timer=setTimeout(function(){i&&t.addClass(e.className.inView+n).width()},e.delay),this.inViewState=!0,t.trigger("inview.scrollspy.amui")),!i&&this.inViewState&&e.repeat&&(t.removeClass(e.className.inView+n),this.inViewState=!1,t.trigger("outview.scrollspy.amui"))},o.prototype.check=function(){s.utils.rAF.call(window,n.proxy(this.checkView,this))},s.plugin("scrollspy",o),s.ready(function(t){n("[data-am-scrollspy]",t).scrollspy()}),e.exports=o},{2:2}],19:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2);t(22);var o=function(t,e){this.options=n.extend({},o.DEFAULTS,e),this.$element=n(t),this.anchors=[],this.$links=this.$element.find('a[href^="#"]').each(function(t,e){this.anchors.push(n(e).attr("href"))}.bind(this)),this.$targets=n(this.anchors.join(", "));var i=function(){s.utils.rAF.call(window,n.proxy(this.process,this))}.bind(this);this.$window=n(window).on("scroll.scrollspynav.amui",i).on("resize.scrollspynav.amui orientationchange.scrollspynav.amui",s.utils.debounce(i,50)),i(),this.scrollProcess()};o.DEFAULTS={className:{active:"am-active"},closest:!1,smooth:!0,offsetTop:0},o.prototype.process=function(){var t=this.$window.scrollTop(),e=this.options,i=[],o=this.$links,a=this.$targets;if(a.each(function(t,n){s.utils.isInView(n,e)&&i.push(n)}),i.length){var r;if(n.each(i,function(e,i){return n(i).offset().top>=t?(r=n(i),!1):void 0}),!r)return;e.closest?(o.closest(e.closest).removeClass(e.className.active),o.filter('a[href="#'+r.attr("id")+'"]').closest(e.closest).addClass(e.className.active)):o.removeClass(e.className.active).filter('a[href="#'+r.attr("id")+'"]').addClass(e.className.active)}},o.prototype.scrollProcess=function(){var t=this.$links,e=this.options;e.smooth&&n.fn.smoothScroll&&t.on("click",function(t){t.preventDefault();var i=n(this),s=n(i.attr("href"));if(s){var o=e.offsetTop&&!isNaN(parseInt(e.offsetTop))&&parseInt(e.offsetTop)||0;n(window).smoothScroll({position:s.offset().top-o})}})},s.plugin("scrollspynav",o),s.ready(function(t){n("[data-am-scrollspy-nav]",t).scrollspynav()}),e.exports=o},{2:2,22:22}],20:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2);n.expr[":"].containsNC=function(t,e,i,n){return(t.textContent||t.innerText||"").toLowerCase().indexOf((i[3]||"").toLowerCase())>=0};var o=function(t,e){this.$element=n(t),this.options=n.extend({},o.DEFAULTS,e),this.$originalOptions=this.$element.find("option"),this.multiple=t.multiple,this.$selector=null,this.initialized=!1,this.init()};o.DEFAULTS={btnWidth:null,btnSize:null,btnStyle:"default",dropUp:0,maxHeight:null,placeholder:"\u70b9\u51fb\u9009\u62e9...",selectedClass:"am-checked",disabledClass:"am-disabled",searchBox:!1,tpl:'<div class="am-selected am-dropdown <%= dropUp ? \'am-dropdown-up\': \'\' %>" id="<%= id %>" data-am-dropdown>  <button type="button" class="am-selected-btn am-btn am-dropdown-toggle">    <span class="am-selected-status am-fl"></span>    <i class="am-selected-icon am-icon-caret-<%= dropUp ? \'up\' : \'down\' %>"></i>  </button>  <div class="am-selected-content am-dropdown-content">    <h2 class="am-selected-header"><span class="am-icon-chevron-left">\u8fd4\u56de</span></h2>   <% if (searchBox) { %>   <div class="am-selected-search">     <input autocomplete="off" class="am-form-field am-input-sm" />   </div>   <% } %>    <ul class="am-selected-list">      <% for (var i = 0; i < options.length; i++) { %>       <% var option = options[i] %>       <% if (option.header) { %>  <li data-group="<%= option.group %>" class="am-selected-list-header">       <%= option.text %></li>       <% } else { %>       <li class="<%= option.classNames%>"          data-index="<%= option.index %>"          data-group="<%= option.group || 0 %>"          data-value="<%= option.value %>" >         <span class="am-selected-text"><%= option.text %></span>         <i class="am-icon-check"></i></li>      <% } %>      <% } %>    </ul>    <div class="am-selected-hint"></div>  </div></div>',listTpl:'<% for (var i = 0; i < options.length; i++) { %>       <% var option = options[i] %>       <% if (option.header) { %>  <li data-group="<%= option.group %>" class="am-selected-list-header">       <%= option.text %></li>       <% } else { %>       <li class="<%= option.classNames %>"          data-index="<%= option.index %>"          data-group="<%= option.group || 0 %>"          data-value="<%= option.value %>" >         <span class="am-selected-text"><%= option.text %></span>         <i class="am-icon-check"></i></li>      <% } %>      <% } %>'},o.prototype.init=function(){var t=this,e=this.$element,i=this.options;e.hide();var o={id:s.utils.generateGUID("am-selected"),multiple:this.multiple,options:[],searchBox:i.searchBox,dropUp:i.dropUp,placeholder:i.placeholder};this.$selector=n(s.template(this.options.tpl,o)),this.$selector.css({width:this.options.btnWidth}),this.$list=this.$selector.find(".am-selected-list"),this.$searchField=this.$selector.find(".am-selected-search input"),this.$hint=this.$selector.find(".am-selected-hint");var a=this.$selector.find(".am-selected-btn"),r=[];i.btnSize&&r.push("am-btn-"+i.btnSize),i.btnStyle&&r.push("am-btn-"+i.btnStyle),a.addClass(r.join(" ")),this.$selector.dropdown({justify:a}),i.maxHeight&&this.$selector.find(".am-selected-list").css({"max-height":i.maxHeight,"overflow-y":"scroll"});var l=[],c=e.attr("minchecked"),u=e.attr("maxchecked");e[0].required&&l.push("\u5fc5\u9009"),(c||u)&&(c&&l.push("\u81f3\u5c11\u9009\u62e9 "+c+" \u9879"),u&&l.push("\u81f3\u591a\u9009\u62e9 "+u+" \u9879")),this.$hint.text(l.join("\uff0c")),this.renderOptions(),this.$element.after(this.$selector),this.dropdown=this.$selector.data("amui.dropdown"),this.$status=this.$selector.find(".am-selected-status"),setTimeout(function(){t.syncData(),t.initialized=!0},0),this.bindEvents()},o.prototype.renderOptions=function(){function t(t,e,s){var o="";e.disabled&&(o+=i.disabledClass),!e.disabled&&e.selected&&(o+=i.selectedClass),n.push({group:s,index:t,classNames:o,text:e.text,value:e.value})}var e=this.$element,i=this.options,n=[],o=e.find("optgroup");this.$originalOptions=this.$element.find("option"),this.multiple||null!==e.val()||this.$originalOptions.length&&(this.$originalOptions.get(0).selected=!0),o.length?o.each(function(e){n.push({header:!0,group:e+1,text:this.label}),o.eq(e).find("option").each(function(i,n){t(i,n,e)})}):this.$originalOptions.each(function(e,i){t(e,i,null)}),this.$list.html(s.template(i.listTpl,{options:n})),this.$shadowOptions=this.$list.find("> li").not(".am-selected-list-header")},o.prototype.setChecked=function(t){var e=this.options,i=n(t),s=i.hasClass(e.selectedClass);if(!this.multiple){if(s)return;this.dropdown.close(),this.$shadowOptions.not(i).removeClass(e.selectedClass)}i.toggleClass(e.selectedClass),this.syncData(t)},o.prototype.syncData=function(t){var e=this,i=this.options,s=[],o=n([]);if(this.$shadowOptions.filter("."+i.selectedClass).each(function(){var i=n(this);s.push(i.find(".am-selected-text").text()),t||(o=o.add(e.$originalOptions.filter('[value="'+i.data("value")+'"]').prop("selected",!0)))}),t){var a=n(t);this.$originalOptions.filter('[value="'+a.data("value")+'"]').prop("selected",a.hasClass(i.selectedClass))}else this.$originalOptions.not(o).prop("selected",!1);this.$element.val()||(s=[i.placeholder]),this.$status.text(s.join(", ")),this.initialized&&this.$element.trigger("change")},o.prototype.bindEvents=function(){var t=this,e="am-selected-list-header",i=s.utils.debounce(function(i){t.$shadowOptions.not("."+e).hide().filter(':containsNC("'+i.target.value+'")').show()},100);this.$list.on("click","> li",function(i){var s=n(this);!s.hasClass(t.options.disabledClass)&&!s.hasClass(e)&&t.setChecked(this)}),this.$searchField.on("keyup.selected.amui",i),this.$selector.on("closed.dropdown.amui",function(){t.$searchField.val(""),t.$shadowOptions.css({display:""})}),s.support.mutationobserver&&(this.observer=new s.support.mutationobserver(function(){t.$element.trigger("changed.selected.amui")}),this.observer.observe(this.$element[0],{childList:!0,attributes:!0,subtree:!0,characterData:!0})),this.$element.on("changed.selected.amui",function(){t.renderOptions(),t.syncData()})},o.prototype.destroy=function(){this.$element.removeData("amui.selected").show(),this.$selector.remove()},s.plugin("selected",o),s.ready(function(t){n("[data-am-selected]",t).selected()}),e.exports=o},{2:2}],21:[function(t,e,i){"use strict";t(12);var n=window.jQuery,s=t(2),o=t(31),a=document,r=n(a),l=function(t){this.options=n.extend({},l.DEFAULTS,t||{}),this.$element=null,this.$wechatQr=null,this.pics=null,this.inited=!1,this.active=!1};l.DEFAULTS={sns:["weibo","qq","qzone","tqq","wechat","renren"],title:"\u5206\u4eab\u5230",cancel:"\u53d6\u6d88",closeOnShare:!0,id:s.utils.generateGUID("am-share"),desc:"Hi\uff0c\u5b64\u591c\u89c2\u5929\u8c61\uff0c\u53d1\u73b0\u4e00\u4e2a\u4e0d\u9519\u7684\u897f\u897f\uff0c\u5206\u4eab\u4e00\u4e0b\u4e0b ;-)",via:"Amaze UI",tpl:'<div class="am-share am-modal-actions" id="<%= id %>"><h3 class="am-share-title"><%= title %></h3><ul class="am-share-sns am-avg-sm-3"><% for(var i = 0; i < sns.length; i++) {%><li><a href="<%= sns[i].shareUrl %>" data-am-share-to="<%= sns[i].id %>" ><i class="am-icon-<%= sns[i].icon %>"></i><span><%= sns[i].title %></span></a></li><% } %></ul><div class="am-share-footer"><button class="am-btn am-btn-default am-btn-block" data-am-share-close><%= cancel %></button></div></div>'},l.SNS={weibo:{title:"\u65b0\u6d6a\u5fae\u535a",url:"http://service.weibo.com/share/share.php",width:620,height:450,icon:"weibo"},qq:{title:"QQ \u597d\u53cb",url:"http://connect.qq.com/widget/shareqq/index.html",icon:"qq"},qzone:{title:"QQ \u7a7a\u95f4",url:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",icon:"star"},tqq:{title:"\u817e\u8baf\u5fae\u535a",url:"http://v.t.qq.com/share/share.php",icon:"tencent-weibo"},wechat:{title:"\u5fae\u4fe1",url:"[qrcode]",icon:"wechat"},renren:{title:"\u4eba\u4eba\u7f51",url:"http://widget.renren.com/dialog/share",icon:"renren"},douban:{title:"\u8c46\u74e3",url:"http://www.douban.com/recommend/",icon:"share-alt"},mail:{title:"\u90ae\u4ef6\u5206\u4eab",url:"mailto:",icon:"envelope-o"},sms:{title:"\u77ed\u4fe1\u5206\u4eab",url:"sms:",icon:"comment"}},l.prototype.render=function(){var t=this.options,e=[],i=encodeURIComponent(a.title),o=encodeURIComponent(a.location),r="?body="+i+o;return t.sns.forEach(function(n,s){if(l.SNS[n]){var a,c=l.SNS[n];c.id=n,a="mail"===n?r+"&subject="+t.desc:"sms"===n?r:"?url="+o+"&title="+i,c.shareUrl=c.url+a,e.push(c)}}),s.template(t.tpl,n.extend({},t,{sns:e}))},l.prototype.init=function(){if(!this.inited){var t=this,e="[data-am-share-to]";r.ready(n.proxy(function(){n("body").append(this.render()),this.$element=n("#"+this.options.id),this.$element.find("[data-am-share-close]").on("click.share.amui",function(){t.close()})},this)),r.on("click.share.amui",e,n.proxy(function(t){var i=n(t.target),s=i.is(e)&&i||i.parent(e),o=s.attr("data-am-share-to");"mail"!==o&&"sms"!==o&&(t.preventDefault(),this.shareTo(o,this.setData(o))),this.close()},this)),this.inited=!0}},l.prototype.open=function(){!this.inited&&this.init(),this.$element&&this.$element.modal("open"),this.$element.trigger("open.share.amui"),this.active=!0},l.prototype.close=function(){this.$element&&this.$element.modal("close"),this.$element.trigger("close.share.amui"),this.active=!1},l.prototype.toggle=function(){this.active?this.close():this.open()},l.prototype.setData=function(t){if(t){var e={url:a.location,title:a.title},i=this.options.desc,n=this.pics||[],s=/^(qzone|qq|tqq)$/;if(s.test(t)&&!n.length){for(var o=a.images,r=0;r<o.length&&10>r;r++)!!o[r].src&&n.push(encodeURIComponent(o[r].src));this.pics=n}switch(t){case"qzone":e.desc=i,e.site=this.options.via,e.pics=n.join("|");break;case"qq":e.desc=i,e.site=this.options.via,e.pics=n[0];break;case"tqq":e.pic=n.join("|")}return e}},l.prototype.shareTo=function(t,e){var i=l.SNS[t];if(i){if("wechat"===t||"weixin"===t)return this.wechatQr();var n=[];for(var s in e)e[s]&&n.push(s.toString()+"="+("pic"===s||"pics"===s?e[s]:encodeURIComponent(e[s])));window.open(i.url+"?"+n.join("&"))}},l.prototype.wechatQr=function(){if(!this.$wechatQr){var t=s.utils.generateGUID("am-share-wechat"),e=n('<div class="am-modal am-modal-no-btn am-share-wechat-qr"><div class="am-modal-dialog"><div class="am-modal-hd">\u5206\u4eab\u5230\u5fae\u4fe1 <a href="" class="am-close am-close-spin" data-am-modal-close>&times;</a> </div><div class="am-modal-bd"><div class="am-share-wx-qr"></div><div class="am-share-wechat-tip">\u6253\u5f00\u5fae\u4fe1\uff0c\u70b9\u51fb\u5e95\u90e8\u7684<em>\u53d1\u73b0</em>\uff0c<br/> \u4f7f\u7528<em>\u626b\u4e00\u626b</em>\u5c06\u7f51\u9875\u5206\u4eab\u81f3\u670b\u53cb\u5708</div></div></div></div>');e.attr("id",t);var i=new o({render:"canvas",correctLevel:0,text:a.location.href,width:180,height:180,background:"#fff",foreground:"#000"});e.find(".am-share-wx-qr").html(i),e.appendTo(n("body")),this.$wechatQr=n("#"+t)}this.$wechatQr.modal("open")};var c=new l;r.on("click.share.amui.data-api",'[data-am-toggle="share"]',function(t){t.preventDefault(),c.toggle()}),e.exports=s.share=c},{12:12,2:2,31:31}],22:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=s.utils.rAF,a=s.utils.cancelAF,r=!1,l=function(t,e){function i(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)}function s(){p.off("touchstart.smoothscroll.amui",y),r=!1}function c(t){r&&(u||(u=t),h=Math.min(1,Math.max((t-u)/w,0)),d=Math.round(f+g*i(h)),g>0&&d>m&&(d=m),0>g&&m>d&&(d=m),v!=d&&p.scrollTop(d),v=d,d!==m?(a(b),b=o(c)):(a(b),s()))}e=e||{};var u,h,d,p=n(t),m=parseInt(e.position)||l.DEFAULTS.position,f=p.scrollTop(),v=f,g=m-f,w=e.speed||Math.min(750,Math.min(1500,Math.abs(f-m))),y=function(){s()};if(!r&&0!==g){p.on("touchstart.smoothscroll.amui",y),r=!0;var b=o(c)}};l.DEFAULTS={position:0},n.fn.smoothScroll=function(t){return this.each(function(){new l(this,t)})},n(document).on("click.smoothScroll.amui.data-api","[data-am-smooth-scroll]",function(t){t.preventDefault();var e=s.utils.parseOptions(n(this).data("amSmoothScroll"));n(window).smoothScroll(e)}),e.exports=l},{2:2}],23:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=function(t,e){var i=this;this.options=n.extend({},o.DEFAULTS,e),this.$element=n(t),this.sticked=null,this.inited=null,this.$holder=void 0,this.$window=n(window).on("scroll.sticky.amui",s.utils.debounce(n.proxy(this.checkPosition,this),10)).on("resize.sticky.amui orientationchange.sticky.amui",s.utils.debounce(function(){i.reset(!0,function(){i.checkPosition()})},50)).on("load.sticky.amui",n.proxy(this.checkPosition,this)),this.offset=this.$element.offset(),this.init()};o.DEFAULTS={top:0,bottom:0,animation:"",className:{sticky:"am-sticky",resetting:"am-sticky-resetting",stickyBtm:"am-sticky-bottom",animationRev:"am-animation-reverse"}},o.prototype.init=function(){var t=this.check();if(!t)return!1;var e=this.$element,i="";n.each(e.css(["marginTop","marginRight","marginBottom","marginLeft"]),function(t,e){return i+=" "+e});var s=n('<div class="am-sticky-placeholder"></div>').css({height:"absolute"!==e.css("position")?e.outerHeight():"","float":"none"!=e.css("float")?e.css("float"):"",margin:i});return this.$holder=e.css("margin",0).wrap(s).parent(),this.inited=1,!0},o.prototype.reset=function(t,e){var i=this.options,n=this.$element,o=i.animation?" am-animation-"+i.animation:"",a=function(){n.css({position:"",top:"",width:"",left:"",margin:0}),n.removeClass([o,i.className.animationRev,i.className.sticky,i.className.resetting].join(" ")),this.animating=!1,this.sticked=!1,this.offset=n.offset(),e&&e()}.bind(this);n.addClass(i.className.resetting),!t&&i.animation&&s.support.animation?(this.animating=!0,n.removeClass(o).one(s.support.animation.end,function(){a()}).width(),n.addClass(o+" "+i.className.animationRev)):a()},o.prototype.check=function(){if(!this.$element.is(":visible"))return!1;var t=this.options.media;if(t)switch(typeof t){case"number":if(window.innerWidth<t)return!1;break;case"string":if(window.matchMedia&&!window.matchMedia(t).matches)return!1}return!0},o.prototype.checkPosition=function(){if(!this.inited){var t=this.init();if(!t)return}var e=this.options,i=this.$window.scrollTop(),n=e.top,s=e.bottom,o=this.$element,a=e.animation?" am-animation-"+e.animation:"",r=[e.className.sticky,a].join(" ");"function"==typeof s&&(s=s(this.$element));var l=i>this.$holder.offset().top;!this.sticked&&l?o.addClass(r):this.sticked&&!l&&this.reset(),this.$holder.css({height:o.is(":visible")&&"absolute"!==o.css("position")?o.outerHeight():""}),l&&o.css({top:n,left:this.$holder.offset().left,width:this.$holder.width()}),this.sticked=l},s.plugin("sticky",o),n(window).on("load",function(){n("[data-am-sticky]").sticky()}),e.exports=o},{2:2}],24:[function(t,e,i){"use strict";function n(t){var e,i=Array.prototype.slice.call(arguments,1);return this.each(function(){var n=s(this),a=n.is(".am-tabs")&&n||n.closest(".am-tabs"),r=a.data("amui.tabs"),l=s.extend({},o.utils.parseOptions(n.data("amTabs")),s.isPlainObject(t)&&t);r||a.data("amui.tabs",r=new c(a[0],l)),"string"==typeof t&&("open"===t&&n.is(".am-tabs-nav a")?r.open(n):e="function"==typeof r[t]?r[t].apply(r,i):r[t])}),void 0===e?this:e}var s=window.jQuery,o=t(2),a=t(30),r=o.support.transition,l=o.support.animation,c=function(t,e){this.$element=s(t),this.options=s.extend({},c.DEFAULTS,e||{}),this.transitioning=this.activeIndex=null,this.refresh(),this.init()};c.DEFAULTS={selector:{nav:"> .am-tabs-nav",content:"> .am-tabs-bd",panel:"> .am-tab-panel"},activeClass:"am-active"},c.prototype.refresh=function(){var t=this.options.selector;this.$tabNav=this.$element.find(t.nav),this.$navs=this.$tabNav.find("a"),this.$content=this.$element.find(t.content),this.$tabPanels=this.$content.find(t.panel);var e=this.$tabNav.find("> ."+this.options.activeClass);1!==e.length?this.open(0):this.activeIndex=this.$navs.index(e.children("a"))},c.prototype.init=function(){var t=this,e=this.options;if(this.$element.on("click.tabs.amui",e.selector.nav+" a",function(e){e.preventDefault(),t.open(s(this))}),!e.noSwipe){if(!this.$content.length)return this;

var i=new a.Manager(this.$content[0]),n=new a.Swipe({direction:a.DIRECTION_HORIZONTAL});i.add(n),i.on("swipeleft",o.utils.debounce(function(e){e.preventDefault(),t.goTo("next")},100)),i.on("swiperight",o.utils.debounce(function(e){e.preventDefault(),t.goTo("prev")},100)),this._hammer=i}},c.prototype.open=function(t){var e=this.options.activeClass,i="number"==typeof t?t:this.$navs.index(s(t));if(t="number"==typeof t?this.$navs.eq(i):s(t),t&&t.length&&!this.transitioning&&!t.parent("li").hasClass(e)){var n=this.$tabNav,o=t.attr("href"),a=/^#.+$/,r=a.test(o)&&this.$content.find(o)||this.$tabPanels.eq(i),l=n.find("."+e+" a")[0],c=s.Event("open.tabs.amui",{relatedTarget:l});t.trigger(c),c.isDefaultPrevented()||(this.activate(t.closest("li"),n),this.activate(r,this.$content,function(){t.trigger({type:"opened.tabs.amui",relatedTarget:l})}),this.activeIndex=i)}},c.prototype.activate=function(t,e,i){this.transitioning=!0;var n=this.options.activeClass,o=e.find("> ."+n),a=i&&r&&!!o.length;o.removeClass(n+" am-in"),t.addClass(n),a?(t.redraw(),t.addClass("am-in")):t.removeClass("am-fade");var l=s.proxy(function(){i&&i(),this.transitioning=!1},this);a?o.one(r.end,l):l()},c.prototype.goTo=function(t){var e=this.activeIndex,i="next"===t,n=i?"am-animation-right-spring":"am-animation-left-spring";if(i&&e+1>=this.$navs.length||!i&&0===e){var s=this.$tabPanels.eq(e);l&&s.addClass(n).on(l.end,function(){s.removeClass(n)})}else this.open(i?e+1:e-1)},c.prototype.destroy=function(){this.$element.off(".tabs.amui"),a.off(this.$content[0],"swipeleft swiperight"),this._hammer&&this._hammer.destroy(),s.removeData(this.$element,"amui.tabs")},s.fn.tabs=n,o.ready(function(t){s("[data-am-tabs]",t).tabs()}),s(document).on("click.tabs.amui.data-api","[data-am-tabs] .am-tabs-nav a",function(t){t.preventDefault(),n.call(s(this),"open")}),e.exports=o.tabs=c},{2:2,30:30}],25:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=function(t,e){this.options=n.extend({},o.DEFAULTS,e),this.$element=n(t),this.init()};o.DEFAULTS={checkboxClass:"am-ucheck-checkbox",radioClass:"am-ucheck-radio",checkboxTpl:'<span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span>',radioTpl:'<span class="am-ucheck-icons"><i class="am-icon-unchecked"></i><i class="am-icon-checked"></i></span>'},o.prototype.init=function(){var t=this.$element,e=t[0],i=this.options;"checkbox"===e.type?t.addClass(i.checkboxClass).after(i.checkboxTpl):"radio"===e.type&&t.addClass(i.radioClass).after(i.radioTpl)},o.prototype.check=function(){this.$element.prop("checked",!0).trigger("change.ucheck.amui").trigger("checked.ucheck.amui")},o.prototype.uncheck=function(){this.$element.prop("checked",!1).trigger("change.ucheck.amui").trigger("unchecked.ucheck.amui")},o.prototype.toggle=function(){this.$element.prop("checked",function(t,e){return!e}).trigger("change.ucheck.amui").trigger("toggled.ucheck.amui")},o.prototype.disable=function(){this.$element.prop("disabled",!0).trigger("change.ucheck.amui").trigger("disabled.ucheck.amui")},o.prototype.enable=function(){this.$element.prop("disabled",!1),this.$element.trigger("change.ucheck.amui").trigger("enabled.ucheck.amui")},o.prototype.destroy=function(){this.$element.removeData("amui.ucheck").removeClass(this.options.checkboxClass+" "+this.options.radioClass).next(".am-ucheck-icons").remove().end().trigger("destroyed.ucheck.amui")},s.plugin("uCheck",o,{after:function(){s.support.touch&&this.parent().hover(function(){this.addClass("am-nohover")},function(){this.removeClass("am-nohover")})}}),s.ready(function(t){n("[data-am-ucheck]",t).uCheck()}),e.exports=o},{2:2}],26:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=function(t,e){this.options=n.extend({},o.DEFAULTS,e),this.options.patterns=n.extend({},o.patterns,this.options.patterns);var i=this.options.locales;!o.validationMessages[i]&&(this.options.locales="zh_CN"),this.$element=n(t),this.init()};o.DEFAULTS={debug:!1,locales:"zh_CN",H5validation:!1,H5inputType:["email","url","number"],patterns:{},patternClassPrefix:"js-pattern-",activeClass:"am-active",inValidClass:"am-field-error",validClass:"am-field-valid",validateOnSubmit:!0,allFields:":input:visible:not(:submit, :button, :disabled, .am-novalidate)",customEvents:"validate",keyboardFields:":input:not(:submit, :button, :disabled, .am-novalidate)",keyboardEvents:"focusout, change",activeKeyup:!1,textareaMaxlenthKeyup:!0,pointerFields:'input[type="range"]:not(:disabled, .am-novalidate), input[type="radio"]:not(:disabled, .am-novalidate), input[type="checkbox"]:not(:disabled, .am-novalidate), select:not(:disabled, .am-novalidate), option:not(:disabled, .am-novalidate)',pointerEvents:"click",onValid:function(t){},onInValid:function(t){},markValid:function(t){var e=this.options,i=n(t.field),s=i.closest(".am-form-group");i.addClass(e.validClass).removeClass(e.inValidClass),s.addClass("am-form-success").removeClass("am-form-error"),e.onValid.call(this,t)},markInValid:function(t){var e=this.options,i=n(t.field),s=i.closest(".am-form-group");i.addClass(e.inValidClass+" "+e.activeClass).removeClass(e.validClass),s.addClass("am-form-error").removeClass("am-form-success"),e.onInValid.call(this,t)},validate:function(t){},submit:null},o.VERSION="2.4.1",o.patterns={email:/^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/,url:/^(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,number:/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,integer:/^-?\d+$/},o.validationMessages={zh_CN:{valueMissing:"\u8bf7\u586b\u5199\uff08\u9009\u62e9\uff09\u6b64\u5b57\u6bb5",customError:{tooShort:"\u81f3\u5c11\u586b\u5199 %s \u4e2a\u5b57\u7b26",checkedOverflow:"\u81f3\u591a\u9009\u62e9 %s \u9879",checkedUnderflow:"\u81f3\u5c11\u9009\u62e9 %s \u9879"},patternMismatch:"\u8bf7\u6309\u7167\u8981\u6c42\u7684\u683c\u5f0f\u586b\u5199",rangeOverflow:"\u8bf7\u586b\u5199\u5c0f\u4e8e\u7b49\u4e8e %s \u7684\u503c",rangeUnderflow:"\u8bf7\u586b\u5199\u5927\u4e8e\u7b49\u4e8e %s \u7684\u503c",stepMismatch:"",tooLong:"\u81f3\u591a\u586b\u5199 %s \u4e2a\u5b57\u7b26",typeMismatch:"\u8bf7\u6309\u7167\u8981\u6c42\u7684\u7c7b\u578b\u586b\u5199"}},o.ERROR_MAP={tooShort:"minlength",checkedOverflow:"maxchecked",checkedUnderflow:"minchecked",rangeOverflow:"max",rangeUnderflow:"min",tooLong:"maxlength"},o.prototype.init=function(){function t(t){var e=t.toString();return e.substring(1,e.length-1)}function e(t,e,a){var r=e.split(","),l=function(t){i.validate(this)};a&&(l=s.utils.debounce(l,a)),n.each(r,function(e,i){o.on(i+".validator.amui",t,l)})}var i=this,o=this.$element,a=this.options;return a.H5validation&&s.support.formValidation?!1:(o.attr("novalidate","novalidate"),n.each(a.H5inputType,function(e,i){var n=o.find("input[type="+i+"]");n.attr("pattern")||n.is("[class*="+a.patternClassPrefix+"]")||n.attr("pattern",t(a.patterns[i]))}),n.each(a.patterns,function(e,i){var n=o.find("."+a.patternClassPrefix+e);!n.attr("pattern")&&n.attr("pattern",t(i))}),o.submit(function(t){if("function"==typeof a.submit)return a.submit.call(i,t);if(a.validateOnSubmit){var e=i.isFormValid();return"boolean"===n.type(e)?e:o.data("amui.checked")?!0:(n.when(e).then(function(){o.data("amui.checked",!0).submit()},function(){o.data("amui.checked",!1).find("."+a.inValidClass).eq(0).focus()}),!1)}}),e(":input",a.customEvents),e(a.keyboardFields,a.keyboardEvents),e(a.pointerFields,a.pointerEvents),a.textareaMaxlenthKeyup&&e("textarea[maxlength]","keyup",50),void(a.activeKeyup&&e(".am-active","keyup",50)))},o.prototype.isValid=function(t){var e=n(t);return void 0===e.data("validity")&&this.validate(t),e.data("validity")&&e.data("validity").valid},o.prototype.validate=function(t){var e=this,i=this.$element,s=this.options,o=n(t),a=o.data("equalTo");a&&o.attr("pattern","^"+i.find(a).val()+"$");var r=o.attr("pattern")||!1,l=new RegExp(r),c=null,u=null,h=o.is("[type=checkbox]")?(u=i.find('input[name="'+t.name+'"]')).filter(":checked").length:o.is("[type=radio]")?(c=this.$element.find('input[name="'+t.name+'"]')).filter(":checked").length>0:o.val();o=u&&u.length?u.first():o;var d=void 0!==o.attr("required")&&"false"!==o.attr("required"),p=parseInt(o.attr("maxlength"),10),m=parseInt(o.attr("minlength"),10),f=Number(o.attr("min")),v=Number(o.attr("max")),g=this.createValidity({field:o[0],valid:!0});if(s.debug&&window.console&&(console.log("Validate: value -> ["+h+", regex -> ["+l+"], required -> "+d),console.log("Regex test: "+l.test(h)+", Pattern: "+r)),!isNaN(p)&&h.length>p&&(g.valid=!1,g.tooLong=!0),!isNaN(m)&&h.length<m&&(g.valid=!1,g.customError="tooShort"),!isNaN(f)&&Number(h)<f&&(g.valid=!1,g.rangeUnderflow=!0),!isNaN(v)&&Number(h)>v&&(g.valid=!1,g.rangeOverflow=!0),d&&!h)g.valid=!1,g.valueMissing=!0;else if((u||o.is('select[multiple="multiple"]'))&&h){h=u?h:h.length;var w=parseInt(o.attr("minchecked"),10),y=parseInt(o.attr("maxchecked"),10);!isNaN(w)&&w>h&&(g.valid=!1,g.customError="checkedUnderflow"),!isNaN(y)&&h>y&&(g.valid=!1,g.customError="checkedOverflow")}else r&&!l.test(h)&&h&&(g.valid=!1,g.patternMismatch=!0);var b,T=function(t){this.markField(t),o.trigger("validated.field.validator.amui",t).data("validity",t);var i=c||u;return i&&i.not(o).data("validity",t).each(function(){t.field=this,e.markField(t)}),t};if("function"==typeof s.validate&&(b=s.validate.call(this,g)),b){var x=new n.Deferred;return o.data("amui.dfdValidity",x.promise()),n.when(b).always(function(t){x[t.valid?"resolve":"reject"](t),T.call(e,t)})}T.call(this,g)},o.prototype.markField=function(t){var e=this.options,i="mark"+(t.valid?"":"In")+"Valid";e[i]&&e[i].call(this,t)},o.prototype.validateForm=function(){var t=this,e=this.$element,i=this.options,s=e.find(i.allFields),o=[],a=!0,r=[],l=n([]),c=[],u=!1;e.trigger("validate.form.validator.amui");var h=s.filter(function(t){var e;if("INPUT"===this.tagName&&"radio"===this.type){if(e=this.name,o[e]===!0)return!1;o[e]=!0}return!0});h.each(function(){var i=n(this),s=t.isValid(this),o=i.data("validity");a=!!s&&a,r.push(o),s||(l=l.add(n(this),e));var h=i.data("amui.dfdValidity");if(h)c.push(h),u=!0;else{var d=new n.Deferred;c.push(d.promise()),d[s?"resolve":"reject"](o)}});var d={valid:a,$invalidFields:l,validity:r,promises:c,async:u};return e.trigger("validated.form.validator.amui",d),d},o.prototype.isFormValid=function(){var t=this,e=this.validateForm(),i=function(e){t.$element.trigger(e+".validator.amui")};if(e.async){var s=new n.Deferred;return n.when.apply(null,e.promises).then(function(){s.resolve(),i("valid")},function(){s.reject(),i("invalid")}),s.promise()}return e.valid?(i("valid"),!0):(e.$invalidFields.first().focus(),i("invalid"),!1)},o.prototype.createValidity=function(t){return n.extend({customError:t.customError||!1,patternMismatch:t.patternMismatch||!1,rangeOverflow:t.rangeOverflow||!1,rangeUnderflow:t.rangeUnderflow||!1,stepMismatch:t.stepMismatch||!1,tooLong:t.tooLong||!1,typeMismatch:t.typeMismatch||!1,valid:t.valid||!0,valueMissing:t.valueMissing||!1},t)},o.prototype.getValidationMessage=function(t){var e,i,s=o.validationMessages[this.options.locales],a="%s",r=n(t.field);return(r.is('[type="checkbox"]')||r.is('[type="radio"]'))&&(r=this.$element.find("[name="+r.attr("name")+"]").first()),n.each(t,function(t,i){return"field"===t||"valid"===t?t:"customError"===t&&i?(e=i,s=s.customError,!1):i===!0?(e=t,!1):void 0}),i=s[e]||void 0,i&&o.ERROR_MAP[e]&&(i=i.replace(a,r.attr(o.ERROR_MAP[e])||"\u89c4\u5b9a\u7684")),i},o.prototype.removeMark=function(){this.$element.find(".am-form-success, .am-form-error, .am-field-error").removeClass("am-form-success am-form-error am-field-error")},s.plugin("validator",o),s.ready(function(t){n("[data-am-validator]",t).validator()}),e.exports=o},{2:2}],27:[function(t,e,i){"use strict";var n=t(2),s={get:function(t){var e,i=encodeURIComponent(t)+"=",n=document.cookie.indexOf(i),s=null;return n>-1&&(e=document.cookie.indexOf(";",n),-1==e&&(e=document.cookie.length),s=decodeURIComponent(document.cookie.substring(n+i.length,e))),s},set:function(t,e,i,n,s,o){var a=encodeURIComponent(t)+"="+encodeURIComponent(e);i instanceof Date&&(a+="; expires="+i.toUTCString()),n&&(a+="; path="+n),s&&(a+="; domain="+s),o&&(a+="; secure"),document.cookie=a},unset:function(t,e,i,n){this.set(t,"",new Date(0),e,i,n)}};n.utils=n.utils||{},e.exports=n.utils.cookie=s},{2:2}],28:[function(t,e,i){"use strict";var n=t(2),s=function(){var t="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,e=function(){for(var t,e,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,s=i.length,o={};s>n;n++)if(t=i[n],t&&t[1]in document){for(n=0,e=t.length;e>n;n++)o[i[0][n]]=t[n];return o}return!1}(),i={request:function(i){var n=e.requestFullscreen;i=i||document.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?i[n]():i[n](t&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){document[e.exitFullscreen]()},toggle:function(t){this.isFullscreen?this.exit():this.request(t)},raw:e};return e?(Object.defineProperties(i,{isFullscreen:{get:function(){return!!document[e.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return!!document[e.fullscreenEnabled]}}}),i.VERSION="2.0.0",i):!1}();e.exports=n.fullscreen=s},{2:2}],29:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2);s.support.geolocation=window.navigator&&window.navigator.geolocation;var o=s.support.geolocation,a=function(t){this.options=t||{}};a.MESSAGES={unsupportedBrowser:"Browser does not support location services",permissionDenied:"You have rejected access to your location",positionUnavailable:"Unable to determine your location",timeout:"Service timeout has been reached"},a.ERROR_CODE={0:"unsupportedBrowser",1:"permissionDenied",2:"positionUnavailable",3:"timeout"},a.prototype.get=function(t){var e=this;t=n.extend({},this.options,t);var i=new n.Deferred;return o?this.watchID=o.getCurrentPosition(function(t){i.resolve.call(e,t)},function(t){i.reject(a.MESSAGES[a.ERROR_CODE[t.code]])},t):i.reject(a.MESSAGES.unsupportedBrowser),i.promise()},a.prototype.watch=function(t){if(o&&(t=n.extend({},this.options,t),n.isFunction(t.done))){this.clearWatch();var e=n.isFunction(t.fail)?t.fail:null;return this.watchID=o.watchPosition(t.done,e,t),this.watchID}},a.prototype.clearWatch=function(){o&&this.watchID&&(o.clearWatch(this.watchID),this.watchID=null)},e.exports=s.Geolocation=a},{2:2}],30:[function(t,e,i){"use strict";function n(t,e,i){return setTimeout(c(t,i),e)}function s(t,e,i){return Array.isArray(t)?(o(t,i[e],i),!0):!1}function o(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(void 0!==t.length)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function a(t,e,i){for(var n=Object.keys(e),s=0;s<n.length;)(!i||i&&void 0===t[n[s]])&&(t[n[s]]=e[n[s]]),s++;return t}function r(t,e){return a(t,e,!0)}function l(t,e,i){var n,s=e.prototype;n=t.prototype=Object.create(s),n.constructor=t,n._super=s,i&&a(n,i)}function c(t,e){return function(){return t.apply(e,arguments)}}function u(t,e){return typeof t==ht?t.apply(e?e[0]||void 0:void 0,e):t}function h(t,e){return void 0===t?e:t}function d(t,e,i){o(v(e),function(e){t.addEventListener(e,i,!1)})}function p(t,e,i){o(v(e),function(e){t.removeEventListener(e,i,!1)})}function m(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function f(t,e){return t.indexOf(e)>-1}function v(t){return t.trim().split(/\s+/g)}function g(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function w(t){return Array.prototype.slice.call(t,0)}function y(t,e,i){for(var n=[],s=[],o=0;o<t.length;){var a=e?t[o][e]:t[o];g(s,a)<0&&n.push(t[o]),s[o]=a,o++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function b(t,e){for(var i,n,s=e[0].toUpperCase()+e.slice(1),o=0;o<ct.length;){if(i=ct[o],n=i?i+s:e,n in t)return n;o++}return void 0}function T(){return ft++}function x(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function C(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){u(t.options.enable,[t])&&i.handler(e)},this.init()}function E(t){var e,i=t.options.inputClass;return new(e=i?i:wt?_:yt?W:gt?B:z)(t,S)}function S(t,e,i){var n=i.pointers.length,s=i.changedPointers.length,o=e&St&&n-s===0,a=e&(Dt|Ft)&&n-s===0;i.isFirst=!!o,i.isFinal=!!a,o&&(t.session={}),i.eventType=e,k(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function k(t,e){var i=t.session,n=e.pointers,s=n.length;i.firstInput||(i.firstInput=A(e)),s>1&&!i.firstMultiple?i.firstMultiple=A(e):1===s&&(i.firstMultiple=!1);var o=i.firstInput,a=i.firstMultiple,r=a?a.center:o.center,l=e.center=M(n);e.timeStamp=mt(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=I(r,l),e.distance=N(r,l),D(i,e),e.offsetDirection=P(e.deltaX,e.deltaY),e.scale=a?L(a.pointers,n):1,e.rotation=a?O(a.pointers,n):0,F(i,e);var c=t.element;m(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function D(t,e){var i=e.center,n=t.offsetDelta||{},s=t.prevDelta||{},o=t.prevInput||{};(e.eventType===St||o.eventType===Dt)&&(s=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=s.x+(i.x-n.x),e.deltaY=s.y+(i.y-n.y)}function F(t,e){var i,n,s,o,a=t.lastInterval||e,r=e.timeStamp-a.timeStamp;if(e.eventType!=Ft&&(r>Et||void 0===a.velocity)){var l=a.deltaX-e.deltaX,c=a.deltaY-e.deltaY,u=$(r,l,c);n=u.x,s=u.y,i=pt(u.x)>pt(u.y)?u.x:u.y,o=P(l,c),t.lastInterval=e}else i=a.velocity,n=a.velocityX,s=a.velocityY,o=a.direction;e.velocity=i,e.velocityX=n,e.velocityY=s,e.direction=o}function A(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:dt(t.pointers[i].clientX),clientY:dt(t.pointers[i].clientY)},i++;return{timeStamp:mt(),pointers:e,center:M(e),deltaX:t.deltaX,deltaY:t.deltaY}}function M(t){var e=t.length;if(1===e)return{x:dt(t[0].clientX),y:dt(t[0].clientY)};for(var i=0,n=0,s=0;e>s;)i+=t[s].clientX,n+=t[s].clientY,s++;return{x:dt(i/e),y:dt(n/e)}}function $(t,e,i){return{x:e/t||0,y:i/t||0}}function P(t,e){return t===e?At:pt(t)>=pt(e)?t>0?Mt:$t:e>0?Pt:Nt}function N(t,e,i){i||(i=zt);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return Math.sqrt(n*n+s*s)}function I(t,e,i){i||(i=zt);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return 180*Math.atan2(s,n)/Math.PI}function O(t,e){return I(e[1],e[0],_t)-I(t[1],t[0],_t)}function L(t,e){return N(e[0],e[1],_t)/N(t[0],t[1],_t)}function z(){this.evEl=qt,this.evWin=Wt,this.allow=!0,this.pressed=!1,C.apply(this,arguments)}function _(){this.evEl=Ut,this.evWin=Vt,C.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function R(){this.evTarget=Xt,this.evWin=Yt,this.started=!1,C.apply(this,arguments)}function q(t,e){var i=w(t.touches),n=w(t.changedTouches);return e&(Dt|Ft)&&(i=y(i.concat(n),"identifier",!0)),[i,n]}function W(){this.evTarget=Qt,this.targetIds={},C.apply(this,arguments)}function H(t,e){var i=w(t.touches),n=this.targetIds;if(e&(St|kt)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var s,o,a=w(t.changedTouches),r=[],l=this.target;if(o=i.filter(function(t){return m(t.target,l)}),e===St)for(s=0;s<o.length;)n[o[s].identifier]=!0,s++;for(s=0;s<a.length;)n[a[s].identifier]&&r.push(a[s]),e&(Dt|Ft)&&delete n[a[s].identifier],s++;return r.length?[y(o.concat(r),"identifier",!0),r]:void 0}function B(){C.apply(this,arguments);var t=c(this.handler,this);this.touch=new W(this.manager,t),this.mouse=new z(this.manager,t)}function U(t,e){this.manager=t,this.set(e)}function V(t){if(f(t,ie))return ie;var e=f(t,ne),i=f(t,se);return e&&i?ne+" "+se:e||i?e?ne:se:f(t,ee)?ee:te}function j(t){this.id=T(),this.manager=null,this.options=r(t||{},this.defaults),this.options.enable=h(this.options.enable,!0),this.state=oe,this.simultaneous={},this.requireFail=[]}function X(t){return t&ue?"cancel":t&le?"end":t&re?"move":t&ae?"start":""}function Y(t){return t==Nt?"down":t==Pt?"up":t==Mt?"left":t==$t?"right":""}function Z(t,e){var i=e.manager;return i?i.get(t):t}function Q(){j.apply(this,arguments)}function G(){Q.apply(this,arguments),this.pX=null,this.pY=null}function J(){Q.apply(this,arguments)}function K(){j.apply(this,arguments),this._timer=null,this._input=null}function tt(){Q.apply(this,arguments)}function et(){Q.apply(this,arguments)}function it(){j.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function nt(t,e){return e=e||{},e.recognizers=h(e.recognizers,nt.defaults.preset),new st(t,e)}function st(t,e){e=e||{},this.options=r(e,nt.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=E(this),this.touchAction=new U(this,this.options.touchAction),ot(this,!0),o(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ot(t,e){var i=t.element;o(t.options.cssProps,function(t,n){i.style[b(i.style,n)]=e?t:""})}function at(t,e){var i=document.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}var rt=window.jQuery,lt=t(2),ct=["","webkit","moz","MS","ms","o"],ut=document.createElement("div"),ht="function",dt=Math.round,pt=Math.abs,mt=Date.now,ft=1,vt=/mobile|tablet|ip(ad|hone|od)|android/i,gt="ontouchstart"in window,wt=void 0!==b(window,"PointerEvent"),yt=gt&&vt.test(navigator.userAgent),bt="touch",Tt="pen",xt="mouse",Ct="kinect",Et=25,St=1,kt=2,Dt=4,Ft=8,At=1,Mt=2,$t=4,Pt=8,Nt=16,It=Mt|$t,Ot=Pt|Nt,Lt=It|Ot,zt=["x","y"],_t=["clientX","clientY"];C.prototype={handler:function(){},init:function(){this.evEl&&d(this.element,this.evEl,this.domHandler),this.evTarget&&d(this.target,this.evTarget,this.domHandler),this.evWin&&d(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&p(this.element,this.evEl,this.domHandler),this.evTarget&&p(this.target,this.evTarget,this.domHandler),this.evWin&&p(x(this.element),this.evWin,this.domHandler)}};var Rt={mousedown:St,mousemove:kt,mouseup:Dt},qt="mousedown",Wt="mousemove mouseup";l(z,C,{handler:function(t){var e=Rt[t.type];e&St&&0===t.button&&(this.pressed=!0),e&kt&&1!==t.which&&(e=Dt),this.pressed&&this.allow&&(e&Dt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:xt,srcEvent:t}))}});var Ht={pointerdown:St,pointermove:kt,pointerup:Dt,pointercancel:Ft,pointerout:Ft},Bt={2:bt,3:Tt,4:xt,5:Ct},Ut="pointerdown",Vt="pointermove pointerup pointercancel";window.MSPointerEvent&&(Ut="MSPointerDown",Vt="MSPointerMove MSPointerUp MSPointerCancel"),l(_,C,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),s=Ht[n],o=Bt[t.pointerType]||t.pointerType,a=o==bt,r=g(e,t.pointerId,"pointerId");s&St&&(0===t.button||a)?0>r&&(e.push(t),r=e.length-1):s&(Dt|Ft)&&(i=!0),0>r||(e[r]=t,this.callback(this.manager,s,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),i&&e.splice(r,1))}});var jt={touchstart:St,touchmove:kt,touchend:Dt,touchcancel:Ft},Xt="touchstart",Yt="touchstart touchmove touchend touchcancel";l(R,C,{handler:function(t){var e=jt[t.type];if(e===St&&(this.started=!0),this.started){var i=q.call(this,t,e);e&(Dt|Ft)&&i[0].length-i[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}});var Zt={touchstart:St,touchmove:kt,touchend:Dt,touchcancel:Ft},Qt="touchstart touchmove touchend touchcancel";l(W,C,{handler:function(t){var e=Zt[t.type],i=H.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}),l(B,C,{handler:function(t,e,i){var n=i.pointerType==bt,s=i.pointerType==xt;if(n)this.mouse.allow=!1;else if(s&&!this.mouse.allow)return;e&(Dt|Ft)&&(this.mouse.allow=!0),this.callback(t,e,i)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Gt=b(ut.style,"touchAction"),Jt=void 0!==Gt,Kt="compute",te="auto",ee="manipulation",ie="none",ne="pan-x",se="pan-y";U.prototype={set:function(t){t==Kt&&(t=this.compute()),Jt&&(this.manager.element.style[Gt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return o(this.manager.recognizers,function(e){u(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),V(t.join(" "))},preventDefaults:function(t){if(!Jt){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var n=this.actions,s=f(n,ie),o=f(n,se),a=f(n,ne);return s||o&&i&It||a&&i&Ot?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var oe=1,ae=2,re=4,le=8,ce=le,ue=16,he=32;j.prototype={defaults:{},set:function(t){return a(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(s(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=Z(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return s(t,"dropRecognizeWith",this)?this:(t=Z(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(s(t,"requireFailure",this))return this;var e=this.requireFail;return t=Z(t,this),-1===g(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(s(t,"dropRequireFailure",this))return this;t=Z(t,this);var e=g(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(i.options.event+(e?X(n):""),t)}var i=this,n=this.state;le>n&&e(!0),e(),n>=le&&e(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=he)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(he|oe)))return!1;t++}return!0},recognize:function(t){var e=a({},t);return u(this.options.enable,[this,e])?(this.state&(ce|ue|he)&&(this.state=oe),this.state=this.process(e),void(this.state&(ae|re|le|ue)&&this.tryEmit(e))):(this.reset(),void(this.state=he))},process:function(t){},getTouchAction:function(){},reset:function(){}},l(Q,j,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(ae|re),s=this.attrTest(t);return n&&(i&Ft||!s)?e|ue:n||s?i&Dt?e|le:e&ae?e|re:ae:he}}),l(G,Q,{defaults:{event:"pan",threshold:10,pointers:1,direction:Lt},getTouchAction:function(){var t=this.options.direction,e=[];return t&It&&e.push(se),t&Ot&&e.push(ne),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,s=t.direction,o=t.deltaX,a=t.deltaY;return s&e.direction||(e.direction&It?(s=0===o?At:0>o?Mt:$t,i=o!=this.pX,n=Math.abs(t.deltaX)):(s=0===a?At:0>a?Pt:Nt,i=a!=this.pY,n=Math.abs(t.deltaY))),t.direction=s,i&&n>e.threshold&&s&e.direction},attrTest:function(t){return Q.prototype.attrTest.call(this,t)&&(this.state&ae||!(this.state&ae)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Y(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),l(J,Q,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ie]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ae)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),l(K,j,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[te]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,s=t.distance<e.threshold,o=t.deltaTime>e.time;if(this._input=t,!s||!i||t.eventType&(Dt|Ft)&&!o)this.reset();else if(t.eventType&St)this.reset(),this._timer=n(function(){this.state=ce,this.tryEmit()},e.time,this);else if(t.eventType&Dt)return ce;return he},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===ce&&(t&&t.eventType&Dt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=mt(),this.manager.emit(this.options.event,this._input)))}}),l(tt,Q,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ie]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ae)}}),l(et,Q,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:It|Ot,pointers:1},getTouchAction:function(){return G.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(It|Ot)?e=t.velocity:i&It?e=t.velocityX:i&Ot&&(e=t.velocityY),this._super.attrTest.call(this,t)&&i&t.direction&&t.distance>this.options.threshold&&pt(e)>this.options.velocity&&t.eventType&Dt},emit:function(t){var e=Y(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),l(it,j,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ee]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,s=t.distance<e.threshold,o=t.deltaTime<e.time;if(this.reset(),t.eventType&St&&0===this.count)return this.failTimeout();if(s&&o&&i){if(t.eventType!=Dt)return this.failTimeout();var a=this.pTime?t.timeStamp-this.pTime<e.interval:!0,r=!this.pCenter||N(this.pCenter,t.center)<e.posThreshold;

this.pTime=t.timeStamp,this.pCenter=t.center,r&&a?this.count+=1:this.count=1,this._input=t;var l=this.count%e.taps;if(0===l)return this.hasRequireFailures()?(this._timer=n(function(){this.state=ce,this.tryEmit()},e.interval,this),ae):ce}return he},failTimeout:function(){return this._timer=n(function(){this.state=he},this.options.interval,this),he},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ce&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),nt.VERSION="2.0.4",nt.defaults={domEvents:!1,touchAction:Kt,enable:!0,inputTarget:null,inputClass:null,preset:[[tt,{enable:!1}],[J,{enable:!1},["rotate"]],[et,{direction:It}],[G,{direction:It},["swipe"]],[it],[it,{event:"doubletap",taps:2},["tap"]],[K]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var de=1,pe=2;st.prototype={set:function(t){return a(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?pe:de},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,s=e.curRecognizer;(!s||s&&s.state&ce)&&(s=e.curRecognizer=null);for(var o=0;o<n.length;)i=n[o],e.stopped===pe||s&&i!=s&&!i.canRecognizeWith(s)?i.reset():i.recognize(t),!s&&i.state&(ae|re|le)&&(s=e.curRecognizer=i),o++}},get:function(t){if(t instanceof j)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(s(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(s(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(g(e,t),1),this.touchAction.update(),this},on:function(t,e){var i=this.handlers;return o(v(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this},off:function(t,e){var i=this.handlers;return o(v(t),function(t){e?i[t].splice(g(i[t],e),1):delete i[t]}),this},emit:function(t,e){this.options.domEvents&&at(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&ot(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},a(nt,{INPUT_START:St,INPUT_MOVE:kt,INPUT_END:Dt,INPUT_CANCEL:Ft,STATE_POSSIBLE:oe,STATE_BEGAN:ae,STATE_CHANGED:re,STATE_ENDED:le,STATE_RECOGNIZED:ce,STATE_CANCELLED:ue,STATE_FAILED:he,DIRECTION_NONE:At,DIRECTION_LEFT:Mt,DIRECTION_RIGHT:$t,DIRECTION_UP:Pt,DIRECTION_DOWN:Nt,DIRECTION_HORIZONTAL:It,DIRECTION_VERTICAL:Ot,DIRECTION_ALL:Lt,Manager:st,Input:C,TouchAction:U,TouchInput:W,MouseInput:z,PointerEventInput:_,TouchMouseInput:B,SingleTouchInput:R,Recognizer:j,AttrRecognizer:Q,Tap:it,Pan:G,Swipe:et,Pinch:J,Rotate:tt,Press:K,on:d,off:p,each:o,merge:r,extend:a,inherit:l,bindFn:c,prefixed:b}),function(t,e){function i(i,n){var s=t(i);s.data("hammer")||s.data("hammer",new e(s[0],n))}t.fn.hammer=function(t){return this.each(function(){i(this,t)})},e.Manager.prototype.emit=function(e){return function(i,n){e.call(this,i,n),t(this.element).trigger({type:i,gesture:n})}}(e.Manager.prototype.emit)}(rt,nt),e.exports=lt.Hammer=nt},{2:2}],31:[function(t,e,i){function n(t){return 128>t?[t]:2048>t?(c0=192+(t>>6),c1=128+(63&t),[c0,c1]):(c0=224+(t>>12),c1=128+(t>>6&63),c2=128+(63&t),[c0,c1,c2])}function s(t){for(var e=[],i=0;i<t.length;i++)for(var s=t.charCodeAt(i),o=n(s),a=0;a<o.length;a++)e.push(o[a]);return e}function o(t,e){this.typeNumber=-1,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=s(t),this.make()}function a(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var i=0;i<t.length&&0==t[i];)i++;this.num=new Array(t.length-i+e);for(var n=0;n<t.length-i;n++)this.num[n]=t[n+i]}function r(){this.buffer=new Array,this.length=0}function n(t){return 128>t?[t]:2048>t?(c0=192+(t>>6),c1=128+(63&t),[c0,c1]):(c0=224+(t>>12),c1=128+(t>>6&63),c2=128+(63&t),[c0,c1,c2])}function s(t){for(var e=[],i=0;i<t.length;i++)for(var s=t.charCodeAt(i),o=n(s),a=0;a<o.length;a++)e.push(o[a]);return e}function o(t,e){this.typeNumber=-1,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=s(t),this.make()}function a(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var i=0;i<t.length&&0==t[i];)i++;this.num=new Array(t.length-i+e);for(var n=0;n<t.length-i;n++)this.num[n]=t[n+i]}function r(){this.buffer=new Array,this.length=0}var c=window.jQuery,u=t(2),h=[],d=function(t){"string"==typeof t&&(t={text:t}),this.options=c.extend({},{text:"",render:"",width:256,height:256,correctLevel:3,background:"#ffffff",foreground:"#000000"},t);for(var e=null,i=0,n=h.length;n>i;i++)if(h[i].text==this.options.text&&h[i].text.correctLevel==this.options.correctLevel){e=h[i].obj;break}if(i==n&&(e=new o(this.options.text,this.options.correctLevel),h.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:e})),this.options.render)switch(this.options.render){case"canvas":return this.createCanvas(e);case"table":return this.createTable(e);case"svg":return this.createSVG(e);default:return this.createDefault(e)}return this.createDefault(e)};d.prototype.createDefault=function(t){var e=document.createElement("canvas");return e.getContext?this.createCanvas(t):document.createElementNS&&document.createElementNS(SVG_NS,"svg").createSVGRect?this.createSVG(t):this.createTable(t)},d.prototype.createCanvas=function(t){var e=document.createElement("canvas");e.width=this.options.width,e.height=this.options.height;for(var i=e.getContext("2d"),n=(this.options.width/t.getModuleCount()).toPrecision(4),s=this.options.height/t.getModuleCount().toPrecision(4),o=0;o<t.getModuleCount();o++)for(var a=0;a<t.getModuleCount();a++){i.fillStyle=t.modules[o][a]?this.options.foreground:this.options.background;var r=Math.ceil((a+1)*n)-Math.floor(a*n),l=Math.ceil((o+1)*n)-Math.floor(o*n);i.fillRect(Math.round(a*n),Math.round(o*s),r,l)}return e},d.prototype.createTable=function(t){var e=[];e.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color: '+this.options.background+';">');var i=-1,n=-1,s=-1,o=-1;i=s=Math.floor(this.options.width/t.getModuleCount()),n=o=Math.floor(this.options.height/t.getModuleCount()),0>=s&&(i=t.getModuleCount()<80?2:1),0>=o&&(n=t.getModuleCount()<80?2:1),foreTd='<td style="border:0px; margin:0px; padding:0px; width:'+i+"px; background-color: "+this.options.foreground+'"></td>',backTd='<td style="border:0px; margin:0px; padding:0px; width:'+i+"px; background-color: "+this.options.background+'"></td>',l=t.getModuleCount();for(var a=0;a<l;a++){e.push('<tr style="border:0px; margin:0px; padding:0px; height: '+n+'px">');for(var r=0;r<l;r++)e.push(t.modules[a][r]?foreTd:backTd);e.push("</tr>")}e.push("</table>");var c=document.createElement("span");return c.innerHTML=e.join(""),c.firstChild},d.prototype.createSVG=function(t){for(var e,i,n,s,o=t.getModuleCount(),a=this.options.height/this.options.width,r='<svg xmlns="http://www.w3.org/2000/svg" width="'+this.options.width+'px" height="'+this.options.height+'px" viewbox="0 0 '+10*o+" "+10*o*a+'">',l="<path ",u=' style="stroke-width:0.5;stroke:'+this.options.foreground+";fill:"+this.options.foreground+';"></path>',h=' style="stroke-width:0.5;stroke:'+this.options.background+";fill:"+this.options.background+';"></path>',d=0;o>d;d++)for(var p=0;o>p;p++)e=10*p,n=10*d*a,i=10*(p+1),s=10*(d+1)*a,r+=l+'d="M '+e+","+n+" L "+i+","+n+" L "+i+","+s+" L "+e+","+s+' Z"',r+=t.modules[d][p]?u:h;return r+="</svg>",c(r)[0]},o.prototype={constructor:o,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var i=-1;7>=i;i++)if(!(-1>=t+i||this.moduleCount<=t+i))for(var n=-1;7>=n;n++)-1>=e+n||this.moduleCount<=e+n||(this.modules[t+i][e+n]=i>=0&&6>=i&&(0==n||6==n)||n>=0&&6>=n&&(0==i||6==i)||i>=2&&4>=i&&n>=2&&4>=n?!0:!1)},createQrcode:function(){for(var t=0,e=0,i=null,n=0;8>n;n++){this.makeImpl(n);var s=f.getLostPoint(this);(0==n||t>s)&&(t=s,e=n,i=this.modules)}this.modules=i,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=f.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var i=0;i<t.length;i++){var n=t[e],s=t[i];if(null==this.modules[n][s])for(var o=-2;2>=o;o++)for(var a=-2;2>=a;a++)this.modules[n+o][s+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a?!0:!1}},setupTypeNumber:function(t){for(var e=f.getBCHTypeNumber(this.typeNumber),i=0;18>i;i++){var n=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=n,this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=n}},setupTypeInfo:function(t,e){for(var i=p[this.errorCorrectLevel]<<3|e,n=f.getBCHTypeInfo(i),s=0;15>s;s++){var o=!t&&1==(n>>s&1);6>s?this.modules[s][8]=o:8>s?this.modules[s+1][8]=o:this.modules[this.moduleCount-15+s][8]=o;var o=!t&&1==(n>>s&1);8>s?this.modules[8][this.moduleCount-s-1]=o:9>s?this.modules[8][15-s-1+1]=o:this.modules[8][15-s-1]=o}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new r,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var i=0,n=this.utf8bytes.length;n>i;i++)t.put(this.utf8bytes[i],8);for(t.length+4<=8*this.totalDataCount&&t.put(0,4);t.length%8!=0;)t.putBit(!1);for(;;){if(t.length>=8*this.totalDataCount)break;if(t.put(o.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(o.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,i=0,n=0,s=this.rsBlock.length/3,o=new Array,r=0;s>r;r++)for(var l=this.rsBlock[3*r+0],c=this.rsBlock[3*r+1],u=this.rsBlock[3*r+2],h=0;l>h;h++)o.push([u,c]);for(var d=new Array(o.length),p=new Array(o.length),m=0;m<o.length;m++){var v=o[m][0],g=o[m][1]-v;i=Math.max(i,v),n=Math.max(n,g),d[m]=new Array(v);for(var r=0;r<d[m].length;r++)d[m][r]=255&t.buffer[r+e];e+=v;var w=f.getErrorCorrectPolynomial(g),y=new a(d[m],w.getLength()-1),b=y.mod(w);p[m]=new Array(w.getLength()-1);for(var r=0;r<p[m].length;r++){var T=r+b.getLength()-p[m].length;p[m][r]=T>=0?b.get(T):0}}for(var x=new Array(this.totalDataCount),C=0,r=0;i>r;r++)for(var m=0;m<o.length;m++)r<d[m].length&&(x[C++]=d[m][r]);for(var r=0;n>r;r++)for(var m=0;m<o.length;m++)r<p[m].length&&(x[C++]=p[m][r]);return x},mapData:function(t,e){for(var i=-1,n=this.moduleCount-1,s=7,o=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var r=0;2>r;r++)if(null==this.modules[n][a-r]){var l=!1;o<t.length&&(l=1==(t[o]>>>s&1));var c=f.getMask(e,n,a-r);c&&(l=!l),this.modules[n][a-r]=l,s--,-1==s&&(o++,s=7)}if(n+=i,0>n||this.moduleCount<=n){n-=i,i=-i;break}}}},o.PAD0=236,o.PAD1=17;for(var p=[1,0,3,2],m={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;f.getBCHDigit(e)-f.getBCHDigit(f.G15)>=0;)e^=f.G15<<f.getBCHDigit(e)-f.getBCHDigit(f.G15);return(t<<10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)>=0;)e^=f.G18<<f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,i){switch(t){case m.PATTERN000:return(e+i)%2==0;case m.PATTERN001:return e%2==0;case m.PATTERN010:return i%3==0;case m.PATTERN011:return(e+i)%3==0;case m.PATTERN100:return(Math.floor(e/2)+Math.floor(i/3))%2==0;case m.PATTERN101:return e*i%2+e*i%3==0;case m.PATTERN110:return(e*i%2+e*i%3)%2==0;case m.PATTERN111:return(e*i%3+(e+i)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new a([1],0),i=0;t>i;i++)e=e.multiply(new a([1,v.gexp(i)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),i=0,n=0,s=0;e>s;s++)for(var o=0,a=t.modules[s][0],r=0;e>r;r++){var l=t.modules[s][r];if(e-6>r&&l&&!t.modules[s][r+1]&&t.modules[s][r+2]&&t.modules[s][r+3]&&t.modules[s][r+4]&&!t.modules[s][r+5]&&t.modules[s][r+6]&&(e-10>r?t.modules[s][r+7]&&t.modules[s][r+8]&&t.modules[s][r+9]&&t.modules[s][r+10]&&(i+=40):r>3&&t.modules[s][r-1]&&t.modules[s][r-2]&&t.modules[s][r-3]&&t.modules[s][r-4]&&(i+=40)),e-1>s&&e-1>r){var c=0;l&&c++,t.modules[s+1][r]&&c++,t.modules[s][r+1]&&c++,t.modules[s+1][r+1]&&c++,(0==c||4==c)&&(i+=3)}a^l?o++:(a=l,o>=5&&(i+=3+o-5),o=1),l&&n++}for(var r=0;e>r;r++)for(var o=0,a=t.modules[0][r],s=0;e>s;s++){var l=t.modules[s][r];e-6>s&&l&&!t.modules[s+1][r]&&t.modules[s+2][r]&&t.modules[s+3][r]&&t.modules[s+4][r]&&!t.modules[s+5][r]&&t.modules[s+6][r]&&(e-10>s?t.modules[s+7][r]&&t.modules[s+8][r]&&t.modules[s+9][r]&&t.modules[s+10][r]&&(i+=40):s>3&&t.modules[s-1][r]&&t.modules[s-2][r]&&t.modules[s-3][r]&&t.modules[s-4][r]&&(i+=40)),a^l?o++:(a=l,o>=5&&(i+=3+o-5),o=1)}var u=Math.abs(100*n/e/e-50)/5;return i+=10*u}},v={glog:function(t){if(1>t)throw new Error("glog("+t+")");return v.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return v.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},g=0;8>g;g++)v.EXP_TABLE[g]=1<<g;for(var g=8;256>g;g++)v.EXP_TABLE[g]=v.EXP_TABLE[g-4]^v.EXP_TABLE[g-5]^v.EXP_TABLE[g-6]^v.EXP_TABLE[g-8];for(var g=0;255>g;g++)v.LOG_TABLE[v.EXP_TABLE[g]]=g;a.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var n=0;n<t.getLength();n++)e[i+n]^=v.gexp(v.glog(this.get(i))+v.glog(t.get(n)));return new a(e,0)},mod:function(t){var e=this.getLength(),i=t.getLength();if(0>e-i)return this;for(var n=new Array(e),s=0;e>s;s++)n[s]=this.get(s);for(;n.length>=i;){for(var o=v.glog(n[0])-v.glog(t.get(0)),s=0;s<t.getLength();s++)n[s]^=v.gexp(v.glog(t.get(s))+o);for(;0==n[0];)n.shift()}return new a(n,0)}};var w=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];o.prototype.getRightType=function(){for(var t=1;41>t;t++){var e=w[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var i=e.length/3,n=0,s=0;i>s;s++){var o=e[3*s+0],a=e[3*s+2];n+=a*o}var r=t>9?2:1;if(this.utf8bytes.length+r<n||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=n;break}}},r.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var i=0;e>i;i++)this.putBit(t>>>e-i-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},o.prototype={constructor:o,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var i=-1;7>=i;i++)if(!(-1>=t+i||this.moduleCount<=t+i))for(var n=-1;7>=n;n++)-1>=e+n||this.moduleCount<=e+n||(this.modules[t+i][e+n]=i>=0&&6>=i&&(0==n||6==n)||n>=0&&6>=n&&(0==i||6==i)||i>=2&&4>=i&&n>=2&&4>=n?!0:!1)},createQrcode:function(){for(var t=0,e=0,i=null,n=0;8>n;n++){this.makeImpl(n);var s=f.getLostPoint(this);(0==n||t>s)&&(t=s,e=n,i=this.modules)}this.modules=i,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=f.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var i=0;i<t.length;i++){var n=t[e],s=t[i];if(null==this.modules[n][s])for(var o=-2;2>=o;o++)for(var a=-2;2>=a;a++)this.modules[n+o][s+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a?!0:!1}},setupTypeNumber:function(t){for(var e=f.getBCHTypeNumber(this.typeNumber),i=0;18>i;i++){var n=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=n,this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=n}},setupTypeInfo:function(t,e){for(var i=p[this.errorCorrectLevel]<<3|e,n=f.getBCHTypeInfo(i),s=0;15>s;s++){var o=!t&&1==(n>>s&1);6>s?this.modules[s][8]=o:8>s?this.modules[s+1][8]=o:this.modules[this.moduleCount-15+s][8]=o;var o=!t&&1==(n>>s&1);8>s?this.modules[8][this.moduleCount-s-1]=o:9>s?this.modules[8][15-s-1+1]=o:this.modules[8][15-s-1]=o}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new r,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var i=0,n=this.utf8bytes.length;n>i;i++)t.put(this.utf8bytes[i],8);for(t.length+4<=8*this.totalDataCount&&t.put(0,4);t.length%8!=0;)t.putBit(!1);for(;;){if(t.length>=8*this.totalDataCount)break;if(t.put(o.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(o.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,i=0,n=0,s=this.rsBlock.length/3,o=new Array,r=0;s>r;r++)for(var l=this.rsBlock[3*r+0],c=this.rsBlock[3*r+1],u=this.rsBlock[3*r+2],h=0;l>h;h++)o.push([u,c]);for(var d=new Array(o.length),p=new Array(o.length),m=0;m<o.length;m++){var v=o[m][0],g=o[m][1]-v;i=Math.max(i,v),n=Math.max(n,g),d[m]=new Array(v);for(var r=0;r<d[m].length;r++)d[m][r]=255&t.buffer[r+e];e+=v;var w=f.getErrorCorrectPolynomial(g),y=new a(d[m],w.getLength()-1),b=y.mod(w);p[m]=new Array(w.getLength()-1);for(var r=0;r<p[m].length;r++){var T=r+b.getLength()-p[m].length;p[m][r]=T>=0?b.get(T):0}}for(var x=new Array(this.totalDataCount),C=0,r=0;i>r;r++)for(var m=0;m<o.length;m++)r<d[m].length&&(x[C++]=d[m][r]);for(var r=0;n>r;r++)for(var m=0;m<o.length;m++)r<p[m].length&&(x[C++]=p[m][r]);return x},mapData:function(t,e){for(var i=-1,n=this.moduleCount-1,s=7,o=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var r=0;2>r;r++)if(null==this.modules[n][a-r]){var l=!1;o<t.length&&(l=1==(t[o]>>>s&1));var c=f.getMask(e,n,a-r);c&&(l=!l),this.modules[n][a-r]=l,s--,-1==s&&(o++,s=7)}if(n+=i,0>n||this.moduleCount<=n){n-=i,i=-i;break}}}},o.PAD0=236,o.PAD1=17;for(var p=[1,0,3,2],m={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;f.getBCHDigit(e)-f.getBCHDigit(f.G15)>=0;)e^=f.G15<<f.getBCHDigit(e)-f.getBCHDigit(f.G15);return(t<<10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)>=0;)e^=f.G18<<f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,i){switch(t){case m.PATTERN000:return(e+i)%2==0;case m.PATTERN001:return e%2==0;case m.PATTERN010:return i%3==0;case m.PATTERN011:return(e+i)%3==0;case m.PATTERN100:return(Math.floor(e/2)+Math.floor(i/3))%2==0;case m.PATTERN101:return e*i%2+e*i%3==0;case m.PATTERN110:return(e*i%2+e*i%3)%2==0;case m.PATTERN111:return(e*i%3+(e+i)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new a([1],0),i=0;t>i;i++)e=e.multiply(new a([1,v.gexp(i)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),i=0,n=0,s=0;e>s;s++)for(var o=0,a=t.modules[s][0],r=0;e>r;r++){var l=t.modules[s][r];if(e-6>r&&l&&!t.modules[s][r+1]&&t.modules[s][r+2]&&t.modules[s][r+3]&&t.modules[s][r+4]&&!t.modules[s][r+5]&&t.modules[s][r+6]&&(e-10>r?t.modules[s][r+7]&&t.modules[s][r+8]&&t.modules[s][r+9]&&t.modules[s][r+10]&&(i+=40):r>3&&t.modules[s][r-1]&&t.modules[s][r-2]&&t.modules[s][r-3]&&t.modules[s][r-4]&&(i+=40)),e-1>s&&e-1>r){var c=0;l&&c++,t.modules[s+1][r]&&c++,t.modules[s][r+1]&&c++,t.modules[s+1][r+1]&&c++,(0==c||4==c)&&(i+=3)}a^l?o++:(a=l,o>=5&&(i+=3+o-5),o=1),l&&n++}for(var r=0;e>r;r++)for(var o=0,a=t.modules[0][r],s=0;e>s;s++){var l=t.modules[s][r];e-6>s&&l&&!t.modules[s+1][r]&&t.modules[s+2][r]&&t.modules[s+3][r]&&t.modules[s+4][r]&&!t.modules[s+5][r]&&t.modules[s+6][r]&&(e-10>s?t.modules[s+7][r]&&t.modules[s+8][r]&&t.modules[s+9][r]&&t.modules[s+10][r]&&(i+=40):s>3&&t.modules[s-1][r]&&t.modules[s-2][r]&&t.modules[s-3][r]&&t.modules[s-4][r]&&(i+=40)),a^l?o++:(a=l,o>=5&&(i+=3+o-5),o=1)}var u=Math.abs(100*n/e/e-50)/5;return i+=10*u}},v={glog:function(t){if(1>t)throw new Error("glog("+t+")");return v.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return v.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},g=0;8>g;g++)v.EXP_TABLE[g]=1<<g;for(var g=8;256>g;g++)v.EXP_TABLE[g]=v.EXP_TABLE[g-4]^v.EXP_TABLE[g-5]^v.EXP_TABLE[g-6]^v.EXP_TABLE[g-8];for(var g=0;255>g;g++)v.LOG_TABLE[v.EXP_TABLE[g]]=g;a.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var n=0;n<t.getLength();n++)e[i+n]^=v.gexp(v.glog(this.get(i))+v.glog(t.get(n)));return new a(e,0)},mod:function(t){var e=this.getLength(),i=t.getLength();if(0>e-i)return this;for(var n=new Array(e),s=0;e>s;s++)n[s]=this.get(s);for(;n.length>=i;){for(var o=v.glog(n[0])-v.glog(t.get(0)),s=0;s<t.getLength();s++)n[s]^=v.gexp(v.glog(t.get(s))+o);for(;0==n[0];)n.shift()}return new a(n,0)}},w=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.prototype.getRightType=function(){for(var t=1;41>t;t++){var e=w[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var i=e.length/3,n=0,s=0;i>s;s++){var o=e[3*s+0],a=e[3*s+2];n+=a*o}var r=t>9?2:1;if(this.utf8bytes.length+r<n||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=n;break}}},r.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var i=0;e>i;i++)this.putBit(t>>>e-i-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},c.fn.qrcode=function(t){return this.each(function(){c(this).append(new d(t))})},e.exports=u.qrcode=d},{2:2}],32:[function(t,e,i){"use strict";function n(){try{return l in r&&r[l]}catch(t){return!1}}var s,o=t(2),a={},r=window,l="localStorage";a.disabled=!1,a.version="1.3.17",a.set=function(t,e){},a.get=function(t,e){},a.has=function(t){return void 0!==a.get(t)},a.remove=function(t){},a.clear=function(){},a.transact=function(t,e,i){null==i&&(i=e,e=null),null==e&&(e={});var n=a.get(t,e);i(n),a.set(t,n)},a.getAll=function(){},a.forEach=function(){},a.serialize=function(t){return JSON.stringify(t)},a.deserialize=function(t){if("string"!=typeof t)return void 0;try{return JSON.parse(t)}catch(e){return t||void 0}},n()&&(s=r[l],a.set=function(t,e){return void 0===e?a.remove(t):(s.setItem(t,a.serialize(e)),e)},a.get=function(t,e){var i=a.deserialize(s.getItem(t));return void 0===i?e:i},a.remove=function(t){s.removeItem(t)},a.clear=function(){s.clear()},a.getAll=function(){var t={};return a.forEach(function(e,i){t[e]=i}),t},a.forEach=function(t){for(var e=0;e<s.length;e++){var i=s.key(e);t(i,a.get(i))}});try{var c="__storeJs__";a.set(c,c),a.get(c)!=c&&(a.disabled=!0),a.remove(c)}catch(u){a.disabled=!0}a.enabled=!a.disabled,e.exports=o.store=a},{2:2}],33:[function(t,e,i){"use strict";function n(){var t=s('[data-am-widget="accordion"]'),e={item:".am-accordion-item",title:".am-accordion-title",body:".am-accordion-bd",disabled:".am-disabled"};t.each(function(t,i){var n=o.utils.parseOptions(s(i).attr("data-am-accordion")),a=s(i).find(e.title);a.on("click.accordion.amui",function(){var t=s(this).next(e.body),o=s(this).parent(e.item),a=t.data("amui.collapse");o.is(e.disabled)||(o.toggleClass("am-active"),
a?t.collapse("toggle"):t.collapse(),!n.multiple&&s(i).children(".am-active").not(o).not(e.disabled).removeClass("am-active").find(e.body+".am-in").collapse("close"))})})}var s=window.jQuery,o=t(2);t(6),s(n),e.exports=o.accordion={VERSION:"2.1.0",init:n}},{2:2,6:6}],34:[function(t,e,i){"use strict";e.exports={VERSION:"2.0.1"}},{}],35:[function(t,e,i){"use strict";function n(){var t=s(".ds-thread"),e=t.parent('[data-am-widget="duoshuo"]').attr("data-ds-short-name"),i=("https:"==document.location.protocol?"https:":"http:")+"//static.duoshuo.com/embed.js";if(t.length&&e&&(window.duoshuoQuery={short_name:e},!s('script[src="'+i+'"]').length)){var n=s("<script>",{async:!0,type:"text/javascript",src:i,charset:"utf-8"});s("body").append(n)}}var s=window.jQuery,o=t(2);s(window).on("load",n),e.exports=o.duoshuo={VERSION:"2.0.1",init:n}},{2:2}],36:[function(t,e,i){"use strict";function n(){s(".am-figure").each(function(t,e){var i,n=o.utils.parseOptions(s(e).attr("data-am-figure")),a=s(e);if(n.pureview)if("auto"===n.pureview){var r=s.isImgZoomAble(a.find("img")[0]);r&&a.pureview()}else a.addClass("am-figure-zoomable").pureview();i=a.data("amui.pureview"),i&&a.on("click",":not(img)",function(){i.open(0)})})}var s=window.jQuery,o=t(2);t(17),s.isImgZoomAble=function(t){var e=new Image;e.src=t.src;var i=s(t).width()<e.width;return i&&s(t).closest(".am-figure").addClass("am-figure-zoomable"),i},s(window).on("load",n),e.exports=o.figure={VERSION:"2.0.3",init:n}},{17:17,2:2}],37:[function(t,e,i){"use strict";function n(){s(".am-footer-ysp").on("click",function(){s("#am-footer-modal").modal()});var t=o.utils.parseOptions(s(".am-footer").data("amFooter"));t.addToHS&&a(),s('[data-rel="desktop"]').on("click",function(t){t.preventDefault(),window.AMPlatform?window.AMPlatform.util.goDesktop():(r.set("allmobilize","desktop","","/"),window.location=window.location)})}var s=window.jQuery,o=t(2);t(12);var a=t(3),r=t(27);s(n),e.exports=o.footer={VERSION:"3.1.2",init:n}},{12:12,2:2,27:27,3:3}],38:[function(t,e,i){"use strict";function n(){var t=s('[data-am-widget="gallery"]');t.each(function(){var t=o.utils.parseOptions(s(this).attr("data-am-gallery"));t.pureview&&("object"==typeof t.pureview?s(this).pureview(t.pureview):s(this).pureview())})}var s=window.jQuery,o=t(2);t(17),s(n),e.exports=o.gallery={VERSION:"3.0.0",init:n}},{17:17,2:2}],39:[function(t,e,i){"use strict";function n(){function t(){i[(n.scrollTop()>50?"add":"remove")+"Class"]("am-active")}var e=s('[data-am-widget="gotop"]'),i=e.filter(".am-gotop-fixed"),n=s(window);e.data("init")||(e.find("a").on("click",function(t){t.preventDefault(),n.smoothScroll()}),t(),n.on("scroll.gotop.amui",o.utils.debounce(t,100)),e.data("init",!0))}var s=window.jQuery,o=t(2);t(22),s(n),e.exports=o.gotop={VERSION:"4.0.2",init:n}},{2:2,22:22}],40:[function(t,e,i){"use strict";function n(){s('[data-am-widget="header"]').each(function(){return s(this).hasClass("am-header-fixed")?(s("body").addClass("am-with-fixed-header"),!1):void 0})}var s=window.jQuery,o=t(2);s(n),e.exports=o.header={VERSION:"2.0.0",init:n}},{2:2}],41:[function(t,e,i){"use strict";var n=t(2);e.exports=n.intro={VERSION:"4.0.2",init:function(){}}},{2:2}],42:[function(t,e,i){"use strict";var n=t(2);e.exports=n.listNews={VERSION:"4.0.0",init:function(){}}},{2:2}],43:[function(t,e,i){function n(t){var e=o("<script />",{id:"am-map-api-0"});o("body").append(e),e.on("load",function(){console.log("load");var e=o("<script/>",{id:"am-map-api-1"});o("body").append(e),e.on("load",function(){var e=document.createElement("script");e.textContent="("+t.toString()+")();",o("body")[0].appendChild(e)}).attr("src","http://api.map.baidu.com/getscript?type=quick&file=feature&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002")}).attr("src","http://api.map.baidu.com/getscript?type=quick&file=api&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002")}function s(){var t=document.querySelector(".am-map"),e=116.331398,i=39.897445,n=t.getAttribute("data-name"),s=t.getAttribute("data-address"),o=t.getAttribute("data-longitude")||e,a=t.getAttribute("data-latitude")||i,r=t.getAttribute("data-setZoom")||17,l=t.getAttribute("data-icon"),c=new BMap.Map("bd-map"),u=new BMap.Point(o,a);c.centerAndZoom(u,r),t.getAttribute("data-zoomControl")&&c.addControl(new BMap.ZoomControl),t.getAttribute("data-scaleControl")&&c.addControl(new BMap.ScaleControl);var h=new BMap.Marker(u);l&&h.setIcon(new BMap.Icon(l,new BMap.Size(40,40)));var d={width:200,title:n},p=new BMap.InfoWindow("\u5730\u5740\uff1a"+s,d),m=new BMap.Geocoder;o==e&&a==i?m.getPoint(s,function(t){t&&(c.centerAndZoom(t,r),h.setPosition(t),c.addOverlay(h),c.openInfoWindow(p,t))},""):m.getLocation(u,function(t){c.centerAndZoom(u,r),h.setPosition(u),c.addOverlay(h),s?c.openInfoWindow(p,u):c.openInfoWindow(new BMap.InfoWindow(s,d),u)})}var o=window.jQuery,a=t(2),r=function(){o(".am-map").length&&n(s)};o(r),e.exports=a.map={VERSION:"2.0.2",init:r}},{2:2}],44:[function(t,e,i){"use strict";function n(){if(s("#mechat").length){var t=s('[data-am-widget="mechat"]'),e=t.data("am-mechat-unitid"),i=s("<script>",{charset:"utf-8",src:"http://mechatim.com/js/unit/button.js?id="+e});s("body").append(i)}}var s=window.jQuery,o=t(2);s(window).on("load",n),e.exports=o.mechat={VERSION:"2.0.1",init:n}},{2:2}],45:[function(t,e,i){"use strict";var n=window.jQuery,s=t(2),o=t(11);t(13),t(6);var a=function(){var t=n('[data-am-widget="menu"]');t.find(".am-menu-nav .am-parent > a").on("click",function(t){t.preventDefault();var e=n(this),i=e.parent(),s=e.next(".am-menu-sub");i.toggleClass("am-open"),s.collapse("toggle"),i.siblings(".am-parent").removeClass("am-open").children(".am-menu-sub.am-in").collapse("close")}),t.filter("[data-am-menu-collapse]").find("> .am-menu-toggle").on("click",function(t){t.preventDefault();var e=n(this),i=e.next(".am-menu-nav");e.toggleClass("am-active"),i.collapse("toggle")}),t.filter("[data-am-menu-offcanvas]").find("> .am-menu-toggle").on("click",function(t){t.preventDefault();var e=n(this),i=e.next(".am-offcanvas");e.toggleClass("am-active"),i.offCanvas("open")});var e='.am-offcanvas[data-dismiss-on="click"]',i=n(e);i.find("a").not(".am-parent>a").on("click",function(t){n(this).parents(e).offCanvas("close")}),t.filter(".am-menu-one").each(function(t){var e,i=n(this),s=n('<div class="am-menu-nav-sub-wrap"></div>'),a=0,r=i.find(".am-menu-nav"),l=r.children("li");l.filter(".am-parent").each(function(t){n(this).attr("data-rel","#am-menu-sub-"+t),n(this).find(".am-menu-sub").attr("id","am-menu-sub-"+t).appendTo(s)}),i.append(s),r.wrap('<div class="am-menu-nav-wrap" id="am-menu-'+t+'">'),l.each(function(t){a+=parseFloat(n(this).css("width"))}),r.width(a);var c=new o("#am-menu-"+t,{eventPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1});l.on("click",function(){var t=n(this);t.addClass("am-active").siblings().removeClass("am-active"),s.find(".am-menu-sub.am-in").collapse("close"),t.is(".am-parent")?!t.hasClass(".am-open")&&s.find(t.attr("data-rel")).collapse("open"):t.siblings().removeClass("am-open"),void 0===e&&(e=n(this).index()?0:1);var o,a=n(this).index()>e,l=n(this)[a?"next":"prev"](),u=l.offset()||n(this).offset(),h=i.offset(),d=parseInt(i.css("padding-left"));(a?u.left+u.width>h.left+h.width:u.left<h.left)&&(o=r.offset(),c.scrollTo(a?h.width-u.left+o.left-u.width-d:o.left-u.left,0,400)),e=n(this).index()}),i.on("touchmove",function(t){t.preventDefault()})})};n(a),e.exports=s.menu={VERSION:"4.0.3",init:a}},{11:11,13:13,2:2,6:6}],46:[function(t,e,i){"use strict";function n(){function t(){u.append(b),u.find("li").not(".am-navbar-more").slice(i()-1).appendTo(y),n.append(y)}function e(){return i()>=d?(b.hide(),void y.find("li").insertBefore(b)):(!n.find(".am-navbar-actions").length&&t(),b.show(),void(u.find("li").length<i()?y.find("li").slice(0,i()-u.find("li").length).insertBefore(b):u.find("li").length>i()&&(y.find("li").length?u.find("li").not(b).slice(i()-1).insertBefore(y.find("li").first()):u.find("li").not(b).slice(i()-1).appendTo(y))))}function i(){return Math.floor((l.width()-f)/m)}var n=s('[data-am-widget="navbar"]');if(n.length){var l=s(window),c=s("body"),u=n.find(".am-navbar-nav"),h=n.find("li"),d=h.length,p=u.attr("class")&&parseInt(u.attr("class").match(/am-avg-sm-(\d+)/)[1])||3,m=60,f=16,v=h.filter("[data-am-navbar-share]"),g=h.filter("[data-am-navbar-qrcode]"),w="am-active",y=s('<ul class="am-navbar-actions"></ul>',{id:o.utils.generateGUID("am-navbar-actions")}),b=s('<li class="am-navbar-labels am-navbar-more"><a href="javascript: void(0);"><span class="am-icon-angle-up"></span><span class="am-navbar-label">\u66f4\u591a</span></a></li>');if("fixed"==n.css("position")&&c.addClass("am-with-fixed-navbar"),g.length){var T="am-navbar-qrcode";if(C=s("#"+T),!C.length){var x=g.attr("data-am-navbar-qrcode"),C=s('<div class="am-modal am-modal-no-btn" id=""><div class="am-modal-dialog"><div class="am-modal-bd"></div></div></div>',{id:T}),E=C.find(".am-modal-bd");if(x)E.html('<img src="'+x+'"/>');else{var S=new r({render:"canvas",correctLevel:0,text:window.location.href,width:200,height:200,background:"#fff",foreground:"#000"});E.html(S)}c.append(C)}g.on("click",function(t){t.preventDefault(),C.modal()})}d>p&&d>i()&&t(),n.on("click.navbar.amui",".am-navbar-more",function(t){t.preventDefault(),b[y.hasClass(w)?"removeClass":"addClass"](w),y.toggleClass(w)}),v.length&&v.on("click.navbar.amui",function(t){t.preventDefault(),a.toggle()}),l.on("resize.navbar.amui orientationchange.navbar.amui",o.utils.debounce(e,150))}}var s=window.jQuery,o=t(2),a=t(21),r=t(31);t(12),s(n),e.exports=o.navbar={VERSION:"2.0.2",init:n}},{12:12,2:2,21:21,31:31}],47:[function(t,e,i){"use strict";var n=t(2);e.exports=n.pagination={VERSION:"3.0.1"}},{2:2}],48:[function(t,e,i){"use strict";function n(){var t=s('[data-am-widget="paragraph"]');t.each(function(t){var e=s(this),i=o.utils.parseOptions(e.attr("data-am-paragraph")),n=t;i.pureview&&e.pureview(),i.tableScrollable&&e.find("table").each(function(t){s(this).width()>s(window).width()&&s(this).scrollTable(n+"-"+t)})})}var s=window.jQuery,o=t(2),a=t(11);t(17),s.fn.scrollTable=function(t){var e,i=s(this);i.wrap('<div class="am-paragraph-table-container" id="am-paragraph-table-'+t+'"><div class="am-paragraph-table-scroller"></div></div>'),e=i.parent(),e.width(i.width()),e.height(i.height()),new a("#am-paragraph-table-"+t,{eventPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1})},s(window).on("load",n),e.exports=o.paragraph={VERSION:"2.0.1",init:n}},{11:11,17:17,2:2}],49:[function(t,e,i){"use strict";function n(){var t=s('[data-am-widget="slider"]');t.not(".am-slider-manual").each(function(t,e){var i=o.utils.parseOptions(s(e).attr("data-am-slider"));s(e).flexslider(i)})}var s=window.jQuery,o=t(2);t(10),s(n),e.exports=o.slider={VERSION:"3.0.1",init:n}},{10:10,2:2}],50:[function(t,e,i){"use strict";function n(){s('[data-am-widget="tabs"]').each(function(){var t=s(this).data("amTabsNoswipe")?{noSwipe:1}:{};s(this).tabs(t)})}var s=window.jQuery,o=t(2);t(24),s(n),e.exports=o.tab={VERSION:"4.0.1",init:n}},{2:2,24:24}],51:[function(t,e,i){"use strict";var n=t(2);e.exports=n.titlebar={VERSION:"4.0.1"}},{2:2}],52:[function(t,e,i){"use strict";function n(){var t=s('[data-am-widget="wechatpay"]');return a?void t.on("click",".am-wechatpay-btn",function(t){t.preventDefault();var e=o.utils.parseOptions(s(this).parent().data("wechatPay"));return window.wx?void wx.checkJsApi({jsApiList:["chooseWXPay"],success:function(t){t.checkResult.chooseWXPay?wx.chooseWXPay(e):alert("\u5fae\u4fe1\u7248\u672c\u4e0d\u652f\u6301\u652f\u4ed8\u63a5\u53e3\u6216\u6ca1\u6709\u5f00\u542f\uff01")},fail:function(){alert("\u8c03\u7528 checkJsApi \u63a5\u53e3\u65f6\u53d1\u751f\u9519\u8bef!")}}):void alert("\u6ca1\u6709\u5fae\u4fe1 JS SDK")}):(t.hide(),!1)}var s=window.jQuery,o=t(2),a=window.navigator.userAgent.indexOf("MicroMessenger")>-1,r=n;s(r),e.exports=o.pay={VERSION:"1.0.0",init:r}},{2:2}]},{},[1])(1)});(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });
  });
})(jQuery);
/*! WebUploader 0.1.5 */


/**
 * @fileOverview 让内部各个部件的代码可以用[amd](https://github.com/amdjs/amdjs-api/wiki/AMD)模块定义方式组织起来。
 *
 * AMD API 内部的简单不完全实现，请忽略。只有当WebUploader被合并成一个文件的时候才会引入。
 */
(function( root, factory ) {
    var modules = {},

        // 内部require, 简单不完全实现。
        // https://github.com/amdjs/amdjs-api/wiki/require
        _require = function( deps, callback ) {
            var args, len, i;

            // 如果deps不是数组，则直接返回指定module
            if ( typeof deps === 'string' ) {
                return getModule( deps );
            } else {
                args = [];
                for( len = deps.length, i = 0; i < len; i++ ) {
                    args.push( getModule( deps[ i ] ) );
                }

                return callback.apply( null, args );
            }
        },

        // 内部define，暂时不支持不指定id.
        _define = function( id, deps, factory ) {
            if ( arguments.length === 2 ) {
                factory = deps;
                deps = null;
            }

            _require( deps || [], function() {
                setModule( id, factory, arguments );
            });
        },

        // 设置module, 兼容CommonJs写法。
        setModule = function( id, factory, args ) {
            var module = {
                    exports: factory
                },
                returned;

            if ( typeof factory === 'function' ) {
                args.length || (args = [ _require, module.exports, module ]);
                returned = factory.apply( null, args );
                returned !== undefined && (module.exports = returned);
            }

            modules[ id ] = module.exports;
        },

        // 根据id获取module
        getModule = function( id ) {
            var module = modules[ id ] || root[ id ];

            if ( !module ) {
                throw new Error( '`' + id + '` is undefined' );
            }

            return module;
        },

        // 将所有modules，将路径ids装换成对象。
        exportsTo = function( obj ) {
            var key, host, parts, part, last, ucFirst;

            // make the first character upper case.
            ucFirst = function( str ) {
                return str && (str.charAt( 0 ).toUpperCase() + str.substr( 1 ));
            };

            for ( key in modules ) {
                host = obj;

                if ( !modules.hasOwnProperty( key ) ) {
                    continue;
                }

                parts = key.split('/');
                last = ucFirst( parts.pop() );

                while( (part = ucFirst( parts.shift() )) ) {
                    host[ part ] = host[ part ] || {};
                    host = host[ part ];
                }

                host[ last ] = modules[ key ];
            }

            return obj;
        },

        makeExport = function( dollar ) {
            root.__dollar = dollar;

            // exports every module.
            return exportsTo( factory( root, _define, _require ) );
        },

        origin;

    if ( typeof module === 'object' && typeof module.exports === 'object' ) {

        // For CommonJS and CommonJS-like environments where a proper window is present,
        module.exports = makeExport();
    } else if ( typeof define === 'function' && define.amd ) {

        // Allow using this built library as an AMD module
        // in another project. That other project will only
        // see this AMD call, not the internal modules in
        // the closure below.
        define([ 'jquery' ], makeExport );
    } else {

        // Browser globals case. Just assign the
        // result to a property on the global.
        origin = root.WebUploader;
        root.WebUploader = makeExport();
        root.WebUploader.noConflict = function() {
            root.WebUploader = origin;
        };
    }
})( window, function( window, define, require ) {


    /**
     * @fileOverview jQuery or Zepto
     */
    define('dollar-third',[],function() {
        var $ = window.__dollar || window.jQuery || window.Zepto;
    
        if ( !$ ) {
            throw new Error('jQuery or Zepto not found!');
        }
    
        return $;
    });
    /**
     * @fileOverview Dom 操作相关
     */
    define('dollar',[
        'dollar-third'
    ], function( _ ) {
        return _;
    });
    /**
     * @fileOverview 使用jQuery的Promise
     */
    define('promise-third',[
        'dollar'
    ], function( $ ) {
        return {
            Deferred: $.Deferred,
            when: $.when,
    
            isPromise: function( anything ) {
                return anything && typeof anything.then === 'function';
            }
        };
    });
    /**
     * @fileOverview Promise/A+
     */
    define('promise',[
        'promise-third'
    ], function( _ ) {
        return _;
    });
    /**
     * @fileOverview 基础类方法。
     */
    
    /**
     * Web Uploader内部类的详细说明，以下提及的功能类，都可以在`WebUploader`这个变量中访问到。
     *
     * As you know, Web Uploader的每个文件都是用过[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)规范中的`define`组织起来的, 每个Module都会有个module id.
     * 默认module id为该文件的路径，而此路径将会转化成名字空间存放在WebUploader中。如：
     *
     * * module `base`：WebUploader.Base
     * * module `file`: WebUploader.File
     * * module `lib/dnd`: WebUploader.Lib.Dnd
     * * module `runtime/html5/dnd`: WebUploader.Runtime.Html5.Dnd
     *
     *
     * 以下文档中对类的使用可能省略掉了`WebUploader`前缀。
     * @module WebUploader
     * @title WebUploader API文档
     */
    define('base',[
        'dollar',
        'promise'
    ], function( $, promise ) {
    
        var noop = function() {},
            call = Function.call;
    
        // http://jsperf.com/uncurrythis
        // 反科里化
        function uncurryThis( fn ) {
            return function() {
                return call.apply( fn, arguments );
            };
        }
    
        function bindFn( fn, context ) {
            return function() {
                return fn.apply( context, arguments );
            };
        }
    
        function createObject( proto ) {
            var f;
    
            if ( Object.create ) {
                return Object.create( proto );
            } else {
                f = function() {};
                f.prototype = proto;
                return new f();
            }
        }
    
    
        /**
         * 基础类，提供一些简单常用的方法。
         * @class Base
         */
        return {
    
            /**
             * @property {String} version 当前版本号。
             */
            version: '0.1.5',
    
            /**
             * @property {jQuery|Zepto} $ 引用依赖的jQuery或者Zepto对象。
             */
            $: $,
    
            Deferred: promise.Deferred,
    
            isPromise: promise.isPromise,
    
            when: promise.when,
    
            /**
             * @description  简单的浏览器检查结果。
             *
             * * `webkit`  webkit版本号，如果浏览器为非webkit内核，此属性为`undefined`。
             * * `chrome`  chrome浏览器版本号，如果浏览器为chrome，此属性为`undefined`。
             * * `ie`  ie浏览器版本号，如果浏览器为非ie，此属性为`undefined`。**暂不支持ie10+**
             * * `firefox`  firefox浏览器版本号，如果浏览器为非firefox，此属性为`undefined`。
             * * `safari`  safari浏览器版本号，如果浏览器为非safari，此属性为`undefined`。
             * * `opera`  opera浏览器版本号，如果浏览器为非opera，此属性为`undefined`。
             *
             * @property {Object} [browser]
             */
            browser: (function( ua ) {
                var ret = {},
                    webkit = ua.match( /WebKit\/([\d.]+)/ ),
                    chrome = ua.match( /Chrome\/([\d.]+)/ ) ||
                        ua.match( /CriOS\/([\d.]+)/ ),
    
                    ie = ua.match( /MSIE\s([\d\.]+)/ ) ||
                        ua.match( /(?:trident)(?:.*rv:([\w.]+))?/i ),
                    firefox = ua.match( /Firefox\/([\d.]+)/ ),
                    safari = ua.match( /Safari\/([\d.]+)/ ),
                    opera = ua.match( /OPR\/([\d.]+)/ );
    
                webkit && (ret.webkit = parseFloat( webkit[ 1 ] ));
                chrome && (ret.chrome = parseFloat( chrome[ 1 ] ));
                ie && (ret.ie = parseFloat( ie[ 1 ] ));
                firefox && (ret.firefox = parseFloat( firefox[ 1 ] ));
                safari && (ret.safari = parseFloat( safari[ 1 ] ));
                opera && (ret.opera = parseFloat( opera[ 1 ] ));
    
                return ret;
            })( navigator.userAgent ),
    
            /**
             * @description  操作系统检查结果。
             *
             * * `android`  如果在android浏览器环境下，此值为对应的android版本号，否则为`undefined`。
             * * `ios` 如果在ios浏览器环境下，此值为对应的ios版本号，否则为`undefined`。
             * @property {Object} [os]
             */
            os: (function( ua ) {
                var ret = {},
    
                    // osx = !!ua.match( /\(Macintosh\; Intel / ),
                    android = ua.match( /(?:Android);?[\s\/]+([\d.]+)?/ ),
                    ios = ua.match( /(?:iPad|iPod|iPhone).*OS\s([\d_]+)/ );
    
                // osx && (ret.osx = true);
                android && (ret.android = parseFloat( android[ 1 ] ));
                ios && (ret.ios = parseFloat( ios[ 1 ].replace( /_/g, '.' ) ));
    
                return ret;
            })( navigator.userAgent ),
    
            /**
             * 实现类与类之间的继承。
             * @method inherits
             * @grammar Base.inherits( super ) => child
             * @grammar Base.inherits( super, protos ) => child
             * @grammar Base.inherits( super, protos, statics ) => child
             * @param  {Class} super 父类
             * @param  {Object | Function} [protos] 子类或者对象。如果对象中包含constructor，子类将是用此属性值。
             * @param  {Function} [protos.constructor] 子类构造器，不指定的话将创建个临时的直接执行父类构造器的方法。
             * @param  {Object} [statics] 静态属性或方法。
             * @return {Class} 返回子类。
             * @example
             * function Person() {
             *     console.log( 'Super' );
             * }
             * Person.prototype.hello = function() {
             *     console.log( 'hello' );
             * };
             *
             * var Manager = Base.inherits( Person, {
             *     world: function() {
             *         console.log( 'World' );
             *     }
             * });
             *
             * // 因为没有指定构造器，父类的构造器将会执行。
             * var instance = new Manager();    // => Super
             *
             * // 继承子父类的方法
             * instance.hello();    // => hello
             * instance.world();    // => World
             *
             * // 子类的__super__属性指向父类
             * console.log( Manager.__super__ === Person );    // => true
             */
            inherits: function( Super, protos, staticProtos ) {
                var child;
    
                if ( typeof protos === 'function' ) {
                    child = protos;
                    protos = null;
                } else if ( protos && protos.hasOwnProperty('constructor') ) {
                    child = protos.constructor;
                } else {
                    child = function() {
                        return Super.apply( this, arguments );
                    };
                }
    
                // 复制静态方法
                $.extend( true, child, Super, staticProtos || {} );
    
                /* jshint camelcase: false */
    
                // 让子类的__super__属性指向父类。
                child.__super__ = Super.prototype;
    
                // 构建原型，添加原型方法或属性。
                // 暂时用Object.create实现。
                child.prototype = createObject( Super.prototype );
                protos && $.extend( true, child.prototype, protos );
    
                return child;
            },
    
            /**
             * 一个不做任何事情的方法。可以用来赋值给默认的callback.
             * @method noop
             */
            noop: noop,
    
            /**
             * 返回一个新的方法，此方法将已指定的`context`来执行。
             * @grammar Base.bindFn( fn, context ) => Function
             * @method bindFn
             * @example
             * var doSomething = function() {
             *         console.log( this.name );
             *     },
             *     obj = {
             *         name: 'Object Name'
             *     },
             *     aliasFn = Base.bind( doSomething, obj );
             *
             *  aliasFn();    // => Object Name
             *
             */
            bindFn: bindFn,
    
            /**
             * 引用Console.log如果存在的话，否则引用一个[空函数noop](#WebUploader:Base.noop)。
             * @grammar Base.log( args... ) => undefined
             * @method log
             */
            log: (function() {
                if ( window.console ) {
                    return bindFn( console.log, console );
                }
                return noop;
            })(),
    
            nextTick: (function() {
    
                return function( cb ) {
                    setTimeout( cb, 1 );
                };
    
                // @bug 当浏览器不在当前窗口时就停了。
                // var next = window.requestAnimationFrame ||
                //     window.webkitRequestAnimationFrame ||
                //     window.mozRequestAnimationFrame ||
                //     function( cb ) {
                //         window.setTimeout( cb, 1000 / 60 );
                //     };
    
                // // fix: Uncaught TypeError: Illegal invocation
                // return bindFn( next, window );
            })(),
    
            /**
             * 被[uncurrythis](http://www.2ality.com/2011/11/uncurrying-this.html)的数组slice方法。
             * 将用来将非数组对象转化成数组对象。
             * @grammar Base.slice( target, start[, end] ) => Array
             * @method slice
             * @example
             * function doSomthing() {
             *     var args = Base.slice( arguments, 1 );
             *     console.log( args );
             * }
             *
             * doSomthing( 'ignored', 'arg2', 'arg3' );    // => Array ["arg2", "arg3"]
             */
            slice: uncurryThis( [].slice ),
    
            /**
             * 生成唯一的ID
             * @method guid
             * @grammar Base.guid() => String
             * @grammar Base.guid( prefx ) => String
             */
            guid: (function() {
                var counter = 0;
    
                return function( prefix ) {
                    var guid = (+new Date()).toString( 32 ),
                        i = 0;
    
                    for ( ; i < 5; i++ ) {
                        guid += Math.floor( Math.random() * 65535 ).toString( 32 );
                    }
    
                    return (prefix || 'wu_') + guid + (counter++).toString( 32 );
                };
            })(),
    
            /**
             * 格式化文件大小, 输出成带单位的字符串
             * @method formatSize
             * @grammar Base.formatSize( size ) => String
             * @grammar Base.formatSize( size, pointLength ) => String
             * @grammar Base.formatSize( size, pointLength, units ) => String
             * @param {Number} size 文件大小
             * @param {Number} [pointLength=2] 精确到的小数点数。
             * @param {Array} [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
             * @example
             * console.log( Base.formatSize( 100 ) );    // => 100B
             * console.log( Base.formatSize( 1024 ) );    // => 1.00K
             * console.log( Base.formatSize( 1024, 0 ) );    // => 1K
             * console.log( Base.formatSize( 1024 * 1024 ) );    // => 1.00M
             * console.log( Base.formatSize( 1024 * 1024 * 1024 ) );    // => 1.00G
             * console.log( Base.formatSize( 1024 * 1024 * 1024, 0, ['B', 'KB', 'MB'] ) );    // => 1024MB
             */
            formatSize: function( size, pointLength, units ) {
                var unit;
    
                units = units || [ 'B', 'K', 'M', 'G', 'TB' ];
    
                while ( (unit = units.shift()) && size > 1024 ) {
                    size = size / 1024;
                }
    
                return (unit === 'B' ? size : size.toFixed( pointLength || 2 )) +
                        unit;
            }
        };
    });
    /**
     * 事件处理类，可以独立使用，也可以扩展给对象使用。
     * @fileOverview Mediator
     */
    define('mediator',[
        'base'
    ], function( Base ) {
        var $ = Base.$,
            slice = [].slice,
            separator = /\s+/,
            protos;
    
        // 根据条件过滤出事件handlers.
        function findHandlers( arr, name, callback, context ) {
            return $.grep( arr, function( handler ) {
                return handler &&
                        (!name || handler.e === name) &&
                        (!callback || handler.cb === callback ||
                        handler.cb._cb === callback) &&
                        (!context || handler.ctx === context);
            });
        }
    
        function eachEvent( events, callback, iterator ) {
            // 不支持对象，只支持多个event用空格隔开
            $.each( (events || '').split( separator ), function( _, key ) {
                iterator( key, callback );
            });
        }
    
        function triggerHanders( events, args ) {
            var stoped = false,
                i = -1,
                len = events.length,
                handler;
    
            while ( ++i < len ) {
                handler = events[ i ];
    
                if ( handler.cb.apply( handler.ctx2, args ) === false ) {
                    stoped = true;
                    break;
                }
            }
    
            return !stoped;
        }
    
        protos = {
    
            /**
             * 绑定事件。
             *
             * `callback`方法在执行时，arguments将会来源于trigger的时候携带的参数。如
             * ```javascript
             * var obj = {};
             *
             * // 使得obj有事件行为
             * Mediator.installTo( obj );
             *
             * obj.on( 'testa', function( arg1, arg2 ) {
             *     console.log( arg1, arg2 ); // => 'arg1', 'arg2'
             * });
             *
             * obj.trigger( 'testa', 'arg1', 'arg2' );
             * ```
             *
             * 如果`callback`中，某一个方法`return false`了，则后续的其他`callback`都不会被执行到。
             * 切会影响到`trigger`方法的返回值，为`false`。
             *
             * `on`还可以用来添加一个特殊事件`all`, 这样所有的事件触发都会响应到。同时此类`callback`中的arguments有一个不同处，
             * 就是第一个参数为`type`，记录当前是什么事件在触发。此类`callback`的优先级比脚低，会再正常`callback`执行完后触发。
             * ```javascript
             * obj.on( 'all', function( type, arg1, arg2 ) {
             *     console.log( type, arg1, arg2 ); // => 'testa', 'arg1', 'arg2'
             * });
             * ```
             *
             * @method on
             * @grammar on( name, callback[, context] ) => self
             * @param  {String}   name     事件名，支持多个事件用空格隔开
             * @param  {Function} callback 事件处理器
             * @param  {Object}   [context]  事件处理器的上下文。
             * @return {self} 返回自身，方便链式
             * @chainable
             * @class Mediator
             */
            on: function( name, callback, context ) {
                var me = this,
                    set;
    
                if ( !callback ) {
                    return this;
                }
    
                set = this._events || (this._events = []);
    
                eachEvent( name, callback, function( name, callback ) {
                    var handler = { e: name };
    
                    handler.cb = callback;
                    handler.ctx = context;
                    handler.ctx2 = context || me;
                    handler.id = set.length;
    
                    set.push( handler );
                });
    
                return this;
            },
    
            /**
             * 绑定事件，且当handler执行完后，自动解除绑定。
             * @method once
             * @grammar once( name, callback[, context] ) => self
             * @param  {String}   name     事件名
             * @param  {Function} callback 事件处理器
             * @param  {Object}   [context]  事件处理器的上下文。
             * @return {self} 返回自身，方便链式
             * @chainable
             */
            once: function( name, callback, context ) {
                var me = this;
    
                if ( !callback ) {
                    return me;
                }
    
                eachEvent( name, callback, function( name, callback ) {
                    var once = function() {
                            me.off( name, once );
                            return callback.apply( context || me, arguments );
                        };
    
                    once._cb = callback;
                    me.on( name, once, context );
                });
    
                return me;
            },
    
            /**
             * 解除事件绑定
             * @method off
             * @grammar off( [name[, callback[, context] ] ] ) => self
             * @param  {String}   [name]     事件名
             * @param  {Function} [callback] 事件处理器
             * @param  {Object}   [context]  事件处理器的上下文。
             * @return {self} 返回自身，方便链式
             * @chainable
             */
            off: function( name, cb, ctx ) {
                var events = this._events;
    
                if ( !events ) {
                    return this;
                }
    
                if ( !name && !cb && !ctx ) {
                    this._events = [];
                    return this;
                }
    
                eachEvent( name, cb, function( name, cb ) {
                    $.each( findHandlers( events, name, cb, ctx ), function() {
                        delete events[ this.id ];
                    });
                });
    
                return this;
            },
    
            /**
             * 触发事件
             * @method trigger
             * @grammar trigger( name[, args...] ) => self
             * @param  {String}   type     事件名
             * @param  {*} [...] 任意参数
             * @return {Boolean} 如果handler中return false了，则返回false, 否则返回true
             */
            trigger: function( type ) {
                var args, events, allEvents;
    
                if ( !this._events || !type ) {
                    return this;
                }
    
                args = slice.call( arguments, 1 );
                events = findHandlers( this._events, type );
                allEvents = findHandlers( this._events, 'all' );
    
                return triggerHanders( events, args ) &&
                        triggerHanders( allEvents, arguments );
            }
        };
    
        /**
         * 中介者，它本身是个单例，但可以通过[installTo](#WebUploader:Mediator:installTo)方法，使任何对象具备事件行为。
         * 主要目的是负责模块与模块之间的合作，降低耦合度。
         *
         * @class Mediator
         */
        return $.extend({
    
            /**
             * 可以通过这个接口，使任何对象具备事件功能。
             * @method installTo
             * @param  {Object} obj 需要具备事件行为的对象。
             * @return {Object} 返回obj.
             */
            installTo: function( obj ) {
                return $.extend( obj, protos );
            }
    
        }, protos );
    });
    /**
     * @fileOverview Uploader上传类
     */
    define('uploader',[
        'base',
        'mediator'
    ], function( Base, Mediator ) {
    
        var $ = Base.$;
    
        /**
         * 上传入口类。
         * @class Uploader
         * @constructor
         * @grammar new Uploader( opts ) => Uploader
         * @example
         * var uploader = WebUploader.Uploader({
         *     swf: 'path_of_swf/Uploader.swf',
         *
         *     // 开起分片上传。
         *     chunked: true
         * });
         */
        function Uploader( opts ) {
            this.options = $.extend( true, {}, Uploader.options, opts );
            this._init( this.options );
        }
    
        // default Options
        // widgets中有相应扩展
        Uploader.options = {};
        Mediator.installTo( Uploader.prototype );
    
        // 批量添加纯命令式方法。
        $.each({
            upload: 'start-upload',
            stop: 'stop-upload',
            getFile: 'get-file',
            getFiles: 'get-files',
            addFile: 'add-file',
            addFiles: 'add-file',
            sort: 'sort-files',
            removeFile: 'remove-file',
            cancelFile: 'cancel-file',
            skipFile: 'skip-file',
            retry: 'retry',
            isInProgress: 'is-in-progress',
            makeThumb: 'make-thumb',
            md5File: 'md5-file',
            getDimension: 'get-dimension',
            addButton: 'add-btn',
            predictRuntimeType: 'predict-runtime-type',
            refresh: 'refresh',
            disable: 'disable',
            enable: 'enable',
            reset: 'reset'
        }, function( fn, command ) {
            Uploader.prototype[ fn ] = function() {
                return this.request( command, arguments );
            };
        });
    
        $.extend( Uploader.prototype, {
            state: 'pending',
    
            _init: function( opts ) {
                var me = this;
    
                me.request( 'init', opts, function() {
                    me.state = 'ready';
                    me.trigger('ready');
                });
            },
    
            /**
             * 获取或者设置Uploader配置项。
             * @method option
             * @grammar option( key ) => *
             * @grammar option( key, val ) => self
             * @example
             *
             * // 初始状态图片上传前不会压缩
             * var uploader = new WebUploader.Uploader({
             *     compress: null;
             * });
             *
             * // 修改后图片上传前，尝试将图片压缩到1600 * 1600
             * uploader.option( 'compress', {
             *     width: 1600,
             *     height: 1600
             * });
             */
            option: function( key, val ) {
                var opts = this.options;
    
                // setter
                if ( arguments.length > 1 ) {
    
                    if ( $.isPlainObject( val ) &&
                            $.isPlainObject( opts[ key ] ) ) {
                        $.extend( opts[ key ], val );
                    } else {
                        opts[ key ] = val;
                    }
    
                } else {    // getter
                    return key ? opts[ key ] : opts;
                }
            },
    
            /**
             * 获取文件统计信息。返回一个包含一下信息的对象。
             * * `successNum` 上传成功的文件数
             * * `progressNum` 上传中的文件数
             * * `cancelNum` 被删除的文件数
             * * `invalidNum` 无效的文件数
             * * `uploadFailNum` 上传失败的文件数
             * * `queueNum` 还在队列中的文件数
             * * `interruptNum` 被暂停的文件数
             * @method getStats
             * @grammar getStats() => Object
             */
            getStats: function() {
                // return this._mgr.getStats.apply( this._mgr, arguments );
                var stats = this.request('get-stats');
    
                return stats ? {
                    successNum: stats.numOfSuccess,
                    progressNum: stats.numOfProgress,
    
                    // who care?
                    // queueFailNum: 0,
                    cancelNum: stats.numOfCancel,
                    invalidNum: stats.numOfInvalid,
                    uploadFailNum: stats.numOfUploadFailed,
                    queueNum: stats.numOfQueue,
                    interruptNum: stats.numofInterrupt
                } : {};
            },
    
            // 需要重写此方法来来支持opts.onEvent和instance.onEvent的处理器
            trigger: function( type/*, args...*/ ) {
                var args = [].slice.call( arguments, 1 ),
                    opts = this.options,
                    name = 'on' + type.substring( 0, 1 ).toUpperCase() +
                        type.substring( 1 );
    
                if (
                        // 调用通过on方法注册的handler.
                        Mediator.trigger.apply( this, arguments ) === false ||
    
                        // 调用opts.onEvent
                        $.isFunction( opts[ name ] ) &&
                        opts[ name ].apply( this, args ) === false ||
    
                        // 调用this.onEvent
                        $.isFunction( this[ name ] ) &&
                        this[ name ].apply( this, args ) === false ||
    
                        // 广播所有uploader的事件。
                        Mediator.trigger.apply( Mediator,
                        [ this, type ].concat( args ) ) === false ) {
    
                    return false;
                }
    
                return true;
            },
    
            /**
             * 销毁 webuploader 实例
             * @method destroy
             * @grammar destroy() => undefined
             */
            destroy: function() {
                this.request( 'destroy', arguments );
                this.off();
            },
    
            // widgets/widget.js将补充此方法的详细文档。
            request: Base.noop
        });
    
        /**
         * 创建Uploader实例，等同于new Uploader( opts );
         * @method create
         * @class Base
         * @static
         * @grammar Base.create( opts ) => Uploader
         */
        Base.create = Uploader.create = function( opts ) {
            return new Uploader( opts );
        };
    
        // 暴露Uploader，可以通过它来扩展业务逻辑。
        Base.Uploader = Uploader;
    
        return Uploader;
    });
    /**
     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
     */
    define('runtime/runtime',[
        'base',
        'mediator'
    ], function( Base, Mediator ) {
    
        var $ = Base.$,
            factories = {},
    
            // 获取对象的第一个key
            getFirstKey = function( obj ) {
                for ( var key in obj ) {
                    if ( obj.hasOwnProperty( key ) ) {
                        return key;
                    }
                }
                return null;
            };
    
        // 接口类。
        function Runtime( options ) {
            this.options = $.extend({
                container: document.body
            }, options );
            this.uid = Base.guid('rt_');
        }
    
        $.extend( Runtime.prototype, {
    
            getContainer: function() {
                var opts = this.options,
                    parent, container;
    
                if ( this._container ) {
                    return this._container;
                }
    
                parent = $( opts.container || document.body );
                container = $( document.createElement('div') );
    
                container.attr( 'id', 'rt_' + this.uid );
                container.css({
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden'
                });
    
                parent.append( container );
                parent.addClass('webuploader-container');
                this._container = container;
                this._parent = parent;
                return container;
            },
    
            init: Base.noop,
            exec: Base.noop,
    
            destroy: function() {
                this._container && this._container.remove();
                this._parent && this._parent.removeClass('webuploader-container');
                this.off();
            }
        });
    
        Runtime.orders = 'html5,flash';
    
    
        /**
         * 添加Runtime实现。
         * @param {String} type    类型
         * @param {Runtime} factory 具体Runtime实现。
         */
        Runtime.addRuntime = function( type, factory ) {
            factories[ type ] = factory;
        };
    
        Runtime.hasRuntime = function( type ) {
            return !!(type ? factories[ type ] : getFirstKey( factories ));
        };
    
        Runtime.create = function( opts, orders ) {
            var type, runtime;
    
            orders = orders || Runtime.orders;
            $.each( orders.split( /\s*,\s*/g ), function() {
                if ( factories[ this ] ) {
                    type = this;
                    return false;
                }
            });
    
            type = type || getFirstKey( factories );
    
            if ( !type ) {
                throw new Error('Runtime Error');
            }
    
            runtime = new factories[ type ]( opts );
            return runtime;
        };
    
        Mediator.installTo( Runtime.prototype );
        return Runtime;
    });
    
    /**
     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
     */
    define('runtime/client',[
        'base',
        'mediator',
        'runtime/runtime'
    ], function( Base, Mediator, Runtime ) {
    
        var cache;
    
        cache = (function() {
            var obj = {};
    
            return {
                add: function( runtime ) {
                    obj[ runtime.uid ] = runtime;
                },
    
                get: function( ruid, standalone ) {
                    var i;
    
                    if ( ruid ) {
                        return obj[ ruid ];
                    }
    
                    for ( i in obj ) {
                        // 有些类型不能重用，比如filepicker.
                        if ( standalone && obj[ i ].__standalone ) {
                            continue;
                        }
    
                        return obj[ i ];
                    }
    
                    return null;
                },
    
                remove: function( runtime ) {
                    delete obj[ runtime.uid ];
                }
            };
        })();
    
        function RuntimeClient( component, standalone ) {
            var deferred = Base.Deferred(),
                runtime;
    
            this.uid = Base.guid('client_');
    
            // 允许runtime没有初始化之前，注册一些方法在初始化后执行。
            this.runtimeReady = function( cb ) {
                return deferred.done( cb );
            };
    
            this.connectRuntime = function( opts, cb ) {
    
                // already connected.
                if ( runtime ) {
                    throw new Error('already connected!');
                }
    
                deferred.done( cb );
    
                if ( typeof opts === 'string' && cache.get( opts ) ) {
                    runtime = cache.get( opts );
                }
    
                // 像filePicker只能独立存在，不能公用。
                runtime = runtime || cache.get( null, standalone );
    
                // 需要创建
                if ( !runtime ) {
                    runtime = Runtime.create( opts, opts.runtimeOrder );
                    runtime.__promise = deferred.promise();
                    runtime.once( 'ready', deferred.resolve );
                    runtime.init();
                    cache.add( runtime );
                    runtime.__client = 1;
                } else {
                    // 来自cache
                    Base.$.extend( runtime.options, opts );
                    runtime.__promise.then( deferred.resolve );
                    runtime.__client++;
                }
    
                standalone && (runtime.__standalone = standalone);
                return runtime;
            };
    
            this.getRuntime = function() {
                return runtime;
            };
    
            this.disconnectRuntime = function() {
                if ( !runtime ) {
                    return;
                }
    
                runtime.__client--;
    
                if ( runtime.__client <= 0 ) {
                    cache.remove( runtime );
                    delete runtime.__promise;
                    runtime.destroy();
                }
    
                runtime = null;
            };
    
            this.exec = function() {
                if ( !runtime ) {
                    return;
                }
    
                var args = Base.slice( arguments );
                component && args.unshift( component );
    
                return runtime.exec.apply( this, args );
            };
    
            this.getRuid = function() {
                return runtime && runtime.uid;
            };
    
            this.destroy = (function( destroy ) {
                return function() {
                    destroy && destroy.apply( this, arguments );
                    this.trigger('destroy');
                    this.off();
                    this.exec('destroy');
                    this.disconnectRuntime();
                };
            })( this.destroy );
        }
    
        Mediator.installTo( RuntimeClient.prototype );
        return RuntimeClient;
    });
    /**
     * @fileOverview 错误信息
     */
    define('lib/dnd',[
        'base',
        'mediator',
        'runtime/client'
    ], function( Base, Mediator, RuntimeClent ) {
    
        var $ = Base.$;
    
        function DragAndDrop( opts ) {
            opts = this.options = $.extend({}, DragAndDrop.options, opts );
    
            opts.container = $( opts.container );
    
            if ( !opts.container.length ) {
                return;
            }
    
            RuntimeClent.call( this, 'DragAndDrop' );
        }
    
        DragAndDrop.options = {
            accept: null,
            disableGlobalDnd: false
        };
    
        Base.inherits( RuntimeClent, {
            constructor: DragAndDrop,
    
            init: function() {
                var me = this;
    
                me.connectRuntime( me.options, function() {
                    me.exec('init');
                    me.trigger('ready');
                });
            }
        });
    
        Mediator.installTo( DragAndDrop.prototype );
    
        return DragAndDrop;
    });
    /**
     * @fileOverview 组件基类。
     */
    define('widgets/widget',[
        'base',
        'uploader'
    ], function( Base, Uploader ) {
    
        var $ = Base.$,
            _init = Uploader.prototype._init,
            _destroy = Uploader.prototype.destroy,
            IGNORE = {},
            widgetClass = [];
    
        function isArrayLike( obj ) {
            if ( !obj ) {
                return false;
            }
    
            var length = obj.length,
                type = $.type( obj );
    
            if ( obj.nodeType === 1 && length ) {
                return true;
            }
    
            return type === 'array' || type !== 'function' && type !== 'string' &&
                    (length === 0 || typeof length === 'number' && length > 0 &&
                    (length - 1) in obj);
        }
    
        function Widget( uploader ) {
            this.owner = uploader;
            this.options = uploader.options;
        }
    
        $.extend( Widget.prototype, {
    
            init: Base.noop,
    
            // 类Backbone的事件监听声明，监听uploader实例上的事件
            // widget直接无法监听事件，事件只能通过uploader来传递
            invoke: function( apiName, args ) {
    
                /*
                    {
                        'make-thumb': 'makeThumb'
                    }
                 */
                var map = this.responseMap;
    
                // 如果无API响应声明则忽略
                if ( !map || !(apiName in map) || !(map[ apiName ] in this) ||
                        !$.isFunction( this[ map[ apiName ] ] ) ) {
    
                    return IGNORE;
                }
    
                return this[ map[ apiName ] ].apply( this, args );
    
            },
    
            /**
             * 发送命令。当传入`callback`或者`handler`中返回`promise`时。返回一个当所有`handler`中的promise都完成后完成的新`promise`。
             * @method request
             * @grammar request( command, args ) => * | Promise
             * @grammar request( command, args, callback ) => Promise
             * @for  Uploader
             */
            request: function() {
                return this.owner.request.apply( this.owner, arguments );
            }
        });
    
        // 扩展Uploader.
        $.extend( Uploader.prototype, {
    
            /**
             * @property {String | Array} [disableWidgets=undefined]
             * @namespace options
             * @for Uploader
             * @description 默认所有 Uploader.register 了的 widget 都会被加载，如果禁用某一部分，请通过此 option 指定黑名单。
             */
    
            // 覆写_init用来初始化widgets
            _init: function() {
                var me = this,
                    widgets = me._widgets = [],
                    deactives = me.options.disableWidgets || '';
    
                $.each( widgetClass, function( _, klass ) {
                    (!deactives || !~deactives.indexOf( klass._name )) &&
                        widgets.push( new klass( me ) );
                });
    
                return _init.apply( me, arguments );
            },
    
            request: function( apiName, args, callback ) {
                var i = 0,
                    widgets = this._widgets,
                    len = widgets && widgets.length,
                    rlts = [],
                    dfds = [],
                    widget, rlt, promise, key;
    
                args = isArrayLike( args ) ? args : [ args ];
    
                for ( ; i < len; i++ ) {
                    widget = widgets[ i ];
                    rlt = widget.invoke( apiName, args );
    
                    if ( rlt !== IGNORE ) {
    
                        // Deferred对象
                        if ( Base.isPromise( rlt ) ) {
                            dfds.push( rlt );
                        } else {
                            rlts.push( rlt );
                        }
                    }
                }
    
                // 如果有callback，则用异步方式。
                if ( callback || dfds.length ) {
                    promise = Base.when.apply( Base, dfds );
                    key = promise.pipe ? 'pipe' : 'then';
    
                    // 很重要不能删除。删除了会死循环。
                    // 保证执行顺序。让callback总是在下一个 tick 中执行。
                    return promise[ key ](function() {
                                var deferred = Base.Deferred(),
                                    args = arguments;
    
                                if ( args.length === 1 ) {
                                    args = args[ 0 ];
                                }
    
                                setTimeout(function() {
                                    deferred.resolve( args );
                                }, 1 );
    
                                return deferred.promise();
                            })[ callback ? key : 'done' ]( callback || Base.noop );
                } else {
                    return rlts[ 0 ];
                }
            },
    
            destroy: function() {
                _destroy.apply( this, arguments );
                this._widgets = null;
            }
        });
    
        /**
         * 添加组件
         * @grammar Uploader.register(proto);
         * @grammar Uploader.register(map, proto);
         * @param  {object} responseMap API 名称与函数实现的映射
         * @param  {object} proto 组件原型，构造函数通过 constructor 属性定义
         * @method Uploader.register
         * @for Uploader
         * @example
         * Uploader.register({
         *     'make-thumb': 'makeThumb'
         * }, {
         *     init: function( options ) {},
         *     makeThumb: function() {}
         * });
         *
         * Uploader.register({
         *     'make-thumb': function() {
         *         
         *     }
         * });
         */
        Uploader.register = Widget.register = function( responseMap, widgetProto ) {
            var map = { init: 'init', destroy: 'destroy', name: 'anonymous' },
                klass;
    
            if ( arguments.length === 1 ) {
                widgetProto = responseMap;
    
                // 自动生成 map 表。
                $.each(widgetProto, function(key) {
                    if ( key[0] === '_' || key === 'name' ) {
                        key === 'name' && (map.name = widgetProto.name);
                        return;
                    }
    
                    map[key.replace(/[A-Z]/g, '-$&').toLowerCase()] = key;
                });
    
            } else {
                map = $.extend( map, responseMap );
            }
    
            widgetProto.responseMap = map;
            klass = Base.inherits( Widget, widgetProto );
            klass._name = map.name;
            widgetClass.push( klass );
    
            return klass;
        };
    
        /**
         * 删除插件，只有在注册时指定了名字的才能被删除。
         * @grammar Uploader.unRegister(name);
         * @param  {string} name 组件名字
         * @method Uploader.unRegister
         * @for Uploader
         * @example
         *
         * Uploader.register({
         *     name: 'custom',
         *     
         *     'make-thumb': function() {
         *         
         *     }
         * });
         *
         * Uploader.unRegister('custom');
         */
        Uploader.unRegister = Widget.unRegister = function( name ) {
            if ( !name || name === 'anonymous' ) {
                return;
            }
            
            // 删除指定的插件。
            for ( var i = widgetClass.length; i--; ) {
                if ( widgetClass[i]._name === name ) {
                    widgetClass.splice(i, 1)
                }
            }
        };
    
        return Widget;
    });
    /**
     * @fileOverview DragAndDrop Widget。
     */
    define('widgets/filednd',[
        'base',
        'uploader',
        'lib/dnd',
        'widgets/widget'
    ], function( Base, Uploader, Dnd ) {
        var $ = Base.$;
    
        Uploader.options.dnd = '';
    
        /**
         * @property {Selector} [dnd=undefined]  指定Drag And Drop拖拽的容器，如果不指定，则不启动。
         * @namespace options
         * @for Uploader
         */
        
        /**
         * @property {Selector} [disableGlobalDnd=false]  是否禁掉整个页面的拖拽功能，如果不禁用，图片拖进来的时候会默认被浏览器打开。
         * @namespace options
         * @for Uploader
         */
    
        /**
         * @event dndAccept
         * @param {DataTransferItemList} items DataTransferItem
         * @description 阻止此事件可以拒绝某些类型的文件拖入进来。目前只有 chrome 提供这样的 API，且只能通过 mime-type 验证。
         * @for  Uploader
         */
        return Uploader.register({
            name: 'dnd',
            
            init: function( opts ) {
    
                if ( !opts.dnd ||
                        this.request('predict-runtime-type') !== 'html5' ) {
                    return;
                }
    
                var me = this,
                    deferred = Base.Deferred(),
                    options = $.extend({}, {
                        disableGlobalDnd: opts.disableGlobalDnd,
                        container: opts.dnd,
                        accept: opts.accept
                    }),
                    dnd;
    
                this.dnd = dnd = new Dnd( options );
    
                dnd.once( 'ready', deferred.resolve );
                dnd.on( 'drop', function( files ) {
                    me.request( 'add-file', [ files ]);
                });
    
                // 检测文件是否全部允许添加。
                dnd.on( 'accept', function( items ) {
                    return me.owner.trigger( 'dndAccept', items );
                });
    
                dnd.init();
    
                return deferred.promise();
            },
    
            destroy: function() {
                this.dnd && this.dnd.destroy();
            }
        });
    });
    
    /**
     * @fileOverview 错误信息
     */
    define('lib/filepaste',[
        'base',
        'mediator',
        'runtime/client'
    ], function( Base, Mediator, RuntimeClent ) {
    
        var $ = Base.$;
    
        function FilePaste( opts ) {
            opts = this.options = $.extend({}, opts );
            opts.container = $( opts.container || document.body );
            RuntimeClent.call( this, 'FilePaste' );
        }
    
        Base.inherits( RuntimeClent, {
            constructor: FilePaste,
    
            init: function() {
                var me = this;
    
                me.connectRuntime( me.options, function() {
                    me.exec('init');
                    me.trigger('ready');
                });
            }
        });
    
        Mediator.installTo( FilePaste.prototype );
    
        return FilePaste;
    });
    /**
     * @fileOverview 组件基类。
     */
    define('widgets/filepaste',[
        'base',
        'uploader',
        'lib/filepaste',
        'widgets/widget'
    ], function( Base, Uploader, FilePaste ) {
        var $ = Base.$;
    
        /**
         * @property {Selector} [paste=undefined]  指定监听paste事件的容器，如果不指定，不启用此功能。此功能为通过粘贴来添加截屏的图片。建议设置为`document.body`.
         * @namespace options
         * @for Uploader
         */
        return Uploader.register({
            name: 'paste',
            
            init: function( opts ) {
    
                if ( !opts.paste ||
                        this.request('predict-runtime-type') !== 'html5' ) {
                    return;
                }
    
                var me = this,
                    deferred = Base.Deferred(),
                    options = $.extend({}, {
                        container: opts.paste,
                        accept: opts.accept
                    }),
                    paste;
    
                this.paste = paste = new FilePaste( options );
    
                paste.once( 'ready', deferred.resolve );
                paste.on( 'paste', function( files ) {
                    me.owner.request( 'add-file', [ files ]);
                });
                paste.init();
    
                return deferred.promise();
            },
    
            destroy: function() {
                this.paste && this.paste.destroy();
            }
        });
    });
    /**
     * @fileOverview Blob
     */
    define('lib/blob',[
        'base',
        'runtime/client'
    ], function( Base, RuntimeClient ) {
    
        function Blob( ruid, source ) {
            var me = this;
    
            me.source = source;
            me.ruid = ruid;
            this.size = source.size || 0;
    
            // 如果没有指定 mimetype, 但是知道文件后缀。
            if ( !source.type && this.ext &&
                    ~'jpg,jpeg,png,gif,bmp'.indexOf( this.ext ) ) {
                this.type = 'image/' + (this.ext === 'jpg' ? 'jpeg' : this.ext);
            } else {
                this.type = source.type || 'application/octet-stream';
            }
    
            RuntimeClient.call( me, 'Blob' );
            this.uid = source.uid || this.uid;
    
            if ( ruid ) {
                me.connectRuntime( ruid );
            }
        }
    
        Base.inherits( RuntimeClient, {
            constructor: Blob,
    
            slice: function( start, end ) {
                return this.exec( 'slice', start, end );
            },
    
            getSource: function() {
                return this.source;
            }
        });
    
        return Blob;
    });
    /**
     * 为了统一化Flash的File和HTML5的File而存在。
     * 以至于要调用Flash里面的File，也可以像调用HTML5版本的File一下。
     * @fileOverview File
     */
    define('lib/file',[
        'base',
        'lib/blob'
    ], function( Base, Blob ) {
    
        var uid = 1,
            rExt = /\.([^.]+)$/;
    
        function File( ruid, file ) {
            var ext;
    
            this.name = file.name || ('untitled' + uid++);
            ext = rExt.exec( file.name ) ? RegExp.$1.toLowerCase() : '';
    
            // todo 支持其他类型文件的转换。
            // 如果有 mimetype, 但是文件名里面没有找出后缀规律
            if ( !ext && file.type ) {
                ext = /\/(jpg|jpeg|png|gif|bmp)$/i.exec( file.type ) ?
                        RegExp.$1.toLowerCase() : '';
                this.name += '.' + ext;
            }
    
            this.ext = ext;
            this.lastModifiedDate = file.lastModifiedDate ||
                    (new Date()).toLocaleString();
    
            Blob.apply( this, arguments );
        }
    
        return Base.inherits( Blob, File );
    });
    
    /**
     * @fileOverview 错误信息
     */
    define('lib/filepicker',[
        'base',
        'runtime/client',
        'lib/file'
    ], function( Base, RuntimeClent, File ) {
    
        var $ = Base.$;
    
        function FilePicker( opts ) {
            opts = this.options = $.extend({}, FilePicker.options, opts );
    
            opts.container = $( opts.id );
    
            if ( !opts.container.length ) {
                throw new Error('按钮指定错误');
            }
    
            opts.innerHTML = opts.innerHTML || opts.label ||
                    opts.container.html() || '';
    
            opts.button = $( opts.button || document.createElement('div') );
            opts.button.html( opts.innerHTML );
            opts.container.html( opts.button );
    
            RuntimeClent.call( this, 'FilePicker', true );
        }
    
        FilePicker.options = {
            button: null,
            container: null,
            label: null,
            innerHTML: null,
            multiple: true,
            accept: null,
            name: 'file'
        };
    
        Base.inherits( RuntimeClent, {
            constructor: FilePicker,
    
            init: function() {
                var me = this,
                    opts = me.options,
                    button = opts.button;
    
                button.addClass('webuploader-pick');
    
                me.on( 'all', function( type ) {
                    var files;
    
                    switch ( type ) {
                        case 'mouseenter':
                            button.addClass('webuploader-pick-hover');
                            break;
    
                        case 'mouseleave':
                            button.removeClass('webuploader-pick-hover');
                            break;
    
                        case 'change':
                            files = me.exec('getFiles');
                            me.trigger( 'select', $.map( files, function( file ) {
                                file = new File( me.getRuid(), file );
    
                                // 记录来源。
                                file._refer = opts.container;
                                return file;
                            }), opts.container );
                            break;
                    }
                });
    
                me.connectRuntime( opts, function() {
                    me.refresh();
                    me.exec( 'init', opts );
                    me.trigger('ready');
                });
    
                this._resizeHandler = Base.bindFn( this.refresh, this );
                $( window ).on( 'resize', this._resizeHandler );
            },
    
            refresh: function() {
                var shimContainer = this.getRuntime().getContainer(),
                    button = this.options.button,
                    width = button.outerWidth ?
                            button.outerWidth() : button.width(),
    
                    height = button.outerHeight ?
                            button.outerHeight() : button.height(),
    
                    pos = button.offset();
    
                width && height && shimContainer.css({
                    bottom: 'auto',
                    right: 'auto',
                    width: width + 'px',
                    height: height + 'px'
                }).offset( pos );
            },
    
            enable: function() {
                var btn = this.options.button;
    
                btn.removeClass('webuploader-pick-disable');
                this.refresh();
            },
    
            disable: function() {
                var btn = this.options.button;
    
                this.getRuntime().getContainer().css({
                    top: '-99999px'
                });
    
                btn.addClass('webuploader-pick-disable');
            },
    
            destroy: function() {
                var btn = this.options.button;
                $( window ).off( 'resize', this._resizeHandler );
                btn.removeClass('webuploader-pick-disable webuploader-pick-hover ' +
                    'webuploader-pick');
            }
        });
    
        return FilePicker;
    });
    
    /**
     * @fileOverview 文件选择相关
     */
    define('widgets/filepicker',[
        'base',
        'uploader',
        'lib/filepicker',
        'widgets/widget'
    ], function( Base, Uploader, FilePicker ) {
        var $ = Base.$;
    
        $.extend( Uploader.options, {
    
            /**
             * @property {Selector | Object} [pick=undefined]
             * @namespace options
             * @for Uploader
             * @description 指定选择文件的按钮容器，不指定则不创建按钮。
             *
             * * `id` {Seletor|dom} 指定选择文件的按钮容器，不指定则不创建按钮。**注意** 这里虽然写的是 id, 但是不是只支持 id, 还支持 class, 或者 dom 节点。
             * * `label` {String} 请采用 `innerHTML` 代替
             * * `innerHTML` {String} 指定按钮文字。不指定时优先从指定的容器中看是否自带文字。
             * * `multiple` {Boolean} 是否开起同时选择多个文件能力。
             */
            pick: null,
    
            /**
             * @property {Arroy} [accept=null]
             * @namespace options
             * @for Uploader
             * @description 指定接受哪些类型的文件。 由于目前还有ext转mimeType表，所以这里需要分开指定。
             *
             * * `title` {String} 文字描述
             * * `extensions` {String} 允许的文件后缀，不带点，多个用逗号分割。
             * * `mimeTypes` {String} 多个用逗号分割。
             *
             * 如：
             *
             * ```
             * {
             *     title: 'Images',
             *     extensions: 'gif,jpg,jpeg,bmp,png',
             *     mimeTypes: 'image/*'
             * }
             * ```
             */
            accept: null/*{
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            }*/
        });
    
        return Uploader.register({
            name: 'picker',
    
            init: function( opts ) {
                this.pickers = [];
                return opts.pick && this.addBtn( opts.pick );
            },
    
            refresh: function() {
                $.each( this.pickers, function() {
                    this.refresh();
                });
            },
    
            /**
             * @method addButton
             * @for Uploader
             * @grammar addButton( pick ) => Promise
             * @description
             * 添加文件选择按钮，如果一个按钮不够，需要调用此方法来添加。参数跟[options.pick](#WebUploader:Uploader:options)一致。
             * @example
             * uploader.addButton({
             *     id: '#btnContainer',
             *     innerHTML: '选择文件'
             * });
             */
            addBtn: function( pick ) {
                var me = this,
                    opts = me.options,
                    accept = opts.accept,
                    promises = [];
    
                if ( !pick ) {
                    return;
                }
    
                $.isPlainObject( pick ) || (pick = {
                    id: pick
                });
    
                $( pick.id ).each(function() {
                    var options, picker, deferred;
    
                    deferred = Base.Deferred();
    
                    options = $.extend({}, pick, {
                        accept: $.isPlainObject( accept ) ? [ accept ] : accept,
                        swf: opts.swf,
                        runtimeOrder: opts.runtimeOrder,
                        id: this
                    });
    
                    picker = new FilePicker( options );
    
                    picker.once( 'ready', deferred.resolve );
                    picker.on( 'select', function( files ) {
                        me.owner.request( 'add-file', [ files ]);
                    });
                    picker.init();
    
                    me.pickers.push( picker );
    
                    promises.push( deferred.promise() );
                });
    
                return Base.when.apply( Base, promises );
            },
    
            disable: function() {
                $.each( this.pickers, function() {
                    this.disable();
                });
            },
    
            enable: function() {
                $.each( this.pickers, function() {
                    this.enable();
                });
            },
    
            destroy: function() {
                $.each( this.pickers, function() {
                    this.destroy();
                });
                this.pickers = null;
            }
        });
    });
    /**
     * @fileOverview Image
     */
    define('lib/image',[
        'base',
        'runtime/client',
        'lib/blob'
    ], function( Base, RuntimeClient, Blob ) {
        var $ = Base.$;
    
        // 构造器。
        function Image( opts ) {
            this.options = $.extend({}, Image.options, opts );
            RuntimeClient.call( this, 'Image' );
    
            this.on( 'load', function() {
                this._info = this.exec('info');
                this._meta = this.exec('meta');
            });
        }
    
        // 默认选项。
        Image.options = {
    
            // 默认的图片处理质量
            quality: 90,
    
            // 是否裁剪
            crop: false,
    
            // 是否保留头部信息
            preserveHeaders: false,
    
            // 是否允许放大。
            allowMagnify: false
        };
    
        // 继承RuntimeClient.
        Base.inherits( RuntimeClient, {
            constructor: Image,
    
            info: function( val ) {
    
                // setter
                if ( val ) {
                    this._info = val;
                    return this;
                }
    
                // getter
                return this._info;
            },
    
            meta: function( val ) {
    
                // setter
                if ( val ) {
                    this._meta = val;
                    return this;
                }
    
                // getter
                return this._meta;
            },
    
            loadFromBlob: function( blob ) {
                var me = this,
                    ruid = blob.getRuid();
    
                this.connectRuntime( ruid, function() {
                    me.exec( 'init', me.options );
                    me.exec( 'loadFromBlob', blob );
                });
            },
    
            resize: function() {
                var args = Base.slice( arguments );
                return this.exec.apply( this, [ 'resize' ].concat( args ) );
            },
    
            crop: function() {
                var args = Base.slice( arguments );
                return this.exec.apply( this, [ 'crop' ].concat( args ) );
            },
    
            getAsDataUrl: function( type ) {
                return this.exec( 'getAsDataUrl', type );
            },
    
            getAsBlob: function( type ) {
                var blob = this.exec( 'getAsBlob', type );
    
                return new Blob( this.getRuid(), blob );
            }
        });
    
        return Image;
    });
    /**
     * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
     */
    define('widgets/image',[
        'base',
        'uploader',
        'lib/image',
        'widgets/widget'
    ], function( Base, Uploader, Image ) {
    
        var $ = Base.$,
            throttle;
    
        // 根据要处理的文件大小来节流，一次不能处理太多，会卡。
        throttle = (function( max ) {
            var occupied = 0,
                waiting = [],
                tick = function() {
                    var item;
    
                    while ( waiting.length && occupied < max ) {
                        item = waiting.shift();
                        occupied += item[ 0 ];
                        item[ 1 ]();
                    }
                };
    
            return function( emiter, size, cb ) {
                waiting.push([ size, cb ]);
                emiter.once( 'destroy', function() {
                    occupied -= size;
                    setTimeout( tick, 1 );
                });
                setTimeout( tick, 1 );
            };
        })( 5 * 1024 * 1024 );
    
        $.extend( Uploader.options, {
    
            /**
             * @property {Object} [thumb]
             * @namespace options
             * @for Uploader
             * @description 配置生成缩略图的选项。
             *
             * 默认为：
             *
             * ```javascript
             * {
             *     width: 110,
             *     height: 110,
             *
             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
             *     quality: 70,
             *
             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
             *     allowMagnify: true,
             *
             *     // 是否允许裁剪。
             *     crop: true,
             *
             *     // 为空的话则保留原有图片格式。
             *     // 否则强制转换成指定的类型。
             *     type: 'image/jpeg'
             * }
             * ```
             */
            thumb: {
                width: 110,
                height: 110,
                quality: 70,
                allowMagnify: true,
                crop: true,
                preserveHeaders: false,
    
                // 为空的话则保留原有图片格式。
                // 否则强制转换成指定的类型。
                // IE 8下面 base64 大小不能超过 32K 否则预览失败，而非 jpeg 编码的图片很可
                // 能会超过 32k, 所以这里设置成预览的时候都是 image/jpeg
                type: 'image/jpeg'
            },
    
            /**
             * @property {Object} [compress]
             * @namespace options
             * @for Uploader
             * @description 配置压缩的图片的选项。如果此选项为`false`, 则图片在上传前不进行压缩。
             *
             * 默认为：
             *
             * ```javascript
             * {
             *     width: 1600,
             *     height: 1600,
             *
             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
             *     quality: 90,
             *
             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
             *     allowMagnify: false,
             *
             *     // 是否允许裁剪。
             *     crop: false,
             *
             *     // 是否保留头部meta信息。
             *     preserveHeaders: true,
             *
             *     // 如果发现压缩后文件大小比原来还大，则使用原来图片
             *     // 此属性可能会影响图片自动纠正功能
             *     noCompressIfLarger: false,
             *
             *     // 单位字节，如果图片大小小于此值，不会采用压缩。
             *     compressSize: 0
             * }
             * ```
             */
            compress: {
                width: 1600,
                height: 1600,
                quality: 90,
                allowMagnify: false,
                crop: false,
                preserveHeaders: true
            }
        });
    
        return Uploader.register({
    
            name: 'image',
    
    
            /**
             * 生成缩略图，此过程为异步，所以需要传入`callback`。
             * 通常情况在图片加入队里后调用此方法来生成预览图以增强交互效果。
             *
             * 当 width 或者 height 的值介于 0 - 1 时，被当成百分比使用。
             *
             * `callback`中可以接收到两个参数。
             * * 第一个为error，如果生成缩略图有错误，此error将为真。
             * * 第二个为ret, 缩略图的Data URL值。
             *
             * **注意**
             * Date URL在IE6/7中不支持，所以不用调用此方法了，直接显示一张暂不支持预览图片好了。
             * 也可以借助服务端，将 base64 数据传给服务端，生成一个临时文件供预览。
             *
             * @method makeThumb
             * @grammar makeThumb( file, callback ) => undefined
             * @grammar makeThumb( file, callback, width, height ) => undefined
             * @for Uploader
             * @example
             *
             * uploader.on( 'fileQueued', function( file ) {
             *     var $li = ...;
             *
             *     uploader.makeThumb( file, function( error, ret ) {
             *         if ( error ) {
             *             $li.text('预览错误');
             *         } else {
             *             $li.append('<img alt="" src="' + ret + '" />');
             *         }
             *     });
             *
             * });
             */
            makeThumb: function( file, cb, width, height ) {
                var opts, image;
    
                file = this.request( 'get-file', file );
    
                // 只预览图片格式。
                if ( !file.type.match( /^image/ ) ) {
                    cb( true );
                    return;
                }
    
                opts = $.extend({}, this.options.thumb );
    
                // 如果传入的是object.
                if ( $.isPlainObject( width ) ) {
                    opts = $.extend( opts, width );
                    width = null;
                }
    
                width = width || opts.width;
                height = height || opts.height;
    
                image = new Image( opts );
    
                image.once( 'load', function() {
                    file._info = file._info || image.info();
                    file._meta = file._meta || image.meta();
    
                    // 如果 width 的值介于 0 - 1
                    // 说明设置的是百分比。
                    if ( width <= 1 && width > 0 ) {
                        width = file._info.width * width;
                    }
    
                    // 同样的规则应用于 height
                    if ( height <= 1 && height > 0 ) {
                        height = file._info.height * height;
                    }
    
                    image.resize( width, height );
                });
    
                // 当 resize 完后
                image.once( 'complete', function() {
                    cb( false, image.getAsDataUrl( opts.type ) );
                    image.destroy();
                });
    
                image.once( 'error', function( reason ) {
                    cb( reason || true );
                    image.destroy();
                });
    
                throttle( image, file.source.size, function() {
                    file._info && image.info( file._info );
                    file._meta && image.meta( file._meta );
                    image.loadFromBlob( file.source );
                });
            },
    
            beforeSendFile: function( file ) {
                var opts = this.options.compress || this.options.resize,
                    compressSize = opts && opts.compressSize || 0,
                    noCompressIfLarger = opts && opts.noCompressIfLarger || false,
                    image, deferred;
    
                file = this.request( 'get-file', file );
    
                // 只压缩 jpeg 图片格式。
                // gif 可能会丢失针
                // bmp png 基本上尺寸都不大，且压缩比比较小。
                if ( !opts || !~'image/jpeg,image/jpg'.indexOf( file.type ) ||
                        file.size < compressSize ||
                        file._compressed ) {
                    return;
                }
    
                opts = $.extend({}, opts );
                deferred = Base.Deferred();
    
                image = new Image( opts );
    
                deferred.always(function() {
                    image.destroy();
                    image = null;
                });
                image.once( 'error', deferred.reject );
                image.once( 'load', function() {
                    var width = opts.width,
                        height = opts.height;
    
                    file._info = file._info || image.info();
                    file._meta = file._meta || image.meta();
    
                    // 如果 width 的值介于 0 - 1
                    // 说明设置的是百分比。
                    if ( width <= 1 && width > 0 ) {
                        width = file._info.width * width;
                    }
    
                    // 同样的规则应用于 height
                    if ( height <= 1 && height > 0 ) {
                        height = file._info.height * height;
                    }
    
                    image.resize( width, height );
                });
    
                image.once( 'complete', function() {
                    var blob, size;
    
                    // 移动端 UC / qq 浏览器的无图模式下
                    // ctx.getImageData 处理大图的时候会报 Exception
                    // INDEX_SIZE_ERR: DOM Exception 1
                    try {
                        blob = image.getAsBlob( opts.type );
    
                        size = file.size;
    
                        // 如果压缩后，比原来还大则不用压缩后的。
                        if ( !noCompressIfLarger || blob.size < size ) {
                            // file.source.destroy && file.source.destroy();
                            file.source = blob;
                            file.size = blob.size;
    
                            file.trigger( 'resize', blob.size, size );
                        }
    
                        // 标记，避免重复压缩。
                        file._compressed = true;
                        deferred.resolve();
                    } catch ( e ) {
                        // 出错了直接继续，让其上传原始图片
                        deferred.resolve();
                    }
                });
    
                file._info && image.info( file._info );
                file._meta && image.meta( file._meta );
    
                image.loadFromBlob( file.source );
                return deferred.promise();
            }
        });
    });
    /**
     * @fileOverview 文件属性封装
     */
    define('file',[
        'base',
        'mediator'
    ], function( Base, Mediator ) {
    
        var $ = Base.$,
            idPrefix = 'WU_FILE_',
            idSuffix = 0,
            rExt = /\.([^.]+)$/,
            statusMap = {};
    
        function gid() {
            return idPrefix + idSuffix++;
        }
    
        /**
         * 文件类
         * @class File
         * @constructor 构造函数
         * @grammar new File( source ) => File
         * @param {Lib.File} source [lib.File](#Lib.File)实例, 此source对象是带有Runtime信息的。
         */
        function WUFile( source ) {
    
            /**
             * 文件名，包括扩展名（后缀）
             * @property name
             * @type {string}
             */
            this.name = source.name || 'Untitled';
    
            /**
             * 文件体积（字节）
             * @property size
             * @type {uint}
             * @default 0
             */
            this.size = source.size || 0;
    
            /**
             * 文件MIMETYPE类型，与文件类型的对应关系请参考[http://t.cn/z8ZnFny](http://t.cn/z8ZnFny)
             * @property type
             * @type {string}
             * @default 'application/octet-stream'
             */
            this.type = source.type || 'application/octet-stream';
    
            /**
             * 文件最后修改日期
             * @property lastModifiedDate
             * @type {int}
             * @default 当前时间戳
             */
            this.lastModifiedDate = source.lastModifiedDate || (new Date() * 1);
    
            /**
             * 文件ID，每个对象具有唯一ID，与文件名无关
             * @property id
             * @type {string}
             */
            this.id = gid();
    
            /**
             * 文件扩展名，通过文件名获取，例如test.png的扩展名为png
             * @property ext
             * @type {string}
             */
            this.ext = rExt.exec( this.name ) ? RegExp.$1 : '';
    
    
            /**
             * 状态文字说明。在不同的status语境下有不同的用途。
             * @property statusText
             * @type {string}
             */
            this.statusText = '';
    
            // 存储文件状态，防止通过属性直接修改
            statusMap[ this.id ] = WUFile.Status.INITED;
    
            this.source = source;
            this.loaded = 0;
    
            this.on( 'error', function( msg ) {
                this.setStatus( WUFile.Status.ERROR, msg );
            });
        }
    
        $.extend( WUFile.prototype, {
    
            /**
             * 设置状态，状态变化时会触发`change`事件。
             * @method setStatus
             * @grammar setStatus( status[, statusText] );
             * @param {File.Status|String} status [文件状态值](#WebUploader:File:File.Status)
             * @param {String} [statusText=''] 状态说明，常在error时使用，用http, abort,server等来标记是由于什么原因导致文件错误。
             */
            setStatus: function( status, text ) {
    
                var prevStatus = statusMap[ this.id ];
    
                typeof text !== 'undefined' && (this.statusText = text);
    
                if ( status !== prevStatus ) {
                    statusMap[ this.id ] = status;
                    /**
                     * 文件状态变化
                     * @event statuschange
                     */
                    this.trigger( 'statuschange', status, prevStatus );
                }
    
            },
    
            /**
             * 获取文件状态
             * @return {File.Status}
             * @example
                     文件状态具体包括以下几种类型：
                     {
                         // 初始化
                        INITED:     0,
                        // 已入队列
                        QUEUED:     1,
                        // 正在上传
                        PROGRESS:     2,
                        // 上传出错
                        ERROR:         3,
                        // 上传成功
                        COMPLETE:     4,
                        // 上传取消
                        CANCELLED:     5
                    }
             */
            getStatus: function() {
                return statusMap[ this.id ];
            },
    
            /**
             * 获取文件原始信息。
             * @return {*}
             */
            getSource: function() {
                return this.source;
            },
    
            destroy: function() {
                this.off();
                delete statusMap[ this.id ];
            }
        });
    
        Mediator.installTo( WUFile.prototype );
    
        /**
         * 文件状态值，具体包括以下几种类型：
         * * `inited` 初始状态
         * * `queued` 已经进入队列, 等待上传
         * * `progress` 上传中
         * * `complete` 上传完成。
         * * `error` 上传出错，可重试
         * * `interrupt` 上传中断，可续传。
         * * `invalid` 文件不合格，不能重试上传。会自动从队列中移除。
         * * `cancelled` 文件被移除。
         * @property {Object} Status
         * @namespace File
         * @class File
         * @static
         */
        WUFile.Status = {
            INITED:     'inited',    // 初始状态
            QUEUED:     'queued',    // 已经进入队列, 等待上传
            PROGRESS:   'progress',    // 上传中
            ERROR:      'error',    // 上传出错，可重试
            COMPLETE:   'complete',    // 上传完成。
            CANCELLED:  'cancelled',    // 上传取消。
            INTERRUPT:  'interrupt',    // 上传中断，可续传。
            INVALID:    'invalid'    // 文件不合格，不能重试上传。
        };
    
        return WUFile;
    });
    
    /**
     * @fileOverview 文件队列
     */
    define('queue',[
        'base',
        'mediator',
        'file'
    ], function( Base, Mediator, WUFile ) {
    
        var $ = Base.$,
            STATUS = WUFile.Status;
    
        /**
         * 文件队列, 用来存储各个状态中的文件。
         * @class Queue
         * @extends Mediator
         */
        function Queue() {
    
            /**
             * 统计文件数。
             * * `numOfQueue` 队列中的文件数。
             * * `numOfSuccess` 上传成功的文件数
             * * `numOfCancel` 被取消的文件数
             * * `numOfProgress` 正在上传中的文件数
             * * `numOfUploadFailed` 上传错误的文件数。
             * * `numOfInvalid` 无效的文件数。
             * * `numofDeleted` 被移除的文件数。
             * @property {Object} stats
             */
            this.stats = {
                numOfQueue: 0,
                numOfSuccess: 0,
                numOfCancel: 0,
                numOfProgress: 0,
                numOfUploadFailed: 0,
                numOfInvalid: 0,
                numofDeleted: 0,
                numofInterrupt: 0
            };
    
            // 上传队列，仅包括等待上传的文件
            this._queue = [];
    
            // 存储所有文件
            this._map = {};
        }
    
        $.extend( Queue.prototype, {
    
            /**
             * 将新文件加入对队列尾部
             *
             * @method append
             * @param  {File} file   文件对象
             */
            append: function( file ) {
                this._queue.push( file );
                this._fileAdded( file );
                return this;
            },
    
            /**
             * 将新文件加入对队列头部
             *
             * @method prepend
             * @param  {File} file   文件对象
             */
            prepend: function( file ) {
                this._queue.unshift( file );
                this._fileAdded( file );
                return this;
            },
    
            /**
             * 获取文件对象
             *
             * @method getFile
             * @param  {String} fileId   文件ID
             * @return {File}
             */
            getFile: function( fileId ) {
                if ( typeof fileId !== 'string' ) {
                    return fileId;
                }
                return this._map[ fileId ];
            },
    
            /**
             * 从队列中取出一个指定状态的文件。
             * @grammar fetch( status ) => File
             * @method fetch
             * @param {String} status [文件状态值](#WebUploader:File:File.Status)
             * @return {File} [File](#WebUploader:File)
             */
            fetch: function( status ) {
                var len = this._queue.length,
                    i, file;
    
                status = status || STATUS.QUEUED;
    
                for ( i = 0; i < len; i++ ) {
                    file = this._queue[ i ];
    
                    if ( status === file.getStatus() ) {
                        return file;
                    }
                }
    
                return null;
            },
    
            /**
             * 对队列进行排序，能够控制文件上传顺序。
             * @grammar sort( fn ) => undefined
             * @method sort
             * @param {Function} fn 排序方法
             */
            sort: function( fn ) {
                if ( typeof fn === 'function' ) {
                    this._queue.sort( fn );
                }
            },
    
            /**
             * 获取指定类型的文件列表, 列表中每一个成员为[File](#WebUploader:File)对象。
             * @grammar getFiles( [status1[, status2 ...]] ) => Array
             * @method getFiles
             * @param {String} [status] [文件状态值](#WebUploader:File:File.Status)
             */
            getFiles: function() {
                var sts = [].slice.call( arguments, 0 ),
                    ret = [],
                    i = 0,
                    len = this._queue.length,
                    file;
    
                for ( ; i < len; i++ ) {
                    file = this._queue[ i ];
    
                    if ( sts.length && !~$.inArray( file.getStatus(), sts ) ) {
                        continue;
                    }
    
                    ret.push( file );
                }
    
                return ret;
            },
    
            /**
             * 在队列中删除文件。
             * @grammar removeFile( file ) => Array
             * @method removeFile
             * @param {File} 文件对象。
             */
            removeFile: function( file ) {
                var me = this,
                    existing = this._map[ file.id ];
    
                if ( existing ) {
                    delete this._map[ file.id ];
                    file.destroy();
                    this.stats.numofDeleted++;
                }
            },
    
            _fileAdded: function( file ) {
                var me = this,
                    existing = this._map[ file.id ];
    
                if ( !existing ) {
                    this._map[ file.id ] = file;
    
                    file.on( 'statuschange', function( cur, pre ) {
                        me._onFileStatusChange( cur, pre );
                    });
                }
            },
    
            _onFileStatusChange: function( curStatus, preStatus ) {
                var stats = this.stats;
    
                switch ( preStatus ) {
                    case STATUS.PROGRESS:
                        stats.numOfProgress--;
                        break;
    
                    case STATUS.QUEUED:
                        stats.numOfQueue --;
                        break;
    
                    case STATUS.ERROR:
                        stats.numOfUploadFailed--;
                        break;
    
                    case STATUS.INVALID:
                        stats.numOfInvalid--;
                        break;
    
                    case STATUS.INTERRUPT:
                        stats.numofInterrupt--;
                        break;
                }
    
                switch ( curStatus ) {
                    case STATUS.QUEUED:
                        stats.numOfQueue++;
                        break;
    
                    case STATUS.PROGRESS:
                        stats.numOfProgress++;
                        break;
    
                    case STATUS.ERROR:
                        stats.numOfUploadFailed++;
                        break;
    
                    case STATUS.COMPLETE:
                        stats.numOfSuccess++;
                        break;
    
                    case STATUS.CANCELLED:
                        stats.numOfCancel++;
                        break;
    
    
                    case STATUS.INVALID:
                        stats.numOfInvalid++;
                        break;
    
                    case STATUS.INTERRUPT:
                        stats.numofInterrupt++;
                        break;
                }
            }
    
        });
    
        Mediator.installTo( Queue.prototype );
    
        return Queue;
    });
    /**
     * @fileOverview 队列
     */
    define('widgets/queue',[
        'base',
        'uploader',
        'queue',
        'file',
        'lib/file',
        'runtime/client',
        'widgets/widget'
    ], function( Base, Uploader, Queue, WUFile, File, RuntimeClient ) {
    
        var $ = Base.$,
            rExt = /\.\w+$/,
            Status = WUFile.Status;
    
        return Uploader.register({
            name: 'queue',
    
            init: function( opts ) {
                var me = this,
                    deferred, len, i, item, arr, accept, runtime;
    
                if ( $.isPlainObject( opts.accept ) ) {
                    opts.accept = [ opts.accept ];
                }
    
                // accept中的中生成匹配正则。
                if ( opts.accept ) {
                    arr = [];
    
                    for ( i = 0, len = opts.accept.length; i < len; i++ ) {
                        item = opts.accept[ i ].extensions;
                        item && arr.push( item );
                    }
    
                    if ( arr.length ) {
                        accept = '\\.' + arr.join(',')
                                .replace( /,/g, '$|\\.' )
                                .replace( /\*/g, '.*' ) + '$';
                    }
    
                    me.accept = new RegExp( accept, 'i' );
                }
    
                me.queue = new Queue();
                me.stats = me.queue.stats;
    
                // 如果当前不是html5运行时，那就算了。
                // 不执行后续操作
                if ( this.request('predict-runtime-type') !== 'html5' ) {
                    return;
                }
    
                // 创建一个 html5 运行时的 placeholder
                // 以至于外部添加原生 File 对象的时候能正确包裹一下供 webuploader 使用。
                deferred = Base.Deferred();
                this.placeholder = runtime = new RuntimeClient('Placeholder');
                runtime.connectRuntime({
                    runtimeOrder: 'html5'
                }, function() {
                    me._ruid = runtime.getRuid();
                    deferred.resolve();
                });
                return deferred.promise();
            },
    
    
            // 为了支持外部直接添加一个原生File对象。
            _wrapFile: function( file ) {
                if ( !(file instanceof WUFile) ) {
    
                    if ( !(file instanceof File) ) {
                        if ( !this._ruid ) {
                            throw new Error('Can\'t add external files.');
                        }
                        file = new File( this._ruid, file );
                    }
    
                    file = new WUFile( file );
                }
    
                return file;
            },
    
            // 判断文件是否可以被加入队列
            acceptFile: function( file ) {
                var invalid = !file || !file.size || this.accept &&
    
                        // 如果名字中有后缀，才做后缀白名单处理。
                        rExt.exec( file.name ) && !this.accept.test( file.name );
    
                return !invalid;
            },
    
    
            /**
             * @event beforeFileQueued
             * @param {File} file File对象
             * @description 当文件被加入队列之前触发，此事件的handler返回值为`false`，则此文件不会被添加进入队列。
             * @for  Uploader
             */
    
            /**
             * @event fileQueued
             * @param {File} file File对象
             * @description 当文件被加入队列以后触发。
             * @for  Uploader
             */
    
            _addFile: function( file ) {
                var me = this;
    
                file = me._wrapFile( file );
    
                // 不过类型判断允许不允许，先派送 `beforeFileQueued`
                if ( !me.owner.trigger( 'beforeFileQueued', file ) ) {
                    return;
                }
    
                // 类型不匹配，则派送错误事件，并返回。
                if ( !me.acceptFile( file ) ) {
                    me.owner.trigger( 'error', 'Q_TYPE_DENIED', file );
                    return;
                }
    
                me.queue.append( file );
                me.owner.trigger( 'fileQueued', file );
                return file;
            },
    
            getFile: function( fileId ) {
                return this.queue.getFile( fileId );
            },
    
            /**
             * @event filesQueued
             * @param {File} files 数组，内容为原始File(lib/File）对象。
             * @description 当一批文件添加进队列以后触发。
             * @for  Uploader
             */
            
            /**
             * @property {Boolean} [auto=false]
             * @namespace options
             * @for Uploader
             * @description 设置为 true 后，不需要手动调用上传，有文件选择即开始上传。
             * 
             */
    
            /**
             * @method addFiles
             * @grammar addFiles( file ) => undefined
             * @grammar addFiles( [file1, file2 ...] ) => undefined
             * @param {Array of File or File} [files] Files 对象 数组
             * @description 添加文件到队列
             * @for  Uploader
             */
            addFile: function( files ) {
                var me = this;
    
                if ( !files.length ) {
                    files = [ files ];
                }
    
                files = $.map( files, function( file ) {
                    return me._addFile( file );
                });
    
                me.owner.trigger( 'filesQueued', files );
    
                if ( me.options.auto ) {
                    setTimeout(function() {
                        me.request('start-upload');
                    }, 20 );
                }
            },
    
            getStats: function() {
                return this.stats;
            },
    
            /**
             * @event fileDequeued
             * @param {File} file File对象
             * @description 当文件被移除队列后触发。
             * @for  Uploader
             */
    
             /**
             * @method removeFile
             * @grammar removeFile( file ) => undefined
             * @grammar removeFile( id ) => undefined
             * @grammar removeFile( file, true ) => undefined
             * @grammar removeFile( id, true ) => undefined
             * @param {File|id} file File对象或这File对象的id
             * @description 移除某一文件, 默认只会标记文件状态为已取消，如果第二个参数为 `true` 则会从 queue 中移除。
             * @for  Uploader
             * @example
             *
             * $li.on('click', '.remove-this', function() {
             *     uploader.removeFile( file );
             * })
             */
            removeFile: function( file, remove ) {
                var me = this;
    
                file = file.id ? file : me.queue.getFile( file );
    
                this.request( 'cancel-file', file );
    
                if ( remove ) {
                    this.queue.removeFile( file );
                }
            },
    
            /**
             * @method getFiles
             * @grammar getFiles() => Array
             * @grammar getFiles( status1, status2, status... ) => Array
             * @description 返回指定状态的文件集合，不传参数将返回所有状态的文件。
             * @for  Uploader
             * @example
             * console.log( uploader.getFiles() );    // => all files
             * console.log( uploader.getFiles('error') )    // => all error files.
             */
            getFiles: function() {
                return this.queue.getFiles.apply( this.queue, arguments );
            },
    
            fetchFile: function() {
                return this.queue.fetch.apply( this.queue, arguments );
            },
    
            /**
             * @method retry
             * @grammar retry() => undefined
             * @grammar retry( file ) => undefined
             * @description 重试上传，重试指定文件，或者从出错的文件开始重新上传。
             * @for  Uploader
             * @example
             * function retry() {
             *     uploader.retry();
             * }
             */
            retry: function( file, noForceStart ) {
                var me = this,
                    files, i, len;
    
                if ( file ) {
                    file = file.id ? file : me.queue.getFile( file );
                    file.setStatus( Status.QUEUED );
                    noForceStart || me.request('start-upload');
                    return;
                }
    
                files = me.queue.getFiles( Status.ERROR );
                i = 0;
                len = files.length;
    
                for ( ; i < len; i++ ) {
                    file = files[ i ];
                    file.setStatus( Status.QUEUED );
                }
    
                me.request('start-upload');
            },
    
            /**
             * @method sort
             * @grammar sort( fn ) => undefined
             * @description 排序队列中的文件，在上传之前调整可以控制上传顺序。
             * @for  Uploader
             */
            sortFiles: function() {
                return this.queue.sort.apply( this.queue, arguments );
            },
    
            /**
             * @event reset
             * @description 当 uploader 被重置的时候触发。
             * @for  Uploader
             */
    
            /**
             * @method reset
             * @grammar reset() => undefined
             * @description 重置uploader。目前只重置了队列。
             * @for  Uploader
             * @example
             * uploader.reset();
             */
            reset: function() {
                this.owner.trigger('reset');
                this.queue = new Queue();
                this.stats = this.queue.stats;
            },
    
            destroy: function() {
                this.reset();
                this.placeholder && this.placeholder.destroy();
            }
        });
    
    });
    /**
     * @fileOverview 添加获取Runtime相关信息的方法。
     */
    define('widgets/runtime',[
        'uploader',
        'runtime/runtime',
        'widgets/widget'
    ], function( Uploader, Runtime ) {
    
        Uploader.support = function() {
            return Runtime.hasRuntime.apply( Runtime, arguments );
        };
    
        /**
         * @property {Object} [runtimeOrder=html5,flash]
         * @namespace options
         * @for Uploader
         * @description 指定运行时启动顺序。默认会想尝试 html5 是否支持，如果支持则使用 html5, 否则则使用 flash.
         *
         * 可以将此值设置成 `flash`，来强制使用 flash 运行时。
         */
    
        return Uploader.register({
            name: 'runtime',
    
            init: function() {
                if ( !this.predictRuntimeType() ) {
                    throw Error('Runtime Error');
                }
            },
    
            /**
             * 预测Uploader将采用哪个`Runtime`
             * @grammar predictRuntimeType() => String
             * @method predictRuntimeType
             * @for  Uploader
             */
            predictRuntimeType: function() {
                var orders = this.options.runtimeOrder || Runtime.orders,
                    type = this.type,
                    i, len;
    
                if ( !type ) {
                    orders = orders.split( /\s*,\s*/g );
    
                    for ( i = 0, len = orders.length; i < len; i++ ) {
                        if ( Runtime.hasRuntime( orders[ i ] ) ) {
                            this.type = type = orders[ i ];
                            break;
                        }
                    }
                }
    
                return type;
            }
        });
    });
    /**
     * @fileOverview Transport
     */
    define('lib/transport',[
        'base',
        'runtime/client',
        'mediator'
    ], function( Base, RuntimeClient, Mediator ) {
    
        var $ = Base.$;
    
        function Transport( opts ) {
            var me = this;
    
            opts = me.options = $.extend( true, {}, Transport.options, opts || {} );
            RuntimeClient.call( this, 'Transport' );
    
            this._blob = null;
            this._formData = opts.formData || {};
            this._headers = opts.headers || {};
    
            this.on( 'progress', this._timeout );
            this.on( 'load error', function() {
                me.trigger( 'progress', 1 );
                clearTimeout( me._timer );
            });
        }
    
        Transport.options = {
            server: '',
            method: 'POST',
    
            // 跨域时，是否允许携带cookie, 只有html5 runtime才有效
            withCredentials: false,
            fileVal: 'file',
            timeout: 2 * 60 * 1000,    // 2分钟
            formData: {},
            headers: {},
            sendAsBinary: false
        };
    
        $.extend( Transport.prototype, {
    
            // 添加Blob, 只能添加一次，最后一次有效。
            appendBlob: function( key, blob, filename ) {
                var me = this,
                    opts = me.options;
    
                if ( me.getRuid() ) {
                    me.disconnectRuntime();
                }
    
                // 连接到blob归属的同一个runtime.
                me.connectRuntime( blob.ruid, function() {
                    me.exec('init');
                });
    
                me._blob = blob;
                opts.fileVal = key || opts.fileVal;
                opts.filename = filename || opts.filename;
            },
    
            // 添加其他字段
            append: function( key, value ) {
                if ( typeof key === 'object' ) {
                    $.extend( this._formData, key );
                } else {
                    this._formData[ key ] = value;
                }
            },
    
            setRequestHeader: function( key, value ) {
                if ( typeof key === 'object' ) {
                    $.extend( this._headers, key );
                } else {
                    this._headers[ key ] = value;
                }
            },
    
            send: function( method ) {
                this.exec( 'send', method );
                this._timeout();
            },
    
            abort: function() {
                clearTimeout( this._timer );
                return this.exec('abort');
            },
    
            destroy: function() {
                this.trigger('destroy');
                this.off();
                this.exec('destroy');
                this.disconnectRuntime();
            },
    
            getResponse: function() {
                return this.exec('getResponse');
            },
    
            getResponseAsJson: function() {
                return this.exec('getResponseAsJson');
            },
    
            getStatus: function() {
                return this.exec('getStatus');
            },
    
            _timeout: function() {
                var me = this,
                    duration = me.options.timeout;
    
                if ( !duration ) {
                    return;
                }
    
                clearTimeout( me._timer );
                me._timer = setTimeout(function() {
                    me.abort();
                    me.trigger( 'error', 'timeout' );
                }, duration );
            }
    
        });
    
        // 让Transport具备事件功能。
        Mediator.installTo( Transport.prototype );
    
        return Transport;
    });
    /**
     * @fileOverview 负责文件上传相关。
     */
    define('widgets/upload',[
        'base',
        'uploader',
        'file',
        'lib/transport',
        'widgets/widget'
    ], function( Base, Uploader, WUFile, Transport ) {
    
        var $ = Base.$,
            isPromise = Base.isPromise,
            Status = WUFile.Status;
    
        // 添加默认配置项
        $.extend( Uploader.options, {
    
    
            /**
             * @property {Boolean} [prepareNextFile=false]
             * @namespace options
             * @for Uploader
             * @description 是否允许在文件传输时提前把下一个文件准备好。
             * 对于一个文件的准备工作比较耗时，比如图片压缩，md5序列化。
             * 如果能提前在当前文件传输期处理，可以节省总体耗时。
             */
            prepareNextFile: false,
    
            /**
             * @property {Boolean} [chunked=false]
             * @namespace options
             * @for Uploader
             * @description 是否要分片处理大文件上传。
             */
            chunked: false,
    
            /**
             * @property {Boolean} [chunkSize=5242880]
             * @namespace options
             * @for Uploader
             * @description 如果要分片，分多大一片？ 默认大小为5M.
             */
            chunkSize: 5 * 1024 * 1024,
    
            /**
             * @property {Boolean} [chunkRetry=2]
             * @namespace options
             * @for Uploader
             * @description 如果某个分片由于网络问题出错，允许自动重传多少次？
             */
            chunkRetry: 2,
    
            /**
             * @property {Boolean} [threads=3]
             * @namespace options
             * @for Uploader
             * @description 上传并发数。允许同时最大上传进程数。
             */
            threads: 3,
    
    
            /**
             * @property {Object} [formData={}]
             * @namespace options
             * @for Uploader
             * @description 文件上传请求的参数表，每次发送都会发送此对象中的参数。
             */
            formData: {}
    
            /**
             * @property {Object} [fileVal='file']
             * @namespace options
             * @for Uploader
             * @description 设置文件上传域的name。
             */
    
            /**
             * @property {Object} [method='POST']
             * @namespace options
             * @for Uploader
             * @description 文件上传方式，`POST`或者`GET`。
             */
    
            /**
             * @property {Object} [sendAsBinary=false]
             * @namespace options
             * @for Uploader
             * @description 是否已二进制的流的方式发送文件，这样整个上传内容`php://input`都为文件内容，
             * 其他参数在$_GET数组中。
             */
        });
    
        // 负责将文件切片。
        function CuteFile( file, chunkSize ) {
            var pending = [],
                blob = file.source,
                total = blob.size,
                chunks = chunkSize ? Math.ceil( total / chunkSize ) : 1,
                start = 0,
                index = 0,
                len, api;
    
            api = {
                file: file,
    
                has: function() {
                    return !!pending.length;
                },
    
                shift: function() {
                    return pending.shift();
                },
    
                unshift: function( block ) {
                    pending.unshift( block );
                }
            };
    
            while ( index < chunks ) {
                len = Math.min( chunkSize, total - start );
    
                pending.push({
                    file: file,
                    start: start,
                    end: chunkSize ? (start + len) : total,
                    total: total,
                    chunks: chunks,
                    chunk: index++,
                    cuted: api
                });
                start += len;
            }
    
            file.blocks = pending.concat();
            file.remaning = pending.length;
    
            return api;
        }
    
        Uploader.register({
            name: 'upload',
    
            init: function() {
                var owner = this.owner,
                    me = this;
    
                this.runing = false;
                this.progress = false;
    
                owner
                    .on( 'startUpload', function() {
                        me.progress = true;
                    })
                    .on( 'uploadFinished', function() {
                        me.progress = false;
                    });
    
                // 记录当前正在传的数据，跟threads相关
                this.pool = [];
    
                // 缓存分好片的文件。
                this.stack = [];
    
                // 缓存即将上传的文件。
                this.pending = [];
    
                // 跟踪还有多少分片在上传中但是没有完成上传。
                this.remaning = 0;
                this.__tick = Base.bindFn( this._tick, this );
    
                owner.on( 'uploadComplete', function( file ) {
    
                    // 把其他块取消了。
                    file.blocks && $.each( file.blocks, function( _, v ) {
                        v.transport && (v.transport.abort(), v.transport.destroy());
                        delete v.transport;
                    });
    
                    delete file.blocks;
                    delete file.remaning;
                });
            },
    
            reset: function() {
                this.request( 'stop-upload', true );
                this.runing = false;
                this.pool = [];
                this.stack = [];
                this.pending = [];
                this.remaning = 0;
                this._trigged = false;
                this._promise = null;
            },
    
            /**
             * @event startUpload
             * @description 当开始上传流程时触发。
             * @for  Uploader
             */
    
            /**
             * 开始上传。此方法可以从初始状态调用开始上传流程，也可以从暂停状态调用，继续上传流程。
             *
             * 可以指定开始某一个文件。
             * @grammar upload() => undefined
             * @grammar upload( file | fileId) => undefined
             * @method upload
             * @for  Uploader
             */
            startUpload: function(file) {
                var me = this;
    
                // 移出invalid的文件
                $.each( me.request( 'get-files', Status.INVALID ), function() {
                    me.request( 'remove-file', this );
                });
    
                // 如果指定了开始某个文件，则只开始指定文件。
                if ( file ) {
                    file = file.id ? file : me.request( 'get-file', file );
    
                    if (file.getStatus() === Status.INTERRUPT) {
                        $.each( me.pool, function( _, v ) {
    
                            // 之前暂停过。
                            if (v.file !== file) {
                                return;
                            }
    
                            v.transport && v.transport.send();
                        });
    
                        file.setStatus( Status.QUEUED );
                    } else if (file.getStatus() === Status.PROGRESS) {
                        return;
                    } else {
                        file.setStatus( Status.QUEUED );
                    }
                } else {
                    $.each( me.request( 'get-files', [ Status.INITED ] ), function() {
                        this.setStatus( Status.QUEUED );
                    });
                }
    
                if ( me.runing ) {
                    return;
                }
    
                me.runing = true;
    
                var files = [];
    
                // 如果有暂停的，则续传
                $.each( me.pool, function( _, v ) {
                    var file = v.file;
    
                    if ( file.getStatus() === Status.INTERRUPT ) {
                        files.push(file);
                        me._trigged = false;
                        v.transport && v.transport.send();
                    }
                });
    
                var file;
                while ( (file = files.shift()) ) {
                    file.setStatus( Status.PROGRESS );
                }
    
                file || $.each( me.request( 'get-files',
                        Status.INTERRUPT ), function() {
                    this.setStatus( Status.PROGRESS );
                });
    
                me._trigged = false;
                Base.nextTick( me.__tick );
                me.owner.trigger('startUpload');
            },
    
            /**
             * @event stopUpload
             * @description 当开始上传流程暂停时触发。
             * @for  Uploader
             */
    
            /**
             * 暂停上传。第一个参数为是否中断上传当前正在上传的文件。
             *
             * 如果第一个参数是文件，则只暂停指定文件。
             * @grammar stop() => undefined
             * @grammar stop( true ) => undefined
             * @grammar stop( file ) => undefined
             * @method stop
             * @for  Uploader
             */
            stopUpload: function( file, interrupt ) {
                var me = this;
    
                if (file === true) {
                    interrupt = file;
                    file = null;
                }
    
                if ( me.runing === false ) {
                    return;
                }
    
                // 如果只是暂停某个文件。
                if ( file ) {
                    file = file.id ? file : me.request( 'get-file', file );
    
                    if ( file.getStatus() !== Status.PROGRESS &&
                            file.getStatus() !== Status.QUEUED ) {
                        return;
                    }
    
                    file.setStatus( Status.INTERRUPT );
                    $.each( me.pool, function( _, v ) {
    
                        // 只 abort 指定的文件。
                        if (v.file !== file) {
                            return;
                        }
    
                        v.transport && v.transport.abort();
                        me._putback(v);
                        me._popBlock(v);
                    });
    
                    return Base.nextTick( me.__tick );
                }
    
                me.runing = false;
    
                if (this._promise && this._promise.file) {
                    this._promise.file.setStatus( Status.INTERRUPT );
                }
    
                interrupt && $.each( me.pool, function( _, v ) {
                    v.transport && v.transport.abort();
                    v.file.setStatus( Status.INTERRUPT );
                });
    
                me.owner.trigger('stopUpload');
            },
    
            /**
             * @method cancelFile
             * @grammar cancelFile( file ) => undefined
             * @grammar cancelFile( id ) => undefined
             * @param {File|id} file File对象或这File对象的id
             * @description 标记文件状态为已取消, 同时将中断文件传输。
             * @for  Uploader
             * @example
             *
             * $li.on('click', '.remove-this', function() {
             *     uploader.cancelFile( file );
             * })
             */
            cancelFile: function( file ) {
                file = file.id ? file : this.request( 'get-file', file );
    
                // 如果正在上传。
                file.blocks && $.each( file.blocks, function( _, v ) {
                    var _tr = v.transport;
    
                    if ( _tr ) {
                        _tr.abort();
                        _tr.destroy();
                        delete v.transport;
                    }
                });
    
                file.setStatus( Status.CANCELLED );
                this.owner.trigger( 'fileDequeued', file );
            },
    
            /**
             * 判断`Uplaode`r是否正在上传中。
             * @grammar isInProgress() => Boolean
             * @method isInProgress
             * @for  Uploader
             */
            isInProgress: function() {
                return !!this.progress;
            },
    
            _getStats: function() {
                return this.request('get-stats');
            },
    
            /**
             * 掉过一个文件上传，直接标记指定文件为已上传状态。
             * @grammar skipFile( file ) => undefined
             * @method skipFile
             * @for  Uploader
             */
            skipFile: function( file, status ) {
                file = file.id ? file : this.request( 'get-file', file );
    
                file.setStatus( status || Status.COMPLETE );
                file.skipped = true;
    
                // 如果正在上传。
                file.blocks && $.each( file.blocks, function( _, v ) {
                    var _tr = v.transport;
    
                    if ( _tr ) {
                        _tr.abort();
                        _tr.destroy();
                        delete v.transport;
                    }
                });
    
                this.owner.trigger( 'uploadSkip', file );
            },
    
            /**
             * @event uploadFinished
             * @description 当所有文件上传结束时触发。
             * @for  Uploader
             */
            _tick: function() {
                var me = this,
                    opts = me.options,
                    fn, val;
    
                // 上一个promise还没有结束，则等待完成后再执行。
                if ( me._promise ) {
                    return me._promise.always( me.__tick );
                }
    
                // 还有位置，且还有文件要处理的话。
                if ( me.pool.length < opts.threads && (val = me._nextBlock()) ) {
                    me._trigged = false;
    
                    fn = function( val ) {
                        me._promise = null;
    
                        // 有可能是reject过来的，所以要检测val的类型。
                        val && val.file && me._startSend( val );
                        Base.nextTick( me.__tick );
                    };
    
                    me._promise = isPromise( val ) ? val.always( fn ) : fn( val );
    
                // 没有要上传的了，且没有正在传输的了。
                } else if ( !me.remaning && !me._getStats().numOfQueue &&
                    !me._getStats().numofInterrupt ) {
                    me.runing = false;
    
                    me._trigged || Base.nextTick(function() {
                        me.owner.trigger('uploadFinished');
                    });
                    me._trigged = true;
                }
            },
    
            _putback: function(block) {
                var idx;
    
                block.cuted.unshift(block);
                idx = this.stack.indexOf(block.cuted);
    
                if (!~idx) {
                    this.stack.unshift(block.cuted);
                }
            },
    
            _getStack: function() {
                var i = 0,
                    act;
    
                while ( (act = this.stack[ i++ ]) ) {
                    if ( act.has() && act.file.getStatus() === Status.PROGRESS ) {
                        return act;
                    } else if (!act.has() ||
                            act.file.getStatus() !== Status.PROGRESS &&
                            act.file.getStatus() !== Status.INTERRUPT ) {
    
                        // 把已经处理完了的，或者，状态为非 progress（上传中）、
                        // interupt（暂停中） 的移除。
                        this.stack.splice( --i, 1 );
                    }
                }
    
                return null;
            },
    
            _nextBlock: function() {
                var me = this,
                    opts = me.options,
                    act, next, done, preparing;
    
                // 如果当前文件还有没有需要传输的，则直接返回剩下的。
                if ( (act = this._getStack()) ) {
    
                    // 是否提前准备下一个文件
                    if ( opts.prepareNextFile && !me.pending.length ) {
                        me._prepareNextFile();
                    }
    
                    return act.shift();
    
                // 否则，如果正在运行，则准备下一个文件，并等待完成后返回下个分片。
                } else if ( me.runing ) {
    
                    // 如果缓存中有，则直接在缓存中取，没有则去queue中取。
                    if ( !me.pending.length && me._getStats().numOfQueue ) {
                        me._prepareNextFile();
                    }
    
                    next = me.pending.shift();
                    done = function( file ) {
                        if ( !file ) {
                            return null;
                        }
    
                        act = CuteFile( file, opts.chunked ? opts.chunkSize : 0 );
                        me.stack.push(act);
                        return act.shift();
                    };
    
                    // 文件可能还在prepare中，也有可能已经完全准备好了。
                    if ( isPromise( next) ) {
                        preparing = next.file;
                        next = next[ next.pipe ? 'pipe' : 'then' ]( done );
                        next.file = preparing;
                        return next;
                    }
    
                    return done( next );
                }
            },
    
    
            /**
             * @event uploadStart
             * @param {File} file File对象
             * @description 某个文件开始上传前触发，一个文件只会触发一次。
             * @for  Uploader
             */
            _prepareNextFile: function() {
                var me = this,
                    file = me.request('fetch-file'),
                    pending = me.pending,
                    promise;
    
                if ( file ) {
                    promise = me.request( 'before-send-file', file, function() {
    
                        // 有可能文件被skip掉了。文件被skip掉后，状态坑定不是Queued.
                        if ( file.getStatus() === Status.PROGRESS ||
                            file.getStatus() === Status.INTERRUPT ) {
                            return file;
                        }
    
                        return me._finishFile( file );
                    });
    
                    me.owner.trigger( 'uploadStart', file );
                    file.setStatus( Status.PROGRESS );
    
                    promise.file = file;
    
                    // 如果还在pending中，则替换成文件本身。
                    promise.done(function() {
                        var idx = $.inArray( promise, pending );
    
                        ~idx && pending.splice( idx, 1, file );
                    });
    
                    // befeore-send-file的钩子就有错误发生。
                    promise.fail(function( reason ) {
                        file.setStatus( Status.ERROR, reason );
                        me.owner.trigger( 'uploadError', file, reason );
                        me.owner.trigger( 'uploadComplete', file );
                    });
    
                    pending.push( promise );
                }
            },
    
            // 让出位置了，可以让其他分片开始上传
            _popBlock: function( block ) {
                var idx = $.inArray( block, this.pool );
    
                this.pool.splice( idx, 1 );
                block.file.remaning--;
                this.remaning--;
            },
    
            // 开始上传，可以被掉过。如果promise被reject了，则表示跳过此分片。
            _startSend: function( block ) {
                var me = this,
                    file = block.file,
                    promise;
    
                // 有可能在 before-send-file 的 promise 期间改变了文件状态。
                // 如：暂停，取消
                // 我们不能中断 promise, 但是可以在 promise 完后，不做上传操作。
                if ( file.getStatus() !== Status.PROGRESS ) {
    
                    // 如果是中断，则还需要放回去。
                    if (file.getStatus() === Status.INTERRUPT) {
                        me._putback(block);
                    }
    
                    return;
                }
    
                me.pool.push( block );
                me.remaning++;
    
                // 如果没有分片，则直接使用原始的。
                // 不会丢失content-type信息。
                block.blob = block.chunks === 1 ? file.source :
                        file.source.slice( block.start, block.end );
    
                // hook, 每个分片发送之前可能要做些异步的事情。
                promise = me.request( 'before-send', block, function() {
    
                    // 有可能文件已经上传出错了，所以不需要再传输了。
                    if ( file.getStatus() === Status.PROGRESS ) {
                        me._doSend( block );
                    } else {
                        me._popBlock( block );
                        Base.nextTick( me.__tick );
                    }
                });
    
                // 如果为fail了，则跳过此分片。
                promise.fail(function() {
                    if ( file.remaning === 1 ) {
                        me._finishFile( file ).always(function() {
                            block.percentage = 1;
                            me._popBlock( block );
                            me.owner.trigger( 'uploadComplete', file );
                            Base.nextTick( me.__tick );
                        });
                    } else {
                        block.percentage = 1;
                        me.updateFileProgress( file );
                        me._popBlock( block );
                        Base.nextTick( me.__tick );
                    }
                });
            },
    
    
            /**
             * @event uploadBeforeSend
             * @param {Object} object
             * @param {Object} data 默认的上传参数，可以扩展此对象来控制上传参数。
             * @param {Object} headers 可以扩展此对象来控制上传头部。
             * @description 当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数，大文件在开起分片上传的前提下此事件可能会触发多次。
             * @for  Uploader
             */
    
            /**
             * @event uploadAccept
             * @param {Object} object
             * @param {Object} ret 服务端的返回数据，json格式，如果服务端不是json格式，从ret._raw中取数据，自行解析。
             * @description 当某个文件上传到服务端响应后，会派送此事件来询问服务端响应是否有效。如果此事件handler返回值为`false`, 则此文件将派送`server`类型的`uploadError`事件。
             * @for  Uploader
             */
    
            /**
             * @event uploadProgress
             * @param {File} file File对象
             * @param {Number} percentage 上传进度
             * @description 上传过程中触发，携带上传进度。
             * @for  Uploader
             */
    
    
            /**
             * @event uploadError
             * @param {File} file File对象
             * @param {String} reason 出错的code
             * @description 当文件上传出错时触发。
             * @for  Uploader
             */
    
            /**
             * @event uploadSuccess
             * @param {File} file File对象
             * @param {Object} response 服务端返回的数据
             * @description 当文件上传成功时触发。
             * @for  Uploader
             */
    
            /**
             * @event uploadComplete
             * @param {File} [file] File对象
             * @description 不管成功或者失败，文件上传完成时触发。
             * @for  Uploader
             */
    
            // 做上传操作。
            _doSend: function( block ) {
                var me = this,
                    owner = me.owner,
                    opts = me.options,
                    file = block.file,
                    tr = new Transport( opts ),
                    data = $.extend({}, opts.formData ),
                    headers = $.extend({}, opts.headers ),
                    requestAccept, ret;
    
                block.transport = tr;
    
                tr.on( 'destroy', function() {
                    delete block.transport;
                    me._popBlock( block );
                    Base.nextTick( me.__tick );
                });
    
                // 广播上传进度。以文件为单位。
                tr.on( 'progress', function( percentage ) {
                    block.percentage = percentage;
                    me.updateFileProgress( file );
                });
    
                // 用来询问，是否返回的结果是有错误的。
                requestAccept = function( reject ) {
                    var fn;
    
                    ret = tr.getResponseAsJson() || {};
                    ret._raw = tr.getResponse();
                    fn = function( value ) {
                        reject = value;
                    };
    
                    // 服务端响应了，不代表成功了，询问是否响应正确。
                    if ( !owner.trigger( 'uploadAccept', block, ret, fn ) ) {
                        reject = reject || 'server';
                    }
    
                    return reject;
                };
    
                // 尝试重试，然后广播文件上传出错。
                tr.on( 'error', function( type, flag ) {
                    block.retried = block.retried || 0;
    
                    // 自动重试
                    if ( block.chunks > 1 && ~'http,abort'.indexOf( type ) &&
                            block.retried < opts.chunkRetry ) {
    
                        block.retried++;
                        tr.send();
    
                    } else {
    
                        // http status 500 ~ 600
                        if ( !flag && type === 'server' ) {
                            type = requestAccept( type );
                        }
    
                        file.setStatus( Status.ERROR, type );
                        owner.trigger( 'uploadError', file, type );
                        owner.trigger( 'uploadComplete', file );
                    }
                });
    
                // 上传成功
                tr.on( 'load', function() {
                    var reason;
    
                    // 如果非预期，转向上传出错。
                    if ( (reason = requestAccept()) ) {
                        tr.trigger( 'error', reason, true );
                        return;
                    }
    
                    // 全部上传完成。
                    if ( file.remaning === 1 ) {
                        me._finishFile( file, ret );
                    } else {
                        tr.destroy();
                    }
                });
    
                // 配置默认的上传字段。
                data = $.extend( data, {
                    id: file.id,
                    name: file.name,
                    type: file.type,
                    lastModifiedDate: file.lastModifiedDate,
                    size: file.size
                });
    
                block.chunks > 1 && $.extend( data, {
                    chunks: block.chunks,
                    chunk: block.chunk
                });
    
                // 在发送之间可以添加字段什么的。。。
                // 如果默认的字段不够使用，可以通过监听此事件来扩展
                owner.trigger( 'uploadBeforeSend', block, data, headers );
    
                // 开始发送。
                tr.appendBlob( opts.fileVal, block.blob, file.name );
                tr.append( data );
                tr.setRequestHeader( headers );
                tr.send();
            },
    
            // 完成上传。
            _finishFile: function( file, ret, hds ) {
                var owner = this.owner;
    
                return owner
                        .request( 'after-send-file', arguments, function() {
                            file.setStatus( Status.COMPLETE );
                            owner.trigger( 'uploadSuccess', file, ret, hds );
                        })
                        .fail(function( reason ) {
    
                            // 如果外部已经标记为invalid什么的，不再改状态。
                            if ( file.getStatus() === Status.PROGRESS ) {
                                file.setStatus( Status.ERROR, reason );
                            }
    
                            owner.trigger( 'uploadError', file, reason );
                        })
                        .always(function() {
                            owner.trigger( 'uploadComplete', file );
                        });
            },
    
            updateFileProgress: function(file) {
                var totalPercent = 0,
                    uploaded = 0;
    
                if (!file.blocks) {
                    return;
                }
    
                $.each( file.blocks, function( _, v ) {
                    uploaded += (v.percentage || 0) * (v.end - v.start);
                });
    
                totalPercent = uploaded / file.size;
                this.owner.trigger( 'uploadProgress', file, totalPercent || 0 );
            }
    
        });
    });
    /**
     * @fileOverview 各种验证，包括文件总大小是否超出、单文件是否超出和文件是否重复。
     */
    
    define('widgets/validator',[
        'base',
        'uploader',
        'file',
        'widgets/widget'
    ], function( Base, Uploader, WUFile ) {
    
        var $ = Base.$,
            validators = {},
            api;
    
        /**
         * @event error
         * @param {String} type 错误类型。
         * @description 当validate不通过时，会以派送错误事件的形式通知调用者。通过`upload.on('error', handler)`可以捕获到此类错误，目前有以下错误会在特定的情况下派送错来。
         *
         * * `Q_EXCEED_NUM_LIMIT` 在设置了`fileNumLimit`且尝试给`uploader`添加的文件数量超出这个值时派送。
         * * `Q_EXCEED_SIZE_LIMIT` 在设置了`Q_EXCEED_SIZE_LIMIT`且尝试给`uploader`添加的文件总大小超出这个值时派送。
         * * `Q_TYPE_DENIED` 当文件类型不满足时触发。。
         * @for  Uploader
         */
    
        // 暴露给外面的api
        api = {
    
            // 添加验证器
            addValidator: function( type, cb ) {
                validators[ type ] = cb;
            },
    
            // 移除验证器
            removeValidator: function( type ) {
                delete validators[ type ];
            }
        };
    
        // 在Uploader初始化的时候启动Validators的初始化
        Uploader.register({
            name: 'validator',
    
            init: function() {
                var me = this;
                Base.nextTick(function() {
                    $.each( validators, function() {
                        this.call( me.owner );
                    });
                });
            }
        });
    
        /**
         * @property {int} [fileNumLimit=undefined]
         * @namespace options
         * @for Uploader
         * @description 验证文件总数量, 超出则不允许加入队列。
         */
        api.addValidator( 'fileNumLimit', function() {
            var uploader = this,
                opts = uploader.options,
                count = 0,
                max = parseInt( opts.fileNumLimit, 10 ),
                flag = true;
    
            if ( !max ) {
                return;
            }
    
            uploader.on( 'beforeFileQueued', function( file ) {
    
                if ( count >= max && flag ) {
                    flag = false;
                    this.trigger( 'error', 'Q_EXCEED_NUM_LIMIT', max, file );
                    setTimeout(function() {
                        flag = true;
                    }, 1 );
                }
    
                return count >= max ? false : true;
            });
    
            uploader.on( 'fileQueued', function() {
                count++;
            });
    
            uploader.on( 'fileDequeued', function() {
                count--;
            });
    
            uploader.on( 'reset', function() {
                count = 0;
            });
        });
    
    
        /**
         * @property {int} [fileSizeLimit=undefined]
         * @namespace options
         * @for Uploader
         * @description 验证文件总大小是否超出限制, 超出则不允许加入队列。
         */
        api.addValidator( 'fileSizeLimit', function() {
            var uploader = this,
                opts = uploader.options,
                count = 0,
                max = parseInt( opts.fileSizeLimit, 10 ),
                flag = true;
    
            if ( !max ) {
                return;
            }
    
            uploader.on( 'beforeFileQueued', function( file ) {
                var invalid = count + file.size > max;
    
                if ( invalid && flag ) {
                    flag = false;
                    this.trigger( 'error', 'Q_EXCEED_SIZE_LIMIT', max, file );
                    setTimeout(function() {
                        flag = true;
                    }, 1 );
                }
    
                return invalid ? false : true;
            });
    
            uploader.on( 'fileQueued', function( file ) {
                count += file.size;
            });
    
            uploader.on( 'fileDequeued', function( file ) {
                count -= file.size;
            });
    
            uploader.on( 'reset', function() {
                count = 0;
            });
        });
    
        /**
         * @property {int} [fileSingleSizeLimit=undefined]
         * @namespace options
         * @for Uploader
         * @description 验证单个文件大小是否超出限制, 超出则不允许加入队列。
         */
        api.addValidator( 'fileSingleSizeLimit', function() {
            var uploader = this,
                opts = uploader.options,
                max = opts.fileSingleSizeLimit;
    
            if ( !max ) {
                return;
            }
    
            uploader.on( 'beforeFileQueued', function( file ) {
    
                if ( file.size > max ) {
                    file.setStatus( WUFile.Status.INVALID, 'exceed_size' );
                    this.trigger( 'error', 'F_EXCEED_SIZE', max, file );
                    return false;
                }
    
            });
    
        });
    
        /**
         * @property {Boolean} [duplicate=undefined]
         * @namespace options
         * @for Uploader
         * @description 去重， 根据文件名字、文件大小和最后修改时间来生成hash Key.
         */
        api.addValidator( 'duplicate', function() {
            var uploader = this,
                opts = uploader.options,
                mapping = {};
    
            if ( opts.duplicate ) {
                return;
            }
    
            function hashString( str ) {
                var hash = 0,
                    i = 0,
                    len = str.length,
                    _char;
    
                for ( ; i < len; i++ ) {
                    _char = str.charCodeAt( i );
                    hash = _char + (hash << 6) + (hash << 16) - hash;
                }
    
                return hash;
            }
    
            uploader.on( 'beforeFileQueued', function( file ) {
                var hash = file.__hash || (file.__hash = hashString( file.name +
                        file.size + file.lastModifiedDate ));
    
                // 已经重复了
                if ( mapping[ hash ] ) {
                    this.trigger( 'error', 'F_DUPLICATE', file );
                    return false;
                }
            });
    
            uploader.on( 'fileQueued', function( file ) {
                var hash = file.__hash;
    
                hash && (mapping[ hash ] = true);
            });
    
            uploader.on( 'fileDequeued', function( file ) {
                var hash = file.__hash;
    
                hash && (delete mapping[ hash ]);
            });
    
            uploader.on( 'reset', function() {
                mapping = {};
            });
        });
    
        return api;
    });
    
    /**
     * @fileOverview Md5
     */
    define('lib/md5',[
        'runtime/client',
        'mediator'
    ], function( RuntimeClient, Mediator ) {
    
        function Md5() {
            RuntimeClient.call( this, 'Md5' );
        }
    
        // 让 Md5 具备事件功能。
        Mediator.installTo( Md5.prototype );
    
        Md5.prototype.loadFromBlob = function( blob ) {
            var me = this;
    
            if ( me.getRuid() ) {
                me.disconnectRuntime();
            }
    
            // 连接到blob归属的同一个runtime.
            me.connectRuntime( blob.ruid, function() {
                me.exec('init');
                me.exec( 'loadFromBlob', blob );
            });
        };
    
        Md5.prototype.getResult = function() {
            return this.exec('getResult');
        };
    
        return Md5;
    });
    /**
     * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
     */
    define('widgets/md5',[
        'base',
        'uploader',
        'lib/md5',
        'lib/blob',
        'widgets/widget'
    ], function( Base, Uploader, Md5, Blob ) {
    
        return Uploader.register({
            name: 'md5',
    
    
            /**
             * 计算文件 md5 值，返回一个 promise 对象，可以监听 progress 进度。
             *
             *
             * @method md5File
             * @grammar md5File( file[, start[, end]] ) => promise
             * @for Uploader
             * @example
             *
             * uploader.on( 'fileQueued', function( file ) {
             *     var $li = ...;
             *
             *     uploader.md5File( file )
             *
             *         // 及时显示进度
             *         .progress(function(percentage) {
             *             console.log('Percentage:', percentage);
             *         })
             *
             *         // 完成
             *         .then(function(val) {
             *             console.log('md5 result:', val);
             *         });
             *
             * });
             */
            md5File: function( file, start, end ) {
                var md5 = new Md5(),
                    deferred = Base.Deferred(),
                    blob = (file instanceof Blob) ? file :
                        this.request( 'get-file', file ).source;
    
                md5.on( 'progress load', function( e ) {
                    e = e || {};
                    deferred.notify( e.total ? e.loaded / e.total : 1 );
                });
    
                md5.on( 'complete', function() {
                    deferred.resolve( md5.getResult() );
                });
    
                md5.on( 'error', function( reason ) {
                    deferred.reject( reason );
                });
    
                if ( arguments.length > 1 ) {
                    start = start || 0;
                    end = end || 0;
                    start < 0 && (start = blob.size + start);
                    end < 0 && (end = blob.size + end);
                    end = Math.min( end, blob.size );
                    blob = blob.slice( start, end );
                }
    
                md5.loadFromBlob( blob );
    
                return deferred.promise();
            }
        });
    });
    /**
     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
     */
    define('runtime/compbase',[],function() {
    
        function CompBase( owner, runtime ) {
    
            this.owner = owner;
            this.options = owner.options;
    
            this.getRuntime = function() {
                return runtime;
            };
    
            this.getRuid = function() {
                return runtime.uid;
            };
    
            this.trigger = function() {
                return owner.trigger.apply( owner, arguments );
            };
        }
    
        return CompBase;
    });
    /**
     * @fileOverview Html5Runtime
     */
    define('runtime/html5/runtime',[
        'base',
        'runtime/runtime',
        'runtime/compbase'
    ], function( Base, Runtime, CompBase ) {
    
        var type = 'html5',
            components = {};
    
        function Html5Runtime() {
            var pool = {},
                me = this,
                destroy = this.destroy;
    
            Runtime.apply( me, arguments );
            me.type = type;
    
    
            // 这个方法的调用者，实际上是RuntimeClient
            me.exec = function( comp, fn/*, args...*/) {
                var client = this,
                    uid = client.uid,
                    args = Base.slice( arguments, 2 ),
                    instance;
    
                if ( components[ comp ] ) {
                    instance = pool[ uid ] = pool[ uid ] ||
                            new components[ comp ]( client, me );
    
                    if ( instance[ fn ] ) {
                        return instance[ fn ].apply( instance, args );
                    }
                }
            };
    
            me.destroy = function() {
                // @todo 删除池子中的所有实例
                return destroy && destroy.apply( this, arguments );
            };
        }
    
        Base.inherits( Runtime, {
            constructor: Html5Runtime,
    
            // 不需要连接其他程序，直接执行callback
            init: function() {
                var me = this;
                setTimeout(function() {
                    me.trigger('ready');
                }, 1 );
            }
    
        });
    
        // 注册Components
        Html5Runtime.register = function( name, component ) {
            var klass = components[ name ] = Base.inherits( CompBase, component );
            return klass;
        };
    
        // 注册html5运行时。
        // 只有在支持的前提下注册。
        if ( window.Blob && window.FileReader && window.DataView ) {
            Runtime.addRuntime( type, Html5Runtime );
        }
    
        return Html5Runtime;
    });
    /**
     * @fileOverview Blob Html实现
     */
    define('runtime/html5/blob',[
        'runtime/html5/runtime',
        'lib/blob'
    ], function( Html5Runtime, Blob ) {
    
        return Html5Runtime.register( 'Blob', {
            slice: function( start, end ) {
                var blob = this.owner.source,
                    slice = blob.slice || blob.webkitSlice || blob.mozSlice;
    
                blob = slice.call( blob, start, end );
    
                return new Blob( this.getRuid(), blob );
            }
        });
    });
    /**
     * @fileOverview FilePaste
     */
    define('runtime/html5/dnd',[
        'base',
        'runtime/html5/runtime',
        'lib/file'
    ], function( Base, Html5Runtime, File ) {
    
        var $ = Base.$,
            prefix = 'webuploader-dnd-';
    
        return Html5Runtime.register( 'DragAndDrop', {
            init: function() {
                var elem = this.elem = this.options.container;
    
                this.dragEnterHandler = Base.bindFn( this._dragEnterHandler, this );
                this.dragOverHandler = Base.bindFn( this._dragOverHandler, this );
                this.dragLeaveHandler = Base.bindFn( this._dragLeaveHandler, this );
                this.dropHandler = Base.bindFn( this._dropHandler, this );
                this.dndOver = false;
    
                elem.on( 'dragenter', this.dragEnterHandler );
                elem.on( 'dragover', this.dragOverHandler );
                elem.on( 'dragleave', this.dragLeaveHandler );
                elem.on( 'drop', this.dropHandler );
    
                if ( this.options.disableGlobalDnd ) {
                    $( document ).on( 'dragover', this.dragOverHandler );
                    $( document ).on( 'drop', this.dropHandler );
                }
            },
    
            _dragEnterHandler: function( e ) {
                var me = this,
                    denied = me._denied || false,
                    items;
    
                e = e.originalEvent || e;
    
                if ( !me.dndOver ) {
                    me.dndOver = true;
    
                    // 注意只有 chrome 支持。
                    items = e.dataTransfer.items;
    
                    if ( items && items.length ) {
                        me._denied = denied = !me.trigger( 'accept', items );
                    }
    
                    me.elem.addClass( prefix + 'over' );
                    me.elem[ denied ? 'addClass' :
                            'removeClass' ]( prefix + 'denied' );
                }
    
                e.dataTransfer.dropEffect = denied ? 'none' : 'copy';
    
                return false;
            },
    
            _dragOverHandler: function( e ) {
                // 只处理框内的。
                var parentElem = this.elem.parent().get( 0 );
                if ( parentElem && !$.contains( parentElem, e.currentTarget ) ) {
                    return false;
                }
    
                clearTimeout( this._leaveTimer );
                this._dragEnterHandler.call( this, e );
    
                return false;
            },
    
            _dragLeaveHandler: function() {
                var me = this,
                    handler;
    
                handler = function() {
                    me.dndOver = false;
                    me.elem.removeClass( prefix + 'over ' + prefix + 'denied' );
                };
    
                clearTimeout( me._leaveTimer );
                me._leaveTimer = setTimeout( handler, 100 );
                return false;
            },
    
            _dropHandler: function( e ) {
                var me = this,
                    ruid = me.getRuid(),
                    parentElem = me.elem.parent().get( 0 ),
                    dataTransfer, data;
    
                // 只处理框内的。
                if ( parentElem && !$.contains( parentElem, e.currentTarget ) ) {
                    return false;
                }
    
                e = e.originalEvent || e;
                dataTransfer = e.dataTransfer;
    
                // 如果是页面内拖拽，还不能处理，不阻止事件。
                // 此处 ie11 下会报参数错误，
                try {
                    data = dataTransfer.getData('text/html');
                } catch( err ) {
                }
    
                me.dndOver = false;
                me.elem.removeClass( prefix + 'over' );
    
                if ( data ) {
                    return;
                }
    
                me._getTansferFiles( dataTransfer, function( results ) {
                    me.trigger( 'drop', $.map( results, function( file ) {
                        return new File( ruid, file );
                    }) );
                });
    
                return false;
            },
    
            // 如果传入 callback 则去查看文件夹，否则只管当前文件夹。
            _getTansferFiles: function( dataTransfer, callback ) {
                var results  = [],
                    promises = [],
                    items, files, file, item, i, len, canAccessFolder;
    
                items = dataTransfer.items;
                files = dataTransfer.files;
    
                canAccessFolder = !!(items && items[ 0 ].webkitGetAsEntry);
    
                for ( i = 0, len = files.length; i < len; i++ ) {
                    file = files[ i ];
                    item = items && items[ i ];
    
                    if ( canAccessFolder && item.webkitGetAsEntry().isDirectory ) {
    
                        promises.push( this._traverseDirectoryTree(
                                item.webkitGetAsEntry(), results ) );
                    } else {
                        results.push( file );
                    }
                }
    
                Base.when.apply( Base, promises ).done(function() {
    
                    if ( !results.length ) {
                        return;
                    }
    
                    callback( results );
                });
            },
    
            _traverseDirectoryTree: function( entry, results ) {
                var deferred = Base.Deferred(),
                    me = this;
    
                if ( entry.isFile ) {
                    entry.file(function( file ) {
                        results.push( file );
                        deferred.resolve();
                    });
                } else if ( entry.isDirectory ) {
                    entry.createReader().readEntries(function( entries ) {
                        var len = entries.length,
                            promises = [],
                            arr = [],    // 为了保证顺序。
                            i;
    
                        for ( i = 0; i < len; i++ ) {
                            promises.push( me._traverseDirectoryTree(
                                    entries[ i ], arr ) );
                        }
    
                        Base.when.apply( Base, promises ).then(function() {
                            results.push.apply( results, arr );
                            deferred.resolve();
                        }, deferred.reject );
                    });
                }
    
                return deferred.promise();
            },
    
            destroy: function() {
                var elem = this.elem;
    
                // 还没 init 就调用 destroy
                if (!elem) {
                    return;
                }
    
                elem.off( 'dragenter', this.dragEnterHandler );
                elem.off( 'dragover', this.dragOverHandler );
                elem.off( 'dragleave', this.dragLeaveHandler );
                elem.off( 'drop', this.dropHandler );
    
                if ( this.options.disableGlobalDnd ) {
                    $( document ).off( 'dragover', this.dragOverHandler );
                    $( document ).off( 'drop', this.dropHandler );
                }
            }
        });
    });
    
    /**
     * @fileOverview FilePaste
     */
    define('runtime/html5/filepaste',[
        'base',
        'runtime/html5/runtime',
        'lib/file'
    ], function( Base, Html5Runtime, File ) {
    
        return Html5Runtime.register( 'FilePaste', {
            init: function() {
                var opts = this.options,
                    elem = this.elem = opts.container,
                    accept = '.*',
                    arr, i, len, item;
    
                // accetp的mimeTypes中生成匹配正则。
                if ( opts.accept ) {
                    arr = [];
    
                    for ( i = 0, len = opts.accept.length; i < len; i++ ) {
                        item = opts.accept[ i ].mimeTypes;
                        item && arr.push( item );
                    }
    
                    if ( arr.length ) {
                        accept = arr.join(',');
                        accept = accept.replace( /,/g, '|' ).replace( /\*/g, '.*' );
                    }
                }
                this.accept = accept = new RegExp( accept, 'i' );
                this.hander = Base.bindFn( this._pasteHander, this );
                elem.on( 'paste', this.hander );
            },
    
            _pasteHander: function( e ) {
                var allowed = [],
                    ruid = this.getRuid(),
                    items, item, blob, i, len;
    
                e = e.originalEvent || e;
                items = e.clipboardData.items;
    
                for ( i = 0, len = items.length; i < len; i++ ) {
                    item = items[ i ];
    
                    if ( item.kind !== 'file' || !(blob = item.getAsFile()) ) {
                        continue;
                    }
    
                    allowed.push( new File( ruid, blob ) );
                }
    
                if ( allowed.length ) {
                    // 不阻止非文件粘贴（文字粘贴）的事件冒泡
                    e.preventDefault();
                    e.stopPropagation();
                    this.trigger( 'paste', allowed );
                }
            },
    
            destroy: function() {
                this.elem.off( 'paste', this.hander );
            }
        });
    });
    
    /**
     * @fileOverview FilePicker
     */
    define('runtime/html5/filepicker',[
        'base',
        'runtime/html5/runtime'
    ], function( Base, Html5Runtime ) {
    
        var $ = Base.$;
    
        return Html5Runtime.register( 'FilePicker', {
            init: function() {
                var container = this.getRuntime().getContainer(),
                    me = this,
                    owner = me.owner,
                    opts = me.options,
                    label = this.label = $( document.createElement('label') ),
                    input =  this.input = $( document.createElement('input') ),
                    arr, i, len, mouseHandler;
    
                input.attr( 'type', 'file' );
                input.attr( 'name', opts.name );
                input.addClass('webuploader-element-invisible');
    
                label.on( 'click', function() {
                    input.trigger('click');
                });
    
                label.css({
                    opacity: 0,
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    cursor: 'pointer',
                    background: '#ffffff'
                });
    
                if ( opts.multiple ) {
                    input.attr( 'multiple', 'multiple' );
                }
    
                // @todo Firefox不支持单独指定后缀
                if ( opts.accept && opts.accept.length > 0 ) {
                    arr = [];
    
                    for ( i = 0, len = opts.accept.length; i < len; i++ ) {
                        arr.push( opts.accept[ i ].mimeTypes );
                    }
    
                    input.attr( 'accept', arr.join(',') );
                }
    
                container.append( input );
                container.append( label );
    
                mouseHandler = function( e ) {
                    owner.trigger( e.type );
                };
    
                input.on( 'change', function( e ) {
                    var fn = arguments.callee,
                        clone;
    
                    me.files = e.target.files;
    
                    // reset input
                    clone = this.cloneNode( true );
                    clone.value = null;
                    this.parentNode.replaceChild( clone, this );
    
                    input.off();
                    input = $( clone ).on( 'change', fn )
                            .on( 'mouseenter mouseleave', mouseHandler );
    
                    owner.trigger('change');
                });
    
                label.on( 'mouseenter mouseleave', mouseHandler );
    
            },
    
    
            getFiles: function() {
                return this.files;
            },
    
            destroy: function() {
                this.input.off();
                this.label.off();
            }
        });
    });
    /**
     * Terms:
     *
     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
     * @fileOverview Image控件
     */
    define('runtime/html5/util',[
        'base'
    ], function( Base ) {
    
        var urlAPI = window.createObjectURL && window ||
                window.URL && URL.revokeObjectURL && URL ||
                window.webkitURL,
            createObjectURL = Base.noop,
            revokeObjectURL = createObjectURL;
    
        if ( urlAPI ) {
    
            // 更安全的方式调用，比如android里面就能把context改成其他的对象。
            createObjectURL = function() {
                return urlAPI.createObjectURL.apply( urlAPI, arguments );
            };
    
            revokeObjectURL = function() {
                return urlAPI.revokeObjectURL.apply( urlAPI, arguments );
            };
        }
    
        return {
            createObjectURL: createObjectURL,
            revokeObjectURL: revokeObjectURL,
    
            dataURL2Blob: function( dataURI ) {
                var byteStr, intArray, ab, i, mimetype, parts;
    
                parts = dataURI.split(',');
    
                if ( ~parts[ 0 ].indexOf('base64') ) {
                    byteStr = atob( parts[ 1 ] );
                } else {
                    byteStr = decodeURIComponent( parts[ 1 ] );
                }
    
                ab = new ArrayBuffer( byteStr.length );
                intArray = new Uint8Array( ab );
    
                for ( i = 0; i < byteStr.length; i++ ) {
                    intArray[ i ] = byteStr.charCodeAt( i );
                }
    
                mimetype = parts[ 0 ].split(':')[ 1 ].split(';')[ 0 ];
    
                return this.arrayBufferToBlob( ab, mimetype );
            },
    
            dataURL2ArrayBuffer: function( dataURI ) {
                var byteStr, intArray, i, parts;
    
                parts = dataURI.split(',');
    
                if ( ~parts[ 0 ].indexOf('base64') ) {
                    byteStr = atob( parts[ 1 ] );
                } else {
                    byteStr = decodeURIComponent( parts[ 1 ] );
                }
    
                intArray = new Uint8Array( byteStr.length );
    
                for ( i = 0; i < byteStr.length; i++ ) {
                    intArray[ i ] = byteStr.charCodeAt( i );
                }
    
                return intArray.buffer;
            },
    
            arrayBufferToBlob: function( buffer, type ) {
                var builder = window.BlobBuilder || window.WebKitBlobBuilder,
                    bb;
    
                // android不支持直接new Blob, 只能借助blobbuilder.
                if ( builder ) {
                    bb = new builder();
                    bb.append( buffer );
                    return bb.getBlob( type );
                }
    
                return new Blob([ buffer ], type ? { type: type } : {} );
            },
    
            // 抽出来主要是为了解决android下面canvas.toDataUrl不支持jpeg.
            // 你得到的结果是png.
            canvasToDataUrl: function( canvas, type, quality ) {
                return canvas.toDataURL( type, quality / 100 );
            },
    
            // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
            parseMeta: function( blob, callback ) {
                callback( false, {});
            },
    
            // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
            updateImageHead: function( data ) {
                return data;
            }
        };
    });
    /**
     * Terms:
     *
     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
     * @fileOverview Image控件
     */
    define('runtime/html5/imagemeta',[
        'runtime/html5/util'
    ], function( Util ) {
    
        var api;
    
        api = {
            parsers: {
                0xffe1: []
            },
    
            maxMetaDataSize: 262144,
    
            parse: function( blob, cb ) {
                var me = this,
                    fr = new FileReader();
    
                fr.onload = function() {
                    cb( false, me._parse( this.result ) );
                    fr = fr.onload = fr.onerror = null;
                };
    
                fr.onerror = function( e ) {
                    cb( e.message );
                    fr = fr.onload = fr.onerror = null;
                };
    
                blob = blob.slice( 0, me.maxMetaDataSize );
                fr.readAsArrayBuffer( blob.getSource() );
            },
    
            _parse: function( buffer, noParse ) {
                if ( buffer.byteLength < 6 ) {
                    return;
                }
    
                var dataview = new DataView( buffer ),
                    offset = 2,
                    maxOffset = dataview.byteLength - 4,
                    headLength = offset,
                    ret = {},
                    markerBytes, markerLength, parsers, i;
    
                if ( dataview.getUint16( 0 ) === 0xffd8 ) {
    
                    while ( offset < maxOffset ) {
                        markerBytes = dataview.getUint16( offset );
    
                        if ( markerBytes >= 0xffe0 && markerBytes <= 0xffef ||
                                markerBytes === 0xfffe ) {
    
                            markerLength = dataview.getUint16( offset + 2 ) + 2;
    
                            if ( offset + markerLength > dataview.byteLength ) {
                                break;
                            }
    
                            parsers = api.parsers[ markerBytes ];
    
                            if ( !noParse && parsers ) {
                                for ( i = 0; i < parsers.length; i += 1 ) {
                                    parsers[ i ].call( api, dataview, offset,
                                            markerLength, ret );
                                }
                            }
    
                            offset += markerLength;
                            headLength = offset;
                        } else {
                            break;
                        }
                    }
    
                    if ( headLength > 6 ) {
                        if ( buffer.slice ) {
                            ret.imageHead = buffer.slice( 2, headLength );
                        } else {
                            // Workaround for IE10, which does not yet
                            // support ArrayBuffer.slice:
                            ret.imageHead = new Uint8Array( buffer )
                                    .subarray( 2, headLength );
                        }
                    }
                }
    
                return ret;
            },
    
            updateImageHead: function( buffer, head ) {
                var data = this._parse( buffer, true ),
                    buf1, buf2, bodyoffset;
    
    
                bodyoffset = 2;
                if ( data.imageHead ) {
                    bodyoffset = 2 + data.imageHead.byteLength;
                }
    
                if ( buffer.slice ) {
                    buf2 = buffer.slice( bodyoffset );
                } else {
                    buf2 = new Uint8Array( buffer ).subarray( bodyoffset );
                }
    
                buf1 = new Uint8Array( head.byteLength + 2 + buf2.byteLength );
    
                buf1[ 0 ] = 0xFF;
                buf1[ 1 ] = 0xD8;
                buf1.set( new Uint8Array( head ), 2 );
                buf1.set( new Uint8Array( buf2 ), head.byteLength + 2 );
    
                return buf1.buffer;
            }
        };
    
        Util.parseMeta = function() {
            return api.parse.apply( api, arguments );
        };
    
        Util.updateImageHead = function() {
            return api.updateImageHead.apply( api, arguments );
        };
    
        return api;
    });
    /**
     * 代码来自于：https://github.com/blueimp/JavaScript-Load-Image
     * 暂时项目中只用了orientation.
     *
     * 去除了 Exif Sub IFD Pointer, GPS Info IFD Pointer, Exif Thumbnail.
     * @fileOverview EXIF解析
     */
    
    // Sample
    // ====================================
    // Make : Apple
    // Model : iPhone 4S
    // Orientation : 1
    // XResolution : 72 [72/1]
    // YResolution : 72 [72/1]
    // ResolutionUnit : 2
    // Software : QuickTime 7.7.1
    // DateTime : 2013:09:01 22:53:55
    // ExifIFDPointer : 190
    // ExposureTime : 0.058823529411764705 [1/17]
    // FNumber : 2.4 [12/5]
    // ExposureProgram : Normal program
    // ISOSpeedRatings : 800
    // ExifVersion : 0220
    // DateTimeOriginal : 2013:09:01 22:52:51
    // DateTimeDigitized : 2013:09:01 22:52:51
    // ComponentsConfiguration : YCbCr
    // ShutterSpeedValue : 4.058893515764426
    // ApertureValue : 2.5260688216892597 [4845/1918]
    // BrightnessValue : -0.3126686601998395
    // MeteringMode : Pattern
    // Flash : Flash did not fire, compulsory flash mode
    // FocalLength : 4.28 [107/25]
    // SubjectArea : [4 values]
    // FlashpixVersion : 0100
    // ColorSpace : 1
    // PixelXDimension : 2448
    // PixelYDimension : 3264
    // SensingMethod : One-chip color area sensor
    // ExposureMode : 0
    // WhiteBalance : Auto white balance
    // FocalLengthIn35mmFilm : 35
    // SceneCaptureType : Standard
    define('runtime/html5/imagemeta/exif',[
        'base',
        'runtime/html5/imagemeta'
    ], function( Base, ImageMeta ) {
    
        var EXIF = {};
    
        EXIF.ExifMap = function() {
            return this;
        };
    
        EXIF.ExifMap.prototype.map = {
            'Orientation': 0x0112
        };
    
        EXIF.ExifMap.prototype.get = function( id ) {
            return this[ id ] || this[ this.map[ id ] ];
        };
    
        EXIF.exifTagTypes = {
            // byte, 8-bit unsigned int:
            1: {
                getValue: function( dataView, dataOffset ) {
                    return dataView.getUint8( dataOffset );
                },
                size: 1
            },
    
            // ascii, 8-bit byte:
            2: {
                getValue: function( dataView, dataOffset ) {
                    return String.fromCharCode( dataView.getUint8( dataOffset ) );
                },
                size: 1,
                ascii: true
            },
    
            // short, 16 bit int:
            3: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getUint16( dataOffset, littleEndian );
                },
                size: 2
            },
    
            // long, 32 bit int:
            4: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getUint32( dataOffset, littleEndian );
                },
                size: 4
            },
    
            // rational = two long values,
            // first is numerator, second is denominator:
            5: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getUint32( dataOffset, littleEndian ) /
                        dataView.getUint32( dataOffset + 4, littleEndian );
                },
                size: 8
            },
    
            // slong, 32 bit signed int:
            9: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getInt32( dataOffset, littleEndian );
                },
                size: 4
            },
    
            // srational, two slongs, first is numerator, second is denominator:
            10: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getInt32( dataOffset, littleEndian ) /
                        dataView.getInt32( dataOffset + 4, littleEndian );
                },
                size: 8
            }
        };
    
        // undefined, 8-bit byte, value depending on field:
        EXIF.exifTagTypes[ 7 ] = EXIF.exifTagTypes[ 1 ];
    
        EXIF.getExifValue = function( dataView, tiffOffset, offset, type, length,
                littleEndian ) {
    
            var tagType = EXIF.exifTagTypes[ type ],
                tagSize, dataOffset, values, i, str, c;
    
            if ( !tagType ) {
                Base.log('Invalid Exif data: Invalid tag type.');
                return;
            }
    
            tagSize = tagType.size * length;
    
            // Determine if the value is contained in the dataOffset bytes,
            // or if the value at the dataOffset is a pointer to the actual data:
            dataOffset = tagSize > 4 ? tiffOffset + dataView.getUint32( offset + 8,
                    littleEndian ) : (offset + 8);
    
            if ( dataOffset + tagSize > dataView.byteLength ) {
                Base.log('Invalid Exif data: Invalid data offset.');
                return;
            }
    
            if ( length === 1 ) {
                return tagType.getValue( dataView, dataOffset, littleEndian );
            }
    
            values = [];
    
            for ( i = 0; i < length; i += 1 ) {
                values[ i ] = tagType.getValue( dataView,
                        dataOffset + i * tagType.size, littleEndian );
            }
    
            if ( tagType.ascii ) {
                str = '';
    
                // Concatenate the chars:
                for ( i = 0; i < values.length; i += 1 ) {
                    c = values[ i ];
    
                    // Ignore the terminating NULL byte(s):
                    if ( c === '\u0000' ) {
                        break;
                    }
                    str += c;
                }
    
                return str;
            }
            return values;
        };
    
        EXIF.parseExifTag = function( dataView, tiffOffset, offset, littleEndian,
                data ) {
    
            var tag = dataView.getUint16( offset, littleEndian );
            data.exif[ tag ] = EXIF.getExifValue( dataView, tiffOffset, offset,
                    dataView.getUint16( offset + 2, littleEndian ),    // tag type
                    dataView.getUint32( offset + 4, littleEndian ),    // tag length
                    littleEndian );
        };
    
        EXIF.parseExifTags = function( dataView, tiffOffset, dirOffset,
                littleEndian, data ) {
    
            var tagsNumber, dirEndOffset, i;
    
            if ( dirOffset + 6 > dataView.byteLength ) {
                Base.log('Invalid Exif data: Invalid directory offset.');
                return;
            }
    
            tagsNumber = dataView.getUint16( dirOffset, littleEndian );
            dirEndOffset = dirOffset + 2 + 12 * tagsNumber;
    
            if ( dirEndOffset + 4 > dataView.byteLength ) {
                Base.log('Invalid Exif data: Invalid directory size.');
                return;
            }
    
            for ( i = 0; i < tagsNumber; i += 1 ) {
                this.parseExifTag( dataView, tiffOffset,
                        dirOffset + 2 + 12 * i,    // tag offset
                        littleEndian, data );
            }
    
            // Return the offset to the next directory:
            return dataView.getUint32( dirEndOffset, littleEndian );
        };
    
        // EXIF.getExifThumbnail = function(dataView, offset, length) {
        //     var hexData,
        //         i,
        //         b;
        //     if (!length || offset + length > dataView.byteLength) {
        //         Base.log('Invalid Exif data: Invalid thumbnail data.');
        //         return;
        //     }
        //     hexData = [];
        //     for (i = 0; i < length; i += 1) {
        //         b = dataView.getUint8(offset + i);
        //         hexData.push((b < 16 ? '0' : '') + b.toString(16));
        //     }
        //     return 'data:image/jpeg,%' + hexData.join('%');
        // };
    
        EXIF.parseExifData = function( dataView, offset, length, data ) {
    
            var tiffOffset = offset + 10,
                littleEndian, dirOffset;
    
            // Check for the ASCII code for "Exif" (0x45786966):
            if ( dataView.getUint32( offset + 4 ) !== 0x45786966 ) {
                // No Exif data, might be XMP data instead
                return;
            }
            if ( tiffOffset + 8 > dataView.byteLength ) {
                Base.log('Invalid Exif data: Invalid segment size.');
                return;
            }
    
            // Check for the two null bytes:
            if ( dataView.getUint16( offset + 8 ) !== 0x0000 ) {
                Base.log('Invalid Exif data: Missing byte alignment offset.');
                return;
            }
    
            // Check the byte alignment:
            switch ( dataView.getUint16( tiffOffset ) ) {
                case 0x4949:
                    littleEndian = true;
                    break;
    
                case 0x4D4D:
                    littleEndian = false;
                    break;
    
                default:
                    Base.log('Invalid Exif data: Invalid byte alignment marker.');
                    return;
            }
    
            // Check for the TIFF tag marker (0x002A):
            if ( dataView.getUint16( tiffOffset + 2, littleEndian ) !== 0x002A ) {
                Base.log('Invalid Exif data: Missing TIFF marker.');
                return;
            }
    
            // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:
            dirOffset = dataView.getUint32( tiffOffset + 4, littleEndian );
            // Create the exif object to store the tags:
            data.exif = new EXIF.ExifMap();
            // Parse the tags of the main image directory and retrieve the
            // offset to the next directory, usually the thumbnail directory:
            dirOffset = EXIF.parseExifTags( dataView, tiffOffset,
                    tiffOffset + dirOffset, littleEndian, data );
    
            // 尝试读取缩略图
            // if ( dirOffset ) {
            //     thumbnailData = {exif: {}};
            //     dirOffset = EXIF.parseExifTags(
            //         dataView,
            //         tiffOffset,
            //         tiffOffset + dirOffset,
            //         littleEndian,
            //         thumbnailData
            //     );
    
            //     // Check for JPEG Thumbnail offset:
            //     if (thumbnailData.exif[0x0201]) {
            //         data.exif.Thumbnail = EXIF.getExifThumbnail(
            //             dataView,
            //             tiffOffset + thumbnailData.exif[0x0201],
            //             thumbnailData.exif[0x0202] // Thumbnail data length
            //         );
            //     }
            // }
        };
    
        ImageMeta.parsers[ 0xffe1 ].push( EXIF.parseExifData );
        return EXIF;
    });
    /**
     * 这个方式性能不行，但是可以解决android里面的toDataUrl的bug
     * android里面toDataUrl('image/jpege')得到的结果却是png.
     *
     * 所以这里没辙，只能借助这个工具
     * @fileOverview jpeg encoder
     */
    define('runtime/html5/jpegencoder',[], function( require, exports, module ) {
    
        /*
          Copyright (c) 2008, Adobe Systems Incorporated
          All rights reserved.
    
          Redistribution and use in source and binary forms, with or without
          modification, are permitted provided that the following conditions are
          met:
    
          * Redistributions of source code must retain the above copyright notice,
            this list of conditions and the following disclaimer.
    
          * Redistributions in binary form must reproduce the above copyright
            notice, this list of conditions and the following disclaimer in the
            documentation and/or other materials provided with the distribution.
    
          * Neither the name of Adobe Systems Incorporated nor the names of its
            contributors may be used to endorse or promote products derived from
            this software without specific prior written permission.
    
          THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
          IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
          THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
          PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
          CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
          EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
          PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
          PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
          LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
          NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
          SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        */
        /*
        JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009
    
        Basic GUI blocking jpeg encoder
        */
    
        function JPEGEncoder(quality) {
          var self = this;
            var fround = Math.round;
            var ffloor = Math.floor;
            var YTable = new Array(64);
            var UVTable = new Array(64);
            var fdtbl_Y = new Array(64);
            var fdtbl_UV = new Array(64);
            var YDC_HT;
            var UVDC_HT;
            var YAC_HT;
            var UVAC_HT;
    
            var bitcode = new Array(65535);
            var category = new Array(65535);
            var outputfDCTQuant = new Array(64);
            var DU = new Array(64);
            var byteout = [];
            var bytenew = 0;
            var bytepos = 7;
    
            var YDU = new Array(64);
            var UDU = new Array(64);
            var VDU = new Array(64);
            var clt = new Array(256);
            var RGB_YUV_TABLE = new Array(2048);
            var currentQuality;
    
            var ZigZag = [
                     0, 1, 5, 6,14,15,27,28,
                     2, 4, 7,13,16,26,29,42,
                     3, 8,12,17,25,30,41,43,
                     9,11,18,24,31,40,44,53,
                    10,19,23,32,39,45,52,54,
                    20,22,33,38,46,51,55,60,
                    21,34,37,47,50,56,59,61,
                    35,36,48,49,57,58,62,63
                ];
    
            var std_dc_luminance_nrcodes = [0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0];
            var std_dc_luminance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
            var std_ac_luminance_nrcodes = [0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,0x7d];
            var std_ac_luminance_values = [
                    0x01,0x02,0x03,0x00,0x04,0x11,0x05,0x12,
                    0x21,0x31,0x41,0x06,0x13,0x51,0x61,0x07,
                    0x22,0x71,0x14,0x32,0x81,0x91,0xa1,0x08,
                    0x23,0x42,0xb1,0xc1,0x15,0x52,0xd1,0xf0,
                    0x24,0x33,0x62,0x72,0x82,0x09,0x0a,0x16,
                    0x17,0x18,0x19,0x1a,0x25,0x26,0x27,0x28,
                    0x29,0x2a,0x34,0x35,0x36,0x37,0x38,0x39,
                    0x3a,0x43,0x44,0x45,0x46,0x47,0x48,0x49,
                    0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59,
                    0x5a,0x63,0x64,0x65,0x66,0x67,0x68,0x69,
                    0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79,
                    0x7a,0x83,0x84,0x85,0x86,0x87,0x88,0x89,
                    0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98,
                    0x99,0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7,
                    0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6,
                    0xb7,0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5,
                    0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4,
                    0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xe1,0xe2,
                    0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea,
                    0xf1,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
                    0xf9,0xfa
                ];
    
            var std_dc_chrominance_nrcodes = [0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
            var std_dc_chrominance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
            var std_ac_chrominance_nrcodes = [0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,0x77];
            var std_ac_chrominance_values = [
                    0x00,0x01,0x02,0x03,0x11,0x04,0x05,0x21,
                    0x31,0x06,0x12,0x41,0x51,0x07,0x61,0x71,
                    0x13,0x22,0x32,0x81,0x08,0x14,0x42,0x91,
                    0xa1,0xb1,0xc1,0x09,0x23,0x33,0x52,0xf0,
                    0x15,0x62,0x72,0xd1,0x0a,0x16,0x24,0x34,
                    0xe1,0x25,0xf1,0x17,0x18,0x19,0x1a,0x26,
                    0x27,0x28,0x29,0x2a,0x35,0x36,0x37,0x38,
                    0x39,0x3a,0x43,0x44,0x45,0x46,0x47,0x48,
                    0x49,0x4a,0x53,0x54,0x55,0x56,0x57,0x58,
                    0x59,0x5a,0x63,0x64,0x65,0x66,0x67,0x68,
                    0x69,0x6a,0x73,0x74,0x75,0x76,0x77,0x78,
                    0x79,0x7a,0x82,0x83,0x84,0x85,0x86,0x87,
                    0x88,0x89,0x8a,0x92,0x93,0x94,0x95,0x96,
                    0x97,0x98,0x99,0x9a,0xa2,0xa3,0xa4,0xa5,
                    0xa6,0xa7,0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,
                    0xb5,0xb6,0xb7,0xb8,0xb9,0xba,0xc2,0xc3,
                    0xc4,0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xd2,
                    0xd3,0xd4,0xd5,0xd6,0xd7,0xd8,0xd9,0xda,
                    0xe2,0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,
                    0xea,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
                    0xf9,0xfa
                ];
    
            function initQuantTables(sf){
                    var YQT = [
                        16, 11, 10, 16, 24, 40, 51, 61,
                        12, 12, 14, 19, 26, 58, 60, 55,
                        14, 13, 16, 24, 40, 57, 69, 56,
                        14, 17, 22, 29, 51, 87, 80, 62,
                        18, 22, 37, 56, 68,109,103, 77,
                        24, 35, 55, 64, 81,104,113, 92,
                        49, 64, 78, 87,103,121,120,101,
                        72, 92, 95, 98,112,100,103, 99
                    ];
    
                    for (var i = 0; i < 64; i++) {
                        var t = ffloor((YQT[i]*sf+50)/100);
                        if (t < 1) {
                            t = 1;
                        } else if (t > 255) {
                            t = 255;
                        }
                        YTable[ZigZag[i]] = t;
                    }
                    var UVQT = [
                        17, 18, 24, 47, 99, 99, 99, 99,
                        18, 21, 26, 66, 99, 99, 99, 99,
                        24, 26, 56, 99, 99, 99, 99, 99,
                        47, 66, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99
                    ];
                    for (var j = 0; j < 64; j++) {
                        var u = ffloor((UVQT[j]*sf+50)/100);
                        if (u < 1) {
                            u = 1;
                        } else if (u > 255) {
                            u = 255;
                        }
                        UVTable[ZigZag[j]] = u;
                    }
                    var aasf = [
                        1.0, 1.387039845, 1.306562965, 1.175875602,
                        1.0, 0.785694958, 0.541196100, 0.275899379
                    ];
                    var k = 0;
                    for (var row = 0; row < 8; row++)
                    {
                        for (var col = 0; col < 8; col++)
                        {
                            fdtbl_Y[k]  = (1.0 / (YTable [ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                            fdtbl_UV[k] = (1.0 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                            k++;
                        }
                    }
                }
    
                function computeHuffmanTbl(nrcodes, std_table){
                    var codevalue = 0;
                    var pos_in_table = 0;
                    var HT = new Array();
                    for (var k = 1; k <= 16; k++) {
                        for (var j = 1; j <= nrcodes[k]; j++) {
                            HT[std_table[pos_in_table]] = [];
                            HT[std_table[pos_in_table]][0] = codevalue;
                            HT[std_table[pos_in_table]][1] = k;
                            pos_in_table++;
                            codevalue++;
                        }
                        codevalue*=2;
                    }
                    return HT;
                }
    
                function initHuffmanTbl()
                {
                    YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes,std_dc_luminance_values);
                    UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes,std_dc_chrominance_values);
                    YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes,std_ac_luminance_values);
                    UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes,std_ac_chrominance_values);
                }
    
                function initCategoryNumber()
                {
                    var nrlower = 1;
                    var nrupper = 2;
                    for (var cat = 1; cat <= 15; cat++) {
                        //Positive numbers
                        for (var nr = nrlower; nr<nrupper; nr++) {
                            category[32767+nr] = cat;
                            bitcode[32767+nr] = [];
                            bitcode[32767+nr][1] = cat;
                            bitcode[32767+nr][0] = nr;
                        }
                        //Negative numbers
                        for (var nrneg =-(nrupper-1); nrneg<=-nrlower; nrneg++) {
                            category[32767+nrneg] = cat;
                            bitcode[32767+nrneg] = [];
                            bitcode[32767+nrneg][1] = cat;
                            bitcode[32767+nrneg][0] = nrupper-1+nrneg;
                        }
                        nrlower <<= 1;
                        nrupper <<= 1;
                    }
                }
    
                function initRGBYUVTable() {
                    for(var i = 0; i < 256;i++) {
                        RGB_YUV_TABLE[i]            =  19595 * i;
                        RGB_YUV_TABLE[(i+ 256)>>0]  =  38470 * i;
                        RGB_YUV_TABLE[(i+ 512)>>0]  =   7471 * i + 0x8000;
                        RGB_YUV_TABLE[(i+ 768)>>0]  = -11059 * i;
                        RGB_YUV_TABLE[(i+1024)>>0]  = -21709 * i;
                        RGB_YUV_TABLE[(i+1280)>>0]  =  32768 * i + 0x807FFF;
                        RGB_YUV_TABLE[(i+1536)>>0]  = -27439 * i;
                        RGB_YUV_TABLE[(i+1792)>>0]  = - 5329 * i;
                    }
                }
    
                // IO functions
                function writeBits(bs)
                {
                    var value = bs[0];
                    var posval = bs[1]-1;
                    while ( posval >= 0 ) {
                        if (value & (1 << posval) ) {
                            bytenew |= (1 << bytepos);
                        }
                        posval--;
                        bytepos--;
                        if (bytepos < 0) {
                            if (bytenew == 0xFF) {
                                writeByte(0xFF);
                                writeByte(0);
                            }
                            else {
                                writeByte(bytenew);
                            }
                            bytepos=7;
                            bytenew=0;
                        }
                    }
                }
    
                function writeByte(value)
                {
                    byteout.push(clt[value]); // write char directly instead of converting later
                }
    
                function writeWord(value)
                {
                    writeByte((value>>8)&0xFF);
                    writeByte((value   )&0xFF);
                }
    
                // DCT & quantization core
                function fDCTQuant(data, fdtbl)
                {
                    var d0, d1, d2, d3, d4, d5, d6, d7;
                    /* Pass 1: process rows. */
                    var dataOff=0;
                    var i;
                    var I8 = 8;
                    var I64 = 64;
                    for (i=0; i<I8; ++i)
                    {
                        d0 = data[dataOff];
                        d1 = data[dataOff+1];
                        d2 = data[dataOff+2];
                        d3 = data[dataOff+3];
                        d4 = data[dataOff+4];
                        d5 = data[dataOff+5];
                        d6 = data[dataOff+6];
                        d7 = data[dataOff+7];
    
                        var tmp0 = d0 + d7;
                        var tmp7 = d0 - d7;
                        var tmp1 = d1 + d6;
                        var tmp6 = d1 - d6;
                        var tmp2 = d2 + d5;
                        var tmp5 = d2 - d5;
                        var tmp3 = d3 + d4;
                        var tmp4 = d3 - d4;
    
                        /* Even part */
                        var tmp10 = tmp0 + tmp3;    /* phase 2 */
                        var tmp13 = tmp0 - tmp3;
                        var tmp11 = tmp1 + tmp2;
                        var tmp12 = tmp1 - tmp2;
    
                        data[dataOff] = tmp10 + tmp11; /* phase 3 */
                        data[dataOff+4] = tmp10 - tmp11;
    
                        var z1 = (tmp12 + tmp13) * 0.707106781; /* c4 */
                        data[dataOff+2] = tmp13 + z1; /* phase 5 */
                        data[dataOff+6] = tmp13 - z1;
    
                        /* Odd part */
                        tmp10 = tmp4 + tmp5; /* phase 2 */
                        tmp11 = tmp5 + tmp6;
                        tmp12 = tmp6 + tmp7;
    
                        /* The rotator is modified from fig 4-8 to avoid extra negations. */
                        var z5 = (tmp10 - tmp12) * 0.382683433; /* c6 */
                        var z2 = 0.541196100 * tmp10 + z5; /* c2-c6 */
                        var z4 = 1.306562965 * tmp12 + z5; /* c2+c6 */
                        var z3 = tmp11 * 0.707106781; /* c4 */
    
                        var z11 = tmp7 + z3;    /* phase 5 */
                        var z13 = tmp7 - z3;
    
                        data[dataOff+5] = z13 + z2; /* phase 6 */
                        data[dataOff+3] = z13 - z2;
                        data[dataOff+1] = z11 + z4;
                        data[dataOff+7] = z11 - z4;
    
                        dataOff += 8; /* advance pointer to next row */
                    }
    
                    /* Pass 2: process columns. */
                    dataOff = 0;
                    for (i=0; i<I8; ++i)
                    {
                        d0 = data[dataOff];
                        d1 = data[dataOff + 8];
                        d2 = data[dataOff + 16];
                        d3 = data[dataOff + 24];
                        d4 = data[dataOff + 32];
                        d5 = data[dataOff + 40];
                        d6 = data[dataOff + 48];
                        d7 = data[dataOff + 56];
    
                        var tmp0p2 = d0 + d7;
                        var tmp7p2 = d0 - d7;
                        var tmp1p2 = d1 + d6;
                        var tmp6p2 = d1 - d6;
                        var tmp2p2 = d2 + d5;
                        var tmp5p2 = d2 - d5;
                        var tmp3p2 = d3 + d4;
                        var tmp4p2 = d3 - d4;
    
                        /* Even part */
                        var tmp10p2 = tmp0p2 + tmp3p2;  /* phase 2 */
                        var tmp13p2 = tmp0p2 - tmp3p2;
                        var tmp11p2 = tmp1p2 + tmp2p2;
                        var tmp12p2 = tmp1p2 - tmp2p2;
    
                        data[dataOff] = tmp10p2 + tmp11p2; /* phase 3 */
                        data[dataOff+32] = tmp10p2 - tmp11p2;
    
                        var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781; /* c4 */
                        data[dataOff+16] = tmp13p2 + z1p2; /* phase 5 */
                        data[dataOff+48] = tmp13p2 - z1p2;
    
                        /* Odd part */
                        tmp10p2 = tmp4p2 + tmp5p2; /* phase 2 */
                        tmp11p2 = tmp5p2 + tmp6p2;
                        tmp12p2 = tmp6p2 + tmp7p2;
    
                        /* The rotator is modified from fig 4-8 to avoid extra negations. */
                        var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433; /* c6 */
                        var z2p2 = 0.541196100 * tmp10p2 + z5p2; /* c2-c6 */
                        var z4p2 = 1.306562965 * tmp12p2 + z5p2; /* c2+c6 */
                        var z3p2 = tmp11p2 * 0.707106781; /* c4 */
    
                        var z11p2 = tmp7p2 + z3p2;  /* phase 5 */
                        var z13p2 = tmp7p2 - z3p2;
    
                        data[dataOff+40] = z13p2 + z2p2; /* phase 6 */
                        data[dataOff+24] = z13p2 - z2p2;
                        data[dataOff+ 8] = z11p2 + z4p2;
                        data[dataOff+56] = z11p2 - z4p2;
    
                        dataOff++; /* advance pointer to next column */
                    }
    
                    // Quantize/descale the coefficients
                    var fDCTQuant;
                    for (i=0; i<I64; ++i)
                    {
                        // Apply the quantization and scaling factor & Round to nearest integer
                        fDCTQuant = data[i]*fdtbl[i];
                        outputfDCTQuant[i] = (fDCTQuant > 0.0) ? ((fDCTQuant + 0.5)|0) : ((fDCTQuant - 0.5)|0);
                        //outputfDCTQuant[i] = fround(fDCTQuant);
    
                    }
                    return outputfDCTQuant;
                }
    
                function writeAPP0()
                {
                    writeWord(0xFFE0); // marker
                    writeWord(16); // length
                    writeByte(0x4A); // J
                    writeByte(0x46); // F
                    writeByte(0x49); // I
                    writeByte(0x46); // F
                    writeByte(0); // = "JFIF",'\0'
                    writeByte(1); // versionhi
                    writeByte(1); // versionlo
                    writeByte(0); // xyunits
                    writeWord(1); // xdensity
                    writeWord(1); // ydensity
                    writeByte(0); // thumbnwidth
                    writeByte(0); // thumbnheight
                }
    
                function writeSOF0(width, height)
                {
                    writeWord(0xFFC0); // marker
                    writeWord(17);   // length, truecolor YUV JPG
                    writeByte(8);    // precision
                    writeWord(height);
                    writeWord(width);
                    writeByte(3);    // nrofcomponents
                    writeByte(1);    // IdY
                    writeByte(0x11); // HVY
                    writeByte(0);    // QTY
                    writeByte(2);    // IdU
                    writeByte(0x11); // HVU
                    writeByte(1);    // QTU
                    writeByte(3);    // IdV
                    writeByte(0x11); // HVV
                    writeByte(1);    // QTV
                }
    
                function writeDQT()
                {
                    writeWord(0xFFDB); // marker
                    writeWord(132);    // length
                    writeByte(0);
                    for (var i=0; i<64; i++) {
                        writeByte(YTable[i]);
                    }
                    writeByte(1);
                    for (var j=0; j<64; j++) {
                        writeByte(UVTable[j]);
                    }
                }
    
                function writeDHT()
                {
                    writeWord(0xFFC4); // marker
                    writeWord(0x01A2); // length
    
                    writeByte(0); // HTYDCinfo
                    for (var i=0; i<16; i++) {
                        writeByte(std_dc_luminance_nrcodes[i+1]);
                    }
                    for (var j=0; j<=11; j++) {
                        writeByte(std_dc_luminance_values[j]);
                    }
    
                    writeByte(0x10); // HTYACinfo
                    for (var k=0; k<16; k++) {
                        writeByte(std_ac_luminance_nrcodes[k+1]);
                    }
                    for (var l=0; l<=161; l++) {
                        writeByte(std_ac_luminance_values[l]);
                    }
    
                    writeByte(1); // HTUDCinfo
                    for (var m=0; m<16; m++) {
                        writeByte(std_dc_chrominance_nrcodes[m+1]);
                    }
                    for (var n=0; n<=11; n++) {
                        writeByte(std_dc_chrominance_values[n]);
                    }
    
                    writeByte(0x11); // HTUACinfo
                    for (var o=0; o<16; o++) {
                        writeByte(std_ac_chrominance_nrcodes[o+1]);
                    }
                    for (var p=0; p<=161; p++) {
                        writeByte(std_ac_chrominance_values[p]);
                    }
                }
    
                function writeSOS()
                {
                    writeWord(0xFFDA); // marker
                    writeWord(12); // length
                    writeByte(3); // nrofcomponents
                    writeByte(1); // IdY
                    writeByte(0); // HTY
                    writeByte(2); // IdU
                    writeByte(0x11); // HTU
                    writeByte(3); // IdV
                    writeByte(0x11); // HTV
                    writeByte(0); // Ss
                    writeByte(0x3f); // Se
                    writeByte(0); // Bf
                }
    
                function processDU(CDU, fdtbl, DC, HTDC, HTAC){
                    var EOB = HTAC[0x00];
                    var M16zeroes = HTAC[0xF0];
                    var pos;
                    var I16 = 16;
                    var I63 = 63;
                    var I64 = 64;
                    var DU_DCT = fDCTQuant(CDU, fdtbl);
                    //ZigZag reorder
                    for (var j=0;j<I64;++j) {
                        DU[ZigZag[j]]=DU_DCT[j];
                    }
                    var Diff = DU[0] - DC; DC = DU[0];
                    //Encode DC
                    if (Diff==0) {
                        writeBits(HTDC[0]); // Diff might be 0
                    } else {
                        pos = 32767+Diff;
                        writeBits(HTDC[category[pos]]);
                        writeBits(bitcode[pos]);
                    }
                    //Encode ACs
                    var end0pos = 63; // was const... which is crazy
                    for (; (end0pos>0)&&(DU[end0pos]==0); end0pos--) {};
                    //end0pos = first element in reverse order !=0
                    if ( end0pos == 0) {
                        writeBits(EOB);
                        return DC;
                    }
                    var i = 1;
                    var lng;
                    while ( i <= end0pos ) {
                        var startpos = i;
                        for (; (DU[i]==0) && (i<=end0pos); ++i) {}
                        var nrzeroes = i-startpos;
                        if ( nrzeroes >= I16 ) {
                            lng = nrzeroes>>4;
                            for (var nrmarker=1; nrmarker <= lng; ++nrmarker)
                                writeBits(M16zeroes);
                            nrzeroes = nrzeroes&0xF;
                        }
                        pos = 32767+DU[i];
                        writeBits(HTAC[(nrzeroes<<4)+category[pos]]);
                        writeBits(bitcode[pos]);
                        i++;
                    }
                    if ( end0pos != I63 ) {
                        writeBits(EOB);
                    }
                    return DC;
                }
    
                function initCharLookupTable(){
                    var sfcc = String.fromCharCode;
                    for(var i=0; i < 256; i++){ ///// ACHTUNG // 255
                        clt[i] = sfcc(i);
                    }
                }
    
                this.encode = function(image,quality) // image data object
                {
                    // var time_start = new Date().getTime();
    
                    if(quality) setQuality(quality);
    
                    // Initialize bit writer
                    byteout = new Array();
                    bytenew=0;
                    bytepos=7;
    
                    // Add JPEG headers
                    writeWord(0xFFD8); // SOI
                    writeAPP0();
                    writeDQT();
                    writeSOF0(image.width,image.height);
                    writeDHT();
                    writeSOS();
    
    
                    // Encode 8x8 macroblocks
                    var DCY=0;
                    var DCU=0;
                    var DCV=0;
    
                    bytenew=0;
                    bytepos=7;
    
    
                    this.encode.displayName = "_encode_";
    
                    var imageData = image.data;
                    var width = image.width;
                    var height = image.height;
    
                    var quadWidth = width*4;
                    var tripleWidth = width*3;
    
                    var x, y = 0;
                    var r, g, b;
                    var start,p, col,row,pos;
                    while(y < height){
                        x = 0;
                        while(x < quadWidth){
                        start = quadWidth * y + x;
                        p = start;
                        col = -1;
                        row = 0;
    
                        for(pos=0; pos < 64; pos++){
                            row = pos >> 3;// /8
                            col = ( pos & 7 ) * 4; // %8
                            p = start + ( row * quadWidth ) + col;
    
                            if(y+row >= height){ // padding bottom
                                p-= (quadWidth*(y+1+row-height));
                            }
    
                            if(x+col >= quadWidth){ // padding right
                                p-= ((x+col) - quadWidth +4)
                            }
    
                            r = imageData[ p++ ];
                            g = imageData[ p++ ];
                            b = imageData[ p++ ];
    
    
                            /* // calculate YUV values dynamically
                            YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
                            UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
                            VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
                            */
    
                            // use lookup table (slightly faster)
                            YDU[pos] = ((RGB_YUV_TABLE[r]             + RGB_YUV_TABLE[(g +  256)>>0] + RGB_YUV_TABLE[(b +  512)>>0]) >> 16)-128;
                            UDU[pos] = ((RGB_YUV_TABLE[(r +  768)>>0] + RGB_YUV_TABLE[(g + 1024)>>0] + RGB_YUV_TABLE[(b + 1280)>>0]) >> 16)-128;
                            VDU[pos] = ((RGB_YUV_TABLE[(r + 1280)>>0] + RGB_YUV_TABLE[(g + 1536)>>0] + RGB_YUV_TABLE[(b + 1792)>>0]) >> 16)-128;
    
                        }
    
                        DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
                        DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
                        DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
                        x+=32;
                        }
                        y+=8;
                    }
    
    
                    ////////////////////////////////////////////////////////////////
    
                    // Do the bit alignment of the EOI marker
                    if ( bytepos >= 0 ) {
                        var fillbits = [];
                        fillbits[1] = bytepos+1;
                        fillbits[0] = (1<<(bytepos+1))-1;
                        writeBits(fillbits);
                    }
    
                    writeWord(0xFFD9); //EOI
    
                    var jpegDataUri = 'data:image/jpeg;base64,' + btoa(byteout.join(''));
    
                    byteout = [];
    
                    // benchmarking
                    // var duration = new Date().getTime() - time_start;
                    // console.log('Encoding time: '+ currentQuality + 'ms');
                    //
    
                    return jpegDataUri
            }
    
            function setQuality(quality){
                if (quality <= 0) {
                    quality = 1;
                }
                if (quality > 100) {
                    quality = 100;
                }
    
                if(currentQuality == quality) return // don't recalc if unchanged
    
                var sf = 0;
                if (quality < 50) {
                    sf = Math.floor(5000 / quality);
                } else {
                    sf = Math.floor(200 - quality*2);
                }
    
                initQuantTables(sf);
                currentQuality = quality;
                // console.log('Quality set to: '+quality +'%');
            }
    
            function init(){
                // var time_start = new Date().getTime();
                if(!quality) quality = 50;
                // Create tables
                initCharLookupTable()
                initHuffmanTbl();
                initCategoryNumber();
                initRGBYUVTable();
    
                setQuality(quality);
                // var duration = new Date().getTime() - time_start;
                // console.log('Initialization '+ duration + 'ms');
            }
    
            init();
    
        };
    
        JPEGEncoder.encode = function( data, quality ) {
            var encoder = new JPEGEncoder( quality );
    
            return encoder.encode( data );
        }
    
        return JPEGEncoder;
    });
    /**
     * @fileOverview Fix android canvas.toDataUrl bug.
     */
    define('runtime/html5/androidpatch',[
        'runtime/html5/util',
        'runtime/html5/jpegencoder',
        'base'
    ], function( Util, encoder, Base ) {
        var origin = Util.canvasToDataUrl,
            supportJpeg;
    
        Util.canvasToDataUrl = function( canvas, type, quality ) {
            var ctx, w, h, fragement, parts;
    
            // 非android手机直接跳过。
            if ( !Base.os.android ) {
                return origin.apply( null, arguments );
            }
    
            // 检测是否canvas支持jpeg导出，根据数据格式来判断。
            // JPEG 前两位分别是：255, 216
            if ( type === 'image/jpeg' && typeof supportJpeg === 'undefined' ) {
                fragement = origin.apply( null, arguments );
    
                parts = fragement.split(',');
    
                if ( ~parts[ 0 ].indexOf('base64') ) {
                    fragement = atob( parts[ 1 ] );
                } else {
                    fragement = decodeURIComponent( parts[ 1 ] );
                }
    
                fragement = fragement.substring( 0, 2 );
    
                supportJpeg = fragement.charCodeAt( 0 ) === 255 &&
                        fragement.charCodeAt( 1 ) === 216;
            }
    
            // 只有在android环境下才修复
            if ( type === 'image/jpeg' && !supportJpeg ) {
                w = canvas.width;
                h = canvas.height;
                ctx = canvas.getContext('2d');
    
                return encoder.encode( ctx.getImageData( 0, 0, w, h ), quality );
            }
    
            return origin.apply( null, arguments );
        };
    });
    /**
     * @fileOverview Image
     */
    define('runtime/html5/image',[
        'base',
        'runtime/html5/runtime',
        'runtime/html5/util'
    ], function( Base, Html5Runtime, Util ) {
    
        var BLANK = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D';
    
        return Html5Runtime.register( 'Image', {
    
            // flag: 标记是否被修改过。
            modified: false,
    
            init: function() {
                var me = this,
                    img = new Image();
    
                img.onload = function() {
    
                    me._info = {
                        type: me.type,
                        width: this.width,
                        height: this.height
                    };
    
                    debugger;
    
                    // 读取meta信息。
                    if ( !me._metas && 'image/jpeg' === me.type ) {
                        Util.parseMeta( me._blob, function( error, ret ) {
                            me._metas = ret;
                            me.owner.trigger('load');
                        });
                    } else {
                        me.owner.trigger('load');
                    }
                };
    
                img.onerror = function() {
                    me.owner.trigger('error');
                };
    
                me._img = img;
            },
    
            loadFromBlob: function( blob ) {
                var me = this,
                    img = me._img;
    
                me._blob = blob;
                me.type = blob.type;
                img.src = Util.createObjectURL( blob.getSource() );
                me.owner.once( 'load', function() {
                    Util.revokeObjectURL( img.src );
                });
            },
    
            resize: function( width, height ) {
                var canvas = this._canvas ||
                        (this._canvas = document.createElement('canvas'));
    
                this._resize( this._img, canvas, width, height );
                this._blob = null;    // 没用了，可以删掉了。
                this.modified = true;
                this.owner.trigger( 'complete', 'resize' );
            },
    
            crop: function( x, y, w, h, s ) {
                var cvs = this._canvas ||
                        (this._canvas = document.createElement('canvas')),
                    opts = this.options,
                    img = this._img,
                    iw = img.naturalWidth,
                    ih = img.naturalHeight,
                    orientation = this.getOrientation();
    
                s = s || 1;
    
                // todo 解决 orientation 的问题。
                // values that require 90 degree rotation
                // if ( ~[ 5, 6, 7, 8 ].indexOf( orientation ) ) {
    
                //     switch ( orientation ) {
                //         case 6:
                //             tmp = x;
                //             x = y;
                //             y = iw * s - tmp - w;
                //             console.log(ih * s, tmp, w)
                //             break;
                //     }
    
                //     (w ^= h, h ^= w, w ^= h);
                // }
    
                cvs.width = w;
                cvs.height = h;
    
                opts.preserveHeaders || this._rotate2Orientaion( cvs, orientation );
                this._renderImageToCanvas( cvs, img, -x, -y, iw * s, ih * s );
    
                this._blob = null;    // 没用了，可以删掉了。
                this.modified = true;
                this.owner.trigger( 'complete', 'crop' );
            },
    
            getAsBlob: function( type ) {
                var blob = this._blob,
                    opts = this.options,
                    canvas;
    
                type = type || this.type;
    
                // blob需要重新生成。
                if ( this.modified || this.type !== type ) {
                    canvas = this._canvas;
    
                    if ( type === 'image/jpeg' ) {
    
                        blob = Util.canvasToDataUrl( canvas, type, opts.quality );
    
                        if ( opts.preserveHeaders && this._metas &&
                                this._metas.imageHead ) {
    
                            blob = Util.dataURL2ArrayBuffer( blob );
                            blob = Util.updateImageHead( blob,
                                    this._metas.imageHead );
                            blob = Util.arrayBufferToBlob( blob, type );
                            return blob;
                        }
                    } else {
                        blob = Util.canvasToDataUrl( canvas, type );
                    }
    
                    blob = Util.dataURL2Blob( blob );
                }
    
                return blob;
            },
    
            getAsDataUrl: function( type ) {
                var opts = this.options;
    
                type = type || this.type;
    
                if ( type === 'image/jpeg' ) {
                    return Util.canvasToDataUrl( this._canvas, type, opts.quality );
                } else {
                    return this._canvas.toDataURL( type );
                }
            },
    
            getOrientation: function() {
                return this._metas && this._metas.exif &&
                        this._metas.exif.get('Orientation') || 1;
            },
    
            info: function( val ) {
    
                // setter
                if ( val ) {
                    this._info = val;
                    return this;
                }
    
                // getter
                return this._info;
            },
    
            meta: function( val ) {
    
                // setter
                if ( val ) {
                    this._metas = val;
                    return this;
                }
    
                // getter
                return this._metas;
            },
    
            destroy: function() {
                var canvas = this._canvas;
                this._img.onload = null;
    
                if ( canvas ) {
                    canvas.getContext('2d')
                            .clearRect( 0, 0, canvas.width, canvas.height );
                    canvas.width = canvas.height = 0;
                    this._canvas = null;
                }
    
                // 释放内存。非常重要，否则释放不了image的内存。
                this._img.src = BLANK;
                this._img = this._blob = null;
            },
    
            _resize: function( img, cvs, width, height ) {
                var opts = this.options,
                    naturalWidth = img.width,
                    naturalHeight = img.height,
                    orientation = this.getOrientation(),
                    scale, w, h, x, y;
    
                // values that require 90 degree rotation
                if ( ~[ 5, 6, 7, 8 ].indexOf( orientation ) ) {
    
                    // 交换width, height的值。
                    width ^= height;
                    height ^= width;
                    width ^= height;
                }
    
                scale = Math[ opts.crop ? 'max' : 'min' ]( width / naturalWidth,
                        height / naturalHeight );
    
                // 不允许放大。
                opts.allowMagnify || (scale = Math.min( 1, scale ));
    
                w = naturalWidth * scale;
                h = naturalHeight * scale;
    
                if ( opts.crop ) {
                    cvs.width = width;
                    cvs.height = height;
                } else {
                    cvs.width = w;
                    cvs.height = h;
                }
    
                x = (cvs.width - w) / 2;
                y = (cvs.height - h) / 2;
    
                opts.preserveHeaders || this._rotate2Orientaion( cvs, orientation );
    
                this._renderImageToCanvas( cvs, img, x, y, w, h );
            },
    
            _rotate2Orientaion: function( canvas, orientation ) {
                var width = canvas.width,
                    height = canvas.height,
                    ctx = canvas.getContext('2d');
    
                switch ( orientation ) {
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        canvas.width = height;
                        canvas.height = width;
                        break;
                }
    
                switch ( orientation ) {
                    case 2:    // horizontal flip
                        ctx.translate( width, 0 );
                        ctx.scale( -1, 1 );
                        break;
    
                    case 3:    // 180 rotate left
                        ctx.translate( width, height );
                        ctx.rotate( Math.PI );
                        break;
    
                    case 4:    // vertical flip
                        ctx.translate( 0, height );
                        ctx.scale( 1, -1 );
                        break;
    
                    case 5:    // vertical flip + 90 rotate right
                        ctx.rotate( 0.5 * Math.PI );
                        ctx.scale( 1, -1 );
                        break;
    
                    case 6:    // 90 rotate right
                        ctx.rotate( 0.5 * Math.PI );
                        ctx.translate( 0, -height );
                        break;
    
                    case 7:    // horizontal flip + 90 rotate right
                        ctx.rotate( 0.5 * Math.PI );
                        ctx.translate( width, -height );
                        ctx.scale( -1, 1 );
                        break;
    
                    case 8:    // 90 rotate left
                        ctx.rotate( -0.5 * Math.PI );
                        ctx.translate( -width, 0 );
                        break;
                }
            },
    
            // https://github.com/stomita/ios-imagefile-megapixel/
            // blob/master/src/megapix-image.js
            _renderImageToCanvas: (function() {
    
                // 如果不是ios, 不需要这么复杂！
                if ( !Base.os.ios ) {
                    return function( canvas ) {
                        var args = Base.slice( arguments, 1 ),
                            ctx = canvas.getContext('2d');
    
                        ctx.drawImage.apply( ctx, args );
                    };
                }
    
                /**
                 * Detecting vertical squash in loaded image.
                 * Fixes a bug which squash image vertically while drawing into
                 * canvas for some images.
                 */
                function detectVerticalSquash( img, iw, ih ) {
                    var canvas = document.createElement('canvas'),
                        ctx = canvas.getContext('2d'),
                        sy = 0,
                        ey = ih,
                        py = ih,
                        data, alpha, ratio;
    
    
                    canvas.width = 1;
                    canvas.height = ih;
                    ctx.drawImage( img, 0, 0 );
                    data = ctx.getImageData( 0, 0, 1, ih ).data;
    
                    // search image edge pixel position in case
                    // it is squashed vertically.
                    while ( py > sy ) {
                        alpha = data[ (py - 1) * 4 + 3 ];
    
                        if ( alpha === 0 ) {
                            ey = py;
                        } else {
                            sy = py;
                        }
    
                        py = (ey + sy) >> 1;
                    }
    
                    ratio = (py / ih);
                    return (ratio === 0) ? 1 : ratio;
                }
    
                // fix ie7 bug
                // http://stackoverflow.com/questions/11929099/
                // html5-canvas-drawimage-ratio-bug-ios
                if ( Base.os.ios >= 7 ) {
                    return function( canvas, img, x, y, w, h ) {
                        var iw = img.naturalWidth,
                            ih = img.naturalHeight,
                            vertSquashRatio = detectVerticalSquash( img, iw, ih );
    
                        return canvas.getContext('2d').drawImage( img, 0, 0,
                                iw * vertSquashRatio, ih * vertSquashRatio,
                                x, y, w, h );
                    };
                }
    
                /**
                 * Detect subsampling in loaded image.
                 * In iOS, larger images than 2M pixels may be
                 * subsampled in rendering.
                 */
                function detectSubsampling( img ) {
                    var iw = img.naturalWidth,
                        ih = img.naturalHeight,
                        canvas, ctx;
    
                    // subsampling may happen overmegapixel image
                    if ( iw * ih > 1024 * 1024 ) {
                        canvas = document.createElement('canvas');
                        canvas.width = canvas.height = 1;
                        ctx = canvas.getContext('2d');
                        ctx.drawImage( img, -iw + 1, 0 );
    
                        // subsampled image becomes half smaller in rendering size.
                        // check alpha channel value to confirm image is covering
                        // edge pixel or not. if alpha value is 0
                        // image is not covering, hence subsampled.
                        return ctx.getImageData( 0, 0, 1, 1 ).data[ 3 ] === 0;
                    } else {
                        return false;
                    }
                }
    
    
                return function( canvas, img, x, y, width, height ) {
                    var iw = img.naturalWidth,
                        ih = img.naturalHeight,
                        ctx = canvas.getContext('2d'),
                        subsampled = detectSubsampling( img ),
                        doSquash = this.type === 'image/jpeg',
                        d = 1024,
                        sy = 0,
                        dy = 0,
                        tmpCanvas, tmpCtx, vertSquashRatio, dw, dh, sx, dx;
    
                    if ( subsampled ) {
                        iw /= 2;
                        ih /= 2;
                    }
    
                    ctx.save();
                    tmpCanvas = document.createElement('canvas');
                    tmpCanvas.width = tmpCanvas.height = d;
    
                    tmpCtx = tmpCanvas.getContext('2d');
                    vertSquashRatio = doSquash ?
                            detectVerticalSquash( img, iw, ih ) : 1;
    
                    dw = Math.ceil( d * width / iw );
                    dh = Math.ceil( d * height / ih / vertSquashRatio );
    
                    while ( sy < ih ) {
                        sx = 0;
                        dx = 0;
                        while ( sx < iw ) {
                            tmpCtx.clearRect( 0, 0, d, d );
                            tmpCtx.drawImage( img, -sx, -sy );
                            ctx.drawImage( tmpCanvas, 0, 0, d, d,
                                    x + dx, y + dy, dw, dh );
                            sx += d;
                            dx += dw;
                        }
                        sy += d;
                        dy += dh;
                    }
                    ctx.restore();
                    tmpCanvas = tmpCtx = null;
                };
            })()
        });
    });
    /**
     * @fileOverview Transport
     * @todo 支持chunked传输，优势：
     * 可以将大文件分成小块，挨个传输，可以提高大文件成功率，当失败的时候，也只需要重传那小部分，
     * 而不需要重头再传一次。另外断点续传也需要用chunked方式。
     */
    define('runtime/html5/transport',[
        'base',
        'runtime/html5/runtime'
    ], function( Base, Html5Runtime ) {
    
        var noop = Base.noop,
            $ = Base.$;
    
        return Html5Runtime.register( 'Transport', {
            init: function() {
                this._status = 0;
                this._response = null;
            },
    
            send: function() {
                var owner = this.owner,
                    opts = this.options,
                    xhr = this._initAjax(),
                    blob = owner._blob,
                    server = opts.server,
                    formData, binary, fr;
    
                if ( opts.sendAsBinary ) {
                    server += (/\?/.test( server ) ? '&' : '?') +
                            $.param( owner._formData );
    
                    binary = blob.getSource();
                } else {
                    formData = new FormData();
                    $.each( owner._formData, function( k, v ) {
                        formData.append( k, v );
                    });
    
                    formData.append( opts.fileVal, blob.getSource(),
                            opts.filename || owner._formData.name || '' );
                }
    
                if ( opts.withCredentials && 'withCredentials' in xhr ) {
                    xhr.open( opts.method, server, true );
                    xhr.withCredentials = true;
                } else {
                    xhr.open( opts.method, server );
                }
    
                this._setRequestHeader( xhr, opts.headers );
    
                if ( binary ) {
                    // 强制设置成 content-type 为文件流。
                    xhr.overrideMimeType &&
                            xhr.overrideMimeType('application/octet-stream');
    
                    // android直接发送blob会导致服务端接收到的是空文件。
                    // bug详情。
                    // https://code.google.com/p/android/issues/detail?id=39882
                    // 所以先用fileReader读取出来再通过arraybuffer的方式发送。
                    if ( Base.os.android ) {
                        fr = new FileReader();
    
                        fr.onload = function() {
                            xhr.send( this.result );
                            fr = fr.onload = null;
                        };
    
                        fr.readAsArrayBuffer( binary );
                    } else {
                        xhr.send( binary );
                    }
                } else {
                    xhr.send( formData );
                }
            },
    
            getResponse: function() {
                return this._response;
            },
    
            getResponseAsJson: function() {
                return this._parseJson( this._response );
            },
    
            getStatus: function() {
                return this._status;
            },
    
            abort: function() {
                var xhr = this._xhr;
    
                if ( xhr ) {
                    xhr.upload.onprogress = noop;
                    xhr.onreadystatechange = noop;
                    xhr.abort();
    
                    this._xhr = xhr = null;
                }
            },
    
            destroy: function() {
                this.abort();
            },
    
            _initAjax: function() {
                var me = this,
                    xhr = new XMLHttpRequest(),
                    opts = this.options;
    
                if ( opts.withCredentials && !('withCredentials' in xhr) &&
                        typeof XDomainRequest !== 'undefined' ) {
                    xhr = new XDomainRequest();
                }
    
                xhr.upload.onprogress = function( e ) {
                    var percentage = 0;
    
                    if ( e.lengthComputable ) {
                        percentage = e.loaded / e.total;
                    }
    
                    return me.trigger( 'progress', percentage );
                };
    
                xhr.onreadystatechange = function() {
    
                    if ( xhr.readyState !== 4 ) {
                        return;
                    }
    
                    xhr.upload.onprogress = noop;
                    xhr.onreadystatechange = noop;
                    me._xhr = null;
                    me._status = xhr.status;
    
                    if ( xhr.status >= 200 && xhr.status < 300 ) {
                        me._response = xhr.responseText;
                        return me.trigger('load');
                    } else if ( xhr.status >= 500 && xhr.status < 600 ) {
                        me._response = xhr.responseText;
                        return me.trigger( 'error', 'server' );
                    }
    
    
                    return me.trigger( 'error', me._status ? 'http' : 'abort' );
                };
    
                me._xhr = xhr;
                return xhr;
            },
    
            _setRequestHeader: function( xhr, headers ) {
                $.each( headers, function( key, val ) {
                    xhr.setRequestHeader( key, val );
                });
            },
    
            _parseJson: function( str ) {
                var json;
    
                try {
                    json = JSON.parse( str );
                } catch ( ex ) {
                    json = {};
                }
    
                return json;
            }
        });
    });
    /**
     * @fileOverview  Transport flash实现
     */
    define('runtime/html5/md5',[
        'runtime/html5/runtime'
    ], function( FlashRuntime ) {
    
        /*
         * Fastest md5 implementation around (JKM md5)
         * Credits: Joseph Myers
         *
         * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
         * @see http://jsperf.com/md5-shootout/7
         */
    
        /* this function is much faster,
          so if possible we use it. Some IEs
          are the only ones I know of that
          need the idiotic second function,
          generated by an if clause.  */
        var add32 = function (a, b) {
            return (a + b) & 0xFFFFFFFF;
        },
    
        cmn = function (q, a, b, x, s, t) {
            a = add32(add32(a, q), add32(x, t));
            return add32((a << s) | (a >>> (32 - s)), b);
        },
    
        ff = function (a, b, c, d, x, s, t) {
            return cmn((b & c) | ((~b) & d), a, b, x, s, t);
        },
    
        gg = function (a, b, c, d, x, s, t) {
            return cmn((b & d) | (c & (~d)), a, b, x, s, t);
        },
    
        hh = function (a, b, c, d, x, s, t) {
            return cmn(b ^ c ^ d, a, b, x, s, t);
        },
    
        ii = function (a, b, c, d, x, s, t) {
            return cmn(c ^ (b | (~d)), a, b, x, s, t);
        },
    
        md5cycle = function (x, k) {
            var a = x[0],
                b = x[1],
                c = x[2],
                d = x[3];
    
            a = ff(a, b, c, d, k[0], 7, -680876936);
            d = ff(d, a, b, c, k[1], 12, -389564586);
            c = ff(c, d, a, b, k[2], 17, 606105819);
            b = ff(b, c, d, a, k[3], 22, -1044525330);
            a = ff(a, b, c, d, k[4], 7, -176418897);
            d = ff(d, a, b, c, k[5], 12, 1200080426);
            c = ff(c, d, a, b, k[6], 17, -1473231341);
            b = ff(b, c, d, a, k[7], 22, -45705983);
            a = ff(a, b, c, d, k[8], 7, 1770035416);
            d = ff(d, a, b, c, k[9], 12, -1958414417);
            c = ff(c, d, a, b, k[10], 17, -42063);
            b = ff(b, c, d, a, k[11], 22, -1990404162);
            a = ff(a, b, c, d, k[12], 7, 1804603682);
            d = ff(d, a, b, c, k[13], 12, -40341101);
            c = ff(c, d, a, b, k[14], 17, -1502002290);
            b = ff(b, c, d, a, k[15], 22, 1236535329);
    
            a = gg(a, b, c, d, k[1], 5, -165796510);
            d = gg(d, a, b, c, k[6], 9, -1069501632);
            c = gg(c, d, a, b, k[11], 14, 643717713);
            b = gg(b, c, d, a, k[0], 20, -373897302);
            a = gg(a, b, c, d, k[5], 5, -701558691);
            d = gg(d, a, b, c, k[10], 9, 38016083);
            c = gg(c, d, a, b, k[15], 14, -660478335);
            b = gg(b, c, d, a, k[4], 20, -405537848);
            a = gg(a, b, c, d, k[9], 5, 568446438);
            d = gg(d, a, b, c, k[14], 9, -1019803690);
            c = gg(c, d, a, b, k[3], 14, -187363961);
            b = gg(b, c, d, a, k[8], 20, 1163531501);
            a = gg(a, b, c, d, k[13], 5, -1444681467);
            d = gg(d, a, b, c, k[2], 9, -51403784);
            c = gg(c, d, a, b, k[7], 14, 1735328473);
            b = gg(b, c, d, a, k[12], 20, -1926607734);
    
            a = hh(a, b, c, d, k[5], 4, -378558);
            d = hh(d, a, b, c, k[8], 11, -2022574463);
            c = hh(c, d, a, b, k[11], 16, 1839030562);
            b = hh(b, c, d, a, k[14], 23, -35309556);
            a = hh(a, b, c, d, k[1], 4, -1530992060);
            d = hh(d, a, b, c, k[4], 11, 1272893353);
            c = hh(c, d, a, b, k[7], 16, -155497632);
            b = hh(b, c, d, a, k[10], 23, -1094730640);
            a = hh(a, b, c, d, k[13], 4, 681279174);
            d = hh(d, a, b, c, k[0], 11, -358537222);
            c = hh(c, d, a, b, k[3], 16, -722521979);
            b = hh(b, c, d, a, k[6], 23, 76029189);
            a = hh(a, b, c, d, k[9], 4, -640364487);
            d = hh(d, a, b, c, k[12], 11, -421815835);
            c = hh(c, d, a, b, k[15], 16, 530742520);
            b = hh(b, c, d, a, k[2], 23, -995338651);
    
            a = ii(a, b, c, d, k[0], 6, -198630844);
            d = ii(d, a, b, c, k[7], 10, 1126891415);
            c = ii(c, d, a, b, k[14], 15, -1416354905);
            b = ii(b, c, d, a, k[5], 21, -57434055);
            a = ii(a, b, c, d, k[12], 6, 1700485571);
            d = ii(d, a, b, c, k[3], 10, -1894986606);
            c = ii(c, d, a, b, k[10], 15, -1051523);
            b = ii(b, c, d, a, k[1], 21, -2054922799);
            a = ii(a, b, c, d, k[8], 6, 1873313359);
            d = ii(d, a, b, c, k[15], 10, -30611744);
            c = ii(c, d, a, b, k[6], 15, -1560198380);
            b = ii(b, c, d, a, k[13], 21, 1309151649);
            a = ii(a, b, c, d, k[4], 6, -145523070);
            d = ii(d, a, b, c, k[11], 10, -1120210379);
            c = ii(c, d, a, b, k[2], 15, 718787259);
            b = ii(b, c, d, a, k[9], 21, -343485551);
    
            x[0] = add32(a, x[0]);
            x[1] = add32(b, x[1]);
            x[2] = add32(c, x[2]);
            x[3] = add32(d, x[3]);
        },
    
        /* there needs to be support for Unicode here,
           * unless we pretend that we can redefine the MD-5
           * algorithm for multi-byte characters (perhaps
           * by adding every four 16-bit characters and
           * shortening the sum to 32 bits). Otherwise
           * I suggest performing MD-5 as if every character
           * was two bytes--e.g., 0040 0025 = @%--but then
           * how will an ordinary MD-5 sum be matched?
           * There is no way to standardize text to something
           * like UTF-8 before transformation; speed cost is
           * utterly prohibitive. The JavaScript standard
           * itself needs to look at this: it should start
           * providing access to strings as preformed UTF-8
           * 8-bit unsigned value arrays.
           */
        md5blk = function (s) {
            var md5blks = [],
                i; /* Andy King said do it this way. */
    
            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
            }
            return md5blks;
        },
    
        md5blk_array = function (a) {
            var md5blks = [],
                i; /* Andy King said do it this way. */
    
            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
            }
            return md5blks;
        },
    
        md51 = function (s) {
            var n = s.length,
                state = [1732584193, -271733879, -1732584194, 271733878],
                i,
                length,
                tail,
                tmp,
                lo,
                hi;
    
            for (i = 64; i <= n; i += 64) {
                md5cycle(state, md5blk(s.substring(i - 64, i)));
            }
            s = s.substring(i - 64);
            length = s.length;
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
            }
            tail[i >> 2] |= 0x80 << ((i % 4) << 3);
            if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
    
            // Beware that the final length might not fit in 32 bits so we take care of that
            tmp = n * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
    
            tail[14] = lo;
            tail[15] = hi;
    
            md5cycle(state, tail);
            return state;
        },
    
        md51_array = function (a) {
            var n = a.length,
                state = [1732584193, -271733879, -1732584194, 271733878],
                i,
                length,
                tail,
                tmp,
                lo,
                hi;
    
            for (i = 64; i <= n; i += 64) {
                md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
            }
    
            // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
            // containing the last element of the parent array if the sub array specified starts
            // beyond the length of the parent array - weird.
            // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
            a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);
    
            length = a.length;
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= a[i] << ((i % 4) << 3);
            }
    
            tail[i >> 2] |= 0x80 << ((i % 4) << 3);
            if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
    
            // Beware that the final length might not fit in 32 bits so we take care of that
            tmp = n * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
    
            tail[14] = lo;
            tail[15] = hi;
    
            md5cycle(state, tail);
    
            return state;
        },
    
        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],
    
        rhex = function (n) {
            var s = '',
                j;
            for (j = 0; j < 4; j += 1) {
                s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
            }
            return s;
        },
    
        hex = function (x) {
            var i;
            for (i = 0; i < x.length; i += 1) {
                x[i] = rhex(x[i]);
            }
            return x.join('');
        },
    
        md5 = function (s) {
            return hex(md51(s));
        },
    
    
    
        ////////////////////////////////////////////////////////////////////////////
    
        /**
         * SparkMD5 OOP implementation.
         *
         * Use this class to perform an incremental md5, otherwise use the
         * static methods instead.
         */
        SparkMD5 = function () {
            // call reset to init the instance
            this.reset();
        };
    
    
        // In some cases the fast add32 function cannot be used..
        if (md5('hello') !== '5d41402abc4b2a76b9719d911017c592') {
            add32 = function (x, y) {
                var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                    msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                return (msw << 16) | (lsw & 0xFFFF);
            };
        }
    
    
        /**
         * Appends a string.
         * A conversion will be applied if an utf8 string is detected.
         *
         * @param {String} str The string to be appended
         *
         * @return {SparkMD5} The instance itself
         */
        SparkMD5.prototype.append = function (str) {
            // converts the string to utf8 bytes if necessary
            if (/[\u0080-\uFFFF]/.test(str)) {
                str = unescape(encodeURIComponent(str));
            }
    
            // then append as binary
            this.appendBinary(str);
    
            return this;
        };
    
        /**
         * Appends a binary string.
         *
         * @param {String} contents The binary string to be appended
         *
         * @return {SparkMD5} The instance itself
         */
        SparkMD5.prototype.appendBinary = function (contents) {
            this._buff += contents;
            this._length += contents.length;
    
            var length = this._buff.length,
                i;
    
            for (i = 64; i <= length; i += 64) {
                md5cycle(this._state, md5blk(this._buff.substring(i - 64, i)));
            }
    
            this._buff = this._buff.substr(i - 64);
    
            return this;
        };
    
        /**
         * Finishes the incremental computation, reseting the internal state and
         * returning the result.
         * Use the raw parameter to obtain the raw result instead of the hex one.
         *
         * @param {Boolean} raw True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.prototype.end = function (raw) {
            var buff = this._buff,
                length = buff.length,
                i,
                tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ret;
    
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
            }
    
            this._finish(tail, length);
            ret = !!raw ? this._state : hex(this._state);
    
            this.reset();
    
            return ret;
        };
    
        /**
         * Finish the final calculation based on the tail.
         *
         * @param {Array}  tail   The tail (will be modified)
         * @param {Number} length The length of the remaining buffer
         */
        SparkMD5.prototype._finish = function (tail, length) {
            var i = length,
                tmp,
                lo,
                hi;
    
            tail[i >> 2] |= 0x80 << ((i % 4) << 3);
            if (i > 55) {
                md5cycle(this._state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
    
            // Do the final computation based on the tail and length
            // Beware that the final length may not fit in 32 bits so we take care of that
            tmp = this._length * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
    
            tail[14] = lo;
            tail[15] = hi;
            md5cycle(this._state, tail);
        };
    
        /**
         * Resets the internal state of the computation.
         *
         * @return {SparkMD5} The instance itself
         */
        SparkMD5.prototype.reset = function () {
            this._buff = "";
            this._length = 0;
            this._state = [1732584193, -271733879, -1732584194, 271733878];
    
            return this;
        };
    
        /**
         * Releases memory used by the incremental buffer and other aditional
         * resources. If you plan to use the instance again, use reset instead.
         */
        SparkMD5.prototype.destroy = function () {
            delete this._state;
            delete this._buff;
            delete this._length;
        };
    
    
        /**
         * Performs the md5 hash on a string.
         * A conversion will be applied if utf8 string is detected.
         *
         * @param {String}  str The string
         * @param {Boolean} raw True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.hash = function (str, raw) {
            // converts the string to utf8 bytes if necessary
            if (/[\u0080-\uFFFF]/.test(str)) {
                str = unescape(encodeURIComponent(str));
            }
    
            var hash = md51(str);
    
            return !!raw ? hash : hex(hash);
        };
    
        /**
         * Performs the md5 hash on a binary string.
         *
         * @param {String}  content The binary string
         * @param {Boolean} raw     True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.hashBinary = function (content, raw) {
            var hash = md51(content);
    
            return !!raw ? hash : hex(hash);
        };
    
        /**
         * SparkMD5 OOP implementation for array buffers.
         *
         * Use this class to perform an incremental md5 ONLY for array buffers.
         */
        SparkMD5.ArrayBuffer = function () {
            // call reset to init the instance
            this.reset();
        };
    
        ////////////////////////////////////////////////////////////////////////////
    
        /**
         * Appends an array buffer.
         *
         * @param {ArrayBuffer} arr The array to be appended
         *
         * @return {SparkMD5.ArrayBuffer} The instance itself
         */
        SparkMD5.ArrayBuffer.prototype.append = function (arr) {
            // TODO: we could avoid the concatenation here but the algorithm would be more complex
            //       if you find yourself needing extra performance, please make a PR.
            var buff = this._concatArrayBuffer(this._buff, arr),
                length = buff.length,
                i;
    
            this._length += arr.byteLength;
    
            for (i = 64; i <= length; i += 64) {
                md5cycle(this._state, md5blk_array(buff.subarray(i - 64, i)));
            }
    
            // Avoids IE10 weirdness (documented above)
            this._buff = (i - 64) < length ? buff.subarray(i - 64) : new Uint8Array(0);
    
            return this;
        };
    
        /**
         * Finishes the incremental computation, reseting the internal state and
         * returning the result.
         * Use the raw parameter to obtain the raw result instead of the hex one.
         *
         * @param {Boolean} raw True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.ArrayBuffer.prototype.end = function (raw) {
            var buff = this._buff,
                length = buff.length,
                tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                i,
                ret;
    
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= buff[i] << ((i % 4) << 3);
            }
    
            this._finish(tail, length);
            ret = !!raw ? this._state : hex(this._state);
    
            this.reset();
    
            return ret;
        };
    
        SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
    
        /**
         * Resets the internal state of the computation.
         *
         * @return {SparkMD5.ArrayBuffer} The instance itself
         */
        SparkMD5.ArrayBuffer.prototype.reset = function () {
            this._buff = new Uint8Array(0);
            this._length = 0;
            this._state = [1732584193, -271733879, -1732584194, 271733878];
    
            return this;
        };
    
        /**
         * Releases memory used by the incremental buffer and other aditional
         * resources. If you plan to use the instance again, use reset instead.
         */
        SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    
        /**
         * Concats two array buffers, returning a new one.
         *
         * @param  {ArrayBuffer} first  The first array buffer
         * @param  {ArrayBuffer} second The second array buffer
         *
         * @return {ArrayBuffer} The new array buffer
         */
        SparkMD5.ArrayBuffer.prototype._concatArrayBuffer = function (first, second) {
            var firstLength = first.length,
                result = new Uint8Array(firstLength + second.byteLength);
    
            result.set(first);
            result.set(new Uint8Array(second), firstLength);
    
            return result;
        };
    
        /**
         * Performs the md5 hash on an array buffer.
         *
         * @param {ArrayBuffer} arr The array buffer
         * @param {Boolean}     raw True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.ArrayBuffer.hash = function (arr, raw) {
            var hash = md51_array(new Uint8Array(arr));
    
            return !!raw ? hash : hex(hash);
        };
        
        return FlashRuntime.register( 'Md5', {
            init: function() {
                // do nothing.
            },
    
            loadFromBlob: function( file ) {
                var blob = file.getSource(),
                    chunkSize = 2 * 1024 * 1024,
                    chunks = Math.ceil( blob.size / chunkSize ),
                    chunk = 0,
                    owner = this.owner,
                    spark = new SparkMD5.ArrayBuffer(),
                    me = this,
                    blobSlice = blob.mozSlice || blob.webkitSlice || blob.slice,
                    loadNext, fr;
    
                fr = new FileReader();
    
                loadNext = function() {
                    var start, end;
    
                    start = chunk * chunkSize;
                    end = Math.min( start + chunkSize, blob.size );
    
                    fr.onload = function( e ) {
                        spark.append( e.target.result );
                        owner.trigger( 'progress', {
                            total: file.size,
                            loaded: end
                        });
                    };
    
                    fr.onloadend = function() {
                        fr.onloadend = fr.onload = null;
    
                        if ( ++chunk < chunks ) {
                            setTimeout( loadNext, 1 );
                        } else {
                            setTimeout(function(){
                                owner.trigger('load');
                                me.result = spark.end();
                                loadNext = file = blob = spark = null;
                                owner.trigger('complete');
                            }, 50 );
                        }
                    };
    
                    fr.readAsArrayBuffer( blobSlice.call( blob, start, end ) );
                };
    
                loadNext();
            },
    
            getResult: function() {
                return this.result;
            }
        });
    });
    /**
     * @fileOverview FlashRuntime
     */
    define('runtime/flash/runtime',[
        'base',
        'runtime/runtime',
        'runtime/compbase'
    ], function( Base, Runtime, CompBase ) {
    
        var $ = Base.$,
            type = 'flash',
            components = {};
    
    
        function getFlashVersion() {
            var version;
    
            try {
                version = navigator.plugins[ 'Shockwave Flash' ];
                version = version.description;
            } catch ( ex ) {
                try {
                    version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
                            .GetVariable('$version');
                } catch ( ex2 ) {
                    version = '0.0';
                }
            }
            version = version.match( /\d+/g );
            return parseFloat( version[ 0 ] + '.' + version[ 1 ], 10 );
        }
    
        function FlashRuntime() {
            var pool = {},
                clients = {},
                destroy = this.destroy,
                me = this,
                jsreciver = Base.guid('webuploader_');
    
            Runtime.apply( me, arguments );
            me.type = type;
    
    
            // 这个方法的调用者，实际上是RuntimeClient
            me.exec = function( comp, fn/*, args...*/ ) {
                var client = this,
                    uid = client.uid,
                    args = Base.slice( arguments, 2 ),
                    instance;
    
                clients[ uid ] = client;
    
                if ( components[ comp ] ) {
                    if ( !pool[ uid ] ) {
                        pool[ uid ] = new components[ comp ]( client, me );
                    }
    
                    instance = pool[ uid ];
    
                    if ( instance[ fn ] ) {
                        return instance[ fn ].apply( instance, args );
                    }
                }
    
                return me.flashExec.apply( client, arguments );
            };
    
            function handler( evt, obj ) {
                var type = evt.type || evt,
                    parts, uid;
    
                parts = type.split('::');
                uid = parts[ 0 ];
                type = parts[ 1 ];
    
                // console.log.apply( console, arguments );
    
                if ( type === 'Ready' && uid === me.uid ) {
                    me.trigger('ready');
                } else if ( clients[ uid ] ) {
                    clients[ uid ].trigger( type.toLowerCase(), evt, obj );
                }
    
                // Base.log( evt, obj );
            }
    
            // flash的接受器。
            window[ jsreciver ] = function() {
                var args = arguments;
    
                // 为了能捕获得到。
                setTimeout(function() {
                    handler.apply( null, args );
                }, 1 );
            };
    
            this.jsreciver = jsreciver;
    
            this.destroy = function() {
                // @todo 删除池子中的所有实例
                return destroy && destroy.apply( this, arguments );
            };
    
            this.flashExec = function( comp, fn ) {
                var flash = me.getFlash(),
                    args = Base.slice( arguments, 2 );
    
                return flash.exec( this.uid, comp, fn, args );
            };
    
            // @todo
        }
    
        Base.inherits( Runtime, {
            constructor: FlashRuntime,
    
            init: function() {
                var container = this.getContainer(),
                    opts = this.options,
                    html;
    
                // if not the minimal height, shims are not initialized
                // in older browsers (e.g FF3.6, IE6,7,8, Safari 4.0,5.0, etc)
                container.css({
                    position: 'absolute',
                    top: '-8px',
                    left: '-8px',
                    width: '9px',
                    height: '9px',
                    overflow: 'hidden'
                });
    
                // insert flash object
                html = '<object id="' + this.uid + '" type="application/' +
                        'x-shockwave-flash" data="' +  opts.swf + '" ';
    
                if ( Base.browser.ie ) {
                    html += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
                }
    
                html += 'width="100%" height="100%" style="outline:0">'  +
                    '<param name="movie" value="' + opts.swf + '" />' +
                    '<param name="flashvars" value="uid=' + this.uid +
                    '&jsreciver=' + this.jsreciver + '" />' +
                    '<param name="wmode" value="transparent" />' +
                    '<param name="allowscriptaccess" value="always" />' +
                '</object>';
    
                container.html( html );
            },
    
            getFlash: function() {
                if ( this._flash ) {
                    return this._flash;
                }
    
                this._flash = $( '#' + this.uid ).get( 0 );
                return this._flash;
            }
    
        });
    
        FlashRuntime.register = function( name, component ) {
            component = components[ name ] = Base.inherits( CompBase, $.extend({
    
                // @todo fix this later
                flashExec: function() {
                    var owner = this.owner,
                        runtime = this.getRuntime();
    
                    return runtime.flashExec.apply( owner, arguments );
                }
            }, component ) );
    
            return component;
        };
    
        if ( getFlashVersion() >= 11.4 ) {
            Runtime.addRuntime( type, FlashRuntime );
        }
    
        return FlashRuntime;
    });
    /**
     * @fileOverview FilePicker
     */
    define('runtime/flash/filepicker',[
        'base',
        'runtime/flash/runtime'
    ], function( Base, FlashRuntime ) {
        var $ = Base.$;
    
        return FlashRuntime.register( 'FilePicker', {
            init: function( opts ) {
                var copy = $.extend({}, opts ),
                    len, i;
    
                // 修复Flash再没有设置title的情况下无法弹出flash文件选择框的bug.
                len = copy.accept && copy.accept.length;
                for (  i = 0; i < len; i++ ) {
                    if ( !copy.accept[ i ].title ) {
                        copy.accept[ i ].title = 'Files';
                    }
                }
    
                delete copy.button;
                delete copy.id;
                delete copy.container;
    
                this.flashExec( 'FilePicker', 'init', copy );
            },
    
            destroy: function() {
                this.flashExec( 'FilePicker', 'destroy' );
            }
        });
    });
    /**
     * @fileOverview 图片压缩
     */
    define('runtime/flash/image',[
        'runtime/flash/runtime'
    ], function( FlashRuntime ) {
    
        return FlashRuntime.register( 'Image', {
            // init: function( options ) {
            //     var owner = this.owner;
    
            //     this.flashExec( 'Image', 'init', options );
            //     owner.on( 'load', function() {
            //         debugger;
            //     });
            // },
    
            loadFromBlob: function( blob ) {
                var owner = this.owner;
    
                owner.info() && this.flashExec( 'Image', 'info', owner.info() );
                owner.meta() && this.flashExec( 'Image', 'meta', owner.meta() );
    
                this.flashExec( 'Image', 'loadFromBlob', blob.uid );
            }
        });
    });
    /**
     * @fileOverview  Transport flash实现
     */
    define('runtime/flash/transport',[
        'base',
        'runtime/flash/runtime',
        'runtime/client'
    ], function( Base, FlashRuntime, RuntimeClient ) {
        var $ = Base.$;
    
        return FlashRuntime.register( 'Transport', {
            init: function() {
                this._status = 0;
                this._response = null;
                this._responseJson = null;
            },
    
            send: function() {
                var owner = this.owner,
                    opts = this.options,
                    xhr = this._initAjax(),
                    blob = owner._blob,
                    server = opts.server,
                    binary;
    
                xhr.connectRuntime( blob.ruid );
    
                if ( opts.sendAsBinary ) {
                    server += (/\?/.test( server ) ? '&' : '?') +
                            $.param( owner._formData );
    
                    binary = blob.uid;
                } else {
                    $.each( owner._formData, function( k, v ) {
                        xhr.exec( 'append', k, v );
                    });
    
                    xhr.exec( 'appendBlob', opts.fileVal, blob.uid,
                            opts.filename || owner._formData.name || '' );
                }
    
                this._setRequestHeader( xhr, opts.headers );
                xhr.exec( 'send', {
                    method: opts.method,
                    url: server,
                    forceURLStream: opts.forceURLStream,
                    mimeType: 'application/octet-stream'
                }, binary );
            },
    
            getStatus: function() {
                return this._status;
            },
    
            getResponse: function() {
                return this._response || '';
            },
    
            getResponseAsJson: function() {
                return this._responseJson;
            },
    
            abort: function() {
                var xhr = this._xhr;
    
                if ( xhr ) {
                    xhr.exec('abort');
                    xhr.destroy();
                    this._xhr = xhr = null;
                }
            },
    
            destroy: function() {
                this.abort();
            },
    
            _initAjax: function() {
                var me = this,
                    xhr = new RuntimeClient('XMLHttpRequest');
    
                xhr.on( 'uploadprogress progress', function( e ) {
                    var percent = e.loaded / e.total;
                    percent = Math.min( 1, Math.max( 0, percent ) );
                    return me.trigger( 'progress', percent );
                });
    
                xhr.on( 'load', function() {
                    var status = xhr.exec('getStatus'),
                        readBody = false,
                        err = '',
                        p;
    
                    xhr.off();
                    me._xhr = null;
    
                    if ( status >= 200 && status < 300 ) {
                        readBody = true;
                    } else if ( status >= 500 && status < 600 ) {
                        readBody = true;
                        err = 'server';
                    } else {
                        err = 'http';
                    }
    
                    if ( readBody ) {
                        me._response = xhr.exec('getResponse');
                        me._response = decodeURIComponent( me._response );
    
                        // flash 处理可能存在 bug, 没辙只能靠 js 了
                        // try {
                        //     me._responseJson = xhr.exec('getResponseAsJson');
                        // } catch ( error ) {
                            
                        p = window.JSON && window.JSON.parse || function( s ) {
                            try {
                                return new Function('return ' + s).call();
                            } catch ( err ) {
                                return {};
                            }
                        };
                        me._responseJson  = me._response ? p(me._response) : {};
                            
                        // }
                    }
                    
                    xhr.destroy();
                    xhr = null;
    
                    return err ? me.trigger( 'error', err ) : me.trigger('load');
                });
    
                xhr.on( 'error', function() {
                    xhr.off();
                    me._xhr = null;
                    me.trigger( 'error', 'http' );
                });
    
                me._xhr = xhr;
                return xhr;
            },
    
            _setRequestHeader: function( xhr, headers ) {
                $.each( headers, function( key, val ) {
                    xhr.exec( 'setRequestHeader', key, val );
                });
            }
        });
    });
    /**
     * @fileOverview Blob Html实现
     */
    define('runtime/flash/blob',[
        'runtime/flash/runtime',
        'lib/blob'
    ], function( FlashRuntime, Blob ) {
    
        return FlashRuntime.register( 'Blob', {
            slice: function( start, end ) {
                var blob = this.flashExec( 'Blob', 'slice', start, end );
    
                return new Blob( blob.uid, blob );
            }
        });
    });
    /**
     * @fileOverview  Md5 flash实现
     */
    define('runtime/flash/md5',[
        'runtime/flash/runtime'
    ], function( FlashRuntime ) {
        
        return FlashRuntime.register( 'Md5', {
            init: function() {
                // do nothing.
            },
    
            loadFromBlob: function( blob ) {
                return this.flashExec( 'Md5', 'loadFromBlob', blob.uid );
            }
        });
    });
    /**
     * @fileOverview 完全版本。
     */
    define('preset/all',[
        'base',
    
        // widgets
        'widgets/filednd',
        'widgets/filepaste',
        'widgets/filepicker',
        'widgets/image',
        'widgets/queue',
        'widgets/runtime',
        'widgets/upload',
        'widgets/validator',
        'widgets/md5',
    
        // runtimes
        // html5
        'runtime/html5/blob',
        'runtime/html5/dnd',
        'runtime/html5/filepaste',
        'runtime/html5/filepicker',
        'runtime/html5/imagemeta/exif',
        'runtime/html5/androidpatch',
        'runtime/html5/image',
        'runtime/html5/transport',
        'runtime/html5/md5',
    
        // flash
        'runtime/flash/filepicker',
        'runtime/flash/image',
        'runtime/flash/transport',
        'runtime/flash/blob',
        'runtime/flash/md5'
    ], function( Base ) {
        return Base;
    });
    /**
     * @fileOverview 日志组件，主要用来收集错误信息，可以帮助 webuploader 更好的定位问题和发展。
     *
     * 如果您不想要启用此功能，请在打包的时候去掉 log 模块。
     *
     * 或者可以在初始化的时候通过 options.disableWidgets 属性禁用。
     *
     * 如：
     * WebUploader.create({
     *     ...
     *
     *     disableWidgets: 'log',
     *
     *     ...
     * })
     */
    define('widgets/log',[
        'base',
        'uploader',
        'widgets/widget'
    ], function( Base, Uploader ) {
        var $ = Base.$,
            logUrl = ' http://static.tieba.baidu.com/tb/pms/img/st.gif??',
            product = (location.hostname || location.host || 'protected').toLowerCase(),
    
            // 只针对 baidu 内部产品用户做统计功能。
            enable = product && /baidu/i.exec(product),
            base;
    
        if (!enable) {
            return;
        }
    
        base = {
            dv: 3,
            master: 'webuploader',
            online: /test/.exec(product) ? 0 : 1,
            module: '',
            product: product,
            type: 0
        };
    
        function send(data) {
            var obj = $.extend({}, base, data),
                url = logUrl.replace(/^(.*)\?/, '$1' + $.param( obj )),
                image = new Image();
    
            image.src = url;
        }
    
        return Uploader.register({
            name: 'log',
    
            init: function() {
                var owner = this.owner,
                    count = 0,
                    size = 0;
    
                owner
                    .on('error', function(code) {
                        send({
                            type: 2,
                            c_error_code: code
                        });
                    })
                    .on('uploadError', function(file, reason) {
                        send({
                            type: 2,
                            c_error_code: 'UPLOAD_ERROR',
                            c_reason: '' + reason
                        });
                    })
                    .on('uploadComplete', function(file) {
                        count++;
                        size += file.size;
                    }).
                    on('uploadFinished', function() {
                        send({
                            c_count: count,
                            c_size: size
                        });
                        count = size = 0;
                    });
    
                send({
                    c_usage: 1
                });
            }
        });
    });
    /**
     * @fileOverview Uploader上传类
     */
    define('webuploader',[
        'preset/all',
        'widgets/log'
    ], function( preset ) {
        return preset;
    });
    return require('webuploader');
});
/*! artDialog v6.0.4 | https://github.com/aui/artDialog */
!function(){function a(b){var d=c[b],e="exports";return"object"==typeof d?d:(d[e]||(d[e]={},d[e]=d.call(d[e],a,d[e],d)||d[e]),d[e])}function b(a,b){c[a]=b}var c={};b("jquery",function(){return jQuery}),b("popup",function(a){function b(){this.destroyed=!1,this.__popup=c("<div />").css({display:"none",position:"absolute",outline:0}).attr("tabindex","-1").html(this.innerHTML).appendTo("body"),this.__backdrop=this.__mask=c("<div />").css({opacity:.7,background:"#000"}),this.node=this.__popup[0],this.backdrop=this.__backdrop[0],d++}var c=a("jquery"),d=0,e=!("minWidth"in c("html")[0].style),f=!e;return c.extend(b.prototype,{node:null,backdrop:null,fixed:!1,destroyed:!0,open:!1,returnValue:"",autofocus:!0,align:"bottom left",innerHTML:"",className:"ui-popup",show:function(a){if(this.destroyed)return this;var d=this.__popup,g=this.__backdrop;if(this.__activeElement=this.__getActive(),this.open=!0,this.follow=a||this.follow,!this.__ready){if(d.addClass(this.className).attr("role",this.modal?"alertdialog":"dialog").css("position",this.fixed?"fixed":"absolute"),e||c(window).on("resize",c.proxy(this.reset,this)),this.modal){var h={position:"fixed",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",userSelect:"none",zIndex:this.zIndex||b.zIndex};d.addClass(this.className+"-modal"),f||c.extend(h,{position:"absolute",width:c(window).width()+"px",height:c(document).height()+"px"}),g.css(h).attr({tabindex:"0"}).on("focus",c.proxy(this.focus,this)),this.__mask=g.clone(!0).attr("style","").insertAfter(d),g.addClass(this.className+"-backdrop").insertBefore(d),this.__ready=!0}d.html()||d.html(this.innerHTML)}return d.addClass(this.className+"-show").show(),g.show(),this.reset().focus(),this.__dispatchEvent("show"),this},showModal:function(){return this.modal=!0,this.show.apply(this,arguments)},close:function(a){return!this.destroyed&&this.open&&(void 0!==a&&(this.returnValue=a),this.__popup.hide().removeClass(this.className+"-show"),this.__backdrop.hide(),this.open=!1,this.blur(),this.__dispatchEvent("close")),this},remove:function(){if(this.destroyed)return this;this.__dispatchEvent("beforeremove"),b.current===this&&(b.current=null),this.__popup.remove(),this.__backdrop.remove(),this.__mask.remove(),e||c(window).off("resize",this.reset),this.__dispatchEvent("remove");for(var a in this)delete this[a];return this},reset:function(){var a=this.follow;return a?this.__follow(a):this.__center(),this.__dispatchEvent("reset"),this},focus:function(){var a=this.node,d=this.__popup,e=b.current,f=this.zIndex=b.zIndex++;if(e&&e!==this&&e.blur(!1),!c.contains(a,this.__getActive())){var g=d.find("[autofocus]")[0];!this._autofocus&&g?this._autofocus=!0:g=a,this.__focus(g)}return d.css("zIndex",f),b.current=this,d.addClass(this.className+"-focus"),this.__dispatchEvent("focus"),this},blur:function(){var a=this.__activeElement,b=arguments[0];return b!==!1&&this.__focus(a),this._autofocus=!1,this.__popup.removeClass(this.className+"-focus"),this.__dispatchEvent("blur"),this},addEventListener:function(a,b){return this.__getEventListener(a).push(b),this},removeEventListener:function(a,b){for(var c=this.__getEventListener(a),d=0;d<c.length;d++)b===c[d]&&c.splice(d--,1);return this},__getEventListener:function(a){var b=this.__listener;return b||(b=this.__listener={}),b[a]||(b[a]=[]),b[a]},__dispatchEvent:function(a){var b=this.__getEventListener(a);this["on"+a]&&this["on"+a]();for(var c=0;c<b.length;c++)b[c].call(this)},__focus:function(a){try{this.autofocus&&!/^iframe$/i.test(a.nodeName)&&a.focus()}catch(b){}},__getActive:function(){try{var a=document.activeElement,b=a.contentDocument,c=b&&b.activeElement||a;return c}catch(d){}},__center:function(){var a=this.__popup,b=c(window),d=c(document),e=this.fixed,f=e?0:d.scrollLeft(),g=e?0:d.scrollTop(),h=b.width(),i=b.height(),j=a.width(),k=a.height(),l=(h-j)/2+f,m=382*(i-k)/1e3+g,n=a[0].style;n.left=Math.max(parseInt(l),f)+"px",n.top=Math.max(parseInt(m),g)+"px"},__follow:function(a){var b=a.parentNode&&c(a),d=this.__popup;if(this.__followSkin&&d.removeClass(this.__followSkin),b){var e=b.offset();if(e.left*e.top<0)return this.__center()}var f=this,g=this.fixed,h=c(window),i=c(document),j=h.width(),k=h.height(),l=i.scrollLeft(),m=i.scrollTop(),n=d.width(),o=d.height(),p=b?b.outerWidth():0,q=b?b.outerHeight():0,r=this.__offset(a),s=r.left,t=r.top,u=g?s-l:s,v=g?t-m:t,w=g?0:l,x=g?0:m,y=w+j-n,z=x+k-o,A={},B=this.align.split(" "),C=this.className+"-",D={top:"bottom",bottom:"top",left:"right",right:"left"},E={top:"top",bottom:"top",left:"left",right:"left"},F=[{top:v-o,bottom:v+q,left:u-n,right:u+p},{top:v,bottom:v-o+q,left:u,right:u-n+p}],G={left:u+p/2-n/2,top:v+q/2-o/2},H={left:[w,y],top:[x,z]};c.each(B,function(a,b){F[a][b]>H[E[b]][1]&&(b=B[a]=D[b]),F[a][b]<H[E[b]][0]&&(B[a]=D[b])}),B[1]||(E[B[1]]="left"===E[B[0]]?"top":"left",F[1][B[1]]=G[E[B[1]]]),C+=B.join("-")+" "+this.className+"-follow",f.__followSkin=C,b&&d.addClass(C),A[E[B[0]]]=parseInt(F[0][B[0]]),A[E[B[1]]]=parseInt(F[1][B[1]]),d.css(A)},__offset:function(a){var b=a.parentNode,d=b?c(a).offset():{left:a.pageX,top:a.pageY};a=b?a:a.target;var e=a.ownerDocument,f=e.defaultView||e.parentWindow;if(f==window)return d;var g=f.frameElement,h=c(e),i=h.scrollLeft(),j=h.scrollTop(),k=c(g).offset(),l=k.left,m=k.top;return{left:d.left+l-i,top:d.top+m-j}}}),b.zIndex=1024,b.current=null,b}),b("dialog-config",{backdropBackground:"#000",backdropOpacity:.7,content:'<span class="ui-dialog-loading">Loading..</span>',title:"",statusbar:"",button:null,ok:null,cancel:null,okValue:"ok",cancelValue:"cancel",cancelDisplay:!0,width:"",height:"",padding:"",skin:"",quickClose:!1,cssUri:"../css/ui-dialog.css",innerHTML:'<div i="dialog" class="ui-dialog"><div class="ui-dialog-arrow-a"></div><div class="ui-dialog-arrow-b"></div><table class="ui-dialog-grid"><tr><td i="header" class="ui-dialog-header"><button i="close" class="ui-dialog-close">&#215;</button><div i="title" class="ui-dialog-title"></div></td></tr><tr><td i="body" class="ui-dialog-body"><div i="content" class="ui-dialog-content"></div></td></tr><tr><td i="footer" class="ui-dialog-footer"><div i="statusbar" class="ui-dialog-statusbar"></div><div i="button" class="ui-dialog-button"></div></td></tr></table></div>'}),b("dialog",function(a){var b=a("jquery"),c=a("popup"),d=a("dialog-config"),e=d.cssUri;if(e){var f=a[a.toUrl?"toUrl":"resolve"];f&&(e=f(e),e='<link rel="stylesheet" href="'+e+'" />',b("base")[0]?b("base").before(e):b("head").append(e))}var g=0,h=new Date-0,i=!("minWidth"in b("html")[0].style),j="createTouch"in document&&!("onmousemove"in document)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),k=!i&&!j,l=function(a,c,d){var e=a=a||{};("string"==typeof a||1===a.nodeType)&&(a={content:a,fixed:!j}),a=b.extend(!0,{},l.defaults,a),a.original=e;var f=a.id=a.id||h+g,i=l.get(f);return i?i.focus():(k||(a.fixed=!1),a.quickClose&&(a.modal=!0,a.backdropOpacity=0),b.isArray(a.button)||(a.button=[]),void 0!==d&&(a.cancel=d),a.cancel&&a.button.push({id:"cancel",value:a.cancelValue,callback:a.cancel,display:a.cancelDisplay}),void 0!==c&&(a.ok=c),a.ok&&a.button.push({id:"ok",value:a.okValue,callback:a.ok,autofocus:!0}),l.list[f]=new l.create(a))},m=function(){};m.prototype=c.prototype;var n=l.prototype=new m;return l.create=function(a){var d=this;b.extend(this,new c);var e=(a.original,b(this.node).html(a.innerHTML)),f=b(this.backdrop);return this.options=a,this._popup=e,b.each(a,function(a,b){"function"==typeof d[a]?d[a](b):d[a]=b}),a.zIndex&&(c.zIndex=a.zIndex),e.attr({"aria-labelledby":this._$("title").attr("id","title:"+this.id).attr("id"),"aria-describedby":this._$("content").attr("id","content:"+this.id).attr("id")}),this._$("close").css("display",this.cancel===!1?"none":"").attr("title",this.cancelValue).on("click",function(a){d._trigger("cancel"),a.preventDefault()}),this._$("dialog").addClass(this.skin),this._$("body").css("padding",this.padding),a.quickClose&&f.on("onmousedown"in document?"mousedown":"click",function(){return d._trigger("cancel"),!1}),this.addEventListener("show",function(){f.css({opacity:0,background:a.backdropBackground}).animate({opacity:a.backdropOpacity},150)}),this._esc=function(a){var b=a.target,e=b.nodeName,f=/^input|textarea$/i,g=c.current===d,h=a.keyCode;!g||f.test(e)&&"button"!==b.type||27===h&&d._trigger("cancel")},b(document).on("keydown",this._esc),this.addEventListener("remove",function(){b(document).off("keydown",this._esc),delete l.list[this.id]}),g++,l.oncreate(this),this},l.create.prototype=n,b.extend(n,{content:function(a){var c=this._$("content");return"object"==typeof a?(a=b(a),c.empty("").append(a.show()),this.addEventListener("remove",function(){b("body").append(a.hide())})):c.html(a),this.reset()},title:function(a){return this._$("title").text(a),this._$("header")[a?"show":"hide"](),this},width:function(a){return this._$("content").css("width",a),this.reset()},height:function(a){return this._$("content").css("height",a),this.reset()},button:function(a){a=a||[];var c=this,d="",e=0;return this.callbacks={},"string"==typeof a?(d=a,e++):b.each(a,function(a,f){var g=f.id=f.id||f.value,h="";c.callbacks[g]=f.callback,f.display===!1?h=' style="display:none"':e++,d+='<button type="button" i-id="'+g+'"'+h+(f.disabled?" disabled":"")+(f.autofocus?' autofocus class="ui-dialog-autofocus"':"")+">"+f.value+"</button>",c._$("button").on("click","[i-id="+g+"]",function(a){var d=b(this);d.attr("disabled")||c._trigger(g),a.preventDefault()})}),this._$("button").html(d),this._$("footer")[e?"show":"hide"](),this},statusbar:function(a){return this._$("statusbar").html(a)[a?"show":"hide"](),this},_$:function(a){return this._popup.find("[i="+a+"]")},_trigger:function(a){var b=this.callbacks[a];return"function"!=typeof b||b.call(this)!==!1?this.close().remove():this}}),l.oncreate=b.noop,l.getCurrent=function(){return c.current},l.get=function(a){return void 0===a?l.list:l.list[a]},l.list={},l.defaults=d,l}),window.dialog=a("dialog")}();/*! artDialog v6.0.4 | https://github.com/aui/artDialog */
!function(){function a(b){var d=c[b],e="exports";return"object"==typeof d?d:(d[e]||(d[e]={},d[e]=d.call(d[e],a,d[e],d)||d[e]),d[e])}function b(a,b){c[a]=b}var c={};b("jquery",function(){return jQuery}),b("popup",function(a){function b(){this.destroyed=!1,this.__popup=c("<div />").css({display:"none",position:"absolute",outline:0}).attr("tabindex","-1").html(this.innerHTML).appendTo("body"),this.__backdrop=this.__mask=c("<div />").css({opacity:.7,background:"#000"}),this.node=this.__popup[0],this.backdrop=this.__backdrop[0],d++}var c=a("jquery"),d=0,e=!("minWidth"in c("html")[0].style),f=!e;return c.extend(b.prototype,{node:null,backdrop:null,fixed:!1,destroyed:!0,open:!1,returnValue:"",autofocus:!0,align:"bottom left",innerHTML:"",className:"ui-popup",show:function(a){if(this.destroyed)return this;var d=this.__popup,g=this.__backdrop;if(this.__activeElement=this.__getActive(),this.open=!0,this.follow=a||this.follow,!this.__ready){if(d.addClass(this.className).attr("role",this.modal?"alertdialog":"dialog").css("position",this.fixed?"fixed":"absolute"),e||c(window).on("resize",c.proxy(this.reset,this)),this.modal){var h={position:"fixed",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",userSelect:"none",zIndex:this.zIndex||b.zIndex};d.addClass(this.className+"-modal"),f||c.extend(h,{position:"absolute",width:c(window).width()+"px",height:c(document).height()+"px"}),g.css(h).attr({tabindex:"0"}).on("focus",c.proxy(this.focus,this)),this.__mask=g.clone(!0).attr("style","").insertAfter(d),g.addClass(this.className+"-backdrop").insertBefore(d),this.__ready=!0}d.html()||d.html(this.innerHTML)}return d.addClass(this.className+"-show").show(),g.show(),this.reset().focus(),this.__dispatchEvent("show"),this},showModal:function(){return this.modal=!0,this.show.apply(this,arguments)},close:function(a){return!this.destroyed&&this.open&&(void 0!==a&&(this.returnValue=a),this.__popup.hide().removeClass(this.className+"-show"),this.__backdrop.hide(),this.open=!1,this.blur(),this.__dispatchEvent("close")),this},remove:function(){if(this.destroyed)return this;this.__dispatchEvent("beforeremove"),b.current===this&&(b.current=null),this.__popup.remove(),this.__backdrop.remove(),this.__mask.remove(),e||c(window).off("resize",this.reset),this.__dispatchEvent("remove");for(var a in this)delete this[a];return this},reset:function(){var a=this.follow;return a?this.__follow(a):this.__center(),this.__dispatchEvent("reset"),this},focus:function(){var a=this.node,d=this.__popup,e=b.current,f=this.zIndex=b.zIndex++;if(e&&e!==this&&e.blur(!1),!c.contains(a,this.__getActive())){var g=d.find("[autofocus]")[0];!this._autofocus&&g?this._autofocus=!0:g=a,this.__focus(g)}return d.css("zIndex",f),b.current=this,d.addClass(this.className+"-focus"),this.__dispatchEvent("focus"),this},blur:function(){var a=this.__activeElement,b=arguments[0];return b!==!1&&this.__focus(a),this._autofocus=!1,this.__popup.removeClass(this.className+"-focus"),this.__dispatchEvent("blur"),this},addEventListener:function(a,b){return this.__getEventListener(a).push(b),this},removeEventListener:function(a,b){for(var c=this.__getEventListener(a),d=0;d<c.length;d++)b===c[d]&&c.splice(d--,1);return this},__getEventListener:function(a){var b=this.__listener;return b||(b=this.__listener={}),b[a]||(b[a]=[]),b[a]},__dispatchEvent:function(a){var b=this.__getEventListener(a);this["on"+a]&&this["on"+a]();for(var c=0;c<b.length;c++)b[c].call(this)},__focus:function(a){try{this.autofocus&&!/^iframe$/i.test(a.nodeName)&&a.focus()}catch(b){}},__getActive:function(){try{var a=document.activeElement,b=a.contentDocument,c=b&&b.activeElement||a;return c}catch(d){}},__center:function(){var a=this.__popup,b=c(window),d=c(document),e=this.fixed,f=e?0:d.scrollLeft(),g=e?0:d.scrollTop(),h=b.width(),i=b.height(),j=a.width(),k=a.height(),l=(h-j)/2+f,m=382*(i-k)/1e3+g,n=a[0].style;n.left=Math.max(parseInt(l),f)+"px",n.top=Math.max(parseInt(m),g)+"px"},__follow:function(a){var b=a.parentNode&&c(a),d=this.__popup;if(this.__followSkin&&d.removeClass(this.__followSkin),b){var e=b.offset();if(e.left*e.top<0)return this.__center()}var f=this,g=this.fixed,h=c(window),i=c(document),j=h.width(),k=h.height(),l=i.scrollLeft(),m=i.scrollTop(),n=d.width(),o=d.height(),p=b?b.outerWidth():0,q=b?b.outerHeight():0,r=this.__offset(a),s=r.left,t=r.top,u=g?s-l:s,v=g?t-m:t,w=g?0:l,x=g?0:m,y=w+j-n,z=x+k-o,A={},B=this.align.split(" "),C=this.className+"-",D={top:"bottom",bottom:"top",left:"right",right:"left"},E={top:"top",bottom:"top",left:"left",right:"left"},F=[{top:v-o,bottom:v+q,left:u-n,right:u+p},{top:v,bottom:v-o+q,left:u,right:u-n+p}],G={left:u+p/2-n/2,top:v+q/2-o/2},H={left:[w,y],top:[x,z]};c.each(B,function(a,b){F[a][b]>H[E[b]][1]&&(b=B[a]=D[b]),F[a][b]<H[E[b]][0]&&(B[a]=D[b])}),B[1]||(E[B[1]]="left"===E[B[0]]?"top":"left",F[1][B[1]]=G[E[B[1]]]),C+=B.join("-")+" "+this.className+"-follow",f.__followSkin=C,b&&d.addClass(C),A[E[B[0]]]=parseInt(F[0][B[0]]),A[E[B[1]]]=parseInt(F[1][B[1]]),d.css(A)},__offset:function(a){var b=a.parentNode,d=b?c(a).offset():{left:a.pageX,top:a.pageY};a=b?a:a.target;var e=a.ownerDocument,f=e.defaultView||e.parentWindow;if(f==window)return d;var g=f.frameElement,h=c(e),i=h.scrollLeft(),j=h.scrollTop(),k=c(g).offset(),l=k.left,m=k.top;return{left:d.left+l-i,top:d.top+m-j}}}),b.zIndex=1024,b.current=null,b}),b("dialog-config",{backdropBackground:"#000",backdropOpacity:.7,content:'<span class="ui-dialog-loading">Loading..</span>',title:"",statusbar:"",button:null,ok:null,cancel:null,okValue:"ok",cancelValue:"cancel",cancelDisplay:!0,width:"",height:"",padding:"",skin:"",quickClose:!1,cssUri:"../css/ui-dialog.css",innerHTML:'<div i="dialog" class="ui-dialog"><div class="ui-dialog-arrow-a"></div><div class="ui-dialog-arrow-b"></div><table class="ui-dialog-grid"><tr><td i="header" class="ui-dialog-header"><button i="close" class="ui-dialog-close">&#215;</button><div i="title" class="ui-dialog-title"></div></td></tr><tr><td i="body" class="ui-dialog-body"><div i="content" class="ui-dialog-content"></div></td></tr><tr><td i="footer" class="ui-dialog-footer"><div i="statusbar" class="ui-dialog-statusbar"></div><div i="button" class="ui-dialog-button"></div></td></tr></table></div>'}),b("dialog",function(a){var b=a("jquery"),c=a("popup"),d=a("dialog-config"),e=d.cssUri;if(e){var f=a[a.toUrl?"toUrl":"resolve"];f&&(e=f(e),e='<link rel="stylesheet" href="'+e+'" />',b("base")[0]?b("base").before(e):b("head").append(e))}var g=0,h=new Date-0,i=!("minWidth"in b("html")[0].style),j="createTouch"in document&&!("onmousemove"in document)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),k=!i&&!j,l=function(a,c,d){var e=a=a||{};("string"==typeof a||1===a.nodeType)&&(a={content:a,fixed:!j}),a=b.extend(!0,{},l.defaults,a),a.original=e;var f=a.id=a.id||h+g,i=l.get(f);return i?i.focus():(k||(a.fixed=!1),a.quickClose&&(a.modal=!0,a.backdropOpacity=0),b.isArray(a.button)||(a.button=[]),void 0!==d&&(a.cancel=d),a.cancel&&a.button.push({id:"cancel",value:a.cancelValue,callback:a.cancel,display:a.cancelDisplay}),void 0!==c&&(a.ok=c),a.ok&&a.button.push({id:"ok",value:a.okValue,callback:a.ok,autofocus:!0}),l.list[f]=new l.create(a))},m=function(){};m.prototype=c.prototype;var n=l.prototype=new m;return l.create=function(a){var d=this;b.extend(this,new c);var e=(a.original,b(this.node).html(a.innerHTML)),f=b(this.backdrop);return this.options=a,this._popup=e,b.each(a,function(a,b){"function"==typeof d[a]?d[a](b):d[a]=b}),a.zIndex&&(c.zIndex=a.zIndex),e.attr({"aria-labelledby":this._$("title").attr("id","title:"+this.id).attr("id"),"aria-describedby":this._$("content").attr("id","content:"+this.id).attr("id")}),this._$("close").css("display",this.cancel===!1?"none":"").attr("title",this.cancelValue).on("click",function(a){d._trigger("cancel"),a.preventDefault()}),this._$("dialog").addClass(this.skin),this._$("body").css("padding",this.padding),a.quickClose&&f.on("onmousedown"in document?"mousedown":"click",function(){return d._trigger("cancel"),!1}),this.addEventListener("show",function(){f.css({opacity:0,background:a.backdropBackground}).animate({opacity:a.backdropOpacity},150)}),this._esc=function(a){var b=a.target,e=b.nodeName,f=/^input|textarea$/i,g=c.current===d,h=a.keyCode;!g||f.test(e)&&"button"!==b.type||27===h&&d._trigger("cancel")},b(document).on("keydown",this._esc),this.addEventListener("remove",function(){b(document).off("keydown",this._esc),delete l.list[this.id]}),g++,l.oncreate(this),this},l.create.prototype=n,b.extend(n,{content:function(a){var c=this._$("content");return"object"==typeof a?(a=b(a),c.empty("").append(a.show()),this.addEventListener("remove",function(){b("body").append(a.hide())})):c.html(a),this.reset()},title:function(a){return this._$("title").text(a),this._$("header")[a?"show":"hide"](),this},width:function(a){return this._$("content").css("width",a),this.reset()},height:function(a){return this._$("content").css("height",a),this.reset()},button:function(a){a=a||[];var c=this,d="",e=0;return this.callbacks={},"string"==typeof a?(d=a,e++):b.each(a,function(a,f){var g=f.id=f.id||f.value,h="";c.callbacks[g]=f.callback,f.display===!1?h=' style="display:none"':e++,d+='<button type="button" i-id="'+g+'"'+h+(f.disabled?" disabled":"")+(f.autofocus?' autofocus class="ui-dialog-autofocus"':"")+">"+f.value+"</button>",c._$("button").on("click","[i-id="+g+"]",function(a){var d=b(this);d.attr("disabled")||c._trigger(g),a.preventDefault()})}),this._$("button").html(d),this._$("footer")[e?"show":"hide"](),this},statusbar:function(a){return this._$("statusbar").html(a)[a?"show":"hide"](),this},_$:function(a){return this._popup.find("[i="+a+"]")},_trigger:function(a){var b=this.callbacks[a];return"function"!=typeof b||b.call(this)!==!1?this.close().remove():this}}),l.oncreate=b.noop,l.getCurrent=function(){return c.current},l.get=function(a){return void 0===a?l.list:l.list[a]},l.list={},l.defaults=d,l}),b("drag",function(a){var b=a("jquery"),c=b(window),d=b(document),e="createTouch"in document,f=document.documentElement,g=!("minWidth"in f.style),h=!g&&"onlosecapture"in f,i="setCapture"in f,j={start:e?"touchstart":"mousedown",over:e?"touchmove":"mousemove",end:e?"touchend":"mouseup"},k=e?function(a){return a.touches||(a=a.originalEvent.touches.item(0)),a}:function(a){return a},l=function(){this.start=b.proxy(this.start,this),this.over=b.proxy(this.over,this),this.end=b.proxy(this.end,this),this.onstart=this.onover=this.onend=b.noop};return l.types=j,l.prototype={start:function(a){return a=this.startFix(a),d.on(j.over,this.over).on(j.end,this.end),this.onstart(a),!1},over:function(a){return a=this.overFix(a),this.onover(a),!1},end:function(a){return a=this.endFix(a),d.off(j.over,this.over).off(j.end,this.end),this.onend(a),!1},startFix:function(a){return a=k(a),this.target=b(a.target),this.selectstart=function(){return!1},d.on("selectstart",this.selectstart).on("dblclick",this.end),h?this.target.on("losecapture",this.end):c.on("blur",this.end),i&&this.target[0].setCapture(),a},overFix:function(a){return a=k(a)},endFix:function(a){return a=k(a),d.off("selectstart",this.selectstart).off("dblclick",this.end),h?this.target.off("losecapture",this.end):c.off("blur",this.end),i&&this.target[0].releaseCapture(),a}},l.create=function(a,e){var f,g,h,i,j=b(a),k=new l,m=l.types.start,n=function(){},o=a.className.replace(/^\s|\s.*/g,"")+"-drag-start",p={onstart:n,onover:n,onend:n,off:function(){j.off(m,k.start)}};return k.onstart=function(b){var e="fixed"===j.css("position"),k=d.scrollLeft(),l=d.scrollTop(),m=j.width(),n=j.height();f=0,g=0,h=e?c.width()-m+f:d.width()-m,i=e?c.height()-n+g:d.height()-n;var q=j.offset(),r=this.startLeft=e?q.left-k:q.left,s=this.startTop=e?q.top-l:q.top;this.clientX=b.clientX,this.clientY=b.clientY,j.addClass(o),p.onstart.call(a,b,r,s)},k.onover=function(b){var c=b.clientX-this.clientX+this.startLeft,d=b.clientY-this.clientY+this.startTop,e=j[0].style;c=Math.max(f,Math.min(h,c)),d=Math.max(g,Math.min(i,d)),e.left=c+"px",e.top=d+"px",p.onover.call(a,b,c,d)},k.onend=function(b){var c=j.position(),d=c.left,e=c.top;j.removeClass(o),p.onend.call(a,b,d,e)},k.off=function(){j.off(m,k.start)},e?k.start(e):j.on(m,k.start),p},l}),b("dialog-plus",function(a){var b=a("jquery"),c=a("dialog"),d=a("drag");return c.oncreate=function(a){var c,e=a.options,f=e.original,g=e.url,h=e.oniframeload;if(g&&(this.padding=e.padding=0,c=b("<iframe />"),c.attr({src:g,name:a.id,width:"100%",height:"100%",allowtransparency:"yes",frameborder:"no",scrolling:"no"}).on("load",function(){var b;try{b=c[0].contentWindow.frameElement}catch(d){}b&&(e.width||a.width(c.contents().width()),e.height||a.height(c.contents().height())),h&&h.call(a)}),a.addEventListener("beforeremove",function(){c.attr("src","about:blank").remove()},!1),a.content(c[0]),a.iframeNode=c[0]),!(f instanceof Object))for(var i=function(){a.close().remove()},j=0;j<frames.length;j++)try{if(f instanceof frames[j].Object){b(frames[j]).one("unload",i);break}}catch(k){}b(a.node).on(d.types.start,"[i=title]",function(b){a.follow||(a.focus(),d.create(a.node,b))})},c.get=function(a){if(a&&a.frameElement){var b,d=a.frameElement,e=c.list;for(var f in e)if(b=e[f],b.node.getElementsByTagName("iframe")[0]===d)return b}else if(a)return c.list[a]},c}),window.dialog=a("dialog-plus")}();/**
 * ueditor完整配置项
 * 可以在这里配置整个编辑器的特性
 */
/**************************提示********************************
 * 所有被注释的配置项均为UEditor默认值。
 * 修改默认配置请首先确保已经完全明确该参数的真实用途。
 * 主要有两种修改方案，一种是取消此处注释，然后修改成对应参数；另一种是在实例化编辑器时传入对应参数。
 * 当升级编辑器时，可直接使用旧版配置文件替换新版配置文件,不用担心旧版配置文件中因缺少新功能所需的参数而导致脚本报错。
 **************************提示********************************/

(function () {

    /**
     * 编辑器资源文件根路径。它所表示的含义是：以编辑器实例化页面为当前路径，指向编辑器资源文件（即dialog等文件夹）的路径。
     * 鉴于很多同学在使用编辑器的时候出现的种种路径问题，此处强烈建议大家使用"相对于网站根目录的相对路径"进行配置。
     * "相对于网站根目录的相对路径"也就是以斜杠开头的形如"/myProject/ueditor/"这样的路径。
     * 如果站点中有多个不在同一层级的页面需要实例化编辑器，且引用了同一UEditor的时候，此处的URL可能不适用于每个页面的编辑器。
     * 因此，UEditor提供了针对不同页面的编辑器可单独配置的根路径，具体来说，在需要实例化编辑器的页面最顶部写上如下代码即可。当然，需要令此处的URL等于对应的配置。
     * window.UEDITOR_HOME_URL = "/xxxx/xxxx/";
     */
    var URL = '/Theme/assets/ueditor/'

    /**
     * 配置项主体。注意，此处所有涉及到路径的配置别遗漏URL变量。
     */
    window.UEDITOR_CONFIG = {
        //为编辑器实例添加一个路径，这个不能被注释
        UEDITOR_HOME_URL: URL

                // 服务器统一请求接口路径
        , serverUrl: '/Uedtior/index/&method=POST'

                //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的从新定义
        , toolbars: [[
                'fullscreen', 'source', '|', 'undo', 'redo', '|',
                'bold', 'italic', 'underline',  'strikethrough',  'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc',
                'fontsize', 'insertcode', '|',
                'indent', 'lineheight', '|',
                'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|',
                'link', 'unlink', '|',
                'simpleupload', 'insertimage', 
                'horizontal', 'inserttable', 'drafts'
            ]]
                //当鼠标放在工具栏上时显示的tooltip提示,留空支持自动多语言配置，否则以配置值为准
                //,labelMap:{
                //    'anchor':'', 'undo':''
                //}

                //语言配置项,默认是zh-cn。有需要的话也可以使用如下这样的方式来自动多语言切换，当然，前提条件是lang文件夹下存在对应的语言文件：
                //lang值也可以通过自动获取 (navigator.language||navigator.browserLanguage ||navigator.userLanguage).toLowerCase()
                //,lang:"zh-cn"
                //,langPath:URL +"lang/"

                //主题配置项,默认是default。有需要的话也可以使用如下这样的方式来自动多主题切换，当然，前提条件是themes文件夹下存在对应的主题文件：
                //现有如下皮肤:default
                //,theme:'default'
                //,themePath:URL +"themes/"

                //,zIndex : 900     //编辑器层级的基数,默认是900

                //针对getAllHtml方法，会在对应的head标签中增加该编码设置。
                //,charset:"utf-8"

                //若实例化编辑器的页面手动修改的domain，此处需要设置为true
                //,customDomain:false

                //常用配置项目
                //,isShow : true    //默认显示编辑器

                //,textarea:'editorValue' // 提交表单时，服务器获取编辑器提交内容的所用的参数，多实例时可以给容器name属性，会将name给定的值最为每个实例的键值，不用每次实例化的时候都设置这个值

                //,initialContent:'欢迎使用ueditor!'    //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子

                //,autoClearinitialContent:true //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了

                //,focus:false //初始化时，是否让编辑器获得焦点true或false

                //如果自定义，最好给p标签如下的行高，要不输入中文时，会有跳动感
                //,initialStyle:'p{line-height:1em}'//编辑器层级的基数,可以用来改变字体等

                //,iframeCssUrl: URL + '/themes/iframe.css' //给编辑器内部引入一个css文件

                //indentValue
                //首行缩进距离,默认是2em
                //,indentValue:'2em'

                //,initialFrameWidth:1000  //初始化编辑器宽度,默认1000
                //,initialFrameHeight:320  //初始化编辑器高度,默认320

                //,readonly : false //编辑器初始化结束后,编辑区域是否是只读的，默认是false

                //,autoClearEmptyNode : true //getContent时，是否删除空的inlineElement节点（包括嵌套的情况）

                //启用自动保存
                //,enableAutoSave: true
                //自动保存间隔时间， 单位ms
                //,saveInterval: 500

                //,fullscreen : false //是否开启初始化时即全屏，默认关闭

                //,imagePopup:true      //图片操作的浮层开关，默认打开

                //,autoSyncData:true //自动同步编辑器要提交的数据
                //,emotionLocalization:false //是否开启表情本地化，默认关闭。若要开启请确保emotion文件夹下包含官网提供的images表情文件夹

                //粘贴只保留标签，去除标签所有属性
                //,retainOnlyLabelPasted: false

                //,pasteplain:false  //是否默认为纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴
                //纯文本粘贴模式下的过滤规则
                //'filterTxtRules' : function(){
                //    function transP(node){
                //        node.tagName = 'p';
                //        node.setStyle();
                //    }
                //    return {
                //        //直接删除及其字节点内容
                //        '-' : 'script style object iframe embed input select',
                //        'p': {$:{}},
                //        'br':{$:{}},
                //        'div':{'$':{}},
                //        'li':{'$':{}},
                //        'caption':transP,
                //        'th':transP,
                //        'tr':transP,
                //        'h1':transP,'h2':transP,'h3':transP,'h4':transP,'h5':transP,'h6':transP,
                //        'td':function(node){
                //            //没有内容的td直接删掉
                //            var txt = !!node.innerText();
                //            if(txt){
                //                node.parentNode.insertAfter(UE.uNode.createText(' &nbsp; &nbsp;'),node);
                //            }
                //            node.parentNode.removeChild(node,node.innerText())
                //        }
                //    }
                //}()

                //,allHtmlEnabled:false //提交到后台的数据是否包含整个html字符串

                //insertorderedlist
                //有序列表的下拉配置,值留空时支持多语言自动识别，若配置值，则以此值为准
                //,'insertorderedlist':{
                //      //自定的样式
                //        'num':'1,2,3...',
                //        'num1':'1),2),3)...',
                //        'num2':'(1),(2),(3)...',
                //        'cn':'一,二,三....',
                //        'cn1':'一),二),三)....',
                //        'cn2':'(一),(二),(三)....',
                //     //系统自带
                //     'decimal' : '' ,         //'1,2,3...'
                //     'lower-alpha' : '' ,    // 'a,b,c...'
                //     'lower-roman' : '' ,    //'i,ii,iii...'
                //     'upper-alpha' : '' , lang   //'A,B,C'
                //     'upper-roman' : ''      //'I,II,III...'
                //}

                //insertunorderedlist
                //无序列表的下拉配置，值留空时支持多语言自动识别，若配置值，则以此值为准
                //,insertunorderedlist : { //自定的样式
                //    'dash' :'— 破折号', //-破折号
                //    'dot':' 。 小圆圈', //系统自带
                //    'circle' : '',  // '○ 小圆圈'
                //    'disc' : '',    // '● 小圆点'
                //    'square' : ''   //'■ 小方块'
                //}
                //,listDefaultPaddingLeft : '30'//默认的左边缩进的基数倍
                //,listiconpath : 'http://bs.baidu.com/listicon/'//自定义标号的路径
                //,maxListLevel : 3 //限制可以tab的级数, 设置-1为不限制

                //,autoTransWordToList:false  //禁止word中粘贴进来的列表自动变成列表标签

                //fontfamily
                //字体设置 label留空支持多语言自动切换，若配置，则以配置值为准
                //,'fontfamily':[
                //    { label:'',name:'songti',val:'宋体,SimSun'},
                //    { label:'',name:'kaiti',val:'楷体,楷体_GB2312, SimKai'},
                //    { label:'',name:'yahei',val:'微软雅黑,Microsoft YaHei'},
                //    { label:'',name:'heiti',val:'黑体, SimHei'},
                //    { label:'',name:'lishu',val:'隶书, SimLi'},
                //    { label:'',name:'andaleMono',val:'andale mono'},
                //    { label:'',name:'arial',val:'arial, helvetica,sans-serif'},
                //    { label:'',name:'arialBlack',val:'arial black,avant garde'},
                //    { label:'',name:'comicSansMs',val:'comic sans ms'},
                //    { label:'',name:'impact',val:'impact,chicago'},
                //    { label:'',name:'timesNewRoman',val:'times new roman'}
                //]

                //fontsize
                //字号
                //,'fontsize':[10, 11, 12, 14, 16, 18, 20, 24, 36]

                //paragraph
                //段落格式 值留空时支持多语言自动识别，若配置，则以配置值为准
                //,'paragraph':{'p':'', 'h1':'', 'h2':'', 'h3':'', 'h4':'', 'h5':'', 'h6':''}

                //rowspacingtop
                //段间距 值和显示的名字相同
                //,'rowspacingtop':['5', '10', '15', '20', '25']

                //rowspacingBottom
                //段间距 值和显示的名字相同
                //,'rowspacingbottom':['5', '10', '15', '20', '25']

                //lineheight
                //行内间距 值和显示的名字相同
                //,'lineheight':['1', '1.5','1.75','2', '3', '4', '5']

                //customstyle
                //自定义样式，不支持国际化，此处配置值即可最后显示值
                //block的元素是依据设置段落的逻辑设置的，inline的元素依据BIU的逻辑设置
                //尽量使用一些常用的标签
                //参数说明
                //tag 使用的标签名字
                //label 显示的名字也是用来标识不同类型的标识符，注意这个值每个要不同，
                //style 添加的样式
                //每一个对象就是一个自定义的样式
                //,'customstyle':[
                //    {tag:'h1', name:'tc', label:'', style:'border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;'},
                //    {tag:'h1', name:'tl',label:'', style:'border-bottom:#ccc 2px solid;padding:0 4px 0 0;margin:0 0 10px 0;'},
                //    {tag:'span',name:'im', label:'', style:'font-style:italic;font-weight:bold'},
                //    {tag:'span',name:'hi', label:'', style:'font-style:italic;font-weight:bold;color:rgb(51, 153, 204)'}
                //]

                //打开右键菜单功能
                //,enableContextMenu: true
                //右键菜单的内容，可以参考plugins/contextmenu.js里边的默认菜单的例子，label留空支持国际化，否则以此配置为准
                //,contextMenu:[
                //    {
                //        label:'',       //显示的名称
                //        cmdName:'selectall',//执行的command命令，当点击这个右键菜单时
                //        //exec可选，有了exec就会在点击时执行这个function，优先级高于cmdName
                //        exec:function () {
                //            //this是当前编辑器的实例
                //            //this.ui._dialogs['inserttableDialog'].open();
                //        }
                //    }
                //]

                //快捷菜单
                //,shortcutMenu:["fontfamily", "fontsize", "bold", "italic", "underline", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist"]

                //elementPathEnabled
                //是否启用元素路径，默认是显示
                //,elementPathEnabled : true

                //wordCount
                //,wordCount:true          //是否开启字数统计
                //,maximumWords:10000       //允许的最大字符数
                //字数统计提示，{#count}代表当前字数，{#leave}代表还可以输入多少字符数,留空支持多语言自动切换，否则按此配置显示
                //,wordCountMsg:''   //当前已输入 {#count} 个字符，您还可以输入{#leave} 个字符
                //超出字数限制提示  留空支持多语言自动切换，否则按此配置显示
                //,wordOverFlowMsg:''    //<span style="color:red;">你输入的字符个数已经超出最大允许值，服务器可能会拒绝保存！</span>

                //tab
                //点击tab键时移动的距离,tabSize倍数，tabNode什么字符做为单位
                //,tabSize:4
                //,tabNode:'&nbsp;'

                //removeFormat
                //清除格式时可以删除的标签和属性
                //removeForamtTags标签
                //,removeFormatTags:'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var'
                //removeFormatAttributes属性
                //,removeFormatAttributes:'class,style,lang,width,height,align,hspace,valign'

                //undo
                //可以最多回退的次数,默认20
                //,maxUndoCount:20
                //当输入的字符数超过该值时，保存一次现场
                //,maxInputCount:1

                //autoHeightEnabled
                // 是否自动长高,默认true
                //,autoHeightEnabled:true

                //scaleEnabled
                //是否可以拉伸长高,默认true(当开启时，自动长高失效)
                //,scaleEnabled:false
                //,minFrameWidth:800    //编辑器拖动时最小宽度,默认800
                //,minFrameHeight:220  //编辑器拖动时最小高度,默认220

                //autoFloatEnabled
                //是否保持toolbar的位置不动,默认true
                //,autoFloatEnabled:true
                //浮动时工具栏距离浏览器顶部的高度，用于某些具有固定头部的页面
                //,topOffset:30
                //编辑器底部距离工具栏高度(如果参数大于等于编辑器高度，则设置无效)
                //,toolbarTopOffset:400

                //pageBreakTag
                //分页标识符,默认是_ueditor_page_break_tag_
                //,pageBreakTag:'_ueditor_page_break_tag_'

                //autotypeset
                //自动排版参数
                //,autotypeset: {
                //    mergeEmptyline: true,           //合并空行
                //    removeClass: true,              //去掉冗余的class
                //    removeEmptyline: false,         //去掉空行
                //    textAlign:"left",               //段落的排版方式，可以是 left,right,center,justify 去掉这个属性表示不执行排版
                //    imageBlockLine: 'center',       //图片的浮动方式，独占一行剧中,左右浮动，默认: center,left,right,none 去掉这个属性表示不执行排版
                //    pasteFilter: false,             //根据规则过滤没事粘贴进来的内容
                //    clearFontSize: false,           //去掉所有的内嵌字号，使用编辑器默认的字号
                //    clearFontFamily: false,         //去掉所有的内嵌字体，使用编辑器默认的字体
                //    removeEmptyNode: false,         // 去掉空节点
                //    //可以去掉的标签
                //    removeTagNames: {标签名字:1},
                //    indent: false,                  // 行首缩进
                //    indentValue : '2em',            //行首缩进的大小
                //    bdc2sb: false,
                //    tobdc: false
                //}

                //tableDragable
                //表格是否可以拖拽
                //,tableDragable: true

                //,disabledTableInTable:true  //禁止表格嵌套

                //sourceEditor
                //源码的查看方式,codemirror 是代码高亮，textarea是文本框,默认是codemirror
                //注意默认codemirror只能在ie8+和非ie中使用
                //,sourceEditor:"codemirror"
                //如果sourceEditor是codemirror，还用配置一下两个参数
                //codeMirrorJsUrl js加载的路径，默认是 URL + "third-party/codemirror/codemirror.js"
                //,codeMirrorJsUrl:URL + "third-party/codemirror/codemirror.js"
                //codeMirrorCssUrl css加载的路径，默认是 URL + "third-party/codemirror/codemirror.css"
                //,codeMirrorCssUrl:URL + "third-party/codemirror/codemirror.css"
                //编辑器初始化完成后是否进入源码模式，默认为否。
                //,sourceEditorFirst:false

                //iframeUrlMap
                //dialog内容的路径 ～会被替换成URL,垓属性一旦打开，将覆盖所有的dialog的默认路径
                //,iframeUrlMap:{
                //    'anchor':'~/dialogs/anchor/anchor.html',
                //}

                //webAppKey 百度应用的APIkey，每个站长必须首先去百度官网注册一个key后方能正常使用app功能，注册介绍，http://app.baidu.com/static/cms/getapikey.html
                //, webAppKey: ""
    };

    function getUEBasePath(docUrl, confUrl) {

        return getBasePath(docUrl || self.document.URL || self.location.href, confUrl || getConfigFilePath());

    }

    function getConfigFilePath() {

        var configPath = document.getElementsByTagName('script');

        return configPath[ configPath.length - 1 ].src;

    }

    function getBasePath(docUrl, confUrl) {

        var basePath = confUrl;


        if (/^(\/|\\\\)/.test(confUrl)) {

            basePath = /^.+?\w(\/|\\\\)/.exec(docUrl)[0] + confUrl.replace(/^(\/|\\\\)/, '');

        } else if (!/^[a-z]+:/i.test(confUrl)) {

            docUrl = docUrl.split("#")[0].split("?")[0].replace(/[^\\\/]+$/, '');

            basePath = docUrl + "" + confUrl;

        }

        return optimizationPath(basePath);

    }

    function optimizationPath(path) {

        var protocol = /^[a-z]+:\/\//.exec(path)[ 0 ],
                tmp = null,
                res = [];

        path = path.replace(protocol, "").split("?")[0].split("#")[0];

        path = path.replace(/\\/g, '/').split(/\//);

        path[ path.length - 1 ] = "";

        while (path.length) {

            if ((tmp = path.shift()) === "..") {
                res.pop();
            } else if (tmp !== ".") {
                res.push(tmp);
            }

        }

        return protocol + res.join("/");

    }

    window.UE = {
        getUEBasePath: getUEBasePath
    };

})();
(function(){function W(d,c,b){var a;c=c.toLowerCase();return(a=d.__allListeners||b&&(d.__allListeners={}))&&(a[c]||b&&(a[c]=[]))}function X(d,c,b,a,e,h){a=a&&d[c];var g;for(!a&&(a=d[b]);!a&&(g=(g||d).parentNode);){if("BODY"==g.tagName||h&&!h(g))return null;a=g[b]}return a&&e&&!e(a)?X(a,c,b,!1,e):a}UEDITOR_CONFIG=window.UEDITOR_CONFIG||{};var s=window.baidu||{};window.baidu=s;window.UE=s.editor=window.UE||{};UE.plugins={};UE.commands={};UE.instants={};UE.I18N={};UE._customizeUI={};UE.version="1.4.3";
var L=UE.dom={},r=UE.browser=function(){var d=navigator.userAgent.toLowerCase(),c=window.opera,b={ie:/(msie\s|trident.*rv:)([\w.]+)/.test(d),opera:!!c&&c.version,webkit:-1<d.indexOf(" applewebkit/"),mac:-1<d.indexOf("macintosh"),quirks:"BackCompat"==document.compatMode};b.gecko="Gecko"==navigator.product&&!b.webkit&&!b.opera&&!b.ie;var a=0;if(b.ie){var a=d.match(/(?:msie\s([\w.]+))/),e=d.match(/(?:trident.*rv:([\w.]+))/),a=a&&e&&a[1]&&e[1]?Math.max(1*a[1],1*e[1]):a&&a[1]?1*a[1]:e&&e[1]?1*e[1]:0;b.ie11Compat=
11==document.documentMode;b.ie9Compat=9==document.documentMode;b.ie8=!!document.documentMode;b.ie8Compat=8==document.documentMode;b.ie7Compat=7==a&&!document.documentMode||7==document.documentMode;b.ie6Compat=7>a||b.quirks;b.ie9above=8<a;b.ie9below=9>a;b.ie11above=10<a;b.ie11below=11>a}b.gecko&&(e=d.match(/rv:([\d\.]+)/))&&(e=e[1].split("."),a=1E4*e[0]+100*(e[1]||0)+1*(e[2]||0));/chrome\/(\d+\.\d)/i.test(d)&&(b.chrome=+RegExp.$1);/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(d)&&!/chrome/i.test(d)&&
(b.safari=+(RegExp.$1||RegExp.$2));b.opera&&(a=parseFloat(c.version()));b.webkit&&(a=parseFloat(d.match(/ applewebkit\/(\d+)/)[1]));b.version=a;b.isCompatible=!b.mobile&&(b.ie&&6<=a||b.gecko&&10801<=a||b.opera&&9.5<=a||b.air&&1<=a||b.webkit&&522<=a||!1);return b}(),I=r.ie,ma=r.opera,p=UE.utils={each:function(d,c,b){if(null!=d)if(d.length===+d.length)for(var a=0,e=d.length;a<e;a++){if(!1===c.call(b,d[a],a,d))return!1}else for(a in d)if(d.hasOwnProperty(a)&&!1===c.call(b,d[a],a,d))return!1},makeInstance:function(d){var c=
new Function;c.prototype=d;d=new c;c.prototype=null;return d},extend:function(d,c,b){if(c)for(var a in c)b&&d.hasOwnProperty(a)||(d[a]=c[a]);return d},extend2:function(d){for(var c=arguments,b=1;b<c.length;b++){var a=c[b],e;for(e in a)d.hasOwnProperty(e)||(d[e]=a[e])}return d},inherits:function(d,c){var b=d.prototype,a=p.makeInstance(c.prototype);p.extend(a,b,!0);d.prototype=a;return a.constructor=d},bind:function(d,c){return function(){return d.apply(c,arguments)}},defer:function(d,c,b){var a;return function(){b&&
clearTimeout(a);a=setTimeout(d,c)}},indexOf:function(d,c,b){var a=-1;b=this.isNumber(b)?b:0;this.each(d,function(e,h){if(h>=b&&e===c)return a=h,!1});return a},removeItem:function(d,c){for(var b=0,a=d.length;b<a;b++)d[b]===c&&(d.splice(b,1),b--)},trim:function(d){return d.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g,"")},listToMap:function(d){if(!d)return{};d=p.isArray(d)?d:d.split(",");for(var c=0,b,a={};b=d[c++];)a[b.toUpperCase()]=a[b]=1;return a},unhtml:function(d,c){return d?d.replace(c||/[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g,
function(b,a){return a?b:{"<":"&lt;","&":"&amp;",'"':"&quot;",">":"&gt;","'":"&#39;"}[b]}):""},html:function(d){return d?d.replace(/&((g|l|quo)t|amp|#39|nbsp);/g,function(c){return{"&lt;":"<","&amp;":"&","&quot;":'"',"&gt;":">","&#39;":"'","&nbsp;":" "}[c]}):""},cssStyleToDomStyle:function(){var d=document.createElement("div").style,c={"float":void 0!=d.cssFloat?"cssFloat":void 0!=d.styleFloat?"styleFloat":"float"};return function(b){return c[b]||(c[b]=b.toLowerCase().replace(/-./g,function(a){return a.charAt(1).toUpperCase()}))}}(),
loadFile:function(){function d(b,a){try{for(var e=0,h;h=c[e++];)if(h.doc===b&&h.url==(a.src||a.href))return h}catch(g){return null}}var c=[];return function(b,a,e){var h=d(b,a);if(h)h.ready?e&&e():h.funs.push(e);else if(c.push({doc:b,url:a.src||a.href,funs:[e]}),!b.body){e=[];for(var g in a)"tag"!=g&&e.push(g+'="'+a[g]+'"');b.write("<"+a.tag+" "+e.join(" ")+" ></"+a.tag+">")}else if(!a.id||!b.getElementById(a.id)){var l=b.createElement(a.tag);delete a.tag;for(g in a)l.setAttribute(g,a[g]);l.onload=
l.onreadystatechange=function(){if(!this.readyState||/loaded|complete/.test(this.readyState)){h=d(b,a);if(0<h.funs.length){h.ready=1;for(var e;e=h.funs.pop();)e()}l.onload=l.onreadystatechange=null}};l.onerror=function(){throw Error("The load "+(a.href||a.src)+" fails,check the url settings of file ueditor.config.js ");};b.getElementsByTagName("head")[0].appendChild(l)}}}(),isEmptyObject:function(d){if(null==d)return!0;if(this.isArray(d)||this.isString(d))return 0===d.length;for(var c in d)if(d.hasOwnProperty(c))return!1;
return!0},fixColor:function(d,c){if(/color/i.test(d)&&/rgba?/.test(c)){var b=c.split(",");if(3<b.length)return"";c="#";for(var a=0,e;e=b[a++];)e=parseInt(e.replace(/[^\d]/gi,""),10).toString(16),c+=1==e.length?"0"+e:e;c=c.toUpperCase()}return c},optCss:function(d){function c(a,b){if(!a)return"";var g=a.top,c=a.bottom,k=a.left,d=a.right,n="";if(g&&k&&c&&d)n+=";"+b+":"+(g==c&&c==k&&k==d?g:g==c&&k==d?g+" "+k:k==d?g+" "+k+" "+c:g+" "+d+" "+c+" "+k)+";";else for(var f in a)n+=";"+b+"-"+f+":"+a[f]+";";
return n}var b,a;d=d.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi,function(e,c,g,l){if(1==l.split(" ").length)switch(c){case "padding":return!b&&(b={}),b[g]=l,"";case "margin":return!a&&(a={}),a[g]=l,"";case "border":return"initial"==l?"":e}return e});d+=c(b,"padding")+c(a,"margin");return d.replace(/^[ \n\r\t;]*|[ \n\r\t]*$/,"").replace(/;([ \n\r\t]+)|\1;/g,";").replace(/(&((l|g)t|quot|#39))?;{2,}/g,function(a,b){return b?b+";;":";"})},clone:function(d,c){var b;c=c||{};for(var a in d)d.hasOwnProperty(a)&&
(b=d[a],"object"==typeof b?(c[a]=p.isArray(b)?[]:{},p.clone(d[a],c[a])):c[a]=b);return c},transUnitToPx:function(d){if(!/(pt|cm)/.test(d))return d;var c;d.replace(/([\d.]+)(\w+)/,function(b,a,e){d=a;c=e});switch(c){case "cm":d=25*parseFloat(d);break;case "pt":d=Math.round(96*parseFloat(d)/72)}return d+(d?"px":"")},domReady:function(){function d(b){for(b.isReady=!0;b=c.pop();b());}var c=[];return function(b,a){a=a||window;var e=a.document;b&&c.push(b);"complete"===e.readyState?d(e):(e.isReady&&d(e),
r.ie&&11!=r.version?(function(){if(!e.isReady){try{e.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,0);return}d(e)}}(),a.attachEvent("onload",function(){d(e)})):(e.addEventListener("DOMContentLoaded",function(){e.removeEventListener("DOMContentLoaded",arguments.callee,!1);d(e)},!1),a.addEventListener("load",function(){d(e)},!1)))}}(),cssRule:r.ie&&11!=r.version?function(d,c,b){var a,e;if(void 0===c||c&&c.nodeType&&9==c.nodeType){if(b=c&&c.nodeType&&9==c.nodeType?c:b||document,
a=b.indexList||(b.indexList={}),e=a[d],void 0!==e)return b.styleSheets[e].cssText}else{b=b||document;a=b.indexList||(b.indexList={});e=a[d];if(""===c)return void 0!==e?(b.styleSheets[e].cssText="",delete a[d],!0):!1;void 0!==e?sheetStyle=b.styleSheets[e]:(sheetStyle=b.createStyleSheet("",e=b.styleSheets.length),a[d]=e);sheetStyle.cssText=c}}:function(d,c,b){var a;if(void 0===c||c&&c.nodeType&&9==c.nodeType)return b=c&&c.nodeType&&9==c.nodeType?c:b||document,(a=b.getElementById(d))?a.innerHTML:void 0;
b=b||document;a=b.getElementById(d);if(""===c)return a?(a.parentNode.removeChild(a),!0):!1;a?a.innerHTML=c:(a=b.createElement("style"),a.id=d,a.innerHTML=c,b.getElementsByTagName("head")[0].appendChild(a))},sort:function(d,c){c=c||function(a,e){return a.localeCompare(e)};for(var b=0,a=d.length;b<a;b++)for(var e=b,h=d.length;e<h;e++)if(0<c(d[b],d[e])){var g=d[b];d[b]=d[e];d[e]=g}return d},serializeParam:function(d){var c=[],b;for(b in d)if("method"!=b&&"timeout"!=b&&"async"!=b)if("function"!=(typeof d[b]).toLowerCase()&&
"object"!=(typeof d[b]).toLowerCase())c.push(encodeURIComponent(b)+"="+encodeURIComponent(d[b]));else if(p.isArray(d[b]))for(var a=0;a<d[b].length;a++)c.push(encodeURIComponent(b)+"[]="+encodeURIComponent(d[b][a]));return c.join("&")},formatUrl:function(d){d=d.replace(/&&/g,"&");d=d.replace(/\?&/g,"?");d=d.replace(/&$/g,"");d=d.replace(/&#/g,"#");return d=d.replace(/&+/g,"&")},isCrossDomainUrl:function(d){var c=document.createElement("a");c.href=d;r.ie&&(c.href=c.href);return!(c.protocol==location.protocol&&
c.hostname==location.hostname&&(c.port==location.port||"80"==c.port&&""==location.port||""==c.port&&"80"==location.port))},clearEmptyAttrs:function(d){for(var c in d)""===d[c]&&delete d[c];return d},str2json:function(d){return p.isString(d)?window.JSON?JSON.parse(d):(new Function("return "+p.trim(d||"")))():null},json2str:function(){if(window.JSON)return JSON.stringify;var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},c=function(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,
function(a){var b=d[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'},b=function(a){return 10>a?"0"+a:a};return function(a){switch(typeof a){case "undefined":return"undefined";case "number":return isFinite(a)?String(a):"null";case "string":return c(a);case "boolean":return String(a);default:if(null===a)return"null";if(p.isArray(a)){var e=["["],h=a.length,g,l,k;for(l=0;l<h;l++)switch(k=a[l],typeof k){case "undefined":case "function":case "unknown":break;
default:g&&e.push(","),e.push(p.json2str(k)),g=1}e.push("]");return e.join("")}if(p.isDate(a))return'"'+a.getFullYear()+"-"+b(a.getMonth()+1)+"-"+b(a.getDate())+"T"+b(a.getHours())+":"+b(a.getMinutes())+":"+b(a.getSeconds())+'"';g=["{"];l=p.json2str;for(h in a)if(Object.prototype.hasOwnProperty.call(a,h))switch(k=a[h],typeof k){case "undefined":case "unknown":case "function":break;default:e&&g.push(","),e=1,g.push(l(h)+":"+l(k))}g.push("}");return g.join("")}}}()};p.each("String Function Array Number RegExp Object Date".split(" "),
function(d){UE.utils["is"+d]=function(c){return Object.prototype.toString.apply(c)=="[object "+d+"]"}});var Z=UE.EventBase=function(){};Z.prototype={addListener:function(d,c){d=p.trim(d).split(/\s+/);for(var b=0,a;a=d[b++];)W(this,a,!0).push(c)},on:function(d,c){return this.addListener(d,c)},off:function(d,c){return this.removeListener(d,c)},trigger:function(){return this.fireEvent.apply(this,arguments)},removeListener:function(d,c){d=p.trim(d).split(/\s+/);for(var b=0,a;a=d[b++];)p.removeItem(W(this,
a)||[],c)},fireEvent:function(){for(var d=arguments[0],d=p.trim(d).split(" "),c=0,b;b=d[c++];){var a=W(this,b),e,h,g;if(a)for(g=a.length;g--;)if(a[g]){h=a[g].apply(this,arguments);if(!0===h)return h;void 0!==h&&(e=h)}if(h=this["on"+b.toLowerCase()])e=h.apply(this,arguments)}return e}};var v=L.dtd=function(){function d(a){for(var e in a)a[e.toUpperCase()]=a[e];return a}var c=p.extend2,b=d({isindex:1,fieldset:1}),a=d({input:1,button:1,select:1,textarea:1,label:1}),e=c(d({a:1}),a),h=c({iframe:1},e),
g=d({hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1}),l=d({ins:1,del:1,script:1,style:1}),k=c(d({b:1,acronym:1,bdo:1,"var":1,"#":1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1}),l),m=c(d({sub:1,img:1,embed:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1}),k),n=c(d({p:1}),m),a=c(d({iframe:1}),m,a),m=d({img:1,embed:1,noscript:1,br:1,kbd:1,center:1,
button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,"#":1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,"var":1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1}),f=c(d({a:0}),a),t=d({tr:1}),w=d({"#":1}),y=c(d({param:1}),m),u=c(d({form:1}),b,h,g,n),
C=d({li:1,ol:1,ul:1}),E=d({style:1,script:1}),G=d({base:1,link:1,meta:1,title:1}),E=c(G,E),A=d({head:1,body:1}),N=d({html:1}),r=d({address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1}),s=d({area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1});return d({$nonBodyContent:c(N,A,G),$block:r,$inline:f,$inlineWithA:c(d({a:1}),
f),$body:c(d({script:1,style:1}),r),$cdata:d({script:1,style:1}),$empty:s,$nonChild:d({iframe:1,textarea:1}),$listItem:d({dd:1,dt:1,li:1}),$list:d({ul:1,ol:1,dl:1}),$isNotEmpty:d({table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1}),$removeEmpty:d({a:1,abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,
u:1,"var":1}),$removeEmptyBlock:d({p:1,div:1}),$tableContent:d({caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1,table:1}),$notTransContent:d({pre:1,script:1,style:1,textarea:1}),html:A,head:E,style:w,script:w,body:u,base:{},link:{},meta:{},title:w,col:{},tr:d({td:1,th:1}),img:{},embed:{},colgroup:d({thead:1,col:1,tbody:1,tr:1,tfoot:1}),noscript:u,td:u,br:{},th:u,center:u,kbd:f,button:c(n,g),basefont:{},h5:f,h4:f,samp:f,h6:f,ol:C,h1:f,h3:f,option:w,h2:f,form:c(b,h,g,n),select:d({optgroup:1,
option:1}),font:f,ins:f,menu:C,abbr:f,label:f,table:d({thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1}),code:f,tfoot:t,cite:f,li:u,input:{},iframe:u,strong:f,textarea:w,noframes:u,big:f,small:f,span:d({"#":1,br:1,b:1,strong:1,u:1,i:1,em:1,sub:1,sup:1,strike:1,span:1}),hr:f,dt:f,sub:f,optgroup:d({option:1}),param:{},bdo:f,"var":f,div:u,object:y,sup:f,dd:u,strike:f,area:{},dir:C,map:c(d({area:1,form:1,p:1}),b,l,g),applet:y,dl:d({dt:1,dd:1}),del:f,isindex:{},fieldset:c(d({legend:1}),m),thead:t,
ul:C,acronym:f,b:f,a:c(d({a:1}),a),blockquote:c(d({td:1,tr:1,tbody:1,li:1}),u),caption:f,i:f,u:f,tbody:t,s:f,address:c(h,n),tt:f,legend:f,q:f,pre:c(k,e),p:c(d({a:1}),f),em:f,dfn:f})}(),ea=I&&9>r.version?{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder"}:{tabindex:"tabIndex",readonly:"readOnly"},oa=p.listToMap("-webkit-box -moz-box block list-item table table-row-group table-header-group table-footer-group table-row table-column-group table-column table-cell table-caption".split(" ")),
f=L.domUtils={NODE_ELEMENT:1,NODE_DOCUMENT:9,NODE_TEXT:3,NODE_COMMENT:8,NODE_DOCUMENT_FRAGMENT:11,POSITION_IDENTICAL:0,POSITION_DISCONNECTED:1,POSITION_FOLLOWING:2,POSITION_PRECEDING:4,POSITION_IS_CONTAINED:8,POSITION_CONTAINS:16,fillChar:I&&"6"==r.version?"\ufeff":"\u200b",keys:{8:1,46:1,16:1,17:1,18:1,37:1,38:1,39:1,40:1,13:1},getPosition:function(d,c){if(d===c)return 0;var b,a=[d],e=[c];for(b=d;b=b.parentNode;){if(b===c)return 10;a.push(b)}for(b=c;b=b.parentNode;){if(b===d)return 20;e.push(b)}a.reverse();
e.reverse();if(a[0]!==e[0])return 1;for(b=-1;b++,a[b]===e[b];);d=a[b];for(c=e[b];d=d.nextSibling;)if(d===c)return 4;return 2},getNodeIndex:function(d,c){for(var b=d,a=0;b=b.previousSibling;)c&&3==b.nodeType?b.nodeType!=b.nextSibling.nodeType&&a++:a++;return a},inDoc:function(d,c){return 10==f.getPosition(d,c)},findParent:function(d,c,b){if(d&&!f.isBody(d))for(d=b?d:d.parentNode;d;){if(!c||c(d)||f.isBody(d))return c&&!c(d)&&f.isBody(d)?null:d;d=d.parentNode}return null},findParentByTagName:function(d,
c,b,a){c=p.listToMap(p.isArray(c)?c:[c]);return f.findParent(d,function(e){return c[e.tagName]&&!(a&&a(e))},b)},findParents:function(d,c,b,a){for(c=c&&(b&&b(d)||!b)?[d]:[];d=f.findParent(d,b);)c.push(d);return a?c:c.reverse()},insertAfter:function(d,c){return d.nextSibling?d.parentNode.insertBefore(c,d.nextSibling):d.parentNode.appendChild(c)},remove:function(d,c){var b=d.parentNode,a;if(b){if(c&&d.hasChildNodes())for(;a=d.firstChild;)b.insertBefore(a,d);b.removeChild(d)}return d},getNextDomNode:function(d,
c,b,a){return X(d,"firstChild","nextSibling",c,b,a)},getPreDomNode:function(d,c,b,a){return X(d,"lastChild","previousSibling",c,b,a)},isBookmarkNode:function(d){return 1==d.nodeType&&d.id&&/^_baidu_bookmark_/i.test(d.id)},getWindow:function(d){d=d.ownerDocument||d;return d.defaultView||d.parentWindow},getCommonAncestor:function(d,c){if(d===c)return d;for(var b=[d],a=[c],e=d,h=-1;e=e.parentNode;){if(e===c)return e;b.push(e)}for(e=c;e=e.parentNode;){if(e===d)return e;a.push(e)}b.reverse();for(a.reverse();h++,
b[h]===a[h];);return 0==h?null:b[h-1]},clearEmptySibling:function(d,c,b){function a(a,b){for(var g;a&&!f.isBookmarkNode(a)&&(f.isEmptyInlineElement(a)||!RegExp("[^\t\n\r"+f.fillChar+"]").test(a.nodeValue));)g=a[b],f.remove(a),a=g}!c&&a(d.nextSibling,"nextSibling");!b&&a(d.previousSibling,"previousSibling")},split:function(d,c){var b=d.ownerDocument;if(r.ie&&c==d.nodeValue.length){var a=b.createTextNode("");return f.insertAfter(d,a)}a=d.splitText(c);r.ie8&&(b=b.createTextNode(""),f.insertAfter(a,b),
f.remove(b));return a},isWhitespace:function(d){return!RegExp("[^ \t\n\r"+f.fillChar+"]").test(d.nodeValue)},getXY:function(d){for(var c=0,b=0;d.offsetParent;)b+=d.offsetTop,c+=d.offsetLeft,d=d.offsetParent;return{x:c,y:b}},on:function(d,c,b){var a=p.isArray(c)?c:p.trim(c).split(/\s+/),e=a.length;if(e)for(;e--;)if(c=a[e],d.addEventListener)d.addEventListener(c,b,!1);else{b._d||(b._d={els:[]});var h=c+b.toString(),g=p.indexOf(b._d.els,d);b._d[h]&&-1!=g||(-1==g&&b._d.els.push(d),b._d[h]||(b._d[h]=function(a){return b.call(a.srcElement,
a||window.event)}),d.attachEvent("on"+c,b._d[h]))}d=null},un:function(d,c,b){var a=p.isArray(c)?c:p.trim(c).split(/\s+/),e=a.length;if(e)for(;e--;)if(c=a[e],d.removeEventListener)d.removeEventListener(c,b,!1);else{var h=c+b.toString();try{d.detachEvent("on"+c,b._d?b._d[h]:b)}catch(g){}b._d&&b._d[h]&&(c=p.indexOf(b._d.els,d),-1!=c&&b._d.els.splice(c,1),0==b._d.els.length&&delete b._d[h])}},isSameElement:function(d,c){if(d.tagName!=c.tagName)return!1;var b=d.attributes,a=c.attributes;if(!I&&b.length!=
a.length)return!1;for(var e,h,g=0,l=0,k=0;e=b[k++];){if("style"==e.nodeName)if(e.specified&&g++,f.isSameStyle(d,c))continue;else return!1;if(I)if(e.specified)g++,h=a.getNamedItem(e.nodeName);else continue;else h=c.attributes[e.nodeName];if(!h.specified||e.nodeValue!=h.nodeValue)return!1}if(I){for(k=0;h=a[k++];)h.specified&&l++;if(g!=l)return!1}return!0},isSameStyle:function(d,c){var b=d.style.cssText.replace(/( ?; ?)/g,";").replace(/( ?: ?)/g,":"),a=c.style.cssText.replace(/( ?; ?)/g,";").replace(/( ?: ?)/g,
":");if(r.opera){b=d.style;a=c.style;if(b.length!=a.length)return!1;for(var e in b)if(!/^(\d+|csstext)$/i.test(e)&&b[e]!=a[e])return!1;return!0}if(!b||!a)return b==a;b=b.split(";");a=a.split(";");if(b.length!=a.length)return!1;e=0;for(var h;h=b[e++];)if(-1==p.indexOf(a,h))return!1;return!0},isBlockElm:function(d){return 1==d.nodeType&&(v.$block[d.tagName]||oa[f.getComputedStyle(d,"display")])&&!v.$nonChild[d.tagName]},isBody:function(d){return d&&1==d.nodeType&&"body"==d.tagName.toLowerCase()},breakParent:function(d,
c){var b,a=d,e=d,h,g;do{a=a.parentNode;h?(b=a.cloneNode(!1),b.appendChild(h),h=b,b=a.cloneNode(!1),b.appendChild(g),g=b):(h=a.cloneNode(!1),g=h.cloneNode(!1));for(;b=e.previousSibling;)h.insertBefore(b,h.firstChild);for(;b=e.nextSibling;)g.appendChild(b);e=a}while(c!==a);b=c.parentNode;b.insertBefore(h,c);b.insertBefore(g,c);b.insertBefore(d,g);f.remove(c);return d},isEmptyInlineElement:function(d){if(1!=d.nodeType||!v.$removeEmpty[d.tagName])return 0;for(d=d.firstChild;d;){if(f.isBookmarkNode(d)||
1==d.nodeType&&!f.isEmptyInlineElement(d)||3==d.nodeType&&!f.isWhitespace(d))return 0;d=d.nextSibling}return 1},trimWhiteTextNode:function(d){function c(b){for(var a;(a=d[b])&&3==a.nodeType&&f.isWhitespace(a);)d.removeChild(a)}c("firstChild");c("lastChild")},mergeChild:function(d,c,b){c=f.getElementsByTagName(d,d.tagName.toLowerCase());for(var a=0,e;e=c[a++];)if(e.parentNode&&!f.isBookmarkNode(e))if("span"==e.tagName.toLowerCase()){if(d===e.parentNode&&(f.trimWhiteTextNode(d),1==d.childNodes.length)){d.style.cssText=
e.style.cssText+";"+d.style.cssText;f.remove(e,!0);continue}e.style.cssText=d.style.cssText+";"+e.style.cssText;if(b){var h=b.style;if(h)for(var h=h.split(";"),g=0,l;l=h[g++];)e.style[p.cssStyleToDomStyle(l.split(":")[0])]=l.split(":")[1]}f.isSameStyle(e,d)&&f.remove(e,!0)}else f.isSameElement(d,e)&&f.remove(e,!0)},getElementsByTagName:function(d,c,b){if(b&&p.isString(b)){var a=b;b=function(e){return f.hasClass(e,a)}}c=p.trim(c).replace(/[ ]{2,}/g," ").split(" ");for(var e=[],h=0,g;g=c[h++];){g=d.getElementsByTagName(g);
for(var l=0,k;k=g[l++];)b&&!b(k)||e.push(k)}return e},mergeToParent:function(d){for(var c=d.parentNode;c&&v.$removeEmpty[c.tagName];){if(c.tagName==d.tagName||"A"==c.tagName){f.trimWhiteTextNode(c);if("SPAN"==c.tagName&&!f.isSameStyle(c,d)||"A"==c.tagName&&"SPAN"==d.tagName)if(1<c.childNodes.length||c!==d.parentNode){d.style.cssText=c.style.cssText+";"+d.style.cssText;c=c.parentNode;continue}else c.style.cssText+=";"+d.style.cssText,"A"==c.tagName&&(c.style.textDecoration="underline");if("A"!=c.tagName){c===
d.parentNode&&f.remove(d,!0);break}}c=c.parentNode}},mergeSibling:function(d,c,b){function a(a,b,g){var c;if((c=g[a])&&!f.isBookmarkNode(c)&&1==c.nodeType&&f.isSameElement(g,c)){for(;c.firstChild;)"firstChild"==b?g.insertBefore(c.lastChild,g.firstChild):g.appendChild(c.firstChild);f.remove(c)}}!c&&a("previousSibling","firstChild",d);!b&&a("nextSibling","lastChild",d)},unSelectable:I&&r.ie9below||r.opera?function(d){d.onselectstart=function(){return!1};d.onclick=d.onkeyup=d.onkeydown=function(){return!1};
d.unselectable="on";d.setAttribute("unselectable","on");for(var c=0,b;b=d.all[c++];)switch(b.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:b.unselectable="on",d.setAttribute("unselectable","on")}}:function(d){d.style.MozUserSelect=d.style.webkitUserSelect=d.style.msUserSelect=d.style.KhtmlUserSelect="none"},removeAttributes:function(d,c){c=p.isArray(c)?c:p.trim(c).replace(/[ ]{2,}/g," ").split(" ");for(var b=0,a;a=c[b++];){a=ea[a]||a;switch(a){case "className":d[a]=
"";break;case "style":d.style.cssText="";var e=d.getAttributeNode("style");!r.ie&&e&&d.removeAttributeNode(e)}d.removeAttribute(a)}},createElement:function(d,c,b){return f.setAttributes(d.createElement(c),b)},setAttributes:function(d,c){for(var b in c)if(c.hasOwnProperty(b)){var a=c[b];switch(b){case "class":d.className=a;break;case "style":d.style.cssText=d.style.cssText+";"+a;break;case "innerHTML":d[b]=a;break;case "value":d.value=a;break;default:d.setAttribute(ea[b]||b,a)}}return d},getComputedStyle:function(d,
c){if(-1<"width height top left".indexOf(c))return d["offset"+c.replace(/^\w/,function(a){return a.toUpperCase()})]+"px";3==d.nodeType&&(d=d.parentNode);if(r.ie&&9>r.version&&"font-size"==c&&!d.style.fontSize&&!v.$empty[d.tagName]&&!v.$nonChild[d.tagName]){var b=d.ownerDocument.createElement("span");b.style.cssText="padding:0;border:0;font-family:simsun;";b.innerHTML=".";d.appendChild(b);var a=b.offsetHeight;d.removeChild(b);b=null;return a+"px"}try{b=f.getStyle(d,c)||(window.getComputedStyle?f.getWindow(d).getComputedStyle(d,
"").getPropertyValue(c):(d.currentStyle||d.style)[p.cssStyleToDomStyle(c)])}catch(e){return""}return p.transUnitToPx(p.fixColor(c,b))},removeClasses:function(d,c){c=p.isArray(c)?c:p.trim(c).replace(/[ ]{2,}/g," ").split(" ");for(var b=0,a,e=d.className;a=c[b++];)e=e.replace(RegExp("\\b"+a+"\\b"),"");(e=p.trim(e).replace(/[ ]{2,}/g," "))?d.className=e:f.removeAttributes(d,["class"])},addClass:function(d,c){if(d){c=p.trim(c).replace(/[ ]{2,}/g," ").split(" ");for(var b=0,a,e=d.className;a=c[b++];)RegExp("\\b"+
a+"\\b").test(e)||(e+=" "+a);d.className=p.trim(e)}},hasClass:function(d,c){if(p.isRegExp(c))return c.test(d.className);c=p.trim(c).replace(/[ ]{2,}/g," ").split(" ");for(var b=0,a,e=d.className;a=c[b++];)if(!RegExp("\\b"+a+"\\b","i").test(e))return!1;return b-1==c.length},preventDefault:function(d){d.preventDefault?d.preventDefault():d.returnValue=!1},removeStyle:function(d,c){r.ie?("color"==c&&(c="(^|;)"+c),d.style.cssText=d.style.cssText.replace(RegExp(c+"[^:]*:[^;]+;?","ig"),"")):d.style.removeProperty?
d.style.removeProperty(c):d.style.removeAttribute(p.cssStyleToDomStyle(c));d.style.cssText||f.removeAttributes(d,["style"])},getStyle:function(d,c){var b=d.style[p.cssStyleToDomStyle(c)];return p.fixColor(c,b)},setStyle:function(d,c,b){d.style[p.cssStyleToDomStyle(c)]=b;p.trim(d.style.cssText)||this.removeAttributes(d,"style")},setStyles:function(d,c){for(var b in c)c.hasOwnProperty(b)&&f.setStyle(d,b,c[b])},removeDirtyAttr:function(d){for(var c=0,b,a=d.getElementsByTagName("*");b=a[c++];)b.removeAttribute("_moz_dirty");
d.removeAttribute("_moz_dirty")},getChildCount:function(d,c){var b=0,a=d.firstChild;for(c=c||function(){return 1};a;)c(a)&&b++,a=a.nextSibling;return b},isEmptyNode:function(d){return!d.firstChild||0==f.getChildCount(d,function(c){return!f.isBr(c)&&!f.isBookmarkNode(c)&&!f.isWhitespace(c)})},clearSelectedArr:function(d){for(var c;c=d.pop();)f.removeAttributes(c,["class"])},scrollToView:function(d,c,b){var a=function(){var a=c.document,b="CSS1Compat"==a.compatMode;return{width:(b?a.documentElement.clientWidth:
a.body.clientWidth)||0,height:(b?a.documentElement.clientHeight:a.body.clientHeight)||0}}().height;b=-1*a+b+(d.offsetHeight||0);d=f.getXY(d);b+=d.y;d=function(a){if("pageXOffset"in a)return{x:a.pageXOffset||0,y:a.pageYOffset||0};a=a.document;return{x:a.documentElement.scrollLeft||a.body.scrollLeft||0,y:a.documentElement.scrollTop||a.body.scrollTop||0}}(c).y;(b>d||b<d-a)&&c.scrollTo(0,b+(0>b?-20:20))},isBr:function(d){return 1==d.nodeType&&"BR"==d.tagName},isFillChar:function(d,c){if(3!=d.nodeType)return!1;
var b=d.nodeValue;return c?RegExp("^"+f.fillChar).test(b):!b.replace(RegExp(f.fillChar,"g"),"").length},isStartInblock:function(d){d=d.cloneRange();var c=0,b=d.startContainer,a;if(1==b.nodeType&&b.childNodes[d.startOffset])for(var b=b.childNodes[d.startOffset],e=b.previousSibling;e&&f.isFillChar(e);)b=e,e=e.previousSibling;this.isFillChar(b,!0)&&1==d.startOffset&&(d.setStartBefore(b),b=d.startContainer);for(;b&&f.isFillChar(b);)a=b,b=b.previousSibling;a&&(d.setStartBefore(a),b=d.startContainer);for(1==
b.nodeType&&f.isEmptyNode(b)&&1==d.startOffset&&d.setStart(b,0).collapse(!0);!d.startOffset;){b=d.startContainer;if(f.isBlockElm(b)||f.isBody(b)){c=1;break}var e=d.startContainer.previousSibling,h;if(e){for(;e&&f.isFillChar(e);)h=e,e=e.previousSibling;h?d.setStartBefore(h):d.setStartBefore(d.startContainer)}else d.setStartBefore(d.startContainer)}return c&&!f.isBody(d.startContainer)?1:0},isEmptyBlock:function(d,c){if(1!=d.nodeType)return 0;c=c||RegExp("[ \u00a0\t\r\n"+f.fillChar+"]","g");if(0<d[r.ie?
"innerText":"textContent"].replace(c,"").length)return 0;for(var b in v.$isNotEmpty)if(d.getElementsByTagName(b).length)return 0;return 1},setViewportOffset:function(d,c){var b=parseInt(d.style.left)|0,a=parseInt(d.style.top)|0,e=d.getBoundingClientRect(),h=c.left-e.left,e=c.top-e.top;h&&(d.style.left=b+h+"px");e&&(d.style.top=a+e+"px")},fillNode:function(d,c){var b=r.ie?d.createTextNode(f.fillChar):d.createElement("br");c.innerHTML="";c.appendChild(b)},moveChild:function(d,c,b){for(;d.firstChild;)b&&
c.firstChild?c.insertBefore(d.lastChild,c.firstChild):c.appendChild(d.firstChild)},hasNoAttributes:function(d){return r.ie?/^<\w+\s*?>/.test(d.outerHTML):0==d.attributes.length},isCustomeNode:function(d){return 1==d.nodeType&&d.getAttribute("_ue_custom_node_")},isTagNode:function(d,c){return 1==d.nodeType&&RegExp("\\b"+d.tagName+"\\b","i").test(c)},filterNodeList:function(d,c,b){var a=[];if(!p.isFunction(c)){var e=c;c=function(a){return-1!=p.indexOf(p.isArray(e)?e:e.split(" "),a.tagName.toLowerCase())}}p.each(d,
function(e){c(e)&&a.push(e)});return 0==a.length?null:1!=a.length&&b?a:a[0]},isInNodeEndBoundary:function(d,c){var b=d.startContainer;if(3==b.nodeType&&d.startOffset!=b.nodeValue.length||1==b.nodeType&&d.startOffset!=b.childNodes.length)return 0;for(;b!==c;){if(b.nextSibling)return 0;b=b.parentNode}return 1},isBoundaryNode:function(d,c){for(var b;!f.isBody(d);)if(b=d,d=d.parentNode,b!==d[c])return!1;return!0},fillHtml:r.ie11below?"&nbsp;":"<br/>"},P=RegExp(f.fillChar,"g");(function(){function d(a){return!a.collapsed&&
1==a.startContainer.nodeType&&a.startContainer===a.endContainer&&1==a.endOffset-a.startOffset}function c(a,e,g,b){1==e.nodeType&&(v.$empty[e.tagName]||v.$nonChild[e.tagName])&&(g=f.getNodeIndex(e)+(a?0:1),e=e.parentNode);a?(b.startContainer=e,b.startOffset=g,b.endContainer||b.collapse(!0)):(b.endContainer=e,b.endOffset=g,b.startContainer||b.collapse(!1));b.collapsed=b.startContainer&&b.endContainer&&b.startContainer===b.endContainer&&b.startOffset==b.endOffset;return b}function b(a,e){var g=a.startContainer,
b=a.endContainer,c=a.startOffset,l=a.endOffset,k=a.document,h=k.createDocumentFragment(),d,p;1==g.nodeType&&(g=g.childNodes[c]||(d=g.appendChild(k.createTextNode(""))));1==b.nodeType&&(b=b.childNodes[l]||(p=b.appendChild(k.createTextNode(""))));if(g===b&&3==g.nodeType)return h.appendChild(k.createTextNode(g.substringData(c,l-c))),e&&(g.deleteData(c,l-c),a.collapse(!0)),h;for(var A,N,r=h,s=f.findParents(g,!0),v=f.findParents(b,!0),z=0;s[z]==v[z];)z++;for(var H=z,D;D=s[H];H++){A=D.nextSibling;D==g?
d||(3==a.startContainer.nodeType?(r.appendChild(k.createTextNode(g.nodeValue.slice(c))),e&&g.deleteData(c,g.nodeValue.length-c)):r.appendChild(e?g:g.cloneNode(!0))):(N=D.cloneNode(!1),r.appendChild(N));for(;A&&A!==b&&A!==v[H];)D=A.nextSibling,r.appendChild(e?A:A.cloneNode(!0)),A=D;r=N}r=h;s[z]||(r.appendChild(s[z-1].cloneNode(!1)),r=r.firstChild);for(H=z;c=v[H];H++){A=c.previousSibling;c==b?p||3!=a.endContainer.nodeType||(r.appendChild(k.createTextNode(b.substringData(0,l))),e&&b.deleteData(0,l)):
(N=c.cloneNode(!1),r.appendChild(N));if(H!=z||!s[z])for(;A&&A!==g;)c=A.previousSibling,r.insertBefore(e?A:A.cloneNode(!0),r.firstChild),A=c;r=N}e&&a.setStartBefore(v[z]?s[z]?v[z]:s[z-1]:v[z-1]).collapse(!0);d&&f.remove(d);p&&f.remove(p);return h}function a(a,g){try{if(l&&f.inDoc(l,a))if(l.nodeValue.replace(P,"").length)l.nodeValue=l.nodeValue.replace(P,"");else{var e=l.parentNode;for(f.remove(l);e&&f.isEmptyInlineElement(e)&&(r.safari?!(f.getPosition(e,g)&f.POSITION_CONTAINS):!e.contains(g));)l=e.parentNode,
f.remove(e),e=l}}catch(b){}}function e(a,e){var g;for(a=a[e];a&&f.isFillChar(a);)g=a[e],f.remove(a),a=g}var h=0,g=f.fillChar,l,k=L.Range=function(a){this.startContainer=this.startOffset=this.endContainer=this.endOffset=null;this.document=a;this.collapsed=!0};k.prototype={cloneContents:function(){return this.collapsed?null:b(this,0)},deleteContents:function(){var a;this.collapsed||b(this,1);r.webkit&&(a=this.startContainer,3!=a.nodeType||a.nodeValue.length||(this.setStartBefore(a).collapse(!0),f.remove(a)));
return this},extractContents:function(){return this.collapsed?null:b(this,2)},setStart:function(a,e){return c(!0,a,e,this)},setEnd:function(a,e){return c(!1,a,e,this)},setStartAfter:function(a){return this.setStart(a.parentNode,f.getNodeIndex(a)+1)},setStartBefore:function(a){return this.setStart(a.parentNode,f.getNodeIndex(a))},setEndAfter:function(a){return this.setEnd(a.parentNode,f.getNodeIndex(a)+1)},setEndBefore:function(a){return this.setEnd(a.parentNode,f.getNodeIndex(a))},setStartAtFirst:function(a){return this.setStart(a,
0)},setStartAtLast:function(a){return this.setStart(a,3==a.nodeType?a.nodeValue.length:a.childNodes.length)},setEndAtFirst:function(a){return this.setEnd(a,0)},setEndAtLast:function(a){return this.setEnd(a,3==a.nodeType?a.nodeValue.length:a.childNodes.length)},selectNode:function(a){return this.setStartBefore(a).setEndAfter(a)},selectNodeContents:function(a){return this.setStart(a,0).setEndAtLast(a)},cloneRange:function(){return(new k(this.document)).setStart(this.startContainer,this.startOffset).setEnd(this.endContainer,
this.endOffset)},collapse:function(a){a?(this.endContainer=this.startContainer,this.endOffset=this.startOffset):(this.startContainer=this.endContainer,this.startOffset=this.endOffset);this.collapsed=!0;return this},shrinkBoundary:function(a){function e(a){return 1==a.nodeType&&!f.isBookmarkNode(a)&&!v.$empty[a.tagName]&&!v.$nonChild[a.tagName]}for(var g,b=this.collapsed;1==this.startContainer.nodeType&&(g=this.startContainer.childNodes[this.startOffset])&&e(g);)this.setStart(g,0);if(b)return this.collapse(!0);
if(!a)for(;1==this.endContainer.nodeType&&0<this.endOffset&&(g=this.endContainer.childNodes[this.endOffset-1])&&e(g);)this.setEnd(g,g.childNodes.length);return this},getCommonAncestor:function(a,e){var g=this.startContainer,b=this.endContainer;return g===b?a&&d(this)&&(g=g.childNodes[this.startOffset],1==g.nodeType)?g:e&&3==g.nodeType?g.parentNode:g:f.getCommonAncestor(g,b)},trimBoundary:function(a){this.txtToElmBoundary();var g=this.startContainer,e=this.startOffset,b=this.collapsed,c=this.endContainer;
if(3==g.nodeType){if(0==e)this.setStartBefore(g);else if(e>=g.nodeValue.length)this.setStartAfter(g);else{var l=f.split(g,e);g===c?this.setEnd(l,this.endOffset-e):g.parentNode===c&&(this.endOffset+=1);this.setStartBefore(l)}if(b)return this.collapse(!0)}a||(e=this.endOffset,c=this.endContainer,3==c.nodeType&&(0==e?this.setEndBefore(c):(e<c.nodeValue.length&&f.split(c,e),this.setEndAfter(c))));return this},txtToElmBoundary:function(a){function g(a,e){var b=a[e+"Container"],c=a[e+"Offset"];if(3==b.nodeType)if(!c)a["set"+
e.replace(/(\w)/,function(a){return a.toUpperCase()})+"Before"](b);else if(c>=b.nodeValue.length)a["set"+e.replace(/(\w)/,function(a){return a.toUpperCase()})+"After"](b)}if(a||!this.collapsed)g(this,"start"),g(this,"end");return this},insertNode:function(a){var g=a,e=1;11==a.nodeType&&(g=a.firstChild,e=a.childNodes.length);this.trimBoundary(!0);var b=this.startContainer,c=b.childNodes[this.startOffset];c?b.insertBefore(a,c):b.appendChild(a);g.parentNode===this.endContainer&&(this.endOffset+=e);return this.setStartBefore(g)},
setCursor:function(a,g){return this.collapse(!a).select(g)},createBookmark:function(a,g){var e,b=this.document.createElement("span");b.style.cssText="display:none;line-height:0px;";b.appendChild(this.document.createTextNode("\u200d"));b.id="_baidu_bookmark_start_"+(g?"":h++);this.collapsed||(e=b.cloneNode(!0),e.id="_baidu_bookmark_end_"+(g?"":h++));this.insertNode(b);e&&this.collapse().insertNode(e).setEndBefore(e);this.setStartAfter(b);return{start:a?b.id:b,end:e?a?e.id:e:null,id:a}},moveToBookmark:function(a){var e=
a.id?this.document.getElementById(a.start):a.start;a=a.end&&a.id?this.document.getElementById(a.end):a.end;this.setStartBefore(e);f.remove(e);a?(this.setEndBefore(a),f.remove(a)):this.collapse(!0);return this},enlarge:function(a,e){var g=f.isBody,b,c,l=this.document.createTextNode("");if(a){c=this.startContainer;1==c.nodeType?c.childNodes[this.startOffset]?b=c=c.childNodes[this.startOffset]:(c.appendChild(l),b=c=l):b=c;for(;;){if(f.isBlockElm(c)){for(c=b;(b=c.previousSibling)&&!f.isBlockElm(b);)c=
b;this.setStartBefore(c);break}b=c;c=c.parentNode}c=this.endContainer;1==c.nodeType?((b=c.childNodes[this.endOffset])?c.insertBefore(l,b):c.appendChild(l),b=c=l):b=c;for(;;){if(f.isBlockElm(c)){for(c=b;(b=c.nextSibling)&&!f.isBlockElm(b);)c=b;this.setEndAfter(c);break}b=c;c=c.parentNode}l.parentNode===this.endContainer&&this.endOffset--;f.remove(l)}if(!this.collapsed){for(;!(0!=this.startOffset||e&&e(this.startContainer)||g(this.startContainer));)this.setStartBefore(this.startContainer);for(;!(this.endOffset!=
(1==this.endContainer.nodeType?this.endContainer.childNodes.length:this.endContainer.nodeValue.length)||e&&e(this.endContainer)||g(this.endContainer));)this.setEndAfter(this.endContainer)}return this},enlargeToBlockElm:function(a){for(;!f.isBlockElm(this.startContainer);)this.setStartBefore(this.startContainer);if(!a)for(;!f.isBlockElm(this.endContainer);)this.setEndAfter(this.endContainer);return this},adjustmentBoundary:function(){if(!this.collapsed){for(;!f.isBody(this.startContainer)&&this.startOffset==
this.startContainer[3==this.startContainer.nodeType?"nodeValue":"childNodes"].length&&this.startContainer[3==this.startContainer.nodeType?"nodeValue":"childNodes"].length;)this.setStartAfter(this.startContainer);for(;!f.isBody(this.endContainer)&&!this.endOffset&&this.endContainer[3==this.endContainer.nodeType?"nodeValue":"childNodes"].length;)this.setEndBefore(this.endContainer)}return this},applyInlineStyle:function(a,e,g){if(this.collapsed)return this;this.trimBoundary().enlarge(!1,function(a){return 1==
a.nodeType&&f.isBlockElm(a)}).adjustmentBoundary();for(var b=this.createBookmark(),c=b.end,l=function(a){return 1==a.nodeType?"br"!=a.tagName.toLowerCase():!f.isWhitespace(a)},k=f.getNextDomNode(b.start,!1,l),h,d,p=this.cloneRange();k&&f.getPosition(k,c)&f.POSITION_PRECEDING;)if(3==k.nodeType||v[a][k.tagName]){p.setStartBefore(k);for(h=k;h&&(3==h.nodeType||v[a][h.tagName])&&h!==c;)d=h,h=f.getNextDomNode(h,1==h.nodeType,null,function(e){return v[a][e.tagName]});var k=p.setEndAfter(d).extractContents(),
A;if(g&&0<g.length){var N;N=A=g[0].cloneNode(!1);for(var r=1,s;s=g[r++];)A.appendChild(s.cloneNode(!1)),A=A.firstChild}else A=p.document.createElement(a);e&&f.setAttributes(A,e);A.appendChild(k);p.insertNode(g?N:A);var T;"span"==a&&e.style&&/text\-decoration/.test(e.style)&&(T=f.findParentByTagName(A,"a",!0))?(f.setAttributes(T,e),f.remove(A,!0),A=T):(f.mergeSibling(A),f.clearEmptySibling(A));f.mergeChild(A,e);k=f.getNextDomNode(A,!1,l);f.mergeToParent(A);if(h===c)break}else k=f.getNextDomNode(k,
!0,l);return this.moveToBookmark(b)},removeInlineStyle:function(a){if(this.collapsed)return this;a=p.isArray(a)?a:[a];this.shrinkBoundary().adjustmentBoundary();for(var e=this.startContainer,g=this.endContainer;;){if(1==e.nodeType){if(-1<p.indexOf(a,e.tagName.toLowerCase()))break;if("body"==e.tagName.toLowerCase()){e=null;break}}e=e.parentNode}for(;;){if(1==g.nodeType){if(-1<p.indexOf(a,g.tagName.toLowerCase()))break;if("body"==g.tagName.toLowerCase()){g=null;break}}g=g.parentNode}var b=this.createBookmark(),
c,l;e&&(l=this.cloneRange().setEndBefore(b.start).setStartBefore(e),c=l.extractContents(),l.insertNode(c),f.clearEmptySibling(e,!0),e.parentNode.insertBefore(b.start,e));g&&(l=this.cloneRange().setStartAfter(b.end).setEndAfter(g),c=l.extractContents(),l.insertNode(c),f.clearEmptySibling(g,!1,!0),g.parentNode.insertBefore(b.end,g.nextSibling));for(e=f.getNextDomNode(b.start,!1,function(a){return 1==a.nodeType});e&&e!==b.end;)g=f.getNextDomNode(e,!0,function(a){return 1==a.nodeType}),-1<p.indexOf(a,
e.tagName.toLowerCase())&&f.remove(e,!0),e=g;return this.moveToBookmark(b)},getClosedNode:function(){var a;if(!this.collapsed){var e=this.cloneRange().adjustmentBoundary().shrinkBoundary();d(e)&&(e=e.startContainer.childNodes[e.startOffset])&&1==e.nodeType&&(v.$empty[e.tagName]||v.$nonChild[e.tagName])&&(a=e)}return a},select:r.ie?function(b,c){var k;this.collapsed||this.shrinkBoundary();var h=this.getClosedNode();if(h&&!c){try{k=this.document.body.createControlRange(),k.addElement(h),k.select()}catch(d){}return this}var h=
this.createBookmark(),y=h.start;k=this.document.body.createTextRange();k.moveToElementText(y);k.moveStart("character",1);if(!this.collapsed){var u=this.document.body.createTextRange(),y=h.end;u.moveToElementText(y);k.setEndPoint("EndToEnd",u)}else if(!b&&3!=this.startContainer.nodeType){var u=this.document.createTextNode(g),C=this.document.createElement("span");C.appendChild(this.document.createTextNode(g));y.parentNode.insertBefore(C,y);y.parentNode.insertBefore(u,y);a(this.document,u);l=u;e(C,"previousSibling");
e(y,"nextSibling");k.moveStart("character",-1);k.collapse(!0)}this.moveToBookmark(h);C&&f.remove(C);try{k.select()}catch(E){}return this}:function(b){function c(a){function e(b,g,c){3==b.nodeType&&b.nodeValue.length<g&&(a[c+"Offset"]=b.nodeValue.length)}e(a.startContainer,a.startOffset,"start");e(a.endContainer,a.endOffset,"end")}var k=f.getWindow(this.document),h=k.getSelection();r.gecko?this.document.body.focus():k.focus();if(h){h.removeAllRanges();this.collapsed&&!b&&(b=k=this.startContainer,1==
k.nodeType&&(b=k.childNodes[this.startOffset]),3==k.nodeType&&this.startOffset||(b?b.previousSibling&&3==b.previousSibling.nodeType:k.lastChild&&3==k.lastChild.nodeType)||(b=this.document.createTextNode(g),this.insertNode(b),a(this.document,b),e(b,"previousSibling"),e(b,"nextSibling"),l=b,this.setStart(b,r.webkit?1:0).collapse(!0)));k=this.document.createRange();if(this.collapsed&&r.opera&&1==this.startContainer.nodeType)if(b=this.startContainer.childNodes[this.startOffset]){for(;b&&f.isBlockElm(b);)if(1==
b.nodeType&&b.childNodes[0])b=b.childNodes[0];else break;b&&this.setStartBefore(b).collapse(!0)}else(b=this.startContainer.lastChild)&&f.isBr(b)&&this.setStartBefore(b).collapse(!0);c(this);k.setStart(this.startContainer,this.startOffset);k.setEnd(this.endContainer,this.endOffset);h.addRange(k)}return this},scrollToView:function(a,e){a=a?window:f.getWindow(this.document);var b=this.document.createElement("span");b.innerHTML="&nbsp;";this.cloneRange().insertNode(b);f.scrollToView(b,a,e);f.remove(b);
return this},inFillChar:function(){var a=this.startContainer;return this.collapsed&&3==a.nodeType&&a.nodeValue.replace(RegExp("^"+f.fillChar),"").length+1==a.nodeValue.length?!0:!1},createAddress:function(a,e){function b(a){for(var g=a?c.startContainer:c.endContainer,l=f.findParents(g,!0,function(a){return!f.isBody(a)}),k=[],h=0,d;d=l[h++];)k.push(f.getNodeIndex(d,e));l=0;if(e)if(3==g.nodeType){for(g=g.previousSibling;g&&3==g.nodeType;)l+=g.nodeValue.replace(P,"").length,g=g.previousSibling;l+=a?
c.startOffset:c.endOffset}else if(g=g.childNodes[a?c.startOffset:c.endOffset])l=f.getNodeIndex(g,e);else for(g=a?c.startContainer:c.endContainer,a=g.firstChild;a;)if(f.isFillChar(a))a=a.nextSibling;else if(l++,3==a.nodeType)for(;a&&3==a.nodeType;)a=a.nextSibling;else a=a.nextSibling;else l=a?f.isFillChar(g)?0:c.startOffset:c.endOffset;0>l&&(l=0);k.push(l);return k}var g={},c=this;g.startAddress=b(!0);a||(g.endAddress=c.collapsed?[].concat(g.startAddress):b());return g},moveToAddress:function(a,e){function g(a,
e){for(var c=b.document.body,l,k,h=0,d,f=a.length;h<f;h++)if(d=a[h],l=c,c=c.childNodes[d],!c){k=d;break}e?c?b.setStartBefore(c):b.setStart(l,k):c?b.setEndBefore(c):b.setEnd(l,k)}var b=this;g(a.startAddress,!0);!e&&a.endAddress&&g(a.endAddress);return b},equals:function(a){for(var e in this)if(this.hasOwnProperty(e)&&this[e]!==a[e])return!1;return!0},traversal:function(a,e){if(this.collapsed)return this;for(var b=this.createBookmark(),g=b.end,c=f.getNextDomNode(b.start,!1,e);c&&c!==g&&f.getPosition(c,
g)&f.POSITION_PRECEDING;){var l=f.getNextDomNode(c,!1,e);a(c);c=l}return this.moveToBookmark(b)}}})();(function(){function d(a,e){var b=f.getNodeIndex;a=a.duplicate();a.collapse(e);var g=a.parentElement();if(!g.hasChildNodes())return{container:g,offset:0};for(var c=g.children,k,d=a.duplicate(),n=0,q=c.length-1,t=-1;n<=q;){t=Math.floor((n+q)/2);k=c[t];d.moveToElementText(k);var w=d.compareEndPoints("StartToStart",a);if(0<w)q=t-1;else if(0>w)n=t+1;else return{container:g,offset:b(k)}}if(-1==t){d.moveToElementText(g);
d.setEndPoint("StartToStart",a);d=d.text.replace(/(\r\n|\r)/g,"\n").length;c=g.childNodes;if(!d)return k=c[c.length-1],{container:k,offset:k.nodeValue.length};for(b=c.length;0<d;)d-=c[--b].nodeValue.length;return{container:c[b],offset:-d}}d.collapse(0<w);d.setEndPoint(0<w?"StartToStart":"EndToStart",a);d=d.text.replace(/(\r\n|\r)/g,"\n").length;if(!d)return v.$empty[k.tagName]||v.$nonChild[k.tagName]?{container:g,offset:b(k)+(0<w?0:1)}:{container:k,offset:0<w?0:k.childNodes.length};for(;0<d;)try{c=
k,k=k[0<w?"previousSibling":"nextSibling"],d-=k.nodeValue.length}catch(y){return{container:g,offset:b(c)}}return{container:k,offset:0<w?-d:k.nodeValue.length+d}}function c(a,e){if(a.item)e.selectNode(a.item(0));else{var b=d(a,!0);e.setStart(b.container,b.offset);0!=a.compareEndPoints("StartToEnd",a)&&(b=d(a,!1),e.setEnd(b.container,b.offset))}return e}function b(a){var b;try{b=a.getNative().createRange()}catch(c){return null}var g=b.item?b.item(0):b.parentElement();return(g.ownerDocument||g)===a.document?
b:null}(L.Selection=function(a){var e=this;e.document=a;r.ie9below&&(a=f.getWindow(a).frameElement,f.on(a,"beforedeactivate",function(){e._bakIERange=e.getIERange()}),f.on(a,"activate",function(){try{!b(e)&&e._bakIERange&&e._bakIERange.select()}catch(a){}e._bakIERange=null}));a=a=null}).prototype={rangeInBody:function(a,b){var c=r.ie9below||b?a.item?a.item():a.parentElement():a.startContainer;return c===this.document.body||f.inDoc(c,this.document)},getNative:function(){var a=this.document;try{return a?
r.ie9below?a.selection:f.getWindow(a).getSelection():null}catch(b){return null}},getIERange:function(){var a=b(this);return!a&&this._bakIERange?this._bakIERange:a},cache:function(){this.clear();this._cachedRange=this.getRange();this._cachedStartElement=this.getStart();this._cachedStartElementPath=this.getStartElementPath()},getStartElementPath:function(){if(this._cachedStartElementPath)return this._cachedStartElementPath;var a=this.getStart();return a?f.findParents(a,!0,null,!0):[]},clear:function(){this._cachedStartElementPath=
this._cachedRange=this._cachedStartElement=null},isFocus:function(){try{if(r.ie9below){var a=b(this);return!(!a||!this.rangeInBody(a))}return!!this.getNative().rangeCount}catch(e){return!1}},getRange:function(){function a(a){for(var g=b.document.body.firstChild,c=a.collapsed;g&&g.firstChild;)a.setStart(g,0),g=g.firstChild;a.startContainer||a.setStart(b.document.body,0);c&&a.collapse(!0)}var b=this;if(null!=b._cachedRange)return this._cachedRange;var h=new s.editor.dom.Range(b.document);if(r.ie9below){var g=
b.getIERange();if(g)try{c(g,h)}catch(l){a(h)}else a(h)}else{var k=b.getNative();if(k&&k.rangeCount)g=k.getRangeAt(0),k=k.getRangeAt(k.rangeCount-1),h.setStart(g.startContainer,g.startOffset).setEnd(k.endContainer,k.endOffset),h.collapsed&&f.isBody(h.startContainer)&&!h.startOffset&&a(h);else{if(this._bakRange&&f.inDoc(this._bakRange.startContainer,this.document))return this._bakRange;a(h)}}return this._bakRange=h},getStart:function(){if(this._cachedStartElement)return this._cachedStartElement;var a=
r.ie9below?this.getIERange():this.getRange(),b,c;if(r.ie9below){if(!a)return this.document.body.firstChild;if(a.item)return a.item(0);b=a.duplicate();0<b.text.length&&b.moveStart("character",1);b.collapse(1);b=b.parentElement();for(c=a=a.parentElement();a=a.parentNode;)if(a==b){b=c;break}}else if(a.shrinkBoundary(),b=a.startContainer,1==b.nodeType&&b.hasChildNodes()&&(b=b.childNodes[Math.min(b.childNodes.length-1,a.startOffset)]),3==b.nodeType)return b.parentNode;return b},getText:function(){var a;
return this.isFocus()&&(a=this.getNative())?(a=r.ie9below?a.createRange():a.getRangeAt(0),r.ie9below?a.text:a.toString()):""},clearRange:function(){this.getNative()[r.ie9below?"empty":"removeAllRanges"]()}}})();(function(){function d(a,b){var c;if(b.textarea)if(p.isString(b.textarea))for(var e=0,h,d=f.getElementsByTagName(a,"textarea");h=d[e++];){if(h.id=="ueditor_textarea_"+b.options.textarea){c=h;break}}else c=b.textarea;c||(a.appendChild(c=f.createElement(document,"textarea",{name:b.options.textarea,
id:"ueditor_textarea_"+b.options.textarea,style:"display:none"})),b.textarea=c);!c.getAttribute("name")&&c.setAttribute("name",b.options.textarea);c.value=b.hasContents()?b.options.allHtmlEnabled?b.getAllHtml():b.getContent(null,null,!0):""}function c(a){for(var b in a)return b}function b(a){a.langIsReady=!0;a.fireEvent("langReady")}var a=0,e,h=UE.Editor=function(g){var e=this;e.uid=a++;Z.call(e);e.commands={};e.options=p.extend(p.clone(g||{}),UEDITOR_CONFIG,!0);e.shortcutkeys={};e.inputRules=[];
e.outputRules=[];e.setOpt(h.defaultOptions(e));e.loadServerConfig();p.isEmptyObject(UE.I18N)?p.loadFile(document,{src:e.options.langPath+e.options.lang+"/"+e.options.lang+".js",tag:"script",type:"text/javascript",defer:"defer"},function(){UE.plugin.load(e);b(e)}):(e.options.lang=c(UE.I18N),UE.plugin.load(e),b(e));UE.instants["ueditorInstant"+e.uid]=e};h.prototype={registerCommand:function(a,b){this.commands[a]=b},ready:function(a){a&&(this.isReady?a.apply(this):this.addListener("ready",a))},setOpt:function(a,
b){var e={};p.isString(a)?e[a]=b:e=a;p.extend(this.options,e,!0)},getOpt:function(a){return this.options[a]},destroy:function(){this.fireEvent("destroy");var a=this.container.parentNode,b=this.textarea;b?b.style.display="":(b=document.createElement("textarea"),a.parentNode.insertBefore(b,a));b.style.width=this.iframe.offsetWidth+"px";b.style.height=this.iframe.offsetHeight+"px";b.value=this.getContent();b.id=this.key;a.innerHTML="";f.remove(a);var a=this.key,e;for(e in this)this.hasOwnProperty(e)&&
delete this[e];UE.delEditor(a)},render:function(a){var b=this.options;p.isString(a)&&(a=document.getElementById(a));if(a){b.minFrameWidth=b.initialFrameWidth?b.initialFrameWidth:b.initialFrameWidth=a.offsetWidth;b.initialFrameHeight?b.minFrameHeight=b.initialFrameHeight:b.initialFrameHeight=b.minFrameHeight=a.offsetHeight;a.style.width=/%$/.test(b.initialFrameWidth)?"100%":b.initialFrameWidth-parseInt(f.getComputedStyle(a,"padding-left"))-parseInt(f.getComputedStyle(a,"padding-right"))+"px";a.style.height=
/%$/.test(b.initialFrameHeight)?"100%":b.initialFrameHeight-parseInt(f.getComputedStyle(a,"padding-top"))-parseInt(f.getComputedStyle(a,"padding-bottom"))+"px";a.style.zIndex=b.zIndex;var e=(I&&9>r.version?"":"<!DOCTYPE html>")+"<html xmlns='http://www.w3.org/1999/xhtml' class='view' ><head><style type='text/css'>.view{padding:0;word-wrap:break-word;cursor:text;height:90%;}\nbody{margin:8px !important;font-family:sans-serif;font-size:16px;}p{margin:5px 0;}</style>"+(b.iframeCssUrl?"<link rel='stylesheet' type='text/css' href='"+
p.unhtml(b.iframeCssUrl)+"'/>":"")+(b.initialStyle?"<style>"+b.initialStyle+"</style>":"")+"</head><body class='view' ></body><script type='text/javascript' "+(I?"defer='defer'":"")+" id='_initialScript'>setTimeout(function(){editor = window.parent.UE.instants['ueditorInstant"+this.uid+"'];editor._setup(document);},0);var _tmpScript = document.getElementById('_initialScript');_tmpScript.parentNode.removeChild(_tmpScript);\x3c/script></html>";a.appendChild(f.createElement(document,"iframe",{id:"ueditor_"+
this.uid,width:"100%",height:"100%",frameborder:"0",src:"javascript:void(function(){document.open();"+(b.customDomain&&document.domain!=location.hostname?'document.domain="'+document.domain+'";':"")+'document.write("'+e+'");document.close();}())'}));a.style.overflow="hidden";setTimeout(function(){/%$/.test(b.initialFrameWidth)&&(b.minFrameWidth=b.initialFrameWidth=a.offsetWidth);/%$/.test(b.initialFrameHeight)&&(b.minFrameHeight=b.initialFrameHeight=a.offsetHeight,a.style.height=b.initialFrameHeight+
"px")})}},_setup:function(a){var b=this,e=b.options;I?(a.body.disabled=!0,a.body.contentEditable=!0,a.body.disabled=!1):a.body.contentEditable=!0;a.body.spellcheck=!1;b.document=a;b.window=a.defaultView||a.parentWindow;b.iframe=b.window.frameElement;b.body=a.body;b.selection=new L.Selection(a);var c;r.gecko&&(c=this.selection.getNative())&&c.removeAllRanges();this._initEvents();for(var h=this.iframe.parentNode;!f.isBody(h);h=h.parentNode)if("FORM"==h.tagName){b.form=h;if(b.options.autoSyncData)f.on(b.window,
"blur",function(){d(h,b)});else f.on(h,"submit",function(){d(this,b)});break}if(e.initialContent)if(e.autoClearinitialContent){var q=b.execCommand;b.execCommand=function(){b.fireEvent("firstBeforeExecCommand");return q.apply(b,arguments)};this._setDefaultContent(e.initialContent)}else this.setContent(e.initialContent,!1,!0);f.isEmptyNode(b.body)&&(b.body.innerHTML="<p>"+(r.ie?"":"<br/>")+"</p>");e.focus&&setTimeout(function(){b.focus(b.options.focusInEnd);!b.options.autoClearinitialContent&&b._selectionChange()},
0);b.container||(b.container=this.iframe.parentNode);e.fullscreen&&b.ui&&b.ui.setFullScreen(!0);try{b.document.execCommand("2D-position",!1,!1)}catch(t){}try{b.document.execCommand("enableInlineTableEditing",!1,!1)}catch(w){}try{b.document.execCommand("enableObjectResizing",!1,!1)}catch(y){}b._bindshortcutKeys();b.isReady=1;b.fireEvent("ready");e.onready&&e.onready.call(b);if(!r.ie9below)f.on(b.window,["blur","focus"],function(a){if("blur"==a.type){b._bakRange=b.selection.getRange();try{b._bakNativeRange=
b.selection.getNative().getRangeAt(0),b.selection.getNative().removeAllRanges()}catch(e){b._bakNativeRange=null}}else try{b._bakRange&&b._bakRange.select()}catch(c){}});r.gecko&&10902>=r.version&&(b.body.contentEditable=!1,setTimeout(function(){b.body.contentEditable=!0},100),setInterval(function(){b.body.style.height=b.iframe.offsetHeight-20+"px"},100));!e.isShow&&b.setHide();e.readonly&&b.setDisabled()},sync:function(a){(a=a?document.getElementById(a):f.findParent(this.iframe.parentNode,function(a){return"FORM"==
a.tagName},!0))&&d(a,this)},setHeight:function(a,b){a!==parseInt(this.iframe.parentNode.style.height)&&(this.iframe.parentNode.style.height=a+"px");!b&&(this.options.minFrameHeight=this.options.initialFrameHeight=a);this.body.style.height=a+"px";!b&&this.trigger("setHeight")},addshortcutkey:function(a,b){var e={};b?e[a]=b:e=a;p.extend(this.shortcutkeys,e)},_bindshortcutKeys:function(){var a=this,b=this.shortcutkeys;a.addListener("keydown",function(e,c){var h=c.keyCode||c.which,d;for(d in b)for(var t=
b[d].split(","),w=0,y;y=t[w++];){y=y.split(":");var u=y[0];y=y[1];if(/^(ctrl)(\+shift)?\+(\d+)$/.test(u.toLowerCase())||/^(\d+)$/.test(u))if("ctrl"==RegExp.$1&&(c.ctrlKey||c.metaKey)&&(""!=RegExp.$2?c[RegExp.$2.slice(1)+"Key"]:1)&&h==RegExp.$3||h==RegExp.$1)-1!=a.queryCommandState(d,y)&&a.execCommand(d,y),f.preventDefault(c)}})},getContent:function(a,b,e,c,h){a&&p.isFunction(a)&&(b=a,a="");if(b?!b():!this.hasContents())return"";this.fireEvent("beforegetcontent");b=UE.htmlparser(this.body.innerHTML,
c);this.filterOutputRule(b);this.fireEvent("aftergetcontent",a,b);return b.toHtml(h)},getAllHtml:function(){var a=[];this.fireEvent("getAllHtml",a);if(r.ie&&8<r.version){var b="";p.each(this.document.styleSheets,function(a){b+=a.href?'<link rel="stylesheet" type="text/css" href="'+a.href+'" />':"<style>"+a.cssText+"</style>"});p.each(this.document.getElementsByTagName("script"),function(a){b+=a.outerHTML})}return"<html><head>"+(this.options.charset?'<meta http-equiv="Content-Type" content="text/html; charset='+
this.options.charset+'"/>':"")+(b||this.document.getElementsByTagName("head")[0].innerHTML)+a.join("\n")+"</head><body "+(I&&9>r.version?'class="view"':"")+">"+this.getContent(null,null,!0)+"</body></html>"},getPlainTxt:function(){var a=RegExp(f.fillChar,"g"),b=this.body.innerHTML.replace(/[\n\r]/g,""),b=b.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi,"\n").replace(/<br\/?>/gi,"\n").replace(/<[^>/]+>/g,"").replace(/(\n)?<\/([^>]+)>/g,function(a,b,e){return v.$block[e]?"\n":b?b:""});return b.replace(a,
"").replace(/\u00a0/g," ").replace(/&nbsp;/g," ")},getContentTxt:function(){return this.body[r.ie?"innerText":"textContent"].replace(RegExp(f.fillChar,"g"),"").replace(/\u00a0/g," ")},setContent:function(a,b,e){this.fireEvent("beforesetcontent",a);a=UE.htmlparser(a);this.filterInputRule(a);a=a.toHtml();this.body.innerHTML=(b?this.body.innerHTML:"")+a;if("p"==this.options.enterTag)if(b=this.body.firstChild,!b||1==b.nodeType&&(v.$cdata[b.tagName]||"DIV"==b.tagName&&b.getAttribute("cdata_tag")||f.isCustomeNode(b))&&
b===this.body.lastChild)this.body.innerHTML="<p>"+(r.ie?"&nbsp;":"<br/>")+"</p>"+this.body.innerHTML;else for(var c=this.document.createElement("p");b;){for(;b&&(3==b.nodeType||1==b.nodeType&&v.p[b.tagName]&&!v.$cdata[b.tagName]);)a=b.nextSibling,c.appendChild(b),b=a;if(c.firstChild)if(b)b.parentNode.insertBefore(c,b),c=this.document.createElement("p");else{this.body.appendChild(c);break}b=b.nextSibling}this.fireEvent("aftersetcontent");this.fireEvent("contentchange");!e&&this._selectionChange();
this._bakRange=this._bakIERange=this._bakNativeRange=null;var h;r.gecko&&(h=this.selection.getNative())&&h.removeAllRanges();this.options.autoSyncData&&this.form&&d(this.form,this)},focus:function(a){try{var b=this.selection.getRange();if(a){var e=this.body.lastChild;e&&1==e.nodeType&&!v.$empty[e.tagName]&&(f.isEmptyBlock(e)?b.setStartAtFirst(e):b.setStartAtLast(e),b.collapse(!0));b.setCursor(!0)}else!b.collapsed&&f.isBody(b.startContainer)&&0==b.startOffset&&(e=this.body.firstChild)&&1==e.nodeType&&
!v.$empty[e.tagName]&&b.setStartAtFirst(e).collapse(!0),b.select(!0);this.fireEvent("focus selectionchange")}catch(c){}},isFocus:function(){return this.selection.isFocus()},blur:function(){var a=this.selection.getNative();if(a.empty&&r.ie){var b=document.body.createTextRange();b.moveToElementText(document.body);b.collapse(!0);b.select();a.empty()}else a.removeAllRanges()},_initEvents:function(){var a=this,b=a.document,e=a.window;a._proxyDomEvent=p.bind(a._proxyDomEvent,a);f.on(b,"click contextmenu mousedown keydown keyup keypress mouseup mouseover mouseout selectstart".split(" "),
a._proxyDomEvent);f.on(e,["focus","blur"],a._proxyDomEvent);f.on(a.body,"drop",function(b){r.gecko&&b.stopPropagation&&b.stopPropagation();a.fireEvent("contentchange")});f.on(b,["mouseup","keydown"],function(b){"keydown"==b.type&&(b.ctrlKey||b.metaKey||b.shiftKey||b.altKey)||2!=b.button&&a._selectionChange(250,b)})},_proxyDomEvent:function(a){return!1===this.fireEvent("before"+a.type.replace(/^on/,"").toLowerCase())||!1===this.fireEvent(a.type.replace(/^on/,""),a)?!1:this.fireEvent("after"+a.type.replace(/^on/,
"").toLowerCase())},_selectionChange:function(a,b){var c=this,h=!1,d,f;r.ie&&9>r.version&&b&&"mouseup"==b.type&&!this.selection.getRange().collapsed&&(h=!0,d=b.clientX,f=b.clientY);clearTimeout(e);e=setTimeout(function(){if(c.selection&&c.selection.getNative()){var a;if(h&&"None"==c.selection.getNative().type){a=c.document.body.createTextRange();try{a.moveToPoint(d,f)}catch(e){a=null}}var g;a&&(g=c.selection.getIERange,c.selection.getIERange=function(){return a});c.selection.cache();g&&(c.selection.getIERange=
g);c.selection._cachedRange&&c.selection._cachedStartElement&&(c.fireEvent("beforeselectionchange"),c.fireEvent("selectionchange",!!b),c.fireEvent("afterselectionchange"),c.selection.clear())}},a||50)},_callCmdFn:function(a,b){var e=b[0].toLowerCase(),c;c=(e=this.commands[e]||UE.commands[e])&&e[a];if(!(e&&c||"queryCommandState"!=a))return 0;if(c)return c.apply(this,b)},execCommand:function(a){a=a.toLowerCase();var b,e=this.commands[a]||UE.commands[a];if(!e||!e.execCommand)return null;e.notNeedUndo||
this.__hasEnterExecCommand?(b=this._callCmdFn("execCommand",arguments),this.__hasEnterExecCommand||e.ignoreContentChange||this._ignoreContentChange||this.fireEvent("contentchange")):(this.__hasEnterExecCommand=!0,-1!=this.queryCommandState.apply(this,arguments)&&(this.fireEvent("saveScene"),this.fireEvent.apply(this,["beforeexeccommand",a].concat(arguments)),b=this._callCmdFn("execCommand",arguments),this.fireEvent.apply(this,["afterexeccommand",a].concat(arguments)),this.fireEvent("saveScene")),
this.__hasEnterExecCommand=!1);this.__hasEnterExecCommand||e.ignoreContentChange||this._ignoreContentChange||this._selectionChange();return b},queryCommandState:function(a){return this._callCmdFn("queryCommandState",arguments)},queryCommandValue:function(a){return this._callCmdFn("queryCommandValue",arguments)},hasContents:function(a){if(a)for(var b=0,e;e=a[b++];)if(0<this.document.getElementsByTagName(e).length)return!0;if(!f.isEmptyBlock(this.body))return!0;a=["div"];for(b=0;e=a[b++];){e=f.getElementsByTagName(this.document,
e);for(var c=0,h;h=e[c++];)if(f.isCustomeNode(h))return!0}return!1},reset:function(){this.fireEvent("reset")},setEnabled:function(){var a;if("false"==this.body.contentEditable){this.body.contentEditable=!0;a=this.selection.getRange();try{a.moveToBookmark(this.lastBk),delete this.lastBk}catch(b){a.setStartAtFirst(this.body).collapse(!0)}a.select(!0);this.bkqueryCommandState&&(this.queryCommandState=this.bkqueryCommandState,delete this.bkqueryCommandState);this.bkqueryCommandValue&&(this.queryCommandValue=
this.bkqueryCommandValue,delete this.bkqueryCommandValue);this.fireEvent("selectionchange")}},enable:function(){return this.setEnabled()},setDisabled:function(a){var b=this;a=a?p.isArray(a)?a:[a]:[];"true"==b.body.contentEditable&&(b.lastBk||(b.lastBk=b.selection.getRange().createBookmark(!0)),b.body.contentEditable=!1,b.bkqueryCommandState=b.queryCommandState,b.bkqueryCommandValue=b.queryCommandValue,b.queryCommandState=function(e){return-1!=p.indexOf(a,e)?b.bkqueryCommandState.apply(b,arguments):
-1},b.queryCommandValue=function(e){return-1!=p.indexOf(a,e)?b.bkqueryCommandValue.apply(b,arguments):null},b.fireEvent("selectionchange"))},disable:function(a){return this.setDisabled(a)},_setDefaultContent:function(){function a(){var b=this;b.document.getElementById("initContent")&&(b.body.innerHTML="<p>"+(I?"":"<br/>")+"</p>",b.removeListener("firstBeforeExecCommand focus",a),setTimeout(function(){b.focus();b._selectionChange()},0))}return function(b){this.body.innerHTML='<p id="initContent">'+
b+"</p>";this.addListener("firstBeforeExecCommand focus",a)}}(),setShow:function(){var a=this.selection.getRange();if("none"==this.container.style.display){try{a.moveToBookmark(this.lastBk),delete this.lastBk}catch(b){a.setStartAtFirst(this.body).collapse(!0)}setTimeout(function(){a.select(!0)},100);this.container.style.display=""}},show:function(){return this.setShow()},setHide:function(){this.lastBk||(this.lastBk=this.selection.getRange().createBookmark(!0));this.container.style.display="none"},
hide:function(){return this.setHide()},getLang:function(a){var b=UE.I18N[this.options.lang];if(!b)throw Error("not import language file");a=(a||"").split(".");for(var e=0,c;(c=a[e++])&&(b=b[c],b););return b},getContentLength:function(a,b){var e=this.getContent(!1,!1,!0).length;if(a){b=(b||[]).concat(["hr","img","iframe"]);for(var e=this.getContentTxt().replace(/[\t\r\n]+/g,"").length,c=0,h;h=b[c++];)e+=this.document.getElementsByTagName(h).length}return e},addInputRule:function(a){this.inputRules.push(a)},
filterInputRule:function(a){for(var b=0,e;e=this.inputRules[b++];)e.call(this,a)},addOutputRule:function(a){this.outputRules.push(a)},filterOutputRule:function(a){for(var b=0,e;e=this.outputRules[b++];)e.call(this,a)},getActionUrl:function(a){a=this.getOpt(a)||a;var b=this.getOpt("imageUrl"),e=this.getOpt("serverUrl");!e&&b&&(e=b.replace(/^(.*[\/]).+([\.].+)$/,"$1controller$2"));return e?(e=e+(-1==e.indexOf("?")?"?":"&")+"action="+(a||""),p.formatUrl(e)):""}};p.inherits(h,Z)})();UE.Editor.defaultOptions=
function(d){d=d.options.UEDITOR_HOME_URL;return{isShow:!0,initialContent:"",initialStyle:"",autoClearinitialContent:!1,iframeCssUrl:"/Theme/assets/css/amazeui.min.css",textarea:"editorValue",focus:!1,focusInEnd:!0,autoClearEmptyNode:!0,fullscreen:!1,readonly:!1,zIndex:999,imagePopup:!0,enterTag:"p",customDomain:!1,lang:"zh-cn",langPath:d+"lang/",theme:"default",themePath:d+"themes/",allHtmlEnabled:!1,scaleEnabled:!1,tableNativeEditInFF:!1,autoSyncData:!0,fileNameFormat:"{time}{rand:6}"}};(function(){UE.Editor.prototype.loadServerConfig=
function(){function d(b){console&&console.error(b)}var c=this;setTimeout(function(){try{c.options.imageUrl&&c.setOpt("serverUrl",c.options.imageUrl.replace(/^(.*[\/]).+([\.].+)$/,"$1controller$2"));var b=c.getActionUrl("config"),a=p.isCrossDomainUrl(b);c._serverConfigLoaded=!1;b&&UE.ajax.request(b,{method:"GET",dataType:a?"jsonp":"",onsuccess:function(b){try{var e=a?b:eval("("+b.responseText+")");p.extend(c.options,e);c.fireEvent("serverConfigLoaded");c._serverConfigLoaded=!0}catch(l){d(c.getLang("loadconfigFormatError"))}},
onerror:function(){d(c.getLang("loadconfigHttpError"))}})}catch(e){d(c.getLang("loadconfigError"))}})};UE.Editor.prototype.isServerConfigLoaded=function(){return this._serverConfigLoaded||!1};UE.Editor.prototype.afterConfigReady=function(d){if(d&&p.isFunction(d)){var c=this,b=function(){d.apply(c,arguments);c.removeListener("serverConfigLoaded",b)};c.isServerConfigLoaded()?d.call(c,"serverConfigLoaded"):c.addListener("serverConfigLoaded",b)}}})();UE.ajax=function(){function d(a){var b=[],e;for(e in a)if("method"!=
e&&"timeout"!=e&&"async"!=e&&"dataType"!=e&&"callback"!=e&&void 0!=a[e]&&null!=a[e])if("function"!=(typeof a[e]).toLowerCase()&&"object"!=(typeof a[e]).toLowerCase())b.push(encodeURIComponent(e)+"="+encodeURIComponent(a[e]));else if(p.isArray(a[e]))for(var c=0;c<a[e].length;c++)b.push(encodeURIComponent(e)+"[]="+encodeURIComponent(a[e][c]));return b.join("&")}function c(a,b){var e=g(),c=!1,h={method:"POST",timeout:5E3,async:!0,data:{},onsuccess:function(){},onerror:function(){}};"object"===typeof a&&
(b=a,a=b.url);if(e&&a){var f=b?p.extend(h,b):h,h=d(f);p.isEmptyObject(f.data)||(h+=(h?"&":"")+d(f.data));var w=setTimeout(function(){4!=e.readyState&&(c=!0,e.abort(),clearTimeout(w))},f.timeout),y=f.method.toUpperCase(),u=a+(-1==a.indexOf("?")?"?":"&")+("POST"==y?"":h+"&noCache="+ +new Date);e.open(y,u,f.async);e.onreadystatechange=function(){if(4==e.readyState)if(c||200!=e.status)f.onerror(e);else f.onsuccess(e)};"POST"==y?(e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send(h)):
e.send(null)}}function b(a,b){function e(a){return function(){try{if(a)h.onerror&&h.onerror();else try{clearTimeout(E),c.apply(window,arguments)}catch(b){}}catch(e){h.onerror&&h.onerror.call(window,e)}finally{h.oncomplete&&h.oncomplete.apply(window,arguments);g.parentNode&&g.parentNode.removeChild(g);window[u]=null;try{delete window[u]}catch(k){}}}}var c=b.onsuccess||function(){},g=document.createElement("SCRIPT"),h=b||{},f=h.charset,y=h.jsonp||"callback",u,C=h.timeOut||0,E,G=RegExp("(\\?|&)"+y+"=([^&]*)"),
A;if(p.isFunction(c))u="bd__editor__"+Math.floor(2147483648*Math.random()).toString(36),window[u]=e(0);else if(p.isString(c))u=c;else if(A=G.exec(a))u=A[2];a=a.replace(G,"$1"+y+"="+u);0>a.search(G)&&(a+=(0>a.indexOf("?")?"?":"&")+y+"="+u);y=d(b);p.isEmptyObject(b.data)||(y+=(y?"&":"")+d(b.data));y&&(a=a.replace(/\?/,"?"+y+"&"));g.onerror=e(1);C&&(E=setTimeout(e(1),C));(function(a,b,e){a.setAttribute("type","text/javascript");a.setAttribute("defer","defer");e&&a.setAttribute("charset",e);a.setAttribute("src",
b);document.getElementsByTagName("head")[0].appendChild(a)})(g,a,f)}var a="XMLHttpRequest()";try{new ActiveXObject("Msxml2.XMLHTTP"),a="ActiveXObject('Msxml2.XMLHTTP')"}catch(e){try{new ActiveXObject("Microsoft.XMLHTTP"),a="ActiveXObject('Microsoft.XMLHTTP')"}catch(h){}}var g=new Function("return new "+a);return{request:function(a,e){e&&"jsonp"==e.dataType?b(a,e):c(a,e)},getJSONP:function(a,e,c){b(a,{data:e,oncomplete:c})}}}();UE.filterWord=function(){function d(b){return b=b.replace(/[\d.]+\w+/g,
function(a){return p.transUnitToPx(a)})}function c(b){return b.replace(/[\t\r\n]+/g," ").replace(/\x3c!--[\s\S]*?--\x3e/ig,"").replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi,function(a){if(r.opera)return"";try{if(/Bitmap/i.test(a))return"";var b=a.match(/width:([ \d.]*p[tx])/i)[1],c=a.match(/height:([ \d.]*p[tx])/i)[1],g=a.match(/src=\s*"([^"]*)"/i)[1];return'<img width="'+d(b)+'" height="'+d(c)+'" src="'+g+'" />'}catch(l){return""}}).replace(/<\/?div[^>]*>/g,"").replace(/v:\w+=(["']?)[^'"]+\1/g,
"").replace(/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi,"").replace(/<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi,"<p><strong>$1</strong></p>").replace(/\s+(class|lang|align)\s*=\s*(['"]?)([\w-]+)\2/ig,function(a,b,c,g){return"class"==b&&"MsoListParagraph"==g?a:""}).replace(/<(font|span)[^>]*>(\s*)<\/\1>/gi,function(a,b,c){return c.replace(/[\t\r\n ]+/g," ")}).replace(/(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi,function(a,b,c,g){a=[];
g=g.replace(/^\s+|\s+$/,"").replace(/&#39;/g,"'").replace(/&quot;/gi,"'").replace(/[\d.]+(cm|pt)/g,function(a){return p.transUnitToPx(a)}).split(/;\s*/g);c=0;for(var l;l=g[c];c++){var k,f=l.split(":");if(2==f.length&&(l=f[0].toLowerCase(),k=f[1].toLowerCase(),!(/^(background)\w*/.test(l)&&0==k.replace(/(initial|\s)/g,"").length||/^(margin)\w*/.test(l)&&/^0\w+$/.test(k)))){switch(l){case "mso-padding-alt":case "mso-padding-top-alt":case "mso-padding-right-alt":case "mso-padding-bottom-alt":case "mso-padding-left-alt":case "mso-margin-alt":case "mso-margin-top-alt":case "mso-margin-right-alt":case "mso-margin-bottom-alt":case "mso-margin-left-alt":case "mso-height":case "mso-width":case "mso-vertical-align-alt":/<table/.test(b)||
(a[c]=l.replace(/^mso-|-alt$/g,"")+":"+d(k));continue;case "horiz-align":a[c]="text-align:"+k;continue;case "vert-align":a[c]="vertical-align:"+k;continue;case "font-color":case "mso-foreground":a[c]="color:"+k;continue;case "mso-background":case "mso-highlight":a[c]="background:"+k;continue;case "mso-default-height":a[c]="min-height:"+d(k);continue;case "mso-default-width":a[c]="min-width:"+d(k);continue;case "mso-padding-between-alt":a[c]="border-collapse:separate;border-spacing:"+d(k);continue;
case "text-line-through":if("single"==k||"double"==k)a[c]="text-decoration:line-through";continue;case "mso-zero-height":"yes"==k&&(a[c]="display:none");continue;case "margin":if(!/[1-9]/.test(k))continue}/^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test(l)||/text\-indent|padding|margin/.test(l)&&/\-[\d.]+/.test(k)||(a[c]=l+":"+f[1])}}return b+(a.length?' style="'+a.join(";").replace(/;{2,}/g,
";")+'"':"")})}return function(b){return/(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<(v|o):|lang=)/ig.test(b)?c(b):b}}();(function(){function d(a,b,e){a.push(q);return b+(e?1:-1)}function c(a,b){for(var e=0;e<b;e++)a.push(n)}function b(e,g,h,k){switch(e.type){case "root":for(var l=0,n;n=e.children[l++];)h&&"element"==n.type&&!v.$inlineWithA[n.tagName]&&1<l&&(d(g,k,!0),c(g,k)),b(n,g,h,k);break;case "text":"pre"==e.parentNode.tagName?g.push(e.data):g.push(f[e.parentNode.tagName]?p.html(e.data):
e.data.replace(/[ ]{2}/g," &nbsp;"));break;case "element":a(e,g,h,k);break;case "comment":g.push("\x3c!--"+e.data+"--\x3e")}return g}function a(a,e,g,h){var l="";if(a.attrs){var l=[],f=a.attrs,n;for(n in f)l.push(n+(void 0!==f[n]?'="'+(k[n]?p.html(f[n]).replace(/["]/g,function(a){return"&quot;"}):p.unhtml(f[n]))+'"':""));l=l.join(" ")}e.push("<"+a.tagName+(l?" "+l:"")+(v.$empty[a.tagName]?"/":"")+">");g&&!v.$inlineWithA[a.tagName]&&"pre"!=a.tagName&&a.children&&a.children.length&&(h=d(e,h,!0),c(e,
h));if(a.children&&a.children.length)for(l=0;f=a.children[l++];)g&&"element"==f.type&&!v.$inlineWithA[f.tagName]&&1<l&&(d(e,h),c(e,h)),b(f,e,g,h);v.$empty[a.tagName]||(g&&!v.$inlineWithA[a.tagName]&&"pre"!=a.tagName&&a.children&&a.children.length&&(h=d(e,h),c(e,h)),e.push("</"+a.tagName+">"))}function e(a,b){var c;if("element"==a.type&&a.getAttr("id")==b)return a;if(a.children&&a.children.length)for(var g=0;c=a.children[g++];)if(c=e(c,b))return c}function h(a,b,e){"element"==a.type&&a.tagName==b&&
e.push(a);if(a.children&&a.children.length)for(var c=0,g;g=a.children[c++];)h(g,b,e)}function g(a,b){if(a.children&&a.children.length)for(var e=0,c;c=a.children[e];)g(c,b),c.parentNode&&(c.children&&c.children.length&&b(c),c.parentNode&&e++);else b(a)}var l=UE.uNode=function(a){this.type=a.type;this.data=a.data;this.tagName=a.tagName;this.parentNode=a.parentNode;this.attrs=a.attrs||{};this.children=a.children},k={href:1,src:1,_src:1,_href:1,cdata_data:1},f={style:1,script:1},n="    ",q="\n";l.createElement=
function(a){return/[<>]/.test(a)?UE.htmlparser(a).children[0]:new l({type:"element",children:[],tagName:a})};l.createText=function(a,b){return new UE.uNode({type:"text",data:b?a:p.unhtml(a||"")})};l.prototype={toHtml:function(a){var e=[];b(this,e,a,0);return e.join("")},innerHTML:function(a){if("element"!=this.type||v.$empty[this.tagName])return this;if(p.isString(a)){if(this.children)for(var b=0,e;e=this.children[b++];)e.parentNode=null;this.children=[];a=UE.htmlparser(a);for(b=0;e=a.children[b++];)this.children.push(e),
e.parentNode=this;return this}a=new UE.uNode({type:"root",children:this.children});return a.toHtml()},innerText:function(a,b){if("element"!=this.type||v.$empty[this.tagName])return this;if(a){if(this.children)for(var e=0,c;c=this.children[e++];)c.parentNode=null;this.children=[];this.appendChild(l.createText(a,b));return this}return this.toHtml().replace(/<[^>]+>/g,"")},getData:function(){return"element"==this.type?"":this.data},firstChild:function(){return this.children?this.children[0]:null},lastChild:function(){return this.children?
this.children[this.children.length-1]:null},previousSibling:function(){for(var a=this.parentNode,b=0,e;e=a.children[b];b++)if(e===this)return 0==b?null:a.children[b-1]},nextSibling:function(){for(var a=this.parentNode,b=0,e;e=a.children[b++];)if(e===this)return a.children[b]},replaceChild:function(a,b){if(this.children){a.parentNode&&a.parentNode.removeChild(a);for(var e=0,c;c=this.children[e];e++)if(c===b)return this.children.splice(e,1,a),b.parentNode=null,a.parentNode=this,a}},appendChild:function(a){if("root"==
this.type||"element"==this.type&&!v.$empty[this.tagName]){this.children||(this.children=[]);a.parentNode&&a.parentNode.removeChild(a);for(var b=0,e;e=this.children[b];b++)if(e===a){this.children.splice(b,1);break}this.children.push(a);a.parentNode=this;return a}},insertBefore:function(a,b){if(this.children){a.parentNode&&a.parentNode.removeChild(a);for(var e=0,c;c=this.children[e];e++)if(c===b)return this.children.splice(e,0,a),a.parentNode=this,a}},insertAfter:function(a,b){if(this.children){a.parentNode&&
a.parentNode.removeChild(a);for(var e=0,c;c=this.children[e];e++)if(c===b)return this.children.splice(e+1,0,a),a.parentNode=this,a}},removeChild:function(a,b){if(this.children)for(var e=0,c;c=this.children[e];e++)if(c===a){this.children.splice(e,1);c.parentNode=null;if(b&&c.children&&c.children.length)for(var g=0,h;h=c.children[g];g++)this.children.splice(e+g,0,h),h.parentNode=this;return c}},getAttr:function(a){return this.attrs&&this.attrs[a.toLowerCase()]},setAttr:function(a,b){if(a)if(this.attrs||
(this.attrs={}),p.isObject(a))for(var e in a)a[e]?this.attrs[e.toLowerCase()]=a[e]:delete this.attrs[e];else b?this.attrs[a.toLowerCase()]=b:delete this.attrs[a];else delete this.attrs},getIndex:function(){for(var a=this.parentNode,b=0,e;e=a.children[b];b++)if(e===this)return b;return-1},getNodeById:function(a){var b;if(this.children&&this.children.length)for(var c=0;b=this.children[c++];)if(b=e(b,a))return b},getNodesByTagName:function(a){a=p.trim(a).replace(/[ ]{2,}/g," ").split(" ");var b=[],e=
this;p.each(a,function(a){if(e.children&&e.children.length)for(var c=0,g;g=e.children[c++];)h(g,a,b)});return b},getStyle:function(a){var b=this.getAttr("style");return b?(a=b.match(RegExp("(^|;)\\s*"+a+":([^;]+)","i")))&&a[0]?a[2]:"":""},setStyle:function(a,b){function e(a,b){c=c.replace(RegExp("(^|;)\\s*"+a+":([^;]+;?)","gi"),"$1");b&&(c=a+":"+p.unhtml(b)+";"+c)}var c=this.getAttr("style");c||(c="");if(p.isObject(a))for(var g in a)e(g,a[g]);else e(a,b);this.setAttr("style",p.trim(c))},traversal:function(a){this.children&&
this.children.length&&g(this,a);return this}}})();UE.htmlparser=function(d,c){function b(a,b){if(n[a.tagName]){var e=k.createElement(n[a.tagName]);a.appendChild(e);e.appendChild(k.createText(b))}else a.appendChild(k.createText(b))}function a(b,e,c){var g;if(g=m[e]){for(var d=b,f;"root"!=d.type;){if(p.isArray(g)?-1!=p.indexOf(g,d.tagName):g==d.tagName){b=d;f=!0;break}d=d.parentNode}f||(b=a(b,p.isArray(g)?g[0]:g))}g=new k({parentNode:b,type:"element",tagName:e.toLowerCase(),children:v.$empty[e]?null:
[]});if(c){for(d={};f=h.exec(c);)d[f[1].toLowerCase()]=l[f[1].toLowerCase()]?f[2]||f[3]||f[4]:p.unhtml(f[2]||f[3]||f[4]);g.attrs=d}b.children.push(g);return v.$empty[e]?b:g}var e=/<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--\x3e)|(?:([^\s\/<>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,h=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,g={b:1,code:1,i:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,span:1,sub:1,img:1,sup:1,font:1,big:1,small:1,iframe:1,a:1,br:1,pre:1};
d=d.replace(RegExp(f.fillChar,"g"),"");c||(d=d.replace(RegExp("[\\r\\t\\n"+(c?"":" ")+"]*</?(\\w+)\\s*(?:[^>]*)>[\\r\\t\\n"+(c?"":" ")+"]*","g"),function(a,b){return b&&g[b.toLowerCase()]?a.replace(/(^[\n\r]+)|([\n\r]+$)/g,""):a.replace(RegExp("^[\\r\\n"+(c?"":" ")+"]+"),"").replace(RegExp("[\\r\\n"+(c?"":" ")+"]+$"),"")}));for(var l={href:1,src:1},k=UE.uNode,m={td:"tr",tr:["tbody","thead","tfoot"],tbody:"table",th:"tr",thead:"table",tfoot:"table",caption:"table",li:["ul","ol"],dt:"dl",dd:"dl",option:"select"},
n={ol:"li",ul:"li"},q,t=0,w=0,y=new k({type:"root",children:[]}),u=y;q=e.exec(d);){t=q.index;try{if(t>w&&b(u,d.slice(w,t)),q[3])v.$cdata[u.tagName]?b(u,q[0]):u=a(u,q[3].toLowerCase(),q[4]);else if(q[1]){if("root"!=u.type)if(v.$cdata[u.tagName]&&!v.$cdata[q[1]])b(u,q[0]);else{for(t=u;"element"==u.type&&u.tagName!=q[1].toLowerCase();)if(u=u.parentNode,"root"==u.type)throw u=t,"break";u=u.parentNode}}else q[2]&&u.children.push(new k({type:"comment",data:q[2],parentNode:u}))}catch(C){}w=e.lastIndex}w<
d.length&&b(u,d.slice(w));return y};UE.filterNode=function(){function d(c,b){switch(c.type){case "element":var a;if(a=b[c.tagName])if("-"===a)c.parentNode.removeChild(c);else if(p.isFunction(a)){var e=c.parentNode,h=c.getIndex();a(c);if(c.parentNode){if(c.children)for(a=0;h=c.children[a];)d(h,b),h.parentNode&&a++}else for(a=h;h=e.children[a];)d(h,b),h.parentNode&&a++}else{if((a=a.$)&&c.attrs){var h={},g;for(e in a){g=c.getAttr(e);if("style"==e&&p.isArray(a[e])){var l=[];p.each(a[e],function(a){var b;
(b=c.getStyle(a))&&l.push(a+":"+b)});g=l.join(";")}g&&(h[e]=g)}c.attrs=h}if(c.children)for(a=0;h=c.children[a];)d(h,b),h.parentNode&&a++}else if(v.$cdata[c.tagName])c.parentNode.removeChild(c);else for(e=c.parentNode,h=c.getIndex(),c.parentNode.removeChild(c,!0),a=h;h=e.children[a];)d(h,b),h.parentNode&&a++;break;case "comment":c.parentNode.removeChild(c)}}return function(c,b){if(p.isEmptyObject(b))return c;var a;(a=b["-"])&&p.each(a.split(" "),function(a){b[a]="-"});a=0;for(var e;e=c.children[a];)d(e,
b),e.parentNode&&a++;return c}}();UE.plugin=function(){var d={};return{register:function(c,b,a,e){a&&p.isFunction(a)&&(e=a,a=null);d[c]={optionName:a||c,execFn:b,afterDisabled:e}},load:function(c){p.each(d,function(b){var a=b.execFn.call(c);!1!==c.options[b.optionName]?a&&p.each(a,function(a,b){switch(b.toLowerCase()){case "shortcutkey":c.addshortcutkey(a);break;case "bindevents":p.each(a,function(a,b){c.addListener(b,a)});break;case "bindmultievents":p.each(p.isArray(a)?a:[a],function(a){var b=p.trim(a.type).split(/\s+/);
p.each(b,function(b){c.addListener(b,a.handler)})});break;case "commands":p.each(a,function(a,b){c.commands[b]=a});break;case "outputrule":c.addOutputRule(a);break;case "inputrule":c.addInputRule(a);break;case "defaultoptions":c.setOpt(a)}}):b.afterDisabled&&b.afterDisabled.call(c)});p.each(UE.plugins,function(b){b.call(c)})},run:function(c,b){var a=d[c];a&&a.exeFn.call(b)}}}();var $=UE.keymap={Backspace:8,Tab:9,Enter:13,Shift:16,Control:17,Alt:18,CapsLock:20,Esc:27,Spacebar:32,PageUp:33,PageDown:34,
End:35,Home:36,Left:37,Up:38,Right:39,Down:40,Insert:45,Del:46,NumLock:144,Cmd:91,"=":187,"-":189,b:66,i:73,z:90,y:89,v:86,x:88,s:83,n:78},Y=UE.LocalStorage=function(){function d(){var a=document.createElement("div");a.style.display="none";if(!a.addBehavior)return null;a.addBehavior("#default#userdata");return{getItem:function(e){var c=null;try{document.body.appendChild(a),a.load(b),c=a.getAttribute(e),document.body.removeChild(a)}catch(g){}return c},setItem:function(e,c){document.body.appendChild(a);
a.setAttribute(e,c);a.save(b);document.body.removeChild(a)},removeItem:function(e){document.body.appendChild(a);a.removeAttribute(e);a.save(b);document.body.removeChild(a)}}}var c=window.localStorage||d()||null,b="localStorage";return{saveLocalData:function(a,b){return c&&b?(c.setItem(a,b),!0):!1},getLocalData:function(a){return c?c.getItem(a):null},removeItem:function(a){c&&c.removeItem(a)}}}();(function(){UE.Editor.prototype.setPreferences=function(d,c){var b={};p.isString(d)?b[d]=c:b=d;var a=Y.getLocalData("ueditor_preference");
a&&(a=p.str2json(a))?p.extend(a,b):a=b;a&&Y.saveLocalData("ueditor_preference",p.json2str(a))};UE.Editor.prototype.getPreferences=function(d){var c=Y.getLocalData("ueditor_preference");return c&&(c=p.str2json(c))?d?c[d]:c:null};UE.Editor.prototype.removePreferences=function(d){var c=Y.getLocalData("ueditor_preference");c&&(c=p.str2json(c))&&(c[d]=void 0,delete c[d]);c&&Y.saveLocalData("ueditor_preference",p.json2str(c))}})();UE.plugins.defaultfilter=function(){var d=this;d.setOpt({allowDivTransToP:!0,
disabledTableInTable:!0});d.addInputRule(function(c){function b(a){for(;a&&"element"==a.type;){if("td"==a.tagName)return!0;a=a.parentNode}return!1}var a=this.options.allowDivTransToP,e;c.traversal(function(c){if("element"==c.type)if(v.$cdata[c.tagName]||!d.options.autoClearEmptyNode||!v.$inline[c.tagName]||v.$empty[c.tagName]||c.attrs&&!p.isEmptyObject(c.attrs))switch(c.tagName){case "style":case "script":c.setAttr({cdata_tag:c.tagName,cdata_data:c.innerHTML()||"",_ue_custom_node_:"true"});c.tagName=
"div";c.innerHTML("");break;case "a":(e=c.getAttr("href"))&&c.setAttr("_href",e);break;case "img":if((e=c.getAttr("src"))&&/^data:/.test(e)){c.parentNode.removeChild(c);break}c.setAttr("_src",c.getAttr("src"));break;case "span":r.webkit&&(e=c.getStyle("white-space"))&&/nowrap|normal/.test(e)&&(c.setStyle("white-space",""),d.options.autoClearEmptyNode&&p.isEmptyObject(c.attrs)&&c.parentNode.removeChild(c,!0));(e=c.getAttr("id"))&&/^_baidu_bookmark_/i.test(e)&&c.parentNode.removeChild(c);break;case "p":if(e=
c.getAttr("align"))c.setAttr("align"),c.setStyle("text-align",e);p.each(c.children,function(a){if("element"==a.type&&"p"==a.tagName){var b=a.nextSibling();for(c.parentNode.insertAfter(a,c);b;){var e=b.nextSibling();c.parentNode.insertAfter(b,a);a=b;b=e}return!1}});c.firstChild()||c.innerHTML(r.ie?"&nbsp;":"<br/>");break;case "div":if(c.getAttr("cdata_tag"))break;if((e=c.getAttr("class"))&&/^line number\d+/.test(e))break;if(!a)break;for(var g,l=UE.uNode.createElement("p");g=c.firstChild();)"text"!=
g.type&&UE.dom.dtd.$block[g.tagName]?l.firstChild()?(c.parentNode.insertBefore(l,c),l=UE.uNode.createElement("p")):c.parentNode.insertBefore(g,c):l.appendChild(g);l.firstChild()&&c.parentNode.insertBefore(l,c);c.parentNode.removeChild(c);break;case "dl":c.tagName="ul";break;case "dt":case "dd":c.tagName="li";break;case "li":(g=c.getAttr("class"))&&/list\-/.test(g)||c.setAttr();g=c.getNodesByTagName("ol ul");UE.utils.each(g,function(a){c.parentNode.insertAfter(a,c)});break;case "td":case "th":case "caption":c.children&&
c.children.length||c.appendChild(r.ie11below?UE.uNode.createText(" "):UE.uNode.createElement("br"));break;case "table":d.options.disabledTableInTable&&b(c)&&(c.parentNode.insertBefore(UE.uNode.createText(c.innerText()),c),c.parentNode.removeChild(c))}else c.firstChild()?"span"!=c.tagName||c.attrs&&!p.isEmptyObject(c.attrs)||c.parentNode.removeChild(c,!0):c.parentNode.removeChild(c)})});d.addOutputRule(function(c){var b;c.traversal(function(a){if("element"==a.type)if(!d.options.autoClearEmptyNode||
!v.$inline[a.tagName]||v.$empty[a.tagName]||a.attrs&&!p.isEmptyObject(a.attrs))switch(a.tagName){case "div":if(b=a.getAttr("cdata_tag"))a.tagName=b,a.appendChild(UE.uNode.createText(a.getAttr("cdata_data"))),a.setAttr({cdata_tag:"",cdata_data:"",_ue_custom_node_:""});break;case "a":(b=a.getAttr("_href"))&&a.setAttr({href:p.html(b),_href:""});break;case "span":(b=a.getAttr("id"))&&/^_baidu_bookmark_/i.test(b)&&a.parentNode.removeChild(a);break;case "img":(b=a.getAttr("_src"))&&a.setAttr({src:a.getAttr("_src"),
_src:""})}else a.firstChild()?"span"!=a.tagName||a.attrs&&!p.isEmptyObject(a.attrs)||a.parentNode.removeChild(a,!0):a.parentNode.removeChild(a)})})};UE.commands.inserthtml={execCommand:function(d,c,b){var a=this,e;if(c&&!0!==a.fireEvent("beforeinserthtml",c)){e=a.selection.getRange();d=e.document.createElement("div");d.style.display="inline";b||(b=UE.htmlparser(c),a.options.filterRules&&UE.filterNode(b,a.options.filterRules),a.filterInputRule(b),c=b.toHtml());d.innerHTML=p.trim(c);if(!e.collapsed&&
(b=e.startContainer,f.isFillChar(b)&&e.setStartBefore(b),b=e.endContainer,f.isFillChar(b)&&e.setEndAfter(b),e.txtToElmBoundary(),e.endContainer&&1==e.endContainer.nodeType&&(b=e.endContainer.childNodes[e.endOffset])&&f.isBr(b)&&e.setEndAfter(b),0==e.startOffset&&(b=e.startContainer,f.isBoundaryNode(b,"firstChild")&&(b=e.endContainer,e.endOffset==(3==b.nodeType?b.nodeValue.length:b.childNodes.length)&&f.isBoundaryNode(b,"lastChild")&&(a.body.innerHTML="<p>"+(r.ie?"":"<br/>")+"</p>",e.setStart(a.body.firstChild,
0).collapse(!0)))),!e.collapsed&&e.deleteContents(),1==e.startContainer.nodeType)){b=e.startContainer.childNodes[e.startOffset];var h;if(b&&f.isBlockElm(b)&&(h=b.previousSibling)&&f.isBlockElm(h)){for(e.setEnd(h,h.childNodes.length).collapse();b.firstChild;)h.appendChild(b.firstChild);f.remove(b)}}var g,l,k=0,m;e.inFillChar()&&(b=e.startContainer,f.isFillChar(b)?(e.setStartBefore(b).collapse(!0),f.remove(b)):f.isFillChar(b,!0)&&(b.nodeValue=b.nodeValue.replace(P,""),e.startOffset--,e.collapsed&&e.collapse(!0)));
var n=f.findParentByTagName(e.startContainer,"li",!0);if(n){for(var q;b=d.firstChild;){for(;b&&(3==b.nodeType||!f.isBlockElm(b)||"HR"==b.tagName);)q=b.nextSibling,e.insertNode(b).collapse(),g=b,b=q;if(b)if(/^(ol|ul)$/i.test(b.tagName)){for(;b.firstChild;)g=b.firstChild,f.insertAfter(n,b.firstChild),n=n.nextSibling;f.remove(b)}else q=b.nextSibling,h=a.document.createElement("li"),f.insertAfter(n,h),h.appendChild(b),g=b,b=q,n=h}n=f.findParentByTagName(e.startContainer,"li",!0);f.isEmptyBlock(n)&&f.remove(n);
g&&e.setStartAfter(g).collapse(!0).select(!0)}else{for(;b=d.firstChild;){if(k){for(g=a.document.createElement("p");b&&(3==b.nodeType||!v.$block[b.tagName]);)m=b.nextSibling,g.appendChild(b),b=m;g.firstChild&&(b=g)}e.insertNode(b);m=b.nextSibling;if(!k&&b.nodeType==f.NODE_ELEMENT&&f.isBlockElm(b)&&(g=f.findParent(b,function(a){return f.isBlockElm(a)}))&&"body"!=g.tagName.toLowerCase()&&(!v[g.tagName][b.nodeName]||b.parentNode!==g)){if(v[g.tagName][b.nodeName])for(l=b.parentNode;l!==g;)h=l,l=l.parentNode;
else h=g;f.breakParent(b,h||l);h=b.previousSibling;f.trimWhiteTextNode(h);h.childNodes.length||f.remove(h);!r.ie&&(q=b.nextSibling)&&f.isBlockElm(q)&&q.lastChild&&!f.isBr(q.lastChild)&&q.appendChild(a.document.createElement("br"));k=1}q=b.nextSibling;if(!d.firstChild&&q&&f.isBlockElm(q)){e.setStart(q,0).collapse(!0);break}e.setEndAfter(b).collapse()}b=e.startContainer;m&&f.isBr(m)&&f.remove(m);if(f.isBlockElm(b)&&f.isEmptyNode(b))if(m=b.nextSibling)f.remove(b),1==m.nodeType&&v.$block[m.tagName]&&
e.setStart(m,0).collapse(!0).shrinkBoundary();else try{b.innerHTML=r.ie?f.fillChar:"<br/>"}catch(t){e.setStartBefore(b),f.remove(b)}try{e.select(!0)}catch(w){}}setTimeout(function(){e=a.selection.getRange();e.scrollToView(a.autoHeightEnabled,a.autoHeightEnabled?f.getXY(a.iframe).y:0);a.fireEvent("afterinserthtml",c)},200)}}};UE.plugins.autotypeset=function(){function d(a,b){if(!a||3==a.nodeType)return 0;if(f.isBr(a))return 1;if(a&&a.parentNode&&k[a.tagName.toLowerCase()])return m&&m.contains(a)||
a.getAttribute("pagebreak")?0:b?!f.isEmptyBlock(a):f.isEmptyBlock(a,RegExp("[\\s"+f.fillChar+"]","g"))}function c(a){a.style.cssText||(f.removeAttributes(a,["style"]),"span"==a.tagName.toLowerCase()&&f.hasNoAttributes(a)&&f.remove(a,!0))}function b(a,b){var e;if(b){if(!h.pasteFilter)return;e=this.document.createElement("div");e.innerHTML=b.html}else e=this.document.body;for(var k=f.getElementsByTagName(e,"*"),y=0,u;u=k[y++];)if(!0!==this.fireEvent("excludeNodeinautotype",u)){h.clearFontSize&&u.style.fontSize&&
(f.removeStyle(u,"font-size"),c(u));h.clearFontFamily&&u.style.fontFamily&&(f.removeStyle(u,"font-family"),c(u));if(d(u)){if(h.mergeEmptyline)for(var C=u.nextSibling,E,G=f.isBr(u);d(C);){E=C;C=E.nextSibling;if(G&&(!C||C&&!f.isBr(C)))break;f.remove(E)}if(h.removeEmptyline&&f.inDoc(u,e)&&!l[u.parentNode.tagName.toLowerCase()]){if(f.isBr(u)&&(C=u.nextSibling)&&!f.isBr(C))continue;f.remove(u);continue}}d(u,!0)&&"SPAN"!=u.tagName&&(h.indent&&(u.style.textIndent=h.indentValue),h.textAlign&&(u.style.textAlign=
h.textAlign));if(h.removeClass&&u.className&&!g[u.className.toLowerCase()]){if(m&&m.contains(u))continue;f.removeAttributes(u,["class"])}if(h.imageBlockLine&&"img"==u.tagName.toLowerCase()&&!u.getAttribute("emotion"))if(b)switch(G=u,h.imageBlockLine){case "left":case "right":case "none":for(var C=G.parentNode,r;v.$inline[C.tagName]||"A"==C.tagName;)C=C.parentNode;E=C;if("P"==E.tagName&&"center"==f.getStyle(E,"text-align")&&!f.isBody(E)&&1==f.getChildCount(E,function(a){return!f.isBr(a)&&!f.isWhitespace(a)}))if(r=
E.previousSibling,C=E.nextSibling,r&&C&&1==r.nodeType&&1==C.nodeType&&r.tagName==C.tagName&&f.isBlockElm(r)){for(r.appendChild(E.firstChild);C.firstChild;)r.appendChild(C.firstChild);f.remove(E);f.remove(C)}else f.setStyle(E,"text-align","");f.setStyle(G,"float",h.imageBlockLine);break;case "center":if("center"!=this.queryCommandValue("imagefloat")){C=G.parentNode;f.setStyle(G,"float","none");for(E=G;C&&1==f.getChildCount(C,function(a){return!f.isBr(a)&&!f.isWhitespace(a)})&&(v.$inline[C.tagName]||
"A"==C.tagName);)E=C,C=C.parentNode;C=this.document.createElement("p");f.setAttributes(C,{style:"text-align:center"});E.parentNode.insertBefore(C,E);C.appendChild(E);f.setStyle(E,"float","")}}else this.selection.getRange().selectNode(u).select(),this.execCommand("imagefloat",h.imageBlockLine);h.removeEmptyNode&&h.removeTagNames[u.tagName.toLowerCase()]&&f.hasNoAttributes(u)&&f.isEmptyBlock(u)&&f.remove(u)}h.tobdc&&(k=UE.htmlparser(e.innerHTML),k.traversal(function(a){if("text"==a.type){for(var b=
a.data,b=p.html(b),e="",c=0;c<b.length;c++)e=32==b.charCodeAt(c)?e+String.fromCharCode(12288):127>b.charCodeAt(c)?e+String.fromCharCode(b.charCodeAt(c)+65248):e+b.charAt(c);a.data=e}}),e.innerHTML=k.toHtml());h.bdc2sb&&(k=UE.htmlparser(e.innerHTML),k.traversal(function(a){if("text"==a.type){for(var b=a.data,e="",c=0;c<b.length;c++)var g=b.charCodeAt(c),e=65281<=g&&65373>=g?e+String.fromCharCode(b.charCodeAt(c)-65248):12288==g?e+String.fromCharCode(b.charCodeAt(c)-12288+32):e+b.charAt(c);a.data=e}}),
e.innerHTML=k.toHtml());b&&(b.html=e.innerHTML)}function a(){var a=e.getPreferences("autotypeset");p.extend(e.options.autotypeset,a)}this.setOpt({autotypeset:{mergeEmptyline:!0,removeClass:!0,removeEmptyline:!1,textAlign:"left",imageBlockLine:"center",pasteFilter:!1,clearFontSize:!1,clearFontFamily:!1,removeEmptyNode:!1,removeTagNames:p.extend({div:1},v.$removeEmpty),indent:!1,indentValue:"2em",bdc2sb:!1,tobdc:!1}});var e=this,h=e.options.autotypeset,g={selectTdClass:1,pagebreak:1,anchorclass:1},
l={li:1},k={div:1,p:1,blockquote:1,center:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,span:1},m;h&&(a(),h.pasteFilter&&e.addListener("beforepaste",b),e.commands.autotypeset={execCommand:function(){e.removeListener("beforepaste",b);h.pasteFilter&&e.addListener("beforepaste",b);b.call(e)}})};UE.plugin.register("autosubmit",function(){return{shortcutkey:{autosubmit:"ctrl+13"},commands:{autosubmit:{execCommand:function(){var d=f.findParentByTagName(this.iframe,"form",!1);d&&!1!==this.fireEvent("beforesubmit")&&(this.sync(),
d.submit())}}}}});UE.plugin.register("background",function(){function d(a){var b={};a=a.split(";");p.each(a,function(a){var e=a.indexOf(":"),c=p.trim(a.substr(0,e)).toLowerCase();c&&(b[c]=p.trim(a.substr(e+1)||""))});return b}function c(e){if(e){var c=[],g;for(g in e)e.hasOwnProperty(g)&&c.push(g+":"+e[g]+"; ");p.cssRule(a,c.length?"body{"+c.join("")+"}":"",b.document)}else p.cssRule(a,"",b.document)}var b=this,a="editor_background",e,h=/body[\s]*\{(.+)\}/i,g=b.hasContents;b.hasContents=function(){return b.queryCommandValue("background")?
!0:g.apply(b,arguments)};return{bindEvents:{getAllHtml:function(a,e){var c=this.body,g=f.getComputedStyle(c,"background-image"),h="",h=0<g.indexOf(b.options.imagePath)?g.substring(g.indexOf(b.options.imagePath),g.length-1).replace(/"|\(|\)/ig,""):"none"!=g?g.replace(/url\("?|"?\)/ig,""):"",g='<style type="text/css">body{',c={"background-color":f.getComputedStyle(c,"background-color")||"#ffffff","background-image":h?"url("+h+")":"","background-repeat":f.getComputedStyle(c,"background-repeat")||"",
"background-position":r.ie?f.getComputedStyle(c,"background-position-x")+" "+f.getComputedStyle(c,"background-position-y"):f.getComputedStyle(c,"background-position"),height:f.getComputedStyle(c,"height")},d;for(d in c)c.hasOwnProperty(d)&&(g+=d+":"+c[d]+"; ");e.push(g+"}</style> ")},aftersetcontent:function(){!1==e&&c()}},inputRule:function(a){e=!1;p.each(a.getNodesByTagName("p"),function(a){var b=a.getAttr("data-background");b&&(e=!0,c(d(b)),a.parentNode.removeChild(a))})},outputRule:function(b){var e=
(p.cssRule(a,this.document)||"").replace(/[\n\r]+/g,"").match(h);e&&b.appendChild(UE.uNode.createElement('<p style="display:none;" data-background="'+p.trim(e[1].replace(/"/g,"").replace(/[\s]+/g," "))+'"><br/></p>'))},commands:{background:{execCommand:function(a,b){c(b)},queryCommandValue:function(){var b=(p.cssRule(a,this.document)||"").replace(/[\n\r]+/g,"").match(h);return b?d(b[1]):null},notNeedUndo:!0}}}});UE.commands.imagefloat={execCommand:function(d,c){var b=this.selection.getRange();if(!b.collapsed){var a=
b.getClosedNode();if(a&&"IMG"==a.tagName)switch(c){case "left":case "right":case "none":for(var e=a.parentNode,h,g;v.$inline[e.tagName]||"A"==e.tagName;)e=e.parentNode;h=e;if("P"==h.tagName&&"center"==f.getStyle(h,"text-align")){if(!f.isBody(h)&&1==f.getChildCount(h,function(a){return!f.isBr(a)&&!f.isWhitespace(a)}))if(e=h.previousSibling,g=h.nextSibling,e&&g&&1==e.nodeType&&1==g.nodeType&&e.tagName==g.tagName&&f.isBlockElm(e)){for(e.appendChild(h.firstChild);g.firstChild;)e.appendChild(g.firstChild);
f.remove(h);f.remove(g)}else f.setStyle(h,"text-align","");b.selectNode(a).select()}f.setStyle(a,"float","none"==c?"":c);"none"==c&&f.removeAttributes(a,"align");break;case "center":if("center"!=this.queryCommandValue("imagefloat")){e=a.parentNode;f.setStyle(a,"float","");f.removeAttributes(a,"align");for(h=a;e&&1==f.getChildCount(e,function(a){return!f.isBr(a)&&!f.isWhitespace(a)})&&(v.$inline[e.tagName]||"A"==e.tagName);)h=e,e=e.parentNode;b.setStartBefore(h).setCursor(!1);e=this.document.createElement("div");
e.appendChild(h);f.setStyle(h,"float","");this.execCommand("insertHtml",'<p id="_img_parent_tmp" style="text-align:center">'+e.innerHTML+"</p>");h=this.document.getElementById("_img_parent_tmp");h.removeAttribute("id");h=h.firstChild;b.selectNode(h).select();(g=h.parentNode.nextSibling)&&f.isEmptyNode(g)&&f.remove(g)}}}},queryCommandValue:function(){var d=this.selection.getRange(),c;return d.collapsed?"none":(d=d.getClosedNode())&&1==d.nodeType&&"IMG"==d.tagName?(c=f.getComputedStyle(d,"float")||
d.getAttribute("align"),"none"==c&&(c="center"==f.getComputedStyle(d.parentNode,"text-align")?"center":c),{left:1,right:1,center:1}[c]?c:"none"):"none"},queryCommandState:function(){var d=this.selection.getRange();return d.collapsed?-1:(d=d.getClosedNode())&&1==d.nodeType&&"IMG"==d.tagName?0:-1}};UE.commands.insertimage={execCommand:function(d,c){c=p.isArray(c)?c:[c];if(c.length){var b=this.selection.getRange(),a=b.getClosedNode();if(!0!==this.fireEvent("beforeinsertimage",c)){if(!a||!/img/i.test(a.tagName)||
"edui-faked-video"==a.className&&-1==a.className.indexOf("edui-upload-video")||a.getAttribute("word_img")){var b=[],a="",e;e=c[0];if(1==c.length)a='<img src="'+e.src+'" '+(e._src?' _src="'+e._src+'" ':"")+(e.width?'width="'+e.width+'" ':"")+(e.height?' height="'+e.height+'" ':"")+("left"==e.floatStyle||"right"==e.floatStyle?' style="float:'+e.floatStyle+';"':"")+(e.title&&""!=e.title?' title="'+e.title+'"':"")+(e.border&&"0"!=e.border?' border="'+e.border+'"':"")+(e.alt&&""!=e.alt?' alt="'+e.alt+
'"':"")+(e.hspace&&"0"!=e.hspace?' hspace = "'+e.hspace+'"':"")+(e.vspace&&"0"!=e.vspace?' vspace = "'+e.vspace+'"':"")+"/>","center"==e.floatStyle&&(a='<p style="text-align: center">'+a+"</p>"),b.push(a);else for(var h=0;e=c[h++];)a="<p "+("center"==e.floatStyle?'style="text-align: center" ':"")+'><img src="'+e.src+'" '+(e.width?'width="'+e.width+'" ':"")+(e._src?' _src="'+e._src+'" ':"")+(e.height?' height="'+e.height+'" ':"")+' style="'+(e.floatStyle&&"center"!=e.floatStyle?"float:"+e.floatStyle+
";":"")+(e.border||"")+'" '+(e.title?' title="'+e.title+'"':"")+" /></p>",b.push(a);this.execCommand("insertHtml",b.join(""))}else e=c.shift(),h=e.floatStyle,delete e.floatStyle,f.setAttributes(a,e),this.execCommand("imagefloat",h),0<c.length&&(b.setStartAfter(a).setCursor(!1,!0),this.execCommand("insertimage",c));this.fireEvent("afterinsertimage",c)}}}};UE.plugins.justify=function(){var d=f.isBlockElm,c={left:1,right:1,center:1,justify:1},b=function(a,b){var c=a.createBookmark(),g=function(a){return 1==
a.nodeType?"br"!=a.tagName.toLowerCase()&&!f.isBookmarkNode(a):!f.isWhitespace(a)};a.enlarge(!0);for(var l=a.createBookmark(),k=f.getNextDomNode(l.start,!1,g),m=a.cloneRange(),n;k&&!(f.getPosition(k,l.end)&f.POSITION_FOLLOWING);)if(3!=k.nodeType&&d(k))k=f.getNextDomNode(k,!0,g);else{for(m.setStartBefore(k);k&&k!==l.end&&!d(k);)n=k,k=f.getNextDomNode(k,!1,null,function(a){return!d(a)});m.setEndAfter(n);k=m.getCommonAncestor();if(!f.isBody(k)&&d(k))f.setStyles(k,p.isString(b)?{"text-align":b}:b);else{k=
a.document.createElement("p");f.setStyles(k,p.isString(b)?{"text-align":b}:b);var q=m.extractContents();k.appendChild(q);m.insertNode(k)}k=f.getNextDomNode(k,!1,g)}return a.moveToBookmark(l).moveToBookmark(c)};UE.commands.justify={execCommand:function(a,e){var c=this.selection.getRange(),g;c.collapsed&&(g=this.document.createTextNode("p"),c.insertNode(g));b(c,e);g&&(c.setStartBefore(g).collapse(!0),f.remove(g));c.select();return!0},queryCommandValue:function(){var a=this.selection.getStart(),a=f.getComputedStyle(a,
"text-align");return c[a]?a:"left"},queryCommandState:function(){var a=this.selection.getStart();return a&&f.findParentByTagName(a,["td","th","caption"],!0)?-1:0}}};UE.plugins.font=function(){function d(a){for(var b;b=a.parentNode;)if("SPAN"==b.tagName&&1==f.getChildCount(b,function(a){return!f.isBookmarkNode(a)&&!f.isBr(a)}))b.style.cssText+=a.style.cssText,f.remove(a,!0),a=b;else break}function c(a,b,c){if(h[b]&&(a.adjustmentBoundary(),!a.collapsed&&1==a.startContainer.nodeType)){var e=a.startContainer.childNodes[a.startOffset];
if(e&&f.isTagNode(e,"span")){var g=a.createBookmark();p.each(f.getElementsByTagName(e,"span"),function(a){!a.parentNode||f.isBookmarkNode(a)||"backcolor"==b&&f.getComputedStyle(a,"background-color").toLowerCase()===c||(f.removeStyle(a,h[b]),0==a.style.cssText.replace(/^\s+$/,"").length&&f.remove(a,!0))});a.moveToBookmark(g)}}}function b(a,b,e){var g=a.collapsed,h=a.createBookmark();if(g)for(g=h.start.parentNode;v.$inline[g.tagName];)g=g.parentNode;else g=f.getCommonAncestor(h.start,h.end);p.each(f.getElementsByTagName(g,
"span"),function(a){if(a.parentNode&&!f.isBookmarkNode(a))if(/\s*border\s*:\s*none;?\s*/i.test(a.style.cssText))/^\s*border\s*:\s*none;?\s*$/.test(a.style.cssText)?f.remove(a,!0):f.removeStyle(a,"border");else{/border/i.test(a.style.cssText)&&"SPAN"==a.parentNode.tagName&&/border/i.test(a.parentNode.style.cssText)&&(a.style.cssText=a.style.cssText.replace(/border[^:]*:[^;]+;?/gi,""));if("fontborder"!=b||"none"!=e)for(var c=a.nextSibling;c&&1==c.nodeType&&"SPAN"==c.tagName;){if(f.isBookmarkNode(c)&&
"fontborder"==b)a.appendChild(c);else if(c.style.cssText==a.style.cssText&&(f.moveChild(c,a),f.remove(c)),a.nextSibling===c)break;c=a.nextSibling}d(a);r.ie&&8<r.version&&(c=f.findParent(a,function(a){return"SPAN"==a.tagName&&/background-color/.test(a.style.cssText)}))&&!/background-color/.test(a.style.cssText)&&(a.style.backgroundColor=c.style.backgroundColor)}});a.moveToBookmark(h);c(a,b,e)}var a={forecolor:"color",backcolor:"background-color",fontsize:"font-size",fontfamily:"font-family",underline:"text-decoration",
strikethrough:"text-decoration",fontborder:"border"},e={underline:1,strikethrough:1,fontborder:1},h={forecolor:"color",backcolor:"background-color",fontsize:"font-size",fontfamily:"font-family"};this.setOpt({fontfamily:[{name:"songti",val:"\u5b8b\u4f53,SimSun"},{name:"yahei",val:"\u5fae\u8f6f\u96c5\u9ed1,Microsoft YaHei"},{name:"kaiti",val:"\u6977\u4f53,\u6977\u4f53_GB2312, SimKai"},{name:"heiti",val:"\u9ed1\u4f53, SimHei"},{name:"lishu",val:"\u96b6\u4e66, SimLi"},{name:"andaleMono",val:"andale mono"},
{name:"arial",val:"arial, helvetica,sans-serif"},{name:"arialBlack",val:"arial black,avant garde"},{name:"comicSansMs",val:"comic sans ms"},{name:"impact",val:"impact,chicago"},{name:"timesNewRoman",val:"times new roman"}],fontsize:[10,11,12,14,16,18,20,24,36]});this.addInputRule(function(a){p.each(a.getNodesByTagName("u s del font strike"),function(a){if("font"==a.tagName){var b=[],c;for(c in a.attrs)switch(c){case "size":b.push("font-size:"+({1:"10",2:"12",3:"16",4:"18",5:"24",6:"32",7:"48"}[a.attrs[c]]||
a.attrs[c])+"px");break;case "color":b.push("color:"+a.attrs[c]);break;case "face":b.push("font-family:"+a.attrs[c]);break;case "style":b.push(a.attrs[c])}a.attrs={style:b.join(";")}}else b="u"==a.tagName?"underline":"line-through",a.attrs={style:(a.getAttr("style")||"")+"text-decoration:"+b+";"};a.tagName="span"})});for(var g in a)(function(a,c){UE.commands[a]={execCommand:function(g,h){h=h||(this.queryCommandState(g)?"none":"underline"==g?"underline":"fontborder"==g?"1px solid #000":"line-through");
var d=this.selection.getRange(),t;if("default"==h)d.collapsed&&(t=this.document.createTextNode("font"),d.insertNode(t).select()),this.execCommand("removeFormat","span,a",c),t&&(d.setStartBefore(t).collapse(!0),f.remove(t)),b(d,g,h),d.select();else if(d.collapsed){var w=f.findParentByTagName(d.startContainer,"span",!0);t=this.document.createTextNode("font");if(!w||w.children.length||w[r.ie?"innerText":"textContent"].replace(P,"").length){d.insertNode(t);d.selectNode(t).select();w=d.document.createElement("span");
if(e[a]){if(f.findParentByTagName(t,"a",!0)){d.setStartBefore(t).setCursor();f.remove(t);return}this.execCommand("removeFormat","span,a",c)}w.style.cssText=c+":"+h;t.parentNode.insertBefore(w,t);if(!r.ie||r.ie&&9==r.version)for(var y=w.parentNode;!f.isBlockElm(y);)"SPAN"==y.tagName&&(w.style.cssText=y.style.cssText+";"+w.style.cssText),y=y.parentNode;ma?setTimeout(function(){d.setStart(w,0).collapse(!0);b(d,g,h);d.select()}):(d.setStart(w,0).collapse(!0),b(d,g,h),d.select())}else d.insertNode(t),
e[a]&&(d.selectNode(t).select(),this.execCommand("removeFormat","span,a",c,null),w=f.findParentByTagName(t,"span",!0),d.setStartBefore(t)),w&&(w.style.cssText+=";"+c+":"+h),d.collapse(!0).select();f.remove(t)}else e[a]&&this.queryCommandValue(a)&&this.execCommand("removeFormat","span,a",c),d=this.selection.getRange(),d.applyInlineStyle("span",{style:c+":"+h}),b(d,g,h),d.select();return!0},queryCommandValue:function(a){var b=this.selection.getStart();if("underline"==a||"strikethrough"==a){for(var e=
b;e&&!f.isBlockElm(e)&&!f.isBody(e);){if(1==e.nodeType&&(a=f.getComputedStyle(e,c),"none"!=a))return a;e=e.parentNode}return"none"}if("fontborder"==a){for(a=b;a&&v.$inline[a.tagName];){if((e=f.getComputedStyle(a,"border"))&&/1px/.test(e)&&/solid/.test(e))return e;a=a.parentNode}return""}return"FontSize"==a?(e=f.getComputedStyle(b,c),(a=/^([\d\.]+)(\w+)$/.exec(e))?Math.floor(a[1])+a[2]:e):f.getComputedStyle(b,c)},queryCommandState:function(a){if(!e[a])return 0;var b=this.queryCommandValue(a);return"fontborder"==
a?/1px/.test(b)&&/solid/.test(b):"underline"==a?/underline/.test(b):/line\-through/.test(b)}}})(g,a[g])};UE.plugins.link=function(){function d(c){var b=c.startContainer,a=c.endContainer;(b=f.findParentByTagName(b,"a",!0))&&c.setStartBefore(b);(a=f.findParentByTagName(a,"a",!0))&&c.setEndAfter(a)}UE.commands.unlink={execCommand:function(){var c=this.selection.getRange(),b;if(!c.collapsed||f.findParentByTagName(c.startContainer,"a",!0))b=c.createBookmark(),d(c),c.removeInlineStyle("a").moveToBookmark(b).select()},
queryCommandState:function(){return!this.highlight&&this.queryCommandValue("link")?0:-1}};UE.commands.link={execCommand:function(c,b){var a;b._href&&(b._href=p.unhtml(b._href,/[<">]/g));b.href&&(b.href=p.unhtml(b.href,/[<">]/g));b.textValue&&(b.textValue=p.unhtml(b.textValue,/[<">]/g));var e=a=this.selection.getRange(),h=e.cloneRange(),g=this.queryCommandValue("link");d(e=e.adjustmentBoundary());var l=e.startContainer;1==l.nodeType&&g&&(l=l.childNodes[e.startOffset])&&1==l.nodeType&&"A"==l.tagName&&
/^(?:https?|ftp|file)\s*:\s*\/\//.test(l[r.ie?"innerText":"textContent"])&&(l[r.ie?"innerText":"textContent"]=p.html(b.textValue||b.href));if(!h.collapsed||g)e.removeInlineStyle("a"),h=e.cloneRange();if(h.collapsed){var g=e.document.createElement("a"),k="";b.textValue?(k=p.html(b.textValue),delete b.textValue):k=p.html(b.href);f.setAttributes(g,b);(l=f.findParentByTagName(h.startContainer,"a",!0))&&f.isInNodeEndBoundary(h,l)&&e.setStartAfter(l).collapse(!0);g[r.ie?"innerText":"textContent"]=k;e.insertNode(g).selectNode(g)}else e.applyInlineStyle("a",
b);a.collapse().select(!0)},queryCommandValue:function(){var c=this.selection.getRange(),b;if(c.collapsed){if(b=c.startContainer,(b=1==b.nodeType?b:b.parentNode)&&(b=f.findParentByTagName(b,"a",!0))&&!f.isInNodeEndBoundary(c,b))return b}else{c.shrinkBoundary();var a=3!=c.startContainer.nodeType&&c.startContainer.childNodes[c.startOffset]?c.startContainer.childNodes[c.startOffset]:c.startContainer,e=3==c.endContainer.nodeType||0==c.endOffset?c.endContainer:c.endContainer.childNodes[c.endOffset-1],
c=c.getCommonAncestor();b=f.findParentByTagName(c,"a",!0);if(!b&&1==c.nodeType)for(var c=c.getElementsByTagName("a"),h,g,d=0,k;k=c[d++];)if(h=f.getPosition(k,a),g=f.getPosition(k,e),(h&f.POSITION_FOLLOWING||h&f.POSITION_CONTAINS)&&(g&f.POSITION_PRECEDING||g&f.POSITION_CONTAINS)){b=k;break}return b}},queryCommandState:function(){var c=this.selection.getRange().getClosedNode();return!c||"edui-faked-video"!=c.className&&-1==c.className.indexOf("edui-upload-video")?0:-1}}};UE.plugins.insertframe=function(){var d=
this;d.addListener("selectionchange",function(){d._iframe&&delete d._iframe})};UE.commands.scrawl={queryCommandState:function(){return r.ie&&8>=r.version?-1:0}};UE.plugins.removeformat=function(){this.setOpt({removeFormatTags:"b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var",removeFormatAttributes:"class,style,lang,width,height,align,hspace,valign"});this.commands.removeformat={execCommand:function(d,c,b,a,e){function h(a){if(3==a.nodeType||"span"!=a.tagName.toLowerCase())return 0;
if(r.ie){var b=a.attributes;if(b.length){a=0;for(var c=b.length;a<c;a++)if(b[a].specified)return 0;return 1}}return!a.attributes.length}var g=RegExp("^(?:"+(c||this.options.removeFormatTags).replace(/,/g,"|")+")$","i"),l=b?[]:(a||this.options.removeFormatAttributes).split(",");d=new L.Range(this.document);var k,m,n=function(a){return 1==a.nodeType};d=this.selection.getRange();(function(a){var c=a.createBookmark();a.collapsed&&a.enlarge(!0);if(!e){var d=f.findParentByTagName(a.startContainer,"a",!0);
d&&a.setStartBefore(d);(d=f.findParentByTagName(a.endContainer,"a",!0))&&a.setEndAfter(d)}k=a.createBookmark();for(d=k.start;(m=d.parentNode)&&!f.isBlockElm(m);)f.breakParent(d,m),f.clearEmptySibling(d);if(k.end){for(d=k.end;(m=d.parentNode)&&!f.isBlockElm(m);)f.breakParent(d,m),f.clearEmptySibling(d);for(var d=f.getNextDomNode(k.start,!1,n),y;d&&d!=k.end;)y=f.getNextDomNode(d,!0,n),v.$empty[d.tagName.toLowerCase()]||f.isBookmarkNode(d)||(g.test(d.tagName)?b?(f.removeStyle(d,b),h(d)&&"text-decoration"!=
b&&f.remove(d,!0)):f.remove(d,!0):v.$tableContent[d.tagName]||v.$list[d.tagName]||(f.removeAttributes(d,l),h(d)&&f.remove(d,!0))),d=y}d=k.start.parentNode;!f.isBlockElm(d)||v.$tableContent[d.tagName]||v.$list[d.tagName]||f.removeAttributes(d,l);d=k.end.parentNode;k.end&&f.isBlockElm(d)&&!v.$tableContent[d.tagName]&&!v.$list[d.tagName]&&f.removeAttributes(d,l);a.moveToBookmark(k).moveToBookmark(c);d=a.startContainer;for(y=a.collapsed;1==d.nodeType&&f.isEmptyNode(d)&&v.$removeEmpty[d.tagName];)c=d.parentNode,
a.setStartBefore(d),a.startContainer===a.endContainer&&a.endOffset--,f.remove(d),d=c;if(!y)for(d=a.endContainer;1==d.nodeType&&f.isEmptyNode(d)&&v.$removeEmpty[d.tagName];)c=d.parentNode,a.setEndBefore(d),f.remove(d),d=c})(d);d.select()}}};UE.plugins.blockquote=function(){this.commands.blockquote={execCommand:function(d,c){var b=this.selection.getRange(),a=f.filterNodeList(this.selection.getStartElementPath(),"blockquote"),e=v.blockquote,h=b.createBookmark();if(a){var e=b.startContainer,e=f.isBlockElm(e)?
e:f.findParent(e,function(a){return f.isBlockElm(a)}),g=b.endContainer,g=f.isBlockElm(g)?g:f.findParent(g,function(a){return f.isBlockElm(a)}),e=f.findParentByTagName(e,"li",!0)||e,g=f.findParentByTagName(g,"li",!0)||g;"LI"==e.tagName||"TD"==e.tagName||e===a||f.isBody(e)?f.remove(a,!0):f.breakParent(e,a);e!==g&&(a=f.findParentByTagName(g,"blockquote"))&&("LI"==g.tagName||"TD"==g.tagName||f.isBody(g)?a.parentNode&&f.remove(a,!0):f.breakParent(g,a));for(var l=f.getElementsByTagName(this.document,"blockquote"),
a=0,k;k=l[a++];)k.childNodes.length?f.getPosition(k,e)&f.POSITION_FOLLOWING&&f.getPosition(k,g)&f.POSITION_PRECEDING&&f.remove(k,!0):f.remove(k)}else{a=b.cloneRange();l=g=1==a.startContainer.nodeType?a.startContainer:a.startContainer.parentNode;for(k=1;;){if(f.isBody(g)){l!==g?b.collapsed?(a.selectNode(l),k=0):a.setStartBefore(l):a.setStart(g,0);break}if(!e[g.tagName]){b.collapsed?a.selectNode(l):a.setStartBefore(l);break}l=g;g=g.parentNode}if(k)for(l=g=g=1==a.endContainer.nodeType?a.endContainer:
a.endContainer.parentNode;;){if(f.isBody(g)){l!==g?a.setEndAfter(l):a.setEnd(g,g.childNodes.length);break}if(!e[g.tagName]){a.setEndAfter(l);break}l=g;g=g.parentNode}g=b.document.createElement("blockquote");f.setAttributes(g,c);g.appendChild(a.extractContents());a.insertNode(g);e=f.getElementsByTagName(g,"blockquote");for(a=0;g=e[a++];)g.parentNode&&f.remove(g,!0)}b.moveToBookmark(h).select()},queryCommandState:function(){return f.filterNodeList(this.selection.getStartElementPath(),"blockquote")?
1:0}}};UE.commands.touppercase=UE.commands.tolowercase={execCommand:function(d){var c=this.selection.getRange();if(c.collapsed)return c;for(var b=c.createBookmark(),a=b.end,e=function(a){return!f.isBr(a)&&!f.isWhitespace(a)},h=f.getNextDomNode(b.start,!1,e);h&&f.getPosition(h,a)&f.POSITION_PRECEDING&&(3==h.nodeType&&(h.nodeValue=h.nodeValue["touppercase"==d?"toUpperCase":"toLowerCase"]()),h=f.getNextDomNode(h,!0,e),h!==a););c.moveToBookmark(b).select()}};UE.commands.indent={execCommand:function(){var d=
this.queryCommandState("indent")?"0em":this.options.indentValue||"2em";this.execCommand("Paragraph","p",{style:"text-indent:"+d})},queryCommandState:function(){var d=f.filterNodeList(this.selection.getStartElementPath(),"p h1 h2 h3 h4 h5 h6");return d&&d.style.textIndent&&parseInt(d.style.textIndent)?1:0}};UE.commands.print={execCommand:function(){this.window.print()},notNeedUndo:1};UE.commands.preview={execCommand:function(){var d=window.open("","_blank","").document;d.open();d.write('<!DOCTYPE html><html><head><meta charset="utf-8"/><script src="'+
this.options.UEDITOR_HOME_URL+"ueditor.parse.js\">\x3c/script><script>setTimeout(function(){uParse('div',{rootPath: '"+this.options.UEDITOR_HOME_URL+"'})},300)\x3c/script></head><body><div>"+this.getContent(null,null,!0)+"</div></body></html>");d.close()},notNeedUndo:1};UE.plugins.selectall=function(){this.commands.selectall={execCommand:function(){var d=this.body,c=this.selection.getRange();c.selectNodeContents(d);f.isEmptyBlock(d)&&(r.opera&&d.firstChild&&1==d.firstChild.nodeType&&c.setStartAtFirst(d.firstChild),
c.collapse(!0));c.select(!0)},notNeedUndo:1};this.addshortcutkey({selectAll:"ctrl+65"})};UE.plugins.paragraph=function(){var d=f.isBlockElm,c=["TD","LI","PRE"],b=function(a,b,h,g){var l=a.createBookmark(),k=function(a){return 1==a.nodeType?"br"!=a.tagName.toLowerCase()&&!f.isBookmarkNode(a):!f.isWhitespace(a)},m;a.enlarge(!0);var n=a.createBookmark();m=f.getNextDomNode(n.start,!1,k);for(var q=a.cloneRange(),t;m&&!(f.getPosition(m,n.end)&f.POSITION_FOLLOWING);)if(3!=m.nodeType&&d(m))m=f.getNextDomNode(m,
!0,k);else{for(q.setStartBefore(m);m&&m!==n.end&&!d(m);)t=m,m=f.getNextDomNode(m,!1,null,function(a){return!d(a)});q.setEndAfter(t);m=a.document.createElement(b);h&&(f.setAttributes(m,h),g&&"customstyle"==g&&h.style&&(m.style.cssText=h.style));m.appendChild(q.extractContents());f.isEmptyNode(m)&&f.fillChar(a.document,m);q.insertNode(m);var w=m.parentNode;d(w)&&!f.isBody(m.parentNode)&&-1==p.indexOf(c,w.tagName)&&(g&&"customstyle"==g||(w.getAttribute("dir")&&m.setAttribute("dir",w.getAttribute("dir")),
w.style.cssText&&(m.style.cssText=w.style.cssText+";"+m.style.cssText),w.style.textAlign&&!m.style.textAlign&&(m.style.textAlign=w.style.textAlign),w.style.textIndent&&!m.style.textIndent&&(m.style.textIndent=w.style.textIndent),w.style.padding&&!m.style.padding&&(m.style.padding=w.style.padding)),h&&/h\d/i.test(w.tagName)&&!/h\d/i.test(m.tagName)?(f.setAttributes(w,h),g&&"customstyle"==g&&h.style&&(w.style.cssText=h.style),f.remove(m,!0),m=w):f.remove(m.parentNode,!0));m=-1!=p.indexOf(c,w.tagName)?
w:m;m=f.getNextDomNode(m,!1,k)}return a.moveToBookmark(n).moveToBookmark(l)};this.setOpt("paragraph",{p:"",h1:"",h2:"",h3:"",h4:"",h5:"",h6:""});this.commands.paragraph={execCommand:function(a,c,h,g){a=this.selection.getRange();if(a.collapsed){var d=this.document.createTextNode("p");a.insertNode(d);if(r.ie){var k=d.previousSibling;k&&f.isWhitespace(k)&&f.remove(k);(k=d.nextSibling)&&f.isWhitespace(k)&&f.remove(k)}}a=b(a,c,h,g);d&&(a.setStartBefore(d).collapse(!0),pN=d.parentNode,f.remove(d),f.isBlockElm(pN)&&
f.isEmptyNode(pN)&&f.fillNode(this.document,pN));r.gecko&&a.collapsed&&1==a.startContainer.nodeType&&(h=a.startContainer.childNodes[a.startOffset])&&1==h.nodeType&&h.tagName.toLowerCase()==c&&a.setStart(h,0).collapse(!0);a.select();return!0},queryCommandValue:function(){var a=f.filterNodeList(this.selection.getStartElementPath(),"p h1 h2 h3 h4 h5 h6");return a?a.tagName.toLowerCase():""}}};(function(){var d=f.isBlockElm,c=function(a){return f.filterNodeList(a.selection.getStartElementPath(),function(a){return a&&
1==a.nodeType&&a.getAttribute("dir")})},b=function(a,b,h){var g=function(a){return 1==a.nodeType?!f.isBookmarkNode(a):!f.isWhitespace(a)};if((b=c(b))&&a.collapsed)return b.setAttribute("dir",h),a;b=a.createBookmark();a.enlarge(!0);for(var l=a.createBookmark(),k=f.getNextDomNode(l.start,!1,g),m=a.cloneRange(),n;k&&!(f.getPosition(k,l.end)&f.POSITION_FOLLOWING);)if(3!=k.nodeType&&d(k))k=f.getNextDomNode(k,!0,g);else{for(m.setStartBefore(k);k&&k!==l.end&&!d(k);)n=k,k=f.getNextDomNode(k,!1,null,function(a){return!d(a)});
m.setEndAfter(n);k=m.getCommonAncestor();if(!f.isBody(k)&&d(k))k.setAttribute("dir",h);else{k=a.document.createElement("p");k.setAttribute("dir",h);var q=m.extractContents();k.appendChild(q);m.insertNode(k)}k=f.getNextDomNode(k,!1,g)}return a.moveToBookmark(l).moveToBookmark(b)};UE.commands.directionality={execCommand:function(a,c){var h=this.selection.getRange();if(h.collapsed){var g=this.document.createTextNode("d");h.insertNode(g)}b(h,this,c);g&&(h.setStartBefore(g).collapse(!0),f.remove(g));h.select();
return!0},queryCommandValue:function(){var a=c(this);return a?a.getAttribute("dir"):"ltr"}}})();UE.plugins.horizontal=function(){this.commands.horizontal={execCommand:function(d){if(-1!==this.queryCommandState(d)){this.execCommand("insertHtml","<hr>");d=this.selection.getRange();var c=d.startContainer;if(1==c.nodeType&&!c.childNodes[d.startOffset]){var b;(b=c.childNodes[d.startOffset-1])&&1==b.nodeType&&"HR"==b.tagName&&("p"==this.options.enterTag?(b=this.document.createElement("p"),d.insertNode(b),
d.setStart(b,0).setCursor()):(b=this.document.createElement("br"),d.insertNode(b),d.setStartBefore(b).setCursor()))}return!0}},queryCommandState:function(){return f.filterNodeList(this.selection.getStartElementPath(),"table")?-1:0}};this.addListener("delkeydown",function(d,c){var b=this.selection.getRange();b.txtToElmBoundary(!0);if(f.isStartInblock(b)){var a=b.startContainer.previousSibling;if(a&&f.isTagNode(a,"hr"))return f.remove(a),b.select(),f.preventDefault(c),!0}})};UE.commands.time=UE.commands.date=
{execCommand:function(d,c){function b(a,b){var c=("0"+a.getHours()).slice(-2),e=("0"+a.getMinutes()).slice(-2),d=("0"+a.getSeconds()).slice(-2);return(b||"hh:ii:ss").replace(/hh/ig,c).replace(/ii/ig,e).replace(/ss/ig,d)}function a(a,b){var c=("000"+a.getFullYear()).slice(-4),e=c.slice(-2),d=("0"+(a.getMonth()+1)).slice(-2),f=("0"+a.getDate()).slice(-2);return(b||"yyyy-mm-dd").replace(/yyyy/ig,c).replace(/yy/ig,e).replace(/mm/ig,d).replace(/dd/ig,f)}var e=new Date;this.execCommand("insertHtml","time"==
d?b(e,c):a(e,c))}};UE.plugins.rowspacing=function(){this.setOpt({rowspacingtop:["5","10","15","20","25"],rowspacingbottom:["5","10","15","20","25"]});this.commands.rowspacing={execCommand:function(d,c,b){this.execCommand("paragraph","p",{style:"margin-"+b+":"+c+"px"});return!0},queryCommandValue:function(d,c){var b=f.filterNodeList(this.selection.getStartElementPath(),function(a){return f.isBlockElm(a)});return b?(b=f.getComputedStyle(b,"margin-"+c).replace(/[^\d]/g,""))?b:0:0}}};UE.plugins.lineheight=
function(){this.setOpt({lineheight:"1 1.5 1.75 2 3 4 5".split(" ")});this.commands.lineheight={execCommand:function(d,c){this.execCommand("paragraph","p",{style:"line-height:"+("1"==c?"normal":c+"em")});return!0},queryCommandValue:function(){var d=f.filterNodeList(this.selection.getStartElementPath(),function(c){return f.isBlockElm(c)});if(d)return d=f.getComputedStyle(d,"line-height"),"normal"==d?1:d.replace(/[^\d.]*/ig,"")}}};UE.plugins.insertcode=function(){var d=this;d.ready(function(){p.cssRule("pre",
"pre{margin:.5em 0;padding:.4em .6em;border-radius:8px;background:#f8f8f8;}",d.document)});d.setOpt("insertcode",{as3:"ActionScript3",bash:"Bash/Shell",cpp:"C/C++",css:"Css",cf:"CodeFunction","c#":"C#",delphi:"Delphi",diff:"Diff",erlang:"Erlang",groovy:"Groovy",html:"Html",java:"Java",jfx:"JavaFx",js:"Javascript",pl:"Perl",php:"Php",plain:"Plain Text",ps:"PowerShell",python:"Python",ruby:"Ruby",scala:"Scala",sql:"Sql",vb:"Vb",xml:"Xml"});d.commands.insertcode={execCommand:function(c,b){var a=this.selection.getRange(),
e=f.findParentByTagName(a.startContainer,"pre",!0);if(e)e.className="brush:"+b+";toolbar:false;";else{var h="";a.collapsed?h=r.ie&&r.ie11below?8>=r.version?"&nbsp;":"":"<br/>":(e=a.extractContents(),a=this.document.createElement("div"),a.appendChild(e),p.each(UE.filterNode(UE.htmlparser(a.innerHTML.replace(/[\r\t]/g,"")),this.options.filterTxtRules).children,function(a){r.ie&&r.ie11below&&8<r.version?("element"==a.type?"br"==a.tagName?h+="\n":v.$empty[a.tagName]||(p.each(a.children,function(b){"element"==
b.type?"br"==b.tagName?h+="\n":v.$empty[a.tagName]||(h+=b.innerText()):h+=b.data}),/\n$/.test(h)||(h+="\n")):h+=a.data+"\n",!a.nextSibling()&&/\n$/.test(h)&&(h=h.replace(/\n$/,""))):r.ie&&r.ie11below?("element"==a.type?"br"==a.tagName?h+="<br>":v.$empty[a.tagName]||(p.each(a.children,function(b){"element"==b.type?"br"==b.tagName?h+="<br>":v.$empty[a.tagName]||(h+=b.innerText()):h+=b.data}),/br>$/.test(h)||(h+="<br>")):h+=a.data+"<br>",!a.nextSibling()&&/<br>$/.test(h)&&(h=h.replace(/<br>$/,""))):
(h+="element"==a.type?v.$empty[a.tagName]?"":a.innerText():a.data,!/br\/?\s*>$/.test(h)&&a.nextSibling()&&(h+="<br>"))}));this.execCommand("inserthtml",'<pre id="coder"class="brush:'+b+';toolbar:false">'+h+"</pre>",!0);e=this.document.getElementById("coder");f.removeAttributes(e,"id");(a=e.previousSibling)&&(3==a.nodeType&&1==a.nodeValue.length&&r.ie&&6==r.version||f.isEmptyBlock(a))&&f.remove(a);a=this.selection.getRange();f.isEmptyBlock(e)?a.setStart(e,0).setCursor(!1,!0):a.selectNodeContents(e).select()}},
queryCommandValue:function(){var c=this.selection.getStartElementPath(),b="";p.each(c,function(a){if("PRE"==a.nodeName)return b=(a=a.className.match(/brush:([^;]+)/))&&a[1]?a[1]:"",!1});return b}};d.addInputRule(function(c){p.each(c.getNodesByTagName("pre"),function(b){var a=b.getNodesByTagName("br");a.length?r.ie&&r.ie11below&&8<r.version&&p.each(a,function(a){var b=UE.uNode.createText("\n");a.parentNode.insertBefore(b,a);a.parentNode.removeChild(a)}):r.ie&&r.ie11below&&8<r.version||(a=b.innerText().split(/\n/),
b.innerHTML(""),p.each(a,function(a){a.length&&b.appendChild(UE.uNode.createText(a));b.appendChild(UE.uNode.createElement("br"))}))})});d.addOutputRule(function(c){p.each(c.getNodesByTagName("pre"),function(b){var a="";p.each(b.children,function(b){a="text"==b.type?a+b.data.replace(/[ ]/g,"&nbsp;").replace(/\n$/,""):"br"==b.tagName?a+"\n":a+(v.$empty[b.tagName]?b.innerText():"")});b.innerText(a.replace(/(&nbsp;|\n)+$/,""))})});d.notNeedCodeQuery={help:1,undo:1,redo:1,source:1,print:1,searchreplace:1,
fullscreen:1,preview:1,insertparagraph:1,elementpath:1,insertcode:1,inserthtml:1,selectall:1};d.queryCommandState=function(c){return!this.notNeedCodeQuery[c.toLowerCase()]&&this.selection&&this.queryCommandValue("insertcode")?-1:UE.Editor.prototype.queryCommandState.apply(this,arguments)};d.addListener("beforeenterkeydown",function(){var c=d.selection.getRange(),b=f.findParentByTagName(c.startContainer,"pre",!0);if(b){d.fireEvent("saveScene");c.collapsed||c.deleteContents();if(!r.ie||r.ie9above){b=
d.document.createElement("br");c.insertNode(b).setStartAfter(b).collapse(!0);b.nextSibling||r.ie&&!(10<r.version)?c.setStartAfter(b):c.insertNode(b.cloneNode(!1));for(var b=b.previousSibling,a;b;)if(a=b,b=b.previousSibling,!b||"BR"==b.nodeName){b=a;break}if(b){for(a="";b&&"BR"!=b.nodeName&&RegExp("^[\\s"+f.fillChar+"]*$").test(b.nodeValue);)a+=b.nodeValue,b=b.nextSibling;"BR"!=b.nodeName&&(b=b.nodeValue.match(RegExp("^([\\s"+f.fillChar+"]+)")))&&b[1]&&(a+=b[1]);a&&(a=d.document.createTextNode(a),
c.insertNode(a).setStartAfter(a))}c.collapse(!0).select(!0)}else if(8<r.version)if(b=d.document.createTextNode("\n"),a=c.startContainer,0==c.startOffset){if(a.previousSibling){c.insertNode(b);var e=d.document.createTextNode(" ");c.setStartAfter(b).insertNode(e).setStart(e,0).collapse(!0).select(!0)}}else c.insertNode(b).setStartAfter(b),e=d.document.createTextNode(" "),(a=c.startContainer.childNodes[c.startOffset])&&!/^\n/.test(a.nodeValue)&&c.setStartBefore(b),c.insertNode(e).setStart(e,0).collapse(!0).select(!0);
else{b=d.document.createElement("br");c.insertNode(b);c.insertNode(d.document.createTextNode(f.fillChar));c.setStartAfter(b);for(b=b.previousSibling;b;)if(a=b,b=b.previousSibling,!b||"BR"==b.nodeName){b=a;break}if(b){for(a="";b&&"BR"!=b.nodeName&&RegExp("^[ "+f.fillChar+"]*$").test(b.nodeValue);)a+=b.nodeValue,b=b.nextSibling;"BR"!=b.nodeName&&(b=b.nodeValue.match(RegExp("^([ "+f.fillChar+"]+)")))&&b[1]&&(a+=b[1]);a=d.document.createTextNode(a);c.insertNode(a).setStartAfter(a)}c.collapse(!0).select()}d.fireEvent("saveScene");
return!0}});d.addListener("tabkeydown",function(c,b){var a=d.selection.getRange(),e=f.findParentByTagName(a.startContainer,"pre",!0);if(e){d.fireEvent("saveScene");if(!b.shiftKey)if(a.collapsed)e=d.document.createTextNode("    "),a.insertNode(e).setStartAfter(e).collapse(!0).select(!0);else{for(var h=a.createBookmark(),g=h.start.previousSibling;g;){if(e.firstChild===g&&!f.isBr(g)){e.insertBefore(d.document.createTextNode("    "),g);break}if(f.isBr(g)){e.insertBefore(d.document.createTextNode("    "),
g.nextSibling);break}g=g.previousSibling}var l=h.end,g=h.start.nextSibling;for(e.firstChild===h.start&&e.insertBefore(d.document.createTextNode("    "),g.nextSibling);g&&g!==l;){if(f.isBr(g)&&g.nextSibling){if(g.nextSibling===l)break;e.insertBefore(d.document.createTextNode("    "),g.nextSibling)}g=g.nextSibling}a.moveToBookmark(h).select()}d.fireEvent("saveScene");return!0}});d.addListener("beforeinserthtml",function(c,b){var a=this,e=a.selection.getRange();if(f.findParentByTagName(e.startContainer,
"pre",!0)){e.collapsed||e.deleteContents();var h="";if(r.ie&&8<r.version){p.each(UE.filterNode(UE.htmlparser(b),a.options.filterTxtRules).children,function(a){"element"==a.type?"br"==a.tagName?h+="\n":v.$empty[a.tagName]||(p.each(a.children,function(b){"element"==b.type?"br"==b.tagName?h+="\n":v.$empty[a.tagName]||(h+=b.innerText()):h+=b.data}),/\n$/.test(h)||(h+="\n")):h+=a.data+"\n";!a.nextSibling()&&/\n$/.test(h)&&(h=h.replace(/\n$/,""))});var g=a.document.createTextNode(p.html(h.replace(/&nbsp;/g,
" ")));e.insertNode(g).selectNode(g).select()}else{var d=a.document.createDocumentFragment();p.each(UE.filterNode(UE.htmlparser(b),a.options.filterTxtRules).children,function(b){"element"==b.type?"br"==b.tagName?d.appendChild(a.document.createElement("br")):v.$empty[b.tagName]||(p.each(b.children,function(c){"element"==c.type?"br"==c.tagName?d.appendChild(a.document.createElement("br")):v.$empty[b.tagName]||d.appendChild(a.document.createTextNode(p.html(c.innerText().replace(/&nbsp;/g," ")))):d.appendChild(a.document.createTextNode(p.html(c.data.replace(/&nbsp;/g,
" "))))}),"BR"!=d.lastChild.nodeName&&d.appendChild(a.document.createElement("br"))):d.appendChild(a.document.createTextNode(p.html(b.data.replace(/&nbsp;/g," "))));b.nextSibling()||"BR"!=d.lastChild.nodeName||d.removeChild(d.lastChild)});e.insertNode(d).select()}return!0}});d.addListener("keydown",function(c,b){if(40==(b.keyCode||b.which)){var a=this.selection.getRange(),e,h=a.startContainer;if(a.collapsed&&(e=f.findParentByTagName(a.startContainer,"pre",!0))&&!e.nextSibling){for(var g=e.lastChild;g&&
"BR"==g.nodeName;)g=g.previousSibling;if(g===h||a.startContainer===e&&a.startOffset==e.childNodes.length)this.execCommand("insertparagraph"),f.preventDefault(b)}}});d.addListener("delkeydown",function(c,b){var a=this.selection.getRange();a.txtToElmBoundary(!0);var e=a.startContainer;if(f.isTagNode(e,"pre")&&a.collapsed&&f.isStartInblock(a)){var h=d.document.createElement("p");f.fillNode(d.document,h);e.parentNode.insertBefore(h,e);f.remove(e);a.setStart(h,0).setCursor(!1,!0);f.preventDefault(b);return!0}})};
UE.commands.cleardoc={execCommand:function(d){var c=this;d=c.options.enterTag;var b=c.selection.getRange();"br"==d?(c.body.innerHTML="<br/>",b.setStart(c.body,0).setCursor()):(c.body.innerHTML="<p>"+(I?"":"<br/>")+"</p>",b.setStart(c.body.firstChild,0).setCursor(!1,!0));setTimeout(function(){c.fireEvent("clearDoc")},0)}};UE.plugin.register("anchor",function(){return{bindEvents:{ready:function(){p.cssRule("anchor",".anchorclass{background: url('"+this.options.themePath+this.options.theme+"/images/anchor.gif') no-repeat scroll left center transparent;cursor: auto;display: inline-block;height: 16px;width: 15px;}",
this.document)}},outputRule:function(d){p.each(d.getNodesByTagName("img"),function(c){var b;if(b=c.getAttr("anchorname"))c.tagName="a",c.setAttr({anchorname:"",name:b,"class":""})})},inputRule:function(d){p.each(d.getNodesByTagName("a"),function(c){c.getAttr("name")&&!c.getAttr("href")&&(c.tagName="img",c.setAttr({anchorname:c.getAttr("name"),"class":"anchorclass"}),c.setAttr("name"))})},commands:{anchor:{execCommand:function(d,c){var b=this.selection.getRange(),a=b.getClosedNode();a&&a.getAttribute("anchorname")?
c?a.setAttribute("anchorname",c):(b.setStartBefore(a).setCursor(),f.remove(a)):c&&(a=this.document.createElement("img"),b.collapse(!0),f.setAttributes(a,{anchorname:c,"class":"anchorclass"}),b.insertNode(a).setStartAfter(a).setCursor(!1,!0))}}}}});UE.plugins.wordcount=function(){var d=this;d.setOpt("wordCount",!0);d.addListener("contentchange",function(){d.fireEvent("wordcount")});var c;d.addListener("ready",function(){var b=this;f.on(b.body,"keyup",function(a){(a.keyCode||a.which)in{16:1,18:1,20:1,
37:1,38:1,39:1,40:1}||(clearTimeout(c),c=setTimeout(function(){b.fireEvent("wordcount")},200))})})};UE.plugins.pagebreak=function(){function d(a){if(f.isEmptyBlock(a)){for(var c=a.firstChild,g;c&&1==c.nodeType&&f.isEmptyBlock(c);)g=c,c=c.firstChild;!g&&(g=a);f.fillNode(b.document,g)}}function c(a){return a&&1==a.nodeType&&"HR"==a.tagName&&"pagebreak"==a.className}var b=this,a=["td"];b.setOpt("pageBreakTag","_ueditor_page_break_tag_");b.ready(function(){p.cssRule("pagebreak",".pagebreak{display:block;clear:both !important;cursor:default !important;width: 100% !important;margin:0;}",
b.document)});b.addInputRule(function(a){a.traversal(function(a){if("text"==a.type&&a.data==b.options.pageBreakTag){var c=UE.uNode.createElement('<hr class="pagebreak" noshade="noshade" size="5" style="-webkit-user-select: none;">');a.parentNode.insertBefore(c,a);a.parentNode.removeChild(a)}})});b.addOutputRule(function(a){p.each(a.getNodesByTagName("hr"),function(a){if("pagebreak"==a.getAttr("class")){var c=UE.uNode.createText(b.options.pageBreakTag);a.parentNode.insertBefore(c,a);a.parentNode.removeChild(a)}})});
b.commands.pagebreak={execCommand:function(){var e=b.selection.getRange(),h=b.document.createElement("hr");f.setAttributes(h,{"class":"pagebreak",noshade:"noshade",size:"5"});f.unSelectable(h);var g=f.findParentByTagName(e.startContainer,a,!0),l=[];if(g)switch(g.tagName){case "TD":g=g.parentNode,g.previousSibling?(g.parentNode.insertBefore(h,g),l=f.findParents(h)):(e=f.findParentByTagName(g,"table"),e.parentNode.insertBefore(h,e),l=f.findParents(h,!0)),g=l[1],h!==g&&f.breakParent(h,g),b.fireEvent("afteradjusttable",
b.document)}else{if(!e.collapsed)for(e.deleteContents(),g=e.startContainer;!f.isBody(g)&&f.isBlockElm(g)&&f.isEmptyNode(g);)e.setStartBefore(g).collapse(!0),f.remove(g),g=e.startContainer;e.insertNode(h);for(g=h.parentNode;!f.isBody(g);)f.breakParent(h,g),(g=h.nextSibling)&&f.isEmptyBlock(g)&&f.remove(g),g=h.parentNode;g=h.nextSibling;l=h.previousSibling;c(l)?f.remove(l):l&&d(l);g?(c(g)?f.remove(g):d(g),e.setEndAfter(h).collapse(!1)):(g=b.document.createElement("p"),h.parentNode.appendChild(g),f.fillNode(b.document,
g),e.setStart(g,0).collapse(!0));e.select(!0)}}}};UE.plugin.register("wordimage",function(){var d=this,c=[];return{commands:{wordimage:{execCommand:function(){for(var b=f.getElementsByTagName(d.body,"img"),a=[],c=0,h;h=b[c++];)(h=h.getAttribute("word_img"))&&a.push(h);return a},queryCommandState:function(){c=f.getElementsByTagName(d.body,"img");for(var b=0,a;a=c[b++];)if(a.getAttribute("word_img"))return 1;return-1},notNeedUndo:!0}},inputRule:function(b){p.each(b.getNodesByTagName("img"),function(a){var b=
a.attrs,c=128>parseInt(b.width)||43>parseInt(b.height),g=d.options,f=g.UEDITOR_HOME_URL+"themes/default/images/spacer.gif";b.src&&/^(?:(file:\/+))/.test(b.src)&&a.setAttr({width:b.width,height:b.height,alt:b.alt,word_img:b.src,src:f,style:"background:url("+(c?g.themePath+g.theme+"/images/word.gif":g.langPath+g.lang+"/images/localimage.png")+") no-repeat center center;border:1px solid #ddd"})})}}});UE.plugins.dragdrop=function(){var d=this;d.ready(function(){f.on(this.body,"dragend",function(){var c=
d.selection.getRange(),b=c.getClosedNode()||d.selection.getStart();if(b&&"IMG"==b.tagName){for(var a=b.previousSibling,e;(e=b.nextSibling)&&1==e.nodeType&&"SPAN"==e.tagName&&!e.firstChild;)f.remove(e);(!a||1!=a.nodeType||f.isEmptyBlock(a))&&a||e&&(!e||f.isEmptyBlock(e))||(a&&"P"==a.tagName&&!f.isEmptyBlock(a)?(a.appendChild(b),f.moveChild(e,a),f.remove(e)):e&&"P"==e.tagName&&!f.isEmptyBlock(e)&&e.insertBefore(b,e.firstChild),a&&"P"==a.tagName&&f.isEmptyBlock(a)&&f.remove(a),e&&"P"==e.tagName&&f.isEmptyBlock(e)&&
f.remove(e),c.selectNode(b).select(),d.fireEvent("saveScene"))}})});d.addListener("keyup",function(c,b){if(13==(b.keyCode||b.which)){var a=d.selection.getRange(),e;(e=f.findParentByTagName(a.startContainer,"p",!0))&&"center"==f.getComputedStyle(e,"text-align")&&f.removeStyle(e,"text-align")}})};UE.plugins.undo=function(){function d(a,b){if(a.length!=b.length)return 0;for(var c=0,e=a.length;c<e;c++)if(a[c]!=b[c])return 0;return 1}var c,b=this,a=b.options.maxUndoCount||20,e=b.options.maxInputCount||
20,h=RegExp(f.fillChar+"|</hr>","gi"),g={ol:1,ul:1,table:1,tbody:1,tr:1,body:1},l=b.options.autoClearEmptyNode;b.undoManger=new function(){this.list=[];this.index=0;this.hasRedo=this.hasUndo=!1;this.undo=function(){if(this.hasUndo)if(this.list[this.index-1]||1!=this.list.length){for(;this.list[this.index].content==this.list[this.index-1].content;)if(this.index--,0==this.index)return this.restore(0);this.restore(--this.index)}else this.reset()};this.redo=function(){if(this.hasRedo){for(;this.list[this.index].content==
this.list[this.index+1].content;)if(this.index++,this.index==this.list.length-1)return this.restore(this.index);this.restore(++this.index)}};this.restore=function(){var a=this.editor,b=this.list[this.index],c=UE.htmlparser(b.content.replace(h,""));a.options.autoClearEmptyNode=!1;a.filterInputRule(c);a.options.autoClearEmptyNode=l;a.document.body.innerHTML=c.toHtml();a.fireEvent("afterscencerestore");r.ie&&p.each(f.getElementsByTagName(a.document,"td th caption p"),function(b){f.isEmptyNode(b)&&f.fillNode(a.document,
b)});try{var e=(new L.Range(a.document)).moveToAddress(b.address);e.select(g[e.startContainer.nodeName.toLowerCase()])}catch(d){}this.update();this.clearKey();a.fireEvent("reset",!0)};this.getScene=function(){var a=this.editor,b=a.selection.getRange().createAddress(!1,!0);a.fireEvent("beforegetscene");var c=UE.htmlparser(a.body.innerHTML);a.options.autoClearEmptyNode=!1;a.filterOutputRule(c);a.options.autoClearEmptyNode=l;c=c.toHtml();a.fireEvent("aftergetscene");return{address:b,content:c}};this.save=
function(e,g){clearTimeout(c);var h=this.getScene(g),k=this.list[this.index];k&&k.content!=h.content&&b.trigger("contentchange");var f;if(f=k)if(f=k.content==h.content)e?k=1:(k=k.address,f=h.address,k=k.collapsed!=f.collapsed?0:d(k.startAddress,f.startAddress)&&d(k.endAddress,f.endAddress)?1:0),f=k;f||(this.list=this.list.slice(0,this.index+1),this.list.push(h),this.list.length>a&&this.list.shift(),this.index=this.list.length-1,this.clearKey(),this.update())};this.update=function(){this.hasRedo=!!this.list[this.index+
1];this.hasUndo=!!this.list[this.index-1]};this.reset=function(){this.list=[];this.index=0;this.hasRedo=this.hasUndo=!1;this.clearKey()};this.clearKey=function(){m=0}};b.undoManger.editor=b;b.addListener("saveScene",function(){var a=Array.prototype.splice.call(arguments,1);this.undoManger.save.apply(this.undoManger,a)});b.addListener("reset",function(a,b){b||this.undoManger.reset()});b.commands.redo=b.commands.undo={execCommand:function(a){this.undoManger[a]()},queryCommandState:function(a){return this.undoManger["has"+
("undo"==a.toLowerCase()?"Undo":"Redo")]?0:-1},notNeedUndo:1};var k={16:1,17:1,18:1,37:1,38:1,39:1,40:1},m=0,n=!1;b.addListener("ready",function(){f.on(this.body,"compositionstart",function(){n=!0});f.on(this.body,"compositionend",function(){n=!1})});b.addshortcutkey({Undo:"ctrl+90",Redo:"ctrl+89"});var q=!0;b.addListener("keydown",function(a,b){var g=this;if(!(k[b.keyCode||b.which]||b.ctrlKey||b.metaKey||b.shiftKey||b.altKey||n))if(g.selection.getRange().collapsed){0==g.undoManger.list.length&&g.undoManger.save(!0);
clearTimeout(c);var d=function(a){a.undoManger.save(!1,!0);a.fireEvent("selectionchange")};c=setTimeout(function(){if(n)var a=setInterval(function(){n||(d(g),clearInterval(a))},300);else d(g)},200);m++;m>=e&&d(g)}else g.undoManger.save(!1,!0),q=!1});b.addListener("keyup",function(a,b){k[b.keyCode||b.which]||b.ctrlKey||b.metaKey||b.shiftKey||b.altKey||n||q||(this.undoManger.save(!1,!0),q=!0)});b.stopCmdUndo=function(){b.__hasEnterExecCommand=!0};b.startCmdUndo=function(){b.__hasEnterExecCommand=!1}};
UE.plugin.register("copy",function(){function d(){ZeroClipboard.config({debug:!1,swfPath:c.options.UEDITOR_HOME_URL+"third-party/zeroclipboard/ZeroClipboard.swf"});var b=c.zeroclipboard=new ZeroClipboard;b.on("copy",function(a){a=a.client;var b=c.selection.getRange(),d=document.createElement("div");d.appendChild(b.cloneContents());a.setText(d.innerText||d.textContent);a.setHtml(d.innerHTML);b.select()});b.on("mouseover mouseout",function(a){var b=a.target;"mouseover"==a.type?f.addClass(b,"edui-state-hover"):
"mouseout"==a.type&&f.removeClasses(b,"edui-state-hover")});b.on("wrongflash noflash",function(){ZeroClipboard.destroy()})}var c=this;return{bindEvents:{ready:function(){r.ie||(window.ZeroClipboard?d():p.loadFile(document,{src:c.options.UEDITOR_HOME_URL+"third-party/zeroclipboard/ZeroClipboard.js",tag:"script",type:"text/javascript",defer:"defer"},function(){d()}))}},commands:{copy:{execCommand:function(b){c.document.execCommand("copy")||alert(c.getLang("copymsg"))}}}}});UE.plugins.paste=function(){function d(a){var b=
this.document;if(!b.getElementById("baidu_pastebin")){var c=this.selection.getRange(),e=c.createBookmark(),g=b.createElement("div");g.id="baidu_pastebin";r.webkit&&g.appendChild(b.createTextNode(f.fillChar+f.fillChar));b.body.appendChild(g);e.start.style.display="";g.style.cssText="position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:"+f.getXY(e.start).y+"px";c.selectNodeContents(g).select(!0);setTimeout(function(){if(r.webkit)for(var d=0,h=b.querySelectorAll("#baidu_pastebin"),
y;y=h[d++];)if(f.isEmptyNode(y))f.remove(y);else{g=y;break}try{g.parentNode.removeChild(g)}catch(u){}c.moveToBookmark(e).select(!0);a(g)},0)}}function c(a){return a.replace(/<(\/?)([\w\-]+)([^>]*)>/gi,function(a,b,c,e){c=c.toLowerCase();if({img:1}[c])return a;e=e.replace(/([\w\-]*?)\s*=\s*(("([^"]*)")|('([^']*)')|([^\s>]+))/gi,function(a,b,c){return{src:1,href:1,name:1}[b.toLowerCase()]?b+"="+c+" ":""});return{span:1,div:1}[c]?"":"<"+b+c+" "+p.trim(e)+">"})}function b(b){var d;if(b.firstChild){var m=
f.getElementsByTagName(b,"span");d=0;for(var n;n=m[d++];)"_baidu_cut_start"!=n.id&&"_baidu_cut_end"!=n.id||f.remove(n);if(r.webkit){n=b.querySelectorAll("div br");for(d=0;m=n[d++];)m=m.parentNode,"DIV"==m.tagName&&1==m.childNodes.length&&(m.innerHTML="<p><br/></p>",f.remove(m));m=b.querySelectorAll("#baidu_pastebin");for(d=0;n=m[d++];){var q=a.document.createElement("p");for(n.parentNode.insertBefore(q,n);n.firstChild;)q.appendChild(n.firstChild);f.remove(n)}n=b.querySelectorAll("meta");for(d=0;m=
n[d++];)f.remove(m);n=b.querySelectorAll("br");for(d=0;m=n[d++];)/^apple-/i.test(m.className)&&f.remove(m)}if(r.gecko)for(n=b.querySelectorAll("[_moz_dirty]"),d=0;m=n[d++];)m.removeAttribute("_moz_dirty");if(!r.ie)for(n=b.querySelectorAll("span.Apple-style-span"),d=0;m=n[d++];)f.remove(m,!0);d=b.innerHTML;d=UE.filterWord(d);b=UE.htmlparser(d);a.options.filterRules&&UE.filterNode(b,a.options.filterRules);a.filterInputRule(b);r.webkit&&((d=b.lastChild())&&"element"==d.type&&"br"==d.tagName&&b.removeChild(d),
p.each(a.body.querySelectorAll("div"),function(a){f.isEmptyBlock(a)&&f.remove(a,!0)}));d={html:b.toHtml()};a.fireEvent("beforepaste",d,b);d.html&&(b=UE.htmlparser(d.html,!0),1===a.queryCommandState("pasteplain")?a.execCommand("insertHtml",UE.filterNode(b,a.options.filterTxtRules).toHtml(),!0):(UE.filterNode(b,a.options.filterTxtRules),e=b.toHtml(),h=d.html,g=a.selection.getRange().createAddress(!0),a.execCommand("insertHtml",!0===a.getOpt("retainOnlyLabelPasted")?c(h):h,!0)),a.fireEvent("afterpaste",
d))}}var a=this;a.setOpt({retainOnlyLabelPasted:!1});var e,h,g;a.addListener("pasteTransfer",function(b,d){if(g&&e&&h&&e!=h){var m=a.selection.getRange();m.moveToAddress(g,!0);if(!m.collapsed){for(;!f.isBody(m.startContainer);){var n=m.startContainer;if(1==n.nodeType){n=n.childNodes[m.startOffset];if(!n){m.setStartBefore(m.startContainer);continue}(n=n.previousSibling)&&3==n.nodeType&&RegExp("^[\n\r\t "+f.fillChar+"]*$").test(n.nodeValue)&&m.setStartBefore(n)}if(0==m.startOffset)m.setStartBefore(m.startContainer);
else break}for(;!f.isBody(m.endContainer);){n=m.endContainer;if(1==n.nodeType){n=n.childNodes[m.endOffset];if(!n){m.setEndAfter(m.endContainer);continue}(n=n.nextSibling)&&3==n.nodeType&&RegExp("^[\n\r\t"+f.fillChar+"]*$").test(n.nodeValue)&&m.setEndAfter(n)}if(m.endOffset==m.endContainer[3==m.endContainer.nodeType?"nodeValue":"childNodes"].length)m.setEndAfter(m.endContainer);else break}}m.deleteContents();m.select(!0);a.__hasEnterExecCommand=!0;m=h;2===d?m=c(m):d&&(m=e);a.execCommand("inserthtml",
m,!0);a.__hasEnterExecCommand=!1;for(m=a.selection.getRange();!f.isBody(m.startContainer)&&!m.startOffset&&m.startContainer[3==m.startContainer.nodeType?"nodeValue":"childNodes"].length;)m.setStartBefore(m.startContainer);m=m.createAddress(!0);g.endAddress=m.startAddress}});a.addListener("ready",function(){f.on(a.body,"cut",function(){!a.selection.getRange().collapsed&&a.undoManger&&a.undoManger.save()});f.on(a.body,r.ie||r.opera?"keydown":"paste",function(c){(!r.ie&&!r.opera||(c.ctrlKey||c.metaKey)&&
"86"==c.keyCode)&&d.call(a,function(a){b(a)})})});a.commands.paste={execCommand:function(c){r.ie?(d.call(a,function(a){b(a)}),a.document.execCommand("paste")):alert(a.getLang("pastemsg"))}}};UE.plugins.pasteplain=function(){this.setOpt({pasteplain:!1,filterTxtRules:function(){function c(a){a.tagName="p";a.setStyle()}function b(a){a.parentNode.removeChild(a,!0)}return{"-":"script style object iframe embed input select",p:{$:{}},br:{$:{}},div:function(a){for(var b,c=UE.uNode.createElement("p");b=a.firstChild();)"text"!=
b.type&&UE.dom.dtd.$block[b.tagName]?c.firstChild()?(a.parentNode.insertBefore(c,a),c=UE.uNode.createElement("p")):a.parentNode.insertBefore(b,a):c.appendChild(b);c.firstChild()&&a.parentNode.insertBefore(c,a);a.parentNode.removeChild(a)},ol:b,ul:b,dl:b,dt:b,dd:b,li:b,caption:c,th:c,tr:c,h1:c,h2:c,h3:c,h4:c,h5:c,h6:c,td:function(a){a.innerText()&&a.parentNode.insertAfter(UE.uNode.createText(" &nbsp; &nbsp;"),a);a.parentNode.removeChild(a,a.innerText())}}}()});var d=this.options.pasteplain;this.commands.pasteplain=
{queryCommandState:function(){return d?1:0},execCommand:function(){d=!d|0},notNeedUndo:1}};UE.plugins.list=function(){function d(a){var b=[],c;for(c in a)b.push(c);return b}function c(a){var b=a.className;return f.hasClass(a,/custom_/)?b.match(/custom_(\w+)/)[1]:f.getStyle(a,"list-style-type")}function b(b,g){p.each(f.getElementsByTagName(b,"ol ul"),function(d){if(f.inDoc(d,b)){var h=d.parentNode;if(h.tagName==d.tagName){var k=c(d)||("OL"==d.tagName?"decimal":"disc"),l=c(h)||("OL"==h.tagName?"decimal":
"disc");k==l&&(k=p.indexOf(n[d.tagName],k),k=k+1==n[d.tagName].length?0:k+1,e(d,n[d.tagName][k]))}var q=0,k=2;f.hasClass(d,/custom_/)?/[ou]l/i.test(h.tagName)&&f.hasClass(h,/custom_/)||(k=1):/[ou]l/i.test(h.tagName)&&f.hasClass(h,/custom_/)&&(k=3);(h=f.getStyle(d,"list-style-type"))&&(d.style.cssText="list-style-type:"+h);d.className=p.trim(d.className.replace(/list-paddingleft-\w+/,""))+" list-paddingleft-"+k;p.each(f.getElementsByTagName(d,"li"),function(a){a.style.cssText&&(a.style.cssText="");
if(!a.firstChild)f.remove(a);else if(a.parentNode===d){q++;if(f.hasClass(d,/custom_/)){var b=1,e=c(d);if("OL"==d.tagName){if(e)switch(e){case "cn":case "cn1":case "cn2":10<q&&(0==q%10||10<q&&20>q)?b=2:20<q&&(b=3);break;case "num2":9<q&&(b=2)}a.className="list-"+m[e]+q+" list-"+e+"-paddingleft-"+b}else a.className="list-"+m[e]+" list-"+e+"-paddingleft"}else a.className=a.className.replace(/list-[\w\-]+/gi,"");b=a.getAttribute("class");null===b||b.replace(/\s/g,"")||f.removeAttributes(a,"class")}});
!g&&a(d,d.tagName.toLowerCase(),c(d)||f.getStyle(d,"list-style-type"),!0)}})}function a(a,e,g,d){var h=a.nextSibling;h&&1==h.nodeType&&h.tagName.toLowerCase()==e&&(c(h)||f.getStyle(h,"list-style-type")||("ol"==e?"decimal":"disc"))==g&&(f.moveChild(h,a),0==h.childNodes.length&&f.remove(h));h&&f.isFillChar(h)&&f.remove(h);(h=a.previousSibling)&&1==h.nodeType&&h.tagName.toLowerCase()==e&&(c(h)||f.getStyle(h,"list-style-type")||("ol"==e?"decimal":"disc"))==g&&f.moveChild(a,h);h&&f.isFillChar(h)&&f.remove(h);
!d&&f.isEmptyBlock(a)&&f.remove(a);c(a)&&b(a.ownerDocument,!0)}function e(a,b){m[b]&&(a.className="custom_"+b);try{f.setStyle(a,"list-style-type",b)}catch(c){}}function h(a){var b=a.previousSibling;b&&f.isEmptyBlock(b)&&f.remove(b);(b=a.nextSibling)&&f.isEmptyBlock(b)&&f.remove(b)}function g(a){for(;a&&!f.isBody(a);){if("TABLE"==a.nodeName)return null;if("LI"==a.nodeName)return a;a=a.parentNode}}var l=this,k={TD:1,PRE:1,BLOCKQUOTE:1},m={cn:"cn-1-",cn1:"cn-2-",cn2:"cn-3-",num:"num-1-",num1:"num-2-",
num2:"num-3-",dash:"dash",dot:"dot"};l.setOpt({autoTransWordToList:!1,insertorderedlist:{num:"",num1:"",num2:"",cn:"",cn1:"",cn2:"",decimal:"","lower-alpha":"","lower-roman":"","upper-alpha":"","upper-roman":""},insertunorderedlist:{circle:"",disc:"",square:"",dash:"",dot:""},listDefaultPaddingLeft:"30",listiconpath:"http://bs.baidu.com/listicon/",maxListLevel:-1,disablePInList:!1});var n={OL:d(l.options.insertorderedlist),UL:d(l.options.insertunorderedlist)},q=l.options.listiconpath,t;for(t in m)l.options.insertorderedlist.hasOwnProperty(t)||
l.options.insertunorderedlist.hasOwnProperty(t)||delete m[t];l.ready(function(){var a=[],b;for(b in m){if("dash"==b||"dot"==b)a.push("li.list-"+m[b]+"{background-image:url("+q+m[b]+".gif)}"),a.push("ul.custom_"+b+"{list-style:none;}ul.custom_"+b+" li{background-position:0 3px;background-repeat:no-repeat}");else{for(var c=0;99>c;c++)a.push("li.list-"+m[b]+c+"{background-image:url("+q+"list-"+m[b]+c+".gif)}");a.push("ol.custom_"+b+"{list-style:none;}ol.custom_"+b+" li{background-position:0 3px;background-repeat:no-repeat}")}switch(b){case "cn":a.push("li.list-"+
b+"-paddingleft-1{padding-left:25px}");a.push("li.list-"+b+"-paddingleft-2{padding-left:40px}");a.push("li.list-"+b+"-paddingleft-3{padding-left:55px}");break;case "cn1":a.push("li.list-"+b+"-paddingleft-1{padding-left:30px}");a.push("li.list-"+b+"-paddingleft-2{padding-left:40px}");a.push("li.list-"+b+"-paddingleft-3{padding-left:55px}");break;case "cn2":a.push("li.list-"+b+"-paddingleft-1{padding-left:40px}");a.push("li.list-"+b+"-paddingleft-2{padding-left:55px}");a.push("li.list-"+b+"-paddingleft-3{padding-left:68px}");
break;case "num":case "num1":a.push("li.list-"+b+"-paddingleft-1{padding-left:25px}");break;case "num2":a.push("li.list-"+b+"-paddingleft-1{padding-left:35px}");a.push("li.list-"+b+"-paddingleft-2{padding-left:40px}");break;case "dash":a.push("li.list-"+b+"-paddingleft{padding-left:35px}");break;case "dot":a.push("li.list-"+b+"-paddingleft{padding-left:20px}")}}a.push(".list-paddingleft-1{padding-left:0}");a.push(".list-paddingleft-2{padding-left:"+l.options.listDefaultPaddingLeft+"px}");a.push(".list-paddingleft-3{padding-left:"+
2*l.options.listDefaultPaddingLeft+"px}");p.cssRule("list","ol,ul{margin:0;pading:0;"+(r.ie?"":"width:95%")+"}li{clear:both;}"+a.join("\n"),l.document)});l.ready(function(){f.on(l.body,"cut",function(){setTimeout(function(){var a=l.selection.getRange(),b;if(!a.collapsed&&(b=f.findParentByTagName(a.startContainer,"li",!0))&&!b.nextSibling&&f.isEmptyBlock(b)){b=b.parentNode;var c;(c=b.previousSibling)?(f.remove(b),a.setStartAtLast(c).collapse(!0)):(c=b.nextSibling)?(f.remove(b),a.setStartAtFirst(c).collapse(!0)):
(c=l.document.createElement("p"),f.fillNode(l.document,c),b.parentNode.insertBefore(c,b),f.remove(b),a.setStart(c,0).collapse(!0));a.select(!0)}})})});l.addListener("beforepaste",function(a,b){var e=this.selection.getRange(),g=UE.htmlparser(b.html,!0);if(e=f.findParentByTagName(e.startContainer,"li",!0)){var d=e.parentNode;p.each(g.getNodesByTagName("OL"==d.tagName?"ul":"ol"),function(b){b.tagName=d.tagName;b.setAttr();if(b.parentNode===g)a=c(d)||("OL"==d.tagName?"decimal":"disc");else{var e=b.parentNode.getAttr("class");
(a=e&&/custom_/.test(e)?e.match(/custom_(\w+)/)[1]:b.parentNode.getStyle("list-style-type"))||(a="OL"==d.tagName?"decimal":"disc")}e=p.indexOf(n[d.tagName],a);b.parentNode!==g&&(e=e+1==n[d.tagName].length?0:e+1);e=n[d.tagName][e];m[e]?b.setAttr("class","custom_"+e):b.setStyle("list-style-type",e)})}b.html=g.toHtml()});!0===l.getOpt("disablePInList")&&l.addOutputRule(function(a){p.each(a.getNodesByTagName("li"),function(a){var b=[],c=0;p.each(a.children,function(e){if("p"==e.tagName){for(var g;g=e.children.pop();)b.splice(c,
0,g),g.parentNode=a,lastNode=g;g=b[b.length-1];g&&"element"==g.type&&"br"==g.tagName||(e=UE.uNode.createElement("br"),e.parentNode=a,b.push(e));c=b.length}});b.length&&(a.children=b)})});l.addInputRule(function(a){p.each(a.getNodesByTagName("li"),function(a){for(var b=UE.uNode.createElement("p"),c=0,e;e=a.children[c];)"text"==e.type||v.p[e.tagName]?b.appendChild(e):b.firstChild()?(a.insertBefore(b,e),b=UE.uNode.createElement("p"),c+=2):c++;(b.firstChild()&&!b.parentNode||!a.firstChild())&&a.appendChild(b);
b.firstChild()||b.innerHTML(r.ie?"&nbsp;":"<br/>");a=a.firstChild();(b=a.lastChild())&&"text"==b.type&&/^\s*$/.test(b.data)&&a.removeChild(b)});if(l.options.autoTransWordToList){var b={num1:/^\d+\)/,decimal:/^\d+\./,"lower-alpha":/^[a-z]+\)/,"upper-alpha":/^[A-Z]+\./,cn:/^[\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+[\u3001]/,cn2:/^\([\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+\)/},c={square:"n"},e=function(a,e){var g=e.firstChild();if(g&&"element"==g.type&&"span"==g.tagName&&
/Wingdings|Symbol/.test(g.getStyle("font-family"))){for(var d in c)if(c[d]==g.data)return d;return"disc"}for(d in b)if(b[d].test(a))return d};p.each(a.getNodesByTagName("p"),function(a){if("MsoListParagraph"==a.getAttr("class")){a.setStyle("margin","");a.setStyle("margin-left","");a.setAttr("class","");var c=a,g,d=a;if("li"!=a.parentNode.tagName&&(g=e(a.innerText(),a))){var h=UE.uNode.createElement(l.options.insertorderedlist.hasOwnProperty(g)?"ol":"ul");for(m[g]?h.setAttr("class","custom_"+g):h.setStyle("list-style-type",
g);a&&"li"!=a.parentNode.tagName&&e(a.innerText(),a);){(c=a.nextSibling())||a.parentNode.insertBefore(h,a);var k=h,f=g;if("ol"==k.tagName)if(r.ie){var n=a.firstChild();"element"==n.type&&"span"==n.tagName&&b[f].test(n.innerText())&&a.removeChild(n)}else a.innerHTML(a.innerHTML().replace(b[f],""));else a.removeChild(a.firstChild());f=UE.uNode.createElement("li");f.appendChild(a);k.appendChild(f);a=c}!h.parentNode&&a&&a.parentNode&&a.parentNode.insertBefore(h,a)}(c=d.firstChild())&&"element"==c.type&&
"span"==c.tagName&&/^\s*(&nbsp;)+\s*$/.test(c.innerText())&&c.parentNode.removeChild(c)}})}});l.addListener("contentchange",function(){b(l.document)});l.addListener("keydown",function(a,b){function c(){b.preventDefault?b.preventDefault():b.returnValue=!1;l.fireEvent("contentchange");l.undoManger&&l.undoManger.save()}function e(a,b){for(;a&&!f.isBody(a)&&!b(a);){if(1==a.nodeType&&/[ou]l/i.test(a.tagName))return a;a=a.parentNode}return null}var g=b.keyCode||b.which;if(13==g&&!b.shiftKey){var d=l.selection.getRange(),
k=f.findParent(d.startContainer,function(a){return f.isBlockElm(a)},!0),n=f.findParentByTagName(d.startContainer,"li",!0);k&&"PRE"!=k.tagName&&!n&&(n=k.innerHTML.replace(RegExp(f.fillChar,"g"),""),/^\s*1\s*\.[^\d]/.test(n)&&(k.innerHTML=n.replace(/^\s*1\s*\./,""),d.setStartAtLast(k).collapse(!0).select(),l.__hasEnterExecCommand=!0,l.execCommand("insertorderedlist"),l.__hasEnterExecCommand=!1));d=l.selection.getRange();k=e(d.startContainer,function(a){return"TABLE"==a.tagName});n=d.collapsed?k:e(d.endContainer,
function(a){return"TABLE"==a.tagName});if(k&&n&&k===n){if(!d.collapsed)if(k=f.findParentByTagName(d.startContainer,"li",!0),n=f.findParentByTagName(d.endContainer,"li",!0),k&&n&&k===n){if(d.deleteContents(),(n=f.findParentByTagName(d.startContainer,"li",!0))&&f.isEmptyBlock(n)){t=n.previousSibling;next=n.nextSibling;k=l.document.createElement("p");f.fillNode(l.document,k);q=n.parentNode;t&&next?(d.setStart(next,0).collapse(!0).select(!0),f.remove(n)):((t||next)&&t?n.parentNode.parentNode.insertBefore(k,
q.nextSibling):q.parentNode.insertBefore(k,q),f.remove(n),q.firstChild||f.remove(q),d.setStart(k,0).setCursor());c();return}}else{var k=d.cloneRange(),m=k.collapse(!1).createBookmark();d.deleteContents();k.moveToBookmark(m);n=f.findParentByTagName(k.startContainer,"li",!0);h(n);k.select();c();return}if(n=f.findParentByTagName(d.startContainer,"li",!0)){if(f.isEmptyBlock(n)){var m=d.createBookmark(),q=n.parentNode;n!==q.lastChild?(f.breakParent(n,q),h(n)):(q.parentNode.insertBefore(n,q.nextSibling),
f.isEmptyNode(q)&&f.remove(q));if(!v.$list[n.parentNode.tagName])if(f.isBlockElm(n.firstChild))f.remove(n,!0);else{k=l.document.createElement("p");for(n.parentNode.insertBefore(k,n);n.firstChild;)k.appendChild(n.firstChild);f.remove(n)}d.moveToBookmark(m).select()}else{k=n.firstChild;if(!k||!f.isBlockElm(k)){k=l.document.createElement("p");for(!n.firstChild&&f.fillNode(l.document,k);n.firstChild;)k.appendChild(n.firstChild);n.appendChild(k)}m=l.document.createElement("span");d.insertNode(m);f.breakParent(m,
n);t=m.nextSibling;k=t.firstChild;k||(k=l.document.createElement("p"),f.fillNode(l.document,k),t.appendChild(k));f.isEmptyNode(k)&&(k.innerHTML="",f.fillNode(l.document,k));d.setStart(k,0).collapse(!0).shrinkBoundary().select();f.remove(m);var t=t.previousSibling;t&&f.isEmptyBlock(t)&&(t.innerHTML="<p></p>",f.fillNode(l.document,t.firstChild))}c()}}}if(8==g&&(d=l.selection.getRange(),d.collapsed&&f.isStartInblock(d)&&(k=d.cloneRange().trimBoundary(),(n=f.findParentByTagName(d.startContainer,"li",
!0))&&f.isStartInblock(k))))if((k=f.findParentByTagName(d.startContainer,"p",!0))&&k!==n.firstChild)q=f.findParentByTagName(k,["ol","ul"]),f.breakParent(k,q),h(k),l.fireEvent("contentchange"),d.setStart(k,0).setCursor(!1,!0),l.fireEvent("saveScene"),f.preventDefault(b);else if(n&&(t=n.previousSibling)){if(46!=g||!n.childNodes.length){v.$list[t.tagName]&&(t=t.lastChild);l.undoManger&&l.undoManger.save();k=n.firstChild;if(f.isBlockElm(k))if(f.isEmptyNode(k))for(t.appendChild(k),d.setStart(k,0).setCursor(!1,
!0);n.firstChild;)t.appendChild(n.firstChild);else m=l.document.createElement("span"),d.insertNode(m),f.isEmptyBlock(t)&&(t.innerHTML=""),f.moveChild(n,t),d.setStartBefore(m).collapse(!0).select(!0),f.remove(m);else if(f.isEmptyNode(n))k=l.document.createElement("p"),t.appendChild(k),d.setStart(k,0).setCursor();else for(d.setEnd(t,t.childNodes.length).collapse().select(!0);n.firstChild;)t.appendChild(n.firstChild);f.remove(n);l.fireEvent("contentchange");l.fireEvent("saveScene");f.preventDefault(b)}}else if(n&&
!n.previousSibling){q=n.parentNode;m=d.createBookmark();if(f.isTagNode(q.parentNode,"ol ul"))q.parentNode.insertBefore(n,q);else{for(;n.firstChild;)q.parentNode.insertBefore(n.firstChild,q);f.remove(n)}f.isEmptyNode(q)&&f.remove(q);d.moveToBookmark(m).setCursor(!1,!0);l.fireEvent("contentchange");l.fireEvent("saveScene");f.preventDefault(b)}});l.addListener("keyup",function(b,e){if(8==(e.keyCode||e.which)){var g=l.selection.getRange(),d;(d=f.findParentByTagName(g.startContainer,["ol","ul"],!0))&&
a(d,d.tagName.toLowerCase(),c(d)||f.getComputedStyle(d,"list-style-type"),!0)}});l.addListener("tabkeydown",function(){function b(a){if(-1!=l.options.maxListLevel){a=a.parentNode;for(var c=0;/[ou]l/i.test(a.tagName);)c++,a=a.parentNode;if(c>=l.options.maxListLevel)return!0}}var g=l.selection.getRange(),d=f.findParentByTagName(g.startContainer,"li",!0);if(d){var h;if(g.collapsed){if(b(d))return!0;var k=d.parentNode,m=l.document.createElement(k.tagName),q=p.indexOf(n[m.tagName],c(k)||f.getComputedStyle(k,
"list-style-type")),q=q+1==n[m.tagName].length?0:q+1,q=n[m.tagName][q];e(m,q);if(f.isStartInblock(g))return l.fireEvent("saveScene"),h=g.createBookmark(),k.insertBefore(m,d),m.appendChild(d),a(m,m.tagName.toLowerCase(),q),l.fireEvent("contentchange"),g.moveToBookmark(h).select(!0),!0}else{l.fireEvent("saveScene");h=g.createBookmark();for(var k=0,t,m=f.findParents(d),r;r=m[k++];)if(f.isTagNode(r,"ol ul")){t=r;break}r=d;if(h.end)for(;r&&!(f.getPosition(r,h.end)&f.POSITION_FOLLOWING);)if(b(r))r=f.getNextDomNode(r,
!1,null,function(a){return a!==t});else{k=r.parentNode;m=l.document.createElement(k.tagName);q=p.indexOf(n[m.tagName],c(k)||f.getComputedStyle(k,"list-style-type"));q=n[m.tagName][q+1==n[m.tagName].length?0:q+1];e(m,q);for(k.insertBefore(m,r);r&&!(f.getPosition(r,h.end)&f.POSITION_FOLLOWING);){d=r.nextSibling;m.appendChild(r);if(!d||f.isTagNode(d,"ol ul")){if(d)for(;(d=d.firstChild)&&"LI"!=d.tagName;);else d=f.getNextDomNode(r,!1,null,function(a){return a!==t});break}r=d}a(m,m.tagName.toLowerCase(),
q);r=d}l.fireEvent("contentchange");g.moveToBookmark(h).select();return!0}}});l.commands.insertorderedlist=l.commands.insertunorderedlist={execCommand:function(b,d){d||(d="insertorderedlist"==b.toLowerCase()?"decimal":"disc");var h=this.selection.getRange(),l=function(a){return 1==a.nodeType?"br"!=a.tagName.toLowerCase():!f.isWhitespace(a)},n="insertorderedlist"==b.toLowerCase()?"ol":"ul",m=this.document.createDocumentFragment();h.adjustmentBoundary().shrinkBoundary();var q=h.createBookmark(!0),t=
g(this.document.getElementById(q.start)),p=0,r=g(this.document.getElementById(q.end)),s=0,z,H,D,B;if(t||r){t&&(z=t.parentNode);q.end||(r=t);r&&(H=r.parentNode);if(z===H){for(;t!==r;){B=t;t=t.nextSibling;if(!f.isBlockElm(B.firstChild)){for(l=this.document.createElement("p");B.firstChild;)l.appendChild(B.firstChild);B.appendChild(l)}m.appendChild(B)}B=this.document.createElement("span");z.insertBefore(B,r);if(!f.isBlockElm(r.firstChild)){for(l=this.document.createElement("p");r.firstChild;)l.appendChild(r.firstChild);
r.appendChild(l)}m.appendChild(r);f.breakParent(B,z);f.isEmptyNode(B.previousSibling)&&f.remove(B.previousSibling);f.isEmptyNode(B.nextSibling)&&f.remove(B.nextSibling);l=c(z)||f.getComputedStyle(z,"list-style-type")||("insertorderedlist"==b.toLowerCase()?"decimal":"disc");if(z.tagName.toLowerCase()==n&&l==d){r=0;for(r=this.document.createDocumentFragment();l=m.firstChild;)if(f.isTagNode(l,"ol ul"))r.appendChild(l);else for(;l.firstChild;)r.appendChild(l.firstChild),f.remove(l);B.parentNode.insertBefore(r,
B)}else D=this.document.createElement(n),e(D,d),D.appendChild(m),B.parentNode.insertBefore(D,B);f.remove(B);D&&a(D,n,d);h.moveToBookmark(q).select();return}if(t){for(;t;){B=t.nextSibling;if(f.isTagNode(t,"ol ul"))m.appendChild(t);else{D=this.document.createDocumentFragment();for(var O=0;t.firstChild;)f.isBlockElm(t.firstChild)&&(O=1),D.appendChild(t.firstChild);O?m.appendChild(D):(O=this.document.createElement("p"),O.appendChild(D),m.appendChild(O));f.remove(t)}t=B}z.parentNode.insertBefore(m,z.nextSibling);
f.isEmptyNode(z)?(h.setStartBefore(z),f.remove(z)):h.setStartAfter(z);p=1}if(r&&f.inDoc(H,this.document)){for(t=H.firstChild;t&&t!==r;){B=t.nextSibling;if(f.isTagNode(t,"ol ul"))m.appendChild(t);else{D=this.document.createDocumentFragment();for(O=0;t.firstChild;)f.isBlockElm(t.firstChild)&&(O=1),D.appendChild(t.firstChild);O?m.appendChild(D):(O=this.document.createElement("p"),O.appendChild(D),m.appendChild(O));f.remove(t)}t=B}B=f.createElement(this.document,"div",{tmpDiv:1});f.moveChild(r,B);m.appendChild(B);
f.remove(r);H.parentNode.insertBefore(m,H);h.setEndBefore(H);f.isEmptyNode(H)&&f.remove(H);s=1}}p||h.setStartBefore(this.document.getElementById(q.start));q.end&&!s&&h.setEndAfter(this.document.getElementById(q.end));h.enlarge(!0,function(a){return k[a.tagName]});m=this.document.createDocumentFragment();r=h.createBookmark();z=f.getNextDomNode(r.start,!1,l);D=h.cloneRange();for(p=f.isBlockElm;z&&z!==r.end&&f.getPosition(z,r.end)&f.POSITION_PRECEDING;)if(3==z.nodeType||v.li[z.tagName])if(1==z.nodeType&&
v.$list[z.tagName]){for(;z.firstChild;)m.appendChild(z.firstChild);t=f.getNextDomNode(z,!1,l);f.remove(z);z=t}else{t=z;for(D.setStartBefore(z);z&&z!==r.end&&(!p(z)||f.isBookmarkNode(z));)t=z,z=f.getNextDomNode(z,!1,null,function(a){return!k[a.tagName]});z&&p(z)&&(B=f.getNextDomNode(t,!1,l))&&f.isBookmarkNode(B)&&(z=f.getNextDomNode(B,!1,l),t=B);D.setEndAfter(t);z=f.getNextDomNode(t,!1,l);B=h.document.createElement("li");B.appendChild(D.extractContents());if(f.isEmptyNode(B)){for(t=h.document.createElement("p");B.firstChild;)t.appendChild(B.firstChild);
B.appendChild(t)}m.appendChild(B)}else z=f.getNextDomNode(z,!0,l);h.moveToBookmark(r).collapse(!0);D=this.document.createElement(n);e(D,d);D.appendChild(m);h.insertNode(D);a(D,n,d);r=0;for(n=f.getElementsByTagName(D,"div");l=n[r++];)l.getAttribute("tmpDiv")&&f.remove(l,!0);h.moveToBookmark(q).select()},queryCommandState:function(a){a="insertorderedlist"==a.toLowerCase()?"ol":"ul";for(var b=this.selection.getStartElementPath(),c=0,e;(e=b[c++])&&"TABLE"!=e.nodeName;)if(a==e.nodeName.toLowerCase())return 1;
return 0},queryCommandValue:function(a){a="insertorderedlist"==a.toLowerCase()?"ol":"ul";for(var b=this.selection.getStartElementPath(),e,g=0,d;d=b[g++];){if("TABLE"==d.nodeName){e=null;break}if(a==d.nodeName.toLowerCase()){e=d;break}}return e?c(e)||f.getComputedStyle(e,"list-style-type"):null}}};(function(){var d={textarea:function(c,b){var a=b.ownerDocument.createElement("textarea");a.style.cssText="position:absolute;resize:none;width:100%;height:100%;border:0;padding:0;margin:0;overflow-y:auto;";
r.ie&&8>r.version&&(a.style.width=b.offsetWidth+"px",a.style.height=b.offsetHeight+"px",b.onresize=function(){a.style.width=b.offsetWidth+"px";a.style.height=b.offsetHeight+"px"});b.appendChild(a);return{setContent:function(b){a.value=b},getContent:function(){return a.value},select:function(){var b;r.ie?(b=a.createTextRange(),b.collapse(!0),b.select()):(a.setSelectionRange(0,0),a.focus())},dispose:function(){b.removeChild(a);b=a=b.onresize=null}}},codemirror:function(c,b){var a=window.CodeMirror(b,
{mode:"text/html",tabMode:"indent",lineNumbers:!0,lineWrapping:!0}),e=a.getWrapperElement();e.style.cssText='position:absolute;left:0;top:0;width:100%;height:100%;font-family:consolas,"Courier new",monospace;font-size:13px;';a.getScrollerElement().style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;";a.refresh();return{getCodeMirror:function(){return a},setContent:function(b){a.setValue(b)},getContent:function(){return a.getValue()},select:function(){a.focus()},dispose:function(){b.removeChild(e);
a=e=null}}}};UE.plugins.source=function(){var c=this,b=this.options,a=!1,e,h;b.sourceEditor=r.ie?"textarea":b.sourceEditor||"codemirror";c.setOpt({sourceEditorFirst:!1});var g,l,k;c.commands.source={execCommand:function(){if(a=!a){k=c.selection.getRange().createAddress(!1,!0);c.undoManger&&c.undoManger.save(!0);r.gecko&&(c.body.contentEditable=!1);g=c.iframe.style.cssText;c.iframe.style.cssText+="position:absolute;left:-32768px;top:-32768px;";c.fireEvent("beforegetcontent");var n=UE.htmlparser(c.body.innerHTML);
c.filterOutputRule(n);n.traversal(function(a){if("element"==a.type)switch(a.tagName){case "td":case "th":case "caption":a.children&&1==a.children.length&&"br"==a.firstChild().tagName&&a.removeChild(a.firstChild());break;case "pre":a.innerText(a.innerText().replace(/&nbsp;/g," "))}});c.fireEvent("aftergetcontent");n=n.toHtml(!0);e=d["codemirror"==b.sourceEditor&&window.CodeMirror?"codemirror":"textarea"](c,c.iframe.parentNode);e.setContent(n);h=c.setContent;c.setContent=function(a){a=UE.htmlparser(a);
c.filterInputRule(a);a=a.toHtml();e.setContent(a)};setTimeout(function(){e.select();c.addListener("fullscreenchanged",function(){try{e.getCodeMirror().refresh()}catch(a){}})});l=c.getContent;c.getContent=function(){return e.getContent()||"<p>"+(r.ie?"":"<br/>")+"</p>"}}else if(c.iframe.style.cssText=g,n=e.getContent()||"<p>"+(r.ie?"":"<br/>")+"</p>",n=n.replace(RegExp("[\\r\\t\\n ]*</?(\\w+)\\s*(?:[^>]*)>","g"),function(a,b){return b&&!v.$inlineWithA[b.toLowerCase()]?a.replace(/(^[\n\r\t ]*)|([\n\r\t ]*$)/g,
""):a.replace(/(^[\n\r\t]*)|([\n\r\t]*$)/g,"")}),c.setContent=h,c.setContent(n),e.dispose(),e=null,c.getContent=l,n=c.body.firstChild,n||(c.body.innerHTML="<p>"+(r.ie?"":"<br/>")+"</p>",n=c.body.firstChild),c.undoManger&&c.undoManger.save(!0),r.gecko){var m=document.createElement("input");m.style.cssText="position:absolute;left:0;top:-32768px";document.body.appendChild(m);c.body.contentEditable=!1;setTimeout(function(){f.setViewportOffset(m,{left:-32768,top:0});m.focus();setTimeout(function(){c.body.contentEditable=
!0;c.selection.getRange().moveToAddress(k).select(!0);f.remove(m)})})}else try{c.selection.getRange().moveToAddress(k).select(!0)}catch(t){}this.fireEvent("sourcemodechanged",a)},queryCommandState:function(){return a|0},notNeedUndo:1};var m=c.queryCommandState;c.queryCommandState=function(b){b=b.toLowerCase();return a?b in{source:1,fullscreen:1}?1:-1:m.apply(this,arguments)};"codemirror"==b.sourceEditor&&c.addListener("ready",function(){p.loadFile(document,{src:b.codeMirrorJsUrl||b.UEDITOR_HOME_URL+
"third-party/codemirror/codemirror.js",tag:"script",type:"text/javascript",defer:"defer"},function(){b.sourceEditorFirst&&setTimeout(function(){c.execCommand("source")},0)});p.loadFile(document,{tag:"link",rel:"stylesheet",type:"text/css",href:b.codeMirrorCssUrl||b.UEDITOR_HOME_URL+"third-party/codemirror/codemirror.css"})})}})();UE.plugins.enterkey=function(){var d,c=this,b=c.options.enterTag;c.addListener("keyup",function(a,b){if(13==(b.keyCode||b.which)){var h=c.selection.getRange(),g=h.startContainer,
l;if(r.ie)c.fireEvent("saveScene",!0,!0);else{if(/h\d/i.test(d)){if(r.gecko)f.findParentByTagName(g,"h1 h2 h3 h4 h5 h6 blockquote caption table".split(" "),!0)||(c.document.execCommand("formatBlock",!1,"<p>"),l=1);else if(1==g.nodeType){var g=c.document.createTextNode(""),k;h.insertNode(g);if(k=f.findParentByTagName(g,"div",!0)){for(l=c.document.createElement("p");k.firstChild;)l.appendChild(k.firstChild);k.parentNode.insertBefore(l,k);f.remove(k);h.setStartBefore(g).setCursor();l=1}f.remove(g)}c.undoManger&&
l&&c.undoManger.save()}r.opera&&h.select()}}});c.addListener("keydown",function(a,e){if(13==(e.keyCode||e.which))if(c.fireEvent("beforeenterkeydown"))f.preventDefault(e);else{c.fireEvent("saveScene",!0,!0);d="";var h=c.selection.getRange();if(!h.collapsed){var g=h.startContainer,l=h.endContainer,g=f.findParentByTagName(g,"td",!0),l=f.findParentByTagName(l,"td",!0);if(g&&l&&g!==l||!g&&l||g&&!l){e.preventDefault?e.preventDefault():e.returnValue=!1;return}}if("p"==b)r.ie||((g=f.findParentByTagName(h.startContainer,
"ol ul p h1 h2 h3 h4 h5 h6 blockquote caption".split(" "),!0))||r.opera?(d=g.tagName,"p"==g.tagName.toLowerCase()&&r.gecko&&f.removeDirtyAttr(g)):(c.document.execCommand("formatBlock",!1,"<p>"),r.gecko&&(h=c.selection.getRange(),(g=f.findParentByTagName(h.startContainer,"p",!0))&&f.removeDirtyAttr(g))));else if(e.preventDefault?e.preventDefault():e.returnValue=!1,h.collapsed)l=h.document.createElement("br"),h.insertNode(l),l.parentNode.lastChild===l?(l.parentNode.insertBefore(l.cloneNode(!0),l),h.setStartBefore(l)):
h.setStartAfter(l),h.setCursor();else if(h.deleteContents(),g=h.startContainer,1==g.nodeType&&(g=g.childNodes[h.startOffset])){for(;1==g.nodeType;){if(v.$empty[g.tagName])return h.setStartBefore(g).setCursor(),c.undoManger&&c.undoManger.save(),!1;if(!g.firstChild)return l=h.document.createElement("br"),g.appendChild(l),h.setStart(g,0).setCursor(),c.undoManger&&c.undoManger.save(),!1;g=g.firstChild}g===h.startContainer.childNodes[h.startOffset]?(l=h.document.createElement("br"),h.insertNode(l).setCursor()):
h.setStart(g,0).setCursor()}else l=h.document.createElement("br"),h.insertNode(l).setStartAfter(l).setCursor()}})};UE.plugins.keystrokes=function(){var d=this,c=!0;d.addListener("keydown",function(b,a){var e=a.keyCode||a.which,h=d.selection.getRange();if(!(h.collapsed||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)&&(65<=e&&90>=e||48<=e&&57>=e||96<=e&&111>=e||{13:1,8:1,46:1}[e])){var g=h.startContainer;f.isFillChar(g)&&h.setStartBefore(g);g=h.endContainer;f.isFillChar(g)&&h.setEndAfter(g);h.txtToElmBoundary();
h.endContainer&&1==h.endContainer.nodeType&&(g=h.endContainer.childNodes[h.endOffset])&&f.isBr(g)&&h.setEndAfter(g);if(0==h.startOffset&&(g=h.startContainer,f.isBoundaryNode(g,"firstChild")&&(g=h.endContainer,h.endOffset==(3==g.nodeType?g.nodeValue.length:g.childNodes.length)&&f.isBoundaryNode(g,"lastChild")))){d.fireEvent("saveScene");d.body.innerHTML="<p>"+(r.ie?"":"<br/>")+"</p>";h.setStart(d.body.firstChild,0).setCursor(!1,!0);d._selectionChange();return}}if(e==$.Backspace){h=d.selection.getRange();
c=h.collapsed;if(d.fireEvent("delkeydown",a))return;var l,k;h.collapsed&&h.inFillChar()&&(l=h.startContainer,f.isFillChar(l)?(h.setStartBefore(l).shrinkBoundary(!0).collapse(!0),f.remove(l)):(l.nodeValue=l.nodeValue.replace(RegExp("^"+f.fillChar),""),h.startOffset--,h.collapse(!0).select(!0)));if(l=h.getClosedNode()){d.fireEvent("saveScene");h.setStartBefore(l);f.remove(l);h.setCursor();d.fireEvent("saveScene");f.preventDefault(a);return}if(!r.ie&&(l=f.findParentByTagName(h.startContainer,"table",
!0),k=f.findParentByTagName(h.endContainer,"table",!0),l&&!k||!l&&k||l!==k)){a.preventDefault();return}}if(e==$.Tab){var m={ol:1,ul:1,table:1};if(d.fireEvent("tabkeydown",a)){f.preventDefault(a);return}h=d.selection.getRange();d.fireEvent("saveScene");var g=0,n="";l=d.options.tabSize||4;for(k=d.options.tabNode||"&nbsp;";g<l;g++)n+=k;g=d.document.createElement("span");g.innerHTML=n+f.fillChar;if(h.collapsed)h.insertNode(g.cloneNode(!0).firstChild).setCursor(!0);else if(n=function(a){return f.isBlockElm(a)&&
!m[a.tagName.toLowerCase()]},l=f.findParent(h.startContainer,n,!0),k=f.findParent(h.endContainer,n,!0),l&&k&&l===k)h.deleteContents(),h.insertNode(g.cloneNode(!0).firstChild).setCursor(!0);else{l=h.createBookmark();h.enlarge(!0);k=h.createBookmark();for(var q=f.getNextDomNode(k.start,!1,n);q&&!(f.getPosition(q,k.end)&f.POSITION_FOLLOWING);)q.insertBefore(g.cloneNode(!0).firstChild,q.firstChild),q=f.getNextDomNode(q,!1,n);h.moveToBookmark(k).moveToBookmark(l).select()}f.preventDefault(a)}if(r.gecko&&
46==e&&(h=d.selection.getRange(),h.collapsed&&(l=h.startContainer,f.isEmptyBlock(l)))){for(e=l.parentNode;1==f.getChildCount(e)&&!f.isBody(e);)l=e,e=e.parentNode;l===e.lastChild&&a.preventDefault()}});d.addListener("keyup",function(b,a){var e;if((a.keyCode||a.which)==$.Backspace&&!this.fireEvent("delkeyup")){e=this.selection.getRange();if(e.collapsed){var d;if((d=f.findParentByTagName(e.startContainer,"h1 h2 h3 h4 h5 h6".split(" "),!0))&&f.isEmptyBlock(d)){var g=d.previousSibling;if(g&&"TABLE"!=g.nodeName){f.remove(d);
e.setStartAtLast(g).setCursor(!1,!0);return}if((g=d.nextSibling)&&"TABLE"!=g.nodeName){f.remove(d);e.setStartAtFirst(g).setCursor(!1,!0);return}}f.isBody(e.startContainer)&&(d=f.createElement(this.document,"p",{innerHTML:r.ie?f.fillChar:"<br/>"}),e.insertNode(d).setStart(d,0).setCursor(!1,!0))}!c&&(3==e.startContainer.nodeType||1==e.startContainer.nodeType&&f.isEmptyBlock(e.startContainer))&&(r.ie?(d=e.document.createElement("span"),e.insertNode(d).setStartBefore(d).collapse(!0),e.select(),f.remove(d)):
e.select())}})};UE.plugins.fiximgclick=function(){function d(){this.cover=this.resizer=this.editor=null;this.doc=document;this.prePos={x:0,y:0};this.startPos={x:0,y:0}}var c=!1;(function(){var b=[[0,0,-1,-1],[0,0,0,-1],[0,0,1,-1],[0,0,-1,0],[0,0,1,0],[0,0,-1,1],[0,0,0,1],[0,0,1,1]];d.prototype={init:function(a){var b=this;b.editor=a;b.startPos=this.prePos={x:0,y:0};b.dragId=-1;a=[];var c=b.cover=document.createElement("div"),g=b.resizer=document.createElement("div");c.id=b.editor.ui.id+"_imagescale_cover";
c.style.cssText="position:absolute;display:none;z-index:"+b.editor.options.zIndex+";filter:alpha(opacity=0); opacity:0;background:#CCC;";f.on(c,"mousedown click",function(){b.hide()});for(i=0;8>i;i++)a.push('<span class="edui-editor-imagescale-hand'+i+'"></span>');g.id=b.editor.ui.id+"_imagescale";g.className="edui-editor-imagescale";g.innerHTML=a.join("");g.style.cssText+=";left: 7px;top: 43px;z-index:"+b.editor.options.zIndex+";";b.editor.ui.getDom().appendChild(c);b.editor.ui.getDom().appendChild(g);
b.initStyle();b.initEvents()},initStyle:function(){p.cssRule("imagescale",".edui-editor-imagescale{display:none;position:absolute;border:1px solid #38B2CE;cursor:hand;-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;}.edui-editor-imagescale span{position:absolute;width:6px;height:6px;overflow:hidden;font-size:0px;display:block;background-color:#3C9DD0;}.edui-editor-imagescale .edui-editor-imagescale-hand0{cursor:nw-resize;top:0;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand1{cursor:n-resize;top:0;margin-top:-4px;left:50%;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand2{cursor:ne-resize;top:0;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand3{cursor:w-resize;top:50%;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand4{cursor:e-resize;top:50%;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand5{cursor:sw-resize;top:100%;margin-top:-3px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand6{cursor:s-resize;top:100%;margin-top:-3px;left:50%;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand7{cursor:se-resize;top:100%;margin-top:-3px;left:100%;margin-left:-3px;}")},
initEvents:function(){this.startPos.x=this.startPos.y=0;this.isDraging=!1},_eventHandler:function(a){switch(a.type){case "mousedown":var b=a.target||a.srcElement;-1!=b.className.indexOf("edui-editor-imagescale-hand")&&-1==this.dragId&&(this.dragId=b.className.slice(-1),this.startPos.x=this.prePos.x=a.clientX,this.startPos.y=this.prePos.y=a.clientY,f.on(this.doc,"mousemove",this.proxy(this._eventHandler,this)));break;case "mousemove":-1!=this.dragId&&(this.updateContainerStyle(this.dragId,{x:a.clientX-
this.prePos.x,y:a.clientY-this.prePos.y}),this.prePos.x=a.clientX,this.prePos.y=a.clientY,c=!0,this.updateTargetElement());break;case "mouseup":-1!=this.dragId&&(this.updateContainerStyle(this.dragId,{x:a.clientX-this.prePos.x,y:a.clientY-this.prePos.y}),this.updateTargetElement(),this.target.parentNode&&this.attachTo(this.target),this.dragId=-1),f.un(this.doc,"mousemove",this.proxy(this._eventHandler,this)),c&&(c=!1,this.editor.fireEvent("contentchange"))}},updateTargetElement:function(){f.setStyles(this.target,
{width:this.resizer.style.width,height:this.resizer.style.height});this.target.width=parseInt(this.resizer.style.width);this.target.height=parseInt(this.resizer.style.height);this.attachTo(this.target)},updateContainerStyle:function(a,c){var d=this.resizer,g;0!=b[a][0]&&(g=parseInt(d.style.left)+c.x,d.style.left=this._validScaledProp("left",g)+"px");0!=b[a][1]&&(g=parseInt(d.style.top)+c.y,d.style.top=this._validScaledProp("top",g)+"px");0!=b[a][2]&&(g=d.clientWidth+b[a][2]*c.x,d.style.width=this._validScaledProp("width",
g)+"px");0!=b[a][3]&&(g=d.clientHeight+b[a][3]*c.y,d.style.height=this._validScaledProp("height",g)+"px")},_validScaledProp:function(a,b){var c=this.resizer,g=document;b=isNaN(b)?0:b;switch(a){case "left":return 0>b?0:b+c.clientWidth>g.clientWidth?g.clientWidth-c.clientWidth:b;case "top":return 0>b?0:b+c.clientHeight>g.clientHeight?g.clientHeight-c.clientHeight:b;case "width":return 0>=b?1:b+c.offsetLeft>g.clientWidth?g.clientWidth-c.offsetLeft:b;case "height":return 0>=b?1:b+c.offsetTop>g.clientHeight?
g.clientHeight-c.offsetTop:b}},hideCover:function(){this.cover.style.display="none"},showCover:function(){var a=f.getXY(this.editor.ui.getDom()),b=f.getXY(this.editor.iframe);f.setStyles(this.cover,{width:this.editor.iframe.offsetWidth+"px",height:this.editor.iframe.offsetHeight+"px",top:b.y-a.y+"px",left:b.x-a.x+"px",position:"absolute",display:""})},show:function(a){this.resizer.style.display="block";a&&this.attachTo(a);f.on(this.resizer,"mousedown",this.proxy(this._eventHandler,this));f.on(this.doc,
"mouseup",this.proxy(this._eventHandler,this));this.showCover();this.editor.fireEvent("afterscaleshow",this);this.editor.fireEvent("saveScene")},hide:function(){this.hideCover();this.resizer.style.display="none";f.un(this.resizer,"mousedown",this.proxy(this._eventHandler,this));f.un(this.doc,"mouseup",this.proxy(this._eventHandler,this));this.editor.fireEvent("afterscalehide",this)},proxy:function(a,b){return function(c){return a.apply(b||this,arguments)}},attachTo:function(a){a=this.target=a;var b=
this.resizer,c=f.getXY(a),g=f.getXY(this.editor.iframe),d=f.getXY(b.parentNode);f.setStyles(b,{width:a.width+"px",height:a.height+"px",left:g.x+c.x-this.editor.document.body.scrollLeft-d.x-parseInt(b.style.borderLeftWidth)+"px",top:g.y+c.y-this.editor.document.body.scrollTop-d.y-parseInt(b.style.borderTopWidth)+"px"})}}})();return function(){var b=this,a;b.setOpt("imageScaleEnabled",!0);!r.ie&&b.options.imageScaleEnabled&&b.addListener("click",function(c,h){var g=b.selection.getRange().getClosedNode();
if(g&&"IMG"==g.tagName&&"false"!=b.body.contentEditable){if(!(-1!=g.className.indexOf("edui-faked-music")||g.getAttribute("anchorname")||f.hasClass(g,"loadingclass")||f.hasClass(g,"loaderrorclass"))){if(!a){a=new d;a.init(b);b.ui.getDom().appendChild(a.resizer);var l=function(c){a.hide();a.target&&b.selection.getRange().selectNode(a.target).select()},k=function(a){var b=a.target||a.srcElement;!b||void 0!==b.className&&-1!=b.className.indexOf("edui-editor-imagescale")||l(a)},m;b.addListener("afterscaleshow",
function(a){b.addListener("beforekeydown",l);b.addListener("beforemousedown",k);f.on(document,"keydown",l);f.on(document,"mousedown",k);b.selection.getNative().removeAllRanges()});b.addListener("afterscalehide",function(c){b.removeListener("beforekeydown",l);b.removeListener("beforemousedown",k);f.un(document,"keydown",l);f.un(document,"mousedown",k);c=a.target;c.parentNode&&b.selection.getRange().selectNode(c).select()});f.on(a.resizer,"mousedown",function(c){b.selection.getNative().removeAllRanges();
var e=c.target||c.srcElement;e&&-1==e.className.indexOf("edui-editor-imagescale-hand")&&(m=setTimeout(function(){a.hide();a.target&&b.selection.getRange().selectNode(e).select()},200))});f.on(a.resizer,"mouseup",function(a){(a=a.target||a.srcElement)&&-1==a.className.indexOf("edui-editor-imagescale-hand")&&clearTimeout(m)})}a.show(g)}}else a&&"none"!=a.resizer.style.display&&a.hide()});r.webkit&&b.addListener("click",function(a,c){"IMG"==c.target.tagName&&"false"!=b.body.contentEditable&&(new L.Range(b.document)).selectNode(c.target).select()})}}();
UE.plugin.register("autolink",function(){return r.ie?{}:{bindEvents:{reset:function(){},keydown:function(d,c){var b=c.keyCode||c.which;if(32==b||13==b){for(var b=this.selection.getNative(),a=b.getRangeAt(0).cloneRange(),e,h=a.startContainer;1==h.nodeType&&0<a.startOffset;){h=a.startContainer.childNodes[a.startOffset-1];if(!h)break;a.setStart(h,1==h.nodeType?h.childNodes.length:h.nodeValue.length);a.collapse(!0);h=a.startContainer}do{if(0==a.startOffset){for(h=a.startContainer.previousSibling;h&&1==
h.nodeType;)h=h.lastChild;if(!h||f.isFillChar(h))break;e=h.nodeValue.length}else h=a.startContainer,e=a.startOffset;a.setStart(h,e-1);e=a.toString().charCodeAt(0)}while(160!=e&&32!=e);if(a.toString().replace(RegExp(f.fillChar,"g"),"").match(/(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i)){for(;a.toString().length&&!/^(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i.test(a.toString());)try{a.setStart(a.startContainer,a.startOffset+1)}catch(g){for(h=a.startContainer;!(next=h.nextSibling);){if(f.isBody(h))return;
h=h.parentNode}a.setStart(next,0)}if(!f.findParentByTagName(a.startContainer,"a",!0)){e=this.document.createElement("a");var h=this.document.createTextNode(" "),l;this.undoManger&&this.undoManger.save();e.appendChild(a.extractContents());e.href=e.innerHTML=e.innerHTML.replace(/<[^>]+>/g,"");l=e.getAttribute("href").replace(RegExp(f.fillChar,"g"),"");l=/^(?:https?:\/\/)/ig.test(l)?l:"http://"+l;e.setAttribute("_src",p.html(l));e.href=p.html(l);a.insertNode(e);e.parentNode.insertBefore(h,e.nextSibling);
a.setStart(h,0);a.collapse(!0);b.removeAllRanges();b.addRange(a);this.undoManger&&this.undoManger.save()}}}}}}},function(){function d(b){if(3==b.nodeType)return null;if("A"==b.nodeName)return b;for(b=b.lastChild;b;){if("A"==b.nodeName)return b;if(3==b.nodeType){if(f.isWhitespace(b)){b=b.previousSibling;continue}return null}b=b.lastChild}}var c={37:1,38:1,39:1,40:1,13:1,32:1};r.ie&&this.addListener("keyup",function(b,a){var e=a.keyCode;if(c[e]){var h=this.selection.getRange(),g=h.startContainer;if(13==
e){for(;g&&!f.isBody(g)&&!f.isBlockElm(g);)g=g.parentNode;g&&!f.isBody(g)&&"P"==g.nodeName&&(h=g.previousSibling)&&1==h.nodeType&&(h=d(h))&&!h.getAttribute("_href")&&f.remove(h,!0)}else 32==e?3==g.nodeType&&/^\s$/.test(g.nodeValue)&&(g=g.previousSibling)&&"A"==g.nodeName&&!g.getAttribute("_href")&&f.remove(g,!0):(g=f.findParentByTagName(g,"a",!0))&&!g.getAttribute("_href")&&(e=h.createBookmark(),f.remove(g,!0),h.moveToBookmark(e).select(!0))}})});UE.plugins.autoheight=function(){function d(){var b=
this;clearTimeout(g);l||b.queryCommandState&&(!b.queryCommandState||1==b.queryCommandState("source"))||(g=setTimeout(function(){for(var c=b.body.lastChild;c&&1!=c.nodeType;)c=c.previousSibling;c&&1==c.nodeType&&(c.style.clear="both",h=Math.max(f.getXY(c).y+c.offsetHeight+25,Math.max(e.minFrameHeight,e.initialFrameHeight)),h!=a&&(h!==parseInt(b.iframe.parentNode.style.height)&&(b.iframe.parentNode.style.height=h+"px"),b.body.style.height=h+"px",a=h),f.removeStyle(c,"clear"))},50))}var c=this;c.autoHeightEnabled=
!1!==c.options.autoHeightEnabled;if(c.autoHeightEnabled){var b,a=0,e=c.options,h,g,l;c.addListener("fullscreenchanged",function(a,b){l=b});c.addListener("destroy",function(){c.removeListener("contentchange afterinserthtml keyup mouseup",d)});c.enableAutoHeight=function(){var a=this;if(a.autoHeightEnabled){var c=a.document;a.autoHeightEnabled=!0;b=c.body.style.overflowY;c.body.style.overflowY="hidden";a.addListener("contentchange afterinserthtml keyup mouseup",d);setTimeout(function(){d.call(a)},r.gecko?
100:0);a.fireEvent("autoheightchanged",a.autoHeightEnabled)}};c.disableAutoHeight=function(){c.body.style.overflowY=b||"";c.removeListener("contentchange",d);c.removeListener("keyup",d);c.removeListener("mouseup",d);c.autoHeightEnabled=!1;c.fireEvent("autoheightchanged",c.autoHeightEnabled)};c.on("setHeight",function(){c.disableAutoHeight()});c.addListener("ready",function(){c.enableAutoHeight();var a;f.on(r.ie?c.body:c.document,r.webkit?"dragover":"drop",function(){clearTimeout(a);a=setTimeout(function(){d.call(c)},
100)});var b;window.onscroll=function(){null===b?b=this.scrollY:0==this.scrollY&&0!=b&&(c.window.scrollTo(0,0),b=null)}})}};UE.plugins.autofloat=function(){function d(){var a=document.body.style;a.backgroundImage='url("about:blank")';a.backgroundAttachment="fixed"}function c(){y=!0;n.parentNode&&n.parentNode.removeChild(n);q.style.cssText=m}function b(){var b=w(a.container),e=a.options.toolbarTopOffset||0;if(0>b.top&&b.bottom-q.offsetHeight>e){var b=f.getXY(q),e=f.getComputedStyle(q,"position"),g=
f.getComputedStyle(q,"left");q.style.width=q.offsetWidth+"px";q.style.zIndex=1*a.options.zIndex+1;q.parentNode.insertBefore(n,q);l||k&&r.ie?("absolute"!=q.style.position&&(q.style.position="absolute"),q.style.top=(document.body.scrollTop||document.documentElement.scrollTop)-t+h+"px"):(r.ie7Compat&&y&&(y=!1,q.style.left=f.getXY(q).x-document.documentElement.getBoundingClientRect().left+2+"px"),"fixed"!=q.style.position&&(q.style.position="fixed",q.style.top=h+"px",("absolute"==e||"relative"==e)&&parseFloat(g)&&
(q.style.left=b.x+"px")))}else c()}var a=this,e=a.getLang();a.setOpt({topOffset:0});var h=a.options.topOffset;if(!1!==a.options.autoFloatEnabled){var g=UE.ui.uiUtils,l=r.ie&&6>=r.version,k=r.quirks,m,n=document.createElement("div"),q,t,w,y=!0,u=p.defer(function(){b()},r.ie?200:100,!0);a.addListener("destroy",function(){f.un(window,["scroll","resize"],b);a.removeListener("keydown",u)});a.addListener("ready",function(){var h;UE.ui?h=1:(alert(e.autofloatMsg),h=0);h&&a.ui&&(w=g.getClientRect,q=a.ui.getDom("toolbarbox"),
t=w(q).top,m=q.style.cssText,n.style.height=q.offsetHeight+"px",l&&d(),f.on(window,["scroll","resize"],b),a.addListener("keydown",u),a.addListener("beforefullscreenchange",function(a,b){b&&c()}),a.addListener("fullscreenchanged",function(a,c){c||b()}),a.addListener("sourcemodechanged",function(a,c){setTimeout(function(){b()},0)}),a.addListener("clearDoc",function(){setTimeout(function(){b()},0)}))})}};UE.plugins.video=function(){function d(a,c,d,g,f,k,m){var n;switch(m){case "image":n="<img "+(g?
'id="'+g+'"':"")+' width="'+c+'" height="'+d+'" _url="'+a+'" class="'+k.replace(/\bvideo-js\b/,"")+'" src="'+b.options.UEDITOR_HOME_URL+'themes/default/images/spacer.gif" style="background:url('+b.options.UEDITOR_HOME_URL+"themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;"+(f?"float:"+f+";":"")+'" />';break;case "embed":n='<embed type="application/x-shockwave-flash" class="'+k+'" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+p.html(a)+'" width="'+
c+'" height="'+d+'"'+(f?' style="float:'+f+'"':"")+' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';break;case "video":m=a.substr(a.lastIndexOf(".")+1),"ogv"==m&&(m="ogg"),n="<video"+(g?' id="'+g+'"':"")+' class="'+k+' video-js" '+(f?' style="float:'+f+'"':"")+' controls preload="none" width="'+c+'" height="'+d+'" src="'+a+'" data-setup="{}"><source src="'+a+'" type="video/'+m+'" /></video>'}return n}function c(a,b){p.each(a.getNodesByTagName(b?
"img":"embed video"),function(a){var c=a.getAttr("class");if(c&&-1!=c.indexOf("edui-faked-video")){var f=d(b?a.getAttr("_url"):a.getAttr("src"),a.getAttr("width"),a.getAttr("height"),null,a.getStyle("float")||"",c,b?"embed":"image");a.parentNode.replaceChild(UE.uNode.createElement(f),a)}c&&-1!=c.indexOf("edui-upload-video")&&(f=d(b?a.getAttr("_url"):a.getAttr("src"),a.getAttr("width"),a.getAttr("height"),null,a.getStyle("float")||"",c,b?"video":"image"),a.parentNode.replaceChild(UE.uNode.createElement(f),
a))})}var b=this;b.addOutputRule(function(a){c(a,!0)});b.addInputRule(function(a){c(a)});b.commands.insertvideo={execCommand:function(a,c,h){c=p.isArray(c)?c:[c];var g=[],l;a=0;for(var k,m=c.length;a<m;a++)k=c[a],l="upload"==h?"edui-upload-video video-js vjs-default-skin":"edui-faked-video",g.push(d(k.url,k.width||420,k.height||280,"tmpVedio"+a,null,l,"image"));b.execCommand("inserthtml",g.join(""),!0);h=this.selection.getRange();a=0;for(m=c.length;a<m;a++)g=this.document.getElementById("tmpVedio"+
a),f.removeAttributes(g,"id"),h.selectNode(g).select(),b.execCommand("imagefloat",c[a].align)},queryCommandState:function(){var a=b.selection.getRange().getClosedNode();return!a||"edui-faked-video"!=a.className&&-1==a.className.indexOf("edui-upload-video")?0:1}}};(function(){var d=UE.UETable=function(c){this.table=c;this.indexTable=[];this.selectedTds=[];this.cellsRange={};this.update(c)};d.removeSelectedClass=function(c){p.each(c,function(b){f.removeClasses(b,"selectTdClass")})};d.addSelectedClass=
function(c){p.each(c,function(b){f.addClass(b,"selectTdClass")})};d.isEmptyBlock=function(c){var b=RegExp(f.fillChar,"g");if(0<c[r.ie?"innerText":"textContent"].replace(/^\s*$/,"").replace(b,"").length)return 0;for(var a in v.$isNotEmpty)if(v.$isNotEmpty.hasOwnProperty(a)&&c.getElementsByTagName(a).length)return 0;return 1};d.getWidth=function(c){return c?parseInt(f.getComputedStyle(c,"width"),10):0};d.getTableCellAlignState=function(c){!p.isArray(c)&&(c=[c]);var b={},a=["align","valign"],e=null,
d=!0;p.each(c,function(c){p.each(a,function(a){e=c.getAttribute(a);if(!b[a]&&e)b[a]=e;else if(!b[a]||e!==b[a])return d=!1});return d});return d?b:null};d.getTableItemsByRange=function(c){var b=c.selection.getStart();b&&b.id&&0===b.id.indexOf("_baidu_bookmark_start_")&&b.nextSibling&&(b=b.nextSibling);var a=(c=b&&f.findParentByTagName(b,["td","th"],!0))&&c.parentNode,b=b&&f.findParentByTagName(b,"caption",!0);return{cell:c,tr:a,table:b?b.parentNode:a&&a.parentNode.parentNode,caption:b}};d.getUETableBySelected=
function(c){return(c=d.getTableItemsByRange(c).table)&&c.ueTable&&c.ueTable.selectedTds.length?c.ueTable:null};d.getDefaultValue=function(c,b){var a={thin:"0px",medium:"1px",thick:"2px"},e,d,g;if(b)l=b.getElementsByTagName("td")[0],g=f.getComputedStyle(b,"border-left-width"),e=parseInt(a[g]||g,10),g=f.getComputedStyle(l,"padding-left"),d=parseInt(a[g]||g,10),g=f.getComputedStyle(l,"border-left-width"),a=parseInt(a[g]||g,10);else{b=c.document.createElement("table");b.insertRow(0).insertCell(0).innerHTML=
"xxx";c.body.appendChild(b);var l=b.getElementsByTagName("td")[0];g=f.getComputedStyle(b,"border-left-width");e=parseInt(a[g]||g,10);g=f.getComputedStyle(l,"padding-left");d=parseInt(a[g]||g,10);g=f.getComputedStyle(l,"border-left-width");a=parseInt(a[g]||g,10);f.remove(b)}return{tableBorder:e,tdPadding:d,tdBorder:a}};d.getUETable=function(c){var b=c.tagName.toLowerCase();c="td"==b||"th"==b||"caption"==b?f.findParentByTagName(c,"table",!0):c;c.ueTable||(c.ueTable=new d(c));return c.ueTable};d.cloneCell=
function(c,b,a){if(!c||p.isString(c))return this.table.ownerDocument.createElement(c||"td");var e=f.hasClass(c,"selectTdClass");e&&f.removeClasses(c,"selectTdClass");var d=c.cloneNode(!0);b&&(d.rowSpan=d.colSpan=1);!a&&f.removeAttributes(d,"width height");!a&&f.removeAttributes(d,"style");d.style.borderLeftStyle="";d.style.borderTopStyle="";d.style.borderLeftColor=c.style.borderRightColor;d.style.borderLeftWidth=c.style.borderRightWidth;d.style.borderTopColor=c.style.borderBottomColor;d.style.borderTopWidth=
c.style.borderBottomWidth;e&&f.addClass(c,"selectTdClass");return d};d.prototype={getMaxRows:function(){for(var c=this.table.rows,b=1,a=0,e;e=c[a];a++){for(var d=1,g=0,f;f=e.cells[g++];)d=Math.max(f.rowSpan||1,d);b=Math.max(d+a,b)}return b},getMaxCols:function(){for(var c=this.table.rows,b=0,a={},e=0,d;d=c[e];e++){for(var g=0,f=0,k;k=d.cells[f++];)if(g+=k.colSpan||1,k.rowSpan&&1<k.rowSpan)for(var m=1;m<k.rowSpan;m++)a["row_"+(e+m)]?a["row_"+(e+m)]++:a["row_"+(e+m)]=k.colSpan||1;g+=a["row_"+e]||0;
b=Math.max(g,b)}return b},getCellColIndex:function(c){},getHSideCell:function(c,b){try{var a=this.getCellInfo(c),e,d,g=this.selectedTds.length,f=this.cellsRange;if(!b&&(g?!f.beginColIndex:!a.colIndex)||b&&(g?f.endColIndex==this.colsNum-1:a.colIndex==this.colsNum-1))return null;e=g?f.beginRowIndex:a.rowIndex;d=b?g?f.endColIndex+1:a.colIndex+1:g?f.beginColIndex-1:1>a.colIndex?0:a.colIndex-1;return this.getCell(this.indexTable[e][d].rowIndex,this.indexTable[e][d].cellIndex)}catch(k){}},getTabNextCell:function(c,
b){var a=this.getCellInfo(c),e=b||a.rowIndex,a=a.colIndex+1+(a.colSpan-1),d;try{d=this.getCell(this.indexTable[e][a].rowIndex,this.indexTable[e][a].cellIndex)}catch(g){try{e=1*e+1,a=0,d=this.getCell(this.indexTable[e][a].rowIndex,this.indexTable[e][a].cellIndex)}catch(f){}}return d},getVSideCell:function(c,b,a){try{var e=this.getCellInfo(c),d,g,f=this.selectedTds.length&&!a,k=this.cellsRange;if(!b&&0==e.rowIndex||b&&(f?k.endRowIndex==this.rowsNum-1:e.rowIndex+e.rowSpan>this.rowsNum-1))return null;
d=b?f?k.endRowIndex+1:e.rowIndex+e.rowSpan:f?k.beginRowIndex-1:e.rowIndex-1;g=f?k.beginColIndex:e.colIndex;return this.getCell(this.indexTable[d][g].rowIndex,this.indexTable[d][g].cellIndex)}catch(m){}},getSameEndPosCells:function(c,b){try{for(var a="x"===b.toLowerCase(),e=f.getXY(c)[a?"x":"y"]+c["offset"+(a?"Width":"Height")],d=this.table.rows,g=null,l=[],k=0;k<this.rowsNum;k++)for(var g=d[k].cells,m=0,n;n=g[m++];){var q=f.getXY(n)[a?"x":"y"]+n["offset"+(a?"Width":"Height")];if(q>e&&a)break;if(c==
n||e==q)if(1==n[a?"colSpan":"rowSpan"]&&l.push(n),a)break}return l}catch(t){}},setCellContent:function(c,b){c.innerHTML=b||(r.ie?f.fillChar:"<br />")},cloneCell:d.cloneCell,getSameStartPosXCells:function(c){try{var b=f.getXY(c).x+c.offsetWidth,a=this.table.rows,e;c=[];for(var d=0;d<this.rowsNum;d++){e=a[d].cells;for(var g=0,l;l=e[g++];){var k=f.getXY(l).x;if(k>b)break;if(k==b&&1==l.colSpan){c.push(l);break}}}return c}catch(m){}},update:function(c){this.table=c||this.table;this.selectedTds=[];this.cellsRange=
{};this.indexTable=[];c=this.table.rows;for(var b=this.getMaxRows(),a=b-c.length,e=this.getMaxCols();a--;)this.table.insertRow(c.length);this.rowsNum=b;this.colsNum=e;for(var a=0,d=c.length;a<d;a++)this.indexTable[a]=Array(e);for(var a=0,g;g=c[a];a++){var d=0,l;for(g=g.cells;l=g[d];d++){l.rowSpan>b&&(l.rowSpan=b);var k=d,m=l.rowSpan||1;for(l=l.colSpan||1;this.indexTable[a][k];)k++;for(var n=0;n<m;n++)for(var q=0;q<l;q++)this.indexTable[a+n][k+q]={rowIndex:a,cellIndex:d,colIndex:k,rowSpan:m,colSpan:l}}}for(n=
0;n<b;n++)for(q=0;q<e;q++)void 0===this.indexTable[n][q]&&(g=c[n],l=(l=g.cells[g.cells.length-1])?l.cloneNode(!0):this.table.ownerDocument.createElement("td"),this.setCellContent(l),1!==l.colSpan&&(l.colSpan=1),1!==l.rowSpan&&(l.rowSpan=1),g.appendChild(l),this.indexTable[n][q]={rowIndex:n,cellIndex:l.cellIndex,colIndex:q,rowSpan:1,colSpan:1});c=f.getElementsByTagName(this.table,"td");var t=[];p.each(c,function(a){f.hasClass(a,"selectTdClass")&&t.push(a)});t.length&&(b=t[t.length-1],c=this.getCellInfo(t[0]),
b=this.getCellInfo(b),this.selectedTds=t,this.cellsRange={beginRowIndex:c.rowIndex,beginColIndex:c.colIndex,endRowIndex:b.rowIndex+b.rowSpan-1,endColIndex:b.colIndex+b.colSpan-1});if(!f.hasClass(this.table.rows[0],"firstRow"))for(f.addClass(this.table.rows[0],"firstRow"),a=1;a<this.table.rows.length;a++)f.removeClasses(this.table.rows[a],"firstRow")},getCellInfo:function(c){if(c){var b=c.cellIndex;c=c.parentNode.rowIndex;for(var a=this.indexTable[c],e=this.colsNum,d=b;d<e;d++){var g=a[d];if(g.rowIndex===
c&&g.cellIndex===b)return g}}},getCell:function(c,b){return c<this.rowsNum&&this.table.rows[c].cells[b]||null},deleteCell:function(c,b){b="number"==typeof b?b:c.parentNode.rowIndex;this.table.rows[b].deleteCell(c.cellIndex)},getCellsRange:function(c,b){function a(b,c,g,d){var k=b,h=c,f=g,l=d,n,m,q;if(0<b)for(m=c;m<d;m++)n=e.indexTable[b][m],q=n.rowIndex,q<b&&(k=Math.min(q,k));if(d<e.colsNum)for(q=b;q<g;q++)n=e.indexTable[q][d],m=n.colIndex+n.colSpan-1,m>d&&(l=Math.max(m,l));if(g<e.rowsNum)for(m=c;m<
d;m++)n=e.indexTable[g][m],q=n.rowIndex+n.rowSpan-1,q>g&&(f=Math.max(q,f));if(0<c)for(q=b;q<g;q++)n=e.indexTable[q][c],m=n.colIndex,m<c&&(h=Math.min(n.colIndex,h));return k!=b||h!=c||f!=g||l!=d?a(k,h,f,l):{beginRowIndex:b,beginColIndex:c,endRowIndex:g,endColIndex:d}}try{var e=this,d=e.getCellInfo(c);if(c===b)return{beginRowIndex:d.rowIndex,beginColIndex:d.colIndex,endRowIndex:d.rowIndex+d.rowSpan-1,endColIndex:d.colIndex+d.colSpan-1};var g=e.getCellInfo(b),f=Math.min(d.rowIndex,g.rowIndex),k=Math.min(d.colIndex,
g.colIndex),m=Math.max(d.rowIndex+d.rowSpan-1,g.rowIndex+g.rowSpan-1),n=Math.max(d.colIndex+d.colSpan-1,g.colIndex+g.colSpan-1);return a(f,k,m,n)}catch(q){}},getCells:function(c){this.clearSelected();for(var b=c.beginColIndex,a=c.endRowIndex,e=c.endColIndex,d,g,f={},k=[],m=c.beginRowIndex;m<=a;m++)for(var n=b;n<=e;n++){c=this.indexTable[m][n];d=c.rowIndex;g=c.colIndex;var q=d+"|"+g;if(!f[q]){f[q]=1;if(d<m||g<n||d+c.rowSpan-1>a||g+c.colSpan-1>e)return null;k.push(this.getCell(d,c.cellIndex))}}return k},
clearSelected:function(){d.removeSelectedClass(this.selectedTds);this.selectedTds=[];this.cellsRange={}},setSelected:function(c){var b=this.getCells(c);d.addSelectedClass(b);this.selectedTds=b;this.cellsRange=c},isFullRow:function(){var c=this.cellsRange;return c.endColIndex-c.beginColIndex+1==this.colsNum},isFullCol:function(){var c=this.cellsRange,b=this.table.getElementsByTagName("th"),c=c.endRowIndex-c.beginRowIndex+1;return b.length?c==this.rowsNum||c==this.rowsNum-1:c==this.rowsNum},getNextCell:function(c,
b,a){try{var e=this.getCellInfo(c),d,g,f=this.selectedTds.length&&!a,k=this.cellsRange;if(!b&&0==e.rowIndex||b&&(f?k.endRowIndex==this.rowsNum-1:e.rowIndex+e.rowSpan>this.rowsNum-1))return null;d=b?f?k.endRowIndex+1:e.rowIndex+e.rowSpan:f?k.beginRowIndex-1:e.rowIndex-1;g=f?k.beginColIndex:e.colIndex;return this.getCell(this.indexTable[d][g].rowIndex,this.indexTable[d][g].cellIndex)}catch(m){}},getPreviewCell:function(c,b){try{var a=this.getCellInfo(c),e,d,g=this.selectedTds.length,f=this.cellsRange;
if(!b&&(g?!f.beginColIndex:!a.colIndex)||b&&(g?f.endColIndex==this.colsNum-1:a.rowIndex>this.colsNum-1))return null;e=b?g?f.beginRowIndex:1>a.rowIndex?0:a.rowIndex-1:g?f.beginRowIndex:a.rowIndex;d=b?g?f.endColIndex+1:a.colIndex:g?f.beginColIndex-1:1>a.colIndex?0:a.colIndex-1;return this.getCell(this.indexTable[e][d].rowIndex,this.indexTable[e][d].cellIndex)}catch(k){}},moveContent:function(c,b){if(!d.isEmptyBlock(b))if(d.isEmptyBlock(c))c.innerHTML=b.innerHTML;else{var a=c.lastChild;for(3!=a.nodeType&&
v.$block[a.tagName]||c.appendChild(c.ownerDocument.createElement("br"));a=b.firstChild;)c.appendChild(a)}},mergeRight:function(c){var b=this.getCellInfo(c),a=this.indexTable[b.rowIndex][b.colIndex+b.colSpan],e=this.getCell(a.rowIndex,a.cellIndex);c.colSpan=b.colSpan+a.colSpan;c.removeAttribute("width");this.moveContent(c,e);this.deleteCell(e,a.rowIndex);this.update()},mergeDown:function(c){var b=this.getCellInfo(c),a=this.indexTable[b.rowIndex+b.rowSpan][b.colIndex],e=this.getCell(a.rowIndex,a.cellIndex);
c.rowSpan=b.rowSpan+a.rowSpan;c.removeAttribute("height");this.moveContent(c,e);this.deleteCell(e,a.rowIndex);this.update()},mergeRange:function(){var c=this.cellsRange,b=this.getCell(c.beginRowIndex,this.indexTable[c.beginRowIndex][c.beginColIndex].cellIndex);if("TH"==b.tagName&&c.endRowIndex!==c.beginRowIndex)var a=this.indexTable,c=this.getCellInfo(b),b=this.getCell(1,a[1][c.colIndex].cellIndex),c=this.getCellsRange(b,this.getCell(a[this.rowsNum-1][c.colIndex].rowIndex,a[this.rowsNum-1][c.colIndex].cellIndex));
for(var e=this.getCells(c),a=0,d;d=e[a++];)d!==b&&(this.moveContent(b,d),this.deleteCell(d));b.rowSpan=c.endRowIndex-c.beginRowIndex+1;1<b.rowSpan&&b.removeAttribute("height");b.colSpan=c.endColIndex-c.beginColIndex+1;1<b.colSpan&&b.removeAttribute("width");b.rowSpan==this.rowsNum&&1!=b.colSpan&&(b.colSpan=1);if(b.colSpan==this.colsNum&&1!=b.rowSpan){e=b.parentNode.rowIndex;if(this.table.deleteRow)for(a=e+1,e+=1,c=b.rowSpan;a<c;a++)this.table.deleteRow(e);else for(a=0,c=b.rowSpan-1;a<c;a++)d=this.table.rows[e+
1],d.parentNode.removeChild(d);b.rowSpan=1}this.update()},insertRow:function(c,b){function a(a,b,c){0==a?(a=(c.nextSibling||c.previousSibling).cells[a],"TH"==a.tagName&&(a=b.ownerDocument.createElement("th"),a.appendChild(b.firstChild),c.insertBefore(a,b),f.remove(b))):"TH"==b.tagName&&(a=b.ownerDocument.createElement("td"),a.appendChild(b.firstChild),c.insertBefore(a,b),f.remove(b))}var e=this.colsNum,d=this.table.insertRow(c),g,l="string"==typeof b&&"TH"==b.toUpperCase();if(0==c||c==this.rowsNum)for(var k=
0;k<e;k++)g=this.cloneCell(b,!0),this.setCellContent(g),g.getAttribute("vAlign")&&g.setAttribute("vAlign",g.getAttribute("vAlign")),d.appendChild(g),l||a(k,g,d);else for(var m=this.indexTable[c],k=0;k<e;k++){var n=m[k];n.rowIndex<c?(g=this.getCell(n.rowIndex,n.cellIndex),g.rowSpan=n.rowSpan+1):(g=this.cloneCell(b,!0),this.setCellContent(g),d.appendChild(g));l||a(k,g,d)}this.update();return d},deleteRow:function(c){for(var b=this.table.rows[c],a=this.indexTable[c],e=this.colsNum,d=0,g=0;g<e;){var l=
a[g],k=this.getCell(l.rowIndex,l.cellIndex);if(1<k.rowSpan&&l.rowIndex==c){l=k.cloneNode(!0);l.rowSpan=k.rowSpan-1;l.innerHTML="";k.rowSpan=1;var m=c+1,n=this.table.rows[m],m=this.getPreviewMergedCellsNum(m,g)-d;m<g?(m=g-m-1,f.insertAfter(n.cells[m],l)):n.cells.length&&n.insertBefore(l,n.cells[0]);d+=1}g+=k.colSpan||1}c=[];d={};for(g=0;g<e;g++)k=a[g].rowIndex,l=a[g].cellIndex,n=k+"_"+l,d[n]||(d[n]=1,k=this.getCell(k,l),c.push(k));var q=[];p.each(c,function(a){1==a.rowSpan?a.parentNode.removeChild(a):
q.push(a)});p.each(q,function(a){a.rowSpan--});b.parentNode.removeChild(b);this.update()},insertCol:function(c,b,a){function e(a,b,c){0==a?(a=b.nextSibling||b.previousSibling,"TH"==a.tagName&&(a=b.ownerDocument.createElement("th"),a.appendChild(b.firstChild),c.insertBefore(a,b),f.remove(b))):"TH"==b.tagName&&(a=b.ownerDocument.createElement("td"),a.appendChild(b.firstChild),c.insertBefore(a,b),f.remove(b))}var d=this.rowsNum,g=0,l,k,m=parseInt((this.table.offsetWidth-20*(this.colsNum+1)-(this.colsNum+
1))/(this.colsNum+1),10),n="string"==typeof b&&"TH"==b.toUpperCase(),q;if(0==c||c==this.colsNum)for(;g<d;g++)l=this.table.rows[g],q=l.cells[0==c?c:l.cells.length],k=this.cloneCell(b,!0),this.setCellContent(k),k.setAttribute("vAlign",k.getAttribute("vAlign")),q&&k.setAttribute("width",q.getAttribute("width")),c?f.insertAfter(l.cells[l.cells.length-1],k):l.insertBefore(k,l.cells[0]),n||e(g,k,l);else for(;g<d;g++)q=this.indexTable[g][c],q.colIndex<c?(k=this.getCell(q.rowIndex,q.cellIndex),k.colSpan=
q.colSpan+1):(l=this.table.rows[g],q=l.cells[q.cellIndex],k=this.cloneCell(b,!0),this.setCellContent(k),k.setAttribute("vAlign",k.getAttribute("vAlign")),q&&k.setAttribute("width",q.getAttribute("width")),q?l.insertBefore(k,q):l.appendChild(k)),n||e(g,k,l);this.update();this.updateWidth(m,a||{tdPadding:10,tdBorder:1})},updateWidth:function(c,b){var a=this.table,e=d.getWidth(a)-2*b.tdPadding-b.tdBorder+c;e<a.ownerDocument.body.offsetWidth?a.setAttribute("width",e):(a=f.getElementsByTagName(this.table,
"td th"),p.each(a,function(a){a.setAttribute("width",c)}))},deleteCol:function(c){for(var b=this.indexTable,a=this.table.rows,e=this.table.getAttribute("width"),d=0,g=this.rowsNum,f={},k=0;k<g;){var m=b[k][c],n=m.rowIndex+"_"+m.colIndex;f[n]||(f[n]=1,n=this.getCell(m.rowIndex,m.cellIndex),d||(d=n&&parseInt(n.offsetWidth/n.colSpan,10).toFixed(0)),1<n.colSpan?n.colSpan--:a[k].deleteCell(m.cellIndex),k+=m.rowSpan||1)}this.table.setAttribute("width",e-d);this.update()},splitToCells:function(c){var b=
this;c=this.splitToRows(c);p.each(c,function(a){b.splitToCols(a)})},splitToRows:function(c){var b=this.getCellInfo(c),a=b.rowIndex,e=b.colIndex,d=[];c.rowSpan=1;d.push(c);for(var g=a,f=a+b.rowSpan;g<f;g++)if(g!=a){var k=this.table.rows[g].insertCell(e-this.getPreviewMergedCellsNum(g,e));k.colSpan=b.colSpan;this.setCellContent(k);k.setAttribute("vAlign",c.getAttribute("vAlign"));k.setAttribute("align",c.getAttribute("align"));c.style.cssText&&(k.style.cssText=c.style.cssText);d.push(k)}this.update();
return d},getPreviewMergedCellsNum:function(c,b){for(var a=this.indexTable[c],e=0,d=0;d<b;)var g=a[d].colSpan,e=e+(g-(a[d].rowIndex==c?1:0)),d=d+g;return e},splitToCols:function(c){var b=(c.offsetWidth/c.colSpan-22).toFixed(0),a=this.getCellInfo(c),e=a.rowIndex,d=a.colIndex,g=[];c.colSpan=1;c.setAttribute("width",b);g.push(c);for(var l=d,k=d+a.colSpan;l<k;l++)if(l!=d){var m=this.table.rows[e],n=m.insertCell(this.indexTable[e][l].cellIndex+1);n.rowSpan=a.rowSpan;this.setCellContent(n);n.setAttribute("vAlign",
c.getAttribute("vAlign"));n.setAttribute("align",c.getAttribute("align"));n.setAttribute("width",b);c.style.cssText&&(n.style.cssText=c.style.cssText);if("TH"==c.tagName){var q=c.ownerDocument.createElement("th");q.appendChild(n.firstChild);q.setAttribute("vAlign",c.getAttribute("vAlign"));q.rowSpan=n.rowSpan;m.insertBefore(q,n);f.remove(n)}g.push(n)}this.update();return g},isLastCell:function(c,b,a){b=b||this.rowsNum;a=a||this.colsNum;c=this.getCellInfo(c);return c.rowIndex+c.rowSpan==b&&c.colIndex+
c.colSpan==a},getLastCell:function(c){c=c||this.table.getElementsByTagName("td");this.getCellInfo(c[0]);var b=this,a=c[0],e=a.parentNode,d=0,g=0,f;p.each(c,function(a){a.parentNode==e&&(g+=a.colSpan||1);d+=a.rowSpan*a.colSpan||1});f=d/g;p.each(c,function(c){if(b.isLastCell(c,f,g))return a=c,!1});return a},selectRow:function(c){var b=this.indexTable[c];c=this.getCell(b[0].rowIndex,b[0].cellIndex);b=this.getCell(b[this.colsNum-1].rowIndex,b[this.colsNum-1].cellIndex);c=this.getCellsRange(c,b);this.setSelected(c)},
selectTable:function(){var c=this.table.getElementsByTagName("td"),c=this.getCellsRange(c[0],c[c.length-1]);this.setSelected(c)},setBackground:function(c,b){if("string"===typeof b)p.each(c,function(a){a.style.backgroundColor=b});else if("object"===typeof b){b=p.extend({repeat:!0,colorList:["#ddd","#fff"]},b);for(var a=this.getCellInfo(c[0]).rowIndex,e=0,d=b.colorList,g=function(a,b,c){return a[b]?a[b]:c?a[b%a.length]:""},f=0,k;k=c[f++];){var m=this.getCellInfo(k);k.style.backgroundColor=g(d,a+e==
m.rowIndex?e:++e,b.repeat)}}},removeBackground:function(c){p.each(c,function(b){b.style.backgroundColor=""})}}})();(function(){function d(b,e){var d=f.getElementsByTagName(b,"td th");p.each(d,function(a){a.removeAttribute("width")});b.setAttribute("width",c(e,!0,a.getDefaultValue(e,b)));var h=[];setTimeout(function(){p.each(d,function(a){1==a.colSpan&&h.push(a.offsetWidth)});p.each(d,function(a,b){1==a.colSpan&&a.setAttribute("width",h[b]+"")})},0)}function c(a,b,c){var e=a.body;return e.offsetWidth-
(b?2*parseInt(f.getComputedStyle(e,"margin-left"),10):0)-2*c.tableBorder-(a.options.offsetWidth||0)}function b(a){if(a=e(a).cell){var b=h(a);return b.selectedTds.length?b.selectedTds:[a]}return[]}var a=UE.UETable,e=function(b){return a.getTableItemsByRange(b)},h=function(b){return a.getUETable(b)};UE.commands.inserttable={queryCommandState:function(){return e(this).table?-1:0},execCommand:function(b,c){c||(c=p.extend({},{numCols:this.options.defaultCols,numRows:this.options.defaultRows,tdvalign:this.options.tdvalign}));
var e=this.selection.getRange().startContainer,e=f.findParent(e,function(a){return f.isBlockElm(a)},!0)||this.body,d=a.getDefaultValue(this,void 0),e=Math.floor(e.offsetWidth/c.numCols-2*d.tdPadding-d.tdBorder);!c.tdvalign&&(c.tdvalign=this.options.tdvalign);this.execCommand("inserthtml",function(a,b){for(var c=[],e=a.numRows,d=a.numCols,g=0;g<e;g++){c.push("<tr"+(0==g?' class="firstRow"':"")+">");for(var k=0;k<d;k++)c.push('<td width="'+b+'"  vAlign="'+a.tdvalign+'" >'+(r.ie&&11>r.version?f.fillChar:
"<br/>")+"</td>");c.push("</tr>")}return"<table><tbody>"+c.join("")+"</tbody></table>"}(c,e))}};UE.commands.insertparagraphbeforetable={queryCommandState:function(){return e(this).cell?0:-1},execCommand:function(){var a=e(this).table;if(a){var b=this.document.createElement("p");b.innerHTML=r.ie?"&nbsp;":"<br />";a.parentNode.insertBefore(b,a);this.selection.getRange().setStart(b,0).setCursor()}}};UE.commands.deletetable={queryCommandState:function(){var a=this.selection.getRange();return f.findParentByTagName(a.startContainer,
"table",!0)?0:-1},execCommand:function(a,b){var c=this.selection.getRange();if(b=b||f.findParentByTagName(c.startContainer,"table",!0)){var e=b.nextSibling;e||(e=f.createElement(this.document,"p",{innerHTML:r.ie?f.fillChar:"<br/>"}),b.parentNode.insertBefore(e,b));f.remove(b);c=this.selection.getRange();3==e.nodeType?c.setStartBefore(e):c.setStart(e,0);c.setCursor(!1,!0);this.fireEvent("tablehasdeleted")}}};UE.commands.cellalign={queryCommandState:function(){return b(this).length?0:-1},execCommand:function(a,
c){var e=b(this);if(e.length)for(var d=0,f;f=e[d++];)f.setAttribute("align",c)}};UE.commands.cellvalign={queryCommandState:function(){return b(this).length?0:-1},execCommand:function(a,c){var e=b(this);if(e.length)for(var d=0,f;f=e[d++];)f.setAttribute("vAlign",c)}};UE.commands.insertcaption={queryCommandState:function(){var a=e(this).table;return a?0==a.getElementsByTagName("caption").length?1:-1:-1},execCommand:function(){var a=e(this).table;if(a){var b=this.document.createElement("caption");b.innerHTML=
r.ie?f.fillChar:"<br/>";a.insertBefore(b,a.firstChild);this.selection.getRange().setStart(b,0).setCursor()}}};UE.commands.deletecaption={queryCommandState:function(){var a=this.selection.getRange();return(a=f.findParentByTagName(a.startContainer,"table"))?0==a.getElementsByTagName("caption").length?-1:1:-1},execCommand:function(){var a=this.selection.getRange();if(a=f.findParentByTagName(a.startContainer,"table"))f.remove(a.getElementsByTagName("caption")[0]),this.selection.getRange().setStart(a.rows[0].cells[0],
0).setCursor()}};UE.commands.inserttitle={queryCommandState:function(){var a=e(this).table;return a?(a=a.rows[0],"th"!=a.cells[a.cells.length-1].tagName.toLowerCase()?0:-1):-1},execCommand:function(){var a=e(this).table;a&&h(a).insertRow(0,"th");a=a.getElementsByTagName("th")[0];this.selection.getRange().setStart(a,0).setCursor(!1,!0)}};UE.commands.deletetitle={queryCommandState:function(){var a=e(this).table;return a?(a=a.rows[0],"th"==a.cells[a.cells.length-1].tagName.toLowerCase()?0:-1):-1},execCommand:function(){var a=
e(this).table;a&&f.remove(a.rows[0]);a=a.getElementsByTagName("td")[0];this.selection.getRange().setStart(a,0).setCursor(!1,!0)}};UE.commands.inserttitlecol={queryCommandState:function(){var a=e(this).table;return a?a.rows[a.rows.length-1].getElementsByTagName("th").length?-1:0:-1},execCommand:function(a){(a=e(this).table)&&h(a).insertCol(0,"th");d(a,this);a=a.getElementsByTagName("th")[0];this.selection.getRange().setStart(a,0).setCursor(!1,!0)}};UE.commands.deletetitlecol={queryCommandState:function(){var a=
e(this).table;return a?a.rows[a.rows.length-1].getElementsByTagName("th").length?0:-1:-1},execCommand:function(){var a=e(this).table;if(a)for(var b=0;b<a.rows.length;b++)f.remove(a.rows[b].children[0]);d(a,this);a=a.getElementsByTagName("td")[0];this.selection.getRange().setStart(a,0).setCursor(!1,!0)}};UE.commands.mergeright={queryCommandState:function(a){var b=e(this);a=b.table;b=b.cell;if(!a||!b)return-1;var c=h(a);if(c.selectedTds.length)return-1;var d=c.getCellInfo(b),f=d.colIndex+d.colSpan;
if(f>=c.colsNum)return-1;c=c.indexTable[d.rowIndex][f];return(a=a.rows[c.rowIndex].cells[c.cellIndex])&&b.tagName==a.tagName?c.rowIndex==d.rowIndex&&c.rowSpan==d.rowSpan?0:-1:-1},execCommand:function(a){a=this.selection.getRange();var b=a.createBookmark(!0),c=e(this).cell;h(c).mergeRight(c);a.moveToBookmark(b).select()}};UE.commands.mergedown={queryCommandState:function(a){var b=e(this);a=b.table;b=b.cell;if(!a||!b)return-1;var c=h(a);if(c.selectedTds.length)return-1;var d=c.getCellInfo(b),f=d.rowIndex+
d.rowSpan;if(f>=c.rowsNum)return-1;c=c.indexTable[f][d.colIndex];return(a=a.rows[c.rowIndex].cells[c.cellIndex])&&b.tagName==a.tagName?c.colIndex==d.colIndex&&c.colSpan==d.colSpan?0:-1:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this).cell;h(c).mergeDown(c);a.moveToBookmark(b).select()}};UE.commands.mergecells={queryCommandState:function(){return a.getUETableBySelected(this)?0:-1},execCommand:function(){var b=a.getUETableBySelected(this);if(b&&b.selectedTds.length){var c=
b.selectedTds[0];b.mergeRange();b=this.selection.getRange();f.isEmptyBlock(c)?b.setStart(c,0).collapse(!0):b.selectNodeContents(c);b.select()}}};UE.commands.insertrow={queryCommandState:function(){var a=e(this),b=a.cell;return b&&("TD"==b.tagName||"TH"==b.tagName&&a.tr!==a.table.rows[0])&&h(a.table).rowsNum<this.options.maxRowNum?0:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this),d=c.cell,c=c.table,f=h(c),q=f.getCellInfo(d);if(f.selectedTds.length)for(var q=
f.cellsRange,t=0,w=q.endRowIndex-q.beginRowIndex+1;t<w;t++)f.insertRow(q.beginRowIndex,d);else f.insertRow(q.rowIndex,d);a.moveToBookmark(b).select();"enabled"===c.getAttribute("interlaced")&&this.fireEvent("interlacetable",c)}};UE.commands.insertrownext={queryCommandState:function(){var a=e(this),b=a.cell;return b&&"TD"==b.tagName&&h(a.table).rowsNum<this.options.maxRowNum?0:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this),d=c.cell,c=c.table,f=h(c),q=f.getCellInfo(d);
if(f.selectedTds.length)for(var q=f.cellsRange,t=0,w=q.endRowIndex-q.beginRowIndex+1;t<w;t++)f.insertRow(q.endRowIndex+1,d);else f.insertRow(q.rowIndex+q.rowSpan,d);a.moveToBookmark(b).select();"enabled"===c.getAttribute("interlaced")&&this.fireEvent("interlacetable",c)}};UE.commands.deleterow={queryCommandState:function(){return e(this).cell?0:-1},execCommand:function(){var a=e(this).cell,b=h(a),c=b.cellsRange,d=b.getCellInfo(a),n=b.getVSideCell(a),q=b.getVSideCell(a,!0),a=this.selection.getRange();
if(p.isEmptyObject(c))b.deleteRow(d.rowIndex);else for(var t=c.beginRowIndex;t<c.endRowIndex+1;t++)b.deleteRow(c.beginRowIndex);t=b.table;t.getElementsByTagName("td").length?1==d.rowSpan||d.rowSpan==c.endRowIndex-c.beginRowIndex+1?(q||n)&&a.selectNodeContents(q||n).setCursor(!1,!0):(b=b.getCell(d.rowIndex,b.indexTable[d.rowIndex][d.colIndex].cellIndex))&&a.selectNodeContents(b).setCursor(!1,!0):(b=t.nextSibling,f.remove(t),b&&a.setStart(b,0).setCursor(!1,!0));"enabled"===t.getAttribute("interlaced")&&
this.fireEvent("interlacetable",t)}};UE.commands.insertcol={queryCommandState:function(a){a=e(this);var b=a.cell;return b&&("TD"==b.tagName||"TH"==b.tagName&&b!==a.tr.cells[0])&&h(a.table).colsNum<this.options.maxColNum?0:-1},execCommand:function(a){var b=this.selection.getRange(),c=b.createBookmark(!0);if(-1!=this.queryCommandState(a)){a=e(this).cell;var d=h(a),f=d.getCellInfo(a);if(d.selectedTds.length)for(var f=d.cellsRange,q=0,t=f.endColIndex-f.beginColIndex+1;q<t;q++)d.insertCol(f.beginColIndex,
a);else d.insertCol(f.colIndex,a);b.moveToBookmark(c).select(!0)}}};UE.commands.insertcolnext={queryCommandState:function(){var a=e(this);return a.cell&&h(a.table).colsNum<this.options.maxColNum?0:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this).cell,d=h(c),f=d.getCellInfo(c);if(d.selectedTds.length)for(var f=d.cellsRange,q=0,t=f.endColIndex-f.beginColIndex+1;q<t;q++)d.insertCol(f.endColIndex+1,c);else d.insertCol(f.colIndex+f.colSpan,c);a.moveToBookmark(b).select()}};
UE.commands.deletecol={queryCommandState:function(){return e(this).cell?0:-1},execCommand:function(){var a=e(this).cell,b=h(a),c=b.cellsRange,d=b.getCellInfo(a),n=b.getHSideCell(a),q=b.getHSideCell(a,!0);if(p.isEmptyObject(c))b.deleteCol(d.colIndex);else for(d=c.beginColIndex;d<c.endColIndex+1;d++)b.deleteCol(c.beginColIndex);b=b.table;c=this.selection.getRange();b.getElementsByTagName("td").length?f.inDoc(a,this.document)?c.setStart(a,0).setCursor(!1,!0):q&&f.inDoc(q,this.document)?c.selectNodeContents(q).setCursor(!1,
!0):n&&f.inDoc(n,this.document)&&c.selectNodeContents(n).setCursor(!0,!0):(a=b.nextSibling,f.remove(b),a&&c.setStart(a,0).setCursor(!1,!0))}};UE.commands.splittocells={queryCommandState:function(){var a=e(this),b=a.cell;return!b||0<h(a.table).selectedTds.length?-1:b&&(1<b.colSpan||1<b.rowSpan)?0:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this).cell;h(c).splitToCells(c);a.moveToBookmark(b).select()}};UE.commands.splittorows={queryCommandState:function(){var a=
e(this),b=a.cell;return!b||0<h(a.table).selectedTds.length?-1:b&&1<b.rowSpan?0:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this).cell;h(c).splitToRows(c);a.moveToBookmark(b).select()}};UE.commands.splittocols={queryCommandState:function(){var a=e(this),b=a.cell;return!b||0<h(a.table).selectedTds.length?-1:b&&1<b.colSpan?0:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this).cell;h(c).splitToCols(c);a.moveToBookmark(b).select()}};
UE.commands.adaptbytext=UE.commands.adaptbywindow={queryCommandState:function(){return e(this).table?0:-1},execCommand:function(a){var b=e(this).table;b&&("adaptbywindow"==a?d(b,this):(a=f.getElementsByTagName(b,"td th"),p.each(a,function(a){a.removeAttribute("width")}),b.removeAttribute("width")))}};UE.commands.averagedistributecol={queryCommandState:function(){var b=a.getUETableBySelected(this);return b?b.isFullRow()||b.isFullCol()?0:-1:-1},execCommand:function(b){function c(){var b=h.table,e=0,
g=0,f=a.getDefaultValue(d,b);if(h.isFullRow())e=b.offsetWidth,g=h.colsNum;else for(var b=h.cellsRange.endColIndex,k,l=h.cellsRange.beginColIndex;l<=b;)k=h.selectedTds[l],e+=k.offsetWidth,l+=k.colSpan,g+=1;return Math.ceil(e/g)-2*f.tdBorder-2*f.tdPadding}function e(a){p.each(f.getElementsByTagName(h.table,"th"),function(a){a.setAttribute("width","")});var b=h.isFullRow()?f.getElementsByTagName(h.table,"td"):h.selectedTds;p.each(b,function(b){1==b.colSpan&&b.setAttribute("width",a)})}var d=this,h=a.getUETableBySelected(d);
h&&h.selectedTds.length&&e(c())}};UE.commands.averagedistributerow={queryCommandState:function(){var b=a.getUETableBySelected(this);return!b||b.selectedTds&&/th/ig.test(b.selectedTds[0].tagName)?-1:b.isFullRow()||b.isFullCol()?0:-1},execCommand:function(b){function c(){var b,e=0;b=h.table;var g=a.getDefaultValue(d,b),k=parseInt(f.getComputedStyle(b.getElementsByTagName("td")[0],"padding-top"));if(h.isFullCol()){var e=f.getElementsByTagName(b,"caption"),l=f.getElementsByTagName(b,"th"),p,s;0<e.length&&
(p=e[0].offsetHeight);0<l.length&&(s=l[0].offsetHeight);e=b.offsetHeight-(p||0)-(s||0);b=0==l.length?h.rowsNum:h.rowsNum-1}else{s=h.cellsRange.beginRowIndex;l=h.cellsRange.endRowIndex;p=0;for(b=f.getElementsByTagName(b,"tr");s<=l;s++)e+=b[s].offsetHeight,p+=1;b=p}return r.ie&&9>r.version?Math.ceil(e/b):Math.ceil(e/b)-2*g.tdBorder-2*k}function e(a){var b=h.isFullCol()?f.getElementsByTagName(h.table,"td"):h.selectedTds;p.each(b,function(b){1==b.rowSpan&&b.setAttribute("height",a)})}var d=this,h=a.getUETableBySelected(d);
h&&h.selectedTds.length&&e(c())}};UE.commands.cellalignment={queryCommandState:function(){return e(this).table?0:-1},execCommand:function(b,c){var e=a.getUETableBySelected(this);e?p.each(e.selectedTds,function(a){f.setAttributes(a,c)}):(e=(e=this.selection.getStart())&&f.findParentByTagName(e,["td","th","caption"],!0),/caption/ig.test(e.tagName)?(e.style.textAlign=c.align,e.style.verticalAlign=c.vAlign):f.setAttributes(e,c),this.selection.getRange().setCursor(!0))},queryCommandValue:function(a){(a=
e(this).cell)||(a=b(this)[0]);if(a){var c=UE.UETable.getUETable(a).selectedTds;!c.length&&(c=a);return UE.UETable.getTableCellAlignState(c)}return null}};UE.commands.tablealignment={queryCommandState:function(){return r.ie&&8>r.version?-1:e(this).table?0:-1},execCommand:function(a,b){var c=this.selection.getStart();(c=c&&f.findParentByTagName(c,["table"],!0))&&c.setAttribute("align",b)}};UE.commands.edittable={queryCommandState:function(){return e(this).table?0:-1},execCommand:function(a,b){var c=
this.selection.getRange();if(c=f.findParentByTagName(c.startContainer,"table"))c=f.getElementsByTagName(c,"td").concat(f.getElementsByTagName(c,"th"),f.getElementsByTagName(c,"caption")),p.each(c,function(a){a.style.borderColor=b})}};UE.commands.edittd={queryCommandState:function(){return e(this).table?0:-1},execCommand:function(b,c){var e=a.getUETableBySelected(this);if(e)p.each(e.selectedTds,function(a){a.style.backgroundColor=c});else if(e=(e=this.selection.getStart())&&f.findParentByTagName(e,
["td","th","caption"],!0))e.style.backgroundColor=c}};UE.commands.settablebackground={queryCommandState:function(){return 1<b(this).length?0:-1},execCommand:function(a,c){var e;e=b(this);h(e[0]).setBackground(e,c)}};UE.commands.cleartablebackground={queryCommandState:function(){var a=b(this);if(!a.length)return-1;for(var c=0,e;e=a[c++];)if(""!==e.style.backgroundColor)return 0;return-1},execCommand:function(){var a=b(this);h(a[0]).removeBackground(a)}};UE.commands.interlacetable=UE.commands.uninterlacetable=
{queryCommandState:function(a){var b=e(this).table;if(!b)return-1;b=b.getAttribute("interlaced");return"interlacetable"==a?"enabled"===b?-1:0:b&&"disabled"!==b?0:-1},execCommand:function(a,b){var c=e(this).table;"interlacetable"==a?(c.setAttribute("interlaced","enabled"),this.fireEvent("interlacetable",c,b)):(c.setAttribute("interlaced","disabled"),this.fireEvent("uninterlacetable",c))}};UE.commands.setbordervisible={queryCommandState:function(a){return e(this).table?0:-1},execCommand:function(){var a=
e(this).table;p.each(f.getElementsByTagName(a,"td"),function(a){a.style.borderWidth="1px";a.style.borderStyle="solid"})}}})();UE.plugins.table=function(){function d(a,b){c(a,"width",!0);c(a,"height",!0)}function c(a,b,c){a.style[b]&&(c&&a.setAttribute(b,parseInt(a.style[b],10)),a.style[b]="")}function b(a){if("TD"==a.tagName||"TH"==a.tagName)return a;var b;return(b=f.findParentByTagName(a,"td",!0)||f.findParentByTagName(a,"th",!0))?b:null}function a(a){var b=RegExp(f.fillChar,"g");if(0<a[r.ie?"innerText":
"textContent"].replace(/^\s*$/,"").replace(b,"").length)return 0;for(var c in v.$isNotEmpty)if(a.getElementsByTagName(c).length)return 0;return 1}function e(a){return a.pageX||a.pageY?{x:a.pageX,y:a.pageY}:{x:a.clientX+x.document.body.scrollLeft-x.document.body.clientLeft,y:a.clientY+x.document.body.scrollTop-x.document.body.clientTop}}function h(a){if(!da())try{var c=b(a.target||a.srcElement),d;ba&&(x.body.style.webkitUserSelect="none",Math.abs(fa.x-a.clientX)>Z||Math.abs(fa.y-a.clientY)>Z)&&(s(),
ba=!1,Q=0,G(a));if(U&&R)if(Q=0,x.body.style.webkitUserSelect="none",x.selection.getNative()[r.ie9below?"empty":"removeAllRanges"](),d=e(a),m(x,!0,U,d,c),"h"==U){var h=S.style,l;var c=R,q=M(c);if(q){var t=q.getSameEndPosCells(c,"x")[0],p=q.getSameStartPosXCells(c)[0],y=e(a).x,w=(t?f.getXY(t).x:f.getXY(q.table).x)+20,u=p?f.getXY(p).x+p.offsetWidth-20:x.body.offsetWidth+5||parseInt(f.getComputedStyle(x.body,"width"),10),w=w+W,u=u-W;l=y<w?w:y>u?u:y}else l=void 0;h.left=l+"px"}else{if("v"==U){var E=S.style,
v;a:{try{var z=f.getXY(R).y,A=e(a).y;v=A<z?z:A;break a}catch(B){}v=void 0}E.top=v+"px"}}else if(c){if(!0!==x.fireEvent("excludetable",c)){d=e(a);var D=n(c,d),ca=f.findParentByTagName(c,"table",!0);k(ca,c,a,!0)?!0!==x.fireEvent("excludetable",ca)&&(x.body.style.cursor="url("+x.options.cursorpath+"h.png),pointer"):k(ca,c,a)?!0!==x.fireEvent("excludetable",ca)&&(x.body.style.cursor="url("+x.options.cursorpath+"v.png),pointer"):(x.body.style.cursor="text",/\d/.test(D)&&(D=D.replace(/\d/,""),c=M(c).getPreviewCell(c,
"v"==D)),m(x,c?!!D:!1,c?D:"",d,c))}}else g(!1,ca,x)}catch(H){}}function g(a,b,c){a?l(b,c):ga||setTimeout(function(){!ga&&J&&J.parentNode&&J.parentNode.removeChild(J)},2E3)}function l(a,b){function c(e,d){clearTimeout(g);g=setTimeout(function(){b.fireEvent("tableClicked",a,d)},300)}var e=f.getXY(a),d=a.ownerDocument;if(J&&J.parentNode)return J;J=d.createElement("div");J.contentEditable=!1;J.innerHTML="";J.style.cssText="width:15px;height:15px;background-image:url("+b.options.UEDITOR_HOME_URL+"dialogs/table/dragicon.png);position: absolute;cursor:move;top:"+
(e.y-15)+"px;left:"+e.x+"px;";f.unSelectable(J);J.onmouseover=function(a){ga=!0};J.onmouseout=function(a){ga=!1};f.on(J,"click",function(a,b){c(b,this)});f.on(J,"dblclick",function(c,e){clearTimeout(g);var d=M(a),f=a.rows[0].cells[0],h=d.getLastCell(),h=d.getCellsRange(f,h);b.selection.getRange().setStart(f,0).setCursor(!1,!0);d.setSelected(h)});f.on(J,"dragstart",function(a,b){f.preventDefault(b)});var g;d.body.appendChild(J)}function k(a,b,c,d){c=e(c);b=n(b,c);return d?(d=(d=a.getElementsByTagName("caption")[0])?
d.offsetHeight:0,"v1"==b&&8>c.y-f.getXY(a).y-d):"h1"==b&&8>c.x-f.getXY(a).x}function m(a,b,c,e,d){try{a.body.style.cursor="h"==c?"col-resize":"v"==c?"row-resize":"text",r.ie&&(!c||aa||F.getUETableBySelected(a)?I(a):(O(a,a.document),la(c,d))),ka=b}catch(g){}}function n(a,b){var c=f.getXY(a);return c?c.x+a.offsetWidth-b.x<ha?"h":b.x-c.x<ha?"h1":c.y+a.offsetHeight-b.y<ha?"v":b.y-c.y<ha?"v1":"":""}function q(a,b){if(!da())if(fa={x:b.clientX,y:b.clientY},2==b.button){var c=F.getUETableBySelected(x),e=
!1;if(c){var d=X(x,b);p.each(c.selectedTds,function(a){a===d&&(e=!0)});e?(d=c.selectedTds[0],setTimeout(function(){x.selection.getRange().setStart(d,0).setCursor(!1,!0)},0)):(ia(f.getElementsByTagName(x.body,"th td")),c.clearSelected())}}else w(b)}function t(a){Q=0;a=a||x.window.event;var c=b(a.target||a.srcElement);if(c){var d;if(d=n(c,e(a)))if(I(x),"h1"==d&&(d="h",k(f.findParentByTagName(c,"table"),c,a)?x.execCommand("adaptbywindow"):(c=M(c).getPreviewCell(c))&&x.selection.getRange().selectNodeContents(c).setCursor(!0,
!0)),"h"==d){a=M(c);var g=z(c,a.table,!0),g=u(g,"left");a.width=a.offsetWidth;var h=[],l=[];p.each(g,function(a){h.push(a.offsetWidth)});p.each(g,function(a){a.removeAttribute("width")});window.setTimeout(function(){var a=!0;p.each(g,function(b,c){var e=b.offsetWidth;if(e>h[c])return a=!1;l.push(e)});var b=a?l:h;p.each(g,function(a,c){a.width=b[c]-B()})},0)}}}function w(a){ia(f.getElementsByTagName(x.body,"td th"));p.each(x.document.getElementsByTagName("table"),function(a){a.ueTable=null});if(K=
X(x,a)){var b=f.findParentByTagName(K,"table",!0);(ut=M(b))&&ut.clearSelected();ka?y(a):(x.document.body.style.webkitUserSelect="",aa=!0,x.addListener("mouseover",N))}}function y(a){r.ie&&(a=E(a));s();ba=!0;ja=setTimeout(function(){G(a)},$)}function u(a,b){for(var c=[],e=null,d=0,g=a.length;d<g;d++)(e=a[d][b])&&c.push(e);return c}function s(){ja&&clearTimeout(ja);ja=null}function E(a){var b="pageX pageY clientX clientY srcElement target".split(" "),c={};if(a)for(var e=0,d,g;d=b[e];e++)(g=a[d])&&(c[d]=
g);return c}function G(a){ba=!1;if(K=a.target||a.srcElement)a=n(K,e(a)),/\d/.test(a)&&(a=a.replace(/\d/,""),K=M(K).getPreviewCell(K,"v"==a)),I(x),O(x,x.document),x.fireEvent("saveScene"),la(a,K),aa=!0,U=a,R=K}function A(a,b){if(!da()){s();ba=!1;if(ka&&(Q=++Q%3,fa={x:b.clientX,y:b.clientY},setTimeout(function(){0<Q&&Q--},$),2===Q)){Q=0;t(b);return}if(2!=b.button){var c=this.selection.getRange(),e=f.findParentByTagName(c.startContainer,"table",!0),d=f.findParentByTagName(c.endContainer,"table",!0);
if(e||d)e===d?(e=f.findParentByTagName(c.startContainer,["td","th","caption"],!0),d=f.findParentByTagName(c.endContainer,["td","th","caption"],!0),e!==d&&this.selection.clearRange()):this.selection.clearRange();aa=!1;this.document.body.style.webkitUserSelect="";if(U&&R&&(this.selection.getNative()[r.ie9below?"empty":"removeAllRanges"](),Q=0,S=this.document.getElementById("ue_tableDragLine"))){c=f.getXY(R);e=f.getXY(S);switch(U){case "h":na(R,e.x-c.x);break;case "v":T(R,e.y-c.y-R.offsetHeight)}U="";
R=null;I(this);this.fireEvent("saveScene");return}if(K)(e=(c=M(K))?c.selectedTds[0]:null)?(c=new L.Range(this.document),f.isEmptyBlock(e)?c.setStart(e,0).setCursor(!1,!0):c.selectNodeContents(e).shrinkBoundary().setCursor(!1,!0)):(c=this.selection.getRange().shrinkBoundary(),c.collapsed||(e=f.findParentByTagName(c.startContainer,["td","th"],!0),d=f.findParentByTagName(c.endContainer,["td","th"],!0),(e&&!d||!e&&d||e&&d&&e!==d)&&c.setCursor(!1,!0))),K=null,this.removeListener("mouseover",N);else if((e=
f.findParentByTagName(b.target||b.srcElement,"td",!0))||(e=f.findParentByTagName(b.target||b.srcElement,"th",!0)),e&&("TD"==e.tagName||"TH"==e.tagName)){if(!0===this.fireEvent("excludetable",e))return;c=new L.Range(this.document);c.setStart(e,0).setCursor(!1,!0)}this._selectionChange(250,b)}}}function N(a,b){if(!da()){var c=b.target||b.srcElement;V=f.findParentByTagName(c,"td",!0)||f.findParentByTagName(c,"th",!0);if(K&&V&&("TD"==K.tagName&&"TD"==V.tagName||"TH"==K.tagName&&"TH"==V.tagName)&&f.findParentByTagName(K,
"table")==f.findParentByTagName(V,"table"))if(c=M(V),K!=V){this.document.body.style.webkitUserSelect="none";this.selection.getNative()[r.ie9below?"empty":"removeAllRanges"]();var e=c.getCellsRange(K,V);c.setSelected(e)}else this.document.body.style.webkitUserSelect="",c.clearSelected();b.preventDefault?b.preventDefault():b.returnValue=!1}}function na(a,b){var c=M(a);if(c){var c=c.table,e=z(a,c);c.style.width="";c.removeAttribute("width");b=H(b,a,e);a.nextSibling?p.each(e,function(a){a.left.width=
+a.left.width+b;a.right&&(a.right.width=+a.right.width-b)}):p.each(e,function(a){a.left.width-=-b})}}function da(){return"false"===x.body.contentEditable}function T(a,b){if(!(10>Math.abs(b))){var c=M(a);if(c)for(var c=c.getSameEndPosCells(a,"y"),e=c[0]?c[0].offsetHeight:0,d=0,g;g=c[d++];){var h=b,k=e,l=parseInt(f.getComputedStyle(g,"line-height"),10),h=k+h,h=h<l?l:h;g.style.height&&(g.style.height="");1==g.rowSpan?g.setAttribute("height",h):g.removeAttribute&&g.removeAttribute("height")}}}function z(a,
b,c){b||(b=f.findParentByTagName(a,"table"));if(!b)return null;f.getNodeIndex(a);b=b.rows;for(var e=0;a;)1===a.nodeType&&(e+=a.colSpan||1),a=a.previousSibling;a=null;var d=[];p.each(b,function(a){var b=0;p.each(a.cells,function(a){b+=a.colSpan||1;if(b===e)return d.push({left:a,right:a.nextSibling||null}),!1;if(b>e)return c&&d.push({left:a}),!1})});return d}function H(a,b,c){a-=B();if(0>a)return 0;a-=D(b);var e=0>a?"left":"right";a=Math.abs(a);p.each(c,function(b){(b=b[e])&&(a=Math.min(a,D(b)-W))});
a=0>a?0:a;return"left"===e?-a:a}function D(a){var b=0,b=a.offsetWidth-B();if(!a.nextSibling){tab=f.findParentByTagName(a,"table",!1);if(void 0===tab.offsetVal){var c=a.previousSibling;tab.offsetVal=c?a.offsetWidth-c.offsetWidth===F.borderWidth?F.borderWidth:0:0}b-=tab.offsetVal}b=0>b?0:b;try{a.width=b}catch(e){}return b}function B(){if(void 0===F.tabcellSpace){var a=x.document.createElement("table"),b=x.document.createElement("tbody"),c=x.document.createElement("tr"),e=x.document.createElement("td"),
d=null;e.style.cssText="border: 0;";e.width=1;c.appendChild(e);c.appendChild(d=e.cloneNode(!1));b.appendChild(c);a.appendChild(b);a.style.cssText="visibility: hidden;";x.body.appendChild(a);F.paddingSpace=e.offsetWidth-1;b=a.offsetWidth;e.style.cssText="";d.style.cssText="";F.borderWidth=(a.offsetWidth-b)/3;F.tabcellSpace=F.paddingSpace+F.borderWidth;x.body.removeChild(a)}B=function(){return F.tabcellSpace};return F.tabcellSpace}function O(a,b){aa||(S=a.document.createElement("div"),f.setAttributes(S,
{id:"ue_tableDragLine",unselectable:"on",contenteditable:!1,onresizestart:"return false",ondragstart:"return false",onselectstart:"return false",style:"background-color:blue;position:absolute;padding:0;margin:0;background-image:none;border:0px none;opacity:0;filter:alpha(opacity=0)"}),a.body.appendChild(S))}function I(a){if(!aa)for(var b;b=a.document.getElementById("ue_tableDragLine");)f.remove(b)}function la(a,b){if(b){var c=f.findParentByTagName(b,"table"),e=c.getElementsByTagName("caption"),d=
c.offsetWidth,g=c.offsetHeight-(0<e.length?e[0].offsetHeight:0),c=f.getXY(c),h=f.getXY(b);switch(a){case "h":e="height:"+g+"px;top:"+(c.y+(0<e.length?e[0].offsetHeight:0))+"px;left:"+(h.x+b.offsetWidth);S.style.cssText=e+"px;position: absolute;display:block;background-color:blue;width:1px;border:0; color:blue;opacity:.3;filter:alpha(opacity=30)";break;case "v":e="width:"+d+"px;left:"+c.x+"px;top:"+(h.y+b.offsetHeight),S.style.cssText=e+"px;overflow:hidden;position: absolute;display:block;background-color:blue;height:1px;border:0;color:blue;opacity:.2;filter:alpha(opacity=20)"}}}
function P(a,b){for(var c=f.getElementsByTagName(a.body,"table"),e,d=0,g;g=c[d++];)e=f.getElementsByTagName(g,"td"),e[0]&&(b?(e=e[0].style.borderColor.replace(/\s/g,""),/(#ffffff)|(rgb\(255,255,255\))/ig.test(e)&&f.addClass(g,"noBorderTable")):f.removeClasses(g,"noBorderTable"))}function Y(a,b,c){var e=a.body;return e.offsetWidth-(b?2*parseInt(f.getComputedStyle(e,"margin-left"),10):0)-2*c.tableBorder-(a.options.offsetWidth||0)}function X(a,b){var c=f.findParentByTagName(b.target||b.srcElement,["td",
"th"],!0),d=null;if(!c)return null;d=n(c,e(b));if(!c)return null;if("h1"===d&&c.previousSibling){var d=f.getXY(c),g=c.offsetWidth;Math.abs(d.x+g-b.clientX)>g/3&&(c=c.previousSibling)}else"v1"===d&&c.parentNode.previousSibling&&(d=f.getXY(c),g=c.offsetHeight,Math.abs(d.y+g-b.clientY)>g/3&&(c=c.parentNode.previousSibling.firstChild));return c&&!0!==a.fireEvent("excludetable",c)?c:null}var x=this,ja=null,W=5,ba=!1,ha=5,Z=10,Q=0,fa=null,$=360,F=UE.UETable,M=function(a){return F.getUETable(a)},ia=function(a){return F.removeSelectedClass(a)};
x.ready(function(){var a=this,b=a.selection.getText;a.selection.getText=function(){var c=F.getUETableBySelected(a);if(c){var e="";p.each(c.selectedTds,function(a){e+=a[r.ie?"innerText":"textContent"]});return e}return b.call(a.selection)}});var K=null,V=null,U="",ka=!1,J=null,ga=!1,S=null,R=null,aa=!1;x.setOpt({maxColNum:20,maxRowNum:100,defaultCols:5,defaultRows:5,tdvalign:"top",cursorpath:x.options.UEDITOR_HOME_URL+"themes/default/images/cursor_",tableDragable:!1,classList:["ue-table-interlace-color-single",
"ue-table-interlace-color-double"]});x.getUETable=M;var ea={deletetable:1,inserttable:1,cellvalign:1,insertcaption:1,deletecaption:1,inserttitle:1,deletetitle:1,mergeright:1,mergedown:1,mergecells:1,insertrow:1,insertrownext:1,deleterow:1,insertcol:1,insertcolnext:1,deletecol:1,splittocells:1,splittorows:1,splittocols:1,adaptbytext:1,adaptbywindow:1,adaptbycustomer:1,insertparagraph:1,insertparagraphbeforetable:1,averagedistributecol:1,averagedistributerow:1};x.ready(function(){p.cssRule("table",
".selectTdClass{background-color:#edf5fa !important}table.noBorderTable td,table.noBorderTable th,table.noBorderTable caption{border:1px dashed #ddd !important}table{margin-bottom:10px;border-collapse:collapse;display:table;}td,th{padding: 5px 10px;border: 1px solid #DDD;}caption{border:1px dashed #DDD;border-bottom:0;padding:3px;text-align:center;}th{border-top:1px solid #BBB;background-color:#F7F7F7;}table tr.firstRow th{border-top-width:2px;}.ue-table-interlace-color-single{ background-color: #fcfcfc; } .ue-table-interlace-color-double{ background-color: #f7faff; }td p{margin:0;padding:0;}",
x.document);var c,e,l;x.addListener("keydown",function(b,d){var g=d.keyCode||d.which;if(8==g){var h=F.getUETableBySelected(this);h&&h.selectedTds.length&&(h.isFullCol()?this.execCommand("deletecol"):h.isFullRow()?this.execCommand("deleterow"):this.fireEvent("delcells"),f.preventDefault(d));var k=f.findParentByTagName(this.selection.getStart(),"caption",!0),n=this.selection.getRange();n.collapsed&&k&&a(k)&&(this.fireEvent("saveScene"),h=k.parentNode,f.remove(k),h&&n.setStart(h.rows[0].cells[0],0).setCursor(!1,
!0),this.fireEvent("saveScene"))}if(46==g&&(h=F.getUETableBySelected(this))){this.fireEvent("saveScene");for(k=0;n=h.selectedTds[k++];)f.fillNode(this.document,n);this.fireEvent("saveScene");f.preventDefault(d)}if(13==g){g=this.selection.getRange();if(k=f.findParentByTagName(g.startContainer,"caption",!0)){h=f.findParentByTagName(k,"table");g.collapsed?k&&g.setStart(h.rows[0].cells[0],0).setCursor(!1,!0):(g.deleteContents(),this.fireEvent("saveScene"));f.preventDefault(d);return}g.collapsed&&(h=f.findParentByTagName(g.startContainer,
"table"))&&(n=h.rows[0].cells[0],k=f.findParentByTagName(this.selection.getStart(),["td","th"],!0),h=h.previousSibling,n===k&&(!h||1==h.nodeType&&"TABLE"==h.tagName)&&f.isStartInblock(g)&&(g=f.findParent(this.selection.getStart(),function(a){return f.isBlockElm(a)},!0))&&(/t(h|d)/i.test(g.tagName)||g===k.firstChild)&&(this.execCommand("insertparagraphbeforetable"),f.preventDefault(d)))}if((d.ctrlKey||d.metaKey)&&"67"==d.keyCode&&(c=null,h=F.getUETableBySelected(this)))for(g=h.selectedTds,e=h.isFullCol(),
l=h.isFullRow(),c=[[h.cloneCell(g[0],null,!0)]],k=1;n=g[k];k++)n.parentNode!==g[k-1].parentNode?c.push([h.cloneCell(n,null,!0)]):c[c.length-1].push(h.cloneCell(n,null,!0))});x.addListener("tablehasdeleted",function(){m(this,!1,"",null);J&&f.remove(J)});x.addListener("beforepaste",function(b,g){var h=this,k=h.selection.getRange();if(f.findParentByTagName(k.startContainer,"caption",!0))k=h.document.createElement("div"),k.innerHTML=g.html,g.html=k[r.ie9below?"innerText":"textContent"];else{var n=F.getUETableBySelected(h);
if(c){h.fireEvent("saveScene");var k=h.selection.getRange(),m=f.findParentByTagName(k.startContainer,["td","th"],!0),q,t;if(m){n=M(m);if(l){var y=n.getCellInfo(m).rowIndex;"TH"==m.tagName&&y++;for(var k=0,w;w=c[k++];){t=n.insertRow(y++,"td");for(var u=0,s;s=w[u];u++)(m=t.cells[u])||(m=t.insertCell(u)),m.innerHTML=s.innerHTML,s.getAttribute("width")&&m.setAttribute("width",s.getAttribute("width")),s.getAttribute("vAlign")&&m.setAttribute("vAlign",s.getAttribute("vAlign")),s.getAttribute("align")&&
m.setAttribute("align",s.getAttribute("align")),s.style.cssText&&(m.style.cssText=s.style.cssText);for(u=0;(s=t.cells[u])&&w[u];u++)s.innerHTML=w[u].innerHTML,w[u].getAttribute("width")&&s.setAttribute("width",w[u].getAttribute("width")),w[u].getAttribute("vAlign")&&s.setAttribute("vAlign",w[u].getAttribute("vAlign")),w[u].getAttribute("align")&&s.setAttribute("align",w[u].getAttribute("align")),w[u].style.cssText&&(s.style.cssText=w[u].style.cssText)}}else{if(e){y=n.getCellInfo(m);u=m=0;for(w=c[0];s=
w[u++];)m+=s.colSpan||1;h.__hasEnterExecCommand=!0;for(k=0;k<m;k++)h.execCommand("insertcol");h.__hasEnterExecCommand=!1;m=n.table.rows[0].cells[y.cellIndex];"TH"==m.tagName&&(m=n.table.rows[1].cells[y.cellIndex])}for(k=0;w=c[k++];){q=m;for(u=0;s=w[u++];)m?(m.innerHTML=s.innerHTML,s.getAttribute("width")&&m.setAttribute("width",s.getAttribute("width")),s.getAttribute("vAlign")&&m.setAttribute("vAlign",s.getAttribute("vAlign")),s.getAttribute("align")&&m.setAttribute("align",s.getAttribute("align")),
s.style.cssText&&(m.style.cssText=s.style.cssText),t=m,m=m.nextSibling):(y=s.cloneNode(!0),f.removeAttributes(y,["class","rowSpan","colSpan"]),t.parentNode.appendChild(y));m=n.getNextCell(q,!0,!0);if(!c[k])break;m||(y=n.getCellInfo(q),n.table.insertRow(n.table.rows.length),n.update(),m=n.getVSideCell(q,!0))}}n.update()}else{n=h.document.createElement("table");for(k=0;w=c[k++];){t=n.insertRow(n.rows.length);for(u=0;s=w[u++];)y=F.cloneCell(s,null,!0),f.removeAttributes(y,["class"]),t.appendChild(y);
2==u&&1<y.rowSpan&&(y.rowSpan=1)}k=F.getDefaultValue(h,void 0);k=h.body.offsetWidth-2*parseInt(f.getComputedStyle(h.body,"margin-left"),10)-2*k.tableBorder-(h.options.offsetWidth||0);h.execCommand("insertHTML","<table  "+(e&&l?'width="'+k+'"':"")+">"+n.innerHTML.replace(/>\s*</g,"><").replace(/\bth\b/gi,"td")+"</table>")}h.fireEvent("contentchange");h.fireEvent("saveScene");g.html="";return!0}k=h.document.createElement("div");k.innerHTML=g.html;w=k.getElementsByTagName("table");f.findParentByTagName(h.selection.getStart(),
"table")?(p.each(w,function(a){f.remove(a)}),f.findParentByTagName(h.selection.getStart(),"caption",!0)&&(k.innerHTML=k[r.ie?"innerText":"textContent"])):p.each(w,function(b){d(b,!0);f.removeAttributes(b,["style","border"]);p.each(f.getElementsByTagName(b,"td"),function(b){a(b)&&f.fillNode(h.document,b);d(b,!0)})});g.html=k.innerHTML}});x.addListener("afterpaste",function(){p.each(f.getElementsByTagName(x.body,"table"),function(a){if(a.offsetWidth>x.body.offsetWidth){var b=F.getDefaultValue(x,a);
a.style.width=x.body.offsetWidth-2*parseInt(f.getComputedStyle(x.body,"margin-left"),10)-2*b.tableBorder-(x.options.offsetWidth||0)+"px"}})});x.addListener("blur",function(){c=null});var n;x.addListener("keydown",function(){clearTimeout(n);n=setTimeout(function(){var a=x.selection.getRange();if(a=f.findParentByTagName(a.startContainer,["th","td"],!0)){var b=a.parentNode.parentNode.parentNode;b.offsetWidth>b.getAttribute("width")&&(a.style.wordBreak="break-all")}},100)});x.addListener("selectionchange",
function(){m(x,!1,"",null)});x.addListener("contentchange",function(){var a=this;I(a);if(!F.getUETableBySelected(a)){var c=a.selection.getRange().startContainer,c=f.findParentByTagName(c,["td","th"],!0);p.each(f.getElementsByTagName(a.document,"table"),function(c){!0!==a.fireEvent("excludetable",c)&&(c.ueTable=new F(c),c.onmouseover=function(){a.fireEvent("tablemouseover",c)},c.onmousemove=function(){a.fireEvent("tablemousemove",c);a.options.tableDragable&&g(!0,this,a);p.defer(function(){a.fireEvent("contentchange",
50)},!0)},c.onmouseout=function(){a.fireEvent("tablemouseout",c);m(a,!1,"",null);I(a)},c.onclick=function(c){c=a.window.event||c;var e=b(c.target||c.srcElement);if(e){var d=M(e),g=d.table,f=d.getCellInfo(e),h=a.selection.getRange();k(g,e,c,!0)?(g=d.getCell(d.indexTable[d.rowsNum-1][f.colIndex].rowIndex,d.indexTable[d.rowsNum-1][f.colIndex].cellIndex),c.shiftKey&&d.selectedTds.length?d.selectedTds[0]!==g?(c=d.getCellsRange(d.selectedTds[0],g),d.setSelected(c)):h&&h.selectNodeContents(g).select():e!==
g?(c=d.getCellsRange(e,g),d.setSelected(c)):h&&h.selectNodeContents(g).select()):k(g,e,c)&&(g=d.getCell(d.indexTable[f.rowIndex][d.colsNum-1].rowIndex,d.indexTable[f.rowIndex][d.colsNum-1].cellIndex),c.shiftKey&&d.selectedTds.length?d.selectedTds[0]!==g?(c=d.getCellsRange(d.selectedTds[0],g),d.setSelected(c)):h&&h.selectNodeContents(g).select():e!==g?(c=d.getCellsRange(e,g),d.setSelected(c)):h&&h.selectNodeContents(g).select())}})});P(a,!0)}});f.on(x.document,"mousemove",h);f.on(x.document,"mouseout",
function(a){"TABLE"==(a.target||a.srcElement).tagName&&m(x,!1,"",null)});x.addListener("interlacetable",function(a,b,c){if(b){a=b.rows;b=a.length;for(var e=0;e<b;e++){var d=c||this.options.classList;a[e].className=d[e]?d[e]:d[e%d.length]}}});x.addListener("uninterlacetable",function(a,b){if(b)for(var c=b.rows,e=this.options.classList,d=c.length,g=0;g<d;g++)f.removeClasses(c[g],e)});x.addListener("mousedown",q);x.addListener("mouseup",A);f.on(x.body,"dragstart",function(a){A.call(x,"dragstart",a)});
x.addOutputRule(function(a){p.each(a.getNodesByTagName("div"),function(a){"ue_tableDragLine"==a.getAttr("id")&&a.parentNode.removeChild(a)})});var t=0;x.addListener("mousedown",function(){t=0});x.addListener("tabkeydown",function(){var b=this.selection.getRange(),c=b.getCommonAncestor(!0,!0),e=f.findParentByTagName(c,"table");if(e){if(f.findParentByTagName(c,"caption",!0))(c=f.getElementsByTagName(e,"th td"))&&c.length&&b.setStart(c[0],0).setCursor(!1,!0);else{var c=f.findParentByTagName(c,["td",
"th"],!0),d=M(c);t=1<c.rowSpan?t:d.getCellInfo(c).rowIndex;(c=d.getTabNextCell(c,t))?a(c)?b.setStart(c,0).setCursor(!1,!0):b.selectNodeContents(c).select():(x.fireEvent("saveScene"),x.__hasEnterExecCommand=!0,this.execCommand("insertrownext"),x.__hasEnterExecCommand=!1,b=this.selection.getRange(),b.setStart(e.rows[e.rows.length-1].cells[0],0).setCursor(),x.fireEvent("saveScene"))}return!0}});r.ie&&x.addListener("selectionchange",function(){m(this,!1,"",null)});x.addListener("keydown",function(a,b){var c=
b.keyCode||b.which;if(8!=c&&46!=c){(c=!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&!b.altKey)&&ia(f.getElementsByTagName(this.body,"td"));var e=F.getUETableBySelected(this);e&&c&&e.clearSelected()}});x.addListener("beforegetcontent",function(){P(this,!1);r.ie&&p.each(this.document.getElementsByTagName("caption"),function(a){f.isEmptyNode(a)&&(a.innerHTML="&nbsp;")})});x.addListener("aftergetcontent",function(){P(this,!0)});x.addListener("getAllHtml",function(){ia(x.document.getElementsByTagName("td"))});
x.addListener("fullscreenchanged",function(a,b){if(!b){var c=this.body.offsetWidth/document.body.offsetWidth,e=f.getElementsByTagName(this.body,"table");p.each(e,function(a){if(a.offsetWidth<x.body.offsetWidth)return!1;var b=f.getElementsByTagName(a,"td"),e=[];p.each(b,function(a){e.push(a.offsetWidth)});for(var d=0,g;g=b[d];d++)g.setAttribute("width",Math.floor(e[d]*c));a.setAttribute("width",Math.floor(Y(x,!0,F.getDefaultValue(x,void 0))))})}});var y=x.execCommand;x.execCommand=function(b,c){b=
b.toLowerCase();var e=F.getUETableBySelected(this),d=new L.Range(this.document),g=this.commands[b]||UE.commands[b],h;if(g){if(!e||ea[b]||g.notNeedUndo||this.__hasEnterExecCommand)h=y.apply(this,arguments);else{this.__hasEnterExecCommand=!0;this.fireEvent("beforeexeccommand",b);for(var e=e.selectedTds,k=g=-2,l,n,m=0,q;q=e[m];m++)if(a(q)?d.setStart(q,0).setCursor(!1,!0):d.selectNode(q).select(!0),n=this.queryCommandState(b),l=this.queryCommandValue(b),-1!=n){if(g!==n||k!==l)this._ignoreContentChange=
!0,h=y.apply(this,arguments),this._ignoreContentChange=!1;g=this.queryCommandState(b);k=this.queryCommandValue(b);f.isEmptyBlock(q)&&f.fillNode(this.document,q)}d.setStart(e[0],0).shrinkBoundary(!0).setCursor(!1,!0);this.fireEvent("contentchange");this.fireEvent("afterexeccommand",b);this.__hasEnterExecCommand=!1;this._selectionChange()}return h}}})};UE.UETable.prototype.sortTable=function(d,c){var b=this.table,a=b.rows,e=[],f="TH"===a[0].cells[0].tagName,g=0;if(this.selectedTds.length){for(var l=
this.cellsRange,k=l.endRowIndex+1,m=l.beginRowIndex;m<k;m++)e[m]=a[m];e.splice(0,l.beginRowIndex);g=l.endRowIndex+1===this.rowsNum?0:l.endRowIndex+1}else for(m=0,k=a.length;m<k;m++)e[m]=a[m];var n={reversecurrent:function(a,b){return 1},orderbyasc:function(a,b){return(a.innerText||a.textContent).localeCompare(b.innerText||b.textContent)},reversebyasc:function(a,b){return b.innerHTML.localeCompare(a.innerHTML)},orderbynum:function(a,b){var c=a[r.ie?"innerText":"textContent"].match(/\d+/),e=b[r.ie?
"innerText":"textContent"].match(/\d+/);c&&(c=+c[0]);e&&(e=+e[0]);return(c||0)-(e||0)},reversebynum:function(a,b){var c=a[r.ie?"innerText":"textContent"].match(/\d+/),e=b[r.ie?"innerText":"textContent"].match(/\d+/);c&&(c=+c[0]);e&&(e=+e[0]);return(e||0)-(c||0)}};b.setAttribute("data-sort-type",c&&"string"===typeof c&&n[c]?c:"");f&&e.splice(0,1);e=p.sort(e,function(a,b){return c&&"function"===typeof c?c.call(this,a.cells[d],b.cells[d]):c&&"number"===typeof c?1:c&&"string"===typeof c&&n[c]?n[c].call(this,
a.cells[d],b.cells[d]):n.orderbyasc.call(this,a.cells[d],b.cells[d])});f=b.ownerDocument.createDocumentFragment();m=0;for(k=e.length;m<k;m++)f.appendChild(e[m]);b=b.getElementsByTagName("tbody")[0];g?b.insertBefore(f,a[g-l.endRowIndex+l.beginRowIndex-1]):b.appendChild(f)};UE.plugins.tablesort=function(){var d=this,c=UE.UETable;d.ready(function(){p.cssRule("tablesort","table.sortEnabled tr.firstRow th,table.sortEnabled tr.firstRow td{padding-right:20px;background-repeat: no-repeat;background-position: center right;   background-image:url("+
d.options.themePath+d.options.theme+"/images/sortable.png);}",d.document);d.addListener("afterexeccommand",function(b,a){"mergeright"!=a&&"mergedown"!=a&&"mergecells"!=a||this.execCommand("disablesort")})});UE.commands.sorttable={queryCommandState:function(){var b=c.getTableItemsByRange(this);if(!b.cell)return-1;for(var b=b.table.getElementsByTagName("td"),a=0,e;e=b[a++];)if(1!=e.rowSpan||1!=e.colSpan)return-1;return 0},execCommand:function(b,a){var e=this.selection.getRange(),d=e.createBookmark(!0),
g=c.getTableItemsByRange(this),f=g.cell,g=c.getUETable(g.table),f=g.getCellInfo(f);g.sortTable(f.cellIndex,a);e.moveToBookmark(d);try{e.select()}catch(k){}}};UE.commands.enablesort=UE.commands.disablesort={queryCommandState:function(b){var a=c.getTableItemsByRange(this).table;if(a&&"enablesort"==b)for(var e=f.getElementsByTagName(a,"th td"),d=0;d<e.length;d++)if(1<e[d].getAttribute("colspan")||1<e[d].getAttribute("rowspan"))return-1;return a?"enablesort"==b^"sortEnabled"!=a.getAttribute("data-sort")?
-1:0:-1},execCommand:function(b){var a=c.getTableItemsByRange(this).table;a.setAttribute("data-sort","enablesort"==b?"sortEnabled":"sortDisabled");"enablesort"==b?f.addClass(a,"sortEnabled"):f.removeClasses(a,"sortEnabled")}}};UE.plugins.contextmenu=function(){var d=this;d.setOpt("enableContextMenu",!0);if(!1!==d.getOpt("enableContextMenu")){var c=d.getLang("contextMenu"),b,a=d.options.contextMenu||[{label:c.selectall,cmdName:"selectall"},{label:c.cleardoc,cmdName:"cleardoc",exec:function(){confirm(c.confirmclear)&&
this.execCommand("cleardoc")}},"-",{label:c.unlink,cmdName:"unlink"},"-",{group:c.paragraph,icon:"justifyjustify",subMenu:[{label:c.justifyleft,cmdName:"justify",value:"left"},{label:c.justifyright,cmdName:"justify",value:"right"},{label:c.justifycenter,cmdName:"justify",value:"center"},{label:c.justifyjustify,cmdName:"justify",value:"justify"}]},"-",{group:c.table,icon:"table",subMenu:[{label:c.inserttable,cmdName:"inserttable"},{label:c.deletetable,cmdName:"deletetable"},"-",{label:c.deleterow,
cmdName:"deleterow"},{label:c.deletecol,cmdName:"deletecol"},{label:c.insertcol,cmdName:"insertcol"},{label:c.insertcolnext,cmdName:"insertcolnext"},{label:c.insertrow,cmdName:"insertrow"},{label:c.insertrownext,cmdName:"insertrownext"},"-",{label:c.insertcaption,cmdName:"insertcaption"},{label:c.deletecaption,cmdName:"deletecaption"},{label:c.inserttitle,cmdName:"inserttitle"},{label:c.deletetitle,cmdName:"deletetitle"},{label:c.inserttitlecol,cmdName:"inserttitlecol"},{label:c.deletetitlecol,cmdName:"deletetitlecol"},
"-",{label:c.mergecells,cmdName:"mergecells"},{label:c.mergeright,cmdName:"mergeright"},{label:c.mergedown,cmdName:"mergedown"},"-",{label:c.splittorows,cmdName:"splittorows"},{label:c.splittocols,cmdName:"splittocols"},{label:c.splittocells,cmdName:"splittocells"},"-",{label:c.averageDiseRow,cmdName:"averagedistributerow"},{label:c.averageDisCol,cmdName:"averagedistributecol"},"-",{label:c.edittd,cmdName:"edittd",exec:function(){UE.ui.edittd&&new UE.ui.edittd(this);this.getDialog("edittd").open()}},
{label:c.edittable,cmdName:"edittable",exec:function(){UE.ui.edittable&&new UE.ui.edittable(this);this.getDialog("edittable").open()}},{label:c.setbordervisible,cmdName:"setbordervisible"}]},{group:c.tablesort,icon:"tablesort",subMenu:[{label:c.enablesort,cmdName:"enablesort"},{label:c.disablesort,cmdName:"disablesort"},"-",{label:c.reversecurrent,cmdName:"sorttable",value:"reversecurrent"},{label:c.orderbyasc,cmdName:"sorttable",value:"orderbyasc"},{label:c.reversebyasc,cmdName:"sorttable",value:"reversebyasc"},
{label:c.orderbynum,cmdName:"sorttable",value:"orderbynum"},{label:c.reversebynum,cmdName:"sorttable",value:"reversebynum"}]},{group:c.borderbk,icon:"borderBack",subMenu:[{label:c.setcolor,cmdName:"interlacetable",exec:function(){this.execCommand("interlacetable")}},{label:c.unsetcolor,cmdName:"uninterlacetable",exec:function(){this.execCommand("uninterlacetable")}},{label:c.setbackground,cmdName:"settablebackground",exec:function(){this.execCommand("settablebackground",{repeat:!0,colorList:["#bbb",
"#ccc"]})}},{label:c.unsetbackground,cmdName:"cleartablebackground",exec:function(){this.execCommand("cleartablebackground")}},{label:c.redandblue,cmdName:"settablebackground",exec:function(){this.execCommand("settablebackground",{repeat:!0,colorList:["red","blue"]})}},{label:c.threecolorgradient,cmdName:"settablebackground",exec:function(){this.execCommand("settablebackground",{repeat:!0,colorList:["#aaa","#bbb","#ccc"]})}}]},{group:c.aligntd,icon:"aligntd",subMenu:[{cmdName:"cellalignment",value:{align:"left",
vAlign:"top"}},{cmdName:"cellalignment",value:{align:"center",vAlign:"top"}},{cmdName:"cellalignment",value:{align:"right",vAlign:"top"}},{cmdName:"cellalignment",value:{align:"left",vAlign:"middle"}},{cmdName:"cellalignment",value:{align:"center",vAlign:"middle"}},{cmdName:"cellalignment",value:{align:"right",vAlign:"middle"}},{cmdName:"cellalignment",value:{align:"left",vAlign:"bottom"}},{cmdName:"cellalignment",value:{align:"center",vAlign:"bottom"}},{cmdName:"cellalignment",value:{align:"right",
vAlign:"bottom"}}]},{group:c.aligntable,icon:"aligntable",subMenu:[{cmdName:"tablealignment",className:"left",label:c.tableleft,value:"left"},{cmdName:"tablealignment",className:"center",label:c.tablecenter,value:"center"},{cmdName:"tablealignment",className:"right",label:c.tableright,value:"right"}]},"-",{label:c.insertparagraphbefore,cmdName:"insertparagraph",value:!0},{label:c.insertparagraphafter,cmdName:"insertparagraph"},{label:c.copy,cmdName:"copy"},{label:c.paste,cmdName:"paste"}];if(a.length){var e=
UE.ui.uiUtils;d.addListener("contextmenu",function(h,g){var l=e.getViewportOffsetByEvent(g);d.fireEvent("beforeselectionchange");b&&b.destroy();for(var k=0,m,n=[];m=a[k];k++){var q;(function(a){if("-"==a)(q=n[n.length-1])&&"-"!==q&&n.push("-");else if(a.hasOwnProperty("group")){for(var b=0,e,g=[];e=a.subMenu[b];b++)(function(a){"-"==a?(q=g[g.length-1])&&"-"!==q?g.push("-"):g.splice(g.length-1):(d.commands[a.cmdName]||UE.commands[a.cmdName]||a.query)&&-1<(a.query?a.query():d.queryCommandState(a.cmdName))&&
g.push({label:a.label||d.getLang("contextMenu."+a.cmdName+(a.value||""))||"",className:"edui-for-"+a.cmdName+(a.className?" edui-for-"+a.cmdName+"-"+a.className:""),onclick:a.exec?function(){a.exec.call(d)}:function(){d.execCommand(a.cmdName,a.value)}})})(e);g.length&&n.push({label:function(){switch(a.icon){case "table":return d.getLang("contextMenu.table");case "justifyjustify":return d.getLang("contextMenu.paragraph");case "aligntd":return d.getLang("contextMenu.aligntd");case "aligntable":return d.getLang("contextMenu.aligntable");
case "tablesort":return c.tablesort;case "borderBack":return c.borderbk;default:return""}}(),className:"edui-for-"+a.icon,subMenu:{items:g,editor:d}})}else(d.commands[a.cmdName]||UE.commands[a.cmdName]||a.query)&&-1<(a.query?a.query.call(d):d.queryCommandState(a.cmdName))&&n.push({label:a.label||d.getLang("contextMenu."+a.cmdName),className:"edui-for-"+(a.icon?a.icon:a.cmdName+(a.value||"")),onclick:a.exec?function(){a.exec.call(d)}:function(){d.execCommand(a.cmdName,a.value)}})})(m)}"-"==n[n.length-
1]&&n.pop();b=new UE.ui.Menu({items:n,className:"edui-contextmenu",editor:d});b.render();b.showAt(l);d.fireEvent("aftershowcontextmenu",b);f.preventDefault(g);if(r.ie){var t;try{t=d.selection.getNative().createRange()}catch(p){return}t.item&&(new L.Range(d.document)).selectNode(t.item(0)).select(!0,!0)}});d.addListener("aftershowcontextmenu",function(a,b){if(d.zeroclipboard){var c=b.items,e;for(e in c)"edui-for-copy"==c[e].className&&d.zeroclipboard.clip(c[e].getDom())}})}}};UE.plugins.shortcutmenu=
function(){var d,c=this.options.shortcutMenu||[];c.length&&(this.addListener("contextmenu mouseup",function(b,a){var e=this,h={type:b,target:a.target||a.srcElement,screenX:a.screenX,screenY:a.screenY,clientX:a.clientX,clientY:a.clientY};setTimeout(function(){if(!1===e.selection.getRange().collapsed||"contextmenu"==b)d||(d=new s.editor.ui.ShortCutMenu({editor:e,items:c,theme:e.options.theme,className:"edui-shortcutmenu"}),d.render(),e.fireEvent("afterrendershortcutmenu",d)),d.show(h,!!UE.plugins.contextmenu)});
if("contextmenu"==b&&(f.preventDefault(a),r.ie9below)){var g;try{g=e.selection.getNative().createRange()}catch(l){return}g.item&&(new L.Range(e.document)).selectNode(g.item(0)).select(!0,!0)}}),this.addListener("keydown",function(b){"keydown"==b&&d&&!d.isHidden&&d.hide()}))};UE.plugins.basestyle=function(){var d={bold:["strong","b"],italic:["em","i"],subscript:["sub"],superscript:["sup"]},c=function(a,b){return f.filterNodeList(a.selection.getStartElementPath(),b)},b=this;b.addshortcutkey({Bold:"ctrl+66",
Italic:"ctrl+73",Underline:"ctrl+85"});b.addInputRule(function(a){p.each(a.getNodesByTagName("b i"),function(a){switch(a.tagName){case "b":a.tagName="strong";break;case "i":a.tagName="em"}})});for(var a in d)(function(a,d){b.commands[a]={execCommand:function(a){var e=b.selection.getRange(),k=c(this,d);if(e.collapsed){if(k)a=b.document.createTextNode(""),e.insertNode(a).removeInlineStyle(d),e.setStartBefore(a),f.remove(a);else{k=e.document.createElement(d[0]);if("superscript"==a||"subscript"==a)a=
b.document.createTextNode(""),e.insertNode(a).removeInlineStyle(["sub","sup"]).setStartBefore(a).collapse(!0);e.insertNode(k).setStart(k,0)}e.collapse(!0)}else{if("superscript"==a||"subscript"==a)k&&k.tagName.toLowerCase()==a||e.removeInlineStyle(["sub","sup"]);k?e.removeInlineStyle(d):e.applyInlineStyle(d[0])}e.select()},queryCommandState:function(){return c(this,d)?1:0}}})(a,d[a])};UE.plugins.elementpath=function(){var d,c,b=this;b.setOpt("elementPathEnabled",!0);b.options.elementPathEnabled&&(b.commands.elementpath=
{execCommand:function(a,e){var f=c[e],g=b.selection.getRange();d=1*e;g.selectNode(f).select()},queryCommandValue:function(){var a=[].concat(this.selection.getStartElementPath()).reverse(),b=[];c=a;for(var f=0,g;g=a[f];f++)if(3!=g.nodeType){var l=g.tagName.toLowerCase();"img"==l&&g.getAttribute("anchorname")&&(l="anchor");b[f]=l;if(d==f){d=-1;break}}return b}})};UE.plugins.formatmatch=function(){function d(h,g){if(r.webkit)var l="IMG"==g.target.tagName?g.target:null;c.undoManger&&c.undoManger.save();
var k=c.selection.getRange(),l=l||k.getClosedNode();if(a&&l&&"IMG"==l.tagName)l.style.cssText+=";float:"+(a.style.cssFloat||a.style.styleFloat||"none")+";display:"+(a.style.display||"inline"),a=null;else if(!a){if(k.collapsed){var m=c.document.createTextNode("match");k.insertNode(m).select()}c.__hasEnterExecCommand=!0;k=c.options.removeFormatAttributes;c.options.removeFormatAttributes="";c.execCommand("removeformat");c.options.removeFormatAttributes=k;c.__hasEnterExecCommand=!1;k=c.selection.getRange();
b.length&&(l=k,m&&l.selectNode(m),l.applyInlineStyle(b[b.length-1].tagName,null,b));m&&k.setStartBefore(m).collapse(!0);k.select();m&&f.remove(m)}c.undoManger&&c.undoManger.save();c.removeListener("mouseup",d);e=0}var c=this,b=[],a,e=0;c.addListener("reset",function(){b=[];e=0});c.commands.formatmatch={execCommand:function(h){if(e)e=0,b=[],c.removeListener("mouseup",d);else{h=c.selection.getRange();a=h.getClosedNode();if(!a||"IMG"!=a.tagName){h.collapse(!0).shrinkBoundary();b=f.findParents(h.startContainer,
!0,function(a){return!f.isBlockElm(a)&&1==a.nodeType});h=0;for(var g;g=b[h];h++)if("A"==g.tagName){b.splice(h,1);break}}c.addListener("mouseup",d);e=1}},queryCommandState:function(){return e},notNeedUndo:1}};UE.plugin.register("searchreplace",function(){function d(a,b,c){var l=0;a=a.firstChild;for(var k=0;a;){if(3==a.nodeType){if(k=a.nodeValue.replace(/(^[\t\r\n]+)|([\t\r\n]+$)/,"").length,l+=k,l>=b)return{node:a,index:k-(l-b)}}else if(!v.$empty[a.tagName]&&(k=a[r.ie?"innerText":"textContent"].replace(/(^[\t\r\n]+)|([\t\r\n]+$)/,
"").length,l+=k,l>=b&&(k=d(a,k-(l-b),c))))return k;a=f.getNextDomNode(a)}}function c(c,h){var g=c.selection.getRange(),l,k=h.searchStr,m=c.document.createElement("span");m.innerHTML="$$ueditor_searchreplace_key$$";g.shrinkBoundary(!0);if(!g.collapsed){g.select();var n=c.selection.getText();if(RegExp("^"+h.searchStr+"$",h.casesensitive?"":"i").test(n)){if(void 0!=h.replaceStr)return k=h.replaceStr,k=b.document.createTextNode(k),g.deleteContents().insertNode(k),g.select(),!0;g.collapse(-1==h.dir)}}g.insertNode(m);
g.enlargeToBlockElm(!0);l=g.startContainer;n=l[r.ie?"innerText":"textContent"].indexOf("$$ueditor_searchreplace_key$$");g.setStartBefore(m);f.remove(m);a:{var m=l,q;l=h.all||1==h.dir?"getNextDomNode":"getPreDomNode";f.isBody(m)&&(m=m.firstChild);for(;m;){q=3==m.nodeType?m.nodeValue:m[r.ie?"innerText":"textContent"];b:{var t=h,p=n,y=t.searchStr;-1==t.dir&&(q=q.split("").reverse().join(""),y=y.split("").reverse().join(""),p=q.length-p);for(var y=RegExp(y,"g"+(t.casesensitive?"":"i")),u=void 0;u=y.exec(q);)if(u.index>=
p){q=-1==t.dir?q.length-u.index-t.searchStr.length:u.index;break b}q=-1}if(-1!=q){n={node:m,index:q};break a}for(m=f[l](m);m&&a[m.nodeName.toLowerCase()];)m=f[l](m,!0);m&&(n=-1==h.dir?(3==m.nodeType?m.nodeValue:m[r.ie?"innerText":"textContent"]).length:0)}n=void 0}if(n)return m=d(n.node,n.index,k),k=d(n.node,n.index+k.length,k),g.setStart(m.node,m.index).setEnd(k.node,k.index),void 0!==h.replaceStr&&(k=h.replaceStr,k=b.document.createTextNode(k),g.deleteContents().insertNode(k)),g.select(),!0;g.setCursor()}
var b=this,a={table:1,tbody:1,tr:1,ol:1,ul:1};return{commands:{searchreplace:{execCommand:function(a,d){p.extend(d,{all:!1,casesensitive:!1,dir:1},!0);var g=0;if(d.all){var f=b.selection.getRange(),k=b.body.firstChild;k&&1==k.nodeType?(f.setStart(k,0),f.shrinkBoundary(!0)):3==k.nodeType&&f.setStartBefore(k);f.collapse(!0).select(!0);for(void 0!==d.replaceStr&&b.fireEvent("saveScene");c(this,d);)g++}else void 0!==d.replaceStr&&b.fireEvent("saveScene"),c(this,d)&&g++;g&&b.fireEvent("saveScene");return g},
notNeedUndo:1}}}});UE.plugins.customstyle=function(){var d=this;d.setOpt({customstyle:[{tag:"h1",name:"tc",style:"font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;"},{tag:"h1",name:"tl",style:"font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:left;margin:0 0 10px 0;"},{tag:"span",name:"im",style:"font-size:16px;font-style:italic;font-weight:bold;line-height:18px;"},{tag:"span",name:"hi",style:"font-size:16px;font-style:italic;font-weight:bold;color:rgb(51, 153, 204);line-height:18px;"}]});
d.commands.customstyle={execCommand:function(c,b){var a=b.tag,e=f.findParent(this.selection.getStart(),function(a){return a.getAttribute("label")},!0),d,g,l={};for(d in b)void 0!==b[d]&&(l[d]=b[d]);delete l.tag;if(e&&e.getAttribute("label")==b.label){d=this.selection.getRange();g=d.createBookmark();if(d.collapsed)if(v.$block[e.tagName]){var k=this.document.createElement("p");f.moveChild(e,k);e.parentNode.insertBefore(k,e);f.remove(e)}else f.remove(e,!0);else{e=f.getCommonAncestor(g.start,g.end);l=
f.getElementsByTagName(e,a);RegExp(a,"i").test(e.tagName)&&l.push(e);for(var m=0,n;n=l[m++];)if(n.getAttribute("label")==b.label){var k=f.getPosition(n,g.start),q=f.getPosition(n,g.end);(k&f.POSITION_FOLLOWING||k&f.POSITION_CONTAINS)&&(q&f.POSITION_PRECEDING||q&f.POSITION_CONTAINS)&&v.$block[a]&&(k=this.document.createElement("p"),f.moveChild(n,k),n.parentNode.insertBefore(k,n));f.remove(n,!0)}(e=f.findParent(e,function(a){return a.getAttribute("label")==b.label},!0))&&f.remove(e,!0)}d.moveToBookmark(g).select()}else v.$block[a]?
(this.execCommand("paragraph",a,l,"customstyle"),d=this.selection.getRange(),d.collapsed||(d.collapse(),e=f.findParent(this.selection.getStart(),function(a){return a.getAttribute("label")==b.label},!0),a=this.document.createElement("p"),f.insertAfter(e,a),f.fillNode(this.document,a),d.setStart(a,0).setCursor())):(d=this.selection.getRange(),d.collapsed?(e=this.document.createElement(a),f.setAttributes(e,l),d.insertNode(e).setStart(e,0).setCursor()):(g=d.createBookmark(),d.applyInlineStyle(a,l).moveToBookmark(g).select()))},
queryCommandValue:function(){var c=f.filterNodeList(this.selection.getStartElementPath(),function(b){return b.getAttribute("label")});return c?c.getAttribute("label"):""}};d.addListener("keyup",function(c,b){var a=b.keyCode||b.which;if(32==a||13==a)if(a=d.selection.getRange(),a.collapsed){var e=f.findParent(d.selection.getStart(),function(a){return a.getAttribute("label")},!0);if(e&&v.$block[e.tagName]&&f.isEmptyNode(e)){var h=d.document.createElement("p");f.insertAfter(e,h);f.fillNode(d.document,
h);f.remove(e);a.setStart(h,0).setCursor()}}})};UE.plugins.catchremoteimage=function(){var d=this,c=UE.ajax;!1!==d.options.catchRemoteImageEnable&&(d.setOpt({catchRemoteImageEnable:!1}),d.addListener("afterpaste",function(){d.fireEvent("catchRemoteImage")}),d.addListener("catchRemoteImage",function(){function b(a,b){var f=p.serializeParam(d.queryCommandValue("serverparam"))||"",f=p.formatUrl(e+(-1==e.indexOf("?")?"?":"&")+f),h={method:"POST",dataType:p.isCrossDomainUrl(f)?"jsonp":"",timeout:6E4,onsuccess:b.success,
onerror:b.error};h[g]=a;c.request(f,h)}for(var a=d.getOpt("catcherLocalDomain"),e=d.getActionUrl(d.getOpt("catcherActionName")),h=d.getOpt("catcherUrlPrefix"),g=d.getOpt("catcherFieldName"),l=[],k=f.getElementsByTagName(d.document,"img"),m=function(a,b){if(-1!=a.indexOf(location.host)||/(^\.)|(^\/)/.test(a))return!0;if(b)for(var c=0,e;e=b[c++];)if(-1!==a.indexOf(e))return!0;return!1},n=0,q;q=k[n++];)q.getAttribute("word_img")||(q=q.getAttribute("_src")||q.src||"",/^(https?|ftp):/i.test(q)&&!m(q,a)&&
l.push(q));l.length&&b(l,{success:function(a){try{var b=void 0!==a.state?a:eval("("+a.responseText+")")}catch(c){return}var e,g,n,l=b.list;for(a=0;b=k[a++];)for(n=b.getAttribute("_src")||b.src||"",e=0;g=l[e++];)if(n==g.source&&"SUCCESS"==g.state){e=h+g.url;f.setAttributes(b,{src:e,_src:e});break}d.fireEvent("catchremotesuccess")},error:function(){d.fireEvent("catchremoteerror")}})}))};UE.plugin.register("snapscreen",function(){function d(a){var b=document.createElement("a"),d=p.serializeParam(c.queryCommandValue("serverparam"))||
"";b.href=a;r.ie&&(b.href=b.href);a=b.search;d&&(a=a+(-1==a.indexOf("?")?"?":"&")+d,a=a.replace(/[&]+/ig,"&"));return{port:b.port,hostname:b.hostname,path:b.pathname+a||+b.hash}}var c=this,b;return{commands:{snapscreen:{execCommand:function(a){function e(a){try{if(a=eval("("+a+")"),"SUCCESS"==a.state){var b=c.options;c.execCommand("insertimage",{src:b.snapscreenUrlPrefix+a.url,_src:b.snapscreenUrlPrefix+a.url,alt:a.title||"",floatStyle:b.snapscreenImgAlign})}else alert(a.state)}catch(e){alert(l.callBackErrorMsg)}}
var f,g,l=c.getLang("snapScreen_plugin");if(!b){a=c.container;b=(c.container.ownerDocument||c.container.document).createElement("object");try{b.type="application/x-pluginbaidusnap"}catch(k){return}b.style.cssText="position:absolute;left:-9999px;width:0;height:0;";b.setAttribute("width","0");b.setAttribute("height","0");a.appendChild(b)}a=c.getActionUrl(c.getOpt("snapscreenActionName"));f=d(a);setTimeout(function(){try{g=b.saveSnapshot(f.hostname,f.path,f.port)}catch(a){c.ui._dialogs.snapscreenDialog.open();
return}e(g)},50)},queryCommandState:function(){return-1!=navigator.userAgent.indexOf("Windows",0)?0:-1}}}}});UE.commands.insertparagraph={execCommand:function(d,c){for(var b=this.selection.getRange(),a=b.startContainer,e;a&&!f.isBody(a);)e=a,a=a.parentNode;e&&(a=this.document.createElement("p"),c?e.parentNode.insertBefore(a,e):e.parentNode.insertBefore(a,e.nextSibling),f.fillNode(this.document,a),b.setStart(a,0).setCursor(!1,!0))}};UE.plugin.register("webapp",function(){function d(b,a){return a?'<iframe class="edui-faked-webapp" title="'+
b.title+'" '+(b.align&&!b.cssfloat?'align="'+b.align+'"':"")+(b.cssfloat?'style="float:'+b.cssfloat+'"':"")+'width="'+b.width+'" height="'+b.height+'"  scrolling="no" frameborder="0" src="'+b.url+'" logo_url = "'+b.logo+'"></iframe>':'<img title="'+b.title+'" width="'+b.width+'" height="'+b.height+'" src="'+c.options.UEDITOR_HOME_URL+'themes/default/images/spacer.gif" _logo_url="'+b.logo+'" style="background:url('+b.logo+') no-repeat center center; border:1px solid gray;" class="edui-faked-webapp" _url="'+
b.url+'" '+(b.align&&!b.cssfloat?'align="'+b.align+'"':"")+(b.cssfloat?'style="float:'+b.cssfloat+'"':"")+"/>"}var c=this;return{outputRule:function(b){p.each(b.getNodesByTagName("img"),function(a){var b;"edui-faked-webapp"==a.getAttr("class")&&(b=d({title:a.getAttr("title"),width:a.getAttr("width"),height:a.getAttr("height"),align:a.getAttr("align"),cssfloat:a.getStyle("float"),url:a.getAttr("_url"),logo:a.getAttr("_logo_url")},!0),b=UE.uNode.createElement(b),a.parentNode.replaceChild(b,a))})},inputRule:function(b){p.each(b.getNodesByTagName("iframe"),
function(a){if("edui-faked-webapp"==a.getAttr("class")){var b=UE.uNode.createElement(d({title:a.getAttr("title"),width:a.getAttr("width"),height:a.getAttr("height"),align:a.getAttr("align"),cssfloat:a.getStyle("float"),url:a.getAttr("src"),logo:a.getAttr("logo_url")}));a.parentNode.replaceChild(b,a)}})},commands:{webapp:{execCommand:function(b,a){var c=d(p.extend(a,{align:"none"}),!1);this.execCommand("inserthtml",c)},queryCommandState:function(){var b=this.selection.getRange().getClosedNode();return b&&
"edui-faked-webapp"==b.className?1:0}}}}});UE.plugins.template=function(){UE.commands.template={execCommand:function(d,c){c.html&&this.execCommand("inserthtml",c.html)}};this.addListener("click",function(d,c){var b=c.target||c.srcElement,a=this.selection.getRange();(b=f.findParent(b,function(a){if(a.className&&f.hasClass(a,"ue_t"))return a},!0))&&a.selectNode(b).shrinkBoundary().select()});this.addListener("keydown",function(d,c){var b=this.selection.getRange();b.collapsed||c.ctrlKey||c.metaKey||
c.shiftKey||c.altKey||(b=f.findParent(b.startContainer,function(a){if(a.className&&f.hasClass(a,"ue_t"))return a},!0))&&f.removeClasses(b,["ue_t"])})};UE.plugin.register("music",function(){function d(b,a,e,d,g,f){return f?'<embed type="application/x-shockwave-flash" class="edui-faked-music" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+b+'" width="'+a+'" height="'+e+'" '+(d&&!g?'align="'+d+'"':"")+(g?'style="float:'+g+'"':"")+' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >':
"<img "+(d&&!g?'align="'+d+'"':"")+(g?'style="float:'+g+'"':"")+' width="'+a+'" height="'+e+'" _url="'+b+'" class="edui-faked-music" src="'+c.options.langPath+c.options.lang+'/images/music.png" />'}var c=this;return{outputRule:function(b){p.each(b.getNodesByTagName("img"),function(a){var b;if("edui-faked-music"==a.getAttr("class")){b=a.getStyle("float");var c=a.getAttr("align");b=d(a.getAttr("_url"),a.getAttr("width"),a.getAttr("height"),c,b,!0);b=UE.uNode.createElement(b);a.parentNode.replaceChild(b,
a)}})},inputRule:function(b){p.each(b.getNodesByTagName("embed"),function(a){if("edui-faked-music"==a.getAttr("class")){var b=a.getStyle("float"),c=a.getAttr("align");html=d(a.getAttr("src"),a.getAttr("width"),a.getAttr("height"),c,b,!1);b=UE.uNode.createElement(html);a.parentNode.replaceChild(b,a)}})},commands:{music:{execCommand:function(b,a){var c=d(a.url,a.width||400,a.height||95,"none",!1);this.execCommand("inserthtml",c)},queryCommandState:function(){var b=this.selection.getRange().getClosedNode();
return b&&"edui-faked-music"==b.className?1:0}}}}});UE.plugin.register("autoupload",function(){function d(c,b){var a,e,d,g,l,k,m,n,q=/image\/\w+/i.test(c.type)?"image":"file",t="loading_"+(+new Date).toString(36);a=b.getOpt(q+"FieldName");e=b.getOpt(q+"UrlPrefix");d=b.getOpt(q+"MaxSize");g=b.getOpt(q+"AllowFiles");l=b.getActionUrl(b.getOpt(q+"ActionName"));m=function(a){var c=b.document.getElementById(t);c&&f.remove(c);b.fireEvent("showmessage",{id:t,content:a,type:"error",timeout:4E3})};"image"==
q?(k='<img class="loadingclass" id="'+t+'" src="'+b.options.themePath+b.options.theme+'/images/spacer.gif" title="'+(b.getLang("autoupload.loading")||"")+'" >',n=function(a){var c=e+a.url,d=b.document.getElementById(t);d&&(d.setAttribute("src",c),d.setAttribute("_src",c),d.setAttribute("title",a.title||""),d.setAttribute("alt",a.original||""),d.removeAttribute("id"),f.removeClasses(d,"loadingclass"))}):(k='<p><img class="loadingclass" id="'+t+'" src="'+b.options.themePath+b.options.theme+'/images/spacer.gif" title="'+
(b.getLang("autoupload.loading")||"")+'" ></p>',n=function(a){a=e+a.url;var c=b.document.getElementById(t),d=b.selection.getRange(),g=d.createBookmark();d.selectNode(c).select();b.execCommand("insertfile",{url:a});d.moveToBookmark(g).select()});b.execCommand("inserthtml",k);b.getOpt(q+"ActionName")?c.size>d?m(b.getLang("autoupload.exceedSizeError")):(d=c.name?c.name.substr(c.name.lastIndexOf(".")):"")&&"image"!=q||g&&-1==(g.join("")+".").indexOf(d.toLowerCase()+".")?m(b.getLang("autoupload.exceedTypeError")):
(g=new XMLHttpRequest,q=new FormData,d=p.serializeParam(b.queryCommandValue("serverparam"))||"",l=p.formatUrl(l+(-1==l.indexOf("?")?"?":"&")+d),q.append(a,c,c.name||"blob."+c.type.substr(6)),q.append("type","ajax"),g.open("post",l,!0),g.setRequestHeader("X-Requested-With","XMLHttpRequest"),g.addEventListener("load",function(a){try{var c=(new Function("return "+p.trim(a.target.response)))();"SUCCESS"==c.state&&c.url?n(c):m(c.state)}catch(e){m(b.getLang("autoupload.loadError"))}}),g.send(q)):m(b.getLang("autoupload.errorLoadConfig"))}
return{outputRule:function(c){p.each(c.getNodesByTagName("img"),function(b){/\b(loaderrorclass)|(bloaderrorclass)\b/.test(b.getAttr("class"))&&b.parentNode.removeChild(b)});p.each(c.getNodesByTagName("p"),function(b){/\bloadpara\b/.test(b.getAttr("class"))&&b.parentNode.removeChild(b)})},bindEvents:{ready:function(c){var b=this;window.FormData&&window.FileReader&&(f.on(b.body,"paste drop",function(a){var c=!1,f;if(f="paste"==a.type?a.clipboardData&&a.clipboardData.items&&1==a.clipboardData.items.length&&
/^image\//.test(a.clipboardData.items[0].type)?a.clipboardData.items:null:a.dataTransfer&&a.dataTransfer.files?a.dataTransfer.files:null){for(var g=f.length,l;g--;)l=f[g],l.getAsFile&&(l=l.getAsFile()),l&&0<l.size&&(d(l,b),c=!0);c&&a.preventDefault()}}),f.on(b.body,"dragover",function(a){"Files"==a.dataTransfer.types[0]&&a.preventDefault()}),p.cssRule("loading",".loadingclass{display:inline-block;cursor:default;background: url('"+this.options.themePath+this.options.theme+"/images/loading.gif') no-repeat center center transparent;border:1px solid #cccccc;margin-left:1px;height: 22px;width: 22px;}\n.loaderrorclass{display:inline-block;cursor:default;background: url('"+
this.options.themePath+this.options.theme+"/images/loaderror.png') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}",this.document))}}}});UE.plugin.register("autosave",function(){function d(d){var g;new Date-b<a||(d.hasContents()?(b=new Date,d._saveFlag=null,g=c.body.innerHTML,!1!==d.fireEvent("beforeautosave",{content:g})&&(c.setPreferences(e,g),d.fireEvent("afterautosave",{content:g}))):e&&c.removePreferences(e))}var c=this,b=new Date,a=20,
e=null;return{defaultOptions:{saveInterval:500},bindEvents:{ready:function(){var a=null,a=c.key?c.key+"-drafts-data":(c.container.parentNode.id||"ue-common")+"-drafts-data";e=(location.protocol+location.host+location.pathname).replace(/[.:\/]/g,"_")+a},contentchange:function(){e&&(c._saveFlag&&window.clearTimeout(c._saveFlag),0<c.options.saveInterval?c._saveFlag=window.setTimeout(function(){d(c)},c.options.saveInterval):d(c))}},commands:{clearlocaldata:{execCommand:function(a,b){e&&c.getPreferences(e)&&
c.removePreferences(e)},notNeedUndo:!0,ignoreContentChange:!0},getlocaldata:{execCommand:function(a,b){return e?c.getPreferences(e)||"":""},notNeedUndo:!0,ignoreContentChange:!0},drafts:{execCommand:function(a,b){e&&(c.body.innerHTML=c.getPreferences(e)||"<p>"+f.fillHtml+"</p>",c.focus(!0))},queryCommandState:function(){return e?null===c.getPreferences(e)?-1:0:-1},notNeedUndo:!0,ignoreContentChange:!0}}}});UE.plugin.register("charts",function(){function d(b){var a=null,c=0;if(2>b.rows.length||2>b.rows[0].cells.length)return!1;
for(var a=b.rows[0].cells,c=a.length,d=0,g;g=a[d];d++)if("th"!==g.tagName.toLowerCase())return!1;for(d=1;a=b.rows[d];d++){if(a.cells.length!=c||"th"!==a.cells[0].tagName.toLowerCase())return!1;for(var f=1;g=a.cells[f];f++)if(g=p.trim(g.innerText||g.textContent||""),g=g.replace(RegExp(UE.dom.domUtils.fillChar,"g"),"").replace(/^\s+|\s+$/g,""),!/^\d*\.?\d+$/.test(g))return!1}return!0}var c=this;return{bindEvents:{chartserror:function(){}},commands:{charts:{execCommand:function(b,a){var e=f.findParentByTagName(this.selection.getRange().startContainer,
"table",!0),h=[],g={};if(!e)return!1;if(!d(e))return c.fireEvent("chartserror"),!1;g.title=a.title||"";g.subTitle=a.subTitle||"";g.xTitle=a.xTitle||"";g.yTitle=a.yTitle||"";g.suffix=a.suffix||"";g.tip=a.tip||"";g.dataFormat=a.tableDataFormat||"";g.chartType=a.chartType||0;for(var l in g)g.hasOwnProperty(l)&&h.push(l+":"+g[l]);e.setAttribute("data-chart",h.join(";"));f.addClass(e,"edui-charts-table")},queryCommandState:function(b,a){var c=f.findParentByTagName(this.selection.getRange().startContainer,
"table",!0);return c&&d(c)?0:-1}}},inputRule:function(b){p.each(b.getNodesByTagName("table"),function(a){void 0!==a.getAttr("data-chart")&&a.setAttr("style")})},outputRule:function(b){p.each(b.getNodesByTagName("table"),function(a){void 0!==a.getAttr("data-chart")&&a.setAttr("style","display: none;")})}}});UE.plugin.register("section",function(){function d(a){this.tag="";this.level=-1;this.parentSection=this.previousSection=this.nextSection=this.dom=null;this.startAddress=[];this.endAddress=[];this.children=
[]}function c(a){var b=new d;return p.extend(b,a)}function b(a,b){for(var c=b,d=0;d<a.length;d++){if(!c.childNodes)return null;c=c.childNodes[a[d]]}return c}var a=this;return{bindMultiEvents:{type:"aftersetcontent afterscencerestore",handler:function(){a.fireEvent("updateSections")}},bindEvents:{ready:function(){a.fireEvent("updateSections");f.on(a.body,"drop paste",function(){a.fireEvent("updateSections")})},afterexeccommand:function(b,c){"paragraph"==c&&a.fireEvent("updateSections")},keyup:function(a,
b){if(!0!=this.selection.getRange().collapsed)this.fireEvent("updateSections");else{var c=b.keyCode||b.which;13!=c&&8!=c&&46!=c||this.fireEvent("updateSections")}}},commands:{getsections:{execCommand:function(a,b){function d(a,b){for(var e,k=null,h,r=a.childNodes,s=0,v=r.length;s<v;s++){h=r[s];a:{e=h;for(var A=0;A<f.length;A++)if(f[A](e)){e=A;break a}e=-1}if(0<=e){k=m.selection.getRange().selectNode(h).createAddress(!0).startAddress;k=c({tag:h.tagName,title:h.innerText||h.textContent||"",level:e,
dom:h,startAddress:p.clone(k,[]),endAddress:p.clone(k,[]),children:[]});n.nextSection=k;for(h=k.previousSection=n;e<=h.level;)h=h.parentSection;k.parentSection=h;h.children.push(k);k=n=k}else 1===h.nodeType&&d(h,b),k&&k.endAddress[k.endAddress.length-1]++}}for(var f=b||"h1 h2 h3 h4 h5 h6".split(" "),k=0;k<f.length;k++)"string"==typeof f[k]?f[k]=function(a){return function(b){return b.tagName==a.toUpperCase()}}(f[k]):"function"!=typeof f[k]&&(f[k]=function(a){return null});var m=this,n=k=c({level:-1,
title:"root"});d(m.body,k);return k},notNeedUndo:!0},movesection:{execCommand:function(a,c,d,l){if(c&&d&&-1!=d.level){d=l?d.endAddress:d.startAddress;a=b(d,this.body);var k;if(!(k=!d)&&!(k=!a)){k=c.startAddress;for(var m=!1,n=!1,q=0;q<k.length&&!(q>=d.length);q++)if(d[q]>k[q]){m=!0;break}else if(d[q]<k[q])break;for(q=0;q<c.endAddress.length&&!(q>=d.length);q++)if(d[q]<k[q]){n=!0;break}else if(d[q]>k[q])break;k=m&&n}if(!k){d=b(c.startAddress,this.body);c=b(c.endAddress,this.body);if(l)for(l=c;l&&!(f.getPosition(d,
l)&f.POSITION_FOLLOWING);){k=l.previousSibling;f.insertAfter(a,l);if(l==d)break;l=k}else for(l=d;l&&!(f.getPosition(l,c)&f.POSITION_FOLLOWING);){k=l.nextSibling;a.parentNode.insertBefore(l,a);if(l==c)break;l=k}this.fireEvent("updateSections")}}}},deletesection:{execCommand:function(a,b,c){function d(a){for(var b=k.body,c=0;c<a.length;c++){if(!b.childNodes)return null;b=b.childNodes[a[c]]}return b}var k=this;if(b){a=d(b.startAddress);b=d(b.endAddress);if(c)f.remove(a);else for(;a&&f.inDoc(b,k.document)&&
!(f.getPosition(a,b)&f.POSITION_FOLLOWING);)c=a.nextSibling,f.remove(a),a=c;k.fireEvent("updateSections")}}},selectsection:{execCommand:function(a,b){if(!b&&!b.dom)return!1;var c=this.selection.getRange(),d={startAddress:p.clone(b.startAddress,[]),endAddress:p.clone(b.endAddress,[])};d.endAddress[d.endAddress.length-1]++;c.moveToAddress(d).select().scrollToView();return!0},notNeedUndo:!0},scrolltosection:{execCommand:function(a,b){if(!b&&!b.dom)return!1;var c=this.selection.getRange(),d={startAddress:b.startAddress,
endAddress:b.endAddress};d.endAddress[d.endAddress.length-1]++;c.moveToAddress(d).scrollToView();return!0},notNeedUndo:!0}}}});UE.plugin.register("simpleupload",function(){function d(){var e=a.offsetWidth||20,d=a.offsetHeight||20,g=document.createElement("iframe"),l="display:block;width:"+e+"px;height:"+d+"px;overflow:hidden;border:0;margin:0;padding:0;position:absolute;top:0;left:0;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity: 0;opacity: 0;cursor:pointer;";f.on(g,"load",function(){var a=
(+new Date).toString(36),m,n,q;n=g.contentDocument||g.contentWindow.document;q=n.body;m=n.createElement("div");m.innerHTML='<form id="edui_form_'+a+'" target="edui_iframe_'+a+'" method="POST" enctype="multipart/form-data" action="'+c.getOpt("serverUrl")+'" style="'+l+'"><input id="edui_input_'+a+'" type="file" accept="image/*" name="'+c.options.imageFieldName+'" style="'+l+'"></form><iframe id="edui_iframe_'+a+'" name="edui_iframe_'+a+'" style="display:none;width:0;height:0;border:0;margin:0;padding:0;position:absolute;"></iframe>';
m.className="edui-"+c.options.theme;m.id=c.ui.id+"_iframeupload";q.style.cssText=l;q.style.width=e+"px";q.style.height=d+"px";q.appendChild(m);q.parentNode&&(q.parentNode.style.width=e+"px",q.parentNode.style.height=e+"px");var t=n.getElementById("edui_form_"+a),w=n.getElementById("edui_input_"+a),r=n.getElementById("edui_iframe_"+a);f.on(w,"change",function(){function a(){try{var d,g,k,h=(r.contentDocument||r.contentWindow.document).body;g=(new Function("return "+(h.innerText||h.textContent||"")))();
d=c.options.imageUrlPrefix+g.url;"SUCCESS"==g.state&&g.url?(k=c.document.getElementById(e),k.setAttribute("src",d),k.setAttribute("_src",d),k.setAttribute("title",g.title||""),k.setAttribute("alt",g.original||""),k.removeAttribute("id"),f.removeClasses(k,"loadingclass")):b&&b(g.state)}catch(n){b&&b(c.getLang("simpleupload.loadError"))}t.reset();f.un(r,"load",a)}function b(a){if(e){var d=c.document.getElementById(e);d&&f.remove(d);c.fireEvent("showmessage",{id:e,content:a,type:"error",timeout:4E3})}}
if(w.value){var e="loading_"+(+new Date).toString(36),d=p.serializeParam(c.queryCommandValue("serverparam"))||"",g=c.getActionUrl(c.getOpt("imageActionName")),k=c.getOpt("imageAllowFiles");c.focus();c.execCommand("inserthtml",'<img class="loadingclass" id="'+e+'" src="'+c.options.themePath+c.options.theme+'/images/spacer.gif" title="'+(c.getLang("simpleupload.loading")||"")+'" >');if(c.getOpt("imageActionName")){var h=w.value,h=h?h.substr(h.lastIndexOf(".")):"";!h||k&&-1==(k.join("")+".").indexOf(h.toLowerCase()+
".")?b(c.getLang("simpleupload.exceedTypeError")):(f.on(r,"load",a),t.action=p.formatUrl(g+(-1==g.indexOf("?")?"?":"&")+d),t.submit())}else errorHandler(c.getLang("autoupload.errorLoadConfig"))}});var u;c.addListener("selectionchange",function(){clearTimeout(u);u=setTimeout(function(){-1==c.queryCommandState("simpleupload")?w.disabled="disabled":w.disabled=!1},400)});b=!0});g.style.cssText=l;a.appendChild(g)}var c=this,b=!1,a;return{bindEvents:{ready:function(){p.cssRule("loading",".loadingclass{display:inline-block;cursor:default;background: url('"+
this.options.themePath+this.options.theme+"/images/loading.gif') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}\n.loaderrorclass{display:inline-block;cursor:default;background: url('"+this.options.themePath+this.options.theme+"/images/loaderror.png') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}",this.document)},simpleuploadbtnready:function(b,f){a=f;c.afterConfigReady(d)}},outputRule:function(a){p.each(a.getNodesByTagName("img"),
function(a){/\b(loaderrorclass)|(bloaderrorclass)\b/.test(a.getAttr("class"))&&a.parentNode.removeChild(a)})},commands:{simpleupload:{queryCommandState:function(){return b?0:-1}}}}});UE.plugin.register("serverparam",function(){var d={};return{commands:{serverparam:{execCommand:function(c,b,a){void 0===b||null===b?d={}:p.isString(b)?void 0===a||null===a?delete d[b]:d[b]=a:p.isObject(b)?p.extend(d,b,!0):p.isFunction(b)&&p.extend(d,b(),!0)},queryCommandValue:function(){return d||{}}}}}});UE.plugin.register("insertfile",
function(){var d=this;return{commands:{insertfile:{execCommand:function(c,b){b=p.isArray(b)?b:[b];var a,e,f,g,l="";a=d.getOpt("UEDITOR_HOME_URL");var k=a+("/"==a.substr(a.length-1)?"":"/")+"dialogs/attachment/fileTypeImages/";for(a=0;a<b.length;a++){e=b[a];f=k;g=e.url;g=g.substr(g.lastIndexOf(".")+1).toLowerCase();var m={rar:"icon_rar.gif",zip:"icon_rar.gif",tar:"icon_rar.gif",gz:"icon_rar.gif",bz2:"icon_rar.gif",doc:"icon_doc.gif",docx:"icon_doc.gif",pdf:"icon_pdf.gif",mp3:"icon_mp3.gif",xls:"icon_xls.gif",
chm:"icon_chm.gif",ppt:"icon_ppt.gif",pptx:"icon_ppt.gif",avi:"icon_mv.gif",rmvb:"icon_mv.gif",wmv:"icon_mv.gif",flv:"icon_mv.gif",swf:"icon_mv.gif",rm:"icon_mv.gif",exe:"icon_exe.gif",psd:"icon_psd.gif",txt:"icon_txt.gif",jpg:"icon_jpg.gif",png:"icon_jpg.gif",jpeg:"icon_jpg.gif",gif:"icon_jpg.gif",ico:"icon_jpg.gif",bmp:"icon_jpg.gif"};f+=m[g]?m[g]:m.txt;g=e.title||e.url.substr(e.url.lastIndexOf("/")+1);l+='<p style="line-height: 16px;"><img style="vertical-align: middle; margin-right: 2px;" src="'+
f+'" _src="'+f+'" /><a style="font-size:12px; color:#0066cc;" href="'+e.url+'" title="'+g+'">'+g+"</a></p>"}d.execCommand("insertHtml",l)}}}}});s=s||{};s.editor=s.editor||{};UE.ui=s.editor.ui={};(function(){function d(){var a=document.getElementById("edui_fixedlayer");f.setViewportOffset(a,{left:0,top:0})}var c=s.editor.browser,b=s.editor.dom.domUtils,a=window.$EDITORUI={},e=0,f=s.editor.ui.uiUtils={uid:function(a){return a?a.ID$EDITORUI||(a.ID$EDITORUI=++e):++e},hook:function(a,b){var c;a&&a._callbacks?
c=a:(c=function(){var b;a&&(b=a.apply(this,arguments));for(var e=c._callbacks,d=e.length;d--;){var f=e[d].apply(this,arguments);void 0===b&&(b=f)}return b},c._callbacks=[]);c._callbacks.push(b);return c},createElementByHtml:function(a){var b=document.createElement("div");b.innerHTML=a;b=b.firstChild;b.parentNode.removeChild(b);return b},getViewportElement:function(){return c.ie&&c.quirks?document.body:document.documentElement},getClientRect:function(a){var c;try{c=a.getBoundingClientRect()}catch(e){c=
{left:0,top:0,height:0,width:0}}for(var d={left:Math.round(c.left),top:Math.round(c.top),height:Math.round(c.bottom-c.top),width:Math.round(c.right-c.left)},f;(f=a.ownerDocument)!==document&&(a=b.getWindow(f).frameElement);)c=a.getBoundingClientRect(),d.left+=c.left,d.top+=c.top;d.bottom=d.top+d.height;d.right=d.left+d.width;return d},getViewportRect:function(){var a=f.getViewportElement(),b=(window.innerWidth||a.clientWidth)|0,a=(window.innerHeight||a.clientHeight)|0;return{left:0,top:0,height:a,
width:b,bottom:a,right:b}},setViewportOffset:function(a,c){var e=f.getFixedLayer();a.parentNode===e?(a.style.left=c.left+"px",a.style.top=c.top+"px"):b.setViewportOffset(a,c)},getEventOffset:function(a){var b=f.getClientRect(a.target||a.srcElement);a=f.getViewportOffsetByEvent(a);return{left:a.left-b.left,top:a.top-b.top}},getViewportOffsetByEvent:function(a){var c=a.target||a.srcElement,e=b.getWindow(c).frameElement;a={left:a.clientX,top:a.clientY};e&&c.ownerDocument!==document&&(c=f.getClientRect(e),
a.left+=c.left,a.top+=c.top);return a},setGlobal:function(b,c){a[b]=c;return'$EDITORUI["'+b+'"]'},unsetGlobal:function(b){delete a[b]},copyAttributes:function(a,e){for(var d=e.attributes,f=d.length;f--;){var h=d[f];"style"==h.nodeName||"class"==h.nodeName||c.ie&&!h.specified||a.setAttribute(h.nodeName,h.nodeValue)}e.className&&b.addClass(a,e.className);e.style.cssText&&(a.style.cssText+=";"+e.style.cssText)},removeStyle:function(a,b){if(a.style.removeProperty)a.style.removeProperty(b);else if(a.style.removeAttribute)a.style.removeAttribute(b);
else throw"";},contains:function(a,b){return a&&b&&(a===b?!1:a.contains?a.contains(b):a.compareDocumentPosition(b)&16)},startDrag:function(a,b,c){function e(a){b.ondragmove(a.clientX-d,a.clientY-f,a);a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}c=c||document;var d=a.clientX,f=a.clientY;if(c.addEventListener){var h=function(a){c.removeEventListener("mousemove",e,!0);c.removeEventListener("mouseup",h,!0);window.removeEventListener("mouseup",h,!0);b.ondragstop()};c.addEventListener("mousemove",
e,!0);c.addEventListener("mouseup",h,!0);window.addEventListener("mouseup",h,!0);a.preventDefault()}else{var p=a.srcElement;p.setCapture();var r=function(){p.releaseCapture();p.detachEvent("onmousemove",e);p.detachEvent("onmouseup",r);p.detachEvent("onlosecaptrue",r);b.ondragstop()};p.attachEvent("onmousemove",e);p.attachEvent("onmouseup",r);p.attachEvent("onlosecaptrue",r);a.returnValue=!1}b.ondragstart()},getFixedLayer:function(){var a=document.getElementById("edui_fixedlayer");null==a&&(a=document.createElement("div"),
a.id="edui_fixedlayer",document.body.appendChild(a),c.ie&&8>=c.version?(a.style.position="absolute",b.on(window,"scroll",d),b.on(window,"resize",s.editor.utils.defer(d,0,!0)),setTimeout(d)):a.style.position="fixed",a.style.left="0",a.style.top="0",a.style.width="0",a.style.height="0");return a},makeUnselectable:function(a){if(c.opera||c.ie&&9>c.version){if(a.unselectable="on",a.hasChildNodes())for(var b=0;b<a.childNodes.length;b++)1==a.childNodes[b].nodeType&&f.makeUnselectable(a.childNodes[b])}else void 0!==
a.style.MozUserSelect?a.style.MozUserSelect="none":void 0!==a.style.WebkitUserSelect?a.style.WebkitUserSelect="none":void 0!==a.style.KhtmlUserSelect&&(a.style.KhtmlUserSelect="none")}}})();(function(){var d=s.editor.utils,c=s.editor.ui.uiUtils,b=s.editor.EventBase,a=s.editor.ui.UIBase=function(){};a.prototype={className:"",uiName:"",initOptions:function(a){for(var b in a)this[b]=a[b];this.id=this.id||"edui"+c.uid()},initUIBase:function(){this._globalKey=d.unhtml(c.setGlobal(this.id,this))},render:function(a){for(var b=
this.renderHtml(),b=c.createElementByHtml(b),d=f.getElementsByTagName(b,"*"),l="edui-"+(this.theme||this.editor.options.theme),k=document.getElementById("edui_fixedlayer"),m=0,n;n=d[m++];)f.addClass(n,l);f.addClass(b,l);k&&(k.className="",f.addClass(k,l));d=this.getDom();null!=d?(d.parentNode.replaceChild(b,d),c.copyAttributes(b,d)):("string"==typeof a&&(a=document.getElementById(a)),a=a||c.getFixedLayer(),f.addClass(a,l),a.appendChild(b));this.postRender()},getDom:function(a){return a?document.getElementById(this.id+
"_"+a):document.getElementById(this.id)},postRender:function(){this.fireEvent("postrender")},getHtmlTpl:function(){return""},formatHtml:function(a){var b="edui-"+this.uiName;return a.replace(/##/g,this.id).replace(/%%-/g,this.uiName?b+"-":"").replace(/%%/g,(this.uiName?b:"")+" "+this.className).replace(/\$\$/g,this._globalKey)},renderHtml:function(){return this.formatHtml(this.getHtmlTpl())},dispose:function(){var a=this.getDom();a&&s.editor.dom.domUtils.remove(a);c.unsetGlobal(this.id)}};d.inherits(a,
b)})();(function(){var d=s.editor.utils,c=s.editor.ui.UIBase,b=s.editor.ui.Separator=function(a){this.initOptions(a);this.initSeparator()};b.prototype={uiName:"separator",initSeparator:function(){this.initUIBase()},getHtmlTpl:function(){return'<div id="##" class="edui-box %%"></div>'}};d.inherits(b,c)})();(function(){var d=s.editor.utils,c=s.editor.dom.domUtils,b=s.editor.ui.UIBase,a=s.editor.ui.uiUtils,e=s.editor.ui.Mask=function(a){this.initOptions(a);this.initUIBase()};e.prototype={getHtmlTpl:function(){return'<div id="##" class="edui-mask %%" onclick="return $$._onClick(event, this);" onmousedown="return $$._onMouseDown(event, this);"></div>'},
postRender:function(){var a=this;c.on(window,"resize",function(){setTimeout(function(){a.isHidden()||a._fill()})})},show:function(a){this._fill();this.getDom().style.display="";this.getDom().style.zIndex=a},hide:function(){this.getDom().style.display="none";this.getDom().style.zIndex=""},isHidden:function(){return"none"==this.getDom().style.display},_onMouseDown:function(){return!1},_onClick:function(a,b){this.fireEvent("click",a,b)},_fill:function(){var b=this.getDom(),c=a.getViewportRect();b.style.width=
c.width+"px";b.style.height=c.height+"px"}};d.inherits(e,b)})();(function(){function d(a,b){for(var c=0;c<g.length;c++){var e=g[c];if(!e.isHidden()&&!1!==e.queryAutoHide(b)){if(a&&/scroll/ig.test(a.type)&&"edui-wordpastepop"==e.className)return;e.hide()}}g.length&&e.editor.fireEvent("afterhidepop")}var c=s.editor.utils,b=s.editor.ui.uiUtils,a=s.editor.dom.domUtils,e=s.editor.ui.UIBase,f=s.editor.ui.Popup=function(a){this.initOptions(a);this.initPopup()},g=[];f.postHide=d;var l=["edui-anchor-topleft",
"edui-anchor-topright","edui-anchor-bottomleft","edui-anchor-bottomright"];f.prototype={SHADOW_RADIUS:5,content:null,_hidden:!1,autoRender:!0,canSideLeft:!0,canSideUp:!0,initPopup:function(){this.initUIBase();g.push(this)},getHtmlTpl:function(){return'<div id="##" class="edui-popup %%" onmousedown="return false;"> <div id="##_body" class="edui-popup-body"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="about:blank"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="edui-popup-content">'+
this.getContentHtmlTpl()+"  </div> </div></div>"},getContentHtmlTpl:function(){return this.content?"string"==typeof this.content?this.content:this.content.renderHtml():""},_UIBase_postRender:e.prototype.postRender,postRender:function(){this.content instanceof e&&this.content.postRender();if(this.captureWheel&&!this.captured){this.captured=!0;var c=(document.documentElement.clientHeight||document.body.clientHeight)-80,d=this.getDom().offsetHeight,f=b.getClientRect(this.combox.getDom()).top,g=this.getDom("content"),
h=this.getDom("body").getElementsByTagName("iframe"),l=this;for(h.length&&(h=h[0]);f+d>c;)d-=30;g.style.height=d+"px";h&&(h.style.height=d+"px");if(window.XMLHttpRequest)a.on(g,"onmousewheel"in document.body?"mousewheel":"DOMMouseScroll",function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;g.scrollTop=a.wheelDelta?g.scrollTop-a.wheelDelta/120*60:g.scrollTop-a.detail/-3*60});else a.on(this.getDom(),"mousewheel",function(a){a.returnValue=!1;l.getDom("content").scrollTop-=a.wheelDelta/120*
60})}this.fireEvent("postRenderAfter");this.hide(!0);this._UIBase_postRender()},_doAutoRender:function(){!this.getDom()&&this.autoRender&&this.render()},mesureSize:function(){var a=this.getDom("content");return b.getClientRect(a)},fitSize:function(){if(this.captureWheel&&this.sized)return this.__size;this.sized=!0;var a=this.getDom("body");a.style.width="";a.style.height="";var b=this.mesureSize();if(this.captureWheel){a.style.width=-(-20-b.width)+"px";var c=parseInt(this.getDom("content").style.height,
10);!window.isNaN(c)&&(b.height=c)}else a.style.width=b.width+"px";a.style.height=b.height+"px";this.__size=b;this.captureWheel&&(this.getDom("content").style.overflow="auto");return b},showAnchor:function(a,c){this.showAnchorRect(b.getClientRect(a),c)},showAnchorRect:function(c,e,d){this._doAutoRender();var f=b.getViewportRect();this.getDom().style.visibility="hidden";this._show();d=this.fitSize();var g;e?(e=this.canSideLeft&&c.right+d.width>f.right&&c.left>d.width,f=this.canSideUp&&c.top+d.height>
f.bottom&&c.bottom>d.height,g=e?c.left-d.width:c.right,c=f?c.bottom-d.height:c.top):(e=this.canSideLeft&&c.right+d.width>f.right&&c.left>d.width,f=this.canSideUp&&c.top+d.height>f.bottom&&c.bottom>d.height,g=e?c.right-d.width:c.left,c=f?c.top-d.height:c.bottom);d=this.getDom();b.setViewportOffset(d,{left:g,top:c});a.removeClasses(d,l);d.className+=" "+l[2*(f?1:0)+(e?1:0)];this.editor&&(d.style.zIndex=1*this.editor.container.style.zIndex+10,s.editor.ui.uiUtils.getFixedLayer().style.zIndex=d.style.zIndex-
1);this.getDom().style.visibility="visible"},showAt:function(a){var b=a.left;a=a.top;this.showAnchorRect({left:b,top:a,right:b,bottom:a,height:0,width:0},!1,!0)},_show:function(){this._hidden&&(this.getDom().style.display="",this._hidden=!1,this.fireEvent("show"))},isHidden:function(){return this._hidden},show:function(){this._doAutoRender();this._show()},hide:function(a){!this._hidden&&this.getDom()&&(this.getDom().style.display="none",this._hidden=!0,a||this.fireEvent("hide"))},queryAutoHide:function(a){return!a||
!b.contains(this.getDom(),a)}};c.inherits(f,e);a.on(document,"mousedown",function(a){d(a,a.target||a.srcElement)});a.on(window,"scroll",function(a,b){d(a,b)})})();(function(){var d=s.editor.utils,c=s.editor.ui.UIBase,b=s.editor.ui.ColorPicker=function(a){this.initOptions(a);this.noColorText=this.noColorText||this.editor.getLang("clearColor");this.initUIBase()};b.prototype={getHtmlTpl:function(){for(var b=this.editor,c='<div id="##" class="edui-colorpicker %%"><div class="edui-colorpicker-topbar edui-clearfix"><div unselectable="on" id="##_preview" class="edui-colorpicker-preview"></div><div unselectable="on" class="edui-colorpicker-nocolor" onclick="$$._onPickNoColor(event, this);">'+
this.noColorText+'</div></div><table  class="edui-box" style="border-collapse: collapse;" onmouseover="$$._onTableOver(event, this);" onmouseout="$$._onTableOut(event, this);" onclick="return $$._onTableClick(event, this);" cellspacing="0" cellpadding="0"><tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;padding-top: 2px"><td colspan="10">'+b.getLang("themeColor")+'</td> </tr><tr class="edui-colorpicker-tablefirstrow" >',d=0;d<a.length;d++)d&&0===d%10&&(c+="</tr>"+
(60==d?'<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;"><td colspan="10">'+b.getLang("standardColor")+"</td></tr>":"")+"<tr"+(60==d?' class="edui-colorpicker-tablefirstrow"':"")+">"),c+=70>d?'<td style="padding: 0 2px;"><a hidefocus title="'+a[d]+'" onclick="return false;" href="javascript:" unselectable="on" class="edui-box edui-colorpicker-colorcell" data-color="#'+a[d]+'" style="background-color:#'+a[d]+";border:solid #ccc;"+(10>d||60<=d?"border-width:1px;":
10<=d&&20>d?"border-width:1px 1px 0 1px;":"border-width:0 1px 0 1px;")+'"></a></td>':"";return c+"</tr></table></div>"},_onTableClick:function(a){(a=(a.target||a.srcElement).getAttribute("data-color"))&&this.fireEvent("pickcolor",a)},_onTableOver:function(a){if(a=(a.target||a.srcElement).getAttribute("data-color"))this.getDom("preview").style.backgroundColor=a},_onTableOut:function(){this.getDom("preview").style.backgroundColor=""},_onPickNoColor:function(){this.fireEvent("picknocolor")}};d.inherits(b,
c);var a="ffffff 000000 eeece1 1f497d 4f81bd c0504d 9bbb59 8064a2 4bacc6 f79646 f2f2f2 7f7f7f ddd9c3 c6d9f0 dbe5f1 f2dcdb ebf1dd e5e0ec dbeef3 fdeada d8d8d8 595959 c4bd97 8db3e2 b8cce4 e5b9b7 d7e3bc ccc1d9 b7dde8 fbd5b5 bfbfbf 3f3f3f 938953 548dd4 95b3d7 d99694 c3d69b b2a2c7 92cddc fac08f a5a5a5 262626 494429 17365d 366092 953734 76923c 5f497a 31859b e36c09 7f7f7f 0c0c0c 1d1b10 0f243e 244061 632423 4f6128 3f3151 205867 974806 c00000 ff0000 ffc000 ffff00 92d050 00b050 00b0f0 0070c0 002060 7030a0 ".split(" ")})();
(function(){var d=s.editor.utils,c=s.editor.ui.uiUtils,b=s.editor.ui.UIBase,a=s.editor.ui.TablePicker=function(a){this.initOptions(a);this.initTablePicker()};a.prototype={defaultNumRows:10,defaultNumCols:10,maxNumRows:20,maxNumCols:20,numRows:10,numCols:10,lengthOfCellSide:22,initTablePicker:function(){this.initUIBase()},getHtmlTpl:function(){return'<div id="##" class="edui-tablepicker %%"><div class="edui-tablepicker-body"><div class="edui-infoarea"><span id="##_label" class="edui-label"></span></div><div class="edui-pickarea" onmousemove="$$._onMouseMove(event, this);" onmouseover="$$._onMouseOver(event, this);" onmouseout="$$._onMouseOut(event, this);" onclick="$$._onClick(event, this);"><div id="##_overlay" class="edui-overlay"></div></div></div></div>'},
_UIBase_render:b.prototype.render,render:function(a){this._UIBase_render(a);this.getDom("label").innerHTML="0"+this.editor.getLang("t_row")+" x 0"+this.editor.getLang("t_col")},_track:function(a,b){var c=this.getDom("overlay").style,d=this.lengthOfCellSide;c.width=a*d+"px";c.height=b*d+"px";this.getDom("label").innerHTML=a+this.editor.getLang("t_col")+" x "+b+this.editor.getLang("t_row");this.numCols=a;this.numRows=b},_onMouseOver:function(a,b){var d=a.relatedTarget||a.fromElement;c.contains(b,d)||
b===d||(this.getDom("label").innerHTML="0"+this.editor.getLang("t_col")+" x 0"+this.editor.getLang("t_row"),this.getDom("overlay").style.visibility="")},_onMouseOut:function(a,b){var d=a.relatedTarget||a.toElement;c.contains(b,d)||b===d||(this.getDom("label").innerHTML="0"+this.editor.getLang("t_col")+" x 0"+this.editor.getLang("t_row"),this.getDom("overlay").style.visibility="hidden")},_onMouseMove:function(a,b){this.getDom("overlay");var d=c.getEventOffset(a),f=this.lengthOfCellSide,k=Math.ceil(d.left/
f),d=Math.ceil(d.top/f);this._track(k,d)},_onClick:function(){this.fireEvent("picktable",this.numCols,this.numRows)}};d.inherits(a,b)})();(function(){var d=s.editor.dom.domUtils,c=s.editor.ui.uiUtils,b='onmousedown="$$.Stateful_onMouseDown(event, this);" onmouseup="$$.Stateful_onMouseUp(event, this);"'+(s.editor.browser.ie?' onmouseenter="$$.Stateful_onMouseEnter(event, this);" onmouseleave="$$.Stateful_onMouseLeave(event, this);"':' onmouseover="$$.Stateful_onMouseOver(event, this);" onmouseout="$$.Stateful_onMouseOut(event, this);"');
s.editor.ui.Stateful={alwalysHoverable:!1,target:null,Stateful_init:function(){this._Stateful_dGetHtmlTpl=this.getHtmlTpl;this.getHtmlTpl=this.Stateful_getHtmlTpl},Stateful_getHtmlTpl:function(){return this._Stateful_dGetHtmlTpl().replace(/stateful/g,function(){return b})},Stateful_onMouseEnter:function(a,b){this.target=b;if(!this.isDisabled()||this.alwalysHoverable)this.addState("hover"),this.fireEvent("over")},Stateful_onMouseLeave:function(a,b){if(!this.isDisabled()||this.alwalysHoverable)this.removeState("hover"),
this.removeState("active"),this.fireEvent("out")},Stateful_onMouseOver:function(a,b){var d=a.relatedTarget;c.contains(b,d)||b===d||this.Stateful_onMouseEnter(a,b)},Stateful_onMouseOut:function(a,b){var d=a.relatedTarget;c.contains(b,d)||b===d||this.Stateful_onMouseLeave(a,b)},Stateful_onMouseDown:function(a,b){this.isDisabled()||this.addState("active")},Stateful_onMouseUp:function(a,b){this.isDisabled()||this.removeState("active")},Stateful_postRender:function(){this.disabled&&!this.hasState("disabled")&&
this.addState("disabled")},hasState:function(a){return d.hasClass(this.getStateDom(),"edui-state-"+a)},addState:function(a){this.hasState(a)||(this.getStateDom().className+=" edui-state-"+a)},removeState:function(a){this.hasState(a)&&d.removeClasses(this.getStateDom(),["edui-state-"+a])},getStateDom:function(){return this.getDom("state")},isChecked:function(){return this.hasState("checked")},setChecked:function(a){!this.isDisabled()&&a?this.addState("checked"):this.removeState("checked")},isDisabled:function(){return this.hasState("disabled")},
setDisabled:function(a){a?(this.removeState("hover"),this.removeState("checked"),this.removeState("active"),this.addState("disabled")):this.removeState("disabled")}}})();(function(){var d=s.editor.utils,c=s.editor.ui.UIBase,b=s.editor.ui.Stateful,a=s.editor.ui.Button=function(a){if(a.name){var b=a.name,c=a.cssRules;a.className||(a.className="edui-for-"+b);a.cssRules=".edui-default  .edui-for-"+b+" .edui-icon {"+c+"}"}this.initOptions(a);this.initButton()};a.prototype={uiName:"button",label:"",title:"",
showIcon:!0,showText:!0,cssRules:"",initButton:function(){this.initUIBase();this.Stateful_init();this.cssRules&&d.cssRule("edui-customize-"+this.name+"-style",this.cssRules)},getHtmlTpl:function(){return'<div id="##" class="edui-box %%"><div id="##_state" stateful><div class="%%-wrap"><div id="##_body" unselectable="on" '+(this.title?'title="'+this.title+'"':"")+' class="%%-body" onmousedown="return $$._onMouseDown(event, this);" onclick="return $$._onClick(event, this);">'+(this.showIcon?'<div class="edui-box edui-icon"></div>':
"")+(this.showText?'<div class="edui-box edui-label">'+this.label+"</div>":"")+"</div></div></div></div>"},postRender:function(){this.Stateful_postRender();this.setDisabled(this.disabled)},_onMouseDown:function(a){a=(a=a.target||a.srcElement)&&a.tagName&&a.tagName.toLowerCase();if("input"==a||"object"==a||"object"==a)return!1},_onClick:function(){this.isDisabled()||this.fireEvent("click")},setTitle:function(a){this.getDom("label").innerHTML=a}};d.inherits(a,c);d.extend(a.prototype,b)})();(function(){var d=
s.editor.utils,c=s.editor.ui.uiUtils,b=s.editor.ui.UIBase,a=s.editor.ui.Stateful,e=s.editor.ui.SplitButton=function(a){this.initOptions(a);this.initSplitButton()};e.prototype={popup:null,uiName:"splitbutton",title:"",initSplitButton:function(){this.initUIBase();this.Stateful_init();if(null!=this.popup){var a=this.popup;this.popup=null;this.setPopup(a)}},_UIBase_postRender:b.prototype.postRender,postRender:function(){this.Stateful_postRender();this._UIBase_postRender()},setPopup:function(a){this.popup!==
a&&(null!=this.popup&&this.popup.dispose(),a.addListener("show",d.bind(this._onPopupShow,this)),a.addListener("hide",d.bind(this._onPopupHide,this)),a.addListener("postrender",d.bind(function(){a.getDom("body").appendChild(c.createElementByHtml('<div id="'+this.popup.id+'_bordereraser" class="edui-bordereraser edui-background" style="width:'+(c.getClientRect(this.getDom()).width+20)+'px"></div>'));a.getDom().className+=" "+this.className},this)),this.popup=a)},_onPopupShow:function(){this.addState("opened")},
_onPopupHide:function(){this.removeState("opened")},getHtmlTpl:function(){return'<div id="##" class="edui-box %%"><div '+(this.title?'title="'+this.title+'"':"")+' id="##_state" stateful><div class="%%-body"><div id="##_button_body" class="edui-box edui-button-body" onclick="$$._onButtonClick(event, this);"><div class="edui-box edui-icon"></div></div><div class="edui-box edui-splitborder"></div><div class="edui-box edui-arrow" onclick="$$._onArrowClick();"></div></div></div></div>'},showPopup:function(){var a=
c.getClientRect(this.getDom());a.top-=this.popup.SHADOW_RADIUS;a.height+=this.popup.SHADOW_RADIUS;this.popup.showAnchorRect(a)},_onArrowClick:function(a,b){this.isDisabled()||this.showPopup()},_onButtonClick:function(){this.isDisabled()||this.fireEvent("buttonclick")}};d.inherits(e,b);d.extend(e.prototype,a,!0)})();(function(){var d=s.editor.utils,c=s.editor.ui.uiUtils,b=s.editor.ui.ColorPicker,a=s.editor.ui.Popup,e=s.editor.ui.SplitButton,f=s.editor.ui.ColorButton=function(a){this.initOptions(a);
this.initColorButton()};f.prototype={initColorButton:function(){var c=this;this.popup=new a({content:new b({noColorText:c.editor.getLang("clearColor"),editor:c.editor,onpickcolor:function(a,b){c._onPickColor(b)},onpicknocolor:function(a,b){c._onPickNoColor(b)}}),editor:c.editor});this.initSplitButton()},_SplitButton_postRender:e.prototype.postRender,postRender:function(){this._SplitButton_postRender();this.getDom("button_body").appendChild(c.createElementByHtml('<div id="'+this.id+'_colorlump" class="edui-colorlump"></div>'));
this.getDom().className+=" edui-colorbutton"},setColor:function(a){this.color=this.getDom("colorlump").style.backgroundColor=a},_onPickColor:function(a){!1!==this.fireEvent("pickcolor",a)&&(this.setColor(a),this.popup.hide())},_onPickNoColor:function(a){!1!==this.fireEvent("picknocolor")&&this.popup.hide()}};d.inherits(f,e)})();(function(){var d=s.editor.utils,c=s.editor.ui.Popup,b=s.editor.ui.TablePicker,a=s.editor.ui.SplitButton,e=s.editor.ui.TableButton=function(a){this.initOptions(a);this.initTableButton()};
e.prototype={initTableButton:function(){var a=this;this.popup=new c({content:new b({editor:a.editor,onpicktable:function(b,c,d){a._onPickTable(c,d)}}),editor:a.editor});this.initSplitButton()},_onPickTable:function(a,b){!1!==this.fireEvent("picktable",a,b)&&this.popup.hide()}};d.inherits(e,a)})();(function(){var d=s.editor.utils,c=s.editor.ui.UIBase,b=s.editor.ui.AutoTypeSetPicker=function(a){this.initOptions(a);this.initAutoTypeSetPicker()};b.prototype={initAutoTypeSetPicker:function(){this.initUIBase()},
getHtmlTpl:function(){var a=this.editor,b=a.options.autotypeset,c=a.getLang("autoTypeSet"),d="textAlignValue"+a.uid,f="imageBlockLineValue"+a.uid,k="symbolConverValue"+a.uid;return'<div id="##" class="edui-autotypesetpicker %%"><div class="edui-autotypesetpicker-body"><table ><tr><td nowrap><input type="checkbox" name="mergeEmptyline" '+(b.mergeEmptyline?"checked":"")+">"+c.mergeLine+'</td><td colspan="2"><input type="checkbox" name="removeEmptyline" '+(b.removeEmptyline?"checked":"")+">"+c.delLine+
'</td></tr><tr><td nowrap><input type="checkbox" name="removeClass" '+(b.removeClass?"checked":"")+">"+c.removeFormat+'</td><td colspan="2"><input type="checkbox" name="indent" '+(b.indent?"checked":"")+">"+c.indent+'</td></tr><tr><td nowrap><input type="checkbox" name="textAlign" '+(b.textAlign?"checked":"")+">"+c.alignment+'</td><td colspan="2" id="'+d+'"><input type="radio" name="'+d+'" value="left" '+(b.textAlign&&"left"==b.textAlign?"checked":"")+">"+a.getLang("justifyleft")+'<input type="radio" name="'+
d+'" value="center" '+(b.textAlign&&"center"==b.textAlign?"checked":"")+">"+a.getLang("justifycenter")+'<input type="radio" name="'+d+'" value="right" '+(b.textAlign&&"right"==b.textAlign?"checked":"")+">"+a.getLang("justifyright")+'</td></tr><tr><td nowrap><input type="checkbox" name="imageBlockLine" '+(b.imageBlockLine?"checked":"")+">"+c.imageFloat+'</td><td nowrap id="'+f+'"><input type="radio" name="'+f+'" value="none" '+(b.imageBlockLine&&"none"==b.imageBlockLine?"checked":"")+">"+a.getLang("default")+
'<input type="radio" name="'+f+'" value="left" '+(b.imageBlockLine&&"left"==b.imageBlockLine?"checked":"")+">"+a.getLang("justifyleft")+'<input type="radio" name="'+f+'" value="center" '+(b.imageBlockLine&&"center"==b.imageBlockLine?"checked":"")+">"+a.getLang("justifycenter")+'<input type="radio" name="'+f+'" value="right" '+(b.imageBlockLine&&"right"==b.imageBlockLine?"checked":"")+">"+a.getLang("justifyright")+'</td></tr><tr><td nowrap><input type="checkbox" name="clearFontSize" '+(b.clearFontSize?
"checked":"")+">"+c.removeFontsize+'</td><td colspan="2"><input type="checkbox" name="clearFontFamily" '+(b.clearFontFamily?"checked":"")+">"+c.removeFontFamily+'</td></tr><tr><td nowrap colspan="3"><input type="checkbox" name="removeEmptyNode" '+(b.removeEmptyNode?"checked":"")+">"+c.removeHtml+'</td></tr><tr><td nowrap colspan="3"><input type="checkbox" name="pasteFilter" '+(b.pasteFilter?"checked":"")+">"+c.pasteFilter+'</td></tr><tr><td nowrap><input type="checkbox" name="symbolConver" '+(b.bdc2sb||
b.tobdc?"checked":"")+">"+c.symbol+'</td><td id="'+k+'"><input type="radio" name="bdc" value="bdc2sb" '+(b.bdc2sb?"checked":"")+">"+c.bdc2sb+'<input type="radio" name="bdc" value="tobdc" '+(b.tobdc?"checked":"")+">"+c.tobdc+'</td><td nowrap align="right"><button >'+c.run+"</button></td></tr></table></div></div>"},_UIBase_render:c.prototype.render};d.inherits(b,c)})();(function(){function d(a){for(var b={},d=a.getDom(),e=a.editor.uid,h=null,h=null,q=f.getElementsByTagName(d,"input"),t=q.length-1,p;p=
q[t--];)if(h=p.getAttribute("type"),"checkbox"==h)if(h=p.getAttribute("name"),b[h]&&delete b[h],p.checked)if(p=document.getElementById(h+"Value"+e))if(/input/ig.test(p.tagName))b[h]=p.value;else{p=p.getElementsByTagName("input");for(var r=p.length-1,u;u=p[r--];)if(u.checked){b[h]=u.value;break}}else b[h]=!0;else b[h]=!1;else b[p.getAttribute("value")]=p.checked;d=f.getElementsByTagName(d,"select");for(t=0;e=d[t++];)q=e.getAttribute("name"),b[q]=b[q]?e.value:"";c.extend(a.editor.options.autotypeset,
b);a.editor.setPreferences("autotypeset",b)}var c=s.editor.utils,b=s.editor.ui.Popup,a=s.editor.ui.AutoTypeSetPicker,e=s.editor.ui.SplitButton,h=s.editor.ui.AutoTypeSetButton=function(a){this.initOptions(a);this.initAutoTypeSetButton()};h.prototype={initAutoTypeSetButton:function(){var c=this;this.popup=new b({content:new a({editor:c.editor}),editor:c.editor,hide:function(){!this._hidden&&this.getDom()&&(d(this),this.getDom().style.display="none",this._hidden=!0,this.fireEvent("hide"))}});var e=0;
this.popup.addListener("postRenderAfter",function(){var a=this;if(!e){var b=this.getDom();b.getElementsByTagName("button")[0].onclick=function(){d(a);c.editor.execCommand("autotypeset");a.hide()};f.on(b,"click",function(b){b=b.target||b.srcElement;var e=c.editor.uid;if(b&&"INPUT"==b.tagName){if("imageBlockLine"==b.name||"textAlign"==b.name||"symbolConver"==b.name)for(var f=b.checked,h=document.getElementById(b.name+"Value"+e).getElementsByTagName("input"),l={imageBlockLine:"none",textAlign:"left",
symbolConver:"tobdc"},m=0;m<h.length;m++)f?h[m].value==l[b.name]&&(h[m].checked="checked"):h[m].checked=!1;(b.name=="imageBlockLineValue"+e||b.name=="textAlignValue"+e||"bdc"==b.name)&&(b=b.parentNode.previousSibling.getElementsByTagName("input"))&&(b[0].checked=!0);d(a)}});e=1}});this.initSplitButton()}};c.inherits(h,e)})();(function(){var d=s.editor.utils,c=s.editor.ui.Popup,b=s.editor.ui.Stateful,a=s.editor.ui.UIBase,e=s.editor.ui.CellAlignPicker=function(a){this.initOptions(a);this.initSelected();
this.initCellAlignPicker()};e.prototype={initSelected:function(){var a={top:0,middle:1,bottom:2},b={left:0,center:1,right:2};this.selected&&(this.selectedIndex=3*a[this.selected.valign]+b[this.selected.align])},initCellAlignPicker:function(){this.initUIBase();this.Stateful_init()},getHtmlTpl:function(){for(var a=["left","center","right"],b=null,c=-1,d=[],e=0;9>e;e++)b=this.selectedIndex===e?' class="edui-cellalign-selected" ':"",c=e%3,0===c&&d.push("<tr>"),d.push('<td index="'+e+'" '+b+' stateful><div class="edui-icon edui-'+
a[c]+'"></div></td>'),2===c&&d.push("</tr>");return'<div id="##" class="edui-cellalignpicker %%"><div class="edui-cellalignpicker-body"><table onclick="$$._onClick(event);">'+d.join("")+"</table></div></div>"},getStateDom:function(){return this.target},_onClick:function(a){var b=a.target||a.srcElement;/icon/.test(b.className)&&(this.items[b.parentNode.getAttribute("index")].onclick(),c.postHide(a))},_UIBase_render:a.prototype.render};d.inherits(e,a);d.extend(e.prototype,b,!0)})();(function(){var d=
s.editor.utils,c=s.editor.ui.Stateful,b=s.editor.ui.uiUtils,a=s.editor.ui.UIBase,e=s.editor.ui.PastePicker=function(a){this.initOptions(a);this.initPastePicker()};e.prototype={initPastePicker:function(){this.initUIBase();this.Stateful_init()},getHtmlTpl:function(){return'<div class="edui-pasteicon" onclick="$$._onClick(this)"></div><div class="edui-pastecontainer"><div class="edui-title">'+this.editor.getLang("pasteOpt")+'</div><div class="edui-button"><div title="'+this.editor.getLang("pasteSourceFormat")+
'" onclick="$$.format(false)" stateful><div class="edui-richtxticon"></div></div><div title="'+this.editor.getLang("tagFormat")+'" onclick="$$.format(2)" stateful><div class="edui-tagicon"></div></div><div title="'+this.editor.getLang("pasteTextFormat")+'" onclick="$$.format(true)" stateful><div class="edui-plaintxticon"></div></div></div></div></div>'},getStateDom:function(){return this.target},format:function(a){this.editor.ui._isTransfer=!0;this.editor.fireEvent("pasteTransfer",a)},_onClick:function(a){var c=
f.getNextDomNode(a),d=b.getViewportRect().height,e=b.getClientRect(c);c.style.top=e.top+e.height>d?-e.height-a.offsetHeight+"px":"";/hidden/ig.test(f.getComputedStyle(c,"visibility"))?(c.style.visibility="visible",f.addClass(a,"edui-state-opened")):(c.style.visibility="hidden",f.removeClasses(a,"edui-state-opened"))},_UIBase_render:a.prototype.render};d.inherits(e,a);d.extend(e.prototype,c,!0)})();(function(){var d=s.editor.utils,c=s.editor.ui.uiUtils,b=s.editor.ui.UIBase,a=s.editor.ui.Toolbar=function(a){this.initOptions(a);
this.initToolbar()};a.prototype={items:null,initToolbar:function(){this.items=this.items||[];this.initUIBase()},add:function(a,b){void 0===b?this.items.push(a):this.items.splice(b,0,a)},getHtmlTpl:function(){for(var a=[],b=0;b<this.items.length;b++)a[b]=this.items[b].renderHtml();return'<div id="##" class="edui-toolbar %%" onselectstart="return false;" onmousedown="return $$._onMouseDown(event, this);">'+a.join("")+"</div>"},postRender:function(){for(var a=this.getDom(),b=0;b<this.items.length;b++)this.items[b].postRender();
c.makeUnselectable(a)},_onMouseDown:function(a){a=(a=a.target||a.srcElement)&&a.tagName&&a.tagName.toLowerCase();if("input"==a||"object"==a||"object"==a)return!1}};d.inherits(a,b)})();(function(){var d=s.editor.utils,c=s.editor.dom.domUtils,b=s.editor.ui.uiUtils,a=s.editor.ui.UIBase,e=s.editor.ui.Popup,f=s.editor.ui.Stateful,g=s.editor.ui.CellAlignPicker,l=s.editor.ui.Menu=function(a){this.initOptions(a);this.initMenu()},k={renderHtml:function(){return'<div class="edui-menuitem edui-menuseparator"><div class="edui-menuseparator-inner"></div></div>'},
postRender:function(){},queryAutoHide:function(){return!0}};l.prototype={items:null,uiName:"menu",initMenu:function(){this.items=this.items||[];this.initPopup();this.initItems()},initItems:function(){for(var a=0;a<this.items.length;a++){var b=this.items[a];"-"==b?this.items[a]=this.getSeparator():b instanceof m||(b.editor=this.editor,b.theme=this.editor.options.theme,this.items[a]=this.createItem(b))}},getSeparator:function(){return k},createItem:function(a){a.menu=this;return new m(a)},_Popup_getContentHtmlTpl:e.prototype.getContentHtmlTpl,
getContentHtmlTpl:function(){if(0==this.items.length)return this._Popup_getContentHtmlTpl();for(var a=[],b=0;b<this.items.length;b++)a[b]=this.items[b].renderHtml();return'<div class="%%-body">'+a.join("")+"</div>"},_Popup_postRender:e.prototype.postRender,postRender:function(){for(var a=this,d=0;d<this.items.length;d++){var e=this.items[d];e.ownerMenu=this;e.postRender()}c.on(this.getDom(),"mouseover",function(c){c=c||event;c=c.relatedTarget||c.fromElement;var d=a.getDom();b.contains(d,c)||d===c||
a.fireEvent("over")});this._Popup_postRender()},queryAutoHide:function(a){if(a){if(b.contains(this.getDom(),a))return!1;for(var c=0;c<this.items.length;c++)if(!1===this.items[c].queryAutoHide(a))return!1}},clearItems:function(){for(var a=0;a<this.items.length;a++){var b=this.items[a];clearTimeout(b._showingTimer);clearTimeout(b._closingTimer);b.subMenu&&b.subMenu.destroy()}this.items=[]},destroy:function(){this.getDom()&&c.remove(this.getDom());this.clearItems()},dispose:function(){this.destroy()}};
d.inherits(l,e);var m=s.editor.ui.MenuItem=function(a){this.initOptions(a);this.initUIBase();this.Stateful_init();if(this.subMenu&&!(this.subMenu instanceof l))if(a.className&&-1!=a.className.indexOf("aligntd")){var b=this;this.subMenu.selected=this.editor.queryCommandValue("cellalignment");this.subMenu=new e({content:new g(this.subMenu),parentMenu:b,editor:b.editor,destroy:function(){this.getDom()&&c.remove(this.getDom())}});this.subMenu.addListener("postRenderAfter",function(){c.on(this.getDom(),
"mouseover",function(){b.addState("opened")})})}else this.subMenu=new l(this.subMenu)};m.prototype={label:"",subMenu:null,ownerMenu:null,uiName:"menuitem",alwalysHoverable:!0,getHtmlTpl:function(){return'<div id="##" class="%%" stateful onclick="$$._onClick(event, this);"><div class="%%-body">'+this.renderLabelHtml()+"</div></div>"},postRender:function(){var a=this;this.addListener("over",function(){a.ownerMenu.fireEvent("submenuover",a);a.subMenu&&a.delayShowSubMenu()});this.subMenu&&(this.getDom().className+=
" edui-hassubmenu",this.subMenu.render(),this.addListener("out",function(){a.delayHideSubMenu()}),this.subMenu.addListener("over",function(){clearTimeout(a._closingTimer);a._closingTimer=null;a.addState("opened")}),this.ownerMenu.addListener("hide",function(){a.hideSubMenu()}),this.ownerMenu.addListener("submenuover",function(b,c){c!==a&&a.delayHideSubMenu()}),this.subMenu._bakQueryAutoHide=this.subMenu.queryAutoHide,this.subMenu.queryAutoHide=function(c){return c&&b.contains(a.getDom(),c)?!1:this._bakQueryAutoHide(c)});
this.getDom().style.tabIndex="-1";b.makeUnselectable(this.getDom());this.Stateful_postRender()},delayShowSubMenu:function(){var a=this;a.isDisabled()||(a.addState("opened"),clearTimeout(a._showingTimer),clearTimeout(a._closingTimer),a._closingTimer=null,a._showingTimer=setTimeout(function(){a.showSubMenu()},250))},delayHideSubMenu:function(){var a=this;a.isDisabled()||(a.removeState("opened"),clearTimeout(a._showingTimer),a._closingTimer||(a._closingTimer=setTimeout(function(){a.hasState("opened")||
a.hideSubMenu();a._closingTimer=null},400)))},renderLabelHtml:function(){return'<div class="edui-arrow"></div><div class="edui-box edui-icon"></div><div class="edui-box edui-label %%-label">'+(this.label||"")+"</div>"},getStateDom:function(){return this.getDom()},queryAutoHide:function(a){if(this.subMenu&&this.hasState("opened"))return this.subMenu.queryAutoHide(a)},_onClick:function(a,b){this.hasState("disabled")||!1!==this.fireEvent("click",a,b)&&(this.subMenu?this.showSubMenu():e.postHide(a))},
showSubMenu:function(){var a=b.getClientRect(this.getDom());a.right-=5;a.left+=2;a.width-=7;a.top-=4;a.bottom+=4;a.height+=8;this.subMenu.showAnchorRect(a,!0,!0)},hideSubMenu:function(){this.subMenu.hide()}};d.inherits(m,a);d.extend(m.prototype,f,!0)})();(function(){var d=s.editor.utils,c=s.editor.ui.uiUtils,b=s.editor.ui.Menu,a=s.editor.ui.SplitButton,e=s.editor.ui.Combox=function(a){this.initOptions(a);this.initCombox()};e.prototype={uiName:"combox",onbuttonclick:function(){this.showPopup()},initCombox:function(){var a=
this;this.items=this.items||[];for(var c=0;c<this.items.length;c++){var d=this.items[c];d.uiName="listitem";d.index=c;d.onclick=function(){a.selectByIndex(this.index)}}this.popup=new b({items:this.items,uiName:"list",editor:this.editor,captureWheel:!0,combox:this});this.initSplitButton()},_SplitButton_postRender:a.prototype.postRender,postRender:function(){this._SplitButton_postRender();this.setLabel(this.label||"");this.setValue(this.initValue||"")},showPopup:function(){var a=c.getClientRect(this.getDom());
a.top+=1;a.bottom-=1;a.height-=2;this.popup.showAnchorRect(a)},getValue:function(){return this.value},setValue:function(a){var b=this.indexByValue(a);-1!=b?(this.selectedIndex=b,this.setLabel(this.items[b].label),this.value=this.items[b].value):(this.selectedIndex=-1,this.setLabel(this.getLabelForUnknowValue(a)),this.value=a)},setLabel:function(a){this.label=this.getDom("button_body").innerHTML=a},getLabelForUnknowValue:function(a){return a},indexByValue:function(a){for(var b=0;b<this.items.length;b++)if(a==
this.items[b].value)return b;return-1},getItem:function(a){return this.items[a]},selectByIndex:function(a){a<this.items.length&&!1!==this.fireEvent("select",a)&&(this.selectedIndex=a,this.value=this.items[a].value,this.setLabel(this.items[a].label))}};d.inherits(e,a)})();(function(){var d=s.editor.utils,c=s.editor.dom.domUtils,b=s.editor.ui.uiUtils,a=s.editor.ui.Mask,e=s.editor.ui.UIBase,f=s.editor.ui.Button,g=s.editor.ui.Dialog=function(a){if(a.name){var b=a.name,c=a.cssRules;a.className||(a.className=
"edui-for-"+b);c&&(a.cssRules=".edui-default .edui-for-"+b+" .edui-dialog-content  {"+c+"}")}this.initOptions(d.extend({autoReset:!0,draggable:!0,onok:function(){},oncancel:function(){},onclose:function(a,b){return b?this.onok():this.oncancel()},holdScroll:!1},a));this.initDialog()},l,k,m;g.prototype={draggable:!1,uiName:"dialog",initDialog:function(){var b=this,c=this.editor.options.theme;this.cssRules&&d.cssRule("edui-customize-"+this.name+"-style",this.cssRules);this.initUIBase();this.modalMask=
l||(l=new a({className:"edui-dialog-modalmask",theme:c,onclick:function(){m&&m.close(!1)}}));this.dragMask=k||(k=new a({className:"edui-dialog-dragmask",theme:c}));this.closeButton=new f({className:"edui-dialog-closebutton",title:b.closeDialog,theme:c,onclick:function(){b.close(!1)}});this.fullscreen&&this.initResizeEvent();if(this.buttons)for(c=0;c<this.buttons.length;c++)this.buttons[c]instanceof f||(this.buttons[c]=new f(d.extend(this.buttons[c],{editor:this.editor},!0)))},initResizeEvent:function(){var a=
this;c.on(window,"resize",function(){a._hidden||void 0===a._hidden||(a.__resizeTimer&&window.clearTimeout(a.__resizeTimer),a.__resizeTimer=window.setTimeout(function(){a.__resizeTimer=null;var c=a.getDom(),d=a.getDom("content"),e=UE.ui.uiUtils.getClientRect(c),f=UE.ui.uiUtils.getClientRect(d),g=b.getViewportRect();d.style.width=g.width-e.width+f.width+"px";d.style.height=g.height-e.height+f.height+"px";c.style.width=g.width+"px";c.style.height=g.height+"px";a.fireEvent("resize")},100))})},fitSize:function(){var a=
this.getDom("body"),b=this.mesureSize();a.style.width=b.width+"px";a.style.height=b.height+"px";return b},safeSetOffset:function(a){var c=this.getDom(),d=b.getViewportRect(),e=b.getClientRect(c),f=a.left;f+e.width>d.right&&(f=d.right-e.width);a=a.top;a+e.height>d.bottom&&(a=d.bottom-e.height);c.style.left=Math.max(f,0)+"px";c.style.top=Math.max(a,0)+"px"},showAtCenter:function(){var a=b.getViewportRect();if(this.fullscreen){var d=this.getDom(),e=this.getDom("content");d.style.display="block";var f=
UE.ui.uiUtils.getClientRect(d),g=UE.ui.uiUtils.getClientRect(e);d.style.left="-100000px";e.style.width=a.width-f.width+g.width+"px";e.style.height=a.height-f.height+g.height+"px";d.style.width=a.width+"px";d.style.height=a.height+"px";d.style.left=0;this._originalContext={html:{overflowX:document.documentElement.style.overflowX,overflowY:document.documentElement.style.overflowY},body:{overflowX:document.body.style.overflowX,overflowY:document.body.style.overflowY}};document.documentElement.style.overflowX=
"hidden";document.documentElement.style.overflowY="hidden";document.body.style.overflowX="hidden";document.body.style.overflowY="hidden"}else this.getDom().style.display="",e=this.fitSize(),f=this.getDom("titlebar").offsetHeight|0,d=a.width/2-e.width/2,a=a.height/2-(e.height-f)/2-f,e=this.getDom(),this.safeSetOffset({left:Math.max(d|0,0),top:Math.max(a|0,0)}),c.hasClass(e,"edui-state-centered")||(e.className+=" edui-state-centered");this._show()},getContentHtml:function(){var a="";"string"==typeof this.content?
a=this.content:this.iframeUrl&&(a='<span id="'+this.id+'_contmask" class="dialogcontmask"></span><iframe id="'+this.id+'_iframe" class="%%-iframe" height="100%" width="100%" frameborder="0" src="'+this.iframeUrl+'"></iframe>');return a},getHtmlTpl:function(){var a="";if(this.buttons){for(var a=[],b=0;b<this.buttons.length;b++)a[b]=this.buttons[b].renderHtml();a='<div class="%%-foot"><div id="##_buttons" class="%%-buttons">'+a.join("")+"</div></div>"}return'<div id="##" class="%%"><div '+(this.fullscreen?
'class="%%-wrap edui-dialog-fullscreen-flag"':'class="%%"')+'><div id="##_body" class="%%-body"><div class="%%-shadow"></div><div id="##_titlebar" class="%%-titlebar"><div class="%%-draghandle" onmousedown="$$._onTitlebarMouseDown(event, this);"><span class="%%-caption">'+(this.title||"")+"</span></div>"+this.closeButton.renderHtml()+'</div><div id="##_content" class="%%-content">'+(this.autoReset?"":this.getContentHtml())+"</div>"+a+"</div></div></div>"},postRender:function(){this.modalMask.getDom()||
(this.modalMask.render(),this.modalMask.hide());this.dragMask.getDom()||(this.dragMask.render(),this.dragMask.hide());var a=this;this.addListener("show",function(){a.modalMask.show(this.getDom().style.zIndex-2)});this.addListener("hide",function(){a.modalMask.hide()});if(this.buttons)for(var d=0;d<this.buttons.length;d++)this.buttons[d].postRender();c.on(window,"resize",function(){setTimeout(function(){a.isHidden()||a.safeSetOffset(b.getClientRect(a.getDom()))})});this._hide()},mesureSize:function(){var a=
this.getDom("body"),c=b.getClientRect(this.getDom("content")).width;a.style.width=c;return b.getClientRect(a)},_onTitlebarMouseDown:function(a,d){if(this.draggable){var e;b.getViewportRect();var f=this;b.startDrag(a,{ondragstart:function(){e=b.getClientRect(f.getDom());f.getDom("contmask").style.visibility="visible";f.dragMask.show(f.getDom().style.zIndex-1)},ondragmove:function(a,b){f.safeSetOffset({left:e.left+a,top:e.top+b})},ondragstop:function(){f.getDom("contmask").style.visibility="hidden";
c.removeClasses(f.getDom(),["edui-state-centered"]);f.dragMask.hide()}})}},reset:function(){this.getDom("content").innerHTML=this.getContentHtml();this.fireEvent("dialogafterreset")},_show:function(){this._hidden&&(this.getDom().style.display="",this.editor.container.style.zIndex&&(this.getDom().style.zIndex=1*this.editor.container.style.zIndex+10),this._hidden=!1,this.fireEvent("show"),s.editor.ui.uiUtils.getFixedLayer().style.zIndex=this.getDom().style.zIndex-4)},isHidden:function(){return this._hidden},
_hide:function(){if(!this._hidden){var a=this.getDom();a.style.display="none";a.style.zIndex="";a.style.width="";a.style.height="";this._hidden=!0;this.fireEvent("hide")}},open:function(){if(this.autoReset)try{this.reset()}catch(a){this.render(),this.open()}this.showAtCenter();if(this.iframeUrl)try{this.getDom("iframe").focus()}catch(b){}m=this},_onCloseButtonClick:function(a,b){this.close(!1)},close:function(a){if(!1!==this.fireEvent("close",a)){this.fullscreen&&(document.documentElement.style.overflowX=
this._originalContext.html.overflowX,document.documentElement.style.overflowY=this._originalContext.html.overflowY,document.body.style.overflowX=this._originalContext.body.overflowX,document.body.style.overflowY=this._originalContext.body.overflowY,delete this._originalContext);this._hide();a=this.getDom("content");var b=this.getDom("iframe");a&&b&&((b=b.contentDocument||b.contentWindow.document)&&(b.body.innerHTML=""),c.remove(a))}}};d.inherits(g,e)})();(function(){var d=s.editor.utils,c=s.editor.ui.Menu,
b=s.editor.ui.SplitButton,a=s.editor.ui.MenuButton=function(a){this.initOptions(a);this.initMenuButton()};a.prototype={initMenuButton:function(){var a=this;this.uiName="menubutton";this.popup=new c({items:a.items,className:a.className,editor:a.editor});this.popup.addListener("show",function(){for(var b=0;b<this.items.length;b++)this.items[b].removeState("checked"),this.items[b].value==a._value&&(this.items[b].addState("checked"),this.value=a._value)});this.initSplitButton()},setValue:function(a){this._value=
a}};d.inherits(a,b)})();(function(){var d=s.editor.utils,c=s.editor.ui.Popup,b=s.editor.ui.SplitButton,a=s.editor.ui.MultiMenuPop=function(a){this.initOptions(a);this.initMultiMenu()};a.prototype={initMultiMenu:function(){var a=this;this.popup=new c({content:"",editor:a.editor,iframe_rendered:!1,onshow:function(){this.iframe_rendered||(this.iframe_rendered=!0,this.getDom("content").innerHTML='<iframe id="'+a.id+'_iframe" src="'+a.iframeUrl+'" frameborder="0"></iframe>',a.editor.container.style.zIndex&&
(this.getDom().style.zIndex=1*a.editor.container.style.zIndex+1))}});this.onbuttonclick=function(){this.showPopup()};this.initSplitButton()}};d.inherits(a,b)})();(function(){function d(a){if(!f.findParent(a.target||a.srcElement,function(a){return f.hasClass(a,"edui-shortcutmenu")||f.hasClass(a,"edui-popup")},!0)){a=0;for(var b;b=g[a++];)b.hide()}}var c=s.editor.ui,b=c.UIBase,a=c.uiUtils,e=s.editor.utils,f=s.editor.dom.domUtils,g=[],l,k=!1,m=c.ShortCutMenu=function(a){this.initOptions(a);this.initShortCutMenu()};
m.postHide=d;m.prototype={isHidden:!0,SPACE:5,initShortCutMenu:function(){this.items=this.items||[];this.initUIBase();this.initItems();this.initEvent();g.push(this)},initEvent:function(){var a=this,b=a.editor.document;f.on(b,"mousemove",function(b){if(!1===a.isHidden&&!a.getSubMenuMark()&&"contextmenu"!=a.eventType){var c=!0,d=a.getDom(),e=d.offsetWidth/2+a.SPACE,f=d.offsetHeight/2,g=Math.abs(b.screenX-a.left),k=Math.abs(b.screenY-a.top);clearTimeout(l);l=setTimeout(function(){0<k&&k<f?a.setOpacity(d,
"1"):k>f&&k<f+70?(a.setOpacity(d,"0.5"),c=!1):k>f+70&&k<f+140&&a.hide();c&&0<g&&g<e?a.setOpacity(d,"1"):g>e&&g<e+70?a.setOpacity(d,"0.5"):g>e+70&&g<e+140&&a.hide()})}});if(r.chrome)f.on(b,"mouseout",function(b){b=b.relatedTarget||b.toElement;null!=b&&"HTML"!=b.tagName||a.hide()});a.editor.addListener("afterhidepop",function(){a.isHidden||(k=!0)})},initItems:function(){if(e.isArray(this.items))for(var a=0,b=this.items.length;a<b;a++){var d=this.items[a].toLowerCase();c[d]&&(this.items[a]=new c[d](this.editor),
this.items[a].className+=" edui-shortcutsubmenu ")}},setOpacity:function(a,b){r.ie&&9>r.version?a.style.filter="alpha(opacity = "+100*parseFloat(b)+");":a.style.opacity=b},getSubMenuMark:function(){k=!1;for(var b=a.getFixedLayer(),b=f.getElementsByTagName(b,"div",function(a){return f.hasClass(a,"edui-shortcutsubmenu edui-popup")}),c=0,d;d=b[c++];)"none"!=d.style.display&&(k=!0);return k},show:function(b,c){function d(a){0>a.left&&(a.left=0);0>a.top&&(a.top=0);k.style.cssText="position:absolute;left:"+
a.left+"px;top:"+a.top+"px;"}function e(a){a.tagName||(a=a.getDom());g.left=parseInt(a.style.left);g.top=parseInt(a.style.top);g.top-=k.offsetHeight+15;d(g)}var g={},k=this.getDom(),l=a.getFixedLayer();this.eventType=b.type;k.style.cssText="display:block;left:-9999px";if("contextmenu"==b.type&&c){var m=f.getElementsByTagName(l,"div","edui-contextmenu")[0];m?e(m):this.editor.addListener("aftershowcontextmenu",function(a,b){e(b)})}else g=a.getViewportOffsetByEvent(b),g.top-=k.offsetHeight+this.SPACE,
g.left+=this.SPACE+20,d(g),this.setOpacity(k,0.2);this.isHidden=!1;this.left=b.screenX+k.offsetWidth/2-this.SPACE;this.top=b.screenY-k.offsetHeight/2-this.SPACE;this.editor&&(k.style.zIndex=1*this.editor.container.style.zIndex+10,l.style.zIndex=k.style.zIndex-1)},hide:function(){this.getDom()&&(this.getDom().style.display="none");this.isHidden=!0},postRender:function(){if(e.isArray(this.items))for(var a=0,b;b=this.items[a++];)b.postRender()},getHtmlTpl:function(){var a;if(e.isArray(this.items)){a=
[];for(var b=0;b<this.items.length;b++)a[b]=this.items[b].renderHtml();a=a.join("")}else a=this.items;return'<div id="##" class="%% edui-toolbar" data-src="shortcutmenu" onmousedown="return false;" onselectstart="return false;" >'+a+"</div>"}};e.inherits(m,b);f.on(document,"mousedown",function(a){d(a)});f.on(window,"scroll",function(a){d(a)})})();(function(){var d=s.editor.utils,c=s.editor.ui.UIBase,b=s.editor.ui.Breakline=function(a){this.initOptions(a);this.initSeparator()};b.prototype={uiName:"Breakline",
initSeparator:function(){this.initUIBase()},getHtmlTpl:function(){return"<br/>"}};d.inherits(b,c)})();(function(){var d=s.editor.utils,c=s.editor.dom.domUtils,b=s.editor.ui.UIBase,a=s.editor.ui.Message=function(a){this.initOptions(a);this.initMessage()};a.prototype={initMessage:function(){this.initUIBase()},getHtmlTpl:function(){return'<div id="##" class="edui-message %%"> <div id="##_closer" class="edui-message-closer">\u00d7</div> <div id="##_body" class="edui-message-body edui-message-type-info"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="about:blank"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="edui-message-content">  </div> </div></div>'},
reset:function(a){var b=this;a.keepshow||(clearTimeout(this.timer),b.timer=setTimeout(function(){b.hide()},a.timeout||4E3));void 0!==a.content&&b.setContent(a.content);void 0!==a.type&&b.setType(a.type);b.show()},postRender:function(){var a=this,b=this.getDom("closer");b&&c.on(b,"click",function(){a.hide()})},setContent:function(a){this.getDom("content").innerHTML=a},setType:function(a){a=a||"info";var b=this.getDom("body");b.className=b.className.replace(/edui-message-type-[\w-]+/,"edui-message-type-"+
a)},getContent:function(){return this.getDom("content").innerHTML},getType:function(){var a=this.getDom("body").match(/edui-message-type-([\w-]+)/);return a?a[1]:""},show:function(){this.getDom().style.display="block"},hide:function(){var a=this.getDom();a&&(a.style.display="none",a.parentNode&&a.parentNode.removeChild(a))}};d.inherits(a,b)})();(function(){var d=s.editor.utils,c=s.editor.ui,b=c.Dialog;c.buttons={};c.Dialog=function(a){var c=new b(a);c.addListener("hide",function(){if(c.editor){var a=
c.editor;try{if(r.gecko){var b=a.window.scrollY,d=a.window.scrollX;a.body.focus();a.window.scrollTo(d,b)}else a.focus()}catch(e){}}});return c};for(var a={anchor:"~/dialogs/anchor/anchor.html",insertimage:"~/dialogs/image/image.html",link:"~/dialogs/link/link.html",spechars:"~/dialogs/spechars/spechars.html",searchreplace:"~/dialogs/searchreplace/searchreplace.html",map:"~/dialogs/map/map.html",gmap:"~/dialogs/gmap/gmap.html",insertvideo:"~/dialogs/video/video.html",help:"~/dialogs/help/help.html",
preview:"~/dialogs/preview/preview.html",emotion:"~/dialogs/emotion/emotion.html",wordimage:"~/dialogs/wordimage/wordimage.html",attachment:"~/dialogs/attachment/attachment.html",insertframe:"~/dialogs/insertframe/insertframe.html",edittip:"~/dialogs/table/edittip.html",edittable:"~/dialogs/table/edittable.html",edittd:"~/dialogs/table/edittd.html",webapp:"~/dialogs/webapp/webapp.html",snapscreen:"~/dialogs/snapscreen/snapscreen.html",scrawl:"~/dialogs/scrawl/scrawl.html",music:"~/dialogs/music/music.html",
template:"~/dialogs/template/template.html",background:"~/dialogs/background/background.html",charts:"~/dialogs/charts/charts.html"},e="undo redo formatmatch bold italic underline fontborder touppercase tolowercase strikethrough subscript superscript source indent outdent blockquote pasteplain pagebreak selectall print horizontal removeformat time date unlink insertparagraphbeforetable insertrow insertcol mergeright mergedown deleterow deletecol splittorows splittocols splittocells mergecells deletetable drafts".split(" "),
f=0,g;g=e[f++];)g=g.toLowerCase(),c[g]=function(a){return function(b){var d=new c.Button({className:"edui-for-"+a,title:b.options.labelMap[a]||b.getLang("labelMap."+a)||"",onclick:function(){b.execCommand(a)},theme:b.options.theme,showText:!1});c.buttons[a]=d;b.addListener("selectionchange",function(c,e,f){c=b.queryCommandState(a);-1==c?(d.setDisabled(!0),d.setChecked(!1)):f||(d.setDisabled(!1),d.setChecked(c))});return d}}(g);c.cleardoc=function(a){var b=new c.Button({className:"edui-for-cleardoc",
title:a.options.labelMap.cleardoc||a.getLang("labelMap.cleardoc")||"",theme:a.options.theme,onclick:function(){confirm(a.getLang("confirmClear"))&&a.execCommand("cleardoc")}});c.buttons.cleardoc=b;a.addListener("selectionchange",function(){b.setDisabled(-1==a.queryCommandState("cleardoc"))});return b};var e={justify:["left","right","center","justify"],imagefloat:["none","left","center","right"],directionality:["ltr","rtl"]},l;for(l in e)(function(a,b){for(var d=0,e;e=b[d++];)(function(b){c[a.replace("float",
"")+b]=function(d){var e=new c.Button({className:"edui-for-"+a.replace("float","")+b,title:d.options.labelMap[a.replace("float","")+b]||d.getLang("labelMap."+a.replace("float","")+b)||"",theme:d.options.theme,onclick:function(){d.execCommand(a,b)}});c.buttons[a]=e;d.addListener("selectionchange",function(c,f,g){e.setDisabled(-1==d.queryCommandState(a));e.setChecked(d.queryCommandValue(a)==b&&!g)});return e}})(e)})(l,e[l]);for(f=0;g=["backcolor","forecolor"][f++];)c[g]=function(a){return function(b){var d=
new c.ColorButton({className:"edui-for-"+a,color:"default",title:b.options.labelMap[a]||b.getLang("labelMap."+a)||"",editor:b,onpickcolor:function(c,d){b.execCommand(a,d)},onpicknocolor:function(){b.execCommand(a,"default");this.setColor("transparent");this.color="default"},onbuttonclick:function(){b.execCommand(a,this.color)}});c.buttons[a]=d;b.addListener("selectionchange",function(){d.setDisabled(-1==b.queryCommandState(a))});return d}}(g);e={noOk:["searchreplace","help","spechars","webapp","preview"],
ok:"attachment anchor link insertimage map gmap insertframe wordimage insertvideo insertframe edittip edittable edittd scrawl template music background charts".split(" ")};for(l in e)(function(b,e){for(var f=0,g;g=e[f++];)r.opera&&"searchreplace"===g||function(e){c[e]=function(f,g,h){g=g||(f.options.iframeUrlMap||{})[e]||a[e];h=f.options.labelMap[e]||f.getLang("labelMap."+e)||"";var l;g&&(l=new c.Dialog(d.extend({iframeUrl:f.ui.mapUrl(g),editor:f,className:"edui-for-"+e,title:h,holdScroll:"insertimage"===
e,fullscreen:/charts|preview/.test(e),closeDialog:f.getLang("closeDialog")},"ok"==b?{buttons:[{className:"edui-okbutton",label:f.getLang("ok"),editor:f,onclick:function(){l.close(!0)}},{className:"edui-cancelbutton",label:f.getLang("cancel"),editor:f,onclick:function(){l.close(!1)}}]}:{})),f.ui._dialogs[e+"Dialog"]=l);var m=new c.Button({className:"edui-for-"+e,title:h,onclick:function(){if(l)switch(e){case "wordimage":var a=f.execCommand("wordimage");a&&a.length&&(l.render(),l.open());break;case "scrawl":-1!=
f.queryCommandState("scrawl")&&(l.render(),l.open());break;default:l.render(),l.open()}},theme:f.options.theme,disabled:"scrawl"==e&&-1==f.queryCommandState("scrawl")||"charts"==e});c.buttons[e]=m;f.addListener("selectionchange",function(){if(!(e in{edittable:1})){var a=f.queryCommandState(e);m.getDom()&&(m.setDisabled(-1==a),m.setChecked(a))}});return m}}(g.toLowerCase())})(l,e[l]);c.snapscreen=function(b,d,e){e=b.options.labelMap.snapscreen||b.getLang("labelMap.snapscreen")||"";var f=new c.Button({className:"edui-for-snapscreen",
title:e,onclick:function(){b.execCommand("snapscreen")},theme:b.options.theme});c.buttons.snapscreen=f;if(d=d||(b.options.iframeUrlMap||{}).snapscreen||a.snapscreen){var g=new c.Dialog({iframeUrl:b.ui.mapUrl(d),editor:b,className:"edui-for-snapscreen",title:e,buttons:[{className:"edui-okbutton",label:b.getLang("ok"),editor:b,onclick:function(){g.close(!0)}},{className:"edui-cancelbutton",label:b.getLang("cancel"),editor:b,onclick:function(){g.close(!1)}}]});g.render();b.ui._dialogs.snapscreenDialog=
g}b.addListener("selectionchange",function(){f.setDisabled(-1==b.queryCommandState("snapscreen"))});return f};c.insertcode=function(a,b,e){b=a.options.insertcode||[];e=a.options.labelMap.insertcode||a.getLang("labelMap.insertcode")||"";var f=[];d.each(b,function(b,c){f.push({label:b,value:c,theme:a.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label" >'+(this.label||"")+"</div>"}})});var g=new c.Combox({editor:a,items:f,onselect:function(b,c){a.execCommand("insertcode",
this.items[c].value)},onbuttonclick:function(){this.showPopup()},title:e,initValue:e,className:"edui-for-insertcode",indexByValue:function(a){if(a)for(var b=0,c;c=this.items[b];b++)if(-1!=c.value.indexOf(a))return b;return-1}});c.buttons.insertcode=g;a.addListener("selectionchange",function(b,c,d){d||(-1==a.queryCommandState("insertcode")?g.setDisabled(!0):(g.setDisabled(!1),(b=a.queryCommandValue("insertcode"))?(b&&(b=b.replace(/['"]/g,"").split(",")[0]),g.setValue(b)):g.setValue(e)))});return g};
c.fontfamily=function(a,b,e){b=a.options.fontfamily||[];e=a.options.labelMap.fontfamily||a.getLang("labelMap.fontfamily")||"";if(b.length){for(var f=0,g,h=[];g=b[f];f++){var l=a.getLang("fontfamily")[g.name]||"";(function(b,c){h.push({label:b,value:c,theme:a.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label" style="font-family:'+d.unhtml(this.value)+'">'+(this.label||"")+"</div>"}})})(g.label||l,g.val)}var p=new c.Combox({editor:a,items:h,onselect:function(b,c){a.execCommand("FontFamily",
this.items[c].value)},onbuttonclick:function(){this.showPopup()},title:e,initValue:e,className:"edui-for-fontfamily",indexByValue:function(a){if(a)for(var b=0,c;c=this.items[b];b++)if(-1!=c.value.indexOf(a))return b;return-1}});c.buttons.fontfamily=p;a.addListener("selectionchange",function(b,c,d){d||(-1==a.queryCommandState("FontFamily")?p.setDisabled(!0):(p.setDisabled(!1),(b=a.queryCommandValue("FontFamily"))&&(b=b.replace(/['"]/g,"").split(",")[0]),p.setValue(b)))});return p}};c.fontsize=function(a,
b,d){d=a.options.labelMap.fontsize||a.getLang("labelMap.fontsize")||"";b=b||a.options.fontsize||[];if(b.length){for(var e=[],f=0;f<b.length;f++){var g=b[f]+"px";e.push({label:g,value:g,theme:a.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label" style="line-height:1;font-size:'+this.value+'">'+(this.label||"")+"</div>"}})}var h=new c.Combox({editor:a,items:e,title:d,initValue:d,onselect:function(b,c){a.execCommand("FontSize",this.items[c].value)},onbuttonclick:function(){this.showPopup()},
className:"edui-for-fontsize"});c.buttons.fontsize=h;a.addListener("selectionchange",function(b,c,d){d||(-1==a.queryCommandState("FontSize")?h.setDisabled(!0):(h.setDisabled(!1),h.setValue(a.queryCommandValue("FontSize"))))});return h}};c.paragraph=function(a,b,e){e=a.options.labelMap.paragraph||a.getLang("labelMap.paragraph")||"";b=a.options.paragraph||[];if(!d.isEmptyObject(b)){var f=[],g;for(g in b)f.push({value:g,label:b[g]||a.getLang("paragraph")[g],theme:a.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label"><span class="edui-for-'+
this.value+'">'+(this.label||"")+"</span></div>"}});var h=new c.Combox({editor:a,items:f,title:e,initValue:e,className:"edui-for-paragraph",onselect:function(b,c){a.execCommand("Paragraph",this.items[c].value)},onbuttonclick:function(){this.showPopup()}});c.buttons.paragraph=h;a.addListener("selectionchange",function(b,c,d){d||(-1==a.queryCommandState("Paragraph")?h.setDisabled(!0):(h.setDisabled(!1),b=a.queryCommandValue("Paragraph"),-1!=h.indexByValue(b)?h.setValue(b):h.setValue(h.initValue)))});
return h}};c.customstyle=function(a){var b=a.options.customstyle||[],d=a.options.labelMap.customstyle||a.getLang("labelMap.customstyle")||"";if(b.length){for(var e=a.getLang("customstyle"),f=0,g=[],h;h=b[f++];)(function(b){var c={};c.label=b.label?b.label:e[b.name];c.style=b.style;c.className=b.className;c.tag=b.tag;g.push({label:c.label,value:c,theme:a.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label"><'+c.tag+" "+(c.className?' class="'+c.className+'"':"")+(c.style?
' style="'+c.style+'"':"")+">"+c.label+"</"+c.tag+"></div>"}})})(h);var l=new c.Combox({editor:a,items:g,title:d,initValue:d,className:"edui-for-customstyle",onselect:function(b,c){a.execCommand("customstyle",this.items[c].value)},onbuttonclick:function(){this.showPopup()},indexByValue:function(a){for(var b=0,c;c=this.items[b++];)if(c.label==a)return b-1;return-1}});c.buttons.customstyle=l;a.addListener("selectionchange",function(b,c,d){d||(-1==a.queryCommandState("customstyle")?l.setDisabled(!0):
(l.setDisabled(!1),b=a.queryCommandValue("customstyle"),-1!=l.indexByValue(b)?l.setValue(b):l.setValue(l.initValue)))});return l}};c.inserttable=function(a,b,d){d=a.options.labelMap.inserttable||a.getLang("labelMap.inserttable")||"";var e=new c.TableButton({editor:a,title:d,className:"edui-for-inserttable",onpicktable:function(b,c,d){a.execCommand("InsertTable",{numRows:d,numCols:c,border:1})},onbuttonclick:function(){this.showPopup()}});c.buttons.inserttable=e;a.addListener("selectionchange",function(){e.setDisabled(-1==
a.queryCommandState("inserttable"))});return e};c.lineheight=function(a){var b=a.options.lineheight||[];if(b.length){for(var d=0,e,f=[];e=b[d++];)f.push({label:e,value:e,theme:a.options.theme,onclick:function(){a.execCommand("lineheight",this.value)}});var g=new c.MenuButton({editor:a,className:"edui-for-lineheight",title:a.options.labelMap.lineheight||a.getLang("labelMap.lineheight")||"",items:f,onbuttonclick:function(){var b=a.queryCommandValue("LineHeight")||this.value;a.execCommand("LineHeight",
b)}});c.buttons.lineheight=g;a.addListener("selectionchange",function(){var b=a.queryCommandState("LineHeight");if(-1==b)g.setDisabled(!0);else{g.setDisabled(!1);var c=a.queryCommandValue("LineHeight");c&&g.setValue((c+"").replace(/cm/,""));g.setChecked(b)}});return g}};l=["top","bottom"];for(e=0;f=l[e++];)(function(a){c["rowspacing"+a]=function(b){var d=b.options["rowspacing"+a]||[];if(!d.length)return null;for(var e=0,f,g=[];f=d[e++];)g.push({label:f,value:f,theme:b.options.theme,onclick:function(){b.execCommand("rowspacing",
this.value,a)}});var h=new c.MenuButton({editor:b,className:"edui-for-rowspacing"+a,title:b.options.labelMap["rowspacing"+a]||b.getLang("labelMap.rowspacing"+a)||"",items:g,onbuttonclick:function(){var c=b.queryCommandValue("rowspacing",a)||this.value;b.execCommand("rowspacing",c,a)}});c.buttons[a]=h;b.addListener("selectionchange",function(){var c=b.queryCommandState("rowspacing",a);if(-1==c)h.setDisabled(!0);else{h.setDisabled(!1);var d=b.queryCommandValue("rowspacing",a);d&&h.setValue((d+"").replace(/%/,
""));h.setChecked(c)}});return h}})(f);l=["insertorderedlist","insertunorderedlist"];for(e=0;f=l[e++];)(function(a){c[a]=function(b){var d=b.options[a],e=function(){b.execCommand(a,this.value)},f=[],g;for(g in d)f.push({label:d[g]||b.getLang()[a][g]||"",value:g,theme:b.options.theme,onclick:e});var h=new c.MenuButton({editor:b,className:"edui-for-"+a,title:b.getLang("labelMap."+a)||"",items:f,onbuttonclick:function(){var c=b.queryCommandValue(a)||this.value;b.execCommand(a,c)}});c.buttons[a]=h;b.addListener("selectionchange",
function(){var c=b.queryCommandState(a);if(-1==c)h.setDisabled(!0);else{h.setDisabled(!1);var d=b.queryCommandValue(a);h.setValue(d);h.setChecked(c)}});return h}})(f);c.fullscreen=function(a,b){b=a.options.labelMap.fullscreen||a.getLang("labelMap.fullscreen")||"";var d=new c.Button({className:"edui-for-fullscreen",title:b,theme:a.options.theme,onclick:function(){a.ui&&a.ui.setFullScreen(!a.ui.isFullScreen());this.setChecked(a.ui.isFullScreen())}});c.buttons.fullscreen=d;a.addListener("selectionchange",
function(){var b=a.queryCommandState("fullscreen");d.setDisabled(-1==b);d.setChecked(a.ui.isFullScreen())});return d};c.emotion=function(b,d){var e=new c.MultiMenuPop({title:b.options.labelMap.emotion||b.getLang("labelMap.emotion")||"",editor:b,className:"edui-for-emotion",iframeUrl:b.ui.mapUrl(d||(b.options.iframeUrlMap||{}).emotion||a.emotion)});c.buttons.emotion=e;b.addListener("selectionchange",function(){e.setDisabled(-1==b.queryCommandState("emotion"))});return e};c.autotypeset=function(a){var b=
new c.AutoTypeSetButton({editor:a,title:a.options.labelMap.autotypeset||a.getLang("labelMap.autotypeset")||"",className:"edui-for-autotypeset",onbuttonclick:function(){a.execCommand("autotypeset")}});c.buttons.autotypeset=b;a.addListener("selectionchange",function(){b.setDisabled(-1==a.queryCommandState("autotypeset"))});return b};c.simpleupload=function(a){var b=new c.Button({className:"edui-for-simpleupload",title:a.options.labelMap.simpleupload||a.getLang("labelMap.simpleupload")||"",onclick:function(){},
theme:a.options.theme,showText:!1});c.buttons.simpleupload=b;a.addListener("ready",function(){var c=b.getDom("body").children[0];a.fireEvent("simpleuploadbtnready",c)});a.addListener("selectionchange",function(c,d,e){c=a.queryCommandState("simpleupload");-1==c?(b.setDisabled(!0),b.setChecked(!1)):e||(b.setDisabled(!1),b.setChecked(c))});return b}})();(function(){function d(a){this.initOptions(a);this.initEditorUI()}var c=s.editor.utils,b=s.editor.ui.uiUtils,a=s.editor.ui.UIBase,e=s.editor.dom.domUtils,
f=[];d.prototype={uiName:"editor",initEditorUI:function(){function a(b,c){b.setOpt({wordCount:!0,maximumWords:1E4,wordCountMsg:b.options.wordCountMsg||b.getLang("wordCountMsg"),wordOverFlowMsg:b.options.wordOverFlowMsg||b.getLang("wordOverFlowMsg")});var d=b.options,e=d.maximumWords,f=d.wordCountMsg,g=d.wordOverFlowMsg,h=c.getDom("wordcount");d.wordCount&&(d=b.getContentLength(!0),d>e?(h.innerHTML=g,b.fireEvent("wordcountoverflow")):h.innerHTML=f.replace("{#leave}",e-d).replace("{#count}",d))}this.editor.ui=
this;this._dialogs={};this.initUIBase();this._initToolbars();var b=this.editor,c=this;b.addListener("ready",function(){b.getDialog=function(a){return b.ui._dialogs[a+"Dialog"]};e.on(b.window,"scroll",function(a){s.editor.ui.Popup.postHide(a)});b.ui._actualFrameWidth=b.options.initialFrameWidth;UE.browser.ie&&6===UE.browser.version&&b.container.ownerDocument.execCommand("BackgroundImageCache",!1,!0);b.options.elementPathEnabled&&(b.ui.getDom("elementpath").innerHTML='<div class="edui-editor-breadcrumb">'+
b.getLang("elementPathTip")+":</div>");b.options.wordCount&&(e.on(b.document,"click",function(){a(b,c);e.un(b.document,"click",arguments.callee)}),b.ui.getDom("wordcount").innerHTML=b.getLang("wordCountTip"));b.ui._scale();b.options.scaleEnabled?(b.autoHeightEnabled&&b.disableAutoHeight(),c.enableScale()):c.disableScale();b.options.elementPathEnabled||b.options.wordCount||b.options.scaleEnabled||(b.ui.getDom("elementpath").style.display="none",b.ui.getDom("wordcount").style.display="none",b.ui.getDom("scale").style.display=
"none");b.selection.isFocus()&&b.fireEvent("selectionchange",!1,!0)});b.addListener("mousedown",function(a,b){s.editor.ui.Popup.postHide(b,b.target||b.srcElement);s.editor.ui.ShortCutMenu.postHide(b)});b.addListener("delcells",function(){UE.ui.edittip&&new UE.ui.edittip(b);b.getDialog("edittip").open()});var d,f=!1,g;b.addListener("afterpaste",function(){b.queryCommandState("pasteplain")||(s.editor.ui.PastePicker&&(d=new s.editor.ui.Popup({content:new s.editor.ui.PastePicker({editor:b}),editor:b,
className:"edui-wordpastepop"}),d.render()),f=!0)});b.addListener("afterinserthtml",function(){clearTimeout(g);g=setTimeout(function(){if(d&&(f||b.ui._isTransfer)){if(d.isHidden()){var a=e.createElement(b.document,"span",{style:"line-height:0px;",innerHTML:"\ufeff"});b.selection.getRange().insertNode(a);var c=X(a,"firstChild","previousSibling");c&&d.showAnchor(3==c.nodeType?c.parentNode:c);e.remove(a)}else d.show();delete b.ui._isTransfer;f=!1}},200)});b.addListener("contextmenu",function(a,b){s.editor.ui.Popup.postHide(b)});
b.addListener("keydown",function(a,b){d&&d.dispose(b);var c=b.keyCode||b.which;if(b.altKey&&90==c)UE.ui.buttons.fullscreen.onclick()});b.addListener("wordcount",function(b){a(this,c)});b.addListener("selectionchange",function(){if(b.options.elementPathEnabled)c[(-1==b.queryCommandState("elementpath")?"dis":"en")+"ableElementPath"]();if(b.options.scaleEnabled)c[(-1==b.queryCommandState("scale")?"dis":"en")+"ableScale"]()});var h=new s.editor.ui.Popup({editor:b,content:"",className:"edui-bubble",_onEditButtonClick:function(){this.hide();
b.ui._dialogs.linkDialog.open()},_onImgEditButtonClick:function(a){this.hide();b.ui._dialogs[a]&&b.ui._dialogs[a].open()},_onImgSetFloat:function(a){this.hide();b.execCommand("imagefloat",a)},_setIframeAlign:function(a){var b=h.anchorEl,c=b.cloneNode(!0);switch(a){case -2:c.setAttribute("align","");break;case -1:c.setAttribute("align","left");break;case 1:c.setAttribute("align","right")}b.parentNode.insertBefore(c,b);e.remove(b);h.anchorEl=c;h.showAnchor(h.anchorEl)},_updateIframe:function(){var a=
b._iframe=h.anchorEl;e.hasClass(a,"ueditor_baidumap")?(b.selection.getRange().selectNode(a).select(),b.ui._dialogs.mapDialog.open()):b.ui._dialogs.insertframeDialog.open();h.hide()},_onRemoveButtonClick:function(a){b.execCommand(a);this.hide()},queryAutoHide:function(a){return a&&a.ownerDocument==b.document&&("img"==a.tagName.toLowerCase()||e.findParentByTagName(a,"a",!0))?a!==h.anchorEl:s.editor.ui.Popup.prototype.queryAutoHide.call(this,a)}});h.render();b.options.imagePopup&&(b.addListener("mouseover",
function(a,c){c=c||window.event;var d=c.target||c.srcElement;if(b.ui._dialogs.insertframeDialog&&/iframe/ig.test(d.tagName)){var e=h.formatHtml("<nobr>"+b.getLang("property")+': <span onclick=$$._setIframeAlign(-2) class="edui-clickable">'+b.getLang("default")+'</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(-1) class="edui-clickable">'+b.getLang("justifyleft")+'</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(1) class="edui-clickable">'+b.getLang("justifyright")+'</span>&nbsp;&nbsp; <span onclick="$$._updateIframe( this);" class="edui-clickable">'+
b.getLang("modify")+"</span></nobr>");e?(h.getDom("content").innerHTML=e,h.anchorEl=d,h.showAnchor(h.anchorEl)):h.hide()}}),b.addListener("selectionchange",function(a,c){if(c){var d="",f="",g=b.selection.getRange().getClosedNode(),f=b.ui._dialogs;if(g&&"IMG"==g.tagName){var l="insertimageDialog";if(-1!=g.className.indexOf("edui-faked-video")||-1!=g.className.indexOf("edui-upload-video"))l="insertvideoDialog";-1!=g.className.indexOf("edui-faked-webapp")&&(l="webappDialog");-1!=g.src.indexOf("http://api.map.baidu.com")&&
(l="mapDialog");-1!=g.className.indexOf("edui-faked-music")&&(l="musicDialog");-1!=g.src.indexOf("http://maps.google.com/maps/api/staticmap")&&(l="gmapDialog");g.getAttribute("anchorname")&&(l="anchorDialog",d=h.formatHtml("<nobr>"+b.getLang("property")+': <span onclick=$$._onImgEditButtonClick("anchorDialog") class="edui-clickable">'+b.getLang("modify")+"</span>&nbsp;&nbsp;<span onclick=$$._onRemoveButtonClick('anchor') class=\"edui-clickable\">"+b.getLang("delete")+"</span></nobr>"));g.getAttribute("word_img")&&
(b.word_img=[g.getAttribute("word_img")],l="wordimageDialog");if(e.hasClass(g,"loadingclass")||e.hasClass(g,"loaderrorclass"))l="";if(!f[l])return;f="<nobr>"+b.getLang("property")+': <span onclick=$$._onImgSetFloat("none") class="edui-clickable">'+b.getLang("default")+'</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("left") class="edui-clickable">'+b.getLang("justifyleft")+'</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("right") class="edui-clickable">'+b.getLang("justifyright")+'</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("center") class="edui-clickable">'+
b.getLang("justifycenter")+"</span>&nbsp;&nbsp;<span onclick=\"$$._onImgEditButtonClick('"+l+'\');" class="edui-clickable">'+b.getLang("modify")+"</span></nobr>";!d&&(d=h.formatHtml(f))}if(b.ui._dialogs.linkDialog){var m=b.queryCommandValue("link"),n;m&&(n=m.getAttribute("_href")||m.getAttribute("href",2))&&(f=n,30<n.length&&(f=n.substring(0,20)+"..."),d&&(d+='<div style="height:5px;"></div>'),d+=h.formatHtml("<nobr>"+b.getLang("anthorMsg")+': <a target="_blank" href="'+n+'" title="'+n+'" >'+f+'</a> <span class="edui-clickable" onclick="$$._onEditButtonClick();">'+
b.getLang("modify")+'</span> <span class="edui-clickable" onclick="$$._onRemoveButtonClick(\'unlink\');"> '+b.getLang("clear")+"</span></nobr>"),h.showAnchor(m))}d?(h.getDom("content").innerHTML=d,h.anchorEl=g||m,h.showAnchor(h.anchorEl)):h.hide()}}))},_initToolbars:function(){for(var a=this.editor,b=this.toolbars||[],d=[],e=0;e<b.length;e++){for(var f=b[e],g=new s.editor.ui.Toolbar({theme:a.options.theme}),h=0;h<f.length;h++){var p=f[h],r=null;if("string"==typeof p){if(p=p.toLowerCase(),"|"==p&&
(p="Separator"),"||"==p&&(p="Breakline"),s.editor.ui[p]&&(r=new s.editor.ui[p](a)),"fullscreen"==p){d&&d[0]?d[0].items.splice(0,0,r):r&&g.items.splice(0,0,r);continue}}else r=p;r&&r.id&&g.add(r)}d[e]=g}c.each(UE._customizeUI,function(b,c){var d,e;if(b.id&&b.id!=a.key)return!1;if(d=b.execFn.call(a,a,c))e=b.index,void 0===e&&(e=g.items.length),g.add(d,e)});this.toolbars=d},getHtmlTpl:function(){return'<div id="##" class="%%"><div id="##_toolbarbox" class="%%-toolbarbox">'+(this.toolbars.length?'<div id="##_toolbarboxouter" class="%%-toolbarboxouter"><div class="%%-toolbarboxinner">'+
this.renderToolbarBoxHtml()+"</div></div>":"")+'<div id="##_toolbarmsg" class="%%-toolbarmsg" style="display:none;"><div id = "##_upload_dialog" class="%%-toolbarmsg-upload" onclick="$$.showWordImageDialog();">'+this.editor.getLang("clickToUpload")+'</div><div class="%%-toolbarmsg-close" onclick="$$.hideToolbarMsg();">x</div><div id="##_toolbarmsg_label" class="%%-toolbarmsg-label"></div><div style="height:0;overflow:hidden;clear:both;"></div></div><div id="##_message_holder" class="%%-messageholder"></div></div><div id="##_iframeholder" class="%%-iframeholder"></div><div id="##_bottombar" class="%%-bottomContainer"><table><tr><td id="##_elementpath" class="%%-bottombar"></td><td id="##_wordcount" class="%%-wordcount"></td><td id="##_scale" class="%%-scale"><div class="%%-icon"></div></td></tr></table></div><div id="##_scalelayer"></div></div>'},
showWordImageDialog:function(){this._dialogs.wordimageDialog.open()},renderToolbarBoxHtml:function(){for(var a=[],b=0;b<this.toolbars.length;b++)a.push(this.toolbars[b].renderHtml());return a.join("")},setFullScreen:function(a){var b=this.editor,c=b.container.parentNode.parentNode;if(this._fullscreen!=a){this._fullscreen=a;this.editor.fireEvent("beforefullscreenchange",a);if(s.editor.browser.gecko)var d=b.selection.getRange().createBookmark();if(a){for(;"BODY"!=c.tagName;){var e=s.editor.dom.domUtils.getComputedStyle(c,
"position");f.push(e);c.style.position="static";c=c.parentNode}this._bakHtmlOverflow=document.documentElement.style.overflow;this._bakBodyOverflow=document.body.style.overflow;this._bakAutoHeight=this.editor.autoHeightEnabled;this._bakScrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop);this._bakEditorContaninerWidth=b.iframe.parentNode.offsetWidth;this._bakAutoHeight&&(b.autoHeightEnabled=!1,this.editor.disableAutoHeight());document.documentElement.style.overflow="hidden";
window.scrollTo(0,window.scrollY);this._bakCssText=this.getDom().style.cssText;this._bakCssText1=this.getDom("iframeholder").style.cssText;b.iframe.parentNode.style.width="";this._updateFullScreen()}else{for(;"BODY"!=c.tagName;)c.style.position=f.shift(),c=c.parentNode;this.getDom().style.cssText=this._bakCssText;this.getDom("iframeholder").style.cssText=this._bakCssText1;this._bakAutoHeight&&(b.autoHeightEnabled=!0,this.editor.enableAutoHeight());document.documentElement.style.overflow=this._bakHtmlOverflow;
document.body.style.overflow=this._bakBodyOverflow;b.iframe.parentNode.style.width=this._bakEditorContaninerWidth+"px";window.scrollTo(0,this._bakScrollTop)}if(r.gecko&&"true"===b.body.contentEditable){var g=document.createElement("input");document.body.appendChild(g);b.body.contentEditable=!1;setTimeout(function(){g.focus();setTimeout(function(){b.body.contentEditable=!0;b.fireEvent("fullscreenchanged",a);b.selection.getRange().moveToBookmark(d).select(!0);s.editor.dom.domUtils.remove(g);a&&window.scroll(0,
0)},0)},0)}"true"===b.body.contentEditable&&(this.editor.fireEvent("fullscreenchanged",a),this.triggerLayout())}},_updateFullScreen:function(){if(this._fullscreen){var a=b.getViewportRect();this.getDom().style.cssText="border:0;position:absolute;left:0;top:"+(this.editor.options.topOffset||0)+"px;width:"+a.width+"px;height:"+a.height+"px;z-index:"+(1*this.getDom().style.zIndex+100);b.setViewportOffset(this.getDom(),{left:0,top:this.editor.options.topOffset||0});this.editor.setHeight(a.height-this.getDom("toolbarbox").offsetHeight-
this.getDom("bottombar").offsetHeight-(this.editor.options.topOffset||0),!0);if(r.gecko)try{window.onresize()}catch(c){}}},_updateElementPath:function(){var a=this.getDom("elementpath"),b;if(this.elementPathEnabled&&(b=this.editor.queryCommandValue("elementpath"))){for(var c=[],d=0,e;e=b[d];d++)c[d]=this.formatHtml('<span unselectable="on" onclick="$$.editor.execCommand(&quot;elementpath&quot;, &quot;'+d+'&quot;);">'+e+"</span>");a.innerHTML='<div class="edui-editor-breadcrumb" onmousedown="return false;">'+
this.editor.getLang("elementPathTip")+": "+c.join(" &gt; ")+"</div>"}else a.style.display="none"},disableElementPath:function(){var a=this.getDom("elementpath");a.innerHTML="";a.style.display="none";this.elementPathEnabled=!1},enableElementPath:function(){this.getDom("elementpath").style.display="";this.elementPathEnabled=!0;this._updateElementPath()},_scale:function(){function a(){I=e.getXY(h);L||(L=g.options.minFrameHeight+s.offsetHeight+v.offsetHeight);G.style.cssText="position:absolute;left:0;display:;top:0;background-color:#41ABFF;opacity:0.4;filter: Alpha(opacity=40);width:"+
h.offsetWidth+"px;height:"+h.offsetHeight+"px;z-index:"+(g.options.zIndex+1);e.on(f,"mousemove",b);e.on(p,"mouseup",c);e.on(f,"mouseup",c)}function b(a){d();a=a||window.event;T=a.pageX||f.documentElement.scrollLeft+a.clientX;z=a.pageY||f.documentElement.scrollTop+a.clientY;H=T-I.x;D=z-I.y;H>=P&&(A=!0,G.style.width=H+"px");D>=L&&(A=!0,G.style.height=D+"px")}function c(){A&&(A=!1,g.ui._actualFrameWidth=G.offsetWidth-2,h.style.width=g.ui._actualFrameWidth+"px",g.setHeight(G.offsetHeight-v.offsetHeight-
s.offsetHeight-2,!0));G&&(G.style.display="none");d();e.un(f,"mousemove",b);e.un(p,"mouseup",c);e.un(f,"mouseup",c)}function d(){r.ie?f.selection.clear():window.getSelection().removeAllRanges()}var f=document,g=this.editor,h=g.container,p=g.document,s=this.getDom("toolbarbox"),v=this.getDom("bottombar"),E=this.getDom("scale"),G=this.getDom("scalelayer"),A=!1,I=null,L=0,P=g.options.minFrameWidth,T=0,z=0,H=0,D=0,B=this;this.editor.addListener("fullscreenchanged",function(a,b){if(b)B.disableScale();
else if(B.editor.options.scaleEnabled){B.enableScale();var c=B.editor.document.createElement("span");B.editor.body.appendChild(c);B.editor.body.style.height=Math.max(e.getXY(c).y,B.editor.iframe.offsetHeight-20)+"px";e.remove(c)}});this.enableScale=function(){1!=g.queryCommandState("source")&&(E.style.display="",this.scaleEnabled=!0,e.on(E,"mousedown",a))};this.disableScale=function(){E.style.display="none";this.scaleEnabled=!1;e.un(E,"mousedown",a)}},isFullScreen:function(){return this._fullscreen},
postRender:function(){a.prototype.postRender.call(this);for(var b=0;b<this.toolbars.length;b++)this.toolbars[b].postRender();var c=this,d,e=s.editor.dom.domUtils,f=function(){clearTimeout(d);d=setTimeout(function(){c._updateFullScreen()})};e.on(window,"resize",f);c.addListener("destroy",function(){e.un(window,"resize",f);clearTimeout(d)})},showToolbarMsg:function(a,b){this.getDom("toolbarmsg_label").innerHTML=a;this.getDom("toolbarmsg").style.display="";b||(this.getDom("upload_dialog").style.display=
"none")},hideToolbarMsg:function(){this.getDom("toolbarmsg").style.display="none"},mapUrl:function(a){return a?a.replace("~/",this.editor.options.UEDITOR_HOME_URL||""):""},triggerLayout:function(){var a=this.getDom();a.style.zoom="1"==a.style.zoom?"100%":"1"}};c.inherits(d,s.editor.ui.UIBase);var g={};UE.ui.Editor=function(a){var b=new UE.Editor(a);b.options.editor=b;c.loadFile(document,{href:b.options.themePath+b.options.theme+"/css/ueditor.css",tag:"link",type:"text/css",rel:"stylesheet"});var f=
b.render;b.render=function(a){a.constructor===String&&(b.key=a,g[a]=b);c.domReady(function(){function c(){b.setOpt({labelMap:b.options.labelMap||b.getLang("labelMap")});new d(b.options);if(a&&(a.constructor===String&&(a=document.getElementById(a)),a&&a.getAttribute("name")&&(b.options.textarea=a.getAttribute("name")),a&&/script|textarea/ig.test(a.tagName))){var g=document.createElement("div");a.parentNode.insertBefore(g,a);var h=a.value||a.innerHTML;b.options.initialContent=/^[\t\r\n ]*$/.test(h)?
b.options.initialContent:h.replace(/>[\n\r\t]+([ ]{4})+/g,">").replace(/[\n\r\t]+([ ]{4})+</g,"<").replace(/>[\n\r\t]+</g,"><");a.className&&(g.className=a.className);a.style.cssText&&(g.style.cssText=a.style.cssText);/textarea/i.test(a.tagName)?(b.textarea=a,b.textarea.style.display="none"):a.parentNode.removeChild(a);a.id&&(g.id=a.id,e.removeAttributes(a,"id"));a=g;a.innerHTML=""}e.addClass(a,"edui-"+b.options.theme);b.ui.render(a);g=b.options;b.container=b.ui.getDom();for(var h=e.findParents(a,
!0),l=[],p=0,q;q=h[p];p++)l[p]=q.style.display,q.style.display="block";g.initialFrameWidth?g.minFrameWidth=g.initialFrameWidth:(g.minFrameWidth=g.initialFrameWidth=a.offsetWidth,p=a.style.width,/%$/.test(p)&&(g.initialFrameWidth=p));g.initialFrameHeight?g.minFrameHeight=g.initialFrameHeight:g.initialFrameHeight=g.minFrameHeight=a.offsetHeight;for(p=0;q=h[p];p++)q.style.display=l[p];a.style.height&&(a.style.height="");b.container.style.width=g.initialFrameWidth+(/%$/.test(g.initialFrameWidth)?"":"px");
b.container.style.zIndex=g.zIndex;f.call(b,b.ui.getDom("iframeholder"));b.fireEvent("afteruiready")}b.langIsReady?c():b.addListener("langReady",c)})};return b};UE.getEditor=function(a,b){var c=g[a];c||(c=g[a]=new UE.ui.Editor(b),c.render(a));return c};UE.delEditor=function(a){var b;if(b=g[a])b.key&&b.destroy(),delete g[a]};UE.registerUI=function(a,b,d,e){c.each(a.split(/\s+/),function(a){UE._customizeUI[a]={id:e,execFn:b,index:d}})}})();UE.registerUI("message",function(d){function c(){var b=f.ui.getDom("toolbarbox");
b&&(a.style.top=b.offsetHeight+3+"px");a.style.zIndex=Math.max(f.options.zIndex,f.iframe.style.zIndex)+1}var b=s.editor.ui.Message,a,e=[],f=d;f.addListener("ready",function(){a=document.getElementById(f.ui.id+"_message_holder");c();setTimeout(function(){c()},500)});f.addListener("showmessage",function(d,l){l=p.isString(l)?{content:l}:l;var k=new b({timeout:l.timeout,type:l.type,content:l.content,keepshow:l.keepshow,editor:f}),m=l.id||"msg_"+(+new Date).toString(36);k.render(a);e[m]=k;k.reset(l);c();
return m});f.addListener("updatemessage",function(b,c,d){d=p.isString(d)?{content:d}:d;b=e[c];b.render(a);b&&b.reset(d)});f.addListener("hidemessage",function(a,b){var c=e[b];c&&c.hide()})});UE.registerUI("autosave",function(d){var c=null,b=null;d.on("afterautosave",function(){clearTimeout(c);c=setTimeout(function(){b&&d.trigger("hidemessage",b);b=d.trigger("showmessage",{content:d.getLang("autosave.success"),timeout:2E3})},2E3)})})})();
/**
 * Created with JetBrains PhpStorm.
 * User: taoqili
 * Date: 12-6-12
 * Time: 下午5:02
 * To change this template use File | Settings | File Templates.
 */
UE.I18N['zh-cn'] = {
    'labelMap':{
        'anchor':'锚点', 'undo':'撤销', 'redo':'重做', 'bold':'加粗', 'indent':'首行缩进', 'snapscreen':'截图',
        'italic':'斜体', 'underline':'下划线', 'strikethrough':'删除线', 'subscript':'下标','fontborder':'字符边框',
        'superscript':'上标', 'formatmatch':'格式刷', 'source':'源代码', 'blockquote':'引用',
        'pasteplain':'纯文本粘贴模式', 'selectall':'全选', 'print':'打印', 'preview':'预览',
        'horizontal':'分隔线', 'removeformat':'清除格式', 'time':'时间', 'date':'日期',
        'unlink':'取消链接', 'insertrow':'前插入行', 'insertcol':'前插入列', 'mergeright':'右合并单元格', 'mergedown':'下合并单元格',
        'deleterow':'删除行', 'deletecol':'删除列', 'splittorows':'拆分成行',
        'splittocols':'拆分成列', 'splittocells':'完全拆分单元格','deletecaption':'删除表格标题','inserttitle':'插入标题',
        'mergecells':'合并多个单元格', 'deletetable':'删除表格', 'cleardoc':'清空文档','insertparagraphbeforetable':"表格前插入行",'insertcode':'代码语言',
        'fontfamily':'字体', 'fontsize':'字号', 'paragraph':'段落格式', 'simpleupload':'单图上传', 'insertimage':'多图上传','edittable':'表格属性','edittd':'单元格属性', 'link':'超链接',
        'emotion':'表情', 'spechars':'特殊字符', 'searchreplace':'查询替换', 'map':'Baidu地图', 'gmap':'Google地图',
        'insertvideo':'视频', 'help':'帮助', 'justifyleft':'居左对齐', 'justifyright':'居右对齐', 'justifycenter':'居中对齐',
        'justifyjustify':'两端对齐', 'forecolor':'字体颜色', 'backcolor':'背景色', 'insertorderedlist':'有序列表',
        'insertunorderedlist':'无序列表', 'fullscreen':'全屏', 'directionalityltr':'从左向右输入', 'directionalityrtl':'从右向左输入',
        'rowspacingtop':'段前距', 'rowspacingbottom':'段后距',  'pagebreak':'分页', 'insertframe':'插入Iframe', 'imagenone':'默认',
        'imageleft':'左浮动', 'imageright':'右浮动', 'attachment':'附件', 'imagecenter':'居中', 'wordimage':'图片转存',
        'lineheight':'行间距','edittip' :'编辑提示','customstyle':'自定义标题', 'autotypeset':'自动排版',
        'webapp':'百度应用','touppercase':'字母大写', 'tolowercase':'字母小写','background':'背景','template':'模板','scrawl':'涂鸦',
        'music':'音乐','inserttable':'插入表格','drafts': '从草稿箱加载', 'charts': '图表'
    },
    'insertorderedlist':{
        'num':'1,2,3...',
        'num1':'1),2),3)...',
        'num2':'(1),(2),(3)...',
        'cn':'一,二,三....',
        'cn1':'一),二),三)....',
        'cn2':'(一),(二),(三)....',
        'decimal':'1,2,3...',
        'lower-alpha':'a,b,c...',
        'lower-roman':'i,ii,iii...',
        'upper-alpha':'A,B,C...',
        'upper-roman':'I,II,III...'
    },
    'insertunorderedlist':{
        'circle':'○ 大圆圈',
        'disc':'● 小黑点',
        'square':'■ 小方块 ',
        'dash' :'— 破折号',
        'dot':' 。 小圆圈'
    },
    'paragraph':{'p':'段落', 'h1':'标题 1', 'h2':'标题 2', 'h3':'标题 3', 'h4':'标题 4', 'h5':'标题 5', 'h6':'标题 6'},
    'fontfamily':{
        'songti':'宋体',
        'kaiti':'楷体',
        'heiti':'黑体',
        'lishu':'隶书',
        'yahei':'微软雅黑',
        'andaleMono':'andale mono',
        'arial': 'arial',
        'arialBlack':'arial black',
        'comicSansMs':'comic sans ms',
        'impact':'impact',
        'timesNewRoman':'times new roman'
    },
    'customstyle':{
        'tc':'标题居中',
        'tl':'标题居左',
        'im':'强调',
        'hi':'明显强调'
    },
    'autoupload': {
        'exceedSizeError': '文件大小超出限制',
        'exceedTypeError': '文件格式不允许',
        'jsonEncodeError': '服务器返回格式错误',
        'loading':"正在上传...",
        'loadError':"上传错误",
        'errorLoadConfig': '后端配置项没有正常加载，上传插件不能正常使用！'
    },
    'simpleupload':{
        'exceedSizeError': '文件大小超出限制',
        'exceedTypeError': '文件格式不允许',
        'jsonEncodeError': '服务器返回格式错误',
        'loading':"正在上传...",
        'loadError':"上传错误",
        'errorLoadConfig': '后端配置项没有正常加载，上传插件不能正常使用！'
    },
    'elementPathTip':"元素路径",
    'wordCountTip':"字数统计",
    'wordCountMsg':'当前已输入{#count}个字符, 您还可以输入{#leave}个字符。 ',
    'wordOverFlowMsg':'<span style="color:red;">字数超出最大允许值，服务器可能拒绝保存！</span>',
    'ok':"确认",
    'cancel':"取消",
    'closeDialog':"关闭对话框",
    'tableDrag':"表格拖动必须引入uiUtils.js文件！",
    'autofloatMsg':"工具栏浮动依赖编辑器UI，您首先需要引入UI文件!",
    'loadconfigError': '获取后台配置项请求出错，上传功能将不能正常使用！',
    'loadconfigFormatError': '后台配置项返回格式出错，上传功能将不能正常使用！',
    'loadconfigHttpError': '请求后台配置项http错误，上传功能将不能正常使用！',
    'snapScreen_plugin':{
        'browserMsg':"仅支持IE浏览器！",
        'callBackErrorMsg':"服务器返回数据有误，请检查配置项之后重试。",
        'uploadErrorMsg':"截图上传失败，请检查服务器端环境! "
    },
    'insertcode':{
        'as3':'ActionScript 3',
        'bash':'Bash/Shell',
        'cpp':'C/C++',
        'css':'CSS',
        'cf':'ColdFusion',
        'c#':'C#',
        'delphi':'Delphi',
        'diff':'Diff',
        'erlang':'Erlang',
        'groovy':'Groovy',
        'html':'HTML',
        'java':'Java',
        'jfx':'JavaFX',
        'js':'JavaScript',
        'pl':'Perl',
        'php':'PHP',
        'plain':'Plain Text',
        'ps':'PowerShell',
        'python':'Python',
        'ruby':'Ruby',
        'scala':'Scala',
        'sql':'SQL',
        'vb':'Visual Basic',
        'xml':'XML'
    },
    'confirmClear':"确定清空当前文档么？",
    'contextMenu':{
        'delete':"删除",
        'selectall':"全选",
        'deletecode':"删除代码",
        'cleardoc':"清空文档",
        'confirmclear':"确定清空当前文档么？",
        'unlink':"删除超链接",
        'paragraph':"段落格式",
        'edittable':"表格属性",
        'aligntd':"单元格对齐方式",
        'aligntable':'表格对齐方式',
        'tableleft':'左浮动',
        'tablecenter':'居中显示',
        'tableright':'右浮动',
        'edittd':"单元格属性",
        'setbordervisible':'设置表格边线可见',
        'justifyleft':'左对齐',
        'justifyright':'右对齐',
        'justifycenter':'居中对齐',
        'justifyjustify':'两端对齐',
        'table':"表格",
        'inserttable':'插入表格',
        'deletetable':"删除表格",
        'insertparagraphbefore':"前插入段落",
        'insertparagraphafter':'后插入段落',
        'deleterow':"删除当前行",
        'deletecol':"删除当前列",
        'insertrow':"前插入行",
        'insertcol':"左插入列",
        'insertrownext':'后插入行',
        'insertcolnext':'右插入列',
        'insertcaption':'插入表格名称',
        'deletecaption':'删除表格名称',
        'inserttitle':'插入表格标题行',
        'deletetitle':'删除表格标题行',
        'inserttitlecol':'插入表格标题列',
        'deletetitlecol':'删除表格标题列',
        'averageDiseRow':'平均分布各行',
        'averageDisCol':'平均分布各列',
        'mergeright':"向右合并",
        'mergeleft':"向左合并",
        'mergedown':"向下合并",
        'mergecells':"合并单元格",
        'splittocells':"完全拆分单元格",
        'splittocols':"拆分成列",
        'splittorows':"拆分成行",
        'tablesort':'表格排序',
        'enablesort':'设置表格可排序',
        'disablesort':'取消表格可排序',
        'reversecurrent':'逆序当前',
        'orderbyasc':'按ASCII字符升序',
        'reversebyasc':'按ASCII字符降序',
        'orderbynum':'按数值大小升序',
        'reversebynum':'按数值大小降序',
        'borderbk':'边框底纹',
        'setcolor':'表格隔行变色',
        'unsetcolor':'取消表格隔行变色',
        'setbackground':'选区背景隔行',
        'unsetbackground':'取消选区背景',
        'redandblue':'红蓝相间',
        'threecolorgradient':'三色渐变',
        'copy':"复制(Ctrl + c)",
        'copymsg': "浏览器不支持,请使用 'Ctrl + c'",
        'paste':"粘贴(Ctrl + v)",
         'pastemsg': "浏览器不支持,请使用 'Ctrl + v'"
    },
    'copymsg': "浏览器不支持,请使用 'Ctrl + c'",
    'pastemsg': "浏览器不支持,请使用 'Ctrl + v'",
    'anthorMsg':"链接",
    'clearColor':'清空颜色',
    'standardColor':'标准颜色',
    'themeColor':'主题颜色',
    'property':'属性',
    'default':'默认',
    'modify':'修改',
    'justifyleft':'左对齐',
    'justifyright':'右对齐',
    'justifycenter':'居中',
    'justify':'默认',
    'clear':'清除',
    'anchorMsg':'锚点',
    'delete':'删除',
    'clickToUpload':"点击上传",
    'unset':'尚未设置语言文件',
    't_row':'行',
    't_col':'列',
    'more':'更多',
    'pasteOpt':'粘贴选项',
    'pasteSourceFormat':"保留源格式",
    'tagFormat':'只保留标签',
    'pasteTextFormat':'只保留文本',
    'autoTypeSet':{
        'mergeLine':"合并空行",
        'delLine':"清除空行",
        'removeFormat':"清除格式",
        'indent':"首行缩进",
        'alignment':"对齐方式",
        'imageFloat':"图片浮动",
        'removeFontsize':"清除字号",
        'removeFontFamily':"清除字体",
        'removeHtml':"清除冗余HTML代码",
        'pasteFilter':"粘贴过滤",
        'run':"执行",
        'symbol':'符号转换',
        'bdc2sb':'全角转半角',
        'tobdc':'半角转全角'
    },

    'background':{
        'static':{
            'lang_background_normal':'背景设置',
            'lang_background_local':'在线图片',
            'lang_background_set':'选项',
            'lang_background_none':'无背景色',
            'lang_background_colored':'有背景色',
            'lang_background_color':'颜色设置',
            'lang_background_netimg':'网络图片',
            'lang_background_align':'对齐方式',
            'lang_background_position':'精确定位',
            'repeatType':{'options':["居中", "横向重复", "纵向重复", "平铺","自定义"]}

        },
        'noUploadImage':"当前未上传过任何图片！",
        'toggleSelect':"单击可切换选中状态\n原图尺寸: "
    },
    //===============dialog i18N=======================
    'insertimage':{
        'static':{
            'lang_tab_remote':"插入图片", //节点
            'lang_tab_upload':"本地上传",
            'lang_tab_online':"在线管理",
            'lang_tab_search':"图片搜索",
            'lang_input_url':"地 址：",
            'lang_input_size':"大 小：",
            'lang_input_width':"宽度",
            'lang_input_height':"高度",
            'lang_input_border':"边 框：",
            'lang_input_vhspace':"边 距：",
            'lang_input_title':"描 述：",
            'lang_input_align':'图片浮动方式：',
            'lang_imgLoading':"　图片加载中……",
            'lang_start_upload':"开始上传",
            'lock':{'title':"锁定宽高比例"}, //属性
            'searchType':{'title':"图片类型", 'options':["新闻", "壁纸", "表情", "头像"]}, //select的option
            'searchTxt':{'value':"请输入搜索关键词"},
            'searchBtn':{'value':"百度一下"},
            'searchReset':{'value':"清空搜索"},
            'noneAlign':{'title':'无浮动'},
            'leftAlign':{'title':'左浮动'},
            'rightAlign':{'title':'右浮动'},
            'centerAlign':{'title':'居中独占一行'}
        },
        'uploadSelectFile':'点击选择图片',
        'uploadAddFile':'继续添加',
        'uploadStart':'开始上传',
        'uploadPause':'暂停上传',
        'uploadContinue':'继续上传',
        'uploadRetry':'重试上传',
        'uploadDelete':'删除',
        'uploadTurnLeft':'向左旋转',
        'uploadTurnRight':'向右旋转',
        'uploadPreview':'预览中',
        'uploadNoPreview':'不能预览',
        'updateStatusReady': '选中_张图片，共_KB。',
        'updateStatusConfirm': '已成功上传_张照片，_张照片上传失败',
        'updateStatusFinish': '共_张（_KB），_张上传成功',
        'updateStatusError': '，_张上传失败。',
        'errorNotSupport': 'WebUploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器。',
        'errorLoadConfig': '后端配置项没有正常加载，上传插件不能正常使用！',
        'errorExceedSize':'文件大小超出',
        'errorFileType':'文件格式不允许',
        'errorInterrupt':'文件传输中断',
        'errorUploadRetry':'上传失败，请重试',
        'errorHttp':'http请求错误',
        'errorServerUpload':'服务器返回出错',
        'remoteLockError':"宽高不正确,不能所定比例",
        'numError':"请输入正确的长度或者宽度值！例如：123，400",
        'imageUrlError':"不允许的图片格式或者图片域！",
        'imageLoadError':"图片加载失败！请检查链接地址或网络状态！",
        'searchRemind':"请输入搜索关键词",
        'searchLoading':"图片加载中，请稍后……",
        'searchRetry':" :( ，抱歉，没有找到图片！请重试一次！"
    },
    'attachment':{
        'static':{
            'lang_tab_upload': '上传附件',
            'lang_tab_online': '在线附件',
            'lang_start_upload':"开始上传",
            'lang_drop_remind':"可以将文件拖到这里，单次最多可选100个文件"
        },
        'uploadSelectFile':'点击选择文件',
        'uploadAddFile':'继续添加',
        'uploadStart':'开始上传',
        'uploadPause':'暂停上传',
        'uploadContinue':'继续上传',
        'uploadRetry':'重试上传',
        'uploadDelete':'删除',
        'uploadTurnLeft':'向左旋转',
        'uploadTurnRight':'向右旋转',
        'uploadPreview':'预览中',
        'updateStatusReady': '选中_个文件，共_KB。',
        'updateStatusConfirm': '已成功上传_个文件，_个文件上传失败',
        'updateStatusFinish': '共_个（_KB），_个上传成功',
        'updateStatusError': '，_张上传失败。',
        'errorNotSupport': 'WebUploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器。',
        'errorLoadConfig': '后端配置项没有正常加载，上传插件不能正常使用！',
        'errorExceedSize':'文件大小超出',
        'errorFileType':'文件格式不允许',
        'errorInterrupt':'文件传输中断',
        'errorUploadRetry':'上传失败，请重试',
        'errorHttp':'http请求错误',
        'errorServerUpload':'服务器返回出错'
    },
    'insertvideo':{
        'static':{
            'lang_tab_insertV':"插入视频",
            'lang_tab_searchV':"搜索视频",
            'lang_tab_uploadV':"上传视频",
            'lang_video_url':"视频网址",
            'lang_video_size':"视频尺寸",
            'lang_videoW':"宽度",
            'lang_videoH':"高度",
            'lang_alignment':"对齐方式",
            'videoSearchTxt':{'value':"请输入搜索关键字！"},
            'videoType':{'options':["全部", "热门", "娱乐", "搞笑", "体育", "科技", "综艺"]},
            'videoSearchBtn':{'value':"百度一下"},
            'videoSearchReset':{'value':"清空结果"},

            'lang_input_fileStatus':' 当前未上传文件',
            'startUpload':{'style':"background:url(upload.png) no-repeat;"},

            'lang_upload_size':"视频尺寸",
            'lang_upload_width':"宽度",
            'lang_upload_height':"高度",
            'lang_upload_alignment':"对齐方式",
            'lang_format_advice':"建议使用mp4格式."

        },
        'numError':"请输入正确的数值，如123,400",
        'floatLeft':"左浮动",
        'floatRight':"右浮动",
        '"default"':"默认",
        'block':"独占一行",
        'urlError':"输入的视频地址有误，请检查后再试！",
        'loading':" &nbsp;视频加载中，请等待……",
        'clickToSelect':"点击选中",
        'goToSource':'访问源视频',
        'noVideo':" &nbsp; &nbsp;抱歉，找不到对应的视频，请重试！",

        'browseFiles':'浏览文件',
        'uploadSuccess':'上传成功!',
        'delSuccessFile':'从成功队列中移除',
        'delFailSaveFile':'移除保存失败文件',
        'statusPrompt':' 个文件已上传！ ',
        'flashVersionError':'当前Flash版本过低，请更新FlashPlayer后重试！',
        'flashLoadingError':'Flash加载失败!请检查路径或网络状态',
        'fileUploadReady':'等待上传……',
        'delUploadQueue':'从上传队列中移除',
        'limitPrompt1':'单次不能选择超过',
        'limitPrompt2':'个文件！请重新选择！',
        'delFailFile':'移除失败文件',
        'fileSizeLimit':'文件大小超出限制！',
        'emptyFile':'空文件无法上传！',
        'fileTypeError':'文件类型不允许！',
        'unknownError':'未知错误！',
        'fileUploading':'上传中，请等待……',
        'cancelUpload':'取消上传',
        'netError':'网络错误',
        'failUpload':'上传失败!',
        'serverIOError':'服务器IO错误！',
        'noAuthority':'无权限！',
        'fileNumLimit':'上传个数限制',
        'failCheck':'验证失败，本次上传被跳过！',
        'fileCanceling':'取消中，请等待……',
        'stopUploading':'上传已停止……',

        'uploadSelectFile':'点击选择文件',
        'uploadAddFile':'继续添加',
        'uploadStart':'开始上传',
        'uploadPause':'暂停上传',
        'uploadContinue':'继续上传',
        'uploadRetry':'重试上传',
        'uploadDelete':'删除',
        'uploadTurnLeft':'向左旋转',
        'uploadTurnRight':'向右旋转',
        'uploadPreview':'预览中',
        'updateStatusReady': '选中_个文件，共_KB。',
        'updateStatusConfirm': '成功上传_个，_个失败',
        'updateStatusFinish': '共_个(_KB)，_个成功上传',
        'updateStatusError': '，_张上传失败。',
        'errorNotSupport': 'WebUploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器。',
        'errorLoadConfig': '后端配置项没有正常加载，上传插件不能正常使用！',
        'errorExceedSize':'文件大小超出',
        'errorFileType':'文件格式不允许',
        'errorInterrupt':'文件传输中断',
        'errorUploadRetry':'上传失败，请重试',
        'errorHttp':'http请求错误',
        'errorServerUpload':'服务器返回出错'
    },
    'webapp':{
        'tip1':"本功能由百度APP提供，如看到此页面，请各位站长首先申请百度APPKey!",
        'tip2':"申请完成之后请至ueditor.config.js中配置获得的appkey! ",
        'applyFor':"点此申请",
        'anthorApi':"百度API"
    },
    'template':{
        'static':{
            'lang_template_bkcolor':'背景颜色',
            'lang_template_clear' : '保留原有内容',
            'lang_template_select' : '选择模板'
        },
        'blank':"空白文档",
        'blog':"博客文章",
        'resume':"个人简历",
        'richText':"图文混排",
        'sciPapers':"科技论文"


    },
    'scrawl':{
        'static':{
            'lang_input_previousStep':"上一步",
            'lang_input_nextsStep':"下一步",
            'lang_input_clear':'清空',
            'lang_input_addPic':'添加背景',
            'lang_input_ScalePic':'缩放背景',
            'lang_input_removePic':'删除背景',
            'J_imgTxt':{title:'添加背景图片'}
        },
        'noScarwl':"尚未作画，白纸一张~",
        'scrawlUpLoading':"涂鸦上传中,别急哦~",
        'continueBtn':"继续",
        'imageError':"糟糕，图片读取失败了！",
        'backgroundUploading':'背景图片上传中,别急哦~'
    },
    'music':{
        'static':{
            'lang_input_tips':"输入歌手/歌曲/专辑，搜索您感兴趣的音乐！",
            'J_searchBtn':{value:'搜索歌曲'}
        },
        'emptyTxt':'未搜索到相关音乐结果，请换一个关键词试试。',
        'chapter':'歌曲',
        'singer':'歌手',
        'special':'专辑',
        'listenTest':'试听'
    },
    'anchor':{
        'static':{
            'lang_input_anchorName':'锚点名字：'
        }
    },
    'charts':{
        'static':{
            'lang_data_source':'数据源：',
            'lang_chart_format': '图表格式：',
            'lang_data_align': '数据对齐方式',
            'lang_chart_align_same': '数据源与图表X轴Y轴一致',
            'lang_chart_align_reverse': '数据源与图表X轴Y轴相反',
            'lang_chart_title': '图表标题',
            'lang_chart_main_title': '主标题：',
            'lang_chart_sub_title': '子标题：',
            'lang_chart_x_title': 'X轴标题：',
            'lang_chart_y_title': 'Y轴标题：',
            'lang_chart_tip': '提示文字',
            'lang_cahrt_tip_prefix': '提示文字前缀：',
            'lang_cahrt_tip_description': '仅饼图有效， 当鼠标移动到饼图中相应的块上时，提示框内的文字的前缀',
            'lang_chart_data_unit': '数据单位',
            'lang_chart_data_unit_title': '单位：',
            'lang_chart_data_unit_description': '显示在每个数据点上的数据的单位， 比如： 温度的单位 ℃',
            'lang_chart_type': '图表类型：',
            'lang_prev_btn': '上一个',
            'lang_next_btn': '下一个'
        }
    },
    'emotion':{
        'static':{
            'lang_input_choice':'精选',
            'lang_input_Tuzki':'兔斯基',
            'lang_input_BOBO':'BOBO',
            'lang_input_lvdouwa':'绿豆蛙',
            'lang_input_babyCat':'baby猫',
            'lang_input_bubble':'泡泡',
            'lang_input_youa':'有啊'
        }
    },
    'gmap':{
        'static':{
            'lang_input_address':'地址',
            'lang_input_search':'搜索',
            'address':{value:"北京"}
        },
        searchError:'无法定位到该地址!'
    },
    'help':{
        'static':{
            'lang_input_about':'关于UEditor',
            'lang_input_shortcuts':'快捷键',
            'lang_input_introduction':'UEditor是由百度web前端研发部开发的所见即所得富文本web编辑器，具有轻量，可定制，注重用户体验等特点。开源基于BSD协议，允许自由使用和修改代码。',
            'lang_Txt_shortcuts':'快捷键',
            'lang_Txt_func':'功能',
            'lang_Txt_bold':'给选中字设置为加粗',
            'lang_Txt_copy':'复制选中内容',
            'lang_Txt_cut':'剪切选中内容',
            'lang_Txt_Paste':'粘贴',
            'lang_Txt_undo':'重新执行上次操作',
            'lang_Txt_redo':'撤销上一次操作',
            'lang_Txt_italic':'给选中字设置为斜体',
            'lang_Txt_underline':'给选中字加下划线',
            'lang_Txt_selectAll':'全部选中',
            'lang_Txt_visualEnter':'软回车',
            'lang_Txt_fullscreen':'全屏'
        }
    },
    'insertframe':{
        'static':{
            'lang_input_address':'地址：',
            'lang_input_width':'宽度：',
            'lang_input_height':'高度：',
            'lang_input_isScroll':'允许滚动条：',
            'lang_input_frameborder':'显示框架边框：',
            'lang_input_alignMode':'对齐方式：',
            'align':{title:"对齐方式", options:["默认", "左对齐", "右对齐", "居中"]}
        },
        'enterAddress':'请输入地址!'
    },
    'link':{
        'static':{
            'lang_input_text':'文本内容：',
            'lang_input_url':'链接地址：',
            'lang_input_title':'标题：',
            'lang_input_target':'是否在新窗口打开：'
        },
        'validLink':'只支持选中一个链接时生效',
        'httpPrompt':'您输入的超链接中不包含http等协议名称，默认将为您添加http://前缀'
    },
    'map':{
        'static':{
            lang_city:"城市",
            lang_address:"地址",
            city:{value:"北京"},
            lang_search:"搜索",
            lang_dynamicmap:"插入动态地图"
        },
        cityMsg:"请选择城市",
        errorMsg:"抱歉，找不到该位置！"
    },
    'searchreplace':{
        'static':{
            lang_tab_search:"查找",
            lang_tab_replace:"替换",
            lang_search1:"查找",
            lang_search2:"查找",
            lang_replace:"替换",
            lang_searchReg:'支持正则表达式，添加前后斜杠标示为正则表达式，例如“/表达式/”',
            lang_searchReg1:'支持正则表达式，添加前后斜杠标示为正则表达式，例如“/表达式/”',
            lang_case_sensitive1:"区分大小写",
            lang_case_sensitive2:"区分大小写",
            nextFindBtn:{value:"下一个"},
            preFindBtn:{value:"上一个"},
            nextReplaceBtn:{value:"下一个"},
            preReplaceBtn:{value:"上一个"},
            repalceBtn:{value:"替换"},
            repalceAllBtn:{value:"全部替换"}
        },
        getEnd:"已经搜索到文章末尾！",
        getStart:"已经搜索到文章头部",
        countMsg:"总共替换了{#count}处！"
    },
    'snapscreen':{
        'static':{
            lang_showMsg:"截图功能需要首先安装UEditor截图插件！ ",
            lang_download:"点此下载",
            lang_step1:"第一步，下载UEditor截图插件并运行安装。",
            lang_step2:"第二步，插件安装完成后即可使用，如不生效，请重启浏览器后再试！"
        }
    },
    'spechars':{
        'static':{},
        tsfh:"特殊字符",
        lmsz:"罗马字符",
        szfh:"数学字符",
        rwfh:"日文字符",
        xlzm:"希腊字母",
        ewzm:"俄文字符",
        pyzm:"拼音字母",
        yyyb:"英语音标",
        zyzf:"其他"
    },
    'edittable':{
        'static':{
            'lang_tableStyle':'表格样式',
            'lang_insertCaption':'添加表格名称行',
            'lang_insertTitle':'添加表格标题行',
            'lang_insertTitleCol':'添加表格标题列',
            'lang_orderbycontent':"使表格内容可排序",
            'lang_tableSize':'自动调整表格尺寸',
            'lang_autoSizeContent':'按表格文字自适应',
            'lang_autoSizePage':'按页面宽度自适应',
            'lang_example':'示例',
            'lang_borderStyle':'表格边框',
            'lang_color':'颜色:'
        },
        captionName:'表格名称',
        titleName:'标题',
        cellsName:'内容',
        errorMsg:'有合并单元格，不可排序'
    },
    'edittip':{
        'static':{
            lang_delRow:'删除整行',
            lang_delCol:'删除整列'
        }
    },
    'edittd':{
        'static':{
            lang_tdBkColor:'背景颜色:'
        }
    },
    'formula':{
        'static':{
        }
    },
    'wordimage':{
        'static':{
            lang_resave:"转存步骤",
            uploadBtn:{src:"upload.png",alt:"上传"},
            clipboard:{style:"background: url(copy.png) -153px -1px no-repeat;"},
            lang_step:"1、点击顶部复制按钮，将地址复制到剪贴板；2、点击添加照片按钮，在弹出的对话框中使用Ctrl+V粘贴地址；3、点击打开后选择图片上传流程。"
        },
        'fileType':"图片",
        'flashError':"FLASH初始化失败，请检查FLASH插件是否正确安装！",
        'netError':"网络连接错误，请重试！",
        'copySuccess':"图片地址已经复制！",
        'flashI18n':{} //留空默认中文
    },
    'autosave': {
        'saving':'保存中...',
        'success':'本地保存成功'
    }
};
