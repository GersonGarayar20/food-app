import { BASE_URL } from "./base-url";

export async function signin(data: { email: string; password: string }) {
  const res = await fetch(`${BASE_URL}/signin/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  return json.data;
}
