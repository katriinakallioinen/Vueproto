export function formatEur(value: number) {
  return new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' }).format(value)
}

export function formatDateFi(isoDate: string) {
  const d = new Date(isoDate)
  return new Intl.DateTimeFormat('fi-FI').format(d)
}

