import { createRouter, createWebHistory } from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import CategoryPageView from '../views/CategoryPageView.vue'
import ProductPageView from '../views/ProductPageView.vue'
import PanierPageView from '../views/PanierPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomepageView
    },
    {
      path: '/category/:name',
      name: 'category',
      component: CategoryPageView
    },
    {
      path: '/panier',
      name: 'panier',
      component: PanierPageView
    },
    {
      path: '/product/:name',
      name: 'product',
      component: ProductPageView
    }
  ]
})

export default router
