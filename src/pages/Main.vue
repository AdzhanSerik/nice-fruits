<template>
    <div class="bg-white rounded-[20px] px-[80px]">
        <Header />
        <Slider />
        <Search />
        <AllProducts />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Search from '../components/Search.vue'
import Fruits from '../Data/fruits.json'
import AllProducts from '../components/AllProducts.vue'

console.log(Fruits)


</script>
