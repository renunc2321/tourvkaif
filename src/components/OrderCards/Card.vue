
<script setup>
import { ref } from 'vue'
import CardPassport from './CardPassport.vue'
import CardTop from './CardTop.vue'
import CardTourBody from './CardTourBody.vue'

const isActiveTop = ref(true)
const isActiveGetWork = ref(false)

function changeTop() {
  isActiveTop.value = !isActiveTop.value
}

function changeGetWork() {
  isActiveGetWork.value = !isActiveGetWork.value
}

const props = defineProps({
  client: {
    required: true,
    type: Object
  }
})

const top = props.client.top
const body = props.client.body
const passport = props.client.body.passportDetails
</script>

<template>
  <div
    :class="{
      'bg-[#F8F8F8]': top.tourType === 'TOUR',
      'bg-[#FFEEDB]': top.tourType === 'HOT_TOUR',
      'bg-[#E9FFED]': top.tourType === 'HOTEL'
    }"
    class="p-6 rounded-2xl"
  >
    <CardTop
      :top="top"
      :is-active-top="isActiveTop"
      :is-active-get-work="isActiveGetWork"
      @change-top="changeTop"
      @change-get-work="changeGetWork"
    />

    <div v-if="isActiveTop">
      <CardTourBody class="mt-6" :tour-type="top.tourType" :body="body" />
      <CardPassport class='mt-6' :passport="passport" />
    </div>
  </div>
</template>
