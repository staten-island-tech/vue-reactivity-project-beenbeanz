<template>
    <button class="card" type="button">
        <h2>{{ ingredient.name }}</h2>
        <img :src="ingredient.src" alt="">
    </button>
</template>

<script setup>

defineProps({
    ingredient: {
        type: Object,
        required: true
    }
})

</script>

<style scoped>
img{
    width: 50px;
    height: 50px;
}
</style>