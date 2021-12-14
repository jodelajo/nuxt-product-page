<template>
  <div class="main-container">
    <div class="main-wrapper">
      <aside :class="!showFilter ? 'sidebar' : 'sidebar mobileSidebar'">
        <div class="scroller">
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
                <span>
                  <span v-on:click="selectBrand(brand)"> {{ brand }}</span>
                  <span class="subgroup"> ({{ brandGroup[brand] }})</span>
                  <button
                    v-if="brand === displayBrand"
                    v-on:click="selectBrand('all')"
                  >
                    x
                  </button>
                </span>
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
  display: flex;
  width: 50%;
}
.sort {
  height: 40px;
  width: 100%;
  padding-right: 20px;
}

#sort {
  width: 100%;
  height: 50px;
  text-align: center;
  /* color: white; */
  background-color: white;
  border: none;
  border-radius: 0;
}
.option {
  width: 100%;
}

.buttonSort {
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 50px;

  /* border-bottom: 1px solig hotpink; */
  position: fixed;
  top: 60px;
}

.filter {
  display: block;
  /* width: 50%; */
  height: 50px;
  padding-left: 20px;
  text-align: start;
  background-color: white;
  /* color: white; */
  border: none;
  /* border-radius: 3px; */
}
.selected {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  /* width: 270px; */
}
.result {
  position: absolute;
  bottom: 0px;
  display: flex;
  width: 100vw;
  height: 70px;
  /* border-radius: 24px; */
  /* margin: 0p 5vw 40px 5vw; */
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
  /* overflow: hidden; */
}
.scroller {
  height: 100%;
  width: 100%;
  padding-top: 30px;
  overflow-x: hidden;
  z-index: 1;
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
  margin-top: 40px;
  /* height: 667px; */
  line-height: 1.5;
}
aside h3 {
  /* padding-left: 10px; */
  /* border-bottom: var(--colors-border); */
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
  /* border-bottom: var(--colors-border); */
  /* width: 100%; */
  /* height: 30px; */
  /* min-height: 100%; */
}
.deselectTitle {
  padding-right: 14px;
  /* padding-bottom: 20px; */
  /* height: 100%; */
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
  /* width: 250px; */
  padding-bottom: 20px;
  margin-bottom: 20px;
}
@media only screen and (min-width: 500px) {
  .product-section {
    margin-left: 300px;
  }

  .main-container h1 {
    position: relative;
  }
  .main-wrapper {
    flex-direction: row;
  }
  .sort-wrapper {
    display: flex;
    /* align-items: flex-end; */
    justify-content: flex-end;
    padding-bottom: 60px;

    width: 100%;
  }
  .buttonSort {
    display: flex;
    background-color: white;
    width: 100%;
    /* align-items: flex-end; */
    justify-content: flex-end;
    position: relative;
    top: 0;
  }

  #sort,
  .sort {
    position: fixed;
    top: 70px;
    height: 30px;
    border-left: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    width: 200px;
    /* margin-top: 10px; */
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
  .selected {
    /* width: 280px; */
  }
  /* 
  position: fixed;
    left: auto;
    top: 100px; */
  .sidebar {
    position: fixed;
    display: flex;
    width: 300px;
    height: 100vh;
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
    /* padding-top: 100px; */
    /* padding: 100px 30px 0 30px; */
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    /* width: 240px; */
    line-height: 1.5;
  }
  .aside ul {
    padding: 20px 0 20px 20px;
  }
  .soorten,
  .offers,
  .merken,
  .deselect {
    /* width: 240px; */
  }
  /* .soorten h3,
  .offers h3,
  .merken h3,
  .deselect {
    width: 200px;
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
    /* justify-content: center; */
    align-items: flex-start;
    /* width: 100%; */
  }
  .sidebar {
    position: fixed;
    left: auto;
    top: 100px;
    min-width: 260px;
    width: 260px;

    font-size: 1rem;
    /* margin-left: 100px; */
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
}
</style>
