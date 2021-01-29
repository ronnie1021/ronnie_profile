(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{19:function(e,n,t){"use strict";var c=t(0),i=t(1),a=t(20),l=t(3),s=t(13),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(o);var u=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},b=t(5),h=t(31),d=[{index:!0,label:"Yuxuan Wan",path:"/"},{label:"Resume",path:"/resume"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return t.e(3).then(t.t.bind(null,53,7))})),x=function(){var e=Object(i.useState)(!1),n=Object(h.a)(e,2),t=n[0],a=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:e.path,onClick:function(){return a(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},p=t(23),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(b.b,{to:"/",className:"logo",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:"Yuxuan Wan"}),Object(c.jsx)("p",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(c.jsx)("a",{href:"mailto:ronie1021@hotmail.com",children:"ronie1021@hotmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Yuxuan (Ronnie) Wan. A Data Scientist / Machine Learning Engineer with 5+ years experience in NLP, Deep Learning, Machine Learning. I am a ",Object(c.jsx)("a",{href:"https://www.cmu.edu/",children:"CMU"})," graduate, MISM Alumni. Currently, a Data Scientist II at ",Object(c.jsx)("a",{href:"https://www.didiglobal.com/",children:"DiDi Labs"}),". Before DiDi, I worked at ",Object(c.jsx)("a",{href:"https://www.midea.com",children:"Midea Group's US Emerging Technology Center "})," as Data Scientist, Before Midea, I worked as Data Scientist for ",Object(c.jsx)("a",{href:"https://www.hilti.com/",children:"Hilti"}),", which is a high-end construction tools manufacturer in Europe."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(b.b,{to:"/",className:"button",children:"Home"}):Object(c.jsx)(b.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Michael D'Angelo ",Object(c.jsx)(b.b,{to:"/",children:"mldangelo.com"}),"."]})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},w=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(a.a,{titleTemplate:"%s | Yuxuan Wan",defaultTitle:"Yuxuan Wan",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};w.defaultProps={children:null,fullPage:!1,title:null,description:"Yuxuan Wan's personal website."};n.a=w},23:function(e,n,t){"use strict";var c=t(0),i=(t(1),t(27)),a=t(28),l=t(29),s=t(30),r=[{link:"https://github.com/ronnie1021",label:"Github",icon:a.faGithub},{link:"https://www.linkedin.com/in/yuxuanwan/",label:"LinkedIn",icon:l.faLinkedinIn},{link:"mailto:ronie1021@hotmail.com",label:"Email",icon:s.faEnvelope}];n.a=function(){return Object(c.jsx)("ul",{className:"icons",children:r.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},44:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),a=t(15),l=t(5),s=t(3),r=t(19),j=(t(44),Object(i.lazy)((function(){return t.e(4).then(t.bind(null,51))}))),o=Object(i.lazy)((function(){return t.e(5).then(t.bind(null,55))})),u=Object(i.lazy)((function(){return t.e(6).then(t.bind(null,52))})),b=Object(i.lazy)((function(){return t.e(7).then(t.bind(null,54))})),h=function(){return Object(c.jsx)(l.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(r.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:o}),Object(c.jsx)(s.a,{path:"/contact",component:j}),Object(c.jsx)(s.a,{path:"/resume",component:b}),Object(c.jsx)(s.a,{component:u,status:404})]})})})},d=document.getElementById("root");d.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(h,{}),d):Object(a.render)(Object(c.jsx)(h,{}),d)}},[[45,1,2]]]);
//# sourceMappingURL=main.253bd4f0.chunk.js.map