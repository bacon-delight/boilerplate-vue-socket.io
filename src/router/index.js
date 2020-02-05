import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/trigger',
		name: 'trigger',
		component: () => import('../views/Trigger.vue')
	},
	{
		path: '/stage',
		name: 'stage',
		component: () => import('../views/Stage.vue')
	},
	{
		path: '/stage-muted',
		name: 'stage',
		component: () => import('../views/StageMuted.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
