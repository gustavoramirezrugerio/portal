// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    //$( ".ocultarElmentosInicio" ).hide();
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
});
  $( "#elementoOcultarMostrar" ).hide();
    $("#ocultarMostrar").click(function () {
        $('#elementoOcultarMostrar').toggle();
  });
  /******  webSoportada    ******
  $("#webSoportada").mouseover(function(event){
    $( "#contenedor_webSoportada" ).show();
     $("#txt_webSoportada").addClass("resaltar");
  });

  $("#webSoportada").mouseout(function(event){
    $( "#contenedor_webSoportada" ).hide();
   $("#txt_webSoportada").removeClass("resaltar");
  });

  /******  arquitecturas    ******
  $("#arquitecturas").mouseover(function(event){
    $( "#contenedor_arquitecturas" ).show();
     $("#txt_Arquitecturas").addClass("resaltar");
  });

  $("#arquitecturas").mouseout(function(event){
    $( "#contenedor_arquitecturas" ).hide();
   $("#txt_Arquitecturas").removeClass("resaltar");
  });
  /******  next    ******/
  function ocultarElementos(){


    $('#form-contacto').hide();
    $('#form-telefono').hide();
    $('#form-map').hide();
  }

  ocultarElementos();

  $("#contacto").mouseover(function(event){
    //ocultarElementos();
    $( "#iconPhone" ).hide();
  });

  $("#contacto").mouseout(function(event){
    $( "#iconPhone" ).show();
  });



  $('#icon-contacto').click(function() {
    ocultarElementos();
    $('#form-contacto').toggle();
  });
  $('.iconMap').click(function() {
    ocultarElementos();
    $('#form-map').toggle();
  });
  $('#iconPhoneEnlace').click(function() {
    ocultarElementos();
    $('#form-telefono').toggle();
  });




////////////////////////////  Web
$("#webSoportada").mouseover(function(event){
  $("#img-tecnologia-web").attr("src","assets/imagenes/tecnologia/sistemas.svg");//CAMBIA-IMAGEN---
});

$("#webSoportada").mouseout(function(event){
  $("#img-tecnologia-web").attr("src","assets/imagenes/tecnologia/web.svg");
});
////////////////////////////  Arquitectura
$("#arquitecturas").mouseover(function(event){
  $("#img-tecnologia-arquitectura").attr("src","assets/imagenes/tecnologia/sistemas.svg"); //CAMBIA-IMAGEN---
});

$("#arquitecturas").mouseout(function(event){
  $("#img-tecnologia-arquitectura").attr("src","assets/imagenes/tecnologia/arquitecturas.svg");
});
////////////////////////////  Lenguajes
$("#lenguajes").mouseover(function(event){
  $("#img-tecnologia-lenguaje").attr("src","assets/imagenes/tecnologia/sistemas.svg"); //CAMBIA-IMAGEN---
});
$("#lenguajes").mouseout(function(event){
  $("#img-tecnologia-lenguaje").attr("src","assets/imagenes/tecnologia/lenguajes.svg");
});
////////////////////////////  servidores
$("#servidores").mouseover(function(event){
  $("#img-tecnologia-servidores").attr("src","assets/imagenes/tecnologia/sistemas.svg"); //CAMBIA-IMAGEN---
});
$("#servidores").mouseout(function(event){
  $("#img-tecnologia-servidores").attr("src","assets/imagenes/tecnologia/servidores.svg");
});
////////////////////////////  basesdedatos
$("#basesdedatos").mouseover(function(event){
  $("#img-tecnologia-basesdedatos").attr("src","assets/imagenes/tecnologia/sistemas.svg"); //CAMBIA-IMAGEN---
});
$("#basesdedatos").mouseout(function(event){
  $("#img-tecnologia-basesdedatos").attr("src","assets/imagenes/tecnologia/basesdedatos.svg");
});
////////////////////////////  Sistemas operativos
$("#sistemaOperativo").mouseover(function(event){
  $("#img-tecnologia-sistemaOperativo").attr("src","assets/imagenes/tecnologia/basesdedatos.svg"); //CAMBIA-IMAGEN---
});
$("#sistemaOperativo").mouseout(function(event){
  $("#img-tecnologia-sistemaOperativo").attr("src","assets/imagenes/tecnologia/sistemas.svg");
});
