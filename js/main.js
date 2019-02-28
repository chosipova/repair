var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close')
var timerId;

button.addEventListener('click', function () {
  modal.classList.add('modal_active');
  timerId = setTimeout(function () {
    modal.classList.remove('modal_active')
  }, 5000);
  console.log(timerId);
});

close.addEventListener('click', function () {
  console.log(timerId);
  clearTimeout(timerId);
  modal.classList.remove('modal_active');
});