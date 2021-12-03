<template>
  <div class="container">
    <h1>Alle producten</h1>
    <ProductsCardDisplay
      v-for="products in allProducts"
      :key="products.ProductID"
      :productsSection="products"
    />

    <!-- {{ allProducts}}
<br>
<h6>product declaration</h6>
{{ allProducts[0].ProductDeclarations}}
<h6>contact information</h6>
{{ allProducts[0].ProductDeclarations.ContactInformation}}
<h6>pictures</h6>
{{ allProducts[0].ProductPictures}}

<h6>prices</h6>
{{ allProducts[0].ProductPrices}}
<h6>logo's</h6>
{{ allProducts[0].Logos}}
<h6>Websub group</h6>

{{ allProducts[0].WebSubGroups}}
<h6>Nutrition</h6>

{{ allProducts[0].Nutrition}}


<h6>product offers</h6>

{{ allProducts[0].ProductOffers}} -->
  </div>
</template>

//brand //WebSubGroup //ProductOffers
<script>
export default {
  methods: {},
  data() {
    return {
      allProducts: [],
    };
  },
  async fetch() {
    this.allProducts = await fetch(
      "https://a1-api.detailresult.nl/v1/assortmentcache/group/281/104?api_key=6d3a42a3-6d93-4f98-838d-bcc0ab2307fd"
    ).then((res) => res.json());
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;700;900&family=Readex+Pro:wght@300;500;700&display=swap");
.container {
  width: 100vw;
  display: flex;
  padding-top: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(214, 214, 214);
  box-sizing: border-box;
  gap: 20px;
  font-family: "Montserrat", sans-serif;
  /* font-family: 'Readex Pro', sans-serif; */
}
</style>
