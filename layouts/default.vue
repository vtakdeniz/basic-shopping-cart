<template>
    <div class="header">
        <Header/>
        <nuxt/>
    </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
    head(){
        return{
            title:'Shopping Cart',
            meta:[
                {
                    hid:'description',
                    name:'description',
                    content:'Shopping Cart'
                }
            ]
        }
    },
}
</script>

<style>
.header{
    display: flex;
    justify-content: space-evenly;

    
}
body{
  background-color: wheat;
}
</style>