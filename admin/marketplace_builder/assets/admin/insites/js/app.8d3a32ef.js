(function(e){function t(t){for(var s,i,o=t[0],l=t[1],d=t[2],u=0,m=[];u<o.length;u++)i=o[u],n[i]&&m.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(m.length)m.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var c=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("c21b"),n=a.n(s);n.a},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=a("8c4f"),r=a("bc3a"),i=a.n(r),o=a("a7fe"),l=a.n(o),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],u={name:"app"},m=u,f=(a("034f"),a("2877")),h=Object(f["a"])(m,d,c,!1,null,null,null);h.options.__file="App.vue";var b=h.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid-container-full"},[a("div",{staticClass:"grid-x grid-padding-x"},[a("div",{staticClass:"large-12 small-12 medium-12 cell",staticStyle:{"margin-bottom":"30px"}},[a("ins-filter",{attrs:{id:"boom","with-date-filter":"","date-title":"Date Period"}},[a("ins-filter-item",{attrs:{name:"Status",options:'["All Status", "Pending", "Completed", "Declined"]'}})],1)],1),a("div",{staticClass:"large-3 medium-6 small-12 cell margin-bottom-30"},[a("ins-card",[a("ins-sparkline",{attrs:{"data-src":"https://8podbzvdw2.execute-api.us-east-2.amazonaws.com/insites-dummy-sparkline-deployment/insites-dummy-get-sparkline"}})],1)],1),a("div",{staticClass:"large-3 medium-6 small-12 cell margin-bottom-30"},[a("ins-card",[a("ins-sparkline",{ref:"Users",attrs:{id:"users",icon:"icon-user-1",name:"Users",value:"720",percentage:"7",description:"From previous year",movement:"decrease"}})],1)],1),a("div",{staticClass:"large-3 medium-6 small-12 cell margin-bottom-30"},[a("ins-card",[a("ins-sparkline",{ref:"BounceRate",attrs:{id:"bounceRate",icon:"icon-analytic-1",name:"Bounce Rate",value:"86%",percentage:"12",description:"From previous year",movement:"increase"}})],1)],1),a("div",{staticClass:"large-3 medium-6 small-12 cell margin-bottom-30"},[a("ins-card",[a("ins-sparkline",{ref:"Goals",attrs:{id:"goals",icon:"icon-goal-1",name:"Goals",value:"2.5K",percentage:"7",description:"From previous year",movement:"decrease"}})],1)],1),a("div",{staticClass:"large-12 medium-12 small-12 cell margin-bottom-30"},[a("ins-card",[a("ins-line-chart",{attrs:{id:"lineChart",name:"Sessions","data-src":"https://8yu847n8rb.execute-api.us-east-2.amazonaws.com/insites-linegraph2-deployment/insites-dummy-linegraph2"}})],1)],1),a("div",{staticClass:"large-12 medium-12 small-12 cell margin-bottom-30"},[a("ins-base-table",{attrs:{id:"insBaseTable","searchbar-placeholder":"Search..."}})],1),a("div",{staticClass:"large-12 medium-12 small-12 cell margin-bottom-30"},[a("ins-card",[a("ins-bar-chart",{attrs:{id:"barChart",name:"Column Chart","data-src":"https://9p1pa4b3fa.execute-api.us-east-2.amazonaws.com/insites-barchart-deployment/insites-dummy-barchart"}})],1)],1)])])},g=[],v=(a("20d6"),a("55dd"),a("6762"),a("2fdb"),a("456d"),a("ac6a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ins-input",{attrs:{label:e.label,value:e.value,placeholder:e.placeholder,name:e.name,field:e.field,"field-id":e.fieldId,icon:e.icon,disabled:e.disabled,readonly:e.readonly,required:e.required,"error-message":e.errorMessage,"has-error":e.hasError},on:{valueChange:e.onValueChange}})}),y=[],j={name:"InsInputWrap",props:{label:String,value:String,placeholder:String,name:String,field:String,fieldId:String,icon:String,errorMessage:String,hasError:Boolean,disabled:Boolean,readonly:Boolean,required:String},methods:{onValueChange:function(e){this.$emit("input",e.target.value)}}},w=j,_=(a("7f3d"),Object(f["a"])(w,v,y,!1,null,"15f91f09",null));_.options.__file="InsInputWrap.vue";var D=_.exports,C={name:"Overview",components:{InsInputWrap:D},data:function(){return{sampleModel:"",sparkLineSampleData:[["2017-12-18",13],["2017-12-25",0],["2018-01-01",0],["2018-01-08",8],["2018-01-15",5],["2018-01-22",2],["2018-01-29",1],["2018-02-05",1],["2018-02-12",1],["2018-02-19",0],["2018-02-26",1],["2018-03-05",0],["2018-03-12",0],["2018-03-19",2],["2018-03-26",1],["2018-04-02",11],["2018-04-09",2],["2018-04-16",2],["2018-04-23",0],["2018-04-30",0],["2018-05-07",0],["2018-05-14",0],["2018-05-21",1],["2018-05-28",0]]}},mounted:function(){var e=this;setTimeout(function(){e.$refs.Users.chartData=e.sparkLineSampleData,e.$refs.BounceRate.chartData=e.sparkLineSampleData,e.$refs.Goals.chartData=e.sparkLineSampleData},1e3);var t=document.getElementById("insBaseTable"),a=[],s=[],n=[],r=1,i=10,o="",l="";function d(e){t.loadingScreen=!0,i=e.detail.pageSize,r=e.detail.pageNumber,g()}function c(e){t.loadingScreen=!0,o=e.detail.value,o?(s=[],a.forEach(function(e){Object.keys(e).forEach(function(t){if("Default Column"===t){var a=e[t];a.toLowerCase().includes(o.toLowerCase())&&s.push(e)}})}),l&&s.length>1&&s.sort(v(l)),t.pageNumber=1,g(),s.length||(t.loadingScreen=!0,t.loaderTitle="",t.loaderMessage='No result found for "'+o+'"',t.loaderIcon="")):g()}function u(e){l="asc"===e.detail.order?e.detail.keyword:"-".concat(e.detail.keyword),o?s.sort(v(l)):a.sort(v(l)),g()}function m(e){"Archive"===e.detail.action&&b(e.detail.selections)}function f(e){"Archive"===e.detail.action&&h(e.detail.data)}function h(e){swal({title:"",html:'\n            <ins-loader\n              state-icon="warning"\n              icon-color="warning"\n              state-message="Are you sure you want to archive this item?">\n            </ins-loader>',type:"",showCancelButton:!0,confirmButtonText:"Archive"}).then(function(t){p(e),g()})}function b(e){var a=this;swal({title:"",html:'\n          <ins-loader\n            state-icon="warning"\n            icon-color="warning"\n            state-message="Are you sure you want to archive these items?">\n          </ins-loader>',type:"",showCancelButton:!0,confirmButtonText:"Archive"}).then(function(s){if(s.value){var n=0;e.forEach(function(s){a.deleteItem(s),n++,e.length===n&&(t.resetSelections(),g())})}})}function p(e){var t,n;a&&(t=a.findIndex(function(t){return t.Id===e})),s&&(n=s.findIndex(function(t){return t.Id===e})),t>-1&&a.splice(t,1),n>-1&&s.splice(n,1)}function g(){var e=r*i,l=e-i+1;n=[],o?(s.forEach(function(t,a){a>=l&&a<=e?n.push(t):s.length<i&&n.push(t)}),t.totalCount=s.length):(a.forEach(function(t,a){a>=l&&a<=e&&n.push(t)}),t.totalCount=a.length),t.tableData=n,t.loadingScreen=!1}function v(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(a,s){var n=a[e]<s[e]?-1:a[e]>s[e]?1:0;return n*t}}function y(){t.loadingScreen=!0,t.loaderTitle="Processing Your Data",t.loaderMessage="Just a moment, we're fetching and processing your data.",t.loaderIcon="processing";var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=JSON.parse(this.responseText);a=e.list,t.totalCount=e.count,t.tableHeaders=[{label:"Default Column",type:"string"},{label:"Date Column",type:"string"},{label:"Number Column",type:"number"},{label:"Currency Column",type:"currency"}],g()}},e.open("GET","https://ag64gmtsc0.execute-api.us-east-2.amazonaws.com/insites-dummy-deployment/insites-dummy-get-table",!0),e.send()}t.loadingScreen=!0,t.bulkActions=["Archive"],t.rowActions=["Archive"],t.addEventListener("onPaginationChange",d),t.addEventListener("onTableSearch",c),t.addEventListener("onTableSort",u),t.addEventListener("onTableBulkAction",m),t.addEventListener("onTableRowAction",f),y()}},k=C,T=(a("b9e2"),Object(f["a"])(k,p,g,!1,null,"84a5d89e",null));T.options.__file="Overview.vue";var B=T.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ins-button",{attrs:{field:"addNewAdmin",id:"addNewAdmin",label:"Add new Admin User",color:"blue",solid:"true",size:"medium",disabled:"false"},on:{click:function(t){e.addNewAdmin()}}}),a("ins-base-table",{attrs:{id:"insBaseTable","searchbar-placeholder":"Search by Email.."},on:{onPaginationChange:e.tablePaginationHandler,onTableSearch:e.tableSearchHandler,onTableSort:e.tableSortHandler,onTableBulkAction:e.tableBulkActionHandler,onTableRowAction:e.tableRowActionHandler}})],1)},N=[],A=a("c1df"),E=a.n(A),I={name:"ListUsers",data:function(){return{source:"/api/get-all-administrator-data.json",searchSource:"/api/search-administrators-data.json",location:"",insBaseTable:"",rawData:[],filteredData:[],displayedData:[],tableHeaders:[],totalCount:0,pageNumber:1,pageSize:10,searchKeyword:"",sortedKeyword:"",sortedBy:"asc",formModel:{form_configuration_name:"delete_admin_user",form:{deleted_at:""}},headers:{"X-CSRF-Token":"3b70c2a1087ba76b70ae54f620cd8710da18ba55","X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json"},continueDeletion:!1}},methods:{addNewAdmin:function(){this.$store.commit("pushFormType","add"),R.push("/manage-admin-user")},tablePaginationHandler:function(e){this.insBaseTable.loadingScreen=!0,this.pageSize=e.detail.pageSize,this.pageNumber=e.detail.pageNumber,this.fetchDataFromSrc()},tableSearchHandler:function(e){(13===e.detail.keyCode&&""!==e.detail.value||""===e.detail.value&&""!==this.searchKeyword)&&(this.searchKeyword=e.detail.value,this.pageNumber=1,this.insBaseTable.pageNumber=1,this.fetchDataFromSrc())},tableSortHandler:function(e){this.sortedKeyword="Admin User"===e.detail.keyword?"first_name":e.detail.keyword,this.sortedBy=e.detail.order,this.fetchDataFromSrc()},tableBulkActionHandler:function(e){"Remove"===e.detail.action&&this.archiveSelection(e.detail.selections)},tableRowActionHandler:function(e){"Remove"===e.detail.action?this.archiveItem(e.detail.data):"Edit"===e.detail.action?(this.$store.commit("pushUserData",e.detail.data),this.$store.commit("pushFormType","edit"),this.viewItem(e.detail.data)):"View"===e.detail.action&&(this.$store.commit("pushUserData",e.detail.data),this.$store.commit("pushFormType","view"),this.viewItem(e.detail.data))},viewItem:function(e){R.push("/manage-admin-user")},archiveItem:function(e){var t=this;swal({title:"",html:'\n          <ins-loader\n            state-icon="warning"\n            icon-color="warning"\n            state-message="Are you sure you want to remove this item?">\n          </ins-loader>',type:"",showCancelButton:!0,confirmButtonText:"Remove"}).then(function(a){a.value&&t.deleteItem(e)})},archiveSelection:function(e){var t=this;swal({title:"",html:'\n          <ins-loader\n            state-icon="warning"\n            icon-color="warning"\n            state-message="Are you sure you want to remove these items?">\n          </ins-loader>',type:"",showCancelButton:!0,confirmButtonText:"Remove"}).then(function(a){if(a.value){var s=0;t.continueDeletion=!0,e.forEach(function(a){t.continueDeletion&&(t.deleteItem(a),s++,e.length===s&&(t.continueDeletion=!1,t.insBaseTable.resetSelections()))})}})},deleteItem:function(e){var t=this;this.formModel.form.deleted_at=E()().format("DD-MM-YYYY HH:mm:ss");var a="".concat(this.location,"/api/users/").concat(e.id),s=JSON.stringify(this.formModel),n={closeHtml:'<button><i class="icon-close-1"></i></button>',closeButton:!0,timeOut:0,extendedTimeOut:0,preventDuplicates:!0};this.$http.put(a,s,{headers:this.headers}).then(function(e){t.continueDeletion||(parent.toastIt("success","User has been removed.",n),t.fetchDataFromSrc())}).catch(function(e){t.continueDeletion=!1,t.fetchDataFromSrc(),parent.toastIt("error","Failed to remove user. Please try again.",n)})},processTableData:function(){this.insBaseTable.tableData=this.rawData,this.insBaseTable.loadingScreen=!1},dynamicKeySort:function(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(a,s){var n=a[e]<s[e]?-1:a[e]>s[e]?1:0;return n*t}},fetchDataFromSrc:function(){var e=this;this.insBaseTable.loadingScreen=!0,this.insBaseTable.loaderTitle="Processing Your Data",this.insBaseTable.loaderMessage="Just a moment, we're fetching and processing your data.",this.insBaseTable.loaderIcon="processing";var t=this,a="".concat(this.source,"?size=").concat(this.pageSize,"&page=").concat(this.pageNumber,"&sortBy=").concat(this.sortedKeyword,"&orderBy=").concat(this.sortedBy);this.searchKeyword&&(a="".concat(this.searchSource,"?size=").concat(this.pageSize,"&page=").concat(this.pageNumber,"&sortBy=").concat(this.sortedKeyword,"&orderBy=").concat(this.sortedBy,"&email=").concat(this.searchKeyword)),this.$http.get(a).then(function(a){var s=a.data.items.results;s.length?(t.insBaseTable.totalCount=a.data.items.total_entries,e.bindTableData(s)):(e.insBaseTable.loaderTitle="",e.insBaseTable.loaderMessage="There are no Admin Users yet.",e.insBaseTable.loaderIcon="no-data")}).catch(function(t){console.error(t),e.errorHandler()})},errorHandler:function(){this.insBaseTable.loaderTitle=void 0,this.insBaseTable.loaderMessage="Failed to load Data. Please try again.",this.insBaseTable.loaderIcon="error"},bindTableData:function(e){var t=this,a=[];e.forEach(function(s){var n="";n=null===s.contact_number?"":null===s.contact_number.work_phone_area_code||null===s.contact_number.work_phone_number?"":"+"+s.contact_number.work_phone_country_code+" "+s.contact_number.work_phone_area_code+" "+s.contact_number.work_phone_number;var r={id:s.id,"First Name":s.first_name,"Last Name":s.last_name,"Admin User":s.first_name+" "+s.last_name,Email:s.email,Role:"Administrator",Company:null===s.administrator_details.company_name?"":s.administrator_details.company_name,Phone:n,"Work Phone Country Code":null===s.contact_number?"":s.contact_number.work_phone_country_code,"Work Phone Area Code":null===s.contact_number?"":s.contact_number.work_phone_area_code,"Work Phone Number":null===s.contact_number?"":s.contact_number.work_phone_number,"Last Activity":""};a.push(r),t.rawData=a,e.length===a.length&&t.processTableData()})}},mounted:function(){"localhost"!==window.location.hostname?this.headers["X-CSRF-Token"]=JSON.parse(document.getElementById("formConfig").innerHTML):(this.headers["X-CSRF-Token"]="3b70c2a1087ba76b70ae54f620cd8710da18ba55",this.location="https://insites-poc.staging-sydney.near-me.com"),this.insBaseTable=document.getElementById("insBaseTable"),this.insBaseTable.bulkActions=["Remove"],this.insBaseTable.rowActions=["View","Edit","Remove"],this.insBaseTable.tableHeaders=[{label:"Admin User",type:"string",sortable:!0},{label:"Email",type:"string",sortable:!0},{label:"Role",type:"string",sortable:!1},{label:"Phone",type:"string",sortable:!1},{label:"Last Activity",type:"string",sortable:!1}],this.fetchDataFromSrc()}},F=I,x=(a("b3c2"),Object(f["a"])(F,S,N,!1,null,"695915d5",null));x.options.__file="ListUsers.vue";var M=x.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("form",{attrs:{id:"userFormId",name:"userForm",action:"#","data-abide":"","data-live-validate":"true",novalidate:"",onsubmit:"event.preventDefault()"},on:{submit:e.bindValues}},[a("div",{staticClass:"grid-container-full"},[a("div",{staticClass:"grid-x grid-padding-x"},[a("div",{staticClass:"large-10 medium-12 small-12 cell"},[a("ins-card",{attrs:{steady:""}},[a("div",{staticClass:"grid-container-full"},[a("div",{staticClass:"grid-x grid-padding-x"},[a("div",{staticClass:"large-6 medium-6 small-12 cell"},[a("div",{staticClass:"grid-x grid-padding-x"},[a("div",{staticClass:"large-12 cell"},[a("h4",{staticClass:"ins-card-heading"},[e._v("User Details")]),a("InsInputWrap",{attrs:{id:"userFirstNameField",name:"userFirstNameField",placeholder:"First Name",label:"First Name*",field:"text",autocomplete:"off",required:"true",errorMessage:"First Name is required."},model:{value:e.userData["First Name"],callback:function(t){e.$set(e.userData,"First Name",t)},expression:"userData['First Name']"}})],1),a("div",{staticClass:"large-12 cell"},[a("InsInputWrap",{attrs:{id:"userLastNameField",name:"userLastNameField",placeholder:"Last Name",label:"Last Name*",field:"text",autocomplete:"off",required:"true",errorMessage:"Last Name is required."},model:{value:e.userData["Last Name"],callback:function(t){e.$set(e.userData,"Last Name",t)},expression:"userData['Last Name']"}})],1),a("div",{staticClass:"large-12 cell"},[a("div",{staticClass:"large-12 cell"},[a("ins-input-tel",{ref:"insInputTel",attrs:{label:"Phone","area-code":"userDataAreaCode","areacode-placeholder":"Area Code","phone-number":"userDataPhoneNumber","phonenum-placeholder":"Phone Number"}})],1)]),a("div",{staticClass:"large-12 cell"},[a("InsInputWrap",{attrs:{id:"userCompanyField",name:"userCompanyField",placeholder:"Company",label:"Company",field:"company",autocomplete:"off"},model:{value:e.userData["Company"],callback:function(t){e.$set(e.userData,"Company",t)},expression:"userData['Company']"}})],1)])]),a("div",{staticClass:"large-6 medium-6 small-12 cell"},[a("div",{staticClass:"grid-x grid-padding-x"},[a("div",{staticClass:"large-12 cell"},[a("h4",{staticClass:"ins-card-heading"},[e._v("Account Details")]),a("InsInputWrap",{ref:"userEmailField",attrs:{id:"userEmailField",name:"userEmailField",placeholder:"Email",label:"Email*",field:"email",autocomplete:"off",required:"true",errorMessage:"Email is invalid.",disabled:""},model:{value:e.userData["Email"],callback:function(t){e.$set(e.userData,"Email",t)},expression:"userData['Email']"}})],1),"add"===e.formType?a("div",{ref:"passwordWrapper",staticClass:"large-12 cell"},[a("InsInputWrap",{ref:"userPasswordField",attrs:{id:"userPasswordField",name:"userPasswordField",placeholder:"Password",label:"Password*",field:"Password",autocomplete:"off",required:"true",errorMessage:"Password is required."},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1):e._e()])])])])])],1)])]),a("div",{staticClass:"grid-container-full"},[a("div",{staticClass:"grid-x grid-padding-x grid-padding-y"},[a("div",{staticClass:"large-10 text-right cell submit-btn-wrap inline"},[a("ins-button",{attrs:{type:"button",id:"cancelButtonDetails",label:"Cancel",color:"blue",outlined:"true",size:"normal",disabled:"false"},on:{click:function(t){e.backToList()}}}),"view"!==e.formType?a("ins-button",{attrs:{type:"submit",id:"submitButtonDetails",label:e.buttonLabel,color:"blue",solid:"true",size:"normal",disabled:"false"}}):e._e(),"add"==e.formType?a("ins-button",{attrs:{type:"button",id:"addMoreButtonDetails",label:"Save and Create Another",color:"blue",solid:"true",size:"normal",disabled:"false"},on:{click:function(t){e.saveAddMore()}}}):e._e()],1)])])])])},P=[],z=(a("1c4c"),{name:"ViewUserDetails",components:{InsInputWrap:D},data:function(){return{userData:{},formType:this.$store.state.formType,formMethod:"",formName:"",fromURL:"/api/users",authToken:"",location:"",userCountryCode:"au",password:"",buttonLabel:"Create",addMore:!1,toastMsg:""}},methods:{backToList:function(){R.push("/admin-users")},saveAddMore:function(){this.addMore=!0,this.bindValues()},onInputHandler:function(e){e.target.id},formValidate:function(e){var t=0,a=this;return Array.from(e.getElementsByClassName("ins-form-field")).forEach(function(e){!0!==e.hasAttribute("required")&&"true"!=e.getAttribute("required")||(t+=a.validateInput(e,t)),"email"===e.getAttribute("type")&&(t+=a.validateEmail(e))}),!(t>0)},validateInput:function(e,t){return""===e.value.trim()||null===e.value?(this.invalidFieldNotif(e),1):(this.validFieldNotif(e),0)},invalidFieldNotif:function(e){e.closest("ins-input").setAttribute("has-error",!0)},validFieldNotif:function(e){e.closest("ins-input").removeAttribute("has-error")},validateEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return 1==t.test(String(e.value).toLowerCase())?(this.validFieldNotif(e),0):(this.invalidFieldNotif(e),1)},bindValues:function(){var e=this.$refs.insInputTel.getCountryData(),t={};e=e.dialCode,"add"===this.formType?(this.toastMsg="User",t={form_configuration_name:this.formName,form:{email:this.userData["Email"],password:this.password,first_name:this.userData["First Name"],last_name:this.userData["Last Name"],profiles_attributes:{administrator_attributes:{properties_attributes:{company:$("#userCompanyField").val()}},contact_number_attributes:{properties_attributes:{work_phone_country_code:e,work_phone_area_code:document.getElementsByName("userDataAreaCode")[0].value,work_phone_number:document.getElementsByName("userDataPhoneNumber")[0].value}}}}}):(this.addMore=!1,this.toastMsg="Your user",t={form_configuration_name:this.formName,form:{email:this.userData["Email"],first_name:this.userData["First Name"],last_name:this.userData["Last Name"],deleted_at:E()().format("DD-MM-YYYY HH:mm:ss"),profiles_attributes:{administrator_attributes:{properties_attributes:{company:$("#userCompanyField").val()}},contact_number_attributes:{properties_attributes:{work_phone_country_code:e,work_phone_area_code:document.getElementsByName("userDataAreaCode")[0].value,work_phone_number:document.getElementsByName("userDataPhoneNumber")[0].value}}}}}),this.formValidate(document.getElementById("userFormId"))&&this.submitForm(t)},submitForm:function(e){var t=this,a={"X-Requested-With":"XMLHttpRequest","X-CSRF-Token":this.authToken,Accept:"application/json","Content-Type":"application/json"},s={headers:a,method:this.formMethod,data:JSON.stringify(e),success:function(e){t.successHandler()},error:function(e){t.errorHandler(e)}};$.ajax(this.formURL,s)},successHandler:function(){var e={closeHtml:'<button><i class="icon-close-1"></i></button>',closeButton:!0,timeOut:0,extendedTimeOut:0};parent.toastIt("success","".concat(this.toastMsg," has been ").concat("add"===this.formType?"created":"updated","."),e),document.getElementById("userFormId").reset(),!this.addMore&&R.push("/admin-users"),this.addMore=!1},errorHandler:function(e){var t="";t+=e.responseJSON.errors.email?"- Email "+e.responseJSON.errors.email[0]:"",t+=e.responseJSON.errors.password?"<br /> - Password "+e.responseJSON.errors.password[0]:"",this.enableSubmitButtons();var a={closeHtml:'<button><i class="icon-close-1"></i></button>',closeButton:!0,timeOut:0,extendedTimeOut:0};parent.toastIt("error",t,a)},enableSubmitButtons:function(){document.getElementById("submitButtonDetails").setAttribute("disabled",!1),document.getElementById("saveAddMoreButtonDetails").setAttribute("disabled",!1),document.getElementById("cancelButtonDetails").setAttribute("disabled",!1)},disableSubmitButtons:function(){document.getElementById("submitButtonDetails").setAttribute("disabled",!0),document.getElementById("saveAddMoreButtonDetails").setAttribute("disabled",!0),document.getElementById("cancelButtonDetails").setAttribute("disabled",!0)},setFormSettings:function(){var e=this;if("add"===this.formType)this.buttonLabel="Create",this.formMethod="POST",this.formURL="/api/users",this.formName="admin_sign_up",this.userData={},document.getElementsByName("userEmailField")[0].disabled=!1;else if("view"===this.formType){this.buttonLabel="Update",this.userData=this.$store.state.userData,this.formMethod,this.formURL,this.formName="";for(var t=document.getElementById("userFormId"),a=t.elements,s=0,n=a.length;s<n;++s)a[s].readOnly=!0;$(".phone").intlTelInput("setNumber","+"+e.$store.state.userData["Work Phone Country Code"]),document.getElementsByName("userDataAreaCode")[0].value=e.$store.state.userData["Work Phone Area Code"],document.getElementsByName("userDataPhoneNumber")[0].value=e.$store.state.userData["Work Phone Number"]}else"edit"===this.formType?(this.buttonLabel="Update",this.userData=e.$store.state.userData,this.formMethod="PUT",this.formURL="".concat(this.location,"/api/users/").concat(this.userData.id),this.formName="admin_update_profile",$(".phone").intlTelInput("setNumber","+"+e.$store.state.userData["Work Phone Country Code"]),document.getElementsByName("userDataAreaCode")[0].value=e.$store.state.userData["Work Phone Area Code"],document.getElementsByName("userDataPhoneNumber")[0].value=e.$store.state.userData["Work Phone Number"]):"remove"===this.formType&&(this.userData=this.$store.state.userData)}},mounted:function(){var e=this;setTimeout(function(){e.$store.state.userData["Work Phone Country Code"]=""===e.$store.state.userData["Work Phone Country Code"]?"61":e.$store.state.userData["Work Phone Country Code"],e.setFormSettings()},200),"localhost"!==window.location.hostname?this.authToken=JSON.parse(document.getElementById("formConfig").innerHTML):(this.authToken="+Qj2j1eQpuy1fFxW6atnOluUyHLbL5cwDYL14rhASm13C+nkIPB6A5Ajxf/Cf1xFveFpEKMUd812HpUhyiBShQ==",this.location="https://insites-poc.staging-sydney.near-me.com")}}),O=z,H=(a("8d19"),Object(f["a"])(O,L,P,!1,null,null,null));H.options.__file="ViewUserDetails.vue";var U=H.exports;s["a"].use(n["a"]);var R=new n["a"]({routes:[{path:"/overview",name:"overview",component:B},{path:"/admin-users",name:"adminUsers",component:M},{path:"/manage-admin-user",name:"manageAdminUser",component:U}]}),W=a("2f62");s["a"].use(W["a"]);var q=new W["a"].Store({state:{userData:{},formType:""},mutations:{pushUserData:function(e,t){e.userData=t},pushFormType:function(e,t){e.formType=t}}});s["a"].use(n["a"]),s["a"].use(l.a,i.a),s["a"].config.productionTip=!1,s["a"].config.ignoredElements=["ins-card","ins-filter","ins-filter-item","ins-datepicker","ins-sparkline","ins-line-chart","ins-searchbar","ins-table","ins-tr","ins-th","ins-th-checkbox","ins-td","ins-td-checkbox","ins-action","ins-action-item","ins-loader","ins-button","ins-dropdown","ins-bar-chart","ins-radio","ins-toggle-switch","ins-input","ins-base-table","ins-input-tel"],new s["a"]({router:R,store:q,render:function(e){return e(b)}}).$mount("#app")},"7f3d":function(e,t,a){"use strict";var s=a("f930"),n=a.n(s);n.a},"8d19":function(e,t,a){"use strict";var s=a("9020"),n=a.n(s);n.a},9020:function(e,t,a){},b3c2:function(e,t,a){"use strict";var s=a("d183"),n=a.n(s);n.a},b9e2:function(e,t,a){"use strict";var s=a("cdec"),n=a.n(s);n.a},c21b:function(e,t,a){},cdec:function(e,t,a){},d183:function(e,t,a){},f930:function(e,t,a){}});
//# sourceMappingURL=app.8d3a32ef.js.map