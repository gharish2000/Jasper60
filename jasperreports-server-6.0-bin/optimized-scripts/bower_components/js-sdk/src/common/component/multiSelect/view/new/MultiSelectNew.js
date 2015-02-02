define(["require","common/component/multiSelect/view/new/AvailableItemsListNew","common/component/multiSelect/view/SelectedItemsList","common/component/singleSelect/dataprovider/CacheableDataProvider","common/component/multiSelect/view/MultiSelect"],function(e){var t=e("common/component/multiSelect/view/new/AvailableItemsListNew"),a=e("common/component/multiSelect/view/SelectedItemsList"),i=e("common/component/singleSelect/dataprovider/CacheableDataProvider"),o=e("common/component/multiSelect/view/MultiSelect"),n=o.extend({_createAvailableItemsList:function(e){return e.availableItemsList||new t({getData:e.getData,bufferSize:e.bufferSize,loadFactor:e.loadFactor,chunksTemplate:e.chunksTemplate,scrollTimeout:e.scrollTimeout})},_createSelectedItemsListDataProvider:function(){return new i},_createSelectedItemsList:function(e){return this.formatValue=e.formatValue,new a({getData:this.selectedItemsDataProvider.getData,bufferSize:e.bufferSize,loadFactor:e.loadFactor,chunksTemplate:e.chunksTemplate,scrollTimeout:e.scrollTimeout})},selectionRemoved:function(e){for(var e=_.compact(e),t=this.availableItemsList.model.get("value"),a=0;a<e.length;a++)delete t[e[a]];this.availableItemsList.setValue(_.keys(t))},selectionChangeInternal:function(e){var t=this;e=this._sortSelection(e),e=this._convertSelectionToStandardData(e),this.selectedItemsDataProvider.setData(e),this.selectedItemsList.fetch(function(){t.selectedItemsList.resize()}),this.silent?delete this.silent:this.triggerSelectionChange()},_sortSelection:function(e){return _.sortBy(e,function(e){var t=e.toUpperCase();return"[NULL]"===t||"~NULL~"==t?"":e})},_convertSelectionToStandardData:function(e){var t=this;return _.map(e,function(e){return{value:e,label:t.formatValue&&t.formatValue(e)}})},getValue:function(){return this.availableItemsList.getValue()}});return n});