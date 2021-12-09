<template>
  <div class="item-container">
    <section class="productWrapper">
      <h4>{{ item.MainDescription }}</h4>
      <div class="product-image">
        <ProductPictures
          v-for="pictures in item.ProductPictures"
          :key="pictures.ProductID"
          :pictures="pictures"
          :altText="item.MainDescription"
        />
      </div>

      <div class="price">
        <ProductPrices
          v-for="prices in item.ProductPrices.slice(0, 1)"
          :key="prices.ProductID + '-price'"
          :prices="prices"
        />
      </div>
      <button
        @click="
          () => {
            deleteItem(item.ProductID);
            decrement();
            
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
  props: ["item"],

  methods: {
    ...mapMutations(["deleteItem", "decrement"]),
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
  width: 200px;
}

</style>
