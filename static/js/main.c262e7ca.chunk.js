(this["webpackJsonpjohn-solo-portfolio"]=this["webpackJsonpjohn-solo-portfolio"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},106:function(e,t,a){},318:function(e,t,a){},319:function(e,t,a){},320:function(e,t,a){},321:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){},324:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(81),r=a.n(o),c=(a(96),a(15)),i=a(6),s=(a(97),a(98),a(99),a(82)),m=a.n(s);a(100);function u(e){var t=e.avatarUrl,a=e.alt;return l.a.createElement("div",{className:"profile-pic"},l.a.createElement("img",{src:t,alt:a}))}u.defaultProps={avatarUrl:"",alt:""};var d=u;a(101);function p(e){var t=e.text,a=e.link;return l.a.createElement("div",{className:"rounded-btn"},l.a.createElement(c.b,{to:a},t))}p.defaultProps={text:"default",link:"/"};var f=p;function E(e){var t=e.name,a=e.title;return l.a.createElement("div",{className:"header"},l.a.createElement(d,{avatarUrl:m.a,alt:"John in Last Bookstore"}),l.a.createElement("h1",{className:"name"},t),l.a.createElement("h1",{className:"title"},a),l.a.createElement("div",{className:"button-list"},l.a.createElement(f,{text:"my portfolio",link:"/portfolio"}),l.a.createElement(f,{text:"about me",link:"/about"})))}E.defaultProps={name:"John Doe",title:"title"};var v=E,b=(a(106),a(84)),h=a.n(b);var g=function(){return l.a.createElement(h.a,{className:"canvas",params:{particles:{number:{value:160,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}}}})};var N=function(){return l.a.createElement("div",{className:"home"},l.a.createElement(v,{name:"John Solo",title:"Software Engineer"}),l.a.createElement(g,null))},w=(a(318),a(33));a(319);var x=function(){var e=Object(n.useState)(0),t=Object(w.a)(e,2),a=t[0],o=t[1];function r(e){o(e)}return l.a.createElement("div",{className:"navbar"},l.a.createElement("nav",{className:"desktop=nav"},l.a.createElement("ul",{className:"nav-desktop-ul"},l.a.createElement("li",null,l.a.createElement(c.c,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/about"},"About")))),l.a.createElement("i",{className:"fas fa-bars burger",onClick:function(){return o(100)},onKeyDown:function(){return r(100)},role:"button",tabIndex:"0"}),l.a.createElement("div",{className:"side-nav",style:{width:"".concat(a,"%")}},l.a.createElement("div",{className:"mobile-container "},l.a.createElement("i",{className:"fas fa-times",onClick:function(){return o(0)},onKeyDown:function(){return r(0)},role:"button",tabIndex:"-1"}),l.a.createElement("ul",{className:"nav-mobile-ul padded-sides"},l.a.createElement("li",null,l.a.createElement(c.c,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/about"},"About"))))))};a(320);function k(e){var t=e.text,a=e.color;return l.a.createElement("div",{className:"word-block padded-sides"},l.a.createElement("h1",{className:a},t))}k.defaultProps={text:"default",color:"blue"};var y=k;a(321);function S(e){var t=e.children;return l.a.createElement("div",{className:"about-text padded-sides"},l.a.createElement("h3",null,t))}S.defaultProps={children:[]};var j=S;var C=function(){return l.a.createElement("div",{className:"about-me container"},l.a.createElement(x,null),l.a.createElement(y,{text:"About Me"}),l.a.createElement(j,null,"Hi, I'm John Solo!",l.a.createElement("span",{role:"img","aria-label":"Hand Wave"},"\ud83d\udc4b"),"I\u2019m a Software Engineer from California, and my main technical focuses are full-stack web development and cloud infrastructure."),l.a.createElement(j,null,"If you have any questions or want to discuss future opportunities, please feel free to reach out!"),l.a.createElement(y,{text:"Connect"}),l.a.createElement("div",{className:"social-media"},l.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/johnsolojoseph/",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin fa-5x"})),l.a.createElement("a",{target:"_blank",href:"https://github.com/johnsolojoseph",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github-square fa-5x"}))))},U=(a(322),a(85)),P=a.n(U),I=a(86),J=a.n(I),M=a(87),A=a.n(M),D=a(88),z=a.n(D),B=a(89),H=a.n(B),O=a(90),_=a.n(O);a(323),a(324);function G(e){var t=e.showModal,a=e.toggle,n=e.title,o=e.description,r=e.imageUrl,c=t?"display":"hide";return l.a.createElement("div",{className:"modal ".concat(c)},l.a.createElement("div",{className:"modal-main container padded-sides"},l.a.createElement("button",{type:"button",onClick:a},l.a.createElement("i",{className:"fas fa-times fa-5x"})),l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,n),l.a.createElement("img",{src:r,alt:""}),l.a.createElement("p",null,o))))}G.defaultProps={showModal:!1,toggle:"",title:"Default",description:"Enter text here",imageUrl:""};var W=G;function q(e){var t=e.title,a=e.description,o=e.imageUrl,r=Object(n.useState)(!1),c=Object(w.a)(r,2),i=c[0],s=c[1];function m(){s(!i)}return l.a.createElement("div",{className:"project"},l.a.createElement("div",{className:"project-img",role:"button",onClick:m,onKeyDown:m,tabIndex:0},l.a.createElement("img",{src:o,alt:""})),l.a.createElement(W,{showModal:i,toggle:m,title:t,description:a,imageUrl:o}))}q.defaultProps={title:"",description:"",imageUrl:""};var K=q;var F=function(){return l.a.createElement("div",{className:"portfolio container"},l.a.createElement(x,null),l.a.createElement(y,{text:"Portfolio"}),l.a.createElement("div",{className:"projects"},l.a.createElement("div",{className:"column"},l.a.createElement(K,{imageUrl:P.a,title:"Social Crowdmapping",description:"\r Created a community-driven map with location-dependent data using Google Maps API and Firebase. \r Optimized update and delete operations by implementing a HashMap to store map marker objects"})),l.a.createElement("div",{className:"column"},l.a.createElement(K,{imageUrl:z.a,title:"Computer Science Department Club Web App",description:"Integrated an event calendar system with Google Calendar API to increase social interaction among club members and highlight upcoming events"})),l.a.createElement("div",{className:"column"},l.a.createElement(K,{imageUrl:J.a,title:"Browser-Based Photo Editor",description:"Developed a ReactJS web-based developer tool that allows end-users to edit pictures with CSS"})),l.a.createElement("div",{className:"column"},l.a.createElement(K,{imageUrl:A.a,title:"Hi-Lite",description:"Built an application that generates a quick summary of posted blogs and news articles using the MEAN stack"})),l.a.createElement("div",{className:"column"},l.a.createElement(K,{imageUrl:H.a,title:"Synchronized YouTube Videos",description:"Employed a real-time engine with Socket.io, which allowed users to sync embedded YouTube videos together at the same time point and load the same video across multiple clients"})),l.a.createElement("div",{className:"column"},l.a.createElement(K,{imageUrl:_.a,title:"Google Image Clone",description:"Created a Google Images clone with ReactJS and utilized modern CSS Flexbox"}))))};var L=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(c.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(N,null)),l.a.createElement(i.a,{path:"/about"},l.a.createElement(C,null)),l.a.createElement(i.a,{path:"/portfolio"},l.a.createElement(F,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,a){e.exports=a.p+"static/media/profile.6240e07e.jpg"},85:function(e,t,a){e.exports=a.p+"static/media/socialmaps.ab7f2ecb.png"},86:function(e,t,a){e.exports=a.p+"static/media/imagebox.6c221439.png"},87:function(e,t,a){e.exports=a.p+"static/media/hi-lite.a51421fc.png"},88:function(e,t,a){e.exports=a.p+"static/media/csclub.ceabcc52.png"},89:function(e,t,a){e.exports=a.p+"static/media/youtube-socket.76f7634a.png"},90:function(e,t,a){e.exports=a.p+"static/media/picto-find.6f7c8646.png"},91:function(e,t,a){e.exports=a(325)},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.c262e7ca.chunk.js.map