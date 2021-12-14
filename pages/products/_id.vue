<template>
  <div v-if="product" class="productCard">
    <article>
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
      <div class="buttons">
        <IncDecButtons :product="product" :quantity="quantity" />
      </div>
    </article>
  </div>
  <div v-else class="container padding">page not found</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["products"],
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
    product() {
      return this.$store.getters.getProductById(this.$route.params.id);
    },
  },
};
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
