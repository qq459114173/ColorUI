(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-circular-progress-circular-progress"],{"117e":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiButton",props:{type:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"96rpx"},size:{type:Number,default:32},margin:{type:String,default:"0"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledGray:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},index:{type:[Number,String],default:0}},methods:{handleClick:function(){if(this.disabled)return!1;this.$emit("click",{index:Number(this.index)})},bindgetuserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,a=void 0===e?{}:e;this.$emit("getuserinfo",a)},getShadowClass:function(t,e,a){var i="";return e&&"white"!=t&&!a&&(i="tui-shadow-"+t),i},getDisabledClass:function(t,e,a){var i="";if(t&&"white"!=e){var r=this.disabledGray?"tui-gray-disabled":"tui-dark-disabled";i=a?"tui-dark-disabled-outline":r}return i},getShapeClass:function(t,e){var a="";return"circle"==t?a=e?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(a=e?"tui-outline-rightAngle":"tui-rightAngle"),a},getHoverClass:function(t,e,a){var i="";return t||(i=a?"tui-outline-hover":"tui-"+(e||"primary")+"-hover"),i}}};e.default=i},1502:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.tui-btn-primary[data-v-7744b5e9]{background:#5677fc!important;color:#fff}.tui-shadow-primary[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(86,119,252,.2)}.tui-btn-danger[data-v-7744b5e9]{background:#eb0909!important;color:#fff}.tui-shadow-danger[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.2)}.tui-btn-warning[data-v-7744b5e9]{background:#fc872d!important;color:#fff}.tui-shadow-warning[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(252,135,45,.2)}.tui-btn-green[data-v-7744b5e9]{background:#35b06a!important;color:#fff}.tui-shadow-green[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(53,176,106,.2)}.tui-btn-blue[data-v-7744b5e9]{background:#007aff!important;color:#fff}.tui-shadow-blue[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(0,122,255,.2)}.tui-btn-white[data-v-7744b5e9]{background:#fff!important;color:#333!important}.tui-btn-gray[data-v-7744b5e9]{background:#bfbfbf!important;color:#fff!important}.tui-btn-black[data-v-7744b5e9]{background:#333!important;color:#fff!important}.tui-shadow-gray[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 hsla(0,0%,74.9%,.2)}.tui-hover-gray[data-v-7744b5e9]{background:#f7f7f9!important}.tui-black-hover[data-v-7744b5e9]{background:#555!important;color:#e5e5e5!important}\n\n/* button start*/.tui-btn[data-v-7744b5e9]{width:100%;position:relative;border:0!important;border-radius:%?6?%;padding-left:0;padding-right:0;overflow:visible}.tui-btn[data-v-7744b5e9]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);box-sizing:border-box;left:0;top:0;border-radius:%?12?%;border:0}.tui-btn-white[data-v-7744b5e9]::after{border:%?1?% solid #bfbfbf}.tui-white-hover[data-v-7744b5e9]{background:#e5e5e5!important;color:#2e2e2e!important}.tui-dark-disabled[data-v-7744b5e9]{opacity:.6!important;color:#fafbfc!important}.tui-dark-disabled-outline[data-v-7744b5e9]{opacity:.5!important}.tui-gray-disabled[data-v-7744b5e9]{background:#f3f3f3!important;color:#919191!important;box-shadow:none}.tui-outline-hover[data-v-7744b5e9]{opacity:.5}.tui-primary-hover[data-v-7744b5e9]{background:#4a67d6!important;color:#e5e5e5!important}.tui-primary-outline[data-v-7744b5e9]::after{border:%?1?% solid #5677fc!important}.tui-primary-outline[data-v-7744b5e9]{color:#5677fc!important;background:transparent}.tui-danger-hover[data-v-7744b5e9]{background:#c80808!important;color:#e5e5e5!important}.tui-danger-outline[data-v-7744b5e9]{color:#eb0909!important;background:transparent}.tui-danger-outline[data-v-7744b5e9]::after{border:%?1?% solid #eb0909!important}.tui-warning-hover[data-v-7744b5e9]{background:#d67326!important;color:#e5e5e5!important}.tui-warning-outline[data-v-7744b5e9]{color:#fc872d!important;background:transparent}.tui-warning-outline[data-v-7744b5e9]::after{border:1px solid #fc872d!important}.tui-green-hover[data-v-7744b5e9]{background:#2d965a!important;color:#e5e5e5!important}.tui-green-outline[data-v-7744b5e9]{color:#35b06a!important;background:transparent}.tui-green-outline[data-v-7744b5e9]::after{border:%?1?% solid #35b06a!important}.tui-blue-hover[data-v-7744b5e9]{background:#0062cc!important;color:#e5e5e5!important}.tui-blue-outline[data-v-7744b5e9]{color:#007aff!important;background:transparent}.tui-blue-outline[data-v-7744b5e9]::after{border:%?1?% solid #007aff!important}\n.tui-btn-gradual[data-v-7744b5e9]{background:-webkit-linear-gradient(left,#ff5926,#f00e2c)!important;background:linear-gradient(90deg,#ff5926,#f00e2c)!important;color:#fff!important}.tui-shadow-gradual[data-v-7744b5e9]{box-shadow:0 %?10?% %?14?% 0 rgba(235,9,9,.15)}\n.tui-gray-hover[data-v-7744b5e9]{background:#a3a3a3!important;color:#898989}\n.tui-gradual-hover[data-v-7744b5e9]{background:-webkit-linear-gradient(left,#d74620,#cd1225)!important;background:linear-gradient(90deg,#d74620,#cd1225)!important;color:#fff!important}\n.tui-gray-outline[data-v-7744b5e9]{color:#999!important;background:transparent!important}.tui-white-outline[data-v-7744b5e9]{color:#fff!important;background:transparent!important}.tui-black-outline[data-v-7744b5e9]{background:transparent!important;color:#333!important}.tui-gray-outline[data-v-7744b5e9]::after{border:%?1?% solid #ccc!important}.tui-white-outline[data-v-7744b5e9]::after{border:1px solid #fff!important}.tui-black-outline[data-v-7744b5e9]::after{border:1px solid #333!important}\n\n/*圆角 */.tui-fillet[data-v-7744b5e9]{border-radius:%?50?%}.tui-btn-white.tui-fillet[data-v-7744b5e9]::after{border-radius:%?98?%}.tui-outline-fillet[data-v-7744b5e9]::after{border-radius:%?98?%}\n\n/*平角*/.tui-rightAngle[data-v-7744b5e9]{border-radius:0}.tui-btn-white.tui-rightAngle[data-v-7744b5e9]::after{border-radius:0}.tui-outline-rightAngle[data-v-7744b5e9]::after{border-radius:0}',""]),t.exports=e},1525:function(t,e,a){"use strict";a.r(e);var i=a("e510"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},"2af3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{sAngle:-Math.PI,progress:20,progress2:0,status:[!1,!1,!1,!1,!1,!1]}},methods:{setProgress:function(){var t=this.progress+20;t>100||(this.progress=t)},change:function(t){this.progress2=2*t.percentage},switchChange:function(t,e){this.$set(this.status,t-1,e.target.value)},circular:function(){this.tui.href("../round-progress/round-progress")}}};e.default=i},"2d05":function(t,e,a){"use strict";a.r(e);var i=a("3ed4"),r=a("a8a0");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("fb90");var o,s=a("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"7744b5e9",null,!1,i["a"],o);e["default"]=u.exports},"3b08":function(t,e,a){var i=a("1502");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("aad1d010",i,!0,{sourceMap:!1,shadowMode:!1})},"3ed4":function(t,e,a){"use strict";var i,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"tui-btn",class:[t.plain?"tui-"+t.type+"-outline":"tui-btn-"+(t.type||"primary"),t.getDisabledClass(t.disabled,t.type,t.plain),t.getShapeClass(t.shape,t.plain),t.getShadowClass(t.type,t.shadow,t.plain)],style:{width:t.width,height:t.height,lineHeight:t.height,fontSize:t.size+"rpx",margin:t.margin},attrs:{"hover-class":t.getHoverClass(t.disabled,t.type,t.plain),loading:t.loading,"open-type":t.openType,disabled:t.disabled},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.bindgetuserinfo.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},4820:function(t,e,a){var i=a("8740");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("5df7d39e",i,!0,{sourceMap:!1,shadowMode:!1})},"48d4":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tui-circular-container[data-v-2352205f],\n.tui-circular-default[data-v-2352205f]{position:relative}.tui-circular-progress[data-v-2352205f]{position:absolute;left:0;top:0;z-index:10}",""]),t.exports=e},"80af":function(t,e,a){"use strict";var i,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tui-circular-container",style:{width:t.diam+"px",height:(t.height||t.diam)+"px"}},[t.defaultShow?a("v-uni-canvas",{staticClass:"tui-circular-default",style:{width:t.diam+"px",height:(t.height||t.diam)+"px"},attrs:{"canvas-id":t.defaultCanvasId,id:t.defaultCanvasId}}):t._e(),a("v-uni-canvas",{staticClass:"tui-circular-progress",style:{width:t.diam+"px",height:(t.height||t.diam)+"px"},attrs:{"canvas-id":t.progressCanvasId,id:t.progressCanvasId}}),t._t("default")],2)},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},8740:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".container[data-v-3c6c8f9f]{padding:%?20?% 0 %?120?% 0;box-sizing:border-box}.header[data-v-3c6c8f9f]{padding:%?80?% %?90?% %?60?% %?90?%;box-sizing:border-box}.title[data-v-3c6c8f9f]{font-size:%?34?%;color:#333;font-weight:500}.sub-title[data-v-3c6c8f9f]{font-size:%?24?%;color:#7a7a7a;padding-top:%?18?%}.tui-title[data-v-3c6c8f9f]{width:100%;padding:%?40?% %?30?% %?30?%;box-sizing:border-box;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-switch[data-v-3c6c8f9f]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:100% center;transform-origin:100% center}.tui-progress-box[data-v-3c6c8f9f]{width:100%;padding:0 %?30?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-progress-text[data-v-3c6c8f9f]{width:100%;height:130px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-top:%?40?%;position:absolute;left:0;top:0}.tui-progress-num[data-v-3c6c8f9f]{font-size:%?60?%;padding-top:%?20?%}.tui-new-version[data-v-3c6c8f9f]{font-size:%?24?%;color:#5677fc;padding-top:%?18?%}",""]),t.exports=e},"8c48":function(t,e,a){"use strict";a.r(e);var i=a("2af3"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},a8a0:function(t,e,a){"use strict";a.r(e);var i=a("117e"),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},b1be:function(t,e,a){"use strict";var i={tuiCircularProgress:a("ccef").default,tuiButton:a("2d05").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"title"},[t._v("Circular Progress")]),a("v-uni-view",{staticClass:"sub-title"},[t._v("圆形进度条，可设置大小颜色等基本样式，可设置动画执行时间...")]),a("v-uni-view",{staticClass:"tui-new-version",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.circular.apply(void 0,arguments)}}},[t._v("切换至renderjs版本进度条")])],1),a("v-uni-view",{staticClass:"tui-title"},[t._v("默认进度条"),a("v-uni-switch",{staticClass:"tui-switch",attrs:{color:"#5677fc"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(1,e)}}})],1),t.status[0]?a("v-uni-view",{staticClass:"tui-progress-box"},[a("tui-circular-progress",{attrs:{percentage:0}}),a("tui-circular-progress",{attrs:{progressColor:"#EB0909",fontColor:"#EB0909",percentage:70}}),a("tui-circular-progress",{attrs:{progressColor:"#19be6b",fontColor:"#19be6b",percentage:100}})],1):t._e(),a("v-uni-view",{staticClass:"tui-title"},[t._v("不显示进度 | 自定义文字 | 换底色"),a("v-uni-switch",{staticClass:"tui-switch",attrs:{color:"#5677fc"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(2,e)}}})],1),t.status[1]?a("v-uni-view",{staticClass:"tui-progress-box"},[a("tui-circular-progress",{attrs:{fontShow:!1,progressColor:"#ff7900",fontColor:"#ff7900",defaultColor:"rgba(255,121,0,0.1)",percentage:50}}),a("tui-circular-progress",{attrs:{percentText:"拼团",progressColor:"#EB0909",fontColor:"#EB0909",defaultColor:"rgba(235,9,9,0.1)",percentage:80}}),a("tui-circular-progress",{attrs:{percentText:"投标",progressColor:"#19be6b",fontColor:"#19be6b",defaultColor:"rgba(25,190,107,0.1)",percentage:80}})],1):t._e(),a("v-uni-view",{staticClass:"tui-title"},[t._v("渐变色 | 无底色"),a("v-uni-switch",{staticClass:"tui-switch",attrs:{color:"#5677fc"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(3,e)}}})],1),t.status[2]?a("v-uni-view",{staticClass:"tui-progress-box"},[a("tui-circular-progress",{attrs:{defaultShow:!1,progressColor:"#ff7900",fontColor:"#5677fc",gradualColor:"#5677fc",percentage:80}}),a("tui-circular-progress",{attrs:{progressColor:"#EB0909",fontColor:"#EB0909",gradualColor:"#ff7900",percentage:100}})],1):t._e(),a("v-uni-view",{staticClass:"tui-title"},[t._v("改变大小"),a("v-uni-switch",{staticClass:"tui-switch",attrs:{color:"#5677fc"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(4,e)}}})],1),t.status[3]?a("v-uni-view",{staticClass:"tui-progress-box"},[a("tui-circular-progress",{attrs:{percentage:60,diam:80,fontSize:16}}),a("tui-circular-progress",{attrs:{percentage:60,diam:100,lineWidth:10,fontSize:20}})],1):t._e(),a("v-uni-view",{staticClass:"tui-title"},[t._v("弧度的方向逆时针（100-20）"),a("v-uni-switch",{staticClass:"tui-switch",attrs:{color:"#5677fc"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(5,e)}}})],1),t.status[4]?a("v-uni-view",{staticClass:"tui-progress-box"},[a("tui-circular-progress",{attrs:{percentage:t.progress,counterclockwise:!0,activeMode:"forwards"}}),a("tui-button",{attrs:{type:"green",disabled:100===t.progress,disabledGray:!0,width:"220rpx",height:"80rpx",margin:"0 0 0 40rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setProgress.apply(void 0,arguments)}}},[t._v("进度控制-20")])],1):t._e(),a("v-uni-view",{staticClass:"tui-title"},[t._v("半圆进度"),a("v-uni-switch",{staticClass:"tui-switch",attrs:{color:"#5677fc"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange(6,e)}}})],1),t.status[5]?a("v-uni-view",{staticClass:"tui-progress-box"},[a("tui-circular-progress",{attrs:{fontShow:!1,percentage:40,sAngle:t.sAngle,diam:240,height:130,lineWidth:12,progressColor:"#19be6b",fontColor:"#19be6b",defaultColor:"rgba(25,190,107,0.1)"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"tui-progress-text"},[a("v-uni-view",[t._v("血压测量进度")]),a("v-uni-view",{staticClass:"tui-progress-num"},[t._v(t._s(t.progress2)+"%")])],1)],1)],1):t._e()],1)},n=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},c283:function(t,e,a){var i=a("48d4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("08261507",i,!0,{sourceMap:!1,shadowMode:!1})},ccef:function(t,e,a){"use strict";a.r(e);var i=a("80af"),r=a("1525");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("d195");var o,s=a("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"2352205f",null,!1,i["a"],o);e["default"]=u.exports},d195:function(t,e,a){"use strict";var i=a("c283"),r=a.n(i);r.a},d34e:function(t,e,a){"use strict";var i=a("4820"),r=a.n(i);r.a},deaf:function(t,e,a){"use strict";a.r(e);var i=a("b1be"),r=a("8c48");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("d34e");var o,s=a("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"3c6c8f9f",null,!1,i["a"],o);e["default"]=u.exports},e510:function(t,e,a){"use strict";a("a9e3"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiCircularProgress",props:{diam:{type:Number,default:60},height:{type:Number,default:0},lineWidth:{type:Number,default:4},lineCap:{type:String,default:"round"},fontSize:{type:Number,default:12},fontColor:{type:String,default:"#5677fc"},fontShow:{type:Boolean,default:!0},percentText:{type:String,default:""},defaultShow:{type:Boolean,default:!0},defaultColor:{type:String,default:"#CCC"},progressColor:{type:String,default:"#5677fc"},gradualColor:{type:String,default:""},sAngle:{type:Number,default:-Math.PI/2},counterclockwise:{type:Boolean,default:!1},percentage:{type:Number,default:0},multiple:{type:Number,default:1},duration:{type:Number,default:800},activeMode:{type:String,default:"backwards"}},watch:{percentage:function(t){this.initDraw()}},data:function(){return{progressCanvasId:this.getCanvasId(),defaultCanvasId:this.getCanvasId(),progressContext:null,linearGradient:null,startPercentage:0}},mounted:function(){this.initDraw(!0)},methods:{initDraw:function(t){var e="backwards"===this.activeMode?0:this.startPercentage;this.defaultShow&&t&&this.drawDefaultCircular(),this.drawProgressCircular(e)},drawDefaultCircular:function(){var t=uni.createCanvasContext(this.defaultCanvasId,this);t.setLineWidth(this.lineWidth),t.setStrokeStyle(this.defaultColor);var e=Math.PI*(this.height?1:2)+this.sAngle;this.drawArc(t,e)},drawProgressCircular:function(t){var e=this,a=this.progressContext,i=this.linearGradient;a||(a=uni.createCanvasContext(this.progressCanvasId,this),i=a.createLinearGradient(0,0,this.diam,0),i.addColorStop("0",this.progressColor),this.gradualColor&&i.addColorStop("1",this.gradualColor),this.progressContext=a,this.linearGradient=i),a.setLineWidth(this.lineWidth),a.setStrokeStyle(i);var r=this.duration/this.percentage;if((this.percentage>0||!this.fontShow)&&(t=this.duration<50?this.percentage-1:t,t++,t>this.percentage))this.$emit("end",{canvasId:this.progressCanvasId});else{if(this.fontShow){a.setFontSize(this.fontSize),a.setFillStyle(this.fontColor),a.setTextAlign("center"),a.setTextBaseline("middle");var n=this.percentText;n||(n=this.counterclockwise?100-t*this.multiple:t*this.multiple,n="".concat(n,"%"));var o=this.diam/2;if(a.fillText(n,o,o),0===this.percentage||this.counterclockwise&&100===t)return void a.draw()}var s=2*Math.PI/100*t+this.sAngle;this.drawArc(a,s),setTimeout((function(){e.startPercentage=t,e.drawProgressCircular(t),e.$emit("change",{percentage:t})}),r)}},drawArc:function(t,e){t.setLineCap(this.lineCap),t.beginPath();var a=this.diam/2;t.arc(a,a,a-this.lineWidth,this.sAngle,e,this.counterclockwise),t.stroke(),t.draw()},getCanvasId:function(){var t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){return("x"===t?16*Math.random()|0:8).toString(16)}));return t}}};e.default=i},fb90:function(t,e,a){"use strict";var i=a("3b08"),r=a.n(i);r.a}}]);