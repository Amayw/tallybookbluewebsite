(function(t){function e(e){for(var i,c,s=e[0],r=e[1],u=e[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},o={app:0},a=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/tallybookbluewebsite/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"063f":function(t,e,n){},1269:function(t,e,n){"use strict";var i=n("ef88"),o=n.n(i);o.a},"27c5":function(t,e,n){},"2a41":function(t,e,n){"use strict";var i=n("5a16"),o=n.n(i);o.a},"357e":function(t,e,n){"use strict";var i=n("44bd"),o=n.n(i);o.a},"44bd":function(t,e,n){},"55b4":function(t,e,n){},"5a16":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),o=n.n(i);o.a},6202:function(t,e,n){"use strict";var i=n("62e9"),o=n.n(i);o.a},"62e9":function(t,e,n){},6966:function(t,e,n){},7281:function(t,e,n){"use strict";var i=n("7b47"),o=n.n(i);o.a},"7b1a":function(t,e,n){"use strict";var i=n("063f"),o=n.n(i);o.a},"7b47":function(t,e,n){},"7f8a":function(t,e,n){},"8eb9":function(t,e,n){"use strict";var i=n("a453"),o=n.n(i);o.a},"91c8":function(t,e,n){"use strict";var i=n("55b4"),o=n.n(i);o.a},"94b4":function(t,e,n){},"9c0c":function(t,e,n){},a453:function(t,e,n){},b71a:function(t,e,n){"use strict";var i=n("7f8a"),o=n.n(i);o.a},c02a:function(t,e,n){"use strict";var i=n("27c5"),o=n.n(i);o.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=(n("5c0b"),n("2877")),s={},r=Object(c["a"])(s,o,a,!1,null,null,null),u=r.exports,l=n("9483");Object(l["a"])("".concat("/tallybookbluewebsite/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"money"},[n("Category",{attrs:{category:t.consumption.category},on:{"update:category":function(e){return t.$set(t.consumption,"category",e)}}}),n("Tags",{attrs:{tagsList:t.tagsList,selectedTagId:t.consumption.selectedTagId},on:{"update:selectedTagId":function(e){return t.$set(t.consumption,"selectedTagId",e)},"update:selected-tag-id":function(e){return t.$set(t.consumption,"selectedTagId",e)}}}),n("NumberPad",{attrs:{money:t.consumption.money,notes:t.consumption.notes},on:{"update:money":function(e){return t.$set(t.consumption,"money",e)},"update:notes":function(e){return t.$set(t.consumption,"notes",e)},submit:t.addConsumption}})],1)])},p=[],m=(n("ac1f"),n("1276"),n("d4ec")),h=n("bee2"),v=n("262e"),b=n("2caf"),g=n("9ab4"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticClass:"tags"},t._l(t.tagsList,(function(e){return n("li",{key:e.id,class:e.id===t.selectedTagId?"active":"",on:{click:function(n){return t.changeSelectedTag(e.id)}}},[n("Icon",{attrs:{name:e.icon}}),n("span",[t._v(t._s(e.name))])],1)})),0)},O=[],j=(n("a9e3"),n("60a3")),w=function(t){Object(v["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(m["a"])(this,n),e.apply(this,arguments)}return Object(h["a"])(n,[{key:"changeSelectedTag",value:function(t){t!==this.selectedTagId&&this.$emit("update:selectedTagId",t)}}]),n}(i["a"]);Object(g["a"])([Object(j["b"])(Array)],w.prototype,"tagsList",void 0),Object(g["a"])([Object(j["b"])(Number)],w.prototype,"selectedTagId",void 0),w=Object(g["a"])([j["a"]],w);var _=w,C=_,k=(n("c02a"),Object(c["a"])(C,y,O,!1,null,"24d4c77e",null)),L=k.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"numberWrapper"},[n("div",{staticClass:"inputs"},[n("input",{staticClass:"left",attrs:{label:"notes",placeholder:"备注"},domProps:{value:t.notes},on:{input:function(e){return t.onNotesChange(e.target.value)}}}),n("div",{staticClass:"right"},[t._v(t._s(t.output)+"元")])]),n("div",{staticClass:"buttons",on:{click:t.sumMoney}},[n("button",[t._v("1")]),n("button",[t._v("2")]),n("button",[t._v("3")]),n("button",{staticClass:"delete"},[t._v("删除")]),n("button",[t._v("4")]),n("button",[t._v("5")]),n("button",[t._v("6")]),n("button",[t._v("+")]),n("button",[t._v("7")]),n("button",[t._v("8")]),n("button",[t._v("9")]),n("button",[t._v("-")]),n("button",[t._v(".")]),n("button",[t._v("0")]),n("button",[t._v("清除")]),n("button",{staticClass:"ok"},[t._v("完成")])])])},$=[],x=(n("4de4"),n("a630"),n("c975"),n("fb6a"),n("b680"),n("3ca3"),n("4c53"),function(t){Object(v["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(m["a"])(this,n),t=e.apply(this,arguments),t.output=t.money,t}return Object(h["a"])(n,[{key:"onNotesChange",value:function(t){this.$emit("update:notes",t)}},{key:"add",value:function(t){var e=t.split("+");return this.isFloat(String(Number(e[0])+Number(e[1])))}},{key:"sub",value:function(t){var e=t.split("-"),n=Number(e[0])-Number(e[1]);return n>0?this.isFloat(String(n)):(window.alert("金额不能为负数哦~"),"0")}},{key:"isNum",value:function(t){return t.indexOf(".")!==t.length-1||(window.alert("请检查输入金额，小数点不应在金额末尾！"),!1)}},{key:"isPoints",value:function(t,e){t.indexOf(e)>=0||(this.output+=e)}},{key:"isZero",value:function(t,e){this.output="0"===t?t:t+e}},{key:"isFloat",value:function(t){if(t.indexOf("."))return String(Number(t).toFixed(2))}},{key:"isResZero",value:function(t){var e=Array.from(t).filter((function(t){return"."!==t&&"0"!==t}));return 0===e.length}},{key:"sumMoney",value:function(t){var e=t.target,n=e.textContent;if("0123456789".indexOf(n)>=0)"0"===this.output?this.output=n:this.output+=n;else if("+-".indexOf(n)>=0)if(this.output.indexOf("+")>=0||this.output.indexOf("-")>=0)if("+"===n)this.output.indexOf("-")>=0?this.isZero(this.sub(this.output),n):this.output=this.add(this.output)+"+";else{if("-"!==n)return;this.output.indexOf("+")>=0?this.output=this.add(this.output)+"-":this.isZero(this.sub(this.output),n)}else{if(!this.isNum(this.output))return;"-"===n&&"0"===this.output?alert("金额不能输入负数哦~"):this.output+=n}else if("清除"===n)this.output="0";else if("删除"===n)1===this.output.length?this.output="0":this.output=this.output.slice(0,this.output.length-1);else if("."===n){if(this.output.indexOf(n)>=0){if(this.output.indexOf("+")>=0){var i=this.output.split("+"),o=Array.from(i[1]);this.isPoints(o,n)}else{if(!(this.output.indexOf("-")>=0))return;var a=this.output.split("-"),c=Array.from(a[1]);this.isPoints(c,n)}return}this.output+=n}else if("完成"===n)if(this.output.indexOf("+")>=0)this.output=this.add(this.output);else if(this.output.indexOf("-")>=0)this.output=this.sub(this.output);else if(this.isResZero(this.output))window.alert("请输入正确记账金额哦~");else if(this.isNum(this.output)){if(this.isResZero(this.isFloat(this.output)))return void window.alert("请输入正确的记账金额哦(小数四舍五入精确到小数点后两位哦)~");this.$emit("update:money",this.isFloat(this.output)),this.$emit("submit",this.isFloat(this.output)),this.output=this.money}}}]),n}(i["a"]));Object(g["a"])([Object(j["b"])(String)],x.prototype,"money",void 0),Object(g["a"])([Object(j["b"])(String)],x.prototype,"notes",void 0),x=Object(g["a"])([j["a"]],x);var T=x,N=T,S=(n("7281"),Object(c["a"])(N,I,$,!1,null,"3c2555ac",null)),E=S.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("ul",[n("li",{class:"1"===t.category&&"active",on:{click:function(e){return t.changeCategory("1")}}},[t._v("支出")]),n("li",{class:"2"===t.category&&"active",on:{click:function(e){return t.changeCategory("2")}}},[t._v("收入")])])])},A=[],P=function(t){Object(v["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(m["a"])(this,n),e.apply(this,arguments)}return Object(h["a"])(n,[{key:"changeCategory",value:function(t){if("1"!==t&&"2"!==t)return new Error("type is  unknown");this.$emit("update:category",t)}}]),n}(i["a"]);Object(g["a"])([Object(j["b"])(String)],P.prototype,"category",void 0),P=Object(g["a"])([j["a"]],P);var F=P,Y=F,D=(n("7b1a"),Object(c["a"])(Y,M,A,!1,null,"345e21ee",null)),J=D.exports,R=function(t){Object(v["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(m["a"])(this,n),t=e.apply(this,arguments),t.consumption={category:"1",selectedTagId:1,money:"0",notes:""},t}return Object(h["a"])(n,[{key:"created",value:function(){this.$store.commit("fetchConsumption"),this.$store.commit("fetchLabel"),this.consumption.selectedTagId=this.tagsList[0].id}},{key:"addConsumption",value:function(){this.$store.commit("addConsumption",this.consumption),"00"===this.consumption.money.split(".")[1]?window.alert("记账成功！"+this.consumption.notes+" "+this.consumption.money+"元"):window.alert("记账成功！"+this.consumption.notes+" "+this.consumption.money+"元(小数四舍五入精确到小数点后两位哦)")}},{key:"onConsumptionListChange",value:function(){this.consumption.money="0",this.consumption.notes=""}},{key:"consumptionList",get:function(){return this.$store.state.consumptionList}},{key:"tagsList",get:function(){return this.$store.state.tagsList}}]),n}(i["a"]);Object(g["a"])([Object(j["c"])("consumptionList")],R.prototype,"onConsumptionListChange",null),R=Object(g["a"])([Object(j["a"])({components:{Category:J,Tags:L,NumberPad:E}})],R);var Z=R,q=Z,U=(n("1269"),Object(c["a"])(q,f,p,!1,null,"efb86972",null)),z=U.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"labelContent"},[n("header",[n("Icon",{attrs:{name:""}}),t._v(" 标签管理 "),n("div",{staticClass:"right",on:{click:t.addLabel}},[n("Icon",{attrs:{name:"icon-jia"}})],1)],1),n("div",{staticClass:"labels"},t._l(t.tagsList,(function(e){return n("router-link",{key:e.id,staticClass:"link",attrs:{to:"labels/edit/"+e.id}},[n("div",{staticClass:"item"},[n("div",{staticClass:"left"},[n("Icon",{attrs:{name:e.icon}})],1),n("div",{staticClass:"right"},[n("span",[t._v(t._s(e.name))]),n("Icon",{staticClass:"more",attrs:{name:"icon-gengduo1"}})],1)])])})),1)])])},H=[],W=(n("b0c0"),n("d3b7"),n("25f0"),parseInt(window.localStorage.getItem("maxId")||"17"));function G(){return W++,window.localStorage.setItem("maxId",W.toString()),W}var K=function(t){Object(v["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(m["a"])(this,n),t=e.apply(this,arguments),t.label={id:1e4,icon:"icon-fruit8",name:""},t}return Object(h["a"])(n,[{key:"created",value:function(){this.$store.commit("fetchLabel")}},{key:"addLabel",value:function(){var t=window.prompt("请输入新标签名");t?t.length>4?window.alert("标签名称不能超过4个字符哦~"):(this.label.name=t,this.label.id=G(),this.$store.commit("addLabel",this.label),window.alert("创建标签成功！")):window.alert("标签名不能为空哦~")}},{key:"tagsList",get:function(){return this.$store.state.tagsList}}]),n}(i["a"]);K=Object(g["a"])([Object(j["a"])({})],K);var Q=K,V=Q,X=(n("ed5b"),Object(c["a"])(V,B,H,!1,null,"2525a076",null)),tt=X.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"staContent"},[n("Category",{attrs:{category:t.category},on:{"update:category":function(e){t.category=e}}}),0===t.group.length?n("div",{staticClass:"noRecord"},[n("div",[t._v("空空如也~")]),n("div",[n("span",[t._v("快去")]),n("router-link",{staticClass:"addRecord",attrs:{to:"/money"}},[t._v("记一笔")]),n("span",[t._v("吧")])],1)]):n("ol",{staticClass:"displayHash"},t._l(t.group,(function(e,i){return n("li",{key:i,staticClass:"hashItem"},[n("ol",{staticClass:"displayRecord"},[n("li",{staticClass:"recordTitle"},[n("span",[t._v(t._s(t.beauty(e.title)))]),n("span",[t._v("￥"+t._s(e.total))])]),t._l(e.items,(function(e){return n("li",{key:e.createAt,staticClass:"recordItems"},[n("div",{staticClass:"iconAddName"},[n("Icon",{attrs:{name:t.tagsList[e.selectedTagId].icon}}),n("span",{staticClass:"name"},[t._v(t._s(t.tagsList[e.selectedTagId].name))]),n("span",{staticClass:"notes"},[t._v(t._s(e.notes))])],1),n("div",{staticClass:"money"},[t._v("￥"+t._s(e.money))])])}))],2)])})),0)],1)])},nt=[],it=(n("d81d"),n("13d5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("ul",[n("li",{class:"day"===t.displayMode&&"active",on:{click:function(e){return t.changeCategory("day")}}},[t._v("列表展示")]),n("li",{class:"table"===t.displayMode&&"active",on:{click:function(e){return t.changeCategory("table")}}},[t._v("图标统计")])])])}),ot=[],at=function(t){Object(v["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(m["a"])(this,n),e.apply(this,arguments)}return Object(h["a"])(n,[{key:"changeCategory",value:function(t){if(!(["day","table"].indexOf(t)>=0))return new Error("type is  unknown");this.$emit("update:displayMode",t)}}]),n}(i["a"]);Object(g["a"])([Object(j["b"])(String)],at.prototype,"displayMode",void 0),at=Object(g["a"])([j["a"]],at);var ct=at,st=ct,rt=(n("8eb9"),Object(c["a"])(st,it,ot,!1,null,"33e25206",null)),ut=rt.exports,lt=n("5a0c"),dt=n.n(lt);function ft(t){return JSON.parse(JSON.stringify(t))}var pt=function(t){Object(v["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(m["a"])(this,n),t=e.apply(this,arguments),t.category="1",t.displayMode="day",t}return Object(h["a"])(n,[{key:"created",value:function(){this.$store.commit("fetchConsumption"),this.$store.commit("fetchLabel")}},{key:"beauty",value:function(t){var e=dt()(t),n=dt()();return e.isSame(n,"day")?"今天":e.isSame(n.subtract(1,"day"),"day")?"昨天":e.isSame(n.subtract(2,"day"),"day")?"前天":e.isSame(n,"year")?e.format("MM月DD日"):e.format("YYYY年MM月D日")}},{key:"consumptionList",get:function(){return this.$store.state.consumptionList}},{key:"tagsList",get:function(){return this.$store.state.tagsList}},{key:"group",get:function(){var t=this,e=this.consumptionList,n=ft(e).filter((function(e){return e.category===t.category})).sort((function(t,e){return dt()(e.createAt).valueOf()-dt()(t.createAt).valueOf()}));if(0===n.length)return[];for(var i=[{title:dt()(n[0].createAt).format("YYYY-MM-DD"),items:[n[0]]}],o=1;o<n.length;o++){var a=dt()(n[o].createAt).format("YYYY-MM-DD");a===i[i.length-1].title?i[i.length-1].items.push(n[o]):i[i.length]={title:a,items:[n[o]]}}return i.map((function(t){return t.total=t.items.reduce((function(t,e){return console.log(t),console.log(e.money),t+parseFloat(e.money)}),0).toFixed(2).toString()})),i}}]),n}(i["a"]);pt=Object(g["a"])([Object(j["a"])({components:{Tabs:ut,Category:J}})],pt);var mt=pt,ht=mt,vt=(n("b71a"),Object(c["a"])(ht,et,nt,!1,null,"36d10ab0",null)),bt=vt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",[t._v("您输入的页面不存在")]),n("div",[t._v("请检查网址")]),n("div",[n("router-link",{staticClass:"back",attrs:{to:"/money"}},[t._v("点击返回首页")])],1)])},yt=[],Ot={name:"Error404"},jt=Ot,wt=(n("357e"),Object(c["a"])(jt,gt,yt,!1,null,"368ddf24",null)),_t=wt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("header",[n("div",{staticClass:"left",on:{click:t.back}},[n("span",[t._v("返回")])]),n("div",{staticClass:"center"},[t._v("编辑标签")]),n("div",{staticClass:"right",on:{click:t.update}},[t._v("保存")])]),n("div",{staticClass:"edit"},[n("Icon",{attrs:{name:t.iconList[t.selectedId-1].icon}}),n("input",{attrs:{placeholder:"标签名称不能超过4个字符哦~"},domProps:{value:t.newName},on:{input:function(e){t.newName=e.target.value}}}),n("Icon",{staticClass:"delete",attrs:{name:"icon-shanchu"},on:{click:t.remove}})],1),n("Tags",{staticClass:"icons",attrs:{"tags-list":t.iconList,"selected-tag-id":t.selectedId},on:{"update:selectedTagId":function(e){t.selectedId=e},"update:selected-tag-id":function(e){t.selectedId=e}}})],1)},kt=[],Lt=(n("5319"),function(t){Object(v["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(m["a"])(this,n),t=e.apply(this,arguments),t.iconList=[{id:1,icon:"icon-flower"},{id:2,icon:"icon-high-heels"},{id:3,icon:"icon-wanju"},{id:4,icon:"icon-shouyinji"},{id:5,icon:"icon-yinle"},{id:6,icon:"icon-qiqiu"},{id:7,icon:"icon-youxiji"},{id:8,icon:"icon-mofang"},{id:9,icon:"icon-taiyang"},{id:10,icon:"icon---"},{id:11,icon:"icon-niunai"},{id:12,icon:"icon-glass"},{id:13,icon:"icon-neiyi"},{id:14,icon:"icon-yanjing"},{id:15,icon:"icon-yanjing1"},{id:16,icon:"icon-wanju1"},{id:17,icon:"icon-hongbao"},{id:18,icon:"icon-pintu"},{id:19,icon:"icon-zhiwu"},{id:20,icon:"icon-youxiji1"},{id:21,icon:"icon-shopping"},{id:22,icon:"icon-gaogenxie"},{id:23,icon:"icon-dangao"},{id:24,icon:"icon-hua"},{id:25,icon:"icon-huahua"},{id:26,icon:"icon-cube"},{id:27,icon:"icon-gangqin"},{id:28,icon:"icon-communication1"},{id:29,icon:"icon-daily1"},{id:30,icon:"icon-baby2"},{id:31,icon:"icon-clothes1"},{id:32,icon:"icon-digital2"},{id:33,icon:"icon-lottery1"},{id:34,icon:"icon-medical1"},{id:35,icon:"icon-medical2"},{id:36,icon:"icon-communication4"},{id:37,icon:"icon-fun2"},{id:38,icon:"icon-beauty2"},{id:39,icon:"icon-fruit6"},{id:40,icon:"icon-vegetable6"},{id:41,icon:"icon-vegetable2"},{id:42,icon:"icon-book2"},{id:43,icon:"icon-car2"},{id:44,icon:"icon-clothes8"},{id:45,icon:"icon-vegetable3"},{id:46,icon:"icon-traffic4"},{id:47,icon:"icon-digital4"},{id:48,icon:"icon-wage1"},{id:49,icon:"icon-car4"},{id:50,icon:"icon-travel1"},{id:51,icon:"icon-food4"},{id:52,icon:"icon-traffic5"},{id:53,icon:"icon-car5"},{id:54,icon:"icon-digital5"},{id:55,icon:"icon-daily3"},{id:56,icon:"icon-clothes3"},{id:57,icon:"icon-gift3"},{id:58,icon:"icon-travel2"},{id:59,icon:"icon-fruit8"},{id:60,icon:"icon-home4"},{id:61,icon:"icon-food3"},{id:62,icon:"icon-home3"},{id:63,icon:"icon-beauty6"},{id:64,icon:"icon-beauty3"},{id:65,icon:"icon-vegetable5"},{id:66,icon:"icon-fruit4"},{id:67,icon:"icon-pet1"},{id:68,icon:"icon-digital3"},{id:69,icon:"icon-car6"},{id:70,icon:"icon-car7"},{id:71,icon:"icon-clothes6"},{id:72,icon:"icon-book3"},{id:73,icon:"icon-daily2"},{id:74,icon:"icon-pet2"},{id:75,icon:"icon-parent1"},{id:76,icon:"icon-clothes5"},{id:77,icon:"icon-parent2"},{id:78,icon:"icon-traffic6"},{id:79,icon:"icon-fun6"},{id:80,icon:"icon-wage2"}],t.selectedId=1,t.newName="",t.id=200,t}return Object(h["a"])(n,[{key:"created",value:function(){var t=this,e=this.$route.params.id;this.$store.commit("setCurrentTag",e),this.currentTag?(this.selectedId=this.iconList.filter((function(e){return e.icon===t.currentTag.icon}))[0].id,this.newName=this.currentTag.name,this.id=this.currentTag.id):this.$router.replace("/404")}},{key:"back",value:function(){this.$router.replace("/labels")}},{key:"update",value:function(){if(""===this.newName)this.newName=this.currentTag.name;else if(this.newName.length>4)return window.alert("标签名称不能超过4个字符哦~"),void(this.newName=this.currentTag.name);this.$store.commit("updateLabel",{id:this.id,name:this.newName,icon:this.iconList[this.selectedId-1].icon}),this.back()}},{key:"remove",value:function(){this.$store.commit("removeLabel",this.id),this.back()}},{key:"currentTag",get:function(){return this.$store.state.currentTag}}]),n}(i["a"]));Lt=Object(g["a"])([Object(j["a"])({components:{Tags:L}})],Lt);var It=Lt,$t=It,xt=(n("91c8"),Object(c["a"])($t,Ct,kt,!1,null,"729cda40",null)),Tt=xt.exports;i["a"].use(d["a"]);var Nt=[{path:"/",redirect:"/money"},{path:"/money",component:z},{path:"/statistics",component:bt},{path:"/labels",component:tt},{path:"/labels/edit/:id",component:Tt},{path:"*",component:_t}],St=new d["a"]({routes:Nt}),Et=St,Mt=n("2f62");i["a"].use(Mt["a"]);var At=[{id:0,icon:"icon-clothes5",name:"服饰"},{id:1,icon:"icon-food4",name:"餐饮"},{id:2,icon:"icon-book2",name:"书籍"},{id:3,icon:"icon-travel1",name:"旅游"},{id:4,icon:"icon-beauty6",name:"美容"},{id:5,icon:"icon-daily1",name:"日用"},{id:6,icon:"icon-vegetable3",name:"蔬菜"},{id:7,icon:"icon-fruit8",name:"水果"},{id:8,icon:"icon-pet1",name:"宠物"},{id:9,icon:"icon-lottery1",name:"彩票"},{id:10,icon:"icon-traffic5",name:"交通"},{id:11,icon:"icon-home3",name:"住房"},{id:12,icon:"icon-medical2",name:"医疗"},{id:13,icon:"icon-fun2",name:"娱乐"},{id:14,icon:"icon-baby2",name:"母婴"},{id:15,icon:"icon-car2",name:"汽车"},{id:16,icon:"icon-communication4",name:"通讯"},{id:17,icon:"icon-digital2",name:"数码"}],Pt=new Mt["a"].Store({state:{consumptionList:[],tagsList:[],currentTag:void 0},mutations:{fetchConsumption:function(t){t.consumptionList=JSON.parse(window.localStorage.getItem("consumption")||"[]")},addConsumption:function(t,e){var n=ft(e);n.createAt=(new Date).toISOString(),t.consumptionList.push(n),Pt.commit("saveConsumption")},saveConsumption:function(t){window.localStorage.setItem("consumption",JSON.stringify(t.consumptionList))},fetchLabel:function(t){t.tagsList=JSON.parse(window.localStorage.getItem("label"))||At},addLabel:function(t,e){var n=ft(e);t.tagsList.push(n),Pt.commit("saveLabel")},updateLabel:function(t,e){var n=e.id,i=e.name,o=e.icon,a=t.tagsList.filter((function(t){return t.id===n}))[0];a.name=i,a.icon=o,Pt.commit("saveLabel")},removeLabel:function(t,e){if(t.tagsList.length>10){var n=t.consumptionList.filter((function(t){return t.selectedTagId===parseInt(e)}));n.length>0?window.alert("当前标签有消费记录，不能删除哦~"):(console.log("there"),console.log(e),t.tagsList=t.tagsList.filter((function(t){return t.id!==parseInt(e)})),Pt.commit("saveLabel"),console.log("成功"))}else window.alert("不要删好不啦，再删宝宝就小于10了呢")},saveLabel:function(t){window.localStorage.setItem("label",JSON.stringify(t.tagsList))},setCurrentTag:function(t,e){t.currentTag=t.tagsList.filter((function(t){return String(t.id)===e}))[0]}}}),Ft=Pt,Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-wrapper"},[n("div",{staticClass:"content"},[t._t("default")],2),n("Nav")],1)},Dt=[],Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("router-link",{staticClass:"item",attrs:{"active-class":"selected",to:"/labels"}},[n("Icon",{attrs:{name:"icon-labels"}}),t._v(" 标签 ")],1),n("router-link",{staticClass:"item",attrs:{"active-class":"selected",to:"/money"}},[n("Icon",{attrs:{name:"icon-money"}}),t._v(" 记账 ")],1),n("router-link",{staticClass:"item",attrs:{"active-class":"selected",to:"/statistics"}},[n("Icon",{attrs:{name:"icon-statistics"}}),t._v(" 统计 ")],1)],1)},Rt=[],Zt={name:"Nav"},qt=Zt,Ut=(n("6202"),Object(c["a"])(qt,Jt,Rt,!1,null,"70d4d0ba",null)),zt=Ut.exports,Bt={name:"Layout",components:{Nav:zt}},Ht=Bt,Wt=(n("d85a"),Object(c["a"])(Ht,Yt,Dt,!1,null,"6c834a32",null)),Gt=Wt.exports,Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"icon",on:{click:function(e){return t.$emit("click",e)}}},[n("use",{attrs:{"xlink:href":"#"+t.name}})])},Qt=[],Vt=(n("4160"),n("159b"),n("ddb0"),function(t){return t.keys().forEach(t)});try{Vt(!function(){var t=new Error("Cannot find module 'undefined'");throw t.code="MODULE_NOT_FOUND",t}())}catch(ie){console.log(ie)}var Xt={name:"Icon",props:["name"]},te=Xt,ee=(n("2a41"),Object(c["a"])(te,Kt,Qt,!1,null,"5af5eaa1",null)),ne=ee.exports;i["a"].config.productionTip=!1,i["a"].component("Layout",Gt),i["a"].component("Icon",ne),new i["a"]({router:Et,store:Ft,render:function(t){return t(u)}}).$mount("#app"),window.onload=function(){setTimeout((function(){window.scrollTo(0,1e5)}),0)}},d85a:function(t,e,n){"use strict";var i=n("6966"),o=n.n(i);o.a},ed5b:function(t,e,n){"use strict";var i=n("94b4"),o=n.n(i);o.a},ef88:function(t,e,n){}});
//# sourceMappingURL=app.f6aa7b57.js.map