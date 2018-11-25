import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/components/LoginForm'
import Brief from '@/components/Brief'
import StartPage from '@/components/StartPage'
import Users from '@/components/Users'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/users',
			name: 'Users',
			component: Users
		},
		{
			path: '/login',
			name: 'LoginForm',
			component: LoginForm
		},
		{
			path: '/brief',
			name: 'Brief',
			component: Brief
		},
		{
			path: '/panel',
			name: 'StartPage',
			component: StartPage
		}
	]
})
