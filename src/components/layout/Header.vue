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

<style lang="scss">
	@import "../../assets/style/_mixins.scss";

	.v-app-bar {
		&.v-app-bar--is-scrolled {
			background: rgba(white, 0.6) !important;
		}
		.container {
			align-items: center;
		}
	}
	.v-toolbar__title {
		.v-image {
			height: 64px;
			width: 200px;

			@include sm {
				height: 54px;
				width: 150px;
			}
		}
		.v-responsive__sizer {
			height: 64px;
			padding-bottom: none;

			@include sm {
				height: 54px;
			}
		}
	}
	.container {
		display: flex;
	}
</style>
