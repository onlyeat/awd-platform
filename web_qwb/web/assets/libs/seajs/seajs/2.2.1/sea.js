!function(a,b){function e(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function k(){return j++}function r(a){return a.match(n)[0]}function s(a){for(a=a.replace(o,"/");a.match(p);)a=a.replace(p,"/");return a=a.replace(q,"$1/")}function t(a){var b=a.length-1,c=a.charAt(b);return"#"===c?a.substring(0,b):".js"===a.substring(b-2)||a.indexOf("?")>0||".css"===a.substring(b-3)||"/"===c?a:a+".js"}function w(a){var b=d.alias;return b&&g(b[a])?b[a]:a}function x(a){var c,b=d.paths;return b&&(c=a.match(u))&&g(b[c[1]])&&(a=b[c[1]]+c[2]),a}function y(a){var b=d.vars;return b&&a.indexOf("{")>-1&&(a=a.replace(v,function(a,c){return g(b[c])?b[c]:a})),a}function z(a){var e,f,g,b=d.map,c=a;if(b)for(e=0,f=b.length;f>e&&(g=b[e],c=i(g)?g(a)||a:a.replace(g[0],g[1]),c===a);e++);return c}function C(a,b){var c,f,e=a.charAt(0);return A.test(a)?c=a:"."===e?c=s((b?r(b):d.cwd)+a):"/"===e?(f=d.cwd.match(B),c=f?f[0]+a.substring(1):a):c=d.base+a,0===c.indexOf("//")&&(c=location.protocol+c),c}function D(a,b){if(!a)return"";a=w(a),a=x(a),a=y(a),a=t(a);var c=C(a,b);return c=z(c)}function J(a){return a.hasAttribute?a.src:a.getAttribute("src",4)}function Q(a,b,c){var f,d=M.test(a),e=E.createElement(d?"link":"script");c&&(f=i(c)?c(a):c,f&&(e.charset=f)),R(e,b,d,a),d?(e.rel="stylesheet",e.href=a):(e.async=!0,e.src=a),N=e,L?K.insertBefore(e,L):K.appendChild(e),N=null}function R(a,b,c,e){function g(){a.onload=a.onerror=a.onreadystatechange=null,c||d.debug||K.removeChild(a),a=null,b()}var f="onload"in a;return!c||!P&&f?(f?(a.onload=g,a.onerror=function(){m("error",{uri:e,node:a}),g()}):a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&g()},void 0):(setTimeout(function(){S(a,b)},1),void 0)}function S(a,b){var d,c=a.sheet;if(P)c&&(d=!0);else if(c)try{c.cssRules&&(d=!0)}catch(e){"NS_ERROR_DOM_SECURITY_ERR"===e.name&&(d=!0)}setTimeout(function(){d?b():S(a,b)},20)}function T(){var a,b,c;if(N)return N;if(O&&"interactive"===O.readyState)return O;for(a=K.getElementsByTagName("script"),b=a.length-1;b>=0;b--)if(c=a[b],"interactive"===c.readyState)return O=c}function W(a){var b=[];return a.replace(V,"").replace(U,function(a,c,d){d&&b.push(d)}),b}function bb(a,b){this.uri=a,this.dependencies=b||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}var c,d,f,g,h,i,j,l,m,n,o,p,q,u,v,A,B,E,F,G,H,I,K,L,M,N,O,P,U,V,X,Y,Z,$,_,ab,cb;a.seajs||(c=a.seajs={version:"2.2.1"},d=c.data={},f=e("Object"),g=e("String"),h=Array.isArray||e("Array"),i=e("Function"),j=0,l=d.events={},c.on=function(a,b){var d=l[a]||(l[a]=[]);return d.push(b),c},c.off=function(a,b){var e,f;if(!a&&!b)return l=d.events={},c;if(e=l[a])if(b)for(f=e.length-1;f>=0;f--)e[f]===b&&e.splice(f,1);else delete l[a];return c},m=c.emit=function(a,b){var e,d=l[a];if(d)for(d=d.slice();e=d.shift();)e(b);return c},n=/[^?#]*\//,o=/\/\.\//g,p=/\/[^\/]+\/\.\.\//,q=/([^:\/])\/\//g,u=/^([^\/:]+)(\/.+)$/,v=/{([^{]+)}/g,A=/^\/\/.|:\//,B=/^.*?\/\/.*?\//,E=document,F=r(E.URL),G=E.scripts,H=E.getElementById("seajsnode")||G[G.length-1],I=r(J(H)||F),c.resolve=D,K=E.head||E.getElementsByTagName("head")[0]||E.documentElement,L=K.getElementsByTagName("base")[0],M=/\.css(?:\?|$)/i,P=+navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/(\d+).*/,"$1")<536,c.request=Q,U=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,V=/\\\\/g,X=c.cache={},Z={},$={},_={},ab=bb.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6},bb.prototype.resolve=function(){var d,e,a=this,b=a.dependencies,c=[];for(d=0,e=b.length;e>d;d++)c[d]=bb.resolve(b[d],a.uri);return c},bb.prototype.load=function(){var b,c,d,e,f,g,a=this;if(!(a.status>=ab.LOADING)){for(a.status=ab.LOADING,b=a.resolve(),m("load",b),c=a._remain=b.length,e=0;c>e;e++)d=bb.get(b[e]),d.status<ab.LOADED?d._waitings[a.uri]=(d._waitings[a.uri]||0)+1:a._remain--;if(0===a._remain)return a.onload(),void 0;for(f={},e=0;c>e;e++)d=X[b[e]],d.status<ab.FETCHING?d.fetch(f):d.status===ab.SAVED&&d.load();for(g in f)f.hasOwnProperty(g)&&f[g]()}},bb.prototype.onload=function(){var b,c,d,a=this;a.status=ab.LOADED,a.callback&&a.callback(),b=a._waitings;for(c in b)b.hasOwnProperty(c)&&(d=X[c],d._remain-=b[c],0===d._remain&&d.onload());delete a._waitings,delete a._remain},bb.prototype.fetch=function(a){function h(){c.request(f.requestUri,f.onRequest,f.charset)}function i(){delete Z[g],$[g]=!0,Y&&(bb.save(e,Y),Y=null);var a,b=_[g];for(delete _[g];a=b.shift();)a.load()}var f,g,b=this,e=b.uri;return b.status=ab.FETCHING,f={uri:e},m("fetch",f),g=f.requestUri||e,!g||$[g]?(b.load(),void 0):Z[g]?(_[g].push(b),void 0):(Z[g]=!0,_[g]=[b],m("request",f={uri:e,requestUri:g,onRequest:i,charset:d.charset}),f.requested||(a?a[f.requestUri]=h:h()),void 0)},bb.prototype.exec=function(){function d(a){var b={id:a};return m("require",b),"function"==typeof b.exec?b.exec():bb.get(d.resolve(a)).exec()}var c,e,f,a=this;return a.status>=ab.EXECUTING?a.exports:(a.status=ab.EXECUTING,c=a.uri,d.resolve=function(a){return bb.resolve(a,c)},d.async=function(a,b){return bb.use(a,b,c+"_async_"+k()),d},e=a.factory,f=i(e)?e(d,a.exports={},a):e,f===b&&(f=a.exports),delete a.factory,a.exports=f,a.status=ab.EXECUTED,m("exec",a),f)},bb.resolve=function(a,b){var d={id:a,refUri:b};return m("resolve",d),d.uri||c.resolve(d.id,b)},bb.define=function(a,c,d){var f,g,e=arguments.length;1===e?(d=a,a=b):2===e&&(d=c,h(a)?(c=a,a=b):c=b),!h(c)&&i(d)&&(c=W(d.toString())),f={id:a,uri:bb.resolve(a),deps:c,factory:d},!f.uri&&E.attachEvent&&(g=T(),g&&(f.uri=g.src)),m("define",f),f.uri?bb.save(f.uri,f):Y=f},bb.save=function(a,b){var c=bb.get(a);c.status<ab.SAVED&&(c.id=b.id||a,c.dependencies=b.deps||[],c.factory=b.factory,c.status=ab.SAVED)},bb.get=function(a,b){return X[a]||(X[a]=new bb(a,b))},bb.use=function(b,c,d){var e=bb.get(d,h(b)?b:[b]);e.callback=function(){var f,g,b=[],d=e.resolve();for(f=0,g=d.length;g>f;f++)b[f]=X[d[f]].exec();c&&c.apply(a,b),delete e.callback},e.load()},bb.preload=function(a){var b=d.preload,c=b.length;c?bb.use(b,function(){b.splice(0,c),bb.preload(a)},d.cwd+"_preload_"+k()):a()},c.use=function(a,b){return bb.preload(function(){bb.use(a,b,d.cwd+"_use_"+k())}),c},bb.define.cmd={},a.define=bb.define,c.Module=bb,d.fetchedList=$,d.cid=k,c.require=function(a){var b=bb.get(bb.resolve(a));return b.status<ab.EXECUTING&&(b.onload(),b.exec()),b.exports},cb=/^(.+?\/)(\?\?)?(seajs\/)+/,d.base=(I.match(cb)||["",I])[1],d.dir=I,d.cwd=F,d.charset="utf-8",d.preload=function(){var a=[],b=location.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2");return b+=" "+E.cookie,b.replace(/(seajs-\w+)=1/g,function(b,c){a.push(c)}),a}(),c.config=function(a){var b,e,g,i;for(b in a)if(e=a[b],g=d[b],g&&f(g))for(i in e)g[i]=e[i];else h(g)?e=g.concat(e):"base"===b&&("/"!==e.slice(-1)&&(e+="/"),e=C(e)),d[b]=e;return m("config",a),c})}(this);