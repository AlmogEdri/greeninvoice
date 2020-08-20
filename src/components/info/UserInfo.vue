<template>
	<v-card max-width="700">
		<v-container>
			<v-row dense align="center">
				<v-col v-if="user.picture" cols="auto">
					<v-avatar>
						<v-img
							:src="user.picture"
							height="70"
							width="70"
							alt="user avatar image"
						/>
					</v-avatar>
				</v-col>
				<v-col cols="auto">
					<v-card-title v-if="name" v-text="name" />
					<v-card-subtitle v-if="user.idNumber" v-text="user.idNumber" />
				</v-col>
			</v-row>
			<v-row dense>
				<v-col cols="12" md="6">
					<p v-if="user.email" v-html="formatText('מזהה משתמש', user.id)" />
				</v-col>
				<v-col cols="12" md="6">
					<p v-if="user.email" v-html="formatText('דוא&quot;ל ', user.email)" />
				</v-col>
			</v-row>
		</v-container>
	</v-card>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		computed: {
			...mapState(["user"]),

			/**
			 * Get the user full name
			 *
			 * @return {string|null}
			 */
			name() {
				const user = this.user;
				let name = "";
				if (user.firstName) {
					name += user.firstName;
				}
				if (user.lastName) {
					name += name.length ? ` ${user.lastName}` : user.lastName;
				}

				return name.length ? name : null;
			},
		},

		methods: {
			formatText(title, content) {
				return `<b>${title}: </b> ${content}`;
			},
		},
	};
</script>