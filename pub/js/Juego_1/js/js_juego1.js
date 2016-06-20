

var boxOne = document.getElementsByClassName('box')[0],
    $boxTwo = $('.box:eq(1)');

document.getElementsByClassName('toggleButton')[0].onclick = function() {
  if(this.innerHTML === 'Fes la prova!') 
  { 
    this.innerHTML = 'Pause';
    boxOne.classList.add('horizTranslate');
  } else {
    this.innerHTML = 'Fes la prova!';
    var computedStyle = window.getComputedStyle(boxOne),
        marginLeft = computedStyle.getPropertyValue('margin-left');
    boxOne.style.marginLeft = marginLeft;
    boxOne.classList.remove('horizTranslate');    
  }  
}

$('.toggleButton:eq(1)').on('click', function() { 
  if($(this).html() === 'Fes la prova!') 
  {
    $(this).html('Pause');
    $boxTwo.addClass('horizTranslate');
  } else {
    $(this).html('Fes la prova!');
    var computedStyle = $boxTwo.css('margin-left');
    $boxTwo.removeClass('horizTranslate');
    $boxTwo.css('margin-left', computedStyle);
  }  
});



    $(document).ready(function(){
      var resPreguntas = [2,1,3,2];

      $("#comprobar").on("click",function(){
        var numCorrectas=0;
        ok=true;
        for(x=0;x<4;x++){
          if( resPreguntas[x] == $('input[name="p'+(x+1)+'"]:checked').val() ){
            numCorrectas++;
            // $('input[name="p'+(x+1)+'"]:checked').parent().css("color","green");
            // $('#pr'+(x+1)+$('input[name="p'+(x+1)+'"]:checked').val()).css("color","green");
          }else{
            $('input[name="p'+(x+1)+'"]:checked').parent().css("background-color","red");
            // $('#pr'+(x+1)+$('input[name="p'+(x+1)+'"]:checked').val()).css("color","red");
          }
        }

        for(x=0;x<4;x++){
          $('input[name="p'+(x+1)+'"]').eq(resPreguntas[x]-1).parent().css("background-color","green");
        }

        alert("Has acertado "+numCorrectas+" pregunta/s!");
      });
    });


 function myFunction0() {
     document.getElementById("selection0").checked = true;
}
 function myFunction1() {
     document.getElementById("selection1").checked = true;
}
 function myFunction2() {
     document.getElementById("selection2").checked = true;
}
 function myFunction3() {
     document.getElementById("selection3").checked = true;
}
 function myFunction4() {
     document.getElementById("selection4").checked = true;
}
 function myFunction5() {
     document.getElementById("selection5").checked = true;
}
 function myFunction6() {
     document.getElementById("selection6").checked = true;
}
 function myFunction7() {
     document.getElementById("selection7").checked = true;
}
 function myFunction8() {
     document.getElementById("selection8").checked = true;
}
 function myFunction9() {
     document.getElementById("selection9").checked = true;
}
 function myFunction10() {
     document.getElementById("selection10").checked = true;
}
 function myFunction11() {
     document.getElementById("selection11").checked = true;
}

function myFunctionx(x){
  if (x.style.background=="rgb(247,211,88)"){
    x.style.background="#fff"
  }else{
    x.style.background="rgb(247,211,88)"
  }
  return false
}



// function myFunctionx(){
//      obj = document.getElementById('id_del_div')
//      obj.style.backgroundColor = (obj.style.backgroundColor == 'rgb(204,204,204)') ? 'transparent' :#CCCCCC;
// }

$( "#començar" ).click(function() {
  $( ".block" ).animate({
    left: 420,
  }, {
    duration: 3000,
    step: function( now, fx ){
      $( ".block:gt(0)" ).css( "left", now );
    }
  });
});
$( "#començar" ).click(function() {
  $( ".block" ).animate({
    left: 600,
  }, {
    duration: 5000,
    step: function( now, fx ){
      $( ".block:gt(0)" ).css( "left", now );
    }
  });
});

$( "#començar" ).click(function() {
  $( ".malamente" ).animate({
    left: 390,
  }, {
    duration: 3000,
    step: function( now, fx ){
      $( ".malamente:gt(0)" ).css( "left", now );
    }
  });
});

$( "#començar" ).click(function() {
  $( ".bien" ).animate({
    left: 520,
  }, {
    duration: 7000,
    step: function( now, fx ){
      $( ".malamente:gt(0)" ).css( "left", now );
    }
  });
});


$( "#reset" ).click(function() {
  $( ".block" ).css({
     left: -100,
  });
});
$( "#reset" ).click(function() {
  $( ".malamente" ).css({
     left: -200,
  });
});
$( "#reset" ).click(function() {
  $( ".bien" ).css({
     left: -300,
  });
});