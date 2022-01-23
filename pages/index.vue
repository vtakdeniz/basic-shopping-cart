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

export default {
  name: 'IndexPage',
  components:{
    Product
  },
  created() {
    this.$nuxt.$on('open-basket', data => {
        this.$nuxt.$emit('send-basket',this.inBasket);
      })
    },
  methods:{
    addToBasket(id){   
      console.log(id); 
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
     products:[
       {
         id:1,
         category:"Home",
         title:"Wooden dinner table",
         description:"Wooden table for dinner room",
         price:1250,
         pic_link:"https://ronixtools.com/en/blog/wp-content/uploads/2021/03/Learn-how-to-make-a-simple-wooden-table-at-home1.jpg"
       },
       {
         id:2,
         category:"Garden",
         title:"Garden Hose",
         description:"Green garden hose",
         price:50,
         pic_link:"https://cdn11.bigcommerce.com/s-3c8l9ljcjn/images/stencil/1280x1280/products/24929/35825/39a0105_lifetime_garden_hose_rack_alt2__22440__05859.1593445624__65789.1631907713.jpg?c=1"
       },
       {
         id:3,
         category:"Garden",
         title:"Wooden garden table",
         description:"Wooden table for gardens",
         price:1350,
         pic_link:"https://image.made-in-china.com/202f0j00pwvEBLQMaTqP/Outdoor-Furniture-Wooden-Garden-Table-Picnic-Table-Sets-for-Children.jpg"
       },
       {
         id:4,
         category:"Home",
         title:"TV Unit",
         description:"TV Unit for plasma TV's",
         price:150,
         pic_link:"https://www.ulcdn.net/opt/www.ulcdn.net/images/products/125614/slide/666x363/Zephyr_LargeTV_Unit_TK_2.jpg?1608823365"
       },
       {
         id:5,
         category:"Cleaning",
         title:"Robot vacuum",
         description:"Robot vacuum that clean your house automatically",
         price:700,
         pic_link:"https://images.hepsiburada.net/assets/ProductDescription/202007/52168f7d-a5c5-47c3-b810-3810d3b57e8e.jpg"
       },
       {
         id:6,
         category:"Electronics",
         title:"Iphone 13",
         description:"Latest model of iphone released this year",
         price:1000,
         pic_link:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-silver-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652954000"
       },
       {
         id:7,
         category:"Electronics",
         title:"Tv",
         description:"Plasma Tv",
         price:1000,
         pic_link:"https://5.imimg.com/data5/NA/OH/MY-2906751/td-500x500.jpg"
       },
       {
         id:8,
         category:"Electronics",
         title:"Imac pro",
         description:"Latest release of Apple's Imac",
         price:3000,
         pic_link:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/v2-89592_large.jpg"
       },
       {
         id:9,
         category:"Home",
         title:"Rug",
         description:"Self cleaning rug for houses",
         price:1100,
         pic_link:"https://www.therange.co.uk/_m5/5/9/1596549272_2_2067.jpg"
       }
     ],
     inBasket:[],
     basketCount:[],
   }
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
