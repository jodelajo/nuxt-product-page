<template>
  <div class="container">
    <div class="title">
      <h1>{{ products.MainDescription }}</h1>
    </div>

    <h5>{{ products.Brand }}</h5>
    <div class="productWrapper">
      <ProductPictures
        v-for="pictures in products.ProductPictures"
        :key="pictures.ProductID + '-Url'"
        :pictures="pictures"
      />

      <ProductPrices
        v-for="prices in products.ProductPrices.slice(0,1)"
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
  box-shadow: 3px 5px 5px rgba(116, 78, 78, 0.1);
}

.container h1 {
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: -20px;
}

.container h5 {
  color: grey;
}

.ingredients {
  display: none;
}
.productWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
