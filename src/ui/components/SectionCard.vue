<template>
  <Card class="w-full">
    <template #title>
      <div class="text-lg md:text-xl font-semibold">{{ title }}</div>
    </template>
    <template #content>
      <slot />
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card'

defineProps<{ title: string }>()
</script>

