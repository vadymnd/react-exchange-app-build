(this.webpackJsonpexchange=this.webpackJsonpexchange||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),l=(a(11),a(1)),o=(a(12),a(13),a(2)),u=a.n(o),i=a(3),m=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangeratesapi.io/latest");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.rates);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangeratesapi.io/latest");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var f=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),o=Object(l.a)(s,2),u=o[0],i=o[1],f=Object(n.useState)(null),v=Object(l.a)(f,2),h=v[0],d=v[1],g=Object(n.useState)("EUR"),w=Object(l.a)(g,2),E=w[0],b=(w[1],Object(n.useState)("CAD")),j=Object(l.a)(b,2),x=j[0],O=j[1],N=Object(n.useState)(""),y=Object(l.a)(N,2),k=y[0],M=y[1];Object(n.useEffect)((function(){p().then((function(e){c(e)})).catch(null),m().then((function(e){M(e)})).catch(null)}),[]);var S=function(e){e.target.select()};return r.a.createElement("div",{id:"main-react-exchange-app"},r.a.createElement("div",{className:"current"},r.a.createElement("div",{className:"rate-1"},"1 ",x," equally"),r.a.createElement("div",{className:"rate-2"},Math.floor(100*k[x])/100," ",E),r.a.createElement("div",{className:"date"},a?a.date:""," ",(new Date).getHours()+":"+(new Date).getMinutes())),r.a.createElement("div",{className:"input-metods"},r.a.createElement("div",{className:"inputs"},r.a.createElement("input",{className:"first-input",value:Math.floor(100*u)/100,onFocus:S,onChange:function(e){i(e.target.value),d(e.target.value*k[x])},type:"number"}),r.a.createElement("input",{className:"second-input",value:Math.floor(100*h)/100,onFocus:S,onChange:function(e){d(e.target.value),i(e.target.value/k[x])},type:"number"})),r.a.createElement("div",{className:"selects"},r.a.createElement("div",null,r.a.createElement("select",{className:"first-select"},r.a.createElement("option",null,E)),r.a.createElement("span",{className:"arrow-down"},r.a.createElement("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M7 10l5 5 5-5z"})))),r.a.createElement("div",null,r.a.createElement("select",{className:"second-select",onChange:function(e){O(e.target.value),d(u*k[e.target.value])}},Object.keys(k).map((function(e){return r.a.createElement("option",{key:Object.keys(k).indexOf(e)},e)}))),r.a.createElement("span",{className:"arrow-down"},r.a.createElement("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M7 10l5 5 5-5z"})))))),r.a.createElement("a",{className:"provided",href:"//exchangeratesapi.io"},"Currency data provided by exchangeratesapi.io"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.cb2bb14c.chunk.js.map