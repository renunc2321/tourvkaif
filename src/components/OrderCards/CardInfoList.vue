<script setup>
defineProps({
  infoValue: {
    required: true,
    type: Object
  }
})
</script>

<template>
  <div>
    <ul class="flex flex-col gap-3">
      <li v-for="(text, value) in infoValue" :key="value" class="flex justify-between">
        <p class="text-gray-500">{{ value }}</p>
        <p class="font-semibold text-end">{{ text }}</p>
      </li>
    </ul>
  </div>
</template>
