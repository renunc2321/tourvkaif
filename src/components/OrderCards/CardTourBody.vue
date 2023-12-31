<script setup>
import CardFlight from './CardFlight.vue'
import CardInfo from './CardInfo.vue'
import CardInfoPassenger from './CardInfoPassenger.vue'

const props = defineProps({
	tourType: {
		required: true,
		type: String
	},
	body: {
		required: true,
		type: Object
	}
})

const info = props.body.info
const flight = props.body.flight
const passenger = props.body.passengerInformation
</script>

<template>
	<div class='flex gap-6'>
		<CardInfo
		class='w-[318px]'
			:tour-type='tourType'
			:info='info'
		/>
		<CardFlight
		class='w-[318px]'
			:flight="flight"
		/>
		<CardInfoPassenger
		class='w-[318px]'
			:passenger='passenger'
		/>
	</div>
</template>