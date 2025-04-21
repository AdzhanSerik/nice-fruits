<template>
    <div v-if="fruits.length > 0" class="flex items-center justify-center gap-[40px] flex-wrap mt-10 pb-20">
        <Product v-for="fruit in fruits" :key="fruit.id" :fruit="fruit" />
    </div>
</template>

<script setup>
import Product from './Product.vue'

defineProps({
    fruits: Array
})


</script>
