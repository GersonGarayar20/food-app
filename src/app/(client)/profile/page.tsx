import { ThemeSwitcher } from "@/components/theme-switcher";
import { buttonVariants } from "@/components/ui/button";
import { getServerSession } from "next-auth/next";
import ButtonCerrarSesion from "./button-cerrar-sesion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";
import { authOptions } from "@/lib/auth";
import BarraNavegacion from "../components/BarraNavegacion";

export default async function ProfilePage() {
  const sesion = await getServerSession(authOptions);

  return (
    <section className="md:max-w-96 mx-auto px-4 flex flex-col gap-8">
      <BarraNavegacion title="Perfil" />

      <section className="flex flex-col gap-4">
        <div className="aspect-square size-32 mx-auto">
          <img
            src={
              sesion?.user?.image
                ? sesion.user.image
                : "https://randomuser.me/api/portraits/men/62.jpg"
            }
            className="rounded-full w-full h-full object-contain m-auto border-[1px] border-slate-300 mb-4"
            alt="foto de perfil"
          />
        </div>
        <div>
          <h2 className="font-bold text-xl text-center capitalize">
            {sesion?.user?.name}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            {sesion?.user?.email}
          </p>
        </div>
      </section>

      <div className="flex justify-center">
        <Link
          className={cn(buttonVariants({ variant: "secondary" }))}
          href={"/profile/edit"}
        >
          Editar Perfil
        </Link>
      </div>

      {/* acciones */}
      <section className="flex flex-col gap-4">
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
    </section>
  );
}
