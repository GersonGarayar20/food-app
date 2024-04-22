import { BASE_URL } from "./base-url";

export async function getNotifications(id:number) {
    
    const res = await fetch(`${BASE_URL}/notifications/`)

    const json=await res.json()

    return json.data
}