(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["team"],{"2ae5":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=Object(n["createElementVNode"])("span",{class:"title-counter"},"274 Users",-1),a=Object(n["createTextVNode"])(" Add New Member "),r={to:"#"},l=Object(n["createElementVNode"])("span",null,"View",-1),b={to:"#"},u=Object(n["createElementVNode"])("span",null,"Edit",-1),d={to:"#"},s=Object(n["createElementVNode"])("span",null,"Delete",-1);function j(e,t,c,j,O,i){var m=Object(n["resolveComponent"])("sdAutoComplete"),p=Object(n["resolveComponent"])("sdFeatherIcons"),f=Object(n["resolveComponent"])("sdButton"),C=Object(n["resolveComponent"])("sdPageHeader"),h=Object(n["resolveComponent"])("CardToolbox"),N=Object(n["resolveComponent"])("a-skeleton"),w=Object(n["resolveComponent"])("sdCards"),V=Object(n["resolveComponent"])("TeamCard"),k=Object(n["resolveComponent"])("a-col"),x=Object(n["resolveComponent"])("a-row"),v=Object(n["resolveComponent"])("Main");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(h,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(C,{title:"Team Members"},{subTitle:Object(n["withCtx"])((function(){return[o,Object(n["createVNode"])(m,{dataSource:e.searchData,width:"100%",placeholder:"Search by Name",patterns:""},null,8,["dataSource"])]})),buttons:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{class:"btn-add_new",size:"default",key:"1",type:"primary"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,{type:"plus",size:"14"}),a]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(v,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x,{gutter:25},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.team,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(k,{key:e.id,xxl:6,lg:8,sm:12,xs:24},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(),Object(n["createBlock"])(n["Suspense"],null,{fallback:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{headless:""},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(N,{avatar:"",active:""})]})),_:1})]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(V,{user:e},{item:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("a",r,[Object(n["createVNode"])(p,{size:"14",type:"eye"}),l]),Object(n["createElementVNode"])("a",b,[Object(n["createVNode"])(p,{size:"14",type:"edit"}),u]),Object(n["createElementVNode"])("a",d,[Object(n["createVNode"])(p,{size:"14",type:"trash-2"}),s])]})),_:2},1032,["user"])]})),_:2},1024))]})),_:2},1024)})),128))]})),_:1})]})),_:1})],64)}c("d3b7"),c("3ca3"),c("ddb0");var O=c("5502"),i=c("23d0"),m=Object(n["defineAsyncComponent"])((function(){return Promise.all([c.e("chunk-5aeac7d4"),c.e("chunk-2d0af8bb"),c.e("chunk-4a5f46a6"),c.e("chunk-2d22c6cf"),c.e("chunk-15b80f2c")]).then(c.bind(null,"7df3"))})),p=Object(n["defineComponent"])({name:"Team",components:{Main:i["Main"],CardToolbox:i["CardToolbox"],TeamCard:m},setup:function(){var e=Object(O["c"])(),t=e.state,c=Object(n["computed"])((function(){return t.headerSearchData})),o=Object(n["computed"])((function(){return t.team.data}));return{searchData:c,team:o}}}),f=p,C=c("6b0d"),h=c.n(C);const N=h()(f,[["render",j]]);t["default"]=N}}]);
//# sourceMappingURL=team.4dee227f.js.map