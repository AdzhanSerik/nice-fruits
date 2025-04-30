<template>
    <div class="bg-white rounded-[20px] px-[80px]" v-auto-animate>
        <Header :toggleCart="toggleCart" />
        <Slider />
        <Search :onChange="onChange" />
        <AllProducts :fruits="fruits" :addToCart="addToCart" :openModalQuantity="openModalQuantity" />
        <div @click="toggleCart" v-if="isOpenCart" class="w-full h-full opacity-[70%] bg-black fixed left-0 top-0 z-1">
        </div>
        <Cart v-if="isOpenCart" :toggleCart="toggleCart" :removeItemCart="removeItemCart" :cartItems="cartItems" />
        <QuantityFruit v-if="isOpenQuantityModal" :kgModal="kgModal" :increment="increment" :decrement="decrement"
            :addToCart="addToCart" :priceQuant="priceQuant" :staticPriceFruit="staticPriceFruit"
            :changeValue="changeValue" :num="num" :correctFruit="correctFruit" />
    </div>



</template>

<script setup>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Search from '../components/Search.vue'
import Fruits from '../Data/fruits.json'
import Cart from '../components/Cart.vue'
import QuantityFruit from '../components/QuantityFruit.vue'
import AllProducts from '../components/AllProducts.vue'
import { onMounted, ref } from 'vue'


const fruits = ref(Fruits)
const searchText = ref('')
const isOpenCart = ref(false)
const cartItems = ref([])
const kgModal = ref(0)
const isOpenQuantityModal = ref(false)
const staticPriceFruit = ref(0)
const priceQuant = ref(0)
const correctFruit = ref({})







function openModalQuantity(fruit) {
    kgModal.value = 1
    staticPriceFruit.value = fruit.price
    priceQuant.value = fruit.price
    correctFruit.value = { ...fruit, price: priceQuant.value }
    isOpenQuantityModal.value = !isOpenQuantityModal.value
}



function increment(val) {
    priceQuant.value = val
    kgModal.value++
    priceQuant.value = Number(priceQuant.value) * Number(kgModal.value)
}

function changeValue(e) {
    kgModal.value = e.target.value
    priceQuant.value = e.target.value * staticPriceFruit.value
}

function decrement(val) {
    priceQuant.value = val
    kgModal.value--
    priceQuant.value = Number(priceQuant.value) * Number(kgModal.value)
}

function renderFruits() {
    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
    cartItems.value = cartItemsFromLocalStorage || []
    if (cartItemsFromLocalStorage) {
        fruits.value = fruits.value.map(item => {
            const findFruit = cartItems.value.find(fruitFromCart => fruitFromCart.id === item.id)
            if (findFruit) {
                return {
                    ...item,
                    isAdded: true
                }
            }
            else {
                return {
                    ...item,
                    isAdded: false
                }
            }

        })
    }
    else {
        fruits.value = fruits.value.map(item => ({
            ...item,
            isAdded: false
        }))
    }
}

function addToCart(fruitCart) {



    fruitCart.price = priceQuant.value

    const isFoundFruit = cartItems.value.find(item => item.id === fruitCart.id)
    if (!isFoundFruit) {
        cartItems.value.push(fruitCart)
        localStorage.setItem('cart', JSON.stringify(cartItems.value))
    }
    else {
        cartItems.value = cartItems.value.filter(item => item.id != fruitCart.id)
        localStorage.setItem('cart', JSON.stringify(cartItems.value))
    }

    fruits.value = fruits.value.map(item => {
        const findFruit = cartItems.value.find(fruitFromCart => fruitFromCart.id === item.id)
        if (findFruit) {
            return {
                ...item,
                isAdded: true
            }
        }
        else {
            return {
                ...item,
                isAdded: false
            }
        }

    })


    console.log(cartItems.value)
    console.log(fruits.value)

    isOpenQuantityModal.value = !isOpenQuantityModal.value
}

function removeItemCart(id) {
    cartItems.value = cartItems.value.filter(item => item.id != id)
    localStorage.setItem('cart', JSON.stringify(cartItems.value))
    renderFruits()
}



onMounted(() => {
    renderFruits()
})


function onChange(e) {
    searchText.value = e.target.value
    fruits.value = Fruits.filter(fruit => fruit.title.toLowerCase().includes(searchText.value.trim().toLowerCase()))
    console.log(fruits.value)
}

function toggleCart() {
    isOpenCart.value = !isOpenCart.value
}


</script>
