<template>
  <aside
    class="surface-card border-right-1 border-200 flex flex-column"
    style="width: 260px; min-width: 260px; height: 100vh; position: sticky; top: 0"
  >
    <div class="p-3 flex align-items-center gap-2 border-bottom-1 border-200">
      <div
        class="flex align-items-center justify-content-center border-circle surface-0 border-1 border-200"
        style="width: 40px; height: 40px"
      >
        <i class="pi pi-building text-900" />
      </div>
      <div class="min-w-0">
        <div class="font-semibold text-900 truncate">CONSTRUCTION ERP</div>
        <div class="text-500 text-sm truncate">Maarakennus</div>
      </div>
    </div>

    <nav class="p-2 flex-1">
      <RouterLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        class="flex align-items-center gap-2 p-2 border-round text-700 no-underline"
        :class="{ 'surface-100 text-900': route.path === item.to }"
      >
        <i :class="item.icon" />
        <span class="font-medium">{{ item.label }}</span>
      </RouterLink>
    </nav>

    <div class="p-3 border-top-1 border-200 text-sm text-500">
      <div class="truncate">Demo — ei backend-logiikkaa</div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

type NavItem = { label: string; icon: string; to: string }

const route = useRoute()
const items = computed<NavItem[]>(() => [
  { label: 'Tilaukset', icon: 'pi pi-file', to: '/tilaukset/yhteenveto' },
  { label: 'Asiakkaat', icon: 'pi pi-users', to: '/asiakkaat/muokkaa' },
  { label: 'Laskut', icon: 'pi pi-receipt', to: '/laskut/ostolasku' }
])
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
</style>

