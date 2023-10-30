import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import DashboardLayout from './components/DashboardLayout.vue'
import EmptyLayout from './components/EmptyLayout.vue'
import { VueQueryPlugin } from 'vue-query'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

app.component('DefaultLayout', DashboardLayout)
app.component('EmptyLayout', EmptyLayout)

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.mount('#app')
