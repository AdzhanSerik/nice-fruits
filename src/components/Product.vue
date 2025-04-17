<template>
    <div
        class="basis-[20%] border relative border-[#D3D3D3] flex flex-col items-center justify-center rounded-[20px] p-6 gap-3">
        <div class="absolute top-4 left-4 border border-[#D3D3D3] p-2 rounded-[10px]">
            <img src="/favorite.svg" alt="">
        </div>
        <img width="120px" height="120px" :src="fruit.image" alt="">
        <h3 class="text-[14px] ">{{ fruit.title }}</h3>
        <div class="flex items-center justify-between w-full">
            <div class="flex flex-col gap-1">
                <p class="text-[#BDBDBD] text-[11px]">Цена</p>
                <span class="text-[14px] font-bold">{{ fruit.price }} тг/кг.</span>
            </div>
            <div class="border border-[#D3D3D3] p-2 rounded-[10px] border-[2px]">
                <img src="/add.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    fruit: Object
})
</script>
