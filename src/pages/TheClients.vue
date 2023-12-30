<script setup>
import AllClientsFilter from '@/components/AllClientsFilter.vue'
import ClientItem from '@/components/ClientItem.vue'
import ClientsTourType from '@/components/ClientsTourType.vue'
import TheClientsFilter from '@/components/TheClientsFilter.vue'
import { FILTER_ALL } from '@/constants'
import { isChangeCategoryValid, isString } from '@/validators'

defineProps({
  activeClientsFilter: {
    required: true,
    type: String
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

    <ClientItem class='md:mt-8' v-for="client in clientsList" :key="client.top.id" :client="client" />
  </div>
</template>
