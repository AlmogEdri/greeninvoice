import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

// Routes
import Login from '../views/Login.vue';
import Welcome from '../views/Welcome.vue';
import UserInfo from '../views/UserInfo.vue';

// Middleware
import auth from '../middleware/auth';

Vue.use(VueRouter);

const routes = [
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/user-info',
		name: 'user-info',
		component: UserInfo,
		meta: {
			middleware: [auth]
		}
	},
	{
		path: '/',
		name: 'welcome',
		component: Welcome,
		meta: {
			middleware: [auth]
		}
	},
];

const router = new VueRouter({
	routes
});

router.beforeEach((to, from, next) => {
	if (!to.meta.middleware) {
		return next();
	}
	const middleware = to.meta.middleware;

	const context = {
		to,
		from,
		next,
		store
	};
	return middleware[0]({
		...context
	});
});

export default router;
