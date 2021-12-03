<template>

   <img :src="pictures.Url" alt="picture" class="pics"> 

     
</template>

<script>
    export default {
        props: ['pictures']
    }
</script>

<style scoped>


.pics {
   
    width: 50%;
     /* border: 1px solid black; */
     background-color: rgba(85, 85, 85, 0.123);
     border-radius: 6px;
     padding: 20px;
}

@media only screen and (min-width: 1200px) {
    .pics {
    width: 40%;
   
}
}

</style>