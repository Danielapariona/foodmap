var $foods = $(data["CANETE"]["Imperial"]["restaurant"][0]['foods']);

var $entry = $foods[0]['entry']

var $food = $('#food');
var $img
for (var i = 0; i < $entry.length; i++) {
  
  $img = $('<img>');
  $food.append($img.attr('src', $entry[i]['photo']));

}