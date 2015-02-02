define(["require","underscore","home/model/HalBaseModel","home/connectivity/relations","home/connectivity/dataProviderFactory","home/collection/BaseCollection","home/collection/HalBaseCollection","home/collection/WorkflowCollection","home/enum/mediaTypes"],function(e){var o=e("underscore"),t=e("home/model/HalBaseModel"),n=e("home/connectivity/relations"),i=e("home/connectivity/dataProviderFactory"),r=(e("home/collection/BaseCollection"),e("home/collection/HalBaseCollection")),l=e("home/collection/WorkflowCollection"),c=e("home/enum/mediaTypes");return t.extend({dataProvider:i(n.root),relations:{workflows:l,resources:r.extend({modelRel:n.resource}),contentReferences:r.extend({modelRel:n.contentReference})},initialize:function(){this._initializeRelations(),this._refreshRelationsOnChangeEvent()},getContentReferences:function(){return this.contentReferences},getResources:function(){return this.resources},getWorkflows:function(){return this.workflows},_refreshRelationsOnChangeEvent:function(){this.on("change",o.bind(function(){var e=this.getControls({type:c.APPLICATION_HAL_JSON});o.each(this.relations,o.bind(function(o,t){var n,r=e[t];if(r)if(r.entity)this[t].reset(r.entity);else if(r.href){var l=this[t].modelRel;n=i({id:t,url:r.href,rel:l}),this[t].dataProvider=n,this[t].fetch({reset:!0})}},this))},this))},_initializeRelations:function(){o.each(this.relations,o.bind(function(e,o){this[o]=new e},this))}})});