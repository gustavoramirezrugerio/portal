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
$(document).ready(function(e) {
  $("#img-tecnologia-web").attr("data-original","assets/imagenes/tecnologia/opacity_web.svg");
  $("#img-tecnologia-arquitectura").attr("data-original","assets/imagenes/tecnologia/opacity_arquitecturas.svg");
  $("#img-tecnologia-lenguaje").attr("data-original","assets/imagenes/tecnologia/opacity_lenguajes.svg");

  $("#img-tecnologia-servidores").attr("data-original","assets/imagenes/tecnologia/opacity_servidores.svg");

  $("#img-tecnologia-basesdedatos").attr("data-original","assets/imagenes/tecnologia/opacity_basesdedatos.svg");

  $("#img-tecnologia-sistemaOperativo").attr("data-original","assets/imagenes/tecnologia/opacity_sistemas.svg");

	  console.log("documento listo");


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
    console.log("Ocultamos elementos de inicio");
    $('#contenidoContactoTelefono').hide();
    $('#contenidoGeolocalizacion').hide();
    $('#form-contacto').hide();
  }
  ocultarElementos();

  $('#iconPhone').click(function() {
      ocultarElementos();
      $('#contenidoContactoTelefono').show();
    });

    $('#iconGeolocalizacion').click(function() {
      ocultarElementos();
      $('#contenidoGeolocalizacion').show();
    });

    $('#iconContacto').click(function() {
      ocultarElementos();
      $('#form-contacto').show();
    });







////////////////////////////  Web
$("#webSoportada").mouseover(function(event){
  $("#img-tecnologia-web").attr("src","assets/imagenes/tecnologia/web.svg");//CAMBIA-IMAGEN---
});

$("#webSoportada").mouseout(function(event){
  $("#img-tecnologia-web").attr("src","assets/imagenes/tecnologia/opacity_web.svg");
});
////////////////////////////  Arquitectura
$("#arquitecturas").mouseover(function(event){
  $("#img-tecnologia-arquitectura").attr("src","assets/imagenes/tecnologia/arquitecturas.svg"); //CAMBIA-IMAGEN---
});

$("#arquitecturas").mouseout(function(event){
  $("#img-tecnologia-arquitectura").attr("src","assets/imagenes/tecnologia/opacity_arquitecturas.svg");
});
////////////////////////////  Lenguajes
$("#lenguajes").mouseover(function(event){
  $("#img-tecnologia-lenguaje").attr("src","assets/imagenes/tecnologia/lenguajes.svg"); //CAMBIA-IMAGEN---
});
$("#lenguajes").mouseout(function(event){
  $("#img-tecnologia-lenguaje").attr("src","assets/imagenes/tecnologia/opacity_lenguajes.svg");
});
////////////////////////////  servidores
$("#servidores").mouseover(function(event){
  $("#img-tecnologia-servidores").attr("src","assets/imagenes/tecnologia/servidores.svg"); //CAMBIA-IMAGEN---
});
$("#servidores").mouseout(function(event){
  $("#img-tecnologia-servidores").attr("src","assets/imagenes/tecnologia/opacity_servidores.svg");
});
////////////////////////////  basesdedatos
$("#basesdedatos").mouseover(function(event){
  $("#img-tecnologia-basesdedatos").attr("src","assets/imagenes/tecnologia/basesdedatos.svg"); //CAMBIA-IMAGEN---
});
$("#basesdedatos").mouseout(function(event){
  $("#img-tecnologia-basesdedatos").attr("src","assets/imagenes/tecnologia/opacity_basesdedatos.svg");
});
////////////////////////////  Sistemas operativos
$("#sistemaOperativo").mouseover(function(event){
  $("#img-tecnologia-sistemaOperativo").attr("src","assets/imagenes/tecnologia/sistemas.svg"); //CAMBIA-IMAGEN---
});
$("#sistemaOperativo").mouseout(function(event){
  $("#img-tecnologia-sistemaOperativo").attr("src","assets/imagenes/tecnologia/opacity_sistemas.svg");
});

$('#idContacto').click(function() {
   $('#contenidoContactoTelefono').show();
  $('#contenidoGeolocalizacion').hide();
});

$('#idGeolocalizacion').click(function() {
  $('#contenidoContactoTelefono').hide();
  $('#contenidoGeolocalizacion').show();
});