(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-313cf00a"],{1276:function(t,e,s){"use strict";var a=s("d784"),i=s("44e7"),n=s("825a"),r=s("1d80"),c=s("4840"),o=s("8aa5"),d=s("50c4"),l=s("14c3"),u=s("9263"),f=s("d039"),p=[].push,h=Math.min,v=4294967295,g=!f((function(){return!RegExp(v,"y")}));a("split",2,(function(t,e,s){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var a=String(r(this)),n=void 0===s?v:s>>>0;if(0===n)return[];if(void 0===t)return[a];if(!i(t))return e.call(a,t,n);var c,o,d,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,f+"g");while(c=u.call(g,a)){if(o=g.lastIndex,o>h&&(l.push(a.slice(h,c.index)),c.length>1&&c.index<a.length&&p.apply(l,c.slice(1)),d=c[0].length,h=o,l.length>=n))break;g.lastIndex===c.index&&g.lastIndex++}return h===a.length?!d&&g.test("")||l.push(""):l.push(a.slice(h)),l.length>n?l.slice(0,n):l}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:e.call(this,t,s)}:e,[function(e,s){var i=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,i,s):a.call(String(i),e,s)},function(t,i){var r=s(a,t,this,i,a!==e);if(r.done)return r.value;var u=n(t),f=String(this),p=c(u,RegExp),b=u.unicode,m=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),x=new p(g?u:"^(?:"+u.source+")",m),C=void 0===i?v:i>>>0;if(0===C)return[];if(0===f.length)return null===l(x,f)?[f]:[];var y=0,A=0,k=[];while(A<f.length){x.lastIndex=g?A:0;var _,w=l(x,g?f:f.slice(A));if(null===w||(_=h(d(x.lastIndex+(g?0:A)),f.length))===y)A=o(f,A,b);else{if(k.push(f.slice(y,A)),k.length===C)return k;for(var S=1;S<=w.length-1;S++)if(k.push(w[S]),k.length===C)return k;A=y=_}}return k.push(f.slice(y)),k}]}),!g)},"2f14":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));s("99af"),s("fb6a");var a=s("d4ec"),i=s("bee2"),n=function(){function t(){Object(a["a"])(this,t)}return Object(i["a"])(t,[{key:"queryString",value:function(t){var e="";for(var s in t)e+="".concat(s,"=").concat(t[s],"&");return e.slice(0,-1)}}]),t}(),r=new n},"76a1":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pay"},[s("van-nav-bar",{attrs:{title:"提交订单","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),s("div",{staticClass:"address-box"},[s("div",{staticClass:"address"},[s("div",{staticClass:"clearfix",on:{click:t.openAddressBox}},[s("div",{staticClass:"fl address-title"},[t._v("选择收货地址")]),s("div",{staticClass:"fl arrow-box"},[s("van-icon",{staticClass:"arrow-icon",attrs:{name:"arrow"}})],1)]),s("div",{staticClass:"address-content"},[s("div",{staticClass:"clearfix"},[s("div",{staticClass:"fl name"},[t._v(t._s(t.currentAddress.name))]),s("div",{staticClass:"fl phone"},[t._v(t._s(t.currentAddress.tel))])]),s("div",{staticClass:"address-info"},[t._v(t._s(t.currentAddress.address))])])])]),s("div",{staticClass:"order-info"},[s("div",{staticClass:"order-box"},[s("div",{staticClass:"order-title"},[t._v("订单信息")]),s("div",t._l(t.shopbagData,(function(e,a){return s("div",{key:a,staticClass:"clearfix cell-box"},[s("div",{staticClass:"fl pro-img"},[s("img",{staticClass:"auto-img",attrs:{src:e.small_img,alt:""}})]),s("div",{staticClass:"fl pro-info"},[s("div",{staticClass:"text-box"},[s("div",{staticClass:"clearfix"},[s("div",{staticClass:"fl text-name"},[t._v(t._s(e.name))]),s("div",{staticClass:"fl text-rule"},[t._v(t._s(e.rule))])]),s("div",{staticClass:"text-enname"},[t._v(t._s(e.enname))])]),s("div",{staticClass:"price-box"},[s("div",{staticClass:"fl price"},[t._v("￥"+t._s(e.price))]),s("div",{staticClass:"fr count"},[t._v("x"+t._s(e.count))])])])])})),0),s("div",{staticClass:"pro-box"},[s("div",{staticClass:"clearfix pro-boxing"},[s("div",{staticClass:"fl pro-count"},[t._v("共计 "+t._s(t.product.count)+" 件商品")]),s("div",{staticClass:"fr pro-total"},[t._v("合计 ￥"+t._s(t.product.total))])]),s("div",{staticClass:"left-box left"}),s("div",{staticClass:"left-box right"})])])]),s("div",{staticClass:"pay-btn"},[s("van-button",{attrs:{round:"",block:"",color:"#0C34BA"},on:{click:t.pay}},[t._v("立即结算")])],1),s("van-popup",{attrs:{position:"bottom",closeable:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[s("div",{staticClass:"address-title-box"},[t._v("选择收货地址")]),s("van-address-list",{attrs:{list:t.list,"default-tag-text":"默认"},on:{select:t.selectAddress,add:t.newAddress},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)],1)},i=[],n=(s("d81d"),s("b0c0"),s("ac1f"),s("1276"),s("e2ba"),s("2f14")),r={data:function(){return{isOpen:!1,chosenAddressId:"1",list:[],currentAddress:{name:"",tel:"",address:""},shopbagData:[],product:{count:0,total:0},sids:[]}},created:function(){this.sids=this.$route.query.sids.split("-"),this.getReceiveAddress(),this.getShopbagDataBySids()},methods:{back:function(){this.$router.go(-1)},openAddressBox:function(){this.isOpen=!0},selectAddress:function(t,e){for(var s in this.isOpen=!1,this.currentAddress)this.currentAddress[s]=t[s]},newAddress:function(){this.$router.push({name:"NewAddress"})},getReceiveAddress:function(){var t=this,e=localStorage.getItem("CSTK");e&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/findAddress",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),2e4==e.data.code&&e.data.result.map((function(e){var s=e.province+e.city+e.county+e.addressDetail;t.list.push({id:e.aid,name:e.name,tel:e.tel,address:s,isDefault:Boolean(e.isDefault)}),Boolean(e.isDefault)&&(t.chosenAddressId=e.aid,t.currentAddress.name=e.name,t.currentAddress.tel=e.tel,t.currentAddress.address=s)}))})).catch((function(e){t.$toast.clear()})))},getShopbagDataBySids:function(){var t=this,e=localStorage.getItem("CSTK");e&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/commitShopcart",params:{appkey:this.appkey,tokenString:e,sids:JSON.stringify(this.sids)}}).then((function(e){if(t.$toast.clear(),5e4==e.data.code){if(0===e.data.result.length)return t.$router.push({name:"Menu"});e.data.result.map((function(e){t.product.count+=e.count,t.product.total+=e.count*e.price})),t.shopbagData=e.data.result}})).catch((function(e){t.$toast.clear()})))},pay:function(){var t=this;if(""!=this.chosenAddressId){var e=localStorage.getItem("CSTK");if(e){var s=n["a"].queryString({appkey:this.appkey,tokenString:e,sids:JSON.stringify(this.sids),phone:this.currentAddress.tel,address:this.currentAddress.address,receiver:this.currentAddress.name});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:"/pay",data:s}).then((function(e){t.$toast.clear(),t.$toast(e.data.msg),6e4==e.data.code&&t.$router.push({name:"Order"})})).catch((function(e){t.$toast.clear()}))}}else this.$toast("请选择收货地址")}}},c=r,o=s("2877"),d=Object(o["a"])(c,a,i,!1,null,"c44686e6",null);e["default"]=d.exports},"99af":function(t,e,s){"use strict";var a=s("23e7"),i=s("d039"),n=s("e8b5"),r=s("861d"),c=s("7b0b"),o=s("50c4"),d=s("8418"),l=s("65f0"),u=s("1dde"),f=s("b622"),p=s("2d00"),h=f("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",b=p>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=u("concat"),x=function(t){if(!r(t))return!1;var e=t[h];return void 0!==e?!!e:n(t)},C=!b||!m;a({target:"Array",proto:!0,forced:C},{concat:function(t){var e,s,a,i,n,r=c(this),u=l(r,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(n=-1===e?r:arguments[e],x(n)){if(i=o(n.length),f+i>v)throw TypeError(g);for(s=0;s<i;s++,f++)s in n&&d(u,f,n[s])}else{if(f>=v)throw TypeError(g);d(u,f++,n)}return u.length=f,u}})},b0c0:function(t,e,s){var a=s("83ab"),i=s("9bf2").f,n=Function.prototype,r=n.toString,c=/^\s*function ([^ (]*)/,o="name";a&&!(o in n)&&i(n,o,{configurable:!0,get:function(){try{return r.call(this).match(c)[1]}catch(t){return""}}})},bee2:function(t,e,s){"use strict";function a(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(t,e,s){return e&&a(t.prototype,e),s&&a(t,s),t}s.d(e,"a",(function(){return i}))},d4ec:function(t,e,s){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}s.d(e,"a",(function(){return a}))},d81d:function(t,e,s){"use strict";var a=s("23e7"),i=s("b727").map,n=s("1dde"),r=s("ae40"),c=n("map"),o=r("map");a({target:"Array",proto:!0,forced:!c||!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e2ba:function(t,e,s){}}]);
//# sourceMappingURL=chunk-313cf00a.d85dc648.js.map