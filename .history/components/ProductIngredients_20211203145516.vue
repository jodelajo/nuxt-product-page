<template>
    <p class="ingredients">
        {{ingredients.Text}}
    </p>
</template>

<script>
    export default {
        props: ['ingredients']
    }
</script>

<style scoped>
.ingredients {
    font-size: 10px;
}
</style>