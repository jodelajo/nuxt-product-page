<template>
  <div>
    <p class="price">
      € <span v-bind:class="{ strike: offer }"> {{ prices.Price }}</span>
      <span v-if="offer"> {{ offer.OfferPrice }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
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
