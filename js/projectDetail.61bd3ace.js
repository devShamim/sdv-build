(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projectDetail"],{"0950":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAADdklEQVR4Xu2XT2sqQRDEWw+JYi4iHvwbiaCISI7e/NZ+AW8eQxCJB5UElSDiRSEB8T16yMg4ur6NVvIQai+Bdbem+jfVPZtIu93+I7xgBCIECmNphAgUy5NAwTwJlEDRBMB6nKEECiYAlmNCCRRMACzHhBIomABYjgklUDABsBwTSqBgAmA5JpRAwQTAckwogYIJgOWYUAIFEwDLMaEECiYAlmNCCRRMACzHhBIomABYjgklUDABsBwTSqBgAmA5JpRAwQTAckwogYIJgOWYUAIFEwDLfSuhjUZDCoWCsbBaraTT6ezZyeVyUq/XZTabyfPz80VWU6mUPD4+ynw+32mpfq1Wk9fXVxkMBnv6v+ntVGGhgbrFLBaLg2J1kWazKQri7e3tYqCqV6lUpFgsSr/fl8lkIq1WSz4/P6Xb7R5spAX9W96CoIYGqsVls1kDSk0rPL1scQq8XC5LNBo1v1+aUGvYQlwul3vruwX9L2/HoIYG6idUW2w6ne5aTwvXopPJpPmrQBW6Ao7H4xKLxWSz2Uiv1ztIm59E16iuW61WzS23/f1n3ISG8WY3QROvnvWyneV2wilvFwG1Lfjw8GAguW2tBagpnakWrAWq94fDoQGvgG9vb81zFtRoNJL7+/u9zfGNuu8FtZoW/h1v9nndfO0yF5yuoZsYxpvvJ3RCFVo6nZanpyfT0kGt6AP1x4IafXl5MSm1B4nq+XPRGtVC8/m82cT39/ejo+Qcb/6Y0PVc72G8XZRQdzGbVp2pkUjEtLR/KSR7uXPWBeqnxNdwT3ptTXeGu8+e4+3YTHZ1/uXt4kNJ2y6RSOwSGtSGfkKD3gnT8u4osQk6dsqf402BlUolGY/HZhz9esvbgu7u7szmfHx87OAGpUULtQeStqx9R5/Xb8z1em1aXcFlMpndgWU7wC046J5dWzfyO97cUXJzcyPb7dbMevvZdcpbUDr1fugZekok6Df/0+ocjZ9659gMRaxFoF/f1QiYTKjzj8pVAEWZvCadH235awKB8kqgKJJfOgRKoGACYDkmlEDBBMByTCiBggmA5ZhQAgUTAMsxoQQKJgCWY0IJFEwALMeEEiiYAFiOCSVQMAGwHBNKoGACYDkmlEDBBMByTCiBggmA5ZhQAgUTAMsxoQQKJgCWY0IJFEwALMeEEiiYAFiOCQUD/QsnXHNaadO+kwAAAABJRU5ErkJggg=="},1276:function(e,t,c){"use strict";var a=c("2ba4"),n=c("c65b"),o=c("e330"),l=c("d784"),r=c("44e7"),i=c("825a"),s=c("1d80"),d=c("4840"),b=c("8aa5"),j=c("50c4"),u=c("577e"),O=c("dc4a"),A=c("4dae"),m=c("14c3"),V=c("9263"),p=c("9f7f"),g=c("d039"),N=p.UNSUPPORTED_Y,f=4294967295,E=Math.min,C=[].push,v=o(/./.exec),B=o(C),w=o("".slice),x=!g((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var c="ab".split(e);return 2!==c.length||"a"!==c[0]||"b"!==c[1]}));l("split",(function(e,t,c){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,c){var o=u(s(this)),l=void 0===c?f:c>>>0;if(0===l)return[];if(void 0===e)return[o];if(!r(e))return n(t,o,e,l);var i,d,b,j=[],O=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,p=new RegExp(e.source,O+"g");while(i=n(V,p,o)){if(d=p.lastIndex,d>m&&(B(j,w(o,m,i.index)),i.length>1&&i.index<o.length&&a(C,j,A(i,1)),b=i[0].length,m=d,j.length>=l))break;p.lastIndex===i.index&&p.lastIndex++}return m===o.length?!b&&v(p,"")||B(j,""):B(j,w(o,m)),j.length>l?A(j,0,l):j}:"0".split(void 0,0).length?function(e,c){return void 0===e&&0===c?[]:n(t,this,e,c)}:t,[function(t,c){var a=s(this),l=void 0==t?void 0:O(t,e);return l?n(l,t,a,c):n(o,u(a),t,c)},function(e,a){var n=i(this),l=u(e),r=c(o,n,l,a,o!==t);if(r.done)return r.value;var s=d(n,RegExp),O=n.unicode,A=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(N?"g":"y"),V=new s(N?"^(?:"+n.source+")":n,A),p=void 0===a?f:a>>>0;if(0===p)return[];if(0===l.length)return null===m(V,l)?[l]:[];var g=0,C=0,v=[];while(C<l.length){V.lastIndex=N?0:C;var x,k=m(V,N?w(l,C):l);if(null===k||(x=E(j(V.lastIndex+(N?C:0)),l.length))===g)C=b(l,C,O);else{if(B(v,w(l,g,C)),v.length===p)return v;for(var Q=1;Q<=k.length-1;Q++)if(B(v,k[Q]),v.length===p)return v;C=g=x}}return B(v,w(l,g)),v}]}),!x,N)},"14c3":function(e,t,c){var a=c("da84"),n=c("c65b"),o=c("825a"),l=c("1626"),r=c("c6b6"),i=c("9263"),s=a.TypeError;e.exports=function(e,t){var c=e.exec;if(l(c)){var a=n(c,e,t);return null!==a&&o(a),a}if("RegExp"===r(e))return n(i,e,t);throw s("RegExp#exec called on incompatible receiver")}},"1c39":function(e,t){e.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAYAAAA8uqNSAAAF5UlEQVR4Xu2YSUtjQRzEWxFcUdST+3JQVMSjN7+1X8CbRxERF1TcQES8qCioM9RjOnTal2WKxDhTFRgGjdV5VfV7/+6Xru3t7V/BLydQI4EuA2I26iVgQMxH3QQMiAExIGaAT8AThM9OQmlAJGrmTRoQPjsJpQGRqJk3aUD47CSUBkSiZt6kAeGzk1AaEImaeZMGhM9OQmlAJGrmTRoQPjsJpQGRqJk3aUD47CSUBkSiZt6kAeGzk1AaEImaeZMGhM9OQmlAJGrmTRoQPjsJpQGRqJk3aUD47CSUBkSiZt6kAeGzk1AaEImaeZMGhM9OQmlAJGrmTRoQPjsJpQGRqJk3aUD47CSUBkSiZt6kAeGzk1AaEImaeZMGhM9OQmlAJGrmTRoQPjsJpQGRqJk3aUD47CSUBkSiZt6kAeGzk1AaEImaeZMGhM9OQmlAJGrmTRoQPjsJpQGRqJk3aUD47CSUBkSiZt6kAeGzk1AaEImaeZMGhM9OQmlAJGrmTRoQPjsJpQGRqJk3aUD47CSUBkSiZt6kAeGzk1AaEImaeZMGhM9OQmlAJGrmTRoQPjsJZccB2draKoLe2dkp/p+amgpra2uhp6en+Pnq6irs7+9XylhaWgqLi4uhu7s7vL6+hr29vfDw8ECXNT4+HjY2NsL9/X3lc3ANKysr4fLyMhwfH39ZG9cwPz8fLi4uKu9vbm4GrIVX2XXB59DQUKkn+uK/QdgxQNbX18PMzEx4enqqAmRhYaH4+fz8PKCI2dnZcHh4GG5ubr783Kp88s9BmW9vb2F3d7fqIyJMgPPz8zNcX19XAIGfCHKur7Veq66/net0DJBoCsGOjo5WJkhqFoXg/dvb26IIBP34+Fg1UVoVTiwR609OThafUWsy5deVX0PqCfA1Wq9VHtqxzo8GJA0X5rH1fHx8hJGRkSILFIi7HOMdd3V/f3/o6+sL7+/v4eDgoJg66d2bT4o0UGwry8vLxa/S7aYs9EaApCADluHh4TA4OFhsm/m1vby8hLGxseK9uDVh/XRydnIC/UhA4n6e7uXxbILf4bySnhMwgfDv7OysmDTQ9/b2Vv4OxWPLmpubq0yjsuJTXb27sQyQ9OyUnpuwZq1rQ/EAugxm6PACQLUmbDsmRr7mjwQkXmR6GHx+fv5ycIx36sDAQCGJZ4Y4DY6OjoopEs87ceKUBYvPmp6eLibR3d1d3W2smQmCzwDIOXTpVMRETLfMfGLi8IzJEgH6DiD+KUBwsfFOOj09rTqP4L1mAYlPPigjP3hinfRJBofTRmeGRoCkgGL7SCdAs4AA5nzCGJAQwurqanEHI6D8cTO9G9PzBO587PHxkfdvt5j8oNxoz88BwXViip2cnBQd5p+fPjKna+eP+Ol73mL+3A55OXE7iHdL/j1I/D4Bj5npmSMeUNPvR7AGxjS2J0wOrD0xMVE1ssu+0yj7XXr35oDECYTzBF759yDpdzd4rI/f+URA4vcj8b30OrFW6uG7p0jHzyCtMBzvtrLtoxXrt2uNdj62t+qaDUirkiTWMSBEaIzEE4RJrTnNfzFBmrPqv2ISMCBMakIaAyJUNmPVgDCpCWkMiFDZjFUDwqQmpDEgQmUzVg0Ik5qQxoAIlc1YNSBMakIaAyJUNmPVgDCpCWkMiFDZjFUDwqQmpDEgQmUzVg0Ik5qQxoAIlc1YNSBMakIaAyJUNmPVgDCpCWkMiFDZjFUDwqQmpDEgQmUzVg0Ik5qQxoAIlc1YNSBMakIaAyJUNmPVgDCpCWkMiFDZjFUDwqQmpDEgQmUzVg0Ik5qQxoAIlc1YNSBMakIaAyJUNmPVgDCpCWkMiFDZjFUDwqQmpDEgQmUzVg0Ik5qQxoAIlc1YNSBMakIaAyJUNmPVgDCpCWkMiFDZjFUDwqQmpDEgQmUzVg0Ik5qQxoAIlc1YNSBMakIaAyJUNmPVgDCpCWkMiFDZjFUDwqQmpDEgQmUzVg0Ik5qQxoAIlc1YNSBMakIaAyJUNmPVgDCpCWl+Awq0PLWBYBbDAAAAAElFTkSuQmCC"},4279:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAADdklEQVR4Xu2XT2sqQRDEWw+JYi4iHvwbiaCISI7e/NZ+AW8eQxCJB5UElSDiRSEB8T16yMg4ur6NVvIQai+Bdbem+jfVPZtIu93+I7xgBCIECmNphAgUy5NAwTwJlEDRBMB6nKEECiYAlmNCCRRMACzHhBIomABYjgklUDABsBwTSqBgAmA5JpRAwQTAckwogYIJgOWYUAIFEwDLMaEECiYAlmNCCRRMACzHhBIomABYjgklUDABsBwTSqBgAmA5JpRAwQTAckwogYIJgOWYUAIFEwDLfSuhjUZDCoWCsbBaraTT6ezZyeVyUq/XZTabyfPz80VWU6mUPD4+ynw+32mpfq1Wk9fXVxkMBnv6v+ntVGGhgbrFLBaLg2J1kWazKQri7e3tYqCqV6lUpFgsSr/fl8lkIq1WSz4/P6Xb7R5spAX9W96CoIYGqsVls1kDSk0rPL1scQq8XC5LNBo1v1+aUGvYQlwul3vruwX9L2/HoIYG6idUW2w6ne5aTwvXopPJpPmrQBW6Ao7H4xKLxWSz2Uiv1ztIm59E16iuW61WzS23/f1n3ISG8WY3QROvnvWyneV2wilvFwG1Lfjw8GAguW2tBagpnakWrAWq94fDoQGvgG9vb81zFtRoNJL7+/u9zfGNuu8FtZoW/h1v9nndfO0yF5yuoZsYxpvvJ3RCFVo6nZanpyfT0kGt6AP1x4IafXl5MSm1B4nq+XPRGtVC8/m82cT39/ejo+Qcb/6Y0PVc72G8XZRQdzGbVp2pkUjEtLR/KSR7uXPWBeqnxNdwT3ptTXeGu8+e4+3YTHZ1/uXt4kNJ2y6RSOwSGtSGfkKD3gnT8u4osQk6dsqf402BlUolGY/HZhz9esvbgu7u7szmfHx87OAGpUULtQeStqx9R5/Xb8z1em1aXcFlMpndgWU7wC046J5dWzfyO97cUXJzcyPb7dbMevvZdcpbUDr1fugZekok6Df/0+ocjZ9659gMRaxFoF/f1QiYTKjzj8pVAEWZvCadH235awKB8kqgKJJfOgRKoGACYDkmlEDBBMByTCiBggmA5ZhQAgUTAMsxoQQKJgCWY0IJFEwALMeEEiiYAFiOCSVQMAGwHBNKoGACYDkmlEDBBMByTCiBggmA5ZhQAgUTAMsxoQQKJgCWY0IJFEwALMeEEiiYAFiOCQUD/QsnXHNaadO+kwAAAABJRU5ErkJggg=="},"512e":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n={class:"file-list"},o={class:"file-list__single d-flex"},l={class:"file-single-info d-flex"},r={class:"file-single-logo"},i=["src"],s=Object(a["createElementVNode"])("div",{class:"file-single__content"},[Object(a["createElementVNode"])("span",{class:"file-name"},"Main-admin-design.zip"),Object(a["createElementVNode"])("span",{class:"file-size"},"7.05 MB"),Object(a["createElementVNode"])("span",{class:"file-content-action"},[Object(a["createElementVNode"])("a",{to:"#"},"Download")])],-1),d={class:"file-single-action"},b={to:"#"},j=Object(a["createTextVNode"])(" View "),u={to:"#"},O=Object(a["createTextVNode"])(" Edit "),A={to:"#"},m=Object(a["createTextVNode"])(" Delete "),V={to:"#"},p={class:"file-list__single d-flex"},g={class:"file-single-info d-flex"},N={class:"file-single-logo"},f=["src"],E=Object(a["createElementVNode"])("div",{class:"file-single__content"},[Object(a["createElementVNode"])("span",{class:"file-name"},"Product-guidelines.pdf"),Object(a["createElementVNode"])("span",{class:"file-size"},"522 KB"),Object(a["createElementVNode"])("span",{class:"file-content-action"},[Object(a["createElementVNode"])("a",{to:"#"},"View"),Object(a["createElementVNode"])("a",{to:"#"},"Download")])],-1),C={class:"file-single-action"},v={to:"#"},B=Object(a["createTextVNode"])(" View "),w={to:"#"},x=Object(a["createTextVNode"])(" Edit "),k={to:"#"},Q=Object(a["createTextVNode"])(" Delete "),U={to:"#"},h={class:"file-list__single d-flex"},D={class:"file-single-info d-flex"},T={class:"file-single-logo"},G=["src"],R=Object(a["createElementVNode"])("div",{class:"file-single__content"},[Object(a["createElementVNode"])("span",{class:"file-name"},"admin-wireframe.psd"),Object(a["createElementVNode"])("span",{class:"file-size"},"2.05 MB"),Object(a["createElementVNode"])("span",{class:"file-content-action"},[Object(a["createElementVNode"])("a",{to:"#"},"Download")])],-1),z={class:"file-single-action"},y={to:"#"},I={class:"file-list__single d-flex"},W={class:"file-single-info d-flex"},J={class:"file-single-logo"},Y=["src"],M=Object(a["createElementVNode"])("div",{class:"file-single__content"},[Object(a["createElementVNode"])("span",{class:"file-name"},"Wirefram-escreenshots.jpg"),Object(a["createElementVNode"])("span",{class:"file-size"},"522 KB"),Object(a["createElementVNode"])("span",{class:"file-content-action"},[Object(a["createElementVNode"])("a",{to:"#"},"View"),Object(a["createElementVNode"])("a",{to:"#"},"Download")])],-1),S={class:"file-single-action"},F={to:"#"},q=Object(a["createTextVNode"])(" View "),X={to:"#"},P=Object(a["createTextVNode"])(" Edit "),Z={to:"#"},L=Object(a["createTextVNode"])(" Delete "),K={to:"#"},H={class:"file-list__single d-flex"},_={class:"file-single-info d-flex"},$={class:"file-single-logo"},ee=["src"],te=Object(a["createElementVNode"])("div",{class:"file-single__content"},[Object(a["createElementVNode"])("span",{class:"file-name"},"Logo.png"),Object(a["createElementVNode"])("span",{class:"file-size"},"522 KB"),Object(a["createElementVNode"])("span",{class:"file-content-action"},[Object(a["createElementVNode"])("a",{to:"#"},"View"),Object(a["createElementVNode"])("a",{to:"#"},"Download")])],-1),ce={class:"file-single-action"},ae={class:"dropdown-more"},ne={to:"#"},oe=Object(a["createTextVNode"])(" View "),le={to:"#"},re=Object(a["createTextVNode"])(" Edit "),ie={to:"#"},se=Object(a["createTextVNode"])(" Delete "),de={to:"#"};function be(e,t,be,je,ue,Oe){var Ae=Object(a["resolveComponent"])("sdFeatherIcons"),me=Object(a["resolveComponent"])("sdDropdown"),Ve=Object(a["resolveComponent"])("sdCards");return Object(a["openBlock"])(),Object(a["createBlock"])(Ve,{title:"Files"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("img",{src:c("8a2b"),alt:"File Logo"},null,8,i)]),s]),Object(a["createElementVNode"])("div",d,[Object(a["createVNode"])(me,{class:"wide-dropdwon"},{overlay:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("a",b,[Object(a["createVNode"])(Ae,{type:"eye",size:"14"}),j]),Object(a["createElementVNode"])("a",u,[Object(a["createVNode"])(Ae,{type:"edit",size:"14"}),O]),Object(a["createElementVNode"])("a",A,[Object(a["createVNode"])(Ae,{type:"trash-2",size:"14"}),m])]})),default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("a",V,[Object(a["createVNode"])(Ae,{type:"more-horizontal",size:"16"})])]})),_:1})])]),Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("div",g,[Object(a["createElementVNode"])("div",N,[Object(a["createElementVNode"])("img",{src:c("0950"),alt:"File Logo"},null,8,f)]),E]),Object(a["createElementVNode"])("div",C,[Object(a["createVNode"])(me,{class:"wide-dropdwon"},{overlay:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("a",v,[Object(a["createVNode"])(Ae,{type:"eye",size:"14"}),B]),Object(a["createElementVNode"])("a",w,[Object(a["createVNode"])(Ae,{type:"edit",size:"14"}),x]),Object(a["createElementVNode"])("a",k,[Object(a["createVNode"])(Ae,{type:"trash-2",size:"14"}),Q])]})),default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("a",U,[Object(a["createVNode"])(Ae,{type:"more-horizontal",size:"16"})])]})),_:1})])]),Object(a["createElementVNode"])("div",h,[Object(a["createElementVNode"])("div",D,[Object(a["createElementVNode"])("div",T,[Object(a["createElementVNode"])("img",{src:c("ea32"),alt:"File Logo"},null,8,G)]),R]),Object(a["createElementVNode"])("div",z,[Object(a["createVNode"])(me,{class:"wide-dropdwon"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("a",y,[Object(a["createVNode"])(Ae,{type:"more-horizontal",size:"16"})])]})),_:1})])]),Object(a["createElementVNode"])("div",I,[Object(a["createElementVNode"])("div",W,[Object(a["createElementVNode"])("div",J,[Object(a["createElementVNode"])("img",{src:c("4279"),alt:"File Logo"},null,8,Y)]),M]),Object(a["createElementVNode"])("div",S,[Object(a["createVNode"])(me,{class:"wide-dropdwon"},{overlay:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("a",F,[Object(a["createVNode"])(Ae,{type:"eye",size:"14"}),q]),Object(a["createElementVNode"])("a",X,[Object(a["createVNode"])(Ae,{type:"edit",size:"14"}),P]),Object(a["createElementVNode"])("a",Z,[Object(a["createVNode"])(Ae,{type:"trash-2",size:"14"}),L])]})),default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("a",K,[Object(a["createVNode"])(Ae,{type:"more-horizontal",size:"16"})])]})),_:1})])]),Object(a["createElementVNode"])("div",H,[Object(a["createElementVNode"])("div",_,[Object(a["createElementVNode"])("div",$,[Object(a["createElementVNode"])("img",{src:c("b1bf"),alt:"File Logo"},null,8,ee)]),te]),Object(a["createElementVNode"])("div",ce,[Object(a["createVNode"])(me,{class:"wide-dropdwon"},{overlay:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",ae,[Object(a["createElementVNode"])("a",ne,[Object(a["createVNode"])(Ae,{type:"eye",size:"14"}),oe]),Object(a["createElementVNode"])("a",le,[Object(a["createVNode"])(Ae,{type:"edit",size:"14"}),re]),Object(a["createElementVNode"])("a",ie,[Object(a["createVNode"])(Ae,{type:"trash-2",size:"14"}),se])])]})),default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("a",de,[Object(a["createVNode"])(Ae,{type:"more-horizontal",size:"16"})])]})),_:1})])])])]})),_:1})}var je=Object(a["defineComponent"])({name:"FileListCard"}),ue=je,Oe=c("6b0d"),Ae=c.n(Oe);const me=Ae()(ue,[["render",be]]);t["default"]=me},"8a2b":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAADdklEQVR4Xu2XT2sqQRDEWw+JYi4iHvwbiaCISI7e/NZ+AW8eQxCJB5UElSDiRSEB8T16yMg4ur6NVvIQai+Bdbem+jfVPZtIu93+I7xgBCIECmNphAgUy5NAwTwJlEDRBMB6nKEECiYAlmNCCRRMACzHhBIomABYjgklUDABsBwTSqBgAmA5JpRAwQTAckwogYIJgOWYUAIFEwDLMaEECiYAlmNCCRRMACzHhBIomABYjgklUDABsBwTSqBgAmA5JpRAwQTAckwogYIJgOWYUAIFEwDLfSuhjUZDCoWCsbBaraTT6ezZyeVyUq/XZTabyfPz80VWU6mUPD4+ynw+32mpfq1Wk9fXVxkMBnv6v+ntVGGhgbrFLBaLg2J1kWazKQri7e3tYqCqV6lUpFgsSr/fl8lkIq1WSz4/P6Xb7R5spAX9W96CoIYGqsVls1kDSk0rPL1scQq8XC5LNBo1v1+aUGvYQlwul3vruwX9L2/HoIYG6idUW2w6ne5aTwvXopPJpPmrQBW6Ao7H4xKLxWSz2Uiv1ztIm59E16iuW61WzS23/f1n3ISG8WY3QROvnvWyneV2wilvFwG1Lfjw8GAguW2tBagpnakWrAWq94fDoQGvgG9vb81zFtRoNJL7+/u9zfGNuu8FtZoW/h1v9nndfO0yF5yuoZsYxpvvJ3RCFVo6nZanpyfT0kGt6AP1x4IafXl5MSm1B4nq+XPRGtVC8/m82cT39/ejo+Qcb/6Y0PVc72G8XZRQdzGbVp2pkUjEtLR/KSR7uXPWBeqnxNdwT3ptTXeGu8+e4+3YTHZ1/uXt4kNJ2y6RSOwSGtSGfkKD3gnT8u4osQk6dsqf402BlUolGY/HZhz9esvbgu7u7szmfHx87OAGpUULtQeStqx9R5/Xb8z1em1aXcFlMpndgWU7wC046J5dWzfyO97cUXJzcyPb7dbMevvZdcpbUDr1fugZekok6Df/0+ocjZ9659gMRaxFoF/f1QiYTKjzj8pVAEWZvCadH235awKB8kqgKJJfOgRKoGACYDkmlEDBBMByTCiBggmA5ZhQAgUTAMsxoQQKJgCWY0IJFEwALMeEEiiYAFiOCSVQMAGwHBNKoGACYDkmlEDBBMByTCiBggmA5ZhQAgUTAMsxoQQKJgCWY0IJFEwALMeEEiiYAFiOCQUD/QsnXHNaadO+kwAAAABJRU5ErkJggg=="},"8aa5":function(e,t,c){"use strict";var a=c("6547").charAt;e.exports=function(e,t,c){return t+(c?a(e,t).length:1)}},a912:function(e,t,c){"use strict";c.r(t);c("99af"),c("ac1f"),c("1276");var a=c("7a23"),n={key:"1",class:"project-header"},o=Object(a["createTextVNode"])(),l=Object(a["createElementVNode"])("span",null,"Add Task",-1),r=Object(a["createTextVNode"])(),i=Object(a["createElementVNode"])("span",null,"Mark as Complete",-1),s={key:1,class:"project-action"},d={key:1,to:"#",class:"project-edit"},b=Object(a["createTextVNode"])(" Edit "),j={key:2,to:"#",class:"project-remove"},u=Object(a["createTextVNode"])(" Remove "),O={key:0,class:"spin"},A={class:"project-progress"},m=Object(a["createElementVNode"])("h3",null,"Progress",-1),V={class:"state-single"},p={class:"color-primary"},g={to:"#"},N=Object(a["createTextVNode"])("47"),f=Object(a["createElementVNode"])("p",null,"Total Task",-1),E={class:"state-single"},C={class:"color-secondary"},v={to:"#"},B=Object(a["createTextVNode"])("34"),w=Object(a["createElementVNode"])("p",null,"Task Completed",-1),x={class:"state-single"},k={class:"color-success"},Q={to:"#"},U=Object(a["createTextVNode"])("$27,500"),h=Object(a["createElementVNode"])("p",null,"Spendings",-1),D={class:"state-single"},T={class:"color-warning"},G={to:"#"},R=Object(a["createTextVNode"])("250"),z=Object(a["createElementVNode"])("p",null,"Hours Spent",-1),y={class:"about-project-wrapper"},I={class:"about-content"},W=Object(a["createElementVNode"])("div",{class:"about-project"},[Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("span",null,"Project Owner"),Object(a["createElementVNode"])("p",null,"Peter Jackson")]),Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("span",null,"Budget"),Object(a["createElementVNode"])("p",null,"$56,700")]),Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("span",null,"Start Date"),Object(a["createElementVNode"])("p",{class:"color-primary"},"28 Dec 2019")]),Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("span",null,"Deadline"),Object(a["createElementVNode"])("p",{class:"color-danger"},"18 Mar 2021")])],-1),J={class:"project-users-wrapper"},Y=Object(a["createTextVNode"])(),M=Object(a["createElementVNode"])("span",null,"Add Users",-1),S={class:"project-users"},F={class:"porject-user-single"},q=["src"],X=Object(a["createTextVNode"])("Meyri Carles"),P=Object(a["createElementVNode"])("p",null,"Web Developer",-1),Z={class:"porject-user-single"},L=["src"],K=Object(a["createTextVNode"])("Tuhin Molla"),H=Object(a["createElementVNode"])("p",null,"Project Manager",-1),_={class:"porject-user-single"},$=["src"],ee=Object(a["createTextVNode"])("Billal Hossain"),te=Object(a["createElementVNode"])("p",null,"App Developer",-1),ce={class:"porject-user-single"},ae=["src"],ne=Object(a["createTextVNode"])("Khalid Hasan"),oe=Object(a["createElementVNode"])("p",null,"App Developer",-1),le={class:"porject-user-single"},re=["src"],ie=Object(a["createTextVNode"])("Meyri Carles"),se=Object(a["createElementVNode"])("p",null,"Ui Designer",-1),de=Object(a["createTextVNode"])("Task List"),be=Object(a["createTextVNode"])("     "),je=Object(a["createTextVNode"])("Activities");function ue(e,t,ue,Oe,Ae,me){var Ve=Object(a["resolveComponent"])("sdHeading"),pe=Object(a["resolveComponent"])("sdFeatherIcons"),ge=Object(a["resolveComponent"])("sdButton"),Ne=Object(a["resolveComponent"])("sdPageHeader"),fe=Object(a["resolveComponent"])("a-spin"),Ee=Object(a["resolveComponent"])("a-progress"),Ce=Object(a["resolveComponent"])("sdCards"),ve=Object(a["resolveComponent"])("a-col"),Be=Object(a["resolveComponent"])("router-link"),we=Object(a["resolveComponent"])("router-view"),xe=Object(a["resolveComponent"])("TaskLists"),ke=Object(a["resolveComponent"])("FileListCard"),Qe=Object(a["resolveComponent"])("a-row"),Ue=Object(a["resolveComponent"])("Main"),he=Object(a["resolveComponent"])("ProjectDetailsWrapper");return Object(a["openBlock"])(),Object(a["createBlock"])(he,null,{default:Object(a["withCtx"])((function(){return[e.project?(Object(a["openBlock"])(),Object(a["createBlock"])(Ne,{key:0},{title:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",n,[Object(a["createVNode"])(Ve,{as:"h2"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.project[0].title),1)]})),_:1}),Object(a["createVNode"])(ge,{type:"primary",size:"small"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(pe,{type:"plus",size:"14"}),o,l]})),_:1}),Object(a["createVNode"])(ge,{class:"btn-markComplete",outlined:!0,type:"light",size:"small"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(pe,{type:"check",size:"14"}),r,i]})),_:1})])]})),buttons:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[(Object(a["openBlock"])(),Object(a["createElementBlock"])("a",d,[Object(a["createVNode"])(pe,{type:"edit-3",size:"14"}),b])),(Object(a["openBlock"])(),Object(a["createElementBlock"])("a",j,[Object(a["createVNode"])(pe,{type:"trash-2",size:"14"}),u]))]))]})),_:1})):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(Ue,null,{default:Object(a["withCtx"])((function(){return[e.project?(Object(a["openBlock"])(),Object(a["createBlock"])(Qe,{key:1,gutter:25},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(ve,{xxl:6,xl:8,md:24,xs:24},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",A,[m,Object(a["createVNode"])(Ee,{percent:65,"stroke-width":5,status:"active"})]),Object(a["createVNode"])(Ce,{headless:""},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",V,[Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("a",g,[Object(a["createVNode"])(pe,{type:"list",size:"25"})])]),Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(Ve,{as:"h5"},{default:Object(a["withCtx"])((function(){return[N]})),_:1}),f])]),Object(a["createElementVNode"])("div",E,[Object(a["createElementVNode"])("div",C,[Object(a["createElementVNode"])("a",v,[Object(a["createVNode"])(pe,{type:"pie-chart",size:"25"})])]),Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(Ve,{as:"h5"},{default:Object(a["withCtx"])((function(){return[B]})),_:1}),w])]),Object(a["createElementVNode"])("div",x,[Object(a["createElementVNode"])("div",k,[Object(a["createElementVNode"])("a",Q,[Object(a["createVNode"])(pe,{type:"layout",size:"25"})])]),Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(Ve,{as:"h5"},{default:Object(a["withCtx"])((function(){return[U]})),_:1}),h])]),Object(a["createElementVNode"])("div",D,[Object(a["createElementVNode"])("div",T,[Object(a["createElementVNode"])("a",G,[Object(a["createVNode"])(pe,{type:"clock",size:"25"})])]),Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(Ve,{as:"h5"},{default:Object(a["withCtx"])((function(){return[R]})),_:1}),z])])]})),_:1})]})),_:1}),Object(a["createVNode"])(ve,{xxl:12,xl:16,md:24,xs:24},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",y,[Object(a["createVNode"])(Ce,{title:"About Project"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",I,[Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.project[0].content),1)]),W]})),_:1})])]})),_:1}),Object(a["createVNode"])(ve,{xxl:6,lg:9,xs:24},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",J,[Object(a["createVNode"])(Ce,{title:"Users"},{button:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(ge,{class:"btn-addUser",outlined:"",type:"white",size:"small"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(pe,{type:"user-plus",size:"14"}),Y,M]})),_:1})]})),default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",S,[Object(a["createElementVNode"])("div",F,[Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("img",{src:c("6a06"),alt:""},null,8,q)]),Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(Ve,{as:"h5"},{default:Object(a["withCtx"])((function(){return[X]})),_:1}),P])]),Object(a["createElementVNode"])("div",Z,[Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("img",{src:c("26aa"),alt:""},null,8,L)]),Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(Ve,{as:"h5"},{default:Object(a["withCtx"])((function(){return[K]})),_:1}),H])]),Object(a["createElementVNode"])("div",_,[Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("img",{src:c("1c39"),alt:""},null,8,$)]),Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(Ve,{as:"h5"},{default:Object(a["withCtx"])((function(){return[ee]})),_:1}),te])]),Object(a["createElementVNode"])("div",ce,[Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("img",{src:c("c6f3"),alt:""},null,8,ae)]),Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(Ve,{as:"h5"},{default:Object(a["withCtx"])((function(){return[ne]})),_:1}),oe])]),Object(a["createElementVNode"])("div",le,[Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("img",{src:c("3b9a"),alt:""},null,8,re)]),Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(Ve,{as:"h5"},{default:Object(a["withCtx"])((function(){return[ie]})),_:1}),se])])])]})),_:1})])]})),_:1}),Object(a["createVNode"])(ve,{xxl:16,lg:15,xs:24},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(xe,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(Ce,null,{title:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("nav",null,[Object(a["createVNode"])(Be,{to:"".concat(e.matched[1].path.split("/:")[0],"/").concat(e.params.id,"/tasklist")},{default:Object(a["withCtx"])((function(){return[de]})),_:1},8,["to"]),be,Object(a["createVNode"])(Be,{to:"".concat(e.matched[1].path.split("/:")[0],"/").concat(e.params.id,"/activities")},{default:Object(a["withCtx"])((function(){return[je]})),_:1},8,["to"])])]})),default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(we,{name:"child"})]})),_:1})]})),_:1})]})),_:1}),Object(a["createVNode"])(ve,{xxl:8,xs:24},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(ke)]})),_:1})]})),_:1})):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",O,[Object(a["createVNode"])(fe)]))]})),_:1})]})),_:1})}var Oe=c("233d"),Ae=c("512e"),me=c("23d0"),Ve=c("5502"),pe=c("6c02"),ge=Object(a["defineComponent"])({name:"ProjectDetails",components:{ProjectDetailsWrapper:Oe["ProjectDetailsWrapper"],TaskLists:Oe["TaskLists"],Main:me["Main"],FileListCard:Ae["default"]},setup:function(){var e=Object(Ve["c"])(),t=e.state,c=e.dispatch,n=Object(a["computed"])((function(){return t.project.singleData})),o=Object(pe["d"])(),l=o.params,r=o.matched,i=Object(a["computed"])((function(){return t.project.singleData[0]})),s=i.title,d=i.content;return Object(a["onMounted"])((function(){return c("filterSinglePage",parseInt(l.id,10))})),{title:s,content:d,project:n,params:l,matched:r}}}),Ne=ge,fe=c("6b0d"),Ee=c.n(fe);const Ce=Ee()(Ne,[["render",ue]]);t["default"]=Ce},b1bf:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAADdklEQVR4Xu2XT2sqQRDEWw+JYi4iHvwbiaCISI7e/NZ+AW8eQxCJB5UElSDiRSEB8T16yMg4ur6NVvIQai+Bdbem+jfVPZtIu93+I7xgBCIECmNphAgUy5NAwTwJlEDRBMB6nKEECiYAlmNCCRRMACzHhBIomABYjgklUDABsBwTSqBgAmA5JpRAwQTAckwogYIJgOWYUAIFEwDLMaEECiYAlmNCCRRMACzHhBIomABYjgklUDABsBwTSqBgAmA5JpRAwQTAckwogYIJgOWYUAIFEwDLfSuhjUZDCoWCsbBaraTT6ezZyeVyUq/XZTabyfPz80VWU6mUPD4+ynw+32mpfq1Wk9fXVxkMBnv6v+ntVGGhgbrFLBaLg2J1kWazKQri7e3tYqCqV6lUpFgsSr/fl8lkIq1WSz4/P6Xb7R5spAX9W96CoIYGqsVls1kDSk0rPL1scQq8XC5LNBo1v1+aUGvYQlwul3vruwX9L2/HoIYG6idUW2w6ne5aTwvXopPJpPmrQBW6Ao7H4xKLxWSz2Uiv1ztIm59E16iuW61WzS23/f1n3ISG8WY3QROvnvWyneV2wilvFwG1Lfjw8GAguW2tBagpnakWrAWq94fDoQGvgG9vb81zFtRoNJL7+/u9zfGNuu8FtZoW/h1v9nndfO0yF5yuoZsYxpvvJ3RCFVo6nZanpyfT0kGt6AP1x4IafXl5MSm1B4nq+XPRGtVC8/m82cT39/ejo+Qcb/6Y0PVc72G8XZRQdzGbVp2pkUjEtLR/KSR7uXPWBeqnxNdwT3ptTXeGu8+e4+3YTHZ1/uXt4kNJ2y6RSOwSGtSGfkKD3gnT8u4osQk6dsqf402BlUolGY/HZhz9esvbgu7u7szmfHx87OAGpUULtQeStqx9R5/Xb8z1em1aXcFlMpndgWU7wC046J5dWzfyO97cUXJzcyPb7dbMevvZdcpbUDr1fugZekok6Df/0+ocjZ9659gMRaxFoF/f1QiYTKjzj8pVAEWZvCadH235awKB8kqgKJJfOgRKoGACYDkmlEDBBMByTCiBggmA5ZhQAgUTAMsxoQQKJgCWY0IJFEwALMeEEiiYAFiOCSVQMAGwHBNKoGACYDkmlEDBBMByTCiBggmA5ZhQAgUTAMsxoQQKJgCWY0IJFEwALMeEEiiYAFiOCQUD/QsnXHNaadO+kwAAAABJRU5ErkJggg=="},d784:function(e,t,c){"use strict";c("ac1f");var a=c("e330"),n=c("6eeb"),o=c("9263"),l=c("d039"),r=c("b622"),i=c("9112"),s=r("species"),d=RegExp.prototype;e.exports=function(e,t,c,b){var j=r(e),u=!l((function(){var t={};return t[j]=function(){return 7},7!=""[e](t)})),O=u&&!l((function(){var t=!1,c=/a/;return"split"===e&&(c={},c.constructor={},c.constructor[s]=function(){return c},c.flags="",c[j]=/./[j]),c.exec=function(){return t=!0,null},c[j](""),!t}));if(!u||!O||c){var A=a(/./[j]),m=t(j,""[e],(function(e,t,c,n,l){var r=a(e),i=t.exec;return i===o||i===d.exec?u&&!l?{done:!0,value:A(t,c,n)}:{done:!0,value:r(c,t,n)}:{done:!1}}));n(String.prototype,e,m[0]),n(d,j,m[1])}b&&i(d[j],"sham",!0)}},ea32:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAADdklEQVR4Xu2XT2sqQRDEWw+JYi4iHvwbiaCISI7e/NZ+AW8eQxCJB5UElSDiRSEB8T16yMg4ur6NVvIQai+Bdbem+jfVPZtIu93+I7xgBCIECmNphAgUy5NAwTwJlEDRBMB6nKEECiYAlmNCCRRMACzHhBIomABYjgklUDABsBwTSqBgAmA5JpRAwQTAckwogYIJgOWYUAIFEwDLMaEECiYAlmNCCRRMACzHhBIomABYjgklUDABsBwTSqBgAmA5JpRAwQTAckwogYIJgOWYUAIFEwDLfSuhjUZDCoWCsbBaraTT6ezZyeVyUq/XZTabyfPz80VWU6mUPD4+ynw+32mpfq1Wk9fXVxkMBnv6v+ntVGGhgbrFLBaLg2J1kWazKQri7e3tYqCqV6lUpFgsSr/fl8lkIq1WSz4/P6Xb7R5spAX9W96CoIYGqsVls1kDSk0rPL1scQq8XC5LNBo1v1+aUGvYQlwul3vruwX9L2/HoIYG6idUW2w6ne5aTwvXopPJpPmrQBW6Ao7H4xKLxWSz2Uiv1ztIm59E16iuW61WzS23/f1n3ISG8WY3QROvnvWyneV2wilvFwG1Lfjw8GAguW2tBagpnakWrAWq94fDoQGvgG9vb81zFtRoNJL7+/u9zfGNuu8FtZoW/h1v9nndfO0yF5yuoZsYxpvvJ3RCFVo6nZanpyfT0kGt6AP1x4IafXl5MSm1B4nq+XPRGtVC8/m82cT39/ejo+Qcb/6Y0PVc72G8XZRQdzGbVp2pkUjEtLR/KSR7uXPWBeqnxNdwT3ptTXeGu8+e4+3YTHZ1/uXt4kNJ2y6RSOwSGtSGfkKD3gnT8u4osQk6dsqf402BlUolGY/HZhz9esvbgu7u7szmfHx87OAGpUULtQeStqx9R5/Xb8z1em1aXcFlMpndgWU7wC046J5dWzfyO97cUXJzcyPb7dbMevvZdcpbUDr1fugZekok6Df/0+ocjZ9659gMRaxFoF/f1QiYTKjzj8pVAEWZvCadH235awKB8kqgKJJfOgRKoGACYDkmlEDBBMByTCiBggmA5ZhQAgUTAMsxoQQKJgCWY0IJFEwALMeEEiiYAFiOCSVQMAGwHBNKoGACYDkmlEDBBMByTCiBggmA5ZhQAgUTAMsxoQQKJgCWY0IJFEwALMeEEiiYAFiOCQUD/QsnXHNaadO+kwAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=projectDetail.61bd3ace.js.map