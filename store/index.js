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
          addProductToBasket('http://localhost:8080',productFromBasket.product.id)
          productFromBasket.productCount++;
        }
        else{
            addProductToBasket('http://localhost:8080',item.id)
            state.basket.push({product:item,productCount:1});
        }
    },
    decreaseItem(state,itemid){
        let productFromBasket=state.basket.find(e=>e.product.id===itemid);
        if(productFromBasket!==undefined){
          decreaseProductInBasket('http://localhost:8080',productFromBasket.product.id)
          productFromBasket.productCount--;
        }
    },
    increaseItem(state,itemid){
        console.log(productFromBasket)
        let productFromBasket=state.basket.find(e=>e.product.id===itemid);
        if(productFromBasket!==undefined){
          addProductToBasket('http://localhost:8080',productFromBasket.product.id)
          productFromBasket.productCount++;
        }
    },
    deleteItem(state,id){
        decreaseProductInBasket('http://localhost:8080',id)
        state.basket=state.basket.filter(e=>e.product.id!==id);
    },
    clearBasket(state){
        clearBasketApi('http://localhost:8080')
        state.basket=[];
    }
}