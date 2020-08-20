<template>
	<v-container class="mt-16">
		<user-info />
		<business-info
			class="mt-4"
			v-for="item in user.businesses"
			:key="item.id"
			:item="item"
		/>
	</v-container>
</template>

<script>
	import { mapState } from "vuex";
	import UserInfo from "../components/info/UserInfo";
	import BusinessInfo from "../components/info/BusinessInfo";

	export default {
		components: {
			UserInfo,
			BusinessInfo,
		},
		computed: {
			...mapState(["user"]),
		},
	};
</script>