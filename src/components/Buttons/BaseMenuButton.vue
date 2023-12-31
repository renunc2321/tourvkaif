<script setup>
defineProps({
  isActive: {
    required: true,
    type: Boolean
  }
})
</script>

<template>
  <button
    :class="{
      'bg-white text-[#222]': isActive,
      'bg-[#F8F8F8] text-[#888]': !isActive
    }"
    class="font-medium py-3 md:py-[22px] px-5 rounded-md"
  >
    <slot></slot>
  </button>
</template>
