/***********Dependancies***********/
// /*jQuery*/
// !function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
// },_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
// },removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});





/*TweenMax*/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=[].slice,r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals.isSelector,o=i._internals.isArray,h=r.prototype=i.to({},.1,{}),l=[];r.version="1.11.0",h.constructor=r,h.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.ticker=i.ticker,h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},h.updateTo=function(t,e){var s,r=this.ratio;e&&this.timeline&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted)if(e)this._initted=!1;else if(this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var n=this._time;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var a,o=1/(1-r),h=this._firstPT;h;)a=h.s+h.c,h.c*=o,h.s=a-h.c,h=h._next}return this},h.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,a,o,h,_,u,p,f=this._dirty?this.totalDuration():this._totalDuration,c=this._time,m=this._totalTime,d=this._cycle,g=this._duration;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete"),0===g&&(p=this._rawPrevTime,(0===t||0>p||p===n)&&p!==t&&(i=!0,p>n&&(r="onReverseComplete")),this._rawPrevTime=p=!e||t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===g&&this._rawPrevTime>n)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===g&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=p=!e||t?t:n)):this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(o=g+this._repeatDelay,this._cycle=this._totalTime/o>>0,0!==this._cycle&&this._cycle===this._totalTime/o&&this._cycle--,this._time=this._totalTime-this._cycle*o,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:0>this._time&&(this._time=0)),this._easeType?(h=this._time/g,_=this._easeType,u=this._easePower,(1===_||3===_&&h>=.5)&&(h=1-h),3===_&&(h*=2),1===u?h*=h:2===u?h*=h*h:3===u?h*=h*h*h:4===u&&(h*=h*h*h*h),this.ratio=1===_?1-h:2===_?h:.5>this._time/g?h/2:1-h/2):this.ratio=this._ease.getRatio(this._time/g)),c===this._time&&!i&&d===this._cycle)return m!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||l)),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/g):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==c&&t>=0&&(this._active=!0),0===m&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||l))),a=this._firstPT;a;)a.f?a.t[a.p](a.c*this.ratio+a.s):a.t[a.p]=a.c*this.ratio+a.s,a=a._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||l)),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||l)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||l),0===g&&this._rawPrevTime!==p&&(this._rawPrevTime=0)))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,h,_,u,p){h=h||0;var f,c,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),_.apply(p||this,u||l)};for(o(t)||("string"==typeof t&&(t=i.selector(t)||t),a(t)&&(t=s.call(t,0))),f=t.length,m=0;f>m;m++){c={};for(d in n)c[d]=n[d];c.delay=g,m===f-1&&_&&(c.onComplete=y),v[m]=new r(t[m],e,c),g+=h}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var _=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(_(n,e)),r=s.length),n=n._next;return s},u=r.getAllTweens=function(e){return _(t._rootTimeline,e).concat(_(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=u(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,h,l,_,u,p=i._tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),a(t)&&(t=s(t,0)),o(t))for(_=t.length;--_>-1;)r.killChildTweensOf(t[_],e);else{n=[];for(l in p)for(h=p[l].target.parentNode;h;)h===t&&(n=n.concat(p[l].tweens)),h=h.parentNode;for(u=n.length,_=0;u>_;_++)e&&n[_].totalTime(n[_].totalDuration()),n[_]._enabled(!1,!1)}}};var p=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=u(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){p(!0,t,e,i)},r.resumeAll=function(t,e,i){p(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},h.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},h.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},h.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},h.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},h.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},h.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},h.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},h.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],a(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));a(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals.isSelector,a=i._internals.isArray,o=[],h=function(t){var e,i={};for(e in t)i[e]=t[e];return i},l=function(t,e,i,s){t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||o)},_=o.slice,u=s.prototype=new e;return s.version="1.11.0",u.constructor=s,u.kill()._gc=!1,u.to=function(t,e,s,r){return e?this.add(new i(t,e,s),r):this.set(t,s,r)},u.from=function(t,e,s,r){return this.add(i.from(t,e,s),r)},u.fromTo=function(t,e,s,r,n){return e?this.add(i.fromTo(t,e,s,r),n):this.set(t,r,n)},u.staggerTo=function(t,e,r,a,o,l,u,p){var f,c=new s({onComplete:l,onCompleteParams:u,onCompleteScope:p});for("string"==typeof t&&(t=i.selector(t)||t),n(t)&&(t=_.call(t,0)),a=a||0,f=0;t.length>f;f++)r.startAt&&(r.startAt=h(r.startAt)),c.to(t[f],e,h(r),f*a);return this.add(c,o)},u.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},u.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},u.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},u.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},u.add=function(r,n,o,h){var l,_,u,p,f,c;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&a(r)){for(o=o||"normal",h=h||0,l=n,_=r.length,u=0;_>u;u++)a(p=r[u])&&(p=new s({tweens:p})),this.add(p,l),"string"!=typeof p&&"function"!=typeof p&&("sequence"===o?l=p._startTime+p.totalDuration()/p._timeScale:"start"===o&&(p._startTime-=p.delay())),l+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),this._gc&&!this._paused&&this._duration<this.duration())for(f=this,c=f.rawTime()>r._startTime;f._gc&&f._timeline;)f._timeline.smoothChildTiming&&c?f.totalTime(f._totalTime,!0):f._enabled(!0,!1),f=f._timeline;return this},u.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&a(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},u._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=0,this},u.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},u.insert=u.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},u.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},u.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},u.addPause=function(t,e,i,s){return this.call(l,["{self}",e,i,s],this,t)},u.removeLabel=function(t){return delete this._labels[t],this},u.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},u._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&a(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},u.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},u.stop=function(){return this.paused(!0)},u.gotoAndPlay=function(t,e){return this.play(t,e)},u.gotoAndStop=function(t,e){return this.pause(t,e)},u.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,h,l,_=this._dirty?this.totalDuration():this._totalDuration,u=this._time,p=this._startTime,f=this._timeScale,c=this._paused;if(t>=_?(this._totalTime=this._time=_,this._reversed||this._hasPausedChild()||(n=!0,h="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(l=!0,this._rawPrevTime>r&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t?t:r,t=_+1e-6):1e-7>t?(this._totalTime=this._time=0,(0!==u||0===this._duration&&(this._rawPrevTime>r||0>t&&this._rawPrevTime>=0))&&(h="onReverseComplete",n=this._reversed),0>t?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&this._first&&(l=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t?t:r,t=0,this._initted||(l=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==u&&this._first||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==u&&t>0&&(this._active=!0),0===u&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||o)),this._time>=u)for(s=this._first;s&&(a=s._next,!this._paused||c);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||c);)(s._active||u>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||o)),h&&(this._gc||(p===this._startTime||f!==this._timeScale)&&(0===this._time||_>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this.vars[h].apply(this.vars[h+"Scope"]||this,this.vars[h+"Params"]||o)))}},u._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},u.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},u.getTweensOf=function(t,e){for(var s=i.getTweensOf(t),r=s.length,n=[],a=0;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(n[a++]=s[r]);return n},u._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},u.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},u._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},u.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},u.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return this},u._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},u.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},u.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},u.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},u.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=[],a=new i(null,null,1,0),o=s.prototype=new t;return o.constructor=s,o.kill()._gc=!1,s.version="1.11.0",o.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},o.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},o.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},o.tweenTo=function(t,i){i=i||{};var s,r,o={ease:a,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1};for(s in i)o[s]=i[s];return o.time=this._parseTimeOrLabel(t),r=new e(this,Math.abs(Number(o.time)-this._time)/this._timeScale||.001,o),o.onStart=function(){r.target.paused(!0),r.vars.time!==r.target.time()&&r.duration(Math.abs(r.vars.time-r.target.time())/r.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||r,i.onStartParams||n)},r},o.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},o.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,a,o,h,l,_,u=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,f=this._time,c=this._totalTime,m=this._startTime,d=this._timeScale,g=this._rawPrevTime,v=this._paused,y=this._cycle;if(t>=u?(this._locked||(this._totalTime=u,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(a=!0,h="onComplete",0===this._duration&&(0===t||0>g||g===r)&&g!==t&&this._first&&(l=!0,g>r&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=p,t=p+1e-6)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==f||0===p&&(g>r||0>t&&g>=0)&&!this._locked)&&(h="onReverseComplete",a=this._reversed),0>t?(this._active=!1,0===p&&g>=0&&this._first&&(l=!0),this._rawPrevTime=t):(this._rawPrevTime=p||!e||t?t:r,t=0,this._initted||(l=!0))):(0===p&&0>g&&(l=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(_=p+this._repeatDelay,this._cycle=this._totalTime/_>>0,0!==this._cycle&&this._cycle===this._totalTime/_&&this._cycle--,this._time=this._totalTime-this._cycle*_,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,t=p+1e-6):0>this._time?this._time=t=0:t=this._time))),this._cycle!==y&&!this._locked){var T=this._yoyo&&0!==(1&y),w=T===(this._yoyo&&0!==(1&this._cycle)),x=this._totalTime,b=this._cycle,P=this._rawPrevTime,S=this._time;if(this._totalTime=y*p,y>this._cycle?T=!T:this._totalTime+=p,this._time=f,this._rawPrevTime=0===p?g-1e-5:g,this._cycle=y,this._locked=!0,f=T?0:p,this.render(f,e,0===p),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||n),w&&(f=T?p+1e-6:-1e-6,this.render(f,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=S,this._totalTime=x,this._cycle=b,this._rawPrevTime=P}if(!(this._time!==f&&this._first||i||l))return c!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),this._time>=f)for(s=this._first;s&&(o=s._next,!this._paused||v);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=o;else for(s=this._last;s&&(o=s._prev,!this._paused||v);)(s._active||f>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=o;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),h&&(this._locked||this._gc||(m===this._startTime||d!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(a&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this.vars[h].apply(this.vars[h+"Scope"]||this,this.vars[h+"Params"]||n)))},o.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},o.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},o.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},o.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},o.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},o.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},o.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},o.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},o.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},o.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},o.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},o.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},a=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",o=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,f=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+f,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-f,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,h){var l,_,u,p,f,c,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)f=t[b],_=f.a,u=f.d,p=t[b+1].d,h?(y=e[l],T=i[l],w=.25*(T+y)*r/(a?.5:s[l]||.5),c=u-(u-_)*(a?.5*r:0!==y?w/y:0),m=u+(p-u)*(a?.5*r:0!==T?w/T:0),d=u-(c+((m-c)*(3*y/(y+T)+.5)/4||0))):(c=u-.5*(u-_)*r,m=u+.5*(p-u)*r,d=u-(c+m)/2),c+=d,m+=d,f.c=g=c,f.b=0!==l?P:P=f.a+.6*(f.c-f.a),f.da=u-_,f.ca=g-_,f.ba=P-_,n?(v=o(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;f=t[b],f.b=P,f.c=P+.4*(f.d-P),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=P-f.a,n&&(v=o(f.a,P,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},l=function(t,s,r,a){var o,h,l,_,u,p,f=[];if(a)for(t=[a].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][s])&&"="===p.charAt(1)&&(t[h][s]=a[s]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return f[0]=new n(t[0][s],0,0,t[-1>o?0:1][s]),f;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],f[h]=new n(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return f[h]=new n(t[h][s],0,0,t[h+1][s]),f},_=function(t,n,o,_,u,p){var f,c,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":a,null==n&&(n=1);for(c in t[0])x.push(c);if(t.length>1){for(T=t[t.length-1],y=!0,f=x.length;--f>-1;)if(c=x[f],Math.abs(b[c]-T[c])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(e.length=i.length=s.length=0,f=x.length;--f>-1;)c=x[f],r[c]=-1!==u.indexOf(","+c+","),w[c]=l(t,c,r[c],p);for(f=e.length;--f>-1;)e[f]=Math.sqrt(e[f]),i[f]=Math.sqrt(i[f]);if(!_){for(f=x.length;--f>-1;)if(r[c])for(m=w[x[f]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(f=s.length;--f>-1;)s[f]=Math.sqrt(s[f])}for(f=x.length,d=o?4:1;--f>-1;)c=x[f],m=w[c],h(m,n,o,_,r[c]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},u=function(t,e,i){e=e||"soft";var s,r,a,o,h,l,_,u,p,f,c,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],f=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(c=t[_][p])&&"="===c.charAt(1)?i[p]+Number(c.charAt(0)+c.substr(2)):Number(c),g&&_>1&&u-1>_&&(h[f++]=(s+h[f-2])/2),h[f++]=s;for(u=f-d+1,f=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],a=h[_+2],o=2===d?0:h[_+3],h[f++]=c=3===d?new n(s,r,a,o):new n(s,(2*r+s)/3,(2*r+a)/3,a);h.length=f}return m},p=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,f,c=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=c*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),f=m*i+_-1,e[f]=(e[f]||0)+s*s},f=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],f=[];for(i in t)p(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,f[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=f,o[n]=l,h=0,f=[]);return{length:l,lengths:o,segments:u}},c=window._gsDefine.plugin({propName:"bezier",priority:-1,API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},p=h[0],c=e.autoRotate||i.vars.orientToBezier;this._autoRotate=c?c instanceof Array?c:[["x","y","rotation",c===!0?0:Number(c)||0]]:null;for(s in p)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?_(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):u(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=f(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(c=this._autoRotate)for(c[0]instanceof Array||(this._autoRotate=c=[c]),n=c.length;--n>-1;)for(a=0;3>a;a++)s=c[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;return!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,f=this._func,c=this._target;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=h+(h>0?.5:-.5)>>0),f[n]?c[n](h):c[n]=h;if(this._autoRotate){var m,d,g,v,y,T,w,x=this._autoRotate;for(r=x.length;--r>-1;)n=x[r][2],T=x[r][3]||0,w=x[r][4]===!0?1:t,a=this._beziers[x[r][0]],m=this._beziers[x[r][1]],a&&m&&(a=a[i],m=m[i],d=a.a+(a.b-a.a)*o,v=a.b+(a.c-a.b)*o,d+=(v-d)*o,v+=(a.c+(a.d-a.c)*o-v)*o,g=m.a+(m.b-m.a)*o,y=m.b+(m.c-m.b)*o,g+=(y-g)*o,y+=(m.c+(m.d-m.c)*o-y)*o,h=Math.atan2(y-g,v-d)*w+T,f[n]?c[n](h):c[n]=h)}}}),m=c.prototype;c.bezierThrough=_,c.cubicToQuadratic=o,c._autoCSS=!0,c.quadraticToCubic=function(t,e,i){return new n(t,(2*e+t)/3,(2*e+i)/3,i)},c._cssRegister=function(){var t=window._gsDefine.globals.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new c;var l,_,u,p=e.values,f=p.length-1,m=[],d={};if(0>f)return o;for(l=0;f>=l;l++)u=i(t,p[l],a,o,h,f!==l),m[l]=u.end;for(_ in e)d[_]=e[_];return d.values=m,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},m._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},m._kill=function(t){var e,i,s=this._props;
for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},h=a.prototype=new t("css");h.constructor=a,a.version="1.11.0",a.API=2,a.defaultTransformPerspective=0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h};var l,_,u,p,f,c,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,d=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,w=/opacity:([^;]*)/,x=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,k=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,R=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,I=180/Math.PI,F={},E=document,N=E.createElement("div"),L=E.createElement("img"),X=a._internals={_specialProps:o},z=navigator.userAgent,U=function(){var t,e=z.indexOf("Android"),i=E.createElement("div");return u=-1!==z.indexOf("Safari")&&-1===z.indexOf("Chrome")&&(-1===e||Number(z.substr(e+8,1))>3),f=u&&6>Number(z.substr(z.indexOf("Version/")+8,1)),p=-1!==z.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z),c=parseFloat(RegExp.$1),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),Y=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},j=function(t){window.console&&console.log(t)},B="",q="",V=function(t,e){e=e||N;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(q=3===s?"ms":i[s],B="-"+q.toLowerCase()+"-",q+t):null},Z=E.defaultView?E.defaultView.getComputedStyle:function(){},G=a.getStyle=function(t,e,i,s,r){var n;return U||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):Y(t)},$=function(t,e,i,s,r){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var n,a=A.test(e),o=t,h=N.style,l=0>i;return l&&(i=-i),"%"===s&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(h.cssText="border-style:solid;border-width:0;position:absolute;line-height:0;","%"!==s&&o.appendChild?h[a?"borderLeftWidth":"borderTopWidth"]=i+s:(o=t.parentNode||E.body,h[a?"width":"height"]=i+s),o.appendChild(N),n=parseFloat(N[a?"offsetWidth":"offsetHeight"]),o.removeChild(N),0!==n||r||(n=$(t,e,i,s,!0))),l?-n:n},Q=function(t,e,i){if("absolute"!==G(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=G(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(y,""))||0)},W=function(t,e){var i,s,r={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,R)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0!==r[i]&&(r[i.replace(S,R)]=e[i]);return U||(r.opacity=Y(t)),s=be(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,xe&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},H=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Q(t,a),void 0!==l[a]&&(o=new ue(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(G(t,"padding"+r[n],i,!0))||0,s-=parseFloat(G(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:I)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(m)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},he="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in ne)he+="|"+h+"\\b";he=RegExp(he+")","gi");var le=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(he)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(m,""):"";return _?r=e?function(t){var e,p,f,c;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(c=t.replace(D,"|").split("|"),f=0;c.length>f;f++)c[f]=r(c[f]);return c.join(",")}if(e=(t.match(he)||[n])[0],p=t.split(e).join("").match(g)||[],f=p.length,_>f--)for(;_>++f;)p[f]=i?p[0|(f-1)/2]:a[f];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},_e=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ue=(X._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(X._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},f={},c=i._transform,m=F;for(i._transform=null,F=e,s=_=i.parse(t,e,s,r),F=m,n&&(i._transform=c,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,p[o]=s.s,n||(l=new ue(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,f[o]=s.data[h],p[o]=s[h],n||(l=new ue(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:f,firstMPT:l,pt:_}},X.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),fe=a.parseComplex=function(t,e,i,s,r,n,a,o,h,_){i=i||n||"",a=new pe(t,e,0,0,a,_?2:1,null,!1,o,i,s),s+="";var u,p,f,c,g,v,y,T,w,x,P,S,k=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=k.length,C=l!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(k=k.join(" ").replace(D,", ").split(" "),R=R.join(" ").replace(D,", ").split(" "),A=k.length),A!==R.length&&(k=(n||"").split(" "),A=k.length),a.plugin=h,a.setRatio=_,u=0;A>u;u++)if(c=k[u],g=R[u],T=parseFloat(c),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(d,""),C&&-1!==g.indexOf("px"),!0);else if(r&&("#"===c.charAt(0)||ne[c]||b.test(c)))S=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),w=c.length+g.length>6,w&&!U&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(U||(w=!1),a.appendXtra(w?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],w?",":S,!0),w&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,S,!1)));else if(v=c.match(m)){if(y=g.match(d),!y||y.length!==v.length)return a;for(f=0,p=0;v.length>p;p++)P=v[p],x=c.indexOf(P,f),a.appendXtra(c.substr(f,x-f),Number(P),ie(y[p],P),"",C&&"px"===c.substr(x+P.length,2),0===p),f=x+P.length;a["xs"+a.l]+=c.substr(f)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,u=1;a.l>u;u++)S+=a["xs"+u]+a.data["xn"+u];a.e=S+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(h=pe.prototype,h.l=h.pr=0;--ce>0;)h["xn"+ce]=0,h["xs"+ce]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var me=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||le(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},de=X._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new me(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";de(t,{parser:function(t,i,s,r,n,a,h){var l=(window.GreenSockGlobals||window).com.greensock.plugins[e];return l?(l._cssRegister(),o[s].parse(t,i,s,r,n,a,h)):(j("Error: "+e+" js file not loaded."),n)}})}};h=me.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),h=i.replace(D,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return fe(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){de(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=V("transform"),Te=B+"transform",we=V("transformOrigin"),xe=null!==V("perspective"),be=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,h,l,_,u,p,f,c,m,d,g,v=i?t._gsTransform||{skewY:0}:{skewY:0},y=0>v.scaleX,T=2e-5,w=1e5,x=179.99,b=x*M,P=xe?parseFloat(G(t,we,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?r=G(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(C),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)h=Number(n[o]),n[o]=(l=h-(h|=0))?(0|l*w+(0>l?-.5:.5))/w+h:h;if(16===n.length){var S=n[8],k=n[9],R=n[10],A=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,A=S*D-n[12],O=k*D-n[13],D=R*D+v.zOrigin-n[14]),!i||s||null==v.rotationX){var F,E,N,L,X,z,U,Y=n[0],j=n[1],B=n[2],q=n[3],V=n[4],Z=n[5],$=n[6],Q=n[7],W=n[11],H=Math.atan2($,R),K=-b>H||H>b;v.rotationX=H*I,H&&(L=Math.cos(-H),X=Math.sin(-H),F=V*L+S*X,E=Z*L+k*X,N=$*L+R*X,S=V*-X+S*L,k=Z*-X+k*L,R=$*-X+R*L,W=Q*-X+W*L,V=F,Z=E,$=N),H=Math.atan2(S,Y),v.rotationY=H*I,H&&(z=-b>H||H>b,L=Math.cos(-H),X=Math.sin(-H),F=Y*L-S*X,E=j*L-k*X,N=B*L-R*X,k=j*X+k*L,R=B*X+R*L,W=q*X+W*L,Y=F,j=E,B=N),H=Math.atan2(j,Z),v.rotation=H*I,H&&(U=-b>H||H>b,L=Math.cos(-H),X=Math.sin(-H),Y=Y*L+V*X,E=j*L+Z*X,Z=j*-X+Z*L,$=B*-X+$*L,j=E),U&&K?v.rotation=v.rotationX=0:U&&z?v.rotation=v.rotationY=0:z&&K&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(Y*Y+j*j)*w+.5)/w,v.scaleY=(0|Math.sqrt(Z*Z+k*k)*w+.5)/w,v.scaleZ=(0|Math.sqrt($*$+R*R)*w+.5)/w,v.skewX=0,v.perspective=W?1/(0>W?-W:W):0,v.x=A,v.y=O,v.z=D}}else if(!(xe&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===G(t,"display",e))){var J=n.length>=6,te=J?n[0]:1,ee=n[1]||0,ie=n[2]||0,se=J?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,_=Math.sqrt(te*te+ee*ee),u=Math.sqrt(se*se+ie*ie),p=te||ee?Math.atan2(ee,te)*I:v.rotation||0,f=ie||se?Math.atan2(ie,se)*I+p:v.skewX||0,c=_-Math.abs(v.scaleX||0),m=u-Math.abs(v.scaleY||0),Math.abs(f)>90&&270>Math.abs(f)&&(y?(_*=-1,f+=0>=p?180:-180,p+=0>=p?180:-180):(u*=-1,f+=0>=f?180:-180)),d=(p-v.rotation)%180,g=(f-v.skewX)%180,(void 0===v.skewX||c>T||-T>c||m>T||-T>m||d>-x&&x>d&&false|d*w||g>-x&&x>g&&false|g*w)&&(v.scaleX=_,v.scaleY=u,v.rotation=p,v.skewX=f),xe&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Pe=function(t){var e,i,s=this.data,r=-s.rotation*M,n=r+s.skewX*M,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var f,m,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x,b=s.y;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,m=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=f-(f*o+m*h),b+=m-(f*l+m*_)),v?(f=d/2,m=g/2,w+=", Dx="+(f-(f*o+m*h)+x)+", Dy="+(m-(f*l+m*_)+b)+")"):w+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,w):w+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===w.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,S,k,R=8>c?1:-1;for(f=s.ieOffsetX||0,m=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),ce=0;4>ce;ce++)S=J[ce],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,S,parseFloat(P),P.replace(y,""))||0,k=i!==s[S]?2>ce?-s.ieOffsetX:-s.ieOffsetY:2>ce?f-s.ieOffsetX:m-s.ieOffsetY,u[S]=(s[S]=Math.round(i-k*(0===ce||2===ce?1:R)))+"px"}}},Se=function(){var t,e,i,s,r,n,a,o,h,l,_,u,f,c,m,d,g,v,y,T,w,x,b,P,S,k,R=this.data,A=this.t.style,C=R.rotation*M,O=R.scaleX,D=R.scaleY,I=R.scaleZ,F=R.perspective;if(p&&(P=A.top?"top":A.bottom?"bottom":parseFloat(G(this.t,"top",null,!1))?"bottom":"top",T=G(this.t,P,null,!1),S=parseFloat(T)||0,k=T.substr((S+"").length)||"px",R._ffFix=!R._ffFix,A[P]=(R._ffFix?S+.05:S-.05)+k),C||R.skewX)v=Math.cos(C),y=Math.sin(C),t=v,r=y,R.skewX&&(C-=R.skewX*M,v=Math.cos(C),y=Math.sin(C)),e=-y,n=v;else{if(!(R.rotationY||R.rotationX||1!==I||F))return A[ye]="translate3d("+R.x+"px,"+R.y+"px,"+R.z+"px)"+(1!==O||1!==D?" scale("+O+","+D+")":""),void 0;t=n=1,e=r=0}_=1,i=s=a=o=h=l=u=f=c=0,m=F?-1/F:0,d=R.zOrigin,g=1e5,C=R.rotationY*M,C&&(v=Math.cos(C),y=Math.sin(C),h=_*-y,f=m*-y,i=t*y,a=r*y,_*=v,m*=v,t*=v,r*=v),C=R.rotationX*M,C&&(v=Math.cos(C),y=Math.sin(C),T=e*v+i*y,w=n*v+a*y,x=l*v+_*y,b=c*v+m*y,i=e*-y+i*v,a=n*-y+a*v,_=l*-y+_*v,m=c*-y+m*v,e=T,n=w,l=x,c=b),1!==I&&(i*=I,a*=I,_*=I,m*=I),1!==D&&(e*=D,n*=D,l*=D,c*=D),1!==O&&(t*=O,r*=O,h*=O,f*=O),d&&(u-=d,s=i*u,o=a*u,u=_*u+d),s=(T=(s+=R.x)-(s|=0))?(0|T*g+(0>T?-.5:.5))/g+s:s,o=(T=(o+=R.y)-(o|=0))?(0|T*g+(0>T?-.5:.5))/g+o:o,u=(T=(u+=R.z)-(u|=0))?(0|T*g+(0>T?-.5:.5))/g+u:u,A[ye]="matrix3d("+[(0|t*g)/g,(0|r*g)/g,(0|h*g)/g,(0|f*g)/g,(0|e*g)/g,(0|n*g)/g,(0|l*g)/g,(0|c*g)/g,(0|i*g)/g,(0|a*g)/g,(0|_*g)/g,(0|m*g)/g,s,o,u,F?1+-u/F:1].join(",")+")"},ke=function(){var t,e,i,s,r,n,a,o,h,l=this.data,_=this.t,u=_.style;p&&(t=u.top?"top":u.bottom?"bottom":parseFloat(G(_,"top",null,!1))?"bottom":"top",e=G(_,t,null,!1),i=parseFloat(e)||0,s=e.substr((i+"").length)||"px",l._ffFix=!l._ffFix,u[t]=(l._ffFix?i+.05:i-.05)+s),l.rotation||l.skewX?(r=l.rotation*M,n=r-l.skewX*M,a=1e5,o=l.scaleX*a,h=l.scaleY*a,u[ye]="matrix("+(0|Math.cos(r)*o)/a+","+(0|Math.sin(r)*o)/a+","+(0|Math.sin(n)*-h)/a+","+(0|Math.cos(n)*h)/a+","+l.x+","+l.y+")"):u[ye]="matrix("+l.scaleX+",0,0,"+l.scaleY+","+l.x+","+l.y+")"};de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",{parser:function(t,e,i,s,n,a,o){if(s._transform)return n;var h,l,_,u,p,f,c,m=s._transform=be(t,r,!0,o.parseTransform),d=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)_=d.cssText,d[ye]=y.transform,d.display="block",h=be(t,null,!1),d.cssText=_;else if("object"==typeof y){if(h={scaleX:se(null!=y.scaleX?y.scaleX:y.scale,m.scaleX),scaleY:se(null!=y.scaleY?y.scaleY:y.scale,m.scaleY),scaleZ:se(null!=y.scaleZ?y.scaleZ:y.scale,m.scaleZ),x:se(y.x,m.x),y:se(y.y,m.y),z:se(y.z,m.z),perspective:se(y.transformPerspective,m.perspective)},c=y.directionalRotation,null!=c)if("object"==typeof c)for(_ in c)y[_]=c[_];else y.rotation=c;h.rotation=re("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:m.rotation,m.rotation,"rotation",T),xe&&(h.rotationX=re("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":m.rotationX||0,m.rotationX,"rotationX",T),h.rotationY=re("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":m.rotationY||0,m.rotationY,"rotationY",T)),h.skewX=null==y.skewX?m.skewX:re(y.skewX,m.skewX),h.skewY=null==y.skewY?m.skewY:re(y.skewY,m.skewY),(l=h.skewY-m.skewY)&&(h.skewX+=l,h.rotation+=l)}for(null!=y.force3D&&(m.force3D=y.force3D,f=!0),p=m.force3D||m.z||m.rotationX||m.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,p||null==y.scale||(h.scaleZ=1);--v>-1;)i=ve[v],u=h[i]-m[i],(u>g||-g>u||null!=F[i])&&(f=!0,n=new pe(m,i,m[i],u,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,s._overwriteProps.push(n.n));return u=y.transformOrigin,(u||xe&&p&&m.zOrigin)&&(ye?(f=!0,i=we,u=(u||G(t,i,r,!1,"50% 50%"))+"",n=new pe(d,i,0,0,n,-1,"transformOrigin"),n.b=d[i],n.plugin=a,xe?(_=m.zOrigin,u=u.split(" "),m.zOrigin=(u.length>2&&(0===_||"0px"!==u[2])?parseFloat(u[2]):_)||0,n.xs0=n.e=d[i]=u[0]+" "+(u[1]||"50%")+" 0px",n=new pe(m,"zOrigin",0,0,n,-1,n.n),n.b=_,n.xs0=n.e=m.zOrigin):n.xs0=n.e=d[i]=u):ee(u+"",m)),f&&(s._transformType=p||3===this._transformType?3:2),n},prefix:!0}),de("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),de("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,f,c,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=V(b[h])),u=_=G(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],f=parseFloat(u),v=u.substr((f+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",f,v),w=$(t,"borderTop",f,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=$(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+c+g,l=parseFloat(_)+c+g)),a=fe(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:le("0px 0px 0px 0px",!1,!0)}),de("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,f="background-position",m=r||Z(t,null),d=this.format((m?c?m.getPropertyValue(f+"-x")+" "+m.getPropertyValue(f+"-y"):m.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=G(t,"backgroundImage").replace(k,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),L.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-L.width:t.offsetHeight-L.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:ee}),de("backgroundSize",{defaultValue:"0 0",formatter:ee}),de("perspective",{defaultValue:"0px",prefix:!0}),de("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),de("transformStyle",{prefix:!0}),de("backfaceVisibility",{prefix:!0}),de("userSelect",{prefix:!0}),de("margin",{parser:_e("marginTop,marginRight,marginBottom,marginLeft")}),de("padding",{parser:_e("paddingTop,paddingRight,paddingBottom,paddingLeft")}),de("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>c?(h=t.currentStyle,l=8>c?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(G(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),de("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),de("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),de("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,"borderTopWidth",r,!1,"0px")+" "+G(t,"borderTopStyle",r,!1,"solid")+" "+G(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(he)||["#000"])[0]}}),de("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Re=function(t){var e,i=this.t,s=i.filter||G(this.data,"filter"),r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!G(this.data,"filter")):(i.filter=s.replace(x,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("opacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};de("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(G(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===G(t,"visibility",r)&&0!==e&&(o=0),U?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Re),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ae=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ce=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ae(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};de("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,f,c=t.className,m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ce,a.pr=-11,i=!0,a.b=c,_=W(t,r),u=t._gsClassPT){for(p={},f=u.data;f;)p[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,l=H(t,_,W(t),h,p),t.className=c,a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?we:o[i].p),Ae(n,i);r&&(Ae(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(de("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),ce=h.length;ce--;)ge(h[ce]);h=a.prototype,h._firstPT=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,l=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var h,p,c,m,d,g,v,y,T,x=t.style;if(_&&""===x.zIndex&&(h=G(t,"zIndex",r),("auto"===h||""===h)&&(x.zIndex=0)),"string"==typeof e&&(m=x.cssText,h=W(t,r),x.cssText=m+";"+e,h=H(t,h,W(t)).difs,!U&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,x.cssText=m),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?u&&(_=!0,""===x.zIndex&&(v=G(t,"zIndex",r),("auto"===v||""===v)&&(x.zIndex=0)),f&&(x.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):x.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&xe?Se:ye?ke:Pe,y.data=this._transform||be(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=m;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:d)?p._prev._next=p:m=p,(p._next=c)?c._prev=p:d=p,p=g}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,h,_,u,p,f,c,m,d,g,v=t.style;for(a in e)f=e[a],h=o[a],h?i=h.parse(t,f,a,this,i,n,e):(p=G(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&b.test(f)?(d||(f=oe(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=fe(v,a,p,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(_=parseFloat(p),c=_||0===_?p.substr((_+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(_=te(t,a,r),c="px"):"left"===a||"top"===a?(_=Q(t,a,r),c="px"):(_="opacity"!==a?0:1,c="")),g=d&&"="===f.charAt(1),g?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),m=f.replace(y,"")):(u=parseFloat(f),m=d?f.substr((u+"").length)||"":""),""===m&&(m=s[a]||c),f=u||0===u?(g?u+_:u)+m:e[a],c!==m&&""!==m&&(u||0===u)&&(_||0===_)&&(_=$(t,a,_,c),"%"===m?(_/=$(t,a,100,"%")/100,_>100&&(_=100),e.strictUnits!==!0&&(p=_+"%")):"em"===m?_/=$(t,a,1,"em"):(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(f=u+_+m)),g&&(u+=_),!_&&0!==_||!u&&0!==u?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,u||_||0,0,i,-1,a,!1,0,p,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:p):j("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,_,u-_,i,0,a,l!==!1&&("px"===m||"zIndex"===a),0,p,f),i.xs0=m)):i=fe(v,a,p,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},h._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||be(this._target,r,!0)},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)De(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(W(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,De(t,l,u),o.render(i,!0),De(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=H(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),window._gsDefine.plugin({propName:"attr",API:2,init:function(t,e){var i;
if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={};for(i in e)this._addTween(this._proxy,i,parseFloat(t.getAttribute(i)),e[i],i)&&this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length;--s>-1;)e=i[s],this._target.setAttribute(e,this._proxy[e]+"")}}),window._gsDefine.plugin({propName:"directionalRotation",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},c=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,c=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=c?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),c?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),f=u;--f>-1;)a=l[f],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),c},!0)}),function(t){"use strict";var e=t.GreenSockGlobals||t;if(!e.TweenLite){var i,s,r,n,a,o=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},h=o("com.greensock"),l=1e-10,_=[].slice,u=function(){},p=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e}}(),f={},c=function(i,s,r,n){this.sc=f[i]?f[i].sc:[],f[i]=this,this.gsClass=null,this.func=r;var a=[];this.check=function(h){for(var l,_,u,p,m=s.length,d=m;--m>-1;)(l=f[s[m]]||new c(s[m],[])).gsClass?(a[m]=l.gsClass,d--):h&&l.sc.push(this);if(0===d&&r)for(_=("com.greensock."+i).split("."),u=_.pop(),p=o(_.join("."))[u]=this.gsClass=r.apply(r,a),n&&(e[u]=p,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+i.split(".").join("/"),[],function(){return p}):"undefined"!=typeof module&&module.exports&&(module.exports=p)),m=0;this.sc.length>m;m++)this.sc[m].check()},this.check(!0)},m=t._gsDefine=function(t,e,i,s){return new c(t,e,i,s)},d=h._class=function(t,e,i){return e=e||function(){},m(t,[],function(){return e},i),e};m.globals=e;var g=[0,0,1,1],v=[],y=d("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),T=y.map={},w=y.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?d("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],T[n+"."+o]=T[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(r=y.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},i=["Linear","Quad","Cubic","Quart","Quint,Strong"],s=i.length;--s>-1;)r=i[s]+",Power"+s,w(new y(null,null,1,s),r,"easeOut",!0),w(new y(null,null,2,s),r,"easeIn"+(0===s?",easeNone":"")),w(new y(null,null,3,s),r,"easeInOut");T.linear=h.easing.Linear.easeIn,T.swing=h.easing.Quad.easeInOut;var x=d("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=x.prototype,r.addEventListener=function(t,e,i,s,r){r=r||0;var o,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)o=l[h],o.c===e&&o.s===i?l.splice(h,1):0===_&&r>o.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==n||a||n.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var b=t.requestAnimationFrame,P=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},k=S();for(i=["ms","moz","webkit","o"],s=i.length;--s>-1&&!b;)b=t[i[s]+"RequestAnimationFrame"],P=t[i[s]+"CancelAnimationFrame"]||t[i[s]+"CancelRequestAnimationFrame"];d("Ticker",function(t,e){var i,s,r,o,h,l=this,_=S(),p=e!==!1&&b,f=function(t){k=S(),l.time=(k-_)/1e3;var e,n=l.time-h;(!i||n>0||t===!0)&&(l.frame++,h+=n+(n>=o?.004:o-n),e=!0),t!==!0&&(r=s(f)),e&&l.dispatchEvent("tick")};x.call(l),l.time=l.frame=0,l.tick=function(){f(!0)},l.sleep=function(){null!=r&&(p&&P?P(r):clearTimeout(r),s=u,r=null,l===n&&(a=!1))},l.wake=function(){null!==r&&l.sleep(),s=0===i?u:p&&b?b:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===n&&(a=!0),f(2)},l.fps=function(t){return arguments.length?(i=t,o=1/(i||60),h=this.time+o,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),p=t,l.fps(i),void 0):p},l.fps(t),setTimeout(function(){p&&(!r||5>l.frame)&&l.useRAF(!1)},1500)}),r=h.Ticker.prototype=new h.events.EventDispatcher,r.constructor=h.Ticker;var R=d("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,U){a||n.wake();var i=this.vars.useFrames?z:U;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});n=R.ticker=new h.Ticker,r=R.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var A=function(){S()-k>2e3&&n.wake(),setTimeout(A,2e3)};A(),r.play=function(t,e){return arguments.length&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return arguments.length&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return a||n.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=p(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(a||n.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&this.render(t,e,!1)}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||l,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){a||t||n.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var C=d("core.SimpleTimeline",function(t){R.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=C.prototype=new R,r.constructor=C,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},r.rawTime=function(){return a||n.wake(),this._totalTime};var O=d("TweenLite",function(e,i,s){if(R.call(this,i,s),this.render=O.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:O.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?X[O.defaultOverwrite]:"number"==typeof h?h>>0:X[h],(o||e instanceof Array||e.push&&p(e))&&"number"!=typeof e[0])for(this._targets=a=_.call(e,0),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(_.call(n,0))):(this._siblings[r]=Y(n,this,!1),1===h&&this._siblings[r].length>1&&j(n,this,null,1,this._siblings[r])):(n=a[r--]=O.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=Y(e,this,!1),1===h&&this._siblings.length>1&&j(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),D=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},M=function(t,e){var i,s={};for(i in t)L[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!F[i]||F[i]&&F[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=O.prototype=new R,r.constructor=O,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=!1,O.version="1.11.0",O.defaultEase=r._ease=new y(null,null,1,1),O.defaultOverwrite="auto",O.ticker=n,O.autoSleep=!0,O.selector=t.$||t.jQuery||function(e){return t.$?(O.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var I=O._internals={isArray:p,isSelector:D},F=O._plugins={},E=O._tweenLookup={},N=0,L=I.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},X={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},z=R._rootFramesTimeline=new C,U=R._rootTimeline=new C;U._startTime=n.time,z._startTime=n.frame,U._active=z._active=!0,R._updateRoot=function(){if(U.render((n.time-U._startTime)*U._timeScale,!1,!1),z.render((n.frame-z._startTime)*z._timeScale,!1,!1),!(n.frame%120)){var t,e,i;for(i in E){for(e=E[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete E[i]}if(i=U._first,(!i||i._paused)&&O.autoSleep&&!z._first&&1===n._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||n.sleep()}}},n.addEventListener("tick",R._updateRoot);var Y=function(t,e,i){var s,r,n=t._gsTweenID;if(E[n||(t._gsTweenID=n="t"+N++)]||(E[n]={target:t,tweens:[]}),e&&(s=E[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return E[n].tweens},j=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var _,u=e._startTime+l,p=[],f=0,c=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(_=_||B(e,0,c),0===B(o,_,c)&&(p[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale+l>u&&((c||!o._initted)&&2e-10>=u-o._startTime||(p[f++]=o)));for(n=f;--n>-1;)o=p[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},B=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*l>n-e?l:(n+=t.totalDuration()/t._timeScale/r)>e+l?0:n-e-l};r._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.immediateRender,h=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=O.to(this.target,0,r.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(r.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else{i={};for(s in r)L[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",this._startAt=O.to(this.target,0,i),r.immediateRender){if(0===this._time)return}else this._startAt.render(-1,!0)}if(this._ease=h?h instanceof y?r.easeParams instanceof Array?h.config.apply(h,r.easeParams):h:"function"==typeof h?new y(h,r.easeParams):T[h]||O.defaultEase:O.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&O._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&F.css&&this.vars.autoCSS!==!1&&M(this.vars,e);for(n in this.vars){if(_=this.vars[n],L[n])_&&(_ instanceof Array||_.push&&p(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(F[n]&&(h=new F[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&j(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):o},r.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===h&&(a=this._rawPrevTime,(0===t||0>a||a===l)&&a!==t&&(i=!0,a>l&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t?t:l);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&this._rawPrevTime>l)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===h&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=a=!e||t?t:l)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/h,u=this._easeType,p=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===p?_*=_:2===p?_*=_*_:3===p?_*=_*_*_:4===p&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:.5>t/h?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||v))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||i&&0===this._time&&0===o||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||v)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||v),0===h&&this._rawPrevTime!==a&&(this._rawPrevTime=0)))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:O.selector(e)||e;var i,s,r,n,a,o,h,l;if((p(e)||D(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){h=t||a,l=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(r in h)(n=a[r])&&(n.pg&&n.t._kill(h)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),l&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&O._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(a||n.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=Y(s[i],this,!0);else this._siblings=Y(this.target,this,!0)}return R.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?O._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},O.to=function(t,e,i){return new O(t,e,i)},O.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new O(t,e,i)},O.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new O(t,e,s)},O.delayedCall=function(t,e,i,s,r){return new O(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},O.set=function(t,e){return new O(t,0,e)},O.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:O.selector(t)||t;var i,s,r,n;if((p(t)||D(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(O.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=Y(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},O.killTweensOf=O.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=O.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var q=d("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=q.prototype},!0);if(r=q.prototype,q.version="1.10.1",q.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=0|e+(e>0?.5:-.5):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},O._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},q.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===q.API&&(F[(new t[e])._propName]=t[e]);return!0},m.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=d("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){q.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new q(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,q.activate([a]),a},i=t._gsQueue){for(s=0;i.length>s;s++)i[s]();for(r in f)f[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}a=!1}}(window);


/**
* Jibestream's global object, reference to anything in the framework is housed here.
*
* @class JMap
* @constructor
*/
var JMap = {
	/**************************************************/
	/******************** NovoScript ******************/
	/**************************************************/

	globalDispatcher:{},
	orgHtml:"",
	retryCounter:0,
	RESTENDPOINT:'/rest/web',
	iLoad:0,
	bootStrapCounter:0,
	modulesLoaded:0,
	modCheck:0,
	laces:[],


	// Events
	MAPS_LOADED:"JMAPS_LOADED",
	MODULE_READY:"ModuleInitComplete",

	/**
	 * The initialization method used to properly load formatted modules into the application.
	 *
	 * @method initModules
	 * @param {Array} modules An array of the modules your application should load.
	 * @param {String} moduleContainerId The ID of the element where you modules should load into.
	 * @param {Function} templateInit The application initialize function.
	 * @param {String} serverUrl The server location. If null or empty uses the root of the directory.
	 * @param {Object} debugDevice For development purposes. If this is not defined the device and language code will be read from the url.
	 */

	initModules:function(modules, moduleContainerId, templateInit, serverUrl, debugDevice){
	    try{global.networkCache.clear();}catch(e){/*console.log("Global cache clearing not supported");*/}

	    if(serverUrl)JMap.serverUrl = serverUrl;
	    if(debugDevice !== undefined){
	        JMap.storage.device = debugDevice;
	        JMap.getUrlParams();
	    } else JMap.storage.device = JMap.getUrlParams();
	    
	    JMap.moduleContainerId = moduleContainerId;
	    JMap.moduleContainer = $("#" + moduleContainerId);
	    JMap.storage.modules = modules;
	    
	    JMap.addExtraHTMLJQUERYFuncs();

	    $(JMap.globalDispatcher).on("DataLoaded", JMap.loadModule);
	    $(JMap.globalDispatcher).on("ModulesReady", JMap.initAll);
	    $(JMap.globalDispatcher).on(JMap.MODULE_READY, JMap.onModuleInit);
	    $(JMap.globalDispatcher).on("ModulesInit", function(){
	    	templateInit();
	    	JMap.fire("AppReady");
	    });
	    orgHtml = JMap.moduleContainer.html();
	    JMap.getRequiredServerData();
	},


	initMapsStandAlone:function(serverUrl, debugDevice){
		// console.log("Init Standalone maps");
		if(serverUrl)JMap.serverUrl = serverUrl;
		if(debugDevice !== undefined){
	        JMap.storage.device = debugDevice;
	        JMap.getUrlParams();
	    } else JMap.storage.device = JMap.getUrlParams();

	    JMap.addExtraHTMLJQUERYFuncs();
	    
	    JMap.getRequiredServerData();
	    
	    $(JMap.globalDispatcher).on("DataLoaded", function(){
			// JMap.storage.maps = {};
		    JMap.storage.maps.model = new JMap.BuildingModelGrid();
			JMap.storage.maps.model.load(function(){
				JMap.fire("StandAloneMapsReady");
			});
	    });

	},

	/**
	 * This event gets fired once all the modules have been loaded and the Application has been initialized.
	 *
	 * @event AppReady
	 */

	addExtraHTMLJQUERYFuncs:function(){
	    //Prepend
	    if(!Element.prototype.prependChild)
		Element.prototype.prependChild = function(child) { this.insertBefore(child, this.firstChild); };
	    // Add Jquery html callback
	    // var htmlOriginal = $.fn.html;
    	// $.fn.html = function(html,callback){
	    //   var ret = htmlOriginal.apply(this, arguments);
	    //   if(typeof callback == "function"){callback();}
	    //   return ret;
	    // };

	    //double click here

	},
	getRequiredServerData:function(){
	    JMap.laces = [JMap.getDeviceDetails, JMap.getDeviceParams, JMap.getDestinations, JMap.getLabels, JMap.getMaps, JMap.getMapData];
	    JMap.tieLaces();
	},
	retry:function(){
	    JMap.retryCounter++;
	    if(JMap.retryCounter >= 5){
	        alert("This application had a hic up, it will restart.");
	        if(navigator.app && navigator.app.exitApp)navigator.app.exitApp();//FOR CORDOVA
	        return;
	    }

	    JMap.moduleContainer.html(JMap.orgHtml);
	    JMap.modulesLoaded = 0;
	    JMap.iLoad = 0;

		JMap.loadModule();
	},

	tieLaces:function(action){
	    JMap.laces[JMap.bootStrapCounter](JMap.checkBoots);
	},

	checkBoots:function(){
	    JMap.bootStrapCounter++;
	    if(JMap.bootStrapCounter < JMap.laces.length)JMap.tieLaces();
	    else JMap.dataIsReady();
	},

	dataIsReady:function(){
	    $(JMap.globalDispatcher).trigger("DataLoaded");
	},
	getUrlParams:function(){
	    var url = document.location.toString();
	    JMap.storage.url = url;
	    var h = url.indexOf('#');
	    
	    //Just get params
	    if (h > -1)url = url.substr(0, h);
	    var q = url.indexOf('?');
	    var params = {};
	    if (q > -1) {
	        var qv = url.substr(q + 1).split('&');
	        for (var i = 0, n = qv.length; i < n; i++) {
	            var ar = qv[i].split('=');
	            params[ar[0]] = ar[1];
	        }
	    }
	    JMap.storage.params = params;
	    var brokenUrl = url.split("/");
	    var xInt = brokenUrl.indexOf("x");
	    var dev = {deviceId: brokenUrl[xInt + 1], languageCode:brokenUrl[xInt + 2]};

	    brokenUrl.pop();//languageCode
	    brokenUrl.pop();//device id

	    JMap.storage.urlnoparams = brokenUrl.join("/");
	    return dev;
	},
	

	loadModule:function(mod){
	    var date = new Date();
	    if(mod === undefined || (mod !== undefined && mod.isTrigger))mod = JMap.storage.modules[JMap.iLoad];
	    if(mod.parent === undefined){
	        var element = document.createElement("div");
	        $(element).attr("id", mod.name);
	        $(element).load(mod.url + "?ts=" + date.getTime(), null, JMap.checkModLoaded);
	        if(mod.prepend) JMap.moduleContainer.prepend(element);
	        else JMap.moduleContainer.append(element);
	    }else{
            var element2 = document.createElement("div");
            $(element2).attr("id", mod.name);
            $(element2).load(mod.url + "?ts=" + date.getTime(), null, JMap.checkModLoaded);
            if(mod.prepend) $(mod.parent).prepend(element2);
            else $(mod.parent).append(element2);
	    }
	},
	checkModLoaded:function(reponseText, textStatus){
	    if(JMap.storage.modules[JMap.iLoad].childrenMods && JMap.storage.modules[JMap.iLoad].childrenMods.length > 0){
	        if(JMap.storage.modules[JMap.iLoad].headCount === undefined)JMap.storage.modules[JMap.iLoad].headCount = 0;
	        else JMap.storage.modules[JMap.iLoad].headCount++;

	        if(JMap.storage.modules[JMap.iLoad].headCount < JMap.storage.modules[JMap.iLoad].childrenMods.length){
	            JMap.loadModule(JMap.storage.modules[JMap.iLoad].childrenMods[JMap.storage.modules[JMap.iLoad].headCount]);
	            return;
	        }
	    }

        JMap.iLoad++;
        if(JMap.iLoad >= JMap.storage.modules.length){
            $(JMap.globalDispatcher).trigger("ModulesReady");
        }else{
            JMap.loadModule();
        }
	},

	onModuleInit:function(evt, from) {
	    JMap.initNextModule();
	},

	initNextModule:function(){
	    if(JMap.storage.modules[JMap.modulesLoaded].childrenMods && JMap.storage.modules[JMap.modulesLoaded].childrenMods.length > 0){
	        if(JMap.storage.modules[JMap.modulesLoaded].initHeadCount === undefined)JMap.storage.modules[JMap.modulesLoaded].initHeadCount = 0;
	        else JMap.storage.modules[JMap.modulesLoaded].initHeadCount++;
	        if(JMap.storage.modules[JMap.modulesLoaded].initHeadCount < JMap.storage.modules[JMap.modulesLoaded].childrenMods.length){
	            JMap.initModule(JMap.storage.modules[JMap.modulesLoaded].initHeadCount, JMap.storage.modules[JMap.modulesLoaded].childrenMods);
	            return;
	        }
	    }
	    JMap.modulesLoaded++;
	    if(JMap.modulesLoaded < JMap.storage.modules.length) {
	        JMap.initModule(JMap.modulesLoaded, JMap.storage.modules);
	    } else {
	        $(JMap.globalDispatcher).trigger("ModulesInit");
	    }
	},

	initModule:function(arrayInt, modArray){
	    var mod = modArray[arrayInt];
	    var f = window[mod.init];
	    if(f !== undefined && typeof f == "function")f(mod.params);
	    else {
	        // console.log("No init function for " + mod.name + "    -- Retrying");
	        JMap.retry();
	    }
	},

	initAll:function(){
	    JMap.initModule(0, JMap.storage.modules);
	},

	/**************************************************/
	/******************** NovoScript ******************/
	/**************************************************/


	/**
	 * JMap's custom event listener. Call this to add a handler to any known event.
	 * @method addListener
	 * @param {String} eventName The name or identifier of the event.
	 * @param {function} handler The function to be called when this event gets fired.
	 * @return 
	 */
	addListener:function(eventName, handler){
		//Gives more control if needed
		$(JMap.globalDispatcher).on(eventName, handler);
	},
	/**
	 * JMap's custom event trigger. Call this to trigger any known event.
	 * @method fire
	 * @param {String} eventName The name or identifier of the event.
	 * @param {Array} params An array of parameters or data to be sent to all event handlers of this specific event.
	 */
	fire:function(eventName, params){
		//Gives more control if needed
		$(JMap.globalDispatcher).trigger(eventName, params);
	},

	/**************************************************/
	/******************** CMS calls *******************/
	/**************************************************/


	serverUrl:"",
	storage:{},
	/**
	 * Call to get all the destinations from the CMS. The application caches the results the first time it is called.
	 *
	 * @method getDestinations
	 * @param {Function} callback
	 * @return {Array} Returns and array of the destinations fed from the CMS
	 */
	getDestinations:function(callback){
		if(JMap.storage.destinations === undefined){
			$.ajax({url:JMap.serverUrl + "/rest/web/destination/all/"  + JMap.storage.device.deviceId + "/" + JMap.storage.device.languageCode ,
				type:"GET",
				contentType:"application/json",
				dataType: 'json',
				headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
				success:function(result){
					var parsedResult = result;
					for(var i = 0, len = result.length; i < len; i++){
						parsedResult[i].label = parsedResult[i].name;
						parsedResult[i].value = parsedResult[i].name;
						parsedResult[i].keywordsAr=parsedResult[i].keywords?parsedResult[i].keywords.toLowerCase().split(','):[];
					}
					JMap.storage.destinations = parsedResult;
					// console.log("DESTINATIONS", JMap.storage.destinations);
					callback(JMap.storage.destinations);
				}});
		}else{
			callback(JMap.storage.destinations);
		}
	},
	/**
	 * Returns the destination associated with the specified Client destination ID. This allows for clients to reference the destination using their proprietary naming convention.
	 *
	 * @method getDestinationByClientId
	 * @param {String} id Reference this under the "Client Id" column in the CMS.
	 * @return Destination Object
	 */
	getDestinationByClientId:function(id){
		if(JMap.storage.destinations === undefined){
			console.error("Desitnations list empty. Make sure you call JMap.getDestinations(callback) first before trying to get a specific destination.");
		}else{
			for(var i = 0, len = JMap.storage.destinations.length; i < len; i++){
				if(JMap.storage.destinations[i].clientId === id)return JMap.storage.destinations[i];
			}
			console.error("There was no destination found with the clientId: " + id);
			return null;
		}
	},
	/**
	 * Returns the destination associated with the specified Jibestream destination ID
	 *
	 * @method getDestinationById
	 * @param {int} id Reference this under the "Id" column in the CMS.
	 * @return Destination object
	 */
	getDestinationById:function(id){
		if(JMap.storage.destinations === undefined){
			console.error("Desitnations list empty. Make sure you call JMap.getDestinations(callback) first before trying to get a specific destination.");
		}else{
			for(var i = 0, len = JMap.storage.destinations.length; i < len; i++){
				if(JMap.storage.destinations[i].id == id)return JMap.storage.destinations[i];
			}
			console.error("There was no destination found with the id: " + id);
			return null;
		}
	},
	/**
	 * Uses a specific keyword to retrieve an array of Destination objects with a matching keyword.
	 *
	 * @method getDestinationByKeyword
	 * @param {String} word Reference this under the "Keywords" column in the CMS.
	 * @return Array of destinations with the matching keyword provided.
	 */
	getDestinationByKeyword:function(word){
		word=word.toLowerCase();		
		var ar=[];	
		if(JMap.storage.destinations === undefined){
			console.error("Desitnations list empty. Make sure you call JMap.getDestinations(callback) first before trying to get a specific destination.");
		}else	for(var i = 0, len = JMap.storage.destinations.length; i < len; i++)if(JMap.storage.destinations[i].keywordsAr.indexOf(word) !=-1)ar.push(JMap.storage.destinations[i]);
						
		return ar;
	},
	/**
	 * TODO Rewrtite Returns the destination associated with the specified Jibestream destination ID
	 *
	 * @method getDestinationsByFloorSequence
	 * @param {int} id Reference this under the "Id" column in the CMS.
	 * @return Destination object
	 */

	 //TODO MAKE THIS WORK
	getDestinationsByFloorSequence:function(seq){
		if(JMap.storage.destinationsBySequence === undefined){
			JMap.storage.destinationsBySequence = {};
		}
		var floorArray = [];
		for(var i = 0, len = JMap.storage.destinations.length; i < len; i++){
			var f = JMap.getFloorById(JMap.storage.destinations[i].clientId);
			if(!f)continue;
			if(f.floorSequence === seq){
				floorArray.push(JMap.storage.destinations[i]);
			}
		}
		JMap.storage.destinationsBySequence[seq] = floorArray;	
		// console.error("There was no destination found with the id: " + id);
		return floorArray;
	},
	/**
	 * TODO Rewrtite Returns the destination associated with the specified Jibestream destination ID
	 *
	 * @method getDestinationById
	 * @param {int} id Reference this under the "Id" column in the CMS.
	 * @return Destination object
	 */
	getDestinationsByFloorId:function(mapId){
		if(JMap.storage.destinationsByFloor === undefined){
			JMap.storage.destinationsByFloor = {};
		}
		if(JMap.storage.destinationsByFloor[mapId])return JMap.storage.destinationsByFloor[mapId];

		var floorArray = [];
		for(var i = 0, len = JMap.storage.destinations.length; i < len; i++){
			var f = JMap.getFloorById(JMap.storage.destinations[i].clientId);
			if(!f)continue;
			if(f.mapId === mapId){
				floorArray.push(JMap.storage.destinations[i]);
			}
		}
		JMap.storage.destinationsByFloor[mapId] = floorArray;			
		// console.error("There was no destination found with the id: " + id);
		return floorArray;
	},
	/**
	 * Uses a specific category ID to retrieve the array of destinations assigned to the specific category
	 *
	 * @method getDesitnationsByCategoryId
	 * @param {int} id Reference this under the "Id" column in the CMS.
	 * @return Array of destination objects
	 */
	getDesitnationsByCategoryId:function(id){
        if(JMap.storage.destinations === undefined){
            console.error("Desitnations list empty. Make sure you call JMap.getDestinations(callback) first before trying to get a specific destination.");
        }else if(JMap.storage.categories === undefined){
            console.error("Categories are not cached. Please call JMap.getCategories before trying to retrieve a specfic category.");
        }else{
            if(JMap.storage.categoryDestinations === undefined)JMap.storage.categoryDestinations = {};
            if(JMap.storage.categoryDestinations[id]) return JMap.storage.categoryDestinations[id];
            var tempAr = [];
            for(var i = 0; i < JMap.storage.destinations.length; i++){
                var item = JMap.storage.destinations[i];
                for(var j = 0; j < item.categoryId.length; j++){
                    if(item.categoryId[j] == id)tempAr.push(item);
                }
            }
            JMap.storage.categoryDestinations[id] = tempAr;

            return JMap.storage.categoryDestinations[id];
        }

        return [];
    },
	/**
	 * Retrieves the maps associated to the specific project. After the first time this is called the application caches the data.
	 * @method getMaps
	 * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
	 */
	getMaps:function(callback){
		if(JMap.storage.maps === undefined)JMap.storage.maps = {};
		if(JMap.storage.maps.data === undefined){
            //$.get(JMap.serverUrl + '/rest/maps/all', null, function (res) {
            // console.log(JMap.serverUrl + '/rest/web/maps/all/' + JMap.storage.device.deviceId);
            $.get(JMap.serverUrl + '/rest/web/maps/all/' + JMap.storage.device.deviceId, null, function (res) {
                
                // console.log('MAPS');
                // console.log(res);
                // JMap.storage.maps = {};
                JMap.storage.maps.data = res;
                JMap.storage.maps.model = new JMap.BuildingModelGrid();
				JMap.storage.maps.model.load(function(){console.log("Model Ready");});
                callback(JMap.storage.maps.data);

            }, 'json');
		}else{
			callback(JMap.storage.maps.data);
		}
	},
	/**
	 * Retrieves an array of legend objects assigned to the specific project. After the first time this is called the application caches the data.
	 * @method getLegends
	 * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
	 */
	getLegends:function(callback){
		if(JMap.storage.legends === undefined){
			$.ajax({url:JMap.serverUrl + "/rest/web/legends/"  + JMap.storage.device.deviceId + "/" + JMap.storage.device.languageCode, 
            type:"GET" ,
			contentType:"application/json",
			dataType: 'json',
			data:JSON.stringify(JMap.storage.device),
			headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
			success:function(res){
				JMap.storage.legends = res;
				callback(JMap.storage.legends);
			}});
		}else{
			callback(JMap.storage.legends);
		}
	},
	/**
	 * Uses an integer identifier to retrieve the specific legend object.
	 *
	 * @method getLegendById
	 * @param {int} id Reference this under the "Id" column in the CMS.
	 * @return Legend Object
	 */
	getLegendById:function(id){
		for(var i = 0; i < JMap.storage.legends.length; i++){
			if(JMap.storage.legends[i].componentId == id)return JMap.storage.legends[i];
		}
		return "No legend matching this id";
	},
	/**
	 * Retrieves the map data associated to the specific project. This includes waypoint objects, assigned destinations and floor transition points (people movers). After the first time this is called the application caches the data.
	 *
	 * @method getMapData
	 * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
	 */
	getMapData:function(callback){
		// console.log("Getting map data");
		if(JMap.storage.maps === undefined)JMap.storage.maps = {};
		if(JMap.storage.maps.mapbuilderData === undefined){
			$.ajax({
				type:"GET",
				url:JMap.serverUrl + '/rest/web/maps/mapbuilderdata/'  + JMap.storage.device.deviceId, 
				accepts: {
			        text: "application/json"
			    },
				success:function (res) {
					// console.log("MapData");
					// console.log(res);
				// $.get('/rest/maps/mapbuilderdata', null, function (res) {
					JMap.storage.maps.mapbuilderData = res;
					// console.log(JMap.storage.maps.mapbuilderData);
		            callback(JMap.storage.maps.mapbuilderData);
	        	}
	        });
		}else{
	        callback(JMap.storage.maps.mapbuilderData);
		}
	},
	/**
	 * Retrieves the generic people mover objects created for the specific project.
	 *
	 * @method getPeopleMovers
	 * @param {Function} callback  This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
	 */
	getPeopleMovers:function(callback){
		if(JMap.storage.maps === undefined)JMap.storage.maps = {};
		if(JMap.storage.maps.peoplemovers === undefined){
	        $.ajax({url:JMap.serverUrl + '/rest/web/peoplemover/all/' , 
				type:"GET" ,
                // data:JSON.stringify(JMap.storage.device), 
	        	dataType: 'json',
	            headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
        		success:function (res) {
		        	JMap.storage.maps.peoplemovers = res;
		        	callback(JMap.storage.maps.peoplemovers);
	        	}});
	    }else{
	        callback(JMap.storage.maps.peoplemovers);
	    }
    },
	/**
	 * Retrieves an array of header objects assigned to the specific project. After the first time this is called the application caches the data.
	 *
	 * @method getHeader
	 * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
	 */
	getHeader:function(callback){
    	if(JMap.storage.header === undefined){
	        $.ajax({
	        	url: JMap.serverUrl + '/rest/web/header/' + JMap.storage.device.deviceId + "/" + JMap.storage.device.languageCode ,
	        	data: JSON.stringify(JMap.storage.device), 
	        	type:"GET",
	        	dataType:'json',
	        	contentType:"application/json",
	        	headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
	        	success:function (res) {
	        		JMap.storage.header = res;
	        		callback(JMap.storage.header);
	        	}
	        });
	    }else{
	        callback(JMap.storage.header);
	    }
	},
	/**
	 * Retrieves an array of advertisement or message objects assigned to the specific project.
	 *
	 * @method getAds
	 * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
	 */
	getAds:function(callback){
		if(JMap.storage.ads === undefined)JMap.storage.ads = [];
	 	$.ajax({ url: JMap.serverUrl + '/rest/web/ads/'  + JMap.storage.device.deviceId + "/" + JMap.storage.device.languageCode ,
                data: JSON.stringify(JMap.storage.device),
                dataType: 'json',
                contentType: 'application/json',
                type: "GET",
                headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
        }).done(function(res){
        	JMap.storage.ads = res; 
        	callback(JMap.storage.ads);
        }).fail(function(res){
        	callback(JMap.storage.ads);
        });
	},
	/**
	 * Retrieves an array of Label objects assigned to the specific project. After the first time this is called the application caches the data.
	 *
	 * @method getLabels
	 * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
	 */
	getLabels:function(callback){
    	if(JMap.storage.labels === undefined){
	        $.ajax({
	        	url: JMap.serverUrl + '/rest/web/labels/'  + JMap.storage.device.deviceId + "/" + JMap.storage.device.languageCode ,
	        	data: JSON.stringify(JMap.storage.device), 
	        	type:"GET",
	        	dataType:'json',
	        	contentType:"application/json",
	        	headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
	        	success:function (res) {
	        		// console.log(res);
	        		var parsedResult = res;
					for(var i = 0, len = res.length; i < len; i++){						
						parsedResult[i].filePath = JMap.serverUrl + parsedResult[i].filePath;
					}
	        		JMap.storage.labels = parsedResult;
	        		callback(JMap.storage.labels);
	        	}
	        });
	    }else{
	        callback(JMap.storage.labels);
	    }
	},
	/**
	 * Uses a String identifier to retrieve the specific Label object.
	 *
	 * @method getLabelById
	 * @param {String} id Reference this under the "Name" column in the CMS.
	 */
	getLabelById:function(id){
    	if(JMap.storage.labels === undefined){
	        console.error("Labels are not cached. Please call JMap.getLabels before trying to retrieve a specfic label.");
	    }else{
	    	return JMap.getAlphaByBeta(JMap.storage.labels, id, "description");
	    }
	},
	/**
	 * A call made to the CMS to check when the last known update (to the data) had been made.
	 *
	 * @method getRefresh
	 * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Object).
	 */
	getRefresh:function(callback){
		var dev = JMap.storage.device;
		$.ajax({ url: JMap.serverUrl + '/rest/web/device/refresh/'  + JMap.storage.device.deviceId ,
                data: JSON.stringify(dev),
                dataType: 'json',
                contentType: 'application/json',
                headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
                type: "POST"
        }).done(function(res){
        	callback(res);
        });
    },
    getLegendsByFloor:function(id, callback){
		if(JMap.storage.maps === undefined)JMap.storage.maps = {};
		if(JMap.storage.maps.legends === undefined)JMap.storage.maps.legends = {};
        $.ajax({url:JMap.serverUrl + '/rest/web/locations/legends/'  + JMap.storage.device.deviceId + '/' + JMap.storage.device.languageCode + '/' + id, 
        	data: JSON.stringify(JMap.storage.device),
            dataType: 'json',
            contentType: 'application/json',
            type: "GET",
            headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        },
        	success:function (res) {
	        	JMap.storage.maps.legends[id] = res;
	        	callback(JMap.storage.maps.legends[id]);
	        	// console.log("============================", id, res);
        	}});
    },
    getAllMapLabels:function(callback){
		if(JMap.storage.allMapLabels === undefined){
	        $.ajax({url:JMap.serverUrl + '/rest/web/maplabels/'  + JMap.storage.device.deviceId + '/' + JMap.storage.device.languageCode, 
	        	data: JSON.stringify(JMap.storage.device),
	            dataType: 'json',
	            contentType: 'application/json',
	            type: "GET",
	            headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
        		success:function (res) {
		        	JMap.storage.allMapLabels = res;
		        	callback(JMap.storage.allMapLabels);
		        	// console.log("============================", id, res);
	        	}});	
	    }else{
			callback(JMap.storage.allMapLabels);
		}
	},
	getMapLabelById:function(id){
		if(JMap.storage.allMapLabels === undefined){
	        console.error("Map Labels are not cached. Please call JMap.getAllMapLabels before trying to retrieve a specfic label.");
	    }else{
	    	return JMap.getAlphaByBeta(JMap.storage.allMapLabels, id, "componentId")
	    }
	},
    getMapLabelsByFloor:function(id, callback){
		if(JMap.storage.maps === undefined)JMap.storage.maps = {};
		if(JMap.storage.maps.maplabels === undefined)JMap.storage.maps.maplabels = {};
		if(JMap.storage.maps.maplabels[id+"map"] === undefined){
	        $.ajax({url:JMap.serverUrl + '/rest/web/locations/maplabels/' + JMap.storage.device.deviceId + '/' + JMap.storage.device.languageCode + '/' + id, 
	            dataType: 'json',
	            contentType: 'application/json',
	            type: "GET",
	            headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
        		success:function (res) {
		        	JMap.storage.maps.maplabels[id + "map"] = res;
		        	callback(JMap.storage.maps.maplabels[id + "map"]);
		        	// console.log("================Maplabels============",res);
	        	}});
		}else{
			callback(JMap.storage.maps.maplabels[id+"map"]);
		}
    },
    getDestinationLabelsByFloor:function(id, callback){
		if(JMap.storage.maps === undefined)JMap.storage.maps = {};
		if(JMap.storage.maps.maplabels === undefined)JMap.storage.maps.maplabels = {};
		if(JMap.storage.maps.maplabels[id+"dest"] === undefined){
	        $.ajax({url:JMap.serverUrl + '/rest/web/locations/destinationlabels/'   + JMap.storage.device.deviceId + '/' + JMap.storage.device.languageCode + '/' + id,
	            dataType: 'json',
	            contentType: 'application/json',
	            type: "GET",
	            headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
        		success:function (res) {
		        	JMap.storage.maps.maplabels[id + "dest"] = res;
		        	callback(JMap.storage.maps.maplabels[id + "dest"]);
		        	//console.log("================Desinationlabels============",res);
	        	}});
		}else{
			callback(JMap.storage.maps.maplabels[id+"dest"]);
		}
    },
    /**
     * Retrieves an array of Category objects in the specific project. After the first time this is called the application caches the data.
     *
     * @method getCategories
     * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
     */
    getCategories:function(callback){
    	if(JMap.storage.categories === undefined){
	        $.ajax({
	        	type: 'GET',
	            url: JMap.serverUrl + "/rest/web/category/all/" + JMap.storage.device.deviceId + '/' + JMap.storage.device.languageCode,
	            dataType: 'json',
	            contentType: 'application/json',
	            headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
	        }).success(function(response){
	            JMap.storage.categories = response;
	            callback(JMap.storage.categories);
	        });
	    }else{
	        callback(JMap.storage.categories);
	    }
    },
    /**
     * Queries the server using the search query provided to retrieve the appropriate keywords.
     *
     * @method getSearckByKeyWord
     * @param {String} query The search query.
     * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Object).
     * @param {int} key_maxValue The maximum number of results to be provided from the server. Defaults to 100.
     */
    getSearckByKeyWord:function(query, callback, key_maxValue){
    	//put online/offline logic here
    	if(query === ""){
    		callback([]);
    		return;
    	}
    	if(key_maxValue === undefined)key_maxValue = 100;
    	$.getJSON(JMap.serverUrl + "/rest/web/searchkeywords/get/"+JMap.storage.device.deviceId+"/"+JMap.storage.device.languageCode+"/" + query +"/" + key_maxValue, {}, callback);
    },
    /**
     * Using a query string this method will search through all the destinations those destination's keywords to find the appropriate results.
     *
     * @method getSearchByQuery
     * @param {String} query The search query.
     * @param {int} key_maxValue The maximum number of results that the method returns
     * @return An array of destination objects.
     */
    getSearchByQuery:function(query, key_maxValue) {
    	if(query === ""){
    		callback([]);
    		return;
    	}

    	var ar = JMap.storage.destinations;
    	var loosePatternArray = query.split(" ");
    	var patternMatchResults = [];
    	var results = [];
    	var searchPattern = new RegExp(query.toUpperCase());
    	var matchHigh = [];
    	var keyMatchHigh = [];
    	var matchLow = [];
    	var keyMatchLow = [];

    	for(var i = 0; i < loosePatternArray.length; i++) {
    		loosePatternArray[i] = new RegExp(loosePatternArray[i].toUpperCase());
    		patternMatchResults.push([]);
    	}

    	if(key_maxValue === undefined)key_maxValue = 50;
    	//Destination matching code

    	//First query test matches full destination name with spaces
		for(var i = 0; i < ar.length; i++) {
			
			var searchIndex = ar[i].name.toUpperCase().search(searchPattern);
			var bestKeywordIndex = 5000;
			var perfectMatchScore = 0;

			for(var j = 0; j < loosePatternArray.length; j++) {
				for(var k = 0; k < ar[i].keywordsAr.length; k++) {
					var keyIndex = ar[i].keywordsAr[k].toUpperCase().search(loosePatternArray[j]);
					if(keyIndex > -1) {
						if(bestKeywordIndex > keyIndex) {
							bestKeywordIndex = keyIndex;
						}

						if(keyIndex == 0) {
							perfectMatchScore++;
						}

					}
				}
			}

			//console.log(searchIndex, ar[i].name, searchPattern);
			if(searchIndex == 0) {
				matchHigh.push(ar[i]);
			} else if(bestKeywordIndex === 0) {
				if(!patternMatchResults[perfectMatchScore]) patternMatchResults[perfectMatchScore] = [];
				patternMatchResults[perfectMatchScore].push(ar[i]);
				keyMatchHigh.push(ar[i]);
			} else if (searchIndex >= 0) {
				matchLow.push(ar[i]);
			} else if (bestKeywordIndex != 5000) {
				keyMatchLow.push(ar[i]);
			}
		}

		results = matchHigh;

		//console.log(patternMatchResults)

		patternMatchResults.reverse();
		if(patternMatchResults.length) {
			for(var i = 0; i < patternMatchResults.length; i++) {
				if(results.length < key_maxValue) {
					results = results.concat(patternMatchResults[i]);
				}
			}			
		}
		results = results.slice(0,key_maxValue);

		//Tests if the minimum length requirement has been met. If not, continues with a search against lower levels
		if(results.length < key_maxValue) {
			results = results.concat(matchLow);
			results = results.slice(0,key_maxValue);
			if(results.length < key_maxValue) {
				results = results.concat(keyMatchLow);
				results = results.slice(0,key_maxValue);
			}			
		}
		return results;
    },
    /**
     * Retrieves an array of AttractLoop objects in the specific project.
     *
     * @method getAttractLoop
     * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Object).
     */
    getAttractLoop: function (callback) {
        $.ajax({
            url: JMap.serverUrl + '/rest/web/attracts/' + JMap.storage.device.deviceId + '/' + JMap.storage.device.languageCode,
            data: JSON.stringify(JMap.storage.device),
            dataType: 'json',
            contentType: 'application/json',
            type: "GET",
            headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json'
	        },
        }).done(callback);
    },
    getFloorById:function(id){//by clientId
    	if(!JMap.storage.maps || !JMap.storage.maps.model){
    		console.error("There is not model or building data");
    	}else{
    		var wp = JMap.storage.maps.model.getWPByJid(id);
    		// console.log(wp);
    		if(!wp){
    			//console.log("No waypoint assign to this id: " + id);
    			return;
    		}
    		return JMap.storage.maps.model.getFloorById(wp.mapid);
    	}
    },
    getFloorDataByClientId:function(id){//by destinationId
    	if(!JMap.storage.maps || !JMap.storage.maps.model){
    		console.error("There is not model or building data");
    	}else{
    		var f = JMap.getFloorById(JMap.getDestinationById(id).clientId);
    		if(f)return f;
    	}
    },
    getFloorDataBySequence:function(seq){//by sequence
    	if(!JMap.storage.maps || !JMap.storage.maps.model){
    		console.error("There is not model or building data");
    	}else{
    		console.log("Checking Sequence", seq);
    		return JMap.storage.maps.model.getFloorBySequence(seq);
    	}
    },
    /**
     * Retrieves the details specific to the requesting device. This is pulled and stored automatically if using the JMap Modular approach
     *
     * @method getDeviceDetails
     * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Object).
     * @return Once cached this method will return the Device Details object if no callback parameter is specified.
     */
    getDeviceDetails:function(callback){
    	if(!JMap.storage.deviceDetails){
    	  	$.ajax({
		        type:"GET",
		        url:JMap.serverUrl + "/rest/web/device/getDetails/" + JMap.storage.device.deviceId,
		        headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
		        dataType: "json",
        		success: function(data){
		            JMap.storage.deviceDetails = data;
		            callback(JMap.storage.deviceDetails);
		        }
		    });
    	}else{
    		if(callback)callback(JMap.storage.deviceDetails);
    		else return JMap.storage.deviceDetails;
    	}
    },
    /**
     * Retrieves the parameters specific to the project requesting. This is pulled and stored automatically if using the JMap Modular approach.
     *
     * @method getDeviceParams
     * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
     * @return Once cached this method will return the Device Parameters object if no callback parameter is specified.
     */
    getDeviceParams: function (callback) {
    	if(!JMap.storage.deviceParams){
    	  	$.ajax({
		        type:"GET",
		        url:JMap.serverUrl + "/rest/web/parameters/all/" + JMap.storage.device.deviceId,
		        headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
		        dataType: "json",
        		success: function(data){
		            JMap.storage.deviceParams = data;
		            callback(JMap.storage.deviceParams);
		        }
		    });
    	}else{
    		if(callback !== undefined)callback(JMap.storage.deviceParams);
    		else return JMap.storage.deviceParams;
    	}
    },
    /**
     * Uses a String Identifier(Key) to retrieve a specific parameter's value.
     *
     * @method getDeviceParamByKey
     * @param {String} key Reference this under the "Key" cloumn in the CMS.
     * @return String The value of the Key specified in the CMS. User's may choose to insert JSON into the field and can use "JSON.parse(value);" to convert the string to an object.
     */
    getDeviceParamByKey: function (key) {
	   	for(var i = 0, len = JMap.storage.deviceParams.length; i < len; i++){
	   		if(key === JMap.storage.deviceParams[i].parameterKey)return JMap.storage.deviceParams[i].parameterValue;
	   	}
    },
    /**
     * Uses a specific category integer identifier to retrieve an array of destination objects under the specified category. 
     *
     * @method getDestinationByCategory
     * @param {int} id Reference this under the "Id" column in the CMS.
     * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
     * @return Array of destination objects
     */

    getDestinationByCategory:function(id, callback){
    	if(!JMap.storage.destinationCategory)JMap.storage.destinationCategory = {};
    	if(!JMap.storage.destinationCategory[id]){
	    	$.ajax({
				type: 'GET',
				data: JSON.stringify(JMap.storage.device),
				headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
				url: JMap.serverUrl + '/rest/web/destination/byCategory/'   + JMap.storage.device.deviceId + '/' + JMap.storage.device.languageCode + '/' + id, 
				dataType: 'json', contentType: 'application/json'
			}).done(function(res){
				JMap.storage.destinationCategory[id] = res;
				callback(JMap.storage.destinationCategory[id]);
			});
    	}else{
    		// console.log("CACHED");
			callback(JMap.storage.destinationCategory[id]);
    	}
    },
    /**
     * Checks the server for any triggered messages or advertisements assigned to the specific component.
     *
     * @method getTriggeredAd
     * @param {} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
     * @param {String} type Type of the component that is requesting the triggered advertisement or message.
     * @param {int} compId The component's identifier. Reference this under the "Id" column in the CMS.
     */
    getTriggeredAd:function(callback, type, compId){
            var trig_dev = {deviceId:JMap.storage.device.deviceId, 
            	languageCode:JMap.storage.device.languageCode,
            	eventType:type,
            	componentId:Number(compId)
            };
            // console.log("REQUEST", trig_dev);
            $.ajax({
                url: ' /rest/web/triggerads/' + JMap.storage.device.deviceId + '/' + JMap.storage.device.languageCode + '/' + type + '/' + compId,
                data: JSON.stringify(trig_dev),
	            dataType: 'json',
	            contentType: 'application/json',
	            type: "GET",
	            headers: {
		            'Accept': 'application/json',
		            'Content-Type': 'application/json'
		        },
            }).done(function (res) {
            	// console.log("TRIGGERED RESULT", res);
                if (res[0]){
                	callback(res);
                }
            });
    },
    getDestinationsBySearchKey:function(key){
    	if(!JMap.storage.destinations){console.error("Destinations haven't been loaded yet.");}
    	var ar = [];
    	for(var i = 0, len = JMap.storage.destinations; i < len; i++){


    	}
    	return ar;
    },
    getAlphaByBeta:function(source, key, identifier){
    	for(var i = 0, len = source.length; i < len; i++){
	   		if(key === source[i][identifier])return source[i];
	   	}
    },
    getCorsOfUrl:function(urlToEncode, callback){
    	// console.log("Getting CORS for: "+ urlToEncode);
    	if(urlToEncode.charAt(0) === "/"){
    		urlToEncode = urlToEncode.substr(1, urlToEncode.length);
    		// console.log("New url ", urlToEncode);
    	}
		$.ajax({
			type: 'GET',
			// data: JSON.stringify(JMap.storage.device),
			// headers: {
	  //           'Accept': 'application/json',
	  //           'Content-Type': 'application/json'
	  //       },
			url: JMap.serverUrl + '/rest/web/cors/get/'  + window.btoa(urlToEncode),
			// dataType: 'json', contentType: 'application/json'
		}).done(function(res){

			// console.log("Got CORS ", res);
			callback(res);
		});


    },
    /**
     * Method used to track application life cycles and user interactions. Data is pushed to the Jibestream server.
     *
     * @method logEvent
     * @param {Object} log Specific object that has all required data for the Platform to track appropriately. 
     * @param {Funciton} onResult Optional callback for a successful log. 
	 *
     * @example 
     * JMap.addListener("DESTINATION_CLICK", function(ev, data){<br>
	 *	    <span style='padding-left:15px;'>var logData = {</span><br>
	 *	        <span style='padding-left:35px;'>deviceId:JMap.storage.device.deviceId,</span><br>
	 *	        <span style='padding-left:35px;'>languageCode:JMap.storage.device.languageCode,</span><br>
	 *	        <span style='padding-left:35px;'>componentTypeName:'destination',</span><br>
	 *	        <span style='padding-left:35px;'>eventTypeName:'clicked',</span><br>
	 *	        <span style='padding-left:35px;'>componentId:data.id, </span><br>
	 *	        <span style='padding-left:35px;'>keyword:''</span><br>
	 *	    <span style='padding-left:15px;'>};</span><br>
	 *	    <span style='padding-left:15px;'>JMap.logEvent(logData);</span><br>
	 * });
     *
     */



    logEvent:function(log, onResult){
        $.ajax({ url: JMap.serverUrl + '/rest/web/log/event',
            data: JSON.stringify(log),
            dataType: 'json',
            contentType: 'application/json',
            type: "POST"
         }).done(function (res) {
            if (res) {
                var out = [];
                // console.log('Event Logged');
            }
            if(onResult !== undefined)onResult(out);
         });
    }, 

    /**************** Smart Cities *****************/
    
    /**
	* Class with calls specific to the smart cities portion of the CMS.
	*
	* @class SmartCities
	* @constructor
	* @example 
	*      JMap.smartCities.getCategories(myCallBack);
	*/
    smartCities:{
        /**
         * Retrieves an Array of Attraction Objects from the CMS. After the first time this is called the application caches the data.
         *
         * @method getAttractions
         * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
         */
        getAttractions:function(callback){
            if(JMap.storage.attractions === undefined){
                $.ajax({
                    url:  JMap.serverUrl + "/rest/web/smartcities/attractions/get/" + JMap.storage.device.deviceId + "/" + JMap.storage.device.languageCode,
                    dataType: 'json',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }).success(function(response){
                    JMap.storage.attractions = response;
                    callback(JMap.storage.attractions);
                });
            }else{
                callback(JMap.storage.attractions);
            }
        },
        /**
         * Retrieves an Array of Smart Cities Category Objects from the CMS. After the first time this is called the application caches the data.
         * @method getCategories
         * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
         */
        getCategories:function(callback){
            if(JMap.storage.sc_categories === undefined){
                $.ajax({
                    url:  JMap.serverUrl + "/rest/web/smartcities/category/get/" + JMap.storage.device.deviceId + "/" + JMap.storage.device.languageCode,
                    dataType: 'json',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }).success(function(response){
                    JMap.storage.sc_categories = response;
                    callback(JMap.storage.sc_categories);
                });
            }else{
                callback(JMap.storage.sc_categories);
            }
        },
        /**
         * Retrieves an Array of Route Color Objects from the CMS. After the first time this is called the application caches the data.
         * @method getRouteColors
         * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Array).
         */
        getRouteColors:function(callback){
            if(JMap.storage.routecolors === undefined){
                $.ajax({
                    url:  JMap.serverUrl + "/rest/web/smartcities/routecolors/get/" + JMap.storage.device.deviceId + "/" + JMap.storage.device.languageCode,
                    dataType: 'json',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }).success(function(response){
                    JMap.storage.routecolors = response;
                    callback(JMap.storage.routecolors);
                });
            }else{
                callback(JMap.storage.routecolors);
            }
        },
        /**
         * Retrieves an Object with specific settings, coordinates and information regarding the specific device from the CMS. After the first time this is called the application caches the data.
         * @method getKioskConfig
         * @param {Function} callback This function gets called once the data has been retrieved and passes it to the function as a parameter(Object).
         */
        getKioskConfig:function(callback){
            if(JMap.storage.kioskconfig === undefined){
                $.ajax({
                    url:  JMap.serverUrl + "/rest/web/smartcities/kiosk/get/" + JMap.storage.device.deviceId + "/" + JMap.storage.device.languageCode,
                    dataType: 'json',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }).success(function(response){
                    JMap.storage.kioskconfig = response;
                    callback(JMap.storage.kioskconfig);
                });
            }else{
                callback(JMap.storage.kioskconfig);
            }
        },
    }
};


JMap.ui = {};
JMap.clickbuster = {};

JMap.ui.FastButton = function(element, handler) {
  this.element = element;
  this.handler = handler;

  element.addEventListener('touchstart', this, false);
  element.addEventListener('click', this, false);
};

JMap.ui.FastButton.prototype.handleEvent = function(event) {
  switch (event.type) {
    case 'touchstart': this.onTouchStart(event); break;
    case 'touchmove': this.onTouchMove(event); break;
    case 'touchend': this.onClick(event); break;
    case 'click': this.onClick(event); break;
  }
};

JMap.ui.FastButton.prototype.onTouchStart = function(event) {
  event.stopPropagation();

  this.element.addEventListener('touchend', this, false);
  document.body.addEventListener('touchmove', this, false);

  this.startX = event.touches[0].clientX;
  this.startY = event.touches[0].clientY;
};

JMap.ui.FastButton.prototype.onTouchMove = function(event) {
  if (Math.abs(event.touches[0].clientX - this.startX) > 10 ||
      Math.abs(event.touches[0].clientY - this.startY) > 10) {
    this.reset();
  }
};

JMap.ui.FastButton.prototype.onClick = function(event) {
  event.stopPropagation();
  this.reset();
  this.handler(event);

  if (event.type == 'touchend') {
    JMap.clickbuster.preventGhostClick(this.startX, this.startY);
  }
};

JMap.ui.FastButton.prototype.reset = function() {
  this.element.removeEventListener('touchend', this, false);
  document.body.removeEventListener('touchmove', this, false);
};

JMap.clickbuster.preventGhostClick = function(x, y) {
  JMap.clickbuster.coordinates.push(x, y);
  window.setTimeout(JMap.clickbuster.pop, 2500);
};

JMap.clickbuster.pop = function() {
  JMap.clickbuster.coordinates.splice(0, 2);
};

JMap.clickbuster.onClick = function(event) {
  for (var i = 0; i < JMap.clickbuster.coordinates.length; i += 2) {
    var x = JMap.clickbuster.coordinates[i];
    var y = JMap.clickbuster.coordinates[i + 1];
    if (Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
};

document.addEventListener('click', JMap.clickbuster.onClick, true);
JMap.clickbuster.coordinates = [];



var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};


(function (JMap) {
    var Building = (function () {
        /**************************************************************************/
        /****************************** Init functions ****************************/
        /**************************************************************************/

        function Building(container, width, height, styles) {
            this.styles = styles;

            // if(styles.mapStyles.mapConfig.positionOffset){
            // 	JMap.storage.maps.model.setOffset(styles.mapStyles.mapConfig.positionOffset);
            // }

        	this.addExtraStyles();

            this.container = container;
            this.containerWidth = width;
            this.containerHeight = height;
            this.floors = {};
            this.midList = {};
            this.waitTime = 800;//in milliseconds. Applies to pause between multifloor wayfinding this
            this.currentFloor = null;
            if (this.container)this.init();
            this.currentLegendId = null;

            JMap.storage.maps.building = this;


        }


        Building.prototype.addExtraStyles = function(){
        	var iconStyles = this.styles.mapStyles.iconStyles;
        	var labelStyle = this.styles.mapStyles.labelStyle;
        	var pathStyle = this.styles.mapStyles.pathStyles;
        	var popUpStyle = this.styles.mapStyles.popupCard;

        	// console.log(labelStyle);

        	try{

	        	var addedStyles = "<style>";
	        	addedStyles += ".point{width:15px;height:15px;position:absolute}"+
	        	"#map-mainview{position:absolute;width:100%;height:100%}"+
	        	".map-floor{position:absolute;height:100%;width:100%}"+
	        	".map-floor-base.inactive{pointer-events:none}"+
	        	".map-floor-base{position:absolute;transform-origin:0 0 0;-webit-perspective:1000px;display:block;left:0;top:0}"+
	        	".map-floor-container-base,.map-floor-legendsview-base,.map-floor-legendsview-base img{position:absolute}"+
	        	".map-floor-legendsview-base img.yahPoint{position:absolute;-webkit-transform-origin:50% 0;transform-origin:50% 0}"+
	        	".legendItem{background-size:100%;display:none}"+
	        	".legendItemActive{background:rgba(0,0,0,.2);border:4px solid #fff;border-radius:100px;display:block!important}"+
	        	".bubbleText{text-align:center;position:absolute;color:#fff;font-size:25px;width:250px;height:60px;line-height:30px;display:inline-block;vertical-align:middle}"+
	        	"#bubbleLeft>img{pointer-events:none}.pathView{position:absolute;z-index:10;pointer-events:none}"+
	        	".pathView img{position:absolute}.legendLabelItem{position:absolute;font-size:12px;white-space:nowrap}"+
	        	".legendsLabelsView{position:absolute}"+
	        	".map-floor-container-base .landmarks{position:absolute;z-index:10;font-family:Helvetica,Arial,Verdana;font-size:12px;color:#fff;transform-origin:0 0 0}"+
	        	".map-floor-container-base .landmarks .item{position:absolute;text-align:center;display:none;padding:0;margin:0}"+
	        	".map-floor-container-base .landmarks .lable div{position:absolute;font-size:20px;width:auto;text-align:center;background:none!important;color:#ccc}"+
	        	".map-floor-container-base .landmarks .mark .text{background-color:#000}"+
	        	".map-floor-container-base .landmarks #bubbleLeft.item,.map-floor-container-base .landmarks #yah.item,.map-floor-container-base .landmarks .item.mover{z-index:3!important}";
	        	
	        	addedStyles += ".map-floor-container-base .landmarks .item.legends img{position:absolute;top:-" + (iconStyles.mover?iconStyles.legends.offset.y :"15") + "px!important;left:-" + (iconStyles.mover?iconStyles.legends.offset.x:"15") + "px!important;width:" + (iconStyles.mover?iconStyles.legends.width:"15") + "px!important;height:" + (iconStyles.mover?iconStyles.legends.height + "px":"30") + "px!important}";

	        	addedStyles += ".map-floor-container-base .landmarks .item.mover img{position:absolute;top:-" + (iconStyles.mover?iconStyles.mover.offset.y :"25") + "px!important;left:-" + (iconStyles.mover?iconStyles.mover.offset.x:"25") + "px!important;width:" + (iconStyles.mover?iconStyles.mover.width :"50") + "px;height:" + (iconStyles.mover?iconStyles.mover.offset.y :"50") + "px}";
	        	
	        	if(labelStyle){
	        		for(var str in labelStyle){
		        		addedStyles += ".map-floor-container-base .landmarks .item" + (str == "all"?"":"." + str) + " >div{"
		        		var ls = labelStyle[str];
		            	for(var k in  ls){
		            	    addedStyles += k + ":" + ls[k] + ";";
		            	}
			        	addedStyles += "}";
	            	}
	        	}else addedStyles += ".map-floor-container-base .landmarks #bubbleLeft.item img,.map-floor-container-base .landmarks .item>div{font-size:14px;color:#fff;}";
	        	
	        	// addedStyles += ".map-floor-container-base .landmarks #bubbleLeft.item img{left:-40px!important}";
	        	addedStyles += ".map-floor-container-base .landmarks .item.legends{z-index:4!important}";

	            //Map Icons
	        	addedStyles += ".map-floor-container-base .landmarks #bubbleLeft.item img{top:" + (iconStyles.destination?"-" + iconStyles.destination.offset.y:"-20px") + "!important;left:" + (iconStyles.destination?"-" + iconStyles.destination.offset.x:"-20px") + "!important;width:" + (iconStyles.destination?iconStyles.destination.width:"40px") + ";height:" + (iconStyles.destination?iconStyles.destination.height:"40px") + "}";
	        	addedStyles += ".map-floor-container-base .landmarks #yah.item img{top:" + (iconStyles.youarehere?"-" + iconStyles.youarehere.offset.y:"-20px") + "!important;left:" + (iconStyles.youarehere?"-" + iconStyles.youarehere.offset.x:"-20px") + "!important;width:" + (iconStyles.youarehere?iconStyles.youarehere.width:"40px") + ";height:" + (iconStyles.youarehere?iconStyles.youarehere.height:"40px") + "}";

	        	if(popUpStyle){

	        		var moarStyle = ".map-floor-container-base .landmarks .item.card{z-index:3!important}";
	        		// console.log(popUpStyle);
	        		for(var str in popUpStyle.css){

	        			moarStyle += ".map-floor-container-base .landmarks .item.card div." + str + "{";
	        			var cls = popUpStyle.css[str];
	        			for(var stl in cls){
	        				// console.log(stl, cls[stl]);
	        				moarStyle += stl + ":" + cls[stl] + ";"
	        			}
	        			moarStyle += "} "
	        		}
	        		// console.log();
	        		// debugger;
	        	}
	        	addedStyles += moarStyle;
	        	
	    		addedStyles += this.generatePathStyle(pathStyle);    	

	    		addedStyles += "svg text {overflow:hidden}"


	        	addedStyles += "</style>";
	        	$("body").append(addedStyles);
        	}catch(e){
        		console.log("There was an Error generating added styles. ", e);
        	}
        }


        Building.prototype.generatePathStyle = function(pathStyle){
        	var st = "";
			if(pathStyle){
				switch(pathStyle.pathType){
					case "dots":
        		        st += ".map-floor-container-base .landmarks .step.item img{top:-" + (pathStyle.pathWidth/2).toString() + "px!important;left:-" + (pathStyle.pathWidth/2).toString() + "px!important}.step.item.mark{background:" + pathStyle.pathColor + ";width:" + pathStyle.pathWidth.toString() + "px;height:" + pathStyle.pathWidth.toString() + "px;border-radius:" + pathStyle.pathWidth + "px}";
						this.stepOffsetValue = pathStyle.spacing;
						break;
					case "line":
        		        st += ".map-floor-container-base .landmarks .step.item img{top:-" + (pathStyle.pathWidth/2).toString() + "px!important;left:-" + (pathStyle.pathWidth/2).toString() + "px!important}.step.item.mark{background:" + pathStyle.pathColor + ";width:" + pathStyle.pathWidth.toString() + "px;height:" + pathStyle.pathWidth.toString() + "px}";
        		        this.stepOffsetValue = pathStyle.pathWidth;
						break;
				}
        		if(pathStyle.additionalCss)st += ".step.item.mark{" + pathStyle.additionalCss + "}";
        	}else{
        		st += ".map-floor-container-base .landmarks .step.item img{top:-5px!important;left:-5px!important}.step.item.mark{background:#f00;width:10px;height:10px;border-radius:10px}";
        		this.stepOffsetValue = 14;
        	}
        	return st;
        };

        Building.prototype.init = function () {
            var _this = this;

            this.swiping = false;

            this.setCustomVariables();

            this.view = document.createElement("DIV");
            this.view.id = "map-mainview";

            this.container.append(this.view);

            this.pathProcessor = new JMap.PathProcessor(this.styles.mapStyles.mapConfig.positionOffset);

            this.timeouts = [];

            // this.parseStyles();

            this.onBuildingData();
        };

        Building.prototype.onLabelsLoaded = function(labels) {
            // console.log("Lables", labels);
            for(var i = 0; i < labels.length; i++) {
                if(labels[i]['description'] == "yah") {
                    this.yahImage = labels[i]['filePath'];
                    //console.log("YAH IMAGE", _this.yahImage);
                }
            }

            //Use local config
            var iconStyles = this.styles.mapStyles.iconStyles;
            // console.log(iconStyles);
            if(iconStyles.youarehere)this.yahImage = iconStyles.youarehere;
            if(iconStyles.destination)this.destinationImage = {url:iconStyles.destination.url, heading:0};
        };

        Building.prototype.setCustomVariables = function(){
            var mfwt = JMap.getDeviceParamByKey("MultiFloorWaitTime");
            this.multifloorWaitTime = 1250;//mfwt?mfwt:250;
        };

        Building.prototype.setYah = function () {
			if(!this.destYah || this.yahImage === undefined) return;
            this.yahIsSet = true;
            var fl = this.floors[this.destYah.mapid];
            fl.putYahByCoor(this.destYah.x, this.destYah.y, this.yahImage.url, this.yahImage.heading);
        };



        Building.prototype.displayLegend = function (value){
            var maps = JMap.storage.maps.data;
            for (var i = 0, n = maps.length; i < n; i++) {
                var fl = this.floors[maps[i].mapId];
                fl.legendsView.visible = value;
            }
        };


        Building.prototype.displayLabels = function (){
            var maps = JMap.storage.maps.data;
            var labels = [];
            var _this = this;
           
           function getFloorLabels(floor){
                JMap.getDestinationLabelsByFloor(floor.id, function(res){renderFloorLabels(res, floor)});
           }

           function renderFloorLabels(res, floor){
                floor.renderLabels(res, "mapLabels"+ floor.id, floor)
           }
          
            for (var i = 0, n = maps.length; i < n; i++) {
                var fl = this.floors[maps[i].mapId];
                getFloorLabels(fl)
            }
        };

        Building.prototype.dblTap = function (){
            var maps = JMap.storage.maps.data;
            for (var i = 0, n = maps.length; i < n; i++) {
                var fl = this.floors[maps[i].mapId];
                var newT, oldT;

                function pullFloor(floor){
                    addEvent(floor);
                }

                function addEvent(floor){
                    var thisFloor = floor
                    $(floor.mapContainer).on('touchstart',function(e, floor){
                        checkClick(thisFloor)
                    });
                }

                function checkClick(floor){
                    var d = new Date(), t = d.getTime();
                    newT = t;
                    if(newT <= oldT + 200) floor.tapZoom(floor);
                    oldT = t;
                }

                pullFloor(fl);

            }
        }


        Building.prototype.onDestintations = function (res) {
            for(var j = 0; j < JMap.storage.destinations.length; j++) {
                var floorClientID = JMap.getFloorDataByClientId(JMap.storage.destinations[j].id);
                if(floorClientID !== undefined) {
                    if(this.floors[floorClientID.mapId]) {
                        var currentDestination = JMap.storage.destinations[j];
                        currentDestination.wp = JMap.storage.maps.model.getWPByJid(JMap.storage.destinations[j].clientId);
                        var destinationMatch = null;


                        // for(var i = 0; i < this.clickHitRadiusParamsArray.length; i++) {
                        //     if(this.clickHitRadiusParamsArray[i][currentDestination.clientId]) {
                        //         destinationMatch = this.clickHitRadiusParamsArray[i][currentDestination.clientId];
                        //     }
                        // }

                        if(destinationMatch) {
                            currentDestination.clickRadius = destinationMatch;
                        } else {
                            currentDestination.clickRadius = 0;
                        }

                        this.floors[floorClientID.mapId].addFloorLocation(currentDestination);
                    }
                }
            }
        };




        /**************************************************************************/
        /****************************** Reset functions ***************************/
        /**************************************************************************/

        Building.prototype.clearAllLegends = function(id) {
            var maps = JMap.storage.maps.data;
            this.currentLegendId = null;
            for (var i = 0, n = maps.length; i < n; i++) {
                var fl = this.floors[maps[i].mapId];
                fl.resetLegends(id);
            }
        };

        Building.prototype.resetSmoothZoom = function() {
            var maps = JMap.storage.maps.data;
            // this.currentLegendId = null;
            for (var i = 0, n = maps.length; i < n; i++) {
                var fl = this.floors[maps[i].mapId];
                fl.rebootSmoothZoom();
                // fl.loadLegends();
                // fl.applyPanAndZoom(false);
                // console.log(fl);
            }
        };

        Building.prototype.clearAllTimeouts = function (){
            while(this.timeouts.length > 0){
                clearTimeout(this.timeouts.pop());
            }
        };

        Building.prototype.resetAllMaps = function (){
            this.clearAllTimeouts();
            // this.removePath();
            var maps = JMap.storage.maps.data;
            for (var i = 0, n = maps.length; i < n; i++) {
                var fl = this.floors[maps[i].mapId];
                fl.resetFloor();
                if(maps[i].defaultMapForDevice === true){
                    $(fl.view).show();
                    this.switchFloor(maps[i].mapId);
                    $(fl.mapView).removeClass("inactive");
                }else{
                    TweenLite.set(fl.view, {alpha:0});
                    $(fl.view).hide();
                }
                fl.clearPath();
            }
            // JMap.fire("pathAnimationComplete");
        };

        Building.prototype.unload = function () {
            // this.removePath();
            var _floors = JMap.storage.maps.data;
            for(var i = 0; i < _floors.length; i++){
                var fl = this.floors[_floors[i].mapId];
                fl.removeDragHandler();
                fl.removeInteractiveHandler();
                fl.view.removeAllChildren();
                fl = null;
            }
            this.container.html("");
            $(this).trigger("unloadComplete");
        };

        Building.prototype.clearYah = function () {
            var maps = JMap.storage.maps.data;
            for (var i = 0, n = maps.length; i < n; i++) {
                var fl = this.floors[maps[i].mapId];
                fl.clearYah();
            }
            this.yahIsSet = false;
        };

        Building.prototype.hideShowLegend = function(hideShow){
            var maps = JMap.storage.maps.data;
            for (var i = 0, n = maps.length; i < n; i++) {
                this.floors[maps[i].mapId].hideShowLegend(hideShow);
            }
        };

        Building.prototype.hideShowLabels = function(hideShow){
            var maps = JMap.storage.maps.data;
            JMap.fire("mapChanged", [floorId]);
            for (var i = 0, n = maps.length; i < n; i++) {
                this.floors[maps[i].mapId].hideShowLegend(hideShow);
            }
        };


        /**************************************************************************/
        /************************** Wayfinding functions **************************/
        /**************************************************************************/

        Building.prototype.startWayFinding = function (startDestinationObj, endDestinationObj, useElevator) {
            this.resetAllMaps();
            if(startDestinationObj === undefined || endDestinationObj === undefined){
                return;
            }


            if(startDestinationObj.clientId && !startDestinationObj.jids)this.setNewYah(startDestinationObj);
            if(endDestinationObj.clientId && !endDestinationObj.jids)this.setNewEndPoint(endDestinationObj);

            this.endDestination = endDestinationObj;

            this.fromYahToDest(useElevator);
        };

        Building.prototype.setNewYah = function(start){
            this.clearYah();
            this.destYah = (typeof start === "string")?JMap.storage.maps.model.getYah():JMap.storage.maps.model.getWPByJid(start.clientId);
            this.setYah();
            // $(this.floors[this.destYah.mapid].mapView).trigger("updateYah");

            //If start is on a seperate floor:
            var wp = JMap.storage.maps.model.getWPByJid(start.clientId);
            if(wp)this.switchFloor(wp.mapid);

        };


        Building.prototype.updateCurrentLocation = function(x, y, heading, floorSeq){
            this.clearYah();
            //get closest wp to location.
            var mapId = JMap.getFloorDataBySequence(floorSeq).mapId;

           	var fl = this.floors[mapId];

           	var newPoint = fl.getWayPointNearCoor(x,y,50)[0];
            this.destYah = newPoint?newPoint:this.destYah;
            this.yahImage.heading = heading;
            this.setYah();

            if(newPoint)this.switchFloor(mapId);
        };

        Building.prototype.setNewEndPoint = function(end){
            this.targetDestination = (typeof end === "string")?JMap.storage.maps.model.getYah():JMap.storage.maps.model.getWPByJid(end.clientId);
        };

        Building.prototype.fromYahToDest = function (useElevator) {
            // this.resetAllMaps();
        

            var speed = this.styles.mapStyles.pathStyles.duration * 1000;

            this.pathData = this.pathProcessor.compile(JMap.storage.maps.model.findWay(this.destYah, this.targetDestination, useElevator), this.endDestination.name, this.stepOffsetValue);
            
            var floorInfo = [];
            for(var i = 0; i < this.pathData.length; i++){
                if(this.pathData[i].steps.length === 0){
                    return;
                }
                floorInfo.push({name:this.floors[this.pathData[i].mapid].description, mapid:this.pathData[i].mapid});
            }
            if(floorInfo.length === 1)floorInfo.push(floorInfo[0]);
            JMap.fire("wayfindingFloorInfo", [floorInfo]);

            var floorsInvolved = this.determinFloorsInvolved();
            var _this = this;
            if(!this.pathData[0]) return;
            JMap.fire("pathAnimationStart");
            this.switchFloor(this.pathData[0].mapid);
            var t = this.displayPathOnFloor(this.pathData[0], this.floors[this.pathData[0].mapid]);
            var v1 = this.floors[this.pathData[0].mapid];
            var v2 = this.pathData[1]?this.floors[this.pathData[1].mapid]:null;


            // if(v2 !== null)this.directionVals = this.getDirectionValues(v1, v2);

            var transitionWait = this.multifloorWaitTime;

            // switch(floorsInvolved.length){
            //     case 1:
            //         this.showDestinationByFloor(this.pathData[0].mapid, (t*0.8)*1000);
            //         this.timeouts.push(setTimeout(function(){JMap.fire("pathAnimationComplete");}, (t*0.8)*1000));
            //         break;
            //     default:
            //         this.showMoverByFloor(this.pathData[0].mapid, this.pathData[0].mover.imagePath, this.pathData[0].points[this.pathData[0].points.length-1],(t*0.8)*1000);
            //         this.showMoverByFloor(this.pathData[1].mapid, this.pathData[0].mover.imagePath, this.pathData[1].points[0], (t*1000) + transitionWait + 1000);//timeout plus floor transition time

            //         this.timeouts.push(setTimeout(function(){
            //             _this.switchFloor(_this.pathData[1].mapid, true);
            //         }, t*1000 + transitionWait));

            //         this.timeouts.push(setTimeout(function(){
            //             var t2 = _this.displayPathOnFloor(_this.pathData[1], _this.floors[_this.pathData[1].mapid]);
            //             _this.showDestinationByFloor(_this.pathData[1].mapid, (t2*0.8)*1000);
            //             _this.timeouts.push(setTimeout(function(){
            //                 _this.clearAllTimeouts();
            //                 JMap.fire("pathAnimationComplete");
            //                 _this.switchFloor(_this.pathData[0].mapid, true);

            //             }, (t2*1000) + (t*1000 + transitionWait)));
            //         }, 2000));
            //         break;
            // }
            switch(floorsInvolved.length){
                case 1:
                    this.showDestinationByFloor(this.pathData[0].mapid, speed * 0.8);
                    this.timeouts.push(setTimeout(function(){JMap.fire("pathAnimationComplete");}, speed));
                    break;
                default:
                    this.showMoverByFloor(this.pathData[0].mapid, this.pathData[0].mover.imagePath, this.pathData[0].points[this.pathData[0].points.length-1],speed*0.7);

                    this.timeouts.push(setTimeout(function(){
                        _this.switchFloor(_this.pathData[1].mapid, true);
                    }, 3000 + transitionWait));

                    this.timeouts.push(setTimeout(function(){
                        var t2 = _this.displayPathOnFloor(_this.pathData[1], _this.floors[_this.pathData[1].mapid]);
                        _this.showDestinationByFloor(_this.pathData[1].mapid, speed * 0.7);
                    	_this.showMoverByFloor(_this.pathData[1].mapid, _this.pathData[0].mover.imagePath, _this.pathData[1].points[0], 100);//timeout plus floor transition time
                        _this.timeouts.push(setTimeout(function(){
                            _this.clearAllTimeouts();
                            JMap.fire("pathAnimationComplete");
                            _this.switchFloor(_this.pathData[0].mapid, true);

                        },  speed +  transitionWait));
                    }, speed + 850 + transitionWait));
                    break;
            }
        };

        Building.prototype.determinFloorsInvolved = function (){
			if(!this.pathData || !this.pathData[0]) return null;
            var numFloors = [this.pathData[0].mapid];
            if(this.pathData.length === 1){
                return numFloors;
            }
            var idStart = {id:this.pathData[0].mapid, seq:this.floors[this.pathData[0].mapid].sequence};
            var idEnd = {id:this.pathData[1].mapid, seq:this.floors[this.pathData[1].mapid].sequence};
            var direction = idEnd.seq < idStart.seq? "up":"down";

            for(var i = 0, len = JMap.storage.maps.data.length; i < len; i++){
                // check if sequence is between
                var flData = JMap.storage.maps.data[i];
                switch(direction){
                    case "up":
                        if(flData.floorSequence < idStart.seq && flData.floorSequence > idEnd.seq)numFloors.push(flData.mapId);
                        break;
                    case "down":
                        if(flData.floorSequence > idStart.seq && flData.floorSequence < idEnd.seq)numFloors.push(flData.mapId);
                        break;
                }
            }
            numFloors.push(idEnd.seq);
            return numFloors;
        };


       Building.prototype.pathAnimationComplete = function (){
            this.clearAllTimeouts();
            // this.currentFloor.addDragHandler();
        };

        /**************************************************************************/
        /********************** Desitnation render functions **********************/
        /**************************************************************************/


        Building.prototype.showPopupDestination = function (destination) {
            var wp = JMap.storage.maps.model.getWPByJid(destination.clientId);
            this.switchFloor(wp.mapid);
            this.floors[wp.mapid].showBubbleByWP(destination.name, wp, "searchDestination");
        };

        Building.prototype.showCustomPopupDestination = function (destination, html) {
            var wp = JMap.storage.maps.model.getWPByJid(destination.clientId);
            this.switchFloor(wp.mapid);
            this.floors[wp.mapid].showPopUpCustom(html, wp, "searchDestination");
        };

        Building.prototype.showDestinationByFloor = function (mapid, timeout){
            if(!timeout)timeout = 1;
            var _this = this;
            var nF = this.floors[mapid];
            nF.showBubble(this.targetDestination.label);
        };

        Building.prototype.showMoverByFloor = function (mapid, moverImg, wp, timeout){
            if(!timeout)timeout = 1;
            var _this = this;
            var nF = this.floors[mapid];
            this.timeouts.push(setTimeout(function(){
                nF.showMoverByWP(moverImg, wp);
            }, timeout));
        };


        /**************************************************************************/
        /************************ Floor control functions *************************/
        /**************************************************************************/


        Building.prototype.displayPathOnFloor = function (pathData, floorView) {
            return floorView.showPath(pathData);
        };


        Building.prototype.showLegendsById = function (id, show){
            // this.currentLegendId = id;
            var maps = JMap.storage.maps.data;
            for (var i = 0, n = maps.length; i < n; i++) {
                if(show === true) this.floors[maps[i].mapId].showLegendsById(id);
                else this.floors[maps[i].mapId].hideLegendsById(id);
            }
        };


        Building.prototype.switchFloor = function(floorId, animate) {
            var _this = this;
            var animationDuration = JMap.getDeviceParamByKey('FloorAnimationSpeed');
            var floorNameSwitchSpeed = (animationDuration * 1000) / 2;

            if (!this.currentFloor || this.currentFloor.id == floorId) return 100;
            var oldview = this.currentFloor.view;
            var oldId = this.currentFloor.id;
            var newFloor = this.floors[floorId];
            if (!newFloor) {
                return;
            }
            $(".map-floor-base").addClass("inactive");

            //Which floor logic
            var yVal = newFloor.sequence > this.currentFloor.sequence ? "Down" : "Up";
            // alert(yVal)
            if (animate !== undefined && animate === true) {
                if (yVal === 'Up') {
                    setTimeout(function() {
                        JMap.fire("mapChanged", [floorId]);
                    }, floorNameSwitchSpeed);
                    TweenLite.to(oldview, animationDuration, {
                        y: (500),
                        alpha: 0,
                        ease: Power2.easeInOut,
                        onComplete: function(_oldId, _oldview) {
                            setTimeout(function() {
                                //console.log("Resetting", _oldId);
                                $("#map-floor-mapview-" + _oldId).smoothZoom("Reset");
                                $("#map-floor-mapview-" + _oldId).removeClass("inactive");
                                $(_oldview).hide();
                            }, 50);
                        },
                        onCompleteParams: [oldId, oldview]
                    });

                    $(newFloor.view).show();
                    TweenLite.fromTo(newFloor.view, animationDuration, {
                        y: -500,
                        alpha: 0
                    }, {
                        y: 0,
                        alpha: 1,
                        ease: Power2.easeInOut
                    });
                    this.currentFloor = newFloor;

                } else if (yVal === 'Down') {
                    setTimeout(function() {
                        JMap.fire("mapChanged", [floorId]);
                    }, floorNameSwitchSpeed);
                    TweenLite.to(oldview, animationDuration, {
                        y: -(500),
                        alpha: 0,
                        ease: Power2.easeInOut,
                        onComplete: function(_oldId, _oldview) {
                            setTimeout(function() {
                                //console.log("Resetting", _oldId);
                                $("#map-floor-mapview-" + _oldId).smoothZoom("Reset");
                                $("#map-floor-mapview-" + _oldId).removeClass("inactive");
                                $(_oldview).hide();
                            }, 50);
                        },
                        onCompleteParams: [oldId, oldview]
                    });

                    $(newFloor.view).show();
                    TweenLite.fromTo(newFloor.view, animationDuration, {
                        y: 500,
                        alpha: 0
                    }, {
                        y: 0,
                        alpha: 1,
                        ease: Power2.easeInOut
                    });
                    this.currentFloor = newFloor;
                }


                // $(newFloor.view).show();
                // TweenLite.fromTo(newFloor.view, 1, {y:-500, alpha:0}, {y:0,alpha:1, ease:Power2.easeInOut});
                // this.currentFloor = newFloor;
            } else {
                TweenLite.set(oldview, {
                    alpha: 0
                });
                $(oldview).hide();
                $(newFloor.view).show();
                TweenLite.set(newFloor.view, {
                    y: 0,
                    alpha: 1
                });
                this.currentFloor = newFloor;
                $("#map-floor-mapview-" + floorId).removeClass("inactive");
                JMap.fire("mapChanged", [floorId]);
            }
            return 600;

        };

        Building.prototype.onFloorLoaded = function () {
            	this.mapsCounter++;
            	// console.log("FLOOR LOADED", this.mapsCounter, this.mapsData.length);
            	if(this.mapsData.length >= this.mapsCounter){
            		// JMap.fire(JMap.MODULE_READY);
            		JMap.fire(JMap.MAPS_LOADED);
            		var _this = this;

            		// var rotation = 0;
            		// $("#svg-" + this.currentFloor.id).on("click", function(e){
            		// 	console.log("Clickity click click >>--->", e);
            		// 	_this.updateCurrentLocation(e.pageX, e.pageY, rotation += 45, _this.currentFloor.sequence);
            		// });
            	}

        };

        Building.prototype.onBuildingData = function () {
            this.mapsData = JMap.storage.maps.data;
            var _this = this;
            this.defaultMap = 1;
            this.mapsCounter = 0;
           	// console.log("THIS IS LE DATER!", this.container, this.containerWidth, this.containerHeight, this.styles);
            // console.log('MAPSSS', maps)
            // for (var i = maps.length - 1, n = -1; i > n; i--) {
            JMap.addListener("floorLoaded", $.proxy(this.onFloorLoaded, this));

            for (var i = 0, n = this.mapsData.length; i < n; i++) {

                var fl = new JMap.Floor(this.mapsData[i].mapId, this.container, this.containerWidth, this.containerHeight, this.styles);
                fl.floorTitle = this.mapsData[i].locationName;
                fl.setGridReference(this.mapsData[i].grid);
                fl.loadImage(this.mapsData[i].uri);
                
                fl.description = this.mapsData[i].description;
                fl.sequence = this.mapsData[i].floorSequence;
                this.floors[this.mapsData[i].mapId] = fl;
                this.view.appendChild(fl.view);

                if(this.mapsData[i].svgMap) {
                	JMap.getCorsOfUrl(this.mapsData[i].svgMap, $.proxy(fl.loadSVG, fl));
                	// fl.loadSVG(JMap.serverUrl + '/rest/web/cors/get/'  + window.btoa(this.mapsData[i].svgMap));
                    // fl.loadSVG(this.mapsData[i].svgMap);
                }else{
                	// fl.loadSVG("");
                }

                if(this.mapsData[i].defaultMapForDevice === true){
                    this.defaultMap = this.mapsData[i].mapId;
                }else{
                    TweenLite.to(fl.view, 0, {alpha:0});
                }
            }
            this.currentFloor = this.floors[this.defaultMap];
            JMap.fire("mapChanged", [this.currentFloor.id]);
            // this.currentFloor.floorDestinations = Object(this.midList);

            this.floorlevelCurrent = this.floors[this.defaultMap].sequence;
            $(this.view).swipe({
                swipe:$.proxy(_this.swipeFloor, _this),
                //Default is 75px, set to 0 for demo so any distance triggers swipe
                threshold:25,
                fingers:1
            });

        
            JMap.getDestinations(function(res){_this.onDestintations(res);});

            this.destYah = JMap.storage.maps.model.getYah();
            JMap.getLabels($.proxy(this.onLabelsLoaded, this));
            this.hideShowLegend('hide');
        };




        Building.prototype.setDefaultLocation = function(){
            this.setNewYah("Default");
        };


        /***********************************************************************************************/

        Building.prototype.swtichListener = function (action) {
            $(this.currentFloor).swipe(action);
        };

        Building.prototype.swipeFloor = function (event, direction, distance, duration, fingerCount, fingerData) {
            //console.log("You swiped " + direction, "Able to switch: ", this.currentFloor.ableToSwitch);

            if(this.currentFloor.ableToSwitch === false)return;
            if(this.swiping === true)return;
            this.swiping = true;
            setTimeout($.proxy(function(){this.swiping = false;}, this), 1000);

            var mapId;
            // var maps = JMap.storage.maps.data;
            var min;
            var max;

            for(var i =0; i < this.mapsData.length; i++){
                if(!min || min > this.mapsData[i].floorSequence)min = this.mapsData[i].floorSequence;
                if(!max || max < this.mapsData[i].floorSequence)max = this.mapsData[i].floorSequence;
            }

            switch(direction){
                case "up":
                    if(this.floorlevelCurrent >= max)return;
                    this.floorlevelCurrent++;
                    break;
                case "down":
                    if(this.floorlevelCurrent <= min)return;
                    this.floorlevelCurrent--;
                    break;
            }

            for(i =0; i < this.mapsData.length; i++){
                if(this.mapsData[i].floorSequence == this.floorlevelCurrent){
                    mapId = this.mapsData[i].mapId;
                    //console.log("Switch to " + mapId);
                    JMap.fire("showMapById", [mapId]);
                    return;
                }
            }
        };


        

        
        Building.prototype.setFrom = function (newYah) {
            var fl = this.floors[newYah.mapid];
            this.destYah = newYah;
            switchFloor(newYah.mapid);
        };



	/********************************************************/
    /*********************** SVG MAPS ***********************/
    /********************************************************/

    Building.prototype.getMapsWithDirections = function(destinationId){

    	var destination = JMap.getDestinationByClientId(destinationId);
    	var returnValue = [];
    	if(!destination){
    		console.log("NO MATCHING DESTINATION TO THE ID: " + destinationId);
    		return returnValue;;
    	}

    	var pStyle = this.styles.mapStyles.pathStyles;
    	var AllData = this.pathProcessor.compileForExport(JMap.storage.maps.model.findWay(this.destYah, JMap.storage.maps.model.getWPByJid(destinationId)), destination.name);
    	var pathData = AllData.pathData;

    	for(var i =0; i < pathData.length; i++){
    		var dataObj = {};


    		var currFloor = this.floors[pathData[i].mapid];
    		var $svgOrig = $("#svg-" + currFloor.id).find("svg");
    		var svgHtml = $svgOrig.html();
    		// for (var i = 0; i < currFloor.excludeLayers.length; i++) {
    		// 	var st = svgHtml.indexOf('<g id="' +  currFloor.excludeLayers[i] + '"');
    		// 	var lt = svgHtml.indexOf("</g>", st + 1);
    		// 	console.log(st, lt);

    		// };



			var newSVG = document.createElementNS("http://www.w3.org/2000/svg", 'svg');

			newSVG.innerHTML = svgHtml;
			newSVG.setAttributeNS("http://www.w3.org/2000/svg","version" , "1.1");
			newSVG.setAttributeNS("http://www.w3.org/2000/svg", "x" , "0");
			newSVG.setAttributeNS("http://www.w3.org/2000/svg", "y" , "0");
			newSVG.setAttribute("xmlns" , "http://www.w3.org/2000/svg");
			newSVG.setAttribute("xmlns:xlink" , "http://www.w3.org/1999/xlink");
			newSVG.setAttribute("xml:space" , "preserve");

			var newGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
			newGroup.id = "pathLayer-" + currFloor.id;

			var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path');
			newElement.setAttribute("d",pathData[i].svgPath);
			newElement.style.stroke = pStyle.pathColor?pStyle.pathColor:"#000";
			newElement.style.strokeWidth = pStyle.pathWidth?pStyle.pathWidth:"5px";
			newElement.style["stroke-linejoin"] = "round";
			newElement.style["stroke-linecap"] = "round";
			var lt = newElement.getTotalLength();
			newElement.style["stroke-dasharray"] = lt;
			newElement.style["stroke-dashoffset"] = "0px";

			newElement.style.fill = "none";

			newGroup.appendChild(newElement);

    		newSVG.appendChild(newGroup);

			var bounds = d3.select(newElement).node().getBBox();
			var bounds2 = this.getBoundsOfPath(pathData[i].originalPoints);

			var wGh = bounds2.width > bounds2.height?bounds2.width:bounds2.height;

			newSVG.setAttributeNS("http://www.w3.org/2000/svg", "viewbox", (bounds2.x - 75) + " " + (bounds2.y - 75)+ " " + (wGh + 150)   + " " + (wGh + 150));
			newSVG.setAttributeNS("http://www.w3.org/2000/svg", "enable-background", "new " + (bounds2.x - 75) + " " + (bounds2.y - 75)+ " " + (wGh + 150)   + " " + (wGh + 150));


			// newSVG.setAttribute("width", bounds2.width);
			// newSVG.setAttribute("height" , bounds2.height);

			newSVG.setAttribute("width", wGh + 150);
			newSVG.setAttribute("height" , wGh + 150);



			var iconStyles = this.styles.mapStyles.iconStyles;

			var startImg = document.createElementNS("http://www.w3.org/2000/svg", 'image');
			startImg.setAttribute("width", iconStyles.youarehere.width);
			startImg.setAttribute("height", iconStyles.youarehere.height);
			var endImg = document.createElementNS("http://www.w3.org/2000/svg", 'image');
			endImg.setAttribute("width", iconStyles.destination.width);
			endImg.setAttribute("height", iconStyles.destination.height);
			var startpoint = pathData[i].points[0];
			var endpoint = pathData[i].points[pathData[i].points.length - 1];

			var positionOffset = this.styles.mapStyles.mapConfig.positionOffset;

		

			if(pathData.length > 1){
				
				switch(i){
					case 0:

						startImg.setAttribute("xlink:href", iconStyles.youarehere.url);
						startImg.setAttribute("x", startpoint.x + positionOffset.x - parseInt(iconStyles.youarehere.offset.x.substr(0, iconStyles.youarehere.offset.x.length - 2)));
						startImg.setAttribute("y", startpoint.y + positionOffset.y - parseInt(iconStyles.youarehere.offset.y.substr(0, iconStyles.youarehere.offset.y.length - 2)));

						//mover
						endImg.setAttribute("xlink:href", JMap.serverUrl +  pathData[0].mover.imagePath);
						endImg.setAttribute("x", endpoint.x + positionOffset.x - parseInt(iconStyles.movers.offset.x.substr(0, iconStyles.movers.offset.x.length - 2)));
						endImg.setAttribute("y", endpoint.y + positionOffset.y - parseInt(iconStyles.movers.offset.y.substr(0, iconStyles.movers.offset.y.length - 2)));

						break;
					case 1:
						
						

						//mover
						startImg.setAttribute("xlink:href", JMap.serverUrl + pathData[0].mover.imagePath);
						startImg.setAttribute("x", startpoint.x + positionOffset.x - parseInt(iconStyles.movers.offset.x.substr(0, iconStyles.movers.offset.x.length - 2)));
						startImg.setAttribute("y", startpoint.y + positionOffset.y - parseInt(iconStyles.movers.offset.y.substr(0, iconStyles.movers.offset.y.length - 2)));

						endImg.setAttribute("xlink:href", iconStyles.destination.url);
						endImg.setAttribute("x", endpoint.x + positionOffset.x - parseInt(iconStyles.youarehere.offset.x.substr(0, iconStyles.youarehere.offset.x.length - 2)));
						endImg.setAttribute("y", endpoint.y + positionOffset.y - parseInt(iconStyles.youarehere.offset.y.substr(0, iconStyles.youarehere.offset.y.length - 2)));
						break;
				}

			}else{
				

				startImg.setAttribute("xlink:href", iconStyles.youarehere.url);
				startImg.setAttribute("x", startpoint.x + positionOffset.x - parseInt(iconStyles.youarehere.offset.x.substr(0, iconStyles.youarehere.offset.x.length - 2)));
				startImg.setAttribute("y", startpoint.y + positionOffset.y - parseInt(iconStyles.youarehere.offset.y.substr(0, iconStyles.youarehere.offset.y.length - 2)));
				
				endImg.setAttribute("xlink:href", iconStyles.destination.url);
				endImg.setAttribute("x", endpoint.x + positionOffset.x - parseInt(iconStyles.youarehere.offset.x.substr(0, iconStyles.youarehere.offset.x.length - 2)));
				endImg.setAttribute("y", endpoint.y + positionOffset.y - parseInt(iconStyles.youarehere.offset.y.substr(0, iconStyles.youarehere.offset.y.length - 2)));


				// newSVG.appendChild(startImg);
				// newSVG.appendChild(endImg);

			}
			newSVG.appendChild(startImg);
			newSVG.appendChild(endImg);



			returnValue.push($('<?xml version="1.0" encoding="utf-8" ?>' + newSVG.outerHTML));


    	}



    	return {svgs:returnValue, textDirections:AllData.textDirections};


    };


	Building.prototype.getBoundsOfPath = function(points){
		var positionOffset = this.styles.mapStyles.mapConfig.positionOffset;

		var w = 0;
		var h = 0;
		var x = points[0].x;
		var y = points[0].y;
		for (var i = 0; i < points.length; i++) {
			if(points[i].x > w)w=points[i].x;
			if(points[i].y > h)h=points[i].y;
			if(points[i].x < x)x=points[i].x;
			if(points[i].y < y)y=points[i].y;
		};
		return {x:x+ positionOffset.x, y:y + positionOffset.y, width:w-x, height:h-y};
	};




        return Building;
    })();
    JMap.Building = Building;



    /********************************************************/
    /***********************Math Calc************************/
    /********************************************************/

    /**
     * Event that gets fired when a has been calculated.
     *
     * @event onTextDirections
     * @param {Array} Directions and array of directions involved in the process.
     *
     */

    var PathProcessor = (function () {
        function PathProcessor(offset) {
        	if(offset)this.offset = offset;
        	else this.offset = {x:0, y:0};

        }

        PathProcessor.prototype.compile = function(data, dest, steps){
            var dt = this.processDirections(data);

            var p_data = dt.points;

            for(var i = 0, len = p_data.length; i < len; i++){
                p_data[i].steps = this.breakToSteps(p_data[i].points, steps?steps:20);
                p_data[i].svgPath = this.convertSVG(p_data[i].points);

            }
            JMap.fire("onTextDirections", [dt.textArrayData, dest]);
            return p_data;
        };

        PathProcessor.prototype.compileForExport = function(data, dest, steps){
            var dt = this.processDirections(data);

            var p_data = dt.points;

            for(var i = 0, len = p_data.length; i < len; i++){
                p_data[i].steps = this.breakToSteps(p_data[i].points, steps?steps:20);
                p_data[i].svgPath = this.convertSVG(p_data[i].points);

            }

            return {pathData:p_data, textDirections:dt.textArrayData};
        };

        PathProcessor.prototype.breakToSteps = function (points, step) {
            var ar = [];
            var n = points.length;

            var getDistance = function (p1, p2) {return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));};
            if (n < 2) {return null;}
            ar.push(points[0]);
            var i = 0;
            while ((++i) < n) {
                var pt1 = points[i - 1];
                var pt2 = points[i];
                if(!pt1 || !pt1){
                    ar = [];
                    break;
                }
                var dist = getDistance(pt1, pt2);
                if (dist < step) {
                    ar.push(pt2);
                    continue;
                }
                var steps = Math.round((dist / step));
                var newstep = dist / steps;
                ar = ar.concat(this.lineInterpolate(pt1, pt2, newstep));
            }
            return ar;
        };

        PathProcessor.prototype.convertSVG = function (points) {
            var str = "";
            var n = points.length;

            if (n < 2) {return null;}
            str += "M " + (points[0].x + this.offset.x) + " " + (points[0].y + this.offset.y);
            for(var i = 1; i < n; i ++){
                str += " L " + (points[i].x + this.offset.x) + " " + (points[i].y + this.offset.y);
            }
            return str;
        };

        PathProcessor.prototype.lineInterpolate = function (point1, point2, distance) {
            var xabs = Math.abs(point1.x - point2.x);
            var yabs = Math.abs(point1.y - point2.y);
            var xdiff = point2.x - point1.x;
            var ydiff = point2.y - point1.y;

            var length = Math.sqrt((Math.pow(xabs, 2) + Math.pow(yabs, 2)));
            var steps = length / distance;

            var xstep = xdiff / steps;
            var ystep = ydiff / steps;

            var newx = 0;
            var newy = 0;
            var result = new Array();

            for (var s = 0; s < steps; s++) {
                newx = point1.x + (xstep * s);
                newy = point1.y + (ystep * s);
                result.push({x:newx, y:newy, rotation:Math.atan2(ydiff, xdiff) * 180 / Math.PI});
            }
            return result;
        };

        PathProcessor.prototype.processDirections = function(pointArray, dest) {
            var textDirArray = [];
            var tolerance = 100;

            if(pointArray.length > 1)this.floorid = pointArray[1].mapid;
            for(var j = 0; j < pointArray.length; j++) {
                var previousHeading = 0;
                var points = pointArray[j].points;
                var mapId = pointArray[j].mapid;


                for(var i=0; i < points.length; i++) {
                    if(i === 0) continue;
                    var prePoint = points[i - 1];
                    var curPoint = points[i];
                    var currentSegment = i / (points.length - 1);

                    dy = prePoint.y - curPoint.y;
                    dx = prePoint.x - curPoint.x;

                    theta = Math.atan2(dx, dy);
                    theta *= 180/Math.PI;
                    
                    var length = this.determineLineLength(prePoint.x, prePoint.y, curPoint.x, curPoint.y);

                    if(theta < 0) {
                        theta += 360;
                    }
                    currentHeading = theta - previousHeading;

                    if(currentHeading < 0) {
                        currentHeading += 360;
                    } else if (currentHeading > 360) {
                        currentHeading -= 360;
                    }

                    /********************* Getting landmark info *********************/

                    var tdH = this.writeCurrentHeading(currentHeading, length, curPoint, theta, currentSegment, mapId);
                    
                    var nearPoint;
                    if(tdH.direction === "left" || tdH.direction === "right" || tdH.direction === "backward") {
                        nearPoint = JMap.storage.maps.building.floors[mapId].getDestinationsNearCoor(prePoint.x, prePoint.y, tolerance);
                        if(nearPoint.length > 0){
                            for(var c = 0; c < nearPoint.length; c++){
                                var wp = JMap.storage.maps.model.getWPByIdAndMapid(nearPoint[c].id, mapId);
                                if(wp.jids){
                                    var d = JMap.getDestinationByClientId(wp.jids[0]);
                                    if(d){
                                        nearPoint = d;
                                        break;
                                    }
                                }
                            }
                            if(nearPoint instanceof Array)nearPoint = undefined;
                        }
                        else nearPoint = undefined;
                    }
                    tdH.nearPoint = nearPoint;
                    textDirArray.push(tdH);
                    previousHeading = theta;
                }

                if(pointArray.length != (j+1)) {
                    if(pointArray[j+1] > pointArray[j]) {
                        textDirArray.push({direction:"floorup", mover:pointArray[0].mover.typeName, mapid:this.floorid, point:points[points.length - 1]});
                    } else {
                        textDirArray.push({direction:"floordown", mover:pointArray[0].mover.typeName, mapid:this.floorid, point:points[points.length - 1]});
                    }
                } else {
                    textDirArray.push({direction:"end", point:points[points.length - 1]});
                }
            }

            var pointsDirArray = [[]];
            var currentPointsAr = pointsDirArray[0];
            var numFloors = 0;
            currentPointsAr.push(pointArray[0].points[0]);

            for(var i2 = 0, len2 = textDirArray.length; i2 < len2; i2++){
                switch(textDirArray[i2].direction){
                    case "straight":
                        if(textDirArray[i2+1].direction !== "straight"){
                            currentPointsAr.push(textDirArray[i2].point);
                        }
                        break;
                    case "floorup":
                        currentPointsAr.push(textDirArray[i2].point);
                        currentPointsAr = [];
                        pointsDirArray.push(currentPointsAr);
                        numFloors++;
                        currentPointsAr.push(pointArray[numFloors].points[0]);
                        break;
                    case "floordown":
                        currentPointsAr.push(textDirArray[i2].point);
                        currentPointsAr = [];
                        pointsDirArray.push(currentPointsAr);
                        numFloors++;
                        currentPointsAr.push(pointArray[numFloors].points[0]);
                        break;
                    default:
                        currentPointsAr.push(textDirArray[i2].point);
                        break;
                }
            }
            for(var i3 = 0, len3 = pointArray.length; i3 < len3; i3++){
                var p = pointArray[i3].points;
                pointArray[i3].points = pointsDirArray[i3];
                pointArray[i3].originalPoints = p;
            }

            return {textArrayData:textDirArray, points:pointArray};
        };

        PathProcessor.prototype.writeCurrentHeading = function(angle, length, currentPoint, theta, pathSegment){
            var intensity = "";
            var direction = "";
            var img = "";
            var absAngle = Math.abs(angle);
            var distance = Math.floor((length * 11) / 100);
            if (angle < 10 || (angle > 350)) {
                intensity = "slight";
            } else if ((angle > 30 && angle < 100) || (angle < 330 && angle > 260)) {
                intensity = "";
            } else if (angle < 170 || angle > 190 ) {
                intensity = "hard";
            }
            if(angle < 30 || angle > 330) {
                return ({direction:"straight", intensity:intensity, distance:distance, point:currentPoint});
            }
            if(angle < 170) {
                direction = "left";
            } else if (angle > 190) {
                direction = "right";
            } else {
                direction = "backward";
            }

            return ({intensity:intensity, direction:direction, distance:distance, point:currentPoint});
        };

        PathProcessor.prototype.determineLineLength = function(sx, sy, ex, ey) {
            var resX = 0;
            var resY = 0;
            resX = ex - sx;
            resY = ey - sy;
            resX = resX * resX;
            resY = resY * resY;
            return Math.round(Math.sqrt(resX + resY));
        };

        return PathProcessor;
    })();

    JMap.PathProcessor = PathProcessor;


      var Floor = (function () {
        function Floor(id, container, width, height, style) {
            // console.log("FLOOR ---- >",id, container, width, height, style);

            that = this;
            this.id = id;
            this.container = container;
            this.containerWidth = width;
            this.containerHeight = height;
            this.styles = style;
            this.view = document.createElement("DIV");
            this.view.id = "map-floor-" + id;
            this.view.className = "map-floor";

            this.mapContainer = document.createElement("DIV");
            this.mapContainer.id = "map-floor-container-" + id;
            this.mapContainer.className = "map-floor-container-base";
            this.mapContainer.style.width = $(window).width();
            this.mapContainer.style.height = $(window).height();


            this.currentScale = 1;
            this.viewScale = 1;
            this.containerX = 0;
            this.containerY = 0;
            this.autoAddLegendClick = false;
            this.ableToSwitch = true;

            this.legendResponse = [];

            this.legendsObj = {ids:[], elementsArray:[], labelsids:[], labelselementsArray:[]};

            // this.mapView = document.createElement("DIV");
            this.mapView = document.createElement("IMG");
            this.mapView.id = "map-floor-mapview-" + id;
            this.mapView.className = "map-floor-base";

            this.pathView = [];
            this.stepTimeouts = [];

            this.landmarks = document.createElement("DIV");
            // this.landmarks.id = "map-floor-landmarks-" + this.id;
            this.landmarks.className =  "landmarks";
            this.landmarks.setAttribute("data-show-at-zoom", "0");
            this.landmarks.setAttribute("data-allow-drag", "true");
            
            
            this.mapImage = null;
            this.floorDestinations = [];
            // this.floorDestinations = null;
            
            this.overlay = document.createElement("DIV");
            this.overlay.id = "map-floor-overlayview-" + id;

            //set up custom variables
            this.setCustomVars();

            //add things to stage
            // this.mapContainer.appendChild(this.pathView);
            this.mapContainer.appendChild(this.mapView);
            this.mapContainer.appendChild(this.landmarks);
            this.view.appendChild(this.mapContainer);
            this.view.appendChild(this.overlay);

            /*Set up tooltip*/
            var arrowDownTri = this.generateElement("DIV", "mapArrowDownTri-" + id, "mapArrowDownTri");
            var arrowDownCircle = this.generateElement("DIV", "toolTipDot-" + id, "toolTipDot");
            var toolTipText = this.generateElement("P", "toolTipText-"+ id, "toolTipText");
            var toolTipPrompt = this.generateElement("DIV", "toolTipPrompt-" + id, "toolTipPrompt");
            this.nameToolTip = this.generateElement("DIV", "map-floor-tooltip-" + id, "toolTip");
            toolTipPrompt.innerHTML = "Get Directions";
            toolTipPrompt.setAttribute("onclick", "JMap.storage.maps.building.currentFloor.onToolTipClicked()");
            this.nameToolTip.appendChild(toolTipText);
            this.nameToolTip.appendChild(arrowDownTri);
            this.nameToolTip.appendChild(arrowDownCircle);
            this.nameToolTip.appendChild(toolTipPrompt);

            JMap.addListener('ResetMapView', $.proxy(function(){
                $('.map-floor-base').smoothZoom('Reset');
                this.clearPath();
                // this.rotate(0);
            }, this));

            $(this).on('doubleTap', function(e){
                alert('Boom! You DblTapped: ' + this);
            });

            this.switchToGoogle = false;
            this.pinchIn = false;

            //this.addInteractiveHandler();
        }

        Floor.prototype.generateElement = function(elType, id, className){
            var el = document.createElement(elType);
            el.id = id;
            el.className = className;
            return el;
        };

        Floor.prototype.setCustomVars = function (){
            var ms = JMap.getDeviceParamByKey("mobileScale");
            var as = JMap.getDeviceParamByKey("animationSpeed");
            // var sl = JMap.getDeviceParamByKey("specialLegend");
            // this.stepOffset = so?JSON.parse(so):{x:7,y:7};
            this.scaleOffset = this.styles.mapStyles.mapConfig.scaleOffset?this.styles.mapStyles.mapConfig.scaleOffset:1;//JMap.storage.deviceType === "mobile"?(ms?ms:1):1;
            this.positionOffset = this.styles.mapStyles.mapConfig.positionOffset?this.styles.mapStyles.mapConfig.positionOffset:{x:0, y:0};//JMap.storage.deviceType === "mobile"?(ms?ms:1):1;
            this.speed = as?as:1;
        };

        Floor.prototype.setGridReference = function (gridRef) {this.mapObjData = gridRef;};

        Floor.prototype.addFloorLocation = function (floorDest) {this.floorDestinations.push(floorDest);};

        /********Used by building.js********/
        Floor.prototype.loadImage = function (url) {
            this.imagepath = url;
            var _this = this;
            this.mapView.onload = function () {
                _this.mapImage = this;
                _this.mapContainer.style.width = this.width;
                _this.mapContainer.style.height = this.height;
                _this.applyPanAndZoom(true);
                _this.loadLegends();
	            TweenLite.set(_this.mapView,{alpha:0});

            };
            this.mapView.src = JMap.serverUrl + url;
            // this.img = bmp;
        };

        Floor.prototype.waitUntil = function(condition, response, interval){
        	interval = interval || 250;
        	var intervalReference = setInterval(function(){
        		var conditionReponse = condition();
        		// console.log("checking - > ", conditionReponse);
        		if(condition() !== false){
        			response();
        			clearInterval(intervalReference);
        		}
        	}, interval);
        };


        Floor.prototype.loadSVG = function (svgXml) {
        	this.svgXml = svgXml;
            // var n;          
            this.waitUntil($.proxy(function(){
            	if($(this.mapView).smoothZoom("getZoomData") === undefined)return false;
            	else return true;
            }, this), $.proxy(this.setSVG, this), 500);
        };



        Floor.prototype.setSVG = function(){
        	var _this = this;
            var svg = '<div class="item mark svgLayer" id="svg-' + _this.id + '" data-position="0,0" data-show-at-zoom="0" data-allow-drag="false" data-allow-scale="true"></div>';
            var pathSVG = '<div class="item mark svgLayer" id="graphicCont-' + _this.id + '" data-position="0,0" data-show-at-zoom="0" data-allow-drag="false" data-allow-scale="true"></div>';
            // var pathGraphicContainer = "<svg id='graphic-" + _this.id + "'></svg>";
            $(this.mapView).smoothZoom("addLandmark", [svg, pathSVG]);
            // $(this.mapView).smoothZoom("addLandmark", [pathGraphicContainer]);
            setTimeout(function(){
                $( '#svg-' + _this.id ).html(_this.svgXml);
                $("#graphicCont-" + _this.id).html("<svg id='graphic-" + _this.id + "'></svg>");
                $("#graphicCont-" + _this.id).css("pointer-events", "none");
				setTimeout(function(){
                    // console.log("LOADED");
                    $('#svg-' + _this.id + ' > svg').attr('width', $(_this.mapView).width() + 'px').attr('height', $(_this.mapView).height() + 'px');
                    $( '#svg-' + _this.id ).show().css('opacity',1);
		            $('#svg-' + _this.id).css("background", _this.styles.mapStyles.mapConfig.container.background);
		            $(_this.view).css("background", _this.styles.mapStyles.mapConfig.container.background);


                    $( '#graphicCont-' + _this.id ).show().css('opacity',1);
                    $('#graphicCont-' + _this.id + ' > svg').attr('width', $(_this.mapView).width() + 'px').attr('height', $(_this.mapView).height() + 'px');
                    // _this.addDragHandler(_this);
					setTimeout($.proxy(_this.styleSVG, _this), 10);
					setTimeout($.proxy(_this.assignMapLabels, _this), 20);
				}, 10);
			}, 10);
        };


        Floor.prototype.styleSVG = function(){
			// console.log("FIRING FLOOR READY", this);
			this.updateZoomLayers($(this.mapView).smoothZoom('getZoomData'));
			JMap.fire("floorLoaded");
			this.styleRef = {};
			this.polyRef = {};
			var _this = this;

			this.prepareLabels();
			this.startCoord ={};


			//-----------------------
			for (var i = 0; i < this.styles.mapStyles.mapLayers.length; i++) {
				var currentStyle = this.styles.mapStyles.mapLayers[i];
				var $group = $('#svg-' + this.id).find("#" + currentStyle.name).find("*");
				// var $group = $('#svg-' + this.id ).find("." + currentStyle.class);//.find("*");
				currentStyle.group = $group;

				if(currentStyle.addLabel == true){
					this.setStoreLabels(currentStyle);
				}


				for(var j = 0; j < $group.length; j++){
					var p = $group[j];
					if(currentStyle.colorFill)$(p).css("fill", currentStyle.colorFill);
					if(currentStyle.strokeColor)$(p).css("stroke", currentStyle.strokeColor);
					if(currentStyle.strokeWidth)$(p).css("stroke-width", currentStyle.strokeWidth);
					if(!currentStyle.clickable)$(p).css("pointer-events", "none");
					$(p).addClass(currentStyle.name);



					if(currentStyle.clickable == true){
						var isDragging = false;

						// var clickPoly = new JMap.ui.FastButton(p, onTouchEndPoly);

						// p.addEventListener("touchstart", function(e){
						$(p).on("touchstart", function(e){
							console.log("Start", e);
						// function onTouchStartPoly(){
							// _this.startCoord.startX = e.touches[0].clientX;
							// _this.startCoord.startY = e.touches[0].clientY;

							_this.startCoord.startX = e.originalEvent.changedTouches[0].clientX;
							_this.startCoord.startY = e.originalEvent.changedTouches[0].clientY;
							var lbl = undefined;
							var prnt = $(this);
							while(lbl == undefined) {
								prnt = prnt.parent();
								lbl = prnt.attr("id");
								if(prnt.prop("tagName") == "DIV") break;
							}
							$(this).css("fill", _this.styleRef[lbl].highLightColor);



							// var _polyThis = this;

						});

					
						$(p).on("touchend", function(){
							$(window).off("touchdrag");
							lbl = undefined;
							var prnt = $(this);
							while(lbl == undefined) {
								prnt = prnt.parent();
								lbl = prnt.attr("id");
								if(prnt.prop("tagName") == "DIV") break;
							}
							$(this).css("fill", _this.styleRef[lbl].colorFill);

						});

							// $(window).on("touchmove", function(evt){
							// 	console.log(evt);
							// 	_polyThis.removeEventListener("touchend", onTouchEnd);
							// 	$(window).off("touchmove");
							// });

						p.addEventListener("touchend", onTouchEndPoly);

						function onTouchEndPoly(evt){
							console.log(evt);

							console.log(_this.startCoord,  evt.changedTouches[0].clientX - _this.startCoord.startX , evt.changedTouches[0].clientY - _this.startCoord.startY );
							if(evt.changedTouches[0].clientX - _this.startCoord.startX > 10 || evt.changedTouches[0].clientY - _this.startCoord.startY > 10){
								return;
							}
						// $(p).on("click", function(evt){
							if(this.tagName == "g")return;
							var d = _this.getDestinationWithinBounds(this, evt);
							// console.log("fixed");
							if(!d)return;
							JMap.fire("SHOW_DESTINATION", [d]);
							_this.showCard(d);
						};


					}
	            }
				this.styles.mapStyles.mapLayers[i] = currentStyle;
				this.styleRef[currentStyle.name] = currentStyle;
			};



        };


        Floor.prototype.prepareLabels = function(){
        	this.destinations = JMap.getDestinationsByFloorId(this.id);
        	this.customBounds = this.styles.mapStyles.storeLabelBounds[this.sequence];
        	this.excludeLayers = [];
			if(!this.customBounds)this.customBounds = [];

            function getDistance(p1, p2) {return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));};

			for (var i = 0; i < this.customBounds.length; i++) {
				this.customBounds[i].id = this.customBounds[i].type + this.customBounds[i].x + this.customBounds[i].y;
				var currentCloset = this.destinations[0]
				for (var j = 1; j < this.destinations.length; j++) {
					if(getDistance(this.destinations[j].wp, {x:this.customBounds[i]["origin-x"], y:this.customBounds[i]["origin-y"]}) < getDistance(currentCloset.wp, {x:this.customBounds[i]["origin-x"], y:this.customBounds[i]["origin-y"]}))currentCloset = this.destinations[j];
				};

				this.customBounds[i].closestDestination = currentCloset;
				currentCloset.hasCustomBounds = true;
				currentCloset.customBounds = this.customBounds[i];
			};



        };

        Floor.prototype.getDestinationWithinBounds = function(poly){
        	var scOffSet = this.scaleOffset;
        	for (var i = 0; i < this.destinations.length; i++) {
        		var wp = JMap.storage.maps.model.getWPByJid(this.destinations[i].clientId);
        		if(!wp)continue;

        		var zd = this.getZoomData();
        		var cwp = {
        			x:(zd.ratio * ((wp.x + this.positionOffset.x) - Number(zd.normX))), 
        			y:(zd.ratio * ((wp.y + this.positionOffset.y) - Number(zd.normY)))
        		};
        		if(cwp.x < 0 || cwp.y < 0)continue;

        		var cpoly = document.elementFromPoint(cwp.x, cwp.y);
    //     		var pd = d3.select(poly);
				// var bounds = pd.node().getBBox();
        		if(poly === cpoly)return this.destinations[i];
        	}
        };





        Floor.prototype.assignMapLabels = function(){
        	var labels = this.styles.mapStyles.mapLabels;
			// console.log(labels);
			var sl = [];
			for (var i = 0; i < labels.length; i++) {
				if(labels[i].mapSequence && labels[i].mapSequence != this.sequence)continue;
				sl.push(this.createMapLabel(labels[i]));
			};
			$(this.mapView).smoothZoom("addLandmark", sl);
        };

		// Floor.



        // Floor.prototype.getCenterOfBounds = function(bounds){
        // 	var scOffSet = 860/1920;
        // 	bounds = {x:bounds.x*scOffSet,y:bounds.y*scOffSet,width:bounds.width*scOffSet,height:bounds.height*scOffSet};
        // 	return {x: bounds.x + (bounds.width/2) ,y:bounds.y + (bounds.height / 2)}
        // };

        // Floor.prototype.checkStoreBounds = function(){
        // 	var bnds = this.styles.mapStyles.storeLabelBounds[this.sequence];
        //     if(bnds){
        //     	$.get(bnds, null, $.proxy(this.setCustomBounds, this));
        //     }else{
        //     	this.setStoreLabels();
        //     }
        // };

        Floor.prototype.setCustomBounds = function(data){
        	this.customBounds = data;
        	this.setStoreLabels();
        };

        Floor.prototype.getBoundsOfPoly = function(poly){
			var bounds = {};
        	switch(poly.tagName){
        		case "rect":
	        		bounds.x = Number(poly.getAttribute("x"));
	        		bounds.width = Number(poly.getAttribute("width"));
	        		bounds.y = Number(poly.getAttribute("y"));
	        		bounds.height = Number(poly.getAttribute("height"));
        			break;
        		case "polygon":
        			var polyPoints = poly.getAttribute("points").split(" ");
					for (var i = 0; i < polyPoints.length - 1; i++) {
						var pt = polyPoints[i].split(",");	
						if(!bounds.x || Number(pt[0]) < bounds.x)bounds.x = Number(pt[0]);
						if(!bounds.xMax || Number(pt[0]) > bounds.xMax)bounds.xMax = Number(pt[0]);
						if(!bounds.y || Number(pt[1]) < bounds.y)bounds.y = Number(pt[1]);
						if(!bounds.yMax || Number(pt[1]) > bounds.yMax)bounds.yMax = Number(pt[1]);
					};
					bounds.width = bounds.xMax - bounds.x;
					bounds.height = bounds.yMax - bounds.y;
					break;
				}
				return bounds;
        };

        Floor.prototype.isPointInBounds = function(point, bounds){
        	if(point.x > bounds.x && point.x < (bounds.x + bounds.width) && point.y > bounds.y && point.y < (bounds.y + bounds.height)){
				return true;
			}
			return false;
        };

        Floor.prototype.getCenterOfBounds = function(bounds){
        	return {x: bounds.x + (bounds.width/2) ,y:bounds.y + (bounds.height / 2)}
        };

        	
        Floor.prototype.setStoreLabels = function(groupPar){


        	for (var i = 0; i < this.customBounds.length; i++) if(this.customBounds[i].polygons === undefined)this.customBounds[i].polygons = [];
        	for (var i = 0; i < this.destinations.length; i++) if(this.destinations[i].polygons === undefined)this.destinations[i].polygons = [];


        	//All polygons that have boundaries containing the custom bounds' origin point
        	for(var k = 0; k < groupPar.group.length; k++){
        		var g = groupPar.group[k];
        		if(g.tagName == "g" || g.tagName == "path")continue;
        		var bounds = this.getBoundsOfPoly(g);
        		for (var i = 0; i < this.customBounds.length; i++) {
	    			if(this.isPointInBounds({x:this.customBounds[i]["origin-x"] + this.positionOffset.x, y:this.customBounds[i]["origin-y"] + this.positionOffset.y}, bounds) == true){
	    				this.customBounds[i].polygons.push(g);
	    			}
        		};
        		for (i = 0; i < this.destinations.length; i++) {
        			if(this.isPointInBounds({x:this.destinations[i].wp.x + this.positionOffset.x, y:this.destinations[i].wp.y + this.positionOffset.y}, bounds) == true){
		    			this.destinations[i].polygons.push(g);
        			}
        		};

        	};

            function getDistance(p1, p2) {return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));};

        	for (i = 0; i < this.destinations.length; i++) {
    			if(this.destinations[i].polygons.length > 1){
    				var currentClosest = this.destinations[i].polygons;
    				for (k = 1; k < this.destinations[i].polygons.length; k++) {
    					if(getDistance(this.destinations[i].polygons[k], this.destinations[i].wp) < getDistance(currentClosest, this.destinations[i].wp)){
    						currentClosest = this.destinations[i].polygons[k];
    					} 
    				};
    				this.destinations[i].centerPolygon = currentClosest;
    			}else{
    				this.destinations[i].centerPolygon = this.destinations[i].polygons[0];
    			}
    		};


        	var c = 0;

			var newGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
			newGroup.id = groupPar.name +  "-labels-" + this.id;
        	this.excludeLayers.push(newGroup.id);


			var d3Group = d3.select(newGroup);

			var svg = document.getElementById("L" + (this.sequence + 1).toString());

			var pixelWidthThreshold = 7;

        	for(i = 0; i < this.destinations.length; i ++){
        		// for(k = 0; k < this.destinations[i].polygons.length; k++ ){
        			if(!this.destinations[i].centerPolygon)continue;
        				var textElement = document.c
        				var textF;
        				var destName = this.destinations[i].name.split("&amp;").join("&");

        				// if(this.destinations[i].hasCustomBounds == true){
        				// 	//do custom bounds here
        				// 	var cb = this.destinations[i].customBounds;
        				// 	var clr = "#00f";
        				// 	if(cb.type == "line"){
        				// 		//drawline
        				// 		clr = "#f00"
        				// 	}
        				// 	// if(destName.length * pixelWidthThreshold > cb.width){

        				// 		// console.log(destName + " Overlap hasCustom");
        				// 		// debugger;
        				// 		d3Group.append("circle").attr("x",cb.x + this.positionOffset.x).attr("y",cb.y + this.positionOffset.y).attr("width",2).attr("height",2).attr("fill","#f00");
        				// 		d3Group.append("circle").attr("x",cb["origin-x"] + this.positionOffset.x).attr("y",cb["origin-y"] + this.positionOffset.y).attr("width",2).attr("height",2).attr("fill","#0f0");
        				// 	    d3Group.append("rect").attr("x",cb.x + this.positionOffset.x).attr("y",cb.y + this.positionOffset.y).attr("width",cb.width).attr("height",cb.height).attr("stroke-width",1).attr("stroke", clr).attr("fill-opacity", 0.2).attr("stroke-opacity", 0.5);//fill-opacity:0.1;stroke-opacity:0.9

        				// 	// }
        				// 	console.log(destName, cb.type);
        				// 	textF = d3Group.append("text").attr("x",cb.x + this.positionOffset.x).attr("y",cb.y + this.positionOffset.y).attr("width",cb.width).attr("height",cb.height).attr("font-size",9).attr("fill","#f00").attr("text-anchor","middle").text(destName);

        				// }else{
        					var bd = this.getBoundsOfPoly(this.destinations[i].centerPolygon);
        					if(!bd.x)continue;
        					var center = this.getCenterOfBounds(bd);
        					// if(destName.length * pixelWidthThreshold > bd.width){
        					// 	// console.log(destName + " Overlap");
        					// }else{
								textF = d3Group.append("text").attr("x",center.x).attr("y",center.y).attr("width",bd.width).attr("height",bd.height).attr("font-size",9).attr("fill","#000").attr("text-anchor","middle").text(destName);
        					// }
							// if($(textF).width() > bd.width)console.log("OVERLAP", this.destinations[i].name);
        				// }
        				c++;

        			if($(this.destinations[i].centerPolygon).parent().attr("id") != groupPar.name){
        				d3Group.remove(textF);
        			}
        		// }
        	}

        	
			// newGroup.appendChild(txtElem);
			svg.appendChild(newGroup);
			$(newGroup).css("pointer-events", "none");


        	// console.log(groupPar.name + " has " + c + " stores that need labels");
				






			var labelStyles = this.styles.mapStyles.labelStyle;

            function applyStyleTo(styles, selector){
            	for(var str in styles){	
            	    $(selector).css(str, styles[str]);
            	}
            }

           	applyStyleTo(labelStyles["hightraffic-store-label"], ".map-floor-container-base .landmarks .item.hightraffic-store-label.store-labels>div");           	
           	applyStyleTo(labelStyles["anchor-store-label"], ".map-floor-container-base .landmarks .item.anchor-store-label.store-labels>div");
           

        };

        Floor.prototype.getLPosWithinBounds = function(poly){
        	var scOffSet = this.scaleOffset;
        	for (var i = 0; i < this.destinations.length; i++) {
        		var wp = this.destinations[i].wp;
        		if(!wp)continue;

        		var pd = d3.select(poly);
				var bounds = pd.node().getBBox();

        		var cwp = {
        			x:(wp.x + this.positionOffset.x), 
        			y:(wp.y + this.positionOffset.y)
        		};

        		if(cwp.x > bounds.x && cwp.x < (bounds.x + bounds.width) && cwp.y > bounds.y && cwp.y < (bounds.y + bounds.height)){
        			return this.destinations[i];
        		}

        	}
        };



        /****Resizes the bitmap to fit the canvas and positions it in the center of the canvas****/
        /********Used by building.js - for resetting ********/
        Floor.prototype.applyPanAndZoom = function (init) {
            var _this = this;
            if(init === true){
                $(this.mapView).on("updateYah", function(){
                    // if(_this.yahCoord){
                    //     _this.yah = "<div id='yah' class='item mark yahpoint' data-show-at-zoom='0' data-position='" + _this.yahCoord.x + "," + _this.yahCoord.y + "' data-allow-drag='true' data-rotate='" + + "' data-allow-scale='false'><img src='" + (/*JMap.serverUrl +*/ _this.yahCoord.url) + "' /></div>";
                    //     //console.log(_this.yah);
                    //     $(_this.mapView).smoothZoom("addLandmark", [_this.yah]);
                    // }
                });
            }
            var w = $(window).width();
            var h = $(window).height();

            var config = this.styles.mapStyles.mapConfig;
            // console.log(config);

            if(config){
	            $(this.mapView).width(config.mapSize.width);
	            $(this.mapView).height(config.mapSize.height);
            }


            $(this.mapView).smoothZoom({
                width:config?config.container.width:"100%",
                height:config?config.container.height:"100%",
                animation_SMOOTHNESS: 8,
                animation_SPEED_ZOOM: 1,
                pan_BUTTONS_SHOW: "NO",
                pan_LIMIT_BOUNDARY: false,
                initial_ZOOM:config?config.startState.zoom:0,
                initial_POSITION:config?config.startState.x + " " + config.startState.y:0,

                zoom_MAX: config?config.container.zoomMax:100, //TODO - Make this configurable
                zoom_MIN:config?config.container.zoomMin:0,
                container:"map-floor-container-" + this.id,
                zoom_BUTTONS_SHOW: false,
                background_COLOR: 'transparent',
                use_3D_Transform: true,
                reset_TO_ZOOM_MIN: true,
                reset_ALIGN_TO: 'center center',
                responsive_maintain_ratio: true,
                border_TRANSPARENCY: 0,
                responsive: true,
                touch_DRAG:true,
                mouse_DOUBLE_CLICK: true,
                on_ZOOM_PAN_UPDATE: function(zoomData, zoomComplete){
                    _this.currentScale = zoomData.ratio;
                    _this.zoomData= zoomData;
                    _this.isAnimating = zoomComplete;
                    if(zoomData.scaledWidth <= w){
                        _this.ableToSwitch = true;
                    }else{
                        _this.ableToSwitch = false;
                    }
                },
                on_ZOOM_PAN_COMPLETE: $.proxy(_this.updateZoomLayers, _this),
                on_IMAGE_LOAD:function(){
                    //$(_this.mapView).trigger("updateYah");
                    JMap.storage.maps.building.setNewYah("Defualt");
                }
            });
        };
        

        Floor.prototype.rebootSmoothZoom = function(){
            $(this.mapView).smoothZoom('Reset');
        }
        
        Floor.prototype.updateZoomLayers = function(zoomData){
            //TODO - Zoom Layers
            // console.log(zoomData);
            // this.zoomData = zoomData;
            if(!zoomData)return;
            var currentScale = zoomData.ratio *100;
            for (var i = 0; i < this.styles.mapStyles.mapLayers.length; i++) {
            	if(this.styles.mapStyles.mapLayers[i].zoomLevel == 0)continue;
            	var zoomAlpha = 1;
            	if(this.styles.mapStyles.mapLayers[i].zoomLevel < currentScale)zoomAlpha = 1;
            	else zoomAlpha = 0;
        		
            	// console.log(this.styles.mapStyles.mapLayers[i], zoomAlpha);
            	var $group = $('#svg-' + this.id ).find("#" + this.styles.mapStyles.mapLayers[i].name).find("*");
        		TweenLite.to($group, 0.3, {"fill-opacity":zoomAlpha, "stroke-opacity":zoomAlpha});
            }
        };
  

        //Check for Zoom level to switch to Google Maps
        Floor.prototype.getZoomData = function(){
            var zoomData = $(this.mapView).smoothZoom('getZoomData');
            this.currentZoomData = zoomData;
            return zoomData;
        };


        Floor.prototype.tapZoom = function(fl) {
            //Check if zoom level is => 100
            var z = $(fl.mapView).smoothZoom('getZoomData');

            if(z.ratio >= 1) $(fl.mapView).smoothZoom('Reset');
            //Zoom into the map here!
            else $(fl.mapView).smoothZoom('zoomIn');
        };

        Floor.prototype.rotate = function(degree) {
            $(".noSel").css({'-webkit-transform': 'rotate(' + degree + 'deg)'});
        };


        /********Used by building.js********/
        Floor.prototype.getImage = function () {
            return this.mapImage;
        };

        Floor.prototype.clearPath = function(){

            this.pathView.push("bubbleLeft");
            $(this.mapView).smoothZoom("removeLandmark", this.pathView);

            var svg = document.getElementById('graphic-' + this.id); //Get svg element
            $(svg).html("");

            this.pathView = [];
            while(this.stepTimeouts.length > 0)clearTimeout(this.stepTimeouts.pop());

        };

        Floor.prototype.resetFloor = function(){
        	// if(this.yah){
         //    	$(this.mapView).smoothZoom('focusTo', this.styles.mapStyles.mapConfig.startState);
        	// }else{
            	$(this.mapView).smoothZoom('Reset');
        	// }
        	this.removeCard();
            this.clearPath();
            this.hasPath = false;
        };

        /******************************************************************/
        /*********************** Map click Functions **********************/
        /******************************************************************/

        Floor.prototype.getDestinationsNearCoor = function(pX, pY, tol) {
            var tolerance = parseInt(tol) || 20;
            var map = $(this.mapView)
            var matrix = map.css('-webkit-transform');
            var mapOffset = map.offset();
            matrix = matrix.split(',');
            matrix = matrix[0].split('(');
            matrix = Number(matrix[1]);
            //currently the X is working but the Y needs some work
            pY = pY - mapOffset.top;
            pX = pX - mapOffset.left;
            valX = pX / matrix;
            valY = pY / matrix;

            var nearPoints = this.mapObjData.getPointsInBounds((valX - tolerance), (valY - tolerance), (valX + tolerance), (valY + tolerance), valX, valY);
            return nearPoints;
        };


        Floor.prototype.getWayPointNearCoor = function(pX, pY, tol) {
            var tolerance = parseInt(tol) || 50;
            var map = $(this.mapView)
            var matrix = map.css('-webkit-transform');
            var mapOffset = map.offset();
            matrix = matrix.split(',');
            matrix = matrix[0].split('(');
            matrix = Number(matrix[1]);
            //currently the X is working but the Y needs some work
            pY = pY - mapOffset.top;
            pX = pX - mapOffset.left;
            valX = pX / matrix;
            valY = pY / matrix;

            var nearPoints = this.mapObjData.getPointsInBounds((valX - tolerance), (valY - tolerance), (valX + tolerance), (valY + tolerance), valX, valY);
            return nearPoints;
        };

        Floor.prototype.getDestinationInBox = function(x, y, width, height) {
            var blur = 10;
            var nearPoints = this.mapObjData.getPointsInBounds((x-blur), (y-blur), (x + width + blur),  (y + height + blur), (x + (width / 2)), (y + (height / 2)));
            return nearPoints;
        };

        Floor.prototype.getClosestToCoor = function(pX, pY) {
            return this.grid._nodes[this.grid.getClosest(pX, pY)];
        };


        Floor.prototype.onError = function (res) {
            trace('Error!!!!!!!!! ' + res);
        };

        Floor.prototype.interactiveClick = function(evt) {
            var p = this.container.localToLocal(evt.stageX, evt.stageY, this.mapView);
            var nearPoints = this.getDestinationsNearCoor(p.x, p.y, this.clickTolerance);

            var nearLocations = [];
            
            for(var i = 0; i < nearPoints.length; i++) {


                if(this.floorDestinations.hasOwnProperty(nearPoints[i].id)) {
                    var destinationList = this.floorDestinations[nearPoints[i].id];

                    for(var j = 0; j < destinationList.length; j++) {
                        nearLocations.push(destinationList[j]);
                    }
                }
            }
        };

        // Floor.prototype.addDragHandler = function(fl) {

        // 	return;

        //     // $('#svg-' + fl.id).on("click",$.proxy(this.startDrag, this));
        //     $('#svg-' + fl.id).on("touchstart",$.proxy(this.startDrag, this));


        //     var _this = this;
        //     if($(".legendItem").length === 0) {
        //         this.autoAddLegendClick = true;
        //     } else {
        //         $(".legendItem").on("click", function(){_this.mapLegendsClicked(this);});
        //     }
        // };

        // Floor.prototype.hideTooltip = function() {
        //     TweenLite.to($(this.nameToolTip), 0, {x: 0, alpha:0});
        //     $("#" + this.nameToolTip.id + " .toolTipPrompt").css("pointer-events", "none");
        // };

        // Floor.prototype.hideSVGHilight = function() {
        //     var $body = $('#svg-' + this.id).find('*');
        //     for(var i = 0; i < $body.length; i++) {
        //         $body[i].style.fillOpacity = 0;
        //     }
        // };


        // Floor.prototype.stopDrag = function(evt) {
        //     this.isZooming = false;
        //      $('#svg-' + this.id).off("touchstart");
        //      // this.addDragHandler(this);
        //      this.hideSVGHilight();
        //      $(window).off("touchend");
        //     this.previousX = undefined;
        //     this.previousY = undefined;
        //     var _this = this;
        //     clearTimeout(this.dragLabelTimer);
        //     this.dragLabelTimer = setTimeout(function() {
        //         _this.hideTooltip();
        //         _this = null;
        //     }, 2000);
        // };

        // Floor.prototype.startDrag = function(evt) {
        // 	// console.log("click", evt);

        //     if(evt.originalEvent.touches && evt.originalEvent.touches.length > 1) return;
        //     var _this = this;
        //     // console.log(_this)
        //     this.isZooming = false;
        //     //Check if Map is zoomed appropriately in order to start zooming!
        //     // if(this.currentScale < this.zoomLevel.labelsVisible){return;}
        //     clearTimeout(this.dragLabelTimer);
        //     $(window).on("touchend", $.proxy(this.stopDrag, this));

        //     this.useSVGHitzones = 1;

        //     this.dragMove(evt);


        //     // console.log("EVENT", evt.originalEvent.touches.length)
        //     return;
            
        //     if(this.useSVGHitzones == 1) {
        //         $('#svg-' + _this.id).on("touchstart", $.proxy(this.dragMove, this));
        //         this.dragMove(evt);
        //     } else{
        //         // $('#svg-' + _this.id).on("touchstart", $.proxy(this.radiusDrag, this));
        //         // this.radiusDrag(evt);
        //     }

        // };

        // Floor.prototype.onToolTipClicked = function(e){JMap.fire("DESTINATION_CLICK", [JMap.getDestinationById(this.nameToolTip.getAttribute("data-id"))]);};

        // Floor.prototype.dragMove = function(evt) {
        //     // console.log(evt)
        //     // if(this.isZooming === true)return;

        //     this.isZooming =  true;
            
        //     // this.legendsView.style.pointerEvents = "none";
        //     var evtX = evt.offsetX;
        //     var evtY = evt.offsetY;
        //     var clickX = evt.pageX;
        //     var clickY = evt.pageY;
        //     var list, $list, offset, range;
        //     var $body = $('#svg-' + this.id).find('*');
        //     // console.log(evt);
        //     if(!evt.originalEvent)return;
        //     var oEvtTouch = evt.originalEvent.changedTouches[0];
        //     var eleTag = document.elementFromPoint(oEvtTouch.clientX, oEvtTouch.clientY);
            
        //     if(eleTag.tagName != "polygon" && eleTag.tagName != "rect" && eleTag.tagName != "path") {
        //         if(this.useRadiusCombo > 0) {
                    
        //             if(eleTag.tagName == "svg") {
        //                 this.isZooming =  false;
        //                 // this.radiusDrag(evt, true);
        //             }
        //         }
        //         return;
        //     }

        //     var polygonBounds = eleTag.getBoundingClientRect();
        //     polygonBounds = this.convertBoundingRect(polygonBounds);
        //     JMap.fire('SHOW_DESTINATION', nearLocations);
        //     this.isZooming =  false;
        // };

        // Floor.prototype.showWaypointSVG = function(x,y) {
        // 	console.log("Show wp svg");
        //     var globalPoint = this.mapToGlobal(x, y);
        //     var eleTag = document.elementFromPoint(globalPoint.x, globalPoint.y);
        //     if(eleTag.tagName != "polygon" && eleTag.tagName != "rect" && eleTag.tagName != "path") {
        //         // console.log(eleTag);
        //         return;
        //     }

        //     var $body = $('#svg-' + this.id).find('*');
        //     // console.log($body)
        //     for(var i = 0; i < $body.length; i++) {
        //         if(eleTag != $body[i]) {
        //             $body[i].style.fillOpacity = 0;
        //         } else {
        //             $body[i].style.fillOpacity = 0.5;
        //             $body[i].style.fill = "#f19220";
        //         }
        //     }
        // };

        // Floor.prototype.removeDragHandler = function() {
        //     $('#svg-' + this.id).off("touchstart");
        //     $(window).off("mouseup");
        //     $(".legendItem").off("click");
        // };

        // Floor.prototype.mapToGlobal = function(x, y) {


        //     var mapObj = $(this.mapView);
        //     var map_width = mapObj.width();
        //     var map_height = mapObj.height();
        //     var mapViewOffset = this.mapView.getBoundingClientRect();

        //     var actualMapWidth = mapViewOffset.width;
        //     var actualMapHeight = mapViewOffset.height;

        //     var newX = (x  *  (mapViewOffset.width / map_width));
        //     var newY = (y  * (mapViewOffset.height / map_height));

        //     newX = newX + mapViewOffset.left;
        //     newY = newY + mapViewOffset.top;


        //     var returnObj = {"x":newX, "y":newY};

        //     return returnObj;
        // };




        /******************************************************************/
        /************** Path rendering and animation Functions ************/
        /******************************************************************/



        Floor.prototype.showPath = function (floorPath) {
            this.clearPath();

             var _this = this,
            	delayTime = 0.05,
            	pStyle = this.styles.mapStyles.pathStyles;

            this.currentPath = floorPath;
            this.hasPath = true;
            
            //Reset Map View
            // $(JMap.storage.thisMap).smoothZoom('Reset');
            switch(pStyle.pathType){
            	case "line":
	            	var svg = document.getElementById('graphic-' + this.id);
		            // console.log(svg);
		            // console.log(floorPath);
					var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path');
					newElement.setAttribute("d",floorPath.svgPath);
					newElement.style.stroke = pStyle.pathColor?pStyle.pathColor:"#000";
					newElement.style.strokeWidth = pStyle.pathWidth?pStyle.pathWidth:"5px";
					newElement.style["stroke-linejoin"] = "round";
					newElement.style["stroke-linecap"] = "round";
					var lt = newElement.getTotalLength();
					newElement.style["stroke-dasharray"] = lt;
					newElement.style["stroke-dashoffset"] = lt;

					newElement.style.fill = "none";
					svg.appendChild(newElement);
		    		



		    		TweenLite.to(newElement.style, pStyle.duration, {strokeDashoffset:0 , ease: Circ.easeOut, onComplete:function(){
		    			// console.log("ANIMATE!");
		                if(JMap.storage.maps.building.pathComplete !== undefined)JMap.storage.maps.building.pathComplete();
		    		}});

		            break;
            	case "dots":
            		var arToShow = [];
		            function fFinal(){
		                if(JMap.storage.maps.building.pathComplete !== undefined)JMap.storage.maps.building.pathComplete();
		            }

		            function stepAnimate(stepObj, i){
		                $(_this.mapView).smoothZoom("addLandmark", [stepObj]);
		                _this.pathView.push("point" + i);
		                // //console.log("Adding step ", i);

		                if(i === floorPath.steps.length - 2)fFinal();
		            }

		            for(var i = 3, len = floorPath.steps.length - 2; i < len; i++){
		            // for(var i = 0, len = floorPath.steps.length; i < len; i++){
		                var p = floorPath.steps[i];
		                var s = this.getGraphicStep(p, i === 0? undefined: floorPath.steps[i-1], i);
		                this.stepTimeouts.push(setTimeout(stepAnimate, (delayTime * i) * 1000, s, i));
		            }
	            	break;
            }

			

            


            // $(this.mapView).smoothZoom("addLandmark", arToShow);
            return floorPath.steps.length * delayTime;
        };


        /*Draw step - edit this to change the visuals of the animated path*/
        Floor.prototype.getGraphicStep = function (p, p2, i) {
            var rot = 0;
            if(p2){
                var xdiff = p2.x - p.x;
                var ydiff = p2.y - p.y;
                rot = Math.atan2(ydiff, xdiff) * 180 / Math.PI;
            }

            var bmp = "<div id='point" + i + "' class='item mark step' data-show-at-zoom='0' data-allow-scale='true' data-rotation='" + rot.toString() + "' data-position='"+  ((p.x + this.positionOffset.x) * this.scaleOffset) + "," + (p.y + this.positionOffset.y * this.scaleOffset) + "'></div>";
            // bmp += "<img src='" + /*JMap.serverUrl +*/ /*"/cms/trunk/img/step.png"*/ "' style='transform:rotate(" + rot + "deg);'>";// width='100' height='100'

            return bmp;
        };



        // Floor.prototype.rebuildPath = function(){
        //     // for(var i = 0, n = this.pathView.childNodes.length; i<n; i++)this.localToMap(this.pathView.childNodes[i]);
        // };

        




        /******************************************************************/
        /**************** Bubble and YAH Rendering Functions **************/
        /******************************************************************/

        Floor.prototype.clearCustomPopup = function(){
        	$(this.mapView).smoothZoom("removeLandmark", ["mapPopUp-" + this.id]);
        };

		Floor.prototype.showPopUpCustom = function(html, wp, str){
			this.clearCustomPopup();

			var html = this.createPopUp({html:html, x:wp.x, y:wp.y});
			$(this.mapView).smoothZoom("addLandmark", [html]);

		};

        Floor.prototype.showBubble = function (bubbleText) {//Shows bubble at the last point of the path
        	// console.log(this.styles);
        	// console.log(this.styles.mapStyles.iconStyles);
            var bubbleImgUrl = this.styles.mapStyles.iconStyles.destination?this.styles.mapStyles.iconStyles.destination.url:(JMap.getLabelById("searchDestination").filePath);
            var lastP = this.currentPath.points[this.currentPath.points.length - 1];
            var b = "<div id='bubbleLeft' class='item mark destination' data-show-at-zoom='0' data-position='" + ((lastP.x + this.positionOffset.x) * this.scaleOffset) + "," + ((lastP.y + this.positionOffset.y) * this.scaleOffset) + "' data-allow-scale='false' data-allow-drag='false'><img src='" + bubbleImgUrl + "' /></div>";
            this.pathView.push(b);
            $(this.mapView).smoothZoom("addLandmark", [b]);
        };

        Floor.prototype.showBubbleByWP = function (bubble, wp) {
            var b = "<div id='bubbleLeft' class='item mark' data-show-at-zoom='0' data-position='" + ((wp.x  + this.positionOffset.x)* this.scaleOffset) + "," + ((wp.y  + this.positionOffset.y)* this.scaleOffset) + "' data-allow-scale='false' data-allow-drag='false'><img src='" + (JMap.getLabelById((icon?icon:"yah")).filePath) + "' /></div>";
            this.pathView.push("bubbleLeft");
            $(this.mapView).smoothZoom("addLandmark", [b]);
        };

        Floor.prototype.showMoverByWP = function (url, wp) {
            var b = "<div id='mover" + this.id + "' class='item mark mover' data-show-at-zoom='0' data-position='" + ((wp.x  + this.positionOffset.x)* this.scaleOffset) + "," + ((wp.y  + this.positionOffset.y)* this.scaleOffset) + "' data-allow-scale='false' data-allow-drag='false'><img src='" + JMap.serverUrl + url + "' width='100' height='100' /></div>";
            this.pathView.push("mover" + this.id);
            $(this.mapView).smoothZoom("addLandmark", [b]);
        };

        Floor.prototype.removeCard = function (_destination) {
        	$("#card").off("click");
        	$("#card").off("touchstart");
        	$("#card").off("touchend");
        	$(this.mapView).smoothZoom("removeLandmark", ["card"]);
        };

        Floor.prototype.showCard = function (_destination) {
        	this.removeCard();
        	if(!_destination){
        		console.log("NO DESTINATION WAS FOUND HERE");
        		return;
        	}
        	var wp = _destination.wp;
            var b = "<div id='card' class='item mark card' jibe-data='" + _destination.clientId+ "' data-show-at-zoom='0' data-position='" + ((wp.x  + this.positionOffset.x)* this.scaleOffset) + "," + ((wp.y  + this.positionOffset.y)* this.scaleOffset) + "' data-allow-scale='false' data-allow-drag='false'>";
            var card = this.styles.mapStyles.popupCard;
            if(card){
            	var str = card.html;
            	b += str.split("{{imgurl}}").join("").split("{{name}}").join(_destination.name).split("{{description}}").join(_destination.description);
            }else{
            	return;
        		b += "<div>" + _destination.name + "</div>";
        		// b += "<img src='" + JMap.serverUrl + url + "' width='100' height='100' />";
            }
        	b+= "</div>";

            $(this.mapView).smoothZoom("addLandmark", [b]);

            
            var _this = this;


			$("#card").on("touchstart", function(){
				$(this).find(".popup-container").css("background", "#ccc");
            });


			$("#card").on("touchend", function(){
				$(this).find(".popup-container").css("background", "");
            });

            $("#card").on("click", function(){
            	console.log($(this).attr("jibe-data"));
            	JMap.fire("StoreCardClick", [JMap.getDestinationByClientId($(this).attr("jibe-data"))]);
            	_this.removeCard();
            });
        };

        Floor.prototype.putYahByCoor = function (x, y, url, heading) {
            this.yahCoord = {x:(x + this.positionOffset.x)*this.scaleOffset, y:(y+ this.positionOffset.y)*this.scaleOffset, url:url};
            this.yah = "<div id='yah' class='item mark yahpoint' data-show-at-zoom='0' data-position='" + this.yahCoord.x + "," + this.yahCoord.y + "' data-allow-drag='true' data-rotation='" + heading + "' data-allow-scale='false'><img src='" + (this.yahCoord.url) + "' /></div>";
            //console.log(_this.yah);
            $(this.mapView).smoothZoom("addLandmark", [this.yah]);
        };

        Floor.prototype.clearYah = function(){
            $(this.mapView).smoothZoom("removeLandmark", ["yah"]);
        };

        // Floor.prototype.convertBoundingRect = function(rect, local) {
        //     var mapContainerOffset = $(this.mapView).offset();
        //     var mapViewOffset = this.mapView.getBoundingClientRect();
        //     var returnRect = {};
        //     var mapObj = this.mapView;
        //     var map_width = $(mapObj).width();
        //     var map_height = $(mapObj).height();
        //     // console.log(map_width,map_height);
        //     //console.log(this.currentScale);
        //     //console.log(mapViewOffset);

        //     returnRect.width = rect.width / this.currentScale;
        //     returnRect.height = rect.height / this.currentScale;

            
        //     var actualMapWidth = mapViewOffset.width;
        //     var actualMapHeight = mapViewOffset.height;

        //     //console.log(mapViewOffset.top);


        //     returnRect.top = (rect.top - mapViewOffset.top) / (mapViewOffset.height / map_height);
        //     returnRect.bottom = (rect.bottom - (this.containerY) - mapContainerOffset.top);
        //     returnRect.left = (rect.left - mapViewOffset.left) / (mapViewOffset.width / map_width);
        //     returnRect.right = (rect.right - (this.containerX) - mapContainerOffset.left);
 
        //     var mapObj = this.mapView;
        //     var map_width = mapObj.getAttribute("data-width");
        //     var map_height = mapObj.getAttribute("data-height");

        //     //var mapSizeDiffWidth = (map_width * (this.currentScale)) - map_width;
        //     //var mapSizeDiffHeight = (map_height * (this.currentScale)) - map_height;

        //     //var mapCoor = this.mapToGlobal(returnRect.left, returnRect.top);
        //     returnRect.left = (returnRect.left);
        //     returnRect.top = (returnRect.top);
   

        //     return returnRect;
        // };




        /******************************************************************/
        /************************* Legend Functions ***********************/
        /******************************************************************/

        /*Init legends*/
        
        Floor.prototype.loadLegends = function () {
            var _this = this;

            
            JMap.getLegendsByFloor(_this.id,
                function (res) {
                    var i, n;
                    var out = [];
                    if (res) {
                        for (i = 0, n = res.length; i < n; i++){
                            out.push(_this.VOLegend(Number(res[i].componentId), Number(res[i].locationX), Number(res[i].locationY), res[i].uri, res[i].localizedText, res[i].description));
                        }
                    }
                    var arl = [];
                    _this.legendResponse = out;
                    for (i = 0; i < out.length; i++) {
                        _this.legendsObj.ids.push(out[i].id.toString() + out[i].x.toString() + out[i].y.toString());
                        _this.legendsObj.elementsArray.push(_this.createLegend(out[i]));
                    }
                    //$(_this.mapView).smoothZoom("addLandmark", _this.legendsObj.elementsArray);
            });
            // JMap.getMapLabelsByFloor(_this.id,  $.proxy(function(res){_this.renderLabels(res, "mapLabels");}, this));
            // JMap.getDestinationLabelsByFloor(_this.id, $.proxy(function(res){_this.renderLabels(res, "destLabels");}, this));
        };

        Floor.prototype.renderLabels = function (res, name, fl) {
            // console.log('FLOOR', floor)
            var _this = this;
            // console.log("THIS IS: ", name, fl )
            var out = [];
            var i, n;
            if (res !== []) {
                for (i = 0, n = res.length; i < n; i++){
                    var obj = {};
                    obj.id = Number(res[i].componentId);
                    obj.x = Number(res[i].locationX);
                    obj.y = Number(res[i].locationY);
                    obj.url = res[i].uri;
                    obj.label = res[i].label;
                    obj.description = res[i].description;

                    out.push(obj);
                }
            }
            // console.log('OUTTT', out)
            var arl = [];
            _this.legendLabelResponse = out;
            for (i = 0; i < out.length; i++) {
                // console.log("_this", _this);
                _this.legendsObj.labelsids.push(out[i].id.toString() + out[i].x.toString() + out[i].y.toString());
                _this.legendsObj.labelselementsArray.push(_this.createLegendLabel(out[i]));
                // console.log('LANDMARK', _this.createLegendLabel(out[i]));
            }
            // console.log(_this.mapView);
            $(_this.mapView).smoothZoom("addLandmark", _this.legendsObj.labelselementsArray);
        };

        /*Render Legends*/
        Floor.prototype.showLegendsById = function(id){
            var ar = this.getLegendsById(id);
            if(ar.ids.length === 0)return;
            
            $(this.mapView).smoothZoom("addLandmark", ar.elements);
        };

         Floor.prototype.hideLegendsById = function(id){
            var ar = this.getLegendsById(id);
            if(ar.ids.length === 0)return;

            $(this.mapView).smoothZoom("removeLandmark", ar.ids);
        };

        Floor.prototype.createPopUp = function(popupData){

            var cont = "<div id='mapPopUp-" + this.id+ "' class='item mark mapPopUp' data-show-at-zoom='0' data-allow-scale='false' data-position='"+  ((popupData.x) * this.scaleOffset) + "," + ((popupData.y) * this.scaleOffset) + "'>";
            cont += "<div class='popContainer'>" + popupData.html + "</div></div>";
            return cont;
        };


        Floor.prototype.createLegend = function(legendItemData){
            // var cont = "<div name='" + legendItemData.id.toString() + "' class='item mark' data-show-at-zoom='0' data-position='" + Math.round(100*Math.random()).toString() + "," + Math.round(100*Math.random()).toString() + "'>";
            var cont = "<div id='" + legendItemData.id.toString() + legendItemData.x.toString() + legendItemData.y.toString() + "' name='" + legendItemData.id.toString() + "' class='item mark legends' data-show-at-zoom='0' data-allow-scale='false' data-position='"+  ((legendItemData.x + this.positionOffset.x) * this.scaleOffset) + "," + ((legendItemData.y + this.positionOffset.y) * this.scaleOffset) + "'>";
            cont += "<img src='" + /*JMap.serverUrl +*/ legendItemData.url + "' width='50' height='50'></div>";// width='100' height='100'
            return cont;
        };
        
        Floor.prototype.createLegendLabel = function(legendItemData){
            // console.log("LEGEND ITEM DATA", legendItemData)
            var cont = "<div id='" + legendItemData.id.toString() + legendItemData.x.toString() + legendItemData.y.toString() + "' name='" + legendItemData.id.toString() + "' class='item mark legends labelsOn-" + that.id + " "+ legendItemData.iconClassName + "' data-show-at-zoom='" + legendItemData.zl + "' data-allow-scale='true' data-position='"+  ((legendItemData.x) * this.scaleOffset) + "," + ((legendItemData.y) * this.scaleOffset) + "'>";
            cont += "<div>" + legendItemData.label + "</div></div>";// width='100' height='100'
            return cont;
        };

        Floor.prototype.createStoreLabel = function(legendItemData){
            
            var cont = "<div id='" + legendItemData.id.toString() + legendItemData.wp.x.toString() + legendItemData.wp.y.toString() + "' name='" + legendItemData.id.toString() + "' class='item mark legends labelsOn-" + that.id + " "+ legendItemData.iconClassName + "' data-show-at-zoom='" + legendItemData.zl + "' data-allow-scale='true' data-position='"+  ((legendItemData.wp.x) * this.scaleOffset) + "," + ((legendItemData.wp.y) * this.scaleOffset) + "'>";
            cont += "<div>" + legendItemData.label + "</div></div>";// width='100' height='100'
            return cont;
        };

          Floor.prototype.createMapLabel = function(mapLabelData){
            // console.log("LEGEND ITEM DATA", mapLabelData)
            var cont = "<div id='" + mapLabelData.text.split(" ").join("") + mapLabelData.x.toString() + mapLabelData.y.toString() + "' name='" + mapLabelData.text + "' class='item mark legends labelsOn-" + this.id + " "+ mapLabelData["class"] + "' data-show-at-zoom='0' data-rotation='" + mapLabelData.rotation + "' data-allow-scale='true' data-position='"+  ((mapLabelData.x) * this.scaleOffset) + "," + ((mapLabelData.y ) * this.scaleOffset) + "'>";
            cont += "<div>" + mapLabelData.text + "</div></div>";// width='100' height='100'
            return cont;
        };

        Floor.prototype.hideShowLegend = function(hideShow){

            switch(hideShow){
                case "hide":
                    $(this.mapView).smoothZoom("removeLandmark", this.legendsObj.ids);
                    break;
                case "show":
                    $(this.mapView).smoothZoom("addLandmark", this.legendsObj.elementsArray);
                    break;
            }
        };

        Floor.prototype.hideShowLabels = function(hideShow){
            switch(hideShow){
                case "hide":
                    $('labelsOn' + that.id).hide();
                    break;
                case "show":
                    $('labelsOn' + that.id).show();
                    break;
            }
        }


        Floor.prototype.resetLegendTimeout = function (id) {
            JMap.fire("clearLegendSelection", [id]);
        };

        Floor.prototype.resetLegends = function(id){//returns icons in legendsView

            var legendChildren = this.legendsView.childNodes;
            for(var i2 = 0, len2 = legendChildren.length; i2 < len2; i2++) {
                if(legendChildren[i2].getAttribute("name") != "yah") {
                     var op =  legendChildren[i2].getAttribute("data-opacity");
                    legendChildren[i2].className = "legendItem";

                    TweenLite.to(legendChildren[i2], 0, {alpha:op});
                    TweenLite.killTweensOf(legendChildren[i2], true);                   
                }

            }
        };


        Floor.prototype.VOLegend = function(id, x, y, url, label, description) {
            var leg = {};
            if (typeof label === "undefined") { label = null; }
            if (typeof description === "undefined") { description = null; }
            leg.id = id;
            leg.x = x;
            leg.y = y;
            leg.url = url;
            leg.label = label;
            leg.description = description;
            return leg;
        };

        /*Retrive Legends*/

        Floor.prototype.getLegendsById = function(id){//returns icons in legendsView
            var a = [];
            for(var i = 0, len = this.legendsObj.ids.length; i < len; i++){
                // console.log(this.legendsObj.ids[i].substring(0, id.length), id);
                if(this.legendsObj.ids[i].substring(0, id.length) === id){
                    a.push(this.legendsObj.ids[i]);
                }
            }

            var els = [];
            for(i = 0, len = this.legendsObj.elementsArray.length; i < len; i++){
                var elId = $(this.legendsObj.elementsArray[i]).attr("id");

                for(var j = 0; j < a.length; j++){
                    if(elId === a[j])els.push(this.legendsObj.elementsArray[i]);
                }
            }
            return {ids:a, elements:els};
        };



        Floor.prototype.getLegendsDataById = function(id){//returns array of legend data of the same id
            var a = [];
            for(var i = 0, len = this.legendResponse.length; i < len; i++){
                if(this.legendResponse[i].id == id)a.push(this.legendResponse[i]);
            }
            return a;
        };

        Floor.prototype.localToMap = function (el, map, animateTime) {

            var target = el;
            var mapObj = this.zoomData;

            if(animateTime === undefined)animateTime = 0;

            if(mapObj.normWidth && el.hasAttribute("data-x")) {

                target_width = el.getAttribute("data-width");
                target_height = el.getAttribute("data-height");
                map_width = mapObj.normWidth;
                map_height = mapObj.normHeight;

                var offsetx = el.getAttribute("data-offsetx") || 0;
                var offsety = el.getAttribute("data-offsety") || 0;

                var targetX = el.getAttribute("data-x") - offsetx;
                var targetY = el.getAttribute("data-y") - offsety;

                if(el.getAttribute("data-sizeoffset")) {
                    targetX = (targetX - ((el.getAttribute("data-width") * (el.getAttribute("data-scale-x") / this.currentScale)))) /*- (offsetx * el.getAttribute("data-scale-x"))*/;
                    targetY = (targetY - ((el.getAttribute("data-height") * (el.getAttribute("data-scale-y") / this.currentScale)))) /*- (offsety * el.getAttribute("data-scale-y"))*/;
                }

                var mapSizeDiffWidth = (map_width * (this.currentScale)) - map_width;
                var mapSizeDiffHeight = (map_height * (this.currentScale)) - map_height;

                var newX = (((targetX / map_width) * map_width) * this.currentScale) - (mapSizeDiffWidth / 2);
                var newY = (((targetY / map_height) * map_height) * this.currentScale) - (mapSizeDiffHeight / 2);
                
                el.setAttribute("data-calcx", newX);
                el.setAttribute("data-calcy", newY);

                TweenLite.to(el, 0, {x:newX, y:newY});
                
                // TweenLite.fromTo(el, animateTime, {alpha:0, delay:0.1}, {alpha:1});

            } else {
                //console.log("positioning failed");
            }
        };



        /************************************************************************/
        /*************************** DOUBLE TAP MAP *****************************/
        /************************************************************************/

        Floor.prototype.dblTapZoom = function(id){
            var that = this;
        }
        return Floor;
    })();
    JMap.Floor = Floor;

var BuildingModelGrid = (function () {

        /**
         * This class parses all the waypoints and corresponding map meta data from the CMS
         * @class BuildingModelGrid
         * @constructor 
         */
        function BuildingModelGrid(options) {
        	this.options = options;
            this.WPS = {};
        }
        
        /**
         * Gets the waypoint that this specific device is assigned to.
         * @method getYah
         * @param {} deviceid
         */

        BuildingModelGrid.prototype.getYah = function (deviceid) {
            if (!deviceid)
                deviceid = JMap.storage.device.deviceId;
            var id = Number(deviceid);
            for (var i = 0, n = this.waypoints.length; i < n; i++) {
                var wp = this.waypoints[i];
                if (!wp.kids)
                    continue;
                if (wp.kids.indexOf(id) != -1)
                    return wp;
            }

            return null;
        };
        
        /**
         * Get a waypoint by it's id and the Map's Id that it belongs to.
         * @method getWPByIdAndMapid
         * @param {int} wpid Integer identifier of the waypoint
         * @param {int} mapid Reference this under the "Map ID" column in the CMS.
         * @return Waypoint Object
         */
        BuildingModelGrid.prototype.getWPByIdAndMapid = function (wpid, mapid) {
            return this.WPS[mapid + ' ' + wpid];
        };

        /**
         * Returns all assigned movers in the project.
         *
         * @method getAllMovers
         * @return Array of MappedMover Object
         */

        BuildingModelGrid.prototype.getAllMovers = function () {
            return this.movers;
        };

        /**
         * Gets the map data by it's mapId
         * @method getMapDataById
         * @param {int} id Reference this under the "Map ID" column in the CMS.
         * @return Map Data Object
         */
        BuildingModelGrid.prototype.getMapDataById = function (id) {
            for(var i = 0, len = JMap.storage.maps.data.length; i < len; i++){
                // console.log(JMap.storage.maps.data[i]);
                if(id == JMap.storage.maps.data[i].mapId)return JMap.storage.maps.data[i];
            }
            return null;
        };

        

        /**
         * Finds the points involved in the most efficient point from one waypoint to another.
         *
         * @method findWay
         * @param {Waypoint object} wpfrom The starting waypoint.
         * @param {Waypoint object} wpto The end waypoint.
         * @param {Boolean} accessible Specifies whether to use accessible routes or not. Defualts to false. 
         * @return Array of Objects. The length on the Array reflects the number of floors involved. Each Object has it's own array of points for it's part in the route.
         */
        BuildingModelGrid.prototype.findWay = function (wpfrom, wpto, elevator) {
			if(!wpfrom || !wpto) return [];
            // console.log("FINDING WAY");
            this._mover = [];
            var ar = [];
            var fl = this.getFloorById(wpfrom.mapid);
            var way1 = {};
            var way2;
            if (wpfrom.mapid == wpto.mapid)
                ar.push(this.getFloorPath(wpfrom.mapid, wpfrom.id, wpto.id));
            else {
                var mov = this.getMoverClosest(wpfrom, wpto,elevator);
                if (!mov) {
                    // console.log('EEEERRRROOORRR   no mover   from: '+wpfrom.mapid +'   to : '+wpto.id);
                    return [];
                }
                this._mover.push(mov);
                ar.push(this.getFloorPath(wpfrom.mapid, wpfrom.id, mov.conn1.wpid));
                ar.push(this.getFloorPath(wpto.mapid, mov.conn2.wpid, wpto.id));

                var mvrData = this.getMoverType(mov);
                mov.imagePath = mvrData.imagePath;
                mov.typeName = mvrData.typeName;
                ar[0].mover = mov;
            }
            return ar;
        };

        /**
         * Determines the type of mover passed.
         *
         * @method getMoverType
         * @param {MappedMover Object} mover The mapped mover, typically one that's involved in the current route.
         * @return MoverType Object. 
         */
        BuildingModelGrid.prototype.getMoverType = function (mover) {
            for(var i =0, len = this.mover_types.length; i < len; i++){
                if(mover.type === this.mover_types[i].moverId)return this.mover_types[i];
            }
        };

        BuildingModelGrid.prototype.getFloorPath = function (mapid, from, to) {
            var vo = {};
            var fl = this.getFloorById(mapid);

            vo.mapid = mapid;
            vo.seq = fl.floorSequence;
            vo.points = fl.grid.getPathFromTo(from, to);
            return vo;
        };


        BuildingModelGrid.prototype.isConnected = function (mapid, cons) {
            for (var i = 0, n = cons.length; i < n; i++) {
                if (cons[i].mapid == mapid)
                    return cons[i];
            }
            return null;
        };

        BuildingModelGrid.prototype.getMoverFirst = function (wpfrom, wpto) {
            var map1 = wpfrom.mapid;
            var map2 = wpto.mapid;

            for (var i = 0, n = this.movers.length; i < n; i++) {
                var mov = this.movers[i];
                var con1 = this.isConnected(wpfrom.mapid, mov.connections);
                var con2 = this.isConnected(wpto.mapid, mov.connections);
                if (con1 && con2) {
                    mov.conn1 = con1;
                    mov.conn2 = con2;
                    return mov;
                }
            }
        };

        BuildingModelGrid.prototype.getPathLength = function (fromid, toid, mapid) {
            var fl = this.getFloorById(mapid);
            // console.log(fromid, toid, mapid);
            return fl.grid.getPathLength(fromid, toid);
        };

        BuildingModelGrid.prototype.getFloorPreferenceMultiplier = function(mapid) {
            var currentMultiplier = 1;
            if(this.mapData) {
                var currentPref = 0;
                for(var i = 0; i < this.mapData.length; i++) {
                    if(this.mapData[i].mapId == mapid) {
                        if(this.mapData[i].preference == undefined) break;
                        if(this.mapData[i].preference == 0) {
                            currentMultiplier = 1;
                        } else if (this.mapData[i].preference > 0) {
                            currentMultiplier = currentMultiplier / (this.mapData[i].preference + 1);
                        } else if (this.mapData[i].preference < 0) {
                            currentMultiplier = currentMultiplier * (Math.abs(this.mapData[i].preference) + 1);
                        }
                        break;
                    }
                }
            }

            return currentMultiplier;         
        } 

        BuildingModelGrid.prototype.getMoverClosest = function (wpFrom, wpTo, elevator) {
        	var map1 = wpFrom.mapid;
            var map2 = wpTo.mapid;
            var mover;
            var length = -1;

            for(var i = 0; i < this.movers.length; i++) {
                var currentMov = this.movers[i];
                if(elevator && currentMov.type !== 1) continue;

                var con1 = this.isConnected(wpFrom.mapid, currentMov.connections);
                var con2 = this.isConnected(wpTo.mapid, currentMov.connections);

                // console.log("Checking some Movers. Nothing to see Here");
                // console.log("First Connection", con1);
                // console.log("Second Connection", con2);

                if(con1 && con2) {
                    var floorPrefMultiplierFrom = this.getFloorPreferenceMultiplier(wpFrom.mapid);
                    var floorPrefMultiplierTo = this.getFloorPreferenceMultiplier(wpTo.mapid);

                    // console.log("Got Multiplier", floorPrefMultiplierFrom);
                    // console.log("Got Multiplier", floorPrefMultiplierTo);

                    var dist1 = floorPrefMultiplierFrom * (this.getPathLength(wpFrom.id, con1.wpid, wpFrom.mapid));
                    var dist2 = floorPrefMultiplierTo * (this.getPathLength(wpTo.id, con2.wpid, wpTo.mapid));

                    var distTotal = dist1 + dist2;

                    if(length == -1) {
                        length = distTotal;
                        currentMov.conn1 = con1;
                        currentMov.conn2 = con2;
                        mover = currentMov;
                    } else if (length > distTotal) {
                        length = distTotal;
                        currentMov.conn1 = con1;
                        currentMov.conn2 = con2;
                        mover = currentMov;
                    }
                }
            }

            return mover;
        };

        
        /**
         * Gets a waypoint using a Desination's Client ID.
         * @method getWPByJid
         * @param {String} jid Reference this under the "Client ID" column in the CMS.
         * @return Waypoint Object
         */
        BuildingModelGrid.prototype.getWPByJid = function (jid) {
            for (var i = 0, n = this.waypoints.length; i < n; i++) {
                var wp = this.waypoints[i];
                if (!wp.jids)
                    continue;

                if (wp.jids.indexOf(jid) != -1)
                    return wp;
            }
            return null;
        };

        /**
         * Gets an array of all the map data.
         * @method getAllFloors
         * @return Array. Includes all Map data objects.
         */
        BuildingModelGrid.prototype.getAllFloors = function () {
            return this.arFloors;
        };

        BuildingModelGrid.prototype.load = function (callBack) {
            this.onReady = callBack;
            this.loadStructure();
        };

        BuildingModelGrid.prototype.loadMapbuilderData = function () {
            var _this = this;
            JMap.getMapData(function(res){
                // console.log("Map data", res);
                return _this.onData(res);
            });
            JMap.getPeopleMovers(function(res){
                return _this.onMoverData(res);
            });

            JMap.getMaps(function(res) {
                return _this.onMaps(res);
            });
        };

        /**
         * Gets a specific floor using it's mapId.
         * @method getFloorById
         * @param {int} in Reference this under the "Map ID" column in the CMS.
         * @return Map Data Object
         */
        BuildingModelGrid.prototype.getFloorById = function (num) {
            for (var i = 0, n = this.arFloors.length; i < n; i++) {
                if (this.arFloors[i].mapId == num)
                    return this.arFloors[i];
            }
            return null;
        };

        BuildingModelGrid.prototype.onMaps = function(res) {
            this.mapData = res;
        };


        BuildingModelGrid.prototype.getFloorBySequence = function (seq) {
            for (var i = 0, n = this.arFloors.length; i < n; i++) {
            	// console.log(this.arFloors[i]);
                if (this.arFloors[i].floorSequence == seq)
                    return this.arFloors[i];
            }
            return null;
        };

        BuildingModelGrid.prototype.setOffset = function(posOffset){
        	for (var i = 0; i < this.waypoints.length; i++) {
        		var wp = this.waypoints[i];
        		wp.x = wp.x + posOffset.x;
        		wp.y = wp.y + posOffset.y;
        		this.waypoints[i] = wp;
        	}

        	// for (var i = 0; i < this.waypoints.length; i++) {
        	// 	var wp = this.waypoints[i];
        	// 	wp.x = wp.x + posOffset.x;
        	// 	wp.y = wp.y + posOffset.y;
        	// 	this.waypoints[i] = wp;
        	// }
        };

        BuildingModelGrid.prototype.onData = function (res) {
            this.access_level = res.access_level;
            this.blocked = res.blocked;
            this.movers = res.movers;
            this.movers_directions = res.movers_directions;
            this.movers_status = res.movers_status;
            this.paths = res.paths;
            this.waypoints = res.waypoints;


         //    for (var i = 0; i < this.waypoints.length; i++) {
        	// 	var wp = this.waypoints[i];
        	// 	wp.x = wp.x + 1486;
        	// 	wp.y = wp.y + 1194;
        	// 	this.waypoints[i] = wp;
        	// }

            this.parseData();
            this.parseGrid();

            var newMovers = [];

            for(var i = 0; i < this.movers.length;i++){
                if(this.movers[i].connections !== null){
                    for(var j = 0; j < this.movers[i].connections.length; j++){
                        this.movers[i].connections[j].wp = this.getWPByIdAndMapid(this.movers[i].connections[j].wpid, this.movers[i].connections[j].mapid);
                        newMovers.push(this.movers[i]);
                    }
                }
            }

            this.movers = newMovers;

            if (this.onReady)this.onReady();
        };

        BuildingModelGrid.prototype.onMoverData = function (res) {
            this.mover_types = res;
        };

        BuildingModelGrid.prototype.parseData = function () {
            var arW = this.waypoints;
            var arD = [];
            var objWP = {};
            var objD = {};
            for (var i = 0, n = arW.length; i < n; i++) {
                var wp = arW[i];
                var dot = {id:wp.id, x:wp.x, y:wp.y, join:[], mapid:wp.mapid};
                objD[wp.mapid + ' ' + wp.id] = dot;
                objWP[wp.mapid + ' ' + wp.id] = wp;
                var floor = this.getFloorById(wp.mapid);
                if (floor) {
                    if (!floor.dots)
                        floor.dots = [];
                    floor.dots.push(dot);
                } //else
                    // console.log(' EEEERRRROOR no floor with id :' + wp.mapid);
            }
            this.WPS = objWP;
            var arP = this.paths;

            for (var i = 0, n = arP.length; i < n; i++) {
                var p = arP[i];
                // console.log(p);
                if(p.blockedid)continue;
                dot = objD[p.mapid + ' ' + p.wpid1];
                if (dot)
                    dot.join.push(p.wpid2);
// else
                    // console.log('Errrrrrrrrrrroooorrrrrr   no VoDot for ' + p.mapid + ' ' + p.wpid1);
                dot = objD[p.mapid + ' ' + p.wpid2];
                if (dot)
                    dot.join.push(p.wpid1);
// else
                    // console.log('Errrrrrrrrrrroooorrrrrr   no VoDot for ' + p.mapid + ' ' + p.wpid1);
            }
        };

        BuildingModelGrid.prototype.parseGrid = function () {
            for (var i = 0, n = this.arFloors.length; i < n; i++) {
                var fl = this.arFloors[i];
                fl.grid = new JMap.Grid();
                fl.grid.parseJson(fl.dots);
            }
        };


        BuildingModelGrid.prototype.onStructure = function (resp) {
            this.arFloors = resp;
            this.loadMapbuilderData();
        };

        BuildingModelGrid.prototype.loadStructure = function () {
            // console.log("JMAPS DATA");
            // console.log(JMap.storage.maps.data);
            this.onStructure(JMap.storage.maps.data);
            /*var _this = this;
            $.get(JMap.serverUrl + '/rest/maps/all', null, function (res) {
                return _this.onStructure(res);
            }, 'json');*/
        };
        return BuildingModelGrid;
    })();
    JMap.BuildingModelGrid = BuildingModelGrid;

    var Point = (function () {

        function Point(x, y, rotation) {
            this.x = x;
            this.y = y;
            this.rotation = rotation;
        }

        Point.distance = function (p1, p2) {
            return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
        };

        Point.origin = new Point(0, 0);
        return Point;
    })();
    JMap.Point = Point;

    var NodeP = (function (_super) {
        __extends(NodeP, _super);
        
        function NodeP(id, x, y) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            _super.call(this, x, y);
            this.id = id;
            this._neighbors = [];
        }
        
        NodeP.prototype.cloneNode = function () {
            var node = new NodeP(this.id, this.x, this.y);
            node.parseNeighbors(this._neighbors.join(","));
            return node;
        };

        NodeP.prototype.parseNeighbors = function (csv) {
            var ar = csv.split(",");
            for (var i = 0, n = ar.length; i < n; i++) {
                this._neighbors.push(ar[i]);
            }
        };

        
        NodeP.prototype.addNeighbor = function (id) {
            if (!this.containsNeighbor(id) && id != "")
                this._neighbors.push(id);
        };
        
        NodeP.prototype.containsNeighbor = function (id) {
            return this._neighbors.indexOf(id) > -1;
        };
        
        NodeP.prototype.getNeighbor = function (index) {
            if (index >= 0 && index < this._neighbors.length)
                return this._neighbors[index];
            return null;
        };
        
        NodeP.prototype.numNeighbors = function () {
            return this._neighbors.length;
        };
        
        NodeP.prototype.expandNamespace = function (key) {
        
            this.id += key;
            for (var j in this._neighbors)this._neighbors[j] += key;
        };
        
        NodeP.prototype.toString = function () {
            return "[Node] id:" + this.id + ", x:" + this.x + ", y:" + this.y + ", neighbors:(" + this._neighbors + ")";
        };
        return NodeP;
    })(Point);

    var Path = (function () {
        function Path(length, bestCase, $path) {
            if (typeof length === "undefined") { length = -1; }
            if (typeof bestCase === "undefined") { bestCase = -1; }
            if (typeof $path === "undefined") { $path = null; }
            this.length = length;
            this.bestCase = bestCase;
            this._path = ($path != null) ? $path : [];
        }

        Path.prototype.destroy = function () {
            this._path = null;
            this.nodes = null;
        };

        
        Path.prototype.clone = function () {
            return new Path(this.length, this.bestCase, this._path.slice(0));
        };

        
        Path.prototype.hasLength = function () {
            return this.length + this.bestCase >= 0;
        };
        
        Path.prototype.lastElement = function () {
            return this._path.slice(-1)[0];
        };
        
        Path.prototype.containsNode = function (id) {
            return this._path.indexOf(id) > -1;
        };
        
        Path.prototype.addNode = function (id) {
            if (!this.containsNode(id))
                this._path.push(id);
        };
        
        Path.prototype.getMyPath = function () {
            return this._path;
        };
        
        Path.prototype.toString = function () {
            return "[Path] length:" + this.length + ", nodes:(" + this._path + ")";
        };
        return Path;
    })();

    var Grid = (function () {
        
        function Grid() {
            this._nodes = {};
        }
        
        Grid.prototype.parseJson = function (data) {
            for (var i = 0, n = data.length; i < n; i++) {
                var node = new NodeP(data[i].id, data[i].x, data[i].y);
                node.mapid = data[i].mapid;
                node.parseNeighbors(data[i].join.toString());
                this._nodes[node.id] = node;
            }
        };

        Grid.prototype.parseXML = function (xml) {
            var xmll = xml.getElementsByTagName('node');
            for (var i = 0, n = xmll.length; i < n; i++) {
                var node = new NodeP(xmll[i].attributes["id"].value, parseFloat(xmll[i].attributes["x"].value), parseFloat(xmll[i].attributes["y"].value));
                node.parseNeighbors(xmll[i].attributes["join"].value);
                this._nodes[node.id] = node;
            }
        };
        Grid.prototype.getNodePathById = function (id) {
            return this._nodes[id];
        };
        Grid.prototype.distance = function (p1, p2) {
            return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
        };
        Grid.prototype.findPath = function (startId, goalId) {
            var startPath = new Path(0, 0, [startId]);
            var $stack = [startPath];
            var $best = new Path();
            var $reachedNodes = new Object();
            var cyc = 0;
            while ($stack.length > 0) {
                var searchPath = $stack.shift();
                var idoflast = searchPath.lastElement();
                var $searchNode = this.getNodePathById(idoflast);
                for (var j = 0; j < $searchNode.numNeighbors(); j++) {
                    var $branch = searchPath.clone();
                    var expandNode = $searchNode.getNeighbor(j);
                    if (!$branch.containsNode(expandNode)) {
                        var prevCoord = this.getNodePathById($branch.lastElement());
                        var currentCoord = this.getNodePathById(expandNode);
                        var $goalCoord = this.getNodePathById(goalId);
                        $branch.addNode(expandNode);
                        $branch.length += this.distance(prevCoord, currentCoord);
                        $branch.bestCase = $branch.length + this.distance(currentCoord, $goalCoord);
                        var $shortest = $reachedNodes[expandNode];
                        if (!$shortest)
                            $shortest = $branch.length;

                        if ($branch.length <= $shortest && (!$best.hasLength() || $branch.bestCase < $best.length)) {
                            $reachedNodes[expandNode] = $branch.length;

                            if (expandNode == goalId)
                                $best = $branch;
else
                                $stack.push($branch);
                        }
                    }
                }
                $stack.sort(function ($a, $b) {
                    if ($a.bestCase < $b.bestCase)
                        return -1;
else if ($a.bestCase > $b.bestCase)
                        return 1;
else
                        return 0;
                });
                cyc++;
            }

            return $best;
        };
        
        Grid.prototype.getPathFromTo = function (from, sto) {
            var ar = [];
            var nodes = this._nodes;
            var path = this.findPath(from, sto).getMyPath();
            path.forEach(function (str) {
                var node = nodes[str];
                ar.push(new Point(node.x, node.y));
            });
            return ar;
        };

        Grid.prototype.getPointsInBounds = function(startX, startY, endX, endY, centerX, centerY) {
            var nodeArr = [];
            var _this = this;

            if(!this._nodeList) {
                this._nodeList = [];
                for(var ele in this._nodes) {
                    this._nodeList.push(this._nodes[ele]);
                }
            }

            for(var i = 0; i < this._nodeList.length; i++) {
                if((this._nodeList[i].x > startX) && (this._nodeList[i].x < endX) && (this._nodeList[i].y > startY) && (this._nodeList[i].y < endY)) {

                    var nodeElement = this._nodeList[i];
                    nodeElement.distance = _this.getDistance(centerX, centerY, nodeElement.x, nodeElement.y);
                    nodeArr.push(nodeElement);
                }

            }


            if(nodeArr.length > 1) {
                nodeArr.sort(function(a, b) {
                    return _this.getDistance(centerX, centerY, a.x, a.y) - _this.getDistance(centerX, centerY, b.x, b.y);
                });            
            }
            return nodeArr;
        };

        Grid.prototype.getDistance = function (x1, y1, x2, y2) {
            return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        };

        Grid.prototype.getPathLength = function (from, sto) {
            return this.findPath(from, sto).length;
        };
        return Grid;
    })();
    JMap.Grid = Grid;
})(JMap || (JMap = {}));

/*
	Smooth Zoom Pan - jQuery Image Viewer
 	Copyright (c) 2011-14 Ramesh Kumar
	http://codecanyon.net/user/VF
	
	Version:	1.7.0
	RELEASE:	09 SEP 2011
	UPDATE:		27 May 2014
	
	Built using:
	jQuery 		version: 1.7.0+		http://jquery.com/
	Modernizr 	version: 2.8.2		http://www.modernizr.com/
	MouseWheel	version: 3.1.11		http://brandon.aaron.sh
	
*/

(function ($, window, document) {
	
	/*****************************************************************************
		Default settings:
		For detailed description of individual parameters, see the help document
	******************************************************************************/
	var defaults = {
		
		width: '',									//Width of the view area [480, '480px', '100%']
		height: '',									//Height of the view area [480, '480px', '100%']

		initial_ZOOM: '',							//Initial zoom level to start with (in percentage) [100]
		initial_POSITION: '',						//Initial location to be focused in pixel value [150,150 or 150 150]

		animation_SMOOTHNESS: 5.5,					//Ease or smoothness of all movements [Any number from 0]				
		animation_SPEED_ZOOM: 5.5,					//Speed of zoom movements [Any number from 0] 
		animation_SPEED_PAN: 5.5,					//Speed of pan movements [Any number from 0] 

		zoom_MAX: 800,								//Maximum limit for zooming (in percentage)
		zoom_MIN: '',								//Minimum limit for zooming (in percentage)
		zoom_SINGLE_STEP: false,					//To reach maximum and minimum zoom levels in single click 
		zoom_OUT_TO_FIT: true,						//To allow image to be zoomed out with whitespace on sides
		zoom_BUTTONS_SHOW: true,					//To enable/disable the + and - buttons

		pan_BUTTONS_SHOW: true,						//To enable/disable the arrow and reset buttons
		pan_LIMIT_BOUNDARY: true,					//To allow/restrict moving the image beyond boundaries
		pan_REVERSE: false,
		
		reset_ALIGN_TO: 'center center', 			//Image can be aligned to desired position on reset. Example: 'Top Left'
		reset_TO_ZOOM_MIN: true,					//How it should behave if zoom_MIN value set and while clicking reset button, 

		button_SIZE: 18,							//Button width and height (in pixels)
		button_SIZE_TOUCH_DEVICE: 30,				//Button width and height (in pixels) on touch devices
		button_COLOR: '#FFFFFF',					//Button color in hexadecimal
		button_BG_COLOR: '#000000',					//Button set's background color in hexadecimal
		button_BG_TRANSPARENCY: 55,					//Background transparency (in percentage)
		button_AUTO_HIDE: false,					//To hide the button set when mouse moved outside the view area
		button_AUTO_HIDE_DELAY: 1,					//Auto hide delay time in seconds
		button_ALIGN: 'bottom right',				//Button set can be aligned to any side or center
		button_MARGIN: 10,							//Space between button set and view port's edge
		button_ROUND_CORNERS: true,					//To enable disable roundness of button corner
		
		touch_DRAG: true,							//Enable/disable the dragability of image (touch)
		mouse_DRAG: true,							//Enable/disable the dragability of image (mouse)
		mouse_WHEEL: true,							//Enable/disable mousewheel zoom
		mouse_WHEEL_CURSOR_POS: true,				//Enable/disable position sensitive mousewheel zoom
		mouse_DOUBLE_CLICK: true,					//Enable/disable zoom action with double click

		background_COLOR: '#FFFFFF',				//Background colour of image container
		border_SIZE: 1,								//Border size of view area
		border_COLOR: '#000000',					//Border color of view area
		border_TRANSPARENCY: 10,					//Border transparency of view area
		
		image_url: '',								//Set url or image to be zoomed
		image_original_width: '',					//Original width of main image
		image_original_height: '',					//Original height of main image
		container: '',								//Set container element of image (id of container)
		
		on_IMAGE_LOAD: '',							//To Call external function immediatly after image loaded
		on_ZOOM_PAN_UPDATE: '',						//To Call external function for each zoom, pan animation frame
		on_ZOOM_PAN_COMPLETE: '',					//To Call external function whenever zoom, pan animation completes
		on_LANDMARK_STATE_CHANGE: '',				//To Call external function whenever the zoom leval crosses global "data-show-at-zoom" value
		
		use_3D_Transform: true,						//To enable / disable Hardware acceleration on webkit browsers
		
		responsive: false,							//To enable / disable Responsive / fluid layout
		responsive_maintain_ratio: true,			//To maintain view area width/height ratio or not
		max_WIDTH: '',								//Maximum allowed width of view area (helpful when 'width' parameter set with % and need limit)
		max_HEIGHT: ''								//Maximum allowed height of view area (helpful when 'height' parameter set with % and need limit)
	};

	var props = $.event.props || [];
    props.push("touches");
    props.push("scale");
    props.push("rotation");
    $.event.props = props;



	function Zoomer($elem, params) {
		
		var self = this,		
		op = $.extend({}, defaults, params);
		this.$elem = $elem;	
		this.hasTouch = this.checkTouchSupport ();

		/**********************************************************
		Option values verified and formated if needed
		**********************************************************/
		this.sW = op.width;
		this.sH = op.height;

		this.init_zoom = op.initial_ZOOM / 100;
		this.init_pos = op.initial_POSITION.replace(/,/g, ' ').replace(/\s{2,}/g, ' ').split(' ');

		this.zoom_max = op.zoom_MAX / 100;
		this.zoom_min = op.zoom_MIN / 100;
		
		this.zoom_single = checkBoolean (op.zoom_SINGLE_STEP);
		this.zoom_fit = checkBoolean (op.zoom_OUT_TO_FIT);		
		this.zoom_speed = 1 + (((op.animation_SPEED === 0 || op.animation_SPEED? op.animation_SPEED : op.animation_SPEED_ZOOM) + 1) / 20);
		this.zoom_show = checkBoolean (op.zoom_BUTTONS_SHOW);

		this.pan_speed_o = (op.animation_SPEED === 0 || op.animation_SPEED ? op.animation_SPEED : op.animation_SPEED_PAN);
		this.pan_show = checkBoolean (op.pan_BUTTONS_SHOW);
		this.pan_limit = checkBoolean (op.pan_LIMIT_BOUNDARY);	
		this.pan_rev = checkBoolean (op.pan_REVERSE);		
		
		this.reset_align = op.reset_ALIGN_TO.toLowerCase().split(' ');	
		this.reset_to_zmin = checkBoolean(op.reset_TO_ZOOM_MIN);
		
		this.bu_size = parseInt((this.hasTouch? op.button_SIZE_TOUCH_DEVICE : op.button_SIZE)/2)*2;
		this.bu_color = op.button_COLOR;
		this.bu_bg = op.button_BG_COLOR;
		this.bu_bg_alpha = op.button_BG_TRANSPARENCY / 100;
		this.bu_icon = op.button_ICON_IMAGE;
		this.bu_auto = checkBoolean (op.button_AUTO_HIDE);

		this.bu_delay = op.button_AUTO_HIDE_DELAY * 1000;
		this.bu_align = op.button_ALIGN.toLowerCase().split(' ');
		this.bu_margin = op.button_MARGIN;
		this.bu_round = checkBoolean (op.button_ROUND_CORNERS);

		this.touch_drag = checkBoolean (op.touch_DRAG);
		this.mouse_drag = checkBoolean (op.mouse_DRAG);
		this.mouse_wheel = checkBoolean (op.mouse_WHEEL);
		this.mouse_wheel_cur = checkBoolean (op.mouse_WHEEL_CURSOR_POS);
		this.mouse_dbl_click = checkBoolean (op.mouse_DOUBLE_CLICK);

		this.ani_smooth =  Math.max(1, (op.animation_SMOOTHNESS+1)/1.45);
		
		this.bg_color = op.background_COLOR;
		this.bord_size = op.border_SIZE;
		this.bord_color = op.border_COLOR;
		this.bord_alpha = op.border_TRANSPARENCY / 100;

		this.container = op.container;
		this.image_url = op.image_url;
		this.image_width = op.image_original_width;
		this.image_height = op.image_original_height;
		
		this.responsive = checkBoolean (op.responsive);
		this.maintain_ratio = checkBoolean (op.responsive_maintain_ratio);
		this.w_max = op.max_WIDTH;
		this.h_max = op.max_HEIGHT;
		
		this.onLOAD = op.on_IMAGE_LOAD;
		this.onUPDATE = op.on_ZOOM_PAN_UPDATE;
		this.onZOOM_PAN = op.on_ZOOM_PAN_COMPLETE;
		this.onLANDMARK = op.on_LANDMARK_STATE_CHANGE;

		/***********************************************************
		Variables for inner operation.	
		x, y, width, height and scale value of image
		***********************************************************/
		this._x;
		this._y;
		this._w;
		this._h;
		this._sc = 0;		
		
		this.rA = 1;
		this.rF = 1;
		this.rR = 1;
		this.iW = 0;
		this.iH = 0;
		this.tX = 0;
		this.tY = 0;
		this.oX = 0;
		this.oY = 0;
		this.fX = 0;
		this.fY = 0;
		this.dX = 0;
		this.dY = 0;
		this.cX = 0;
		this.cY = 0;

		this.transOffX = 0;
		this.transOffY = 0;
		this.focusOffX = 0;
		this.focusOffY = 0;
		this.offX = 0;
		this.offY = 0;
		
		/***********************************************************
		Flags that convey current states and events 
		***********************************************************/
		this._playing = false;
		this._dragging = false;
		this._onfocus = false;
		this._moveCursor = false;
		this._wheel = false;
		this._recent = 'zoomOut';
		this._pinching = false;
		this._landmark = false;
		this._rA;
		this._centx;
		this._centy;
		this._onButton = false;
		this._onHitArea = false;		
		this.cFlag = {
			_zi: false,
			_zo: false,
			_ml: false,
			_mr: false,
			_mu: false,
			_md: false,
			_rs: false,
			_nd: false
		};
		
		/***********************************************************
		Elements and arrays that references elements
		***********************************************************/
		this.$holder;
		this.$hitArea;
		this.$controls;
		this.$loc_cont;		
		this.map_coordinates = [];
		this.locations = [];
		this.buttons = [];
		this.border = [];
		
		/***********************************************************
		miscellaneous
		***********************************************************/
		this.buttons_total = 7;
		this.cButtId = 0;
		this.pan_speed;
		this.auto_timer;
		this.ani_timer;
		this.ani_end;
		this.focusSpeed = this.reduction = .5;
		this.orig_style;		
		this.mapAreas;
		this.icons;		
		this.show_at_zoom;		
		this.assetsLoaded = false;	
		this.zStep = 0;	
		this.sRed = 300;
		this.use3D = op.use_3D_Transform && supportsTrans3D;
		
		// Set events to support pointer / touch / mouse 			
		if (navigator.pointerEnabled || navigator.msPointerEnabled) {			
			//Pointer				
			if (navigator.pointerEnabled) {
				this.pointerDown = 'pointerdown';
				this.pointerUp = 'pointerup';
				this.pointerMove = 'pointermove';
				
			} else if (navigator.msPointerEnabled) {
				this.pointerDown = 'MSPointerDown';
				this.pointerUp = 'MSPointerUp';
				this.pointerMove = 'MSPointerMove';
				
			}
			this.event_down = this.pointerDown+ '.sz';
			this.event_up 	= this.pointerUp+ '.sz';
			this.event_move = this.pointerMove+ '.sz';
			
			this.supportsPointer = true;	
			this.pointers = [];	
		
		} else if (this.hasTouch){	
			//Touch	only	
			this.event_down = 'touchstart'+ '.sz';
			this.event_up 	= 'touchend'+ '.sz';
			this.event_move = 'touchmove'+ '.sz';
		
		} else {
			//Mouse only
			this.event_down = 'mousedown'+ '.sz';
			this.event_up 	= 'mouseup'+ '.sz';
			this.event_move = 'mousemove'+ '.sz';
		}
	
		//Case 1: Image specificed (possibly) through img tag:
		if (this.image_url == '') {
			this.$image = $elem;
			this.id = this.$image.attr('id');
		
		//Case 2: Image url specificed through parameter:
		} else {
			var img = new Image();
			if (this.image_width) {
				img.width = this.image_width;
			}
			if (this.image_height) {
				img.height = this.image_height;
			}
			img.src = this.image_url;			
			this.$image = $(img).appendTo($elem);
		}		
		
		
		//Prepare container div (Basically the element that masks image with overflow hidden)
		this.setContainer();	
		
		//Get button icon image's url
		var testOb;
		if (!this.bu_icon) {
			var regx=/url\(["']?([^'")]+)['"]?\)/;
			testOb = $('<div class="smooth_zoom_icons"></div>');
			this.$holder.append(testOb);
			this.bu_icon = testOb.css("background-image").replace(regx,'$1');
			if (this.bu_icon == 'none') {
				this.bu_icon = 'http://jibestream2.cloudapp.net:8082/cms/components/label/23987_1_262_yah.png';
			}
			testOb.remove();
		}		
		
		//Firefox feature checkup
		if (this.$image.css('-moz-transform') && prop_transform) {
			testOb = $('<div style="-moz-transform: translate(1px, 1px)"></div>');
			this.$holder.append(testOb);
			this.fixMoz = testOb.position().left === 1 ? false : true;
			testOb.remove();	
		} else {
			this.fixMoz = false;
		}		
		
		//Preload icons and main image.	
		this.$image.hide();	
		this.imgList = [
			{loaded: false, src: this.bu_icon || 'http://jibestream2.cloudapp.net:8082/cms/components/label/23987_1_262_yah.png'}, //Icon image
			{loaded: false, src: this.image_url == ''? this.$image.attr('src') : this.image_url} // Main image
		];
		
		// //console.log("From smooth zoom", this.imgList);
		$.each(this.imgList, function (i){
			var _img = new Image();
			$(_img).bind('load', {id:i, self: self}, self.loadComplete).bind('error', {id:i, self: self}, self.loadComplete); //Allow initiation even if image is not there :(
			if(self.imgList[i].src !== undefined)_img.src = self.imgList[i].src;
			else $(_img).trigger('error');
		});
		
	}

	Zoomer.prototype = {
		
		/*Preload the icon and main image
		*********************************************************************************************************************/
		loadComplete: function (e) {
			var self = e.data.self,
				complete = true;
			
			self.imgList[e.data.id].loaded = true;
			for (var j=0; j<self.imgList.length; j++){
				if (!self.imgList[j].loaded) {
					complete = false;
				}
			}
			if (complete) {
				self.assetsLoaded = true;				
				if (self.onLOAD !== '') {
					self.onLOAD ();
				}
										
				//Assets loaded, initiate plugin
				self.init();
			}
		},	
		
		
		/*Make sure the device has touch screen support
		*********************************************************************************************************************/
		checkTouchSupport: function (){
			var touch = 'ontouchstart' in window || 'createTouch' in document;					
			if (navigator.pointerEnabled) {
				touch =  Boolean(touch || navigator.maxTouchPoints);
			} else if (navigator.msPointerEnabled) {
				touch = Boolean(touch || navigator.msMaxTouchPoints);
			}		
			return touch;
		},

		
		/*Initiate after assets loaded
		***********************************************************************************************************************/
		init: function () {
			var self = this,
				$image = self.$image,
				sW = self.sW,
				sH = self.sH,
				container = self.container,	
				cBW, cBH, pan_show = self.pan_show,
				zoom_show = self.zoom_show,
				$controls = self.$controls,
				buttons = self.buttons,
				cFlag = self.cFlag,
				bu_align = self.bu_align,
				bu_margin = self.bu_margin,
				$holder = self.$holder;


			//For phonegap/cordova
			// if(sW === 0 || sH === 0){
			// 	sW = self.sW;
			// 	sH = self.sH;
			// }
			// alert("-----> " + sW + "  " +  sH);


			//Store the default image properties so that it can be reverted back when plugin needs to be destroyed
			self.orig_style = self.getStyle();

			//IE 6 Image tool bar disabled
			$image.attr('galleryimg', 'no');
			
			if (!navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/)) {
				$image.removeAttr('width');
				$image.removeAttr('height');
			}		

			//In case parent element's display property set to 'none', we need to first set them 'block', measure the width and height and then set them back to 'none'
			var temp = $image,
			dispArray = [];

			for (var i = 0; i<5; i++) {				
				if (temp && temp[0] && temp[0].tagName !== 'body' && temp[0].tagName !== 'HTML'){
					if(temp.hasClass("map-floor-container-base") === true){
						temp.width('100%');
						temp.height('100%');
					} 
					if (temp.css('display') == 'none') {
						temp.css('display', 'block');
						dispArray.push(temp);		
						
					}
					// alert("Checking size - > "+ temp.attr("id") + "  " + temp.width() + "  " + temp.height());
					temp = temp.parent();
				} else {
					break;
				}
			}	

			self.iW = $image.width();
			self.iH = $image.height();
			// alert("Setting parent - > " + sW + "  " +  sH + "  " +  self.iW + "  " +  self.iH + "  " +  self.zoom_fit);

			
			for (var i = 0; i< dispArray.length; i++) {
				dispArray[i].css('display', 'none');
			}

			//Initially the image needs to be resized to fit container. To do so, first measure the scaledown ratio	
			self.rF = self.rR = self.checkRatio(sW, sH, self.iW, self.iH, self.zoom_fit);

			//If NO Minimum zoom value set
			if (self.zoom_min == 0 || self.init_zoom != 0) {			
				if (self.init_zoom != '') {
					self.rA = self._sc = self.init_zoom;
				} else {
					self.rA = self._sc = self.rF;
				}	
				if (self.zoom_min != 0) {
					self.rF = self.zoom_min;
					if (self.reset_to_zmin) {
						self.rR = self.zoom_min											
					}
				}
				
			//If Minimum zoom value set
			} else {				
				if (self.rF < self.zoom_min) {
					self.rF = self.zoom_min;
					if (self.reset_to_zmin) {
						self.rR = self.zoom_min											
					}
					self.rA = self._sc = self.zoom_min;				
				} else {
					self.rA = self._sc = self.rR;
				}				
			}

			//Width and Height to be applied to the image
			self._w = self._sc * self.iW;
			self._h = self._sc * self.iH;

			// alert(self._w + "  " + self._h);



			//Resize the image and position it centered inside the wrapper
			if (self.init_pos == '') {
				self._x = self.tX = (sW - self._w) / 2;
				self._y = self.tY = (sH - self._h) / 2;
			} else {
				self._x = self.tX = (sW / 2) - parseInt(self.init_pos[0]) * self._sc;
				self._y = self.tY = (sH / 2) - parseInt(self.init_pos[1]) * self._sc;
				self.oX = (self.tX - ((sW - self._w) / 2)) / (self._w / sW);
				self.oY = (self.tY - ((sH - self._h) / 2)) / (self._h / sH);
			}

			if ((!self.pan_limit || self._moveCursor || self.init_zoom != self.rF) && self.mouse_drag) {				
				 $image.css('cursor', 'move');
				 self.$hitArea.css('cursor', 'move');
			}
			
			
			if (prop_transform) {	
				self.$image.css(prop_origin, '0 0');
			}
			if (self.use3D) {
				$image.css({				
					'-webkit-backface-visibility': 'hidden',
					'-webkit-perspective': 1000
				});
			}	
			
			//Start displaying the image		
			$image.css({
					position: 'absolute',
					'z-index': 2,
					left: '0px',
					top: '0px',
					'-webkit-box-shadow': '1px 1px rgba(0,0,0,0)'
				})
				.hide()
				.fadeIn(500, function () {
					$holder.css('background-image', 'none');					
				});
			
			//Create Control buttons and events				
			var self = self,
				bs = self.bu_size,
				iSize = 50,
				sDiff = 2,
				bSpace = 3,
				mSize = Math.ceil(self.bu_size / 4),
				iconOff = bs < 16 ? 50 : 0,
				bsDiff = bs - sDiff;

			//Show all buttons		
			if (pan_show) {
				if (zoom_show) {
					cBW = parseInt(bs + (bs * .85) + (bsDiff * 3) + (bSpace * 2) + (mSize * 2));
				} else {
					cBW = parseInt((bsDiff * 3) + (bSpace * 2) + (mSize * 2));
				}
				cBH = parseInt((bsDiff * 3) + (bSpace * 2) + (mSize * 2));

				//Show zoom buttons only		
			} else {
				if (zoom_show) {
					cBW = parseInt(bs + mSize * 2);
					cBH = parseInt(bs * 2 + mSize * 3);
					cBW = parseInt(cBW / 2) * 2;
					cBH = parseInt(cBH / 2) * 2;
				} else {
					cBW = 0;
					cBH = 0;
				}
			}

			var pOff = (iSize - bs) / 2,
				resetCenterX = cBW - ((bs - (pan_show ? sDiff : 0)) * 2) - mSize - bSpace,
				resetCenterY = (cBH / 2) - ((bs - (pan_show ? sDiff : 0)) / 2);

			var hProp, vProp, hVal, vVal;
			//Align button set as per settings
			if (bu_align[0] == 'top') {
				vProp = 'top';
				vVal = bu_margin;
			} else if (bu_align[0] == 'center') {
				vProp = 'top';
				vVal = parseInt((sH - cBH) / 2);
			} else {
				vProp = 'bottom';
				vVal = bu_margin;
			}
			if (bu_align[1] == 'right') {
				hProp = 'right';
				hVal = bu_margin;
			} else if (bu_align[1] == 'center') {
				hProp = 'right';
				hVal = parseInt((sW - cBW) / 2);
			} else {
				hProp = 'left';
				hVal = bu_margin;
			}

			//Buttons Container		
			$controls = $(
				'<div style="position: absolute; ' + hProp + ':' + hVal + 'px; ' + vProp + ': ' + vVal + 'px; width: ' + cBW + 'px; height: ' + cBH + 'px; z-index: 20;" class="noSel">\
					<div class="noSel controlsBg" style="position: relative; width: 100%; height: 100%; z-index: 1;">\
					</div>\
				</div>'
			);
			
			$holder.append($controls);
			var $controlsBg = $controls.find('.controlsBg');
			
			//Make the corners rounded
			if (self.bu_round) {
				if (prop_radius) {					
					$controlsBg
						.css(prop_radius, (iconOff > 0 ? 4 : 5) + 'px')
						.css('background-color', self.bu_bg);
				} else {				
					self.roundBG(
						$controlsBg,
						'cBg',
						cBW,
						cBH,
						iconOff > 0 ? 4 : 5,
						375,
						self.bu_bg,
						self.bu_icon,
						1, 
						iconOff ? 50 : 0
					);
				}
			} else {
				$controlsBg.css('background-color', self.bu_bg);
			}
			
			$controlsBg.css('opacity', self.bu_bg_alpha);
			
			//Generating Button properties	(7 buttons)			
			buttons[0] = {
				_var: '_zi',
				l: mSize,
				t: pan_show ? (cBH - (bs * 2) - (bSpace * 2) + 2) / 2 : mSize,
				w: bs,
				h: bs,
				bx: -pOff,
				by: -pOff - iconOff
			};

			buttons[1] = {
				_var: '_zo',
				l: mSize,
				t: pan_show ? ((cBH - (bs * 2) - (bSpace * 2) + 2) / 2) + bs + (bSpace * 2) - 2 : cBH - bs - mSize,
				w: bs,
				h: bs,
				bx: -iSize - pOff,
				by: -pOff - iconOff
			};

			buttons[2] = {
				_var: self.pan_rev? '_ml' : '_mr',
				l: resetCenterX - bsDiff - bSpace,
				t: resetCenterY,
				w: bsDiff,
				h: bsDiff,
				bx: -(sDiff / 2) - iSize * 2 - pOff,
				by: -(sDiff / 2) - pOff - iconOff
			};

			buttons[3] = {
				_var: self.pan_rev? '_mr' : '_ml',
				l: resetCenterX + bsDiff + bSpace,
				t: resetCenterY,
				w: bsDiff,
				h: bsDiff,
				bx: -(sDiff / 2) - iSize * 3 - pOff,
				by: -(sDiff / 2) - pOff - iconOff
			};

			buttons[4] = {
				_var: self.pan_rev? '_md' : '_mu',
				l: resetCenterX,
				t: resetCenterY + bsDiff + bSpace,
				w: bsDiff,
				h: bsDiff,
				bx: -(sDiff / 2) - iSize * 4 - pOff,
				by: -(sDiff / 2) - pOff - iconOff
			};

			buttons[5] = {
				_var: self.pan_rev? '_mu' : '_md',
				l: resetCenterX,
				t: resetCenterY - bsDiff - bSpace,
				w: bsDiff,
				h: bsDiff,
				bx: -(sDiff / 2) - iSize * 5 - pOff,
				by: -(sDiff / 2) - pOff - iconOff
			};

			buttons[6] = {
				_var: '_rs',
				l: resetCenterX,
				t: resetCenterY,
				w: bsDiff,
				h: bsDiff,
				bx: -(sDiff / 2) - iSize * 6 - pOff,
				by: -(sDiff / 2) - pOff - iconOff
			};

			for (var i = 0; i < 7; i++) {
				buttons[i].$ob = $(
						'<div style="position: absolute; display: ' + (i < 2 ? zoom_show ? 'block' : 'none' : pan_show ? 'block' : 'none') + '; left: ' + (buttons[i].l - 1) + 'px; top: ' + (buttons[i].t - 1) + 'px; width: ' + (buttons[i].w + 2) + 'px; height: ' + (buttons[i].h + 2) + 'px; z-index:' + (i + 1) + ';" class="noSel">\
						</div>'
					)
				.css('opacity', .7)
				.bind('mouseover.sz mouseout.sz '+self.event_down, {
					id: i
					
				}, function (e) {
					self._onfocus = false;
					var $this = $(this);
					
					//Button over 
					if (e.type == 'mouseover') {
						if ($this.css('opacity') > .5){
							 $this.css('opacity', 1);
						}
					
					//Button out 
					} else if (e.type == 'mouseout') {
						if ($this.css('opacity') > .5) {
							$this.css('opacity', .7);
						}
					
					//Button press/down
					} else if (e.type == 'mousedown' || e.type == 'touchstart' || e.type == self.pointerDown) {
						self.cButtId = e.data.id;
						self._onButton = true;
						self._wheel = false;	
						
						//If NOT already down..
						if ($this.css('opacity') > .5) {
							$this.css('opacity', 1);
							$holder.find('#' + buttons[self.cButtId]._var + 'norm').hide();
							$holder.find('#' + buttons[self.cButtId]._var + 'over').show();
							
							//CASE 1: If zoomIn pressed and single step zoom enabled
							if (self.cButtId <= 1 && self.zoom_single){								
								if (!cFlag[buttons[self.cButtId]._var]) {									
									self.sRed = 300;
									cFlag[buttons[self.cButtId]._var] = true;
								}
								
							//CASE 2: If any button except RESET pressed
							} else if (self.cButtId <6) {
								cFlag[buttons[self.cButtId]._var] = true;
								
							//CASE 3: RESET pressed							
							} else {
								cFlag._rs = true;
								self.rA = self.rR;							
								if (self.reset_align[0] == 'top') {
									self.fY = (self.sH/2)*(self.rA/2);
								} else if (self.reset_align[0] == 'bottom') {
									self.fY = -(self.sH/2)*(self.rA/2);
								} else {
									self.fY = 0;
								}							
								if (self.reset_align[1] == 'left') {
									self.fX = (self.sW/2)*(self.rA/2);
								} else if (self.reset_align[1] == 'right') {
									self.fX = -(self.sW/2)*(self.rA/2);
								} else {
									self.fX = 0;
								}							
							}
							
							self.focusOffX = self.focusOffY = 0;
							self.changeOffset(true, true);
							if(!self._playing) {
								self.Animate();
							}
						}
						e.preventDefault();
						e.stopPropagation();						
					}
				});

				//Make 2 BGs for Button Normal and Over state
				//Button BG normal
				var tpm = $(
					'<div id="' + buttons[i]._var + 'norm" style="position: absolute; left: 1px; top: 1px; width: ' + buttons[i].w + 'px; height: ' + buttons[i].h + 'px; '+(prop_radius || !self.bu_round ? 'background:'+self.bu_color : '')+'">\
					</div>'
				);

				//Button BG hover
				var tpmo = $(
					'<div id="' + buttons[i]._var + 'over" style="position: absolute; left: 0px; top: 0px; width: ' + (buttons[i].w + 2) + 'px; height: ' + (buttons[i].h + 2) + 'px; display: none; '+(prop_radius || !self.bu_round ? 'background:'+self.bu_color : '')+'">\
					</div>'
				);

				//Add the button icons
				var cont = $(
					'<div id="' + buttons[i]._var + '_icon" style="position: absolute; left: 1px; top: 1px; width: ' + buttons[i].w + 'px; height: ' + buttons[i].h + 'px; background: transparent url(' + self.bu_icon + ') ' + buttons[i].bx + 'px ' + buttons[i].by + 'px no-repeat;" >\
					</div>'
				);
				
				buttons[i].$ob.append(tpm, tpmo, cont);
				$controls.append(buttons[i].$ob);

				//Apply corner radius
				if (self.bu_round) {
					if (prop_radius) {						
						tpm.css(prop_radius , '2px');				
						tpmo.css(prop_radius , '2px');						
					} else {
						self.roundBG(
							tpm,
							buttons[i]._var + "norm",
							buttons[i].w,
							buttons[i].h,
							2,
							425,
							self.bu_color,
							self.bu_icon,
							i + 1,
							iconOff ? 50 : 0
						);
						self.roundBG(
							tpmo,
							buttons[i]._var + "over",
							buttons[i].w + 2,
							buttons[i].h + 2,
							2,
							425,
							self.bu_color,
							self.bu_icon,
							i + 1,
							iconOff ? 50 : 0
						);
					}
				}
			}

			//Add Events for mouse drag / touch swipe action
			$(document).bind(self.event_up + self.id, {self: self}, self.mouseUp);
			
			if ((self.mouse_drag && !self.hasTouch) || (self.touch_drag && self.hasTouch)) {						
				self.$holder.bind(self.event_down, {self: self}, self.mouseDown);
				if (self.hasTouch) {
					$(document).bind(self.event_move + self.id, {self: self}, self.mouseDrag);
				}				
			}		

			//Add Double click / Double tap zoom
			if (self.mouse_dbl_click) {
				var dClickedX,
					dClickedY,
					dbl_click_dir = 1;
					
				self.$holder.bind('dblclick.sz', function (e) {					
					self.focusOffX = e.pageX - $holder.offset().left - (self.sW / 2);
					self.focusOffY = e.pageY - $holder.offset().top - (self.sH / 2);
					self.changeOffset(true, true);
					self._wheel = false;
					
					if (self.rA < self.zoom_max && dbl_click_dir == -1 && dClickedX != self.focusOffX && dClickedY != self.focusOffY) {
						dbl_click_dir = 1;
					}
					
					dClickedX = self.focusOffX;
					dClickedY = self.focusOffY;

					if (self.rA >= self.zoom_max && dbl_click_dir == 1) {
						dbl_click_dir = -1;
					}					
					if (self.rA <= self.rF && dbl_click_dir == -1) {
						dbl_click_dir = 1;
					}
					if (dbl_click_dir > 0) {
						self.rA *= 2;
						self.rA = self.rA > self.zoom_max ?  self.zoom_max : self.rA;
						cFlag._zi = true;
						clearTimeout(self.ani_timer);
						self._playing = true;
						self.Animate();
						cFlag._zi = false;

					} else {
						self.rA /= 2;
						self.rA =  self.rA < self.rF ? self.rF : self.rA;
						cFlag._zo = true;
						clearTimeout(self.ani_timer);
						self._playing = true;
						self.Animate();
						cFlag._zo = false;
					}
					e.preventDefault();		
					e.stopPropagation();								
				});
			}

			//Add mouse wheel event if enabled
			if (self.mouse_wheel) {
				 $holder.bind('mousewheel.sz', {self: this}, self.mouseWheel);
			}

			//Auto Hide the control buttons if enabled
			if (self.bu_auto) {
				$holder.bind('mouseleave.sz', {self: this}, self.autoHide);
			}

			//Prevent Controls Bg from start dragging image
			$controls.bind(self.event_down, function (e) {
				e.preventDefault();
				e.stopPropagation();				
			});

			//Prevent Controls Bg from double click zoom
			if (self.mouse_dbl_click) {
				$controls.bind('dblclick.sz', function (e) {
					e.preventDefault();
					e.stopPropagation();					
				});
			}

			//Prevent text selection for smoother dragging and button focus
			$('.noSel').each(function () {
				this.onselectstart = function () {
					return false;
				};
			});

			self.$holder = $holder;
			self.$controls = $controls;
			self.sW = sW;
			self.sH = sH;
			self.cBW = cBW;
			self.cBH = cBH;

			// alert(self.sW + "  " + self.sH);

			//Apply initial transformation
			self.Animate();
		},
		
		
		/*Prepare the container (holder) element and get landmarks if available
		***********************************************************************************************************************/
		setContainer: function () {			
			var self = this,
				$image = self.$image,
				bord_size = self.bord_size,
				border = self.border,
				$holder = self.$holder;

			//Wrap a container for image or get the container if specified through options:
			if (self.container == '' && self.image_url == '') {
				$holder = self.$image.wrap(
					'<div class="noSel smooth_zoom_preloader">\
					</div>'
				).parent();
				
			} else {
				if (self.image_url == ''){
					$holder = $('#'+self.container);
				} else {
					$holder = self.$elem;
				}
				$holder.addClass('noSel smooth_zoom_preloader');
				self.locations = [];
				self.$loc_cont = $holder.find('.landmarks');
				if (self.$loc_cont[0]) {
					var locs = self.$loc_cont.children('.item');
					self.loc_clone = self.$loc_cont.clone();
					self.show_at_zoom = parseInt(self.$loc_cont.data('show-at-zoom'),10) / 100;
					self.allow_scale = checkBoolean(self.$loc_cont.data('allow-scale'));
					self.allow_drag = checkBoolean(self.$loc_cont.data('allow-drag'));					
					locs.each(function () {	
						self.setLocation($(this));			
					});
				}
			}
						
			$holder.css({
				'position': 'relative',
				'overflow': 'hidden',
				'text-align': 'left',
				'-moz-user-select': 'none',
				'-khtml-user-select': 'none',
				'-webkit-user-select': 'none',
				'user-select': 'none',					
				'-webkit-touch-callout': 'none',
				'-ms-touch-action': 'none',
				'-webkit-tap-highlight-color': 'rgba(255, 255, 255, 0)', 
				'background-color': self.bg_color,
				'background-position': 'center center',
				'background-repeat': 'no-repeat'				
			})

			self.$hitArea = $('<div style="position: absolute; z-index: 1; top: 0px; left: 0px; width: 100%; height: 100%;" ></div>').appendTo($holder);
			
			self.getContainerSize(self.sW, self.sH, $holder, self.w_max, self.h_max);	
								
			if (self.responsive) {
				$(window).bind("orientationchange.sz" + self.id+" resize.sz" + self.id, {self: self}, self.resize);
			}
			var sW = self.sW;
			var sH = self.sH;	

			//Add Image container properties			
			$holder.css({
				'width': sW,
				'height': sH
			});

			//Add border if needed
			if (bord_size > 0) {
				border[0] = $('<div style="position: absolute;	width: ' + bord_size + 'px; height: ' + sH + 'px;	top: 0px; left: 0px; z-index: 3; background-color: ' + self.bord_color + ';"></div>').css('opacity', self.bord_alpha);
				border[1] = $('<div style="position: absolute;	width: ' + bord_size + 'px; height: ' + sH + 'px;	top: 0px; left: ' + (sW - bord_size) + 'px; z-index: 4; background-color: ' + self.bord_color + ';"></div>').css('opacity', self.bord_alpha);
				border[2] = $('<div style="position: absolute;	width: ' + (sW - (bord_size * 2)) + 'px; height: ' + bord_size + 'px; top: 0px; left: ' + bord_size + 'px; z-index: 5; background-color: ' + self.bord_color + '; line-height: 1px;"></div>').css('opacity', self.bord_alpha);
				border[3] = $('<div style="position: absolute;	width: ' + (sW - (bord_size * 2)) + 'px; height: ' + bord_size + 'px; top: ' + (sH - bord_size) + 'px; left: ' + bord_size + 'px; z-index: 6; background-color: ' + self.bord_color + '; line-height: 1px;"></div>').css('opacity', self.bord_alpha);
				$holder.append(border[0], border[1], border[2], border[3]);
			}

			//Get Image maps if exists
			if ($image.attr('usemap') != undefined) {
				self.mapAreas = $("map[name='" + ($image.attr('usemap').split('#').join('')) + "']").children('area');
				self.mapAreas.each(function (i) {					
					var area = $(this);
					area.css('cursor', 'pointer');
					if (self.mouse_drag) {
						area.bind(self.event_down, {self: self}, self.mouseDown);
					}
					if (self.mouse_wheel) {
						area.bind('mousewheel.sz', {self: self}, self.mouseWheel);
					}
					self.map_coordinates.push(area.attr('coords').split(','));
				});
			}	
			
			self.$holder = $holder;
			self.sW = sW;
			self.sH = sH;
		},
		
		getContainerSize: function (sW, sH, $holder, w_max, h_max){
			if (sW === '' || sW === 0) {				
				if (this.image_url == '') {					
					sW = Math.max($holder.parent().width(), 100);
				} else {									
					sW = Math.max($holder.width(), 100);
				}				
				
			} else if (!isNaN(sW) || String(sW).indexOf('px') > -1) {
				sW = this.oW = parseInt(sW);
				if (this.responsive) {
					sW = Math.min($holder.parent().width(), sW);
				}
			} else if (String(sW).indexOf('%') > -1) {
				sW = $holder.parent().width() * (sW.split('%')[0] / 100);			
			} else {
				sW = 100;
			}
			if (w_max !== 0 && w_max !== '') {
				sW = Math.min(sW, w_max);
			}
			if (sH === '' || sH === 0) {
				if (this.image_url == '') {				
					sH = Math.max($holder.parent().height(), 100);
				} else {					
					sH = Math.max($holder.height(), 100);
				}				
			} else if (!isNaN(sH) || String(sH).indexOf('px') > -1) {
				sH = this.oH = parseInt(sH);
		
			} else if (String(sH).indexOf('%') > -1) {
				sH = $holder.parent().height() * (sH.split('%')[0] / 100);				
			} else {
				sH = 100;
			}
			if (h_max !== 0 && h_max !== '') {
				sH = Math.min(sH, h_max);
			}

			if (this.oW && sW !== this.oW) {				
				if (this.oH && this.maintain_ratio) {				
					sH = sW/(this.oW/this.oH);
				}
			}			
			
			this.sW = sW;
			this.sH = sH;
		},
		
		
		/*Each landmark / location / lable initiated here
		***********************************************************************************************************************/
		setLocation: function (lc){
			var self = this,
				ob = lc,
				w2, h2, pos, sc, rotation;
			
			if (prop_origin) {
				ob.css(prop_origin, '0 0');
			}
			
			ob.css({
				'display': 'block',
				'z-index': 2					
			})				
			if (self.use3D) {
				ob.css({			
					'-webkit-backface-visibility': 'hidden',
					'-webkit-perspective': 1000
				});
			}
					
			w2 = ob.outerWidth() / 2;
			h2 = ob.outerHeight() / 2;
			pos = ob.data('position').split(',');	
			rotation = ob.data('rotation');
			sc = ob.data('allow-scale');
			if (sc == undefined) {
				sc = self.allow_scale;				
			} else {
				sc = checkBoolean(sc);
			}
			
			if (ob.hasClass('mark')) {
				var imgw = ob.find('img').css('vertical-align', 'bottom').width();
				$(ob.children()[0]).css({
					'width':ob.width,
					'position': 'absolute',
					'left': (-ob.width()/2),
					'bottom': parseInt(ob.css('padding-bottom'))*2
				});	
				var txt = ob.find('.text');					
				self.locations.push({
					ob: ob,
					x: parseInt(pos[0]),
					y: parseInt(pos[1]),
					rot: rotation,
					w2: w2,
					h2: h2,
					w2pad: w2+(txt[0] ? parseInt(txt.css('padding-left')) : 0),
					vis: false,
					lab: false,
					lpx: '0',
					lpy: '0',
					showAt: isNaN(ob.data('show-at-zoom'))? self.show_at_zoom : parseInt(ob.data('show-at-zoom'),10) / 100,
					scale: sc
				});				
				
			} else if (ob.hasClass('lable')){
				var bg = ob.data('bg-color'),
					opacity = ob.data('bg-opacity'),						
					cont = $(ob.eq(0).children()[0])
							.css({
							'position': 'absolute',
							'z-index': 2,
							left: -w2, 
							top: -h2
						});		
							
				self.locations.push({
					ob: ob,
					x: parseInt(pos[0]),
					y: parseInt(pos[1]),
					w2: w2,
					h2: h2,
					w2pad: w2,
					vis: false,
					lab: true,
					lpx: '0',
					lpy: '0',
					showAt: isNaN(ob.data('show-at-zoom'))? self.show_at_zoom : parseInt(ob.data('show-at-zoom'),10) / 100,
					scale: sc
				});

				if (bg !=="") {
					if (!bg) {
						bg = "#000000";
						opacity = .7;
					}							
					var bgob = $('<div style="position: absolute; left: ' + (-w2)+'px; top: ' + (-h2)+'px; width: ' + ((w2-parseInt(cont.css('padding-left'))) * 2) + 'px; height:' + ((h2-parseInt(cont.css('padding-top'))) * 2) + 'px; background-color: ' + bg + ';"></div>').appendTo(ob);
					if (opacity) {
						bgob.css('opacity', opacity);
					}
				}
			}
			ob.hide();
			if(prop_transform) {
				ob.css('opacity', 0);
			}	
			if (!self.allow_drag) {
				ob.bind(self.event_down, function (e) {				
					//e.preventDefault();
					e.stopPropagation();					
				})				
			}
		},

		/*Storing the original style of image (needed only when destroying)
		***********************************************************************************************************************/
		getStyle: function () {
			var el = this.$image;
			return {
				prop_origin: [prop_origin, prop_origin !== false && prop_origin !== undefined ? el.css(prop_origin) : null],
				prop_transform: [prop_transform, prop_transform !== false && prop_transform !== undefined ? el.css(prop_transform) : null],
				'position': ['position', el.css('position')],
				'z-index': ['z-index', el.css('z-index')],
				'cursor': ['cursor', el.css('cursor')],
				'left': ['left', el.css('left')],
				'top': ['top', el.css('top')],
				'width': ['width', el.css('width')],
				'height': ['height', el.css('height')]
			};
		},

		/*Find the scale ratios
		***********************************************************************************************************************/
		checkRatio: function (sW, sH, iW, iH, zoom_fit) {
			var rF;
			if (iW == sW && iH == sH) {
				rF = 1;				
			} else if (iW < sW && iH < sH) {
				rF = sW / iW;				
				if (zoom_fit) {
					if (rF * iH > sH) {
						rF = sH / iH;
					}
				} else {
					if (rF * iH < sH) {
						rF = sH / iH;
					}
					if (sW / iW !== sH / iH && this.mouse_drag) {
						this._moveCursor = true;
						this.$image.css('cursor', 'move');
						this.$hitArea.css('cursor', 'move');
					}
				}
			} else {
				
				rF = sW / iW;
				if (zoom_fit) {
					if (rF * iH > sH) {
						rF = sH / iH;
					}
					if (rF< this.init_zoom && this.mouse_drag) {
						this._moveCursor = true;
						this.$image.css('cursor', 'move');
						this.$hitArea.css('cursor', 'move');
					}
				} else {
					if (rF * iH < sH) {
						rF = sH / iH;
					}
					if (sW / iW !== sH / iH && this.mouse_drag) {
						this._moveCursor = true;
						this.$image.css('cursor', 'move');
						this.$hitArea.css('cursor', 'move');
					}
				}
			}
			return rF;
		},
		
		
		/*Returns distance between 2 points (used for touch gesture)
		***********************************************************************************************************************/
		getDistance: function (x1,y1,x2,y2) {
			return Math.sqrt(Math.abs(((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1))));
		},
		

		/*Image Events for Dragging and Mouse Wheel
		***********************************************************************************************************************/
		mouseDown: function (e) {

			// console.log("MouseDown EVENT -- >", e);

			var self = e.data.self,	
			te = e.originalEvent,
			touches, fingers, pointerMouse;	
			self._onfocus = self._dragging = false;
			
			if (self.cFlag._nd) {				
				self._onHitArea = true;		
				self.samePointRelease = false;				
				if (self.fixMoz) {
					self.correctTransValue();	
				}
				if (e.type == self.pointerDown){						
					pointerMouse = (te.MSPOINTER_TYPE_MOUSE && te.pointerType === te.MSPOINTER_TYPE_MOUSE) || te.pointerType == 'mouse';
					self.pointers.push({pageX: te.pageX, pageY:te.pageY, id: te.pointerId});
					fingers = self.pointers.length;
					touches = self.pointers;
				}				
				if (e.type == 'mousedown' || pointerMouse){	
					self.stX = te.pageX || e.pageX;
					self.stY = te.pageY || e.pageY;		
					self.offX = self.stX - self.$holder.offset().left - self.$image.position().left;
					self.offY = self.stY - self.$holder.offset().top - self.$image.position().top;					
					$(document).bind(self.event_move + self.id, {self: self}, self.mouseDrag);
					
				} else {	
					if (e.type == 'touchstart')	{
						fingers = te.targetTouches.length;
						touches = te.touches;
					}
					if (fingers > 1) {
						self._pinching = true;	
						self._rA = self.rA;				
						self.dStart = self.getDistance(touches[0].pageX, touches[0].pageY, touches[1].pageX, touches[1].pageY);						
					} else {						
						self.offX = touches[fingers-1].pageX - self.$holder.offset().left - self.$image.position().left;
						self.offY = touches[fingers-1].pageY - self.$holder.offset().top - self.$image.position().top;
						self.setDraggedPos(touches[fingers-1].pageX - self.$holder.offset().left - self.offX, touches[fingers-1].pageY - self.$holder.offset().top - self.offY, self._sc);
						self._recent = 'drag';
						self._dragging = true;					
					}							
				}
				
			}
			if (e.type == 'mousedown'  || e.type == self.pointerDown) {
				e.preventDefault();
			}		
		},		
		
		
		/*Mouse Drag / Touch swipe operations handled here
		***********************************************************************************************************************/
		mouseDrag: function (e) {
			var self = e.data.self,
			te = e.originalEvent,
			touches, fingers;
			
			//Mouse
			if (e.type == 'mousemove') {
				self.setDraggedPos(e.pageX - self.$holder.offset().left - self.offX, e.pageY - self.$holder.offset().top - self.offY, self._sc);				
				self._recent = 'drag';
				self._dragging = true;
				if(!self._playing) {
					self.Animate();
				}
				return false;
			
			//Touch and pointer		
			} else {
				if (self._dragging || self._pinching) {	
					e.preventDefault();								
				}				
				if (self._onHitArea) {
					
					//Pointer				
					if (e.type == self.pointerMove){						
						for (var j=0; j<self.pointers.length; j++){
							if (te.pointerId == self.pointers[j].id) {						
								self.pointers[j].pageX = te.pageX;
								self.pointers[j].pageY = te.pageY;
							}
						}	
						touches = self.pointers;
						fingers = self.pointers.length;	
						
					//Touch		
					} else {					
						touches = te.touches;	
						fingers = touches.length;					
					}	
					
					//Multi finger movement / pinch zoom			
					if (fingers > 1) {
						if (!self._pinching) {
							self._pinching = true;
							self._rA = self.rA;								
							self.dStart = self.getDistance(touches[0].pageX, touches[0].pageY, touches[1].pageX, touches[1].pageY);									
						}						
						self._centx = (touches[0].pageX + touches[1].pageX) / 2;
						self._centy = (touches[0].pageY + touches[1].pageY) / 2;
						self.focusOffX = self._centx - self.$holder.offset().left - (self.sW / 2);
						self.focusOffY = self._centy - self.$holder.offset().top - (self.sH / 2);
						self.changeOffset(true, true);
						self._wheel = true;
						self._dragging = false;						
						if (self.zoom_single){													
							self.sRed = 300;																				
						} else {
							self.dEnd = self.getDistance(touches[0].pageX, touches[0].pageY, touches[1].pageX, touches[1].pageY);						
							self.rA = self._rA * (self.dEnd/self.dStart);
							self.rA = self.rA > self.zoom_max ? self.zoom_max : self.rA;
							self.rA = self.rA < self.rF ? self.rF : self.rA;
						}
						if (self._sc < self.rA) {
							self.cFlag._zo = false;
							self.cFlag._zi = true;
						} else {
							self.cFlag._zi = false;
							self.cFlag._zo = true;
						}
						if (!self._playing) {
							self.Animate();
						}
						
					//Single finer / pointer Drag
					} else {							
						self.setDraggedPos(touches[0].pageX - self.$holder.offset().left - self.offX, touches[0].pageY - self.$holder.offset().top - self.offY, self._sc);
						self._recent = 'drag';
						self._dragging = true;
						if(!self._playing) {
							self.Animate();
						}
						return false;
					}
				}
				
			}
		},
		
		
		/*Global Mouse Up / Touch End
		***********************************************************************************************************************/
		mouseUp: function (e) {
			var self = e.data.self;
			self.pointers = [];
			//If one of the buttons released
			if (self._onButton) {
				self.$holder.find('#' + self.buttons[self.cButtId]._var + 'norm').show();
				self.$holder.find('#' + self.buttons[self.cButtId]._var + 'over').hide();
				if (self.cButtId !== 6) {
					self.cFlag[self.buttons[self.cButtId]._var] = false;
				}
				if (e.type == 'touchend' && self.buttons[self.cButtId].$ob.css('opacity') > .5){
					self.buttons[self.cButtId].$ob.css('opacity', .7);
				}
				self._onButton = false;
				e.stopPropagation();
				return false;
				
			//If the mouse drag or touch swipe completed
			} else if (self._onHitArea) {
				if (!self.hasTouch){					
					$(document).unbind(self.event_move + self.id);
				}
				if (self.mouse_drag || self.touch_drag) {
					
					//Mouse					
					if (e.type == 'mouseup') {										
						if (self.stX ==  e.pageX && self.stY == e.pageY) {
							self.samePointRelease = true;
						}				
						self._recent = 'drag';
						self._dragging = false;
						if(!self._playing) {
							self.Animate();
						}
						
					//Touch & Pointers
					} else {
						e.preventDefault();
						self._dragging = false;
						if (self._pinching) {
							self._pinching = false;
							self._wheel = false;
							self.cFlag._nd = true;
							self.cFlag._zi = false;
							self.cFlag._zo = false;
						} else {
							self._recent = 'drag';
							if(!self._playing) {
								self.Animate();
							}
						}			
					}
					self._onHitArea = false;
				}
			}
		},
		
		
		/*Mouse wheel zoom in-out
		***********************************************************************************************************************/
		mouseWheel: function (e, delta) {
			var self = e.data.self;
			self._onfocus = self._dragging = false;
			if (self.mouse_wheel_cur) {
				self.focusOffX = e.pageX - self.$holder.offset().left - (self.sW / 2);
				self.focusOffY = e.pageY - self.$holder.offset().top - (self.sH / 2);
				self.changeOffset(true, true);
			}
			
			self._dragging = false;
			if (delta > 0) {
				if (self.rA != self.zoom_max) {
					if (self.zoom_single){													
						if(!self._wheel) {
							self.sRed = 300;	
						}
					} else {				
						self.rA *= delta < 1 ? 1 + (.3 * delta) : 1.3;
						self.rA = self.rA > self.zoom_max ? self.zoom_max : self.rA;						
					}
					self._wheel = true;
					self.cFlag._zi = true;
					clearTimeout(self.ani_timer);
					self._playing = true;
					self.Animate();
					self.cFlag._zi = false;
				}
			} else {
				if (self.rA != self.rF) {
					if (self.zoom_single){													
						if(!self._wheel) {
							self.sRed = 300;
						}
					} else {	
						self.rA /= delta > -1 ? 1 + (.3 * -delta) : 1.3;
						self.rA = self.rA < self.rF ? self.rF : self.rA;
					}
					self._wheel = true;
					self.cFlag._zo = true;
					clearTimeout(self.ani_timer);
					self._playing = true;
					self.Animate();
					self.cFlag._zo = false;
				}
			}
			return false;
		},
		

		/*Control buttons Auto hide
		***********************************************************************************************************************/
		autoHide: function (e) {
			var self = e.data.self;

			clearTimeout(self.auto_timer);
			self.auto_timer = setTimeout(function () {
				self.$controls.fadeOut(600);
			}, self.bu_delay);

			self.$holder.bind('mouseenter.sz', function (e) {
				clearTimeout(self.auto_timer);
				self.$controls.fadeIn(300);
			});
		},
		

		/*Mozilla works differently than others when getting translated positions. So this correction needed
		***********************************************************************************************************************/
		correctTransValue: function () {
			var v = this.$image.css('-moz-transform').toString().replace(')', '').split(',');
			this.transOffX = parseInt(v[4]);
			this.transOffY = parseInt(v[5]);
		},


		/*Make sure the dragged position obeying limits
		***********************************************************************************************************************/
		setDraggedPos: function (xp, yp, s) {
			var self = this;
			
			if (xp !== '') {
				self.dX = xp + self.transOffX;
				if (self.pan_limit) {
					self.dX = self.dX + (s * self.iW) < self.sW ? self.sW - (s * self.iW) : self.dX;
					self.dX = self.dX > 0 ? 0 : self.dX;
					if ((s * self.iW) < self.sW) {
						self.dX = (self.sW - (s * self.iW)) / 2;
					}
				} else {
					self.dX = self.dX + (s * self.iW) < self.sW / 2 ? (self.sW / 2) - (s * self.iW) : self.dX;
					self.dX = self.dX > self.sW / 2 ? self.sW / 2 : self.dX;
				}
			}
			if (yp !== '') {
				self.dY = yp + self.transOffY;
				if (self.pan_limit) {
					self.dY = self.dY + (s * self.iH) < self.sH ? self.sH - (s * self.iH) : self.dY;
					self.dY = self.dY > 0 ? 0 : self.dY;
					if ((s * self.iH) < self.sH) {
						self.dY = (self.sH - (s * self.iH)) / 2;
					}
				} else {
					self.dY = self.dY + (s * self.iH) < self.sH / 2 ? (self.sH / 2) - (s * self.iH) : self.dY;
					self.dY = self.dY > self.sH / 2 ? self.sH / 2 : self.dY;
				}
			}
		},

		/*Called to animate image transformation whenever the navigation events occur
		***********************************************************************************************************************/
		Animate: function () {

			var self = this;
			var pixTol = .5;

			self.cFlag._nd = true;
			self.ani_end = false;
			
			//Zoom In
			if (self.cFlag._zi) {
				if (!self._wheel && !self.zoom_single) {
					self.rA *= self.zoom_speed;
				}
				if (self.rA > self.zoom_max) {
					self.rA = self.zoom_max;
				}
				self.cFlag._nd = false;
				self.cFlag._rs = false;
				self._recent = 'zoomIn';
				self._onfocus = self._dragging = false;
			}

			//Zoom Out
			if (self.cFlag._zo) {
				if (!self._wheel && !self.zoom_single) {
					self.rA /= self.zoom_speed;
				}
				if (self.zoom_min !=0 ) {
					if (self.rA < self.zoom_min) {
						self.rA = self.zoom_min;
					}					
				} else {					
					if (self.rA < self.rF) {
						self.rA = self.rF;
					}
				}
				
				self.cFlag._nd = false;
				self.cFlag._rs = false;
				self._recent = 'zoomOut';
				self._onfocus = self._dragging = false;
			}
			
			//Zoom In or Out - Single Step
			if (self.zoom_single && !self.cFlag._rs) {
				if (self._recent == 'zoomIn'){
					self.sRed +=(10-self.sRed)/6;
					self.rA += (self.zoom_max - self.rA)/(((1/(self.pan_speed_o+1))*self.sRed)+1);

				} else if (self._recent == 'zoomOut'){
					self.sRed +=(3-self.sRed)/3;
					self.rA += (self.rF - self.rA)/(((1/self.pan_speed_o+1)*self.sRed)+1);
				}
			}
			
			//Pan speed needs to adjust according to application dimension and zoom level
			self.pan_speed = (Math.max(1, 1+((self.sW + self.sH) / 500))+ (self.pan_speed_o * self.pan_speed_o / 4)) / Math.max(1, self.rA/2);

			//Move Left
			if (self.cFlag._ml) {
				self.oX -= self.pan_speed;
				self.cFlag._nd = false;
				self.cFlag._rs = false;
				self._recent = 'left';
				self._onfocus = self._dragging = false;
			}

			//Move Right
			if (self.cFlag._mr) {
				self.oX += self.pan_speed;
				self.cFlag._nd = false;
				self.cFlag._rs = false;
				self._recent = 'right';
				self._onfocus = self._dragging = false;
			}

			//Move Up
			if (self.cFlag._mu) {
				self.oY -= self.pan_speed;
				self.cFlag._nd = false;
				self.cFlag._rs = false;
				self._recent = 'up';
				self._onfocus = self._dragging = false;
			}

			//Move Down
			if (self.cFlag._md) {
				self.oY += self.pan_speed;
				self.cFlag._nd = false;
				self.cFlag._rs = false;
				self._recent = 'down';
				self._onfocus = self._dragging = false;
			}

			//Reset
			if (self.cFlag._rs) {				
				self.oX += (self.fX - self.oX) / 8;
				self.oY += (self.fY - self.oY) / 8;				
				self.cFlag._nd = false;
				self._recent = 'reset';
				self._onfocus = self._dragging = false;
			}

			//Find scale value, width and height
			//Case 1: Single Step Zoom
			if (self.zoom_single && (self._recent !== 'reset')) {
				if (self._onfocus){
					self._sc += (self.rA - self._sc) / self.reduction;
				} else {
					self._sc = self.rA;
				}
			
			//Case 2: Normal Zoom
			} else {
				self._sc += (self.rA - self._sc) / (self.ani_smooth/(self._onfocus? self.reduction : 1));
			}
			
			self._w = self._sc * self.iW;
			self._h = self._sc * self.iH;

			//Dragging
			if (self._dragging) {
				self.tX = self.dX;
				self.tY = self.dY;
				self.changeOffset(true, true);
			}

			//Check if Zoom In completed
			if (self._recent == "zoomIn") {
				if (self._w > (self.rA * self.iW) - pixTol && !self.zoom_single) {
					if (self.cFlag._nd) {
						self.ani_end = true;
					}
					self._sc = self.rA;					
				} else if (self._w > (self.zoom_max * self.iW) - pixTol && self.zoom_single) {
					if (self.cFlag._nd) {
						self.ani_end = true;
					}
					self._sc = self.rA = self.zoom_max;					
				}
				if (self.ani_end){
					self._w = self._sc * self.iW;
					self._h = self._sc * self.iH;
				}

			//Check if Zoom Out completed
			} else if (self._recent == "zoomOut") {
				if (self._w < (self.rA * self.iW) + pixTol  && !self.zoom_single) {
					if (self.cFlag._nd) {
						self.ani_end = true;
					}
					self._sc = self.rA;					
				} else if (self._w < (self.rF * self.iW) + pixTol  && self.zoom_single) {
					if (self.cFlag._nd) {
						self.ani_end = true;
					}
					self._sc = self.rA = self.rF;					
				}
				if (self.ani_end){
					self._w = self._sc * self.iW;
					self._h = self._sc * self.iH;
				}
			}

			//Move image according to boundary limits
			self.limitX = (((self._w - self.sW) / (self._w / self.sW)) / 2);
			self.limitY = (((self._h - self.sH) / (self._h / self.sH)) / 2);

			if (!self._dragging) {
				if (self.pan_limit) {
					if (self.oX < -self.limitX - self.focusOffX) {
						self.oX = -self.limitX - self.focusOffX;
					}
					if (self.oX > self.limitX - self.focusOffX) {
						self.oX = self.limitX - self.focusOffX;
					}
					if (self._w < self.sW) {
						self.tX = (self.sW - self._w) / 2;
						self.changeOffset(true, false);
					}
					if (self.oY < -self.limitY - self.focusOffY) {
						self.oY = -self.limitY - self.focusOffY;
					}
					if (self.oY > self.limitY - self.focusOffY) {
						self.oY = self.limitY - self.focusOffY;
					}
					if (self._h < self.sH) {
						self.tY = (self.sH - self._h) / 2;
						self.changeOffset(false, true);
					}
				} else {
					if (self.oX < -self.limitX - (self.focusOffX / self._w * self.sW) - ((self.sW / 2) / (self._w / self.sW))) {
						self.oX = -self.limitX - (self.focusOffX / self._w * self.sW) - ((self.sW / 2) / (self._w / self.sW));
					}

					if (self.oX > self.limitX - (self.focusOffX / self._w * self.sW) + ((self.sW / 2) / (self._w / self.sW))) {
						self.oX = self.limitX - (self.focusOffX / self._w * self.sW) + ((self.sW / 2) / (self._w / self.sW));
					}

					if (self.oY < -self.limitY - (self.focusOffY / self._h * self.sH) - (self.sH / (self._h / self.sH * 2))) {
						self.oY = -self.limitY - (self.focusOffY / self._h * self.sH) - (self.sH / (self._h / self.sH * 2));
					}

					if (self.oY > self.limitY - (self.focusOffY / self._h * self.sH) + (self.sH / (self._h / self.sH * 2))) {
						self.oY = self.limitY - (self.focusOffY / self._h * self.sH) + (self.sH / (self._h / self.sH * 2));
					}
				}
			}
			if (!self._dragging && self._recent != "drag") {
				self.tX = ((self.sW - self._w) / 2) + self.focusOffX + (self.oX * (self._w / self.sW));
				self.tY = ((self.sH - self._h) / 2) + self.focusOffY + (self.oY * (self._h / self.sH));							
				if (self.ani_smooth === 1) {
					self.cFlag._nd = true;
					self.ani_end = true;
				}
			}
			if (self._recent == "zoomIn" || self._recent == "zoomOut" || self.cFlag._rs) {				
				self._x = self.tX;
				self._y = self.tY;
			} else {
				self._x += (self.tX - self._x) / (self.ani_smooth/(self._onfocus? self.reduction : 1));
				self._y += (self.tY - self._y) / (self.ani_smooth/(self._onfocus? self.reduction : 1));				
			}
			
			//Check if Left movement completed
			if (self._recent == "left") {
				if (self._x < self.tX + pixTol || self.ani_smooth === 1) {
					self.cFlag._nd ? self.ani_end = true : "";
					self._recent = '';
					self._x = self.tX;
				}

			//Check if Right  movement completed
			} else if (self._recent == "right") {
				if (self._x > self.tX - pixTol || self.ani_smooth === 1) {
					self.cFlag._nd ? self.ani_end = true : "";
					self._recent = '';
					self._x = self.tX;
				}

				//Check if Up movement completed
			} else if (self._recent == "up") {
				if (self._y < self.tY + pixTol || self.ani_smooth === 1) {
					self.cFlag._nd ? self.ani_end = true : "";
					self._recent = '';
					self._y = self.tY;
				}

				//Check if Down movement completed
			} else if (self._recent == "down") {
				if (self._y > self.tY - pixTol || self.ani_smooth === 1) {
					self.cFlag._nd ? self.ani_end = true : "";
					self._recent = '';
					self._y = self.tY;
				}

				//Check if Dragging completed
			} else if (self._recent == "drag") {
				if (self._x + pixTol >= self.tX && self._x - pixTol <= self.tX && self._y + pixTol >= self.tY && self._y - pixTol <= self.tY || self.ani_smooth === 1) {
					if (self._onfocus) {
						self._dragging = false;
					}
					self.cFlag._nd ? self.ani_end = true : "";
					self._recent = '';
					self._x = self.tX;
					self._y = self.tY;
				}
			}

			//Check if Reset completed
			if (self.cFlag._rs && self._w + pixTol >= (self.rA * self.iW) && self._w - pixTol <= (self.rA * self.iW) && self.oX <= self.fX+pixTol && self.oX >= self.fX-pixTol && self.oY <= self.fY+pixTol && self.oY >= self.fY-pixTol) {
				self.ani_end = true;
				self._recent = '';
				self.cFlag._rs = false;
				self.cFlag._nd = true;
				self._x = self.tX;
				self._y = self.tY;
				self._sc = self.rA;
				self._w = self._sc * self.iW;
				self._h = self._sc * self.iH;
			}

			//When the image fits exactly to container size, disable the pan, zoom out and reset buttons
			if (self.rA == self.rF && self.iW*self.rA <= self.sW && self.iH*self.rA <= self.sH) {
				if (self.buttons[1].$ob.css('opacity') > .5) {
					if (self.rA >= self.rF && (self.init_zoom == '' || self.rA <self.init_zoom) && (self.zoom_min == '' || self.rA <self.zoom_min)) {
						if (self.pan_limit && self._moveCursor && !self._moveCursor) {
							self.$image.css('cursor', 'default');
							self.$hitArea.css('cursor', 'default');
						}
						for (var bEn = 1; bEn < (self.pan_limit && !self._moveCursor ? self.buttons_total : 2); bEn++) {
							self.buttons[bEn].$ob.css({
								'opacity': .4
							});
							self._wheel = false;
							self.$holder.find('#' + self.buttons[bEn]._var + 'norm').show();
							self.$holder.find('#' + self.buttons[bEn]._var + 'over').hide();
						}
					}
				}

			} else {
				if (self.buttons[1].$ob.css('opacity') < .5) {
					if (self._moveCursor && self.mouse_drag) {
						self.$image.css('cursor', 'move');
						self.$hitArea.css('cursor', 'move');
					}
					for (var bEn = 1; bEn < self.buttons_total; bEn++) {
						self.buttons[bEn].$ob.css('opacity', .7);
					}
				}
			}

			//When the image reaches max zoom, disable the zoom button
			if (self.rA == self.zoom_max) {
				if (self.buttons[0].$ob.css('opacity') > .5) {
					self.buttons[0].$ob.css('opacity', .4);
					self._wheel = false;
					self.$holder.find('#' + self.buttons[0]._var + 'norm').show();
					self.$holder.find('#' + self.buttons[0]._var + 'over').hide();
				}

			} else {
				if (self.buttons[0].$ob.css('opacity') < .5) {
					self.buttons[0].$ob.css('opacity', .7);
				}
			}
			
			//Apply Scale and position to the image:
			if (prop_transform) {
				self.$image.css(prop_transform, 'translate(' + self._x.toFixed(14) + 'px,' + self._y.toFixed(14) + 'px) scale(' + self._sc + ')');
				// //console.log("Setting image with prop_transform");
			} else {
				self.$image.css({
					left: self._x,
					top: self._y,
					width: self._w,
					height: self._h
				});
				// //console.log("Setting image with -> " + self._w + " " + self._h);
			}

			if (self.$loc_cont) {
				self.updateLocations(self._x, self._y, self._sc, self.locations);
			}

			//In case image Maps used, update them
			if (!prop_transform && self.map_coordinates.length > 0) {
				 self.updateMap();
			}	
			//If the animation completed, stop running; else continue	
			if (self.ani_end && !self._dragging && self._recent != "drag") {				
				self._playing = false;				
				self._recent = '';
				self.cX = (-self._x + (self.sW / 2)) / self.rA;
				self.cY = (-self._y + (self.sH / 2)) / self.rA;
				if (self.onUPDATE) {
					self.onUPDATE (self.getZoomData(), false);
				}
				if (self.onZOOM_PAN) {
					self.onZOOM_PAN (self.getZoomData());
				}
				clearTimeout(self.ani_timer);
			} else {				
				self._playing = true;
				if (self.onUPDATE) {
					self.onUPDATE (self.getZoomData(), true);
				}
				self.ani_timer = setTimeout(function () {
					self.Animate();
				}, 28);
			}
		},
		
		
		/*Relocate the landmarks according to main image's position
		***********************************************************************************************************************/
		updateLocations: function (_x, _y, _sc, loc) {	
			// console.log("SMOOTH ZOOM THIS");
			// console.log(this);
			if (this.onLANDMARK !== ''){
				if (_sc >= this.show_at_zoom) {
					if (!this._landmark) {
						this._landmark = true
						this.onLANDMARK (true);	
					}
				} else {
					if (this._landmark) {
						this._landmark = false;
						this.onLANDMARK (false);
					}
				}
			}
								
			for (var p = 0; p < loc.length; p++) {
				// console.log("-->", loc[p]);
				var wScaled,
					hScaled,
					lpx = (loc[p].x * _sc) + _x,
					lpy = (loc[p].y * _sc) + _y;
					
				if (_sc >= loc[p].showAt) {	
					if (loc[p].scale && prop_transform){
						wScaled = loc[p].w2pad*this._sc;
						hScaled = loc[p].h2*this._sc;
					} else {
						wScaled = loc[p].w2pad;
						hScaled = loc[p].h2;
					}

					if(loc[p].ob.hasClass("svgLayer") !== true){
					//	console.log(loc[p]);
						//don't hide svg Layer when scrolling origin point out of view
						if (lpx > -wScaled && lpx < this.sW + wScaled && ((lpy > -hScaled && lpy < this.sH + hScaled && loc[p].lab) || (lpy > 0 && lpy < this.sH + (hScaled*2) && !loc[p].lab))) {
							if (!loc[p].vis) {
								loc[p].vis = true;							
								if(prop_transform) {											
									loc[p].ob.stop()
										.css('display', 'block')
										.animate({
											opacity: 1
										}, 300);
								} else {
									loc[p].ob.show();
								}
							}
						} else {
							if (loc[p].vis) {
								loc[p].vis = false;
								if(prop_transform) {
									loc[p].ob.stop()
										.animate({
											opacity: 0
										}, 200, function() {
											$(this).hide();
										});
								} else {
									loc[p].ob.hide();								
								}
							}
						}			
					}
				} else {					
					if (loc[p].vis) {	
						loc[p].vis = false;
						if(prop_transform) {
							loc[p].ob.stop()
								.animate({
									opacity: 0
								}, 200, function() {
									$(this).hide();
								});
						} else {
							loc[p].ob.hide();								
						}
					}	
				}
				if (lpx !== loc[p].lpx || lpy !== loc[p].lpy && loc[p].vis) {					
					if (prop_transform) {
						//loc[p].ob.css(prop_transform, 'translate(' + lpx.toFixed(14) + 'px,' + lpy.toFixed(14) + 'px)' + (loc[p].scale? ' scale(' + this._sc + ')':''));
						loc[p].ob.css(prop_transform, 'translate(' + lpx.toFixed(14) + 'px,' + lpy.toFixed(14) + 'px)' + (loc[p].scale? ' scale(' + this._sc + ')':'')  + (loc[p].rot?' rotate('+loc[p].rot.toString()+ 'deg)':''));
					} else {						
						loc[p].ob.css({
							left: lpx,
							top: lpy						
						});
					}
				}
				loc[p].lpx = lpx;
				loc[p].lpy = lpy;
			}
		},
		

		/*If the broswer doesn't supports css border radius, we need to go with old school png image for rounded corner
		***********************************************************************************************************************/
		roundBG: function (el, _name, _w, _h, _r, _p, _c, _i, _z, _yoff) {
			var w = 50 / 2;
			
			el.append($(
				'<div class="bgi' + _name + '" style="background-position:' + (-(_p - _r)) + 'px ' + (-(w - _r) - _yoff) + 'px"></div>\
				<div class="bgh' + _name + '"></div>\
				<div class="bgi' + _name + '" style="background-position:' + (-_p) + 'px ' + (-(w - _r) - _yoff) + 'px; left:' + (_w - _r) + 'px"></div>\
				<div class="bgi' + _name + '" style="background-position:' + (-(_p - _r)) + 'px ' + (-w - _yoff) + 'px; top:' + (_h - _r) + 'px"></div>\
				<div class="bgh' + _name + '" style = "top:' + (_h - _r) + 'px; left:' + _r + 'px"></div>\
				<div class="bgi' + _name + '" style="background-position:' + (-_p) + 'px ' + (-w - _yoff) + 'px; top:' + (_h - _r) + 'px; left:' + (_w - _r) + 'px"></div>\
				<div class="bgc' + _name + '"></div>'	
			));
			$('.bgi' + _name).css({
				position: 'absolute',
				width: _r,
				height: _r,
				'background-image': 'url(' + _i + ')',
				'background-repeat': 'no-repeat',
				'-ms-filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)',
				'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)',
				'zoom': 1
			});
			$('.bgh' + _name).css({
				position: 'absolute',
				width: _w - _r * 2,
				height: _r,
				'background-color': _c,
				left: _r
			});
			$('.bgc' + _name).css({
				position: 'absolute',
				width: _w,
				height: _h - _r * 2,
				'background-color': _c,
				top: _r,
				left: 0
			});
		},
		
		
		/*To calibrate position offset when navigation events supposed to be overlapped 
		***********************************************************************************************************************/
		changeOffset: function (x, y) {
			if (x) this.oX = (this.tX - ((this.sW - this._w) / 2) - this.focusOffX) / (this._w / this.sW);
			if (y) this.oY = (this.tY - ((this.sH - this._h) / 2) - this.focusOffY) / (this._h / this.sH);
		},
		

		/*Transform Image Maps (hot spots) if any
		***********************************************************************************************************************/
		updateMap: function () {
			var self = this,
				mapId = 0;
				
			self.mapAreas.each(function () {
				var new_vals = [];
				for (var i = 0; i < self.map_coordinates[mapId].length; i++) {
					new_vals[i] = self.map_coordinates[mapId][i] * self._sc;
				}
				new_vals = new_vals.join(",");
				$(this).attr('coords', new_vals);
				mapId++;
			});
		},
		

		/*To stop the timer loops immediatly
		***********************************************************************************************************************/
		haltAnimation: function () {
			clearTimeout(this.ani_timer);
			this._playing = false;
			this._recent = '';
		},


		/*Method to Remove the plugin instance
		***********************************************************************************************************************/
		destroy: function () {
			var self = this;
			
			if (self.assetsLoaded) {
				self.haltAnimation();
				for (prop in self.orig_style) {
					if (self.orig_style[prop][0] !== false && self.orig_style[prop][0] !== undefined) {
						if (self.orig_style[prop][0] === 'width' || self.orig_style[prop][0] === 'height') {
							if (parseInt(self.orig_style[prop][1]) !== 0) {
								self.$image.css(self.orig_style[prop][0], self.orig_style[prop][1]);
							}
						} else {
							self.$image.css(self.orig_style[prop][0], self.orig_style[prop][1]);
						}
					}
				}
				clearTimeout(self.auto_timer);
				$(document).unbind('.sz' + self.id);
				$(window).unbind('.sz' + self.id);
				self.$holder.unbind('.sz');
				self.$controls = undefined;
			} else {
				self.$image.show();
			}		
				
			if (self.container =='') {
				if (self.image_url == '') {
					self.$image.insertBefore(self.$holder);
					if (self.$holder !== undefined) {
						self.$holder.remove();
					}
				} else {
					self.$elem.empty();
					if (self.$loc_cont[0]) {
						self.$elem.append(self.loc_clone);
					}
				}
			} else {
				self.$image.insertBefore(self.$holder);	
				self.$holder.empty();								
				self.$image.wrap(self.$holder);
				if (self.$loc_cont[0]) {
					self.$holder.append(self.loc_clone);
				}
			}
			self.$elem.removeData('smoothZoom');
			self.$holder = undefined;
			self.Buttons = undefined;
			self.op = undefined;
			self.$image = undefined;
		},
	
	
		/*Method to change focus point and level
		***********************************************************************************************************************/
		focusTo: function (params) {
			var self = this;
			
			if (self.assetsLoaded) {			
				if (params.zoom === undefined || params.zoom === '' || params.zoom == 0) {
					params.zoom = self.rA;
				} else {
					params.zoom /= 100;
				}
				self._onfocus = true;
				if (params.zoom > self.rA && self.rA != self.zoom_max) {
					self.rA = params.zoom;
					self.rA = self.rA > self.zoom_max ? self.zoom_max : self.rA;
				} else if (params.zoom < self.rA && self.rA != self.rF) {
					self.rA = params.zoom;
					self.rA = self.rA < self.rF ? self.rF : self.rA;
				}
				self.transOffX = self.transOffY = 0;
				self.setDraggedPos(params.x === undefined || params.x === '' ? "" : (-params.x * self.rA) + (self.sW / 2), params.y === undefined || params.y === '' ? "" : (-params.y * self.rA) + (self.sH / 2), self.rA);
				self.reduction =  params.speed? params.speed/10 : self.focusSpeed;
				self._recent = 'drag';
				self._dragging = true;
				if(!self._playing) {
					self.Animate();
				}
			}
		},		

		zoomIn: function (params) {
			this.buttons[0].$ob.trigger(this.event_down, {
				id: 0
			});
		},

		zoomOut: function (params) {
			this.buttons[1].$ob.trigger(this.event_down, {
				id: 1
			});
		},

		moveRight: function (params) {
			this.buttons[2].$ob.trigger(this.event_down, {
				id: 2
			});
		},

		moveLeft: function (params) {
			this.buttons[3].$ob.trigger(this.event_down, {
				id: 3
			});
		},

		moveUp: function (params) {
			this.buttons[4].$ob.trigger(this.event_down, {
				id: 4
			});
		},

		moveDown: function (params) {
			this.buttons[5].$ob.trigger(this.event_down, {
				id: 5
			});
		},

		Reset: function (params) {
			this.buttons[6].$ob.trigger(this.event_down, {
				id: 6
			});
		},				

		getZoomData: function (params) {
			if(this._x === undefined)return;

			return {
				//x offset (without scale ratio multiplied)
				normX: (-this._x / this.rA).toFixed(14),				
				
				//y offset (without scale ratio multiplied)
				normY: (-this._y / this.rA).toFixed(14),
				
				//Original image Width
				normWidth: this.iW,
				
				//Original image height
				normHeight: this.iH,
				
				//x offset (with scale ratio multiplied)
				scaledX: -this._x.toFixed(14),
				
				//y offset (with scale ratio multiplied)
				scaledY: -this._y.toFixed(14),
				
				//Scaled image width
				scaledWidth: this._w,
				
				//Scaled image height
				scaledHeight: this._h,
							
				//The X location on image which is currently on center of canvas 
				centerX: (-this._x.toFixed(14) + (this.sW / 2)) / this.rA,
				
				//The Y location on image which is currently on center of canvas 
				centerY: (-this._y.toFixed(14) + (this.sH / 2)) / this.rA,
				
				//Scale ratio
				ratio: this.rA 
			};
		},
		
		addLandmark: function (loc) {
			if (this.$loc_cont) {				
				var total = loc.length;
				
				for (var i=0; i<total; i++) {
					var $loc = $(loc[i]);
					this.$loc_cont.append($loc);
					this.setLocation($loc);						
				}	
							
				if (total>0) {
					this.updateLocations(this._x, this._y, this._sc, this.locations);	
				}
			}
		},
		
		attachLandmark: function (loc) {
			if (this.$loc_cont){				
				var total = loc.length;				
				for (var i=0; i<total; i++) {					
					this.setLocation( loc[i] instanceof jQuery ? loc[i] : $('#'+loc[i]));		
				}
				if (total>0) {
					this.updateLocations(this._x, this._y, this._sc, this.locations);
				}
			}			
		},
		
		removeLandmark: function (loc) {
			if (this.$loc_cont){				
				if (loc){			
					var total = loc.length;					
					for (var i=0; i<total; i++) {
						for (var j=0; j<this.locations.length; j++) {
							if ((loc[i] instanceof jQuery && this.locations[j].ob[0] == loc[i][0]) || (!(loc[i] instanceof jQuery) && this.locations[j].ob.attr('id') == loc[i])) {							
								this.locations[j].ob.remove ();
								this.locations.splice(j,1);
								j--;						
							} 
						}
					}
				} else {
					if (this.locations.length > 0) {
						this.locations[this.locations.length-1].ob.remove ();
						this.locations.pop();
					}
				}
				if (total>0) {
					this.updateLocations(this._x, this._y, this._sc, this.locations);
				}
			}			
		},
		
		refreshAllLandmarks: function () {
			var self = this;
			var locs = self.$loc_cont.children('.item');
			self.show_at_zoom = parseInt(self.$loc_cont.data('show-at-zoom'),10) / 100;
			self.allow_scale = checkBoolean(self.$loc_cont.data('allow-scale'));
			self.allow_drag = checkBoolean(self.$loc_cont.data('allow-drag'));
				
			//Step 1: Remove records for which the elements no longer exist
			for (var i=0; i<self.locations.length; i++) {					
				var exists = false;					
				locs.each(function () {
					if (self.locations[i].ob[0] == $(this)[0]) {
						exists = true;	
					}
				});					
				if (!exists) {
					self.locations.splice(i,1);
					i--;
				}
			}	
			
			//Step 2: Add new elements to record
			locs.each(function () {
				var exists = false;		
				for (var i=0; i<self.locations.length; i++) {					
					if (self.locations[i].ob[0] == $(this)[0]) {
						exists = true;	
						break;
					}
				}
				if (!exists) {
					self.setLocation($(this));	
				}
	
			});					
			this.updateLocations(this._x, this._y, this._sc, this.locations);
		},
		
		
		/*On windows resize, adjust some defaults
		***********************************************************************************************************************/
		resize: function (e) {	
			var self;
			
			if (e.data) {	
				e.preventDefault();			
				self = e.data.self;			
				var pw = self.$holder.parent().width();	
				var ph = self.$holder.parent().height();	
										
				if (self.oW) {
					pw = Math.min(pw, self.oW);												
				}				
				self.sW = pw;
				
				if (self.oH) {
					if (self.oW && self.maintain_ratio) {
						self.sH = pw/(self.oW/self.oH);			
					}					
				} else {
					self.sH = ph;
				}
						
				
			}  else {
				self = this;
				if (e.width) {
					self.sW = e.width;
				}
				if (e.height) {
					self.sH = e.height;
				}
				if (e.max_WIDTH) {
					self.w_max = e.max_WIDTH;
				}
				if (e.max_HEIGHT) {
					self.h_max = e.max_HEIGHT;
				}
			}			
			if (self.w_max !== 0 && self.w_max !== '') {
				self.sW = Math.min(self.sW, self.w_max);
			}
			if (self.h_max !== 0 && self.h_max !== '') {
				self.sH = Math.min(self.sH, self.h_max);
			}
			self.$holder.css({
				'width': self.sW,
				'height': self.sH
			});
			if (self.bord_size > 0) {
				self.border[0].height(self.sH);
				self.border[1].css({
					height: self.sH,
					left: self.sW - self.bord_size
				});
				self.border[2].width(self.sW - (self.bord_size * 2));
				self.border[3].css({
					width: self.sW - (self.bord_size * 2),
					top: self.sH - self.bord_size
				});
			}			
			if (self.bu_align[1] == 'center') {
				self.$controls.css('left', parseInt((self.sW - self.cBW) / 2));
			}
			if (self.bu_align[0] == 'center') {
				self.$controls.css('top', parseInt((self.sH - self.cBH) / 2));
			}
			self.rF = self.rR = self.checkRatio(self.sW, self.sH, self.iW, self.iH, self.zoom_fit);
			if (self.zoom_min == 0) {				
				if (self.rA< self.rF){
					self.rA = self.rF;
				}
			}
			
			self.focusTo({
				x: self.cX,
				y: self.cY,
				zoom:'',
				speed: 10
			});			
		}
	}


	$.fn.smoothZoom = function (params) {		
		var self = this;		
		var l = self.length;
		
		//For single or more than one plugin instance
		for (var i = 0; i<l; i++) {
			var $elem = $(self[i]);
			var instance = $elem.data('smoothZoom');
			
			// Case 1: Initiate the plugin if not already have an instance
			if (!instance) {
		
				if (typeof params === 'object' || !params) {
					$elem.data('smoothZoom', new Zoomer($elem, params));				
				}
			
			// Case 2: If the instance already available - Check for method call
			} else {	

				// getZoomData - Returns {sourceX, sourceY, sourceWidth, sourceHeight, distX, distY, distWidth, distHeight, centerX, centerY, ratio}				
				if (params == "getZoomData") {				
					return instance[params].apply(instance, Array.prototype.slice.call(arguments, 1));
					
				// destroy | focusTo | zoomIn | zoomOut | moveRight| moveLeft | moveUp | moveDown | Reset | addLandmark | removeLandmark | attachLandmark | refreshAllLandmarks
				} else if (instance[params]) {
					instance[params].apply(instance, Array.prototype.slice.call(arguments, 1));
				}
			}					
		}	
		
		//return for chainability for possible cases
		if (params !== "getZoomData") {
			return this;
		}
	};
	
	function checkBoolean (_var) {
		if (_var === true) {
			return true;
		} else if (_var) {
			_var = _var.toLowerCase();
			if (_var == 'yes' || _var == 'true') {
				return true;
			}
		}
		return false;
	}
	
	
		//...................................................................................................................
	//Using Modernizr to check browser capabilities and property names prefixed
			
	/* Modernizr 2.8.2 (Custom Build) | MIT & BSD
	 * Build: http://modernizr.com/download/#-borderradius-csstransforms-csstransforms3d-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
	 */
	window.Modernizr=function(a,b,c){function y(a){i.cssText=a}function z(a,b){return y(l.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b){for(var d in a){var e=a[d];if(!B(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function D(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}function E(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return A(b,"string")||A(b,"undefined")?C(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),D(e,b,c))}var d="2.8.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.borderradius=function(){return E("borderRadius")},p.csstransforms=function(){return!!E("transform")},p.csstransforms3d=function(){var a=!!E("perspective");return a&&"webkitPerspective"in f.style&&v("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a};for(var F in p)x(p,F)&&(u=F.toLowerCase(),e[u]=p[F](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),h=j=null,e._version=d,e._prefixes=l,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return C([a])},e.testAllProps=E,e.testStyles=v,e.prefixed=function(a,b,c){return b?E(a,b,c):E(a,"pfx")},e}(this,document);
	
	var prop_transform = Modernizr.prefixed('transform');
	var prop_origin = Modernizr.prefixed('transformOrigin');
	var prop_radius = Modernizr.prefixed('borderRadius');
	var supportsTrans3D = Modernizr.csstransforms3d;
	
})(jQuery, window, document);

//End - smoothZoom

//...................................................................................................................
//For mouse wheel support

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b)["offsetParent"in a.fn?"offsetParent":"parent"]();return c.length||(c=a("body")),parseInt(c.css("fontSize"),10)},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

//...................................................................................................................

(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);return aR};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if(I()||V()){bc=aF(bd,bb,l)}else{if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.allowPageScroll===m||aX()){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));

/* Copyright (C) 2014 Justin Windle, http://soulwire.co.uk */
var fit=function(){"use strict";function t(t){return t.toUpperCase()}function e(t){return"number"==typeof t&&!isNaN(t)}function n(){return(new Date).getTime()}function i(t,e){for(var n=[],i=0,r=t.length;r>i;i++)n[i]=e(t[i]);return n}function r(t,e){for(var n in e)n in t||(t[n]=e[n]);return t}function o(e){if(!y)for(var n,i=H(C.body),r=w,o=0,a=T.length;a>o&&(y=T[o],n=y+r,!(n in i))&&(y=y.replace(/^(\w)/,t),n=y+r,!(n in i));o++);return y+e}function a(t){var e=H(t),n=e[o(w)].replace(/[a-z()]/gi,"").split(",");if(n.length<6)return[1,0,0,1,0,0];for(var i=0;6>i;i++)n[i]=parseFloat(n[i]);return n}function f(t,e){var n=a(e);n[0]=t.scale,n[3]=t.scale,n[4]+=t.tx,n[5]+=t.ty;var r=i(n,function(t){return t.toFixed(6)});e.style[o(m)]="0 0",e.style[o(w)]="matrix("+r.join(",")+")"}function s(t,e){var n=H(e),i=parseFloat(n.left)||0,r=parseFloat(n.top)||0;"static"===n.position&&(e.style.position="relative"),e.style.left=i+t.tx+b,e.style.top=r+t.ty+b,e.style.height=t.height+b,e.style.width=t.width+b}function l(t,e){var n=H(e),i=parseFloat(n.marginLeft)||0,r=parseFloat(n.marginTop)||0;e.style.marginLeft=i+t.tx+b,e.style.marginTop=r+t.ty+b,e.style.height=t.height+b,e.style.width=t.width+b}function h(t,e){e.height*=t.scale,e.width*=t.scale,e.x+=t.tx,e.y+=t.ty}function u(t){if(t.nodeType&&1==t.nodeType){var n=t.getBoundingClientRect();t={height:t.offsetHeight,width:t.offsetWidth,x:n.left,y:n.top}}return!e(t.x)&&e(t.left)&&(t.x=t.left),!e(t.y)&&e(t.top)&&(t.x=t.top),t}function c(){var t=n(),e=t-d;if(x>=e)clearInterval(v),v=setTimeout(c,x-e);else{for(var i=0,r=M.length;r>i;i++)M[i]();d=t}}function g(t,e,n,i,r){var o=u(t),a=u(e),s=o.width,l=o.height,c=a.width,g=a.height,p=c/s,y=g/l,d=s/l,v=c/g,x=n.cover?y:p,m=n.cover?p:y,w=d>=v?x:m,T=s*w,F=l*w,L=n.hAlign==A?.5*(T-c):n.hAlign==O?T-c:0,b=n.vAlign==A?.5*(F-g):n.vAlign==E?F-g:0;return r=r||{},r.tx=a.x-L-o.x,r.ty=a.y-b-o.y,r.x=a.x-L-o.x*w,r.y=a.y-b-o.y*w,r.height=o.height*w,r.width=o.width*w,r.scale=w,i?i(r,t):n.apply&&(i="undefined"!=typeof HTMLElement&&t instanceof HTMLElement?f:h)(r,t),r}function p(t,e,n,i){if(!t||!e)throw"You must supply a target and a container";"function"==typeof n&&(i=n,n={}),n=r(n||{},N);var o=g(t,e,n,i);return n.watch&&(M.length||(z.addEventListener?z.addEventListener("resize",c):z.attachEvent("onresize",c)),o.trigger=function(){g(t,e,n,i,o)},o.on=function(t){var e=M.indexOf(o.trigger);~e||M.push(o.trigger),t||o.trigger()},o.off=function(){var t=M.indexOf(o.trigger);~t&&M.splice(t,1)},o.on(!0)),o}var y,d,v,x=50,m="TransformOrigin",w="Transform",T="moz ms o webkit".split(" "),A="center",E="bottom",O="right",F="left",L="top",b="px",z=window||self,C=document,H=z.getComputedStyle,M=[],N={hAlign:A,vAlign:A,watch:!1,cover:!1,apply:!0};return Array.prototype.indexOf||(Array.prototype.indexOf=function(t){for(var e=0;e<this.length;++e)if(this[e]==t)return e;return-1}),r(p,{watching:M,defaults:N,cssTransform:f,cssPosition:s,cssMargin:l,CENTER:A,BOTTOM:E,RIGHT:O,LEFT:F,TOP:L})}();