(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{105:function(e,t,c){},106:function(e,t,c){},117:function(e,t,c){},135:function(e,t,c){},136:function(e,t,c){},138:function(e,t,c){},139:function(e,t,c){},189:function(e,t,c){},191:function(e,t,c){},193:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(51),s=c.n(r),i=(c(105),c(97)),o=c.n(i),l=(c(106),c(71)),j=c(8),b=c(0),d=Object(n.createContext)(),x=function(e){var t=e.children,c=Object(n.useState)([]),a=Object(j.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(0),o=Object(j.a)(i,2),x=o[0],m=o[1],u=Object(n.useState)(""),h=Object(j.a)(u,2),O=h[0],p=h[1];return Object(b.jsx)(d.Provider,{value:{PokeCart:r,TotalPrice:x,SetPokeCart:s,AddToCart:function(e,t){if(0!==t){if(void 0!==r.find((function(t){return t.name===e.name}))){var c=r.findIndex((function(t){return t.name===e.name})),n=Object(l.a)(r);return n[c].quantity+=t,n[c].price+=t*e.price,s(n),void m(n[c].price)}s([].concat(Object(l.a)(r),[{name:e.name,quantity:t,price:e.price*t}])),m((function(c){return c+e.price*t}))}else alert("No se puede agregar 0 de este Pokemon")},RemoveFromCart:function(e){var t=r.filter((function(t){return t!==e}));s(t),m((function(t){return t-e.price}))},EmptyCart:function(){s([]),m(0)},OrderID:O,setOrderID:p},children:t})},m=c(205),u=c(96),h=function(e){var t,c=Object(n.useContext)(d).RemoveFromCart;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"cart-list-container",children:[Object(b.jsx)("div",{className:"pokemon-txt-container",children:Object(b.jsxs)("p",{className:"cart-list-txt",children:[(t=e.pokemon.name,"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1))," x ",e.pokemon.quantity," $",e.pokemon.price]})}),Object(b.jsx)("button",{className:"btn btn-primary remove-btn",onClick:function(){return c(e.pokemon)},children:"Remove"})]})})};var O=function(e){var t=e.pokemons;return Object(b.jsx)(m.a,{children:t.length&&t.map((function(e,t){return Object(b.jsx)(u.a,{children:Object(b.jsx)(h,{pokemon:e})},"".concat(t,"Pokemon"))}))})},p=(c(72),c(10)),f=function(){var e=Object(n.useContext)(d),t=e.PokeCart,c=e.TotalPrice;return Object(b.jsx)(b.Fragment,{children:0===t.length?Object(b.jsx)("section",{className:"empty-cart-container-nav",children:Object(b.jsxs)("div",{className:"nav-empty-cart-txt",children:[Object(b.jsx)("p",{children:"Parece que por aqu\xed no hay nada..."}),Object(b.jsx)("p",{children:"Agreguemos algo al carrito!"}),Object(b.jsx)(p.b,{to:"/pokeballs",children:Object(b.jsx)("button",{className:"btn btn-primary",children:"Volver a la tienda"})})]})}):Object(b.jsxs)("section",{className:"cart-container",children:[Object(b.jsx)(O,{pokemons:t}),Object(b.jsx)("div",{className:"total-container",children:Object(b.jsxs)("p",{className:"total-txt",children:["Total: $",c]})})]})})},k=function(){return Object(b.jsxs)("header",{children:[Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:"Navbar_ul",children:[Object(b.jsx)("li",{className:"Navbar_li",children:Object(b.jsx)(p.b,{to:"/",className:"Navbar_a",children:"Inicio"})}),Object(b.jsx)("li",{className:"Navbar_li",children:Object(b.jsx)(p.b,{to:"/pokedex",className:"Navbar_a",children:"Pok\xe9dex"})}),Object(b.jsx)("li",{className:"Navbar_li",children:Object(b.jsx)(p.b,{to:"/pokeballs",className:"Navbar_a",children:"Pok\xe9balls"})}),Object(b.jsx)("li",{className:"Navbar_li",children:Object(b.jsx)(p.b,{to:"/trainers",className:"Navbar_a",children:"Trainers"})})]})}),Object(b.jsxs)("div",{className:"dropdown",children:[Object(b.jsx)(p.b,{to:"/cart",children:Object(b.jsx)(o.a,{className:"Cart-Icon"})}),Object(b.jsx)("div",{className:"dropdown-content",children:Object(b.jsx)(f,{})})]})]})},g=c(11),v=c(16),N=c.n(v),y=c(28),C=(c(117),c(29)),P=c.n(C),S=c(208),T=function(e){var t,c=e.pokemon,a=Object(n.useState)({}),r=Object(j.a)(a,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(y.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()(t);case 2:c=e.sent,i(c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();c.url&&e(c.url)}),[c]),Object(b.jsx)(b.Fragment,{children:s.name?Object(b.jsx)(S.a,{className:"mb-3",children:Object(b.jsxs)(S.a.Body,{children:[Object(b.jsx)(S.a.Title,{className:"center",children:(t=s.name,"string"!==typeof t?"":t.charAt(0).toUpperCase()+t.slice(1))}),Object(b.jsx)(S.a.Img,{src:s.sprites.front_default}),Object(b.jsxs)(S.a.Text,{children:["Pokedex ID: ",s.id]}),Object(b.jsx)(p.b,{to:"/pokedex/".concat(s.id),children:Object(b.jsx)("button",{className:"btn btn-primary",children:"Detalles"})})]})}):Object(b.jsx)("div",{className:"menu-item-container",children:Object(b.jsxs)("h5",{className:"center",children:["No se pudo encontrar informaci\xf3n de ",c.name]})})})};var E=function(e){var t=e.pokemons;return Object(b.jsx)(m.a,{children:t.length&&t.map((function(e,t){return Object(b.jsx)(u.a,{sm:"4",md:"4",lg:"4",children:Object(b.jsx)(T,{pokemon:e})},"".concat(t,"Pokemon"))}))})},I=c(206);function A(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(1),s=Object(j.a)(r,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(y.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()("https://pokeapi.co/api/v2/pokemon?limit=".concat(10*i));case 2:t=e.sent,a(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(I.a,{children:[Object(b.jsx)("h2",{children:"Pok\xe9mones"}),Object(b.jsxs)("p",{children:["Todos los datos de esta seccion se levantan utilizando una ",Object(b.jsx)("strong",{children:"API"})]}),Object(b.jsx)("p",{children:"Link: https://pokeapi.co/"})]}),Object(b.jsxs)(I.a,{children:[Object(b.jsx)(E,{pokemons:c}),Object(b.jsx)("button",{onClick:function(){o((function(e){return e+1})),console.log(i)},className:"btn btn-primary",children:"M\xe1s Pokemones"})]})]})}c(135);var D=function(e){var t=e.pokemon,c=Object(n.useState)([]),a=Object(j.a)(c,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(y.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()(t);case 2:c=e.sent,s(c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.url&&e(t.url)}),[t]),Object(b.jsx)(b.Fragment,{children:r.name?Object(b.jsxs)("section",{className:"PokeContainer",children:[Object(b.jsx)("h1",{className:"center text-uppercase",children:r.name}),Object(b.jsxs)("div",{className:"PokeInfoLeft",children:[Object(b.jsx)("img",{src:r.sprites.front_default,alt:"Pokemon_front_sprite",className:"PokeImg"}),Object(b.jsxs)("p",{className:"PokeSubtitle",children:[Object(b.jsx)("strong",{children:"Type:"})," ",r.types[0].type.name]})]}),Object(b.jsx)("div",{className:"PokeInfoRight",children:Object(b.jsxs)("div",{className:"PokeInfoContainer",children:[Object(b.jsxs)("p",{className:"PokeSubtitle",children:[Object(b.jsx)("strong",{children:"Name:"})," ",r.name]}),Object(b.jsxs)("p",{className:"PokeSubtitle",children:[Object(b.jsx)("strong",{children:"Pokedex ID:"})," ",r.id]}),Object(b.jsxs)("p",{className:"PokeSubtitle",children:[Object(b.jsx)("strong",{children:"Ability:"})," ",r.abilities[0].ability.name]}),Object(b.jsxs)("p",{className:"PokeSubtitle",children:[Object(b.jsx)("strong",{children:"Height:"})," ",r.height/10,"m"]}),Object(b.jsxs)("p",{className:"PokeSubtitle",children:[Object(b.jsx)("strong",{children:"Weight:"})," ",r.weight,"kg"]})]})})]}):Object(b.jsx)("div",{className:"center",children:Object(b.jsx)("h2",{className:"center",children:"Cargando..."})})})},F=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(g.f)().PokeID;return Object(n.useEffect)((function(){var e=function(){var e=Object(y.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()("https://pokeapi.co/api/v2/pokemon?limit=1&offset=".concat(r-1));case 2:t=e.sent,a(t.data.results[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(D,{pokemon:c})})},w=(c(136),c.p+"static/media/logo.c372a052.png"),B=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("section",{className:"fondo",children:[Object(b.jsx)("h1",{className:"home-title",children:"Bienvenido a la Pokedex"}),Object(b.jsx)("img",{src:w,alt:"logo",className:"logo"})]})})},G=c(70),V=(c(137),G.a.initializeApp({apiKey:"AIzaSyDUCJw57D7I3w2A_7r1f2k5mrMgOrgTy3Q",authDomain:"react-prueba-96435.firebaseapp.com",projectId:"react-prueba-96435",storageBucket:"react-prueba-96435.appspot.com",messagingSenderId:"368172911107",appId:"1:368172911107:web:1dbf88e8facd7931049c36",measurementId:"G-2YDXYH9YM7"})),_=function(){return G.a.firestore(V)},R=function(e){var t=e.trainer;return Object(b.jsx)(b.Fragment,{children:t.name?Object(b.jsx)(S.a,{style:{margin:"1vh"},children:Object(b.jsxs)(S.a.Body,{children:[Object(b.jsx)(S.a.Title,{children:t.name}),Object(b.jsx)(S.a.Img,{src:t.img,style:{width:"25vh",height:"30vh"}}),Object(b.jsxs)(S.a.Text,{children:["Age:",t.age]})]})}):Object(b.jsx)("div",{className:"menu-item-container",children:Object(b.jsxs)("h5",{className:"center",children:["No se pudo encontrar informaci\xf3n de ",t.name]})})})};var L=function(e){var t=e.trainers;return Object(b.jsx)(m.a,{children:t.length&&t.map((function(e,t){return Object(b.jsx)(u.a,{sm:"4",md:"4",lg:"4",children:Object(b.jsx)(R,{trainer:e})},"".concat(t,"Trainer"))}))})},z=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){_().collection("trainers").get().then((function(e){0===e.size&&console.log("No results"),a(e.docs.map((function(e){return e.data()})))})).catch((function(e){console.log("Error",e)})).finally((function(){console.log("Success")}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(I.a,{children:[Object(b.jsx)("h2",{children:"Entrenadores"}),Object(b.jsxs)("p",{children:["Todos los datos de esta seccion se levantan utilizando ",Object(b.jsx)("strong",{children:"FIREBASE"})]})]}),Object(b.jsx)(I.a,{children:Object(b.jsx)(L,{trainers:c})})]})},q=function(){var e=Object(n.useContext)(d),t=e.PokeCart,c=e.TotalPrice;return Object(b.jsxs)(b.Fragment,{children:[0===t.length?Object(b.jsx)("section",{className:"empty-cart-container",children:Object(b.jsxs)("div",{className:"empty-cart empty-cart-txt-center",children:[Object(b.jsx)("p",{children:"Parece que por aqu\xed no hay nada..."}),Object(b.jsx)("p",{children:"Agreguemos algo al carrito!"}),Object(b.jsx)(p.b,{to:"/pokeballs",children:Object(b.jsx)("button",{className:"btn btn-primary",children:"Volver a la tienda"})})]})}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{pokemons:t}),Object(b.jsx)("div",{className:"total-container",children:Object(b.jsxs)("p",{className:"total-txt",children:["Total: $",c]})})]}),t.length>=1?Object(b.jsx)(p.b,{to:"/checkout",children:Object(b.jsx)("section",{className:"buy-btn-container",children:Object(b.jsx)("button",{className:"btn btn-primary buy-btn",children:"Comprar"})})}):Object(b.jsx)(b.Fragment,{})]})},M=(c(138),function(e){var t=e.pokemon,c=Object(n.useContext)(d),a=c.PokeCart,r=c.AddToCart,s=Object(n.useState)(0),i=Object(j.a)(s,2),o=i[0],l=i[1];return Object(b.jsxs)("section",{className:"shopping-container",children:[Object(b.jsxs)("div",{className:"counter-container",children:[Object(b.jsx)("button",{onClick:function(){0===o?alert("No se puede pedir menos de 0 Pokemon"):l((function(e){return e-1}))},className:"btn btn-primary counter-btn",children:"-"}),Object(b.jsx)("p",{className:"counter-display",children:o}),Object(b.jsx)("button",{onClick:function(){l((function(e){return e+1}))},className:"btn btn-primary counter-btn",children:"+"})]}),Object(b.jsx)("button",{className:"btn btn-primary my_btn",onClick:function(){r(t,o),l(0)},children:"Agregar al carrito"}),a.length>0?Object(b.jsx)("section",{children:Object(b.jsx)(p.b,{to:"/cart",children:Object(b.jsx)("button",{className:"btn btn-primary my_btn",children:"Terminar mi compra"})})}):Object(b.jsx)(b.Fragment,{})]})}),J=function(e){var t=e.pokeball;return Object(b.jsx)(b.Fragment,{children:t.name?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(S.a,{style:{margin:"1vh"},children:[Object(b.jsxs)(S.a.Body,{children:[Object(b.jsx)(S.a.Title,{children:t.name}),Object(b.jsx)(S.a.Img,{src:t.img,style:{width:"30vh",height:"30vh"}}),Object(b.jsxs)(S.a.Text,{children:["Generacion: ",t.gen]}),Object(b.jsxs)(S.a.Text,{children:["Ratio: ",t.ratio]}),Object(b.jsxs)(S.a.Text,{children:["Precio: $",t.price]})]}),Object(b.jsx)(M,{pokemon:t})]})}):Object(b.jsx)("div",{className:"menu-item-container",children:Object(b.jsxs)("h5",{className:"center",children:["No se pudo encontrar informaci\xf3n de ",t.name]})})})};var Y=function(e){var t=e.pokeballs;return Object(b.jsx)(m.a,{children:t.length&&t.map((function(e,t){return Object(b.jsx)(u.a,{sm:"4",md:"4",lg:"4",children:Object(b.jsx)(J,{pokeball:e})},"".concat(t,"Pokeballs"))}))})},$=Object(n.createContext)(),U=function(e){var t=e.children,c=Object(n.useState)([]),a=Object(j.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)([]),o=Object(j.a)(i,2),l=o[0],d=o[1];return Object(n.useEffect)((function(){_().collection("pokeballs").get().then((function(e){0===e.size&&console.log("No results"),s(e.docs.map((function(e){return e.data()}))),d(e.docs.map((function(e){return e.id})))})).catch((function(e){console.log("Error",e)})).finally((function(){console.log("Success")}))}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)($.Provider,{value:{pokeballs:r,PokeballID:l},children:t})})},H=function(){var e=Object(n.useContext)($).pokeballs;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(I.a,{children:[Object(b.jsx)("h2",{children:"Pok\xe9balls"}),Object(b.jsxs)("p",{children:["Todos los datos de esta seccion se levantan utilizando ",Object(b.jsx)("strong",{children:"FIREBASE"})]})]}),Object(b.jsx)(I.a,{children:Object(b.jsx)(Y,{pokeballs:e})})]})},K=c(207),Q=c(209),W=(c(139),void 0),X=Object(g.g)((function(){var e=Object(n.useContext)(d),t=e.PokeCart,c=e.TotalPrice,a=e.EmptyCart,r=e.setOrderID,s=Object(n.useState)(""),i=Object(j.a)(s,2),o=i[0],l=i[1],x=Object(n.useState)(""),m=Object(j.a)(x,2),u=m[0],h=m[1],O=Object(n.useState)(""),f=Object(j.a)(O,2),k=f[0],g=f[1],v=Object(n.useState)(""),N=Object(j.a)(v,2),y=N[0],C=N[1],P=Object(n.useState)(""),S=Object(j.a)(P,2),T=S[0],E=S[1],I=function(){if(!1!==(o!==u?(alert("Los emails no coinciden"),!1):""===(k&&y&&T&&o&&u)?(alert("Debe rellenar todos los campos"),!1):(console.log("Success"),!0))){var e={buyer:{Name:k,LastName:y,Mail:o,phone:T},items:{PokeCart:t},total:{TotalPrice:c}};_().collection("orders").add(e).then((function(e){var t=e.id;r(t)})).catch((function(e){console.log("Error",e)})).finally((function(){console.log("La compra se realizo con exito")})),a()}};return Object(b.jsx)("section",{className:"form-container",children:Object(b.jsxs)(K.a,{onSubmit:function(e){e.preventDefault(),W.props.history.push("/complete")},children:[Object(b.jsxs)(K.a.Group,{className:"mb-3",children:[Object(b.jsx)(K.a.Label,{children:"Nombre:"}),Object(b.jsx)(K.a.Control,{type:"text",placeholder:"Ingrese su Nombre",onChange:function(e){return g(e.target.value)}})]}),Object(b.jsxs)(K.a.Group,{className:"mb-3",children:[Object(b.jsx)(K.a.Label,{children:"Apellido"}),Object(b.jsx)(K.a.Control,{type:"text",placeholder:"Ingrese su Apellido",onChange:function(e){return C(e.target.value)},className:"test"})]}),Object(b.jsxs)(K.a.Group,{className:"mb-3",children:[Object(b.jsx)(K.a.Label,{children:"Tel\xe9fono"}),Object(b.jsx)(K.a.Control,{type:"tel",placeholder:"Ingrese su Numero de telefono",onChange:function(e){return E(e.target.value)}}),Object(b.jsx)(K.a.Text,{className:"text-muted",children:"En caso de celular, omitir el n\xfamero de \xe1rea"})]}),Object(b.jsxs)(K.a.Group,{className:"mb-3",children:[Object(b.jsx)(K.a.Label,{children:"Email address"}),Object(b.jsx)(K.a.Control,{type:"email",placeholder:"Ingrese su Email",onChange:function(e){return l(e.target.value)}}),Object(b.jsx)(K.a.Text,{className:"text-muted",children:"Nunca revelaremos su direccion a terceros"})]}),Object(b.jsxs)(K.a.Group,{className:"mb-3",children:[Object(b.jsx)(K.a.Label,{children:"Email address"}),Object(b.jsx)(K.a.Control,{type:"email",placeholder:"Reingrese su Email",onChange:function(e){return h(e.target.value)}}),Object(b.jsx)(K.a.Text,{className:"text-muted",children:"Ingrese de nuevo su direcci\xf3n de correo"})]}),Object(b.jsx)(p.b,{to:"/complete",children:Object(b.jsx)(Q.a,{variant:"primary",type:"submit",onClick:function(){I()},children:"Terminar mi compra"})})]})})})),Z=c(98),ee=c.n(Z),te=c(99),ce=(c(189),function(){var e=Object(n.useContext)(d).OrderID,t=Object(n.useState)(!0),c=Object(j.a)(t,2),a=c[0],r=c[1],s={loop:!0,autoplay:!0,animationData:te,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return setTimeout((function(){r(!1)}),3e3),Object(b.jsx)(b.Fragment,{children:!1===a?Object(b.jsx)("section",{className:"complete-container",children:Object(b.jsxs)("div",{className:"complete-msg",children:[Object(b.jsx)("h2",{children:"Gracias por su compra!"}),Object(b.jsxs)("p",{className:"complete-txt",children:["El n\xfamero de orden es: ",Object(b.jsx)("strong",{children:e})]}),Object(b.jsx)(p.b,{to:"/pokeballs",children:Object(b.jsx)("button",{className:"btn btn-primary",children:"Volver a la tienda"})})]})}):Object(b.jsx)("div",{className:"loading-container",children:Object(b.jsx)(ee.a,{options:s,height:400,width:400})})})});c(190),c(191);var ne=function(){return Object(b.jsx)(x,{children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(k,{}),Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{exact:!0,path:"/",children:Object(b.jsx)(B,{})}),Object(b.jsx)(g.a,{exact:!0,path:"/trainers",children:Object(b.jsx)(z,{})}),Object(b.jsx)(g.a,{exact:!0,path:"/pokedex",children:Object(b.jsx)(A,{})}),Object(b.jsx)(g.a,{exact:!0,path:"/pokedex/:PokeID",component:F,children:Object(b.jsx)(F,{})}),Object(b.jsx)(g.a,{exact:!0,path:"/complete",children:Object(b.jsx)(ce,{})}),Object(b.jsxs)(U,{children:[Object(b.jsxs)(g.a,{exact:!0,path:"/cart",children:[Object(b.jsx)("h3",{className:"cart-title",children:"Carrito de compras"}),Object(b.jsx)(q,{})]}),Object(b.jsx)(g.a,{exact:!0,path:"/pokeballs",children:Object(b.jsx)(H,{})}),Object(b.jsx)(g.a,{exact:!0,path:"/checkout",children:Object(b.jsx)(X,{})})]})]})]})})},ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,210)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(ne,{})}),document.getElementById("root")),ae()},72:function(e,t,c){},99:function(e){e.exports=JSON.parse('{"v":"5.5.3","fr":30,"ip":0,"op":100,"w":100,"h":100,"nm":"loaded","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Camada de forma 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":42.914,"ix":10},"p":{"a":0,"k":[40,72.25,0],"ix":2},"a":{"a":0,"k":[4.868,22.658,0],"ix":1},"s":{"a":0,"k":[100,96.03,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[9.5,57.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":20,"ix":4},"nm":"Caminho do ret\xe2ngulo 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.141960859299,0.141960859299,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Preenchimento 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[4.488,23.643],"ix":2},"a":{"a":0,"k":[-1.762,30.143],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":0,"s":[100,0]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":69.6,"s":[100,0]},{"t":81.599609375,"s":[100,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Ret\xe2ngulo 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Camada de forma 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,53.75,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[90,90],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Caminho da elipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.141176477075,0.141176477075,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":0,"ix":5},"r":1,"bm":0,"nm":"Preenchimento 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.5,-3.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":24,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":48,"s":[100]},{"t":66,"s":[0]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":24,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Aparar caminhos 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":100,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Camada de forma 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-10.274,"ix":10},"p":{"a":0,"k":[54.75,54.25,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[0,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":63.6,"s":[0,100,100]},{"t":67.2001953125,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[9.75,23.75],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":20,"ix":4},"nm":"Caminho do ret\xe2ngulo 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.141176477075,0.141176477075,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Preenchimento 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.375,-1.625],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,168.687],"ix":3},"r":{"a":0,"k":-25.317,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Ret\xe2ngulo 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":100,"st":0,"bm":0}],"markers":[]}')}},[[193,1,2]]]);
//# sourceMappingURL=main.cac1e11c.chunk.js.map