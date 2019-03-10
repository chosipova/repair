$(document).ready(function () {
  var btn = $('#top-button');
 // console.log(btn);

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      btn.addClass('top-button_show');
      //console.log("Здесь");
    } else {
      btn.removeClass('top-button_show');
      //console.log("Здесь");
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

});