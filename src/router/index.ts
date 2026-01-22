import { createRouter as _createRouter, createWebHistory } from 'vue-router'

import AppLayout from '../ui/layout/AppLayout.vue'
import InvoiceView from '../views/InvoiceView.vue'
import CustomerEditView from '../views/CustomerEditView.vue'
import ProjectSummaryView from '../views/ProjectSummaryView.vue'

export function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: AppLayout,
        children: [
          { path: '', redirect: '/laskut/ostolasku' },
          { path: 'laskut/ostolasku', component: InvoiceView },
          { path: 'asiakkaat/muokkaa', component: CustomerEditView },
          { path: 'tilaukset/yhteenveto', component: ProjectSummaryView }
        ]
      }
    ]
  })
}

