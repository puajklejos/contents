$(document).ready(function(){

	$("#li_desplegable").hide();
	var cont=1;

	//Para desplegar el formulario de login
	$("#login").click(function(){
		
		cont++;
		if(cont%2!=0)
		{
			$("#li_desplegable").slideDown();
		}
		else
		{
			$("#li_desplegable").slideUp();
		}
	});

	//Redireccionar desde la pagina de inicio hacia niños o padres
	$("#l_nene").click(function(){
		var x=$(this).attr("id");
	});

	$('#form_cerrar_sesion').on('click', function () {
        var postData = $(this).serialize();
        var formURL = $(this).attr("action");
        $.ajax({
            url: formURL,
            type: 'post',
            data: postData,
            dataType: 'json',
            success: function (resp) {
                window.location.href = resp.redirect;
            }
        });
    });

	$('#form_login').on('submit', function (event) {
        event.preventDefault();
        var postData = $(this).serialize();
        var formURL = $(this).attr("action");
        $.ajax({
            url: formURL,
            type: 'post',
            data: postData,
            dataType: 'json',
            success: function (resp) {
                window.location.href = resp.redirect;
            },
            error: function () {
                alert('Nombre de usuario o contraseña incorrectos\n\n Contents');
            }
        });
    });


    $('form#form_register').on('submit', function (event) {
      //alert('Bu');
      event.preventDefault();
        var postData = $(this).serialize();
        var formURL = $(this).attr("action");
        console.log(postData+formURL);
        $.ajax({
            url: formURL,
            type: 'post',
            data: postData,
            dataType: 'json',
            success: function (resp) {
              //console.log(resp);
              //alert(resp);
                //window.location.href = resp.redirect;
                if(resp==1)
                {
                    alert("Registro procesado con éxito\n\n Contents");
                    window.location.href = 'home';
                    //irHome();
                }
                else
                {
                    alert("No se pudo completar el registro, pruebe a cambiar el nombre de usuario y asegurese que el NIF/NIF Parental sean correctos!\n\n El NIF Parental debe haber sido registrado previamente.\n\n Contents");
                    //window.location.href = '/contents/register'.redirect;
                }
            }
        });
    });

    /*function irHome(){
      window.location.href='/contents/'.redirect;
    }*/

    //-----------------
    $("#input1").hide();
    $("#input2").hide();
    $("#input3").hide();
    $("#input4").hide();
    $("#input5").hide();
    $("#input6").hide();
    $("#input7").hide();
    $("#input8").hide();
    $("#input9").hide();
    
    $("#li1").hide();
    $("#li2").hide();
    $("#li3").hide();
    $("#li4").hide();
    $("#li5").hide();
    $("#li6").hide();
    $("#li7").hide();
    $("#li8").hide();

    $("#tipo").change(function(){
        //alert("Hola");
        var x=$(this).val();
        //alert(x);
        if(x==2){
                $("#input1").hide();
                $("#input2").hide();
                $("#input3").hide();
                $("#input4").hide();
                $("#input5").hide();
                $("#input6").hide();
                $("#input7").hide();
                $("#input8").hide();
                //-----------------
                $("#li1").hide();
                $("#li2").hide();
                $("#li3").hide();
                $("#li4").hide();
                $("#li5").hide();
                $("#li6").hide();
                $("#li7").hide();
                $("#li8").hide();

            $(".gen").show();
        }
        else if(x==""){
                $("#input1").hide();
                $("#input2").hide();
                $("#input3").hide();
                $("#input4").hide();
                $("#input5").hide();
                $("#input6").hide();
                $("#input7").hide();
                $("#input8").hide();
                $("#input9").hide();
                //----------------
                $("#li1").hide();
                $("#li2").hide();
                $("#li3").hide();
                $("#li4").hide();
                $("#li5").hide();
                $("#li6").hide();
                $("#li7").hide();
                $("#li8").hide();
        }   
        else{
                $("#input1").hide();
                $("#input2").hide();
                $("#input3").hide();
                $("#input4").hide();
                $("#input5").hide();
                $("#input6").hide();
                $("#input7").hide();
                $("#input8").hide();
                $("#input9").hide();
                //-----------------
                $("#li1").hide();
                $("#li2").hide();
                $("#li3").hide();
                $("#li4").hide();
                $("#li5").hide();
                $("#li6").hide();
                $("#li7").hide();
                $("#li8").hide();

                $("#input1").show();
                $("#input2").show();
                $("#input3").show();
                $("#input4").show();
                $("#input5").show();
                $("#input6").show();
                $("#input7").show();
                $("#input9").show();
                
                //-----------------
                $("#li1").show();
                $("#li2").show();
                $("#li3").show();
                $("#li4").show();
                $("#li5").show();
                $("#li6").show();
                $("#li7").show();
                
        }
    });

    //Redireccionar desde el error hasta el home
    $("#gohome").click(function(){
        //alert("siiii");
        /*$.ajax({
            url:'/contents/error/redireccionar',
            dataType:'json',
            success:function(x){
                 window.location.href = x.redirect;
            }
        })*/
        window.location.href = "home";
    });

    //En este apartado sabremos cuando estamos en el dashboard para ver la tabla de usuarios directamente
    var localiz=window.location.href;
    //alert(localiz);
    var local_aux=localiz.split("/");
    //alert(local_aux);
    var longit=local_aux.length;
    //alert(longit);
    if(local_aux[longit-1]=="dashboard")
    {
      //alert("Estoy en el dashboard, con lo que me tocaria mostarar la tabla de usuarios");
      mostrarTablaUsuarios();
      mostrarTablaCuentos();
    }

    function mostrarTablaUsuarios(){
        //alert("Estoy en el dashboard, con lo que me tocaria mostarar la tabla de usuarios");
    }
    function mostrarTablaCuentos(){
        //alert("Estoy en el dashboard, con lo que me tocaria mostarar la tabla de cuentos")
    }


    //Función para registrar usuarios desde el dashboard
    $("form.nu").on("submit", function(){
        //alert("Vamos a registrar algo");


        //Esta linea de abajo ayuda a que el ajax no reemplace el documento html a lo absurdo con lo que recibe de php
        event.preventDefault();
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////

        var formURL=$(this).attr("action");
        var postData=$(this).serialize();
        //alert(formURL);
        //alert(postData);
        $.ajax({
            url:formURL,
            method:'POST',
            data:postData,
            dataType:'json',
            success:function(output)
            {
                if(output==1)
                {
                    //alert("Registrado correctamente\n\nContents");
                }
                else
                {
                    //alert("Error en el registro\n\nContents");
                }
            }
        })
    });

$('#slide').hover(function () {
    $(this).stop().animate({left:"0px"},500);
    //$(".contenedor-padre").css('opacity', '0.6');         
   },function () {
       var width = $(this).width() -10;
       $(this).stop().animate({left: - width  },500);
        //$(".contenedor-padre").css('opacity', '1');    

});

//Cuentos
var location = window.location.href.split("/");
var local_aux = location.length;

if (location[local_aux-1]=="desktop") {
  $("footer").hide();
  //$("#cabecera img").hide();
      cargar_cuentos_ini();
      cargar_cuentos_inter();
      cargar_cuentos_avan();
};


//Cuentos categoria=Principiante
function cargar_cuentos_ini()
{
  $.ajax({
    url: 'desktop/mostrar_cuentos_ini', 
    dataType: 'json',
    success: function(output)
    {
      mostrar_cuentos_ini(output);
    },
    error: function(output)
    {
      console.log(output);
    }
  });
}


function mostrar_cuentos_ini(output)
{
  //$(".usuarios").remove();
  var tabla = "";
  var button = "";
  var i=0;
  $.each(output, function(index, el)
  {
    i = index+1;
    var ruta = el.foto_portada;
    var campos = ruta.split("/");
    var longitud_total = campos.length;
    //alert(longitud_total);
    var ruta_total = "/"+campos[longitud_total-3]+"/"+campos[longitud_total-2]+"/"+campos[longitud_total-1];

    tabla+= '<div class="c_cuento_ini" id="'+el.id_cuento+'-ini" style="">';
      tabla+= '<div class="level-1" style=""><span style="">'+el.titulo+'</span></div>';
      tabla+= '<figure><img src="'+ruta_total+'" style="width: 100%; height: 225px"></figure></div>';
    if (i==4) {
        button+= '<div class="all-inicial">Más cuentos Iniciales >></div>';
    };
  });
  $('.n-ini-textbox').html(tabla);
  $('.button-more-ini').html(button);
};


function cargar_cuentos_ini_all()
{
  $.ajax({
    url: 'desktop/mostrar_cuentos_ini_all', 
    dataType: 'json',
    success: function(output)
    {
      mostrar_cuentos_ini_all(output);
      $(".button-more-ini").empty();
      $(".n-line-cuento").empty();
      $(".n-line-ini").show();
      $(".n-line-inter").hide();
      $(".n-line-avan").hide();
      $(".n-line-juego").hide();
    },
    error: function(output)
    {
      console.log(output);
    }
  });
}

function mostrar_cuentos_ini_all(output)
{
  //$(".usuarios").remove();
  var tabla = "";
  var button = "";
  var i=0;
  var foto="";
  var campos="";
  $.each(output, function(index, el)
  {
    i = index+1;
    var ruta = el.foto_portada;
    var campos = ruta.split("/");
    var longitud_total = campos.length;
    //alert(longitud_total);
    var ruta_total = "/"+campos[longitud_total-3]+"/"+campos[longitud_total-2]+"/"+campos[longitud_total-1];
    
    tabla+= '<div class="c_cuento_ini" id="'+el.id_cuento+'-ini" style="">';
      tabla+= '<div class="level-1" style=""><span style="">'+el.titulo+'</span></div>';
      tabla+= '<img src="'+ruta_total+'" style="width: 100%; height: 225px"></div>';
  });
  $('.n-ini-textbox').html(tabla);
};

$("body").on("click", ".all-inicial", function(){
  cargar_cuentos_ini_all();
});


//Cuentos categoria=Intermedio
function cargar_cuentos_inter()
{
  $.ajax({
    url: 'desktop/mostrar_cuentos_inter', 
    dataType: 'json',
    success: function(output)
    {
      mostrar_cuentos_inter(output);
    },
    error: function(output)
    {
      console.log(output);
    }
  });
}

function mostrar_cuentos_inter(output)
{
  //$(".usuarios").remove();
  var tabla = "";
  var button = "";
  var i=0;
  $.each(output, function(index, el)
  {
    i = index+1;
    var ruta = el.foto_portada;
    var campos = ruta.split("/");
    var longitud_total = campos.length;
    //alert(longitud_total);
    var ruta_total = "/"+campos[longitud_total-3]+"/"+campos[longitud_total-2]+"/"+campos[longitud_total-1];

    tabla+= '<div class="c_cuento_inter" id="'+el.id_cuento+'-inter" style="">';
      tabla+= '<div class="level-2" style=""><span>'+el.titulo+'</span></div>';
      tabla+= '<figure><img src="'+ruta_total+'" style="width: 100%; height: 225px"></figure></div>';
  if (i==4) {
     button+= '<div class="all-inter">Más cuentos Intermedios >></div>';
  };
  });
  $('.n-inter-textbox').html(tabla);
  $('.button-more-inter').html(button);
};

function cargar_cuentos_inter_all()
{
  $.ajax({
    url: 'desktop/mostrar_cuentos_inter_all', 
    dataType: 'json',
    success: function(output)
    {
      mostrar_cuentos_inter_all(output);
      $(".button-more-inter").empty();
      $(".n-line-cuento").empty();
      $(".n-line-inter").show();
      $(".n-line-ini").hide();
      $(".n-line-avan").hide();
      $(".n-line-juego").hide();
    },
    error: function(output)
    {
      console.log(output);
    }
  });
}

function mostrar_cuentos_inter_all(output)
{
  //$(".usuarios").remove();
  var tabla = "";
  var button = "";
 $.each(output, function(index, el)
  {
    i = index+1;
    var ruta = el.foto_portada;
    var campos = ruta.split("/");
    var longitud_total = campos.length;
    //alert(longitud_total);
    var ruta_total = "/"+campos[longitud_total-3]+"/"+campos[longitud_total-2]+"/"+campos[longitud_total-1];

    tabla+= '<div class="c_cuento_inter" id="'+el.id_cuento+'-inter" style="">';
      tabla+= '<div class="level-2" style=""><span>'+el.titulo+'</span></div>';
      tabla+= '<figure><img src="'+ruta_total+'" style="width: 100%; height: 225px"></figure></div>';
  });
  $('.n-inter-textbox').html(tabla);
};

$("body").on("click", ".all-inter", function(){
  cargar_cuentos_inter_all();
});

//Cuentos categoria=Avanzado
function cargar_cuentos_avan()
{
  $.ajax({
    url: 'desktop/mostrar_cuentos_avan', 
    dataType: 'json',
    success: function(output)
    {
      mostrar_cuentos_avan(output);
    },
    error: function(output)
    {
      console.log(output);
    }
  });
}

function mostrar_cuentos_avan(output)
{
  //$(".usuarios").remove();
  var tabla = "";
  var button = "";
  var i=0;
  $.each(output, function(index, el)
  {
    i = index+1;
    var ruta = el.foto_portada;
    var campos = ruta.split("/");
    var longitud_total = campos.length;
    //alert(longitud_total);
    var ruta_total = "/"+campos[longitud_total-3]+"/"+campos[longitud_total-2]+"/"+campos[longitud_total-1];

    tabla+= '<div class="c_cuento_avan" id="'+el.id_cuento+'-avan" style="">';
      tabla+= '<div class="level-3" style=""><span>'+el.titulo+'</span></div>';
      tabla+= '<img class="img-h" src="'+ruta_total+'" style="width: 100%; height: 225px"></div>';
  if (i==4) {
      button+= '<div class="all-avan">Más cuentos Intermedios >></div>';
  };
  });
  $('.button-more-avan').html(button);
  $('.n-avan-textbox').html(tabla);
};

function cargar_cuentos_avan_all()
{
  $.ajax({
    url: 'desktop/mostrar_cuentos_avan_all', 
    dataType: 'json',
    success: function(output)
    {
      mostrar_cuentos_avan_all(output);
      $(".button-more-avan").empty();
      $(".n-line-cuento").empty();
      $(".n-line-avan").show();
      $(".n-line-ini").hide();
      $(".n-line-inter").hide();
      $(".n-line-juego").hide();
    },
    error: function(output)
    {
      console.log(output);
    }
  });
}

function mostrar_cuentos_avan_all(output)
{
  //$(".usuarios").remove();
  var tabla = "";
  var button = "";
  $.each(output, function(index, el)
  {
    i = index+1;
    var ruta = el.foto_portada;
    var campos = ruta.split("/");
    var longitud_total = campos.length;
    //alert(longitud_total);
    var ruta_total = "/"+campos[longitud_total-3]+"/"+campos[longitud_total-2]+"/"+campos[longitud_total-1];

    tabla+= '<div class="c_cuento_avan" id="'+el.id_cuento+'-avan" style="">';
      tabla+= '<div class="level-3" style=""><span>'+el.titulo+'</span></div>';
      tabla+= '<img class="img-h" src="'+ruta_total+'" style="width: 100%; height: 225px"></div>';
  });
  $('.n-avan-textbox').html(tabla);
};

$("body").on("click", ".all-avan", function(){
  cargar_cuentos_avan_all();
});

//Funciones sideBar
$(".n_inicial").click(function(){
    $(".n-line-cuento").empty();
    $(".n-line-ini").show();
    $(".n-line-inter").hide();
    $(".n-line-avan").hide();
    $(".n-line-juego").hide();
    cargar_cuentos_ini_all();
})

$(".n_intermedio").click(function(){
    $(".n-line-cuento").empty();
    $(".n-line-inter").show();
    $(".n-line-ini").hide();
    $(".n-line-avan").hide();
    $(".n-line-juego").hide();
    cargar_cuentos_inter_all();
})

$(".n_avanzado").click(function(){
    $(".n-line-cuento").empty();
    $(".n-line-avan").show();
    $(".n-line-ini").hide();
    $(".n-line-inter").hide();
    $(".n-line-juego").hide();
    cargar_cuentos_avan_all();
})

$(".n_all").click(function(){
    cargar_cuentos_ini();
    cargar_cuentos_inter();
    cargar_cuentos_avan();
    $(".n-line-cuento").empty();
    $(".n-line-ini").show();
    $(".n-line-inter").show();
    $(".n-line-avan").show();
    $(".n-line-juego").hide();
})

////Cargaremos el CUENTO ESPECIFICADO DE CATEGORIA PRINCIPIANTE
$("body").on("click", ".c_cuento_ini", function(){
  var section = $(this).attr("id");
  var campos = "";
  var id = "";
  var categoria = 3;
  var num = 1;

  campos = section.split("-");
  id = campos[0];

  //Funcion cargamos el cuento especifico
  cargar_cuentos_ini_e(id, num);

});

$("body").on("click", ".button-ini", function(){
  var section = $(this).attr("id");
  var campos = "";
  var id = "";
  var categoria = 2;

  campos = section.split(";");
  num = campos[0];
  id = campos[1];

  //Funcion cargamos el cuento especifico
  cargar_cuentos_ini_e(id, num);
});
$("body").on("click", ".button-ini-atras", function(){
  var section = $(this).attr("id");
  var campos = "";
  var id = "";
  var categoria = 2;

  campos = section.split(";");
  num = campos[0];
  id = campos[1];

  //Funcion cargamos el cuento especifico
  cargar_cuentos_ini_e(id, num);
});


function cargar_cuentos_ini_e(id, num)
{
  $.ajax({
    url: 'desktop/mostrar_cuentos_ini_e', 
    type: "POST",
    data:{'id': id,
          'num': num},
    dataType:'json',
    success: function(output)
    {
      //alert(id);
      $(".n-line-cuento").show();
      $(".n-line-ini").hide();
      $(".n-line-inter").hide();
      $(".n-line-avan").hide();
      $(".n-line-juego").hide();

    //alert(out);
    mostrar_cuentos_ini_e(output);
    },
    error: function(output)
    {
      //alert(output);
      console.log(output);
    }
  });
}


function mostrar_cuentos_ini_e(output)
{
  var tabla = "";
  var out = "";
  var img = "";
  var img_g = "";
  var id_pagina = "";
  var siguiente = "";
  var lengths = output.length;

  id_pagina = output[0].id_cuento;
  siguiente = parseInt(output[0].numero) + parseInt(1);
  anterior = parseInt(output[0].numero) - 1;

      //Recogemos imagen de la BD
      img = output[0].img_src;
      var ruta = output[0].img_src;
      var campos = ruta.split("/");
      var longitud_total = campos.length;
      //alert(longitud_total);
      var ruta_total = "/"+campos[longitud_total-3]+"/"+campos[longitud_total-2]+"/"+campos[longitud_total-1];

      tabla+= '<div class=""><p class="cuento-abierto-titulo">'+output[0].titulo+'</p></div>';
      tabla+= '<div class="container-flex">';
      tabla+= '<p class="cuento-abierto-texto">';

      if (output[0].zona_pag==1) {
        tabla+= '<img class="img-cuento" align="left" src="'+ruta_total+'" style="">';
      };
      if (output[0].zona_pag==2) {
        tabla+= '<img class="img-cuento" align="right" src="'+ruta_total+'" style="">';
      };

      tabla+= output[0].texto+"</p>";

      if (output[0].numero!=output[lengths-1].longitud) {
        if(output[0].numero==1)
        {
          tabla+= '<span class="button-ini" style="margin-left:75%" id="'+siguiente+";"+id_pagina+'">Siguiente >></span>';
        }
        else if(output[0].numero>1)
        {
        tabla+= "<div style='display:flex; justify-content: space-between;'>";
          tabla+= '<span class="button-ini-atras" id="'+anterior+";"+id_pagina+'"><< Atrás</span>';
          tabla+= '<span class="button-ini" id="'+siguiente+";"+id_pagina+'">Siguiente >></span>';
        tabla+= "</div>";
        }
      }
      else if (output[lengths-1].longitud==1)
      {
      tabla+= "<div style='display:flex; justify-content: space-between;'>";
        tabla+= '<span class="button-juego-ini" id="'+id_pagina+'" style="margin-left:80%">JUGUEMOS >></span>';
      tabla+= "</div>";
      }
      else
      {
      tabla+= "<div style='display:flex; justify-content: space-between;'>";
        tabla+= '<span class="button-ini-atras" id="'+anterior+";"+id_pagina+'"><< Atrás</span>';
        tabla+= '<span class="button-juego-ini" id="'+id_pagina+'">JUGUEMOS >></span>';
      tabla+= "</div>";
      }
      tabla+= '</div>';

      //alert(el.titulo);
  //alert(longitud);
  $('.n-line-cuento').html(tabla);
};


////Cargaremos el CUENTO ESPECIFICADO DE CATEGORIA INTERMEDIA
$("body").on("click", ".c_cuento_inter", function(){
  var section = $(this).attr("id");
  var campos = "";
  var id = "";
  var categoria = 3;
  var num = 1;

  campos = section.split("-");
  id = campos[0];

  //Funcion cargamos el cuento especifico
  cargar_cuentos_inter_e(id, num);

});

function cargar_cuentos_inter_e(id, num)
{
  $.ajax({
    url: 'desktop/mostrar_cuentos_inter_e', 
    type: "POST",
    data:{'id': id,
          'num': num},
    dataType:'json',
    success: function(output)
    {
      //alert(id);
      $(".n-line-cuento").show();
      $(".n-line-ini").hide();
      $(".n-line-inter").hide();
      $(".n-line-avan").hide();
      $(".n-line-juego").hide();

    //alert(out);
    mostrar_cuentos_inter_e(output);
    },
    error: function(output)
    {
      //alert(output);
      console.log(output);
    }
  });
}


function mostrar_cuentos_inter_e(output)
{
  var tabla = "";
  var out = "";
  var img = "";
  var img_g = "";
  var id_pagina = "";
  var lengths = output.length;

  id_pagina = output[0].id_cuento;
  siguiente = parseInt(output[0].numero) + parseInt(1);
  anterior = parseInt(output[0].numero) - 1;

      //Recogemos imagen de la BD
      img = output[0].img_src;
      var ruta = output[0].img_src;
      var campos = ruta.split("/");
      var longitud_total = campos.length;
      //alert(longitud_total);
      var ruta_total = "/"+campos[longitud_total-3]+"/"+campos[longitud_total-2]+"/"+campos[longitud_total-1];

      tabla+= '<div class=""><p class="cuento-abierto-titulo">'+output[0].titulo+'</p></div>';
      tabla+= '<div class="container-flex">';
      tabla+= '<p class="cuento-abierto-texto">';

      if (output[0].zona_pag==1) {
        tabla+= '<img class="img-cuento" align="left" src="'+ruta_total+'" style="">';
      };
      if (output[0].zona_pag==2) {
        tabla+= '<img class="img-cuento" align="right" src="'+ruta_total+'" style="">';
      };

      tabla+= output[0].texto+"</p>";

      if (output[0].numero!=output[lengths-1].longitud) {
        if(output[0].numero==1)
        {
          tabla+= '<span class="button-inter" style="margin-left:75%" id="'+siguiente+";"+id_pagina+'">Siguiente >></span>';
        }
        else if(output[0].numero>1)
        {
        tabla+= "<div style='display:flex; justify-content: space-between; '>";
          tabla+= '<span class="button-inter-atras" id="'+anterior+";"+id_pagina+'"><< Atrás</span>';
          tabla+= '<span class="button-inter" id="'+siguiente+";"+id_pagina+'">Siguiente >></span>';
        tabla+= "</div>";
        }
      }
      else if (output[lengths-1].longitud==1)
      {
      tabla+= "<div style='display:flex; justify-content: space-between;'>";
        tabla+= '<span class="button-juego-inter" id="'+id_pagina+'" style="margin-left:80%">JUGUEMOS >></span>';
      tabla+= "</div>";
      }
      else
      {
      tabla+= "<div style='display:flex; justify-content: space-between;'>";
        tabla+= '<span class="button-inter-atras" id="'+anterior+";"+id_pagina+'"><< Atrás</span>';
        tabla+= '<span class="button-juego-inter" id="'+id_pagina+'">JUGUEMOS >></span>';
      tabla+= "</div>";
      }
      tabla+= '</div>';

      //alert(el.titulo);
  //alert(longitud);
  $('.n-line-cuento').html(tabla);
};


//Cargaremos el CUENTO ESPECIFICADO DE CATEGORIA AVANZADA
$("body").on("click", ".button-inter", function(){
  var section = $(this).attr("id");
  var campos = "";
  var id = "";
  var categoria = 2;

  campos = section.split(";");
  num = campos[0];
  id = campos[1];

  //Funcion cargamos el cuento especifico
  cargar_cuentos_inter_e(id, num);
});

$("body").on("click", ".button-inter-atras", function(){
  var section = $(this).attr("id");
  var campos = "";
  var id = "";
  var categoria = 2;

  campos = section.split(";");
  num = campos[0];
  id = campos[1];

  //Funcion cargamos el cuento especifico
  cargar_cuentos_inter_e(id, num);
});

$("body").on("click", ".c_cuento_avan", function(){
  var section = $(this).attr("id");
  var campos = "";
  var id = "";
  var categoria = 3;
  var num = 1;

  campos = section.split("-");
  id = campos[0];

  //Funcion cargamos el cuento especifico
  cargar_cuentos_avan_e(id, num);

});

function cargar_cuentos_avan_e(id, num)
{
  $.ajax({
    url: 'desktop/mostrar_cuentos_avan_e', 
    type: "POST",
    data:{'id': id,
          'num': num},
    dataType:'json',
    success: function(output)
    {
      //alert(id);
      $(".n-line-cuento").show();
      $(".n-line-ini").hide();
      $(".n-line-inter").hide();
      $(".n-line-avan").hide();
      $(".n-line-juego").hide();

    //alert(out);
    mostrar_cuentos_avan_e(output);
    },
    error: function(output)
    {
      //alert(output);
      console.log(output);
    }
  });
}


//Paginado 3 paginas
$("body").on("click", ".button-avan", function(){
  var section = $(this).attr("id");
  var campos = "";
  var id = "";
  var categoria = 3;

  campos = section.split(";");
  num = campos[0];
  id = campos[1];

  //Funcion cargamos el cuento especifico
  cargar_cuentos_avan_e(id, num);

});

$("body").on("click", ".button-avan-atras", function(){
  var section = $(this).attr("id");
  var campos = "";
  var id = "";
  var categoria = 2;

  campos = section.split(";");
  num = campos[0];
  id = campos[1];

  //Funcion cargamos el cuento especifico
  cargar_cuentos_avan_e(id, num);
});


function mostrar_cuentos_avan_e(output)
{
  //$(".usuarios").remove();
  var tabla = "";
  var out = "";
  var img = "";
  var img_g = "";
  var id_pagina = "";
  var lengths = output.length;
  id_pagina = output[0].id_cuento;
  siguiente = parseInt(output[0].numero) + parseInt(1);
  anterior = parseInt(output[0].numero) - 1;

      //Recogemos imagen de la BD
      img = output[0].img_src;
      var ruta = output[0].img_src;
      var campos = ruta.split("/");
      var longitud_total = campos.length;
      //alert(longitud_total);
      var ruta_total = "/"+campos[longitud_total-3]+"/"+campos[longitud_total-2]+"/"+campos[longitud_total-1];

      tabla+= '<div class=""><p class="cuento-abierto-titulo">'+output[0].titulo+'</p></div>';
      tabla+= '<div class="container-flex">';
      tabla+= '<p class="cuento-abierto-texto">';

      if (output[0].zona_pag==1) {
        tabla+= '<img class="img-cuento" align="left" src="'+ruta_total+'" style="">';
      };
      if (output[0].zona_pag==2) {
        tabla+= '<img class="img-cuento" align="right" src="'+ruta_total+'" style="">';
      };

      tabla+= output[0].texto+"</p>";

      if (output[0].numero!=output[lengths-1].longitud) {
        if(output[0].numero==1)
        {
          tabla+= '<span class="button-avan" style="margin-left:75%" id="'+siguiente+";"+id_pagina+'">Siguiente >></span>';
        }
        else if(output[0].numero>1)
        {
          tabla+= "<div style='display:flex; justify-content: space-between; '>";
            tabla+= '<span class="button-avan-atras" id="'+anterior+";"+id_pagina+'"><< Atrás </span>';
            tabla+= '<span class="button-avan" id="'+siguiente+";"+id_pagina+'">Siguiente >></span>';
          tabla+= "</div>";
        }
      }
      else if (output[lengths-1].longitud==1)
      {
      tabla+= "<div style='display:flex; justify-content: space-between;'>";
        tabla+= '<span class="button-juego-avan" id="'+id_pagina+'" style="margin-left:80%">JUGUEMOS >></span>';
      tabla+= "</div>";
      }
      else
      {
      tabla+= "<div style='display:flex; justify-content: space-between;'>";
        tabla+= '<span class="button-avan-atras" id="'+anterior+";"+id_pagina+'"><< Atrás</span>';
        tabla+= '<span class="button-juego-avan" id="'+id_pagina+'">JUGUEMOS >></span>';
      tabla+= "</div>";
      }
      tabla+= '</div>';

      //alert(el.titulo);
  //alert(longitud);
  $('.n-line-cuento').html(tabla);
};


//Cargar juegos
$("body").on("click", ".button-juego-ini", function(){
  var id = $(this).attr("id");

  //Funcion cargamos el cuento especifico
  cargar_juegos_ini(id);
});

function cargar_juegos_ini(id)
{
  $.ajax({
    url: 'desktop/mostrar_juegos_ini', 
    type: "POST",
    data:{'id': id},
    dataType:'json',
    success: function(output)
    {
      //alert(id);
      $(".n-line-ini").hide();
      $(".n-line-inter").hide();
      $(".n-line-avan").hide();
      $(".n-line-cuento").hide();
      $(".n-line-juego").show();

    //alert(out);
    mostrar_juegos_ini(output);
    },
    error: function(output)
    {
      //alert(output);
      console.log(output);
    }
  });
}

function mostrar_juegos_ini(output)
{
  //$(".usuarios").remove();
  var ruta = output[0].js_src;
  var campos = ruta.split("public_html");
  var ruta_total = campos[1];
  //var ruta_total = campos[6]+"\\"+campos[7]+"\\"+campos[8]+"\\"+campos[9];
  //alert(ruta_total);
  //window.location.href = ruta_total;
  $('.n-line-juego').html("<iframe src="+ruta_total+" frameborder='0' scrolling='yes'/>");
};


//Cargar juegos Inter
$("body").on("click", ".button-juego-inter", function(){
  var id = $(this).attr("id");

  //Funcion cargamos el cuento especifico
  cargar_juegos_inter(id);
});

function cargar_juegos_inter(id)
{
  $.ajax({
    url: 'desktop/mostrar_juegos_inter', 
    type: "POST",
    data:{'id': id},
    dataType:'json',
    success: function(output)
    {
      //alert(id);
      $(".n-line-ini").hide();
      $(".n-line-inter").hide();
      $(".n-line-avan").hide();
      $(".n-line-cuento").hide();
      $(".n-line-juego").show();

    //alert(out);
    mostrar_juegos_inter(output);
    },
    error: function(output)
    {
      //alert(output);
      console.log(output);
    }
  });
}

function mostrar_juegos_inter(output)
{
  //$(".usuarios").remove();
  var ruta = output[0].js_src;
  var campos = ruta.split("public_html");
  var ruta_total = campos[1];
  //var ruta_total = campos[6]+"\\"+campos[7]+"\\"+campos[8]+"\\"+campos[9];
  //alert(ruta_total);
  //window.location.href = ruta_total;
  $('.n-line-juego').html("<iframe src="+ruta_total+" frameborder='0' scrolling='yes'/>");
};


//Cargar juegos Avan
$("body").on("click", ".button-juego-avan", function(){
  var id = $(this).attr("id");

  //Funcion cargamos el cuento especifico
  cargar_juegos_avan(id);
});

function cargar_juegos_avan(id)
{
  $.ajax({
    url: 'desktop/mostrar_juegos_avan', 
    type: "POST",
    data:{'id': id},
    dataType:'json',
    success: function(output)
    {
      //alert(id);
      $(".n-line-ini").hide();
      $(".n-line-inter").hide();
      $(".n-line-avan").hide();
      $(".n-line-cuento").hide();
      $(".n-line-juego").show();

    //alert(out);
    mostrar_juegos_avan(output);
    },
    error: function(output)
    {
      //alert(output);
      console.log(output);
    }
  });
}

function mostrar_juegos_avan(output)
{
  //$(".usuarios").remove();
  var ruta = output[0].js_src;
  var campos = ruta.split("public_html");
  var ruta_total = campos[1];
  //var ruta_total = campos[6]+"\\"+campos[7]+"\\"+campos[8]+"\\"+campos[9];
  //alert(ruta_total);
  //window.location.href = ruta_total;
  //alert(ruta_total);
  $('.n-line-juego').html("<iframe src="+ruta_total+" frameborder='0' scrolling='yes'/>");
};

//Redirecciones a padre y niño
    
    $("body").on("click", "#l_padre", function(){
        window.location.href = "padre";
    });
    $("body").on("click", "#l_nene", function(){
        window.location.href = "desktop";
    });

//Nuevo comentario
    $('#commentForm').on('submit', function (event){
      event.preventDefault();
        var postData = $(this).serialize();
        var formURL = $(this).attr("action");
        $.ajax({
            url: formURL,
            type: 'post',
            data: postData,
            dataType: 'json',
            error: function () {
                //alert('El usuario no está registrado, el comentario se guardará como anónimo\n\nContents');
            },
            success: function (resp) {
                window.location.href = resp.redirect;
            }
        });
    });

//Mostrar comentarios
if (location[local_aux-1]=="comment") {
      loadComments();
};

function loadComments()
{
  $.ajax({
    url: 'comment/showComments',
    dataType: 'json',
    success: function(output)
    {
      showComments(output);
    },
    error: function(output)
    {

    }
  });
}

function showComments($output){
  var i=0;
  var commentDiv = "";
  commentDiv += '<div id="commentsContentDiv">'
  $.each($output, function(index, el)
  {
    commentDiv += '<div id="commentContentDiv">'
    commentDiv += '<div class="comDiv1"><span class="comUser">'+el.nombre+' '+el.apellidos+'</span><span class="comDate">'+el.fecha+'</span></div>'
    commentDiv += '<div class="comDiv2">'+el.texto+'</div>'
    commentDiv += '</div>'
  });
  commentDiv += '</div>';
  $('#commentsList').html(commentDiv);
};

//FRET
    var localiz=window.location.href;
    //alert(localiz);
    var local_aux=localiz.split("/");
    //alert(local_aux);
    var longit=local_aux.length;
    //alert(longit);
    if(local_aux[longit-1]=="dashboard")
    {
      //alert("Estoy en el dashboard, con lo que me tocaria mostarar la tabla de usuarios");
      TablaUsuarios();
      TablaCuentos();
    }


    function TablaUsuarios(){
        //alert("Vamos con la tabla de usuarios");   
        $.ajax({
            url:'dashboard/mostrarUsuarios',
            dataType:'json',
            success:function(output){
                //console.log(output);
                var tam=output.length;
                //alert(tam);
                $("#mu").html(" ");
                $("#mu").append('<table id="tabus" border="1">');
                $("#tabus").append('<th></th><th>Nickname</th><th>Nombre</th><th>Apellidos</th><th>Email</th><th>Password</th><th>Telefono</th><th>NIF</th><th>Tipo Usuario</th><th>Padre</th>')
                for(var i=0;i<tam;i++)
                {
                    var y=0;
                    var yy;
                    var yyy=" ";
                    y=output[i].rol;
                    if(y==1)
                    {
                        yy="Padre";
                    }
                    else if(y==2)
                    {
                        yy="Niño";
                        $.ajax({
                            async: false,
                            url:'dashboard/selPapa',
                            method:'POST',
                            data:{'xx':output[i].padre},
                            dataType:'json',
                            success:function(gg)
                            {
                                //alert(gg[0].nif);
                                yyy=gg[0].nif;
                                //alert(yyy);
                            },
                            error:function(){
                                //alert("Error al cargar el nif del padre");
                            }
                        })
                    }
                    else{
                        yy="Profesor";
                    }
                    //alert(yyy);
                    $("#tabus").append('<tr><td id="'+output[i].id_usuario+'"><input value="'+output[i].id_usuario+'" type="checkbox" name="del"></td><td contenteditable="true">'+output[i].nickname+'</td><td contenteditable="true">'+output[i].nombre+'</td><td contenteditable="true">'+output[i].apellidos+'</td><td contenteditable="true">'+output[i].email+'</td><td contenteditable="true">'+output[i].password+'</td><td contenteditable="true">'+output[i].telefono+'</td><td contenteditable="true">'+output[i].nif+'</td><td contenteditable="true">'+yy+'</td><td contenteditable="true">'+yyy+'</td></tr>')
                }
                $("#mu").append('</table>');
            },
            error:function(){
                //alert("No se pudo cargar la tabla de usuarios, sentimos las molestias.\n\nContents");
            }
        });     
    }
    function TablaCuentos(){
        //alert("Estoy en el dashboard, con lo que me tocaria mostarar la tabla de cuentos");
        $.ajax({
            url:'/contents/dashboard/mostrarCuentos',
            dataType:'json',
            success:function(resp){

            },
            error:function(){
                //alert("Error al intentar cargar la tabla de cuentos, sentimos las molestias.\n\nContents");
            }
        });
    }

    //función para crear nuevas paginas en e dashboard para el cuento
    var cont=0;
    $("#pag1").hide();
    $("#pag2").hide();
    $("#pag3").hide();
    $("#npag").click(function(){
        //alert("Niceeeeeeee");
        if(cont==0){
            //$("#ac").append('<br><br><h5>Página Nº'+(cont+1)+'</h5>');
            //$("#ac").append('<label>Texto de la pagina</label><br><textarea id="texto_pag"></textarea><br>');
            //$("#ac").append('<label>Imagen para la pagina</label><input type="file" id="imagen"><br><label>Posición</label><input type="number" min="1" max="4" id="position"><br>');
            $("#pag1").show();
        }
        else if(cont==1)
        {
            $("#pag2").show();
        }
        else if(cont==2)
        {
            $("#pag3").show();
        }
        else{
            alert("Lo sentimos, no se pueden crear cuentos con mas de 3 páginas.\n\nContents");
        }
        cont=cont+1;
    });

    /*$("#mascontent").on('submit', function(event){
        event.preventDefault();

    })*/


    //registro en el dashboard
    $("form.nu").on("submit", function(event){
        //alert("GG");
        event.preventDefault();
        var postData = $(this).serialize();
        var formURL = $(this).attr("action");
        console.log(postData+formURL);
        $.ajax({
            url: formURL,
            type: 'POST',
            data: postData,
            dataType: 'json',
            success: function (resp) {
                //console.log(resp);
                if(resp==1){
                    //alert("Registro satisfactorio\n\nContents");
                    //window.location.href = "/Contents/dashboard".redirect;
                    TablaUsuarios();
                }
                else{
                    //alert("Error durante el registro\n\nContents");
                    //window.location.href = "/Contents/dashboard".redirect;
                    TablaUsuarios();
                }
                //alert("Registro satisfactorio");
                //window.location.href = resp.redirect;
            }
        });
        TablaUsuarios();
    });

    $("#borrar").click(function(){
        //alert("Vamos a borrar");
         $("input[type=checkbox]:checked").each(function(){
            var x=$(this).val();
            //alert(x);
            $.ajax({
              url:'dashboard/borrar',
              data:{'id': x},
              method:'POST',
              dataType:'json',
              success:function(output)
              {
                $("#mu").html('');
                //TablaUsuarios();
                console.log(output);
                window.location.href=output.redirect;
              }
            });
         });
         TablaUsuarios();
    });

    $("#modificar").click(function(){
        //alert("Modificar");
        var x;
        var t;
        var y;
        var cont;
        var x0;
        var x1;
        var x2;
        var x3;
        var x4;
        var x5;
        var x6;
        var x7;
        var x8;
        var x9;

        $("tr input[type=checkbox]:checked").each(function(){
           x=$(this).parent().parent().html();
           //alert(x);
           cont=0;
           $(x+" td").each(function(){
                //alert($(this).html());
                t=$(this).children().val();
                //alert(t);
                y=$(this).html();
                if(cont==0)
                {
                    x0=t;
                }
                else if(cont==1)
                {
                    //Nickname
                    x1=y;
                    //alert(x1);
                    //alert(y);
                }
                else if(cont==2){
                    //Nombre
                    x2=y;
                    //alert(x2);
                    //alert(y);
                }
                else if(cont==3)
                {
                    //Apellidos
                    x3=y;
                    //alert(x3);
                    //alert(y);
                }
                else if(cont==4)
                {
                    //Email
                    x4=y;
                    //alert(x4);
                    //alert(y);
                }
                else if(cont==5){
                    //Password
                    x5=y;
                    //alert(x5);
                    //alert(y);
                }
                else if(cont==6){
                    //Telefono
                    x6=y;
                    //alert(x6);
                    //alert(y);
                }
                else if(cont==7)
                {
                    //NIF
                    x7=y;
                    //alert(x7);
                    //alert(y);
                }
                else if(cont==8)
                {
                    //Tipo
                    x8=y;
                    //alert(x8);
                    //alert(y);
                }
                else if(cont==9)
                {
                    //Padre
                    x9=y;
                    //alert(x9);
                    //alert(y);
                    cont=0;
                }
                cont=cont+1;
                //alert(y);    
           });
           //alert(x0);
           //alert(x0+", "+x1+", "+x2+", "+x3+", "+x4+", "+x5+", "+x6+", "+x7+", "+x8+", "+x9);
            $.ajax({
                url:"dashboard/modificar",
                method:'POST',
                data:{'z0':x0, 'z1':x1, 'z2':x2, 'z3':x3, 'z4':x4, 'z5':x5, 'z6':x6, 'z7':x7, 'z8':x8, 'z9':x9},
                dataType:'json',
                success:function(output){
                    //alert("Se han modificado los usuarios\n\nContents");
                    //alert(x0+", "+x1+", "+x2+", "+x3+", "+x4+", "+x5+", "+x6+", "+x7+", "+x8+", "+x9);
                    //alert(output);
                },
                error:function(){
                    //alert("No se han podido modificar los usuarios\n\nContents");
                }
            });       
        });
        TablaUsuarios();
    });

 $('#iframe').contents().find('#comprobar').click(function(){
      //alert("H");
 });


 $("#register").on("click", function(){
    window.location.href = "register";
 });

$("#ns").on("click", function(){
   window.location.href = "https://mega.nz/#F!pMJyxDzB!ax2QXJ9ozHC9NXwjPCt4kg";
});

$("#co").on("click", function(){
   window.location.href = "comment";
});


var op=1;
 var localiz=window.location.href;
    //alert(localiz);
    var local_aux=localiz.split("/");
    //alert(local_aux);
    var longit=local_aux.length;
    //alert(longit);
    if(local_aux[longit-1]=="desktop")
    {
      var mediaquery = window.matchMedia("(max-width: 750px)");
      if (mediaquery.matches) {
         // es menor
         $("#barritas").css("display", "block");
      } else {
        // es mayor
        $("#barritas").css("display", "none");
      }
    }
    else if(local_aux[longit-1]=="padre")
    {
      var mediaquery = window.matchMedia("(max-width: 750px)");
      if (mediaquery.matches) {
         // es menor
         $("#barritas2").css("display", "block");
      } else {
        // es mayor
        $("#barritas2").css("display", "none");
      }
    }
    else if(local_aux[longit-1]=="comment")
    {
      var mediaquery = window.matchMedia("(max-width: 750px)");
      if (mediaquery.matches) {
         // es menor
         $("#barritas3").css("display", "block");
      } else {
        // es mayor
        $("#barritas3").css("display", "none");
      }
    }

    if(local_aux[longit-1]=="desktop")
    {
      var mediaquery = window.matchMedia("(max-width: 1024px)");
      if (mediaquery.matches) {
         // es menor
         $("#barritas").css("display", "block");
      } else {
        // es mayor
        $("#barritas").css("display", "none");
      }
    }
    else if(local_aux[longit-1]=="padre")
    {
      var mediaquery = window.matchMedia("(max-width: 1024px)");
      if (mediaquery.matches) {
         // es menor
         $("#barritas2").css("display", "block");
      } else {
        // es mayor
        $("#barritas2").css("display", "none");
      }
    }
    else if(local_aux[longit-1]=="comment")
    {
      var mediaquery = window.matchMedia("(max-width: 1024px)");
      if (mediaquery.matches) {
         // es menor
         $("#barritas3").css("display", "block");
      } else {
        // es mayor
        $("#barritas3").css("display", "none");
      }
    }
$("#barritas").click(function(){
  op=op+1;
  if(op%2==0)
  {
    $("#lista-nenes li").css("display", "block");
  }
  else
  {
    $("#lista-nenes li").css("display", "none");
  }
  
});

$("#barritas2").click(function(){
  op=op+1;
  if(op%2==0)
  {
    $("#lista-papas li").css("display", "block");
  }
  else
  {
    $("#lista-papas li").css("display", "none");
  }
  
});

$("#barritas3").click(function(){
  op=op+1;
  if(op%2==0)
  {
    $("#lista-papas li").css("display", "block");
  }
  else
  {
    $("#lista-papas li").css("display", "none");
  }
  
});


    var localiz=window.location.href;
    //alert(localiz);
    var local_aux=localiz.split("/");
    //alert(local_aux);
    var longit=local_aux.length;
    //alert(longit);
    if(local_aux[longit-1]=="comment")
    {
      $("#slide").css("display", "none");
    }


});






