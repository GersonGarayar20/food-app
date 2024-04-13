import { api } from "./axios";

export async function getOrder(id: number) {
  const res = await api.get(`/orders/${id}`);
  return res.data;
}

export async function getOrders() {
  const res = await api.get(`/orders`);
  return res.data;
}

export async function createOrder(data: {
  name: string;
  date: Date;
  total: number;
  client_id: number;
  orders_status: string;
  payment_status: string;
}) {
  const res = await api.post(`/orders/create`, data);
  return res.data;
}
