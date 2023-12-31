<script setup>
import BaseLoadingButton from './BaseLoadingButton.vue'

defineProps({
  count: {
    required: true,
    type: Number
  }
})
</script>

<template>
  <BaseLoadingButton class="text-[#50D465]"> Прикреплено {{ count }} файла </BaseLoadingButton>
</template>
