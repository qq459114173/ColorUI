(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-mall-address-address"],{"066e":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{addressList:[1,2,3]}},onLoad:function(t){},onShow:function(){},methods:{editAddr:function(t,e){uni.navigateTo({url:"../editAddress/editAddress"})}}};e.default=i},"117e":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiButton",props:{type:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"96rpx"},size:{type:Number,default:32},margin:{type:String,default:"0"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledGray:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},index:{type:[Number,String],default:0}},methods:{handleClick:function(){if(this.disabled)return!1;this.$emit("click",{index:Number(this.index)})},bindgetuserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,a=void 0===e?{}:e;this.$emit("getuserinfo",a)},getShadowClass:function(t,e,a){var i="";return e&&"white"!=t&&!a&&(i="tui-shadow-"+t),i},getDisabledClass:function(t,e,a){var i="";if(t&&"white"!=e){var r=this.disabledGray?"tui-gray-disabled":"tui-dark-disabled";i=a?"tui-dark-disabled-outline":r}return i},getShapeClass:function(t,e){var a="";return"circle"==t?a=e?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(a=e?"tui-outline-rightAngle":"tui-rightAngle"),a},getHoverClass:function(t,e,a){var i="";return t||(i=a?"tui-outline-hover":"tui-"+(e||"primary")+"-hover"),i}}};e.default=i},1336:function(t,e,a){"use strict";var i,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tui-list-class tui-list-cell",class:[t.arrow?"tui-cell-arrow":"",t.arrow&&t.arrowRight?"":"tui-arrow-right",t.unlined?"tui-cell-unlined":"",t.lineLeft?"tui-line-left":"",t.lineRight?"tui-line-right":"",t.arrow&&t.arrowColor?"tui-arrow-"+t.arrowColor:"",t.radius?"tui-radius":""],style:{backgroundColor:t.backgroundColor,fontSize:t.size+"rpx",color:t.color,padding:t.padding},attrs:{"hover-class":t.hover?"tui-cell-hover":"","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},1502:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.tui-btn-primary[data-v-7744b5e9]{background:#5677fc!important;color:#fff}.tui-shadow-primary[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(86,119,252,.2)}.tui-btn-danger[data-v-7744b5e9]{background:#eb0909!important;color:#fff}.tui-shadow-danger[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.2)}.tui-btn-warning[data-v-7744b5e9]{background:#fc872d!important;color:#fff}.tui-shadow-warning[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(252,135,45,.2)}.tui-btn-green[data-v-7744b5e9]{background:#35b06a!important;color:#fff}.tui-shadow-green[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(53,176,106,.2)}.tui-btn-blue[data-v-7744b5e9]{background:#007aff!important;color:#fff}.tui-shadow-blue[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(0,122,255,.2)}.tui-btn-white[data-v-7744b5e9]{background:#fff!important;color:#333!important}.tui-btn-gray[data-v-7744b5e9]{background:#bfbfbf!important;color:#fff!important}.tui-btn-black[data-v-7744b5e9]{background:#333!important;color:#fff!important}.tui-shadow-gray[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 hsla(0,0%,74.9%,.2)}.tui-hover-gray[data-v-7744b5e9]{background:#f7f7f9!important}.tui-black-hover[data-v-7744b5e9]{background:#555!important;color:#e5e5e5!important}\n\n/* button start*/.tui-btn[data-v-7744b5e9]{width:100%;position:relative;border:0!important;border-radius:%?6?%;padding-left:0;padding-right:0;overflow:visible}.tui-btn[data-v-7744b5e9]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);box-sizing:border-box;left:0;top:0;border-radius:%?12?%;border:0}.tui-btn-white[data-v-7744b5e9]::after{border:%?1?% solid #bfbfbf}.tui-white-hover[data-v-7744b5e9]{background:#e5e5e5!important;color:#2e2e2e!important}.tui-dark-disabled[data-v-7744b5e9]{opacity:.6!important;color:#fafbfc!important}.tui-dark-disabled-outline[data-v-7744b5e9]{opacity:.5!important}.tui-gray-disabled[data-v-7744b5e9]{background:#f3f3f3!important;color:#919191!important;box-shadow:none}.tui-outline-hover[data-v-7744b5e9]{opacity:.5}.tui-primary-hover[data-v-7744b5e9]{background:#4a67d6!important;color:#e5e5e5!important}.tui-primary-outline[data-v-7744b5e9]::after{border:%?1?% solid #5677fc!important}.tui-primary-outline[data-v-7744b5e9]{color:#5677fc!important;background:transparent}.tui-danger-hover[data-v-7744b5e9]{background:#c80808!important;color:#e5e5e5!important}.tui-danger-outline[data-v-7744b5e9]{color:#eb0909!important;background:transparent}.tui-danger-outline[data-v-7744b5e9]::after{border:%?1?% solid #eb0909!important}.tui-warning-hover[data-v-7744b5e9]{background:#d67326!important;color:#e5e5e5!important}.tui-warning-outline[data-v-7744b5e9]{color:#fc872d!important;background:transparent}.tui-warning-outline[data-v-7744b5e9]::after{border:1px solid #fc872d!important}.tui-green-hover[data-v-7744b5e9]{background:#2d965a!important;color:#e5e5e5!important}.tui-green-outline[data-v-7744b5e9]{color:#35b06a!important;background:transparent}.tui-green-outline[data-v-7744b5e9]::after{border:%?1?% solid #35b06a!important}.tui-blue-hover[data-v-7744b5e9]{background:#0062cc!important;color:#e5e5e5!important}.tui-blue-outline[data-v-7744b5e9]{color:#007aff!important;background:transparent}.tui-blue-outline[data-v-7744b5e9]::after{border:%?1?% solid #007aff!important}\n.tui-btn-gradual[data-v-7744b5e9]{background:-webkit-linear-gradient(left,#ff5926,#f00e2c)!important;background:linear-gradient(90deg,#ff5926,#f00e2c)!important;color:#fff!important}.tui-shadow-gradual[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.15)}\n.tui-gray-hover[data-v-7744b5e9]{background:#a3a3a3!important;color:#898989}\n.tui-gradual-hover[data-v-7744b5e9]{background:-webkit-linear-gradient(left,#d74620,#cd1225)!important;background:linear-gradient(90deg,#d74620,#cd1225)!important;color:#fff!important}\n.tui-gray-outline[data-v-7744b5e9]{color:#999!important;background:transparent!important}.tui-white-outline[data-v-7744b5e9]{color:#fff!important;background:transparent!important}.tui-black-outline[data-v-7744b5e9]{background:transparent!important;color:#333!important}.tui-gray-outline[data-v-7744b5e9]::after{border:%?1?% solid #ccc!important}.tui-white-outline[data-v-7744b5e9]::after{border:1px solid #fff!important}.tui-black-outline[data-v-7744b5e9]::after{border:1px solid #333!important}\n\n/*圆角 */.tui-fillet[data-v-7744b5e9]{border-radius:%?50?%}.tui-btn-white.tui-fillet[data-v-7744b5e9]::after{border-radius:%?98?%}.tui-outline-fillet[data-v-7744b5e9]::after{border-radius:%?98?%}\n\n/*平角*/.tui-rightAngle[data-v-7744b5e9]{border-radius:0}.tui-btn-white.tui-rightAngle[data-v-7744b5e9]::after{border-radius:0}.tui-outline-rightAngle[data-v-7744b5e9]::after{border-radius:0}',""]),t.exports=e},"28ee":function(t,e,a){"use strict";a.r(e);var i=a("066e"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},"2d05":function(t,e,a){"use strict";a.r(e);var i=a("3ed4"),r=a("a8a0");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("fb90");var o,d=a("f0c5"),l=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,"7744b5e9",null,!1,i["a"],o);e["default"]=l.exports},"34c3":function(t,e,a){var i=a("a8fb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("2b458603",i,!0,{sourceMap:!1,shadowMode:!1})},"3b08":function(t,e,a){var i=a("1502");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("aad1d010",i,!0,{sourceMap:!1,shadowMode:!1})},"3e04":function(t,e,a){"use strict";a.r(e);var i=a("7170"),r=a("28ee");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("8456");var o,d=a("f0c5"),l=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,"4e6e8ee0",null,!1,i["a"],o);e["default"]=l.exports},"3ed4":function(t,e,a){"use strict";var i,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"tui-btn",class:[t.plain?"tui-"+t.type+"-outline":"tui-btn-"+(t.type||"primary"),t.getDisabledClass(t.disabled,t.type,t.plain),t.getShapeClass(t.shape,t.plain),t.getShadowClass(t.type,t.shadow,t.plain)],style:{width:t.width,height:t.height,lineHeight:t.height,fontSize:t.size+"rpx",margin:t.margin},attrs:{"hover-class":t.getHoverClass(t.disabled,t.type,t.plain),loading:t.loading,"open-type":t.openType,disabled:t.disabled},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.bindgetuserinfo.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},7170:function(t,e,a){"use strict";var i={tuiListCell:a("d733").default,tuiButton:a("2d05").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tui-safe-area"},[a("v-uni-view",{staticClass:"tui-address"},[t._l(t.addressList,(function(e,i){return[a("tui-list-cell",{key:i+"_0",attrs:{padding:"0"}},[a("v-uni-view",{staticClass:"tui-address-flex"},[a("v-uni-view",{staticClass:"tui-address-left"},[a("v-uni-view",{staticClass:"tui-address-main"},[a("v-uni-view",{staticClass:"tui-address-name tui-ellipsis"},[t._v(t._s(["echo.","王大大","大长腿"][i]))]),a("v-uni-view",{staticClass:"tui-address-tel"},[t._v("138****7708")])],1),a("v-uni-view",{staticClass:"tui-address-detail"},[0===i?a("v-uni-view",{staticClass:"tui-address-label"},[t._v("默认")]):t._e(),2!=i?a("v-uni-view",{staticClass:"tui-address-label"},[t._v(t._s(["公司","住宅","其它"][i]))]):t._e(),a("v-uni-text",[t._v("广东省深圳市南山区高新科技园中区一路")])],1)],1),a("v-uni-view",{staticClass:"tui-address-imgbox"},[a("v-uni-image",{staticClass:"tui-address-img",attrs:{src:"/static/images/mall/my/icon_addr_edit.png"}})],1)],1)],1)]}))],2),a("v-uni-view",{staticClass:"tui-address-new"},[a("tui-button",{attrs:{shadow:!0,shape:"circle",type:"danger",height:"88rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.editAddr.apply(void 0,arguments)}}},[t._v("+ 新增收货地址")])],1)],1)},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},"7d13":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiListCell",props:{arrow:{type:Boolean,default:!1},arrowColor:{type:String,default:""},hover:{type:Boolean,default:!0},unlined:{type:Boolean,default:!1},lineLeft:{type:Boolean,default:!0},lineRight:{type:Boolean,default:!1},padding:{type:String,default:"26rpx 30rpx"},backgroundColor:{type:String,default:"#fff"},size:{type:Number,default:28},color:{type:String,default:"#333"},radius:{type:Boolean,default:!1},arrowRight:{type:Boolean,default:!0},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})}}};e.default=i},8456:function(t,e,a){"use strict";var i=a("34c3"),r=a.n(i);r.a},8767:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.tui-list-cell[data-v-4868316b]{position:relative;width:100%;box-sizing:border-box}.tui-radius[data-v-4868316b]{border-radius:%?6?%;overflow:hidden}.tui-cell-hover[data-v-4868316b]{background-color:#f1f1f1!important}.tui-list-cell[data-v-4868316b]::after{content:"";position:absolute;border-bottom:1px solid #eaeef1;-webkit-transform:scaleY(.5) translateZ(0);transform:scaleY(.5) translateZ(0);-webkit-transform-origin:0 100%;transform-origin:0 100%;bottom:0;right:0;left:0}.tui-line-left[data-v-4868316b]::after{left:%?30?%!important}.tui-line-right[data-v-4868316b]::after{right:%?30?%!important}.tui-cell-unlined[data-v-4868316b]::after{border-bottom:0!important}.tui-cell-arrow[data-v-4868316b]::before{content:" ";height:10px;width:10px;border-width:2px 2px 0 0;border-color:silver;border-style:solid;-webkit-transform:matrix(.5,.5,-.5,.5,0,0);transform:matrix(.5,.5,-.5,.5,0,0);position:absolute;top:50%;margin-top:-6px;right:%?30?%}.tui-arrow-right[data-v-4868316b]::before{right:0!important}.tui-arrow-gray[data-v-4868316b]::before{border-color:#666!important}.tui-arrow-white[data-v-4868316b]::before{border-color:#fff!important}.tui-arrow-warning[data-v-4868316b]::before{border-color:#ff7900!important}.tui-arrow-success[data-v-4868316b]::before{border-color:#19be6b!important}.tui-arrow-danger[data-v-4868316b]::before{border-color:#eb0909!important}',""]),t.exports=e},"8a62":function(t,e,a){"use strict";var i=a("d55d"),r=a.n(i);r.a},a8a0:function(t,e,a){"use strict";a.r(e);var i=a("117e"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},a8fb:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tui-address[data-v-4e6e8ee0]{width:100%;padding-top:%?20?%;padding-bottom:%?160?%}.tui-address-flex[data-v-4e6e8ee0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-address-main[data-v-4e6e8ee0]{width:%?600?%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?30?%;line-height:%?86?%;padding-left:%?30?%}.tui-address-name[data-v-4e6e8ee0]{width:%?120?%;height:%?60?%}.tui-address-tel[data-v-4e6e8ee0]{margin-left:%?10?%}.tui-address-detail[data-v-4e6e8ee0]{font-size:%?24?%;word-break:break-all;padding-bottom:%?25?%;padding-left:%?25?%;padding-right:%?120?%}.tui-address-label[data-v-4e6e8ee0]{padding:%?5?% %?8?%;-webkit-flex-shrink:0;flex-shrink:0;background:#e41f19;border-radius:%?6?%;color:#fff;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?25?%;line-height:%?25?%;-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center;margin-right:%?6?%}.tui-address-imgbox[data-v-4e6e8ee0]{width:%?80?%;height:%?100?%;position:absolute;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;right:%?10?%}.tui-address-img[data-v-4e6e8ee0]{width:%?36?%;height:%?36?%}.tui-address-new[data-v-4e6e8ee0]{width:100%;position:fixed;left:0;bottom:0;z-index:999;padding:%?20?% %?25?% %?30?%;box-sizing:border-box;background:#fafafa}.tui-safe-area[data-v-4e6e8ee0]{padding-bottom:env(safe-area-inset-bottom)}",""]),t.exports=e},d55d:function(t,e,a){var i=a("8767");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("8c977974",i,!0,{sourceMap:!1,shadowMode:!1})},d733:function(t,e,a){"use strict";a.r(e);var i=a("1336"),r=a("fe36");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("8a62");var o,d=a("f0c5"),l=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,"4868316b",null,!1,i["a"],o);e["default"]=l.exports},fb90:function(t,e,a){"use strict";var i=a("3b08"),r=a.n(i);r.a},fe36:function(t,e,a){"use strict";a.r(e);var i=a("7d13"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a}}]);