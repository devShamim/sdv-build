(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Sent"],{"4c6e":function(e,t,n){"use strict";n.r(t);n("4de4"),n("d3b7");var a=n("7a23"),c={key:0};function o(e,t,n,o,r,i){var u=Object(a["resolveComponent"])("Content");return e.isLoading?(Object(a["openBlock"])(),Object(a["createElementBlock"])("p",c,"Loading")):(Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:1,email:e.email.filter((function(e){return"sent"===e.type})),searchData:e.searchData},null,8,["email","searchData"]))}var r=n("5502"),i=n("e1bc"),u=Object(a["defineComponent"])({name:"Sent",components:{Content:i["default"]},setup:function(){var e=Object(r["c"])(),t=e.state,n=Object(a["computed"])((function(){return t.email.allMessage})),c=Object(a["computed"])((function(){return t.headerSearchData})),o=Object(a["computed"])((function(){return t.email.sLoading}));return{email:n,searchData:c,isLoading:o}}}),s=u,l=n("6b0d"),d=n.n(l);const p=d()(s,[["render",o]]);t["default"]=p}}]);
//# sourceMappingURL=Sent.1c8d44dc.js.map