<template>
    <div class="price">
{{ prices.Price}}
    </div>
</template>

<script>
    export default {
         props: ['prices']
    }
</script>

<style  scoped>
.price a {
    font-size: 30px;
}
</style>