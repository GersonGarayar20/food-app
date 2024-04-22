import { UserI } from "@/types";
import { BASE_URL } from "./base-url";

export async function getUser(id: string): Promise<UserI> {
  const res = await fetch(`${BASE_URL}/users/user`);
  const json = await res.json();
  return json.data;
}

export async function getUsers(): Promise<UserI[]> {
  const res = await fetch(`${BASE_URL}/users`);
  const json = await res.json();
  return json.data;
}

export async function deleteUser(id: string): Promise<UserI> {
  const res = await fetch(`${BASE_URL}/users/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
  const json = await res.json();
  return json.data;
}

export async function updateUser(
  id: string,
  token: string,
  formData: FormData
): Promise<UserI> {
  console.log("datos ----->", id, token, formData);

  const res = await fetch(`${BASE_URL}/users/update`, {
    method: "PUT",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  console.log("respuesta->", json);
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
  const res = await fetch(`${BASE_URL}/users/update/password`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}
