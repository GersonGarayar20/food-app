import { api } from "./api";

export async function getOrder({ id }: { id: number }) {
  const res = await api.get(`/orders/${id}`);
  return res.data;
}
export async function getCRoOrders() {
  const res = await api.get(`/orders`);
  return res.data;
}
export async function createOrder({
  client_id,
  date,
  name,
  orders_status,
  payment_status,
  total,
}: {
  name: string;
  date: Date;
  total: number;
  client_id: number;
  orders_status: string;
  payment_status: string;
}) {
  const res = await api.post(`/orders/create`, {
    data: { client_id, date, name, orders_status, payment_status, total },
  });
  return res.data;
}

export async function getCRoOrdersDetails() {
  const res = await api.get(`/o`);
  return res.data;
}
