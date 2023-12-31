<script setup>
defineProps({
  isActive: {
    required: true,
    type: Boolean
  }
})
</script>

<template>
  <button>
    <img
      :class="{
				'rotate-180': isActive,
				'rotate-0': !isActive
			}"
      class="transform transition duration-500 ease-in-out"
      src="@/assets/img/arrow.svg"
      alt="arrow"
    />
  </button>
</template>
