"use server";

import { revalidatePath } from "next/cache";
import { BASE_URL } from "./base-url";
import { ProductI } from "@/types";
import { redirect } from "next/navigation";

export async function getProducts(): Promise<ProductI[]> {
  const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
  const json = await res.json();
  return json.data;
}

export async function getProduct(id: string | number): Promise<ProductI> {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  const json = await res.json();
  return json.data;
}

export async function updateProduct(
  id: string | number,
  data: { name?: string; image?: string; price?: number }
): Promise<ProductI> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json.data;
}

export async function createProduct(data: any): Promise<ProductI> {
  const res = await fetch(`${BASE_URL}/products/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  revalidatePath("/admin/products");
  // redirect("/admin/products");
  return json.data;
}

export async function deleteProduct(id: string | number): Promise<ProductI> {
  const res = await fetch(`${BASE_URL}/products/delete/${id}`, {
    method: "DELETE",
  });
  const json = await res.json();
  revalidatePath("/admin/products");
  return json.data;
}
