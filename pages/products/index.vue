<template>
<div class="main-container">
  <main class="product-container">
   
    <h1>Alle producten</h1>
<!-- {{products}} -->
    <div class="wrapper">
      <ProductsCardDisplay :productsSection="products" />
    </div>

  </main>
  </div>
</template>

<script>

import {mapState } from 'vuex'
import axios from 'axios'

export default {

 async fetch({store}){

   const res = await axios.get('https://a1-api.detailresult.nl/v1/assortmentcache/group/281/104?api_key=6d3a42a3-6d93-4f98-838d-bcc0ab2307fd')
    // store.commit('init', res.data)
    console.log(res.data);
 },
computed:{
    ...mapState({
      products: state => state.products      
    })
  },


}



//   data() {
//     return {
//       allProducts: [],
//     };
//   },

  
//   async fetch() {
//     this.allProducts = await fetch(
//       "https://a1-api.detailresult.nl/v1/assortmentcache/group/281/104?api_key=6d3a42a3-6d93-4f98-838d-bcc0ab2307fd"
//     ).then((res) => res.json());
//   },
// };
</script>

<style>


.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.product-container {
  width: 300px;
  display: flex;
  justify-content: center;
 
  gap: 20px;
  flex-wrap: wrap;
}
.wrapper {
  display: flex;
  flex-direction: row;
}
.product-container h1 {
  margin-top: 80px;
  text-align: center;
}

@media only screen and (min-width: 800px) {
  .product-container {
    width: 800px;
  }
}
@media only screen and (min-width: 1200px) {
  .product-container {
    width: 1200px;
  }
}
</style>
