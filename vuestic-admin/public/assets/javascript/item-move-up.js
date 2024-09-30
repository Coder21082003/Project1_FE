$(document).ready(function () {
  $(this).scroll(function () {
    let h_scroll = $(window).scrollTop();
    let vh = parseInt($(window).height() * 80 / 100);

    $(".item-move-up").each(function() {
      let position_item = $(this).position();

      if (h_scroll + vh >= position_item.top) {
        $(this).css({
          transform: "translate(0,0)",
          opacity: "1",
        });
      }
    });
  });
});
