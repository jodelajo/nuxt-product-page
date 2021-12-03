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
}

@media only screen and (min-width: 1200px) {
    .pics {
    width: 30%;
}
}

</style>