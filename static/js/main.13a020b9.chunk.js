(this["webpackJsonpreact-gomoku"]=this["webpackJsonpreact-gomoku"]||[]).push([[0],{17:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var r,c,a=t(0),i=t(9),o=t.n(i),s=(t(17),t(4)),u=t(2),b=t(3),j=t(1),d=b.a.div(r||(r=Object(u.a)(["\n  position: absolute;\n  z-index: 1;\n  padding: 0.75rem;\n  border-radius: 50%;\n\n  background: ","\n"])),(function(e){return"black"===e.square?"#000":"white"===e.square?"#fff":"transparent"}));function l(e){var n=e.square,t=e.boardRowIndex,r=e.squareIndex,c=e.onClick;return Object(j.jsx)(d,{square:n,onClick:c(t,r)})}var O,x=b.a.div(c||(c=Object(u.a)(["\n  background: #d5b092; \n  position: relative;\n  display: inline-block;\n  border: 1px solid black;\n  padding: 0.75rem;\n"])));function f(e){var n=e.square,t=e.boardRowIndex,r=e.squareIndex,c=e.onClick;return Object(j.jsx)(x,{children:r>=y-1||t>=S-1?"":Object(j.jsx)(l,{square:n,boardRowIndex:t,squareIndex:r,onClick:c})})}var h,v,m,p,k,g,q,w=b.a.div(O||(O=Object(u.a)(["\n  margin-bottom: -4px;  // \u62b5\u92b7\u5947\u602a\u7684 margin\n"])));function I(e){var n=e.row,t=e.boardRowIndex,r=e.onClick;return Object(j.jsx)(w,{children:n.map((function(e,n){return Object(j.jsx)(f,{square:e,squareIndex:n,boardRowIndex:t,onClick:r},"squareKey".concat(n))}))})}function C(e){var n=e.squares,t=e.onClick;return Object(j.jsx)("div",{children:n.map((function(e,n){return Object(j.jsx)(I,{row:e,boardRowIndex:n,onClick:t},"rowKey".concat(n))}))})}for(var y=19,S=19,R=b.a.div(h||(h=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  gap: 2rem;\n"]))),z=b.a.div(v||(v=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n"]))),G=b.a.div(m||(m=Object(u.a)(["\n  text-align: center;\n"]))),J=b.a.h1(p||(p=Object(u.a)(["\n  font-size: 3rem\n"]))),B=b.a.h2(k||(k=Object(u.a)(["\n  font-size: 2rem;\n"]))),E=b.a.div(g||(g=Object(u.a)([""]))),K=b.a.div(q||(q=Object(u.a)(["\n  width: 15rem;\n  font-size: 1.5rem;\n  text-transform: capitalize;\n"]))),N=[],W=0;W<S;W++){for(var M=[],A=0;A<y;A++)M.push(null);N.push(M)}function D(){var e=Object(a.useState)([{squares:N}]),n=Object(s.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(!0),i=Object(s.a)(c,2),o=i[0],u=i[1],b=Object(a.useState)(""),d=Object(s.a)(b,2),l=d[0],O=d[1],x=Object(a.useState)(""),f=Object(s.a)(x,2),h=f[0],v=f[1],m=Object(a.useState)(0),p=Object(s.a)(m,2),k=p[0],g=p[1],q=t[k].squares,w=function(e){return function(){g(e),u(!(e%2))}},I=t.map((function(e,n){var t=n?"Go to Move ".concat(n):"Go to Game Start";return Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:w(n),children:t})},n)}));Object(a.useEffect)((function(){O(h?"Winner is: \ud83c\udf89".concat(h,"\ud83c\udf89"):"\u55ef\uff5e\u4e0b\u9762\u4e00\u4f4d\uff1a".concat(o?"Black":"White"))}),[h,o]);return Object(j.jsxs)(R,{children:[Object(j.jsxs)(z,{children:[Object(j.jsxs)(G,{children:[Object(j.jsx)(J,{children:"\u4e94\u5b50\u68cb"}),Object(j.jsx)(B,{children:"Gomoku"})]}),Object(j.jsx)(C,{squares:q,onClick:function(e,n){return function(){if(!q[e][n]&&!h){var c=JSON.parse(JSON.stringify(t.slice(0,k+1))),a=q.slice();a[e][n]=o?"black":"white",r(c.concat([{squares:a}])),u(!o),g(c.length),v(F(a,e,n)?a[e][n]:"")}}}})]}),Object(j.jsxs)(E,{children:[Object(j.jsx)(K,{children:l}),Object(j.jsx)("ol",{children:I})]})]})}var F=function(e,n,t){return H(e,t,n,1,0)+H(e,t,n,-1,0)>=4||H(e,t,n,0,1)+H(e,t,n,0,-1)>=4||H(e,t,n,-1,-1)+H(e,t,n,1,1)>=4||H(e,t,n,1,-1)+H(e,t,n,-1,1)>=4},H=function(e,n,t,r,c){for(var a=e[t][n],i=n+r,o=t+c,s=0;e[o][i]===a;)s++,i+=r,o+=c;return s};o.a.render(Object(j.jsx)(D,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.13a020b9.chunk.js.map