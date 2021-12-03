<template>
    <div>
        
       <h3>{{ productsSection.MainDescription }}</h3>
       <!-- <ProductsCard
       v-for="(product, index) in products"
       :key="index"
       :product="product"
        /> -->






      {{ productsSection}}
<br>
<h6>product declaration</h6>
{{ productsSection.ProductDeclarations}}
<!-- <h6>contact information</h6>
{{ allProducts[0].ProductDeclarations.ContactInformation}}
<h6>pictures</h6>
{{ allProducts[0].ProductPictures}} -->

    </div>
</template>

<script>
    export default {
        props: ['productsSection']
    }
   
</script>


<style  scoped>

</style>