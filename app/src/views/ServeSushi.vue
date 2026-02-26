<template>
   <button
   @click="a()"></button>
</template>

<script>
import { customer } from '@/stores/store';
import CustomerImg from '@/components/CustomerImg.vue';

function a(){
    console.log(customer);
}
</script>

<style scoped>

</style>