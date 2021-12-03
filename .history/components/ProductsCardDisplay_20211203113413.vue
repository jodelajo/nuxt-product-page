<template>
    <div>
        
       <h3>{{ product }}</h3>
       <ProductsCard
       v-for="product in product"
       :key="product.ProductID"
       :product="product"
        />
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