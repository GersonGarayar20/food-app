'use client'
import ArrowBack from "@/components/icons/ArrowBack"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { updateUserNotification } from "@/lib/fetch/notification"
import { dataNotificationI } from "@/types"
import { Bell, Sparkles } from "lucide-react"

const handleSeen=async({token,notifyId}:{token:string,notifyId:number})=>{
    const res=await updateUserNotification({token,notifyId})
    console.log(res);
}

export function NotificaitonClient({dataNotifications,token}:{dataNotifications:dataNotificationI[],token:string}) {
    return(
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
                Estamos felices de que pueda experimentar los mejores pedidos.
            </AlertDescription>
        </Alert>
            {dataNotifications.map(data=>{
                return(
                    <Alert key={data?.notification?.id} className={`${data.isSeen?"":"border-green-600"}`} onClick={()=>data.isSeen?null:handleSeen({token,notifyId:data.notification.id})}>
                        <Sparkles className="stroke-yellow-500" />
                        <AlertTitle className="font-bold text-lg">{data?.notification.title}</AlertTitle>
                        <AlertDescription className="text-white/70">
                            {data?.notification.description}
                        </AlertDescription>
                    </Alert>
                )
            })}

       </div>
    )
}