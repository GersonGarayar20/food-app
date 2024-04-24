import { authOptions } from "@/lib/auth";
import { getNotifications } from "@/lib/fetch/notification";
import {  dataNotificationI } from "@/types";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NotificaitonClient } from "./page.client";



async function Notification() {
    const session=await getServerSession(authOptions)
    if (!session?.user?.accessToken) return redirect('/login')
    const dataNotifications:dataNotificationI[]= await getNotifications({token:session.user.accessToken})
    

    return (
       <NotificaitonClient dataNotifications={dataNotifications} token={session.user.accessToken}/>

    );
}

export default Notification;