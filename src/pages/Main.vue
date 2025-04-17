<template>
    <div class="bg-white rounded-[20px] h-screen px-[80px]">
        <Header />
        <Slider />
        <Search />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Search from '../components/Search.vue'
import Fruits from '../Data/fruits.json'

console.log(Fruits)


</script>
