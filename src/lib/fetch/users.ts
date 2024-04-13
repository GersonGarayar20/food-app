import { BASE_URL } from "./base-url";

export async function getUser(id: string) {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  return res.json();
}

export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
}

export async function deleteUser(id: string) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
  return res;
}

export async function updateUser(id: string, data: any) {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function createUser(data: any) {
  const res = await fetch(`${BASE_URL}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
