"use server";

import { revalidatePath } from "next/cache";
import { BASE_URL } from "./base-url";
import { ProductI } from "@/types";
// import { redirect } from "next/navigation";

export async function getProducts(): Promise<ProductI[] | null> {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) {
      throw new Error("La solicitud al servidor falló.");
    }
    const json = await res.json();
    return json.data;
  } catch (error) {
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
    return null;
  }
}

export async function createProduct(
  formData: any,
  token: string
): Promise<ProductI | null> {
  try {
    const res = await fetch(`http://localhost:5000/api/products/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) {
      const a = await res.json();
      console.log(a);

      throw new Error("La solicitud al servidor falló.");
    }
    const json = await res.json();
    revalidatePath("/admin/products");
    // redirect("/admin/products");
    return json.data;
  } catch (error) {
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
    return null;
  }
}
