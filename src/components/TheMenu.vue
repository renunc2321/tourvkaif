<script setup>
import { NAV_ITEMS } from '@/constants'
import { logout } from '@/services/auth.service'
import { isPageValid } from '@/validators'

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  },
  isMenuVisible: {
    required: true,
    type: Boolean
  }
})

const emit = defineEmits({
  navigate: isPageValid,
  check: true,
  toggleMenu: true
})

function click(page) {
  emit('toggleMenu')
  emit('navigate', page)
}

async function exit() {
  emit('toggleMenu')
  await logout()
  emit('check')
}
</script>

<template>
  <div
    class="absolute w-[213px] top-[60px] right-[17px] flex flex-col bg-[#F8F8F8] border text-[#888] border-[#FFEEDB] rounded-md font-medium"
    :class="{ block: isMenuVisible, hidden: !isMenuVisible }"
  >
    <a
      v-for="(text, page) in NAV_ITEMS"
      :key="page"
      :href="`#${page}`"
      :class="{ 'text-black bg-white': currentPage === page }"
      class="px-[20px] py-[12px] rounded-md capitalize"
      @click="click(page)"
    >
      {{ text }}
    </a>
    <a @click="emit('toggleMenu')" class="px-[20px] py-[12px] rounded-md"> Сменить пароль </a>
    <a class="px-[20px] py-[12px] cursor-pointer rounded-md text-[#FF8500]" @click="exit">
      Выйти
    </a>
  </div>
</template>
