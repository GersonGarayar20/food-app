import { BASE_URL } from "./base-url";
import { ProductI } from "@/types/index";

export async function getFavorites({
  userId,
  token,
}: {
  userId: string;
  token: string;
}): Promise<ProductI[] | null> {
  const res = await fetch(`${BASE_URL}/favorites/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await res.json();
  return json.data;
}

export async function createFavorite({
  token,
  productId,
  userId,
}: {
  token: string;
  productId: string;
  userId: string;
}): Promise<ProductI | null> {
  const res = await fetch(
    `${BASE_URL}/favorites/${userId}/create/${productId}`,
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
  userId,
}: {
  token: string;
  productId: string;
  userId: string;
}): Promise<ProductI | null> {
  const res = await fetch(
    `${BASE_URL}/favorites/${userId}/delete/${productId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const json = await res.json();
  return json.data;
}
