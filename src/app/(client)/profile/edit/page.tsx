import React from "react";
import { EditUserForm } from "./edit-user-form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import BarraNavegacion from "../../components/BarraNavegacion";

export default async function page() {
  const sesion = await getServerSession(authOptions);
  console.log(sesion);

  if (!sesion) return <div>no has iniciado sesion</div>;

  return (
    <section className="md:max-w-96 mx-auto px-4 flex flex-col gap-8">
      <BarraNavegacion title="Editar perfil" />
      <EditUserForm
        user={sesion.user}
        userId={sesion.user.id}
        token={sesion.user.accessToken}
      />
    </section>
  );
}
