<script setup>
import BaseArrowButton from '../Buttons/BaseArrowButton.vue'
import BaseCheckboxButton from '../Buttons/BaseCheckboxButton.vue'
import BaseDownload from '../Buttons/loading/BaseDownload.vue'
import BaseUpload from '../Buttons/loading/BaseUpload.vue'
import { CARD_TOP_ITEMS } from '@/constants'

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
  },
})

const type = CARD_TOP_ITEMS[props.top.tourType]
const id = props.top.id
const files = props.top.filesAttached.length
</script>

<template>
  <div class="flex grow justify-between items-center">
    <p class="font-semibold text-[#222]">
      {{ type }} № {{ id }}
    </p>
    <BaseArrowButton :is-active="isActiveTop" @click="emit('changeTop')" />
  </div>

  <div v-if="isActiveTop">
    <div class="flex items-center gap-[6px] mt-[22px]">
      <BaseCheckboxButton :is-active="isActiveGetWork" @click="emit('changeGetWork')" />
      <p class="text-lg font-semibold cursor-pointer" @click="emit('changeGetWork')">
        Взять в работу
      </p>
    </div>

    <div v-if="isActiveGetWork">
      <select class="font-semibold bg-white mt-2 p-2 rounded-md text-lg text-[#666]">
        <option value="">Выбрать менеджера</option>
        <option value="">1 менеджер</option>
        <option value="">2 менеджер</option>
      </select>
    </div>

    <div class="mt-[20px]">
      <BaseDownload v-if="files" :count="files" />
      <BaseUpload v-else />
    </div>
  </div>
</template>
