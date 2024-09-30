import $ from 'jquery';


$(document).ready(function () {

  // Restaurant Options
  $(".restaurant-btn").click(function () {
    let curr_element = parseInt($(this).attr("data-id"));
    $(".restaurant-btn").removeClass("active");
    // console.log("test");
    $(this).addClass("active");
    $(".restaurant__tab").fadeOut(300, "swing");
    $(`.restaurant__tab:nth-of-type(${curr_element})`)
      .addClass("show")
      .fadeIn(300, "swing");
  });
});