!function(e,n,t){function r(e,t){var r=function(t){return"string"==typeof t||"[object String]"===Object.prototype.toString.call(t)?{report:function(t){return function(r){e.report(n.extend({container:t},r))}}(t),dashboard:function(t){return function(r){e.dashboard(n.extend({container:t},r))}}(t)}:void 0};return r.logout=t.logout,r.login=t.login,n.extend(r,e),r}var i="0.0.1a",o={bis:{},auths:[],facts:{},config:{}};o.auths.find=function(e,t){return n.find(this,n.compose(n.partial(n.isEqual,n.extend({url:e},t)),function(e){return e.properties()}))};var u=function(e,i,u,s){var a,c,l,f,v;"function"==typeof e?(a=o.config,l=e,f=i,v=u):(a=n.extend({},o.config,e),l=i,f=u,v=s),c=o.bis[a.server],c||(c=t({url:a.server,scripts:a.scripts,logEnabled:a.logEnabled,logLevel:a.logLevel}),o.bis[a.server]=c),c(["bi/viz/BiComponentFactory","common/auth/Authentication"],function(e,t){var i=o.auths.find(a.server,a.auth),u=o.facts[a.server];i||(i=new t(n.extend({url:a.server},a.auth)),o.auths.push(i)),u||(u=new e({server:a.server}),o.facts[a.server]=u),i._result||(i._result=i.run()),i._result.fail(f).always(function(e){if("resolved"===i._result.state()){var n=r(u,i);l&&l(n),v&&v(null,n)}else v&&v(e)})})};u.version=i,u.config=function(e){n.extend(o.config,e)};var s=e.visualize;u.noConflict=function(){return e.visualize===u&&(e.visualize=s),u},e.visualize=u}(this,_,jasper);