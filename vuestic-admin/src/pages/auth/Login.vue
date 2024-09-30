<template>
  <VaForm ref="formRef" @submit.prevent="submit">
    <h1 class="font-semibold text-4xl mb-4">Log in</h1>
    <p class="text-base mb-4 leading-5">
      New to Vuestic?
      <RouterLink :to="{ name: 'signup' }" class="font-semibold text-primary">Sign up</RouterLink>
    </p>
    <VaInput
      v-model="formData.email"
      :rules="[validators.required, validators.email]"
      class="mb-4"
      label="Email"
      type="email"
    />
    <VaInput
      v-model="formData.password"
      :rules="[validators.required, validators.minLength(6)]"
      :type="isPasswordVisible ? 'text' : 'password'"
      class="mb-4"
      label="Password"
      @clickAppendInner.stop="togglePasswordVisibility"
    >
      <template #appendInner>
        <VaIcon
          :name="isPasswordVisible ? 'mso-visibility_off' : 'mso-visibility'"
          class="cursor-pointer"
          color="secondary"
        />
      </template>
    </VaInput>

    <div class="auth-layout__options flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <VaCheckbox v-model="formData.keepLoggedIn" class="mb-2 sm:mb-0" label="Keep me signed in on this device" />
      <RouterLink :to="{ name: 'recover-password' }" class="mt-2 sm:mt-0 sm:ml-1 font-semibold text-primary">
        Forgot password?
      </RouterLink>
    </div>

    <div class="flex justify-center mt-4">
      <VaButton class="w-full" @click="submit"> Login</VaButton>
    </div>
  </VaForm>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vuestic-ui'
import { validators } from '../../services/utils'
import { login } from '../../services/dataservice.js'

const formRef = ref<HTMLFormElement | null>(null) // Tạo tham chiếu đến form với kiểu HTMLFormElement hoặc null
const { push } = useRouter()
const { init } = useToast()

const formData = reactive({
  email: '',
  password: '',
  keepLoggedIn: false,
})

// Sử dụng ref để quản lý trạng thái hiển thị mật khẩu
const isPasswordVisible = ref(false)

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const submit = async () => {
  // Kiểm tra xem formRef.value có phải là null không
  const form = formRef.value
  if (form?.validate()) {
    try {
      // Gọi API login
      const response = await login(formData.email, formData.password);
      
      // Nếu đăng nhập thành công
      init({ message: "You've successfully logged in", color: 'success' })
      push({ name: 'dashboard' }) // Chuyển hướng sang dashboard
      
    } catch (error) {
      // Nếu có lỗi
      init({ message: 'Login failed. Please check your credentials.', color: 'danger' })
    }
  }
}
</script>
