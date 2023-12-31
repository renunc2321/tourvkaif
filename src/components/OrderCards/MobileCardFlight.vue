<script setup>
import { formatDate, formatFlightAndType, formatTimeRange } from '@/functions'
import MobileCardTitle from './MobileCardTitle.vue'
import CardInfoList from './CardInfoList.vue'

const emit = defineEmits(['changeFlight'])

const props = defineProps({
  flight: {
    required: true,
    type: Object
  },
  isActiveFlight: {
    required: true,
    type: Boolean
  }
})

const date = formatDate(props.flight.departureDate)
const timeFlight = formatTimeRange(props.flight.time)
const timeInFlightAndType = formatFlightAndType(props.flight.time, props.flight.type)

const flightValue = {
  ['Дата вылета']: date,
  ['Время полета']: timeFlight,
  ['Время в полете, тип']: timeInFlightAndType,
  ['Место вылета']: props.flight.departureLocation,
  ['Место посадки']: props.flight.landingLocation,
  ['Туроператор']: props.flight.airline
}
</script>

<template>
  <div class='border-b'>
    <MobileCardTitle :is-active="isActiveFlight" @change="emit('changeFlight')">
      Рейс
    </MobileCardTitle>

    <CardInfoList
			class='py-3'
			v-if="isActiveFlight" 
			:info-value="flightValue"
		/>
  </div>
</template>
