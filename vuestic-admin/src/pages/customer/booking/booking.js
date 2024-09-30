import Box_change from "../account/box-change.js";
import checkInput from "./validInput.js";
import messageBox from "../home/message.js";
import $ from 'jquery';

const autoScroll = function () {
  var position = $("#heading-page").position();
  var hd_top = position.top;
  setTimeout(() => $(window).scrollTop(hd_top - 50), 500);
};

$(document).ready(function () {
  autoScroll();

  var nameRoom = "";
  var nameClient = "";
  var checkin = "";
  var checkout = "";

  $(".box-change .close-btn").click(function () {
    $(".box-change").hide();
    $(".mask-box-order").remove();
  });
  $("select").change(function () {
    var nameForm = $(this).attr("name");
    console.log($(this).attr("name"));

    if (nameForm == "room") nameRoom = $(this).val();
  });

  $('button[type="button"]').click(function () {
    checkin = $('input[name="checkin"]').val();
    checkout = $('input[name="checkout"]').val();
    nameClient = $('input[name="nameClient"]').val();
    console.log(nameRoom, nameClient, checkin, checkout);
    if (checkInput(nameRoom, nameClient, checkin, checkout)) {
      var currBox = new Box_change(nameRoom, nameClient, checkin, checkout);
      $("main .box-change .box-change-content").html(currBox.htmlScope());
      $("main .box-change").show(300);
      $("body").append(`<div class="mask-box-order"></div>`);
      $("input").prop("disabled", true);
    } else {
      var mess = new messageBox(
        "Notification",
        "Your information is wrong format. Please try again."
      );
      $(".frame-mess .message-box").html(mess.displayMess());
      $(".frame-mess").show();
      console.log("successfully");
    }
  });
});
