<script setup>
import { ref } from 'vue'
import MobileCardInfo from './MobileCardInfo.vue'
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

const props = defineProps({
  client: {
    required: true,
    type: Object
  }
})

const top = props.client.top
const body = props.client.body
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
        v-if="top.tourType === 'TOUR'"
        :body="body"
        :is-active-info="isActiveInfo"
        @changeInfo="changeInfo"
        :is-active-flight="isActiveFlight"
        @changeFlight="changeFlight"
        :is-active-passenger="isActivePassenger"
        @change-passenger="changePassenger"
      />
      <MobileCardInfo
        v-else
        :tour-type="'HOTEL'"
        :info="body.info"
        :is-active-info="isActiveInfo"
        @change-info="changeInfo"
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
