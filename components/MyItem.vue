<template>
  <div class="item-container">
    <section class="productWrapper">
      <div class="left">
        <div class="title">
          <h4>{{ item.MainDescription }}</h4>
        </div>
        <div class="price">
          <h5>prijs per stuk</h5>
          <ProductPrices
            v-for="prices in item.ProductPrices.slice(0, 1)"
            :key="prices.ProductID + '-price'"
            :prices="prices"
          />
        </div>
      </div>

      <div class="right">
        <h5>Aantal items</h5>
        <IncDecButtons :product="item" :quantity="item.quantity" />

        <div class="totalPrice">
          <h5>totaalprijs</h5>
          <CartPrices
            v-for="prices in item.ProductPrices.slice(0, 1)"
            :key="prices.ProductID"
            :prices="prices"
            :quantity="item.quantity"
          />
        </div>
        <button
          class="deleteButton"
          @click="
            () => {
              deleteProduct(item.ProductID);
            }
          "
        >
          delete
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  props: ["item", "quantity"],

  methods: {
    ...mapMutations(["deleteProduct"]),
    // ...mapGetters(["priceTwoDecimal"])
  },
};
</script>

<style scoped>
.item-container {
  padding-bottom: 20px;
}
.productWrapper {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  flex-wrap: wrap;
  padding: 20px;
  min-width: 300px;
  max-width: 500px;
  /* height: 100px; */
  background-color: white;
  border: var(--colors-border);
}
.left,
.right {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.right {
  flex-direction: row;
  justify-content: space-between;
}
.title {
  width: 120px;
}
.price {
  display: none;
}

.totalPrice {
  display: none;
}
.deleteButton {
  background-color: red;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
}
@media only screen and (min-width: 700px) {
  .productWrapper {
    width: 600px;
    max-width: 900px;
  }
  .title {
    width: 200px;
  }
  .price {
    width: 120px;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  .left {
    flex-direction: row;
  }
  .totalPrice {
    display: flex;
    align-items: center;
    column-gap: 6px;
  }
}

@media only screen and (min-width: 1200px) {
  .productWrapper {
    width: 1200px;
    flex-direction: row;
  }
  .left,
  .right {
    width: 50%;
    flex-direction: row;
    /* flex-wrap: nowrap; */
    padding-bottom: 20px;
  }
  .price {
    width: 200px;
  }
}
</style>
