<script setup>
import { login } from '@/services/auth.service'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const errorState = ref(false)
const errorString = ref('')

const emit = defineEmits(['checkUserLogin'])

async function submit() {
  const user = {
    email: email.value,
    password: password.value
  }

  const response = await login(user)
  if (typeof response === 'string') {
    errorString.value = response
    errorState.value = true
    return
  }
  errorState.value = false
  emit('checkUserLogin')
}
</script>

<template>
  <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
    <div
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-8 px-5 w-[340px] h-[340px] bg-white rounded-xl flex flex-col z-10 items-center justify-between"
    >
      <p class="font-bold text-xl">Войти в кабинет<br />администратора</p>

      <input
        class="p-4 bg-[#F8F8F8] border border-[#E0E0E0] rounded-lg w-full"
        type="email"
        v-model="email"
        placeholder="Электронная почта"
      />
      <input
        class="p-4 bg-[#F8F8F8] border border-[#E0E0E0] rounded-lg w-full"
        type="password"
        v-model="password"
        placeholder="Пароль"
      />
      <div v-if="errorState" class="flex text-sm gap-1 text-[#FF3C3C] w-full">
        <img src="@/assets/img/close-red.svg" />
        <p>{{ errorString }}</p>
      </div>
      <button
        class="p-4 w-full font-medium text-sm text-white bg-[#FF8500] rounded-lg"
        @click="submit"
      >
        Войти
      </button>
    </div>
    <div class="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-0"></div>
  </div>
</template>
