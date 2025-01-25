import { createWebHistory, createRouter } from 'vue-router'
import i18n from '@/i18n'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '',
    component: HomeView,
    alias: ['', '/'],
  },
  {
    component: HomeView,
    path: '/:pathMatch(.*)*',
  },
]

const router = createRouter({
  history: createWebHistory('/event-invitation/'),
  routes,
})

router.beforeEach((to, _from, next) => {
  document.title = i18n.global.t('app-title')
  next()
})

export default router
