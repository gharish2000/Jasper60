var DataSetList={DS_CONTAINER:"dsContainer",BUTTON_CLOSE:"#detail #close",BUTTON_CLEAR_ALL_CACHE:"clearAllCache",Q_ITEM_PFX:"qItem_",SORTING_FORM:"changeSortType",SORTING_SELECT_ITEMS:"#sortMode .tab",initialize:function(){if(layoutModule.resizeOnClient("serverSettingsMenu","settings"),webHelpModule.setCurrentContext("admin"),!$(this.DS_CONTAINER)){var e=$("nothingToDisplay");e.removeClassName(layoutModule.HIDDEN_CLASS),centerElement(e,{horz:!0,vert:!0}),jQuery(document.body).addClass(layoutModule.NOTHING_TO_DISPLAY_CLASS)}$("display").observe("click",function(e){var t=e.element(),a=matchAny(t,[layoutModule.BUTTON_PATTERN],!0);if(a){for(var i in Administer.menuActions)if(a.match(i)&&!a.up("li").hasClassName("selected"))return void(document.location=Administer.menuActions[i]());if(a.match("button#"+DataSetList.BUTTON_CLEAR_ALL_CACHE)&&(e.stop(),DataSetList._clearAll()),a.match("div.five > button"))return void DataSetList._clearQuery(a)}return t.match("a")&&matchAny(t,["div.two"],!0)?void DataSetList._getDetails(t):void 0}),document.body.appendChild($("detail")),$$(DataSetList.BUTTON_CLOSE)[0].observe("click",function(e){e.stop(),dialogs.popup.hide($("detail"))});var t=$(DataSetList.SORTING_FORM),a=t.sort.value;$$(DataSetList.SORTING_SELECT_ITEMS).each(function(e){a&&$(e)[a===e.id?"addClassName":"removeClassName"]("selected"),$(e).observe("click",function(e){return function(){t.sort.setAttribute("value",e),t.submit()}}(e.id))})},_getDetails:function(e){var t="flow.html?_flowExecutionKey="+Administer.flowExecutionKey+"&_eventId=isServerAvailable";Administer._sendRequest(t,null,function(t){if(t.data&&"Yes"==t.data.strip()){var a="id="+e.readAttribute("name"),i="flow.html?_flowExecutionKey="+Administer.flowExecutionKey+"&_eventId=getDetails";Administer._sendRequest(i,a,DataSetList._getDetailsCallback)}})},_clearQuery:function(e){var t="id="+e.name,a="flow.html?_flowExecutionKey="+Administer.flowExecutionKey+"&_eventId=clearQuery";Administer._sendRequest(a,t,DataSetList._clearCallback)},_clearAll:function(){var e="flow.html?_flowExecutionKey="+Administer.flowExecutionKey+"&_eventId=clearAll";Administer._sendRequest(e,null,DataSetList._clearCallback)},_getDetailsCallback:function(e){var t=$("detail");$("detAge").update(e.age),$("detQuery").update(e.query.replace(new RegExp("\n","g"),"<br/>")),$("detDataSourceURI").update(e.datasourceURI),$("detParameters").update(e.params),$("detTime").update(e.idle),$("detRows").update(e.rows),$("detQueryTime").update(e.queryTime),$("detFetchTime").update(e.fetchTime),dialogs.popup.show(t)},_clearCallback:function(e){if($("detail").hide(),e.empty){var t=$("nothingToDisplay");t.removeClassName(layoutModule.HIDDEN_CLASS),centerElement(t,{horz:!0,vert:!0}),jQuery(document.body).addClass(layoutModule.NOTHING_TO_DISPLAY_CLASS),DataSetList._disableClearAll()}else e.id&&$(DataSetList.Q_ITEM_PFX+e.id).remove();dialogs.systemConfirm.show(Administer.getMessage(e.result))},_disableClearAll:function(){buttonManager.disable($(DataSetList.BUTTON_CLEAR_ALL_CACHE))}};"undefined"==typeof require&&document.observe("dom:loaded",DataSetList.initialize.bind(DataSetList));