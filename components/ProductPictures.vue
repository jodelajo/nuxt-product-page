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
  background-color: rgba(85, 85, 85, 0.123);
  box-shadow: 3px 3px 5px rgba(59, 59, 59, 0.2);
  border-radius: 6px;
  padding: 20px;
}

@media only screen and (min-width: 1200px) {
  .pics {
    width: 60%;
  }
}
</style>
