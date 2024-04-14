import { BASE_URL } from "./base-url";
import { CategoryI } from "@/types/index";

export async function getCategories(): Promise<CategoryI[]> {
  const res = await fetch(`${BASE_URL}/categories/`);
  const json = await res.json();
  return json.data;
}

export async function getCategory(id: string): Promise<CategoryI> {
  const res = await fetch(`${BASE_URL}/categories/${id}`);
  const json = await res.json();
  return json.data;
}

export async function deleteCategory(id: string): Promise<CategoryI> {
  const res = await fetch(`${BASE_URL}/categories/${id}`, {
    method: "DELETE",
  });
  const json = await res.json();
  return json.data;
}

export async function updateCategory(
  id: string,
  data: any
): Promise<CategoryI> {
  const res = await fetch(`${BASE_URL}/categories/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}

export async function createCategory(data: any): Promise<CategoryI> {
  const res = await fetch(`${BASE_URL}/categories/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}
