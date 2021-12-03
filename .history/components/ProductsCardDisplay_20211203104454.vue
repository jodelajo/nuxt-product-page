<template>
    <div>
        <h3>{{ product.MainDescription }}</h3>
        <p>{{ product.Brand }}</p>
         <p>{{ product.WebSubGroup }}</p>
    </div>
</template>

<script>
    export default {
        props: ['product']
    }
</script>
//brand
//WebSubGroup
//ProductOffers

<style  scoped>

</style>