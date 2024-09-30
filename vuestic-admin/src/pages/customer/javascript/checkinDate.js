import { ref, onMounted } from "vue";
import messageBox from "../home/message.js";
import $ from 'jquery';

export default {
  setup() {
    const checkin = ref("");
    const checkout = ref("");
    const adults = ref(0);
    const children = ref(0);
    const showMessage = ref(false);
    const message = ref("");

    // Thiết lập giá trị mặc định cho input checkin và checkout
    const setDefaultDate = () => {
      const D1 = new Date();
      let current_date = D1.getDate();
      let current_month = D1.getMonth() + 1;
      let current_year = D1.getFullYear();
      if (current_date < 10) current_date = "0" + current_date;
      if (current_month < 10) current_month = "0" + current_month;
      const today = `${current_year}-${current_month}-${current_date}`;
      checkin.value = today;
      checkout.value = today;
    };

    // Kiểm tra dữ liệu đầu vào có hợp lệ hay không
    const validInput = () => {
      const date_checkin = new Date(checkin.value);
      const date_checkout = new Date(checkout.value);

      return (
        date_checkin <= date_checkout &&
        (adults.value !== 0 || children.value !== 0)
      );
    };

    // Xử lý sự kiện đặt phòng
    const handleBooking = () => {
      let value;
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
      message.value = value.displayMess();
      showMessage.value = true;
    };

    // Đóng thông báo
    const closeMessage = () => {
      showMessage.value = false;
    };

    onMounted(() => {
      setDefaultDate();
    });

    return {
      checkin,
      checkout,
      adults,
      children,
      handleBooking,
      showMessage,
      message,
      closeMessage
    };
  },
};