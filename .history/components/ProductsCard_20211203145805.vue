<template>
    
        
       <p class="ingredients">{{ products.ProductIngredients[0].Text}}</p>
       <!-- <div
       v-for="(product, index) in products"
       :key="index"
      
        > {{product}} </div> -->
  
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
.ingredients {
    font-size: 10px;
}
</style>