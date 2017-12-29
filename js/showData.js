var $foods = $(data["CANETE"]["Imperial"]["restaurant"][0]['foods']); // Platillos de entrada


var $images;
var $figcaptions;

// Muestra todos los platos en la página
function showFood(container, typeFood) {
  var $allFood = $foods[0][typeFood]

  for (var i = 0; i < $allFood.length; i++) {
    // Añade la imagen que corresponde, según la entrada o plato principal
    var $figure = $("<figure class='image'><img class='food'>");
    $('#' + typeFood).append($figure)
    $images = $('#' + typeFood + ' ' + 'img.food')
    $images.eq(i).attr('src', $allFood[i]['photo']);

    // Añade el nombre del plato
    $figures = $('#' + typeFood + ' ' + 'figure')
    $figures.eq(i).append('<figcaption>' + $allFood[i]['name'] + '<figcaption>');
  }
}

var $food = $('#food');
var $mainCourse = $('#main-course');
showFood($food, 'entry') //Entradas
showFood($mainCourse, 'main-course') //plato principal