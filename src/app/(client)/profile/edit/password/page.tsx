import React from "react";
import { ChangePasswordForm } from "./change-password-form";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function page() {
  const sesion = await getServerSession(authOptions);

  if (!sesion) return <div>hola</div>;

  return (
    <div>
      <h1>Cambiar contraseña</h1>
      <ChangePasswordForm user={sesion.user} />
    </div>
  );
}
