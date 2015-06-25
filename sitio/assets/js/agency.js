// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $( ".ocultarElmentosInicio" ).hide();
  });







// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function(){

    $('.inferior').affix({
          offset: {
            top: $('header').height()
          }
    });

    $('#sidebar').affix({
          offset: {
            top: 200
          }
    });



    $( "#elementoOcultarMostrar" ).hide();
    $("#ocultarMostrar").click(function () {
        $('#elementoOcultarMostrar').toggle();
     });
});



  /******  webSoportada    ******/
  $("#webSoportada").mouseover(function(event){
    $( "#contenedor_webSoportada" ).show();
     $("#txt_webSoportada").addClass("resaltar");
  });

  $("#webSoportada").mouseout(function(event){
    $( "#contenedor_webSoportada" ).hide();
   $("#txt_webSoportada").removeClass("resaltar");
  });

  /******  arquitecturas    ******/
  $("#arquitecturas").mouseover(function(event){
    $( "#contenedor_arquitecturas" ).show();
     $("#txt_Arquitecturas").addClass("resaltar");
  });

  $("#arquitecturas").mouseout(function(event){
    $( "#contenedor_arquitecturas" ).hide();
   $("#txt_Arquitecturas").removeClass("resaltar");
  });





