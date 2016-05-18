$(document).ready(function ($) {

	// Bootstrap Scrollspy
	var $body = $(document.body);
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
		$(this).toggleClass('active');
	});

	// directory filter
	$(function() {

        var availableTags = [
          "Miguel Angel Vidal Caballero",
          "Julia Anades Besnard",
          "Juan Carlos Babon Molina",
          "Ángeles Dominguez Soto",
        ];

        $( "#directory" ).autocomplete({
          source: availableTags
        });

    });

	// map
	$('.map-window>.direction').click(function () {

		if (window.innerWidth < 400) {
			$('.map-img-small').hide();
			$('.map-img-direction-small').show();
			$('.map-window').hide();
			$('.direction-window').show();
		} else if (window.innerWidth > 400 && window.innerWidth < 800) {
			$('.map-img-medium').hide();
			$('.map-img-direction-medium').show();
			$('.map-window').hide();
			$('.direction-window').show();
		} else if (window.innerWidth > 800) {
			$('.map-img').hide();
			$('.map-img-direction').show();
			$('.map-window').hide();
			$('.direction-window').show();
		}

	});

	$('.direction-window>.direction').click(function () {

		if (window.innerWidth < 400) {
			$('.map-img-small').show();
			$('.map-img-direction-small').hide();
			$('.map-window').show();
			$('.direction-window').hide();
		} else if (window.innerWidth > 400 && window.innerWidth < 800) {
			$('.map-img-medium').show();
			$('.map-img-direction-medium').hide();
			$('.map-window').show();
			$('.direction-window').hide();
		} else if (window.innerWidth > 800) {
			$('.map-img').show();
			$('.map-img-direction').hide();
			$('.map-window').show();
			$('.direction-window').hide();
		}

	});

});
