<script setup>
import CardInfoList from './CardInfoList.vue'
import MobileCardTitle from './MobileCardTitle.vue'

const emit = defineEmits(['changeInfo'])

const props = defineProps({
  tourType: {
    required: true,
    type: String
  },
  info: {
    required: true,
    type: Object
  },
  isActiveInfo: {
    required: true,
    type: Boolean
  }
})

const tour = {
  ['Локация']: props.info.location,
  ['Кол-во ночей']: props.info.numberOfNights,
  ['Номер']: props.info.room,
  ['Питание']: props.info.meals,
  ['Услуги']: props.info.services,
  ['Стоимость']: props.info.price
}

const hotel = {
  ['Локация']: props.info.location,
  ['Название']: props.info.name,
  ['Срок прибивания (сут.)']: props.info.numberOfNights,
  ['Тип номера']: props.info.room,
  ['Туроператор']: props.info.tourOperator,
  ['Стоимость']: props.info.price,
  ['Номер']: props.info.hotelRoom,
  ['Услуги']: props.info.services,
  ['Питание']: props.info.meals
}

const [infoValue, type] = props.tourType === 'TOUR' ? [tour, 'Тур'] : [hotel, 'Отеле']
</script>

<template>
  <div class="border-b mt-[32px]">
    <MobileCardTitle :is-active="isActiveInfo" @change="emit('changeInfo')">
      Информация о {{ type }}
    </MobileCardTitle>

    <CardInfoList class="py-3" v-if="isActiveInfo" :info-value="infoValue" />
  </div>
</template>
