(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-update-update"],{5896:function(t,n,r){"use strict";var e=r("5d5e"),o=r.n(e);o.a},"5a18":function(t,n,r){var e=r("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * scss预处理 内置的常用样式变量\r\n * 后期项目会考虑使用scss\r\n*/\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-20091e3d]{width:100%;height:100%;background-color:#fff}.container[data-v-20091e3d]{width:100%;height:100%;background-color:#fff}.container .tui-box[data-v-20091e3d]{position:fixed;width:100%;top:50%;padding:0 %?45?%;margin-top:%?-50?%;box-sizing:border-box;text-align:center}.container .tui-box .tui-text[data-v-20091e3d]{font-size:%?28?%;color:#333;padding-top:%?18?%}body.?%PAGE?%[data-v-20091e3d]{background-color:#fff}',""]),t.exports=n},"5d5e":function(t,n,r){var e=r("5a18");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=r("4f06").default;o("3dcfa5a3",e,!0,{sourceMap:!1,shadowMode:!1})},"639d":function(t,n,r){"use strict";r.r(n);var e=r("c96c"),o=r.n(e);for(var a in e)"default"!==a&&function(t){r.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},"90bb":function(t,n,r){"use strict";var e,o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-uni-view",{staticClass:"container"},[r("v-uni-view",{staticClass:"tui-box"},[r("v-uni-progress",{attrs:{percent:t.percent,"show-info":!0,"stroke-width":"3",activeColor:"#5677fc","active-mode":"forwards"}}),r("v-uni-view",{staticClass:"tui-text"},[t._v("正在更新，请耐心等待...")])],1)],1)},a=[];r.d(n,"b",(function(){return o})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return e}))},abc4:function(t,n,r){"use strict";r.r(n);var e=r("90bb"),o=r("639d");for(var a in o)"default"!==a&&function(t){r.d(n,t,(function(){return o[t]}))}(a);r("5896");var i,u=r("f0c5"),c=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"20091e3d",null,!1,e["a"],i);n["default"]=c.exports},c96c:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{percent:0}},onLoad:function(t){},onBackPress:function(){return!0},methods:{update:function(t){var n=this;this.percent=5;var r=uni.downloadFile({url:t,success:function(t){200===t.statusCode&&plus.runtime.install(t.tempFilePath,{force:!0},(function(){plus.runtime.restart()}),(function(t){n.showModal()}))},fail:function(){n.showModal()}});r.onProgressUpdate((function(t){n.percent=t.progress}))},showModal:function(){this.tui.model("温馨提示","升级失败，请稍后再试",!1,(function(t){plus.runtime.restart()}))}}};n.default=e}}]);