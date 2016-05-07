$(document).ready(function($){
    // 800 x 400
    // base rect = 224 x 75
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    // paint all rect elements

    // director
    ctx.rect(288,20,224,75);
    ctx.stroke();

    // vice directors
    ctx.rect(0,80,224,150);
    ctx.stroke();

    // general manager
    ctx.rect(576,80,224,75);
    ctx.stroke();

    // research department
    ctx.rect(0,300,224,50);
    ctx.stroke();

    // Scientific & Technical Services
    ctx.rect(288,300,224,50);
    ctx.stroke();

    //Administration
    ctx.rect(576,300,224,50);
    ctx.stroke();



});
