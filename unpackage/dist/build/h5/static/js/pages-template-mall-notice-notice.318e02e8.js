(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-mall-notice-notice"],{"028b":function(t,i,e){"use strict";var a={tuiListCell:e("d733").default},r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"tui-top"},[e("tui-list-cell",{attrs:{hover:!1,unlined:!0}},[e("v-uni-view",{staticClass:"tui-notice-item"},[e("v-uni-view",{staticClass:"tui-list-item_title"},[t._v("推送通知")]),e("v-uni-switch",{staticClass:"tui-scale-small",attrs:{checked:!1,color:"#109fc7"}})],1)],1)],1),e("v-uni-view",{staticClass:"tui-top"},[e("tui-list-cell",{attrs:{hover:!1}},[e("v-uni-view",{staticClass:"tui-notice-item"},[e("v-uni-view",{staticClass:"tui-list-item_title"},[t._v("@我")]),e("v-uni-switch",{staticClass:"tui-scale-small",attrs:{checked:!0,color:"#19be6b"}})],1)],1),e("tui-list-cell",{attrs:{hover:!1}},[e("v-uni-view",{staticClass:"tui-notice-item"},[e("v-uni-view",{staticClass:"tui-list-item_title"},[t._v("发货通知")]),e("v-uni-switch",{staticClass:"tui-scale-small",attrs:{checked:!1,color:"#19be6b"}})],1)],1),e("tui-list-cell",{attrs:{hover:!1}},[e("v-uni-view",{staticClass:"tui-notice-item"},[e("v-uni-view",{staticClass:"tui-list-item_title"},[t._v("收货通知")]),e("v-uni-switch",{staticClass:"tui-scale-small",attrs:{checked:!0,color:"#19be6b"}})],1)],1),e("tui-list-cell",{attrs:{hover:!1}},[e("v-uni-view",{staticClass:"tui-notice-item"},[e("v-uni-view",{staticClass:"tui-list-item_title"},[t._v("支付成功通知")]),e("v-uni-switch",{staticClass:"tui-scale-small",attrs:{checked:!0,color:"#19be6b"}})],1)],1),e("tui-list-cell",{attrs:{hover:!1,unlined:!0}},[e("v-uni-view",{staticClass:"tui-notice-item"},[e("v-uni-view",{staticClass:"tui-list-item_title"},[t._v("系统通知")]),e("v-uni-switch",{staticClass:"tui-scale-small",attrs:{checked:!1,color:"#19be6b"}})],1)],1)],1),e("v-uni-view",{staticClass:"tui-top"},[e("tui-list-cell",{attrs:{hover:!1}},[e("v-uni-view",{staticClass:"tui-notice-item"},[e("v-uni-view",{staticClass:"tui-list-item_title"},[t._v("我关注的")]),e("v-uni-switch",{staticClass:"tui-scale-small",attrs:{checked:!1,color:"#19be6b"}})],1)],1),e("tui-list-cell",{attrs:{hover:!1}},[e("v-uni-view",{staticClass:"tui-notice-item"},[e("v-uni-view",{staticClass:"tui-list-item_title"},[t._v("我订阅的")]),e("v-uni-switch",{staticClass:"tui-scale-small",attrs:{checked:!1,color:"#19be6b"}})],1)],1),e("tui-list-cell",{attrs:{hover:!1,unlined:!0}},[e("v-uni-view",{staticClass:"tui-notice-item"},[e("v-uni-view",{staticClass:"tui-list-item_title"},[t._v("我喜欢的")]),e("v-uni-switch",{staticClass:"tui-scale-small",attrs:{checked:!1,color:"#19be6b"}})],1)],1)],1)],1)},s=[];e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}))},"0f9d":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{}},methods:{}};i.default=a},1336:function(t,i,e){"use strict";var a,r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tui-list-class tui-list-cell",class:[t.arrow?"tui-cell-arrow":"",t.arrow&&t.arrowRight?"":"tui-arrow-right",t.unlined?"tui-cell-unlined":"",t.lineLeft?"tui-line-left":"",t.lineRight?"tui-line-right":"",t.arrow&&t.arrowColor?"tui-arrow-"+t.arrowColor:"",t.radius?"tui-radius":""],style:{backgroundColor:t.backgroundColor,fontSize:t.size+"rpx",color:t.color,padding:t.padding},attrs:{"hover-class":t.hover?"tui-cell-hover":"","hover-stay-time":150},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},s=[];e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}))},"6d4c7":function(t,i,e){"use strict";var a=e("db37"),r=e.n(a);r.a},"7d13":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"tuiListCell",props:{arrow:{type:Boolean,default:!1},arrowColor:{type:String,default:""},hover:{type:Boolean,default:!0},unlined:{type:Boolean,default:!1},lineLeft:{type:Boolean,default:!0},lineRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},backgroundColor:{type:String,default:"#fff"},size:{type:Number,default:28},color:{type:String,default:"#333"},radius:{type:Boolean,default:!1},arrowRight:{type:Boolean,default:!0},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};i.default=a},8008:function(t,i,e){"use strict";e.r(i);var a=e("0f9d"),r=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=r.a},8767:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.tui-list-cell[data-v-4868316b]{position:relative;width:100%;box-sizing:border-box}.tui-radius[data-v-4868316b]{border-radius:%?6?%;overflow:hidden}.tui-cell-hover[data-v-4868316b]{background-color:#f1f1f1!important}.tui-list-cell[data-v-4868316b]::after{content:"";position:absolute;border-bottom:1px solid #eaeef1;-webkit-transform:scaleY(.5) translateZ(0);transform:scaleY(.5) translateZ(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;bottom:0;right:0;left:0}.tui-line-left[data-v-4868316b]::after{left:%?30?%!important}.tui-line-right[data-v-4868316b]::after{right:%?30?%!important}.tui-cell-unlined[data-v-4868316b]::after{border-bottom:0!important}.tui-cell-arrow[data-v-4868316b]::before{content:" ";height:10px;width:10px;border-width:2px 2px 0 0;border-color:silver;border-style:solid;-webkit-transform:matrix(.5,.5,-.5,.5,0,0);transform:matrix(.5,.5,-.5,.5,0,0);position:absolute;top:50%;margin-top:-6px;right:%?30?%}.tui-arrow-right[data-v-4868316b]::before{right:0!important}.tui-arrow-gray[data-v-4868316b]::before{border-color:#666!important}.tui-arrow-white[data-v-4868316b]::before{border-color:#fff!important}.tui-arrow-warning[data-v-4868316b]::before{border-color:#ff7900!important}.tui-arrow-success[data-v-4868316b]::before{border-color:#19be6b!important}.tui-arrow-danger[data-v-4868316b]::before{border-color:#eb0909!important}',""]),t.exports=i},"8a62":function(t,i,e){"use strict";var a=e("d55d"),r=e.n(a);r.a},d55d:function(t,i,e){var a=e("8767");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("8c977974",a,!0,{sourceMap:!1,shadowMode:!1})},d733:function(t,i,e){"use strict";e.r(i);var a=e("1336"),r=e("fe36");for(var s in r)"default"!==s&&function(t){e.d(i,t,(function(){return r[t]}))}(s);e("8a62");var n,l=e("f0c5"),o=Object(l["a"])(r["default"],a["b"],a["c"],!1,null,"4868316b",null,!1,a["a"],n);i["default"]=o.exports},db37:function(t,i,e){var a=e("dd5e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("d67a8bc6",a,!0,{sourceMap:!1,shadowMode:!1})},dd5e:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * scss预处理 内置的常用样式变量\r\n * 后期项目会考虑使用scss\r\n*/\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-d271a872]{padding-bottom:%?48?%}.container .tui-top[data-v-d271a872]{margin-top:%?20?%}.container .tui-notice-item[data-v-d271a872]{width:100%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?32?%}.container .tui-notice-item .tui-list-item_title[data-v-d271a872]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.container .tui-notice-item .tui-scale-small[data-v-d271a872]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:100% center;transform-origin:100% center}',""]),t.exports=i},f599:function(t,i,e){"use strict";e.r(i);var a=e("028b"),r=e("8008");for(var s in r)"default"!==s&&function(t){e.d(i,t,(function(){return r[t]}))}(s);e("6d4c7");var n,l=e("f0c5"),o=Object(l["a"])(r["default"],a["b"],a["c"],!1,null,"d271a872",null,!1,a["a"],n);i["default"]=o.exports},fe36:function(t,i,e){"use strict";e.r(i);var a=e("7d13"),r=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=r.a}}]);