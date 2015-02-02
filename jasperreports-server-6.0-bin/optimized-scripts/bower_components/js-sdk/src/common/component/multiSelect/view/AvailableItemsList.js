define(["require","jquery","backbone","underscore","common/component/singleSelect/manager/KeyboardManager","common/component/list/view/ListWithNavigation","common/component/list/model/ListWithSelectionModel","common/component/list/model/listWithNavigationModelTrait","common/component/singleSelect/dataprovider/SearcheableDataProvider","common/component/singleSelect/manager/DropDownManager","text!common/component/multiSelect/templates/availableItemsListTemplate.htm","text!common/component/multiSelect/templates/availableItemsListDropdownTemplate.htm","text!common/component/multiSelect/templates/availableItemsTemplate.htm","text!common/component/multiSelect/templates/listTemplate.htm","bundle!ScalableInputControlsBundle"],function(e){var t=e("jquery"),i=e("backbone"),o=e("underscore"),n=e("common/component/singleSelect/manager/KeyboardManager"),s=e("common/component/list/view/ListWithNavigation"),l=e("common/component/list/model/ListWithSelectionModel"),a=e("common/component/list/model/listWithNavigationModelTrait"),d=e("common/component/singleSelect/dataprovider/SearcheableDataProvider"),h=e("common/component/singleSelect/manager/DropDownManager"),r=e("text!common/component/multiSelect/templates/availableItemsListTemplate.htm"),c=e("text!common/component/multiSelect/templates/availableItemsListDropdownTemplate.htm"),u=e("text!common/component/multiSelect/templates/availableItemsTemplate.htm"),p=e("text!common/component/multiSelect/templates/listTemplate.htm"),m=e("bundle!ScalableInputControlsBundle"),f=200,g=t("body"),w=i.View.extend({events:function(){return{"keydown input.mSelect-input":this.keyboardManager.onKeydown,"focus input.mSelect-input":"onFocus","blur input.mSelect-input":"onBlur","click input.mSelect-input":"onClickOnInput","touchend input.mSelect-input":"onClickOnInput",mousedown:"onMousedown",mouseup:"onMouseup"}},keydownHandlers:o.extend({65:"onAKey"},n.prototype.keydownHandlers),initialize:function(e){o.bindAll(this,"onGlobalMouseup","onGlobalMousedown","onGlobalMousemove","onMousedown","onMouseup","onDropdownMouseup","onEscKey","onSelectAll","onSelectNone","onInvertSelection","calcOffsetForDropDown","collapse"),this.model||(this.model=new i.Model),this.model.set("expanded",!1,{silent:!0}),this.model.set("criteria","",{silent:!0}),this.label=e.label,this.template=o.template(e.availableItemsListTemplate||r),this.dropDownTemplate=o.template(e.dropDownTemplate||c),this.keyboardManager=new n({keydownHandlers:this.keydownHandlers,keydownTimeout:e.keydownTimeout,context:this,deferredKeydownHandler:this.processKeydown,immediateHandleCondition:this.immediateHandleCondition,immediateKeydownHandler:this.immediateKeydownHandler,stopPropagation:!0}),this.listViewModel=this._createListViewModel(e),this.setValue(e.value,{silent:!0}),this.listView=this._createListView(e),this.render(),this.dropDownManager=new h({dropDownEl:this.$dropDownEl,calcOffset:this.calcOffsetForDropDown,onOffsetChanged:this.collapse}),this.initListeners()},_createListViewModel:function(e){this.searcheableDataProvider=new d({getData:e.getData});var t=l.extend(a);return e.listViewModel||new t({getData:this.searcheableDataProvider.getData,bufferSize:e.bufferSize,loadFactor:e.loadFactor})},_createListView:function(e){return e.listView||new s({el:e.listElement||t(p),model:this.listViewModel,chunksTemplate:e.chunksTemplate,itemsTemplate:e.itemsTemplate||u,scrollTimeout:e.scrollTimeout,lazy:!0,selection:{allowed:!0,multiple:!0}})},initListeners:function(){this.listenTo(this.listView,"active:changed",this.activeChange,this),this.listenTo(this.listViewModel,"selection:clear",this.selectionClear,this),this.listenTo(this.listViewModel,"selection:add",this.selectionAdd,this),this.listenTo(this.listViewModel,"selection:addRange",this.selectionAddRange,this),this.listenTo(this.listViewModel,"selection:remove",this.selectionRemove,this),this.listenTo(this.model,"change:expanded",this.changeExpandedState,this),this.listenTo(this.model,"change:value",this.changeValue,this),this.listenTo(this.model,"change:disabled",this.changeDisabled,this),this.listenTo(this.model,"change:criteria",this.changeFilter,this),this.$dropDownEl.on("mousedown",this.onMousedown).on("mouseup",this.onDropdownMouseup).on("click",".mSelect-footer-button",this.onEscKey).on("click","a.all",this.onSelectAll).on("click","a.none",this.onSelectNone).on("click","a.invert",this.onInvertSelection),t("body").on("mousedown",this.onGlobalMousedown).on("dataavailable",this.onGlobalMousedown).on("mouseup",this.onGlobalMouseup).on("mousemove",this.onGlobalMousemove)},render:function(){return this.renderDropdownPart(),this.$el.empty(),this.$el.append(t(this.template(this.getModelForRendering()))),this.changeDisabled(),this},renderDropdownPart:function(){this.$dropDownEl||(this.listView.undelegateEvents(),this.$dropDownEl=t(this.dropDownTemplate(this.getModelForRendering())),this.$dropDownEl.prepend(this.listView.el),t("body").append(this.$dropDownEl),this.listView.delegateEvents()),this.model.get("expanded")?this.$dropDownEl.show():this.$dropDownEl.hide()},renderData:function(){return this.listView.renderData(),this},activeChange:function(e){e&&(this.activeChangedWithShift&&(delete this.activeChangedWithShift,this.listViewModel.addRangeToSelection(e.value,e.index)),this.listView.scrollTo(e.index))},selectionAdd:function(e){var t=this.searcheableDataProvider.getIndexMapping(),i=t?t[e.index]:e.index;this.model.get("value")[i]=e.value,this.model.trigger("change:value")},selectionAddRange:function(e){for(var t=this.searcheableDataProvider.getIndexMapping(),i=(this.model.get("value"),e.start);i<=e.end;i++){var o=t?t[i]:i;this.model.get("value")[o]=e.selection[i]}this.model.trigger("change:value")},selectionRemove:function(e){var t=this.searcheableDataProvider.getIndexMapping(),i=t?t[e.index]:e.index;this.model.get("value")[i]=void 0,this.model.trigger("change:value")},selectionClear:function(){this.model.attributes.value=[]},onSelectAll:function(){this.model.get("disabled")||(this.listView.once("selection:change",this.processSelectionThroughApi,this),this.listView.selectAll())},onSelectNone:function(){this.model.get("disabled")||(this.listView.once("selection:change",this.processSelectionThroughApi,this),this.listView.selectNone())},onInvertSelection:function(){this.model.get("disabled")||(this.listView.once("selection:change",this.processSelectionThroughApi,this),this.listView.invertSelection())},changeExpandedState:function(e){e.get("expanded")?this.doExpand():this.doCollapse()},changeValue:function(){this.trigger("selection:change",this.getValue())},changeDisabled:function(){var e=this.model.get("disabled");e?(this.$el.addClass("disabled").find("input[type='text']").attr("disabled","disabled"),this.$dropDownEl.addClass("disabled").find(".mSelect-footer a").attr("disabled","disabled")):(this.$el.removeClass("disabled").find("input[type='text']").removeAttr("disabled"),this.$dropDownEl.removeClass("disabled").find(".mSelect-footer a").removeAttr("disabled")),this.listView.setDisabled(e)},onClickOnInput:function(){this.onFocus()},onFocus:function(){this.model.get("expanded")||this.model.set("expanded",!0);var e=this.$el.find("input");e.val()==e.attr("placeholder")&&(e.val(""),e.removeClass("placeholder"))},onBlur:function(){var e=this.$el.find("input");return(""==e.val()||e.val()==e.attr("placeholder"))&&(e.addClass("placeholder"),e.val(e.attr("placeholder"))),this.preventBlur?!1:void this.collapse()},onMousedown:function(){this.preventBlur=!0},onDropdownMouseup:function(e){t(e.target).hasClass("mSelect-footer-button")?delete this.preventBlur:this.onMouseup()},onMouseup:function(){this.preventBlur&&(delete this.preventBlur,this.model.get("expanded")&&this.$el.find("input.mSelect-input").focus())},onGlobalMousedown:function(e){if(this.model.get("expanded")){if(e.target===this.el||this.$el.find(e.target).length>0||e.target===this.$dropDownEl[0]||this.$dropDownEl.find(e.target).length>0)return;delete this.preventBlur,this.onBlur()}},onGlobalMouseup:function(){this.onMouseup()},onGlobalMousemove:function(e){this.preventBlur&&e.stopPropagation()},onUpKey:function(e){this.model.get("expanded")?(e.shiftKey&&(this.activeChangedWithShift=!0),this.listView.activatePrevious()):this.expand()},onDownKey:function(e){if(this.model.get("expanded")){var t=this.listView.getActiveValue();t?(e.shiftKey&&(this.activeChangedWithShift=!0),this.listView.activateNext()):this.listView.activateFirst()}else this.expand()},onEnterKey:function(e){if(e.preventDefault(),!this.model.get("expanded"))return void this.expand();var t=this.listView.getActiveValue();e.shiftKey?this.listViewModel.addRangeToSelection(t.value,t.index):e.ctrlKey||e.metaKey?(this.listViewModel.clearSelection(),this.listViewModel.addValueToSelection(t.value,t.index)):this.listViewModel.toggleSelection(t.value,t.index)},onEscKey:function(){this.model.get("expanded")&&this.collapse()},onHomeKey:function(e){this.model.get("expanded")?(e.shiftKey&&(this.activeChangedWithShift=!0),this.listView.activateFirst()):this.expand()},onEndKey:function(e){this.model.get("expanded")?(e.shiftKey&&(this.activeChangedWithShift=!0),this.listView.activateLast()):this.expand()},onPageUpKey:function(e){this.model.get("expanded")?(e.shiftKey&&(this.activeChangedWithShift=!0),this.listView.pageUp()):this.expand()},onPageDownKey:function(e){this.model.get("expanded")?(e.shiftKey&&(this.activeChangedWithShift=!0),this.listView.pageDown()):this.expand()},onTabKey:function(){},onAKey:function(e){e.ctrlKey||e.metaKey?(e.stopPropagation(),this.onSelectAll()):this.keyboardManager.deferredHandleKeyboardEvent(e)},doExpand:function(){this.$el.find(".mSelect-avListPlaceholder").removeClass("collapsed").addClass("expanded"),this.expandDropdownPart(),this.listView.lazy?this.listView.fetch(o.bind(this.listView.resize,this.listView)):this.listView.resize(),this.trigger("expand")},expandDropdownPart:function(){this.$el.width()<f&&this.$dropDownEl.find(".mSelect-footer").addClass("mSelect-footer-narrow"),this.$dropDownEl.show(),this.dropDownManager.startCalc()},doCollapse:function(){this.$el.find(".mSelect-avListPlaceholder").removeClass("expanded").addClass("collapsed"),this.$el.find("input").val(""),this.$dropDownEl.hide().find(".mSelect-footer").removeClass("mSelect-footer-narrow"),this.model.set("criteria",""),this.dropDownManager.stopCalc(),this.trigger("collapse")},calcOffsetForDropDown:function(){var e=this.$el.offset(),t=g.offset().top+e.top+this.$el.height(),i=g.offset().left+e.left;return{top:t,left:i,width:this.$el.width()}},processKeydown:function(){this.model.set("criteria",this.$el.find("input").val())},changeFilter:function(e){var t=this;this.searcheableDataProvider.getData({criteria:this.model.get("criteria")}).done(e&&"function"==typeof e?e:function(){t.listView.fetch(function(){t.listView.setValue(t.model.get("value"),{silent:!0})})})},processSelectionThroughApi:function(e){var t=this.searcheableDataProvider.getIndexMapping(),i=(this.listViewModel.get("total"),[]);for(var o in e)if(e.hasOwnProperty(o)){var n=t?t[o]:o,s=e[o];void 0!==s&&(i[n]=s)}this.model.attributes.value=i,this.model.trigger("change:value")},convertSelectionForListViewModel:function(e){var t=this.searcheableDataProvider.getReverseIndexMapping();if(!t)return e;var i={};for(var o in e)if(e.hasOwnProperty(o)){var n=t[o];if(n){var s=e[o];void 0!==s&&(i[n]=s)}}return i},getModelForRendering:function(){return{label:this.label,isIPad:"iPad"===navigator.platform,expanded:this.model.get("expanded"),disabled:this.model.get("disabled"),i18n:m}},fetch:function(e,t){this.listView.fetch(e,t)},reset:function(e){this.listView.reset(e)},expand:function(){return this.model.set("expanded",!0),this},collapse:function(){return this.model.set("expanded",!1),this},getValue:function(){return this.model.get("value")},setValue:function(e,t){this.listViewModel.once("selection:change",function(){this.model.attributes.value=this.listViewModel.getSelection(),t&&t.silent||this.changeValue()},this),o.isArray(e)||"string"==typeof e||(e=this.convertSelectionForListViewModel(e)),this.listViewModel.select(e)},setDisabled:function(e){this.model.set("disabled",e)},getDisabled:function(){return this.model.get("disabled")},remove:function(){this.listView.remove(),i.View.prototype.remove.call(this),this.$dropDownEl.off("mousedown",this.onMousedown).off("mouseup",this.onDropdownMouseup).off("click",this.onEscKey).off("click",this.onSelectAll).off("click",this.onSelectNone).off("click",this.onInvertSelection).remove(),t("body").off("mousedown",this.onGlobalMousedown).off("dataavailable",this.onGlobalMousedown).off("mouseup",this.onGlobalMouseup).off("mousemove",this.onGlobalMousemove)}});return w});