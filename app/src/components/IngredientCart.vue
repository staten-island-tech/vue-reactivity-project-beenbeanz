<template>
    <div>
        <h2>{{ ingredient.name }}</h2>
        <img :src="ingredient.src" alt="">
        <button class="deleteBtn" @click="deleteIngredient(ingredient)">delete</button>
    </div>
</template>

<script setup>
import { orderedIngredients } from '@/stores/store';


defineProps({
    ingredient: {
        type: Object,
        required: true
    }
})

function deleteIngredient(ingredient){
    orderedIngredients.value.splice(ingredient, 1)
    console.log(ingredient)
}
</script>

<style scoped>
img{
    width: 50px;
    height: 50px;
}
.deleteBtn{
    display: block;
    border-radius: 5px;
}
</style>