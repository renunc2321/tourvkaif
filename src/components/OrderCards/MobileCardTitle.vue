<script setup>
import BaseArrowButton from '../Buttons/BaseArrowButton.vue'

const emit = defineEmits(['change'])

defineProps({
  isActive: {
    required: true,
    type: Boolean
  }
})
</script>

<template>
  <div class="flex grow justify-between py-3">
    <p class="font-semibold text-[#222]">
      <slot></slot>
    </p>
    <BaseArrowButton :is-active="isActive" @click="emit('change')" />
  </div>
</template>
