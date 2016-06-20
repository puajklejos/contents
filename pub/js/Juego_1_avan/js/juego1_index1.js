
    $(document).ready(function(){
      var resPreguntas = [2];

      $("#comprobar").on("click",function(){
        var numCorrectas=0;
        ok=true;
        for(x=0;x<1;x++){
          if( resPreguntas[x] == $('input[name="p'+(x+1)+'"]:checked').val() ){
            numCorrectas++;
                  $("#demo").html(numCorrectas);

            // $('input[name="p'+(x+1)+'"]:checked').parent().css("color","green");
            // $('#pr'+(x+1)+$('input[name="p'+(x+1)+'"]:checked').val()).css("color","green");
          }else{
            $('input[name="p'+(x+1)+'"]:checked').parent().css("background-color","red");

      $("#demo").html(numCorrectas);

              //alert("Has Fallado :(");
          }
        }

        for(x=0;x<1;x++){

          $('input[name="p'+(x+1)+'"]').eq(resPreguntas[x]-1).parent().css("background-color","green");
   
        }

       
      });
    });



  $( function() {

  $('.boxpreguntas').click( function() {
      $(this).toggleClass("red-cell");

  } );
} );
