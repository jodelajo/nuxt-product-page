<template>
<div>
    <!-- {{prices}} -->
    <!-- if price else RegularPrice -->
  <p class="price" v-if="RegularPrice">€ {{ prices.RegularPrice }}</p>
   <p class="price" v-else>€ {{ prices.Price }}</p>
</div>

</template>
 
<script>
export default {
  props: ["prices"],
};
</script>

<style scoped>
.price {
  font-size: 20px;
}
@media only screen and (min-width: 1200px) {
  .price {
    font-size: 30px;
  }
}
</style>
