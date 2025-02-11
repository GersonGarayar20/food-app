import { ThemeSwitcher } from "@/components/theme-switcher";
import { FolderKey, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";
import CounterCart from "./components/CounterCart";
import { cn } from "@/lib/utils";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import UserProfile from "./components/AvatarImage";
import { pollerOne } from "@/fonts";

export default async function NavbarHome() {
  const data= await getServerSession(authOptions);
 
  console.log({data})
  return (
    <header className="py-4 flex justify-between items-center">
      <h2 className={cn(pollerOne.className, "text-3xl tracking-tighter md:tracking-normal")}>Bravazo</h2>

      <div className="flex gap-4 items-center justify-center">
        {
          data?.user?.rol == "admin" && <Link href={"/admin"}>
          <FolderKey className="w-8 h-8" />
        </Link>
        }
        <Link href={"/favorites"}>
          <Heart className="w-8 h-8" />
        </Link>
        <ThemeSwitcher text={false} />
        <div className="relative bg-white dark:bg-transparent rounded-3xl p-1 lg:top-0 lg:right-0">
          <CounterCart />
        </div>
        {data == null
          ? <Link href={"/login"} className="bg-white text-black rounded-lg p-1 px-2">iniciar sesión</Link>
          : (<Link href={"/profile"}>
            {
              (data.user?.image)
                ? <img src={data.user?.image} alt="imagen profile" />
                : <UserProfile userName={data.user?.name!}/>
            }
        
          </Link>)
        }  
      </div>
    </header>
  );
}
