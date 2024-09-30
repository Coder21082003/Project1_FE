<template>
    <div class="verify-container">
      <h1 class="font-semibold text-4xl mb-4">Xác minh địa chỉ email của bạn</h1>
      <p class="text-base mb-4 leading-5">Chúng tôi đã gửi mã xác minh đến email của bạn: <strong>{{ email }}</strong></p>
      
      <div class="code-input-container grid grid-cols-6 gap-2 mb-4">
        <input
          v-for="(digit, index) in codeInput"
          :key="index"
          type="text"
          maxlength="1"
          class="code-input"
          v-model="codeInput[index]"
          @input="moveToNext(index)"
          @keydown.backspace="moveToPrev(index)"
        />
      </div>
  
      <p v-if="errorMessage" class="text-danger mb-4">{{ errorMessage }}</p>
      
      <VaButton class="mb-4 w-full" :disabled="!isCodeComplete" @click="verifyCode">Xác minh</VaButton>
  
      <div class="resend-container flex justify-between items-center">
        <p class="text-secondary">Chưa nhận được mã?</p>
        <VaButton @click="resendCode" :disabled="resendDisabled">{{ resendText }}</VaButton>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, reactive, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { sendEmailCode, insertUser } from '../../services/dataservice.js'; 
  import { useToast } from 'vuestic-ui';
  
  export default {
    setup() {
      const router = useRouter();
      const { init } = useToast();
  
      // Lấy thông tin từ localStorage
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const email = userData.email || '';
      const name = userData.name || '';
      const password = userData.password || '';
      const code = ref(''); // Lưu mã nhận từ API
      const expirationTime = ref(null); // Thời gian hết hạn của mã
      const codeInput = reactive(['', '', '', '', '', '']); // Mảng lưu mã người dùng nhập
      const errorMessage = ref('');
      const resendDisabled = ref(true); // Kiểm soát trạng thái nút resend
      const resendText = ref('Gửi lại mã'); // Text cho nút resend
  
      // Hàm gửi mã xác minh đến email
      const sendCode = async () => {
        try { 
          const response = await sendEmailCode(email);
          if (response.data && response.data.code) {
            console.log(response.data.code);
            code.value = response.data.code; // Lưu mã xác minh
            init({ message: 'Mã xác minh đã được gửi đến email của bạn.', color: 'info' });
          }
        } catch (error) {
          console.error('Lỗi khi gửi mã xác minh:', error);
          init({ message: 'Có lỗi xảy ra. Vui lòng thử lại.', color: 'danger' });
        }
      };
  
    // Hàm kiểm tra mã xác minh
    const verifyCode = async () => {  // Đổi thành async
        // Chỉ so sánh khi người dùng đã nhập đủ 6 ký tự
        if (codeInput.join('').length === 6) {
            // Chuyển chuỗi thành số và so sánh với mã từ API
            const enteredCode = Number(codeInput.join(''));
            console.log('Mã từ API:', code.value);
            console.log('Mã người dùng nhập:', enteredCode);
            
            if (enteredCode === Number(code.value)) {
                try { 
                    // Gọi API để chèn người dùng mới
                    const response = await insertUser(name, email, password);
                    init({ message: 'Tài khoản đã được tạo thành công', color: 'success' });
                    
                    // Chuyển hướng đến trang đăng nhập
                    router.push({ name: 'login' }); 
                } catch (error) {
                    console.error('Lỗi khi tạo tài khoản:', error);
                    init({ message: 'Có lỗi xảy ra. Vui lòng thử lại.', color: 'danger' });
                }
            } else {
                errorMessage.value = 'Mã xác minh không đúng. Vui lòng thử lại.';
                codeInput.fill(''); // Xóa mã nhập vào nếu không đúng
            }
        } else {
            errorMessage.value = 'Vui lòng nhập đủ 6 ký tự.';
        }
};

  
      // Di chuyển đến input tiếp theo khi nhập
      const moveToNext = (index) => {
        if (codeInput[index].length === 1 && index < codeInput.length - 1) {
          document.querySelectorAll('.code-input')[index + 1].focus();
        }
      };
  
      // Quay lại input trước khi nhấn backspace
      const moveToPrev = (index) => {
        if (codeInput[index] === '' && index > 0) {
          document.querySelectorAll('.code-input')[index - 1].focus();
        }
      };
  
      // Hàm gửi lại mã sau mỗi 60 giây
      const resendCode = async () => {
        await sendCode();
        startResendTimer();
      };
  
      // Bắt đầu đếm ngược 60 giây cho nút resend
      const startResendTimer = () => {
        resendDisabled.value = true;
        let countdown = 300;
        resendText.value = `Gửi lại mã trong ${countdown}s`;
        const timer = setInterval(() => {
          countdown--;
          resendText.value = `Gửi lại mã trong ${countdown}s`;
          if (countdown === 0) {
            clearInterval(timer);
            resendDisabled.value = false;
            resendText.value = 'Gửi lại mã';
          }
        }, 1000);
      };
  
      // Kiểm tra xem người dùng đã nhập đủ mã xác minh chưa
      const isCodeComplete = computed(() => {
        return codeInput.every((digit) => digit !== '');
      });
  
      onMounted(() => {
        sendCode();
        startResendTimer();
      });
  
      return {
        email,
        codeInput,
        errorMessage,
        resendDisabled,
        resendText,
        verifyCode,
        moveToNext,
        moveToPrev,
        isCodeComplete,
        resendCode,
      };
    },
  };
  </script>
  
  <style scoped>
  .verify-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  
  .code-input-container {
    display: flex;
    justify-content: center;
  }
  
  .code-input {
    width: 50px;
    height: 50px;
    font-size: 24px;
    text-align: center;
    border: 2px solid #ddd;
    border-radius: 8px;
  }
  
  .code-input:focus {
    outline: none;
    border-color: #007bff;
  }
  
  .resend-container {
    margin-top: 1rem;
  }
  
  .text-danger {
    color: red;
  }
  </style>
  