<template lang="pug">
	#login
		v-row()
		
			//- Login form
			v-col(cols="12" md="6")
				v-form(v-model='valid')
					h1.page-title היי, טוב לראות אותך
					
					//- Inputs
					v-row(v-for="input of form" :key="input.type")
						v-text-field(v-model="input.model" :id="input.type" :type="input.type" :label="input.label" :rules="input.rules")

					//- Buttons
					v-row.mb-3(justify="space-between")
						v-btn.login-normal(:disabled="!valid" rounded @click="handleSubmit") כניסה
						v-btn.login-google(outlined rounded ) כניסה עם גוגל
							img(src="../assets/images/google-icon.svg", alt="google icon")
					
					//- Join text
					v-row
						a.register-text(href="#") עוד לא הצטרפת? ל-30 יום נסיון חינם
					
			//- Left image
			.left-image-box(cols="0" md="6")
				img(src="../assets/images/green_login_page.svg")
				
		//- Error message
		v-snackbar(v-model="formError" color="red") מייל או סיסמה לא נכונים!

</template>

<script>
	import { mapActions, mapGetters, mapState } from "vuex";

	export default {
		data: () => ({
			valid: false,
			form: {
				email: {
					model: "",
					type: "email",
					label: "מייל*",
					rules: [
						(v) => !!v || "חובה למלא את השדה",
						(v) => /.+@.+/.test(v) || "כתובת המייל אינה תקינה",
					],
				},
				password: {
					model: "",
					type: "password",
					label: "סיסמה*",
					rules: [
						(v) => !!v || "חובה למלא את השדה",
						(v) => v.length >= 6 || "הסיסמה צריכה לכלול לפחות 6 תווים",
					],
				},
			},
		}),
		computed: {
			...mapGetters(["errorMessage", "loggedIn"]),

			formError() {
				return this.errorMessage;
			},
		},
		watch: {
			loggedIn(newStatus, oldStatus) {
				if (newStatus) {
					this.$router.push({ name: "welcome" });
				}
			},
		},
		methods: {
			...mapActions(["login"]),

			/**
			 * Try to login with the form details.
			 *
			 * @return {void}
			 */
			handleSubmit() {
				const form = this.form;
				const fields = {
					email: form.email.model,
					password: form.password.model,
				};

				// Dispatch login action
				this.login(fields);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "../assets/style/_varibals.scss";

	.v-application #login {
		.left-image-box {
			position: relative;
			background: #ffdcdc;
			width: 50%;
			min-height: calc(100vh + 100px);
			img {
				width: 85%;
			}
		}
		.v-form {
			width: 85%;
			max-width: 445px;
			margin: 0 auto;
		}
		h1 {
			text-align: center;
			font-size: 48px;
			margin-bottom: 70px;
			font-family: bold;
		}
		.v-btn {
			height: 55px;
			transition: 0.2s all;
			&.login {
				&-normal {
					width: 55%;
					background: $green !important;
					color: white !important;

					&.v-btn--disabled {
						background: rgba($green, 0.4) !important;
					}
				}
				&-google {
					width: 40%;
					background: transparent !important;
					border: 1px solid $blue;
					color: $blue;

					&:hover {
						background: $blue !important;
						color: white;

						img {
							filter: grayscale(1) brightness(3);
						}
					}
					img {
						margin-right: 5px;
						width: 24px;
						height: 24px;
					}
				}
			}
		}
	}
</style>
