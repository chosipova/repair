$(document).ready(function () {
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  var openModal = $('.card__link');

  button.on('click', function () {
    modal.addClass('modal_active');
  });

  close.on('click', function () {
    modal.removeClass('modal_active');
  });

  openModal.click(function (event) {
    modal.addClass('modal_active');
  });
});