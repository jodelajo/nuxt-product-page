<template>
    <div>
        
       <h3>{{ products.ProductIngredients[0]}}</h3>
       <!-- <div
       v-for="(product, index) in products"
       :key="index"
      
        > {{product}} </div> -->
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