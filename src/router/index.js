import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import InterviewPage from '../pages/InterviewPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/interview', name: 'interview', component: InterviewPage },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFoundPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router