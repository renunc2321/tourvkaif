<script setup>
import { formatDate, formatDurationAndType, formatTimeRange } from '@/functions'
import { ref } from 'vue'

const isActive = ref(true)
const props = defineProps(['flight'])
const flight = props.flight

const date = formatDate(flight.departureDate)
const timeFlight = formatTimeRange(flight.time)
const timeInFlight = formatDurationAndType(flight.time, flight.type)
</script>

<template>
  <div class="mt-3">
    <div class="flex grow justify-between pb-2 border-b lg:border-none">
      <p class="font-semibold text-[#222]">Рейс</p>
      <button class="lg:hidden" @click="isActive = !isActive">
        <img
          :class="{ 'rotate-180': isActive, 'rotate-0': !isActive }"
          class="transform transition duration-500 ease-in-out"
          src="@/assets/img/arrow.svg"
          alt="arrow"
        />
      </button>
    </div>

    <div v-if="isActive">
      <ul class="flex flex-col mt-5 gap-3 border-b pb-3 lg:border-none">
        <li class="flex justify-between">
          <p class="text-gray-500">Дата вылета</p>
          <p class="font-semibold text-end">{{ date }}</p>
        </li>
        <li class="flex justify-between">
          <p class="text-gray-500">Время полета</p>
          <p class="font-semibold text-end">{{ timeFlight }}</p>
        </li>
        <li class="flex justify-between">
          <p class="text-gray-500">Время в полете, тип</p>
          <p class="font-semibold text-end">{{ timeInFlight }}</p>
        </li>
        <li class="flex justify-between">
          <p class="text-gray-500">Место вылета</p>
          <p class="font-semibold text-end">{{ flight.departureLocation }}</p>
        </li>
        <li class="flex justify-between">
          <p class="text-gray-500">Место посадки</p>
          <p class="font-semibold text-end">{{ flight.landingLocation }}</p>
        </li>
        <li class="flex justify-between">
          <p class="text-gray-500">Туроператор</p>
          <p class="font-semibold text-end">{{ flight.airline }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
