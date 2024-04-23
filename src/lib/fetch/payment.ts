import { BASE_URL } from "./base-url";
import { CategoryI } from "@/types/index";

export async function getPagePayment(body:any): Promise<any> {
  const res = await fetch(`${BASE_URL}/payment-intent`,{method:"POST", headers: {
    "Content-Type": "application/json",
  },body:JSON.stringify(body)});
  const json = await res.json();
  return json;
}
