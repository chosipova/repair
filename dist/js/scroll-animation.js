$(document).ready(function () {
  var elem = $('.step');

  $(window).scroll(function () {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() > elem.offset().top - $(window).height()) {
      //console.log("я здесь");
      elem.addClass('step-anim');
    } else {
      elem.removeClass('step-anim');
    }
  });
});