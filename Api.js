import { data } from "autoprefixer"

const axios = require("axios")

const baseUrl = process.env.API || "http://localhost:8080"

export async function  fetchAllProducts(url=baseUrl){
    return await axios.get(url+"/api/products").then(r=>r.data)
}

export async function  fetchAllBasket(url=baseUrl){
    return await axios.get(url+"/api/basket").then(r=>r.data)
}


export async function addProductToBasket(url=baseUrl,id){
    return await axios.post((url+"/api/basket/"+id)).then(r=>r.data)
}

export async function decreaseProductInBasket(url=baseUrl,id){
    return await axios.delete((url+"/api/basket/"+id)).then(r=>r.data)
}

export async function clearBasketApi(url=baseUrl){
    return await axios.delete((url+"/api/basket/")).then(r=>r.data)
}