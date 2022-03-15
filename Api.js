import { data } from "autoprefixer"

const axios = require("axios")

export async function  fetchAllProducts(url){
    return await axios.get(url+"/api/products").then(r=>r.data)
}

export async function  fetchAllBasket(url){
    console.log(url)
    return await axios.get(url+"/api/basket").then(r=>r.data)
}


export async function addProductToBasket(url,id){
    return await axios.post((url+"/api/basket/"+id)).then(r=>r.data)
}

export async function decreaseProductInBasket(url,id){
    return await axios.delete((url+"/api/basket/"+id)).then(r=>r.data)
}

export async function clearBasketApi(url){
    return await axios.delete((url+"/api/basket/")).then(r=>r.data)
}