(this["webpackJsonpbrazil-corona-graphs"]=this["webpackJsonpbrazil-corona-graphs"]||[]).push([[0],{157:function(e,t,a){e.exports=a(270)},162:function(e,t,a){},163:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(138),i=a.n(c);a(162),a(163),a(164);var o=function(){return r.a.createElement("div",{className:"p-8 w-full text-center text-3xl text-blue-800 shadow-xs font-thin"},"Novo Coronavirus (Covid-19) - Brasil")},s=a(96),l=a.n(s),m=a(139),d=a(99),u=a(140);function f(){return fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(e){return e.Brazil}))}var p=a(94),h=a.n(p),E=a(280),x=a(283),v=a(284),b=a(288),y=a(286),g=a(282),w=a(279),C={confirmed:"Confirmados",cases:"Confirmados",deaths:"Mortes",refuses:"Descartados",recovered:"Recuperados"};function D(e,t){return Object.keys(e).map((function(a){return{x:e[a].date,y:e[a][t],name:t}}))}function S(e){var t=e.width,a=e.mapData,n=D(a,"confirmed"),c=D(a,"deaths");return r.a.createElement(E.a,{theme:x.a.material,width:t,height:550,domainPadding:50,animate:{duration:2e3,onLoad:{duration:1e3}},containerComponent:r.a.createElement(v.a,{labels:function(e){var t,a=e.datum;return"".concat(h()(a.x,"YYYY/MM/DD").format("DD-MM-YYYY"),"\n").concat((t=a.name,C[t]),": ").concat(a.y)},labelComponent:r.a.createElement(b.a,{cornerRadius:5,flyoutStyle:{stroke:"#d7d7d7",fill:"white"}})})},r.a.createElement(y.a,{tickCount:5,tickLabelComponent:r.a.createElement(g.a,{angle:-35,dy:10,style:{data:{fontSize:32}}})}),r.a.createElement(y.a,{style:{tickLabels:{fontSize:16}},dependentAxis:!0}),r.a.createElement(w.a,{data:n,style:{data:{stroke:"#00279c"},labels:{fill:"#00279c",fontSize:20,padding:5}}}),r.a.createElement(w.a,{data:c,style:{data:{stroke:"#9c000a"},labels:{fill:"#9c000a",fontSize:20,padding:5}}}))}var k=a(281);function N(e){var t,a,n=e.width,c=e.mapData,i=(t=c,a="confirmed",Object.keys(t).filter((function(e){return t[e][a]>0})).map((function(e,a){return{x:a+1,y:t[e].confirmed-t[e-1].confirmed}})));return r.a.createElement(E.a,{theme:x.a.material,width:n,height:550,domainPadding:50,animate:{duration:2e3,onLoad:{duration:1e3}}},r.a.createElement(y.a,{tickCount:5,tickLabelComponent:r.a.createElement(g.a,{style:{data:{fontSize:32}}})}),r.a.createElement(y.a,{style:{tickLabels:{fontSize:16}},dependentAxis:!0}),r.a.createElement(k.a,{data:i,labels:function(e){return e.datum.y},style:{labels:{fill:"black",fontSize:function(){return n<500?16:14}}},labelComponent:r.a.createElement(g.a,{dy:-15})}))}var _=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(window.innerWidth),o=Object(d.a)(i,2),s=o[0],p=o[1],h=function(e){p(e.target.innerWidth)};function E(){return x.apply(this,arguments)}function x(){return(x=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,console.log(t),c(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){E();var e=setInterval((function(){E()}),144e5);return function(){return clearInterval(e)}}),[]),Object(n.useEffect)((function(){return window.addEventListener("resize",Object(u.throttle)(h,600)),function(){window.removeEventListener("resize",h)}}),[]);var v=a?r.a.createElement(S,{width:s,mapData:a}):null,b=a?r.a.createElement(N,{width:s,mapData:a}):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-12"},r.a.createElement("h1",{className:"text-xl text-gray-600 mx-auto text-center"},"N\xfamero de casos / Tempo"),v),r.a.createElement("div",{className:"mt-20"},r.a.createElement("h1",{className:"text-xl text-gray-600 mx-auto text-center"}," N\xfamero de casos / Dia"),r.a.createElement("h3",{className:"text-xs text-gray-500 mx-auto text-center"},"Desde o primeiro caso"),b))};var j=function(){return r.a.createElement("div",{className:"grid min-h-screen",style:{placeItems:"center"}},r.a.createElement(o,null),r.a.createElement("div",{className:"w-full p-2 md:w-10/12 grid grid-cols-1"},r.a.createElement(_,null)),r.a.createElement("div",{className:"my-16"},r.a.createElement("p",{className:"text-xs text-gray-600 text-center opacity-75"},"Dados coletados de ",r.a.createElement("a",{className:"text-blue-700",href:"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series"},"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series")),r.a.createElement("p",{className:"text-xs font-semibold text-gray-800 text-center my-8"},"#FiqueEmCasa")))};document.title="Covid-19 Brasil",i.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.42761bb4.chunk.js.map