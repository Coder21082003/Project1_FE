<template>
  <VaForm ref="form" @submit.prevent="submit">
    <h1 class="font-semibold text-4xl mb-4">Sign up</h1>
    <p class="text-base mb-4 leading-5">
      Have an account?
      <RouterLink :to="{ name: 'login' }" class="font-semibold text-primary">Login</RouterLink>
    </p>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <VaInput v-model="formData.firstName" :rules="[(v) => !!v || 'First Name field is required']" label="First Name" />
      <VaInput v-model="formData.lastName" :rules="[(v) => !!v || 'Last Name field is required']" label="Last Name" />
    </div>

    <VaInput v-model="formData.email"
      :rules="[(v) => !!v || 'Email field is required', (v) => /.+@.+\..+/.test(v) || 'Email should be valid']"
      class="mb-4" label="Email" type="email" />

    <VaValue v-slot="isPasswordVisible" :default-value="false">
      <VaInput ref="password1" v-model="formData.password" :rules="passwordRules"
        :type="isPasswordVisible.value ? 'text' : 'password'" class="mb-4" label="Password"
        messages="Password should be 8+ characters: letters, numbers, and special characters."
        @clickAppendInner.stop="isPasswordVisible.value = !isPasswordVisible.value">
        <template #appendInner>
          <VaIcon :name="isPasswordVisible.value ? 'mso-visibility_off' : 'mso-visibility'" class="cursor-pointer"
            color="secondary" />
        </template>
      </VaInput>

      <VaInput ref="password2" v-model="formData.repeatPassword" :rules="repeatPasswordRules"
        :type="isPasswordVisible.value ? 'text' : 'password'" class="mb-4" label="Repeat Password"
        @clickAppendInner.stop="isPasswordVisible.value = !isPasswordVisible.value">
        <template #appendInner>
          <VaIcon :name="isPasswordVisible.value ? 'mso-visibility_off' : 'mso-visibility'" class="cursor-pointer"
            color="secondary" />
        </template>
      </VaInput>
    </VaValue>

    <div class="flex justify-center mt-4">
      <VaButton class="w-full" @click="submit"> Create account</VaButton>
    </div>
  </VaForm>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useForm, useToast } from 'vuestic-ui';
import { registerUser, insertUser } from '../../services/dataservice.js'; // Import phương thức registerUser

export default {
  setup() {
    const { validate } = useForm('form');
    const { push } = useRouter();
    const { init } = useToast();

    const formData = reactive({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
    });

    const passwordRules = [
      (v) => !!v || 'Password field is required',
      (v) => (v && v.length >= 8) || 'Password must be at least 8 characters long',
      (v) => (v && /[A-Za-z]/.test(v)) || 'Password must contain at least one letter',
      (v) => (v && /\d/.test(v)) || 'Password must contain at least one number',
      (v) => (v && /[!@#$%^&*(),.?":{}|<>]/.test(v)) || 'Password must contain at least one special character',
    ];

    const repeatPasswordRules = [
      (v) => !!v || 'Repeat Password field is required',
      (v) => v === formData.password || 'Passwords don\'t match',
    ];

    const submit = async () => {
      if (validate()) {
        try {
          const response = await registerUser({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            password: formData.password,
          });

          if (response.data) {
            // Lưu dữ liệu vào localStorage
            localStorage.setItem('userData', JSON.stringify(response.data));

            init({
              message: "Bạn đã đăng ký thành công. Vui lòng xác minh email của bạn.",
              color: 'success',
            });
            push({ name: 'verify' });
          }
          
        } catch (error) {
          console.error('Có lỗi xảy ra trong quá trình đăng ký:', error);
          init({
            message: 'Đăng ký không thành công. Vui lòng thử lại.',
            color: 'danger',
          });
        }
      }
    };

    return {
      formData,
      submit,
      passwordRules,
      repeatPasswordRules,
    };
  }
};
</script>
 