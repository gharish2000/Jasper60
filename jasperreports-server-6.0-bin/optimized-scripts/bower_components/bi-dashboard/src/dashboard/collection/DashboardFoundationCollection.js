define(["require","backbone","../dashboardSettings","../model/DashboardFoundationModel"],function(n){var o=n("backbone"),e=n("../dashboardSettings"),t=n("../model/DashboardFoundationModel");return o.Collection.extend({model:t,addDefaultFoundation:function(){return this.add(new t({id:e.DEFAULT_FOUNDATION_ID,components:e.DEFAULT_FOUNDATION_COMPONENTS_ID,layout:e.DEFAULT_FOUNDATION_LAYOUT_ID,wiring:e.DEFAULT_FOUNDATION_WIRING_ID}))},getDefaultFoundation:function(){return this.get(e.DEFAULT_FOUNDATION_ID)}})});