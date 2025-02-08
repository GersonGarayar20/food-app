import { BASE_URL } from "./base-url";

export async function login(data: { email: string; password: string }) {
  try {
    const res = await fetch(`${BASE_URL}/signin/`, {
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
    console.log("fetch auth",{json})
    return json.data;
  } catch (error) {
    console.error(
      "❌ ~ login ~ error:",
      error instanceof Error ? error.message : "Error desconocido"
    );
    return null;
  }
}
