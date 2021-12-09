<template>
<div class="main-container">
  <main class="product-container">
   
    <h1>Alle producten</h1>
 
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
   console.log('1. dispatch');
   const res = await axios.get('https://a1-api.detailresult.nl/v1/assortmentcache/group/281/104?api_key=6d3a42a3-6d93-4f98-838d-bcc0ab2307fd')
   
   console.log('2. action');
   console.log('3. commit');
   store.commit('init', res.data)
   
    // console.log('fetch', res.data);
 },
computed:{
    ...mapState({

      products: state => {
        // console.log('6. state/mapState', state );
        console.log('6. state counter', state.counter);
        // console.log('itemCounter', state.itemCounter);
        console.log('item', state.item);
        console.log('7. render');
        state.products.products },
      // item: state => {
      //   if (state.products.find(product => product.ProductID == id))
      //  return state.products.item
      // }    
    })
  },


}
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
