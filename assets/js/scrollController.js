$(function() { 
	$(this).scroll(function(){
		log('Scroll-y: '+ $(this).scrollTop(), true);
		log('Scroll-MaxY: '+ ($(document).height() - $(window).height()), true);
	}); 
});