<template>
  <div>
    <button 
      @click="
        () => {
          decrement();
          deleteItem(product.ProductID);
        }
      "
    >
      -
    </button>
    <button
      @click="
        () => {
          increment();
          itemIncrement(product.ProductID)
          addItem(product.ProductID);
        }
      "
    >
      +
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["product"],
  methods: {
    ...mapMutations(["addItem", "increment", "decrement", "deleteItem", "itemIncrement" ]),
  },
};
</script>

<style scoped>
button {
    width: 30px;
    height: 25px;
}
</style>
