<template>
    <div>
        
       <p>{{ products.ProductIngredients[0].Text}}<p>
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