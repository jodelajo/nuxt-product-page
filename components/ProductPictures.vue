<template>
  <img
    :src="pictures.Url"
    alt="picture"
    class="pics"
    v-if="pictures.IsPrimary"
  />
</template>

<script>
export default {
  props: ["pictures"],
};
</script>

<style scoped>
.pics {
  width: 80%;
  background-color: rgba(85, 85, 85, 0.1);
  padding: 10px;
}

@media only screen and (min-width: 992px) {
  .pics {
    width: 90%;
    padding: 20px;
  }
}
</style>
