import ArrowBack from "@/components/icons/ArrowBack";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import ButtonCerrarSesion from "./button-cerrar-sesion";

export default async function ProfilePage() {
  const sesion = await getServerSession();
  console.log("🚀 ~ ProfilePage ~ sesion:", sesion);

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
        <h2 className="font-bold mb-2">Lucas</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          lucas@gmail.com
        </p>
      </div>

      <div className="text-center my-6">
        <Button className="rounded-full  px-12 py-4 ">Editar Perfil</Button>
      </div>

      {/* acciones */}
      <section className="py-4 flex flex-col gap-2">
        <ThemeSwitcher />
        <ButtonCerrarSesion />
      </section>
    </div>
  );
}
