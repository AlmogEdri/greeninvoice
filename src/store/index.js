import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loggedIn: false,
		errorMessage: false,
		user: {
			id: null,
		}
	},
	getters: {
		loggedIn: state => state.loggedIn,
		errorMessage: state => state.errorMessage
	},
	mutations: {
		login: (state, form) => {
			Object.entries(form).map(([key, value]) => {
				state.user[key] = value
			});
			state.loggedIn = true;
		},

		logout: state => {
			state.loggedIn = false;
			state.user = {};
		},

		errorMessage: (state, status) => {
			state.errorMessage = status;
		}
	},
	actions: {
		login: async ({ commit }, form) => {
			try {
				const { data } = await axios.post('/account/login', form);
				commit('login', data);
				commit('errorMessage', false);
			} catch (error) {
				commit('errorMessage', true);
				console.error(error.message);
			}
		}
	},
})
