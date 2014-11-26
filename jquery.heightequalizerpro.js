/* =========================================================
*	HeightEqualizerPro.js 4.0
*	Credits: Alexander Bech
*	http://github.com/AlexanderBech/HeightEqualizerPro.js
* ========================================================== */
(function($){
    $.fn.heightEqualizerPro=function(){
    	var subItem = arguments[0] || null,
            greatestHeight = 0;

        this.each(function(){
            var $this = subItem ? $(subitem, $(this)) : $(this);
            $this.height('auto');
            var thisHeight = $this.height();
            if(thisHeight>greatestHeight) greatestHeight = thisHeight;
        });

        this.each(function(){
            var $this = subItem ? $(subitem, $(this)) : $(this);
            $this.height(greatestHeight);
        });
    };
})(jQuery);
