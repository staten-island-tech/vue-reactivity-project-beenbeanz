<template>
    <button class="card" type="button">
        <h2>{{ character.name }}</h2>
        <img :src="character.src" alt="character">
    </button>
</template>

<script setup>

defineProps({
    character: {
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