<template>
    <div>
        
       <h3>{{ products }}</h3>
       <div
       v-for="(product, index) in products"
       :key="index"
      
        > {{product.ProductID}} </div>
    </div>
</template>

<script>
    export default {
        props: {
        products: {
            type: Object,
            default: () => {
            }
        },
    },
    }
   
</script>
//brand
//WebSubGroup
//ProductOffers

<style  scoped>

</style>