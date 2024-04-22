import { ClientI } from "@/types";
import { BASE_URL } from "./base-url";

export async function getClient(id: string | number): Promise<ClientI | null> {
  const res = await fetch(`${BASE_URL}/clients/${id}`);
  const json = await res.json();
  return json.data;
}

export async function getClients(): Promise<ClientI[]> {
  const res = await fetch(`${BASE_URL}/clients`);
  const json = await res.json();
  return json.data;
}

export async function deleteClient(
  id: string | number
): Promise<ClientI | null> {
  const res = await fetch(`${BASE_URL}/clients/${id}`, {
    method: "DELETE",
  });
  const json = await res.json();
  return json.data;
}

export async function updateClient(
  id: string | number,
  data: any
): Promise<ClientI | null> {
  const res = await fetch(`${BASE_URL}/clients/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}

export async function createClient(data: any): Promise<ClientI | null> {
  const res = await fetch(`${BASE_URL}/clients/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}
