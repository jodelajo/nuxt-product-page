<template>
    <div class="container">
 <h1>{{ productsSection.MainDescription }}</h1>
        <div class="productWrapper"> 
  <ProductPictures 
    v-for="pictures in productsSection.ProductPictures"
    :key="pictures.ProductID"
    :pictures="pictures"
    />

    <ProductPrices
    v-for="prices in productsSection.ProductPrices"
    :key="prices.ProductID"
    :prices="prices" 
    />
  
  <Counter />

  <ProductIngredients
  v-for="(ingredients, index) in productsSection.ProductIngredients"
    :key="index"
    :ingredients="ingredients" 
  />
 </div>
      





      <!-- {{ productsSection}} -->
<br>
<h6>product ingredients</h6>
{{ productsSection.ProductIngredients}}

<h6>product brand</h6>
{{ productsSection.Brand}}
<h6>prices</h6>
{{ productsSection.ProductPrices}}

    </div>
</template>

<script>
import Counter from './Counter.vue'
    export default {
  components: { Counter },
        props: ['productsSection']
    }
   
</script>


<style  scoped>
.container {
    border: 1px solid black;
     width: 1200px;
     background-color: white;
     display: flex;
     align-items: flex-start;
}
.productWrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
</style>