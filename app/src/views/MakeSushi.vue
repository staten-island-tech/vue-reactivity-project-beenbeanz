<template>
    <div>
    <img src="/riceAndSeaweed.png" alt="mat with sushi and rice on top">
    <IngredientButton
        @click="addIngredient"
        v-for="ingredient in orderedIngredients"
        :key="ingredient.name"
        :ingredient="ingredient"
    />
    </div>
</template>

<script setup>
    import { orderedIngredients } from '@/stores/store';
</script>

<style scoped>

</style>