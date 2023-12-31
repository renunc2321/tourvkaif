<script setup>
const props = defineProps(['passportDetails'])
const psDetails = props.passportDetails

const passValue = {
  ['Имя (лат.)']: psDetails.firstName,
  ['Серия/ Номер паспорта']: psDetails.passportNumber,
  ['Дата выдачи']: psDetails.dateOfIssue,
  ['Фамилия (лат.)']: psDetails.surName,
  ['Кем выдан']: psDetails.issuedBy,
  ['Действует до']: psDetails.validUntil
}
</script>

<template>
  <div class="mt-6">
    <p class="font-semibold text-lg">Паспортные данные</p>
    <ul class="grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-3 mt-5">
      <li v-for="(text, value) in passValue" :key="value" class="flex justify-between">
        <p class="text-gray-500">{{ value }}</p>
        <p class="font-semibold text-end">{{ text }}</p>
      </li>
    </ul>
  </div>
</template>
