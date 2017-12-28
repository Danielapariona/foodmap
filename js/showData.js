var $foods = $(data["CANETE"]["Imperial"]["restaurant"][0]['foods']); // Platillos de entrada

/* var $entry = $foods[0]['entry']
var $food = $('#food');

for (var i = 0; i < $entry.length; i++) {
  var $img = $("<img class='food'>");
  $food.append($img.attr('src', $entry[i]['photo']));
}
 */


function showFood(container, typeFood) {
  var $allFood = $foods[0][typeFood] 

  for (var i = 0; i < $allFood.length; i++) {
    var $img = $("<img class='food'>");
    container.append($img.attr('src', $allFood[i]['photo']));
  }
}

var $food = $('#food');
var $mainCourse = $('#main-course');
showFood($food, 'entry') //main course
showFood($mainCourse, 'main course')