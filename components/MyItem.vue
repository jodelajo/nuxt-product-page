<template>
  <div class="item-container">
    <section class="productWrapper">
      <h4>{{ item.MainDescription }}</h4>
      <div class="price">
        <h5>prijs per stuk</h5>
        <ProductPrices
          v-for="prices in item.ProductPrices.slice(0, 1)"
          :key="prices.ProductID + '-price'"
          :prices="prices"
        />
        <h5>Aantal items</h5>
        <IncDecButtons :product="item" :quantity="item.quantity" />

        <h5>totaalprijs</h5>
        <CartPrices
          v-for="prices in item.ProductPrices.slice(0, 1)"
          :key="prices.ProductID"
          :prices="prices"
          :quantity="item.quantity"
        />
      </div>

      <button
        @click="
          () => {
            deleteProduct(item.ProductID);
          }
        "
      >
        delete
      </button>
    </section>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["item", "quantity"],
  methods: {
    ...mapMutations(["deleteProduct" ]),
  },
};
</script>

<style scoped>
.item-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  padding-bottom: 20px;
}
.productWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 20px;
  width: 80%;
  height: 100px;
  background-color: rgba(214, 214, 214, 0.3);
}
.product-image {
  transform: scale(0.1);
  height: 100px;
  margin-top: -70px;
}

.price {
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
