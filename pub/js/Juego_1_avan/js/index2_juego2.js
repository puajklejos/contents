
    $(document).ready(function(){
      var resPreguntas = [2,1,1,2];

      $("#comprobar").on("click",function(){
        var numCorrectas=0;
        ok=true;
        for(x=0;x<3;x++){
          if( resPreguntas[x] == $('input[name="p'+(x+1)+'"]:checked').val() ){
            numCorrectas++;
                   alert("Has acertado!");

            // $('input[name="p'+(x+1)+'"]:checked').parent().css("color","green");
            // $('#pr'+(x+1)+$('input[name="p'+(x+1)+'"]:checked').val()).css("color","green");
          }else{
            $('input[name="p'+(x+1)+'"]:checked').parent().css("background-color","red");
            // $('#pr'+(x+1)+$('input[name="p'+(x+1)+'"]:checked').val()).css("color","red");
              alert("Has Fallado :(");
          }
        }

        for(x=0;x<3;x++){

          $('input[name="p'+(x+1)+'"]').eq(resPreguntas[x]-1).parent().css("background-color","green");
   
        }

       
      });
    });


