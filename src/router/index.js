import { createRouter, createWebHistory } from 'vue-router'
import MainFeed from '../views/MainFeed.vue'
import Profile from '../views/ProfilePage.vue'
import RecipeDetails from '../views/RecipeDetails.vue'
import Search from '../views/SearchPage.vue'
import CreateRecipe from '../views/CreateRecipe.vue'
import Register from '../views/RegisterPage.vue'
import Login from '../views/LoginPage.vue'
import ForgotPassword from '../views/ForgottenPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
import userPage from '../views/userPage.vue'
import RecipeSteps from '../views/RecipeSteps.vue'

const routes = [
  {
    path: '/',
    alias: '/feed',
    name: 'Feed',
    component: MainFeed
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/profile/:id',
    name: 'ProfileDetails',
    component: Profile,
    props: true
  },
  {
    path:'/recipes/:id',
    name: 'RecipeDetails',
    component: RecipeDetails,
    props: true
  },
  {
    path:'/recipes/:id/steps',
    name: 'RecipeSteps',
    component: RecipeSteps,
    props: true
  },
  {
    path:'/users/:id',
    name: 'userPage',
    component: userPage,
    props: true
  },

  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/create-recipe',
    name: 'CreateRecipe',
    component: CreateRecipe,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  // redirect example
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
