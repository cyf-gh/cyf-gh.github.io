(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1e138026"],{"33a6":function(t,e,a){},7910:function(t,e,a){"use strict";a("33a6")},bca7:function(t,e,a){"use strict";a.r(e),a("7241"),a("8300"),a("eba8");var s=a("de89"),i=a("3f9d"),o=a("aea1"),r=(a("7141"),a("3bb0")),n="cc_post_draft?",l={SaveDraft:function(t){localStorage.setItem(n+t.Title,JSON.stringify(t))},GetAllDrafts:function(){for(var t=window.localStorage,e=[],a=0,s=t.length;a<s;a++){var i=t.key(a),o=t.getItem(i);r.a.ValidateStr("cc_post_draft\\?*",i)&&e.push(JSON.parse(o))}return e},GetDraftByTitle:function(t){return JSON.parse(localStorage.getItem(n+t))},DeleteDraftByTitle:function(t){localStorage.removeItem(n+t)}},c={mounted:function(){this.ds=l.GetAllDrafts()},data:function(){return{ds:[]}},methods:{modify:function(t){confirm("确认编辑？\n当前未保存的文字会全部消失")&&(this.$router.push({path:"/post/editor?mode=draft&dtitle="+t.Title}),location.reload())},deleteD:function(t){confirm("确认删除？")&&l.DeleteDraftByTitle(t.Title),this.refresh()},refresh:function(){this.ds=l.GetAllDrafts()}}},d=a("cba8"),u=(c=Object(d.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",{staticClass:"mt-2"},[t._v("草稿箱")]),a("b-row",[a("b-col",[a("p",{staticClass:"my-auto"},[t._v("有 "+t._s(t.ds.length)+" 篇草稿")])]),a("b-col",[a("b-button",{attrs:{block:"",variant:"light"},on:{click:t.refresh}},[t._v("刷新")])],1)],1),a("hr"),t._l(t.ds,(function(e){return a("div",[a("b-row",[a("b-col",{staticClass:"my-auto"},[t._v(t._s(e.Title))]),a("b-col",[a("b-button",{attrs:{variant:"light",size:"sm"},on:{click:function(a){return t.modify(e)}}},[t._v("修改")]),a("b-button",{attrs:{variant:"light",size:"sm"},on:{click:function(a){return t.deleteD(e)}}},[t._v("删除")])],1)],1),a("hr")],1)}))],2)}),[],!1,null,null,null).exports,a("c7ec"));c={metaInfo:function(){return{title:this.status,titleTemplate:"【%s】- Markdown编辑器 - cyf-cloud",htmlAttrs:{lang:"zh-cn",amp:!0}}},components:{ccDfBox:c},data:function(){return{isDuo:!0,divId:"cc-editor-preview",post:null,isModifiy:!1,postId:-1,canNotModify:!1,isPrivate:!1,status:"status"}},mounted:function(){var t=this;window.onbeforeunload=function(e){if("inspect"==t.$route.name)return(e=e||window.event)&&(e.returnValue="关闭提示"),"关闭提示";window.onbeforeunload=null}},methods:{insertInputTxt:function(t,e){t=document.getElementById(t);var a,s=t.selectionStart,i=t.selectionEnd;void 0!==s&&void 0!==i&&(a=(a=t.value).substring(0,s)+e+a.substring(i),t.value=a,t.focus(),t.selectionStart=s+e.length,t.selectionEnd=s+e.length)},tabFunc:function(){this.insertInputTxt("textarea","\t")},savedDraft:function(){confirm("确认保存？")&&(l.SaveDraft(this.post),this.status="草稿已保存")},refreshPreview:function(){s.a.SetRawMarkdownToDiv(this.post.Text,this.divId),this.getLastModifTime(),this.status="预览已刷新"},goPost:function(){var t=this;if(""!=this.post.Text&&""!=this.post.Title)return"modify"!==this.$route.query.mode?confirm("确认发布？")?void this.axios.post(i.a+"/v1x1/post/create",{Title:this.post.Title,Text:this.post.Text,TagIds:this.post.Tags,IsPrivate:this.isPrivate,Path:this.post.Path},{withCredentials:!0}).then((function(e){o.a.Check(e.data)&&(t.status="已上传！",t.$router.push({path:"/post/reader?id="+e.data.Data}))})).catch((function(t){})):void 0:confirm("确认修改？")?void this.axios.post(i.a+"/v1x1/post/modify",{Id:parseInt(this.postId),Title:this.post.Title,Text:this.post.Text,TagIds:this.post.Tags,IsPrivate:this.isPrivate,Path:this.post.Path},{withCredentials:!0}).then((function(e){o.a.Check(e.data)&&(t.status="已修改！",t.$router.push({path:"/post/reader?id="+t.postId}))})).catch((function(t){})):void 0;this.status="文章内容或标题均不能为空"},getLastModifTime:function(){var t=new Date("2015-03-25 12:00:00");this.post.Date=t.toString()}},created:function(){var t=this;switch(u.a.InitCookie(this.$cookie),u.a.IsLogin()||this.$router.push({path:"/account/login?from=require_login"}),this.$route.query.mode){case"modify":return this.postId=this.$route.query.id,void this.axios.get(i.a+"/v1x1/post",{params:{id:this.postId,style:"default"},withCredentials:!0}).then((function(e){o.a.Check(e.data)?(t.post=JSON.parse(e.data.Data),t.isPrivate=t.post.IsPrivate,t.status="编辑模式，正在编辑文章："+t.post.Title):"-5"==e.data.ErrCod&&(t.canNotModify=!0)})).catch((function(t){}));case"draft":return this.status="草稿模式",void(this.post=l.GetDraftByTitle(this.$route.query.dtitle));default:return this.status="创建了新文档",void(this.post={Title:"",Text:"",Tags:[],Author:"我自己",Date:new Date,MyPost:!0,Path:""})}}},a("7910"),a=Object(d.a)(c,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",[t.canNotModify?e("div",{staticClass:"text-center"},[t._m(0)]):e("div",[e("b-sidebar",{attrs:{id:"cc-sidebar-draft","aria-labelledby":"sidebar-no-header-title","backdrop-variant":"dark","no-header":"",backdrop:"",shadow:""}},[e("b-alert",{attrs:{show:""}},[t._v("草稿箱储存在本地，随着退出登录与删除浏览器缓存会使所有草稿消失")]),e("ccDfBox")],1),null!=this.post?e("b-container",{attrs:{fluid:""}},[e("b-card-group",{attrs:{deck:""}},[e("b-card",{attrs:{title:"编辑","content-class":"mt-3",align:"center"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.post.Title,expression:"post.Title"}],staticClass:"form-control mb-3",attrs:{placeholder:"文章标题",type:"text"},domProps:{value:t.post.Title},on:{input:function(e){e.target.composing||t.$set(t.post,"Title",e.target.value)}}}),e("b-form-textarea",{attrs:{id:"textarea",placeholder:"Markdown",rows:"10","max-rows":"15"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:(e.preventDefault(),t.tabFunc())}},model:{value:t.post.Text,callback:function(e){t.$set(t.post,"Text",e)},expression:"post.Text"}}),e("br"),e("b-form-tags",{attrs:{"input-id":"tags-separators",separator:" ,;",placeholder:"使用半角逗号，分号，空格隔开","tag-variant":"light","tag-pills":"","no-add-on-enter":"","remove-on-delete":""},model:{value:t.post.Tags,callback:function(e){t.$set(t.post,"Tags",e)},expression:"post.Tags"}})],1),e("b-card",{attrs:{title:"预览"},on:{click:t.refreshPreview}},[e("b-container",{staticStyle:{"background-color":"white"}},[e("br"),e("h2",[t._v(t._s(t.post.Title))]),e("hr"),e("div",{staticClass:"cc-md-1",attrs:{id:t.divId}}),e("br")])],1)],1),e("br"),e("b-navbar",{attrs:{fixed:"bottom",toggleable:"lg",type:"light",variant:"light"}},[e("b-button",{attrs:{variant:"light"},on:{click:t.goPost}},[t._v("发表")]),e("b-button",{staticClass:"ml-2",attrs:{variant:"light"},on:{click:t.refreshPreview}},[t._v("预览刷新")]),e("b-button",{staticClass:"ml-2",attrs:{variant:"light"},on:{click:t.savedDraft}},[t._v("保存草稿")]),e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.cc-sidebar-draft",modifiers:{"cc-sidebar-draft":!0}}],staticClass:"ml-2",attrs:{variant:"light"}},[t._v("显示草稿箱")]),e("b-form-checkbox",{staticClass:"ml-2",attrs:{switch:""},model:{value:t.isPrivate,callback:function(e){t.isPrivate=e},expression:"isPrivate"}},[t._v("设为隐私文章")]),e("small",{staticClass:"ml-5 my-auto",staticStyle:{color:"blue","border-style":"dotted","border-width":"2px"}},[t._v(t._s(t.status))])],1)],1):t._e()],1)])}),[function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("h1",[t._v("你无法修改这篇文章"),e("br"),t._v("没有权限")])}],!1,null,"34744326",null);e.default=a.exports}}]);