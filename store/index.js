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
    deleteItem(state,product){
        state.basket.splice(state.basket.indexOf(product), 1);
    }
}