import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from './middleware/loadLayout'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(loadLayoutMiddleware)

export default router
