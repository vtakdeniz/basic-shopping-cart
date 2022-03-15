<template>
    <div class="wrapper" v-if="basketContains">
        <span v-if="$store.state.basket.length>0" class="basket-box border-8 border-gray-800  bg-white fixed left-0 right-0   px-2 sm:px-4 py-2.5 rounded dark:bg-gray-200">
            <strong>Your Basket</strong>
        </span>
        <button @click="clearBasket" v-if="$store.state.basket.length>0" type="button" data-modal-toggle="popup-modal" class=" page-button px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full">
            Clear Basket
        </button>


        <div v-if="$store.state.basket.length>0" class="products">
            <Product :key="productWrapper.product.id" :isBasket="true" 
            :product="productWrapper.product"
            :productWrapper="productWrapper"
            v-for="productWrapper in $store.state.basket"/>
        </div>
        <div class="basket-box bg-white fixed left-0 right-0 border-8 border-gray-800  px-2 sm:px-4 py-2.5 rounded dark:bg-gray-200"  v-else>
            <span><strong>You have no items in your basket</strong></span>
        </div>
        <div v-if="$store.state.basket.length>0" class="totalPrice bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
               Total Price : {{totalPrice}}$
        </div>
    </div>
</template>

<script>
import { fetchAllBasket } from '../Api';
import Product from '../components/Product.vue';
export default {
  components: { Product },
    name:'Basket',
    props:['basket'],
    methods:{
        clearBasket(){
            this.$store.commit('clearBasket');
        }
    },
    mounted() {
    },
    async created(){
         let inBasket=await fetchAllBasket('http://localhost:8080')
         this.$store.commit('addWrapper', inBasket)
    },
    data(){
        return {
            inBasket:[],
            basketContains:true
        }
    },
    computed:{
        totalPrice:function(){
            let totalPrice=0;
            this.$store.state.basket.forEach(pr => {
                totalPrice+=(pr.product.price*pr.productCount);
            });
            return totalPrice;
        }
    }
}
</script>

<style scoped>
    .products{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin: 20px;
        padding: 10px;
    }
    .basket-box{
        margin-top: 70px;
    }
    .page-button{
        margin-top: 190px;
        margin-left: 15px;
    }
</style>