//Pude hacer que funcionara el carrusel (me guié de un video de Youtube) pero hay algunas cosas en
//las funciones que no me quedan muy claras.


//almacenar slider en una variable
var slider = $('#slider');
//almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider .pandas:last').insertBefore('#slider .pandas:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+150+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#slider .pandas:first').insertAfter('#slider .pandas:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider .pandas:last').insertBefore('#slider .pandas:first');
		slider.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 5000);
}
siguiente.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();