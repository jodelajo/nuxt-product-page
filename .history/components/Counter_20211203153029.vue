<template>
	<div class="button-area">
		<button @click="counter--" class="dec-button" disabled="count">-</button>
		{{ counter }}
		<button @click="counter++" class="inc-button">+</button>
	</div>
</template>

<script>
const count = ()=> {
    if (this.counter < 0) {
        return true
    }
}
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