// var button = document.querySelector('#button');
// var modal = document.querySelector('#modal');
// var close = document.querySelector('#close')
// var timerId;

// button.addEventListener('click', function () {
//   modal.classList.add('modal_active');
//   timerId = setTimeout(function () {
//     modal.classList.remove('modal_active')
//   }, 5000);
//   console.log(timerId);
// });

// close.addEventListener('click', function () {
//   console.log(timerId);
//   clearTimeout(timerId);
//   modal.classList.remove('modal_active');
// });

/* Анимация */

$(document).ready(function () {
  /* Валидация */
  $('#brif-form').validate({
    errorClass: "invalid",
    rules: {
      phone: "required",
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        email: "Введите корректный email",
        required: "Заполните поле"
      },
      username: {
        minlength: jQuery.validator.format("Минимальное количество символов: 2"),
        required: "Заполните поле"
      },
      phone: {
        required: "Заполните поле"
      }
    }
  })

  $('#offer-form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      phone: "required",
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      }
    },
    messages: {
      username: {
        minlength: jQuery.validator.format("Минимальное количество символов: 2"),
        required: "Заполните поле"
      },
      phone: {
        required: "Заполните поле"
      }
    }
  });
  /* Маска для телефона */
  $(".phone").mask("8 (999) 999-9999");

  /* Слайдер */
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});