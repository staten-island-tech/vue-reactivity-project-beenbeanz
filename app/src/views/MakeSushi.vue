<template>
    <div id="container">
        <div id="imageContainer">
            <img src="/riceAndSeaweed.png" id='bottomImg'alt="mat with sushi and rice on top">
            </div>
            <div id="overlayImgDiv">
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
    width: 20%;
}
#bottomImg{
    z-index: 0;
    height: auto;
    display: block;
    width: 100%;
}
#overlayImgDiv{
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100px;
    pointer-events: none;
}
.overlayImage{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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