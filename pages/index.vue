<template>
  <div class="main-container">
    <div class="main-wrapper">
      <aside :class="!showFilter ? 'sidebar' : 'sidebar mobileSidebar'">
        <div class="scroller">
          <div class="deselect">
            <div class="deselectTitle">
              <h3>Reset filters</h3>
            </div>
            <button class="deselectButton" v-on:click="deselect()">x</button>
          </div>

          <div class="soorten">
            <h3>SOORTEN</h3>
            <ul>
              <li
                v-for="group in Object.keys(subGroups).slice(
                  0,
                  toggleLongSort ? undefined : 3
                )"
                :key="group"
                v-bind:class="{ selected: group === displayGroup }"
              >
                <span v-on:click="selectGroup(group)"
                  >{{ group
                  }}<span class="subgroup">({{ subGroups[group] }})</span></span
                >

                <button
                  class="deselectButton"
                  v-if="group === displayGroup"
                  v-on:click="selectGroup('all')"
                >
                  x
                </button>
              </li>
            </ul>
            <ul>
              <button
                class="showMore"
                v-on:click="toggleLongSort = !toggleLongSort"
              >
                {{ toggleLongSort ? "Toon minder" : "Toon meer" }}
              </button>
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
                v-for="brand in Object.keys(brandGroup).slice(
                  0,
                  toggleLongBrand ? undefined : 3
                )"
                :key="brand"
                v-bind:class="{ selected: brand === displayBrand }"
              >
                <span v-on:click="selectBrand(brand)">
                  {{ brand }}
                  <span class="subgroup"> ({{ brandGroup[brand] }})</span></span
                >

                <button
                  class="deselectButton"
                  v-if="brand === displayBrand"
                  v-on:click="selectBrand('all')"
                >
                  x
                </button>
              </li>
            </ul>
            <ul>
              <button
                class="showMore"
                v-on:click="toggleLongBrand = !toggleLongBrand"
              >
                {{ toggleLongBrand ? "Toon minder" : "Toon meer" }}
              </button>
            </ul>
          </div>
        </div>
        <button class="result" v-on:click="showFilter = !showFilter">
          Toon producten ({{ products.length }})
        </button>
      </aside>

      <main class="product-section">
        <div class="buttonSort">
          <button class="filter" v-on:click="showFilter = !showFilter">
            <span class="filterIcon"><FilterIcon /></span>
            Filter producten
          </button>
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
        </div>
        <h1>Alle producten</h1>
        <ProductsCardDisplay :products="products" />
      </main>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  mounted() {
    // console.log(process.env.API_KEY);
    // const API_KEY = process.env.API_KEY;
    // console.log("api", API_KEY);
  },
  data() {
    return {
      showFilter: false,
      toggleOffer: false,
      toggleLongSort: false,
      toggleLongBrand: false,
      sort: "alphabetical",
      displayGroup: "all",
      displayBrand: "all",
    };
  },
  async fetch({ store }) {
    const API_KEY = process.env.NUXT_ENV_API_KEY;
    const res = await axios.get(
      `https://a1-api.detailresult.nl/v1/assortmentcache/group/281/104?api_key=${API_KEY}`
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
  padding-top: 0px;
  background-color: white;
  width: 100vw;
  height: 100vh;
  min-height: 100%;
}
.main-container h1 {
  padding-top: 50px;
  text-align: center;
  margin-bottom: 10px;
}
.subgroup {
  color: gray;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
}
.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  width: 100%;
  height: auto;
}

.product-section {
  margin-top: 70px;
}
.sort-wrapper {
  width: 50%;
}
.sort {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  border-left: 0.5px solid lightgray;
}

#sort {
  width: 100%;
  text-align: center;
  background-color: white;
  padding-right: 20px;
  border: none;
  border-radius: 0;
}
.option {
  width: 100%;
}

.buttonSort {
  display: flex;
  background-color: white;
  width: 100%;
  justify-content: space-between;
  height: 50px;
  position: fixed;
  top: 60px;
}

.filter {
  display: flex;
  height: 50px;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border: none;
  border-bottom: 1px solid lightgray;
  border-right: 0.5px solid lightgray;
}
.filterIcon {
  margin-top: 2px;
  margin-right: 40px;
}
.selected {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
}
.result {
  position: absolute;
  bottom: 0px;
  display: flex;
  width: 100vw;
  height: 70px;
  border: none;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  background-color: hotpink;
  z-index: 2;
}
.sidebar {
  position: absolute;
  left: -1000px;
}
.mobileSidebar {
  position: fixed;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
  padding: 0px 20px 40px 20px;
  background-color: white;
  z-index: 1;
  left: 0;
}
.scroller {
  height: 74vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  overflow-x: hidden;
}
.offer-toggle {
  padding: 20px 0 20px 20px;
}

.showMore {
  background-color: white;
  margin: 0;
  margin-top: 12px;
  padding: 0;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid blue;
  color: blue;
  font-size: 16px;
}
aside {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  row-gap: 30px;
  width: 100%;
  line-height: 1.5;
}
aside ul {
  padding: 0px 0 0px 20px;
}
aside ul li {
  list-style: none;
}
.deselect {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.deselectTitle {
  padding-right: 14px;
}
.deselectButton {
  background-color: white;
  border: 1px solid lightgray;
  margin-right: 6px;
}

.deselectButton:hover {
  transform: scale(1.1);
}
.option {
  height: 30px;
  width: 160px;
  background-color: white;
}
#toggleOffer {
  margin-left: 30px;
}
.offers h3,
.soorten h3,
.merken h3 {
  margin-bottom: 10px;
}
.soorten,
.offers,
.merken,
.deselect {
  border-bottom: var(--colors-border);
  padding-bottom: 20px;
  margin-bottom: 20px;
}
@media only screen and (min-width: 500px) {
  .product-section {
    margin-left: 300px;
  }

  .main-container h1 {
    position: relative;
    margin-top: -50px;
  }
  .main-wrapper {
    flex-direction: row;
  }
  .sort-wrapper {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 60px;
    width: 100%;
  }
  .buttonSort {
    display: flex;
    background-color: white;
    width: 100%;
    justify-content: flex-end;
    position: relative;
    top: 0;
  }

  #sort,
  .sort {
    position: fixed;
    top: 60px;
    height: 30px;
    border-left: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    width: 200px;
  }
  .sort {
    margin-right: 20px;
  }

  .option {
    width: 100%;
  }
  .filter {
    display: none;
  }
  .mobileSidebar {
    display: none;
  }
  .sidebar {
    position: fixed;
    display: flex;
    width: 300px;
    height: 100vh;
    margin-top: 114px;
    background-color: white;
    padding-left: 20px;
    padding-right: 20px;
    left: auto;
    font-size: 0.8rem;
  }
  .result {
    display: none;
  }
  .aside {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    line-height: 1.5;
  }
  .aside ul {
    padding: 20px 0 20px 20px;
  }
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
    align-items: flex-start;
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
    line-height: 1.5;
  }
  .aside h3 {
    padding: 30px 0 10px 10px;
  }

  .aside ul li {
    list-style: none;
  }
  .sort {
    margin-right: 40px;
  }
}
</style>
