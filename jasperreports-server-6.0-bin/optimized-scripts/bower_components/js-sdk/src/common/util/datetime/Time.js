define(["require"],function(){function t(t){return new RegExp("^"+t.toLowerCase().replace("hh","([0-1][0-9]|2[0-3])").replace("mm","([0-5][0-9])").replace("ss","([0-5][0-9])")+"$")}function s(t){var s=t.toLowerCase().match(/(hh|mm|ss)/g),e={h:-1,m:-1,s:-1};if(s)for(var r=0;r<s.length;r++)-1==e[s[r].toString().charAt(0)]&&(e[s[r].toString().charAt(0)]=r+1);return e}function e(t,s,e){this.hours=t||0,this.minutes=s||0,this.seconds=e||0}return e.prototype.total=function(){return 3600*this.hours+60*this.minutes+this.seconds},e.prototype.isValid=function(){return this.hours>=0&&this.hours<=23&&this.minutes>=0&&this.minutes<=59&&this.seconds>=0&&this.seconds<=59},e.prototype.format=function(t){return t.toLowerCase().replace("hh",this.hours<10?"0"+this.hours:this.hours).replace("mm",this.minutes<10?"0"+this.minutes:this.minutes).replace("ss",this.seconds<10?"0"+this.seconds:this.seconds)},e.compare=function(t,s){var e=t.total(),r=s.total();return r>e?-1:e>r?1:0},e.parse=function(r,n){var i=t(n);if(_.isString(r)&&i.test(r)){var o=new e,h=i.exec(r),u=s(n);return o.hours=parseInt(h[u.h],10),o.minutes=parseInt(h[u.m],10),o.seconds=parseInt(h[u.s],10),o}return void 0},e});