(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{51:function(e,t,n){e.exports=n(65)},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(8),c=n.n(s),r=(n(56),n(57),n(12)),l=n(42),i=(n(58),n(95)),m=n(96),u=n(97),d=(n(59),n(91)),v=n(41),f=n.n(v),p=n(40),g=n.n(p);n(60);var E=function(e){var t=e.name,n=e.onRemove,a=e.onPass,s=e.id2;return o.a.createElement("div",{className:"list-item"},o.a.createElement("div",{className:"list-item-header"},o.a.createElement(d.a,{onClick:function(){a(s)},className:"button-item"},o.a.createElement(g.a,null)),o.a.createElement(d.a,{onClick:function(){n(s)},className:"button-item-2"},o.a.createElement(f.a,null))),o.a.createElement("h3",null,t))};var h=function(e){var t=e.name,n=e.list,a=e.onRemove,s=e.onPass;return o.a.createElement(i.a,{className:"list"},o.a.createElement("h3",null,t),o.a.createElement("div",{className:"item-container"},n.map((function(e,t){return o.a.createElement(E,{name:e,id:t,onRemove:a,onPass:s,id2:t})}))))};var b=function(){var e=Object(a.useState)({text:"",todo:["task1"],progress:[],done:[]}),t=Object(l.a)(e,2),n=t[0],s=t[1];return o.a.createElement(i.a,{className:"contain",elevation:3},o.a.createElement("div",{className:"header"},o.a.createElement(m.a,{className:"button",onClick:function(){if(0!==n.text.length){var e=n.text,t=n.todo;t.push(e),s(Object(r.a)({},n,{todo:t}))}}},"Add New Task"),o.a.createElement(u.a,{id:"standard-basic",label:"Name of task",variant:"filled",className:"text",value:n.text,onChange:function(e){s(Object(r.a)({},n,{text:e.target.value}))}})),o.a.createElement("div",{className:"boxes"},o.a.createElement(h,{name:"To do",list:n.todo,onRemove:function(e){var t=n.todo;console.log(e),t.splice(e,1),s(Object(r.a)({},n,{todo:t}))},onPass:function(e){var t=n.todo,a=n.todo[e];console.log(e),t.splice(e,1);var o=n.progress;o.push(a),s(Object(r.a)({},n,{todo:t,progress:o})),console.log(n)}}),o.a.createElement(h,{name:"In Progress",list:n.progress,onRemove:function(e){var t=n.progress;t.splice(e,1),s(Object(r.a)({},n,{progress:t}))},onPass:function(e){var t=n.progress,a=n.progress[e];console.log(a),t.splice(e,1);var o=n.done;o.push(a),s(Object(r.a)({},n,{progress:t,done:o})),console.log(n)}}),o.a.createElement(h,{name:"Done",list:n.done,onRemove:function(e){var t=n.done;t.splice(e,1),s(Object(r.a)({},n,{done:t}))},onPass:function(e){var t=n.done;t.splice(e,1),s(Object(r.a)({},n,{done:t})),console.log(n)}})))};var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.5b626225.chunk.js.map