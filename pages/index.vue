<template>
  <div class="main-container">
    <main class="product-container">
      <h1>Alle producten</h1>
      <div class="">
        <input v-model="toggle" type="checkbox" id="toggle" name="toggle" />
        <label for="toggle">{{ toggle }}</label>
        <select v-model="sort" name="sort" id="sort">
          <option value="alphabetical">Sorteer op</option>
          <option value="alphabetical">A-Z</option>
          <option value="priceASC">Prijs oplopend</option>
          <option value="priceDESC">Prijs aflopend</option>
        </select>
      </div>
      <div class="wrapper">
        <ProductsCardDisplay :products="products" />
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      toggle: false,
      sort: "alphabetical",
    };
  },
  async fetch({ store }) {
    const res = await axios.get(
      "https://a1-api.detailresult.nl/v1/assortmentcache/group/281/104?api_key=6d3a42a3-6d93-4f98-838d-bcc0ab2307fd"
    );
    store.commit("init", res.data);
  },
  computed: {
    productFilter() {
      if (this.toggle) {
        const hasProductOffers = (item) => {
          return item.ProductOffers.length !== 0;
        };
        return hasProductOffers;
      } else {
        const isAProduct = (item) => {
          if (item.ProductID) {
            return true;
          }
        };
        return isAProduct;
      }
    },
    sortDirection() {
      switch (this.sort) {
        case "alphabetical":
          return (a, b) => {
            if (a.MainDescription < b.MainDescription) {
              return -1;
            }
            if (a.MainDescription > b.MainDescription) {
              return 1;
            }
            return 0;
          };
        case "priceASC":
          return (a, b) => {
            if (a.ProductPrices[0].Price < b.ProductPrices[0].Price) {
              return -1;
            }
            if (a.ProductPrices[0].Price > b.ProductPrices[0].Price) {
              return 1;
            }
            return 0;
          };
        case "priceDESC":
          return (a, b) => {
            if (b.ProductPrices[0].Price < a.ProductPrices[0].Price) {
              return -1;
            }
            if (b.ProductPrices[0].Price > a.ProductPrices[0].Price) {
              return 1;
            }
            return 0;
          };
        default:
          return (a, b) => {
            if (a.MainDescription < b.MainDescription) {
              return -1;
            }
            if (a.MainDescription > b.MainDescription) {
              return 1;
            }
            return 0;
          };
      }
    },
    ...mapState({
      products(state) {
        console.log(this.productFilter);
        return state.products
          .filter(this.productFilter)
          .sort(this.sortDirection);
      },
    }),
  },
};
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-container {
  width: 300px;
  display: flex;
  justify-content: center;

  gap: 20px;
  flex-wrap: wrap;
}
.wrapper {
  display: flex;
  flex-direction: row;
}
.product-container h1 {
  margin-top: 80px;
  text-align: center;
}

@media only screen and (min-width: 800px) {
  .product-container {
    width: 800px;
  }
}
@media only screen and (min-width: 1200px) {
  .product-container {
    width: 1200px;
  }
}
</style>
