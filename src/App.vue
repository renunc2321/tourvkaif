<script setup>
import ClientsTourType from '@/components/ClientsTourType.vue'
import TheFooter from '@/components/Layouts/TheFooter.vue'
import TheHeader from '@/components/Layouts/TheHeader.vue'
import LoginPopup from '@/components/Popups/LoginPopup.vue'
import { normalizePageHash } from '@/functions'
import TheClients from '@/pages/TheClients.vue'
import TheStatistics from '@/pages/TheStatistics.vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import TheNav from './components/TheNav.vue'
import { FILTER_NEW, PAGE_CLIENTS, PAGE_STATISTICS } from './constants'
import { getClients } from '@/services/admin.service'

const currentPage = ref(normalizePageHash())
const activeClientsFilter = ref(FILTER_NEW)
const selectedType = ref(null)
const isStateLoginPopup = ref(true)
const clientsList = ref([])

const windowWidth = ref(window.innerWidth)

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})

watch(activeClientsFilter, async () => {
  getAll()
})

onMounted(async () => {
  getAll()
})

async function getAll() {
  if (isStateLoginPopup.value) {
    return
  }

  try {
    const res = await getClients()
    clientsList.value = res.data
  } catch (error) {
    console.log(error)
  }
}

function goTo(page) {
  currentPage.value = page
}

function clientsFilter(value) {
  activeClientsFilter.value = value
}

function changeCategory(value) {
  selectedType.value = value
}

function checkUserLogin() {
  let user = JSON.parse(localStorage.getItem('user'))
  if (user && user.access_token) {
    isStateLoginPopup.value = false
    getAll()
  } else {
    isStateLoginPopup.value = true
  }
}
checkUserLogin()
</script>

<template>
  <TheHeader
    :window-width="windowWidth"
    :current-page="currentPage"
    v-on:navigate="goTo($event)"
    @checkUserLogin="checkUserLogin"
  />

  <main class="mt-8 px-4 md:mt-[50px]">
    <h2 class="font-bold text-3xl md:text-[44px]">Кабинет администратора</h2>

    <div class="lg:flex gap-6">
      <div class="hidden gap-5 mt-10 lg:mt-[50px] md:flex lg:flex-col">
        <TheNav
          :current-page="currentPage"
          v-on:navigate="goTo($event)"
          @checkUserLogin="checkUserLogin"
        />

        <ClientsTourType
          class="h-[108px]"
          :selectedType="selectedType"
          @changeCategory="changeCategory"
        />
      </div>

      <div class="w-full">
        <TheClients
          v-show="currentPage === PAGE_CLIENTS"
          :active-clients-filter="activeClientsFilter"
          @clients-filter="clientsFilter"
          :selected-type="selectedType"
          @change-category="changeCategory"
          :clients-list="clientsList"
        />
        <TheStatistics
          v-show="currentPage === PAGE_STATISTICS"
          :selected-type="selectedType"
          @change-category="changeCategory"
        />
      </div>
    </div>
  </main>
  <TheFooter class="hidden md:block" />

  <LoginPopup v-if="isStateLoginPopup" @checkUserLogin="checkUserLogin" />
</template>
