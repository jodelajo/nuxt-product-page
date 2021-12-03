<template>
  <div class="container">
    <h1>{{ productsSection.MainDescription }}</h1>
    <h3>{{productsSection.Brand}}</h3>
    <div class="productWrapper">
      <ProductPictures
        v-for="pictures in productsSection.ProductPictures"
        :key="pictures.ProductID"
        :pictures="pictures"
      />
        <div class="price">
     <ProductPrices
        v-for="prices in productsSection.ProductPrices"
        :key="prices.ProductID"
        :prices="prices"
      />

      <!-- <Counter /> -->
        </div>
 
    </div>
    <div class="ingredients">
  <ProductsIngredients
      v-for="products in productsSection.ProductDeclarations"
      :key="products"
      :products="products"
    />
    </div>
  

    <!-- {{ productsSection}} -->
    <!-- <br>
<h6>product ingredients</h6>
{{ productsSection.ProductIngredients}}

<h6>product brand</h6>
{{ productsSection.Brand}}
<h6>prices</h6>
{{ productsSection.ProductPrices}} -->
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  components: { Counter },
  props: ["productsSection"],
};
</script>

<style scoped>

.container {
  border-radius: 24px;
  width: 90%;
  padding: 0 1rem 1rem 1rem;
  background-color: white;
  display: flex;
  align-items: flex-start;
  box-shadow: 3px 3px 5px rgb(179, 179, 179, 0.5);
}

.container h1 {
 font-size: 1.6rem;
 margin-top: 20px;
  margin-bottom: -20px;
}
.ingredients {
    display: none;
}
.productWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.price {
    display: flex;
    align-items: flex-end;
   
    column-gap: 20px;
    padding-right: 30px;
}

@media only screen and (min-width: 1200px) {
.container {
width: 1200px;
 padding: 0 3rem 1rem 3rem;
}
.container h1 {
   font-size: 2.4rem;
    margin-top: 40px;
}
.productWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ingredients {
    display: block;
}

}



</style>
