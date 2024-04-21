import ArrowBack from "@/components/icons/ArrowBack";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { buttonVariants } from "@/components/ui/button";
import { getServerSession } from "next-auth/next";
import ButtonCerrarSesion from "./button-cerrar-sesion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";
import { authOptions } from "@/lib/auth";

export default async function ProfilePage() {
  const sesion = await getServerSession(authOptions);

  return (
    <div className="px-4">
      <header className="py-8 flex justify-between">
        <ArrowBack />
        <h1 className="text-3xl font-semibold text-center">Perfil</h1>
        <div className="w-10"></div>
      </header>

      <div className="text-center">
        <img
          src="https://randomuser.me/api/portraits/men/62.jpg"
          className="rounded-full w-30 h-30 m-auto border-[1px] border-slate-300 mb-4"
          alt="foto de perfil"
        />
        <h2 className="font-bold mb-2">{sesion?.user?.name}</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          {sesion?.user?.email}
        </p>
      </div>

      <div className="text-center my-6">
        <Link className={cn(buttonVariants())} href={"/profile/edit"}>
          Editar Perfil
        </Link>
      </div>

      {/* acciones */}
      <section className="py-4 flex flex-col gap-2">
        <ThemeSwitcher />
        {sesion !== null ? (
          <ButtonCerrarSesion />
        ) : (
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "py-6 flex justify-between items-center rounded-full"
            )}
            href={"/login"}
          >
            Iniciar Sesion
            <LogIn />
          </Link>
        )}
      </section>
    </div>
  );
}
