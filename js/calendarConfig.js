'use strict';

$(document).ready(function ($) {

    var highlightedDays = ["2016-6-19","2016-6-20","2016-6-21","2016-6-30","2016-8-21","2016-8-29"];
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
        }

    }
});


});
