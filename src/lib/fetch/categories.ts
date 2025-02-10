
import { BASE_URL } from "./base-url";
import { CategoryI } from "@/types/index";
  
export async function getCategories(): Promise<CategoryI[]> {
  
  const res = await fetch(`${BASE_URL}/categories`);
  const json = await res.json();
  console.log(BASE_URL,7,"entro a las getcategories",json)
  return json.data;
}

export async function getCategory(
  id: string | number
): Promise<CategoryI | null> {
  const res = await fetch(`${BASE_URL}/categories/${id}`,{
    cache: "no-store",
  });
  const json = await res.json();
  return json.data;
}

export async function createCategory(
  formData: any,
  token: string
): Promise<CategoryI | null> {
  const res = await fetch(`${BASE_URL}/categories/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  const json = await res.json();
  console.log({json,res:32})
  return json.data;
}

export async function updateCategory(
  id: string | number,
  data: any
): Promise<CategoryI | null> {
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

export async function deleteCategory(
  id: string | number,token:string
): Promise<CategoryI | null> {

  const res = await fetch(`${BASE_URL}/categories/delete/${id}`, {
    method: "DELETE",
    headers:{
      "Authorization":`Bearer ${token}`
    }
  });
  
  const json = await res.json();
  return json.data;
}
