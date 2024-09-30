import messageBox from "../home/message.js";
import displayMess from "../home/message.js";

$(document).ready(function () {
  let D1 = new Date();
  let current_date = D1.getDate();
  let current_month = D1.getMonth() + 1;
  let current_year = D1.getFullYear();
  if (current_date < 10) current_date = "0" + current_date;
  if (current_month < 10) current_month = "0" + current_month;
  $("#checkin-input").val(`${current_year}-${current_month}-${current_date}`);
  $("#checkout-input").val(`${current_year}-${current_month}-${current_date}`);

  const validInput = function () {
    const date_checkin = new Date($("#checkin-input").val());
    const date_checkout = new Date($("#checkout-input").val());

    return (
      date_checkin.getDate() <= date_checkout.getDate() &&
      date_checkin.getMonth() <= date_checkout.getMonth() &&
      date_checkin.getFullYear() <= date_checkout.getFullYear() &&
      (parseInt($("#children-form").find(":selected").text()) !== 0 ||
        parseInt($("#adult-form").find(":selected").text()) !== 0)
    );
  };

  $(".booking__btn").click(function (e) {
    var value;
    if (validInput()) {
      value = new messageBox(
        "Booking",
        'You have <b class="text-primary">successfully booked</b> your room'
      );
    } else {
      value = new messageBox(
        "Booking",
        'LUXURY is <b class="text-danger">out of room</b> suitable for you.<br>Please check the information again.'
      );
    }
    var txt = value.displayMess();
    $(".message-box").html(txt);
    $(".frame-mess").fadeIn(200);
  });

  $(this).on("click", ".message-box button", function (e) {
    $(".frame-mess").fadeOut(200);
  });
});
