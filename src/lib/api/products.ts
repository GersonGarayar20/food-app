import { api } from "./axios";

export async function getProducts() {
  const res = await api.get("/products");
  return res;
}

export async function getProduct(id: number) {
  const res = await api.get(`/products/${id}`);
  return res;
}

export async function updateProduct(id: number, data: { name: string }) {
  const res = await api.put(`/products/${id}`, data);
  return res;
}

export async function createProduct(data: {
  name: string;
  category_id: number;
  price: number;
  image: string;
}) {
  const res = await api.post(`/products/create`, data);
  return res;
}
