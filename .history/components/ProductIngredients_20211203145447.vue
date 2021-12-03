<template>
    <div class="ingredients">
        {{ingredients.Text}}
    </div>
</template>

<script>
    export default {
        props: ['ingredients']
    }
</script>

<style scoped>
.ingredients {
    font-size: 0.8rem;
}
</style>