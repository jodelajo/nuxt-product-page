<template>
<div>  
   <p class="price" >€ {{ quantity * prices.Price }}</p>
</div>
</template>

<script>
export default {
  props: {
    quantity: Number,
      prices: {
          Price: Number,
      }
  },
};
</script>

<style scoped>
.price {
  font-size: 20px;
}
</style>
