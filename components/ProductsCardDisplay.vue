<template>
  <div class="product-container">
     
    <ProductsCard
      v-for="product in products"
      :key="product.ProductID"
       :product="product"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
computed: mapState(["products"]),
}
</script>

