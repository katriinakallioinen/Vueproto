<template>
  <div class="flex flex-column gap-3">
    <div class="text-900 font-semibold">Kalusto</div>

    <div class="surface-card border-1 border-200 border-round p-3 overflow-auto">
      <div class="min-w-max">
        <div class="grid align-items-center text-500 text-sm mb-2" style="grid-template-columns: 180px 1fr">
          <div></div>
          <div class="flex gap-3">
            <div
              v-for="w in weeks"
              :key="w"
              class="text-center"
              style="width: 72px"
            >
              Viikko {{ w }}
            </div>
          </div>
        </div>

        <div
          v-for="row in timeline"
          :key="row.equipmentName"
          class="grid align-items-center mb-2"
          style="grid-template-columns: 180px 1fr"
        >
          <div class="text-900 font-medium pr-3">{{ row.equipmentName }}</div>
          <div class="flex gap-3">
            <div
              v-for="w in weeks"
              :key="w"
              class="border-round"
              :class="isActive(w, row) ? 'surface-200' : 'surface-0 border-1 border-200'"
              style="width: 72px; height: 18px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type TimelineRow = {
  equipmentName: string
  startWeek: number
  endWeek: number
}

const props = defineProps<{ timeline: TimelineRow[]; startWeek?: number; endWeek?: number }>()

const weeks = Array.from(
  { length: (props.endWeek ?? 21) - (props.startWeek ?? 12) + 1 },
  (_, i) => i + (props.startWeek ?? 12)
)

function isActive(week: number, row: TimelineRow) {
  return week >= row.startWeek && week <= row.endWeek
}
</script>

