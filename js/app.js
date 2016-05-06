$(document).ready(function($){

    // Bootstrap Scrollspy
    var $body   = $(document.body);
    var navHeight = $('.navbar').outerHeight(true) + 10;

    $('#sidebar').affix({
        offset: {
            top: 245
        }
    });

    $body.scrollspy({
	        target: '#leftCol',
	        offset: navHeight
    });
});
