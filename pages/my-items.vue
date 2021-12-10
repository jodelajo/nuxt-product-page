<template>
  <div class="container">
    <MyItem v-for="item in shoppingcart" :key="item.ProductID" :item="item" />
    <h4>totaalbedrag</h4>
    {{ totalPrice }}
    <button>Afrekenen</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["shoppingcart"]),
    ...mapGetters(["totalPrice"]),
  },
};
</script>

<style scoped>
.container {
  padding: 5rem 0;
}
</style>
