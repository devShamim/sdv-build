(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["to-do"],{"1a73":function(e,t,n){"use strict";n.r(t),n.d(t,"Span",(function(){return l})),n.d(t,"TodoStyleWrapper",(function(){return d}));var o,a,r=n("8785"),c=n("f6f8"),l=c["b"].span(o||(o=Object(r["a"])(["\n    &.active{\n        color: ",";\n        text-decoration: line-through;\n    }\n"])),(function(e){var t=e.theme;return t["primary-color"]})),d=c["b"].div(a||(a=Object(r["a"])(["\n    .ant-card-body{\n        padding: 15px 0 25px !important\n    }\n    .ant-table{\n        width: 100%;\n        thead{\n            display: none;\n        }\n        tbody{\n            tr{\n                position: relative;\n                &:hover{\n                    box-shadow: 0 15px 50px ","20;\n                    td{\n                        background-color: #fff;\n                    }\n                }\n                td{\n                    font-size: 14px;\n                    color: ",";\n                    line-height: .75;\n                    &:first-child{\n                        padding-left: 25px;\n                        padding-right: 8px;\n                        width: 48px;\n                    }\n                    &:last-child{\n                        padding-right: 25px;\n                    }\n                    .ant-checkbox-wrapper{\n                        padding-top: 3px;\n                        &:hover{\n                            &:after{\n                                border-color: ",";\n                            }\n                            .ant-checkbox-inner{\n                                border-color: ",";\n                            }\n                        }\n                    }\n                    .ant-checkbox-checked{\n                        &:after{\n                            border-color: ",";\n                        }\n                    }\n                    .ant-checkbox-checked .ant-checkbox-inner{\n                        background-color: ",";\n                        border-color: ",";\n                    }\n                    .todo-title{\n                        min-width: 150px;\n                        line-height: 1.5;\n                    }\n                }\n            }\n            .todos-action{\n                min-width: 100px;\n                text-align: right;\n                svg,\n                i,\n                span{\n                    color: #D8DCEB !important;\n                }\n                svg.feather-trash-2{\n                    color: ","\n                }\n                .star{\n                    margin: 0 20px;\n                    &.active{\n                        svg,\n                        i{\n                            color: "," !important;\n                        }\n                    }\n                }\n            }\n\n        }\n    }\n\n    .new-todo-wrap{\n        padding: 16px 25px 0;\n        .btn-toDoAdd{\n            font-size: 12px;\n            font-weight: 500;\n            height: 50px;\n            padding: 0px 23.23px;\n        }\n    }\n"])),(function(e){var t=e.theme;return t["light-color"]}),(function(e){var t=e.theme;return t["gray-color"]}),(function(e){var t=e.theme;return t["success-color"]}),(function(e){var t=e.theme;return t["success-color"]}),(function(e){var t=e.theme;return t["success-color"]}),(function(e){var t=e.theme;return t["success-color"]}),(function(e){var t=e.theme;return t["success-color"]}),(function(e){var t=e.theme;return t["gray-color"]}),(function(e){var t=e.theme;return t["warning-color"]}))},a8bc:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a={class:"page-header-actions"},r=Object(o["createTextVNode"])(" Add New "),c={class:"ant-table-content"},l={class:"ant-table"},d={scope:"row"},i={class:"user-info"},s={class:"todos-action"},u=["onClick"],b=["onClick"],p={class:"new-todo-wrap"},m=Object(o["createTextVNode"])(" + Add New Task "),f={class:"todo-modal"},h=Object(o["createElementVNode"])("br",null,null,-1),j=Object(o["createElementVNode"])("br",null,null,-1),O=Object(o["createTextVNode"])(" Add New ");function v(e,t,n,v,C,x){var N=Object(o["resolveComponent"])("sdCalendarButton"),g=Object(o["resolveComponent"])("sdExportButton"),w=Object(o["resolveComponent"])("sdShareButton"),V=Object(o["resolveComponent"])("sdFeatherIcons"),y=Object(o["resolveComponent"])("sdButton"),k=Object(o["resolveComponent"])("sdPageHeader"),T=Object(o["resolveComponent"])("a-checkbox"),D=Object(o["resolveComponent"])("draggable"),E=Object(o["resolveComponent"])("TableWrapper"),S=Object(o["resolveComponent"])("sdCards"),A=Object(o["resolveComponent"])("TodoStyleWrapper"),_=Object(o["resolveComponent"])("a-col"),z=Object(o["resolveComponent"])("a-row"),B=Object(o["resolveComponent"])("a-input"),W=Object(o["resolveComponent"])("a-form"),M=Object(o["resolveComponent"])("BasicFormWrapper"),F=Object(o["resolveComponent"])("sdModal"),H=Object(o["resolveComponent"])("Main");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(k,{title:"To Do"},{buttons:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",a,[Object(o["createVNode"])(N),Object(o["createVNode"])(g),Object(o["createVNode"])(w),Object(o["createVNode"])(y,{size:"small",type:"primary"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(V,{type:"plus",size:"14"}),r]})),_:1})])]})),_:1}),Object(o["createVNode"])(H,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(z,{gutter:30},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(_,{md:24},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(A,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(S,{title:"Task Lists"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(E,{class:"table-responsive"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[Object(o["createElementVNode"])("table",l,[Object(o["createVNode"])(D,{modelValue:e.myList,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.myList=t}),tag:"tbody",group:"people",handle:".handle","item-key":"name"},{item:Object(o["withCtx"])((function(t){var n=t.element;return[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",null,[Object(o["createVNode"])(T,{onClick:function(){return e.onSelectChange(n.key)}},null,8,["onClick"])]),Object(o["createElementVNode"])("td",d,[Object(o["createElementVNode"])("div",i,Object(o["toDisplayString"])(n.item),1)]),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("div",s,[Object(o["createVNode"])(V,{classes:"handle",style:{cursor:"pointer",color:"#999"},type:"move"}),Object(o["createElementVNode"])("a",{class:Object(o["normalizeClass"])(n.favorite?"star active":"star"),onClick:function(){return e.dispatch("onStarUpdate",{data:e.todoData,id:n.key})},to:"#"},[Object(o["createVNode"])(V,{type:"star",style:Object(o["normalizeStyle"])({color:n.favorite?"gold":"#888"}),size:16},null,8,["style"])],10,u),Object(o["createElementVNode"])("a",{onClick:function(){return e.onHandleDelete(n.key)},to:"#"},[Object(o["createVNode"])(V,{type:"trash-2",size:"16"})],8,b)])])])]})),_:1},8,["modelValue"])])])]})),_:1}),Object(o["createElementVNode"])("div",p,[Object(o["createVNode"])(y,{onClick:e.showModal,class:"btn-toDoAdd",transparented:"",type:"primary",size:"large"},{default:Object(o["withCtx"])((function(){return[m]})),_:1},8,["onClick"])])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(o["createVNode"])(F,{type:"primary",title:"Add New Todo",visible:e.visible,footer:null,onCancel:e.handleCancel},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",f,[Object(o["createVNode"])(M,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(W,{class:"adTodo-form",name:"todoAdd",model:e.formState,onFinish:e.onSubmitHandler},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(B,{value:e.formState.todoAdd,"onUpdate:value":t[1]||(t[1]=function(t){return e.formState.todoAdd=t}),placeholder:"Input Item Name......."},null,8,["value"]),h,j,Object(o["createVNode"])(y,{onClick:e.showModal,htmlType:"submit",class:"btn-adTodo",type:"primary",size:"large"},{default:Object(o["withCtx"])((function(){return[O]})),_:1},8,["onClick"])]})),_:1},8,["model","onFinish"])]})),_:1})])]})),_:1},8,["visible","onCancel"])]})),_:1})],64)}var C=n("2909"),x=(n("4de4"),n("d3b7"),n("caad"),n("2532"),n("d81d"),n("99af"),n("1a73")),N=n("23d0"),g=n("5502"),w=n("b76a"),V=n.n(w),y=[{title:"",dataIndex:"item"},{title:"",dataIndex:"action",width:120}],k=Object(o["defineComponent"])({name:"ToDo",components:{TodoStyleWrapper:x["TodoStyleWrapper"],Main:N["Main"],TableWrapper:N["TableWrapper"],BasicFormWrapper:N["BasicFormWrapper"],draggable:V.a},setup:function(){var e=Object(g["c"])(),t=e.state,n=e.dispatch,a=Object(o["computed"])((function(){return t.todo.data})),r=Object(o["ref"])(!1),c=Object(o["ref"])([]),l=function(e){var t=a.value.filter((function(t){return t.key!==e}));n("ToDoDeleteData",t)},d=Object(o["reactive"])({todoAdd:""}),i=function(e){if(c.value.includes(e)){var t=c.value.filter((function(t){return t!==e}));c.value=t}else c.value.push(e)},s=function(){var e=[];a.value.map((function(t){return e.push(t.key)}));var t=Math.max.apply(Math,e);""!==d.todoAdd?(n("ToDoAddData",[].concat(Object(C["a"])(a.value),[{key:t+1,item:d.todoAdd,time:(new Date).getTime(),favorite:!1}])),d.todoAdd="",r.value=!1):alert("Please Give a Task Title...")},u=function(){r.value=!0},b=function(){r.value=!1},p=function(){b()};return{handleCancel:p,onCancel:b,showModal:u,onSubmitHandler:s,onHandleDelete:l,onSelectChange:i,columns:y,formState:d,visible:r,dispatch:n,todoData:a,selectedRowKeys:c}},computed:{myList:{get:function(){return this.$store.state.todo.data},set:function(e){this.$store.dispatch("ToDoAddData",e)}}}}),T=k,D=n("6b0d"),E=n.n(D);const S=E()(T,[["render",v]]);t["default"]=S}}]);
//# sourceMappingURL=to-do.76d5b818.js.map