<script setup>
import { ref } from 'vue'

const props = defineProps(['top', 'isActive'])

const checkBox = ref(false)

function changeCheckbox() {
  checkBox.value = !checkBox.value
}

const emit = defineEmits(['changeActive'])

function change() {
  emit('changeActive')
}

const top = props.top

const type = top.tourType === 'TOUR' ? 'Тур' : top.tourType === 'HOTEL' ? 'Отель' : 'Горящий тур'
</script>

<template>
  <div class="lg:flex">
    <div class="flex grow justify-between items-center">
      <p class="font-semibold lg:text-lg text-[#222]">{{ type }} № {{ top.id }}</p>
      <button class="lg:hidden" @click="change">
        <img
          :class="{ 'rotate-180': isActive, 'rotate-0': !isActive }"
          class="transform transition duration-500 ease-in-out"
          src="@/assets/img/arrow.svg"
          alt="arrow"
        />
      </button>
    </div>

    <div v-if="isActive" class="lg:flex items-center lg:gap-8">
      <div class="flex items-center gap-[6px] mt-[22px] lg:mt-0">
        <button
          :class="{
            'bg-[#FF8500] border-[#FF8500]': checkBox,
            'border-[#666666] bg-transparent': !checkBox
          }"
          class="w-[18px] h-[18px] border-[2px] rounded-sm"
          @click="changeCheckbox"
        >
          <div class="flex">
            <div
              :class="{ 'bg-white': checkBox, 'bg-transparent': !checkBox }"
              class="relative w-0.5 mt-1 h-[7px] left-1 -rotate-45"
            ></div>
            <div
              :class="{ 'bg-white': checkBox, 'bg-transparent': !checkBox }"
              class="relative w-0.5 h-[12px] left-[7.5px] rotate-45"
            ></div>
          </div>
        </button>
        <p @click="changeCheckbox" class="text-lg font-semibold cursor-pointer">Взять в работу</p>
      </div>

      <div v-if="checkBox">
        <select class="p-2 rounded-md text-lg font-semibold text-[#666] bg-white mt-2 lg:mt-0">
          <option value="">Выбрать менеджера</option>
          <option value="">1 менеджер</option>
          <option value="">2 менеджер</option>
        </select>
      </div>

      <div class="mt-[20px] lg:mt-0">
        <button v-if="top.filesAttached.length" class="text-[#50D465] text-lg font-semibold">
          Прикреплено {{ top.filesAttached.length }} файла
        </button>
        <button v-else class="text-[#FF8500] text-lg font-semibold">Загрузить документы</button>
      </div>
    </div>

    <button class="hidden lg:block lg:ml-4" @click="change">
      <img
        :class="{ 'rotate-180': isActive, 'rotate-0': !isActive }"
        class="transform transition duration-500 ease-in-out"
        src="@/assets/img/arrow.svg"
        alt="arrow"
      />
    </button>
  </div>
</template>
