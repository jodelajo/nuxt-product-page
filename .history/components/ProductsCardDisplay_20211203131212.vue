<template>
    <div>
        
       <h3>{{ productsSection.MainDescription }}</h3>
       <!-- <ProductsCard
       v-for="(product, index) in products"
       :key="index"
       :product="product"
        /> -->
    </div>
</template>

<script>
    export default {
        props: ['productsSection']
    }
   
</script>


<style  scoped>

</style>