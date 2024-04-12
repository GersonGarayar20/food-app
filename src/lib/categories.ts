import { api } from "./api";

export async function getCategories() {
  const res = await api.get(`/categories/`);
  return res.data;
}
export async function getCategory({ id }: { id: number }) {
  const res = await api.get(`/categories/${id}`);
  return res.data;
}

export async function deleteCategory({ id }: { id: number }) {
  const res = await api.delete(`/categories/${id}`);
  return res.data;
}
export async function updateCategory({
  name,
  id,
}: {
  name: string;
  id: number;
}) {
  const res = await api.put(`/categories/${id}`, { data: { name } });
  return res.data;
}
export async function createCategory({ name }: { name: string }) {
  const res = await api.post(`/categories/create`, { data: { name } });
  return res.data;
}
