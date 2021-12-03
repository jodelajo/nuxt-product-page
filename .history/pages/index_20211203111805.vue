<template>
 <div>
<ProductsCardDisplay 
v-for="(product, index ) in products"
:key="index"
:product="product"
:data-index="index"

/>
<!-- {{ products[0]}} -->
<!-- {{ products[0].ProductID}} -->
 </div>

</template>

<script>
 export default {
   methods: {
    
   },
        data(){
            return {
                products: []
            }
        },
        async fetch() {
            this.products = await fetch('https://a1-api.detailresult.nl/v1/assortmentcache/group/281/104?api_key=6d3a42a3-6d93-4f98-838d-bcc0ab2307fd').then((res) => res.json())
        }
    }
</script>

<style>
</style>