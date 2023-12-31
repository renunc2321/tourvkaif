<script setup>
import { ref } from 'vue'
import BaseArrowButton from '../Buttons/BaseArrowButton.vue'
import { formatPhoneNumber } from '@/functions'
import MobileCardTitle from './MobileCardTitle.vue'
import CardInfoList from './CardInfoList.vue'

const isActiveNumber = ref(false)

function changeNumber() {
	isActiveNumber.value = !isActiveNumber.value
}

const emit = defineEmits(['changePassenger'])

const props = defineProps({
  passenger: {
    required: true,
    type: Object
  },
  isActivePassenger: {
    required: true,
    type: Boolean
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
	<div class='border-b'>
    <MobileCardTitle :is-active="isActivePassenger" @change="emit('changePassenger')">
      Информация о пассажире
    </MobileCardTitle>

    <div v-if="isActivePassenger" class="flex items-center gap-2 mt-3">
      <p class="text-sm text-[#222]">Выбрать номер пассажира</p>
      <BaseArrowButton :is-active="isActiveNumber" @click="changeNumber" />
    </div>

    <CardInfoList
			class='py-3'
			v-if="isActivePassenger" 
			:info-value="passengerValue"
		/>
  </div>
</template>