q
<script setup>
import CardInfoList from './CardInfoList.vue'
import CardTitle from './CardTitle.vue'

const props = defineProps({
  passport: {
    required: true,
    type: Object
  }
})

const passportValue1 = {
  ['Имя (лат.)']: props.passport.firstName,
  ['Фамилия (лат.)']: props.passport.surName
}

const passportValue2 = {
  ['Серия/ Номер паспорта']: props.passport.passportNumber,
  ['Кем выдан']: props.passport.issuedBy
}

const passportValue3 = {
  ['Дата выдачи']: props.passport.dateOfIssue,
  ['Действует до']: props.passport.validUntil
}
</script>

<template>
  <div>
    <CardTitle>Паспортные данные (пассажир 1)</CardTitle>

    <div class="flex justify-between mt-5">
      <CardInfoList class='w-[318px]' :info-value="passportValue1" />
      <CardInfoList class='w-[318px]' :info-value="passportValue2" />
      <CardInfoList class='w-[318px]' :info-value="passportValue3" />
    </div>
  </div>
</template>
