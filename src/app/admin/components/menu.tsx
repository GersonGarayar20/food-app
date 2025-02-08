"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { HomeIcon, BoxIcon, SquareStack, LogOutIcon, Home, LayoutDashboard } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { signOut } from "next-auth/react";

const links = [
  {
    title: "Productos",
    link: "/admin/products",
    icon: <BoxIcon className="size-4" />,
  },
  {
    title: "Categories",
    link: "/admin/categories",
    icon: <SquareStack className="size-4" />,
  }
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <div className="h-full p-4 flex flex-col justify-between">
      <nav className="flex flex-col gap-4">
        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "justify-start items-center gap-2",
            {
              "bg-orange-200 dark:bg-orange-800": pathname === "/admin",
            }
          )}
          href={"/admin"}
        >
          <LayoutDashboard className="size-4" />
          Dashboard
        </Link>
        {links.map(({ title, link, icon }) => (
          <Link
            key={link}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "justify-start items-center gap-2",
              {
                "bg-orange-200 dark:bg-orange-800": pathname.includes(link),
              }
            )}
            href={link}
          >
            {icon}
            {title}
          </Link>
        ))}
        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "justify-start items-center gap-2",
            {
              "bg-orange-200 dark:bg-orange-800": pathname === "/",
            }
          )}
          href={"/"}
        >
          <HomeIcon className="size-4" />
          Home
        </Link>
      </nav>
      <footer className="flex flex-col">
        <ThemeSwitcher text />
        <Button className="justify-start items-center gap-2" variant="ghost" onClick={() => {
          signOut();
        }}>
          <LogOutIcon className="size-4" />
          Cerrar sesion
        </Button>
      </footer>
    </div>
  );
}
