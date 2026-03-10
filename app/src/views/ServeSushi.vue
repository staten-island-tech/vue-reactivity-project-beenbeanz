<template>
   <p
      class="customerDiag"
      v-for="customer in customers"
      :key="customer.name"
      v-show="isVisible && customers.some(character => character.name === customer.name)"
   >
   {{ customer.diag }}
   </p>

   <CustomerImg
      v-for="customer in customers"
      :customer="customer"
      :key="customer.name"
      :src="customer.src"
   />
   <button id="serveBtn" @click="serveDish">serve dish</button>
   <img v-show='isVisible' id='sushiImg' src="/sushi.jpg" alt="sushi plate">
</template>

<script setup>
import { customers } from '@/stores/store';
import CustomerImg from '@/components/CustomerImg.vue';
import { ref } from 'vue';

const isVisible = ref(false);

function serveDish(){
   isVisible.value = true;
}

</script>

<style scoped>
   #sushiImg{
      height: 350px;
   }
</style>