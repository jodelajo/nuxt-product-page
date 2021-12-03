<template>
  <div class="container">
    <!-- {{products}} -->
    <h1>{{ products.MainDescription }}</h1>
    <h3>{{ products.Brand }}</h3>
    <div class="productWrapper">
      <ProductPictures
        v-for="pictures in products.ProductPictures"
        :key="pictures.ProductID + '-Url'"
        :pictures="pictures"
      />

      <ProductPrices
        v-for="prices in products.ProductPrices"
        :key="prices.ProductID + '-price'"
        :prices="prices"
      />

      <!-- <Counter /> -->
    </div>
    <div class="ingredients">
      <ProductsIngredients
        v-for="(products, index) in products.ProductDeclarations"
        :key="index"
        :products="products"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>

<style scoped>
.container {
  border-radius: 24px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 1rem 1rem;
  background-color: white;
  column-count: 3;
  box-shadow: 3px 3px 5px rgba(92, 7, 7, 0.5);
}

.container h1 {
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: -20px;
}
.ingredients {
  display: none;
}
.productWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* align-items: baseline;
  justify-content: space-between; */
}

@media only screen and (min-width: 700px) {
  .container {
    width: 260px;

    min-height: 400px;
    padding: 0 3rem 1rem 3rem;
  }
  .container h1 {
    margin-top: 40px;
  }
  .productWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ingredients {
    display: none;
  }
}
</style>
