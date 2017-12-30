var $cards = $('.card-restaurant');

$(document).ready(function () {
  var $search = $('#input-search');
  $search.on('input', function (event) {
    //console.log($(this).val());
    var textoFiltro = $(this).val().toLowerCase()
    if (textoFiltro == 'criollo') {
      $('div.filtros div.hidden').fadeIn('slow').removeClass('hidden');
    }
  });
})