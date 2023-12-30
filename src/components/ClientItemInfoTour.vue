<script setup>
import { ref } from 'vue'

const isActive = ref(true)

const props = defineProps(['info'])
const info = props.info

const infoValue = {
  ['Локация']: info.location,
  ['Кол-во ночей']: info.numberOfNights,
  ['Номер']: info.room,
  ['Питание']: info.meals,
  ['Услуги']: info.services,
  ['Стоимость']: info.price
}
</script>

<template>
  <div class="mt-3">
    <div class="flex grow justify-between pb-2 border-b lg:border-none">
      <p class="font-semibold text-[#222]">Информация о туре</p>
      <button class='lg:hidden' @click="isActive = !isActive">
        <img
          :class="{ 'rotate-180': isActive, 'rotate-0': !isActive }"
          class="transform transition duration-500 ease-in-out"
          src="@/assets/img/arrow.svg"
          alt="arrow"
        />
      </button>
    </div>

    <div v-if="isActive">
      <ul class="flex flex-col mt-5 gap-3  border-b pb-3 lg:border-none">
        <li v-for="(text, value) in infoValue" :key="value" class="flex justify-between">
          <p class="text-gray-500">{{ value }}</p>
          <p class="font-semibold text-end">{{ text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
