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
export default {
  props: ["products"],
};
</script>
