<script setup>
import { ref } from 'vue'

const monthFilter = ref('month')

function monthFilterToggle(value) {
  monthFilter.value = value
}
</script>

<template>
  <div class="mt-16 mb-56">
    <p class="font-semibold">Статистика по месяцам</p>
    <div class="flex items-center mt-6 h-[44px] justify-between gap-2">
      <button
        :class="{
          'border-orange-600 border rounded-md text-black': monthFilter === 'Декабрь',
          'border rounded-md border-white text-slate-500': monthFilter !== 'Декабрь'
        }"
        class="font-medium h-[53px] w-full"
        @click="monthFilterToggle('Декабрь')"
      >
        Декабрь
      </button>
      <button
        :class="{
          'border-orange-600 border rounded-md text-black': monthFilter === 'год',
          'border rounded-md border-white text-slate-500': monthFilter !== 'год'
        }"
        class="font-medium h-[53px] w-full"
        @click="monthFilterToggle('год')"
      >
        Весь год
      </button>
      <button
        :class="{
          'border-orange-600 border rounded-md text-black': monthFilter === 'month',
          'border rounded-md border-white text-slate-500': monthFilter !== 'month'
        }"
        class="font-medium h-[53px] w-full"
        @click="monthFilterToggle('month')"
      >
        <p class="text-xs font-normal text-nowrap">Выбрать месяц</p>
        <p class="text-xs font-bold">мм.гггг</p>
      </button>
    </div>

		<div class='flex text-sm font-medium justify-between px-5 mt-4'>
			<p class='text-[#FF8500]'>Прибыль, млн</p>
			<p class='text-[#50D465]'>Продажи</p>
		</div>

    <div>
      <div class="mt-4 flex ">
        <div class="flex">
          <div class="flex flex-col gap-[12px] font-semibold text-xs mr-1">
            <p class="mt-2.5">50</p>
            <p>40</p>
            <p>30</p>
            <p>20</p>
            <p>10</p>
          </div>
          <div class="flex">
            <div class="absolute rounded-t-[90px] ml-[10px] w-[30px] h-[141px] bg-orange-500"></div>
            <div
              class="absolute rounded-t-[90px] mt-[90px] ml-[48px] w-[30px] h-[51px] bg-[#50D465]"
            ></div>

            <div
              class="absolute rounded-t-[90px] ml-[110px] w-[30px] h-[141px] bg-orange-500"
            ></div>
            <div
              class="absolute rounded-t-[90px] mt-[90px] ml-[148px] w-[30px] h-[51px] bg-[#50D465]"
            ></div>

            <div
              class="absolute rounded-t-[90px] ml-[208px] w-[30px] h-[141px] bg-orange-500"
            ></div>
            <div
              class="absolute rounded-t-[90px] mt-[90px] ml-[246px] w-[30px] h-[51px] bg-[#50D465]"
            ></div>

            <div class="w-[3px] bg-gray-400 h-[130px]"></div>
            <div class="flex flex-col">
              <div class="h-[2px] w-[285px] bg-gray-400 mt-[18px]"></div>
              <div class="h-[1.5px] w-[285px] bg-gray-400 mt-[26px]"></div>
              <div class="h-[1.5px] w-[285px] bg-gray-400 mt-[26px]"></div>
              <div class="h-[1.5px] w-[285px] bg-gray-400 mt-[26px]"></div>
              <div class="h-[1.5px] w-[285px] bg-gray-400 mt-[26px]"></div>
            </div>
            <div class="w-[3px] bg-gray-400 h-[130px]"></div>
          </div>
          <div class="flex flex-col gap-[12px] font-semibold text-xs ml-1">
            <p class="mt-2.5">50</p>
            <p>40</p>
            <p>30</p>
            <p>20</p>
            <p>10</p>
          </div>
        </div>
      </div>
      <div
        class="absolute flex items-center justify-center mt-[10px] ml-[45px] text-xs font-semibold"
      >
        <p>01-10</p>
        <p class="ml-[70px]">11-20</p>
        <p class="ml-[70px]">21-31</p>
      </div>
    </div>
  </div>
</template>
