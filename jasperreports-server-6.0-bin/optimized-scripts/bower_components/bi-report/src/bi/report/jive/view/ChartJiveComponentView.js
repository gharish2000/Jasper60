define(["require","./BaseJiveComponentView","underscore","common/util/browserDetection","jquery"],function(e){var t=e("./BaseJiveComponentView"),r=(e("underscore"),e("common/util/browserDetection")),i=e("jquery"),o={"-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",filter:"alpha(opacity=30)",opacity:"0.3"},n={"-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",filter:"alpha(opacity=100)",opacity:"1"};return t.extend({_renderComponent:function(e){var s=new i.Deferred;if(t.prototype._renderComponent.call(this,e),this.jiveChart=this.model.get("uiModuleType"),this.jiveChart){this.jiveChart.init(this.report);var a=e.find(".show_chartTypeSelector_wrapper").css({top:"0"});r.isIE8()||a.css(o),e.find(".jive_chartSettingsIcon").on("mouseenter",function(){r.isIE8()||i(this).parent().css(n)}),i(".jive_chartMenu").on("mouseleave touchend",function(){r.isIE8()||i(this).parent().css(o)}),i("head #jive-chart-selector-stylesheet").remove()}return s.resolve(),s},setSize:function(e,t){this.component&&this.component.highchartsInstance&&this.component.highchartsInstance.setSize(e,t,!0)},remove:function(){this.jiveChart&&this.jiveChart.destroyChartTypeSelector(this.report),t.prototype.remove.call(this,arguments)}})});