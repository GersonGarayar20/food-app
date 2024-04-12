import { api } from "./axios";

export async function getRol(id: number) {
  const res = await api.get(`/roles/${id}`);
  return res.data;
}

export async function getRoles() {
  const res = await api.get(`/roles`);
  return res.data;
}

export async function deleteRol(id: number) {
  const res = await api.delete(`/roles/${id}`);
  return res.data;
}

export async function updateRol(id: number, data: { name: string }) {
  const res = await api.put(`/roles/${id}`, data);
  return res.data;
}

export async function createRol(data: { name: string }) {
  const res = await api.post(`/roles/create`, data);
  return res.data;
}
