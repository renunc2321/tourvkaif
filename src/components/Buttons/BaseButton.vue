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
			'border-[#FF8500] text-[#222]': isActive,
			'border-white text-[#888]': !isActive
		}"
		class="font-medium h-[44px]"
	>
		<slot></slot>
	</button>
</template>