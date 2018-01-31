$(window).scroll(function(){
    if ($(document).scrollTop() > 50){
      $('nav').addClass('menu-black');
    }
    else{
      $('nav').removeClass('menu-black');
    }
});