$(function () {
  setTimeout(function () {
    $('.loader-wrap').fadeOut(500);
  }, 1000);
});

var $contentCard = $('#content-card');
var $restaurant = data["CANETE"]["Imperial"]["restaurant"];

var $options;

for (var i = 0; i < $restaurant.length; i++) {
  // crea los contenedores
  var $card = $("<div class='card-restaurant'><a href='#' class='link center'><div class='data'></div></a></div>");
  $contentCard.append($card);
  var $data = $('.data');
  var $link = $('.link');

  var $totalCards = $('.card-restaurant'); // 3
  //Agrega la clase según el tipo que corresponda
  $totalCards.eq(i).addClass($restaurant[i]['type']); 
  
  $('select').append("<option class='op'>"+$restaurant[i]['type']+"</option>");

  $options = $('option.op');
  var $option = $('<option>');
  $options.eq(i).attr('value',$restaurant[i]['type']);

  // Muestra dinamicamente los datos
  var $keys = ['name', 'address', 'time','photo'];
  for (var j = 0; j < $keys.length; j++) {
    var $a = $restaurant[i][$keys[j]];
    if ($keys[j] == 'photo') {
      var $background = $("<div class='photo-restaurant'>");
      $background.css('background-image','url' + '(' + $restaurant[i]['photo']  + ')');
      $link.eq(i).attr("href", $restaurant[i]['link']);
      $link.eq(i).append($background);
      continue;
    } else {
      $data.eq(i).append('<p>' + $a + '</p>');
    }
  }
}

// Filtrar data
var $elements = $('.card-restaurant');
$('select').change(function(e) {
  var value = $('option:selected').val().toLowerCase();
  console.log(value);
  $('.card-restaurant').detach();
  $elements.appendTo('#content-card');
  if (value !== 'todos') {
    $('.card-restaurant').show().filter(':not(.'+value+')').detach();
  }
}) 