<template>
<div class="img-container">
   <img :src="pictures.Url" alt="picture" class="pics"> 
</div>
     
</template>

<script>
    export default {
        props: ['pictures']
    }
</script>

<style scoped>


.pics {
   
    width: 50%;
     border: 1px solid black;
     background-color: thistle;
}

@media only screen and (min-width: 1200px) {
    .pics {
    width: 50%;
   
}
}

</style>