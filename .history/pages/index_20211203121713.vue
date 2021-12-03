<template>
 <div>
<ProductsCard
v-for="products in allProducts"
:key="products.ProductID"
:products="products"

/>
{{ allProducts[0]}}
<br>
{{ allProducts[0].ProductDeclarations}}
<!-- {{ products[0].ProductID}} -->
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