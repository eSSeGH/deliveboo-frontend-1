import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/pages/Home.vue'
import RestaurantsIndex from './components/pages/Restaurants.index.vue'
import RestaurantsShow from './components/pages/Restaurants.show.vue'
// import PageNotFound from './404.vue';

const history = createWebHistory()

const router = createRouter({

    history,

    routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
    }, 
    {
        path: '/restaurants',
        name: 'restaurants.index', 
        component: RestaurantsIndex,
    },
    {
        path: '/restaurants/:slug', //maybe slug is to insert here
        name: 'restaurants.show',
        component: RestaurantsShow,
    },
    // {
    //     path: '/404',
    //     name: '404',
    //     component: PageNotFound,
    // }
] 
});

export { router };