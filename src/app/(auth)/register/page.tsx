import Link from "next/link";
import React from "react";
import { RegisterForm } from "./register-form";

export default function RegisterPage() {
  return (
    <div className="md:w-[400px] mx-auto p-8 flex flex-col gap-12 pt-[15vh] lg:min-w-[550px]">
      <h1 className="text-2xl text-center lg:text-3xl">Registrarte</h1>
      <RegisterForm />
      <p className="flex gap-4">
        ¿Tienes una cuenta?{" "}
        <Link className="text-blue-500" href={"/login"}>
          Inicia sesion
        </Link>
      </p>
    </div>
  );
}
