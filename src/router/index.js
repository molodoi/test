import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Home from '@/components/Home'
import Account from '@/components/Account'
import Sejours from '@/components/Sejours'
import Sidebar from '@/components/Sidebar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      components: {
        default: Auth
      }
    },
    {
      path: '/home',
      name: 'Home',
      components: {
        default: Home,
        sidebar: Sidebar
      }
    },
    {
      path: '/account',
      name: 'Account',
      components: {
        default: Account,
        sidebar: Sidebar
      }
    },
    {
      path: '/sejours',
      name: 'Sejours',
      components: {
        default: Sejours,
        sidebar: Sidebar
      }
    },
    {
      // renvoyer à la racine quand l'utilisateur saisie n'importe quoi
      path: '*',
      redirect: '/'
    }
  ]
})
