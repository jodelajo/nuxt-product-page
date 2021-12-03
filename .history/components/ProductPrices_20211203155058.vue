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
    font-size: 20px;
}
@media only screen and (min-width: 1200px) {
.price {
    font-size: 30px;
}
}

</style>