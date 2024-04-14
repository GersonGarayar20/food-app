import { OrderI } from "@/types";
import { BASE_URL } from "./base-url";

export async function getOrder(id: string): Promise<OrderI> {
  const res = await fetch(`${BASE_URL}/orders/${id}`);
  const json = await res.json();
  return json.data;
}

export async function getOrders(): Promise<OrderI[]> {
  const res = await fetch(`${BASE_URL}/orders`);
  const json = await res.json();
  return json.data;
}

export async function createOrder(data: any): Promise<OrderI> {
  const res = await fetch(`${BASE_URL}/orders/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}
