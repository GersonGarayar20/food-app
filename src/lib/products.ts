import { api } from "./api";

export async function getProducts() {
  const res = await api.get("/products");
  return res.data;
}

export async function getProduct({ id }: { id: number }) {
  const res = await api.get(`/products/${id}`);
  return res.data;
}
export async function updateProduct({
  id,
  name,
}: {
  name: string;
  id: number;
}) {
  const res = await api.put(`/products/${id}`, { data: { name } });
  return res.data;
}
export async function createProduct({
  price,
  image,
  name,
  category_id,
}: {
  name: string;
  category_id: number;
  price: number;
  image: string;
}) {
  const res = await api.post(`/products/create`, {
    data: { price, name, image, category_id },
  });
  return res.data;
}
