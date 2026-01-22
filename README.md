## Maarakennus UI Prototype (Vue 3 + PrimeVue + PrimeFlex)

Responsive UI prototype based on Figma-style layouts for a Finnish earthworks business system (invoices, customers, projects).

### Tech

- Vue 3 (Composition API)
- Vite
- PrimeVue components (Button, InputText, Dropdown, Checkbox, DataTable, TabView, Card, Chart)
- PrimeFlex (mobile-first layout)
- Static mock data only (no API calls)

### Run locally

```bash
npm install
npm run dev
```

### Routes

- `/laskut/ostolasku` — Invoice view
- `/asiakkaat/muokkaa` — Edit customer view
- `/tilaukset/yhteenveto` — Order / project summary view

### Mock data

Located in `src/mocks/*` with realistic Finnish maarakennus-focused sample data.

