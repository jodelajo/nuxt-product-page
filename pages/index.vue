<template>
  <div class="main-container">
    <main class="product-container">
      <div>
        <ul>
          <li
            v-for="group in Object.keys(subGroups)"
            :key="group"
            v-on:click="selectGroup(group)"
          >
            {{ group }} : {{ subGroups[group] }}
          </li>
        </ul>
      </div>
      <div>
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
      displayGroup: "all",
    };
  },
  async fetch({ store }) {
    const res = await axios.get(
      "https://a1-api.detailresult.nl/v1/assortmentcache/group/281/104?api_key=6d3a42a3-6d93-4f98-838d-bcc0ab2307fd"
    );
    store.commit("init", res.data);
  },
  methods: {
    selectGroup(group) {
      console.log("hallo", this);
      this.displayGroup = group;
    },
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
    groupFilter() {
      if (this.displayGroup === "all") {
        const isAProduct = (item) => {
          if (item.ProductID) {
            return true;
          }
        };
        return isAProduct;
      } else {
        const belongsToSelectedGroup = (item) => {
          return item.WebSubGroups.some((group) => {
            return group.Description === this.displayGroup;
          });
        };
        return belongsToSelectedGroup;
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
        return state.products
          .filter(this.groupFilter)
          .filter(this.productFilter)
          .sort(this.sortDirection);
      },
      subGroups(state) {
        // let groups = {
        //   "Overige koekjes": 68,
        //   "Biscuits": 7,
        // }
        let groups = {};
        for (const product of state.products) {
          // Als we een nieuwe subgroup tegenkomen, voeg het toe aan het object met description als key
          // als de subgroep al in het object zit, dan doen we subgroep + 1
          // groups = groups.concat(product.WebSubGroups)
          for (const group of product.WebSubGroups) {
            if (!groups[group.Description]) {
              groups[group.Description] = 1;
            } else if (groups[group.Description]) {
              groups[group.Description]++;
            }
          }
        }
        console.log(groups);
        // sorteer op groepen met de meeste producten
        const sortedGroups = Object.fromEntries(
          Object.entries(groups).sort(([, a], [, b]) => b - a)
        );
        console.log(sortedGroups);
        return sortedGroups;
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
