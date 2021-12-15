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
            :prices="item.ProductPrices[0]"
            :offer="item.ProductOffers[0]"
          />
        </div>
      </div>

      <div class="right">
        <h5>Aantal items</h5>
        <IncDecButtons :product="item" :quantity="item.quantity" />

        <div class="totalPrice">
          <h5>totaalprijs</h5>
          <CartPrices
            :quantity="item.quantity"
            :prices="item.ProductPrices[0]"
            :offer="item.ProductOffers[0]"
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
import { mapMutations } from "vuex";
export default {
  props: ["item", "quantity"],

  methods: {
    ...mapMutations(["deleteProduct"]),
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
  width: 340px;
  max-width: 500px;
  background-color: white;
  border: var(--colors-border);
}
.left,
.right {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    width: 700px;
    max-width: 900px;
  }
  .title {
    width: 180px;
  }
  .price {
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
  }
  .left {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 120px;
  }
  .totalPrice {
    display: flex;
    justify-content: space-between;
    width: 240px;
    align-items: center;
    /* column-gap: 6px; */
  }
  .deleteButton {
    width: 60px;
  }
}

@media only screen and (min-width: 1200px) {
  .productWrapper {
    width: 1200px;
    max-width: 1200px;
    padding: 20px 40px 0 40px;
    flex-direction: row;
  }
  .totalPrice {
    width: 200px;
  }
  .left,
  .right {
    width: 50%;
    flex-direction: row;
    padding-bottom: 20px;
  }
}
</style>
