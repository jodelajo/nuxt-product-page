<template>
    <div>
         <p> {{ product}}</p>
        <h3>{{ product.MainDescription }}</h3>
       
        <!-- <p>{{ product.ContactGegevens.ContactNaam }}</p> -->
        <p v-for="(pr, index) in product"
        :key="index"
        >{{ pr }}</p>


         <!-- <p>{{ product.ProductPictures.Url }}</p> -->
    </div>
</template>

<script>
    export default {
        props: ['product']
    }
   
</script>
//brand
//WebSubGroup
//ProductOffers

<style  scoped>

</style>