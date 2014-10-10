/* =========================================================
*	HeightEqualizerPro.js 3.0
*	Credits: Jacob Eriksen
*	http://github.com/AlexanderBech/HeightEqualizerPro.js
* ========================================================== */
(function($){
    $.fn.heightEqualizerPro=function(){
    	var subItem=arguments[0]||null,o={};
        this.each(function(){
            var $t=subItem?$(subItem,$(this)):$(this);$t.height('auto');var k='_'+$t.offset().top;
            if(!o[k])o[k]=[];o[k].push({s:$t,h:$t.outerHeight()});
        })
        for(var k in o){
            var a=o[k].sort(function(a,b){return b.h-a.h}),l=a.length;
            if(a[0].h!=a[l-1].h)for(var i=0;i<l;++i){ a[i].s.height(a[0].h);}
        }
    };
})(jQuery);
