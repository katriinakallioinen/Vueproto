import type { Company } from './types'

export const companies: Company[] = [
  {
    id: 'c-supplier-1',
    name: 'Aallon Helsinki Oy',
    businessId: '3123456-7',
    address: 'Teollisuuskatu 12',
    city: 'Helsinki',
    email: 'laskutus@aallonhelsinki.fi',
    phone: '+358 40 123 4567'
  },
  {
    id: 'c-customer-1',
    name: 'Autohuiput Oy',
    businessId: '2845678-1',
    address: 'Rengastie 4',
    city: 'Vantaa',
    email: 'ostot@autohuiput.fi',
    phone: '+358 50 222 3344'
  },
  {
    id: 'c-vendor-1',
    name: 'Soratoimitus Oy',
    businessId: '3011122-9',
    address: 'Kiviaineksentie 7',
    city: 'Kerava',
    email: 'myynti@soratoimitus.fi',
    phone: '+358 44 555 6677'
  },
  {
    id: 'c-sub-1',
    name: 'Konetyö Oy',
    businessId: '2765432-0',
    address: 'Kaivajankuja 2',
    city: 'Espoo',
    email: 'toimisto@konetyö.fi',
    phone: '+358 45 777 8899'
  },
  {
    id: 'c-sub-2',
    name: 'Pohjatyö Kallio Oy',
    businessId: '2987654-3',
    address: 'Perustustie 9',
    city: 'Helsinki',
    email: 'laskutus@pohjatyokallio.fi',
    phone: '+358 40 987 6543'
  }
]

