(this.webpackJsonpexchange=this.webpackJsonpexchange||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),o=(a(11),a(1)),u=(a(12),a(13),a(2)),l=a.n(u),i=a(3),m=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangeratesapi.io/latest");case 2:return t=e.sent,e.next=5,t.json();case 5:return(a=e.sent).rates.EUR=1,e.abrupt("return",a.rates);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangeratesapi.io/latest");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var f=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),l=u[0],i=u[1],f=Object(n.useState)(""),v=Object(o.a)(f,2),h=v[0],d=v[1],g=Object(n.useState)("EUR"),E=Object(o.a)(g,2),b=E[0],w=E[1],j=Object(n.useState)("USD"),O=Object(o.a)(j,2),x=O[0],y=O[1],N=Object(n.useState)(""),k=Object(o.a)(N,2),S=k[0],M=k[1];Object(n.useEffect)((function(){p().then((function(e){c(e)})).catch(null),m().then((function(e){M(e)})).catch(null)}),[]);var U=function(e){e.target.select()},C=new Date;return r.a.createElement("div",{id:"main-react-exchange-app"},r.a.createElement("div",{className:"current"},r.a.createElement("div",{className:"rate-1"},"1 ",b," equally"),r.a.createElement("div",{className:"rate-2"},Math.floor(S[x]/S[b]*1e5)/1e5," ",x),r.a.createElement("div",{className:"date"},a?a.date:""," ",C.getHours()+":"+function(e){return(e.getMinutes()<10?"0":"")+e.getMinutes()}(C))),r.a.createElement("div",{className:"input-metods"},r.a.createElement("div",{className:"inputs"},r.a.createElement("input",{className:"first-input",value:Math.floor(100*l)/100,onFocus:U,onChange:function(e){i(e.target.value),d(S[x]/S[b]*e.target.value)},type:"number"}),r.a.createElement("input",{className:"second-input",value:Math.floor(100*h)/100,onFocus:U,onChange:function(e){d(e.target.value),i(e.target.value/(S[x]/S[b]))},type:"number"})),r.a.createElement("div",{className:"selects"},r.a.createElement("div",null,r.a.createElement("select",{className:"first-select",onChange:function(e){w(e.target.value),d(S[x]/S[e.target.value]*l)}},Object.keys(S).sort().sort((function(e,t){return"EUR"===e?-1:"EUR"===t?1:0})).map((function(e){return r.a.createElement("option",{key:Object.keys(S).indexOf(e)},e)}))),r.a.createElement("span",{className:"arrow-down"},r.a.createElement("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M7 10l5 5 5-5z"})))),r.a.createElement("div",null,r.a.createElement("select",{className:"second-select",onChange:function(e){y(e.target.value),d(S[e.target.value]/S[b]*l)}},Object.keys(S).sort().sort((function(e,t){return"USD"===e?-1:"USD"===t?1:0})).map((function(e){return r.a.createElement("option",{key:Object.keys(S).indexOf(e)},e)}))),r.a.createElement("span",{className:"arrow-down"},r.a.createElement("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M7 10l5 5 5-5z"})))))),r.a.createElement("a",{className:"provided",href:"//exchangeratesapi.io"},"Currency data provided by exchangeratesapi.io"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.08cad3be.chunk.js.map