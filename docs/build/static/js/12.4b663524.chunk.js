(this["webpackJsonpreact-adminv4"]=this["webpackJsonpreact-adminv4"]||[]).push([[12],{225:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _}));var n,l=a(1),r=a(2),i=a(3),o=a(4),c=(a(236),a(239)),s=a(0),u=a.n(s),d=a(19),m=a(82),b=(a(68),a(35)),h=(a(22),a(26)),f=a(5),g=(a(119),a(83)),p=a(9),v=a(7),y=a(11),w=a(123);a(120);var E=Object(y.n)(y.k),j=function(e,t){var a={children:e,props:{}};return t.isTable&&(a.props.colSpan=0),a},O=Object(d.a)({ajax:!0})(n=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,selectedRowKeys:[],dataSource:[]},e.columns=[{title:"\u8868\u540d",dataIndex:"tableName",width:200},{title:"\u6570\u636e\u5e93\u6ce8\u91ca",dataIndex:"comment",width:200},{title:u.a.createElement("span",{style:{paddingLeft:10}},"\u4e2d\u6587\u540d"),dataIndex:"chinese",width:250,formProps:function(e,t){return{required:!0,tabIndex:t+1,onBlur:function(t){e.chinese=t.target.value}}},render:j},{title:u.a.createElement("span",{style:{paddingLeft:10}},"\u5217\u540d"),dataIndex:"field",formProps:function(e,t){return e.isTable?null:{required:!0,tabIndex:t+100,onBlur:function(t){e.field=t.target.value}}},render:function(t,a){if(a.isTable){var n=Object(w.renderTags)(a,(function(){return e.setState({dataSource:Object(p.a)(e.state.dataSource)})}));return{children:u.a.createElement("div",{style:{textAlign:"right"}},n),props:{colSpan:3}}}return t}},{title:"\u9009\u9879",dataIndex:"options",width:160,align:"right",render:function(t,a){return{children:Object(w.renderFieldTags)(a,(function(){return e.setState({dataSource:Object(p.a)(e.state.dataSource)})})),props:{colSpan:a.isTable?0:1}}}}],e.handleSubmit=function(t){e.setState({loading:!0}),e.props.ajax.get("/gen/tables",t,{baseURL:"/"}).then((function(t){var a=Object(w.getTables)(t),n=a.dataSource,l=a.selectedRowKeys;e.setState({dataSource:n,selectedRowKeys:l})})).finally((function(){return e.setState({loading:!1})}))},e.handleDbUrlChange=function(e){var t=e.target.value;window.localStorage.setItem(w.DB_URL_STORE_KEY,t||"")},e.handleGen=function(){g.default.confirm({icon:u.a.createElement(v.ExclamationCircleOutlined,null),title:"\u540c\u540d\u6587\u4ef6\u5c06\u88ab\u8986\u76d6\uff0c\u662f\u5426\u7ee7\u7eed\uff1f",content:"\u4ee3\u7801\u6587\u4ef6\u76f4\u63a5\u751f\u6210\u5230\u9879\u76ee\u76ee\u5f55\u4e2d\uff0c\u4f1a\u5f15\u8d77webpack\u7684\u70ed\u66f4\u65b0\uff0c\u5f53\u524d\u9875\u9762\u6709\u53ef\u80fd\u4f1a\u91cd\u65b0\u52a0\u8f7d\u3002",onOk:function(){var t=e.state,a=t.selectedRowKeys,n={tables:t.dataSource.filter((function(e){return a.includes(e.id)})).map((function(e){var t=e.children.map((function(e){return{field:e.field,chinese:Object(w.getLabel)(e.chinese),name:e.name,type:e.type,length:e.length,isNullable:e.isNullable,isForm:e.isForm,isColumn:e.isColumn,isQuery:e.isQuery}}));return Object(f.a)({},e,{children:t})}))};e.setState({loading:!0}),e.props.ajax.post("/gen/tables",n,{baseURL:"/",successTip:"\u751f\u6210\u6210\u529f\uff01"}).then((function(e){console.log(e)})).finally((function(){return e.setState({loading:!1})}))}})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=window.localStorage.getItem(w.DB_URL_STORE_KEY)||"";e&&(this.form.setFieldsValue({dbUrl:e}),this.form.submit())}},{key:"render",value:function(){var e=this,t=this.state,a=t.dataSource,n=t.selectedRowKeys,l=t.loading;return u.a.createElement(m.a,{style:{padding:0,margin:0},loading:l},u.a.createElement(b.default,{ref:function(t){return e.form=t},onFinish:this.handleSubmit},u.a.createElement(y.d,null,u.a.createElement(y.c,Object.assign({},{width:"50%"},{label:"\u6570\u636e\u5e93\u5730\u5740",name:"dbUrl",placeholder:"mysql://username:password@host:port/database",required:!0,onChange:this.handleDbUrlChange})),u.a.createElement(h.default,{style:{margin:"0 8px"},type:"primary",htmlType:"submit"},"\u83b7\u53d6\u6570\u636e\u5e93\u8868"),u.a.createElement(h.default,{onClick:this.handleGen},"\u751f\u6210\u9009\u4e2d\u8868"))),u.a.createElement(E,{rowSelection:{selectedRowKeys:n,onChange:function(t){return e.setState({selectedRowKeys:t})},renderCell:function(e,t,a,n){return t.isTable?n:null}},dataSource:a,columns:this.columns,rowKey:"id"}))}}]),a}(s.Component))||n,S=a(233),C=a.n(S),T=a(234),x=a(54),N=a(84),k=a(241),F=a.n(k);a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(253),a(254);var U,I,R=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={containerHeight:"auto"},n.setHeight=function(){var e=document.documentElement.clientHeight||document.body.clientHeight;console.log(e);var t=e-285;n.setState({containerHeight:t})},n.highlight=function(){console.log(n.ref),n.ref&&n.ref.current&&F.a.highlightElement(n.ref.current)},n.ref=u.a.createRef(),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.highlight(),this.setHeight(),window.addEventListener("resize",this.setHeight)}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setHeight)}},{key:"render",value:function(){var e=this,t=this.props,a=t.code,n=t.plugins,l=t.language,r=t.width,i=void 0===r?"100%":r,o=this.state.containerHeight;return u.a.createElement("div",{ref:function(t){return e.container=t}},u.a.createElement("pre",{style:{width:i,margin:0,height:o,borderRadius:0},className:n?n.join(" "):""},u.a.createElement("code",{ref:this.ref,className:"language-".concat(l)},a)))}}]),a}(u.a.Component),D=c.default.TabPane,K=Object(d.a)({modal:{title:"\u4ee3\u7801\u9884\u89c8",width:"70%"}})(U=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.previewCode,a=e.onCancel;return u.a.createElement(y.g,{surplusSpace:!0,footer:u.a.createElement(h.default,{onClick:a},"\u5173\u95ed"),bodyStyle:{padding:"0 0 0 16px"}},u.a.createElement(c.default,null,t.map((function(e){var t=e.config.fileTypeName,a=e.code;return u.a.createElement(D,{tab:t,key:t},u.a.createElement(R,{language:"jsx",plugins:["line-numbers"],code:a}))}))))}}]),a}(s.Component))||U;var L,V=Object(y.n)(Object(y.o)(y.k)),q=Object(d.a)({ajax:!0})(I=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,total:0,pageNum:1,pageSize:20,deleting:!1,table:{},tables:[],ignoreFields:[],previewVisible:!1,previewCode:""},e.columns=[{title:"\u6ce8\u91ca",dataIndex:"comment",width:200},{title:"\u4e2d\u6587\u540d",dataIndex:"chinese",width:200,formProps:function(t,a){var n=a+1;return{required:!0,tabIndex:n,onFocus:e.handleFocus,onBlur:function(e){t.chinese=e.target.value},onKeyDown:function(t){return e.handleKeyDown(t,n)}}}},{title:"\u5217\u540d",dataIndex:"field",formProps:function(t,a){if(t.isTable)return null;var n=e.state.table.children,l=a+((null===n||void 0===n?void 0:n.length)||0)+1;return{required:!0,tabIndex:l,onFocus:e.handleFocus,onBlur:function(e){t.field=e.target.value},onKeyDown:function(t){return e.handleKeyDown(t,l)}}}},{title:"\u8868\u5355\u7c7b\u578b",dataIndex:"formType",formProps:function(e){return e.isTable?null:{type:"select",showSearch:!0,options:[{value:"input",label:"\u8f93\u5165\u6846"},{value:"hidden",label:"\u9690\u85cf\u6846"},{value:"number",label:"\u6570\u5b57\u6846"},{value:"textarea",label:"\u6587\u672c\u6846"},{value:"password",label:"\u5bc6\u7801\u6846"},{value:"mobile",label:"\u624b\u673a\u8f93\u5165\u6846"},{value:"email",label:"\u90ae\u7bb1\u8f93\u5165\u6846"},{value:"select",label:"\u4e0b\u62c9\u6846"},{value:"select-tree",label:"\u4e0b\u62c9\u6811"},{value:"checkbox",label:"\u590d\u9009\u6846"},{value:"checkbox-group",label:"\u590d\u9009\u6846\u7ec4"},{value:"radio",label:"\u5355\u9009\u6846"},{value:"radio-group",label:"\u5355\u9009\u6846\u7ec4"},{value:"radio-button",label:"\u5355\u9009\u6309\u94ae\u7ec4"},{value:"switch",label:"\u5207\u6362\u6309\u94ae"},{value:"date",label:"\u65e5\u671f\u9009\u62e9\u6846"},{value:"time",label:"\u65f6\u95f4\u9009\u62e9\u6846"},{value:"moth",label:"\u6708\u4efd\u9009\u62e9\u6846"},{value:"date-time",label:"\u65e5\u671f+\u65f6\u95f4\u9009\u62e9\u6846"},{value:"date-range",label:"\u65e5\u671f\u533a\u95f4\u9009\u62e9\u6846"},{value:"cascader",label:"\u7ea7\u8054\u4e0b\u62c9\u6846"},{value:"transfer",label:"\u7a7f\u68ad\u6846"}],onChange:function(t){e.formType=t}}}},{title:"\u9009\u9879",dataIndex:"operator",width:170,render:function(t,a){return Object(w.renderFieldTags)(a,(function(){return e.setState({table:Object(f.a)({},e.state.table)})}))}},{title:"\u64cd\u4f5c",dataIndex:"operator",width:40,render:function(t,a){var n=a.id,l=a.name,r=[{label:"\u5220\u9664",color:"red",confirm:{title:'\u60a8\u786e\u5b9a\u5220\u9664"'.concat(l,'"?'),onConfirm:function(){return e.handleDelete(n)}}}];return u.a.createElement(y.h,{items:r})}}],e.handleFocus=function(e){e.target.select()},e.handleKeyDown=function(t,a){var n=t.keyCode,l=t.ctrlKey,r=t.shiftKey,i=t.altKey,o=t.metaKey;if(!(l||r||i||o)){var c,s=e.state.table.children,u=(null===s||void 0===s?void 0:s.length)||0,d=39===n,m=40===n,b=13===n;(m||b)&&(c=a===u||a===2*u?void 0:a+1),38===n&&(c=a-1),37===n&&(c=a<=u?a-1<=0?void 0:a-1+u:a-u),d&&(c=a<=u?a+u:a-u===u?void 0:a-u+1);var h=document.querySelector("input[tabindex='".concat(c,"']"));h?setTimeout((function(){h.focus(),h.select()})):(b||m||d)&&(e.handleAdd(!0),setTimeout((function(){var t=a;d&&(t=a-u),(m||b)&&a===2*u&&(t=a+1),e.handleKeyDown({keyCode:13},t)})))}},e.handleTypeChange=function(t){var a=t.target.value;"mysql"===a&&e.handleDbUrlChange(),"customer"===a&&e.handleModuleNameChange(),"swagger"===a&&e.handleSwaggerChange()},e.handleDbUrlChange=function(t){var a=e.form.getFieldValue("dbUrl");window.localStorage.setItem(w.DB_URL_STORE_KEY,a||""),e.setState({tables:[],table:{}}),e.form.setFieldsValue({tableName:void 0}),a&&(e.setState({loading:!0}),e.props.ajax.get("/gen/tables",{dbUrl:a},{baseURL:"/"}).then((function(t){var a=Object(w.getTables)(t).dataSource;e.setState({tables:a},(function(){var t,n=null===(t=a[0])||void 0===t?void 0:t.tableName;e.form.setFieldsValue({tableName:n}),e.handleTableNameChange(n)}))})).finally((function(){return e.setState({loading:!1})})))},e.handleSwaggerChange=function(){var t=e.form.getFieldValue("swaggerUrl");if(window.localStorage.setItem(w.SWAGGER_URL_STORE_KEY,t),e.setState({tables:[],table:{}}),e.form.setFieldsValue({tableName:void 0}),t){var a={swaggerUrl:t,method:e.form.getFieldValue("method"),userName:e.form.getFieldValue("userName"),password:e.form.getFieldValue("password")};e.setState({loading:!0}),e.props.ajax.get("/gen/swagger",a,{baseURL:"/"}).then((function(t){var a=t.moduleName,n=t.queries,l=t.columns,r=t.forms,i=[];(n||[]).forEach((function(e){var t=e.type,n=e.field,l=e.label,r=e.required,o=Object(w.getLabel)(l),c=Object(w.getFormElementType)({oType:t,label:o});i.push({id:Object(x.v4)(),tableName:a,field:n,comment:l,chinese:o,name:n,type:t,formType:c,length:0,isNullable:!r,isColumn:!0,isQuery:!0,isForm:!0,isIgnore:!1})})),(l||[]).forEach((function(e){var t=e.title,n=e.dataIndex;if(!i.find((function(e){return e.field===n}))){var l=Object(w.getFormElementType)({oType:"input",label:t});i.push({id:Object(x.v4)(),tableName:a,field:n,comment:t,chinese:Object(w.getLabel)(t),name:n,type:"string",formType:l,length:0,isNullable:!0,isColumn:!0,isQuery:!1,isForm:!0,isIgnore:!1})}})),(r||[]).forEach((function(e){var t=e.type,n=e.field,l=e.label;if(!i.find((function(e){return e.field===n}))){var r=Object(w.getFormElementType)({oType:t,label:l});i.push({id:Object(x.v4)(),tableName:a,field:n,comment:l,chinese:Object(w.getLabel)(l),name:n,type:t,formType:r,length:0,isNullable:!0,isColumn:!0,isQuery:!1,isForm:!0,isIgnore:!1})}}));var o={id:a,isTable:!0,tableName:a,comment:"",listPage:!0,query:!0,selectable:!0,pagination:!0,serialNumber:!0,add:!0,operatorEdit:!0,operatorDelete:!0,batchDelete:!0,modalEdit:!0,pageEdit:!1,children:i};e.setState({table:o})})).finally((function(){return e.setState({loading:!1})}))}},e.handleModuleNameChange=function(){e.setState({tables:[],table:{}});var t=e.form.getFieldValue("moduleName");if(t){var a=t;e.setState({table:{id:a,isTable:!0,tableName:a,comment:"",listPage:!0,query:!0,selectable:!0,pagination:!0,serialNumber:!0,add:!0,operatorEdit:!0,operatorDelete:!0,batchDelete:!0,modalEdit:!0,pageEdit:!1,children:[{id:Object(x.v4)(),tableName:a,field:"name",comment:"\u7528\u6237\u540d",chinese:"\u7528\u6237\u540d",name:"name",type:"string",formType:"input",length:0,isNullable:!0,isColumn:!0,isQuery:!0,isForm:!0,isIgnore:!1}]}})}},e.handleDelete=function(t){var a=e.state.table,n=a.children;a.children=n.filter((function(e){return e.id!==t})),e.setState({table:Object(f.a)({},a)})},e.handleTableNameChange=function(t){var a=e.state.tables.find((function(e){return e.tableName===t}));e.setState({table:a})},e.handleAdd=function(t){var a=e.state.table;a.children||(a.children=[]);var n=a.children.length,l=a.tableName,r=a.children,i="field".concat(n+1),o={id:Object(x.v4)(),tableName:l,field:i,comment:"\u65b0\u589e\u5217",chinese:"\u65b0\u589e\u5217",name:i,type:"string",formType:"input",length:0,isNullable:!0,isColumn:!0,isQuery:!1,isForm:!0,isIgnore:!1};t?r.push(o):r.unshift(o),a.children=Object(p.a)(r),e.setState({table:Object(f.a)({},a)})},e.getParams=function(){var t=Object(T.a)(C.a.mark((function t(a){var n,l;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.validateFields();case 2:if(null===(n=e.state.table)||void 0===n||null===(l=n.children)||void 0===l?void 0:l.length){t.next=5;break}return g.default.error({icon:u.a.createElement(v.ExclamationCircleOutlined,null),title:"\u6e29\u99a8\u63d0\u793a",content:"\u5b57\u6bb5\u914d\u7f6e\u4e3a\u7a7a\uff0c\u65e0\u6cd5\u751f\u6210\uff0c\u8bf7\u6dfb\u52a0\u5b57\u6bb5\u4fe1\u606f\uff01"}),t.abrupt("return",Promise.reject());case 5:return t.abrupt("return",new Promise((function(t,n){var l=function(){var a=e.state.table,n=a.children.map((function(e){return{field:e.field,chinese:Object(w.getLabel)(e.chinese),name:e.name,type:e.type,formType:e.formType||"input",length:Object(N.b)(e.formType||"input")?e.length:0,isNullable:e.isNullable,isForm:e.isForm,isColumn:e.isColumn,isQuery:e.isQuery}})),l={tables:[Object(f.a)({},a,{children:n})]};t(l)};a?g.default.confirm({icon:u.a.createElement(v.ExclamationCircleOutlined,null),title:"\u540c\u540d\u6587\u4ef6\u5c06\u88ab\u8986\u76d6\uff0c\u662f\u5426\u7ee7\u7eed\uff1f",content:"\u4ee3\u7801\u6587\u4ef6\u76f4\u63a5\u751f\u6210\u5230\u9879\u76ee\u76ee\u5f55\u4e2d\uff0c\u4f1a\u5f15\u8d77webpack\u7684\u70ed\u66f4\u65b0\uff0c\u5f53\u524d\u9875\u9762\u6709\u53ef\u80fd\u4f1a\u91cd\u65b0\u52a0\u8f7d\u3002",onOk:function(){l()},onCancel:function(){n()}}):l()})));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleGen=Object(T.a)(C.a.mark((function t(){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getParams(!0);case 2:a=t.sent,e.setState({loading:!0}),e.props.ajax.post("/gen/tables",a,{baseURL:"/",successTip:"\u751f\u6210\u6210\u529f\uff01"}).finally((function(){return e.setState({loading:!1})}));case 5:case"end":return t.stop()}}),t)}))),e.handlePreview=Object(T.a)(C.a.mark((function t(){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getParams();case 2:a=t.sent,e.setState({loading:!0}),e.props.ajax.post("/gen/preview",a,{baseURL:"/"}).then((function(t){e.setState({previewVisible:!0,previewCode:t})})).finally((function(){return e.setState({loading:!1})}));case 5:case"end":return t.stop()}}),t)}))),e.handleSortEnd=function(t){var a=t.newIndex,n=t.oldIndex,l=e.state.table,r=l.children,i=void 0===r?[]:r;i.splice.apply(i,[a,0].concat(Object(p.a)(i.splice(n,1)))),l.children=Object(p.a)(i),e.setState({table:Object(f.a)({},l)})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=window.localStorage.getItem(w.DB_URL_STORE_KEY)||"",t=window.localStorage.getItem(w.SWAGGER_URL_STORE_KEY)||"";this.form.setFieldsValue({swaggerUrl:t}),e&&(this.form.setFieldsValue({dbUrl:e}),this.handleDbUrlChange())}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.deleting,l=t.tables,r=t.table,i=t.previewVisible,o=t.previewCode,c={style:{paddingLeft:16}};return u.a.createElement(m.a,{loading:a||n,style:{padding:0,margin:0}},u.a.createElement(y.j,null,u.a.createElement(b.default,{ref:function(t){return e.form=t},initialValues:{type:"mysql",method:"get",userName:"admin",password:"123456"}},u.a.createElement(y.d,null,u.a.createElement(y.c,Object.assign({},c,{width:240,type:"radio-button",name:"type",options:[{value:"swagger",label:"Swagger"},{value:"mysql",label:"MySql"},{value:"customer",label:"\u81ea\u5b9a\u4e49"}],onChange:this.handleTypeChange})),u.a.createElement(b.default.Item,{style:{marginBottom:0},shouldUpdate:function(e,t){return e.type!==t.type}},(function(t){var a=(0,t.getFieldValue)("type");return"mysql"===a?u.a.createElement(y.d,null,u.a.createElement(y.c,Object.assign({},c,{width:500,label:"\u6570\u636e\u5e93\u5730\u5740",name:"dbUrl",placeholder:"mysql://username:password@host:port/database",onChange:e.handleDbUrlChange})),u.a.createElement(y.c,Object.assign({},c,{elementStyle:{width:200},type:"select",showSearch:!0,label:"\u6570\u636e\u5e93\u8868",name:"tableName",onChange:e.handleTableNameChange,options:l.map((function(e){return{value:e.tableName,label:"".concat(e.tableName," ").concat(e.comment)}}))}))):"swagger"===a?u.a.createElement(y.d,null,u.a.createElement(y.c,Object.assign({},c,{width:400,label:"\u63a5\u53e3\u5730\u5740",name:"swaggerUrl",placeholder:"http(s)://host:port/path",onChange:e.handleSwaggerChange})),u.a.createElement(y.c,Object.assign({},c,{type:"select",width:100,placeholder:"\u63a5\u53e3\u65b9\u6cd5",name:"method",options:[{value:"get",label:"GET"},{value:"post",label:"POST"},{value:"put",label:"PUT"}],onChange:e.handleSwaggerChange})),u.a.createElement(y.c,Object.assign({},c,{width:120,placeholder:"Swagger\u7528\u6237",name:"userName"})),u.a.createElement(y.c,Object.assign({},c,{width:120,placeholder:"Swagger\u5bc6\u7801",name:"password"}))):"customer"===a?u.a.createElement(y.d,null,u.a.createElement(y.c,Object.assign({},c,{width:300,label:"\u6a21\u5757\u540d",name:"moduleName",placeholder:"\u6bd4\u5982\uff1auser-center",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6a21\u5757\u540d\uff01"}],onChange:e.handleModuleNameChange}))):void 0}))))),u.a.createElement("div",{style:{marginBottom:8,display:"flex",justifyContent:"space-between"}},u.a.createElement("div",null,u.a.createElement(h.default,{type:"primary",onClick:function(){return e.handleAdd()}},"\u6dfb\u52a0"),u.a.createElement(h.default,{style:{margin:"0 8px"},type:"primary",onClick:this.handleGen},"\u751f\u6210\u6587\u4ef6"),u.a.createElement(h.default,{onClick:this.handlePreview},"\u4ee3\u7801\u9884\u89c8")),u.a.createElement("div",{style:{paddingRight:23,paddingTop:3}},Object(w.renderTags)(r,(function(){return e.setState({table:Object(f.a)({},r)})})))),u.a.createElement(V,{onSortEnd:this.handleSortEnd,serialNumber:!0,columns:this.columns,dataSource:null===r||void 0===r?void 0:r.children,rowKey:"id"}),u.a.createElement(K,{visible:i,previewCode:o,onOk:function(){return e.setState({previewVisible:!1})},onCancel:function(){return e.setState({previewVisible:!1})}}))}}]),a}(s.Component))||I;var P=c.default.TabPane,_=Object(d.a)({title:"\u4ee3\u7801\u751f\u6210",path:"/gen"})(L=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement(m.a,{className:"root-1NzB1"},u.a.createElement(c.default,{defaultActiveKey:"single"},u.a.createElement(P,{key:"fast",tab:"\u5feb\u901f\u751f\u6210"},u.a.createElement(O,null)),u.a.createElement(P,{key:"single",tab:"\u5355\u72ec\u751f\u6210"},u.a.createElement(q,null))))}}]),a}(s.Component))||L},235:function(e,t,a){e.exports=a(6)(653)},239:function(e,t,a){e.exports=a(6)(372)}}]);
//# sourceMappingURL=12.4b663524.chunk.js.map