!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e,n){"use strict";let i;n.r(e);function s(t,e){!function(){if(!i&&(i=document.documentElement))s("*,::before,::after {\tbox-sizing: border-box;\tborder-width: 0;\tborder-style: solid;\tborder-color: currentColor;}","root")}();var n=document.createElement("style");n.textContent=t,document.head.appendChild(n)}class r{constructor(t){this.dom=t,this.string=""}contains(t){return this.dom.classList.contains(t)}add(t){return this.contains(t)||(this.string+=(this.string?" ":"")+t,this.dom.classList.add(t)),this}remove(t){if(!this.contains(t))return this;var e=new RegExp("(^|\\s)*"+t+"(\\s|$)*","g");return this.string=this.string.replace(e,""),this.dom.classList.remove(t),this}toggle(t,e){return void 0===e&&(e=!this.contains(t)),e?this.add(t):this.remove(t)}incr(t){let e=this.stacks||(this.stacks={}),n=e[t]||0;return n<1&&this.add(t),e[t]=Math.max(n,0)+1,this}decr(t){let e=this.stacks||(this.stacks={}),n=e[t]||0;return 1==n&&this.remove(t),e[t]=Math.max(n,1)-1,this}valueOf(){return this.string}toString(){return this.string}sync(){return this.dom.flagSync$()}}var o="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(t){return setTimeout(t,1e3/60)};const{Document:h,Node:a,Text:l,Comment:u,Element:c,SVGElement:d,HTMLElement:m,DocumentFragment:p,ShadowRoot:f,Event:$,CustomEvent:g,MouseEvent:y,KeyboardEvent:v,PointerEvent:b,document:x}=window;function _(t){return t?t.toIterable?t.toIterable():t:[]}const E={esc:[27],tab:[9],enter:[13],space:[32],up:[38],down:[40],left:[37],right:[39],del:[8,46]};$.log$mod=function(...t){return console.log(...t),!0},$.sel$mod=function(t){return!!this.event.target.matches(String(t))},$.if$mod=function(t){return!!t},$.wait$mod=function(t=250){return new Promise((function(e){return setTimeout(e,t)}))},$.self$mod=function(){return this.event.target==this.element},$.throttle$mod=function(t=250){var e=this;return!this.handler.throttled&&(this.handler.throttled=!0,this.element.flags.incr("throttled"),imba.once(this.current,"end",(function(){return setTimeout((function(){return e.element.flags.decr("throttled"),e.handler.throttled=!1}),t)})),!0)},$.flag$mod=function(t,e){let n=e instanceof globalThis.Element?e:e?this.element.closest(e):this.element;if(!n)return!0;let i=this.step;this.state[i]=this.id,n.flags.incr(t);let s=Date.now();return imba.once(this.current,"end",(function(){let e=Date.now()-s,i=Math.max(250-e,0);return setTimeout((function(){return n.flags.decr(t)}),i)})),!0},$.busy$mod=function(t){return $.flag$mod.call(this,"busy",250,t)};class C{constructor(t,e){this.params=t,this.closure=e}getHandlerForMethod(t,e){return t?t[e]?t:this.getHandlerForMethod(t.parentNode,e):null}emit(t,...e){return imba.emit(this,t,e)}on(t,...e){return imba.listen(this,t,...e)}once(t,...e){return imba.once(this,t,...e)}un(t,...e){return imba.unlisten(this,t,...e)}async handleEvent(t){t.target;var e=t.currentTarget,n=this.params;let i=!0,s=!1;this.count||(this.count=0),this.state||(this.state={});let r={element:e,event:t,modifiers:n,handler:this,id:++this.count,step:-1,state:this.state,current:null};if(r.current=r,t.handle$mod&&0==t.handle$mod.apply(r,n.options||[]))return;let o=$[this.type+"$handle"]||$[t.type+"$handle"]||t.handle$mod;if(!o||0!=o.apply(r,n.options||[])){this.currentEvents||(this.currentEvents=new Set),this.currentEvents.add(t);for(let o,h,a=0,l=Object.keys(n),u=l.length;a<u;a++){if(o=l[a],h=n[o],r.step++,"_"==o[0])continue;o.indexOf("~")>0&&(o=o.split("~")[0]);let u,c=null,d=[t,r],m=void 0,p=null;if("$"==o[0]&&"_"==o[1]&&h[0]instanceof Function)o=h[0],d=[t,r].concat(h.slice(1)),p=e;else if(h instanceof Array){d=h.slice(),c=d;for(let e=0,n=_(d),i=n.length;e<i;e++){let i=n[e];if("string"==typeof i&&"~"==i[0]&&"$"==i[1]){let n=i.slice(2).split("."),s=r[n.shift()]||t;for(let t=0,e=_(n),i=e.length;t<i;t++){let n=e[t];s=s?s[n]:void 0}d[e]=s}}}if("string"==typeof o&&(u=o.match(/^(emit|flag|moved|pin|fit|refit|map|remap)-(.+)$/))&&(c||(c=d=[]),d.unshift(u[2]),o=u[1]),"stop"==o)t.stopImmediatePropagation();else if("prevent"==o)t.preventDefault();else if("commit"==o)i=!0;else if("silence"==o||"silent"==o)i=!1;else if("ctrl"==o){if(!t.ctrlKey)break}else if("alt"==o){if(!t.altKey)break}else if("shift"==o){if(!t.shiftKey)break}else if("meta"==o){if(!t.metaKey)break}else if("once"==o)e.removeEventListener(t.type,this);else{if("options"==o)continue;if(E[o]){if(E[o].indexOf(t.keyCode)<0)break}else if("emit"==o){let n=d[0],i=d[1],s=new CustomEvent(n,{bubbles:!0,detail:i});s.originalEvent=t;e.dispatchEvent(s)}else if("string"==typeof o){let n=this.type&&$[this.type+"$"+o+"$mod"];n||(n=t[o+"$mod"]||$[t.type+"$"+o]||$[o+"$mod"]),n instanceof Function?(o=n,p=r,d=c||[]):"_"==o[0]?(o=o.slice(1),p=this.closure):p=this.getHandlerForMethod(e,o)}}if(o instanceof Function?m=o.apply(p||e,d):p&&(m=p[o].apply(p,d)),m&&m.then instanceof Function&&m!=imba.scheduler.$promise&&(i&&imba.$commit(),s=!0,m=await m),!1===m)break;r.value=m}imba.emit(r,"end",r),i&&imba.$commit(),this.currentEvents.delete(t),0==this.currentEvents.size&&this.emit("idle")}}}function S(t,e=1){let n=1/e;return Math.round(t*n)/n}function w(t){if("string"==typeof t){let[e,n,i]=t.match(/^([-+]?[\d\.]+)(%|\w+)$/);return[parseFloat(n),i]}if("number"==typeof t)return[t]}function F(t,e,n,i,s=.1){let[r,o]=w(n),[h,a]=w(i),[l,u]=w(s);return"%"==o&&(r=r/100*(e-t)),"%"==a&&(h=h/100*(e-t)),"%"==u&&(l=l/100*(h-r)),function(n,i){let o=r+(h-r)*((n-t)/(e-t));return s&&(o=S(o,l)),i&&(o=function(t,e,n){return e>n?Math.max(n,Math.min(e,t)):Math.min(n,Math.max(e,t))}(o,r,h)),o}}var N,k,B;N=b,k={primary$mod(){return!!this.event.isPrimary},mouse$mod(){return"mouse"==this.event.pointerType},pen$mod(){return"pen"==this.event.pointerType},touch$mod(){return"touch"==this.event.pointerType},pressure$mod(t=0){return this.event.pressure>t},lock$mod:t=>!0},B=Object.getOwnPropertyDescriptors(k),Object.defineProperties(N.prototype,B);class M{constructor(t,e,n){this.phase="init",this.events=[],this.event=t,this.handler=e,this.target=this.currentTarget=n}set event(t){this.x=t.clientX,this.y=t.clientY,this.events.push(t)}get start(){return this.events[0]}get event(){return this.events[this.events.length-1]}get elapsed(){return this.event.timeStamp-this.events[0].timeStamp}get pointerId(){return this.event.pointerId}get clientX(){return this.event.clientX}get clientY(){return this.event.clientY}get offsetX(){return this.event.offsetX}get offsetY(){return this.event.offsetY}get type(){return this.event.type}emit(t,...e){return imba.emit(this,t,e)}on(t,...e){return imba.listen(this,t,...e)}once(t,...e){return imba.once(this,t,...e)}un(t,...e){return imba.unlisten(this,t,...e)}}function I(t){return t?t.toIterable?t.toIterable():t:[]}function O(t,e){var n=Object.getOwnPropertyDescriptors(e);return Object.defineProperties(t.prototype,n),t}$.touch$in$mod=function(){return $.touch$reframe$mod.apply(this,arguments)},$.touch$fit$mod=function(){var t,e;(t=this.state)[e=this.step]||(t[e]={clamp:!0});return $.touch$reframe$mod.apply(this,arguments)},$.touch$snap$mod=function(t=1,e=t){return this.event.x=S(this.event.x,t),this.event.y=S(this.event.y,e),!0},$.touch$moved$mod=function(t,e){var n,i,s=this;let r=(n=this.state)[i=this.step]||(n[i]={});if(!r.setup){let n=t||4;"string"==typeof t&&t.match(/^(up|down|left|right|x|y)$/)&&(r.dir=t,n=e||4),r.setup=!0;let[i,s]=w(n);r.threshold=i,r.sy=i,r.x0=this.event.x,r.y0=this.event.y,s&&"px"!=s&&console.warn("only px threshold allowed in @touch.moved")}if(r.active)return!0;let o=r.threshold,h=this.event.x-r.x0,a=this.event.y-r.y0,l=!1;if(h>o&&("right"==r.dir||"x"==r.dir)&&(l=!0),!l&&h<-o&&("left"==r.dir||"x"==r.dir)&&(l=!0),!l&&a>o&&("down"==r.dir||"y"==r.dir)&&(l=!0),!l&&a<-o&&("up"==r.dir||"y"==r.dir)&&(l=!0),!l){Math.sqrt(h*h+a*a)>o&&!r.dir&&(l=!0)}if(l){r.active=!0;let t=this.state.pinTarget;this.element.flags.incr("_move_"),t&&t.flags.incr("_move_"),imba.once(this.current,"end",(function(){return t&&t.flags.decr("_move_"),s.element.flags.decr("_move_")}))}return!!r.active},$.touch$reframe$mod=function(...t){var e,n;let i=(e=this.state)[n=this.step]||(e[n]={});if(i.rect){let t=this.event.x=i.x(this.event.x,i.clamp),e=this.event.y=i.y(this.event.y,i.clamp);this.event.dx=t-this.event.x0,this.event.dy=e-this.event.y0}else{let e=this.element,n=t.length,s=t[0],r=0,o="100%",h=1,a=typeof s;"number"==a||"string"==a&&/^([-+]?\d[\d\.]*)(%|\w+)$/.test(s)||s instanceof Array?s=null:"string"==a&&(s="this"==s||""==s?this.element:"up"==s?this.element.parentNode:"op"==s?this.element.offsetParent:e.closest(s)||e.querySelector(s)),null==s&&(n++,t.unshift(s=e)),2==n?h=t[1]:n>2&&([r,o,h=1]=t.slice(1));let l=s.getBoundingClientRect();r instanceof Array||(r=[r,r]),o instanceof Array||(o=[o,o]),h instanceof Array||(h=[h,h]),i.rect=l,i.x=F(l.left,l.right,r[0],o[0],h[0]),i.y=F(l.top,l.bottom,r[1],o[1],h[1]),this.state.scaleX=i.x,this.state.scaleY=i.y,this.event.x0=this.event.x=i.x(this.event.x,i.clamp),this.event.y0=this.event.y=i.y(this.event.y,i.clamp)}return!0},$.touch$pin$mod=function(...t){let e=this.state[this.step];if(!e){let n=t[0];"string"==typeof n&&(n=this.element.closest(n)||this.element.querySelector(n)),n instanceof c||t.unshift(n=this.state.target);let i=t[1]||0,s=null==t[2]?t[2]=i:t[2],r=n.getBoundingClientRect();e=this.state[this.step]={x:this.state.clientX-(r.left+r.width*i),y:this.state.clientY-(r.top+r.height*s)},n&&(this.state.pinTarget=n,n.flags.incr("_touch_"),this.state.once("end",(function(){return n.flags.decr("_touch_")})))}return this.event.x-=e.x,this.event.y-=e.y,!0},$.touch$lock$mod=function(...t){let e=this.state[this.step];if(!e){e=this.state[this.step]=this.state.target.style;e.touchAction;e.touchAction="none",this.state.once("end",(function(){return e.removeProperty("touch-action")}))}return!0},$.touch$sync$mod=function(t,e="x",n="y"){let i=this.state[this.step];return i||(i=this.state[this.step]={x:t[e]||0,y:t[n]||0,tx:this.state.x,ty:this.state.y}),e&&(t[e]=i.x+(this.state.x-i.tx)),n&&(t[n]=i.y+(this.state.y-i.ty)),!0},$.touch$handle=function(){var t=this;let e=this.event,n=this.element,i=this.state.pointerId;if(this.current=this.state,i)return i==e.pointerId;let s=this.state=this.handler.state=this.current=new M(e,this.handler,n),r=function(t){return t.preventDefault(),!1},o=function(e){let i=e.type;s.phase;s.event=e;try{t.handler.handleEvent(s)}catch(e){}if("pointerup"==i||"pointercancel"==i)return n.releasePointerCapture(e.pointerId)};return n.flags.incr("_touch_"),n.setPointerCapture(e.pointerId),n.addEventListener("pointermove",o),n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),n.addEventListener("lostpointercapture",(function(e){return n.flags.decr("_touch_"),s.emit("end"),t.handler.state={},n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",o),n.removeEventListener("pointercancel",o),document.removeEventListener("selectstart",r)}),{once:!0}),document.addEventListener("selectstart",r,{capture:!0}),o(e),!1},O(p,{get $parent(){return this.up$||this.$$parent},setup$(t,e){return this.$start=imba.document.createComment("start"),this.$end=imba.document.createComment("end"),this.$end.replaceWith$=function(t){return this.parentNode.insertBefore(t,this),t},this.appendChild(this.$start),this.appendChild(this.$end)},text$(t){this.$text?this.$text.textContent=t:this.$text=this.insert$(t)},insert$(t,e,n){return this.$$parent?this.$$parent.insert$(t,e,n||this.$end):c.prototype.insert$.call(this,t,e,n||this.$end)},insertInto$(t,e){return this.$$parent||(this.$$parent=t,t.appendChild$(this)),this},replaceWith$(t,e){this.$start.insertBeforeBegin$(t);for(var n=this.$start;n;){let t=n.nextSibling;if(this.appendChild(n),n==this.$end)break;n=t}return t},appendChild$(t){return this.$end?this.$end.insertBeforeBegin$(t):this.appendChild(t),t},removeChild$(t){return t.parentNode&&t.parentNode.removeChild(t),this},isEmpty$(){let t=this.$start,e=this.$end;for(;(t=t.nextSibling)&&t!=e;)if(t instanceof c||t instanceof l)return!1;return!0}}),O(f,{get $parent(){return this.host}});class P{constructor(t,e){this.__F=t,this.$parent=e,!(128&t)&&this instanceof T&&(this.$start=x.createComment("start"),e&&e.appendChild$(this.$start)),256&t||(this.$end=x.createComment("end"),e&&e.appendChild$(this.$end)),this.setup()}appendChild$(t,e){this.$end&&this.$parent?this.$end.insertBeforeBegin$(t):this.$parent&&this.$parent.appendChild$(t)}replaceWith$(t){this.detachNodes(),this.$end.insertBeforeBegin$(t),this.$parent.removeChild$(this.$end),this.$parent=null}joinBefore$(t){return this.insertInto$(t.parentNode,t)}insertInto$(t,e){return this.$parent||(this.$parent=t,e?e.insertBeforeBegin$(this.$end):t.appendChild$(this.$end),this.attachNodes()),this}replace$(t){return this.$parent||(this.$parent=t.parentNode),t.replaceWith$(this.$end),this.attachNodes(),this}setup(){return this}}class T extends P{setup(){return this.array=[],this.changes=new Map,this.dirty=!1,this.$={}}push(t,e){if(!(1&this.__F))return this.array.push(t),void this.appendChild$(t);let n=this.array[e];if(n===t);else{this.dirty=!0;let i=this.array.indexOf(t),s=this.changes.get(t);-1===i?(this.array.splice(e,0,t),this.insertChild(t,e)):i===e+1?(n&&this.changes.set(n,-1),this.array.splice(e,1)):(i>=0&&this.array.splice(i,1),this.array.splice(e,0,t),this.insertChild(t,e)),-1==s&&this.changes.delete(t)}}insertChild(t,e){if(e>0){this.array[e-1].insertAfterEnd$(t)}else this.$start?this.$start.insertAfterEnd$(t):this.$parent.insertAfterBegin$(t)}removeChild(t,e){t.parentNode==this.$parent&&this.$parent.removeChild(t)}attachNodes(){for(let t=0,e=I(this.array),n=e.length;t<n;t++){let n=e[t];this.$end.insertBeforeBegin$(n)}}detachNodes(){for(let t=0,e=I(this.array),n=e.length;t<n;t++){let n=e[t];this.$parent.removeChild(n)}}end$(t){var e=this;if(1&this.__F){if(this.dirty&&(this.changes.forEach((function(t,n){if(-1==t)return e.removeChild(n)})),this.changes.clear(),this.dirty=!1),this.array.length>t)for(;this.array.length>t;){let t=this.array.pop();this.removeChild(t)}}else this.__F|=1}}class j extends P{setup(){return this.$=[],this.length=0}end$(t){let e=this.length;if(e==t||!this.$parent)return;let n=this.$,i=this.$parent;if(e>t)for(;e>t;)i.removeChild$(n[--e]);else if(t>e)for(;t>e;)this.appendChild$(n[e++]);this.length=t}attachNodes(){for(let t=0,e=I(this.$),n=e.length;t<n;t++){let n=e[t];if(t==this.length)break;this.$end.insertBeforeBegin$(n)}}detachNodes(){let t=0;for(;t<this.length;){let e=this.$[t++];this.$parent.removeChild$(e)}}}class A extends m{constructor(){super(),this.flags$ns&&(this.flag$=this.flagExt$),this.setup$(),this.build()}setup$(){return this.__slots={},this.__F=0}init$(){return this.__F|=3,this}flag$(t){this.className=this.flags$ext=t}slot$(t,e){var n;return"__"!=t||this.render?(n=this.__slots)[t]||(n[t]=imba.createLiveFragment(0,null,this)):this}build(){return this}awaken(){return this}mount(){return this}unmount(){return this}rendered(){return this}dehydrate(){return this}hydrate(){return this.autoschedule=!0,this}tick(){return this.commit()}visit(){return this.commit()}commit(){return this.isRender?(this.__F|=256,this.render&&this.render(),this.rendered(),this.__F=-257&(512|this.__F)):this}get autoschedule(){return 0!=(64&this.__F)}set autoschedule(t){t?this.__F|=64:this.__F&=-65}isRender(){return!0}isMounting(){return 0!=(16&this.__F)}isMounted(){return 0!=(32&this.__F)}isAwakened(){return 0!=(8&this.__F)}isRendered(){return 0!=(512&this.__F)}isRendering(){return 0!=(256&this.__F)}isScheduled(){return 0!=(128&this.__F)}isHydrated(){return 0!=(2&this.__F)}schedule(){return imba.scheduler.listen("render",this),this.__F|=128,this}unschedule(){return imba.scheduler.unlisten("render",this),this.__F&=-129,this}end$(){return this.visit()}connectedCallback(){let t=this.__F,e=1&t,n=8&t;if(48&t)return;this.__F|=16,e||this.init$(),2&t||(this.flags$ext=this.className,this.hydrate(),this.__F|=2,this.commit()),n||(this.awaken(),this.__F|=8);let i=this.mount();return i&&i.then instanceof Function&&i.then(imba.commit),t=this.__F=-17&(32|this.__F),64&t&&this.schedule(),this}disconnectedCallback(){return this.__F=-49&this.__F,128&this.__F&&this.unschedule(),this.unmount()}}function L(t,e){var n=Object.getOwnPropertyDescriptors(e);return Object.defineProperties(t.prototype,n),t}!function(t,e){var n=Object.getOwnPropertyDescriptors(e);Object.defineProperties(t.prototype,n)}(d,{flag$(t){let e=this.flags$ns;this.className.baseVal=e?e+(this.flags$ext=t):this.flags$ext=t},flagSelf$(t){var e=this;return this.flag$=function(t){return e.flagSync$(e.flags$ext=t)},this.flagSelf$=function(t){return e.flagSync$(e.flags$own=t)},this.flagSelf$(t)},flagSync$(){return this.className.baseVal=(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||"")}});var q="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:null,D={version:"2.0.0",global:q,ctx:null,document:q.document};q.imba=D,q.customElements||(q.customElements={define:function(){return!0},get:function(){return!0}}),D.setTimeout=function(t,e){return setTimeout((function(){return t(),D.$commit()}),e)},D.setInterval=function(t,e){return setInterval((function(){return t(),D.$commit()}),e)},D.clearInterval=q.clearInterval,D.clearTimeout=q.clearTimeout,Object.defineProperty(D,"flags",{get:function(){return D.document.documentElement.classList}}),D.q$=function(t,e){return(e instanceof Element?e:document).querySelector(t)},D.q$$=function(t,e){return(e instanceof Element?e:document).querySelectorAll(t)};const z={cm:1,mm:1,Q:1,pc:1,pt:1,px:1,em:1,ex:1,ch:1,rem:1,vw:1,vh:1,vmin:1,vmax:1,s:1,ms:1,fr:1,"%":1,in:1,turn:1,grad:1,rad:1,deg:1,Hz:1,kHz:1},R={prefix:1,suffix:1,content:1},V=/^([xyz])$/,W=/^([tlbr]|size|[whtlbr]|[mps][tlbrxy]?|[rcxy]?[gs])$/;D.toStyleValue=function(t,e,n){R[n]&&(t=String(t));let i=typeof t;if("number"==i){if(e||(V.test(n)?e="px":W.test(n)?e="u":"rotate"==n&&(e="turn")),e)return z[e]?t+e:"u"==e?4*t+"px":"calc(var(--u_"+e+",1px) * "+t+")"}else"string"==i&&n&&R[n]&&'"'!=t[0]&&"'"!=t[0]&&(t.indexOf('"')>=0?-1==t.indexOf("'")&&(t="'"+t+"'"):t='"'+t+'"');return t},D.inlineStyles=function(t,e){s(t)};var H=/-./g;D.toCamelCase=function(t){return t.indexOf("-")>=0?t.replace(H,(function(t){return t.charAt(1).toUpperCase()})):t};var X=function(t,e,n){let i,s,r;for(;(i=n)&&(n=n.next);)(s=n.listener)&&(r=n.path&&s[n.path]?e?s[n.path].apply(s,e):s[n.path]():e?s.apply(n,e):s.call(n)),n.times&&--n.times<=0&&(i.next=n.next,n.listener=null)};D.listen=function(t,e,n,i){let s,r,o;return s=t.__listeners__||(t.__listeners__={}),r=s[e]||(s[e]={}),o=r.tail||(r.tail=r.next={}),o.listener=n,o.path=i,r.tail=o.next={},o},D.once=function(t,e,n){let i=D.listen(t,e,n);return i.times=1,i},D.unlisten=function(t,e,n,i){let s,r,o=t.__listeners__;if(o&&(s=o[e]))for(;(r=s)&&(s=s.next);)if(s==n||s.listener==n){r.next=s.next,s.listener=null;break}},D.emit=function(t,e,n){var i;(i=t.__listeners__)&&(i[e]&&X(0,n,i[e]),i.all&&X(0,[e,n],i.all))},D.scheduler=new class{constructor(){var t=this;this.queue=[],this.stage=-1,this.batch=0,this.scheduled=!1,this.listeners={},this.$promise=null,this.$resolve=null,this.$ticker=function(e){return t.scheduled=!1,t.tick(e)}}add(t,e){if((e||-1==this.queue.indexOf(t))&&this.queue.push(t),!this.scheduled)return this.schedule()}listen(t,e){var n;return(n=this.listeners)[t]||(n[t]=new Set),this.listeners[t].add(e)}unlisten(t,e){return this.listeners[t]&&this.listeners[t].delete(e)}get promise(){var t=this;return this.$promise||(this.$promise=new Promise((function(e){return t.$resolve=e})))}tick(t){var e,n=this,i=this.queue;if(this.ts||(this.ts=t),this.dt=t-this.ts,this.ts=t,this.queue=[],this.stage=1,this.batch++,i.length)for(let t=0,s=(e=i)?e.toIterable?e.toIterable():e:[],r=s.length;t<r;t++){let e=s[t];"string"==typeof e&&this.listeners[e]?this.listeners[e].forEach((function(t){return t.tick instanceof Function?t.tick(n):t instanceof Function?t(n):void 0})):e instanceof Function?e(this.dt,this):e.tick&&e.tick(this.dt,this)}return this.stage=2,this.stage=this.scheduled?0:-1,this.$promise&&(this.$resolve(this),this.$promise=this.$resolve=null),this}schedule(){return this.scheduled||(this.scheduled=!0,-1==this.stage&&(this.stage=0),o(this.$ticker)),this}},D.$commit=function(){return D.scheduler.add("render")},D.commit=function(){return D.scheduler.add("render"),D.scheduler.promise},D.tick=function(){return D.commit(),D.scheduler.promise},D.mount=function(t,e){let n=e||document.body,i=t;if(t instanceof Function){let e={_:n},s=function(){return D.ctx=e,t(e)};i=s(),D.scheduler.listen("render",s)}else i.__F|=64;return n.appendChild(i)};var Y={get(t,e){let n=t,i=void 0;for(;n&&null==i;)(n=n.$parent)&&(i=n[e]);return i}};L(Node,{get $context(){return this.$context_||(this.$context_=new Proxy(this,Y))},get $parent(){return this.up$||this.parentNode},init$(){return this},replaceWith$(t){return t instanceof Node||!t.replace$?this.parentNode.replaceChild(t,this):t.replace$(this),t},insertInto$(t){return t.appendChild$(this),this},insertBefore$(t,e){return this.insertBefore(t,e)},insertBeforeBegin$(t){return this.parentNode.insertBefore(t,this)},insertAfterEnd$(t){return this.nextSibling?this.nextSibling.insertBeforeBegin$(t):this.parentNode.appendChild(t)},insertAfterBegin$(t){return this.childNodes[0]?this.childNodes[0].insertBeforeBegin$(t):this.appendChild(t)}}),L(Comment,{replaceWith$(t){return t&&t.joinBefore$?t.joinBefore$(this):this.parentNode.insertBefore$(t,this),this.parentNode.removeChild(this),t}}),L(Element,{log(...t){return console.log(...t),this},emit(t,e,n={bubbles:!0}){null!=e&&(n.detail=e);let i=new CustomEvent(t,n);this.dispatchEvent(i);return i},slot$(t,e){return this},on$(t,e,n){let i,s="on$"+t;this[s]instanceof Function&&(i=this[s](e,n)),i=new C(e,n);let r=e.capture,o=e.passive,h=r;return o&&(h={passive:o,capture:r}),/^(pointerdrag|touch)$/.test(t)&&(i.type=t,t="pointerdown"),this.addEventListener(t,i,h),i},text$(t){return this.textContent=t,this},insert$(t,e,n){let i=typeof t;if("undefined"===i||null===t){if(n&&n instanceof Comment)return n;let t=document.createComment("");return n?n.replaceWith$(t):t.insertInto$(this),t}if(t===n)return t;if("object"!==i){let i,s=t;return 128&e&&256&e?void(this.textContent=s):n?n instanceof Text?(n.textContent=s,n):(i=document.createTextNode(s),n.replaceWith$(i,this),i):(this.appendChild$(i=document.createTextNode(s)),i)}return n?n.replaceWith$(t,this):t.insertInto$(this),t},get flags(){return this.$flags||(this.$flags=new r(this),this.flag$==Element.prototype.flag$&&(this.flags$ext=this.className),this.flagDeopt$()),this.$flags},flag$(t){let e=this.flags$ns;this.className=e?e+(this.flags$ext=t):this.flags$ext=t},flagDeopt$(){var t=this;this.flag$=this.flagExt$,this.flagSelf$=function(e){return t.flagSync$(t.flags$own=e)}},flagExt$(t){return this.flagSync$(this.flags$ext=t)},flagSelf$(t){return this.flagDeopt$(),this.flagSelf$(t)},flagSync$(){return this.className=(this.flags$ns||"")+(this.flags$ext||"")+" "+(this.flags$own||"")+" "+(this.$flags||"")},open$(){return this},close$(){return this},end$(){this.render&&this.render()},css$(t,e,n){return this.style[t]=e},css$var(t,e,n,i){let s=D.toStyleValue(e,n,i);this.style.setProperty(t,s)}}),Element.prototype.appendChild$=Element.prototype.appendChild,Element.prototype.removeChild$=Element.prototype.removeChild,Element.prototype.insertBefore$=Element.prototype.insertBefore,Element.prototype.replaceChild$=Element.prototype.replaceChild,Element.prototype.set$=Element.prototype.setAttribute,Element.prototype.setns$=Element.prototype.setAttributeNS,ShadowRoot.prototype.insert$=Element.prototype.insert$,ShadowRoot.prototype.appendChild$=Element.prototype.appendChild$,D.createLiveFragment=function(t,e,n){var i=x.createDocumentFragment();return i.setup$(t,e),n&&(i.up$=n),i},D.createIndexedFragment=function(t,e){return new j(t,e)},D.createKeyedFragment=function(t,e){return new T(t,e)};const G={};D.tags=new class{constructor(){this.types={}}lookup(t){return this.types[t]}get(t,e){return t&&"component"!=t?this.types[t]?this.types[t]:e&&q[e]?q[e]:q.customElements.get(t)||A:A}create(t){return this.types[t]?this.types[t].create$():document.createElement(t)}define(t,e,n={}){this.types[t]=e,e.nodeName=t;let i=e.prototype,s=i._ns_;if(n.ns){let t=n.ns,e=t+" "+t+"_ ";s&&(e+=i.flags$ns,t+=" "+s),i._ns_=t,i.flags$ns=e}return n.extends?G[t]=e:q.customElements.define(t,e),e}},D.createElement=function(t,e,n,i,s){var r=document.createElement(t);return n&&(r.className=n),null!==i&&r.text$(i),e&&e instanceof Node&&r.insertInto$(e),r},D.createComponent=function(t,e,n,i,s){var r;return"string"!=typeof t&&t&&t.nodeName&&(t=t.nodeName),G[t]?((r=G[t].create$(r)).slot$=A.prototype.slot$,r.__slots={}):r=document.createElement(t),r.up$=e,r.init$(),null!==i&&r.slot$("__").text$(i),(n||r.flags$ns)&&r.flag$(n||""),r},D.createSVGElement=function(t,e,n,i,s){var r=document.createElementNS("http://www.w3.org/2000/svg",t);return n&&(r.className.baseVal=n),e&&e instanceof Node&&r.insertInto$(e),r};var K=Symbol(),Q=Symbol(),U=Symbol(),J=Symbol(),Z=Symbol(),tt=Symbol(),et=Symbol(),nt=Symbol(),it=Symbol(),st=Symbol(),rt=Symbol(),ot=Symbol(),ht=Symbol(),at=Symbol(),lt=Symbol(),ut=Symbol(),ct=Symbol(),dt=Symbol(),mt=Symbol();class pt extends(imba.tags.get("component","ImbaElement")){render(){var t,e,n,i,s,r,o=this._ns_||"";let h=.3*this.data.sz,a=this.data.x,l=this.data.y;if(null!=this.mx&&null!=this.my){let t=this.mx-this.data.x,e=this.my-this.data.y,n=Math.sqrt(t*t+e*e);n>h&&(t=h*t/n,e=h*e/n),a+=t,l+=e}return(t=this).open$(),e=n=1,1===t[K]||(e=n=0,t[K]=1),e||(i=imba.createSVGElement("svg",t,""+o,null)),1,(s=t[Q])||(0,t[Q]=s=imba.createSVGElement("svg:circle",i,"eye1 "+o,null)),(r=this.data.x)===t[U]||s.set$("cx",t[U]=r),(r=this.data.y)===t[J]||s.set$("cy",t[J]=r),(r=this.data.sz)===t[Z]||s.set$("r",t[Z]=r),1,(s=t[tt])||(0,t[tt]=s=imba.createSVGElement("svg:circle",i,"eye2 "+o,null)),a===t[et]||s.set$("cx",t[et]=a),l===t[nt]||s.set$("cy",t[nt]=l),(r=.5*this.data.sz)===t[it]||s.set$("r",t[it]=r),(r=this.data.color)===t[st]||s.css$("fill",t[st]=r),1,(s=t[rt])||(0,t[rt]=s=imba.createSVGElement("svg:circle",i,"eye3 "+o,null)),a===t[ot]||s.set$("cx",t[ot]=a),l===t[ht]||s.set$("cy",t[ht]=l),(r=.2*this.data.sz)===t[at]||s.set$("r",t[at]=r),t.close$(n),t}}imba.tags.define("spooky-eye",pt,{});class ft extends(imba.tags.get("component","ImbaElement")){eye_distance(t,e){let n=t.x-e.x,i=t.y-e.y;return Math.sqrt(n*n+i*i)}can_place_eye(t){var e=this;return this.eyes.every((function(n){return e.eye_distance(n,t)>=n.sz+t.sz+5}))}random_color(){return"hsl("+360*Math.random()+", "+Math.round(50+50*Math.random())+"%, "+Math.round(30+40*Math.random())+"%)"}onmousemove(t){let e=document.getElementById("eyes").getBoundingClientRect();return this.mx=t.pageX-e.x,this.my=t.pageY-e.y}constructor(){super(...arguments);let t=window.innerHeight,e=window.innerWidth;this.mx=Math.random()*e,this.my=Math.random()*t,this.eyes=[];for(let n=1;n<=1e3;n++){let n=20+60*Math.random(),i={x:n+Math.random()*(e-2*n),y:n+Math.random()*(t-2*n),sz:n,color:this.random_color()};this.can_place_eye(i)&&this.eyes.push(i)}}render(){var t,e,n,i,s,r,o,h,a,l,u,c=this._ns_||"";(t=this).open$(),e=n=1,1===t[lt]||(e=n=0,t[lt]=1),e||(t.id="eyes"),e||t.on$("mousemove",{onmousemove:!0},this),(i=t[ut])||(t[ut]=i=imba.createIndexedFragment(384,t)),s=0,r=i.$;for(let t=0,e=(u=this.eyes)?u.toIterable?u.toIterable():u:[],n=e.length;t<n;t++){let n=e[t];h=a=1,(o=r[s])||(h=a=0,r[s]=o=imba.createComponent("spooky-eye",i,""+c,null)),h||(o.up$=i),n===o[ct]||(o.data=o[ct]=n),(l=this.mx)===o[dt]||(o.mx=o[dt]=l),(l=this.my)===o[mt]||(o.my=o[mt]=l),h||!o.setup||o.setup(a),o.end$(a),s++}return i.end$(s),t.close$(n),t}}imba.tags.define("app-root",ft,{})},function(t,e){}]);