<template>
    <div>
        
       <h3>{{ products }}</h3>
       <ProductsCard
       v-for="product in products"
       :key="product.ProductID"
       :product="product"
        />
    </div>
</template>

<script>
    export default {
        props: ['products']
    }
   
</script>
//brand
//WebSubGroup
//ProductOffers

<style  scoped>

</style>