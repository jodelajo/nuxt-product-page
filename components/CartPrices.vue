<template>
  <div>
    <p class="price">
      €
      <span v-bind:class="{ strike: offer }">
        {{ (quantity * prices.Price).toFixed(2) }}</span
      >
      <span v-if="offer"> {{ (quantity * offer.OfferPrice).toFixed(2) }}</span>
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
