

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



$( function() {
  $('td').click( function() {
    $(this).toggleClass("red-cell");
  } );
} );