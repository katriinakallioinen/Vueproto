<template>
  <div class="flex flex-column gap-3">
    <SectionCard title="Työtehtävät">
      <TabView>
        <TabPanel header="Työtehtävät">
          <div class="grid">
            <div class="col-12 lg:col-4">
              <div class="text-900 font-semibold mb-3">Asiakastiedot</div>
              <div class="flex flex-column gap-2">
                <ReadonlyField label="Asiakas" :value="customerName" />
                <ReadonlyField label="Kohde" :value="`${project.siteAddress}, ${project.city}`" />
                <ReadonlyField label="Status" :value="project.status" />
              </div>
            </div>

            <div class="col-12 lg:col-4">
              <div class="text-900 font-semibold mb-3">Projektitiedot</div>
              <div class="flex flex-column gap-2">
                <ReadonlyField label="Projekti" :value="project.name" />
                <ReadonlyField label="Aloitus" :value="formatDateFi(project.startDate)" />
                <ReadonlyField label="Päättyy" :value="formatDateFi(project.endDate)" />
              </div>
            </div>

            <div class="col-12 lg:col-4">
              <div class="text-900 font-semibold mb-3">Aliurakoitsija</div>
              <div class="flex flex-column gap-1">
                <div class="text-500 text-sm">Aliurakoitsija</div>
                <Dropdown
                  v-model="subcontractorId"
                  :options="subcontractorOptions"
                  optionLabel="label"
                  optionValue="value"
                  placeholder="Valitse"
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Työaikahallinta">
          <div class="grid">
            <div class="col-12 lg:col-6">
              <div class="surface-50 border-1 border-200 border-round p-3">
                <div class="text-900 font-semibold mb-2">Päiväkirja (mock)</div>
                <ul class="m-0 pl-3 text-700">
                  <li>Perustusten kaivu ja massanvaihto</li>
                  <li>Suodatinkankaat ja salaojat</li>
                  <li>Pihan kivituhka ja tiivistys</li>
                </ul>
              </div>
            </div>
            <div class="col-12 lg:col-6">
              <div class="surface-50 border-1 border-200 border-round p-3">
                <div class="text-900 font-semibold mb-2">Työtunnit (mock)</div>
                <DataTable :value="timeRows" class="p-datatable-sm" responsiveLayout="scroll">
                  <Column field="date" header="Päivä" style="width: 9rem" />
                  <Column field="person" header="Tekijä" />
                  <Column field="hours" header="Tunnit" style="width: 6rem" />
                  <Column field="task" header="Tehtävä" style="min-width: 16rem" />
                </DataTable>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Hinnoittelu">
          <div class="grid">
            <div class="col-12 lg:col-6">
              <div class="surface-50 border-1 border-200 border-round p-3">
                <div class="text-900 font-semibold mb-3">Talous</div>
                <div class="flex justify-content-between">
                  <span class="text-500">Myynti</span>
                  <span class="font-medium">{{ formatEur(project.financials.revenueEur) }}</span>
                </div>
                <div class="flex justify-content-between mt-2">
                  <span class="text-500">Kustannukset</span>
                  <span class="font-medium">{{ formatEur(project.financials.costsEur) }}</span>
                </div>
                <div class="flex justify-content-between mt-2 pt-2 border-top-1 border-200">
                  <span class="text-900 font-semibold">Kate</span>
                  <span class="text-900 font-semibold">{{ formatEur(marginEur) }}</span>
                </div>
              </div>
            </div>

            <div class="col-12 lg:col-6">
              <div class="surface-50 border-1 border-200 border-round p-3">
                <div class="text-900 font-semibold mb-3">Kaavio (mock)</div>
                <Chart type="pie" :data="pieData" :options="pieOptions" />
              </div>
            </div>
          </div>

          <div class="grid mt-1">
            <div class="col-12">
              <div class="surface-50 border-1 border-200 border-round p-3">
                <div class="text-900 font-semibold mb-3">Viikkokehitys (mock)</div>
                <Chart type="bar" :data="barData" :options="barOptions" />
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Laskutus">
          <div class="surface-50 border-1 border-200 border-round p-3">
            <div class="text-900 font-semibold mb-2">Laskutus (read-only)</div>
            <div class="grid">
              <div class="col-12 md:col-4">
                <ReadonlyField label="Laskutettava tila" value="Valmis laskutukseen" />
              </div>
              <div class="col-12 md:col-4">
                <ReadonlyField label="ALV" value="25,5 %" />
              </div>
              <div class="col-12 md:col-4">
                <ReadonlyField label="Valuutta" value="EUR (€)" />
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Kalusto">
          <EquipmentTimeline :timeline="project.equipmentTimeline" :startWeek="12" :endWeek="21" />
        </TabPanel>
      </TabView>
    </SectionCard>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Dropdown from 'primevue/dropdown'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Chart from 'primevue/chart'

import EquipmentTimeline from '../ui/components/EquipmentTimeline.vue'
import ReadonlyField from '../ui/components/ReadonlyField.vue'
import SectionCard from '../ui/components/SectionCard.vue'

import { projects } from '../mocks/projects'
import { customers } from '../mocks/customers'
import { companies } from '../mocks/companies'
import { formatDateFi, formatEur } from '../mocks/format'

const project = projects[0]

const customerName = computed(() => customers.find((c) => c.id === project.customerId)?.name ?? '—')

const subcontractorId = ref<string | undefined>('c-sub-1')
const subcontractorOptions = computed(() =>
  companies
    .filter((c) => c.id.startsWith('c-sub-'))
    .map((c) => ({ label: c.name, value: c.id }))
)

const marginEur = computed(() => project.financials.revenueEur - project.financials.costsEur)

const pieData = computed(() => ({
  labels: ['Kustannukset', 'Kate'],
  datasets: [
    {
      data: [project.financials.costsEur, marginEur.value],
      backgroundColor: ['#A7C7E7', '#E7D28A'],
      borderWidth: 0
    }
  ]
}))

const pieOptions = {
  plugins: { legend: { position: 'bottom' as const } }
}

const barData = computed(() => ({
  labels: ['vko 12', 'vko 13', 'vko 14', 'vko 15', 'vko 16', 'vko 17', 'vko 18', 'vko 19', 'vko 20'],
  datasets: [
    {
      label: 'Myynti',
      data: [2500, 4800, 6200, 5000, 3900, 4200, 3100, 3800, 3334],
      backgroundColor: '#A7C7E7'
    },
    {
      label: 'Kustannukset',
      data: [1800, 3200, 4100, 3600, 2700, 2900, 2100, 2400, 2690],
      backgroundColor: '#9BD7C0'
    }
  ]
}))

const barOptions = {
  responsive: true,
  plugins: { legend: { position: 'bottom' as const } },
  scales: { y: { ticks: { callback: (v: any) => `${v} €` } } }
}

const timeRows = [
  { date: '2026-01-10', person: 'Mikko Lehtonen', hours: 7.5, task: 'Massanvaihto' },
  { date: '2026-01-11', person: 'Anna Asikkala', hours: 2.0, task: 'Työmaakäynti' },
  { date: '2026-01-12', person: 'Joonas Rautiainen', hours: 6.0, task: 'Salaojat ja suodatinkangas' }
]
</script>

