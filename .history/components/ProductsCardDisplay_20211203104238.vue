<template>
    <div>
        <h3>{{ product.MainDescription }}</h3>
        <p>{{ product[0]}}</p>
    </div>
</template>

<script>
    export default {
        props: ['product']
    }
</script>

<style  scoped>

</style>