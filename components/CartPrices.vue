<template>
<div>  
   <p class="price" >€ {{ quantity * nicePrice }}</p>
</div>
</template>

<script>
export default {
  props: ["quantity", "prices"],
  computed: {
    nicePrice(){ 
      return this.prices.Price.toFixed(2)}
  }
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
