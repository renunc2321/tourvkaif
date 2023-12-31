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
      'bg-[#FF8500] border-[#FF8500]': isActive,
      'border-[#666666] bg-transparent': !isActive
    }"
    class="w-[18px] h-[18px] border-[2px] rounded-sm"
  >
    <div class="flex">
      <div
        :class="{
          'bg-white': isActive,
          'bg-transparent': !isActive
        }"
        class="relative w-0.5 mt-1 h-[7px] left-1 -rotate-45"
      ></div>
      <div
        :class="{
          'bg-white': isActive,
          'bg-transparent': !isActive
        }"
        class="relative w-0.5 h-[12px] left-[7.5px] rotate-45"
      ></div>
    </div>
  </button>
</template>
