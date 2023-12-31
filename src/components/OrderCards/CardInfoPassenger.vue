<script setup>
import { formatPhoneNumber } from '@/functions'
import { ref } from 'vue'
import BaseArrowButton from '../Buttons/BaseArrowButton.vue'
import CardInfoList from './CardInfoList.vue'
import CardTitle from './CardTitle.vue'

const isActiveNumber = ref(false)

function changeNumber() {
  isActiveNumber.value = !isActiveNumber.value
}

const props = defineProps({
  passenger: {
    required: true,
    type: Object
  }
})

const passengerValue = {
  ['ФИО']: props.passenger.fullName,
  ['Моб. телефон']: formatPhoneNumber(props.passenger.phone),
  ['Дата рождения']: props.passenger.dateOfBirth,
  ['Электронная почта']: props.passenger.mail
}
</script>
<template>
  <div>
    <CardTitle>Информация о пассажире</CardTitle>

    <div class="flex items-center">
      <p class="text-sm text-[#222]">Выбрать номер пассажира</p>
      <BaseArrowButton :is-active="isActiveNumber" @click="changeNumber" />
    </div>

    <CardInfoList class="mt-5" :info-value="passengerValue" />
  </div>
</template>
