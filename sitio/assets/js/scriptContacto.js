
window.onload = function() {

  $("#divContacto").show();
  $("#btnEviarCorreo").hide();
  $("#divMsjExito").hide();
};



function mostrarOcularBtnEnviarCorreos(){
  var btn = $("#btnEviarCorreo");
  if(form.valid()){
    btn.show();
  } else {
    btn.hide();
  } 
};

function validarForm() {
  
  if(form.valid()){
    enviarCorreos();
  } else {
  alert("Formulario no valido");
  } 

};

function enviarCorreos() {
  
    $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'z1muUOE5ZDGJ62ybeMLGeA',
      'message': {
        'from_email': 'noreply@xpertys.com.mx',
        'from_name': 'Xpertys',
        'to': [
            {
              'email': $('input[id="email"]').val(),
              'name': $('input[id="nombre"]').val(),
              'type': 'to'
            }
          ],
        'autotext': 'true',
        'subject': 'Gracias por su interés',
        'html': '<img src="http://xpertys.com.mx/img/logoXpertys.png" height="80px"><hr style="margin-top: 20px; margin-bottom: 20px; border: 0; border-top: 1px solid #eee;"> <br><h1 style="font-family:"Trebuchet MS", sans-serif;">Estimado <span style="color: #CC1447;">' + $('input[id="nombre"]').val() + '</span>, Agradecemos su mensaje, en breve nuestra área de operaciones se pondrá en contacto con usted.</h1><br><hr style="margin-top: 20px; margin-bottom: 20px; border: 0; border-top: 1px solid #eee;"><br><div style="margin-bottom: 20px; font-style: normal; line-height: 1.42857143;"><strong>Xpertys, S.A. de C.V.</strong><br>Av. Benito Juárez, Ext. 226 Int. 29<br> Los Cedros, Metepec, C.P. 52154<br> Estado de México, México<br>Teléfonos: (+52) 722 2107 591, (+52) 722 2773 650</div>'
      }
    }
   }) .success(function () {
        console.log ( 'Correo enviado al usuario' );
      })
      .error(function (data, status) {
        console.log ( 'Error '+ status);
      });

    $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'z1muUOE5ZDGJ62ybeMLGeA',
      'message': {
        'from_email': 'noreply@xpertys.com.mx',
        'from_name': 'Xpertys',
        'to': [
            {
              'email': 'roy.santos@solinte.com.mx',
              'type': 'to'
            },
            {
              'email': 'isrice@hotmail.com',
              'type': 'to'
            }
          ],
        'autotext': 'true',
        'subject': 'Usuario interesado en Xpertys',
        'html': '<img src="http://xpertys.com.mx/img/logoXpertys.png" height="80px"><hr style="margin-top: 20px; margin-bottom: 20px; border: 0; border-top: 1px solid #eee;"> <br><h1 style="font-family:"Trebuchet MS", sans-serif;"><span style="color: #CC1447;">Nombre: </span>' + $('input[id="nombre"]').val() + '</h1><br><h1 style="font-family:"Trebuchet MS", sans-serif;"><span style="color: #CC1447;">Correo: </span>'+ $('input[id="email"]').val() + '</h1><br><h1 style="font-family:"Trebuchet MS", sans-serif;"><span style="color: #CC1447;">Teléfono: </span>'+ $('input[id="telefono"]').val() + '</h1><br><h1 style="font-family:"Trebuchet MS", sans-serif;"><span style="color: #CC1447;">Organización: </span>'+ $('input[id="organizacion"]').val() + '</h1><br><h1 style="font-family:"Trebuchet MS", sans-serif;"><span style="color: #CC1447;">Comentarios: </span>'+ $('textarea[id="mensaje"]').val() + '</h1><br><br><hr style="margin-top: 20px; margin-bottom: 20px; border: 0; border-top: 1px solid #eee;"><br><div style="margin-bottom: 20px; font-style: normal; line-height: 1.42857143;"><strong>Xpertys, S.A. de C.V.</strong><br>Av. Benito Juárez, Ext. 226 Int. 29<br> Los Cedros, Metepec, C.P. 52154<br> Estado de México, México<br>Teléfonos: (+52) 722 2107 591, (+52) 722 2773 650</div>'
      }
    }
   }).success(function () {
        console.log ( 'Correo enviado los administradores' );
      })
      .error(function (data, status) {
        console.log ( 'Error '+ status);
      });
   
   vaciarFormulario();
   mostrarMensajeOk();
};

function vaciarFormulario() {
  var nombre = document.getElementById("nombre");
  nombre.value = "";
  var email = document.getElementById("email");
  email.value = "";
  var telefono = document.getElementById("telefono");
  telefono.value = "";
  var organizacion = document.getElementById("organizacion");
  organizacion.value = "";
  var mensaje = document.getElementById("mensaje");
  mensaje.value = "";
};

function mostrarMensajeOk() {
  $("#btnEviarCorreo").hide();
  $("#divMsjExito").show();
  setTimeout(function(){
    $("#divMsjExito").hide();
  }, 3000);
};

var fom;

$( document ).ready(function() {

  form = $("#formContacto");    

  $('form').validate({
    rules: {
      nombre: {
        minlength: 3,
        maxlength: 100,
        required: true
      },
      email: {
        required: true,
        maxlength: 60,
        email: true
      },
      telefono:{
        required: true,
        maxlength: 20,
        number: true
      },
      organizacion: {
        required: true,
        maxlength: 100
      },
      mensaje:{
        required: true,
        maxlength: 300
      }
    },
    
    highlight: function(element) {
      $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
      $(element).closest('.form-group').removeClass('has-error');
    },
    
    errorElement: 'span',
    errorClass: 'help-block',
    
    errorPlacement: function(error, element) {
      if(element.parent('.input-group').length) {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });
});

function initialize() {

  var myCenter=new google.maps.LatLng(19.266455,-99.626581);
  var marker;

  setTimeout(function(){ 
    var mapProp = {
      center:myCenter,
      zoom:15,
      mapTypeId:google.maps.MapTypeId.ROADMAP
      };

    var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);

    var marker=new google.maps.Marker({
      position:myCenter,
      animation:google.maps.Animation.BOUNCE
      });

    marker.setMap(map);
  }, 1000);
};





