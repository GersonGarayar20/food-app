import { api } from "./axios";

export async function getCategories() {
  const res = await api.get(`/categories/`);
  return res;
}
export async function getCategory(id: number) {
  const res = await api.get(`/categories/${id}`);
  return res;
}

export async function deleteCategory(id: number) {
  const res = await api.delete(`/categories/${id}`);
  return res;
}
export async function updateCategory(
  id: number,
  data: { name: string; id: number }
) {
  const res = await api.put(`/categories/${id}`, data);
  return res;
}
export async function createCategory(data: { name: string }) {
  const res = await api.post(`/categories/create`, data);

  
  return res;
}
