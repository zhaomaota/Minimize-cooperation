import { createApp } from 'vue'

import App from './App.vue'

const router =require('./router')

const app = createApp(App)
app.use(router)
app.mount('#app')
