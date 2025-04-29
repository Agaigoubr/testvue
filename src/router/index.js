// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue' // ✅ تعريف Home
import About from '../about/page.vue'
import Contact from "../contact/page.vue"

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
