<template>
    <div class="container">
        <img :src="pictures.Url" alt="picture" class="pics"> 
    </div>
</template>

<script>
    export default {
        props: ['pictures']
    }
</script>

<style scoped>

.container {
    width: 20%;
}
</style>