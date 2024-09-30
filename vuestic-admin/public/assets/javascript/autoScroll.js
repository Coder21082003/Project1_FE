export default function autoScroll() {
  var position = $("#heading-page").position();
  var hd_top = position.top;
  setTimeout(() => $(window).scrollTop(hd_top - 50), 500);
}
