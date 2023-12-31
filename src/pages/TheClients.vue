<script setup>
import AllClientsFilter from '@/components/AllClientsFilter.vue'
import ClientsTourType from '@/components/ClientsTourType.vue'
import Card from '@/components/OrderCards/Card.vue'
import MobileCard from '@/components/OrderCards/MobileCard.vue'
import TheClientsFilter from '@/components/TheClientsFilter.vue'
import { FILTER_ALL } from '@/constants'
import { isChangeCategoryValid, isString } from '@/validators'

defineProps({
  activeClientsFilter: {
    required: true,
    type: String
  },
  windowWidth: {
    required: true,
    type: Number
  },
  selectedType: {
    required: true
  },
  clientsList: {
    required: true
  }
})

const emit = defineEmits({
  clientsFilter: isString,
  changeCategory: isChangeCategoryValid
})
</script>

<template>
  <div class="mt-2 md:mt-[50px]">
    <p class="font-medium mb-6 md:hidden">Клиенты</p>
    <div class="md:flex">
      <TheClientsFilter
        :activeFilter="activeClientsFilter"
        @filter="emit('clientsFilter', $event)"
      />

      <AllClientsFilter v-if="activeClientsFilter === FILTER_ALL" />
    </div>

    <ClientsTourType
      class="mt-6 mb-8 md:hidden"
      :selectedType="selectedType"
      @changeCategory="emit('changeCategory', $event)"
    />
    <div>
      <div v-if="windowWidth <= 768">
        <MobileCard
          class="mb-6"
          v-for="client in clientsList"
          :key="client.top.id"
          :client="client"
        />
      </div>
      <div else>
        <Card 
          class="mb-6 mt-8"
          v-for="client in clientsList"
          :key="client.top.id"
          :client="client"
        />
      </div>
    </div>
  </div>
</template>
