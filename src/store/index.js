import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		errorMessage: false,
		user: {
			id: null,
		}
	},
	getters: {
		loggedIn: state => !!state.user.id,
		errorMessage: state => state.errorMessage
	},
	mutations: {
		login: (state, form) => {
			Object.entries(form).map(([key, value]) => {
				state.user[key] = value
			});
		},

		logout: state => {
			state.user = { id: null };
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
