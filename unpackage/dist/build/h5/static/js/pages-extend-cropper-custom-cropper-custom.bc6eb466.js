(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-cropper-custom-cropper-custom"],{"117e":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiButton",props:{type:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"96rpx"},size:{type:Number,default:32},margin:{type:String,default:"0"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledGray:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},index:{type:[Number,String],default:0}},methods:{handleClick:function(){if(this.disabled)return!1;this.$emit("click",{index:Number(this.index)})},bindgetuserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,a=void 0===e?{}:e;this.$emit("getuserinfo",a)},getShadowClass:function(t,e,a){var i="";return e&&"white"!=t&&!a&&(i="tui-shadow-"+t),i},getDisabledClass:function(t,e,a){var i="";if(t&&"white"!=e){var n=this.disabledGray?"tui-gray-disabled":"tui-dark-disabled";i=a?"tui-dark-disabled-outline":n}return i},getShapeClass:function(t,e){var a="";return"circle"==t?a=e?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(a=e?"tui-outline-rightAngle":"tui-rightAngle"),a},getHoverClass:function(t,e,a){var i="";return t||(i=a?"tui-outline-hover":"tui-"+(e||"primary")+"-hover"),i}}};e.default=i},1502:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.tui-btn-primary[data-v-7744b5e9]{background:#5677fc!important;color:#fff}.tui-shadow-primary[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(86,119,252,.2)}.tui-btn-danger[data-v-7744b5e9]{background:#eb0909!important;color:#fff}.tui-shadow-danger[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.2)}.tui-btn-warning[data-v-7744b5e9]{background:#fc872d!important;color:#fff}.tui-shadow-warning[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(252,135,45,.2)}.tui-btn-green[data-v-7744b5e9]{background:#35b06a!important;color:#fff}.tui-shadow-green[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(53,176,106,.2)}.tui-btn-blue[data-v-7744b5e9]{background:#007aff!important;color:#fff}.tui-shadow-blue[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(0,122,255,.2)}.tui-btn-white[data-v-7744b5e9]{background:#fff!important;color:#333!important}.tui-btn-gray[data-v-7744b5e9]{background:#bfbfbf!important;color:#fff!important}.tui-btn-black[data-v-7744b5e9]{background:#333!important;color:#fff!important}.tui-shadow-gray[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 hsla(0,0%,74.9%,.2)}.tui-hover-gray[data-v-7744b5e9]{background:#f7f7f9!important}.tui-black-hover[data-v-7744b5e9]{background:#555!important;color:#e5e5e5!important}\n\n/* button start*/.tui-btn[data-v-7744b5e9]{width:100%;position:relative;border:0!important;border-radius:%?6?%;padding-left:0;padding-right:0;overflow:visible}.tui-btn[data-v-7744b5e9]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);box-sizing:border-box;left:0;top:0;border-radius:%?12?%;border:0}.tui-btn-white[data-v-7744b5e9]::after{border:%?1?% solid #bfbfbf}.tui-white-hover[data-v-7744b5e9]{background:#e5e5e5!important;color:#2e2e2e!important}.tui-dark-disabled[data-v-7744b5e9]{opacity:.6!important;color:#fafbfc!important}.tui-dark-disabled-outline[data-v-7744b5e9]{opacity:.5!important}.tui-gray-disabled[data-v-7744b5e9]{background:#f3f3f3!important;color:#919191!important;box-shadow:none}.tui-outline-hover[data-v-7744b5e9]{opacity:.5}.tui-primary-hover[data-v-7744b5e9]{background:#4a67d6!important;color:#e5e5e5!important}.tui-primary-outline[data-v-7744b5e9]::after{border:%?1?% solid #5677fc!important}.tui-primary-outline[data-v-7744b5e9]{color:#5677fc!important;background:transparent}.tui-danger-hover[data-v-7744b5e9]{background:#c80808!important;color:#e5e5e5!important}.tui-danger-outline[data-v-7744b5e9]{color:#eb0909!important;background:transparent}.tui-danger-outline[data-v-7744b5e9]::after{border:%?1?% solid #eb0909!important}.tui-warning-hover[data-v-7744b5e9]{background:#d67326!important;color:#e5e5e5!important}.tui-warning-outline[data-v-7744b5e9]{color:#fc872d!important;background:transparent}.tui-warning-outline[data-v-7744b5e9]::after{border:1px solid #fc872d!important}.tui-green-hover[data-v-7744b5e9]{background:#2d965a!important;color:#e5e5e5!important}.tui-green-outline[data-v-7744b5e9]{color:#35b06a!important;background:transparent}.tui-green-outline[data-v-7744b5e9]::after{border:%?1?% solid #35b06a!important}.tui-blue-hover[data-v-7744b5e9]{background:#0062cc!important;color:#e5e5e5!important}.tui-blue-outline[data-v-7744b5e9]{color:#007aff!important;background:transparent}.tui-blue-outline[data-v-7744b5e9]::after{border:%?1?% solid #007aff!important}\n.tui-btn-gradual[data-v-7744b5e9]{background:-webkit-linear-gradient(left,#ff5926,#f00e2c)!important;background:linear-gradient(90deg,#ff5926,#f00e2c)!important;color:#fff!important}.tui-shadow-gradual[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.15)}\n.tui-gray-hover[data-v-7744b5e9]{background:#a3a3a3!important;color:#898989}\n.tui-gradual-hover[data-v-7744b5e9]{background:-webkit-linear-gradient(left,#d74620,#cd1225)!important;background:linear-gradient(90deg,#d74620,#cd1225)!important;color:#fff!important}\n.tui-gray-outline[data-v-7744b5e9]{color:#999!important;background:transparent!important}.tui-white-outline[data-v-7744b5e9]{color:#fff!important;background:transparent!important}.tui-black-outline[data-v-7744b5e9]{background:transparent!important;color:#333!important}.tui-gray-outline[data-v-7744b5e9]::after{border:%?1?% solid #ccc!important}.tui-white-outline[data-v-7744b5e9]::after{border:1px solid #fff!important}.tui-black-outline[data-v-7744b5e9]::after{border:1px solid #333!important}\n\n/*圆角 */.tui-fillet[data-v-7744b5e9]{border-radius:%?50?%}.tui-btn-white.tui-fillet[data-v-7744b5e9]::after{border-radius:%?98?%}.tui-outline-fillet[data-v-7744b5e9]::after{border-radius:%?98?%}\n\n/*平角*/.tui-rightAngle[data-v-7744b5e9]{border-radius:0}.tui-btn-white.tui-rightAngle[data-v-7744b5e9]::after{border-radius:0}.tui-outline-rightAngle[data-v-7744b5e9]::after{border-radius:0}',""]),t.exports=e},"2d05":function(t,e,a){"use strict";a.r(e);var i=a("3ed4"),n=a("a8a0");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("fb90");var r,u=a("f0c5"),d=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"7744b5e9",null,!1,i["a"],r);e["default"]=d.exports},"3b08":function(t,e,a){var i=a("1502");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("aad1d010",i,!0,{sourceMap:!1,shadowMode:!1})},"3ed4":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"tui-btn",class:[t.plain?"tui-"+t.type+"-outline":"tui-btn-"+(t.type||"primary"),t.getDisabledClass(t.disabled,t.type,t.plain),t.getShapeClass(t.shape,t.plain),t.getShadowClass(t.type,t.shadow,t.plain)],style:{width:t.width,height:t.height,lineHeight:t.height,fontSize:t.size+"rpx",margin:t.margin},attrs:{"hover-class":t.getHoverClass(t.disabled,t.type,t.plain),loading:t.loading,"open-type":t.openType,disabled:t.disabled},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.bindgetuserinfo.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},"5f43":function(t,e,a){"use strict";a.r(e);var i=a("a411"),n=a("9542");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("c62b");var r,u=a("f0c5"),d=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"29725a66",null,!1,i["a"],r);e["default"]=d.exports},9542:function(t,e,a){"use strict";a.r(e);var i=a("f2c3"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},a411:function(t,e,a){"use strict";var i={tuiIcon:a("3b98").default,tuiButton:a("2d05").default,tuiPictureCropper:a("d3d6").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"tui-back"},[a("tui-icon",{attrs:{name:"arrowleft",color:"#fff",size:30},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}),a("v-uni-view",{class:{"tui-btn-box":t.mp}},[a("tui-button",{attrs:{size:24,width:"152rpx",height:"56rpx",shape:"circle",plain:!0,type:"white"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btnCropper.apply(void 0,arguments)}}},[t._v("确定裁剪")])],1)],1),a("tui-picture-cropper",{attrs:{custom:!0,lockRatio:t.lockRatio,edgeColor:t.edgeColor,startCutting:t.startCutting,rotateAngle:t.rotateAngle,lockWidth:t.lockWidth,lockHeight:t.lockHeight,disableRotate:t.disableRotate,limitMove:t.limitMove,imageUrl:t.imageUrl},on:{cropper:function(e){arguments[0]=e=t.$handleEvent(e),t.cropper.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"tui-custom-bar"},[a("v-uni-view",{staticClass:"tui-item-box"},[a("tui-button",{attrs:{width:"136rpx",height:"56rpx",size:24,shape:"circle",plain:!0,type:"white"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choose.apply(void 0,arguments)}}},[t._v("选择图片")]),a("v-uni-text",[t._v("边缘线颜色")]),a("tui-button",{attrs:{width:"56rpx",height:"56rpx",size:24},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setedgeColor(0)}}}),a("tui-button",{attrs:{width:"56rpx",height:"56rpx",size:24,type:"danger"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setedgeColor(1)}}}),a("tui-button",{attrs:{width:"56rpx",height:"56rpx",size:24,type:"green"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setedgeColor(2)}}}),a("tui-button",{attrs:{width:"56rpx",height:"56rpx",size:24,type:"white"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setedgeColor(3)}}}),a("tui-button",{attrs:{width:"56rpx",height:"56rpx",size:24,type:"warning"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setedgeColor(4)}}})],1),a("v-uni-view",{staticClass:"tui-item-box"},[a("tui-button",{attrs:{width:"110rpx",height:"56rpx",size:24,shape:"circle",plain:!0,type:"white"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rotate.apply(void 0,arguments)}}},[t._v("旋转")]),a("v-uni-text",[t._v("锁定裁剪框宽")]),a("v-uni-switch",{staticClass:"tui-switch",attrs:{color:"#19be6b"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(1,e)}}}),a("v-uni-text",[t._v("锁定裁剪框高")]),a("v-uni-switch",{staticClass:"tui-switch",attrs:{color:"#19be6b"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(2,e)}}})],1),a("v-uni-view",{staticClass:"tui-item-box"},[a("v-uni-text",[t._v("锁定比例")]),a("v-uni-switch",{staticClass:"tui-switch",attrs:{color:"#19be6b"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(3,e)}}}),a("v-uni-text",[t._v("触摸旋转")]),a("v-uni-switch",{staticClass:"tui-switch",attrs:{color:"#19be6b",checked:!t.disableRotate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(4,e)}}}),a("v-uni-text",[t._v("限制移动")]),a("v-uni-switch",{staticClass:"tui-switch",attrs:{color:"#19be6b",checked:t.limitMove},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(5,e)}}})],1)],1)],1)},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},a8a0:function(t,e,a){"use strict";a.r(e);var i=a("117e"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},c62b:function(t,e,a){"use strict";var i=a("fcaa"),n=a.n(i);n.a},f2c3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{imageUrl:"",lockRatio:!1,edgeColor:"#fff",startCutting:0,rotateAngle:0,lockWidth:!1,lockHeight:!1,disableRotate:!0,limitMove:!1,mp:!1}},onLoad:function(t){},methods:{choose:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){var a=e.tempFilePaths[0];t.imageUrl=a,setTimeout((function(){t.rotateAngle=0}),200)}})},btnCropper:function(){this.startCutting+=1},cropper:function(t){uni.previewImage({current:"",urls:[t.url]})},back:function(){uni.navigateBack()},setedgeColor:function(t){this.edgeColor=["#5677fc","#EB0909","#19be6b","#ffffff","#ff7900"][t]},rotate:function(){this.imageUrl&&(this.rotateAngle+=90)},switchChange:function(t,e){switch(t){case 1:this.lockWidth=e.target.value;break;case 2:this.lockHeight=e.target.value;break;case 3:this.lockRatio=e.target.value;break;case 4:this.disableRotate=!e.target.value,this.disableRotate||(this.limitMove=!1);break;case 5:this.limitMove=e.target.value,this.limitMove&&(this.disableRotate=!0);break;default:break}}}};e.default=i},fb90:function(t,e,a){"use strict";var i=a("3b08"),n=a.n(i);n.a},fcaa:function(t,e,a){var i=a("ff47");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1f6d22ee",i,!0,{sourceMap:!1,shadowMode:!1})},ff47:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tui-custom-bar[data-v-29725a66]{width:100%;padding:0 %?20?% %?20?%;box-sizing:border-box;position:fixed;left:0;bottom:0;z-index:9999}.tui-item-box[data-v-29725a66]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff;font-size:%?28?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;white-space:nowrap;padding-bottom:%?12?%}.tui-flex-start[data-v-29725a66]{-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;justify-content:flex-start!important}.tui-switch[data-v-29725a66]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:0 center;transform-origin:0 center}.tui-back[data-v-29725a66]{width:100%;padding:0 %?30?%;box-sizing:border-box;position:fixed;z-index:9999;left:0;top:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;\r\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between\n}.tui-btn-box[data-v-29725a66]{margin-left:%?60?%}",""]),t.exports=e}}]);