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

$(document).ready(function () {
  $('ul.listado li a').click(function () {
    var textoFiltro = $(this).text().toLowerCase().replace(/\s/g, "-");
    if (textoFiltro == 'todos') {
      $('div.filtros div.hidden').fadeIn('slow').removeClass('hidden');
    } else {
      $('.filtros div').each(function () {
        if (!$(this).hasClass(filterVal)) {
          $(this).fadeOut('normal').addClass('hidden');
        } else {
          $(this).fadeIn('slow').removeClass('hidden');
        }
      });
    }
    return false;
  });
});




/* $(document).ready(function() {
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');

  Asociando eventos a los inputs
  $email.on('input', function(event) {
    console.log(event.target.value);
    console.log($(this).val());
    var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(PATERNEMAIL.test($(this).val()));
  });
  
  $password.on(function() {
    if ($(this).val().length >= 6) {
      alert('cumple');
    } else {
      alert('No cumple');
    }
  });
});
 */