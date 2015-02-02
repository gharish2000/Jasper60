function JSTooltip(t,e){if(t){if(this.srcElement=t,e&&(this.label=e.label,this.text=e.text,this.offsets=e.offsets,this.showBelow=!!e.showBelow,this.templateId=e.templateId,this.loadTextCallback=e.loadTextCallback,this.loadTextExecuted=!1),this.templateId)this._toAttribute(this.TOOLTIP_TEMPLATE,this.templateId);else{var i=this._fromAttribute(this.TOOLTIP_TEMPLATE);this.templateId=i&&i.length>0?i:this.TOOLTIP_TEMPLATE_ID}this.label?this._toAttribute(this.TOOLTIP_LABEL,this.label):this.label=this._fromAttribute(this.TOOLTIP_LABEL),this.text?this._toAttribute(this.TOOLTIP_TEXT,this.text):this.text=this._fromAttribute(this.TOOLTIP_TEXT),this.srcElement.jsTooltip=this,tooltipModule.tooltips.push(this)}}JSTooltip.addVar("SEPARATOR","@@"),JSTooltip.addVar("TOOLTIP_LABEL","tooltiplabel"),JSTooltip.addVar("TOOLTIP_TEXT","tooltiptext"),JSTooltip.addVar("TOOLTIP_TEMPLATE","tooltiptemplate"),JSTooltip.addVar("TOOLTIP_TEMPLATE_ID","jsTooltip"),JSTooltip.addVar("LABEL_PATTERN",".message.label"),JSTooltip.addVar("TEXT_PATTERN",".message:not(.label)"),JSTooltip.addMethod("_toAttribute",function(t,e){this.srcElement&&this.srcElement.writeAttribute(t,isArray(e)?e.join(this.SEPARATOR):e)}),JSTooltip.addMethod("_fromAttribute",function(t){if(this.srcElement&&this.srcElement.hasAttribute(t)){var e=this.srcElement.readAttribute(t);return e.include(this.SEPARATOR)?e.split(this.SEPARATOR):e}return null}),JSTooltip.addMethod("_setValues",function(t,e){t.each(function(t,i){e[i]&&t.update(e[i])})}),JSTooltip.addMethod("_calculateZIndex",function(t){function e(t){return parseInt(jQuery(t).css("z-index"))}var i=e(t);(!_.isNumber(i)||_.isNaN(i))&&(i=1e3);var l=_.flatten([this.srcElement,jQuery(this.srcElement).parents().toArray()]),s=_.reduce(l,function(t,i){var l=e(i);return _.isNumber(l)&&!_.isNaN(l)&&(t=Math.max(t,l)),t},i);return s+1}),JSTooltip.addMethod("show",function(t){t&&(this.offsets=t),this._element=$(this.templateId);var t;this.showBelow?(t=getBoxOffsets(this.srcElement),t[1]+=this.srcElement.clientHeight+5):t=[getScrollLeft()+5,getScrollTop()+5],this.offsets&&(t[0]+=this.offsets[0],t[1]+=this.offsets[1]),this._element.setStyle({position:"absolute",left:t[0]+"px",top:t[1]+"px",zIndex:this._calculateZIndex(this._element)});var e=this._element.select(this.LABEL_PATTERN),i=this._element.select(this.TEXT_PATTERN);if(this.label&&this._setValues(e,isArray(this.label)?this.label:[this.label]),this.text&&this._setValues(i,isArray(this.text)?this.text:[this.text]),this._element.removeClassName(layoutModule.HIDDEN_CLASS),t[0]+this._element.clientWidth>jQuery(window).width()){var l=t[0]-this._element.clientWidth>0?t[0]-this._element.clientWidth:15;this._element.setStyle({left:l+"px"})}if(t[1]+this._element.clientHeight>jQuery(window).height()){var s=t[1]-this._element.clientHeight-10;this._element.setStyle({top:s+"px"})}return this.loadTextCallback&&!this.loadTextExecuted&&(this.loadTextExecuted=!0,this.loadTextCallback(this)),this}),JSTooltip.addMethod("updateText",function(t){this.text=t,this.show()}),JSTooltip.addMethod("hide",function(){this._element&&this._element.addClassName(layoutModule.HIDDEN_CLASS)});var tooltipModule={TOOLTIP_PATTERN:"*[tooltiptext] > *",ELEMENT_WITH_TOOLTIP_PATTERN:"*[tooltiptext]",actualX:0,actualY:0,tooltips:[],showJSTooltip:function(t,e){t.jsTooltip||(t.jsTooltip=new JSTooltip(t,{})),this.actualX=e[0],this.actualY=e[1],this.cleanUp();var i=jQuery(t).attr("tooltipappeardelay");i=i?parseInt(i):1e3,t.jsTooltip.timer&&clearTimeout(t.jsTooltip.timer),t.jsTooltip.timer=setTimeout(function(){t.jsTooltip.show([tooltipModule.actualX,tooltipModule.actualY])},i),jQuery(t).on("mousemove",function(t){tooltipModule.actualX=t.clientX,tooltipModule.actualY=t.clientY})},hideJSTooltip:function(t){t&&t.jsTooltip&&(t.jsTooltip.timer&&clearTimeout(t.jsTooltip.timer),t.jsTooltip.hide(),jQuery(t).off("mousemove"))},cleanUp:function(){if(this.tooltips&&this.tooltips.length>0){var t=[],e="fuigasuifdughaiadbvguaidbapvuwbev";this.tooltips.each(function(i){i.srcElement.id&&document.getElementById(i.srcElement.id)||(i.srcElement.setAttribute("id",e),document.getElementById(e)||(i.hide(),t.push(i)),i.srcElement.setAttribute("id",null))}),t.length>0&&(this.tooltips=this.tooltips.reject(function(e){return t.include(e)}))}}};