define("adhoc/chart/formattingDialog/model/FormattingDialogModel",["require","underscore","backbone","backbone.validation"],function(e){var t=e("underscore"),n=e("backbone"),a=e("backbone.validation"),i=n.Model.extend({validation:{xAxisStep:{xRegExpPattern:/^[0-9]+$/,min:1,msg:"Please enter correct values"},yAxisStep:{xRegExpPattern:/^[0-9]+$/,min:1,msg:"Please enter correct values"},xAxisRotation:{xRegExpPattern:/^[-0-9]+$/,range:[-90,90],msg:"Please enter correct values"},yAxisRotation:{xRegExpPattern:/^[-0-9]+$/,range:[-90,90],msg:"Please enter correct values"},legend:{oneOf:["bottom","left","right","top","none"],msg:"Please enter correct values"}},formattingOptions:["xAxisStep","yAxisStep","xAxisRotation","yAxisRotation","legend","legendBorder","showDataPoints","showSingleMeasuresLabels","showMeasureOnValueAxis","autoScaleFonts"],parse:function(e){var n={};return t.each(this.formattingOptions,function(t){n[t]=e[t]}),n},initialize:function(e,t){this._savedAttributes=e,this.callUpdateState=t.updateState,this.on("invalid",function(){}),this.on("change",function(){this.modelChanged=!0})},applyModel:function(){this.modelChanged&&(this.callUpdateState(this.attributes),this._savedAttributes=this.attributes,this.modelChanged=!1)}});return t.extend(i.prototype,a.mixin),i});