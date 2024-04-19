import { BASE_URL } from "./base-url";
import { ProductI } from "@/types/index";

export async function getFavorites({userid}:{userid:number}): Promise<ProductI[]> {
  const res = await fetch(`${BASE_URL}/favorites/${userid}`,{
    headers: {
      "Content-Type": "application/json",
      'Authorization':`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzEzNTQyNDY5LCJleHAiOjE3MTM2Mjg4Njl9.xfqKTdmBkRhtTfRg3WCS8XOIz-QrWA5o3fA-K2Pldeg`
    }
  }
  );
 
  const json = await res.json();
  return json.data;
}

export async function createFavorite({token,productid}:{token:string,productid:number}): Promise<ProductI> {
  const res = await fetch(`${BASE_URL}/favorites/create/${productid}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization':`Bearer ${token}`
    }
  });
  const json = await res.json();
  return json.data;
}

export async function deleteCategory({token,productid}:{token:string,productid:number}): Promise<ProductI> {
  const res = await fetch(`${BASE_URL}/favorites/delete/${productid}`, {
    method: "DELETE",
    headers:{
      "Content-Type": "application/json",
      'Authorization':`Bearer ${token}`
    }
  });
  const json = await res.json();
  return json.data;
}
