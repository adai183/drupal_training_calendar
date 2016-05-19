$(document).ready(function ($) {

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

});
