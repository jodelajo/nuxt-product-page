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
              :prices="product.ProductPrices[0]"
              :offer="product.ProductOffers[0]"
            />
          </div>
        </section>
      </NuxtLink>

      <div class="buttons">
        <IncDecButtons
          :product="product"
          :quantity="quantity"
          :shoppingcart="shoppingcart"
        />
      </div>
    </article>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["product", "shoppingcart"],

  computed: {
    ...mapState({
      quantity: function (state) {
        return (
          state.shoppingcart.find(
            (item) => item.ProductID == this.product.ProductID
          )?.quantity || 0
        );
      },
    }),
  },
};
</script>

<style scoped>
.productCard {
  border-radius: 4px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 1rem 1rem;
  background-color: white;
  border: var(--colors-border);
  column-count: 3;
}

.productCard h2 {
  font-size: 1.1rem;
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
  font-size: 0.9rem;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

@media only screen and (min-width: 700px) {
  .productCard {
    padding: 0 3rem 1rem 3rem;
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
@media only screen and (min-width: 992px) {
  .productCard {
    max-width: 260px;
    /* height: 400px; */
    padding: 0 3rem 1rem 3rem;
  }
}
</style>
