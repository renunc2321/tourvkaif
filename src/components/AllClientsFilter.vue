<template>
  <div class="md:flex items-center">
    <div class="flex items-center mt-8 md:mt-0">
      <p class="min-w-20 text-sm font-medium md:text-base">Поиск по:</p>
      <select class="w-full pl-4 rounded-lg bg-[#F8F8F8] h-[44px] lg:w-[139px]">
        <option value="">ФИО</option>
        <option value="">EMAIL</option>
      </select>
    </div>
    <div class="mt-3 md:mt-0 md:ml-3 lg:ml-[29px]">
      <input
        class="bg-[#F8F8F8] w-full rounded-lg h-[42px] p-3 lg:w-[252px] lg:p-[14px]"
        type="text"
        placeholder="Поиск"
      />
    </div>
    <div
      class="flex p-3 grow bg-[#F8F8F8] rounded-lg mt-6 items-center font-medium leading-tight justify-between md:hidden"
    >
      <p>Отправить сообщение всем пользователям</p>
      <div class="cursor-pointer p-4">
        <img class="w-[16px]" src="../assets/img/arrow.svg" alt="Arrow" />
      </div>
    </div>
  </div>
</template>
