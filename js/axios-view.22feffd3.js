(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["axios-view"],{"07bd":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o=Object(a["createTextVNode"])(" Add New "),r={class:"search-box"},i={class:"search-icon"},c={key:0,class:"spin"},s={key:1};function l(e,t,n,l,d,u){var p=Object(a["resolveComponent"])("sdFeatherIcons"),b=Object(a["resolveComponent"])("router-link"),f=Object(a["resolveComponent"])("sdButton"),m=Object(a["resolveComponent"])("a-input"),g=Object(a["resolveComponent"])("sdPageHeader"),j=Object(a["resolveComponent"])("a-spin"),x=Object(a["resolveComponent"])("a-table"),h=Object(a["resolveComponent"])("TableWrapper"),O=Object(a["resolveComponent"])("sdCards"),v=Object(a["resolveComponent"])("a-col"),w=Object(a["resolveComponent"])("a-row"),A=Object(a["resolveComponent"])("Main"),C=Object(a["resolveComponent"])("RecordViewWrapper");return Object(a["openBlock"])(),Object(a["createBlock"])(C,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(g,{title:"Data List"},{subTitle:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(f,{class:"btn-add_new",size:"default",type:"primary"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(b,{to:"/crud/axios-add"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(p,{type:"plus",size:"14"}),o]})),_:1})]})),_:1})]})),buttons:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("span",i,[Object(a["createVNode"])(p,{type:"search",size:"14"})]),Object(a["createVNode"])(m,{onChange:e.onHandleSearch,value:e.formState.searchItem,"onUpdate:value":t[0]||(t[0]=function(t){return e.formState.searchItem=t}),valueModifiers:{trim:!0},type:"text",name:"recored-search",placeholder:"Search Here"},null,8,["onChange","value"])])]})),_:1}),Object(a["createVNode"])(A,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(w,{gutter:15},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(v,{class:"w-100",md:24},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(O,{headless:""},{default:Object(a["withCtx"])((function(){return[e.isLoading?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createVNode"])(j)])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[Object(a["createVNode"])(h,{class:"table-data-view table-responsive"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(x,{rowSelection:e.rowSelection,pagination:{pageSize:10,showSizeChanger:!0},dataSource:e.dataSource,columns:e.columns},null,8,["rowSelection","dataSource","columns"])]})),_:1})]))]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})}n("d81d"),n("b0c0"),n("a15b");var d=n("a51c"),u=n("23d0"),p=n("5502"),b=n("c1df"),f=n.n(b),m=[{title:"Name",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"},{title:"Company",dataIndex:"company",key:"company"},{title:"Position",dataIndex:"position",key:"position"},{title:"Status",dataIndex:"status",key:"status"},{title:"Joining Date",dataIndex:"jdate",key:"jdate"},{title:"Actions",dataIndex:"action",key:"action",width:"90px"}],g=Object(a["defineComponent"])({name:"ViewPage",components:{RecordViewWrapper:d["RecordViewWrapper"],Main:u["Main"],TableWrapper:u["TableWrapper"]},setup:function(){var e=Object(p["c"])(),t=e.state,o=e.dispatch,r=Object(a["computed"])((function(){return t.crud.data})),i=Object(a["computed"])((function(){return t.crud.loading})),c=Object(a["ref"])([]);Object(a["onMounted"])((function(){o("axiosCrudGetData")}));var s=function(e){var t=window.confirm("Are you sure delete this?");return t&&o("axiosDataDelete",{id:e,getData:function(){o("axiosCrudGetData")}}),!1},l=Object(a["reactive"])({searchItem:""}),d=function(){o("axiosDataSearch",l.searchItem)},u=Object(a["computed"])((function(){return r.value.length?r.value.map((function(e,t){var o=e.id,r=e.name,i=e.email,c=e.company,l=e.position,d=e.join,u=e.status,p=e.city,b=e.country,m=e.image;return{key:t+1,name:Object(a["createVNode"])("div",{class:"record-img align-center-v"},[Object(a["createVNode"])("img",{src:m?"https://demo.jsnorm.com/laravel/strikingdash-api/"+m:n("af8f"),alt:o},null),Object(a["createVNode"])("span",null,[Object(a["createVNode"])("span",null,[r]),Object(a["createVNode"])("span",{class:"record-location"},[p,Object(a["createTextVNode"])(","),b])])]),email:i,company:c,position:l,jdate:f()(d).format("YYYY-MM-DD"),status:Object(a["createVNode"])("span",{class:"status ".concat(u)},[u]),action:Object(a["createVNode"])("div",{class:"table-actions"},[Object(a["createVNode"])(Object(a["resolveComponent"])("router-link"),{class:"edit",to:"/crud/axios-edit/".concat(o)},{default:function(){return[Object(a["createVNode"])(Object(a["resolveComponent"])("sdFeatherIcons"),{type:"edit",size:14},null)]}}),Object(a["createTextVNode"])("   "),Object(a["createVNode"])(Object(a["resolveComponent"])("router-link"),{class:"delete",onClick:function(){return s(o)},to:"#"},{default:function(){return[Object(a["createVNode"])(Object(a["resolveComponent"])("sdFeatherIcons"),{type:"trash-2",size:14},null)]}})])}})):[]})),b=function(e){c.value=e},g={selectedRowKeys:c,onChange:b};return{crud:r,isLoading:i,selectedRowKeys:c,onHandleSearch:d,handleDelete:s,rowSelection:g,onSelectChange:b,dataSource:u,columns:m,formState:l}}}),j=g,x=n("6b0d"),h=n.n(x);const O=h()(j,[["render",l]]);t["default"]=O},a15b:function(e,t,n){"use strict";var a=n("23e7"),o=n("e330"),r=n("44ad"),i=n("fc6a"),c=n("a640"),s=o([].join),l=r!=Object,d=c("join",",");a({target:"Array",proto:!0,forced:l||!d},{join:function(e){return s(i(this),void 0===e?",":e)}})},a51c:function(e,t,n){"use strict";n.r(t),n.d(t,"RecordViewWrapper",(function(){return c})),n.d(t,"RecordFormWrapper",(function(){return s}));var a,o,r=n("8785"),i=n("f6f8"),c=i["b"].div(a||(a=Object(r["a"])(["\n    .btn-add_new{\n        ",": 10px;\n        a{\n            display: flex;\n            align-items: center;\n            svg,\n            img,\n            i{\n                ",": 6px;\n            }\n        }\n    }\n    .search-box{\n        position: relative;\n        box-shadow: 0 5px 5px rgba(#9299B8,.3);\n        .search-icon{\n            position: absolute;\n            ",": 18px;\n            top: 50%;\n            transform: translateY(-50%);\n            svg,\n            img{\n                margin-top: 6px;\n                min-width: 16px;\n                color: #9299B8;\n            }\n        }\n        input{\n            border: 0 none;\n            height: 40px;\n            min-width: 280px;\n            padding: ",";\n            border-radius: 6px;\n            &::placeholder{\n                color: #ADB4D2;\n            }\n            &:focus{\n                outline: none;\n            }\n        }\n    }\n"])),(function(e){var t=e.theme;return t.rtl?"margin-right":"margin-left"}),(function(e){var t=e.theme;return t.rtl?"margin-left":"margin-right"}),(function(e){var t=e.theme;return t.rtl?"right":"left"}),(function(e){var t=e.theme;return t.rtl?"0 45px 0 20px":"0 20px 0 45px"})),s=i["b"].div(o||(o=Object(r["a"])(["\n    .pro-image{\n        position: relative;\n        margin-bottom: 30px;\n        .ant-spin.ant-spin-spinning{\n            position: absolute;\n            top: 0;\n            ",": 0;\n            width: 120px;\n            height: 120px;\n            background: #ffffff90;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n            z-index: 10;\n            &:after{\n                position: absolute;\n                ",": 0;\n                top: 0;\n                width: 100%;\n                height: 100%;\n                border-radius: 50%;\n                background-color: #272B4120;\n                content: '';\n                z-index: -1;\n            }\n            .ant-spin-dot {\n                position: relative;\n                z-index: 10;\n            }\n        }\n        img{\n            max-width: 120px;\n            min-width: 120px;\n            border-radius: 50%;\n        }\n        .ant-spin{\n            height: 120px;\n            width: 120px;\n            display: flex;\n            align-items: center;\n        }\n        .ant-upload-select{\n            position: absolute;\n            ",": 80px;\n            bottom: -5px;\n            height: 40px;\n            width: 40px;\n            background: #fff;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            border-radius: 50%;\n            z-index: 222;\n            span{\n                display: inline-flex;\n                height: 32px;\n                align-items: center;\n                justify-content: center;\n                border-radius: 50%;\n                width: 32px;\n                background: #5F63F2;\n            }\n            svg{\n                color: #fff;\n            }\n        }\n        .upload-btn{\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: #fff;\n        }\n        .info{\n            ",": 20px;\n            background: none;\n            h1{\n                font-size: 15px;\n                font-weight: 500;\n                margin-bottom: 0;\n            }\n        }\n        .ant-upload-list-item{\n            margin-top: 0;\n            &:hover{\n                .ant-upload-list-item-info{\n                    background-color: transparent;\n                }\n            }\n            .ant-upload-list-item-info{\n                >span{\n                    display: flex;\n                    align-items: center;\n                    ",": 14px;\n                    ",": 10px;\n                }\n                .ant-upload-list-item-card-actions {\n                    /* // top: -8px; */\n                }\n            }\n        }\n    }\n\n    .record-spin{\n        height: 100vh;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n"])),(function(e){var t=e.theme;return t.rtl?"right":"left"}),(function(e){var t=e.theme;return t.rtl?"right":"left"}),(function(e){var t=e.theme;return t.rtl?"right":"left"}),(function(e){var t=e.theme;return t.rtl?"margin-right":"margin-left"}),(function(e){var t=e.theme;return t.rtl?"padding-right":"padding-left"}),(function(e){var t=e.theme;return t.rtl?"padding-left":"padding-right"}))},af8f:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAElklEQVR4Xu2Xy0okQRBFc0TwuVFx4VtEFBFxI7jzr/0Bdy5FVBR8ICqIqBsVBXGGSIgmpqa6C63ulrme2khblVl578kbkfVre3v7d+KSdeAXgGXZZmEA1uYLYHG+AAawugPi+ujBABZ3QFweCQawuAPi8kgwgMUdEJdHggEs7oC4PBIMYHEHxOWRYACLOyAujwQDWNwBcXkkGMDiDojLI8EAFndAXB4JBrC4A+LySDCAxR0Ql0eCASzugLg8EgxgcQfE5ZFgAIs7IC6PBANY3AFxeSQYwOIOiMsjwQAWd0BcHgkGsLgD4vJIMIDFHRCXR4IBLO6AuDwSDGBxB8TlkWAAizsgLo8EA1jcAXF5JBjA4g6IyyPBABZ3QFxexxO8tbWVLdzZ2cl/x8bG0vr6eurv78+/7+/v0+7u7j/3Pj4+0tnZWTo5OamFwN93d3eX9vf381xTU1NpZWUlXV5els6/tLSU5ufn08XFReP+2tpampmZyePf39/TwcFBur6+zr/jvaenp4bWWgtv0+COAXbRJjgCNvN6e3vT4eFhA7abb5vh7e0tA7fx4+PjaW9vL2+COpe9c3Z2Nh0dHWUo8T1xXt8MPT09yTbY1dVVA/DGxkY6Pz/Pa4lrszE+9+vra968cTPVWXc7xnYMsC/OzBgZGWm6q83sx8fH9PDwkJaXl9Px8XGGYMbZ2Jubm9optrU4VHvX5ORkTnOzjVP1btswPsfi4mKW6lWoSm87oH1mjm8FHI20RReNd/iDg4PJUjUwMJBLeyyRMY3FpEYjrCzbBrKrKmFVgCNEX6OX/wh/dXU1vby8pNHR0Vy1LOFWkWLqW1WUz4Bs9uy3At7c3Ex9fX053dEYT1YEbFXAe3Ic5+CsfM7NzbVMfBzXyrxWgIv9uwqwbUjv13Ez2lrssg3QqsLVhfwtgL3XPT8/N0pbFeBYBh2ql3Pv9/HAVjTG5p+ens6V4Pb2tnHgKjOwGWB7z8TExF8HrCrA1hLK0m3vtX5tyY4HtrpAi+O7DriZeUVo8Tnb4a0AG7yFhYXcy70Xlh2erDTbIe4rPbhZb/UklvXgVvBtM9r9mPB2w7X5ug7YjLKeWgai2SnaDjJDQ0ONE/VnS3QRTrNTtBtc3IT22/rp6elp49PIn419v3iKLn4i/ogSbXDMsHj5t6Ol2Iy0shUPUjbGD1hWYv2w4mXOS31ZCS37pi37XzHx8QQf1+XPxe/0qCm2CQc8PDych7nOuE7fFLFdtTPJHU9wOxZbLIPtmLMbcxRLdDfe2fUe3A5RAP66iyT4695VjiTBlRbxQF0H/osE1xX5k8cDWJw+gAEs7oC4PBIMYHEHxOWRYACLOyAujwQDWNwBcXkkGMDiDojLI8EAFndAXB4JBrC4A+LySDCAxR0Ql0eCASzugLg8EgxgcQfE5ZFgAIs7IC6PBANY3AFxeSQYwOIOiMsjwQAWd0BcHgkGsLgD4vJIMIDFHRCXR4IBLO6AuDwSDGBxB8TlkWAAizsgLo8EA1jcAXF5JBjA4g6IyyPBABZ3QFweCQawuAPi8kgwgMUdEJdHgsUB/wHERxbFRshvpQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=axios-view.22feffd3.js.map