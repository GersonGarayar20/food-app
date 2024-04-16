import { Category } from "@/types/types";
import { BASE_URL } from "./base-url";

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/categories`);
  const json =await res.json()
  console.log(json)
  return json?.data;
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
