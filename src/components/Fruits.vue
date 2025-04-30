<template>
    <div>
        <div>
            <h1 v-for="fruit in data" :key="fruit.id">{{ fruit.title }} </h1>
            {{ count }}
            <button @click="addOne" class="bg-black text-white p-2 cursor-pointer">
                Сплюсовать 1
            </button>
        </div>
    </div>
</template>

<script setup>
import data from "../Data/fruits.json"

defineProps({
    count: Number,
    addOne: Function
})

console.log(data)
</script>
