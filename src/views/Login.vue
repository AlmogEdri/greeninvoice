<template>
	<v-row id="login-page" justify="center">
		<v-col class="right" cols="12" md="6">
			<Form />
		</v-col>
		<v-col class="left" cols="0" md="6">
			<side-image />
		</v-col>
		<v-snackbar v-model="errorMessage" color="red">מייל או סיסמה לא נכונים!</v-snackbar>
	</v-row>
</template>

<script>
	import { mapState } from "vuex";
	import Form from "../components/login/Form";
	import SideImage from "../components/login/SideImage";

	export default {
		components: {
			Form,
			SideImage,
		},
		computed: {
			...mapState(["errorMessage", "loggedIn"]),
		},
		watch: {
			loggedIn(newStatus, oldStatus) {
				if (newStatus) {
					this.$router.push({ name: "welcome" });
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "../assets/style/_mixins.scss";

	.v-application #login-page {
		height: 100vh;

		[class*="col"] {
			padding: 0;
		}
		.right {
			display: flex;
			align-self: center;
			justify-content: center;
		}
		.left {
			@include sm {
				display: none;
			}
		}
	}
</style>
