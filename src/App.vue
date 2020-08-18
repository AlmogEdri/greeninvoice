<template lang="pug">
	v-app
		Header
		v-main
			router-view
</template>

<script>
	import Header from "./components/layout/Header";
	export default {
		components: {
			Header
		}
	};
</script>

<style lang="scss">
@font-face {
  font-family: bold;
  src: url('./assets/fonts/bold.woff');
}
@font-face {
  font-family: normal;
  src: url('./assets/fonts/normal.woff');
}
* {
	font-family: 'normal';
}
.v-btn.v-size--default {
	font-size: 1rem !important;
	font-family: bold !important;
}
</style>
