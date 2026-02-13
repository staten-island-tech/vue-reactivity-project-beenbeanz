<template>
    <h1 id="header">~ place your order ~</h1>
    <div class="ingredientsContainer">
        <IngredientButton 
            @click="order(ingredient)" 
            v-for="ingredient in sushiIngredients" 
            :key="ingredient.name" 
            :ingredient = 'ingredient'
            class="ingredientBtn">
        </IngredientButton>
    </div>
    <RouterLink to="/make-sushi">
        <button id="submitBtn">Submit Order</button>
    </RouterLink>
</template>

<script setup>
import { orderedIngredients } from '@/stores/store';
import { ref, reactive } from 'vue';
import IngredientButton from '@/components/IngredientButton.vue';
const sushiIngredients = [
    {name: 'Salmon', src: '/salmon.png'},
    {name: 'Crab meat', src: '/crabMeat.png'},
    {name: 'Avocado', src: '/avocado.png'},
    {name: 'Cucumber',src: '/cucumber.png'}, 
    {name: 'Egg', src: '/egg.png'},
    {name: 'Eel', src: '/eel.png'},
    {name: 'Peanuts', src: '/peanuts.png'},
    {name: 'Squid', src: '/squid.png'},
    {name: 'Tuna', src: '/tuna.png'},
    {name: 'Mango', src: '/mango.png'},
    {name: 'Shrimp', src: '/shrimp.png'},
    {name: 'Shrimp Tempura', src: '/tempura.png'},
    {name: 'Sweet potato', src: '/sweetPotato.png'},
    {name: 'Cream cheese', src: '/creamCheese.png'},
    {name: 'Bacon', src: '/bacon.png'},
];

function order(ingredient){
    orderedIngredients.value.push(ingredient)
}
</script>

<style scoped>
#header{
    text-align: center;
}
.ingredientBtn{
    gap: 10px;
    margin: 10px;
    border-radius: 5px;
    border: none;
}
.ingredientsContainer{
    max-width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
#submitBtn{
    border-radius: 4px;
    width: 20%;
    height: 30px;
    margin: auto;
    display: block;
    margin-top: 10px;
}
</style>