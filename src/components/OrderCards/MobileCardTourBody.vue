<script setup>
import MobileCardFlight from './MobileCardFlight.vue'
import MobileCardInfo from './MobileCardInfo.vue'

const emit = defineEmits(['changeInfo', 'changeFlight', 'changePassenger'])

const props = defineProps({
  body: {
    required: true,
    type: Object
  },
  isActiveInfo: {
    required: true,
    type: Boolean
  },
  isActiveFlight: {
    required: true,
    type: Boolean
  }
})

const info = props.body.info
const flight = props.body.flight
</script>

<template>
  <div>
    <MobileCardInfo
			:tour-type="'TOUR'"
      :info="info"
      :is-active-info="isActiveInfo"
      @changeInfo="emit('changeInfo')"
    />
    <MobileCardFlight
      :flight="flight"
      :is-active-flight="isActiveFlight"
      @changeFlight="emit('changeFlight')"
    />
  </div>
</template>
