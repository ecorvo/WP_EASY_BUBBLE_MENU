!function(e){e(window.jQuery,window,document)}(function(e){wpCircleMenuProd=this.wpCircleMenuProd||{},e(function(){"use strict";wpCircleMenuProd={init:function(){e.each(e(".wpcm-preview-display"),function(){var i=this,n=e(i).find(".wpcm-preview-menu"),a={circle_radius:e("#"+e(n).data("wpcm-item-id")+"wpcm-circle_radius_prod").val(),direction:e("#"+e(n).data("wpcm-item-id")+"wpcm-direction").val(),speed:e("#"+e(n).data("wpcm-item-id")+"wpcm-speed").val(),step_in:e("#"+e(n).data("wpcm-item-id")+"wpcm-step_in").val(),step_out:e("#"+e(n).data("wpcm-item-id")+"wpcm-step_out").val(),transition_function:e("#"+e(n).data("wpcm-item-id")+"wpcm-transition_function").val(),trigger:e("#"+e(n).data("wpcm-item-id")+"wpcm-trigger").val(),closedImg:e("#"+e(n).data("wpcm-item-id")+"wpcm-closed_img").val(),openedImg:e("#"+e(n).data("wpcm-item-id")+"wpcm-opened_img").val()};void 0!==e("#"+e(n).data("wpcm-item-id")+"wpcm-transition_function").data("extra")&&(a.transition_function_extra=e("#"+e(n).data("wpcm-item-id")+"wpcm-transition_function").data("extra")),n.circleMenu(a);var t=e("#"+e(n).data("wpcm-item-id")+"wpcm-bshadow").val();"0"==t?n.find(".wpcm-link-opener").css("box-shadow","none"):n.find(".wpcm-link-opener").css("box-shadow","0 0 2px 1px #aaa")})}},wpCircleMenuProd.init()})});