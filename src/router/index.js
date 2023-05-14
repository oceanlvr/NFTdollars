import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ()=>import('@/views/Index.vue')
    },
    {
      path: '/Borrow',
      name: 'Borrow',
      component: () => import('@/views/WalletConnect.vue')
    },
    {
      path: '/riskyAddress',
      name: 'RiskyAddress',
      component: () => import('@/views/RiskyTrove.vue')
    }
  ]
})

export default router
