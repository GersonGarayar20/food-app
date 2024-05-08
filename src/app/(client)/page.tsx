import { getServerSession } from "next-auth";
import HomePage from "./page.client";
import { authOptions } from "@/lib/auth";
import { getNotifications } from "@/lib/fetch/notification";
import {  dataNotificationI } from "@/types";

export default async function HomeServer() {
  const session = await getServerSession(authOptions);
  
  
  return(
    <HomePage user={session?.user} /> 
  )
}