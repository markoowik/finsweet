$(document).ready(function () {
  $(".header-burger").click(function () {
    $(".header-burger,.nav__menu").toggleClass(
      "active"
    ); /*тоггл - при клике добавляет/убирает класс active*/
  });

  let btn = $(".expand-btn");
  let hiddenRow = $(".expandable");

  $(".expand-btn").click(function () {
    let index = btn.index(this);
    hiddenRow.eq(index).toggleClass("hidden");

    if (hiddenRow.is(":visible")) {
      hiddenRow.eq(index).slideDown(300); // анимация открытия
      $(btn).eq(index).attr("src", "./icons/+ (1).svg");
    } else {
      hiddenRow.eq(index).slideUp(300); // анимация закрытия
      $(btn).eq(index).attr("src", "./icons/+.svg");
    }
  });
});
