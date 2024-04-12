import { api } from "./api";

export async function getClient({ id }: { id: number }) {
  const res = await api.get(`/clients/${id}`);
  return res.data;
}
export async function getClients() {
  const res = await api.get(`/clients`);
  return res.data;
}
export async function deleteClient({ id }: { id: number }) {
  const res = await api.delete(`/clients/${id}`);
  return res.data;
}
export async function updateClient({
  id,
  address,
  email,
  image,
  name,
  password,
}: {
  name: string;
  id: number;
  address: string;
  email: string;
  password: string;
  image: string;
}) {
  const res = await api.put(`/clients/${id}`, {
    data: { address, name, email, image, password },
  });
  return res.data;
}
export async function createClient({
  address,
  email,
  image,
  name,
  password,
  phone,
}: {
  name: string;
  address: string;
  email: string;
  password: string;
  image: string;
  phone: string;
}) {
  const res = await api.post(`/clients/create`, {
    data: { address, name, email, image, password, phone },
  });
  return res.data;
}
