import { getServerSession } from "next-auth";
import HomePage from "./page.client";
import { authOptions } from "@/lib/auth";
import { getNotifications } from "@/lib/fetch/notification";
import {  dataNotificationI } from "@/types";

export default async function HomeServer() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.accessToken) return <HomePage user={session?.user} isNotification={0}/> 
  
  const notifications:dataNotificationI[]= await getNotifications({token:session.user.accessToken})

  const verifyNotifications=notifications.reduce(({isSeen:prev},{isSeen:current})=>prev+current,0)
  
  return(
    <HomePage user={session?.user} isNotification={verifyNotifications}/> 
  )
}