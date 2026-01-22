import type { Invoice } from './types'

export const invoices: Invoice[] = [
  {
    id: 'inv-1',
    invoiceNumber: 'OSTO-2026-00127',
    date: '2026-01-18',
    supplierId: 'c-supplier-1',
    customerId: 'c-customer-1',
    subcontractorId: 'c-sub-1',
    rows: [
      {
        id: 'row-1',
        description: 'Kiviainekset 0–16 mm (toimitettuna) — 2 aks. kuorma',
        quantity: 18.5,
        unit: 't',
        unitPriceEur: 22.9,
        vat: 25.5
      },
      {
        id: 'row-2',
        description: 'Kaivinkonetyö 14 t — pihan tasaus ja pohjien tiivistys',
        quantity: 6.0,
        unit: 'h',
        unitPriceEur: 82.0,
        vat: 25.5
      },
      {
        id: 'row-3',
        description: 'Työmaan siivous ja viimeistely',
        quantity: 1,
        unit: 'kpl',
        unitPriceEur: 120.0,
        vat: 0
      }
    ]
  }
]

