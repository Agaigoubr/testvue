import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // أضف هذا السطر

createApp(App).use(router).mount('#app')
