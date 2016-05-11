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

    // Button Selector
    $('.button-selector').click(function () {
        $(this).toggleClass('active')
    });

    // map
    $('.map-window>.direction').click(function () {

        if (window.innerWidth < 400) {
            $('.map-img-small').hide();
            $('.map-img-direction-small').show();
            $('.map-window').hide();
            $('.direction-window').show();
        }else if (window.innerWidth > 400) {
            $('.map-img').hide();
            $('.map-img-direction').show();
            $('.map-window').hide();
            $('.direction-window').show();
        }

    });

    $('.direction-window>.back').click(function () {

        if (window.innerWidth <400) {
            $('.map-img-small').show();
            $('.map-img-direction-small').hide();
            $('.map-window').show();
            $('.direction-window').hide();
        }else if (window.innerWidth > 400) {
            $('.map-img').show();
            $('.map-img-direction').hide();
            $('.map-window').show()
            $('.direction-window').hide();
        }

    });

});
