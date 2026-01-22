<template>
  <div class="flex flex-column gap-1">
    <div class="text-500 text-sm">{{ label }}</div>
    <div class="text-900 font-medium">{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string; value: string }>()
</script>

