(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-stickyBasic-stickyBasic"],{"0200":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{scrollTop:0,stickyTop:uni.upx2px(80)}},onLoad:function(){this.stickyTop+=44},methods:{},onPageScroll:function(t){this.scrollTop=t.scrollTop}};i.default=n},"0313":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".tui-title[data-v-f5229574]{padding:%?50?% %?30?% %?30?%;color:#2c405a}.tui-tag[data-v-f5229574]{width:%?200?%;height:%?80?%;margin-left:%?30?%;background-color:#5677fc;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:%?6?%}.tui-green[data-v-f5229574]{background-color:#19be6b!important}.tui-danger[data-v-f5229574]{background-color:#eb0909!important}.tui-center[data-v-f5229574]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-right[data-v-f5229574]{width:100%;padding:0 %?30?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.tui-box[data-v-f5229574]{width:100%;height:%?300?%;padding:%?30?%;box-sizing:border-box;background-color:#fff}",""]),t.exports=i},"0bf7":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".tui-sticky-fixed[data-v-bf75c49c]{width:100%;position:fixed;left:0;z-index:888}",""]),t.exports=i},"2c70":function(t,i,e){"use strict";var n={tuiSticky:e("d12b").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"tui-title"},[t._v("基本用法")]),e("tui-sticky",{attrs:{scrollTop:t.scrollTop,stickyHeight:"80rpx"},scopedSlots:t._u([{key:"header",fn:function(){return[e("v-uni-view",{staticClass:"tui-tag"},[t._v("基本用法")])]},proxy:!0}])}),e("v-uni-view",{staticClass:"tui-title"},[t._v("吸顶距离")]),e("tui-sticky",{attrs:{scrollTop:t.scrollTop,stickyTop:t.stickyTop,stickyHeight:"80rpx"},scopedSlots:t._u([{key:"header",fn:function(){return[e("v-uni-view",{staticClass:"tui-center"},[e("v-uni-view",{staticClass:"tui-tag tui-green"},[t._v("吸顶距离")])],1)]},proxy:!0}])}),e("v-uni-view",{staticClass:"tui-title"},[t._v("指定容器")]),e("tui-sticky",{attrs:{scrollTop:t.scrollTop,stickyHeight:"80rpx",container:!0},scopedSlots:t._u([{key:"header",fn:function(){return[e("v-uni-view",{staticClass:"tui-right"},[e("v-uni-view",{staticClass:"tui-tag tui-danger"},[t._v("指定容器")])],1)]},proxy:!0},{key:"content",fn:function(){return[e("v-uni-view",{staticClass:"tui-box"},[t._v("容器内容")])]},proxy:!0}])}),e("v-uni-view",{staticStyle:{height:"800px"}})],1)},c=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return c})),e.d(i,"a",(function(){return n}))},"4c60":function(t,i,e){"use strict";var n=e("f29f"),a=e.n(n);a.a},"7ad9":function(t,i,e){"use strict";e.r(i);var n=e("0200"),a=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(i,t,(function(){return n[t]}))}(c);i["default"]=a.a},"93f8":function(t,i,e){"use strict";e("a9e3"),e("ac1f"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"tuiSticky",props:{scrollTop:{type:Number},stickyTop:{type:[Number,String],default:44},container:{type:Boolean,default:!1},isNativeHeader:{type:Boolean,default:!0},stickyHeight:{type:String,default:"auto"},backgroundColor:{type:String,default:"transparent"},recalc:{type:Number,default:0},index:{type:[Number,String],default:0}},watch:{scrollTop:function(t,i){var e=this;0!=this.initialize?this.updateScrollChange((function(){e.updateStickyChange(),e.initialize=0})):this.updateStickyChange()},recalc:function(t,i){var e=this;this.updateScrollChange((function(){e.updateStickyChange(),e.initialize=0}))}},created:function(){this.initialize=this.recalc},mounted:function(){var t=this;setTimeout((function(){t.updateScrollChange()}),20)},data:function(){return{timer:null,top:0,height:0,isFixed:!1,initialize:0}},methods:{updateStickyChange:function(){var t=this.top,i=this.height,e=this.scrollTop,n=this.stickyTop;this.isNativeHeader&&(n-=44,n=n<0?0:n),this.container?this.isFixed=e+n>=t&&e+n<t+i:this.isFixed=e+n>=t,this.$emit("sticky",{isFixed:this.isFixed,index:this.index})},updateScrollChange:function(t){var i=this;this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout((function(){var e=".tui-sticky-class",n=uni.createSelectorQuery().in(i);n.select(e).boundingClientRect((function(e){e&&(i.top=e.top+(i.scrollTop||0),i.height=e.height,t&&t(),i.$emit("change",{index:Number(i.index),top:i.top}))})).exec()}),0)}}};i.default=n},b6fa:function(t,i,e){"use strict";e.r(i);var n=e("2c70"),a=e("7ad9");for(var c in a)"default"!==c&&function(t){e.d(i,t,(function(){return a[t]}))}(c);e("f8c3");var o,r=e("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"f5229574",null,!1,n["a"],o);i["default"]=s.exports},b7f3:function(t,i,e){var n=e("0313");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("2b5ec8d0",n,!0,{sourceMap:!1,shadowMode:!1})},d12b:function(t,i,e){"use strict";e.r(i);var n=e("d7b0"),a=e("ff42");for(var c in a)"default"!==c&&function(t){e.d(i,t,(function(){return a[t]}))}(c);e("4c60");var o,r=e("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"bf75c49c",null,!1,n["a"],o);i["default"]=s.exports},d7b0:function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"tui-sticky-class"},[t.isFixed?e("v-uni-view",{style:{height:t.stickyHeight,backgroundColor:t.backgroundColor}}):t._e(),e("v-uni-view",{class:{"tui-sticky-fixed":t.isFixed},style:{top:t.isFixed?t.stickyTop+"px":"auto"}},[t._t("header")],2),t._t("content")],2)},c=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return c})),e.d(i,"a",(function(){return n}))},f29f:function(t,i,e){var n=e("0bf7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("493d57ce",n,!0,{sourceMap:!1,shadowMode:!1})},f8c3:function(t,i,e){"use strict";var n=e("b7f3"),a=e.n(n);a.a},ff42:function(t,i,e){"use strict";e.r(i);var n=e("93f8"),a=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(i,t,(function(){return n[t]}))}(c);i["default"]=a.a}}]);