<template>
    <div>
        <h2>{{ ingredient.name }}</h2>
        <img :src="ingredient.src" alt="">
        <button class="deleteBtn">delete</button>
    </div>
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