(this.webpackJsonpportafolio_esther_manrique_2021=this.webpackJsonpportafolio_esther_manrique_2021||[]).push([[0],{51:function(e,s,c){"use strict";c.r(s);var a=c(2),t=c.n(a),i=c(22),r=c.n(i),n=c(8),l=c(10),j=c(0),o=function(){Object(a.useEffect)((function(){e()}),[]);var e=function(){var e=document.querySelector("[data-navbar]");if(e){var s=e.querySelectorAll("a"),c=e.querySelector("[data-alloy-navbar-target]"),a=e.querySelector(c.dataset.alloyNavbarTarget);s.forEach((function(e){e.addEventListener("click",(function(){c.classList.toggle("open"),a.classList.remove("active"),l.a.to(a,{right:"-100%"})}))})),c&&c.addEventListener("click",(function(){c.classList.toggle("open"),a.classList.contains("active")?(a.classList.remove("active"),l.a.to(a,{right:"-100%"})):(a.classList.add("active"),l.a.to(a,{right:"0"}))}))}};return Object(j.jsx)("div",{children:Object(j.jsxs)("nav",{className:"main-nav","data-navbar":!0,children:[Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{id:"js-menu",children:[Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{to:"/",className:"hvr-underline-from-center",children:"Inicio"})}),Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{to:"skills",className:"hvr-underline-from-center",children:"Skills"})}),Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{to:"projects",className:"hvr-underline-from-center",children:"Proyectos"})}),Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{to:"contacto",className:"hvr-underline-from-center",children:"Contacto"})})]})}),Object(j.jsx)("div",{className:"hide-on-med-and-up",children:Object(j.jsxs)("div",{className:"nav-burger","data-alloy-navbar-target":"#js-menu",children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{})]})})]})})},d=c(19),h=c(24),b=c.n(h),m=c(1),x=c(26);l.b.registerPlugin(x.a);var O=function(){var e={dots:!0,fade:!0,infinite:!0,speed:2e3,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,pauseOnHover:!0,appendDots:function(e){return Object(j.jsx)("div",{className:"slider-home-dots","aria-label":"dots slider change image",children:Object(j.jsx)("ul",{children:e})})},onInit:function(){var e=document.getElementById("name"),s=new m.d({repeat:-1,yoyo:!1,repeatDelay:0});s.to(e,2,{text:{value:"FrontEnd Developer"},delay:5}),s.to(e,2,{text:{value:"Esther Manrique"},delay:2})}};return Object(j.jsx)(a.Fragment,{children:Object(j.jsx)("div",{className:"hero-slider",children:Object(j.jsxs)(b.a,Object(d.a)(Object(d.a)({},e),{},{children:[Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"hero-slick hero-slick-first",children:[Object(j.jsx)("span",{className:"bg-gradient"}),Object(j.jsxs)("div",{className:"grid",children:[Object(j.jsxs)("div",{className:"name",children:[Object(j.jsx)("h1",{id:"name",children:"Esther Manrique"}),Object(j.jsx)("h4",{children:"<Laboratoria>"})]}),Object(j.jsx)("div",{className:"heroImage",children:Object(j.jsx)("img",{src:"assets/images/EM_1.jpg",alt:"photographie portfolio",className:"foto",id:"photo"})})]})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"hero-slick hero-slick-second",id:"about_me",children:[Object(j.jsx)("span",{className:"bg-gradient"}),Object(j.jsxs)("div",{className:"about-me-wrapper",children:[Object(j.jsx)("h2",{className:"about-me-title",children:"About Me"}),Object(j.jsx)("p",{className:"about-me-content",children:"Soy apasionada por naturaleza propia, entre las cosas que m\xe1s me gustan en la vida, una de ellas es la programaci\xf3n, el dise\xf1o, desarrollo de software y p\xe1ginas web. Me encantan los retos, pero lo que m\xe1s disfruto de ellos, es la busqueda y el logro de su correcta soluci\xf3n. Me gusta perseguir mis sue\xf1os, lograr mis metas y pienso que no hay l\xedmites, s\xf3lo existen los que uno mismo se impone..."})]})]})})]}))})})},p=c(25),u=function(e){var s=e.done,c=e.name,t=Object(a.useState)({}),i=Object(p.a)(t,2),r=i[0],n=i[1];return setTimeout((function(){var e={opacity:1,width:"".concat(s,"%")};n(e)}),1e3),Object(j.jsx)(a.Fragment,{children:Object(j.jsxs)("div",{className:"skill-wrapper",children:[Object(j.jsx)("div",{className:"tech-name",children:c}),Object(j.jsx)("div",{className:"progress",children:Object(j.jsxs)("div",{className:"progress-done",style:r,children:[s," %"]})})]})})},g=function(){return Object(j.jsx)(a.Fragment,{children:Object(j.jsx)("div",{className:"tech-skills",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"gradient-title",children:"Tech Skills"}),[{name:"HTML5",percentaje:90},{name:"CSS3",percentaje:70},{name:"Javascript",percentaje:50},{name:"React-JS",percentaje:50},{name:"Vue-JS",percentaje:35},{name:"Bootstrap",percentaje:75},{name:"Materialize",percentaje:50},{name:"Material UI",percentaje:50},{name:"SASS",percentaje:25},{name:"Git/Git-Hub",percentaje:60},{name:"Figma",percentaje:70},{name:"Trello",percentaje:70},{name:"Trabajo remoto",percentaje:95}].map((function(e){return Object(j.jsx)(u,{done:e.percentaje,name:e.name},e.name)}))]})})})},v=function(){return Object(a.useEffect)((function(){var e=document.querySelector(".soft-skills"),s=document.querySelectorAll(".soft-icons li"),c=new m.c;s.forEach((function(s){var a=new m.c;a.fromTo(s,{autoAlpha:0,scrollTrigger:e},{autoAlpha:1,duration:1}),c.add(a)}))}),[]),Object(j.jsx)(a.Fragment,{children:Object(j.jsxs)("div",{className:"soft-skills",children:[Object(j.jsx)("h1",{className:"gradient-title",children:"Soft Skills"}),Object(j.jsxs)("ul",{className:"soft-icons",children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:"assets/icons/brain.png",alt:""}),"Autoaprendizaje"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:"assets/icons/partnership.png",alt:""}),"Trabajo en equipo"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:"assets/icons/brainstorm_ok.png",alt:""}),"Mentalidad de crecimiento"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:"assets/icons/brainstorming.png",alt:""}),"Mentalidad y cultura \xe1gil"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:"assets/icons/feedback.png",alt:""}),"Comunicaci\xf3n eficaz y asertiva"]})]})]})})},N=function(){return Object(j.jsx)(a.Fragment,{children:Object(j.jsxs)("div",{className:"projects",children:[Object(j.jsx)("h1",{className:"gradient-title",children:"Proyectos"}),Object(j.jsx)("div",{className:"project-item",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"text-centered",children:"Burger Queen"}),Object(j.jsxs)("p",{children:["Aplicaci\xf3n dise\xf1ada para ",Object(j.jsx)("strong",{children:" tablet (Ipad Pro) "})," con el objetivo de facilitar la comunicaci\xf3n entre meseros, cocina y caja, optimizando tiempos para brindar un mejor servicio. La App tiene dos roles de usuario: Meseros y Cocina."]}),Object(j.jsxs)("div",{className:"grid",children:[Object(j.jsxs)("div",{className:"project-objectives",children:[Object(j.jsx)("h4",{className:"is-green",children:"Objetivos:"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"Tomar las ordenes a los comensales de forma r\xe1pida y eficiente."}),Object(j.jsx)("li",{children:"Agilizar la comunicaci\xf3n entre mesero, cocina y caja."})]})]}),Object(j.jsxs)("div",{className:"project-results",children:[Object(j.jsx)("h4",{className:"is-green",children:"Resultados:"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"Menos margen de error en la preparaci\xf3n de los alimentos."}),Object(j.jsx)("li",{children:"Mayor exactitud al registrar el consumo en caja."}),Object(j.jsx)("li",{children:"Menos tiempo de espera para los comensales."})]})]})]}),Object(j.jsxs)("div",{className:"project-tech",children:[Object(j.jsx)("h4",{children:"Tech:"}),Object(j.jsx)("div",{className:"project-tech-list",children:"Figma, HTML5, CSS3, Bootstrap, JavaScript, ReactJS, Firebase (Firestore), Git & Github (Projects, Issues, Labels)."})]}),Object(j.jsx)("div",{className:"project-image text-centered v-align-center",children:Object(j.jsx)("a",{href:"https://esthermanrique.github.io/CDMX009-BurgerQueen",target:"_blank ",children:Object(j.jsx)("img",{src:"assets/images/tablets2.png",alt:""})})}),Object(j.jsxs)("div",{className:"project-links",children:[Object(j.jsx)("a",{href:"https://esthermanrique.github.io/CDMX009-BurgerQueen",target:"_blank ",children:Object(j.jsx)("img",{src:"assets/icons/enlace2.png",alt:""})}),Object(j.jsx)("a",{href:"https://github.com/EstherManrique/CDMX009-BurgerQueen",target:"_blank ",children:Object(j.jsx)("img",{src:"assets/icons/github2.png",alt:""})})]})]})}),Object(j.jsx)("div",{className:"project-item bg-gray",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"text-centered",children:"Social Network"}),Object(j.jsxs)("div",{className:"grid",children:[Object(j.jsx)("div",{className:"project-image-1 text-centered v-align-center",children:Object(j.jsx)("a",{href:"https://esthermanrique.github.io/CDMX009-Social-Network/src/",target:"_blank ",children:Object(j.jsx)("img",{src:"assets/images/mobile.png",alt:""})})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"La aplicaci\xf3n es una Red Social pensada en los amantes del c\xf3digo. Con el objetivo de crear un espacio donde la comunidad Tech pueda compartir informaci\xf3n y conocimientos."}),Object(j.jsxs)("div",{className:"project-objectives",children:[Object(j.jsx)("h4",{className:"is-green",children:"Objetivos:"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"Conectar a usuarios interesados en el mundo de la tecnolog\xeda."}),Object(j.jsx)("li",{children:"Crear, Leer, Actualizar y/o Borrar sus Post o im\xe1genes."}),Object(j.jsx)("li",{children:"Leer y comentar los post de otros usuarios."})]})]}),Object(j.jsxs)("div",{className:"project-results",children:[Object(j.jsx)("h4",{className:"is-green",children:"Resultados:"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"Mantener conectados a los usuarios."}),Object(j.jsx)("li",{children:"Compartir experiencias, conocimientos e informaci\xf3n."}),Object(j.jsx)("li",{children:"Crear, leer, editar, actualizar y borrar publicaciones."})]})]}),Object(j.jsx)("p",{children:"Es un proyecto colaborativo por lo que usamos Trello para la planeaci\xf3n y Github para el control de versiones de c\xf3digo."}),Object(j.jsxs)("div",{className:"project-tech",children:[Object(j.jsx)("h4",{children:"Tech:"}),Object(j.jsx)("div",{className:"project-tech-list",children:"Figma, HTML5, CSS3, JavaScript, Materialize, Firebase, Firestore, Github colaborativo, SPA, MVC, Responsive Design."})]}),Object(j.jsxs)("div",{className:"project-links",children:[Object(j.jsx)("a",{href:"https://esthermanrique.github.io/CDMX009-Social-Network/src/",target:"_blank ",children:Object(j.jsx)("img",{src:"assets/icons/enlace2.png",alt:""})}),Object(j.jsx)("a",{href:"https://github.com/esthermanrique/CDMX009-Social-Network",target:"_blank ",children:Object(j.jsx)("img",{src:"assets/icons/github2.png",alt:""})})]})]})]})]})}),Object(j.jsx)("div",{className:"project-item",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"text-centered",children:"Data Lovers"}),Object(j.jsxs)("div",{className:"grid",children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Aplicaci\xf3n para el manejo de datos, visualizaci\xf3n de gr\xe1ficas y tablas de informaci\xf3n. Los usuarios pueden visualizar la data de Personas heridas por medio de transporte en EEUU, seleccionando el tipo de transporte y el per\xedodo. La aplicaci\xf3n les mostrar\xe1 como resultado de su solicitud, la data representada en una ",Object(j.jsx)("strong",{children:"Gr\xe1fica de Pie 3D y una lineal, as\xed como la tabla correspondiente a los datos."})]}),Object(j.jsxs)("div",{className:"project-objectives",children:[Object(j.jsx)("h4",{className:"is-green",children:"Objetivos:"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"Dise\xf1ar y construir una interfaz web donde se pueda visualizar y manipular data."}),Object(j.jsx)("li",{children:"Permitir al usuario interactuar con la interfaz para obtener la informaci\xf3n que necesita."})]})]}),Object(j.jsxs)("div",{className:"project-results",children:[Object(j.jsx)("h4",{className:"is-green",children:"Resultados:"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"La interacci\xf3n del usuario con la interfaz"}),Object(j.jsx)("li",{children:"Filtrar la informacion por tipo de transporte y periodo."}),Object(j.jsx)("li",{children:"Visualizar la solicitud del usuario en forma de gr\xe1ficas as\xed como la tabla correspondiente a la data."})]})]}),Object(j.jsxs)("div",{className:"project-tech",children:[Object(j.jsx)("h4",{children:"Tech:"}),Object(j.jsx)("div",{className:"project-tech-list",children:"Figma, HTML5, CSS3, JavaScript y Google Charts."})]}),Object(j.jsxs)("div",{className:"project-links",children:[Object(j.jsx)("a",{href:"https://esthermanrique.github.io/CDMX009-Data-Lovers/src/",target:"_blank ",children:Object(j.jsx)("img",{src:"assets/icons/enlace2.png",alt:""})}),Object(j.jsx)("a",{href:"https://github.com/EstherManrique/CDMX009-Data-Lovers",target:"_blank ",children:Object(j.jsx)("img",{src:"assets/icons/github2.png",alt:""})})]})]}),Object(j.jsx)("div",{className:"project-image-2 text-centered v-align-center",children:Object(j.jsx)("a",{href:"https://esthermanrique.github.io/CDMX009-Data-Lovers/src/",target:"_blank ",children:Object(j.jsx)("img",{src:"assets/images/laptop2.png",alt:""})})})]})]})}),Object(j.jsx)("div",{className:"project-item bg-gray",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"text-centered",children:"Cipher"}),Object(j.jsxs)("div",{className:"grid",children:[Object(j.jsx)("div",{className:"project-image-1 text-centered v-align-center",children:Object(j.jsx)("a",{href:"https://esthermanrique.github.io/CDMX009-cipher/src/",target:"_blank ",children:Object(j.jsx)("img",{src:"assets/images/macbookpro.png",alt:""})})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Aplicaci\xf3n para la generaci\xf3n de sellos digitales y facturaci\xf3n electr\xf3nica. Mediante el cifrado y descifrado de clabes. Los usuarios son  los Contribuyentes (Personas f\xedsicas y morales), que pagan impuestos y facturan sus productos y/o servicios. Con esta aplicaci\xf3n y por medio de un despacho de contadores, obtener ante la SHCP la autorizaci\xf3n para la generaci\xf3n de sellos digitales que incluye la facturaci\xf3n electr\xf3nica."}),Object(j.jsxs)("div",{className:"project-objectives",children:[Object(j.jsx)("h4",{className:"is-green",children:"Objetivos:"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"Crear una interfaz para registro y alta de usuarios."}),Object(j.jsx)("li",{children:"Cifrado de plabara clabe."})]})]}),Object(j.jsxs)("div",{className:"project-results",children:[Object(j.jsx)("h4",{className:"is-green",children:"Resultados:"}),Object(j.jsx)("ol",{children:Object(j.jsx)("li",{children:"Generacion de clabes mediante Cifrado Cesar (Caesar Cipher)."})})]}),Object(j.jsxs)("div",{className:"project-tech",children:[Object(j.jsx)("h4",{children:"Tech:"}),Object(j.jsx)("div",{className:"project-tech-list",children:"Figma, HTML5, CSS3 y JavaScript."})]}),Object(j.jsxs)("div",{className:"project-links",children:[Object(j.jsx)("a",{href:"https://esthermanrique.github.io/CDMX009-cipher/src/",target:"_blank ",children:Object(j.jsx)("img",{src:"assets/icons/enlace2.png",alt:""})}),Object(j.jsx)("a",{href:"https://github.com/EstherManrique/CDMX009-cipher",target:"_blank ",children:Object(j.jsx)("img",{src:"assets/icons/github2.png",alt:""})})]})]})]})]})})]})})},f=function(){return Object(j.jsxs)("div",{className:"main-footer text-centered",children:[Object(j.jsx)("span",{className:"text-name",children:"Esther Manrique Gonz\xe1lez | "}),Object(j.jsx)("span",{className:"text-front-end",children:"Front End Developer"}),Object(j.jsx)("h3",{className:"text-centered",children:"Copyright 2021"})]})},y=c(3),k=function(){return Object(j.jsx)(a.Fragment,{children:Object(j.jsxs)("div",{className:"contacto",children:[Object(j.jsx)("div",{className:"bg-gradient"}),Object(j.jsx)("div",{className:"contacto-texto",children:Object(j.jsxs)("div",{className:"contacto-info",children:[Object(j.jsx)("div",{className:"datos-contacto",children:Object(j.jsx)("h1",{children:"\xbfTrabajamos juntos?"})}),Object(j.jsx)("div",{className:"email",children:Object(j.jsxs)("a",{href:"mailto:dev.publicidadweb@gmail.com",target:"_blank ",children:[Object(j.jsx)("img",{src:"assets/icons/email.svg",alt:""}),Object(j.jsx)("span",{children:"dev.publicidadweb@gmail.com"})]})}),Object(j.jsx)("div",{className:"whatsapp",children:Object(j.jsxs)("a",{href:"tel:5528529983",children:[Object(j.jsx)("img",{src:"assets/icons/whatsapp.png",alt:""}),Object(j.jsx)("span",{children:"55 2852 9983"})]})}),Object(j.jsx)("div",{className:"git-hub",children:Object(j.jsxs)("a",{href:"https://github.com/EstherManrique?tab=repositories",target:"_blank ",children:[Object(j.jsx)("img",{src:"assets/icons/github.svg",alt:""}),Object(j.jsx)("span",{children:"https://github.com/EstherManrique?tab=repositories"})]})}),Object(j.jsx)("div",{className:"linkedin",children:Object(j.jsxs)("a",{href:"https://www.linkedin.com/in/esther-manrique/",target:"_blank ",children:[Object(j.jsx)("img",{src:"assets/icons/linkedin.svg",alt:""}),Object(j.jsx)("span",{children:"https://www.linkedin.com/in/esther-manrique/"})]})})]})})]})})};var S=function(){return Object(j.jsxs)(n.a,{children:[Object(j.jsx)(o,{}),Object(j.jsx)(y.c,{children:Object(j.jsx)(y.a,{exact:!0,path:"/",children:Object(j.jsx)(O,{})})}),Object(j.jsx)(y.c,{children:Object(j.jsxs)(y.a,{exact:!0,path:"/skills",children:[Object(j.jsx)(g,{}),Object(j.jsx)(v,{}),Object(j.jsx)(f,{})]})}),Object(j.jsx)(y.c,{children:Object(j.jsxs)(y.a,{exact:!0,path:"/projects",children:[Object(j.jsx)(N,{}),Object(j.jsx)(f,{})]})}),Object(j.jsx)(y.c,{children:Object(j.jsxs)(y.a,{exact:!0,path:"/contacto",children:[Object(j.jsx)(k,{}),Object(j.jsx)(f,{})]})})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,i=s.getLCP,r=s.getTTFB;c(e),a(e),t(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),M()}},[[51,1,2]]]);
//# sourceMappingURL=main.129522b5.chunk.js.map