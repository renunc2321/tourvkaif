<script setup>
import { ref } from 'vue'
import MobileCardInfoPassenger from './MobileCardInfoPassenger.vue'
import MobileCardPassport from './MobileCardPassport.vue'
import MobileCardTop from './MobileCardTop.vue'
import MobileCardTourBody from './MobileCardTourBody.vue'

const isActiveTop = ref(true)
const isActiveGetWork = ref(false)
const isActiveInfo = ref(true)
const isActiveFlight = ref(true)
const isActivePassenger = ref(true)
const isActivePassport = ref(true)
const top = {
  tourType: 'TOUR',
  id: 17,
  filesAttached: [1, 2]
}
const body = {
  info: {
    location: 'Пример местоположения',
    numberOfNights: 7,
    room: 'standard',
    meals: 'RO',
    services: 'Пример услуг',
    price: 12345.67
  },
  flight: {
    departureDate: '2023-12-25',
    time: '01:10 05:30',
    type: 'прямой',
    departureLocation: 'Москва, Шереметьево',
    landingLocation: 'Анталия, Турция',
    airline: 'PEGAS'
  },
  passengerInformation: {
    fullName: 'БОЙКО АЛЕКСАНДР ВЯЧЕСЛАВОВИЧ',
    phone: '79097844501',
    dateOfBirth: 'Пример даты рождения',
    mail: 'boiko.erizoo@gmail.com'
  },
  passportDetails: {
    firstName: 'Имя',
    surName: 'Фамилия',
    passportNumber: 'Номер паспорта',
    issuedBy: 'Кем выдан',
    dateOfIssue: 'Дата выдачи',
    validUntil: 'Срок действия'
  }
}
function changeTop() {
  isActiveTop.value = !isActiveTop.value
}

function changeGetWork() {
  isActiveGetWork.value = !isActiveGetWork.value
}

function changeInfo() {
  isActiveInfo.value = !isActiveInfo.value
}

function changeFlight() {
  isActiveFlight.value = !isActiveFlight.value
}

function changePassenger() {
  isActivePassenger.value = !isActivePassenger.value
}
function changePassport() {
  isActivePassport.value = !isActivePassport.value
}
</script>

<template>
  <div
    :class="{
      'bg-[#F8F8F8]': top.tourType === 'TOUR',
      'bg-[#FFEEDB]': top.tourType === 'HOT_TOUR',
      'bg-[#E9FFED]': top.tourType === 'HOTEL'
    }"
    class="p-4 rounded-2xl"
  >
    <MobileCardTop
      :top="top"
      :is-active-top="isActiveTop"
      :is-active-get-work="isActiveGetWork"
      @change-top="changeTop"
      @change-get-work="changeGetWork"
    />

    <div v-if="isActiveTop">
      <MobileCardTourBody
        :body="body"
        :is-active-info="isActiveInfo"
        @changeInfo="changeInfo"
        :is-active-flight="isActiveFlight"
        @changeFlight="changeFlight"
        :is-active-passenger="isActivePassenger"
        @change-passenger="changePassenger"
      />

      <MobileCardInfoPassenger
        :passenger="body.passengerInformation"
        :is-active-passenger="isActivePassenger"
        @change-passenger="changePassenger"
      />
      <MobileCardPassport
        :passport="body.passportDetails"
        :is-active-passport="isActivePassport"
        @change-passport="changePassport"
      />
    </div>
  </div>
</template>
