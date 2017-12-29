// Oculta el logo al iniciar, luego de un tiempo determinado.
$(function () {
  setTimeout(function () {
    $('.loader-wrap').fadeOut(500);
  }, 1000);
});

// Accediendo a la data.
var $restaurant = data["CANETE"]["Imperial"]["restaurant"];
// Selectores
var $contentCard = $('#content-card');

for (var i = 0; i < $restaurant.length; i++) {
  // Agregando 'option' al select, según los tipos de restaurantes disponiles. 
  $('select').append("<option class='op'>" + $restaurant[i]['type'] + "</option>");
  var $options = $('option.op');
  $options.eq(i).attr('value', $restaurant[i]['type']);

  // crea los contenedores
  var $card = $("<div class='card-restaurant'><a href='#' class='link center'><div class='data'></div></a></div>");
  $contentCard.append($card);

  // Almacena los div con clase 'card-restaurant', luego de ser creado, se agrega la clase según el tipo de comida.
  var $totalCards = $('.card-restaurant'); // 3
  $totalCards.eq(i).addClass($restaurant[i]['type']);

  // Llenando los datos de la comida dinamicamente a la vista.  
  var $keys = ['name', 'address', 'time'];
  for (var j = 0; j < $keys.length; j++) {
    $('.data').eq(i).append('<p>' + $restaurant[i][$keys[j]] + '</p>')
  }

  // Agregando las imagenes dinamicamente.
  var $background = $("<div class='photo-restaurant'>");
  $background.css('background-image', 'url' + '(' + $restaurant[i]['photo'] + ')');
  $('.link').eq(i).attr("href", $restaurant[i]['link']);
  $('.link').eq(i).append($background);
}

// Filtrar data
var $elements = $('.card-restaurant');
$('select').change(function (e) {
  var value = $('option:selected').val().toLowerCase();
  console.log(value);
  $('.card-restaurant').detach();
  $elements.appendTo('#content-card');
  if (value !== 'todos') {
    $('.card-restaurant').show().filter(':not(.' + value + ')').detach();
  }
})