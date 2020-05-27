import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: () => "girl",
    children: [
      {
        path: "article",
        name: "Article",
        component: () => import("../views/Article.vue")
      },
      {
        path: "ganhuo",
        name: "GanHuo",
        component: () => import("../views/GanHuo.vue")
      },
      {
        path: "girl",
        name: "Girl",
        component: () => import("../views/Girl.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
