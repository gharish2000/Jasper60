define(["require","jquery","common/component/list/view/ListWithNavigation"],function(t){var e=t("jquery"),i=t("common/component/list/view/ListWithNavigation"),n=i.extend({_multiSelect:function(t,n,o){e(t.target).hasClass("mSelect-svList-button")?this.model.selectionContains(n,o)||this._singleSelect(t,n,o):i.prototype._multiSelect.call(this,t,n,o)}});return n});