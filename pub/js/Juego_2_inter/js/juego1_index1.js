
    $(document).ready(function(){
      var resPreguntas = [3,3,1,1];

      $("#comprobar").on("click",function(){
        var numCorrectas=0;
        ok=true;
        for(x=0;x<5;x++){
          if( resPreguntas[x] == $('input[name="p'+(x+1)+'"]:checked').val() ){
            numCorrectas++;
            // $('input[name="p'+(x+1)+'"]:checked').parent().css("color","green");
            // $('#pr'+(x+1)+$('input[name="p'+(x+1)+'"]:checked').val()).css("color","green");
          }else{
            $('input[name="p'+(x+1)+'"]:checked').parent().css("background-color","red");
            // $('#pr'+(x+1)+$('input[name="p'+(x+1)+'"]:checked').val()).css("color","red");
          }
        }

        for(x=0;x<5;x++){
          $('input[name="p'+(x+1)+'"]').eq(resPreguntas[x]-1).parent().css("background-color","green");
        }

        //alert("Has acertado "+numCorrectas+" pregunta/s!");
              $("#demo").html(numCorrectas);
      });
    });


  $( function() {

  $('.boxpreguntas').click( function() {
      $(this).toggleClass("red-cell");

  } );
} );