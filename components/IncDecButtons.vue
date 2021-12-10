<template>
  <div class="buttonWrapper">
    <button 
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
    ...mapMutations(["addItem",  "deleteItem" ]),
  },
};
</script>

<style scoped>
button {
    width: 30px;
    height: 25px;
}

.buttonWrapper {
    display: flex;
    align-items: center;
    gap: 6px;
}
</style>
