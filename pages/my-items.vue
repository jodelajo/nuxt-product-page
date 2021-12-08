<template>

    <div class="container">
        <!-- {{ shoppingcart }} -->
      
        <MyItem 
            v-for="item in shoppingcart"
            :key="item.ProductID"
            :item="item"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        // layout: "no-nav",
        computed: {
            ...mapState([
                'shoppingcart', 'products'
            ]),
        }
    }
</script>

<style scoped>
    .container {
        padding: 5rem 0
    }
</style>