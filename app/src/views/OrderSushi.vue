<template>
    <h1>Order</h1>
    <div class="ingredientsContainer">
        <IngredientButton @click="order(ingredient)" v-for="ingredient in sushiIngredients" :key="ingredient.name" :ingredient = 'ingredient'>
        </IngredientButton>
    </div>
    <RouterLink to="/make-sushi">
        <button >Submit Order</button>
    </RouterLink>
    
    <img src="/riceAndSeaweed.png" alt="">
</template>

<script setup>
import { ref, reactive } from 'vue';
import IngredientButton from '@/components/IngredientButton.vue';
const sushiIngredients = ref([
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
    {name: 'Cream cheese', src: 'creamCheese.png'},
    {name: 'Bacon', src: '/bacon.png'},
]);

const orderedIngredients = ref([])
//const ingredient = reactive({name: '', src: ''})
function order(ingredient){
    orderedIngredients.value.push(ingredient)
    console.log(orderedIngredients.value)
}


</script>

<style scoped>

</style>