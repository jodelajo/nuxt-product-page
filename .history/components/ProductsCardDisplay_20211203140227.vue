<template>
    <div class="container">
 <h3>{{ productsSection.MainDescription }}</h3>
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
.container {
    border: 1px solid black;
}
.productWrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
</style>