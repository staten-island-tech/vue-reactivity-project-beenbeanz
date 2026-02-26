<template>
    <h1 id="header">~ choose your customer ~</h1>
   <div id="container">
        <CustomerButton
            v-for="character in customerList" 
            :key="character.name"
            :character = 'character'
            :src="character.src" 
            class="characterImg"
            @click="selectCharacter(character)"
        >
        </CustomerButton>
        <RouterLink to="/order-sushi">
            <button id="submitBtn">Order Sushi</button>
        </RouterLink>
    </div>
</template>

<script setup>
    import { customer } from '@/stores/store';
    import CustomerButton from '@/components/CustomerButton.vue';
    const customerList = [
        {name: 'Bekzat', src: '/bekzat.png'},
        {name: 'Evelynn', src: '/Evelynn.webp'},
        {name: 'Farmer Cletus', src: '/Farmer_Cletus.webp'}
    ];

    function selectCharacter(character){
        customer.value = character;
        console.log(customer.value.src)

    }
</script>

<style scoped>
    #submitBtn{
        display: block;
    }
    .characterImg{
        margin: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    .characterImg:hover{
        background-color: gray;
    }
</style>