(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-78c4e6e3"],{"897d":function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{},WEB_WORKER=(root.JS_MD5_NO_WINDOW&&(WINDOW=!1),!WINDOW&&"object"==typeof self),NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node,COMMON_JS=(NODE_JS?root=global:WEB_WORKER&&(root=self),!root.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports),AMD=__webpack_require__("f3fa"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8,buffer,buffer8,blocks,createOutputMethod=(ARRAY_BUFFER&&(buffer=new ArrayBuffer(68),buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)),!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer}),function(t){return function(e){return new Md5(!0).update(e)[t]()}}),createMethod=function(){var t=createOutputMethod("hex");(t=NODE_JS?nodeWrap(t):t).create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var s=OUTPUT_TYPES[e];t[s]=createOutputMethod(s)}return t},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"==typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null==t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){t?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8):ARRAY_BUFFER?(t=new ArrayBuffer(68),this.buffer8=new Uint8Array(t),this.blocks=new Uint32Array(t)):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,s=typeof t;if("string"!=s){if("object"!=s)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||ARRAY_BUFFER&&ArrayBuffer.isView(t)))throw ERROR;e=!0}for(var r,a,i=0,n=t.length,o=this.blocks,c=this.buffer8;i<n;){if(this.hashed&&(this.hashed=!1,o[0]=o[16],o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),e)if(ARRAY_BUFFER)for(a=this.start;i<n&&a<64;++i)c[a++]=t[i];else for(a=this.start;i<n&&a<64;++i)o[a>>2]|=t[i]<<SHIFT[3&a++];else if(ARRAY_BUFFER)for(a=this.start;i<n&&a<64;++i)(r=t.charCodeAt(i))<128?c[a++]=r:(r<2048?c[a++]=192|r>>6:(r<55296||57344<=r?c[a++]=224|r>>12:(r=65536+((1023&r)<<10|1023&t.charCodeAt(++i)),c[a++]=240|r>>18,c[a++]=128|r>>12&63),c[a++]=128|r>>6&63),c[a++]=128|63&r);else for(a=this.start;i<n&&a<64;++i)(r=t.charCodeAt(i))<128?o[a>>2]|=r<<SHIFT[3&a++]:(r<2048?o[a>>2]|=(192|r>>6)<<SHIFT[3&a++]:(r<55296||57344<=r?o[a>>2]|=(224|r>>12)<<SHIFT[3&a++]:(r=65536+((1023&r)<<10|1023&t.charCodeAt(++i)),o[a>>2]|=(240|r>>18)<<SHIFT[3&a++],o[a>>2]|=(128|r>>12&63)<<SHIFT[3&a++]),o[a>>2]|=(128|r>>6&63)<<SHIFT[3&a++]),o[a>>2]|=(128|63&r)<<SHIFT[3&a++]);this.lastByteIndex=a,this.bytes+=a-this.start,64<=a?(this.start=a-64,this.hash(),this.hashed=!0):this.start=a}return 4294967295<this.bytes&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){var t,e;this.finalized||(this.finalized=!0,(t=this.blocks)[(e=this.lastByteIndex)>>2]|=EXTRA[3&e],56<=e&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash())},Md5.prototype.hash=function(){var t,e,s,r,a,i=this.blocks,n=this.first?((n=((t=((t=i[0]-680876937)<<7|t>>>25)-271733879<<0)^(e=((e=(-271733879^(s=((s=(-1732584194^2004318071&t)+i[1]-117830708)<<12|s>>>20)+t<<0)&(-271733879^t))+i[2]-1126478375)<<17|e>>>15)+s<<0)&(s^t))+i[3]-1316259209)<<22|n>>>10)+e<<0:(t=this.h0,n=this.h1,e=this.h2,((n+=((t=((t+=((s=this.h3)^n&(e^s))+i[0]-680876936)<<7|t>>>25)+n<<0)^(e=((e+=(n^(s=((s+=(e^t&(n^e))+i[1]-389564586)<<12|s>>>20)+t<<0)&(t^n))+i[2]+606105819)<<17|e>>>15)+s<<0)&(s^t))+i[3]-1044525330)<<22|n>>>10)+e<<0);n=((n+=((t=((t+=(s^n&(e^s))+i[4]-176418897)<<7|t>>>25)+n<<0)^(e=((e+=(n^(s=((s+=(e^t&(n^e))+i[5]+1200080426)<<12|s>>>20)+t<<0)&(t^n))+i[6]-1473231341)<<17|e>>>15)+s<<0)&(s^t))+i[7]-45705983)<<22|n>>>10)+e<<0,n=((n+=((t=((t+=(s^n&(e^s))+i[8]+1770035416)<<7|t>>>25)+n<<0)^(e=((e+=(n^(s=((s+=(e^t&(n^e))+i[9]-1958414417)<<12|s>>>20)+t<<0)&(t^n))+i[10]-42063)<<17|e>>>15)+s<<0)&(s^t))+i[11]-1990404162)<<22|n>>>10)+e<<0,n=((n+=((t=((t+=(s^n&(e^s))+i[12]+1804603682)<<7|t>>>25)+n<<0)^(e=((e+=(n^(s=((s+=(e^t&(n^e))+i[13]-40341101)<<12|s>>>20)+t<<0)&(t^n))+i[14]-1502002290)<<17|e>>>15)+s<<0)&(s^t))+i[15]+1236535329)<<22|n>>>10)+e<<0,n=((n+=((s=((s+=(n^e&((t=((t+=(e^s&(n^e))+i[1]-165796510)<<5|t>>>27)+n<<0)^n))+i[6]-1069501632)<<9|s>>>23)+t<<0)^t&((e=((e+=(t^n&(s^t))+i[11]+643717713)<<14|e>>>18)+s<<0)^s))+i[0]-373897302)<<20|n>>>12)+e<<0,n=((n+=((s=((s+=(n^e&((t=((t+=(e^s&(n^e))+i[5]-701558691)<<5|t>>>27)+n<<0)^n))+i[10]+38016083)<<9|s>>>23)+t<<0)^t&((e=((e+=(t^n&(s^t))+i[15]-660478335)<<14|e>>>18)+s<<0)^s))+i[4]-405537848)<<20|n>>>12)+e<<0,n=((n+=((s=((s+=(n^e&((t=((t+=(e^s&(n^e))+i[9]+568446438)<<5|t>>>27)+n<<0)^n))+i[14]-1019803690)<<9|s>>>23)+t<<0)^t&((e=((e+=(t^n&(s^t))+i[3]-187363961)<<14|e>>>18)+s<<0)^s))+i[8]+1163531501)<<20|n>>>12)+e<<0,n=((n+=((s=((s+=(n^e&((t=((t+=(e^s&(n^e))+i[13]-1444681467)<<5|t>>>27)+n<<0)^n))+i[2]-51403784)<<9|s>>>23)+t<<0)^t&((e=((e+=(t^n&(s^t))+i[7]+1735328473)<<14|e>>>18)+s<<0)^s))+i[12]-1926607734)<<20|n>>>12)+e<<0,n=((n+=((a=(s=((s+=((r=n^e)^(t=((t+=(r^s)+i[5]-378558)<<4|t>>>28)+n<<0))+i[8]-2022574463)<<11|s>>>21)+t<<0)^t)^(e=((e+=(a^n)+i[11]+1839030562)<<16|e>>>16)+s<<0))+i[14]-35309556)<<23|n>>>9)+e<<0,n=((n+=((a=(s=((s+=((r=n^e)^(t=((t+=(r^s)+i[1]-1530992060)<<4|t>>>28)+n<<0))+i[4]+1272893353)<<11|s>>>21)+t<<0)^t)^(e=((e+=(a^n)+i[7]-155497632)<<16|e>>>16)+s<<0))+i[10]-1094730640)<<23|n>>>9)+e<<0,n=((n+=((a=(s=((s+=((r=n^e)^(t=((t+=(r^s)+i[13]+681279174)<<4|t>>>28)+n<<0))+i[0]-358537222)<<11|s>>>21)+t<<0)^t)^(e=((e+=(a^n)+i[3]-722521979)<<16|e>>>16)+s<<0))+i[6]+76029189)<<23|n>>>9)+e<<0,n=((n+=((a=(s=((s+=((r=n^e)^(t=((t+=(r^s)+i[9]-640364487)<<4|t>>>28)+n<<0))+i[12]-421815835)<<11|s>>>21)+t<<0)^t)^(e=((e+=(a^n)+i[15]+530742520)<<16|e>>>16)+s<<0))+i[2]-995338651)<<23|n>>>9)+e<<0,n=((n+=((s=((s+=(n^((t=((t+=(e^(n|~s))+i[0]-198630844)<<6|t>>>26)+n<<0)|~e))+i[7]+1126891415)<<10|s>>>22)+t<<0)^((e=((e+=(t^(s|~n))+i[14]-1416354905)<<15|e>>>17)+s<<0)|~t))+i[5]-57434055)<<21|n>>>11)+e<<0,n=((n+=((s=((s+=(n^((t=((t+=(e^(n|~s))+i[12]+1700485571)<<6|t>>>26)+n<<0)|~e))+i[3]-1894986606)<<10|s>>>22)+t<<0)^((e=((e+=(t^(s|~n))+i[10]-1051523)<<15|e>>>17)+s<<0)|~t))+i[1]-2054922799)<<21|n>>>11)+e<<0,n=((n+=((s=((s+=(n^((t=((t+=(e^(n|~s))+i[8]+1873313359)<<6|t>>>26)+n<<0)|~e))+i[15]-30611744)<<10|s>>>22)+t<<0)^((e=((e+=(t^(s|~n))+i[6]-1560198380)<<15|e>>>17)+s<<0)|~t))+i[13]+1309151649)<<21|n>>>11)+e<<0,n=((n+=((s=((s+=(n^((t=((t+=(e^(n|~s))+i[4]-145523070)<<6|t>>>26)+n<<0)|~e))+i[11]-1120210379)<<10|s>>>22)+t<<0)^((e=((e+=(t^(s|~n))+i[2]+718787259)<<15|e>>>17)+s<<0)|~t))+i[9]-343485551)<<21|n>>>11)+e<<0,this.first?(this.h0=t+1732584193<<0,this.h1=n-271733879<<0,this.h2=e-1732584194<<0,this.h3=s+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+n<<0,this.h2=this.h2+e<<0,this.h3=this.h3+s<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,s=this.h2,r=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,s=this.h2,r=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&s,s>>8&255,s>>16&255,s>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,s,r="",a=this.array(),i=0;i<15;)t=a[i++],e=a[i++],s=a[i++],r+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|s>>>6)]+BASE64_ENCODE_CHAR[63&s];return t=a[i],r+(BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"==")};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("eef6"),__webpack_require__("2409"))},bf32:function(t,e,s){"use strict";s("fb65")},df25:function(t,e,s){"use strict";var r={name:"ccMentionDeprecated"};s=s("cba8"),s=Object(s.a)(r,(function(){var t=this.$createElement;t=this._self._c||t;return t("div",{staticClass:"text-center"},[t("b-alert",{attrs:{show:"",variant:"warning"}},[this._v("该页面被标记为弃用，可能无法正常运作")])],1)}),[],!1,null,null,null);e.a=s.exports},f3fa:function(t,e){(function(e){t.exports=e}).call(this,{})},f491:function(t,e,s){"use strict";s.r(e),s("7241"),s("8300"),s("60fe"),s("2ce8"),s("42ca");var r=s("df25"),a=s("897d"),i=s.n(a),n=s("3f9d"),o=s("69a7"),c=s("44aa");a={data:function(){return{vt:{options:[1,2,3,4],options_int:[1e3,1500,2e3,2500,3e3,3500],maxoffset:1,forever:!0,int:2e3,url:"https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1",statusInfo:"当前不在任何房间中",serverUri:n.a+"/v1/vt/",isHost:!1,lobbyname:"",name:"",passwd:"",isIdle:!0,tmp:{pswd:"",lbname:""}},table:{perp:8,curp:1},player:{handle:""},ux:{userStatus:!1,mentionRefresh:!0,sync:!0},lobbies:[],viewers:[],vb:{tCount:0},timer:""}},computed:{rows:function(){return this.lobbies.length}},mounted:function(){this.player.handle=this.$refs.videoHandle,c.a.InitToast(this.$bvToast),this.vt.name=o.a.noncestr(!0,4,10),this.refreshLobby(),this.sync()},created:function(){this.timer=setInterval(this.sync,this.vt.int)},destroyed:function(){clearInterval(this.timer)},methods:{changeSrc:function(){this.syncVideoStatus()},sync:function(){this.vt.isIdle||this.sync&&(this.refreshLobbyUsersStatus(),this.vt.isHost?this.syncHost():this.syncGuest())},getPlayerHandle:function(){},testServer:function(){this.axios.get(this.vt.serverUri+"ping").then((function(t){c.a.Msg("测试成功","服务器可用！","success")})).catch((function(t){c.a.Msg("测试错误","服务器不可用，详情请查看控制台","danger")}))},myRowClickHandler:function(t,e){this.vt.tmp.lbname=this.lobbies[(this.table.curp-1)*this.table.perp+e].lobbyName,this.$refs.modalPasswd.show()},createLobby:function(){this.vt.lobbyname=this.vt.name+"'s lobby",this.vt.passwd=o.a.noncestr(!0,4,6),this.axios.get(this.vt.serverUri+"lobby/create",{params:{hostname:this.vt.name,lobbyname:this.vt.lobbyname,passwd:this.vt.passwd}}).then((function(t){"LOBBY_EXISTED"==t.data?c.a.Msg("错误","房间已存在","danger"):c.a.Msg("成功","创建房间成功！","success")})).catch((function(t){c.a.Msg("错误","创建房间错误","danger")})),this.changeSrc(),this.refreshLobby()},exitLobby:function(){this.axios.get(this.vt.serverUri+"lobby/exit",{params:{username:this.vt.name}}).then((function(t){switch(t.data){case"LOBBY_DELETED":c.a.Msg("成功","你是房主，房间已删除！","success");break;case"LOBBY_EXIT":c.a.Msg("成功","已退出房间！","success");break;case"NO_SUCH_LOBBY":c.a.Msg("警告","你所在的房间不存在","warning")}})).catch((function(t){c.a.Msg("错误","退出房间请求错误","danger")})),this.refreshLobby()},refreshLobby:function(){var t=this;this.axios.get(this.vt.serverUri+"lobbies").then((function(e){t.lobbies=[],e.data.split(",").forEach((function(e){t.lobbies.push({lobbyName:e})}))})).catch((function(t){c.a.Msg("错误","刷新房间错误，请检查服务器通信是否正常","danger")})),this.whereIAm(),this.ux.mentionRefresh&&c.a.Msg("提示","信息已刷新")},syncVideoStatus:function(){this.axios.post(this.vt.serverUri+"lobby/update/videodesc",{Ls:this.vt.url,Index:0,Md5:i()(this.vt.url)},{params:{hostname:this.vt.name}}).then((function(t){})).catch((function(t){}))},syncHost:function(){var t=this.player.handle.paused?"p":"s";this.axios.get(this.vt.serverUri+"sync/host",{params:{name:this.vt.name,location:this.player.handle.currentTime,ispause:t,p:0}}).then((function(t){})).catch((function(t){}))},getCurVideoSrc:function(){var t=this;this.axios.get(this.vt.serverUri+"lobby/videodesc",{params:{name:this.vt.name,t:"web"}}).then((function(e){t.vt.url=e.data})).catch((function(t){}))},syncGuest:function(){var t=this;this.axios.get(this.vt.serverUri+"sync/guest",{params:{name:this.vt.name}}).then((function(e){e=e.data.split(","),e[0]!=i()(t.vt.url)&&t.getCurVideoSrc(),""!=e[2]&&Math.abs(t.player.handle.currentTime-e[2])>t.vt.maxoffset&&(t.player.handle.currentTime=e[2]),"p"==e[1]?t.player.handle.pause():t.player.handle.play()})).catch((function(t){}))},refreshLobbyUsersStatus:function(){var t=this;this.ux.userStatus&&(""==this.vt.lobbyname?this.viewers=[]:this.axios.get(this.vt.serverUri+"lobby/users/status",{params:{lobbyname:this.vt.lobbyname}}).then((function(e){"NO_SUCH_LOBBY"==e.data?t.viewers=[]:t.viewers=e.data})).catch((function(t){})))},enterLobby:function(){var t=this;this.axios.get(this.vt.serverUri+"lobby/enter",{params:{username:this.vt.name,lobbyname:this.vt.tmp.lbname,passwd:this.vt.tmp.pswd}}).then((function(e){switch(e.data){case"PASSWORD_INCORRECT":c.a.Msg("错误","密码不正确","danger");break;case"NO_SUCH_LOBBY":c.a.Msg("错误","当前房间不存在，请刷新","danger");break;case"OK":c.a.Msg("成功","成功进入房间！","success"),t.vt.passwd=t.vt.tmp.pswd,t.vt.lobbyname=t.vt.tmp.lbname}})).catch((function(t){c.a.Msg("错误","进入房间错误","danger")})),this.refreshLobby()},whereIAm:function(){var t=this;this.axios.get(this.vt.serverUri+"user/where",{params:{username:this.vt.name}}).then((function(e){if("IDLE"==e.data)return t.vt.isHost=!1,t.vt.lobbyname="",t.vt.passwd="",void(t.vt.isIdle=!0);t.vt.isIdle=!1,e=e.data.split(","),t.vt.lobbyname=e[0],t.vt.isHost="HOST"==e[1],t.vt.passwd=e[2]})).catch((function(t){c.a.Msg("错误","获取用户状态错误","danger")})),this.vt.isIdle=""==this.vt.lobbyName}},components:{ccMentionDeprecated:r.a}},s("bf32"),r=s("cba8"),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",[e("ccMentionDeprecated"),e("b-alert",{attrs:{show:"",variant:"warning"}},[t._v("这是一个测试版本，功能完善程度可能较低，bug较多。")]),e("b-modal",{ref:"modalPasswd",attrs:{id:"modal-1",title:"输入房间密码"},on:{ok:t.enterLobby}},[e("b-form-input",{attrs:{id:"input-passwd",required:"",placeholder:"密码","invalid-feedback":"Name is required"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterLobby.apply(null,arguments)}},model:{value:t.vt.tmp.pswd,callback:function(e){t.$set(t.vt.tmp,"pswd",e)},expression:"vt.tmp.pswd"}})],1),e("div",{attrs:{id:"sidebar"}},[e("b-sidebar",{attrs:{id:"sidebar-1",title:"设置列表",shadow:""}},[e("div",{staticClass:"container",attrs:{id:"common-settings"}},[e("div",[t.vt.isHost?e("b-badge",{attrs:{pill:"",variant:"dark"}},[t._v("你是房主")]):e("b-badge",{attrs:{pill:"",variant:"light"}},[t._v("你是观众")]),1==t.vt.isIdle?e("b-badge",{attrs:{pill:"",variant:"warning"}},[t._v("未在房间中")]):e("b-badge",{attrs:{pill:"",variant:"success"}},[t._v("在房间中")]),e("br"),e("b-container",[e("small",[t._v("用户名："+t._s(t.vt.name))]),e("br"),e("small",[t._v("房间："+t._s(t.vt.lobbyname))]),e("br"),e("small",[t._v("密码："+t._s(t.vt.passwd))])]),e("br"),e("b-container",[e("b-table",{attrs:{id:"lobby-table",hover:"",items:t.lobbies,"current-page":t.table.curp,"per-page":t.table.perp,small:""},on:{click:t.myRowClickHandler}})],1),e("b-pagination",{attrs:{"per-page":t.table.perp,"total-rows":t.rows,"aria-controls":"lobby-table"},model:{value:t.table.curp,callback:function(e){t.$set(t.table,"curp",e)},expression:"table.curp"}}),e("br"),e("b-button-group",[e("b-button",{attrs:{variant:"info",disabled:""!=t.vt.lobbyname},on:{click:t.createLobby}},[t._v("创建房间")]),e("b-button",{attrs:{disabled:""==t.vt.lobbyname},on:{click:t.exitLobby}},[t._v("退出当前房间")]),e("b-button",{on:{click:t.refreshLobby}},[t._v("刷新")])],1),e("br"),e("br")],1),e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.advanc-collapse",modifiers:{"advanc-collapse":!0}}],attrs:{variant:"outline-primary"}},[t._v("高级设置")]),e("b-collapse",{staticClass:"container",attrs:{id:"advanc-collapse"}},[e("br"),e("b-form-checkbox",{attrs:{disabled:""},model:{value:t.ux.userStatus,callback:function(e){t.$set(t.ux,"userStatus",e)},expression:"ux.userStatus"}},[t._v("显示房间状态")]),e("b-form-checkbox",{model:{value:t.ux.mentionRefresh,callback:function(e){t.$set(t.ux,"mentionRefresh",e)},expression:"ux.mentionRefresh"}},[t._v("刷新提示")]),e("hr"),e("b-form-checkbox",{model:{value:t.ux.sync,callback:function(e){t.$set(t.ux,"sync",e)},expression:"ux.sync"}},[t._v("同步")]),e("small",{staticClass:"d-block mb-3 text-muted"},[t._v("关闭则不会有任何视频同步效果")]),e("small",[t._v("最大偏移值（秒）")]),e("b-form-select",{attrs:{options:t.vt.options},model:{value:t.vt.maxoffset,callback:function(e){t.$set(t.vt,"maxoffset",e)},expression:"vt.maxoffset"}}),e("small",{staticClass:"d-block mb-3 text-muted"},[t._v("如果观众与房主的视频位置相减大于这个值，将会同步（仅观众）")]),e("small",[t._v("同步间隔（毫秒）")]),e("b-form-select",{attrs:{options:t.vt.options_int},model:{value:t.vt.int,callback:function(e){t.$set(t.vt,"int",e)},expression:"vt.int"}}),e("small",{staticClass:"d-block mb-3 text-muted"},[t._v("每次同步请求的间隔（房主观众均有效）")]),e("hr"),e("small",[t._v("服务器 URI")]),e("b-form-input",{attrs:{id:"input-server-uri",required:"",placeholder:"Url"},model:{value:t.vt.serverUri,callback:function(e){t.$set(t.vt,"serverUri",e)},expression:"vt.serverUri"}}),e("small",{staticClass:"d-block mb-3 text-muted"},[t._v("官方服务器地址："),e("br"),t._v("https://se.cyf-cloud.cn:2344/v1/vt/")]),e("b-badge",{attrs:{pill:"",variant:"info",href:"#"},on:{mousedown:t.testServer}},[t._v("点击测试")]),e("br"),e("hr")],1),e("br")],1)])],1),e("b-card",{attrs:{id:"main-control-panel"}},[e("b-card-group",{attrs:{deck:""}},[t.ux.userStatus?e("b-card",[e("div",{staticClass:"container"},[e("h3",[t._v("房间状况")]),e("br"),e("b-table",{attrs:{items:t.viewers}}),e("br")],1)]):t._e(),e("b-card",[e("video",{ref:"videoHandle",attrs:{preload:"auto",src:t.vt.url,controls:"",width:"100%"}}),e("div",{attrs:{id:"video-controls"}},[e("b-row",[e("b-col",[e("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"视频Url"},on:{input:t.changeSrc},model:{value:t.vt.url,callback:function(e){t.$set(t.vt,"url",e)},expression:"vt.url"}})],1),e("b-col",[e("b-container",[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}]},[t._v("设置")])],1)],1)],1)],1)])],1)],1)],1)}),[],!1,null,"792284a2",null);e.default=s.exports},fb65:function(t,e,s){}}]);