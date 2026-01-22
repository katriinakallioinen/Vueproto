<template>
  <header class="surface-ground border-bottom-1 border-200">
    <div class="px-3 py-3 md:px-5 flex align-items-center justify-content-between gap-3">
      <div class="flex align-items-center gap-2 min-w-0">
        <i class="pi pi-home text-500 hidden md:inline" />
        <div class="min-w-0">
          <div class="text-xl md:text-2xl font-semibold text-900 truncate">
            {{ pageTitle }}
          </div>
          <div class="text-500 text-sm truncate">
            Asiakkaat <span class="mx-2">›</span> Aallon Helsinki Oy
          </div>
        </div>
      </div>

      <div class="flex align-items-center gap-2">
        <span class="p-input-icon-left hidden sm:inline-flex">
          <i class="pi pi-search" />
          <InputText v-model="search" placeholder="Hae" class="w-12rem md:w-18rem" />
        </span>
        <div class="flex align-items-center gap-2">
          <i class="pi pi-user text-500" />
          <span class="font-medium text-700 hidden md:inline">Anna Asikkala</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import InputText from 'primevue/inputtext'

const search = ref('')
const route = useRoute()

const pageTitle = computed(() => {
  const p = route.path
  if (p.startsWith('/laskut')) return 'Ostolasku - Soratoimitus Oy'
  if (p.startsWith('/asiakkaat')) return 'Muokkaa asiakas'
  if (p.startsWith('/tilaukset')) return 'Tilaus - Autohuiput Oy'
  return 'Maarakennus'
})
</script>

