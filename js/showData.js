var $foods = $(data["CANETE"]["Imperial"]["restaurant"][0]['foods']); // Platillos de entrada

// Muestra todos los platos en la página
function showFood(container, typeFood) {
  var $allFood = $foods[0][typeFood]
  for (var i = 0; i < $allFood.length; i++) {
    var $img = $("<img class='food'>");
    container.append($img.attr('src', $allFood[i]['photo']));
  }
}

var $food = $('#food');
var $mainCourse = $('#main-course');
showFood($food, 'entry') //Entradas
showFood($mainCourse, 'main course') //plato principal