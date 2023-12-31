<script setup>
import CardInfoList from './CardInfoList.vue'
import MobileCardTitle from './MobileCardTitle.vue'

const emit = defineEmits(['changeInfo'])

const props = defineProps({
  info: {
    required: true,
    type: Object
  },
  isActiveInfo: {
    required: true,
    type: Boolean
  }
})

const infoValue = {
  ['Локация']: props.info.location,
  ['Кол-во ночей']: props.info.numberOfNights,
  ['Номер']: props.info.room,
  ['Питание']: props.info.meals,
  ['Услуги']: props.info.services,
  ['Стоимость']: props.info.price
}
</script>

<template>
  <div class='border-b'>
    <MobileCardTitle :is-active="isActiveInfo" @change="emit('changeInfo')">
      Информация о туре
    </MobileCardTitle>

    <CardInfoList
			class='py-3'
			v-if="isActiveInfo" 
			:info-value="infoValue"
		/>
  </div>
</template>
