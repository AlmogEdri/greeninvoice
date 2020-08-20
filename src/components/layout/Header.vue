<template>
	<v-app-bar fixed="fixed" flat="flat" color="transparent">
		<v-container>
			<v-toolbar-title>
				<v-btn class="pa-0" color="transparent" elevation="0">
					<v-img src="../../assets/images/green_logo.svg" contain="contain" />
				</v-btn>
			</v-toolbar-title>
			<v-spacer />
			<span v-if="loggedIn">
				<router-link :to="{ name: 'welcome' }">
					<v-btn class="ml-2" outlined text> Welcome</v-btn>
				</router-link>
				<router-link :to="{ name: 'user-info' }">
					<v-btn class="ml-2" outlined text>Info</v-btn>
				</router-link>
				<v-btn outlined text color="red" @click="handleLogout"> התנתק</v-btn>
			</span>
		</v-container>
	</v-app-bar>
</template>

<script>
	import { mapMutations, mapState } from "vuex";

	export default {
		computed: {
			...mapState(["loggedIn"]),
		},
		methods: {
			...mapMutations(["logout"]),

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
	.v-app-bar.v-app-bar--is-scrolled {
		background: rgba(white, 0.6) !important;
	}
	.v-image {
		height: 64px;
		width: 200px;
	}
	.container {
		display: flex;
	}
</style>
