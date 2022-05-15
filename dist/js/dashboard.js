$(document).ready(function() {
  $('#cpf').mask('000.000.000-00', {reverse: true});
  $('#telefone').mask('(00) 00000-0000');
  $('#cep').mask('00000-000');
  $('#data').mask('00/00/0000');
  //$('#hora').mask('00:00');
  //$('#money').mask('000.000.000.000.000,00', {reverse: true});

  $('.toggler').on('click', function() {
    $('.menu-container').toggleClass('active');
  });

  $('.nav-toggler').on('click', function() {
    $('.navbar-toggler').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  function setMenuHeight() {
    var navbarHeight = $('.navbar').outerHeight();
    $('.menu-wrapper')
      .outerHeight(document.documentElement.clientHeight - navbarHeight)
      .niceScroll({
        emulatetouch: true
      });
  }
  setMenuHeight();
  $(window).on('resize', function() {
    setMenuHeight();
  });
});