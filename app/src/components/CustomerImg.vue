<template>
    <img :src="customer.src" :alt="customer.name">
</template>

<script>
    defineProps({
        customer: {
            type: Object,
            required: true
        }
    })
</script>

<style scoped>

</style>