<template>
   <CustomerImg
      v-for="customer in customers"
      :customer="customer"
      :key="customer.name"
      :src="customer.src"
   />
   <button id="serveBtn" @click="serveDish">serve dish</button>
   <img @click='isVisible' isVisible='false' id='sushiImg' src="/sushi.jpg" alt="sushi plate">
</template>

<script setup>
import { customers } from '@/stores/store';
import CustomerImg from '@/components/CustomerImg.vue';

function serveDish(){
   

}
</script>

<style scoped>
   #sushiImg{
      height: 350px;
   }
</style>