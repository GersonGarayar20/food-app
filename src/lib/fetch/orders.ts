import { BASE_URL } from "./base-url";

export async function getOrder(id: string) {
  const res = await fetch(`${BASE_URL}/orders/${id}`);
  return res.json();
}

export async function getOrders() {
  const res = await fetch(`${BASE_URL}/orders`);
  return res.json();
}

export async function createOrder(data: any) {
  const res = await fetch(`${BASE_URL}/orders/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
