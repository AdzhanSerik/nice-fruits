<template>
    <div class="relative border border-2 border-[#F3F3F3] flex gap-2 items-center p-5 rounded-[20px]">
        <img src="/avocado.png" alt="">
        <div class="flex flex-col gap-3 justify-between items-start h-full">
            <span class="text-xl">{{ title }}</span>
            <p class="font-bold">2 200 тг./2 кг.</p>
        </div>
        <img class="absolute bottom-7 right-3" src="/close.svg" alt="">
    </div>
</template>

<script setup>
defineProps({
    cartItem: Object,
    title: String
})
</script>
