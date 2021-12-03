<template>
    <div>
        
       <h3>{{ products.MainDescription }}</h3>
       <div
       v-for="(product, index) in products"
       :key="index"
       :product="product"
        /> {{product}} </div>
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