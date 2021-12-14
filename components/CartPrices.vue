<template>
  <div>
    <!-- <p class="price">€ {{ quantity * nicePrice }}</p> -->

    <p class="price">
      €
      <span v-bind:class="{ strike: offer }">
        {{ quantity * prices.Price }}</span
      >
      <span v-if="offer"> {{ quantity * offer.OfferPrice }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    quantity: {
      quantity: Number,
    },
    prices: {
      Price: Number,
    },
    offer: {
      OfferPrice: Number,
    },
  },
  computed: {
    nicePrice() {
      return this.prices.Price.toFixed(2);
    },
  },
};
</script>

<style scoped>
.price {
  font-size: 14px;
}
.strike {
  text-decoration: line-through;
}
@media only screen and (min-width: 700px) {
  .price {
    font-size: 20px;
  }
}
</style>
