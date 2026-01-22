import type { Customer } from './types'

export const customers: Customer[] = [
  {
    id: 'cust-1',
    name: 'Autohuiput Oy',
    businessId: '2845678-1',
    address: 'Rengastie 4',
    city: 'Vantaa',
    email: 'info@autohuiput.fi',
    phone: '+358 50 222 3344',
    customerType: 'Yritysasiakas',
    invoicingEmail: 'laskut@autohuiput.fi',
    contacts: [
      {
        id: 'p-1',
        firstName: 'Anna',
        lastName: 'Asikkala',
        email: 'anna.asikkala@autohuiput.fi',
        phone: '+358 50 111 2222',
        title: 'Ostopäällikkö'
      },
      {
        id: 'p-2',
        firstName: 'Mikko',
        lastName: 'Lehtonen',
        email: 'mikko.lehtonen@autohuiput.fi',
        phone: '+358 40 333 4444',
        title: 'Työnjohtaja'
      }
    ],
    users: [
      {
        id: 'u-1',
        firstName: 'Anna',
        lastName: 'Asikkala',
        email: 'anna.asikkala@autohuiput.fi',
        phone: '+358 50 111 2222',
        role: 'Pääkäyttäjä'
      },
      {
        id: 'u-2',
        firstName: 'Joonas',
        lastName: 'Rautiainen',
        email: 'joonas.rautiainen@autohuiput.fi',
        phone: '+358 44 121 3434',
        role: 'Käyttäjä'
      }
    ],
    billing: {
      paymentTermDays: 14,
      eInvoiceOperator: 'Apix Messaging Oy',
      eInvoiceAddress: '003728456781',
      salesPermissionEnabled: true
    },
    extra: {
      notes: 'Toimitukset arkisin klo 7–16. Porttikoodi 1974.',
      defaultVat: 25.5
    }
  }
]

