<template>
    <div>
        <h3>{{ product.MainDescription }}</h3>
        <p>{{ product.ContactGegevens }}</p>
        <p>{{ product }}</p>
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