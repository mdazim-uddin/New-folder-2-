(function ($){
	'use strict';
	$('.header-top-left i.fa-bars').on('click', function() {
		$('.main-menu').animate({'left' : '0'});
	})
	$('.close-menu i.fa-window-close').on('click' , function(){
		$('.main-menu').animate({'left' : '-46%'});
	})
})(jQuery);