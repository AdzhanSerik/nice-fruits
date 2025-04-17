<template>
    <div class="flex items-center justify-between gap-[40px] flex-wrap mt-10">
        <Product v-for="fruit in fruits" :key="fruit.id" :fruit="fruit" />
    </div>
</template>

<script setup>
import Product from './Product.vue'

defineProps({
    fruits: Array
})


</script>
