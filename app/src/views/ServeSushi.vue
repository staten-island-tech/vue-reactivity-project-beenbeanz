<template>
   <CustomerImg
      v-for="customer in customers"
      :customer="customer"
      :key="customer.name"
      :src="customer.src"
   />
</template>

<script setup>
import { customers } from '@/stores/store';
import CustomerImg from '@/components/CustomerImg.vue';

</script>

<style scoped>

</style>