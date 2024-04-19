import { UserI } from "@/types";
import { BASE_URL } from "./base-url";

export async function getUser(id: string): Promise<UserI> {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  const json = await res.json();
  return json.data;
}

export async function getUsers(): Promise<UserI[]> {
  const res = await fetch(`${BASE_URL}/users`);
  const json = await res.json();
  return json.data;
}

export async function deleteUser(id: string): Promise<UserI> {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
  const json = await res.json();
  return json.data;
}

export async function updateUser(id: string, data: any): Promise<UserI> {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}

export async function createUser(data: any): Promise<UserI> {
  const res = await fetch(`${BASE_URL}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}

export async function changeUserPassword(data: {
  token: string;
  oldPassword: string;
  newPassword: string;
}): Promise<UserI> {
  const res = await fetch(`${BASE_URL}/users/create`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}
