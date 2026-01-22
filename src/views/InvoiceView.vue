<template>
  <div class="flex flex-column gap-3">
    <ActionBar danger-label="Poista lasku" />

    <SectionCard title="Header">
      <div class="grid">
        <div class="col-12 lg:col-4">
          <div class="flex flex-column gap-2">
            <ReadonlyField label="Toimittaja" :value="supplier?.name ?? '—'" />
            <ReadonlyField label="Y-tunnus" :value="supplier?.businessId ?? '—'" />
            <ReadonlyField
              label="Osoite"
              :value="supplier ? `${supplier.address}, ${supplier.city}` : '—'"
            />
          </div>
        </div>

        <div class="col-12 lg:col-4">
          <div class="flex flex-column gap-2">
            <ReadonlyField label="Toimittaja" :value="vendor?.name ?? '—'" />
            <ReadonlyField label="Y-tunnus" :value="vendor?.businessId ?? '—'" />
            <ReadonlyField
              label="Osoite"
              :value="vendor ? `${vendor.address}, ${vendor.city}` : '—'"
            />
          </div>
        </div>

        <div class="col-12 lg:col-4">
          <div class="flex flex-column gap-2">
            <div class="flex flex-column gap-1">
              <div class="text-500 text-sm">Aliurakoitsija</div>
              <Dropdown
                v-model="selectedSubcontractorId"
                :options="subcontractorOptions"
                optionLabel="label"
                optionValue="value"
                placeholder="Valitse"
                class="w-full"
              />
            </div>
            <div class="flex flex-column gap-1">
              <div class="text-500 text-sm">Laskun numero</div>
              <InputText v-model="invoiceNumber" class="w-full" />
            </div>
            <div class="flex flex-column gap-1">
              <div class="text-500 text-sm">Päiväys</div>
              <InputText v-model="invoiceDate" class="w-full" placeholder="YYYY-MM-DD" />
            </div>
          </div>
        </div>
      </div>
    </SectionCard>

    <SectionCard title="Rivit">
      <DataTable
        :value="rows"
        dataKey="id"
        paginator
        :rows="10"
        :rowsPerPageOptions="[10, 20, 50]"
        class="p-datatable-sm"
        responsiveLayout="scroll"
      >
        <Column field="description" header="Kuvaus" style="min-width: 20rem">
          <template #body="{ data }">
            <div class="truncate" style="max-width: 44rem">{{ data.description }}</div>
          </template>
        </Column>
        <Column field="quantity" header="Määrä" style="width: 7rem" />
        <Column field="unit" header="Yks." style="width: 5rem" />
        <Column header="A-hinta" style="width: 9rem">
          <template #body="{ data }">{{ formatEur(data.unitPriceEur) }}</template>
        </Column>
        <Column header="ALV" style="width: 10rem">
          <template #body="{ data }">
            <Dropdown
              v-model="data.vat"
              :options="vatOptions"
              optionLabel="label"
              optionValue="value"
              class="w-full"
            />
          </template>
        </Column>
        <Column header="Summa" style="width: 10rem">
          <template #body="{ data }">{{ formatEur(rowTotalEur(data)) }}</template>
        </Column>
      </DataTable>

      <div class="grid mt-3">
        <div class="col-12 lg:col-6">
          <div class="surface-50 border-1 border-200 border-round p-3 flex flex-column gap-2">
            <div class="flex align-items-center gap-2">
              <Checkbox v-model="costsIncludeVat" binary />
              <span class="text-700">Kustannukset sisältävät ALV:n</span>
            </div>
            <div class="text-500 text-sm">
              Demo: valinta vaikuttaa vain UI:hin, ei kirjanpitoon.
            </div>
          </div>
        </div>

        <div class="col-12 lg:col-6">
          <div class="surface-50 border-1 border-200 border-round p-3">
            <div class="flex justify-content-between">
              <span class="text-500">Välisummaa</span>
              <span class="font-medium">{{ formatEur(subtotalEur) }}</span>
            </div>
            <div class="flex justify-content-between mt-2">
              <span class="text-500">ALV</span>
              <span class="font-medium">{{ formatEur(vatEur) }}</span>
            </div>
            <div class="flex justify-content-between mt-2 pt-2 border-top-1 border-200">
              <span class="text-900 font-semibold">Yhteensä</span>
              <span class="text-900 font-semibold">{{ formatEur(totalEur) }}</span>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Checkbox from 'primevue/checkbox'

import { companies } from '../mocks/companies'
import { invoices } from '../mocks/invoices'
import { formatEur } from '../mocks/format'
import type { InvoiceRow, VatRate } from '../mocks/types'

import ActionBar from '../ui/components/ActionBar.vue'
import ReadonlyField from '../ui/components/ReadonlyField.vue'
import SectionCard from '../ui/components/SectionCard.vue'

const invoice = invoices[0]

const supplier = computed(() => companies.find((c) => c.id === 'c-supplier-1'))
const vendor = computed(() => companies.find((c) => c.id === 'c-vendor-1'))

const selectedSubcontractorId = ref<string | undefined>(invoice.subcontractorId)
const subcontractorOptions = computed(() =>
  companies
    .filter((c) => c.id.startsWith('c-sub-'))
    .map((c) => ({ label: c.name, value: c.id }))
)

const invoiceNumber = ref(invoice.invoiceNumber)
const invoiceDate = ref(invoice.date)

const rows = ref<InvoiceRow[]>(invoice.rows)

const costsIncludeVat = ref(false)

const vatOptions: Array<{ label: string; value: VatRate }> = [
  { label: '0 %', value: 0 },
  { label: '25,5 %', value: 25.5 }
]

function rowNetEur(r: InvoiceRow) {
  return r.quantity * r.unitPriceEur
}

function rowVatEur(r: InvoiceRow) {
  return rowNetEur(r) * (r.vat / 100)
}

function rowTotalEur(r: InvoiceRow) {
  return rowNetEur(r) + rowVatEur(r)
}

const subtotalEur = computed(() => rows.value.reduce((sum, r) => sum + rowNetEur(r), 0))
const vatEur = computed(() => rows.value.reduce((sum, r) => sum + rowVatEur(r), 0))
const totalEur = computed(() => subtotalEur.value + vatEur.value)
</script>

