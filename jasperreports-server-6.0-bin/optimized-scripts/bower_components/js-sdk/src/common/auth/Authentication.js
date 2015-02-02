define(["require","jquery","json3","common/bi/component/ComponentEngine","common/bi/component/BiComponent","common/transport/request","common/bi/error/enum/biComponentErrorCodes","common/bi/error/biComponentErrorFactory","settings!auth","text!./Authentication.json"],function(o){function n(o){return o.token?(o.tokenName||a.ticketParameterName)+"="+o.token:"j_username="+o.name+"&j_password="+o.password+"&orgId="+(o.organization?o.organization:"null")+(o.locale?"&userLocale="+o.locale:"")+(o.timezone?"&userTimezone="+o.timezone:"")}var e=o("jquery"),t=o("json3"),r=o("common/bi/component/ComponentEngine"),i=o("common/bi/component/BiComponent"),c=o("common/transport/request"),s=o("common/bi/error/enum/biComponentErrorCodes"),u=o("common/bi/error/biComponentErrorFactory"),a=o("settings!auth")||{ticketParameterName:"ticket"},m=o("text!./Authentication.json"),p={login:function(o,r){var i=e.Deferred();return r({url:o.url+(o.preAuth?"":"/j_spring_security_check")+"?successRedirect=/scripts/bower_components/js-sdk/src/common/auth/loginSuccess.json&"+n(o)}).done(function(o,n,e){var r=o;if("string"==typeof o)try{r=t.parse(o)}catch(c){i.reject(c)}r.success===!0?i.resolve(r):i.reject(e)}).fail(function(o){i.reject(o)}),i},logout:function(o,n){return n({url:o.url+"/logout.html"})}},l=function(o){var n=r.newInstance(m,o),e=this;n.decorateComponent(this,function(o,n){var e;e=o.properties&&o.properties.loginFn&&_.isFunction(o.properties.loginFn)?o.properties.loginFn:p.login,e(o.properties,c).done(function(e){o.data=!0,n.resolve(e)}).fail(function(o){n.reject(u.requestError(o,s.AUTHENTICATION_ERROR))})}),this.logout=function(o,e,t){var r,i=n.instanceData;return r=i.properties&&i.properties.logoutFn&&_.isFunction(i.properties.logoutFn)?i.properties.logoutFn:p.logout,r(i.properties,c).done(function(n){i.data=!1,o&&_.isFunction(o)&&o(n)}).fail(function(o){e&&_.isFunction(e)&&e(o)}).always(function(){t&&_.isFunction(t)&&t()})},this.login=function(o,n,t,r){return e.properties(o),e.run(n,t,r)}};return l.prototype=new i,l});