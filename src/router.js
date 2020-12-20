import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Gallery from './views/Gallery.vue'
import Projects from './views/Projects.vue'
import KO from './views/KO.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/KOeveryDayO',
      name: 'KOeveryDayO',
      component: KO
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
