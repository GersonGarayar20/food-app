import ArrowBack from "@/components/icons/ArrowBack";
import React from "react";
import { EditUserForm } from "./edit-user-form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function page() {
  const sesion = await getServerSession(authOptions);
  console.log("🚀 ~ page ~ sesion:", sesion);

  if (!sesion) return <div>no has iniciado sesion</div>;

  return (
    <section className="md:max-w-96 mx-auto px-4">
      <header className="py-8 flex justify-between">
        <ArrowBack />
        <h1 className="text-3xl font-semibold text-center">Editar perfil</h1>
        <div className="w-10"></div>
      </header>

      <EditUserForm
        user={sesion.user}
        userId={sesion.userId}
        token={sesion.accessToken}
      />
    </section>
  );
}
