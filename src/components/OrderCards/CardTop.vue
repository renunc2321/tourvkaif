<script setup>
import { CARD_TOP_ITEMS } from '@/constants'
import BaseArrowButton from '../Buttons/BaseArrowButton.vue'
import BaseCheckboxButton from '../Buttons/BaseCheckboxButton.vue'
import BaseDownload from '../Buttons/loading/BaseDownload.vue'
import BaseUpload from '../Buttons/loading/BaseUpload.vue'

const emit = defineEmits(['changeTop', 'changeGetWork'])

const props = defineProps({
  top: {
    required: true,
    type: Object
  },
  isActiveTop: {
    required: true,
    type: Boolean
  },
  isActiveGetWork: {
    required: true,
    type: Boolean
  }
})

const type = CARD_TOP_ITEMS[props.top.tourType]
const id = props.top.id
const files = props.top.filesAttached.length
</script>

<template>
  <div class="flex grow justify-between items-center h-[28px]">
    <p class="font-semibold text-[#222]">{{ type }} № {{ id }}</p>
    <div class='flex gap-8'>
      <div v-if="isActiveTop" class="flex gap-4 items-center">
        <div class="flex items-center gap-[6px]">
          <BaseCheckboxButton :is-active="isActiveGetWork" @click="emit('changeGetWork')" />

          <p class="text-lg font-semibold cursor-pointer" @click="emit('changeGetWork')">
            Взять в работу
          </p>

          <div v-if="isActiveGetWork">
            <select class="font-semibold bg-white p-2 rounded-md text-lg text-[#666]">
              <option value="">Выбрать менеджера</option>
              <option value="">1 менеджер</option>
              <option value="">2 менеджер</option>
            </select>
          </div>
        </div>

        <div>
          <BaseDownload v-if="files" :count="files" />
          <BaseUpload v-else />
        </div>
      </div>

      <BaseArrowButton :is-active="isActiveTop" @click="emit('changeTop')" />
    </div>
  </div>
</template>
