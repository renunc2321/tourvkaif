<script setup>
import { NAV_ITEMS } from '@/constants'
import { isPageValid } from '@/validators'
import NavItem from './NavItem.vue'
import authService from '@/services/auth.service'

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  }
})

const emit = defineEmits({
  navigate: isPageValid,
	checkUserLogin: true
})

async function exit() {
  await authService.logout()
  emit('checkUserLogin')
}
</script>

<template>
  <nav>
    <ul class="flex flex-col gap-1 font-medium text-[#888] p-[22px] bg-[#F8F8F8] rounded-2xl">
      <NavItem
        v-for="(text, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'text-black bg-white': currentPage === page }"
        @click="emit('navigate', page)"
      >
        {{ text }}
      </NavItem>
      <li>
        <a class="py-[18px] px-5 rounded-2xl w-[300px] bg-[#F8F8F8] cursor-pointer block text-orange-500"
				@click='exit'>
          Выйти
        </a>
      </li>
    </ul>
  </nav>
</template>