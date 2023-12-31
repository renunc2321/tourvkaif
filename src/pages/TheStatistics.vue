<script setup>
import ClientsTourType from '@/components/ClientsTourType.vue'
import StatisticsDayItem from '@/components/StatisticsDayItem.vue'
import StatisticsMonthItem from '@/components/StatisticsMonthItem.vue'
import TheFullStatistics from '@/components/TheFullStatistics.vue'
import { isChangeCategoryValid } from '@/validators'

defineProps({
  selectedType: {
    required: true
  }
})

const emit = defineEmits({
  changeCategory: isChangeCategoryValid
})
</script>

<template>
  <div class="mt-2">
    <p class="font-medium mb-6 md:hidden">Статистика</p>

    <ClientsTourType
      class="md:hidden"
      :selectedType="selectedType"
      @changeCategory="emit('changeCategory', $event)"
    />

    <div class="md:hidden">
      <StatisticsDayItem />

      <StatisticsMonthItem />
    </div>
    <div class="hidden md:block md:mt-[50px]">
      <TheFullStatistics />
    </div>
  </div>
</template>
