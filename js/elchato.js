var $nroRest = 2;
var $foods = data["CANETE"]["Imperial"]["restaurant"][$nroRest]; // Todos los platos entrada, plato principal

// Muestra todos los platos en la página, depediendo si es entrada o plato principal;
showFood('.elchato', 'entry') //Entradas
showFood('.elchato', 'main-course') //plato principal

// Show modal
for (var i = 0; i < $('figure').length; i++) {
  $('figure').eq(i).on('click', showModal);
}