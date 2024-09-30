<script setup lang="ts">
import { PropType } from 'vue'
import { User } from '../types'


defineProps({
  user: {
    type: Object as PropType<User>,
    required: true,
  },
  size: {
    type: String,
    default: 'medium',
  },
})

const defaultAvatar = '../../../public/assets/default_avatar.png'; // Thay đổi đường dẫn tới hình ảnh mặc định
</script>

<template>
  <VaAvatar
    :size="size"
    :src="defaultAvatar"  
  />
</template>
