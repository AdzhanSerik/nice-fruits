<template>
    <div class="bg-white rounded-[20px] px-[80px]">
        <Header />
        <Slider />
        <Search :onChange="onChange" />
        <AllProducts :fruits="fruits" />
        <div class="w-full h-full opacity-[70%] bg-black fixed left-0 top-0 z-1"></div>
        <Cart />
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Search from '../components/Search.vue'
import Fruits from '../Data/fruits.json'
import Cart from '../components/Cart.vue'
import AllProducts from '../components/AllProducts.vue'
import { ref } from 'vue'

const fruits = ref(Fruits)
const searchText = ref('')

function onChange(e) {
    searchText.value = e.target.value
    fruits.value = Fruits.filter(fruit => fruit.title.toLowerCase().includes(searchText.value.trim().toLowerCase()))
    console.log(fruits.value)
}


</script>
