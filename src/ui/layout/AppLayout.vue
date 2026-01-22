<template>
  <div class="app-shell flex">
    <AppSidebar class="hidden md:flex" />

    <div class="flex-1 flex flex-column min-w-0">
      <AppTopbar />

      <main class="app-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from './AppSidebar.vue'
import AppTopbar from './AppTopbar.vue'
</script>

