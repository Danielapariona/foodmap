var $nroRest = 0;
var $foods = data["CANETE"]["Imperial"]["restaurant"][$nroRest]; // Todos los platos entrada, plato principal

// Muestra todos los platos en la página, depediendo si es entrada o plato principal;
showFood('.charapito', 'entry') //Entradas
showFood('.charapito', 'main-course') //plato principal

function showFood(nameClass, typeFood) {
  var $allFood = $foods['foods'][typeFood]
  for (var i = 0; i < $allFood.length; i++) {
    // Añade la imagen que corresponde, según la entrada o plato principal
    var idContent = '#' + typeFood;
    $(nameClass + idContent).append("<figure class='image'><img class='food'>")
    var $images = $(idContent + ' ' + 'img.food')
    $images.eq(i).attr('src', $allFood[i]['photo']);

    // Añade el nombre del plato
    $figures = $(idContent + ' ' + 'figure')
    $figures.eq(i).append("<figcaption class='center y-center'>" + $allFood[i]['name'] + '</figcaption>');
  }
}

// Show modal
for (var i = 0; i < $('figure').length; i++) {
  $('figure').eq(i).on('click', showModal);
}

function showModal() {
  //Agrega la estructura del modal
  var $modal = $('<div class="modal flex"><div class="content-modal"><figure id="fig-modal">');
  $('body').append($modal);

  // Obtiene la imagen al hacer click en el elemento y lo agrega al modal
  //$('figure#fig-modal').append($(this).children("img"));

  // Muestra los datos en el modal
  var $idContainer = $(this).parent().attr('id');
  var $indexFood = $(this).index();

  showDataModal($idContainer, $indexFood)

  //Cierra el modal
  $modal.on('click', closeModal);
  
  function closeModal(e) {
    $(this).remove();
  }
}

function showDataModal(idContainer, index) {
  //Mostrando los datos en el modal
  var $element = $foods['foods'][idContainer][index];

  $('.content-modal').prepend('<div class="center"><h3 class="text-center subtitle">' + $element['name'] + '</h3><i class="fa fa-times close" aria-hidden="true"></i></div>');
  $('.content-modal').append('<p class="text-center">' + $element['description'] + '</p><br>');
  $('.content-modal').append('<p><b> Precio:</b> S/' + $element['price'] + '.00' + '</p>');
  $('.content-modal').append('<p>' + $element['service'] + '</p>');
  $('figure#fig-modal').append($('<img><br>').attr('src', $element['photo']));

  //Añade el botón de pedir pedido
  $('.content-modal').append($('<a class="btn text-center">Pedir ahora</a>').attr('href',$foods['link']));

  // Muestra mensaje de pedido realizado
  $('.btn').on('click',function() {
    alert('Su pedido se ha realizado con éxito');
  }) 
  //$('.content-modal').append('<a href="list-map.html" class="btn text-center">Pedir ahora </a>');
}