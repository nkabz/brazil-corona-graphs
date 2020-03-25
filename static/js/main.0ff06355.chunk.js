(this["webpackJsonpbrazil-corona-graphs"]=this["webpackJsonpbrazil-corona-graphs"]||[]).push([[0],{159:function(e,t,a){e.exports=a(272)},164:function(e,t,a){},165:function(e,t,a){},272:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(141),o=a.n(c);a(164),a(165),a(166);var i=function(){return r.a.createElement("div",{className:"p-8 w-full text-center text-3xl text-blue-800 shadow-xs font-thin"},"Novo Coronavirus (Covid-19) - Brasil")},l=a(98),s=a.n(l),m=a(142),d=a(101),u=a(143);function f(){return fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(e){return e.Brazil}))}var x=a(57),h=a.n(x),p=a(282),E=a(285),b=a(286),v=a(290),g=a(288),y=a(284),D=a(281),w={confirmed:"Confirmados",cases:"Confirmados",deaths:"Mortes",refuses:"Descartados",recovered:"Recuperados"};function C(e,t){return Object.keys(e).map((function(a){return{x:e[a].date,y:e[a][t],name:t}})).filter((function(e){return e.y>0}))}function Y(e){var t=e.width,a=e.mapData,n=C(a,"confirmed"),c=C(a,"deaths");return r.a.createElement(p.a,{theme:E.a.material,width:t,height:550,domainPadding:50,padding:60,animate:{duration:2e3,onLoad:{duration:1e3}},containerComponent:r.a.createElement(b.a,{labels:function(e){var t,a=e.datum;return"".concat(h()(a.x,"YYYY/MM/DD").format("DD-MM-YYYY"),"\n").concat((t=a.name,w[t]),": ").concat(a.y)},labelComponent:r.a.createElement(v.a,{cornerRadius:5,flyoutStyle:{stroke:"#d7d7d7",fill:"white"}})})},r.a.createElement(g.a,{tickCount:5,tickFormat:function(e){return"".concat(h()(e,"YYYY/MM/DD").format("DD-MM"),"\n").concat(h()(e,"YYYY/MM/DD").format("YYYY"))},tickLabelComponent:r.a.createElement(y.a,{style:{data:{fontSize:32}}})}),r.a.createElement(g.a,{style:{tickLabels:{fontSize:16}},dependentAxis:!0}),r.a.createElement(D.a,{data:n,style:{data:{stroke:"rgba(52, 158, 235, 1)",fill:"rgba(52, 158, 235, 0.2)"},labels:{fill:"rgba(52, 158, 235, 1)",fontSize:20,padding:5}}}),r.a.createElement(D.a,{data:c,style:{data:{stroke:"rgba(230, 48, 78, 1)",fill:"rgba(230, 48, 78, 0.4)"},labels:{fill:"rgba(230, 48, 78, 1)",fontSize:20,padding:5}}}))}var N=a(283);function k(e){var t=e.width,a=e.mapData,n=e.type,c=e.graphColor,o=function(e,t){return Object.keys(e).filter((function(a){return e[a][t]>0})).map((function(a,n){return{x:n+1,y:e[a][t]-e[a-1][t]}}))}(a,n),i=function(e){for(var t=0,a=1;a<e.length;a++){t+=0===e[a-1].y?0:(e[a].y-e[a-1].y)/e[a-1].y}return(t/e.length*100).toFixed(2)}(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{theme:E.a.material,width:t,height:550,domainPadding:50,animate:{duration:2e3,onLoad:{duration:1e3}}},r.a.createElement(g.a,{tickCount:5,tickLabelComponent:r.a.createElement(y.a,{style:{data:{fontSize:32}}})}),r.a.createElement(g.a,{style:{tickLabels:{fontSize:16}},dependentAxis:!0}),r.a.createElement(N.a,{data:o,labels:function(e){return e.datum.y},style:{labels:{fill:"rgba(".concat(c,", 1)"),fontSize:function(){return t<500?8:16}},data:{fill:"rgba(".concat(c,", 0.5)"),stroke:"rgba(".concat(c,", 1)"),strokeWidth:1}},labelComponent:r.a.createElement(y.a,{dy:-15})})),r.a.createElement("div",{className:"text-center italic"},r.a.createElement("p",{className:"text-xs text-gray-700 font-thin"},"Aumento Percentual m\xe9dio: ",r.a.createElement("span",{className:"text-xs font-bold ml-1",style:{color:"rgba(".concat(c,", 1)")}},i,"%"))))}var S=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(window.innerWidth),i=Object(d.a)(o,2),l=i[0],x=i[1],h=function(e){x(e.target.innerWidth)};function p(){return E.apply(this,arguments)}function E(){return(E=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){p();var e=setInterval((function(){p()}),144e5);return function(){return clearInterval(e)}}),[]),Object(n.useEffect)((function(){return window.addEventListener("resize",Object(u.throttle)(h,600)),function(){window.removeEventListener("resize",h)}}),[]);var b=a?r.a.createElement(Y,{width:l,mapData:a}):null,v=a?r.a.createElement(k,{width:l,mapData:a,type:"confirmed",graphColor:"52, 158, 235"}):null,g=a?r.a.createElement(k,{width:l,mapData:a,type:"deaths",graphColor:"230, 48, 78"}):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-12"},r.a.createElement("h1",{className:"text-xl text-gray-600 mx-auto text-center"},"Evolu\xe7\xe3o Covid-19 / Dia"),b),r.a.createElement("div",{className:"mt-20"},r.a.createElement("h1",{className:"text-xl text-blue-600 mx-auto text-center"},"Incremento no n\xfamero de casos confirmados / Dia"),r.a.createElement("h3",{className:"text-xs text-blue-400 mx-auto text-center"},"Desde o primeiro caso"),v),r.a.createElement("div",{className:"mt-20"},r.a.createElement("h1",{className:"text-xl text-red-600 mx-auto text-center"},"Incremento no n\xfamero de mortes / Dia"),r.a.createElement("h3",{className:"text-xs text-red-400 mx-auto text-center"},"Desde a primeira morte"),g))};var _=function(){return r.a.createElement("div",{className:"grid min-h-screen",style:{placeItems:"center"}},r.a.createElement(i,null),r.a.createElement("div",{className:"w-full p-2 md:w-10/12 grid grid-cols-1"},r.a.createElement(S,null)),r.a.createElement("div",{className:"my-16"},r.a.createElement("p",{className:"text-xs text-gray-600 text-center opacity-75"},"Dados coletados de ",r.a.createElement("a",{className:"text-blue-700",href:"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series"},"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series")),r.a.createElement("p",{className:"text-xs font-semibold text-gray-800 text-center my-8"},"#FiqueEmCasa")))};document.title="Covid-19 Brasil",o.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.0ff06355.chunk.js.map