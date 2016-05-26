'use strict';
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

	// event calendar
	$(".events ul>li").click(function () {
		$(".events ul>li").removeClass('schedule-head');
		$(this).toggleClass('schedule-head');

		// set content
		switch (this.id) {

		    case '1':
				$('.detail img').attr("src", "img/event1.png");
				$(".events .detail .title").html('19-20 JUNE 2016 MADRID - Palacio de congresos de Madrid');
				$(".events .detail .subtitle").html('4th Symposium on Biotechnology applied to lignocelluloses');
				$(".detail-link a").attr('href',"http://lignobiotech.es/" );
		        break;
		    case '2':
				$('.detail img').attr("src", "img/event2.png");
				$(".events .detail .title").html('30 JUNE 2016 MADRID - Rafaelhoteles Atocha');
				$(".events .detail .subtitle").html('15th International Symposium on Biopolymers');
				$(".detail-link a").attr('href',"http://www.isbp2016.com/" );

		        break;
		    case '3':
				$('.detail img').attr("src", "img/event3.png");
				$(".events .detail .title").html('27 MAY 2016 MADRID - CIB-CSIC');
				$(".events .detail .subtitle").html('TOLLERANT 2ND MEETING');
				$(".detail-link a").attr('href',"http://www.tollerant.eu/2nd-meeting-2016/");
		        break;
		    case '4':
				$('.detail img').attr("src", "img/event4.png");
				$(".events .detail .title").html('29 AUGUST 2016 MADRID - Palacio de congresos de Madrid');
				$(".events .detail .subtitle").html('Marina Garín');
		        break;
		}

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
