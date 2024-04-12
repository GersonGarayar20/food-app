import { api } from "./axios";

export async function getClient(id: number) {
  const res = await api.get(`/clients/${id}`);
  return res.data;
}
export async function getClients() {
  const res = await api.get(`/clients`);
  return res.data;
}
export async function deleteClient(id: number) {
  const res = await api.delete(`/clients/${id}`);
  return res.data;
}
export async function updateClient(
  id: number,
  data: {
    name: string;
    id: number;
    address: string;
    email: string;
    password: string;
    image: string;
  }
) {
  const res = await api.put(`/clients/${id}`, data);
  return res.data;
}
export async function createClient(data: {
  name: string;
  address: string;
  email: string;
  password: string;
  image: string;
  phone: string;
}) {
  const res = await api.post(`/clients/create`, data);
  return res.data;
}
