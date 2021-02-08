(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var r,i,o,a,d,c,s=t(0),l=t.n(s),b=t(6),p=t.n(b),u=t(3),h=t(4),x={primary:"#0079bf",secondary:"#172b4d",light_gray:"#ebecf0",text:"#FFFFFF",secondary_text:"#5e6c84"},g=Object(h.a)(r||(r=Object(u.a)(["\n\n *{\n    margin: 0;\n    padding:0;\n    outline:0;\n    box-sizing: border-box;\n  }\n  html, border-style, #root {\n    height: 100%;\n  }\n  button {\n    outline: 0;\n    border: 0;\n    cursor: pointer;\n  }\n  body{\n    font-family: 'Roboto', sans-serif;\n    background: ",";\n    color: ",";\n    -webkit-font-smoothing: antaliased !important;\n    font-size: 14px;\n  }\n  ul{\n    list-style: none;\n  }\n"])),x.primary,x.text),j=h.b.div(i||(i=Object(u.a)([""]))),f=t.p+"static/media/trello-logo-white.a9289ad2.svg",y=h.b.div(o||(o=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 42px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.15);\n  h1 {\n    font-size: 12px;\n    span.trello-logo {\n      background-image: url(",");\n      background-position: 100% 0;\n      background-repeat: no-repeat;\n      background-size: 80px 30px;\n      cursor: pointer;\n      display: inline-block;\n      height: 30px;\n      width: 80px;\n    }\n  }\n  p {\n    position: absolute;\n    right: 10px;\n  }\n"])),f),m=t(1),O=function(){return Object(m.jsxs)(y,{children:[Object(m.jsx)("h1",{children:Object(m.jsx)("span",{className:"trello-logo"})}),Object(m.jsx)("p",{children:"Clone desenvolvido por Jo\xe3o Victor Cabral"})]})},w=t(2),v=t(22),k=t(9),I=t(5),z=t(20),F=h.b.div(a||(a=Object(u.a)(["\n  background: #fff;\n  box-shadow: 0 1px 0 rgb(9, 30, 66, 0.25);\n  padding: 8px 10px;\n  border-radius: 3px;\n  transform: rotate(0deg);\n"]))),D=function(n){var e=n.index,t=n.content,r=n.card_id;return Object(m.jsx)(I.b,{draggableId:"card_id-".concat(r),index:e,children:function(n,e){return Object(m.jsx)(F,Object(w.a)(Object(w.a)(Object(w.a)({isDragging:e.isDragging,ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(m.jsx)("p",{children:t})}))}})},N=h.b.div(d||(d=Object(u.a)(["\n  background: ",";\n  padding: 5px 10px;\n  width: 272px;\n  margin: 10px 5px;\n  border-radius: 5px;\n  height: 100%;\n  min-height: 100px;\n  display: flex;\n  flex-direction: column;\n  div.list-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    h3 {\n      font-size: 16px;\n    }\n    button {\n      font-size: 18px;\n      border-radius: 3px;\n      width: 32px;\n      height: 32px;\n    }\n    button:hover {\n      background: rgba(0, 0, 0, 0.1);\n    }\n  }\n  div.cards-zone {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  }\n  footer {\n    margin-top: auto;\n    padding-top: 10px;\n    button.add-card {\n      border-radius: 3px;\n      display: flex;\n      width: 100%;\n      align-items: center;\n      font-size: 14px;\n      padding: 5px 8px;\n      color: ",";\n      p {\n        padding-left: 10px;\n      }\n    }\n    button:hover {\n      background: rgba(0, 0, 0, 0.1);\n      p {\n        color: ",";\n      }\n    }\n  }\n"])),x.light_gray,x.secondary_text,x.secondary),C=function(n){var e=n.groupIndex,t=n.name,r=n.cards;return Object(m.jsx)(I.b,{draggableId:"list-".concat(e),index:e,children:function(n){return Object(m.jsxs)(N,Object(w.a)(Object(w.a)({ref:n.innerRef},n.draggableProps),{},{children:[Object(m.jsxs)("div",Object(w.a)(Object(w.a)({className:"list-header"},n.dragHandleProps),{},{children:[Object(m.jsx)("h3",{children:t}),Object(m.jsx)("button",{type:"submit",children:Object(m.jsx)(k.a,{})})]})),Object(m.jsx)(I.c,{type:"CARD",droppableId:"group-".concat(e),children:function(n){return Object(m.jsxs)("div",Object(w.a)(Object(w.a)({className:"cards-zone",ref:n.innerRef},n.droppableProps),{},{children:[r.map((function(n,e){return Object(m.jsx)(D,{card_id:n.id,content:n.content,index:e},n.id)})),n.placeholder]}))}}),Object(m.jsx)("footer",{children:Object(m.jsxs)("button",{className:"add-card",type:"button",children:[Object(m.jsx)(k.b,{size:18})," ",Object(m.jsx)("p",{children:"Adicionar outro card"})]})})]}))}})},R=h.b.div(c||(c=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  padding: 10px 30px;\n  color: ",";\n\n  button.add-list {\n    display: flex;\n    margin: 10px 5px;\n    min-width: 272px;\n    height: 40px;\n    align-items: center;\n    padding: 0 10px;\n    font-size: 14px;\n    color: ",";\n    border-radius: 3px;\n    background: rgba(255, 255, 255, 0.2);\n    p {\n      padding-left: 7px;\n    }\n    transition: background 0.15s;\n  }\n  button.add-list:hover {\n    background: rgba(255, 255, 255, 0.35);\n  }\n  div.lists {\n    display: flex;\n    height: 100%;\n  }\n"])),x.secondary,x.text),J=[{id:"gjkdf",name:"Obiwan",cards:[{id:1,content:"You must do what you feel is right, of course."},{id:2,content:"Mos Eisley Spaceport. You will never find a more wretched hive of scum and villainy. We must be cautious."},{id:3,content:"Your eyes can deceive you. Don\u2019t trust them."},{id:4,content:"Remember... the Force will be with you, always."},{id:5,content:"In my experience, there is no such thing as luck."}]},{id:"dadas",name:"Darth Vader",cards:[{id:6,content:"I find your lack of faith disturbing."},{id:7,content:"The circle is now complete. When I left you, I was but the learner. Now I am the master."},{id:8,content:"The Force is with you, young Skywalker, but you are not a Jedi yet."}]},{id:"hkcsgcks",name:"Yoda",cards:[{id:9,content:"Do. Or do not. There is no try."},{id:10,content:"You must unlearn what you have learned."},{id:11,content:"When nine hundred years old you reach, look as good you will not."},{id:12,content:"Truly wonderful, the mind of a child is."},{id:13,content:"A Jedi uses the Force for knowledge and defense, never for attack."}]},{id:"asdw",name:"Darth Vader",cards:[{id:14,content:"I find your lack of faith disturbing."},{id:15,content:"The circle is now complete. When I left you, I was but the learner. Now I am the master."},{id:16,content:"The Force is with you, young Skywalker, but you are not a Jedi yet."}]},{id:"sdfsdc",name:"Luke",cards:[{id:17,content:"I'll never turn to the Dark Side. You've failed, your highness. I am a Jedi, like my father before me."},{id:18,content:"If there's a bright center to the universe, you're on the planet that it's farthest from."},{id:19,content:"The Force is strong in my family. My father has it. I have it. My sister has it. You have that power, too."}]}],M=function(){var n=Object(s.useState)(J),e=Object(v.a)(n,2),t=e[0],r=e[1],i=Object(s.useCallback)((function(n){var e=n.destination,i=n.source,o=n.type;if(e)if("CARD"===o){if(e.droppableId===i.droppableId&&i.index===e.index)return;var a=i.index,d=parseInt(i.droppableId.replace("group-",""),10),c=parseInt(e.droppableId.replace("group-",""),10),s=e.index,l=t,b=l[d].cards[a];l[d].cards.splice(a,1),l[c].cards.splice(s,0,b),r(l)}else if("COLUMN"===o){var p=i.index,u=e.index,h=t,x=h[p];h.splice(p,1),h.splice(u,0,x),r(t)}}),[t]);return Object(m.jsx)(I.a,{onDragEnd:i,children:Object(m.jsx)(z.Scrollbars,{autoHeight:!0,autoHeightMin:window.innerHeight-50,children:Object(m.jsxs)(R,{children:[Object(m.jsx)(I.c,{droppableId:"board",type:"COLUMN",direction:"horizontal",children:function(n){return Object(m.jsxs)("div",Object(w.a)(Object(w.a)({className:"lists",ref:n.innerRef},n.droppableProps),{},{children:[t.map((function(n,e){return Object(m.jsx)(C,{name:n.name,cards:n.cards,groupIndex:e},n.id)})),n.placeholder]}))}}),Object(m.jsxs)("button",{className:"add-list",type:"button",children:[Object(m.jsx)(k.b,{size:20}),Object(m.jsx)("p",{children:"Criar outra lista"})]})]})})})},S=function(){return Object(m.jsxs)(j,{children:[Object(m.jsx)(O,{}),Object(m.jsx)(M,{})]})},T=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{}),Object(m.jsx)(S,{})]})};p.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.8513d67d.chunk.js.map