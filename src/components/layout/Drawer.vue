<template>
	<v-navigation-drawer v-model="model" app temporary>
		<Buttons />
	</v-navigation-drawer>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	import Buttons from "./NavButtons";

	export default {
		components: {
			Buttons,
		},
		computed: {
			...mapState(["drawer"]),

			model: {
				get() {
					return this.drawer;
				},
				set(val) {
					this.setDrawer(val);
				},
			},
		},
		methods: {
			...mapMutations({ setDrawer: "drawer" }),
		},
	};
</script>

<style lang="scss"></style>
