$(document).ready(function() {

    if( $(window).width() > 800 ){
        $('.menu .texto').css({
          opacity: 0,
          marginTop:0,
     });

       $('header .texto').animate({
          opacity: 1,
          marginTop:'-60px',
     }, 1500);
   }
   $('#mostrarSegundaVistaButton').click(function() {
     $('.primeraVista').fadeOut(1200);
     $('.segundaVista').delay(1100).fadeIn(3000);
   });
   //scroll elementos menu
  var Inicio = $('#btn-inicio').offset().top;

  $('#btn-inicio').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 740
    },500);
    });

    var menu = $('#btn-moda').offset().top;

    $('#btn-moda').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 1670
      },500);
      });

    var galeria = $('#btn-galeria').offset().top;

    $('#btn-galeria').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 2420
      },500);
      });

    var ubicacion = $('#btn-contacto').offset().top;

    $('#btn-contacto').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 3200
      },500);
      });
});
