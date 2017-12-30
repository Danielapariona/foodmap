var $nroRest = 0;
var $foods = data["CANETE"]["Imperial"]["restaurant"][$nroRest]; // Todos los platos entrada, plato principal

// Muestra todos los platos en la página, depediendo si es entrada o plato principal;
showFood('entry') //Entradas
showFood('main-course') //plato principal

function showFood(typeFood) {
  var $allFood = $foods['foods'][typeFood]
  for (var i = 0; i < $allFood.length; i++) {
    // Añade la imagen que corresponde, según la entrada o plato principal
    var idContent = '#' + typeFood;
    $(idContent).append("<figure class='image'><img class='food'>")
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

  //Añade la data en el modal
  var $dataModal = ['name', 'description', 'price', 'service', 'photo'];
  showDataModal($idContainer, $indexFood, $dataModal)

  //Cierra el modal
  $modal.on('click', closeModal);

  function closeModal(e) {
    $(this).remove();
  }
}

function showDataModal(idContainer, index, data) {
  var $element = $foods['foods'][idContainer][index]
  for (var i = 0; i < data.length; i++) {
    if (data[i] == 'name') {
      var $name = $element['name'];
      $('.content-modal').prepend('<h3 class="text-center subtitle">' + $name + '</h3>');
    } else if (data[i] == 'price') {
      var $price = $element['price']
      $('.content-modal').append('<p><b> Precio:</b> S/' + $price + '.00' + '</p>');
    } else if (data[i] == 'service') {
      var $service = $element['service'];
      $('.content-modal').append('<p>' + $service + '</p>');
    } else if (data[i] == 'description') {
      var $description = $element['description'];
      $('.content-modal').append('<p class="text-center">' + $description + '</p><br>');
    } else if (data[i] == 'photo') {
      $('figure#fig-modal').append($('<img>').attr('src', $element['photo']));
    }
  }

  //Añade el botón de pedir pedido
  $('.content-modal').append($('<a class="btn text-center">Pedir ahora</a>').attr('href',$foods['link']));

  // Muestra mensaje de pedido realizado
  $('.btn').on('click',function() {
    alert('Su pedido se ha realizado con éxito');
  }) 
  //$('.content-modal').append('<a href="list-map.html" class="btn text-center">Pedir ahora </a>');
}