import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'Autohuiput Oy — Piha- ja perustustyöt',
    customerId: 'cust-1',
    siteAddress: 'Rengastie 4',
    city: 'Vantaa',
    startDate: '2025-12-02',
    endDate: '2026-02-14',
    status: 'Käynnissä',
    financials: {
      revenueEur: 32834,
      costsEur: 21490
    },
    equipmentTimeline: [
      { equipmentName: 'Doosan 345', startWeek: 12, endWeek: 15 },
      { equipmentName: 'Valmet', startWeek: 12, endWeek: 16 },
      { equipmentName: 'ER Scania 470', startWeek: 12, endWeek: 20 }
    ]
  }
]

