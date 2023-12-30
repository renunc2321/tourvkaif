<script setup>
import { CHECKBOX_ITEMS } from '@/constants'
import { isChangeCategoryValid } from '@/validators'

const props = defineProps({
  selectedType: {
    required: true
  }
})

const emit = defineEmits({
  changeCategory: isChangeCategoryValid
})

function change(value) {
	if (props.selectedType === value) {
		emit('changeCategory', null)
		return
	}
	emit('changeCategory', value)
}
</script>

<template>
  <div class='md:p-5 md:rounded-2xl md:bg-[#F8F8F8] md:w-[340px]'>
    <p class="font-medium md:hidden">Показать только:</p>
    <div class="flex gap-[80px] mt-4 md:flex-col md:gap-[20px] md:mt-0">
      <div v-for="(text, value) in CHECKBOX_ITEMS" :key="value" class="flex justify-between w-full md:w-[300px]">
        <p class="capitalize font-medium md:text-base md:normal-case">
          <span class='hidden md:inline'>Показать только </span>{{ text }}
        </p>
        <div
          @click="change(value)"
          class="cursor-pointer py-0.5 px-3.5 bg-neutral-200 rounded-3xl transition duration-500"
          :class="{ 'bg-orange-400': selectedType === value }"
        >
          <div
            :class="{ 'translate-x-6 ': selectedType === value }"
            class="relative p-2.5 bg-white rounded-full right-3 transition duration-500 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
