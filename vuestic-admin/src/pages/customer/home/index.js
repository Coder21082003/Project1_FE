import $ from 'jquery';
$(document).ready(function () {
  $(".rooms-container .back-btn").click(function () {
    let curr_x = $(".rooms .card-slider").scrollLeft();
    let vw50 = $(window).width() / 2;
    $(".rooms .card-slider").scrollLeft(Math.max(curr_x - vw50, 0));
  });
  $(".rooms-container .next-btn").click(function () {
    let curr_x = $(".rooms .card-slider").scrollLeft();
    let vw50 = $(window).width() / 2;
    $(".rooms .card-slider").scrollLeft(Math.max(curr_x + vw50, 0));
  });

  // Restaurant Options
  $(".restaurant-btn").click(function () {
    let curr_element = parseInt($(this).attr("data-id"));
    $(".restaurant-btn").removeClass("active");
    console.log("test");
    $(this).addClass("active");
    $(".restaurant__tab").fadeOut(300, "swing");
    $(`.restaurant__tab:nth-of-type(${curr_element})`)
      .addClass("show")
      .fadeIn(300, "swing");
  });

  $(document).scroll(function () {
    let vh50 = $(window).height() / 2;
    let h_scroll = $(window).scrollTop();
    var position = $("#banner-1").position();
    var top_banner = position.top;

    if (h_scroll + vh50 * 2 > top_banner) {
      $("#banner-1").css({
        "background-position": `center ${
          parseInt(((top_banner - h_scroll) * 2) / 3) - 170
        }px`,
      });
    }
  });
});
