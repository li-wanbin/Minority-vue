(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8571010"],{"0ea6":function(t,n,e){},2851:function(t,n,e){"use strict";var a=e("99cf"),o=e.n(a);o.a},"56ab":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"add-article-container"},[e("wangEditor",{staticClass:"wang-editor"}),e("Nav",{staticClass:"nav"})],1)},o=[],i=e("8c47"),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{ref:"editor",staticClass:"wangEditor-editor-container",staticStyle:{"text-align":"left"}}),e("button",{on:{click:t.getContent}},[t._v("查看内容")])])},r=[],s=e("1a0b"),u=e.n(s),d={name:"WangEditor",data:function(){return{editorContent:""}},mounted:function(){var t=this,n=new u.a(this.$refs.editor);n.customConfig.onchange=function(n){t.editorContent=n},n.customConfig.uploadImgShowBase64=!0,n.customConfig.showLinkImg=!1,n.create()},methods:{getContent:function(){alert(this.editorContent)}}},l=d,f=(e("2851"),e("2877")),g=Object(f["a"])(l,c,r,!1,null,"20657ae8",null),v=g.exports,w={name:"AddArticle",components:{Nav:i["a"],wangEditor:v}},m=w,C=(e("90e9"),Object(f["a"])(m,a,o,!1,null,"1eed2712",null));n["default"]=C.exports},"90e9":function(t,n,e){"use strict";var a=e("0ea6"),o=e.n(a);o.a},"99cf":function(t,n,e){}}]);