import $ from 'jquery';
$(document).ready(function () {

  $(".dot").click(function () {
    $(".dot").removeClass("active");
    $(this).addClass("active");


    var curr = parseInt($(this).attr("data-dot-id"));

    let prevElement = $(".evaluate-item.active");
    prevElement.css({
      position: "absolute",
      "animation-name": "OUTmove",
    });
  
    $(".evaluate-item").css("position", "").removeClass("active");
    
    $(`.evaluate-item:nth-of-type(${curr})`)
      .addClass("active")
      .css("animation-name", "INmove");
  });
});
