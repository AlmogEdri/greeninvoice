<template lang="pug">
	v-container
		v-app-bar(app flat color="transparent")
			v-toolbar-title
				v-btn( color="transparent")
					v-img(src="../../assets/images/green_logo.svg" contain)
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped>
	.v-app-bar.v-app-bar--is-scrolled {
		background: rgba(white, .6) !important;
	}
	.v-image {
		height: 64px;
		width: 200px;
	}
</style>
