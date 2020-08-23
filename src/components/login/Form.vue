<template>
	<v-form class="mt-14" v-model="valid">
		<h1 class="page-title">היי, טוב לראות אותך</h1>
		<v-row class="mb-4" v-for="input of form" :key="input.type">
			<v-text-field
				v-model="input.model"
				:id="input.type"
				:type="input.type"
				:label="input.label"
				:rules="input.rules"
			/>
			<p v-if="input.subtext.type === 'text'" v-text="input.subtext.content" />
			<a
				v-else-if="input.subtext.type === 'link'"
				v-text="input.subtext.content"
			/>
		</v-row>
		<v-row class="mb-7 mt-16" justify="space-between">
			<v-btn
				class="login-normal"
				:disabled="!valid"
				rounded="rounded"
				@click="handleSubmit"
				>כניסה</v-btn
			>
			<v-btn class="login-google" outlined="outlined" rounded="rounded">
				כניסה עם גוגל
				<img src="../../assets/images/google-icon.svg" alt="google icon" />
			</v-btn>
		</v-row>
		<v-row>
			<a class="register-text" href="#">עוד לא הצטרפת? ל-30 יום נסיון חינם </a>
		</v-row>
	</v-form>
</template>

<script>
	import { mapActions } from "vuex";

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
					subtext: {
						content: "כתובת המייל איתה נרשמת לחשבונית ירוקה",
						type: "text",
					},
				},
				password: {
					model: "",
					type: "password",
					label: "סיסמה*",
					rules: [
						(v) => !!v || "חובה למלא את השדה",
						(v) => v.length >= 6 || "הסיסמה צריכה לכלול לפחות 6 תווים",
					],
					subtext: {
						content: "שכחת סיסמה?",
						type: "link",
					},
				},
			},
		}),
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

<style lang="scss">
	.v-text-field:not(.error--text) {
		.v-text-field__details {
			display: none;
		}
	}
</style>

<style lang="scss" scoped>
	@import "../../assets/style/_varibals.scss";
	@import "../../assets/style/_mixins.scss";

	.v-application {
		.v-form {
			width: 85%;
			max-width: 450px;

			h1 {
				font-size: 54px;
				margin-bottom: 20px;
				font-family: bold;
				
				@include xs {
					font-size: 36px;
				}
			}
			.v-text-field {
				flex-basis: 100%;

				.error--text {
					.v-input__control .v-text-field__details {
						display: none;
						height: 0px;
					}
				}
			}
			.v-btn {
				height: 55px;
				transition: 0.2s all;

				@include xs {
					width: 100% !important;
					margin: 5px 0;
				}
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
	}
</style>
