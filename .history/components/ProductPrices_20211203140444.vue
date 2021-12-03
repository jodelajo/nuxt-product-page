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
.price {
    font-size: 4rem;
}
</style>