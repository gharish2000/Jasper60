define(["require","!domReady","domain.components","domain.designer.validators","jrs.configs","domain.designer.filters","dateFormatter"],function(e){var n=e("!domReady"),o=e("domain.components"),i=e("domain.designer.validators"),d=e("jrs.configs");e("domain.designer.filters"),e("dateFormatter"),n(function(){"undefined"==typeof window.localContext&&(window.localContext={}),_.extend(window.localContext,d.domainDesigner.localContext),_.extend(o._messages,d.domainDesigner.domain._messages),i.initialize()})});