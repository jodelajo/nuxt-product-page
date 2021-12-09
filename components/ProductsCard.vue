<template>
  <div class="productCard">
    <article>
      <NuxtLink :to="`/products/${product.ProductID}`">
      <header class="title">
        <h2>{{ product.MainDescription }}</h2>
      </header>

      <h3>{{ product.Brand }}</h3>
      <section class="productWrapper">
        <ProductPictures
          v-for="pictures in product.ProductPictures"
          :key="pictures.ProductID"
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
         </section>
         </NuxtLink>
         
        <div class="buttons">
          <IncDecButtons
            :product="product"
           />
        </div>
     
    </article>
   
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
  border-radius: 4px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 1rem 1rem;
  background-color: white;
  column-count: 3;
  box-shadow: 2px 2px 3px rgba(161, 161, 161, 0.1);
}

.productCard h2 {
  font-size: 1.3rem;
  margin-top: 5px;
}

.title,
.price {
  padding-top: 10px;
  color: rgb(49, 49, 49);
  font-size: 30px;
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
  padding: 10px 0;
  display: flex;
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
    /* margin-top: 40px; */
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
