(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(70)},38:function(e,t,a){},65:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=(a(38),a(6)),i=a(7),s=a(9),u=a(8),m=a(10),p=a(72),h=a(73),f=a(74),b=a(11),d=a.n(b),v=a(12),E=a(30),O=a(17),j=a(27),y=a.n(j),g=r.a.createContext(),C=function(e,t){switch(t.type){case"ADD_CONTACT":return Object(O.a)({},e,{contact:[t.payload].concat(Object(E.a)(e.contact))});case"DELETE_CONTACT":return Object(O.a)({},e,{contact:e.contact.filter(function(e){return e.id!==t.payload})});default:return e}},N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contact:[],dispatch:function(e){return a.setState(function(t){return C(t,e)})}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contact:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),w=g.Consumer,k=a(71),x=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-warning mb-3"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.a,{to:"/",className:"nav-link"},"HOME")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.a,{to:"/contact/add",className:"nav-link"},"ADD")))))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onDeleteClick=function(){var e=Object(v.a)(d.a.mark(function e(t,a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"DELETE_CONTACT",payload:t});case 1:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone;return r.a.createElement(w,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card col-6 col-md-10 col-sm-12 mx-auto"},r.a.createElement("h3",{className:"display-5"},n,r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,l)})),r.a.createElement("p",null,c),r.a.createElement("p",null,o))})}}]),t}(n.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null,function(e){var t=e.contact;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),t.map(function(e){return r.a.createElement(A,{key:e.id,contact:e})}))})}}]),t}(n.Component),T=a(13),S=a(28),F=a.n(S),H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:""},a.onChange=function(e){return a.setState(Object(T.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(v.a)(d.a.mark(function e(t,n){var r,c,o,l,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,i={name:c,email:o,phone:l,id:F()()},t({type:"ADD_CONTACT",payload:i}),a.props.history.push("/");case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone;return r.a.createElement(w,null,function(t){var o=t.dispatch;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,o)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Insert Name Here"),r.a.createElement("input",{className:"form-control form-control-lg",type:"text",name:"name",value:a,onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email Here"),r.a.createElement("input",{className:"form-control form-control-lg",type:"email",name:"email",value:n,onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"phone"},"Phone Here"),r.a.createElement("input",{className:"form-control form-control-lg",type:"number",name:"phone",value:c,onChange:e.onChange})),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-block btn-light"})))})}}]),t}(n.Component),_=(a(65),a(67),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(h.a,null,r.a.createElement(f.a,{exact:!0,path:"/",component:D}),r.a.createElement(f.a,{exact:!0,path:"/contact/add",component:H})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.f232f424.chunk.js.map