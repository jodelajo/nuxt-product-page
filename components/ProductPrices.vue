<template>
<div>
  <p class="price" v-if="prices.RegularPrice">€ {{ prices.RegularPrice }}</p>
   <p class="price" v-else>€ {{ prices.Price }}</p>
</div>

</template>
 
<script>
export default {
  props: {
      prices: {
          RegularPrice: Number,
          Price: Number,
      }
  },

};
</script>

<style scoped>
.price {
  font-size: 20px;
}
@media only screen and (min-width: 1200px) {

}
</style>
