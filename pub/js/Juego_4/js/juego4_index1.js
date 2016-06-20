$( "#començar" ).click(function() {
  $( ".block" ).animate({
    left: 520,
  }, {
    duration: 3000,
    step: function( now, fx ){
      $( ".block:gt(0)" ).css( "left", now );
    }
  });
});
$( "#començar" ).click(function() {
  $( ".block" ).animate({
    left: 700,
  }, {
    duration: 5000,
    step: function( now, fx ){
      $( ".block:gt(0)" ).css( "left", now );
    }
  });
});

$( "#començar" ).click(function() {
  $( ".malamente" ).animate({
    left: 490,
  }, {
    duration: 3000,
    step: function( now, fx ){
      $( ".malamente:gt(0)" ).css( "left", now );
    }
  });
});

$( "#començar" ).click(function() {
  $( ".bien" ).animate({
    left: 620,
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