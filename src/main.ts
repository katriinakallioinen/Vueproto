import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { createRouter } from './router'
import App from './App.vue'

// PrimeVue / PrimeFlex styles
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

import './styles/app.css'

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
app.use(createRouter())
app.mount('#app')

