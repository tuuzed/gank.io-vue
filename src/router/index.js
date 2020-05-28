import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: Layout,
    redirect: () => "/home/girl",
    children: [
      {
        path: "article",
        name: "article",
        component: () => import("../views/Article.vue")
      },
      {
        path: "ganhuo",
        name: "ganhuo",
        component: () => import("../views/GanHuo.vue")
      },
      {
        path: "girl",
        name: "girl",
        component: () => import("../views/Girl.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
