import axios from "axios";
import { BASE_URL } from "./base-url";

export function getClient({id}:{id:number}) {
    return axios.get(`/clients/${id}`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function getClients() {
    return axios.get(`/clients`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function deleteClient({id}:{id:number}) {
    return axios.delete(`/clients/${id}`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function updateClient({id,address,email,image,name,password}:{name:string,id:number,address:string,email:string,password:string,image:string}) {
    return axios.put(`/clients/${id}`,{baseURL:BASE_URL,data:{address,name,email,image,password}})
                .then((res)=>res.data)
}
export function createClient({address,email,image,name,password,phone}:{name:string,address:string,email:string,password:string,image:string,phone:string}) {
    return axios.post(`/clients/create`,{baseURL:BASE_URL,data:{address,name,email,image,password,phone}})
                .then((res)=>res.data)
}