$(function() { 

	var paginador = 0;
	
	$('body').append(template());

	$(this).scroll(function(){
		log('Scroll-y: '+ $(this).scrollTop(), true);
		log('Scroll-MaxY: '+ ($(document).height() - $(window).height()), true);

		if ($(this).scrollTop() === ($(document).height() - $(window).height())){
			paginador++;
			$('body').append(template(paginador));
		}
	}); 
});