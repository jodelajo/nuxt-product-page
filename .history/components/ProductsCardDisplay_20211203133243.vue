<template>
    <div>
        
       <h3>{{ productsSection.MainDescription }}</h3>
       <!-- <ProductsCard
       v-for="(product, index) in products"
       :key="index"
       :product="product"
        /> -->
    <div class="pics">
  <ProductPictures 
    v-for="pictures in productsSection.ProductPictures"
    :key="pictures.ProductID"
    :pictures="pictures"
    />

    </div>
  





      {{ productsSection}}
<br>
<h6>product declaration</h6>
{{ productsSection.ProductDeclarations}}
<h6>product brand</h6>
{{ productsSection.Brand}}
<h6>pictures</h6>
{{ productsSection.ProductPictures}}

    </div>
</template>

<script>
    export default {
        props: ['productsSection']
    }
   
</script>


<style  scoped>
.pics {
   
</style>