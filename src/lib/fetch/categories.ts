import { BASE_URL } from "./base-url";

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories/`);
  return res.json();
}

export async function getCategory(id: string) {
  const res = await fetch(`${BASE_URL}/categories/${id}`);
  return res.json();
}

export async function deleteCategory(id: string) {
  const res = await fetch(`${BASE_URL}/categories/${id}`, {
    method: "DELETE",
  });
  return res;
}

export async function updateCategory(id: string, data: any) {
  const res = await fetch(`${BASE_URL}/categories/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function createCategory(data: any) {
  const res = await fetch(`${BASE_URL}/categories/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
