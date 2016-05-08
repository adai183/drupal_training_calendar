$(document).ready(function($){
    // 1000 x 500
    // base rect = 280 x 100
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    // paint all rect elements
    ctx.lineWidth = 1;
    ctx.strokeStyle=" #cccccc";

    // director
    ctx.rect(360,20,280,100);
    ctx.stroke();

    // vice directors
    ctx.rect(10,90,280,200);
    ctx.stroke();

    // general manager
    ctx.rect(710,90,280,100);
    ctx.stroke();

    // research department
    ctx.rect(10,340,280,80);
    ctx.stroke();

    // Scientific & Technical Services
    ctx.rect(360,340,280,80);
    ctx.stroke();

    //Administration
    ctx.rect(710,340,280,80);
    ctx.stroke();


    // draw lines

    ctx.beginPath();
    ctx.moveTo(510,120);
    ctx.lineTo(510,340);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(360,65);
    ctx.lineTo(140,65);
    ctx.stroke();
    ctx.lineTo(140,90);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(640,65);
    ctx.lineTo(860,65);
    ctx.stroke();
    ctx.lineTo(860,90);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(860,190);
    ctx.lineTo(860,340);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(510,315);
    ctx.lineTo(122,315);
    ctx.stroke();
    ctx.lineTo(122,340);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10,190);
    ctx.lineTo(290,190);
    ctx.stroke();


    // Add images
    var image = new Image();
    image.src = 'http://placehold.it/60x60';
    image.onload = function(){
        // director
        ctx.drawImage(image, 370, 40);

        //vice directors
         ctx.drawImage(image, 20, 110);
         ctx.drawImage(image, 20, 210);

         // general manager
         ctx.drawImage(image,720,110);

    };

    // Add text
    ctx.font = "14px OpenSans, sans-serif";
    ctx.fillStyle = "#999999";
    ctx.fillText("Director",440, 60);
    ctx.fillText("Vicedirector",90, 130);
    ctx.fillText("Vicedirector",90, 230);
    ctx.fillText("General Manager",790, 130);


    ctx.font = "16px OpenSans, sans-serif";
    ctx.fillStyle = " #333333";
    ctx.fillText("María Jesús Martínez",440, 85);
    ctx.fillText("Germán Rivas",90, 155);
    ctx.fillText("Teresa Suárez",90, 255);
    ctx.fillText("José Luis Chavarría",790, 155);
    ctx.fillText("Research Departments",65, 385);
    ctx.fillText("Scientific & Technical Services",390, 385);
    ctx.fillText("Administration",795, 385);


});
