<template>
    <div class="h-screen fixed top-[0px] right-[0px] bg-white w-100 z-2">
        <div class="p-10">
            <div class="flex items-center justify-between mb-10">
                <h3 class="text-2xl">Корзина</h3>
                <img @click="toggleCart" class="cursor-pointer" src="/close.svg" alt="">
            </div>
            <div>
                <CartItem />
            </div>
        </div>
    </div>
</template>

<script setup>
import CartItem from './CartItem.vue'

defineProps({
    toggleCart: Function
})

</script>
