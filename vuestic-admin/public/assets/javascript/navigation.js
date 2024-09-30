$(document).ready(function () {
  $(".mask-dark").fadeOut();
  let vh50 = $(window).height() / 2;
  $(this).scroll(function () {
    let heightScroll = $(this).scrollTop();

    if (heightScroll > vh50) {
      if ($(".navbar").attr("class").indexOf("nav-white") == -1) {
        $(".navbar").addClass("nav-white");
        $(":root").css({
          "--text-color-1": "black",
        });
      }
    } else if ($(".navbar").attr("class").indexOf("nav-white") !== -1) {
      $(".navbar").removeClass("nav-white");
      $(":root").css({
        "--text-color-1": "white",
      });
      $(".navbar").css({
        top: "0",
      });
    }
  });

  //
  //    Handle MENU Responsive (Mobile)
  //
  $("#btn-show-navbar").click(function (event) {
    event.stopPropagation();
    $(".navbar-nav").css({
      right: "0px",
      position: "fixed",
    });
    $(".mask-dark").fadeIn();
  });

  $(".navbar-nav *").click(function (event) {
    if ($(this).attr("class").indexOf("bi-x-lg") != -1);
    else {
      console.log();
      event.stopPropagation();
      $(".navbar-nav").css({
        right: "0px",
      });
    }
  });
  $(window).click(function () {
    $(".navbar-nav").css({
      right: "-100%",
    });
    $(".mask-dark").fadeOut();
  });

  $(".btn-nav-collapse").click(function () {
    // console.log("test");
    $(".navbar-nav").css({
      right: "-100%",
    });
    $(".mask-dark").fadeOut();
  });
});
