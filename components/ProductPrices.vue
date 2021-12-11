<template>
<div>  
   <p class="price">€ {{ prices.Price }}</p>
</div>
</template>
 
<script>
export default {
  props: {
      prices: {
          Price: Number,
      }
  },
};
</script>

<style scoped>
.price {
  font-size: 14px;
}
@media only screen and (min-width: 700px) {
  .price {
  font-size: 20px;
}
}
</style>
