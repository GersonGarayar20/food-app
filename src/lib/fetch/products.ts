"use server";

import { revalidatePath } from "next/cache";
import { BASE_URL } from "./base-url";
import { ProductI } from "@/types";
// import { redirect } from "next/navigation";

export async function getProducts(): Promise<ProductI[] | null> {
  try {
    const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("La solicitud al servidor falló.");
    }
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error(
      "❌ ~ getProducts ~ error:",
      error instanceof Error ? error.message : "Error desconocido"
    );
    return null;
  }
}

export async function getProduct(
  id: string | number
): Promise<ProductI | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) {
      throw new Error("La solicitud al servidor falló.");
    }
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error(
      "❌ ~ getProduct ~ error:",
      error instanceof Error ? error.message : "Error desconocido"
    );
    return null;
  }
}

export async function updateProduct(
  id: string | number,
  data: { name?: string; image?: string; price?: number }
): Promise<ProductI | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("La solicitud al servidor falló.");
    }
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error(
      "❌ ~ updateProduct ~ error:",
      error instanceof Error ? error.message : "Error desconocido"
    );
    return null;
  }
}

export async function createProduct(data: any): Promise<ProductI | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("La solicitud al servidor falló.");
    }
    const json = await res.json();
    revalidatePath("/admin/products");
    // redirect("/admin/products");
    return json.data;
  } catch (error) {
    console.error(
      "❌ ~ createProduct ~ error:",
      error instanceof Error ? error.message : "Error desconocido"
    );
    return null;
  }
}

export async function deleteProduct(
  id: string | number
): Promise<ProductI | null> {
  try {
    const res = await fetch(`${BASE_URL}/products/delete/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("La solicitud al servidor falló.");
    }
    const json = await res.json();
    revalidatePath("/admin/products");
    return json.data;
  } catch (error) {
    console.error(
      "❌ ~ deleteProduct ~ error:",
      error instanceof Error ? error.message : "Error desconocido"
    );
    return null;
  }
}
