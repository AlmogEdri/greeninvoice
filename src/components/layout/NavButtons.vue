<template>
	<v-list v-if="loggedIn" :class="{ 'row-view': row }">
		<v-list-item :class="{ 'd-none d-md-flex': row }">
			<router-link :to="{ name: 'welcome' }">
				<v-btn color="success" outlined text> Welcome</v-btn>
			</router-link>
		</v-list-item>

		<v-list-item :class="{ 'd-none d-md-flex': row }">
			<router-link :to="{ name: 'user-info' }">
				<v-btn color="success" outlined text>Info</v-btn>
			</router-link>
		</v-list-item>

		<v-list-item :class="{ 'd-none d-md-flex': row }">
			<v-btn color="red" outlined text @click="handleLogout"> התנתק</v-btn>
		</v-list-item>

		<!-- Drawer btn -->
		<v-list-item :class="{ 'd-md-none': row, 'd-none': !row }">
			<v-btn color="success" icon @click="drawer(true)">
				<v-icon>mdi-menu</v-icon>
			</v-btn>
		</v-list-item>
	</v-list>
</template>

<script>
	import { mapMutations, mapState } from "vuex";

	export default {
		props: {
			row: {
				type: Boolean,
				default: false,
			},
		},
		computed: {
			...mapState(["loggedIn"]),
		},
		methods: {
			...mapMutations(["logout", "drawer"]),

			/**
			 * Log out the user from the system and redirect to login page
			 *
			 * @return {void}
			 */
			handleLogout() {
				this.logout();
				this.$router.push({ name: "login" });
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "../../assets/style/_varibals.scss";

	.row-view {
		&.v-sheet.v-list {
			display: flex;
		}
	}
	.v-btn {
		border-color: transparent !important;

		&.red--text:hover {
			border-color: red !important;
		}
		&.success--text:hover {
			border-color: $green !important;
		}
	}
</style>
