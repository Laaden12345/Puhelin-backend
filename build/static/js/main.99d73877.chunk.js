(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),l=t.n(u),o=t(14),c=t(2),i=function(e){var n=e.newName,t=e.addName,a=e.handlePersonChange,u=e.newNumber,l=e.handleNumberChange;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:l})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.persons,t=e.removePerson,a=n.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(n){return t(n,e.id)}},"Delete")))}));return r.a.createElement("table",null,r.a.createElement("tbody",null,a))},d=function(e){var n=e.nameFilter,t=e.handleFilterChange;return r.a.createElement("div",null,"filter: ",r.a.createElement("input",{value:n,onChange:t}))},s=t(3),f=t.n(s),h=function(){return f.a.get("/persons").then((function(e){return e.data}))},b=function(e){return f.a.post("/persons",e).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat("/persons","/").concat(e),n).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat("/persons","/").concat(e))},E=(t(37),function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notification"},n)}),w=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],l=Object(a.useState)(t),s=Object(c.a)(l,2),f=s[0],w=s[1],g=Object(a.useState)(""),j=Object(c.a)(g,2),O=j[0],C=j[1],N=Object(a.useState)(""),k=Object(c.a)(N,2),y=k[0],S=k[1],P=Object(a.useState)(""),F=Object(c.a)(P,2),I=F[0],L=F[1],D=Object(a.useState)(null),x=Object(c.a)(D,2),A=x[0],J=x[1];Object(a.useEffect)((function(){h().then((function(e){return u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{message:A}),r.a.createElement(d,{nameFilter:I,handleFilterChange:function(e){L(e.target.value);var n=t.filter((function(n){return n.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())}));w(n)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(i,{newName:O,addName:function(e){if(e.preventDefault(),t.find((function(e){return e.name===O&&e.number===y})))window.alert("".concat(O," is already added to phonebook")),L(""),w(t);else if(t.find((function(e){return e.name===O}))){if(window.confirm("This person already exists in the phonebook, replace old number with the new one?")){var n=t.find((function(e){return e.name===O})),a=Object(o.a)({},n,{number:y});l=a.id,v(l,c=a).then((function(e){u(t.map((function(n){return n.id!==l?n:e})))})).then(J("".concat(c.name,"'s number was edited."))).then(setInterval((function(){J(null)}),5e3))}}else{var r={name:O,number:y};b(r).then((function(e){u(t.concat(e)),C(""),S(""),L(""),w(t)})).then(J("".concat(r.name," was added to phonebook."))).then(setInterval((function(){J(null)}),5e3))}var l,c},newNumber:y,handlePersonChange:function(e){C(e.target.value)},handleNumberChange:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{persons:I?f:t,removePerson:function(e,n){e.preventDefault();var a=t.find((function(e){return e.id===n}));window.confirm("Are you sure you want to delete ".concat(a.name))&&(p(n).then(J("".concat(a.name," was deleted from the phonebook."))).then(setInterval((function(){J(null)}),5e3)),u(t.filter((function(e){return e.id!==n}))))}}))};l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.99d73877.chunk.js.map