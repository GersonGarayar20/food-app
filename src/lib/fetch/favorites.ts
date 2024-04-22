import { BASE_URL } from "./base-url";
import { ProductI, dataProductI } from "@/types/index";

export async function getFavorites({
  token,
}: {
  token: string;
}): Promise<ProductI[] | null> {
  const res = await fetch(`${BASE_URL}/favorites/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  });

  const json = await res.json();

  return json.data;
}

export async function createFavorite({
  token,
  productId,
}: {
  token: string;
  productId: number;
}): Promise<ProductI | null> {
  const res = await fetch(
    `${BASE_URL}/favorites/create/${productId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const json = await res.json();
  
  return json.data;
}

export async function deleteFavorite({
  token,
  productId,
}: {
  token: string;
  productId: number;
}) {
  const res = await fetch(
    `${BASE_URL}/favorites/delete/${productId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
