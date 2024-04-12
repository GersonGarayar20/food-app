import axios from "axios";
import { BASE_URL } from "./base-url";

export function getRol({id}:{id:number}) {
    return axios.get(`/roles/${id}`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function getCRoles() {
    return axios.get(`/roles`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function deleteRol({id}:{id:number}) {
    return axios.delete(`/roles/${id}`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function updateRol({id,name}:{name:string,id:number}) {
    return axios.put(`/roles/${id}`,{baseURL:BASE_URL,data:{name}})
                .then((res)=>res.data)
}
export function createRol({name}:{name:string}) {
    return axios.post(`/roles/create`,{baseURL:BASE_URL,data:{name}})
                .then((res)=>res.data)
}