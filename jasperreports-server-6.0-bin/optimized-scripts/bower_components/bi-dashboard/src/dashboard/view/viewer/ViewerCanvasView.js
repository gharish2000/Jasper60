define(["require","exports","module","../base/CanvasView","text!../../template/viewerCanvasTemplate.htm"],function(e){var a=e("../base/CanvasView"),t=e("text!../../template/viewerCanvasTemplate.htm");return a.extend({template:_.template(t),showMessage:function(e){this.$(".panel.info.nothingToDisplay").removeClass("hidden").show().find(".message").html(e)},hideMessage:function(){this.$(".panel.info.nothingToDisplay").addClass("hidden").hide()}})});