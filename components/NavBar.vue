<template>
  <nav class="navBar">
    <div class="shoppingcart">
      <NuxtLink to="/">home</NuxtLink>
      <NuxtLink to="/products"
        >Products <span class="sr-only">(current)</span>
      </NuxtLink>
      <NuxtLink to="/my-items"> <Basket /> <span>{{ counter }}</span>
      </NuxtLink><span class="sr-only">(current)</span>
     
     
    
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {

    computed: {
        ...mapState(['counter'])
    }
};
</script>

<style scoped>
.navBar {
  width: 100vw;
  background-color: rgb(56, 56, 56);
  color: white;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.shoppingcart {
  margin-right: 40px;
}
.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.shoppingcart a {
  color: white;
  text-decoration: none;
}

.shoppingcart a:hover {
  color: red;
}
.basket {
  font-size: 20px;
  height: 48px;
  width: 48px;
  z-index: 10;
  color: white;
}
</style>
