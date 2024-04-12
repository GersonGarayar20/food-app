import { api } from "./axios";

export async function getUser(id: number) {
  const res = await api.get(`/users/${id}`);
  return res.data;
}
export async function getUsers() {
  const res = await api.get(`/users`);
  return res.data;
}
export async function deleteUser(id: number) {
  const res = await api.delete(`/users/${id}`, { data: id });
  return res.data;
}
export async function updateUser(
  id: string,
  data: {
    name: string;
    address: string;
    email: string;
    password: string;
    image: string;
  }
) {
  const res = await api.put(`/users/${id}`, data);
  return res.data;
}
export async function createUser(data: {
  name: string;
  address: string;
  email: string;
  password: string;
  image: string;
}) {
  const res = await api.post(`/users/create`, data);
  return res.data;
}
