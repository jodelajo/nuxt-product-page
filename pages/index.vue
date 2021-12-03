<template>
  <div class="container">
    <h1>Alle producten</h1>
    <div class="wrapper">
<ProductsCardDisplay
      :productsSection="allProducts"
    />

    
    </div>
    

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

body {
  /* width: 100vw; */
  box-sizing: border-box;
  margin: 0;
  background-color: rgb(248, 65, 65);
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 300px;
  /* padding: 20px; */
  /* background-color: turquoise; */
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  gap: 20px;
  flex-wrap: wrap;
  /* font-family: 'Readex Pro', sans-serif; */
}
.wrapper {
  /* width: 1200px; */
  display: flex;
  
  flex-direction: row;
 
}
.container h1 {
  margin-top: 80px;
  text-align: center;
  /* color: white; */
}

@media only screen and (min-width: 800px) {
  .container {
    width: 800px;
  }
}
@media only screen and (min-width: 1200px) {
  .container {
    width: 1200px;
  }
}


</style>
