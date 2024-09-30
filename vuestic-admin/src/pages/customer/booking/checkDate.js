$(document).ready(function () {
  let D1 = new Date();
  let current_date = D1.getDate();
  let current_month = D1.getMonth() + 1;
  let current_year = D1.getFullYear();
  if (current_date < 10) current_date = "0" + current_date;
  if (current_month < 10) current_month = "0" + current_month;
  $('input[name="checkin"').val(`${current_year}-${current_month}-${current_date}`);
  $('input[name="checkout"').val(`${current_year}-${current_month}-${current_date}`);
});
