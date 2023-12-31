<script setup>
import CardInfoList from './CardInfoList.vue'
import MobileCardTitle from './MobileCardTitle.vue'

const emit = defineEmits(['changePassport'])

const props = defineProps({
  passport: {
    required: true,
    type: Object
  },
  isActivePassport: {
    required: true,
    type: Boolean
  }
})

const passportValue = {
  ['Имя (лат.)']: props.passport.firstName,
  ['Фамилия (лат.)']: props.passport.surName,
  ['Серия/ Номер паспорта']: props.passport.passportNumber,
  ['Кем выдан']: props.passport.issuedBy,
  ['Дата выдачи']: props.passport.dateOfIssue,
  ['Действует до']: props.passport.validUntil
}
</script>

<template>
  <div class="border-b">
    <MobileCardTitle :is-active="isActivePassport" @change="emit('changePassport')">
      Паспортные данные (пассажир 1)
    </MobileCardTitle>

    <CardInfoList class="py-3" v-if="isActivePassport" :info-value="passportValue" />
  </div>
</template>
