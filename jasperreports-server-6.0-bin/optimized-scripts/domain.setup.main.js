define(["require","!domReady","resource.base","domain.components","domain.setup","underscore","jrs.configs","domain.setup.dialogs"],function(e){var n=e("!domReady"),i=e("resource.base"),o=e("domain.components"),s=e("domain.setup"),d=e("underscore"),a=e("jrs.configs");e("domain.setup.dialogs"),n(function(){d.extend(window,a.domainDesigner.localContext),d.extend(o._messages,a.domainDesigner.domain._messages),d.extend(s,a.domainDesigner.domain.wizard),d.extend(i,a.domainDesigner.resource),isIPad()&&i.initSwipeScroll(),s.initialize()})});