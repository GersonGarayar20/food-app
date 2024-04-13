import { BASE_URL } from "./base-url";

export async function getRol(id: string) {
  const res = await fetch(`${BASE_URL}/roles/${id}`);
  return res.json();
}

export async function getRoles() {
  const res = await fetch(`${BASE_URL}/roles`);
  return res.json();
}

export async function deleteRol(id: string) {
  const res = await fetch(`${BASE_URL}/roles/${id}`, {
    method: "DELETE",
  });
  return res;
}

export async function updateRol(id: string, data: any) {
  const res = await fetch(`${BASE_URL}/roles/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function createRol(data: any) {
  const res = await fetch(`${BASE_URL}/roles/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
