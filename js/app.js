// Oculta el logo al iniciar, luego de un tiempo determinado.
$(function () {
  setTimeout(function () {
    $('.loader-wrap').fadeOut(500);
  }, 1000);
});

// Accediendo a la data.
var $restaurant = data["CANETE"]["Imperial"]["restaurant"];
showRestaurant($restaurant);

function showRestaurant(restaurant) {
  for (var index = 0; index < $restaurant.length; index++) {
    addOptionSelect(index);
    // Crea los contenedores y agrega una clase al card-restaurant según el tipo de restaurante para luego filtrar
    var $card = $("<div class='card-restaurant'><a href='#' class='link center'><div class='data'></div></a></div>");
    $('#content-card').append($card);
    $('.card-restaurant').eq(index).addClass($restaurant[index]['type']);

    showDataRestauran(index);
  }
}

// Agregando 'option' al select, según los tipos de restaurantes disponiles. 
function addOptionSelect(indexRest) {
  $('select').append("<option class='op'>" + $restaurant[indexRest]['type'] + "</option>");
  var $options = $('option.op');
  $options.eq(indexRest).attr('value', $restaurant[indexRest]['type']);
}

function showDataRestauran(index) {
  //Agrega los datos
  var $contentData = $('.data').eq(index);
  $contentData.append('<p><strong>' + $restaurant[index]['name'] + '</strong></p>');
  $contentData.append('<p>' + $restaurant[index]['address'] + '</p>');
  $contentData.append('<p>Abierto hasta las ' + $restaurant[index]['time'] + '</p>');  
  // Agregando las imagenes dinamicamente.
  var $background = $("<div class='photo-restaurant'>");
  $background.css('background-image', 'url' + '(' + $restaurant[index]['photo'] + ')');
  $('.link').eq(index).attr("href", $restaurant[index]['link']);
  $('.link').eq(index).append($background);
}

// Filtrando data
var $elements = $('.card-restaurant');
$('select').change(function (e) {
  var value = $('option:selected').val().toLowerCase();
  $('.card-restaurant').detach();
  $elements.appendTo('#content-card');
  if (value !== 'todos') {
    $('.card-restaurant').show().filter(':not(.' + value + ')').detach();
  }
});