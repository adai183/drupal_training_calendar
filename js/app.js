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
				$('.detail img').attr("src", "img/event2.png");
				$(".events .detail .title").html('1 JUNE 2016 MADRID - Lecture Hall of CIB');
				$(".events .detail .subtitle").html('Autophagy during development and differentiation.');
				$(".detail-link a").attr('href',"outreach.php#1");
		        break;
		    case '2':
				$('.detail img').attr("src", "img/event3.png");
				$(".events .detail .title").html('2 JUNE 2016 MADRID - Lecture Hall of CIB');
				$(".events .detail .subtitle").html('Traslación a la práctica clínica de las técnicas genómicas.');
				$(".detail-link a").attr('href',"outreach.php#2" );

		        break;
		    case '3':
				$('.detail img').attr("src", "img/event2.png");
				$(".events .detail .title").html('9 JUNE 2016 MADRID - Seminar Room 273');
				$(".events .detail .subtitle").html('Machine learning methods applied to QSAR modelling');
				$(".detail-link a").attr('href',"outreach.php#3");
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
          source: availableTags,
		  select: function (e, ui) {
		  	console.log(window.location);
			window.location.href = window.location.origin + '/drupal_training_calendar/caballero.html';
		  }
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

	//////********** Correciones *********/////////

	// set all text in Jumbotrons to uppercase
	var upCaseJumbo = function () {

		var uppercaseText = $(".jumbotron").text().toUpperCase();
		$(".jumbotron").text(uppercaseText);
	};

	var addMoreInfo = function(){
		var checkText = $(".nav-stacked li:nth-child(4)").text().trim();
		if (checkText === "PUBLICATIONS") {
			$(".nav-stacked").append('<li><a href="#sec5">MORE INFO</a></li>');
		}

	};

	upCaseJumbo();
	addMoreInfo();

});
