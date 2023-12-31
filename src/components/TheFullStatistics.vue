<script setup>
import { ref } from 'vue'

const currentPage = ref('вчера')
const setCurrentPage = (page) => {
  currentPage.value = page
}
const currentPage2 = ref('месяц')
const setCurrentPage2 = (page) => {
  currentPage2.value = page
}
</script>
<template>
  <div>
    <p class="text-lg font-semibold">Статистика по дням (7 дней)</p>
    <div class="flex items-center mt-6">
      <button
        :class="{
          'border-orange-600 border rounded-md text-black': currentPage === 'вчера',
          'border rounded-md border-white text-slate-500': currentPage !== 'вчера'
        }"
        class="font-semibold py-3 px-14 mr-4"
        @click="setCurrentPage('вчера')"
      >
        Вчера
      </button>
      <button
        :class="{
          'border-orange-600 border rounded-md text-black': currentPage === 'сегодня',
          'border rounded-md border-white text-slate-500': currentPage !== 'сегодня'
        }"
        class="font-semibold py-3 px-14 mr-4"
        @click="setCurrentPage('сегодня')"
      >
        Сегодня
      </button>
      <button
        :class="{
          'border-orange-600 border rounded-md text-black': currentPage === 'день',
          'border rounded-md border-white text-slate-500': currentPage !== 'день'
        }"
        class="font-semibold py-2 px-14 mr-4"
        @click="setCurrentPage('день')"
      >
        <p class="text-xs font-normal">Выбрать день</p>
        <p class="text-xs font-bold">дд.мм.гггг</p>
      </button>
    </div>
    <div>
      <div class="mt-7 flex">
        <div class="mt-[310px] text-center font-medium text-orange-500">
          <p>Выручка,<br />млн</p>
        </div>
        <div class="flex">
          <div class="flex flex-col gap-[46px] font-semibold text-xs mr-3">
            <p class="mt-2.5">5</p>
            <p>4</p>
            <p>3</p>
            <p>2</p>
            <p>1</p>
          </div>
          <div class="flex">
            <div class="absolute rounded-t-[90px] ml-[12px] w-[42px] h-[310px] bg-orange-500"></div>
            <div
              class="absolute rounded-t-[90px] mt-[90px] ml-[62px] w-[42px] h-[220px] bg-[#50D465]"
            ></div>

            <div
              class="absolute rounded-t-[90px] mt-[200px] ml-[136px] w-[42px] h-[110px] bg-orange-500"
            ></div>
            <div
              class="absolute rounded-t-[90px] mt-[30px] ml-[186px] w-[42px] h-[280px] bg-[#50D465]"
            ></div>

            <div
              class="absolute rounded-t-[90px] mt-[10px] ml-[260px] w-[42px] h-[300px] bg-orange-500"
            ></div>
            <div
              class="absolute rounded-t-[90px] mt-[110px] ml-[310px] w-[42px] h-[200px] bg-[#50D465]"
            ></div>

            <div
              class="absolute rounded-t-[90px] mt-[140px] ml-[384px] w-[42px] h-[170px] bg-orange-500"
            ></div>
            <div
              class="absolute rounded-t-[90px] mt-[60px] ml-[434px] w-[42px] h-[250px] bg-[#50D465]"
            ></div>

            <div
              class="absolute rounded-t-[90px] mt-[200px] ml-[508px] w-[42px] h-[110px] bg-orange-500"
            ></div>
            <div
              class="absolute rounded-t-[90px] mt-[240px] ml-[558px] w-[42px] h-[70px] bg-[#50D465]"
            ></div>

            <div
              class="absolute rounded-t-[90px] mt-[280px] ml-[632px] w-[42px] h-[30px] bg-orange-500"
            ></div>
            <div
              class="absolute rounded-t-[90px] mt-[0px] ml-[682px] w-[42px] h-[310px] bg-[#50D465]"
            ></div>

            <div
              class="absolute rounded-t-[90px] mt-[130px] ml-[756px] w-[42px] h-[180px] bg-orange-500"
            ></div>
            <div
              class="absolute rounded-t-[90px] mt-[120px] ml-[806px] w-[42px] h-[190px] bg-[#50D465]"
            ></div>

            <div class="w-[3px] bg-gray-400 h-[310px]"></div>
            <div class="flex flex-col">
              <div class="h-[2px] w-[882px] bg-gray-400 mt-[18px]"></div>
              <div class="h-[1.5px] w-[882px] bg-gray-400 mt-[60px]"></div>
              <div class="h-[1.5px] w-[882px] bg-gray-400 mt-[60px]"></div>
              <div class="h-[1.5px] w-[882px] bg-gray-400 mt-[60px]"></div>
              <div class="h-[1.5px] w-[882px] bg-gray-400 mt-[60px]"></div>
            </div>
            <div class="w-[3px] bg-gray-400 h-[310px]"></div>
          </div>
          <div class="flex flex-col gap-[46px] font-semibold text-xs ml-3">
            <p class="mt-2.5">50</p>
            <p>40</p>
            <p>30</p>
            <p>20</p>
            <p>10</p>
          </div>
        </div>
        <div class="mt-[310px] text-center font-medium text-[#50D465]">Продажи</div>
      </div>
      <div
        class="absolute flex items-center justify-center mt-[-35px] ml-[135px] text-xs font-semibold"
      >
        <p>7.12</p>
        <p class="ml-[105px]">8.12</p>
        <p class="ml-[100px]">9.12</p>
        <p class="ml-[100px]">10.12</p>
        <p class="ml-[100px]">11.12</p>
        <p class="ml-[100px]">12.12</p>
        <p class="ml-[100px]">13.12</p>
      </div>
    </div>
    <p class="text-lg font-semibold mt-28">Статистика по месяцам</p>

    <div class="flex items-center mt-6">
      <button
        :class="{
          'border-orange-600 border rounded-md text-black': currentPage2 === 'декабрь',
          'border rounded-md border-white text-slate-500': currentPage2 !== 'декабрь'
        }"
        class="font-semibold py-3 px-14 mr-4"
        @click="setCurrentPage2('декабрь')"
      >
        Декабрь
      </button>
      <button
        :class="{
          'border-orange-600 border rounded-md text-black': currentPage2 === 'январь',
          'border rounded-md border-white text-slate-500': currentPage2 !== 'январь'
        }"
        class="font-semibold py-3 px-14 mr-4"
        @click="setCurrentPage2('январь')"
      >
        январь
      </button>
      <button
        :class="{
          'border-orange-600 border rounded-md text-black': currentPage2 === 'месяц',
          'border rounded-md border-white text-slate-500': currentPage2 !== 'месяц'
        }"
        class="font-semibold py-2 px-14 mr-4"
        @click="setCurrentPage2('месяц')"
      >
        <p class="text-xs font-normal">Выбрать месяц</p>
        <p class="text-xs font-bold">мм.гггг</p>
      </button>
      <button
        :class="{
          'border-orange-600 border rounded-md text-black': currentPage2 === 'год',
          'border rounded-md border-white text-slate-500': currentPage2 !== 'год'
        }"
        class="font-semibold py-3 px-14 mr-4"
        @click="setCurrentPage2('год')"
      >
        За весь год
      </button>
    </div>
    <div>
      <div class="mt-7 flex">
        <div class="mt-[310px] text-center font-medium text-orange-500">
          <p>Выручка,<br />млн</p>
        </div>
        <div class="flex">
          <div class="flex flex-col gap-[46px] font-semibold text-xs mr-3">
            <p class="mt-2.5">5</p>
            <p>4</p>
            <p>3</p>
            <p>2</p>
            <p>1</p>
          </div>
          <div class="flex">
            <div class="absolute rounded-t-[90px] ml-[12px] w-[42px] h-[310px] bg-orange-500"></div>
            <div
              class="absolute rounded-t-[90px] mt-[90px] ml-[62px] w-[42px] h-[220px] bg-[#50D465]"
            ></div>

            <div
              class="absolute rounded-t-[90px] mt-[200px] ml-[136px] w-[42px] h-[110px] bg-orange-500"
            ></div>
            <div
              class="absolute rounded-t-[90px] mt-[30px] ml-[186px] w-[42px] h-[280px] bg-[#50D465]"
            ></div>

            <div
              class="absolute rounded-t-[90px] mt-[10px] ml-[260px] w-[42px] h-[300px] bg-orange-500"
            ></div>
            <div
              class="absolute rounded-t-[90px] mt-[110px] ml-[310px] w-[42px] h-[200px] bg-[#50D465]"
            ></div>

            <div
              class="absolute rounded-t-[90px] mt-[140px] ml-[384px] w-[42px] h-[170px] bg-orange-500"
            ></div>
            <div
              class="absolute rounded-t-[90px] mt-[60px] ml-[434px] w-[42px] h-[250px] bg-[#50D465]"
            ></div>

            <div
              class="absolute rounded-t-[90px] mt-[200px] ml-[508px] w-[42px] h-[110px] bg-orange-500"
            ></div>
            <div
              class="absolute rounded-t-[90px] mt-[240px] ml-[558px] w-[42px] h-[70px] bg-[#50D465]"
            ></div>

            <div class="w-[3px] bg-gray-400 h-[310px]"></div>
            <div class="flex flex-col">
              <div class="h-[2px] w-[612px] bg-gray-400 mt-[18px]"></div>
              <div class="h-[1.5px] w-[612px] bg-gray-400 mt-[60px]"></div>
              <div class="h-[1.5px] w-[612px] bg-gray-400 mt-[60px]"></div>
              <div class="h-[1.5px] w-[612px] bg-gray-400 mt-[60px]"></div>
              <div class="h-[1.5px] w-[612px] bg-gray-400 mt-[60px]"></div>
            </div>
            <div class="w-[3px] bg-gray-400 h-[310px]"></div>
          </div>
          <div class="flex flex-col gap-[46px] font-semibold text-xs ml-3">
            <p class="mt-2.5">50</p>
            <p>40</p>
            <p>30</p>
            <p>20</p>
            <p>10</p>
          </div>
        </div>
        <div class="mt-[310px] text-center font-medium text-[#50D465]">Продажи</div>
      </div>
      <div
        class="absolute flex items-center justify-center mt-[-35px] ml-[135px] text-xs font-semibold"
      >
        <p>7.12</p>
        <p class="ml-[105px]">8.12</p>
        <p class="ml-[105px]">9.12</p>
        <p class="ml-[103px]">10.12</p>
        <p class="ml-[100px]">11.12</p>
      </div>
    </div>
  </div>
</template>
