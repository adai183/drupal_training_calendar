$('.service-filter').bind('input', function() {

    var inputText = $(this).val().toLowerCase();
    var services = $(".service-item>span");


    services.filter(function () {
        if (this.innerText.toLowerCase().indexOf(inputText) >= 0) {
            $(this.parentElement).show();
        }else {
            $(this.parentElement).hide();
        }
    })

});
