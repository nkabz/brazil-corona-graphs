(this["webpackJsonpbrazil-corona-graphs"]=this["webpackJsonpbrazil-corona-graphs"]||[]).push([[0],{156:function(e,t,a){e.exports=a(269)},161:function(e,t,a){},162:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(138),c=a.n(o);a(161),a(162),a(163);var i=function(){return r.a.createElement("div",{className:"p-8 text-center text-3xl text-blue-800 shadow-xs font-thin"},"Novo Coronavirus (Covid-19) - Brasil")},l=a(97),s=a.n(l),u=a(139),d=a(57),m=a(280),f=a(283),h=a(284),p=a(288),b=a(286),E=a(282),x=a(279),v=a(281),g=a(140),y=a(95),w=a.n(y);function j(){return fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(e){return e.Brazil}))}var k=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(),i=Object(d.a)(c,2),l=i[0],y=i[1],k=Object(n.useState)(),O=Object(d.a)(k,2),S=O[0],z=O[1],C=Object(n.useState)(window.innerWidth),N=Object(d.a)(C,2),L=N[0],M=N[1],Y=function(e){M(e.target.innerWidth)};function B(){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,o(t.map((function(e){return{x:e.date,y:e.confirmed}}))),y([{x:"Recuperados",y:t[t.length-1].recovered},{x:"Mortes",y:t[t.length-1].deaths},{x:"Confirmados",y:t[t.length-1].confirmed}]),z(L<500?Math.round(t.length/10+1):Math.round(t.length/5+1));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){B();var e=setInterval((function(){B()}),144e5);return function(){return clearInterval(e)}}),[]),Object(n.useEffect)((function(){return window.addEventListener("resize",Object(g.throttle)(Y,600)),function(){window.removeEventListener("resize",Y)}}),[]);var R=a?r.a.createElement(m.a,{theme:f.a.material,width:L,height:550,domainPadding:50,animate:{duration:2500,onLoad:{duration:400}},containerComponent:r.a.createElement(h.a,{labels:function(e){var t=e.datum;return"".concat(w()(t.x).format("DD-MMM-YYYY").toString(),"\nConfirmados: ").concat(t.y)},labelComponent:r.a.createElement(p.a,{cornerRadius:5,flyoutStyle:{stroke:"#d7d7d7",fill:"none"}})})},r.a.createElement(b.a,{tickCount:S,tickLabelComponent:r.a.createElement(E.a,{angle:-35,dy:10,style:{data:{fontSize:32}}})}),r.a.createElement(b.a,{style:{tickLabels:{fontSize:16}},dependentAxis:!0}),r.a.createElement(x.a,{data:a,style:{data:{stroke:"#c43a31"},labels:{fill:"#c43a31",fontSize:20,padding:5}}})):null,W=a?r.a.createElement(m.a,{theme:f.a.material,height:550,width:L,domainPadding:100,animate:{duration:1e3,onLoad:{duration:500}}},r.a.createElement(b.a,{style:{tickLabels:{fontSize:16}}}),r.a.createElement(b.a,{dependentAxis:!0,style:{tickLabels:{fontSize:16}}}),r.a.createElement(v.a,{data:l,style:{data:{fill:"#c43a31",stroke:"black",strokeWidth:1}},labels:function(e){return e.datum.y},labelComponent:r.a.createElement(E.a,{dy:-10,style:{data:{fontSize:20}}})})):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-12"},r.a.createElement("h1",{className:"text-xl text-gray-600 mx-auto text-center"},"N\xfamero de casos / Tempo"),R),r.a.createElement("div",{className:"mt-20"},r.a.createElement("h1",{className:"text-xl text-gray-600 mx-auto text-center"}," Rela\xe7\xe3o entre Confirmados, recuperados e mortes"),W))};var O=function(){return r.a.createElement("div",{className:"grid "},r.a.createElement(i,null),r.a.createElement("div",{className:"w-full p-2 md:w-10/12 grid grid-cols-1 mx-auto"},r.a.createElement(k,null)))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.c7b101ab.chunk.js.map