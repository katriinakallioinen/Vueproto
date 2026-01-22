<template>
  <div class="flex flex-column gap-3">
    <ActionBar danger-label="Poista asiakas" />

    <SectionCard title="Perustiedot">
      <TabView>
        <TabPanel header="Perustiedot">
          <div class="grid">
            <div class="col-12 lg:col-4">
              <div class="text-900 font-semibold mb-3">Asiakastiedot</div>

              <div class="flex flex-column gap-2">
                <div class="flex flex-column gap-1">
                  <div class="text-500 text-sm">Asiakastyyppi</div>
                  <div class="flex gap-3">
                    <label class="flex align-items-center gap-2">
                      <input type="radio" checked />
                      <span class="text-700">Yritysasiakas</span>
                    </label>
                    <label class="flex align-items-center gap-2">
                      <input type="radio" />
                      <span class="text-700">Yksityisasiakas</span>
                    </label>
                  </div>
                </div>

                <div class="flex flex-column gap-1">
                  <div class="text-500 text-sm">Yrityksen nimi</div>
                  <InputText v-model="model.name" class="w-full" />
                </div>
                <div class="flex flex-column gap-1">
                  <div class="text-500 text-sm">Y-tunnus</div>
                  <InputText v-model="model.businessId" class="w-full" />
                </div>
                <div class="flex flex-column gap-1">
                  <div class="text-500 text-sm">Osoite</div>
                  <InputText v-model="model.address" class="w-full" />
                </div>
                <div class="flex flex-column gap-1">
                  <div class="text-500 text-sm">Kaupunki</div>
                  <InputText v-model="model.city" class="w-full" />
                </div>
              </div>
            </div>

            <div class="col-12 lg:col-4">
              <div class="text-900 font-semibold mb-3">Laskutustiedot</div>

              <div class="flex flex-column gap-2">
                <div class="flex flex-column gap-1">
                  <div class="text-500 text-sm">Laskutussähköposti</div>
                  <InputText v-model="model.invoicingEmail" class="w-full" />
                </div>
                <div class="flex flex-column gap-1">
                  <div class="text-500 text-sm">Maksuehto (pv)</div>
                  <InputText v-model="paymentTerm" class="w-full" />
                </div>
                <div class="flex flex-column gap-1">
                  <div class="text-500 text-sm">Verkkolaskuoperaattori</div>
                  <InputText v-model="eInvoiceOperator" class="w-full" />
                </div>
                <div class="flex flex-column gap-1">
                  <div class="text-500 text-sm">Verkkolaskuosoite</div>
                  <InputText v-model="eInvoiceAddress" class="w-full" />
                </div>

                <div class="flex align-items-center gap-2 mt-2">
                  <Checkbox v-model="salesPermissionEnabled" binary />
                  <span class="text-700">Myyntioikeus käytössä</span>
                </div>
              </div>
            </div>

            <div class="col-12 lg:col-4">
              <div class="text-900 font-semibold mb-3">Lisätiedot</div>

              <div class="flex flex-column gap-2">
                <div class="flex flex-column gap-1">
                  <div class="text-500 text-sm">Oletus-ALV</div>
                  <Dropdown
                    v-model="defaultVat"
                    :options="vatOptions"
                    optionLabel="label"
                    optionValue="value"
                    class="w-full"
                  />
                </div>
                <div class="flex flex-column gap-1">
                  <div class="text-500 text-sm">Lisähuomiot</div>
                  <InputText v-model="notes" class="w-full" />
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Yhteyshenkilöt">
          <DataTable :value="model.contacts" paginator :rows="10" responsiveLayout="scroll">
            <Column field="firstName" header="Etunimi" />
            <Column field="lastName" header="Sukunimi" />
            <Column field="title" header="Rooli" />
            <Column field="email" header="Sähköposti" />
            <Column field="phone" header="Puhelin" />
          </DataTable>
        </TabPanel>

        <TabPanel header="Käyttäjät">
          <DataTable :value="model.users" paginator :rows="10" responsiveLayout="scroll">
            <Column field="firstName" header="Etunimi" />
            <Column field="lastName" header="Sukunimi" />
            <Column field="role" header="Rooli" />
            <Column field="email" header="Sähköposti" />
            <Column field="phone" header="Puhelin" />
          </DataTable>
        </TabPanel>
      </TabView>
    </SectionCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

import ActionBar from '../ui/components/ActionBar.vue'
import SectionCard from '../ui/components/SectionCard.vue'

import { customers } from '../mocks/customers'
import type { VatRate } from '../mocks/types'

const model = ref(customers[0])

const paymentTerm = ref(String(model.value.billing.paymentTermDays))
const eInvoiceOperator = ref(model.value.billing.eInvoiceOperator ?? '')
const eInvoiceAddress = ref(model.value.billing.eInvoiceAddress ?? '')
const salesPermissionEnabled = ref(model.value.billing.salesPermissionEnabled)

const notes = ref(model.value.extra.notes)
const defaultVat = ref<VatRate>(model.value.extra.defaultVat)

const vatOptions: Array<{ label: string; value: VatRate }> = [
  { label: '0 %', value: 0 },
  { label: '25,5 %', value: 25.5 }
]
</script>

