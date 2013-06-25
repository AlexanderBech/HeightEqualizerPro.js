/* =========================================================
*	HeightEqualizerPro.js 1.0
*	Credits: Jacob Eriksen / Alexander Bech
*	http://github.com/AlexanderBech/HeightEqualizerPro.js
* ========================================================== */
(function ($){
	$.fn.heightEqualizer = function(){
		var eq={};
	    this.each(function(){
	        var $tgt=$(this); $tgt.height('auto'); var k='_'+$tgt.offset().top; if(!eq[k])eq[k]=[];
	        eq[k].push({s:$tgt,h:$tgt.height()});
	    })
	    for(var k in eq){
	        var arr=eq[k].sort(function(a, b) { return b.h - a.h });
	        if(arr[0].h!=arr[arr.length-1].h) for(var i=0,l=arr.length;i<l;++i){ arr[i].s.height(arr[0].h); }
	    }
	};
})(jQuery);