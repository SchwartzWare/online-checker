webpackJsonp([1],{"L/ol":function(n,e){},M93x:function(n,e,t){"use strict";function o(n){t("nQsa"),this.app=t("sRD9")}var i=t("xJD8"),a=t("yeDc"),r=t("VU/8"),c=o,s=r(i.a,a.a,c,null,null);e.a=s.exports},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("7+uW"),i=t("M93x"),a=t("YaEn");o.a.config.productionTip=!1,new o.a({el:"#app",router:a.a,template:"<App/>",components:{App:i.a}})},RrWU:function(n,e,t){"use strict";function o(n){t("L/ol")}var i=t("ZJ2Q"),a=t("VsT/"),r=t("VU/8"),c=o,s=r(i.a,a.a,c,"data-v-1ba85b2e",null);e.a=s.exports},"VsT/":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;return(n._self._c||e)("div",{class:[n.isOnline?"online":"offline"],attrs:{id:"connectionStateDisplay"},on:{click:n.toggleState}})},i=[],a={render:o,staticRenderFns:i};e.a=a},YaEn:function(n,e,t){"use strict";var o=t("7+uW"),i=t("/ocq"),a=t("RrWU");o.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"ConnectionStateDisplay",component:a.a}]})},ZJ2Q:function(n,e,t){"use strict";var o=t("//Fk"),i=t.n(o);e.a={data:function(){return{isOnline:!1,onlineAudio:new Audio("./static/audio/online.wav"),offlineAudio:new Audio("./static/audio/offline.wav")}},methods:{onOnline:function(){this.isOnline=!0,this.onlineAudio.currentTime=0,this.onlineAudio.play(),this.$emit("changeBodyColor",["#4caf50"])},onOffline:function(){this.isOnline=!1,this.offlineAudio.currentTime=0,this.offlineAudio.play(),this.$emit("changeBodyColor",["#f44336"])},toggleState:function(){this.isOnline?this.onOffline():this.onOnline()},approveOnlineState:function(){return new i.a(function(n,e){var t=new XMLHttpRequest;t.open(XMLHttpRequest.GET,"http://google.com"),t.onreadystatechange=function(){t.readyState===XMLHttpRequest.HEADERS_RECEIVED&&(t.abort(),n())},t.onerror=function(n){e()},t.send()})},checkOnline:function(){return new i.a(function(n,e){var t=new Image;t.onload=function(){n()},t.onerror=function(){e()},t.src="http://via.placeholder.com/1x1?"+(new Date).getTime()})},beep:function(){}},mounted:function(){var n=this;this.onOffline(),setInterval(function(){n.checkOnline().then(function(){n.isOnline||n.onOnline()}).catch(function(){n.isOnline&&n.onOffline()})},1e3)},beforeDestroy:function(){window.removeEventListener("online",this.onOnline),window.removeEventListener("offline",this.onOffline)}}},nQsa:function(n,e){},sRD9:function(n,e){},uMhA:function(n,e){},xJD8:function(n,e,t){"use strict";var o=t("uMhA");t.n(o);e.a={name:"app",data:function(){return{firstBackgroundChangeRequested:!1}},methods:{changeBodyColor:function(n){console.log(n),this.firstBackgroundChangeRequested&&document.body.classList.add("transition__background-color"),document.body.style.backgroundColor=n,this.firstBackgroundChangeRequested=!0}},mounted:function(){window.onerror=function(n,e,t,o,i){console.log("Error")}}}},yeDc:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"no-select",attrs:{id:"app"}},[t("router-view",{on:{changeBodyColor:n.changeBodyColor}})],1)},i=[],a={render:o,staticRenderFns:i};e.a=a}},["NHnr"]);
//# sourceMappingURL=app.f50c255c6daa17044088.js.map