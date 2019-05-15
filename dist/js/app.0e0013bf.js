(function(t){function e(e){for(var n,r,c=e[0],o=e[1],l=e[2],f=0,d=[];f<c.length;f++)r=c[f],i[r]&&d.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"03a5":function(t,e,a){},"06fb":function(t,e,a){},"0ceb":function(t,e,a){"use strict";var n=a("06fb"),i=a.n(n);i.a},"144c":function(t,e,a){},"33a8":function(t,e,a){},"389a":function(t,e,a){"use strict";var n=a("33a8"),i=a.n(n);i.a},"3ac1":function(t,e,a){"use strict";var n=a("4db5"),i=a.n(n);i.a},"4ab6":function(t,e,a){},"4db5":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("SearchBar"),a("router-view")],1)},s=[],r=a("be94"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"logo",on:{click:t.init}},[n("img",{staticStyle:{"{width":"100%}"},attrs:{src:a("e347"),alt:"header-logo"}})]),n("div",{staticClass:"search-bar"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"search-input",attrs:{type:"text",placeholder:"請輸入關鍵字"},domProps:{value:t.searchInput},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchHandler(e):null},input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),n("div",{staticClass:"search-btn",on:{click:t.searchHandler}},[n("span",[t._v("搜")]),n("span",[t._v("尋 ")])])])])])},o=[],l=a("2f62"),u={data:function(){return{searchInput:""}},methods:Object(r["a"])({},Object(l["d"])(["getInput","initData","initInput"]),{searchHandler:function(){""!=this.searchInput&&(this.getInput(this.searchInput),this.initData(),this.$router.push({path:"/search",query:{keyword:this.searchInput}}),this.searchInput="")},init:function(){this.initData(),this.initInput(),this.$router.push({name:"HomePage"})}})},f=u,d=(a("60a8"),a("2877")),v=Object(d["a"])(f,c,o,!1,null,null,null);v.options.__file="SearchBar.vue";var p=v.exports,h={components:{SearchBar:p},methods:Object(r["a"])({},Object(l["b"])(["getData"])),mounted:function(){this.getData()}},g=h,_=(a("0ceb"),Object(d["a"])(g,i,s,!1,null,null,null));_.options.__file="App.vue";var m=_.exports,C=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{attrs:{id:"HomePage"}},[a("div",{staticClass:"wrap"},[a("FilterBar"),a("ListPanel")],1),a("Pagination")],1)])},P=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filterBar"},[a("div",{staticClass:"lg"},[t._m(0),a("div",{staticClass:"filter-inner"},[a("div",{staticClass:"filter-area"},[a("div",{staticClass:"title"},[t._v("區域")]),a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.ZONE,expression:"ZONE"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.ZONE=e.target.multiple?a:a[0]}}},[a("option",{domProps:{value:null}},[t._v("請選擇")]),t._l(t.zoneArr,function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)])]),a("div",{staticClass:"filter-area"},[a("div",{staticClass:"title"},[t._v("分類")]),t._l(t.ticketInfoo,function(e){return a("label",{key:e,staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.TICKET,expression:"TICKET"}],attrs:{type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.TICKET)?t._i(t.TICKET,e)>-1:t.TICKET},on:{change:function(a){var n=t.TICKET,i=a.target,s=!!i.checked;if(Array.isArray(n)){var r=e,c=t._i(n,r);i.checked?c<0&&(t.TICKET=n.concat([r])):c>-1&&(t.TICKET=n.slice(0,c).concat(n.slice(c+1)))}else t.TICKET=s}}}),a("span",{staticClass:"box"}),a("div",{staticClass:"box-title"},[t._v(t._s(e))])])})],2)])]),a("div",{staticClass:"sm"},[a("div",{staticClass:"btn",on:{click:function(e){t.show=!t.show}}},[a("span",[t._v("篩")]),a("span",[t._v("選")])]),a("div",{staticClass:"filter-panel",class:{show:t.show}},[a("div",{staticClass:"cross",on:{click:function(e){t.show=!t.show}}},[a("i",{staticClass:"fas fa-times"})]),a("div",{staticClass:"filter-inner"},[t._m(1),a("div",{staticClass:"filter-area"},[a("div",{staticClass:"title"},[t._v("區域")]),a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.ZONE,expression:"ZONE"}],staticClass:"small",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.ZONE=e.target.multiple?a:a[0]}}},[a("option",{domProps:{value:null}},[t._v("請選擇")]),t._l(t.zoneArr,function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)])]),a("div",{staticClass:"filter-area"},[a("div",{staticClass:"title"},[t._v("分類")]),t._l(t.ticketInfoo,function(e){return a("label",{key:e,staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.TICKET,expression:"TICKET"}],attrs:{type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.TICKET)?t._i(t.TICKET,e)>-1:t.TICKET},on:{change:function(a){var n=t.TICKET,i=a.target,s=!!i.checked;if(Array.isArray(n)){var r=e,c=t._i(n,r);i.checked?c<0&&(t.TICKET=n.concat([r])):c>-1&&(t.TICKET=n.slice(0,c).concat(n.slice(c+1)))}else t.TICKET=s}}}),a("span",{staticClass:"box"}),a("div",{staticClass:"box-title"},[t._v(t._s(e))])])})],2)])])])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topic"},[a("span",[t._v("篩")]),a("span",[t._v("選")]),a("span",[t._v("條")]),a("span",[t._v("件")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topic"},[a("span",[t._v("篩")]),a("span",[t._v("選")]),a("span",[t._v("條")]),a("span",[t._v("件")])])}],y=(a("7f7f"),{data:function(){return{zoneArr:["三民區","內門區","美濃區","大樹區","小港區","六龜區","仁武區","左營區","田寮區","永安區","甲仙區","鼓山區","杉林區","那瑪夏","岡山區","前鎮區","新興區","苓雅區","茂林區","茄萣區","梓官區","旗津區","桃源區","楠梓區","前金區","鳳山區"],ticketInfoo:["免費參觀","新台幣50元"],show:!1}},computed:Object(r["a"])({},Object(l["e"])(["zone","ticketInfo","input"]),{ZONE:{get:function(){return this.zone},set:function(t){this.getZone(t)}},TICKET:{get:function(){return this.ticketInfo},set:function(t){this.getTicketInfo(t)}}}),methods:Object(r["a"])({},Object(l["d"])(["getZone","getTicketInfo","getCurrentPage"])),watch:{ZONE:function(){this.getCurrentPage(1),null!=this.zone&&"HomePage"!=this.$route.name&&this.$router.push({path:"/search",query:{keyword:this.input,area:this.zone,type:this.ticketInfo}})},TICKET:function(){this.getCurrentPage(1),0!=this.ticketInfo.length&&"HomePage"!=this.$route.name&&this.$router.push({path:"/search",query:{keyword:this.input,area:this.zone,type:this.ticketInfo}})}}}),O=y,E=(a("df83"),Object(d["a"])(O,I,k,!1,null,null,null));E.options.__file="FilterBar.vue";var T=E.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination"},[a("div",{staticClass:"panination-inner"},[t.totalPages>0?a("div",{staticClass:"panination-content"},[a("ul",[t.totalPages>1?a("li",{on:{click:function(e){e.preventDefault(),t.currentPageHandler(1)}}},[t._m(0)]):t._e(),t.totalPages>1?a("li",{on:{click:function(e){e.preventDefault(),t.pageHandler(-1)}}},[t._m(1)]):t._e(),t._l(t.pagination,function(e){return a("li",{staticClass:"lg-page",class:{active:t.curpage===e},on:{click:function(a){a.preventDefault(),t.currentPageHandler(e)}}},[a("a",[t._v(t._s(e))])])}),a("li",{staticClass:"sm-page",class:{active:t.curpage}},[a("a",[t._v(t._s(t.curPage))])]),t.totalPages>1?a("li",{on:{click:function(e){e.preventDefault(),t.pageHandler(1)}}},[t._m(2)]):t._e(),t.totalPages>1?a("li",{on:{click:function(e){e.preventDefault(),t.currentPageHandler(t.totalPages)}}},[t._m(3)]):t._e()],2)]):t._e()])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",[a("span",[t._v("最前頁")]),a("i",{staticClass:"fas fa-chevron-left"}),a("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",[a("span",[t._v("上一頁")]),a("i",{staticClass:"i fas fa-chevron-left"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",[a("span",[t._v("下一頁")]),a("i",{staticClass:"fas fa-chevron-right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",[a("span",[t._v("最後頁 ")]),a("i",{staticClass:"fas fa-chevron-right"}),a("i",{staticClass:"fas fa-chevron-right"})])}],x={data:function(){return{PaginationPrePage:5}},computed:Object(r["a"])({},Object(l["e"])(["curPage"]),Object(l["c"])(["totalPages","renderArray"]),{curpage:{get:function(){return this.curPage},set:function(t){this.getCurrentPage(t)}},pagination:function(){var t=this.totalPages,e=this.PaginationPrePage,a=this.curpage;if(1==t)return a=1,1;if(t<e&&t>1){for(var n=[],i=1;i<=t;i++)n.push(i);return n}if(t>=e){var s=[],r=Math.floor(e/2);if(a<=r){s=[];for(var c=1;c<=e;c++)s.push(c)}else if(a>=1+r&&a<=t-r){s=[];for(var o=a-r;o<=a+r;o++)s.push(o)}else if(a>=t-r+1){s=[];for(var l=t-e+1;l<=t;l++)s.push(l)}return s}}}),methods:Object(r["a"])({},Object(l["d"])(["getCurrentPage"]),{pageHandler:function(t){this.curpage=this.curpage+t,this.curpage<1?this.curpage=1:this.curpage>this.totalPages&&(this.curpage=this.totalPages)},currentPageHandler:function(t){this.curpage=t}}),created:function(){var t=this;dt.$on("initPage",function(e){t.curpage=e})}},D=x,A=(a("f904"),Object(d["a"])(D,j,w,!1,null,null,null));A.options.__file="Pagination.vue";var $=A.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-wrap"},[t.hasData?a("div",{staticClass:"list"},[t.searchInfo?a("div",{staticClass:"search-info"},[t._v('"'+t._s(t.input)+'" 搜尋結果，共'+t._s(t.filterControl.length)+"筆符合")]):t._e(),a("div",{staticClass:"list-wrap"},t._l(t.renderArray,function(e,n){return t.searchResult?a("div",{key:n,staticClass:"list-panel",attrs:{id:e._id},on:{click:t.clickId}},[a("div",{staticClass:"panel-inner"},[a("div",{staticClass:"image"},[a("div",{staticClass:"img-inner",style:{backgroundImage:"url("+e.Picture1+")"}})]),a("div",{staticClass:"text"},[a("div",{staticClass:"text-inner"},[a("div",{staticClass:"title"},[t._v(t._s(e.Name))]),a("div",{staticClass:"add"},[a("i",{staticClass:"fas fa-map-marker-alt"}),a("span",{staticClass:"large"},[t._v(t._s(e.Add))]),a("span",{staticClass:"small"},[t._v(t._s(e.Add.substr(0,6)))])]),a("div",{staticClass:"desc large"},[t._v(t._s(e.Description.substr(0,50))+"... ")]),a("div",{staticClass:"desc small"},[t._v(t._s(e.Description.substr(0,25))+"... ")])])])])]):t._e()})),t.searchResult?t._e():a("div",{staticClass:"no-result"},[t._v("查無符合結果")])]):t._e(),t.hasData?t._e():a("div",{staticClass:"list"},[t._m(0)])])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-wrap loading"},[a("div",{staticClass:"loader-circle"})])}],N={computed:Object(r["a"])({},Object(l["e"])(["input"]),Object(l["c"])(["renderArray","filterControl"]),{searchInfo:function(){return""!==this.input},searchResult:function(){return null===this.renderArray?void 0:0!=this.renderArray.length},hasData:function(){return null!==this.renderArray}}),methods:Object(r["a"])({},Object(l["d"])(["getID"]),{clickId:function(t){var e=t.target.closest(".list-panel"),a=e.id;this.getID(a),this.$router.push({name:"Attraction",params:{id:a}})}})},z=N,B=(a("782b"),Object(d["a"])(z,K,H,!1,null,null,null));B.options.__file="ListPanel.vue";var Z=B.exports,S={components:{FilterBar:T,Pagination:$,ListPanel:Z}},L=S,M=(a("ad59"),Object(d["a"])(L,b,P,!1,null,null,null));M.options.__file="HomePage.vue";var F=M.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{attrs:{id:"List"}},[a("div",{staticClass:"wrap"},[a("FilterBar"),a("ListPanel")],1),a("Pagination")],1)])},R=[],J={components:{FilterBar:T,Pagination:$,ListPanel:Z},computed:Object(r["a"])({},Object(l["c"])(["renderArray","hasItem","filterControl"]))},G=J,Q=(a("389a"),Object(d["a"])(G,q,R,!1,null,null,null));Q.options.__file="List.vue";var U=Q.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{staticClass:"item"},[a("ItemDetail")],1)])},W=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-detail"},[a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title"},[t._v(t._s(t.obj.Name))]),a("div",{staticClass:"item-add"},[a("i",{staticClass:"fas fa-map-marker-alt"}),a("span",[t._v(t._s(t.obj.Add))])]),a("div",{staticClass:"item-desc"},[t._v(t._s(t.obj.Description))]),a("div",{staticClass:"item-img",style:{backgroundImage:"url("+t.obj.Picture1+")"}})]),a("div",{staticClass:"go-back",on:{click:t.goBack}},[a("span",[t._v("返回搜尋結果")])])])},Y=[],tt={computed:Object(r["a"])({},Object(l["c"])(["findItem"]),{obj:function(){return this.findItem[0]}}),methods:{goBack:function(){this.$router.go(-1)}}},et=tt,at=(a("3ac1"),Object(d["a"])(et,X,Y,!1,null,null,null));at.options.__file="ItemDetail.vue";var nt=at.exports,it={components:{ItemDetail:nt}},st=it,rt=(a("a085"),Object(d["a"])(st,V,W,!1,null,null,null));rt.options.__file="Item.vue";var ct=rt.exports;n["a"].use(C["a"]);var ot=new C["a"]({linkActiveClass:"active",routes:[{path:"/",name:"HomePage",component:F},{path:"/search",name:"search",component:U},{path:"/attraction/:id",name:"Attraction",component:ct},{path:"*",redirect:"/"}]}),lt=(a("ac6a"),a("bc3a")),ut=a.n(lt);n["a"].use(l["a"]);var ft=new l["a"].Store({state:{totalData:null,input:"",zone:null,ticketInfo:[],itemPrePage:5,curPage:1,id:""},getters:{renderArray:function(t,e){if(null===t.totalData)return null;var a=(t.curPage-1)*t.itemPrePage,n=t.curPage*t.itemPrePage;return e.filterControl.slice(a,n)},totalPages:function(t,e){if(null!==t.totalData)return Math.ceil(e.filterControl.length/t.itemPrePage)},filterControl:function(t){if(null!==t.totalData){var e=t.totalData;return""!==t.input&&(e=e.filter(function(e){var a=!1,n=["Add","Description"];return n.forEach(function(n){-1!=e[n].indexOf(t.input)&&(a=!0)}),a})),null!==t.zone&&(e=e.filter(function(e){return-1!=e["Zone"].indexOf(t.zone)})),""!==t.ticketInfo&&(e=e.filter(function(e){return-1!=e["Ticketinfo"].indexOf(t.ticketInfo)})),e}},findItem:function(t){return t.totalData.filter(function(e){return t.id==e["_id"]})},hasItem:function(t){if(""!==t.input){var e=[],a=["Add","Description"];return t.totalData.forEach(function(n){a.forEach(function(a){e.push(n[a].indexOf(t.input))})}),e.some(function(t){return t>=0})}}},mutations:{getInput:function(t,e){t.input=e},getZone:function(t,e){t.zone=e},getTicketInfo:function(t,e){t.ticketInfo=e},getCurrentPage:function(t,e){t.curPage=e},updateData:function(t,e){t.totalData=e},getID:function(t,e){t.id=e},initData:function(t){t.zone=null,t.ticketInfo=[],t.curPage=1},initInput:function(t){t.input=""}},actions:{getData:function(t){ut.a.get("https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97").then(function(e){t.commit("updateData",e.data.result.records)})}}});a.d(e,"eventBus",function(){return dt}),n["a"].config.productionTip=!1;var dt=new n["a"];new n["a"]({router:ot,store:ft,render:function(t){return t(m)}}).$mount("#app")},"5c3d":function(t,e,a){},"60a8":function(t,e,a){"use strict";var n=a("03a5"),i=a.n(n);i.a},"782b":function(t,e,a){"use strict";var n=a("4ab6"),i=a.n(n);i.a},a085:function(t,e,a){"use strict";var n=a("b349"),i=a.n(n);i.a},ad59:function(t,e,a){"use strict";var n=a("5c3d"),i=a.n(n);i.a},b349:function(t,e,a){},db7d:function(t,e,a){},df83:function(t,e,a){"use strict";var n=a("db7d"),i=a.n(n);i.a},e347:function(t,e,a){t.exports=a.p+"img/logo.396a2d94.svg"},f904:function(t,e,a){"use strict";var n=a("144c"),i=a.n(n);i.a}});
//# sourceMappingURL=app.0e0013bf.js.map