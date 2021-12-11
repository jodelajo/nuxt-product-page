<template>
  <div class="buttonWrapper">
    <button
    class="minButton"
      :disabled="quantity <= 0"
      @click="
        () => {
          deleteItem(product.ProductID);
        }
      "
    >
      -
    </button>
    <p>{{ quantity }}</p>
    <button
      class="greenButton"
      @click="
        () => {
          addItem(product.ProductID);
        }
      "
    >
      +
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["product", "quantity"],
  methods: {
    ...mapMutations(["addItem", "deleteItem"]),
  },
};
</script>

<style scoped>
button {
  width: 30px;
  height: 25px;
  border-radius: 4px;
  border: none;
}

.buttonWrapper {
  display: flex;
  align-items: center;
  gap: 6px;
}
.minButton {
    background-color: rgba(255, 174, 174, 0.1);
}
.greenButton {
    color: white;
  background-color: rgb(51, 221, 51);
}
</style>
