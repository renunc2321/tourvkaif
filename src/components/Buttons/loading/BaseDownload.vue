<script setup>
import { downloadFile } from '@/services/admin.service'
import BaseLoadingButton from './BaseLoadingButton.vue'

defineProps({
  count: {
    required: true,
    type: Number
  }
})
</script>

<template>
  <BaseLoadingButton class="text-[#50D465]" @click='downloadFile'> Прикреплено {{ count }} файла </BaseLoadingButton>
</template>
