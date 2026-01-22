export type VatRate = 0 | 25.5

export type Company = {
  id: string
  name: string
  businessId: string
  address: string
  city: string
  email: string
  phone: string
}

export type Person = {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  title?: string
}

export type Customer = Company & {
  customerType: 'Yritysasiakas' | 'Yksityisasiakas'
  invoicingEmail?: string
  contacts: Person[]
  users: Array<Person & { role: 'Pääkäyttäjä' | 'Käyttäjä' }>
  billing: {
    paymentTermDays: number
    eInvoiceOperator?: string
    eInvoiceAddress?: string
    salesPermissionEnabled: boolean
  }
  extra: {
    notes: string
    defaultVat: VatRate
  }
}

export type InvoiceRow = {
  id: string
  description: string
  quantity: number
  unit: 'h' | 'kpl' | 'm3' | 't' | 'm2'
  unitPriceEur: number
  vat: VatRate
}

export type Invoice = {
  id: string
  invoiceNumber: string
  date: string
  supplierId: string
  customerId: string
  subcontractorId?: string
  rows: InvoiceRow[]
}

export type Project = {
  id: string
  name: string
  customerId: string
  siteAddress: string
  city: string
  startDate: string
  endDate: string
  status: 'Suunnitteilla' | 'Käynnissä' | 'Valmis'
  financials: {
    revenueEur: number
    costsEur: number
  }
  equipmentTimeline: Array<{
    equipmentName: string
    startWeek: number
    endWeek: number
  }>
}

