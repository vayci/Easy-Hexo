(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{166:function(e,o,t){},168:function(e,o,t){"use strict";var n=t(166);t.n(n).a},231:function(e,o,t){"use strict";t.r(o);var n={props:{src:null,screenshot:!1,subtitle:null,autoplay:!1,theme:"#b7daff",loop:!1,hotkey:!0,preload:"auto",logo:"",mutex:!0},data:function(){return{shouldShowPlayer:!1}},mounted:function(){var e=this;if(window){var o=window.DPlayer||null;o&&this.$nextTick(function(){new o({container:e.$refs.container,autoplay:e.autoplay,theme:e.theme,loop:e.loop,screenshot:e.screenshot,hotkey:e.hotkey,preload:e.preload,logo:e.logo,video:{url:e.src},subtitle:{url:e.subtitle},mutex:e.mutex})})}}},l=(t(168),t(0)),a=Object(l.a)(n,function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"dplayer"},[t("button",{directives:[{name:"show",rawName:"v-show",value:!e.shouldShowPlayer,expression:"!shouldShowPlayer"}],staticClass:"btn-show-player",on:{click:function(o){e.shouldShowPlayer=!0}}},[e._v("\n      点击加载播放器\n    ")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.shouldShowPlayer,expression:"shouldShowPlayer"}],ref:"container"})])},[],!1,null,"7e38f6fa",null);a.options.__file="dplayer.vue";o.default=a.exports}}]);