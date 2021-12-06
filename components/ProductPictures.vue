<template>
  <img
    :src="pictures.Url"
    :alt="altText"
    class="product-picture"
    v-if="pictures.IsPrimary"
  />
</template>

<script>
export default {
  props: ["pictures", "altText"],
};
</script>

<style scoped>
.product-picture {
  width: 80%;
  background-color: rgba(85, 85, 85, 0.1);
  padding: 10px;
  min-height: 234px;
  min-width: 80%;
}

@media only screen and (min-width: 992px) {
  .product-picture {
    width: 90%;
    min-width: 234px;
    padding: 20px;
  }
}
</style>
