<template>
  <div v-if="product" class="productCard">
    <div class="pics">
      <ProductPictures
        v-for="pictures in product.ProductPictures"
        :key="pictures.ProductID"
        :pictures="pictures"
        :altText="product.MainDescription"
      />
    </div>
    <section class="productWrapper">
      <header class="title">
        <h2>{{ product.MainDescription }}</h2>
        <h3>{{ product.Brand }}</h3>
      </header>
      <div class="price">
        <ProductPrices
          :prices="product.ProductPrices[0]"
          :offer="product.ProductOffers[0]"
        />
      </div>
      <div class="buttons">
        <IncDecButtons :product="product" :quantity="quantity" />
      </div>
    </section>
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
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: white;
  border: 1px solid lightgray;
}

.productCard h2 {
  font-size: 1.3rem;
  margin-top: 20px;
}

.title,
.price {
  text-align: center;
  color: rgb(49, 49, 49);
}

.pics {
  display: flex;
  justify-content: center;
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
    /* width: 260px;
    min-height: 400px; */
    padding: 0 3rem 1rem 3rem;
  }
  .productCard h2 {
    margin-top: 40px;
  }

  .ingredients {
    display: none;
  }
}

@media only screen and (min-width: 992px) {
  .productCard {
    width: 900px;

    flex-direction: row;
    margin: 100px auto;
  }
  .productWrapper {
    width: 50%;
  }

  .pics {
    margin-top: 20px;
    width: 50%;
  }
}
@media only screen and (min-width: 1200px) {
  .productCard {
    width: 1200px;
  }
}
</style>
