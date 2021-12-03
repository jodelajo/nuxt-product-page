<template>
    <div class="container">
        
       <h3>{{ productsSection.MainDescription }}</h3>
      
    <div class="pics">
  <ProductPictures 
    v-for="pictures in productsSection.ProductPictures"
    :key="pictures.ProductID"
    :pictures="pictures"
    />

    </div>

    <ProductPrices
    v-for="prices in productsSection.ProductPrices"
    :key="prices.ProductID"
    :prices="prices" 
    />
  





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
    export default {
        props: ['productsSection']
    }
   
</script>


<style  scoped>
.container {
    display: flex;
}
</style>