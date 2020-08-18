<template lang="pug">
	h1 Almog
</template>

<script>
	import { mapState } from "vuex";
	export default {
		computed: {
			...mapState(['user']),
			message() {
				console.log(router)
			}
		}
	};
</script>

<style lang="scss"></style>
