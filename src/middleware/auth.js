export default function auth({ next, store }) {
	if (!store.getters.loggedIn) {
		console.log('almog auth middleware')
		return next({
			name: 'login'
		});
	}

	return next();
}