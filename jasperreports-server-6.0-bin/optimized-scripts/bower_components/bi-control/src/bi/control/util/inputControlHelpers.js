define(["require","jquery","underscore"],function(e){var t=navigator.userAgent.toLowerCase().indexOf("msie")>-1,n=e("jquery"),i=e("underscore");return{LOADING_DIALOG_DELAY:800,isElementInDom:function(e){var t=e.nextSibling,n=e.parentNode&&!(11===e.parentNode.nodeType);return t||n},setInnerHtml:function(e,n,r){var a,s;if(this.isElementInDom(e)){a=e.nextSibling,s=e.parentNode;var l=e.style.display;e.style.display="none",s.removeChild(e)}if(e.innerHTML="",t&&"SELECT"==e.tagName){var u=document.createDocumentFragment();i.each(r.data,function(e){var t=document.createElement("OPTION");t.value=i.isUndefined(e.value)?e.id:e.value,t.innerHTML=e.label,e.selected&&t.setAttribute("selected","selected"),u.appendChild(t)}),e.appendChild(u)}else e.innerHTML=n(r);if(a?s.insertBefore(e,a):s.appendChild(e),e.style.display=l,t&&"SELECT"==e.tagName){var o=e.getAttribute("style");e.removeAttribute("style"),e.setAttribute("style",o)}},wait:function(e){return n.Deferred(function(t){setTimeout(t.resolve,e)})},showLoadingDialogOn:function(e,t){this.wait(t?t:this.LOADING_DIALOG_DELAY).then(i.bind(function(){"pending"==e.state()&&n.when(e).always(i.bind(function(){this.wait(500).then(function(){})},this))},this))},createTimer:function(e){var t=new n.Deferred;return t.done(function(t){var n=(new Date).getTime(),i=n-t;console.log(e+" took time: "+i+" msec.")}),{start:function(){return this.startTime=(new Date).getTime(),this},stop:function(){return t.resolve(this.startTime),this}}},merge:function(e,t){return i.isNull(e)||i.isUndefined(e)?t:i.isNull(t)||i.isUndefined(t)?e:i.isArray(t)?i.map(e,function(e){var n=i.find(t,function(t){return t===e.value});return void 0!=n?e.selected=!0:delete e.selected,e}):this.merge(e,[t])},extractSelection:function(e,t){if(!e)return null;for(var n={},i=0;i<e.length;i++){var r=e[i];if(r.selected&&(n[i]=r.value,t))break}return n},isSelectionChanged:function(e,t){var n=e?i(e).keys():[],r=t?i(t).keys():[],a=i.union(n,r);if(a.length===n.length){var s=e?i.flatten(i(e).values()):[],l=t?i.flatten(i(t).values()):[];return i.difference(s,l).length>0||i.difference(l,s).length>0}return!0}}});