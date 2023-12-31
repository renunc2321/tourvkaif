<script setup>
import ClientItemInfoTour from '@/components/ClientItemInfoTour.vue'
import ClientItemTop from '@/components/ClientItemTop.vue'
import { ref } from 'vue'
import ClientItemFlight from './ClientItemFlight.vue'
import ClientItemPassengerInfo from './ClientItemPassengerInfo.vue'
import ClientItemPassportInfo from './ClientItemPassportInfo.vue'
import ClientItemInfo from './ClientItemInfo.vue'

const isActive = ref(true)

function changeActive() {
  isActive.value = !isActive.value
}

const props = defineProps(['client'])

const top = props.client.top
const body = props.client.body
</script>

<template>
  <div class="p-4 bg-[#F8F8F8] rounded-2xl lg:p-6">
    <ClientItemTop :top="top" @changeActive="changeActive" :isActive="isActive" />

    <div class="lg:flex gap-6 justify-between">
      <ClientItemInfoTour v-if="isActive" :info="body.info" />

      <ClientItemFlight v-if="isActive" :flight="body.flight" />

      <ClientItemPassengerInfo v-if="isActive" :passengerInformation="body.passengerInformation" />
    </div>

    <div class="lg:hidden">
      <ClientItemPassportInfo v-if="isActive" :passportDetails="body.passportDetails" />
    </div>
    <div class="hidden lg:block">
      <ClientItemInfo :passportDetails="body.passportDetails" />
    </div>
  </div>
</template>
