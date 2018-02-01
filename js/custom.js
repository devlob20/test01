new WOW().init();

$('#bienvenido').typeIt({
     strings: ["Un callcenter dinamico"],
     speed: 70,
     cursor: false
});
$('#message').typeIt({
     speed: 50,
     autoStart: false
});
$('#postulate').typeIt({
     strings: ["Nuestra gente es", "el motor de Orbitel."],
     speed: 50,
     autoStart: false
});
$('#contactanos').typeIt({
     strings: ["Entra en contacto", "con nosotros."],
     speed: 50,
     autoStart: false
});

/*--- Animación intro ---*/
setTimeout(function(){

$('.h1-sub').fadeTo(3000,1);
$('.navbar').fadeTo(3000,1);
$('.watch-video').fadeTo(3000,1);
$('.main-home-half').css('background-image','url("img/bg.jpg")');


}, 2000);

/*--- Cambio Icono ---*/

$('.navbar-toggler').click(function(){
  console.log('esta exe');
  var visivilidad = $('.collapse.show');
  if(visivilidad.length > 0){
    $('body > nav > div > button > img').attr('src','img/menu.png');
    console.log('retornar');
  }else{
    $('body > nav > div > button > img').attr('src','img/return.png');
    console.log('menusar');
  }
});


$(document).ready(function(){
  adaptarlogo();
});

$(window).resize(function(){
  adaptarlogo();
});


function adaptarlogo(){
  var alto = $(window).height();
  var ancho = $(window).width();
  if(ancho <= 991){
    $('body > nav > div > a > img').attr('src','img/logo-responsive.png');
  }else{
    $('body > nav > div > a > img').attr('src','img/logo.svg');
  }

}
