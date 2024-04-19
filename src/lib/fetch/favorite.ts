import { BASE_URL } from "./base-url";
import { ProductI } from "@/types/index";

export async function getFavorites({userid}:{userid:number}): Promise<{error:boolean,data:ProductI[]|null,message:string} > {
  const res = await fetch(`${BASE_URL}/favorites/${userid}`,{
    headers: {
      "Content-Type": "application/json",
      'Authorization':`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNzEzNTY3NzI1LCJleHAiOjE3MTM2NTQxMjV9.yXPAkVWxRqwMhdfujGE3m37eZkg5VoGtWu5roI9ghHA`
    }
  }
  );
 
  const json = await res.json();
  
  return json;
}

export async function createFavorite({token,productid}:{token:string,productid:number}): Promise<ProductI> {
  const res = await fetch(`${BASE_URL}/favorites/${1}/create/${productid}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization':`Bearer ${token}`
    }
  });
  const json = await res.json();
  return json.data;
}

export async function deleteFavorite({token,productid}:{token:string,productid:number}): Promise<ProductI> {
  const res = await fetch(`${BASE_URL}/favorites/${1}/delete/${productid}`, {
    method: "DELETE",
    headers:{
      "Content-Type": "application/json",
      'Authorization':`Bearer ${token}`
    }
  });
  const json = await res.json();
  return json.data;
}
