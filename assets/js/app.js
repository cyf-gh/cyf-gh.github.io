(function(t){function e(e){for(var a,c,i=e[0],l=e[1],o=e[2],f=0,m=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&m.push(s[c][0]),s[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,o||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(a=!1)}a&&(n.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},s={app:0},n=[];function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var o=0;o<i.length;o++)e(i[o]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),s=r.n(a);s.a},"1ffb":function(t,e,r){"use strict";var a=r("48c3"),s=r.n(a);s.a},"48c3":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=r("6483"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("cc-navbar"),r("router-view"),r("cc-footer")],1)},c=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{type:"dark",variant:"dark"}},[r("b-navbar-nav",[r("b-navbar-brand",{attrs:{href:"/"}},[r("img",{attrs:{src:"https://gitee.com/cyf-my/imgs/raw/master/assets/icon.png",alt:"Kitten",height:"30",width:"30"}})]),r("b-nav-item",{attrs:{href:"/"}},[t._v("主页")]),r("b-nav-item",{attrs:{href:"/mc"}},[t._v("Minecraft")]),r("b-nav-item",{attrs:{href:"/music"}},[t._v("音乐")]),r("b-nav-item-dropdown",{attrs:{text:"个人",right:""}},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("博客")]),r("b-dropdown-item",{attrs:{href:"https://space.bilibili.com/3087782"}},[t._v("哔哩哔哩")]),r("b-dropdown-divider"),r("b-dropdown-item",{attrs:{href:"/donate"}},[t._v("捐赠")])],1)],1)],1)],1)},l=[],o={name:"ccNavbar"},u=o,f=r("2877"),m=Object(f["a"])(u,i,l,!1,null,null,null),d=m.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:" navbar-fixed-bottom container py-5"},[r("div",{staticClass:"row"},[t._m(0),t._m(1),r("div",{staticClass:"col-12 col-md"},[r("svg",{staticClass:"d-block mb-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",role:"img",viewBox:"0 0 24 24",focusable:"false"}},[r("title",[t._v("Product")]),r("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),r("path",{attrs:{d:"M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"}})]),r("small",{staticClass:"d-block mb-3 text-muted"},[t._v("cyf 2020")])])])])},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-6 col-md"},[r("h5",[t._v("联系方式")]),r("ul",{staticClass:"list-unstyled text-small"},[r("li",[r("a",{staticClass:"text-muted"},[t._v("QQ：1026279833")])]),r("li",[r("a",{staticClass:"text-muted"},[t._v("微信：cyf_tx")])]),r("li",[r("a",{staticClass:"text-muted"},[t._v("邮箱：cyf-ms@hotmail.com")])]),r("li",[r("a",{staticClass:"text-muted",attrs:{href:"github.com/cyf-gh"}},[t._v("Github")])]),r("li",[r("a",{staticClass:"text-muted",attrs:{href:"https://space.bilibili.com/3087782"}},[t._v("哔哩哔哩")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-6 col-md"},[r("h5",[t._v("捐赠")]),r("ul",{staticClass:"list-unstyled text-small"},[r("li"),r("li",[r("a",{staticClass:"text-muted",attrs:{href:"/donate"}},[t._v("前往捐赠")])])])])}],h={name:"Footer"},p=h,_=Object(f["a"])(p,v,b,!1,null,null,null),g=_.exports,y={name:"App",components:{ccNavbar:d,ccFooter:g}},w=y,x=(r("034f"),Object(f["a"])(w,n,c,!1,null,null,null)),C=x.exports,j=(r("df63"),r("f46b"),r("4af9")),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("br"),r("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:6e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[r("b-carousel-slide",{attrs:{"img-src":"https://gitee.com/cyf-my/imgs/raw/master/assets/haruhi.jpg"}},[r("h1",[t._v("cyf-cloud")]),r("h5",[t._v("cyf提供的各式网络服务导航站点")])]),r("b-carousel-slide",{attrs:{"img-src":"https://gitee.com/cyf-my/imgs/raw/master/assets/mc1.png"}},[r("h1",[t._v("Minecraft")]),r("h5",[t._v("在服务器和其他小伙伴们一起游玩史上以来最棒的沙河游戏")]),r("h6",[t._v("图自1.14纯净生存服")])]),r("b-carousel-slide",{attrs:{"img-src":"https://gitee.com/cyf-my/imgs/raw/master/assets/c-karajan.jpg"}},[r("h1",[t._v("音乐")]),r("h5",[t._v("通过流式服务聆听人类最伟大的艺术之一")])]),r("b-carousel-slide",{attrs:{"img-src":"https://gitee.com/cyf-my/imgs/raw/master/assets/c-cyf.png"}},[r("h1",[t._v("探索")]),r("h5",[t._v("了解和获取更多cyf的信息与提供的服务")])])],1)],1)},M=[],S={name:"ccHome",data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},E=S,O=Object(f["a"])(E,k,M,!1,null,"654f93aa",null),$=O.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"text-center my-3"},[r("b-button-group",[r("b-button",{on:{click:function(e){t.mapSrc="http://se.cyf-cloud.cn:8124"}}},[t._v("1.14 纯净服")]),r("b-button",{on:{click:function(e){t.mapSrc="http://se.cyf-cloud.cn:8123"}}},[t._v("1.12 Mod服")]),r("b-button",[t._v("1.16 纯净服")])],1)],1),r("div",{staticClass:"text-center my-3"},[r("iframe",{staticClass:"cc-iframe",attrs:{src:t.mapSrc}})])])},P=[],T={name:"ccMcWebmap",data:function(){return{mapSrc:"http://se.cyf-cloud.cn:8124"}}},F=T,Q=(r("1ffb"),Object(f["a"])(F,q,P,!1,null,"1b79dc7a",null)),H=Q.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"tab-pane",attrs:{id:"minecraft",role:"tabpanel","aria-labelledby":"minecraft-tab"}},[r("div",{staticClass:"text-center"},[r("br"),t._m(0),r("b-button",{attrs:{href:"/mc/map",pill:"",variant:"outline-secondary"}},[t._v("查看卫星地图")]),r("hr",{staticStyle:{width:"10rem"}}),t._m(1),r("h5",[t._v("适合喜欢原版Minecraft的玩家、生电玩家、建筑玩家。")]),t._m(2),r("hr",{staticStyle:{width:"10rem"}}),t._m(3),r("h5",[t._v("适合喜欢Mod的玩家。")]),t._m(4),r("br"),r("h4",{staticClass:"text-left",staticStyle:{"margin-left":"40%"}},[t._v("Mod列表")]),t._m(5),r("hr",{staticStyle:{width:"10rem"}}),t._m(6),r("h5",[t._v("积聚硬核生电与建筑大佬，需要审核才能进入。")]),t._m(7),r("br")],1)])])},I=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",[r("strong",[t._v("直接窥视Minecraft世界的现状")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",[r("strong",[t._v("Minecraft 1.14.4 纯净生存服")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"inline"},[r("a",{staticClass:"badge badge-primary",attrs:{href:"https://jq.qq.com/?_wv=1027&k=6JyKdbXR"}},[t._v("加入QQ群：897754430")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",[r("strong",[t._v("Minecraft 1.12.2 MOD服")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"inline"},[r("a",{staticClass:"badge badge-primary",attrs:{href:"https://jq.qq.com/?_wv=1027&k=5PyzwjSn"}},[t._v("加入QQ群：221480578")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h6",{staticClass:"text-left",staticStyle:{"margin-left":"35%"}},[t._v(" [更多实用设备2]extrautils2 "),r("br"),t._v("[工业时代2]industrialcraft "),r("br"),t._v("[工业先锋附属]IntegrationForegoing "),r("br"),t._v("[建筑]buildcraft-all-7.99.24.3 "),r("br"),t._v("[匠魂补充]TinkersComplement "),r("br"),t._v("[匠魂基础]TConstruct "),r("br"),t._v("[匠魂拓展]plustic "),r("br"),t._v("[热动力学]ThermalDynamics "),r("br"),t._v("[热力基本]ThermalFoundation "),r("br"),t._v("[热力膨胀]ThermalExpansion "),r("br"),t._v("[通用机械]Mekanism "),r("br"),t._v("[通用机械发电机]MekanismGenerators "),r("br"),t._v("[通用机械矿物]mekores "),r("br"),t._v("[烹饪]CookingForBlockheads "),r("br"),t._v("[林业]forestry "),r("br"),t._v("[种地]Pam's+HarvestCraft "),r("br"),t._v("[暮色森林]twilightforest "),r("br"),t._v("[龙之进化]Draconic-Evolution "),r("br"),t._v("[冰与火之歌]iceandfire ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",[r("strong",[t._v("Minecraft 1.16 纯净生存服")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"inline"},[r("a",{staticClass:"badge badge-warning",attrs:{href:"https://jq.qq.com/?_wv=1027&k=9InTnRhL"}},[t._v("加入审核群：1107836876")])])}],J={name:"McHome"},L=J,z=Object(f["a"])(L,D,I,!1,null,null,null),B=z.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("br"),r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{"img-src":"https://gitee.com/cyf-my/imgs/raw/master/assets/zfb.jpg","img-alt":"Card image","img-top":""}},[r("b-card-text",[t._v("支付宝")])],1),r("b-card",{attrs:{"img-src":"https://gitee.com/cyf-my/imgs/raw/master/assets/wx.jpg","img-alt":"Card image","img-bottom":""}},[r("b-card-text",[t._v("微信")])],1)],1)],1)},K=[],N={},R=N,A=Object(f["a"])(R,G,K,!1,null,null,null),U=A.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("b-alert",{attrs:{show:"",variant:"warning"}},[t._v("由于浏览器跨域访问的限制，本页面只提供歌曲预览而无法播放。"),r("br"),t._v("如需要完整的服务请点击"),r("a",{staticClass:"alert-link",attrs:{href:"http://se.cyf-cloud.cn:5555"}},[t._v("这里")])]),r("iframe",{staticClass:"cc-iframe",attrs:{src:"http://se.cyf-cloud.cn:5555"}}),r("b-badge",{attrs:{pill:"",variant:"info",href:"http://www.subsonic.org/"}},[t._v("Powered by Subsonic©")]),r("b-badge",{attrs:{pill:"",variant:"primary",href:"/music/upload"}},[t._v("上传歌曲")])],1)},X=[],V={name:"ccMusicServe"},Y=V,Z=(r("d98b"),Object(f["a"])(Y,W,X,!1,null,"21bf8dc7",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("b-alert",{attrs:{show:""}},[t._v("为防止滥传占用带宽，我们进行了群内分享上传账户的机制。"),r("br"),t._v("如果需要请"),r("a",{staticClass:"alert-link",attrs:{href:"https://jq.qq.com/?_wv=1027&k=isIw44iL"}},[t._v("加入群")]),t._v("。")]),r("iframe",{staticClass:"cc-iframe",attrs:{src:"http://se.cyf-cloud.cn:5225"}}),r("b-badge",{attrs:{pill:"",variant:"info",href:"https://www.rejetto.com/hfs/"}},[t._v("Powered by HFS")])],1)},rt=[],at={name:"ccMusicUpload"},st=at,nt=(r("b675"),Object(f["a"])(st,et,rt,!1,null,"0d0ffbea",null)),ct=nt.exports,it=[{path:"*",redirect:"/home"},{path:"/",redirect:"/home"},{path:"/home",component:$},{path:"/mc",component:B},{path:"/mc/map",component:H},{path:"/music",component:tt},{path:"/music/upload",component:ct},{path:"/donate",component:U}],lt=new j["a"]({mode:"history",routes:it});a["default"].use(j["a"]);var ot=lt;a["default"].use(s["a"]),a["default"].config.productionTip=!1,new a["default"]({el:"#app",router:ot,render:function(t){return t(C)}})},"85ec":function(t,e,r){},b675:function(t,e,r){"use strict";var a=r("ccf4"),s=r.n(a);s.a},c2c8:function(t,e,r){},ccf4:function(t,e,r){},d98b:function(t,e,r){"use strict";var a=r("c2c8"),s=r.n(a);s.a}});