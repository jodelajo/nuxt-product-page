<template>
  <nav class="navBar">
    <div class="shoppingcart">
      <NuxtLink to="/">
        <div class="homeIcon">
          <HomeIcon />
        </div>
      </NuxtLink>
      <NuxtLink to="/my-items">
        <span class="basket">
          <Basket />
          <transition name="bumpyBasket">
            <span v-if="bounce" :key="totalProductsCount" class="counter">{{
              totalProductsCount
            }}</span>
          </transition>
        </span>
      </NuxtLink>
      <span class="sr-only">(current)</span>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      bounce: true,
    };
  },
  computed: {
    ...mapGetters(["totalProductsCount"]),
  },
};
</script>

<style scoped>
.navBar {
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: white;
  border-bottom: 1px solid lightgray;
  color: black;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 8;
}
.shoppingcart {
  display: flex;
  width: 100%;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
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
  color: black;
  text-decoration: none;
}

.homeIcon {
  margin-top: 4px;
}
.basket {
  position: relative;
}

.bumpyBasket-enter-active {
  animation: bumpyBasket-fun 0.5s;
}
.bumpyBasket-leave-active {
  animation: bumpyBasket-fun 0.5s;
}

@keyframes bumpyBasket-fun {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.counter {
  position: absolute;
  text-align: center;

  color: white;
  bottom: 16px;
  left: 30px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: red;
  z-index: 10;
}
@media only screen and (min-width: 500px) {
}
@media only screen and (min-width: 1200px) {
  .shoppingcart {
    width: 1200px;
    padding: 0 50px;
  }
}
</style>
