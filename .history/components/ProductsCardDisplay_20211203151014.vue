<template>
  <div class="container">
    <h1>{{ productsSection.MainDescription }}</h1>
    <div class="productWrapper">
      <ProductPictures
        v-for="pictures in productsSection.ProductPictures"
        :key="pictures.ProductID"
        :pictures="pictures"
      />
        <div class="price">
     <ProductPrices
        v-for="prices in productsSection.ProductPrices"
        :key="prices.ProductID"
        :prices="prices"
      />

      <Counter />
        </div>
 
    </div>
    <ProductsIngredients
      v-for="products in productsSection.ProductDeclarations"
      :key="products"
      :products="products"
    />

    <!-- {{ productsSection}} -->
    <!-- <br>
<h6>product ingredients</h6>
{{ productsSection.ProductIngredients}}

<h6>product brand</h6>
{{ productsSection.Brand}}
<h6>prices</h6>
{{ productsSection.ProductPrices}} -->
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  components: { Counter },
  props: ["productsSection"],
};
</script>

<style scoped>
.container {
  border-radius: 24px;
  max-width: 1200px;
  padding: 1rem 3rem;
  background-color: white;
  display: flex;
  align-items: flex-start;
  box-shadow: 3px 3px 5px rgb(179, 179, 179, 0.5);
}
.container h1 {
    font-size: 2.4rem;
}
.productWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.price {
    display: flex;
    align-items: center;
    column-gap: 20px;
    padding-right: 30px;
}
</style>
