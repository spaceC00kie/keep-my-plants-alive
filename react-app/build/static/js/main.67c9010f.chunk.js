(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{10:function(t,n,e){},12:function(t,n,e){"use strict";e.r(n);var c=e(1),r=e.n(c),i=e(3),u=e.n(i),o=(e(9),e.p,e(10),e(4)),s=e(0),j=function(){var t=Object(c.useState)(""),n=Object(o.a)(t,2),e=n[0],r=n[1],i=function(){fetch("http://10.0.0.6:8080/sensor").then((function(t){return t.json()})).then((function(t){return r(t.isWet?"wet":"dry")}))};return Object(c.useEffect)(i,[]),Object(s.jsxs)("div",{children:[e," ",Object(s.jsx)("br",{}),Object(s.jsx)("button",{onClick:function(){return i()},children:"Update"})]})};var a=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(j,{})})},b=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,13)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,u=n.getTTFB;e(t),c(t),r(t),i(t),u(t)}))};u.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(a,{})}),document.getElementById("root")),b()},9:function(t,n,e){}},[[12,1,2]]]);
//# sourceMappingURL=main.67c9010f.chunk.js.map