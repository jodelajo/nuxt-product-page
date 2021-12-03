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
    display: inline;
    align-self: baseline;
    width: 50%;
     border: 1px solid black;
}

@media only screen and (min-width: 1200px) {
    .pics {
    width: 50%;
   
}
}

</style>