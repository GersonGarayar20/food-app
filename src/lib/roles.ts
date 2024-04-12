import { api } from "./api";

export async function getRol({ id }: { id: number }) {
  const res = await api.get(`/roles/${id}`);
  return res.data;
}
export async function getCRoles() {
  const res = await api.get(`/roles`);
  return res.data;
}
export async function deleteRol({ id }: { id: number }) {
  const res = await api.delete(`/roles/${id}`);
  return res.data;
}
export async function updateRol({ id, name }: { name: string; id: number }) {
  const res = await api.put(`/roles/${id}`, { data: { name } });
  return res.data;
}
export async function createRol({ name }: { name: string }) {
  const res = await api.post(`/roles/create`, { data: { name } });
  return res.data;
}
