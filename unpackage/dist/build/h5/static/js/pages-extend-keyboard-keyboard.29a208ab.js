(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-keyboard-keyboard"],{"033c":function(t,e,a){"use strict";var i=a("60cf"),r=a.n(i);r.a},"0531":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".container[data-v-11d22ef4]{padding:%?20?% 0 %?120?% 0;box-sizing:border-box}.header[data-v-11d22ef4]{padding:%?80?% %?90?% %?60?% %?90?%;box-sizing:border-box}.title[data-v-11d22ef4]{font-size:%?34?%;color:#333;font-weight:500}.sub-title[data-v-11d22ef4]{font-size:%?24?%;color:#7a7a7a;padding-top:%?18?%}.tui-btn-box[data-v-11d22ef4]{padding:%?10?% %?40?%;box-sizing:border-box}.tui-keyboard-tips[data-v-11d22ef4]{width:100%;height:%?120?%;line-height:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?30?%;background:#fff;position:relative;color:#333;border:0}.tui-digital-box[data-v-11d22ef4]{background:#fff;padding-bottom:%?50?%;border:0}",""]),t.exports=e},"117e":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiButton",props:{type:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"96rpx"},size:{type:Number,default:32},margin:{type:String,default:"0"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledGray:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},index:{type:[Number,String],default:0}},methods:{handleClick:function(){if(this.disabled)return!1;this.$emit("click",{index:Number(this.index)})},bindgetuserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,a=void 0===e?{}:e;this.$emit("getuserinfo",a)},getShadowClass:function(t,e,a){var i="";return e&&"white"!=t&&!a&&(i="tui-shadow-"+t),i},getDisabledClass:function(t,e,a){var i="";if(t&&"white"!=e){var r=this.disabledGray?"tui-gray-disabled":"tui-dark-disabled";i=a?"tui-dark-disabled-outline":r}return i},getShapeClass:function(t,e){var a="";return"circle"==t?a=e?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(a=e?"tui-outline-rightAngle":"tui-rightAngle"),a},getHoverClass:function(t,e,a){var i="";return t||(i=a?"tui-outline-hover":"tui-"+(e||"primary")+"-hover"),i}}};e.default=i},"12d1":function(t,e,a){"use strict";a.r(e);var i=a("8a9d"),r=a("5011");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("acd7");var o,d=a("f0c5"),u=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,"32ff27c9",null,!1,i["a"],o);e["default"]=u.exports},1502:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.tui-btn-primary[data-v-7744b5e9]{background:#5677fc!important;color:#fff}.tui-shadow-primary[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(86,119,252,.2)}.tui-btn-danger[data-v-7744b5e9]{background:#eb0909!important;color:#fff}.tui-shadow-danger[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.2)}.tui-btn-warning[data-v-7744b5e9]{background:#fc872d!important;color:#fff}.tui-shadow-warning[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(252,135,45,.2)}.tui-btn-green[data-v-7744b5e9]{background:#35b06a!important;color:#fff}.tui-shadow-green[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(53,176,106,.2)}.tui-btn-blue[data-v-7744b5e9]{background:#007aff!important;color:#fff}.tui-shadow-blue[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(0,122,255,.2)}.tui-btn-white[data-v-7744b5e9]{background:#fff!important;color:#333!important}.tui-btn-gray[data-v-7744b5e9]{background:#bfbfbf!important;color:#fff!important}.tui-btn-black[data-v-7744b5e9]{background:#333!important;color:#fff!important}.tui-shadow-gray[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 hsla(0,0%,74.9%,.2)}.tui-hover-gray[data-v-7744b5e9]{background:#f7f7f9!important}.tui-black-hover[data-v-7744b5e9]{background:#555!important;color:#e5e5e5!important}\n\n/* button start*/.tui-btn[data-v-7744b5e9]{width:100%;position:relative;border:0!important;border-radius:%?6?%;padding-left:0;padding-right:0;overflow:visible}.tui-btn[data-v-7744b5e9]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);box-sizing:border-box;left:0;top:0;border-radius:%?12?%;border:0}.tui-btn-white[data-v-7744b5e9]::after{border:%?1?% solid #bfbfbf}.tui-white-hover[data-v-7744b5e9]{background:#e5e5e5!important;color:#2e2e2e!important}.tui-dark-disabled[data-v-7744b5e9]{opacity:.6!important;color:#fafbfc!important}.tui-dark-disabled-outline[data-v-7744b5e9]{opacity:.5!important}.tui-gray-disabled[data-v-7744b5e9]{background:#f3f3f3!important;color:#919191!important;box-shadow:none}.tui-outline-hover[data-v-7744b5e9]{opacity:.5}.tui-primary-hover[data-v-7744b5e9]{background:#4a67d6!important;color:#e5e5e5!important}.tui-primary-outline[data-v-7744b5e9]::after{border:%?1?% solid #5677fc!important}.tui-primary-outline[data-v-7744b5e9]{color:#5677fc!important;background:transparent}.tui-danger-hover[data-v-7744b5e9]{background:#c80808!important;color:#e5e5e5!important}.tui-danger-outline[data-v-7744b5e9]{color:#eb0909!important;background:transparent}.tui-danger-outline[data-v-7744b5e9]::after{border:%?1?% solid #eb0909!important}.tui-warning-hover[data-v-7744b5e9]{background:#d67326!important;color:#e5e5e5!important}.tui-warning-outline[data-v-7744b5e9]{color:#fc872d!important;background:transparent}.tui-warning-outline[data-v-7744b5e9]::after{border:1px solid #fc872d!important}.tui-green-hover[data-v-7744b5e9]{background:#2d965a!important;color:#e5e5e5!important}.tui-green-outline[data-v-7744b5e9]{color:#35b06a!important;background:transparent}.tui-green-outline[data-v-7744b5e9]::after{border:%?1?% solid #35b06a!important}.tui-blue-hover[data-v-7744b5e9]{background:#0062cc!important;color:#e5e5e5!important}.tui-blue-outline[data-v-7744b5e9]{color:#007aff!important;background:transparent}.tui-blue-outline[data-v-7744b5e9]::after{border:%?1?% solid #007aff!important}\n.tui-btn-gradual[data-v-7744b5e9]{background:-webkit-linear-gradient(left,#ff5926,#f00e2c)!important;background:linear-gradient(90deg,#ff5926,#f00e2c)!important;color:#fff!important}.tui-shadow-gradual[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.15)}\n.tui-gray-hover[data-v-7744b5e9]{background:#a3a3a3!important;color:#898989}\n.tui-gradual-hover[data-v-7744b5e9]{background:-webkit-linear-gradient(left,#d74620,#cd1225)!important;background:linear-gradient(90deg,#d74620,#cd1225)!important;color:#fff!important}\n.tui-gray-outline[data-v-7744b5e9]{color:#999!important;background:transparent!important}.tui-white-outline[data-v-7744b5e9]{color:#fff!important;background:transparent!important}.tui-black-outline[data-v-7744b5e9]{background:transparent!important;color:#333!important}.tui-gray-outline[data-v-7744b5e9]::after{border:%?1?% solid #ccc!important}.tui-white-outline[data-v-7744b5e9]::after{border:1px solid #fff!important}.tui-black-outline[data-v-7744b5e9]::after{border:1px solid #333!important}\n\n/*圆角 */.tui-fillet[data-v-7744b5e9]{border-radius:%?50?%}.tui-btn-white.tui-fillet[data-v-7744b5e9]::after{border-radius:%?98?%}.tui-outline-fillet[data-v-7744b5e9]::after{border-radius:%?98?%}\n\n/*平角*/.tui-rightAngle[data-v-7744b5e9]{border-radius:0}.tui-btn-white.tui-rightAngle[data-v-7744b5e9]::after{border-radius:0}.tui-outline-rightAngle[data-v-7744b5e9]::after{border-radius:0}',""]),t.exports=e},"2bb5":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiKeyboard",props:{mask:{type:Boolean,default:!0},show:{type:Boolean,default:!1},action:{type:Boolean,default:!0},radius:{type:Boolean,default:!1}},data:function(){return{itemList:[1,2,3,4,5,6,7,8,9,10,11,12]}},methods:{getKeyBoard:function(t,e){var a=t+1;return 9==t?a=e?"取消":"清除":10==t&&(a=0),a},handleClose:function(){this.show&&this.$emit("close",{})},handleClick:function(t){if(this.show){var e=t.currentTarget.dataset;this.$emit("click",{index:Number(e.index)})}}}};e.default=i},"2d05":function(t,e,a){"use strict";a.r(e);var i=a("3ed4"),r=a("a8a0");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("fb90");var o,d=a("f0c5"),u=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,"7744b5e9",null,!1,i["a"],o);e["default"]=u.exports},"3b08":function(t,e,a){var i=a("1502");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("aad1d010",i,!0,{sourceMap:!1,shadowMode:!1})},"3c5e":function(t,e,a){"use strict";a.r(e);var i=a("a0b0"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},"3ed4":function(t,e,a){"use strict";var i,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"tui-btn",class:[t.plain?"tui-"+t.type+"-outline":"tui-btn-"+(t.type||"primary"),t.getDisabledClass(t.disabled,t.type,t.plain),t.getShapeClass(t.shape,t.plain),t.getShadowClass(t.type,t.shadow,t.plain)],style:{width:t.width,height:t.height,lineHeight:t.height,fontSize:t.size+"rpx",margin:t.margin},attrs:{"hover-class":t.getHoverClass(t.disabled,t.type,t.plain),loading:t.loading,"open-type":t.openType,disabled:t.disabled},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.bindgetuserinfo.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},"412a":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@font-face{font-family:keyboardFont;src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAASgAA0AAAAABugAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEhAAAABoAAAAch/nJvUdERUYAAARkAAAAHgAAAB4AKQAKT1MvMgAAAZwAAABDAAAAVj4mSapjbWFwAAAB8AAAAD4AAAFCAA/rY2dhc3AAAARcAAAACAAAAAj//wADZ2x5ZgAAAjwAAACsAAAA0BLVU2FoZWFkAAABMAAAAC0AAAA2FXPmsWhoZWEAAAFgAAAAHAAAACQH3gOFaG10eAAAAeAAAAAOAAAAEAwAAABsb2NhAAACMAAAAAoAAAAKAGgAAG1heHAAAAF8AAAAHwAAACABEQBLbmFtZQAAAugAAAFJAAACiCnmEVVwb3N0AAAENAAAACgAAAA6nLlLs3jaY2BkYGAAYukqK754fpuvDNwsDCBwU+tiFBKtwMLA9ABIczAwgUQB4ccH+gAAAHjaY2BkYGBu+N/AEMPCAAJAkpEBFbAAAEcKAm142mNgZGBgYGGwZ2BmAAEmIOYCQgaG/2A+AwAPIgFdAHjaY2BkYWCcwMDKwMDUyXSGgYGhH0IzvmYwYuQAijKwMjNgBQFprikMDs93PN/B3PC/gSGGuYGhASjMCJIDAPenDU0AeNpjYYAAFigGAACAAA0AAHjaY2BgYGaAYBkGRgYQsAHyGMF8FgYFIM0ChED+8x3//0NICW+oSgZGNgYYk4GRCUgwMaACRoZhDwAItAhZAAAAAAAAAAAAAABoAAB42l3MTQqCUBSG4fNpqBxECS/+YFTXRGcFKteZjW0nuoqWVtOgPbgKZ1cqaBDN3snzkklE+xUZEwUkqSOCzGx4EGGEsJYd2vURgQdbomhayC0iu8h8lEVmiR1sS4TVGVFYqeaEVjXmVT8TsWjf83yYIjFq1QM9I0/1c9HMMI06zfHgmMeRY8HDwOKnjSlYZvdQ5u4yB+gVbqrX97cAOxsHn9GF/9G3iV4WbSWBeNp9kD1OAzEQhZ/zByQSQiCoXVEA2vyUKRMp9Ailo0g23pBo1155nUg5AS0VB6DlGByAGyDRcgpelkmTImvt6PObmeexAZzjGwr/3yXuhBWO8ShcwREy4Sr1F+Ea+V24jhY+hRvUf4SbuFUD4RYu1BsdVO2Eu5vSbcsKZxgIV3CKJ+Eq9ZVwjfwqXMcVPoQb1L+EmxjjV7iFa2WpDOFhMEFgnEFjig3jAjEcLJIyBtahOfRmEsxMTzd6ETubOBso71dilwMeaDnngCntPbdmvkon/mDLgdSYbh4FS7YpjS4idCgbXyyc1d2oc7D9nu22tNi/a4E1x+xRDWzU/D3bM9JIbAyvkJI18jK3pBJTj2hrrPG7ZynW814IiU68y/SIx5o0dTr3bmniwOLn8owcfbS5kj33qBw+Y1kIeb/dTsQgil2GP5PYcRkAAAB42mNgYoAALjDJyIAOWMCiTIxM/FmZiXkFiXnxxRmJeckZpQA1nQZRAAAAAf//AAIAAQAAAAwAAAAWAAAAAgABAAMAAwABAAQAAAACAAAAAHjaY2BgYGQAgqtL1DlA9E2ti1EwGgA9dwYGAAA=) format("woff");font-weight:400;font-style:normal}.tui-icon[data-v-32ff27c9]{font-family:keyboardFont!important;font-size:22px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:1;color:#333}.tui-keyboard-delete[data-v-32ff27c9]:before{content:"\\e7b8"}.tui-keyboard-mask[data-v-32ff27c9]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:998;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-32ff27c9]{opacity:1;visibility:visible}.tui-keyboard[data-v-32ff27c9]{width:100%;position:fixed;left:0;right:0;bottom:0;z-index:999;padding-bottom:env(safe-area-inset-bottom);background-color:#fff}.tui-keyboard-radius[data-v-32ff27c9]{border-top-left-radius:%?16?%;border-top-right-radius:%?16?%;overflow:hidden}.tui-keyboard-action[data-v-32ff27c9]{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.tui-keyboard-show[data-v-32ff27c9]{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}.tui-bg-gray[data-v-32ff27c9]{background-color:#e7e6eb!important}.tui-keyboard-grids[data-v-32ff27c9]{width:100%;position:relative;overflow:hidden;display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.tui-keyboard-grids[data-v-32ff27c9]::after{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #eaeef1;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tui-keyboard-grid[data-v-32ff27c9]{position:relative;padding:%?24?% %?20?%;box-sizing:border-box;background-color:#fff;width:33.33333333%}.tui-keyboard-grid[data-v-32ff27c9]:nth-of-type(3n)::before{width:0;border-right:0}.tui-keyboard-grid[data-v-32ff27c9]::before{content:" ";position:absolute;right:0;top:0;width:1px;bottom:0;border-right:1px solid #eaeef1;-webkit-transform-origin:100% 0;transform-origin:100% 0;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.tui-keyboard-grid[data-v-32ff27c9]::after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #eaeef1;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tui-grid-bottom[data-v-32ff27c9]::after{height:0!important;border-bottom:0!important}.tui-keyboard-hover[data-v-32ff27c9]{background-color:#f7f7f9!important}.tui-keyboard-item[data-v-32ff27c9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?48?%;height:%?60?%;color:#000}.tui-fontsize-32[data-v-32ff27c9]{font-size:%?32?%;color:#333!important}',""]),t.exports=e},"4fe4":function(t,e,a){"use strict";var i={tuiButton:a("2d05").default,tuiKeyboard:a("12d1").default,tuiKeyboardInput:a("fceb").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"title"},[t._v("Digital keyboard")]),a("v-uni-view",{staticClass:"sub-title"},[t._v("数字键盘")])],1),a("v-uni-view",{staticClass:"tui-btn-box"},[a("tui-button",{attrs:{margin:"36rpx 0 0",type:"white",shape:"circle"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchKeyboard(6)}}},[t._v("6位数密码")]),a("tui-button",{attrs:{margin:"36rpx 0 0",type:"white",shape:"circle"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchKeyboard(4)}}},[t._v("4位数密码")]),a("tui-button",{attrs:{margin:"36rpx 0 0",type:"white",shape:"circle"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lockscreen.apply(void 0,arguments)}}},[t._v("锁屏密码")])],1),a("tui-keyboard",{attrs:{radius:t.radius,show:t.show},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeKeyboard.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.keyboardClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"tui-digital-box"},[a("v-uni-view",{staticClass:"tui-keyboard-tips"},[t._v("请输入密码")]),a("tui-keyboard-input",{attrs:{inputvalue:t.pwdArr}})],1)],1)],1)},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},5011:function(t,e,a){"use strict";a.r(e);var i=a("2bb5"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},"60cf":function(t,e,a){var i=a("0531");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("73879939",i,!0,{sourceMap:!1,shadowMode:!1})},7432:function(t,e,a){"use strict";a.r(e);var i=a("4fe4"),r=a("3c5e");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("033c");var o,d=a("f0c5"),u=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,"11d22ef4",null,!1,i["a"],o);e["default"]=u.exports},"8a9d":function(t,e,a){"use strict";var i,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t.mask?a("v-uni-view",{staticClass:"tui-keyboard-mask",class:[t.show?"tui-mask-show":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClose.apply(void 0,arguments)}}}):t._e(),a("v-uni-view",{staticClass:"tui-keyboard",class:{"tui-keyboard-radius":t.radius,"tui-keyboard-action":t.action,"tui-keyboard-show":t.show}},[t._t("default"),a("v-uni-view",{staticClass:"tui-keyboard-grids"},t._l(t.itemList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"tui-keyboard-grid",class:{"tui-bg-gray":9==i||11==i},attrs:{"hover-class":"tui-keyboard-hover","hover-stay-time":150,"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[i<11?a("v-uni-view",{staticClass:"tui-keyboard-item",class:{"tui-fontsize-32":9==i}},[t._v(t._s(t.getKeyBoard(i,t.action)))]):a("v-uni-view",{staticClass:"tui-keyboard-item"},[a("v-uni-view",{staticClass:"tui-icon tui-keyboard-delete"})],1)],1)})),1)],2)],1)},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},a0b0:function(t,e,a){"use strict";a("a15b"),a("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{show:!1,numberArr:[],pwdArr:["","","","","",""],temp:["","","","","",""],radius:!1}},methods:{switchKeyboard:function(t){var e=t,a=["","","","","",""],i=!1;4==e&&(a=["","","",""],i=!0),this.pwdArr=a,this.temp=a,this.numberArr=[],this.radius=i,this.show=!0},closeKeyboard:function(){this.show=!1,this.numberArr=[],this.pwdArr=this.temp},getPwd:function(){var t=this;this.numberArr.length===this.pwdArr.length&&(uni.showLoading({title:"模拟提交...",mask:!0}),setTimeout((function(){var e=t.numberArr.join("");t.closeKeyboard(),t.tui.toast("您输入的密码为："+e)}),800))},keyboardClick:function(t){var e=this.numberArr,a=this.pwdArr,i=t.index;if(e.length!==a.length&&void 0!=i)if(9!=i){if(11==i){var r=e.length;r?a.splice(r-1,1,""):a=this.temp,e.pop()}else 10==i?(e.push(0),a.splice(e.length-1,1,"●")):(e.push(i+1),a.splice(e.length-1,1,"●"));this.numberArr=e,this.pwdArr=a,this.getPwd()}else this.closeKeyboard()},lockscreen:function(){uni.navigateTo({url:"../lockscreen/lockscreen"})}}};e.default=i},a8a0:function(t,e,a){"use strict";a.r(e);var i=a("117e"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},acd7:function(t,e,a){"use strict";var i=a("d329"),r=a.n(i);r.a},b271:function(t,e,a){"use strict";var i=a("f026"),r=a.n(i);r.a},be3a:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tui-pwd-box[data-v-1c15c8d8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;vertical-align:top}.tui-inner-box[data-v-1c15c8d8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-input[data-v-1c15c8d8]{height:%?80?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-right:%?20?%;border-bottom:2px solid #666}.tui-margin-right[data-v-1c15c8d8]{margin-right:%?30?%}.tui-input[data-v-1c15c8d8]:last-child{margin-right:0!important}",""]),t.exports=e},d329:function(t,e,a){var i=a("412a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("0e1fc6fa",i,!0,{sourceMap:!1,shadowMode:!1})},de15:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiKeyboardInput",props:{backgroundColor:{type:String,default:"#fff"},size:{type:Number,default:32},color:{type:String,default:"#333"},inputvalue:{type:Array,default:["","","","","",""]}},data:function(){return{}}};e.default=i},ed67:function(t,e,a){"use strict";a.r(e);var i=a("de15"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},eec5:function(t,e,a){"use strict";var i,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tui-keyboard-input tui-pwd-box",style:{backgroundColor:t.backgroundColor}},[a("v-uni-view",{staticClass:"tui-inner-box"},t._l(t.inputvalue,(function(e,i){return a("v-uni-view",{key:i,staticClass:"tui-input",class:[4===t.inputvalue.length?"tui-margin-right":""],style:{fontSize:t.size+"rpx",color:t.color,width:(4===t.inputvalue.length?90:70)+"rpx"}},[t._v(t._s(e))])})),1)],1)},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},f026:function(t,e,a){var i=a("be3a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("e2320d5c",i,!0,{sourceMap:!1,shadowMode:!1})},fb90:function(t,e,a){"use strict";var i=a("3b08"),r=a.n(i);r.a},fceb:function(t,e,a){"use strict";a.r(e);var i=a("eec5"),r=a("ed67");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("b271");var o,d=a("f0c5"),u=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,"1c15c8d8",null,!1,i["a"],o);e["default"]=u.exports}}]);