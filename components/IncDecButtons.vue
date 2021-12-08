<template>
    <div>
      
 <button
            @click="
              () => {
                decrement();
              }
            "
          >
            -
          </button>
          <button
            @click="
              () => {
                increment();
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
        props: ['product'],
          methods: {
    ...mapMutations(["addItem"]),
    ...mapMutations(["increment"]),
    ...mapMutations(["decrement"]),
  },
};
    
</script>

<style  scoped>

</style>