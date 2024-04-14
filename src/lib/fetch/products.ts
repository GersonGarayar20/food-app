import { BASE_URL } from "./base-url";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}

export async function getProduct(id: string) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
}

export async function updateProduct(id: string, data: any) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function createProduct(data: any) {
  const res = await fetch(`${BASE_URL}/products/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
