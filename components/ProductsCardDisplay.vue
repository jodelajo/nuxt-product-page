<template>
  <div class="container">

    <ProductsCard
    v-for="products in productsSection"
      :key="products.ProductID"
      :products="products"
    
    />
   
    </div>

</template>

<script>
export default {
  props: ["productsSection"],
};
</script>

<style scoped>
</style>
