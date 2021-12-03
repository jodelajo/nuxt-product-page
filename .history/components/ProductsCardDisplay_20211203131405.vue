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
{{ allProducts[0].ProductDeclarations}}
<h6>contact information</h6>
{{ allProducts[0].ProductDeclarations.ContactInformation}}
<h6>pictures</h6>
{{ allProducts[0].ProductPictures}}

<h6>prices</h6>
{{ allProducts[0].ProductPrices}}
<h6>logo's</h6>
{{ allProducts[0].Logos}}
<h6>Websub group</h6>

{{ allProducts[0].WebSubGroups}}
<h6>Nutrition</h6>

{{ allProducts[0].Nutrition}}


<h6>product offers</h6>

{{ allProducts[0].ProductOffers}} 
    </div>
</template>

<script>
    export default {
        props: ['productsSection']
    }
   
</script>


<style  scoped>

</style>