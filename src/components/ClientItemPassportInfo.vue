<script setup>
import { ref } from 'vue'

const isActive = ref(true)
const props = defineProps(['passportDetails'])
const psDetails = props.passportDetails

const passValue = {
  ['Имя (лат.)']: psDetails.firstName,
  ['Фамилия (лат.)']: psDetails.surName,
  ['Серия/ Номер паспорта']: psDetails.passportNumber,
  ['Кем выдан']: psDetails.issuedBy,
  ['Дата выдачи']: psDetails.dateOfIssue,
  ['Действует до']: psDetails.validUntil
}
</script>

<template>
  <div class="mt-3">
    <div class="flex grow justify-between pb-2 border-b">
      <p class="font-semibold text-[#222]">Паспортные данные (пассажир 1)</p>
      <button @click="isActive = !isActive">
        <img
          :class="{ 'rotate-180': isActive, 'rotate-0': !isActive }"
          class="transform transition duration-500 ease-in-out"
          src="@/assets/img/arrow.svg"
          alt="arrow"
        />
      </button>
    </div>
    <div v-if="isActive" class="mt-1">
      <ul class="flex flex-col mt-5 gap-3">
        <li v-for="(text, value) in passValue" :key="value" class="flex justify-between">
          <p class="text-gray-500">{{ value }}</p>
          <p class="font-semibold text-end">{{ text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
