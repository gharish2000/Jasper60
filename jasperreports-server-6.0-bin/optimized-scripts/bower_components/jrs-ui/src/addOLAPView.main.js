define(["require","!domReady","resource.analysisView","underscore","jrs.configs","resource.base","utils.common"],function(e){var i=e("!domReady"),s=e("resource.analysisView"),o=e("underscore"),n=e("jrs.configs"),r=e("resource.base");e("utils.common"),i(function(){var e=n.addOLAPView.localContext.initOptions;o.extend(window.localContext,n.addOLAPView.localContext),o.extend(r.messages,n.addOLAPView.resource.messages),s.initialize(e),isIPad()&&r.initSwipeScroll()})});