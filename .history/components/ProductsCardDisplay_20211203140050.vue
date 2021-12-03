<template>
    <div class="container">
        <div class="productWrapper">
 <h3>{{ productsSection.MainDescription }}</h3>
      
   
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
 </div>
      





      <!-- {{ productsSection}}
<br>
<h6>product declaration</h6>
{{ productsSection.ProductDeclarations}}
<h6>product brand</h6>
{{ productsSection.Brand}}
<h6>prices</h6>
{{ productsSection.ProductPrices}} -->

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

.productWrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
</style>