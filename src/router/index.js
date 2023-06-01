import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import InterviewPage from '../pages/InterviewPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
  { path: '/Interview/', name: 'home', component: HomePage },
  { path: '/Interview/interview', name: 'interview', component: InterviewPage },
  { path: '/Interview/:pathMatch(.*)*', name: 'notfound', component: NotFoundPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router