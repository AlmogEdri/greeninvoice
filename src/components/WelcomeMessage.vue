<template>
	<v-container class="mt-16">
		<h1>ברוכים הבאים {{ user.firstName }} {{ user.lastName }}</h1>
		<h4>עסקים ברשותך:</h4>
		<span class="mr-4" v-for="item in user.businesses" :key="item.id" v-text="item.name" />
	</v-container>
</template>

<script>
	import { mapState } from "vuex";

	export default {
		computed: {
			...mapState(["user"]),
		},
	};
</script>
