(this["webpackJsonpreact-gomoku"]=this["webpackJsonpreact-gomoku"]||[]).push([[0],{17:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r,a,c=t(0),i=t(9),o=t.n(i),s=(t(17),t(4)),d=t(2),u=t(3),j=Object(c.createContext)(),b=Object(c.createContext)(),x=Object(c.createContext)(),l=t(1),O=u.a.div(r||(r=Object(d.a)(["\n  position: absolute;\n  z-index: 1;\n  padding: 1rem;\n  border-radius: 50%;\n\n  &:hover {\n    background: ",";\n  }\n\n  background: ",";\n\n  @media screen and (max-width: 1024px) {\n    & {\n      padding: 0.75rem;\n    }\n  }\n"])),(function(n){var e=n.square,t=n.isBlackNext,r=n.winner;if(!e&&!r)return t?"#0008":"#fff8"}),(function(n){return n.square}));function m(n){var e=n.square,t=n.boardRowIndex,r=n.squareIndex,a=Object(c.useContext)(j),i=Object(c.useContext)(b),o=Object(c.useContext)(x);return Object(l.jsx)(O,{square:e,onClick:function(){return i(t,r)},isBlackNext:a,winner:o})}var h,f=u.a.div(a||(a=Object(d.a)(["\n  background: #d5b092;\n  position: relative;\n  display: inline-block;\n  border: 1px solid white;\n  padding: 1rem;\n\n  @media screen and (max-width: 1024px) {\n    & {\n      padding: 0.75rem;\n    }\n  }\n"])));function p(n){var e=n.square,t=n.boardRowIndex,r=n.squareIndex;return Object(l.jsx)(f,{children:r>=K-1||t>=E-1?"":Object(l.jsx)(m,{square:e,boardRowIndex:t,squareIndex:r})})}var v,g,w=u.a.div(h||(h=Object(d.a)(["\n  margin-bottom: -4px;  // \u62b5\u92b7\u5947\u602a\u7684 margin\n"])));function k(n){var e=n.row,t=n.boardRowIndex;return Object(l.jsx)(w,{children:e.map((function(n,e){return Object(l.jsx)(p,{square:n,squareIndex:e,boardRowIndex:t},"squareKey".concat(e))}))})}function q(n){var e=n.squares;return Object(l.jsx)("div",{children:e.map((function(n,e){return Object(l.jsx)(k,{row:n,boardRowIndex:e},"rowKey".concat(e))}))})}var I=u.a.ol(v||(v=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 0 0.25rem;\n  height: 50vh;\n  overflow: auto;\n\n  @media screen and (max-width: 900px) {\n    & {\n      flex-direction: row;\n      max-height: 10rem;\n    }\n  }\n"]))),y=u.a.button(g||(g=Object(d.a)(["\n  border: none;\n  background: none;\n  padding: 0.25rem;\n  cursor: pointer;\n\n  &:hover {\n    background: #aaa;\n  }\n"])));function R(n){var e=n.history,t=n.setRound,r=n.setWinner,a=n.setIsBlackNext,c=e.map((function(n,e){var c=e?"Move ".concat(e):"Restart";return Object(l.jsx)("li",{children:Object(l.jsx)(y,{onClick:function(){return function(n){t(n),a(!(n%2)),r("")}(e)},children:c})},e)}));return Object(l.jsx)(I,{children:c})}for(var C,N,B,S,z,J,W,P=function(n,e,t,r,a){for(var c=n[t][e],i=e+r,o=t+a,s=0;i>=0&&o>=0&&n[o][i]===c;)s++,i+=r,o+=a;return s},K=19,E=19,G=u.a.div(C||(C=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  gap: 2rem;\n\n  @media screen and (max-width: 900px) {\n    & {\n      flex-direction: column;\n      height: auto;\n    }\n  }\n"]))),M=u.a.div(N||(N=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n  min-width: 494px;\n"]))),A=u.a.div(B||(B=Object(d.a)(["\n  text-align: center;\n"]))),D=u.a.h1(S||(S=Object(d.a)(["\n  font-size: 3rem\n"]))),F=u.a.h2(z||(z=Object(d.a)(["\n  font-size: 2rem;\n"]))),H=u.a.div(J||(J=Object(d.a)(["\n  margin-top: 9rem;\n\n  @media screen and (max-width: 900px) {\n    & {\n      margin-top: 1rem;\n    }\n  }\n"]))),L=u.a.div(W||(W=Object(d.a)(["\n  width: 20rem;\n  font-size: 1.5rem;\n  text-transform: capitalize;\n  margin-bottom: 0.5rem;\n"]))),Q=[],T=0;T<E;T++){for(var U=[],V=0;V<K;V++)U.push(null);Q.push(U)}function X(){var n=Object(c.useState)((function(){return[{squares:Q}]})),e=Object(s.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)(!0),i=Object(s.a)(a,2),o=i[0],d=i[1],u=Object(c.useState)(""),O=Object(s.a)(u,2),m=O[0],h=O[1],f=Object(c.useState)(0),p=Object(s.a)(f,2),v=p[0],g=p[1],w=m?"Winner is: \ud83c\udf89".concat(m,"\ud83c\udf89"):"Next is\uff1a".concat(o?"Black":"White"),k=t[v].squares;return Object(l.jsxs)(G,{children:[Object(l.jsxs)(M,{children:[Object(l.jsxs)(A,{children:[Object(l.jsx)(D,{children:"\u4e94\u5b50\u68cb"}),Object(l.jsx)(F,{children:"Gomoku"})]}),Object(l.jsx)(j.Provider,{value:o,children:Object(l.jsx)(b.Provider,{value:function(n,e){if(!k[n][e]&&!m){var a=JSON.parse(JSON.stringify(t.slice(0,v+1))),c=k.slice();c[n][e]=o?"black":"white",r(a.concat([{squares:c}])),d(!o),g(a.length),h(function(n,e,t){return P(n,t,e,1,0)+P(n,t,e,-1,0)>=4||P(n,t,e,0,1)+P(n,t,e,0,-1)>=4||P(n,t,e,-1,-1)+P(n,t,e,1,1)>=4||P(n,t,e,1,-1)+P(n,t,e,-1,1)>=4}(c,n,e)?c[n][e]:"")}},children:Object(l.jsx)(x.Provider,{value:m,children:Object(l.jsx)(q,{squares:k})})})})]}),Object(l.jsxs)(H,{children:[Object(l.jsx)(L,{children:w}),Object(l.jsx)(R,{history:t,setRound:g,setWinner:h,setIsBlackNext:d})]})]})}o.a.render(Object(l.jsx)(X,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.96bb6885.chunk.js.map