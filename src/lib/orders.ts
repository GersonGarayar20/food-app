import axios from "axios";
import { BASE_URL } from "./base-url";

export function getOrder({id}:{id:number}) {
    return axios.get(`/orders/${id}`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function getCRoOrders() {
    return axios.get(`/orders`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
export function createOrder({client_id,date,name,orders_status,payment_status,total}:{name:string,date:Date,total:number,client_id:number,orders_status:string,payment_status:string}) {
    return axios.post(`/orders/create`,{baseURL:BASE_URL,data:{client_id,date,name,orders_status,payment_status,total}})
                .then((res)=>res.data)
}


export function getCRoOrdersDetails() {
    return axios.get(`/o`,{baseURL:BASE_URL})
                .then((res)=>res.data)
}
