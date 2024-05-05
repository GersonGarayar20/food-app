import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { HomeIcon, BoxIcon, SquareStack, LogOutIcon } from "lucide-react";

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
  },
];

export default function Menu() {
  return (
    <div className="h-full p-4 flex flex-col justify-between">
      <nav className="flex flex-col gap-4">
        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "justify-start items-center gap-2"
          )}
          href={"/admin"}
        >
          <HomeIcon className="size-4" />
          Dashboard
        </Link>
        {links.map(({ title, link, icon }) => (
          <Link
            key={link}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "justify-start items-center gap-2"
            )}
            href={link}
          >
            {icon}
            {title}
          </Link>
        ))}
      </nav>
      <footer>
        <Button className="justify-start items-center gap-2" variant="ghost">
          <LogOutIcon className="size-4" />
          Cerrar session
        </Button>
      </footer>
    </div>
  );
}
