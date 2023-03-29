import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PlayList from "@/views/PlayList.vue";
import SongPage from "@/views/SongPage.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        //动态路由
        path: '/playlist/:id',
        name: 'playlist',
        component: PlayList,
        props: true
    },
    {
        path:'/songpage/:id/:title',
        name: 'songpage',
        component: SongPage,
        props: true
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = new VueRouter({
    routes
})

export default router
