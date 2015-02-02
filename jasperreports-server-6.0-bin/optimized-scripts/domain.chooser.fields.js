domain.chooser.fields={SOURCE_FIELDS_DOM_ID:"sourceFieldsTree",DESTINATION_FIELDS_DOM_ID:"destinationFieldsTree",SOURCE_TABLES_COLUMN_DOM_ID:"sourceTablesColumn",DESTINATION_TABLES_COLUMN_DOM_ID:"destTablesColumn",SOURCE_FIELDS_TREE_PROVIDER:"semantic-layer-tree-data-provider",DESTINATION_FIELDS_TREE_PROVIDER:"semantic-layer-query-tree-data-provider",TREE_TEMPLATE_DOM_ID:"list_responsive_collapsible_fields",NODE_CLASS:domain.ItemNode,MOVE_BUTTONS_PATTERN_PREFIX:"#moveButtons > .",FLOW_NAVIGATION_BUTTONS:["filtersTab","displayTab","saveTopicTab","goToDesigner"],DRAG_PATTERN:".draggable",CONSTANT_TABLE_ID:"constant_fields_level",DOM_IDS_TO_SAVE_TREE_SELECTION:["#sourceTablesColumn","#destTablesColumn","#left","#right","#toLeft","#toRight"],TAB_CLASS_NAME:"tab",dataIslandParser:new RegExp("(^[^\\.]+)"),sourceFieldsTree:null,destinationFieldsTree:null,nodeCopyMoveController:new domain.FieldsCopyMoveController,DATA_CHOOSER_MODE:"dataChooserMode",RE_ENTRANCE_MODE:"reEntranceMode",mode:this.DATA_CHOOSER_MODE,reEntranceDialogCSSSelector:"#selectFields",fillForm:function(){var e=domain.chooser.fields.destinationFieldsTree.getRootNode().childs.first()?Object.toJSON(domain.chooser.fields.destinationFieldsTree.getRootNode().childs.findAll(function(e){return!e.isHidden()})):"";$("selectedModel").writeAttribute("value",e),$("unsavedChangesPresent").writeAttribute("value",domain.chooser.isUnsavedChangesPresent().toString())},init:function(e){this.initTrees(),this.mode==this.RE_ENTRANCE_MODE?domain.registerClickHandlers([this.moveButtonsClickEventHandler.bind(this)],this.reEntranceDialogCSSSelector):domain.registerClickHandlers([this.moveButtonsClickEventHandler.bind(this)]),domain.detailsDialog.init(),domain.resetTreeSelectionHandler.init(this.DOM_IDS_TO_SAVE_TREE_SELECTION,function(){return[this.sourceFieldsTree,this.destinationFieldsTree]}.bind(this),this.updateButtonsState.bind(this)),this.updateButtonsState(),this.mode==this.DATA_CHOOSER_MODE&&this.processInvalidFields(e.invalidFields),this.sourceFieldsTree.showTree(100,this.sourceTreeUpdateCallback.bind(this),domain.treeErrorHandler,!1),this.destinationFieldsTree.showTree(100,this.destTreeUpdateCallback.bind(this),domain.treeErrorHandler,!1),disableSelectionWithoutCursorStyle($(document.body))},processInvalidFields:function(e){var t=e.deletedFields?"<p>"+e.deletedFields.join("</p><p>")+"</p>":null,s=e.movedFields?"<p>"+e.movedFields.join("</p><p>")+"</p>":null,i="";t&&(i+=domain.getMessage("error.itemsDeleted",{fields:t})),s&&(i+=domain.getMessage("error.movedFields",{fields:s})),i&&domain.detailsDialog.show(i)},sourceTreeUpdateCallback:function(){this.updateButtonsState()},destTreeUpdateCallback:function(){this.updateButtonsState(),this.disableNodesInAdhocReEntrance()},disableNodesInAdhocReEntrance:function(){},initTrees:function(){if(this.sourceFieldsTree=domain.createItemsTree({handleNodeOnDblclick:!1,treeId:this.SOURCE_FIELDS_DOM_ID,providerId:this.SOURCE_FIELDS_TREE_PROVIDER,templateDomId:this.TREE_TEMPLATE_DOM_ID,nodeClass:this.NODE_CLASS,dragPattern:this.DRAG_PATTERN,selectOnMousedown:!isIPad()}),this.destinationFieldsTree=domain.createItemsTree({handleNodeOnDblclick:!1,treeId:this.DESTINATION_FIELDS_DOM_ID,providerId:this.DESTINATION_FIELDS_TREE_PROVIDER,templateDomId:this.TREE_TEMPLATE_DOM_ID,nodeClass:this.NODE_CLASS,dragPattern:this.DRAG_PATTERN,selectOnMousedown:!isIPad()}),isIPad()){var e=$(this.SOURCE_FIELDS_DOM_ID);new TouchController(e,e.up(1));var t=$(this.DESTINATION_FIELDS_DOM_ID);new TouchController(t,t.up(1))}$H(this.treeEventFactory).each(function(e){[this.sourceFieldsTree,this.destinationFieldsTree].invoke("observe",e.key,e.value.bind(this))}.bind(this)),this.initDragAndDrop()},validateDataIslands:function(e,t){var s=dynamicTree.trees[t.first().getTreeId()];if(s!==this.sourceFieldsTree)return!0;var i=t.collect(function(e){return this.getNodeDataIsland(e)}.bind(this)).uniq(),o=this.getTreeDataIslands(e),d=i.without(this.CONSTANT_TABLE_ID).length>1;return!d&&this.isSameDataIslandsOnBothTrees(i,o)},moveNodes:function(e,t,s){if(e&&e.first()){domain.chooser.setUnsavedChangesPresent(!0);var i=dynamicTree.trees[t.getTreeId()];if(ValidationModule.hideError($(this.DESTINATION_FIELDS_DOM_ID)),!this.validateDataIslands(i,e))return void ValidationModule.showError($(this.DESTINATION_FIELDS_DOM_ID),domain.getMessage("error.fromDifferentIslands"));var o=this.nodeCopyMoveController.move(e,t);if(!s){var d=i.selectedNodes.collect(function(e){return e});i.resetSelected(),d.each(function(e){e.refreshStyle()}),o.each(function(e){i.openAndSelectNode(e.param.uri)}),o.each(function(e){e.select()})}this.updateButtonsState(),this.mode==this.DATA_CHOOSER_MODE&&sessionManager.resetSession(domain.chooser.flowExecutionKey)}},nodeDblClick:function(e){if(e){var t=dynamicTree.trees[e.getTreeId()],s=t===this.sourceFieldsTree?this.destinationFieldsTree:this.sourceFieldsTree;t&&s&&this.moveNodes(t.selectedNodes,s.getRootNode())}},initDragAndDrop:function(){var e=[this.SOURCE_FIELDS_DOM_ID,this.DESTINATION_FIELDS_DOM_ID,this.SOURCE_TABLES_COLUMN_DOM_ID,this.DESTINATION_TABLES_COLUMN_DOM_ID],t=new Hash;t.set(this.SOURCE_FIELDS_DOM_ID,[this.DESTINATION_FIELDS_DOM_ID,this.DESTINATION_TABLES_COLUMN_DOM_ID]),t.set(this.SOURCE_TABLES_COLUMN_DOM_ID,[this.DESTINATION_FIELDS_DOM_ID,this.DESTINATION_TABLES_COLUMN_DOM_ID]),t.set(this.DESTINATION_FIELDS_DOM_ID,[this.SOURCE_FIELDS_DOM_ID,this.SOURCE_TABLES_COLUMN_DOM_ID]),t.set(this.DESTINATION_TABLES_COLUMN_DOM_ID,[this.SOURCE_FIELDS_DOM_ID,this.SOURCE_TABLES_COLUMN_DOM_ID]);var s=function(e,t){var s=e.node;if(s){var i=dynamicTree.trees[s.getTreeId()],o=matchAny(t,["#"+this.SOURCE_TABLES_COLUMN_DOM_ID],!0)?this.sourceFieldsTree:this.destinationFieldsTree;i!==o&&this.moveNodes(i.selectedNodes,o.getRootNode())}};e.each(function(e){Droppables.remove(e),Droppables.add(e,{accept:t.get(e),onDrop:s.bind(this)})}.bind(this))},getTreeDataIslands:function(e){var t=e.getRootNode();return t?t.childs.collect(function(e){if(!e.isHidden()){var t=this.dataIslandParser.exec(e.param.extra.resourceId);if(t)return t[0]}}.bind(this)).compact().uniq():[]},getNodeDataIsland:function(e){if("/"!==e.parent.param.uri)return this.getNodeDataIsland(e.parent);var t=this.dataIslandParser.exec(e.param.extra.resourceId);return t?t[0]:void 0},isSameDataIslandsOnBothTrees:function(e,t){return e=e.without(this.CONSTANT_TABLE_ID),t=t.without(this.CONSTANT_TABLE_ID),e.length<=1&&t.concat(e).uniq().length<=1},updateButtonsState:function(){var e=this.destinationFieldsTree,t=this.sourceFieldsTree,s=e.getRootNode()&&e.getRootNode().hasVisibleChilds(),i=t.getRootNode()&&t.getRootNode().hasVisibleChilds(),o=s&&e.selectedNodes.length>0,d=i&&t.selectedNodes.length>0,n=e.getRootNode()&&e.getRootNode().hasEnabledChilds(),a={destTreeHasSelectedNodes:o,sourceTreeHasSelectedNodes:d,destTreeHasVisibleNodes:s,sourceTreeHasVisibleNodes:i,destTreeHasEnabledNodes:n,sourceTreeDataIslands:this.getTreeDataIslands(t),destTreeDataIslands:this.getTreeDataIslands(e)};this.updateMoveButtonsState(a),this.updateFlowButtonsState(a),this.updateTreeItems(a),this.updateReEntrantControls(a)},updateReEntrantControls:function(){},updateMoveButtonsState:function(e){this.moveButtonsUpdateStatusEventFactory.each(function(t){var s=$$(this.MOVE_BUTTONS_PATTERN_PREFIX+t.key)[0],i=t.value.bind(this)(e);domain.enableButton(s,i)}.bind(this))},updateFlowButtonsState:function(e){this.FLOW_NAVIGATION_BUTTONS.each(function(t){var s=$(t);if(s){domain.enableButton(s,e.destTreeHasVisibleNodes);var i=s.up();i.hasClassName(this.TAB_CLASS_NAME)&&domain.enableButton(i,e.destTreeHasVisibleNodes)}},this)},disableNode:function(e,t){t?e.disable():e.enable(),e.isParent()&&e.childs.each(function(e){this.disableNode(e,t)}.bind(this))},updateTreeItems:function(e){var t=this.sourceFieldsTree;if(t&&t.getRootNode()){var s=e.destTreeDataIslands.concat([this.CONSTANT_TABLE_ID]).uniq();t.getRootNode().childs.each(function(e,t){var s=1===e.length||e.include(this.getNodeDataIsland(t));this.disableNode(t,!s)}.bind(this,s))}},moveButtonsClickEventHandler:function(e){var t=!1;return this.moveButtonsClickEventMap.each(function(s){if(domain.elementClicked(e,s.key)){var i=dynamicTree.trees[s.value.sourceTree],o=dynamicTree.trees[s.value.destTree],d=i.selectedNodes;throw s.value.moveAll&&(d=i.getRootNode().childs.findAll(function(e){return!e.isHidden()})),this.moveNodes(d,o.getRootNode(),s.value.moveAll),t=!0,$break}}.bind(this)),t}};var dc_fields=domain.chooser.fields;dc_fields.moveButtonsClickEventMap=$H({"#left":{sourceTree:dc_fields.DESTINATION_FIELDS_DOM_ID,destTree:dc_fields.SOURCE_FIELDS_DOM_ID},"#right":{sourceTree:dc_fields.SOURCE_FIELDS_DOM_ID,destTree:dc_fields.DESTINATION_FIELDS_DOM_ID},"#toLeft":{moveAll:!0,sourceTree:dc_fields.DESTINATION_FIELDS_DOM_ID,destTree:dc_fields.SOURCE_FIELDS_DOM_ID},"#toRight":{moveAll:!0,sourceTree:dc_fields.SOURCE_FIELDS_DOM_ID,destTree:dc_fields.DESTINATION_FIELDS_DOM_ID}}),dc_fields.treeEventFactory={"leaf:dblclick":function(e){var t=e.memo.node;dc_fields.nodeDblClick(t),Event.stop(e)},"leaf:mouseup":function(e){dc_fields.updateButtonsState(),Event.stop(e)},"node:dblclick":function(e){var t=e.memo.node;dc_fields.nodeDblClick(t),Event.stop(e)},"node:mouseup":function(e){dc_fields.updateButtonsState(),Event.stop(e)}},dc_fields.moveButtonsUpdateStatusEventFactory=$H({left:function(e){return e.destTreeHasSelectedNodes},right:function(e){return e.sourceTreeHasSelectedNodes&&this.validateDataIslands(this.destinationFieldsTree,this.sourceFieldsTree.selectedNodes)},toLeft:function(e){return e.destTreeHasVisibleNodes&&e.destTreeHasEnabledNodes},toRight:function(e){return e.sourceTreeHasVisibleNodes&&this.isSameDataIslandsOnBothTrees(e.sourceTreeDataIslands,e.destTreeDataIslands)}}),"undefined"==typeof require&&document.observe("dom:loaded",dc.initialize.bind(dc));