<template>
  <div class="product">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" :src="product.pic_link" alt="picture of product">
            <div class="px-6 py-4 bg-green-300 ">
                <div class="font-bold text-xl mb-2">
                    {{product.title}}
                </div>
                <p class="text-gray-700 text-base">
                {{product.description}}
                </p>
                <p class="text-gray-700 text-base">
                Price : {{product.price}}$
                </p>
                <div class="px-1 pt-2 pb-1">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Category : {{product.category}}</span>
                </div>
            </div>
             <div v-if="isBasket" class="px-1 pt-2 pb-1">
                    <span class="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        In Basket : {{itemCount}}
                    </span>
            </div>
            <div v-if="isBasket" class="px-1 pt-2 pb-1">
                    <span class="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        In Total : {{inTotal}}$
                    </span>
            </div>
            <div class="px-1 pt-2 pb-1">
                    <button v-if="!isBasket" @click="$emit('add-to-basket',product.id)" class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                        <fa icon="plus"/> <span>Add To Basket</span>
                    </button>
                    <button @click="increaseProduct" v-if="isBasket" class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                        <fa icon="plus"/>
                    </button>
                    <button @click="decreaseProduct" v-if="isBasket" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                        <fa icon="minus"/>
                    </button>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'Product',
    props:['product','isBasket','productWrapper'],
    methods:{
        decreaseProduct(){
            if(this.productWrapper.productCount>1){
                this.$store.commit('decreaseItem', this.product.id);
            }
            else{
                this.$store.commit('deleteItem', this.product);
            }
        },
        increaseProduct(){
            this.$store.commit('increaseItem', this.product.id);
        }
    },
    data(){
        return {

        }
    },
    computed:{
        inTotal:function(){
            return this.productWrapper.productCount*this.product.price;
        },
        itemCount:function(){
            return this.productWrapper.productCount
        }
    }
}
</script>

<style>

.product{
margin: 10px;
padding-top: 25px;

}

</style>