<script setup>
import { isString } from '@/validators'
import { BUTTON_ITEMS } from '@/constants'

defineProps({
  activeFilter: {
    required: true,
    type: String
  }
})

const emit = defineEmits({
  filter: isString
})
</script>

<template>
  <div class="flex grow gap-4">
    <button
      v-for="(text, value) in BUTTON_ITEMS"
      :key="value"
      @click="emit('filter', value)"
      :class="{
        'border-[#FF8500] text-[#222]': activeFilter === value,
        'border-white text-[#888]': activeFilter !== value
      }"
      class="p-3 border rounded-md w-full font-semibold md:w-[164px] md:p-2.5"
    >
      {{ text }}
    </button>
  </div>
</template>
