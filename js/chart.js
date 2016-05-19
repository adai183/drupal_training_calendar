'use strict';
$(document).ready(function ($) {
	// 1000 x 500
	// base rect = 280 x 100
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	// paint all rect elements
	ctx.lineWidth = 1;
	ctx.strokeStyle = " #cccccc";

	// director
	ctx.rect(360, 20, 280, 100);
	ctx.stroke();

	// vice directors
	ctx.rect(10, 90, 280, 200);
	ctx.stroke();

	// general manager
	ctx.rect(710, 90, 280, 100);
	ctx.stroke();

	// research department
	ctx.rect(10, 340, 280, 80);
	ctx.stroke();

	// Scientific & Technical Services
	ctx.rect(360, 340, 280, 80);
	ctx.stroke();

	//Administration
	ctx.rect(710, 340, 280, 80);
	ctx.stroke();


	// draw lines

	ctx.beginPath();
	ctx.moveTo(510, 120);
	ctx.lineTo(510, 340);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(360, 65);
	ctx.lineTo(140, 65);
	ctx.stroke();
	ctx.lineTo(140, 90);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(640, 65);
	ctx.lineTo(860, 65);
	ctx.stroke();
	ctx.lineTo(860, 90);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(860, 190);
	ctx.lineTo(860, 340);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(510, 315);
	ctx.lineTo(122, 315);
	ctx.stroke();
	ctx.lineTo(122, 340);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(10, 190);
	ctx.lineTo(290, 190);
	ctx.stroke();


	// Add images
	var image = new Image();
	image.src = 'img/german_caballero.png';
	image.onload = function () {
		// director
		ctx.drawImage(image, 370, 40);

		//vice directors
		ctx.drawImage(image, 20, 110);
		ctx.drawImage(image, 20, 210);

		// general manager
		ctx.drawImage(image, 720, 110);

	};

	// Add text
	ctx.font = "14px OpenSans, sans-serif";
	ctx.fillStyle = "#999999";
	ctx.fillText("Director", 450, 60);
	ctx.fillText("Vicedirector", 100, 130);
	ctx.fillText("Vicedirector", 100, 230);
	ctx.fillText("General Manager", 800, 130);

	ctx.font = "16px OpenSans, sans-serif";
	ctx.fillStyle = " #333333";
	ctx.fillText("María Jesús Martínez", 450, 85);
	ctx.fillText("Germán Rivas", 100, 155);
	ctx.fillText("Teresa Suárez", 100, 255);
	ctx.fillText("José Luis Chavarría", 800, 155);
	ctx.fillText("Research Departments", 65, 385);
	ctx.fillText("Scientific & Technical Services", 390, 385);
	ctx.fillText("Administration", 795, 385);

	ctx.font = "20px OpenSans, sans-serif";
	ctx.fillStyle = " #333333";
	ctx.fillText("General Manager", 10, 500);
	ctx.fillText("Mainteance support manager", 360, 500);
	ctx.fillText("Library", 710, 500);

	ctx.font = "14px OpenSans, sans-serif";
	ctx.fillStyle = "#999999";
	ctx.fillText("In charge", 10, 550);
	ctx.fillText("In charge", 360, 550);
	ctx.fillText("In charge", 710, 550);

	ctx.fillText("Financial manager", 10, 625);
	ctx.fillText("Design-mechanics", 360, 625);

	ctx.fillText("Human resources manager", 10, 700);
	ctx.fillText("Photography", 360, 700);

	ctx.fillText("Logistics manager", 10, 775);
	ctx.fillText("Computer support", 360, 775);

	ctx.fillText("Maintenance", 360, 850);

	ctx.font = "16px OpenSans, sans-serif";
	ctx.fillStyle = " #333333";
	ctx.fillText("José Luis Chavarría del Valle", 10, 575);
	ctx.fillText("Antonio García Álvarez", 360, 575);
	ctx.fillText("Olvido Partearroyo Lacaba", 710, 575);

	ctx.fillText("Juan Carlos González Baena", 10, 650);
	ctx.fillText("Aurelio Huertado Caro", 360, 650);

	ctx.fillText("Manuel Molina Morente", 10, 725);
	ctx.fillText("Mónica Fontenla", 360, 725);

	ctx.fillText("Manuel Molina Morente", 10, 800);
	ctx.fillText("José Manuel Angulo Zapatero", 360, 800);

	ctx.fillText("José Cabañas Olivares", 360, 875);


});
