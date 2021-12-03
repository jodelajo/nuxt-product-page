<template>
 <div>
<ProductsCard
v-for="products in allProducts"
:key="products.ProductID"
:products="products"

/>
{{ allProducts[0]}}
<br>
<h6>product declaration</h6>
{{ allProducts[0].ProductDeclarations}}
<h6>contact information</h6>
{{ allProducts[0].ProductDeclarations.ContactInformation.ContactGegevens}}
<h6>pictures</h6>
{{ allProducts[0].ProductPictures}}

<h6>prices</h6>
{{ allProducts[0].ProductPrices}}
<h6>logo's</h6>
{{ allProducts[0].Logos}}
 </div>

</template>

<script>
 export default {
   methods: {
    
   },
        data(){
            return {
                allProducts: []
            }
        },
        async fetch() {
            this.allProducts = await fetch('https://a1-api.detailresult.nl/v1/assortmentcache/group/281/104?api_key=6d3a42a3-6d93-4f98-838d-bcc0ab2307fd').then((res) => res.json())
        }
    }
</script>

<style>
</style>