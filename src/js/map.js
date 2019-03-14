//  $(document).ready(function () {
//    var elem = $('.map');
//    var l = false;
//    $(window).scroll(function () {
//      if ($(window).scrollTop() > elem.offset().top - $(window).height() & l == false) {
//        ymaps.load(init);
//        l = true;
//      };
//    });

//    function init() {

//      // Создание карты.  

//      var myMap = new ymaps.Map("map", {
//        // Координаты центра карты.
//        // Порядок по умолчанию: «широта, долгота».
//        // Чтобы не определять координаты центра карты вручную,
//        // воспользуйтесь инструментом Определение координат.
//        center: [55.61140907, 37.20112250],
//        // Уровень масштабирования. Допустимые значения:
//        // от 0 (весь мир) до 19.
//        zoom: 14
//      }, {
//        searchControlProvider: 'yandex#search'
//      });
//      myMap.behaviors.disable('scrollZoom');
//      // Создание метки
//      var myPlacemark = new ymaps.Placemark(
//        // Координаты метки
//        [55.61140907, 37.20112250], {
//          hintContent: 'г. Москва, ул. Ленина, д. 10'
//        }
//      );
//      // Добавление метки на карту
//      myMap.geoObjects.add(myPlacemark);
//    }
//  });