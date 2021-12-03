<template>
    <div>
        
       <h3>{{ products.MainDescription }}</h3>
       <ProductsCard
       v-for="(product, index) in products"
       :key="index"
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