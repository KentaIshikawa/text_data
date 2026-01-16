//global navi
$(function () {
  $("#js-gnav-button").on("click", function () {
    $("#js-gnav").toggleClass("is-open");
  });
  $("#js-gnav-list").on("click", function () {
    $("#js-gnav").removeClass("is-open");
  });
});