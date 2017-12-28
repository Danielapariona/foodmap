$(function () {
  setTimeout(function () {
    $('.loader-wrap').fadeOut(500);
  }, 1000);
});

/* */

var $contentCard = $('#content-card');
var $cardRestaurant = $('.card-restaurant');

/* Data */

/*$restaurant[0]['name'] */
var $place = data["CANETE"]["Imperial"];
var $restaurant = $place["restaurant"];


for (var i = 0; i < $restaurant.length; i++) {
  // crea los contenedores
  var $card = $("<div class='card-restaurant'><a href='#' class='link center'><div class='data'></div></a></div>");
  $contentCard.append($card);
  var $data = $('.data');
  var $link = $('.link');
  
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