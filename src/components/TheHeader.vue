<script setup>
import TheLogo from '@/components/TheLogo.vue'
import TheMenu from '@/components/TheMenu.vue'
import TheMenuButton from '@/components/TheMenuButton.vue'
import { isPageValid } from '@/validators'
import { ref } from 'vue'

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  },
  windowWidth: {
    required: true
  }
})

const emit = defineEmits({
  navigate: isPageValid,
  checkUserLogin: true
})

const isMenuVisible = ref(false)

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}

function check() {
  emit('checkUserLogin')
}

</script>

<template>
  <header class="flex items-center h-[82px] md:h-[110px] bg-[#F8F8F8]">
    <div class="flex items-center justify-between grow px-4">
      <div class="flex items-center md:gap-8 lg:gap-[106px]">
        <TheLogo />
        <div class="hidden md:flex text-sm md:gap-5 lg:gap-[38px]">
          <p class="text-[#888]">Кабинет администратора</p>
          <a class="text-[#222] cursor-pointer"> Сменить пароль </a>
        </div>
      </div>

      <div class='hidden md:flex items-center gap-[15px]'>
        <div class='text-end text-[#222] text-xs'>
          <p>Кабинет администратора</p>
          <p class='text-sm font-semibold'>John Dow</p>
        </div>
        <img src="@/assets/img/avatar.png" alt="Avatar">
      </div>

      <TheMenuButton
        v-if="windowWidth <= 768"
        :is-menu-visible="isMenuVisible"
        @click="toggleMenu"
      />
    </div>

    <TheMenu
      v-if="windowWidth <= 768"
      :current-page="currentPage"
      :is-menu-visible="isMenuVisible"
      @navigate="emit('navigate', $event)"
      @check="check"
    />
  </header>
</template>
