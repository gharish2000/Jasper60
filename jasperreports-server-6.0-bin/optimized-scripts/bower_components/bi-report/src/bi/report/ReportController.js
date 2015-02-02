define(["require","backbone","underscore","jquery","./view/ReportView","./model/ReportStateStack","./jive/collection/ReportComponentCollection","./model/ReportModel","./model/ReportExportModel","common/bi/error/enum/biComponentErrorCodes","./error/biComponentErrorFactoryReportProxy","logger","./enum/reportEvents","./enum/reportStatuses","./enum/reportOutputFormats","common/transport/request"],function(e){function t(e){var t=new i.Deferred,o=this;return this.view.showOverlay(),this.model.runAction(e).then(n.bind(o.model.updateStatus,o.model),t.reject).then(function(){o.model.isFailed()||o.model.isCancelled()?t.reject({source:"execution",status:o.model.get("status"),errorDescriptor:o.model.get("errorDescriptor")}):(o.trigger(m.AFTER_REPORT_EXECUTION),o.fetchReportHtmlExportAndJiveComponents().done(t.resolve).fail(t.reject))},t.reject),t.fail(function(t){e=n.isArray(e)?n.reduce(e):e;var r=e.actionName+"Data",i=e[r];4===t.readyState&&500===t.status&&o.components.get(i[i.chartComponentUuid?"chartComponentUuid":"tableUuid"]).handleServerError(t.responseJSON.result),o.view.hideOverlay()}),t}function o(e){var t=this;this.model=new u,this.components=new a([],{report:this.model,stateModel:e}),this.view=new s({model:this.model,collection:this.components,stateModel:e}),this.stateStack=new c,this.model.components=this.components,this.model.config={container:this.view.$el},this.model.getExport(f.HTML)||this.model.addExport({options:{outputFormat:f.HTML}}),this.listenTo(this.model.getExport(f.HTML),"change:outputFinal",function(){t.trigger(m.PAGE_FINAL,this.model.getExport(f.HTML).getHTMLOutput())}),this.listenTo(this.components,m.ACTION,this.runReportAction),this.listenTo(this.model,"change:status",function(){p.info("Report status changed to '"+t.model.get("status")+"'"),t.model.isReady()?t.model.update().done(function(){p.info("Report total pages number is "+t.model.get("totalPages")),t.model.getExport(f.HTML).get("outputFinal")?t.trigger(m.REPORT_COMPLETED,t.model.get("status")):t.fetchReportHtmlExportAndJiveComponents().fail(function(){var e=Array.prototype.slice.call(arguments);e.unshift(h.FAILED),e.unshift(m.REPORT_COMPLETED),t.trigger.apply(t,e)})}):(t.model.isCancelled()||t.model.isFailed())&&t.trigger(m.REPORT_COMPLETED,t.model.get("status"),{source:"execution",status:t.model.get("status"),errorDescriptor:t.model.get("errorDescriptor")})}),this.once(m.REQUESTED_PAGES_READY,function(){t.model.isCompleted()||t.model.waitForExecution(),t.on(m.REQUESTED_PAGES_READY,function(){t.model.isCompleted()||t.model.waitForExecution(),t._reportRendered&&(t.view.renderReport(),t.view.renderJive().done(function(){t.model.isReady()&&t.trigger(m.REPORT_COMPLETED,t.model.get("status"))}))})}),this.on(m.AFTER_REPORT_EXECUTION,function(){t.model.execution.set("pages",1),n.extend(t.model.getExport(f.HTML).get("options"),{pages:1})})}var r=e("backbone"),n=e("underscore"),i=e("jquery"),s=e("./view/ReportView"),c=e("./model/ReportStateStack"),a=e("./jive/collection/ReportComponentCollection"),u=e("./model/ReportModel"),d=e("./model/ReportExportModel"),l=(e("common/bi/error/enum/biComponentErrorCodes"),e("./error/biComponentErrorFactoryReportProxy")),p=e("logger").register("Report"),m=e("./enum/reportEvents"),h=e("./enum/reportStatuses"),f=e("./enum/reportOutputFormats"),E=e("common/transport/request");return n.extend(o.prototype,r.Events,{undoReportAction:function(){var e=this;return t.call(this,{actionName:"undo"}).done(function(){e.stateStack.previousState()})},undoAllReportAction:function(){var e=this;return t.call(this,{actionName:"undoAll"}).done(function(){e.stateStack.firstState()})},redoReportAction:function(){var e=this;return t.call(this,{actionName:"redo"}).done(function(){e.stateStack.nextState()})},runReportAction:function(e){var o=this;return t.call(this,e).done(function(){o.stateStack.newState()})},executeReport:function(e){var t=new i.Deferred,o=this;return this.model.execute({freshData:!!e}).then(n.bind(o.fetchReportHtmlExportAndJiveComponents,o),t.reject).then(function(){o.stateStack.newState(),t.resolve.apply(t,arguments)},t.reject),t},cancelReportExecution:function(){return this.fetchExportDfd&&"pending"===this.fetchExportDfd.state()&&this.fetchExportDfd.reject({source:"execution",status:"cancelled"}),this.model.cancel()},applyReportParameters:function(e){var t=new i.Deferred,o=this;return this.fetchExportDfd&&"pending"===this.fetchExportDfd.state()&&this.fetchExportDfd.reject({source:"execution",status:"cancelled"}),this.model.applyParameters(e).then(n.bind(o.model.updateStatus,o.model),t.reject).then(function(){return o.trigger(m.AFTER_REPORT_EXECUTION),o.fetchExportDfd=o.fetchReportHtmlExportAndJiveComponents(),o.fetchExportDfd},t.reject).then(t.resolve,t.reject),t},fetchReportHtmlExportAndJiveComponents:function(){var e,t,o=new i.Deferred;if(o.fail(function(o){e&&"pending"===e.state()&&(e.reject?e.reject(o):e.abort(o)),t&&"pending"===t.state()&&(t.reject?t.reject(o):t.abort(o))}),this.model.isFailed()||this.model.isCancelled())o.reject({source:"execution",status:this.model.get("status"),errorDescriptor:this.model.get("errorDescriptor")});else{var r=this,s=this.model.getExport(f.HTML);e=s.run(),e.then(function(){s.isFailed()||s.isCancelled()?o.reject({source:"export",format:f.HTML,status:s.get("status"),errorDescriptor:s.get("errorDescriptor")}):(t=s.fetchOutput(),t.then(n.bind(r.components.fetch,r.components),o.reject).then(function(){o.resolve(),r.trigger(m.REQUESTED_PAGES_READY,r)},function(e){"pending"===o.state()&&o.reject(e)}))},function(e){"pending"===o.state()&&o.reject(e)})}return o},renderReport:function(){return this.view.render().done(n.bind(function(){this._reportRendered=!0},this))},exportReport:function(e){var t=new i.Deferred;if(this.model.isFailed()||this.model.isCancelled()){var o=l.reportStatus({source:"execution",status:this.model.get("status"),errorDescriptor:this.model.get("errorDescriptor")});t.reject(o)}else{e.pages=e.pages;var r=new d({options:e},{report:this.model}),s=n.bind(r.waitForExport,r);r.run().then(s,t.reject).then(function(){if(r.isFailed()||r.isCancelled()){var o=l.reportStatus({source:"export",format:e.outputFormat,status:r.get("status"),errorDescriptor:r.get("errorDescriptor")});t.reject(o)}else t.resolve({href:r.urlOutput()},function(e){return e=n.defaults(e||{},{url:r.urlOutput(),type:"GET",headers:{Accept:"text/plain, application/json","x-jrs-base-url":r.report.contextPath},dataType:"text",data:{suppressContentDisposition:!0}}),E(e)})})}return t},destroy:function(){return this.cancelReportExecution().done(n.bind(this.view.remove,this.view))}}),o});