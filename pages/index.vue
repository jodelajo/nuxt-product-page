<template>
  <div class="main-container">
    <h1>Alle producten</h1>
    <div class="main-wrapper">
      <aside>
        <div class="deselect">
          <div class="deselectTitle">
            <h3>Reset filters</h3>
          </div>
          <div class="deselectButton">
            <button v-on:click="deselect()">x</button>
          </div>
        </div>

        <div class="soorten">
          <h3>SOORTEN</h3>
          <ul v-if="!toggleLong">
            <li
              v-for="group in Object.keys(subGroups).slice(0, 3)"
              :key="group"
              v-bind:class="{ selected: group === displayGroup }"
            >
              <span v-on:click="selectGroup(group)">{{ group }}</span>
              <span class="subgroup">({{ subGroups[group] }})</span>
              <button
                v-if="group === displayGroup"
                v-on:click="selectGroup('all')"
              >
                x
              </button>
            </li>
          </ul>
          <ul>
            <a href="">Toon meer</a>
          </ul>
        </div>
        <div class="offers">
          <h3>AANBIEDINGEN</h3>
          <div>
            <input
              v-model="toggleOffer"
              type="checkbox"
              id="toggleOffer"
              name="toggleOffer"
            />
            <label for="toggleOffer">alleen aanbiedingen</label>
          </div>
        </div>
        <div class="merken">
          <h3>MERKEN</h3>
          <ul>
            <li
              v-for="brand in Object.keys(brandGroup).slice(0, 10)"
              :key="brand"
              v-on:click="selectBrand(brand)"
            >
              {{ brand }}
              <span class="subgroup"> ({{ brandGroup[brand] }})</span>
            </li>
          </ul>
          <ul>
            <a href="">Toon meer</a>
          </ul>
        </div>
      </aside>
      <main class="product-container">
        <div class="sort-wrapper">
          <div class="sort">
            <select v-model="sort" name="sort" id="sort">
              <option class="option" value="alphabetical">Sorteer op</option>
              <option class="option" value="alphabetical">A-Z</option>
              <option class="option" value="priceASC">Prijs oplopend</option>
              <option class="option" value="priceDESC">Prijs aflopend</option>
            </select>
          </div>
        </div>
        <ProductsCardDisplay :products="products" />
      </main>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      toggleOffer: false,
      toggleLong: false,
      sort: "alphabetical",
      displayGroup: "all",
      displayBrand: "all",
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
      console.log(group);
      this.displayGroup = group;
    },
    selectBrand(brand) {
      this.displayBrand = brand;
    },
    deselect() {
      this.displayBrand = "all";
      this.displayGroup = "all";
      this.toggleOffer = false;
    },
  },
  computed: {
    productFilter() {
      if (this.toggleOffer) {
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
    brandFilter() {
      if (this.displayBrand === "all") {
        const isAProduct = (item) => {
          if (item.ProductID) {
            return true;
          }
        };
        return isAProduct;
      } else {
        const belongsToSelectedBrand = (item) => {
          return item.Brand === this.displayBrand;
        };
        return belongsToSelectedBrand;
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
          .filter(this.brandFilter)
          .filter(this.groupFilter)
          .filter(this.productFilter)
          .sort(this.sortDirection);
      },
      subGroups(state) {
        let groups = {};
        for (const product of state.products) {
          for (const group of product.WebSubGroups) {
            if (!groups[group.Description]) {
              groups[group.Description] = 1;
            } else if (groups[group.Description]) {
              groups[group.Description]++;
            }
          }
        }
        // sorteer op groepen met de meeste producten
        const sortedGroups = Object.fromEntries(
          Object.entries(groups).sort(([, a], [, b]) => b - a)
        );
        return sortedGroups;
      },
      brandGroup(state) {
        let brands = {};
        for (const product of state.products) {
          if (!brands[product.Brand] && product.Brand !== null) {
            brands[product.Brand] = 1;
          } else if (brands[product.Brand]) {
            brands[product.Brand]++;
          }
        }
        const sortedBrands = Object.fromEntries(
          Object.entries(brands).sort(([, a], [, b]) => b - a)
        );
        return sortedBrands;
      },
    }),
  },
};
</script>

<style>
.main-container {
  margin: 0 auto;
  padding-top: 30px;
  background-color: white;
}
.main-container h1 {
  text-align: center;
}
.subgroup {
  color: gray;
}

.main-wrapper {
  display: flex;
  align-items: flex-start;
}
.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  width: 100%;
  height: auto;
}
.sort-wrapper {
  display: flex;
  width: 100%;
  padding: 10px 36px 0 0;
  justify-content: flex-end;
}
.selected {
  font-weight: 700;
}
#sort {
  height: 30px;
  width: 160px;
  /* border: var(--colors-border); */
}
.offer-toggle {
  padding: 20px 0 20px 20px;
}
aside {
  padding-top: 100px;
  /* padding: 100px 30px 0 30px; */
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  row-gap: 30px;
  width: 24%;
  line-height: 1.5;
}
aside h3 {
  padding-left: 10px;
  /* border-bottom: var(--colors-border); */
}
aside ul {
  padding: 20px 0 20px 20px;
}
aside ul li {
  list-style: none;
}
.deselect {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: var(--colors-border); */
  width: 100%;
  height: 30px;
  min-height: 100%;
}
.deselectTitle {
  padding-right: 14px;
  padding-bottom: 20px;
  /* height: 100%; */
}
.deselectButton {
  width: 30px;
  height: 30px;
}
.option {
  height: 30px;
  width: 160px;
  background-color: white;
}
#toggleOffer {
  margin-left: 30px;
}
.offers h3 {
  margin-bottom: 20px;
}
.soorten h3,
.offers h3,
.merken h3,
.deselect {
  border-bottom: var(--colors-border);
}
@media only screen and (min-width: 800px) {
  /* .product-container {
    width: 800px;
  } */
}
@media only screen and (min-width: 1200px) {
  .main-container {
    width: 1200px;
  }
  .main-wrapper {
    display: flex;
    align-items: flex-start;
  }
  .product-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
  }
  .sort-wrapper {
    display: flex;
    height: 60px;
    width: 100%;
    padding: 10px 50px 0 0;
    justify-content: flex-end;
  }

  #sort {
    height: 30px;
    width: 140px;
  }
  .offer-toggle {
    padding: 20px 0 20px 20px;
    border-top: 1px solid rgb(73, 73, 73);
  }
  .aside {
    padding: 50px 10px 0 30px;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    row-gap: 30px;
    width: 300px;
    background-color: tomato;
    line-height: 1.5;
  }
  .aside h3 {
    padding: 30px 0 10px 10px;
  }
  /* .aside ul {
    padding: 20px 0 0 20px;
    border-top: 1px solid rgb(73, 73, 73);
  } */
  .aside ul li {
    list-style: none;
  }
}
</style>
