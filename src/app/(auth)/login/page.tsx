import React from "react";
import { LoginForm } from "./login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="md:w-96 mx-auto my-auto p-8 flex flex-col gap-8 pt-[20vh] lg:gap-12 lg:min-w-[500px]">
      <h1 className="text-2xl lg:text-3xl text-center">Iniciar Sesion</h1>
      <LoginForm />
      <p className="flex gap-4">
        ¿No tienes cuenta?{" "}
        <Link className="text-blue-500" href={"/register"}>
          Crear una cuenta
        </Link>
      </p>
    </div>
  );
}
