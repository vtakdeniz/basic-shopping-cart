export const state=()=>({
    basket:[]
})

export const mutations={
    addItem(state,item){
        let productFromBasket=state.basket.find(e=>e.product.id===item.id);
        if(productFromBasket!==undefined){
          productFromBasket.productCount++;
        }
        else{
            state.basket.push({product:item,productCount:1});
        }
    },
    decreaseItem(state,itemid){
        let productFromBasket=state.basket.find(e=>e.product.id===itemid);
        if(productFromBasket!==undefined){
          productFromBasket.productCount--;
        }
    },
    increaseItem(state,itemid){
        let productFromBasket=state.basket.find(e=>e.product.id===itemid);
        if(productFromBasket!==undefined){
          productFromBasket.productCount++;
        }
    },
    deleteItem(state,itemid){
        state.basket=state.basket.filter(e=>e.product.id!==itemid);
    },
    clearBasket(state){
        state.basket=[];
    }
}