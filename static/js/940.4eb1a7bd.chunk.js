"use strict";(self.webpackChunkadmin_panel=self.webpackChunkadmin_panel||[]).push([[940],{9940:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(4165),a=e(5861),u=e(3433),i=e(9439),c=e(9867),s=e(1373),o=e(1167),f=e(1203),l=e(2834),d=function(){var n=/^[0-9]$/,t=(0,c.useState)(Array(6).fill("")),e=(0,i.Z)(t,2),d=e[0],p=e[1],v=(0,c.useState)(!1),h=(0,i.Z)(v,2),x=h[0],k=h[1],m=(0,c.useRef)([]),Z=(0,f.I)(),b=(0,i.Z)(Z,1)[0];(0,c.useEffect)((function(){w()}),[d]);var j=function(n){for(var t=n+1;t<6;t++)if(""===d[t]){m.current[t].focus();break}},y=function(n){for(var t=n-1;t>=0;t--)if(""===d[t]){m.current[t].focus();break}},w=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(d),!d.every((function(n){return""!==n}))){n.next=8;break}return t={status:200,data:{pin:d.join("")}},n.next=6,b(t);case 6:200===(e=n.sent).data.status&&s.Z.success({message:"The PIN is valid with the value ".concat(e.data.data.pin)});case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(n){return n>=6};return(0,l.jsxs)("div",{id:"pin_input",children:[(0,l.jsx)("div",{className:"secret-mode",children:(0,l.jsx)(o.Z,{type:"primary",onClick:function(){k((function(n){return!n}))},children:x?"Disable Secret Mode":"Enable Secret Mode"})}),(0,l.jsx)("div",{className:"pin-input",children:d.map((function(t,e){return(0,l.jsx)("input",{type:x?"password":"text",maxLength:1,value:t,onChange:function(t){return function(t,e){var r=e.charAt(0);n.test(r)?(p((function(n){var e=(0,u.Z)(n);return e[t]=r,e})),""!==r&&j(t)):p((function(n){var e=(0,u.Z)(n);return e[t]="",e}))}(e,t.target.value)},onPaste:function(n){return function(n,t){n.clipboardData.getData("text").slice(0,6).split("").forEach((function(n,e){!isNaN(n)&&t+e<6&&p((function(r){var a=(0,u.Z)(r);return a[t+e]=n,a}))}))}(n,e)},onKeyDown:function(n){return function(n,t){"Backspace"===n.key&&t>0&&""===d[t]&&y(t)}(n,e)},disabled:g(e),className:""!==t?"filled":"",autoFocus:0===e,ref:function(n){return m.current[e]=n}},e)}))})]})},p=function(){return(0,l.jsx)("div",{children:(0,l.jsx)(d,{})})}}}]);
//# sourceMappingURL=940.4eb1a7bd.chunk.js.map