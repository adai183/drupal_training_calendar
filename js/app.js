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

        $('.map-img').hide();
        $('.map-img-direction').fadeIn( "slow");
        $('.map-window').hide();
        $('.direction-window').fadeIn( "slow");

    });

    $('.direction-window>.back').click(function () {

        $('.map-img').fadeIn( "slow");
        $('.map-img-direction').hide();
        $('.map-window').fadeIn( "slow");
        $('.direction-window').hide();

    });

});
