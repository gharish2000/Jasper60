define(["require","!domReady","resource.inputControl.locate","underscore","jrs.configs","resource.base"],function(e){var r=e("!domReady"),o=e("resource.inputControl.locate"),s=e("underscore"),n=e("jrs.configs"),i=e("resource.base");r(function(){s.extend(o.messages,n.addJasperReport.inputControl.messages),o.initialize(),isIPad()&&i.initSwipeScroll()})});