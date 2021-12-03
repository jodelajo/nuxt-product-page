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
    width: 20%;
}
</style>