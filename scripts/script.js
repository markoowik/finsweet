$(document).ready(function () {
  $(".header-burger").click(function () {
    $(".header-burger,.nav__menu").toggleClass(
      "active"
    ); /*тоггл - при клике добавляет/убирает класс active*/
  });
});
