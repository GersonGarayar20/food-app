import axios from "axios";
import { BASE_URL } from "./base-url";

export function getProducts() {
    return axios.get(`/products/`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function getProduct({id}:{id:number}) {
    return axios.get(`/products/${id}`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function updateProduct({id,name}:{name:string,id:number}) {
    return axios.put(`/products/${id}`,{baseURL:BASE_URL,data:{name}})
                .then((res)=>res.data)
}
export function createProduct({price,image,name,category_id}:{name:string,category_id:number,price:number,image:string}) {
    return axios.post(`/products/create`,{baseURL:BASE_URL,data:{price,name,image,category_id}})
                .then((res)=>res.data)
}