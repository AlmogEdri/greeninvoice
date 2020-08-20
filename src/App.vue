<template lang="pug">
	v-app
		Header
		v-main
			router-view
		drawer
</template>

<script>
	import Header from "./components/layout/Header";
	import Drawer from "./components/layout/Drawer";

	export default {
		components: {
			Header,
			Drawer,
		},
	};
</script>

<style lang="scss">
	@import "./assets/style/_varibals.scss";

	@font-face {
		font-family: bold;
		src: url("./assets/fonts/bold.woff");
	}
	@font-face {
		font-family: normal;
		src: url("./assets/fonts/normal.woff");
	}
	* {
		color: $main-text;
		font-family: "normal";
	}
	a:link {
		text-decoration: none;
	}
	.v-btn.v-size--default {
		font-size: 1rem !important;
		font-family: bold !important;
	}
	.v-sheet.v-card {
		margin: 0 auto;
	}
	.row {
		margin: 0;
	}
</style>
