import React from "react";
import { LoginForm } from "./login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="md:w-96 mx-auto p-8 flex flex-col gap-8">
      <h1 className="text-2xl">Iniciar Sesion</h1>
      <LoginForm />
      <p>
        si no tienes cuenta
        <Link href={"/register"}>Registrarte</Link>
      </p>
    </div>
  );
}
