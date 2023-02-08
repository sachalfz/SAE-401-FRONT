import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import CategoryPageView from '../views/CategoryPageView.vue'
import ProductPageView from '../views/ProductPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomepageView
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryPageView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductPageView
    }
  ]
})

export default router
