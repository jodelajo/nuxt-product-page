<template>
  <article class="productCard">
    <header class="title">
      <h2>{{ products.MainDescription }}</h2>
    </header>

    <h3>{{ products.Brand }}</h3>
    <section class="productWrapper">
      <ProductPictures
        v-for="pictures in products.ProductPictures"
        :key="pictures.ProductID + '-Url'"
        :pictures="pictures"
        :altText="products.MainDescription"
      />

      <ProductPrices
        v-for="prices in products.ProductPrices.slice(0,1)"
        :key="prices.ProductID + '-price'"
        :prices="prices"
      />

    </section>
   
  </article>
</template>

<script>
export default {
  props: ["products"],
};
</script>

<style scoped>
.productCard {
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

.productCard h2 {
  font-size: 1.3rem;
  margin-top: 20px;
}

.productCard h3 {
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
  .productCard {
    width: 260px;
    min-height: 400px;
    padding: 0 3rem 1rem 3rem;
  }
  .productCard h2 {
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
