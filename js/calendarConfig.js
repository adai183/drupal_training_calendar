'use strict';

$(document).ready(function ($) {

    var highlightedDays = ["2016-6-19", "2016-6-20", "2016-6-21", "2016-6-30", "2016-8-21", "2016-8-29", "2016-6-1", "2016-6-2", "2016-6-9", "2016-6-15", "2016-6-17", "2016-6-23", "2016-6-27" ];
    var date = new Date();

$( "#datepicker" ).datepicker({
    inline: true,
    beforeShowDay: function(date) {

        var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();
        for (var i = 0; i < highlightedDays.length; i++) {


            if($.inArray(y + '-' + (m+1) + '-' + d,highlightedDays) !== -1) {
                //return [false];
                return [true, 'ui-state-active', ''];
            }
        }
        return [true];

    },
    onSelect: function (dateText) {

        // set content
        switch (dateText) {
            case '06/19/2016':
                $('.detail img').attr("src", "img/event1.png");
                $(".events .detail .title").html('19-21 JUNE 2016 MADRID - Palacio de congresos de Madrid');
                $(".events .detail .subtitle").html('4th Symposium on Biotechnology applied to lignocelluloses');
                $(".detail-link a").attr('href',"http://lignobiotech.es/" );

                // adjust side menu
                $(".events ul>li").removeClass('schedule-head');
                $('#1').toggleClass('schedule-head');

                break;
            case '06/20/2016':
                $('.detail img').attr("src", "img/event1.png");
                $(".events .detail .title").html('19-21 JUNE 2016 MADRID - Palacio de congresos de Madrid');
                $(".events .detail .subtitle").html('4th Symposium on Biotechnology applied to lignocelluloses');
                $(".detail-link a").attr('href',"http://lignobiotech.es/" );

                // adjust side menu
                $(".events ul>li").removeClass('schedule-head');
                $('#1').toggleClass('schedule-head');

                break;
            case '06/21/2016':
                $('.detail img').attr("src", "img/event1.png");
                $(".events .detail .title").html('19-21 JUNE 2016 MADRID - Palacio de congresos de Madrid');
                $(".events .detail .subtitle").html('4th Symposium on Biotechnology applied to lignocelluloses');
                $(".detail-link a").attr('href',"http://lignobiotech.es/" );

                // adjust side menu
                $(".events ul>li").removeClass('schedule-head');
                $('#1').toggleClass('schedule-head');

                break;
            case '06/30/2016':
                $('.detail img').attr("src", "img/event2.png");
                $(".events .detail .title").html('30 JUNE 2016 MADRID - CIB');
                $(".events .detail .subtitle").html('15th International Symposium on Biopolymers');
                $(".detail-link a").attr('href',"http://www.isbp2016.com/" );

                // adjust side menu
                $(".events ul>li").removeClass('schedule-head');
                $('#2').toggleClass('schedule-head');

                break;
            case '05/27/2016':
                $('.detail img').attr("src", "img/event3.png");
                $(".events .detail .title").html('27 MAY 2016 MADRID - CIB-CSIC');
                $(".events .detail .subtitle").html('TOLLERANT 2ND MEETING');
                $(".detail-link a").attr('href',"http://www.tollerant.eu/2nd-meeting-2016/" );

                // adjust side menu
                $(".events ul>li").removeClass('schedule-head');
                $('#3').toggleClass('schedule-head');

                break;
            case '08/29/2016':
                $('.detail img').attr("src", "img/event4.png");
                $(".events .detail .title").html('29 AUGUST 2016 MADRID - Palacio de congresos de Madrid');
                $(".events .detail .subtitle").html('Marina Garín');

                // adjust side menu
                $(".events ul>li").removeClass('schedule-head');
                $('#4').toggleClass('schedule-head');

                break;
            case '06/01/2016':
                $('.detail img').attr("src", "img/event2.png");
                $(".events .detail .title").html('Dpto. Biología Celular y Molecular: Autophagy during development and differentiation.');
                $(".events .detail .subtitle").html('Lorena Esteban Martínez');
                $(".detail-link a").attr('href',"outreach.php#1");
                // adjust side menu
                $(".events ul>li").removeClass('schedule-head');
                $('#4').toggleClass('schedule-head');

                break;
            case '06/02/2016':
                $('.detail img').attr("src", "img/event2.png");
                $(".events .detail .title").html('Dpto. Medicina Celular y Molecular: Traslación a la práctica clínica de las técnicas genómicas.');
                $(".events .detail .subtitle").html('Carmen Ayuso');
                $(".detail-link a").attr('href',"outreach.php#2");
                // adjust side menu
                $(".events ul>li").removeClass('schedule-head');


                break;
            case '06/09/2016':
                $('.detail img').attr("src", "img/event2.png");
                $(".events .detail .title").html('Machine learning methods applied to QSAR modelling in cheminformatics and network analysis in systems biology.');
                $(".events .detail .subtitle").html('Ignacio Ponzoni');
                $(".detail-link a").attr('href',"outreach.php#3");
                // adjust side menu
                $(".events ul>li").removeClass('schedule-head');


                break;
            case '06/15/2016':
                $('.detail img').attr("src", "img/event2.png");
                $(".events .detail .title").html('Dpto. Medicina Celular y Molecular: Mecanismos de progresión tumoral y resistencia a fármacos en mieloma múltiple.');
                $(".events .detail .subtitle").html('Silvia Sevilla Movilla');
                $(".detail-link a").attr('href',"outreach.php#4");
                // adjust side menu
                $(".events ul>li").removeClass('schedule-head');

                break;

            case '06/17/2016':
                $('.detail img').attr("src", "img/event2.png");
                $(".events .detail .title").html('Dpto. Biología Medioambiental: Steroid use by a pathogen, – a ring-side report.');
                $(".events .detail .subtitle").html('Prof. Lindsay D. Eltis');
                $(".detail-link a").attr('href',"outreach.php#5");
                // adjust side menu
                $(".events ul>li").removeClass('schedule-head');

                break;

            case '06/23/2016':
                $('.detail img').attr("src", "img/event2.png");
                $(".events .detail .title").html('Dpto. Biología Medioambiental: A proteomics study of bacterial lignin depolymerization and catabolism.');
                $(".events .detail .subtitle").html('Dra. Davinia Salvachúa');
                $(".detail-link a").attr('href',"outreach.php#7");
                // adjust side menu
                $(".events ul>li").removeClass('schedule-head');

                break;

            case '06/27/2016':
                $('.detail img').attr("src", "img/event2.png");
                $(".events .detail .title").html('therapeutic effect of “Intravenous Immunoglobulins": Immunological training and tolerance.');
                $(".events .detail .subtitle").html('Ángeles Domínguez Soto');
                $(".detail-link a").attr('href',"outreach.php#8");
                // adjust side menu
                $(".events ul>li").removeClass('schedule-head');

                break;
        }

    }
});


});
