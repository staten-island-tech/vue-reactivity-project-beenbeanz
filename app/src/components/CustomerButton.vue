<template>
    <button class="card" type="button">
        <h2>{{ customer.name }}</h2>
        <img :src="customer.src" alt="">
    </button>
</template>

<script setup>
import { customer } from '@/stores/store';


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