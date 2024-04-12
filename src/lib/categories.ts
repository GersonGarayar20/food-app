import axios from "axios";
import { BASE_URL } from "./base-url";

export function getCategories() {
    return axios.get(`/categories/`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function getCategory({id}:{id:number}) {
    return axios.get(`/categories/${id}`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}

export function deleteCategory({id}:{id:number}) {
    return axios.delete(`/categories/${id}`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function updateCategory({name,id}:{name:string,id:number}) {
    return axios.put(`/categories/${id}`,{baseURL:BASE_URL,data:{name}})
                .then((res)=>res.data)
}
export function createCategory({name}:{name:string}) {
    return axios.post(`/categories/create`,{baseURL:BASE_URL,data:{name}})
                .then((res)=>res.data)
}