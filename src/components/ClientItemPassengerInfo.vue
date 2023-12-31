<script setup>
import { ref } from 'vue'
import { formatPhoneNumber } from '@/functions'

const isActive = ref(true)
const isActivePass = ref(false)

const props = defineProps(['passengerInformation'])
const passInfo = props.passengerInformation

const infoPassValue = {
  ['ФИО']: passInfo.fullName,
  ['Моб. телефон']: formatPhoneNumber(passInfo.phone),
  ['Дата рождения']: passInfo.dateOfBirth,
  ['Электронная почта']: passInfo.mail
}
</script>

<template>
  <div class="mt-3">
    <div class="flex grow justify-between pb-2 border-b lg:border-none">
      <p class="font-semibold text-[#222]">Информация о пассажире</p>
      <button class="lg:hidden" @click="isActive = !isActive">
        <img
          :class="{ 'rotate-180': isActive, 'rotate-0': !isActive }"
          class="transform transition duration-500 ease-in-out"
          src="@/assets/img/arrow.svg"
          alt="arrow"
        />
      </button>
    </div>

    <div v-if="isActive" class="flex items-center gap-2 mt-3">
      <p class="text-sm text-[#222]">Выбрать номер пассажира</p>
      <button @click="isActivePass = !isActivePass">
        <img
          :class="{ 'rotate-180': isActivePass, 'rotate-0': !isActivePass }"
          class="transform transition duration-500 ease-in-out"
          src="@/assets/img/arrow.svg"
          alt="arrow"
        />
      </button>
    </div>

    <div v-if="isActive">
      <ul class="flex flex-col mt-5 gap-3 border-b pb-3 lg:border-none">
        <li v-for="(text, value) in infoPassValue" :key="value" class="flex justify-between">
          <p class="text-gray-500">{{ value }}</p>
          <p class="font-semibold text-end">{{ text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
