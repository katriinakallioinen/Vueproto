<template>
  <div
    class="surface-card border-1 border-200 border-round p-2 md:p-3 flex flex-column md:flex-row md:align-items-center md:justify-content-between gap-2"
  >
    <div class="flex flex-wrap gap-2">
      <Button label="Tallenna muutokset" icon="pi pi-save" severity="success" />
      <Button label="Asiatarkasta" icon="pi pi-check" severity="secondary" outlined />
      <Button label="Hyväksy" icon="pi pi-verified" severity="secondary" outlined />
      <Button label="Siirrä laskutukseen" icon="pi pi-arrow-right" severity="secondary" outlined />
      <Button label="Kommentit" icon="pi pi-comment" severity="secondary" outlined />
    </div>

    <div class="flex justify-content-end">
      <Button :label="dangerLabel" icon="pi pi-trash" severity="secondary" outlined />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'

defineProps<{ dangerLabel: string }>()
</script>

