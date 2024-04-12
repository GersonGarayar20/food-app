import axios from "axios";
import { BASE_URL } from "./base-url";

export function getUser({id}:{id:number}) {
    return axios.get(`/users/${id}`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function getUsers() {
    return axios.get(`/users`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function deleteUser({id}:{id:number}) {
    return axios.delete(`/users/${id}`,{baseURL:BASE_URL,data:id})
                .then((res)=>res.data)
}
export function updateUser({id,address,email,image,name,password}:{name:string,id:number,address:string,email:string,password:string,image:string}) {
    return axios.put(`/users/${id}`,{baseURL:BASE_URL,data:{address,name,email,image,password}})
                .then((res)=>res.data)
}
export function createUser({address,email,image,name,password}:{name:string,address:string,email:string,password:string,image:string}) {
    return axios.post(`/users/create`,{baseURL:BASE_URL,data:{address,name,email,image,password}})
                .then((res)=>res.data)
}
