<template>
   <CustomerImg
   v-for="customer in customers"
   :key="customer.name"
   :customer="customer"
   ></CustomerImg>
</template>

<script>
import { customers } from '@/stores/store';
import CustomerImg from '@/components/CustomerImg.vue';

</script>

<style scoped>

</style>