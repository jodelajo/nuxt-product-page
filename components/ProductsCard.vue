<template>
  <div class="productCard">
  
    <!-- <NuxtLink :to="`/products/${products.ProductID}`"> -->
    <article>
      <header class="title">
        <h2>{{ product.MainDescription }}</h2>
      </header>

      <h3>{{ product.Brand }}</h3>
      <section class="productWrapper">
        <ProductPictures
          v-for="pictures in product.ProductPictures"
          :key="pictures.ProductID + '-Url'"
          :pictures="pictures"
          :altText="product.MainDescription"
        />

        <div class="price">
          <ProductPrices
            v-for="prices in product.ProductPrices.slice(0, 1)"
            :key="prices.ProductID + '-price'"
            :prices="prices"
          />
        </div>
        <div class="buttons">
          <IncDecButtons
            :product="product"
           />
        </div>
      </section>
    </article>
    <!-- </NuxtLink> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  
    props: ['product'],
    // ...mapState(["products"])
  

  methods: {
    ...mapMutations(["addItem"]),
    ...mapMutations(["increment"]),
    ...mapMutations(["decrement"]),
  },
}
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

.title,
.price {
  color: rgb(49, 49, 49);
}

a {
  text-decoration: none;
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

.buttons {
  display: flex;
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
