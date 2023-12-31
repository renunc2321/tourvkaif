<script setup>
import CardInfoList from './CardInfoList.vue'
import CardTitle from './CardTitle.vue'

const props = defineProps({
  tourType: {
    required: true,
    type: String
  },
  info: {
    required: true,
    type: Object
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

const infoValue = props.tourType === 'TOUR' ? tour : hotel
</script>

<template>
  <div>
    <CardTitle>Информация о туре</CardTitle>
    <CardInfoList class="mt-5" :info-value="infoValue" />
  </div>
</template>
