'use client'
import ArrowBack from "@/components/icons/ArrowBack";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { getNotifications } from "@/lib/fetch/notification";
import { NotificationI } from "@/types";
import { Bell, Laugh, Sparkles, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

function Notification() {

    const [notifications,setNotifications]=useState<NotificationI[]>([])

    useEffect(()=>{
        getNotifications(1)
        .then((data)=>setNotifications(data))
    },[])

    return (
       <div className="flex flex-col gap-4 p-4">
        <div>
        <ArrowBack />
        </div>
        <div className="flex flex-col gap-4 ">
        <Bell className="w-16 h-16 stroke-red-500 mt-8"/> 
        <div className="mb-8">
            <h2 className="text-3xl font-bold">Tus Notificaciones ⭐</h2>
        </div>
        </div>
         <Alert>
         <Sparkles className="stroke-yellow-500" />
            <AlertTitle>Bienvenido a Food-App!</AlertTitle>
            <AlertDescription>
                Estamos felices de que pueda experimentar la mejor a de pedidos.
            </AlertDescription>
            {notifications.map(notification=>{
                return(
                    <article key={notification?.id}>
                            <h1>{notification?.title}</h1>
                            <h2>{notification?.description}</h2>
                    </article>
                )
            })}
        </Alert>

       </div>

    );
}

export default Notification;