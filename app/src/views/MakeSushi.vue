<template>
    <div id="container">
        <div id="imageContainer">
            <img src="/riceAndSeaweed.png" id='bottomImg'alt="mat with sushi and rice on top">
            <img 
                v-for="(ingredient, index) in placedIngredients" 
                :key="ingredient.name + index"
                :src="ingredient.src" 
                :alt="ingredient.name"
                :style="{ zIndex: index + 1}"
                class="overlayImage"
            />
        </div>
        <div id="ingredientsList">
            <IngredientButton
                class="ingredientBtn"
                @click = "addIngredient(ingredient)"
                v-for="(ingredient, index) in orderedIngredients"
                :key="ingredient.name + index"
                :ingredient="ingredient"
            />
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import IngredientButton from '@/components/IngredientButton.vue';
    import { orderedIngredients } from '@/stores/store';

    const placedIngredients = ref([]);

    function addIngredient(ingredient){
        placedIngredients.value.push(ingredient)
    }
</script>

<style scoped>
#imageContainer{
    position: relative;
    display: inline-block;
    width: 100%;
}
#bottomImg{
    z-index: 0;
    height: auto;
    display: block;
    max-width: 100%;
    position: relative;
}
.overlayImage{
    top: 0;
    left: 0;
    z-index: 1;
    width: 75%;
    height: 75%;
    position: absolute;
    object-fit: contain;
}
#ingredientsList{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.ingredientBtn{
    cursor: pointer;
}
</style>