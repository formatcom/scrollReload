$(function() { 
	$(this).scroll(function(){
		log('Scroll-y: '+ $(this).scrollTop(), true);
		log('Scroll-MaxY: '+ ($(document).height() - $(window).height()), true);
	}); 
});


/*window.onload=function(){
console.log($('body'));
agregarEvento($('body'), 'DOMMouseScroll', function(e){
log('Scroll: '+getScrollXY()[1], true);
//log('Height: '+documentSize()[1], true);
console.log('gsgsd');
});
}*/
/*
function getScrollXY() {
var scrOfX = 0, scrOfY = 0;
if( typeof( window.pageYOffset ) == 'number' ) {
//Netscape compliant
scrOfY = window.pageYOffset;
scrOfX = window.pageXOffset;
} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
//DOM compliant
scrOfY = document.body.scrollTop;
scrOfX = document.body.scrollLeft;
} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
//IE6 standards compliant mode
scrOfY = document.documentElement.scrollTop;
scrOfX = document.documentElement.scrollLeft;
}
return [ scrOfX, scrOfY ];
}

function viewPortSize() {
var myWidth = 0, myHeight = 0;
if( typeof( window.innerWidth ) == 'number' ) {
//Non-IE
myWidth = window.innerWidth;
myHeight = window.innerHeight;
} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
//IE 6+ in 'standards compliant mode'
myWidth = document.documentElement.clientWidth;
myHeight = document.documentElement.clientHeight;
} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
//IE 4 compatible
myWidth = document.body.clientWidth;
myHeight = document.body.clientHeight;
}

return [ myWidth, myHeight ];
}

function documentSize() {
var myWidth = 0, myHeight = 0;

//myHeight = window.scrollMaxY;

return [ myWidth, myHeight ];
}*/