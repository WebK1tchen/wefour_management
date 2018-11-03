import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/components/LoginForm'
import StartPage from '@/components/StartPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/panel',
      name: 'StartPage',
      component: StartPage
    }
  ]
})
