import { addProductToBasket ,decreaseProductInBasket,clearBasketApi} from "../Api"

export const state=()=>({
    basket:[]
})

export const mutations={
    addWrapper(state,wrapper){
        if(state.basket.length>=1) return
        wrapper?.forEach(w=>state.basket.push(w)) 
    },
    addItem(state,item){
        console.log("test")
        let productFromBasket=state.basket.find(e=>e.product.id===item.id);
        if(productFromBasket!==undefined){
          addProductToBasket(undefined,productFromBasket.product.id)
          productFromBasket.productCount++;
        }
        else{
            addProductToBasket(undefined,item.id)
            state.basket.push({product:item,productCount:1});
        }
    },
    decreaseItem(state,itemid){
        let productFromBasket=state.basket.find(e=>e.product.id===itemid);
        if(productFromBasket!==undefined){
          decreaseProductInBasket(undefined,productFromBasket.product.id)
          productFromBasket.productCount--;
        }
    },
    increaseItem(state,itemid){
        console.log(productFromBasket)
        let productFromBasket=state.basket.find(e=>e.product.id===itemid);
        if(productFromBasket!==undefined){
          addProductToBasket(undefined,productFromBasket.product.id)
          productFromBasket.productCount++;
        }
    },
    deleteItem(state,id){
        decreaseProductInBasket(undefined,id)
        state.basket=state.basket.filter(e=>e.product.id!==id);
    },
    clearBasket(state){
        clearBasketApi(undefined)
        state.basket=[];
    }
}