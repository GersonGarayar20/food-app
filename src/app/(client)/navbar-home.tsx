import { ThemeSwitcher } from "@/components/theme-switcher";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";
import CounterCart from "./components/CounterCart";
import { cn } from "@/lib/utils";
import { pollerOne } from "@/fonts";

export default function NavbarHome({ user }: { user: any }) {
  return (
    <header className="py-4 flex justify-between items-center">
      <h2 className={cn(pollerOne.className, "text-3xl tracking-tighter md:tracking-normal")}>Bravazo</h2>

      <div className="flex gap2  md:gap-4 items-center justify-center">
        <Link href={"/favorites"}>
          <Heart className="w-8 h-8" />
        </Link>
        <ThemeSwitcher text={false} />
        <div className="relative bg-white dark:bg-transparent rounded-3xl p-1 lg:top-0 lg:right-0">
          <CounterCart />
        </div>
        <Link href={"/profile"}>
          <img
            src={
              user?.image
                ? user.image
                : "https://randomuser.me/api/portraits/men/62.jpg"
            }
            className="rounded-full w-10 h-10 border-[1px] border-slate-300"
            alt=""
          />
        </Link>
      </div>
    </header>
  );
}
