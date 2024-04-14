import { RolI } from "@/types";
import { BASE_URL } from "./base-url";

export async function getRol(id: string | number): Promise<RolI> {
  const res = await fetch(`${BASE_URL}/roles/${id}`);
  const json = await res.json();
  return json.data;
}

export async function getRoles(): Promise<RolI[]> {
  const res = await fetch(`${BASE_URL}/roles`);
  const json = await res.json();
  return json.data;
}

export async function deleteRol(id: string | number): Promise<RolI> {
  const res = await fetch(`${BASE_URL}/roles/${id}`, {
    method: "DELETE",
  });
  const json = await res.json();
  return json.data;
}

export async function updateRol(id: string | number, data: any): Promise<RolI> {
  const res = await fetch(`${BASE_URL}/roles/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}

export async function createRol(data: any): Promise<RolI> {
  const res = await fetch(`${BASE_URL}/roles/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}
