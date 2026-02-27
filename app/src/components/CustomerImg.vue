<template>
    <img :src="customer.src" :alt="customer.name">
</template>

<script setup>
    defineProps({
        customer: {
            type: Object,
            required: true
        }
    })
</script>

<style scoped>

</style>