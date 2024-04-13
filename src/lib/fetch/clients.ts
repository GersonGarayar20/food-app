import { BASE_URL } from "./base-url";

export async function getClient(id: string) {
  const res = await fetch(`${BASE_URL}/clients/${id}`);
  return res.json();
}

export async function getClients() {
  const res = await fetch(`${BASE_URL}/clients`);
  return res.json();
}

export async function deleteClient(id: string) {
  const res = await fetch(`${BASE_URL}/clients/${id}`, {
    method: "DELETE",
  });
  return res;
}

export async function updateClient(id: string, data: any) {
  const res = await fetch(`${BASE_URL}/clients/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function createClient(data: any) {
  const res = await fetch(`${BASE_URL}/clients/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
