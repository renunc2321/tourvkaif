<script setup>
import { formatDate, formatFlightAndType, formatTimeRange } from '@/functions'
import CardInfoList from './CardInfoList.vue'
import CardTitle from './CardTitle.vue'

const props = defineProps({
  flight: {
    required: true,
    type: Object
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
  <div>
    <CardTitle>Рейс</CardTitle>
    <CardInfoList class='mt-5' :info-value="flightValue" />
  </div>
</template>
