import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import FavoriteRecipe from '../views/FavoriteRecipe'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/favorite-recipe',
    name: 'favoriteRecipe',
    component: FavoriteRecipe
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
