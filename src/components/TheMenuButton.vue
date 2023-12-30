<script setup>
defineProps({
  isMenuVisible: {
    required: true,
    type: Boolean,
  }
})
</script>

<template>
  <button
    :class="{
      'border border-[#FFEEDB] h-[35px]': isMenuVisible,
      'flex-col py-[6px] h-[30px]': !isMenuVisible
    }"
    class="flex w-[35px] justify-between px-1 rounded-lg items-center"
  >
    <div
      v-for="i in [0, 1, 2]"
      :key="i"
      :class="{ 'w-[3px] h-[3px]': isMenuVisible, 'w-[24px] h-[2px]': !isMenuVisible }"
      class="bg-[#222] rounded-full"
    ></div>
  </button>
</template>
