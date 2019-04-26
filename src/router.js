import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Gallery from './views/Gallery.vue'
import Library from './views/Library.vue'
import Headway from './views/Headway.vue'
import Quote from './views/Quote.vue'
import Game from './views/Game.vue'
import Melee from './views/Melee.vue'

Vue.use(Router)

export default new Router({
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
            path: '/library',
            name: 'library',
            component: Library
        },
        {
            path: '/headway',
            name: 'headway',
            component: Headway
        },
        {
            path: '/quote',
            name: 'quote',
            component: Quote
        },
        {
            path: '/game',
            name: 'game',
            component: Game
        },
        {
            path: '/melee',
            name: 'Melee',
            component: Melee
        }
    ],
    scrollBehavior () {
        return { x: 0, y: 0 }
      }
})
