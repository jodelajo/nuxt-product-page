<template>
    <div class="container">
        <img :src="pictures.Url" alt="picture">
    </div>
</template>

<script>
    export default {
        props: ['pictures']
    }
</script>

<style scoped>

</style>