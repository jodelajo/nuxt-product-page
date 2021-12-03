<template>
    <p class="price">
  € {{ prices.Price}}
    </p>
</template>

<script>
    export default {
         props: ['prices']
    }
</script>

<style  scoped>
.price {
    font-size: 30px;
}
</style>