<template>
  <div class="container">
    <div class="item">
      <MyItem v-for="item in shoppingcart" :key="item.ProductID" :item="item" />
       </div>
      <div class="order">
        <h4>totaalbedrag</h4>
        € {{ totalPrice }}
        <NuxtLink to="/order">
          <button
          class="button"
          >Bestellen</button>
        </NuxtLink>
      </div>
   
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["shoppingcart"]),
    ...mapGetters(["totalPrice"]),
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
justify-content: center;
  align-items: center;
  padding-top: 20px;
  /* padding: 5rem; */
}
.item {
display: flex;
flex-direction: column;
}
button {
  height: 25px;
  border-radius: 4px;
  padding: 4px 10px;
  border: none;
}
.button {
color: white;
  background-color: rgb(51, 221, 51);
  font-size: 16px;
  margin-top: 10px;
  width: 160px;
  height: 35px;
}
.order {
    display: flex;
    flex-direction: column;
    /* min-width: 200px; */
    /* justify-self: flex-end; */
    /* align-self: flex-end; */
    /* margin-right: 40px; */
}


@media only screen and (min-width: 700px) {
  .container {
      width: 100%;
    flex-direction: column;
  }
}
</style>
