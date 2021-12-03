<template>
	<div class="button-area">
		<button @click="counter--" class="dec-button" d:disabled="counter <= 0">-</button>
		{{ counter }}
		<button @click="counter++" class="inc-button">+</button>
	</div>
</template>

<script>

export default {

	name: "Counter",
	data() {

		return {
			counter: 0,
		};
	},
};
</script>

<style scoped>
</style>