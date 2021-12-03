<template>
    <div>
        <img :src="pictures.Url" alt="picture">
{{ pictures.Url }}
    </div>
</template>

<script>
    export default {
        props: ['pictures']
    }
</script>

<style scoped>

</style>