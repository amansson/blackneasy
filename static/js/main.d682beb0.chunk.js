(this.webpackJsonpblackneasy=this.webpackJsonpblackneasy||[]).push([[0],{222:function(e,a,t){},223:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(86),c=t.n(r),m=t(6),i=t(4),s=t(3),o=t(34),u=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],c=function(){r(!t)};return l.a.createElement("div",{className:"nav"},l.a.createElement(m.b,{exact:!0,to:"/",className:"logo"},"Black and Easy"),l.a.createElement("nav",{className:t?"side":"top"},l.a.createElement(m.b,{onClick:t?c:"",exact:!0,to:"/",className:"link",activeClassName:"link active"},"Hem"),l.a.createElement(m.b,{onClick:t?c:"",exact:!0,to:"/animal",className:"link",activeClassName:"link active"},"Djur"),l.a.createElement(m.b,{onClick:t?c:"",exact:!0,to:"/certificate",className:"link",activeClassName:"link active"},"MH och HD"),l.a.createElement(m.b,{onClick:t?c:"",exact:!0,to:"/puppies",className:"link",activeClassName:"link active"},"Valpar"),l.a.createElement(m.b,{onClick:t?c:"",exact:!0,to:"/brood",className:"link",activeClassName:"link active"},"Kullar"),l.a.createElement(m.b,{onClick:t?c:"",exact:!0,to:"/about",className:"link",activeClassName:"link active"},"Om Mig"),l.a.createElement(m.b,{onClick:t?c:"",exact:!0,to:"/gallery",className:"link",activeClassName:"link active"},"Fotocollage"),l.a.createElement(m.b,{onClick:t?c:"",exact:!0,to:"/meetup",className:"link",activeClassName:"link active"},"Kennel Tr\xe4ff")),l.a.createElement("button",{onClick:c,className:"nav-button"},l.a.createElement(o.a,null)))},d=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Namn: Marie-Louise"),l.a.createElement("p",null,"Telefon: 0735-34343423"),l.a.createElement("p",null,"Mail: stadning@hotmail.com"))},p=t(88),E=function(e){return l.a.createElement("div",{className:"modalBackground",onClick:e.showModal},l.a.createElement("button",{onClick:e.showModal,className:"exitButton"},l.a.createElement(p.a,null)),l.a.createElement("div",{className:"modalInner"},l.a.createElement("h2",null,e.caption),e.image))},g=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],c=t[1],m=function(){c(!r)};return l.a.createElement(n.Fragment,null,l.a.createElement("a",{onClick:m},l.a.createElement("div",{className:"child"},e.content)),r?l.a.createElement(E,{showModal:m,image:e.content}):"")},f=function(e){for(var a={},t=[],r=0;r<e.columns;r++)a["column".concat(r)]=[];for(var c=0;c<e.children.length;c++){var m=c%e.columns;a["column".concat(m)].push(l.a.createElement(n.Fragment,{key:c},l.a.createElement(g,{content:e.children[c]})))}for(var i=0;i<e.columns;i++)t.push(l.a.createElement("div",{key:i,className:"column"},a["column".concat(i)]));return l.a.createElement("div",{className:"masonry masonry-template-".concat(e.columns)},t)},b=t(54),h=t.n(b),v=t(89),k=function(e,a){var t=Object(n.useState)(null),l=Object(s.a)(t,2),r=l[0],c=l[1],m=Object(n.useState)(null),i=Object(s.a)(m,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){(function(){var t=Object(v.a)(h.a.mark((function t(){var n,l;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e,a);case 3:return n=t.sent,t.next=6,n.json();case 6:l=t.sent,c(l),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),u(o);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]),{response:r,error:o}},N=t(2),y=function(e){var a=k("https://res.cloudinary.com/blackneasy/image/list/".concat(e.images,".json"),{});return a.response?l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("h2",null,e.header)),l.a.createElement("div",{className:"breed"},l.a.createElement("div",null),l.a.createElement("div",{className:"breed-couple"},l.a.createElement("div",{class:"couple"},l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.imageMother},l.a.createElement(N.Transformation,{crop:"fill",gravity:"faces",width:"300",height:"200",dpr:"auto",responsive_placeholder:"blank"})),l.a.createElement("div",{class:"couple-infos"},l.a.createElement("h2",null,e.nameMother),l.a.createElement("p",null,"Mamma"))),l.a.createElement("div",{className:"bg"},l.a.createElement("div",{class:"avatar-bordered"},l.a.createElement("div",{className:"heart"},l.a.createElement(o.b,null)))),l.a.createElement("div",{class:"couple"},l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.imageFather},l.a.createElement(N.Transformation,{crop:"scale",gravity:"faces"})),l.a.createElement("div",{class:"couple-infos"},l.a.createElement("h2",null,e.nameFather),l.a.createElement("p",null,"Pappa")))),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement(f,{columns:3},a.response.resources.map((function(e){return l.a.createElement(N.Image,{key:e.public_id,cloudName:"blackneasy",publicId:e.public_id})}))),l.a.createElement("br",null),l.a.createElement("br",null)):l.a.createElement("div",{className:"loading"},"Loading...")},j=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"banner"},l.a.createElement("div",null,l.a.createElement("p",null,"Belgisk Vallhund / Tervuerens, Groendahl, Russkaya Tsvetnaya Bolonka"))),l.a.createElement("div",{className:"wrapper"},l.a.createElement(y,{header:"Parades 21 Juni 2020",images:"breed_leda_proffen",imageMother:"profile/leda_profile",imageFather:"profile/proffen_profile",nameMother:"Leda",nameFather:"Proffen"}),l.a.createElement(y,{header:"Parades 21 Juni 2020",images:"breed_jixie_proffen",imageMother:"profile/jixie_profile",imageFather:"profile/proffen_profile",nameMother:"Jixie",nameFather:"Proffen"})))},_=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],c=t[1],m=function(){c(!r)};return l.a.createElement(n.Fragment,null,l.a.createElement("a",{onClick:m},l.a.createElement("div",{className:"card"},l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.image,alt:"profile"},l.a.createElement(N.Transformation,{crop:"scale",heigth:"300"})),l.a.createElement("div",{className:"body"},l.a.createElement("h2",null,e.name),l.a.createElement("span",{className:"other"},e.other?"( ".concat(e.other," )"):""),l.a.createElement("p",null,e.breed)))),r?l.a.createElement(E,{showModal:m,image:l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.image})}):"")},x=function(e){var a=k("https://res.cloudinary.com/blackneasy/image/list/".concat(e.animal,".json"),{});return a.response?l.a.createElement("div",{className:"cards-animal"},a.response.resources.map((function(e){return l.a.createElement(_,{key:e.public_id,image:e.public_id,name:e.context.custom.caption,breed:e.context.custom.breed,other:e.context.custom.other})}))):l.a.createElement("div",{className:"loading"},"Loading...")},O=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"wrapper"},l.a.createElement(x,{animal:"dog"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x,{animal:"cat"})))},M=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],c=t[1],m=function(){c(!r)};return l.a.createElement(n.Fragment,null,l.a.createElement("a",{onClick:m},l.a.createElement("div",{className:"card"},l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.image_id},l.a.createElement(N.Transformation,{crop:"scale",width:"300",height:"200",dpr:"auto",responsive_placeholder:"blank"})),l.a.createElement("div",{className:"caption"},e.caption))),r?l.a.createElement(E,{showModal:m,image:l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.image_id}),caption:e.caption}):"")},I=function(){var e=k("https://res.cloudinary.com/blackneasy/image/list/mh.json",{});return e.response?(console.log(e),l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"MH"),l.a.createElement("div",{className:"cards-certificate"},e.response.resources.map((function(e){return l.a.createElement(M,{key:e.public_id,image_id:e.public_id,caption:e.context.custom.caption})}))))):l.a.createElement("div",{className:"loading"},"Loading...")},F=function(e){return l.a.createElement("div",{className:"puppies-select",onClick:e.toggle},l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.imageMother},l.a.createElement(N.Transformation,{crop:"fill",gravity:"faces",width:"300",height:"200"})),l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.imageFather},l.a.createElement(N.Transformation,{crop:"fill",gravity:"faces",width:"300",height:"200"})),l.a.createElement("div",{className:"infos"},l.a.createElement("h2",null,e.nameMother),l.a.createElement("p",null,"Mamma")),l.a.createElement("div",{className:"infos"},l.a.createElement("h2",null,e.nameFather),l.a.createElement("p",null,"Pappa")))},w=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],c=t[1],m=function(){c(!r)};return l.a.createElement(n.Fragment,null,l.a.createElement("a",{onClick:m},l.a.createElement("div",{className:"image-puppy"},l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.image},l.a.createElement(N.Transformation,{crop:"fill",gravity:"faces",width:"300",height:"200",dpr:"auto",responsive_placeholder:"blank"})))),r?l.a.createElement(E,{showModal:m,image:l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.image}),caption:e.caption}):"")},C=function(e){var a=k("https://res.cloudinary.com/blackneasy/image/list/".concat(e.puppies,".json"),{});return a.response?l.a.createElement(n.Fragment,null,a.response.resources.map((function(e){return l.a.createElement(w,{key:e.public_id,image:e.public_id})}))):l.a.createElement("div",{className:"loading"},"Loading...")},S=function(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),m=Object(s.a)(c,2),i=m[0],o=m[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),p=d[0],E=d[1],g=Object(n.useState)(!1),f=Object(s.a)(g,2),b=f[0],h=f[1],v=Object(n.useState)(!1),k=Object(s.a)(v,2),N=k[0],y=k[1],j=function(){r(!1),o(!1),E(!1),h(!1),y(!1)};return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",{className:"notice-action"},"Klicka p\xe5 Mamma - Pappa f\xf6r att se deras valparna"),l.a.createElement("div",{className:"card-puppies"},l.a.createElement(F,{toggle:function(){j(),r(!t)},imageMother:"profile/Easy_profile",imageFather:"profile/Kastor_profile",nameMother:"Easy",nameFather:"Kastor"}),l.a.createElement(F,{toggle:function(){j(),o(!i)},imageMother:"profile/Vimsa_profile",imageFather:"profile/Zkrutt_profile",nameMother:"Vimsa",nameFather:"Zkrutt"}),l.a.createElement(F,{toggle:function(){j(),E(!p)},imageMother:"/profile/Shantis_profile",imageFather:"profile/Zkrutt_profile",nameMother:"Shantis",nameFather:"Zkrutt"}),l.a.createElement(F,{toggle:function(){j(),h(!b)},imageMother:"profile/Vimsa_profile",imageFather:"profile/Kazan_profile",nameMother:"Vimsa",nameFather:"Kazan"}),l.a.createElement(F,{toggle:function(){j(),y(!N)},imageMother:"profile/Tiffy_profile",imageFather:"profile/",nameMother:"Tiffy",nameFather:"Hane"})),t?l.a.createElement("div",{className:"select-divider"},l.a.createElement("h2",{className:"text-align-center"},"Easy och Kastor"),l.a.createElement("div",{className:"wrapper puppies-images"},l.a.createElement(C,{puppies:"puppies_easy_kastor_1"}))):"",i?l.a.createElement("div",{className:"select-divider"},l.a.createElement("h2",{className:"text-align-center"},"Vimsa och Zkrutt"),l.a.createElement("div",{className:"wrapper puppies-images"},l.a.createElement(C,{puppies:"puppies_vimsa_zkrutt"}))):"",p?l.a.createElement("div",{className:"select-divider"},l.a.createElement("h2",{className:"text-align-center"},"Shantis och Zkrutt"),l.a.createElement("div",{className:"wrapper puppies-images"},l.a.createElement(C,{puppies:"puppies_shantis_zkrutt"}))):"",b?l.a.createElement("div",{className:"select-divider"},l.a.createElement("h2",{className:"text-align-center"},"Vimsa och Kazan"),l.a.createElement("div",{className:"wrapper puppies-images"},l.a.createElement(C,{puppies:"puppies_vimsa_kazan"}))):"",N?l.a.createElement("div",{className:"select-divider"},l.a.createElement("h2",{className:"text-align-center"},"Tiffy och Hane"),l.a.createElement("div",{className:"wrapper puppies-images"},l.a.createElement(C,{puppies:"puppies_tiffy"}))):""))},K=function(){var e=k("https://res.cloudinary.com/blackneasy/image/list/gallery.json",{});return e.response?l.a.createElement("div",{className:"wrapper"},l.a.createElement(f,{columns:4},e.response.resources.map((function(e){return l.a.createElement(N.Image,{key:e.public_id,cloudName:"blackneasy",publicId:e.public_id})})))):l.a.createElement("div",{className:"loading"},"Loading...")},T=function(e){var a=k("https://res.cloudinary.com/blackneasy/image/list/".concat(e.images,".json"),{});return a.response?l.a.createElement(n.Fragment,null,l.a.createElement("h2",{className:"text-align-center"},e.brood),l.a.createElement("div",{className:"date text-align-center"},e.date),l.a.createElement("div",{className:"cards-brood"},a.response.resources.map((function(e){return l.a.createElement("div",{className:"card",key:e.public_id},l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.public_id,alt:"puppy"}),l.a.createElement("div",{class:"info"},l.a.createElement("span",{class:"gender"},e.context.custom.gender),l.a.createElement("h3",null,e.context.custom.caption),l.a.createElement("span",{class:"location"},e.context.custom.location)))})))):l.a.createElement("div",{className:"loading"},"Loading...")},V=function(e){return l.a.createElement("div",{className:"select",onClick:e.toggle},l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.image,alt:e.image}),l.a.createElement("div",{className:"body"},l.a.createElement("h2",null,e.name),l.a.createElement("p",null,e.race)))},J=function(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),m=Object(s.a)(c,2),i=m[0],o=m[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),p=d[0],E=d[1],g=Object(n.useState)(!1),f=Object(s.a)(g,2),b=f[0],h=f[1],v=function(){r(!1),o(!1),E(!1),h(!1)};return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",{className:"notice-action"},"Klicka p\xe5 tikarna f\xf6r att se deras valparna"),l.a.createElement("div",{className:"select-brood"},l.a.createElement(V,{toggle:function(){v(),r(!t)},name:"Easy",image:"profile/Easy_profile",race:"Groenendael"}),l.a.createElement(V,{toggle:function(){v(),o(!i)},name:"Vimsa",image:"profile/Vimsa_profile",race:"Groenendael"}),l.a.createElement(V,{toggle:function(){v(),E(!p)},name:"Jixie",image:"profile/Jixie_profile",race:"Tervuerens"}),l.a.createElement(V,{toggle:function(){v(),h(!b)},name:"Shantis",image:"profile/Shantis_profile",race:"Groenendael"})),t?l.a.createElement("div",{className:"select-divider"},l.a.createElement(T,{brood:"Easy och Kastor",date:"20 November 2015 ",images:"easy3"}),l.a.createElement(T,{brood:"Easy och Kastor",date:"20 November 2015 ",images:"easy2"}),l.a.createElement(T,{brood:"Easy och Kastor",date:"20 November 2015 ",images:"easy1"})):"",i?l.a.createElement("div",{className:"select-divider"},l.a.createElement(T,{brood:"Vimsa och Kazan",date:"07 December 2018",images:"brood_vimsa_3"}),l.a.createElement(T,{brood:"Vimsa och Zkrutt",date:"13 Juni 2017",images:"brood_vimsa_2"}),l.a.createElement(T,{brood:"Vimsa och Zkrutt",date:"09 Oktober 2016",images:"brood_vimsa_1"})):"",p?l.a.createElement("div",{className:"select-divider"},l.a.createElement(T,{brood:"Easy och Kastor",date:"05 September 2014",images:"easy3"}),l.a.createElement(T,{brood:"Easy och Kastor",date:"05 September 2014",images:"easy1"})):"",b?l.a.createElement("div",{className:"select-divider"},l.a.createElement(T,{brood:"Easy och Kastor",date:"20 November 2015",images:"easy3"}),l.a.createElement(T,{brood:"Easy och Kastor",date:"05 September 2014",images:"easy2"})):""))},L=function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],c=t[1],m=function(){c(!r)};return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"card",onClick:m},l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.image},l.a.createElement(N.Transformation,{crop:"fill",gravity:"faces",width:"300",height:"200",dpr:"auto",responsive_placeholder:"blank"}))),r?l.a.createElement(E,{showModal:m,image:l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:e.image})}):"")},H=function(e){var a=k("https://res.cloudinary.com/blackneasy/image/list/".concat(e.meetup,".json"),{});return a.response?l.a.createElement(n.Fragment,null,a.response.resources.map((function(e){return l.a.createElement(L,{key:e.public_id,image:e.public_id})}))):l.a.createElement("div",{className:"loading"},"Loading...")},B=function(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),m=Object(s.a)(c,2),i=m[0],o=m[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),p=d[0],E=d[1],g=function(){r(!1),o(!1),E(!1)};return l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",{className:"notice-action"},"Klicka  nedan f\xf6r olika kennel tr\xe4ffar"),l.a.createElement("div",{className:"select-meetup"},l.a.createElement("div",{className:"select"},l.a.createElement("a",{href:"#",onClick:function(){g(),r(!t)}},l.a.createElement("img",{src:"https://res.cloudinary.com/blackneasy/image/upload/v1595575452/meetup/1/163_rsmxqx.jpg",alt:"Kennel Tr\xe4ff 1"}),l.a.createElement("p",{className:"caption"},"Kennel Tr\xe4ff 1"))),l.a.createElement("div",{className:"select"},l.a.createElement("a",{href:"#",onClick:function(){g(),o(!i)}},l.a.createElement("img",{src:"https://res.cloudinary.com/blackneasy/image/upload/v1596205582/meetup/2/396_g3dxsq.jpg",alt:"Kennel Tr\xe4ff 2"}),l.a.createElement("p",{className:"caption"},"Kennel Tr\xe4ff 2"))),l.a.createElement("div",{className:"select"},l.a.createElement("a",{href:"#",onClick:function(){g(),E(!p)}},l.a.createElement("img",{src:"https://res.cloudinary.com/blackneasy/image/upload/v1596205433/meetup/3/Kenneltra%CC%88ff-O%CC%88rkeljunga-15-sept.-2019-076_hgw8nc.jpg",alt:"Kennel Tr\xe4ff 3"}),l.a.createElement("p",{className:"caption"},"Kennel Tr\xe4ff 3")))),l.a.createElement("div",{className:"meetup-line"}),l.a.createElement("div",{className:"cards-meetup"},t?l.a.createElement(H,{meetup:"meetup1"}):"",i?l.a.createElement(H,{meetup:"meetup2"}):"",p?l.a.createElement(H,{meetup:"meetup3"}):""))},Z=function(){return l.a.createElement("div",{className:"wrapper about"},l.a.createElement("div",{className:"bg"},l.a.createElement("h2",null,"Marie-Louise M\xe5nsson"),l.a.createElement("p",null,"Ja, var ska man b\xf6rja? Mina allra f\xf6rsta hundar var tv\xe5 yorkshireterriers som flyttade in hos mig 1972. N\xe4sta hundras som f\xe5ngade mitt intresse var flatcoated retriever, som d\xe5, i slutet av 70-talet, var en relativt liten ras i Sverige. Flattarna f\xf6ljde mig i m\xe5nga \xe5r men efter ett antal \xe5r fick jag upp \xf6gonen f\xf6r den belgiska vallhunden."),l.a.createElement("p",null,"Min f\xf6rsta tervueren, Buffelino, kom i min \xe4go 1992. Buffe var en fantastiskt sn\xe4ll, stabil och trygg terv och han var min trogne f\xf6ljeslagare i m\xe5nga \xe5r. Ett antal tervar f\xf6ljde mig , 2007 d\xe5 skaffade jag min f\xf6rsta groenendal, Easy. Easy \xe4r en fantastiskt stabil, balanserad och sn\xe4ll tik som alltid ger 100 % n\xe4r du arbetar med henne. Den belgiska vallhunden och d\xe5 framf\xf6rallt tervuerensen och groenendalen, \xe4r den ras som jag k\xe4nner passar mig b\xe4st."),l.a.createElement("p",null,"En bra groenendal eller terveuren har allt, arbetsvilja, stabil mentalitet och en sund exteri\xf6r som f\xf6ljer rasstandarden. Rasen passar till lite av varje. Vill du vara aktiv och ha kul med din hund s\xe5 h\xe4nger en belgare alltid med och tackar aldrig nej. Jag vet hur viktigt det \xe4r att ha en mentalt bra hund, med min uppf\xf6dning vill jag fokusera p\xe5 det.")),l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:"kontakt",width:"300",crop:"scale",alt:"Marie-Louise"}),l.a.createElement(N.Image,{cloudName:"blackneasy",publicId:"diplom",width:"600",crop:"scale",alt:"Diplom"}),l.a.createElement("div",{className:"bg"},l.a.createElement("h2",null,"M\xe5let med min uppf\xf6dning"),l.a.createElement("p",null,"Mitt m\xe5l idag \xe4r att f\xf6da upp trygga, mentalt stabila hundar som b\xe5de g\xe5r att arbeta med och st\xe4lla ut. Hundarna f\xf6ds upp i hemmilj\xf6 och blir vana vid b\xe5de barn, katter och andra hundar."),l.a.createElement("h3",null,"Diplom"),l.a.createElement("h4",null,"2015-2016"),l.a.createElement("div",{className:"diplom"},l.a.createElement("p",null,"Hunduppf\xf6darutbildning del 1 \u2013 2 \u2013 3")),l.a.createElement("div",{className:"diplom"},l.a.createElement("p",null,"Hunduppf\xf6darutbildning Juridik del 1 \u2013 2")),l.a.createElement("h4",null,"2017"),l.a.createElement("div",{className:"diplom"},l.a.createElement("p",null,"Nya Hunduppf\xf6darutbildningen, ",l.a.createElement("strong",null,"se bild")))))},z=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",{id:"main"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",component:j,exact:!0}),l.a.createElement(i.a,{path:"/animal",component:O,exact:!0}),l.a.createElement(i.a,{path:"/certificate",component:I,exact:!0}),l.a.createElement(i.a,{path:"/puppies",component:S,exact:!0}),l.a.createElement(i.a,{path:"/brood",component:J,exact:!0}),l.a.createElement(i.a,{path:"/about",component:Z,exact:!0}),l.a.createElement(i.a,{path:"/gallery",component:K,exact:!0}),l.a.createElement(i.a,{path:"/meetup",component:B,exact:!0}))),l.a.createElement(d,null))};t(222);c.a.render(l.a.createElement(m.a,null,l.a.createElement(z,null)),document.getElementById("root"))},90:function(e,a,t){e.exports=t(223)}},[[90,1,2]]]);
//# sourceMappingURL=main.d682beb0.chunk.js.map