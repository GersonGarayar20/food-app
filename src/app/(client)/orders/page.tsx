import { getServerSession } from "next-auth";
import OrderPage from "./page.client";
import { authOptions } from "@/lib/auth";

export default async function OrderServer() {

    const session=await getServerSession(authOptions)

    return(
        <OrderPage session={session}/>
    )
}