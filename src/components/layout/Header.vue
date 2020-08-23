<template>
	<v-app-bar color="transparent" fixed flat>
		<v-container>
			<v-toolbar-title>
				<v-btn class="pa-0" color="transparent" elevation="0">
					<v-img src="../../assets/images/green_logo.svg" contain="contain" />
				</v-btn>
			</v-toolbar-title>

			<v-spacer />
			<Buttons :row="true" />
		</v-container>
	</v-app-bar>
</template>

<script>
	import Buttons from "./NavButtons";

	export default {
		components: {
			Buttons,
		},
	};
</script>

<style lang="scss" scoped>
	@import "../../assets/style/_mixins.scss";
	.v-app-bar {
		&.v-app-bar--is-scrolled {
			background: rgba(white, 0.6) !important;
		}
		.container {
			align-items: center;
		}
	}
	.v-image {
		height: 64px;
		width: 200px;
		@include sm {
			width: 150px;
		}
	}
	.container {
		display: flex;
	}
</style>
