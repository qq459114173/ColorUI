(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-cropper-cropper"],{"036f":function(t,a,e){"use strict";e.r(a);var r=e("a18f"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(a,t,(function(){return r[t]}))}(o);a["default"]=i.a},"117e":function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r={name:"tuiButton",props:{type:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"96rpx"},size:{type:Number,default:32},margin:{type:String,default:"0"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledGray:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},index:{type:[Number,String],default:0}},methods:{handleClick:function(){if(this.disabled)return!1;this.$emit("click",{index:Number(this.index)})},bindgetuserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.detail,e=void 0===a?{}:a;this.$emit("getuserinfo",e)},getShadowClass:function(t,a,e){var r="";return a&&"white"!=t&&!e&&(r="tui-shadow-"+t),r},getDisabledClass:function(t,a,e){var r="";if(t&&"white"!=a){var i=this.disabledGray?"tui-gray-disabled":"tui-dark-disabled";r=e?"tui-dark-disabled-outline":i}return r},getShapeClass:function(t,a){var e="";return"circle"==t?e=a?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(e=a?"tui-outline-rightAngle":"tui-rightAngle"),e},getHoverClass:function(t,a,e){var r="";return t||(r=e?"tui-outline-hover":"tui-"+(a||"primary")+"-hover"),r}}};a.default=r},1488:function(t,a,e){"use strict";var r=e("5a22"),i=e.n(r);i.a},1502:function(t,a,e){var r=e("24fb");a=r(!1),a.push([t.i,'.tui-btn-primary[data-v-7744b5e9]{background:#5677fc!important;color:#fff}.tui-shadow-primary[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(86,119,252,.2)}.tui-btn-danger[data-v-7744b5e9]{background:#eb0909!important;color:#fff}.tui-shadow-danger[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.2)}.tui-btn-warning[data-v-7744b5e9]{background:#fc872d!important;color:#fff}.tui-shadow-warning[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(252,135,45,.2)}.tui-btn-green[data-v-7744b5e9]{background:#35b06a!important;color:#fff}.tui-shadow-green[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(53,176,106,.2)}.tui-btn-blue[data-v-7744b5e9]{background:#007aff!important;color:#fff}.tui-shadow-blue[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(0,122,255,.2)}.tui-btn-white[data-v-7744b5e9]{background:#fff!important;color:#333!important}.tui-btn-gray[data-v-7744b5e9]{background:#bfbfbf!important;color:#fff!important}.tui-btn-black[data-v-7744b5e9]{background:#333!important;color:#fff!important}.tui-shadow-gray[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 hsla(0,0%,74.9%,.2)}.tui-hover-gray[data-v-7744b5e9]{background:#f7f7f9!important}.tui-black-hover[data-v-7744b5e9]{background:#555!important;color:#e5e5e5!important}\n\n/* button start*/.tui-btn[data-v-7744b5e9]{width:100%;position:relative;border:0!important;border-radius:%?6?%;padding-left:0;padding-right:0;overflow:visible}.tui-btn[data-v-7744b5e9]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);box-sizing:border-box;left:0;top:0;border-radius:%?12?%;border:0}.tui-btn-white[data-v-7744b5e9]::after{border:%?1?% solid #bfbfbf}.tui-white-hover[data-v-7744b5e9]{background:#e5e5e5!important;color:#2e2e2e!important}.tui-dark-disabled[data-v-7744b5e9]{opacity:.6!important;color:#fafbfc!important}.tui-dark-disabled-outline[data-v-7744b5e9]{opacity:.5!important}.tui-gray-disabled[data-v-7744b5e9]{background:#f3f3f3!important;color:#919191!important;box-shadow:none}.tui-outline-hover[data-v-7744b5e9]{opacity:.5}.tui-primary-hover[data-v-7744b5e9]{background:#4a67d6!important;color:#e5e5e5!important}.tui-primary-outline[data-v-7744b5e9]::after{border:%?1?% solid #5677fc!important}.tui-primary-outline[data-v-7744b5e9]{color:#5677fc!important;background:transparent}.tui-danger-hover[data-v-7744b5e9]{background:#c80808!important;color:#e5e5e5!important}.tui-danger-outline[data-v-7744b5e9]{color:#eb0909!important;background:transparent}.tui-danger-outline[data-v-7744b5e9]::after{border:%?1?% solid #eb0909!important}.tui-warning-hover[data-v-7744b5e9]{background:#d67326!important;color:#e5e5e5!important}.tui-warning-outline[data-v-7744b5e9]{color:#fc872d!important;background:transparent}.tui-warning-outline[data-v-7744b5e9]::after{border:1px solid #fc872d!important}.tui-green-hover[data-v-7744b5e9]{background:#2d965a!important;color:#e5e5e5!important}.tui-green-outline[data-v-7744b5e9]{color:#35b06a!important;background:transparent}.tui-green-outline[data-v-7744b5e9]::after{border:%?1?% solid #35b06a!important}.tui-blue-hover[data-v-7744b5e9]{background:#0062cc!important;color:#e5e5e5!important}.tui-blue-outline[data-v-7744b5e9]{color:#007aff!important;background:transparent}.tui-blue-outline[data-v-7744b5e9]::after{border:%?1?% solid #007aff!important}\n.tui-btn-gradual[data-v-7744b5e9]{background:-webkit-linear-gradient(left,#ff5926,#f00e2c)!important;background:linear-gradient(90deg,#ff5926,#f00e2c)!important;color:#fff!important}.tui-shadow-gradual[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.15)}\n.tui-gray-hover[data-v-7744b5e9]{background:#a3a3a3!important;color:#898989}\n.tui-gradual-hover[data-v-7744b5e9]{background:-webkit-linear-gradient(left,#d74620,#cd1225)!important;background:linear-gradient(90deg,#d74620,#cd1225)!important;color:#fff!important}\n.tui-gray-outline[data-v-7744b5e9]{color:#999!important;background:transparent!important}.tui-white-outline[data-v-7744b5e9]{color:#fff!important;background:transparent!important}.tui-black-outline[data-v-7744b5e9]{background:transparent!important;color:#333!important}.tui-gray-outline[data-v-7744b5e9]::after{border:%?1?% solid #ccc!important}.tui-white-outline[data-v-7744b5e9]::after{border:1px solid #fff!important}.tui-black-outline[data-v-7744b5e9]::after{border:1px solid #333!important}\n\n/*圆角 */.tui-fillet[data-v-7744b5e9]{border-radius:%?50?%}.tui-btn-white.tui-fillet[data-v-7744b5e9]::after{border-radius:%?98?%}.tui-outline-fillet[data-v-7744b5e9]::after{border-radius:%?98?%}\n\n/*平角*/.tui-rightAngle[data-v-7744b5e9]{border-radius:0}.tui-btn-white.tui-rightAngle[data-v-7744b5e9]::after{border-radius:0}.tui-outline-rightAngle[data-v-7744b5e9]::after{border-radius:0}',""]),t.exports=a},"2d05":function(t,a,e){"use strict";e.r(a);var r=e("3ed4"),i=e("a8a0");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("fb90");var n,d=e("f0c5"),u=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"7744b5e9",null,!1,r["a"],n);a["default"]=u.exports},"3b08":function(t,a,e){var r=e("1502");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("aad1d010",r,!0,{sourceMap:!1,shadowMode:!1})},"3ed4":function(t,a,e){"use strict";var r,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-button",{staticClass:"tui-btn",class:[t.plain?"tui-"+t.type+"-outline":"tui-btn-"+(t.type||"primary"),t.getDisabledClass(t.disabled,t.type,t.plain),t.getShapeClass(t.shape,t.plain),t.getShadowClass(t.type,t.shadow,t.plain)],style:{width:t.width,height:t.height,lineHeight:t.height,fontSize:t.size+"rpx",margin:t.margin},attrs:{"hover-class":t.getHoverClass(t.disabled,t.type,t.plain),loading:t.loading,"open-type":t.openType,disabled:t.disabled},on:{getuserinfo:function(a){arguments[0]=a=t.$handleEvent(a),t.bindgetuserinfo.apply(void 0,arguments)},click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return r}))},"42a4":function(t,a,e){var r=e("24fb");a=r(!1),a.push([t.i,".container[data-v-664d7590]{padding:%?20?% 0 %?120?% 0;box-sizing:border-box}.header[data-v-664d7590]{padding:%?80?% %?90?% %?60?% %?90?%;box-sizing:border-box}.title[data-v-664d7590]{font-size:%?34?%;color:#333;font-weight:500}.sub-title[data-v-664d7590]{font-size:%?24?%;color:#7a7a7a;padding-top:%?18?%}.tui-btn-box[data-v-664d7590]{width:100%;padding:%?10?% %?40?%;box-sizing:border-box}.tui-old-version[data-v-664d7590]{font-size:%?24?%;color:#5677fc;padding-top:%?18?%}",""]),t.exports=a},"5a22":function(t,a,e){var r=e("42a4");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("5706373d",r,!0,{sourceMap:!1,shadowMode:!1})},"5e0b":function(t,a,e){"use strict";var r={tuiButton:e("2d05").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"title"},[t._v("Image Cropper")]),e("v-uni-view",{staticClass:"sub-title"},[t._v("图片裁剪（wxs）：可设置裁剪框宽高，边缘线颜色，锁定裁剪框大小，是否可触摸旋转等")]),e("v-uni-view",{staticClass:"tui-old-version",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.oldCropper.apply(void 0,arguments)}}},[t._v("切换至旧版图片裁剪")])],1),e("v-uni-view",{staticClass:"tui-btn-box"},[e("tui-button",{attrs:{margin:"36rpx 0 0",type:"white",shape:"circle"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chooseImage.apply(void 0,arguments)}}},[t._v("组件默认使用")]),e("tui-button",{attrs:{margin:"36rpx 0 0",type:"white",shape:"circle"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.customCropper.apply(void 0,arguments)}}},[t._v("自定义操作栏+详细使用")])],1)],1)},o=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return r}))},"8a0c":function(t,a,e){"use strict";e.r(a);var r=e("5e0b"),i=e("036f");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("1488");var n,d=e("f0c5"),u=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"664d7590",null,!1,r["a"],n);a["default"]=u.exports},a18f:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r={data:function(){return{}},methods:{chooseImage:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var e=a.tempFilePaths[0];t.tui.href("../cropper-default/cropper-default?src="+e)}})},customCropper:function(){this.tui.href("../cropper-custom/cropper-custom")},oldCropper:function(){this.tui.href("../cropper-old/cropper-old")}}};a.default=r},a8a0:function(t,a,e){"use strict";e.r(a);var r=e("117e"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(a,t,(function(){return r[t]}))}(o);a["default"]=i.a},fb90:function(t,a,e){"use strict";var r=e("3b08"),i=e.n(r);i.a}}]);