import { api } from "./api";

export async function getUser({ id }: { id: number }) {
  const res = await api.get(`/users/${id}`);
  return res.data;
}
export async function getUsers() {
  const res = await api.get(`/users`);
  return res.data;
}
export async function deleteUser({ id }: { id: number }) {
  const res = await api.delete(`/users/${id}`, { data: id });
  return res.data;
}
export async function updateUser({
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
  const res = await api.put(`/users/${id}`, {
    data: { address, name, email, image, password },
  });
  return res.data;
}
export async function createUser({
  address,
  email,
  image,
  name,
  password,
}: {
  name: string;
  address: string;
  email: string;
  password: string;
  image: string;
}) {
  const res = await api.post(`/users/create`, {
    data: { address, name, email, image, password },
  });
  return res.data;
}
