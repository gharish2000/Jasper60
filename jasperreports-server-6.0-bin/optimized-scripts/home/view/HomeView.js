define(["require","backbone","jquery","home/view/ExpandableBlockView","home/view/PopularLinkView","home/view/ListView","home/view/WorkflowView","home/view/ResourceView","text!home/template/homeTemplate.htm","bundle!HomeBundle"],function(e){var t=e("backbone"),i=e("jquery"),o=e("home/view/ExpandableBlockView"),l=e("home/view/PopularLinkView"),n=e("home/view/ListView"),s=e("home/view/WorkflowView"),a=e("home/view/ResourceView"),r=n.extend({tagName:"ul",className:"resourceBlock-list"}),m=n.extend({tagName:"table",className:"resourceBlock-table"}),w=e("text!home/template/homeTemplate.htm"),h=e("bundle!HomeBundle");return t.View.extend({initialize:function(){var e=new r({collection:this.model.getContentReferences(),listElementView:l}),t=new m({collection:this.model.getResources(),listElementView:a,msgNothingToDisplay:h["recently.viewed.nothing.display"]});this.popularLinksBlock=new o({title:h["popular.resources"],stateKey:"homePagePopularLinksExpandableList",$block:e.$el}),this.recentItemsBlock=new o({title:h["recently.viewed.items"],stateKey:"homePageRecentlyViewedResourcesExpandableList",$block:t.$el}),this.workflowsView=new n({collection:this.model.getWorkflows(),listElementView:s,className:"workflowsBlock",template:"",tagName:"ul"}),this.model.on("change",this.render,this)},render:function(){return this.$el.append(i(_.template(w,this.model.toJSON()))),this.$(".homeMain").append(this.workflowsView.$el),this.$(".homeSidebar-title").after(this.popularLinksBlock.render().$el),this.$(".homeSidebar").append(this.recentItemsBlock.render().$el),this}})});