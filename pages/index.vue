<template>
  <div class="wrapper">
    
      <div class="product-page">
        <Product @add-to-basket="addToBasket" :isBasket="false" :key="product.id"
         :product="product"
          v-for="product in products"/>
      </div>
  </div>
</template>

<script>

import Product from '../components/Product.vue';
import {mapState,mapGetters,mapActions, mapMutations} from 'vuex';
import {fetchAllProducts,fetchAllBasket,addProductToBasket,decreaseProductInBasket,clearBasket} from '../Api'

export default {
  name: 'IndexPage',
  components:{
    Product
  },
  methods:{
     addToBasket(id){    
      let html=`<div id="info-box" class="info-box bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 fixed left-0 right-0" role="alert">
      <p class="font-bold">Product added</p>
      <p class="text-sm">Product added to your basket</p>
      </div>`

      let wrapper = document.querySelector(".wrapper");
      wrapper.insertAdjacentHTML("afterbegin", html);

      let info_box = document.querySelector(".info-box");

      setTimeout(()=>info_box.remove(),2100);

      let product = this.products.find(e=>e.id===id);
      this.$store.commit('addItem', product);
    }
  },
  data(){
   return{
     products:[], 
   }
  },
  async created(){
    let products=await fetchAllProducts()
    this.products=products
  }
}
</script>

<style scoped>
.product-page{
  display: flex;
  justify-content:space-evenly;
  flex-wrap: wrap;
  margin: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 10px;
  
}

.wrapper{
  padding-top: 80px;
}



</style>
