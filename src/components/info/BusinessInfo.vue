<template>
	<v-card max-width="700">
		<v-container>
			<v-row dense align="center">
				<v-col cols="auto">
					<v-badge
						:color="item.active ? 'green' : 'red'"
						offset-x="15"
						offset-y="15"
					>
						<v-avatar>
							<v-img
								v-if="item.logo"
								:src="item.logo"
								height="50"
								width="50"
								alt="avatar image"
							/>
						</v-avatar>
					</v-badge>
				</v-col>
				<v-col cols="auto">
					<v-card-title v-if="title" v-text="title" />
					<v-card-subtitle v-if="address" v-text="address" />
				</v-col>
			</v-row>
			<v-row dense align="center">
				<v-col cols="12" md="6">
					<p
						v-if="item.taxId"
						v-html="formatText('מספר ע.מ / ח.פ', item.taxId)"
					/>
				</v-col>
				<v-col cols="12" md="6">
					<p v-if="item.phone" v-html="formatText('נייח', item.phone)" />
				</v-col>
				<v-col cols="12" md="6">
					<p v-if="item.mobile" v-html="formatText('נייד', item.mobile)" />
				</v-col>
				<v-col cols="12" md="6">
					<p
						v-if="item.accountEmail"
						v-html="formatText(`דוא&quot;ל משתמש`, item.accountEmail)"
					/>
				</v-col>
				<v-col cols="12" md="6">
					<p
						v-if="item.email"
						v-html="formatText(`דוא&quot;ל לתקשורת`, item.email)"
					/>
				</v-col>
				<v-col cols="12" md="6">
					<p v-if="item.website" v-html="formatText('אתר', item.website)" />
				</v-col>
			</v-row>
		</v-container>
	</v-card>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				required: true,
			},
		},
		computed: {
			/**
			 * Format the bussness name.
			 *
			 * @return {string|null}
			 */
			title() {
				const item = this.item;
				let title = "";

				if (item.name) {
					title += item.name;
				}
				if (item.nameEn) {
					title += title.length ? ` - ${item.nameEn}` : item.nameEn;
				}

				return title.length ? title : null;
			},

			/**
			 * Format the address.
			 *
			 * @return {string|null}
			 */
			address() {
				const item = this.item;
				let address = "";

				if (item.address) {
					address += item.address;
				}
				if (item.city) {
					address += address.length ? `, ${item.city}` : item.city;
				}
				return address.length ? address : null;
			},
		},
		methods: {
			formatText(title, content) {
				return `<b>${title}: </b> ${content}`;
			},
		},
	};
</script>