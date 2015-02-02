define(["require","dataSource/model/BaseDataSourceModel","dataSource/model/JdbcDriverModel","dataSource/collection/JdbcDriverCollection","settings!dataSourcePatterns","dataSource/enum/connectionTypes","underscore","jquery","xregexp","bundle!jasperserver_messages","common/enum/repositoryResourceTypes","bundle!jasperserver_config"],function(e){var t=e("dataSource/model/BaseDataSourceModel"),r=e("dataSource/model/JdbcDriverModel"),s=e("dataSource/collection/JdbcDriverCollection"),i=e("settings!dataSourcePatterns"),n=e("dataSource/enum/connectionTypes"),o=e("underscore"),a=e("jquery"),l=e("xregexp"),u=e("bundle!jasperserver_messages"),c=e("common/enum/repositoryResourceTypes"),d=e("bundle!jasperserver_config"),v=function(){var e={};return o.extend(e,t.prototype.validation,{connectionUrl:[{required:!0,msg:u["ReportDataSourceValidator.error.not.empty.reportDataSource.connectionUrl"]},{xRegExpPattern:l(i.forbidWhitespacesPattern),msg:u["ReportDataSourceValidator.error.invalid.chars.reportDataSource.connectionUrl"]}]}),e}();return t.extend({JDBC_BUNDLE_PREFIX:"resource.dataSource.jdbc.",otherDriverIsPresent:!0,type:c.JDBC_DATA_SOURCE,defaults:function(){var e={};return o.extend(e,t.prototype.defaults,{driverClass:"",selectedDriverClass:"",username:"",password:"",timezone:"",connectionUrl:"",isOtherDriver:!1,connectionType:n.JDBC}),e}(),validation:function(){return o.extend({},v)}(),initialize:function(){t.prototype.initialize.apply(this,arguments),this.initialization=a.Deferred(),this.drivers=new s([],this.options);var e=this;this.drivers.fetch({reset:!0}).done(function(){e.isNew()?e.setCustomAttributesDefaultValues(e.drivers.getDefaultDriver()):(e.set("selectedDriverClass",e.get("driverClass")),e.set(e.getCustomAttributeValuesFromConnectionUrl()),e.set("password",d["input.password.substitution"])),e.drivers.driverUploadEnabled&&e.otherDriverIsPresent&&e.drivers.add({defaultValues:{},jdbcDriverClass:r.OTHER_DRIVER,label:u["resource.dataSource.jdbc.otherDriver"],available:!1,"default":!1,jdbcUrl:"",uploaded:!1});var t=o.map(e.drivers.getAllPossibleCustomAttributes(),function(e){return"change:"+e}).join(" ");e.on(t,e.setConnectionUrlFromCustomAttributes),e.on("change:connectionUrl",e.setCustomAttributesFromConnectionUrl),e.on("change:selectedDriverClass",e.changeSelectedDriver),e.initialization.resolve()})},getCurrentDriver:function(){return this.drivers.getDriverByClass(this.get("selectedDriverClass"))},changeSelectedDriver:function(){var e=this.drivers.getDriverByClass(this.get("selectedDriverClass"));e&&(this.setCustomAttributesDefaultValues(e),this.setConnectionUrlFromCustomAttributes(),this.trigger("driverClassChange",this))},setCustomAttributesFromConnectionUrl:function(){var e=this.getCustomAttributeValuesFromConnectionUrl();this.set(e,{silent:!0}),this.trigger("customAttributesUpdate",this)},setConnectionUrlFromCustomAttributes:function(){var e=this.getCurrentDriver(),t=e.getCustomAttributes(),r=this.pick(t),s=this.replaceConnectionUrlTemplatePlaceholdersWithValues(e.get("jdbcUrl"),r);this.set("connectionUrl",s,{silent:!0}),this.trigger("connectionUrlUpdate",this)},getAttributeValueFromUrl:function(e,t){var r=t.exec(e);return[].slice.call(r||[],1)},getCustomAttributeValuesFromConnectionUrl:function(){var e=this.getCurrentDriver(),t=this.get("connectionUrl"),r=l(e.convertUrlTemplateToRegex()),s=e.getCustomAttributes(),i={};return o.each(this.getAttributeValueFromUrl(t,r),function(e,t){i[s[t]]=e}),i},setCustomAttributesDefaultValues:function(e){this.unsetCustomAttributes();var t={};e.isOtherDriver()?(t.selectedDriverClass=e.get("jdbcDriverClass"),t.driverClass="",t.isOtherDriver=!0):(o.extend(t,e.get("defaultValues")),t.selectedDriverClass=e.get("jdbcDriverClass"),t.driverClass=e.get("jdbcDriverClass"),t.isOtherDriver=!1,t.connectionUrl=this.replaceConnectionUrlTemplatePlaceholdersWithValues(e.get("jdbcUrl"),e.get("defaultValues"))),this.set(t,{silent:!0}),this.extendValidation()},unsetCustomAttributes:function(){var e=this;o.each(this.drivers.getAllPossibleCustomAttributes(),function(t){e.unset(t,{silent:!0})})},replaceConnectionUrlTemplatePlaceholdersWithValues:function(e,t){var r=this.getRegExpFieldGroupsFromConnectionUrlTemplate(e);return o.each(r,function(r){e=e.replace(r[0],o.isUndefined(t[r[1]])?"":t[r[1]])}),e},getRegExpFieldGroupsFromConnectionUrlTemplate:function(e){for(var t,s=[];!o.isNull(t=r.FIELD_TEMPLATE_REGEXP.exec(e));)o.isArray(t)&&2===t.length&&s.push(t);return s},extendValidation:function(){var e=this,t={},s=this.getCurrentDriver().getCustomAttributes();o.extend(t,v),o.each(s,function(s){t[s]=[{xRegExpPattern:r.VALIDATION_PATTERNS[s],msg:u[e.JDBC_BUNDLE_PREFIX+"invalidField"].replace("{0}",u[e.JDBC_BUNDLE_PREFIX+s])}]}),this.validation=t},toJSON:function(){var e=t.prototype.toJSON.apply(this,arguments);return this.options.isEditMode&&e.password===d["input.password.substitution"]&&(e.password=null),e}})});