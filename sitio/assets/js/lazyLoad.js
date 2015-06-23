$(function() {
          $("img").lazyload({
               effect : "fadeIn",
               placeholder : "assets/development/imagenes/loading.gif",
               threshold : 100
          });
        });